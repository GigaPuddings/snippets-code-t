use crate::app_config::{AppConfig, AppConfigManager};
use crate::markdown::{AttachmentSettings, WorkspaceManager};
use chrono::{DateTime, SecondsFormat, Utc};
use log::{info, warn};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::collections::{BTreeMap, BTreeSet};
use std::fs;
use std::path::{Component, Path, PathBuf};
use std::sync::{Arc, RwLock};
use std::time::SystemTime;
use tauri::{AppHandle, Emitter, Manager};
use uuid::Uuid;

pub const SYNC_FORMAT_VERSION: u32 = 2;
pub const CONTENT_SCHEMA_VERSION: u32 = 1;
pub const PREFERENCE_SCHEMA_VERSION: u32 = 1;
const MINIMUM_SYNC_APP_VERSION: &str = "2.1.43";

/// 工作区内唯一允许进入 Git 的应用配置文件。
///
/// `workspace.json` 同时保存界面布局和本机 Git 开关，不能直接提交；同步数据
/// 因此使用独立、精简的投影文件，避免把本机状态混进远端仓库。
const SYNC_FILE: &str = ".snippets-code/sync.json";

const PROTOCOL_FILES: &[&str] = &[SYNC_FILE];

const PREFERENCE_KEYS: &[&str] = &[
    "appearance.theme",
    "general.language",
    "general.autoUpdateCheck",
    "general.autoHideOnBlur",
    "editor.lineNumbers",
    "editor.lineHeight",
    "translation.engine",
    "ocr.engine",
    "ocr.language",
];

const HOTKEY_KEYS: &[&str] = &[
    "search",
    "config",
    "translate",
    "selection_translate",
    "screenshot",
    "screen_recorder",
    "dark_mode",
    "wallpaper_switcher",
];

