use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;
use winreg::enums::*;
use winreg::RegKey;
use tauri_plugin_opener::OpenerExt;
use log::info;

#[derive(Debug, Serialize, Deserialize)]
pub struct BookmarkInfo {
    pub title: String,
    pub url: String,
}

fn get_chrome_bookmarks_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    info!("LOCALAPPDATA: {}", local_app_data);
    
    let paths = vec![
        format!("{}\\Google\\Chrome\\User Data\\Default\\Bookmarks", local_app_data),
        format!("{}\\Google\\Chrome\\User Data\\Profile 1\\Bookmarks", local_app_data),
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

fn get_edge_bookmarks_path() -> Option<PathBuf> {
    let local_app_data = std::env::var("LOCALAPPDATA").ok()?;
    info!("LOCALAPPDATA: {}", local_app_data);
    
    let paths = vec![
        format!("{}\\Microsoft\\Edge\\User Data\\Default\\Bookmarks", local_app_data),
        format!("{}\\Microsoft\\Edge\\User Data\\Profile 1\\Bookmarks", local_app_data),
    ];
    
    for path in paths {
        let path_buf = PathBuf::from(&path);
        if path_buf.exists() {
            info!("找到 Edge 书签文件: {}", path);
            return Some(path_buf);
        }
    }
    
    info!("未找到 Edge 书签文件");
    None
}

fn extract_bookmarks(value: &serde_json::Value) -> Vec<BookmarkInfo> {
    let mut bookmarks = Vec::new();
    
    if let Some(obj) = value.as_object() {
        if let Some(url) = obj.get("url") {
            if let Some(title) = obj.get("name") {
                bookmarks.push(BookmarkInfo {
                    title: title.as_str().unwrap_or("").to_string(),
                    url: url.as_str().unwrap_or("").to_string(),
                });
            }
        }
        
        if let Some(children) = obj.get("children") {
            if let Some(children_array) = children.as_array() {
                for child in children_array {
                    bookmarks.extend(extract_bookmarks(child));
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
                    bookmarks.extend(extract_bookmarks(roots));
                }
            }
        }
    }
    
    // 尝试读取 Edge 书签
    if let Some(edge_path) = get_edge_bookmarks_path() {
        if let Ok(content) = fs::read_to_string(edge_path) {
            if let Ok(json) = serde_json::from_str::<serde_json::Value>(&content) {
                if let Some(roots) = json.get("roots") {
                    bookmarks.extend(extract_bookmarks(roots));
                }
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
