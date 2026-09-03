// 应用配置管理模块
// 管理 .snippets-code/app.json 配置文件

use chrono::{DateTime, Utc};
use futures::StreamExt;
use log::{debug, info, warn};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::collections::HashMap;
use std::error::Error as StdError;
use std::fs::{self, File};
use std::io::{self, Read, Write};
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};

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
    #[serde(default = "default_cache_icons")]
    pub cache_icons: bool,

    // Git 同步配置
    #[serde(default)]
    pub git: GitSettings,

    // 编辑器显示配置
    #[serde(default)]
    pub editor: EditorSettings,

    // 快速搜索显示配置
    #[serde(default)]
    pub quick_search: QuickSearchSettings,

    // 插件启用状态。官方功能默认需要安装本地插件包，核心功能除外。
    #[serde(default = "default_plugin_states")]
    pub plugins: PluginStates,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub plugin_install_dir: Option<String>,

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
    pub show_progress_reset_kind: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub setup_restart_pending: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub index_reset_restart_pending: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub update_restart_pending: Option<bool>,
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
    pub screen_recorder_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub dark_mode_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub wallpaper_switcher_hotkey: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub dark_mode_config: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub wallpaper_switcher_config: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub workspace_root: Option<String>,
    #[serde(flatten)]
    pub extra: HashMap<String, serde_json::Value>,
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

