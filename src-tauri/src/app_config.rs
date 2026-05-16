// 应用配置管理模块
// 管理 .snippets-code/app.json 配置文件

use log::{info, warn};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs::{self, File};
use std::io;
use std::path::{Path, PathBuf};
use std::time::{SystemTime, UNIX_EPOCH};

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

    // 官方内置插件启用状态。默认全部开启，保持旧版本行为不变。
    #[serde(default = "default_plugin_states")]
    pub plugins: PluginStates,

    // 以下字段用于兼容旧系统（json_config 模块）
    // 使用 Option 类型，不存在时不序列化
    #[serde(skip_serializing_if = "Option::is_none")]
    pub update_available: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub update_info: Option<serde_json::Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub translation_engine: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ocr_engine: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ocr_language: Option<String>,
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
    true // 默认为 true，避免重复进入 setup
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginRuntimeState {
    #[serde(default = "default_plugin_enabled")]
    pub enabled: bool,
}

pub type PluginStates = HashMap<String, PluginRuntimeState>;

const BUILTIN_PLUGIN_IDS: &[&str] = &[
    "translation",
    "screenshot",
    "todo",
    "system-theme",
    "local-launcher",
    "desktop-files",
    "search-engines",
    "git-sync",
    "attachments",
];

fn default_plugin_enabled() -> bool {
    true
}

fn default_plugin_states() -> PluginStates {
    BUILTIN_PLUGIN_IDS
        .iter()
        .map(|id| {
            (
                (*id).to_string(),
                PluginRuntimeState {
                    enabled: default_plugin_enabled(),
                },
            )
        })
        .collect()
}

fn normalize_plugin_states(plugins: &mut PluginStates) {
    for id in BUILTIN_PLUGIN_IDS {
        plugins
            .entry((*id).to_string())
            .or_insert(PluginRuntimeState {
                enabled: default_plugin_enabled(),
            });
    }
}

// Git 同步设置
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitSettings {
    #[serde(default)]
    pub enabled: bool, // 是否启用 Git 同步
    #[serde(default)]
    pub auto_sync: bool, // 是否启用自动同步
    #[serde(default = "default_auto_sync_delay")]
    pub auto_sync_delay: u64, // 自动同步延迟（分钟）
    #[serde(default = "default_pull_on_start")]
    pub pull_on_start: bool, // 启动时是否自动 pull
    #[serde(default)]
    pub user_name: String, // Git 用户名
    #[serde(default)]
    pub user_email: String, // Git 邮箱
    #[serde(default)]
    pub remote_url: String, // 远程仓库 URL
    #[serde(default)]
    pub token: String, // GitHub Token
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
            setup_completed: true, // 默认为 true
            git: GitSettings::default(),
            plugins: default_plugin_states(),
            // 兼容字段默认为 None
            update_available: None,
            update_info: None,
            translation_engine: None,
            ocr_engine: None,
            ocr_language: None,
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
            fs::create_dir_all(&config_dir).map_err(|e| format!("创建配置目录失败: {}", e))?;
        }

        // 尝试加载现有配置
        let mut config = if config_path.exists() {
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

        normalize_plugin_states(&mut config.plugins);

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
        let content = fs::read_to_string(path).map_err(|e| format!("读取配置文件失败: {}", e))?;

        let config: AppConfig =
            serde_json::from_str(&content).map_err(|e| format!("解析配置文件失败: {}", e))?;

        Ok(config)
    }

    /// 保存配置到文件
    pub fn save(&self) -> Result<(), String> {
        let content = serde_json::to_string_pretty(&self.config)
            .map_err(|e| format!("序列化配置失败: {}", e))?;

        fs::write(&self.config_path, content).map_err(|e| format!("写入配置文件失败: {}", e))?;

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

    pub fn get_plugin_states(&self) -> HashMap<String, bool> {
        self.config
            .plugins
            .iter()
            .map(|(id, state)| (id.clone(), state.enabled))
            .collect()
    }

    pub fn is_plugin_enabled(&self, plugin_id: &str) -> bool {
        self.config
            .plugins
            .get(plugin_id)
            .map(|state| state.enabled)
            .unwrap_or_else(default_plugin_enabled)
    }

    pub fn set_plugin_enabled(&mut self, plugin_id: String, enabled: bool) {
        self.config
            .plugins
            .entry(plugin_id)
            .and_modify(|state| state.enabled = enabled)
            .or_insert(PluginRuntimeState { enabled });
    }

    pub fn remove_plugin_state(&mut self, plugin_id: &str) {
        self.config.plugins.remove(plugin_id);
    }

    /// 通用方法：获取配置值（用于兼容旧代码）
    pub fn get_value<T>(&self, key: &str) -> Option<T>
    where
        T: serde::de::DeserializeOwned,
    {
        let json = serde_json::to_value(&self.config).ok()?;
        json.get(key)
            .and_then(|v| serde_json::from_value(v.clone()).ok())
    }

    /// 通用方法：设置配置值（用于兼容旧代码）
    pub fn set_value<T>(&mut self, key: &str, value: T) -> Result<(), String>
    where
        T: serde::Serialize,
    {
        let mut json =
            serde_json::to_value(&self.config).map_err(|e| format!("序列化配置失败: {}", e))?;

        if let Some(obj) = json.as_object_mut() {
            obj.insert(
                key.to_string(),
                serde_json::to_value(value).map_err(|e| format!("序列化值失败: {}", e))?,
            );
        }

        self.config =
            serde_json::from_value(json).map_err(|e| format!("反序列化配置失败: {}", e))?;

        Ok(())
    }
}

