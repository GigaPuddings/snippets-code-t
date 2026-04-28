use crate::db::DbConnectionManager;

// ============= 数据库初始化 =============

// 初始化数据库 - 创建所有表和索引
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
            timestamp INTEGER NOT NULL,
            source_mtime INTEGER
        )",
        [],
    )?;

    let _ = conn.execute("ALTER TABLE icon_cache ADD COLUMN source_mtime INTEGER", []);

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

    // 注意：contents 和 categories 表已迁移到基于文件系统的 Markdown 存储
    // 这些表不再需要，已在迁移后移除

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

    // 注意：app_settings 表已废弃，配置已迁移到 app.json
    // 保留表结构以便向后兼容，但不再使用
    // 所有应用配置现在存储在：[数据目录]/app.json
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

    // 创建索引以优化查询性能
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_search_history_usage ON search_history(usage_count DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_search_history_last_used ON search_history(last_used_at DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_apps_usage ON apps(usage_count DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_bookmarks_usage ON bookmarks(usage_count DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_apps_created ON apps(created_at DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_bookmarks_created ON bookmarks(created_at DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_icon_cache_timestamp ON icon_cache(timestamp)", []);

    // contents 表索引（如果表存在）
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_category_created ON contents(category_id, created_at DESC)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_title ON contents(title)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_tags ON contents(tags)", []);
    let _ = conn.execute("CREATE INDEX IF NOT EXISTS idx_contents_created ON contents(created_at DESC)", []);
    
    // 注意：contents 和 categories 表的索引已移除，因为这些表已迁移到文件系统

    // 执行片段类型支持迁移（已废弃，保留以兼容旧版本）
    migrate_fragment_type_support(&conn)?;
    
    // 执行分类系统字段迁移
    migrate_category_system_field(&conn)?;

    Ok(())
}

// ============= 数据库迁移：片段类型支持 =============

// 迁移数据库以支持片段类型功能
// 添加 type、format、metadata、tags 字段到 contents 表
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
    
    // 添加 updated_at 字段（可选，存储最后更新时间）
    if !column_exists("updated_at") {
        let _ = conn.execute(
            "ALTER TABLE contents ADD COLUMN updated_at TEXT",
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

// 迁移数据库以支持系统分类标识
// 添加 is_system 字段到 categories 表，并标记"未分类"为系统分类
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

// ============= 数据库迁移：移除 contents 和 categories 表 =============

// 迁移数据库以移除 contents 和 categories 表
// 
// 这些表的功能已迁移到基于文件系统的 Markdown 存储。
// 
// # 何时调用
// 
// 此函数应该在用户完成 Markdown 迁移向导后调用，确保：
// 1. 所有数据已成功导出到 Markdown 文件
// 2. 数据库已备份
// 3. 用户确认迁移成功
// 
// # 删除的表
// 
// - `contents` - 存储代码片段和笔记的表
// - `categories` - 存储分类信息的表
// 
// # 删除的索引
// 
// - `idx_contents_category`
// - `idx_contents_created`
// - `idx_contents_title`
// - `idx_contents_type`
// - `idx_contents_format`
// - `idx_contents_type_category`
// - `idx_categories_created`
// 
// # 保留的表
// 
// - `apps` - 应用快捷方式
// - `bookmarks` - 书签数据
// - `icon_cache` - 图标缓存
// - `search_engines` - 搜索引擎配置
// - `alarm_cards` - 提醒数据
// - `search_history` - 搜索历史
// - `user_settings` - 用户设置
// - `app_settings` - 应用设置（已废弃但保留）
// 
// # 安全性
// 
// 使用 `DROP TABLE IF EXISTS` 确保即使表不存在也不会报错。
// 
// # 需求
// 
// 满足需求 4.1, 4.2, 4.3, 4.4, 4.5
// 
// # 示例
// 
// ```rust
// use crate::db::init::migrate_remove_fragment_tables;
// use crate::db::DbConnectionManager;
// 
// let conn = DbConnectionManager::get()?;
// migrate_remove_fragment_tables(&conn)?;
// ```
pub fn migrate_remove_fragment_tables(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error> {
    log::info!("🗑️  [数据库迁移] 开始移除 contents 和 categories 表...");
    
    // 删除 contents 表的索引
    log::debug!("删除 contents 表的索引...");
    let _ = conn.execute("DROP INDEX IF EXISTS idx_contents_category", []);
    let _ = conn.execute("DROP INDEX IF EXISTS idx_contents_created", []);
    let _ = conn.execute("DROP INDEX IF EXISTS idx_contents_title", []);
    let _ = conn.execute("DROP INDEX IF EXISTS idx_contents_type", []);
    let _ = conn.execute("DROP INDEX IF EXISTS idx_contents_format", []);
    let _ = conn.execute("DROP INDEX IF EXISTS idx_contents_type_category", []);
    
    // 删除 categories 表的索引
    log::debug!("删除 categories 表的索引...");
    let _ = conn.execute("DROP INDEX IF EXISTS idx_categories_created", []);
    
    // 删除 contents 表
    log::info!("删除 contents 表...");
    conn.execute("DROP TABLE IF EXISTS contents", [])?;
    
    // 删除 categories 表
    log::info!("删除 categories 表...");
    conn.execute("DROP TABLE IF EXISTS categories", [])?;
    
    log::info!("✅ [数据库迁移] 已成功移除 contents 和 categories 表");
    log::info!("📝 [数据库迁移] 片段和分类数据现在存储在 Markdown 文件中");
    
    Ok(())
}
