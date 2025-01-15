use glob::glob;
use log::info;
use rusqlite::Connection;
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;
use tauri_plugin_opener::OpenerExt;
use uuid::Uuid;
use winreg::enums::*;
use winreg::RegKey;

#[derive(Debug, Serialize, Deserialize)]
pub struct BookmarkInfo {
    pub id: String,
    pub title: String,
    pub content: String,
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
                        bookmarks.push(BookmarkInfo {
                            id: id.to_string(),
                            title,
                            content: url,
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

fn extract_bookmarks(value: &serde_json::Value) -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();

    if let Some(obj) = value.as_object() {
        if let Some(type_) = obj.get("type") {
            if type_.as_str().unwrap_or("") == "url" {
                if let Some(url) = obj.get("url") {
                    if let Some(name) = obj.get("name") {
                        bookmarks.push(BookmarkInfo {
                            id: Uuid::new_v4().to_string(),
                            title: name.as_str().unwrap_or("").to_string(),
                            content: url.as_str().unwrap_or("").to_string(),
                            summarize: "bookmark".to_string(),
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

#[tauri::command]
pub fn get_browser_bookmarks() -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();
    let default_browser = get_default_browser();

    info!("检测到的默认浏览器: {:?}", default_browser);

    if let Some(bookmarks_path) = get_browser_bookmarks_path(&default_browser) {
        match default_browser {
            BrowserType::Chrome | BrowserType::Edge => {
                if let Ok(content) = fs::read_to_string(&bookmarks_path) {
                    if let Ok(json) = serde_json::from_str::<serde_json::Value>(&content) {
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

    bookmarks
}

#[tauri::command]
pub fn open_url(url: String) {
    if let Some(app) = crate::APP.get() {
        let _ = app.opener().open_url(url, Option::<String>::None);
    }
}
