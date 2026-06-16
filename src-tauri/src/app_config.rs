// 应用配置管理模块
// 管理 .snippets-code/app.json 配置文件

use chrono::{DateTime, Utc};
use futures::StreamExt;
use log::{debug, info, warn};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::error::Error as StdError;
use std::fs::{self, File};
use std::io;
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::{Command, Stdio};
use std::time::{Duration, SystemTime, UNIX_EPOCH};

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

#[derive(Debug, Clone, Serialize, Deserialize)]
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

fn is_default_git_settings(settings: &GitSettings) -> bool {
    !settings.enabled
        && !settings.auto_sync
        && settings.auto_sync_delay == default_auto_sync_delay()
        && settings.pull_on_start == default_pull_on_start()
        && settings.user_name.is_empty()
        && settings.user_email.is_empty()
        && settings.remote_url.is_empty()
        && settings.token.is_empty()
        && settings.last_sync_time.is_none()
}

fn is_default_editor_settings(settings: &EditorSettings) -> bool {
    settings.line_numbers == default_editor_line_numbers()
        && (settings.line_height - default_editor_line_height()).abs() <= f64::EPSILON
}

fn copy_option_if_empty<T: Clone>(target: &mut Option<T>, source: &Option<T>) -> bool {
    if target.is_none() && source.is_some() {
        *target = source.clone();
        return true;
    }

    false
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

fn merge_legacy_workspace_config(target: &mut AppConfig, legacy: &AppConfig) -> bool {
    let mut changed = false;

    changed |= copy_option_if_empty(&mut target.plugin_install_dir, &legacy.plugin_install_dir);
    changed |= copy_option_if_empty(&mut target.workspace_root, &legacy.workspace_root);
    changed |= copy_option_if_empty(&mut target.update_available, &legacy.update_available);
    changed |= copy_option_if_empty(&mut target.update_info, &legacy.update_info);
    changed |= copy_option_if_empty(&mut target.translation_engine, &legacy.translation_engine);
    changed |= copy_option_if_empty(&mut target.ocr_engine, &legacy.ocr_engine);
    changed |= copy_option_if_empty(&mut target.ocr_language, &legacy.ocr_language);
    changed |= copy_option_if_empty(
        &mut target.offline_model_activated,
        &legacy.offline_model_activated,
    );
    changed |= copy_option_if_empty(
        &mut target.show_progress_on_restart,
        &legacy.show_progress_on_restart,
    );
    changed |= copy_option_if_empty(
        &mut target.show_progress_reset_kind,
        &legacy.show_progress_reset_kind,
    );
    changed |= copy_option_if_empty(
        &mut target.setup_restart_pending,
        &legacy.setup_restart_pending,
    );
    changed |= copy_option_if_empty(
        &mut target.update_restart_pending,
        &legacy.update_restart_pending,
    );
    changed |= copy_option_if_empty(&mut target.search_hotkey, &legacy.search_hotkey);
    changed |= copy_option_if_empty(&mut target.config_hotkey, &legacy.config_hotkey);
    changed |= copy_option_if_empty(&mut target.translate_hotkey, &legacy.translate_hotkey);
    changed |= copy_option_if_empty(
        &mut target.selection_translate_hotkey,
        &legacy.selection_translate_hotkey,
    );
    changed |= copy_option_if_empty(&mut target.screenshot_hotkey, &legacy.screenshot_hotkey);
    changed |= copy_option_if_empty(
        &mut target.screen_recorder_hotkey,
        &legacy.screen_recorder_hotkey,
    );
    changed |= copy_option_if_empty(&mut target.dark_mode_hotkey, &legacy.dark_mode_hotkey);
    changed |= copy_option_if_empty(
        &mut target.wallpaper_switcher_hotkey,
        &legacy.wallpaper_switcher_hotkey,
    );
    changed |= copy_option_if_empty(&mut target.dark_mode_config, &legacy.dark_mode_config);
    changed |= copy_option_if_empty(
        &mut target.wallpaper_switcher_config,
        &legacy.wallpaper_switcher_config,
    );

    if is_default_git_settings(&target.git) && !is_default_git_settings(&legacy.git) {
        target.git = legacy.git.clone();
        changed = true;
    }

    if is_default_editor_settings(&target.editor) && !is_default_editor_settings(&legacy.editor) {
        target.editor = legacy.editor.clone();
        changed = true;
    }

    if target.cache_icons != legacy.cache_icons {
        target.cache_icons = legacy.cache_icons;
        changed = true;
    }

    for (plugin_id, legacy_state) in &legacy.plugins {
        let needs_update = target
            .plugins
            .get(plugin_id)
            .map(|current| current.enabled != legacy_state.enabled)
            .unwrap_or(true);
        if needs_update {
            target
                .plugins
                .insert(plugin_id.clone(), legacy_state.clone());
            changed = true;
        }
    }

    for (key, value) in &legacy.extra {
        if !target.extra.contains_key(key) {
            target.extra.insert(key.clone(), value.clone());
            changed = true;
        }
    }

    changed
}

pub fn migrate_workspace_app_config_to_data_dir(
    app_handle: &AppHandle,
    manager: &mut AppConfigManager,
) -> Result<(), String> {
    let Some(workspace_root) = crate::json_config::get_workspace_root(app_handle)? else {
        return Ok(());
    };

    let data_dir = crate::json_config::get_data_dir(app_handle);
    if same_path(&workspace_root, &data_dir) {
        return Ok(());
    }

    let legacy_config_path = workspace_root.join(".snippets-code").join("app.json");
    if !legacy_config_path.is_file() || same_path(&legacy_config_path, &manager.config_path) {
        return Ok(());
    }

    let legacy_manager = AppConfigManager::new(&workspace_root)?;
    let legacy_config = legacy_manager.get_config().clone();
    let mut current_config = manager.get_config().clone();

    if merge_legacy_workspace_config(&mut current_config, &legacy_config) {
        manager.update_config(current_config);
        manager.save()?;
        info!(
            "✅ [AppConfig] 已从旧工作区配置迁移应用级设置: {}",
            legacy_config_path.display()
        );
    }

    Ok(())
}

// ============= Tauri 命令 =============

use std::sync::{Arc, RwLock};
use tauri::{command, AppHandle, Emitter, Manager};
use walkdir::WalkDir;
use zip::ZipArchive;

const PLUGIN_INSTALL_METADATA_FILE: &str = ".install-meta.json";
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
struct PluginInstallProgressPayload {
    package_url: String,
    phase: String,
    downloaded_bytes: u64,
    total_bytes: Option<u64>,
    progress: Option<f64>,
}

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
        if matches!(progress_reset_kind.as_deref(), Some("desktopFiles" | "all")) {
            let _ = crate::db::consume_show_progress_kind(app_handle);
            crate::window::create_progress_notification_window();
            std::thread::sleep(std::time::Duration::from_millis(100));
            crate::window::emit_scan_progress("正在扫描桌面文件...", 0, 1, "");
            let count = crate::plugins::desktop_files::refresh_desktop_files_cache_with_count();
            crate::window::emit_scan_complete(0, 0, count);
        } else {
            crate::plugins::desktop_files::refresh_desktop_files_cache();
        }
    } else {
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
        crate::plugins::local_launcher::invalidate_apps_cache();
        crate::plugins::local_launcher::invalidate_bookmarks_cache();
    }
}

