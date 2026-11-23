use crate::markdown::{AttachmentSettings, WorkspaceManager};
use base64::{engine::general_purpose, Engine as _};
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::{Path, PathBuf};
use std::sync::{Arc, RwLock};
use tauri::{command, Manager};

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct AttachmentConfig {
    pub path_template: String,
    pub filename_format: String,
    #[serde(default = "default_image_scale_percent")]
    pub default_image_scale_percent: u16,
    #[serde(default = "default_responsive_images")]
    pub responsive_images: bool,
    #[serde(default = "default_show_image_path")]
    pub show_image_path: bool,
}

fn default_image_scale_percent() -> u16 {
    100
}

fn default_responsive_images() -> bool {
    true
}

fn default_show_image_path() -> bool {
    true
}

fn normalize_filename_format(format: &str) -> &str {
    match format {
        "obsidian" => "snippets-code",
        other => other,
    }
}

impl From<&AttachmentSettings> for AttachmentConfig {
    fn from(settings: &AttachmentSettings) -> Self {
        Self {
            path_template: settings.path_template.clone(),
            filename_format: normalize_filename_format(&settings.filename_format).to_string(),
            default_image_scale_percent: settings.default_image_scale_percent.clamp(25, 200),
            responsive_images: settings.responsive_images,
            show_image_path: settings.show_image_path,
        }
    }
}

