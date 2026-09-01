use crate::config::control_logging;
use crate::json_config;
use crate::window::create_update_window;
use crate::APP;
use base64::{engine::general_purpose, Engine as _};
use minisign_verify::{PublicKey, Signature};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::{
    fs,
    fs::File,
    io::Write,
    path::{Path, PathBuf},
};
use tauri::{AppHandle, Emitter, Manager};
use tauri_plugin_notification::NotificationExt;
use tauri_plugin_updater::{Update, UpdaterExt};
use uuid::Uuid;

const UPDATE_CACHE_DIR: &str = "updates";
const UPDATE_CACHE_METADATA_FILE: &str = "installer.json";
const UPDATE_CACHE_FILE_PREFIX: &str = "snippets-code-update-";

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct UpdateInfo {
    pub version: String,
    pub notes: String,
    pub pub_date: Option<String>,
}

#[derive(Clone, serde::Serialize)]
struct DownloadProgress {
    event: String,
    data: ProgressData,
}

#[derive(Clone, serde::Serialize)]
struct ProgressData {
    chunk_length: Option<u64>,
    content_length: Option<u64>,
    total_downloaded: u64,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct UpdateInstallerCacheStatus {
    cached: bool,
    install_on_restart: bool,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
struct CachedUpdateInstaller {
    version: String,
    download_url: String,
    signature: String,
    sha256: String,
    file_name: String,
    cached_at: String,
}

struct CachedInstaller {
    path: PathBuf,
    bytes: Vec<u8>,
}

pub fn consume_update_restart_pending(app: &AppHandle) -> bool {
    let pending = json_config::get_app_config_value(app, "update_restart_pending").unwrap_or(false);
    if pending {
        log::info!("[Updater] consuming post-update restart marker");
        let _ = json_config::set_app_config_value(app, "update_restart_pending", false);
    }
    pending
}

pub fn is_update_install_on_restart_enabled(app: &AppHandle) -> bool {
    json_config::get_app_config_value(app, "update_install_on_restart").unwrap_or(false)
}

// 检查更新
pub async fn check_update(app: &AppHandle, show_notification: bool) -> Result<bool, String> {
    // info!("Checking for updates...");
    control_logging(false); // 禁用日志存储
    match app.updater() {
        Ok(updater) => match updater.check().await {
            Ok(update) => {
                if let Some(update) = update {
                    persist_update_available(app, &update)?;

                    // 通知前端有更新
                    if let Err(e) = app.emit("update-available", true) {
                        log::warn!("发送更新可用事件失败: {}", e);
                    }

                    control_logging(true); // 启用日志存储
                    Ok(true)
                } else {
                    clear_update_state(app);
                    if show_notification {
                        if let Err(e) = app
                            .notification()
                            .builder()
                            .title("snippets-code") // 在标题中包含应用名
                            .body("检查更新：当前已是最新版本")
                            .show()
                        {
                            log::warn!("显示通知失败: {}", e);
                        }
                    }
                    control_logging(true); // 启用日志存储
                    Ok(false)
                }
            }
            Err(e) => {
                control_logging(true); // 启用日志存储
                Err(format!("检查更新失败: {}", e))
            }
        },
        Err(e) => {
            control_logging(true); // 启用日志存储
            Err(format!("初始化更新器失败: {}", e))
        }
    }
}

// 手动检查更新，并在发现更新时打开更新窗口。
// 托盘菜单、标题栏按钮等入口都应复用该函数，避免各处重复处理检查结果和错误通知。
pub async fn check_update_and_open_window(app: AppHandle) -> Result<bool, String> {
    match check_update(&app, true).await {
        Ok(true) => {
            create_update_window();
            Ok(true)
        }
        Ok(false) => Ok(false),
        Err(e) => {
            log::error!("检查更新失败: {}", e);
            if let Err(notification_error) = app
                .notification()
                .builder()
                .title("snippets-code")
                .body(format!("检查更新失败：{}", e))
                .show()
            {
                log::warn!("显示检查更新失败通知失败: {}", notification_error);
            }
            Err(e)
        }
    }
}

// 获取更新状态
#[tauri::command]
pub fn get_update_status(app: AppHandle) -> bool {
    json_config::get_app_config_value(&app, "update_available").unwrap_or(false)
}

// 获取更新信息
#[tauri::command]
pub fn get_update_info(app: AppHandle) -> Option<UpdateInfo> {
    if !get_update_status(app.clone()) {
        return None;
    }

    json_config::get_app_config_value(&app, "update_info")
}

#[tauri::command]
pub async fn get_update_installer_cache_status(
    app: AppHandle,
) -> Result<UpdateInstallerCacheStatus, String> {
    let Some(_) = load_cached_update_metadata(&app)? else {
        let _ = json_config::set_app_config_value(&app, "update_install_on_restart", false);
        return Ok(UpdateInstallerCacheStatus {
            cached: false,
            install_on_restart: false,
        });
    };

    let cached = match app.updater() {
        Ok(updater) => match updater.check().await {
            Ok(Some(update)) => read_cached_update_installer(&app, &update)?.is_some(),
            Ok(None) => {
                clear_update_state(&app);
                false
            }
            Err(error) => {
                log::warn!(
                    "[Updater] 检查缓存对应更新失败，退回本地缓存签名校验: {}",
                    error
                );
                read_cached_update_installer_from_metadata(&app)?.is_some()
            }
        },
        Err(error) => {
            log::warn!(
                "[Updater] 初始化更新器失败，退回本地缓存签名校验: {}",
                error
            );
            read_cached_update_installer_from_metadata(&app)?.is_some()
        }
    };

    if !cached {
        let _ = json_config::set_app_config_value(&app, "update_install_on_restart", false);
    }

    Ok(UpdateInstallerCacheStatus {
        cached,
        install_on_restart: cached && is_update_install_on_restart_enabled(&app),
    })
}

#[tauri::command]
pub async fn download_update_installer(app: AppHandle) -> Result<(), String> {
    let updater = app
        .updater()
        .map_err(|e| format!("初始化更新器失败: {}", e))?;
    let update = updater
        .check()
        .await
        .map_err(|e| format!("检查更新失败: {}", e))?
        .ok_or_else(|| {
            clear_update_state(&app);
            "No update available".to_string()
        })?;

    persist_update_available(&app, &update)?;

    if let Some(cached) = read_cached_update_installer(&app, &update)? {
        let event_app = event_app_handle(&app);
        let content_length = Some(cached.bytes.len() as u64);
        emit_download_progress(&event_app, "Started", None, content_length, 0);
        emit_download_progress(
            &event_app,
            "Finished",
            None,
            content_length,
            cached.bytes.len() as u64,
        );
        emit_download_finished(&event_app);
        return Ok(());
    }

    let event_app = event_app_handle(&app);
    let mut started = false;
    let mut total_downloaded: u64 = 0;
    let bytes = update
        .download(
            |chunk_length, content_length| {
                if !started {
                    started = true;
                    emit_download_progress(&event_app, "Started", None, content_length, 0);
                }

                total_downloaded += chunk_length as u64;
                emit_download_progress(
                    &event_app,
                    "Progress",
                    Some(chunk_length as u64),
                    content_length,
                    total_downloaded,
                );
            },
            || {},
        )
        .await
        .map_err(|e| format!("下载安装包失败: {}", e))?;

    let cache_dir = update_cache_dir(&app)?;
    let file_name = cached_installer_file_name(&update);
    let installer_path = cache_dir.join(&file_name);
    write_bytes_atomic(&installer_path, &bytes)
        .map_err(|e| format!("写入更新安装包缓存失败: {}", e))?;

    let metadata = CachedUpdateInstaller {
        version: update.version.clone(),
        download_url: update.download_url.as_str().to_string(),
        signature: update.signature.trim().to_string(),
        sha256: sha256_hex(&bytes),
        file_name: file_name.clone(),
        cached_at: chrono::Utc::now().to_rfc3339(),
    };
    write_cached_update_metadata(&app, &metadata)?;
    cleanup_stale_update_cache_files(&app, Some(&file_name));

    let _ = json_config::set_app_config_value(&app, "update_install_on_restart", false);

    let content_length = Some(bytes.len() as u64);
    emit_download_progress(
        &event_app,
        "Finished",
        None,
        content_length,
        bytes.len() as u64,
    );
    emit_download_finished(&event_app);

    Ok(())
}

#[tauri::command]
pub async fn set_update_install_on_restart(app: AppHandle, enabled: bool) -> Result<(), String> {
    if enabled && read_cached_update_installer_from_metadata(&app)?.is_none() {
        return Err("安装包缓存不存在或已失效，请重新下载".to_string());
    }

    json_config::set_app_config_value(&app, "update_install_on_restart", enabled)?;
    Ok(())
}

#[tauri::command]
pub async fn install_cached_update(app: AppHandle) -> Result<(), String> {
    match app.updater() {
        Ok(updater) => match updater.check().await {
            Ok(Some(update)) => {
                let cached = read_cached_update_installer(&app, &update)?
                    .ok_or_else(|| "安装包缓存不存在或已失效，请重新下载".to_string())?;
                install_cached_update_package(app, cached, Some(update))
            }
            Ok(None) => {
                clear_update_state(&app);
                Err("No update available".to_string())
            }
            Err(error) => {
                log::warn!(
                    "[Updater] 安装缓存包前检查更新失败，尝试使用本地缓存: {}",
                    error
                );
                install_cached_update_from_metadata(app)
            }
        },
        Err(error) => {
            log::warn!(
                "[Updater] 初始化更新器失败，尝试使用本地缓存安装: {}",
                error
            );
            install_cached_update_from_metadata(app)
        }
    }
}

pub async fn install_cached_update_on_restart(app: AppHandle) -> Result<(), String> {
    if !is_update_install_on_restart_enabled(&app) {
        return Ok(());
    }

    let cached = match read_cached_update_installer_from_metadata(&app)? {
        Some(cached) => cached,
        None => {
            let _ = json_config::set_app_config_value(&app, "update_install_on_restart", false);
            return Err("安装包缓存不存在或已失效，请重新下载".to_string());
        }
    };

    #[cfg(windows)]
    if is_windows_executable_installer(&cached.path) {
        return launch_cached_windows_installer_and_exit(&app, &cached.path);
    }

    let updater = app
        .updater()
        .map_err(|e| format!("初始化更新器失败: {}", e))?;
    let update = updater
        .check()
        .await
        .map_err(|e| format!("检查更新失败: {}", e))?
        .ok_or_else(|| {
            clear_update_state(&app);
            "No update available".to_string()
        })?;

    let cached = read_cached_update_installer(&app, &update)?
        .ok_or_else(|| "安装包缓存不存在或已失效，请重新下载".to_string())?;
    install_cached_update_package(app, cached, Some(update))
}

// 保留旧命令兼容：旧入口仍然可以一键下载并启动安装。
#[tauri::command]
pub async fn perform_update(app: AppHandle) -> Result<(), String> {
    download_update_installer(app.clone()).await?;
    install_cached_update(app).await
}

#[tauri::command]
pub async fn check_update_manually(app: AppHandle) -> Result<bool, String> {
    check_update_and_open_window(app).await
}

fn persist_update_available(app: &AppHandle, update: &Update) -> Result<(), String> {
    let update_info = UpdateInfo {
        version: update.version.clone(),
        notes: update.body.clone().unwrap_or_default(),
        pub_date: update.date.map(|d| d.to_string()),
    };

    json_config::set_app_config_value(app, "update_available", true)?;
    json_config::set_app_config_value(app, "update_info", update_info)?;
    Ok(())
}

fn clear_update_state(app: &AppHandle) {
    let _ = json_config::set_app_config_value(app, "update_available", false);
    let _ = json_config::set_app_config_value::<Option<UpdateInfo>>(app, "update_info", None);
    let _ = json_config::set_app_config_value(app, "update_install_on_restart", false);
    clear_cached_update_installer(app);
}

fn set_update_install_started(app: &AppHandle) -> Result<(), String> {
    json_config::set_app_config_value(app, "update_restart_pending", true)?;
    json_config::set_app_config_value(app, "update_install_on_restart", false)?;
    Ok(())
}

fn event_app_handle(app: &AppHandle) -> AppHandle {
    APP.get().cloned().unwrap_or_else(|| app.clone())
}

fn emit_download_progress(
    app: &AppHandle,
    event: &str,
    chunk_length: Option<u64>,
    content_length: Option<u64>,
    total_downloaded: u64,
) {
    let progress = DownloadProgress {
        event: event.to_string(),
        data: ProgressData {
            chunk_length,
            content_length,
            total_downloaded,
        },
    };

    if let Err(e) = app.emit("download-progress", &progress) {
        log::warn!("发送下载进度事件失败: {}", e);
    }
}

fn emit_download_finished(app: &AppHandle) {
    if let Err(e) = app.emit("download-finished", ()) {
        log::warn!("发送下载完成事件失败: {}", e);
    }
}

fn update_cache_dir(app: &AppHandle) -> Result<PathBuf, String> {
    let cache_dir = app
        .path()
        .app_cache_dir()
        .map_err(|e| format!("获取应用缓存目录失败: {}", e))?
        .join(UPDATE_CACHE_DIR);
    fs::create_dir_all(&cache_dir)
        .map_err(|e| format!("创建更新缓存目录失败 {}: {}", cache_dir.display(), e))?;
    Ok(cache_dir)
}

fn update_cache_metadata_path(app: &AppHandle) -> Result<PathBuf, String> {
    Ok(update_cache_dir(app)?.join(UPDATE_CACHE_METADATA_FILE))
}

fn load_cached_update_metadata(app: &AppHandle) -> Result<Option<CachedUpdateInstaller>, String> {
    let metadata_path = update_cache_metadata_path(app)?;
    if !metadata_path.is_file() {
        return Ok(None);
    }

    let content = fs::read_to_string(&metadata_path)
        .map_err(|e| format!("读取更新缓存元数据失败 {}: {}", metadata_path.display(), e))?;
    match serde_json::from_str::<CachedUpdateInstaller>(&content) {
        Ok(metadata) => Ok(Some(metadata)),
        Err(error) => {
            log::warn!("[Updater] 更新缓存元数据已损坏，将清理缓存: {}", error);
            clear_cached_update_installer(app);
            Ok(None)
        }
    }
}

fn write_cached_update_metadata(
    app: &AppHandle,
    metadata: &CachedUpdateInstaller,
) -> Result<(), String> {
    let metadata_path = update_cache_metadata_path(app)?;
    let content = serde_json::to_string_pretty(metadata)
        .map_err(|e| format!("序列化更新缓存元数据失败: {}", e))?;
    json_config::write_text_atomic(&metadata_path, &content)
        .map_err(|e| format!("写入更新缓存元数据失败: {}", e))
}

fn read_cached_update_installer(
    app: &AppHandle,
    update: &Update,
) -> Result<Option<CachedInstaller>, String> {
    let Some(metadata) = load_cached_update_metadata(app)? else {
        return Ok(None);
    };

    if !metadata_matches_update(&metadata, update) {
        log::info!(
            "[Updater] 更新缓存不匹配最新版本，清理旧缓存: cached={} latest={}",
            metadata.version,
            update.version
        );
        clear_cached_update_installer(app);
        return Ok(None);
    }

    read_cached_installer_file(app, &metadata)
}

fn read_cached_update_installer_from_metadata(
    app: &AppHandle,
) -> Result<Option<CachedInstaller>, String> {
    let Some(metadata) = load_cached_update_metadata(app)? else {
        return Ok(None);
    };

    if normalize_version(&metadata.version)
        == normalize_version(&app.package_info().version.to_string())
    {
        clear_update_state(app);
        return Ok(None);
    }

    read_cached_installer_file(app, &metadata)
}

fn read_cached_installer_file(
    app: &AppHandle,
    metadata: &CachedUpdateInstaller,
) -> Result<Option<CachedInstaller>, String> {
    if !is_update_cache_file_name(&metadata.file_name) {
        log::warn!("[Updater] 更新缓存文件名不合法，将清理缓存");
        clear_cached_update_installer(app);
        return Ok(None);
    }

    let installer_path = update_cache_dir(app)?.join(&metadata.file_name);
    let bytes = match fs::read(&installer_path) {
        Ok(bytes) => bytes,
        Err(error) if error.kind() == std::io::ErrorKind::NotFound => {
            clear_cached_update_installer(app);
            return Ok(None);
        }
        Err(error) => {
            return Err(format!(
                "读取更新安装包缓存失败 {}: {}",
                installer_path.display(),
                error
            ))
        }
    };

    let actual_sha256 = sha256_hex(&bytes);
    if actual_sha256 != metadata.sha256 {
        log::warn!("[Updater] 更新缓存 SHA-256 不匹配，将清理缓存");
        clear_cached_update_installer(app);
        return Ok(None);
    }

    if let Err(error) = verify_update_signature(app, &bytes, &metadata.signature) {
        log::warn!("[Updater] 更新缓存签名校验失败，将清理缓存: {}", error);
        clear_cached_update_installer(app);
        return Ok(None);
    }

    Ok(Some(CachedInstaller {
        path: installer_path,
        bytes,
    }))
}

fn metadata_matches_update(metadata: &CachedUpdateInstaller, update: &Update) -> bool {
    normalize_version(&metadata.version) == normalize_version(&update.version)
        && metadata.download_url == update.download_url.as_str()
        && metadata.signature == update.signature.trim()
}

fn normalize_version(version: &str) -> &str {
    version.trim().trim_start_matches('v')
}

fn cached_installer_file_name(update: &Update) -> String {
    let mut hasher = Sha256::new();
    hasher.update(normalize_version(&update.version).as_bytes());
    hasher.update([0]);
    hasher.update(update.download_url.as_str().as_bytes());
    hasher.update([0]);
    hasher.update(update.signature.trim().as_bytes());
    let digest = hex::encode(hasher.finalize());
    let digest = &digest[..16];
    let version = sanitize_cache_segment(normalize_version(&update.version));
    let extension = installer_extension(update);

    format!("{UPDATE_CACHE_FILE_PREFIX}{version}-{digest}.{extension}")
}

fn installer_extension(update: &Update) -> &'static str {
    let path = update.download_url.path().to_ascii_lowercase();
    if path.ends_with(".msi") {
        "msi"
    } else if path.ends_with(".zip") {
        "zip"
    } else {
        "exe"
    }
}

fn sanitize_cache_segment(value: &str) -> String {
    let sanitized: String = value
        .chars()
        .map(|character| {
            if character.is_ascii_alphanumeric() || matches!(character, '.' | '-' | '_') {
                character
            } else {
                '-'
            }
        })
        .collect();

    if sanitized.is_empty() {
        "unknown".to_string()
    } else {
        sanitized
    }
}

fn sha256_hex(bytes: &[u8]) -> String {
    let mut hasher = Sha256::new();
    hasher.update(bytes);
    hex::encode(hasher.finalize())
}

fn updater_pubkey(app: &AppHandle) -> Result<String, String> {
    app.config()
        .plugins
        .0
        .get("updater")
        .and_then(|value| value.get("pubkey"))
        .and_then(|value| value.as_str())
        .filter(|value| !value.trim().is_empty())
        .map(|value| value.to_string())
        .ok_or_else(|| "更新器公钥未配置".to_string())
}

fn verify_update_signature(
    app: &AppHandle,
    bytes: &[u8],
    release_signature: &str,
) -> Result<(), String> {
    let pub_key_decoded = base64_to_string(&updater_pubkey(app)?)?;
    let public_key =
        PublicKey::decode(&pub_key_decoded).map_err(|e| format!("解析更新公钥失败: {}", e))?;
    let signature_base64_decoded = base64_to_string(release_signature.trim())?;
    let signature = Signature::decode(&signature_base64_decoded)
        .map_err(|e| format!("解析安装包签名失败: {}", e))?;

    public_key
        .verify(bytes, &signature, true)
        .map_err(|e| format!("安装包签名校验失败: {}", e))?;
    Ok(())
}

fn base64_to_string(base64_string: &str) -> Result<String, String> {
    let decoded_string = general_purpose::STANDARD
        .decode(base64_string)
        .map_err(|e| format!("Base64 解码失败: {}", e))?;
    String::from_utf8(decoded_string).map_err(|_| "签名内容不是有效 UTF-8".to_string())
}

fn write_bytes_atomic(path: &Path, bytes: &[u8]) -> std::io::Result<()> {
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent)?;
    }

    let file_name = path
        .file_name()
        .and_then(|name| name.to_str())
        .unwrap_or("installer");
    let temp_path = path.with_file_name(format!("{file_name}.{}.tmp", Uuid::new_v4()));
    let mut file = File::create(&temp_path)?;
    file.write_all(bytes)?;
    file.sync_all()?;
    drop(file);

    if path.exists() {
        fs::remove_file(path)?;
    }
    fs::rename(temp_path, path)
}

