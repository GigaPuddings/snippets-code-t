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
