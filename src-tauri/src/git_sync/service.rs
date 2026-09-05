use std::collections::BTreeSet;
use std::path::Path;

use log::{debug, error, info, warn};

use crate::git_common::{
    decode_git_quoted_path, get_git_stderr, get_git_stdout, is_git_success,
    parse_git_file_count_output,
};

use super::repository::GitRepository;
use super::types::{BranchSelection, GitStatus, PullResult, PushResult};
use super::{
    clear_git_status_cache, AUTO_GENERATED_UNTRACKED_PULL_PATHS, GIT_OPERATION_LOCK, MAIN_BRANCH,
};

pub(crate) struct GitSyncService<'a> {
    repository: GitRepository<'a>,
}

impl<'a> GitSyncService<'a> {
    pub(crate) fn new(workspace_root: &'a Path) -> Self {
        Self {
            repository: GitRepository::new(workspace_root),
        }
    }

    pub(crate) fn status(&self) -> Result<GitStatus, String> {
        get_git_status_with_repository(&self.repository)
    }

    pub(crate) async fn pull(&self) -> Result<PullResult, String> {
        git_pull_impl(&self.repository).await
    }

    pub(crate) async fn push(&self, message: &str) -> Result<PushResult, String> {
        git_push_impl(&self.repository, message).await
    }

    pub(crate) fn changes_since(
        &self,
        pre_pull_head: Option<&str>,
    ) -> Result<ChangedFilesByStatus, String> {
        get_changed_files_with_status(self.repository.workspace_root(), pre_pull_head)
    }
}

/// 将 `git status --porcelain` 的原始行转换为适合前端展示的格式
/// 主要负责解码其中的中文路径（处理 core.quotepath 导致的 \ooo 八进制转义）
fn format_git_status_line_for_display(line: &str) -> String {
    let trimmed = line.trim();
    if trimmed.len() < 3 {
        return trimmed.to_string();
    }

    // 前两列是状态（例如 " M", "??"），第三列是空格，后面是路径信息
    let (status, rest) = trimmed.split_at(2);
    let rest = rest.trim_start();

    // 处理重命名：old -> new
    if let Some(idx) = rest.find("->") {
        let (from, to) = rest.split_at(idx);
        let to = &to[2..]; // 跳过 "->"
        let from_decoded = decode_git_quoted_path(from.trim());
        let to_decoded = decode_git_quoted_path(to.trim());
        return format!("{} {} -> {}", status.trim(), from_decoded, to_decoded);
    }

    let path_decoded = decode_git_quoted_path(rest);
    if status.trim().is_empty() {
        path_decoded
    } else {
        format!("{} {}", status.trim(), path_decoded)
    }
}

fn git_porcelain_path(line: &str) -> Option<String> {
    if line.len() < 4 {
        return None;
    }

    let raw_path = line.get(3..)?.trim();
    let target_path = raw_path
        .rsplit_once(" -> ")
        .map(|(_, target)| target)
        .unwrap_or(raw_path);
    let decoded = decode_git_quoted_path(target_path.trim()).replace('\\', "/");
    (!decoded.is_empty()).then_some(decoded)
}

/// `core.autocrlf=true` 下，等价 JSON 被 LF/CRLF 转换后可能短暂出现在
/// porcelain 状态中，但 `git diff` 确认其规范化内容没有变化。只过滤纯
/// 工作区修改；已暂存变更和真实内容变更必须继续展示。
fn is_noop_worktree_modification(repository: &GitRepository<'_>, line: &str, path: &str) -> bool {
    let status = line.as_bytes();
    if path != ".snippets-code/sync.json"
        || status.first() != Some(&b' ')
        || status.get(1) != Some(&b'M')
    {
        return false;
    }

    !repository.has_worktree_diff(path)
}

