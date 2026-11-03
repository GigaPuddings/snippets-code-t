use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, RwLock as StdRwLock};

use log::{debug, error, info, warn};
use tauri::{AppHandle, Emitter, Manager};

use super::service::{ChangedFilesByStatus, GitSyncService};
use super::types::{ConflictPayload, PullResult, PushResult, RepoNotFoundPayload};
use super::{clear_git_status_cache, ensure_gitignore, get_system_git_config};

pub(crate) fn import_portable_sync_config(
    app_handle: &tauri::AppHandle,
    workspace_root: &Path,
) -> Result<bool, String> {
    match crate::sync_data::import_sync_bundle(app_handle, workspace_root) {
        Ok(report) if report.found_sync_bundle => {
            let applied_count = report.applied_preferences.len()
                + report.applied_hotkeys.len()
                + report.applied_vault_settings.len();
            if applied_count > 0 {
                info!(
                    "✅ [Git] 已应用同步配置: 偏好 {}, 快捷键 {}, 工作区设置 {}",
                    report.applied_preferences.len(),
                    report.applied_hotkeys.len(),
                    report.applied_vault_settings.len()
                );
            } else {
                debug!("ℹ️ [Git] 同步配置已校验，无需更新");
            }
            if !report.warnings.is_empty() {
                warn!(
                    "⚠️ [Git] 同步配置导入包含 {} 条警告: {}",
                    report.warnings.len(),
                    report.warnings.join("; ")
                );
            }
            Ok(true)
        }
        Ok(_) => {
            debug!("ℹ️ [Git] 工作区没有 sync.json，跳过可移植配置导入");
            Ok(false)
        }
        Err(error) => {
            warn!("⚠️ [Git] 同步配置导入失败: {}", error);
            let _ = app_handle.emit(
                "portable-config-import-failed",
                serde_json::json!({ "error": error }),
            );
            Err(error)
        }
    }
}

pub(super) fn apply_pulled_config(
    app_handle: &AppHandle,
    workspace_root: &Path,
) -> Result<(), String> {
    if !import_portable_sync_config(app_handle, workspace_root)? {
        // 已经与远端核对过，即使是旧仓库或空远端也可以建立本机配置投影。
        crate::sync_data::export_sync_bundle(app_handle, workspace_root)?;
    }
    Ok(())
}

/// Acquire the Git lock, then reject an expired workspace before any mutation.
pub(super) fn lock_current_workspace(
    app_handle: &AppHandle,
    workspace_root: &Path,
) -> Result<std::sync::MutexGuard<'static, ()>, String> {
    super::state::lock_git_operation(|| require_current_workspace(app_handle, workspace_root))
}

/// Must run inside GIT_OPERATION_LOCK, before touching Git or global settings.
pub(super) fn require_current_workspace(
    app_handle: &AppHandle,
    workspace_root: &Path,
) -> Result<(), String> {
    super::commands::require_git_sync_plugin(app_handle)?;
    if crate::json_config::get_workspace_root(app_handle)?.as_deref() != Some(workspace_root) {
        return Err("工作区已更改，已取消过期的 Git 操作".into());
    }
    let config = app_handle
        .try_state::<Arc<StdRwLock<crate::app_config::AppConfigManager>>>()
        .ok_or("AppConfigManager 未初始化")?;
    if !config
        .read()
        .map_err(|e| e.to_string())?
        .get_git_settings()
        .enabled
    {
        return Err("Git 同步未启用".into());
    }
    Ok(())
}

pub(super) fn pull_workspace(
    app_handle: &AppHandle,
    workspace_root: &Path,
) -> Result<PullResult, String> {
    pull_workspace_with_preflight(app_handle, workspace_root, || Ok(()))
}

pub(super) fn pull_workspace_with_preflight(
    app_handle: &AppHandle,
    workspace_root: &Path,
    preflight: impl FnOnce() -> Result<(), String>,
) -> Result<PullResult, String> {
    GitSyncService::new(workspace_root).pull_with_preflight(
        || {
            require_current_workspace(app_handle, workspace_root)?;
            preflight()
        },
        || {
            apply_pulled_config(app_handle, workspace_root)?;
            // A real successful pull (including zero updates) is the recovery
            // signal. Failed network pulls and branch choices never resume pushes.
            if let Some(state) =
                app_handle.try_state::<Arc<Mutex<Option<super::AutoSyncManager>>>>()
            {
                if let Some(manager) = state.lock().map_err(|e| e.to_string())?.as_ref() {
                    if manager.matches_workspace(workspace_root) {
                        manager.resume()?;
                    }
                }
            }
            Ok(())
        },
    )
}

