use super::{schedule, AlarmType};
use crate::db;
use crate::window::{create_notification_window_unified, NotificationType};
use chrono::Local;
use std::sync::{Condvar, LazyLock, Mutex};
use std::time::Duration;
use tauri::Emitter;
use tauri_plugin_notification::NotificationExt;

#[derive(Default)]
struct ServiceState {
    running: bool,
    generation: u64,
    revision: u64,
}
impl ServiceState {
    fn request_start(&mut self) -> Option<u64> {
        self.revision = self.revision.wrapping_add(1);
        if self.running {
            return None;
        }
        self.running = true;
        self.generation = self.generation.wrapping_add(1);
        Some(self.generation)
    }
    fn current(&self, generation: u64) -> bool {
        self.running && self.generation == generation
    }
    fn stop(&mut self) {
        self.running = false;
        self.generation = self.generation.wrapping_add(1);
    }
}
static SERVICE: LazyLock<(Mutex<ServiceState>, Condvar)> =
    LazyLock::new(|| (Mutex::new(ServiceState::default()), Condvar::new()));

fn current(generation: u64) -> bool {
    SERVICE
        .0
        .lock()
        .is_ok_and(|state| state.current(generation))
}

pub fn start_alarm_service(app: tauri::AppHandle) {
    if !crate::app_config::is_plugin_enabled(&app, "todo") {
        return;
    }
    let generation = {
        let Ok(mut state) = SERVICE.0.lock() else {
            return;
        };
        let generation = state.request_start();
        SERVICE.1.notify_all();
        generation
    };
    let Some(generation) = generation else {
        return;
    };
    std::thread::spawn(move || {
        loop {
            let revision = {
                let Ok(state) = SERVICE.0.lock() else {
                    break;
                };
                if !state.current(generation) {
                    break;
                }
                state.revision
            };
            if !crate::app_config::is_plugin_enabled(&app, "todo") {
                break;
            }
            let has_work = check_alarms(&app, generation).unwrap_or_else(|error| {
                log::warn!("[Todo] 提醒检查失败，将重试: {}", error);
                true
            });
            let Ok(mut state) = SERVICE.0.lock() else {
                break;
            };
            if !state.current(generation) {
                break;
            }
            if state.revision != revision {
                continue;
            }
            if !has_work {
                state.running = false;
                break;
            }
            if SERVICE
                .1
                .wait_timeout(state, Duration::from_secs(15))
                .is_err()
            {
                break;
            }
        }
        if let Ok(mut state) = SERVICE.0.lock() {
            if state.generation == generation {
                state.running = false;
            }
        }
    });
}

pub fn stop_alarm_service() {
    if let Ok(mut state) = SERVICE.0.lock() {
        state.stop();
        SERVICE.1.notify_all();
    }
    if let Err(error) = db::clear_snoozes() {
        log::debug!("[Todo] 清理稍后提醒失败: {}", error);
    }
}

fn system_notification(app: &tauri::AppHandle, title: &str) -> Result<(), String> {
    app.notification()
        .builder()
        .title("Snippets Code")
        .body(title)
        // With this project's notification backend, omitting the sound emits
        // <audio silent="true"/> on Windows. Use only our bundled chime.
        .show()
        .map_err(|error| error.to_string())?;
    super::play_reminder_sound(app);
    Ok(())
}

fn check_alarms(app: &tauri::AppHandle, generation: u64) -> Result<bool, String> {
    let cards = db::get_all_alarm_cards().map_err(|error| error.to_string())?;
    let now = Local::now();
    let mut changed = false;
    for card in &cards {
        let Some(due) = schedule::due_today(card, now) else {
            continue;
        };
        if !current(generation) || !crate::app_config::is_plugin_enabled(app, "todo") {
            return Ok(false);
        }
        if !db::claim_alarm_occurrence(card, due).map_err(|error| error.to_string())? {
            continue;
        }
        let created = create_notification_window_unified(NotificationType::Reminder {
            body: card.title.clone(),
            reminder_time: schedule::snooze_minutes(&card.reminder_time).ok(),
            alarm_id: Some(card.id.clone()),
        })
        .is_some();
        if !created {
            if let Err(error) = system_notification(app, &card.title) {
                db::release_alarm_occurrence(card, due).map_err(|error| error.to_string())?;
                return Err(error);
            }
        }
        if matches!(card.alarm_type, AlarmType::SpecificDate) {
            db::finish_specific_occurrence(card, due).map_err(|error| error.to_string())?;
        }
        changed = true;
    }
    for alarm in db::due_snoozes(now).map_err(|error| error.to_string())? {
        if !current(generation) || !crate::app_config::is_plugin_enabled(app, "todo") {
            return Ok(false);
        }
        if !db::take_snooze(&alarm.id).map_err(|error| error.to_string())? {
            continue;
        }
        let created = create_notification_window_unified(NotificationType::Reminder {
            body: alarm.title.clone(),
            reminder_time: None,
            alarm_id: alarm.alarm_id.clone(),
        })
        .is_some();
        if !created {
            if let Err(error) = system_notification(app, &alarm.title) {
                db::queue_snooze(&alarm).map_err(|error| error.to_string())?;
                return Err(error);
            }
        }
        changed = true;
    }
    if changed {
        let _ = app.emit("todo-reminders-updated", ());
    }
    Ok(cards
        .iter()
        .any(|card| schedule::next_alarm(card, now).is_some())
        || db::has_snoozes().map_err(|error| error.to_string())?)
}

#[cfg(test)]
mod tests {
    use super::ServiceState;
    #[test]
    fn concurrent_starts_and_disable_reenable_never_revive_old_workers() {
        let mut state = ServiceState::default();
        let first = state.request_start().unwrap();
        assert!(state.request_start().is_none());
        assert!(state.current(first));
        state.stop();
        let second = state.request_start().unwrap();
        assert!(!state.current(first));
        assert!(state.current(second));
    }
}
