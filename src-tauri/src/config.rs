use crate::db;
use crate::search::{SearchEngine, DEFAULT_ENGINES};
use log::{info, LevelFilter};
use serde_json::{json, Value};
use std::path::PathBuf;
use tauri_plugin_global_shortcut::GlobalShortcutExt;
use tauri_plugin_global_shortcut::{Code, Modifiers};
use tauri_plugin_store::StoreBuilder;
// use mouse_position::mouse_position::{Mouse, Position};

pub const DB_PATH_KEY: &str = "custom_db_path"; // 自定义数据库路径
pub const UPDATE_AVAILABLE_KEY: &str = "update_available"; // 更新可用标志
pub const UPDATE_INFO_KEY: &str = "update_info"; // 更新信息
pub const AUTO_UPDATE_CHECK_KEY: &str = "auto_update_check"; // 自动检查更新标志

// 获取值
pub fn get_value(app_handle: &tauri::AppHandle, key: &str) -> Option<Value> {
    let path = PathBuf::from("store.bin");
    let store = StoreBuilder::new(app_handle, path).build();

    match store {
        Ok(store) => store.get(key).map(|v| v.clone()),
        Err(_) => None,
    }
}
// 设置值
pub fn set_value<T: serde::ser::Serialize>(app_handle: &tauri::AppHandle, key: &str, value: T) {
    let path = PathBuf::from("store.bin");
    if let Ok(store) = StoreBuilder::new(app_handle, path).build() {
        let _ = store.set(key.to_string(), json!(value));
        let _ = store.save();
    }
}

// 解析快捷键
pub fn parse_hotkey(hotkey: &str) -> Result<(Modifiers, Code), String> {
    let parts: Vec<&str> = hotkey.split('+').map(|s| s.trim()).collect();
    let mut modifiers = Modifiers::empty();
    let mut code = None;

    for part in parts.iter() {
        match part.to_uppercase().as_str() {
            "CMD" | "COMMAND" => modifiers |= Modifiers::SUPER,
            "CTRL" | "CONTROL" => modifiers |= Modifiers::CONTROL,
            "ALT" | "OPTION" => modifiers |= Modifiers::ALT,
            "SHIFT" => modifiers |= Modifiers::SHIFT,
            key => {
                code = Some(match key {
                    "A" => Code::KeyA,
                    "B" => Code::KeyB,
                    "C" => Code::KeyC,
                    "D" => Code::KeyD,
                    "E" => Code::KeyE,
                    "F" => Code::KeyF,
                    "G" => Code::KeyG,
                    "H" => Code::KeyH,
                    "I" => Code::KeyI,
                    "J" => Code::KeyJ,
                    "K" => Code::KeyK,
                    "L" => Code::KeyL,
                    "M" => Code::KeyM,
                    "N" => Code::KeyN,
                    "O" => Code::KeyO,
                    "P" => Code::KeyP,
                    "Q" => Code::KeyQ,
                    "R" => Code::KeyR,
                    "S" => Code::KeyS,
                    "T" => Code::KeyT,
                    "U" => Code::KeyU,
                    "V" => Code::KeyV,
                    "W" => Code::KeyW,
                    "X" => Code::KeyX,
                    "Y" => Code::KeyY,
                    "Z" => Code::KeyZ,
                    "F1" => Code::F1,
                    "F2" => Code::F2,
                    "F3" => Code::F3,
                    "F4" => Code::F4,
                    "F5" => Code::F5,
                    "F6" => Code::F6,
                    "F7" => Code::F7,
                    "F8" => Code::F8,
                    "F9" => Code::F9,
                    "F10" => Code::F10,
                    "F11" => Code::F11,
                    "F12" => Code::F12,
                    "[" => Code::BracketLeft,
                    "]" => Code::BracketRight,
                    " " => Code::Space,
                    "." => Code::Period,
                    "," => Code::Comma,
                    ";" => Code::Semicolon,
                    "'" => Code::Quote,
                    "`" => Code::Backquote,
                    "/" => Code::Slash,
                    "\\" => Code::Backslash,
                    "-" => Code::Minus,
                    "=" => Code::Equal,
                    "UP" => Code::ArrowUp,
                    "DOWN" => Code::ArrowDown,
                    "LEFT" => Code::ArrowLeft,
                    "RIGHT" => Code::ArrowRight,
                    "ESC" | "ESCAPE" => Code::Escape,
                    "PAGEUP" => Code::PageUp,
                    "PAGEDOWN" => Code::PageDown,
                    "HOME" => Code::Home,
                    "END" => Code::End,
                    "INSERT" => Code::Insert,
                    "DELETE" => Code::Delete,
                    "BACKSPACE" => Code::Backspace,
                    "TAB" => Code::Tab,
                    "PRINTSCREEN" => Code::PrintScreen,
                    "PAUSE" => Code::Pause,
                    "SCROLLLOCK" => Code::ScrollLock,
                    "CAPSLOCK" => Code::CapsLock,
                    "CONTEXTMENU" => Code::ContextMenu,
                    _ => return Err(format!("不支持的按键: {}", key)),
                });
            }
        }
    }

    code.map(|code| (modifiers, code))
        .ok_or_else(|| "未指定按键".to_string())
}

// 控制日志存储
pub fn control_logging(enable: bool) {
    if enable {
        log::set_max_level(LevelFilter::Info);
    } else {
        log::set_max_level(LevelFilter::Off);
    }
}

