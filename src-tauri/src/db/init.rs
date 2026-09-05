use crate::db::DbConnectionManager;
use crate::json_config;
use crate::APP;
use std::path::Path;

// ============= 数据库初始化 =============

// 初始化数据库 - 创建核心用户数据和可重建搜索索引数据库
pub fn init_db() -> Result<(), rusqlite::Error> {
    let app = APP
        .get()
        .ok_or_else(|| rusqlite::Error::InvalidPath("APP 未初始化".into()))?;
    let data_dir = json_config::get_data_dir(app);

    migrate_legacy_database_at(&data_dir)?;

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
    let conn = DbConnectionManager::get_search()?;
    conn.execute(
        "INSERT INTO index_meta (
             source, storage_schema_version, extractor_version, last_success_at, last_error
         ) VALUES (?1, ?2, ?3, datetime('now'), NULL)
         ON CONFLICT(source) DO UPDATE SET
             storage_schema_version = excluded.storage_schema_version,
             extractor_version = excluded.extractor_version,
             last_success_at = excluded.last_success_at,
             last_error = NULL",
        rusqlite::params![source, storage_schema_version, extractor_version],
    )?;
    Ok(())
}

pub fn index_needs_refresh(
    source: &str,
    storage_schema_version: u64,
    extractor_version: u64,
) -> Result<bool, rusqlite::Error> {
    let conn = DbConnectionManager::get_search()?;
    let versions = conn.query_row(
        "SELECT storage_schema_version, extractor_version
         FROM index_meta
         WHERE source = ?1",
        [source],
        |row| Ok((row.get::<_, u64>(0)?, row.get::<_, u64>(1)?)),
    );

    match versions {
        Ok((stored_schema, stored_extractor)) => {
            Ok(stored_schema != storage_schema_version || stored_extractor != extractor_version)
        }
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
             last_error TEXT
         );
         INSERT OR IGNORE INTO schema_migrations(component, version)
         VALUES ('search', 1);
         PRAGMA user_version = 1;",
    )
}

fn table_exists(conn: &rusqlite::Connection, table_name: &str) -> Result<bool, rusqlite::Error> {
    conn.query_row(
        "SELECT EXISTS(
             SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?1
         )",
        [table_name],
        |row| row.get(0),
    )
}

fn table_has_column(
    conn: &rusqlite::Connection,
    table_name: &str,
    column_name: &str,
) -> Result<bool, rusqlite::Error> {
    let mut stmt = conn.prepare(&format!("PRAGMA table_info({})", table_name))?;
    let columns = stmt.query_map([], |row| row.get::<_, String>(1))?;
    for column in columns {
        if column? == column_name {
            return Ok(true);
        }
    }
    Ok(false)
}

const LEGACY_DB_SCHEMA: &str = "legacy_db";

#[derive(Clone, Copy)]
enum LauncherMigrationTarget {
    Core,
    Search,
}

pub(crate) fn migrate_legacy_database_at(data_dir: &Path) -> Result<(), rusqlite::Error> {
    let legacy_path = data_dir.join(crate::db::connection::LEGACY_DB_FILE_NAME);
    if !legacy_path.exists() {
        return Ok(());
    }

    let should_migrate_core = !data_dir
        .join(crate::db::connection::CORE_DB_FILE_NAME)
        .exists();
    let should_migrate_search = !data_dir
        .join(crate::db::connection::SEARCH_DB_FILE_NAME)
        .exists();
    if !should_migrate_core && !should_migrate_search {
        return Ok(());
    }

    if should_migrate_core {
        migrate_database_from_legacy(
            data_dir,
            &legacy_path,
            crate::db::connection::CORE_DB_FILE_NAME,
            migrate_core_database_from_legacy,
        )?;
    }

    // Once core.db exists, missing search.db means rebuild, not legacy restoration.
    if should_migrate_core && should_migrate_search {
        migrate_database_from_legacy(
            data_dir,
            &legacy_path,
            crate::db::connection::SEARCH_DB_FILE_NAME,
            migrate_search_database_from_legacy,
        )?;
    }

    Ok(())
}

