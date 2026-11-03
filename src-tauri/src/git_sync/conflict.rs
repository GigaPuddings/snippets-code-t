use super::*;

use std::collections::HashMap;
use std::path::Path;
use std::time::Duration;

use log::info;
use tauri::{AppHandle, Emitter, Manager};

use super::commands::require_git_sync_plugin;
use super::types::ConflictStrategy;

// ============= Git 操作 =============

pub(super) fn validate_conflict_path(
    workspace_root: &Path,
    file_path: &str,
) -> Result<PathBuf, String> {
    let normalized = file_path.replace('\\', "/");
    let roots = crate::sync_data::managed_attachment_roots(workspace_root);
    if !crate::sync_data::is_allowed_sync_path(&normalized, &roots) {
        return Err(format!("拒绝操作同步白名单之外的文件: {}", file_path));
    }
    let workspace = workspace_root
        .canonicalize()
        .map_err(|e| format!("解析工作区失败: {}", e))?;
    let full_path = workspace_root.join(&normalized);
    // 删除冲突、首次写入可能没有目标文件，检查最近一个存在的父路径。
    let mut ancestor = full_path.as_path();
    while !ancestor.exists() {
        if std::fs::symlink_metadata(ancestor).is_ok() {
            return Err("拒绝操作符号链接".to_string());
        }
        ancestor = ancestor.parent().ok_or("文件路径无效")?;
    }
    let canonical = ancestor
        .canonicalize()
        .map_err(|e| format!("解析文件路径失败: {}", e))?;
    if !canonical.starts_with(&workspace)
        || std::fs::symlink_metadata(ancestor)
            .is_ok_and(|metadata| metadata.file_type().is_symlink())
    {
        return Err("拒绝操作工作区外的文件或符号链接".to_string());
    }
    if full_path.is_dir() {
        return Err("冲突路径必须是文件".to_string());
    }
    Ok(full_path)
}

struct MergeStages {
    base: Option<String>,
    ours: Option<String>,
    theirs: Option<String>,
    resolved: bool,
}

// 暂存手工编辑后 Git 把原始各阶段保存在 resolve-undo 中，直到合并结束。
fn merge_stages(repository: &GitRepository<'_>, file: &str) -> Result<Option<MergeStages>, String> {
    if !repository.workspace_root().join(".git/MERGE_HEAD").exists() {
        return Ok(None);
    }
    for (option, resolved) in [("--unmerged", false), ("--resolve-undo", true)] {
        let output = repository.output(
            &[
                "ls-files",
                option,
                "-z",
                "--",
                &format!(":(literal){}", file),
            ],
            "读取冲突索引失败",
        )?;
        if !output.status.success() {
            return Err(get_git_stderr(&output));
        }
        let mut stages = MergeStages {
            base: None,
            ours: None,
            theirs: None,
            resolved,
        };
        for entry in String::from_utf8_lossy(&output.stdout)
            .split('\0')
            .filter(|s| !s.is_empty())
        {
            let (header, path) = entry.split_once('\t').ok_or("冲突索引格式无效")?;
            if path != file {
                continue;
            }
            let mut fields = header.split_whitespace().skip(1);
            let blob = fields.next().ok_or("缺少冲突对象")?.to_string();
            match fields.next() {
                Some("1") => stages.base = Some(blob),
                Some("2") => stages.ours = Some(blob),
                Some("3") => stages.theirs = Some(blob),
                _ => return Err("冲突索引阶段无效".into()),
            }
        }
        if stages.base.is_some() || stages.ours.is_some() || stages.theirs.is_some() {
            return Ok(Some(stages));
        }
    }
    Ok(None)
}

fn check_conflict_file(
    repository: &GitRepository<'_>,
    file: &str,
) -> Result<Option<MergeStages>, String> {
    validate_conflict_path(repository.workspace_root(), file)?;
    let stages = merge_stages(repository, file)?;
    if stages.is_none() && !state::has_reported_conflict(repository, file)? {
        return Err(format!("文件不在本次冲突列表中: {}", file));
    }
    Ok(stages)
}

/// 解决冲突
pub fn resolve_conflict(
    workspace_root: &Path,
    file_path: &str,
    strategy: ConflictStrategy,
) -> Result<(), String> {
    let repository = GitRepository::new(workspace_root);
    let normalized = file_path.replace('\\', "/");
    let file_path = normalized.as_str();
    if let Some(stages) = check_conflict_file(&repository, file_path)? {
        let (option, selected) = match strategy {
            ConflictStrategy::KeepLocal if stages.resolved => return Ok(()),
            ConflictStrategy::KeepLocal => ("--ours", stages.ours),
            ConflictStrategy::KeepRemote => ("--theirs", stages.theirs),
            ConflictStrategy::DiscardLocalUntracked => return Err("拒绝删除已跟踪文件".into()),
        };
        let pathspec = format!(":(literal){}", file_path);
        if selected.is_none() {
            repository.successful_stdout(
                &["rm", "-f", "--ignore-unmatch", "--", &pathspec],
                "应用所选删除失败",
            )?;
        } else {
            if stages.resolved {
                repository.successful_stdout(
                    &["update-index", "--unresolve", "--", file_path],
                    "恢复冲突索引失败",
                )?;
            }
            repository.successful_stdout(
                &["restore", option, "--worktree", "--", &pathspec],
                "恢复所选冲突版本失败",
            )?;
            repository.successful_stdout(&["add", "--", &pathspec], "暂存所选冲突版本失败")?;
        }
        return Ok(());
    }
    if matches!(strategy, ConflictStrategy::KeepLocal)
        && !workspace_root.join(".git/MERGE_HEAD").exists()
    {
        repository.successful_stdout(
            &["add", "-A", "-f", "--", &format!(":(literal){}", file_path)],
            "暂存本地版本失败",
        )?;
        return Ok(());
    }
    if matches!(strategy, ConflictStrategy::DiscardLocalUntracked) {
        let pathspec = format!(":(literal){}", file_path);
        if !repository
            .successful_stdout(&["ls-files", "--", &pathspec], "检查文件失败")?
            .is_empty()
        {
            return Err("拒绝删除已跟踪文件".to_string());
        }
        let path = validate_conflict_path(workspace_root, file_path)?;
        if path.is_file() {
            std::fs::remove_file(path).map_err(|e| format!("删除未跟踪文件失败: {}", e))?;
        }
        return Ok(());
    }
    let source = match strategy {
        ConflictStrategy::KeepLocal => "HEAD".to_string(),
        ConflictStrategy::KeepRemote | ConflictStrategy::DiscardLocalUntracked => {
            if workspace_root.join(".git/MERGE_HEAD").exists() {
                "MERGE_HEAD".to_string()
            } else {
                format!("origin/{}", repository.current_branch()?)
            }
        }
    };
    restore_selected_path(&repository, &source, file_path)
}

