use crate::db::DbConnectionManager;
use crate::json_config;
use crate::APP;

// ============= 数据库初始化 =============

// 初始化数据库 - 创建核心用户数据和可重建搜索索引数据库
pub fn init_db() -> Result<(), rusqlite::Error> {
    let app = APP
        .get()
        .ok_or_else(|| rusqlite::Error::InvalidPath("APP 未初始化".into()))?;
    let data_dir = json_config::get_data_dir(app);

    let core_conn = DbConnectionManager::open_core_at(&data_dir)?;
    let search_conn = DbConnectionManager::open_search_at(&data_dir)?;

    create_core_tables(&core_conn)?;
    create_search_tables(&search_conn)?;

    // 注意：插件拥有的数据表不在核心初始化中创建。
    // 这些表由插件启用/安装生命周期按需创建，卸载插件时可一并清理。

    Ok(())
}

fn create_core_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    create_core_data_contract_tables(conn)?;
    create_search_history_table(conn)?;
    create_user_settings_table(conn)?;

    Ok(())
}

fn create_search_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    create_search_data_contract_tables(conn)?;
    create_icon_cache_table(conn)?;

    Ok(())
}

pub fn mark_index_success(
    source: &str,
    storage_schema_version: u64,
    extractor_version: u64,
) -> Result<(), rusqlite::Error> {
    mark_index_success_with_fingerprint(source, storage_schema_version, extractor_version, None)
}

pub fn mark_index_success_with_fingerprint(
    source: &str,
    storage_schema_version: u64,
    extractor_version: u64,
    source_fingerprint: Option<&str>,
) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get_search()?;
    conn.execute(
        "INSERT INTO index_meta (
             source, storage_schema_version, extractor_version,
             last_success_at, last_error, source_fingerprint
         ) VALUES (?1, ?2, ?3, datetime('now'), NULL, ?4)
         ON CONFLICT(source) DO UPDATE SET
             storage_schema_version = excluded.storage_schema_version,
             extractor_version = excluded.extractor_version,
             last_success_at = excluded.last_success_at,
             last_error = NULL,
             source_fingerprint = excluded.source_fingerprint",
        rusqlite::params![
            source,
            storage_schema_version,
            extractor_version,
            source_fingerprint
        ],
    )?;
    Ok(())
}

pub fn index_source_fingerprint_changed(
    source: &str,
    storage_schema_version: u64,
    extractor_version: u64,
    source_fingerprint: &str,
) -> Result<bool, rusqlite::Error> {
    let conn = DbConnectionManager::get_search()?;
    let state = conn.query_row(
        "SELECT storage_schema_version, extractor_version, source_fingerprint
         FROM index_meta
         WHERE source = ?1",
        [source],
        |row| {
            Ok((
                row.get::<_, u64>(0)?,
                row.get::<_, u64>(1)?,
                row.get::<_, Option<String>>(2)?,
            ))
        },
    );

    match state {
        Ok((stored_schema, stored_extractor, stored_fingerprint)) => Ok(stored_schema
            != storage_schema_version
            || stored_extractor != extractor_version
            || stored_fingerprint.as_deref() != Some(source_fingerprint)),
        Err(rusqlite::Error::QueryReturnedNoRows) => Ok(true),
        Err(error) => Err(error),
    }
}

fn create_core_data_contract_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    conn.execute_batch(
        "CREATE TABLE IF NOT EXISTS schema_migrations (
             component TEXT NOT NULL,
             version INTEGER NOT NULL,
             applied_at TEXT NOT NULL DEFAULT (datetime('now')),
             PRIMARY KEY (component, version)
         );
         INSERT OR IGNORE INTO schema_migrations(component, version)
         VALUES ('core', 1);
         PRAGMA user_version = 1;",
    )
}

