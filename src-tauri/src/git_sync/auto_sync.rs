use super::*;

// ============= 自动同步管理器 =============

use std::time::{Duration, Instant};
use tokio::time::sleep;

/// 自动同步管理器
pub struct AutoSyncManager {
    workspace_root: PathBuf,
    delay_minutes: u64,
    last_edit_time: Arc<Mutex<Option<Instant>>>,
    is_running: Arc<Mutex<bool>>,
    is_paused: Arc<Mutex<bool>>, // 新增：暂停状态（用于冲突处理）
    worker_generation: Arc<AtomicU64>,
    app_handle: tauri::AppHandle,
}

impl AutoSyncManager {
    /// 创建新的自动同步管理器
    pub fn new(workspace_root: PathBuf, delay_minutes: u64, app_handle: tauri::AppHandle) -> Self {
        Self {
            workspace_root,
            delay_minutes,
            last_edit_time: Arc::new(Mutex::new(None)),
            is_running: Arc::new(Mutex::new(false)),
            is_paused: Arc::new(Mutex::new(false)),
            worker_generation: Arc::new(AtomicU64::new(0)),
            app_handle,
        }
    }

    pub(crate) fn matches_config(&self, workspace_root: &Path, delay_minutes: u64) -> bool {
        self.workspace_root == workspace_root && self.delay_minutes == delay_minutes
    }

