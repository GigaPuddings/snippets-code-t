// Markdown 文件操作的 Tauri 命令

use crate::json_config::get_workspace_root;
use crate::markdown::file_system_manager::FileSystemManager;
use crate::markdown::IndexManager;  // 使用模块级别的 IndexManager（已重命名为 OptimizedIndexManager）
use crate::markdown::metadata::{FrontMatter, FileMetadata, try_parse_front_matter};
use crate::markdown::watcher::FileWatcher;
use crate::markdown::CacheManager;
use crate::markdown::file_ops::{get_relative_path, FileNameGenerator};
use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, RwLock};
use tauri::{command, AppHandle, State, Manager};
use log::{debug, info, warn};

// Markdown 文件数据结构（与前端 MarkdownFile 接口匹配）
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MarkdownFile {
    pub id: String,
    pub title: String,
    pub content: String,
    #[serde(rename = "categoryId")]
    pub category_id: i64,        // 分类 ID
    #[serde(rename = "categoryName")]
    pub category_name: String,   // 分类名称
    pub tags: Vec<String>,
    pub created: String,
    pub modified: String,
    #[serde(rename = "type")]
    pub file_type: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub language: Option<String>,
    pub favorite: bool,
    #[serde(rename = "filePath")]
    pub file_path: String,
}

// 分类数据结构（与前端 Category 接口匹配）
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Category {
    pub id: i64,
    pub name: String,
    #[serde(rename = "createdAt")]
    pub created_at: String,
    #[serde(rename = "isSystem")]
    pub is_system: bool,
}

impl MarkdownFile {
    // 从 FrontMatter 和内容创建 MarkdownFile（已废弃，保留用于兼容）
    fn from_front_matter(metadata: FrontMatter, content: String, file_path: PathBuf) -> Self {
        // 类型字段：直接使用 FrontMatter 中的值（'code' 或 'note'）
        let file_type = metadata.fragment_type;
        
        Self {
            id: file_path.to_string_lossy().to_string(), // 使用文件路径作为 ID
            title: metadata.title,
            content,
            category_id: 0,  // 默认为未分类
            category_name: "未分类".to_string(),
            tags: metadata.tags,
            created: metadata.created,
            modified: metadata.modified,
            file_type,
            language: metadata.language,
            favorite: metadata.favorite,
            file_path: file_path.to_string_lossy().to_string(),
        }
    }
}

// 获取文件系统管理器
fn get_fs_manager(app_handle: &AppHandle) -> Result<FileSystemManager, String> {
    let workspace_root = get_workspace_root(app_handle)?
        .ok_or("工作区未配置，请先设置工作区根目录")?;
    Ok(FileSystemManager::new(workspace_root))
}



// ============= 文件操作命令 =============

