use crate::app_config;
use crate::config::parse_hotkey;
use crate::json_config;
use crate::window::{hotkey_config, hotkey_search_wrapper};
use crate::APP;
use log::{info, warn};
use std::collections::HashMap;
use tauri::AppHandle;
use tauri_plugin_global_shortcut::{GlobalShortcutExt, Shortcut, ShortcutState};

struct HotkeySpec {
    name: &'static str,
    handler: fn(),
}

const HOTKEY_SPECS: &[HotkeySpec] = &[
    HotkeySpec {
        name: "search",
        handler: hotkey_search_wrapper,
    },
    HotkeySpec {
        name: "config",
        handler: hotkey_config,
    },
];

type ShortcutList = (
    String,
    String,
    String,
    String,
    String,
    String,
    String,
    String,
);

fn hotkey_spec(name: &str) -> Option<&'static HotkeySpec> {
    HOTKEY_SPECS.iter().find(|spec| spec.name == name)
}

fn configured_hotkey(app_handle: &AppHandle, name: &str, key: &str) -> String {
    if key.is_empty() {
        let field_name = format!("{}_hotkey", name);
        json_config::get_app_config_value::<String>(app_handle, &field_name).unwrap_or_default()
    } else {
        key.to_string()
    }
}

// 注册单个快捷键的核心函数（使用 app.json 存储）
fn register<F>(_app_handle: &AppHandle, name: &str, handler: F, key: &str) -> Result<(), String>
where
    F: Fn() + Send + Sync + 'static,
{
    let hotkey = configured_hotkey(_app_handle, name, key);

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

        if manager.is_registered(shortcut) {
            info!(
                "[Hotkey] {} shortcut {} already registered, rebind to current handler",
                name, hotkey
            );
            manager
                .unregister(shortcut)
                .map_err(|e| format!("快捷键 '{}' 重新注册前取消失败: {}", hotkey, e))?;
        }

        // 注册新的快捷键
        // on_shortcut 会自动检测冲突（包括本应用内和系统级冲突）
        let name_for_handler = name.to_string();
        match manager.on_shortcut(shortcut, move |_app_handle, _hotkey, event| {
            if event.state == ShortcutState::Pressed {
                info!("[Hotkey] {} triggered", name_for_handler);
                handler();
            }
        }) {
            Ok(_) => {
                info!("[Hotkey] {} shortcut {} registered", name, hotkey);
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

fn register_plugin_hotkey(app_handle: &AppHandle, name: &str, key: &str) -> Result<(), String> {
    let Some(plugin_id) =
        app_config::enabled_plugin_for_capability_item(app_handle, "hotkeys", name)
    else {
        info!(
            "[Hotkey] skip register {} because no enabled plugin declares it",
            name
        );
        return Ok(());
    };

    let action_label = name.to_string();
    register(
        app_handle,
        name,
        move || {
            let label = action_label.clone();
            tauri::async_runtime::spawn(async move {
                if let Err(error) = crate::window::show_hide_window_command(&label, None).await {
                    warn!("[Hotkey] plugin action {} failed: {}", label, error);
                }
            });
        },
        key,
    )?;
    info!("[Hotkey] {} registered for plugin '{}'", name, plugin_id);
    Ok(())
}

fn unregister_configured_shortcut(app_handle: &AppHandle, name: &str) -> Result<(), String> {
    let hotkey = configured_hotkey(app_handle, name, "");
    if hotkey.is_empty() {
        return Ok(());
    }

    let (modifiers, code) = parse_hotkey(&hotkey)?;
    let shortcut = Shortcut::new(modifiers, code);
    let manager = app_handle.global_shortcut();
    if !manager.is_registered(shortcut) {
        info!("[Hotkey] {} shortcut {} already unregistered", name, hotkey);
        return Ok(());
    }

    manager
        .unregister(shortcut)
        .map_err(|e| format!("快捷键 '{}' 取消注册失败: {}", hotkey, e))?;
    info!("[Hotkey] {} shortcut {} unregistered", name, hotkey);
    Ok(())
}

pub fn refresh_plugin_shortcuts(
    app_handle: &AppHandle,
    plugin_id: &str,
    enabled: bool,
) -> Result<(), String> {
    for action in app_config::installed_plugin_capability_actions(app_handle, "hotkeys", false)
        .into_iter()
        .filter(|action| action.plugin_id == plugin_id)
    {
        if enabled {
            register_plugin_hotkey(app_handle, &action.item_id, "")?;
        } else {
            unregister_configured_shortcut(app_handle, &action.item_id)?;
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
        for action in app_config::installed_plugin_capability_actions(app_handle, "hotkeys", true) {
            register_plugin_hotkey(app_handle, &action.item_id, "")?;
        }
    } else if let Some(spec) = hotkey_spec(shortcut) {
        register(app_handle, spec.name, spec.handler, "")?;
    } else {
        register_plugin_hotkey(app_handle, shortcut, "")?;
    }

    Ok(())
}

#[tauri::command]
pub fn register_shortcut_by_frontend(
    app_handle: AppHandle,
    name: &str,
    shortcut: &str,
) -> Result<(), String> {
    if !shortcut.is_empty()
        && hotkey_spec(name).is_none()
        && app_config::enabled_plugin_for_capability_item(&app_handle, "hotkeys", name).is_none()
    {
        return Err(format!("没有已启用插件声明快捷键 '{}'", name));
    }

    // 保存快捷键到 app.json
    let field_name = format!("{}_hotkey", name);
    log::info!("🔑 注册快捷键: {} = {} (保存到 app.json)", name, shortcut);
    json_config::set_app_config_value(&app_handle, &field_name, shortcut)?;

    if let Some(spec) = hotkey_spec(name) {
        register(&app_handle, spec.name, spec.handler, shortcut)?;
    } else {
        register_plugin_hotkey(&app_handle, name, shortcut)?;
    }

    Ok(())
}

#[tauri::command]
pub fn get_shortcuts(app_handle: AppHandle) -> Result<ShortcutList, String> {
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
    let screen_recorder_hotkey =
        json_config::get_app_config_value::<String>(&app_handle, "screen_recorder_hotkey")
            .unwrap_or_default();
    let dark_mode_hotkey =
        json_config::get_app_config_value::<String>(&app_handle, "dark_mode_hotkey")
            .unwrap_or_default();
    let wallpaper_switcher_hotkey =
        json_config::get_app_config_value::<String>(&app_handle, "wallpaper_switcher_hotkey")
            .unwrap_or_default();

    Ok((
        search_hotkey,
        config_hotkey,
        translate_hotkey,
        selection_translate_hotkey,
        screenshot_hotkey,
        screen_recorder_hotkey,
        dark_mode_hotkey,
        wallpaper_switcher_hotkey,
    ))
}

#[tauri::command]
pub fn get_hotkey_config_map(app_handle: AppHandle) -> Result<HashMap<String, String>, String> {
    let mut values = HashMap::new();
    for spec in HOTKEY_SPECS {
        values.insert(
            spec.name.to_string(),
            json_config::get_app_config_value::<String>(
                &app_handle,
                &format!("{}_hotkey", spec.name),
            )
            .unwrap_or_default(),
        );
    }

    for action in app_config::installed_plugin_capability_actions(&app_handle, "hotkeys", false) {
        values.entry(action.item_id.clone()).or_insert_with(|| {
            json_config::get_app_config_value::<String>(
                &app_handle,
                &format!("{}_hotkey", action.item_id),
            )
            .unwrap_or_default()
        });
    }

    Ok(values)
}
