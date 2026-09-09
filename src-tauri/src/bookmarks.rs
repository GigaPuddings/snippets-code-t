use crate::db;
use crate::icon;
use base64::{engine::general_purpose::STANDARD, Engine};
use rusqlite::{
    backup::{Backup, StepResult},
    Connection, OpenFlags,
};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::collections::{HashMap, HashSet};
use std::fs;
use std::path::{Path, PathBuf};
use std::sync::Once;
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};
use uuid::Uuid;

// 从URL提取域名作为标题
fn get_domain_name(url_str: &str) -> Option<String> {
    url::Url::parse(url_str).ok().and_then(|u| {
        u.host_str().map(|h| {
            let parts: Vec<&str> = h.split('.').collect();
            if parts.len() > 1 && parts[0].eq_ignore_ascii_case("www") {
                parts[1].to_string()
            } else {
                parts[0].to_string()
            }
        })
    })
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct BookmarkInfo {
    pub id: String,
    pub title: String,
    pub content: String,
    pub icon: Option<String>,
    pub summarize: String,
    #[serde(default)]
    pub usage_count: u32,
}

// ============= 浏览器路径配置 =============

// 浏览器配置结构
struct BrowserConfig {
    #[allow(dead_code)]
    name: &'static str,
    env_var: &'static str, // LOCALAPPDATA 或 APPDATA
    paths: &'static [&'static str],
    #[allow(dead_code)]
    enable_log: bool,
}

// 所有支持的浏览器配置
const BROWSERS: &[BrowserConfig] = &[
    BrowserConfig {
        name: "Chrome",
        env_var: "LOCALAPPDATA",
        paths: &[
            "Google\\Chrome\\User Data\\Default\\Favicons",
            "Google\\Chrome\\User Data\\Profile 1\\Favicons",
        ],
        enable_log: false,
    },
    BrowserConfig {
        name: "Edge",
        env_var: "LOCALAPPDATA",
        paths: &[
            "Microsoft\\Edge\\User Data\\Default\\Favicons",
            "Microsoft\\Edge\\User Data\\Profile 1\\Favicons",
        ],
        enable_log: false,
    },
    BrowserConfig {
        name: "360Speed",
        env_var: "LOCALAPPDATA",
        paths: &[
            "360Chrome\\Chrome\\User Data\\Default\\Favicons",
            "360Chrome\\Chrome\\User Data\\Profile 1\\Favicons",
        ],
        enable_log: false,
    },
    BrowserConfig {
        name: "QQBrowser",
        env_var: "LOCALAPPDATA",
        paths: &[
            "Tencent\\QQBrowser\\User Data\\Default\\Favicons",
            "Tencent\\QQBrowser\\User Data\\Profile 1\\Favicons",
        ],
        enable_log: false,
    },
    BrowserConfig {
        name: "Brave",
        env_var: "LOCALAPPDATA",
        paths: &[
            "BraveSoftware\\Brave-Browser\\User Data\\Default\\Favicons",
            "BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Favicons",
        ],
        enable_log: false,
    },
    BrowserConfig {
        name: "Vivaldi",
        env_var: "LOCALAPPDATA",
        paths: &[
            "Vivaldi\\User Data\\Default\\Favicons",
            "Vivaldi\\User Data\\Profile 1\\Favicons",
        ],
        enable_log: false,
    },
    BrowserConfig {
        name: "Opera",
        env_var: "APPDATA",
        paths: &[
            "Opera Software\\Opera Stable\\Favicons",
            "Opera Software\\Opera GX Stable\\Favicons",
        ],
        enable_log: false,
    },
    BrowserConfig {
        name: "ChromeCore",
        env_var: "LOCALAPPDATA",
        paths: &[
            "ChromeCore\\User Data\\Default\\Favicons",
            "ChromeCore\\User Data\\Profile 1\\Favicons",
        ],
        enable_log: true,
    },
    BrowserConfig {
        name: "ShuangHe",
        env_var: "LOCALAPPDATA",
        paths: &[
            "Chromium\\GbrowserData\\Default\\Favicons",
            "Chromium\\GbrowserData\\Profile 1\\Favicons",
            "ShuangHeKeJi\\ShuangHe\\User Data\\Default\\Favicons",
            "ShuangHeKeJi\\ShuangHe\\User Data\\Profile 1\\Favicons",
            "双核科技\\双核浏览器\\User Data\\Default\\Favicons",
            "双核科技\\双核浏览器\\User Data\\Profile 1\\Favicons",
            "ShuangHeBrowser\\User Data\\Default\\Favicons",
            "ShuangHeBrowser\\User Data\\Profile 1\\Favicons",
            "ChromeCore\\User Data\\Default\\Favicons",
            "ChromeCore\\User Data\\Profile 1\\Favicons",
        ],
        enable_log: true,
    },
];