fn default_cache_icons() -> bool {
    true
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginRuntimeState {
    #[serde(default = "default_plugin_enabled")]
    pub enabled: bool,
}

pub type PluginStates = HashMap<String, PluginRuntimeState>;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct EditorSettings {
    #[serde(default = "default_editor_line_numbers")]
    pub line_numbers: bool,
    #[serde(default = "default_editor_line_height")]
    pub line_height: f64,
}

fn default_editor_line_numbers() -> bool {
    true
}

fn default_editor_line_height() -> f64 {
    1.6
}

impl Default for EditorSettings {
    fn default() -> Self {
        Self {
            line_numbers: default_editor_line_numbers(),
            line_height: default_editor_line_height(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct QuickSearchSettings {
    #[serde(default)]
    pub preview_visible: bool,
}

const HOST_PLUGIN_IDS: &[&str] = &[
    "translation",
    "screenshot",
    "screen-recorder",
    "todo",
    "system-theme",
    "local-launcher",
    "desktop-files",
    "quick-tools",
    "search-engines",
    "local-ai",
    "git-sync",
    "wallpaper-switcher",
];

fn default_plugin_enabled() -> bool {
    true
}

fn is_uninstalled_host_plugin(app_handle: &AppHandle, plugin_id: &str) -> bool {
    HOST_PLUGIN_IDS.contains(&plugin_id)
        && !is_local_plugin_package_installed(app_handle, plugin_id)
}

fn default_plugin_states() -> PluginStates {
    HashMap::new()
}

fn normalize_plugin_states(_plugins: &mut PluginStates) {
    // Official plugins are external packages. Do not synthesize default states here.
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
    #[serde(default, skip_serializing)]
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
            cache_icons: true,
            git: GitSettings::default(),
            editor: EditorSettings::default(),
            quick_search: QuickSearchSettings::default(),
            plugins: default_plugin_states(),
            plugin_install_dir: None,
            // 兼容字段默认为 None
            update_available: None,
            update_info: None,
            translation_engine: None,
            ocr_engine: None,
            ocr_language: None,
            offline_model_activated: None,
            show_progress_on_restart: None,
            show_progress_reset_kind: None,
            setup_restart_pending: None,
            index_reset_restart_pending: None,
            update_restart_pending: None,
            search_hotkey: None,
            config_hotkey: None,
            translate_hotkey: None,
            selection_translate_hotkey: None,
            screenshot_hotkey: None,
            screen_recorder_hotkey: None,
            dark_mode_hotkey: None,
            wallpaper_switcher_hotkey: None,
            dark_mode_config: None,
            wallpaper_switcher_config: None,
            workspace_root: None,
            extra: HashMap::new(),
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

fn has_required_git_sync_settings(settings: &GitSettings) -> bool {
    !settings.user_name.trim().is_empty()
        && !settings.user_email.trim().is_empty()
        && !settings.remote_url.trim().is_empty()
}

fn current_app_version() -> &'static str {
    env!("CARGO_PKG_VERSION")
}

fn update_info_version(update_info: &Option<serde_json::Value>) -> Option<&str> {
    update_info
        .as_ref()
        .and_then(|value| value.get("version"))
        .and_then(|value| value.as_str())
}

// 应用配置管理器
pub struct AppConfigManager {
    config_path: PathBuf,
    config: AppConfig,
}

impl AppConfigManager {
    fn sanitize_git_settings(settings: &mut GitSettings) {
        settings.remote_url = crate::git_common::remove_token_from_url(&settings.remote_url);
        settings.token.clear();
    }

    fn normalize_runtime_metadata(config: &mut AppConfig) {
        let current_version = current_app_version();
        if config.version != current_version {
            config.version = current_version.to_string();
        }

        let cached_update_is_current_or_older = update_info_version(&config.update_info)
            .is_some_and(|version| {
                compare_semver(version, current_version) != std::cmp::Ordering::Greater
            });

        if config.update_available != Some(true) || cached_update_is_current_or_older {
            if cached_update_is_current_or_older {
                config.update_available = Some(false);
            }
            config.update_info = None;
        }
    }

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
        crate::json_config::recover_atomic_file(&config_path)?;

        let config_exists = config_path.exists();
        let existing_content = if config_exists {
            match fs::read_to_string(&config_path) {
                Ok(content) => Some(content),
                Err(e) => {
                    warn!(
                        "⚠️ [AppConfig] 加载配置失败: 读取配置文件失败: {}，使用默认配置",
                        e
                    );
                    None
                }
            }
        } else {
            None
        };

        // 尝试加载现有配置
        let mut config = if let Some(content) = existing_content.as_deref() {
            match Self::load_from_str(content) {
                Ok(cfg) => {
                    info!("✅ [AppConfig] 加载配置成功");
                    cfg
                }
                Err(e) => {
                    warn!("⚠️ [AppConfig] 加载配置失败: {}，使用默认配置", e);
                    AppConfig::default()
                }
            }
        } else if config_exists {
            AppConfig::default()
        } else {
            info!("📝 [AppConfig] 配置文件不存在，创建默认配置");
            AppConfig::default()
        };

        normalize_plugin_states(&mut config.plugins);
        Self::sanitize_git_settings(&mut config.git);
        Self::normalize_runtime_metadata(&mut config);

        let manager = Self {
            config_path,
            config,
        };

        // 保存配置（确保文件存在，并持久化 schema/default 归一化结果）
        if Self::needs_save(existing_content.as_deref(), &manager.config) {
            manager.save()?;
        }

        Ok(manager)
    }

    /// 从字符串加载配置
    fn load_from_str(content: &str) -> Result<AppConfig, String> {
        let config: AppConfig =
            serde_json::from_str(content).map_err(|e| format!("解析配置文件失败: {}", e))?;

        Ok(config)
    }

    fn needs_save(existing_content: Option<&str>, config: &AppConfig) -> bool {
        let Some(existing_content) = existing_content else {
            return true;
        };

        match (
            serde_json::from_str::<serde_json::Value>(existing_content),
            serde_json::to_value(config),
        ) {
            (Ok(existing), Ok(current)) => existing != current,
            _ => true,
        }
    }

    /// 保存配置到文件
    pub fn save(&self) -> Result<(), String> {
        let content = serde_json::to_string_pretty(&self.config)
            .map_err(|e| format!("序列化配置失败: {}", e))?;

        crate::json_config::write_text_atomic(&self.config_path, &content)
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
        let mut config = config;
        Self::sanitize_git_settings(&mut config.git);
        Self::normalize_runtime_metadata(&mut config);
        self.config = config;
    }

    /// 获取 Git 设置
    pub fn get_git_settings(&self) -> &GitSettings {
        &self.config.git
    }

    /// 更新 Git 设置
    pub fn update_git_settings(&mut self, settings: GitSettings) {
        let mut settings = settings;
        Self::sanitize_git_settings(&mut settings);
        self.config.git = settings;
    }

    pub fn get_editor_settings(&self) -> &EditorSettings {
        &self.config.editor
    }

    pub fn update_editor_settings(&mut self, settings: EditorSettings) {
        let mut settings = settings;
        if !settings.line_height.is_finite() {
            settings.line_height = default_editor_line_height();
        }
        settings.line_height = settings.line_height.clamp(1.2, 2.0);
        self.config.editor = settings;
    }

    pub fn set_quick_search_preview_visible(&mut self, visible: bool) {
        self.config.quick_search.preview_visible = visible;
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

    pub fn clear_plugin_owned_config(&mut self, plugin_id: &str) {
        match plugin_id {
            "git-sync" => {
                self.config.git = GitSettings::default();
            }
            "system-theme" => {
                self.config.dark_mode_config = None;
                self.config.dark_mode_hotkey = None;
            }
            "translation" => {
                self.config.translation_engine = None;
                self.config.offline_model_activated = None;
                self.config.translate_hotkey = None;
                self.config.selection_translate_hotkey = None;
            }
            "screenshot" => {
                self.config.ocr_engine = None;
                self.config.ocr_language = None;
                self.config.screenshot_hotkey = None;
            }
            "screen-recorder" => {
                self.config.screen_recorder_hotkey = None;
            }
            "wallpaper-switcher" => {
                self.config.wallpaper_switcher_config = None;
                self.config.wallpaper_switcher_hotkey = None;
            }
            "local-ai" => {
                self.config.extra.remove("local_ai_chat_histories");
            }
            _ => {}
        }
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

use std::sync::{Arc, LazyLock, Mutex, RwLock};
use tauri::{command, AppHandle, Emitter, Manager};
use tauri_plugin_notification::NotificationExt;
use walkdir::WalkDir;
use zip::ZipArchive;

const PLUGIN_INSTALL_METADATA_FILE: &str = ".install-meta.json";
const PLUGIN_PACKAGES_DIR_NAME: &str = "plugins";
const PLUGIN_PACKAGES_ROOT_DIR_NAME: &str = "packages";
const PLUGIN_CACHE_ROOT_DIR_NAME: &str = "plugins";
const TRANSLATION_OFFLINE_RUNTIME_PLUGIN_ID: &str = "translation-offline-runtime";
const TRANSLATION_OFFLINE_RUNTIME_VERSION: &str = "2.17.2";
const TRANSLATION_OFFLINE_RUNTIME_FILES: &[&str] = &[
    "transformers.min.js",
    "ort-wasm-simd-threaded.wasm",
    "ort-wasm-simd.wasm",
    "ort-wasm-threaded.wasm",
    "ort-wasm.wasm",
];

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalPluginPackage {
    manifest: serde_json::Value,
    package_path: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    installed_at: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PluginCapabilityAction {
    pub plugin_id: String,
    pub item_id: String,
    pub plugin_name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct PluginInstallMetadata {
    installed_at: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PluginInstallProgressPayload {
    package_url: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    plugin_id: Option<String>,
    phase: String,
    downloaded_bytes: u64,
    total_bytes: Option<u64>,
    progress: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    error: Option<String>,
    updated_at: u64,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InstallPluginPackageFromUrlRequest {
    package_url: String,
    #[serde(default)]
    package_subdir: Option<String>,
    #[serde(default)]
    expected_size_bytes: Option<u64>,
    #[serde(default)]
    expected_sha256: Option<String>,
    #[serde(default)]
    overwrite: bool,
    #[serde(default)]
    mirror_urls: Option<Vec<String>>,
    #[serde(default)]
    plugin_id: Option<String>,
}

static PLUGIN_INSTALL_LOCK: LazyLock<tokio::sync::Mutex<()>> =
    LazyLock::new(|| tokio::sync::Mutex::new(()));
static PLUGIN_INSTALL_TASKS: LazyLock<Mutex<HashMap<String, PluginInstallProgressPayload>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

pub fn is_plugin_enabled(app_handle: &AppHandle, plugin_id: &str) -> bool {
    if is_uninstalled_host_plugin(app_handle, plugin_id) {
        return false;
    }

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

fn apply_effective_plugin_state_gates(app_handle: &AppHandle, states: &mut HashMap<String, bool>) {
    for plugin_id in HOST_PLUGIN_IDS {
        if is_uninstalled_host_plugin(app_handle, plugin_id) {
            states.insert((*plugin_id).to_string(), false);
        }
    }
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
        id: "local-ai",
        apply_runtime_change: apply_local_ai_runtime_change,
    },
    PluginRuntimeSpec {
        id: "git-sync",
        apply_runtime_change: apply_git_sync_runtime_change,
    },
    PluginRuntimeSpec {
        id: "wallpaper-switcher",
        apply_runtime_change: apply_wallpaper_switcher_runtime_change,
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
        if let Err(e) = crate::db::ensure_plugin_storage("todo") {
            warn!("[Plugin] 初始化待办插件存储失败: {}", e);
            return;
        }
        crate::plugins::todo::start_alarm_service(app_handle.clone());
    } else {
        crate::plugins::todo::stop_alarm_service();
    }
}

fn notify_desktop_index_complete(app_handle: &AppHandle, count: usize) {
    if let Err(error) = app_handle
        .notification()
        .builder()
        .title("数据索引完成")
        .body(format!("已索引 {} 个桌面文件", count))
        .show()
    {
        warn!("[DesktopFiles] 显示索引完成通知失败: {}", error);
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
        if let Err(e) = crate::db::ensure_plugin_storage("desktop-files") {
            warn!("[Plugin] 初始化桌面文件插件存储失败: {}", e);
            return;
        }
        let progress_reset_kind = crate::db::peek_show_progress_kind(app_handle);
        if matches!(progress_reset_kind.as_deref(), Some("desktopFiles")) {
            if let Err(error) = crate::db::consume_show_progress_kind(app_handle) {
                warn!("[Plugin] 消费桌面文件重置任务失败: {}", error);
                return;
            }
            let count = crate::plugins::desktop_files::refresh_desktop_files_cache_with_progress(
                "desktop-files",
            );
            crate::window::emit_scan_complete_for("desktop-files", 0, 0, count);
            notify_desktop_index_complete(app_handle, count);
        } else if matches!(progress_reset_kind.as_deref(), Some("all")) {
            // “全部本机来源”由本地启动器统一消费并纳入同一条进度链，
            // 此处避免桌面文件插件同时扫描和覆盖缓存。
            info!("[DesktopFiles] 全部来源重建由本地启动器统一处理");
        } else if crate::window::get_active_scan_progress_states()
            .iter()
            .any(|state| state.owner == "local-launcher" && state.task == "index")
        {
            // 本地启动器可能已先一步消费 all 标记；根据活动任务再次门禁，
            // 消除线程调度顺序导致的并发桌面扫描。
            info!("[DesktopFiles] 本机来源索引进行中，跳过重复初始化");
        } else {
            crate::plugins::desktop_files::initialize_desktop_files_cache_with_count();
        }
    } else {
        crate::plugins::desktop_files::cancel_desktop_file_icon_rebuild();
        crate::plugins::desktop_files::invalidate_desktop_files_cache();
    }
}

fn apply_local_launcher_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        if let Err(e) = crate::db::ensure_plugin_storage("local-launcher") {
            warn!("[Plugin] 初始化本地启动器插件存储失败: {}", e);
            return;
        }
        crate::icon::init_app_and_bookmark_icons(app_handle);
    } else {
        crate::icon::cancel_app_and_bookmark_icons();
        crate::plugins::local_launcher::invalidate_apps_cache();
        crate::plugins::local_launcher::invalidate_bookmarks_cache();
    }
}

fn refresh_search_plugin_index_feedback(app_handle: AppHandle, plugin_id: String, enabled: bool) {
    if !enabled {
        return;
    }

    std::thread::spawn(move || match plugin_id.as_str() {
        "local-launcher" => crate::icon::rebuild_app_and_bookmark_index(app_handle),
        "desktop-files" => {
            let count = crate::plugins::desktop_files::refresh_desktop_files_cache_with_progress(
                "desktop-files",
            );
            crate::window::emit_scan_complete_for("desktop-files", 0, 0, count);
            notify_desktop_index_complete(&app_handle, count);
        }
        _ => {
            let _ = app_handle;
        }
    });
}

fn apply_git_sync_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        let _ = crate::git_sync::start_auto_sync_command(app_handle.clone());
    } else {
        let _ = crate::git_sync::stop_auto_sync_command(app_handle.clone());
    }
}

fn apply_wallpaper_switcher_runtime_change(app_handle: &AppHandle, enabled: bool) {
    crate::plugins::wallpaper_switcher::apply_runtime_change(app_handle, enabled);
}

fn apply_local_ai_runtime_change(app_handle: &AppHandle, enabled: bool) {
    crate::plugins::local_ai::apply_runtime_change(app_handle, enabled);
}

fn apply_plugin_runtime_effects(app_handle: &AppHandle, plugin_id: &str, enabled: bool) {
    if let Some(spec) = plugin_runtime_spec(plugin_id) {
        (spec.apply_runtime_change)(app_handle, enabled);
    }

    if let Err(e) = crate::hotkey::refresh_plugin_shortcuts(app_handle, plugin_id, enabled) {
        warn!(
            "[Plugin] refresh hotkeys for {} enabled={} failed: {}",
            plugin_id, enabled, e
        );
    }
}

fn apply_plugin_runtime_change(app_handle: &AppHandle, plugin_id: &str, enabled: bool) {
    apply_plugin_runtime_effects(app_handle, plugin_id, enabled);
    refresh_plugin_shell_integration(app_handle, plugin_id, enabled);
}

pub fn apply_enabled_plugin_runtime_change(app_handle: &AppHandle, plugin_id: &str) {
    if is_plugin_enabled(app_handle, plugin_id) {
        if let Some(spec) = plugin_runtime_spec(plugin_id) {
            (spec.apply_runtime_change)(app_handle, true);
        }
    }
}

pub fn ensure_enabled_plugin_storage(app_handle: &AppHandle) {
    for plugin_id in ["local-launcher", "desktop-files", "search-engines", "todo"] {
        if is_plugin_enabled(app_handle, plugin_id) {
            if let Err(e) = crate::db::ensure_plugin_storage(plugin_id) {
                warn!("[Plugin] ensure storage for {} failed: {}", plugin_id, e);
            }
        }
    }
}

fn clear_workspace_plugin_config(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    if plugin_id != "attachments" && plugin_id != "git-sync" {
        return Ok(());
    }

    let update_manager = |manager: &mut crate::markdown::WorkspaceManager| -> Result<(), String> {
        match plugin_id {
            "attachments" => {
                manager.update_attachment_settings(crate::markdown::AttachmentSettings::default());
            }
            "git-sync" => {
                manager.set_sync_enabled(false);
            }
            _ => {}
        }

        manager.save()
    };

    if let Some(workspace_state) =
        app_handle.try_state::<Arc<RwLock<crate::markdown::WorkspaceManager>>>()
    {
        let mut manager = workspace_state
            .write()
            .map_err(|e| format!("获取工作区配置锁失败: {}", e))?;
        return update_manager(&mut manager);
    }

    let Some(workspace_root) = crate::json_config::get_workspace_root(app_handle)? else {
        return Ok(());
    };
    let config_dir = workspace_root.join(".snippets-code");
    if !config_dir.exists() {
        fs::create_dir_all(&config_dir).map_err(|e| format!("创建工作区配置目录失败: {}", e))?;
    }
    let mut manager = crate::markdown::WorkspaceManager::new(config_dir)?;
    update_manager(&mut manager)
}

fn clear_database_plugin_config(plugin_id: &str) -> Result<(), String> {
    if plugin_id == "git-sync" {
        let conn = crate::db::DbConnectionManager::get_core().map_err(|e| e.to_string())?;
        conn.execute("DELETE FROM user_settings WHERE id = 1", [])
            .map_err(|e| e.to_string())?;
    }

    if matches!(
        plugin_id,
        "local-launcher" | "desktop-files" | "search-engines" | "todo"
    ) {
        crate::db::clear_plugin_storage(plugin_id).map_err(|e| e.to_string())?;
    }

    Ok(())
}

fn clear_app_plugin_config(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.clear_plugin_owned_config(plugin_id);
        manager.save()?;
        return Ok(());
    }

    if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(app_handle) {
        let mut manager = AppConfigManager::new(&workspace_root)?;
        manager.clear_plugin_owned_config(plugin_id);
        manager.save()?;
    }

    Ok(())
}

fn clear_plugin_owned_data(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    clear_app_plugin_config(app_handle, plugin_id)?;
    clear_workspace_plugin_config(app_handle, plugin_id)?;
    clear_database_plugin_config(plugin_id)?;
    clear_local_plugin_state(app_handle, plugin_id)?;
    clear_local_plugin_cache(app_handle, plugin_id)?;
    Ok(())
}

fn refresh_plugin_shell_integration(app_handle: &AppHandle, plugin_id: &str, enabled: bool) {
    if crate::db::is_setup_completed_internal(app_handle) {
        if let Err(e) = crate::tray::recreate_tray_menu(app_handle) {
            warn!("[Plugin] 刷新托盘菜单失败: {}", e);
        }
    }

    let _ = app_handle.emit(
        "plugin-state-changed",
        serde_json::json!({
            "pluginId": plugin_id,
            "enabled": enabled,
            "installed": is_local_plugin_package_installed(app_handle, plugin_id)
        }),
    );
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

/// 获取快速搜索预览面板的显示状态。
#[command]
pub fn get_quick_search_preview_visible(app_handle: AppHandle) -> Result<bool, String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(manager.get_config().quick_search.preview_visible)
    } else {
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(manager.get_config().quick_search.preview_visible)
    }
}

/// 更新快速搜索预览面板的显示状态，并立即持久化到 app.json。
#[command]
pub fn set_quick_search_preview_visible(
    app_handle: AppHandle,
    visible: bool,
) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.set_quick_search_preview_visible(visible);
        manager.save()?;
        info!("✅ [AppConfig] 快速搜索预览面板状态已更新: {}", visible);
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 获取编辑器显示设置
#[command]
pub fn get_editor_settings(app_handle: AppHandle) -> Result<EditorSettings, String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(manager.get_editor_settings().clone())
    } else {
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(manager.get_editor_settings().clone())
    }
}

/// 更新编辑器显示设置
#[command]
pub fn update_editor_settings(
    app_handle: AppHandle,
    settings: EditorSettings,
) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.update_editor_settings(settings);
        manager.save()?;
        info!("✅ [AppConfig] 编辑器显示设置已更新");
        Ok(())
    } else {
        Err("AppConfigManager 未初始化".to_string())
    }
}

/// 获取 Git 设置
#[command]
pub fn get_git_settings_command(app_handle: AppHandle) -> Result<GitSettings, String> {
    let mask_token = |mut settings: GitSettings| {
        settings.remote_url = crate::git_common::remove_token_from_url(&settings.remote_url);
        settings.token.clear();
        settings
    };

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Ok(mask_token(manager.get_git_settings().clone()))
    } else {
        let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
            .ok_or("工作区未设置".to_string())?;
        let manager = AppConfigManager::new(&workspace_root)?;
        Ok(mask_token(manager.get_git_settings().clone()))
    }
}