// 获取所有分类（文件夹）
#[command]
pub fn get_markdown_categories(
    app_handle: AppHandle,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<Vec<Category>, String> {
    debug!("📁 [获取分类] ========== 开始 ==========");

    let fs_manager = get_fs_manager(&app_handle)?;
    let folder_names = fs_manager.list_categories()?;
    debug!("📁 [获取分类] 找到 {} 个文件夹", folder_names.len());

    // 获取 cache 管理器
    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    
    // 确保"未分类"存在
    cache.ensure_default_categories();
    
    // 为所有文件夹分配 ID
    let mut categories = Vec::new();
    
    // 首先添加"未分类"（系统分类）
    if let Some(metadata) = cache.get_category_metadata("未分类") {
        categories.push(Category {
            id: metadata.id,
            name: "未分类".to_string(),
            created_at: chrono::DateTime::from_timestamp_millis(metadata.created)
                .map(|dt| dt.to_rfc3339())
                .unwrap_or_default(),
            is_system: metadata.is_system,
        });
    }
    
    // 然后添加实际的文件夹分类（跳过系统文件夹）
    for folder_name in folder_names {
        // 跳过系统文件夹：
        // - "未分类"：已作为系统分类添加
        // - "assets"：用于存储图片等资源文件
        if folder_name == "未分类" || folder_name == "assets" {
            continue;
        }
        
        let _category_id = cache.get_or_create_category_id(&folder_name);
        
        if let Some(metadata) = cache.get_category_metadata(&folder_name) {
            categories.push(Category {
                id: metadata.id,
                name: folder_name.clone(),
                created_at: chrono::DateTime::from_timestamp_millis(metadata.created)
                    .map(|dt| dt.to_rfc3339())
                    .unwrap_or_default(),
                is_system: metadata.is_system,
            });
        }
    }
    
    // 保存 cache（如果有新分类被创建）
    cache.save()?;

    Ok(categories)
}

// 创建新的 Markdown 文件
#[command]
pub async fn create_markdown_file(
    app_handle: AppHandle,
    category: Option<String>,
    metadata: serde_json::Value,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<String, String> {
    // 解析元数据
    let title = metadata.get("title")
        .and_then(|v| v.as_str())
        .ok_or("缺少 title 字段")?
        .to_string();

    let content = metadata.get("content")
        .and_then(|v| v.as_str())
        .unwrap_or("")
        .to_string();

    let tags: Vec<String> = metadata.get("tags")
        .and_then(|v| v.as_array())
        .map(|arr| {
            arr.iter()
                .filter_map(|v| v.as_str().map(|s| s.to_string()))
                .collect()
        })
        .unwrap_or_default();

    let file_type = metadata.get("type")
        .and_then(|v| v.as_str())
        .unwrap_or("note")
        .to_string();

    let language = metadata.get("language")
        .and_then(|v| v.as_str())
        .map(|s| s.to_string());

    let favorite = metadata.get("favorite")
        .and_then(|v| v.as_bool())
        .unwrap_or(false);

    // 生成 ID 和时间戳
    let id = uuid::Uuid::new_v4().to_string();
    let now = chrono::Utc::now();
    let now_timestamp = now.timestamp_millis();

    // 创建 FrontMatter（用于兼容，但不会写入文件）
    let front_matter = FrontMatter {
        id: id.clone(),
        title: title.clone(),
        tags: tags.clone(),
        created: now.to_rfc3339(),
        modified: now.to_rfc3339(),
        fragment_type: file_type.clone(),
        language: language.clone(),
        favorite,
    };

    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();

    // 创建文件（只包含纯内容，不含 Front Matter）
    let file_path = fs_manager.create_markdown_file(
        category.as_deref(),
        &title,
        &content,
        &front_matter,
    )?;

    // 获取相对路径
    let relative_path = get_relative_path(&workspace_root, &file_path)?;

    // 添加元数据到 cache.json
    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

    cache.set_file_metadata(
        relative_path.clone(),
        FileMetadata {
            id: id.clone(),
            created: now_timestamp,
            modified: now_timestamp,
            size: Some(content.len() as u64),
            hash: None,
        },
    );

    cache.save()?;

    // 释放写锁
    drop(cache);

    // 更新索引
    if let Ok(manager_lock) = index_manager.read() {
        if let Some(ref manager) = *manager_lock {
            let cache = cache_manager.read()
                .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
            let _ = manager.update_entry(&file_path, &workspace_root, &*cache);
        }
    }

    let result = file_path.to_string_lossy().to_string();
    debug!("✅ [创建文件] 完成: {}", result);
    Ok(result)
}

// 读取 Markdown 文件
// 元数据优先从文件 Front Matter 读取，无 frontmatter 时回退到 cache.json
#[command]
pub fn read_markdown_file(
    app_handle: AppHandle,
    file_path: String,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<MarkdownFile, String> {
    
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    
    let path = PathBuf::from(&file_path);
    
    // 读取文件完整内容
    let raw_content = fs_manager.read_markdown_file_content(&path)?;
    
    // 获取相对路径
    let relative_path = get_relative_path(&workspace_root, &path)?;
    
    // 尝试解析 Front Matter：有则优先使用；无则生成默认 Frontmatter 并写回文件（保证“默认值”持久化）
    let (content, title, tags, created, modified, file_type, language, favorite) = {
        let (frontmatter_opt, body) = try_parse_front_matter(&raw_content);
        if let Some(fm) = frontmatter_opt {
            (
                body,
                fm.title,
                fm.tags,
                fm.created,
                fm.modified,
                fm.fragment_type,
                fm.language,
                fm.favorite,
            )
        } else {
            // 无 Frontmatter：使用文件名作为标题，其余使用默认值，并写回 Frontmatter
            let title = path
                .file_stem()
                .and_then(|s| s.to_str())
                .unwrap_or("Untitled")
                .to_string();

            let now_ts = chrono::Utc::now().timestamp_millis();

            // 读取/写入 cache 中的文件索引元数据，用于稳定的 id/created/modified
            let (id, created_ts, modified_ts) = {
                let mut cache = cache_manager
                    .write()
                    .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

                if let Some(meta) = cache.get_file_metadata(&relative_path).cloned() {
                    (meta.id, meta.created, meta.modified)
                } else {
                    let new_id = uuid::Uuid::new_v4().to_string();
                    cache.set_file_metadata(
                        relative_path.clone(),
                        FileMetadata {
                            id: new_id.clone(),
                            created: now_ts,
                            modified: now_ts,
                            size: Some(raw_content.len() as u64),
                            hash: None,
                        },
                    );
                    cache.save()?;
                    (new_id, now_ts, now_ts)
                }
            };

            let created_str = chrono::DateTime::from_timestamp_millis(created_ts)
                .map(|dt| dt.to_rfc3339())
                .unwrap_or_else(|| chrono::Utc::now().to_rfc3339());
            let modified_str = chrono::DateTime::from_timestamp_millis(modified_ts)
                .map(|dt| dt.to_rfc3339())
                .unwrap_or_else(|| chrono::Utc::now().to_rfc3339());

            let fm = FrontMatter {
                id,
                title: title.clone(),
                tags: Vec::new(),
                created: created_str.clone(),
                modified: modified_str.clone(),
                fragment_type: "note".to_string(),
                language: None,
                favorite: false,
            };

            // 写回默认 Frontmatter（不改变正文）
            if let Err(e) = fs_manager.update_file_frontmatter(&path, &fm) {
                warn!("⚠️ [读取文件] 写入默认 Frontmatter 失败: {}", e);
            }

            (
                raw_content,
                title,
                vec![],
                created_str,
                modified_str,
                "note".to_string(),
                None,
                false,
            )
        }
    };
    
    // 分类信息仍需从 cache（cache 维护 categories 映射）
    let cache = cache_manager.read()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    let category_name = cache.extract_category_from_path(&relative_path);
    let category_id = cache.get_category_id(&category_name).unwrap_or(0);
    
    Ok(MarkdownFile {
        id: file_path.clone(),
        title,
        content,
        category_id,
        category_name,
        tags,
        created,
        modified,
        file_type,
        language,
        favorite,
        file_path: file_path.clone(),
    })
}

// 更新 Markdown 文件
#[command]
pub async fn update_markdown_file(
    app_handle: AppHandle,
    file_path: String,
    content: Option<String>,
    metadata: Option<serde_json::Value>,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    watcher: State<'_, Arc<Mutex<Option<FileWatcher>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<Option<String>, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    let mut path = PathBuf::from(&file_path);

    // 忽略下一次文件变化（避免触发文件监听器）
    if let Ok(watcher_lock) = watcher.lock() {
        if let Some(ref w) = *watcher_lock {
            w.ignore_next_change(path.clone());
        }
    }

    // 获取相对路径
    let mut relative_path = get_relative_path(&workspace_root, &path)?;

    // 检查是否需要重命名文件（标题改变）
    let mut new_path: Option<PathBuf> = None;
    let mut title_changed = false;

    if let Some(ref meta) = metadata {
        if let Some(new_title) = meta.get("title").and_then(|v| v.as_str()) {
            // 从当前文件名提取标题
            let current_title = path.file_stem()
                .and_then(|s| s.to_str())
                .unwrap_or("");

            // 如果标题改变了，需要重命名文件
            if new_title != current_title {
                title_changed = true;
                debug!("📝 [更新文件] 标题改变: {} -> {}", current_title, new_title);

                // 生成新文件名
                let parent_dir = path.parent().ok_or("无法获取父目录")?;
                let safe_filename = FileNameGenerator::generate_filename(new_title);
                let mut target_path = parent_dir.join(&safe_filename);

                // 处理文件名冲突
                if target_path.exists() && target_path != path {
                    let resolved_name = FileNameGenerator::resolve_conflict(parent_dir, &safe_filename);
                    target_path = parent_dir.join(&resolved_name);
                }

                // 重命名文件
                std::fs::rename(&path, &target_path)
                    .map_err(|e| format!("重命名文件失败: {}", e))?;

                // 忽略新文件的变化
                if let Ok(watcher_lock) = watcher.lock() {
                    if let Some(ref w) = *watcher_lock {
                        w.ignore_next_change(target_path.clone());
                    }
                }

                new_path = Some(target_path.clone());
                path = target_path;
                relative_path = get_relative_path(&workspace_root, &path)?;
            }
        }
    }

    // 如果内容没有变化且元数据也没有变化，提前返回
    let needs_content_update = content.is_some();
    let needs_metadata_update = metadata.is_some();

    if !needs_content_update && !needs_metadata_update && !title_changed {
        debug!("📝 [更新文件] 内容无变化，跳过");
        return Ok(None);
    }

    // 构建 FrontMatter（当有 metadata 时，用于写入文件的 Front Matter）
    let frontmatter_opt: Option<FrontMatter> = if let Some(ref meta) = metadata {
        let cache = cache_manager.read()
            .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
        let file_meta = cache.get_file_metadata(&relative_path).cloned();
        let (id, created_ts) = file_meta
            .as_ref()
            .map(|m| (m.id.clone(), m.created))
            .unwrap_or_else(|| (uuid::Uuid::new_v4().to_string(), chrono::Utc::now().timestamp_millis()));
        let title = meta.get("title")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string())
            .unwrap_or_else(|| path.file_stem()
                .and_then(|s| s.to_str())
                .unwrap_or("Untitled")
                .to_string());
        let created = chrono::DateTime::from_timestamp_millis(created_ts)
            .map(|dt| dt.to_rfc3339())
            .unwrap_or_else(|| chrono::Utc::now().to_rfc3339());
        Some(FrontMatter {
            id,
            title,
            tags: meta.get("tags").and_then(|v| v.as_array())
                .map(|arr| arr.iter().filter_map(|v| v.as_str().map(|s| s.to_string())).collect())
                .unwrap_or_default(),
            created,
            modified: chrono::Utc::now().to_rfc3339(),
            fragment_type: meta.get("type").and_then(|v| v.as_str()).unwrap_or("note").to_string(),
            language: meta.get("language").and_then(|v| v.as_str()).map(|s| s.to_string()),
            favorite: meta.get("favorite").and_then(|v| v.as_bool()).unwrap_or(false),
        })
    } else {
        None
    };

    // 更新文件内容（含 Front Matter 当有 metadata 时）
    fs_manager.update_markdown_file(
        &path,
        content.as_deref(),
        frontmatter_opt.as_ref(),
    )?;

    // 更新元数据到 cache.json
    if needs_metadata_update {
        let mut cache = cache_manager.write()
            .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

        // 如果文件被重命名，需要先移除旧的元数据
        if new_path.is_some() {
            let old_relative_path = get_relative_path(&workspace_root, &PathBuf::from(&file_path))?;
            if let Some(old_metadata) = cache.get_file_metadata(&old_relative_path).cloned() {
                cache.remove_file_metadata(&old_relative_path);
                cache.set_file_metadata(relative_path.clone(), old_metadata);
            }
        }

        cache.update_file_metadata(&relative_path, |m| {
            m.modified = chrono::Utc::now().timestamp_millis();
            if let Some(new_content) = &content {
                m.size = Some(new_content.len() as u64);
            }
        })?;

        cache.save()?;
    }

    // 更新索引
    if let Ok(manager_lock) = index_manager.read() {
        if let Some(ref manager) = *manager_lock {
            let cache = cache_manager.read()
                .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

            // 如果文件被重命名，先移除旧索引
            if new_path.is_some() {
                let _ = manager.remove_entry(&PathBuf::from(&file_path));
            }

            let _ = manager.update_entry(&path, &workspace_root, &*cache);
        }
    }

    // 如果文件被重命名，返回新路径
    if let Some(new_path) = new_path {
        debug!("✅ [更新文件] 完成（已重命名）: {}", path.display());
        Ok(Some(new_path.to_string_lossy().to_string()))
    } else {
        debug!("✅ [更新文件] 完成: {}", path.display());
        Ok(None)
    }
}

// 删除 Markdown 文件
#[command]
pub async fn delete_markdown_file(
    app_handle: AppHandle,
    file_path: String,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<(), String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    let path = PathBuf::from(&file_path);
    
    // 获取相对路径（在删除文件前）
    let relative_path = get_relative_path(&workspace_root, &path)?;
    debug!("🗑️ [删除文件] 相对路径: {}", relative_path);
    
    // 删除文件
    fs_manager.delete_markdown_file(&path)?;
    
    // 从 cache.json 中移除元数据
    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    
    if cache.get_file_metadata(&relative_path).is_some() {
        cache.remove_file_metadata(&relative_path);
        cache.save()?;
        debug!("🗑️ [删除文件] 已从 cache.json 移除元数据: {}", relative_path);
    } else {
        warn!("⚠️ [删除文件] cache.json 中未找到文件元数据: {}", relative_path);
    }
    
    // 释放 cache 锁
    drop(cache);
    
    // 从索引中移除
    if let Ok(manager_lock) = index_manager.read() {
        if let Some(ref manager) = *manager_lock {
            let _ = manager.remove_entry(&path);
            debug!("🗑️ [删除文件] 已从搜索索引移除");
        }
    }
    
    debug!("✅ 删除文件: {}", path.display());
    Ok(())
}

// ============= 分类操作命令 =============

// 创建分类文件夹
#[command]
pub fn create_category_folder(
    app_handle: AppHandle,
    name: String,
) -> Result<String, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let folder_path = fs_manager.create_category_folder(&name)?;
    
    info!("✅ 创建分类: {}", name);
    Ok(folder_path.to_string_lossy().to_string())
}

// 删除分类文件夹
#[command]
pub fn delete_category_folder(
    app_handle: AppHandle,
    name: String,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<(), String> {
    let workspace_root = get_workspace_root(&app_handle)?
        .ok_or("工作区未配置")?;
    
    let folder_path = workspace_root.join(&name);
    
    if !folder_path.exists() {
        return Err(format!("分类不存在: {}", name));
    }
    
    if !folder_path.is_dir() {
        return Err(format!("路径不是文件夹: {}", name));
    }
    
    // 删除文件夹及其内容
    std::fs::remove_dir_all(&folder_path)
        .map_err(|e| format!("删除分类失败: {}", e))?;
    
    info!("✅ 删除分类: {}", name);
    
    // 清理 cache.json 中该分类下的所有文件
    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    
    let prefix = format!("{}/", name);
    let files_to_remove: Vec<String> = cache.get_all_files()
        .keys()
        .filter(|path| path.starts_with(&prefix))
        .cloned()
        .collect();
    
    for file_path in &files_to_remove {
        cache.remove_file_metadata(file_path);
        info!("🗑️ 清理已删除分类的文件元数据: {}", file_path);
    }
    
    // 删除分类元数据
    cache.remove_category_metadata(&name);
    
    if !files_to_remove.is_empty() {
        cache.save()?;
        info!("✅ 已清理 {} 个文件的元数据", files_to_remove.len());
    }
    
    Ok(())
}

// 重命名分类文件夹
#[command]
pub fn rename_category_folder(
    app_handle: AppHandle,
    old_name: String,
    new_name: String,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<(), String> {
    let workspace_root = get_workspace_root(&app_handle)?
        .ok_or("工作区未配置")?;
    
    let old_path = workspace_root.join(&old_name);
    let new_path = workspace_root.join(&new_name);
    
    if !old_path.exists() {
        return Err(format!("分类不存在: {}", old_name));
    }
    
    if new_path.exists() {
        return Err(format!("目标分类已存在: {}", new_name));
    }
    
    // 重命名文件夹
    std::fs::rename(&old_path, &new_path)
        .map_err(|e| format!("重命名分类失败: {}", e))?;
    
    info!("✅ 重命名分类: {} -> {}", old_name, new_name);
    
    // 更新缓存中的分类元数据
    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    
    // 获取旧分类的元数据
    if let Some(old_metadata) = cache.get_category_metadata(&old_name) {
        let metadata = old_metadata.clone();
        let category_id = metadata.id; // 保存ID用于日志
        
        // 删除旧分类
        cache.remove_category_metadata(&old_name);
        // 添加新分类（保持相同的ID）
        cache.set_category_metadata(new_name.clone(), metadata);
        
        info!("✅ 更新缓存: {} -> {} (ID: {})", old_name, new_name, category_id);
    }
    
    // 更新该分类下所有文件的路径
    let old_prefix = format!("{}/", old_name);
    let new_prefix = format!("{}/", new_name);
    
    // 获取所有需要更新的文件路径
    let files_to_update: Vec<String> = cache.get_all_files()
        .keys()
        .filter(|path| path.starts_with(&old_prefix))
        .cloned()
        .collect();
    
    info!("📝 [重命名分类] 需要更新 {} 个文件的路径", files_to_update.len());
    
    // 更新每个文件的路径
    for old_file_path in files_to_update {
        if let Some(file_metadata) = cache.get_file_metadata(&old_file_path) {
            let updated_metadata = file_metadata.clone();
            
            // 更新文件路径
            let new_file_path = old_file_path.replace(&old_prefix, &new_prefix);
            
            // 删除旧路径的元数据
            cache.remove_file_metadata(&old_file_path);
            
            // 添加新路径的元数据
            cache.set_file_metadata(new_file_path.clone(), updated_metadata);
            
            info!("  ✅ 更新文件路径: {} -> {}", old_file_path, new_file_path);
        }
    }
    
    // 保存缓存
    cache.save()?;
    
    Ok(())
}

// 获取分类下的文件列表
#[command]
pub fn get_files_by_category(
    app_handle: AppHandle,
    category: Option<i64>,  // 改为接受分类 ID
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<Vec<MarkdownFile>, String> {
    
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    
    // 获取 cache 以查找分类名称
    let cache = cache_manager.read()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    
    // 根据分类 ID 获取分类名称
    let category_name = if let Some(cat_id) = category {
        // for (name, metadata) in cache.get_all_categories() {
        //     info!("   - {} (ID: {})", name, metadata.id);
        // }
        
        // 从 cache 中查找分类名称
        let mut found_name: Option<String> = None;
        for (name, metadata) in cache.get_all_categories() {
            if metadata.id == cat_id {
                found_name = Some(name.clone());
                break;
            }
        }
        
        if found_name.is_none() {
            warn!("⚠️ [获取文件列表] 未找到 ID 为 {} 的分类", cat_id);
        }
        
        found_name
    } else {
        None
    };
    
    // 如果 category_name 为 None，列出根目录的文件（未分类的文件）
    // 如果 category_name 为 Some(name)，列出该分类文件夹下的文件
    let file_paths = fs_manager.list_markdown_files(category_name.as_deref())?;
    
    
    let mut files = Vec::new();
    for path in file_paths {
        
        // 读取文件内容
        match fs_manager.read_markdown_file_content(&path) {
            Ok(raw_content) => {
                // 获取相对路径
                match get_relative_path(&workspace_root, &path) {
                    Ok(relative_path) => {
                        // 优先从 Front Matter 读取元数据（与 read_markdown_file 行为保持一致）
                        let (frontmatter_opt, body) = try_parse_front_matter(&raw_content);
                        
                        // 从 cache 提取分类信息（frontmatter 不存储分类信息）
                        let category_name = cache.extract_category_from_path(&relative_path);
                        let category_id = cache.get_category_id(&category_name).unwrap_or(0);
                        
                        if let Some(fm) = frontmatter_opt {
                            // 所有内容元数据来自 Frontmatter（唯一数据源）
                            files.push(MarkdownFile {
                                id: path.to_string_lossy().to_string(),
                                title: fm.title,
                                content: body,
                                category_id,
                                category_name,
                                tags: fm.tags,
                                created: fm.created,
                                modified: fm.modified,
                                file_type: fm.fragment_type,
                                language: fm.language,
                                favorite: fm.favorite,
                                file_path: path.to_string_lossy().to_string(),
                            });
                        } else {
                            // 无 Frontmatter 的文件：使用文件名作为标题，其余使用默认值
                            // 这是外部系统创建文件或 Git 拉取的正常情况，使用 debug 级别
                            // cache.json 不再存储内容元数据，无法回退
                            let title = path
                                .file_stem()
                                .and_then(|s| s.to_str())
                                .unwrap_or("Untitled")
                                .to_string();
                            let now = chrono::Utc::now().to_rfc3339();
                            files.push(MarkdownFile {
                                id: path.to_string_lossy().to_string(),
                                title,
                                content: body,
                                category_id,
                                category_name,
                                tags: vec![],
                                created: now.clone(),
                                modified: now,
                                file_type: "note".to_string(),
                                language: None,
                                favorite: false,
                                file_path: path.to_string_lossy().to_string(),
                            });
                            debug!(" [获取文件列表📄] 文件无 Frontmatter，使用默认元数据: {}", relative_path);
                        }
                    }
                    Err(e) => {
                        warn!("⚠️ [获取文件列表] 获取相对路径失败: {}", e);
                    }
                }
            }
            Err(e) => {
                warn!("⚠️ [获取文件列表] 读取文件失败 {}: {}", path.display(), e);
            }
        }
    }
    Ok(files)
}

// ============= 收藏操作命令 =============

// 切换收藏状态
#[command]
pub async fn toggle_favorite(
    app_handle: AppHandle,
    file_path: String,
    favorite: bool,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    _watcher: State<'_, Arc<Mutex<Option<FileWatcher>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<(), String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    let path = PathBuf::from(&file_path);
    
    // 获取相对路径
    let relative_path = get_relative_path(&workspace_root, &path)?;
    
    // 更新 Frontmatter（唯一数据源，cache.json 不再存储 favorite）
    if let Ok((mut fm, _)) = fs_manager.read_markdown_file(&path) {
        fm.favorite = favorite;
        fm.modified = chrono::Utc::now().to_rfc3339();
        if let Err(e) = fs_manager.update_file_frontmatter(&path, &fm) {
            warn!("⚠️ [切换收藏] 更新 Front Matter 失败: {}", e);
        }
    }
    
    // 更新 cache.json 中的 modified 时间戳（仅文件系统索引字段）
    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    
    cache.update_file_metadata(&relative_path, |m| {
        m.modified = chrono::Utc::now().timestamp_millis();
    })?;
    
    cache.save()?;
    
    // 更新索引
    if let Ok(manager_lock) = index_manager.read() {
        if let Some(ref manager) = *manager_lock {
            let cache = cache_manager.read()
                .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
            let _ = manager.update_entry(&path, &workspace_root, &*cache);
        }
    }
    
    info!("✅ 切换收藏状态: {} -> {}", path.display(), favorite);
    Ok(())
}

// ============= 文件监听器命令 =============

// 忽略下一次文件变化
#[command]
pub fn ignore_next_change(
    file_path: String,
    watcher: State<'_, Arc<Mutex<Option<FileWatcher>>>>,
) -> Result<(), String> {
    let path = PathBuf::from(&file_path);
    
    if let Ok(watcher_lock) = watcher.lock() {
        if let Some(ref w) = *watcher_lock {
            w.ignore_next_change(path.clone());
            Ok(())
        } else {
            Err("文件监听器未初始化".to_string())
        }
    } else {
        Err("获取文件监听器锁失败".to_string())
    }
}

// ============= Wikilink 相关命令 =============

// 通过标题查找文件
#[command]
pub fn find_file_by_title(
    app_handle: AppHandle,
    title: String,
) -> Result<Option<MarkdownFile>, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root();
    
    // 遍历所有文件查找匹配的标题
    for entry in walkdir::WalkDir::new(workspace_root)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        let path = entry.path();
        
        if !path.is_file() || path.extension().and_then(|s| s.to_str()) != Some("md") {
            continue;
        }
        
        if let Ok((metadata, content)) = fs_manager.read_markdown_file(path) {
            if metadata.title == title {
                return Ok(Some(MarkdownFile::from_front_matter(
                    metadata,
                    content,
                    path.to_path_buf(),
                )));
            }
        }
    }
    
    Ok(None)
}

// 获取所有文件标题
#[command]
pub fn get_all_file_titles(app_handle: AppHandle) -> Result<Vec<String>, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root();
    
    let mut titles = Vec::new();
    
    for entry in walkdir::WalkDir::new(workspace_root)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        let path = entry.path();
        
        if !path.is_file() || path.extension().and_then(|s| s.to_str()) != Some("md") {
            continue;
        }
        
        if let Ok((metadata, _)) = fs_manager.read_markdown_file(path) {
            titles.push(metadata.title);
        }
    }
    
    Ok(titles)
}

