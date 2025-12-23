use crate::db;
use crate::icon;
use base64::{engine::general_purpose::STANDARD, Engine};
use glob::glob;
use rusqlite::Connection;
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;
use tauri_plugin_opener::OpenerExt;
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

#[derive(Debug)]
enum BrowserType {
    Chrome,
    Edge,
    Speed360,
    QQBrowser,
    Brave,
    Vivaldi,
    Opera,
    ShuangHe,
    ChromeCore,
}

// fn get_default_browser() -> BrowserType {
//     let hkcu = RegKey::predef(HKEY_CURRENT_USER);
//     let path =
//         "Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice";

//     if let Ok(key) = hkcu.open_subkey(path) {
//         if let Ok(prog_id) = key.get_value::<String, _>("ProgId") {
//             info!("默认浏览器 ProgId: {}", prog_id);
//             return match prog_id.to_lowercase() {
//                 s if s.contains("chrome") => BrowserType::Chrome,
//                 s if s.contains("edge") => BrowserType::Edge,
//                 s if s.contains("firefox") => BrowserType::Firefox,
//                 _ => BrowserType::Unknown,
//             };
//         }
//     }

//     BrowserType::Unknown
// }

// ============= 浏览器路径配置 =============

/// 浏览器配置结构
struct BrowserConfig {
    name: &'static str,
    env_var: &'static str,  // LOCALAPPDATA 或 APPDATA
    paths: &'static [&'static str],
    #[allow(dead_code)]
    enable_log: bool,
}

/// 所有支持的浏览器配置
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

/// 通用浏览器路径查找函数
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

/// 根据浏览器名称查找配置
fn get_browser_config(name: &str) -> Option<&'static BrowserConfig> {
    BROWSERS.iter().find(|b| b.name == name)
}

// 兼容性包装函数 - 保持向后兼容
fn get_chrome_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("Chrome").and_then(find_browser_favicon_path)
}

fn get_edge_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("Edge").and_then(find_browser_favicon_path)
}

fn get_360_speed_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("360Speed").and_then(find_browser_favicon_path)
}

fn get_qq_browser_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("QQBrowser").and_then(find_browser_favicon_path)
}

fn get_brave_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("Brave").and_then(find_browser_favicon_path)
}

fn get_vivaldi_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("Vivaldi").and_then(find_browser_favicon_path)
}

fn get_opera_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("Opera").and_then(find_browser_favicon_path)
}

fn get_chromecore_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("ChromeCore").and_then(find_browser_favicon_path)
}

fn get_shuanghe_favicon_db_path() -> Option<PathBuf> {
    get_browser_config("ShuangHe").and_then(find_browser_favicon_path)
}

/// 获取所有已安装浏览器的 Favicon 数据库路径
/// 返回一个 HashMap，键为浏览器名称，值为数据库路径
#[allow(dead_code)]
fn get_all_browser_favicon_paths() -> std::collections::HashMap<&'static str, PathBuf> {
    BROWSERS
        .iter()
        .filter_map(|config| {
            find_browser_favicon_path(config).map(|path| (config.name, path))
        })
        .collect()
}

// 从Chrome/Edge的Favicons数据库获取图标
fn get_favicon_from_chrome_db(url: &str, db_path: &PathBuf) -> Option<String> {
    // 创建临时文件来复制数据库
    let temp_dir = std::env::temp_dir();
    let temp_db = temp_dir.join("temp_favicons.db");

    // 复制数据库文件，因为浏览器可能正在使用原文件
    if fs::copy(db_path, &temp_db).is_err() {
        return None;
    }

    let mut icon_data = None;

    if let Ok(conn) = Connection::open(&temp_db) {
        // 先从URLs表获取页面的icon_id
        let query = "
            SELECT icon_id FROM icon_mapping 
            WHERE page_url LIKE ?1 
            LIMIT 1
        ";

        let mut icon_id: Option<i64> = None;
        if let Ok(mut stmt) = conn.prepare(query) {
            if let Ok(mut rows) = stmt.query([&format!("%{}%", url)]) {
                if let Ok(Some(row)) = rows.next() {
                    icon_id = row.get(0).ok();
                }
            }
        }

        // 如果找到了icon_id，获取实际的图标数据
        if let Some(id) = icon_id {
            let favicon_query = "
                SELECT image_data FROM favicon_bitmaps 
                WHERE icon_id = ?1 
                ORDER BY width DESC 
                LIMIT 1
            ";

            if let Ok(mut stmt) = conn.prepare(favicon_query) {
                if let Ok(mut rows) = stmt.query([id]) {
                    if let Ok(Some(row)) = rows.next() {
                        if let Ok(data) = row.get::<_, Vec<u8>>(0) {
                            if !data.is_empty() {
                                // 转换为Base64
                                icon_data = Some(format!(
                                    "data:image/png;base64,{}",
                                    STANDARD.encode(&data)
                                ));
                            }
                        }
                    }
                }
            }
        }
    }

    // 清理临时文件
    let _ = fs::remove_file(temp_db);

    icon_data
}

