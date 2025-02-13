use crate::config::{get_value, DB_PATH_KEY};
use crate::APP;
use chrono::Local;
use log::info;
use rusqlite;
use std::fs;
use std::io::Read;
use std::path::Path;
use std::path::PathBuf;
use tauri::Manager;
use tauri_plugin_dialog::DialogExt;
use tauri_plugin_global_shortcut::GlobalShortcutExt;

// 获取数据库路径（优先使用自定义路径）
pub fn get_database_path(app_handle: &tauri::AppHandle) -> PathBuf {
    // 检查自定义路径
    if let Some(custom_path) = get_value(app_handle, DB_PATH_KEY) {
        if let Some(path_str) = custom_path.as_str() {
            let path = PathBuf::from(path_str);
            // 确保父目录存在
            if let Some(parent) = path.parent() {
                if !parent.exists() {
                    std::fs::create_dir_all(parent).expect("无法创建父目录");
                }
            }
            return path;
        }
    }

    // 使用默认路径并确保目录存在
    let default_path = app_handle.path().app_data_dir().unwrap().join("code.db");
    if let Some(parent) = default_path.parent() {
        if !parent.exists() {
            std::fs::create_dir_all(parent).expect("无法创建默认目录");
        }
    }
    default_path
}

#[tauri::command]
pub fn get_db_path() -> String {
    let app = APP.get().unwrap();
    let db_path = get_database_path(app);
    info!("数据库路径: {}", db_path.display());
    db_path.to_str().unwrap().to_string()
}

#[tauri::command]
pub async fn backup_database(format: &str) -> Result<String, String> {
    let app = APP.get().unwrap();
    let db_path = get_database_path(app);
    info!("备份--数据库路径: {}", db_path.display());
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
        let path = selected_path.as_path().unwrap();

        // 使用 rusqlite 的备份功能
        let mut source =
            rusqlite::Connection::open(&db_path).map_err(|e| format!("打开源数据库失败: {}", e))?;
        let mut dest =
            rusqlite::Connection::open(path).map_err(|e| format!("创建目标数据库失败: {}", e))?;

        let backup = rusqlite::backup::Backup::new(&mut source, &mut dest)
            .map_err(|e| format!("初始化备份失败: {}", e))?;

        backup
            .step(-1)
            .map_err(|e| format!("备份过程失败: {}", e))?;

        Ok("备份成功".to_string())
    } else {
        Err("备份已取消".to_string())
    }
}

#[tauri::command]
pub async fn restore_database() -> Result<String, String> {
    let app = APP.get().unwrap();
    let db_path = get_database_path(app);
    info!("恢复--数据库路径: {}", db_path.display());
    let desktop = dirs::desktop_dir().ok_or("无法找到桌面目录")?;

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
                return Err("无效的 SQLite 数据库文件".to_string());
            }

            // 备份当前数据库
            let backup_path = db_path.with_extension("db.bak");
            if db_path.exists() {
                let mut source = rusqlite::Connection::open(&db_path)
                    .map_err(|e| format!("打开当前数据库失败: {}", e))?;
                let mut backup = rusqlite::Connection::open(&backup_path)
                    .map_err(|e| format!("创建备份数据库失败: {}", e))?;

                let backup_op = rusqlite::backup::Backup::new(&mut source, &mut backup)
                    .map_err(|e| format!("初始化备份失败: {}", e))?;
                backup_op
                    .step(-1)
                    .map_err(|e| format!("备份当前数据库失败: {}", e))?;
            }

            // 恢复新数据库
            let mut source =
                rusqlite::Connection::open(path).map_err(|e| format!("打开源数据库失败: {}", e))?;
            let mut dest = rusqlite::Connection::open(&db_path)
                .map_err(|e| format!("打开目标数据库失败: {}", e))?;

            let restore = rusqlite::backup::Backup::new(&mut source, &mut dest)
                .map_err(|e| format!("初始化恢复失败: {}", e))?;
            restore
                .step(-1)
                .map_err(|e| format!("恢复过程失败: {}", e))?;

            std::thread::spawn(move || {
                std::thread::sleep(std::time::Duration::from_secs(1));
                app.global_shortcut().unregister_all().unwrap();
                app.restart();
            });

            Ok("数据库恢复成功，应用程序将重启".to_string())
        }
        None => Err("恢复已取消".to_string()),
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

// 新增：设置自定义数据库路径
#[tauri::command]
pub async fn set_custom_db_path() -> Result<String, String> {
    let app = APP.get().unwrap();

    // 获取桌面路径作为默认目录
    let desktop = dirs::desktop_dir().ok_or("无法找到桌面目录")?;

    // 使用系统文件选择器
    let selected_path = app
        .dialog()
        .file()
        .set_directory(desktop)
        .set_title("选择数据库存储目录")
        .blocking_pick_folder()
        .ok_or("已取消选择目录")?;

    let selected_path = PathBuf::from(selected_path.as_path().unwrap());
    let new_path = selected_path.join("code.db");

    // 验证路径
    let parent = new_path.parent().ok_or("无效路径：目标目录不存在")?;
    if !parent.exists() {
        return Err("无效路径：目标目录不存在".to_string());
    }

    // 验证目录是否可写
    fs::write(parent.join("test_write"), "test")
        .map_err(|_| "无权限：无法写入目标目录".to_string())?;
    fs::remove_file(parent.join("test_write")).map_err(|_| "无法清理测试文件".to_string())?;

    // 如果已存在数据库，需要迁移数据
    let old_path = get_database_path(app);
    info!("迁移--旧数据库路径: {}", old_path.display());
    if old_path.exists() {
        // 如果新旧路径相同，不需要迁移
        if old_path == new_path {
            return Err("新路径与当前路径相同".to_string());
        }

        // 确保目标路径不存在，避免覆盖已有数据库
        if new_path.exists() {
            return Err("目标路径已存在数据库文件".to_string());
        }

        // 迁移数据
        {
            let mut source = rusqlite::Connection::open(&old_path)
                .map_err(|e| format!("打开源数据库失败: {}", e))?;
            let mut dest = rusqlite::Connection::open(&new_path)
                .map_err(|e| format!("创建目标数据库失败: {}", e))?;

            let backup = rusqlite::backup::Backup::new(&mut source, &mut dest)
                .map_err(|e| format!("初始化迁移失败: {}", e))?;

            backup
                .step(-1)
                .map_err(|e| format!("迁移数据失败: {}", e))?;

            // 确保连接被正确关闭
            drop(backup);
            drop(dest);
            drop(source);

            log::info!("数据库迁移完成：{} -> {}", old_path.display(), new_path.display());
        }

        // 删除原数据库文件
        fs::remove_file(&old_path).map_err(|e| format!("删除原数据库失败: {}", e))?;
    }

    // 保存新路径到配置
    let new_path_str = new_path.to_str().unwrap().to_string();
    crate::config::set_value(app, DB_PATH_KEY, &new_path_str);

    // 重启应用以应用新路径
    std::thread::spawn(move || {
        std::thread::sleep(std::time::Duration::from_secs(1));
        app.global_shortcut().unregister_all().unwrap();
        app.restart();
    });

    Ok(new_path_str)
}
