// 数据库到 Markdown 的迁移模块

use super::file_ops::*;
use super::metadata::*;
use super::workspace::*;
use crate::db::DbConnectionManager;
use crate::json_config;
use log::{info, warn};
use rusqlite::{Connection, Row};
use std::path::{Path, PathBuf};
use tauri::AppHandle;
use tauri_plugin_dialog::DialogExt;

// 分类数据结构
#[derive(Debug, Clone)]
struct Category {
    id: i64,
    name: String,
    created_at: String,
}

// 片段数据结构
#[derive(Debug, Clone)]
struct Fragment {
    id: i64,
    title: String,
    content: String,
    category_id: Option<i64>,
    created_at: String,
    updated_at: String,
    fragment_type: Option<String>,
    format: Option<String>,
    tags: Option<String>, // 添加标签字段（JSON 字符串）
}



// 备份数据库
// db_path_override: 若提供则从该路径备份，否则使用配置的数据库路径
fn backup_database(app_handle: &AppHandle, db_path_override: Option<&Path>) -> Result<PathBuf, String> {
    use std::fs;
    use chrono::Local;
    
    info!("💾 [备份] 开始备份数据库...");
    
    let db_path = match db_path_override {
        Some(p) => p.to_path_buf(),
        None => {
            let db_path_str = crate::db::get_db_path();
            if db_path_str.is_empty() {
                return Err("无法获取数据库路径".to_string());
            }
            PathBuf::from(db_path_str)
        }
    };
    
    if !db_path.exists() {
        return Err("数据库文件不存在".to_string());
    }
    
    info!("📁 [备份] 数据库路径: {}", db_path.display());
    
    // 生成备份文件名（带时间戳）
    let timestamp = Local::now().format("%Y%m%d_%H%M%S").to_string();
    let backup_filename = format!("database_backup_{}.db", timestamp);
    
    // 备份到数据目录
    let data_dir = json_config::get_data_dir(app_handle);
    let backup_path = data_dir.join(&backup_filename);
    
    info!("📄 [备份] 备份文件: {}", backup_path.display());
    
    // 复制数据库文件
    fs::copy(&db_path, &backup_path)
        .map_err(|e| format!("备份数据库失败: {}", e))?;
    
    info!("✅ [备份] 数据库备份成功");
    
    Ok(backup_path)
}

/// 从指定数据库文件迁移（供「选择数据库文件」使用）
pub fn migrate_to_markdown_from_file(app_handle: &AppHandle) -> Result<MigrationResult, String> {
    let db_path = app_handle
        .dialog()
        .file()
        .set_title("选择要迁移的数据库文件")
        .add_filter("数据库", &["db"])
        .blocking_pick_file();
    
    let path = match db_path {
        Some(p) => PathBuf::from(p.as_path().unwrap()),
        None => return Err("未选择数据库文件".to_string()),
    };

    // 强制校验扩展名，避免对话框允许“所有文件”时选到非 .db
    let is_db = path
        .extension()
        .and_then(|e| e.to_str())
        .map(|e| e.eq_ignore_ascii_case("db"))
        .unwrap_or(false);
    if !is_db {
        return Err("只允许选择 .db 数据库文件".to_string());
    }
    
    if !path.exists() {
        return Err("选择的文件不存在".to_string());
    }
    
    info!("📂 [迁移] 用户选择数据库: {}", path.display());
    migrate_to_markdown_with_db_path(app_handle, Some(&path))
}

// 主迁移函数（使用配置的数据库路径）
pub fn migrate_to_markdown(app_handle: &AppHandle) -> Result<MigrationResult, String> {
    migrate_to_markdown_with_db_path(app_handle, None)
}

