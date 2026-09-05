//! Plugin state/cache storage and explicit user-data removal.
use super::persistence::AppConfigManager;
use super::plugin_manifest::{validate_plugin_data_key, validate_plugin_package_id};
use std::fs;
use std::path::PathBuf;
use std::sync::{Arc, RwLock};
use tauri::{command, AppHandle, Manager};

const PLUGIN_CACHE_ROOT_DIR_NAME: &str = "plugins";

fn clear_workspace_plugin_config(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    if plugin_id != "attachments" && plugin_id != "git-sync" {
        return Ok(());
    }

    let update_manager = |manager: &mut crate::markdown::WorkspaceManager| -> Result<(), String> {
        match plugin_id {
            "attachments" => {
                manager.update_attachment_settings(crate::markdown::AttachmentSettings::default());
            }
            "git-sync" => {
                manager.set_sync_enabled(false);
            }
            _ => {}
        }

        manager.save()
    };

    if let Some(workspace_state) =
        app_handle.try_state::<Arc<RwLock<crate::markdown::WorkspaceManager>>>()
    {
        let mut manager = workspace_state
            .write()
            .map_err(|e| format!("获取工作区配置锁失败: {}", e))?;
        return update_manager(&mut manager);
    }

    let Some(workspace_root) = crate::json_config::get_workspace_root(app_handle)? else {
        return Ok(());
    };
    let config_dir = workspace_root.join(".snippets-code");
    if !config_dir.exists() {
        fs::create_dir_all(&config_dir).map_err(|e| format!("创建工作区配置目录失败: {}", e))?;
    }
    let mut manager = crate::markdown::WorkspaceManager::new(config_dir)?;
    update_manager(&mut manager)
}

fn clear_database_plugin_config(plugin_id: &str) -> Result<(), String> {
    if plugin_id == "git-sync" {
        let conn = crate::db::DbConnectionManager::get_core().map_err(|e| e.to_string())?;
        conn.execute("DELETE FROM user_settings WHERE id = 1", [])
            .map_err(|e| e.to_string())?;
    }

    if matches!(
        plugin_id,
        "local-launcher" | "desktop-files" | "search-engines" | "todo"
    ) {
        crate::db::clear_plugin_storage(plugin_id).map_err(|e| e.to_string())?;
    }

    Ok(())
}

fn clear_app_plugin_config(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.clear_plugin_owned_config(plugin_id);
        manager.save()?;
        return Ok(());
    }

    if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(app_handle) {
        let mut manager = AppConfigManager::new(&workspace_root)?;
        manager.clear_plugin_owned_config(plugin_id);
        manager.save()?;
    }

    Ok(())
}

pub(super) fn clear_plugin_owned_data(
    app_handle: &AppHandle,
    plugin_id: &str,
) -> Result<(), String> {
    clear_app_plugin_config(app_handle, plugin_id)?;
    clear_workspace_plugin_config(app_handle, plugin_id)?;
    clear_database_plugin_config(plugin_id)?;
    clear_local_plugin_state(app_handle, plugin_id)?;
    clear_local_plugin_cache(app_handle, plugin_id)?;
    Ok(())
}

fn local_plugin_state_dir(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    validate_plugin_package_id(plugin_id)?;
    Ok(crate::json_config::get_data_dir(app_handle)
        .join("state")
        .join("plugins")
        .join(plugin_id))
}

fn local_plugin_cache_dir(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    validate_plugin_package_id(plugin_id)?;
    Ok(app_handle
        .path()
        .app_cache_dir()
        .map_err(|error| format!("获取插件缓存目录失败: {}", error))?
        .join(PLUGIN_CACHE_ROOT_DIR_NAME)
        .join(plugin_id))
}

pub fn ensure_plugin_cache_dir(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    let cache_dir = local_plugin_cache_dir(app_handle, plugin_id)?;
    fs::create_dir_all(&cache_dir)
        .map_err(|error| format!("创建插件缓存目录失败: {} ({})", cache_dir.display(), error))?;
    Ok(cache_dir)
}