fn restore_selected_path(
    repository: &GitRepository<'_>,
    source: &str,
    file_path: &str,
) -> Result<(), String> {
    let pathspec = format!(":(literal){}", file_path.replace('\\', "/"));
    if !repository.cat_file_exists(&format!("{}:{}", source, file_path.replace('\\', "/")))? {
        let tracked =
            repository.successful_stdout(&["ls-files", "--", &pathspec], "检查文件失败")?;
        if tracked.is_empty() {
            let path = validate_conflict_path(repository.workspace_root(), file_path)?;
            if path.is_file() {
                std::fs::remove_file(path).map_err(|e| format!("删除冲突文件失败: {}", e))?;
            }
            return Ok(());
        }
    }
    repository.successful_stdout(
        &[
            "restore",
            &format!("--source={}", source),
            "--staged",
            "--worktree",
            "--",
            &pathspec,
        ],
        "恢复所选版本失败",
    )?;
    Ok(())
}

fn nul_paths(output: &[u8]) -> Vec<String> {
    output
        .split(|byte| *byte == 0)
        .filter(|path| !path.is_empty())
        .map(|path| String::from_utf8_lossy(path).into_owned())
        .collect()
}

/// Git 的覆盖错误可能只列出第一个阻挡路径。先检查完整工作区，避免用户只确认
/// 第一项后创建中间提交，再被第二项阻挡而失去首次恢复的上下文。
pub(super) fn get_merge_worktree_obstructions(
    repository: &GitRepository<'_>,
    remote: &str,
) -> Result<(Vec<String>, Vec<String>), String> {
    let incoming = if repository.has_head() {
        let base = repository.output(&["merge-base", "HEAD", remote], "读取合并基准失败")?;
        if base.status.success() {
            repository.output(
                &[
                    "diff",
                    "--name-only",
                    "--no-renames",
                    "-z",
                    String::from_utf8_lossy(&base.stdout).trim(),
                    remote,
                ],
                "读取远端变更范围失败",
            )?
        } else if base.status.code() == Some(1) {
            repository.output(
                &["ls-tree", "-r", "--name-only", "-z", remote],
                "读取远端文件失败",
            )?
        } else {
            return Err(get_git_stderr(&base));
        }
    } else {
        repository.output(
            &["ls-tree", "-r", "--name-only", "-z", remote],
            "读取远端文件失败",
        )?
    };
    if !incoming.status.success() {
        return Err(get_git_stderr(&incoming));
    }
    let incoming = nul_paths(&incoming.stdout);
    if incoming.is_empty() {
        return Ok((Vec::new(), Vec::new()));
    }
    let overlaps = |path: &str| {
        incoming.iter().any(|other| {
            path == other
                || path
                    .strip_prefix(other)
                    .is_some_and(|tail| tail.starts_with('/'))
                || other
                    .strip_prefix(path)
                    .is_some_and(|tail| tail.starts_with('/'))
        })
    };
    let dirty = if repository.has_head() {
        repository.output(
            &["diff", "--name-only", "--no-renames", "-z", "HEAD"],
            "读取本地修改失败",
        )?
    } else {
        repository.output(
            &["diff", "--cached", "--name-only", "--no-renames", "-z"],
            "读取本地暂存文件失败",
        )?
    };
    // Ignored files are still local data. Limit enumeration to incoming roots,
    // including parent-file obstructions and directory children, rather than
    // scanning every ignored build/cache directory in the workspace.
    let mut untracked_args = vec![
        "ls-files".to_string(),
        "--others".to_string(),
        "-z".to_string(),
        "--".to_string(),
    ];
    untracked_args.extend(
        incoming
            .iter()
            .filter_map(|path| path.split('/').next())
            .collect::<std::collections::BTreeSet<_>>()
            .into_iter()
            .map(|path| format!(":(literal){path}")),
    );
    let untracked = repository.output(
        &untracked_args
            .iter()
            .map(String::as_str)
            .collect::<Vec<_>>(),
        "读取未跟踪文件失败",
    )?;
    if !dirty.status.success() {
        return Err(get_git_stderr(&dirty));
    }
    if !untracked.status.success() {
        return Err(get_git_stderr(&untracked));
    }
    Ok((
        nul_paths(&dirty.stdout)
            .into_iter()
            .filter(|path| overlaps(path))
            .collect(),
        nul_paths(&untracked.stdout)
            .into_iter()
            .filter(|path| overlaps(path))
            .collect(),
    ))
}

#[derive(serde::Serialize, serde::Deserialize)]
struct AutomaticMergeIndex {
    head: String,
    remote: String,
    branch: String,
    entries: HashMap<String, String>,
}

fn clean_index_entries(repository: &GitRepository<'_>) -> Result<HashMap<String, String>, String> {
    let output = repository.output(&["ls-files", "--stage", "-z"], "读取合并索引失败")?;
    if !output.status.success() {
        return Err(get_git_stderr(&output));
    }
    let mut entries = HashMap::new();
    for entry in nul_paths(&output.stdout) {
        let (header, path) = entry.split_once('\t').ok_or("合并索引格式无效")?;
        if let Some(blob) = header.strip_suffix(" 0") {
            entries.insert(path.to_string(), blob.to_string());
        }
    }
    Ok(entries)
}

