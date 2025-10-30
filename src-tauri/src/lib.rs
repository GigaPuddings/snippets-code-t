mod alarm;
mod apps;
mod bookmarks;
mod cache;
mod config;
mod dark_mode;
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
use crate::db::{
    add_search_history, backup_database, get_db_path, get_search_history, restore_database,
    set_custom_db_path,add_app, update_app, delete_app, get_apps,
    add_bookmark, update_bookmark, delete_bookmark, get_bookmarks,
    cleanup_old_search_history, cleanup_old_icon_cache, optimize_database,
};
use crate::translation::translate_text;
use crate::update::{
    check_update, check_update_manually, get_update_info, get_update_status, perform_update,
};
use crate::window::{
  hotkey_config, insert_text_to_last_window, start_mouse_tracking, get_window_info, capture_screen_area,
  copy_to_clipboard, save_screenshot_to_file, get_pixel_color, get_screen_preview, get_all_windows,
  create_pin_window, get_pin_image_data, copy_image_to_clipboard, save_pin_image, frontend_log
};
use crate::dark_mode::{
    load_config as load_dark_mode_config, save_config as save_dark_mode_config,
    get_location_by_ip, calculate_sun_times, get_windows_timezone_info,
    set_windows_dark_mode, get_windows_dark_mode, toggle_theme, 
    start_scheduler, stop_scheduler, get_current_status as get_dark_mode_status,
    DarkModeConfig, LocationInfo, SunTimes
};
use apps::open_app_command;
use bookmarks::open_url;
use cache::clear_cache;
use hotkey::*;
use icon::{init_app_and_bookmark_icons, extract_icon_from_app};
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

// 清理旧日志文件（保留最近7天的日志）
fn cleanup_old_logs() {
    use std::fs;
    use std::time::{SystemTime, Duration};
    
    let app = match APP.get() {
        Some(app) => app,
        None => return,
    };
    
    // 获取日志目录
    let log_dir = match app.path().app_log_dir() {
        Ok(dir) => dir,
        Err(e) => {
            log::warn!("无法获取日志目录: {}", e);
            return;
        }
    };
    
    if !log_dir.exists() {
        return;
    }
    
    let now = SystemTime::now();
    let seven_days_ago = now - Duration::from_secs(7 * 24 * 3600);
    
    let mut cleaned_count = 0;
    let mut cleaned_size = 0u64;
    
    // 遍历日志目录
    if let Ok(entries) = fs::read_dir(&log_dir) {
        for entry in entries.flatten() {
            let path = entry.path();
            
            // 只处理.log文件
            if path.is_file() && path.extension().and_then(|s| s.to_str()) == Some("log") {
                // 检查文件修改时间
                if let Ok(metadata) = fs::metadata(&path) {
                    if let Ok(modified) = metadata.modified() {
                        // 删除7天前的日志文件
                        if modified < seven_days_ago {
                            cleaned_size += metadata.len();
                            if fs::remove_file(&path).is_ok() {
                                cleaned_count += 1;
                            }
                        }
                    }
                }
            }
        }
    }
    
    if cleaned_count > 0 {
        log::info!("清理了 {} 个旧日志文件，释放空间 {} KB", cleaned_count, cleaned_size / 1024);
    }
}

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

// ============= Auto Dark Mode 相关命令 =============

// 获取Auto Dark Mode配置
#[tauri::command]
async fn get_dark_mode_config(app_handle: AppHandle) -> Result<DarkModeConfig, String> {
    Ok(load_dark_mode_config(&app_handle))
}

// 保存Auto Dark Mode配置
#[tauri::command]
async fn save_dark_mode_config_command(app_handle: AppHandle, config: DarkModeConfig) -> Result<(), String> {
    save_dark_mode_config(&app_handle, &config)?;
    
    // 如果启用了自动切换，启动调度器
    if config.enabled {
        start_scheduler(app_handle)?;
    } else {
        stop_scheduler();
    }
    
    Ok(())
}

// 获取地理位置信息
#[tauri::command]
async fn get_location_info() -> Result<LocationInfo, String> {
    get_location_by_ip().await
}