fn get_git_status_with_repository(repository: &GitRepository<'_>) -> Result<GitStatus, String> {
    // 不在此处输出 "开始获取" 日志，避免与 command 层重复
    let workspace_root = repository.workspace_root();

    // 检查是否是仓库
    let is_repo = repository.is_repository();
    if !is_repo {
        info!("📊 [Git] 当前工作区不是 Git 仓库");
        return Ok(GitStatus {
            is_repo: false,
            has_remote: false,
            has_changes: false,
            changed_files: vec![],
            branch: String::new(),
            main_branch: MAIN_BRANCH.to_string(),
            available_branches: vec![MAIN_BRANCH.to_string()],
            has_other_branches: false,
        });
    }

    // 检查远程仓库
    let has_remote = repository.has_remote()?;

    // 获取当前分支
    let branch = repository.current_branch_or_main()?;

    // 获取变更文件
    let status_output = repository.status_porcelain()?;

    let changed_files: Vec<String> = if status_output.status.success() {
        let attachment_roots = crate::sync_data::managed_attachment_roots(workspace_root);
        let mut changed_files = String::from_utf8_lossy(&status_output.stdout)
            .lines()
            .filter_map(|line| {
                let path = git_porcelain_path(line)?;
                if is_noop_worktree_modification(repository, line, &path) {
                    return None;
                }
                crate::sync_data::is_allowed_sync_path(&path, &attachment_roots)
                    .then(|| format_git_status_line_for_display(line))
            })
            .filter(|line| !line.is_empty())
            .collect::<BTreeSet<_>>();

        // 旧版本可能把 app.json、workspace.json 或数据库加入过 Git。
        // 这些文件即使内容未变化，也需要触发一次同步提交以迁出索引；
        // `git rm --cached` 只停止跟踪，不会删除本地文件。
        for path in crate::sync_data::forbidden_tracked_paths(workspace_root)? {
            changed_files.insert(format!("D {}", path));
        }

        changed_files.into_iter().collect()
    } else {
        vec![]
    };

    let has_changes = !changed_files.is_empty();

    let available_branches = collect_available_branches(workspace_root);
    let has_other_branches = available_branches
        .iter()
        .any(|branch| branch != MAIN_BRANCH);

    let status = GitStatus {
        is_repo,
        has_remote,
        has_changes,
        changed_files,
        branch,
        main_branch: MAIN_BRANCH.to_string(),
        available_branches,
        has_other_branches,
    };

    debug!(
        "📊 [Git] Git 状态计算完成: is_repo={}, has_remote={}, has_changes={}, branch={}",
        status.is_repo, status.has_remote, status.has_changes, status.branch
    );

    Ok(status)
}

pub(crate) fn empty_git_status() -> GitStatus {
    GitStatus {
        is_repo: false,
        has_remote: false,
        has_changes: false,
        changed_files: vec![],
        branch: String::new(),
        main_branch: MAIN_BRANCH.to_string(),
        available_branches: vec![MAIN_BRANCH.to_string()],
        has_other_branches: false,
    }
}

pub(crate) fn git_has_head(workspace_root: &Path) -> bool {
    GitRepository::new(workspace_root).has_head()
}

fn is_untracked_git_path(workspace_root: &Path, relative_path: &str) -> Result<bool, String> {
    let repository = GitRepository::new(workspace_root);
    let output = repository.status_porcelain_for_path(relative_path)?;

    if !output.status.success() {
        return Err(format!(
            "检测 Git 文件状态失败: {}",
            get_git_stderr(&output)
        ));
    }

    let stdout = get_git_stdout(&output);
    Ok(stdout
        .lines()
        .any(|line| line.trim_start().starts_with("??")))
}

fn remote_path_exists(
    workspace_root: &Path,
    remote_ref: &str,
    relative_path: &str,
) -> Result<bool, String> {
    let repository = GitRepository::new(workspace_root);
    let spec = format!("{}:{}", remote_ref, relative_path);
    repository.cat_file_exists(&spec)
}

fn remove_untracked_workspace_path(
    workspace_root: &Path,
    remote_ref: &str,
    relative_path: &str,
) -> Result<bool, String> {
    if !remote_path_exists(workspace_root, remote_ref, relative_path)? {
        return Ok(false);
    }

    if !is_untracked_git_path(workspace_root, relative_path)? {
        return Ok(false);
    }

    let repository = GitRepository::new(workspace_root);
    if !repository.workspace_path_exists(relative_path) {
        return Ok(false);
    }

    repository.remove_workspace_path(relative_path)?;

    info!(
        "🧹 [Git] 已移除可由远端覆盖的本地未跟踪文件: {}",
        relative_path
    );
    Ok(true)
}

pub(crate) fn prepare_auto_generated_untracked_files_for_pull(
    workspace_root: &Path,
    remote_ref: &str,
) -> Result<Vec<String>, String> {
    let mut removed = Vec::new();

    for relative_path in AUTO_GENERATED_UNTRACKED_PULL_PATHS {
        if remove_untracked_workspace_path(workspace_root, remote_ref, relative_path)? {
            removed.push((*relative_path).to_string());
        }
    }

    if !removed.is_empty() {
        info!(
            "🧹 [Git] Pull 前已清理本地默认元文件，等待远端版本写入: {:?}",
            removed
        );
    }

    Ok(removed)
}

fn normalize_branch_name(branch: &str) -> String {
    branch
        .trim()
        .trim_start_matches('*')
        .trim()
        .trim_start_matches("remotes/")
        .trim_start_matches("origin/")
        .trim()
        .to_string()
}

fn list_local_branches(workspace_root: &Path) -> Result<Vec<String>, String> {
    let repository = GitRepository::new(workspace_root);
    let output = repository.local_branches()?;

    if !output.status.success() {
        return Ok(vec![]);
    }

    Ok(String::from_utf8_lossy(&output.stdout)
        .lines()
        .map(normalize_branch_name)
        .filter(|branch| !branch.is_empty())
        .collect())
}

