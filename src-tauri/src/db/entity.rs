use crate::db::{
    connection::{CORE_DB_SCHEMA, SEARCH_DB_SCHEMA},
    DbConnectionManager,
};
use crate::{apps::AppInfo, bookmarks::BookmarkInfo};

// ============= 通用数据库实体框架 =============

// 数据库实体 Trait - 定义通用的数据库操作接口
#[allow(dead_code)]
pub trait DbEntity: Sized {
    // 表名
    const TABLE_NAME: &'static str;
    // 汇总类型（用于 summarize 字段）
    const SUMMARIZE_TYPE: &'static str;
    // 搜索历史 key 的类别（与前端 searchRanking 的 createHistoryKey 保持一致：
    // 应用/文件类用 path，书签类用 url）
    const HISTORY_KEY_KIND: &'static str;

    // 从数据库行构造实体
    fn from_row(row: &rusqlite::Row) -> rusqlite::Result<Self>;

    // 获取实体的 ID
    fn id(&self) -> &str;

    // 获取实体的标题
    fn title(&self) -> &str;

    // 获取实体的内容
    fn content(&self) -> &str;

    // 获取实体的图标
    fn icon(&self) -> &Option<String>;

    // 转换为 SQL 参数（用于插入）
    fn to_insert_params(&self) -> Vec<Box<dyn rusqlite::ToSql>>;
}

// 为 AppInfo 实现 DbEntity
impl DbEntity for AppInfo {
    const TABLE_NAME: &'static str = "apps";
    const SUMMARIZE_TYPE: &'static str = "app";
    const HISTORY_KEY_KIND: &'static str = "path";

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

    fn id(&self) -> &str {
        &self.id
    }
    fn title(&self) -> &str {
        &self.title
    }
    fn content(&self) -> &str {
        &self.content
    }
    fn icon(&self) -> &Option<String> {
        &self.icon
    }

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

// 为 BookmarkInfo 实现 DbEntity
impl DbEntity for BookmarkInfo {
    const TABLE_NAME: &'static str = "bookmarks";
    const SUMMARIZE_TYPE: &'static str = "bookmark";
    const HISTORY_KEY_KIND: &'static str = "url";

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