    /// 启动自动同步
    pub fn start(&self) -> Result<(), String> {
        let mut is_running = self
            .is_running
            .lock()
            .map_err(|e| format!("获取运行状态锁失败: {}", e))?;

        if *is_running {
            return Ok(()); // 已经在运行
        }

        *is_running = true;
        let generation = self.worker_generation.fetch_add(1, Ordering::SeqCst) + 1;

        let workspace_root = self.workspace_root.clone();
        let delay_minutes = self.delay_minutes;
        let last_edit_time = Arc::clone(&self.last_edit_time);
        let is_running_clone = Arc::clone(&self.is_running);
        let is_paused_clone = Arc::clone(&self.is_paused);
        let worker_generation = Arc::clone(&self.worker_generation);
        let app_handle = self.app_handle.clone();

        // 启动后台任务
        tauri::async_runtime::spawn(async move {
            info!(
                "🚀 [AutoSync] 自动同步管理器已启动，延迟: {} 分钟",
                delay_minutes
            );

            let pull_interval = Duration::from_secs(delay_minutes * 60); // Pull 间隔
            let mut last_pull_time = Instant::now();

            let is_current_worker = || {
                let running = is_running_clone.lock().unwrap();
                *running && worker_generation.load(Ordering::SeqCst) == generation
            };

            'sync_loop: loop {
                // 检查是否应该停止
                if !is_current_worker() {
                    info!("⏹️ [AutoSync] 自动同步管理器已停止");
                    break;
                }

                // 每 1 秒检查一次（提高精度）
                sleep(Duration::from_secs(1)).await;
                if !is_current_worker() {
                    info!("⏹️ [AutoSync] 自动同步管理器已停止");
                    break;
                }

                // 检查是否暂停（冲突处理中）
                let is_paused = {
                    let paused = is_paused_clone.lock().unwrap();
                    *paused
                };

                if is_paused {
                    // 暂停期间不执行任何同步操作
                    continue;
                }

                // 1. 检查是否需要定期 Pull
                let should_pull = last_pull_time.elapsed() >= pull_interval;

                if should_pull {
                    // 执行 Pull，带重试机制
                    let max_retries = 3;
                    let mut retry_count = 0;
                    let mut pull_result = None;

                    while retry_count < max_retries {
                        if !is_current_worker() {
                            break 'sync_loop;
                        }

                        let current_pull_result = GitSyncService::new(&workspace_root).pull().await;
                        if !is_current_worker() {
                            break 'sync_loop;
                        }

                        match current_pull_result {
                            Ok(result) => {
                                pull_result = Some(Ok(result));
                                break;
                            }
                            Err(e) => {
                                let error_msg = e.to_string().to_lowercase();
                                let is_network_error = error_msg.contains("unable to access")
                                    || error_msg.contains("ssl")
                                    || error_msg.contains("tls")
                                    || error_msg.contains("timeout")
                                    || error_msg.contains("connection")
                                    || error_msg.contains("network")
                                    || error_msg.contains("schannel");

                                if is_network_error && retry_count < max_retries - 1 {
                                    retry_count += 1;
                                    let delay_secs = 2u64.pow(retry_count as u32); // 指数退避: 2s, 4s, 8s
                                    warn!(
                                        "⚠️ [AutoSync] Pull 遇到网络错误，{} 秒后重试 ({}/{}): {}",
                                        delay_secs, retry_count, max_retries, e
                                    );
                                    sleep(Duration::from_secs(delay_secs)).await;
                                } else {
                                    // 非网络错误或已达到最大重试次数
                                    pull_result = Some(Err(e));
                                    break;
                                }
                            }
                        }
                    }

                    // 处理 Pull 结果
                    match pull_result {
                        Some(Ok(result)) => {
                            if result.success {
                                import_portable_sync_config(&app_handle, &workspace_root);
                                if result.files_updated > 0 {
                                    info!(
                                        "✅ [AutoSync] 定期 Pull 成功，更新了 {} 个文件",
                                        result.files_updated
                                    );

                                    let by_status = match get_changed_files_with_status(
                                        &workspace_root,
                                        result.pre_pull_head.as_deref(),
                                    ) {
                                        Ok(s) => s,
                                        Err(e) => {
                                            warn!("⚠️ [AutoSync] 获取变更文件失败: {}", e);
                                            ChangedFilesByStatus::default()
                                        }
                                    };
                                    let changed_files = by_status.all();
                                    apply_non_content_sync_changes(&app_handle, &by_status);

                                    if !changed_files.is_empty() {
                                        info!(
                                            "📋 [AutoSync] 检测到 {} 个 .md 文件变更",
                                            changed_files.len()
                                        );

                                        // 将变更文件添加到 FileWatcher 忽略列表
                                        if let Some(watcher_state) = app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>() {
                                            if let Ok(watcher_lock) = watcher_state.lock() {
                                                if let Some(ref watcher) = *watcher_lock {
                                                    for file in &changed_files {
                                                        let file_path = workspace_root.join(file);
                                                        watcher.ignore_next_change(file_path);
                                                    }
                                                    info!("🔕 [AutoSync] 已将 {} 个文件添加到 FileWatcher 忽略列表", changed_files.len());
                                                }
                                            }
                                        }

                                        // 增量更新 cache：新增/修改用 scan_files，删除用 remove_file
                                        if let Some(cache_state) = app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>() {
                                            if let Ok(mut cache) = cache_state.write() {
                                                let to_scan: Vec<String> = by_status
                                                    .created
                                                    .iter()
                                                    .chain(by_status.modified.iter())
                                                    .cloned()
                                                    .collect();
                                                if !to_scan.is_empty() {
                                                    if let Ok(added_count) = cache.scan_files(&to_scan, &workspace_root) {
                                                        info!("✅ [AutoSync] 增量扫描完成，添加 {} 个新文件", added_count);
                                                    }
                                                }
                                                for rel_path in &by_status.deleted {
                                                    let abs_path = workspace_root.join(rel_path);
                                                    let _ = cache.remove_file(&abs_path, &workspace_root);
                                                }
                                                let _ = cache.save();
                                            }
                                        }

                                        // 发送 files-changed-batch，使 Content 页面能重新加载已修改的当前文件
                                        if let Some(config_window) =
                                            app_handle.get_webview_window("config")
                                        {
                                            let payload = serde_json::json!({
                                                "created": by_status.created,
                                                "modified": by_status.modified,
                                                "deleted": by_status.deleted,
                                            });
                                            if let Err(e) =
                                                config_window.emit("files-changed-batch", payload)
                                            {
                                                error!("❌ [AutoSync] 发送 files-changed-batch 失败: {}", e);
                                            }
                                        }
                                    }

                                    // 发送 Pull 完成事件到 config 窗口
                                    if let Err(e) = app_handle.emit_to(
                                        "config",
                                        "git-pull-completed",
                                        result.files_updated,
                                    ) {
                                        error!("❌ [AutoSync] 发送 Pull 完成事件失败: {}", e);
                                    }

                                    // 发送 git-sync-complete 事件
                                    if let Err(e) = app_handle.emit_to(
                                        "config",
                                        "git-sync-complete",
                                        serde_json::json!({
                                            "success": true,
                                            "last_sync_time": result.last_sync_time
                                        }),
                                    ) {
                                        warn!(
                                            "⚠️ [AutoSync] 发送 git-sync-complete 事件失败: {}",
                                            e
                                        );
                                    }
                                    // 同时发送到 main
                                    if let Err(e) = app_handle.emit_to(
                                        "main",
                                        "git-sync-complete",
                                        serde_json::json!({
                                            "success": true,
                                            "last_sync_time": result.last_sync_time
                                        }),
                                    ) {
                                        warn!(
                                            "⚠️ [AutoSync] 发送 git-sync-complete 到 main 失败: {}",
                                            e
                                        );
                                    }

                                    // 发送成功通知到 config 窗口
                                    let notification_message =
                                        format!("已从远程同步 {} 个文件", result.files_updated);
                                    if let Err(e) = app_handle.emit_to(
                                        "config",
                                        "git-sync-success",
                                        notification_message.clone(),
                                    ) {
                                        error!("❌ [AutoSync] 发送通知失败: {}", e);
                                    }
                                } else {
                                    info!("ℹ️ [AutoSync] 定期 Pull 完成，已是最新版本");
                                }
                            } else if result.has_conflicts {
                                // 检测到冲突，暂停自动同步并发送冲突事件到前端
                                warn!(
                                    "⚠️ [AutoSync] 定期 Pull 检测到冲突: {:?}",
                                    result.conflict_files
                                );

                                // 更新 cache 中的冲突文件，确保它们在界面上可见
                                if !result.conflict_files.is_empty() {
                                    if let Some(cache_state) = app_handle
                                        .try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>(
                                        )
                                    {
                                        if let Ok(mut cache) = cache_state.write() {
                                            match cache
                                                .scan_files(&result.conflict_files, &workspace_root)
                                            {
                                                Ok(added_count) => {
                                                    info!(
                                                        "[AutoSync] 更新了 {} 个冲突文件到 cache",
                                                        added_count
                                                    );
                                                    let _ = cache.save();
                                                }
                                                Err(e) => {
                                                    warn!("⚠️ [AutoSync] Cache 更新失败: {}", e);
                                                }
                                            }
                                        }
                                    }
                                }

                                // 暂停自动同步
                                {
                                    let mut paused = is_paused_clone.lock().unwrap();
                                    *paused = true;
                                    info!("⏸️ [AutoSync] 已暂停自动同步，等待冲突解决");
                                }

                                #[derive(serde::Serialize, Clone)]
                                struct ConflictPayload {
                                    conflict_files: Vec<String>,
                                    #[serde(skip_serializing_if = "Vec::is_empty")]
                                    untracked_files: Vec<String>,
                                }

                                let payload = ConflictPayload {
                                    conflict_files: result.conflict_files.clone(),
                                    untracked_files: result.untracked_files.clone(),
                                };

                                if let Err(e) =
                                    app_handle.emit_to("config", "git-conflict-detected", payload)
                                {
                                    error!("❌ [AutoSync] 发送冲突事件失败: {}", e);
                                }
                            } else if result.message == "remote_not_found" {
                                // 检测到仓库不存在，发送事件到前端提示用户重新配置
                                warn!("⚠️ [AutoSync] 定期 Pull 检测到远程仓库不存在");

                                let remote_url =
                                    crate::git_sync::get_system_git_config(Some(&workspace_root))
                                        .ok()
                                        .and_then(|config| config.remote_url)
                                        .unwrap_or_else(|| "未知".to_string());

                                let payload = RepoNotFoundPayload {
                                    remote_url,
                                    operation: "pull".to_string(),
                                };

                                // 发送仓库不存在事件
                                if let Err(e) = app_handle.emit_to(
                                    "config",
                                    "git-repo-not-found",
                                    payload.clone(),
                                ) {
                                    error!(
                                        "❌ [AutoSync] 发送仓库不存在事件失败，存入待处理队列: {}",
                                        e
                                    );
                                    if let Some(pending_queue) = app_handle
                                        .try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>()
                                    {
                                        if let Ok(mut queue) = pending_queue.lock() {
                                            queue.push(payload);
                                            info!("📋 [AutoSync] 仓库不存在通知已存入待处理队列");
                                        }
                                    }
                                }
                            }
                        }
                        Some(Err(e)) => {
                            let error_msg = e.to_string().to_lowercase();
                            let is_network_error = error_msg.contains("unable to access")
                                || error_msg.contains("ssl")
                                || error_msg.contains("tls")
                                || error_msg.contains("timeout")
                                || error_msg.contains("connection")
                                || error_msg.contains("network")
                                || error_msg.contains("schannel");

                            let is_repo_not_found = error_msg.contains("repository not found")
                                || error_msg.contains("remote repository not found")
                                || error_msg.contains("remote_not_found");

                            if is_repo_not_found {
                                // 仓库不存在：发送特殊事件到前端，提示用户重新配置
                                warn!("⚠️ [AutoSync] 远程仓库不存在");

                                let remote_url =
                                    crate::git_sync::get_system_git_config(Some(&workspace_root))
                                        .ok()
                                        .and_then(|config| config.remote_url)
                                        .unwrap_or_else(|| "未知".to_string());

                                let payload = RepoNotFoundPayload {
                                    remote_url,
                                    operation: "pull".to_string(),
                                };

                                if let Err(err) = app_handle.emit_to(
                                    "config",
                                    "git-repo-not-found",
                                    payload.clone(),
                                ) {
                                    error!(
                                        "❌ [AutoSync] 发送仓库不存在事件失败，存入待处理队列: {}",
                                        err
                                    );
                                    // 存入待处理队列
                                    if let Some(pending_queue) = app_handle
                                        .try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>()
                                    {
                                        if let Ok(mut queue) = pending_queue.lock() {
                                            queue.push(payload);
                                            info!("📋 [AutoSync] 仓库不存在通知已存入待处理队列");
                                        }
                                    }
                                }
                            } else if is_network_error {
                                // 网络错误：静默失败，不发送通知
                                error!(
                                    "❌ [AutoSync] 定期 Pull 失败（网络错误，已重试 {} 次）: {}",
                                    max_retries, e
                                );
                            } else {
                                // 非网络错误：记录并发送通知
                                error!("❌ [AutoSync] 定期 Pull 失败: {}", e);

                                if let Err(err) = app_handle.emit_to(
                                    "config",
                                    "git-sync-error",
                                    format!("Auto pull failed: {}", e),
                                ) {
                                    error!("❌ [AutoSync] 发送错误通知失败: {}", err);
                                }
                            }
                        }
                        None => {
                            // 不应该发生
                            error!("❌ [AutoSync] Pull 结果为空");
                        }
                    }

                    // 更新最后 Pull 时间
                    last_pull_time = Instant::now();
                }

                // 2. 检查是否需要 Push（文件编辑后）
                if !is_current_worker() {
                    break;
                }

                let should_push = {
                    let last_edit = last_edit_time.lock().unwrap();
                    if let Some(last_time) = *last_edit {
                        let elapsed = last_time.elapsed();
                        let delay_duration = Duration::from_secs(delay_minutes * 60);
                        elapsed >= delay_duration
                    } else {
                        match GitSyncService::new(&workspace_root).status() {
                            Ok(status) => status.has_changes,
                            Err(e) => {
                                warn!("⚠️ [AutoSync] 检查本地待推送变更失败: {}", e);
                                false
                            }
                        }
                    }
                };

                if should_push {
                    if !is_current_worker() {
                        break;
                    }

                    let mut push_result = match ensure_gitignore(&workspace_root).and_then(|_| {
                        crate::sync_data::export_sync_bundle(&app_handle, &workspace_root)
                            .map(|_| ())
                    }) {
                        Ok(()) => GitSyncService::new(&workspace_root).push("Auto sync").await,
                        Err(error) => Err(error),
                    };
                    if !is_current_worker() {
                        break;
                    }

                    // Push 被 non-fast-forward 拒绝时：先 pull 再重试
                    if let Err(ref e) = push_result {
                        let err_lower = e.to_string().to_lowercase();
                        if err_lower.contains("rejected")
                            || err_lower.contains("non-fast-forward")
                            || err_lower.contains("behind")
                        {
                            info!("ℹ️ [AutoSync] Push 被拒绝（本地落后于远程），先 Pull 再重试");
                            if !is_current_worker() {
                                break;
                            }

                            let current_pull_result =
                                GitSyncService::new(&workspace_root).pull().await;
                            if !is_current_worker() {
                                break;
                            }

                            match current_pull_result {
                                Ok(pull_result) => {
                                    if pull_result.has_conflicts {
                                        warn!("⚠️ [AutoSync] Pull 产生冲突，转入冲突流程");
                                        if !pull_result.conflict_files.is_empty() {
                                            if let Some(cache_state) = app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>() {
                                                if let Ok(mut cache) = cache_state.write() {
                                                    let _ = cache.scan_files(&pull_result.conflict_files, &workspace_root);
                                                    let _ = cache.save();
                                                }
                                            }
                                        }
                                        {
                                            let mut paused = is_paused_clone.lock().unwrap();
                                            *paused = true;
                                            info!("⏸️ [AutoSync] 已暂停自动同步，等待冲突解决");
                                        }
                                        #[derive(serde::Serialize, Clone)]
                                        struct ConflictPayload {
                                            conflict_files: Vec<String>,
                                        }
                                        let payload = ConflictPayload {
                                            conflict_files: pull_result.conflict_files.clone(),
                                        };
                                        let _ = app_handle.emit_to(
                                            "config",
                                            "git-conflict-detected",
                                            payload,
                                        );
                                    } else {
                                        info!("✅ [AutoSync] Pull 成功，重试 Push");
                                        if pull_result.success {
                                            import_portable_sync_config(
                                                &app_handle,
                                                &workspace_root,
                                            );
                                        }
                                        if let Ok(changes) = get_changed_files_with_status(
                                            &workspace_root,
                                            pull_result.pre_pull_head.as_deref(),
                                        ) {
                                            apply_non_content_sync_changes(&app_handle, &changes);
                                            if let Some(cache_state) = app_handle.try_state::<Arc<
                                                StdRwLock<crate::markdown::CacheManager>,
                                            >>() {
                                                if let Ok(mut cache) = cache_state.write() {
                                                    let to_scan = changes
                                                        .created
                                                        .iter()
                                                        .chain(changes.modified.iter())
                                                        .cloned()
                                                        .collect::<Vec<_>>();
                                                    if !to_scan.is_empty() {
                                                        let _ =
                                                            cache.scan_files(&to_scan, &workspace_root);
                                                    }
                                                    for path in &changes.deleted {
                                                        let _ = cache.remove_file(
                                                            &workspace_root.join(path),
                                                            &workspace_root,
                                                        );
                                                    }
                                                    let _ = cache.save();
                                                }
                                            }
                                        }
                                        if !is_current_worker() {
                                            break;
                                        }
                                        match push_current_branch(&workspace_root) {
                                            Ok(()) => {
                                                info!("✅ [AutoSync] 重试 Push 成功");
                                                push_result = Ok(PushResult {
                                                    success: true,
                                                    files_pushed: 1,
                                                    commit_hash: String::new(),
                                                    message: "Push 成功".to_string(),
                                                });
                                            }
                                            Err(error) => push_result = Err(error),
                                        }
                                    }
                                }
                                Err(pull_err) => {
                                    error!("❌ [AutoSync] Pull 失败: {}", pull_err);
                                    push_result =
                                        Err(format!("Push 失败后 Pull 也失败: {}", pull_err));
                                }
                            }
                        }
                    }

                    match push_result {
                        Ok(result) => {
                            if result.success && result.files_pushed > 0 {
                                info!("✅ [AutoSync] 自动 Push 成功: {}", result.message);
                                let last_sync_time =
                                    chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
                                let payload = serde_json::json!({
                                    "success": true,
                                    "last_sync_time": last_sync_time
                                });
                                if let Err(e) = app_handle.emit_to(
                                    "config",
                                    "git-sync-complete",
                                    payload.clone(),
                                ) {
                                    warn!("⚠️ [AutoSync] 发送 Push 完成事件失败: {}", e);
                                }
                                if let Err(e) =
                                    app_handle.emit_to("main", "git-sync-complete", payload)
                                {
                                    warn!("⚠️ [AutoSync] 发送 Push 完成事件到 main 失败: {}", e);
                                }
                                let notification_message =
                                    format!("已推送 {} 个文件到远程", result.files_pushed);
                                if let Err(e) = app_handle.emit_to(
                                    "config",
                                    "git-sync-success",
                                    notification_message.clone(),
                                ) {
                                    error!("❌ [AutoSync] 发送通知失败: {}", e);
                                }
                            }
                        }
                        Err(e) => {
                            let err_lower = e.to_lowercase();
                            let is_repo_not_found = err_lower.contains("repository not found")
                                || err_lower.contains("remote repository not found")
                                || err_lower.contains("remote_not_found");

                            if is_repo_not_found {
                                // 仓库不存在：发送特殊事件到前端，提示用户重新配置
                                warn!("⚠️ [AutoSync] 远程仓库不存在");

                                let remote_url =
                                    crate::git_sync::get_system_git_config(Some(&workspace_root))
                                        .ok()
                                        .and_then(|config| config.remote_url)
                                        .unwrap_or_else(|| "未知".to_string());

                                let payload = RepoNotFoundPayload {
                                    remote_url,
                                    operation: "push".to_string(),
                                };

                                if let Err(err) = app_handle.emit_to(
                                    "config",
                                    "git-repo-not-found",
                                    payload.clone(),
                                ) {
                                    error!(
                                        "❌ [AutoSync] 发送仓库不存在事件失败，存入待处理队列: {}",
                                        err
                                    );
                                    // 存入待处理队列
                                    if let Some(pending_queue) = app_handle
                                        .try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>()
                                    {
                                        if let Ok(mut queue) = pending_queue.lock() {
                                            queue.push(payload);
                                            info!("📋 [AutoSync] 仓库不存在通知已存入待处理队列");
                                        }
                                    }
                                }
                            } else {
                                error!("❌ [AutoSync] 自动 Push 失败: {}", e);
                                if let Err(err) = app_handle.emit_to(
                                    "config",
                                    "git-sync-error",
                                    format!("Auto push failed: {}", e),
                                ) {
                                    error!("❌ [AutoSync] 发送错误通知失败: {}", err);
                                }
                            }
                        }
                    }

                    // 重置最后编辑时间
                    if !is_current_worker() {
                        break;
                    }
                    let mut last_edit = last_edit_time.lock().unwrap();
                    *last_edit = None;
                }
            }
        });

