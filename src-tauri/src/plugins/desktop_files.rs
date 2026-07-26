use crate::db;
use crate::db::DesktopFileCacheRecord;
use crate::icon::{extract_app_icon, CachedIcon};
use crate::search::{fuzzy_search, SearchResult};
use dirs::desktop_dir;
use log::{info, warn};
use lopdf::{content::Content, Document, Object};
use serde::Serialize;
use std::collections::{HashMap, HashSet};
use std::fs;
use std::io::Read;
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{LazyLock, Mutex};
use std::time::SystemTime;
use tauri::AppHandle;
use walkdir::WalkDir;
use zip::ZipArchive;

#[derive(Debug, Clone)]
struct DesktopFileInfo {
    id: String,
    title: String,
    content: String,
    icon: Option<String>,
    source_mtime: Option<u64>,
    size: Option<u64>,
    created: Option<String>,
    modified: Option<String>,
    last_indexed_at: u64,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DesktopFilePreview {
    pub preview_type: String,
    pub file_path: String,
    pub file_name: String,
    pub extension: String,
    pub text_content: Option<String>,
    pub image_url: Option<String>,
    pub size: u64,
    pub created: Option<String>,
    pub modified: Option<String>,
    pub truncated: bool,
    pub message: Option<String>,
}

static DESKTOP_FILES_CACHE: LazyLock<Mutex<Option<Vec<DesktopFileInfo>>>> =
    LazyLock::new(|| Mutex::new(None));
static DESKTOP_FILES_INITIALIZED: AtomicBool = AtomicBool::new(false);

pub fn invalidate_desktop_files_cache() {
    DESKTOP_FILES_INITIALIZED.store(false, Ordering::Release);
    invalidate_desktop_files_memory_cache();
}

pub fn invalidate_desktop_files_memory_cache() {
    if let Ok(mut cache) = DESKTOP_FILES_CACHE.lock() {
        *cache = None;
    }
}

fn desktop_file_icon_cache_key(path: &str) -> String {
    format!("desktop-file-icon:{}", path)
}

fn get_file_modified_timestamp(path: &Path) -> Option<u64> {
    path.metadata()
        .ok()
        .and_then(|meta| meta.modified().ok())
        .and_then(|modified| modified.duration_since(SystemTime::UNIX_EPOCH).ok())
        .map(|duration| duration.as_secs())
}

fn load_cached_desktop_file_icon(path: &Path) -> Option<String> {
    let path_str = path.to_string_lossy().to_string();
    let current_mtime = get_file_modified_timestamp(path);
    let Ok(Some(icon)) = db::get_icon_from_cache(&desktop_file_icon_cache_key(&path_str)) else {
        return None;
    };

    if icon.source_mtime == current_mtime {
        Some(icon.data)
    } else {
        None
    }
}

fn persist_desktop_file_icon(path: &Path, icon: &str) {
    let path_str = path.to_string_lossy().to_string();
    let cached_icon = CachedIcon {
        data: icon.to_string(),
        timestamp: SystemTime::now()
            .duration_since(SystemTime::UNIX_EPOCH)
            .unwrap_or_default()
            .as_secs(),
        source_mtime: get_file_modified_timestamp(path),
    };

    let _ = db::insert_icon_to_cache(&desktop_file_icon_cache_key(&path_str), &cached_icon);
}

fn resolve_desktop_file_icon(path: &Path) -> Option<String> {
    if !crate::icon::is_icon_cache_enabled() {
        return get_file_icon(path);
    }

    if let Some(icon) = load_cached_desktop_file_icon(path) {
        return Some(icon);
    }

    let path_str = path.to_string_lossy().to_string();
    let icon = extract_app_icon(&path_str).or_else(|| get_file_icon(path));
    if let Some(ref icon_data) = icon {
        persist_desktop_file_icon(path, icon_data);
    }

    icon
}

fn cleanup_missing_desktop_file_icons(current_paths: &[String]) {
    let Ok(cache) = db::load_all_icon_cache() else {
        return;
    };
    let current_paths = current_paths
        .iter()
        .map(String::as_str)
        .collect::<HashSet<_>>();

    for key in cache
        .keys()
        .filter(|key| key.starts_with("desktop-file-icon:"))
    {
        let path = key.trim_start_matches("desktop-file-icon:");
        if !current_paths.contains(path) {
            let _ = db::delete_icon_from_cache(key);
            crate::icon::remove_icon_cache_for_path(path);
        }
    }
}

fn is_supported_desktop_file(path: &Path) -> bool {
    const SUPPORTED_EXTENSIONS: &[&str] = &[
        "txt", "text", "md", "markdown", "png", "jpg", "jpeg", "gif", "webp", "bmp", "svg", "doc",
        "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "csv", "json", "yaml", "yml", "toml", "ini",
        "log", "zip", "rar", "7z",
    ];

    path.extension()
        .and_then(|ext| ext.to_str())
        .map(|ext| SUPPORTED_EXTENSIONS.contains(&ext.to_lowercase().as_str()))
        .unwrap_or(false)
}

fn get_file_icon(path: &Path) -> Option<String> {
    let extension = path
        .extension()
        .and_then(|ext| ext.to_str())?
        .to_lowercase();
    let icon = match extension.as_str() {
        "png" | "jpg" | "jpeg" | "gif" | "webp" | "bmp" | "svg" => "🖼️",
        "md" | "markdown" | "txt" | "text" | "log" => "📄",
        "doc" | "docx" => "📝",
        "xls" | "xlsx" | "csv" => "📊",
        "ppt" | "pptx" => "📽️",
        "pdf" => "📕",
        "json" | "yaml" | "yml" | "toml" | "ini" => "⚙️",
        "zip" | "rar" | "7z" => "🗜️",
        _ => "📁",
    };

    Some(icon.to_string())
}

fn build_desktop_file_info(path: &Path, include_icon: bool) -> Option<DesktopFileInfo> {
    if !path.is_file() || !is_supported_desktop_file(path) {
        return None;
    }
    let title = path.file_name()?.to_string_lossy().to_string();
    let content = path.to_string_lossy().to_string();
    let metadata = fs::metadata(path).ok();
    let size = metadata.as_ref().map(|value| value.len());
    let created = metadata
        .as_ref()
        .and_then(|value| value.created().ok())
        .and_then(system_time_to_iso);
    let modified = metadata
        .as_ref()
        .and_then(|value| value.modified().ok())
        .and_then(system_time_to_iso);
    let now = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();

    Some(DesktopFileInfo {
        id: format!("desktop-file:{}", content),
        title,
        content,
        icon: include_icon
            .then(|| resolve_desktop_file_icon(path))
            .flatten(),
        source_mtime: get_file_modified_timestamp(path),
        size,
        created,
        modified,
        last_indexed_at: now,
    })
}

fn scan_desktop_files() -> Vec<DesktopFileInfo> {
    let Some(desktop_path) = desktop_dir() else {
        warn!("未找到桌面目录，跳过桌面文件索引");
        return Vec::new();
    };

    let mut files = Vec::new();
    let mut current_paths = Vec::new();

    for entry in WalkDir::new(desktop_path)
        .max_depth(3)
        .follow_links(false)
        .into_iter()
        .filter_map(Result::ok)
    {
        if !entry.file_type().is_file() || !is_supported_desktop_file(entry.path()) {
            continue;
        }

        let path = entry.path();
        if let Some(file) = build_desktop_file_info(path, true) {
            current_paths.push(file.content.clone());
            files.push(file);
        }
    }

    cleanup_missing_desktop_file_icons(&current_paths);

    files
}

fn load_desktop_files() -> Vec<DesktopFileInfo> {
    if let Some(files) = load_desktop_files_from_db() {
        return files;
    }

    let files = scan_desktop_files();
    persist_desktop_files_cache(&files);
    files
}

fn persist_desktop_files_cache(files: &[DesktopFileInfo]) {
    let records = desktop_file_records(files);

    if let Err(e) = db::upsert_desktop_file_cache(&records) {
        warn!("保存桌面文件缓存失败: {}", e);
    }
}

fn desktop_file_records(files: &[DesktopFileInfo]) -> Vec<DesktopFileCacheRecord> {
    files
        .iter()
        .map(|file| DesktopFileCacheRecord {
            id: file.id.clone(),
            title: file.title.clone(),
            content: file.content.clone(),
            icon: file.icon.clone(),
            source_mtime: file.source_mtime,
            size: file.size,
            created: file.created.clone(),
            modified: file.modified.clone(),
            last_indexed_at: file.last_indexed_at,
        })
        .collect()
}

fn load_desktop_files_from_db() -> Option<Vec<DesktopFileInfo>> {
    let records = db::load_all_desktop_file_cache().ok()?;
    if records.is_empty() {
        return None;
    }

    Some(
        records
            .into_iter()
            .map(|record| DesktopFileInfo {
                id: record.id,
                title: record.title,
                content: record.content,
                icon: record.icon,
                source_mtime: record.source_mtime,
                size: record.size,
                created: record.created,
                modified: record.modified,
                last_indexed_at: record.last_indexed_at,
            })
            .collect(),
    )
}

fn set_desktop_files_memory_cache(files: Vec<DesktopFileInfo>) {
    if let Ok(mut cache) = DESKTOP_FILES_CACHE.lock() {
        *cache = Some(files);
    }
}

/// 启动时做轻量对账：只为新增或指纹变化的文件读取元数据/系统图标，
/// 未变化项直接复用数据库记录，不再“先清表 + 全量图标提取”。
pub fn initialize_desktop_files_cache_with_count() -> usize {
    if DESKTOP_FILES_INITIALIZED.swap(true, Ordering::AcqRel) {
        return load_desktop_files_from_db()
            .map(|files| files.len())
            .unwrap_or_default();
    }

    match reconcile_desktop_files_cache() {
        Ok(count) => count,
        Err(error) => {
            DESKTOP_FILES_INITIALIZED.store(false, Ordering::Release);
            warn!("增量校验桌面文件索引失败: {}", error);
            0
        }
    }
}

fn reconcile_desktop_files_cache() -> Result<usize, String> {
    db::ensure_plugin_storage("desktop-files").map_err(|e| e.to_string())?;
    let existing = load_desktop_files_from_db().unwrap_or_default();
    let existing_by_path = existing
        .into_iter()
        .map(|item| (item.content.clone(), item))
        .collect::<HashMap<_, _>>();

    let Some(desktop_path) = desktop_dir() else {
        return Ok(0);
    };
    let mut current = Vec::new();
    let mut changed = Vec::new();
    let mut seen = HashSet::new();

    for entry in WalkDir::new(desktop_path)
        .max_depth(3)
        .follow_links(false)
        .into_iter()
        .filter_map(Result::ok)
    {
        let path = entry.path();
        if !entry.file_type().is_file() || !is_supported_desktop_file(path) {
            continue;
        }
        let path_text = path.to_string_lossy().to_string();
        seen.insert(path_text.clone());
        let source_mtime = get_file_modified_timestamp(path);
        let size = path.metadata().ok().map(|metadata| metadata.len());
        if let Some(existing) = existing_by_path.get(&path_text) {
            if existing.source_mtime == source_mtime && existing.size == size {
                current.push(existing.clone());
                continue;
            }
        }
        if let Some(file) = build_desktop_file_info(path, true) {
            changed.push(file.clone());
            current.push(file);
        }
    }

    let removed_ids = existing_by_path
        .values()
        .filter(|item| !seen.contains(&item.content))
        .map(|item| item.id.clone())
        .collect::<Vec<_>>();
    if !removed_ids.is_empty() || !changed.is_empty() {
        db::apply_desktop_file_cache_changes(&desktop_file_records(&changed), &removed_ids)
            .map_err(|e| e.to_string())?;
    }

    let current_paths = current
        .iter()
        .map(|item| item.content.clone())
        .collect::<Vec<_>>();
    cleanup_missing_desktop_file_icons(&current_paths);
    let count = current.len();
    set_desktop_files_memory_cache(current);
    let _ = db::mark_index_success("desktop-files", 1, 1);
    Ok(count)
}

/// 应用文件监听器的变化集合，只更新受影响的行。
pub fn sync_desktop_file_changes(
    changed_paths: &[PathBuf],
    removed_paths: &[PathBuf],
) -> Result<(usize, usize), String> {
    db::ensure_plugin_storage("desktop-files").map_err(|e| e.to_string())?;
    let existing = load_desktop_files_from_db().unwrap_or_default();
    let mut removal_roots = removed_paths.to_vec();
    let mut updates = Vec::new();

    for path in changed_paths {
        if let Some(file) = build_desktop_file_info(path, true) {
            updates.push(file);
        } else if !path.exists() {
            removal_roots.push(path.clone());
        }
    }

    let removed_items = existing
        .iter()
        .filter(|item| {
            let item_path = Path::new(&item.content);
            removal_roots
                .iter()
                .any(|root| item_path == root || item_path.starts_with(root))
        })
        .cloned()
        .collect::<Vec<_>>();
    let removed_ids = removed_items
        .iter()
        .map(|item| item.id.clone())
        .collect::<Vec<_>>();

    if !removed_ids.is_empty() || !updates.is_empty() {
        db::apply_desktop_file_cache_changes(&desktop_file_records(&updates), &removed_ids)
            .map_err(|e| e.to_string())?;
    }
    for item in &removed_items {
        let key = desktop_file_icon_cache_key(&item.content);
        let _ = db::delete_icon_from_cache(&key);
        crate::icon::remove_icon_cache_for_path(&item.content);
    }

    set_desktop_files_memory_cache(load_desktop_files_from_db().unwrap_or_default());
    let _ = db::mark_index_success("desktop-files", 1, 1);
    Ok((updates.len(), removed_ids.len()))
}

pub fn refresh_missing_desktop_file_icons() -> usize {
    if !crate::icon::is_icon_cache_enabled() {
        return 0;
    }
    let mut files = load_desktop_files_from_db().unwrap_or_default();
    let mut changed = Vec::new();
    for file in &mut files {
        if file.icon.is_some() {
            continue;
        }
        let path = Path::new(&file.content);
        if let Some(icon) = resolve_desktop_file_icon(path) {
            file.icon = Some(icon);
            changed.push(file.clone());
        }
    }
    if !changed.is_empty() {
        if let Err(error) = db::upsert_desktop_file_cache(&desktop_file_records(&changed)) {
            warn!("重建桌面文件图标失败: {}", error);
            return 0;
        }
    }
    let count = changed.len();
    set_desktop_files_memory_cache(files);
    count
}

pub fn refresh_desktop_files_cache() {
    let _ = refresh_desktop_files_cache_with_count();
}

pub fn refresh_desktop_files_cache_with_count() -> usize {
    if let Err(e) = db::ensure_plugin_storage("desktop-files") {
        warn!("初始化桌面文件插件存储失败: {}", e);
        return 0;
    }

    let files = scan_desktop_files();
    let count = files.len();
    let records = desktop_file_records(&files);
    if let Err(e) = db::replace_desktop_file_cache(&records) {
        warn!("原子替换桌面文件缓存失败: {}", e);
        return 0;
    }
    if let Ok(mut cache) = DESKTOP_FILES_CACHE.lock() {
        *cache = Some(files);
    }
    DESKTOP_FILES_INITIALIZED.store(true, Ordering::Release);
    let _ = db::mark_index_success("desktop-files", 1, 1);
    count
}

pub fn clear_desktop_files_cache_for_reset(reset_type: &str) -> Result<(), String> {
    invalidate_desktop_files_cache();
    info!(
        "[Reset] type={} step=clear_desktop_files_memory_cache status=ok",
        reset_type
    );

    match db::clear_desktop_file_cache() {
        Ok(_) => {
            info!(
                "[Reset] type={} step=clear_desktop_files_db_cache status=ok",
                reset_type
            );
            Ok(())
        }
        Err(e) => {
            let detail = e.to_string();
            warn!(
                "[Reset] type={} step=clear_desktop_files_db_cache status=error detail={}",
                reset_type, detail
            );
            Err(format!("clear_desktop_files_db_cache failed: {}", detail))
        }
    }
}

#[tauri::command]
pub fn refresh_desktop_files_cache_cmd(app_handle: AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(&app_handle, "desktop-files")?;
    db::ensure_plugin_storage("desktop-files").map_err(|e| e.to_string())?;
    refresh_desktop_files_cache();
    Ok(())
}

#[tauri::command]
pub fn search_desktop_files(
    app_handle: AppHandle,
    query: String,
) -> Result<Vec<SearchResult>, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "desktop-files")?;
    db::ensure_plugin_storage("desktop-files").map_err(|e| e.to_string())?;

    let mut cache = DESKTOP_FILES_CACHE.lock().unwrap();
    if cache.is_none() {
        if let Some(files) = load_desktop_files_from_db() {
            *cache = Some(files);
        } else {
            let files = load_desktop_files();
            persist_desktop_files_cache(&files);
            *cache = Some(files);
        }
    }

    let files = cache.as_ref().unwrap();
    let results = fuzzy_search(
        files,
        &query,
        |file: &DesktopFileInfo| &file.title,
        |file: &DesktopFileInfo| &file.content,
    );

    Ok(results
        .into_iter()
        .take(20)
        .map(|(file, score)| {
            let file_path = file.content.clone();
            let size = file.size.unwrap_or_default();
            let created = file.created.clone();
            let modified = file.modified.clone();

            SearchResult {
                id: file.id,
                title: file.title,
                content: file.content,
                summarize: "file".to_string(),
                icon: file.icon.unwrap_or_default(),
                score,
                file_path: Some(file_path),
                metadata: Some(serde_json::json!({
                    "size": size,
                    "created": created,
                    "modified": modified,
                })),
            }
        })
        .collect())
}