fn refresh_search_plugin_index_feedback(app_handle: AppHandle, plugin_id: String, enabled: bool) {
    if !enabled {
        return;
    }

    std::thread::spawn(move || match plugin_id.as_str() {
        "local-launcher" => {
            crate::window::create_progress_notification_window();
            std::thread::sleep(std::time::Duration::from_millis(100));
            crate::window::emit_scan_progress("正在检索本地应用...", 0, 4, "");
            let apps = crate::apps::get_installed_apps();
            crate::window::emit_scan_progress(
                "正在保存应用数据...",
                1,
                4,
                &format!("共 {} 个应用", apps.len()),
            );
            if let Err(e) = crate::db::clear_apps() {
                warn!("[Plugin] 清理旧本地应用索引失败: {}", e);
            }
            if let Err(e) = crate::db::insert_apps(&apps) {
                warn!("[Plugin] 保存本地应用索引失败: {}", e);
            }
            crate::plugins::local_launcher::invalidate_apps_cache();

            crate::window::emit_scan_progress("正在检索浏览器书签...", 2, 4, "");
            let bookmarks = crate::bookmarks::get_browser_bookmarks();
            crate::window::emit_scan_progress(
                "正在保存书签数据...",
                3,
                4,
                &format!("共 {} 个书签", bookmarks.len()),
            );
            if let Err(e) = crate::db::clear_bookmarks() {
                warn!("[Plugin] 清理旧浏览器书签索引失败: {}", e);
            }
            if let Err(e) = crate::db::insert_bookmarks(&bookmarks) {
                warn!("[Plugin] 保存浏览器书签索引失败: {}", e);
            }
            crate::plugins::local_launcher::invalidate_bookmarks_cache();
            if crate::icon::is_icon_cache_enabled() {
                let updated_count = std::sync::Arc::new(std::sync::Mutex::new(0usize));
                let completion_counter = std::sync::Arc::new(std::sync::Mutex::new(0usize));
                crate::apps::load_app_icons_async_silent(
                    apps.clone(),
                    updated_count.clone(),
                    completion_counter.clone(),
                );
                crate::bookmarks::load_bookmark_icons_async_silent(
                    bookmarks.clone(),
                    updated_count,
                    completion_counter,
                );
            }
            crate::window::emit_scan_complete(apps.len(), bookmarks.len(), 0);
        }
        "desktop-files" => {
            crate::window::create_progress_notification_window();
            std::thread::sleep(std::time::Duration::from_millis(100));
            crate::window::emit_scan_progress("正在检索桌面文件...", 0, 1, "");
            let count = crate::plugins::desktop_files::refresh_desktop_files_cache_with_count();
            crate::window::emit_scan_complete(0, 0, count);
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

fn apply_plugin_runtime_change(app_handle: &AppHandle, plugin_id: &str, enabled: bool) {
    if let Some(spec) = plugin_runtime_spec(plugin_id) {
        (spec.apply_runtime_change)(app_handle, enabled);
    }

    if let Err(e) = crate::hotkey::refresh_plugin_shortcuts(app_handle, plugin_id, enabled) {
        warn!(
            "[Plugin] refresh hotkeys for {} enabled={} failed: {}",
            plugin_id, enabled, e
        );
    }

    refresh_plugin_shell_integration(app_handle, plugin_id, enabled);
    refresh_search_plugin_index_feedback(app_handle.clone(), plugin_id.to_string(), enabled);
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
    if plugin_id != "git-sync" {
        return Ok(());
    }

    let conn = crate::db::DbConnectionManager::get().map_err(|e| e.to_string())?;
    conn.execute("DELETE FROM user_settings WHERE id = 1", [])
        .map_err(|e| e.to_string())?;
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

fn clear_plugin_owned_config(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    clear_app_plugin_config(app_handle, plugin_id)?;
    clear_workspace_plugin_config(app_handle, plugin_id)?;
    clear_database_plugin_config(plugin_id)?;
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
            "enabled": enabled
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
        (true, true) => Some("all"),
        (true, false) => Some("launcher"),
        (false, true) => Some("desktopFiles"),
        (false, false) => None,
    } {
        crate::db::set_show_progress_on_restart_with_kind(&app_handle, reset_kind);
    } else {
        crate::json_config::set_app_config_value(&app_handle, "show_progress_on_restart", false)?;
        crate::json_config::set_app_config_value(&app_handle, "show_progress_reset_kind", "")?;
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
        return Ok(configured_root.join("plugins"));
    }

    let plugins_dir = default_plugin_packages_dir(app_handle)?;
    migrate_legacy_default_plugin_packages(app_handle, &plugins_dir)?;
    Ok(plugins_dir)
}

fn default_plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    Ok(default_plugin_packages_dir_for_data_dir(
        &crate::json_config::get_data_dir(app_handle),
    ))
}

fn default_plugin_packages_dir_for_data_dir(data_dir: &Path) -> PathBuf {
    data_dir.join("plugins")
}

fn legacy_default_plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    Ok(app_handle
        .path()
        .app_data_dir()
        .map_err(|e| format!("获取应用数据目录失败: {}", e))?
        .join("plugins"))
}

fn migrate_legacy_default_plugin_packages(
    app_handle: &AppHandle,
    plugins_dir: &Path,
) -> Result<(), String> {
    let legacy_dir = legacy_default_plugin_packages_dir(app_handle)?;
    migrate_installed_plugin_packages(&legacy_dir, plugins_dir)
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
    let legacy_default_plugins_dir = legacy_default_plugin_packages_dir(&app_handle).ok();
    let legacy_direct_plugins_dir = configured_plugin_install_root_dir(&app_handle)?;
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
        let plugins_dir = normalized_root.join("plugins");
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
    if let Some(legacy_default_plugins_dir) = legacy_default_plugins_dir {
        migrate_installed_plugin_packages(&legacy_default_plugins_dir, &new_plugins_dir)?;
    }
    if let Some(legacy_direct_plugins_dir) = legacy_direct_plugins_dir {
        migrate_installed_plugin_packages(&legacy_direct_plugins_dir, &new_plugins_dir)?;
    }

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        let mut config = manager.get_config().clone();
        config.plugin_install_dir = normalized_path;
        manager.update_config(config);
        manager.save()?;
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

fn plugin_has_owned_config(plugin_id: &str) -> bool {
    matches!(
        plugin_id,
        "attachments"
            | "git-sync"
            | "screen-recorder"
            | "screenshot"
            | "system-theme"
            | "translation"
    )
}

fn manifest_version(manifest: &serde_json::Value) -> Option<&str> {
    manifest
        .get("version")
        .and_then(|value| value.as_str())
        .map(str::trim)
        .filter(|value| !value.is_empty())
}

fn should_clear_plugin_owned_config_for_reinstall(
    plugin_id: &str,
    target_dir: &Path,
    next_manifest: &serde_json::Value,
) -> bool {
    if !plugin_has_owned_config(plugin_id) {
        return false;
    }

    let existing_manifest = read_plugin_package_manifest(&target_dir.join("plugin.json")).ok();
    existing_manifest
        .as_ref()
        .and_then(manifest_version)
        .zip(manifest_version(next_manifest))
        .is_some_and(|(existing_version, next_version)| existing_version == next_version)
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

fn local_plugin_data_path(app_handle: &AppHandle, plugin_id: &str) -> Result<PathBuf, String> {
    Ok(local_plugin_package_dir(app_handle, plugin_id)?.join("data.json"))
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
    fs::write(&data_path, content)
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

#[cfg(test)]
mod plugin_validation_tests {
    use super::*;
    use serde_json::json;
    use zip::write::{ExtendedFileOptions, FileOptions};
    use zip::ZipWriter;

    fn valid_manifest() -> serde_json::Value {
        json!({
            "schemaVersion": 1,
            "id": "test-plugin",
            "version": "1.0.0",
            "kind": "local",
            "name": {
                "i18nKey": "plugins.test.name",
                "fallback": "Test Plugin"
            },
            "description": {
                "i18nKey": "plugins.test.description",
                "fallback": "Test plugin"
            },
            "category": "automation",
            "enabledByDefault": false,
            "entry": {
                "frontend": "dist/index.js",
                "backend": "backend/host.exe",
                "backendKind": "native-host"
            },
            "permissions": [
                "backend:sync"
            ]
        })
    }

    fn create_plugin_zip(entries: &[(&str, &str)]) -> tempfile::NamedTempFile {
        let file = tempfile::NamedTempFile::new().expect("temp zip file");
        let mut writer = ZipWriter::new(file.reopen().expect("reopen temp zip"));
        let options = FileOptions::<ExtendedFileOptions>::default();

        for (name, content) in entries {
            writer
                .start_file(name, options.clone())
                .expect("start zip file");
            writer
                .write_all(content.as_bytes())
                .expect("write zip file");
        }

        writer.finish().expect("finish zip");
        file
    }

    #[test]
    fn validate_plugin_package_id_accepts_safe_ids() {
        for plugin_id in ["git-sync", "translation.offline_runtime", "plugin_1"] {
            assert!(
                validate_plugin_package_id(plugin_id).is_ok(),
                "expected plugin id to be valid: {}",
                plugin_id
            );
        }
    }

    #[test]
    fn validate_plugin_package_id_rejects_path_like_or_empty_ids() {
        for plugin_id in [
            "",
            ".",
            "..",
            "../plugin",
            "bad/plugin",
            "bad\\plugin",
            "插件",
        ] {
            assert!(
                validate_plugin_package_id(plugin_id).is_err(),
                "expected plugin id to be invalid: {}",
                plugin_id
            );
        }
    }

    #[test]
    fn validate_plugin_relative_path_accepts_nested_files() {
        for path in ["dist/index.js", "assets/icons/icon.png", "backend/host.exe"] {
            assert!(
                validate_plugin_relative_path(path).is_ok(),
                "expected relative path to be valid: {}",
                path
            );
        }
    }

    #[test]
    fn validate_plugin_relative_path_rejects_escape_attempts() {
        for path in [
            "",
            "/absolute/file.js",
            "C:\\plugin\\host.exe",
            "../host.exe",
            "dist/../host.exe",
            "dist//index.js",
            "https://example.com/index.js",
        ] {
            assert!(
                validate_plugin_relative_path(path).is_err(),
                "expected relative path to be invalid: {}",
                path
            );
        }
    }

    #[test]
    fn validate_local_plugin_manifest_returns_plugin_id_for_valid_manifest() {
        let manifest = valid_manifest();

        assert_eq!(
            validate_local_plugin_manifest(&manifest).expect("valid manifest"),
            "test-plugin"
        );
    }

    #[test]
    fn validate_local_plugin_manifest_rejects_wrong_schema_or_kind() {
        let mut manifest = valid_manifest();
        manifest["schemaVersion"] = json!(2);
        assert_eq!(
            validate_local_plugin_manifest(&manifest).expect_err("schema mismatch"),
            "插件清单 schemaVersion 必须为 1"
        );

        let mut manifest = valid_manifest();
        manifest["kind"] = json!("builtin");
        assert_eq!(
            validate_local_plugin_manifest(&manifest).expect_err("wrong kind"),
            "本地插件清单 kind 必须为 local"
        );
    }

    #[test]
    fn validate_local_plugin_manifest_rejects_unsafe_entry_paths() {
        let mut manifest = valid_manifest();
        manifest["entry"]["frontend"] = json!("../dist/index.js");

        assert!(validate_local_plugin_manifest(&manifest)
            .expect_err("unsafe frontend")
            .contains("插件资源路径无效"));
    }

    #[test]
    fn validate_local_plugin_manifest_rejects_unknown_backend_kind() {
        let mut manifest = valid_manifest();
        manifest["entry"]["backendKind"] = json!("shell");

        assert_eq!(
            validate_local_plugin_manifest(&manifest).expect_err("unknown backend kind"),
            "插件后端类型必须为 native-host、wasm 或 script"
        );
    }

    #[test]
    fn manifest_allows_exact_or_wildcard_backend_command_permissions() {
        let manifest = valid_manifest();
        assert!(manifest_allows_backend_command(&manifest, "sync"));
        assert!(!manifest_allows_backend_command(&manifest, "delete_all"));

        let mut wildcard_manifest = valid_manifest();
        wildcard_manifest["permissions"] = json!(["backend:*"]);
        assert!(manifest_allows_backend_command(
            &wildcard_manifest,
            "delete_all"
        ));
    }

    #[test]
    fn manifest_does_not_treat_frontend_command_permissions_as_backend_permissions() {
        let mut manifest = valid_manifest();
        manifest["permissions"] = json!(["command:sync"]);

        assert!(!manifest_allows_backend_command(&manifest, "sync"));
    }

    #[test]
    fn compare_semver_handles_prefixes_and_missing_parts() {
        assert_eq!(
            compare_semver("v2.0.2", "2.0.1"),
            std::cmp::Ordering::Greater
        );
        assert_eq!(compare_semver("2.0", "2.0.0"), std::cmp::Ordering::Equal);
        assert_eq!(compare_semver("2.0.1", "2.1.0"), std::cmp::Ordering::Less);
    }

    #[test]
    fn normalize_runtime_metadata_updates_app_version_and_clears_stale_update_info() {
        let mut config = AppConfig::default();
        config.version = "0.2.0".to_string();
        config.update_available = Some(true);
        config.update_info = Some(json!({
            "version": current_app_version(),
            "notes": "already installed"
        }));

        AppConfigManager::normalize_runtime_metadata(&mut config);

        assert_eq!(config.version, current_app_version());
        assert_eq!(config.update_available, Some(false));
        assert!(config.update_info.is_none());
    }

    #[test]
    fn normalize_runtime_metadata_preserves_future_update_info() {
        let mut config = AppConfig::default();
        config.update_available = Some(true);
        config.update_info = Some(json!({
            "version": "9999.0.0",
            "notes": "future update"
        }));

        AppConfigManager::normalize_runtime_metadata(&mut config);

        assert_eq!(config.update_available, Some(true));
        assert!(config.update_info.is_some());
    }

    #[test]
    fn editor_settings_default_to_readable_editor_layout() {
        let settings = EditorSettings::default();

        assert!(settings.line_numbers);
        assert_eq!(settings.line_height, 1.6);
    }

    #[test]
    fn extract_plugin_zip_package_extracts_safe_entries() {
        let zip = create_plugin_zip(&[
            ("plugin.json", r#"{"id":"test-plugin"}"#),
            ("dist/index.js", "console.log('plugin')"),
        ]);
        let target = tempfile::tempdir().expect("target dir");

        extract_plugin_zip_package(zip.path(), target.path()).expect("extract plugin zip");

        assert!(target.path().join("plugin.json").is_file());
        assert_eq!(
            fs::read_to_string(target.path().join("dist/index.js")).expect("read extracted file"),
            "console.log('plugin')"
        );
    }

    #[test]
    fn extract_plugin_zip_package_rejects_path_traversal_entries() {
        let zip = create_plugin_zip(&[("../escape.txt", "nope")]);
        let target = tempfile::tempdir().expect("target dir");

        let error = extract_plugin_zip_package(zip.path(), target.path())
            .expect_err("path traversal should be rejected");

        assert!(error.contains("不安全路径"));
        assert!(!target.path().join("..").join("escape.txt").is_file());
    }

    #[test]
    fn find_plugin_source_root_accepts_single_nested_root() {
        let target = tempfile::tempdir().expect("target dir");
        let nested = target.path().join("plugin-root");
        fs::create_dir_all(&nested).expect("create nested root");
        fs::write(nested.join("plugin.json"), "{}").expect("write manifest");

        assert_eq!(
            find_plugin_source_root(target.path()).expect("find nested root"),
            nested
        );
    }

    #[test]
    fn find_plugin_source_root_rejects_multiple_nested_roots() {
        let target = tempfile::tempdir().expect("target dir");
        for name in ["plugin-a", "plugin-b"] {
            let nested = target.path().join(name);
            fs::create_dir_all(&nested).expect("create nested root");
            fs::write(nested.join("plugin.json"), "{}").expect("write manifest");
        }

        assert_eq!(
            find_plugin_source_root(target.path()).expect_err("multiple roots should fail"),
            "插件包中包含多个 plugin.json 根目录"
        );
    }

    #[test]
    fn sync_translation_runtime_wasm_fallbacks_skips_unusable_target_dirs() {
        let runtime_dir = tempfile::tempdir().expect("runtime dir");
        let writable_target = tempfile::tempdir().expect("writable target dir");
        let missing_target = runtime_dir.path().join("missing-target");
        let wasm_file = "ort-wasm-simd-threaded.wasm";

        fs::write(runtime_dir.path().join(wasm_file), "wasm").expect("write wasm fallback");

        sync_translation_runtime_wasm_fallbacks_to_dirs(
            runtime_dir.path(),
            vec![missing_target, writable_target.path().to_path_buf()],
        );

        assert_eq!(
            fs::read_to_string(writable_target.path().join(wasm_file))
                .expect("read copied wasm fallback"),
            "wasm"
        );
    }
}

fn emit_plugin_install_progress(
    app_handle: &AppHandle,
    package_url: &str,
    phase: &str,
    downloaded_bytes: u64,
    total_bytes: Option<u64>,
) {
    let progress = total_bytes
        .filter(|total| *total > 0)
        .map(|total| ((downloaded_bytes as f64 / total as f64) * 100.0).clamp(0.0, 100.0));

    let payload = PluginInstallProgressPayload {
        package_url: package_url.to_string(),
        phase: phase.to_string(),
        downloaded_bytes,
        total_bytes,
        progress,
    };

    debug!(
        "[Plugin] install progress phase={} url={} downloaded={} total={:?} progress={:?}",
        phase, package_url, downloaded_bytes, total_bytes, progress
    );
    let _ = app_handle.emit("plugin-install-progress", payload);
}

async fn download_plugin_url_to_temp(
    app_handle: &AppHandle,
    package_url: &str,
    _expected_size_bytes: Option<u64>,
) -> Result<PathBuf, String> {
    validate_plugin_remote_url(package_url)?;
    let download_urls = plugin_package_download_urls(package_url);
    for download_url in &download_urls {
        validate_plugin_remote_url(download_url)?;
    }

    let temp_dir = create_plugin_install_temp_dir(app_handle)?;
    let temp_file = temp_dir.join("package.zip");
    let result = async {
        debug!("[Plugin] downloading remote package {}", package_url);
        emit_plugin_install_progress(app_handle, package_url, "downloading", 0, None);

        let client = reqwest::Client::builder()
            .user_agent("snippets-code-plugin-installer")
            .connect_timeout(Duration::from_secs(20))
            .timeout(Duration::from_secs(180))
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
                    emit_plugin_install_progress(app_handle, package_url, "downloading", 0, None);
                }

                let response = match client.get(download_url).send().await {
                    Ok(response) => response,
                    Err(error) => {
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

                let total_bytes = response.content_length();
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
                let mut stream = response.bytes_stream();
                let mut stream_failed = false;

                while let Some(chunk) = stream.next().await {
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

                    if total_bytes
                        .map(|total| downloaded_bytes >= total)
                        .unwrap_or(false)
                        || downloaded_bytes.saturating_sub(last_emitted_bytes) >= 512 * 1024
                    {
                        last_emitted_bytes = downloaded_bytes;
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

                emit_plugin_install_progress(
                    app_handle,
                    package_url,
                    "downloaded",
                    downloaded_bytes,
                    total_bytes,
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
        if target_dir.exists() {
            if !overwrite {
                return Err(format!("插件 '{}' 已安装", plugin_id));
            }
            apply_plugin_runtime_change(&app_handle, &plugin_id, false);
            if should_clear_plugin_owned_config_for_reinstall(&plugin_id, &target_dir, &manifest) {
                clear_plugin_owned_config(&app_handle, &plugin_id)?;
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
            refresh_search_plugin_index_feedback(app_handle.clone(), plugin_id.to_string(), true);
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

#[command]
pub async fn install_plugin_package_from_url(
    app_handle: AppHandle,
    package_url: String,
    package_subdir: Option<String>,
    expected_size_bytes: Option<u64>,
    overwrite: bool,
) -> Result<LocalPluginPackage, String> {
    let downloaded_package =
        download_plugin_url_to_temp(&app_handle, &package_url, expected_size_bytes).await?;
    let temp_dir = downloaded_package.parent().map(Path::to_path_buf);
    emit_plugin_install_progress(&app_handle, &package_url, "extracting", 0, None);
    let result =
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
        };

    if result.is_ok() {
        emit_plugin_install_progress(&app_handle, &package_url, "installed", 0, None);
    }

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

    if let Err(error) = crate::hotkey::refresh_plugin_shortcuts(&app_handle, &plugin_id, false) {
        warn!(
            "[Plugin] refresh hotkeys before uninstalling {} failed: {}",
            plugin_id, error
        );
    }
    apply_plugin_runtime_change(&app_handle, &plugin_id, false);

    clear_plugin_owned_config(&app_handle, &plugin_id)?;

    fs::remove_dir_all(&target_dir)
        .map_err(|e| format!("删除插件目录失败: {} ({})", target_dir.display(), e))?;

    if let Err(error) = crate::db::clear_plugin_storage(&plugin_id) {
        warn!(
            "[Plugin] clear storage after uninstalling {} failed: {}",
            plugin_id, error
        );
    }

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
    refresh_plugin_shell_integration(&app_handle, &plugin_id, false);
    Ok(())
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

    let runtime_entry = runtime_dir.join("transformers.min.js");
    if !runtime_entry.is_file() {
        return Err(format!(
            "离线翻译运行时安装后仍缺少 {}",
            runtime_entry.display()
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
