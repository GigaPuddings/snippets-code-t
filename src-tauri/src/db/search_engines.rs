use crate::search::SearchEngine;
use crate::db::DbConnectionManager;
use rusqlite;

// ============= 搜索引擎相关数据库操作 =============

/// 获取所有搜索引擎
pub fn get_all_search_engines() -> Result<Vec<SearchEngine>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

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

/// 替换所有搜索引擎
pub fn replace_all_search_engines(engines: &[SearchEngine]) -> Result<(), rusqlite::Error> {
    let mut conn = DbConnectionManager::get()?;
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
