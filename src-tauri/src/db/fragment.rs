use crate::db::DbConnectionManager;
use crate::search::fuzzy_search;
use chrono::Local;
use rusqlite::{self, OptionalExtension};
use serde::{Deserialize, Serialize};

// ============= 数据结构定义 =============

/// 分类数据结构
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Category {
    pub id: i64,
    pub name: String,
    pub created_at: String,
}

/// 片段数据结构
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Fragment {
    pub id: i64,
    pub title: String,
    pub content: String,
    pub category_id: i64,
    pub created_at: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub category_name: Option<String>,
    #[serde(default)]
    pub summarize: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub icon: Option<String>,
}

// ============= 分类相关操作 =============

/// 获取所有分类
#[tauri::command]
pub fn get_categories(sort: Option<String>) -> Result<Vec<Category>, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let sort_order = sort.unwrap_or_else(|| "desc".to_string());
    let query = format!(
        "SELECT id, name, created_at FROM categories ORDER BY created_at {}",
        if sort_order == "asc" { "ASC" } else { "DESC" }
    );
    
    let mut stmt = conn.prepare(&query).map_err(|e| e.to_string())?;
    let categories = stmt
        .query_map([], |row| {
            Ok(Category {
                id: row.get(0)?,
                name: row.get(1)?,
                created_at: row.get(2)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;
    
    Ok(categories)
}

/// 添加分类
#[tauri::command]
pub fn add_category(name: Option<String>) -> Result<i64, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let category_name = name.unwrap_or_else(|| "未命名".to_string());
    let created_at = Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
    
    conn.execute(
        "INSERT INTO categories (name, created_at) VALUES (?1, ?2)",
        rusqlite::params![category_name, created_at],
    )
    .map_err(|e| e.to_string())?;
    
    let id = conn.last_insert_rowid();
    Ok(id)
}

/// 编辑分类
#[tauri::command]
pub fn edit_category(id: i64, name: String) -> Result<(), String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    conn.execute(
        "UPDATE categories SET name = ?1 WHERE id = ?2",
        rusqlite::params![name, id],
    )
    .map_err(|e| e.to_string())?;
    
    Ok(())
}

/// 删除分类（同时删除该分类下的所有片段）
#[tauri::command]
pub fn delete_category(id: i64) -> Result<(), String> {
    let mut conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    let tx = conn.transaction().map_err(|e| e.to_string())?;
    
    // 先删除该分类下的所有片段
    tx.execute(
        "DELETE FROM contents WHERE category_id = ?1",
        rusqlite::params![id],
    )
    .map_err(|e| e.to_string())?;
    
    // 再删除分类
    tx.execute(
        "DELETE FROM categories WHERE id = ?1",
        rusqlite::params![id],
    )
    .map_err(|e| e.to_string())?;
    
    tx.commit().map_err(|e| e.to_string())?;
    Ok(())
}

// ============= 片段相关操作 =============

/// 获取片段列表（支持拼音模糊搜索）
#[tauri::command]
pub fn get_fragment_list(
    category_id: Option<i64>,
    search_val: Option<String>,
) -> Result<Vec<Fragment>, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    // 构建基础查询
    let mut query = String::from(
        "SELECT c.id, c.title, c.content, c.category_id, c.created_at, cat.name as category_name 
         FROM contents c 
         LEFT JOIN categories cat ON c.category_id = cat.id 
         WHERE 1=1"
    );
    
    let mut params: Vec<Box<dyn rusqlite::ToSql>> = Vec::new();
    
    // 按分类过滤
    if let Some(cid) = category_id {
        query.push_str(" AND c.category_id = ?");
        params.push(Box::new(cid));
    }
    
    query.push_str(" ORDER BY c.id DESC");
    
    let mut stmt = conn.prepare(&query).map_err(|e| e.to_string())?;
    let param_refs: Vec<&dyn rusqlite::ToSql> = params.iter().map(|p| p.as_ref()).collect();
    
    let mut fragments: Vec<Fragment> = stmt
        .query_map(param_refs.as_slice(), |row| {
            Ok(Fragment {
                id: row.get(0)?,
                title: row.get(1)?,
                content: row.get(2)?,
                category_id: row.get(3)?,
                created_at: row.get(4)?,
                category_name: row.get(5)?,
                summarize: "text".to_string(),
                icon: None,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;
    
    // 如果有搜索词，使用拼音模糊搜索过滤
    if let Some(search) = search_val {
        if !search.is_empty() {
            let results = fuzzy_search(
                &fragments,
                &search,
                |frag: &Fragment| &frag.title,
                |frag: &Fragment| &frag.content,
            );
            fragments = results.into_iter().map(|(frag, _score)| frag).collect();
        }
    }
    
    Ok(fragments)
}

/// 添加片段
#[tauri::command]
pub fn add_fragment(category_id: Option<i64>) -> Result<i64, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let cid = category_id.unwrap_or(0);
    let created_at = Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
    
    conn.execute(
        "INSERT INTO contents (title, content, category_id, created_at) VALUES (?1, ?2, ?3, ?4)",
        rusqlite::params!["未命名片段", "", cid, created_at],
    )
    .map_err(|e| e.to_string())?;
    
    let id = conn.last_insert_rowid();
    Ok(id)
}

/// 删除片段
#[tauri::command]
pub fn delete_fragment(id: i64) -> Result<(), String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    conn.execute(
        "DELETE FROM contents WHERE id = ?1",
        rusqlite::params![id],
    )
    .map_err(|e| e.to_string())?;
    
    Ok(())
}

/// 编辑片段
#[tauri::command]
pub fn edit_fragment(
    id: i64,
    title: String,
    content: String,
    category_id: i64,
) -> Result<(), String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    conn.execute(
        "UPDATE contents SET title = ?1, content = ?2, category_id = ?3 WHERE id = ?4",
        rusqlite::params![title, content, category_id, id],
    )
    .map_err(|e| e.to_string())?;
    
    Ok(())
}

/// 获取单个片段内容
#[tauri::command]
pub fn get_fragment_content(id: i64) -> Result<Option<Fragment>, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let mut stmt = conn
        .prepare(
            "SELECT c.id, c.title, c.content, c.category_id, c.created_at, cat.name as category_name 
             FROM contents c 
             LEFT JOIN categories cat ON c.category_id = cat.id 
             WHERE c.id = ?1"
        )
        .map_err(|e| e.to_string())?;
    
    let fragment = stmt
        .query_row([id], |row| {
            Ok(Fragment {
                id: row.get(0)?,
                title: row.get(1)?,
                content: row.get(2)?,
                category_id: row.get(3)?,
                created_at: row.get(4)?,
                category_name: row.get(5)?,
                summarize: "text".to_string(),
                icon: None,
            })
        })
        .optional()
        .map_err(|e| e.to_string())?;
    
    Ok(fragment)
}