// ============= Tauri 命令 =============

use std::sync::{Arc, RwLock};
use tauri::{command, AppHandle, Emitter, Manager};
use walkdir::WalkDir;
use zip::ZipArchive;

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalPluginPackage {
    manifest: serde_json::Value,
    package_path: String,
}

pub fn is_plugin_enabled(app_handle: &AppHandle, plugin_id: &str) -> bool {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        if let Ok(manager) = config_state.read() {
            return manager.is_plugin_enabled(plugin_id);
        }
    }

    if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(app_handle) {
        if let Ok(manager) = AppConfigManager::new(&workspace_root) {
            return manager.is_plugin_enabled(plugin_id);
        }
    }

    default_plugin_enabled()
}

pub fn require_plugin_enabled(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    if is_plugin_enabled(app_handle, plugin_id) {
        Ok(())
    } else {
        Err(format!("插件 '{}' 未启用", plugin_id))
    }
}

struct PluginRuntimeSpec {
    id: &'static str,
    apply_runtime_change: fn(&AppHandle, bool),
}

const PLUGIN_RUNTIME_SPECS: &[PluginRuntimeSpec] = &[
    PluginRuntimeSpec {
        id: "system-theme",
        apply_runtime_change: apply_system_theme_runtime_change,
    },
    PluginRuntimeSpec {
        id: "todo",
        apply_runtime_change: apply_todo_runtime_change,
    },
    PluginRuntimeSpec {
        id: "desktop-files",
        apply_runtime_change: apply_desktop_files_runtime_change,
    },
    PluginRuntimeSpec {
        id: "local-launcher",
        apply_runtime_change: apply_local_launcher_runtime_change,
    },
    PluginRuntimeSpec {
        id: "git-sync",
        apply_runtime_change: apply_git_sync_runtime_change,
    },
];

fn plugin_runtime_spec(plugin_id: &str) -> Option<&'static PluginRuntimeSpec> {
    PLUGIN_RUNTIME_SPECS
        .iter()
        .find(|spec| spec.id == plugin_id)
}

fn apply_system_theme_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        let config = crate::plugins::system_theme::load_config(app_handle);
        if matches!(
            config.theme_mode,
            crate::plugins::system_theme::ThemeMode::Schedule
        ) {
            let _ = crate::plugins::system_theme::start_scheduler(app_handle.clone());
        }
    } else {
        crate::plugins::system_theme::stop_scheduler();
    }
}