/// 内部迁移逻辑，支持指定数据库路径
fn migrate_to_markdown_with_db_path(
    app_handle: &AppHandle,
    db_path_override: Option<&Path>,
) -> Result<MigrationResult, String> {
    info!("🚀 [迁移] 开始迁移数据到 Markdown 文件");
    
    // 1. 获取数据目录
    let data_dir = json_config::get_data_dir(app_handle);
    info!("📁 [迁移] 数据目录: {}", data_dir.display());
    
    // 2. 备份数据库
    let db_path_for_backup: PathBuf = db_path_override
        .map(|p| p.to_path_buf())
        .unwrap_or_else(|| PathBuf::from(crate::db::get_db_path()));
    info!("💾 [迁移] 开始备份数据库...");
    let backup_path = backup_database(app_handle, Some(&db_path_for_backup))?;
    info!("✅ [迁移] 数据库备份完成: {}", backup_path.display());
    
    // 3. 确保 .snippets-code 目录存在
    info!("📂 [迁移] 创建配置目录...");
    let config_dir = ensure_config_dir(&data_dir)?;
    info!("✅ [迁移] 配置目录已创建: {}", config_dir.display());
    
    // 4. 打开数据库连接（指定路径或默认）
    let conn = match db_path_override {
        Some(p) => {
            let path_str = p.to_string_lossy();
            info!("📂 [迁移] 使用指定数据库: {}", path_str);
            Connection::open(p).map_err(|e| format!("无法打开数据库 {}: {}", path_str, e))?
        }
        None => {
            let path_str = crate::db::get_db_path();
            info!("📂 [迁移] 使用配置数据库: {}", path_str);
            DbConnectionManager::get()
                .map_err(|e| format!("数据库连接失败: {}", e))?
        }
    };
    
    // 5. 诊断：表内行数
    let (cat_count, frag_count) = {
        let cat_count: i64 = conn
            .query_row("SELECT COUNT(*) FROM categories", [], |r| r.get(0))
            .unwrap_or_else(|e| {
                warn!("⚠️ [迁移] 无法查询 categories 表: {}", e);
                0
            });
        let frag_count: i64 = conn
            .query_row("SELECT COUNT(*) FROM contents", [], |r| r.get(0))
            .unwrap_or_else(|e| {
                warn!("⚠️ [迁移] 无法查询 contents 表: {}", e);
                0
            });
        info!("📊 [迁移] 数据库诊断: categories={}, contents={}", cat_count, frag_count);
        (cat_count, frag_count)
    };
    
    if cat_count == 0 && frag_count == 0 {
        let db_path_str = db_path_override
            .map(|p| p.display().to_string())
            .unwrap_or_else(|| crate::db::get_db_path());
        return Err(format!(
            "数据库中没有可迁移的数据。\n\n\
            当前数据库: {}\n\n\
            可能原因：\n\
            1. 该数据库的 contents / categories 表为空（可能此前已执行过「完成迁移」并删除了表内数据）\n\
            2. 实际有数据的数据库在其他路径（如默认 AppData 目录）\n\
            3. 请确认：在「配置」页面的分类和片段是否来自此数据库？\n\n\
            建议：点击「选择数据库文件迁移」，手动选择包含数据的 .db 文件（如备份文件或 AppData 中的数据库）。",
            db_path_str
        ));
    }
    
    info!("📖 [迁移] 开始读取数据库...");
    let categories = read_categories_from_conn(&conn)?;
    info!("✅ [迁移] 读取到 {} 个分类", categories.len());
    
    let fragments = read_fragments_from_conn(&conn)?;
    info!("✅ [迁移] 读取到 {} 个片段", fragments.len());
    
    // 4. 创建配置对象
    info!("📝 [迁移] 初始化配置对象...");
    let mut cache = CacheConfig::default();
    
    // 5. 导出分类（创建文件夹）
    info!("📁 [迁移] 开始创建分类文件夹...");
    let mut created_folders = 0;
    for category in &categories {
        info!("📂 [迁移] 创建文件夹: {}", category.name);
        match create_category_folder(&data_dir, &category.name) {
            Ok(_) => {
                // 特殊处理"未分类"：ID 固定为 0
                let category_id = if category.name == "未分类" {
                    info!("🔧 [迁移] 修正\"未分类\"的 ID: {} -> 0", category.id);
                    0
                } else {
                    category.id
                };
                
                // 添加分类元数据到 cache
                let metadata = CategoryMetadata {
                    id: category_id,
                    created: parse_datetime_to_timestamp(&category.created_at),
                    order: None,
                    color: None,
                    icon: None,
                    is_system: category.name == "未分类",  // 根据名称判断是否为系统分类
                };
                update_category_metadata(&mut cache, &category.name, metadata);
                created_folders += 1;
                info!("✅ [迁移] 文件夹创建成功: {} (ID: {})", category.name, category_id);
            }
            Err(e) => {
                warn!("⚠️ [迁移] 创建分类文件夹失败 '{}': {}", category.name, e);
            }
        }
    }
    info!("✅ [迁移] 共创建 {} 个文件夹", created_folders);
    
    // 6. 导出片段（创建 Markdown 文件）
    info!("📄 [迁移] 开始创建 Markdown 文件...");
    let mut created_files = 0;
    let mut failed_files = Vec::new();
    let mut all_file_paths = Vec::new(); // 收集所有成功创建的文件路径
    
    for fragment in &fragments {
        info!("📝 [迁移] 处理片段: {}", fragment.title);
        match export_fragment(&data_dir, &fragment, &categories, &mut cache) {
            Ok(relative_path) => {
                created_files += 1;
                all_file_paths.push(relative_path);
                info!("✅ [迁移] 片段导出成功: {}", fragment.title);
            }
            Err(e) => {
                warn!("⚠️ [迁移] 导出片段失败 '{}': {}", fragment.title, e);
                failed_files.push(format!("{}: {}", fragment.title, e));
            }
        }
    }
    info!("✅ [迁移] 共创建 {} 个文件", created_files);
    
    // 7. 更新 workspace 配置
    info!("📝 [迁移] 更新 workspace 配置...");
    let workspace = WorkspaceConfig::default();
    
    // 8. 保存配置文件
    info!("💾 [迁移] 保存配置文件...");
    write_workspace(&config_dir, &workspace)?;
    info!("✅ [迁移] workspace.json 已保存");
    
    write_cache(&config_dir, &cache)?;
    info!("✅ [迁移] cache.json 已保存");
    
    // 8. 返回结果
    // 注意：Frontmatter 已由 export_fragment 在创建文件时直接写入，
    // 无需在此做第二遍写入（第二遍会丢失 tags/type/language 等内容元数据）。
    let result = MigrationResult {
        success: true,
        total_categories: categories.len(),
        total_fragments: fragments.len(),
        created_folders,
        created_files,
        failed_files: failed_files.clone(),
        output_path: data_dir.to_string_lossy().to_string(),
    };
    
    info!("🎉 [迁移] 迁移完成！");
    info!("📊 [迁移] 统计: {} 个分类, {} 个片段, {} 个文件夹, {} 个文件, {} 个失败", 
        result.total_categories, 
        result.total_fragments, 
        result.created_folders, 
        result.created_files,
        failed_files.len()
    );
    
    Ok(result)
}

