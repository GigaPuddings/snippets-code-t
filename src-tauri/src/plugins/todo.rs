use crate::db;
use chrono::{DateTime, Duration, Local};
use serde::{Deserialize, Serialize};
use tauri::Emitter;

mod schedule;
mod service;
pub use service::{start_alarm_service, stop_alarm_service};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum AlarmType {
    Daily,
    Weekly,
    SpecificDate,
}

// 默认时间函数，用于 serde 反序列化
fn default_datetime() -> DateTime<Local> {
    Local::now()
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AlarmCard {
    #[serde(default)]
    pub id: String,
    pub time: String,
    pub title: String,
    #[serde(serialize_with = "serialize_weekdays")]
    pub weekdays: Vec<String>,
    pub reminder_time: String,
    pub is_active: bool,
    #[serde(default = "default_datetime")]
    pub created_at: DateTime<Local>,
    #[serde(default = "default_datetime")]
    pub updated_at: DateTime<Local>,
    #[serde(default)]
    pub time_left: String,
    #[serde(default)]
    pub next_alarm_at: Option<DateTime<Local>>,
    pub alarm_type: AlarmType,
    pub specific_dates: Option<Vec<String>>,
}

pub(crate) fn play_reminder_sound(app_handle: &tauri::AppHandle) {
    use windows::Win32::Media::Audio::{
        PlaySoundW, SND_ALIAS, SND_ASYNC, SND_NODEFAULT, SND_NOSTOP, SND_SYSTEM,
    };

    if !crate::app_config::is_plugin_enabled(app_handle, "todo") {
        return;
    }

    // Use the user's system notification sound and volume without blocking or
    // restarting a sound already playing for a simultaneous reminder.
    let played = unsafe {
        PlaySoundW(
            windows::core::w!("SystemNotification"),
            None,
            SND_ALIAS | SND_ASYNC | SND_NODEFAULT | SND_NOSTOP | SND_SYSTEM,
        )
    };
    if !played.as_bool() {
        log::debug!("[Todo] 系统提示音未播放：声音未配置、音频设备不可用或已有提示音正在播放");
    }
}

fn serialize_weekdays<S: serde::Serializer>(
    days: &[String],
    serializer: S,
) -> Result<S::Ok, S::Error> {
    let legacy: Vec<_> = days
        .iter()
        .map(|day| {
            schedule::normalize_weekday(day)
                .and_then(|day| schedule::WEEKDAYS.iter().position(|value| *value == day))
                .map(|index| ["一", "二", "三", "四", "五", "六", "日"][index])
                .unwrap_or(day)
        })
        .collect();
    // Keep existing plugin responses compatible; the updated UI localizes independently.
    legacy.serialize(serializer)
}

impl AlarmCard {
    pub fn calculate_time_left(&self) -> String {
        if !self.is_active {
            return "已暂停".into();
        }
        let now = Local::now();
        match schedule::next_alarm(self, now) {
            Some(due) => format!("{} 分钟后", ((due - now).num_seconds() + 59).div_euclid(60)),
            None => "已过期或未设置有效时间".into(),
        }
    }
}

fn changed(app: &tauri::AppHandle) {
    start_alarm_service(app.clone());
    let _ = app.emit("todo-reminders-updated", ());
}

#[tauri::command]
pub fn add_alarm_card(
    app_handle: tauri::AppHandle,
    mut card: AlarmCard,
) -> Result<AlarmCard, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "todo")?;
    db::ensure_plugin_storage("todo").map_err(|error| error.to_string())?;
    let now = Local::now();
    schedule::validate(&mut card, now, None)?;
    card.id = uuid::Uuid::new_v4().to_string();
    card.created_at = now;
    card.updated_at = now;
    db::add_or_update_alarm_card(&card).map_err(|error| error.to_string())?;
    changed(&app_handle);
    Ok(card)
}

