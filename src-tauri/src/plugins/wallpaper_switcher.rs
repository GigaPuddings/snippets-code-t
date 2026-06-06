use image::{imageops::FilterType, DynamicImage, ImageBuffer, Rgba};
use log::{error, info, warn};
use serde::{Deserialize, Serialize};
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

const PLUGIN_ID: &str = "wallpaper-switcher";
const CONFIG_KEY: &str = "wallpaper_switcher_config";
const USER_AGENT: &str = "snippets-code-wallpaper-switcher";
const MAX_WALLHAVEN_PAGES: u32 = 100;

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

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub enum WallpaperFitMode {
    FillCrop,
    Fit,
    Center,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub enum WallhavenSource {
    Hot,
    Toplist,
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
    pub fit_mode: WallpaperFitMode,
    pub auto_restore: bool,
    pub wallhaven_source: WallhavenSource,
    pub wallhaven_category: String,
    pub wallhaven_query: Option<String>,
    pub last_folder_index: usize,
}

impl Default for WallpaperConfig {
    fn default() -> Self {
        Self {
            mode: WallpaperMode::Folder,
            fixed_image_path: None,
            folder_path: None,
            schedule_enabled: false,
            interval_minutes: 30,
            order: WallpaperOrder::Random,
            fit_mode: WallpaperFitMode::FillCrop,
            auto_restore: true,
            wallhaven_source: WallhavenSource::Hot,
            wallhaven_category: "general".to_string(),
            wallhaven_query: None,
            last_folder_index: 0,
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

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct WallhavenApiResponse {
    data: Vec<WallhavenWallpaper>,
    meta: WallhavenMeta,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct WallhavenMeta {
    current_page: u32,
    last_page: u32,
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

fn scan_images_in_dir(path: &Path) -> Result<Vec<PathBuf>, String> {
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
    images.sort_by(|a, b| path_to_string(a).cmp(&path_to_string(b)));
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

fn fit_image(
    image: DynamicImage,
    width: u32,
    height: u32,
    fit_mode: &WallpaperFitMode,
) -> DynamicImage {
    match fit_mode {
        WallpaperFitMode::FillCrop => {
            let resized = image.resize_to_fill(width, height, FilterType::Lanczos3);
            DynamicImage::ImageRgba8(resized.to_rgba8())
        }
        WallpaperFitMode::Fit => {
            let resized = image.resize(width, height, FilterType::Lanczos3).to_rgba8();
            let mut canvas = ImageBuffer::from_pixel(width, height, Rgba([0, 0, 0, 255]));
            let x = width.saturating_sub(resized.width()) / 2;
            let y = height.saturating_sub(resized.height()) / 2;
            image::imageops::overlay(&mut canvas, &resized, x.into(), y.into());
            DynamicImage::ImageRgba8(canvas)
        }
        WallpaperFitMode::Center => {
            let source = image.to_rgba8();
            let mut canvas = ImageBuffer::from_pixel(width, height, Rgba([0, 0, 0, 255]));
            let crop_width = source.width().min(width);
            let crop_height = source.height().min(height);
            let source_x = source.width().saturating_sub(crop_width) / 2;
            let source_y = source.height().saturating_sub(crop_height) / 2;
            let target_x = width.saturating_sub(crop_width) / 2;
            let target_y = height.saturating_sub(crop_height) / 2;
            let cropped =
                image::imageops::crop_imm(&source, source_x, source_y, crop_width, crop_height)
                    .to_image();
            image::imageops::overlay(&mut canvas, &cropped, target_x.into(), target_y.into());
            DynamicImage::ImageRgba8(canvas)
        }
    }
}

fn prepare_wallpaper_image(
    app_handle: &AppHandle,
    source_path: &Path,
    fit_mode: &WallpaperFitMode,
    cache_name: &str,
) -> Result<PathBuf, String> {
    let (width, height) = screen_size(app_handle);
    let image = image::open(source_path)
        .map_err(|e| format!("读取图片失败: {} ({})", source_path.display(), e))?;
    let prepared = fit_image(image, width, height, fit_mode);
    let target = cache_dir(app_handle)?.join(format!("{}.jpg", cache_name));
    prepared
        .save_with_format(&target, image::ImageFormat::Jpeg)
        .map_err(|e| format!("保存适配后的壁纸失败: {} ({})", target.display(), e))?;
    Ok(target)
}

#[cfg(target_os = "windows")]
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
    desktop
        .set_value("WallpaperStyle", &"10")
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

#[cfg(not(target_os = "windows"))]
fn set_windows_wallpaper(_path: &Path) -> Result<(), String> {
    Err("当前系统暂不支持设置桌面壁纸".to_string())
}

fn update_status_after_switch(path: &Path, source: &str, next_switch_at: Option<i64>) {
    let resolution = image_resolution(path);
    if let Ok(mut status) = WALLPAPER_STATUS.lock() {
        status.current_path = Some(path_to_string(path));
        status.current_source = Some(source.to_string());
        status.current_resolution = resolution;
        status.last_switched_at = Some(now_unix_ts());
        status.next_switch_at = next_switch_at;
    }
}

fn random_index(len: usize) -> usize {
    if len <= 1 {
        return 0;
    }
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_nanos() as usize % len)
        .unwrap_or(0)
}

fn save_config(app_handle: &AppHandle, config: &WallpaperConfig) -> Result<(), String> {
    let config_json =
        serde_json::to_string(config).map_err(|e| format!("序列化壁纸配置失败: {}", e))?;
    crate::json_config::set_app_config_value(app_handle, CONFIG_KEY, config_json)?;
    if let Ok(mut current) = WALLPAPER_CONFIG.lock() {
        *current = Some(config.clone());
    }
    Ok(())
}

pub fn load_config(app_handle: &AppHandle) -> WallpaperConfig {
    if let Some(config_json) =
        crate::json_config::get_app_config_value::<String>(app_handle, CONFIG_KEY)
    {
        if !config_json.is_empty() {
            if let Ok(config) = serde_json::from_str::<WallpaperConfig>(&config_json) {
                if let Ok(mut current) = WALLPAPER_CONFIG.lock() {
                    *current = Some(config.clone());
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
    let extension = if wallpaper.file_type.contains("png") {
        "png"
    } else {
        "jpg"
    };
    let target = cache_dir(app_handle)?.join(format!("wallhaven-{}.{}", wallpaper.id, extension));
    if target.is_file() && fs::metadata(&target).map(|m| m.len() > 0).unwrap_or(false) {
        return Ok(target);
    }

    let client = reqwest::Client::builder()
        .user_agent(USER_AGENT)
        .connect_timeout(Duration::from_secs(15))
        .timeout(Duration::from_secs(90))
        .redirect(reqwest::redirect::Policy::limited(8))
        .build()
        .map_err(|e| format!("创建 Wallhaven 客户端失败: {}", e))?;
    let bytes = client
        .get(&wallpaper.path)
        .send()
        .await
        .map_err(|e| format!("下载壁纸失败: {}", e))?
        .error_for_status()
        .map_err(|e| format!("下载壁纸失败: {}", e))?
        .bytes()
        .await
        .map_err(|e| format!("读取壁纸数据失败: {}", e))?;

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
    fit_mode: &WallpaperFitMode,
) -> Result<String, String> {
    let cache_name = format!(
        "prepared-{}-{}",
        source.replace(['/', '\\', ':'], "_"),
        now_unix_ts()
    );
    let prepared = prepare_wallpaper_image(app_handle, source_path, fit_mode, &cache_name)?;
    set_windows_wallpaper(&prepared)?;
    update_status_after_switch(&prepared, source, next_switch_timestamp());
    let _ = app_handle.emit("wallpaper-switcher-changed", ());
    Ok(path_to_string(&prepared))
}

fn next_switch_timestamp() -> Option<i64> {
    WALLPAPER_STATUS
        .lock()
        .ok()
        .and_then(|status| status.next_switch_at)
}

async fn switch_from_folder(
    app_handle: &AppHandle,
    mut config: WallpaperConfig,
) -> Result<String, String> {
    let folder = config
        .folder_path
        .clone()
        .ok_or("请先选择壁纸文件夹".to_string())?;
    let folder = normalize_existing_dir(&folder)?;
    let images = scan_images_in_dir(&folder)?;
    if images.is_empty() {
        return Err("文件夹中没有可用图片".to_string());
    }

    let index = match config.order {
        WallpaperOrder::Random => random_index(images.len()),
        WallpaperOrder::Sequential => config.last_folder_index % images.len(),
    };
    config.last_folder_index = (index + 1) % images.len();
    save_config(app_handle, &config)?;

    apply_wallpaper_path(app_handle, &images[index], "本地文件夹", &config.fit_mode).await
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
    apply_wallpaper_path(app_handle, &file, "固定图片", &config.fit_mode).await
}

async fn switch_from_wallhaven(
    app_handle: &AppHandle,
    config: &WallpaperConfig,
) -> Result<String, String> {
    let page = random_index(10) as u32 + 1;
    let params = WallhavenFetchParams {
        source: config.wallhaven_source.clone(),
        page: Some(page),
        query: config.wallhaven_query.clone(),
        category: Some(config.wallhaven_category.clone()),
    };
    let page = fetch_wallhaven_page(app_handle, params).await?;
    if page.data.is_empty() {
        return Err("Wallhaven 没有返回可用壁纸".to_string());
    }
    let wallpaper = page.data[random_index(page.data.len())].clone();
    let downloaded = download_wallhaven_image(app_handle, &wallpaper).await?;
    apply_wallpaper_path(app_handle, &downloaded, "Wallhaven", &config.fit_mode).await
}

async fn switch_now_inner(app_handle: &AppHandle) -> Result<String, String> {
    let config = load_config(app_handle);
    match config.mode {
        WallpaperMode::Fixed => switch_from_fixed(app_handle, &config).await,
        WallpaperMode::Folder => switch_from_folder(app_handle, config).await,
        WallpaperMode::Wallhaven => switch_from_wallhaven(app_handle, &config).await,
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

    let interval_minutes = config.interval_minutes.max(1);
    let instance_id = SCHEDULER_INSTANCE_SEQ.fetch_add(1, Ordering::SeqCst) + 1;
    ACTIVE_SCHEDULER_INSTANCE_ID.store(instance_id, Ordering::SeqCst);
    if let Ok(mut running) = SCHEDULER_RUNNING.lock() {
        *running = true;
    }
    if let Ok(mut status) = WALLPAPER_STATUS.lock() {
        status.next_switch_at = Some(now_unix_ts() + (interval_minutes * 60) as i64);
    }

    tauri::async_runtime::spawn(async move {
        loop {
            tokio::time::sleep(Duration::from_secs(interval_minutes * 60)).await;
            if ACTIVE_SCHEDULER_INSTANCE_ID.load(Ordering::SeqCst) != instance_id {
                break;
            }

            let config = load_config(&app_handle);
            if !config.schedule_enabled || !config.auto_restore {
                break;
            }
            if let Ok(mut status) = WALLPAPER_STATUS.lock() {
                status.next_switch_at =
                    Some(now_unix_ts() + (config.interval_minutes.max(1) * 60) as i64);
            }
            if let Err(error) = switch_now_inner(&app_handle).await {
                warn!("[WallpaperSwitcher] 定时切换失败: {}", error);
                let _ = app_handle.emit(
                    "wallpaper-switcher-error",
                    serde_json::json!({ "message": error }),
                );
            }
        }
        if ACTIVE_SCHEDULER_INSTANCE_ID.load(Ordering::SeqCst) == instance_id {
            stop_scheduler();
        }
    });

    Ok(())
}

fn category_bits(category: Option<&str>) -> &'static str {
    match category.unwrap_or("general") {
        "anime" => "010",
        "people" => "001",
        _ => "100",
    }
}

fn wallhaven_sorting(source: &WallhavenSource) -> &'static str {
    match source {
        WallhavenSource::Hot => "hot",
        WallhavenSource::Toplist => "toplist",
    }
}

async fn fetch_wallhaven_page(
    app_handle: &AppHandle,
    params: WallhavenFetchParams,
) -> Result<WallhavenPage, String> {
    require_enabled(app_handle)?;
    let (screen_width, screen_height) = screen_size(app_handle);
    let page = params.page.unwrap_or(1).clamp(1, MAX_WALLHAVEN_PAGES);
    let mut query = vec![
        (
            "sorting".to_string(),
            wallhaven_sorting(&params.source).to_string(),
        ),
        ("purity".to_string(), "100".to_string()),
        (
            "categories".to_string(),
            category_bits(params.category.as_deref()).to_string(),
        ),
        (
            "atleast".to_string(),
            format!("{}x{}", screen_width, screen_height),
        ),
        ("page".to_string(), page.to_string()),
    ];
    if let Some(keyword) = params
        .query
        .as_deref()
        .map(str::trim)
        .filter(|value| !value.is_empty())
    {
        query.push(("q".to_string(), keyword.to_string()));
    }

    let client = reqwest::Client::builder()
        .user_agent(USER_AGENT)
        .connect_timeout(Duration::from_secs(12))
        .timeout(Duration::from_secs(30))
        .build()
        .map_err(|e| format!("创建 Wallhaven 客户端失败: {}", e))?;
    let response = client
        .get("https://wallhaven.cc/api/v1/search")
        .query(&query)
        .send()
        .await
        .map_err(|e| format!("请求 Wallhaven 失败: {}", e))?;
    if response.status().as_u16() == 429 {
        return Err("Wallhaven 请求过于频繁，请稍后再试".to_string());
    }
    let api = response
        .error_for_status()
        .map_err(|e| format!("请求 Wallhaven 失败: {}", e))?
        .json::<WallhavenApiResponse>()
        .await
        .map_err(|e| format!("解析 Wallhaven 数据失败: {}", e))?;

    Ok(WallhavenPage {
        data: api.data,
        page: api.meta.current_page,
        last_page: api.meta.last_page,
    })
}

#[tauri::command]
pub async fn wallpaper_get_config(app_handle: AppHandle) -> Result<WallpaperConfig, String> {
    require_enabled(&app_handle)?;
    Ok(load_config(&app_handle))
}

#[tauri::command]
pub async fn wallpaper_save_config(
    app_handle: AppHandle,
    config: WallpaperConfig,
) -> Result<(), String> {
    require_enabled(&app_handle)?;
    let mut config = config;
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
        supported: cfg!(target_os = "windows"),
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
    let images = scan_images_in_dir(&dir)?;
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
    save_config(&app_handle, &config)?;
    apply_wallpaper_path(&app_handle, &image, "固定图片", &config.fit_mode).await
}

#[tauri::command]
pub async fn wallpaper_switch_now(app_handle: AppHandle) -> Result<String, String> {
    require_enabled(&app_handle)?;
    switch_now_inner(&app_handle).await
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
    save_config(&app_handle, &config)?;
    let downloaded = download_wallhaven_image(&app_handle, &wallpaper).await?;
    apply_wallpaper_path(&app_handle, &downloaded, "Wallhaven", &config.fit_mode).await
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

pub fn apply_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        let config = load_config(app_handle);
        if config.schedule_enabled && config.auto_restore {
            if let Err(error) = start_scheduler(app_handle.clone()) {
                error!("[WallpaperSwitcher] 启动定时器失败: {}", error);
            } else {
                info!("[WallpaperSwitcher] 定时器已启动");
            }
        }
    } else {
        stop_scheduler();
    }
}
