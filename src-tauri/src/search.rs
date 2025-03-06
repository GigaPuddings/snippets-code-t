use crate::config::{get_value, set_value};
use serde::{Deserialize, Serialize};
use tauri::AppHandle;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SearchEngine {
    pub id: String,
    pub keyword: String,
    pub name: String,
    pub icon: String,
    pub url: String,
    pub enabled: bool,
}

// 默认搜索引擎配置
const DEFAULT_ENGINES: &str = include_str!("../assets/default_engines.json");

// 获取搜索引擎配置
#[tauri::command]
pub fn get_search_engines(app_handle: AppHandle) -> Result<Vec<SearchEngine>, String> {
    match get_value(&app_handle, "search_engines") {
        Some(engines) => Ok(engines
            .as_array()
            .unwrap_or(&Vec::new())
            .iter()
            .map(|e| serde_json::from_value(e.clone()).unwrap())
            .collect()),
        None => {
            // 如果没有保存的搜索引擎配置，使用默认配置,并且第一条数据设置为默认搜索引擎
            let mut engines: Vec<SearchEngine> = serde_json::from_str(DEFAULT_ENGINES)
                .map_err(|e| e.to_string())?;
            if !engines.is_empty() {
                engines[0].enabled = true;
            }
            set_value(&app_handle, "search_engines", &engines);
            Ok(engines)
        }
    }
}

// 更新搜索引擎配置
#[tauri::command]
pub fn update_search_engines(
    app_handle: AppHandle,
    engines: Vec<SearchEngine>,
) -> Result<(), String> {
    set_value(&app_handle, "search_engines", &engines);
    Ok(())
}

// 获取默认搜索引擎配置
#[tauri::command]
pub fn get_default_engines() -> Result<Vec<SearchEngine>, String> {
    serde_json::from_str(DEFAULT_ENGINES).map_err(|e| e.to_string())
}