fn file_extension(path: &Path) -> String {
    path.extension()
        .and_then(|s| s.to_str())
        .unwrap_or("")
        .to_lowercase()
}

fn is_text_preview_extension(ext: &str) -> bool {
    matches!(
        ext,
        "txt"
            | "text"
            | "md"
            | "markdown"
            | "json"
            | "yaml"
            | "yml"
            | "toml"
            | "ini"
            | "log"
            | "csv"
    )
}

fn is_image_preview_extension(ext: &str) -> bool {
    matches!(ext, "png" | "jpg" | "jpeg" | "gif" | "webp" | "bmp" | "svg")
}

fn is_document_preview_extension(ext: &str) -> bool {
    matches!(
        ext,
        "pdf" | "doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx"
    )
}

fn truncate_preview_text(text: String, max_chars: usize) -> (String, bool) {
    let truncated = text.chars().count() > max_chars;
    if truncated {
        (text.chars().take(max_chars).collect::<String>(), true)
    } else {
        (text, false)
    }
}

fn system_time_to_iso(time: SystemTime) -> Option<String> {
    let datetime = chrono::DateTime::<chrono::Utc>::from(time);
    Some(datetime.to_rfc3339())
}

fn extract_pdf_text(path: &Path) -> Result<String, String> {
    let document = Document::load(path).map_err(|e| format!("读取 PDF 失败: {}", e))?;
    let pages = document.get_pages();
    let mut full_text = String::new();

    for (_, page_id) in pages {
        let content_data = document
            .get_page_content(page_id)
            .map_err(|e| format!("读取 PDF 页面内容失败: {}", e))?;
        let content =
            Content::decode(&content_data).map_err(|e| format!("解析 PDF 页面内容失败: {}", e))?;

        for operation in content.operations {
            match operation.operator.as_str() {
                "Tj" | "'" | "\"" => {
                    if let Some(Object::String(bytes, _)) = operation.operands.first() {
                        full_text.push_str(&String::from_utf8_lossy(bytes));
                        full_text.push('\n');
                    }
                }
                "TJ" => {
                    if let Some(Object::Array(items)) = operation.operands.first() {
                        for item in items {
                            if let Object::String(bytes, _) = item {
                                full_text.push_str(&String::from_utf8_lossy(bytes));
                            }
                        }
                        full_text.push('\n');
                    }
                }
                _ => {}
            }
        }
    }

    let normalized = full_text
        .lines()
        .map(str::trim)
        .filter(|line| !line.is_empty())
        .collect::<Vec<_>>()
        .join("\n");

    Ok(normalized)
}