// 计算日出日落时间
#[tauri::command]
async fn calculate_sun_times_command(latitude: f64, longitude: f64, timezone_offset: i32) -> Result<SunTimes, String> {
    calculate_sun_times(latitude, longitude, timezone_offset)
}

// 获取Windows时区信息
#[tauri::command]
async fn get_timezone_info() -> Result<(String, i32), String> {
    get_windows_timezone_info()
}

// 手动切换系统主题
#[tauri::command]
async fn toggle_system_theme(app_handle: AppHandle) -> Result<bool, String> {
    toggle_theme(Some(&app_handle))
}

// 设置系统主题（直接设置）
#[tauri::command]
async fn set_system_theme(dark_mode: bool) -> Result<(), String> {
    set_windows_dark_mode(dark_mode)
}

// 获取当前系统主题
#[tauri::command]
async fn get_system_theme() -> Result<bool, String> {
    get_windows_dark_mode()
}

// 获取Auto Dark Mode状态
#[tauri::command]
async fn get_dark_mode_status_command(app_handle: AppHandle) -> Result<serde_json::Value, String> {
    get_dark_mode_status(&app_handle)
}

// 启动Auto Dark Mode服务
#[tauri::command]
async fn start_dark_mode_service(app_handle: AppHandle) -> Result<(), String> {
    start_scheduler(app_handle)
}

