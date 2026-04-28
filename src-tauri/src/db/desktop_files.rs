use crate::db::DbConnectionManager;


#[derive(Debug, Clone)]
pub struct DesktopFileCacheRecord {
    pub id: String,
    pub title: String,
    pub content: String,
    pub icon: Option<String>,
    pub source_mtime: Option<u64>,
    pub size: Option<u64>,
    pub created: Option<String>,
    pub modified: Option<String>,
    pub last_indexed_at: u64,
}

pub fn load_all_desktop_file_cache() -> Result<Vec<DesktopFileCacheRecord>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let mut stmt = conn.prepare(
        "SELECT id, title, content, icon, source_mtime, size, created, modified, last_indexed_at FROM desktop_file_cache ORDER BY last_indexed_at DESC",
    )?;

    let rows = stmt.query_map([], |row| {
        Ok(DesktopFileCacheRecord {
            id: row.get(0)?,
            title: row.get(1)?,
            content: row.get(2)?,
            icon: row.get(3)?,
            source_mtime: row.get(4)?,
            size: row.get(5)?,
            created: row.get(6)?,
            modified: row.get(7)?,
            last_indexed_at: row.get(8)?,
        })
    })?;

    rows.collect()
}

pub fn upsert_desktop_file_cache(records: &[DesktopFileCacheRecord]) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let mut stmt = conn.prepare(
        "INSERT OR REPLACE INTO desktop_file_cache (id, title, content, icon, source_mtime, size, created, modified, last_indexed_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)",
    )?;

    for record in records {
        stmt.execute(rusqlite::params![
            record.id,
            record.title,
            record.content,
            record.icon,
            record.source_mtime,
            record.size,
            record.created,
            record.modified,
            record.last_indexed_at,
        ])?;
    }

    Ok(())
}

pub fn clear_desktop_file_cache() -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute("DELETE FROM desktop_file_cache", [])?;
    Ok(())
}

pub fn delete_desktop_file_cache_by_ids(ids: &[String]) -> Result<(), rusqlite::Error> {
    if ids.is_empty() {
        return Ok(());
    }

    let conn = DbConnectionManager::get()?;
    let mut stmt = conn.prepare("DELETE FROM desktop_file_cache WHERE id = ?1")?;
    for id in ids {
        stmt.execute([id])?;
    }

    Ok(())
}