fn apply_todo_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        crate::plugins::todo::start_alarm_service(app_handle.clone());
    } else {
        crate::plugins::todo::stop_alarm_service();
    }
}

fn apply_desktop_files_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if let Some(watcher_state) = app_handle
        .try_state::<Arc<std::sync::Mutex<Option<crate::desktop_watcher::DesktopFileWatcher>>>>()
    {
        if let Ok(mut watcher_lock) = watcher_state.lock() {
            if !enabled {
                *watcher_lock = None;
            } else if watcher_lock.is_none() {
                if let Some(desktop_path) = dirs::desktop_dir() {
                    match crate::desktop_watcher::DesktopFileWatcher::start(desktop_path) {
                        Ok(watcher) => {
                            *watcher_lock = Some(watcher);
                        }
                        Err(e) => {
                            warn!("[Plugin] 启动桌面文件监听失败: {}", e);
                        }
                    }
                }
            }
        }
    }
    if enabled {
        crate::plugins::desktop_files::refresh_desktop_files_cache();
    }
}

fn apply_local_launcher_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        crate::icon::init_app_and_bookmark_icons(app_handle);
    }
}

fn apply_git_sync_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        let _ = crate::git_sync::start_auto_sync_command(app_handle.clone());
    } else {
        let _ = crate::git_sync::stop_auto_sync_command(app_handle.clone());
    }
}

fn apply_plugin_runtime_change(app_handle: &AppHandle, plugin_id: &str, enabled: bool) {
    if let Some(spec) = plugin_runtime_spec(plugin_id) {
        (spec.apply_runtime_change)(app_handle, enabled);
    }

    if crate::db::is_setup_completed_internal(app_handle) {
        if let Err(e) = crate::tray::recreate_tray_menu(app_handle) {
            warn!("[Plugin] 刷新托盘菜单失败: {}", e);
        }
    }

    let _ = app_handle.emit(
        "plugin-state-changed",
        serde_json::json!({
            "pluginId": plugin_id,
            "enabled": enabled
        }),
    );
}

pub fn apply_enabled_plugin_runtime_change(app_handle: &AppHandle, plugin_id: &str) {
    if is_plugin_enabled(app_handle, plugin_id) {
        if let Some(spec) = plugin_runtime_spec(plugin_id) {
            (spec.apply_runtime_change)(app_handle, true);
        }
    }
}

/// 获取应用配置
#[command]
pub fn get_app_config(app_handle: AppHandle) -> Result<AppConfig, String> {
    // 尝试从应用状态获取 AppConfigManager
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
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
        let mut manager = config_state
            .write()
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
        let manager = config_state
            .read()
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
pub fn update_git_settings_command(
    app_handle: AppHandle,
    settings: GitSettings,
) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
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
        let mut manager = config_state
            .write()
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
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_language(language);
        manager.save()?;
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

#[command]
pub fn get_plugin_states(app_handle: AppHandle) -> Result<HashMap<String, bool>, String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        return Ok(manager.get_plugin_states());
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let manager = AppConfigManager::new(&workspace_root)?;
    Ok(manager.get_plugin_states())
}

fn plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    Ok(app_handle
        .path()
        .app_data_dir()
        .map_err(|e| format!("获取应用数据目录失败: {}", e))?
        .join("plugins"))
}

fn validate_plugin_package_id(plugin_id: &str) -> Result<(), String> {
    if plugin_id.is_empty() || plugin_id == "." || plugin_id == ".." || plugin_id.len() > 96 {
        return Err("插件 ID 无效".to_string());
    }

    if plugin_id
        .chars()
        .all(|ch| ch.is_ascii_alphanumeric() || matches!(ch, '-' | '_' | '.'))
    {
        Ok(())
    } else {
        Err("插件 ID 只能包含字母、数字、点、短横线和下划线".to_string())
    }
}

