//! Loading, normalization, and atomic persistence of app.json.
use super::model::{
    default_editor_line_height, default_plugin_enabled, normalize_plugin_states, AppConfig,
    EditorSettings, GitSettings, PluginRuntimeState,
};
use super::plugin_manifest::compare_semver;
use log::{info, warn};
use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};

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

#[cfg(test)]
mod tests {
    use super::*;

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