// 通用浏览器路径查找函数
fn find_browser_favicon_path(config: &BrowserConfig) -> Option<PathBuf> {
    let base = std::env::var(config.env_var).ok()?;

    for path_template in config.paths {
        let path = PathBuf::from(format!("{}\\{}", base, path_template));
        if path.exists() {
            return Some(path);
        }
    }
    None
}

// 获取所有已安装浏览器、所有已发现配置文件的 Favicon 数据库路径。
fn get_all_browser_favicon_paths() -> Vec<PathBuf> {
    let mut paths = BROWSERS
        .iter()
        .filter_map(find_browser_favicon_path)
        .collect::<Vec<_>>();
    paths.extend(
        get_all_browser_bookmark_paths()
            .into_iter()
            .filter(|path| path.file_name().is_some_and(|name| name == "Bookmarks"))
            .filter_map(|path| path.parent().map(|parent| parent.join("Favicons")))
            .filter(|path| path.is_file()),
    );
    paths.sort_unstable();
    paths.dedup();
    paths
}

struct BrowserDbSnapshot {
    temp_dir: Option<PathBuf>,
    connection: Option<Connection>,
}

static BROWSER_SNAPSHOT_CLEANUP: Once = Once::new();

fn cleanup_stale_browser_snapshots() {
    BROWSER_SNAPSHOT_CLEANUP.call_once(|| {
        let Ok(entries) = fs::read_dir(std::env::temp_dir()) else {
            return;
        };
        let cutoff = SystemTime::now()
            .checked_sub(Duration::from_secs(60 * 60))
            .unwrap_or(SystemTime::UNIX_EPOCH);

        for entry in entries.flatten() {
            let name = entry.file_name();
            let name = name.to_string_lossy();
            if !name.starts_with("snippets-favicons-") && !name.starts_with("snippets-places-") {
                continue;
            }
            let is_stale = entry
                .metadata()
                .and_then(|metadata| metadata.modified())
                .map(|modified| modified < cutoff)
                .unwrap_or(false);
            if !is_stale {
                continue;
            }
            let path = entry.path();
            if path.is_dir() {
                let _ = fs::remove_dir_all(path);
            } else {
                let _ = fs::remove_file(path);
            }
        }
    });
}

fn copy_sqlite_snapshot(source: &Path, target: &Path) -> std::io::Result<()> {
    fs::copy(source, target)?;
    for suffix in ["-wal", "-shm"] {
        let source_sidecar = PathBuf::from(format!("{}{}", source.to_string_lossy(), suffix));
        if !source_sidecar.is_file() {
            continue;
        }
        let target_sidecar = PathBuf::from(format!("{}{}", target.to_string_lossy(), suffix));
        let _ = fs::copy(source_sidecar, target_sidecar);
    }
    Ok(())
}

fn open_readonly_browser_db(path: &Path) -> Option<Connection> {
    let connection = Connection::open_with_flags(path, OpenFlags::SQLITE_OPEN_READ_ONLY).ok()?;
    let _ = connection.busy_timeout(Duration::from_millis(250));
    Some(connection)
}