fn create_search_data_contract_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    conn.execute_batch(
        "CREATE TABLE IF NOT EXISTS schema_migrations (
             component TEXT NOT NULL,
             version INTEGER NOT NULL,
             applied_at TEXT NOT NULL DEFAULT (datetime('now')),
             PRIMARY KEY (component, version)
         );
         CREATE TABLE IF NOT EXISTS index_meta (
             source TEXT PRIMARY KEY,
             storage_schema_version INTEGER NOT NULL,
             extractor_version INTEGER NOT NULL,
             last_success_at TEXT,
             last_error TEXT,
             source_fingerprint TEXT
         );
         INSERT OR IGNORE INTO schema_migrations(component, version)
         VALUES ('search', 1);
         PRAGMA user_version = 1;",
    )?;

    // Existing search databases predate source fingerprints. SQLite has no
    // `ADD COLUMN IF NOT EXISTS`, so inspect the schema before migrating.
    let has_source_fingerprint = {
        let mut stmt = conn.prepare("PRAGMA table_info(index_meta)")?;
        let mut columns = stmt.query_map([], |row| row.get::<_, String>(1))?;
        columns.any(|column| column.is_ok_and(|column| column == "source_fingerprint"))
    };
    if !has_source_fingerprint {
        conn.execute(
            "ALTER TABLE index_meta ADD COLUMN source_fingerprint TEXT",
            [],
        )?;
    }

    Ok(())
}

fn create_local_launcher_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 创建 apps 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS apps (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            icon TEXT,
            summarize TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            usage_count INTEGER DEFAULT 0,
            source_kind TEXT NOT NULL DEFAULT 'scanner'
        )",
        [],
    )?;

    // 创建 bookmarks 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS bookmarks (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            icon TEXT,
            summarize TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            usage_count INTEGER DEFAULT 0,
            source_kind TEXT NOT NULL DEFAULT 'scanner'
        )",
        [],
    )?;

    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_apps_usage ON apps(usage_count DESC)",
        [],
    );
    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_bookmarks_usage ON bookmarks(usage_count DESC)",
        [],
    );
    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_apps_created ON apps(created_at DESC)",
        [],
    );
    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_bookmarks_created ON bookmarks(created_at DESC)",
        [],
    );
    conn.execute(
        "INSERT OR IGNORE INTO schema_migrations(component, version)
         VALUES ('local-launcher', 1)",
        [],
    )?;

    Ok(())
}

fn create_icon_cache_table(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 创建 icon_cache 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS icon_cache (
            key TEXT PRIMARY KEY,
            data TEXT NOT NULL,
            timestamp INTEGER NOT NULL,
            source_mtime INTEGER
        )",
        [],
    )?;

    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_icon_cache_timestamp ON icon_cache(timestamp)",
        [],
    );

    Ok(())
}

fn create_desktop_files_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 创建 desktop_file_cache 表，用于持久化桌面文件检索缓存
    conn.execute(
        "CREATE TABLE IF NOT EXISTS desktop_file_cache (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            icon TEXT,
            source_mtime INTEGER,
            size INTEGER,
            created TEXT,
            modified TEXT,
            last_indexed_at INTEGER NOT NULL
        )",
        [],
    )?;

    Ok(())
}

pub fn ensure_plugin_storage(plugin_id: &str) -> Result<(), rusqlite::Error> {
    match plugin_id {
        "local-launcher" => {
            let core = DbConnectionManager::get_core()?;
            let search = DbConnectionManager::get_search()?;
            create_core_tables(&core)?;
            create_search_tables(&search)?;
            create_local_launcher_tables(&core)?;
            create_local_launcher_tables(&search)
        }
        "desktop-files" => {
            let search = DbConnectionManager::get_search()?;
            create_search_tables(&search)?;
            create_desktop_files_tables(&search)
        }
        "search-engines" => {
            let core = DbConnectionManager::get_core()?;
            create_core_tables(&core)?;
            create_search_engines_table(&core)
        }
        "todo" => {
            let core = DbConnectionManager::get_core()?;
            create_core_tables(&core)?;
            create_alarm_cards_table(&core)
        }
        _ => Ok(()),
    }
}

