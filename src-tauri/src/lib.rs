mod alarm;
mod app_config;
mod apps;
mod attachment;
mod bookmarks;
mod commands;
mod config;
mod dark_mode;
mod db;
pub mod git_common;
mod git_sync;
mod hotkey;
mod icon;
mod json_config;
mod markdown;
mod search;
mod translation;
mod tray;
mod update;
mod window;

use serde::Serialize;
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
    // get_categories, add_category, edit_category, delete_category, get_uncategorized_id,
    // get_fragment_list, add_fragment, delete_fragment, edit_fragment, get_fragment_content,
    // search_fragment_content, // 已迁移到基于文件系统的 Markdown 存储
    add_search_history, backup_database, get_db_path, get_data_dir_info,
    get_search_history, restore_database,set_custom_db_path,
    optimize_database, optimize_database_cmd, add_app, update_app, delete_app, get_apps,
    add_bookmark, update_bookmark, delete_bookmark, get_bookmarks,
    is_setup_completed, set_setup_completed, set_data_dir_from_setup,
    set_auto_start_setting, 
    get_auto_hide_on_blur, set_auto_hide_on_blur,
};
use crate::translation::translate_text;
use crate::update::{
    check_update, check_update_manually, get_update_info, get_update_status, perform_update,
};
use crate::window::{
  hotkey_config, insert_text_to_last_window, start_mouse_tracking, get_window_info,
  copy_to_clipboard, save_screenshot_to_file, get_pixel_color, get_screen_preview, get_all_windows,
  create_pin_window, copy_image_to_clipboard, save_pin_image, frontend_log,
  get_screenshot_background, get_screenshot_preview, get_cached_window_list, get_cached_monitor_info, clear_screenshot_background, cleanup_screenshot_resources, create_setup_window, close_setup_window, get_scan_progress_state,
  open_preview_window, close_preview_window, close_and_destroy_screenshot_window
};
use crate::dark_mode::{
    load_config as load_dark_mode_config, save_config as save_dark_mode_config,
    get_location_by_ip, calculate_sun_times, toggle_theme, 
    start_scheduler, stop_scheduler, get_current_status as get_dark_mode_status,
    DarkModeConfig, LocationInfo, SunTimes
};

use apps::open_app_command;
use bookmarks::open_url;
use hotkey::*;
use icon::{init_app_and_bookmark_icons, extract_icon_from_app};
use log::info;
use search::*;
use std::sync::Mutex;
use std::sync::OnceLock;
use std::sync::{Arc, RwLock};
use tauri::{AppHandle, Emitter, Listener, Manager};
use tauri_plugin_autostart::MacosLauncher;
use tauri_plugin_log::{Target, TargetKind};
use tauri_plugin_notification::NotificationExt;
use window::{create_update_window, show_hide_window_command};

// 定义一个全局静态变量来存储 AppHandle
pub static APP: OnceLock<AppHandle> = OnceLock::new();

// 存储上一次的搜索框位置
static OLD_RECT: Mutex<Option<(f64, f64, f64, f64)>> = Mutex::new(None);

// App 初始化防抖机制（防止多窗口重复初始化）
use std::time::{Duration, Instant};

static APP_INIT_STATE: Mutex<Option<Instant>> = Mutex::new(None);
static APP_INITIALIZED: Mutex<bool> = Mutex::new(false);

// 注册 App 初始化请求（防抖）
#[tauri::command]
fn register_app_init_request() {
    let mut state = APP_INIT_STATE.lock().unwrap();
    *state = Some(Instant::now());
}

// 检查是否应该执行 App 初始化（防抖检查）
// 等待 500ms，如果没有新的请求，则允许执行
#[tauri::command]
async fn should_execute_app_init() -> bool {
    use tokio::time::sleep;
    
    // 等待 500ms
    sleep(Duration::from_millis(500)).await;
    
    let mut initialized = APP_INITIALIZED.lock().unwrap();
    if *initialized {
        return false; // 已经初始化过了
    }
    
    // 检查是否有更新的请求
    let state = APP_INIT_STATE.lock().unwrap();
    if let Some(last_request) = *state {
        let elapsed = last_request.elapsed();
        // 如果距离最后一次请求已经超过 450ms，说明这是最后一个窗口
        if elapsed >= Duration::from_millis(450) {
            drop(state);
            *initialized = true;
            return true;
        }
    }
    
    false
}

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
            // 重新启动定时调度：确保切换到 Schedule 或修改时间后立即按新配置执行一次检查
            stop_scheduler();
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

