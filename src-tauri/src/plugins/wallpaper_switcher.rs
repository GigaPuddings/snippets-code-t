use log::{error, info, warn};
use regex::Regex;
use serde::{Deserialize, Serialize};
use std::cmp::Ordering as CmpOrdering;
use std::collections::HashSet;
use std::env;
use std::error::Error as StdError;
use std::ffi::OsStr;
use std::fs;
use std::path::{Path, PathBuf};
use std::sync::{
    atomic::{AtomicU64, Ordering},
    Mutex,
};
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use tauri::{AppHandle, Emitter, Manager};
use walkdir::WalkDir;
use winreg::{enums::HKEY_CURRENT_USER, RegKey};

const PLUGIN_ID: &str = "wallpaper-switcher";
const CONFIG_KEY: &str = "wallpaper_switcher_config";
const USER_AGENT: &str =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) snippets-code-wallpaper-switcher/2.1 Safari/537.36";
const MAX_WALLHAVEN_PAGES: u32 = 100;
const MAX_WALLHAVEN_CACHE_BYTES: u64 = 512 * 1024 * 1024;
const MAX_WALLHAVEN_RECENT_IDS: usize = 500;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub enum WallpaperMode {
    Fixed,
    Folder,
    Wallhaven,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub enum WallpaperOrder {
    Random,
    Sequential,
}

#[derive(Debug, Clone, Default, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub enum FolderSort {
    FileNameAscending,
    FileNameDescending,
    ModifiedAscending,
    ModifiedDescending,
    #[default]
    CreatedAscending,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub enum WallhavenSource {
    Hot,
    Toplist,
    Favorites,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WallpaperConfig {
    pub mode: WallpaperMode,
    pub fixed_image_path: Option<String>,
    pub folder_path: Option<String>,
    pub schedule_enabled: bool,
    pub interval_minutes: u64,
    pub order: WallpaperOrder,
    #[serde(default)]
    pub folder_sort: FolderSort,
    pub auto_restore: bool,
    pub wallhaven_source: WallhavenSource,
    pub wallhaven_category: String,
    pub wallhaven_query: Option<String>,
    #[serde(default)]
    pub folder_seen_paths: Vec<String>,
    #[serde(default)]
    pub wallhaven_seen_ids: Vec<String>,
    #[serde(default)]
    pub wallhaven_history_scope: Option<String>,
    pub last_folder_index: usize,
    pub last_applied_path: Option<String>,
    #[serde(default)]
    pub last_switched_at: Option<i64>,
}

impl Default for WallpaperConfig {
    fn default() -> Self {
        Self {
            mode: WallpaperMode::Folder,
            fixed_image_path: None,
            folder_path: None,
            schedule_enabled: false,
            interval_minutes: 30,
            order: WallpaperOrder::Sequential,
            folder_sort: FolderSort::CreatedAscending,
            auto_restore: true,
            wallhaven_source: WallhavenSource::Hot,
            wallhaven_category: "general".to_string(),
            wallhaven_query: None,
            folder_seen_paths: Vec::new(),
            wallhaven_seen_ids: Vec::new(),
            wallhaven_history_scope: None,
            last_folder_index: 0,
            last_applied_path: None,
            last_switched_at: None,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WallpaperStatus {
    pub supported: bool,
    pub current_path: Option<String>,
    pub current_source: Option<String>,
    pub current_resolution: Option<String>,
    pub scheduler_running: bool,
    pub last_switched_at: Option<i64>,
    pub next_switch_at: Option<i64>,
    pub screen_width: u32,
    pub screen_height: u32,
    pub cache_size_bytes: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct FolderScanResult {
    pub path: String,
    pub count: usize,
    pub images: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WallhavenFetchParams {
    pub source: WallhavenSource,
    pub page: Option<u32>,
    pub query: Option<String>,
    pub category: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WallhavenPage {
    pub data: Vec<WallhavenWallpaper>,
    pub page: u32,
    pub last_page: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WallhavenWallpaper {
    pub id: String,
    pub url: String,
    pub short_url: Option<String>,
    pub path: String,
    pub thumbs: WallhavenThumbs,
    pub resolution: String,
    pub dimension_x: u32,
    pub dimension_y: u32,
    pub file_type: String,
    pub category: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct WallhavenThumbs {
    pub large: String,
    pub original: String,
    pub small: String,
}

#[derive(Debug, Clone)]
struct RuntimeStatus {
    current_path: Option<String>,
    current_source: Option<String>,
    current_resolution: Option<String>,
    last_switched_at: Option<i64>,
    next_switch_at: Option<i64>,
}

static WALLPAPER_CONFIG: Mutex<Option<WallpaperConfig>> = Mutex::new(None);
static WALLPAPER_STATUS: Mutex<RuntimeStatus> = Mutex::new(RuntimeStatus {
    current_path: None,
    current_source: None,
    current_resolution: None,
    last_switched_at: None,
    next_switch_at: None,
});
static SCHEDULER_RUNNING: Mutex<bool> = Mutex::new(false);
static SCHEDULER_INSTANCE_SEQ: AtomicU64 = AtomicU64::new(0);
static ACTIVE_SCHEDULER_INSTANCE_ID: AtomicU64 = AtomicU64::new(0);
static RANDOM_COUNTER: AtomicU64 = AtomicU64::new(0);

fn require_enabled(app_handle: &AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, PLUGIN_ID)
}

fn now_unix_ts() -> i64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_secs() as i64)
        .unwrap_or(0)
}

fn is_supported_image(path: &Path) -> bool {
    path.extension()
        .and_then(|ext| ext.to_str())
        .map(|ext| {
            matches!(
                ext.to_ascii_lowercase().as_str(),
                "jpg" | "jpeg" | "png" | "webp" | "bmp"
            )
        })
        .unwrap_or(false)
}

fn path_to_string(path: &Path) -> String {
    path.to_string_lossy().to_string()
}

fn normalize_existing_file(path: &str) -> Result<PathBuf, String> {
    let path = PathBuf::from(path);
    if !path.is_file() {
        return Err(format!("图片文件不存在: {}", path.display()));
    }
    if !is_supported_image(&path) {
        return Err("请选择 jpg、png、webp 或 bmp 图片".to_string());
    }
    fs::canonicalize(&path).map_err(|e| format!("读取图片路径失败: {} ({})", path.display(), e))
}

fn normalize_existing_dir(path: &str) -> Result<PathBuf, String> {
    let path = PathBuf::from(path);
    if !path.is_dir() {
        return Err(format!("文件夹不存在: {}", path.display()));
    }
    fs::canonicalize(&path).map_err(|e| format!("读取文件夹路径失败: {} ({})", path.display(), e))
}

fn natural_name_cmp(left: &str, right: &str) -> CmpOrdering {
    let left = left.to_lowercase();
    let right = right.to_lowercase();
    let mut left_chars = left.chars().peekable();
    let mut right_chars = right.chars().peekable();

    loop {
        match (left_chars.peek(), right_chars.peek()) {
            (None, None) => return CmpOrdering::Equal,
            (None, Some(_)) => return CmpOrdering::Less,
            (Some(_), None) => return CmpOrdering::Greater,
            (Some(left_char), Some(right_char))
                if left_char.is_ascii_digit() && right_char.is_ascii_digit() =>
            {
                let mut left_digits = String::new();
                let mut right_digits = String::new();
                while left_chars
                    .peek()
                    .is_some_and(|value| value.is_ascii_digit())
                {
                    left_digits.push(left_chars.next().expect("peeked digit exists"));
                }
                while right_chars
                    .peek()
                    .is_some_and(|value| value.is_ascii_digit())
                {
                    right_digits.push(right_chars.next().expect("peeked digit exists"));
                }

                let left_number = left_digits.trim_start_matches('0');
                let right_number = right_digits.trim_start_matches('0');
                match left_number
                    .len()
                    .cmp(&right_number.len())
                    .then_with(|| left_number.cmp(right_number))
                    .then_with(|| left_digits.len().cmp(&right_digits.len()))
                {
                    CmpOrdering::Equal => {}
                    order => return order,
                }
            }
            _ => {
                let left_char = left_chars.next().expect("peeked char exists");
                let right_char = right_chars.next().expect("peeked char exists");
                match left_char.cmp(&right_char) {
                    CmpOrdering::Equal => {}
                    order => return order,
                }
            }
        }
    }
}

fn image_name(path: &Path) -> String {
    path.file_name()
        .and_then(OsStr::to_str)
        .unwrap_or_default()
        .to_string()
}

fn normalize_wallpaper_config_preferences(config: &mut WallpaperConfig) {
    config.order = WallpaperOrder::Sequential;
    config.folder_sort = FolderSort::CreatedAscending;
}

fn image_created_or_modified(path: &Path) -> Option<SystemTime> {
    fs::metadata(path)
        .ok()
        .and_then(|metadata| metadata.created().or_else(|_| metadata.modified()).ok())
}

fn sort_images(images: &mut [PathBuf], folder_sort: &FolderSort) {
    images.sort_by(|left, right| {
        let name_order = natural_name_cmp(&image_name(left), &image_name(right))
            .then_with(|| natural_name_cmp(&path_to_string(left), &path_to_string(right)));
        match folder_sort {
            FolderSort::FileNameAscending => name_order,
            FolderSort::FileNameDescending => name_order.reverse(),
            FolderSort::ModifiedAscending | FolderSort::ModifiedDescending => {
                let modified_order = fs::metadata(left)
                    .and_then(|metadata| metadata.modified())
                    .ok()
                    .cmp(
                        &fs::metadata(right)
                            .and_then(|metadata| metadata.modified())
                            .ok(),
                    );
                let order = modified_order.then(name_order);
                if matches!(folder_sort, FolderSort::ModifiedDescending) {
                    order.reverse()
                } else {
                    order
                }
            }
            FolderSort::CreatedAscending => image_created_or_modified(left)
                .cmp(&image_created_or_modified(right))
                .then(name_order),
        }
    });
}

fn scan_images_in_dir(path: &Path, folder_sort: &FolderSort) -> Result<Vec<PathBuf>, String> {
    let mut images = Vec::new();
    for entry in WalkDir::new(path)
        .follow_links(false)
        .max_depth(3)
        .into_iter()
        .filter_map(Result::ok)
    {
        if entry.file_type().is_file() && is_supported_image(entry.path()) {
            images.push(entry.path().to_path_buf());
        }
    }
    sort_images(&mut images, folder_sort);
    Ok(images)
}

fn cache_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    let dir = app_handle
        .path()
        .app_cache_dir()
        .map_err(|e| format!("获取缓存目录失败: {}", e))?
        .join("wallpaper-switcher");
    fs::create_dir_all(&dir).map_err(|e| format!("创建壁纸缓存目录失败: {}", e))?;
    Ok(dir)
}

fn cache_size(path: &Path) -> u64 {
    WalkDir::new(path)
        .into_iter()
        .filter_map(Result::ok)
        .filter(|entry| entry.file_type().is_file())
        .filter_map(|entry| entry.metadata().ok())
        .map(|metadata| metadata.len())
        .sum()
}

fn is_prepared_wallpaper_cache(path: &Path) -> bool {
    path.file_name()
        .and_then(OsStr::to_str)
        .is_some_and(|name| name.starts_with("prepared-"))
}

fn is_wallhaven_original_cache(path: &Path) -> bool {
    path.file_name()
        .and_then(OsStr::to_str)
        .is_some_and(|name| name.starts_with("wallhaven-"))
}

fn cleanup_prepared_wallpaper_cache(cache: &Path, current_path: &Path) {
    let Ok(entries) = fs::read_dir(cache) else {
        return;
    };
    for entry in entries.filter_map(Result::ok) {
        let path = entry.path();
        if path == current_path || !path.is_file() || !is_prepared_wallpaper_cache(&path) {
            continue;
        }
        if let Err(error) = fs::remove_file(&path) {
            warn!(
                "[WallpaperSwitcher] 删除旧版预处理缓存失败 {}: {}",
                path.display(),
                error
            );
        }
    }
}

fn cleanup_wallhaven_cache_limit(cache: &Path, current_path: &Path) {
    let Ok(entries) = fs::read_dir(cache) else {
        return;
    };
    let mut files = entries
        .filter_map(Result::ok)
        .filter_map(|entry| {
            let path = entry.path();
            if path == current_path || !path.is_file() || !is_wallhaven_original_cache(&path) {
                return None;
            }
            let metadata = entry.metadata().ok()?;
            let modified = metadata.modified().ok();
            Some((path, metadata.len(), modified))
        })
        .collect::<Vec<_>>();
    let mut total = cache_size(cache);
    if total <= MAX_WALLHAVEN_CACHE_BYTES {
        return;
    }

    files.sort_by_key(|(_, _, modified)| *modified);
    for (path, len, _) in files {
        if total <= MAX_WALLHAVEN_CACHE_BYTES {
            break;
        }
        match fs::remove_file(&path) {
            Ok(_) => total = total.saturating_sub(len),
            Err(error) => warn!(
                "[WallpaperSwitcher] 删除过期 Wallhaven 缓存失败 {}: {}",
                path.display(),
                error
            ),
        }
    }
}

fn cleanup_wallpaper_cache_after_apply(app_handle: &AppHandle, current_path: &Path) {
    match cache_dir(app_handle) {
        Ok(cache) => {
            cleanup_prepared_wallpaper_cache(&cache, current_path);
            cleanup_wallhaven_cache_limit(&cache, current_path);
        }
        Err(error) => warn!("[WallpaperSwitcher] 清理壁纸缓存失败: {}", error),
    }
}

fn screen_size(app_handle: &AppHandle) -> (u32, u32) {
    app_handle
        .primary_monitor()
        .ok()
        .flatten()
        .map(|monitor| {
            let size = monitor.size();
            (size.width.max(1), size.height.max(1))
        })
        .unwrap_or((1920, 1080))
}

fn image_resolution(path: &Path) -> Option<String> {
    image::image_dimensions(path)
        .ok()
        .map(|(width, height)| format!("{} × {}", width, height))
}

fn set_windows_wallpaper(path: &Path) -> Result<(), String> {
    use std::os::windows::ffi::OsStrExt;
    use windows::Win32::UI::WindowsAndMessaging::{
        SystemParametersInfoW, SPIF_SENDWININICHANGE, SPIF_UPDATEINIFILE, SPI_SETDESKWALLPAPER,
    };
    use winreg::enums::*;
    use winreg::RegKey;

    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let desktop = hkcu
        .open_subkey_with_flags("Control Panel\\Desktop", KEY_SET_VALUE)
        .map_err(|e| format!("无法打开桌面注册表项: {}", e))?;
    let wallpaper_style = "10";
    desktop
        .set_value("WallpaperStyle", &wallpaper_style)
        .map_err(|e| format!("设置壁纸样式失败: {}", e))?;
    desktop
        .set_value("TileWallpaper", &"0")
        .map_err(|e| format!("设置壁纸平铺状态失败: {}", e))?;

    let mut wide: Vec<u16> = OsStr::new(path)
        .encode_wide()
        .chain(std::iter::once(0))
        .collect();
    unsafe {
        SystemParametersInfoW(
            SPI_SETDESKWALLPAPER,
            0,
            Some(wide.as_mut_ptr() as *mut core::ffi::c_void),
            SPIF_UPDATEINIFILE | SPIF_SENDWININICHANGE,
        )
        .map_err(|e| format!("设置桌面壁纸失败: {}", e))?;
    }
    Ok(())
}

fn update_status_after_switch(path: &Path, source: &str, next_switch_at: Option<i64>) -> i64 {
    let resolution = image_resolution(path);
    let applied_path = path_to_string(path);
    let switched_at = now_unix_ts();
    if let Ok(mut status) = WALLPAPER_STATUS.lock() {
        status.current_path = Some(applied_path.clone());
        status.current_source = Some(source.to_string());
        status.current_resolution = resolution;
        status.last_switched_at = Some(switched_at);
        status.next_switch_at = next_switch_at;
    }
    if let Ok(mut config) = WALLPAPER_CONFIG.lock() {
        if let Some(existing) = config.as_mut() {
            existing.last_applied_path = Some(applied_path);
            existing.last_switched_at = Some(switched_at);
        }
    }
    switched_at
}

fn random_index(len: usize) -> usize {
    if len <= 1 {
        return 0;
    }
    let time_seed = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_nanos() as u64)
        .unwrap_or(0);
    let counter = RANDOM_COUNTER
        .fetch_add(1, Ordering::Relaxed)
        .wrapping_add(1);
    let mixed = time_seed ^ counter.wrapping_mul(0x9E37_79B9_7F4A_7C15) ^ (time_seed >> 33);
    (mixed as usize) % len
}

fn paths_same(left: &Path, right: &Path) -> bool {
    let left = path_to_string(left);
    let right = path_to_string(right);
    left.eq_ignore_ascii_case(&right)
}

fn current_applied_path(config: &WallpaperConfig) -> Option<PathBuf> {
    WALLPAPER_STATUS
        .lock()
        .ok()
        .and_then(|status| status.current_path.clone())
        .or_else(|| config.last_applied_path.clone())
        .map(PathBuf::from)
}

fn wallhaven_id_from_cache_path(path: &Path) -> Option<String> {
    path.file_stem()
        .and_then(OsStr::to_str)
        .and_then(|stem| stem.strip_prefix("wallhaven-"))
        .filter(|id| !id.is_empty())
        .map(ToOwned::to_owned)
}

fn current_wallhaven_id(config: &WallpaperConfig) -> Option<String> {
    current_applied_path(config)
        .as_deref()
        .and_then(wallhaven_id_from_cache_path)
}

fn wallhaven_history_scope(config: &WallpaperConfig) -> String {
    let query = normalize_wallhaven_query(
        config.wallhaven_query.clone(),
        Some(config.wallhaven_category.as_str()),
    )
    .unwrap_or_default();
    format!(
        "{:?}|{}|{}",
        config.wallhaven_source, config.wallhaven_category, query
    )
}

fn prepare_wallhaven_history(config: &mut WallpaperConfig) {
    let scope = wallhaven_history_scope(config);
    if config.wallhaven_history_scope.as_deref() != Some(scope.as_str()) {
        config.wallhaven_seen_ids.clear();
        config.wallhaven_history_scope = Some(scope);
    }
}

fn record_wallhaven_seen(config: &mut WallpaperConfig, wallpaper_id: String) {
    config.wallhaven_seen_ids.retain(|id| id != &wallpaper_id);
    config.wallhaven_seen_ids.push(wallpaper_id);
    if config.wallhaven_seen_ids.len() > MAX_WALLHAVEN_RECENT_IDS {
        let excess = config.wallhaven_seen_ids.len() - MAX_WALLHAVEN_RECENT_IDS;
        config.wallhaven_seen_ids.drain(..excess);
    }
}

fn save_config(app_handle: &AppHandle, config: &WallpaperConfig) -> Result<(), String> {
    let mut config = config.clone();
    normalize_wallpaper_config_preferences(&mut config);
    let config_json =
        serde_json::to_string(&config).map_err(|e| format!("序列化壁纸配置失败: {}", e))?;
    crate::json_config::set_app_config_value(app_handle, CONFIG_KEY, config_json)?;
    if let Ok(mut current) = WALLPAPER_CONFIG.lock() {
        *current = Some(config);
    }
    Ok(())
}

pub fn load_config(app_handle: &AppHandle) -> WallpaperConfig {
    if let Some(config_json) =
        crate::json_config::get_app_config_value::<String>(app_handle, CONFIG_KEY)
    {
        if !config_json.is_empty() {
            if let Ok(mut config) = serde_json::from_str::<WallpaperConfig>(&config_json) {
                normalize_wallpaper_config_preferences(&mut config);
                if let Ok(mut current) = WALLPAPER_CONFIG.lock() {
                    *current = Some(config.clone());
                }
                if let Ok(mut status) = WALLPAPER_STATUS.lock() {
                    if status.current_path.is_none() {
                        status.current_path = config.last_applied_path.clone();
                        status
                            .current_source
                            .get_or_insert_with(|| match config.mode {
                                WallpaperMode::Fixed => "固定图片".to_string(),
                                WallpaperMode::Folder => "本地文件夹".to_string(),
                                WallpaperMode::Wallhaven => "Wallhaven".to_string(),
                            });
                    }
                    if status.last_switched_at.is_none() {
                        status.last_switched_at = config.last_switched_at;
                    }
                }
                return config;
            }
        }
    }
    let config = WallpaperConfig::default();
    if let Ok(mut current) = WALLPAPER_CONFIG.lock() {
        *current = Some(config.clone());
    }
    config
}

async fn download_wallhaven_image(
    app_handle: &AppHandle,
    wallpaper: &WallhavenWallpaper,
) -> Result<PathBuf, String> {
    let client = apply_wallhaven_proxy(
        reqwest::Client::builder()
            .use_native_tls()
            .user_agent(USER_AGENT)
            .connect_timeout(Duration::from_secs(15))
            .timeout(Duration::from_secs(90))
            .redirect(reqwest::redirect::Policy::limited(8)),
    )
    .build()
    .map_err(|e| format!("创建 Wallhaven 客户端失败: {}", e))?;

    let resolved_wallpaper = if wallpaper.short_url.is_none() {
        match fetch_wallhaven_detail(&client, &wallpaper.id).await {
            Ok(Some(detail)) => detail,
            Ok(None) => wallpaper.clone(),
            Err(error) => {
                warn!(
                    "[WallpaperSwitcher] 读取 Wallhaven 详情失败 {}: {}",
                    wallpaper.id, error
                );
                wallpaper.clone()
            }
        }
    } else {
        wallpaper.clone()
    };

    let extension = if resolved_wallpaper.file_type.contains("png") {
        "png"
    } else {
        "jpg"
    };
    let target =
        cache_dir(app_handle)?.join(format!("wallhaven-{}.{}", resolved_wallpaper.id, extension));
    if target.is_file() && fs::metadata(&target).map(|m| m.len() > 0).unwrap_or(false) {
        return Ok(target);
    }

    let bytes = client
        .get(&resolved_wallpaper.path)
        .header(reqwest::header::ACCEPT_ENCODING, "identity")
        .header(reqwest::header::REFERER, "https://wallhaven.cc/")
        .send()
        .await
        .map_err(|e| format!("下载壁纸失败: {}", reqwest_error_details(&e)))?
        .error_for_status()
        .map_err(|e| format!("下载壁纸失败: {}", reqwest_error_details(&e)))?
        .bytes()
        .await
        .map_err(|e| format!("读取壁纸数据失败: {}", reqwest_error_details(&e)))?;

    if bytes.is_empty() {
        return Err("下载的壁纸数据为空".to_string());
    }
    fs::write(&target, &bytes).map_err(|e| format!("保存壁纸缓存失败: {}", e))?;
    Ok(target)
}

async fn apply_wallpaper_path(
    app_handle: &AppHandle,
    source_path: &Path,
    source: &str,
) -> Result<String, String> {
    let source_path = source_path.to_path_buf();
    let wallpaper_path = source_path.clone();
    tauri::async_runtime::spawn_blocking(move || set_windows_wallpaper(&wallpaper_path))
        .await
        .map_err(|e| format!("设置壁纸任务失败: {}", e))??;
    let switched_at = update_status_after_switch(&source_path, source, next_switch_timestamp());
    let applied_path = path_to_string(&source_path);
    let mut config = load_config(app_handle);
    config.last_applied_path = Some(applied_path.clone());
    config.last_switched_at = Some(switched_at);
    save_config(app_handle, &config)?;
    cleanup_wallpaper_cache_after_apply(app_handle, &source_path);
    let _ = app_handle.emit("wallpaper-switcher-changed", ());
    Ok(applied_path)
}

fn next_switch_timestamp() -> Option<i64> {
    WALLPAPER_STATUS
        .lock()
        .ok()
        .and_then(|status| status.next_switch_at)
}

fn reset_next_switch_timestamp(config: &WallpaperConfig) -> Option<i64> {
    let next_switch_at = if config.schedule_enabled && config.auto_restore {
        Some(now_unix_ts().saturating_add((config.interval_minutes.max(1) * 60) as i64))
    } else {
        None
    };
    if let Ok(mut status) = WALLPAPER_STATUS.lock() {
        status.next_switch_at = next_switch_at;
    }
    next_switch_at
}

async fn switch_from_folder(
    app_handle: &AppHandle,
    mut config: WallpaperConfig,
) -> Result<String, String> {
    normalize_wallpaper_config_preferences(&mut config);
    let folder = config
        .folder_path
        .clone()
        .ok_or("请先选择壁纸文件夹".to_string())?;
    let folder = normalize_existing_dir(&folder)?;
    let images = scan_images_in_dir(&folder, &config.folder_sort)?;
    if images.is_empty() {
        return Err("文件夹中没有可用图片".to_string());
    }

    let current_path = current_applied_path(&config);
    let index = match config.order {
        WallpaperOrder::Sequential => current_path
            .as_ref()
            .and_then(|current| images.iter().position(|image| paths_same(image, current)))
            .map(|current_index| (current_index + 1) % images.len())
            .unwrap_or(config.last_folder_index % images.len()),
        WallpaperOrder::Random => {
            let available_paths = images
                .iter()
                .map(|image| path_to_string(image))
                .collect::<HashSet<_>>();
            config
                .folder_seen_paths
                .retain(|path| available_paths.contains(path));
            let mut seen_paths = config
                .folder_seen_paths
                .iter()
                .cloned()
                .collect::<HashSet<_>>();
            let candidates = |seen: &HashSet<String>| {
                images
                    .iter()
                    .enumerate()
                    .filter(|(_, image)| {
                        let image_path = path_to_string(image);
                        !seen.contains(&image_path)
                            && (images.len() == 1
                                || !current_path
                                    .as_ref()
                                    .is_some_and(|current| paths_same(image, current)))
                    })
                    .map(|(candidate_index, _)| candidate_index)
                    .collect::<Vec<_>>()
            };
            let mut unvisited_candidates = candidates(&seen_paths);
            if unvisited_candidates.is_empty() {
                // A random cycle is complete. Start a fresh one while still avoiding
                // the wallpaper that is currently on screen at the cycle boundary.
                config.folder_seen_paths.clear();
                seen_paths.clear();
                unvisited_candidates = candidates(&seen_paths);
            }
            unvisited_candidates[random_index(unvisited_candidates.len())]
        }
    };

    if config.order == WallpaperOrder::Random {
        let selected_path = path_to_string(&images[index]);
        if !config
            .folder_seen_paths
            .iter()
            .any(|path| path == &selected_path)
        {
            config.folder_seen_paths.push(selected_path);
        }
    }
    config.last_folder_index = (index + 1) % images.len();
    save_config(app_handle, &config)?;

    apply_wallpaper_path(app_handle, &images[index], "本地文件夹").await
}

async fn switch_from_fixed(
    app_handle: &AppHandle,
    config: &WallpaperConfig,
) -> Result<String, String> {
    let file = config
        .fixed_image_path
        .clone()
        .ok_or("请先选择固定图片".to_string())?;
    let file = normalize_existing_file(&file)?;
    apply_wallpaper_path(app_handle, &file, "固定图片").await
}

async fn switch_from_wallhaven(
    app_handle: &AppHandle,
    mut config: WallpaperConfig,
) -> Result<String, String> {
    let current_id = current_wallhaven_id(&config);
    prepare_wallhaven_history(&mut config);
    let mut last_error = "Wallhaven 没有返回可用壁纸".to_string();
    for reset_history in [false, true] {
        let seen_ids = config
            .wallhaven_seen_ids
            .iter()
            .cloned()
            .collect::<HashSet<_>>();
        for _ in 0..10 {
            let page = random_index(10) as u32 + 1;
            let params = WallhavenFetchParams {
                source: config.wallhaven_source.clone(),
                page: Some(page),
                query: config.wallhaven_query.clone(),
                category: Some(config.wallhaven_category.clone()),
            };
            let page = fetch_wallhaven_page(app_handle, params).await?;
            if page.data.is_empty() {
                last_error = "Wallhaven 没有返回可用壁纸".to_string();
                continue;
            }

            let candidates = page
                .data
                .into_iter()
                .filter(|wallpaper| {
                    current_id.as_deref() != Some(wallpaper.id.as_str())
                        && !seen_ids.contains(&wallpaper.id)
                })
                .collect::<Vec<_>>();
            if candidates.is_empty() {
                last_error = "Wallhaven 本页的壁纸已在最近轮换中使用，正在尝试其它页面".to_string();
                continue;
            }

            let wallpaper = candidates[random_index(candidates.len())].clone();
            let downloaded = download_wallhaven_image(app_handle, &wallpaper).await?;
            record_wallhaven_seen(&mut config, wallpaper.id);
            save_config(app_handle, &config)?;
            return apply_wallpaper_path(app_handle, &downloaded, "Wallhaven").await;
        }

        if reset_history {
            break;
        }
        // If all sampled pages are exhausted, begin a new online cycle. The
        // current image remains excluded, so two adjacent switches never match.
        config.wallhaven_seen_ids.clear();
    }
    Err(last_error)
}

async fn switch_now_inner(app_handle: &AppHandle) -> Result<String, String> {
    let config = load_config(app_handle);
    match config.mode {
        WallpaperMode::Fixed => switch_from_fixed(app_handle, &config).await,
        WallpaperMode::Folder => switch_from_folder(app_handle, config).await,
        WallpaperMode::Wallhaven => switch_from_wallhaven(app_handle, config).await,
    }
}

pub fn stop_scheduler() {
    ACTIVE_SCHEDULER_INSTANCE_ID.store(0, Ordering::SeqCst);
    if let Ok(mut running) = SCHEDULER_RUNNING.lock() {
        *running = false;
    }
    if let Ok(mut status) = WALLPAPER_STATUS.lock() {
        status.next_switch_at = None;
    }
}

pub fn start_scheduler(app_handle: AppHandle) -> Result<(), String> {
    let config = load_config(&app_handle);
    if !config.schedule_enabled || !config.auto_restore {
        stop_scheduler();
        return Ok(());
    }

    let interval_secs = config.interval_minutes.max(1) * 60;
    let now = now_unix_ts();
    let scheduled_next_switch_at = config
        .last_switched_at
        .map(|last| last.saturating_add(interval_secs as i64))
        .unwrap_or(now.saturating_add(interval_secs as i64));
    let next_switch_at = if scheduled_next_switch_at <= now {
        now.saturating_add(interval_secs as i64)
    } else {
        scheduled_next_switch_at
    };
    let initial_wait_secs = next_switch_at.saturating_sub(now).max(0) as u64;
    let instance_id = SCHEDULER_INSTANCE_SEQ.fetch_add(1, Ordering::SeqCst) + 1;
    ACTIVE_SCHEDULER_INSTANCE_ID.store(instance_id, Ordering::SeqCst);
    if let Ok(mut running) = SCHEDULER_RUNNING.lock() {
        *running = true;
    }
    if let Ok(mut status) = WALLPAPER_STATUS.lock() {
        status.next_switch_at = Some(next_switch_at.max(now));
    }

    tauri::async_runtime::spawn(async move {
        let mut wait_secs = initial_wait_secs;
        loop {
            if wait_secs > 0 {
                tokio::time::sleep(Duration::from_secs(wait_secs)).await;
            }
            if ACTIVE_SCHEDULER_INSTANCE_ID.load(Ordering::SeqCst) != instance_id {
                break;
            }

            let config = load_config(&app_handle);
            if !config.schedule_enabled || !config.auto_restore {
                break;
            }
            let interval_secs = config.interval_minutes.max(1) * 60;
            if let Ok(mut status) = WALLPAPER_STATUS.lock() {
                status.next_switch_at = Some(now_unix_ts() + interval_secs as i64);
            }
            if let Err(error) = switch_now_inner(&app_handle).await {
                warn!("[WallpaperSwitcher] 定时切换失败: {}", error);
                let _ = app_handle.emit(
                    "wallpaper-switcher-error",
                    serde_json::json!({ "message": error }),
                );
            }
            wait_secs = interval_secs;
        }
        if ACTIVE_SCHEDULER_INSTANCE_ID.load(Ordering::SeqCst) == instance_id {
            stop_scheduler();
        }
    });

    Ok(())
}

fn category_bits(category: Option<&str>) -> &'static str {
    match category.unwrap_or("general") {
        "general" => "100",
        "anime" => "010",
        "people" => "001",
        "nature" => "110",
        _ => "100",
    }
}

fn normalize_keyword_alias(value: &str) -> String {
    let lower = value.trim().to_ascii_lowercase();
    match lower.as_str() {
        "natural" | "naturally" | "nature" | "自然" => "nature".to_string(),
        "landscape" | "scenery" | "风景" => "nature landscape".to_string(),
        "山" | "山脉" => "mountain".to_string(),
        "雪山" => "snow mountain".to_string(),
        "湖" => "lake".to_string(),
        "森林" | "树林" => "forest".to_string(),
        "海" => "ocean".to_string(),
        "海边" => "beach".to_string(),
        "天空" => "sky".to_string(),
        "云" => "clouds".to_string(),
        "日落" => "sunset".to_string(),
        "日出" => "sunrise".to_string(),
        "城市" => "city".to_string(),
        "建筑" => "architecture".to_string(),
        "星空" => "stars".to_string(),
        "宇宙" => "space".to_string(),
        "动漫" => "anime".to_string(),
        "人物" => "portrait".to_string(),
        "女孩" => "girl".to_string(),
        _ => value.trim().to_string(),
    }
}

fn append_keyword_once(keyword: &str, required: &str) -> String {
    if keyword
        .split_whitespace()
        .any(|term| term.eq_ignore_ascii_case(required))
    {
        keyword.to_string()
    } else {
        format!("{} {}", keyword, required)
    }
}

fn normalize_wallhaven_query(query: Option<String>, category: Option<&str>) -> Option<String> {
    let keyword = query
        .as_deref()
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .map(normalize_keyword_alias);

    if category == Some("nature") {
        return Some(match keyword {
            Some(value) => append_keyword_once(&value, "nature"),
            _ => "nature".to_string(),
        });
    }

    keyword
}

fn wallhaven_api_sorting(source: &WallhavenSource) -> &'static str {
    match source {
        WallhavenSource::Hot => "date_added",
        WallhavenSource::Toplist => "toplist",
        WallhavenSource::Favorites => "favorites",
    }
}

fn wallhaven_web_sorting(source: &WallhavenSource) -> &'static str {
    match source {
        WallhavenSource::Hot => "hot",
        WallhavenSource::Toplist => "toplist",
        WallhavenSource::Favorites => "favorites",
    }
}

fn wallhaven_response_snippet(body: &str) -> String {
    body.chars()
        .take(180)
        .collect::<String>()
        .replace(['\r', '\n', '\t'], " ")
}

fn reqwest_error_details(error: &reqwest::Error) -> String {
    let mut details = error.to_string();
    let mut source = error.source();
    while let Some(next) = source {
        details.push_str("；caused by: ");
        details.push_str(&next.to_string());
        source = next.source();
    }
    details
}

fn normalize_proxy_url(value: &str) -> Option<String> {
    let value = value.trim();
    if value.is_empty() {
        return None;
    }
    let first = value.split(';').find_map(|item| {
        let item = item.trim();
        if item.is_empty() {
            return None;
        }
        item.split_once('=')
            .map(|(_, proxy)| proxy.trim())
            .or(Some(item))
            .filter(|proxy| !proxy.is_empty())
    })?;

    if first.starts_with("http://")
        || first.starts_with("https://")
        || first.starts_with("socks5://")
    {
        Some(first.to_string())
    } else {
        Some(format!("http://{}", first))
    }
}

fn windows_system_proxy_url() -> Option<String> {
    let internet_settings = RegKey::predef(HKEY_CURRENT_USER)
        .open_subkey("Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings")
        .ok()?;
    let enabled = internet_settings
        .get_value::<u32, _>("ProxyEnable")
        .unwrap_or(0);
    if enabled == 0 {
        return None;
    }
    let proxy_server = internet_settings
        .get_value::<String, _>("ProxyServer")
        .ok()?;
    normalize_proxy_url(&proxy_server)
}

fn wallhaven_proxy_url() -> Option<String> {
    [
        "HTTPS_PROXY",
        "https_proxy",
        "HTTP_PROXY",
        "http_proxy",
        "ALL_PROXY",
        "all_proxy",
    ]
    .iter()
    .find_map(|key| {
        env::var(key)
            .ok()
            .and_then(|value| normalize_proxy_url(&value))
    })
    .or_else(windows_system_proxy_url)
}

fn apply_wallhaven_proxy(builder: reqwest::ClientBuilder) -> reqwest::ClientBuilder {
    let Some(proxy_url) = wallhaven_proxy_url() else {
        info!("[WallpaperSwitcher] Wallhaven proxy: direct");
        return builder;
    };

    match reqwest::Proxy::all(&proxy_url) {
        Ok(proxy) => {
            info!("[WallpaperSwitcher] Wallhaven proxy: {}", proxy_url);
            builder.proxy(proxy)
        }
        Err(error) => {
            warn!(
                "[WallpaperSwitcher] 忽略无效 Wallhaven 代理 {}: {}",
                proxy_url, error
            );
            builder
        }
    }
}

fn wallhaven_header_value(
    headers: &reqwest::header::HeaderMap,
    name: reqwest::header::HeaderName,
) -> String {
    headers
        .get(name)
        .and_then(|value| value.to_str().ok())
        .unwrap_or("-")
        .to_string()
}

async fn read_wallhaven_response_body(response: reqwest::Response) -> Result<String, String> {
    let bytes = response.bytes().await.map_err(|e| {
        let details = reqwest_error_details(&e);
        error!("[WallpaperSwitcher] 读取 Wallhaven 响应失败: {}", details);
        format!("读取 Wallhaven 响应失败: {}", details)
    })?;
    if bytes.is_empty() {
        return Err("Wallhaven 返回内容为空".to_string());
    }
    Ok(String::from_utf8_lossy(&bytes).into_owned())
}

fn json_string(value: &serde_json::Value, key: &str) -> Option<String> {
    value
        .get(key)
        .and_then(|value| value.as_str())
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .map(ToOwned::to_owned)
}

fn json_u32(value: &serde_json::Value, key: &str) -> Option<u32> {
    value
        .get(key)
        .and_then(|value| value.as_u64())
        .and_then(|value| u32::try_from(value).ok())
}

fn parse_resolution(value: &str) -> Option<(u32, u32)> {
    let (width, height) = value.split_once('x').or_else(|| value.split_once('×'))?;
    Some((
        width.trim().parse::<u32>().ok()?,
        height.trim().parse::<u32>().ok()?,
    ))
}

fn file_type_from_path(path: &str) -> String {
    let lower = path.to_ascii_lowercase();
    if lower.ends_with(".png") {
        "image/png".to_string()
    } else if lower.ends_with(".webp") {
        "image/webp".to_string()
    } else {
        "image/jpeg".to_string()
    }
}

fn normalize_wallhaven_url(value: &str) -> String {
    let value = value
        .replace("&amp;", "&")
        .replace("&quot;", "\"")
        .trim()
        .to_string();
    if value.starts_with("//") {
        format!("https:{}", value)
    } else {
        value
    }
}

fn capture_group(source: &str, pattern: &str, group: usize) -> Option<String> {
    Regex::new(pattern)
        .ok()?
        .captures(source)?
        .get(group)
        .map(|value| normalize_wallhaven_url(value.as_str()))
        .filter(|value| !value.is_empty())
}

fn wallhaven_full_path_from_thumb(id: &str, thumb: &str) -> String {
    let extension = Path::new(thumb)
        .extension()
        .and_then(OsStr::to_str)
        .filter(|value| !value.is_empty())
        .unwrap_or("jpg");
    let prefix = id.chars().take(2).collect::<String>();
    format!(
        "https://w.wallhaven.cc/full/{}/wallhaven-{}.{}",
        prefix, id, extension
    )
}

fn parse_wallhaven_html_response(body: &str, fallback_page: u32) -> Result<WallhavenPage, String> {
    let figure_re =
        Regex::new(r#"(?s)<figure[^>]*data-wallpaper-id="([^"]+)"[^>]*>(.*?)</figure>"#)
            .map_err(|e| format!("创建 Wallhaven HTML 解析器失败: {}", e))?;
    let mut data = Vec::new();

    for capture in figure_re.captures_iter(body) {
        let id = capture
            .get(1)
            .map(|value| value.as_str().trim().to_string())
            .filter(|value| !value.is_empty());
        let fragment = capture.get(2).map(|value| value.as_str()).unwrap_or("");
        let Some(id) = id else {
            continue;
        };
        let url = capture_group(fragment, r#"href="([^"]+)""#, 1)
            .unwrap_or_else(|| format!("https://wallhaven.cc/w/{}", id));
        let thumb = capture_group(
            fragment,
            r#"(?:data-src|src)="([^"]*wallhaven\.cc/small/[^"]+)""#,
            1,
        );
        let Some(thumb) = thumb else {
            continue;
        };
        let resolution = capture_group(fragment, r#"class="wall-res">([^<]+)"#, 1)
            .map(|value| value.replace(' ', ""))
            .unwrap_or_default();
        let parsed_resolution = parse_resolution(&resolution);
        let dimension_x = parsed_resolution.map(|(width, _)| width).unwrap_or(0);
        let dimension_y = parsed_resolution.map(|(_, height)| height).unwrap_or(0);
        let large_thumb = thumb.replace("/small/", "/lg/");
        let path = wallhaven_full_path_from_thumb(&id, &thumb);

        data.push(WallhavenWallpaper {
            id,
            url,
            short_url: None,
            thumbs: WallhavenThumbs {
                large: large_thumb,
                original: thumb.clone(),
                small: thumb,
            },
            file_type: file_type_from_path(&path),
            category: None,
            path,
            resolution,
            dimension_x,
            dimension_y,
        });
    }

    let pagination =
        Regex::new(r#"data-pagination="\{&quot;total&quot;:(\d+),&quot;current&quot;:(\d+),"#)
            .ok()
            .and_then(|re| re.captures(body));
    let last_page = pagination
        .as_ref()
        .and_then(|capture| capture.get(1))
        .and_then(|value| value.as_str().parse::<u32>().ok())
        .unwrap_or(fallback_page);
    let page = pagination
        .as_ref()
        .and_then(|capture| capture.get(2))
        .and_then(|value| value.as_str().parse::<u32>().ok())
        .unwrap_or(fallback_page);

    Ok(WallhavenPage {
        data,
        page,
        last_page: last_page.max(page).max(1),
    })
}

fn parse_wallhaven_wallpaper(value: &serde_json::Value) -> Option<WallhavenWallpaper> {
    let id = json_string(value, "id")?;
    let path = json_string(value, "path")?;
    let thumbs = value.get("thumbs").and_then(|value| value.as_object());
    let thumb_string = |key: &str| {
        thumbs
            .and_then(|items| items.get(key))
            .and_then(|value| value.as_str())
            .map(str::trim)
            .filter(|value| !value.is_empty())
            .map(ToOwned::to_owned)
    };

    let resolution = json_string(value, "resolution").unwrap_or_default();
    let parsed_resolution = parse_resolution(&resolution);
    let dimension_x = json_u32(value, "dimension_x")
        .or_else(|| parsed_resolution.map(|(width, _)| width))
        .unwrap_or(0);
    let dimension_y = json_u32(value, "dimension_y")
        .or_else(|| parsed_resolution.map(|(_, height)| height))
        .unwrap_or(0);
    let resolution = if resolution.is_empty() && dimension_x > 0 && dimension_y > 0 {
        format!("{}x{}", dimension_x, dimension_y)
    } else {
        resolution
    };

    Some(WallhavenWallpaper {
        id,
        url: json_string(value, "url").unwrap_or_else(|| path.clone()),
        short_url: json_string(value, "short_url"),
        thumbs: WallhavenThumbs {
            large: thumb_string("large").unwrap_or_else(|| path.clone()),
            original: thumb_string("original").unwrap_or_else(|| path.clone()),
            small: thumb_string("small").unwrap_or_else(|| path.clone()),
        },
        file_type: json_string(value, "file_type").unwrap_or_else(|| file_type_from_path(&path)),
        category: json_string(value, "category"),
        path,
        resolution,
        dimension_x,
        dimension_y,
    })
}

fn parse_wallhaven_response(body: &str) -> Result<WallhavenPage, String> {
    let value = serde_json::from_str::<serde_json::Value>(body).map_err(|e| {
        format!(
            "Wallhaven 返回内容不是有效 JSON: {}；响应片段: {}",
            e,
            wallhaven_response_snippet(body)
        )
    })?;

    if let Some(error) = json_string(&value, "error").or_else(|| {
        value
            .get("error")
            .and_then(|error| json_string(error, "message"))
    }) {
        return Err(format!("Wallhaven 返回错误: {}", error));
    }

    let data = value
        .get("data")
        .and_then(|value| value.as_array())
        .ok_or_else(|| {
            format!(
                "Wallhaven 响应缺少 data 数组；响应片段: {}",
                wallhaven_response_snippet(body)
            )
        })?
        .iter()
        .filter_map(parse_wallhaven_wallpaper)
        .collect::<Vec<_>>();
    let meta = value.get("meta").unwrap_or(&serde_json::Value::Null);
    let page = json_u32(meta, "current_page").unwrap_or(1);
    let last_page = json_u32(meta, "last_page").unwrap_or(page);

    Ok(WallhavenPage {
        data,
        page,
        last_page,
    })
}

fn parse_wallhaven_detail_response(body: &str) -> Result<Option<WallhavenWallpaper>, String> {
    let value = serde_json::from_str::<serde_json::Value>(body).map_err(|e| {
        format!(
            "Wallhaven 详情返回内容不是有效 JSON: {}；响应片段: {}",
            e,
            wallhaven_response_snippet(body)
        )
    })?;
    Ok(value.get("data").and_then(parse_wallhaven_wallpaper))
}

async fn fetch_wallhaven_detail(
    client: &reqwest::Client,
    id: &str,
) -> Result<Option<WallhavenWallpaper>, String> {
    let url = format!("https://wallhaven.cc/api/v1/w/{}", id);
    let query: Vec<(String, String)> = Vec::new();
    let (status, _, body) =
        send_wallhaven_request(client, &url, "application/json", &query).await?;
    if !status.is_success() {
        return Err(format!(
            "请求 Wallhaven 详情失败: HTTP {}；响应片段: {}",
            status.as_u16(),
            wallhaven_response_snippet(&body)
        ));
    }
    parse_wallhaven_detail_response(&body)
}

fn wallhaven_resolution_attempts(screen_width: u32, screen_height: u32) -> Vec<(u32, u32)> {
    let mut attempts = vec![(screen_width.max(1), screen_height.max(1))];
    if screen_width > 1920 || screen_height > 1080 {
        attempts.push((1920, 1080));
    }
    attempts
}

fn build_wallhaven_query(
    source: &WallhavenSource,
    page: u32,
    category: Option<&str>,
    request_query: Option<&str>,
    width: u32,
    height: u32,
    web: bool,
) -> Vec<(String, String)> {
    let mut query = vec![
        (
            "sorting".to_string(),
            if web {
                wallhaven_web_sorting(source)
            } else {
                wallhaven_api_sorting(source)
            }
            .to_string(),
        ),
        ("purity".to_string(), "100".to_string()),
        (
            "categories".to_string(),
            category_bits(category).to_string(),
        ),
        ("topRange".to_string(), "6M".to_string()),
        ("order".to_string(), "desc".to_string()),
        ("atleast".to_string(), format!("{}x{}", width, height)),
        ("page".to_string(), page.to_string()),
    ];
    if let Some(keyword) = request_query {
        query.push(("q".to_string(), keyword.to_string()));
    }
    query
}

async fn send_wallhaven_request(
    client: &reqwest::Client,
    url: &str,
    accept: &'static str,
    query: &[(String, String)],
) -> Result<(reqwest::StatusCode, reqwest::header::HeaderMap, String), String> {
    let mut last_error = String::new();
    for attempt in 1..=3 {
        let response = client
            .get(url)
            .header(reqwest::header::ACCEPT, accept)
            .header(reqwest::header::ACCEPT_ENCODING, "identity")
            .header(reqwest::header::REFERER, "https://wallhaven.cc/")
            .query(query)
            .send()
            .await;

        match response {
            Ok(response) => {
                if response.status().as_u16() == 429 {
                    return Err("Wallhaven 请求过于频繁，请稍后再试".to_string());
                }
                let status = response.status();
                let headers = response.headers().clone();
                match read_wallhaven_response_body(response).await {
                    Ok(body) => return Ok((status, headers, body)),
                    Err(error) => last_error = error,
                }
            }
            Err(error) => {
                last_error = format!("请求 Wallhaven 失败: {}", reqwest_error_details(&error));
            }
        }

        warn!(
            "[WallpaperSwitcher] Wallhaven request attempt {}/3 failed: {}",
            attempt, last_error
        );
        tokio::time::sleep(Duration::from_millis(220 * attempt)).await;
    }

    Err(last_error)
}

async fn fetch_wallhaven_api_search(
    client: &reqwest::Client,
    source: &WallhavenSource,
    page: u32,
    category: Option<&str>,
    request_query: Option<&str>,
    width: u32,
    height: u32,
) -> Result<WallhavenPage, String> {
    let query = build_wallhaven_query(source, page, category, request_query, width, height, false);
    let (status, headers, body) = send_wallhaven_request(
        client,
        "https://wallhaven.cc/api/v1/search",
        "application/json",
        &query,
    )
    .await?;
    info!(
        "[WallpaperSwitcher] Wallhaven API response status={} content_type={} content_encoding={} bytes={}",
        status.as_u16(),
        wallhaven_header_value(&headers, reqwest::header::CONTENT_TYPE),
        wallhaven_header_value(&headers, reqwest::header::CONTENT_ENCODING),
        body.len()
    );
    if !status.is_success() {
        return Err(format!(
            "请求 Wallhaven 失败: HTTP {}；响应片段: {}",
            status.as_u16(),
            wallhaven_response_snippet(&body)
        ));
    }
    parse_wallhaven_response(&body)
}

async fn fetch_wallhaven_web_search(
    client: &reqwest::Client,
    source: &WallhavenSource,
    page: u32,
    category: Option<&str>,
    request_query: Option<&str>,
    width: u32,
    height: u32,
) -> Result<WallhavenPage, String> {
    let query = build_wallhaven_query(source, page, category, request_query, width, height, true);
    let (status, headers, body) = send_wallhaven_request(
        client,
        "https://wallhaven.cc/search",
        "text/html,application/xhtml+xml",
        &query,
    )
    .await?;
    info!(
        "[WallpaperSwitcher] Wallhaven web response status={} content_type={} content_encoding={} bytes={}",
        status.as_u16(),
        wallhaven_header_value(&headers, reqwest::header::CONTENT_TYPE),
        wallhaven_header_value(&headers, reqwest::header::CONTENT_ENCODING),
        body.len()
    );
    if !status.is_success() {
        return Err(format!(
            "请求 Wallhaven 页面失败: HTTP {}；响应片段: {}",
            status.as_u16(),
            wallhaven_response_snippet(&body)
        ));
    }
    parse_wallhaven_html_response(&body, page)
}

async fn fetch_wallhaven_page(
    app_handle: &AppHandle,
    params: WallhavenFetchParams,
) -> Result<WallhavenPage, String> {
    require_enabled(app_handle)?;
    let (screen_width, screen_height) = screen_size(app_handle);
    let page = params.page.unwrap_or(1).clamp(1, MAX_WALLHAVEN_PAGES);
    let category = params.category.as_deref();
    let request_query = normalize_wallhaven_query(params.query.clone(), category);
    info!(
        "[WallpaperSwitcher] Wallhaven search source={:?} page={} category={:?} query={} screen={}x{}",
        params.source,
        page,
        params.category,
        request_query.as_deref().unwrap_or("<empty>"),
        screen_width,
        screen_height
    );

    let client = apply_wallhaven_proxy(
        reqwest::Client::builder()
            .use_native_tls()
            .user_agent(USER_AGENT)
            .connect_timeout(Duration::from_secs(12))
            .timeout(Duration::from_secs(35))
            .redirect(reqwest::redirect::Policy::limited(8)),
    )
    .build()
    .map_err(|e| format!("创建 Wallhaven 客户端失败: {}", e))?;

    let mut last_error = String::new();
    for (width, height) in wallhaven_resolution_attempts(screen_width, screen_height) {
        let preferred = fetch_wallhaven_web_search(
            &client,
            &params.source,
            page,
            category,
            request_query.as_deref(),
            width,
            height,
        )
        .await;

        match preferred {
            Ok(parsed) if !parsed.data.is_empty() => {
                info!(
                    "[WallpaperSwitcher] Wallhaven parsed data={} page={} last_page={} atleast={}x{}",
                    parsed.data.len(),
                    parsed.page,
                    parsed.last_page,
                    width,
                    height
                );
                return Ok(parsed);
            }
            Ok(parsed) => {
                last_error = format!("Wallhaven 没有返回可用壁纸 ({}x{})", width, height);
                warn!("[WallpaperSwitcher] {}", last_error);
                if width <= 1920 && height <= 1080 {
                    return Ok(parsed);
                }
            }
            Err(error) => {
                last_error = error;
                warn!(
                    "[WallpaperSwitcher] Wallhaven preferred search failed: {}",
                    last_error
                );
            }
        }

        let fallback = fetch_wallhaven_api_search(
            &client,
            &params.source,
            page,
            category,
            request_query.as_deref(),
            width,
            height,
        )
        .await;

        match fallback {
            Ok(parsed) if !parsed.data.is_empty() => {
                info!(
                    "[WallpaperSwitcher] Wallhaven fallback parsed data={} page={} last_page={} atleast={}x{}",
                    parsed.data.len(),
                    parsed.page,
                    parsed.last_page,
                    width,
                    height
                );
                return Ok(parsed);
            }
            Ok(parsed) => {
                last_error = format!("Wallhaven 没有返回可用壁纸 ({}x{})", width, height);
                if width <= 1920 && height <= 1080 {
                    return Ok(parsed);
                }
            }
            Err(error) => {
                last_error = error;
            }
        }
    }

    error!(
        "[WallpaperSwitcher] Wallhaven search exhausted: {}",
        last_error
    );
    Err(last_error)
}

#[tauri::command]
pub async fn wallpaper_get_config(app_handle: AppHandle) -> Result<WallpaperConfig, String> {
    require_enabled(&app_handle)?;
    ensure_scheduler_runtime(&app_handle);
    Ok(load_config(&app_handle))
}

#[tauri::command]
pub async fn wallpaper_save_config(
    app_handle: AppHandle,
    config: WallpaperConfig,
) -> Result<(), String> {
    require_enabled(&app_handle)?;
    let mut config = config;
    let current = load_config(&app_handle);
    if config.folder_path == current.folder_path {
        config.folder_seen_paths = current.folder_seen_paths.clone();
        config.last_folder_index = current.last_folder_index;
    } else {
        config.folder_seen_paths.clear();
        config.last_folder_index = 0;
    }
    if wallhaven_history_scope(&config) == wallhaven_history_scope(&current) {
        config.wallhaven_seen_ids = current.wallhaven_seen_ids.clone();
        config.wallhaven_history_scope = current.wallhaven_history_scope.clone();
    } else {
        config.wallhaven_seen_ids.clear();
        config.wallhaven_history_scope = None;
    }
    config.interval_minutes = config.interval_minutes.max(1);

    save_config(&app_handle, &config)?;
    if config.schedule_enabled && config.auto_restore {
        start_scheduler(app_handle)?;
    } else {
        stop_scheduler();
    }
    Ok(())
}

#[tauri::command]
pub async fn wallpaper_get_status(app_handle: AppHandle) -> Result<WallpaperStatus, String> {
    require_enabled(&app_handle)?;
    let (screen_width, screen_height) = screen_size(&app_handle);
    let cache = cache_dir(&app_handle)?;
    let runtime = WALLPAPER_STATUS
        .lock()
        .map_err(|e| format!("读取壁纸状态失败: {}", e))?
        .clone();
    let scheduler_running = SCHEDULER_RUNNING
        .lock()
        .map(|running| *running)
        .unwrap_or(false);
    Ok(WallpaperStatus {
        supported: true,
        current_path: runtime.current_path,
        current_source: runtime.current_source,
        current_resolution: runtime.current_resolution,
        scheduler_running,
        last_switched_at: runtime.last_switched_at,
        next_switch_at: runtime.next_switch_at,
        screen_width,
        screen_height,
        cache_size_bytes: cache_size(&cache),
    })
}

#[tauri::command]
pub async fn wallpaper_scan_folder(
    app_handle: AppHandle,
    path: String,
) -> Result<FolderScanResult, String> {
    require_enabled(&app_handle)?;
    let dir = normalize_existing_dir(&path)?;
    let config = load_config(&app_handle);
    let images = scan_images_in_dir(&dir, &config.folder_sort)?;
    Ok(FolderScanResult {
        path: path_to_string(&dir),
        count: images.len(),
        images: images
            .into_iter()
            .take(200)
            .map(|path| path_to_string(&path))
            .collect(),
    })
}

#[tauri::command]
pub async fn wallpaper_set_fixed_image(
    app_handle: AppHandle,
    path: String,
) -> Result<String, String> {
    require_enabled(&app_handle)?;
    let mut config = load_config(&app_handle);
    let image = normalize_existing_file(&path)?;
    config.fixed_image_path = Some(path_to_string(&image));
    config.mode = WallpaperMode::Fixed;
    config.schedule_enabled = false;
    save_config(&app_handle, &config)?;
    stop_scheduler();
    apply_wallpaper_path(&app_handle, &image, "固定图片").await
}

#[tauri::command]
pub async fn wallpaper_switch_now(app_handle: AppHandle) -> Result<String, String> {
    require_enabled(&app_handle)?;
    let config = load_config(&app_handle);
    reset_next_switch_timestamp(&config);
    let applied = switch_now_inner(&app_handle).await?;
    let next_config = load_config(&app_handle);
    if next_config.schedule_enabled && next_config.auto_restore {
        start_scheduler(app_handle)?;
    }
    Ok(applied)
}

#[tauri::command]
pub async fn wallpaper_fetch_wallhaven(
    app_handle: AppHandle,
    params: WallhavenFetchParams,
) -> Result<WallhavenPage, String> {
    fetch_wallhaven_page(&app_handle, params).await
}

#[tauri::command]
pub async fn wallpaper_set_wallhaven_image(
    app_handle: AppHandle,
    wallpaper: WallhavenWallpaper,
) -> Result<String, String> {
    require_enabled(&app_handle)?;
    let mut config = load_config(&app_handle);
    config.mode = WallpaperMode::Wallhaven;
    prepare_wallhaven_history(&mut config);
    let downloaded = download_wallhaven_image(&app_handle, &wallpaper).await?;
    record_wallhaven_seen(&mut config, wallpaper.id.clone());
    save_config(&app_handle, &config)?;
    apply_wallpaper_path(&app_handle, &downloaded, "Wallhaven").await
}

#[tauri::command]
pub async fn wallpaper_download_wallhaven_image(
    app_handle: AppHandle,
    wallpaper: WallhavenWallpaper,
) -> Result<String, String> {
    require_enabled(&app_handle)?;
    let downloaded = download_wallhaven_image(&app_handle, &wallpaper).await?;
    Ok(path_to_string(&downloaded))
}

#[tauri::command]
pub async fn wallpaper_clear_cache(app_handle: AppHandle) -> Result<(), String> {
    require_enabled(&app_handle)?;
    let dir = cache_dir(&app_handle)?;
    let config = load_config(&app_handle);
    let current_path = WALLPAPER_STATUS
        .lock()
        .ok()
        .and_then(|status| status.current_path.clone())
        .map(PathBuf::from);
    let fixed_path = config.fixed_image_path.as_deref().map(PathBuf::from);
    if dir.exists() {
        for entry in fs::read_dir(&dir).map_err(|e| format!("读取缓存目录失败: {}", e))? {
            let entry = entry.map_err(|e| format!("读取缓存文件失败: {}", e))?;
            let path = entry.path();
            if current_path
                .as_ref()
                .is_some_and(|current| current == &path)
                || fixed_path.as_ref().is_some_and(|fixed| fixed == &path)
            {
                continue;
            }
            if path.is_file() {
                if let Err(error) = fs::remove_file(&path) {
                    warn!(
                        "[WallpaperSwitcher] 删除缓存失败 {}: {}",
                        path.display(),
                        error
                    );
                }
            }
        }
    }
    Ok(())
}

#[tauri::command]
pub async fn wallpaper_open_cache_dir(app_handle: AppHandle) -> Result<(), String> {
    require_enabled(&app_handle)?;
    let dir = cache_dir(&app_handle)?;
    crate::commands::open_folder(path_to_string(&dir))
}

fn ensure_scheduler_runtime(app_handle: &AppHandle) {
    let config = load_config(app_handle);
    let should_run = config.schedule_enabled && config.auto_restore;
    let running = SCHEDULER_RUNNING
        .lock()
        .map(|running| *running)
        .unwrap_or(false);

    if should_run && !running {
        if let Err(error) = start_scheduler(app_handle.clone()) {
            error!("[WallpaperSwitcher] 恢复定时器失败: {}", error);
        } else {
            info!("[WallpaperSwitcher] 定时器已恢复");
        }
    } else if !should_run && running {
        stop_scheduler();
    }
}

pub fn apply_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        ensure_scheduler_runtime(app_handle);
    } else {
        stop_scheduler();
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn natural_file_name_sort_keeps_numeric_sequences_in_order() {
        let mut images = vec![
            PathBuf::from("wallpaper-10.jpg"),
            PathBuf::from("wallpaper-2.jpg"),
            PathBuf::from("wallpaper-1.jpg"),
        ];

        sort_images(&mut images, &FolderSort::FileNameAscending);

        let names = images
            .iter()
            .map(|path| image_name(path))
            .collect::<Vec<_>>();
        assert_eq!(
            names,
            ["wallpaper-1.jpg", "wallpaper-2.jpg", "wallpaper-10.jpg"]
        );
    }

    #[test]
    fn wallhaven_history_moves_reselected_item_to_the_end() {
        let mut config = WallpaperConfig::default();
        record_wallhaven_seen(&mut config, "abc".to_string());
        record_wallhaven_seen(&mut config, "def".to_string());
        record_wallhaven_seen(&mut config, "abc".to_string());

        assert_eq!(config.wallhaven_seen_ids, ["def", "abc"]);
    }
}