fn list_remote_branches(workspace_root: &Path) -> Result<Vec<String>, String> {
    let repository = GitRepository::new(workspace_root);
    let output = repository.remote_branches()?;

    if !output.status.success() {
        return Ok(vec![]);
    }

    let mut branches: Vec<String> = String::from_utf8_lossy(&output.stdout)
        .lines()
        .filter(|line| !line.contains("HEAD ->"))
        .map(normalize_branch_name)
        .filter(|branch| !branch.is_empty())
        .collect();
    branches.sort();
    branches.dedup();
    Ok(branches)
}

fn collect_available_branches(workspace_root: &Path) -> Vec<String> {
    let mut branches = vec![MAIN_BRANCH.to_string()];
    if let Ok(local) = list_local_branches(workspace_root) {
        branches.extend(local);
    }
    if let Ok(remote) = list_remote_branches(workspace_root) {
        branches.extend(remote);
    }
    branches.sort();
    branches.dedup();
    branches
}

fn build_branch_selection(
    workspace_root: &Path,
    current_branch: &str,
    reason: &str,
) -> BranchSelection {
    BranchSelection {
        current_branch: current_branch.to_string(),
        recommended_branch: MAIN_BRANCH.to_string(),
        available_branches: collect_available_branches(workspace_root),
        reason: reason.to_string(),
    }
}

/// 变更文件分类（用于增量更新）
#[derive(Debug, Default)]
pub(crate) struct ChangedFilesByStatus {
    pub(crate) created: Vec<String>,
    pub(crate) modified: Vec<String>,
    pub(crate) deleted: Vec<String>,
    pub(crate) attachment_files: Vec<String>,
    pub(crate) sync_protocol_files: Vec<String>,
}

impl ChangedFilesByStatus {
    /// Markdown 内容变更。现有 cache 和内容刷新事件只消费这一组。
    pub(crate) fn all(&self) -> Vec<String> {
        self.created
            .iter()
            .chain(self.modified.iter())
            .chain(self.deleted.iter())
            .cloned()
            .collect()
    }

    pub(crate) fn total_count(&self) -> usize {
        self.created.len()
            + self.modified.len()
            + self.deleted.len()
            + self.attachment_files.len()
            + self.sync_protocol_files.len()
    }

    fn record_path(&mut self, workspace_root: &Path, status: &str, path: String) {
        if path.to_ascii_lowercase().ends_with(".md") {
            match status {
                "A" => self.created.push(path),
                "D" => self.deleted.push(path),
                _ => self.modified.push(path),
            }
        } else if crate::sync_data::is_sync_protocol_path(&path) {
            self.sync_protocol_files.push(path);
        } else if crate::sync_data::is_attachment_path(workspace_root, &path) {
            self.attachment_files.push(path);
        }
    }
}

/// 获取 Git Pull 后变更的文件列表（按状态分类，用于真正的增量更新）
fn parse_nul_paths(output: &[u8]) -> Vec<String> {
    output
        .split(|byte| *byte == 0)
        .filter(|field| !field.is_empty())
        .map(|field| String::from_utf8_lossy(field).replace('\\', "/"))
        .collect()
}

fn parse_name_status(output: &[u8]) -> Vec<(char, String)> {
    let mut fields = output
        .split(|byte| *byte == 0)
        .filter(|field| !field.is_empty());
    let mut changes = Vec::new();

    while let Some(status_bytes) = fields.next() {
        let status = String::from_utf8_lossy(status_bytes);
        let Some(path_bytes) = fields.next() else {
            break;
        };
        let path = String::from_utf8_lossy(path_bytes).replace('\\', "/");

        match status.chars().next() {
            Some('R') => {
                changes.push(('D', path));
                if let Some(target_bytes) = fields.next() {
                    changes.push((
                        'A',
                        String::from_utf8_lossy(target_bytes).replace('\\', "/"),
                    ));
                }
            }
            Some(kind @ ('A' | 'M' | 'D')) => changes.push((kind, path)),
            _ => {}
        }
    }

    changes
}

fn parse_deleted_paths(output: &[u8]) -> Vec<String> {
    let mut fields = output
        .split(|byte| *byte == 0)
        .filter(|field| !field.is_empty());
    let mut deleted = Vec::new();

    while let Some(status_bytes) = fields.next() {
        let status = String::from_utf8_lossy(status_bytes);
        let Some(path_bytes) = fields.next() else {
            break;
        };

        if status == "D" {
            deleted.push(String::from_utf8_lossy(path_bytes).replace('\\', "/"));
        } else if status.starts_with('R') || status.starts_with('C') {
            let _ = fields.next();
        }
    }

    deleted
}