fn validate_plugin_relative_path(value: &str) -> Result<(), String> {
    if value.is_empty()
        || value.contains("://")
        || value.starts_with('/')
        || Path::new(value).is_absolute()
        || value
            .split(['/', '\\'])
            .any(|segment| segment == ".." || segment.is_empty())
    {
        return Err(format!("插件资源路径无效: {}", value));
    }

    Ok(())
}

fn validate_local_plugin_manifest(manifest: &serde_json::Value) -> Result<String, String> {
    if manifest
        .get("schemaVersion")
        .and_then(|value| value.as_i64())
        != Some(1)
    {
        return Err("插件清单 schemaVersion 必须为 1".to_string());
    }

    if manifest.get("kind").and_then(|value| value.as_str()) != Some("local") {
        return Err("本地插件清单 kind 必须为 local".to_string());
    }

    let plugin_id = manifest
        .get("id")
        .and_then(|value| value.as_str())
        .ok_or("插件清单缺少 id".to_string())?;
    validate_plugin_package_id(plugin_id)?;

    if let Some(entry) = manifest.get("entry").and_then(|value| value.as_object()) {
        for key in ["frontend", "backend"] {
            if let Some(path) = entry.get(key).and_then(|value| value.as_str()) {
                validate_plugin_relative_path(path)?;
            }
        }
    }

    Ok(plugin_id.to_string())
}

fn read_plugin_package_manifest(manifest_path: &Path) -> Result<serde_json::Value, String> {
    fs::read_to_string(manifest_path)
        .map_err(|e| format!("读取插件清单失败: {} ({})", manifest_path.display(), e))
        .and_then(|content| {
            serde_json::from_str::<serde_json::Value>(&content)
                .map_err(|e| format!("解析插件清单失败: {} ({})", manifest_path.display(), e))
        })
}

fn plugin_package_record(
    manifest: serde_json::Value,
    package_path: &Path,
) -> Result<LocalPluginPackage, String> {
    Ok(LocalPluginPackage {
        manifest,
        package_path: package_path
            .canonicalize()
            .unwrap_or_else(|_| package_path.to_path_buf())
            .to_string_lossy()
            .to_string(),
    })
}

fn copy_plugin_package_dir(source_dir: &Path, target_dir: &Path) -> Result<(), String> {
    for entry in WalkDir::new(source_dir).follow_links(false) {
        let entry = entry.map_err(|e| format!("读取插件包文件失败: {}", e))?;
        let source_path = entry.path();
        let relative_path = source_path
            .strip_prefix(source_dir)
            .map_err(|e| format!("计算插件包路径失败: {}", e))?;
        let target_path = target_dir.join(relative_path);

        if entry.file_type().is_dir() {
            fs::create_dir_all(&target_path)
                .map_err(|e| format!("创建插件目录失败: {} ({})", target_path.display(), e))?;
        } else if entry.file_type().is_file() {
            if let Some(parent) = target_path.parent() {
                fs::create_dir_all(parent)
                    .map_err(|e| format!("创建插件目录失败: {} ({})", parent.display(), e))?;
            }
            fs::copy(source_path, &target_path).map_err(|e| {
                format!(
                    "复制插件文件失败: {} -> {} ({})",
                    source_path.display(),
                    target_path.display(),
                    e
                )
            })?;
        }
    }

    Ok(())
}

fn create_plugin_install_temp_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map_err(|e| format!("生成临时目录失败: {}", e))?
        .as_millis();
    let temp_dir = plugin_packages_dir(app_handle)?.join(format!(".install-tmp-{}", now));
    fs::create_dir_all(&temp_dir)
        .map_err(|e| format!("创建插件临时目录失败: {} ({})", temp_dir.display(), e))?;
    Ok(temp_dir)
}

