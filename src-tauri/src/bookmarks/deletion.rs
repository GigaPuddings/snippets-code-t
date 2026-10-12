//! Offline writes use indexed provenance, browser process checks and persistent backups.
mod chromium_sync;
use super::{get_all_browser_bookmark_paths, BookmarkSource};
use md5::{Digest as Md5Digest, Md5};
use rusqlite::{
    backup::{Backup, StepResult},
    params, Connection, OpenFlags, OptionalExtension, TransactionBehavior,
};
use serde::Serialize;
use serde_json::Value;
use sha2::{Digest, Sha256};
use std::collections::{HashMap, HashSet};
use std::fs::{self, OpenOptions};
use std::io::{Read, Write};
use std::mem::size_of;
use std::os::windows::ffi::OsStrExt;
use std::os::windows::fs::OpenOptionsExt;
use std::path::{Path, PathBuf};
use std::sync::{Mutex, Once};
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};
use uuid::Uuid;
use windows::core::PCWSTR;
use windows::Win32::Foundation::{CloseHandle, ERROR_NO_MORE_FILES};
use windows::Win32::Storage::FileSystem::{
    ReplaceFileW, FILE_SHARE_DELETE, FILE_SHARE_READ, REPLACE_FILE_FLAGS,
};
use windows::Win32::System::Diagnostics::ToolHelp::{
    CreateToolhelp32Snapshot, Process32FirstW, Process32NextW, PROCESSENTRY32W, TH32CS_SNAPPROCESS,
};

static DELETE_LOCK: Mutex<()> = Mutex::new(());
const ROOTS: &[&str] = &["bookmark_bar", "other", "synced"];
const MAX_JSON_BYTES: u64 = 64 * 1024 * 1024;

#[derive(Serialize)]
pub struct BookmarkDeleteStatus {
    pub profile_key: String,
    pub node_id: String,
    pub available: bool,
    pub reason: Option<String>,
}

fn browser_executables(browser: &str) -> Result<&'static [&'static str], String> {
    match browser {
        "Chrome" => Ok(&["chrome.exe", "chromium.exe"]),
        "Edge" => Ok(&["msedge.exe"]),
        "Brave" => Ok(&["brave.exe"]),
        "Firefox" => Ok(&["firefox.exe"]),
        "360Speed" => Ok(&["360chrome.exe", "360chrome_x.exe"]),
        "QQBrowser" => Ok(&["qqbrowser.exe"]),
        "Vivaldi" => Ok(&["vivaldi.exe"]),
        "Opera" => Ok(&["opera.exe"]),
        "ChromeCore" | "ShuangHe" => Ok(&[
            "chrome.exe",
            "chromium.exe",
            "gbrowser.exe",
            "shuanghe.exe",
            "shuanghebrowser.exe",
            "chromecore.exe",
            "browser.exe",
        ]),
        _ => Err(format!("尚不支持 {browser} 的本地书签格式")),
    }
}

fn running_process_names() -> Result<Vec<String>, String> {
    unsafe {
        let snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0)
            .map_err(|e| format!("无法检查浏览器进程: {e}"))?;
        let result = (|| {
            let mut entry = PROCESSENTRY32W {
                dwSize: size_of::<PROCESSENTRY32W>() as u32,
                ..Default::default()
            };
            Process32FirstW(snapshot, &mut entry)
                .map_err(|e| format!("无法检查浏览器进程: {e}"))?;
            let mut names = Vec::new();
            loop {
                let length = entry
                    .szExeFile
                    .iter()
                    .position(|value| *value == 0)
                    .unwrap_or(entry.szExeFile.len());
                names.push(String::from_utf16_lossy(&entry.szExeFile[..length]).to_lowercase());
                if let Err(error) = Process32NextW(snapshot, &mut entry) {
                    if error.code() != ERROR_NO_MORE_FILES.to_hresult() {
                        return Err(format!("浏览器进程检查未完成: {error}"));
                    }
                    break;
                }
            }
            Ok(names)
        })();
        let _ = CloseHandle(snapshot);
        result
    }
}

fn require_browser_closed(browser: &str, names: &[String]) -> Result<(), String> {
    let executables = browser_executables(browser)?;
    if names
        .iter()
        .any(|name| executables.contains(&name.as_str()))
    {
        return Err(format!(
            "请先完全退出 {browser}（包括后台进程），然后重试删除；应用不会自动关闭浏览器"
        ));
    }
    Ok(())
}