/// 在实际 merge 返回后、用户有机会修改 index 之前记录干净的自动合并结果。
/// 目录重命名可能产生两侧树中都不存在的路径，不能仅用 HEAD..MERGE_HEAD 判断。
pub(super) fn remember_merge_index(root: &Path) -> Result<(), String> {
    let path = root.join(".git/snippets-code-merge-index.json");
    if !root.join(".git/MERGE_HEAD").exists() {
        match std::fs::remove_file(&path) {
            Ok(()) => {}
            Err(error) if error.kind() == std::io::ErrorKind::NotFound => {}
            Err(error) => return Err(format!("清理合并索引快照失败: {}", error)),
        }
        return Ok(());
    }
    let repository = GitRepository::new(root);
    let snapshot = AutomaticMergeIndex {
        head: repository.successful_stdout(&["rev-parse", "HEAD"], "读取合并本地提交失败")?,
        remote: repository
            .successful_stdout(&["rev-parse", "MERGE_HEAD"], "读取合并远端提交失败")?,
        branch: repository.current_branch()?,
        entries: clean_index_entries(&repository)?,
    };
    let content = serde_json::to_vec(&snapshot).map_err(|error| error.to_string())?;
    if path.exists() {
        crate::markdown::safe_write::replace(&path, &content, None)?;
    } else {
        crate::markdown::safe_write::create(&path, &content)?;
    }
    Ok(())
}

fn automatic_merge_entries(
    repository: &GitRepository<'_>,
) -> Result<HashMap<String, String>, String> {
    let path = repository
        .workspace_root()
        .join(".git/snippets-code-merge-index.json");
    let head = repository.successful_stdout(&["rev-parse", "HEAD"], "读取合并本地提交失败")?;
    let remote =
        repository.successful_stdout(&["rev-parse", "MERGE_HEAD"], "读取合并远端提交失败")?;
    let branch = repository.current_branch()?;
    if let Ok(content) = std::fs::read(&path) {
        let snapshot: AutomaticMergeIndex = serde_json::from_slice(&content)
            .map_err(|error| format!("读取合并索引快照失败: {}", error))?;
        if snapshot.head == head && snapshot.remote == remote && snapshot.branch == branch {
            return Ok(snapshot.entries);
        }
        std::fs::remove_file(&path)
            .map_err(|error| format!("清理过期合并索引快照失败: {}", error))?;
    }
    // 外部发起的 ort 合并可选用 AUTO_MERGE；旧版 Git 没有该引用时继续使用
    // 原范围检查，应用发起的合并则使用上面的索引快照，不引入新 Git 版本要求。
    let tree = repository.output(&["ls-tree", "-r", "-z", "AUTO_MERGE"], "读取自动合并树失败")?;
    if !tree.status.success() {
        return Ok(HashMap::new());
    }
    let mut entries = HashMap::new();
    for entry in nul_paths(&tree.stdout) {
        let (header, path) = entry.split_once('\t').ok_or("自动合并树格式无效")?;
        if let Some((mode, blob)) = header.split_once(" blob ") {
            entries.insert(path.to_string(), format!("{mode} {blob}"));
        }
    }
    Ok(entries)
}

fn validate_protocol_revision(
    repository: &GitRepository<'_>,
    revision: &str,
) -> Result<(), String> {
    let output = repository.output(
        &["ls-tree", "-r", "--name-only", "-z", revision],
        "读取同步协议版本失败",
    )?;
    if !output.status.success() {
        return Err(get_git_stderr(&output));
    }
    for path in nul_paths(&output.stdout) {
        if crate::sync_data::is_sync_protocol_path(&path) {
            validate_protocol_blob(repository, &path, &format!("{revision}:{path}"))?;
        }
    }
    Ok(())
}

fn validate_protocol_blob(
    repository: &GitRepository<'_>,
    path: &str,
    blob: &str,
) -> Result<(), String> {
    if !crate::sync_data::is_sync_protocol_path(path) {
        return Ok(());
    }
    let content = repository.output(&["cat-file", "blob", blob], "读取同步协议内容失败")?;
    if !content.status.success() {
        return Err(get_git_stderr(&content));
    }
    crate::sync_data::validate_protocol_content(path, &content.stdout)
}

// 合并提交会消费整个 index。先检查原暂存区，再应用任何逐文件选择，
// 避免失败时修改用户未选择的暂存数据或把本机数据带进合并提交。
fn validate_staged_sync_data(repository: &GitRepository<'_>) -> Result<Vec<String>, String> {
    let output = repository.output(
        &["diff", "--cached", "--name-only", "--no-renames", "-z"],
        "读取冲突暂存范围失败",
    )?;
    if !output.status.success() {
        return Err(get_git_stderr(&output));
    }
    let staged = nul_paths(&output.stdout);
    let roots = crate::sync_data::managed_attachment_roots(repository.workspace_root());
    for path in &staged {
        if !crate::sync_data::is_allowed_sync_path(path, &roots) {
            return Err(format!(
                "Git 暂存区包含不同步的本机数据，请先取消暂存后重试: {}",
                path
            ));
        }
        let spec = format!(":0:{path}");
        if repository.cat_file_exists(&spec)? {
            validate_protocol_blob(repository, path, &spec)?;
        }
    }

    Ok(staged)
}