// 获取Firefox的favicon
fn get_favicon_from_firefox_db(url: &str, places_db: &PathBuf) -> Option<String> {
    // 创建临时文件来复制数据库
    let temp_dir = std::env::temp_dir();
    let temp_db = temp_dir.join("temp_places.sqlite");

    // 复制数据库文件，因为Firefox可能正在使用原文件
    if fs::copy(places_db, &temp_db).is_err() {
        return None;
    }

    let mut icon_data = None;

    if let Ok(conn) = Connection::open(&temp_db) {
        // 查询特定URL的favicon
        let query = "
            SELECT data FROM moz_icons mi
            JOIN moz_icons_to_pages mitp ON mi.id = mitp.icon_id
            JOIN moz_pages_w_icons mpwi ON mitp.page_id = mpwi.id
            WHERE mpwi.page_url LIKE ?1
            LIMIT 1
        ";

        if let Ok(mut stmt) = conn.prepare(query) {
            if let Ok(mut rows) = stmt.query([&format!("%{}%", url)]) {
                if let Ok(Some(row)) = rows.next() {
                    if let Ok(data) = row.get::<_, Vec<u8>>(0) {
                        if !data.is_empty() {
                            // 转换为Base64
                            icon_data =
                                Some(format!("data:image/png;base64,{}", STANDARD.encode(&data)));
                        }
                    }
                }
            }
        }
    }

    // 清理临时文件
    let _ = fs::remove_file(temp_db);

    icon_data
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

    // 创建临时文件来复制数据库
    let temp_dir = std::env::temp_dir();
    let temp_db = temp_dir.join("temp_places.sqlite");

    // 复制数据库文件，因为 Firefox 可能正在使用原文件
    if fs::copy(db_path, &temp_db).is_err() {
        return bookmarks;
    }

    if let Ok(conn) = Connection::open(&temp_db) {
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
                    // 尝试从Firefox数据库直接获取图标
                    let icon = get_favicon_from_firefox_db(&url, db_path);
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
                        icon, // 如果找到图标则直接保存，否则为None
                        summarize: "bookmark".to_string(),
                        usage_count: 0,
                    });
                }
            }
        }
    }

    // 清理临时文件
    let _ = fs::remove_file(temp_db);

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
        let favicon_db_path = get_chrome_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::Chrome);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Chrome".to_string()).or_insert(0) += 1;
    }

    for bookmarks_path in get_edge_bookmarks_paths() {
        let favicon_db_path = get_edge_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::Edge);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Edge".to_string()).or_insert(0) += 1;
    }

    for bookmarks_path in get_360_speed_bookmarks_paths() {
        let favicon_db_path = get_360_speed_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::Speed360);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("360极速浏览器".to_string()).or_insert(0) += 1;
    }

    for bookmarks_path in get_qq_browser_bookmarks_paths() {
        let favicon_db_path = get_qq_browser_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::QQBrowser);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("QQ浏览器".to_string()).or_insert(0) += 1;
    }

    for bookmarks_path in get_brave_bookmarks_paths() {
        let favicon_db_path = get_brave_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::Brave);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Brave浏览器".to_string()).or_insert(0) += 1;
    }

    for bookmarks_path in get_vivaldi_bookmarks_paths() {
        let favicon_db_path = get_vivaldi_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::Vivaldi);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Vivaldi浏览器".to_string()).or_insert(0) += 1;
    }

    for bookmarks_path in get_opera_bookmarks_paths() {
        let favicon_db_path = get_opera_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::Opera);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Opera浏览器".to_string()).or_insert(0) += 1;
    }

    for bookmarks_path in get_chromecore_bookmarks_paths() {
        let favicon_db_path = get_chromecore_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::ChromeCore);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("ChromeCore浏览器".to_string()).or_insert(0) += 1;
    }

    for bookmarks_path in get_shuanghe_bookmarks_paths() {
        let favicon_db_path = get_shuanghe_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(&bookmarks_path, favicon_db_path.as_ref(), &BrowserType::ShuangHe);
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("双核浏览器".to_string()).or_insert(0) += 1;
    }

    if let Some(bookmarks_path) = get_firefox_bookmarks_file() {
        bookmarks.extend(extract_firefox_bookmarks(&bookmarks_path));
        *browser_stats.entry("Firefox".to_string()).or_insert(0) += 1;
    }


    // 去除重复书签（基于URL去重，这是最准确的去重方式）
    let mut unique_bookmarks = Vec::new();
    let mut seen_urls = std::collections::HashSet::new();

    for bookmark in bookmarks {
        // 标准化URL（转为小写，移除尾部斜杠）
        let normalized_url = bookmark.content.to_lowercase().trim_end_matches('/').to_string();
        
        if !seen_urls.contains(&normalized_url) {
            seen_urls.insert(normalized_url);
            unique_bookmarks.push(bookmark);
        }
    }

    let _ = browser_stats;
    unique_bookmarks
}

