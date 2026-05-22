use crate::window::{MonitorInfo, PinWindowData, WindowInfo};
use serde::de::DeserializeOwned;
use tauri::AppHandle;

fn require_screenshot_plugin(app_handle: &AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, "screenshot")
}

fn try_screenshot_backend<T: DeserializeOwned>(
    app_handle: &AppHandle,
    command: &str,
    payload: serde_json::Value,
) -> Result<Option<T>, String> {
    let Some(value) = crate::app_config::try_invoke_local_plugin_backend(
        app_handle,
        "screenshot",
        command,
        payload,
    )?
    else {
        return Ok(None);
    };

    serde_json::from_value(value)
        .map(Some)
        .map_err(|e| format!("解析截图插件后端响应失败: {}", e))
}

#[tauri::command]
pub fn close_and_destroy_screenshot_window(app_handle: AppHandle) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend::<()>(
        &app_handle,
        "close_and_destroy_screenshot_window",
        serde_json::Value::Null,
    )? {
        return Ok(result);
    }
    crate::window::close_and_destroy_screenshot_window()
}

#[tauri::command]
pub fn get_screenshot_background(app_handle: AppHandle) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "get_screenshot_background",
        serde_json::Value::Null,
    )? {
        return Ok(result);
    }
    crate::window::get_screenshot_background()
}

#[tauri::command]
pub fn get_screenshot_preview(app_handle: AppHandle) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "get_screenshot_preview",
        serde_json::Value::Null,
    )? {
        return Ok(result);
    }
    crate::window::get_screenshot_preview()
}

#[tauri::command]
pub fn get_cached_window_list(app_handle: AppHandle) -> Result<Vec<WindowInfo>, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "get_cached_window_list",
        serde_json::Value::Null,
    )? {
        return Ok(result);
    }
    crate::window::get_cached_window_list()
}

#[tauri::command]
pub fn get_cached_monitor_info(app_handle: AppHandle) -> Result<MonitorInfo, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "get_cached_monitor_info",
        serde_json::Value::Null,
    )? {
        return Ok(result);
    }
    crate::window::get_cached_monitor_info()
}

#[tauri::command]
pub fn clear_screenshot_background(app_handle: AppHandle) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend::<()>(
        &app_handle,
        "clear_screenshot_background",
        serde_json::Value::Null,
    )? {
        return Ok(result);
    }
    crate::window::clear_screenshot_background();
    Ok(())
}

#[tauri::command]
pub fn cleanup_screenshot_resources(app_handle: AppHandle) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend::<()>(
        &app_handle,
        "cleanup_screenshot_resources",
        serde_json::Value::Null,
    )? {
        return Ok(result);
    }
    crate::window::cleanup_screenshot_resources();
    Ok(())
}

#[tauri::command]
pub fn copy_to_clipboard(app_handle: AppHandle, image: String) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend::<()>(
        &app_handle,
        "copy_to_clipboard",
        serde_json::json!({ "image": image.clone() }),
    )? {
        return Ok(result);
    }
    crate::window::copy_to_clipboard(app_handle, image)
}

#[tauri::command]
pub fn get_pixel_color(app_handle: AppHandle, x: i32, y: i32) -> Result<serde_json::Value, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "get_pixel_color",
        serde_json::json!({ "x": x, "y": y }),
    )? {
        return Ok(result);
    }
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
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "get_screen_preview",
        serde_json::json!({
            "x": x,
            "y": y,
            "width": width,
            "height": height
        }),
    )? {
        return Ok(result);
    }
    crate::window::get_screen_preview(x, y, width, height)
}

#[tauri::command]
pub async fn save_screenshot_to_file(
    app_handle: AppHandle,
    image: String,
) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "save_screenshot_to_file",
        serde_json::json!({ "image": image.clone() }),
    )? {
        return Ok(result);
    }
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
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "create_pin_window",
        serde_json::json!({
            "mode": mode.clone(),
            "imageData": image_data.clone(),
            "x": x,
            "y": y,
            "width": width,
            "height": height
        }),
    )? {
        return Ok(result);
    }
    crate::window::create_pin_window(app_handle, mode, image_data, x, y, width, height).await
}

#[tauri::command]
pub fn get_pin_window_data(
    app_handle: AppHandle,
    label: String,
) -> Result<Option<PinWindowData>, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "get_pin_window_data",
        serde_json::json!({ "label": label.clone() }),
    )? {
        return Ok(result);
    }
    crate::window::get_pin_window_data(label)
}

#[tauri::command]
pub fn copy_image_to_clipboard(app_handle: AppHandle, image_data: String) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend::<()>(
        &app_handle,
        "copy_image_to_clipboard",
        serde_json::json!({ "imageData": image_data.clone() }),
    )? {
        return Ok(result);
    }
    crate::window::copy_image_to_clipboard(app_handle, image_data)
}

#[tauri::command]
pub async fn save_pin_image(app_handle: AppHandle, image_data: String) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) = try_screenshot_backend(
        &app_handle,
        "save_pin_image",
        serde_json::json!({ "imageData": image_data.clone() }),
    )? {
        return Ok(result);
    }
    crate::window::save_pin_image(app_handle, image_data).await
}

#[tauri::command]
pub fn get_all_windows(app_handle: AppHandle) -> Result<Vec<WindowInfo>, String> {
    require_screenshot_plugin(&app_handle)?;
    if let Some(result) =
        try_screenshot_backend(&app_handle, "get_all_windows", serde_json::Value::Null)?
    {
        return Ok(result);
    }
    crate::window::get_all_windows()
}

#[tauri::command]
pub async fn recognize_text_from_image(
    app_handle: AppHandle,
    image_data: String,
    engine: Option<String>,
    language: Option<String>,
) -> Result<crate::ocr::OcrRecognizeResult, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::ocr::recognize_text_from_image(app_handle, image_data, engine, language).await
}

#[tauri::command]
pub fn get_rapidocr_resource_status(
    app_handle: AppHandle,
) -> Result<crate::ocr::RapidOcrResourceStatus, String> {
    require_screenshot_plugin(&app_handle)?;
    crate::ocr::get_rapidocr_resource_status(app_handle)
}

#[tauri::command]
pub fn append_ocr_diagnostic_log(
    app_handle: AppHandle,
    message: String,
    data: Option<String>,
) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    crate::ocr::append_ocr_diagnostic_log(app_handle, message, data)
}

#[tauri::command]
pub fn set_ocr_language(app_handle: AppHandle, language: String) -> Result<(), String> {
    require_screenshot_plugin(&app_handle)?;
    crate::config::set_ocr_language(app_handle, language)
}

#[tauri::command]
pub fn get_ocr_language(app_handle: AppHandle) -> Result<String, String> {
    require_screenshot_plugin(&app_handle)?;
    Ok(crate::config::get_ocr_language(app_handle))
}
