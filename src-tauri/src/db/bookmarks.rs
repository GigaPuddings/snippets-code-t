use crate::bookmarks::BookmarkInfo;
use crate::db::entity::{get_all_entities, replace_entities, update_entity_icon};
use crate::db::DbConnectionManager;
use crate::plugins::local_launcher::invalidate_bookmarks_cache;

// ============= 书签相关数据库操作 =============

fn table_exists(conn: &rusqlite::Connection, table_name: &str) -> Result<bool, rusqlite::Error> {
    conn.query_row(
        "SELECT EXISTS(
             SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?1
         )",
        [table_name],
        |row| row.get(0),
    )
}

fn delete_scanned_bookmark_by_id(id: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get_search()?;
    if table_exists(&conn, "bookmarks")? {
        conn.execute(
            "DELETE FROM bookmarks WHERE id = ?1 AND source_kind = 'scanner'",
            rusqlite::params![id],
        )?;
    }
    Ok(())
}

fn delete_scanned_bookmark_by_content(content: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get_search()?;
    if table_exists(&conn, "bookmarks")? {
        conn.execute(
            "DELETE FROM bookmarks WHERE content = ?1 AND source_kind = 'scanner'",
            rusqlite::params![content],
        )?;
    }
    Ok(())
}

pub fn replace_bookmarks(bookmarks: &[BookmarkInfo]) -> Result<(), rusqlite::Error> {
    refresh_user_sources(bookmarks)?;
    let result = replace_entities(bookmarks);
    if result.is_ok() {
        invalidate_bookmarks_cache();
    }
    result
}

// Refresh provenance without replacing user-edited titles/icons.
fn refresh_user_sources(bookmarks: &[BookmarkInfo]) -> Result<(), rusqlite::Error> {
    let mut conn = DbConnectionManager::get_core()?;
    let transaction = conn.transaction()?;
    let rows = transaction
        .prepare("SELECT id, content, metadata FROM bookmarks WHERE source_kind = 'user'")?
        .query_map([], |row| {
            Ok((
                row.get::<_, String>(0)?,
                row.get::<_, String>(1)?,
                row.get::<_, String>(2)?,
            ))
        })?
        .collect::<Result<Vec<_>, _>>()?;
    for (id, content, metadata) in rows {
        let mut value: serde_json::Value =
            serde_json::from_str(&metadata).unwrap_or_else(|_| serde_json::json!({}));
        let was_browser = value
            .get("browser_origin")
            .and_then(|value| value.as_bool())
            .unwrap_or(false)
            || value
                .get("sources")
                .and_then(|value| value.as_array())
                .is_some_and(|sources| !sources.is_empty());
        if !was_browser {
            continue;
        }
        let sources = bookmarks
            .iter()
            .find(|bookmark| bookmark.content == content)
            .map(|bookmark| bookmark.sources.as_slice())
            .unwrap_or_default();
        value["sources"] = serde_json::json!(sources);
        value["browser_origin"] = serde_json::json!(true);
        transaction.execute(
            "UPDATE bookmarks SET metadata = ?1 WHERE id = ?2",
            rusqlite::params![value.to_string(), id],
        )?;
    }
    transaction.commit()
}

// 获取所有书签
pub fn get_all_bookmarks() -> Result<Vec<BookmarkInfo>, rusqlite::Error> {
    let conn = DbConnectionManager::get_core()?;
    let empty_origins = conn
        .prepare("SELECT id, metadata FROM bookmarks WHERE source_kind = 'user'")?
        .query_map([], |row| {
            Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?))
        })?
        .collect::<Result<Vec<_>, _>>()?
        .into_iter()
        .filter_map(|(id, metadata)| {
            let value: serde_json::Value = serde_json::from_str(&metadata).ok()?;
            (value
                .get("browser_origin")
                .and_then(|value| value.as_bool())
                == Some(true)
                && value
                    .get("sources")
                    .and_then(|value| value.as_array())
                    .is_some_and(|sources| sources.is_empty()))
            .then_some(id)
        })
        .collect::<std::collections::HashSet<_>>();
    Ok(get_all_entities::<BookmarkInfo>()?
        .into_iter()
        .filter(|bookmark| !empty_origins.contains(&bookmark.id))
        .collect())
}

