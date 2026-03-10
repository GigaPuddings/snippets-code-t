use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;
use log::{info, error};
use tauri::Manager;

// ============= 路径配置结构 (path.json) =============

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PathConfig {
    pub data_dir: Option<String>,
}

impl Default for PathConfig {
    fn default() -> Self {
        Self { data_dir: None }
    }
}

// ============= 应用配置结构 (app.json) =============
// 注意：这个结构主要用于降级场景
// 正常情况下应该使用 app_config::AppConfigManager

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppConfig {
    // 核心配置
    #[serde(default)]
    pub version: Option<String>,
    #[serde(default)]
    pub theme: Option<String>,
    #[serde(default)]
    pub language: Option<String>,
    #[serde(default)]
    pub auto_start: Option<bool>,
    #[serde(default)]
    pub auto_update_check: Option<bool>,
    #[serde(default)]
    pub auto_hide_on_blur: Option<bool>,
    #[serde(default)]
    pub setup_completed: Option<bool>,
    
    // Git 配置（作为 JSON 值存储）
    #[serde(default)]
    pub git: Option<serde_json::Value>,
    
    // 更新相关
    #[serde(default)]
    pub update_available: Option<bool>,
    #[serde(default)]
    pub update_info: Option<serde_json::Value>,
    
    // 翻译引擎
    #[serde(default)]
    pub translation_engine: Option<String>,
    
    // 离线模型
    #[serde(default)]
    pub offline_model_activated: Option<bool>,
    
    // 进度状态
    #[serde(default)]
    pub show_progress_on_restart: Option<bool>,
    
    // 快捷键配置
    #[serde(default)]
    pub search_hotkey: Option<String>,
    #[serde(default)]
    pub config_hotkey: Option<String>,
    #[serde(default)]
    pub translate_hotkey: Option<String>,
    #[serde(default)]
    pub selection_translate_hotkey: Option<String>,
    #[serde(default)]
    pub screenshot_hotkey: Option<String>,
    #[serde(default)]
    pub dark_mode_hotkey: Option<String>,
    
    // 深色模式配置
    #[serde(default)]
    pub dark_mode_config: Option<String>,
    
    // Markdown 工作区根目录
    #[serde(default)]
    pub workspace_root: Option<String>,
}

impl Default for AppConfig {
    fn default() -> Self {
        Self {
            version: Some("1.0.0".to_string()),
            theme: Some("auto".to_string()),
            language: Some("zh-CN".to_string()),
            auto_start: Some(false),
            auto_update_check: Some(true),
            auto_hide_on_blur: Some(true),
            setup_completed: Some(false),
            git: None,
            update_available: Some(false),
            update_info: None,
            translation_engine: Some("bing".to_string()),
            offline_model_activated: Some(false),
            show_progress_on_restart: Some(false),
            search_hotkey: None,
            config_hotkey: None,
            translate_hotkey: None,
            selection_translate_hotkey: None,
            screenshot_hotkey: None,
            dark_mode_hotkey: None,
            dark_mode_config: None,
            workspace_root: None,
        }
    }
}

// ============= 路径配置管理 =============

// 获取 path.json 的路径
pub fn get_path_config_file(app_handle: &tauri::AppHandle) -> PathBuf {
    app_handle
        .path()
        .app_data_dir()
        .unwrap()
        .join("path.json")
}

// 读取 path.json
pub fn read_path_config(app_handle: &tauri::AppHandle) -> PathConfig {
    let config_path = get_path_config_file(app_handle);
    
    if config_path.exists() {
        match fs::read_to_string(&config_path) {
            Ok(content) => {
                match serde_json::from_str::<PathConfig>(&content) {
                    Ok(config) => {
                        // 只在首次读取时记录日志
                        return config;
                    }
                    Err(e) => {
                        error!("解析 path.json 失败: {}", e);
                    }
                }
            }
            Err(e) => {
                error!("读取 path.json 失败: {}", e);
            }
        }
    }
    
    PathConfig::default()
}

