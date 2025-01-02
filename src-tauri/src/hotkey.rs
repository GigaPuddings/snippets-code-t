use crate::config::{get_value, parse_hotkey, set_value};
use crate::window::{hotkey_config, hotkey_search};
use crate::APP;
use log::{info, warn};
use tauri::AppHandle;
use tauri_plugin_global_shortcut::{GlobalShortcutExt, Shortcut, ShortcutState};

// 注册单个快捷键的核心函数
fn register<F>(app_handle: &AppHandle, name: &str, handler: F, key: &str) -> Result<(), String>
where
    F: Fn() + Send + Sync + 'static,
{
    let hotkey = {
        if key.is_empty() {
            match get_value(app_handle, name) {
                Some(v) => v.as_str().unwrap_or_default().to_string(),
                None => {
                    set_value(app_handle, name, "");
                    String::new()
                }
            }
        } else {
            key.to_string()
        }
    };

    if !hotkey.is_empty() {
        info!("Window: {} Try to register shortcut keys: {}", name, hotkey);

        // 解析快捷键字符串
        let (modifiers, code) = parse_hotkey(&hotkey)?;

        // 创建快捷键
        let shortcut = Shortcut::new(Some(modifiers), code);

        // // 注销已存在的快捷键（如果有）
        // if let Err(err) = app_handle.global_shortcut().unregister_all() {
        //     warn!("注销现有快捷键失败: {}", err);
        // }

        // 获取快捷键管理器
        let manager = app_handle.global_shortcut();

        // 注销已存在的快捷键（如果有）
        if manager.is_registered(shortcut) {
            info!("Shortcut key: {} registered", hotkey);
            manager.unregister(shortcut).unwrap();
        }

        // 注册新的快捷键
        let _ = manager.on_shortcut(shortcut, move |_app_handle, hotkey, event| {
            if event.state == ShortcutState::Pressed {
                info!("Shortcut key: {} trigger", hotkey);
                handler();
            }
        });
    } else {
        set_value(app_handle, name, "");
        warn!("Window: {} shortcut key logged out and deleted", name);
    }
    Ok(())
}

pub fn register_shortcut(shortcut: &str) -> Result<(), String> {
    let app_handle = APP.get().unwrap();
    match shortcut {
        "search" => register(app_handle, "search", hotkey_search, "")?,
        "config" => register(app_handle, "config", hotkey_config, "")?,
        "all" => {
            register(app_handle, "search", hotkey_search, "")?;
            register(app_handle, "config", hotkey_config, "")?;
        }
        _ => {}
    }
    Ok(())
}

#[tauri::command]
pub fn register_shortcut_by_frontend(
    app_handle: AppHandle,
    name: &str,
    shortcut: &str,
) -> Result<(), String> {
    match name {
        "search" => {
            set_value(&app_handle, "search", shortcut);
            register(&app_handle, "search", hotkey_search, shortcut)?;
        }
        "config" => {
            set_value(&app_handle, "config", shortcut);
            register(&app_handle, "config", hotkey_config, shortcut)?;
        }
        _ => {}
    }
    Ok(())
}
