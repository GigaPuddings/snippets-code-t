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

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    struct TestDir(PathBuf);

    impl Drop for TestDir {
        fn drop(&mut self) {
            let _ = fs::remove_dir_all(&self.0);
        }
    }

    #[test]
    fn failed_attachment_save_can_retry_and_survives_reload() {
        let root = std::env::temp_dir().join(format!(
            "snippets-code-workspace-save-retry-{}",
            uuid::Uuid::new_v4()
        ));
        let _cleanup = TestDir(root.clone());
        let mut manager = WorkspaceManager::new(root.clone()).unwrap();
        manager.set_sync_enabled(true);
        manager.save().unwrap();
        let previous = manager.get_attachment_settings().clone();
        let config_path = root.join("workspace.json");
        let previous_disk = fs::read(&config_path).unwrap();
        let blocked_backup = root.join(".workspace.json.backup");
        fs::create_dir(&blocked_backup).unwrap();
        let mut imported = previous.clone();
        imported.path_template = "images/${noteFileName}/".to_string();

        assert!(manager.save_attachment_settings(imported).is_err());
        assert_eq!(manager.get_attachment_settings(), &previous);
        assert_eq!(fs::read(&config_path).unwrap(), previous_disk);

        fs::remove_dir(&blocked_backup).unwrap();
        let mut retried = manager.get_attachment_settings().clone();
        if retried.path_template != "images/${noteFileName}/" {
            retried.path_template = "images/${noteFileName}/".to_string();
            manager.save_attachment_settings(retried).unwrap();
        }
        let reloaded = WorkspaceManager::new(root).unwrap();
        assert_eq!(
            reloaded.get_attachment_settings().path_template,
            "images/${noteFileName}/"
        );
        assert!(reloaded.is_sync_enabled());
    }

    #[test]
    fn committed_attachment_settings_are_published_when_backup_cleanup_fails() {
        let root = std::env::temp_dir().join(format!(
            "snippets-code-workspace-save-cleanup-{}",
            uuid::Uuid::new_v4()
        ));
        let _cleanup = TestDir(root.clone());
        let mut manager = WorkspaceManager::new(root.clone()).unwrap();
        manager.save().unwrap();
        let config_path = root.join("workspace.json");
        let mut imported = manager.get_attachment_settings().clone();
        imported.path_template = "images/${noteFileName}/".to_string();

        // Keep the write real and inject only the error after it commits.
        let cleanup_error = "写入 workspace.json 失败: 清理文件备份失败".to_string();
        let result = manager.save_attachment_settings_with(imported.clone(), |candidate| {
            candidate.save()?;
            Err(cleanup_error.clone())
        });
        assert_eq!(result, Err(cleanup_error));
        assert_eq!(manager.get_attachment_settings(), &imported);
        let saved: WorkspaceConfig =
            serde_json::from_slice(&fs::read(&config_path).unwrap()).unwrap();
        assert_eq!(saved.settings.attachment, imported);
        manager.save_attachment_settings(imported.clone()).unwrap();
        assert_eq!(
            WorkspaceManager::new(root)
                .unwrap()
                .get_attachment_settings(),
            &imported
        );
    }
}
