use crate::db::DbConnectionManager;
use serde::{Deserialize, Serialize};
use log::info;

// ============= 应用设置数据结构 =============

/// 应用设置结构体 - 存储所有需要同步的配置
#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct AppSettings {
    // 快捷键设置
    pub search_hotkey: Option<String>,
    pub config_hotkey: Option<String>,
    pub translate_hotkey: Option<String>,
    pub selection_translate_hotkey: Option<String>,
    pub screenshot_hotkey: Option<String>,
    pub dark_mode_hotkey: Option<String>,
    
    // 通用设置
    pub language: Option<String>,
    pub auto_update_check: Option<bool>,
    pub auto_hide_on_blur: Option<bool>,
    pub auto_start: Option<bool>,
    
    // 深色模式配置 (JSON 字符串存储)
    pub dark_mode_config: Option<String>,
}

// 注：app_settings 表在 db/init.rs 中创建

// ============= 初始化默认值 =============

/// 确保所有设置都有默认值
pub fn ensure_default_settings() -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    
    // 检查并设置 language 默认值
    let language: Option<String> = conn.query_row(
        "SELECT language FROM app_settings WHERE id = 1",
        [],
        |row| row.get(0)
    ).ok().flatten();
    
    if language.is_none() {
        conn.execute(
            "UPDATE app_settings SET language = 'zh-CN' WHERE id = 1",
            [],
        )?;
    }
    
    // 检查并设置 auto_update_check 默认值
    let auto_update: Option<i32> = conn.query_row(
        "SELECT auto_update_check FROM app_settings WHERE id = 1",
        [],
        |row| row.get(0)
    ).ok().flatten();
    
    if auto_update.is_none() {
        conn.execute(
            "UPDATE app_settings SET auto_update_check = 1 WHERE id = 1",
            [],
        )?;
    }
    
    // 检查并设置 auto_hide_on_blur 默认值
    let auto_hide: Option<i32> = conn.query_row(
        "SELECT auto_hide_on_blur FROM app_settings WHERE id = 1",
        [],
        |row| row.get(0)
    ).ok().flatten();
    
    if auto_hide.is_none() {
        conn.execute(
            "UPDATE app_settings SET auto_hide_on_blur = 1 WHERE id = 1",
            [],
        )?;
    }
    
    // info!("应用设置默认值已初始化");
    Ok(())
}

// ============= 设置读取操作 =============

/// 获取所有应用设置
pub fn get_app_settings() -> Result<AppSettings, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    
    let result = conn.query_row(
        "SELECT search_hotkey, config_hotkey, translate_hotkey, selection_translate_hotkey,
                screenshot_hotkey, dark_mode_hotkey, language, auto_update_check, 
                auto_hide_on_blur, auto_start, dark_mode_config
         FROM app_settings WHERE id = 1",
        [],
        |row| {
            Ok(AppSettings {
                search_hotkey: row.get(0).ok(),
                config_hotkey: row.get(1).ok(),
                translate_hotkey: row.get(2).ok(),
                selection_translate_hotkey: row.get(3).ok(),
                screenshot_hotkey: row.get(4).ok(),
                dark_mode_hotkey: row.get(5).ok(),
                language: row.get(6).ok(),
                auto_update_check: row.get::<_, Option<i32>>(7).ok().flatten().map(|v| v == 1),
                auto_hide_on_blur: row.get::<_, Option<i32>>(8).ok().flatten().map(|v| v == 1),
                auto_start: row.get::<_, Option<i32>>(9).ok().flatten().map(|v| v == 1),
                dark_mode_config: row.get(10).ok(),
            })
        },
    );
    
    match result {
        Ok(settings) => Ok(settings),
        Err(_) => Ok(AppSettings::default()),
    }
}

/// 获取单个设置值 (字符串类型)
pub fn get_setting_string(key: &str) -> Option<String> {
    let conn = DbConnectionManager::get().ok()?;
    
    let column = match key {
        "search" => "search_hotkey",
        "config" => "config_hotkey",
        "translate" => "translate_hotkey",
        "selectionTranslate" => "selection_translate_hotkey",
        "screenshot" => "screenshot_hotkey",
        "darkMode" => "dark_mode_hotkey",
        "language" => "language",
        "darkModeConfig" => "dark_mode_config",
        _ => return None,
    };
    
    let query = format!("SELECT {} FROM app_settings WHERE id = 1", column);
    conn.query_row(&query, [], |row| row.get(0)).ok()
}