fn migrate_database_from_legacy(
    data_dir: &Path,
    legacy_path: &Path,
    file_name: &str,
    migrate: fn(&rusqlite::Connection) -> Result<(), rusqlite::Error>,
) -> Result<(), rusqlite::Error> {
    let staging_name = format!("{}.migrating", file_name);
    let staging_path = data_dir.join(&staging_name);
    // This file is never opened by runtime readers. Restart an interrupted import.
    remove_database_files(data_dir, &staging_name);
    let mut connection = rusqlite::Connection::open(&staging_path)?;
    connection.execute_batch("PRAGMA journal_mode = DELETE; PRAGMA synchronous = FULL;")?;
    attach_legacy_database(&connection, legacy_path)?;
    let transaction = connection.transaction()?;
    migrate(&transaction)?;
    transaction.commit()?;
    connection.close().map_err(|(_, error)| error)?;
    std::fs::rename(staging_path, data_dir.join(file_name)).map_err(|error| {
        rusqlite::Error::SqliteFailure(
            rusqlite::ffi::Error::new(rusqlite::ffi::SQLITE_IOERR),
            Some(format!(
                "Publish migrated database {}: {}",
                file_name, error
            )),
        )
    })
}

fn migrate_core_database_from_legacy(core: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    create_core_tables(core)?;
    create_local_launcher_tables(core)?;
    create_search_engines_table(core)?;
    create_alarm_cards_table(core)?;
    copy_core_tables_from_legacy(core)
}

fn migrate_search_database_from_legacy(
    search: &rusqlite::Connection,
) -> Result<(), rusqlite::Error> {
    create_search_tables(search)?;
    create_local_launcher_tables(search)?;
    create_desktop_files_tables(search)?;
    copy_search_tables_from_legacy(search)
}

fn remove_database_files(data_dir: &Path, file_name: &str) {
    for suffix in ["", "-wal", "-shm", "-journal"] {
        let _ = std::fs::remove_file(data_dir.join(format!("{}{}", file_name, suffix)));
    }
}

fn attach_legacy_database(
    conn: &rusqlite::Connection,
    legacy_path: &Path,
) -> Result<(), rusqlite::Error> {
    conn.execute(
        &format!("ATTACH DATABASE ?1 AS {}", LEGACY_DB_SCHEMA),
        [legacy_path.to_string_lossy().as_ref()],
    )?;
    Ok(())
}

fn table_exists_in_schema(
    conn: &rusqlite::Connection,
    schema: &str,
    table_name: &str,
) -> Result<bool, rusqlite::Error> {
    conn.query_row(
        &format!(
            "SELECT EXISTS(
                SELECT 1 FROM {}.sqlite_master WHERE type = 'table' AND name = ?1
            )",
            schema
        ),
        [table_name],
        |row| row.get(0),
    )
}

fn table_has_column_in_schema(
    conn: &rusqlite::Connection,
    schema: &str,
    table_name: &str,
    column_name: &str,
) -> Result<bool, rusqlite::Error> {
    let mut stmt = conn.prepare(&format!("PRAGMA {}.table_info({})", schema, table_name))?;
    let columns = stmt.query_map([], |row| row.get::<_, String>(1))?;
    for column in columns {
        if column? == column_name {
            return Ok(true);
        }
    }
    Ok(false)
}

fn copy_core_tables_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    copy_search_history_from_legacy(conn)?;
    copy_user_settings_from_legacy(conn)?;
    copy_search_engines_from_legacy(conn)?;
    copy_alarm_cards_from_legacy(conn)?;
    copy_launcher_table_from_legacy(conn, "apps", LauncherMigrationTarget::Core)?;
    copy_launcher_table_from_legacy(conn, "bookmarks", LauncherMigrationTarget::Core)?;
    Ok(())
}

fn copy_search_tables_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    copy_index_meta_from_legacy(conn)?;
    copy_icon_cache_from_legacy(conn)?;
    copy_desktop_file_cache_from_legacy(conn)?;
    copy_launcher_table_from_legacy(conn, "apps", LauncherMigrationTarget::Search)?;
    copy_launcher_table_from_legacy(conn, "bookmarks", LauncherMigrationTarget::Search)?;
    Ok(())
}

