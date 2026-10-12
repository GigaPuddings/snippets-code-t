use crate::apps::{is_shell_apps_folder_path, resolve_shell_apps_folder_display_path, AppInfo};
use crate::bookmarks::BookmarkInfo;
use crate::db;
use crate::search::{fuzzy_search, SearchResult};
use log::debug;
use serde::{Deserialize, Serialize};
use std::sync::{LazyLock, Mutex};

static APPS_CACHE: LazyLock<Mutex<Option<Vec<AppInfo>>>> = LazyLock::new(|| Mutex::new(None));
static BOOKMARKS_CACHE: LazyLock<Mutex<Option<Vec<BookmarkInfo>>>> =
    LazyLock::new(|| Mutex::new(None));

fn require_local_launcher_plugin(app_handle: &tauri::AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, "local-launcher")?;
    crate::bookmarks::cleanup_legacy_bridge();
    db::ensure_plugin_storage("local-launcher").map_err(|e| e.to_string())
}

#[tauri::command]
pub fn get_browser_bookmark_delete_status(
    app_handle: tauri::AppHandle,
    id: String,
) -> Result<Vec<crate::bookmarks::BookmarkDeleteStatus>, String> {
    require_local_launcher_plugin(&app_handle)?;
    let bookmark = db::get_all_bookmarks()
        .map_err(|e| e.to_string())?
        .into_iter()
        .find(|bookmark| bookmark.id == id)
        .ok_or("书签已不存在，请刷新列表")?;
    Ok(crate::bookmarks::deletion_status(&bookmark.sources))
}

#[derive(Deserialize, Clone, PartialEq, Eq, Serialize)]
pub struct BookmarkSourceSelection {
    profile_key: String,
    node_id: String,
}
#[derive(Serialize)]
pub struct BookmarkDeleteResult {
    deleted: Vec<BookmarkSourceSelection>,
    errors: Vec<String>,
    backups: Vec<String>,
}