// 将快捷键转义为例如 "Ctrl+Shift+F12"、"Alt+A" 的格式
// pub fn escape_hotkey(shortcut: &Shortcut) -> String {
//     // 将快捷键转义为例如 "Ctrl+Shift+F12"、"Alt+A" 的格式
//     let modifiers = shortcut
//         .mods
//         .iter()
//         .map(|modifier| match modifier {
//             Modifiers::CONTROL => "Ctrl".to_string(),
//             Modifiers::ALT => "Alt".to_string(),
//             Modifiers::SHIFT => "Shift".to_string(),
//             Modifiers::SUPER => "Super".to_string(),
//             _ => "".to_string(),
//         })
//         .filter(|modifier| !modifier.is_empty())
//         .collect::<Vec<String>>()
//         .join("+");

//     let key = shortcut.key.to_string();
//     // 使用字符串切片去除 "Key" 前缀
//     let key = &key["Key".len()..];

//     let shortcut_name = if modifiers.is_empty() {
//         key.to_string()
//     } else {
//         modifiers + "+" + key
//     };

//     shortcut_name
// }

// 获取鼠标位置设置窗口位置，并确保窗口不会超出边界
// fn get_adjusted_position(app_handle: &tauri::AppHandle, width: f64, height: f64) -> (f64, f64) {
//   // 获取鼠标位置
//   let mouse_position = match Mouse::get_mouse_position() {
//       Mouse::Position { x, y } => Position { x, y },
//       Mouse::Error => {
//           warn!("未找到鼠标位置,使用(0,0)作为默认值");
//           Position { x: 0, y: 0 }
//       }
//   };

//   // 获取鼠标所在的显示器
//   let monitor = app_handle
//       .monitor_from_point(mouse_position.x as f64, mouse_position.y as f64)
//       .map_err(|e| format!("无法获取显示器: {}", e))
//       .unwrap()
//       .ok_or("未找到显示器")
//       .unwrap();

//   // 获取显示器的边界
//   let monitor_size = monitor.size();

//   // 确保窗口不会超出边界
//   let adjusted_x = if mouse_position.x + width as i32 > monitor_size.width as i32 {
//       monitor_size.width as i32 - width as i32
//   } else {
//       mouse_position.x
//   };

//   let adjusted_y = if mouse_position.y + height as i32 > monitor_size.height as i32 {
//       monitor_size.height as i32 - height as i32
//   } else {
//       mouse_position.y
//   };

//   (adjusted_x as f64, adjusted_y as f64)
// }

// 重置软件
#[tauri::command]
pub fn reset_software(app_handle: tauri::AppHandle, reset_type: String) -> Result<(), String> {
    match reset_type.as_str() {
        "" | "all" => {
            info!("执行重置全部数据");
            let _ = db::clear_apps();
            let _ = db::clear_bookmarks();
            let _ = db::clear_search_engines();
            let _ = db::clear_alarm_cards();

            // 使用默认配置,并且第一条数据设置为默认搜索引擎
            let mut engines: Vec<SearchEngine> =
                serde_json::from_str(DEFAULT_ENGINES).map_err(|e| e.to_string())?;
            if !engines.is_empty() {
                engines[0].enabled = true;
            }
            db::replace_all_search_engines(&engines).map_err(|e| e.to_string())?;

            // 在后台线程中注销所有快捷键并重启应用程序
            std::thread::spawn(move || {
                std::thread::sleep(std::time::Duration::from_secs(3));
                // 注销所有快捷键
                app_handle.global_shortcut().unregister_all().unwrap();
                // 重启应用程序
                app_handle.restart();
            });
        }
        // 重置应用列表
        "apps" => {
            info!("执行重置应用列表");
            let _ = db::clear_apps();

            // 在后台线程中注销所有快捷键并重启应用程序
            std::thread::spawn(move || {
                std::thread::sleep(std::time::Duration::from_secs(3));
                // 注销所有快捷键
                app_handle.global_shortcut().unregister_all().unwrap();
                // 重启应用程序
                app_handle.restart();
            });
        }
        // 重置书签
        "bookmarks" => {
            info!("执行重置书签");
            let _ = db::clear_bookmarks();

            // 在后台线程中注销所有快捷键并重启应用程序
            std::thread::spawn(move || {
                std::thread::sleep(std::time::Duration::from_secs(3));
                // 注销所有快捷键
                app_handle.global_shortcut().unregister_all().unwrap();
                // 重启应用程序
                app_handle.restart();
            });
        }
        // 不支持的重置类型
        _ => {
            return Err(format!("不支持的重置类型: {}", reset_type));
        }
    }

    Ok(())
}

// 设置自动检查更新
#[tauri::command]
pub fn set_auto_update_check(app_handle: tauri::AppHandle, enabled: bool) -> Result<(), String> {
    set_value(&app_handle, AUTO_UPDATE_CHECK_KEY, enabled);
    Ok(())
}

// 获取自动检查更新设置
#[tauri::command]
pub fn get_auto_update_check(app_handle: tauri::AppHandle) -> bool {
    match get_value(&app_handle, AUTO_UPDATE_CHECK_KEY) {
        Some(value) => value.as_bool().unwrap_or(true),
        None => true, // 默认为开启
    }
}

// 退出应用
#[tauri::command]
pub fn exit_application(app_handle: tauri::AppHandle) {
    // 取消注册全局快捷键
    app_handle.global_shortcut().unregister_all().unwrap();
    // 退出应用
    app_handle.exit(0);
}
