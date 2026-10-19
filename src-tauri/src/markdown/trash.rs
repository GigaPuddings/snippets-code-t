//! Local recycle bin for Markdown notes. Entries live in app data, outside the
//! workspace and Git repository, so search and file watchers cannot index them.

use crate::markdown::metadata::try_parse_front_matter;
use chrono::{DateTime, Utc};
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
static TRASH_ACCESS: Mutex<()> = Mutex::new(());
const RETENTION_DAYS: i64 = 30;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DeletedNote {
    pub id: String,
    pub title: String,
    pub original_path: String,
    pub deleted_at: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub expires_at: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct DeletedNoteContent {
    pub content: String,
    #[serde(rename = "type")]
    pub file_type: String,
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
    let directory = fs::symlink_metadata(dir).map_err(|e| e.to_string())?;
    if !directory.is_dir() || directory.file_type().is_symlink() {
        return Err("回收站条目必须是本地目录".to_string());
    }
    crate::json_config::recover_atomic_file(&dir.join("metadata.json"))?;
    checked_file(&dir.join("metadata.json"))?;
    let raw = fs::read_to_string(dir.join("metadata.json"))
        .map_err(|e| format!("读取回收站记录失败: {}", e))?;
    let entry: DeletedNote =
        serde_json::from_str(&raw).map_err(|e| format!("解析回收站记录失败: {}", e))?;
    if dir.file_name().and_then(|name| name.to_str()) != Some(&entry.id)
        || !valid_relative_note_path(Path::new(&entry.original_path))
    {
        return Err("回收站记录与原路径不匹配".to_string());
    }
    Ok(entry)
}

fn checked_file(path: &Path) -> Result<(), String> {
    let metadata = fs::symlink_metadata(path).map_err(|e| e.to_string())?;
    if !metadata.is_file() || metadata.file_type().is_symlink() {
        return Err("回收站文件不可用".to_string());
    }
    Ok(())
}

fn ensure_expiration(
    dir: &Path,
    entry: &mut DeletedNote,
    now: DateTime<Utc>,
) -> Result<DateTime<Utc>, String> {
    if let Some(expires) = entry
        .expires_at
        .as_deref()
        .and_then(|value| DateTime::parse_from_rfc3339(value).ok())
    {
        return Ok(expires.with_timezone(&Utc));
    }
    // Existing entries get a full grace period when first read after upgrading.
    let expires = now + chrono::Duration::days(RETENTION_DAYS);
    entry.expires_at = Some(expires.to_rfc3339());
    crate::json_config::write_text_atomic(
        &dir.join("metadata.json"),
        &serde_json::to_string(entry).map_err(|e| e.to_string())?,
    )?;
    Ok(expires)
}

fn read_active_entry(dir: &Path) -> Result<DeletedNote, String> {
    let mut entry = read_entry(dir)?;
    let now = Utc::now();
    if ensure_expiration(dir, &mut entry, now)? <= now {
        return Err("笔记的 30 天保留期已结束".to_string());
    }
    Ok(entry)
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
    let _guard = TRASH_ACCESS.lock().map_err(|e| e.to_string())?;
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

    fs::create_dir_all(root).map_err(|e| format!("创建回收站失败: {}", e))?;
    let id = format!(
        "{}{}",
        Utc::now().timestamp_micros(),
        NEXT_ID.fetch_add(1, Ordering::Relaxed)
    );
    let dir = entry_dir(root, &id)?;
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
            expires_at: Some((Utc::now() + chrono::Duration::days(RETENTION_DAYS)).to_rfc3339()),
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
    let _guard = TRASH_ACCESS.lock().map_err(|e| e.to_string())?;
    let root = trash_root(app_handle, workspace_root)?;
    list_from(&root, Utc::now())
}

fn list_from(root: &Path, now: DateTime<Utc>) -> Result<Vec<DeletedNote>, String> {
    if !root.exists() {
        return Ok(Vec::new());
    }
    let mut entries = Vec::new();
    for item in fs::read_dir(&root).map_err(|e| format!("读取回收站失败: {}", e))? {
        let item = item.map_err(|e| e.to_string())?;
        let dir = item.path();
        let Some(id) = dir.file_name().and_then(|value| value.to_str()) else {
            continue;
        };
        if entry_dir(root, id).is_err() || !item.file_type().map_err(|e| e.to_string())?.is_dir() {
            continue;
        }
        let Ok(mut entry) = read_entry(&dir) else {
            continue;
        };
        if ensure_expiration(&dir, &mut entry, now)? <= now {
            match purge_entry(&dir) {
                Ok(()) => continue,
                Err(error) => log::warn!("过期笔记清理失败: {}", error),
            }
        }
        entries.push(entry);
    }
    entries.sort_by(|a, b| b.deleted_at.cmp(&a.deleted_at));
    Ok(entries)
}

fn purge_entry(dir: &Path) -> Result<(), String> {
    // Only remove the two owned files; never recurse into unexpected data.
    let note_path = dir.join("note.md");
    match fs::symlink_metadata(&note_path) {
        Err(error) if error.kind() == io::ErrorKind::NotFound => (),
        _ => {
            checked_file(&note_path)?;
            fs::remove_file(note_path).map_err(|e| e.to_string())?;
        }
    }
    fs::remove_file(dir.join("metadata.json")).map_err(|e| e.to_string())?;
    if let Err(error) = fs::remove_dir(dir) {
        log::warn!("已清理过期笔记，目录中仍有其他文件: {}", error);
    }
    Ok(())
}

pub fn restore_deleted_note(
    app_handle: &AppHandle,
    workspace_root: &Path,
    id: &str,
) -> Result<PathBuf, String> {
    let _guard = TRASH_ACCESS.lock().map_err(|e| e.to_string())?;
    let root = trash_root(app_handle, workspace_root)?;
    restore_from(&root, workspace_root, id)
}

fn restore_from(root: &Path, workspace_root: &Path, id: &str) -> Result<PathBuf, String> {
    let workspace = workspace_root
        .canonicalize()
        .map_err(|e| format!("无法读取工作区路径: {}", e))?;
    let dir = entry_dir(root, id)?;
    let entry = read_active_entry(&dir)?;
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
    checked_file(&dir.join("note.md"))?;
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

pub fn read_deleted_note(
    app_handle: &AppHandle,
    workspace_root: &Path,
    id: &str,
) -> Result<DeletedNoteContent, String> {
    let _guard = TRASH_ACCESS.lock().map_err(|e| e.to_string())?;
    let root = trash_root(app_handle, workspace_root)?;
    read_content_from(&root, id)
}

fn read_content_from(root: &Path, id: &str) -> Result<DeletedNoteContent, String> {
    let dir = entry_dir(root, id)?;
    read_active_entry(&dir)?;
    checked_file(&dir.join("note.md"))?;
    let raw = fs::read_to_string(dir.join("note.md")).map_err(|e| e.to_string())?;
    let (metadata, content) = try_parse_front_matter(&raw);
    Ok(DeletedNoteContent {
        content,
        file_type: metadata
            .map(|value| value.fragment_type)
            .unwrap_or_else(|| "note".to_string()),
    })
}

/// Enforce retention on startup and while the application remains open.
pub fn start_cleanup_task(app_handle: AppHandle) {
    tauri::async_runtime::spawn(async move {
        let mut interval = tokio::time::interval(Duration::from_secs(3600));
        interval.set_missed_tick_behavior(tokio::time::MissedTickBehavior::Skip);
        loop {
            interval.tick().await;
            let app = app_handle.clone();
            let _ = tauri::async_runtime::spawn_blocking(move || {
                if let Ok(Some(workspace)) = crate::json_config::get_workspace_root(&app) {
                    if let Err(error) = list_deleted_notes(&app, &workspace) {
                        log::warn!("最近删除清理失败: {}", error);
                    }
                }
            })
            .await;
        }
    });
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

    #[test]
    fn legacy_entries_receive_one_persisted_grace_period_and_expire_at_the_deadline() {
        let root = test_root();
        let workspace = root.join("workspace");
        fs::create_dir_all(&workspace).unwrap();
        let source = workspace.join("old.md");
        fs::write(&source, "old content").unwrap();
        let trash = root.join("trash");
        soft_delete_into(&trash, &workspace, &source).unwrap();
        let dir = fs::read_dir(&trash)
            .unwrap()
            .next()
            .unwrap()
            .unwrap()
            .path();
        let mut entry = read_entry(&dir).unwrap();
        let now = Utc::now();
        entry.deleted_at = (now - chrono::Duration::days(365)).to_rfc3339();
        entry.expires_at = None;
        fs::write(
            dir.join("metadata.json"),
            serde_json::to_vec(&entry).unwrap(),
        )
        .unwrap();
        let first = list_from(&trash, now).unwrap();
        let expires = (now + chrono::Duration::days(30)).to_rfc3339();
        assert_eq!(first[0].expires_at.as_deref(), Some(expires.as_str()));
        // Recover the previous complete metadata after an interrupted Windows rename.
        fs::rename(dir.join("metadata.json"), dir.join(".metadata.json.backup")).unwrap();
        let again = list_from(&trash, now + chrono::Duration::days(1)).unwrap();
        assert_eq!(again[0].expires_at, first[0].expires_at);
        assert_eq!(
            fs::read_to_string(dir.join("note.md")).unwrap(),
            "old content"
        );
        assert!(list_from(&trash, now + chrono::Duration::days(30))
            .unwrap()
            .is_empty());
        assert!(!dir.exists());
        fs::remove_dir_all(root).unwrap();
    }

    #[test]
    fn preview_reads_original_body_without_restoring_and_rejects_expired_entries() {
        let root = test_root();
        let workspace = root.join("workspace");
        fs::create_dir_all(&workspace).unwrap();
        let source = workspace.join("preview.md");
        let body = "# Preview\r\n\r\n![image](../assets/preview/a.png)\r\n";
        fs::write(&source, body).unwrap();
        let trash = root.join("trash");
        soft_delete_into(&trash, &workspace, &source).unwrap();
        let entry = list_from(&trash, Utc::now()).unwrap().remove(0);
        let content = read_content_from(&trash, &entry.id).unwrap();
        assert_eq!(content.content, body);
        assert_eq!(content.file_type, "note");
        assert!(!source.exists());
        assert!(read_content_from(&trash, "../outside").is_err());
        let code = "---\nid: snippet-id\ntitle: snippet\ntags: []\ncreated: '2026-10-19T00:00:00Z'\nmodified: '2026-10-19T00:00:00Z'\ntype: code\n---\n\nconst answer = 42;\n";
        fs::write(trash.join(&entry.id).join("note.md"), code).unwrap();
        let code_preview = read_content_from(&trash, &entry.id).unwrap();
        assert_eq!(code_preview.file_type, "code");
        assert_eq!(code_preview.content, "const answer = 42;\n");
        let dir = trash.join(&entry.id);
        let mut expired = entry;
        expired.expires_at = Some((Utc::now() - chrono::Duration::seconds(1)).to_rfc3339());
        fs::write(
            dir.join("metadata.json"),
            serde_json::to_vec(&expired).unwrap(),
        )
        .unwrap();
        assert!(read_content_from(&trash, &expired.id).is_err());
        assert!(restore_from(&trash, &workspace, &expired.id).is_err());
        fs::remove_dir_all(root).unwrap();
    }

    #[test]
    fn cleanup_does_not_recurse_into_unowned_files_or_mismatched_records() {
        let root = test_root();
        let workspace = root.join("workspace");
        fs::create_dir_all(&workspace).unwrap();
        let source = workspace.join("expired.md");
        fs::write(&source, "content").unwrap();
        let trash = root.join("trash");
        soft_delete_into(&trash, &workspace, &source).unwrap();
        let mut entry = list_from(&trash, Utc::now()).unwrap().remove(0);
        let dir = trash.join(&entry.id);
        entry.expires_at = Some((Utc::now() - chrono::Duration::days(1)).to_rfc3339());
        fs::write(
            dir.join("metadata.json"),
            serde_json::to_vec(&entry).unwrap(),
        )
        .unwrap();
        fs::write(dir.join("unowned.txt"), "keep").unwrap();
        fs::create_dir_all(trash.join("not-an-entry")).unwrap();
        fs::write(trash.join("not-an-entry/note.md"), "keep").unwrap();
        fs::create_dir_all(trash.join("123")).unwrap();
        fs::write(
            trash.join("123/metadata.json"),
            serde_json::to_vec(&entry).unwrap(),
        )
        .unwrap();
        fs::write(trash.join("123/note.md"), "mismatched record").unwrap();
        assert!(list_from(&trash, Utc::now()).unwrap().is_empty());
        assert_eq!(fs::read_to_string(dir.join("unowned.txt")).unwrap(), "keep");
        assert!(trash.join("not-an-entry/note.md").exists());
        assert!(trash.join("123/note.md").exists());
        fs::remove_dir_all(root).unwrap();
    }
}
