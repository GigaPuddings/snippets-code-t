use crate::db::DbConnectionManager;

// ============= 数据库初始化 =============

/// 初始化数据库 - 创建所有表和索引
pub fn init_db() -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

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
    let _ = conn.execute("ALTER TABLE apps ADD COLUMN created_at TEXT DEFAULT (datetime('now'))", []);
    let _ = conn.execute("ALTER TABLE apps ADD COLUMN usage_count INTEGER DEFAULT 0", []);

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
    let _ = conn.execute("ALTER TABLE bookmarks ADD COLUMN created_at TEXT DEFAULT (datetime('now'))", []);
    let _ = conn.execute("ALTER TABLE bookmarks ADD COLUMN usage_count INTEGER DEFAULT 0", []);

    // 创建 icon_cache 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS icon_cache (
            key TEXT PRIMARY KEY,
            data TEXT NOT NULL,
            timestamp INTEGER NOT NULL
        )",
        [],
    )?;

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
    let _ = conn.execute("ALTER TABLE alarm_cards ADD COLUMN alarm_type TEXT DEFAULT 'Weekly'", []);
    let _ = conn.execute("ALTER TABLE alarm_cards ADD COLUMN specific_dates TEXT", []);

    // 创建 search_history 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS search_history (
            id TEXT PRIMARY KEY,
            usage_count INTEGER NOT NULL,
            last_used_at TEXT NOT NULL
        )",
        [],
    )?;

    // 创建 categories 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            name TEXT NOT NULL,
            created_at TEXT NOT NULL,
            is_system INTEGER DEFAULT 0
        )",
        [],
    )?;

    // 创建 contents 表
    conn.execute(
        "CREATE TABLE IF NOT EXISTS contents (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            category_id INTEGER,
            created_at TEXT NOT NULL,
            FOREIGN KEY (category_id) REFERENCES categories(id)
        )",
        [],
    )?;

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

    // 创建 app_settings 表 (用于存储应用设置)
    conn.execute(
        "CREATE TABLE IF NOT EXISTS app_settings (
            id INTEGER PRIMARY KEY CHECK (id = 1),
            search_hotkey TEXT,
            config_hotkey TEXT,
            translate_hotkey TEXT,
            selection_translate_hotkey TEXT,
            screenshot_hotkey TEXT,
            dark_mode_hotkey TEXT,
            language TEXT DEFAULT 'zh-CN',
            auto_update_check INTEGER DEFAULT 1,
            auto_hide_on_blur INTEGER DEFAULT 1,
            auto_start INTEGER DEFAULT 0,
            dark_mode_config TEXT,
            created_at TEXT DEFAULT (datetime('now')),
            updated_at TEXT DEFAULT (datetime('now'))
        )",
        [],
    )?;
    
    // 确保 app_settings 有一条默认记录
    conn.execute(
        "INSERT OR IGNORE INTO app_settings (id) VALUES (1)",
        [],
    )?;

    // 创建索引以优化查询性能
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_search_history_usage ON search_history(usage_count DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_search_history_last_used ON search_history(last_used_at DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_apps_usage ON apps(usage_count DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_bookmarks_usage ON bookmarks(usage_count DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_apps_created ON apps(created_at DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_bookmarks_created ON bookmarks(created_at DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_icon_cache_timestamp ON icon_cache(timestamp)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_category ON contents(category_id)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_created ON contents(created_at DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_title ON contents(title)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_categories_created ON categories(created_at DESC)", []);
    
    // 为片段类型支持添加额外的索引以优化查询
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_type ON contents(type)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_format ON contents(format)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_type_category ON contents(type, category_id)", []);

    // 执行片段类型支持迁移
    migrate_fragment_type_support(&conn)?;
    
    // 执行分类系统字段迁移
    migrate_category_system_field(&conn)?;

    Ok(())
}

// ============= 数据库迁移：片段类型支持 =============

/// 迁移数据库以支持片段类型功能
/// 添加 type、format、metadata、tags 字段到 contents 表
pub fn migrate_fragment_type_support(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 检查 contents 表是否存在
    let table_exists: bool = conn
        .query_row(
            "SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name='contents'",
            [],
            |row| row.get::<_, i32>(0),
        )
        .map(|count| count > 0)
        .unwrap_or(false);
    
    if !table_exists {
        // 表不存在，无需迁移
        return Ok(());
    }
    
    // 检查字段是否已存在的辅助函数
    let column_exists = |column_name: &str| -> bool {
        let mut stmt = match conn.prepare("PRAGMA table_info(contents)") {
            Ok(s) => s,
            Err(_) => return false,
        };
        
        let columns: Vec<String> = match stmt.query_map([], |row| row.get::<_, String>(1)) {
            Ok(rows) => rows.filter_map(|r| r.ok()).collect(),
            Err(_) => return false,
        };
        
        columns.contains(&column_name.to_string())
    };
    
    // 添加 type 字段（默认值为 'code'）
    // 注意：SQLite 不支持在 ALTER TABLE 中添加 CHECK 约束
    // 我们先添加字段，然后在应用层进行验证
    if !column_exists("type") {
        let _ = conn.execute(
            "ALTER TABLE contents ADD COLUMN type TEXT NOT NULL DEFAULT 'code'",
            []
        );
    }
    
    // 添加 format 字段（默认值为 'plain'）
    if !column_exists("format") {
        let _ = conn.execute(
            "ALTER TABLE contents ADD COLUMN format TEXT NOT NULL DEFAULT 'plain'",
            []
        );
    }
    
    // 添加 metadata 字段（可选，存储 JSON 数据）
    if !column_exists("metadata") {
        let _ = conn.execute(
            "ALTER TABLE contents ADD COLUMN metadata TEXT",
            []
        );
    }
    
    // 添加 tags 字段（可选，存储逗号分隔的标签列表）
    if !column_exists("tags") {
        let _ = conn.execute(
            "ALTER TABLE contents ADD COLUMN tags TEXT",
            []
        );
    }
    
    // 为 type 字段创建索引以优化查询性能（需求 15.3）
    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_contents_type ON contents(type)",
        []
    );
    
    // 为 format 字段创建索引
    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_contents_format ON contents(format)",
        []
    );
    
    // 创建复合索引以优化按类型和分类的查询
    let _ = conn.execute(
        "CREATE INDEX IF NOT EXISTS idx_contents_type_category ON contents(type, category_id)",
        []
    );
    
    // 注意：SQLite 的 ALTER TABLE 不支持添加 CHECK 约束
    // CHECK 约束将在应用层（Rust API）中进行验证
    // 对于新创建的表，可以在 CREATE TABLE 时添加 CHECK 约束
    
    Ok(())
}

// ============= 数据库迁移：分类系统字段 =============

/// 迁移数据库以支持系统分类标识
/// 添加 is_system 字段到 categories 表，并标记"未分类"为系统分类
pub fn migrate_category_system_field(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    // 检查 categories 表是否存在
    let table_exists: bool = conn
        .query_row(
            "SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name='categories'",
            [],
            |row| row.get::<_, i32>(0),
        )
        .map(|count| count > 0)
        .unwrap_or(false);
    
    if !table_exists {
        return Ok(());
    }
    
    // 检查 is_system 字段是否已存在
    let mut stmt = conn.prepare("PRAGMA table_info(categories)")?;
    let columns: Vec<String> = stmt
        .query_map([], |row| row.get::<_, String>(1))?
        .filter_map(|r| r.ok())
        .collect();
    
    if !columns.contains(&"is_system".to_string()) {
        // 添加 is_system 字段
        conn.execute(
            "ALTER TABLE categories ADD COLUMN is_system INTEGER DEFAULT 0",
            []
        )?;
        
        // 将所有名为"未分类"的分类标记为系统分类
        conn.execute(
            "UPDATE categories SET is_system = 1 WHERE name = '未分类'",
            []
        )?;
    }
    
    Ok(())
}
