use crate::config::parse_hotkey;
use crate::db;
use crate::window::{hotkey_config, hotkey_selection_translate, hotkey_translate, hotkey_search_wrapper, hotkey_screenshot, hotkey_dark_mode};
use crate::APP;
use log::{info, warn};
use tauri::AppHandle;
use tauri_plugin_global_shortcut::{GlobalShortcutExt, Shortcut, ShortcutState};

// 注册单个快捷键的核心函数（使用数据库存储）
fn register<F>(_app_handle: &AppHandle, name: &str, handler: F, key: &str) -> Result<(), String>
where
    F: Fn() + Send + Sync + 'static,
{
    let hotkey = {
        if key.is_empty() {
            // 从数据库读取快捷键配置
            db::get_setting_string(name).unwrap_or_default()
        } else {
            key.to_string()
        }
    };

    // 获取应用句柄
    let app = APP.get().unwrap();
    
    if !hotkey.is_empty() {
        // info!("{}：窗口尝试注册快捷键：{}", name, hotkey);

        // 解析快捷键字符串
        let (modifiers, code) = parse_hotkey(&hotkey)?;

        // 创建快捷键（modifiers 已经是 Option<Modifiers>）
        let shortcut = Shortcut::new(modifiers, code);

        // 获取快捷键管理器
        let manager = app.global_shortcut();

        // 注册新的快捷键
        // on_shortcut 会自动检测冲突（包括本应用内和系统级冲突）
        match manager.on_shortcut(shortcut, move |_app_handle, hotkey, event| {
            if event.state == ShortcutState::Pressed {
                info!("快捷键：{} 被触发", hotkey);
                handler();
            }
        }) {
            Ok(_) => {
                // info!("{}：快捷键 {} 注册成功", name, hotkey);
            }
            Err(e) => {
                warn!("快捷键 {} 注册失败: {}", hotkey, e);
                return Err(format!(
                    "快捷键 '{}' 注册失败，可能与本应用、系统或其他应用冲突: {}",
                    hotkey, e
                ));
            }
        }
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
    // 保存快捷键到数据库
    db::set_setting_string(name, shortcut).map_err(|e| e.to_string())?;
    
    match name {
        "search" => {
            register(&app_handle, "search", hotkey_search_wrapper, shortcut)?;
        }
        "config" => {
            register(&app_handle, "config", hotkey_config, shortcut)?;
        }
        "screenshot" => {
            register(&app_handle, "screenshot", hotkey_screenshot, shortcut)?;
        }
        "translate" => {
            register(&app_handle, "translate", hotkey_translate, shortcut)?;
        }
        "selectionTranslate" => {
            register(
                &app_handle,
                "selectionTranslate",
                hotkey_selection_translate,
                shortcut,
            )?;
        }
        "darkMode" => {
            register(&app_handle, "darkMode", hotkey_dark_mode, shortcut)?;
        }
        _ => {
            return Err("未知的快捷键名称".to_string());
        }
    }
    Ok(())
}

#[tauri::command]
pub fn get_shortcuts(_app_handle: AppHandle) -> Result<(String, String, String, String, String, String), String> {
    // 从数据库读取所有快捷键配置
    let search_hotkey = db::get_setting_string("search").unwrap_or_default();
    let config_hotkey = db::get_setting_string("config").unwrap_or_default();
    let translate_hotkey = db::get_setting_string("translate").unwrap_or_default();
    let selection_translate_hotkey = db::get_setting_string("selectionTranslate").unwrap_or_default();
    let screenshot_hotkey = db::get_setting_string("screenshot").unwrap_or_default();
    let dark_mode_hotkey = db::get_setting_string("darkMode").unwrap_or_default();

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
pub fn get_selection_translate_shortcut(_app_handle: AppHandle) -> Result<String, String> {
    // 从数据库读取划词翻译快捷键
    let selection_translate_hotkey = db::get_setting_string("selectionTranslate").unwrap_or_default();
    Ok(selection_translate_hotkey)
}
