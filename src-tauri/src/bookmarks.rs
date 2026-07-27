use crate::db;
use crate::icon;
use base64::{engine::general_purpose::STANDARD, Engine};
use glob::glob;
use rusqlite::{backup::Backup, Connection, OpenFlags};
use serde::{Deserialize, Serialize};
use std::collections::{HashMap, HashSet};
use std::fs;
use std::path::{Path, PathBuf};
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

// 获取所有已安装浏览器的 Favicon 数据库路径
// 返回一个 HashMap，键为浏览器名称，值为数据库路径
fn get_all_browser_favicon_paths() -> std::collections::HashMap<&'static str, PathBuf> {
    BROWSERS
        .iter()
        .filter_map(|config| find_browser_favicon_path(config).map(|path| (config.name, path)))
        .collect()
}

struct BrowserDbSnapshot {
    path: PathBuf,
    connection: Option<Connection>,
}

impl BrowserDbSnapshot {
    fn open(source: &Path, prefix: &str) -> Option<Self> {
        let path = std::env::temp_dir().join(format!("{}-{}.sqlite", prefix, Uuid::new_v4()));
        let source_connection =
            Connection::open_with_flags(source, OpenFlags::SQLITE_OPEN_READ_ONLY).ok()?;
        let mut connection = Connection::open(&path).ok()?;
        {
            // Online Backup API 从浏览器的同一读事务复制主库和 WAL 可见页，
            // 避免逐文件复制时主库/WAL 版本不一致。
            let backup = Backup::new(&source_connection, &mut connection).ok()?;
            if backup
                .run_to_completion(128, std::time::Duration::from_millis(5), None)
                .is_err()
            {
                let _ = fs::remove_file(&path);
                return None;
            }
        }
        Some(Self {
            path,
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
        let _ = fs::remove_file(&self.path);
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

    for (_browser_name, db_path) in get_all_browser_favicon_paths() {
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

    if let Some(firefox_db) = get_firefox_bookmarks_file() {
        if let Some(snapshot) = BrowserDbSnapshot::open(&firefox_db, "snippets-places") {
            let candidates = unresolved.into_iter().collect::<Vec<_>>();
            icons.extend(query_firefox_favicons(snapshot.connection(), &candidates));
        }
    }
    icons
}

pub fn get_favicon_from_browser_cache(url: &str) -> Option<String> {
    get_favicons_from_browser_cache(&[url.to_string()]).remove(url)
}

// 获取Firefox书签文件路径
fn get_firefox_bookmarks_file() -> Option<PathBuf> {
    let appdata = std::env::var("APPDATA").ok()?;
    let profiles_path = format!("{}\\Mozilla\\Firefox\\Profiles\\*.default*", appdata);

    // 查找默认配置文件
    if let Ok(entries) = glob(&profiles_path) {
        for path in entries.flatten() {
            let places_file = path.join("places.sqlite");
            if places_file.exists() {
                return Some(places_file);
            }
        }
    }
    None
}

fn extract_firefox_bookmarks(db_path: &PathBuf) -> Vec<BookmarkInfo> {
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
                for (id, title_opt, url) in rows.flatten() {
                    let mut title = title_opt.unwrap_or_default();
                    if title.is_empty() {
                        if let Some(domain_name) = get_domain_name(&url) {
                            title = domain_name;
                        }
                    }

                    bookmarks.push(BookmarkInfo {
                        id: id.to_string(),
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
    let mut paths = Vec::new();
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        let base_dir = format!("{}\\Google\\Chrome\\User Data", local_app_data);
        let base_path = PathBuf::from(&base_dir);

        // Check Default profile
        let default_bookmarks = base_path.join("Default\\Bookmarks");
        if default_bookmarks.exists() {
            paths.push(default_bookmarks);
        }

        // Check numbered profiles
        for i in 1..10 {
            let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
            if profile_bookmarks.exists() {
                paths.push(profile_bookmarks);
            }
        }
    }
    paths
}

fn get_edge_bookmarks_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        let base_dir = format!("{}\\Microsoft\\Edge\\User Data", local_app_data);
        let base_path = PathBuf::from(&base_dir);

        // Check Default profile
        let default_bookmarks = base_path.join("Default\\Bookmarks");
        if default_bookmarks.exists() {
            paths.push(default_bookmarks);
        }

        // Check numbered profiles
        for i in 1..10 {
            let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
            if profile_bookmarks.exists() {
                paths.push(profile_bookmarks);
            }
        }
    }
    paths
}

fn get_360_speed_bookmarks_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        let base_dir = format!("{}\\360Chrome\\Chrome\\User Data", local_app_data);
        let base_path = PathBuf::from(&base_dir);

        // Check Default profile
        let default_bookmarks = base_path.join("Default\\Bookmarks");
        if default_bookmarks.exists() {
            paths.push(default_bookmarks);
        }

        // Check numbered profiles
        for i in 1..10 {
            let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
            if profile_bookmarks.exists() {
                paths.push(profile_bookmarks);
            }
        }
    }
    paths
}

// 获取QQ浏览器书签路径
fn get_qq_browser_bookmarks_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        let base_dir = format!("{}\\Tencent\\QQBrowser\\User Data", local_app_data);
        let base_path = PathBuf::from(&base_dir);

        // Check Default profile
        let default_bookmarks = base_path.join("Default\\Bookmarks");
        if default_bookmarks.exists() {
            paths.push(default_bookmarks);
        }

        // Check numbered profiles
        for i in 1..10 {
            let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
            if profile_bookmarks.exists() {
                paths.push(profile_bookmarks);
            }
        }
    }
    paths
}