fn local_plugin_data_path(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    let data_path = local_plugin_state_dir(app_handle, plugin_id)?.join("data.json");

    crate::json_config::recover_atomic_file(&data_path)?;
    Ok(data_path)
}

fn clear_local_plugin_state(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    let state_dir = local_plugin_state_dir(app_handle, plugin_id)?;
    if state_dir.exists() {
        fs::remove_dir_all(&state_dir).map_err(|error| {
            format!("删除插件状态目录失败: {} ({})", state_dir.display(), error)
        })?;
    }

    if plugin_id == "local-ai" {
        let legacy_config = crate::json_config::get_data_dir(app_handle)
            .join(".snippets-code")
            .join("local-ai.json");
        if legacy_config.is_file() {
            fs::remove_file(&legacy_config).map_err(|error| {
                format!(
                    "删除本地 AI 旧配置失败: {} ({})",
                    legacy_config.display(),
                    error
                )
            })?;
        }
    }

    Ok(())
}

fn clear_local_plugin_cache(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    let cache_dir = local_plugin_cache_dir(app_handle, plugin_id)?;
    if cache_dir.exists() {
        fs::remove_dir_all(&cache_dir).map_err(|error| {
            format!("删除插件缓存目录失败: {} ({})", cache_dir.display(), error)
        })?;
    }

    Ok(())
}

fn read_local_plugin_data(
    app_handle: &AppHandle,
    plugin_id: &str,
) -> Result<serde_json::Map<String, serde_json::Value>, String> {
    let data_path = local_plugin_data_path(app_handle, plugin_id)?;
    if !data_path.exists() {
        return Ok(serde_json::Map::new());
    }

    let content = fs::read_to_string(&data_path)
        .map_err(|e| format!("读取插件数据失败: {} ({})", data_path.display(), e))?;
    serde_json::from_str::<serde_json::Map<String, serde_json::Value>>(&content)
        .map_err(|e| format!("解析插件数据失败: {} ({})", data_path.display(), e))
}

fn write_local_plugin_data(
    app_handle: &AppHandle,
    plugin_id: &str,
    data: &serde_json::Map<String, serde_json::Value>,
) -> Result<(), String> {
    let data_path = local_plugin_data_path(app_handle, plugin_id)?;
    if let Some(parent) = data_path.parent() {
        fs::create_dir_all(parent)
            .map_err(|e| format!("创建插件数据目录失败: {} ({})", parent.display(), e))?;
    }

    let content =
        serde_json::to_string_pretty(data).map_err(|e| format!("序列化插件数据失败: {}", e))?;
    crate::json_config::write_text_atomic(&data_path, &content)
        .map_err(|e| format!("写入插件数据失败: {} ({})", data_path.display(), e))
}

#[command]
pub fn get_local_plugin_data(
    app_handle: AppHandle,
    plugin_id: String,
    key: String,
) -> Result<Option<serde_json::Value>, String> {
    validate_plugin_data_key(&key)?;
    let data = read_local_plugin_data(&app_handle, &plugin_id)?;
    Ok(data.get(&key).cloned())
}

#[command]
pub fn set_local_plugin_data(
    app_handle: AppHandle,
    plugin_id: String,
    key: String,
    value: serde_json::Value,
) -> Result<(), String> {
    validate_plugin_data_key(&key)?;
    let mut data = read_local_plugin_data(&app_handle, &plugin_id)?;
    data.insert(key, value);
    write_local_plugin_data(&app_handle, &plugin_id, &data)
}

#[command]
pub fn delete_local_plugin_data(
    app_handle: AppHandle,
    plugin_id: String,
    key: String,
) -> Result<(), String> {
    validate_plugin_data_key(&key)?;
    let mut data = read_local_plugin_data(&app_handle, &plugin_id)?;
    data.remove(&key);
    write_local_plugin_data(&app_handle, &plugin_id, &data)
}
