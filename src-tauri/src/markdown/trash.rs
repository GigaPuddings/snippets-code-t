//! Local recycle bin for Markdown notes. Entries live in app data, outside the
//! workspace and Git repository, so search and file watchers cannot index them.

use crate::markdown::metadata::try_parse_front_matter;
use chrono::Utc;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs::{self, File, OpenOptions};
use std::io;
use std::path::{Component, Path, PathBuf};
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Mutex, OnceLock};
use std::time::{Duration, Instant};
use tauri::{AppHandle, Manager};

static NEXT_ID: AtomicU64 = AtomicU64::new(0);
static SOFT_DELETES: OnceLock<Mutex<HashMap<PathBuf, Instant>>> = OnceLock::new();

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeletedNote {
    pub id: String,
    pub title: String,
    pub original_path: String,
    pub deleted_at: String,
}

fn workspace_key(workspace_root: &Path) -> Result<String, String> {
    let canonical = workspace_root
        .canonicalize()
        .map_err(|e| format!("无法读取工作区路径: {}", e))?;
    let mut hash = 0xcbf29ce484222325u64;
    for byte in canonical.to_string_lossy().to_lowercase().bytes() {
        hash ^= u64::from(byte);
        hash = hash.wrapping_mul(0x100000001b3);
    }
    Ok(format!("{hash:016x}"))
}

fn trash_root(app_handle: &AppHandle, workspace_root: &Path) -> Result<PathBuf, String> {
    let data_dir = app_handle
        .path()
        .app_data_dir()
        .map_err(|e| format!("无法获取应用数据目录: {}", e))?;
    Ok(data_dir
        .join("deleted-notes")
        .join(workspace_key(workspace_root)?))
}

fn valid_relative_note_path(relative: &Path) -> bool {
    !relative.is_absolute()
        && relative.extension().and_then(|ext| ext.to_str()) == Some("md")
        && relative
            .components()
            .all(|part| matches!(part, Component::Normal(_)))
}

fn entry_dir(root: &Path, id: &str) -> Result<PathBuf, String> {
    if id.is_empty() || !id.bytes().all(|byte| byte.is_ascii_digit()) {
        return Err("无效的回收站条目".to_string());
    }
    Ok(root.join(id))
}

fn read_entry(dir: &Path) -> Result<DeletedNote, String> {
    let raw = fs::read_to_string(dir.join("metadata.json"))
        .map_err(|e| format!("读取回收站记录失败: {}", e))?;
    serde_json::from_str(&raw).map_err(|e| format!("解析回收站记录失败: {}", e))
}

fn mark_soft_deleted(path: &Path) {
    let entries = SOFT_DELETES.get_or_init(|| Mutex::new(HashMap::new()));
    if let Ok(mut entries) = entries.lock() {
        entries.retain(|_, at| at.elapsed() < Duration::from_secs(30));
        entries.insert(path.to_path_buf(), Instant::now());
    }
}

/// The watcher must not remove attachments for a note moved to the recycle bin.
pub fn was_soft_deleted(path: &Path) -> bool {
    let canonical_parent_path = path
        .parent()
        .and_then(|parent| parent.canonicalize().ok())
        .and_then(|parent| path.file_name().map(|name| parent.join(name)));
    SOFT_DELETES
        .get()
        .and_then(|entries| entries.lock().ok())
        .is_some_and(|entries| {
            let recent = |candidate: &Path| {
                entries
                    .get(candidate)
                    .is_some_and(|at| at.elapsed() < Duration::from_secs(30))
            };
            recent(path) || canonical_parent_path.as_deref().is_some_and(recent)
        })
}

pub fn soft_delete_note(
    app_handle: &AppHandle,
    workspace_root: &Path,
    file_path: &Path,
) -> Result<(), String> {
    let root = trash_root(app_handle, workspace_root)?;
    soft_delete_into(&root, workspace_root, file_path)
}

