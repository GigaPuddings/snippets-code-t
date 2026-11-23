use tauri::AppHandle;
use windows::Win32::Media::Audio::{PlaySoundW, SND_ASYNC, SND_MEMORY, SND_NODEFAULT, SND_NOSTOP};

pub(super) const SETTING_KEY: &str = "todo_sound_enabled";
// Static storage keeps the WAV buffer alive throughout asynchronous playback.
const CHIME: &[u8] = include_bytes!("../../../resources/todo/reminder-chime.wav");

pub(super) fn enabled(app: &AppHandle) -> bool {
    crate::json_config::get_app_config_value::<bool>(app, SETTING_KEY).unwrap_or(true)
}

pub(super) fn play(app: &AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app, "todo")?;
    if !enabled(app) {
        return Ok(());
    }
    // SND_NODEFAULT forbids fallback to a Windows sound; simultaneous reminders
    // do not restart a chime already playing. This asset is embedded in the host.
    let played = unsafe {
        PlaySoundW(
            windows::core::PCWSTR(CHIME.as_ptr().cast()),
            None,
            SND_MEMORY | SND_ASYNC | SND_NODEFAULT | SND_NOSTOP,
        )
    };
    if played.as_bool() {
        Ok(())
    } else {
        Err("提示音未播放：音频设备不可用或已有提示音正在播放".into())
    }
}
