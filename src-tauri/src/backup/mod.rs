//! Portable user-data snapshots and non-destructive isolated recovery.
mod commands;
pub use commands::*;

use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::collections::BTreeMap;
use std::fs::{self, File};
use std::io::{Read, Write};
use std::path::{Component, Path, PathBuf};

#[derive(Debug, PartialEq, Eq, Serialize, Deserialize)]
#[serde(deny_unknown_fields)]
struct Entry {
    path: String,
    directory: bool,
    size: u64,
    sha256: String,
}

#[derive(Serialize, Deserialize)]
#[serde(deny_unknown_fields)]
struct Manifest {
    version: u32,
    kind: String,
    created_at: String,
    entries: Vec<Entry>,
}

fn display_path(path: &Path) -> String {
    let text = path.to_string_lossy();
    #[cfg(windows)]
    {
        if let Some(unc) = text.strip_prefix(r"\\?\UNC\") {
            return format!(r"\\{unc}");
        }
        if let Some(local) = text.strip_prefix(r"\\?\") {
            return local.to_owned();
        }
    }
    text.into_owned()
}

fn linked(metadata: &fs::Metadata) -> bool {
    #[cfg(windows)]
    {
        use std::os::windows::fs::MetadataExt;
        metadata.file_attributes() & 0x400 != 0
    }
    #[cfg(not(windows))]
    metadata.file_type().is_symlink()
}

// Canonicalization alone silently follows junctions in parent directories.
fn checked_path(path: &Path) -> Result<PathBuf, String> {
    if !path.is_absolute()
        || path
            .components()
            .any(|p| matches!(p, Component::ParentDir | Component::CurDir))
    {
        return Err("An absolute path without traversal is required".into());
    }
    let mut current = PathBuf::new();
    for part in path.components() {
        current.push(part);
        if matches!(part, Component::Prefix(_)) {
            continue;
        }
        match fs::symlink_metadata(&current) {
            Ok(meta) if linked(&meta) => {
                return Err(format!(
                    "Links/reparse points are not supported: {}",
                    current.display()
                ))
            }
            Ok(_) => (),
            Err(e) if e.kind() == std::io::ErrorKind::NotFound => (),
            Err(e) => return Err(e.to_string()),
        }
    }
    if path.exists() {
        path.canonicalize().map_err(|e| e.to_string())
    } else {
        // A protected former workspace can have been deleted along with its
        // parent. Resolve through the nearest surviving ancestor for checks.
        let ancestor = path
            .ancestors()
            .find(|p| p.exists())
            .ok_or("Missing path root")?;
        Ok(ancestor
            .canonicalize()
            .map_err(|e| e.to_string())?
            .join(path.strip_prefix(ancestor).map_err(|e| e.to_string())?))
    }
}

fn separate_destination(destination: &Path, protected: &[&Path]) -> Result<PathBuf, String> {
    let target = checked_path(destination)?;
    if !target.parent().is_some_and(Path::is_dir) {
        return Err("Select an existing parent directory".into());
    }
    if target.exists() {
        return Err("Destination already exists; select a new directory".into());
    }
    for source in protected {
        let source = checked_path(source)?;
        if target.starts_with(&source) || source.starts_with(&target) {
            return Err(format!(
                "BACKUP_DESTINATION_OVERLAP: {}",
                serde_json::json!({
                    "destination": display_path(&target),
                    "protectedPath": display_path(&source)
                })
            ));
        }
    }
    Ok(target)
}

fn safe_relative(path: &str) -> bool {
    let parts: Vec<_> = path.split('/').collect();
    if !matches!(
        parts.first(),
        Some(&"workspace" | &"app-data" | &"recovery")
    ) {
        return false;
    }
    parts.iter().all(|part| {
        let stem = part.split('.').next().unwrap_or("").to_ascii_uppercase();
        !part.is_empty()
            && *part != "."
            && *part != ".."
            && !part.ends_with(['.', ' '])
            && !part.chars().any(|c| c < ' ' || "\\:<>\"|?*".contains(c))
            && !matches!(
                stem.as_str(),
                "CON" | "PRN" | "AUX" | "NUL" | "CONIN$" | "CONOUT$"
            )
            && !(stem.len() == 4
                && (stem.starts_with("COM") || stem.starts_with("LPT"))
                && matches!(stem.as_bytes()[3], b'1'..=b'9'))
    })
}