fn normalize_xml_text(mut text: String) -> Result<String, String> {
    let tag_re =
        regex::Regex::new(r"<[^>]+>").map_err(|e| format!("构建 XML 解析正则失败: {}", e))?;
    text = tag_re.replace_all(&text, "").to_string();

    let xml_entities = [
        ("&amp;", "&"),
        ("&lt;", "<"),
        ("&gt;", ">"),
        ("&quot;", "\""),
        ("&apos;", "'"),
    ];
    for (entity, value) in xml_entities {
        text = text.replace(entity, value);
    }

    Ok(text
        .lines()
        .map(str::trim)
        .filter(|line| !line.is_empty())
        .collect::<Vec<_>>()
        .join("\n"))
}

fn extract_docx_text(path: &Path) -> Result<String, String> {
    let file = fs::File::open(path).map_err(|e| format!("打开 DOCX 失败: {}", e))?;
    let mut archive = ZipArchive::new(file).map_err(|e| format!("解析 DOCX 失败: {}", e))?;
    let mut document_xml = String::new();

    archive
        .by_name("word/document.xml")
        .map_err(|e| format!("读取 DOCX 主文档失败: {}", e))?
        .read_to_string(&mut document_xml)
        .map_err(|e| format!("读取 DOCX 文本失败: {}", e))?;

    let text = document_xml
        .replace("</w:p>", "\n")
        .replace("</w:tr>", "\n")
        .replace("<w:tab/>", "\t");

    normalize_xml_text(text)
}