#[tauri::command]
pub async fn delete_browser_bookmark_sources(
    app_handle: tauri::AppHandle,
    id: String,
    sources: Vec<BookmarkSourceSelection>,
) -> Result<BookmarkDeleteResult, String> {
    require_local_launcher_plugin(&app_handle)?;
    // Resolve identity/URL from trusted stored provenance, never from caller paths.
    if sources.is_empty() || sources.len() > 64 {
        return Err("请选择 1 至 64 个书签来源".into());
    }
    let bookmark = db::get_all_bookmarks()
        .map_err(|e| e.to_string())?
        .into_iter()
        .find(|bookmark| bookmark.id == id)
        .ok_or("书签已不存在，请刷新列表")?;
    let mut selected = Vec::new();
    for selection in sources {
        let source = bookmark
            .sources
            .iter()
            .find(|source| {
                source.profile_key == selection.profile_key && source.node_id == selection.node_id
            })
            .ok_or("书签来源已变化，请重新打开确认窗口")?;
        if !selected.contains(source) {
            selected.push(source.clone());
        }
    }
    tauri::async_runtime::spawn_blocking(move || {
        let (deleted, mut errors, backups) = crate::bookmarks::delete_sources(&selected, || {
            crate::app_config::require_plugin_enabled(&app_handle, "local-launcher")
        });
        if let Err(error) = db::remove_browser_bookmark_sources(&deleted) {
            errors.push(format!(
                "原书签已删除，启动器索引更新失败，请重新扫描: {error}"
            ));
        }
        invalidate_bookmarks_cache();
        Ok(BookmarkDeleteResult {
            deleted: deleted
                .into_iter()
                .map(|source| BookmarkSourceSelection {
                    profile_key: source.profile_key,
                    node_id: source.node_id,
                })
                .collect(),
            errors,
            backups,
        })
    })
    .await
    .map_err(|e| e.to_string())?
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
    let searchable = apps
        .iter()
        .map(|app| (app.clone(), app.metadata.aliases.join("\n")))
        .collect::<Vec<_>>();
    let results = fuzzy_search(&searchable, &query, |item| &item.0.title, |item| &item.1);

    Ok(results
        .into_iter()
        .map(|((app, _), score)| {
            let is_shell_app = is_shell_apps_folder_path(&app.content);
            let is_shortcut = app.content.to_lowercase().ends_with(".lnk");
            let display_content = if is_shell_app {
                resolve_shell_apps_folder_display_path(&app.content)
                    .unwrap_or_else(|| app.content.clone())
            } else if is_shortcut {
                crate::apps::resolve_shortcut_display_path(&app.content)
                    .unwrap_or_else(|| app.content.clone())
            } else {
                app.content.clone()
            };
            let metadata = if is_shell_app || is_shortcut {
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
    let searchable = bookmarks
        .iter()
        .map(|bookmark| {
            let mut text = bookmark.content.clone();
            for source in &bookmark.sources {
                text.push_str(&format!(
                    "\n{} {} {}",
                    source.browser,
                    source.profile,
                    source.folder_path.join(" / ")
                ));
            }
            (bookmark.clone(), text)
        })
        .collect::<Vec<_>>();
    let results = fuzzy_search(&searchable, &query, |item| &item.0.title, |item| &item.1);

    Ok(results
        .into_iter()
        .map(|((bookmark, _), score)| SearchResult {
            id: bookmark.id,
            title: bookmark.title,
            content: bookmark.content,
            summarize: "bookmark".to_string(),
            icon: bookmark.icon.unwrap_or_default(),
            score,
            file_path: None,
            metadata: Some(serde_json::json!({"sources": bookmark.sources})),
        })
        .collect())
}

#[tauri::command]
pub fn get_launcher_settings(
    app_handle: tauri::AppHandle,
) -> Result<db::launcher::LauncherSettings, String> {
    require_local_launcher_plugin(&app_handle)?;
    db::launcher::launcher_settings()
}

#[tauri::command]
pub fn set_launcher_settings(
    app_handle: tauri::AppHandle,
    settings: db::launcher::LauncherSettings,
) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    db::launcher::save_launcher_settings(&settings)?;
    invalidate_apps_cache();
    crate::icon::rebuild_app_and_bookmark_index(app_handle)?;
    Ok(())
}

#[tauri::command]
pub fn get_launcher_exclusions(
    app_handle: tauri::AppHandle,
) -> Result<Vec<db::launcher::LauncherExclusion>, String> {
    require_local_launcher_plugin(&app_handle)?;
    db::launcher::launcher_exclusions()
}

#[tauri::command]
pub fn restore_launcher_entry(
    app_handle: tauri::AppHandle,
    kind: String,
    target: String,
) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    db::launcher::restore_launcher_entry(&kind, &target)?;
    invalidate_apps_cache();
    invalidate_bookmarks_cache();
    crate::icon::rebuild_app_and_bookmark_index(app_handle)?;
    Ok(())
}

#[tauri::command]
pub fn refresh_launcher_index(
    app_handle: tauri::AppHandle,
    force: Option<bool>,
    settings: Option<db::launcher::LauncherSettings>,
) -> Result<(), String> {
    require_local_launcher_plugin(&app_handle)?;
    if let Some(settings) = settings {
        if force == Some(false) {
            return Err("自动检查不能保存检索配置".into());
        }
        db::launcher::save_launcher_settings(&settings)?;
        invalidate_apps_cache();
    }
    if force.unwrap_or(true) {
        crate::icon::rebuild_app_and_bookmark_index(app_handle)?;
    } else {
        crate::icon::refresh_app_and_bookmark_index_if_changed(app_handle);
    }
    Ok(())
}

#[tauri::command]
pub fn get_launcher_index_state(
    app_handle: tauri::AppHandle,
) -> Result<crate::icon::LauncherIndexState, String> {
    require_local_launcher_plugin(&app_handle)?;
    crate::icon::launcher_index_state()
}
