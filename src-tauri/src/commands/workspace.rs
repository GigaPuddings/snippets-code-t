// 工作区相关的 Tauri 命令

use crate::json_config::{
    ensure_workspace_not_app_data, get_workspace_root, set_workspace_root, validate_workspace,
};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, RwLock};
use tauri::{Emitter, Manager};

pub(crate) fn allow_workspace_assets<R: tauri::Runtime>(
    app_handle: &tauri::AppHandle<R>,
    workspace_root: &Path,
) -> Result<(), String> {
    let root = workspace_root
        .canonicalize()
        .map_err(|e| format!("解析工作区资源目录失败: {e}"))?;
    if !root.is_dir() {
        return Err("工作区资源路径必须是目录".into());
    }
    // Extend only the asset protocol, not filesystem command permissions. Tauri
    // keeps the configured deny patterns authoritative over this selected root.
    app_handle
        .asset_protocol_scope()
        .allow_directory(&root, true)
        .map_err(|e| format!("授权工作区资源访问失败: {e}"))?;
    log::info!(
        "[Workspace] 已允许工作区资源访问: {}",
        workspace_root.display()
    );
    Ok(())
}

#[cfg(test)]
mod asset_scope_tests {
    use super::*;

    #[test]
    fn grants_custom_workspace_assets_without_opening_siblings_or_secrets() {
        let root =
            std::env::temp_dir().join(format!("workspace-asset-scope-{}", uuid::Uuid::new_v4()));
        let workspace = root.join("自定义 [工作区]");
        let nested_git = workspace.join("nested/.git/config");
        let image = workspace.join("assets/附件原名/pixel.png");
        let sibling = root.join("other/pixel.png");
        for path in [&image, &sibling, &nested_git] {
            std::fs::create_dir_all(path.parent().unwrap()).unwrap();
            std::fs::write(path, b"fixture").unwrap();
        }
        let mut context = tauri::test::mock_context(tauri::test::noop_assets());
        let config: serde_json::Value =
            serde_json::from_str(include_str!("../../tauri.conf.json")).unwrap();
        let mut scope_config = config["app"]["security"]["assetProtocol"]["scope"].clone();
        // Model a workspace outside the pre-approved folders, irrespective of
        // which drive the runner's temporary directory happens to use.
        scope_config["allow"] = serde_json::json!([]);
        let portable_denies: Vec<_> = scope_config["deny"]
            .as_array()
            .unwrap()
            .iter()
            .filter(|entry| !entry.as_str().unwrap().starts_with('$'))
            .cloned()
            .collect();
        scope_config["deny"] = portable_denies.into();
        context.config_mut().app.security.asset_protocol.scope =
            serde_json::from_value(scope_config).unwrap();
        let app = tauri::test::mock_builder().build(context).unwrap();
        let scope = app.asset_protocol_scope();
        assert!(!scope.is_allowed(&image));
        allow_workspace_assets(app.handle(), &workspace).unwrap();
        assert!(
            scope.is_allowed(&image),
            "selected workspace image must be readable"
        );
        assert!(
            !scope.is_allowed(&sibling),
            "a sibling directory must not be granted"
        );
        assert!(
            !scope.is_allowed(&nested_git),
            "Git internals remain forbidden"
        );
        let second = root.join("second");
        std::fs::create_dir(&second).unwrap();
        let second_image = second.join("image.png");
        std::fs::write(&second_image, b"fixture").unwrap();
        allow_workspace_assets(app.handle(), &second).unwrap();
        assert!(scope.is_allowed(&second_image));
        assert!(!scope.is_allowed(&sibling));
        std::fs::remove_dir_all(root).unwrap();
    }
}

fn manage_or_replace<T: Send + Sync + 'static>(
    app_handle: &tauri::AppHandle,
    value: T,
) -> Result<(), String> {
    if let Some(state) = app_handle.try_state::<Arc<RwLock<T>>>() {
        let mut current = state
            .write()
            .map_err(|e| format!("更新运行时状态失败: {}", e))?;
        *current = value;
    } else {
        app_handle.manage(Arc::new(RwLock::new(value)));
    }

    Ok(())
}