fn cleanup_stale_update_cache_files(app: &AppHandle, keep_file_name: Option<&str>) {
    let Ok(cache_dir) = update_cache_dir(app) else {
        return;
    };
    let Ok(entries) = fs::read_dir(&cache_dir) else {
        return;
    };

    for entry in entries.flatten() {
        let path = entry.path();
        let Some(file_name) = path.file_name().and_then(|name| name.to_str()) else {
            continue;
        };
        if file_name == UPDATE_CACHE_METADATA_FILE || !is_update_cache_file_name(file_name) {
            continue;
        }
        if keep_file_name.is_some_and(|keep| keep == file_name) {
            continue;
        }
        if let Err(error) = fs::remove_file(&path) {
            log::warn!("[Updater] 清理旧更新缓存失败 {}: {}", path.display(), error);
        }
    }
}

fn clear_cached_update_installer(app: &AppHandle) {
    let Ok(cache_dir) = update_cache_dir(app) else {
        return;
    };
    let metadata_path = cache_dir.join(UPDATE_CACHE_METADATA_FILE);
    if metadata_path.exists() {
        if let Err(error) = fs::remove_file(&metadata_path) {
            log::warn!(
                "[Updater] 清理更新缓存元数据失败 {}: {}",
                metadata_path.display(),
                error
            );
        }
    }

    let Ok(entries) = fs::read_dir(&cache_dir) else {
        return;
    };
    for entry in entries.flatten() {
        let path = entry.path();
        let Some(file_name) = path.file_name().and_then(|name| name.to_str()) else {
            continue;
        };
        if !is_update_cache_file_name(file_name) {
            continue;
        }
        if let Err(error) = fs::remove_file(&path) {
            log::warn!("[Updater] 清理更新缓存失败 {}: {}", path.display(), error);
        }
    }
}