fn trusted_path(source: &BookmarkSource, allowed: &[PathBuf]) -> Result<PathBuf, String> {
    if source.node_id.is_empty() || source.url.is_empty() {
        return Err("来源缺少节点信息，请重新扫描书签".into());
    }
    let path = fs::canonicalize(&source.storage_path)
        .map_err(|e| format!("原书签文件不可用，请重新扫描: {e}"))?;
    if !allowed
        .iter()
        .filter_map(|value| fs::canonicalize(value).ok())
        .any(|value| value == path)
    {
        return Err("书签路径不在当前已发现的浏览器配置文件中，请重新扫描".into());
    }
    // Preserve the scanner's spelling; canonical Windows paths add the \\?\ prefix.
    let stored_path = Path::new(&source.storage_path);
    let profile = stored_path.parent().ok_or("书签缺少配置文件目录")?;
    let key = hex::encode(Sha256::digest(
        profile.to_string_lossy().to_lowercase().as_bytes(),
    ));
    if key != source.profile_key {
        return Err("配置文件身份已变化，请重新扫描".into());
    }
    let file_name = if source.browser == "Firefox" {
        "places.sqlite"
    } else {
        "Bookmarks"
    };
    if path.file_name().and_then(|value| value.to_str()) != Some(file_name) {
        return Err("不支持该书签存储格式".into());
    }
    Ok(path)
}

pub fn deletion_status(sources: &[BookmarkSource]) -> Vec<BookmarkDeleteStatus> {
    let allowed = get_all_browser_bookmark_paths();
    let processes = running_process_names();
    sources
        .iter()
        .map(|source| {
            let outcome = processes
                .as_ref()
                .map_err(Clone::clone)
                .and_then(|names| require_browser_closed(&source.browser, names))
                .and_then(|()| trusted_path(source, &allowed).map(|_| ()));
            BookmarkDeleteStatus {
                profile_key: source.profile_key.clone(),
                node_id: source.node_id.clone(),
                available: outcome.is_ok(),
                reason: outcome.err(),
            }
        })
        .collect()
}

fn backup_path(root: &Path, original: &Path) -> Result<PathBuf, String> {
    let directory = root.join(Uuid::new_v4().to_string());
    fs::create_dir_all(&directory).map_err(|e| format!("无法创建书签备份目录: {e}"))?;
    Ok(directory.join(original.file_name().ok_or("书签文件名无效")?))
}

fn write_restore_info(
    backup: &Path,
    original: &Path,
    sources: &[BookmarkSource],
) -> Result<(), String> {
    let info = serde_json::json!({
        "original_path": original,
        "backup_file": backup.file_name(),
        "created_at": SystemTime::now().duration_since(UNIX_EPOCH).unwrap_or_default().as_secs(),
        "sources": sources,
        "restore_requires_browser_closed": true
    });
    let path = backup
        .parent()
        .ok_or("备份目录无效")?
        .join("restore-info.json");
    let mut file = OpenOptions::new()
        .write(true)
        .create_new(true)
        .open(path)
        .map_err(|e| format!("无法保存书签恢复信息: {e}"))?;
    file.write_all(&serde_json::to_vec_pretty(&info).map_err(|e| e.to_string())?)
        .and_then(|()| file.sync_all())
        .map_err(|e| format!("书签恢复信息保存失败，未修改原文件: {e}"))
}

fn chromium_roots(value: &Value) -> Result<Vec<String>, String> {
    if value.get("version").and_then(Value::as_u64) != Some(1) {
        return Err("书签文件版本不受支持，未修改原文件".into());
    }
    let roots = value
        .get("roots")
        .and_then(Value::as_object)
        .ok_or("书签根目录格式无效")?;
    if ROOTS.iter().any(|name| !roots.contains_key(*name)) {
        return Err("书签文件缺少根目录，未修改原文件".into());
    }
    let mut order: Vec<String> = ROOTS.iter().map(|name| name.to_string()).collect();
    order.extend(
        roots
            .keys()
            .filter(|name| !ROOTS.contains(&name.as_str()))
            .cloned(),
    );
    Ok(order)
}

// Chromium uses id(UTF-8), title(UTF-16LE), type, URL and preorder children.
// Edge includes additional roots, e.g. workspaces_v2, after the standard roots.
fn checksum_bytes(
    node: &Value,
    bytes: &mut Vec<u8>,
    ids: &mut HashSet<String>,
    depth: usize,
) -> Result<(), String> {
    if depth > 128 {
        return Err("书签目录层级过深，未修改原文件".into());
    }
    let id = node
        .get("id")
        .and_then(Value::as_str)
        .ok_or("书签节点缺少 ID")?;
    if !ids.insert(id.to_string()) {
        return Err("书签节点 ID 重复，未修改原文件".into());
    }
    bytes.extend_from_slice(id.as_bytes());
    for unit in node
        .get("name")
        .and_then(Value::as_str)
        .ok_or("书签节点名称无效")?
        .encode_utf16()
    {
        bytes.extend_from_slice(&unit.to_le_bytes());
    }
    let kind = node
        .get("type")
        .and_then(Value::as_str)
        .ok_or("书签节点类型无效")?;
    bytes.extend_from_slice(kind.as_bytes());
    match kind {
        "url" => bytes.extend_from_slice(
            node.get("url")
                .and_then(Value::as_str)
                .ok_or("书签 URL 无效")?
                .as_bytes(),
        ),
        "folder" => {
            for child in node
                .get("children")
                .and_then(Value::as_array)
                .ok_or("书签子目录格式无效")?
            {
                checksum_bytes(child, bytes, ids, depth + 1)?;
            }
        }
        _ => return Err("未知书签节点类型，未修改原文件".into()),
    }
    Ok(())
}

