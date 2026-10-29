//! Byte-preserving replacement and optimistic revision checks for documents.

use sha2::{Digest, Sha256};
use std::{fs, io::Write, path::Path, sync::Mutex};

static WRITE_LOCK: Mutex<()> = Mutex::new(());

pub fn rename_no_replace(from: &Path, to: &Path) -> Result<(), String> {
    #[cfg(windows)]
    {
        use std::os::windows::ffi::OsStrExt;
        use windows::{
            core::PCWSTR,
            Win32::Storage::FileSystem::{MoveFileExW, MOVE_FILE_FLAGS},
        };
        let from: Vec<u16> = from.as_os_str().encode_wide().chain(Some(0)).collect();
        let to: Vec<u16> = to.as_os_str().encode_wide().chain(Some(0)).collect();
        unsafe {
            MoveFileExW(
                PCWSTR(from.as_ptr()),
                PCWSTR(to.as_ptr()),
                MOVE_FILE_FLAGS(0),
            )
        }
        .map_err(|e| format!("重命名文件失败: {e}"))
    }
    #[cfg(not(windows))]
    {
        fs::hard_link(from, to).map_err(|e| e.to_string())?;
        if let Err(error) = fs::remove_file(from) {
            let _ = fs::remove_file(to);
            return Err(error.to_string());
        }
        Ok(())
    }
}

pub fn revision(bytes: &[u8]) -> String {
    hex::encode(Sha256::digest(bytes))
}

/// Publish a new document only when no file already owns its name.
pub fn create(path: &Path, bytes: &[u8]) -> Result<(), String> {
    let parent = path.parent().ok_or("文件缺少父目录")?;
    let temp = parent.join(format!(".markdown-{}.tmp", uuid::Uuid::new_v4()));
    let result = (|| {
        let mut file = fs::OpenOptions::new()
            .write(true)
            .create_new(true)
            .open(&temp)
            .map_err(|e| e.to_string())?;
        file.write_all(bytes).map_err(|e| e.to_string())?;
        file.sync_all().map_err(|e| e.to_string())?;
        drop(file);
        rename_no_replace(&temp, path)
    })();
    let _ = fs::remove_file(&temp);
    result
}

pub fn check_revision(bytes: &[u8], expected: Option<&str>) -> Result<(), String> {
    if expected.is_some_and(|expected| expected != revision(bytes)) {
        return Err("MARKDOWN_SAVE_CONFLICT: 文件已被其他操作修改，请保留草稿后重新读取".into());
    }
    Ok(())
}

