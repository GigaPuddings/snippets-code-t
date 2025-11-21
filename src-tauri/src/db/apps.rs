use crate::apps::AppInfo;
use crate::db::entity::{get_all_entities, update_entity_icon, clear_entities, count_entities, insert_entities};
use crate::db::DbConnectionManager;
use rusqlite;

// ============= 应用相关数据库操作 =============

/// 批量插入应用
pub fn insert_apps(apps: &[AppInfo]) -> Result<(), rusqlite::Error> {
    insert_entities(apps)
}

/// 获取所有应用
pub fn get_all_apps() -> Result<Vec<AppInfo>, rusqlite::Error> {
    get_all_entities::<AppInfo>()
}

/// 更新应用图标
pub fn update_app_icon(app_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    update_entity_icon::<AppInfo>(app_id, icon)
}

/// 清空所有应用
pub fn clear_apps() -> Result<(), rusqlite::Error> {
    clear_entities::<AppInfo>()
}

/// 统计应用数量
pub fn count_apps() -> Result<i64, rusqlite::Error> {
    count_entities::<AppInfo>()
}

// ============= Tauri 命令函数 =============

/// 添加单个应用
#[tauri::command]
pub fn add_app(title: String, content: String, icon: Option<String>) -> Result<String, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let id = uuid::Uuid::new_v4().to_string();
    conn.execute(
        "INSERT INTO apps (id, title, content, icon, summarize) VALUES (?1, ?2, ?3, ?4, ?5)",
        rusqlite::params![id, title, content, icon, "app"],
    ).map_err(|e| e.to_string())?;
    
    Ok(id)
}

/// 更新单个应用
#[tauri::command]
pub fn update_app(id: String, title: String, content: String, icon: Option<String>) -> Result<(), String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    conn.execute(
        "UPDATE apps SET title = ?1, content = ?2, icon = ?3 WHERE id = ?4",
        rusqlite::params![title, content, icon, id],
    ).map_err(|e| e.to_string())?;
    
    Ok(())
}

/// 删除单个应用
#[tauri::command]
pub fn delete_app(id: String) -> Result<(), String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    conn.execute(
        "DELETE FROM apps WHERE id = ?1",
        rusqlite::params![id],
    ).map_err(|e| e.to_string())?;
    
    Ok(())
}

/// 获取所有应用（Tauri command 版本）
#[tauri::command]
pub fn get_apps() -> Result<Vec<AppInfo>, String> {
    get_all_apps().map_err(|e| e.to_string())
}