fn checksums(value: &Value, order: &[String]) -> Result<(String, String), String> {
    let mut bytes = Vec::new();
    let mut ids = HashSet::new();
    for name in order {
        checksum_bytes(&value["roots"][name], &mut bytes, &mut ids, 0)?;
    }
    Ok((
        hex::encode(Md5::digest(&bytes)),
        hex::encode(Sha256::digest(&bytes)),
    ))
}

fn remove_node(node: &mut Value, source: &BookmarkSource) -> Result<bool, String> {
    let Some(children) = node.get_mut("children").and_then(Value::as_array_mut) else {
        return Ok(false);
    };
    for index in 0..children.len() {
        if children[index].get("id").and_then(Value::as_str) == Some(&source.node_id) {
            let item = &children[index];
            if item.get("type").and_then(Value::as_str) != Some("url")
                || item.get("url").and_then(Value::as_str) != Some(&source.url)
                || item.get("name").and_then(Value::as_str) != Some(&source.title)
            {
                return Err("书签节点已变化，请重新扫描后再删除".into());
            }
            children.remove(index);
            // Only the immediate containing folder was edited.
            node["date_modified"] = Value::String(
                (SystemTime::now()
                    .duration_since(UNIX_EPOCH)
                    .unwrap_or_default()
                    .as_micros()
                    + 11_644_473_600_000_000)
                    .to_string(),
            );
            return Ok(true);
        }
        if remove_node(&mut children[index], source)? {
            return Ok(true);
        }
    }
    Ok(false)
}

fn edited_chromium(original: &[u8], sources: &[BookmarkSource]) -> Result<Vec<u8>, String> {
    let mut value: Value =
        serde_json::from_slice(original).map_err(|e| format!("书签文件损坏，未修改原文件: {e}"))?;
    let order = chromium_roots(&value)?;
    let (md5, sha256) = checksums(&value, &order)?;
    if value
        .get("checksum")
        .and_then(Value::as_str)
        .is_some_and(|expected| !expected.eq_ignore_ascii_case(&md5))
        || value
            .get("checksum_sha256")
            .and_then(Value::as_str)
            .is_some_and(|expected| !expected.eq_ignore_ascii_case(&sha256))
    {
        return Err("书签文件校验不匹配，未修改原文件；请完全退出浏览器后重新扫描".into());
    }
    for source in sources {
        let mut removed = false;
        for name in &order {
            if remove_node(&mut value["roots"][name], source)? {
                removed = true;
                break;
            }
        }
        if !removed {
            return Err("原书签节点已不存在，请重新扫描".into());
        }
    }
    let (md5, sha256) = checksums(&value, &order)?;
    value["checksum"] = Value::String(md5);
    if value.get("checksum_sha256").is_some() {
        value["checksum_sha256"] = Value::String(sha256);
    }
    if let Some(metadata) = value.get("sync_metadata") {
        let metadata = metadata
            .as_str()
            .ok_or("书签同步记录格式无效，未修改原文件")?;
        value["sync_metadata"] = Value::String(chromium_sync::record_deletions(
            metadata,
            &sources
                .iter()
                .map(|source| source.node_id.clone())
                .collect::<Vec<_>>(),
            SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .unwrap_or_default()
                .as_millis() as u64,
        )?);
    }
    serde_json::to_vec_pretty(&value).map_err(|e| e.to_string())
}

