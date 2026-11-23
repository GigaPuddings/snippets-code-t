use crate::db::{
    connection::{CORE_DB_SCHEMA, SEARCH_DB_SCHEMA},
    DbConnectionManager,
};
use crate::{apps::AppInfo, bookmarks::BookmarkInfo};
use std::collections::{HashMap, HashSet};

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

    fn summarize(&self) -> &str;

    fn metadata_json(&self) -> String;

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
            metadata: serde_json::from_str(&row.get::<_, String>(6)?).unwrap_or_default(),
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
    fn summarize(&self) -> &str {
        &self.summarize
    }

    fn metadata_json(&self) -> String {
        serde_json::to_string(&self.metadata).unwrap_or_else(|_| "{}".into())
    }

    fn to_insert_params(&self) -> Vec<Box<dyn rusqlite::ToSql>> {
        vec![
            Box::new(self.id.clone()),
            Box::new(self.title.clone()),
            Box::new(self.content.clone()),
            Box::new(self.icon.clone()),
            Box::new(self.summarize.clone()),
            Box::new(self.metadata_json()),
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
            sources: serde_json::from_str::<serde_json::Value>(&row.get::<_, String>(6)?)
                .ok()
                .and_then(|value| serde_json::from_value(value.get("sources")?.clone()).ok())
                .unwrap_or_default(),
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
    fn summarize(&self) -> &str {
        &self.summarize
    }

    fn metadata_json(&self) -> String {
        serde_json::json!({"sources": self.sources}).to_string()
    }

    fn to_insert_params(&self) -> Vec<Box<dyn rusqlite::ToSql>> {
        vec![
            Box::new(self.id.clone()),
            Box::new(self.title.clone()),
            Box::new(self.content.clone()),
            Box::new(self.icon.clone()),
            Box::new(self.summarize.clone()),
            Box::new(self.metadata_json()),
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
            COALESCE(t.created_at, '') AS sort_created_at,
            COALESCE(t.metadata, '{{}}') AS metadata
         FROM {}.{} t
         LEFT JOIN main.search_history h ON h.id = {}
         WHERE ({}) AND NOT EXISTS (
             SELECT 1 FROM main.launcher_exclusions e
             WHERE e.kind = '{kind}' AND e.target = t.content {collation}
         )",
        schema,
        T::TABLE_NAME,
        history_key_expr::<T>(),
        predicate,
        kind = T::SUMMARIZE_TYPE,
        collation = if T::SUMMARIZE_TYPE == "app" {
            "COLLATE NOCASE"
        } else {
            ""
        },
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
        "SELECT id, title, content, icon, summarize, usage_count, metadata
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

// 通用批量插入
pub(crate) fn insert_entities<T: DbEntity>(entities: &[T]) -> Result<(), rusqlite::Error> {
    let mut conn = DbConnectionManager::get_search()?;
    DbConnectionManager::attach_core_database(&conn)?;
    let transaction = conn.transaction()?;
    if entities.is_empty() {
        return transaction.commit();
    }

    let query = format!(
        "INSERT OR REPLACE INTO {} (id, title, content, icon, summarize, metadata, source_kind)
         SELECT ?1, ?2, ?3, ?4, ?5, ?6, 'scanner'
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

/// 在单个事务中同步扫描来源索引，保留用户手动项以及未变化扫描项的 ID、
/// 图标和创建时间。扫描与解析先在事务外完成，写入失败时旧索引仍可继续使用。
pub(crate) fn replace_entities<T: DbEntity>(entities: &[T]) -> Result<(), rusqlite::Error> {
    let mut conn = DbConnectionManager::get_search()?;
    DbConnectionManager::attach_core_database(&conn)?;
    let transaction = conn.transaction()?;
    sync_entities_in_transaction(&transaction, entities, true)?;
    transaction.commit()
}

/// 合并一次可能不完整的扫描结果。新发现的项目会被写入，已有项目会更新，
/// 但本次未发现的扫描项不会被删除；只有完整扫描才能安全清理过期数据。
pub(crate) fn merge_entities<T: DbEntity>(entities: &[T]) -> Result<(), rusqlite::Error> {
    let mut conn = DbConnectionManager::get_search()?;
    DbConnectionManager::attach_core_database(&conn)?;
    let transaction = conn.transaction()?;
    sync_entities_in_transaction(&transaction, entities, false)?;
    transaction.commit()
}

fn sync_entities_in_transaction<T: DbEntity>(
    transaction: &rusqlite::Transaction<'_>,
    entities: &[T],
    remove_stale: bool,
) -> Result<(), rusqlite::Error> {
    let user_contents = {
        let query = format!(
            "SELECT content FROM {}.{} WHERE COALESCE(source_kind, 'user') <> 'scanner'",
            CORE_DB_SCHEMA,
            T::TABLE_NAME
        );
        let mut stmt = transaction.prepare(&query)?;
        let rows = stmt.query_map([], |row| row.get::<_, String>(0))?;
        rows.filter_map(Result::ok).collect::<HashSet<_>>()
    };

    // A scanner can occasionally report the same launch target more than once.
    // Keep the first occurrence and let the user-owned row win on content conflicts.
    let mut desired_contents = HashSet::new();
    let desired_entities = entities
        .iter()
        .filter(|entity| {
            !user_contents.contains(entity.content())
                && desired_contents.insert(entity.content().to_string())
        })
        .collect::<Vec<_>>();

    let existing_rows = {
        let query = format!(
            "SELECT id, content FROM {} WHERE source_kind = 'scanner' ORDER BY rowid",
            T::TABLE_NAME
        );
        let mut stmt = transaction.prepare(&query)?;
        let rows = stmt.query_map([], |row| {
            Ok((row.get::<_, String>(0)?, row.get::<_, String>(1)?))
        })?;
        rows.filter_map(Result::ok).collect::<Vec<_>>()
    };

    let mut retained_ids = HashMap::<String, String>::new();
    {
        let query = format!(
            "DELETE FROM {} WHERE id = ?1 AND source_kind = 'scanner'",
            T::TABLE_NAME
        );
        let mut delete_stmt = transaction.prepare(&query)?;
        for (id, content) in existing_rows {
            if desired_contents.contains(&content) {
                if let std::collections::hash_map::Entry::Vacant(entry) =
                    retained_ids.entry(content)
                {
                    entry.insert(id);
                } else {
                    // 清理历史重复项，避免部分扫描反复累积相同启动目标。
                    delete_stmt.execute([id])?;
                }
            } else if remove_stale {
                delete_stmt.execute([id])?;
            }
        }
    }

    {
        let update_query = format!(
            "UPDATE {} SET
                 title = ?1,
                 icon = COALESCE(?2, icon),
                 summarize = ?3, metadata = ?4
             WHERE id = ?5 AND source_kind = 'scanner'",
            T::TABLE_NAME
        );
        let insert_query = format!(
            "INSERT INTO {} (id, title, content, icon, summarize, metadata, source_kind)
             VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'scanner')",
            T::TABLE_NAME
        );
        let mut update_stmt = transaction.prepare(&update_query)?;
        let mut insert_stmt = transaction.prepare(&insert_query)?;

        for entity in desired_entities {
            if let Some(existing_id) = retained_ids.get(entity.content()) {
                update_stmt.execute(rusqlite::params![
                    entity.title(),
                    entity.icon(),
                    entity.summarize(),
                    entity.metadata_json(),
                    existing_id
                ])?;
            } else {
                insert_stmt.execute(rusqlite::params![
                    entity.id(),
                    entity.title(),
                    entity.content(),
                    entity.icon(),
                    entity.summarize(),
                    entity.metadata_json()
                ])?;
            }
        }
    }

    Ok(())
}