fn initialize_workspace_runtime(
    app_handle: &tauri::AppHandle,
    workspace_root: PathBuf,
) -> Result<(), String> {
    // 先使旧监听代次失效，避免新 cache 已安装而旧批次仍在排队。
    if let Some(watcher_state) =
        app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>()
    {
        let previous = watcher_state
            .lock()
            .map_err(|e| format!("停止旧工作区监听器失败: {}", e))?
            .take();
        // 释放状态锁后再关闭 notify，停止控制不会等待处理线程 join。
        drop(previous);
    }

    let config_dir = workspace_root.join(".snippets-code");
    std::fs::create_dir_all(&config_dir).map_err(|e| format!("创建工作区配置目录失败: {}", e))?;

    let workspace_manager = crate::markdown::WorkspaceManager::new(config_dir.clone())?;
    workspace_manager.save()?;
    manage_or_replace(app_handle, workspace_manager)?;

    let mut cache_manager = crate::markdown::CacheManager::new(config_dir)?;
    cache_manager.cleanup_missing_files(&workspace_root);
    if cache_manager.get_all_files().is_empty() {
        cache_manager.rebuild_cache(&workspace_root)?;
    }
    cache_manager.save()?;
    manage_or_replace(app_handle, cache_manager.clone())?;

    if app_handle
        .try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>()
        .is_none()
    {
        app_handle.manage(Arc::new(Mutex::new(None::<crate::markdown::FileWatcher>)));
    }

    // 切换工作区后，旧索引不能继续服务搜索；新索引构建完成前保留空状态。
    if let Some(index_state) =
        app_handle.try_state::<Arc<RwLock<Option<crate::markdown::IndexManager>>>>()
    {
        if let Ok(mut index_lock) = index_state.write() {
            *index_lock = None;
        }
    }

    let app_handle_index = app_handle.clone();
    let workspace_root_index = workspace_root.clone();
    tauri::async_runtime::spawn(async move {
        if !is_current_workspace(&app_handle_index, &workspace_root_index) {
            log::debug!("跳过已过期工作区初始化: {}", workspace_root_index.display());
            return;
        }

        match crate::markdown::IndexManager::build_index(&workspace_root_index, &cache_manager)
            .await
        {
            Ok(index_manager) => {
                if is_current_workspace(&app_handle_index, &workspace_root_index) {
                    if let Some(index_state) = app_handle_index
                        .try_state::<Arc<RwLock<Option<crate::markdown::IndexManager>>>>()
                    {
                        if let Ok(mut index_lock) = index_state.write() {
                            if !is_current_workspace(&app_handle_index, &workspace_root_index) {
                                return;
                            }
                            *index_lock = Some(index_manager);
                        }
                    }
                } else {
                    log::debug!(
                        "丢弃已过期工作区搜索索引: {}",
                        workspace_root_index.display()
                    );
                }
            }
            Err(e) => {
                log::warn!("⚠️ [工作区] 搜索索引构建失败: {}", e);
            }
        }

        if !is_current_workspace(&app_handle_index, &workspace_root_index) {
            log::debug!("跳过已过期工作区监听器: {}", workspace_root_index.display());
            return;
        }

        match crate::markdown::FileWatcher::start(
            workspace_root_index.clone(),
            app_handle_index.clone(),
        ) {
            Ok(watcher) => {
                if is_current_workspace(&app_handle_index, &workspace_root_index) {
                    if let Some(watcher_state) = app_handle_index
                        .try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>()
                    {
                        if let Ok(mut watcher_lock) = watcher_state.lock() {
                            if !is_current_workspace(&app_handle_index, &workspace_root_index) {
                                return;
                            }
                            *watcher_lock = Some(watcher);
                        }
                    }
                } else {
                    // 不写入状态即会立刻 drop，关闭过期监听器。
                    log::debug!("丢弃已过期工作区监听器: {}", workspace_root_index.display());
                }
            }
            Err(e) => {
                log::warn!("⚠️ [工作区] 文件监听器启动失败: {}", e);
            }
        }
    });

    let _ = app_handle.emit(
        "workspace-root-changed",
        serde_json::json!({
            "workspaceRoot": workspace_root.to_string_lossy().to_string()
        }),
    );

    Ok(())
}

fn sync_workspace_root_to_app_config(
    app_handle: &tauri::AppHandle,
    workspace_root: &Path,
) -> Result<(), String> {
    if let Some(config_state) =
        app_handle.try_state::<Arc<RwLock<crate::app_config::AppConfigManager>>>()
    {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        let mut config = manager.get_config().clone();
        config.workspace_root = Some(workspace_root.to_string_lossy().to_string());
        manager.update_config(config);
        manager.save()?;
    }

    crate::uninstall::record_workspace_dir(workspace_root);

    Ok(())
}

/// 异步初始化完成前，工作区可能已经被用户再次切换。
/// 只允许当前配置对应的任务写入运行时状态，防止旧索引/监听器反向覆盖新工作区。
fn is_current_workspace(app_handle: &tauri::AppHandle, expected_root: &std::path::Path) -> bool {
    get_workspace_root(app_handle)
        .ok()
        .flatten()
        .is_some_and(|current_root| current_root == expected_root)
}