fn replace_chromium(
    path: &Path,
    sources: &[BookmarkSource],
    backup_root: &Path,
    check_closed: &impl Fn() -> Result<(), String>,
) -> Result<PathBuf, String> {
    check_closed()?;
    let mut original_file = OpenOptions::new()
        .read(true)
        .share_mode(FILE_SHARE_READ.0 | FILE_SHARE_DELETE.0)
        .open(path)
        .map_err(|e| format!("书签文件被占用或无法读取: {e}"))?;
    if original_file.metadata().map_err(|e| e.to_string())?.len() > MAX_JSON_BYTES {
        return Err("书签文件过大，未修改原文件".into());
    }
    let mut original = Vec::new();
    original_file
        .read_to_end(&mut original)
        .map_err(|e| e.to_string())?;
    let edited = edited_chromium(&original, sources)?;
    let backup = backup_path(backup_root, path)?;
    let mut backup_file = OpenOptions::new()
        .write(true)
        .create_new(true)
        .open(&backup)
        .map_err(|e| format!("无法备份书签: {e}"))?;
    backup_file
        .write_all(&original)
        .and_then(|()| backup_file.sync_all())
        .map_err(|e| format!("书签备份失败，未修改原文件: {e}"))?;
    write_restore_info(&backup, path, sources)?;
    let temp = path.with_file_name(format!(".Bookmarks.{}.tmp", Uuid::new_v4()));
    let result = (|| {
        let mut file = OpenOptions::new()
            .write(true)
            .create_new(true)
            .open(&temp)
            .map_err(|e| e.to_string())?;
        file.write_all(&edited)
            .and_then(|()| file.sync_all())
            .map_err(|e| e.to_string())?;
        drop(file);
        check_closed()?;
        if fs::read(path).map_err(|e| e.to_string())? != original {
            return Err("书签文件在删除期间发生变化，请重新扫描".into());
        }
        let destination: Vec<u16> = path.as_os_str().encode_wide().chain(Some(0)).collect();
        let replacement: Vec<u16> = temp.as_os_str().encode_wide().chain(Some(0)).collect();
        unsafe {
            ReplaceFileW(
                PCWSTR(destination.as_ptr()),
                PCWSTR(replacement.as_ptr()),
                PCWSTR::null(),
                REPLACE_FILE_FLAGS(0),
                None,
                None,
            )
        }
        .map_err(|e| format!("替换书签文件失败，原文件和备份保留: {e}"))?;
        Ok(backup)
    })();
    if temp.exists() {
        let _ = fs::remove_file(temp);
    }
    result
}

fn delete_firefox(
    path: &Path,
    sources: &[BookmarkSource],
    backup_root: &Path,
    check_closed: &impl Fn() -> Result<(), String>,
) -> Result<PathBuf, String> {
    check_closed()?;
    let mut conn = Connection::open_with_flags(path, OpenFlags::SQLITE_OPEN_READ_WRITE)
        .map_err(|e| format!("无法打开 Firefox 书签数据库: {e}"))?;
    conn.busy_timeout(Duration::from_millis(250))
        .map_err(|e| e.to_string())?;
    let data_version: i64 = conn
        .query_row("PRAGMA data_version", [], |row| row.get(0))
        .map_err(|e| e.to_string())?;
    let mut backup_conn =
        Connection::open(backup_path(backup_root, path)?).map_err(|e| e.to_string())?;
    let backup = PathBuf::from(backup_conn.path().ok_or("备份路径无效")?);
    Backup::new(&conn, &mut backup_conn)
        .and_then(|backup| {
            let started = Instant::now();
            loop {
                match backup.step(256)? {
                    StepResult::Done => return Ok(()),
                    StepResult::More if started.elapsed() < Duration::from_secs(30) => {}
                    _ => {
                        return Err(rusqlite::Error::SqliteFailure(
                            rusqlite::ffi::Error::new(rusqlite::ffi::SQLITE_BUSY),
                            Some("备份被占用或超时".into()),
                        ))
                    }
                }
            }
        })
        .map_err(|e| format!("Firefox 备份失败，未修改数据库: {e}"))?;
    drop(backup_conn);
    OpenOptions::new()
        .read(true)
        .write(true)
        .open(&backup)
        .and_then(|file| file.sync_all())
        .map_err(|e| format!("无法保存 Firefox 备份: {e}"))?;
    write_restore_info(&backup, path, sources)?;
    let tx = conn
        .transaction_with_behavior(TransactionBehavior::Immediate)
        .map_err(|e| format!("Firefox 数据库被占用，未修改书签: {e}"))?;
    let current_version: i64 = tx
        .query_row("PRAGMA data_version", [], |row| row.get(0))
        .map_err(|e| e.to_string())?;
    if current_version != data_version {
        return Err("Firefox 数据库在备份期间发生变化，请重新扫描后重试".into());
    }
    for source in sources {
        let item: Option<(i64, i64, i64, String, String, i64, i64)> = tx.query_row("SELECT b.id,b.parent,b.position,COALESCE(b.title,''),p.url,b.syncStatus,b.fk FROM moz_bookmarks b JOIN moz_places p ON p.id=b.fk WHERE b.guid=?1 AND b.type=1", [&source.node_id], |row| Ok((row.get(0)?,row.get(1)?,row.get(2)?,row.get(3)?,row.get(4)?,row.get(5)?,row.get(6)?))).optional().map_err(|e| format!("Firefox 数据库结构不受支持，未修改书签: {e}"))?;
        let (id, parent, position, title, url, sync_status, fk) =
            item.ok_or("Firefox 原书签节点已不存在，请重新扫描")?;
        if title != source.title || url != source.url {
            return Err("Firefox 书签已变化，请重新扫描后再删除".into());
        }
        let now = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap_or_default()
            .as_micros() as i64;
        if sync_status == 2 {
            tx.execute(
                "INSERT OR REPLACE INTO moz_bookmarks_deleted(guid,dateRemoved) VALUES(?1,?2)",
                params![source.node_id, now],
            )
            .map_err(|e| e.to_string())?;
        }
        tx.execute("DELETE FROM moz_bookmarks WHERE id=?1", [id])
            .map_err(|e| e.to_string())?;
        tx.execute("UPDATE moz_bookmarks SET position=position-1, syncChangeCounter=syncChangeCounter+CASE WHEN type=3 THEN 1 ELSE 0 END WHERE parent=?1 AND position>?2", params![parent,position]).map_err(|e| e.to_string())?;
        tx.execute("WITH RECURSIVE ancestors(id) AS (SELECT ?1 UNION SELECT b.parent FROM moz_bookmarks b JOIN ancestors a ON b.id=a.id WHERE b.parent<>0) UPDATE moz_bookmarks SET lastModified=?2, syncChangeCounter=syncChangeCounter+1 WHERE id IN ancestors", params![parent,now]).map_err(|e| e.to_string())?;
        // Firefox's connection-local triggers are absent when the browser is closed.
        tx.execute("UPDATE moz_places SET foreign_count=MAX(0,foreign_count-1),recalc_frecency=1 WHERE id=?1", [fk]).map_err(|e| e.to_string())?;
    }
    check_closed()?;
    tx.commit()
        .map_err(|e| format!("Firefox 删除提交失败: {e}"))?;
    Ok(backup)
}

