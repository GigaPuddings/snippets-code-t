use crate::db::DbConnectionManager;

// ============= 数据库初始化 =============

// 初始化数据库 - 创建所有表和索引
pub fn init_db() -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

    create_core_tables(&conn)?;

    // 注意：插件拥有的数据表不在核心初始化中创建。
    // 这些表由插件启用/安装生命周期按需创建，卸载插件时可一并清理。

    Ok(())
}

fn create_core_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    create_icon_cache_table(conn)?;
    create_search_history_table(conn)?;
    create_user_settings_table(conn)?;

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
            usage_count INTEGER DEFAULT 0
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

    // 创建 bookmarks 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS bookmarks (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            icon TEXT,
            summarize TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            usage_count INTEGER DEFAULT 0
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
    let conn = DbConnectionManager::get()?;
    match plugin_id {
        "local-launcher" => create_local_launcher_tables(&conn),
        "desktop-files" => create_desktop_files_tables(&conn),
        "search-engines" => create_search_engines_table(&conn),
        "todo" => create_alarm_cards_table(&conn),
        _ => Ok(()),
    }
}

pub fn clear_plugin_storage(plugin_id: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    match plugin_id {
        "local-launcher" => {
            conn.execute("DROP TABLE IF EXISTS apps", [])?;
            conn.execute("DROP TABLE IF EXISTS bookmarks", [])?;
            conn.execute("DROP INDEX IF EXISTS idx_apps_usage", [])?;
            conn.execute("DROP INDEX IF EXISTS idx_bookmarks_usage", [])?;
            conn.execute("DROP INDEX IF EXISTS idx_apps_created", [])?;
            conn.execute("DROP INDEX IF EXISTS idx_bookmarks_created", [])?;
            crate::plugins::local_launcher::invalidate_apps_cache();
            crate::plugins::local_launcher::invalidate_bookmarks_cache();
        }
        "desktop-files" => {
            conn.execute("DROP TABLE IF EXISTS desktop_file_cache", [])?;
            let _ = conn.execute(
                "DELETE FROM icon_cache WHERE key LIKE 'desktop-file-icon:%'",
                [],
            );
            crate::plugins::desktop_files::invalidate_desktop_files_cache();
        }
        "search-engines" => {
            conn.execute("DROP TABLE IF EXISTS search_engines", [])?;
        }
        "todo" => {
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
