use tauri_plugin_opener::OpenerExt;

#[tauri::command]
pub fn open_url(app_handle: tauri::AppHandle, url: String) -> Result<(), String> {
    if !(crate::app_config::is_plugin_enabled(&app_handle, "local-launcher")
        || crate::app_config::is_plugin_enabled(&app_handle, "search-engines"))
    {
        return Err("本地启动器和搜索引擎插件均未启用".to_string());
    }

    if let Some(app) = crate::APP.get() {
        app.opener()
            .open_url(url, Option::<String>::None)
            .map_err(|e| e.to_string())?;
    }

    Ok(())
}
