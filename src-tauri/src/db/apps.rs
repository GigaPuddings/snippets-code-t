use crate::apps::AppInfo;
use crate::db::entity::{
    get_all_entities, insert_entities, merge_entities, replace_entities, update_entity_icon,
};
use crate::db::DbConnectionManager;
use crate::plugins::local_launcher::invalidate_apps_cache;
use rusqlite::OptionalExtension;

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
    let mut conn = DbConnectionManager::get_core().map_err(|error| error.to_string())?;
    DbConnectionManager::attach_search_database(&conn).map_err(|error| error.to_string())?;
    remove_app_entry(&mut conn, &id).map_err(|error| error.to_string())?;
    invalidate_apps_cache();
    Ok(())
}

fn remove_app_entry(conn: &mut rusqlite::Connection, id: &str) -> rusqlite::Result<()> {
    let transaction = conn.transaction()?;
    let target: String = transaction
        .query_row(
            "SELECT content FROM main.apps WHERE id = ?1
         UNION ALL SELECT content FROM search_db.apps WHERE id = ?1 LIMIT 1",
            [id],
            |row| row.get(0),
        )
        .optional()?
        .ok_or(rusqlite::Error::QueryReturnedNoRows)?;
    transaction.execute("DELETE FROM main.apps WHERE id = ?1", [id])?;
    // Remove a scanned counterpart underneath an edited/manual item as well.
    transaction.execute(
        "DELETE FROM search_db.apps WHERE id = ?1 OR (source_kind = 'scanner' AND
         RTRIM(REPLACE(LOWER(TRIM(content)), '\\', '/'), '/') =
         RTRIM(REPLACE(LOWER(TRIM(?2)), '\\', '/'), '/'))",
        rusqlite::params![id, target],
    )?;
    transaction.execute(
        "DELETE FROM main.launcher_exclusions WHERE kind = 'app' AND
         RTRIM(REPLACE(LOWER(TRIM(target)), '\\', '/'), '/') =
         RTRIM(REPLACE(LOWER(TRIM(?1)), '\\', '/'), '/')",
        [&target],
    )?;
    // Keep usage history and source fingerprints. A subsequent rescan can insert it again.
    transaction.commit()
}

