//! Configuration schema, serde defaults, and legacy JSON fields.
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

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

pub(super) fn default_editor_line_height() -> f64 {
    1.6
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Default)]
pub struct QuickSearchSettings {
    #[serde(default)]
    pub preview_visible: bool,
}

pub(super) fn default_plugin_enabled() -> bool {
    true
}

fn default_plugin_states() -> PluginStates {
    HashMap::new()
}

pub(super) fn normalize_plugin_states(_plugins: &mut PluginStates) {
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

pub(super) fn has_required_git_sync_settings(settings: &GitSettings) -> bool {
    !settings.user_name.trim().is_empty()
        && !settings.user_email.trim().is_empty()
        && !settings.remote_url.trim().is_empty()
}

impl Default for EditorSettings {
    fn default() -> Self {
        Self {
            line_numbers: default_editor_line_numbers(),
            line_height: default_editor_line_height(),
        }
    }
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