impl From<AttachmentConfig> for AttachmentSettings {
    fn from(config: AttachmentConfig) -> Self {
        Self {
            path_template: config.path_template,
            filename_format: normalize_filename_format(&config.filename_format).to_string(),
            default_image_scale_percent: config.default_image_scale_percent.clamp(25, 200),
            responsive_images: config.responsive_images,
            show_image_path: config.show_image_path,
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct AttachmentInfo {
    pub original_name: String,
    pub generated_name: String,
    pub relative_path: String,
    pub absolute_path: String,
    pub size: u64,
    pub mime_type: String,
}

/// 获取工作区根目录
fn get_workspace_root(app_handle: &tauri::AppHandle) -> Result<PathBuf, String> {
    crate::json_config::get_workspace_root(app_handle)?.ok_or_else(|| "工作区未设置".to_string())
}

/// 获取附件配置（从缓存的 WorkspaceManager 状态读取）
pub(crate) fn get_attachment_config_internal(
    app_handle: &tauri::AppHandle,
) -> Result<AttachmentSettings, String> {
    // 尝试从应用状态获取 WorkspaceManager
    if let Some(workspace_state) = app_handle.try_state::<Arc<RwLock<WorkspaceManager>>>() {
        let manager: std::sync::RwLockReadGuard<WorkspaceManager> = workspace_state
            .read()
            .map_err(|e| format!("Failed to acquire read lock: {}", e))?;
        Ok(manager.get_attachment_settings().clone())
    } else {
        // 如果状态不存在，回退到创建新实例（首次启动或未初始化的情况）
        let workspace_root = get_workspace_root(app_handle)?;
        let config_dir = workspace_root.join(".snippets-code");

        if !config_dir.exists() {
            fs::create_dir_all(&config_dir)
                .map_err(|e| format!("Failed to create config directory: {}", e))?;
        }

        let manager = WorkspaceManager::new(config_dir)?;
        Ok(manager.get_attachment_settings().clone())
    }
}

/// 保存附件配置（更新缓存的 WorkspaceManager 状态并持久化）
fn save_attachment_config_internal(
    app_handle: &tauri::AppHandle,
    config: AttachmentSettings,
) -> Result<(), String> {
    // 尝试从应用状态获取 WorkspaceManager
    if let Some(workspace_state) = app_handle.try_state::<Arc<RwLock<WorkspaceManager>>>() {
        let mut manager: std::sync::RwLockWriteGuard<WorkspaceManager> = workspace_state
            .write()
            .map_err(|e| format!("Failed to acquire write lock: {}", e))?;
        manager.update_attachment_settings(config);
        manager.save()
    } else {
        // 如果状态不存在，回退到创建新实例
        let workspace_root = get_workspace_root(app_handle)?;
        let config_dir = workspace_root.join(".snippets-code");

        if !config_dir.exists() {
            fs::create_dir_all(&config_dir)
                .map_err(|e| format!("Failed to create config directory: {}", e))?;
        }

        let mut manager = WorkspaceManager::new(config_dir)?;
        manager.update_attachment_settings(config);
        manager.save()
    }
}

/// 生成文件名
fn generate_filename(format: &str, original_name: &str) -> Result<String, String> {
    let extension = Path::new(original_name)
        .extension()
        .and_then(|s| s.to_str())
        .unwrap_or("png");

    let now = chrono::Local::now();

    match format {
        "snippets-code" | "obsidian" => Ok(format!(
            "Pasted image {}.{}",
            now.format("%Y%m%d%H%M%S"),
            extension
        )),
        "simple" => Ok(format!(
            "image-{}-{}.{}",
            now.format("%Y%m%d"),
            now.format("%H%M%S"),
            extension
        )),
        "uuid" => Ok(format!("{}.{}", uuid::Uuid::new_v4(), extension)),
        _ => Err("Invalid filename format".to_string()),
    }
}

/// 处理重复文件名
fn handle_duplicate_filename(dir: &Path, filename: &str) -> Result<String, String> {
    let path = dir.join(filename);

    if !path.exists() {
        return Ok(filename.to_string());
    }

    // 文件已存在，添加序号
    let stem = Path::new(filename)
        .file_stem()
        .and_then(|s| s.to_str())
        .ok_or("Invalid filename")?;

    let extension = Path::new(filename)
        .extension()
        .and_then(|s| s.to_str())
        .unwrap_or("");

    let mut counter = 1;
    loop {
        let new_name = if extension.is_empty() {
            format!("{}-{}", stem, counter)
        } else {
            format!("{}-{}.{}", stem, counter, extension)
        };

        let new_path = dir.join(&new_name);
        if !new_path.exists() {
            return Ok(new_name);
        }

        counter += 1;
        if counter > 1000 {
            return Err("Too many duplicate files".to_string());
        }
    }
}

/// 计算相对路径
fn calculate_relative_path(
    note_path: &str,
    attachment_path: &Path,
    workspace_root: &Path,
) -> Result<String, String> {
    let note_full_path = workspace_root.join(note_path);
    let note_dir = note_full_path.parent().ok_or("Invalid note path")?;

    let relative = pathdiff::diff_paths(attachment_path, note_dir)
        .ok_or("Failed to calculate relative path")?;

    // 转换为 Unix 风格路径（使用 /）
    Ok(relative.to_string_lossy().replace('\\', "/"))
}

/// 猜测 MIME 类型
fn guess_mime_type(filename: &str) -> String {
    let extension = Path::new(filename)
        .extension()
        .and_then(|s| s.to_str())
        .unwrap_or("");

    match extension.to_lowercase().as_str() {
        "png" => "image/png",
        "jpg" | "jpeg" => "image/jpeg",
        "gif" => "image/gif",
        "webp" => "image/webp",
        "bmp" => "image/bmp",
        "svg" => "image/svg+xml",
        _ => "application/octet-stream",
    }
    .to_string()
}

/// 保存图片附件
#[command]
pub async fn save_image_attachment(
    note_file_path: String,
    image_data: String,
    original_name: String,
    app_handle: tauri::AppHandle,
) -> Result<AttachmentInfo, String> {
    // 1. 获取工作区根目录
    let workspace_root = get_workspace_root(&app_handle)?;

    // 2. 获取附件配置
    let config = get_attachment_config_internal(&app_handle)?;

    save_image_attachment_in_workspace(
        &workspace_root,
        &config,
        &note_file_path,
        &image_data,
        original_name,
    )
}

fn save_image_attachment_in_workspace(
    workspace_root: &Path,
    config: &AttachmentSettings,
    note_file_path: &str,
    image_data: &str,
    original_name: String,
) -> Result<AttachmentInfo, String> {
    // 3. 提取笔记文件名（不含扩展名）
    let note_name = Path::new(note_file_path)
        .file_stem()
        .and_then(|s| s.to_str())
        .ok_or("Invalid note file path")?;

    // 4. 生成附件文件夹路径
    let attachment_dir =
        workspace_root.join(config.path_template.replace("${noteFileName}", note_name));

    // 5. 创建附件文件夹（如果不存在）
    fs::create_dir_all(&attachment_dir)
        .map_err(|e| format!("Failed to create attachment directory: {}", e))?;

    // 6. 生成文件名
    let generated_name = generate_filename(&config.filename_format, &original_name)?;

    // 7. 处理重复文件名
    let final_name = handle_duplicate_filename(&attachment_dir, &generated_name)?;

    // 8. 解码 Base64 并保存文件
    let image_bytes = general_purpose::STANDARD
        .decode(image_data)
        .map_err(|e| format!("Failed to decode base64: {}", e))?;

    let file_path = attachment_dir.join(&final_name);
    fs::write(&file_path, &image_bytes).map_err(|e| format!("Failed to write file: {}", e))?;

    // 9. 计算相对路径
    let relative_path = calculate_relative_path(note_file_path, &file_path, workspace_root)?;

    // 10. 返回附件信息
    Ok(AttachmentInfo {
        original_name,
        generated_name: final_name.clone(),
        relative_path,
        absolute_path: file_path.to_string_lossy().to_string(),
        size: image_bytes.len() as u64,
        mime_type: guess_mime_type(&final_name),
    })
}

#[derive(Debug, Clone, Serialize)]
pub(crate) struct AttachmentPathRename {
    pub from: String,
    pub to: String,
}

pub(crate) struct AttachmentRename {
    old_dir: PathBuf,
    new_dir: PathBuf,
    pub paths: Vec<AttachmentPathRename>,
}

impl AttachmentRename {
    pub fn prepare(
        workspace_root: &Path,
        config: &AttachmentSettings,
        old_note: &Path,
        new_note: &Path,
    ) -> Result<Option<Self>, String> {
        let old_name = old_note
            .file_stem()
            .and_then(|s| s.to_str())
            .ok_or("Invalid note path")?;
        let new_name = new_note
            .file_stem()
            .and_then(|s| s.to_str())
            .ok_or("Invalid note path")?;
        if old_name == new_name || !config.path_template.contains("${noteFileName}") {
            return Ok(None);
        }
        let old_dir =
            workspace_root.join(config.path_template.replace("${noteFileName}", old_name));
        let new_dir =
            workspace_root.join(config.path_template.replace("${noteFileName}", new_name));
        // Missing old directories can belong to notes renamed by a legacy client.
        // Keep their existing links rather than inventing a missing destination.
        if !old_dir.exists() || old_dir == new_dir {
            return Ok(None);
        }
        if new_dir.exists() {
            return Err(format!("附件目录已存在，未重命名: {}", new_dir.display()));
        }
        let from = format!(
            "{}/",
            calculate_relative_path(&old_note.to_string_lossy(), &old_dir, workspace_root)?
                .trim_end_matches('/')
        );
        let to = format!(
            "{}/",
            calculate_relative_path(&new_note.to_string_lossy(), &new_dir, workspace_root)?
                .trim_end_matches('/')
        );
        let encode = |path: &str| {
            path.split('/')
                .map(|part| urlencoding::encode(part).into_owned())
                .collect::<Vec<_>>()
                .join("/")
        };
        let encoded_from = encode(&from);
        let encoded_to = encode(&to);
        let mut paths = vec![AttachmentPathRename { from, to }];
        if encoded_from != paths[0].from {
            paths.push(AttachmentPathRename {
                from: encoded_from,
                to: encoded_to,
            });
        }
        Ok(Some(Self {
            old_dir,
            new_dir,
            paths,
        }))
    }

    pub fn rewrite(&self, content: &str) -> String {
        self.paths
            .iter()
            .fold(content.to_string(), |content, path| {
                content.replace(&path.from, &path.to)
            })
    }

    pub fn apply(&self) -> Result<(), String> {
        if self.new_dir.exists() {
            return Err(format!(
                "附件目录已存在，未重命名: {}",
                self.new_dir.display()
            ));
        }
        if let Some(parent) = self.new_dir.parent() {
            fs::create_dir_all(parent).map_err(|e| e.to_string())?;
        }
        fs::rename(&self.old_dir, &self.new_dir).map_err(|e| format!("重命名附件目录失败: {e}"))
    }

    pub fn rollback(&self) -> Result<(), String> {
        if self.old_dir.exists() {
            return Err(format!(
                "原附件目录已存在，附件保留于 {}",
                self.new_dir.display()
            ));
        }
        fs::rename(&self.new_dir, &self.old_dir).map_err(|e| format!("回滚附件目录失败: {e}"))
    }
}

/// 同步附件（保留旧插件的独立命令；编辑器保存由后端统一提交）
#[command]
pub async fn sync_attachments_on_rename(
    old_note_name: String,
    new_note_name: String,
    note_content: String,
    app_handle: tauri::AppHandle,
) -> Result<String, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    let config = get_attachment_config_internal(&app_handle)?;

    let old_note = workspace_root.join(format!("{old_note_name}.md"));
    let new_note = workspace_root.join(format!("{new_note_name}.md"));
    if let Some(rename) = AttachmentRename::prepare(&workspace_root, &config, &old_note, &new_note)?
    {
        rename.apply()?;
        Ok(rename.rewrite(&note_content))
    } else {
        Ok(note_content)
    }
}

/// 笔记删除时仅清理空附件目录；同名笔记或其他笔记可能仍引用其中的文件。
/// 返回是否实际移除了空目录。
#[command]
pub async fn cleanup_attachments_on_delete(
    note_name: String,
    app_handle: tauri::AppHandle,
) -> Result<bool, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    let config = get_attachment_config_internal(&app_handle)?;

    cleanup_note_attachments(&workspace_root, &config, &note_name)
}

fn cleanup_note_attachments(
    workspace_root: &Path,
    config: &AttachmentSettings,
    note_name: &str,
) -> Result<bool, String> {
    let attachment_dir =
        workspace_root.join(config.path_template.replace("${noteFileName}", note_name));

    if !attachment_dir.is_dir() {
        return Ok(false);
    }
    let root = workspace_root
        .canonicalize()
        .map_err(|e| format!("Failed to resolve workspace directory: {}", e))?;
    let target = attachment_dir
        .canonicalize()
        .map_err(|e| format!("Failed to resolve attachment directory: {}", e))?;
    if target == root || !target.starts_with(&root) {
        return Ok(false);
    }

    // A note name does not establish ownership, even for a default template.
    // remove_dir preserves all files and also rejects concurrent additions.
    match fs::remove_dir(&attachment_dir) {
        Ok(()) => Ok(true),
        Err(error) if error.kind() == std::io::ErrorKind::DirectoryNotEmpty => Ok(false),
        Err(error) if error.kind() == std::io::ErrorKind::NotFound => Ok(false),
        Err(error) => Err(format!(
            "Failed to remove empty attachment directory: {}",
            error
        )),
    }
}

/// 获取软删除目录路径
pub fn get_trash_dir(workspace_root: &Path) -> Result<PathBuf, String> {
    let trash_dir = workspace_root
        .join(".snippets-code")
        .join("deleted_attachments");
    if !trash_dir.exists() {
        fs::create_dir_all(&trash_dir)
            .map_err(|e| format!("Failed to create trash directory: {}", e))?;
    }
    Ok(trash_dir)
}

/// 清理未使用的附件（检测笔记内容中未引用的图片）
/// 注意：文件不会真正删除，而是移动到 .snippets-code/deleted_attachments/ 临时目录
/// 这样可以支持撤销删除后恢复
#[command]
pub async fn cleanup_unused_attachments(
    note_name: String,
    note_content: String,
    app_handle: tauri::AppHandle,
) -> Result<usize, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    let config = get_attachment_config_internal(&app_handle)?;