/// Classifies repository changes after pull for cache and index updates.
pub(crate) fn get_changed_files_with_status(
    workspace_root: &Path,
    pre_pull_head: Option<&str>,
) -> Result<ChangedFilesByStatus, String> {
    let repository = GitRepository::new(workspace_root);
    let base_ref = pre_pull_head
        .filter(|hash| !hash.is_empty())
        .map(ToOwned::to_owned)
        .or_else(|| repository.original_head())
        .unwrap_or_default();

    if base_ref.is_empty() {
        if !repository.has_head() {
            info!("ℹ️ [Git] 当前仓库尚无可用于 diff 的基准引用，跳过 pull 后增量变更 diff");
            return Ok(ChangedFilesByStatus::default());
        }

        let output = repository.head_tree_paths()?;
        if !output.status.success() {
            return Err(format!(
                "获取首次拉取文件列表失败: {}",
                get_git_stderr(&output)
            ));
        }

        let mut result = ChangedFilesByStatus::default();
        for path in parse_nul_paths(&output.stdout) {
            result.record_path(workspace_root, "A", path);
        }

        info!(
            "📋 [Git] 首次 Pull 无 diff 基准，将 {} 个受管文件视为新增",
            result.total_count()
        );
        return Ok(result);
    }

    let output = repository.changed_paths(&base_ref, "HEAD")?;
    if !output.status.success() {
        warn!(
            "⚠️ [Git] 无法获取变更文件列表 (base_ref={}): {}",
            base_ref,
            get_git_stderr(&output)
        );
        return Ok(ChangedFilesByStatus::default());
    }

    let mut result = ChangedFilesByStatus::default();
    for (status, path) in parse_name_status(&output.stdout) {
        result.record_path(workspace_root, &status.to_string(), path);
    }

    info!(
        "📋 [Git] 变更: {} Markdown 新增, {} 修改, {} 删除, {} 附件, {} 同步配置 (base_ref={})",
        result.created.len(),
        result.modified.len(),
        result.deleted.len(),
        result.attachment_files.len(),
        result.sync_protocol_files.len(),
        base_ref
    );
    Ok(result)
}

/// Checks whether the remote would delete local Markdown before pull.
fn get_remote_deleted_local_markdown_files(
    repository: &GitRepository<'_>,
    branch: &str,
) -> Result<Vec<String>, String> {
    if branch.is_empty() || !repository.has_head() {
        return Ok(vec![]);
    }

    let remote_ref = format!("origin/{}", branch);
    let output = repository.changed_paths("HEAD", &remote_ref)?;
    if !output.status.success() {
        warn!(
            "⚠️ [Git] 检查远端删除文件失败 ({}): {}",
            remote_ref,
            get_git_stderr(&output)
        );
        return Ok(vec![]);
    }

    Ok(parse_deleted_paths(&output.stdout)
        .into_iter()
        .filter(|path| {
            path.to_ascii_lowercase().ends_with(".md") && repository.workspace_path_exists(path)
        })
        .collect())
}