// 停止Auto Dark Mode服务
#[tauri::command]
async fn stop_dark_mode_service() -> Result<(), String> {
    stop_scheduler();
    Ok(())
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
        .plugin(
            tauri_plugin_log::Builder::new()
                .targets([
                    Target::new(TargetKind::Stdout),
                    Target::new(TargetKind::LogDir { file_name: None }),
                    Target::new(TargetKind::Webview),
                ])
                .build(),
        )
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_sql::Builder::default().build())
        .setup(|app| {
            // 在应用启动时初始化 APP
            APP.set(app.handle().clone()).unwrap();
            
            // 使用分阶段异步初始化数据库（优先初始化关键表）
            tauri::async_runtime::spawn(async move {
                if let Err(e) = db::init_db_async().await {
                    log::error!("数据库初始化失败: {}", e);
                    // 回退到同步初始化
                    if let Err(e2) = db::init_db() {
                        log::error!("回退数据库初始化也失败: {}", e2);
                    }
                }
                
                // 在后台执行数据库清理和优化（延迟30秒避免影响启动速度）
                tokio::time::sleep(tokio::time::Duration::from_secs(30)).await;
                
                // 清理过期数据
                if let Err(e) = cleanup_old_search_history() {
                    log::warn!("清理搜索历史失败: {}", e);
                }
                if let Err(e) = cleanup_old_icon_cache() {
                    log::warn!("清理图标缓存失败: {}", e);
                }
                
                // 优化数据库
                if let Err(e) = optimize_database() {
                    log::warn!("数据库优化失败: {}", e);
                }
                
                // 清理旧日志文件（保留最近7天）
                cleanup_old_logs();
            });
            // 异步创建托盘图标（避免阻塞启动）
            #[cfg(all(desktop))]
            {
                let handle = app.handle().clone();
                tauri::async_runtime::spawn(async move {
                    if let Err(e) = tray::create_tray(&handle) {
                        log::error!("托盘创建失败: {:?}", e);
                    }
                });
            }
            // Register Global Shortcut
            match register_shortcut("all") {
                Ok(()) => {}
                Err(e) => {
                    let _ = app
                        .notification()
                        .builder()
                        .title("snippets-code")
                        .body(&format!("快捷键注册失败：{}", e))
                        .show();
                }
            }
            // 启动代办提醒检查服务
            alarm::start_alarm_service(app.handle().clone());

            // 启动Auto Dark Mode服务（如果已启用）
            {
                let app_handle = app.handle().clone();
                tauri::async_runtime::spawn(async move {
                    let config = load_dark_mode_config(&app_handle);
                    if config.enabled {
                        if let Err(e) = start_scheduler(app_handle) {
                            log::warn!("启动Auto Dark Mode服务失败: {}", e);
                        } else {
                            log::info!("Auto Dark Mode服务已启动");
                        }
                    }
                });
            }

            // 确保更新状态是最新的
            {
                let app_handle = app.handle().clone();
                // 先检查并重置更新状态，避免更新后启动问题
                let path = std::path::PathBuf::from("store.bin");
                if let Ok(store) = tauri_plugin_store::StoreBuilder::new(&app_handle, path).build() {
                    let _ = store.delete("update_available");
                    let _ = store.save();
                }
            }

            // 延迟初始化应用和书签图标（降低启动压力）
            let app_handle_clone = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 延迟5秒后才开始加载图标，确保窗口已完全加载
                tokio::time::sleep(tokio::time::Duration::from_secs(5)).await;
                init_app_and_bookmark_icons(&app_handle_clone);
            });

            // 延迟启动更新检查（大幅降低优先级，避免影响启动）
            let app_handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 延迟10秒后检查更新，确保应用已完全启动
                tokio::time::sleep(tokio::time::Duration::from_secs(10)).await;
                if get_auto_update_check(app_handle.clone()) {
                    if let Err(e) = check_update(&app_handle, false).await {
                        log::warn!("启动时检查更新失败: {}", e);
                    }
                }
            });

            // 检查是否是自动启动
            let is_auto_start = match std::env::args().collect::<Vec<String>>() {
                args => args.iter().any(|arg| arg == "--flag1" || arg == "--flag2"),
            };

            if is_auto_start {
                // 开机自启时不显示窗口，静默启动提升速度
                log::info!("检测到开机自启动，采用静默启动模式");
            } else {
                // 手动启动时显示加载页面
                if let Some(loading_window) = app.get_webview_window("loading") {
                    loading_window.show().unwrap();

                    // 优化后台加载过程，减少等待时间并使用异步睡眠
                    let loading_window_clone = loading_window.clone();
                    tauri::async_runtime::spawn(async move {
                        // 进一步减少等待时间至1秒，提升用户体验
                        tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;

                        // 关闭加载窗口
                        let _ = loading_window_clone.hide();

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
            extract_icon_from_app,            // 提取应用图标
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
            add_search_history,               // 添加搜索历史
            get_search_history,               // 获取搜索历史
            get_window_info,                  // 获取窗口信息
            capture_screen_area,              // 捕获屏幕区域
            copy_to_clipboard,                // 复制图片到剪切板
            save_screenshot_to_file,          // 保存截图到文件
            get_pixel_color,                  // 获取像素颜色
            get_screen_preview,               // 获取屏幕预览
            get_all_windows,                  // 获取所有窗口信息
            create_pin_window,                // 创建贴图窗口
            get_pin_image_data,               // 获取贴图窗口图片数据
            copy_image_to_clipboard,          // 复制图片到剪贴板
            save_pin_image,                   // 保存贴图图片
            frontend_log,                     // 前端日志转发
            get_dark_mode_config,             // 获取Auto Dark Mode配置
            save_dark_mode_config_command,    // 保存Auto Dark Mode配置
            get_location_info,                // 获取地理位置信息
            calculate_sun_times_command,      // 计算日出日落时间
            get_timezone_info,                // 获取Windows时区信息
            toggle_system_theme,              // 手动切换系统主题
            set_system_theme,                 // 设置系统主题
            get_system_theme,                 // 获取当前系统主题
            get_dark_mode_status_command,     // 获取Auto Dark Mode状态
            start_dark_mode_service,          // 启动Auto Dark Mode服务
            stop_dark_mode_service,           // 停止Auto Dark Mode服务
            add_app,                          // 添加应用
            update_app,                       // 更新应用
            delete_app,                       // 删除应用
            get_apps,                         // 获取所有应用
            add_bookmark,                     // 添加书签
            update_bookmark,                  // 更新书签
            delete_bookmark,                  // 删除书签
            get_bookmarks,                    // 获取所有书签
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
