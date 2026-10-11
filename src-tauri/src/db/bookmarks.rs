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
    let mut stmt =
        conn.prepare("SELECT profile_key, node_id FROM launcher_deleted_bookmark_sources")?;
    let deleted = stmt
        .query_map([], |row| {
            Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?))
        })?
        .collect::<Result<std::collections::HashSet<_>, _>>()?;
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
        .filter_map(|mut bookmark| {
            let had_sources = !bookmark.sources.is_empty();
            bookmark.sources.retain(|source| {
                !deleted.contains(&(source.profile_key.clone(), source.node_id.clone()))
            });
            (!empty_origins.contains(&bookmark.id)
                && (!had_sources || !bookmark.sources.is_empty()))
            .then_some(bookmark)
        })
        .collect())
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