fn create_bounded_online_backup(source: &Path, target: &Path) -> bool {
    let Some(source_connection) = open_readonly_browser_db(source) else {
        return false;
    };
    let Ok(mut target_connection) = Connection::open(target) else {
        return false;
    };
    let Ok(backup) = Backup::new(&source_connection, &mut target_connection) else {
        return false;
    };
    let deadline = Instant::now() + Duration::from_millis(750);

    loop {
        match backup.step(256) {
            Ok(StepResult::Done) => return true,
            Ok(StepResult::More) if Instant::now() < deadline => {}
            Ok(StepResult::Busy | StepResult::Locked) if Instant::now() < deadline => {
                std::thread::sleep(Duration::from_millis(10));
            }
            Ok(_) | Err(_) => return false,
        }
    }
}

impl BrowserDbSnapshot {
    fn open(source: &Path, prefix: &str) -> Option<Self> {
        cleanup_stale_browser_snapshots();

        // 浏览器可能长期持有写事务。先尝试有 750ms 截止时间的在线备份，保证
        // 主库与 WAL 一致；Busy/Locked 超时后改用有界文件复制。任何路径失败
        // 都只会跳过本轮图标，不再让整个本地索引永久停留在“后台加载”。
        let temp_dir = std::env::temp_dir().join(format!("{}-{}", prefix, Uuid::new_v4()));
        if fs::create_dir(&temp_dir).is_ok() {
            let snapshot_path = temp_dir.join("snapshot.sqlite");
            let online_backup_completed = create_bounded_online_backup(source, &snapshot_path);
            if !online_backup_completed {
                let _ = fs::remove_file(&snapshot_path);
            }
            if online_backup_completed || copy_sqlite_snapshot(source, &snapshot_path).is_ok() {
                if let Some(connection) = open_readonly_browser_db(&snapshot_path) {
                    return Some(Self {
                        temp_dir: Some(temp_dir),
                        connection: Some(connection),
                    });
                }
            }
            let _ = fs::remove_dir_all(&temp_dir);
        }

        open_readonly_browser_db(source).map(|connection| Self {
            temp_dir: None,
            connection: Some(connection),
        })
    }

    fn connection(&self) -> &Connection {
        self.connection
            .as_ref()
            .expect("browser database snapshot connection")
    }
}

impl Drop for BrowserDbSnapshot {
    fn drop(&mut self) {
        drop(self.connection.take());
        if let Some(temp_dir) = self.temp_dir.take() {
            let _ = fs::remove_dir_all(temp_dir);
        }
    }
}

const CHROMIUM_FAVICON_QUERY: &str = "SELECT fb.image_data
     FROM icon_mapping im
     JOIN favicon_bitmaps fb ON fb.icon_id = im.icon_id
     WHERE im.page_url = ?1
     ORDER BY fb.width DESC
     LIMIT 1";
const FIREFOX_FAVICON_QUERY: &str = "SELECT mi.data
     FROM moz_icons mi
     JOIN moz_icons_to_pages mitp ON mi.id = mitp.icon_id
     JOIN moz_pages_w_icons mpwi ON mitp.page_id = mpwi.id
     WHERE mpwi.page_url = ?1
     ORDER BY mi.width DESC
     LIMIT 1";

fn query_favicons(
    connection: &Connection,
    urls: &[String],
    query: &str,
) -> HashMap<String, String> {
    let Ok(mut stmt) = connection.prepare(query) else {
        return HashMap::new();
    };
    urls.iter()
        .filter_map(|url| {
            let data = stmt.query_row([url], |row| row.get::<_, Vec<u8>>(0)).ok()?;
            (!data.is_empty()).then(|| {
                (
                    url.clone(),
                    format!("data:image/png;base64,{}", STANDARD.encode(data)),
                )
            })
        })
        .collect()
}

fn query_chromium_favicons(connection: &Connection, urls: &[String]) -> HashMap<String, String> {
    query_favicons(connection, urls, CHROMIUM_FAVICON_QUERY)
}

fn query_firefox_favicons(connection: &Connection, urls: &[String]) -> HashMap<String, String> {
    query_favicons(connection, urls, FIREFOX_FAVICON_QUERY)
}