fn soft_delete_into(root: &Path, workspace_root: &Path, file_path: &Path) -> Result<(), String> {
    let workspace = workspace_root
        .canonicalize()
        .map_err(|e| format!("无法读取工作区路径: {}", e))?;
    let source = if file_path.is_absolute() {
        file_path.to_path_buf()
    } else {
        workspace.join(file_path)
    };
    let source = source
        .canonicalize()
        .map_err(|e| format!("无法读取笔记文件: {}", e))?;
    let relative = source
        .strip_prefix(&workspace)
        .map_err(|_| "笔记文件必须位于当前工作区".to_string())?;
    if !valid_relative_note_path(relative) || !source.is_file() {
        return Err("只能回收工作区中的 Markdown 笔记".to_string());
    }

    fs::create_dir_all(&root).map_err(|e| format!("创建回收站失败: {}", e))?;
    let id = format!(
        "{}{}",
        Utc::now().timestamp_micros(),
        NEXT_ID.fetch_add(1, Ordering::Relaxed)
    );
    let dir = entry_dir(&root, &id)?;
    fs::create_dir(&dir).map_err(|e| format!("创建回收站条目失败: {}", e))?;

    let result = (|| {
        let raw = fs::read_to_string(&source).map_err(|e| format!("读取笔记内容失败: {}", e))?;
        let (frontmatter, _) = try_parse_front_matter(&raw);
        let title = frontmatter
            .map(|metadata| metadata.title)
            .unwrap_or_else(|| {
                source
                    .file_stem()
                    .and_then(|stem| stem.to_str())
                    .unwrap_or("Untitled")
                    .to_string()
            });
        let entry = DeletedNote {
            id,
            title,
            original_path: relative.to_string_lossy().replace('\\', "/"),
            deleted_at: Utc::now().to_rfc3339(),
        };
        fs::write(
            dir.join("metadata.json"),
            serde_json::to_vec(&entry).map_err(|e| e.to_string())?,
        )
        .map_err(|e| format!("保存回收站记录失败: {}", e))?;
        let backup = dir.join("note.md");
        fs::copy(&source, &backup).map_err(|e| format!("备份笔记失败: {}", e))?;
        OpenOptions::new()
            .write(true)
            .open(&backup)
            .and_then(|file| file.sync_all())
            .map_err(|e| format!("保存笔记备份失败: {}", e))?;
        mark_soft_deleted(&source);
        mark_soft_deleted(&workspace_root.join(relative));
        fs::remove_file(&source).map_err(|e| format!("移除原笔记失败: {}", e))?;
        Ok::<(), String>(())
    })();
    if result.is_err() {
        let _ = fs::remove_dir_all(&dir);
    }
    result
}

pub fn list_deleted_notes(
    app_handle: &AppHandle,
    workspace_root: &Path,
) -> Result<Vec<DeletedNote>, String> {
    let root = trash_root(app_handle, workspace_root)?;
    if !root.exists() {
        return Ok(Vec::new());
    }
    let mut entries = Vec::new();
    for item in fs::read_dir(&root).map_err(|e| format!("读取回收站失败: {}", e))? {
        let item = item.map_err(|e| e.to_string())?;
        if item.path().is_dir() {
            if let Ok(entry) = read_entry(&item.path()) {
                entries.push(entry);
            }
        }
    }
    entries.sort_by(|a, b| b.deleted_at.cmp(&a.deleted_at));
    Ok(entries)
}

pub fn restore_deleted_note(
    app_handle: &AppHandle,
    workspace_root: &Path,
    id: &str,
) -> Result<PathBuf, String> {
    let root = trash_root(app_handle, workspace_root)?;
    restore_from(&root, workspace_root, id)
}

