use log::info;
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;
use tauri_plugin_opener::OpenerExt;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct BookmarkInfo {
    pub id: String,
    pub title: String,
    pub content: String,
    pub summarize: String,
}

fn get_chrome_bookmarks_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    info!("LOCALAPPDATA: {}", local_app_data);

    let paths = vec![
        format!(
            "{}\\Google\\Chrome\\User Data\\Default\\Bookmarks",
            local_app_data
        ),
        format!(
            "{}\\Google\\Chrome\\User Data\\Profile 1\\Bookmarks",
            local_app_data
        ),
    ];

    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            info!("找到 Chrome 书签文件: {}", path);
            return Some(path_buf);
        }
    }

    info!("未找到 Chrome 书签文件");
    None
}

// fn get_edge_bookmarks_path() -> Option<PathBuf> {
//     let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
//     info!("LOCALAPPDATA: {}", local_app_data);

//     let paths = vec![
//         format!(
//             "{}\\Microsoft\\Edge\\User Data\\Default\\Bookmarks",
//             local_app_data
//         ),
//         format!(
//             "{}\\Microsoft\\Edge\\User Data\\Profile 1\\Bookmarks",
//             local_app_data
//         ),
//     ];

//     for path in paths {
//         let path_buf = PathBuf::from(&path);
//         if path_buf.exists() {
//             info!("找到 Edge 书签文件: {}", path);
//             return Some(path_buf);
//         }
//     }

//     info!("未找到 Edge 书签文件");
//     None
// }

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

    // 尝试读取 Chrome 书签
    if let Some(chrome_path) = get_chrome_bookmarks_path() {
        if let Ok(content) = fs::read_to_string(chrome_path) {
            if let Ok(json) = serde_json::from_str::<serde_json::Value>(&content) {
                if let Some(roots) = json.get("roots") {
                    // 处理书签栏
                    if let Some(bookmark_bar) = roots.get("bookmark_bar") {
                        bookmarks.extend(extract_bookmarks(bookmark_bar));
                    }
                    // 处理其他书签
                    if let Some(other) = roots.get("other") {
                        bookmarks.extend(extract_bookmarks(other));
                    }
                    // 处理同步的书签
                    if let Some(synced) = roots.get("synced") {
                        bookmarks.extend(extract_bookmarks(synced));
                    }
                }
            }
        }
    }

    // // 尝试读取 Edge 书签
    // if let Some(edge_path) = get_edge_bookmarks_path() {
    //     if let Ok(content) = fs::read_to_string(edge_path) {
    //         if let Ok(json) = serde_json::from_str::<serde_json::Value>(&content) {
    //             if let Some(roots) = json.get("roots") {
    //                 // 处理书签栏
    //                 if let Some(bookmark_bar) = roots.get("bookmark_bar") {
    //                     bookmarks.extend(extract_bookmarks(bookmark_bar));
    //                 }
    //                 // 处理其他书签
    //                 if let Some(other) = roots.get("other") {
    //                     bookmarks.extend(extract_bookmarks(other));
    //                 }
    //                 // 处理同步的书签
    //                 if let Some(synced) = roots.get("synced") {
    //                     bookmarks.extend(extract_bookmarks(synced));
    //                 }
    //             }
    //         }
    //     }
    // }

    bookmarks
}

#[tauri::command]
pub fn open_url(url: String) {
    if let Some(app) = crate::APP.get() {
        let _ = app.opener().open_url(url, Option::<String>::None);
    }
}