fn copy_search_history_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    if !table_exists_in_schema(conn, LEGACY_DB_SCHEMA, "search_history")? {
        return Ok(());
    }
    conn.execute(
        &format!(
            "INSERT OR REPLACE INTO search_history (id, usage_count, last_used_at)
             SELECT id, usage_count, last_used_at FROM {}.search_history",
            LEGACY_DB_SCHEMA
        ),
        [],
    )?;
    Ok(())
}

fn copy_user_settings_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    if !table_exists_in_schema(conn, LEGACY_DB_SCHEMA, "user_settings")? {
        return Ok(());
    }
    let github_token = legacy_column_or_null(conn, "user_settings", "github_token")?;
    let github_username = legacy_column_or_null(conn, "user_settings", "github_username")?;
    let github_repo = legacy_column_or_null(conn, "user_settings", "github_repo")?;
    let last_sync_time = legacy_column_or_null(conn, "user_settings", "last_sync_time")?;
    let auto_sync_on_exit =
        legacy_column_or_default(conn, "user_settings", "auto_sync_on_exit", "0")?;
    let auto_restore_on_start =
        legacy_column_or_default(conn, "user_settings", "auto_restore_on_start", "0")?;
    let created_at =
        legacy_column_or_default(conn, "user_settings", "created_at", "datetime('now')")?;
    let updated_at =
        legacy_column_or_default(conn, "user_settings", "updated_at", "datetime('now')")?;
    conn.execute(
        &format!(
            "INSERT OR REPLACE INTO user_settings (
                id, github_token, github_username, github_repo, last_sync_time,
                auto_sync_on_exit, auto_restore_on_start, created_at, updated_at
             )
             SELECT
                id, {}, {}, {}, {},
                {}, {}, {}, {}
             FROM {}.user_settings",
            github_token,
            github_username,
            github_repo,
            last_sync_time,
            auto_sync_on_exit,
            auto_restore_on_start,
            created_at,
            updated_at,
            LEGACY_DB_SCHEMA
        ),
        [],
    )?;
    Ok(())
}

fn legacy_column_or_null(
    conn: &rusqlite::Connection,
    table_name: &str,
    column_name: &str,
) -> Result<&'static str, rusqlite::Error> {
    legacy_column_or_default(conn, table_name, column_name, "NULL")
}

fn legacy_column_or_default(
    conn: &rusqlite::Connection,
    table_name: &str,
    column_name: &str,
    fallback: &'static str,
) -> Result<&'static str, rusqlite::Error> {
    if table_has_column_in_schema(conn, LEGACY_DB_SCHEMA, table_name, column_name)? {
        Ok(match column_name {
            "github_token" => "github_token",
            "github_username" => "github_username",
            "github_repo" => "github_repo",
            "last_sync_time" => "last_sync_time",
            "auto_sync_on_exit" => "auto_sync_on_exit",
            "auto_restore_on_start" => "auto_restore_on_start",
            "created_at" => "created_at",
            "updated_at" => "updated_at",
            "source_mtime" => "source_mtime",
            "size" => "size",
            "created" => "created",
            "modified" => "modified",
            "last_indexed_at" => "last_indexed_at",
            _ => fallback,
        })
    } else {
        Ok(fallback)
    }
}

fn copy_search_engines_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    if !table_exists_in_schema(conn, LEGACY_DB_SCHEMA, "search_engines")? {
        return Ok(());
    }
    conn.execute(
        &format!(
            "INSERT OR REPLACE INTO search_engines (id, keyword, name, icon, url, enabled)
             SELECT id, keyword, name, icon, url, enabled FROM {}.search_engines",
            LEGACY_DB_SCHEMA
        ),
        [],
    )?;
    Ok(())
}

