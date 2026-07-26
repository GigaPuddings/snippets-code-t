use crate::db::DbConnectionManager;
use crate::icon::CachedIcon;
use rusqlite::{self, OptionalExtension};
use std::collections::HashMap;
use std::time::SystemTime;

// ============= 图标缓存相关数据库操作 =============

// 从数据库加载所有图标缓存
pub fn load_all_icon_cache() -> Result<HashMap<String, CachedIcon>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

    let mut stmt = conn.prepare("SELECT key, data, timestamp, source_mtime FROM icon_cache")?;
    let cache_iter = stmt.query_map([], |row| {
        Ok((
            row.get(0)?,
            CachedIcon {
                data: row.get(1)?,
                timestamp: row.get(2)?,
                source_mtime: row.get(3)?,
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
    let conn = DbConnectionManager::get()?;
    conn.execute(
        "INSERT OR REPLACE INTO icon_cache (key, data, timestamp, source_mtime) VALUES (?1, ?2, ?3, ?4)",
        rusqlite::params![key, icon.data, icon.timestamp, icon.source_mtime],
    )?;
    Ok(())
}

// 从缓存中获取图标
#[allow(dead_code)]
pub fn get_icon_from_cache(key: &str) -> Result<Option<CachedIcon>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

    let mut stmt =
        conn.prepare("SELECT data, timestamp, source_mtime FROM icon_cache WHERE key = ?1")?;
    let result = stmt
        .query_row([key], |row| {
            Ok(CachedIcon {
                data: row.get(0)?,
                timestamp: row.get(1)?,
                source_mtime: row.get(2)?,
            })
        })
        .optional()?;

    Ok(result)
}

// 设置图标到缓存
#[allow(dead_code)]
pub fn set_icon_to_cache(key: &str, data: &str) -> Result<(), rusqlite::Error> {
    let timestamp = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();

    let icon = CachedIcon {
        data: data.to_string(),
        timestamp,
        source_mtime: None,
    };

    insert_icon_to_cache(key, &icon)
}

pub fn cleanup_old_icon_cache() -> Result<usize, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let thirty_days_ago = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs()
        .saturating_sub(30 * 24 * 3600);
    conn.execute(
        "DELETE FROM icon_cache WHERE timestamp < ?1",
        rusqlite::params![thirty_days_ago],
    )
}

// 从缓存中删除指定的图标
#[allow(dead_code)]
pub fn delete_icon_from_cache(key: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        "DELETE FROM icon_cache WHERE key = ?1",
        rusqlite::params![key],
    )?;
    Ok(())
}

/// 只清理可重建的图标数据，不触碰来源索引或 search_history。
pub fn clear_all_icon_cache() -> Result<usize, rusqlite::Error> {
    let mut conn = DbConnectionManager::get()?;
    let transaction = conn.transaction()?;
    let mut affected = transaction.execute("DELETE FROM icon_cache", [])?;
    for table in ["apps", "bookmarks", "desktop_file_cache"] {
        let exists = transaction.query_row(
            "SELECT EXISTS(SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?1)",
            [table],
            |row| row.get::<_, bool>(0),
        )?;
        if exists {
            affected += transaction.execute(
                &format!("UPDATE {} SET icon = NULL WHERE icon IS NOT NULL", table),
                [],
            )?;
        }
    }
    transaction.commit()?;
    Ok(affected)
}
