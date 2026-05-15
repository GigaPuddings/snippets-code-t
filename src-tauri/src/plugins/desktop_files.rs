use crate::search::{DesktopFilePreview, SearchResult};

#[tauri::command]
pub fn search_desktop_files(
    app_handle: tauri::AppHandle,
    query: String,
) -> Result<Vec<SearchResult>, String> {
    crate::search::search_desktop_files(app_handle, query)
}

#[tauri::command]
pub fn refresh_desktop_files_cache_cmd(app_handle: tauri::AppHandle) -> Result<(), String> {
    crate::search::refresh_desktop_files_cache_cmd(app_handle)
}

#[tauri::command]
pub fn preview_desktop_file(
    app_handle: tauri::AppHandle,
    file_path: String,
) -> Result<DesktopFilePreview, String> {
    crate::search::preview_desktop_file(app_handle, file_path)
}