/// 搜索片段内容（支持拼音模糊搜索）
/// 在标题、内容和分类名中搜索关键词
#[tauri::command]
pub fn search_fragment_content(keyword: String) -> Result<Vec<Fragment>, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    // 获取所有片段
    let query = "
        SELECT c.id, c.title, c.content, c.category_id, c.created_at, cat.name as category_name
        FROM contents c
        LEFT JOIN categories cat ON c.category_id = cat.id
        ORDER BY c.created_at DESC
    ";
    
    let mut stmt = conn.prepare(query).map_err(|e| e.to_string())?;
    
    let all_fragments: Vec<Fragment> = stmt
        .query_map([], |row| {
            Ok(Fragment {
                id: row.get(0)?,
                title: row.get(1)?,
                content: row.get(2)?,
                category_id: row.get(3)?,
                created_at: row.get(4)?,
                category_name: row.get(5)?,
                summarize: "text".to_string(),
                icon: None,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;
    
    // 如果没有关键词，返回所有片段
    if keyword.trim().is_empty() {
        return Ok(all_fragments);
    }
    
    // 使用拼音模糊搜索
    let results = fuzzy_search(
        &all_fragments,
        &keyword,
        |frag: &Fragment| &frag.title,
        |frag: &Fragment| {
            // 同时搜索内容和分类名
            &frag.content
        },
    );
    
    // 只返回匹配的片段（不带分数）
    Ok(results.into_iter().map(|(frag, _score)| frag).collect())
}