fn allowed_payload(path: &str) -> bool {
    if path == "app-data" {
        return true;
    }
    if let Some(relative) = path.strip_prefix("app-data/") {
        return relative == "core.db"
            || relative == ".snippets-code"
            || relative.starts_with(".snippets-code/")
            || relative == "state"
            || relative.starts_with("state/");
    }
    !path
        .split('/')
        .any(|part| part.eq_ignore_ascii_case(".git"))
}

fn file_digest(path: &Path) -> Result<(u64, String), String> {
    let mut file = File::open(path).map_err(|e| e.to_string())?;
    let mut hash = Sha256::new();
    let mut total = 0;
    let mut buffer = [0_u8; 65536];
    loop {
        let count = file.read(&mut buffer).map_err(|e| e.to_string())?;
        if count == 0 {
            break;
        }
        total += count as u64;
        hash.update(&buffer[..count]);
    }
    Ok((total, hex::encode(hash.finalize())))
}

fn entries(root: &Path, excluded: &[&Path]) -> Result<Vec<Entry>, String> {
    checked_path(root)?;
    if !root.is_dir() {
        return Err("Source must be a directory".into());
    }
    let mut result = Vec::new();
    for item in walkdir::WalkDir::new(root)
        .min_depth(1)
        .follow_links(false)
        .into_iter()
        .filter_entry(|item| !excluded.iter().any(|p| item.path().starts_with(p)))
    {
        let item = item.map_err(|e| e.to_string())?;
        let metadata = fs::symlink_metadata(item.path()).map_err(|e| e.to_string())?;
        if linked(&metadata) || !(metadata.is_file() || metadata.is_dir()) {
            return Err(format!("Unsupported file/link: {}", item.path().display()));
        }
        let path = item
            .path()
            .strip_prefix(root)
            .map_err(|e| e.to_string())?
            .to_str()
            .ok_or("Non-UTF8 path")?
            .replace('\\', "/");
        let (size, sha256) = if metadata.is_dir() {
            (0, String::new())
        } else {
            file_digest(item.path())?
        };
        result.push(Entry {
            path,
            directory: metadata.is_dir(),
            size,
            sha256,
        });
    }
    result.sort_by(|a, b| a.path.cmp(&b.path));
    Ok(result)
}

fn copy_stable(source: &Path, target: &Path, excluded: &[&Path]) -> Result<(), String> {
    let before = entries(source, excluded)?;
    fs::create_dir_all(target).map_err(|e| e.to_string())?;
    for entry in &before {
        if !safe_relative(&format!("workspace/{}", entry.path)) {
            return Err(format!("Unsafe file name: {}", entry.path));
        }
        let destination = target.join(&entry.path);
        if entry.directory {
            fs::create_dir_all(destination).map_err(|e| e.to_string())?;
        } else {
            if let Some(parent) = destination.parent() {
                fs::create_dir_all(parent).map_err(|e| e.to_string())?;
            }
            fs::copy(source.join(&entry.path), &destination).map_err(|e| e.to_string())?;
            if file_digest(&destination)? != (entry.size, entry.sha256.clone()) {
                return Err("Source changed during backup; retry after saving".into());
            }
        }
    }
    if entries(source, excluded)? != before {
        return Err("Source changed during backup; retry after saving".into());
    }
    Ok(())
}

fn write_json(path: &Path, value: &impl Serialize) -> Result<(), String> {
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    let mut file = File::create(path).map_err(|e| e.to_string())?;
    file.write_all(&serde_json::to_vec_pretty(value).map_err(|e| e.to_string())?)
        .map_err(|e| e.to_string())?;
    file.sync_all().map_err(|e| e.to_string())
}