fn remove_sources_from_connection(
    conn: &mut rusqlite::Connection,
    sources: &[crate::bookmarks::BookmarkSource],
) -> Result<(), rusqlite::Error> {
    if !table_exists(conn, "bookmarks")? {
        return Ok(());
    }
    let selected: std::collections::HashSet<_> = sources
        .iter()
        .map(|source| (source.profile_key.as_str(), source.node_id.as_str()))
        .collect();
    let tx = conn.transaction()?;
    let rows = tx
        .prepare("SELECT id,metadata,source_kind FROM bookmarks")?
        .query_map([], |row| {
            Ok((
                row.get::<_, String>(0)?,
                row.get::<_, String>(1)?,
                row.get::<_, String>(2)?,
            ))
        })?
        .collect::<Result<Vec<_>, _>>()?;
    for (id, metadata, kind) in rows {
        let Ok(mut value) = serde_json::from_str::<serde_json::Value>(&metadata) else {
            continue;
        };
        let Some(origins) = value
            .get_mut("sources")
            .and_then(serde_json::Value::as_array_mut)
        else {
            continue;
        };
        let before = origins.len();
        origins.retain(|source| {
            !selected.contains(&(
                source["profile_key"].as_str().unwrap_or_default(),
                source["node_id"].as_str().unwrap_or_default(),
            ))
        });
        if origins.len() == before {
            continue;
        }
        if origins.is_empty() && kind == "scanner" {
            tx.execute("DELETE FROM bookmarks WHERE id=?1", [&id])?;
        } else {
            value["browser_origin"] = serde_json::json!(true);
            tx.execute(
                "UPDATE bookmarks SET metadata=?1 WHERE id=?2",
                rusqlite::params![value.to_string(), id],
            )?;
        }
    }
    tx.commit()
}

pub fn remove_browser_bookmark_sources(
    sources: &[crate::bookmarks::BookmarkSource],
) -> Result<(), rusqlite::Error> {
    if sources.is_empty() {
        return Ok(());
    }
    remove_sources_from_connection(&mut DbConnectionManager::get_core()?, sources)?;
    remove_sources_from_connection(&mut DbConnectionManager::get_search()?, sources)
}

// 更新书签图标
pub fn update_bookmark_icon(bookmark_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    let result = update_entity_icon::<BookmarkInfo>(bookmark_id, icon);
    if result.is_ok() {
        invalidate_bookmarks_cache();
    }
    result
}

// 更新书签图标（不触发缓存失效，用于批量操作）
pub fn update_bookmark_icon_silent(bookmark_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    update_entity_icon::<BookmarkInfo>(bookmark_id, icon)
}

// 统计书签数量
pub fn count_bookmarks() -> Result<i64, rusqlite::Error> {
    get_all_bookmarks().map(|bookmarks| bookmarks.len() as i64)
}

// ============= 书签管理函数 =============

// 添加单个书签
pub fn add_bookmark(
    title: String,
    content: String,
    icon: Option<String>,
) -> Result<String, String> {
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;

    let id = uuid::Uuid::new_v4().to_string();
    conn.execute(
        "INSERT INTO bookmarks (id, title, content, icon, summarize, source_kind)
         VALUES (?1, ?2, ?3, ?4, ?5, 'user')",
        rusqlite::params![&id, &title, &content, &icon, "bookmark"],
    )
    .map_err(|e| e.to_string())?;
    conn.execute(
        "DELETE FROM launcher_exclusions WHERE kind = 'bookmark' AND target = ?1",
        [&content],
    )
    .map_err(|e| e.to_string())?;
    delete_scanned_bookmark_by_content(&content).map_err(|e| e.to_string())?;

    invalidate_bookmarks_cache();

    Ok(id)
}

// 更新单个书签
pub fn update_bookmark(
    id: String,
    title: String,
    content: String,
    icon: Option<String>,
) -> Result<(), String> {
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;

    DbConnectionManager::attach_search_database(&conn).map_err(|e| e.to_string())?;
    let metadata = conn.query_row("SELECT metadata FROM main.bookmarks WHERE id = ?1 UNION ALL SELECT metadata FROM search_db.bookmarks WHERE id = ?1 LIMIT 1", [&id], |row| row.get::<_, String>(0)).unwrap_or_else(|_| "{}".into());
    let mut metadata: serde_json::Value =
        serde_json::from_str(&metadata).unwrap_or_else(|_| serde_json::json!({}));
    let sources: Vec<crate::bookmarks::BookmarkSource> = serde_json::from_value(
        metadata
            .get("sources")
            .cloned()
            .unwrap_or_else(|| serde_json::json!([])),
    )
    .unwrap_or_default();
    let sources: Vec<_> = sources
        .into_iter()
        .filter(|source| source.url == content)
        .collect();
    metadata["browser_origin"] = serde_json::json!(!sources.is_empty());
    metadata["sources"] = serde_json::json!(sources);
    let metadata = metadata.to_string();
    let updated = conn
        .execute(
            "UPDATE bookmarks
         SET title = ?1, content = ?2, icon = ?3, source_kind = 'user', metadata = ?5
         WHERE id = ?4",
            rusqlite::params![&title, &content, &icon, &id, &metadata],
        )
        .map_err(|e| e.to_string())?;
    if updated == 0 {
        conn.execute(
            "INSERT INTO bookmarks (id, title, content, icon, summarize, source_kind, metadata)
             VALUES (?1, ?2, ?3, ?4, ?5, 'user', ?6)",
            rusqlite::params![&id, &title, &content, &icon, "bookmark", &metadata],
        )
        .map_err(|e| e.to_string())?;
    }
    delete_scanned_bookmark_by_id(&id).map_err(|e| e.to_string())?;
    conn.execute(
        "DELETE FROM launcher_exclusions WHERE kind = 'bookmark' AND target = ?1",
        [&content],
    )
    .map_err(|e| e.to_string())?;
    delete_scanned_bookmark_by_content(&content).map_err(|e| e.to_string())?;

    invalidate_bookmarks_cache();

    Ok(())
}

