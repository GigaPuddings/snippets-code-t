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
            created_at TEXT NOT NULL
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

    Ok(())
}

/// 异步分阶段数据库初始化 - 优先创建核心表，提升启动速度
pub async fn init_db_async() -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    // 第一阶段：快速初始化核心表
    tokio::task::spawn_blocking(|| -> Result<(), rusqlite::Error> {
        let conn = DbConnectionManager::get()?;
        
        // 核心表：apps 和 bookmarks（用户最常用的功能）
        conn.execute(
            "CREATE TABLE IF NOT EXISTS apps (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                icon TEXT,
                summarize TEXT NOT NULL
            )",
            [],
        )?;
        
        conn.execute(
            "CREATE TABLE IF NOT EXISTS bookmarks (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                content TEXT NOT NULL,
                icon TEXT,
                summarize TEXT NOT NULL
            )",
            [],
        )?;
        
        Ok(())
    }).await??;
    
    // 短暂延迟，让界面先响应
    tokio::time::sleep(tokio::time::Duration::from_millis(10)).await;
    
    // 第二阶段：初始化辅助表
    tokio::task::spawn_blocking(|| -> Result<(), rusqlite::Error> {
        let conn = DbConnectionManager::get()?;
        
        // 辅助表：图标缓存和搜索引擎
        conn.execute(
            "CREATE TABLE IF NOT EXISTS icon_cache (
                key TEXT PRIMARY KEY,
                data TEXT NOT NULL,
                timestamp INTEGER NOT NULL
            )",
            [],
        )?;
        
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
    }).await??;
    
    // 第三阶段：初始化其他表
    tokio::task::spawn_blocking(move || -> Result<(), rusqlite::Error> {
        let conn = DbConnectionManager::get()?;
        
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
        
        let _ = conn.execute("ALTER TABLE alarm_cards ADD COLUMN alarm_type TEXT DEFAULT 'Weekly'", []);
        let _ = conn.execute("ALTER TABLE alarm_cards ADD COLUMN specific_dates TEXT", []);
        
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
                created_at TEXT NOT NULL
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

        // 创建 app_settings 表 (用于存储应用设置，便于GitHub同步)
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
        
        Ok(())
    }).await??;
    
    // log::info!("数据库异步初始化完成");
    Ok(())
}
