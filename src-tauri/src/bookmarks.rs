use crate::config::BROWSER_BOOKMARKS_KEY;
use crate::icon;
use base64::{engine::general_purpose::STANDARD, Engine};
use glob::glob;
use log::info;
use rusqlite::Connection;
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;
use tauri::AppHandle;
use tauri_plugin_opener::OpenerExt;
use tokio;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct BookmarkInfo {
    pub id: String,
    pub title: String,
    pub content: String,
    pub icon: Option<String>,
    pub summarize: String,
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

// 获取Chrome浏览器favicon数据库路径
fn get_chrome_favicon_db_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    let paths = [
        format!(
            "{}\\Google\\Chrome\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\Google\\Chrome\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            return Some(path_buf);
        }
    }
    None
}

fn get_edge_favicon_db_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    let paths = [
        format!(
            "{}\\Microsoft\\Edge\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\Microsoft\\Edge\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            return Some(path_buf);
        }
    }
    None
}

// 获取360浏览器favicon数据库路径
fn get_360_speed_favicon_db_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    let paths = [
        format!(
            "{}\\360Chrome\\Chrome\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\360Chrome\\Chrome\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            return Some(path_buf);
        }
    }
    None
}

// 获取QQ浏览器favicon数据库路径
fn get_qq_browser_favicon_db_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    let paths = [
        format!(
            "{}\\Tencent\\QQBrowser\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\Tencent\\QQBrowser\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            return Some(path_buf);
        }
    }
    None
}

fn get_brave_favicon_db_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    let paths = [
        format!(
            "{}\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            return Some(path_buf);
        }
    }
    None
}

// 获取Vivaldi浏览器favicon数据库路径
fn get_vivaldi_favicon_db_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    let paths = [
        format!("{}\\Vivaldi\\User Data\\Default\\Favicons", local_app_data),
        format!(
            "{}\\Vivaldi\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            return Some(path_buf);
        }
    }
    None
}

fn get_opera_favicon_db_path() -> Option<PathBuf> {
    let app_data = std::env::var("APPDATA").ok()?;
    let paths = [
        format!("{}\\Opera Software\\Opera Stable\\Favicons", app_data),
        format!("{}\\Opera Software\\Opera GX Stable\\Favicons", app_data),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            return Some(path_buf);
        }
    }
    None
}

// 获取ChromeCore浏览器favicon数据库路径
fn get_chromecore_favicon_db_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    let paths = [
        format!(
            "{}\\ChromeCore\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\ChromeCore\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            info!("找到ChromeCore浏览器favicon数据库: {:?}", path_buf);
            return Some(path_buf);
        }
    }
    info!("未找到ChromeCore浏览器favicon数据库");
    None
}

// 获取双核浏览器favicon数据库路径
fn get_shuanghe_favicon_db_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    // 双核浏览器可能的Favicon数据库路径
    let paths = [
        // 新增双核浏览器特定路径
        format!(
            "{}\\Chromium\\GbrowserData\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\Chromium\\GbrowserData\\Profile 1\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\ShuangHeKeJi\\ShuangHe\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\ShuangHeKeJi\\ShuangHe\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\双核科技\\双核浏览器\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\双核科技\\双核浏览器\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\ShuangHeBrowser\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\ShuangHeBrowser\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
        // 添加ChromeCore路径
        format!(
            "{}\\ChromeCore\\User Data\\Default\\Favicons",
            local_app_data
        ),
        format!(
            "{}\\ChromeCore\\User Data\\Profile 1\\Favicons",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            info!("找到双核浏览器favicon数据库: {:?}", path_buf);
            return Some(path_buf);
        }
    }
    info!("未找到双核浏览器favicon数据库");
    None
}