fn get_brave_bookmarks_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        let base_dir = format!(
            "{}\\BraveSoftware\\Brave-Browser\\User Data",
            local_app_data
        );
        let base_path = PathBuf::from(&base_dir);

        // Check Default profile
        let default_bookmarks = base_path.join("Default\\Bookmarks");
        if default_bookmarks.exists() {
            paths.push(default_bookmarks);
        }

        // Check numbered profiles
        for i in 1..10 {
            let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
            if profile_bookmarks.exists() {
                paths.push(profile_bookmarks);
            }
        }
    }
    paths
}

// 获取Vivaldi浏览器书签路径
fn get_vivaldi_bookmarks_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        let base_dir = format!("{}\\Vivaldi\\User Data", local_app_data);
        let base_path = PathBuf::from(&base_dir);

        // 检查默认配置文件
        let default_bookmarks = base_path.join("Default\\Bookmarks");
        if default_bookmarks.exists() {
            paths.push(default_bookmarks);
        }

        // 检查编号的配置文件
        for i in 1..10 {
            let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
            if profile_bookmarks.exists() {
                paths.push(profile_bookmarks);
            }
        }
    }
    paths
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
            let bookmarks = base_path.join("Bookmarks");
            if bookmarks.exists() {
                paths.push(bookmarks);
            }
        }
    }
    paths
}

// 获取ChromeCore浏览器书签路径
fn get_chromecore_bookmarks_paths() -> Vec<PathBuf> {
    let mut paths = Vec::new();
    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        let base_dir = format!("{}\\ChromeCore\\User Data", local_app_data);
        let base_path = PathBuf::from(&base_dir);

        // 检查默认配置文件
        let default_bookmarks = base_path.join("Default\\Bookmarks");
        if default_bookmarks.exists() {
            paths.push(default_bookmarks);
        }

        // 检查编号的配置文件
        for i in 1..10 {
            let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
            if profile_bookmarks.exists() {
                paths.push(profile_bookmarks);
            }
        }
    }
    paths
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
            let default_bookmarks = base_path.join("Default\\Bookmarks");
            if default_bookmarks.exists() {
                paths.push(default_bookmarks);
            }
            for i in 1..10 {
                let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
                if profile_bookmarks.exists() {
                    paths.push(profile_bookmarks);
                }
            }
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

                // 检查Default配置文件
                let default_bookmarks = base_path.join("Default\\Bookmarks");
                if default_bookmarks.exists() {
                    paths.push(default_bookmarks);
                }
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

                // 检查Default配置文件
                let default_bookmarks = base_path.join("Default\\Bookmarks");
                if default_bookmarks.exists() {
                    paths.push(default_bookmarks);
                }
            }
        }
    }

    paths
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

    if let Some(bookmarks_path) = get_firefox_bookmarks_file() {
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
                            id: Uuid::new_v4().to_string(),
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
