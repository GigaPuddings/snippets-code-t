#[tauri::command]
pub async fn translate_text(
    app_handle: tauri::AppHandle,
    text: String,
    from: String,
    to: String,
    engine: String,
) -> Result<String, String> {
    crate::translation::translate_text(app_handle, text, from, to, engine).await
}