async fn git_pull_impl(repository: &GitRepository<'_>) -> Result<PullResult, String> {
    let workspace_root = repository.workspace_root();
    let _git_operation_guard = GIT_OPERATION_LOCK
        .lock()
        .map_err(|e| format!("获取 Git 操作锁失败: {}", e))?;
    info!("🔄 [Git] 开始 pull 操作");

    // 记录 pull 前的 HEAD commit hash
    let has_head_before_pull = repository.has_head();
    let pre_pull_head = if has_head_before_pull {
        repository.current_head()
    } else {
        info!("ℹ️ [Git] 当前仓库尚无本地提交，pull 前没有 HEAD 基准");
        None
    };

    // 首先检查是否有未解决的冲突
    let conflict_files = detect_conflicts(workspace_root)?;
    if !conflict_files.is_empty() {
        warn!("⚠️ [Git] 检测到未解决的冲突文件: {:?}", conflict_files);
        return Ok(PullResult {
            success: false,
            files_updated: 0,
            has_conflicts: true,
            conflict_files,
            message: "存在未解决的冲突，请先解决冲突".to_string(),
            pre_pull_head: None,
            untracked_files: vec![],
            last_sync_time: None,
            branch_selection: None,
        });
    }

    let branch = repository.current_branch_or_main()?;
    if branch != MAIN_BRANCH {
        let branch_selection = build_branch_selection(
            workspace_root,
            &branch,
            "当前工作区不在 main 分支，请选择要同步的分支",
        );
        return Ok(PullResult {
            success: false,
            files_updated: 0,
            has_conflicts: false,
            conflict_files: vec![],
            message: "branch_selection_required".to_string(),
            pre_pull_head: None,
            untracked_files: vec![],
            last_sync_time: None,
            branch_selection: Some(branch_selection),
        });
    }

    // 先 fetch 远端状态并预检删除风险。远端删除本地 Markdown 不一定会形成 Git 冲突，
    // 但会导致本地笔记与 cache 被静默删除，因此必须交给用户确认。
    let fetch_output = repository.fetch_origin(&branch);
    if let Ok(output) = &fetch_output {
        if output.status.success() {
            let remote_ref = format!("origin/{}", branch);
            let removed_default_untracked =
                prepare_auto_generated_untracked_files_for_pull(workspace_root, &remote_ref)?;
            if !removed_default_untracked.is_empty() {
                info!(
                    "🧹 [Git] 已为 pull 清理 {} 个本地默认元文件",
                    removed_default_untracked.len()
                );
            }

            let remote_deleted_files =
                get_remote_deleted_local_markdown_files(repository, &branch)?;
            if !remote_deleted_files.is_empty() {
                warn!(
                    "⚠️ [Git] 远端将删除本地 Markdown 文件，等待用户确认: {:?}",
                    remote_deleted_files
                );
                return Ok(PullResult {
                    success: false,
                    files_updated: 0,
                    has_conflicts: true,
                    conflict_files: remote_deleted_files,
                    message: "远端缺少部分本地文件，请确认保留本地还是使用远端删除结果".to_string(),
                    pre_pull_head: None,
                    untracked_files: vec![],
                    last_sync_time: None,
                    branch_selection: None,
                });
            }
        }
    }

    // 执行 git pull，先 fetch 再 merge/rebase
    // 使用 --no-rebase 避免 rebase 问题
    let output = repository.pull_origin(&branch)?;

    let stdout = get_git_stdout(&output);
    let stderr = get_git_stderr(&output);

    if !output.status.success() {
        // 检查是否是本地有未提交的更改会被覆盖
        if stderr.contains("Your local changes to the following files would be overwritten")
            || stderr.contains("Please commit your changes or stash them before you merge")
        {
            // 从错误信息中提取文件名
            let conflict_files = extract_files_from_error(&stderr);

            if !conflict_files.is_empty() {
                warn!("⚠️ [Git] 本地有未提交的更改会被覆盖: {:?}", conflict_files);
                return Ok(PullResult {
                    success: false,
                    files_updated: 0,
                    has_conflicts: true,
                    conflict_files,
                    message: "本地有未提交的更改会被覆盖，请先处理这些文件".to_string(),
                    pre_pull_head: None,
                    untracked_files: vec![],
                    last_sync_time: None,
                    branch_selection: None,
                });
            }
        }

        // 检查是否是未跟踪文件会被覆盖
        // 如：The following untracked working tree files would be overwritten by merge
        if stderr.contains("untracked working tree files would be overwritten")
            || stderr.contains("The following untracked working tree files")
        {
            let untracked_files = extract_untracked_files_from_error(&stderr);

            if !untracked_files.is_empty() {
                warn!("⚠️ [Git] 未跟踪文件会被远程覆盖: {:?}", untracked_files);
                return Ok(PullResult {
                    success: false,
                    files_updated: 0,
                    has_conflicts: true,
                    conflict_files: vec![],
                    message: "存在未跟踪的文件会被远程覆盖，请先处理这些文件".to_string(),
                    pre_pull_head: None,
                    untracked_files,
                    last_sync_time: None,
                    branch_selection: None,
                });
            }
        }

        // 检查是否是冲突
        if stderr.contains("CONFLICT") || stdout.contains("CONFLICT") {
            let conflict_files = detect_conflicts(workspace_root)?;
            warn!("⚠️ [Git] Pull 发生冲突，冲突文件: {:?}", conflict_files);
            match crate::sync_data::resolve_sync_protocol_conflicts(workspace_root, &conflict_files)
            {
                Ok(true) => {
                    let changes =
                        get_changed_files_with_status(workspace_root, pre_pull_head.as_deref())?;
                    let last_sync_time =
                        chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
                    return Ok(PullResult {
                        success: true,
                        files_updated: changes.total_count(),
                        has_conflicts: false,
                        conflict_files: vec![],
                        message: "同步配置冲突已按字段自动合并".to_string(),
                        pre_pull_head,
                        untracked_files: vec![],
                        last_sync_time: Some(last_sync_time),
                        branch_selection: None,
                    });
                }
                Ok(false) => {}
                Err(error) => {
                    warn!("⚠️ [Git] 同步配置冲突自动合并失败: {}", error);
                }
            }
            return Ok(PullResult {
                success: false,
                files_updated: 0,
                has_conflicts: true,
                conflict_files,
                message: "Pull 发生冲突，请解决冲突后重试".to_string(),
                pre_pull_head,
                untracked_files: vec![],
                last_sync_time: None,
                branch_selection: None,
            });
        }

        // 检查是否是未解决的冲突（unmerged files）
        if stderr.contains("unmerged files") || stderr.contains("unresolved conflict") {
            let conflict_files = detect_conflicts(workspace_root)?;
            warn!("⚠️ [Git] 存在未解决的冲突: {:?}", conflict_files);
            return Ok(PullResult {
                success: false,
                files_updated: 0,
                has_conflicts: true,
                conflict_files,
                message: "存在未解决的冲突，请先解决冲突".to_string(),
                pre_pull_head: None,
                untracked_files: vec![],
                last_sync_time: None,
                branch_selection: None,
            });
        }

        // 检查是否是远程分支不存在
        if stderr.contains("couldn't find remote ref") || stderr.contains("does not exist") {
            if let Ok(remote_branch) = get_remote_default_branch(workspace_root) {
                if remote_branch != branch {
                    warn!(
                        "⚠️ [Git] 当前分支 {} 在远程不存在，main 主分支为 {}，停止自动覆盖本地",
                        branch, remote_branch
                    );
                    return Ok(PullResult {
                        success: false,
                        files_updated: 0,
                        has_conflicts: true,
                        conflict_files: vec![],
                        message: format!(
                            "当前分支 {} 在远程不存在，main 主分支为 {}。请确认保留本地或切换/拉取远程分支。",
                            branch, remote_branch
                        ),
                        pre_pull_head: None,
                        untracked_files: vec![],
                        last_sync_time: None,
                        branch_selection: None,
                    });
                }
            }
            info!("ℹ️ [Git] 远程分支不存在，可能是首次推送前");
            return Ok(PullResult {
                success: true,
                files_updated: 0,
                has_conflicts: false,
                conflict_files: vec![],
                message: "远程分支尚不存在，请先推送".to_string(),
                pre_pull_head: None,
                untracked_files: vec![],
                last_sync_time: None,
                branch_selection: None,
            });
        }

        // 检查是否是仓库不存在
        let stderr_lower = stderr.to_lowercase();
        if stderr_lower.contains("repository not found")
            || stderr_lower.contains("remote repository not found")
            || stderr_lower.contains("could not read remote")
            || (stderr_lower.contains("not found") && stderr_lower.contains("remote"))
        {
            info!("⚠️ [Git] 远程仓库不存在");
            return Ok(PullResult {
                success: false,
                files_updated: 0,
                has_conflicts: false,
                conflict_files: vec![],
                message: "remote_not_found".to_string(),
                pre_pull_head: None,
                untracked_files: vec![],
                last_sync_time: None,
                branch_selection: None,
            });
        }

        error!("❌ [Git] Pull 失败: {}", stderr);
        return Err(format!("git pull 失败: {}", stderr));
    }

    // 解析更新的文件数量
    let mut files_updated = parse_pull_output(&stdout);

    // 某些 Git 版本/首次恢复仓库时不会在 stdout 输出可解析的
    // "N files changed" 汇总。此时基于实际 diff（首次拉取则基于 HEAD 文件清单）
    // 兜底，确保后续 cache 与快速搜索索引不会被错误地跳过。
    if files_updated == 0 {
        match get_changed_files_with_status(workspace_root, pre_pull_head.as_deref()) {
            Ok(changes) => {
                files_updated = changes.total_count();
                if files_updated > 0 {
                    info!(
                        "ℹ️ [Git] Pull 输出未提供文件数，已从实际变更中识别出 {} 个受管文件",
                        files_updated
                    );
                }
            }
            Err(e) => warn!("⚠️ [Git] 无法从实际变更补充 Pull 文件数: {}", e),
        }
    }

    // 只有当有文件更新时才打印日志
    if files_updated > 0 {
        info!("✅ [Git] Pull 成功，更新了 {} 个文件", files_updated);
    }

    // 获取当前时间作为最后同步时间
    let last_sync_time = chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string();

    Ok(PullResult {
        success: true,
        files_updated,
        has_conflicts: false,
        conflict_files: vec![],
        message: if files_updated > 0 {
            format!("已从远程同步 {} 个文件", files_updated)
        } else {
            "已是最新版本".to_string()
        },
        pre_pull_head,
        untracked_files: vec![],
        last_sync_time: Some(last_sync_time),
        branch_selection: None,
    })
}

