use crate::alarm::AlarmCard;
use crate::config::{get_value, DB_PATH_KEY};
use crate::search::SearchEngine;
use crate::APP;
use crate::{apps::AppInfo, bookmarks::BookmarkInfo};
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
use std::collections::HashMap;
use crate::icon_cache::CachedIcon;

#[tauri::command]
pub fn get_db_path() -> String {
    let app = APP.get().unwrap();
    let db_path = get_database_path(app);
    // info!("数据库路径: {}", db_path.display());
    db_path.to_str().unwrap().to_string()
}

// 初始化数据库
pub fn init_db() -> Result<(), rusqlite::Error> {
    let app = APP.get().unwrap();
    let db_path = get_database_path(app);
    let conn = rusqlite::Connection::open(db_path)?;

    // 创建 apps 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS apps (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            icon TEXT,
            summarize TEXT NOT NULL
        )",
        [],
    )?;

    // 创建 bookmarks 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS bookmarks (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            icon TEXT,
            summarize TEXT NOT NULL
        )",
        [],
    )?;

    // 创建 icon_cache 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS icon_cache (
            key TEXT PRIMARY KEY,
            data TEXT NOT NULL,
            timestamp INTEGER NOT NULL
        )",
        [],
    )?;

    // 创建 search_engines 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS search_engines (
            id TEXT PRIMARY KEY,
            keyword TEXT NOT NULL,
            name TEXT NOT NULL,
            icon TEXT NOT NULL,
            url TEXT NOT NULL,
            enabled INTEGER NOT NULL
        )",
        [],
    )?;

    // 创建 alarm_cards 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS alarm_cards (
            id TEXT PRIMARY KEY,
            time TEXT NOT NULL,
            title TEXT NOT NULL,
            weekdays TEXT NOT NULL,
            reminder_time TEXT NOT NULL,
            is_active INTEGER NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )",
        [],
    )?;

    Ok(())
}

// 批量插入或替换应用
pub fn insert_apps(apps: &[AppInfo]) -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;

    let mut stmt = conn.prepare(
        "INSERT OR REPLACE INTO apps (id, title, content, icon, summarize) VALUES (?1, ?2, ?3, ?4, ?5)",
    )?;

    for app in apps {
        stmt.execute(rusqlite::params![
            app.id,
            app.title,
            app.content,
            app.icon,
            app.summarize
        ])?;
    }

    Ok(())
}

// 获取所有应用
pub fn get_all_apps() -> Result<Vec<AppInfo>, rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;

    let mut stmt = conn.prepare("SELECT id, title, content, icon, summarize FROM apps")?;
    let app_iter = stmt.query_map([], |row| {
        Ok(AppInfo {
            id: row.get(0)?,
            title: row.get(1)?,
            content: row.get(2)?,
            icon: row.get(3)?,
            summarize: row.get(4)?,
        })
    })?;

    let mut apps = Vec::new();
    for app in app_iter {
        apps.push(app?);
    }

    Ok(apps)
}

// 更新应用图标
pub fn update_app_icon(app_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    conn.execute(
        "UPDATE apps SET icon = ?1 WHERE id = ?2",
        rusqlite::params![icon, app_id],
    )?;
    Ok(())
}

// 清空 apps 表
pub fn clear_apps() -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    conn.execute("DELETE FROM apps", [])?;
    Ok(())
}

// 获取应用数量
pub fn count_apps() -> Result<i64, rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    let count = conn.query_row("SELECT COUNT(*) FROM apps", [], |row| row.get(0))?;
    Ok(count)
}

// 获取所有搜索引擎
pub fn get_all_search_engines() -> Result<Vec<SearchEngine>, rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;

    let mut stmt =
        conn.prepare("SELECT id, keyword, name, icon, url, enabled FROM search_engines")?;
    let engine_iter = stmt.query_map([], |row| {
        Ok(SearchEngine {
            id: row.get(0)?,
            keyword: row.get(1)?,
            name: row.get(2)?,
            icon: row.get(3)?,
            url: row.get(4)?,
            enabled: row.get(5)?,
        })
    })?;

    let mut engines = Vec::new();
    for engine in engine_iter {
        engines.push(engine?);
    }
    Ok(engines)
}