fn copy_alarm_cards_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    if !table_exists_in_schema(conn, LEGACY_DB_SCHEMA, "alarm_cards")? {
        return Ok(());
    }
    let alarm_type =
        if table_has_column_in_schema(conn, LEGACY_DB_SCHEMA, "alarm_cards", "alarm_type")? {
            "COALESCE(alarm_type, 'Weekly')"
        } else {
            "'Weekly'"
        };
    let specific_dates =
        if table_has_column_in_schema(conn, LEGACY_DB_SCHEMA, "alarm_cards", "specific_dates")? {
            "specific_dates"
        } else {
            "NULL"
        };
    conn.execute(
        &format!(
            "INSERT OR REPLACE INTO alarm_cards (
                id, time, title, weekdays, reminder_time, is_active,
                created_at, updated_at, alarm_type, specific_dates
             )
             SELECT
                id, time, title, weekdays, reminder_time, is_active,
                created_at, updated_at, {}, {}
             FROM {}.alarm_cards",
            alarm_type, specific_dates, LEGACY_DB_SCHEMA
        ),
        [],
    )?;
    Ok(())
}

fn copy_index_meta_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    if !table_exists_in_schema(conn, LEGACY_DB_SCHEMA, "index_meta")? {
        return Ok(());
    }
    conn.execute(
        &format!(
            "INSERT OR REPLACE INTO index_meta (
                source, storage_schema_version, extractor_version, last_success_at, last_error
             )
             SELECT
                source, storage_schema_version, extractor_version, last_success_at, last_error
             FROM {}.index_meta",
            LEGACY_DB_SCHEMA
        ),
        [],
    )?;
    Ok(())
}

fn copy_icon_cache_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    if !table_exists_in_schema(conn, LEGACY_DB_SCHEMA, "icon_cache")? {
        return Ok(());
    }
    let source_mtime =
        if table_has_column_in_schema(conn, LEGACY_DB_SCHEMA, "icon_cache", "source_mtime")? {
            "source_mtime"
        } else {
            "NULL"
        };
    conn.execute(
        &format!(
            "INSERT OR REPLACE INTO icon_cache (key, data, timestamp, source_mtime)
             SELECT key, data, timestamp, {} FROM {}.icon_cache",
            source_mtime, LEGACY_DB_SCHEMA
        ),
        [],
    )?;
    Ok(())
}

fn copy_desktop_file_cache_from_legacy(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    if !table_exists_in_schema(conn, LEGACY_DB_SCHEMA, "desktop_file_cache")? {
        return Ok(());
    }
    let source_mtime = legacy_column_or_null(conn, "desktop_file_cache", "source_mtime")?;
    let size = legacy_column_or_null(conn, "desktop_file_cache", "size")?;
    let created = legacy_column_or_null(conn, "desktop_file_cache", "created")?;
    let modified = legacy_column_or_null(conn, "desktop_file_cache", "modified")?;
    let last_indexed_at =
        legacy_column_or_default(conn, "desktop_file_cache", "last_indexed_at", "0")?;
    conn.execute(
        &format!(
            "INSERT OR REPLACE INTO desktop_file_cache (
                id, title, content, icon, source_mtime, size, created, modified, last_indexed_at
             )
             SELECT
                id, title, content, icon, {}, {}, {}, {}, {}
             FROM {}.desktop_file_cache",
            source_mtime, size, created, modified, last_indexed_at, LEGACY_DB_SCHEMA
        ),
        [],
    )?;
    Ok(())
}

fn copy_launcher_table_from_legacy(
    conn: &rusqlite::Connection,
    table_name: &str,
    target: LauncherMigrationTarget,
) -> Result<(), rusqlite::Error> {
    if !table_exists_in_schema(conn, LEGACY_DB_SCHEMA, table_name)? {
        return Ok(());
    }
    let has_source_kind =
        table_has_column_in_schema(conn, LEGACY_DB_SCHEMA, table_name, "source_kind")?;
    if matches!(target, LauncherMigrationTarget::Search) && !has_source_kind {
        return Ok(());
    }

    let created_at =
        if table_has_column_in_schema(conn, LEGACY_DB_SCHEMA, table_name, "created_at")? {
            "COALESCE(created_at, datetime('now'))"
        } else {
            "datetime('now')"
        };
    let usage_count =
        if table_has_column_in_schema(conn, LEGACY_DB_SCHEMA, table_name, "usage_count")? {
            "COALESCE(usage_count, 0)"
        } else {
            "0"
        };
    let source_kind = if has_source_kind {
        "COALESCE(source_kind, 'legacy')"
    } else {
        "'legacy'"
    };
    let predicate = match target {
        LauncherMigrationTarget::Core if has_source_kind => {
            "WHERE COALESCE(source_kind, 'legacy') <> 'scanner'"
        }
        LauncherMigrationTarget::Core => "",
        LauncherMigrationTarget::Search => "WHERE source_kind = 'scanner'",
    };

    conn.execute(
        &format!(
            "INSERT OR REPLACE INTO {} (
                id, title, content, icon, summarize, created_at, usage_count, source_kind
             )
             SELECT
                id, title, content, icon, summarize, {}, {}, {}
             FROM {}.{}
             {}",
            table_name,
            created_at,
            usage_count,
            source_kind,
            LEGACY_DB_SCHEMA,
            table_name,
            predicate
        ),
        [],
    )?;
    Ok(())
}

