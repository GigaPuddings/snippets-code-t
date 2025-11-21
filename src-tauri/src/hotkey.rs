use crate::config::{get_value, parse_hotkey, set_value};
use crate::window::{hotkey_config, hotkey_selection_translate, hotkey_translate, hotkey_search_wrapper, hotkey_screenshot, hotkey_dark_mode};
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
        // info!("{}：窗口尝试注册快捷键：{}", name, hotkey);

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

        // 检查快捷键是否已经注册
        if manager.is_registered(shortcut) {
            warn!("快捷键：{} 已经被注册", hotkey);
            return Err(format!("快捷键 '{}' 已经被注册", hotkey));
        }

        // // 注销现有的快捷键（如果有）
        // if manager.is_registered(shortcut) {
        //     info!("注销快捷键：{}", hotkey);
        //     manager.unregister(shortcut).unwrap();
        // }

        // 注册新的快捷键
        let _ = manager.on_shortcut(shortcut, move |_app_handle, hotkey, event| {
            if event.state == ShortcutState::Pressed {
                info!("快捷键：{} 被触发", hotkey);
                handler();
            }
        });
    } else {
        set_value(app_handle, name, "");
        warn!("{}：快捷键已注销并删除", name);
    }
    Ok(())
}

pub fn register_shortcut(shortcut: &str) -> Result<(), String> {
    let app_handle = APP.get().unwrap();
    match shortcut {
        "search" => register(app_handle, "search", hotkey_search_wrapper, "")?,
        "config" => register(app_handle, "config", hotkey_config, "")?,
        "screenshot" => register(app_handle, "screenshot", hotkey_screenshot, "")?,
        "translate" => register(app_handle, "translate", hotkey_translate, "")?,
        "selectionTranslate" => register(
            app_handle,
            "selectionTranslate",
            hotkey_selection_translate,
            "",
        )?,
        "darkMode" => register(app_handle, "darkMode", hotkey_dark_mode, "")?,
        "all" => {
            register(app_handle, "search", hotkey_search_wrapper, "")?;
            register(app_handle, "config", hotkey_config, "")?;
            register(app_handle, "screenshot", hotkey_screenshot, "")?;
            register(app_handle, "translate", hotkey_translate, "")?;
            register(
                app_handle,
                "selectionTranslate",
                hotkey_selection_translate,
                "",
            )?;
            register(app_handle, "darkMode", hotkey_dark_mode, "")?;
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
            register(&app_handle, "search", hotkey_search_wrapper, shortcut)?;
        }
        "config" => {
            set_value(&app_handle, "config", shortcut);
            register(&app_handle, "config", hotkey_config, shortcut)?;
        }
        "screenshot" => {
            set_value(&app_handle, "screenshot", shortcut);
            register(&app_handle, "screenshot", hotkey_screenshot, shortcut)?;
        }
        "translate" => {
            set_value(&app_handle, "translate", shortcut);
            register(&app_handle, "translate", hotkey_translate, shortcut)?;
        }
        "selectionTranslate" => {
            set_value(&app_handle, "selectionTranslate", shortcut);
            register(
                &app_handle,
                "selectionTranslate",
                hotkey_selection_translate,
                shortcut,
            )?;
        }
        "darkMode" => {
            set_value(&app_handle, "darkMode", shortcut);
            register(&app_handle, "darkMode", hotkey_dark_mode, shortcut)?;
        }
        _ => {
            return Err("未知的快捷键名称".to_string());
        }
    }
    Ok(())
}

#[tauri::command]
pub fn get_shortcuts(app_handle: AppHandle) -> Result<(String, String, String, String, String, String), String> {
    let search_hotkey = get_value(&app_handle, "search")
        .map(|v| v.as_str().unwrap_or_default().to_string())
        .unwrap_or_default();

    let config_hotkey = get_value(&app_handle, "config")
        .map(|v| v.as_str().unwrap_or_default().to_string())
        .unwrap_or_default();

    let translate_hotkey = get_value(&app_handle, "translate")
        .map(|v| v.as_str().unwrap_or_default().to_string())
        .unwrap_or_default();

    let selection_translate_hotkey = get_value(&app_handle, "selectionTranslate")
        .map(|v| v.as_str().unwrap_or_default().to_string())
        .unwrap_or_default();

    let screenshot_hotkey = get_value(&app_handle, "screenshot")
        .map(|v| v.as_str().unwrap_or_default().to_string())
        .unwrap_or_default();

    let dark_mode_hotkey = get_value(&app_handle, "darkMode")
        .map(|v| v.as_str().unwrap_or_default().to_string())
        .unwrap_or_default();

    Ok((
        search_hotkey,
        config_hotkey,
        translate_hotkey,
        selection_translate_hotkey,
        screenshot_hotkey,
        dark_mode_hotkey,
    ))
}

#[tauri::command]
pub fn get_selection_translate_shortcut(app_handle: AppHandle) -> Result<String, String> {
    let selection_translate_hotkey = get_value(&app_handle, "selectionTranslate")
        .map(|v| v.as_str().unwrap_or_default().to_string())
        .unwrap_or_default();

    Ok(selection_translate_hotkey)
}