fn extract_xlsx_text(path: &Path) -> Result<String, String> {
    let file = fs::File::open(path).map_err(|e| format!("打开 XLSX 失败: {}", e))?;
    let mut archive = ZipArchive::new(file).map_err(|e| format!("解析 XLSX 失败: {}", e))?;

    let mut shared_strings = String::new();
    if let Ok(mut file) = archive.by_name("xl/sharedStrings.xml") {
        file.read_to_string(&mut shared_strings)
            .map_err(|e| format!("读取 XLSX sharedStrings 失败: {}", e))?;
    }

    let shared_text = if shared_strings.is_empty() {
        String::new()
    } else {
        shared_strings
            .replace("</si>", "\n")
            .replace("</t>", "\n")
            .replace("<rPh>", "")
    };

    normalize_xml_text(shared_text)
}

fn extract_pptx_text(path: &Path) -> Result<String, String> {
    let file = fs::File::open(path).map_err(|e| format!("打开 PPTX 失败: {}", e))?;
    let mut archive = ZipArchive::new(file).map_err(|e| format!("解析 PPTX 失败: {}", e))?;
    let mut texts = Vec::new();

    for index in 0..archive.len() {
        let mut entry = archive
            .by_index(index)
            .map_err(|e| format!("读取 PPTX 条目失败: {}", e))?;
        let name = entry.name().to_string();
        if name.starts_with("ppt/slides/slide") && name.ends_with(".xml") {
            let mut xml = String::new();
            entry
                .read_to_string(&mut xml)
                .map_err(|e| format!("读取 PPTX 幻灯片失败: {}", e))?;
            let normalized =
                normalize_xml_text(xml.replace("</a:p>", "\n").replace("</a:tr>", "\n"))?;
            if !normalized.is_empty() {
                texts.push(normalized);
            }
        }
    }

    Ok(texts.join("\n\n---\n\n"))
}