/// Stage and flush in the same directory, then replace without truncating the
/// original. The returned token describes our bytes, never a later disk read.
pub fn replace(path: &Path, bytes: &[u8], expected: Option<&str>) -> Result<String, String> {
    let _guard = WRITE_LOCK.lock().map_err(|e| e.to_string())?;
    let parent = path.parent().ok_or("文件缺少父目录")?;
    let temp = parent.join(format!(".markdown-{}.tmp", uuid::Uuid::new_v4()));
    let result = (|| {
        let permissions = fs::metadata(path).map_err(|e| e.to_string())?.permissions();
        if permissions.readonly() {
            return Err("文件为只读，未写入".into());
        }
        let mut file = fs::OpenOptions::new()
            .write(true)
            .create_new(true)
            .open(&temp)
            .map_err(|e| e.to_string())?;
        file.write_all(bytes).map_err(|e| e.to_string())?;
        file.set_permissions(permissions)
            .map_err(|e| e.to_string())?;
        file.sync_all().map_err(|e| e.to_string())?;
        drop(file);
        // Check after staging too, so changes during preparation are rejected.
        check_revision(&fs::read(path).map_err(|e| e.to_string())?, expected)?;
        fs::rename(&temp, path).map_err(|e| format!("替换文件失败: {e}"))?;
        Ok(revision(bytes))
    })();
    let _ = fs::remove_file(&temp);
    result
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn preserves_exact_bytes_and_returns_the_committed_revision() {
        let dir = std::env::temp_dir().join(uuid::Uuid::new_v4().to_string());
        fs::create_dir(&dir).unwrap();
        let path = dir.join("note.md");
        fs::write(&path, b"old").unwrap();
        for body in ["\r\n  code  \r\n\r\n", "", "no newline"] {
            let baseline = revision(&fs::read(&path).unwrap());
            let saved = replace(&path, body.as_bytes(), Some(&baseline)).unwrap();
            assert_eq!(fs::read(&path).unwrap(), body.as_bytes());
            assert_eq!(saved, revision(body.as_bytes()));
        }
        assert_eq!(fs::read_dir(&dir).unwrap().count(), 1);
        fs::remove_dir_all(dir).unwrap();
    }

    #[test]
    fn creation_never_truncates_an_existing_file() {
        let dir = std::env::temp_dir().join(uuid::Uuid::new_v4().to_string());
        fs::create_dir(&dir).unwrap();
        let path = dir.join("copy.md");
        create(&path, b"copy  \r\n").unwrap();
        assert!(create(&path, b"wrong").is_err());
        assert_eq!(fs::read(&path).unwrap(), b"copy  \r\n");
        assert_eq!(fs::read_dir(&dir).unwrap().count(), 1);
        fs::remove_dir_all(dir).unwrap();
    }

    #[test]
    fn rejects_an_external_change_without_touching_either_version() {
        let dir = std::env::temp_dir().join(uuid::Uuid::new_v4().to_string());
        fs::create_dir(&dir).unwrap();
        let path = dir.join("note.md");
        fs::write(&path, b"external update").unwrap();
        let error = replace(&path, b"my draft", Some(&revision(b"original"))).unwrap_err();
        assert!(error.contains("MARKDOWN_SAVE_CONFLICT"));
        assert_eq!(fs::read(&path).unwrap(), b"external update");
        assert_eq!(fs::read_dir(&dir).unwrap().count(), 1);
        fs::remove_dir_all(dir).unwrap();
    }

    #[test]
    fn failed_replacement_leaves_original_and_cleans_temporary_file() {
        let dir = std::env::temp_dir().join(uuid::Uuid::new_v4().to_string());
        fs::create_dir(&dir).unwrap();
        let path = dir.join("note.md");
        fs::write(&path, b"complete original").unwrap();
        let mut permissions = fs::metadata(&path).unwrap().permissions();
        permissions.set_readonly(true);
        fs::set_permissions(&path, permissions.clone()).unwrap();
        assert!(replace(&path, b"new", None).is_err());
        assert_eq!(fs::read(&path).unwrap(), b"complete original");
        assert_eq!(fs::read_dir(&dir).unwrap().count(), 1);
        #[allow(clippy::permissions_set_readonly_false)]
        permissions.set_readonly(false);
        fs::set_permissions(&path, permissions).unwrap();
        fs::remove_dir_all(dir).unwrap();
    }

    #[test]
    fn rename_never_overwrites_another_document() {
        let dir = std::env::temp_dir().join(uuid::Uuid::new_v4().to_string());
        fs::create_dir(&dir).unwrap();
        let from = dir.join("from.md");
        let to = dir.join("to.md");
        fs::write(&from, "original").unwrap();
        fs::write(&to, "other document").unwrap();
        assert!(rename_no_replace(&from, &to).is_err());
        assert_eq!(fs::read_to_string(&from).unwrap(), "original");
        assert_eq!(fs::read_to_string(&to).unwrap(), "other document");
        fs::remove_file(&to).unwrap();
        rename_no_replace(&from, &to).unwrap();
        assert!(!from.exists());
        assert_eq!(fs::read_to_string(&to).unwrap(), "original");
        fs::remove_dir_all(dir).unwrap();
    }
}
