// Markdown 文件操作的 Tauri 命令

use crate::json_config::get_workspace_root;
use crate::markdown::file_ops::{get_relative_path, FileNameGenerator};
use crate::markdown::file_system_manager::FileSystemManager;
use crate::markdown::metadata::{try_parse_front_matter, AiNoteSource, FileMetadata, FrontMatter};
use crate::markdown::trash::{self, DeletedNote};
use crate::markdown::watcher::FileWatcher;
use crate::markdown::CacheManager;
use crate::markdown::IndexManager; // 使用模块级别的 IndexManager（已重命名为 OptimizedIndexManager）
use log::{debug, info, warn};
use serde::{Deserialize, Serialize};
use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, RwLock};
use tauri::{command, AppHandle, Manager, State};

// Markdown 文件数据结构（与前端 MarkdownFile 接口匹配）
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MarkdownFile {
    #[serde(rename = "documentId", skip_serializing_if = "Option::is_none")]
    pub document_id: Option<String>,
    #[serde(rename = "aiSource", skip_serializing_if = "Option::is_none")]
    pub ai_source: Option<AiNoteSource>,
    pub id: String,
    pub title: String,
    pub content: String,
    #[serde(rename = "categoryId")]
    pub category_id: i64, // 分类 ID
    #[serde(rename = "categoryName")]
    pub category_name: String, // 分类名称
    pub tags: Vec<String>,
    pub created: String,
    pub modified: String,
    #[serde(rename = "type")]
    pub file_type: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub language: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub framework: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub kind: Option<String>,
    pub favorite: bool,
    #[serde(rename = "filePath")]
    pub file_path: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub score: Option<f32>,
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
            document_id: Some(metadata.id),
            ai_source: metadata.ai_source,
            id: file_path.to_string_lossy().to_string(), // 使用文件路径作为 ID
            title: metadata.title,
            content,
            category_id: 0, // 默认为未分类
            category_name: "未分类".to_string(),
            tags: metadata.tags,
            created: metadata.created,
            modified: metadata.modified,
            file_type,
            language: metadata.language,
            framework: metadata.framework,
            kind: metadata.kind,
            favorite: metadata.favorite,
            file_path: file_path.to_string_lossy().to_string(),
            score: None,
        }
    }
}

// 获取文件系统管理器
fn get_fs_manager(app_handle: &AppHandle) -> Result<FileSystemManager, String> {
    let workspace_root =
        get_workspace_root(app_handle)?.ok_or("工作区未配置，请先设置工作区根目录")?;
    Ok(FileSystemManager::new(workspace_root))
}

fn favorite_after_metadata_update(
    metadata: &serde_json::Value,
    current: Option<&FrontMatter>,
) -> bool {
    metadata
        .get("favorite")
        .and_then(|value| value.as_bool())
        .unwrap_or_else(|| current.is_some_and(|fm| fm.favorite))
}

fn normalize_for_content_compare(content: &str) -> String {
    content
        .replace("\r\n", "\n")
        .lines()
        .map(|line| line.trim_end_matches([' ', '\t']))
        .collect::<Vec<_>>()
        .join("\n")
        .trim()
        .to_string()
}