// 优先从本机浏览器 favicon 缓存批量查找图标。每个浏览器数据库只复制/打开一次。
pub fn get_favicons_from_browser_cache(urls: &[String]) -> HashMap<String, String> {
    let mut unresolved = urls.iter().cloned().collect::<HashSet<_>>();
    let mut icons = HashMap::new();

    for db_path in get_all_browser_favicon_paths() {
        let Some(snapshot) = BrowserDbSnapshot::open(&db_path, "snippets-favicons") else {
            continue;
        };
        let candidates = unresolved.iter().cloned().collect::<Vec<_>>();
        for (url, icon) in query_chromium_favicons(snapshot.connection(), &candidates) {
            unresolved.remove(&url);
            icons.insert(url, icon);
        }
        if unresolved.is_empty() {
            return icons;
        }
    }

    for firefox_db in get_firefox_bookmarks_files() {
        if let Some(snapshot) = BrowserDbSnapshot::open(&firefox_db, "snippets-places") {
            let candidates = unresolved.iter().cloned().collect::<Vec<_>>();
            for (url, icon) in query_firefox_favicons(snapshot.connection(), &candidates) {
                unresolved.remove(&url);
                icons.insert(url, icon);
            }
            if unresolved.is_empty() {
                break;
            }
        }
    }
    icons
}

fn bookmark_scanner_id(url: &str) -> String {
    // URL path/query may be case-sensitive and a trailing slash can identify a
    // different resource. Only remove surrounding whitespace introduced by a
    // malformed source file; do not perform lossy URL canonicalization here.
    let digest = Sha256::digest(url.trim().as_bytes());
    format!("bookmark-{}", hex::encode(digest))
}

pub fn get_favicon_from_browser_cache(url: &str) -> Option<String> {
    get_favicons_from_browser_cache(&[url.to_string()]).remove(url)
}

// 获取所有 Firefox 配置文件中的书签数据库，而不是只读取第一个默认配置。
fn get_firefox_bookmarks_files() -> Vec<PathBuf> {
    let Some(profiles_root) = std::env::var("APPDATA")
        .ok()
        .map(PathBuf::from)
        .map(|path| path.join(r"Mozilla\Firefox\Profiles"))
    else {
        return Vec::new();
    };
    let Ok(entries) = fs::read_dir(profiles_root) else {
        return Vec::new();
    };

    let mut paths = entries
        .filter_map(Result::ok)
        .filter(|entry| entry.file_type().map(|kind| kind.is_dir()).unwrap_or(false))
        .map(|entry| entry.path().join("places.sqlite"))
        .filter(|path| path.is_file())
        .collect::<Vec<_>>();
    paths.sort_unstable();
    paths
}

fn get_chromium_profile_bookmark_paths(base_path: &Path) -> Vec<PathBuf> {
    let mut paths = Vec::new();
    let root_bookmarks = base_path.join("Bookmarks");
    if root_bookmarks.is_file() {
        paths.push(root_bookmarks);
    }

    if let Ok(entries) = fs::read_dir(base_path) {
        for entry in entries.filter_map(Result::ok) {
            if !entry.file_type().map(|kind| kind.is_dir()).unwrap_or(false) {
                continue;
            }
            let bookmarks = entry.path().join("Bookmarks");
            if bookmarks.is_file() {
                paths.push(bookmarks);
            }
        }
    }

    paths.sort_unstable();
    paths.dedup();
    paths
}

