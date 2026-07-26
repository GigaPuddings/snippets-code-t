use crate::db::DbConnectionManager;
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

// 通用查询所有实体（带使用计数和排序）
pub(crate) fn get_all_entities<T: DbEntity>() -> Result<Vec<T>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;

    // 检查是否存在 created_at 列
    let has_created_at = conn
        .prepare(&format!("SELECT created_at FROM {} LIMIT 1", T::TABLE_NAME))
        .is_ok();

    // 使用 search_history 表中的 usage_count 来排序。
    //
    // 历史记录的 key 与前端 searchRanking.getPrimarySearchHistoryKey 保持一致：
    // `{summarize}:{kind}:{normalized_content}`，其中 normalized_content 的规则为
    // trim → 小写 → 反斜杠转正斜杠 → 去掉尾部斜杠。
    // 实体主键 id 是每次扫描重新生成的 UUID，不能直接用来 JOIN 历史记录。
    let history_key_expr = format!(
        "'{}:{}:' || RTRIM(REPLACE(LOWER(TRIM(t.content)), '\\', '/'), '/')",
        T::SUMMARIZE_TYPE,
        T::HISTORY_KEY_KIND
    );
    let query = if has_created_at {
        format!(
            "SELECT t.id, t.title, t.content, t.icon, t.summarize, COALESCE(h.usage_count, 0) as usage_count
             FROM {} t
             LEFT JOIN search_history h ON h.id = {}
             ORDER BY COALESCE(h.usage_count, 0) DESC, t.created_at DESC",
            T::TABLE_NAME,
            history_key_expr
        )
    } else {
        format!(
            "SELECT t.id, t.title, t.content, t.icon, t.summarize, COALESCE(h.usage_count, 0) as usage_count
             FROM {} t
             LEFT JOIN search_history h ON h.id = {}
             ORDER BY COALESCE(h.usage_count, 0) DESC",
            T::TABLE_NAME,
            history_key_expr
        )
    };

    let mut stmt = conn.prepare(&query)?;
    let iter = stmt.query_map([], |row| T::from_row(row))?;

    iter.collect()
}

// 通用更新图标
pub(crate) fn update_entity_icon<T: DbEntity>(
    entity_id: &str,
    icon: &str,
) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        &format!("UPDATE {} SET icon = ?1 WHERE id = ?2", T::TABLE_NAME),
        rusqlite::params![icon, entity_id],
    )?;
    Ok(())
}

// 清理可重建的扫描来源，保留用户手动添加/编辑项。
pub(crate) fn clear_entities<T: DbEntity>() -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        &format!(
            "DELETE FROM {} WHERE source_kind = 'scanner'",
            T::TABLE_NAME
        ),
        [],
    )?;
    Ok(())
}

// 通用计数
pub(crate) fn count_entities<T: DbEntity>() -> Result<i64, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let count = conn.query_row(
        &format!("SELECT COUNT(*) FROM {}", T::TABLE_NAME),
        [],
        |row| row.get(0),
    )?;
    Ok(count)
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
    let mut conn = DbConnectionManager::get()?;
    let transaction = conn.transaction()?;
    reconcile_legacy_entities::<T>(&transaction, entities)?;
    if entities.is_empty() {
        return transaction.commit();
    }

    let query = format!(
        "INSERT OR REPLACE INTO {} (id, title, content, icon, summarize, source_kind)
         SELECT ?1, ?2, ?3, ?4, ?5, 'scanner'
         WHERE NOT EXISTS (
             SELECT 1 FROM {} WHERE source_kind = 'user' AND content = ?3
         )",
        T::TABLE_NAME,
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

/// 在单个事务中替换扫描来源索引，保留用户手动项，并避免
/// “先清表、扫描/写入失败后只剩空表”。
pub(crate) fn replace_entities<T: DbEntity>(entities: &[T]) -> Result<(), rusqlite::Error> {
    let mut conn = DbConnectionManager::get()?;
    let transaction = conn.transaction()?;
    reconcile_legacy_entities::<T>(&transaction, entities)?;
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
                 SELECT 1 FROM {} WHERE source_kind = 'user' AND content = ?3
             )",
            T::TABLE_NAME,
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn legacy_reconciliation_preserves_only_unmatched_rows_as_user_data() {
        let mut connection = rusqlite::Connection::open_in_memory().unwrap();
        connection
            .execute_batch(
                "CREATE TABLE apps (
                     id TEXT PRIMARY KEY,
                     title TEXT NOT NULL,
                     content TEXT NOT NULL,
                     icon TEXT,
                     summarize TEXT NOT NULL,
                     source_kind TEXT NOT NULL
                 );
                 INSERT INTO apps VALUES (
                     'scanned', 'Scanned', 'C:\\scanned.exe', NULL, 'app', 'legacy'
                 );
                 INSERT INTO apps VALUES (
                     'manual', 'Manual', 'C:\\manual.exe', NULL, 'app', 'legacy'
                 );",
            )
            .unwrap();
        let transaction = connection.transaction().unwrap();
        let scanned = AppInfo {
            id: "new-scanned".to_string(),
            title: "Scanned".to_string(),
            content: r"C:\scanned.exe".to_string(),
            icon: None,
            summarize: "app".to_string(),
            usage_count: 0,
        };

        reconcile_legacy_entities::<AppInfo>(&transaction, &[scanned]).unwrap();
        transaction.commit().unwrap();

        let matched_count: i64 = connection
            .query_row(
                "SELECT COUNT(*) FROM apps WHERE content = 'C:\\scanned.exe'",
                [],
                |row| row.get(0),
            )
            .unwrap();
        let manual_kind: String = connection
            .query_row(
                "SELECT source_kind FROM apps WHERE id = 'manual'",
                [],
                |row| row.get(0),
            )
            .unwrap();
        assert_eq!(matched_count, 0);
        assert_eq!(manual_kind, "user");
    }
}
