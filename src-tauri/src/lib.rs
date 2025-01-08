mod apps;
mod bookmarks;
mod config;
mod db;
mod hotkey;
mod tray;
mod window;

use crate::window::{hotkey_config, hotkey_search, start_mouse_tracking};
use apps::{get_installed_apps, open_app_command};
use bookmarks::{get_browser_bookmarks, open_url};
use chrono::Local;
use hotkey::*;
use log::info;
use tauri_plugin_autostart::MacosLauncher;
use std::fs;
use std::io::Read;
use std::path::Path;
use std::sync::Mutex;
use std::sync::OnceLock;
use tauri::Emitter;
use tauri::WindowEvent;
use tauri::{AppHandle, Manager};
use tauri_plugin_dialog::DialogExt;
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

// 获取数据库目录
#[tauri::command]
fn get_db_path() -> String {
    let db_path = APP
        .get()
        .unwrap()
        .path()
        .app_data_dir()
        .unwrap()
        .join("code.db");
    db_path.to_str().unwrap().to_string()
}

#[tauri::command]
async fn backup_database(format: &str) -> Result<String, String> {
    let app = APP.get().unwrap();
    let db_path = app.path().app_data_dir().unwrap().join("code.db");

    // 生成默认文件名以code_开头
    let now = Local::now();
    let filename = match format {
        "A" => now.format("%Y-%m-%d").to_string(),
        "B" => now.format("%H-%M-%S").to_string(),
        "C" => now.format("%Y-%m-%d-%H-%M-%S").to_string(),
        _ => return Err("Invalid format".to_string()),
    };

    // 获取桌面路径
    let desktop = dirs::desktop_dir().ok_or("Cannot find desktop directory")?;

    if let Some(selected_path) = app
        .dialog()
        .file()
        .add_filter("SQLite Database", &["db"])
        .set_file_name(&format!("{}.db", "code_".to_string() + &filename))
        .set_directory(desktop)
        .blocking_save_file()
    {
        // 将 FilePath 转换为 PathBuf
        let path = selected_path.as_path().unwrap();
        fs::copy(&db_path, path).map_err(|e| e.to_string())?;
        Ok("Backup successful".to_string())
    } else {
        Err("Backup cancelled".to_string())
    }
}

#[tauri::command]
async fn restore_database() -> Result<String, String> {
    let app = APP.get().unwrap();
    let db_path = app.path().app_data_dir().unwrap().join("code.db");

    // 获取桌面路径作为默认目录
    let desktop = dirs::desktop_dir().ok_or("Cannot find desktop directory")?;

    // 使用 blocking_pick_file 而不是 pick_file
    let selected_path = app
        .dialog()
        .file()
        .add_filter("SQLite Database", &["db"])
        .set_directory(desktop)
        .set_title("选择要恢复的数据库文件")
        .blocking_pick_file();

    match selected_path {
        Some(selected_path) => {
            let path = selected_path.as_path().unwrap();
            if !is_valid_sqlite_db(path) {
                return Err("Invalid SQLite database file".to_string());
            }

            // 备份当前数据库
            let backup_path = db_path.with_extension("db.bak");
            if db_path.exists() {
                fs::copy(&db_path, &backup_path).map_err(|e| e.to_string())?;
            }

            // 复制新数据库文件
            fs::copy(path, &db_path).map_err(|e| e.to_string())?;

            // 使用 spawn_blocking 来执行重启
            std::thread::spawn(move || {
                std::thread::sleep(std::time::Duration::from_secs(1));
                app.restart();
            });

            Ok("Restore successful. Application will restart.".to_string())
        }
        None => Err("Restore cancelled".to_string()),
    }
}

// 验证SQLite数据库文件
fn is_valid_sqlite_db<P: AsRef<Path>>(path: P) -> bool {
    if let Ok(mut file) = std::fs::File::open(path) {
        let mut buffer = [0u8; 16];
        if file.read_exact(&mut buffer).is_ok() {
            // SQLite 数据库文件以 "SQLite format 3" 开头
            return buffer.starts_with(b"SQLite format 3");
        }
    }
    false
}

#[tauri::command]
fn get_backup_list() -> Result<Vec<String>, String> {
    let app = APP.get().unwrap();
    let backup_dir = app.path().app_data_dir().unwrap().join("backups");

    // 如果备份目录不存在，创建它
    if !backup_dir.exists() {
        fs::create_dir_all(&backup_dir).map_err(|e| e.to_string())?;
    }

    // 读取备份目录中的所有文件
    let entries = fs::read_dir(backup_dir).map_err(|e| e.to_string())?;
    let mut backup_files = Vec::new();

    for entry in entries {
        if let Ok(entry) = entry {
            if let Some(filename) = entry.file_name().to_str() {
                if filename.ends_with(".db") {
                    backup_files.push(filename.to_string());
                }
            }
        }
    }

    backup_files.sort();
    Ok(backup_files)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_autostart::init(MacosLauncher::LaunchAgent, Some(vec!["--flag1", "--flag2"])))
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
        .plugin(
            tauri_plugin_sql::Builder::default()
                .add_migrations("sqlite:code.db", db::migrate::get_migrate())
                .build(),
        )
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
                        // window.set_ignore_cursor_events(true).unwrap();
                        // start_mouse_tracking(window.clone());

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
            get_browser_bookmarks,
            open_url,
            get_db_path,
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
            backup_database,
            restore_database,
            get_backup_list,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