#[tauri::command]
pub fn preview_desktop_file(
    app_handle: AppHandle,
    file_path: String,
) -> Result<DesktopFilePreview, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "desktop-files")?;
    db::ensure_plugin_storage("desktop-files").map_err(|e| e.to_string())?;

    let path = Path::new(&file_path);
    if !path.exists() {
        return Err(format!("文件不存在: {}", file_path));
    }

    if !path.is_file() {
        return Err(format!("不是文件: {}", file_path));
    }

    let metadata = fs::metadata(path).map_err(|e| format!("读取文件元信息失败: {}", e))?;
    let size = metadata.len();
    let created = metadata.created().ok().and_then(system_time_to_iso);
    let modified = metadata.modified().ok().and_then(system_time_to_iso);

    let file_name = path
        .file_name()
        .and_then(|s| s.to_str())
        .unwrap_or("未知文件")
        .to_string();
    let extension = file_extension(path);

    if is_image_preview_extension(&extension) {
        let image_url = Some(file_path.clone());

        return Ok(DesktopFilePreview {
            preview_type: "image".to_string(),
            file_path,
            file_name,
            extension,
            text_content: None,
            image_url,
            size,
            created,
            modified,
            truncated: false,
            message: None,
        });
    }

    if is_text_preview_extension(&extension) {
        const MAX_PREVIEW_CHARS: usize = 30_000;
        let content = fs::read_to_string(path).map_err(|e| format!("读取文本文件失败: {}", e))?;
        let (text_content, truncated) = truncate_preview_text(content, MAX_PREVIEW_CHARS);

        return Ok(DesktopFilePreview {
            preview_type: "text".to_string(),
            file_path,
            file_name,
            extension,
            text_content: Some(text_content),
            image_url: None,
            size,
            created,
            modified: None,
            truncated,
            message: None,
        });
    }

    if is_document_preview_extension(&extension) {
        const MAX_PREVIEW_CHARS: usize = 30_000;

        if extension == "pdf" {
            let extracted = extract_pdf_text(path).unwrap_or_default();
            if !extracted.trim().is_empty() {
                let (text_content, truncated) = truncate_preview_text(extracted, MAX_PREVIEW_CHARS);
                return Ok(DesktopFilePreview {
                    preview_type: "document_text".to_string(),
                    file_path,
                    file_name,
                    extension,
                    text_content: Some(text_content),
                    image_url: None,
                    size,
                    created,
                    modified: None,
                    truncated,
                    message: Some("PDF 文本预览（Enter 可使用系统默认程序打开原文件）".to_string()),
                });
            }
        }

        if extension == "docx" {
            let extracted = extract_docx_text(path).unwrap_or_default();
            if !extracted.trim().is_empty() {
                let (text_content, truncated) = truncate_preview_text(extracted, MAX_PREVIEW_CHARS);
                return Ok(DesktopFilePreview {
                    preview_type: "document_text".to_string(),
                    file_path,
                    file_name,
                    extension,
                    text_content: Some(text_content),
                    image_url: None,
                    size,
                    created,
                    modified: None,
                    truncated,
                    message: Some(
                        "DOCX 文本预览（Enter 可使用系统默认程序打开原文件）".to_string(),
                    ),
                });
            }
        }

        if extension == "xlsx" {
            let extracted = extract_xlsx_text(path).unwrap_or_default();
            if !extracted.trim().is_empty() {
                let (text_content, truncated) = truncate_preview_text(extracted, MAX_PREVIEW_CHARS);
                return Ok(DesktopFilePreview {
                    preview_type: "document_text".to_string(),
                    file_path,
                    file_name,
                    extension,
                    text_content: Some(text_content),
                    image_url: None,
                    size,
                    created,
                    modified: None,
                    truncated,
                    message: Some(
                        "XLSX 文本预览（基于共享字符串抽取，Enter 可使用系统默认程序打开原文件）"
                            .to_string(),
                    ),
                });
            }
        }

        if extension == "pptx" {
            let extracted = extract_pptx_text(path).unwrap_or_default();
            if !extracted.trim().is_empty() {
                let (text_content, truncated) = truncate_preview_text(extracted, MAX_PREVIEW_CHARS);
                return Ok(DesktopFilePreview {
                    preview_type: "document_text".to_string(),
                    file_path,
                    file_name,
                    extension,
                    text_content: Some(text_content),
                    image_url: None,
                    size,
                    created,
                    modified: None,
                    truncated,
                    message: Some(
                        "PPTX 文本预览（按幻灯片抽取，Enter 可使用系统默认程序打开原文件）"
                            .to_string(),
                    ),
                });
            }
        }

        return Ok(DesktopFilePreview {
            preview_type: "document".to_string(),
            file_path,
            file_name,
            extension,
            text_content: None,
            image_url: None,
            size,
            created,
            modified: None,
            truncated: false,
            message: Some(
                "该文档暂不支持内嵌文本预览，按 Enter 可使用系统默认程序打开".to_string(),
            ),
        });
    }

    Ok(DesktopFilePreview {
        preview_type: "unsupported".to_string(),
        file_path,
        file_name,
        extension,
        text_content: None,
        image_url: None,
        size,
        created,
        modified,
        truncated: false,
        message: Some("该文件类型暂不支持快速预览".to_string()),
    })
}