fn extract_firefox_bookmarks(db_path: &Path) -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();
    if let Some(snapshot) = BrowserDbSnapshot::open(db_path, "snippets-places") {
        let conn = snapshot.connection();
        let query = "
            SELECT b.id, b.title, p.url
            FROM moz_bookmarks b
            JOIN moz_places p ON b.fk = p.id
            WHERE b.type = 1 AND p.url NOT LIKE 'place:%'
        ";

        if let Ok(mut stmt) = conn.prepare(query) {
            if let Ok(rows) = stmt.query_map([], |row| {
                Ok((
                    row.get::<_, i64>(0)?,
                    row.get::<_, Option<String>>(1)?,
                    row.get::<_, String>(2)?,
                ))
            }) {
                for (_id, title_opt, url) in rows.flatten() {
                    let mut title = title_opt.unwrap_or_default();
                    if title.is_empty() {
                        if let Some(domain_name) = get_domain_name(&url) {
                            title = domain_name;
                        }
                    }

                    bookmarks.push(BookmarkInfo {
                        // Firefox row IDs are only unique within one profile.
                        // URL-based IDs remain stable and cannot collide when
                        // multiple profiles are indexed together.
                        id: bookmark_scanner_id(&url),
                        title,
                        content: url,
                        icon: None,
                        summarize: "bookmark".to_string(),
                        usage_count: 0,
                    });
                }
            }
        }
    } else {
        log::warn!(
            "[LocalLauncher] 无法读取 Firefox 书签数据库快照: {}",
            db_path.display()
        );
    }

    log::info!(
        "[LocalLauncher] Firefox 书签文本扫描完成: path={}, count={}",
        db_path.display(),
        bookmarks.len()
    );
    bookmarks
}

// 获取Chrome浏览器书签路径
fn get_chrome_bookmarks_paths() -> Vec<PathBuf> {
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        return get_chromium_profile_bookmark_paths(
            &PathBuf::from(local_app_data).join(r"Google\Chrome\User Data"),
        );
    }
    Vec::new()
}

fn get_edge_bookmarks_paths() -> Vec<PathBuf> {
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        return get_chromium_profile_bookmark_paths(
            &PathBuf::from(local_app_data).join(r"Microsoft\Edge\User Data"),
        );
    }
    Vec::new()
}

fn get_360_speed_bookmarks_paths() -> Vec<PathBuf> {
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        return get_chromium_profile_bookmark_paths(
            &PathBuf::from(local_app_data).join(r"360Chrome\Chrome\User Data"),
        );
    }
    Vec::new()
}

// 获取QQ浏览器书签路径
fn get_qq_browser_bookmarks_paths() -> Vec<PathBuf> {
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        return get_chromium_profile_bookmark_paths(
            &PathBuf::from(local_app_data).join(r"Tencent\QQBrowser\User Data"),
        );
    }
    Vec::new()
}

fn get_brave_bookmarks_paths() -> Vec<PathBuf> {
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        return get_chromium_profile_bookmark_paths(
            &PathBuf::from(local_app_data).join(r"BraveSoftware\Brave-Browser\User Data"),
        );
    }
    Vec::new()
}

// 获取Vivaldi浏览器书签路径
fn get_vivaldi_bookmarks_paths() -> Vec<PathBuf> {
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        return get_chromium_profile_bookmark_paths(
            &PathBuf::from(local_app_data).join(r"Vivaldi\User Data"),
        );
    }
    Vec::new()
}

// 获取Opera浏览器书签路径
fn get_opera_bookmarks_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();
    if let Ok(app_data) = std::env::var("APPDATA") {
        let base_dirs = [
            format!("{}\\Opera Software\\Opera Stable", app_data),
            format!("{}\\Opera Software\\Opera GX Stable", app_data),
        ];

        for base_dir in base_dirs {
            let base_path = PathBuf::from(&base_dir);
            paths.extend(get_chromium_profile_bookmark_paths(&base_path));
        }
    }
    paths
}

// 获取ChromeCore浏览器书签路径
fn get_chromecore_bookmarks_paths() -> Vec<PathBuf> {
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        return get_chromium_profile_bookmark_paths(
            &PathBuf::from(local_app_data).join(r"ChromeCore\User Data"),
        );
    }
    Vec::new()
}