fn is_update_cache_file_name(file_name: &str) -> bool {
    file_name.starts_with(UPDATE_CACHE_FILE_PREFIX)
}

fn install_cached_update_package(
    app: AppHandle,
    cached: CachedInstaller,
    update: Option<Update>,
) -> Result<(), String> {
    #[cfg(windows)]
    if is_windows_executable_installer(&cached.path) {
        return launch_cached_windows_installer_and_exit(&app, &cached.path);
    }

    let update = update.ok_or_else(|| "当前平台需要联网确认更新后才能安装缓存包".to_string())?;
    set_update_install_started(&app)?;
    match update.install(cached.bytes) {
        Ok(()) => Ok(()),
        Err(error) => {
            let _ = json_config::set_app_config_value(&app, "update_restart_pending", false);
            Err(format!("启动安装程序失败: {}", error))
        }
    }
}

fn install_cached_update_from_metadata(app: AppHandle) -> Result<(), String> {
    let cached = read_cached_update_installer_from_metadata(&app)?
        .ok_or_else(|| "安装包缓存不存在或已失效，请重新下载".to_string())?;
    install_cached_update_package(app, cached, None)
}

#[cfg(windows)]
fn is_windows_executable_installer(path: &Path) -> bool {
    path.extension()
        .and_then(|extension| extension.to_str())
        .is_some_and(|extension| extension.eq_ignore_ascii_case("exe"))
}