pub(super) fn push_workspace(
    app_handle: &AppHandle,
    workspace_root: &Path,
    message: &str,
) -> Result<PushResult, String> {
    push_workspace_with_preflight(app_handle, workspace_root, message, || Ok(()))
}

pub(super) fn push_workspace_with_preflight(
    app_handle: &AppHandle,
    workspace_root: &Path,
    message: &str,
    preflight: impl FnOnce() -> Result<(), String>,
) -> Result<PushResult, String> {
    GitSyncService::new(workspace_root).push_with_preflight(
        message,
        || {
            require_current_workspace(app_handle, workspace_root)?;
            preflight()
        },
        || {
            ensure_gitignore(workspace_root)?;
            if !crate::sync_data::has_sync_baseline(
                workspace_root,
                &crate::json_config::get_data_dir(app_handle),
            )? {
                import_portable_sync_config(app_handle, workspace_root)?;
            }
            crate::sync_data::export_sync_bundle(app_handle, workspace_root)?;
            Ok(())
        },
    )
}

pub(super) fn schedule_workspace_index_rebuild(
    app: AppHandle,
    root: PathBuf,
    cache: crate::markdown::CacheManager,
) {
    tauri::async_runtime::spawn(async move {
        match crate::markdown::IndexManager::build_index(&root, &cache).await {
            Ok(index) => {
                let Ok(_guard) = lock_current_workspace(&app, &root) else {
                    return;
                };
                if let Some(state) =
                    app.try_state::<Arc<StdRwLock<Option<crate::markdown::IndexManager>>>>()
                {
                    if let Ok(mut current) = state.write() {
                        *current = Some(index);
                    }
                }
            }
            Err(error) => warn!("[Git] Pull 后重建搜索索引失败: {}", error),
        }
    });
}

pub(crate) fn apply_non_content_sync_changes(
    app_handle: &tauri::AppHandle,
    changes: &ChangedFilesByStatus,
) {
    if !changes.attachment_files.is_empty() {
        let _ = app_handle.emit(
            "sync-attachments-changed",
            serde_json::json!({
                "paths": changes.attachment_files,
                "count": changes.attachment_files.len()
            }),
        );
    }
}