/// 更新 Git 设置
#[command]
pub fn update_git_settings_command(
    app_handle: AppHandle,
    settings: GitSettings,
) -> Result<(), String> {
    let mut settings = settings;
    settings.remote_url = crate::git_common::remove_token_from_url(&settings.remote_url);
    settings.token.clear();

    if settings.enabled && !has_required_git_sync_settings(&settings) {
        return Err("启用 Git 同步前，请先在个人中心完成用户名、邮箱和远程仓库配置".to_string());
    }

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
pub fn set_setup_index_preferences(
    app_handle: AppHandle,
    local_launcher: bool,
    desktop_files: bool,
    cache_icons: bool,
) -> Result<(), String> {
    let update_config = |manager: &mut AppConfigManager| -> Result<(), String> {
        let mut config = manager.get_config().clone();
        config.cache_icons = cache_icons;
        config
            .plugins
            .entry("local-launcher".to_string())
            .and_modify(|state| state.enabled = local_launcher)
            .or_insert(PluginRuntimeState {
                enabled: local_launcher,
            });
        config
            .plugins
            .entry("desktop-files".to_string())
            .and_modify(|state| state.enabled = desktop_files)
            .or_insert(PluginRuntimeState {
                enabled: desktop_files,
            });

        manager.update_config(config);
        manager.save()
    };

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        update_config(&mut manager)?;
    } else {
        let data_dir = crate::json_config::get_data_dir(&app_handle);
        let mut manager = AppConfigManager::new(&data_dir)?;
        update_config(&mut manager)?;
    }

    if let Some(reset_kind) = match (local_launcher, desktop_files) {
        // 本地启动器负责前台重建反馈；桌面文件按自身空缓存静默恢复，
        // 避免两个插件竞争消费同一个 all 标记并互相覆盖完成态。
        (true, true) => Some("launcher"),
        (true, false) => Some("launcher"),
        (false, true) => Some("desktopFiles"),
        (false, false) => None,
    } {
        crate::db::set_show_progress_on_restart_with_kind(&app_handle, reset_kind)?;
    } else {
        crate::db::clear_show_progress_on_restart(&app_handle)?;
    }

    info!(
        "✅ [Setup] index preferences saved local_launcher={} desktop_files={} cache_icons={}",
        local_launcher, desktop_files, cache_icons
    );

    Ok(())
}

#[command]
pub fn get_plugin_states(app_handle: AppHandle) -> Result<HashMap<String, bool>, String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        let mut states = manager.get_plugin_states();
        apply_effective_plugin_state_gates(&app_handle, &mut states);
        return Ok(states);
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let manager = AppConfigManager::new(&workspace_root)?;
    let mut states = manager.get_plugin_states();
    apply_effective_plugin_state_gates(&app_handle, &mut states);
    Ok(states)
}

fn plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    if let Some(configured_root) = configured_plugin_install_root_dir(app_handle)? {
        return Ok(configured_root.join(PLUGIN_PACKAGES_DIR_NAME));
    }

    default_plugin_packages_dir(app_handle)
}

fn default_plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    let data_dir = crate::json_config::get_data_dir(app_handle);
    let packages_dir = default_plugin_packages_dir_for_data_dir(&data_dir);
    let legacy_packages_dir = legacy_default_plugin_packages_dir_for_data_dir(&data_dir);
    migrate_installed_plugin_packages(&legacy_packages_dir, &packages_dir)?;
    Ok(packages_dir)
}

fn default_plugin_packages_dir_for_data_dir(data_dir: &Path) -> PathBuf {
    data_dir
        .join(PLUGIN_PACKAGES_ROOT_DIR_NAME)
        .join(PLUGIN_PACKAGES_DIR_NAME)
}

fn legacy_default_plugin_packages_dir_for_data_dir(data_dir: &Path) -> PathBuf {
    data_dir.join(PLUGIN_PACKAGES_DIR_NAME)
}

pub fn resolve_plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    plugin_packages_dir(app_handle)
}

fn configured_plugin_install_root_dir(app_handle: &AppHandle) -> Result<Option<PathBuf>, String> {
    let config = if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>()
    {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Some(manager.get_config().clone())
    } else if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(app_handle) {
        AppConfigManager::new(&workspace_root)
            .map(|manager| Some(manager.get_config().clone()))
            .unwrap_or(None)
    } else {
        None
    };

    Ok(config
        .and_then(|value| value.plugin_install_dir)
        .map(|value| normalize_plugin_install_root(Path::new(value.trim())))
        .filter(|value| value.is_absolute()))
}

fn normalize_plugin_install_root(path: &Path) -> PathBuf {
    if path
        .file_name()
        .is_some_and(|name| name.to_string_lossy().eq_ignore_ascii_case("plugins"))
    {
        return path
            .parent()
            .map(Path::to_path_buf)
            .unwrap_or_else(|| path.to_path_buf());
    }

    path.to_path_buf()
}

fn path_to_display_string(path: &Path) -> String {
    let value = path.to_string_lossy().to_string();
    #[cfg(windows)]
    {
        if let Some(rest) = value.strip_prefix(r"\\?\UNC\") {
            return format!(r"\\{}", rest);
        }
        if let Some(rest) = value.strip_prefix(r"\\?\") {
            return rest.to_string();
        }
    }
    value
}

fn normalized_existing_path(path: &Path) -> PathBuf {
    path.canonicalize().unwrap_or_else(|_| path.to_path_buf())
}

fn same_path(left: &Path, right: &Path) -> bool {
    path_to_display_string(&normalized_existing_path(left))
        .eq_ignore_ascii_case(&path_to_display_string(&normalized_existing_path(right)))
}

fn migrate_installed_plugin_packages(old_dir: &Path, new_dir: &Path) -> Result<(), String> {
    if same_path(old_dir, new_dir) || !old_dir.exists() {
        return Ok(());
    }

    fs::create_dir_all(new_dir)
        .map_err(|e| format!("创建插件安装目录失败: {} ({})", new_dir.display(), e))?;

    let entries = fs::read_dir(old_dir)
        .map_err(|e| format!("读取原插件目录失败: {} ({})", old_dir.display(), e))?;

    for entry in entries.flatten() {
        let source_path = entry.path();
        if !source_path.join("plugin.json").is_file() {
            continue;
        }

        let Some(plugin_dir_name) = source_path.file_name() else {
            continue;
        };
        let target_path = new_dir.join(plugin_dir_name);
        if target_path.exists() {
            warn!(
                "[Plugin] 迁移插件时目标已存在，跳过: {}",
                target_path.display()
            );
            continue;
        }

        let temp_path = new_dir.join(format!(
            ".migration-tmp-{}-{}",
            plugin_dir_name.to_string_lossy(),
            SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .map_err(|e| format!("生成迁移临时目录失败: {}", e))?
                .as_millis()
        ));

        if let Err(error) = copy_plugin_package_dir(&source_path, &temp_path).and_then(|_| {
            fs::rename(&temp_path, &target_path).map_err(|e| {
                format!(
                    "完成插件迁移失败: {} -> {} ({})",
                    temp_path.display(),
                    target_path.display(),
                    e
                )
            })
        }) {
            let _ = fs::remove_dir_all(&temp_path);
            return Err(error);
        }
    }

    Ok(())
}

#[command]
pub fn get_plugin_install_dir(app_handle: AppHandle) -> Result<String, String> {
    let plugins_dir = plugin_packages_dir(&app_handle)?;
    Ok(path_to_display_string(&normalized_existing_path(
        &plugins_dir,
    )))
}

#[command]
pub fn set_plugin_install_dir(app_handle: AppHandle, path: Option<String>) -> Result<(), String> {
    let old_plugins_dir = plugin_packages_dir(&app_handle)?;
    let configured_path = path
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());

    let (new_plugins_dir, normalized_path) = if let Some(value) = configured_path {
        let selected_root = normalize_plugin_install_root(&PathBuf::from(value));
        if !selected_root.is_absolute() {
            return Err("插件安装目录必须是绝对路径".to_string());
        }
        if selected_root.is_file() {
            return Err("插件安装目录不能是文件".to_string());
        }
        fs::create_dir_all(&selected_root).map_err(|e| {
            format!(
                "创建插件安装根目录失败: {} ({})",
                selected_root.display(),
                e
            )
        })?;
        let normalized_root = normalized_existing_path(&selected_root);
        let plugins_dir = normalized_root.join(PLUGIN_PACKAGES_DIR_NAME);
        fs::create_dir_all(&plugins_dir)
            .map_err(|e| format!("创建插件安装目录失败: {} ({})", plugins_dir.display(), e))?;
        (
            normalized_existing_path(&plugins_dir),
            Some(path_to_display_string(&normalized_root)),
        )
    } else {
        let default_dir = default_plugin_packages_dir(&app_handle)?;
        (normalized_existing_path(&default_dir), None)
    };

    migrate_installed_plugin_packages(&old_plugins_dir, &new_plugins_dir)?;

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        let mut config = manager.get_config().clone();
        config.plugin_install_dir = normalized_path;
        manager.update_config(config);
        manager.save()?;
        crate::uninstall::record_plugin_dir(&new_plugins_dir);
        info!("✅ [Plugin] 插件安装目录已更新");
        return Ok(());
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let mut manager = AppConfigManager::new(&workspace_root)?;
    let mut config = manager.get_config().clone();
    config.plugin_install_dir = normalized_path;
    manager.update_config(config);
    manager.save()?;
    crate::uninstall::record_plugin_dir(&new_plugins_dir);
    info!("✅ [Plugin] 插件安装目录已更新");
    Ok(())
}