// 打开文件夹选择对话框
#[tauri::command]
pub async fn select_workspace(app_handle: tauri::AppHandle) -> Result<Option<String>, String> {
    use tauri_plugin_dialog::DialogExt;

    // 打开文件夹选择对话框
    let folder = app_handle
        .dialog()
        .file()
        .set_title("选择 Markdown 工作区文件夹")
        .blocking_pick_folder();

    if let Some(file_path) = folder {
        // 将 FilePath 转换为 PathBuf
        let path = PathBuf::from(file_path.as_path().unwrap());

        // 验证选择的目录
        validate_workspace(&path)?;
        ensure_workspace_not_app_data(&app_handle, &path)?;

        // 返回路径字符串
        Ok(Some(path.to_string_lossy().to_string()))
    } else {
        Ok(None)
    }
}

#[tauri::command]
pub fn get_default_workspace_dir(app_handle: tauri::AppHandle) -> Result<String, String> {
    let base_dir = app_handle
        .path()
        .document_dir()
        .or_else(|_| app_handle.path().home_dir())
        .map_err(|e| format!("获取默认工作区目录失败: {}", e))?;

    Ok(base_dir
        .join("Snippets Code Workspace")
        .to_string_lossy()
        .to_string())
}

#[tauri::command]
pub fn set_workspace_root_from_setup(
    app_handle: tauri::AppHandle,
    path: String,
    create: bool,
) -> Result<(), String> {
    let path_buf = PathBuf::from(path.trim());
    if path_buf.as_os_str().is_empty() {
        return Err("工作区路径不能为空".to_string());
    }

    if create && !path_buf.exists() {
        std::fs::create_dir_all(&path_buf)
            .map_err(|e| format!("创建工作区目录失败: {}。请检查是否有权限或选择其他位置", e))?;
    }

    validate_workspace(&path_buf)?;
    ensure_workspace_not_app_data(&app_handle, &path_buf)?;
    set_workspace_root(&app_handle, path_buf.clone())?;
    sync_workspace_root_to_app_config(&app_handle, &path_buf)?;
    initialize_workspace_runtime(&app_handle, path_buf)
}

// 检查目录权限
#[tauri::command]
pub fn validate_workspace_dir(app_handle: tauri::AppHandle, path: String) -> Result<(), String> {
    let path_buf = PathBuf::from(path);
    validate_workspace(&path_buf)?;
    ensure_workspace_not_app_data(&app_handle, &path_buf)
}

// 获取配置的 workspace_root
#[tauri::command]
pub fn get_workspace_root_path(app_handle: tauri::AppHandle) -> Result<Option<String>, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    Ok(workspace_root.map(|p| p.to_string_lossy().to_string()))
}

// 设置 workspace_root 配置
#[tauri::command]
pub fn set_workspace_root_path(app_handle: tauri::AppHandle, path: String) -> Result<(), String> {
    let path_buf = PathBuf::from(path.trim());
    if path_buf.as_os_str().is_empty() {
        return Err("工作区路径不能为空".to_string());
    }

    // 不能只相信前端的文件选择器；该命令同样可能被插件或恢复配置流程调用。
    validate_workspace(&path_buf)?;
    ensure_workspace_not_app_data(&app_handle, &path_buf)?;
    set_workspace_root(&app_handle, path_buf.clone())?;
    sync_workspace_root_to_app_config(&app_handle, &path_buf)?;
    initialize_workspace_runtime(&app_handle, path_buf)
}

// 提供更改工作区的功能
// 注意：实际的文件迁移需要在前端处理用户确认后执行
#[tauri::command]
pub fn change_workspace(
    app_handle: tauri::AppHandle,
    new_path: String,
    migrate_files: bool,
) -> Result<String, String> {
    let new_path_buf = PathBuf::from(&new_path);

    // 验证新目录
    validate_workspace(&new_path_buf)?;
    ensure_workspace_not_app_data(&app_handle, &new_path_buf)?;

    // 获取旧的工作区路径
    let old_path = get_workspace_root(&app_handle)?;

    if let (true, Some(old_path)) = (migrate_files, old_path.as_ref()) {
        // 返回需要迁移的信息，让前端处理
        Ok(format!(
            "需要迁移文件从 {} 到 {}",
            old_path.display(),
            new_path_buf.display()
        ))
    } else {
        // 直接设置新路径
        set_workspace_root(&app_handle, new_path_buf.clone())?;
        sync_workspace_root_to_app_config(&app_handle, &new_path_buf)?;
        initialize_workspace_runtime(&app_handle, new_path_buf)?;
        Ok("工作区已更改".to_string())
    }
}