pub fn clear_plugin_storage(plugin_id: &str) -> Result<(), rusqlite::Error> {
    match plugin_id {
        "local-launcher" => {
            let core = DbConnectionManager::get_core()?;
            let search = DbConnectionManager::get_search()?;
            for conn in [&core, &search] {
                conn.execute("DROP TABLE IF EXISTS apps", [])?;
                conn.execute("DROP TABLE IF EXISTS bookmarks", [])?;
                conn.execute("DROP INDEX IF EXISTS idx_apps_usage", [])?;
                conn.execute("DROP INDEX IF EXISTS idx_bookmarks_usage", [])?;
                conn.execute("DROP INDEX IF EXISTS idx_apps_created", [])?;
                conn.execute("DROP INDEX IF EXISTS idx_bookmarks_created", [])?;
            }
            search.execute(
                "DELETE FROM index_meta WHERE source IN ('apps', 'bookmarks')",
                [],
            )?;
            crate::plugins::local_launcher::invalidate_apps_cache();
            crate::plugins::local_launcher::invalidate_bookmarks_cache();
        }
        "desktop-files" => {
            let search = DbConnectionManager::get_search()?;
            search.execute("DROP TABLE IF EXISTS desktop_file_cache", [])?;
            let _ = search.execute(
                "DELETE FROM icon_cache WHERE key LIKE 'desktop-file-icon:%'",
                [],
            );
            crate::plugins::desktop_files::invalidate_desktop_files_cache();
        }
        "search-engines" => {
            let conn = DbConnectionManager::get_core()?;
            conn.execute("DROP TABLE IF EXISTS search_engines", [])?;
        }
        "todo" => {
            let conn = DbConnectionManager::get_core()?;
            conn.execute("DROP TABLE IF EXISTS alarm_cards", [])?;
        }
        _ => {}
    }

    Ok(())
}

fn create_search_engines_table(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 创建 search_engines 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS search_engines (
            id TEXT PRIMARY KEY,
            keyword TEXT NOT NULL,
            name TEXT NOT NULL,
            icon TEXT NOT NULL,
            url TEXT NOT NULL,
            enabled INTEGER NOT NULL
        )",
        [],
    )?;

    Ok(())
}

fn create_alarm_cards_table(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 创建 alarm_cards 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS alarm_cards (
            id TEXT PRIMARY KEY,
            time TEXT NOT NULL,
            title TEXT NOT NULL,
            weekdays TEXT NOT NULL,
            reminder_time TEXT NOT NULL,
            is_active INTEGER NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            alarm_type TEXT DEFAULT 'Weekly',
            specific_dates TEXT
        )",
        [],
    )?;

    Ok(())
}

fn create_search_history_table(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 创建 search_history 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS search_history (
            id TEXT PRIMARY KEY,
            usage_count INTEGER NOT NULL,
            last_used_at TEXT NOT NULL
        )",
        [],
    )?;

    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_search_history_usage ON search_history(usage_count DESC)",
        [],
    );
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_search_history_last_used ON search_history(last_used_at DESC)", []);

    Ok(())
}

