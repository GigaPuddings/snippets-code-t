mod alarm;
mod apps;
mod bookmarks;
mod cache;
mod config;
mod db;
mod hotkey;
mod icon;
mod search;
mod translation;
mod tray;
mod update;
mod window;

use crate::alarm::{
    add_alarm_card, delete_alarm_card, get_alarm_cards, remind_notification_window,
    toggle_alarm_card, update_alarm_card,
};
use crate::config::{
    exit_application, get_auto_update_check, reset_software, set_auto_update_check,
};
use crate::db::{backup_database, get_db_path, restore_database, set_custom_db_path};
use crate::translation::translate_text;
use crate::update::{
    check_update, check_update_manually, get_update_info, get_update_status, perform_update,
};
use crate::window::{hotkey_config, insert_text_to_last_window, start_mouse_tracking};
use apps::open_app_command;
use bookmarks::open_url;
use cache::clear_cache;
use hotkey::*;
use icon::init_app_and_bookmark_icons;
use log::info;
use search::*;
use std::sync::Mutex;
use std::sync::OnceLock;
use tauri::{AppHandle, Manager};
use tauri_plugin_autostart::MacosLauncher;
use tauri_plugin_log::{Target, TargetKind};
use tauri_plugin_notification::NotificationExt;
use window::{create_update_window, show_hide_window_command};

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

// 前端创建config窗口
#[tauri::command]
async fn hotkey_config_command() -> Result<(), String> {
    hotkey_config();
    Ok(())
}

// 前端创建update窗口
#[tauri::command]
async fn hotkey_update_command() -> Result<(), String> {
    create_update_window();
    Ok(())
}

// 获取网站favicon
#[tauri::command]
async fn fetch_favicon(url: String) -> String {
    match icon::fetch_favicon_async(&url).await {
        Some(icon_data) => icon_data,
        None => "".to_string(),
    }
}

// 设置自动失焦隐藏
#[tauri::command]
fn set_auto_hide_on_blur(app_handle: tauri::AppHandle, enabled: bool) -> Result<(), String> {
    config::set_value(&app_handle, "autoHideOnBlur", enabled);
    Ok(())
}

// 获取自动失焦隐藏设置
#[tauri::command]
fn get_auto_hide_on_blur(app_handle: tauri::AppHandle) -> bool {
    match config::get_value(&app_handle, "autoHideOnBlur") {
        Some(value) => value.as_bool().unwrap_or(true),
        None => true, // 默认为开启
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
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
            // 启动代办提醒检查服务
            alarm::start_alarm_service(app.handle().clone());

            // 启动时检查更新
            let app_handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 先检查用户是否开启了自动更新
                if get_auto_update_check(app_handle.clone()) {
                    check_update(&app_handle, false).await.unwrap();
                }
            });

            // 初始化应用和书签图标（后台线程）
            let app_handle_clone = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 延迟1秒后开始加载图标，避免影响应用启动速度
                tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;
                init_app_and_bookmark_icons(&app_handle_clone);
            });

            // 检查是否是自动启动
            let is_auto_start = match std::env::args().collect::<Vec<String>>() {
                args => args.iter().any(|arg| arg == "--flag1" || arg == "--flag2"),
            };

            if !is_auto_start {
                // 显示加载页面，并在一段时间后显示主窗口
                if let Some(loading_window) = app.get_webview_window("loading") {
                    loading_window.show().unwrap();

                    // 模拟后台加载过程，5秒后显示主窗口并关闭加载窗口
                    let loading_window_clone = loading_window.clone();
                    tauri::async_runtime::spawn(async move {
                        // 模拟加载过程
                        std::thread::sleep(std::time::Duration::from_secs(5));

                        // 关闭加载窗口
                        loading_window_clone.hide().unwrap();

                        // 显示主窗口
                        crate::window::hotkey_config();
                    });
                }
            }

            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .on_window_event(|window, event| {
            // 控制搜索窗口失焦是否隐藏
            window::handle_window_event(window, event);
        })
        .invoke_handler(tauri::generate_handler![
            register_shortcut_by_frontend,    // 注册快捷键
            get_shortcuts,                    // 获取快捷键
            ignore_cursor_events,             // 忽略鼠标事件
            hotkey_config_command,            // 快捷键配置
            hotkey_update_command,            // 快捷键更新
            open_app_command,                 // 打开应用
            show_hide_window_command,         // 显示隐藏窗口
            open_url,                         // 打开书签
            insert_text_to_last_window,       // 插入文本到上次活动窗口
            get_db_path,                      // 获取数据库路径
            backup_database,                  // 备份数据库
            restore_database,                 // 恢复数据库
            set_custom_db_path,               // 设置自定义数据库路径
            clear_cache,                      // 清理缓存
            get_alarm_cards,                  // 获取代办提醒卡片
            add_alarm_card,                   // 添加代办提醒卡片
            update_alarm_card,                // 更新代办提醒卡片
            delete_alarm_card,                // 删除代办提醒卡片
            toggle_alarm_card,                // 切换代办提醒卡片
            get_search_engines,               // 获取搜索引擎
            update_search_engines,            // 更新搜索引擎
            get_default_engines,              // 获取默认搜索引擎
            remind_notification_window,       // 提醒通知窗口
            get_update_status,                // 获取更新状态
            get_update_info,                  // 获取更新信息
            perform_update,                   // 执行更新
            check_update_manually,            // 手动检查更新
            fetch_favicon,                    // 获取网站favicon
            search_apps,                      // 搜索应用
            search_bookmarks,                 // 搜索书签
            reset_software,                   // 重置软件
            get_auto_update_check,            // 获取自动检查更新设置
            set_auto_update_check,            // 设置自动检查更新设置
            exit_application,                 // 退出应用
            set_auto_hide_on_blur,            // 设置自动失焦隐藏
            get_auto_hide_on_blur,            // 获取自动失焦隐藏设置
            translate_text,                   // 翻译文本
            get_selection_translate_shortcut, // 获取划词翻译快捷键
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
