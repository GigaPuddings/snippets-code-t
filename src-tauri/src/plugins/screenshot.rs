use crate::window::{MonitorInfo, PinWindowData, WindowInfo};
use tauri::AppHandle;

fn require_screenshot_plugin(app_handle: &AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, "screenshot")
}

#[tauri::command]
pub fn close_and_destroy_screenshot_window(app_handle: AppHandle) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::close_and_destroy_screenshot_window()
}

#[tauri::command]
pub fn get_screenshot_background(app_handle: AppHandle) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::get_screenshot_background()
}

#[tauri::command]
pub fn get_screenshot_preview(app_handle: AppHandle) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::get_screenshot_preview()
}

#[tauri::command]
pub fn get_cached_window_list(app_handle: AppHandle) -> Result<Vec<WindowInfo>, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::get_cached_window_list()
}

#[tauri::command]
pub fn get_cached_monitor_info(app_handle: AppHandle) -> Result<MonitorInfo, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::get_cached_monitor_info()
}

#[tauri::command]
pub fn clear_screenshot_background(app_handle: AppHandle) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::clear_screenshot_background();
    Ok(())
}

#[tauri::command]
pub fn cleanup_screenshot_resources(app_handle: AppHandle) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::cleanup_screenshot_resources();
    Ok(())
}

#[tauri::command]
pub fn copy_to_clipboard(app_handle: AppHandle, image: String) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::copy_to_clipboard(app_handle, image)
}

#[tauri::command]
pub fn get_pixel_color(app_handle: AppHandle, x: i32, y: i32) -> Result<serde_json::Value, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::get_pixel_color(x, y)
}

#[tauri::command]
pub fn get_screen_preview(
    app_handle: AppHandle,
    x: i32,
    y: i32,
    width: i32,
    height: i32,
) -> Result<serde_json::Value, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::get_screen_preview(x, y, width, height)
}

#[tauri::command]
pub async fn save_screenshot_to_file(
    app_handle: AppHandle,
    image: String,
) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::save_screenshot_to_file(app_handle, image).await
}

#[tauri::command]
pub async fn create_pin_window(
    app_handle: AppHandle,
    mode: Option<String>,
    image_data: String,
    x: i32,
    y: i32,
    width: i32,
    height: i32,
) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::create_pin_window(app_handle, mode, image_data, x, y, width, height).await
}

#[tauri::command]
pub fn get_pin_window_data(
    app_handle: AppHandle,
    label: String,
) -> Result<Option<PinWindowData>, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::get_pin_window_data(label)
}

#[tauri::command]
pub fn copy_image_to_clipboard(app_handle: AppHandle, image_data: String) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::copy_image_to_clipboard(app_handle, image_data)
}

#[tauri::command]
pub async fn save_pin_image(app_handle: AppHandle, image_data: String) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::save_pin_image(app_handle, image_data).await
}

#[tauri::command]
pub fn get_all_windows(app_handle: AppHandle) -> Result<Vec<WindowInfo>, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::window::get_all_windows()
}