pub fn delete_sources(
    sources: &[BookmarkSource],
    check_enabled: impl Fn() -> Result<(), String>,
) -> (Vec<BookmarkSource>, Vec<String>, Vec<String>) {
    let Ok(_lock) = DELETE_LOCK.lock() else {
        return (Vec::new(), vec!["无法获取书签操作锁".into()], Vec::new());
    };
    let allowed = get_all_browser_bookmark_paths();
    let mut groups: HashMap<PathBuf, Vec<BookmarkSource>> = HashMap::new();
    let mut errors = Vec::new();
    for source in sources {
        match trusted_path(source, &allowed) {
            Ok(path) => groups.entry(path).or_default().push(source.clone()),
            Err(error) => errors.push(format!("{} · {}: {error}", source.browser, source.profile)),
        }
    }
    let mut deleted = Vec::new();
    let mut backups = Vec::new();
    for (path, sources) in groups {
        let browser = &sources[0].browser;
        let guard = || {
            check_enabled()?;
            require_browser_closed(browser, &running_process_names()?)
        };
        let result = (|| {
            let root = dirs::data_local_dir()
                .ok_or("无法获取书签备份目录")?
                .join("SnippetsCode/BookmarkBackups");
            if browser == "Firefox" {
                delete_firefox(&path, &sources, &root, &guard)
            } else {
                replace_chromium(&path, &sources, &root, &guard)
            }
        })();
        match result {
            Ok(backup) => {
                log::info!(
                    "[LocalLauncher] 已删除 {} · {} 的 {} 个原书签来源，备份: {}",
                    browser,
                    sources[0].profile,
                    sources.len(),
                    backup.display()
                );
                deleted.extend(sources);
                backups.push(backup.to_string_lossy().into());
            }
            Err(error) => {
                log::warn!(
                    "[LocalLauncher] 原书签删除失败: {browser} · {}: {error}",
                    sources[0].profile
                );
                errors.push(format!("{browser} · {}: {error}", sources[0].profile));
            }
        }
    }
    (deleted, errors, backups)
}

