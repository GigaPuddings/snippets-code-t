use crate::db::DbConnectionManager;
use chrono::Local;
use serde::{Deserialize, Serialize};

// ============= 搜索历史相关数据库操作 =============

/// 搜索历史项
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SearchHistoryItem {
    pub id: String,
    pub usage_count: u32,
    pub last_used_at: String,
}

/// 添加或更新搜索历史
pub fn add_search_history_item(id: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let now = Local::now().to_rfc3339();

    conn.execute(
        "INSERT INTO search_history (id, usage_count, last_used_at) VALUES (?1, 1, ?2)
        ON CONFLICT(id) DO UPDATE SET
        usage_count = usage_count + 1,
        last_used_at = ?2",
        rusqlite::params![id, now],
    )?;

    Ok(())
}

/// 获取所有搜索历史
pub fn get_all_search_history() -> Result<Vec<SearchHistoryItem>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

    let mut stmt = conn.prepare("SELECT id, usage_count, last_used_at FROM search_history")?;
    let history_iter = stmt.query_map([], |row| {
        Ok(SearchHistoryItem {
            id: row.get(0)?,
            usage_count: row.get(1)?,
            last_used_at: row.get(2)?,
        })
    })?;

    let mut history = Vec::new();
    for item in history_iter {
        history.push(item?);
    }
    Ok(history)
}

// 清理过期的搜索历史（保留最近6个月的数据和使用次数>5的记录）
// pub fn cleanup_old_search_history() -> Result<usize, rusqlite::Error> {
//     let conn = DbConnectionManager::get()?;
    
//     // 删除6个月前且使用次数少于5次的记录
//     let rows_affected = conn.execute(
//         "DELETE FROM search_history 
//          WHERE datetime(last_used_at) < datetime('now', '-6 months')
//          AND usage_count < 5",
//         [],
//     )?;
    
//     // log::info!("清理了 {} 条过期的搜索历史记录", rows_affected);
//     Ok(rows_affected)
// }

// ============= Tauri命令 =============

#[tauri::command]
pub fn add_search_history(id: String) -> Result<(), String> {
    add_search_history_item(&id).map_err(|e| e.to_string())
}

#[tauri::command]
pub fn get_search_history() -> Result<Vec<SearchHistoryItem>, String> {
    get_all_search_history().map_err(|e| e.to_string())
}