#[cfg(windows)]
fn launch_cached_windows_installer_and_exit(
    app: &AppHandle,
    installer_path: &Path,
) -> Result<(), String> {
    launch_windows_installer_after_exit(installer_path)?;
    if let Err(error) = set_update_install_started(app) {
        log::warn!("[Updater] 写入更新重启标记失败: {}", error);
    }
    crate::tray::prepare_app_for_process_exit(app, "update_install");
    std::process::exit(0);
}

#[cfg(windows)]
fn launch_windows_installer_after_exit(installer_path: &Path) -> Result<(), String> {
    use std::os::windows::process::CommandExt;

    const CREATE_NO_WINDOW: u32 = 0x08000000;

    let pid = std::process::id();
    let installer = powershell_single_quoted(&installer_path.to_string_lossy());
    let script = format!(
        "$ErrorActionPreference='Stop'; \
         try {{ Wait-Process -Id {pid} -Timeout 45 -ErrorAction SilentlyContinue }} catch {{ }}; \
         Start-Sleep -Milliseconds 1800; \
         Start-Process -FilePath {installer} -ArgumentList @('/P','/R','/UPDATE')"
    );

    std::process::Command::new("powershell.exe")
        .arg("-NoProfile")
        .arg("-ExecutionPolicy")
        .arg("Bypass")
        .arg("-EncodedCommand")
        .arg(powershell_encoded_command(&script))
        .creation_flags(CREATE_NO_WINDOW)
        .spawn()
        .map_err(|e| format!("启动安装器辅助进程失败: {}", e))?;

    Ok(())
}

#[cfg(windows)]
fn powershell_single_quoted(value: &str) -> String {
    format!("'{}'", value.replace('\'', "''"))
}

#[cfg(windows)]
fn powershell_encoded_command(script: &str) -> String {
    let bytes: Vec<u8> = script
        .encode_utf16()
        .flat_map(|unit| unit.to_le_bytes())
        .collect();
    general_purpose::STANDARD.encode(bytes)
}