// 手动切换系统主题
#[tauri::command]
async fn toggle_system_theme(app_handle: AppHandle) -> Result<bool, String> {
    toggle_theme(Some(&app_handle))
}

// 获取Auto Dark Mode状态
#[tauri::command]
async fn get_dark_mode_status_command(app_handle: AppHandle) -> Result<serde_json::Value, String> {
    get_dark_mode_status(&app_handle)
}

// ============= Markdown 迁移相关命令 =============

// 迁移数据到 Markdown 文件
#[tauri::command]
async fn migrate_to_markdown_command(
    app_handle: AppHandle,
    cache_manager: tauri::State<'_, std::sync::Arc<std::sync::RwLock<markdown::CacheManager>>>,
) -> Result<markdown::MigrationResult, String> {
    let result = markdown::migrate_to_markdown(&app_handle)?;
    
    // 迁移完成后重新加载内存中的 CacheManager，确保与磁盘数据同步
    match cache_manager.write() {
        Ok(mut cache) => {
            if let Err(e) = cache.reload_from_disk() {
                log::warn!("⚠️ [迁移] 重新加载 CacheManager 失败: {}", e);
            } else {
                log::info!("✅ [迁移] CacheManager 已从磁盘重新加载，tags 等元数据已同步");
            }
        }
        Err(e) => {
            log::warn!("⚠️ [迁移] 获取 CacheManager 写锁失败: {}", e);
        }
    }
    
    Ok(result)
}

// 从用户选择的数据库文件迁移
#[tauri::command]
async fn migrate_to_markdown_from_file_command(
    app_handle: AppHandle,
    cache_manager: tauri::State<'_, std::sync::Arc<std::sync::RwLock<markdown::CacheManager>>>,
) -> Result<markdown::MigrationResult, String> {
    let result = markdown::migrate_to_markdown_from_file(&app_handle)?;
    
    // 迁移完成后重新加载内存中的 CacheManager，确保与磁盘数据同步
    match cache_manager.write() {
        Ok(mut cache) => {
            if let Err(e) = cache.reload_from_disk() {
                log::warn!("⚠️ [迁移] 重新加载 CacheManager 失败: {}", e);
            } else {
                log::info!("✅ [迁移] CacheManager 已从磁盘重新加载，tags 等元数据已同步");
            }
        }
        Err(e) => {
            log::warn!("⚠️ [迁移] 获取 CacheManager 写锁失败: {}", e);
        }
    }
    
    Ok(result)
}