fn restore_from(root: &Path, workspace_root: &Path, id: &str) -> Result<PathBuf, String> {
    let workspace = workspace_root
        .canonicalize()
        .map_err(|e| format!("无法读取工作区路径: {}", e))?;
    let dir = entry_dir(&root, id)?;
    let entry = read_entry(&dir)?;
    if entry.id != id {
        return Err("回收站记录不匹配".to_string());
    }
    let relative = Path::new(&entry.original_path);
    if !valid_relative_note_path(relative) {
        return Err("回收站中的原路径无效".to_string());
    }
    let destination = workspace.join(relative);
    if destination.exists() {
        return Err("原位置已有同名文件，请先处理该文件".to_string());
    }
    let parent = destination.parent().ok_or("原路径无效")?;
    fs::create_dir_all(parent).map_err(|e| format!("创建原目录失败: {}", e))?;
    let canonical_parent = parent
        .canonicalize()
        .map_err(|e| format!("检查原目录失败: {}", e))?;
    if !canonical_parent.starts_with(&workspace) {
        return Err("恢复路径必须位于当前工作区".to_string());
    }
    let mut source =
        File::open(dir.join("note.md")).map_err(|e| format!("读取回收站笔记失败: {}", e))?;
    let mut target = OpenOptions::new()
        .write(true)
        .create_new(true)
        .open(&destination)
        .map_err(|e| format!("创建恢复文件失败: {}", e))?;
    if let Err(error) = io::copy(&mut source, &mut target) {
        drop(target);
        let _ = fs::remove_file(&destination);
        return Err(format!("恢复笔记失败: {}", error));
    }
    if let Err(error) = target.sync_all() {
        drop(target);
        let _ = fs::remove_file(&destination);
        return Err(format!("保存恢复文件失败: {}", error));
    }
    drop(target);
    if let Err(error) = fs::remove_dir_all(&dir) {
        // 原文件已经完整恢复，清理失败不应让前端误以为恢复失败。
        let _ = fs::remove_file(dir.join("metadata.json"));
        log::warn!("笔记已恢复，但清理回收站副本失败: {}", error);
    }
    // Keep the configured workspace spelling for the API, cache and editor.
    // On Windows canonicalization adds a \\?\ prefix (and resolves junctions),
    // which no longer matches workspace_root in their strip_prefix calls.
    // The actual restore above still uses the checked canonical destination.
    Ok(workspace_root.join(relative))
}

#[cfg(test)]
mod tests {
    use super::*;

    fn test_root() -> PathBuf {
        let path = std::env::temp_dir().join(format!(
            "snippets-note-trash-test-{}-{}",
            std::process::id(),
            NEXT_ID.fetch_add(1, Ordering::Relaxed)
        ));
        fs::create_dir_all(&path).unwrap();
        path
    }

    #[test]
    fn preserves_exact_note_bytes_and_rejects_restore_conflicts() {
        let root = test_root();
        let workspace = root.join("workspace");
        let trash = root.join("trash");
        let notes = workspace.join("Notes");
        fs::create_dir_all(&notes).unwrap();
        let path = notes.join("example.md");
        let bytes = b"---\ntitle: Example\n---\n\n# Body\r\nline 2\n";
        fs::write(&path, bytes).unwrap();

        soft_delete_into(&trash, &workspace, &path).unwrap();
        assert!(!path.exists());
        let dir = fs::read_dir(&trash)
            .unwrap()
            .next()
            .unwrap()
            .unwrap()
            .path();
        let entry = read_entry(&dir).unwrap();
        assert_eq!(fs::read(dir.join("note.md")).unwrap(), bytes);

        fs::write(&path, b"new file").unwrap();
        assert!(restore_from(&trash, &workspace, &entry.id).is_err());
        assert_eq!(fs::read(&path).unwrap(), b"new file");
        fs::remove_file(&path).unwrap();

        let restored = restore_from(&trash, &workspace, &entry.id).unwrap();
        assert_eq!(restored, path);
        assert_eq!(
            super::super::file_ops::get_relative_path(&workspace, &restored).unwrap(),
            "Notes/example.md"
        );
        assert_eq!(fs::read(&path).unwrap(), bytes);
        assert!(!dir.exists());
        fs::remove_dir_all(root).unwrap();
    }

    #[test]
    fn rejects_paths_outside_workspace_and_traversal_ids() {
        let root = test_root();
        let workspace = root.join("workspace");
        fs::create_dir_all(&workspace).unwrap();
        let outside = root.join("outside.md");
        fs::write(&outside, b"outside").unwrap();
        assert!(soft_delete_into(&root.join("trash"), &workspace, &outside).is_err());
        assert!(outside.exists());
        assert!(entry_dir(&root, "../outside.md").is_err());
        fs::remove_dir_all(root).unwrap();
    }
}