fn validate_resolution_index(
    repository: &GitRepository<'_>,
    resolutions: &[(String, ConflictStrategy)],
    merging: bool,
) -> Result<(), String> {
    let staged = validate_staged_sync_data(repository)?;
    let automatic = if merging {
        automatic_merge_entries(repository)?
    } else {
        HashMap::new()
    };
    let current = if merging {
        clean_index_entries(repository)?
    } else {
        HashMap::new()
    };
    let remote_changes = if merging {
        let output = repository.output(
            &[
                "diff",
                "--name-only",
                "--no-renames",
                "-z",
                "HEAD",
                "MERGE_HEAD",
            ],
            "读取远端合并范围失败",
        )?;
        if !output.status.success() {
            return Err(get_git_stderr(&output));
        }
        nul_paths(&output.stdout)
    } else {
        Vec::new()
    };
    let unrelated = staged
        .iter()
        .filter(|path| {
            !resolutions
                .iter()
                .any(|(selected, _)| selected.replace('\\', "/") == **path)
                && !remote_changes.contains(path)
                && !automatic
                    .get(*path)
                    .is_some_and(|entry| current.get(*path) == Some(entry))
        })
        .collect::<Vec<_>>();
    if !unrelated.is_empty() {
        return Err(format!(
            "暂存区包含未选择的其他文件，请先取消暂存后重试: {}",
            unrelated
                .iter()
                .map(|path| path.as_str())
                .collect::<Vec<_>>()
                .join(", ")
        ));
    }
    Ok(())
}

fn validate_selected_protocols(
    repository: &GitRepository<'_>,
    resolutions: &[(String, ConflictStrategy)],
    remote: &str,
) -> Result<(), String> {
    validate_protocol_revision(repository, remote)?;
    for (file, strategy) in resolutions {
        let file = file.replace('\\', "/");
        if !crate::sync_data::is_sync_protocol_path(&file) {
            continue;
        }
        if let Some(stages) = merge_stages(repository, &file)? {
            let selected = match strategy {
                ConflictStrategy::KeepLocal if stages.resolved => Some(format!(":0:{file}")),
                ConflictStrategy::KeepLocal => stages.ours,
                _ => stages.theirs,
            };
            if let Some(blob) = selected {
                validate_protocol_blob(repository, &file, &blob)?;
            }
        } else if matches!(strategy, ConflictStrategy::KeepLocal) {
            let path = validate_conflict_path(repository.workspace_root(), &file)?;
            if path.is_file() {
                let bytes =
                    std::fs::read(path).map_err(|e| format!("读取同步协议内容失败: {}", e))?;
                crate::sync_data::validate_protocol_content(&file, &bytes)?;
            }
        }
    }
    Ok(())
}

// The command keeps this lock through config import and cache publication.
fn resolve_selected_files_locked(
    workspace_root: &Path,
    resolutions: &[(String, ConflictStrategy)],
    import_config: impl FnOnce() -> Result<(), String>,
) -> Result<(), String> {
    let repository = GitRepository::new(workspace_root);
    if resolutions.is_empty() {
        return Err("未选择需要解决的冲突".to_string());
    }
    for (file, _) in resolutions {
        check_conflict_file(&repository, &file.replace('\\', "/"))?;
    }
    let merging = workspace_root.join(".git/MERGE_HEAD").exists();
    validate_resolution_index(&repository, resolutions, merging)?;
    if merging {
        validate_selected_protocols(&repository, resolutions, "MERGE_HEAD")?;
        let unresolved = service::detect_conflicts(workspace_root)?;
        for (file, strategy) in resolutions {
            // 编辑后的本地内容已由 write_conflict_file 暂存，原样保留。
            if unresolved.contains(file) || !matches!(strategy, ConflictStrategy::KeepLocal) {
                resolve_conflict(
                    workspace_root,
                    file,
                    match strategy {
                        ConflictStrategy::KeepLocal => ConflictStrategy::KeepLocal,
                        _ => ConflictStrategy::KeepRemote,
                    },
                )?;
            }
        }
    } else {
        let fetch = repository.fetch_origin(&repository.current_branch()?)?;
        if !fetch.status.success() {
            return Err(format!("获取远端版本失败: {}", get_git_stderr(&fetch)));
        }
        let remote = repository.successful_stdout(
            &["rev-parse", "--verify", "FETCH_HEAD^{commit}"],
            "获取远端提交失败",
        )?;
        validate_selected_protocols(&repository, resolutions, &remote)?;
        let (dirty, untracked) = get_merge_worktree_obstructions(&repository, &remote)?;
        let unconfirmed_obstructions = dirty
            .iter()
            .chain(&untracked)
            .filter(|path| {
                !resolutions
                    .iter()
                    .any(|(file, _)| file.replace('\\', "/") == **path)
            })
            .cloned()
            .collect::<Vec<_>>();
        if !unconfirmed_obstructions.is_empty() {
            return Err(format!(
                "远端包含尚未确认的覆盖冲突，请重新拉取并确认: {}",
                unconfirmed_obstructions.join(", ")
            ));
        }
        let unconfirmed_deletions =
            service::get_remote_deleted_local_markdown_files(&repository, &remote)?
                .into_iter()
                .filter(|path| {
                    !resolutions
                        .iter()
                        .any(|(file, _)| file.replace('\\', "/") == *path)
                })
                .collect::<Vec<_>>();
        if !unconfirmed_deletions.is_empty() {
            return Err(format!(
                "远端新增了尚未确认的删除，请重新拉取并确认: {}",
                unconfirmed_deletions.join(", ")
            ));
        }
        let pathspecs: Vec<String> = resolutions
            .iter()
            .map(|(file, _)| format!(":(literal){}", file))
            .collect();
        for (file, strategy) in resolutions {
            if matches!(strategy, ConflictStrategy::KeepLocal) {
                repository.successful_stdout(
                    &["add", "-A", "-f", "--", &format!(":(literal){}", file)],
                    "暂存本地版本失败",
                )?;
            } else {
                restore_selected_path(&repository, &remote, file)?;
            }
        }
        commit_selected_changes(&repository, &pathspecs)?;
        // 文件锁、Git hook 等预检之外的失败也可能发生在后续 merge。
        // 立即把已确认路径绑定到新的 HEAD，使原对话框仍可安全重试。
        state::remember_conflicts(workspace_root, resolutions.iter().map(|(file, _)| file))?;
        let local = repository.current_head().ok_or("当前仓库没有本地提交")?;
        let merge = repository.output(
            &[
                "merge",
                "--no-edit",
                "--no-overwrite-ignore",
                "--no-commit",
                "--allow-unrelated-histories",
                &remote,
            ],
            "合并远端提交失败",
        )?;
        remember_merge_index(workspace_root)?;
        let conflicts = service::detect_conflicts(workspace_root)?;
        if !merge.status.success() && conflicts.is_empty() {
            return Err(format!("合并远端提交失败: {}", get_git_stderr(&merge)));
        }
        for (file, strategy) in resolutions {
            let source = if matches!(strategy, ConflictStrategy::KeepLocal) {
                &local
            } else {
                &remote
            };
            restore_selected_path(&repository, source, file)?;
        }
    }
    if !service::detect_conflicts(workspace_root)?.is_empty() {
        return Err("仍有其他未解决的冲突，请继续逐文件处理".to_string());
    }
    if workspace_root.join(".git/MERGE_HEAD").exists() {
        validate_resolution_index(&repository, resolutions, true)?;
        repository.successful_stdout(&["commit", "--no-edit"], "完成合并失败")?;
    } else {
        let pathspecs: Vec<String> = resolutions
            .iter()
            .map(|(file, _)| format!(":(literal){}", file))
            .collect();
        commit_selected_changes(&repository, &pathspecs)?;
    }
    remember_merge_index(workspace_root)?;
    // 提交已改变 HEAD。导入或推送失败后，仍允许重试这批已确认的文件。
    state::remember_conflicts(workspace_root, resolutions.iter().map(|(file, _)| file))?;
    import_config()?;
    let branch = repository.current_branch()?;
    let output = repository.push_origin_branch(&branch)?;
    if !output.status.success() {
        return Err(format!(
            "推送失败，已保留本地合并结果，请重试: {}",
            get_git_stderr(&output)
        ));
    }
    state::clear_pull_conflicts(workspace_root)?;
    clear_git_status_cache();
    Ok(())
}

