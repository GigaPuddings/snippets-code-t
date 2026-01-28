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
    
    // 新增字段
    #[serde(default = "default_fragment_type")]
    pub fragment_type: String,  // "code" | "note"
    
    #[serde(default = "default_format")]
    pub format: String,  // "plain" | "markdown" | "html"
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub metadata: Option<String>,  // JSON 字符串
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub tags: Option<String>,  // 逗号分隔的标签
}

/// 编辑片段的参数结构
#[derive(Debug, Serialize, Deserialize)]
pub struct EditFragmentParams {
    pub id: i64,
    pub title: String,
    pub content: String,
    pub category_id: i64,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub fragment_type: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub format: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub metadata: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub tags: Option<String>,
}

// ============= 默认值函数 =============

/// 片段类型默认值
fn default_fragment_type() -> String {
    "code".to_string()
}

/// 内容格式默认值
fn default_format() -> String {
    "plain".to_string()
}

// ============= 验证函数 =============

/// 验证片段类型
pub fn validate_fragment_type(fragment_type: &str) -> Result<(), String> {
    match fragment_type {
        "code" | "note" => Ok(()),
        _ => Err(format!(
            "Invalid fragment type '{}'. Must be 'code' or 'note'",
            fragment_type
        )),
    }
}

/// 验证内容格式
pub fn validate_format(format: &str) -> Result<(), String> {
    match format {
        "plain" | "markdown" | "html" => Ok(()),
        _ => Err(format!(
            "Invalid format '{}'. Must be 'plain', 'markdown', or 'html'",
            format
        )),
    }
}

/// 验证元数据（必须是有效的 JSON）
pub fn validate_metadata(metadata: &str) -> Result<(), String> {
    if metadata.is_empty() {
        return Ok(());
    }
    
    serde_json::from_str::<serde_json::Value>(metadata)
        .map(|_| ())
        .map_err(|e| format!("Invalid JSON in metadata field: {}", e))
}

// ============= 分类相关操作 =============

