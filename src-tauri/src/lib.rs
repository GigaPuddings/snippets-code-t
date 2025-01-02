mod config;
mod hotkey;
mod tray;
mod window;
mod apps;
mod db;


use crate::window::{hotkey_config, hotkey_search, start_mouse_tracking};
use apps::{get_installed_apps, open_app_command};
use hotkey::*;
use log::info;
use tauri::Emitter;
use std::sync::Mutex;
use std::sync::OnceLock;
use tauri::WindowEvent;
use tauri::{AppHandle, Manager};
use tauri_plugin_log::{Target, TargetKind};
use tauri_plugin_notification::NotificationExt;


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
            start_mouse_tracking(window.clone());
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

// 显示隐藏窗口
#[tauri::command]
fn show_hide_window_command(label: &str) -> Result<(), String> {
    match label {
        "search" => {
            hotkey_search();
        }
        "config" => {
            hotkey_config();
        }
        _ => {
            return Err("Invalid label".to_string());
        }
    }
    Ok(())
} 




#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
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
        .plugin(
          tauri_plugin_sql::Builder::default()
            .add_migrations("sqlite:code.db", db::migrate::get_migrate())
            .build())
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
            // 获取已安装应用直接发送给前端
            let apps = get_installed_apps();
            app.emit("installedApps", &apps).unwrap();
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .on_window_event(|window, event| {
            // 监听主窗口事件
            if window.label() == "main" {
                match event {
                    WindowEvent::Focused(true) => {
                        // info!("窗口获得焦点");
                        // 启用鼠标穿透并开启监听
                        window.set_ignore_cursor_events(true).unwrap();
                        start_mouse_tracking(window.clone());
                        
                        // 通知前端窗口获得焦点
                        window.emit("windowFocused", ()).unwrap();
                    }
                    _ => {}
                }
            }
        })
        .invoke_handler(tauri::generate_handler![
            register_shortcut_by_frontend,
            ignore_cursor_events,
            hotkey_config_command,
            get_installed_apps,
            open_app_command,
            show_hide_window_command,
            // sql::search_contents,
            // sql::get_categories,
            // sql::create_category,
            // sql::update_category,
            // sql::delete_category,
            // sql::get_contents,
            // sql::create_content,
            // sql::update_content,
            // sql::delete_content,
            // sql::search_contents_by_keyword,
            // sql::get_contents_by_category,
            // sql::create_content_with_category
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