/// 获取单个设置值 (布尔类型)
pub fn get_setting_bool(key: &str) -> Option<bool> {
    let conn = DbConnectionManager::get().ok()?;
    
    let column = match key {
        "autoUpdateCheck" => "auto_update_check",
        "autoHideOnBlur" => "auto_hide_on_blur",
        "autoStart" => "auto_start",
        _ => return None,
    };
    
    let query = format!("SELECT {} FROM app_settings WHERE id = 1", column);
    let value: Option<i32> = conn.query_row(&query, [], |row| row.get(0)).ok();
    value.map(|v| v == 1)
}

// ============= 设置写入操作 =============

/// 更新单个设置值 (字符串类型)
pub fn set_setting_string(key: &str, value: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    
    let column = match key {
        "search" => "search_hotkey",
        "config" => "config_hotkey",
        "translate" => "translate_hotkey",
        "selectionTranslate" => "selection_translate_hotkey",
        "screenshot" => "screenshot_hotkey",
        "darkMode" => "dark_mode_hotkey",
        "language" => "language",
        "darkModeConfig" => "dark_mode_config",
        _ => return Ok(()),
    };
    
    let query = format!(
        "UPDATE app_settings SET {} = ?1, updated_at = datetime('now') WHERE id = 1",
        column
    );
    conn.execute(&query, rusqlite::params![value])?;
    
    info!("设置已更新: {} = {}", key, value);
    Ok(())
}

/// 更新单个设置值 (布尔类型)
pub fn set_setting_bool(key: &str, value: bool) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    
    let column = match key {
        "autoUpdateCheck" => "auto_update_check",
        "autoHideOnBlur" => "auto_hide_on_blur",
        "autoStart" => "auto_start",
        _ => return Ok(()),
    };
    
    let query = format!(
        "UPDATE app_settings SET {} = ?1, updated_at = datetime('now') WHERE id = 1",
        column
    );
    conn.execute(&query, rusqlite::params![if value { 1 } else { 0 }])?;
    
    info!("设置已更新: {} = {}", key, value);
    Ok(())
}

/// 批量更新应用设置
pub fn update_app_settings(settings: &AppSettings) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    
    conn.execute(
        "UPDATE app_settings SET 
            search_hotkey = ?1,
            config_hotkey = ?2,
            translate_hotkey = ?3,
            selection_translate_hotkey = ?4,
            screenshot_hotkey = ?5,
            dark_mode_hotkey = ?6,
            language = ?7,
            auto_update_check = ?8,
            auto_hide_on_blur = ?9,
            auto_start = ?10,
            dark_mode_config = ?11,
            updated_at = datetime('now')
         WHERE id = 1",
        rusqlite::params![
            settings.search_hotkey,
            settings.config_hotkey,
            settings.translate_hotkey,
            settings.selection_translate_hotkey,
            settings.screenshot_hotkey,
            settings.dark_mode_hotkey,
            settings.language,
            settings.auto_update_check.map(|v| if v { 1 } else { 0 }),
            settings.auto_hide_on_blur.map(|v| if v { 1 } else { 0 }),
            settings.auto_start.map(|v| if v { 1 } else { 0 }),
            settings.dark_mode_config,
        ],
    )?;
    
    Ok(())
}

// ============= Tauri 命令 =============

/// 获取所有应用设置 (Tauri 命令)
#[tauri::command]
pub fn get_all_app_settings() -> Result<AppSettings, String> {
    get_app_settings().map_err(|e| e.to_string())
}

/// 更新应用设置 (Tauri 命令)
#[tauri::command]
pub fn update_all_app_settings(settings: AppSettings) -> Result<(), String> {
    update_app_settings(&settings).map_err(|e| e.to_string())
}

/// 设置自启动偏好 (保存到数据库，便于 GitHub 同步)
#[tauri::command]
pub fn set_auto_start_setting(value: bool) -> Result<(), String> {
    set_setting_bool("autoStart", value).map_err(|e| e.to_string())
}

/// 获取自启动偏好 (从数据库读取)
#[tauri::command]
pub fn get_auto_start_setting() -> bool {
    get_setting_bool("autoStart").unwrap_or(false)
}