// 从Chrome/Edge的Favicons数据库获取图标
fn get_favicon_from_chrome_db(url: &str, db_path: &PathBuf) -> Option<String> {
    // 创建临时文件来复制数据库
    let temp_dir = std::env::temp_dir();
    let temp_db = temp_dir.join("temp_favicons.db");

    // 复制数据库文件，因为浏览器可能正在使用原文件
    if let Err(e) = fs::copy(db_path, &temp_db) {
        info!("复制Favicon数据库失败: {}", e);
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
    if let Err(e) = fs::copy(places_db, &temp_db) {
        info!("复制Firefox数据库失败: {}", e);
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
        for entry in entries {
            if let Ok(path) = entry {
                let places_file = path.join("places.sqlite");
                if places_file.exists() {
                    info!("找到 Firefox 书签文件: {:?}", places_file);
                    return Some(places_file);
                }
            }
        }
    }

    info!("未找到 Firefox 书签文件");
    None
}

fn extract_firefox_bookmarks(db_path: &PathBuf) -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();

    // 创建临时文件来复制数据库
    let temp_dir = std::env::temp_dir();
    let temp_db = temp_dir.join("temp_places.sqlite");

    // 复制数据库文件，因为 Firefox 可能正在使用原文件
    if let Err(e) = fs::copy(db_path, &temp_db) {
        info!("复制 Firefox 数据库失败: {}", e);
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
                    row.get::<_, String>(1)?,
                    row.get::<_, String>(2)?,
                ))
            }) {
                for row in rows {
                    if let Ok((id, title, url)) = row {
                        // 尝试从Firefox数据库直接获取图标
                        let icon = get_favicon_from_firefox_db(&url, db_path);

                        bookmarks.push(BookmarkInfo {
                            id: id.to_string(),
                            title,
                            content: url,
                            icon, // 如果找到图标则直接保存，否则为None
                            summarize: "bookmark".to_string(),
                        });
                    }
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
    info!("开始查找双核浏览器书签文件...");

    if let Ok(local_app_data) = std::env::var("LOCALAPPDATA") {
        // 添加您发现的新路径
        let gbrowser_path = format!(
            "{}\\Chromium\\GbrowserData\\Default\\Bookmarks",
            local_app_data
        );
        let gbrowser_path_buf = PathBuf::from(&gbrowser_path);
        if gbrowser_path_buf.exists() {
            info!(
                "找到双核浏览器书签文件(GbrowserData): {:?}",
                gbrowser_path_buf
            );
            paths.push(gbrowser_path_buf);
        } else {
            info!("路径不存在: {:?}", gbrowser_path);
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
            info!("检查目录: {:?}", base_path);

            // 检查Default配置文件
            let default_bookmarks = base_path.join("Default\\Bookmarks");
            if default_bookmarks.exists() {
                info!("找到双核浏览器书签文件: {:?}", default_bookmarks);
                paths.push(default_bookmarks);
            }

            // 检查其他配置文件
            for i in 1..10 {
                let profile_bookmarks = base_path.join(format!("Profile {}\\Bookmarks", i));
                if profile_bookmarks.exists() {
                    info!(
                        "找到双核浏览器Profile {}书签文件: {:?}",
                        i, profile_bookmarks
                    );
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
                    info!(
                        "找到双核浏览器书签文件(Program Files): {:?}",
                        default_bookmarks
                    );
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
                    info!(
                        "找到双核浏览器书签文件(Program Files (x86)): {:?}",
                        default_bookmarks
                    );
                    paths.push(default_bookmarks);
                }
            }
        }
    }

    if paths.is_empty() {
        info!("未找到任何双核浏览器书签文件");
    } else {
        info!("共找到 {} 个双核浏览器书签文件", paths.len());
    }

    paths
}

// 获取浏览器书签
pub fn get_browser_bookmarks() -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();
    let mut browser_stats = std::collections::HashMap::new();

    info!("开始检索所有浏览器书签");

    // Chrome书签
    let chrome_bookmarks = get_chrome_bookmarks_paths();
    info!("找到 {} 个Chrome书签文件", chrome_bookmarks.len());
    for bookmarks_path in chrome_bookmarks {
        info!("正在检索Chrome书签: {:?}", bookmarks_path);
        let favicon_db_path = get_chrome_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::Chrome,
        );
        info!("从Chrome书签文件提取到 {} 个书签", new_bookmarks.len());
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Chrome".to_string()).or_insert(0) += 1;
    }

    // Edge书签
    let edge_bookmarks = get_edge_bookmarks_paths();
    info!("找到 {} 个Edge书签文件", edge_bookmarks.len());
    for bookmarks_path in edge_bookmarks {
        info!("正在检索Edge书签: {:?}", bookmarks_path);
        let favicon_db_path = get_edge_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::Edge,
        );
        info!("从Edge书签文件提取到 {} 个书签", new_bookmarks.len());
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Edge".to_string()).or_insert(0) += 1;
    }

    // 360极速浏览器书签
    let speed360_bookmarks = get_360_speed_bookmarks_paths();
    info!("找到 {} 个360极速浏览器书签文件", speed360_bookmarks.len());
    for bookmarks_path in speed360_bookmarks {
        info!("正在检索360极速浏览器书签: {:?}", bookmarks_path);
        let favicon_db_path = get_360_speed_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::Speed360,
        );
        info!(
            "从360极速浏览器书签文件提取到 {} 个书签",
            new_bookmarks.len()
        );
        bookmarks.extend(new_bookmarks);
        *browser_stats
            .entry("360极速浏览器".to_string())
            .or_insert(0) += 1;
    }

    // QQ浏览器书签
    let qq_bookmarks = get_qq_browser_bookmarks_paths();
    info!("找到 {} 个QQ浏览器书签文件", qq_bookmarks.len());
    for bookmarks_path in qq_bookmarks {
        info!("正在检索QQ浏览器书签: {:?}", bookmarks_path);
        let favicon_db_path = get_qq_browser_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::QQBrowser,
        );
        info!("从QQ浏览器书签文件提取到 {} 个书签", new_bookmarks.len());
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("QQ浏览器".to_string()).or_insert(0) += 1;
    }

    // Brave浏览器书签
    let brave_bookmarks = get_brave_bookmarks_paths();
    info!("找到 {} 个Brave浏览器书签文件", brave_bookmarks.len());
    for bookmarks_path in brave_bookmarks {
        info!("正在检索Brave浏览器书签: {:?}", bookmarks_path);
        let favicon_db_path = get_brave_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::Brave,
        );
        info!("从Brave浏览器书签文件提取到 {} 个书签", new_bookmarks.len());
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Brave浏览器".to_string()).or_insert(0) += 1;
    }

    // Vivaldi浏览器书签
    let vivaldi_bookmarks = get_vivaldi_bookmarks_paths();
    info!("找到 {} 个Vivaldi浏览器书签文件", vivaldi_bookmarks.len());
    for bookmarks_path in vivaldi_bookmarks {
        info!("正在检索Vivaldi浏览器书签: {:?}", bookmarks_path);
        let favicon_db_path = get_vivaldi_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::Vivaldi,
        );
        info!(
            "从Vivaldi浏览器书签文件提取到 {} 个书签",
            new_bookmarks.len()
        );
        bookmarks.extend(new_bookmarks);
        *browser_stats
            .entry("Vivaldi浏览器".to_string())
            .or_insert(0) += 1;
    }

    // Opera浏览器书签
    let opera_bookmarks = get_opera_bookmarks_paths();
    info!("找到 {} 个Opera浏览器书签文件", opera_bookmarks.len());
    for bookmarks_path in opera_bookmarks {
        info!("正在检索Opera浏览器书签: {:?}", bookmarks_path);
        let favicon_db_path = get_opera_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::Opera,
        );
        info!("从Opera浏览器书签文件提取到 {} 个书签", new_bookmarks.len());
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Opera浏览器".to_string()).or_insert(0) += 1;
    }

    // ChromeCore浏览器书签
    let chromecore_bookmarks = get_chromecore_bookmarks_paths();
    info!(
        "找到 {} 个ChromeCore浏览器书签文件",
        chromecore_bookmarks.len()
    );
    for bookmarks_path in chromecore_bookmarks {
        info!("正在检索ChromeCore浏览器书签: {:?}", bookmarks_path);
        let favicon_db_path = get_chromecore_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::ChromeCore,
        );
        info!(
            "从ChromeCore浏览器书签文件提取到 {} 个书签",
            new_bookmarks.len()
        );
        bookmarks.extend(new_bookmarks);
        *browser_stats
            .entry("ChromeCore浏览器".to_string())
            .or_insert(0) += 1;
    }

    // 双核浏览器书签
    let shuanghe_bookmarks = get_shuanghe_bookmarks_paths();
    info!("找到 {} 个双核浏览器书签文件", shuanghe_bookmarks.len());
    for bookmarks_path in shuanghe_bookmarks {
        info!("正在检索双核浏览器书签: {:?}", bookmarks_path);
        let favicon_db_path = get_shuanghe_favicon_db_path();
        let new_bookmarks = extract_chromium_bookmarks(
            &bookmarks_path,
            favicon_db_path.as_ref(),
            &BrowserType::ShuangHe,
        );
        info!("从双核浏览器书签文件提取到 {} 个书签", new_bookmarks.len());
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("双核浏览器".to_string()).or_insert(0) += 1;
    }

    // Firefox书签
    if let Some(bookmarks_path) = get_firefox_bookmarks_file() {
        info!("正在检索Firefox书签: {:?}", bookmarks_path);
        let new_bookmarks = extract_firefox_bookmarks(&bookmarks_path);
        info!("从Firefox书签文件提取到 {} 个书签", new_bookmarks.len());
        bookmarks.extend(new_bookmarks);
        *browser_stats.entry("Firefox".to_string()).or_insert(0) += 1;
    } else {
        info!("未找到Firefox书签文件");
    }

    // 确保所有书签都有默认图标
    bookmarks.iter_mut().for_each(|bookmark| {
        if bookmark.icon.is_none() {
            bookmark.icon = None;
        }
    });

    // 去除重复书签（基于URL）
    let mut unique_bookmarks = Vec::new();
    let mut seen_urls = std::collections::HashSet::new();

    for bookmark in bookmarks {
        if !seen_urls.contains(&bookmark.content) {
            seen_urls.insert(bookmark.content.clone());
            unique_bookmarks.push(bookmark);
        }
    }

    // 输出统计信息
    info!("浏览器书签检索统计:");
    for (browser, count) in browser_stats {
        info!("  - {}: {} 个书签文件", browser, count);
    }

    info!(
        "完成所有浏览器书签检索，共获取 {} 个唯一书签",
        unique_bookmarks.len()
    );
    unique_bookmarks
}