fn commit_selected_changes(
    repository: &GitRepository<'_>,
    pathspecs: &[String],
) -> Result<(), String> {
    validate_staged_sync_data(repository)?;
    let mut diff_args = vec!["diff", "--cached", "--quiet", "--"];
    diff_args.extend(pathspecs.iter().map(String::as_str));
    let diff = repository.output(&diff_args, "检查待合并文件失败")?;
    if diff.status.code() == Some(1) {
        let mut args = vec!["commit", "--only", "-m", "Resolve selected files", "--"];
        args.extend(pathspecs.iter().map(String::as_str));
        repository.successful_stdout(&args, "保存所选文件失败")?;
    } else if !diff.status.success() {
        return Err(format!("检查待合并文件失败: {}", get_git_stderr(&diff)));
    }
    Ok(())
}

// ============= 冲突处理命令 =============

/// 冲突文件内容
#[derive(Debug, Serialize, Deserialize)]
pub struct ConflictFileContent {
    pub file_path: String,
    pub remote_content: String,
    pub local_content: String,
    pub base_content: Option<String>,
}

/// 获取冲突文件内容
pub(crate) fn get_conflict_file_content_impl(
    app_handle: AppHandle,
    file_path: String,
) -> Result<ConflictFileContent, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let _guard = application::lock_current_workspace(&app_handle, &workspace_root)?;
    read_conflict_contents(&workspace_root, &file_path)
}

pub(super) fn read_conflict_contents(
    workspace_root: &Path,
    file_path: &str,
) -> Result<ConflictFileContent, String> {
    let file_path = file_path.replace('\\', "/");
    let repository = GitRepository::new(workspace_root);
    let stages = check_conflict_file(&repository, &file_path)?;
    let read_blob = |blob: Option<&str>| -> Result<String, String> {
        match blob {
            Some(blob) => {
                let output = repository.output(&["cat-file", "blob", blob], "读取冲突版本失败")?;
                if !output.status.success() {
                    return Err(format!("读取冲突版本失败: {}", get_git_stderr(&output)));
                }
                Ok(String::from_utf8_lossy(&output.stdout).into_owned())
            }
            None => Ok(String::new()),
        }
    };
    let read_local = || -> Result<String, String> {
        let path = validate_conflict_path(workspace_root, &file_path)?;
        match std::fs::read_to_string(&path) {
            Ok(content) => Ok(content),
            Err(error) if error.kind() == std::io::ErrorKind::NotFound => Ok(String::new()),
            Err(error) => Err(format!("读取本地文件失败: {}", error)),
        }
    };
    let (local_content, remote_content, base_content) = if let Some(stages) = stages {
        let local = if stages.resolved {
            read_local()?
        } else {
            read_blob(stages.ours.as_deref())?
        };
        let base = stages
            .base
            .as_deref()
            .map(|blob| read_blob(Some(blob)))
            .transpose()?;
        (local, read_blob(stages.theirs.as_deref())?, base)
    } else {
        let spec = format!("origin/{}:{}", repository.current_branch()?, file_path);
        let remote = if repository.cat_file_exists(&spec)? {
            read_blob(Some(&spec))?
        } else {
            String::new()
        };
        (read_local()?, remote, None)
    };
    Ok(ConflictFileContent {
        file_path,
        remote_content,
        local_content,
        base_content,
    })
}