    fn id(&self) -> &str {
        &self.id
    }
    fn title(&self) -> &str {
        &self.title
    }
    fn content(&self) -> &str {
        &self.content
    }
    fn icon(&self) -> &Option<String> {
        &self.icon
    }

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

fn history_key_expr<T: DbEntity>() -> String {
    format!(
        "'{}:{}:' || RTRIM(REPLACE(LOWER(TRIM(t.content)), '\\', '/'), '/')",
        T::SUMMARIZE_TYPE,
        T::HISTORY_KEY_KIND
    )
}

fn select_entities_sql<T: DbEntity>(schema: &str, predicate: &str) -> String {
    format!(
        "SELECT
            t.id,
            t.title,
            t.content,
            t.icon,
            t.summarize,
            COALESCE(h.usage_count, 0) AS usage_count,
            COALESCE(t.created_at, '') AS sort_created_at
         FROM {}.{} t
         LEFT JOIN main.search_history h ON h.id = {}
         WHERE {}",
        schema,
        T::TABLE_NAME,
        history_key_expr::<T>(),
        predicate
    )
}

// 通用查询所有实体（带使用计数和排序）
pub(crate) fn get_all_entities<T: DbEntity>() -> Result<Vec<T>, rusqlite::Error> {
    let conn = DbConnectionManager::get_core()?;
    DbConnectionManager::attach_search_database(&conn)?;

    let mut selects = Vec::new();
    let core_table_exists = table_exists_in_schema(&conn, "main", T::TABLE_NAME)?;
    if core_table_exists {
        selects.push(select_entities_sql::<T>(
            "main",
            "COALESCE(t.source_kind, 'user') <> 'scanner'",
        ));
    }
    if table_exists_in_schema(&conn, SEARCH_DB_SCHEMA, T::TABLE_NAME)? {
        let search_predicate = if core_table_exists {
            format!(
                "COALESCE(t.source_kind, 'scanner') = 'scanner'
                 AND NOT EXISTS (
                    SELECT 1 FROM main.{} core
                    WHERE COALESCE(core.source_kind, 'user') <> 'scanner'
                      AND core.content = t.content
                 )",
                T::TABLE_NAME
            )
        } else {
            "COALESCE(t.source_kind, 'scanner') = 'scanner'".to_string()
        };
        selects.push(select_entities_sql::<T>(
            SEARCH_DB_SCHEMA,
            &search_predicate,
        ));
    }
    if selects.is_empty() {
        return Ok(Vec::new());
    }

    // 使用 core.search_history 的 usage_count 排序。历史 key 与前端
    // searchRanking.getPrimarySearchHistoryKey 保持一致。
    let query = format!(
        "SELECT id, title, content, icon, summarize, usage_count
         FROM ({})
         ORDER BY usage_count DESC, sort_created_at DESC",
        selects.join(" UNION ALL ")
    );

    let mut stmt = conn.prepare(&query)?;
    let iter = stmt.query_map([], |row| T::from_row(row))?;

    iter.collect()
}

// 通用更新图标
pub(crate) fn update_entity_icon<T: DbEntity>(
    entity_id: &str,
    icon: &str,
) -> Result<(), rusqlite::Error> {
    let search = DbConnectionManager::get_search()?;
    if table_exists_in_schema(&search, "main", T::TABLE_NAME)? {
        let updated = search.execute(
            &format!("UPDATE {} SET icon = ?1 WHERE id = ?2", T::TABLE_NAME),
            rusqlite::params![icon, entity_id],
        )?;
        if updated > 0 {
            return Ok(());
        }
    }

    let core = DbConnectionManager::get_core()?;
    if table_exists_in_schema(&core, "main", T::TABLE_NAME)? {
        core.execute(
            &format!("UPDATE {} SET icon = ?1 WHERE id = ?2", T::TABLE_NAME),
            rusqlite::params![icon, entity_id],
        )?;
    }
    Ok(())
}

// 通用计数
pub(crate) fn count_entities<T: DbEntity>() -> Result<i64, rusqlite::Error> {
    let conn = DbConnectionManager::get_core()?;
    DbConnectionManager::attach_search_database(&conn)?;

    let mut count = 0;
    let core_table_exists = table_exists_in_schema(&conn, "main", T::TABLE_NAME)?;
    if core_table_exists {
        count += conn.query_row(
            &format!(
                "SELECT COUNT(*) FROM main.{} WHERE COALESCE(source_kind, 'user') <> 'scanner'",
                T::TABLE_NAME
            ),
            [],
            |row| row.get::<_, i64>(0),
        )?;
    }
    if table_exists_in_schema(&conn, SEARCH_DB_SCHEMA, T::TABLE_NAME)? {
        let query = if core_table_exists {
            format!(
                "SELECT COUNT(*)
                 FROM {}.{} t
                 WHERE COALESCE(t.source_kind, 'scanner') = 'scanner'
                   AND NOT EXISTS (
                      SELECT 1 FROM main.{} core
                      WHERE COALESCE(core.source_kind, 'user') <> 'scanner'
                        AND core.content = t.content
                   )",
                SEARCH_DB_SCHEMA,
                T::TABLE_NAME,
                T::TABLE_NAME
            )
        } else {
            format!(
                "SELECT COUNT(*) FROM {}.{} WHERE COALESCE(source_kind, 'scanner') = 'scanner'",
                SEARCH_DB_SCHEMA,
                T::TABLE_NAME
            )
        };
        count += conn.query_row(&query, [], |row| row.get::<_, i64>(0))?;
    }
    Ok(count)
}

pub(crate) fn count_scanner_entities<T: DbEntity>() -> Result<i64, rusqlite::Error> {
    let conn = DbConnectionManager::get_search()?;
    if !table_exists_in_schema(&conn, "main", T::TABLE_NAME)? {
        return Ok(0);
    }
    conn.query_row(
        &format!(
            "SELECT COUNT(*) FROM {} WHERE source_kind = 'scanner'",
            T::TABLE_NAME
        ),
        [],
        |row| row.get(0),
    )
}

fn reconcile_legacy_entities<T: DbEntity>(
    transaction: &rusqlite::Transaction<'_>,
    entities: &[T],
) -> Result<(), rusqlite::Error> {
    let delete_matching = format!(
        "DELETE FROM {} WHERE source_kind = 'legacy' AND content = ?1",
        T::TABLE_NAME
    );
    {
        let mut stmt = transaction.prepare(&delete_matching)?;
        for entity in entities {
            let params = entity.to_insert_params();
            stmt.execute([params[2].as_ref()])?;
        }
    }
    transaction.execute(
        &format!(
            "UPDATE {} SET source_kind = 'user' WHERE source_kind = 'legacy'",
            T::TABLE_NAME
        ),
        [],
    )?;
    Ok(())
}

// 通用批量插入
pub(crate) fn insert_entities<T: DbEntity>(entities: &[T]) -> Result<(), rusqlite::Error> {
    let mut core = DbConnectionManager::get_core()?;
    {
        let transaction = core.transaction()?;
        reconcile_legacy_entities::<T>(&transaction, entities)?;
        transaction.commit()?;
    }

    let mut conn = DbConnectionManager::get_search()?;
    DbConnectionManager::attach_core_database(&conn)?;
    let transaction = conn.transaction()?;
    if entities.is_empty() {
        return transaction.commit();
    }

    let query = format!(
        "INSERT OR REPLACE INTO {} (id, title, content, icon, summarize, source_kind)
         SELECT ?1, ?2, ?3, ?4, ?5, 'scanner'
         WHERE NOT EXISTS (
             SELECT 1 FROM {}.{} WHERE source_kind <> 'scanner' AND content = ?3
         )",
        T::TABLE_NAME,
        CORE_DB_SCHEMA,
        T::TABLE_NAME
    );

    {
        let mut stmt = transaction.prepare(&query)?;
        for entity in entities {
            let params = entity.to_insert_params();
            let param_refs: Vec<&dyn rusqlite::ToSql> = params.iter().map(|p| p.as_ref()).collect();
            stmt.execute(param_refs.as_slice())?;
        }
    }

    transaction.commit()
}

/// 在单个事务中替换扫描来源索引，保留用户手动项。扫描与解析先在事务外完成，
/// 写入失败时旧索引仍可继续使用，不会留下只清空一半的状态。
pub(crate) fn replace_entities<T: DbEntity>(entities: &[T]) -> Result<(), rusqlite::Error> {
    let mut core = DbConnectionManager::get_core()?;
    {
        let transaction = core.transaction()?;
        reconcile_legacy_entities::<T>(&transaction, entities)?;
        transaction.commit()?;
    }

    let mut conn = DbConnectionManager::get_search()?;
    DbConnectionManager::attach_core_database(&conn)?;
    let transaction = conn.transaction()?;
    transaction.execute(
        &format!(
            "DELETE FROM {} WHERE source_kind = 'scanner'",
            T::TABLE_NAME
        ),
        [],
    )?;
    if !entities.is_empty() {
        let query = format!(
            "INSERT OR REPLACE INTO {} (id, title, content, icon, summarize, source_kind)
             SELECT ?1, ?2, ?3, ?4, ?5, 'scanner'
             WHERE NOT EXISTS (
                 SELECT 1 FROM {}.{} WHERE source_kind <> 'scanner' AND content = ?3
             )",
            T::TABLE_NAME,
            CORE_DB_SCHEMA,
            T::TABLE_NAME
        );
        let mut stmt = transaction.prepare(&query)?;
        for entity in entities {
            let params = entity.to_insert_params();
            let param_refs = params
                .iter()
                .map(|value| value.as_ref())
                .collect::<Vec<&dyn rusqlite::ToSql>>();
            stmt.execute(param_refs.as_slice())?;
        }
    }
    transaction.commit()
}
