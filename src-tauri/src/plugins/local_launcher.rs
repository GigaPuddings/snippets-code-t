use crate::search::SearchResult;

#[tauri::command]
pub fn open_app_command(app_handle: tauri::AppHandle, app_path: String) -> Result<(), String> {
    crate::apps::open_app_command(app_handle, app_path)
}

#[tauri::command]
pub fn open_app_as_admin_command(
    app_handle: tauri::AppHandle,
    app_path: String,
) -> Result<(), String> {
    crate::apps::open_app_as_admin_command(app_handle, app_path)
}

#[tauri::command]
pub fn open_app_file_location_command(
    app_handle: tauri::AppHandle,
    app_path: String,
) -> Result<(), String> {
    crate::apps::open_app_file_location_command(app_handle, app_path)
}

#[tauri::command]
pub fn search_apps(
    app_handle: tauri::AppHandle,
    query: String,
) -> Result<Vec<SearchResult>, String> {
    crate::search::search_apps(app_handle, query)
}

#[tauri::command]
pub fn search_bookmarks(
    app_handle: tauri::AppHandle,
    query: String,
) -> Result<Vec<SearchResult>, String> {
    crate::search::search_bookmarks(app_handle, query)
}