fn create_user_settings_table(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 创建 user_settings 表 (用于存储GitHub同步配置)
    conn.execute(
        "CREATE TABLE IF NOT EXISTS user_settings (
            id INTEGER PRIMARY KEY CHECK (id = 1),
            github_token TEXT,
            github_username TEXT,
            github_repo TEXT,
            last_sync_time TEXT,
            auto_sync_on_exit INTEGER DEFAULT 0,
            auto_restore_on_start INTEGER DEFAULT 0,
            created_at TEXT DEFAULT (datetime('now')),
            updated_at TEXT DEFAULT (datetime('now'))
        )",
        [],
    )?;

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;
    use std::path::PathBuf;

    struct TempDataDir {
        path: PathBuf,
    }

    impl TempDataDir {
        fn new() -> Self {
            let path = std::env::temp_dir()
                .join(format!("snippets-code-db-split-{}", uuid::Uuid::new_v4()));
            fs::create_dir_all(&path).expect("create temp data dir");
            Self { path }
        }
    }

    impl Drop for TempDataDir {
        fn drop(&mut self) {
            let _ = fs::remove_dir_all(&self.path);
        }
    }

    fn table_exists_for_test(conn: &rusqlite::Connection, table_name: &str) -> bool {
        conn.query_row(
            "SELECT EXISTS(
                 SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?1
             )",
            [table_name],
            |row| row.get(0),
        )
        .expect("check table existence")
    }

    fn column_exists_for_test(
        conn: &rusqlite::Connection,
        table_name: &str,
        column_name: &str,
    ) -> bool {
        let mut stmt = conn
            .prepare(&format!("PRAGMA table_info({})", table_name))
            .expect("prepare table info");
        let found = stmt
            .query_map([], |row| row.get::<_, String>(1))
            .expect("read table info")
            .filter_map(Result::ok)
            .any(|column| column == column_name);
        found
    }

    fn open_current_databases(temp: &TempDataDir) -> (rusqlite::Connection, rusqlite::Connection) {
        let core = DbConnectionManager::open_core_at(&temp.path).expect("open core database");
        let search = DbConnectionManager::open_search_at(&temp.path).expect("open search database");
        create_core_tables(&core).expect("create core schema");
        create_search_tables(&search).expect("create search schema");
        (core, search)
    }

    #[test]
    fn current_databases_keep_owned_tables_separate() {
        let temp = TempDataDir::new();
        let (core, search) = open_current_databases(&temp);

        create_local_launcher_tables(&core).expect("create core launcher storage");
        create_local_launcher_tables(&search).expect("create search launcher storage");
        create_search_engines_table(&core).expect("create search engines storage");
        create_alarm_cards_table(&core).expect("create todo storage");
        create_desktop_files_tables(&search).expect("create desktop files storage");

        for table in [
            "search_history",
            "user_settings",
            "search_engines",
            "alarm_cards",
        ] {
            assert!(table_exists_for_test(&core, table));
            assert!(!table_exists_for_test(&search, table));
        }
        for table in ["index_meta", "icon_cache", "desktop_file_cache"] {
            assert!(!table_exists_for_test(&core, table));
            assert!(table_exists_for_test(&search, table));
        }
    }

    #[test]
    fn existing_index_metadata_adds_source_fingerprint_column() {
        let temp = TempDataDir::new();
        let search = DbConnectionManager::open_search_at(&temp.path).expect("open search database");
        search
            .execute_batch(
                "CREATE TABLE index_meta (
                    source TEXT PRIMARY KEY,
                    storage_schema_version INTEGER NOT NULL,
                    extractor_version INTEGER NOT NULL,
                    last_success_at TEXT,
                    last_error TEXT
                );",
            )
            .expect("create legacy index metadata");

        create_search_tables(&search).expect("migrate search schema");

        assert!(column_exists_for_test(
            &search,
            "index_meta",
            "source_fingerprint"
        ));
    }

    #[test]
    fn search_database_can_be_recreated_without_core_data_loss() {
        let temp = TempDataDir::new();
        let (core, search) = open_current_databases(&temp);
        create_local_launcher_tables(&core).expect("create core launcher storage");
        create_local_launcher_tables(&search).expect("create search launcher storage");

        core.execute(
            "INSERT INTO user_settings (id, github_username, github_repo)
             VALUES (1, 'zero', 'repo')",
            [],
        )
        .expect("insert core settings");
        core.execute(
            "INSERT INTO apps (
                id, title, content, icon, summarize, created_at, usage_count, source_kind
             )
             VALUES ('manual-app', 'Manual', '/manual', NULL, 'app', '2026-01-01', 0, 'user')",
            [],
        )
        .expect("insert manual launcher item");
        search
            .execute(
                "INSERT INTO apps (
                    id, title, content, icon, summarize, created_at, usage_count, source_kind
                 )
                 VALUES (
                    'scanned-app', 'Scanned', '/scanner', NULL, 'app',
                    '2026-01-01', 0, 'scanner'
                 )",
                [],
            )
            .expect("insert rebuildable search item");
        drop(search);

        fs::remove_file(temp.path.join(crate::db::connection::SEARCH_DB_FILE_NAME))
            .expect("remove search database");

        let rebuilt =
            DbConnectionManager::open_search_at(&temp.path).expect("reopen search database");
        create_search_tables(&rebuilt).expect("recreate search schema");
        create_local_launcher_tables(&rebuilt).expect("recreate launcher search schema");

        assert_eq!(
            core.query_row("SELECT COUNT(*) FROM user_settings", [], |row| row
                .get::<_, i64>(0))
                .unwrap(),
            1
        );
        assert_eq!(
            core.query_row(
                "SELECT COUNT(*) FROM apps WHERE content = '/manual'",
                [],
                |row| row.get::<_, i64>(0),
            )
            .unwrap(),
            1
        );
        assert_eq!(
            rebuilt
                .query_row("SELECT COUNT(*) FROM apps", [], |row| row.get::<_, i64>(0))
                .unwrap(),
            0
        );
    }
}