// 更新所有文件中的 wikilinks
#[command]
pub async fn update_wikilinks(
    app_handle: AppHandle,
    old_title: String,
    new_title: String,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    watcher: State<'_, Arc<Mutex<Option<FileWatcher>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<usize, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    
    let mut updated_count = 0;
    let old_link = format!("[[{}]]", old_title);
    let new_link = format!("[[{}]]", new_title);
    
    for entry in walkdir::WalkDir::new(&workspace_root)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        let path = entry.path();
        
        if !path.is_file() || path.extension().and_then(|s| s.to_str()) != Some("md") {
            continue;
        }
        
        if let Ok((metadata, content)) = fs_manager.read_markdown_file(path) {
            if content.contains(&old_link) {
                // 忽略下一次文件变化
                if let Ok(watcher_lock) = watcher.lock() {
                    if let Some(ref w) = *watcher_lock {
                        w.ignore_next_change(path.to_path_buf());
                    }
                }
                
                let new_content = content.replace(&old_link, &new_link);
                fs_manager.update_markdown_file(path, Some(&new_content), Some(&metadata))?;
                
                // 更新索引
                if let Ok(manager_lock) = index_manager.read() {
                    if let Some(ref manager) = *manager_lock {
                        let cache = cache_manager.read()
                            .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
                        let _ = manager.update_entry(path, &workspace_root, &*cache);
                    }
                }
                
                updated_count += 1;
            }
        }
    }
    
    info!("✅ 更新 wikilinks: {} -> {} ({}个文件)", old_title, new_title, updated_count);
    Ok(updated_count)
}

