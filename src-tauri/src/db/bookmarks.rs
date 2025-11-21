use crate::bookmarks::BookmarkInfo;
use crate::db::entity::{get_all_entities, update_entity_icon, clear_entities, count_entities, insert_entities};
use crate::db::DbConnectionManager;
use rusqlite;

// ============= 书签相关数据库操作 =============

/// 批量插入书签
pub fn insert_bookmarks(bookmarks: &[BookmarkInfo]) -> Result<(), rusqlite::Error> {
    insert_entities(bookmarks)
}

/// 获取所有书签
pub fn get_all_bookmarks() -> Result<Vec<BookmarkInfo>, rusqlite::Error> {
    get_all_entities::<BookmarkInfo>()
}

/// 更新书签图标
pub fn update_bookmark_icon(bookmark_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    update_entity_icon::<BookmarkInfo>(bookmark_id, icon)
}

/// 清空所有书签
pub fn clear_bookmarks() -> Result<(), rusqlite::Error> {
    clear_entities::<BookmarkInfo>()
}

/// 统计书签数量
pub fn count_bookmarks() -> Result<i64, rusqlite::Error> {
    count_entities::<BookmarkInfo>()
}

// ============= Tauri 命令函数 =============

/// 添加单个书签
#[tauri::command]
pub fn add_bookmark(title: String, content: String, icon: Option<String>) -> Result<String, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let id = uuid::Uuid::new_v4().to_string();
    conn.execute(
        "INSERT INTO bookmarks (id, title, content, icon, summarize) VALUES (?1, ?2, ?3, ?4, ?5)",
        rusqlite::params![id, title, content, icon, "bookmark"],
    ).map_err(|e| e.to_string())?;
    
    Ok(id)
}

/// 更新单个书签
#[tauri::command]
pub fn update_bookmark(id: String, title: String, content: String, icon: Option<String>) -> Result<(), String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    conn.execute(
        "UPDATE bookmarks SET title = ?1, content = ?2, icon = ?3 WHERE id = ?4",
        rusqlite::params![title, content, icon, id],
    ).map_err(|e| e.to_string())?;
    
    Ok(())
}

/// 删除单个书签
#[tauri::command]
pub fn delete_bookmark(id: String) -> Result<(), String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    conn.execute(
        "DELETE FROM bookmarks WHERE id = ?1",
        rusqlite::params![id],
    ).map_err(|e| e.to_string())?;
    
    Ok(())
}

/// 获取所有书签（Tauri command 版本）
#[tauri::command]
pub fn get_bookmarks() -> Result<Vec<BookmarkInfo>, String> {
    get_all_bookmarks().map_err(|e| e.to_string())
}
