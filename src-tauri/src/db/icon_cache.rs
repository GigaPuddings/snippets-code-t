use crate::icon::CachedIcon;
use crate::db::DbConnectionManager;
use rusqlite::{self, OptionalExtension};
use std::collections::HashMap;
use std::time::SystemTime;

// ============= 图标缓存相关数据库操作 =============

/// 从数据库加载所有图标缓存
pub fn load_all_icon_cache() -> Result<HashMap<String, CachedIcon>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

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

/// 将图标插入缓存数据库
pub fn insert_icon_to_cache(key: &str, icon: &CachedIcon) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        "INSERT OR REPLACE INTO icon_cache (key, data, timestamp) VALUES (?1, ?2, ?3)",
        rusqlite::params![key, icon.data, icon.timestamp],
    )?;
    Ok(())
}

/// 从缓存中获取图标
#[allow(dead_code)]
pub fn get_icon_from_cache(key: &str) -> Result<Option<CachedIcon>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    
    let mut stmt = conn.prepare("SELECT data, timestamp FROM icon_cache WHERE key = ?1")?;
    let result = stmt.query_row([key], |row| {
        Ok(CachedIcon {
            data: row.get(0)?,
            timestamp: row.get(1)?,
        })
    }).optional()?;
    
    Ok(result)
}

/// 设置图标到缓存
#[allow(dead_code)]
pub fn set_icon_to_cache(key: &str, data: &str) -> Result<(), rusqlite::Error> {
    let timestamp = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();
    
    let icon = CachedIcon {
        data: data.to_string(),
        timestamp,
    };
    
    insert_icon_to_cache(key, &icon)
}

/// 清理过期的图标缓存（删除超过30天的缓存）
pub fn cleanup_old_icon_cache() -> Result<usize, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    
    let thirty_days_ago = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs() - (30 * 24 * 3600);
    
    let rows_affected = conn.execute(
        "DELETE FROM icon_cache WHERE timestamp < ?1",
        rusqlite::params![thirty_days_ago],
    )?;
    
    // log::info!("清理了 {} 条过期的图标缓存记录", rows_affected);
    Ok(rows_affected)
}
