use crate::json_config;
use crate::APP;

// ============= Tauri 命令 =============

// 设置自启动偏好 (保存到 app.json)
#[tauri::command]
pub fn set_auto_start_setting(value: bool) -> Result<(), String> {
    let app = APP.get().ok_or("应用未初始化")?;
    json_config::set_app_config_value(app, "auto_start", value)
}

// 获取自动失焦隐藏设置 (从 app.json 读取)
#[tauri::command]
pub fn get_auto_hide_on_blur() -> bool {
    let app = APP.get();
    if let Some(app) = app {
        json_config::get_app_config_value(app, "auto_hide_on_blur").unwrap_or(true)
    } else {
        true
    }
}

// 设置自动失焦隐藏 (保存到 app.json)
#[tauri::command]
pub fn set_auto_hide_on_blur(value: bool) -> Result<(), String> {
    let app = APP.get().ok_or("应用未初始化")?;
    json_config::set_app_config_value(app, "auto_hide_on_blur", value)
}