fn is_local_plugin_package_installed(app_handle: &AppHandle, plugin_id: &str) -> bool {
    plugin_packages_dir(app_handle)
        .map(|plugins_dir| plugins_dir.join(plugin_id).join("plugin.json").is_file())
        .unwrap_or(false)
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

fn validate_plugin_data_key(key: &str) -> Result<(), String> {
    if key.is_empty() || key.len() > 128 {
        return Err("插件数据 key 无效".to_string());
    }

    if key
        .chars()
        .all(|ch| ch.is_ascii_alphanumeric() || matches!(ch, '-' | '_' | '.' | ':'))
    {
        Ok(())
    } else {
        Err("插件数据 key 只能包含字母、数字、点、冒号、短横线和下划线".to_string())
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

fn validate_plugin_storage_contract(manifest: &serde_json::Value) -> Result<(), String> {
    let Some(storage) = manifest.get("storage") else {
        return Ok(());
    };
    let Some(storage) = storage.as_object() else {
        return Err("插件 storage 必须是对象".to_string());
    };

    for field in ["schemaVersion", "indexSchemaVersion", "extractorVersion"] {
        if storage
            .get(field)
            .and_then(|value| value.as_u64())
            .is_none()
        {
            return Err(format!("插件 storage.{} 必须为非负整数", field));
        }
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
    validate_plugin_storage_contract(manifest)?;

    if let Some(entry) = manifest.get("entry").and_then(|value| value.as_object()) {
        for key in ["frontend", "backend"] {
            if let Some(path) = entry.get(key).and_then(|value| value.as_str()) {
                validate_plugin_relative_path(path)?;
            }
        }

        if let Some(kind) = entry.get("backendKind").and_then(|value| value.as_str()) {
            if !matches!(kind, "native-host" | "wasm" | "script") {
                return Err("插件后端类型必须为 native-host、wasm 或 script".to_string());
            }
        }
    }

    Ok(plugin_id.to_string())
}

fn parse_semver_parts(version: &str) -> Vec<u64> {
    version
        .trim_start_matches('v')
        .split('.')
        .map(|part| {
            part.chars()
                .take_while(|value| value.is_ascii_digit())
                .collect::<String>()
                .parse::<u64>()
                .unwrap_or(0)
        })
        .collect()
}

fn compare_semver(left: &str, right: &str) -> std::cmp::Ordering {
    let left_parts = parse_semver_parts(left);
    let right_parts = parse_semver_parts(right);
    let length = left_parts.len().max(right_parts.len());

    for index in 0..length {
        let left_value = *left_parts.get(index).unwrap_or(&0);
        let right_value = *right_parts.get(index).unwrap_or(&0);
        match left_value.cmp(&right_value) {
            std::cmp::Ordering::Equal => continue,
            ordering => return ordering,
        }
    }

    std::cmp::Ordering::Equal
}

fn validate_plugin_app_compatibility(
    app_handle: &AppHandle,
    manifest: &serde_json::Value,
) -> Result<(), String> {
    let min_app_version = manifest
        .get("minAppVersion")
        .or_else(|| manifest.get("compatibleAppVersion"))
        .and_then(|value| value.as_str())
        .map(|value| value.trim_start_matches(">=").trim());

    let Some(min_app_version) = min_app_version.filter(|value| !value.is_empty()) else {
        return Ok(());
    };

    let app_version = app_handle.package_info().version.to_string();
    if compare_semver(&app_version, min_app_version) == std::cmp::Ordering::Less {
        return Err(format!(
            "插件需要应用版本 >= {}，当前版本为 {}",
            min_app_version, app_version
        ));
    }

    Ok(())
}

fn read_plugin_package_manifest(manifest_path: &Path) -> Result<serde_json::Value, String> {
    fs::read_to_string(manifest_path)
        .map_err(|e| format!("读取插件清单失败: {} ({})", manifest_path.display(), e))
        .and_then(|content| {
            serde_json::from_str::<serde_json::Value>(&content)
                .map_err(|e| format!("解析插件清单失败: {} ({})", manifest_path.display(), e))
        })
}

fn system_time_to_rfc3339(value: SystemTime) -> String {
    let datetime: DateTime<Utc> = value.into();
    datetime.to_rfc3339()
}

fn read_plugin_install_metadata(package_path: &Path) -> Option<PluginInstallMetadata> {
    let metadata_path = package_path.join(PLUGIN_INSTALL_METADATA_FILE);
    let content = fs::read_to_string(metadata_path).ok()?;
    serde_json::from_str::<PluginInstallMetadata>(&content).ok()
}

fn write_plugin_install_metadata(package_path: &Path) -> Result<(), String> {
    let metadata = PluginInstallMetadata {
        installed_at: system_time_to_rfc3339(SystemTime::now()),
    };
    let content = serde_json::to_string_pretty(&metadata)
        .map_err(|e| format!("序列化插件安装元数据失败: {}", e))?;
    fs::write(package_path.join(PLUGIN_INSTALL_METADATA_FILE), content)
        .map_err(|e| format!("写入插件安装元数据失败: {} ({})", package_path.display(), e))
}

fn plugin_installed_at(package_path: &Path) -> Option<String> {
    read_plugin_install_metadata(package_path)
        .map(|metadata| metadata.installed_at)
        .or_else(|| {
            fs::metadata(package_path)
                .ok()
                .and_then(|metadata| metadata.created().or_else(|_| metadata.modified()).ok())
                .map(system_time_to_rfc3339)
        })
}

fn plugin_package_record(
    manifest: serde_json::Value,
    package_path: &Path,
) -> Result<LocalPluginPackage, String> {
    Ok(LocalPluginPackage {
        manifest,
        package_path: path_to_display_string(&normalized_existing_path(package_path)),
        installed_at: plugin_installed_at(package_path),
    })
}

fn manifest_i18n_fallback(manifest: &serde_json::Value, key: &str) -> Option<String> {
    manifest
        .get(key)
        .and_then(|value| value.get("fallback"))
        .and_then(|value| value.as_str())
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .map(ToOwned::to_owned)
}

fn manifest_plugin_name(manifest: &serde_json::Value) -> String {
    manifest_i18n_fallback(manifest, "name").unwrap_or_else(|| {
        manifest
            .get("id")
            .and_then(|value| value.as_str())
            .unwrap_or("Plugin")
            .to_string()
    })
}

fn manifest_string_array(manifest: &serde_json::Value, key: &str) -> Vec<String> {
    manifest
        .get("capabilities")
        .and_then(|value| value.get(key))
        .and_then(|value| value.as_array())
        .map(|items| {
            items
                .iter()
                .filter_map(|value| value.as_str())
                .map(str::trim)
                .filter(|value| !value.is_empty())
                .map(ToOwned::to_owned)
                .collect()
        })
        .unwrap_or_default()
}

fn installed_plugin_packages_internal(
    app_handle: &AppHandle,
) -> Result<Vec<LocalPluginPackage>, String> {
    let plugins_dir = plugin_packages_dir(app_handle)?;

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

    manifests.sort_by(compare_plugin_package_install_time);

    Ok(manifests)
}

pub fn installed_plugin_capability_actions(
    app_handle: &AppHandle,
    capability_key: &str,
    enabled_only: bool,
) -> Vec<PluginCapabilityAction> {
    installed_plugin_packages_internal(app_handle)
        .unwrap_or_default()
        .into_iter()
        .filter_map(|plugin_package| {
            let plugin_id = plugin_package_manifest_id(&plugin_package).to_string();
            if plugin_id.is_empty() || (enabled_only && !is_plugin_enabled(app_handle, &plugin_id))
            {
                return None;
            }

            let plugin_name = manifest_plugin_name(&plugin_package.manifest);
            let actions = manifest_string_array(&plugin_package.manifest, capability_key)
                .into_iter()
                .map(|item_id| PluginCapabilityAction {
                    plugin_id: plugin_id.clone(),
                    item_id,
                    plugin_name: plugin_name.clone(),
                })
                .collect::<Vec<_>>();
            Some(actions)
        })
        .flatten()
        .collect()
}

pub fn enabled_plugin_for_capability_item(
    app_handle: &AppHandle,
    capability_key: &str,
    item_id: &str,
) -> Option<String> {
    installed_plugin_capability_actions(app_handle, capability_key, true)
        .into_iter()
        .find(|action| action.item_id == item_id)
        .map(|action| action.plugin_id)
}

pub fn plugin_window_route_path(
    app_handle: &AppHandle,
    window_label: &str,
) -> Result<(String, String), String> {
    let packages = installed_plugin_packages_internal(app_handle)?;
    for plugin_package in packages {
        let plugin_id = plugin_package_manifest_id(&plugin_package).to_string();
        if plugin_id.is_empty() || !is_plugin_enabled(app_handle, &plugin_id) {
            continue;
        }

        let windows = manifest_string_array(&plugin_package.manifest, "windows");
        let Some(index) = windows.iter().position(|label| label == window_label) else {
            continue;
        };

        let route_names = manifest_string_array(&plugin_package.manifest, "routeNames");
        let route_name = route_names.get(index).cloned();
        let route_path = route_name
            .map(|value| format!("/{}", pascal_or_snake_to_kebab(&value)))
            .unwrap_or_else(|| format!("/{}", window_label.replace('_', "-")));
        return Ok((plugin_id, route_path));
    }

    Err(format!("插件窗口 '{}' 未安装或未启用", window_label))
}

fn pascal_or_snake_to_kebab(value: &str) -> String {
    let mut output = String::new();
    let mut previous_is_separator = true;
    for (index, ch) in value.chars().enumerate() {
        if matches!(ch, '_' | '-' | ' ' | '.') {
            if !previous_is_separator {
                output.push('-');
            }
            previous_is_separator = true;
            continue;
        }

        if ch.is_ascii_uppercase() {
            if index > 0 && !previous_is_separator {
                output.push('-');
            }
            output.push(ch.to_ascii_lowercase());
        } else {
            output.push(ch);
        }
        previous_is_separator = false;
    }

    output.trim_matches('-').to_string()
}

fn plugin_index_contract(manifest: &serde_json::Value) -> (u64, u64, u64) {
    let storage = manifest.get("storage");
    (
        storage
            .and_then(|value| value.get("schemaVersion"))
            .and_then(|value| value.as_u64())
            .unwrap_or(1),
        storage
            .and_then(|value| value.get("indexSchemaVersion"))
            .and_then(|value| value.as_u64())
            .unwrap_or(1),
        storage
            .and_then(|value| value.get("extractorVersion"))
            .and_then(|value| value.as_u64())
            .unwrap_or(1),
    )
}

fn search_index_contract_changed(
    previous: Option<&serde_json::Value>,
    next: &serde_json::Value,
) -> bool {
    previous.is_some_and(|previous| {
        let (_, previous_index, previous_extractor) = plugin_index_contract(previous);
        let (_, next_index, next_extractor) = plugin_index_contract(next);
        previous_index != next_index || previous_extractor != next_extractor
    })
}

fn plugin_package_manifest_id(plugin_package: &LocalPluginPackage) -> &str {
    plugin_package
        .manifest
        .get("id")
        .and_then(|value| value.as_str())
        .unwrap_or_default()
}

fn compare_plugin_package_install_time(
    left: &LocalPluginPackage,
    right: &LocalPluginPackage,
) -> std::cmp::Ordering {
    right
        .installed_at
        .cmp(&left.installed_at)
        .then_with(|| plugin_package_manifest_id(left).cmp(plugin_package_manifest_id(right)))
}

fn local_plugin_package_dir(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    validate_plugin_package_id(plugin_id)?;
    let package_dir = plugin_packages_dir(app_handle)?.join(plugin_id);
    if !package_dir.join("plugin.json").is_file() {
        return Err(format!("本地插件 '{}' 未安装", plugin_id));
    }
    Ok(package_dir)
}

fn local_plugin_state_dir(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    validate_plugin_package_id(plugin_id)?;
    Ok(crate::json_config::get_data_dir(app_handle)
        .join("state")
        .join("plugins")
        .join(plugin_id))
}

fn local_plugin_cache_dir(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    validate_plugin_package_id(plugin_id)?;
    Ok(app_handle
        .path()
        .app_cache_dir()
        .map_err(|error| format!("获取插件缓存目录失败: {}", error))?
        .join(PLUGIN_CACHE_ROOT_DIR_NAME)
        .join(plugin_id))
}

pub fn ensure_plugin_cache_dir(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    let cache_dir = local_plugin_cache_dir(app_handle, plugin_id)?;
    fs::create_dir_all(&cache_dir)
        .map_err(|error| format!("创建插件缓存目录失败: {} ({})", cache_dir.display(), error))?;
    Ok(cache_dir)
}

fn local_plugin_data_path(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    let data_path = local_plugin_state_dir(app_handle, plugin_id)?.join("data.json");

    crate::json_config::recover_atomic_file(&data_path)?;
    Ok(data_path)
}

fn clear_local_plugin_state(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    let state_dir = local_plugin_state_dir(app_handle, plugin_id)?;
    if state_dir.exists() {
        fs::remove_dir_all(&state_dir).map_err(|error| {
            format!("删除插件状态目录失败: {} ({})", state_dir.display(), error)
        })?;
    }

    if plugin_id == "local-ai" {
        let legacy_config = crate::json_config::get_data_dir(app_handle)
            .join(".snippets-code")
            .join("local-ai.json");
        if legacy_config.is_file() {
            fs::remove_file(&legacy_config).map_err(|error| {
                format!(
                    "删除本地 AI 旧配置失败: {} ({})",
                    legacy_config.display(),
                    error
                )
            })?;
        }
    }

    Ok(())
}

fn clear_local_plugin_cache(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    let cache_dir = local_plugin_cache_dir(app_handle, plugin_id)?;
    if cache_dir.exists() {
        fs::remove_dir_all(&cache_dir).map_err(|error| {
            format!("删除插件缓存目录失败: {} ({})", cache_dir.display(), error)
        })?;
    }

    Ok(())
}

fn local_plugin_backend_spec(
    app_handle: &AppHandle,
    plugin_id: &str,
) -> Result<Option<(serde_json::Value, PathBuf, PathBuf)>, String> {
    let package_dir = local_plugin_package_dir(app_handle, plugin_id)?;
    let manifest_path = package_dir.join("plugin.json");
    let manifest = read_plugin_package_manifest(&manifest_path)?;
    let manifest_plugin_id = validate_local_plugin_manifest(&manifest)?;
    if manifest_plugin_id != plugin_id {
        return Err("插件清单 id 与安装目录不一致".to_string());
    }

    let Some(entry) = manifest.get("entry").and_then(|value| value.as_object()) else {
        return Ok(None);
    };

    let Some(backend) = entry.get("backend").and_then(|value| value.as_str()) else {
        return Ok(None);
    };
    validate_plugin_relative_path(backend)?;

    let backend_kind = entry
        .get("backendKind")
        .and_then(|value| value.as_str())
        .unwrap_or("native-host");
    if backend_kind != "native-host" {
        return Err(format!("当前应用暂不支持 {} 插件后端", backend_kind));
    }

    let backend_path = package_dir.join(backend);
    if !backend_path.is_file() {
        return Err(format!("插件后端入口不存在: {}", backend_path.display()));
    }
    let canonical_package_dir = package_dir
        .canonicalize()
        .map_err(|e| format!("解析插件目录失败: {}", e))?;
    let canonical_backend_path = backend_path
        .canonicalize()
        .map_err(|e| format!("解析插件后端入口失败: {}", e))?;
    if !canonical_backend_path.starts_with(&canonical_package_dir) {
        return Err("插件后端入口不能指向插件目录外部".to_string());
    }

    Ok(Some((
        manifest,
        canonical_package_dir,
        canonical_backend_path,
    )))
}

fn manifest_allows_backend_command(manifest: &serde_json::Value, command: &str) -> bool {
    manifest
        .get("permissions")
        .and_then(|value| value.as_array())
        .map(|permissions| {
            let command_permission = format!("backend:{}", command);
            permissions.iter().any(|permission| {
                permission.as_str() == Some("backend:*")
                    || permission.as_str() == Some(command_permission.as_str())
            })
        })
        .unwrap_or(false)
}

pub fn invoke_local_plugin_backend(
    app_handle: &AppHandle,
    plugin_id: &str,
    command: &str,
    payload: serde_json::Value,
) -> Result<serde_json::Value, String> {
    try_invoke_local_plugin_backend(app_handle, plugin_id, command, payload)?
        .ok_or_else(|| format!("插件 '{}' 未声明 native host 后端入口", plugin_id))
}

pub fn try_invoke_local_plugin_backend(
    app_handle: &AppHandle,
    plugin_id: &str,
    command: &str,
    payload: serde_json::Value,
) -> Result<Option<serde_json::Value>, String> {
    validate_plugin_package_id(plugin_id)?;
    validate_plugin_data_key(command)?;
    if !is_local_plugin_package_installed(app_handle, plugin_id) {
        return Ok(None);
    }
    require_plugin_enabled(app_handle, plugin_id)?;

    let Some((manifest, package_dir, backend_path)) =
        local_plugin_backend_spec(app_handle, plugin_id)?
    else {
        return Ok(None);
    };

    if !manifest_allows_backend_command(&manifest, command) {
        return Err(format!(
            "插件 '{}' 没有后端命令 {} 的权限",
            plugin_id, command
        ));
    }

    let request = serde_json::json!({
        "schemaVersion": 1,
        "pluginId": plugin_id,
        "command": command,
        "payload": payload,
    });

    let mut child = Command::new(&backend_path)
        .current_dir(&package_dir)
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .map_err(|e| format!("启动插件后端失败: {} ({})", backend_path.display(), e))?;

    if let Some(mut stdin) = child.stdin.take() {
        serde_json::to_writer(&mut stdin, &request)
            .map_err(|e| format!("写入插件后端请求失败: {}", e))?;
        stdin
            .write_all(b"\n")
            .map_err(|e| format!("写入插件后端请求失败: {}", e))?;
    }

    let output = child
        .wait_with_output()
        .map_err(|e| format!("读取插件后端响应失败: {}", e))?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
        return Err(if stderr.is_empty() {
            format!("插件后端执行失败: {}", output.status)
        } else {
            format!("插件后端执行失败: {}", stderr)
        });
    }

    let response: serde_json::Value = serde_json::from_slice(&output.stdout)
        .map_err(|e| format!("解析插件后端响应失败: {}", e))?;

    if response.get("ok").and_then(|value| value.as_bool()) == Some(false) {
        return Err(response
            .get("error")
            .and_then(|value| value.as_str())
            .unwrap_or("插件后端返回失败")
            .to_string());
    }

    Ok(Some(
        response
            .get("result")
            .cloned()
            .unwrap_or(serde_json::Value::Null),
    ))
}

fn read_local_plugin_data(
    app_handle: &AppHandle,
    plugin_id: &str,
) -> Result<serde_json::Map<String, serde_json::Value>, String> {
    let data_path = local_plugin_data_path(app_handle, plugin_id)?;
    if !data_path.exists() {
        return Ok(serde_json::Map::new());
    }

    let content = fs::read_to_string(&data_path)
        .map_err(|e| format!("读取插件数据失败: {} ({})", data_path.display(), e))?;
    serde_json::from_str::<serde_json::Map<String, serde_json::Value>>(&content)
        .map_err(|e| format!("解析插件数据失败: {} ({})", data_path.display(), e))
}

fn write_local_plugin_data(
    app_handle: &AppHandle,
    plugin_id: &str,
    data: &serde_json::Map<String, serde_json::Value>,
) -> Result<(), String> {
    let data_path = local_plugin_data_path(app_handle, plugin_id)?;
    if let Some(parent) = data_path.parent() {
        fs::create_dir_all(parent)
            .map_err(|e| format!("创建插件数据目录失败: {} ({})", parent.display(), e))?;
    }

    let content =
        serde_json::to_string_pretty(data).map_err(|e| format!("序列化插件数据失败: {}", e))?;
    crate::json_config::write_text_atomic(&data_path, &content)
        .map_err(|e| format!("写入插件数据失败: {} ({})", data_path.display(), e))
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

fn cleanup_stale_plugin_install_temp_dirs(app_handle: &AppHandle) {
    let Ok(plugins_dir) = plugin_packages_dir(app_handle) else {
        return;
    };
    let Ok(entries) = fs::read_dir(&plugins_dir) else {
        return;
    };

    for entry in entries.filter_map(Result::ok) {
        let path = entry.path();
        let is_stale_install_dir = entry
            .file_name()
            .to_str()
            .is_some_and(|name| name.starts_with(".install-tmp-"))
            && path.is_dir()
            && path.parent() == Some(plugins_dir.as_path())
            && entry
                .metadata()
                .and_then(|metadata| metadata.modified())
                .ok()
                .and_then(|modified| SystemTime::now().duration_since(modified).ok())
                .is_some_and(|age| age >= Duration::from_secs(60 * 60));
        if is_stale_install_dir {
            if let Err(error) = fs::remove_dir_all(&path) {
                warn!(
                    "[Plugin] 清理上次中断的安装临时目录失败: {} ({})",
                    path.display(),
                    error
                );
            }
        }
    }
}

fn extract_plugin_zip_package(zip_path: &Path, target_dir: &Path) -> Result<(), String> {
    let file = File::open(zip_path)
        .map_err(|e| format!("打开插件压缩包失败: {} ({})", zip_path.display(), e))?;
    let mut archive = ZipArchive::new(file)
        .map_err(|e| format!("读取插件压缩包失败: {} ({})", zip_path.display(), e))?;
    fs::create_dir_all(target_dir)
        .map_err(|e| format!("创建插件解压目录失败: {} ({})", target_dir.display(), e))?;
    let canonical_target_dir = target_dir
        .canonicalize()
        .map_err(|e| format!("解析插件解压目录失败: {} ({})", target_dir.display(), e))?;

    for index in 0..archive.len() {
        let mut file = archive
            .by_index(index)
            .map_err(|e| format!("读取插件压缩包条目失败: {}", e))?;
        let enclosed_name = file
            .enclosed_name()
            .ok_or_else(|| format!("插件压缩包包含不安全路径: {}", file.name()))?;
        let output_path = target_dir.join(enclosed_name);
        let canonical_output_path = output_path
            .parent()
            .and_then(|parent| parent.canonicalize().ok())
            .unwrap_or_else(|| canonical_target_dir.clone());
        if !canonical_output_path.starts_with(&canonical_target_dir) {
            return Err(format!("插件压缩包包含不安全路径: {}", file.name()));
        }

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

fn find_plugin_archive_subdir(
    extracted_dir: &Path,
    package_subdir: &str,
) -> Result<PathBuf, String> {
    validate_plugin_relative_path(package_subdir)?;

    let mut roots = vec![extracted_dir.to_path_buf()];
    let entries = fs::read_dir(extracted_dir)
        .map_err(|e| format!("读取插件临时目录失败: {} ({})", extracted_dir.display(), e))?
        .filter_map(Result::ok)
        .filter(|entry| entry.path().is_dir())
        .map(|entry| entry.path())
        .collect::<Vec<_>>();

    if entries.len() == 1 {
        roots.push(entries[0].clone());
    }

    for root in roots {
        let candidate = root.join(package_subdir);
        if candidate.join("plugin.json").is_file() {
            return Ok(candidate);
        }
    }

    Err(format!("插件压缩包中未找到子目录: {}", package_subdir))
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

fn validate_plugin_remote_url(value: &str) -> Result<(), String> {
    let url = url::Url::parse(value).map_err(|e| format!("插件 URL 无效: {}", e))?;
    match url.scheme() {
        "https" => Ok(()),
        "http" if matches!(url.host_str(), Some("localhost" | "127.0.0.1" | "::1")) => Ok(()),
        _ => Err("插件 URL 仅允许 https，或本地开发 http://localhost".to_string()),
    }
}

fn normalize_plugin_package_sha256(value: &str) -> Result<String, String> {
    let sha256 = value.trim().to_ascii_lowercase();
    if sha256.len() == 64 && sha256.chars().all(|ch| ch.is_ascii_hexdigit()) {
        Ok(sha256)
    } else {
        Err("插件包 SHA-256 必须是 64 位十六进制字符串".to_string())
    }
}

fn file_sha256(path: &Path) -> Result<String, String> {
    let mut file = File::open(path)
        .map_err(|error| format!("打开插件包失败: {} ({})", path.display(), error))?;
    let mut hasher = Sha256::new();
    let mut buffer = [0_u8; 64 * 1024];

    loop {
        let read = file
            .read(&mut buffer)
            .map_err(|error| format!("读取插件包失败: {} ({})", path.display(), error))?;
        if read == 0 {
            break;
        }
        hasher.update(&buffer[..read]);
    }

    Ok(hex::encode(hasher.finalize()))
}

fn verify_plugin_package_sha256(
    package_path: &Path,
    expected_sha256: Option<&str>,
) -> Result<(), String> {
    let Some(expected_sha256) = expected_sha256 else {
        return Ok(());
    };
    let expected_sha256 = normalize_plugin_package_sha256(expected_sha256)?;
    let actual_sha256 = file_sha256(package_path)?;
    if actual_sha256 != expected_sha256 {
        return Err(format!(
            "插件包 SHA-256 校验失败: expected {}, actual {}",
            expected_sha256, actual_sha256
        ));
    }

    Ok(())
}

fn reqwest_error_details(error: &reqwest::Error) -> String {
    let mut details = error.to_string();
    let mut source = error.source();
    while let Some(cause) = source {
        details.push_str(": ");
        details.push_str(&cause.to_string());
        source = cause.source();
    }
    details
}

fn github_codeload_fallback_url(package_url: &str) -> Option<String> {
    let url = url::Url::parse(package_url).ok()?;
    if url.scheme() != "https" || url.host_str() != Some("github.com") {
        return None;
    }

    let segments: Vec<_> = url.path_segments()?.collect();
    if segments.len() < 6 || segments[2] != "archive" || segments[3] != "refs" {
        return None;
    }

    let ref_kind = segments[4];
    if ref_kind != "tags" && ref_kind != "heads" {
        return None;
    }

    let mut ref_name = segments[5..].join("/");
    if let Some(stripped) = ref_name.strip_suffix(".zip") {
        ref_name = stripped.to_string();
    }
    if ref_name.is_empty() {
        return None;
    }

    Some(format!(
        "https://codeload.github.com/{}/{}/zip/refs/{}/{}",
        segments[0], segments[1], ref_kind, ref_name
    ))
}

fn plugin_package_download_urls(package_url: &str) -> Vec<String> {
    let mut urls = Vec::new();
    if let Some(fallback_url) = github_codeload_fallback_url(package_url) {
        urls.push(fallback_url);
    }
    if !urls.iter().any(|url| url == package_url) {
        urls.push(package_url.to_string());
    }
    urls
}

fn plugin_install_timestamp() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64
}

fn is_terminal_plugin_install_phase(phase: &str) -> bool {
    matches!(phase, "installed" | "failed")
}

fn plugin_install_progress_percent(
    phase: &str,
    downloaded_bytes: u64,
    total_bytes: Option<u64>,
) -> Option<f64> {
    total_bytes.filter(|total| *total > 0).map(|total| {
        let percent = ((downloaded_bytes as f64 / total as f64) * 100.0).clamp(0.0, 100.0);
        if phase == "downloading" {
            percent.min(99.0)
        } else {
            percent
        }
    })
}

fn plugin_download_total_bytes(
    response_content_length: Option<u64>,
    expected_size_bytes: Option<u64>,
) -> Option<u64> {
    response_content_length
        .filter(|size| *size > 0)
        .or_else(|| expected_size_bytes.filter(|size| *size > 0))
}

fn publish_plugin_install_progress(
    app_handle: &AppHandle,
    payload: PluginInstallProgressPayload,
    previous_phase: Option<String>,
) {
    let phase_changed = previous_phase.as_deref() != Some(payload.phase.as_str());
    if phase_changed {
        debug!(
            "[Plugin] install phase plugin={:?} phase={} url={} downloaded={} total={:?} progress={:?}",
            payload.plugin_id,
            payload.phase,
            payload.package_url,
            payload.downloaded_bytes,
            payload.total_bytes,
            payload.progress
        );
    }
    let _ = app_handle.emit("plugin-install-progress", payload);
    if phase_changed {
        crate::tray::update_plugin_install_status(app_handle);
    }
}

fn begin_plugin_install(app_handle: &AppHandle, package_url: &str, plugin_id: Option<String>) {
    let payload = PluginInstallProgressPayload {
        package_url: package_url.to_string(),
        plugin_id,
        phase: "queued".to_string(),
        downloaded_bytes: 0,
        total_bytes: None,
        progress: None,
        error: None,
        updated_at: plugin_install_timestamp(),
    };
    let previous_phase = PLUGIN_INSTALL_TASKS
        .lock()
        .ok()
        .and_then(|mut tasks| tasks.insert(package_url.to_string(), payload.clone()))
        .map(|previous| previous.phase);
    publish_plugin_install_progress(app_handle, payload, previous_phase);
}

fn emit_plugin_install_progress(
    app_handle: &AppHandle,
    package_url: &str,
    phase: &str,
    downloaded_bytes: u64,
    total_bytes: Option<u64>,
) {
    let (payload, previous_phase) = {
        let mut tasks = match PLUGIN_INSTALL_TASKS.lock() {
            Ok(tasks) => tasks,
            Err(error) => {
                warn!("[Plugin] install progress state lock failed: {}", error);
                return;
            }
        };
        let previous = tasks.get(package_url).cloned();
        let retained_downloaded = if phase == "downloading" {
            downloaded_bytes
        } else {
            downloaded_bytes.max(
                previous
                    .as_ref()
                    .map(|task| task.downloaded_bytes)
                    .unwrap_or_default(),
            )
        };
        let retained_total =
            total_bytes.or_else(|| previous.as_ref().and_then(|task| task.total_bytes));
        let progress = plugin_install_progress_percent(phase, retained_downloaded, retained_total);
        let payload = PluginInstallProgressPayload {
            package_url: package_url.to_string(),
            plugin_id: previous.as_ref().and_then(|task| task.plugin_id.clone()),
            phase: phase.to_string(),
            downloaded_bytes: retained_downloaded,
            total_bytes: retained_total,
            progress,
            error: None,
            updated_at: plugin_install_timestamp(),
        };
        let previous_phase = previous.map(|task| task.phase);
        tasks.insert(package_url.to_string(), payload.clone());
        (payload, previous_phase)
    };
    publish_plugin_install_progress(app_handle, payload, previous_phase);
}

fn emit_plugin_install_failure(app_handle: &AppHandle, package_url: &str, error: &str) {
    let (payload, previous_phase) = {
        let mut tasks = match PLUGIN_INSTALL_TASKS.lock() {
            Ok(tasks) => tasks,
            Err(lock_error) => {
                warn!("[Plugin] install failure state lock failed: {}", lock_error);
                return;
            }
        };
        let previous = tasks.get(package_url).cloned();
        let payload = PluginInstallProgressPayload {
            package_url: package_url.to_string(),
            plugin_id: previous.as_ref().and_then(|task| task.plugin_id.clone()),
            phase: "failed".to_string(),
            downloaded_bytes: previous
                .as_ref()
                .map(|task| task.downloaded_bytes)
                .unwrap_or_default(),
            total_bytes: previous.as_ref().and_then(|task| task.total_bytes),
            progress: previous.as_ref().and_then(|task| task.progress),
            error: Some(error.to_string()),
            updated_at: plugin_install_timestamp(),
        };
        let previous_phase = previous.map(|task| task.phase);
        tasks.insert(package_url.to_string(), payload.clone());
        (payload, previous_phase)
    };
    publish_plugin_install_progress(app_handle, payload, previous_phase);
}

#[command]
pub fn get_plugin_install_tasks() -> Vec<PluginInstallProgressPayload> {
    let mut tasks = PLUGIN_INSTALL_TASKS
        .lock()
        .map(|tasks| tasks.values().cloned().collect::<Vec<_>>())
        .unwrap_or_default();
    tasks.sort_by_key(|task| task.updated_at);
    tasks
}

pub fn active_plugin_install_status() -> Option<(usize, String)> {
    let tasks = PLUGIN_INSTALL_TASKS.lock().ok()?;
    let mut active = tasks
        .values()
        .filter(|task| !is_terminal_plugin_install_phase(&task.phase))
        .collect::<Vec<_>>();
    active.sort_by_key(|task| task.updated_at);
    active.last().map(|task| (active.len(), task.phase.clone()))
}

async fn download_plugin_url_to_temp(
    app_handle: &AppHandle,
    package_url: &str,
    expected_size_bytes: Option<u64>,
    expected_sha256: Option<String>,
    mirror_urls: &[String],
) -> Result<PathBuf, String> {
    validate_plugin_remote_url(package_url)?;
    let mut download_urls = plugin_package_download_urls(package_url);
    for mirror_url in mirror_urls {
        if validate_plugin_remote_url(mirror_url).is_ok() && !download_urls.contains(mirror_url) {
            download_urls.push(mirror_url.clone());
        }
    }
    for download_url in &download_urls {
        validate_plugin_remote_url(download_url)?;
    }

    let expected_sha256 = expected_sha256
        .as_deref()
        .map(normalize_plugin_package_sha256)
        .transpose()?;
    let temp_dir = create_plugin_install_temp_dir(app_handle)?;
    let temp_file = temp_dir.join("package.zip");
    let expected_size_bytes = expected_size_bytes.filter(|size| *size > 0);
    let result = async {
        debug!("[Plugin] downloading remote package {}", package_url);
        emit_plugin_install_progress(
            app_handle,
            package_url,
            "downloading",
            0,
            expected_size_bytes,
        );

        let client = reqwest::Client::builder()
            .user_agent("snippets-code-plugin-installer")
            .connect_timeout(Duration::from_secs(20))
            .redirect(reqwest::redirect::Policy::limited(10))
            .build()
            .map_err(|e| format!("创建插件下载客户端失败: {}", e))?;
        let mut last_error: Option<String> = None;
        const MAX_DOWNLOAD_ATTEMPTS: usize = 3;

        for download_url in &download_urls {
            for attempt in 1..=MAX_DOWNLOAD_ATTEMPTS {
                if download_url != package_url || attempt > 1 {
                    debug!(
                        "[Plugin] retrying remote package download url={} attempt={}/{}",
                        download_url, attempt, MAX_DOWNLOAD_ATTEMPTS
                    );
                    emit_plugin_install_progress(
                        app_handle,
                        package_url,
                        "downloading",
                        0,
                        expected_size_bytes,
                    );
                }

                let response = match tokio::time::timeout(
                    Duration::from_secs(60),
                    client.get(download_url).send(),
                )
                .await
                {
                    Ok(Ok(response)) => response,
                    Ok(Err(error)) => {
                        let message = format!(
                            "请求插件包失败: {} ({})",
                            download_url,
                            reqwest_error_details(&error)
                        );
                        warn!(
                            "[Plugin] download request failed url={} attempt={}/{} error={}",
                            download_url, attempt, MAX_DOWNLOAD_ATTEMPTS, message
                        );
                        last_error = Some(message);
                        tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                        continue;
                    }
                    Err(_) => {
                        let message = format!(
                            "请求插件包超时: {} (60 秒内未收到响应)",
                            download_url
                        );
                        warn!(
                            "[Plugin] download response timed out url={} attempt={}/{}",
                            download_url, attempt, MAX_DOWNLOAD_ATTEMPTS
                        );
                        last_error = Some(message);
                        tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                        continue;
                    }
                };

                if !response.status().is_success() {
                    let message = format!(
                        "下载插件失败: HTTP {} ({})",
                        response.status(),
                        download_url
                    );
                    warn!(
                        "[Plugin] download response failed url={} attempt={}/{} status={}",
                        download_url,
                        attempt,
                        MAX_DOWNLOAD_ATTEMPTS,
                        response.status()
                    );
                    last_error = Some(message);
                    tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                    continue;
                }

                let total_bytes =
                    plugin_download_total_bytes(response.content_length(), expected_size_bytes);
                emit_plugin_install_progress(
                    app_handle,
                    package_url,
                    "downloading",
                    0,
                    total_bytes,
                );

                let content_type = response
                    .headers()
                    .get(reqwest::header::CONTENT_TYPE)
                    .and_then(|value| value.to_str().ok())
                    .unwrap_or_default()
                    .to_ascii_lowercase();
                if !content_type.is_empty()
                    && !content_type.contains("zip")
                    && !content_type.contains("octet-stream")
                {
                    warn!(
                        "[Plugin] remote package content-type looks unusual: {}",
                        content_type
                    );
                }

                let mut file = File::create(&temp_file).map_err(|e| {
                    format!("创建插件下载临时文件失败: {} ({})", temp_file.display(), e)
                })?;
                let mut downloaded_bytes = 0_u64;
                let mut last_emitted_bytes = 0_u64;
                let mut last_emitted_at = Instant::now();
                let mut stream = response.bytes_stream();
                let mut stream_failed = false;

                loop {
                    let next_chunk = match tokio::time::timeout(
                        Duration::from_secs(90),
                        stream.next(),
                    )
                    .await
                    {
                        Ok(next_chunk) => next_chunk,
                        Err(_) => {
                            let message = format!(
                                "读取插件下载内容超时: {} (90 秒内未收到新数据)",
                                download_url
                            );
                            warn!(
                                "[Plugin] download stream stalled url={} attempt={}/{} downloaded={} error={}",
                                download_url,
                                attempt,
                                MAX_DOWNLOAD_ATTEMPTS,
                                downloaded_bytes,
                                message
                            );
                            last_error = Some(message);
                            stream_failed = true;
                            break;
                        }
                    };
                    let Some(chunk) = next_chunk else {
                        break;
                    };
                    let chunk = match chunk {
                        Ok(chunk) => chunk,
                        Err(error) => {
                            let message = format!(
                                "读取插件下载内容失败: {} ({})",
                                download_url,
                                reqwest_error_details(&error)
                            );
                            warn!(
                                "[Plugin] download stream failed url={} attempt={}/{} error={}",
                                download_url, attempt, MAX_DOWNLOAD_ATTEMPTS, message
                            );
                            last_error = Some(message);
                            stream_failed = true;
                            break;
                        }
                    };
                    file.write_all(&chunk).map_err(|e| {
                        format!("写入插件下载临时文件失败: {} ({})", temp_file.display(), e)
                    })?;
                    downloaded_bytes += chunk.len() as u64;

                    let download_complete = total_bytes
                        .map(|total| downloaded_bytes >= total)
                        .unwrap_or(false);
                    if download_complete
                        || (downloaded_bytes.saturating_sub(last_emitted_bytes) >= 512 * 1024
                            && last_emitted_at.elapsed() >= Duration::from_millis(250))
                    {
                        last_emitted_bytes = downloaded_bytes;
                        last_emitted_at = Instant::now();
                        emit_plugin_install_progress(
                            app_handle,
                            package_url,
                            "downloading",
                            downloaded_bytes,
                            total_bytes,
                        );
                    }
                }

                if stream_failed {
                    tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                    continue;
                }

                if downloaded_bytes == 0 {
                    last_error = Some(format!("插件下载内容为空 ({})", download_url));
                    tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                    continue;
                }

                file.flush().map_err(|e| {
                    format!("保存插件下载临时文件失败: {} ({})", temp_file.display(), e)
                })?;
                drop(file);

                if let Err(error) =
                    verify_plugin_package_sha256(&temp_file, expected_sha256.as_deref())
                {
                    let _ = fs::remove_file(&temp_file);
                    let message = format!("{} ({})", error, download_url);
                    warn!(
                        "[Plugin] download integrity check failed url={} attempt={}/{} error={}",
                        download_url, attempt, MAX_DOWNLOAD_ATTEMPTS, message
                    );
                    last_error = Some(message);
                    tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                    continue;
                }

                emit_plugin_install_progress(
                    app_handle,
                    package_url,
                    "downloaded",
                    downloaded_bytes,
                    Some(downloaded_bytes),
                );
                return Ok(temp_file.clone());
            }
        }

        Err(format!(
            "下载插件失败，已尝试 {} 个地址: {}",
            download_urls.len(),
            last_error.unwrap_or_else(|| "未知错误".to_string())
        ))
    }
    .await;

    match result {
        Ok(path) => Ok(path),
        Err(error) => {
            let _ = fs::remove_dir_all(temp_dir);
            Err(error)
        }
    }
}

#[command]
pub fn get_installed_plugin_manifests(
    app_handle: AppHandle,
) -> Result<Vec<LocalPluginPackage>, String> {
    installed_plugin_packages_internal(&app_handle)
}

#[command]
pub async fn fetch_plugin_marketplace(
    marketplace_url: String,
) -> Result<serde_json::Value, String> {
    validate_plugin_remote_url(&marketplace_url)?;
    let client = reqwest::Client::builder()
        .user_agent("snippets-code-plugin-marketplace")
        .build()
        .map_err(|e| format!("创建插件市场客户端失败: {}", e))?;
    let response = client
        .get(&marketplace_url)
        .header(reqwest::header::CACHE_CONTROL, "no-cache")
        .header(reqwest::header::PRAGMA, "no-cache")
        .send()
        .await
        .map_err(|e| format!("获取插件市场失败: {}", e))?;

    if !response.status().is_success() {
        return Err(format!("获取插件市场失败: HTTP {}", response.status()));
    }

    let marketplace = response
        .json::<serde_json::Value>()
        .await
        .map_err(|e| format!("解析插件市场失败: {}", e))?;

    if marketplace
        .get("schemaVersion")
        .and_then(|value| value.as_i64())
        != Some(1)
    {
        return Err("插件市场 schemaVersion 必须为 1".to_string());
    }

    Ok(marketplace)
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
        validate_plugin_app_compatibility(&app_handle, &manifest)?;

        let plugins_dir = plugin_packages_dir(&app_handle)?;
        fs::create_dir_all(&plugins_dir)
            .map_err(|e| format!("创建插件目录失败: {} ({})", plugins_dir.display(), e))?;

        let target_dir = plugins_dir.join(&plugin_id);
        let previous_manifest = target_dir
            .join("plugin.json")
            .is_file()
            .then(|| read_plugin_package_manifest(&target_dir.join("plugin.json")))
            .transpose()?;
        let rebuild_search_index =
            search_index_contract_changed(previous_manifest.as_ref(), &manifest);
        if target_dir.exists() {
            if !overwrite {
                return Err(format!("插件 '{}' 已安装", plugin_id));
            }
            // 停止旧运行时后再覆盖目录；此时不能广播插件状态，否则其他
            // WebView 会在旧目录仍存在时重新读回旧插件清单。
            apply_plugin_runtime_effects(&app_handle, &plugin_id, false);
            fs::remove_dir_all(&target_dir)
                .map_err(|e| format!("移除旧插件目录失败: {} ({})", target_dir.display(), e))?;
        }

        fs::create_dir_all(&target_dir)
            .map_err(|e| format!("创建插件目录失败: {} ({})", target_dir.display(), e))?;
        if let Err(error) = copy_plugin_package_dir(&source_dir, &target_dir) {
            let _ = fs::remove_dir_all(&target_dir);
            return Err(error);
        }
        write_plugin_install_metadata(&target_dir)?;

        info!("✅ [Plugin] installed local package {}", plugin_id);
        if is_plugin_enabled(&app_handle, &plugin_id) {
            if let Err(error) = crate::db::ensure_plugin_storage(&plugin_id) {
                warn!(
                    "[Plugin] ensure storage after installing {} failed: {}",
                    plugin_id, error
                );
            }
            if let Err(error) =
                crate::hotkey::refresh_plugin_shortcuts(&app_handle, &plugin_id, true)
            {
                warn!(
                    "[Plugin] refresh hotkeys after installing {} failed: {}",
                    plugin_id, error
                );
            }
            apply_enabled_plugin_runtime_change(&app_handle, &plugin_id);
            if rebuild_search_index {
                info!(
                    "[Plugin] {} index contract changed {:?} -> {:?}; rebuilding affected source",
                    plugin_id,
                    previous_manifest.as_ref().map(plugin_index_contract),
                    plugin_index_contract(&manifest)
                );
                refresh_search_plugin_index_feedback(
                    app_handle.clone(),
                    plugin_id.to_string(),
                    true,
                );
            }
        }
        refresh_plugin_shell_integration(
            &app_handle,
            &plugin_id,
            is_plugin_enabled(&app_handle, &plugin_id),
        );
        plugin_package_record(manifest, &target_dir)
    })();

    if let Some(temp_dir) = temp_dir {
        let _ = fs::remove_dir_all(temp_dir);
    }

    result
}

fn install_downloaded_plugin_package(
    app_handle: AppHandle,
    package_url: String,
    downloaded_package: PathBuf,
    package_subdir: Option<String>,
    overwrite: bool,
) -> Result<LocalPluginPackage, String> {
    let temp_dir = downloaded_package.parent().map(Path::to_path_buf);
    emit_plugin_install_progress(&app_handle, &package_url, "extracting", 0, None);

    let result = (|| {
        if let Some(package_subdir) = package_subdir.filter(|value| !value.trim().is_empty()) {
            let extract_dir = temp_dir
                .as_ref()
                .ok_or("插件下载临时目录无效".to_string())?
                .join("extract");
            fs::create_dir_all(&extract_dir)
                .map_err(|e| format!("创建插件解压目录失败: {} ({})", extract_dir.display(), e))?;
            extract_plugin_zip_package(&downloaded_package, &extract_dir)
                .and_then(|_| find_plugin_archive_subdir(&extract_dir, package_subdir.trim()))
                .and_then(|source_dir| {
                    emit_plugin_install_progress(&app_handle, &package_url, "installing", 0, None);
                    install_local_plugin_package(
                        app_handle.clone(),
                        source_dir.to_string_lossy().to_string(),
                        overwrite,
                    )
                })
        } else {
            install_local_plugin_package(
                app_handle.clone(),
                downloaded_package.to_string_lossy().to_string(),
                overwrite,
            )
        }
    })();

    if let Some(temp_dir) = temp_dir {
        let _ = fs::remove_dir_all(temp_dir);
    }
    result
}

#[command]
pub async fn install_plugin_package_from_url(
    app_handle: AppHandle,
    request: InstallPluginPackageFromUrlRequest,
) -> Result<LocalPluginPackage, String> {
    let InstallPluginPackageFromUrlRequest {
        package_url,
        package_subdir,
        expected_size_bytes,
        expected_sha256,
        overwrite,
        mirror_urls,
        plugin_id,
    } = request;

    begin_plugin_install(&app_handle, &package_url, plugin_id);
    let _install_guard = PLUGIN_INSTALL_LOCK.lock().await;
    cleanup_stale_plugin_install_temp_dirs(&app_handle);

    let mirror_urls = mirror_urls.unwrap_or_default();
    let result = async {
        let downloaded_package = download_plugin_url_to_temp(
            &app_handle,
            &package_url,
            expected_size_bytes,
            expected_sha256,
            &mirror_urls,
        )
        .await?;
        let install_app_handle = app_handle.clone();
        let install_package_url = package_url.clone();
        tokio::task::spawn_blocking(move || {
            install_downloaded_plugin_package(
                install_app_handle,
                install_package_url,
                downloaded_package,
                package_subdir,
                overwrite,
            )
        })
        .await
        .map_err(|error| format!("插件安装后台任务失败: {}", error))?
    }
    .await;

    match &result {
        Ok(_) => emit_plugin_install_progress(&app_handle, &package_url, "installed", 0, None),
        Err(error) => emit_plugin_install_failure(&app_handle, &package_url, error),
    }
    result
}

#[command]
pub fn uninstall_local_plugin_package(
    app_handle: AppHandle,
    plugin_id: String,
    delete_data: Option<bool>,
) -> Result<(), String> {
    validate_plugin_package_id(&plugin_id)?;
    let delete_data = delete_data.unwrap_or(false);

    let plugins_dir = plugin_packages_dir(&app_handle)?;
    let target_dir = plugins_dir.join(&plugin_id);
    if !target_dir.exists() {
        return Err(format!("本地插件 '{}' 未安装", plugin_id));
    }
    // 默认卸载只移除可重新安装的包；用户数据保留在独立状态目录。

    if let Err(error) = crate::hotkey::refresh_plugin_shortcuts(&app_handle, &plugin_id, false) {
        warn!(
            "[Plugin] refresh hotkeys before uninstalling {} failed: {}",
            plugin_id, error
        );
    }
    // 先停止运行时，等目录和持久化状态都清理完成后再广播一次最终状态。
    apply_plugin_runtime_effects(&app_handle, &plugin_id, false);

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

    let data_cleanup_result = if delete_data {
        clear_plugin_owned_data(&app_handle, &plugin_id).map_err(|error| {
            format!(
                "插件包已卸载，但删除插件 '{}' 的相关数据失败: {}",
                plugin_id, error
            )
        })
    } else {
        Ok(())
    };

    info!(
        "✅ [Plugin] uninstalled local package {} (user data {})",
        plugin_id,
        if delete_data { "deleted" } else { "preserved" }
    );
    refresh_plugin_shell_integration(&app_handle, &plugin_id, false);
    data_cleanup_result
}

#[command]
pub fn get_local_plugin_data(
    app_handle: AppHandle,
    plugin_id: String,
    key: String,
) -> Result<Option<serde_json::Value>, String> {
    validate_plugin_data_key(&key)?;
    let data = read_local_plugin_data(&app_handle, &plugin_id)?;
    Ok(data.get(&key).cloned())
}

#[command]
pub fn set_local_plugin_data(
    app_handle: AppHandle,
    plugin_id: String,
    key: String,
    value: serde_json::Value,
) -> Result<(), String> {
    validate_plugin_data_key(&key)?;
    let mut data = read_local_plugin_data(&app_handle, &plugin_id)?;
    data.insert(key, value);
    write_local_plugin_data(&app_handle, &plugin_id, &data)
}

#[command]
pub fn delete_local_plugin_data(
    app_handle: AppHandle,
    plugin_id: String,
    key: String,
) -> Result<(), String> {
    validate_plugin_data_key(&key)?;
    let mut data = read_local_plugin_data(&app_handle, &plugin_id)?;
    data.remove(&key);
    write_local_plugin_data(&app_handle, &plugin_id, &data)
}

#[command]
pub fn get_local_plugin_resource_path(
    app_handle: AppHandle,
    plugin_id: String,
    relative_path: String,
) -> Result<Option<String>, String> {
    validate_plugin_relative_path(&relative_path)?;
    let package_dir = match local_plugin_package_dir(&app_handle, &plugin_id) {
        Ok(package_dir) => package_dir,
        Err(_) => return Ok(None),
    };
    let resource_path = package_dir.join(relative_path);
    if !resource_path.is_file() {
        return Ok(None);
    }

    Ok(Some(path_to_display_string(&normalized_existing_path(
        &resource_path,
    ))))
}

async fn download_translation_runtime_file(
    client: &reqwest::Client,
    file_name: &str,
    target_path: &Path,
) -> Result<(), String> {
    let urls = [
        format!(
            "https://cdn.jsdelivr.net/npm/@xenova/transformers@{}/dist/{}",
            TRANSLATION_OFFLINE_RUNTIME_VERSION, file_name
        ),
        format!(
            "https://unpkg.com/@xenova/transformers@{}/dist/{}",
            TRANSLATION_OFFLINE_RUNTIME_VERSION, file_name
        ),
    ];
    let temp_path = target_path.with_file_name(format!("{}.download", file_name));
    let mut last_error: Option<String> = None;

    for url in urls {
        info!(
            "[Plugin] downloading translation offline runtime file {}",
            url
        );
        let response = match client.get(&url).send().await {
            Ok(response) => response,
            Err(error) => {
                last_error = Some(format!("请求运行时资源失败: {} ({})", url, error));
                continue;
            }
        };

        if !response.status().is_success() {
            last_error = Some(format!(
                "下载运行时资源失败: HTTP {} ({})",
                response.status(),
                url
            ));
            continue;
        }

        let mut file = File::create(&temp_path).map_err(|e| {
            format!(
                "创建运行时资源临时文件失败: {} ({})",
                temp_path.display(),
                e
            )
        })?;
        let mut downloaded_bytes = 0_u64;
        let mut stream = response.bytes_stream();
        let mut stream_error: Option<String> = None;

        while let Some(chunk) = stream.next().await {
            match chunk {
                Ok(chunk) => {
                    downloaded_bytes += chunk.len() as u64;
                    file.write_all(&chunk).map_err(|e| {
                        format!("写入运行时资源文件失败: {} ({})", temp_path.display(), e)
                    })?;
                }
                Err(error) => {
                    stream_error = Some(format!("读取运行时资源失败: {} ({})", url, error));
                    break;
                }
            }
        }

        if let Some(error) = stream_error {
            let _ = fs::remove_file(&temp_path);
            last_error = Some(error);
            continue;
        }

        if downloaded_bytes == 0 {
            let _ = fs::remove_file(&temp_path);
            last_error = Some(format!("运行时资源内容为空: {}", url));
            continue;
        }

        fs::rename(&temp_path, target_path)
            .map_err(|e| format!("保存运行时资源文件失败: {} ({})", target_path.display(), e))?;
        info!(
            "✅ [Plugin] installed translation offline runtime file {} bytes={}",
            file_name, downloaded_bytes
        );
        return Ok(());
    }

    Err(last_error.unwrap_or_else(|| format!("下载运行时资源失败: {}", file_name)))
}

fn translation_runtime_wasm_fallback_target_dirs() -> Vec<PathBuf> {
    let mut target_dirs = Vec::new();

    if let Ok(exe_path) = std::env::current_exe() {
        if let Some(exe_dir) = exe_path.parent() {
            target_dirs.push(exe_dir.to_path_buf());
        }
    }

    if let Ok(current_dir) = std::env::current_dir() {
        target_dirs.push(current_dir);
    }

    target_dirs.sort();
    target_dirs.dedup();
    target_dirs
}

fn sync_translation_runtime_wasm_fallbacks(runtime_dir: &Path) {
    sync_translation_runtime_wasm_fallbacks_to_dirs(
        runtime_dir,
        translation_runtime_wasm_fallback_target_dirs(),
    );
}

fn sync_translation_runtime_wasm_fallbacks_to_dirs<I>(runtime_dir: &Path, target_dirs: I)
where
    I: IntoIterator<Item = PathBuf>,
{
    for target_dir in target_dirs {
        if !target_dir.is_dir() {
            warn!(
                "[Plugin] skip translation offline wasm fallback target because it is not a directory: {}",
                target_dir.display()
            );
            continue;
        }

        for file_name in TRANSLATION_OFFLINE_RUNTIME_FILES {
            if !file_name.ends_with(".wasm") {
                continue;
            }

            let source_path = runtime_dir.join(file_name);
            if !source_path.is_file() {
                continue;
            }

            let target_path = target_dir.join(file_name);
            if target_path == source_path {
                continue;
            }

            let needs_copy = fs::metadata(&target_path)
                .and_then(|target| {
                    fs::metadata(&source_path)
                        .map(|source| target.len() == 0 || target.len() != source.len())
                })
                .unwrap_or(true);

            if needs_copy {
                if let Err(error) = fs::copy(&source_path, &target_path) {
                    warn!(
                        "[Plugin] skip translation offline wasm fallback copy {} -> {}: {}",
                        source_path.display(),
                        target_path.display(),
                        error
                    );
                    continue;
                }
                info!(
                    "[Plugin] synced translation offline wasm fallback {} -> {}",
                    file_name,
                    target_path.display()
                );
            }
        }
    }
}

#[command]
pub async fn install_translation_offline_runtime_resources(
    app_handle: AppHandle,
) -> Result<(), String> {
    let package_dir = local_plugin_package_dir(&app_handle, TRANSLATION_OFFLINE_RUNTIME_PLUGIN_ID)
        .map_err(|_| "请先安装 translation-offline-runtime 插件资源包".to_string())?;
    let manifest_path = package_dir.join("plugin.json");
    if !manifest_path.is_file() {
        return Err("translation-offline-runtime 插件资源包缺少 plugin.json".to_string());
    }

    let runtime_dir = package_dir.join("resources").join("transformers");
    fs::create_dir_all(&runtime_dir).map_err(|e| {
        format!(
            "创建离线翻译运行时资源目录失败: {} ({})",
            runtime_dir.display(),
            e
        )
    })?;

    let client = reqwest::Client::builder()
        .user_agent("snippets-code-translation-runtime-installer")
        .connect_timeout(Duration::from_secs(20))
        .timeout(Duration::from_secs(240))
        .redirect(reqwest::redirect::Policy::limited(10))
        .build()
        .map_err(|e| format!("创建运行时资源下载客户端失败: {}", e))?;

    for file_name in TRANSLATION_OFFLINE_RUNTIME_FILES {
        let target_path = runtime_dir.join(file_name);
        if target_path.is_file()
            && fs::metadata(&target_path)
                .map(|metadata| metadata.len() > 0)
                .unwrap_or(false)
        {
            continue;
        }
        download_translation_runtime_file(&client, file_name, &target_path).await?;
    }

    let missing_runtime_files = TRANSLATION_OFFLINE_RUNTIME_FILES
        .iter()
        .filter(|file_name| {
            let path = runtime_dir.join(file_name);
            !path.is_file()
                || fs::metadata(&path)
                    .map(|metadata| metadata.len() == 0)
                    .unwrap_or(true)
        })
        .copied()
        .collect::<Vec<_>>();
    if !missing_runtime_files.is_empty() {
        return Err(format!(
            "离线翻译运行时安装不完整，仍缺少资源文件: {}",
            missing_runtime_files.join(", ")
        ));
    }

    sync_translation_runtime_wasm_fallbacks(&runtime_dir);

    Ok(())
}

#[command]
pub fn invoke_plugin_backend(
    app_handle: AppHandle,
    plugin_id: String,
    command: String,
    payload: serde_json::Value,
) -> Result<serde_json::Value, String> {
    invoke_local_plugin_backend(&app_handle, &plugin_id, &command, payload)
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
        let effective_enabled = is_plugin_enabled(&app_handle, &plugin_id);
        info!(
            "✅ [Plugin] {} enabled={} effective={}",
            plugin_id, enabled, effective_enabled
        );
        if effective_enabled {
            if let Err(e) = crate::db::ensure_plugin_storage(&plugin_id) {
                warn!("[Plugin] ensure storage for {} failed: {}", plugin_id, e);
            }
        }
        apply_plugin_runtime_change(&app_handle, &plugin_id, effective_enabled);
        return Ok(());
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let mut manager = AppConfigManager::new(&workspace_root)?;
    manager.set_plugin_enabled(plugin_id.clone(), enabled);
    manager.save()?;
    let effective_enabled = is_plugin_enabled(&app_handle, &plugin_id);
    info!(
        "✅ [Plugin] {} enabled={} effective={}",
        plugin_id, enabled, effective_enabled
    );
    if effective_enabled {
        if let Err(e) = crate::db::ensure_plugin_storage(&plugin_id) {
            warn!("[Plugin] ensure storage for {} failed: {}", plugin_id, e);
        }
    }
    apply_plugin_runtime_change(&app_handle, &plugin_id, effective_enabled);
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::{
        default_plugin_packages_dir_for_data_dir, normalize_plugin_package_sha256,
        plugin_download_total_bytes, plugin_install_progress_percent,
        validate_local_plugin_manifest, verify_plugin_package_sha256, AppConfig, AppConfigManager,
    };
    use serde_json::json;
    use std::fs;
    use std::path::PathBuf;

    fn local_manifest_with_storage(storage: serde_json::Value) -> serde_json::Value {
        json!({
            "schemaVersion": 1,
            "id": "desktop-files",
            "version": "1.0.0",
            "kind": "local",
            "name": {
                "i18nKey": "plugins.desktopFiles.name",
                "fallback": "Desktop Files"
            },
            "description": {
                "i18nKey": "plugins.desktopFiles.description",
                "fallback": "Desktop file search"
            },
            "category": "search",
            "enabledByDefault": true,
            "storage": storage
        })
    }

    #[test]
    fn plugin_download_uses_expected_size_without_content_length() {
        assert_eq!(
            plugin_download_total_bytes(None, Some(1_000_000_000)),
            Some(1_000_000_000)
        );
        assert_eq!(
            plugin_download_total_bytes(Some(800), Some(1_000)),
            Some(800)
        );
    }

    #[test]
    fn active_download_progress_reaches_one_hundred_only_after_download() {
        assert_eq!(
            plugin_install_progress_percent("downloading", 1_000, Some(1_000)),
            Some(99.0)
        );
        assert_eq!(
            plugin_install_progress_percent("downloaded", 1_000, Some(1_000)),
            Some(100.0)
        );
    }

    #[test]
    fn plugin_manifest_accepts_valid_storage_contract() {
        let manifest = local_manifest_with_storage(json!({
            "schemaVersion": 1,
            "indexSchemaVersion": 2,
            "extractorVersion": 3
        }));

        assert_eq!(
            validate_local_plugin_manifest(&manifest).expect("manifest should be valid"),
            "desktop-files"
        );
    }

    #[test]
    fn plugin_manifest_rejects_invalid_storage_contract() {
        let manifest = local_manifest_with_storage(json!({
            "schemaVersion": 1,
            "indexSchemaVersion": -1,
            "extractorVersion": 3
        }));

        assert!(validate_local_plugin_manifest(&manifest).is_err());
    }

    #[test]
    fn default_plugin_packages_dir_lives_under_packages() {
        assert_eq!(
            default_plugin_packages_dir_for_data_dir(&PathBuf::from("data-root")),
            PathBuf::from("data-root").join("packages").join("plugins")
        );
    }

    #[test]
    fn plugin_package_sha256_must_be_hex() {
        assert!(normalize_plugin_package_sha256(&"a".repeat(64)).is_ok());
        assert!(normalize_plugin_package_sha256("not-a-sha").is_err());
    }

    #[test]
    fn plugin_package_sha256_verification_rejects_mismatch() {
        let path = std::env::temp_dir().join(format!(
            "snippets-code-plugin-sha-test-{}.zip",
            std::process::id()
        ));
        fs::write(&path, b"plugin package").expect("test package should be written");

        let result = verify_plugin_package_sha256(&path, Some(&"0".repeat(64)));
        let _ = fs::remove_file(&path);

        assert!(result.is_err());
    }

    #[test]
    fn clearing_local_ai_config_removes_saved_chat_histories() {
        let mut config = AppConfig::default();
        config.extra.insert(
            "local_ai_chat_histories".to_string(),
            serde_json::json!([{ "id": "history-1" }]),
        );
        let mut manager = AppConfigManager {
            config_path: PathBuf::new(),
            config,
        };

        manager.clear_plugin_owned_config("local-ai");

        assert!(!manager.config.extra.contains_key("local_ai_chat_histories"));
    }

    #[test]
    fn quick_search_preview_is_hidden_when_legacy_config_has_no_setting() {
        let config = AppConfigManager::load_from_str("{}").expect("config should deserialize");

        assert!(!config.quick_search.preview_visible);
    }

    #[test]
    fn quick_search_preview_setting_round_trips() {
        let mut config = AppConfig::default();
        config.quick_search.preview_visible = true;

        let serialized = serde_json::to_string(&config).expect("config should serialize");
        let restored =
            AppConfigManager::load_from_str(&serialized).expect("config should deserialize");

        assert!(restored.quick_search.preview_visible);
    }
}