// 查找包含指定标题 wikilink 的文件
#[command]
pub fn find_files_with_wikilink(
    app_handle: AppHandle,
    title: String,
) -> Result<Vec<MarkdownFile>, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root();
    
    let mut files = Vec::new();
    let link = format!("[[{}]]", title);
    
    for entry in walkdir::WalkDir::new(workspace_root)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        let path = entry.path();
        
        if !path.is_file() || path.extension().and_then(|s| s.to_str()) != Some("md") {
            continue;
        }
        
        if let Ok((metadata, content)) = fs_manager.read_markdown_file(path) {
            if content.contains(&link) {
                files.push(MarkdownFile::from_front_matter(
                    metadata,
                    content,
                    path.to_path_buf(),
                ));
            }
        }
    }
    
    Ok(files)
}



// ============= 迁移工具命令 =============

// 移动 Markdown 文件到新分类
#[command]
pub async fn move_markdown_file(
    app_handle: AppHandle,
    file_path: String,
    new_category: String,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<String, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = get_workspace_root(&app_handle)?
        .ok_or_else(|| "工作区根目录未设置".to_string())?;

    let old_path = PathBuf::from(&file_path);

    // 获取旧文件的相对路径（用于查找 cache.json）
    let old_relative_path = get_relative_path(&workspace_root, &old_path)?;

    // 获取当前文件所在分类
    let current_category = Path::new(&old_relative_path)
        .parent()
        .and_then(|p| p.file_name())
        .and_then(|n| n.to_str())
        .unwrap_or("");

    // 标准化目标分类（空字符串表示"未分类"）
    let target_category = if new_category.is_empty() { "未分类" } else { &new_category };

    // 如果目标分类与当前分类相同，跳过移动
    if current_category == target_category {
        debug!("📦 [移动文件] 目标分类与当前分类相同，跳过移动: {}", old_path.display());
        return Ok(file_path);
    }

    debug!("📦 [移动文件] 开始移动: {} -> {}", old_relative_path, target_category);

    // 移动文件
    let new_relative_path = fs_manager.move_markdown_file(&old_path, &new_category)?;

    // 更新 cache.json
    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

    // 移动元数据
    // 标准化新路径（统一使用 / 作为分隔符）
    let new_relative_path_str = new_relative_path.to_string_lossy().replace('\\', "/");

    if let Some(metadata) = cache.get_file_metadata(&old_relative_path).cloned() {
        cache.remove_file_metadata(&old_relative_path);
        cache.set_file_metadata(new_relative_path_str.clone(), metadata);
    } else {
        warn!("⚠️ [移动文件] 未找到旧文件的元数据: {}", old_relative_path);
        return Err(format!("未找到文件元数据: {}", old_relative_path));
    }

    // 保存 cache
    cache.save()?;

    // 更新索引
    if let Ok(manager_lock) = index_manager.read() {
        if let Some(ref manager) = *manager_lock {
            let _ = manager.remove_entry(&old_path);
        }
    }

    let new_path_str = workspace_root.join(&new_relative_path).to_string_lossy().to_string();
    debug!("✅ [移动文件] 完成: {} -> {}", old_relative_path, new_relative_path_str);
    Ok(new_path_str)
}
// 搜索 Markdown 文件（包装器，调用优化版本的索引管理器）
#[command]
pub async fn search_markdown_files_optimized(
    app_handle: AppHandle,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
    query: String,
) -> Result<Vec<MarkdownFile>, String> {
    let manager_lock = index_manager.read()
        .map_err(|e| format!("获取索引管理器锁失败: {}", e))?;
    
    let manager = manager_lock.as_ref()
        .ok_or_else(|| "索引管理器未初始化".to_string())?;
    
    let results = manager.search(&query);
    
    // 获取工作区根目录
    let workspace_root = get_workspace_root(&app_handle)?
        .ok_or("工作区未配置")?;
    
    // 获取 CacheManager 以推断分类信息
    let cache = cache_manager.read()
        .map_err(|e| format!("获取缓存管理器锁失败: {}", e))?;
    
    // 将 IndexEntry 转换为 MarkdownFile
    let markdown_files: Vec<MarkdownFile> = results.into_iter().map(|entry| {
        // 类型字段：直接使用索引中的值（'code' 或 'note'）
        let file_type = entry.file_type;
        
        // 从文件路径推断分类信息
        let file_path_str = entry.file_path.to_string_lossy().to_string();
        
        // 将绝对路径转换为相对路径
        let relative_path = match get_relative_path(&workspace_root, &entry.file_path) {
            Ok(path) => path,
            Err(_) => {
                // 如果转换失败，使用文件名
                entry.file_path.file_name()
                    .and_then(|n| n.to_str())
                    .unwrap_or("unknown.md")
                    .to_string()
            }
        };
        
        let category_name = cache.extract_category_from_path(&relative_path);
        let category_id = cache.get_category_id(&category_name).unwrap_or(0);
        
        MarkdownFile {
            id: entry.id,
            title: entry.title,
            content: entry.full_content,
            category_id,
            category_name,
            tags: entry.tags,
            created: "".to_string(),
            modified: "".to_string(),
            file_type,
            language: entry.language,
            favorite: entry.favorite,
            file_path: file_path_str,
        }
    }).collect();
    
    Ok(markdown_files)
}
// 清理 cache.json 中已删除文件的元数据
#[command]
pub fn cleanup_cache(
    app_handle: AppHandle,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<usize, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    
    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    
    let removed_count = cache.cleanup_missing_files(&workspace_root);
    
    if removed_count > 0 {
        cache.save()?;
        info!("🗑️ [清理缓存] 清理了 {} 个已删除文件的元数据", removed_count);
    } else {
        info!("✅ [清理缓存] 没有需要清理的元数据");
    }
    
    Ok(removed_count)
}

