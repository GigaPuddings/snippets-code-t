// 应用配置管理模块
// 管理 .snippets-code/app.json 配置文件

use serde::{Deserialize, Serialize};
use std::fs;
use std::path::{Path, PathBuf};
use log::{info, warn};

// 应用配置结构
// 兼容旧的 json_config 模块使用的字段
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppConfig {
    // 核心配置
    #[serde(default = "default_version")]
    pub version: String,
    #[serde(default = "default_theme")]
    pub theme: String,
    #[serde(default = "default_language")]
    pub language: String,
    #[serde(default)]
    pub auto_start: bool,
    #[serde(default = "default_auto_update_check")]
    pub auto_update_check: bool,
    #[serde(default)]
    pub auto_hide_on_blur: bool,
    #[serde(default = "default_setup_completed")]
    pub setup_completed: bool,
    
    // Git 同步配置
    #[serde(default)]
    pub git: GitSettings,
    
    // 以下字段用于兼容旧系统（json_config 模块）
    // 使用 Option 类型，不存在时不序列化
    #[serde(skip_serializing_if = "Option::is_none")]
    pub update_available: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub update_info: Option<serde_json::Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub translation_engine: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub offline_model_activated: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub show_progress_on_restart: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub search_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub config_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub translate_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub selection_translate_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub screenshot_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub dark_mode_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub dark_mode_config: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub workspace_root: Option<String>,
}

fn default_version() -> String {
    // 使用应用的实际版本号
    env!("CARGO_PKG_VERSION").to_string()
}

fn default_theme() -> String {
    "auto".to_string()
}

fn default_language() -> String {
    "zh-CN".to_string()
}

fn default_auto_update_check() -> bool {
    true
}

fn default_setup_completed() -> bool {
    true  // 默认为 true，避免重复进入 setup
}

// Git 同步设置
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitSettings {
    #[serde(default)]
    pub enabled: bool,              // 是否启用 Git 同步
    #[serde(default)]
    pub auto_sync: bool,            // 是否启用自动同步
    #[serde(default = "default_auto_sync_delay")]
    pub auto_sync_delay: u64,       // 自动同步延迟（分钟）
    #[serde(default = "default_pull_on_start")]
    pub pull_on_start: bool,        // 启动时是否自动 pull
    #[serde(default)]
    pub user_name: String,          // Git 用户名
    #[serde(default)]
    pub user_email: String,         // Git 邮箱
    #[serde(default)]
    pub remote_url: String,         // 远程仓库 URL
    #[serde(default)]
    pub token: String,              // GitHub Token
    #[serde(skip_serializing_if = "Option::is_none")]
    pub last_sync_time: Option<String>,
}

fn default_auto_sync_delay() -> u64 {
    1
}

fn default_pull_on_start() -> bool {
    true
}