// 写入 path.json
pub fn write_path_config(app_handle: &tauri::AppHandle, config: &PathConfig) -> Result<(), String> {
    let config_path = get_path_config_file(app_handle);
    
    // 确保父目录存在
    if let Some(parent) = config_path.parent() {
        if !parent.exists() {
            fs::create_dir_all(parent).map_err(|e| format!("创建目录失败: {}", e))?;
        }
    }
    
    let json = serde_json::to_string_pretty(config)
        .map_err(|e| format!("序列化配置失败: {}", e))?;
    
    fs::write(&config_path, json)
        .map_err(|e| format!("写入 path.json 失败: {}", e))?;
    
    info!("✅ path.json 已保存: {:?}", config.data_dir);
    Ok(())
}

// ============= 应用配置管理 =============

// 获取数据目录路径
pub fn get_data_dir(app_handle: &tauri::AppHandle) -> PathBuf {
    let path_config = read_path_config(app_handle);
    
    if let Some(data_dir) = path_config.data_dir {
        if !data_dir.is_empty() {
            let path = PathBuf::from(data_dir);
            // 确保目录存在
            if !path.exists() {
                let _ = fs::create_dir_all(&path);
            }
            return path;
        }
    }
    
    // 默认使用 AppData 目录
    let default_dir = app_handle.path().app_data_dir().unwrap();
    if !default_dir.exists() {
        let _ = fs::create_dir_all(&default_dir);
    }
    default_dir
}

// 获取 app.json 的路径（公开函数）
// app.json 存储在 .snippets-code 隐藏文件夹中，类似 Obsidian 的 .obsidian 文件夹
pub fn get_app_config_file(app_handle: &tauri::AppHandle) -> PathBuf {
    let config_dir = get_data_dir(app_handle).join(".snippets-code");
    
    // 确保 .snippets-code 目录存在
    if !config_dir.exists() {
        let _ = fs::create_dir_all(&config_dir);
    }
    
    config_dir.join("app.json")
}

// 读取 app.json（如果不存在则返回默认值，但不自动创建文件）
pub fn read_app_config(app_handle: &tauri::AppHandle) -> AppConfig {
    let config_path = get_app_config_file(app_handle);
    
    if config_path.exists() {
        match fs::read_to_string(&config_path) {
            Ok(content) => {
                match serde_json::from_str::<AppConfig>(&content) {
                    Ok(config) => {
                        return config;
                    }
                    Err(e) => {
                        error!("解析 app.json 失败: {}", e);
                    }
                }
            }
            Err(e) => {
                error!("读取 app.json 失败: {}", e);
            }
        }
    }
    
    // 如果文件不存在，只返回默认配置，不自动创建文件
    // 文件应该在 setup 完成后由 set_data_dir_from_setup 创建
    AppConfig::default()
}

// 写入 app.json
pub fn write_app_config(app_handle: &tauri::AppHandle, config: &AppConfig) -> Result<(), String> {
    let config_path = get_app_config_file(app_handle);
    
    // 确保父目录存在
    if let Some(parent) = config_path.parent() {
        if !parent.exists() {
            fs::create_dir_all(parent).map_err(|e| format!("创建目录失败: {}", e))?;
        }
    }
    
    let json = serde_json::to_string_pretty(config)
        .map_err(|e| format!("序列化配置失败: {}", e))?;
    
    fs::write(&config_path, json)
        .map_err(|e| format!("写入 app.json 失败: {}", e))?;
    
    // 只在重要操作时记录日志
    Ok(())
}

// ============= 便捷方法 =============

// 获取 app.json 中的单个值
// 兼容方法：使用 AppConfigManager
pub fn get_app_config_value<T>(app_handle: &tauri::AppHandle, key: &str) -> Option<T>
where
    T: serde::de::DeserializeOwned,
{
    use crate::app_config::AppConfigManager;
    use std::sync::{Arc, RwLock};
    use tauri::Manager;
    
    // 尝试从应用状态获取 AppConfigManager
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        if let Ok(manager) = config_state.read() {
            return manager.get_value(key);
        }
    }
    
    // 降级：直接读取文件
    let config = read_app_config(app_handle);
    let json = serde_json::to_value(config).ok()?;
    json.get(key).and_then(|v| serde_json::from_value(v.clone()).ok())
}

