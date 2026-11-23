// 工作区配置管理器
// 统一管理 workspace.json 的读写操作

use super::metadata::{AttachmentSettings, WorkspaceConfig};
use super::workspace::{read_workspace, write_workspace};
use log::{info, warn};
use std::path::PathBuf;

// 工作区管理器
#[derive(Clone)]
pub struct WorkspaceManager {
    config_dir: PathBuf,
    config: WorkspaceConfig,
}

impl WorkspaceManager {
    // 创建新的工作区管理器
    //
    // # Arguments
    // * `config_dir` - 配置目录路径（.snippets-code）
    pub fn new(config_dir: PathBuf) -> Result<Self, String> {
        // 尝试读取现有的 workspace.json
        let config = match read_workspace(&config_dir) {
            Ok(c) => {
                info!("✅ [WorkspaceManager] 读取 workspace.json 成功");
                c
            }
            Err(e) => {
                warn!(
                    "⚠️ [WorkspaceManager] 读取 workspace.json 失败: {}，使用默认配置",
                    e
                );
                WorkspaceConfig::default()
            }
        };

        Ok(Self { config_dir, config })
    }

    // 保存配置到文件
    pub fn save(&self) -> Result<(), String> {
        write_workspace(&self.config_dir, &self.config)
    }

    // 获取附件配置
    pub fn get_attachment_settings(&self) -> &AttachmentSettings {
        &self.config.settings.attachment
    }

    // 更新附件配置
    pub fn update_attachment_settings(&mut self, settings: AttachmentSettings) {
        self.config.settings.attachment = settings;
    }

    // 先保存候选配置，写入失败时保留可重试的内存状态。
    pub fn save_attachment_settings(&mut self, settings: AttachmentSettings) -> Result<(), String> {
        self.save_attachment_settings_with(settings, Self::save)
    }

    fn save_attachment_settings_with(
        &mut self,
        settings: AttachmentSettings,
        save: impl FnOnce(&Self) -> Result<(), String>,
    ) -> Result<(), String> {
        let mut candidate = self.clone();
        candidate.update_attachment_settings(settings);
        let result = save(&candidate);
        // 备份清理可能在原子替换后报错；确认完整配置已落盘后才发布，
        // 并继续向调用方返回原始错误。
        if result.is_ok()
            || std::fs::read_to_string(self.config_dir.join("workspace.json"))
                .ok()
                .and_then(|content| serde_json::from_str::<serde_json::Value>(&content).ok())
                .is_some_and(|stored| {
                    serde_json::to_value(&candidate.config).is_ok_and(|config| stored == config)
                })
        {
            self.config = candidate.config;
        }
        result
    }

    // 获取同步开关状态
    pub fn is_sync_enabled(&self) -> bool {
        self.config.settings.sync_enabled
    }

    // 设置同步开关
    pub fn set_sync_enabled(&mut self, enabled: bool) {
        self.config.settings.sync_enabled = enabled;
    }
}