fn compute_content_hash(content: &str) -> u64 {
    let normalized = normalize_for_content_compare(content);
    let mut hasher = DefaultHasher::new();
    normalized.hash(&mut hasher);
    hasher.finish()
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
    let mut cache = cache_manager
        .write()
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
// Serialize AI saves across windows so retries never overwrite or duplicate a note.
static AI_NOTE_SAVE_LOCK: Mutex<()> = Mutex::new(());

fn check_expected_workspace(root: &Path, expected: Option<&str>) -> Result<(), String> {
    if let Some(expected) = expected {
        if root != Path::new(expected) {
            return Err("工作区已切换，请重新选择笔记或保存位置".to_string());
        }
    }
    Ok(())
}

fn find_saved_ai_note(
    manager: &FileSystemManager,
    source: &AiNoteSource,
) -> Result<Option<PathBuf>, String> {
    for path in manager.list_markdown_files(None)? {
        if let Some(previous) = manager
            .read_markdown_file_metadata(&path)?
            .filter(|fm| fm.fragment_type == "note")
            .and_then(|fm| fm.ai_source)
        {
            if previous.conversation_id == source.conversation_id
                && previous.message_id == source.message_id
            {
                return Ok(Some(path));
            }
        }
    }
    Ok(None)
}

#[command]
pub async fn create_markdown_file(
    app_handle: AppHandle,
    category: Option<String>,
    metadata: serde_json::Value,
    expected_workspace_root: Option<String>,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<String, String> {
    let ai_source = metadata
        .get("aiSource")
        .filter(|value| !value.is_null())
        .map(|value| serde_json::from_value::<AiNoteSource>(value.clone()))
        .transpose()
        .map_err(|error| format!("AI 来源数据无效: {}", error))?;
    let _save_guard = if ai_source.is_some() {
        Some(
            AI_NOTE_SAVE_LOCK
                .lock()
                .map_err(|error| error.to_string())?,
        )
    } else {
        None
    };
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    check_expected_workspace(&workspace_root, expected_workspace_root.as_deref())?;
    if let Some(source) = &ai_source {
        if let Some(path) = find_saved_ai_note(&fs_manager, source)? {
            return Ok(path.to_string_lossy().to_string());
        }
    }
    // 解析元数据
    let title = metadata
        .get("title")
        .and_then(|v| v.as_str())
        .ok_or("缺少 title 字段")?
        .trim()
        .to_string();

    if title.is_empty() {
        return Err("标题不能为空".to_string());
    }

    let content = metadata
        .get("content")
        .and_then(|v| v.as_str())
        .unwrap_or("")
        .to_string();

    let tags: Vec<String> = metadata
        .get("tags")
        .and_then(|v| v.as_array())
        .map(|arr| {
            arr.iter()
                .filter_map(|v| v.as_str().map(|s| s.to_string()))
                .collect()
        })
        .unwrap_or_default();

    let file_type = metadata
        .get("type")
        .and_then(|v| v.as_str())
        .unwrap_or("note")
        .to_string();

    let language = metadata
        .get("language")
        .and_then(|v| v.as_str())
        .map(|s| s.to_string());

    let framework = metadata
        .get("framework")
        .and_then(|v| v.as_str())
        .map(|s| s.to_string());

    let kind = metadata
        .get("kind")
        .and_then(|v| v.as_str())
        .map(|s| s.to_string());

    let favorite = metadata
        .get("favorite")
        .and_then(|v| v.as_bool())
        .unwrap_or(false);

    // 生成 ID 和时间戳
    let id = uuid::Uuid::new_v4().to_string();
    let now = chrono::Utc::now();
    let now_timestamp = now.timestamp_millis();

    // Provenance lives in the note frontmatter and follows Git sync / rename.
    let front_matter = FrontMatter {
        ai_source,
        id: id.clone(),
        title: title.clone(),
        tags: tags.clone(),
        created: now.to_rfc3339(),
        modified: now.to_rfc3339(),
        fragment_type: file_type.clone(),
        language: language.clone(),
        framework: framework.clone(),
        kind: kind.clone(),
        favorite,
    };

    // 创建文件（Front Matter 与正文）
    let file_path =
        fs_manager.create_markdown_file(category.as_deref(), &title, &content, &front_matter)?;

    // 获取相对路径
    let relative_path = get_relative_path(&workspace_root, &file_path)?;

    // 添加元数据到 cache.json
    let mut cache = cache_manager
        .write()
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
            let cache = cache_manager
                .read()
                .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
            let _ = manager.update_entry(&file_path, &workspace_root, &cache);
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
    expected_workspace_root: Option<String>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<MarkdownFile, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    check_expected_workspace(&workspace_root, expected_workspace_root.as_deref())?;

    let path = PathBuf::from(&file_path);

    // 读取文件完整内容
    let raw_content = fs_manager.read_markdown_file_content(&path)?;

    // 获取相对路径
    let relative_path = get_relative_path(&workspace_root, &path)?;

    // 尝试解析 Front Matter：有则优先使用；无则生成默认 Frontmatter 并写回文件（保证“默认值”持久化）
    let (
        content,
        title,
        tags,
        created,
        modified,
        file_type,
        language,
        framework,
        kind,
        favorite,
        document_id,
        ai_source,
    ) = {
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
                fm.framework,
                fm.kind,
                fm.favorite,
                Some(fm.id),
                fm.ai_source,
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
                ai_source: None,
                id: id.clone(),
                title: title.clone(),
                tags: Vec::new(),
                created: created_str.clone(),
                modified: modified_str.clone(),
                fragment_type: "note".to_string(),
                language: None,
                framework: None,
                kind: None,
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
                None,
                None,
                false,
                Some(id),
                None,
            )
        }
    };

    // 分类信息仍需从 cache（cache 维护 categories 映射）
    let cache = cache_manager
        .read()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
    let category_name = cache.extract_category_from_path(&relative_path);
    let category_id = cache.get_category_id(&category_name).unwrap_or(0);

    Ok(MarkdownFile {
        document_id,
        ai_source,
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
        framework,
        kind,
        favorite,
        file_path: file_path.clone(),
        score: None,
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
            let current_title = path.file_stem().and_then(|s| s.to_str()).unwrap_or("");

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
                    let resolved_name =
                        FileNameGenerator::resolve_conflict(parent_dir, &safe_filename);
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

    // 读取当前文件内容，做后端兜底的等价比较（防止前端误触发保存）
    let raw_before = fs_manager.read_markdown_file_content(&path)?;
    let (current_frontmatter, current_body) = try_parse_front_matter(&raw_before);
    let incoming_content = content.as_deref().unwrap_or(&current_body);

    let current_hash = compute_content_hash(&current_body);
    let incoming_hash = compute_content_hash(incoming_content);
    let content_equivalent = current_hash == incoming_hash;

    debug!(
        "[save-debug] backend-save-check: title_changed={}, has_content={}, has_metadata={}, content_equivalent={}, current_hash={}, incoming_hash={}",
        title_changed,
        content.is_some(),
        metadata.is_some(),
        content_equivalent,
        current_hash,
        incoming_hash
    );

    // 构建 FrontMatter（当有 metadata 时，用于写入文件的 Front Matter）
    let frontmatter_opt: Option<FrontMatter> = if let Some(ref meta) = metadata {
        let cache = cache_manager
            .read()
            .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
        let file_meta = cache.get_file_metadata(&relative_path).cloned();
        let (id, created_ts) = file_meta
            .as_ref()
            .map(|m| (m.id.clone(), m.created))
            .unwrap_or_else(|| {
                (
                    uuid::Uuid::new_v4().to_string(),
                    chrono::Utc::now().timestamp_millis(),
                )
            });
        let title = meta
            .get("title")
            .and_then(|v| v.as_str())
            .map(|s| s.to_string())
            .unwrap_or_else(|| {
                path.file_stem()
                    .and_then(|s| s.to_str())
                    .unwrap_or("Untitled")
                    .to_string()
            });
        let created = chrono::DateTime::from_timestamp_millis(created_ts)
            .map(|dt| dt.to_rfc3339())
            .unwrap_or_else(|| chrono::Utc::now().to_rfc3339());
        Some(FrontMatter {
            ai_source: current_frontmatter
                .as_ref()
                .and_then(|fm| fm.ai_source.clone()),
            id: current_frontmatter
                .as_ref()
                .map(|fm| fm.id.clone())
                .unwrap_or(id),
            title,
            tags: meta
                .get("tags")
                .and_then(|v| v.as_array())
                .map(|arr| {
                    arr.iter()
                        .filter_map(|v| v.as_str().map(|s| s.to_string()))
                        .collect()
                })
                .unwrap_or_default(),
            created,
            modified: chrono::Utc::now().to_rfc3339(),
            fragment_type: meta
                .get("type")
                .and_then(|v| v.as_str())
                .map(|value| value.to_string())
                .or_else(|| {
                    current_frontmatter
                        .as_ref()
                        .map(|fm| fm.fragment_type.clone())
                })
                .unwrap_or_else(|| "note".to_string()),
            language: meta
                .get("language")
                .and_then(|v| v.as_str())
                .map(|s| s.to_string()),
            framework: meta
                .get("framework")
                .and_then(|v| v.as_str())
                .map(|s| s.to_string()),
            kind: meta
                .get("kind")
                .and_then(|v| v.as_str())
                .map(|s| s.to_string()),
            favorite: favorite_after_metadata_update(meta, current_frontmatter.as_ref()),
        })
    } else {
        None
    };

    // 仅在“文件名变化 / 内容有实质变化 / 元数据变化”时写文件，避免无效写入导致 modified 变化
    let should_write_file = title_changed || !content_equivalent || needs_metadata_update;
    if should_write_file {
        fs_manager.update_markdown_file(&path, content.as_deref(), frontmatter_opt.as_ref())?;
    } else {
        debug!("📝 [更新文件] 内容等价，跳过文件写入");
    }

    // 更新元数据到 cache.json
    if needs_metadata_update {
        let mut cache = cache_manager
            .write()
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
            // 只有在实际写入文件（内容变化或重命名）时才更新 modified
            if should_write_file {
                m.modified = chrono::Utc::now().timestamp_millis();
            }

            if let Some(new_content) = &content {
                m.size = Some(new_content.len() as u64);
            }
        })?;

        cache.save()?;
    }

    // 更新索引
    if let Ok(manager_lock) = index_manager.read() {
        if let Some(ref manager) = *manager_lock {
            let cache = cache_manager
                .read()
                .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

            // 如果文件被重命名，先移除旧索引
            if new_path.is_some() {
                let _ = manager.remove_entry(&PathBuf::from(&file_path));
            }

            let _ = manager.update_entry(&path, &workspace_root, &cache);
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

    // 保留文件的原始字节到本机回收站；正文和 Front Matter 不变。
    trash::soft_delete_note(&app_handle, &workspace_root, &path)?;

    // 从 cache.json 中移除元数据
    if let Ok(mut cache) = cache_manager.write() {
        if cache.get_file_metadata(&relative_path).is_some() {
            cache.remove_file_metadata(&relative_path);
            if let Err(error) = cache.save() {
                warn!("笔记已回收，但保存 cache 失败: {}", error);
            }
            debug!(
                "🗑️ [删除文件] 已从 cache.json 移除元数据: {}",
                relative_path
            );
        }
    } else {
        warn!("笔记已回收，但无法取得 cache 写锁");
    }

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

#[command]
pub fn get_deleted_notes(app_handle: AppHandle) -> Result<Vec<DeletedNote>, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    trash::list_deleted_notes(&app_handle, fs_manager.workspace_root())
}

#[command]
pub fn restore_deleted_note(
    app_handle: AppHandle,
    id: String,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<String, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();
    let restored_path = trash::restore_deleted_note(&app_handle, &workspace_root, &id)?;
    if let Ok(mut cache) = cache_manager.write() {
        if let Err(error) = cache
            .add_file(&restored_path, &workspace_root)
            .and_then(|_| cache.save())
        {
            warn!("笔记已恢复，但更新 cache 失败: {}", error);
        }
    } else {
        warn!("笔记已恢复，但无法取得 cache 写锁");
    }
    if let Ok(manager_lock) = index_manager.read() {
        if let Some(ref manager) = *manager_lock {
            if let Ok(cache) = cache_manager.read() {
                if let Err(error) = manager.update_entry(&restored_path, &workspace_root, &cache) {
                    warn!("笔记已恢复，但更新搜索索引失败: {}", error);
                }
            }
        }
    }
    Ok(restored_path.to_string_lossy().to_string())
}

// ============= 分类操作命令 =============

fn validate_category_folder_name(name: &str) -> Result<String, String> {
    let trimmed = name.trim();
    if trimmed.is_empty() {
        return Err("分类名称不能为空".to_string());
    }

    if trimmed == "." || trimmed == ".." {
        return Err("分类名称不能为 . 或 ..".to_string());
    }

    if Path::new(trimmed).is_absolute()
        || trimmed.contains('/')
        || trimmed.contains('\\')
        || trimmed
            .chars()
            .any(|ch| ch.is_control() || matches!(ch, ':' | '*' | '?' | '"' | '<' | '>' | '|'))
        || trimmed
            .split(['/', '\\'])
            .any(|part| part == "." || part == "..")
    {
        return Err("分类名称包含非法字符".to_string());
    }

    if matches!(trimmed, "未分类" | "assets" | ".snippets-code" | ".git") {
        return Err("系统分类不能执行此操作".to_string());
    }

    Ok(trimmed.to_string())
}

fn resolve_category_folder_path(workspace_root: &Path, name: &str) -> Result<PathBuf, String> {
    let safe_name = validate_category_folder_name(name)?;
    Ok(workspace_root.join(safe_name))
}

fn rename_category_directory(
    old_path: &Path,
    new_path: &Path,
    new_name: &str,
) -> Result<(), String> {
    if old_path == new_path {
        return Ok(());
    }

    if new_path.exists() {
        let old_canonical =
            std::fs::canonicalize(old_path).map_err(|e| format!("读取原分类路径失败: {}", e))?;
        let new_canonical =
            std::fs::canonicalize(new_path).map_err(|e| format!("读取目标分类路径失败: {}", e))?;

        #[cfg(windows)]
        let is_same_entry = old_canonical
            .to_string_lossy()
            .eq_ignore_ascii_case(&new_canonical.to_string_lossy());
        #[cfg(not(windows))]
        let is_same_entry = old_canonical == new_canonical;

        if !is_same_entry {
            return Err(format!("目标分类已存在: {}", new_name));
        }

        // Windows 的文件系统默认不区分大小写，直接把 `python` 改成 `Python`
        // 会被 exists() 误判为冲突，也可能无法真正更新目录名。先经过同级临时目录
        // 中转，确保只修改大小写时也能落盘。
        let parent = old_path.parent().ok_or("无法获取分类父目录")?;
        let temp_path = (0..1000)
            .map(|index| {
                parent.join(format!(
                    ".snippets-code-category-rename-{}-{}",
                    std::process::id(),
                    index
                ))
            })
            .find(|path| !path.exists())
            .ok_or("无法创建分类重命名临时路径")?;

        std::fs::rename(old_path, &temp_path).map_err(|e| format!("重命名分类失败: {}", e))?;

        if let Err(error) = std::fs::rename(&temp_path, new_path) {
            if let Err(rollback_error) = std::fs::rename(&temp_path, old_path) {
                return Err(format!(
                    "重命名分类失败: {}; 恢复原目录失败: {}",
                    error, rollback_error
                ));
            }
            return Err(format!("重命名分类失败: {}", error));
        }

        return Ok(());
    }

    std::fs::rename(old_path, new_path).map_err(|e| format!("重命名分类失败: {}", e))
}

// 创建分类文件夹
#[command]
pub fn create_category_folder(app_handle: AppHandle, name: String) -> Result<String, String> {
    let fs_manager = get_fs_manager(&app_handle)?;
    let folder_path = fs_manager.create_category_folder(&name)?;

    info!("✅ 创建分类: {}", name);
    Ok(folder_path.to_string_lossy().to_string())
}

fn collect_recyclable_category_contents(
    folder_path: &Path,
) -> Result<(Vec<PathBuf>, Vec<PathBuf>), String> {
    // 先检查所有内容，避免删除非 Markdown 文件或符号链接。
    let mut note_paths = Vec::new();
    let mut directories = Vec::new();
    for entry in walkdir::WalkDir::new(folder_path).follow_links(false) {
        let entry = entry.map_err(|e| format!("检查分类内容失败: {}", e))?;
        if entry.file_type().is_dir() {
            directories.push(entry.path().to_path_buf());
        } else if entry.file_type().is_file()
            && entry.path().extension().and_then(|ext| ext.to_str()) == Some("md")
        {
            note_paths.push(entry.path().to_path_buf());
        } else {
            return Err(format!(
                "分类包含非笔记文件，未执行删除: {}",
                entry.path().display()
            ));
        }
    }
    Ok((note_paths, directories))
}

#[cfg(test)]
mod category_delete_tests {
    use super::*;

    #[test]
    fn scans_nested_notes_and_rejects_other_files_before_deletion() {
        let root = std::env::temp_dir().join(format!(
            "snippets-category-trash-test-{}",
            uuid::Uuid::new_v4()
        ));
        let nested = root.join("nested");
        std::fs::create_dir_all(&nested).unwrap();
        let note = nested.join("note.md");
        std::fs::write(&note, b"# Note").unwrap();

        let (notes, directories) = collect_recyclable_category_contents(&root).unwrap();
        assert_eq!(notes, vec![note.clone()]);
        assert_eq!(directories.len(), 2);

        std::fs::write(root.join("keep.txt"), b"keep").unwrap();
        assert!(collect_recyclable_category_contents(&root).is_err());
        assert!(note.exists());
        std::fs::remove_dir_all(root).unwrap();
    }
}

// 删除分类文件夹
#[command]
pub fn delete_category_folder(
    app_handle: AppHandle,
    name: String,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
) -> Result<(), String> {
    let workspace_root = get_workspace_root(&app_handle)?.ok_or("工作区未配置")?;

    let name = validate_category_folder_name(&name)?;
    let folder_path = resolve_category_folder_path(&workspace_root, &name)?;

    if !folder_path.exists() {
        return Err(format!("分类不存在: {}", name));
    }

    if !folder_path.is_dir() {
        return Err(format!("路径不是文件夹: {}", name));
    }

    let (note_paths, mut directories) = collect_recyclable_category_contents(&folder_path)?;

    for path in &note_paths {
        trash::soft_delete_note(&app_handle, &workspace_root, path)?;
    }
    directories.sort_by_key(|path| std::cmp::Reverse(path.components().count()));
    for path in directories {
        std::fs::remove_dir(&path).map_err(|e| format!("删除空分类文件夹失败: {}", e))?;
    }

    info!("✅ 删除分类: {}", name);

    // 清理 cache.json 中该分类下的所有文件
    let mut cache = cache_manager
        .write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

    let prefix = format!("{}/", name);
    let files_to_remove: Vec<String> = cache
        .get_all_files()
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

    if let Err(error) = cache.save() {
        warn!("分类笔记已回收，但保存 cache 失败: {}", error);
    }
    drop(cache);
    if let Ok(manager_lock) = index_manager.read() {
        if let Some(ref manager) = *manager_lock {
            for path in &note_paths {
                let _ = manager.remove_entry(path);
            }
        }
    }
    if !files_to_remove.is_empty() {
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
    let workspace_root = get_workspace_root(&app_handle)?.ok_or("工作区未配置")?;

    let old_name = validate_category_folder_name(&old_name)?;
    let new_name = validate_category_folder_name(&new_name)?;
    let old_path = resolve_category_folder_path(&workspace_root, &old_name)?;
    let new_path = resolve_category_folder_path(&workspace_root, &new_name)?;

    if !old_path.exists() {
        return Err(format!("分类不存在: {}", old_name));
    }

    if old_name == new_name {
        return Ok(());
    }

    rename_category_directory(&old_path, &new_path, &new_name)?;

    info!("✅ 重命名分类: {} -> {}", old_name, new_name);

    // 更新缓存中的分类元数据
    let mut cache = cache_manager
        .write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

    // 获取旧分类的元数据
    if let Some(old_metadata) = cache.get_category_metadata(&old_name) {
        let metadata = old_metadata.clone();
        let category_id = metadata.id; // 保存ID用于日志

        // 删除旧分类
        cache.remove_category_metadata(&old_name);
        // 添加新分类（保持相同的ID）
        cache.set_category_metadata(new_name.clone(), metadata);

        info!(
            "✅ 更新缓存: {} -> {} (ID: {})",
            old_name, new_name, category_id
        );
    }

    // 更新该分类下所有文件的路径
    let old_prefix = format!("{}/", old_name);
    let new_prefix = format!("{}/", new_name);

    // 获取所有需要更新的文件路径
    let files_to_update: Vec<String> = cache
        .get_all_files()
        .keys()
        .filter(|path| path.starts_with(&old_prefix))
        .cloned()
        .collect();

    info!(
        "📝 [重命名分类] 需要更新 {} 个文件的路径",
        files_to_update.len()
    );

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
pub async fn get_files_by_category(
    app_handle: AppHandle,
    category: Option<i64>, // 改为接受分类 ID
    include_content: Option<bool>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<Vec<MarkdownFile>, String> {
    let cache_manager = Arc::clone(cache_manager.inner());
    tauri::async_runtime::spawn_blocking(move || {
        list_files_by_category(&app_handle, category, include_content, cache_manager)
    })
    .await
    .map_err(|error| format!("获取文件列表任务失败: {error}"))?
}

fn list_files_by_category(
    app_handle: &AppHandle,
    category: Option<i64>,
    include_content: Option<bool>,
    cache_manager: Arc<RwLock<CacheManager>>,
) -> Result<Vec<MarkdownFile>, String> {
    let fs_manager = get_fs_manager(app_handle)?;
    let workspace_root = fs_manager.workspace_root().to_path_buf();

    // 获取 cache 以查找分类名称
    let cache = cache_manager
        .read()
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
        let metadata_and_body = if include_content.unwrap_or(true) {
            fs_manager
                .read_markdown_file_content(&path)
                .map(|raw| try_parse_front_matter(&raw))
        } else {
            fs_manager
                .read_markdown_file_metadata(&path)
                .map(|metadata| (metadata, String::new()))
        };
        match metadata_and_body {
            Ok((frontmatter_opt, body)) => {
                // 获取相对路径
                match get_relative_path(&workspace_root, &path) {
                    Ok(relative_path) => {
                        // 从 cache 提取分类信息（frontmatter 不存储分类信息）
                        let category_name = cache.extract_category_from_path(&relative_path);
                        let category_id = cache.get_category_id(&category_name).unwrap_or(0);

                        if let Some(fm) = frontmatter_opt {
                            // 所有内容元数据来自 Frontmatter（唯一数据源）
                            files.push(MarkdownFile {
                                document_id: Some(fm.id),
                                ai_source: if include_content.unwrap_or(true) {
                                    fm.ai_source
                                } else {
                                    None
                                },
                                id: path.to_string_lossy().to_string(),
                                title: fm.title,
                                content: if include_content.unwrap_or(true) {
                                    body
                                } else {
                                    String::new()
                                },
                                category_id,
                                category_name,
                                tags: fm.tags,
                                created: fm.created,
                                modified: fm.modified,
                                file_type: fm.fragment_type,
                                language: fm.language,
                                framework: fm.framework,
                                kind: fm.kind,
                                favorite: fm.favorite,
                                file_path: path.to_string_lossy().to_string(),
                                score: None,
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
                                document_id: cache
                                    .get_file_metadata(&relative_path)
                                    .map(|meta| meta.id.clone()),
                                ai_source: None,
                                id: path.to_string_lossy().to_string(),
                                title,
                                content: if include_content.unwrap_or(true) {
                                    body
                                } else {
                                    String::new()
                                },
                                category_id,
                                category_name,
                                tags: vec![],
                                created: now.clone(),
                                modified: now,
                                file_type: "note".to_string(),
                                language: None,
                                framework: None,
                                kind: None,
                                favorite: false,
                                file_path: path.to_string_lossy().to_string(),
                                score: None,
                            });
                            debug!(
                                " [获取文件列表📄] 文件无 Frontmatter，使用默认元数据: {}",
                                relative_path
                            );
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
    set_file_favorite(
        &fs_manager,
        Path::new(&file_path),
        favorite,
        &index_manager,
        &cache_manager,
    )
}

fn set_file_favorite(
    fs_manager: &FileSystemManager,
    file_path: &Path,
    favorite: bool,
    index_manager: &RwLock<Option<IndexManager>>,
    cache_manager: &RwLock<CacheManager>,
) -> Result<(), String> {
    let workspace_root = fs_manager.workspace_root();
    let path = if file_path.is_absolute() {
        file_path.to_path_buf()
    } else {
        workspace_root.join(file_path)
    };

    // Disk metadata is authoritative. Failed reads/writes must reach the UI.
    let (mut fm, _) = fs_manager.read_markdown_file(&path)?;
    fm.favorite = favorite;
    fm.modified = chrono::Utc::now().to_rfc3339();
    fs_manager.update_file_frontmatter(&path, &fm)?;

    // Release the cache write lock before updating the search index. The old
    // command acquired a cache read lock while still holding this write lock.
    let cache_snapshot = {
        let mut cache = cache_manager
            .write()
            .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
        cache.update_file(&path, workspace_root)?;
        cache.save()?;
        cache.clone()
    };

    let manager_lock = index_manager
        .read()
        .map_err(|e| format!("获取索引锁失败: {}", e))?;
    if let Some(manager) = manager_lock.as_ref() {
        manager.update_entry(&path, workspace_root, &cache_snapshot)?;
    }

    info!("✅ 切换收藏状态: {} -> {}", path.display(), favorite);
    Ok(())
}

#[cfg(test)]
mod favorite_tests {
    use super::*;
    use crate::markdown::metadata::format_frontmatter_block;
    use std::sync::mpsc;
    use std::time::Duration;

    struct Workspace {
        root: PathBuf,
        fs: FileSystemManager,
        cache: RwLock<CacheManager>,
        index: RwLock<Option<IndexManager>>,
    }

    impl Workspace {
        fn new() -> Self {
            let root = std::env::temp_dir()
                .join(format!("snippets-favorite-test-{}", uuid::Uuid::new_v4()));
            std::fs::create_dir_all(&root).unwrap();
            Self {
                fs: FileSystemManager::new(root.clone()),
                cache: RwLock::new(CacheManager::new_silent(root.join(".snippets-code")).unwrap()),
                index: RwLock::new(Some(IndexManager::new())),
                root,
            }
        }

        fn write(&self, name: &str, file_type: &str, suffix: &str) -> PathBuf {
            let metadata = FrontMatter {
                ai_source: None,
                id: name.to_string(),
                title: name.to_string(),
                tags: vec!["keep".to_string()],
                created: "2026-01-01T00:00:00Z".to_string(),
                modified: "2026-01-01T00:00:00Z".to_string(),
                fragment_type: file_type.to_string(),
                language: Some("typescript".to_string()),
                framework: Some("vue".to_string()),
                kind: Some("component".to_string()),
                favorite: false,
            };
            let path = self.root.join(name);
            std::fs::create_dir_all(path.parent().unwrap()).unwrap();
            std::fs::write(
                &path,
                format!(
                    "{}{}",
                    format_frontmatter_block(&metadata).unwrap().trim_end(),
                    suffix
                ),
            )
            .unwrap();
            path
        }
    }

    impl Drop for Workspace {
        fn drop(&mut self) {
            assert!(self.root.starts_with(std::env::temp_dir()));
            assert!(self
                .root
                .file_name()
                .unwrap()
                .to_string_lossy()
                .starts_with("snippets-favorite-test-"));
            let _ = std::fs::remove_dir_all(&self.root);
        }
    }

    #[test]
    fn persists_both_types_and_refreshes_index_without_relocking_cache() {
        let (sender, receiver) = mpsc::channel();
        let worker = std::thread::spawn(move || {
            let workspace = Workspace::new();
            let suffix = "\r\n\r\n    indented code\r\n\r\n";
            for file_type in ["note", "code"] {
                let path = workspace.write(&format!("Docs/{file_type}.md"), file_type, suffix);
                for favorite in [true, true, false] {
                    set_file_favorite(
                        &workspace.fs,
                        &path,
                        favorite,
                        &workspace.index,
                        &workspace.cache,
                    )
                    .unwrap();
                    let (metadata, _) = workspace.fs.read_markdown_file(&path).unwrap();
                    assert_eq!(metadata.favorite, favorite);
                    assert_eq!(metadata.fragment_type, file_type);
                    assert_eq!(metadata.created, "2026-01-01T00:00:00Z");
                    assert_eq!(metadata.language.as_deref(), Some("typescript"));
                    assert_eq!(metadata.framework.as_deref(), Some("vue"));
                    assert_eq!(metadata.tags, vec!["keep"]);
                    let raw = std::fs::read_to_string(&path).unwrap();
                    let closing = 3 + raw[3..].find("\n---").unwrap();
                    assert_eq!(&raw[closing + 4..], suffix);
                    let indexed = workspace.index.read().unwrap();
                    let favorites = indexed.as_ref().unwrap().get_favorites();
                    assert_eq!(favorites.len(), usize::from(favorite));
                    assert!(workspace
                        .cache
                        .read()
                        .unwrap()
                        .get_file_metadata(&format!("Docs/{file_type}.md"))
                        .is_some());
                }
            }
            // Reload from disk: persistence must survive cache reinitialization.
            let reloaded = CacheManager::new_silent(workspace.root.join(".snippets-code")).unwrap();
            assert!(reloaded.get_file_metadata("Docs/note.md").is_some());
            sender.send(()).unwrap();
        });
        receiver
            .recv_timeout(Duration::from_secs(10))
            .expect("favorite update deadlocked");
        worker.join().unwrap();
    }

    #[test]
    fn missing_file_returns_error_without_changing_cache() {
        let workspace = Workspace::new();
        assert!(set_file_favorite(
            &workspace.fs,
            Path::new("missing.md"),
            true,
            &workspace.index,
            &workspace.cache
        )
        .is_err());
        assert!(workspace.cache.read().unwrap().get_all_files().is_empty());
    }

    #[test]
    fn ai_provenance_survives_body_edits_favorites_and_moved_note_deduplication() {
        let workspace = Workspace::new();
        let path = workspace.write("Docs/answer.md", "note", "\n\n```ts\n42;\n```\n");
        let (mut metadata, _) = workspace.fs.read_markdown_file(&path).unwrap();
        let source = AiNoteSource {
            version: 1,
            conversation_id: "chat-1".to_string(),
            message_id: "message-1".to_string(),
            generated_at: "2026-10-07T00:00:00Z".to_string(),
            model_name: Some("Test model".to_string()),
            question: "Question".to_string(),
            legacy_metadata: Default::default(),
        };
        metadata.ai_source = Some(source.clone());
        workspace
            .fs
            .update_file_frontmatter(&path, &metadata)
            .unwrap();
        // User edits must be retained when a save is retried.
        workspace
            .fs
            .update_markdown_file(&path, Some("User edited answer"), None)
            .unwrap();
        set_file_favorite(
            &workspace.fs,
            &path,
            true,
            &workspace.index,
            &workspace.cache,
        )
        .unwrap();
        let moved = workspace.root.join("Docs/moved.md");
        std::fs::rename(&path, &moved).unwrap();
        assert_eq!(
            find_saved_ai_note(&workspace.fs, &source).unwrap(),
            Some(moved.clone())
        );
        let (saved, body) = workspace.fs.read_markdown_file(&moved).unwrap();
        assert_eq!(saved.ai_source, Some(source.clone()));
        assert_eq!(saved.id, metadata.id);
        assert!(saved.favorite);
        assert_eq!(body, "User edited answer");
        let mut different = source;
        different.message_id = "message-2".to_string();
        assert!(find_saved_ai_note(&workspace.fs, &different)
            .unwrap()
            .is_none());
    }

    #[test]
    fn saved_reply_deduplication_does_not_reuse_a_converted_snippet() {
        let workspace = Workspace::new();
        let path = workspace.write("Docs/converted.md", "snippet", "Converted content");
        let (mut metadata, _) = workspace.fs.read_markdown_file(&path).unwrap();
        let source = AiNoteSource {
            version: 1,
            conversation_id: "chat-converted".to_string(),
            message_id: "reply-converted".to_string(),
            generated_at: "2026-10-07T00:00:00Z".to_string(),
            model_name: None,
            question: "Question".to_string(),
            legacy_metadata: Default::default(),
        };
        metadata.ai_source = Some(source.clone());
        workspace
            .fs
            .update_file_frontmatter(&path, &metadata)
            .unwrap();
        assert!(find_saved_ai_note(&workspace.fs, &source)
            .unwrap()
            .is_none());
        metadata.fragment_type = "note".to_string();
        workspace
            .fs
            .update_file_frontmatter(&path, &metadata)
            .unwrap();
        assert_eq!(
            find_saved_ai_note(&workspace.fs, &source).unwrap(),
            Some(path)
        );
    }

    #[test]
    fn old_notes_still_parse_and_expected_workspace_rejects_stale_requests() {
        let workspace = Workspace::new();
        let path = workspace.write("old.md", "note", "\n\nOld body\n");
        let raw = std::fs::read_to_string(path).unwrap();
        assert!(!raw.contains("aiSource"));
        assert!(try_parse_front_matter(&raw).0.unwrap().ai_source.is_none());
        assert!(
            check_expected_workspace(&workspace.root, Some(&workspace.root.to_string_lossy()))
                .is_ok()
        );
        assert!(check_expected_workspace(&workspace.root, Some("another-workspace")).is_err());
        assert!(check_expected_workspace(&workspace.root, None).is_ok());
    }

    #[test]
    fn editor_metadata_updates_preserve_favorite_unless_explicitly_changed() {
        let workspace = Workspace::new();
        let path = workspace.write("note.md", "note", "\n\nbody\n");
        set_file_favorite(
            &workspace.fs,
            &path,
            true,
            &workspace.index,
            &workspace.cache,
        )
        .unwrap();
        let (current, _) = workspace.fs.read_markdown_file(&path).unwrap();
        let editor_update = serde_json::json!({ "title": "Edited title", "tags": ["new"] });
        let mut updated = current.clone();
        updated.favorite = favorite_after_metadata_update(&editor_update, Some(&current));
        updated.title = "Edited title".to_string();
        workspace
            .fs
            .update_markdown_file(&path, Some("edited body"), Some(&updated))
            .unwrap();
        let (saved, body) = workspace.fs.read_markdown_file(&path).unwrap();
        assert!(saved.favorite);
        assert_eq!(saved.title, "Edited title");
        assert_eq!(body, "edited body");
        assert!(!favorite_after_metadata_update(
            &serde_json::json!({"favorite": false}),
            Some(&saved)
        ));
        assert!(favorite_after_metadata_update(
            &serde_json::json!({"favorite": true}),
            None
        ));
        assert!(!favorite_after_metadata_update(&editor_update, None));
    }

    #[cfg(windows)]
    #[test]
    fn failed_disk_write_is_not_reported_as_success() {
        let workspace = Workspace::new();
        let path = workspace.write("read-only.md", "code", "\n\nbody\n");
        let original = std::fs::read(&path).unwrap();
        let permissions = std::fs::metadata(&path).unwrap().permissions();
        let mut read_only = permissions.clone();
        read_only.set_readonly(true);
        std::fs::set_permissions(&path, read_only).unwrap();
        let result = set_file_favorite(
            &workspace.fs,
            &path,
            true,
            &workspace.index,
            &workspace.cache,
        );
        std::fs::set_permissions(&path, permissions).unwrap();
        assert!(result.is_err());
        assert_eq!(std::fs::read(&path).unwrap(), original);
    }

    #[test]
    fn workspace_listing_excludes_recycled_and_internal_files() {
        let workspace = Workspace::new();
        let live = workspace.write("Docs/live.md", "note", "\n\nbody\n");
        workspace.write(".snippets-code/trash/deleted.md", "note", "\n\nbody\n");
        workspace.write(".git/internal.md", "note", "\n\nbody\n");
        workspace.write("assets/attachment.md", "note", "\n\nbody\n");
        assert_eq!(workspace.fs.list_markdown_files(None).unwrap(), vec![live]);
    }
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
                        let cache = cache_manager
                            .read()
                            .map_err(|e| format!("获取 cache 锁失败: {}", e))?;
                        let _ = manager.update_entry(path, &workspace_root, &cache);
                    }
                }

                updated_count += 1;
            }
        }
    }

    info!(
        "✅ 更新 wikilinks: {} -> {} ({}个文件)",
        old_title, new_title, updated_count
    );
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
    let workspace_root =
        get_workspace_root(&app_handle)?.ok_or_else(|| "工作区根目录未设置".to_string())?;

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
    let target_category = if new_category.is_empty() {
        "未分类"
    } else {
        &new_category
    };

    // 如果目标分类与当前分类相同，跳过移动
    if current_category == target_category {
        debug!(
            "📦 [移动文件] 目标分类与当前分类相同，跳过移动: {}",
            old_path.display()
        );
        return Ok(file_path);
    }

    debug!(
        "📦 [移动文件] 开始移动: {} -> {}",
        old_relative_path, target_category
    );

    // 移动文件
    let new_relative_path = fs_manager.move_markdown_file(&old_path, &new_category)?;

    // 更新 cache.json
    let mut cache = cache_manager
        .write()
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

    let new_path_str = workspace_root
        .join(&new_relative_path)
        .to_string_lossy()
        .to_string();
    debug!(
        "✅ [移动文件] 完成: {} -> {}",
        old_relative_path, new_relative_path_str
    );
    Ok(new_path_str)
}
// 搜索 Markdown 文件（包装器，调用优化版本的索引管理器）
#[command]
pub async fn rebuild_search_index(
    app_handle: AppHandle,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
) -> Result<(), String> {
    let Some(workspace_root) = get_workspace_root(&app_handle)? else {
        debug!("🔎 [搜索索引] 工作区未配置，跳过重建");
        return Ok(());
    };

    let cache = {
        let cache_lock = cache_manager
            .read()
            .map_err(|e| format!("获取缓存管理器锁失败: {}", e))?;
        cache_lock.clone()
    };

    let rebuilt_index = IndexManager::build_index(&workspace_root, &cache).await?;

    let mut index_lock = index_manager
        .write()
        .map_err(|e| format!("获取索引管理器写锁失败: {}", e))?;
    *index_lock = Some(rebuilt_index);

    info!("✅ [搜索索引] 已重建: {}", workspace_root.display());
    Ok(())
}

#[command]
pub async fn search_markdown_files_optimized(
    app_handle: AppHandle,
    index_manager: State<'_, Arc<RwLock<Option<IndexManager>>>>,
    cache_manager: State<'_, Arc<RwLock<CacheManager>>>,
    query: String,
) -> Result<Vec<MarkdownFile>, String> {
    // 快速搜索窗口在未设置工作区时仍可搜索应用、书签和网页搜索项。
    // Markdown 工作区源缺失属于正常空态，不应打断整次搜索请求。
    let Some(workspace_root) = get_workspace_root(&app_handle)? else {
        debug!("🔎 [搜索] 工作区未配置，跳过 Markdown 搜索");
        return Ok(Vec::new());
    };

    let manager_lock = index_manager
        .read()
        .map_err(|e| format!("获取索引管理器锁失败: {}", e))?;

    let Some(manager) = manager_lock.as_ref() else {
        debug!("🔎 [搜索] 索引管理器未初始化，返回空 Markdown 搜索结果");
        return Ok(Vec::new());
    };

    let results = manager.search(&query);

    // 获取 CacheManager 以推断分类信息
    let cache = cache_manager
        .read()
        .map_err(|e| format!("获取缓存管理器锁失败: {}", e))?;

    // 将 IndexEntry 转换为 MarkdownFile
    let markdown_files: Vec<MarkdownFile> = results
        .into_iter()
        .map(|(entry, score)| {
            // 类型字段：直接使用索引中的值（'code' 或 'note'）
            let file_type = entry.file_type;

            // 从文件路径推断分类信息
            let file_path_str = entry.file_path.to_string_lossy().to_string();

            // 将绝对路径转换为相对路径
            let relative_path = match get_relative_path(&workspace_root, &entry.file_path) {
                Ok(path) => path,
                Err(_) => {
                    // 如果转换失败，使用文件名
                    entry
                        .file_path
                        .file_name()
                        .and_then(|n| n.to_str())
                        .unwrap_or("unknown.md")
                        .to_string()
                }
            };

            let category_name = cache.extract_category_from_path(&relative_path);
            let category_id = cache.get_category_id(&category_name).unwrap_or(0);

            MarkdownFile {
                document_id: None,
                ai_source: None,
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
                framework: entry.framework,
                kind: entry.kind,
                favorite: entry.favorite,
                file_path: file_path_str,
                score: Some(score),
            }
        })
        .collect();

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

    let mut cache = cache_manager
        .write()
        .map_err(|e| format!("获取 cache 锁失败: {}", e))?;

    let removed_count = cache.cleanup_missing_files(&workspace_root);

    if removed_count > 0 {
        cache.save()?;
        info!(
            "🗑️ [清理缓存] 清理了 {} 个已删除文件的元数据",
            removed_count
        );
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

    let mut cache = cache_manager
        .write()
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
        let manager = workspace_state
            .read()
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
        let mut manager = workspace_state
            .write()
            .map_err(|e| format!("Failed to acquire write lock: {}", e))?;
        manager.set_sync_enabled(enabled);
        manager.save()?;
        info!("✅ [工作区配置] 同步开关已设置为: {}", enabled);
        Ok(())
    } else {
        Err("WorkspaceManager 未初始化".to_string())
    }
}
