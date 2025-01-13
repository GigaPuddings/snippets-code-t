use tauri_plugin_dialog::DialogExt;
use crate::APP;
use std::path::Path;
use chrono::Local;
use tauri::Manager;
use std::io::Read;
use rusqlite;

// 获取数据库目录
#[tauri::command]
pub fn get_db_path() -> String {
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
pub async fn backup_database(format: &str) -> Result<String, String> {
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
        let path = selected_path.as_path().unwrap();
        
        // 使用 rusqlite 的备份功能
        let mut source = rusqlite::Connection::open(&db_path)
            .map_err(|e| format!("打开源数据库失败: {}", e))?;
        let mut dest = rusqlite::Connection::open(path)
            .map_err(|e| format!("创建目标数据库失败: {}", e))?;
        
        let backup = rusqlite::backup::Backup::new(&mut source, &mut dest)
            .map_err(|e| format!("初始化备份失败: {}", e))?;
        
        backup.step(-1)
            .map_err(|e| format!("备份过程失败: {}", e))?;

        Ok("备份成功".to_string())
    } else {
        Err("备份已取消".to_string())
    }
}

#[tauri::command]
pub async fn restore_database() -> Result<String, String> {
    let app = APP.get().unwrap();
    let db_path = app.path().app_data_dir().unwrap().join("code.db");

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
                backup_op.step(-1)
                    .map_err(|e| format!("备份当前数据库失败: {}", e))?;
            }

            // 恢复新数据库
            let mut source = rusqlite::Connection::open(path)
                .map_err(|e| format!("打开源数据库失败: {}", e))?;
            let mut dest = rusqlite::Connection::open(&db_path)
                .map_err(|e| format!("打开目标数据库失败: {}", e))?;
            
            let restore = rusqlite::backup::Backup::new(&mut source, &mut dest)
                .map_err(|e| format!("初始化恢复失败: {}", e))?;
            restore.step(-1)
                .map_err(|e| format!("恢复过程失败: {}", e))?;

            std::thread::spawn(move || {
                std::thread::sleep(std::time::Duration::from_secs(1));
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
