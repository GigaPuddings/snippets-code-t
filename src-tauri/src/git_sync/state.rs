use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};
use std::sync::{LazyLock, Mutex};

use log::debug;

use super::types::{GitStatus, PullResult};
use super::GitRepository;

// ============= Git 状态缓存 =============

/// Git 状态缓存条目
struct GitStatusCacheEntry {
    status: GitStatus,
    timestamp: std::time::Instant,
}

/// Git 状态缓存（短时缓存，减少频繁调用）
static GIT_STATUS_CACHE: LazyLock<Mutex<Option<GitStatusCacheEntry>>> =
    LazyLock::new(|| Mutex::new(None));

/// 串行化会修改 Git 工作区的操作，避免自动同步、手动同步和快速重启任务互相争抢 index.lock。
pub(crate) static GIT_OPERATION_LOCK: LazyLock<Mutex<()>> = LazyLock::new(|| Mutex::new(()));

pub(super) fn lock_git_operation(
    preflight: impl FnOnce() -> Result<(), String>,
) -> Result<std::sync::MutexGuard<'static, ()>, String> {
    let guard = GIT_OPERATION_LOCK
        .lock()
        .map_err(|e| format!("获取 Git 操作锁失败: {}", e))?;
    preflight()?;
    Ok(guard)
}

// Git 未进入 merge 状态时没有冲突索引，保留本次预检真正向用户报告的路径。
struct ReportedConflicts {
    branch: String,
    head: Option<String>,
    files: HashSet<String>,
}

static REPORTED_CONFLICTS: LazyLock<Mutex<HashMap<PathBuf, ReportedConflicts>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

pub(super) fn clear_pull_conflicts(root: &Path) -> Result<(), String> {
    REPORTED_CONFLICTS
        .lock()
        .map_err(|e| e.to_string())?
        .remove(&root.canonicalize().map_err(|e| e.to_string())?);
    Ok(())
}

pub(super) fn remember_conflicts<'a>(
    root: &Path,
    paths: impl Iterator<Item = &'a String>,
) -> Result<(), String> {
    let repository = GitRepository::new(root);
    let conflicts = ReportedConflicts {
        branch: repository.successful_stdout(&["branch", "--show-current"], "读取分支身份失败")?,
        head: repository.current_head(),
        files: paths.map(|path| path.replace('\\', "/")).collect(),
    };
    REPORTED_CONFLICTS
        .lock()
        .map_err(|e| e.to_string())?
        .insert(root.canonicalize().map_err(|e| e.to_string())?, conflicts);
    Ok(())
}

pub(super) fn record_pull_conflicts(root: &Path, result: &PullResult) -> Result<(), String> {
    if (result.conflict_files.is_empty() && result.untracked_files.is_empty())
        || root.join(".git/MERGE_HEAD").exists()
    {
        return clear_pull_conflicts(root);
    }
    remember_conflicts(
        root,
        result.conflict_files.iter().chain(&result.untracked_files),
    )
}

pub(super) fn record_checkout_conflicts(root: &Path, paths: &[String]) -> Result<(), String> {
    clear_pull_conflicts(root)?;
    let repository = GitRepository::new(root);
    let mut safe_paths = Vec::new();
    for path in paths {
        let normalized = path.replace('\\', "/");
        // 确认只授权 Git 本次报告的、同步白名单内的未跟踪普通文件。
        let Ok(full_path) = super::conflict::validate_conflict_path(root, &normalized) else {
            continue;
        };
        if !full_path.is_file() {
            continue;
        }
        let tracked = repository.successful_stdout(
            &["ls-files", "--", &format!(":(literal){}", normalized)],
            "检查切换分支冲突文件失败",
        )?;
        if tracked.is_empty() {
            safe_paths.push(normalized);
        }
    }
    if !safe_paths.is_empty() {
        remember_conflicts(root, safe_paths.iter())?;
    }
    Ok(())
}

pub(super) fn has_reported_conflict(
    repository: &GitRepository<'_>,
    path: &str,
) -> Result<bool, String> {
    let root = repository
        .workspace_root()
        .canonicalize()
        .map_err(|e| e.to_string())?;
    let conflicts = REPORTED_CONFLICTS.lock().map_err(|e| e.to_string())?;
    let Some(reported) = conflicts.get(&root) else {
        return Ok(false);
    };
    Ok(reported.files.contains(path)
        && reported.branch
            == repository.successful_stdout(&["branch", "--show-current"], "读取分支身份失败")?
        && reported.head == repository.current_head())
}

/// 缓存有效期（毫秒）
const GIT_STATUS_CACHE_TTL_MS: u64 = 2000;

/// 获取缓存的 Git 状态（如果有效）
pub(crate) fn get_cached_git_status() -> Option<GitStatus> {
    let cache = GIT_STATUS_CACHE.lock().ok()?;
    if let Some(ref entry) = *cache {
        let elapsed = entry.timestamp.elapsed().as_millis() as u64;
        if elapsed < GIT_STATUS_CACHE_TTL_MS {
            return Some(entry.status.clone());
        }
    }
    None
}

/// 更新 Git 状态缓存
pub(crate) fn update_git_status_cache(status: GitStatus) {
    if let Ok(mut cache) = GIT_STATUS_CACHE.lock() {
        *cache = Some(GitStatusCacheEntry {
            status,
            timestamp: std::time::Instant::now(),
        });
    }
}

/// 清除 Git 状态缓存（Git 操作成功后调用）
pub fn clear_git_status_cache() {
    if let Ok(mut cache) = GIT_STATUS_CACHE.lock() {
        *cache = None;
        debug!("🗑️ [Git] Git 状态缓存已清除");
    }
}
