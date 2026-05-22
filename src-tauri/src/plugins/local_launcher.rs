use crate::apps::{is_shell_apps_folder_path, resolve_shell_apps_folder_display_path, AppInfo};
use crate::bookmarks::BookmarkInfo;
use crate::db;
use crate::search::{fuzzy_search, SearchResult};
use log::debug;
use std::sync::{LazyLock, Mutex};

static APPS_CACHE: LazyLock<Mutex<Option<Vec<AppInfo>>>> = LazyLock::new(|| Mutex::new(None));
static BOOKMARKS_CACHE: LazyLock<Mutex<Option<Vec<BookmarkInfo>>>> =
    LazyLock::new(|| Mutex::new(None));

fn require_local_launcher_plugin(app_handle: &tauri::AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, "local-launcher")?;
    db::ensure_plugin_storage("local-launcher").map_err(|e| e.to_string())
}

pub fn invalidate_apps_cache() {
    if let Ok(mut cache) = APPS_CACHE.lock() {
        if cache.take().is_some() {
            debug!("应用搜索缓存已清除");
        }
    }
}

pub fn invalidate_bookmarks_cache() {
    if let Ok(mut cache) = BOOKMARKS_CACHE.lock() {
        if cache.take().is_some() {
            debug!("书签搜索缓存已清除");
        }
    }
}

#[tauri::command]
pub fn open_app_command(app_handle: tauri::AppHandle, app_path: String) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    crate::apps::open_app_command(app_handle, app_path)
}

#[tauri::command]
pub fn open_app_as_admin_command(
    app_handle: tauri::AppHandle,
    app_path: String,
) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    crate::apps::open_app_as_admin_command(app_handle, app_path)
}

#[tauri::command]
pub fn open_app_file_location_command(
    app_handle: tauri::AppHandle,
    app_path: String,
) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    crate::apps::open_app_file_location_command(app_handle, app_path)
}

#[tauri::command]
pub fn add_app(
    app_handle: tauri::AppHandle,
    title: String,
    content: String,
    icon: Option<String>,
) -> Result<String, String> {
    require_local_launcher_plugin(&app_handle)?;
    db::add_app(title, content, icon)
}

#[tauri::command]
pub fn update_app(
    app_handle: tauri::AppHandle,
    id: String,
    title: String,
    content: String,
    icon: Option<String>,
) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    db::update_app(id, title, content, icon)
}

#[tauri::command]
pub fn delete_app(app_handle: tauri::AppHandle, id: String) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    db::delete_app(id)
}

#[tauri::command]
pub fn get_apps(app_handle: tauri::AppHandle) -> Result<Vec<AppInfo>, String> {
    require_local_launcher_plugin(&app_handle)?;
    db::get_apps()
}

#[tauri::command]
pub fn add_bookmark(
    app_handle: tauri::AppHandle,
    title: String,
    content: String,
    icon: Option<String>,
) -> Result<String, String> {
    require_local_launcher_plugin(&app_handle)?;
    db::add_bookmark(title, content, icon)
}

#[tauri::command]
pub fn update_bookmark(
    app_handle: tauri::AppHandle,
    id: String,
    title: String,
    content: String,
    icon: Option<String>,
) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    db::update_bookmark(id, title, content, icon)
}

#[tauri::command]
pub fn delete_bookmark(app_handle: tauri::AppHandle, id: String) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    db::delete_bookmark(id)
}

#[tauri::command]
pub fn get_bookmarks(app_handle: tauri::AppHandle) -> Result<Vec<BookmarkInfo>, String> {
    require_local_launcher_plugin(&app_handle)?;
    db::get_bookmarks()
}

#[tauri::command]
pub fn search_apps(
    app_handle: tauri::AppHandle,
    query: String,
) -> Result<Vec<SearchResult>, String> {
    require_local_launcher_plugin(&app_handle)?;

    let mut cache = APPS_CACHE.lock().unwrap();
    if cache.is_none() {
        match db::get_all_apps() {
            Ok(apps) => {
                *cache = Some(apps);
            }
            Err(_) => {
                *cache = Some(Vec::new());
            }
        }
    }

    let apps = cache.as_ref().unwrap();
    let results = fuzzy_search(
        apps,
        &query,
        |app: &AppInfo| &app.title,
        |app: &AppInfo| &app.content,
    );

    Ok(results
        .into_iter()
        .map(|(app, score)| {
            let is_shell_app = is_shell_apps_folder_path(&app.content);
            let display_content = if is_shell_app {
                resolve_shell_apps_folder_display_path(&app.content)
                    .unwrap_or_else(|| app.content.clone())
            } else {
                app.content.clone()
            };
            let metadata = if is_shell_app {
                Some(serde_json::json!({
                    "launch_path": app.content,
                    "display_path": display_content,
                }))
            } else {
                None
            };

            SearchResult {
                id: app.id,
                title: app.title,
                content: display_content,
                summarize: "app".to_string(),
                icon: app.icon.unwrap_or_default(),
                score,
                file_path: None,
                metadata,
            }
        })
        .collect())
}

#[tauri::command]
pub fn search_bookmarks(
    app_handle: tauri::AppHandle,
    query: String,
) -> Result<Vec<SearchResult>, String> {
    require_local_launcher_plugin(&app_handle)?;

    let mut cache = BOOKMARKS_CACHE.lock().unwrap();
    if cache.is_none() {
        match db::get_all_bookmarks() {
            Ok(bookmarks) => {
                *cache = Some(bookmarks);
            }
            Err(_) => {
                *cache = Some(Vec::new());
            }
        }
    }

    let bookmarks = cache.as_ref().unwrap();
    let results = fuzzy_search(
        bookmarks,
        &query,
        |bookmark: &BookmarkInfo| &bookmark.title,
        |bookmark: &BookmarkInfo| &bookmark.content,
    );

    Ok(results
        .into_iter()
        .map(|(bookmark, score)| SearchResult {
            id: bookmark.id,
            title: bookmark.title,
            content: bookmark.content,
            summarize: "bookmark".to_string(),
            icon: bookmark.icon.unwrap_or_default(),
            score,
            file_path: None,
            metadata: None,
        })
        .collect())
}