/// 获取所有分类（排除系统分类）
#[tauri::command]
pub fn get_categories(sort: Option<String>) -> Result<Vec<Category>, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let sort_order = sort.unwrap_or_else(|| "desc".to_string());
    let query = format!(
        "SELECT id, name, created_at FROM categories WHERE is_system = 0 ORDER BY created_at {}",
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

/// 获取"未分类"分类的 ID
#[tauri::command]
pub fn get_uncategorized_id() -> Result<Option<i64>, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let result = conn.query_row(
        "SELECT id FROM categories WHERE name = '未分类' AND is_system = 1 LIMIT 1",
        [],
        |row| row.get(0)
    );
    
    match result {
        Ok(id) => Ok(Some(id)),
        Err(rusqlite::Error::QueryReturnedNoRows) => Ok(None),
        Err(e) => Err(e.to_string())
    }
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
        "SELECT c.id, c.title, c.content, c.category_id, c.created_at, cat.name as category_name,
         c.type, c.format, c.metadata, c.tags
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
                fragment_type: row.get(6).unwrap_or_else(|_| "code".to_string()),
                format: row.get(7).unwrap_or_else(|_| "plain".to_string()),
                metadata: row.get(8).ok(),
                tags: row.get(9).ok(),
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

/// 添加片段（扩展版本）
#[tauri::command]
pub fn add_fragment(
    category_id: Option<i64>,
    fragment_type: Option<String>,
    format: Option<String>,
    metadata: Option<String>,
    tags: Option<String>,
) -> Result<i64, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    // 验证 fragment_type
    let ftype = fragment_type.unwrap_or_else(|| "code".to_string());
    validate_fragment_type(&ftype)?;
    
    // 根据 type 设置默认 format
    let fmt = format.unwrap_or_else(|| {
        if ftype == "note" {
            "markdown".to_string()
        } else {
            "plain".to_string()
        }
    });
    
    // 验证 format
    validate_format(&fmt)?;
    
    // 验证 metadata 是否为有效 JSON
    if let Some(ref meta) = metadata {
        if !meta.is_empty() {
            validate_metadata(meta)?;
        }
    }
    
    // 处理 category_id：如果为 None 或 0，则使用"未分类"分类
    let cid = match category_id {
        Some(id) if id > 0 => id,
        _ => {
            // 查找"未分类"分类，如果不存在则创建
            let uncategorized_id: Result<i64, _> = conn.query_row(
                "SELECT id FROM categories WHERE name = '未分类' AND is_system = 1 LIMIT 1",
                [],
                |row| row.get(0)
            );
            
            match uncategorized_id {
                Ok(id) => id,
                Err(_) => {
                    // 创建"未分类"分类，并标记为系统分类
                    let created_at = Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
                    conn.execute(
                        "INSERT INTO categories (name, created_at, is_system) VALUES (?1, ?2, 1)",
                        rusqlite::params!["未分类", created_at],
                    ).map_err(|e| e.to_string())?;
                    
                    conn.last_insert_rowid()
                }
            }
        }
    };
    
    // 根据 fragment_type 设置默认标题
    let default_title = if ftype == "note" {
        "未命名笔记"
    } else {
        "未命名片段"
    };
    
    let created_at = Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
    
    conn.execute(
        "INSERT INTO contents (title, content, category_id, created_at, type, format, metadata, tags) 
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
        rusqlite::params![
            default_title,
            "",
            cid,
            created_at,
            ftype,
            fmt,
            metadata,
            tags
        ],
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

/// 编辑片段（扩展版本）
#[tauri::command]
pub fn edit_fragment(params: EditFragmentParams) -> Result<(), String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    // 验证 fragment_type（如果提供）
    if let Some(ref ftype) = params.fragment_type {
        validate_fragment_type(ftype)?;
    }
    
    // 验证 format（如果提供）
    if let Some(ref fmt) = params.format {
        validate_format(fmt)?;
    }
    
    // 验证 metadata（如果提供）
    if let Some(ref meta) = params.metadata {
        if !meta.is_empty() {
            validate_metadata(meta)?;
        }
    }
    
    // 构建动态 SQL - 始终更新基本字段
    let mut sql = "UPDATE contents SET title = ?1, content = ?2, category_id = ?3".to_string();
    let mut sql_params: Vec<Box<dyn rusqlite::ToSql>> = vec![
        Box::new(params.title),
        Box::new(params.content),
        Box::new(params.category_id),
    ];
    
    let mut param_index = 4;
    
    // 如果提供了 fragment_type，添加到更新中
    if let Some(ftype) = params.fragment_type {
        sql.push_str(&format!(", type = ?{}", param_index));
        sql_params.push(Box::new(ftype));
        param_index += 1;
    }
    
    // 如果提供了 format，添加到更新中
    if let Some(fmt) = params.format {
        sql.push_str(&format!(", format = ?{}", param_index));
        sql_params.push(Box::new(fmt));
        param_index += 1;
    }
    
    // 如果提供了 metadata，添加到更新中
    if let Some(meta) = params.metadata {
        sql.push_str(&format!(", metadata = ?{}", param_index));
        sql_params.push(Box::new(meta));
        param_index += 1;
    }
    
    // 如果提供了 tags，添加到更新中
    if let Some(t) = params.tags {
        sql.push_str(&format!(", tags = ?{}", param_index));
        sql_params.push(Box::new(t));
        param_index += 1;
    }
    
    // 添加 WHERE 子句
    sql.push_str(&format!(" WHERE id = ?{}", param_index));
    sql_params.push(Box::new(params.id));
    
    // 执行更新
    let param_refs: Vec<&dyn rusqlite::ToSql> = sql_params.iter().map(|p| p.as_ref()).collect();
    
    conn.execute(&sql, param_refs.as_slice())
        .map_err(|e| e.to_string())?;
    
    Ok(())
}

/// 获取单个片段内容
#[tauri::command]
pub fn get_fragment_content(id: i64) -> Result<Option<Fragment>, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let mut stmt = conn
        .prepare(
            "SELECT c.id, c.title, c.content, c.category_id, c.created_at, cat.name as category_name,
             c.type, c.format, c.metadata, c.tags
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
                fragment_type: row.get(6).unwrap_or_else(|_| "code".to_string()),
                format: row.get(7).unwrap_or_else(|_| "plain".to_string()),
                metadata: row.get(8).ok(),
                tags: row.get(9).ok(),
            })
        })
        .optional()
        .map_err(|e| e.to_string())?;
    
    Ok(fragment)
}