async fn git_push_impl(
    repository: &GitRepository<'_>,
    message: &str,
) -> Result<PushResult, String> {
    let workspace_root = repository.workspace_root();
    let _git_operation_guard = GIT_OPERATION_LOCK
        .lock()
        .map_err(|e| format!("获取 Git 操作锁失败: {}", e))?;
    info!("🔄 [Git] 开始 push 操作");

    // 1. 只暂存可跨设备同步的数据。禁止应用通过 `git add .` 将本机索引、
    // 完整 app.json、数据库、缓存或凭证带入远端。
    let staged_files = crate::sync_data::stage_allowed_sync_changes(workspace_root)?;
    if staged_files.is_empty() && !git_has_head(workspace_root) {
        info!("ℹ️ [Git] 没有变更需要提交");
        return Ok(PushResult {
            success: true,
            files_pushed: 0,
            commit_hash: String::new(),
            message: "没有变更需要提交".to_string(),
        });
    }

    // 2. 仅在存在允许范围内的暂存变更时创建提交。没有工作区变更时仍继续
    // push，确保上一次网络失败后已经创建的本地提交能够再次推送。
    let mut files_pushed = staged_files.len();
    if !staged_files.is_empty() {
        let commit_output = repository.commit(message)?;

        if !commit_output.status.success() {
            let error = String::from_utf8_lossy(&commit_output.stderr);
            if !error.contains("nothing to commit") {
                error!("❌ [Git] Commit 失败: {}", error);
                return Err(format!("git commit 失败: {}", error));
            }
            files_pushed = 0;
        } else {
            let commit_stdout = get_git_stdout(&commit_output);
            let parsed_files = parse_commit_output(&commit_stdout);
            if parsed_files > 0 {
                files_pushed = parsed_files;
            }
        }
    }

    // 3. git push
    // 获取当前分支名
    let branch = repository.current_branch_or_main()?;

    // 尝试普通 push
    let push_output = repository.push()?;

    let push_stderr = get_git_stderr(&push_output);

    // 如果失败且提示需要设置上游分支，则使用 --set-upstream
    if !is_git_success(&push_output) && push_stderr.contains("--set-upstream") {
        info!("ℹ️ [Git] 首次推送，设置上游分支");
        let push_upstream_output = repository.push_set_upstream(&branch)?;

        if !is_git_success(&push_upstream_output) {
            let error = get_git_stderr(&push_upstream_output);
            error!("❌ [Git] Push 失败: {}", error);
            return Err(format!("git push 失败: {}", error));
        }
    } else if !is_git_success(&push_output) {
        // 检查是否是仓库不存在
        let push_stderr_lower = push_stderr.to_lowercase();
        if push_stderr_lower.contains("repository not found")
            || push_stderr_lower.contains("remote repository not found")
            || push_stderr_lower.contains("could not read remote")
            || (push_stderr_lower.contains("not found") && push_stderr_lower.contains("remote"))
        {
            info!("⚠️ [Git] 远程仓库不存在");
            return Err("remote_not_found".to_string());
        }

        error!("❌ [Git] Push 失败: {}", push_stderr);
        return Err(format!("git push 失败: {}", push_stderr));
    }

    info!("✅ [Git] Push 成功，推送了 {} 个文件", files_pushed);

    Ok(PushResult {
        success: true,
        files_pushed,
        commit_hash: String::new(),
        message: if files_pushed > 0 {
            format!("Pushed {} files to remote", files_pushed)
        } else {
            "已推送现有本地提交，工作区没有新的可同步数据".to_string()
        },
    })
}