/// 强制推送（覆盖远程）
pub(crate) async fn force_push_impl(
    app_handle: AppHandle,
    message: Option<String>,
) -> Result<PushResult, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let _git_operation_guard = application::lock_current_workspace(&app_handle, &workspace_root)?;

    info!("🔄 [Git] 开始强制推送");

    // 如果处于 merge 状态，先 abort 以恢复干净的本地状态，避免提交冲突标记
    let merge_head_path = workspace_root.join(".git/MERGE_HEAD");
    if merge_head_path.exists() {
        info!("⚠️ [Git] 检测到 merge 状态，先执行 merge --abort");
        let abort_output = crate::git_common::git_command()
            .args(["merge", "--abort"])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("git merge --abort 失败: {}", e))?;

        if !abort_output.status.success() {
            let error = String::from_utf8_lossy(&abort_output.stderr);
            return Err(format!("git merge --abort 失败: {}", error));
        }
    }

    // 1. 只添加同步白名单范围。强制推送只改变远端分支策略，不扩大数据范围。
    ensure_gitignore(&workspace_root)?;
    crate::sync_data::export_sync_bundle(&app_handle, &workspace_root)?;
    let staged_files = crate::sync_data::stage_allowed_sync_changes(&workspace_root)?;

    // 2. 提交
    let commit_message = message.unwrap_or_else(|| {
        format!(
            "Force push: {}",
            chrono::Local::now().format("%Y-%m-%d %H:%M:%S")
        )
    });

    if !staged_files.is_empty() {
        let commit_output = crate::git_common::git_command()
            .args(["commit", "-m", &commit_message])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("git commit 失败: {}", e))?;

        if !commit_output.status.success() {
            let stderr = String::from_utf8_lossy(&commit_output.stderr);
            if !stderr.contains("nothing to commit") {
                return Err(format!("git commit 失败: {}", stderr));
            }
        }
    }

    // 3. 获取当前分支
    let branch_output = crate::git_common::git_command()
        .args(["branch", "--show-current"])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("获取当前分支失败: {}", e))?;

    let branch = String::from_utf8_lossy(&branch_output.stdout)
        .trim()
        .to_string();

    // 4. 强制推送
    let output = crate::git_common::git_command()
        .args([
            "push",
            "--force",
            "origin",
            &format!("refs/heads/{branch}:refs/heads/{branch}"),
        ])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("git push --force 失败: {}", e))?;

    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        error!("❌ [Git] 强制推送失败: {}", error);
        return Err(format!("强制推送失败: {}", error));
    }

    info!("✅ [Git] 强制推送成功");
    state::clear_pull_conflicts(&workspace_root)?;

    Ok(PushResult {
        success: true,
        files_pushed: staged_files.len(),
        commit_hash: String::new(),
        message: "强制推送成功".to_string(),
    })
}

/// 强制拉取（覆盖本地）
pub(crate) async fn force_pull_impl(app_handle: AppHandle) -> Result<PullResult, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let (by_status, cache_snapshot) =
        (|| -> Result<(ChangedFilesByStatus, Option<crate::markdown::CacheManager>), String> {
            let _git_operation_guard =
                application::lock_current_workspace(&app_handle, &workspace_root)?;

            info!("🔄 [Git] 开始强制拉取");
            if let Err(e) = app_handle.emit_to("config", "git-pull-start", ()) {
                warn!("⚠️ [Git] 发送 git-pull-start 事件失败: {}", e);
            }
            if let Err(e) = app_handle.emit_to("main", "git-pull-start", ()) {
                warn!("⚠️ [Git] 发送 git-pull-start 到 main 失败: {}", e);
            }

            let by_status = force_pull_repository(&workspace_root)?;

            info!("✅ [Git] 强制拉取成功");
            state::clear_pull_conflicts(&workspace_root)?;
            application::apply_pulled_config(&app_handle, &workspace_root)?;

            let changed_files = by_status.all();
            apply_non_content_sync_changes(&app_handle, &by_status);

            // 将变更的文件添加到 FileWatcher 忽略列表，避免触发删除事件
            if !changed_files.is_empty() {
                if let Some(watcher_state) =
                    app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>()
                {
                    if let Ok(watcher_lock) = watcher_state.lock() {
                        if let Some(ref watcher) = *watcher_lock {
                            for file in &changed_files {
                                let file_path = workspace_root.join(file);
                                watcher.ignore_next_change(file_path);
                            }
                            info!(
                                "🔕 [Git] 已将 {} 个文件添加到 FileWatcher 忽略列表",
                                changed_files.len()
                            );
                        }
                    }
                }
            }

            // 使用增量扫描更新 cache
            if !changed_files.is_empty() {
                info!("📋 [Git] 检测到 {} 个 .md 文件变更", changed_files.len());

                if let Some(cache_state) =
                    app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>()
                {
                    if let Ok(mut cache) = cache_state.write() {
                        if let Err(error) =
                            refresh_conflict_cache(&mut cache, &workspace_root, &changed_files)
                        {
                            warn!("⚠️ [Git] 强制拉取后更新缓存失败，尝试全量重建: {}", error);
                            cache.rebuild_cache(&workspace_root)?;
                        }
                        cache.save()?;
                    }
                }
            }
            let cache_snapshot = app_handle
                .try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>()
                .and_then(|state| state.read().ok().map(|cache| cache.clone()));
            Ok((by_status, cache_snapshot))
        })()
        .inspect_err(|_| {
            let Ok(_guard) = application::lock_current_workspace(&app_handle, &workspace_root)
            else {
                return;
            };
            for window in ["main", "config"] {
                let _ = app_handle.emit_to(
                    window,
                    "git-sync-complete",
                    serde_json::json!({ "success": false, "last_sync_time": null }),
                );
            }
        })?;

    let _guard = application::lock_current_workspace(&app_handle, &workspace_root)?;

    if !by_status.all().is_empty() {
        if let Some(cache) = cache_snapshot {
            application::schedule_workspace_index_rebuild(
                app_handle.clone(),
                workspace_root.clone(),
                cache,
            );
        }
        if let Err(error) = app_handle.emit_to(
            "config",
            "files-changed-batch",
            serde_json::json!({
                "created": by_status.created,
                "modified": by_status.modified,
                "deleted": by_status.deleted,
            }),
        ) {
            warn!("⚠️ [Git] 发送文件变更事件失败: {}", error);
        }
        if let Err(error) =
            app_handle.emit_to("config", "git-pull-completed", by_status.total_count())
        {
            warn!("⚠️ [Git] 发送拉取完成事件失败: {}", error);
        }
    }

    let result = PullResult {
        success: true,
        files_updated: by_status.total_count(),
        has_conflicts: false,
        conflict_files: vec![],
        message: "强制拉取成功".to_string(),
        pre_pull_head: None,
        untracked_files: vec![],
        last_sync_time: Some(chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string()),
        branch_selection: None,
    };

    if let Err(e) = app_handle.emit_to(
        "config",
        "git-sync-complete",
        serde_json::json!({
            "success": result.success,
            "last_sync_time": result.last_sync_time
        }),
    ) {
        warn!("⚠️ [Git] 发送 git-sync-complete 事件失败: {}", e);
    }
    if let Err(e) = app_handle.emit_to(
        "main",
        "git-sync-complete",
        serde_json::json!({
            "success": result.success,
            "last_sync_time": result.last_sync_time
        }),
    ) {
        warn!("⚠️ [Git] 发送 git-sync-complete 到 main 失败: {}", e);
    }

    clear_git_status_cache();

    Ok(result)
}