// 从数据库连接读取所有分类
fn read_categories_from_conn(conn: &Connection) -> Result<Vec<Category>, String> {
    info!("🔍 [数据库] 开始查询分类表...");
    
    let mut stmt = conn
        .prepare("SELECT id, name, created_at FROM categories ORDER BY id")
        .map_err(|e| {
            let err_msg = format!("查询分类失败: {}", e);
            warn!("❌ [数据库] {}", err_msg);
            err_msg
        })?;
    
    info!("✅ [数据库] SQL 语句准备成功");
    
    let categories = stmt
        .query_map([], |row: &Row| {
            Ok(Category {
                id: row.get(0)?,
                name: row.get(1)?,
                created_at: row.get(2)?,
            })
        })
        .map_err(|e| {
            let err_msg = format!("读取分类失败: {}", e);
            warn!("❌ [数据库] {}", err_msg);
            err_msg
        })?
        .filter_map(|r| r.ok())
        .collect();
    
    info!("✅ [数据库] 分类数据读取完成");
    
    Ok(categories)
}

// 从数据库连接读取所有片段
fn read_fragments_from_conn(conn: &Connection) -> Result<Vec<Fragment>, String> {
    info!("🔍 [数据库] 开始查询片段表 (contents)...");
    
    // 注意：表名是 contents，不是 fragments
    // 字段：id, title, content, category_id, created_at, updated_at, type, format
    let mut stmt = conn
    .prepare(
        "SELECT id, title, content, category_id, created_at, updated_at, type, format, tags 
        FROM contents 
        ORDER BY category_id, id"
    )
    .map_err(|e| {
        let err_msg = format!("查询片段失败: {}. 提示：请确认表名为 'contents'", e);
        warn!("❌ [数据库] {}", err_msg);
        err_msg
    })?;
    
    info!("✅ [数据库] SQL 语句准备成功");
    
   let fragments = stmt
    .query_map([], |row: &Row| {
        Ok(Fragment {
            id: row.get(0)?,
            title: row.get(1)?,
            content: row.get(2)?,
            category_id: row.get(3)?,
            created_at: row.get(4)?,
            updated_at: row.get::<_, Option<String>>(5)?.unwrap_or_else(|| row.get::<_, String>(4).unwrap()),
            fragment_type: row.get(6).ok(),
            format: row.get(7).ok(),
            tags: row.get(8).ok(),  // 添加这一行
        })
    })
    .map_err(|e| {
        let err_msg = format!("读取片段失败: {}", e);
        warn!("❌ [数据库] {}", err_msg);
        err_msg
    })?
    .filter_map(|r| r.ok())
    .collect();
    
    info!("✅ [数据库] 片段数据读取完成");
    
    Ok(fragments)
}