    // 计算附件文件夹路径
    let attachment_dir =
        workspace_root.join(config.path_template.replace("${noteFileName}", &note_name));

    if !attachment_dir.exists() {
        return Ok(0);
    }

    // 获取软删除目录
    let trash_dir = get_trash_dir(&workspace_root)?;

    // 确保笔记在软删除目录中有子目录
    let note_trash_dir = trash_dir.join(&note_name);
    if !note_trash_dir.exists() {
        fs::create_dir_all(&note_trash_dir)
            .map_err(|e| format!("Failed to create note trash directory: {}", e))?;
    }

    // 读取附件文件夹中的所有文件
    let entries: Vec<_> = fs::read_dir(&attachment_dir)
        .map_err(|e| format!("Failed to read attachment directory: {}", e))?
        .filter_map(|e| e.ok())
        .collect();

    let mut deleted_count = 0;

    for entry in entries {
        let file_name = entry.file_name();
        let file_name_str = file_name.to_string_lossy();

        // 检查文件名是否在笔记内容中被引用
        if !note_content.contains(&*file_name_str) {
            // 未被引用，移动到软删除目录而不是直接删除
            let source_path = entry.path();
            let target_path = note_trash_dir.join(&*file_name_str);

            // 如果目标已存在（之前也被标记为删除），先删除旧的
            if target_path.exists() {
                let _ = fs::remove_file(&target_path);
            }

            if let Err(e) = fs::rename(&source_path, &target_path) {
                // 如果重命名失败（可能是跨设备），尝试复制后删除
                log::warn!(
                    "Failed to move attachment to trash (rename): {}, trying copy",
                    e
                );
                if let Err(e2) = fs::copy(&source_path, &target_path) {
                    log::warn!("Failed to move attachment to trash (copy): {}", e2);
                } else if let Err(e2) = fs::remove_file(&source_path) {
                    log::warn!("Failed to delete original after copy: {}", e2);
                } else {
                    deleted_count += 1;
                }
            } else {
                deleted_count += 1;
                log::info!(
                    "Soft-deleted attachment: {} -> {}",
                    source_path.display(),
                    target_path.display()
                );
            }
        }
    }