fn create_local_launcher_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    let apps_existed = table_exists(conn, "apps")?;
    let apps_had_source_kind = apps_existed && table_has_column(conn, "apps", "source_kind")?;

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

    // 添加新字段（如果表已存在）
    let _ = conn.execute(
        "ALTER TABLE apps ADD COLUMN created_at TEXT DEFAULT (datetime('now'))",
        [],
    );
    let _ = conn.execute(
        "ALTER TABLE apps ADD COLUMN usage_count INTEGER DEFAULT 0",
        [],
    );
    if apps_existed && !apps_had_source_kind {
        conn.execute(
            "ALTER TABLE apps ADD COLUMN source_kind TEXT NOT NULL DEFAULT 'scanner'",
            [],
        )?;
        // 旧版本无法区分扫描项和手动项。首次扫描时匹配到的旧行会替换为
        // scanner，未匹配项保守转成 user，避免升级后丢失手动数据。
        conn.execute("UPDATE apps SET source_kind = 'legacy'", [])?;
    }

    let bookmarks_existed = table_exists(conn, "bookmarks")?;
    let bookmarks_had_source_kind =
        bookmarks_existed && table_has_column(conn, "bookmarks", "source_kind")?;

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

    // 添加新字段（如果表已存在）
    let _ = conn.execute(
        "ALTER TABLE bookmarks ADD COLUMN created_at TEXT DEFAULT (datetime('now'))",
        [],
    );
    let _ = conn.execute(
        "ALTER TABLE bookmarks ADD COLUMN usage_count INTEGER DEFAULT 0",
        [],
    );
    if bookmarks_existed && !bookmarks_had_source_kind {
        conn.execute(
            "ALTER TABLE bookmarks ADD COLUMN source_kind TEXT NOT NULL DEFAULT 'scanner'",
            [],
        )?;
        conn.execute("UPDATE bookmarks SET source_kind = 'legacy'", [])?;
    }

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

    let _ = conn.execute("ALTER TABLE icon_cache ADD COLUMN source_mtime INTEGER", []);
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

    // 添加新字段（如果表已存在但缺少这些列）
    let _ = conn.execute(
        "ALTER TABLE alarm_cards ADD COLUMN alarm_type TEXT DEFAULT 'Weekly'",
        [],
    );
    let _ = conn.execute("ALTER TABLE alarm_cards ADD COLUMN specific_dates TEXT", []);

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

    fn count(conn: &rusqlite::Connection, sql: &str) -> i64 {
        conn.query_row(sql, [], |row| row.get(0))
            .expect("count rows")
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

    fn create_legacy_db(data_dir: &Path) -> rusqlite::Connection {
        let conn =
            rusqlite::Connection::open(data_dir.join(crate::db::connection::LEGACY_DB_FILE_NAME))
                .expect("open legacy database");
        conn.execute_batch(
            "CREATE TABLE search_history (
                id TEXT PRIMARY KEY,
                usage_count INTEGER NOT NULL,
                last_used_at TEXT NOT NULL
            );
            CREATE TABLE user_settings (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                github_token TEXT,
                github_username TEXT,
                github_repo TEXT,
                last_sync_time TEXT,
                auto_sync_on_exit INTEGER DEFAULT 0,
                auto_restore_on_start INTEGER DEFAULT 0,
                created_at TEXT DEFAULT (datetime('now')),
                updated_at TEXT DEFAULT (datetime('now'))
            );
            CREATE TABLE search_engines (
                id TEXT PRIMARY KEY,
                keyword TEXT NOT NULL,
                name TEXT NOT NULL,
                icon TEXT NOT NULL,
                url TEXT NOT NULL,
                enabled INTEGER NOT NULL
            );
            CREATE TABLE alarm_cards (
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
            );
            CREATE TABLE icon_cache (
                key TEXT PRIMARY KEY,
                data TEXT NOT NULL,
                timestamp INTEGER NOT NULL,
                source_mtime INTEGER
            );
            CREATE TABLE desktop_file_cache (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                icon TEXT,
                source_mtime INTEGER,
                size INTEGER,
                created TEXT,
                modified TEXT,
                last_indexed_at INTEGER NOT NULL
            );
            CREATE TABLE index_meta (
                source TEXT PRIMARY KEY,
                storage_schema_version INTEGER NOT NULL,
                extractor_version INTEGER NOT NULL,
                last_success_at TEXT,
                last_error TEXT
            );",
        )
        .expect("create legacy tables");
        conn
    }

    fn create_legacy_launcher_table(conn: &rusqlite::Connection, table_name: &str) {
        conn.execute(
            &format!(
                "CREATE TABLE {} (
                    id TEXT PRIMARY KEY,
                    title TEXT NOT NULL,
                    content TEXT NOT NULL,
                    icon TEXT,
                    summarize TEXT NOT NULL,
                    created_at TEXT DEFAULT (datetime('now')),
                    usage_count INTEGER DEFAULT 0,
                    source_kind TEXT NOT NULL DEFAULT 'scanner'
                )",
                table_name
            ),
            [],
        )
        .expect("create legacy launcher table");
    }

    #[test]
    fn legacy_database_is_split_by_data_ownership() {
        let temp = TempDataDir::new();
        let legacy = create_legacy_db(&temp.path);
        create_legacy_launcher_table(&legacy, "apps");
        create_legacy_launcher_table(&legacy, "bookmarks");
        legacy
            .execute(
                "INSERT INTO search_history (id, usage_count, last_used_at)
                 VALUES ('app:path:/tool.exe', 3, '2026-01-01T00:00:00Z')",
                [],
            )
            .unwrap();
        legacy
            .execute(
                "INSERT INTO user_settings (id, github_token, github_username, github_repo)
                 VALUES (1, 'token', 'zero', 'repo')",
                [],
            )
            .unwrap();
        legacy
            .execute(
                "INSERT INTO search_engines (id, keyword, name, icon, url, enabled)
                 VALUES ('engine', 'g', 'Google', 'icon', 'https://google.com?q={query}', 1)",
                [],
            )
            .unwrap();
        legacy
            .execute(
                "INSERT INTO alarm_cards (
                    id, time, title, weekdays, reminder_time, is_active,
                    created_at, updated_at, alarm_type, specific_dates
                 )
                 VALUES (
                    'alarm', '09:00', 'Stand up', '[]', '5', 1,
                    '2026-01-01T00:00:00Z', '2026-01-01T00:00:00Z', 'Daily', NULL
                 )",
                [],
            )
            .unwrap();
        legacy
            .execute(
                "INSERT INTO icon_cache (key, data, timestamp, source_mtime)
                 VALUES ('desktop-file-icon:/tmp/a.md', 'data:image/png;base64,AA==', 1, 1)",
                [],
            )
            .unwrap();
        legacy
            .execute(
                "INSERT INTO desktop_file_cache (
                    id, title, content, icon, source_mtime, size, created, modified, last_indexed_at
                 )
                 VALUES ('file', 'File', '/tmp/a.md', NULL, 1, 10, NULL, NULL, 1)",
                [],
            )
            .unwrap();
        legacy
            .execute(
                "INSERT INTO index_meta (
                    source, storage_schema_version, extractor_version, last_success_at, last_error
                 )
                 VALUES ('desktop-files', 1, 1, '2026-01-01T00:00:00Z', NULL)",
                [],
            )
            .unwrap();
        for table in ["apps", "bookmarks"] {
            legacy
                .execute(
                    &format!(
                        "INSERT INTO {} (
                            id, title, content, icon, summarize, created_at, usage_count, source_kind
                         )
                         VALUES
                            (?1, 'Scanned', '/scanner', NULL, ?2, '2026-01-01', 0, 'scanner'),
                            (?3, 'Manual', '/manual', NULL, ?2, '2026-01-02', 0, 'user')",
                        table
                    ),
                    rusqlite::params![
                        format!("{}-scanner", table),
                        if table == "apps" { "app" } else { "bookmark" },
                        format!("{}-user", table),
                    ],
                )
                .unwrap();
        }
        drop(legacy);

        migrate_legacy_database_at(&temp.path).expect("split legacy database");

        let core =
            rusqlite::Connection::open(temp.path.join(crate::db::connection::CORE_DB_FILE_NAME))
                .unwrap();
        let search =
            rusqlite::Connection::open(temp.path.join(crate::db::connection::SEARCH_DB_FILE_NAME))
                .unwrap();

        assert_eq!(count(&core, "SELECT COUNT(*) FROM search_history"), 1);
        assert_eq!(count(&core, "SELECT COUNT(*) FROM user_settings"), 1);
        assert_eq!(count(&core, "SELECT COUNT(*) FROM search_engines"), 1);
        assert_eq!(count(&core, "SELECT COUNT(*) FROM alarm_cards"), 1);
        assert_eq!(count(&core, "SELECT COUNT(*) FROM apps"), 1);
        assert_eq!(count(&core, "SELECT COUNT(*) FROM bookmarks"), 1);
        assert_eq!(
            count(
                &core,
                "SELECT COUNT(*) FROM apps WHERE source_kind = 'scanner'"
            ),
            0
        );
        assert!(!table_exists_for_test(&core, "desktop_file_cache"));
        assert!(!table_exists_for_test(&core, "icon_cache"));

        assert_eq!(count(&search, "SELECT COUNT(*) FROM apps"), 1);
        assert_eq!(count(&search, "SELECT COUNT(*) FROM bookmarks"), 1);
        assert_eq!(count(&search, "SELECT COUNT(*) FROM desktop_file_cache"), 1);
        assert_eq!(count(&search, "SELECT COUNT(*) FROM icon_cache"), 1);
        assert_eq!(count(&search, "SELECT COUNT(*) FROM index_meta"), 1);
        assert!(!table_exists_for_test(&search, "search_history"));
        assert!(!table_exists_for_test(&search, "user_settings"));
    }

    #[test]
    fn legacy_launcher_rows_without_source_kind_are_preserved_in_core() {
        let temp = TempDataDir::new();
        let legacy =
            rusqlite::Connection::open(temp.path.join(crate::db::connection::LEGACY_DB_FILE_NAME))
                .expect("open legacy database");
        legacy
            .execute_batch(
                "CREATE TABLE apps (
                    id TEXT PRIMARY KEY,
                    title TEXT NOT NULL,
                    content TEXT NOT NULL,
                    icon TEXT,
                    summarize TEXT NOT NULL
                 );
                 INSERT INTO apps (id, title, content, icon, summarize)
                 VALUES ('legacy-app', 'Legacy App', '/legacy', NULL, 'app');",
            )
            .unwrap();
        drop(legacy);

        migrate_legacy_database_at(&temp.path).expect("split legacy database");

        let core =
            rusqlite::Connection::open(temp.path.join(crate::db::connection::CORE_DB_FILE_NAME))
                .unwrap();
        let search =
            rusqlite::Connection::open(temp.path.join(crate::db::connection::SEARCH_DB_FILE_NAME))
                .unwrap();

        assert_eq!(count(&core, "SELECT COUNT(*) FROM apps"), 1);
        assert_eq!(
            count(
                &core,
                "SELECT COUNT(*) FROM apps WHERE source_kind = 'legacy'"
            ),
            1
        );
        assert_eq!(count(&search, "SELECT COUNT(*) FROM apps"), 0);
    }

    #[test]
    fn failed_legacy_import_is_not_published_and_can_retry() {
        let temp = TempDataDir::new();
        let legacy = create_legacy_db(&temp.path);
        legacy
            .execute_batch(
                "INSERT INTO search_history VALUES ('saved', 7, '2026-01-01');
             DROP TABLE user_settings;
             CREATE TABLE user_settings (bad_column TEXT);",
            )
            .unwrap();

        assert!(migrate_legacy_database_at(&temp.path).is_err());
        assert!(!temp
            .path
            .join(crate::db::connection::CORE_DB_FILE_NAME)
            .exists());
        assert_eq!(count(&legacy, "SELECT COUNT(*) FROM search_history"), 1);

        legacy.execute_batch("DROP TABLE user_settings").unwrap();
        drop(legacy);
        migrate_legacy_database_at(&temp.path).expect("retry failed import");
        let core = DbConnectionManager::open_core_at(&temp.path).unwrap();
        assert_eq!(
            count(
                &core,
                "SELECT usage_count FROM search_history WHERE id = 'saved'"
            ),
            7
        );
        core.execute("UPDATE search_history SET usage_count = 10", [])
            .unwrap();
        migrate_legacy_database_at(&temp.path).expect("already imported");
        assert_eq!(
            count(
                &core,
                "SELECT usage_count FROM search_history WHERE id = 'saved'"
            ),
            10
        );
        assert!(!temp.path.join("core.db.migrating").exists());
    }

    #[test]
    fn interrupted_staging_database_is_rebuilt_from_legacy() {
        let temp = TempDataDir::new();
        let legacy = create_legacy_db(&temp.path);
        legacy
            .execute(
                "INSERT INTO search_history VALUES ('saved', 4, '2026-01-01')",
                [],
            )
            .unwrap();
        drop(legacy);
        let staging = rusqlite::Connection::open(temp.path.join("core.db.migrating")).unwrap();
        create_core_tables(&staging).unwrap();
        staging
            .execute(
                "INSERT INTO search_history VALUES ('partial', 99, '2026-01-01')",
                [],
            )
            .unwrap();
        drop(staging);

        migrate_legacy_database_at(&temp.path).expect("recover interrupted staging import");
        let core = DbConnectionManager::open_core_at(&temp.path).unwrap();
        assert_eq!(count(&core, "SELECT COUNT(*) FROM search_history"), 1);
        assert_eq!(
            count(
                &core,
                "SELECT usage_count FROM search_history WHERE id = 'saved'"
            ),
            4
        );
    }

    #[test]
    fn search_database_can_be_recreated_without_core_data_loss() {
        let temp = TempDataDir::new();
        let legacy = create_legacy_db(&temp.path);
        create_legacy_launcher_table(&legacy, "apps");
        legacy
            .execute(
                "INSERT INTO user_settings (id, github_username, github_repo)
                 VALUES (1, 'zero', 'repo')",
                [],
            )
            .unwrap();
        legacy
            .execute(
                "INSERT INTO apps (
                    id, title, content, icon, summarize, created_at, usage_count, source_kind
                 )
                 VALUES
                    ('manual-app', 'Manual', '/manual', NULL, 'app', '2026-01-01', 0, 'user'),
                    ('scanned-app', 'Scanned', '/scanner', NULL, 'app', '2026-01-02', 0, 'scanner')",
                [],
            )
            .unwrap();
        drop(legacy);

        migrate_legacy_database_at(&temp.path).expect("split legacy database");

        remove_database_files(&temp.path, crate::db::connection::SEARCH_DB_FILE_NAME);
        migrate_legacy_database_at(&temp.path).expect("startup after deleting search database");
        assert!(!temp
            .path
            .join(crate::db::connection::SEARCH_DB_FILE_NAME)
            .exists());
        let core =
            rusqlite::Connection::open(temp.path.join(crate::db::connection::CORE_DB_FILE_NAME))
                .unwrap();
        assert_eq!(count(&core, "SELECT COUNT(*) FROM user_settings"), 1);
        assert_eq!(
            count(&core, "SELECT COUNT(*) FROM apps WHERE content = '/manual'"),
            1
        );

        let search = crate::db::DbConnectionManager::open_search_at(&temp.path).unwrap();
        create_search_tables(&search).expect("recreate search database schema");
        create_local_launcher_tables(&search).expect("recreate launcher search schema");
        assert_eq!(count(&search, "SELECT COUNT(*) FROM apps"), 0);
    }
}