impl Default for AppConfig {
    fn default() -> Self {
        Self {
            version: env!("CARGO_PKG_VERSION").to_string(),
            theme: "auto".to_string(),
            language: "zh-CN".to_string(),
            auto_start: false,
            auto_update_check: true,
            auto_hide_on_blur: false,
            setup_completed: true,  // 默认为 true
            git: GitSettings::default(),
            // 兼容字段默认为 None
            update_available: None,
            update_info: None,
            translation_engine: None,
            offline_model_activated: None,
            show_progress_on_restart: None,
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

impl Default for GitSettings {
    fn default() -> Self {
        Self {
            enabled: false,
            auto_sync: false,
            auto_sync_delay: 1,
            pull_on_start: true,
            user_name: String::new(),
            user_email: String::new(),
            remote_url: String::new(),
            token: String::new(),
            last_sync_time: None,
        }
    }
}

// 应用配置管理器
pub struct AppConfigManager {
    config_path: PathBuf,
    config: AppConfig,
}

impl AppConfigManager {
    /// 创建新的配置管理器
    /// 
    /// # Arguments
    /// * `workspace_root` - 工作区根目录
    pub fn new(workspace_root: &Path) -> Result<Self, String> {
        let config_dir = workspace_root.join(".snippets-code");
        let config_path = config_dir.join("app.json");
        
        // 确保配置目录存在
        if !config_dir.exists() {
            fs::create_dir_all(&config_dir)
                .map_err(|e| format!("创建配置目录失败: {}", e))?;
        }
        
        // 尝试加载现有配置
        let config = if config_path.exists() {
            match Self::load_from_file(&config_path) {
                Ok(cfg) => {
                    info!("✅ [AppConfig] 加载配置成功");
                    cfg
                }
                Err(e) => {
                    warn!("⚠️ [AppConfig] 加载配置失败: {}，使用默认配置", e);
                    AppConfig::default()
                }
            }
        } else {
            info!("📝 [AppConfig] 配置文件不存在，创建默认配置");
            AppConfig::default()
        };
        
        let manager = Self {
            config_path,
            config,
        };
        
        // 保存配置（确保文件存在）
        manager.save()?;
        
        Ok(manager)
    }
    
    /// 从文件加载配置
    fn load_from_file(path: &Path) -> Result<AppConfig, String> {
        let content = fs::read_to_string(path)
            .map_err(|e| format!("读取配置文件失败: {}", e))?;
        
        let config: AppConfig = serde_json::from_str(&content)
            .map_err(|e| format!("解析配置文件失败: {}", e))?;
        
        Ok(config)
    }
    
    /// 保存配置到文件
    pub fn save(&self) -> Result<(), String> {
        let content = serde_json::to_string_pretty(&self.config)
            .map_err(|e| format!("序列化配置失败: {}", e))?;
        
        fs::write(&self.config_path, content)
            .map_err(|e| format!("写入配置文件失败: {}", e))?;
        
        info!("💾 [AppConfig] 配置已保存");
        Ok(())
    }
    
    /// 获取完整配置
    pub fn get_config(&self) -> &AppConfig {
        &self.config
    }
    
    /// 更新完整配置
    pub fn update_config(&mut self, config: AppConfig) {
        self.config = config;
    }
    
    /// 获取 Git 设置
    pub fn get_git_settings(&self) -> &GitSettings {
        &self.config.git
    }
    
    /// 更新 Git 设置
    pub fn update_git_settings(&mut self, settings: GitSettings) {
        self.config.git = settings;
    }
    
    /// 更新主题
    pub fn update_theme(&mut self, theme: String) {
        self.config.theme = theme;
    }
    
    /// 更新语言
    pub fn update_language(&mut self, language: String) {
        self.config.language = language;
    }
    
    /// 通用方法：获取配置值（用于兼容旧代码）
    pub fn get_value<T>(&self, key: &str) -> Option<T>
    where
        T: serde::de::DeserializeOwned,
    {
        let json = serde_json::to_value(&self.config).ok()?;
        json.get(key).and_then(|v| serde_json::from_value(v.clone()).ok())
    }
    
    /// 通用方法：设置配置值（用于兼容旧代码）
    pub fn set_value<T>(&mut self, key: &str, value: T) -> Result<(), String>
    where
        T: serde::Serialize,
    {
        let mut json = serde_json::to_value(&self.config)
            .map_err(|e| format!("序列化配置失败: {}", e))?;
        
        if let Some(obj) = json.as_object_mut() {
            obj.insert(key.to_string(), serde_json::to_value(value)
                .map_err(|e| format!("序列化值失败: {}", e))?);
        }
        
        self.config = serde_json::from_value(json)
            .map_err(|e| format!("反序列化配置失败: {}", e))?;
        
        Ok(())
    }
}

// ============= Tauri 命令 =============

use tauri::{command, AppHandle, Manager};
use std::sync::{Arc, RwLock};

/// 获取应用配置
#[command]
pub fn get_app_config(app_handle: AppHandle) -> Result<AppConfig, String> {
    // 尝试从应用状态获取 AppConfigManager
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state.read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(manager.get_config().clone())
    } else {
        // 如果状态不存在，尝试从工作区加载
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(manager.get_config().clone())
    }
}

/// 更新应用配置
#[command]
pub fn update_app_config(app_handle: AppHandle, config: AppConfig) -> Result<(), String> {
    // 尝试从应用状态获取 AppConfigManager
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state.write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_config(config);
        manager.save()?;
        info!("✅ [AppConfig] 应用配置已更新");
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 获取 Git 设置
#[command]
pub fn get_git_settings_command(app_handle: AppHandle) -> Result<GitSettings, String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state.read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(manager.get_git_settings().clone())
    } else {
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(manager.get_git_settings().clone())
    }
}

/// 更新 Git 设置
#[command]
pub fn update_git_settings_command(app_handle: AppHandle, settings: GitSettings) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state.write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_git_settings(settings);
        manager.save()?;
        info!("✅ [AppConfig] Git 设置已更新");
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 更新主题设置
#[command]
pub fn update_theme_config(app_handle: AppHandle, theme: String) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state.write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_theme(theme);
        manager.save()?;
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 更新语言设置
#[command]
pub fn update_language_config(app_handle: AppHandle, language: String) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state.write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_language(language);
        manager.save()?;
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}