// 获取所有应用（Tauri command 版本）
pub fn get_apps() -> Result<Vec<AppInfo>, String> {
    get_all_apps().map_err(|e| e.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    fn deletion_fixture() -> rusqlite::Connection {
        let conn = rusqlite::Connection::open_in_memory().unwrap();
        conn.execute_batch(r"ATTACH DATABASE ':memory:' AS search_db;
            CREATE TABLE apps (id TEXT PRIMARY KEY, content TEXT NOT NULL, source_kind TEXT);
            CREATE TABLE search_db.apps (id TEXT PRIMARY KEY, content TEXT NOT NULL, source_kind TEXT);
            CREATE TABLE launcher_exclusions (kind TEXT, target TEXT, title TEXT, PRIMARY KEY(kind, target));
            CREATE TABLE search_history (id TEXT PRIMARY KEY, usage_count INTEGER);
            INSERT INTO search_db.apps VALUES ('scan', 'C:\Apps\Test.exe', 'scanner'), ('other', 'C:\Apps\Other.exe', 'scanner');
            INSERT INTO search_history VALUES ('app:path:c:/apps/test.exe', 42);").unwrap();
        conn
    }

    #[test]
    fn deleting_scanner_record_keeps_history_and_allows_discovery_again_without_hiding() {
        let mut conn = deletion_fixture();
        remove_app_entry(&mut conn, "scan").unwrap();
        assert_eq!(
            conn.query_row("SELECT count(*) FROM search_db.apps", [], |row| row
                .get::<_, i64>(0))
                .unwrap(),
            1
        );
        assert_eq!(
            conn.query_row("SELECT count(*) FROM launcher_exclusions", [], |row| row
                .get::<_, i64>(0))
                .unwrap(),
            0
        );
        assert_eq!(
            conn.query_row("SELECT usage_count FROM search_history", [], |row| row
                .get::<_, i64>(0))
                .unwrap(),
            42
        );
        conn.execute(
            r"INSERT INTO search_db.apps VALUES ('rediscovered', 'C:\Apps\Test.exe', 'scanner')",
            [],
        )
        .unwrap();
        assert_eq!(conn.query_row(r"SELECT count(*) FROM search_db.apps WHERE content = 'C:\Apps\Test.exe'
            AND NOT EXISTS(SELECT 1 FROM launcher_exclusions WHERE kind = 'app' AND target = content)", [], |row| row.get::<_, i64>(0)).unwrap(), 1);
    }

    #[test]
    fn deleting_override_removes_scanned_counterpart_but_keeps_other_manual_items_and_hidden_rules()
    {
        let mut conn = deletion_fixture();
        conn.execute_batch(r"INSERT INTO apps VALUES ('manual', 'c:/apps/test.exe', 'user'), ('manual-copy', 'c:/apps/test.exe', 'user');
            INSERT INTO launcher_exclusions VALUES ('app', 'C:\Apps\Test.exe', 'Old rule'), ('app', 'C:\Apps\Other.exe', 'Keep hidden');").unwrap();
        remove_app_entry(&mut conn, "manual").unwrap();
        assert_eq!(
            conn.query_row("SELECT id FROM apps", [], |row| row.get::<_, String>(0))
                .unwrap(),
            "manual-copy"
        );
        assert_eq!(
            conn.query_row("SELECT id FROM search_db.apps", [], |row| row
                .get::<_, String>(0))
                .unwrap(),
            "other"
        );
        assert_eq!(
            conn.query_row("SELECT title FROM launcher_exclusions", [], |row| row
                .get::<_, String>(0))
                .unwrap(),
            "Keep hidden"
        );
    }

    #[test]
    fn deletion_failures_roll_back_the_manual_item_and_never_report_missing_ids_as_success() {
        let mut conn = deletion_fixture();
        assert!(remove_app_entry(&mut conn, "missing").is_err());
        conn.execute(
            r"INSERT INTO apps VALUES ('manual', 'C:\Apps\Test.exe', 'user')",
            [],
        )
        .unwrap();
        conn.execute_batch("CREATE TRIGGER search_db.prevent_delete BEFORE DELETE ON apps BEGIN SELECT RAISE(ABORT, 'blocked'); END;").unwrap();
        assert!(remove_app_entry(&mut conn, "manual").is_err());
        assert_eq!(
            conn.query_row("SELECT count(*) FROM apps", [], |row| row.get::<_, i64>(0))
                .unwrap(),
            1
        );
        assert_eq!(
            conn.query_row("SELECT count(*) FROM search_db.apps", [], |row| row
                .get::<_, i64>(0))
                .unwrap(),
            2
        );
    }
    #[test]
    fn old_helper_rows_are_filtered_but_explicit_manual_entries_are_preserved() {
        let mut app = AppInfo {
            id: "id".into(),
            title: "Uninstall App".into(),
            content: "missing.exe".into(),
            icon: None,
            summarize: "app".into(),
            usage_count: 0,
            metadata: Default::default(),
        };
        for (title, content) in [
            ("Uninstall App", "missing.exe"),
            ("卸载百度网盘", "shell:AppsFolder\\卸载百度网盘"),
            (
                "卸载电脑软件",
                "shell:AppsFolder\\Microsoft.AutoGenerated.test",
            ),
            ("Microsoft Office", "shell:AppsFolder\\OfficeClickToRun.exe"),
        ] {
            app.title = title.into();
            app.content = content.into();
            assert!(!is_visible_app(&app, false, false));
            assert!(!is_visible_app(&app, false, true));
            assert!(is_visible_app(&app, true, false));
        }
    }
}