    // 如果文件夹为空，删除文件夹
    if let Ok(entries) = fs::read_dir(&attachment_dir) {
        if entries.count() == 0 {
            let _ = fs::remove_dir(&attachment_dir);
        }
    }

    Ok(deleted_count)
}

/// 从软删除目录恢复被误删的附件
/// 当检测到笔记内容中引用了某个附件但该附件不存在时调用此函数
#[command]
pub async fn restore_deleted_attachment(
    note_name: String,
    file_name: String,
    app_handle: tauri::AppHandle,
) -> Result<bool, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    let config = get_attachment_config_internal(&app_handle)?;

    // 计算目标附件文件夹路径
    let attachment_dir =
        workspace_root.join(config.path_template.replace("${noteFileName}", &note_name));

    // 确保目标目录存在
    if !attachment_dir.exists() {
        fs::create_dir_all(&attachment_dir)
            .map_err(|e| format!("Failed to create attachment directory: {}", e))?;
    }

    // 从软删除目录查找文件
    let trash_dir = get_trash_dir(&workspace_root)?;
    let note_trash_dir = trash_dir.join(&note_name);
    let source_path = note_trash_dir.join(&file_name);

    if !source_path.exists() {
        log::warn!("File not found in trash: {}", source_path.display());
        return Ok(false);
    }

    let target_path = attachment_dir.join(&file_name);

    // 如果目标已存在，不需要恢复
    if target_path.exists() {
        log::info!(
            "File already exists, no need to restore: {}",
            target_path.display()
        );
        // 清理软删除目录中的副本
        let _ = fs::remove_file(&source_path);
        return Ok(true);
    }

    // 恢复文件
    if let Err(e) = fs::rename(&source_path, &target_path) {
        // 如果重命名失败（可能是跨设备），尝试复制后删除
        log::warn!("Failed to restore attachment (rename): {}, trying copy", e);
        fs::copy(&source_path, &target_path)
            .map_err(|e| format!("Failed to copy attachment: {}", e))?;
        fs::remove_file(&source_path).map_err(|e| format!("Failed to delete trash file: {}", e))?;
    }

    log::info!(
        "Restored attachment: {} -> {}",
        source_path.display(),
        target_path.display()
    );

    // 如果软删除目录为空，删除它
    if let Ok(entries) = fs::read_dir(&note_trash_dir) {
        if entries.count() == 0 {
            let _ = fs::remove_dir(&note_trash_dir);
        }
    }

    Ok(true)
}

