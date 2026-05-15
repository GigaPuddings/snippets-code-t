use crate::search::SearchEngine;

#[tauri::command]
pub fn get_search_engines(app_handle: tauri::AppHandle) -> Result<Vec<SearchEngine>, String> {
    crate::search::get_search_engines(app_handle)
}

#[tauri::command]
pub fn update_search_engines(
    app_handle: tauri::AppHandle,
    engines: Vec<SearchEngine>,
) -> Result<(), String> {
    crate::search::update_search_engines(app_handle, engines)
}

#[tauri::command]
pub fn get_default_engines(app_handle: tauri::AppHandle) -> Result<Vec<SearchEngine>, String> {
    crate::search::get_default_engines(app_handle)
}