// 设置 app.json 中的单个值
// 兼容方法：使用 AppConfigManager
pub fn set_app_config_value<T>(app_handle: &tauri::AppHandle, key: &str, value: T) -> Result<(), String>
where
    T: serde::Serialize,
{
    use crate::app_config::AppConfigManager;
    use std::sync::{Arc, RwLock};
    use tauri::Manager;
    
    // 尝试从应用状态获取 AppConfigManager
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state.write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.set_value(key, value)?;
        return manager.save();
    }
    
    // 降级：直接读写文件
    let mut config = read_app_config(app_handle);
    let mut json = serde_json::to_value(&config)
        .map_err(|e| format!("序列化配置失败: {}", e))?;
    
    if let Some(obj) = json.as_object_mut() {
        obj.insert(key.to_string(), serde_json::to_value(value)
            .map_err(|e| format!("序列化值失败: {}", e))?);
    }
    
    config = serde_json::from_value(json)
        .map_err(|e| format!("反序列化配置失败: {}", e))?;
    write_app_config(app_handle, &config)
}

// ============= 工作区配置管理 =============

// 获取 workspace_root 配置
pub fn get_workspace_root(app_handle: &tauri::AppHandle) -> Result<Option<PathBuf>, String> {
    let config = read_app_config(app_handle);
    
    // 如果 workspace_root 已配置，使用配置的值
    if let Some(workspace_root) = config.workspace_root {
        return Ok(Some(PathBuf::from(workspace_root)));
    }
    
    // 否则，使用 data_dir 作为默认值
    let data_dir = get_data_dir(app_handle);
    Ok(Some(data_dir))
}


// 设置 workspace_root 配置
// 验证目录具有读写权限
pub fn set_workspace_root(app_handle: &tauri::AppHandle, path: PathBuf) -> Result<(), String> {
    // 验证目录存在
    if !path.exists() {
        return Err(format!("目录不存在: {}", path.display()));
    }
    
    // 验证是目录
    if !path.is_dir() {
        return Err(format!("路径不是目录: {}", path.display()));
    }
    
    // 验证读写权限（尝试创建临时文件）
    let test_file = path.join(".test_write_permission");
    match fs::write(&test_file, "test") {
        Ok(_) => {
            // 清理测试文件
            let _ = fs::remove_file(&test_file);
        }
        Err(e) => {
            return Err(format!("目录没有写入权限: {}", e));
        }
    }
    
    // 保存到配置
    let mut config = read_app_config(app_handle);
    config.workspace_root = Some(path.to_string_lossy().to_string());
    write_app_config(app_handle, &config)?;
    
    info!("✅ 工作区根目录已设置: {}", path.display());
    Ok(())
}

// 验证目录具有读写权限
pub fn validate_workspace(path: &PathBuf) -> Result<(), String> {
    // 验证目录存在
    if !path.exists() {
        return Err(format!("目录不存在: {}", path.display()));
    }
    
    // 验证是目录
    if !path.is_dir() {
        return Err(format!("路径不是目录: {}", path.display()));
    }
    
    // 验证读权限（尝试读取目录）
    match fs::read_dir(path) {
        Ok(_) => {}
        Err(e) => {
            return Err(format!("目录没有读取权限: {}", e));
        }
    }
    
    // 验证写权限（尝试创建临时文件）
    let test_file = path.join(".test_write_permission");
    match fs::write(&test_file, "test") {
        Ok(_) => {
            // 清理测试文件
            let _ = fs::remove_file(&test_file);
        }
        Err(e) => {
            return Err(format!("目录没有写入权限: {}", e));
        }
    }
    
    Ok(())
}