        Ok(())
    }

    /// 停止自动同步
    pub fn stop(&self) -> Result<(), String> {
        let mut is_running = self
            .is_running
            .lock()
            .map_err(|e| format!("获取运行状态锁失败: {}", e))?;
        *is_running = false;
        self.worker_generation.fetch_add(1, Ordering::SeqCst);

        info!("🛑 [AutoSync] 停止自动同步管理器");
        Ok(())
    }

    /// 通知文件编辑
    pub fn notify_edit(&self) -> Result<(), String> {
        let mut last_edit = self
            .last_edit_time
            .lock()
            .map_err(|e| format!("获取编辑时间锁失败: {}", e))?;
        *last_edit = Some(Instant::now());

        Ok(())
    }

    /// 检查是否正在运行
    pub fn is_running(&self) -> bool {
        self.is_running.lock().map(|guard| *guard).unwrap_or(false)
    }

    /// 暂停自动同步（用于冲突处理）
    pub fn pause(&self) -> Result<(), String> {
        let mut is_paused = self
            .is_paused
            .lock()
            .map_err(|e| format!("获取暂停状态锁失败: {}", e))?;
        *is_paused = true;

        info!("⏸️ [AutoSync] 暂停自动同步");
        Ok(())
    }

    /// 恢复自动同步（冲突解决后）
    pub fn resume(&self) -> Result<(), String> {
        let mut is_paused = self
            .is_paused
            .lock()
            .map_err(|e| format!("获取暂停状态锁失败: {}", e))?;
        *is_paused = false;

        info!("▶️ [AutoSync] 恢复自动同步");
        Ok(())
    }
}