#[tauri::command]
pub fn update_alarm_card(
    app_handle: tauri::AppHandle,
    mut card: AlarmCard,
) -> Result<AlarmCard, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "todo")?;
    db::ensure_plugin_storage("todo").map_err(|error| error.to_string())?;
    let existing = db::get_all_alarm_cards()
        .map_err(|error| error.to_string())?
        .into_iter()
        .find(|value| value.id == card.id)
        .ok_or("提醒不存在或已删除")?;
    let now = Local::now();
    schedule::validate(&mut card, now, Some(&existing))?;
    // Only the dedicated toggle command changes activation state, including for legacy clients.
    card.is_active = existing.is_active;
    card.created_at = existing.created_at;
    card.updated_at = now;
    db::add_or_update_alarm_card(&card).map_err(|error| error.to_string())?;
    changed(&app_handle);
    Ok(card)
}

#[tauri::command]
pub fn get_alarm_cards(app_handle: tauri::AppHandle) -> Result<Vec<AlarmCard>, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "todo")?;
    db::ensure_plugin_storage("todo").map_err(|error| error.to_string())?;
    let mut cards = db::get_all_alarm_cards().map_err(|error| error.to_string())?;
    for card in &mut cards {
        card.time_left = card.calculate_time_left();
        card.next_alarm_at = schedule::next_alarm(card, Local::now());
    }
    Ok(cards)
}

#[tauri::command]
pub fn delete_alarm_card(app_handle: tauri::AppHandle, id: String) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(&app_handle, "todo")?;
    db::ensure_plugin_storage("todo").map_err(|error| error.to_string())?;
    db::delete_alarm_card_by_id(&id).map_err(|error| error.to_string())?;
    changed(&app_handle);
    Ok(())
}

#[tauri::command]
pub fn toggle_alarm_card(app_handle: tauri::AppHandle, id: String) -> Result<AlarmCard, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "todo")?;
    db::ensure_plugin_storage("todo").map_err(|error| error.to_string())?;
    let mut card = db::get_all_alarm_cards()
        .map_err(|error| error.to_string())?
        .into_iter()
        .find(|value| value.id == id)
        .ok_or("提醒不存在或已删除")?;
    card.is_active = !card.is_active;
    if card.is_active
        && matches!(card.alarm_type, AlarmType::SpecificDate)
        && schedule::next_alarm(&card, Local::now()).is_none()
    {
        return Err("提醒日期已过期，请先编辑为未来日期".into());
    }
    card.updated_at = Local::now();
    db::add_or_update_alarm_card(&card).map_err(|error| error.to_string())?;
    changed(&app_handle);
    Ok(card)
}

#[tauri::command]
pub fn remind_notification_window(
    app_handle: tauri::AppHandle,
    title: String,
    reminder_time: String,
    alarm_id: Option<String>,
    request_id: Option<String>,
) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(&app_handle, "todo")?;
    db::ensure_plugin_storage("todo").map_err(|error| error.to_string())?;
    let minutes = schedule::snooze_minutes(&reminder_time)?;
    let title = title.trim().to_string();
    if title.is_empty() || title.chars().count() > 200 {
        return Err("提醒标题无效".into());
    }
    if let Some(id) = &alarm_id {
        let card = db::get_all_alarm_cards()
            .map_err(|error| error.to_string())?
            .into_iter()
            .find(|card| &card.id == id)
            .ok_or("提醒已删除")?;
        let completed_once = matches!(card.alarm_type, AlarmType::SpecificDate)
            && card
                .specific_dates
                .as_ref()
                .is_none_or(|dates| dates.is_empty());
        if !card.is_active && !completed_once {
            return Err("提醒已暂停".into());
        }
    }
    let due = Local::now()
        .checked_add_signed(Duration::minutes(minutes))
        .ok_or("稍后提醒时间无效")?;
    let alarm = db::SnoozedAlarm {
        id: request_id
            .filter(|id| !id.is_empty())
            .unwrap_or_else(|| uuid::Uuid::new_v4().to_string()),
        alarm_id,
        title,
        due_at: due.timestamp(),
    };
    db::queue_snooze(&alarm).map_err(|error| error.to_string())?;
    changed(&app_handle);
    Ok(())
}