// Retire only this app's old Native Messaging registration. Leave exported files
// alone while an installed browser extension may still have them open.
pub fn cleanup_legacy_bridge() {
    static CLEANUP: Once = Once::new();
    CLEANUP.call_once(|| {
        let root = winreg::RegKey::predef(winreg::enums::HKEY_CURRENT_USER);
        for browser in [
            "Google\\Chrome",
            "Microsoft\\Edge",
            "BraveSoftware\\Brave-Browser",
            "Chromium",
            "Mozilla",
        ] {
            let path =
                format!("Software\\{browser}\\NativeMessagingHosts\\com.snippets_code.bookmarks");
            if let Err(error) = root.delete_subkey_all(path) {
                if error.kind() != std::io::ErrorKind::NotFound {
                    log::warn!("[LocalLauncher] 旧浏览器连接注册清理失败: {error}");
                }
            }
        }
    });
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;
    use std::sync::atomic::{AtomicUsize, Ordering};

    struct Fixture(PathBuf);
    impl Fixture {
        fn new() -> Self {
            let dir =
                std::env::temp_dir().join(format!("snippets-bookmark-delete-{}", Uuid::new_v4()));
            fs::create_dir_all(&dir).unwrap();
            Self(dir)
        }
        fn path(&self) -> PathBuf {
            self.0.join("Bookmarks")
        }
        fn backups(&self) -> PathBuf {
            self.0.join("backups")
        }
    }
    impl Drop for Fixture {
        fn drop(&mut self) {
            // Only remove this test's generated directory inside the temp root.
            assert!(self.0.starts_with(std::env::temp_dir()));
            assert!(self
                .0
                .file_name()
                .unwrap()
                .to_string_lossy()
                .starts_with("snippets-bookmark-delete-"));
            let _ = fs::remove_dir_all(&self.0);
        }
    }
    fn source(path: &Path, node: &str) -> BookmarkSource {
        BookmarkSource::new(
            "Chrome",
            path,
            node.into(),
            vec!["Bookmarks bar".into()],
            "https://example.com/Path",
            "中文😀",
        )
    }
    fn document(edge: bool) -> Vec<u8> {
        let mut value = json!({"version":1,"sync_metadata":"","unknown_vendor_data":{"keep":true},"roots":{
            "bookmark_bar":{"id":"1","name":"书签栏","type":"folder","children":[
                {"id":"42","name":"中文😀","type":"url","url":"https://example.com/Path","guid":"target","unknown":"keep"},
                {"id":"43","name":"中文😀","type":"url","url":"https://example.com/Path","guid":"other"}
            ]},"other":{"id":"2","name":"Other","type":"folder","children":[]},"synced":{"id":"3","name":"Mobile","type":"folder","children":[]}
        }});
        if edge {
            value["roots"]["workspaces_v2"] = json!({"id":"4","name":"Workspaces","type":"folder","children":[],"source":"vendor"});
        }
        let (md5, sha256) = checksums(&value, &chromium_roots(&value).unwrap()).unwrap();
        value["checksum"] = json!(md5);
        value["checksum_sha256"] = json!(sha256);
        serde_json::to_vec_pretty(&value).unwrap()
    }
    #[test]
    fn chromium_removes_only_selected_node_and_preserves_other_roots_metadata_and_checksums() {
        for edge in [false, true] {
            let input = document(edge);
            if !edge {
                let original: Value = serde_json::from_slice(&input).unwrap();
                // Independent golden values cover UTF-16 surrogate pairs and traversal order.
                assert_eq!(original["checksum"], "f47ec74840337d96d7202f218b40fd26");
                assert_eq!(
                    original["checksum_sha256"],
                    "c006844a0a8b53d493005f315ecc10b4186b69351efc5d0bade01d7aecf8410d"
                );
            }
            let result = edited_chromium(&input, &[source(Path::new("Bookmarks"), "42")]).unwrap();
            let value: Value = serde_json::from_slice(&result).unwrap();
            assert_eq!(
                value["roots"]["bookmark_bar"]["children"]
                    .as_array()
                    .unwrap()
                    .len(),
                1
            );
            assert_eq!(value["roots"]["bookmark_bar"]["children"][0]["id"], "43");
            assert_eq!(value["sync_metadata"], "");
            assert_eq!(value["unknown_vendor_data"]["keep"], true);
            if edge {
                assert_eq!(value["roots"]["workspaces_v2"]["source"], "vendor");
            }
            let (md5, sha256) = checksums(&value, &chromium_roots(&value).unwrap()).unwrap();
            assert_eq!(value["checksum"], md5);
            assert_eq!(value["checksum_sha256"], sha256);
        }
    }
    #[test]
    fn changed_titles_urls_missing_nodes_folders_bad_checksums_and_partial_groups_are_rejected() {
        let input = document(false);
        let path = Path::new("Bookmarks");
        for mut selected in [
            source(path, "42"),
            source(path, "42"),
            source(path, "999"),
            source(path, "1"),
        ] {
            if selected.node_id == "42" {
                selected.title = "Changed".into();
            }
            assert!(edited_chromium(&input, &[selected]).is_err());
        }
        let mut changed_url = source(path, "42");
        changed_url.url.make_ascii_lowercase();
        assert!(edited_chromium(&input, &[changed_url]).is_err());
        assert!(edited_chromium(&input, &[source(path, "42"), source(path, "999")]).is_err());
        let mut broken: Value = serde_json::from_slice(&input).unwrap();
        broken["checksum"] = json!("invalid");
        assert!(
            edited_chromium(&serde_json::to_vec(&broken).unwrap(), &[source(path, "42")]).is_err()
        );
    }
    #[test]
    fn successful_replace_saves_byte_exact_backup_and_can_be_restored() {
        let fixture = Fixture::new();
        let path = fixture.path();
        let original = document(true);
        fs::write(&path, &original).unwrap();
        let backup = replace_chromium(
            &path,
            &[source(&path, "42")],
            &fixture.backups(),
            &|| Ok(()),
        )
        .unwrap();
        assert_eq!(fs::read(&backup).unwrap(), original);
        let restore: Value = serde_json::from_slice(
            &fs::read(backup.parent().unwrap().join("restore-info.json")).unwrap(),
        )
        .unwrap();
        assert_eq!(restore["sources"][0]["node_id"], "42");
        assert_eq!(restore["restore_requires_browser_closed"], true);
        assert_ne!(fs::read(&path).unwrap(), original);
        fs::copy(&backup, &path).unwrap();
        assert_eq!(fs::read(&path).unwrap(), original);
    }
    #[test]
    fn browser_reopening_and_concurrent_replacement_do_not_overwrite_original_or_changed_file() {
        let fixture = Fixture::new();
        let path = fixture.path();
        let original = document(false);
        fs::write(&path, &original).unwrap();
        let calls = AtomicUsize::new(0);
        assert!(
            replace_chromium(&path, &[source(&path, "42")], &fixture.backups(), &|| {
                if calls.fetch_add(1, Ordering::SeqCst) == 0 {
                    Ok(())
                } else {
                    Err("Browser reopened".into())
                }
            })
            .is_err()
        );
        assert_eq!(fs::read(&path).unwrap(), original);
        let calls = AtomicUsize::new(0);
        let changed = document(true);
        assert!(
            replace_chromium(&path, &[source(&path, "42")], &fixture.backups(), &|| {
                if calls.fetch_add(1, Ordering::SeqCst) > 0 {
                    fs::rename(&path, fixture.0.join("old-held-file")).unwrap();
                    fs::write(&path, &changed).unwrap();
                }
                Ok(())
            })
            .is_err()
        );
        assert_eq!(fs::read(&path).unwrap(), changed);
        assert!(fs::read_dir(&fixture.0).unwrap().all(|entry| !entry
            .unwrap()
            .file_name()
            .to_string_lossy()
            .ends_with(".tmp")));
    }
    #[test]
    fn held_files_browser_processes_and_untrusted_paths_are_rejected() {
        let fixture = Fixture::new();
        let path = fixture.path();
        fs::write(&path, document(false)).unwrap();
        let _held = OpenOptions::new()
            .read(true)
            .write(true)
            .share_mode(0)
            .open(&path)
            .unwrap();
        assert!(replace_chromium(
            &path,
            &[source(&path, "42")],
            &fixture.backups(),
            &|| Ok(())
        )
        .is_err());
        drop(_held);
        let selected = source(&path, "42");
        assert!(trusted_path(&selected, &[]).is_err());
        assert!(trusted_path(&selected, std::slice::from_ref(&path)).is_ok());
        let mut other = selected;
        other.profile_key = "wrong-profile".into();
        assert!(trusted_path(&other, &[path]).is_err());
        assert!(require_browser_closed("Chrome", &["chrome.exe".into()]).is_err());
        assert!(require_browser_closed("ShuangHe", &["gbrowser.exe".into()]).is_err());
        assert!(require_browser_closed("Firefox", &["chrome.exe".into()]).is_ok());
        assert!(require_browser_closed("Unknown", &[]).is_err());
    }

    #[test]
    fn backup_failure_keeps_original_bytes_and_malformed_documents_are_not_written() {
        let fixture = Fixture::new();
        let path = fixture.path();
        let original = document(false);
        fs::write(&path, &original).unwrap();
        fs::write(fixture.backups(), "not-a-directory").unwrap();
        assert!(replace_chromium(
            &path,
            &[source(&path, "42")],
            &fixture.backups(),
            &|| Ok(())
        )
        .is_err());
        assert_eq!(fs::read(&path).unwrap(), original);
        for invalid in [
            b"{broken".as_slice(),
            b"{\"version\":999,\"roots\":{}}".as_slice(),
        ] {
            fs::write(&path, invalid).unwrap();
            assert!(replace_chromium(
                &path,
                &[source(&path, "42")],
                &fixture.backups(),
                &|| Ok(())
            )
            .is_err());
            assert_eq!(fs::read(&path).unwrap(), invalid);
        }
    }
    #[test]
    fn invalid_sync_metadata_prevents_a_successful_write_or_backup() {
        let fixture = Fixture::new();
        let path = fixture.path();
        let mut value: Value = serde_json::from_slice(&document(false)).unwrap();
        value["sync_metadata"] = json!("unknown-sync-format");
        let original = serde_json::to_vec(&value).unwrap();
        fs::write(&path, &original).unwrap();
        let error = replace_chromium(
            &path,
            &[source(&path, "42")],
            &fixture.backups(),
            &|| Ok(()),
        )
        .unwrap_err();
        assert!(error.contains("同步记录"));
        assert_eq!(fs::read(&path).unwrap(), original);
        assert!(!fixture.backups().exists());
    }
    #[test]
    fn process_snapshot_includes_this_process() {
        let name = std::env::current_exe()
            .unwrap()
            .file_name()
            .unwrap()
            .to_string_lossy()
            .to_lowercase();
        assert!(running_process_names().unwrap().contains(&name));
    }
    fn firefox_fixture(fixture: &Fixture) -> PathBuf {
        let path = fixture.0.join("places.sqlite");
        let conn = Connection::open(&path).unwrap();
        conn.execute_batch("CREATE TABLE moz_bookmarks(id INTEGER PRIMARY KEY,parent INTEGER,position INTEGER,title TEXT,type INTEGER,guid TEXT,fk INTEGER,syncStatus INTEGER,syncChangeCounter INTEGER,lastModified INTEGER);
          CREATE TABLE moz_places(id INTEGER PRIMARY KEY,url TEXT,foreign_count INTEGER,recalc_frecency INTEGER);
          CREATE TABLE moz_bookmarks_deleted(guid TEXT PRIMARY KEY,dateRemoved INTEGER);
          INSERT INTO moz_places VALUES(1,'https://example.com/Path',2,0);
          INSERT INTO moz_bookmarks VALUES(1,0,0,'Root',2,'root________',NULL,2,0,0);
          INSERT INTO moz_bookmarks VALUES(2,1,0,'Folder',2,'toolbar_____',NULL,2,0,0);
          INSERT INTO moz_bookmarks VALUES(42,2,0,'中文😀',1,'node42______',1,2,0,0);
          INSERT INTO moz_bookmarks VALUES(43,2,1,'中文😀',1,'node43______',1,1,0,0);
          INSERT INTO moz_bookmarks VALUES(44,2,2,'',3,'separator___',NULL,1,0,0);").unwrap();
        path
    }
    #[test]
    fn firefox_deletion_updates_positions_sync_tombstones_and_foreign_count_and_keeps_history() {
        let fixture = Fixture::new();
        let path = firefox_fixture(&fixture);
        let mut selected = source(&path, "node42______");
        selected.browser = "Firefox".into();
        let backup = delete_firefox(&path, &[selected], &fixture.backups(), &|| Ok(())).unwrap();
        let conn = Connection::open(&path).unwrap();
        assert_eq!(
            conn.query_row(
                "SELECT COUNT(*) FROM moz_bookmarks WHERE id=42",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            0
        );
        assert_eq!(
            conn.query_row(
                "SELECT COUNT(*) FROM moz_bookmarks_deleted WHERE guid='node42______'",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            1
        );
        assert_eq!(
            conn.query_row(
                "SELECT position FROM moz_bookmarks WHERE id=43",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            0
        );
        assert_eq!(
            conn.query_row(
                "SELECT foreign_count FROM moz_places WHERE id=1",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            1
        );
        let restored = Connection::open(backup).unwrap();
        assert_eq!(
            restored
                .query_row(
                    "SELECT COUNT(*) FROM moz_bookmarks WHERE id=42",
                    [],
                    |row| row.get::<_, i64>(0)
                )
                .unwrap(),
            1
        );
    }
    #[test]
    fn firefox_group_rolls_back_all_nodes_if_one_changed_and_does_not_write_unsynced_tombstones() {
        let fixture = Fixture::new();
        let path = firefox_fixture(&fixture);
        let first = source(&path, "node42______");
        let mut changed = source(&path, "node43______");
        changed.title = "Changed".into();
        assert!(delete_firefox(&path, &[first, changed], &fixture.backups(), &|| Ok(())).is_err());
        let conn = Connection::open(&path).unwrap();
        assert_eq!(
            conn.query_row(
                "SELECT COUNT(*) FROM moz_bookmarks WHERE type=1",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            2
        );
        assert_eq!(
            conn.query_row("SELECT COUNT(*) FROM moz_bookmarks_deleted", [], |row| row
                .get::<_, i64>(
                0
            ))
            .unwrap(),
            0
        );
        drop(conn);
        delete_firefox(
            &path,
            &[source(&path, "node43______")],
            &fixture.backups(),
            &|| Ok(()),
        )
        .unwrap();
        let conn = Connection::open(&path).unwrap();
        assert_eq!(
            conn.query_row("SELECT COUNT(*) FROM moz_bookmarks_deleted", [], |row| row
                .get::<_, i64>(
                0
            ))
            .unwrap(),
            0
        );
    }
}
