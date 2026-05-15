#[tauri::command]
pub fn open_url(app_handle: tauri::AppHandle, url: String) -> Result<(), String> {
    crate::bookmarks::open_url(app_handle, url)
}