// 替换所有搜索引擎
pub fn replace_all_search_engines(engines: &[SearchEngine]) -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let mut conn = rusqlite::Connection::open(db_path)?;
    let tx = conn.transaction()?;

    tx.execute("DELETE FROM search_engines", [])?;

    {
        let mut stmt = tx.prepare(
            "INSERT INTO search_engines (id, keyword, name, icon, url, enabled) VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
        )?;
        for engine in engines {
            stmt.execute(rusqlite::params![
                engine.id,
                engine.keyword,
                engine.name,
                engine.icon,
                engine.url,
                engine.enabled,
            ])?;
        }
    }

    tx.commit()
}

// 清空 search_engines 表
pub fn clear_search_engines() -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    conn.execute("DELETE FROM search_engines", [])?;
    Ok(())
}

// 获取所有提醒卡片
pub fn get_all_alarm_cards() -> Result<Vec<AlarmCard>, rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    let mut stmt = conn.prepare("SELECT id, time, title, weekdays, reminder_time, is_active, created_at, updated_at FROM alarm_cards")?;
    let card_iter = stmt.query_map([], |row| {
        let weekdays_str: String = row.get(3)?;
        Ok(AlarmCard {
            id: row.get(0)?,
            time: row.get(1)?,
            title: row.get(2)?,
            weekdays: serde_json::from_str(&weekdays_str).unwrap_or_default(),
            reminder_time: row.get(4)?,
            is_active: row.get(5)?,
            created_at: row.get::<_, String>(6)?.parse().unwrap(),
            updated_at: row.get::<_, String>(7)?.parse().unwrap(),
            time_left: "".to_string(), // This is a calculated field
        })
    })?;

    let mut cards = Vec::new();
    for card in card_iter {
        cards.push(card?);
    }
    Ok(cards)
}

// 添加或更新提醒卡片
pub fn add_or_update_alarm_card(card: &AlarmCard) -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    let weekdays_str = serde_json::to_string(&card.weekdays).unwrap_or_default();

    conn.execute(
        "INSERT OR REPLACE INTO alarm_cards (id, time, title, weekdays, reminder_time, is_active, created_at, updated_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
        rusqlite::params![
            card.id,
            card.time,
            card.title,
            weekdays_str,
            card.reminder_time,
            card.is_active,
            card.created_at.to_rfc3339(),
            card.updated_at.to_rfc3339(),
        ],
    )?;
    Ok(())
}

// 删除提醒卡片
pub fn delete_alarm_card_from_db(id: &str) -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    conn.execute("DELETE FROM alarm_cards WHERE id = ?1", rusqlite::params![id])?;
    Ok(())
}

// 清空 alarm_cards 表
pub fn clear_alarm_cards() -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    conn.execute("DELETE FROM alarm_cards", [])?;
    Ok(())
}

// 从数据库加载所有图标缓存
pub fn load_all_icon_cache() -> Result<HashMap<String, CachedIcon>, rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;

    let mut stmt = conn.prepare("SELECT key, data, timestamp FROM icon_cache")?;
    let cache_iter = stmt.query_map([], |row| {
        Ok((
            row.get(0)?,
            CachedIcon {
                data: row.get(1)?,
                timestamp: row.get(2)?,
            },
        ))
    })?;

    let mut cache = HashMap::new();
    for item in cache_iter {
        let (key, icon) = item?;
        cache.insert(key, icon);
    }
    Ok(cache)
}

// 将图标插入缓存数据库
pub fn insert_icon_to_cache(key: &str, icon: &CachedIcon) -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    conn.execute(
        "INSERT OR REPLACE INTO icon_cache (key, data, timestamp) VALUES (?1, ?2, ?3)",
        rusqlite::params![key, icon.data, icon.timestamp],
    )?;
    Ok(())
}

