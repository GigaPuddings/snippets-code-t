use log::{error, info, warn};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::fs::File;
use std::io::Write;
use std::path::{Path, PathBuf};
use tauri::Manager;
use uuid::Uuid;

// ============= 路径配置结构 (path.json) =============

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct PathConfig {
    pub data_dir: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct DataLayoutManifest {
    layout_version: u32,
    instance_id: String,
    created_at: String,
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
    #[serde(default)]
    pub cache_icons: Option<bool>,

    // Git 配置（作为 JSON 值存储）
    #[serde(default)]
    pub git: Option<serde_json::Value>,

    // 插件状态（作为 JSON 值存储，避免降级写入时丢失）
    #[serde(default)]
    pub plugins: Option<serde_json::Value>,

    // 更新相关
    #[serde(default)]
    pub update_available: Option<bool>,
    #[serde(default)]
    pub update_info: Option<serde_json::Value>,

    // 翻译引擎
    #[serde(default)]
    pub translation_engine: Option<String>,

    // OCR 识别引擎
    #[serde(default)]
    pub ocr_engine: Option<String>,
    #[serde(default)]
    pub ocr_language: Option<String>,

    // 离线模型
    #[serde(default)]
    pub offline_model_activated: Option<bool>,

    // 进度状态
    #[serde(default)]
    pub show_progress_on_restart: Option<bool>,
    #[serde(default)]
    pub show_progress_reset_kind: Option<String>,
    #[serde(default)]
    pub setup_restart_pending: Option<bool>,
    #[serde(default)]
    pub update_restart_pending: Option<bool>,

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
    pub screen_recorder_hotkey: Option<String>,
    #[serde(default)]
    pub dark_mode_hotkey: Option<String>,
    #[serde(default)]
    pub wallpaper_switcher_hotkey: Option<String>,

    // 深色模式配置
    #[serde(default)]
    pub dark_mode_config: Option<String>,

    // Markdown 工作区根目录
    #[serde(default)]
    pub workspace_root: Option<String>,
    #[serde(flatten)]
    pub extra: HashMap<String, serde_json::Value>,
}

impl Default for AppConfig {
    fn default() -> Self {
        Self {
            version: Some(env!("CARGO_PKG_VERSION").to_string()),
            theme: Some("auto".to_string()),
            language: Some("zh-CN".to_string()),
            auto_start: Some(false),
            auto_update_check: Some(true),
            auto_hide_on_blur: Some(true),
            setup_completed: Some(false),
            cache_icons: Some(true),
            git: None,
            plugins: None,
            update_available: Some(false),
            update_info: None,
            translation_engine: Some("bing".to_string()),
            ocr_engine: Some("auto".to_string()),
            ocr_language: Some("auto".to_string()),
            offline_model_activated: Some(false),
            show_progress_on_restart: Some(false),
            show_progress_reset_kind: Some(String::new()),
            setup_restart_pending: Some(false),
            update_restart_pending: Some(false),
            search_hotkey: None,
            config_hotkey: None,
            translate_hotkey: None,
            selection_translate_hotkey: None,
            screenshot_hotkey: None,
            screen_recorder_hotkey: None,
            dark_mode_hotkey: None,
            wallpaper_switcher_hotkey: None,
            dark_mode_config: None,
            workspace_root: None,
            extra: HashMap::new(),
        }
    }
}

/// 在同一目录中写入临时文件并原子替换目标文件。
///
/// 配置文件属于不可重建的用户状态，不能使用直接 `fs::write` 截断旧文件；
/// 进程异常退出时应至少保留上一个完整版本。
fn atomic_backup_path(path: &Path) -> PathBuf {
    let file_name = path
        .file_name()
        .and_then(|value| value.to_str())
        .unwrap_or("config.json");
    path.parent()
        .unwrap_or_else(|| Path::new("."))
        .join(format!(".{}.backup", file_name))
}

/// 恢复 Windows 两阶段替换期间留下的最后一个完整版本。
pub fn recover_atomic_file(path: &Path) -> Result<(), String> {
    if path.exists() {
        return Ok(());
    }
    let backup_path = atomic_backup_path(path);
    if backup_path.is_file() {
        fs::rename(&backup_path, path).map_err(|e| {
            format!(
                "恢复配置备份失败 {} -> {}: {}",
                backup_path.display(),
                path.display(),
                e
            )
        })?;
    }
    Ok(())
}

pub fn write_text_atomic(path: &Path, content: &str) -> Result<(), String> {
    let parent = path
        .parent()
        .ok_or_else(|| format!("文件缺少父目录: {}", path.display()))?;
    fs::create_dir_all(parent).map_err(|e| format!("创建目录失败 {}: {}", parent.display(), e))?;
    recover_atomic_file(path)?;

    let file_name = path
        .file_name()
        .and_then(|value| value.to_str())
        .unwrap_or("config.json");
    let temp_path = parent.join(format!(".{}.{}.tmp", file_name, Uuid::new_v4()));
    let backup_path = atomic_backup_path(path);

    let result = (|| -> Result<(), String> {
        let mut file = File::create(&temp_path)
            .map_err(|e| format!("创建临时文件失败 {}: {}", temp_path.display(), e))?;
        file.write_all(content.as_bytes())
            .map_err(|e| format!("写入临时文件失败 {}: {}", temp_path.display(), e))?;
        file.write_all(b"\n")
            .map_err(|e| format!("写入文件换行失败 {}: {}", temp_path.display(), e))?;
        file.sync_all()
            .map_err(|e| format!("刷新临时文件失败 {}: {}", temp_path.display(), e))?;

        if backup_path.exists() {
            fs::remove_file(&backup_path)
                .map_err(|e| format!("清理旧备份失败 {}: {}", backup_path.display(), e))?;
        }
        if path.exists() {
            fs::rename(path, &backup_path)
                .map_err(|e| format!("备份旧文件失败 {}: {}", path.display(), e))?;
        }
        if let Err(error) = fs::rename(&temp_path, path) {
            if backup_path.exists() {
                let _ = fs::rename(&backup_path, path);
            }
            return Err(format!("原子替换文件失败 {}: {}", path.display(), error));
        }
        if backup_path.exists() {
            fs::remove_file(&backup_path)
                .map_err(|e| format!("清理文件备份失败 {}: {}", backup_path.display(), e))?;
        }
        Ok(())
    })();

    if temp_path.exists() {
        let _ = fs::remove_file(temp_path);
    }
    result
}

// ============= 路径配置管理 =============

// 获取 path.json 的路径
pub fn get_path_config_file(app_handle: &tauri::AppHandle) -> PathBuf {
    app_handle.path().app_data_dir().unwrap().join("path.json")
}

// 读取 path.json
pub fn read_path_config(app_handle: &tauri::AppHandle) -> PathConfig {
    let config_path = get_path_config_file(app_handle);
    if let Err(error) = recover_atomic_file(&config_path) {
        error!("{}", error);
    }

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

    let json =
        serde_json::to_string_pretty(config).map_err(|e| format!("序列化配置失败: {}", e))?;

    write_text_atomic(&config_path, &json).map_err(|e| format!("写入 path.json 失败: {}", e))?;

    info!("✅ path.json 已保存");
    Ok(())
}

// ============= 应用配置管理 =============

// 默认将应用运行数据与安装文件放在同一目录。工作区仍由独立的 workspace_root 管理。
pub fn get_default_data_dir(app_handle: &tauri::AppHandle) -> PathBuf {
    #[cfg(target_os = "windows")]
    {
        if let Some(install_dir) = std::env::current_exe()
            .ok()
            .and_then(|path| path.parent().map(Path::to_path_buf))
        {
            return install_dir;
        }
    }

    app_handle.path().app_data_dir().unwrap()
}

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

    let default_dir = get_default_data_dir(app_handle);
    if !default_dir.exists() {
        let _ = fs::create_dir_all(&default_dir);
    }
    default_dir
}

