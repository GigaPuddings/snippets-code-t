mod alarm;
mod apps;
mod bookmarks;
mod config;
mod db;
mod hotkey;
mod migrate;
mod search;
mod tray;
mod window;

use crate::alarm::{
    add_alarm_card, delete_alarm_card, get_alarm_cards, toggle_alarm_card, update_alarm_card,
};
use crate::db::{backup_database, get_db_path, restore_database, set_custom_db_path};
use crate::window::{hotkey_config, start_mouse_tracking};
use apps::{get_installed_apps, open_app_command};
use bookmarks::{get_browser_bookmarks, open_url};
use hotkey::*;
use log::info;
use search::*;
use std::sync::Mutex;
use std::sync::OnceLock;
use tauri::Emitter;
use tauri::WindowEvent;
use tauri::{AppHandle, Manager};
use tauri_plugin_autostart::MacosLauncher;
use tauri_plugin_http::reqwest;
use tauri_plugin_log::{Target, TargetKind};
use tauri_plugin_notification::NotificationExt;
use window::show_hide_window_command;

// 定义一个全局静态变量来存储 AppHandle
pub static APP: OnceLock<AppHandle> = OnceLock::new();

// 存储上一次的搜索框位置
static OLD_RECT: Mutex<Option<(f64, f64, f64, f64)>> = Mutex::new(None);

// 鼠标事件穿透
#[tauri::command]
fn ignore_cursor_events(window: tauri::Window, ignore: bool, rect: Option<(f64, f64, f64, f64)>) {
    if let Some(new_rect) = rect {
        let mut old_rect = OLD_RECT.lock().unwrap();

        // 只有当新旧值不同时才更新
        if old_rect.is_none() || old_rect.unwrap() != new_rect {
            info!("搜索框位置已更新: {:?}", new_rect);
            *old_rect = Some(new_rect);

            let (left, right, top, bottom) = new_rect;
            // 更新搜索框位置
            window::update_search_area(left, right, top, bottom);
        }
        // 如果需要穿透，则设置穿透
        if ignore {
            // info!("设置鼠标穿透: {}", ignore);
            window.set_ignore_cursor_events(true).unwrap();
            // 启动鼠标位置跟踪
            start_mouse_tracking();
        } else {
            // info!("取消鼠标穿透");
            window.set_ignore_cursor_events(false).unwrap();
        }
    }
}

// 前端创建窗口
#[tauri::command]
async fn hotkey_config_command() -> Result<(), String> {
    hotkey_config();
    Ok(())
}

// 获取图标
#[tauri::command]
async fn fetch_favicon(url: String) -> Result<String, String> {
    let client = reqwest::Client::new();

    // 尝试不同的图标源
    let icon_urls = vec![
        format!("https://www.google.com/s2/favicons?domain={}&sz=32", url),
        format!("https://api.iowen.cn/favicon/{}.png", url),
        format!("https://favicon.cccyun.cc/{}", url),
        format!("https://icon.horse/icon/{}", url),
        format!("https://{}/favicon.ico", url),
    ];

    for icon_url in icon_urls {
        if let Ok(response) = client.get(&icon_url).send().await {
            if response.status().is_success() {
                if let Ok(bytes) = response.bytes().await {
                    return Ok(format!(
                        "data:image/png;base64,{}",
                        base64::Engine::encode(&base64::engine::general_purpose::STANDARD, &bytes)
                    ));
                }
            }
        }
    }

    // 返回默认图标
    Ok("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjwvc3ZnPg==".to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_autostart::init(
            MacosLauncher::LaunchAgent,
            Some(vec!["--flag1", "--flag2"]),
        ))
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_dialog::init())
        // 单实例插件：防止程序多开
        .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| {
            let windows = app.webview_windows();
            windows
                .values()
                .next()
                .expect("Sorry, no window found")
                .set_focus()
                .expect("Can't Bring Window to Focus");
        }))
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_log::Builder::new().build())
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .plugin(tauri_plugin_os::init())
        .plugin(
            tauri_plugin_log::Builder::new()
                .targets([
                    Target::new(TargetKind::Stdout),
                    Target::new(TargetKind::LogDir { file_name: None }),
                    Target::new(TargetKind::Webview),
                ])
                .build(),
        )
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_sql::Builder::default().build())
        .setup(|app| {
            // 在应用启动时初始化 APP
            APP.set(app.handle().clone()).unwrap();
            // 创建托盘图标（如果需要）
            #[cfg(all(desktop))]
            {
                let handle = app.handle();
                tray::create_tray(handle)?; // 调用 tray 模块中的创建托盘函数
            }
            // Register Global Shortcut
            match register_shortcut("all") {
                Ok(()) => {}
                Err(e) => app
                    .notification()
                    .builder()
                    .title("Failed to register global shortcut")
                    .body(&e)
                    .icon("pot")
                    .show()
                    .unwrap(),
            }
            // 启动闹钟检查服务
            alarm::start_alarm_service(app.handle().clone());
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .on_window_event(|window, event| {
            // 监听主窗口事件
            if window.label() == "main" {
                match event {
                    WindowEvent::Focused(true) => {
                        window.emit("windowFocused", ()).unwrap();
                    }
                    _ => {}
                }
            }
        })
        .invoke_handler(tauri::generate_handler![
            register_shortcut_by_frontend,
            get_shortcuts,
            ignore_cursor_events,
            hotkey_config_command,
            get_installed_apps,
            open_app_command,
            show_hide_window_command,
            get_browser_bookmarks,
            open_url,
            get_db_path,
            backup_database,
            restore_database,
            fetch_favicon,
            set_custom_db_path,
            get_alarm_cards,
            add_alarm_card,
            update_alarm_card,
            delete_alarm_card,
            toggle_alarm_card,
            get_search_engines,
            update_search_engines,
            get_default_engines,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