/// 搜索片段内容（支持拼音模糊搜索）
/// 从 HTML 内容中提取纯文本（简单实现，移除 HTML 标签）
fn extract_plain_text_from_html(html: &str) -> String {
    // 简单的 HTML 标签移除
    let mut result = String::new();
    let mut in_tag = false;
    let mut in_script_or_style = false;
    let mut tag_name = String::new();
    
    let chars: Vec<char> = html.chars().collect();
    let mut i = 0;
    
    while i < chars.len() {
        let c = chars[i];
        
        if c == '<' {
            in_tag = true;
            tag_name.clear();
            
            // 检查是否是 script 或 style 标签
            if i + 7 < chars.len() {
                let next_chars: String = chars[i+1..i+7].iter().collect();
                if next_chars.to_lowercase() == "script" || next_chars.to_lowercase() == "style " {
                    in_script_or_style = true;
                }
            }
            
            // 检查是否是结束标签
            if i + 8 < chars.len() {
                let next_chars: String = chars[i+1..i+9].iter().collect();
                if next_chars.to_lowercase() == "/script>" || next_chars.to_lowercase() == "/style> " {
                    in_script_or_style = false;
                }
            }
        } else if c == '>' {
            in_tag = false;
        } else if !in_tag && !in_script_or_style {
            result.push(c);
        }
        
        i += 1;
    }
    
    // 清理多余的空白字符
    result.split_whitespace().collect::<Vec<_>>().join(" ")
}

/// 在标题、内容、标签和分类名中搜索关键词
#[tauri::command]
pub fn search_fragment_content(keyword: String) -> Result<Vec<Fragment>, String> {
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    // 获取所有片段
    let query = "
        SELECT c.id, c.title, c.content, c.category_id, c.created_at, cat.name as category_name,
        c.type, c.format, c.metadata, c.tags
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
                fragment_type: row.get(6).unwrap_or_else(|_| "code".to_string()),
                format: row.get(7).unwrap_or_else(|_| "plain".to_string()),
                metadata: row.get(8).ok(),
                tags: row.get(9).ok(),
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;
    
    // 如果没有关键词，返回所有片段
    if keyword.trim().is_empty() {
        return Ok(all_fragments);
    }
    
    // 使用拼音模糊搜索，包括标签
    let keyword_lower = keyword.to_lowercase();
    let mut results: Vec<(Fragment, f64)> = Vec::new();
    
    for fragment in all_fragments {
        let mut score = 0.0;
        
        // 搜索标题
        if fragment.title.to_lowercase().contains(&keyword_lower) {
            score += 10.0;
        }
        
        // 搜索内容 - 对于 HTML 格式的笔记，提取纯文本后搜索
        let searchable_content = if fragment.format == "html" {
            extract_plain_text_from_html(&fragment.content)
        } else {
            fragment.content.clone()
        };
        
        if searchable_content.to_lowercase().contains(&keyword_lower) {
            score += 5.0;
        }
        
        // 搜索标签
        if let Some(ref tags) = fragment.tags {
            if tags.to_lowercase().contains(&keyword_lower) {
                score += 8.0; // 标签匹配权重较高
            }
        }
        
        // 搜索分类名
        if let Some(ref cat_name) = fragment.category_name {
            if cat_name.to_lowercase().contains(&keyword_lower) {
                score += 3.0;
            }
        }
        
        if score > 0.0 {
            results.push((fragment, score));
        }
    }
    
    // 按分数排序
    results.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap_or(std::cmp::Ordering::Equal));
    
    // 只返回匹配的片段（不带分数）
    Ok(results.into_iter().map(|(frag, _score)| frag).collect())
}