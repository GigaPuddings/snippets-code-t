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
    // 创建崩溃日志捕获
    std::panic::set_hook(Box::new(|panic_info| {
        let location = panic_info.location().unwrap_or_else(|| std::panic::Location::caller());
        let msg = match panic_info.payload().downcast_ref::<&str>() {
            Some(s) => *s,
            None => match panic_info.payload().downcast_ref::<String>() {
                Some(s) => s.as_str(),
                None => "Box<Any>",
            },
        };
        
        let crash_log_path = std::path::PathBuf::from("crash_log.txt");
        if let Ok(mut file) = std::fs::File::create(&crash_log_path) {
            use std::io::Write;
            let _ = writeln!(file, "应用崩溃时间: {:?}", std::time::SystemTime::now());
            let _ = writeln!(file, "崩溃位置: {}:{}:{}", location.file(), location.line(), location.column());
            let _ = writeln!(file, "崩溃信息: {}", msg);
            let _ = writeln!(file, "堆栈跟踪:\n{:?}", std::backtrace::Backtrace::capture());
        }
    }));
    
    info!("应用启动");
    
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
        // 使用单实例插件防止多开
        .plugin(tauri_plugin_single_instance::init(|_app, _argv, _cwd| {
            println!("应用程序已经在运行中!");
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
                .level(log::LevelFilter::Debug)
                .build(),
        )
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_sql::Builder::default().build())
        .setup(|app| {
            info!("开始setup函数");
            
            // 在应用启动时初始化 APP
            APP.set(app.handle().clone()).unwrap();
            info!("初始化APP全局变量完成");
            
            // 创建托盘图标（如果需要）
            #[cfg(all(desktop))]
            {
                info!("准备创建托盘图标");
                let handle = app.handle();
                // 添加错误处理，确保托盘创建失败也不会导致整个应用崩溃
                if let Err(e) = tray::create_tray(handle) {
                    info!("创建托盘图标失败: {:?}, 应用将继续运行", e);
                } else {
                    info!("创建托盘图标成功");
                }
            }
            
            // Register Global Shortcut
            info!("准备注册全局快捷键");
            // 添加错误处理，确保快捷键注册失败不会导致应用崩溃
            if let Err(e) = register_shortcut("all") {
                info!("注册全局快捷键失败: {}, 应用将继续运行", e);
                
                // 可选：显示通知
                let _ = app
                    .notification()
                    .builder()
                    .title("快捷键注册失败")
                    .body(&e)
                    .icon("pot")
                    .show();
            } else {
                info!("注册全局快捷键成功");
            }
            
            // 启动代办提醒检查服务
            info!("准备启动代办提醒服务");
            // 延迟启动非核心服务
            let alarm_handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 延迟3秒再启动，确保主界面已完成加载
                tokio::time::sleep(tokio::time::Duration::from_secs(3)).await;
                info!("开始启动代办提醒服务");
                // 使用try-catch代替catch_unwind，因为AppHandle不是UnwindSafe
                alarm::start_alarm_service(alarm_handle);
                info!("代办提醒服务启动完成");
            });

            // 确保更新状态是最新的
            info!("准备清理更新状态");
            {
                let app_handle = app.handle().clone();
                // 先检查并重置更新状态，避免更新后启动问题
                let path = std::path::PathBuf::from("store.bin");
                match tauri_plugin_store::StoreBuilder::new(&app_handle, path).build() {
                    Ok(store) => {
                        if !store.delete("update_available") {
                            info!("清除更新状态失败");
                        }
                        if let Err(e) = store.save() {
                            info!("保存存储状态失败: {:?}", e);
                        } else {
                            info!("清理更新状态成功");
                        }
                    }
                    Err(e) => {
                        info!("创建存储失败: {:?}", e);
                    }
                }
            }

            // 启动时检查更新
            info!("准备检查更新");
            let app_handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 延迟5秒再检查，减轻启动负担
                tokio::time::sleep(tokio::time::Duration::from_secs(5)).await;
                info!("开始检查应用更新");
                // 先检查用户是否开启了自动更新
                if get_auto_update_check(app_handle.clone()) {
                    if let Err(e) = check_update(&app_handle, false).await {
                        info!("检查更新失败: {}", e);
                    } else {
                        info!("检查更新完成");
                    }
                }
            });

            // 初始化应用和书签图标（后台线程）
            info!("准备初始化应用和书签图标");
            let app_handle_clone = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 延迟5秒后开始加载图标，避免影响应用启动速度
                tokio::time::sleep(tokio::time::Duration::from_secs(5)).await;
                info!("开始初始化应用和书签图标");
                // 直接调用初始化功能
                init_app_and_bookmark_icons(&app_handle_clone);
                info!("应用和书签图标初始化完成");
            });

            // 检查是否是自动启动
            let is_auto_start = match std::env::args().collect::<Vec<String>>() {
                args => args.iter().any(|arg| arg == "--flag1" || arg == "--flag2"),
            };

            info!("是否自动启动: {}", is_auto_start);

            if !is_auto_start {
                // 显示加载页面，并在一段时间后显示主窗口
                if let Some(loading_window) = app.get_webview_window("loading") {
                    info!("准备显示加载窗口");
                    // 添加错误处理
                    if let Err(e) = loading_window.show() {
                        info!("显示加载窗口失败: {:?}", e);
                    } else {
                        info!("显示加载窗口成功");
                    }

                    // 模拟后台加载过程，5秒后显示主窗口并关闭加载窗口
                    let loading_window_clone = loading_window.clone();
                    tauri::async_runtime::spawn(async move {
                        info!("开始模拟加载过程");
                        // 模拟加载过程
                        std::thread::sleep(std::time::Duration::from_secs(5));

                        info!("准备隐藏加载窗口");
                        // 关闭加载窗口，添加错误处理
                        if let Err(e) = loading_window_clone.hide() {
                            info!("隐藏加载窗口失败: {:?}", e);
                        } else {
                            info!("隐藏加载窗口成功");
                        }

                        info!("准备显示主窗口");
                        // 显示主窗口，直接调用
                        crate::window::hotkey_config();
                        info!("主窗口显示完成");
                    });
                } else {
                    info!("加载窗口不存在，直接启动主窗口");
                    // 如果加载窗口不存在，直接启动主窗口
                    crate::window::hotkey_config();
                }
            } else {
                info!("自动启动模式，不显示界面");
            }

            info!("setup函数完成");
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .on_window_event(|window, event| {
            // 直接处理窗口事件
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