// 删除单个书签
pub fn delete_bookmark(id: String) -> Result<(), String> {
    super::launcher::hide_launcher_entry("bookmark", &id)?;
    invalidate_bookmarks_cache();
    Ok(())
}

// 获取所有书签（Tauri command 版本）
pub fn get_bookmarks() -> Result<Vec<BookmarkInfo>, String> {
    get_all_bookmarks().map_err(|e| e.to_string())
}

#[cfg(test)]
mod source_deletion_tests {
    use super::*;
    use serde_json::json;

    #[test]
    fn index_removal_preserves_other_sources_user_edits_and_manual_bookmarks() {
        let mut conn = rusqlite::Connection::open_in_memory().unwrap();
        conn.execute_batch("CREATE TABLE bookmarks(id TEXT PRIMARY KEY,metadata TEXT,source_kind TEXT,title TEXT,icon TEXT,usage_count INTEGER)").unwrap();
        let first = crate::bookmarks::BookmarkSource {
            browser: "Chrome".into(),
            profile: "Default".into(),
            profile_key: "chrome".into(),
            node_id: "42".into(),
            folder_path: Vec::new(),
            storage_path: "Bookmarks".into(),
            url: "https://example.com/".into(),
            title: "Original".into(),
        };
        let mut second = first.clone();
        second.profile_key = "edge".into();
        second.browser = "Edge".into();
        for (id, kind, sources) in [
            ("scanner", "scanner", vec![first.clone(), second.clone()]),
            ("edited", "user", vec![first.clone(), second.clone()]),
            ("last", "scanner", vec![first.clone()]),
            ("manual", "user", Vec::new()),
        ] {
            conn.execute(
                "INSERT INTO bookmarks VALUES(?1,?2,?3,'My title','cached-icon',7)",
                rusqlite::params![
                    id,
                    json!({"sources":sources,"other":"kept"}).to_string(),
                    kind
                ],
            )
            .unwrap();
        }
        remove_sources_from_connection(&mut conn, &[first]).unwrap();
        assert_eq!(
            conn.query_row(
                "SELECT COUNT(*) FROM bookmarks WHERE id='last'",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            0
        );
        let metadata: String = conn
            .query_row(
                "SELECT metadata FROM bookmarks WHERE id='scanner'",
                [],
                |row| row.get(0),
            )
            .unwrap();
        let metadata: serde_json::Value = serde_json::from_str(&metadata).unwrap();
        assert_eq!(metadata["sources"].as_array().unwrap().len(), 1);
        assert_eq!(metadata["sources"][0]["browser"], "Edge");
        assert_eq!(metadata["other"], "kept");
        assert_eq!(
            conn.query_row(
                "SELECT title || icon || usage_count FROM bookmarks WHERE id='edited'",
                [],
                |row| row.get::<_, String>(0)
            )
            .unwrap(),
            "My titlecached-icon7"
        );
        assert_eq!(
            conn.query_row(
                "SELECT COUNT(*) FROM bookmarks WHERE id='manual'",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            1
        );
        remove_sources_from_connection(&mut conn, &[second]).unwrap();
        assert_eq!(
            conn.query_row(
                "SELECT COUNT(*) FROM bookmarks WHERE id='scanner'",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            0
        );
        let metadata: String = conn
            .query_row(
                "SELECT metadata FROM bookmarks WHERE id='edited'",
                [],
                |row| row.get(0),
            )
            .unwrap();
        assert_eq!(
            serde_json::from_str::<serde_json::Value>(&metadata).unwrap()["browser_origin"],
            true
        );
    }
}
