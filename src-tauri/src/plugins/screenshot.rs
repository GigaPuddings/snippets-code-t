use crate::window::{MonitorInfo, PinWindowData, WindowInfo};
use tauri::AppHandle;

#[tauri::command]
pub fn close_and_destroy_screenshot_window() -> Result<(), String> {
    crate::window::close_and_destroy_screenshot_window()
}

#[tauri::command]
pub fn get_screenshot_background() -> Result<String, String> {
    crate::window::get_screenshot_background()
}

#[tauri::command]
pub fn get_screenshot_preview() -> Result<String, String> {
    crate::window::get_screenshot_preview()
}

#[tauri::command]
pub fn get_cached_window_list() -> Result<Vec<WindowInfo>, String> {
    crate::window::get_cached_window_list()
}

#[tauri::command]
pub fn get_cached_monitor_info() -> Result<MonitorInfo, String> {
    crate::window::get_cached_monitor_info()
}

#[tauri::command]
pub fn clear_screenshot_background() {
    crate::window::clear_screenshot_background()
}

#[tauri::command]
pub fn cleanup_screenshot_resources() {
    crate::window::cleanup_screenshot_resources()
}

#[tauri::command]
pub fn copy_to_clipboard(app_handle: AppHandle, image: String) -> Result<(), String> {
    crate::window::copy_to_clipboard(app_handle, image)
}

#[tauri::command]
pub fn get_pixel_color(x: i32, y: i32) -> Result<serde_json::Value, String> {
    crate::window::get_pixel_color(x, y)
}

#[tauri::command]
pub fn get_screen_preview(
    x: i32,
    y: i32,
    width: i32,
    height: i32,
) -> Result<serde_json::Value, String> {
    crate::window::get_screen_preview(x, y, width, height)
}

#[tauri::command]
pub async fn save_screenshot_to_file(
    app_handle: AppHandle,
    image: String,
) -> Result<String, String> {
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
    crate::window::create_pin_window(app_handle, mode, image_data, x, y, width, height).await
}

#[tauri::command]
pub fn get_pin_window_data(label: String) -> Result<Option<PinWindowData>, String> {
    crate::window::get_pin_window_data(label)
}

#[tauri::command]
pub fn copy_image_to_clipboard(app_handle: AppHandle, image_data: String) -> Result<(), String> {
    crate::window::copy_image_to_clipboard(app_handle, image_data)
}

#[tauri::command]
pub async fn save_pin_image(app_handle: AppHandle, image_data: String) -> Result<String, String> {
    crate::window::save_pin_image(app_handle, image_data).await
}

#[tauri::command]
pub fn get_all_windows() -> Result<Vec<WindowInfo>, String> {
    crate::window::get_all_windows()
}
