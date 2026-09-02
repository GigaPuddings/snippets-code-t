// App shell commands shared by the frontend and plugin-facing views.

use tauri::AppHandle;

// 前端创建 config 窗口
#[tauri::command]
pub async fn hotkey_config_command() -> Result<(), String> {
    crate::window::hotkey_config();
    Ok(())
}

// 前端创建 update 窗口
#[tauri::command]
pub async fn hotkey_update_command() -> Result<(), String> {
    crate::window::create_update_window();
    Ok(())
}

// 获取网站 favicon
#[tauri::command]
pub async fn fetch_favicon(app_handle: AppHandle, url: String) -> Result<String, String> {
    if !crate::app_config::is_plugin_enabled(&app_handle, "local-launcher")
        && !crate::app_config::is_plugin_enabled(&app_handle, "search-engines")
    {
        return Err("本地图标相关插件未启用".to_string());
    }

    Ok(crate::icon::fetch_favicon_async(&url)
        .await
        .unwrap_or_default())
}

// 使用指定源获取网站 favicon
#[tauri::command]
pub async fn fetch_favicon_with_source(
    app_handle: AppHandle,
    url: String,
    source: String,
) -> Result<String, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "local-launcher")?;
    let icon_source = crate::icon::IconSource::from_str(&source);

    Ok(crate::icon::fetch_favicon_with_source(&url, icon_source)
        .await
        .unwrap_or_default())
}
