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
use winreg::enums::*;
use winreg::RegKey;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct BookmarkInfo {
    pub id: String,
    pub title: String,
    pub content: String,      // URL
    pub icon: Option<String>, // Base64 encoded icon data
    pub summarize: String,
}

#[derive(Debug)]
enum BrowserType {
    Chrome,
    Edge,
    Firefox,
    Unknown,
}

fn get_default_browser() -> BrowserType {
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let path =
        "Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice";

    if let Ok(key) = hkcu.open_subkey(path) {
        if let Ok(prog_id) = key.get_value::<String, _>("ProgId") {
            info!("默认浏览器 ProgId: {}", prog_id);
            return match prog_id.to_lowercase() {
                s if s.contains("chrome") => BrowserType::Chrome,
                s if s.contains("edge") => BrowserType::Edge,
                s if s.contains("firefox") => BrowserType::Firefox,
                _ => BrowserType::Unknown,
            };
        }
    }

    BrowserType::Unknown
}

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

fn get_browser_bookmarks_path(browser_type: &BrowserType) -> Option<PathBuf> {
    match browser_type {
        BrowserType::Firefox => get_firefox_bookmarks_file(),
        _ => {
            let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
            let paths = match browser_type {
                BrowserType::Chrome => vec![
                    format!(
                        "{}\\Google\\Chrome\\User Data\\Default\\Bookmarks",
                        local_app_data
                    ),
                    format!(
                        "{}\\Google\\Chrome\\User Data\\Profile 1\\Bookmarks",
                        local_app_data
                    ),
                ],
                BrowserType::Edge => vec![
                    format!(
                        "{}\\Microsoft\\Edge\\User Data\\Default\\Bookmarks",
                        local_app_data
                    ),
                    format!(
                        "{}\\Microsoft\\Edge\\User Data\\Profile 1\\Bookmarks",
                        local_app_data
                    ),
                ],
                _ => vec![],
            };

            for path in paths {
                let path_buf = PathBuf::from(&path);
                if path_buf.exists() {
                    info!("找到浏览器书签文件: {}", path);
                    return Some(path_buf);
                }
            }
            None
        }
    }
}

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
                                BrowserType::Chrome | BrowserType::Edge => {
                                    get_favicon_from_chrome_db(&url_str, db_path)
                                }
                                _ => None,
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

// 获取浏览器书签
pub fn get_browser_bookmarks() -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();
    let default_browser = get_default_browser();

    info!("检测到的默认浏览器: {:?}", default_browser);

    // 获取favicon数据库路径
    let favicon_db_path = match default_browser {
        BrowserType::Chrome => get_chrome_favicon_db_path(),
        BrowserType::Edge => get_edge_favicon_db_path(),
        _ => None,
    };

    if let Some(ref favicon_path) = favicon_db_path {
        info!("找到favicon数据库: {:?}", favicon_path);
    }

    if let Some(bookmarks_path) = get_browser_bookmarks_path(&default_browser) {
        match default_browser {
            BrowserType::Chrome | BrowserType::Edge => {
                if let Ok(content) = fs::read_to_string(&bookmarks_path) {
                    if let Ok(json) = serde_json::from_str::<serde_json::Value>(&content) {
                        if let Some(roots) = json.get("roots") {
                            if let Some(bookmark_bar) = roots.get("bookmark_bar") {
                                bookmarks.extend(extract_bookmarks(
                                    bookmark_bar,
                                    favicon_db_path.as_ref(),
                                    &default_browser,
                                ));
                            }
                            if let Some(other) = roots.get("other") {
                                bookmarks.extend(extract_bookmarks(
                                    other,
                                    favicon_db_path.as_ref(),
                                    &default_browser,
                                ));
                            }
                            if let Some(synced) = roots.get("synced") {
                                bookmarks.extend(extract_bookmarks(
                                    synced,
                                    favicon_db_path.as_ref(),
                                    &default_browser,
                                ));
                            }
                        }
                    }
                }
            }
            BrowserType::Firefox => {
                bookmarks.extend(extract_firefox_bookmarks(&bookmarks_path));
            }
            BrowserType::Unknown => {
                info!("未能识别默认浏览器");
            }
        }
    }

    // 确保所有书签都有默认图标
    bookmarks.iter_mut().for_each(|bookmark| {
        if bookmark.icon.is_none() {
            bookmark.icon = None;
        }
    });

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
    crate::config::set_value(&app_handle, "browser_bookmarks", updated_bookmarks);

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
