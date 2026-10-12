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

#[cfg(test)]
mod tests {
    use super::{CHIME, SETTING_KEY};

    #[test]
    fn mute_setting_survives_reopening_existing_config_storage() {
        struct TempConfig(std::path::PathBuf);
        impl Drop for TempConfig {
            fn drop(&mut self) {
                let _ = std::fs::remove_dir_all(&self.0);
            }
        }
        let root =
            TempConfig(std::env::temp_dir().join(format!("todo-sound-{}", uuid::Uuid::new_v4())));
        assert!(root.0.starts_with(std::env::temp_dir()));
        let mut manager = crate::app_config::AppConfigManager::new(&root.0).unwrap();
        assert!(manager.get_value::<bool>(SETTING_KEY).unwrap_or(true));
        manager.set_value(SETTING_KEY, false).unwrap();
        manager.save().unwrap();
        drop(manager);
        let mut manager = crate::app_config::AppConfigManager::new(&root.0).unwrap();
        assert_eq!(manager.get_value::<bool>(SETTING_KEY), Some(false));
        manager.clear_plugin_owned_config("todo");
        manager.save().unwrap();
        drop(manager);
        let manager = crate::app_config::AppConfigManager::new(&root.0).unwrap();
        assert!(manager.get_value::<bool>(SETTING_KEY).unwrap_or(true));
    }

    #[test]
    fn bundled_chime_is_a_short_mono_pcm_wav_with_a_complete_payload() {
        assert_eq!(&CHIME[..4], b"RIFF");
        assert_eq!(&CHIME[8..16], b"WAVEfmt ");
        assert_eq!(u16::from_le_bytes(CHIME[20..22].try_into().unwrap()), 1);
        assert_eq!(u16::from_le_bytes(CHIME[22..24].try_into().unwrap()), 1);
        let rate = u32::from_le_bytes(CHIME[24..28].try_into().unwrap());
        let bytes = u32::from_le_bytes(CHIME[40..44].try_into().unwrap());
        assert_eq!(CHIME.len(), bytes as usize + 44);
        assert!(bytes > 0 && bytes <= rate * 2);
        assert!(CHIME[44..].iter().any(|value| *value != 0));
    }
}