// 获取双核浏览器书签路径
fn get_shuanghe_bookmarks_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();

    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        // 添加您发现的新路径
        let gbrowser_path = format!(
            "{}\\Chromium\\GbrowserData\\Default\\Bookmarks",
            local_app_data
        );
        let gbrowser_path_buf = PathBuf::from(&gbrowser_path);
        if gbrowser_path_buf.exists() {
            paths.push(gbrowser_path_buf);
        }

        // 可能的双核浏览器书签路径
        let base_dirs = [
            format!("{}\\Chromium\\GbrowserData", local_app_data),
            format!("{}\\ShuangHeKeJi\\ShuangHe\\User Data", local_app_data),
            format!("{}\\双核科技\\双核浏览器\\User Data", local_app_data),
            format!("{}\\ShuangHeBrowser\\User Data", local_app_data),
            format!("{}\\ChromeCore\\User Data", local_app_data), // 添加ChromeCore路径
        ];

        for base_dir in base_dirs {
            let base_path = PathBuf::from(&base_dir);
            paths.extend(get_chromium_profile_bookmark_paths(&base_path));
        }
    }

    // 如果上面的路径都不存在，尝试搜索Program Files目录
    if paths.is_empty() {
        if let Ok(program_files) = std::env::var("PROGRAMFILES") {
            // 尝试在Program Files中查找
            let program_dirs = [
                format!("{}\\ShuangHeKeJi\\ShuangHe\\User Data", program_files),
                format!("{}\\双核科技\\双核浏览器\\User Data", program_files),
                format!("{}\\ShuangHeBrowser\\User Data", program_files),
            ];

            for program_dir in program_dirs {
                let base_path = PathBuf::from(&program_dir);
                paths.extend(get_chromium_profile_bookmark_paths(&base_path));
            }
        }
    }

    // 检查Program Files (x86)
    if paths.is_empty() {
        if let Ok(program_files_x86) = std::env::var("PROGRAMFILES(X86)") {
            // 尝试在Program Files (x86)中查找
            let program_dirs = [
                format!("{}\\ShuangHeKeJi\\ShuangHe\\User Data", program_files_x86),
                format!("{}\\双核科技\\双核浏览器\\User Data", program_files_x86),
                format!("{}\\ShuangHeBrowser\\User Data", program_files_x86),
            ];

            for program_dir in program_dirs {
                let base_path = PathBuf::from(&program_dir);
                paths.extend(get_chromium_profile_bookmark_paths(&base_path));
            }
        }
    }

    paths.sort_unstable();
    paths.dedup();
    paths
}

fn get_all_browser_bookmark_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();
    paths.extend(get_chrome_bookmarks_paths());
    paths.extend(get_edge_bookmarks_paths());
    paths.extend(get_360_speed_bookmarks_paths());
    paths.extend(get_qq_browser_bookmarks_paths());
    paths.extend(get_brave_bookmarks_paths());
    paths.extend(get_vivaldi_bookmarks_paths());
    paths.extend(get_opera_bookmarks_paths());
    paths.extend(get_chromecore_bookmarks_paths());
    paths.extend(get_shuanghe_bookmarks_paths());
    paths.extend(get_firefox_bookmarks_files());
    paths.sort_unstable();
    paths.dedup();
    paths
}

fn add_path_fingerprint(hasher: &mut Sha256, path: &Path) {
    let Ok(metadata) = fs::metadata(path) else {
        return;
    };
    let modified = metadata
        .modified()
        .ok()
        .and_then(|value| value.duration_since(UNIX_EPOCH).ok())
        .map(|value| value.as_nanos())
        .unwrap_or(0);
    hasher.update(path.to_string_lossy().to_ascii_lowercase().as_bytes());
    hasher.update([0]);
    hasher.update(metadata.len().to_le_bytes());
    hasher.update(modified.to_le_bytes());
}

/// Fingerprints only bookmark source files. Firefox's WAL sidecar is included
/// because a newly saved bookmark can live there before `places.sqlite` is
/// checkpointed by the browser.
pub fn browser_bookmarks_source_fingerprint() -> String {
    let mut paths = get_all_browser_bookmark_paths();
    for database in get_firefox_bookmarks_files() {
        paths.push(PathBuf::from(format!("{}-wal", database.to_string_lossy())));
    }
    paths.sort_unstable();
    paths.dedup();

    let mut hasher = Sha256::new();
    for path in paths {
        add_path_fingerprint(&mut hasher, &path);
    }
    hex::encode(hasher.finalize())
}