fn extract_plugin_zip_package(zip_path: &Path, target_dir: &Path) -> Result<(), String> {
    let file = File::open(zip_path)
        .map_err(|e| format!("打开插件压缩包失败: {} ({})", zip_path.display(), e))?;
    let mut archive = ZipArchive::new(file)
        .map_err(|e| format!("读取插件压缩包失败: {} ({})", zip_path.display(), e))?;

    for index in 0..archive.len() {
        let mut file = archive
            .by_index(index)
            .map_err(|e| format!("读取插件压缩包条目失败: {}", e))?;
        let enclosed_name = file
            .enclosed_name()
            .ok_or_else(|| format!("插件压缩包包含不安全路径: {}", file.name()))?;
        let output_path = target_dir.join(enclosed_name);

        if file.is_dir() {
            fs::create_dir_all(&output_path)
                .map_err(|e| format!("创建插件目录失败: {} ({})", output_path.display(), e))?;
            continue;
        }

        if let Some(parent) = output_path.parent() {
            fs::create_dir_all(parent)
                .map_err(|e| format!("创建插件目录失败: {} ({})", parent.display(), e))?;
        }

        let mut output_file = File::create(&output_path)
            .map_err(|e| format!("创建插件文件失败: {} ({})", output_path.display(), e))?;
        io::copy(&mut file, &mut output_file)
            .map_err(|e| format!("解压插件文件失败: {} ({})", output_path.display(), e))?;
    }

    Ok(())
}

fn find_plugin_source_root(extracted_dir: &Path) -> Result<PathBuf, String> {
    if extracted_dir.join("plugin.json").is_file() {
        return Ok(extracted_dir.to_path_buf());
    }

    let mut candidates = Vec::new();
    for entry in fs::read_dir(extracted_dir)
        .map_err(|e| format!("读取插件临时目录失败: {} ({})", extracted_dir.display(), e))?
    {
        let entry = entry.map_err(|e| format!("读取插件临时目录条目失败: {}", e))?;
        let path = entry.path();
        if path.is_dir() && path.join("plugin.json").is_file() {
            candidates.push(path);
        }
    }

    match candidates.len() {
        1 => Ok(candidates.remove(0)),
        0 => Err("插件包缺少 plugin.json".to_string()),
        _ => Err("插件包中包含多个 plugin.json 根目录".to_string()),
    }
}

fn resolve_plugin_install_source(
    app_handle: &AppHandle,
    source_path: &Path,
) -> Result<(PathBuf, Option<PathBuf>), String> {
    if source_path.is_dir() {
        return source_path
            .canonicalize()
            .map(|path| (path, None))
            .map_err(|e| format!("解析插件目录失败: {}", e));
    }

    let is_zip = source_path
        .extension()
        .and_then(|value| value.to_str())
        .map(|value| value.eq_ignore_ascii_case("zip"))
        .unwrap_or(false);

    if !source_path.is_file() || !is_zip {
        return Err("请选择包含 plugin.json 的插件目录，或 .zip 插件包".to_string());
    }

    let temp_dir = create_plugin_install_temp_dir(app_handle)?;
    let result = extract_plugin_zip_package(source_path, &temp_dir)
        .and_then(|_| find_plugin_source_root(&temp_dir));

    match result {
        Ok(source_dir) => Ok((source_dir, Some(temp_dir))),
        Err(error) => {
            let _ = fs::remove_dir_all(&temp_dir);
            Err(error)
        }
    }
}

#[command]
pub fn get_installed_plugin_manifests(
    app_handle: AppHandle,
) -> Result<Vec<LocalPluginPackage>, String> {
    let plugins_dir = plugin_packages_dir(&app_handle)?;

    if !plugins_dir.exists() {
        return Ok(Vec::new());
    }

    let entries = fs::read_dir(&plugins_dir)
        .map_err(|e| format!("读取插件目录失败: {} ({})", plugins_dir.display(), e))?;

    let mut manifests = Vec::new();
    for entry in entries.flatten() {
        let package_path = entry.path();
        let manifest_path = package_path.join("plugin.json");
        if !manifest_path.is_file() {
            continue;
        }

        match read_plugin_package_manifest(&manifest_path).and_then(|manifest| {
            validate_local_plugin_manifest(&manifest)?;
            plugin_package_record(manifest, &package_path)
        }) {
            Ok(plugin_package) => manifests.push(plugin_package),
            Err(error) => warn!("[Plugin] {}", error),
        }
    }

    Ok(manifests)
}