fn write_manifest(root: &Path, kind: &str) -> Result<(), String> {
    let manifest_path = root.join("manifest.json");
    let payload = entries(root, &[&manifest_path])?;
    if !payload.iter().all(|e| safe_relative(&e.path)) {
        return Err("Invalid payload paths".into());
    }
    write_json(
        &manifest_path,
        &Manifest {
            version: 1,
            kind: kind.into(),
            created_at: chrono::Utc::now().to_rfc3339(),
            entries: payload,
        },
    )
}

fn verify(root: &Path, kind: &str) -> Result<Manifest, String> {
    checked_path(root)?;
    let path = root.join("manifest.json");
    if linked(&fs::symlink_metadata(&path).map_err(|e| e.to_string())?) {
        return Err("Linked manifest rejected".into());
    }
    let manifest: Manifest = serde_json::from_slice(&fs::read(&path).map_err(|e| e.to_string())?)
        .map_err(|e| e.to_string())?;
    if manifest.version != 1 || manifest.kind != kind {
        return Err("Unsupported backup format/version".into());
    }
    let mut names = BTreeMap::new();
    for entry in &manifest.entries {
        if !safe_relative(&entry.path)
            || !allowed_payload(&entry.path)
            || names.insert(entry.path.to_lowercase(), ()).is_some()
        {
            return Err("Unsafe or duplicate backup path".into());
        }
    }
    if entries(root, &[&path])? != manifest.entries {
        return Err("Backup integrity check failed (missing, changed or unlisted files)".into());
    }
    if !root.join("workspace").is_dir()
        || !root.join("app-data/core.db").is_file()
        || !root.join("recovery/frontend-state.json").is_file()
    {
        return Err("Backup is missing required user data".into());
    }
    Ok(manifest)
}

fn in_new_directory(
    destination: &Path,
    operation: impl FnOnce() -> Result<(), String>,
) -> Result<(), String> {
    // Reserve this exact directory, never merge into existing user data.
    fs::create_dir(destination).map_err(|e| e.to_string())?;
    let result = operation();
    if result.is_err() {
        let _ = fs::remove_dir_all(destination);
    }
    result
}

fn create_backup(
    workspace: &Path,
    data: &Path,
    trash: Option<&Path>,
    destination: &Path,
    frontend: &str,
) -> Result<(), String> {
    let mut protected = vec![workspace, data];
    if let Some(trash) = trash {
        protected.push(trash);
    }
    let destination = separate_destination(destination, &protected)?;
    let frontend: serde_json::Value = serde_json::from_str(frontend).map_err(|e| e.to_string())?;
    if !frontend.is_object() {
        return Err("Invalid frontend recovery state".into());
    }
    let data = checked_path(data)?;
    let workspace = checked_path(workspace)?;
    if data == workspace {
        return Err("Workspace and application data must be separate".into());
    }
    let db_path = data.join("core.db");
    checked_path(&db_path)?;
    if !db_path.is_file() {
        return Err("Core database is missing".into());
    }
    in_new_directory(&destination, || {
        let mut skipped = vec![workspace.join(".git")];
        if data.starts_with(&workspace) {
            skipped.push(data.clone());
        }
        // Only the exact staging-file convention used by safe_write is
        // excluded. Ordinary .tmp files can be user attachments.
        let scan_exclusions = skipped.clone();
        for item in walkdir::WalkDir::new(&workspace)
            .follow_links(false)
            .into_iter()
            .filter_entry(|item| !scan_exclusions.iter().any(|p| item.path().starts_with(p)))
        {
            let item = item.map_err(|e| e.to_string())?;
            if item.file_type().is_file() {
                if let Some(id) = item
                    .file_name()
                    .to_str()
                    .and_then(|n| n.strip_prefix(".markdown-"))
                    .and_then(|n| n.strip_suffix(".tmp"))
                {
                    if uuid::Uuid::parse_str(id).is_ok_and(|parsed| parsed.to_string() == id) {
                        skipped.push(item.path().to_path_buf());
                    }
                }
            }
        }
        let exclusions: Vec<_> = skipped.iter().map(PathBuf::as_path).collect();
        copy_stable(&workspace, &destination.join("workspace"), &exclusions)?;
        fs::create_dir_all(destination.join("app-data/.snippets-code"))
            .map_err(|e| e.to_string())?;
        for name in [".snippets-code", "state"] {
            let source = data.join(name);
            if source.exists() {
                copy_stable(&source, &destination.join("app-data").join(name), &[])?;
            }
        }
        let conn = rusqlite::Connection::open_with_flags(
            &db_path,
            rusqlite::OpenFlags::SQLITE_OPEN_READ_ONLY,
        )
        .map_err(|e| e.to_string())?;
        crate::db::backup_connection_to_path(&conn, &destination.join("app-data/core.db"))?;
        if let Some(trash) = trash.filter(|p| p.exists()) {
            copy_stable(trash, &destination.join("recovery/deleted-notes"), &[])?;
        }
        write_json(&destination.join("recovery/frontend-state.json"), &frontend)?;
        write_manifest(&destination, "snippets-backup")?;
        verify(&destination, "snippets-backup")?;
        Ok(())
    })
}

