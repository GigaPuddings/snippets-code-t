use crate::{apps::AppInfo, bookmarks::BookmarkInfo};
use crate::db::DbConnectionManager;
use rusqlite;

// ============= 通用数据库实体框架 =============

/// 数据库实体 Trait - 定义通用的数据库操作接口
#[allow(dead_code)]
pub trait DbEntity: Sized {
    /// 表名
    const TABLE_NAME: &'static str;
    /// 汇总类型（用于 summarize 字段）
    const SUMMARIZE_TYPE: &'static str;
    
    /// 从数据库行构造实体
    fn from_row(row: &rusqlite::Row) -> rusqlite::Result<Self>;
    
    /// 获取实体的 ID
    fn id(&self) -> &str;
    
    /// 获取实体的标题
    fn title(&self) -> &str;
    
    /// 获取实体的内容
    fn content(&self) -> &str;
    
    /// 获取实体的图标
    fn icon(&self) -> &Option<String>;
    
    /// 转换为 SQL 参数（用于插入）
    fn to_insert_params(&self) -> Vec<Box<dyn rusqlite::ToSql>>;
}

/// 为 AppInfo 实现 DbEntity
impl DbEntity for AppInfo {
    const TABLE_NAME: &'static str = "apps";
    const SUMMARIZE_TYPE: &'static str = "app";
    
    fn from_row(row: &rusqlite::Row) -> rusqlite::Result<Self> {
        Ok(AppInfo {
            id: row.get(0)?,
            title: row.get(1)?,
            content: row.get(2)?,
            icon: row.get(3)?,
            summarize: row.get(4)?,
            usage_count: row.get(5)?,
        })
    }
    
    fn id(&self) -> &str { &self.id }
    fn title(&self) -> &str { &self.title }
    fn content(&self) -> &str { &self.content }
    fn icon(&self) -> &Option<String> { &self.icon }
    
    fn to_insert_params(&self) -> Vec<Box<dyn rusqlite::ToSql>> {
        vec![
            Box::new(self.id.clone()),
            Box::new(self.title.clone()),
            Box::new(self.content.clone()),
            Box::new(self.icon.clone()),
            Box::new(self.summarize.clone()),
        ]
    }
}

/// 为 BookmarkInfo 实现 DbEntity
impl DbEntity for BookmarkInfo {
    const TABLE_NAME: &'static str = "bookmarks";
    const SUMMARIZE_TYPE: &'static str = "bookmark";
    
    fn from_row(row: &rusqlite::Row) -> rusqlite::Result<Self> {
        Ok(BookmarkInfo {
            id: row.get(0)?,
            title: row.get(1)?,
            content: row.get(2)?,
            icon: row.get(3)?,
            summarize: row.get(4)?,
            usage_count: row.get(5)?,
        })
    }
    
    fn id(&self) -> &str { &self.id }
    fn title(&self) -> &str { &self.title }
    fn content(&self) -> &str { &self.content }
    fn icon(&self) -> &Option<String> { &self.icon }
    
    fn to_insert_params(&self) -> Vec<Box<dyn rusqlite::ToSql>> {
        vec![
            Box::new(self.id.clone()),
            Box::new(self.title.clone()),
            Box::new(self.content.clone()),
            Box::new(self.icon.clone()),
            Box::new(self.summarize.clone()),
        ]
    }
}

// ============= 通用数据库操作函数 =============

/// 通用查询所有实体（带使用计数和排序）
pub(crate) fn get_all_entities<T: DbEntity>() -> Result<Vec<T>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

    // 检查是否存在 created_at 列
    let has_created_at = conn
        .prepare(&format!("SELECT created_at FROM {} LIMIT 1", T::TABLE_NAME))
        .is_ok();

    // 使用 search_history 表中的 usage_count 来排序
    let query = if has_created_at {
        format!(
            "SELECT t.id, t.title, t.content, t.icon, t.summarize, COALESCE(h.usage_count, 0) as usage_count
             FROM {} t
             LEFT JOIN search_history h ON t.id = h.id
             ORDER BY COALESCE(h.usage_count, 0) DESC, t.created_at DESC",
            T::TABLE_NAME
        )
    } else {
        format!(
            "SELECT t.id, t.title, t.content, t.icon, t.summarize, COALESCE(h.usage_count, 0) as usage_count
             FROM {} t
             LEFT JOIN search_history h ON t.id = h.id
             ORDER BY COALESCE(h.usage_count, 0) DESC",
            T::TABLE_NAME
        )
    };

    let mut stmt = conn.prepare(&query)?;
    let iter = stmt.query_map([], |row| T::from_row(row))?;
    
    iter.collect()
}

/// 通用更新图标
pub(crate) fn update_entity_icon<T: DbEntity>(entity_id: &str, icon: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        &format!("UPDATE {} SET icon = ?1 WHERE id = ?2", T::TABLE_NAME),
        rusqlite::params![icon, entity_id],
    )?;
    Ok(())
}

/// 通用清空表
pub(crate) fn clear_entities<T: DbEntity>() -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(&format!("DELETE FROM {}", T::TABLE_NAME), [])?;
    Ok(())
}

/// 通用计数
pub(crate) fn count_entities<T: DbEntity>() -> Result<i64, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let count = conn.query_row(
        &format!("SELECT COUNT(*) FROM {}", T::TABLE_NAME),
        [],
        |row| row.get(0)
    )?;
    Ok(count)
}

/// 通用批量插入
pub(crate) fn insert_entities<T: DbEntity>(entities: &[T]) -> Result<(), rusqlite::Error> {
    if entities.is_empty() {
        return Ok(());
    }

    let conn = DbConnectionManager::get()?;
    let placeholders = "(?1, ?2, ?3, ?4, ?5)";
    let query = format!(
        "INSERT OR REPLACE INTO {} (id, title, content, icon, summarize) VALUES {}",
        T::TABLE_NAME, placeholders
    );

    let mut stmt = conn.prepare(&query)?;
    for entity in entities {
        let params = entity.to_insert_params();
        let param_refs: Vec<&dyn rusqlite::ToSql> = params.iter().map(|p| p.as_ref()).collect();
        stmt.execute(param_refs.as_slice())?;
    }

    Ok(())
}