// 扫描新文件并更新 cache（用于 Git Pull 后）
#[command]
pub fn scan_new_files(
    app_handle: AppHandle,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<usize, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();

    let mut cache = cache_manager.write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

    // 重建缓存（会扫描所有文件，添加新文件到 cache）
    let file_count = cache.rebuild_cache(&workspace_root)?;

    // 保存 cache
    cache.save()?;

    info!("✅ [扫描新文件] 完成，共 {} 个文件", file_count);

    Ok(file_count)
}

// ============= 工作区配置命令 =============

// 获取同步开关状态
#[command]
pub fn get_sync_enabled(app_handle: AppHandle) -> Result<bool, String> {
    use crate::markdown::WorkspaceManager;
    
    // 尝试从应用状态获取 WorkspaceManager
    if let Some(workspace_state) = app_handle.try_state::<Arc<RwLock<WorkspaceManager>>>() {
        let manager = workspace_state.read()
            .map_err(|e| format!("Failed to acquire read lock: {}", e))?;
        Ok(manager.is_sync_enabled())
    } else {
        // 如果状态不存在，返回默认值
        Ok(false)
    }
}

// 设置同步开关状态
#[command]
pub fn set_sync_enabled(app_handle: AppHandle, enabled: bool) -> Result<(), String> {
    use crate::markdown::WorkspaceManager;
    
    // 尝试从应用状态获取 WorkspaceManager
    if let Some(workspace_state) = app_handle.try_state::<Arc<RwLock<WorkspaceManager>>>() {
        let mut manager = workspace_state.write()
            .map_err(|e| format!("Failed to acquire write lock: {}", e))?;
        manager.set_sync_enabled(enabled);
        manager.save()?;
        info!("✅ [工作区配置] 同步开关已设置为: {}", enabled);
        Ok(())
    } else {
        Err("WorkspaceManager 未初始化".to_string())
    }
}