/// 恢复笔记的所有被软删除的附件
#[command]
pub async fn restore_all_deleted_attachments(
    note_name: String,
    note_content: String,
    app_handle: tauri::AppHandle,
) -> Result<usize, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    let config = get_attachment_config_internal(&app_handle)?;

    // 计算目标附件文件夹路径
    let attachment_dir =
        workspace_root.join(config.path_template.replace("${noteFileName}", &note_name));

    // 获取软删除目录
    let trash_dir = get_trash_dir(&workspace_root)?;
    let note_trash_dir = trash_dir.join(&note_name);

    if !note_trash_dir.exists() {
        return Ok(0);
    }

    // 确保目标目录存在
    if !attachment_dir.exists() {
        fs::create_dir_all(&attachment_dir)
            .map_err(|e| format!("Failed to create attachment directory: {}", e))?;
    }

    // 读取软删除目录中的所有文件
    let entries: Vec<_> = fs::read_dir(&note_trash_dir)
        .map_err(|e| format!("Failed to read trash directory: {}", e))?
        .filter_map(|e| e.ok())
        .collect();

    let mut restored_count = 0;

    for entry in entries {
        let file_name = entry.file_name();
        let file_name_str = file_name.to_string_lossy();

        // 检查文件名是否在笔记内容中被引用
        if note_content.contains(&*file_name_str) {
            let source_path = entry.path();
            let target_path = attachment_dir.join(&*file_name_str);

            // 如果目标已存在，跳过
            if target_path.exists() {
                let _ = fs::remove_file(&source_path);
                continue;
            }

            // 恢复文件
            if let Err(e) = fs::rename(&source_path, &target_path) {
                log::warn!("Failed to restore attachment (rename): {}, trying copy", e);
                if fs::copy(&source_path, &target_path).is_ok() {
                    let _ = fs::remove_file(&source_path);
                    restored_count += 1;
                }
            } else {
                restored_count += 1;
                log::info!(
                    "Restored attachment: {} -> {}",
                    source_path.display(),
                    target_path.display()
                );
            }
        }
    }

    // 如果软删除目录为空，删除它
    if let Ok(entries) = fs::read_dir(&note_trash_dir) {
        if entries.count() == 0 {
            let _ = fs::remove_dir(&note_trash_dir);
        }
    }

    Ok(restored_count)
}