pub(crate) fn push_current_branch(workspace_root: &Path) -> Result<(), String> {
    let _git_operation_guard = GIT_OPERATION_LOCK
        .lock()
        .map_err(|e| format!("获取 Git 操作锁失败: {}", e))?;
    let repository = GitRepository::new(workspace_root);
    let branch = repository.current_branch()?;
    let push_output = repository.push_origin_branch(&branch)?;

    if !push_output.status.success() {
        return Err(format!("重试 Push 失败: {}", get_git_stderr(&push_output)));
    }

    Ok(())
}

/// 从 Git 错误信息中提取文件名
/// 用于处理 "Your local changes to the following files would be overwritten" 错误
fn extract_files_from_error(error_msg: &str) -> Vec<String> {
    let mut files = Vec::new();
    let mut in_file_list = false;

    for line in error_msg.lines() {
        let trimmed = line.trim();

        // 检测文件列表开始
        if trimmed.contains("Your local changes to the following files would be overwritten") {
            in_file_list = true;
            continue;
        }

        // 检测文件列表结束
        if in_file_list
            && (trimmed.starts_with("Please ")
                || trimmed.starts_with("Aborting")
                || trimmed.is_empty())
        {
            if !trimmed.is_empty() {
                break;
            }
            continue;
        }

        // 提取文件名（通常以 tab 开头）
        if in_file_list && !trimmed.is_empty() {
            // 移除前导的 tab 或空格，并解码可能存在的 Git 转义路径
            let file_path = trimmed.trim_start();
            if !file_path.is_empty()
                && !file_path.starts_with("Please")
                && !file_path.starts_with("Aborting")
            {
                files.push(decode_git_quoted_path(file_path));
            }
        }
    }

    info!("📋 [Git] 从错误信息中提取到 {} 个文件", files.len());
    files
}

/// 从 Git 错误信息中提取未跟踪文件名
/// 用于处理 "The following untracked working tree files would be overwritten by merge" 错误
fn extract_untracked_files_from_error(error_msg: &str) -> Vec<String> {
    let mut files = Vec::new();
    let mut in_file_list = false;

    for line in error_msg.lines() {
        let trimmed = line.trim();

        // 检测文件列表开始
        if trimmed.contains("untracked working tree files would be overwritten") {
            in_file_list = true;
            continue;
        }

        // 检测文件列表结束
        if in_file_list
            && (trimmed.starts_with("Please ")
                || trimmed.starts_with("Aborting")
                || trimmed.is_empty())
        {
            if !trimmed.is_empty() {
                break;
            }
            continue;
        }

        // 提取文件名（通常以 tab 或空格开头）
        if in_file_list && !trimmed.is_empty() {
            let file_path = trimmed.trim_start();
            if !file_path.is_empty()
                && !file_path.starts_with("Please")
                && !file_path.starts_with("Aborting")
            {
                files.push(decode_git_quoted_path(file_path));
            }
        }
    }

    info!("📋 [Git] 从错误信息中提取到 {} 个未跟踪文件", files.len());
    files
}