// 获取浏览器书签
pub fn get_browser_bookmarks() -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();
    let mut browser_stats = std::collections::HashMap::new();

    // Chrome书签
    for bookmarks_path in get_chrome_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "Chrome");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Chrome".to_string()).or_insert(0) += count;
    }

    for bookmarks_path in get_edge_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "Edge");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Edge".to_string()).or_insert(0) += count;
    }

    for bookmarks_path in get_360_speed_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "360Speed");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats
            .entry("360极速浏览器".to_string())
            .or_insert(0) += count;
    }

    for bookmarks_path in get_qq_browser_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "QQBrowser");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("QQ浏览器".to_string()).or_insert(0) += count;
    }

    for bookmarks_path in get_brave_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "Brave");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Brave浏览器".to_string()).or_insert(0) += count;
    }

    for bookmarks_path in get_vivaldi_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "Vivaldi");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats
            .entry("Vivaldi浏览器".to_string())
            .or_insert(0) += count;
    }

    for bookmarks_path in get_opera_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "Opera");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Opera浏览器".to_string()).or_insert(0) += count;
    }

    for bookmarks_path in get_chromecore_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "ChromeCore");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats
            .entry("ChromeCore浏览器".to_string())
            .or_insert(0) += count;
    }

    for bookmarks_path in get_shuanghe_bookmarks_paths() {
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, "ShuangHe");
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("双核浏览器".to_string()).or_insert(0) += count;
    }

    for bookmarks_path in get_firefox_bookmarks_files() {
        let new_bookmarks = extract_firefox_bookmarks(&bookmarks_path);
        let count = new_bookmarks.len();
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Firefox".to_string()).or_insert(0) += count;
    }

    // 去除重复书签（基于URL去重，这是最准确的去重方式）
    let mut unique_bookmarks = Vec::new();
    let mut seen_urls = std::collections::HashSet::new();

    for bookmark in bookmarks {
        // 标准化URL（转为小写，移除尾部斜杠）
        let normalized_url = bookmark
            .content
            .to_lowercase()
            .trim_end_matches('/')
            .to_string();

        if !seen_urls.contains(&normalized_url) {
            seen_urls.insert(normalized_url);
            unique_bookmarks.push(bookmark);
        }
    }

    log::info!(
        "[LocalLauncher] 浏览器书签文本索引扫描完成: sources={:?}, unique_count={}",
        browser_stats,
        unique_bookmarks.len()
    );
    unique_bookmarks
}

// 从Chromium系列浏览器提取书签
fn extract_chromium_bookmarks(bookmarks_path: &PathBuf, browser_name: &str) -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();
    match fs::read_to_string(bookmarks_path) {
        Ok(content) => match serde_json::from_str::<serde_json::Value>(&content) {
            Ok(json) => {
                if let Some(roots) = json.get("roots") {
                    if let Some(bookmark_bar) = roots.get("bookmark_bar") {
                        bookmarks.extend(extract_bookmarks(bookmark_bar));
                    }
                    if let Some(other) = roots.get("other") {
                        bookmarks.extend(extract_bookmarks(other));
                    }
                    if let Some(synced) = roots.get("synced") {
                        bookmarks.extend(extract_bookmarks(synced));
                    }
                }
            }
            Err(error) => log::warn!(
                "[LocalLauncher] 解析 {} 书签 JSON 失败: path={}, error={}",
                browser_name,
                bookmarks_path.display(),
                error
            ),
        },
        Err(error) => log::warn!(
            "[LocalLauncher] 读取 {} 书签文件失败: path={}, error={}",
            browser_name,
            bookmarks_path.display(),
            error
        ),
    };

    log::info!(
        "[LocalLauncher] {} 书签文本扫描完成: path={}, count={}",
        browser_name,
        bookmarks_path.display(),
        bookmarks.len()
    );
    bookmarks
}