pub(crate) async fn pull(
    app_handle: AppHandle,
    workspace_root: PathBuf,
) -> Result<PullResult, String> {
    if let Err(e) = app_handle.emit_to("config", "git-pull-start", ()) {
        warn!("⚠️ [Git] 发送 git-pull-start 事件失败: {}", e);
    }

    // 同时发送到 main 窗口（标题栏需要）
    if let Err(e) = app_handle.emit_to("main", "git-pull-start", ()) {
        warn!("⚠️ [Git] 发送 git-pull-start 到 main 失败: {}", e);
    }

    let result = pull_workspace(&app_handle, &workspace_root).inspect_err(|_| {
        let Ok(_guard) = super::GIT_OPERATION_LOCK.lock() else {
            return;
        };
        if require_current_workspace(&app_handle, &workspace_root).is_err() {
            return;
        }
        for window in ["main", "config"] {
            let _ = app_handle.emit_to(
                window,
                "git-sync-complete",
                serde_json::json!({
                    "success": false, "last_sync_time": null
                }),
            );
        }
    })?;

    let _guard = super::GIT_OPERATION_LOCK
        .lock()
        .map_err(|e| e.to_string())?;
    require_current_workspace(&app_handle, &workspace_root)?;

    // 如果检测到冲突（包括 untracked files），存入待处理队列
    if result.has_conflicts {
        if let Some(sync_state) =
            app_handle.try_state::<Arc<Mutex<Option<super::AutoSyncManager>>>>()
        {
            if let Ok(manager) = sync_state.lock() {
                if let Some(manager) = manager.as_ref() {
                    manager.pause()?;
                }
            }
        }
        let payload = ConflictPayload {
            conflict_files: result.conflict_files.clone(),
            untracked_files: result.untracked_files.clone(),
        };

        // 将冲突存入待处理队列
        if let Some(pending_conflicts) = app_handle.try_state::<Arc<Mutex<Vec<ConflictPayload>>>>()
        {
            if let Ok(mut queue) = pending_conflicts.lock() {
                queue.push(payload.clone());
                info!("📋 [Git] 冲突已存入待处理队列");
            }
        }

        // 尝试发送到 config 窗口（如果窗口已就绪）
        if let Err(_e) = app_handle.emit_to("config", "git-conflict-detected", payload) {
            info!("ℹ️ [Git] Config 窗口未就绪");
        }
    }

    // 检测仓库不存在
    if result.message == "remote_not_found" {
        let remote_url = get_system_git_config(Some(&workspace_root))
            .ok()
            .and_then(|config| config.remote_url)
            .unwrap_or_else(|| "未知".to_string());

        let payload = RepoNotFoundPayload {
            remote_url,
            operation: "pull".to_string(),
        };

        // 发送仓库不存在事件到 config 窗口
        if let Err(e) = app_handle.emit_to("config", "git-repo-not-found", payload.clone()) {
            error!("❌ [Git] 发送仓库不存在事件失败，存入待处理队列: {}", e);
            // 存入待处理队列
            if let Some(pending_queue) =
                app_handle.try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>()
            {
                if let Ok(mut queue) = pending_queue.lock() {
                    queue.push(payload);
                }
            }
        }
    }

    // 发送 git-sync-complete 事件
    let last_sync_time = result.last_sync_time.clone();
    if let Err(e) = app_handle.emit_to(
        "config",
        "git-sync-complete",
        serde_json::json!({
            "success": result.success,
            "last_sync_time": last_sync_time
        }),
    ) {
        warn!("⚠️ [Git] 发送 git-sync-complete 事件失败: {}", e);
    }
    // 同时发送到 main
    if let Err(e) = app_handle.emit_to(
        "main",
        "git-sync-complete",
        serde_json::json!({
            "success": result.success,
            "last_sync_time": last_sync_time
        }),
    ) {
        warn!("⚠️ [Git] 发送 git-sync-complete 到 main 失败: {}", e);
    }

    // 如果 Pull 成功且有文件更新，使用增量扫描更新 cache
    if result.success && result.files_updated > 0 {
        info!("🔍 [Git] Pull 完成，开始增量扫描变更文件...");

        let by_status =
            GitSyncService::new(&workspace_root).changes_since(result.pre_pull_head.as_deref())?;
        let changed_files = by_status.all();
        apply_non_content_sync_changes(&app_handle, &by_status);

        if changed_files.is_empty() {
            info!("ℹ️ [Git] 没有检测到 .md 文件变更，跳过扫描");
        } else {
            // 将变更文件添加到 FileWatcher 忽略列表
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

            // 增量更新 cache：新增/修改用 scan_files，删除用 remove_file
            if let Some(cache_state) =
                app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>()
            {
                match cache_state.write() {
                    Ok(mut cache) => {
                        let to_scan: Vec<String> = by_status
                            .created
                            .iter()
                            .chain(by_status.modified.iter())
                            .cloned()
                            .collect();
                        if !to_scan.is_empty() {
                            match cache.scan_files(&to_scan, &workspace_root) {
                                Ok(added_count) => {
                                    info!("✅ [Git] 增量扫描完成，添加 {} 个新文件", added_count);
                                }
                                Err(e) => {
                                    error!("❌ [Git] 增量扫描失败: {}，回退到全量扫描", e);
                                    if let Err(rebuild_err) = cache.rebuild_cache(&workspace_root) {
                                        error!("❌ [Git] 全量扫描也失败: {}", rebuild_err);
                                    }
                                }
                            }
                        }
                        for rel_path in &by_status.deleted {
                            let abs_path = workspace_root.join(rel_path);
                            if let Err(e) = cache.remove_file(&abs_path, &workspace_root) {
                                warn!("⚠️ [Git] 从 cache 删除文件失败 {}: {}", rel_path, e);
                            }
                        }
                        if let Err(e) = cache.save() {
                            error!("❌ [Git] 保存 cache 失败: {}", e);
                        }
                    }
                    Err(e) => error!("❌ [Git] 获取 cache 锁失败: {}", e),
                }
            }

            // 发送 files-changed-batch 到 config 窗口（任务 5：真正的增量更新）
            if let Some(config_window) = app_handle.get_webview_window("config") {
                let payload = serde_json::json!({
                    "created": by_status.created,
                    "modified": by_status.modified,
                    "deleted": by_status.deleted,
                });
                if let Err(e) = config_window.emit("files-changed-batch", payload) {
                    error!("❌ [Git] 发送 files-changed-batch 失败: {}", e);
                }
            }

            if let Err(e) = app_handle.emit_to("config", "git-pull-completed", result.files_updated)
            {
                error!("❌ [Git] 发送 git-pull-completed 失败: {}", e);
            }

            // 发送 git-sync-complete 事件
            let last_sync_time = result.last_sync_time.clone();
            if let Err(e) = app_handle.emit_to(
                "config",
                "git-sync-complete",
                serde_json::json!({
                    "success": result.success,
                    "last_sync_time": last_sync_time
                }),
            ) {
                warn!("⚠️ [Git] 发送 git-sync-complete 事件失败: {}", e);
            }
            // 同时发送到 main
            if let Err(e) = app_handle.emit_to(
                "main",
                "git-sync-complete",
                serde_json::json!({
                    "success": result.success,
                    "last_sync_time": last_sync_time
                }),
            ) {
                warn!("⚠️ [Git] 发送 git-sync-complete 到 main 失败: {}", e);
            }

            // Snapshot the cache under the workspace/Git lock; verify the root
            // again when publishing an asynchronously built index.
            let cache_snapshot = app_handle
                .try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>()
                .and_then(|state| state.read().ok().map(|cache| cache.clone()));
            if let Some(cache) = cache_snapshot {
                schedule_workspace_index_rebuild(app_handle.clone(), workspace_root.clone(), cache);
            }
        }
    }

    // 清除 Git 状态缓存（pull 成功后状态已变化）
    clear_git_status_cache();

    Ok(result)
}

