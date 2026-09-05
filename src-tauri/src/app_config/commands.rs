//! Tauri adapters for application configuration.
use super::model::{
    has_required_git_sync_settings, AppConfig, EditorSettings, GitSettings, PluginRuntimeState,
};
use super::persistence::AppConfigManager;
use log::info;
use std::sync::{Arc, RwLock};
use tauri::{command, AppHandle, Manager};

/// 获取应用配置
#[command]
pub fn get_app_config(app_handle: AppHandle) -> Result<AppConfig, String> {
    // 尝试从应用状态获取 AppConfigManager
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(manager.get_config().clone())
    } else {
        // 如果状态不存在，尝试从工作区加载
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(manager.get_config().clone())
    }
}

/// 更新应用配置
#[command]
pub fn update_app_config(app_handle: AppHandle, config: AppConfig) -> Result<(), String> {
    // 尝试从应用状态获取 AppConfigManager
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_config(config);
        manager.save()?;
        info!("✅ [AppConfig] 应用配置已更新");
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 获取快速搜索预览面板的显示状态。
#[command]
pub fn get_quick_search_preview_visible(app_handle: AppHandle) -> Result<bool, String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(manager.get_config().quick_search.preview_visible)
    } else {
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(manager.get_config().quick_search.preview_visible)
    }
}

/// 更新快速搜索预览面板的显示状态，并立即持久化到 app.json。
#[command]
pub fn set_quick_search_preview_visible(
    app_handle: AppHandle,
    visible: bool,
) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.set_quick_search_preview_visible(visible);
        manager.save()?;
        info!("✅ [AppConfig] 快速搜索预览面板状态已更新: {}", visible);
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 获取编辑器显示设置
#[command]
pub fn get_editor_settings(app_handle: AppHandle) -> Result<EditorSettings, String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(manager.get_editor_settings().clone())
    } else {
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(manager.get_editor_settings().clone())
    }
}

/// 更新编辑器显示设置
#[command]
pub fn update_editor_settings(
    app_handle: AppHandle,
    settings: EditorSettings,
) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_editor_settings(settings);
        manager.save()?;
        info!("✅ [AppConfig] 编辑器显示设置已更新");
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 获取 Git 设置
#[command]
pub fn get_git_settings_command(app_handle: AppHandle) -> Result<GitSettings, String> {
    let mask_token = |mut settings: GitSettings| {
        settings.remote_url = crate::git_common::remove_token_from_url(&settings.remote_url);
        settings.token.clear();
        settings
    };

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(mask_token(manager.get_git_settings().clone()))
    } else {
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(mask_token(manager.get_git_settings().clone()))
    }
}

/// 更新 Git 设置
#[command]
pub fn update_git_settings_command(
    app_handle: AppHandle,
    settings: GitSettings,
) -> Result<(), String> {
    let mut settings = settings;
    settings.remote_url = crate::git_common::remove_token_from_url(&settings.remote_url);
    settings.token.clear();

    if settings.enabled && !has_required_git_sync_settings(&settings) {
        return Err("启用 Git 同步前，请先在个人中心完成用户名、邮箱和远程仓库配置".to_string());
    }

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_git_settings(settings);
        manager.save()?;
        info!("✅ [AppConfig] Git 设置已更新");
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 更新主题设置
#[command]
pub fn update_theme_config(app_handle: AppHandle, theme: String) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_theme(theme);
        manager.save()?;
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 更新语言设置
#[command]
pub fn update_language_config(app_handle: AppHandle, language: String) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_language(language);
        manager.save()?;
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

#[command]
pub fn set_setup_index_preferences(
    app_handle: AppHandle,
    local_launcher: bool,
    desktop_files: bool,
    cache_icons: bool,
) -> Result<(), String> {
    let update_config = |manager: &mut AppConfigManager| -> Result<(), String> {
        let mut config = manager.get_config().clone();
        config.cache_icons = cache_icons;
        config
            .plugins
            .entry("local-launcher".to_string())
            .and_modify(|state| state.enabled = local_launcher)
            .or_insert(PluginRuntimeState {
                enabled: local_launcher,
            });
        config
            .plugins
            .entry("desktop-files".to_string())
            .and_modify(|state| state.enabled = desktop_files)
            .or_insert(PluginRuntimeState {
                enabled: desktop_files,
            });

        manager.update_config(config);
        manager.save()
    };

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        update_config(&mut manager)?;
    } else {
        let data_dir = crate::json_config::get_data_dir(&app_handle);
        let mut manager = AppConfigManager::new(&data_dir)?;
        update_config(&mut manager)?;
    }

    if let Some(reset_kind) = match (local_launcher, desktop_files) {
        // 本地启动器负责前台重建反馈；桌面文件按自身空缓存静默恢复，
        // 避免两个插件竞争消费同一个 all 标记并互相覆盖完成态。
        (true, true) => Some("launcher"),
        (true, false) => Some("launcher"),
        (false, true) => Some("desktopFiles"),
        (false, false) => None,
    } {
        crate::db::set_show_progress_on_restart_with_kind(&app_handle, reset_kind)?;
    } else {
        crate::db::clear_show_progress_on_restart(&app_handle)?;
    }

    info!(
        "✅ [Setup] index preferences saved local_launcher={} desktop_files={} cache_icons={}",
        local_launcher, desktop_files, cache_icons
    );

    Ok(())
}