pub fn ensure_data_layout_manifest(app_handle: &tauri::AppHandle) -> Result<(), String> {
    let path = get_data_dir(app_handle).join("manifest.json");
    recover_atomic_file(&path)?;
    if path.is_file() {
        let content =
            fs::read_to_string(&path).map_err(|e| format!("读取数据布局 manifest 失败: {}", e))?;
        let manifest: DataLayoutManifest = serde_json::from_str(&content)
            .map_err(|e| format!("解析数据布局 manifest 失败: {}", e))?;
        if manifest.layout_version > 1 {
            return Err(format!(
                "数据布局版本 {} 高于当前支持版本 1",
                manifest.layout_version
            ));
        }
        Uuid::parse_str(&manifest.instance_id)
            .map_err(|_| "数据布局 manifest 的 instanceId 无效".to_string())?;
        return Ok(());
    }

    let manifest = DataLayoutManifest {
        layout_version: 1,
        instance_id: Uuid::new_v4().to_string(),
        created_at: chrono::Utc::now().to_rfc3339(),
    };
    let content = serde_json::to_string_pretty(&manifest)
        .map_err(|e| format!("序列化数据布局 manifest 失败: {}", e))?;
    write_text_atomic(&path, &content)
}

// 获取 app.json 的路径（公开函数）
// app.json 存储在 .snippets-code 隐藏文件夹中
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
    if let Err(error) = recover_atomic_file(&config_path) {
        error!("{}", error);
    }

    if config_path.exists() {
        match fs::read_to_string(&config_path) {
            Ok(content) => match serde_json::from_str::<AppConfig>(&content) {
                Ok(config) => {
                    return config;
                }
                Err(e) => {
                    error!("解析 app.json 失败: {}", e);
                }
            },
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

    let json =
        serde_json::to_string_pretty(config).map_err(|e| format!("序列化配置失败: {}", e))?;

    write_text_atomic(&config_path, &json).map_err(|e| format!("写入 app.json 失败: {}", e))?;

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
    json.get(key)
        .and_then(|v| serde_json::from_value(v.clone()).ok())
}

// 设置 app.json 中的单个值
// 兼容方法：使用 AppConfigManager
pub fn set_app_config_value<T>(
    app_handle: &tauri::AppHandle,
    key: &str,
    value: T,
) -> Result<(), String>
where
    T: serde::Serialize,
{
    use crate::app_config::AppConfigManager;
    use std::sync::{Arc, RwLock};
    use tauri::Manager;

    // 尝试从应用状态获取 AppConfigManager
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.set_value(key, value)?;
        return manager.save();
    }

    // 降级：直接读写文件
    let mut config = read_app_config(app_handle);
    let mut json = serde_json::to_value(&config).map_err(|e| format!("序列化配置失败: {}", e))?;

    if let Some(obj) = json.as_object_mut() {
        obj.insert(
            key.to_string(),
            serde_json::to_value(value).map_err(|e| format!("序列化值失败: {}", e))?,
        );
    }

    config = serde_json::from_value(json).map_err(|e| format!("反序列化配置失败: {}", e))?;
    write_app_config(app_handle, &config)
}

