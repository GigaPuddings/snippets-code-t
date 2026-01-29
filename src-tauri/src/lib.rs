mod alarm;
mod apps;
mod bookmarks;
mod cache;
mod config;
mod dark_mode;
mod db;
mod github_sync;
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
    get_language, set_language,
    set_translation_engine, get_translation_engine,
    set_offline_model_activated, get_offline_model_activated,
};
use crate::db::{
    get_categories, add_category, edit_category, delete_category, get_uncategorized_id,
    get_fragment_list, add_fragment, delete_fragment, edit_fragment, get_fragment_content,
    search_fragment_content,add_search_history, backup_database, get_db_path, get_data_dir_info,
    get_search_history, restore_database,set_custom_db_path,
    optimize_database,add_app, update_app, delete_app, get_apps,
    add_bookmark, update_bookmark, delete_bookmark, get_bookmarks,
    is_setup_completed, set_setup_completed, set_data_dir_from_setup,
    get_all_app_settings, update_all_app_settings,
    set_auto_start_setting, get_auto_start_setting,
};
use crate::translation::{translate_text, translate_texts};
use crate::update::{
    check_update, check_update_manually, get_update_info, get_update_status, perform_update,
};
use crate::window::{
  hotkey_config, insert_text_to_last_window, start_mouse_tracking, get_window_info, capture_screen_area,
  copy_to_clipboard, save_screenshot_to_file, get_pixel_color, get_screen_preview, get_all_windows,
  create_pin_window, get_pin_image_data, copy_image_to_clipboard, save_pin_image, frontend_log,
  get_screenshot_background, clear_screenshot_background, cleanup_screenshot_resources, create_setup_window, close_setup_window, get_scan_progress_state,
  open_preview_window, close_preview_window
};
use crate::dark_mode::{
    load_config as load_dark_mode_config, save_config as save_dark_mode_config,
    get_location_by_ip, calculate_sun_times, get_windows_timezone_info,
    set_windows_dark_mode, get_windows_dark_mode, toggle_theme, 
    start_scheduler, stop_scheduler, get_current_status as get_dark_mode_status,
    DarkModeConfig, LocationInfo, SunTimes
};
use crate::github_sync::{
    get_user_settings, save_user_settings, verify_github_token,
    sync_to_github, restore_from_github
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

// 使用指定源获取网站favicon
#[tauri::command]
async fn fetch_favicon_with_source(url: String, source: String) -> String {
    let icon_source = icon::IconSource::from_str(&source);
    match icon::fetch_favicon_with_source(&url, icon_source).await {
        Some(icon_data) => icon_data,
        None => "".to_string(),
    }
}

// 设置自动失焦隐藏
#[tauri::command]
fn set_auto_hide_on_blur(_app_handle: tauri::AppHandle, enabled: bool) -> Result<(), String> {
    db::set_setting_bool("autoHideOnBlur", enabled).map_err(|e| e.to_string())
}

// 获取自动失焦隐藏设置
#[tauri::command]
fn get_auto_hide_on_blur(_app_handle: tauri::AppHandle) -> bool {
    db::get_setting_bool("autoHideOnBlur").unwrap_or(true) // 默认为开启
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
    use dark_mode::ThemeMode;
    
    save_dark_mode_config(&app_handle, &config)?;
    
    match config.theme_mode {
        ThemeMode::System => {
            // 跟随系统，不需要调度器，不改变当前主题
            stop_scheduler();
            crate::tray::update_tray_theme_status(&app_handle);
        }
        ThemeMode::Light => {
            // 立即应用浅色主题并停止调度
            stop_scheduler();
            let _ = dark_mode::set_windows_dark_mode(false);
            crate::tray::update_tray_theme_status(&app_handle);
        }
        ThemeMode::Dark => {
            // 立即应用深色主题并停止调度
            stop_scheduler();
            let _ = dark_mode::set_windows_dark_mode(true);
            crate::tray::update_tray_theme_status(&app_handle);
        }
        ThemeMode::Schedule => {
            // 启动定时调度
            start_scheduler(app_handle)?;
        }
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
    // 根据环境选择插件配置：
    // 开发环境(debug)：保留右键菜单、开发者工具和刷新
    // 生产环境(release)：禁用所有默认行为
    let prevent_default = if cfg!(debug_assertions) {
        tauri_plugin_prevent_default::debug()
    } else {
        tauri_plugin_prevent_default::init()
    };

    tauri::Builder::default()
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(prevent_default)
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
            if let Some(window) = windows.values().next() {
                let _ = window.set_focus();
            }
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
                // .filter(|metadata| {
                //     // 过滤掉 tao 的事件循环警告（这些是已知的无害警告）
                //     if metadata.target().starts_with("tao::platform_impl::platform::event_loop") {
                //         return metadata.level() > log::LevelFilter::Warn;
                //     }
                //     // 过滤掉 tauri::manager 关于 asset 的调试信息
                //     if metadata.target() == "tauri::manager" && metadata.level() == log::LevelFilter::Debug {
                //         return false;
                //     }
                //     // 过滤掉 HTTP 客户端的 TRACE/DEBUG 日志（图标加载时会产生大量日志）
                //     if metadata.target().starts_with("hyper_util::") || 
                //        metadata.target().starts_with("reqwest::") ||
                //        metadata.target().starts_with("hyper::") {
                //         return metadata.level() >= log::LevelFilter::Info;
                //     }
                //     true
                // })
                .build(),
        )
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_sql::Builder::default().build())
        .setup(|app| {
            // 在应用启动时初始化 APP
            let _ = APP.set(app.handle().clone());
            
            // 同步初始化数据库
            if let Err(e) = db::init_db() {
                log::error!("数据库初始化失败: {}", e);
            } else if let Err(e) = db::ensure_default_settings() {
                log::error!("初始化默认设置失败: {}", e);
            }

            // === 异步顺序初始化：等待上一个功能完成后再加载下一个 ===
            let app_handle_init = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 第一步：核心UI组件（托盘和快捷键）
                // log::info!("开始初始化核心UI组件...");
                tokio::time::sleep(tokio::time::Duration::from_millis(50)).await;
                
                #[cfg(desktop)]
                {
                    let is_first_run = !db::is_setup_completed_internal(&app_handle_init);
                    if is_first_run {
                        let _ = tray::create_minimal_tray(&app_handle_init);
                        log::info!("最小托盘创建完成");
                    } else if let Ok(()) = tray::create_tray(&app_handle_init) {
                        tray::update_tray_theme_status(&app_handle_init);
                        // log::info!("完整托盘创建完成");
                    }
                }
                
                if let Err(e) = register_shortcut("all") {
                    log::warn!("快捷键注册失败: {}", e);
                    let _ = app_handle_init.notification().builder()
                        .title("snippets-code")
                        .body(format!("快捷键注册失败：{}", e))
                        .show();
                }
                
                // 第二步：后台服务（提醒、Dark Mode、更新状态重置）
                // log::info!("开始初始化后台服务...");
                alarm::start_alarm_service(app_handle_init.clone());
                // log::info!("提醒服务启动完成");
                
                use dark_mode::ThemeMode;
                let config = load_dark_mode_config(&app_handle_init);
                if config.theme_mode == ThemeMode::Schedule {
                    if let Err(e) = start_scheduler(app_handle_init.clone()) {
                        log::warn!("Dark Mode调度器启动失败: {}", e);
                    }
                }
                
                // 重置更新状态
                let path = std::path::PathBuf::from("store.bin");
                if let Ok(store) = tauri_plugin_store::StoreBuilder::new(&app_handle_init, path).build() {
                    let _ = store.delete("update_available");
                    let _ = store.save();
                }
                
                // 第三步：资源加载（应用和书签图标）
                // log::info!("开始加载应用和书签图标...");
                init_app_and_bookmark_icons(&app_handle_init);
                // log::info!("图标加载完成");
                
                // 第四步：网络操作（自动更新检查）
                if get_auto_update_check(app_handle_init.clone()) {
                    // log::info!("开始检查更新...");
                    match check_update(&app_handle_init, false).await {
                        Ok(_) => {},
                        //  => log::info!("更新检查完成"),
                        Err(e) => log::warn!("更新检查失败: {}", e),
                    }
                } else {
                    log::info!("自动更新检查已禁用");
                }
                
                // 第五步：清理任务（搜索历史、图标缓存、数据库优化、日志清理）
                // log::info!("开始执行清理任务...");
                // if let Err(e) = cleanup_old_search_history() {
                //     log::warn!("清理搜索历史失败: {}", e);
                // }
                // if let Err(e) = cleanup_old_icon_cache() {
                //     log::warn!("清理图标缓存失败: {}", e);
                // }
                if let Err(e) = optimize_database() {
                    log::warn!("优化数据库失败: {}", e);
                }
                cleanup_old_logs();
                // log::info!("所有初始化任务完成");
            });

            // 启动窗口逻辑
            let args: Vec<String> = std::env::args().collect();
            let is_auto_start = args.iter().any(|arg| arg == "--flag1" || arg == "--flag2");

            if !is_auto_start {
                let app_handle_startup = app.handle().clone();
                tauri::async_runtime::spawn(async move {
                    tokio::time::sleep(tokio::time::Duration::from_millis(100)).await;
                    
                    if !db::is_setup_completed_internal(&app_handle_startup) {
                        create_setup_window();
                    } else {
                        if let Some(w) = app_handle_startup.get_webview_window("loading") {
                            let _ = w.show();
                            tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;
                            let _ = w.hide();
                        }
                        crate::window::hotkey_config();
                    }
                });
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
            get_data_dir_info,                // 获取数据目录信息
            backup_database,                  // 备份数据库
            restore_database,                 // 恢复数据库
            set_custom_db_path,               // 设置自定义数据库路径
            is_setup_completed,               // 检查是否已完成首次设置
            set_setup_completed,              // 标记首次设置已完成
            set_data_dir_from_setup,          // 从设置向导保存数据目录
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
            fetch_favicon_with_source,        // 使用指定源获取网站favicon
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
            translate_texts,                  // 批量翻译文本
            add_search_history,               // 添加搜索历史
            get_search_history,               // 获取搜索历史
            get_window_info,                  // 获取窗口信息
            capture_screen_area,              // 捕获屏幕区域
            copy_to_clipboard,                // 复制图片到剪切板
            save_screenshot_to_file,          // 保存截图到文件
            get_pixel_color,                  // 获取像素颜色
            get_screen_preview,               // 获取屏幕预览
            get_all_windows,                  // 获取所有窗口信息
            get_screenshot_background,        // 获取预捕获的屏幕背景
            clear_screenshot_background,      // 清理截图背景缓存
            cleanup_screenshot_resources,     // 深度清理截图资源
            create_pin_window,                // 创建贴图窗口
            get_pin_image_data,               // 获取贴图窗口图片数据
            copy_image_to_clipboard,          // 复制图片到剪贴板
            save_pin_image,                   // 保存贴图图片
            frontend_log,                     // 前端日志转发
            close_setup_window,               // 关闭设置向导窗口
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
            get_categories,                   // 获取所有分类
            get_uncategorized_id,             // 获取未分类ID
            add_category,                     // 添加分类
            edit_category,                    // 编辑分类
            delete_category,                  // 删除分类
            get_fragment_list,                // 获取片段列表
            add_fragment,                     // 添加片段
            delete_fragment,                  // 删除片段
            edit_fragment,                    // 编辑片段
            get_fragment_content,             // 获取片段内容
            search_fragment_content,          // 搜索片段内容
            get_user_settings,                // 获取用户设置
            save_user_settings,               // 保存用户设置
            verify_github_token,              // 验证 GitHub Token
            sync_to_github,                   // 同步到 GitHub
            restore_from_github,              // 从 GitHub 恢复
            get_language,                     // 获取界面语言
            set_language,                     // 设置界面语言
            get_scan_progress_state,          // 获取扫描进度状态
            get_all_app_settings,             // 获取所有应用设置
            update_all_app_settings,          // 更新所有应用设置
            set_auto_start_setting,           // 设置自启动偏好
            get_auto_start_setting,           // 获取自启动偏好
            set_translation_engine,           // 设置默认翻译引擎
            get_translation_engine,           // 获取默认翻译引擎
            set_offline_model_activated,      // 设置离线模型激活状态
            get_offline_model_activated,      // 获取离线模型激活状态
            open_preview_window,              // 打开片段预览窗口
            close_preview_window,             // 关闭片段预览窗口
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