// 从书签JSON提取书签信息
fn extract_bookmarks(value: &serde_json::Value) -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();

    if let Some(obj) = value.as_object() {
        if let Some(type_) = obj.get("type") {
            if type_.as_str().unwrap_or("") == "url" {
                if let Some(url) = obj.get("url") {
                    if let Some(name) = obj.get("name") {
                        let url_str = url.as_str().unwrap_or("").to_string();
                        let mut title = name.as_str().unwrap_or("").to_string();

                        if title.is_empty() {
                            if let Some(domain_name) = get_domain_name(&url_str) {
                                title = domain_name;
                            }
                        }

                        bookmarks.push(BookmarkInfo {
                            id: bookmark_scanner_id(&url_str),
                            title,
                            content: url_str,
                            icon: None,
                            summarize: "bookmark".to_string(),
                            usage_count: 0,
                        });
                    }
                }
            } else if type_.as_str().unwrap_or("") == "folder" {
                if let Some(children) = obj.get("children") {
                    if let Some(children_array) = children.as_array() {
                        for child in children_array {
                            bookmarks.extend(extract_bookmarks(child));
                        }
                    }
                }
            }
        }
    }

    bookmarks
}

// 在背景线程中加载书签图标 (无通知版本)
#[allow(dead_code)]
pub fn load_bookmark_icons_async_silent(
    bookmarks: Vec<BookmarkInfo>,
    updated_count: std::sync::Arc<std::sync::Mutex<usize>>,
    completion_counter: std::sync::Arc<std::sync::Mutex<usize>>,
) {
    let missing_urls = bookmarks
        .iter()
        .filter(|bookmark| bookmark.icon.is_none())
        .map(|bookmark| bookmark.content.clone())
        .collect::<Vec<_>>();
    let local_icons = get_favicons_from_browser_cache(&missing_urls);

    // 扫描/插件更新只使用本地浏览器数据库，不触发批量网络请求。
    let count = icon::load_icons_generic(
        bookmarks,
        |bookmark| bookmark.icon.is_some(),
        |bookmark| local_icons.get(&bookmark.content).cloned(),
        |bookmark, icon| db::update_bookmark_icon(&bookmark.id, icon).map_err(|e| e.to_string()),
        "书签",
    );

    // 更新计数
    {
        let mut counter = updated_count.lock().unwrap();
        *counter = count;
    }

    // 标记此任务为完成
    {
        let mut complete = completion_counter.lock().unwrap();
        *complete += 1;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    struct TempProfileRoot(PathBuf);

    impl TempProfileRoot {
        fn new() -> Self {
            let path = std::env::temp_dir().join(format!(
                "snippets-code-bookmark-profiles-{}",
                uuid::Uuid::new_v4()
            ));
            fs::create_dir_all(&path).expect("create profile root");
            Self(path)
        }
    }

    impl Drop for TempProfileRoot {
        fn drop(&mut self) {
            let _ = fs::remove_dir_all(&self.0);
        }
    }

    #[test]
    fn discovers_all_chromium_profiles_without_a_numeric_limit() {
        let root = TempProfileRoot::new();
        for profile in ["Default", "Profile 12", "Work"] {
            let profile_dir = root.0.join(profile);
            fs::create_dir_all(&profile_dir).expect("create browser profile");
            fs::write(profile_dir.join("Bookmarks"), "{}").expect("write bookmarks");
        }
        fs::create_dir_all(root.0.join("Profile 2")).expect("create empty profile");

        let paths = get_chromium_profile_bookmark_paths(&root.0);

        assert_eq!(paths.len(), 3);
        assert!(paths
            .iter()
            .any(|path| path.ends_with(r"Profile 12\Bookmarks")));
        assert!(paths.iter().any(|path| path.ends_with(r"Work\Bookmarks")));
    }

    #[test]
    fn bookmark_scanner_ids_preserve_url_path_semantics() {
        assert_eq!(
            bookmark_scanner_id(" https://example.com/path "),
            bookmark_scanner_id("https://example.com/path")
        );
        assert_ne!(
            bookmark_scanner_id("https://example.com/Path"),
            bookmark_scanner_id("https://example.com/path")
        );
        assert_ne!(
            bookmark_scanner_id("https://example.com/path/"),
            bookmark_scanner_id("https://example.com/path")
        );
    }
}