// ============= 工作区配置管理 =============

fn same_existing_path(left: &Path, right: &Path) -> bool {
    match (left.canonicalize(), right.canonicalize()) {
        (Ok(left), Ok(right)) => left == right,
        _ => left == right,
    }
}

fn workspace_overlaps_app_data(app_handle: &tauri::AppHandle, path: &Path) -> bool {
    let data_dir = get_data_dir(app_handle);
    let config_dir = data_dir.join(".snippets-code");

    same_existing_path(path, &data_dir)
        || same_existing_path(path, &config_dir)
        || path.starts_with(&config_dir)
}

pub fn ensure_workspace_not_app_data(
    app_handle: &tauri::AppHandle,
    path: &Path,
) -> Result<(), String> {
    if workspace_overlaps_app_data(app_handle, path) {
        return Err(format!(
            "不能将应用数据目录设置为 Markdown 工作区: {}",
            path.display()
        ));
    }

    Ok(())
}

// 获取 workspace_root 配置
pub fn get_workspace_root(app_handle: &tauri::AppHandle) -> Result<Option<PathBuf>, String> {
    let config = read_app_config(app_handle);

    if let Some(workspace_root) = config.workspace_root {
        let path = PathBuf::from(workspace_root);
        if workspace_overlaps_app_data(app_handle, &path) {
            warn!("⚠️ 工作区配置指向应用数据目录，已忽略");
            return Ok(None);
        }

        return Ok(Some(path));
    }

    Ok(None)
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

    ensure_workspace_not_app_data(app_handle, &path)?;

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

    info!("✅ 工作区根目录已设置");
    Ok(())
}

// 验证目录具有读写权限
pub fn validate_workspace(path: &Path) -> Result<(), String> {
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn atomic_text_write_replaces_complete_file_without_residue() {
        let temp = tempfile::TempDir::new().unwrap();
        let path = temp.path().join("config.json");
        fs::write(&path, "old").unwrap();

        write_text_atomic(&path, "{\"version\":2}").unwrap();

        assert_eq!(fs::read_to_string(&path).unwrap(), "{\"version\":2}\n");
        let names = fs::read_dir(temp.path())
            .unwrap()
            .flatten()
            .map(|entry| entry.file_name().to_string_lossy().to_string())
            .collect::<Vec<_>>();
        assert_eq!(names, vec!["config.json".to_string()]);
    }

    #[test]
    fn recovers_previous_file_after_interrupted_replace() {
        let temp = tempfile::TempDir::new().unwrap();
        let path = temp.path().join("config.json");
        let backup = atomic_backup_path(&path);
        fs::write(&backup, "{\"version\":1}\n").unwrap();

        recover_atomic_file(&path).unwrap();

        assert_eq!(fs::read_to_string(&path).unwrap(), "{\"version\":1}\n");
        assert!(!backup.exists());
    }
}