pub(super) fn force_pull_repository(workspace_root: &Path) -> Result<ChangedFilesByStatus, String> {
    let repository = GitRepository::new(workspace_root);
    let branch = repository.current_branch()?;
    // 显式获取当前分支，失败时绝不使用上次留下的 origin/* 或 FETCH_HEAD。
    // 使用完整 ref 避免分支/标签同名，也不依赖 remote.origin.fetch 配置。
    let remote_ref = format!("+refs/heads/{branch}:refs/remotes/origin/{branch}");
    repository.successful_stdout(&["fetch", "origin", &remote_ref], "获取远端分支失败")?;
    let remote_commit = repository.successful_stdout(
        &["rev-parse", "--verify", "FETCH_HEAD^{commit}"],
        "校验远端提交失败",
    )?;
    // 对比目标提交与覆盖前的实际工作区，包含尚未提交的修改和删除。
    let before = repository.output(
        &[
            "diff",
            "--name-status",
            "--no-renames",
            "-z",
            &remote_commit,
            "--",
        ],
        "读取覆盖前工作区变更失败",
    )?;
    if !before.status.success() {
        return Err(get_git_stderr(&before));
    }
    let paths = service::parse_name_status(&before.stdout)
        .into_iter()
        .map(|(_, path)| {
            let existed = workspace_root.join(&path).is_file();
            (path, existed)
        })
        .collect::<Vec<_>>();
    let untracked = repository.output(
        &["ls-files", "--others", "--exclude-standard", "-z"],
        "读取覆盖前未跟踪文件失败",
    )?;
    if !untracked.status.success() {
        return Err(get_git_stderr(&untracked));
    }
    let untracked_paths = untracked
        .stdout
        .split(|byte| *byte == 0)
        .filter(|path| !path.is_empty())
        .map(|path| String::from_utf8_lossy(path).replace('\\', "/"))
        .filter(|path| workspace_root.join(path).is_file())
        .collect::<Vec<_>>();
    // reset 自身只替换阻挡远端受管路径的未跟踪文件/目录；无需预先删除草稿。
    repository.successful_stdout(&["reset", "--hard", &remote_commit], "强制拉取失败")?;
    let mut changes = ChangedFilesByStatus::default();
    for (path, existed) in paths {
        let status = if !workspace_root.join(&path).is_file() {
            "D"
        } else if existed {
            "M"
        } else {
            "A"
        };
        changes.record_path(workspace_root, status, path);
    }
    // A target file can replace an untracked directory. Its vanished Markdown
    // children also need removal from the content cache.
    for path in untracked_paths {
        if !workspace_root.join(&path).is_file() && !changes.all().contains(&path) {
            changes.record_path(workspace_root, "D", path);
        }
    }
    Ok(changes)
}

/// 批量解决冲突的返回结果
#[derive(serde::Serialize)]
pub struct ResolveConflictsResult {
    pub success: bool,
    pub resolved_count: usize,
}

pub(super) fn refresh_conflict_cache(
    cache: &mut crate::markdown::CacheManager,
    workspace_root: &Path,
    paths: &[String],
) -> Result<usize, String> {
    let mut existing = Vec::new();
    for path in paths {
        let full_path = workspace_root.join(path);
        if full_path.is_file() {
            existing.push(path.clone());
        } else {
            cache.remove_file(&full_path, workspace_root)?;
        }
    }
    cache.scan_files(&existing, workspace_root)
}