fn isolate_config(root: &Path) -> Result<(), String> {
    let config_path = root.join("app-data/.snippets-code/app.json");
    let original: serde_json::Value = if config_path.exists() {
        serde_json::from_slice(&fs::read(&config_path).map_err(|e| e.to_string())?)
            .map_err(|e| e.to_string())?
    } else {
        serde_json::json!({})
    };
    write_json(&root.join("recovery/original-app.json"), &original)?;
    // Preserve original plugin/path preferences only for manual recovery.
    let mut active =
        serde_json::to_value(crate::app_config::AppConfig::default()).map_err(|e| e.to_string())?;
    for key in [
        "language",
        "theme",
        "editor",
        "quick_search",
        "auto_hide_on_blur",
        "cache_icons",
    ] {
        if let Some(value) = original.get(key) {
            active[key] = value.clone();
        }
    }
    active["workspace_root"] = display_path(&root.join("workspace")).into();
    active["plugins"] = serde_json::Value::Object(
        original
            .get("plugins")
            .and_then(|p| p.as_object())
            .map(|plugins| {
                plugins
                    .keys()
                    .map(|id| (id.clone(), serde_json::json!({"enabled": false})))
                    .collect()
            })
            .unwrap_or_default(),
    );
    active["plugin_install_dir"] = serde_json::Value::Null;
    active["git"] = serde_json::json!({"enabled":false,"auto_sync":false,"pull_on_start":false,"remote_url":"","user_name":"","user_email":"","auto_sync_delay":1});
    write_json(&config_path, &active)?;
    let workspace_path = root.join("workspace/.snippets-code/workspace.json");
    if workspace_path.exists() {
        let original: serde_json::Value =
            serde_json::from_slice(&fs::read(&workspace_path).map_err(|e| e.to_string())?)
                .map_err(|e| e.to_string())?;
        write_json(&root.join("recovery/original-workspace.json"), &original)?;
    }
    // Layout may contain absolute paths into the old workspace.
    write_json(
        &workspace_path,
        &crate::markdown::WorkspaceConfig::default(),
    )?;
    let db =
        rusqlite::Connection::open(root.join("app-data/core.db")).map_err(|e| e.to_string())?;
    let exists: bool = db.query_row("SELECT EXISTS(SELECT 1 FROM sqlite_master WHERE type='table' AND name='user_settings')", [], |r| r.get(0)).map_err(|e| e.to_string())?;
    if exists {
        db.execute("DELETE FROM user_settings", [])
            .map_err(|e| e.to_string())?;
    }
    db.execute_batch("PRAGMA wal_checkpoint(TRUNCATE); PRAGMA journal_mode=DELETE;")
        .map_err(|e| e.to_string())?;
    Ok(())
}

fn restore_backup(source: &Path, destination: &Path, protected: &[&Path]) -> Result<(), String> {
    let mut protected = protected.to_vec();
    protected.push(source);
    let destination = separate_destination(destination, &protected)?;
    verify(source, "snippets-backup")?;
    in_new_directory(&destination, || {
        copy_stable(source, &destination, &[])?;
        verify(&destination, "snippets-backup")?;
        isolate_config(&destination)?;
        write_manifest(&destination, "snippets-restored")?;
        Ok(())
    })
}

#[cfg(test)]
mod tests;
