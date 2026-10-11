use crate::apps::AppInfo;
use crate::db::entity::{
    get_all_entities, insert_entities, merge_entities, replace_entities, update_entity_icon,
};
use crate::db::DbConnectionManager;
use crate::plugins::local_launcher::invalidate_apps_cache;

// ============= 应用相关数据库操作 =============

fn table_exists(conn: &rusqlite::Connection, table_name: &str) -> Result<bool, rusqlite::Error> {
    conn.query_row(
        "SELECT EXISTS(
             SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?1
         )",
        [table_name],
        |row| row.get(0),
    )
}

fn delete_scanned_app_by_id(id: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get_search()?;
    if table_exists(&conn, "apps")? {
        conn.execute(
            "DELETE FROM apps WHERE id = ?1 AND source_kind = 'scanner'",
            rusqlite::params![id],
        )?;
    }
    Ok(())
}

fn delete_scanned_app_by_content(content: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get_search()?;
    if table_exists(&conn, "apps")? {
        conn.execute(
            "DELETE FROM apps WHERE content = ?1 AND source_kind = 'scanner'",
            rusqlite::params![content],
        )?;
    }
    Ok(())
}

// 批量插入应用
pub fn insert_apps(apps: &[AppInfo]) -> Result<(), rusqlite::Error> {
    let result = insert_entities(apps);
    if result.is_ok() {
        invalidate_apps_cache();
    }
    result
}

pub fn replace_apps(apps: &[AppInfo]) -> Result<(), rusqlite::Error> {
    let result = replace_entities(apps);
    if result.is_ok() {
        invalidate_apps_cache();
    }
    result
}

pub fn merge_apps(apps: &[AppInfo]) -> Result<(), rusqlite::Error> {
    let result = merge_entities(apps);
    if result.is_ok() {
        invalidate_apps_cache();
    }
    result
}

fn is_visible_app(app: &AppInfo, manual: bool, show_auxiliary: bool) -> bool {
    if manual {
        return true;
    }
    let legacy_alias = dirs::data_local_dir().is_some_and(|root| {
        let prefix = root
            .join("Microsoft/WindowsApps")
            .to_string_lossy()
            .to_lowercase();
        app.content
            .replace('/', "\\")
            .to_lowercase()
            .starts_with(&format!("{}\\", prefix.replace('/', "\\")))
    });
    crate::apps::is_launchable_candidate(&app.title, &app.content)
        && (show_auxiliary || (!app.metadata.auxiliary && !legacy_alias))
}

// Apply the policy at read time as well, so a partial scan cannot retain old helper rows.
pub fn get_all_apps() -> Result<Vec<AppInfo>, rusqlite::Error> {
    let show_auxiliary = super::launcher::launcher_settings()
        .map(|settings| settings.show_auxiliary)
        .unwrap_or(false);
    let conn = DbConnectionManager::get_core()?;
    let manual_ids = conn
        .prepare("SELECT id FROM apps WHERE COALESCE(source_kind, 'user') <> 'scanner'")?
        .query_map([], |row| row.get::<_, String>(0))?
        .collect::<Result<std::collections::HashSet<_>, _>>()?;
    Ok(get_all_entities::<AppInfo>()?
        .into_iter()
        .filter(|app| is_visible_app(app, manual_ids.contains(&app.id), show_auxiliary))
        .collect())
}

// 更新应用图标
pub fn update_app_icon(app_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    let result = update_entity_icon::<AppInfo>(app_id, icon);
    if result.is_ok() {
        invalidate_apps_cache();
    }
    result
}

// 更新应用图标（不触发缓存失效，用于批量操作）
pub fn update_app_icon_silent(app_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    update_entity_icon::<AppInfo>(app_id, icon)
}

// 统计应用数量
pub fn count_apps() -> Result<i64, rusqlite::Error> {
    get_all_apps().map(|apps| apps.len() as i64)
}

// ============= 应用管理函数 =============

// 添加单个应用
pub fn add_app(title: String, content: String, icon: Option<String>) -> Result<String, String> {
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;

    let id = uuid::Uuid::new_v4().to_string();
    conn.execute(
        "INSERT INTO apps (id, title, content, icon, summarize, source_kind)
         VALUES (?1, ?2, ?3, ?4, ?5, 'user')",
        rusqlite::params![&id, &title, &content, &icon, "app"],
    )
    .map_err(|e| e.to_string())?;
    conn.execute(
        "DELETE FROM launcher_exclusions WHERE kind = 'app' AND target = ?1 COLLATE NOCASE",
        [&content],
    )
    .map_err(|e| e.to_string())?;
    delete_scanned_app_by_content(&content).map_err(|e| e.to_string())?;

    invalidate_apps_cache();

    Ok(id)
}

// 更新单个应用
pub fn update_app(
    id: String,
    title: String,
    content: String,
    icon: Option<String>,
) -> Result<(), String> {
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;

    DbConnectionManager::attach_search_database(&conn).map_err(|e| e.to_string())?;
    let metadata = conn.query_row("SELECT metadata FROM main.apps WHERE id = ?1 UNION ALL SELECT metadata FROM search_db.apps WHERE id = ?1 LIMIT 1", [&id], |row| row.get::<_, String>(0)).unwrap_or_else(|_| "{}".into());
    let mut metadata: crate::apps::AppMetadata =
        serde_json::from_str(&metadata).unwrap_or_default();
    metadata.auxiliary = false;
    metadata.discovery_source = "manual".into();
    let metadata = serde_json::to_string(&metadata).map_err(|e| e.to_string())?;
    let updated = conn
        .execute(
            "UPDATE apps
         SET title = ?1, content = ?2, icon = ?3, source_kind = 'user', metadata = ?5
         WHERE id = ?4",
            rusqlite::params![&title, &content, &icon, &id, &metadata],
        )
        .map_err(|e| e.to_string())?;
    if updated == 0 {
        conn.execute(
            "INSERT INTO apps (id, title, content, icon, summarize, source_kind, metadata)
             VALUES (?1, ?2, ?3, ?4, ?5, 'user', ?6)",
            rusqlite::params![&id, &title, &content, &icon, "app", &metadata],
        )
        .map_err(|e| e.to_string())?;
    }
    delete_scanned_app_by_id(&id).map_err(|e| e.to_string())?;
    conn.execute(
        "DELETE FROM launcher_exclusions WHERE kind = 'app' AND target = ?1 COLLATE NOCASE",
        [&content],
    )
    .map_err(|e| e.to_string())?;
    delete_scanned_app_by_content(&content).map_err(|e| e.to_string())?;

    invalidate_apps_cache();

    Ok(())
}

// 删除单个应用
pub fn delete_app(id: String) -> Result<(), String> {
    super::launcher::hide_launcher_entry("app", &id)?;
    invalidate_apps_cache();
    Ok(())
}

// 获取所有应用（Tauri command 版本）
pub fn get_apps() -> Result<Vec<AppInfo>, String> {
    get_all_apps().map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn old_helper_rows_are_filtered_but_explicit_manual_entries_are_preserved() {
        let app = AppInfo {
            id: "id".into(),
            title: "Uninstall App".into(),
            content: "missing.exe".into(),
            icon: None,
            summarize: "app".into(),
            usage_count: 0,
            metadata: Default::default(),
        };
        assert!(!is_visible_app(&app, false, false));
        assert!(!is_visible_app(&app, false, true));
        assert!(is_visible_app(&app, true, false));
    }
}
