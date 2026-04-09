use notify::{Config, Event, EventKind, RecommendedWatcher, RecursiveMode, Watcher};
use std::collections::{HashSet, HashMap};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, RwLock};
use std::sync::mpsc::{channel, Receiver};
use std::time::{Duration, Instant};
use tauri::{AppHandle, Emitter, Manager};
use log::{debug, error, info, warn};

use crate::attachment::{cleanup_attachments_for_deleted_files, sync_attachments_for_renamed_files};

// ── 发往前端的事件负载 ────────────────────────────────────────────────────────

#[derive(serde::Serialize, Clone)]
struct FilesBatchPayload {
    created: Vec<String>,
    modified: Vec<String>,
    deleted: Vec<String>,
    renamed: Vec<RenameEntry>,
}

#[derive(serde::Serialize, Clone)]
struct DirChangedPayload {
    created: Vec<String>,
    deleted: Vec<String>,
    renamed: Vec<RenameEntry>,
}

#[derive(serde::Serialize, Clone)]
struct RenameEntry {
    from: String,
    to: String,
}

// ── 内部待处理事件类型 ────────────────────────────────────────────────────────

#[derive(Debug, Clone, PartialEq)]
enum PendingKind {
    Create,
    Modify,
    Remove,
    DirCreate,
    DirRemove,
}

// ── Remove 候选（等待配对的 Create，用于检测 rename）────────────────────────

struct RemoveCandidate {
    time: Instant,
    /// 在 Remove 事件到达时 path 可能还存在（is_dir() 仍为 true），需提前记录
    was_dir: bool,
}

// ── FileWatcher ───────────────────────────────────────────────────────────────

pub struct FileWatcher {
    _watcher: RecommendedWatcher,
    ignore_list: Arc<Mutex<HashSet<PathBuf>>>,
}

impl FileWatcher {
    /// 启动文件监听。
    /// 使用 AppHandle 而非 WebviewWindow，使监听器生命周期与应用一致，
    /// 不受 config 窗口关闭/重新打开影响。
    pub fn start(workspace_root: PathBuf, app_handle: AppHandle) -> Result<Self, String> {
        let ignore_list = Arc::new(Mutex::new(HashSet::<PathBuf>::new()));
        let ignore_clone = Arc::clone(&ignore_list);
        let root_clone = workspace_root.clone();

        let (tx, rx) = channel::<Event>();

        let event_handler = move |res: Result<Event, notify::Error>| match res {
            Ok(event) => { let _ = tx.send(event); }
            Err(e) => error!("文件监听错误: {:?}", e),
        };

        let mut watcher = RecommendedWatcher::new(event_handler, Config::default())
            .map_err(|e| format!("创建文件监听器失败: {}", e))?;

        watcher
            .watch(&workspace_root, RecursiveMode::Recursive)
            .map_err(|e| format!("启动文件监听失败: {}", e))?;

        info!("✅ [FileWatcher] 文件监听器已启动，监听目录: {}", workspace_root.display());

        Self::start_debounce_processor(rx, root_clone, ignore_clone, app_handle);

        Ok(Self { _watcher: watcher, ignore_list })
    }

    pub fn ignore_next_change(&self, path: PathBuf) {
        if let Ok(mut list) = self.ignore_list.lock() {
            list.insert(path);
        }
    }

    // ── 防抖处理任务 ──────────────────────────────────────────────────────────

