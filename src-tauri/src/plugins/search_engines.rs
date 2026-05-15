use crate::db;
use log::info;
use serde::{Deserialize, Serialize};

const DEFAULT_ENGINES: &str = include_str!("../../assets/default_engines.json");

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SearchEngine {
    pub id: String,
    pub keyword: String,
    pub name: String,
    pub icon: String,
    pub url: String,
    pub enabled: bool,
}

#[tauri::command]
pub fn get_search_engines(app_handle: tauri::AppHandle) -> Result<Vec<SearchEngine>, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "search-engines")?;

    match db::get_all_search_engines() {
        Ok(engines) => {
            if engines.is_empty() {
                // 首次使用时写入默认配置，并启用第一条作为默认搜索引擎。
                let mut default_engines: Vec<SearchEngine> =
                    serde_json::from_str(DEFAULT_ENGINES).map_err(|e| e.to_string())?;
                if !default_engines.is_empty() {
                    default_engines[0].enabled = true;
                }
                db::replace_all_search_engines(&default_engines).map_err(|e| e.to_string())?;
                Ok(default_engines)
            } else {
                Ok(engines)
            }
        }
        Err(e) => Err(e.to_string()),
    }
}

#[tauri::command]
pub fn update_search_engines(
    app_handle: tauri::AppHandle,
    engines: Vec<SearchEngine>,
) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(&app_handle, "search-engines")?;

    info!("更新搜索引擎配置");
    db::replace_all_search_engines(&engines).map_err(|e| e.to_string())
}

#[tauri::command]
pub fn get_default_engines(app_handle: tauri::AppHandle) -> Result<Vec<SearchEngine>, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "search-engines")?;
    serde_json::from_str(DEFAULT_ENGINES).map_err(|e| e.to_string())
}