const VAULT_SETTING_KEYS: &[&str] = &[
    "attachment.pathTemplate",
    "attachment.filenameFormat",
    "attachment.defaultImageScalePercent",
    "attachment.responsiveImages",
    "attachment.showImagePath",
];

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SyncExportReport {
    pub vault_id: String,
    pub files_written: Vec<String>,
    pub managed_attachment_roots: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct SyncImportReport {
    pub found_sync_bundle: bool,
    pub vault_id: Option<String>,
    pub applied_preferences: Vec<String>,
    pub applied_hotkeys: Vec<String>,
    pub applied_vault_settings: Vec<String>,
    pub desired_plugins: Vec<String>,
    pub warnings: Vec<String>,
}

/// Git 仓库中的单文件同步协议。
///
/// 内容数据仍以 Markdown 和受管附件为事实源；这里仅存储严格白名单的可移植
/// 设置。每个设置分组保留字段时钟，因此文件数量减少不会降低冲突合并精度。
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct SyncBundle {
    sync_format_version: u32,
    content_schema_version: u32,
    preference_schema_version: u32,
    vault_id: String,
    minimum_app_version: String,
    #[serde(default)]
    managed_roots: Vec<String>,
    #[serde(default)]
    features: Vec<String>,
    #[serde(default)]
    preferences: SyncMapFile,
    #[serde(default)]
    hotkeys: SyncMapFile,
    #[serde(default)]
    vault_settings: SyncMapFile,
    #[serde(default)]
    desired_plugins: SyncMapFile,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
struct SyncClock {
    updated_at: String,
    modified_by: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
struct SyncField {
    value: Value,
    #[serde(flatten)]
    clock: SyncClock,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct SyncMapFile {
    schema_version: u32,
    #[serde(default)]
    values: BTreeMap<String, SyncField>,
    #[serde(default)]
    tombstones: BTreeMap<String, SyncClock>,
    #[serde(flatten, default)]
    extra: BTreeMap<String, Value>,
}

impl Default for SyncMapFile {
    fn default() -> Self {
        Self {
            schema_version: PREFERENCE_SCHEMA_VERSION,
            values: BTreeMap::new(),
            tombstones: BTreeMap::new(),
            extra: BTreeMap::new(),
        }
    }
}

fn now_rfc3339() -> String {
    Utc::now().to_rfc3339_opts(SecondsFormat::Millis, true)
}

fn path_for(workspace_root: &Path, relative: &str) -> PathBuf {
    workspace_root.join(relative.replace('/', std::path::MAIN_SEPARATOR_STR))
}

fn read_json<T: for<'de> Deserialize<'de>>(path: &Path) -> Result<T, String> {
    crate::json_config::recover_atomic_file(path)?;
    let content =
        fs::read_to_string(path).map_err(|e| format!("读取 {} 失败: {}", path.display(), e))?;
    serde_json::from_str(&content).map_err(|e| format!("解析 {} 失败: {}", path.display(), e))
}

fn read_json_if_exists<T: for<'de> Deserialize<'de>>(path: &Path) -> Result<Option<T>, String> {
    crate::json_config::recover_atomic_file(path)?;
    if !path.is_file() {
        return Ok(None);
    }
    read_json(path).map(Some)
}

fn write_json_atomic<T: Serialize>(path: &Path, value: &T) -> Result<(), String> {
    let content =
        serde_json::to_string_pretty(value).map_err(|e| format!("序列化同步文件失败: {}", e))?;
    if let Ok(existing) = fs::read_to_string(path) {
        // Git for Windows 在 core.autocrlf=true 时通常检出 CRLF。导入后若仅用
        // LF 原样重写，内容哈希虽然不变，Git 仍可能因文件 stat/长度变化把
        // sync.json 暂时显示为待同步。等价内容不落盘，同时保留原换行格式。
        if existing == content || existing.replace("\r\n", "\n") == content {
            return Ok(());
        }
    }
    crate::json_config::write_text_atomic(path, &content)
}

fn validate_sync_bundle(bundle: &SyncBundle) -> Result<(), String> {
    if bundle.sync_format_version > SYNC_FORMAT_VERSION {
        return Err(format!(
            "同步格式版本 {} 高于当前支持版本 {}",
            bundle.sync_format_version, SYNC_FORMAT_VERSION
        ));
    }
    if bundle.content_schema_version > CONTENT_SCHEMA_VERSION
        || bundle.preference_schema_version > PREFERENCE_SCHEMA_VERSION
    {
        return Err("同步数据版本高于当前应用支持范围".to_string());
    }
    Uuid::parse_str(&bundle.vault_id).map_err(|_| "同步数据的 vaultId 无效".to_string())?;
    Ok(())
}

fn read_sync_bundle(workspace_root: &Path) -> Result<Option<SyncBundle>, String> {
    let path = path_for(workspace_root, SYNC_FILE);
    if let Some(bundle) = read_json_if_exists::<SyncBundle>(&path)? {
        validate_sync_bundle(&bundle)?;
        return Ok(Some(bundle));
    }
    Ok(None)
}

fn ensure_device_id(app_handle: &AppHandle) -> Result<String, String> {
    let path = crate::json_config::get_data_dir(app_handle)
        .join("state")
        .join("sync")
        .join("device-id");
    crate::json_config::recover_atomic_file(&path)?;
    if let Ok(value) = fs::read_to_string(&path) {
        let value = value.trim();
        if Uuid::parse_str(value).is_ok() {
            return Ok(value.to_string());
        }
    }

    let id = Uuid::new_v4().to_string();
    crate::json_config::write_text_atomic(&path, &id)
        .map_err(|e| format!("写入本机同步设备 ID 失败: {}", e))?;
    Ok(id)
}

fn update_sync_map(
    mut file: SyncMapFile,
    current: &BTreeMap<String, Value>,
    device_id: &str,
) -> SyncMapFile {
    let updated_at = now_rfc3339();
    file.schema_version = PREFERENCE_SCHEMA_VERSION;

    for (key, value) in current {
        let unchanged = file
            .values
            .get(key)
            .is_some_and(|field| field.value == *value);
        if unchanged {
            continue;
        }

        file.values.insert(
            key.clone(),
            SyncField {
                value: value.clone(),
                clock: SyncClock {
                    updated_at: updated_at.clone(),
                    modified_by: device_id.to_string(),
                },
            },
        );
        file.tombstones.remove(key);
    }

    file
}

fn project_preferences(config: &AppConfig) -> BTreeMap<String, Value> {
    BTreeMap::from([
        (
            "appearance.theme".to_string(),
            Value::String(config.theme.clone()),
        ),
        (
            "general.language".to_string(),
            Value::String(config.language.clone()),
        ),
        (
            "general.autoUpdateCheck".to_string(),
            Value::Bool(config.auto_update_check),
        ),
        (
            "general.autoHideOnBlur".to_string(),
            Value::Bool(config.auto_hide_on_blur),
        ),
        (
            "editor.lineNumbers".to_string(),
            Value::Bool(config.editor.line_numbers),
        ),
        (
            "editor.lineHeight".to_string(),
            serde_json::json!(config.editor.line_height),
        ),
        (
            "translation.engine".to_string(),
            config
                .translation_engine
                .clone()
                .map(Value::String)
                .unwrap_or(Value::Null),
        ),
        (
            "ocr.engine".to_string(),
            config
                .ocr_engine
                .clone()
                .map(Value::String)
                .unwrap_or(Value::Null),
        ),
        (
            "ocr.language".to_string(),
            config
                .ocr_language
                .clone()
                .map(Value::String)
                .unwrap_or(Value::Null),
        ),
    ])
}

fn hotkey_value(value: &Option<String>) -> Value {
    value.clone().map(Value::String).unwrap_or(Value::Null)
}

fn project_hotkeys(config: &AppConfig) -> BTreeMap<String, Value> {
    BTreeMap::from([
        ("search".to_string(), hotkey_value(&config.search_hotkey)),
        ("config".to_string(), hotkey_value(&config.config_hotkey)),
        (
            "translate".to_string(),
            hotkey_value(&config.translate_hotkey),
        ),
        (
            "selection_translate".to_string(),
            hotkey_value(&config.selection_translate_hotkey),
        ),
        (
            "screenshot".to_string(),
            hotkey_value(&config.screenshot_hotkey),
        ),
        (
            "screen_recorder".to_string(),
            hotkey_value(&config.screen_recorder_hotkey),
        ),
        (
            "dark_mode".to_string(),
            hotkey_value(&config.dark_mode_hotkey),
        ),
        (
            "wallpaper_switcher".to_string(),
            hotkey_value(&config.wallpaper_switcher_hotkey),
        ),
    ])
}

fn project_vault_settings(settings: &AttachmentSettings) -> BTreeMap<String, Value> {
    BTreeMap::from([
        (
            "attachment.pathTemplate".to_string(),
            Value::String(settings.path_template.clone()),
        ),
        (
            "attachment.filenameFormat".to_string(),
            Value::String(settings.filename_format.clone()),
        ),
        (
            "attachment.defaultImageScalePercent".to_string(),
            serde_json::json!(settings.default_image_scale_percent),
        ),
        (
            "attachment.responsiveImages".to_string(),
            Value::Bool(settings.responsive_images),
        ),
        (
            "attachment.showImagePath".to_string(),
            Value::Bool(settings.show_image_path),
        ),
    ])
}

fn project_desired_plugins(config: &AppConfig) -> BTreeMap<String, Value> {
    config
        .plugins
        .iter()
        .filter(|(plugin_id, _)| plugin_id.as_str() != "git-sync")
        .map(|(plugin_id, state)| (plugin_id.clone(), Value::Bool(state.enabled)))
        .collect()
}

fn attachment_settings(
    app_handle: &AppHandle,
    workspace_root: &Path,
) -> Result<AttachmentSettings, String> {
    if let Some(state) = app_handle.try_state::<Arc<RwLock<WorkspaceManager>>>() {
        let manager = state
            .read()
            .map_err(|e| format!("获取工作区配置锁失败: {}", e))?;
        return Ok(manager.get_attachment_settings().clone());
    }

    let manager = WorkspaceManager::new(workspace_root.join(".snippets-code"))?;
    Ok(manager.get_attachment_settings().clone())
}

fn normalized_attachment_root(path_template: &str) -> Option<String> {
    let normalized = path_template.trim().replace('\\', "/");
    if normalized.is_empty() || normalized.starts_with('/') || normalized.contains("://") {
        return None;
    }

    let prefix = normalized
        .split("${noteFileName}")
        .next()
        .unwrap_or_default()
        .trim_matches('/');
    if prefix.is_empty() {
        return None;
    }

    let path = Path::new(prefix);
    if path.is_absolute()
        || path.components().any(|component| {
            matches!(
                component,
                Component::ParentDir | Component::RootDir | Component::Prefix(_)
            )
        })
    {
        return None;
    }

    let root = prefix.split('/').next().unwrap_or_default();
    if root.is_empty() || matches!(root, ".git" | ".snippets-code") {
        return None;
    }
    Some(root.to_string())
}

pub fn managed_attachment_roots(workspace_root: &Path) -> Vec<String> {
    let bundle = read_sync_bundle(workspace_root).ok().flatten();
    let configured = bundle
        .as_ref()
        .and_then(|bundle| bundle.vault_settings.values.get("attachment.pathTemplate"))
        .cloned()
        .and_then(|field| field.value.as_str().map(ToOwned::to_owned))
        .and_then(|template| normalized_attachment_root(&template));

    let mut roots = BTreeSet::from(["assets".to_string()]);
    if let Some(root) = configured {
        roots.insert(root);
    }
    if let Some(bundle) = bundle {
        roots.extend(
            bundle
                .managed_roots
                .into_iter()
                .filter(|root| normalized_attachment_root(&format!("{}/file", root)).is_some()),
        );
    }
    roots.into_iter().collect()
}

fn app_config_snapshot(app_handle: &AppHandle) -> Result<AppConfig, String> {
    let state = app_handle
        .try_state::<Arc<RwLock<AppConfigManager>>>()
        .ok_or("AppConfigManager 未初始化".to_string())?;
    let manager = state
        .read()
        .map_err(|e| format!("获取应用配置锁失败: {}", e))?;
    Ok(manager.get_config().clone())
}

fn base_dir(app_handle: &AppHandle, vault_id: &str) -> PathBuf {
    crate::json_config::get_data_dir(app_handle)
        .join("state")
        .join("sync")
        .join(vault_id)
        .join("base")
}

fn save_base_map(
    app_handle: &AppHandle,
    vault_id: &str,
    file_name: &str,
    file: &SyncMapFile,
) -> Result<(), String> {
    write_json_atomic(&base_dir(app_handle, vault_id).join(file_name), file)
}

fn read_base_map(
    app_handle: &AppHandle,
    vault_id: &str,
    file_name: &str,
) -> Result<Option<SyncMapFile>, String> {
    read_json_if_exists(&base_dir(app_handle, vault_id).join(file_name))
}

pub fn export_sync_bundle(
    app_handle: &AppHandle,
    workspace_root: &Path,
) -> Result<SyncExportReport, String> {
    let device_id = ensure_device_id(app_handle)?;
    let config = app_config_snapshot(app_handle)?;
    let attachment = attachment_settings(app_handle, workspace_root)?;
    let existing = read_sync_bundle(workspace_root)?;
    let vault_id = existing
        .as_ref()
        .map(|bundle| bundle.vault_id.clone())
        .unwrap_or_else(|| Uuid::new_v4().to_string());
    let mut managed_roots = normalized_attachment_root(&attachment.path_template)
        .into_iter()
        .collect::<BTreeSet<_>>();
    if let Some(existing) = &existing {
        managed_roots.extend(existing.managed_roots.iter().cloned());
    }
    let managed_roots = managed_roots.into_iter().collect::<Vec<_>>();

    let preferences = update_sync_map(
        existing
            .as_ref()
            .map(|bundle| bundle.preferences.clone())
            .unwrap_or_default(),
        &project_preferences(&config),
        &device_id,
    );
    let hotkeys = update_sync_map(
        existing
            .as_ref()
            .map(|bundle| bundle.hotkeys.clone())
            .unwrap_or_default(),
        &project_hotkeys(&config),
        &device_id,
    );
    let vault_settings = update_sync_map(
        existing
            .as_ref()
            .map(|bundle| bundle.vault_settings.clone())
            .unwrap_or_default(),
        &project_vault_settings(&attachment),
        &device_id,
    );
    let desired_plugins = update_sync_map(
        existing
            .as_ref()
            .map(|bundle| bundle.desired_plugins.clone())
            .unwrap_or_default(),
        &project_desired_plugins(&config),
        &device_id,
    );

    let bundle = SyncBundle {
        sync_format_version: SYNC_FORMAT_VERSION,
        content_schema_version: CONTENT_SCHEMA_VERSION,
        preference_schema_version: PREFERENCE_SCHEMA_VERSION,
        vault_id: vault_id.clone(),
        minimum_app_version: MINIMUM_SYNC_APP_VERSION.to_string(),
        managed_roots: managed_roots.clone(),
        features: vec![
            "content".to_string(),
            "preferences".to_string(),
            "hotkeys".to_string(),
            "vault-settings".to_string(),
            "desired-plugins".to_string(),
        ],
        preferences: preferences.clone(),
        hotkeys: hotkeys.clone(),
        vault_settings: vault_settings.clone(),
        desired_plugins,
    };

    write_json_atomic(&path_for(workspace_root, SYNC_FILE), &bundle)?;

    save_base_map(app_handle, &vault_id, "preferences.json", &preferences)?;
    save_base_map(app_handle, &vault_id, "hotkeys.json", &hotkeys)?;
    save_base_map(
        app_handle,
        &vault_id,
        "vault-settings.json",
        &vault_settings,
    )?;

    info!("✅ [SyncData] 已导出可移植配置，vault={}", vault_id);
    Ok(SyncExportReport {
        vault_id,
        files_written: PROTOCOL_FILES
            .iter()
            .map(|path| (*path).to_string())
            .collect(),
        managed_attachment_roots: managed_roots,
    })
}

fn parse_version(value: &str) -> (u64, u64, u64) {
    let mut parts = value.trim_start_matches('v').split('.').map(|part| {
        part.split(|ch: char| !ch.is_ascii_digit())
            .next()
            .unwrap_or("0")
            .parse::<u64>()
            .unwrap_or(0)
    });
    (
        parts.next().unwrap_or(0),
        parts.next().unwrap_or(0),
        parts.next().unwrap_or(0),
    )
}

fn local_config_modified_at(app_handle: &AppHandle) -> DateTime<Utc> {
    fs::metadata(crate::json_config::get_app_config_file(app_handle))
        .and_then(|metadata| metadata.modified())
        .ok()
        .and_then(|time| time.duration_since(SystemTime::UNIX_EPOCH).ok())
        .and_then(|duration| DateTime::<Utc>::from_timestamp(duration.as_secs() as i64, 0))
        .unwrap_or_else(Utc::now)
}

fn clock_time(clock: &SyncClock) -> Option<DateTime<Utc>> {
    DateTime::parse_from_rfc3339(&clock.updated_at)
        .ok()
        .map(|value| value.with_timezone(&Utc))
}

fn merge_remote_map(
    remote: &mut SyncMapFile,
    base: Option<&SyncMapFile>,
    local: &BTreeMap<String, Value>,
    allowed_keys: &[&str],
    local_modified_at: DateTime<Utc>,
    device_id: &str,
    warnings: &mut Vec<String>,
) -> BTreeMap<String, Value> {
    let mut effective = local.clone();
    let now = now_rfc3339();

    for key in allowed_keys {
        let Some(remote_field) = remote.values.get(*key).cloned() else {
            continue;
        };
        let local_value = local.get(*key).cloned().unwrap_or(Value::Null);
        let base_value = base
            .and_then(|file| file.values.get(*key))
            .map(|field| field.value.clone());

        let choose_remote = match base_value {
            None => true,
            Some(base_value) if local_value == base_value => true,
            Some(base_value) if remote_field.value == base_value => false,
            Some(_) if local_value == remote_field.value => true,
            Some(_) => {
                let remote_time =
                    clock_time(&remote_field.clock).unwrap_or(DateTime::<Utc>::MIN_UTC);
                let remote_wins = remote_time >= local_modified_at;
                warnings.push(format!(
                    "配置 '{}' 在本机和远端均有修改，已采用{}版本",
                    key,
                    if remote_wins { "远端" } else { "本机" }
                ));
                remote_wins
            }
        };

        if choose_remote {
            effective.insert((*key).to_string(), remote_field.value);
        } else {
            effective.insert((*key).to_string(), local_value.clone());
            remote.values.insert(
                (*key).to_string(),
                SyncField {
                    value: local_value,
                    clock: SyncClock {
                        updated_at: now.clone(),
                        modified_by: device_id.to_string(),
                    },
                },
            );
        }
    }

    effective
}

fn bounded_optional_string(value: &Value, key: &str) -> Result<Option<String>, String> {
    if value.is_null() {
        return Ok(None);
    }
    let text = value
        .as_str()
        .ok_or_else(|| format!("配置 '{}' 必须是字符串或 null", key))?
        .trim()
        .to_string();
    if text.len() > 128 {
        return Err(format!("配置 '{}' 长度超过限制", key));
    }
    Ok((!text.is_empty()).then_some(text))
}

fn apply_preferences(
    config: &mut AppConfig,
    values: &BTreeMap<String, Value>,
    report: &mut SyncImportReport,
) {
    let previous = project_preferences(config);
    for key in PREFERENCE_KEYS {
        let Some(value) = values.get(*key) else {
            continue;
        };
        let result =
            match *key {
                "appearance.theme" => value
                    .as_str()
                    .filter(|theme| matches!(*theme, "light" | "dark" | "auto"))
                    .map(|theme| config.theme = theme.to_string())
                    .ok_or_else(|| "主题只允许 light、dark 或 auto".to_string()),
                "general.language" => value
                    .as_str()
                    .filter(|language| matches!(*language, "zh-CN" | "en-US"))
                    .map(|language| config.language = language.to_string())
                    .ok_or_else(|| "语言只允许 zh-CN 或 en-US".to_string()),
                "general.autoUpdateCheck" => value
                    .as_bool()
                    .map(|enabled| config.auto_update_check = enabled)
                    .ok_or_else(|| "必须是布尔值".to_string()),
                "general.autoHideOnBlur" => value
                    .as_bool()
                    .map(|enabled| config.auto_hide_on_blur = enabled)
                    .ok_or_else(|| "必须是布尔值".to_string()),
                "editor.lineNumbers" => value
                    .as_bool()
                    .map(|enabled| config.editor.line_numbers = enabled)
                    .ok_or_else(|| "必须是布尔值".to_string()),
                "editor.lineHeight" => value
                    .as_f64()
                    .filter(|height| height.is_finite() && (1.2..=2.0).contains(height))
                    .map(|height| config.editor.line_height = height)
                    .ok_or_else(|| "行高必须在 1.2 到 2.0 之间".to_string()),
                "translation.engine" => bounded_optional_string(value, key)
                    .map(|engine| config.translation_engine = engine),
                "ocr.engine" => {
                    bounded_optional_string(value, key).map(|engine| config.ocr_engine = engine)
                }
                "ocr.language" => bounded_optional_string(value, key)
                    .map(|language| config.ocr_language = language),
                _ => Ok(()),
            };

        match result {
            Ok(()) if previous.get(*key) != Some(value) => {
                report.applied_preferences.push((*key).to_string())
            }
            Ok(()) => {}
            Err(error) => report
                .warnings
                .push(format!("已跳过无效配置 '{}': {}", key, error)),
        }
    }
}

fn set_hotkey(config: &mut AppConfig, key: &str, value: Option<String>) {
    match key {
        "search" => config.search_hotkey = value,
        "config" => config.config_hotkey = value,
        "translate" => config.translate_hotkey = value,
        "selection_translate" => config.selection_translate_hotkey = value,
        "screenshot" => config.screenshot_hotkey = value,
        "screen_recorder" => config.screen_recorder_hotkey = value,
        "dark_mode" => config.dark_mode_hotkey = value,
        "wallpaper_switcher" => config.wallpaper_switcher_hotkey = value,
        _ => {}
    }
}

fn apply_hotkeys(
    config: &mut AppConfig,
    values: &BTreeMap<String, Value>,
    report: &mut SyncImportReport,
) {
    let previous = project_hotkeys(config);
    let mut occupied = BTreeMap::<String, String>::new();
    for key in HOTKEY_KEYS {
        let Some(value) = values.get(*key) else {
            continue;
        };
        let shortcut = match bounded_optional_string(value, key) {
            Ok(shortcut) => shortcut,
            Err(error) => {
                report
                    .warnings
                    .push(format!("已跳过快捷键 '{}': {}", key, error));
                continue;
            }
        };

        if let Some(shortcut_value) = shortcut.as_deref() {
            if let Err(error) = crate::config::parse_hotkey(shortcut_value) {
                report
                    .warnings
                    .push(format!("已跳过快捷键 '{}': {}", key, error));
                continue;
            }
            let normalized = shortcut_value.to_ascii_uppercase();
            if let Some(existing) = occupied.get(&normalized) {
                report.warnings.push(format!(
                    "快捷键 '{}' 与动作 '{}' 冲突，已跳过动作 '{}'",
                    shortcut_value, existing, key
                ));
                continue;
            }
            occupied.insert(normalized, (*key).to_string());
        }

        set_hotkey(config, key, shortcut);
        if previous.get(*key) != Some(value) {
            report.applied_hotkeys.push((*key).to_string());
        }
    }
}

fn validate_path_template(value: &str) -> Result<String, String> {
    let normalized = value.trim().replace('\\', "/");
    if normalized.is_empty()
        || normalized.starts_with('/')
        || normalized.contains("://")
        || normalized.len() > 240
    {
        return Err("附件路径模板必须是工作区内的相对路径".to_string());
    }
    if normalized_attachment_root(&normalized).is_none() {
        return Err("附件路径模板不能指向工作区外或内部配置目录".to_string());
    }
    Ok(normalized)
}

fn apply_vault_settings(
    settings: &mut AttachmentSettings,
    values: &BTreeMap<String, Value>,
    report: &mut SyncImportReport,
) {
    let previous = project_vault_settings(settings);
    for key in VAULT_SETTING_KEYS {
        let Some(value) = values.get(*key) else {
            continue;
        };
        let result = match *key {
            "attachment.pathTemplate" => value
                .as_str()
                .ok_or_else(|| "必须是字符串".to_string())
                .and_then(validate_path_template)
                .map(|template| settings.path_template = template),
            "attachment.filenameFormat" => value
                .as_str()
                .map(str::trim)
                .filter(|value| !value.is_empty() && value.len() <= 96)
                .map(|value| settings.filename_format = value.to_string())
                .ok_or_else(|| "文件名格式无效".to_string()),
            "attachment.defaultImageScalePercent" => value
                .as_u64()
                .filter(|scale| (10..=200).contains(scale))
                .map(|scale| settings.default_image_scale_percent = scale as u16)
                .ok_or_else(|| "默认图片缩放比例必须在 10 到 200 之间".to_string()),
            "attachment.responsiveImages" => value
                .as_bool()
                .map(|enabled| settings.responsive_images = enabled)
                .ok_or_else(|| "必须是布尔值".to_string()),
            "attachment.showImagePath" => value
                .as_bool()
                .map(|enabled| settings.show_image_path = enabled)
                .ok_or_else(|| "必须是布尔值".to_string()),
            _ => Ok(()),
        };
        match result {
            Ok(()) if previous.get(*key) != Some(value) => {
                report.applied_vault_settings.push((*key).to_string())
            }
            Ok(()) => {}
            Err(error) => report
                .warnings
                .push(format!("已跳过无效工作区配置 '{}': {}", key, error)),
        }
    }
}

fn save_workspace_attachment_settings(
    app_handle: &AppHandle,
    workspace_root: &Path,
    settings: AttachmentSettings,
) -> Result<(), String> {
    if let Some(state) = app_handle.try_state::<Arc<RwLock<WorkspaceManager>>>() {
        let mut manager = state
            .write()
            .map_err(|e| format!("获取工作区配置锁失败: {}", e))?;
        manager.update_attachment_settings(settings);
        return manager.save();
    }

    let mut manager = WorkspaceManager::new(workspace_root.join(".snippets-code"))?;
    manager.update_attachment_settings(settings);
    manager.save()
}

pub fn import_sync_bundle(
    app_handle: &AppHandle,
    workspace_root: &Path,
) -> Result<SyncImportReport, String> {
    let Some(mut bundle) = read_sync_bundle(workspace_root)? else {
        return Ok(SyncImportReport::default());
    };
    if parse_version(env!("CARGO_PKG_VERSION")) < parse_version(&bundle.minimum_app_version) {
        return Err(format!(
            "远端数据要求应用版本不低于 {}，当前版本为 {}",
            bundle.minimum_app_version,
            env!("CARGO_PKG_VERSION")
        ));
    }

    let device_id = ensure_device_id(app_handle)?;
    let local_modified_at = local_config_modified_at(app_handle);
    let mut report = SyncImportReport {
        found_sync_bundle: true,
        vault_id: Some(bundle.vault_id.clone()),
        ..SyncImportReport::default()
    };

    let config_state = app_handle
        .try_state::<Arc<RwLock<AppConfigManager>>>()
        .ok_or("AppConfigManager 未初始化".to_string())?;
    let mut config = {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取应用配置锁失败: {}", e))?;
        manager.get_config().clone()
    };

    let local_preferences = project_preferences(&config);
    let local_hotkeys = project_hotkeys(&config);
    let mut local_vault_settings = attachment_settings(app_handle, workspace_root)?;
    let local_vault_values = project_vault_settings(&local_vault_settings);

    let mut preferences = bundle.preferences.clone();
    let mut hotkeys = bundle.hotkeys.clone();
    let mut vault_settings = bundle.vault_settings.clone();

    let preference_values = merge_remote_map(
        &mut preferences,
        read_base_map(app_handle, &bundle.vault_id, "preferences.json")?.as_ref(),
        &local_preferences,
        PREFERENCE_KEYS,
        local_modified_at,
        &device_id,
        &mut report.warnings,
    );
    let hotkey_values = merge_remote_map(
        &mut hotkeys,
        read_base_map(app_handle, &bundle.vault_id, "hotkeys.json")?.as_ref(),
        &local_hotkeys,
        HOTKEY_KEYS,
        local_modified_at,
        &device_id,
        &mut report.warnings,
    );
    let vault_values = merge_remote_map(
        &mut vault_settings,
        read_base_map(app_handle, &bundle.vault_id, "vault-settings.json")?.as_ref(),
        &local_vault_values,
        VAULT_SETTING_KEYS,
        local_modified_at,
        &device_id,
        &mut report.warnings,
    );

    apply_preferences(&mut config, &preference_values, &mut report);
    apply_hotkeys(&mut config, &hotkey_values, &mut report);
    apply_vault_settings(&mut local_vault_settings, &vault_values, &mut report);

    {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取应用配置写锁失败: {}", e))?;
        manager.update_config(config.clone());
        manager.save()?;
    }
    save_workspace_attachment_settings(app_handle, workspace_root, local_vault_settings)?;

    bundle.sync_format_version = SYNC_FORMAT_VERSION;
    bundle.content_schema_version = CONTENT_SCHEMA_VERSION;
    bundle.preference_schema_version = PREFERENCE_SCHEMA_VERSION;
    bundle.preferences = preferences.clone();
    bundle.hotkeys = hotkeys.clone();
    bundle.vault_settings = vault_settings.clone();
    write_json_atomic(&path_for(workspace_root, SYNC_FILE), &bundle)?;
    save_base_map(
        app_handle,
        &bundle.vault_id,
        "preferences.json",
        &preferences,
    )?;
    save_base_map(app_handle, &bundle.vault_id, "hotkeys.json", &hotkeys)?;
    save_base_map(
        app_handle,
        &bundle.vault_id,
        "vault-settings.json",
        &vault_settings,
    )?;

    report.desired_plugins = bundle
        .desired_plugins
        .values
        .iter()
        .filter_map(|(plugin_id, field)| {
            field
                .value
                .as_bool()
                .filter(|enabled| *enabled)
                .map(|_| plugin_id.clone())
        })
        .collect();

    if !report.applied_hotkeys.is_empty() {
        report
            .warnings
            .extend(crate::hotkey::refresh_imported_shortcuts(
                app_handle,
                &report.applied_hotkeys,
            ));
    }

    let _ = app_handle.emit(
        "language-changed",
        serde_json::json!({ "language": config.language }),
    );
    let _ = app_handle.emit("portable-config-imported", report.clone());

    info!(
        "✅ [SyncData] 已导入可移植配置，vault={}，偏好={}，快捷键={}",
        bundle.vault_id,
        report.applied_preferences.len(),
        report.applied_hotkeys.len()
    );
    Ok(report)
}

fn path_has_forbidden_component(path: &str) -> bool {
    path.split('/').any(|component| {
        matches!(
            component,
            ".git" | ".snippets-code" | "node_modules" | "target" | "dist" | "dist-ssr" | "_tmp"
        )
    })
}

pub fn is_allowed_sync_path(path: &str, attachment_roots: &[String]) -> bool {
    let normalized = path.trim().trim_matches('"').replace('\\', "/");
    if normalized.is_empty()
        || normalized.starts_with('/')
        || normalized.contains("../")
        || normalized.contains('\0')
    {
        return false;
    }

    if matches!(normalized.as_str(), ".gitignore" | ".gitattributes")
        || PROTOCOL_FILES.contains(&normalized.as_str())
    {
        return true;
    }

    if normalized.to_ascii_lowercase().ends_with(".md")
        && !path_has_forbidden_component(&normalized)
    {
        return true;
    }

    attachment_roots.iter().any(|root| {
        normalized == *root
            || normalized
                .strip_prefix(root)
                .is_some_and(|suffix| suffix.starts_with('/'))
    })
}

fn run_git_add(workspace_root: &Path, force: bool, pathspecs: &[String]) -> Result<(), String> {
    if pathspecs.is_empty() {
        return Ok(());
    }
    let mut command = crate::git_common::git_command();
    command.arg("add").arg("-A");
    if force {
        command.arg("-f");
    }
    command.arg("--");
    command.args(pathspecs);
    let output = command
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("暂存同步文件失败: {}", e))?;
    if !output.status.success() {
        return Err(format!(
            "暂存同步文件失败: {}",
            crate::git_common::get_git_stderr(&output)
        ));
    }
    Ok(())
}

fn path_exists_or_tracked(workspace_root: &Path, relative: &str) -> bool {
    if path_for(workspace_root, relative).exists() {
        return true;
    }
    crate::git_common::git_command()
        .args(["ls-files", "--error-unmatch", "--", relative])
        .current_dir(workspace_root)
        .output()
        .is_ok_and(|output| output.status.success())
}

fn markdown_paths(workspace_root: &Path) -> Result<Vec<String>, String> {
    let mut paths = BTreeSet::new();
    for entry in walkdir::WalkDir::new(workspace_root)
        .follow_links(false)
        .into_iter()
        .filter_entry(|entry| {
            if entry.depth() == 0 {
                return true;
            }
            let name = entry.file_name().to_string_lossy();
            !matches!(
                name.as_ref(),
                ".git"
                    | ".snippets-code"
                    | "node_modules"
                    | "target"
                    | "dist"
                    | "dist-ssr"
                    | "_tmp"
            )
        })
    {
        let entry = entry.map_err(|e| format!("扫描 Markdown 同步范围失败: {}", e))?;
        if !entry.file_type().is_file()
            || !entry
                .path()
                .extension()
                .and_then(|value| value.to_str())
                .is_some_and(|extension| extension.eq_ignore_ascii_case("md"))
        {
            continue;
        }
        let relative = entry
            .path()
            .strip_prefix(workspace_root)
            .map_err(|e| format!("计算 Markdown 相对路径失败: {}", e))?
            .to_string_lossy()
            .replace('\\', "/");
        paths.insert(relative);
    }

    // 文件系统扫描看不到已删除文件；从 Git 索引补入已跟踪 Markdown，
    // 使 `git add -A -- <path>` 能正确传播删除。
    let output = crate::git_common::git_command()
        .args(["ls-files", "-z"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("读取已跟踪 Markdown 失败: {}", e))?;
    if output.status.success() {
        for path in output.stdout.split(|byte| *byte == 0) {
            if path.is_empty() {
                continue;
            }
            let path = String::from_utf8_lossy(path).replace('\\', "/");
            if path.to_ascii_lowercase().ends_with(".md") && !path_has_forbidden_component(&path) {
                paths.insert(path);
            }
        }
    }

    Ok(paths.into_iter().collect())
}

fn tracked_paths(workspace_root: &Path) -> Result<Vec<String>, String> {
    let output = crate::git_common::git_command()
        .args(["ls-files", "-z"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("读取 Git 已跟踪文件失败: {}", e))?;
    if !output.status.success() {
        return Err(format!(
            "读取 Git 已跟踪文件失败: {}",
            crate::git_common::get_git_stderr(&output)
        ));
    }
    Ok(output
        .stdout
        .split(|byte| *byte == 0)
        .filter(|path| !path.is_empty())
        .map(|path| String::from_utf8_lossy(path).replace('\\', "/"))
        .collect())
}

pub fn forbidden_tracked_paths(workspace_root: &Path) -> Result<Vec<String>, String> {
    let attachment_roots = managed_attachment_roots(workspace_root);
    Ok(tracked_paths(workspace_root)?
        .into_iter()
        .filter(|path| !is_allowed_sync_path(path, &attachment_roots))
        .collect())
}

fn untrack_forbidden_paths(
    workspace_root: &Path,
    attachment_roots: &[String],
) -> Result<BTreeSet<String>, String> {
    let forbidden = tracked_paths(workspace_root)?
        .into_iter()
        .filter(|path| !is_allowed_sync_path(path, attachment_roots))
        .collect::<BTreeSet<_>>();
    for batch in forbidden.iter().cloned().collect::<Vec<_>>().chunks(100) {
        let output = crate::git_common::git_command()
            .arg("rm")
            .arg("-r")
            .arg("--cached")
            .arg("--ignore-unmatch")
            .arg("--")
            .args(batch)
            .current_dir(workspace_root)
            .output()
            .map_err(|e| format!("从同步索引移除本机数据失败: {}", e))?;
        if !output.status.success() {
            return Err(format!(
                "从同步索引移除本机数据失败: {}",
                crate::git_common::get_git_stderr(&output)
            ));
        }
    }
    if !forbidden.is_empty() {
        warn!(
            "⚠️ [SyncData] 已从 Git 索引移除 {} 个不同步文件；本机文件保持不变",
            forbidden.len()
        );
    }
    Ok(forbidden)
}

fn stage_path_batches(workspace_root: &Path, force: bool, paths: &[String]) -> Result<(), String> {
    for batch in paths.chunks(100) {
        run_git_add(workspace_root, force, batch)?;
    }
    Ok(())
}

fn staged_paths(workspace_root: &Path) -> Result<Vec<String>, String> {
    let output = crate::git_common::git_command()
        .args([
            "diff",
            "--cached",
            "--name-only",
            "-z",
            "--diff-filter=ACDMRTUXB",
        ])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("读取 Git 暂存范围失败: {}", e))?;
    if !output.status.success() {
        return Err(format!(
            "读取 Git 暂存范围失败: {}",
            crate::git_common::get_git_stderr(&output)
        ));
    }
    Ok(output
        .stdout
        .split(|byte| *byte == 0)
        .filter(|path| !path.is_empty())
        .map(|path| String::from_utf8_lossy(path).replace('\\', "/"))
        .collect())
}

fn contains_windows_absolute_path(value: &str) -> bool {
    value.as_bytes().windows(3).any(|window| {
        window[0].is_ascii_alphabetic() && window[1] == b':' && matches!(window[2], b'/' | b'\\')
    })
}

fn validate_protocol_file_content(workspace_root: &Path, path: &str) -> Result<(), String> {
    if !is_sync_protocol_path(path) {
        return Ok(());
    }
    let full_path = path_for(workspace_root, path);
    if !full_path.is_file() {
        return Ok(());
    }
    let content =
        fs::read_to_string(&full_path).map_err(|e| format!("读取同步协议文件失败: {}", e))?;
    let lower = content.to_ascii_lowercase();
    let forbidden = [
        "github_pat_",
        "ghp_",
        "begin private key",
        "\"token\"",
        "\"password\"",
        "\"apikey\"",
        "\"api_key\"",
        "authorization:",
        "file://",
        "/home/",
        "\\users\\",
    ];
    if forbidden.iter().any(|needle| lower.contains(needle))
        || contains_windows_absolute_path(&content)
    {
        return Err(format!(
            "同步协议文件包含疑似凭证或本机绝对路径，已阻止提交: {}",
            path
        ));
    }
    Ok(())
}

pub fn stage_allowed_sync_changes(workspace_root: &Path) -> Result<Vec<String>, String> {
    let attachment_roots = managed_attachment_roots(workspace_root);
    let migration_removals = untrack_forbidden_paths(workspace_root, &attachment_roots)?;

    stage_path_batches(workspace_root, false, &markdown_paths(workspace_root)?)?;

    let attachment_specs = attachment_roots
        .iter()
        .filter(|root| path_exists_or_tracked(workspace_root, root))
        .cloned()
        .collect::<Vec<_>>();
    stage_path_batches(workspace_root, false, &attachment_specs)?;

    let mut protocol_specs = PROTOCOL_FILES
        .iter()
        .filter(|path| path_exists_or_tracked(workspace_root, path))
        .map(|path| (*path).to_string())
        .collect::<Vec<_>>();
    for path in [".gitignore", ".gitattributes"] {
        if path_exists_or_tracked(workspace_root, path) {
            protocol_specs.push(path.to_string());
        }
    }
    stage_path_batches(workspace_root, true, &protocol_specs)?;

    let staged = staged_paths(workspace_root)?;
    let forbidden = staged
        .iter()
        .filter(|path| {
            !is_allowed_sync_path(path, &attachment_roots)
                && !migration_removals.contains(path.as_str())
        })
        .cloned()
        .collect::<Vec<_>>();
    if !forbidden.is_empty() {
        return Err(format!(
            "Git 暂存区包含不同步的本机数据，请先取消暂存后重试: {}",
            forbidden.join(", ")
        ));
    }

    for path in &staged {
        validate_protocol_file_content(workspace_root, path)?;
    }

    Ok(staged)
}

pub fn is_sync_protocol_path(path: &str) -> bool {
    let normalized = path.replace('\\', "/");
    normalized == SYNC_FILE
}

pub fn is_attachment_path(workspace_root: &Path, path: &str) -> bool {
    let normalized = path.replace('\\', "/");
    managed_attachment_roots(workspace_root).iter().any(|root| {
        normalized == *root
            || normalized
                .strip_prefix(root)
                .is_some_and(|suffix| suffix.starts_with('/'))
    })
}

fn git_stage_file(workspace_root: &Path, stage: u8, path: &str) -> Result<Option<Vec<u8>>, String> {
    let output = crate::git_common::git_command()
        .args(["show", &format!(":{}:{}", stage, path)])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("读取 Git 冲突阶段 {} 失败: {}", stage, e))?;
    if output.status.success() {
        Ok(Some(output.stdout))
    } else {
        Ok(None)
    }
}

fn field_order(field: &SyncField) -> (&str, &str) {
    (&field.clock.updated_at, &field.clock.modified_by)
}

fn choose_merged_field(
    base: Option<&SyncField>,
    ours: Option<&SyncField>,
    theirs: Option<&SyncField>,
) -> Option<SyncField> {
    if ours == theirs {
        return ours.cloned();
    }
    if ours == base {
        return theirs.cloned();
    }
    if theirs == base {
        return ours.cloned();
    }
    match (ours, theirs) {
        (Some(ours), Some(theirs)) => {
            if field_order(theirs) > field_order(ours) {
                Some(theirs.clone())
            } else {
                Some(ours.clone())
            }
        }
        (Some(ours), None) => Some(ours.clone()),
        (None, Some(theirs)) => Some(theirs.clone()),
        (None, None) => None,
    }
}

fn choose_merged_clock(
    base: Option<&SyncClock>,
    ours: Option<&SyncClock>,
    theirs: Option<&SyncClock>,
) -> Option<SyncClock> {
    if ours == theirs {
        return ours.cloned();
    }
    if ours == base {
        return theirs.cloned();
    }
    if theirs == base {
        return ours.cloned();
    }
    match (ours, theirs) {
        (Some(ours), Some(theirs)) => {
            if (&theirs.updated_at, &theirs.modified_by) > (&ours.updated_at, &ours.modified_by) {
                Some(theirs.clone())
            } else {
                Some(ours.clone())
            }
        }
        (Some(ours), None) => Some(ours.clone()),
        (None, Some(theirs)) => Some(theirs.clone()),
        (None, None) => None,
    }
}

fn merge_sync_map_files(
    base: Option<&SyncMapFile>,
    ours: &SyncMapFile,
    theirs: &SyncMapFile,
) -> Result<SyncMapFile, String> {
    let schema_version = ours.schema_version.max(theirs.schema_version);
    if schema_version > PREFERENCE_SCHEMA_VERSION {
        return Err(format!(
            "冲突配置 schemaVersion={} 高于当前支持版本 {}",
            schema_version, PREFERENCE_SCHEMA_VERSION
        ));
    }

    let value_keys = ours
        .values
        .keys()
        .chain(theirs.values.keys())
        .chain(base.into_iter().flat_map(|file| file.values.keys()))
        .cloned()
        .collect::<BTreeSet<_>>();
    let tombstone_keys = ours
        .tombstones
        .keys()
        .chain(theirs.tombstones.keys())
        .chain(base.into_iter().flat_map(|file| file.tombstones.keys()))
        .cloned()
        .collect::<BTreeSet<_>>();

    let mut values = BTreeMap::new();
    for key in value_keys {
        if let Some(field) = choose_merged_field(
            base.and_then(|file| file.values.get(&key)),
            ours.values.get(&key),
            theirs.values.get(&key),
        ) {
            values.insert(key, field);
        }
    }

    let mut tombstones = BTreeMap::new();
    for key in tombstone_keys {
        if let Some(clock) = choose_merged_clock(
            base.and_then(|file| file.tombstones.get(&key)),
            ours.tombstones.get(&key),
            theirs.tombstones.get(&key),
        ) {
            tombstones.insert(key, clock);
        }
    }

    let mut extra = theirs.extra.clone();
    extra.extend(ours.extra.clone());
    Ok(SyncMapFile {
        schema_version,
        values,
        tombstones,
        extra,
    })
}

fn parse_sync_bundle_bytes(bytes: &[u8], stage: &str) -> Result<SyncBundle, String> {
    let bundle: SyncBundle = serde_json::from_slice(bytes)
        .map_err(|e| format!("解析 sync.json 的{}版本失败: {}", stage, e))?;
    validate_sync_bundle(&bundle)?;
    Ok(bundle)
}

fn merge_sync_bundles(
    base: Option<&SyncBundle>,
    ours: &SyncBundle,
    theirs: &SyncBundle,
) -> Result<SyncBundle, String> {
    if ours.vault_id != theirs.vault_id {
        return Err("同步配置属于不同 vault，不能自动合并".to_string());
    }
    let sync_format_version = ours.sync_format_version.max(theirs.sync_format_version);
    let content_schema_version = ours
        .content_schema_version
        .max(theirs.content_schema_version);
    let preference_schema_version = ours
        .preference_schema_version
        .max(theirs.preference_schema_version);
    if sync_format_version > SYNC_FORMAT_VERSION
        || content_schema_version > CONTENT_SCHEMA_VERSION
        || preference_schema_version > PREFERENCE_SCHEMA_VERSION
    {
        return Err("同步配置版本高于当前应用支持范围".to_string());
    }

    let managed_roots = ours
        .managed_roots
        .iter()
        .chain(theirs.managed_roots.iter())
        .cloned()
        .collect::<BTreeSet<_>>()
        .into_iter()
        .collect();
    let features = ours
        .features
        .iter()
        .chain(theirs.features.iter())
        .cloned()
        .collect::<BTreeSet<_>>()
        .into_iter()
        .collect();
    let minimum_app_version =
        if parse_version(&ours.minimum_app_version) >= parse_version(&theirs.minimum_app_version) {
            ours.minimum_app_version.clone()
        } else {
            theirs.minimum_app_version.clone()
        };

    let merged = SyncBundle {
        sync_format_version,
        content_schema_version,
        preference_schema_version,
        vault_id: ours.vault_id.clone(),
        minimum_app_version,
        managed_roots,
        features,
        preferences: merge_sync_map_files(
            base.map(|bundle| &bundle.preferences),
            &ours.preferences,
            &theirs.preferences,
        )?,
        hotkeys: merge_sync_map_files(
            base.map(|bundle| &bundle.hotkeys),
            &ours.hotkeys,
            &theirs.hotkeys,
        )?,
        vault_settings: merge_sync_map_files(
            base.map(|bundle| &bundle.vault_settings),
            &ours.vault_settings,
            &theirs.vault_settings,
        )?,
        desired_plugins: merge_sync_map_files(
            base.map(|bundle| &bundle.desired_plugins),
            &ours.desired_plugins,
            &theirs.desired_plugins,
        )?,
    };
    validate_sync_bundle(&merged)?;
    Ok(merged)
}

/// 自动解决单文件同步协议的 Git 冲突。
pub fn resolve_sync_protocol_conflicts(
    workspace_root: &Path,
    conflict_files: &[String],
) -> Result<bool, String> {
    if conflict_files.is_empty()
        || conflict_files
            .iter()
            .any(|path| !is_sync_protocol_path(path))
    {
        return Ok(false);
    }

    let mut resolved_paths = Vec::new();

    for path in conflict_files {
        let ours = git_stage_file(workspace_root, 2, path)?;
        let theirs = git_stage_file(workspace_root, 3, path)?;
        let (Some(ours), Some(theirs)) = (ours, theirs) else {
            return Ok(false);
        };

        let base = git_stage_file(workspace_root, 1, path)?
            .map(|bytes| parse_sync_bundle_bytes(&bytes, "基线"))
            .transpose()?;
        let ours = parse_sync_bundle_bytes(&ours, "本机")?;
        let theirs = parse_sync_bundle_bytes(&theirs, "远端")?;
        let merged = merge_sync_bundles(base.as_ref(), &ours, &theirs)?;
        write_json_atomic(&path_for(workspace_root, path), &merged)?;
        validate_protocol_file_content(workspace_root, path)?;
        resolved_paths.push(path.clone());
    }

    run_git_add(workspace_root, true, &resolved_paths)?;
    let remaining = crate::git_common::git_command()
        .args(["diff", "--name-only", "--diff-filter=U"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("检查剩余 Git 冲突失败: {}", e))?;
    if !remaining.status.success() || !remaining.stdout.is_empty() {
        return Ok(false);
    }

    let commit = crate::git_common::git_command()
        .args(["commit", "--no-edit"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("提交自动合并的同步配置失败: {}", e))?;
    if !commit.status.success() {
        return Err(format!(
            "提交自动合并的同步配置失败: {}",
            crate::git_common::get_git_stderr(&commit)
        ));
    }
    info!(
        "✅ [SyncData] 已按字段时钟自动合并 {} 个同步配置冲突",
        resolved_paths.len()
    );
    Ok(true)
}