pub(crate) async fn push(
    app_handle: AppHandle,
    workspace_root: PathBuf,
    message: Option<String>,
) -> Result<PushResult, String> {
    // 发送 push 开始事件到前端
    if let Err(e) = app_handle.emit_to("config", "git-push-start", ()) {
        warn!("⚠️ [Git] 发送 git-push-start 事件失败: {}", e);
    }

    let commit_message = message.unwrap_or_else(|| {
        let now = chrono::Local::now();
        format!("Auto sync: {}", now.format("%Y-%m-%d %H:%M:%S"))
    });

    let push_result = push_workspace(&app_handle, &workspace_root, &commit_message);
    let _guard = super::GIT_OPERATION_LOCK
        .lock()
        .map_err(|e| e.to_string())?;
    require_current_workspace(&app_handle, &workspace_root)?;

    // 发送同步完成事件
    let last_sync_time = chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
    let success = push_result.is_ok();

    if let Err(e) = app_handle.emit_to("config", "git-sync-complete", serde_json::json!({
        "success": success,
        "last_sync_time": if success { serde_json::Value::String(last_sync_time.clone()) } else { serde_json::Value::Null }
    })) {
        warn!("⚠️ [Git] 发送 git-sync-complete 事件失败: {}", e);
    }

    // 检测仓库不存在
    if let Err(ref e) = push_result {
        if e.contains("remote_not_found") {
            let remote_url = get_system_git_config(Some(&workspace_root))
                .ok()
                .and_then(|config| config.remote_url)
                .unwrap_or_else(|| "未知".to_string());

            let payload = RepoNotFoundPayload {
                remote_url,
                operation: "push".to_string(),
            };

            // 发送仓库不存在事件到 config 窗口
            if let Err(e) = app_handle.emit_to("config", "git-repo-not-found", payload.clone()) {
                error!("❌ [Git] 发送仓库不存在事件失败，存入待处理队列: {}", e);
                // 存入待处理队列
                if let Some(pending_queue) =
                    app_handle.try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>()
                {
                    if let Ok(mut queue) = pending_queue.lock() {
                        queue.push(payload);
                    }
                }
            }
        }
    }

    // 清除 Git 状态缓存（push 成功后状态已变化）
    clear_git_status_cache();

    push_result
}