/// 删除所有软删除的附件（Config 窗口关闭时调用）
/// 不管是否有撤销，直接删除整个 deleted_attachments 临时目录
#[command]
pub async fn delete_all_trash_attachments(app_handle: tauri::AppHandle) -> Result<usize, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    let trash_dir = get_trash_dir(&workspace_root)?;

    if !trash_dir.exists() {
        return Ok(0);
    }

    // 计算文件总数
    let mut file_count = 0;
    if let Ok(entries) = fs::read_dir(&trash_dir) {
        for entry in entries.filter_map(|e| e.ok()) {
            if entry.path().is_dir() {
                if let Ok(sub_entries) = fs::read_dir(entry.path()) {
                    file_count += sub_entries.filter_map(|e| e.ok()).count();
                }
            }
        }
    }

    // 删除整个目录
    if let Err(e) = fs::remove_dir_all(&trash_dir) {
        log::warn!("Failed to delete trash directory: {}", e);
        return Err(format!("Failed to delete trash directory: {}", e));
    }

    log::info!("Deleted all trash attachments: {} files", file_count);
    Ok(file_count)
}

/// 获取附件配置
#[command]
pub async fn get_attachment_config(
    app_handle: tauri::AppHandle,
) -> Result<AttachmentConfig, String> {
    let settings = get_attachment_config_internal(&app_handle)?;
    Ok(AttachmentConfig::from(&settings))
}

