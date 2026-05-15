use crate::alarm::AlarmCard;

#[tauri::command]
pub fn get_alarm_cards(app_handle: tauri::AppHandle) -> Result<Vec<AlarmCard>, String> {
    crate::alarm::get_alarm_cards(app_handle)
}

#[tauri::command]
pub fn add_alarm_card(app_handle: tauri::AppHandle, card: AlarmCard) -> Result<AlarmCard, String> {
    crate::alarm::add_alarm_card(app_handle, card)
}

#[tauri::command]
pub fn update_alarm_card(
    app_handle: tauri::AppHandle,
    card: AlarmCard,
) -> Result<AlarmCard, String> {
    crate::alarm::update_alarm_card(app_handle, card)
}

#[tauri::command]
pub fn delete_alarm_card(app_handle: tauri::AppHandle, id: String) -> Result<(), String> {
    crate::alarm::delete_alarm_card(app_handle, id)
}

#[tauri::command]
pub fn toggle_alarm_card(app_handle: tauri::AppHandle, id: String) -> Result<AlarmCard, String> {
    crate::alarm::toggle_alarm_card(app_handle, id)
}

#[tauri::command]
pub fn remind_notification_window(
    app_handle: tauri::AppHandle,
    title: String,
    reminder_time: String,
) -> Result<(), String> {
    crate::alarm::remind_notification_window(app_handle, title, reminder_time)
}