// 导出单个片段为 Markdown 文件
// 返回相对路径
fn export_fragment(
    data_dir: &PathBuf,
    fragment: &Fragment,
    categories: &[Category],
    cache: &mut CacheConfig,
) -> Result<String, String> {
    info!("📝 [导出] 开始导出片段: {} (ID: {})", fragment.title, fragment.id);
    
    // 1. 确定文件夹路径
    let folder_path = if let Some(cat_id) = fragment.category_id {
        // 有分类：放在对应文件夹
        info!("📂 [导出] 片段属于分类 ID: {}", cat_id);
        let category = categories
            .iter()
            .find(|c| c.id == cat_id)
            .ok_or_else(|| {
                let err_msg = format!("找不到分类 ID: {}", cat_id);
                warn!("⚠️ [导出] {}", err_msg);
                err_msg
            })?;
        info!("✅ [导出] 找到分类: {}", category.name);
        data_dir.join(&category.name)
    } else {
        // 无分类：放在"未分类"文件夹
        info!("📂 [导出] 片段无分类，放在\"未分类\"文件夹");
        data_dir.join("未分类")
    };
    
    info!("📁 [导出] 目标文件夹: {}", folder_path.display());
    
    // 2. 解析标签
    let tags: Vec<String> = if let Some(tags_str) = &fragment.tags {
        // 跳过空字符串
        if tags_str.trim().is_empty() {
            info!("📋 [导出] 标签字段为空");
            Vec::new()
        } else {
            // 尝试解析 JSON 数组格式：["tag1", "tag2"]
            if let Ok(parsed_tags) = serde_json::from_str::<Vec<String>>(tags_str) {
                info!("✅ [导出] 解析到 {} 个标签（JSON 数组格式）", parsed_tags.len());
                parsed_tags
            } 
            // 如果不是 JSON 数组，尝试按逗号分隔的字符串：tag1,tag2
            else if tags_str.contains(',') {
                let parsed_tags: Vec<String> = tags_str
                    .split(',')
                    .map(|s| s.trim().to_string())
                    .filter(|s| !s.is_empty())
                    .collect();
                info!("✅ [导出] 解析到 {} 个标签（逗号分隔格式）", parsed_tags.len());
                parsed_tags
            }
            // 否则，当作单个标签
            else {
                let tag = tags_str.trim().to_string();
                info!("✅ [导出] 解析到 1 个标签（单个字符串）: {}", tag);
                vec![tag]
            }
        }
    } else {
        Vec::new()
    };
    
    // 3. 转换正文内容格式
    let markdown_body = convert_to_markdown(&fragment.content, &fragment.format)?;
    info!("✅ [导出] 内容格式转换完成 (格式: {:?})", fragment.format);

    // 4. 构建 Frontmatter 并写入文件（Frontmatter 是元数据的唯一存储位置）
    let file_type = match fragment.fragment_type.as_deref() {
        Some("code") => "code",
        _ => "note",
    }.to_string();
    let created_str = chrono::DateTime::from_timestamp_millis(parse_datetime_to_timestamp(&fragment.created_at))
        .map(|dt| dt.to_rfc3339())
        .unwrap_or_else(|| chrono::Utc::now().to_rfc3339());
    let modified_str = chrono::DateTime::from_timestamp_millis(parse_datetime_to_timestamp(&fragment.updated_at))
        .map(|dt| dt.to_rfc3339())
        .unwrap_or_else(|| chrono::Utc::now().to_rfc3339());
    let fm = FrontMatter {
        id: fragment.id.to_string(),
        title: fragment.title.clone(),
        tags: tags.clone(),
        created: created_str,
        modified: modified_str,
        fragment_type: file_type,
        language: fragment.format.clone(),
        favorite: false,
    };
    let frontmatter_block = format_frontmatter_block(&fm)?;
    let full_content = if markdown_body.trim().is_empty() {
        frontmatter_block.trim_end().to_string()
    } else {
        format!("{}\n\n{}", frontmatter_block.trim_end(), markdown_body)
    };

    // 5. 创建 Markdown 文件（内含 Frontmatter）
    info!("📄 [导出] 创建 Markdown 文件（含 Frontmatter）...");
    let file_path = create_markdown_file(&folder_path, &fragment.title, &full_content)?;
    info!("✅ [导出] 文件已创建: {}", file_path.display());
    
    // 6. 获取相对路径
    let relative_path = get_relative_path(data_dir, &file_path)?;
    info!("📍 [导出] 相对路径: {}", relative_path);
    
    // 7. 添加文件索引到 cache.json（仅存储文件系统索引字段）
    let metadata = FileMetadata {
        id: fragment.id.to_string(),
        created: parse_datetime_to_timestamp(&fragment.created_at),
        modified: parse_datetime_to_timestamp(&fragment.updated_at),
        size: Some(full_content.len() as u64),
        hash: None,
    };
    
    update_file_metadata(cache, &relative_path, metadata);
    info!("✅ [导出] 文件索引已添加到 cache.json");
    
    Ok(relative_path)
}