/// 更新附件配置
#[command]
pub async fn update_attachment_config(
    config: AttachmentConfig,
    app_handle: tauri::AppHandle,
) -> Result<(), String> {
    let settings = AttachmentSettings::from(config);
    save_attachment_config_internal(&app_handle, settings)?;
    crate::sync_data::materialize_local_config_change_best_effort(&app_handle, "附件设置");
    Ok(())
}

fn remove_orphaned_attachment_directory(
    path: &Path,
    note_names: &std::collections::HashSet<String>,
) -> std::io::Result<bool> {
    if !path.is_dir() {
        return Ok(false);
    }
    let Some(folder_name) = path.file_name().and_then(|name| name.to_str()) else {
        return Ok(false);
    };
    if folder_name.starts_with('.')
        || folder_name.starts_with('_')
        || note_names.contains(folder_name)
    {
        return Ok(false);
    }
    // A renamed/copied note can still reference this directory by its old name.
    // Remove only an empty directory; the OS also rejects a concurrent addition.
    match fs::remove_dir(path) {
        Ok(()) => Ok(true),
        Err(error) if error.kind() == std::io::ErrorKind::DirectoryNotEmpty => Ok(false),
        Err(error) => Err(error),
    }
}

/// 仅清理没有对应笔记的空附件目录。
/// 目录名不能证明附件已无引用；包含文件的目录交由显式清理流程处理。
#[command]
pub async fn cleanup_orphaned_attachments(app_handle: tauri::AppHandle) -> Result<usize, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    let config = get_attachment_config_internal(&app_handle)?;

    // 获取附件模板的基础目录，例如：
    // - "assets/${noteFileName}/" -> "<workspace_root>/assets"
    // - ".assets/${noteFileName}/" -> "<workspace_root>/.assets"
    let template_parts: Vec<&str> = config
        .path_template
        .split('/')
        .filter(|s| !s.is_empty())
        .collect();

    let attachment_base = if template_parts.is_empty() {
        workspace_root.clone()
    } else {
        let mut base = workspace_root.clone();
        for part in template_parts
            .iter()
            .take_while(|p| !p.contains("${noteFileName}"))
        {
            base = base.join(part);
        }
        base
    };

    if !attachment_base.exists() {
        return Ok(0);
    }

    // 为了避免误删，先扫描整个工作区中所有 Markdown 文件，
    // 收集它们的文件名（不含扩展名）作为合法笔记名称集合。
    use std::collections::HashSet;

    fn collect_note_names(dir: &Path, names: &mut HashSet<String>) {
        if let Ok(entries) = fs::read_dir(dir) {
            for entry in entries.flatten() {
                let path = entry.path();
                if path.is_dir() {
                    collect_note_names(&path, names);
                } else if path
                    .extension()
                    .and_then(|s| s.to_str())
                    .map(|ext| ext.eq_ignore_ascii_case("md"))
                    .unwrap_or(false)
                {
                    if let Some(stem) = path.file_stem().and_then(|s| s.to_str()) {
                        names.insert(stem.to_string());
                    }
                }
            }
        }
    }

    let mut note_names: HashSet<String> = HashSet::new();
    collect_note_names(&workspace_root, &mut note_names);
    // Retained notes still need their attachments for preview and restoration.
    // Abort cleanup if the recycle bin cannot be read, rather than lose images.
    for note in crate::markdown::trash::list_deleted_notes(&app_handle, &workspace_root)? {
        if let Some(stem) = Path::new(&note.original_path)
            .file_stem()
            .and_then(|s| s.to_str())
        {
            note_names.insert(stem.to_string());
        }
    }

    let mut deleted_count = 0;

    // 遍历附件基础目录下的所有文件夹
    if let Ok(entries) = fs::read_dir(&attachment_base) {
        for entry in entries.flatten() {
            let path = entry.path();
            match remove_orphaned_attachment_directory(&path, &note_names) {
                Ok(true) => {
                    log::info!("🗑️ [Attachment] 删除孤立附件文件夹: {}", path.display());
                    deleted_count += 1;
                }
                Ok(false) => {}
                Err(e) => {
                    log::warn!("⚠️ [Attachment] 删除孤立附件失败 {}: {}", path.display(), e);
                }
            }
        }
    }

    Ok(deleted_count)
}