#[command]
pub fn install_local_plugin_package(
    app_handle: AppHandle,
    source_path: String,
    overwrite: bool,
) -> Result<LocalPluginPackage, String> {
    let source_path = PathBuf::from(source_path);
    let (source_dir, temp_dir) = resolve_plugin_install_source(&app_handle, &source_path)?;
    let manifest_path = source_dir.join("plugin.json");
    if !manifest_path.is_file() {
        if let Some(temp_dir) = temp_dir {
            let _ = fs::remove_dir_all(temp_dir);
        }
        return Err("插件目录缺少 plugin.json".to_string());
    }

    let result = (|| -> Result<LocalPluginPackage, String> {
        let manifest = read_plugin_package_manifest(&manifest_path)?;
        let plugin_id = validate_local_plugin_manifest(&manifest)?;

        let plugins_dir = plugin_packages_dir(&app_handle)?;
        fs::create_dir_all(&plugins_dir)
            .map_err(|e| format!("创建插件目录失败: {} ({})", plugins_dir.display(), e))?;

        let target_dir = plugins_dir.join(&plugin_id);
        if target_dir.exists() {
            if !overwrite {
                return Err(format!("插件 '{}' 已安装", plugin_id));
            }
            fs::remove_dir_all(&target_dir)
                .map_err(|e| format!("移除旧插件目录失败: {} ({})", target_dir.display(), e))?;
        }

        fs::create_dir_all(&target_dir)
            .map_err(|e| format!("创建插件目录失败: {} ({})", target_dir.display(), e))?;
        if let Err(error) = copy_plugin_package_dir(&source_dir, &target_dir) {
            let _ = fs::remove_dir_all(&target_dir);
            return Err(error);
        }

        info!("✅ [Plugin] installed local package {}", plugin_id);
        plugin_package_record(manifest, &target_dir)
    })();

    if let Some(temp_dir) = temp_dir {
        let _ = fs::remove_dir_all(temp_dir);
    }

    result
}

#[command]
pub fn uninstall_local_plugin_package(
    app_handle: AppHandle,
    plugin_id: String,
) -> Result<(), String> {
    validate_plugin_package_id(&plugin_id)?;

    let plugins_dir = plugin_packages_dir(&app_handle)?;
    let target_dir = plugins_dir.join(&plugin_id);
    if !target_dir.exists() {
        return Err(format!("本地插件 '{}' 未安装", plugin_id));
    }

    fs::remove_dir_all(&target_dir)
        .map_err(|e| format!("删除插件目录失败: {} ({})", target_dir.display(), e))?;

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.remove_plugin_state(&plugin_id);
        manager.save()?;
    } else if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(&app_handle) {
        let mut manager = AppConfigManager::new(&workspace_root)?;
        manager.remove_plugin_state(&plugin_id);
        manager.save()?;
    }

    info!("✅ [Plugin] uninstalled local package {}", plugin_id);
    Ok(())
}

#[command]
pub fn set_plugin_enabled(
    app_handle: AppHandle,
    plugin_id: String,
    enabled: bool,
) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        {
            let mut manager = config_state
                .write()
                .map_err(|e| format!("获取配置锁失败: {}", e))?;
            manager.set_plugin_enabled(plugin_id.clone(), enabled);
            manager.save()?;
        }
        info!("✅ [Plugin] {} enabled={}", plugin_id, enabled);
        apply_plugin_runtime_change(&app_handle, &plugin_id, enabled);
        return Ok(());
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let mut manager = AppConfigManager::new(&workspace_root)?;
    manager.set_plugin_enabled(plugin_id.clone(), enabled);
    manager.save()?;
    info!("✅ [Plugin] {} enabled={}", plugin_id, enabled);
    apply_plugin_runtime_change(&app_handle, &plugin_id, enabled);
    Ok(())
}