    fn start_debounce_processor(
        rx: Receiver<Event>,
        workspace_root: PathBuf,
        ignore_list: Arc<Mutex<HashSet<PathBuf>>>,
        app_handle: AppHandle,
    ) {
        tauri::async_runtime::spawn(async move {
            let debounce = Duration::from_millis(500);
            let mut pending: HashMap<PathBuf, (PendingKind, Instant)> = HashMap::new();
            let mut remove_candidates: HashMap<PathBuf, RemoveCandidate> = HashMap::new();
            let mut last_event_time = Instant::now();
            let mut total_events_received: usize = 0;
            let mut total_batches_sent: usize = 0;

            loop {
                match rx.recv_timeout(Duration::from_millis(100)) {
                    Ok(event) => {
                        if Self::should_ignore(&event, &workspace_root) { continue; }
                        last_event_time = Instant::now();
                        let event_file_count = event.paths.len();
                        total_events_received += event_file_count;
                        Self::merge_event(event, &mut pending, &mut remove_candidates, last_event_time);
                    }
                    Err(_) => {
                        if pending.is_empty() && remove_candidates.is_empty() { continue; }

                        let now = Instant::now();
                        if now.duration_since(last_event_time) < debounce { continue; }

                        // 孤立的 Remove 候选 → 升级为真正的删除事件
                        let stale: Vec<PathBuf> = remove_candidates
                            .iter()
                            .filter(|(_, c)| now.duration_since(c.time) >= debounce)
                            .map(|(p, _)| p.clone())
                            .collect();
                        for p in stale {
                            let c = remove_candidates.remove(&p).unwrap();
                            let kind = if c.was_dir { PendingKind::DirRemove } else { PendingKind::Remove };
                            pending.entry(p).or_insert((kind, now));
                        }

                        let batch: Vec<(PathBuf, PendingKind)> = pending
                            .drain()
                            .map(|(p, (k, _))| (p, k))
                            .collect();

                        if !batch.is_empty() {
                            total_batches_sent += 1;
                            let merged = total_events_received - batch.len();
                            debug!(
                                "🔄 [FileWatcher] 批量处理 {} 个变更事件（累计收到 {} 个，合并 {} 个，已发送 {} 批）",
                                batch.len(),
                                total_events_received,
                                merged,
                                total_batches_sent
                            );
                            Self::handle_batch(batch, &workspace_root, &ignore_list, &app_handle);
                        }
                    }
                }
            }
        });
    }

    // ── 事件合并 ──────────────────────────────────────────────────────────────

    fn merge_event(
        event: Event,
        pending: &mut HashMap<PathBuf, (PendingKind, Instant)>,
        remove_candidates: &mut HashMap<PathBuf, RemoveCandidate>,
        now: Instant,
    ) {
        for path in event.paths {
            let is_dir = path.is_dir();

            let new_kind = match &event.kind {
                EventKind::Create(_) => {
                    if is_dir {
                        // 检查同父目录是否有配对的目录 Remove 候选 → rename
                        let parent = path.parent();
                        let old_dir: Option<PathBuf> = remove_candidates
                            .iter()
                            .find(|(p, c)| c.was_dir && p.parent() == parent)
                            .map(|(p, _)| p.clone());
                        if let Some(old) = old_dir {
                            let c = remove_candidates.remove(&old).unwrap();
                            // 保留旧目录的 DirRemove，让 handle_batch 配对
                            pending.insert(old, (PendingKind::DirRemove, c.time));
                        }
                        PendingKind::DirCreate
                    } else {
                        // 检查同父目录 + 同扩展名的文件 Remove 候选 → rename
                        let parent = path.parent();
                        let ext = path.extension().and_then(|s| s.to_str());
                        let old_file: Option<PathBuf> = remove_candidates
                            .iter()
                            .find(|(p, c)| {
                                !c.was_dir
                                    && p.parent() == parent
                                    && p.extension().and_then(|s| s.to_str()) == ext
                            })
                            .map(|(p, _)| p.clone());
                        if let Some(old) = old_file {
                            let c = remove_candidates.remove(&old).unwrap();
                            pending.insert(old, (PendingKind::Remove, c.time));
                        }
                        PendingKind::Create
                    }
                }
                EventKind::Remove(_) => {
                    // path 在 Remove 事件到达时可能已不存在，is_dir() 返回 false
                    // 用"路径不存在且无扩展名"作为已删除目录的启发式判断
                    let was_dir = is_dir || (!path.exists() && path.extension().is_none());
                    remove_candidates.insert(path.clone(), RemoveCandidate { time: now, was_dir });
                    continue;
                }
                EventKind::Modify(_) => {
                    if is_dir { continue; }
                    PendingKind::Modify
                }
                _ => continue,
            };

            // 合并规则
            let entry = pending.entry(path).or_insert((new_kind.clone(), now));
            match (&entry.0, &new_kind) {
                // Remove 后跟 Create/Modify → git pull 替换场景，视为 Modify
                (PendingKind::Remove, PendingKind::Create) |
                (PendingKind::Remove, PendingKind::Modify) => {
                    *entry = (PendingKind::Modify, now);
                }
                // 已是 Remove → 保持
                (PendingKind::Remove, _) => {}
                // 新事件是 Remove → 覆盖
                (_, PendingKind::Remove) => { *entry = (PendingKind::Remove, now); }
                // Create 后跟 Modify → 保持 Create
                (PendingKind::Create, PendingKind::Modify) => {}
                _ => { *entry = (new_kind, now); }
            }
        }
    }