// 从Chromium系列浏览器提取书签
fn extract_chromium_bookmarks(
    bookmarks_path: &PathBuf,
    favicon_db_path: Option<&PathBuf>,
    browser_type: &BrowserType,
) -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();

    info!(
        "开始解析 {:?} 浏览器书签文件: {:?}",
        browser_type, bookmarks_path
    );

    if let Ok(content) = fs::read_to_string(bookmarks_path) {
        info!("成功读取书签文件内容，大小: {} 字节", content.len());
        if let Ok(json) = serde_json::from_str::<serde_json::Value>(&content) {
            info!("成功解析书签文件为JSON");
            if let Some(roots) = json.get("roots") {
                info!("找到书签根节点");

                // 检查并处理书签栏
                if let Some(bookmark_bar) = roots.get("bookmark_bar") {
                    info!("处理书签栏...");
                    let bar_bookmarks =
                        extract_bookmarks(bookmark_bar, favicon_db_path, browser_type);
                    info!("从书签栏提取到 {} 个书签", bar_bookmarks.len());
                    bookmarks.extend(bar_bookmarks);
                } else {
                    info!("未找到书签栏");
                }

                // 检查并处理其他书签
                if let Some(other) = roots.get("other") {
                    info!("处理其他书签...");
                    let other_bookmarks = extract_bookmarks(other, favicon_db_path, browser_type);
                    info!("从其他书签提取到 {} 个书签", other_bookmarks.len());
                    bookmarks.extend(other_bookmarks);
                } else {
                    info!("未找到其他书签");
                }

                // 检查并处理同步书签
                if let Some(synced) = roots.get("synced") {
                    info!("处理同步书签...");
                    let synced_bookmarks = extract_bookmarks(synced, favicon_db_path, browser_type);
                    info!("从同步书签提取到 {} 个书签", synced_bookmarks.len());
                    bookmarks.extend(synced_bookmarks);
                } else {
                    info!("未找到同步书签");
                }
            } else {
                info!("书签文件中未找到根节点");
            }
        } else {
            info!("书签文件JSON解析失败");
        }
    } else {
        info!("无法读取书签文件: {:?}", bookmarks_path);
    }

    info!("从 {:?} 加载了 {} 个书签", browser_type, bookmarks.len());
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
                            title: name.as_str().unwrap_or("").to_string(),
                            content: url_str,
                            icon,
                            summarize: "bookmark".to_string(),
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
pub fn load_bookmark_icons_async_silent(
    app_handle: AppHandle,
    bookmarks: Vec<BookmarkInfo>,
    updated_count: std::sync::Arc<std::sync::Mutex<usize>>,
    completion_counter: std::sync::Arc<std::sync::Mutex<usize>>,
) {
    // 为异步操作创建新的Tokio运行时
    let runtime = tokio::runtime::Runtime::new().unwrap();

    let mut updated_bookmarks = Vec::new();
    let mut count = 0;

    // 提示开发者
    info!("正在加载书签图标...");

    for bookmark in bookmarks {
        let mut updated_bookmark = bookmark.clone();

        // 如果书签已经有图标（从浏览器数据库直接获取的），直接使用
        if updated_bookmark.icon.is_some() {
            count += 1;
            updated_bookmarks.push(updated_bookmark);
            continue;
        }

        // 否则尝试提取favicon
        // 使用运行时阻止异步操作
        if let Some(icon_data) =
            runtime.block_on(async { icon::fetch_favicon_async(&bookmark.content).await })
        {
            updated_bookmark.icon = Some(icon_data);
            count += 1;
        } else {
            // 如果提取失败，icon为undefined
            updated_bookmark.icon = None;
        }

        updated_bookmarks.push(updated_bookmark);
    }

    // 更新商店中的书签
    crate::config::set_value(&app_handle, BROWSER_BOOKMARKS_KEY, updated_bookmarks);

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

    info!("成功加载 {} 个书签图标", count);
}

#[tauri::command]
pub fn open_url(url: String) {
    if let Some(app) = crate::APP.get() {
        let _ = app.opener().open_url(url, Option::<String>::None);
    }
}