/// 文件监控只清理空附件目录，保留可能被其他笔记或恢复操作使用的文件。
pub async fn cleanup_attachments_for_deleted_files(
    app_handle: &tauri::AppHandle,
    deleted_files: &[String],
) -> Result<usize, String> {
    let workspace_root = get_workspace_root(app_handle)?;
    let config = get_attachment_config_internal(app_handle)?;

    let mut deleted_count = 0;

    for file_path in deleted_files {
        // 将 String 转换为 PathBuf，然后转换为相对路径
        let path_buf = PathBuf::from(file_path);
        let relative_path = match path_buf.strip_prefix(&workspace_root) {
            Ok(p) => p.to_string_lossy().replace('\\', "/"),
            Err(_) => continue,
        };

        // 获取笔记文件名（不含扩展名）
        let note_name = Path::new(&relative_path)
            .file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("");

        if note_name.is_empty() {
            continue;
        }

        match cleanup_note_attachments(&workspace_root, &config, note_name) {
            Ok(true) => {
                log::info!("🗑️ [Attachment] 文件删除时清理空附件目录: {}", note_name);
                deleted_count += 1;
            }
            Ok(false) => {}
            Err(e) => {
                log::warn!("⚠️ [Attachment] 清理附件失败 {}: {}", note_name, e);
            }
        }
    }

    Ok(deleted_count)
}

/// 使用文件监控捕获的工作区和配置同步附件，避免延迟任务读取到新工作区。
pub(crate) fn sync_attachments_for_renamed_files_in_workspace(
    workspace_root: &Path,
    config: &AttachmentSettings,
    renamed_files: &[(String, String)],
) -> Result<usize, String> {
    let mut synced_count = 0;
    let belongs_to_workspace = |path: &Path| {
        path.is_absolute()
            && path
                .strip_prefix(workspace_root)
                .ok()
                .is_some_and(|relative| {
                    !relative.as_os_str().is_empty()
                        && relative
                            .components()
                            .all(|component| matches!(component, std::path::Component::Normal(_)))
                })
    };

    for (old_path, new_path) in renamed_files {
        if !belongs_to_workspace(Path::new(old_path)) || !belongs_to_workspace(Path::new(new_path))
        {
            continue;
        }
        // 获取旧笔记文件名（不含扩展名）
        let old_note_name = Path::new(old_path)
            .file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("");

        // 获取新笔记文件名（不含扩展名）
        let new_note_name = Path::new(new_path)
            .file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("");

        if old_note_name.is_empty() || new_note_name.is_empty() || old_note_name == new_note_name {
            continue;
        }

        // 计算旧附件文件夹路径
        let old_attachment_dir = workspace_root.join(
            config
                .path_template
                .replace("${noteFileName}", old_note_name),
        );

        // 计算新附件文件夹路径
        let new_attachment_dir = workspace_root.join(
            config
                .path_template
                .replace("${noteFileName}", new_note_name),
        );

        // 如果旧附件文件夹存在，重命名到新位置
        if old_attachment_dir.exists() && !new_attachment_dir.exists() {
            match fs::rename(&old_attachment_dir, &new_attachment_dir) {
                Ok(_) => {
                    log::info!(
                        "🔄 [Attachment] 文件重命名时同步附件: {} -> {}",
                        old_note_name,
                        new_note_name
                    );
                    synced_count += 1;
                }
                Err(e) => {
                    log::warn!(
                        "⚠️ [Attachment] 同步附件失败 {} -> {}: {}",
                        old_note_name,
                        new_note_name,
                        e
                    );
                }
            }
        }
    }

    Ok(synced_count)
}