// 清空 icon_cache 表
// pub fn clear_icon_cache() -> Result<(), rusqlite::Error> {
//     let app_handle = APP.get().unwrap();
//     let db_path = get_database_path(app_handle);
//     let conn = rusqlite::Connection::open(db_path)?;
//     conn.execute("DELETE FROM icon_cache", [])?;
//     Ok(())
// }

// 批量插入或替换书签
pub fn insert_bookmarks(bookmarks: &[BookmarkInfo]) -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;

    let mut stmt = conn.prepare(
        "INSERT OR REPLACE INTO bookmarks (id, title, content, icon, summarize) VALUES (?1, ?2, ?3, ?4, ?5)",
    )?;

    for bookmark in bookmarks {
        stmt.execute(rusqlite::params![
            bookmark.id,
            bookmark.title,
            bookmark.content,
            bookmark.icon,
            bookmark.summarize
        ])?;
    }

    Ok(())
}

// 获取所有书签
pub fn get_all_bookmarks() -> Result<Vec<BookmarkInfo>, rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;

    let mut stmt =
        conn.prepare("SELECT id, title, content, icon, summarize FROM bookmarks")?;
    let bookmark_iter = stmt.query_map([], |row| {
        Ok(BookmarkInfo {
            id: row.get(0)?,
            title: row.get(1)?,
            content: row.get(2)?,
            icon: row.get(3)?,
            summarize: row.get(4)?,
        })
    })?;

    let mut bookmarks = Vec::new();
    for bookmark in bookmark_iter {
        bookmarks.push(bookmark?);
    }

    Ok(bookmarks)
}

// 更新书签图标
pub fn update_bookmark_icon(bookmark_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    conn.execute(
        "UPDATE bookmarks SET icon = ?1 WHERE id = ?2",
        rusqlite::params![icon, bookmark_id],
    )?;
    Ok(())
}

// 清空 bookmarks 表
pub fn clear_bookmarks() -> Result<(), rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    conn.execute("DELETE FROM bookmarks", [])?;
    Ok(())
}

// 获取书签数量
pub fn count_bookmarks() -> Result<i64, rusqlite::Error> {
    let app_handle = APP.get().unwrap();
    let db_path = get_database_path(app_handle);
    let conn = rusqlite::Connection::open(db_path)?;
    let count = conn.query_row("SELECT COUNT(*) FROM bookmarks", [], |row| row.get(0))?;
    Ok(count)
}

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

// 备份数据库
#[tauri::command]
pub async fn backup_database(format: &str) -> Result<String, String> {
    let app = APP.get().unwrap();
    let db_path = get_database_path(app);
    info!("备份--数据库路径: {}", db_path.display());
    // 生成默认文件名以code_开头
    let now = Local::now();
    let filename = match format {
        "A" => now.format("%Y%m%d").to_string(),
        "B" => now.format("%H%M%S").to_string(),
        "C" => now.format("%Y%m%d%H%M%S").to_string(),
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

// 恢复数据库
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

            // 在后台线程中注销所有快捷键并重启应用程序
            std::thread::spawn(move || {
                std::thread::sleep(std::time::Duration::from_secs(3));
                // 先清理资源
                app.cleanup_before_exit();
                // 注销所有快捷键
                app.global_shortcut().unregister_all().unwrap();
                // 重启应用程序
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

// 自定义数据库路径
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

            log::info!(
                "数据库迁移完成：{} -> {}",
                old_path.display(),
                new_path.display()
            );
        }

        // 删除原数据库文件
        fs::remove_file(&old_path).map_err(|e| format!("删除原数据库失败: {}", e))?;
    }

    // 保存新路径到配置
    let new_path_str = new_path.to_str().unwrap().to_string();
    crate::config::set_value(app, DB_PATH_KEY, &new_path_str);

    // 在后台线程中注销所有快捷键并重启应用程序
    std::thread::spawn(move || {
        std::thread::sleep(std::time::Duration::from_secs(3));
        // 先清理资源
        app.cleanup_before_exit();
        // 注销所有快捷键
        app.global_shortcut().unregister_all().unwrap();
        // 重启应用程序
        app.restart();
    });

    Ok(new_path_str)
}
