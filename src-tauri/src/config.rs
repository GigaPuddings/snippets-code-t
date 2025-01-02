use serde_json::{json, Value};
use std::path::PathBuf;
use tauri_plugin_global_shortcut::{Code, Modifiers};
use tauri_plugin_store::StoreBuilder;
// use mouse_position::mouse_position::{Mouse, Position};

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
                    _ => return Err(format!("不支持的按键: {}", key)),
                });
            }
        }
    }

    code.map(|code| (modifiers, code))
        .ok_or_else(|| "未指定按键".to_string())
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