// 从Chromium系列浏览器提取书签
fn extract_chromium_bookmarks(
    bookmarks_path: &PathBuf,
    favicon_db_path: Option<&PathBuf>,
    browser_type: &BrowserType,
) -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();
    let _ = browser_type;

    if let Ok(content) = fs::read_to_string(bookmarks_path) {
        if let Ok(json) = serde_json::from_str::<serde_json::Value>(&content) {
            if let Some(roots) = json.get("roots") {
                if let Some(bookmark_bar) = roots.get("bookmark_bar") {
                    bookmarks.extend(extract_bookmarks(bookmark_bar, favicon_db_path, browser_type));
                }
                if let Some(other) = roots.get("other") {
                    bookmarks.extend(extract_bookmarks(other, favicon_db_path, browser_type));
                }
                if let Some(synced) = roots.get("synced") {
                    bookmarks.extend(extract_bookmarks(synced, favicon_db_path, browser_type));
                }
            }
        }
    }
    bookmarks
}

// 从书签JSON提取书签信息
fn extract_bookmarks(
    value: &serde_json::Value,
    favicon_db: Option<&PathBuf>,
    browser_type: &BrowserType,
) -> Vec<BookmarkInfo> {
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

                        // 尝试从浏览器数据库获取图标
                        let icon = if let Some(db_path) = favicon_db {
                            match browser_type {
                                BrowserType::Chrome
                                | BrowserType::Edge
                                | BrowserType::Speed360
                                | BrowserType::QQBrowser
                                | BrowserType::Brave
                                | BrowserType::Vivaldi
                                | BrowserType::Opera
                                | BrowserType::ShuangHe
                                | BrowserType::ChromeCore => {
                                    get_favicon_from_chrome_db(&url_str, db_path)
                                }
                            }
                        } else {
                            None
                        };

                        bookmarks.push(BookmarkInfo {
                            id: Uuid::new_v4().to_string(),
                            title,
                            content: url_str,
                            icon,
                            summarize: "bookmark".to_string(),
                            usage_count: 0,
                        });
                    }
                }
            } else if type_.as_str().unwrap_or("") == "folder" {
                if let Some(children) = obj.get("children") {
                    if let Some(children_array) = children.as_array() {
                        for child in children_array {
                            bookmarks.extend(extract_bookmarks(child, favicon_db, browser_type));
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
    // 为异步操作创建新的Tokio运行时
    let runtime = match tokio::runtime::Runtime::new() {
        Ok(rt) => rt,
        Err(e) => {
            log::error!("创建Tokio运行时失败: {}", e);
            // 更新计数，标记任务完成但没有成功处理任何书签
            {
                let mut counter = updated_count.lock().unwrap();
                *counter = 0;
            }
            {
                let mut complete = completion_counter.lock().unwrap();
                *complete += 1;
            }
            return;
        }
    };

    // 使用通用图标加载器
    let count = icon::load_icons_generic(
        bookmarks,
        |bookmark| bookmark.icon.is_some(),
        |bookmark| runtime.block_on(async { icon::fetch_favicon_async(&bookmark.content).await }),
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

#[tauri::command]
pub fn open_url(url: String) {
    if let Some(app) = crate::APP.get() {
        let _ = app.opener().open_url(url, Option::<String>::None);
    }
}
