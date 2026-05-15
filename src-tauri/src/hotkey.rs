use crate::app_config;
use crate::config::parse_hotkey;
use crate::json_config;
use crate::window::{
    hotkey_config, hotkey_dark_mode, hotkey_screenshot, hotkey_search_wrapper,
    hotkey_selection_translate, hotkey_translate,
};
use crate::APP;
use log::warn;
use tauri::AppHandle;
use tauri_plugin_global_shortcut::{GlobalShortcutExt, Shortcut, ShortcutState};

struct HotkeySpec {
    name: &'static str,
    plugin_id: Option<&'static str>,
    handler: fn(),
}

const HOTKEY_SPECS: &[HotkeySpec] = &[
    HotkeySpec {
        name: "search",
        plugin_id: None,
        handler: hotkey_search_wrapper,
    },
    HotkeySpec {
        name: "config",
        plugin_id: None,
        handler: hotkey_config,
    },
    HotkeySpec {
        name: "translate",
        plugin_id: Some("translation"),
        handler: hotkey_translate,
    },
    HotkeySpec {
        name: "selection_translate",
        plugin_id: Some("translation"),
        handler: hotkey_selection_translate,
    },
    HotkeySpec {
        name: "screenshot",
        plugin_id: Some("screenshot"),
        handler: hotkey_screenshot,
    },
    HotkeySpec {
        name: "dark_mode",
        plugin_id: Some("system-theme"),
        handler: hotkey_dark_mode,
    },
];

fn hotkey_spec(name: &str) -> Option<&'static HotkeySpec> {
    HOTKEY_SPECS.iter().find(|spec| spec.name == name)
}

// 注册单个快捷键的核心函数（使用 app.json 存储）
fn register<F>(_app_handle: &AppHandle, name: &str, handler: F, key: &str) -> Result<(), String>
where
    F: Fn() + Send + Sync + 'static,
{
    if let Some(plugin_id) = hotkey_spec(name).and_then(|spec| spec.plugin_id) {
        if !app_config::is_plugin_enabled(_app_handle, plugin_id) {
            return Ok(());
        }
    }

    let hotkey = {
        if key.is_empty() {
            // 从 app.json 读取快捷键配置
            let field_name = format!("{}_hotkey", name);
            json_config::get_app_config_value::<String>(_app_handle, &field_name)
                .unwrap_or_default()
        } else {
            key.to_string()
        }
    };

    // 获取应用句柄
    let app = match APP.get() {
        Some(app) => app,
        None => return Err("应用未初始化".to_string()),
    };

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
        match manager.on_shortcut(shortcut, move |_app_handle, _hotkey, event| {
            if event.state == ShortcutState::Pressed {
                // info!("快捷键：{} 被触发", hotkey);
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
    let app_handle = match APP.get() {
        Some(app) => app,
        None => return Err("应用未初始化".to_string()),
    };

    if shortcut == "all" {
        for spec in HOTKEY_SPECS {
            register(app_handle, spec.name, spec.handler, "")?;
        }
    } else if let Some(spec) = hotkey_spec(shortcut) {
        register(app_handle, spec.name, spec.handler, "")?;
    }

    Ok(())
}

#[tauri::command]
pub fn register_shortcut_by_frontend(
    app_handle: AppHandle,
    name: &str,
    shortcut: &str,
) -> Result<(), String> {
    if !shortcut.is_empty() {
        if let Some(plugin_id) = hotkey_spec(name).and_then(|spec| spec.plugin_id) {
            if !app_config::is_plugin_enabled(&app_handle, plugin_id) {
                return Err(format!("插件 '{}' 未启用，无法注册快捷键", plugin_id));
            }
        }
    }

    // 保存快捷键到 app.json
    let field_name = format!("{}_hotkey", name);
    log::info!("🔑 注册快捷键: {} = {} (保存到 app.json)", name, shortcut);
    json_config::set_app_config_value(&app_handle, &field_name, shortcut)?;

    if let Some(spec) = hotkey_spec(name) {
        register(&app_handle, spec.name, spec.handler, shortcut)?;
    } else {
        return Err("未知的快捷键名称".to_string());
    }

    Ok(())
}

#[tauri::command]
pub fn get_shortcuts(
    app_handle: AppHandle,
) -> Result<(String, String, String, String, String, String), String> {
    // 从 app.json 读取所有快捷键配置（静默读取，不输出日志）
    let search_hotkey = json_config::get_app_config_value::<String>(&app_handle, "search_hotkey")
        .unwrap_or_default();
    let config_hotkey = json_config::get_app_config_value::<String>(&app_handle, "config_hotkey")
        .unwrap_or_default();
    let translate_hotkey =
        json_config::get_app_config_value::<String>(&app_handle, "translate_hotkey")
            .unwrap_or_default();
    let selection_translate_hotkey =
        json_config::get_app_config_value::<String>(&app_handle, "selection_translate_hotkey")
            .unwrap_or_default();
    let screenshot_hotkey =
        json_config::get_app_config_value::<String>(&app_handle, "screenshot_hotkey")
            .unwrap_or_default();
    let dark_mode_hotkey =
        json_config::get_app_config_value::<String>(&app_handle, "dark_mode_hotkey")
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