/// 检测冲突文件
pub(crate) fn detect_conflicts(workspace_root: &Path) -> Result<Vec<String>, String> {
    let output = GitRepository::new(workspace_root).conflict_paths()?;

    if !output.status.success() {
        return Ok(vec![]);
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    let conflicts: Vec<String> = stdout
        .lines()
        .map(|line| decode_git_quoted_path(line.trim()))
        .filter(|line| !line.is_empty())
        .collect();

    Ok(conflicts)
}

/// 获取远程 origin 的默认分支名。业务上只认可 main；远端未声明时也回退 main。
pub(crate) fn get_remote_default_branch(workspace_root: &Path) -> Result<String, String> {
    let repository = GitRepository::new(workspace_root);
    let out = repository.output(
        &["ls-remote", "--symref", "origin", "HEAD"],
        "获取远程默认分支失败",
    )?;
    if !out.status.success() {
        let err = get_git_stderr(&out);
        return Err(err);
    }
    let s = String::from_utf8_lossy(&out.stdout);
    // 格式: "ref: refs/heads/main	HEAD" 或 "ref: refs/heads/master	HEAD"
    for line in s.lines() {
        let line = line.trim();
        if line.starts_with("ref: refs/heads/") {
            if let Some(rest) = line.strip_prefix("ref: refs/heads/") {
                if let Some(branch) = rest.split_whitespace().next() {
                    return Ok(branch.to_string());
                }
            }
        }
    }
    // 回退：只认可 main
    let main_out = repository.output(
        &["ls-remote", "origin", "refs/heads/main"],
        "获取远程 main 分支失败",
    );
    if main_out
        .as_ref()
        .map(|o| o.status.success())
        .unwrap_or(false)
    {
        return Ok("main".to_string());
    }
    Ok(MAIN_BRANCH.to_string())
}

/// 获取当前分支名
pub(crate) fn get_current_branch(workspace_root: &Path) -> Result<String, String> {
    GitRepository::new(workspace_root).current_branch_or_main()
}

pub(crate) fn switch_git_branch(workspace_root: &Path, branch: &str) -> Result<(), String> {
    let branch = normalize_branch_name(branch);
    if branch.is_empty() {
        return Err("分支名称不能为空".to_string());
    }

    let local_branches = list_local_branches(workspace_root)?;
    let args: Vec<String> = if local_branches.iter().any(|item| item == &branch) {
        vec!["switch".to_string(), branch.clone()]
    } else {
        vec![
            "switch".to_string(),
            "-c".to_string(),
            branch.clone(),
            "--track".to_string(),
            format!("origin/{}", branch),
        ]
    };

    let repository = GitRepository::new(workspace_root);
    let arg_refs = args.iter().map(String::as_str).collect::<Vec<_>>();
    let output = repository.switch_branch(&arg_refs)?;

    if output.status.success() {
        clear_git_status_cache();
        info!("✅ [Git] 已切换到分支 {}", branch);
        Ok(())
    } else {
        Err(format!("切换分支失败: {}", get_git_stderr(&output)))
    }
}

/// 解析 pull 输出，统计更新的文件数量
fn parse_pull_output(output: &str) -> usize {
    parse_git_file_count_output(output)
}

/// 解析 commit 输出，统计提交的文件数量
fn parse_commit_output(output: &str) -> usize {
    parse_git_file_count_output(output)
}

#[cfg(test)]
mod tests {
    use super::{
        extract_files_from_error, extract_untracked_files_from_error, parse_deleted_paths,
        parse_name_status,
    };

    #[test]
    fn parses_nul_separated_paths_without_losing_spaces_or_renames() {
        let output = b"M\0notes/with space.md\0R100\0notes/old name.md\0notes/new name.md\0";

        assert_eq!(
            parse_name_status(output),
            vec![
                ('M', "notes/with space.md".to_string()),
                ('D', "notes/old name.md".to_string()),
                ('A', "notes/new name.md".to_string()),
            ]
        );
    }

    #[test]
    fn remote_deletion_preflight_ignores_renames() {
        let output = b"D\0notes/deleted file.md\0R100\0notes/old.md\0notes/new.md\0";

        assert_eq!(
            parse_deleted_paths(output),
            vec!["notes/deleted file.md".to_string()]
        );
    }

    #[test]
    fn extracts_local_changes_from_pull_error() {
        let error = "error: Your local changes to the following files would be overwritten by merge:\n\tnotes/one.md\n\tnotes/two words.md\nPlease commit your changes or stash them before you merge.";

        assert_eq!(
            extract_files_from_error(error),
            vec!["notes/one.md", "notes/two words.md"]
        );
    }

    #[test]
    fn extracts_untracked_files_from_pull_error() {
        let error = "error: The following untracked working tree files would be overwritten by merge:\n\tnotes/new file.md\nAborting";

        assert_eq!(
            extract_untracked_files_from_error(error),
            vec!["notes/new file.md"]
        );
    }
}