// 完成迁移：移除数据库中的 fragments 和 categories 表
// 此命令应在用户确认迁移成功后调用
#[tauri::command]
async fn finalize_migration() -> Result<(), String> {
    use crate::db::migrate_remove_fragment_tables;
    use crate::db::DbConnectionManager;
    
    log::info!("🔧 [迁移] 用户确认迁移成功，开始清理数据库表...");
    
    let conn = DbConnectionManager::get()
        .map_err(|e| format!("数据库连接失败: {}", e))?;
    
    migrate_remove_fragment_tables(&conn)
        .map_err(|e| format!("移除数据库表失败: {}", e))?;
    
    log::info!("✅ [迁移] 数据库清理完成");
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
        .plugin(tauri_plugin_single_instance::init(|app, args, _cwd| {
            let windows = app.webview_windows();
            if let Some(window) = windows.values().next() {
                let _ = window.set_focus();
            }

            // 捕获从系统传入的 .md 文件路径（例如双击打开、文件关联）
            // 推迟到 config_ready 后再让前端导航，避免窗口未就绪
            let md_paths: Vec<String> = args
                .iter()
                .filter(|a| !a.starts_with("--"))
                .filter(|a| a.to_lowercase().ends_with(".md"))
                .cloned()
                .collect();

            if !md_paths.is_empty() {
                if let Some(queue_state) = app.try_state::<Arc<Mutex<Vec<String>>>>() {
                    if let Ok(mut queue) = queue_state.lock() {
                        for p in md_paths {
                            queue.push(p);
                        }
                    }
                }
            }
        }))
        .plugin(tauri_plugin_shell::init())
        .plugin(
            tauri_plugin_log::Builder::new()
                .targets([
                    Target::new(TargetKind::Stdout),
                    Target::new(TargetKind::LogDir { file_name: None }),
                    Target::new(TargetKind::Webview),
                ])
                .filter(|metadata| {
                    let target = metadata.target();
                    let level = metadata.level();

                    // 压制 Windows 文件监听的高频日志，避免索引期间日志风暴
                    if target.starts_with("notify::windows") {
                        return level <= log::Level::Info;
                    }

                    // 过滤掉 tao 的事件循环噪音
                    if target.starts_with("tao::platform_impl::platform::event_loop") {
                        return level >= log::Level::Warn;
                    }

                    // 过滤 tauri::manager 的调试日志
                    if target == "tauri::manager" && level == log::Level::Debug {
                        return false;
                    }

                    // 过滤 HTTP 客户端 TRACE/DEBUG（图标加载会非常多）
                    if target.starts_with("hyper_util::")
                        || target.starts_with("reqwest::")
                        || target.starts_with("hyper::")
                    {
                        return level >= log::Level::Warn;
                    }

                    true
                })
                .build(),
        )
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_sql::Builder::default().build())
        .setup(|app| {
            // 在应用启动时初始化 APP
            let _ = APP.set(app.handle().clone());
            
            // 初始化 index_manager 状态（先设置为 None，后续异步初始化）
            app.manage(Arc::new(RwLock::new(None::<markdown::IndexManager>)));
            
            // 初始化 AutoSyncManager 状态（先设置为 None，后续根据配置启动）
            app.manage(Arc::new(Mutex::new(None::<git_sync::AutoSyncManager>)));
            
            // 初始化待处理的 Git 冲突队列（用于启动时 pull 检测到冲突但 Config 窗口未就绪）
            app.manage(Arc::new(Mutex::new(Vec::<git_sync::ConflictPayload>::new())));

            // 初始化待处理的 Git 仓库不存在队列（用于启动时 pull 检测到远程仓库不存在但 Config 窗口未就绪）
            app.manage(Arc::new(Mutex::new(Vec::<git_sync::RepoNotFoundPayload>::new())));

            // 初始化待处理的「系统打开 Markdown 文件」队列（用于双击/关联打开 .md 时 Config 窗口未就绪）
            app.manage(Arc::new(Mutex::new(Vec::<String>::new())));

            // === Dark Mode 调度器：立即在后台启动（与窗口初始化完全并行）===
            let app_handle_scheduler = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                use dark_mode::ThemeMode;
                let config = dark_mode::load_config(&app_handle_scheduler);
                if config.theme_mode == ThemeMode::Schedule {
                    if let Err(e) = dark_mode::start_scheduler(app_handle_scheduler) {
                        log::warn!("Dark Mode调度器启动失败: {}", e);
                    }
                }
            });

            // 监听 config_ready 事件，发送待处理的冲突
            // 使用全局监听器而不是窗口监听器，确保能收到前端发送的事件
            let app_handle_conflict = app.handle().clone();
            let _listener_id = app.listen("config_ready", move |_event| {
                
                // 检查待处理冲突队列
                if let Some(pending_conflicts) = app_handle_conflict.try_state::<Arc<Mutex<Vec<git_sync::ConflictPayload>>>>() {
                    if let Ok(mut queue) = pending_conflicts.lock() {
                        if !queue.is_empty() {
                            log::info!("📬 [Git] 发送待处理冲突，数量: {}", queue.len());
                            // 发送所有待处理的冲突
                            for payload in queue.iter() {
                                if let Err(e) = app_handle_conflict.emit_to("config", "git-conflict-detected", payload.clone()) {
                                    log::error!("❌ [Git] 发送待处理冲突失败: {}", e);
                                } else {
                                    log::info!("📬 [Git] 待处理冲突已发送: conflict={:?}, untracked={:?}", 
                                        payload.conflict_files, payload.untracked_files);
                                }
                            }
                            // 清空队列
                            queue.clear();
                        }
                        // 队列为空时不打印日志，这是正常状态
                    }
                }
            });

            // 监听 config_ready 事件，发送待处理的「仓库不存在」通知
            let app_handle_repo_not_found = app.handle().clone();
            let _repo_not_found_listener_id = app.listen("config_ready", move |_event| {

                // 检查待处理仓库不存在队列
                if let Some(pending_repo_not_found) = app_handle_repo_not_found.try_state::<Arc<Mutex<Vec<git_sync::RepoNotFoundPayload>>>>() {
                    if let Ok(mut queue) = pending_repo_not_found.lock() {
                        if !queue.is_empty() {
                            log::info!("📬 [Git] 发送待处理仓库不存在通知，数量: {}", queue.len());
                            // 发送所有待处理的通知
                            for payload in queue.iter() {
                                if let Err(e) = app_handle_repo_not_found.emit_to("config", "git-repo-not-found", payload.clone()) {
                                    log::error!("❌ [Git] 发送待处理仓库不存在通知失败: {}", e);
                                } else {
                                    log::info!("📬 [Git] 待处理仓库不存在通知已发送: remote_url={}, operation={}",
                                        payload.remote_url, payload.operation);
                                }
                            }
                            // 清空队列
                            queue.clear();
                        }
                    }
                }
            });

            // 监听 config_ready 事件，发送待处理的「系统打开 Markdown 文件」请求
            let app_handle_open_file = app.handle().clone();
            let _open_file_listener_id = app.listen("config_ready", move |_event| {
                if let Some(queue_state) = app_handle_open_file.try_state::<Arc<Mutex<Vec<String>>>>() {
                    if let Ok(mut queue) = queue_state.lock() {
                        if !queue.is_empty() {
                            #[derive(Serialize, Clone)]
                            struct OpenMarkdownFromSystemPayload {
                                file_path: String,
                            }

                            for p in queue.iter() {
                                let payload = OpenMarkdownFromSystemPayload {
                                    file_path: p.clone(),
                                };
                                if let Err(e) = app_handle_open_file.emit_to("config", "open-markdown-from-system", payload) {
                                    log::error!("❌ [OpenFile] 发送待处理文件失败: {}", e);
                                } else {
                                    log::info!("📬 [OpenFile] 待处理文件已发送: {}", p);
                                }
                            }
                            queue.clear();
                        }
                    }
                }
            });
            
            // 检查是否已完成首次设置
            let is_setup_completed = db::is_setup_completed_internal(app.handle());
            
            // 如果已完成设置，才初始化数据库
            if is_setup_completed {
                if let Err(e) = db::init_db() {
                    log::error!("数据库初始化失败: {}", e);
                }
                
                // 初始化 Markdown 文件系统（如果已配置工作区）
                let app_handle_markdown = app.handle().clone();

                // 清理孤立附件（没有对应笔记的附件文件夹）- 在后台异步执行
                let app_handle_cleanup = app_handle_markdown.clone();
                tauri::async_runtime::spawn(async move {
                    // 等待一小段时间确保其他初始化完成
                    tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;
                    match attachment::cleanup_orphaned_attachments(app_handle_cleanup).await {
                        Ok(count) if count > 0 => {
                            log::info!("🗑️ [初始化] 清理了 {} 个孤立附件文件夹", count);
                        }
                        Ok(_) => {
                            log::info!("✅ [初始化] 没有孤立附件需要清理");
                        }
                        Err(e) => {
                            log::warn!("⚠️ [初始化] 清理孤立附件失败: {}", e);
                        }
                    }
                });

                tauri::async_runtime::spawn(async move {
                    if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(&app_handle_markdown) {
                        // 初始化 CacheManager
                        let config_dir = workspace_root.join(".snippets-code");
                        log::info!("🔧 [初始化] 配置目录: {}", config_dir.display());
                        
                        if !config_dir.exists() {
                            log::info!("📁 [初始化] 创建配置目录");
                            if let Err(e) = std::fs::create_dir_all(&config_dir) {
                                log::error!("❌ [初始化] 创建配置目录失败: {}", e);
                                return;
                            }
                        }
                        
                        // 初始化 WorkspaceManager
                        match markdown::WorkspaceManager::new(config_dir.clone()) {
                            Ok(workspace_manager) => {
                                log::info!("✅ [初始化] WorkspaceManager 初始化成功");
                                log::info!("📊 [初始化] workspace.json 路径: {}", config_dir.join("workspace.json").display());
                                
                                // 保存初始配置（如果是首次创建）
                                if let Err(e) = workspace_manager.save() {
                                    log::warn!("⚠️ [初始化] 保存 workspace.json 失败: {}", e);
                                }
                                
                                // 将 WorkspaceManager 存储到应用状态
                                app_handle_markdown.manage(Arc::new(RwLock::new(workspace_manager)));
                            }
                            Err(e) => {
                                log::error!("❌ [初始化] WorkspaceManager 初始化失败: {}", e);
                            }
                        }
                        
                        // 初始化 AppConfigManager
                        match app_config::AppConfigManager::new(&workspace_root) {
                            Ok(app_config_manager) => {
                                log::info!("✅ [初始化] AppConfigManager 初始化成功");
                                log::info!("📊 [初始化] app.json 路径: {}", config_dir.join("app.json").display());
                                
                                // 将 AppConfigManager 存储到应用状态
                                app_handle_markdown.manage(Arc::new(RwLock::new(app_config_manager)));
                            }
                            Err(e) => {
                                log::error!("❌ [初始化] AppConfigManager 初始化失败: {}", e);
                            }
                        }
                        
                        match markdown::CacheManager::new(config_dir.clone()) {
                            Ok(mut cache_manager) => {
                                log::info!("✅ [初始化] CacheManager 初始化成功");
                                log::info!("📊 [初始化] cache.json 路径: {}", config_dir.join("cache.json").display());
                                
                                // 清理已删除文件的元数据
                                let removed_count = cache_manager.cleanup_missing_files(&workspace_root);
                                if removed_count > 0 {
                                    log::info!("🗑️ [初始化] 清理了 {} 个已删除文件的元数据", removed_count);
                                    // 保存清理后的 cache.json
                                    if let Err(e) = cache_manager.save() {
                                        log::error!("❌ [初始化] 保存清理后的 cache.json 失败: {}", e);
                                    }
                                }
                                
                                // 如果 cache.json 中没有文件，扫描文件系统并重建缓存
                                if cache_manager.get_all_files().is_empty() {
                                    log::info!("🔄 [初始化] cache.json 中没有文件，开始扫描文件系统...");
                                    match cache_manager.rebuild_cache(&workspace_root) {
                                        Ok(count) => {
                                            log::info!("✅ [初始化] 扫描完成，找到 {} 个文件", count);
                                            // 保存到 cache.json
                                            if let Err(e) = cache_manager.save() {
                                                log::error!("❌ [初始化] 保存 cache.json 失败: {}", e);
                                            } else {
                                                log::info!("✅ [初始化] cache.json 已保存");
                                            }
                                        }
                                        Err(e) => {
                                            log::error!("❌ [初始化] 扫描文件系统失败: {}", e);
                                        }
                                    }
                                }
                                
                                // 将 CacheManager 存储到应用状态
                                app_handle_markdown.manage(Arc::new(RwLock::new(cache_manager)));
                                
                                // 初始化空的 FileWatcher 状态（即使还没有实际的监听器）
                                app_handle_markdown.manage(Arc::new(Mutex::new(None::<markdown::FileWatcher>)));
                            }
                            Err(e) => {
                                log::error!("❌ [初始化] CacheManager 初始化失败: {}", e);
                                return;
                            }
                        }
                        
                        // 构建搜索索引
                        // 需要先获取 CacheManager 的引用
                        let cache_manager_state = app_handle_markdown.state::<Arc<RwLock<markdown::CacheManager>>>();
                        
                        // 克隆 CacheManager 以避免跨 await 持有锁
                        let cache_manager_clone = {
                            match cache_manager_state.read() {
                                Ok(cache_mgr) => {
                                    // 克隆整个 CacheManager（包含 cache 数据）
                                    Some(cache_mgr.clone())
                                }
                                Err(e) => {
                                    log::error!("获取 CacheManager 锁失败: {}", e);
                                    None
                                }
                            }
                        }; // 锁在这里释放
                        
                        if let Some(cache_mgr) = cache_manager_clone {
                            match markdown::IndexManager::build_index(&workspace_root, &cache_mgr).await {
                                Ok(index_manager) => {
                                    log::info!("搜索索引构建完成");
                                    
                                    // 更新索引管理器状态（替换之前的 None）
                                    if let Some(index_state) = app_handle_markdown.try_state::<Arc<RwLock<Option<markdown::IndexManager>>>>() {
                                        if let Ok(mut index_lock) = index_state.write() {
                                            *index_lock = Some(index_manager);
                                            log::info!("索引管理器状态已更新");
                                        }
                                    }
                                    
                                    // 启动文件监听器（使用 AppHandle 而非 WebviewWindow，
                                    // 避免监听器生命周期与窗口绑定）
                                    match markdown::FileWatcher::start(workspace_root.clone(), app_handle_markdown.clone()) {
                                        Ok(watcher) => {
                                            log::info!("文件监听器启动成功");
                                            if let Some(watcher_state) = app_handle_markdown.try_state::<Arc<Mutex<Option<markdown::FileWatcher>>>>() {
                                                if let Ok(mut watcher_lock) = watcher_state.lock() {
                                                    *watcher_lock = Some(watcher);
                                                }
                                            }
                                        }
                                        Err(e) => {
                                            log::warn!("文件监听器启动失败: {}", e);
                                        }
                                    }
                                }
                                Err(e) => {
                                    log::warn!("搜索索引构建失败: {}", e);
                                }
                            }
                        } else {
                            log::error!("无法获取 CacheManager，跳过索引构建");
                        }
                    }
                });
            }

            // === 异步顺序初始化：等待上一个功能完成后再加载下一个 ===
            let app_handle_init = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                // 检查是否已完成首次设置
                let is_setup_completed = db::is_setup_completed_internal(&app_handle_init);
                
                tokio::time::sleep(tokio::time::Duration::from_millis(50)).await;
                
                // 第一步：创建托盘（首次启动只创建最小托盘）
                #[cfg(desktop)]
                {
                    if is_setup_completed {
                        // 已完成设置：创建完整托盘
                        if let Ok(()) = tray::create_tray(&app_handle_init) {
                            tray::update_tray_theme_status(&app_handle_init);
                        }
                    } else {
                        // 首次启动：只创建最小托盘
                        let _ = tray::create_minimal_tray(&app_handle_init);
                        log::info!("最小托盘创建完成");
                        // 首次启动时，跳过所有其他初始化
                        return;
                    }
                }
                
                // 以下所有初始化只在 setup 完成后执行
                
                // 第二步：注册快捷键
                if let Err(e) = register_shortcut("all") {
                    log::warn!("快捷键注册失败: {}", e);
                    let _ = app_handle_init.notification().builder()
                        .title("snippets-code")
                        .body(format!("快捷键注册失败：{}", e))
                        .show();
                }
                
                // 第三步：后台服务（提醒已在setup立即启动，Dark Mode调度器已在前台阶段立即启动）
                alarm::start_alarm_service(app_handle_init.clone());

                // 重置更新状态（使用 JSON 配置）
                let _ = json_config::set_app_config_value(&app_handle_init, "update_available", false);
                
                // 第四步：资源加载（应用和书签图标）
                init_app_and_bookmark_icons(&app_handle_init);
                
                // 第五步：网络操作（自动更新检查）
                if get_auto_update_check(app_handle_init.clone()) {
                    match check_update(&app_handle_init, false).await {
                        Ok(_) => {},
                        Err(e) => log::warn!("更新检查失败: {}", e),
                    }
                }
                
                // 第六步：清理任务（数据库优化、日志清理）
                if let Err(e) = optimize_database() {
                    log::warn!("优化数据库失败: {}", e);
                }
                cleanup_old_logs();
            });

            // 启动窗口逻辑
            let args: Vec<String> = std::env::args().collect();
            let is_auto_start = args.iter().any(|arg| arg == "--flag1" || arg == "--flag2");

            // 捕获系统传入的 Markdown 文件路径（首实例启动时也可能带文件参数）
            // 交由 config_ready 后统一派发到前端
            let md_paths: Vec<String> = args
                .iter()
                .filter(|a| !a.starts_with("--"))
                .filter(|a| a.to_lowercase().ends_with(".md"))
                .cloned()
                .collect();
            if !md_paths.is_empty() {
                if let Some(queue_state) = app.handle().try_state::<Arc<Mutex<Vec<String>>>>() {
                    if let Ok(mut queue) = queue_state.lock() {
                        for p in md_paths {
                            queue.push(p);
                        }
                    }
                }
            }

            if !is_auto_start {
                let app_handle_startup = app.handle().clone();
                tauri::async_runtime::spawn(async move {
                    tokio::time::sleep(tokio::time::Duration::from_millis(100)).await;
                    
                    if !db::is_setup_completed_internal(&app_handle_startup) {
                        // 首次启动：只显示 setup 窗口
                        create_setup_window();
                    } else {
                        // 正常启动：loading 过渡 + config 静默加载，ready 后再展示
                        crate::window::open_config_with_loading_transition();
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
            add_search_history,               // 添加搜索历史
            get_search_history,               // 获取搜索历史
            get_window_info,                  // 获取窗口信息
            copy_to_clipboard,                // 复制图片到剪切板
            save_screenshot_to_file,          // 保存截图到文件
            get_pixel_color,                  // 获取像素颜色
            get_screen_preview,               // 获取屏幕预览
            get_all_windows,                  // 获取所有窗口信息
            get_screenshot_background,        // 获取预捕获的屏幕背景
            get_screenshot_preview,           // 获取截图预览图
            get_cached_window_list,          // 获取预缓存的窗口列表
            get_cached_monitor_info,          // 获取预缓存的显示器信息
            clear_screenshot_background,      // 清理截图背景缓存
            cleanup_screenshot_resources,     // 深度清理截图资源
            close_and_destroy_screenshot_window, // 关闭并销毁截图窗口
            create_pin_window,                // 创建贴图窗口
            copy_image_to_clipboard,          // 复制图片到剪贴板
            save_pin_image,                   // 保存贴图图片
            frontend_log,                     // 前端日志转发
            close_setup_window,               // 关闭设置向导窗口
            get_dark_mode_config,             // 获取Auto Dark Mode配置
            save_dark_mode_config_command,    // 保存Auto Dark Mode配置
            get_location_info,                // 获取地理位置信息
            calculate_sun_times_command,      // 计算日出日落时间
            toggle_system_theme,              // 手动切换系统主题
            get_dark_mode_status_command,     // 获取Auto Dark Mode状态
            add_app,                          // 添加应用
            update_app,                       // 更新应用
            delete_app,                       // 删除应用
            get_apps,                         // 获取所有应用
            add_bookmark,                     // 添加书签
            update_bookmark,                  // 更新书签
            delete_bookmark,                  // 删除书签
            get_bookmarks,                    // 获取所有书签
            // get_categories,                   // 获取所有分类 - 已迁移到 Markdown
            // get_uncategorized_id,             // 获取未分类ID - 已迁移到 Markdown
            // add_category,                     // 添加分类 - 已迁移到 Markdown
            // edit_category,                    // 编辑分类 - 已迁移到 Markdown
            // delete_category,                  // 删除分类 - 已迁移到 Markdown
            // get_fragment_list,                // 获取片段列表 - 已迁移到 Markdown
            // add_fragment,                     // 添加片段 - 已迁移到 Markdown
            // delete_fragment,                  // 删除片段 - 已迁移到 Markdown
            // edit_fragment,                    // 编辑片段 - 已迁移到 Markdown
            // get_fragment_content,             // 获取片段内容 - 已迁移到 Markdown
            // search_fragment_content,          // 搜索片段内容 - 已迁移到 Markdown
            get_language,                     // 获取界面语言
            set_language,                     // 设置界面语言
            get_scan_progress_state,          // 获取扫描进度状态
            set_auto_start_setting,           // 设置自启动偏好
            get_auto_hide_on_blur,            // 获取自动失焦隐藏设置
            set_auto_hide_on_blur,            // 设置自动失焦隐藏
            set_translation_engine,           // 设置默认翻译引擎
            get_translation_engine,           // 获取默认翻译引擎
            set_offline_model_activated,      // 设置离线模型激活状态
            get_offline_model_activated,      // 获取离线模型激活状态
            open_preview_window,              // 打开片段预览窗口
            close_preview_window,             // 关闭片段预览窗口
            migrate_to_markdown_command,      // 迁移数据到 Markdown
            migrate_to_markdown_from_file_command,  // 从选择的数据库文件迁移
            finalize_migration,               // 完成迁移：移除数据库表
            commands::select_workspace,       // 选择工作区文件夹
            commands::validate_workspace_dir, // 验证工作区目录
            commands::get_workspace_root_path,// 获取工作区根目录
            commands::set_workspace_root_path,// 设置工作区根目录
            commands::change_workspace,       // 更改工作区
            markdown::search_markdown_files_optimized,  // 搜索 Markdown 文件
            // Markdown 文件操作命令
            markdown::get_markdown_categories,          // 获取所有分类
            markdown::create_markdown_file,             // 创建 Markdown 文件
            markdown::read_markdown_file,               // 读取 Markdown 文件
            markdown::update_markdown_file,             // 更新 Markdown 文件
            markdown::delete_markdown_file,             // 删除 Markdown 文件
            markdown::move_markdown_file,               // 移动 Markdown 文件到新分类
            markdown::cleanup_cache,                    // 清理 cache.json 中已删除文件的元数据
            markdown::scan_new_files,                   // 扫描新文件并更新 cache（用于 Git Pull 后）
            markdown::create_category_folder,           // 创建分类文件夹
            markdown::delete_category_folder,           // 删除分类文件夹
            markdown::rename_category_folder,           // 重命名分类文件夹
            markdown::get_files_by_category,            // 获取分类下的文件
            markdown::toggle_favorite,                  // 切换收藏状态
            markdown::ignore_next_change,               // 忽略下一次文件变化
            markdown::find_file_by_title,               // 通过标题查找文件
            markdown::get_all_file_titles,              // 获取所有文件标题
            markdown::update_wikilinks,                 // 更新 wikilinks
            markdown::find_files_with_wikilink,         // 查找包含 wikilink 的文件
            // 附件管理命令
            attachment::save_image_attachment,          // 保存图片附件
            attachment::get_attachment_config,          // 获取附件配置
            attachment::update_attachment_config,       // 更新附件配置
            attachment::sync_attachments_on_rename,     // 重命名笔记时同步附件
            attachment::cleanup_attachments_on_delete,  // 删除笔记时清理附件
            attachment::cleanup_unused_attachments,     // 清理未使用的附件
            attachment::cleanup_orphaned_attachments,   // 清理孤立附件
            attachment::restore_deleted_attachment,     // 恢复单个被误删的附件
            attachment::restore_all_deleted_attachments, // 恢复笔记所有被误删的附件
            attachment::delete_all_trash_attachments,   // 删除所有软删除的附件
            // 工作区配置命令
            markdown::get_sync_enabled,                 // 获取同步开关状态
            markdown::set_sync_enabled,                 // 设置同步开关状态
            // 应用配置命令
            app_config::get_app_config,                 // 获取应用配置
            app_config::update_app_config,              // 更新应用配置
            app_config::get_git_settings_command,       // 获取 Git 设置
            app_config::update_git_settings_command,    // 更新 Git 设置
            app_config::update_theme_config,            // 更新主题设置
            app_config::update_language_config,         // 更新语言设置
            // Git 同步命令
            git_sync::check_git_installed_command,      // 检查 Git 是否安装
            git_sync::check_git_repo_command,           // 检查是否是 Git 仓库
            git_sync::get_git_status_command,           // 获取 Git 状态
            git_sync::get_system_git_config_command,    // 获取系统 Git 配置（保留兼容）
            git_sync::get_workspace_git_config_command, // 仅工作区检测 Git 配置（不调系统，防闪退）
            git_sync::configure_git_command,            // 配置 Git
            git_sync::init_git_repository_command,      // 初始化 Git 仓库并配置远程
            git_sync::test_git_connection_command,      // 测试 Git 连接
            git_sync::git_pull_command,                 // 执行 git pull
            git_sync::git_push_command,                 // 执行 git push
            git_sync::resolve_conflict_command,         // 解决冲突
            git_sync::check_gitignore_command,          // 检查 .gitignore
            git_sync::ensure_gitignore_command,         // 确保 .gitignore 存在（不存在则创建）
            git_sync::start_auto_sync_command,          // 启动自动同步
            git_sync::stop_auto_sync_command,           // 停止自动同步
            git_sync::notify_file_edit_command,         // 通知文件编辑
            git_sync::get_auto_sync_status_command,     // 获取自动同步状态
            git_sync::pause_auto_sync_command,          // 暂停自动同步
            git_sync::resume_auto_sync_command,         // 恢复自动同步
            git_sync::get_conflict_file_content,        // 获取冲突文件内容
            git_sync::force_push_command,               // 强制推送
            git_sync::force_pull_command,               // 强制拉取
            git_sync::resolve_conflicts_batch,         // 批量解决冲突
            git_sync::write_conflict_file,              // 写入冲突文件内容
            git_sync::remove_untracked_file_command,    // 删除未跟踪文件
            register_app_init_request,                  // 注册 App 初始化请求（防抖）
            should_execute_app_init,                    // 检查是否应该执行 App 初始化（防抖）
            // 文件系统命令
            commands::show_file_in_folder,              // 在文件管理器中显示文件
            commands::open_folder,                      // 打开文件夹
            optimize_database_cmd,                     // 优化数据库
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
