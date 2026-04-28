use crate::db;
use crate::json_config;
// use crate::search::{SearchEngine, DEFAULT_ENGINES};
use log::{info, LevelFilter};
use tauri_plugin_global_shortcut::{GlobalShortcutExt, Code, Modifiers};
// use mouse_position::mouse_position::{Mouse, Position};

// 注：所有配置已迁移到 JSON 文件系统：
// - path.json: 数据目录路径
// - app.json: 所有应用配置（更新、翻译、快捷键、语言等）
// - 数据库 app_settings 表已废弃，配置统一存储在 app.json

// 解析快捷键
pub fn parse_hotkey(hotkey: &str) -> Result<(Option<Modifiers>, Code), String> {
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
                // 检测是否已经设置了主键（不允许多个主键）
                if code.is_some() {
                    return Err(
                        "不支持多个主键组合（如 A+1）。快捷键格式应为：[修饰键]+单个主键，例如 Ctrl+A 或 Alt+1".to_string()
                    );
                }
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
                    "0" => Code::Digit0,
                    "1" => Code::Digit1,
                    "2" => Code::Digit2,
                    "3" => Code::Digit3,
                    "4" => Code::Digit4,
                    "5" => Code::Digit5,
                    "6" => Code::Digit6,
                    "7" => Code::Digit7,
                    "8" => Code::Digit8,
                    "9" => Code::Digit9,
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

    code.map(|code| {
        // 如果没有设置任何修饰键，返回 None
        let final_modifiers = if modifiers.is_empty() {
            None
        } else {
            Some(modifiers)
        };
        (final_modifiers, code)
    })
    .ok_or_else(|| "未指定按键，快捷键必须包含一个主键（如 A、1、F1 等），不能只有修饰键（Ctrl、Alt、Shift）".to_string())
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

fn log_reset_step(reset_type: &str, step: &str, status: &str, detail: &str) {
    if detail.is_empty() {
        info!("[Reset] type={} step={} status={}", reset_type, step, status);
    } else {
        info!("[Reset] type={} step={} status={} detail={}", reset_type, step, status, detail);
    }
}

fn log_reset_db_result(reset_type: &str, step: &str, result: Result<(), rusqlite::Error>) -> Result<(), String> {
    match result {
        Ok(_) => {
            log_reset_step(reset_type, step, "ok", "");
            Ok(())
        }
        Err(e) => {
            let detail = e.to_string();
            log_reset_step(reset_type, step, "error", &detail);
            Err(format!("{} failed: {}", step, detail))
        }
    }
}

fn schedule_reset_restart(app_handle: tauri::AppHandle, reset_type: String) {
    log_reset_step(&reset_type, "restart_scheduled", "ok", "delay_secs=3");
    std::thread::spawn(move || {
        std::thread::sleep(std::time::Duration::from_secs(3));
        log_reset_step(&reset_type, "unregister_shortcuts", "start", "");
        match app_handle.global_shortcut().unregister_all() {
            Ok(_) => log_reset_step(&reset_type, "unregister_shortcuts", "ok", ""),
            Err(e) => log_reset_step(&reset_type, "unregister_shortcuts", "error", &e.to_string()),
        }
        log_reset_step(&reset_type, "restart", "start", "");
        app_handle.restart();
    });
}

// 重置软件
#[tauri::command]
pub fn reset_software(app_handle: tauri::AppHandle, reset_type: String) -> Result<(), String> {
    let normalized_reset_type = if reset_type.is_empty() {
        "all".to_string()
    } else {
        reset_type
    };

    log_reset_step(&normalized_reset_type, "request", "start", "");

    match normalized_reset_type.as_str() {
        "all" => {
            log_reset_db_result(&normalized_reset_type, "clear_apps", db::clear_apps())?;
            log_reset_db_result(&normalized_reset_type, "clear_bookmarks", db::clear_bookmarks())?;
            crate::search::clear_desktop_files_cache_for_reset(&normalized_reset_type)?;
        }
        "apps" => {
            log_reset_db_result(&normalized_reset_type, "clear_apps", db::clear_apps())?;
        }
        "bookmarks" => {
            log_reset_db_result(&normalized_reset_type, "clear_bookmarks", db::clear_bookmarks())?;
        }
        "desktopFiles" => {
            crate::search::clear_desktop_files_cache_for_reset(&normalized_reset_type)?;
        }
        _ => {
            log_reset_step(&normalized_reset_type, "request", "error", "unsupported_reset_type");
            return Err(format!("不支持的重置类型: {}", normalized_reset_type));
        }
    }

    db::set_show_progress_on_restart_with_kind(&app_handle, &normalized_reset_type);
    log_reset_step(&normalized_reset_type, "set_progress_on_restart", "ok", "");
    log_reset_step(&normalized_reset_type, "request", "ok", "");
    schedule_reset_restart(app_handle, normalized_reset_type);

    Ok(())
}

// 设置自动检查更新（使用 app.json 存储）
#[tauri::command]
pub fn set_auto_update_check(app_handle: tauri::AppHandle, enabled: bool) -> Result<(), String> {
    json_config::set_app_config_value(&app_handle, "auto_update_check", enabled)
}

// 获取自动检查更新设置（从 app.json 读取）
#[tauri::command]
pub fn get_auto_update_check(app_handle: tauri::AppHandle) -> bool {
    json_config::get_app_config_value(&app_handle, "auto_update_check").unwrap_or(true)
}

// 退出应用
#[tauri::command]
pub fn exit_application(app_handle: tauri::AppHandle) {
    // 取消注册全局快捷键
    let _ = app_handle.global_shortcut().unregister_all();
    // 退出应用
    app_handle.exit(0);
}

// 设置界面语言（使用 app.json 存储）
#[tauri::command]
pub fn set_language(app_handle: tauri::AppHandle, language: String) -> Result<(), String> {
    info!("🌐 设置语言: {} (保存到 app.json)", language);
    json_config::set_app_config_value(&app_handle, "language", language)?;
    // 更新托盘菜单语言
    crate::tray::update_tray_language(&app_handle);
    Ok(())
}

// 获取界面语言（从 app.json 读取）
#[tauri::command]
pub fn get_language(app_handle: tauri::AppHandle) -> String {
    json_config::get_app_config_value(&app_handle, "language")
        .unwrap_or_else(|| "zh-CN".to_string())
}

// 内部使用，不作为命令暴露（从 app.json 读取）
pub fn get_language_internal(app_handle: &tauri::AppHandle) -> String {
    json_config::get_app_config_value(app_handle, "language")
        .unwrap_or_else(|| "zh-CN".to_string())
}

// ============= 翻译设置（存储在 app.json）=============

// 设置默认翻译引擎
#[tauri::command]
pub fn set_translation_engine(app_handle: tauri::AppHandle, engine: String) -> Result<(), String> {
    info!("🔄 设置翻译引擎: {} (保存到 app.json)", engine);
    json_config::set_app_config_value(&app_handle, "translation_engine", engine)
}

// 获取默认翻译引擎
#[tauri::command]
pub fn get_translation_engine(app_handle: tauri::AppHandle) -> String {
    json_config::get_app_config_value(&app_handle, "translation_engine")
        .unwrap_or_else(|| "bing".to_string())
}

// 设置离线模型激活状态
#[tauri::command]
pub fn set_offline_model_activated(app_handle: tauri::AppHandle, activated: bool) -> Result<(), String> {
    json_config::set_app_config_value(&app_handle, "offline_model_activated", activated)
}

// 获取离线模型激活状态
#[tauri::command]
pub fn get_offline_model_activated(app_handle: tauri::AppHandle) -> bool {
    json_config::get_app_config_value(&app_handle, "offline_model_activated").unwrap_or(false)
}