// 转换内容为 Markdown 格式
fn convert_to_markdown(content: &str, format: &Option<String>) -> Result<String, String> {
    match format.as_deref() {
        Some("html") => {
            // HTML 格式需要转换为 Markdown
            info!("🔄 [转换] 检测到 HTML 格式，开始转换...");
            html_to_markdown(content)
        }
        Some("markdown") => {
            // Markdown 格式，直接使用
            info!("✅ [转换] Markdown 格式，无需转换");
            Ok(content.to_string())
        }
        Some("plain") | None => {
            // 纯文本格式，直接使用
            info!("✅ [转换] 纯文本格式，无需转换");
            Ok(content.to_string())
        }
        Some(other) => {
            warn!("⚠️ [转换] 未知格式: {}，按纯文本处理", other);
            Ok(content.to_string())
        }
    }
}

// 将 HTML 转换为 Markdown
pub fn html_to_markdown(html: &str) -> Result<String, String> {
    use regex::Regex;
    
    let mut markdown = html.to_string();
    
    // 移除 HTML 标签并转换为 Markdown
    // 使用 (?s) 标志让 . 可以匹配换行符
    
    // 标题转换
    let h1_re = Regex::new(r"(?s)<h1[^>]*>(.*?)</h1>").unwrap();
    markdown = h1_re.replace_all(&markdown, "# $1").to_string();
    
    let h2_re = Regex::new(r"(?s)<h2[^>]*>(.*?)</h2>").unwrap();
    markdown = h2_re.replace_all(&markdown, "## $1").to_string();
    
    let h3_re = Regex::new(r"(?s)<h3[^>]*>(.*?)</h3>").unwrap();
    markdown = h3_re.replace_all(&markdown, "### $1").to_string();
    
    let h4_re = Regex::new(r"(?s)<h4[^>]*>(.*?)</h4>").unwrap();
    markdown = h4_re.replace_all(&markdown, "#### $1").to_string();
    
    let h5_re = Regex::new(r"(?s)<h5[^>]*>(.*?)</h5>").unwrap();
    markdown = h5_re.replace_all(&markdown, "##### $1").to_string();
    
    let h6_re = Regex::new(r"(?s)<h6[^>]*>(.*?)</h6>").unwrap();
    markdown = h6_re.replace_all(&markdown, "###### $1").to_string();
    
    // 段落转换
    let p_re = Regex::new(r"(?s)<p[^>]*>(.*?)</p>").unwrap();
    markdown = p_re.replace_all(&markdown, "$1\n\n").to_string();
    
    // 加粗转换
    let strong_re = Regex::new(r"(?s)<strong[^>]*>(.*?)</strong>").unwrap();
    markdown = strong_re.replace_all(&markdown, "**$1**").to_string();
    
    let b_re = Regex::new(r"(?s)<b[^>]*>(.*?)</b>").unwrap();
    markdown = b_re.replace_all(&markdown, "**$1**").to_string();
    
    // 斜体转换
    let em_re = Regex::new(r"(?s)<em[^>]*>(.*?)</em>").unwrap();
    markdown = em_re.replace_all(&markdown, "*$1*").to_string();
    
    let i_re = Regex::new(r"(?s)<i[^>]*>(.*?)</i>").unwrap();
    markdown = i_re.replace_all(&markdown, "*$1*").to_string();
    
    // 代码转换
    let code_re = Regex::new(r"(?s)<code[^>]*>(.*?)</code>").unwrap();
    markdown = code_re.replace_all(&markdown, "`$1`").to_string();
    
    // 代码块转换 - 使用 (?s) 开启 dotall 模式匹配换行符
    let pre_re = Regex::new(r#"(?s)<pre[^>]*><code[^>]*class="language-([^"]*)"[^>]*>(.*?)</code></pre>"#).unwrap();
    markdown = pre_re.replace_all(&markdown, "```$1\n$2\n```").to_string();
    
    let pre_simple_re = Regex::new(r#"(?s)<pre[^>]*><code[^>]*>(.*?)</code></pre>"#).unwrap();
    markdown = pre_simple_re.replace_all(&markdown, "```\n$1\n```").to_string();
    
    // 链接转换
    let a_re = Regex::new(r#"(?s)<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>"#).unwrap();
    markdown = a_re.replace_all(&markdown, "[$2]($1)").to_string();
    
    // 无序列表转换
    let ul_re = Regex::new(r"(?s)<ul[^>]*>(.*?)</ul>").unwrap();
    let li_re = Regex::new(r"(?s)<li[^>]*>(.*?)</li>").unwrap();
    
    // 先处理列表项
    markdown = li_re.replace_all(&markdown, "- $1\n").to_string();
    // 再移除 ul 标签
    markdown = ul_re.replace_all(&markdown, "$1\n").to_string();
    
    // 有序列表转换
    let ol_re = Regex::new(r"(?s)<ol[^>]*>(.*?)</ol>").unwrap();
    markdown = ol_re.replace_all(&markdown, "$1\n").to_string();
    
    // 引用转换
    let blockquote_re = Regex::new(r"(?s)<blockquote[^>]*>(.*?)</blockquote>").unwrap();
    markdown = blockquote_re.replace_all(&markdown, "> $1\n").to_string();
    
    // 水平线转换
    let hr_re = Regex::new(r"<hr[^>]*>").unwrap();
    markdown = hr_re.replace_all(&markdown, "\n---\n").to_string();
    
    // 换行转换
    let br_re = Regex::new(r"(?s)<br[^>]*>").unwrap();
    markdown = br_re.replace_all(&markdown, "\n").to_string();
    
    // 移除其他 HTML 标签
    let tag_re = Regex::new(r"<[^>]+>").unwrap();
    markdown = tag_re.replace_all(&markdown, "").to_string();
    
    // 清理多余的空行
    let multi_newline_re = Regex::new(r"\n{3,}").unwrap();
    markdown = multi_newline_re.replace_all(&markdown, "\n\n").to_string();
    
    // 清理首尾空白
    markdown = markdown.trim().to_string();
    
    info!("✅ [转换] HTML 转 Markdown 完成");
    
    Ok(markdown)
}

// 解析日期时间字符串为 Unix 时间戳（毫秒）
fn parse_datetime_to_timestamp(datetime_str: &str) -> i64 {
    use chrono::{DateTime, NaiveDateTime, Utc};
    
    // 尝试解析 ISO 8601 格式：2026-02-22T12:05:33Z
    if let Ok(dt) = DateTime::parse_from_rfc3339(datetime_str) {
        info!("✅ [时间解析] ISO 8601 格式: {} -> {}", datetime_str, dt.timestamp_millis());
        return dt.timestamp_millis();
    }
    
    // 尝试解析 SQLite datetime 格式：2026-02-22 12:05:33
    if let Ok(naive_dt) = NaiveDateTime::parse_from_str(datetime_str, "%Y-%m-%d %H:%M:%S") {
        let dt = DateTime::<Utc>::from_naive_utc_and_offset(naive_dt, Utc);
        info!("✅ [时间解析] SQLite 格式: {} -> {}", datetime_str, dt.timestamp_millis());
        return dt.timestamp_millis();
    }
    
    // 尝试解析带毫秒的 SQLite 格式：2026-02-22 12:05:33.123
    if let Ok(naive_dt) = NaiveDateTime::parse_from_str(datetime_str, "%Y-%m-%d %H:%M:%S%.f") {
        let dt = DateTime::<Utc>::from_naive_utc_and_offset(naive_dt, Utc);
        info!("✅ [时间解析] SQLite 格式（带毫秒）: {} -> {}", datetime_str, dt.timestamp_millis());
        return dt.timestamp_millis();
    }
    
    // 如果所有格式都解析失败，返回当前时间并记录警告
    warn!("⚠️ [时间解析] 无法解析时间格式: '{}', 使用当前时间", datetime_str);
    Utc::now().timestamp_millis()
}

// 获取迁移进度（用于前端显示）
// 预留用于未来实现实时进度更新
#[allow(dead_code)]
pub fn get_migration_progress() -> MigrationProgress {
    // 这里可以使用全局状态来跟踪进度
    // 暂时返回默认值
    MigrationProgress {
        step: "准备中...".to_string(),
        current: 0,
        total: 0,
        percentage: 0.0,
    }
}