/// 批量解决冲突
pub(crate) fn resolve_conflicts_batch_impl(
    app_handle: AppHandle,
    resolutions: Vec<(String, ConflictStrategy)>,
) -> Result<ResolveConflictsResult, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let _guard = application::lock_current_workspace(&app_handle, &workspace_root)?;

    info!("🔄 [Git] 开始批量解决冲突，共 {} 个文件", resolutions.len());

    // 收集所有冲突文件路径
    let conflict_file_paths: Vec<String> =
        resolutions.iter().map(|(path, _)| path.clone()).collect();
    let attachment_roots = crate::sync_data::managed_attachment_roots(&workspace_root);
    let forbidden_paths = conflict_file_paths
        .iter()
        .filter(|path| !crate::sync_data::is_allowed_sync_path(path, &attachment_roots))
        .cloned()
        .collect::<Vec<_>>();
    if !forbidden_paths.is_empty() {
        return Err(format!(
            "冲突列表包含不同步的本机数据，已拒绝提交: {}",
            forbidden_paths.join(", ")
        ));
    }

    let resolved_count = conflict_file_paths.len();

    // 检查是否处于 merge 状态
    let merge_head_path = workspace_root.join(".git/MERGE_HEAD");
    let is_merge_conflict = merge_head_path.exists();

    info!(
        "📋 [Git] 冲突类型: {}",
        if is_merge_conflict {
            "Merge 冲突"
        } else {
            "本地更改冲突"
        }
    );

    // 在执行任何 Git 操作之前，将冲突文件添加到 FileWatcher 的忽略列表
    // 注意：每个 Git 操作都可能触发文件变更事件，需要多次添加忽略
    if !conflict_file_paths.is_empty() {
        info!(
            "🔒 [Git] 将 {} 个冲突文件添加到 FileWatcher 忽略列表（多次）",
            conflict_file_paths.len()
        );

        if let Some(watcher_state) =
            app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>()
        {
            if let Ok(watcher_lock) = watcher_state.lock() {
                if let Some(ref watcher) = *watcher_lock {
                    for _ in 0..5 {
                        for file_path in &conflict_file_paths {
                            let full_path = workspace_root.join(file_path);
                            watcher.ignore_next_change(full_path.clone());
                        }
                    }
                    info!("✅ [Git] 已添加到忽略列表（5次）");
                }
            }
        }
    }

    resolve_selected_files_locked(&workspace_root, &resolutions, || {
        application::apply_pulled_config(&app_handle, &workspace_root)
    })?;

    info!("✅ [Git] 批量解决冲突成功");

    // 等待 FileWatcher 处理完所有事件（给它一点时间）
    std::thread::sleep(Duration::from_millis(500));

    // 更新 cache 中的冲突文件
    if !conflict_file_paths.is_empty() {
        info!(
            "📋 [Git] 更新 cache，共 {} 个冲突文件",
            conflict_file_paths.len()
        );

        if let Some(cache_state) =
            app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>()
        {
            if let Ok(mut cache) = cache_state.write() {
                match refresh_conflict_cache(&mut cache, &workspace_root, &conflict_file_paths) {
                    Ok(added_count) => {
                        info!("✅ [Git] Cache 更新完成，添加 {} 个文件", added_count);
                        let _ = cache.save();

                        // 再次等待，确保 FileWatcher 不会在我们保存后删除
                        drop(cache);
                        std::thread::sleep(Duration::from_millis(500));

                        // 最后再次确认文件在 cache 中
                        if let Ok(mut cache) = cache_state.write() {
                            info!("🔍 [Git] 最后确认：再次扫描冲突文件");
                            match refresh_conflict_cache(
                                &mut cache,
                                &workspace_root,
                                &conflict_file_paths,
                            ) {
                                Ok(count) => {
                                    if count > 0 {
                                        info!("✅ [Git] 最后确认：重新添加了 {} 个文件", count);
                                    } else {
                                        info!("✅ [Git] 最后确认：文件已在 cache 中");
                                    }
                                    let _ = cache.save();
                                }
                                Err(e) => {
                                    warn!("⚠️ [Git] 最后确认失败: {}", e);
                                }
                            }
                        }
                    }
                    Err(e) => {
                        warn!("⚠️ [Git] Cache 更新失败: {}", e);
                    }
                }
            }
        }
    }

    // 冲突解决后，恢复自动同步
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        if let Ok(sync_manager) = sync_state.lock() {
            if let Some(ref manager) = *sync_manager {
                if let Err(e) = manager.resume() {
                    warn!("⚠️ [Git] 恢复自动同步失败: {}", e);
                }
            }
        }
    }

    Ok(ResolveConflictsResult {
        success: true,
        resolved_count,
    })
}

/// 写入冲突文件内容（用于手动编辑后保存）
pub(crate) fn write_conflict_file_impl(
    app_handle: AppHandle,
    file_path: String,
    content: String,
) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let _guard = application::lock_current_workspace(&app_handle, &workspace_root)?;
    stage_conflict_edit(&workspace_root, &file_path, &content)
}

// 复用文档的逐字节安全写入器，用新文件替换硬链接，保留空内容和换行。
pub(super) fn stage_conflict_edit(
    root: &Path,
    file_path: &str,
    content: &str,
) -> Result<(), String> {
    let file_path = file_path.replace('\\', "/");
    let repository = GitRepository::new(root);
    check_conflict_file(&repository, &file_path)?;
    let full_path = validate_conflict_path(root, &file_path)?;
    let parent = full_path.parent().ok_or("文件缺少父目录")?;
    std::fs::create_dir_all(parent).map_err(|error| format!("创建冲突文件目录失败: {}", error))?;
    if full_path.exists() {
        crate::markdown::safe_write::replace(&full_path, content.as_bytes(), None)?;
    } else {
        crate::markdown::safe_write::create(&full_path, content.as_bytes())?;
    }
    repository.successful_stdout(
        &["add", "--", &format!(":(literal){}", file_path)],
        "暂存编辑内容失败",
    )?;
    Ok(())
}

/// 删除未跟踪文件（用于解决 untracked files 冲突）
pub(crate) fn remove_untracked_file_impl(
    app_handle: AppHandle,
    file_path: String,
) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;

    let _guard = application::lock_current_workspace(&app_handle, &workspace_root)?;
    let relative_path = file_path.replace('\\', "/");
    check_conflict_file(&GitRepository::new(&workspace_root), &relative_path)?;
    let full_path = validate_conflict_path(&workspace_root, &relative_path)?;
    let tracked = GitRepository::new(&workspace_root).successful_stdout(
        &["ls-files", "--", &format!(":(literal){}", relative_path)],
        "检查未跟踪文件失败",
    )?;
    if !tracked.is_empty() {
        return Err("拒绝删除已跟踪文件".to_string());
    }
    if !full_path.exists() {
        info!("ℹ️ [Git] 文件不存在，无需删除: {}", relative_path);
        return Ok(());
    }

    let canonical_workspace = workspace_root
        .canonicalize()
        .map_err(|e| format!("解析工作区路径失败: {}", e))?;
    let canonical_target = full_path
        .canonicalize()
        .map_err(|e| format!("解析目标路径失败: {}", e))?;
    if !canonical_target.starts_with(&canonical_workspace) {
        return Err("拒绝删除工作区外的文件".to_string());
    }

    info!("🗑️ [Git] 删除未跟踪文件: {}", relative_path);

    if full_path.is_dir() {
        std::fs::remove_dir_all(&full_path).map_err(|e| format!("删除目录失败: {}", e))?;
    } else {
        std::fs::remove_file(&full_path).map_err(|e| format!("删除文件失败: {}", e))?;
    }

    info!("✅ [Git] 已删除未跟踪文件: {}", relative_path);

    Ok(())
}