    // ── 批量处理 ──────────────────────────────────────────────────────────────

    fn handle_batch(
        events: Vec<(PathBuf, PendingKind)>,
        workspace_root: &Path,
        ignore_list: &Arc<Mutex<HashSet<PathBuf>>>,
        app_handle: &AppHandle,
    ) {
        let mut md_created:  Vec<(PathBuf, String)> = Vec::new();
        let mut md_modified: Vec<(PathBuf, String)> = Vec::new();
        let mut md_deleted:  Vec<(PathBuf, String)> = Vec::new();
        let mut dir_created: Vec<String> = Vec::new();
        let mut dir_deleted: Vec<String> = Vec::new();

        for (path, kind) in &events {
            match kind {
                PendingKind::DirCreate => {
                    if let Some(rel) = Self::rel(workspace_root, path) {
                        debug!("📂 [FileWatcher] 目录创建: {}", rel);
                        dir_created.push(rel);
                    }
                }
                PendingKind::DirRemove => {
                    if let Some(rel) = Self::rel(workspace_root, path) {
                        debug!("🗑️ [FileWatcher] 目录删除: {}", rel);
                        dir_deleted.push(rel);
                    }
                }
                _ => {
                    // 只处理 .md 文件
                    if path.extension().and_then(|s| s.to_str()) != Some("md") { continue; }
                    if !path.starts_with(workspace_root) { continue; }

                    // 应用内部修改 → 忽略
                    let should_process = ignore_list.lock()
                        .map(|mut l| !l.remove(path))
                        .unwrap_or(true);
                    if !should_process {
                        debug!("⏭️ [FileWatcher] 忽略应用内部修改: {}", path.display());
                        continue;
                    }

                    let rel = match Self::rel(workspace_root, path) {
                        Some(r) => r,
                        None => continue,
                    };

                    match kind {
                        PendingKind::Create => {
                            debug!("📄 [FileWatcher] 文件创建: {}", rel);
                            md_created.push((path.clone(), rel));
                        }
                        PendingKind::Modify => {
                            debug!("✏️ [FileWatcher] 文件修改: {}", rel);
                            md_modified.push((path.clone(), rel));
                        }
                        PendingKind::Remove => {
                            if path.exists() {
                                debug!("✏️ [FileWatcher] 文件仍存在，视为修改: {}", rel);
                                md_modified.push((path.clone(), rel));
                            } else {
                                debug!("🗑️ [FileWatcher] 文件删除: {}", rel);
                                md_deleted.push((path.clone(), rel));
                            }
                        }
                        _ => {}
                    }
                }
            }
        }

        // ── 文件 Rename 检测 ──────────────────────────────────────────────────
        // 同批次、同目录中出现配对的 Create + Remove → 视为 rename（启发式）
        let mut renames: Vec<RenameEntry> = Vec::new();
        let mut del_used: HashSet<usize> = HashSet::new();
        let mut cre_used: HashSet<usize> = HashSet::new();

        for (di, (dp, dr)) in md_deleted.iter().enumerate() {
            for (ci, (_, cr)) in md_created.iter().enumerate() {
                if cre_used.contains(&ci) { continue; }
                // 同目录视为 rename 候选，由前端根据 frontmatter id 进一步确认
                if dp.parent() == md_created[ci].0.parent() {
                    renames.push(RenameEntry { from: dr.clone(), to: cr.clone() });
                    del_used.insert(di);
                    cre_used.insert(ci);
                    break;
                }
            }
        }

        let final_md_created: Vec<String> = md_created.iter().enumerate()
            .filter(|(i, _)| !cre_used.contains(i))
            .map(|(_, (_, r))| r.clone())
            .collect();
        let final_md_deleted: Vec<String> = md_deleted.iter().enumerate()
            .filter(|(i, _)| !del_used.contains(i))
            .map(|(_, (_, r))| r.clone())
            .collect();

        // ── 目录 Rename 检测（需在 cache 更新前完成，以区分真实删除与重命名）────
        let mut dir_renames: Vec<RenameEntry> = Vec::new();
        let mut dd_used: HashSet<usize> = HashSet::new();
        let mut dc_used: HashSet<usize> = HashSet::new();

        for (di, del) in dir_deleted.iter().enumerate() {
            for (ci, cre) in dir_created.iter().enumerate() {
                if dc_used.contains(&ci) { continue; }
                let dp = Path::new(del).parent().map(|p| p.to_string_lossy().to_string());
                let cp = Path::new(cre).parent().map(|p| p.to_string_lossy().to_string());
                if dp == cp {
                    dir_renames.push(RenameEntry { from: del.clone(), to: cre.clone() });
                    dd_used.insert(di);
                    dc_used.insert(ci);
                    break;
                }
            }
        }

        let final_dir_deleted: Vec<String> = dir_deleted.iter().enumerate()
            .filter(|(i, _)| !dd_used.contains(i))
            .map(|(_, s)| s.clone())
            .collect();
        let final_dir_created: Vec<String> = dir_created.iter().enumerate()
            .filter(|(i, _)| !dc_used.contains(i))
            .map(|(_, s)| s.clone())
            .collect();

        // ── 更新 CacheManager ─────────────────────────────────────────────────
        if let Some(cs) = app_handle.try_state::<Arc<RwLock<crate::markdown::CacheManager>>>() {
            if let Ok(mut cache) = cs.write() {
                let mut dirty = false;

                for (path, rel) in md_created.iter().filter(|(_, r)| final_md_created.contains(r)) {
                    dirty |= cache.add_file(path, workspace_root).is_ok();
                    let _ = rel;
                }
                for (path, _) in &md_modified {
                    dirty |= cache.update_file(path, workspace_root).is_ok();
                }
                for (path, rel) in md_deleted.iter().filter(|(_, r)| final_md_deleted.contains(r)) {
                    dirty |= cache.remove_file(path, workspace_root).is_ok();
                    let _ = rel;
                }
                for re in &renames {
                    let old = workspace_root.join(&re.from);
                    let _ = cache.remove_file(&old, workspace_root);
                    dirty = true;
                }
                // 删除目录时，清理该目录下所有文件的 cache 元数据及分类元数据
                for dir_rel in &final_dir_deleted {
                    let removed = cache.remove_directory_files(dir_rel);
                    if removed > 0 {
                        dirty = true;
                    }
                    info!("🗑️ [FileWatcher] 目录删除，清理 cache 文件元数据 {} 条: {}", removed, dir_rel);
                }

                if dirty {
                    if let Err(e) = cache.save() {
                        error!("保存 cache 失败: {}", e);
                    } else {
                        debug!("💾 [FileWatcher] 批量保存 cache 完成");
                    }
                }
            }
        }


        // ── 发送事件到 config 窗口 ────────────────────────────────────────────
        // Git 同步、文件列表、编辑器均在 config 窗口，无需广播到其他窗口。
        let win = app_handle.get_webview_window("config");

        // 文件变更
        let has_file_events = !final_md_created.is_empty()
            || !md_modified.is_empty()
            || !final_md_deleted.is_empty()
            || !renames.is_empty();

        if has_file_events {
            // ── 同步附件 ───────────────────────────────────────────────────────
            // 文件删除时清理附件
            if !final_md_deleted.is_empty() {
                let deleted_abs_paths: Vec<String> = final_md_deleted.iter()
                    .map(|r| workspace_root.join(r).to_string_lossy().to_string())
                    .collect();
                let app_handle_clone = app_handle.clone();
                tokio::spawn(async move {
                    if let Err(e) = cleanup_attachments_for_deleted_files(&app_handle_clone, &deleted_abs_paths).await {
                        warn!("清理删除文件的附件失败: {}", e);
                    }
                });
            }

            // 文件重命名时同步附件
            if !renames.is_empty() {
                let renamed_abs: Vec<(String, String)> = renames.iter()
                    .map(|r| (
                        workspace_root.join(&r.from).to_string_lossy().to_string(),
                        workspace_root.join(&r.to).to_string_lossy().to_string(),
                    ))
                    .collect();
                let app_handle_clone = app_handle.clone();
                tokio::spawn(async move {
                    if let Err(e) = sync_attachments_for_renamed_files(&app_handle_clone, &renamed_abs).await {
                        warn!("同步重命名文件的附件失败: {}", e);
                    }
                });
            }

            let payload = FilesBatchPayload {
                created: final_md_created,
                modified: md_modified.iter().map(|(_, r)| r.clone()).collect(),
                deleted: final_md_deleted,
                renamed: renames,
            };

            // 只有当有实际变化时才发送事件
            let has_changes = !payload.created.is_empty()
                || !payload.modified.is_empty()
                || !payload.deleted.is_empty()
                || !payload.renamed.is_empty();

            if has_changes {
                if let Some(w) = &win {
                    if let Err(e) = w.emit("files-changed-batch", &payload) {
                        warn!("发送 files-changed-batch 失败: {}", e);
                    }
                }

                // 通知 Git 状态可能已变化（工作区有文件变更）
                if let Some(w) = &win {
                    if let Err(e) = w.emit("git-workspace-changed", ()) {
                        warn!("发送 git-workspace-changed 失败: {}", e);
                    }
                }
            }
        }

        // 目录变更
        if !dir_created.is_empty() || !dir_deleted.is_empty() {
            let payload = DirChangedPayload {
                created: final_dir_created,
                deleted: final_dir_deleted,
                renamed: dir_renames,
            };
            if let Some(w) = &win {
                if let Err(e) = w.emit("dirs-changed-batch", &payload) {
                    warn!("发送 dirs-changed-batch 失败: {}", e);
                }

                // 通知 Git 状态可能已变化（目录有变更）
                if let Err(e) = w.emit("git-workspace-changed", ()) {
                    warn!("发送 git-workspace-changed 失败: {}", e);
                }
            }
        }
    }

    // ── 辅助 ──────────────────────────────────────────────────────────────────

    fn rel(workspace_root: &Path, path: &Path) -> Option<String> {
        path.strip_prefix(workspace_root)
            .ok()
            .map(|r| r.to_string_lossy().replace('\\', "/"))
    }

    fn should_ignore(event: &Event, workspace_root: &Path) -> bool {
        // 忽略 .snippets-code 配置目录
        for path in &event.paths {
            if let Ok(relative) = path.strip_prefix(workspace_root) {
                if relative.starts_with(".snippets-code") {
                    return true;
                }
            }
        }
        // 必须涉及 .md 文件或目录
        // 注意：Remove 事件到达时路径可能已不存在，is_dir() 会返回 false
        // 用"路径不存在且无扩展名"作为已删除目录的启发式判断
        let relevant = event.paths.iter().any(|p| {
            p.is_dir()
                || p.extension().and_then(|s| s.to_str()) == Some("md")
                || (!p.exists() && p.extension().is_none())
        });
        !relevant
    }
}
