use std::sync::{LazyLock, Mutex};

use log::debug;

use super::types::GitStatus;

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
