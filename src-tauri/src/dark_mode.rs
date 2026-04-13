use chrono::{Datelike, Local, Timelike};
use log::{debug, error, info, warn};
use serde::{Deserialize, Serialize};
use std::sync::{atomic::{AtomicU64, Ordering}, Mutex};
use std::time::Duration;
use tauri::{AppHandle, Emitter};
use tokio::time;

#[cfg(target_os = "windows")]
use {
    winreg::enums::*,
    winreg::RegKey,
};

// 主题模式枚举
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub enum ThemeMode {
    System,   // 跟随系统
    Light,    // 始终浅色
    Dark,     // 始终深色
    Schedule, // 定时切换
}

// 定时切换类型
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub enum ScheduleType {
    SunBased, // 日出日落
    Custom,   // 自定义时间
}

// Auto Dark Mode 配置结构
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DarkModeConfig {
    pub theme_mode: ThemeMode,
    pub schedule_type: ScheduleType,
    pub custom_light_time: Option<String>,
    pub custom_dark_time: Option<String>,

    // 手动坐标（如果存在，始终优先于自动定位）
    pub manual_latitude: Option<f64>,
    pub manual_longitude: Option<f64>,
    pub manual_timezone_offset: Option<i32>,
    pub manual_location_name: Option<String>,

    // 自动定位缓存（IP）
    pub latitude: Option<f64>,
    pub longitude: Option<f64>,
    pub timezone_offset: Option<i32>,
    pub location_name: Option<String>,
    pub location_updated_at: Option<i64>, // Unix 时间戳（秒）
}

impl Default for DarkModeConfig {
    fn default() -> Self {
        Self {
            theme_mode: ThemeMode::System,
            schedule_type: ScheduleType::SunBased,
            custom_light_time: Some("06:00".to_string()),
            custom_dark_time: Some("18:00".to_string()),
            manual_latitude: None,
            manual_longitude: None,
            manual_timezone_offset: None,
            manual_location_name: None,
            latitude: None,
            longitude: None,
            timezone_offset: None,
            location_name: None,
            location_updated_at: None,
        }
    }
}

// 位置信息结构
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LocationInfo {
    pub latitude: f64,
    pub longitude: f64,
    pub city: String,
    pub region: String,
    pub country: String,
    pub timezone: String,
    pub timezone_offset: i32, // 分钟偏移
}

// 日出日落时间结构
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SunTimes {
    pub sunrise: String,  // "HH:MM" 格式
    pub sunset: String,   // "HH:MM" 格式
    pub is_day: bool,     // 当前是否为白天
}

// 全局状态存储
static DARK_MODE_CONFIG: Mutex<Option<DarkModeConfig>> = Mutex::new(None);
static SCHEDULER_RUNNING: Mutex<bool> = Mutex::new(false);
static SCHEDULER_INSTANCE_SEQ: AtomicU64 = AtomicU64::new(0);
static ACTIVE_SCHEDULER_INSTANCE_ID: AtomicU64 = AtomicU64::new(0);

// Windows系统主题控制
// 设置 Windows 10/11 全局深色/浅色模式，包括：
// - 应用程序主题 (AppsUseLightTheme)
// - 系统主题 (SystemUsesLightTheme) - 任务栏、开始菜单、通知中心、搜索等
#[cfg(target_os = "windows")]
pub fn set_windows_dark_mode(enabled: bool) -> Result<(), String> {
    use winreg::enums::*;
    use winreg::RegKey;

    let hkcu = RegKey::predef(HKEY_CURRENT_USER);

    debug!("Windows 系统主题控制开始执行");
    
    // 打开主题个性化注册表项
    let theme_key = hkcu
        .open_subkey_with_flags(
            "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize",
            KEY_SET_VALUE | KEY_READ,
        )
        .map_err(|e| format!("无法打开主题注册表项: {}", e))?;

    // 0 = 深色模式, 1 = 浅色模式
    let theme_value = if enabled { 0u32 } else { 1u32 };
    
    // 1. 设置应用程序主题 (UWP应用、部分Win32应用)
    theme_key
        .set_value("AppsUseLightTheme", &theme_value)
        .map_err(|e| format!("设置应用主题失败: {}", e))?;

    // 2. 设置系统主题 (任务栏、开始菜单、操作中心、通知、搜索框、文件资源管理器上下文菜单)
    theme_key
        .set_value("SystemUsesLightTheme", &theme_value)
        .map_err(|e| format!("设置系统主题失败: {}", e))?;

    // 3. 发送系统广播消息，通知所有窗口和系统组件主题已更改
    // 使用更短的超时时间（500ms）和异步消息，避免被慢响应的应用阻塞
    unsafe {
        use windows::Win32::Foundation::{LPARAM, WPARAM};
        use windows::Win32::UI::WindowsAndMessaging::{
            SendMessageTimeoutW, PostMessageW,
            HWND_BROADCAST, SMTO_ABORTIFHUNG, WM_SETTINGCHANGE, WM_THEMECHANGED,
        };

        let mut result = 0;

        // 发送 ImmersiveColorSet 消息 - 通知 UWP 和现代应用颜色变化
        // 减少超时时间到 500ms，避免长时间阻塞
        let immersive_color = "ImmersiveColorSet\0".encode_utf16().collect::<Vec<u16>>();
        SendMessageTimeoutW(
            HWND_BROADCAST,
            WM_SETTINGCHANGE,
            WPARAM(0),
            LPARAM(immersive_color.as_ptr() as isize),
            SMTO_ABORTIFHUNG,
            500,
            Some(&mut result),
        );

        // 发送 WindowsThemeElement 消息 - 通知传统 Win32 应用主题变化
        let theme_element = "WindowsThemeElement\0".encode_utf16().collect::<Vec<u16>>();
        SendMessageTimeoutW(
            HWND_BROADCAST,
            WM_SETTINGCHANGE,
            WPARAM(0),
            LPARAM(theme_element.as_ptr() as isize),
            SMTO_ABORTIFHUNG,
            500,
            Some(&mut result),
        );

        // 使用 PostMessage 异步发送，不等待响应，立即返回
        let personalize = "Personalize\0".encode_utf16().collect::<Vec<u16>>();
        let _ = PostMessageW(
            Some(HWND_BROADCAST),
            WM_SETTINGCHANGE,
            WPARAM(0),
            LPARAM(personalize.as_ptr() as isize),
        );

        // 发送 WM_THEMECHANGED 消息 - 通知主题完全变化（异步）
        let _ = PostMessageW(Some(HWND_BROADCAST), WM_THEMECHANGED, WPARAM(0), LPARAM(0));
    }

    info!("Windows 主题已设置为: {}", if enabled { "深色" } else { "浅色" });
    Ok(())
}

#[cfg(not(target_os = "windows"))]
pub fn set_windows_dark_mode(_enabled: bool) -> Result<(), String> {
    Err("此功能仅在Windows系统上可用".to_string())
}

// 获取当前Windows主题模式
#[cfg(target_os = "windows")]
pub fn get_windows_dark_mode() -> Result<bool, String> {
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    
    let theme_key = hkcu
        .open_subkey("SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize")
        .map_err(|e| format!("无法打开主题注册表项: {}", e))?;

    let apps_use_light: u32 = theme_key
        .get_value("AppsUseLightTheme")
        .unwrap_or(1);

    // 0 = 深色模式, 1 = 浅色模式
    Ok(apps_use_light == 0)
}

#[cfg(not(target_os = "windows"))]
pub fn get_windows_dark_mode() -> Result<bool, String> {
    Err("此功能仅在Windows系统上可用".to_string())
}

// 获取Windows系统时区信息
#[cfg(target_os = "windows")]
pub fn get_windows_timezone_info() -> Result<(String, i32), String> {
    // 使用chrono获取本地时区偏移
    let now = Local::now();
    let offset = now.offset().local_minus_utc() / 60; // 转换为分钟
    
    // 获取时区名称（简化版本）
    let timezone_name = format!("UTC{:+03}", offset / 60);
    
    Ok((timezone_name, offset))
}

#[cfg(not(target_os = "windows"))]
pub fn get_windows_timezone_info() -> Result<(String, i32), String> {
    Err("此功能仅在Windows系统上可用".to_string())
}

// 通过IP获取地理位置信息（带重试和备用源）
pub async fn get_location_by_ip() -> Result<LocationInfo, String> {
    // 尝试多个IP定位服务
    let apis = [
        // 主服务：ip-api.com（英文，国内可能访问慢）
        ("http://ip-api.com/json/?fields=status,country,regionName,city,lat,lon,timezone,offset", "ip-api.com"),
        // 备用服务：ip-api.com 中文站点
        ("http://ip-api.com/json/?fields=status,country,regionName,city,lat,lon,timezone,offset&lang=zh", "ip-api.com (CN)"),
    ];

    let client = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(10))
        .build()
        .map_err(|e| format!("Failed to create HTTP client: {}", e))?;

    for (url, name) in apis.iter() {
        match client.get(*url).send().await {
            Ok(response) => match response.json::<serde_json::Value>().await {
                Ok(json) if json["status"] == "success" => {
                    let latitude = json["lat"].as_f64().ok_or("Invalid latitude")?;
                    let longitude = json["lon"].as_f64().ok_or("Invalid longitude")?;
                    let city = json["city"].as_str().unwrap_or("Unknown").to_string();
                    let region = json["regionName"].as_str().unwrap_or("Unknown").to_string();
                    let country = json["country"].as_str().unwrap_or("Unknown").to_string();
                    let timezone = json["timezone"].as_str().unwrap_or("Unknown").to_string();
                    let timezone_offset_seconds = json["offset"].as_i64().unwrap_or(0) as i32;
                    let timezone_offset = timezone_offset_seconds / 60;

                    info!("Location fetched from {}: {}, {}", name, city, country);
                    return Ok(LocationInfo {
                        latitude,
                        longitude,
                        city,
                        region,
                        country,
                        timezone,
                        timezone_offset,
                    });
                }
                Ok(json) => {
                    warn!("Location API {} returned error: {:?}", name, json);
                }
                Err(e) => {
                    warn!("Failed to parse response from {}: {}", name, e);
                }
            },
            Err(e) => {
                warn!("Failed to fetch location from {}: {}", name, e);
            }
        }
    }

    // 所有API都失败时，返回错误
    Err("Failed to fetch location from all available APIs".to_string())
}

// 计算日出日落时间
pub fn calculate_sun_times(latitude: f64, longitude: f64, timezone_offset: i32) -> Result<SunTimes, String> {
    let now = Local::now();
    let julian_day = calculate_julian_day(now.year(), now.month() as i32, now.day() as i32);
    
    let (sunrise_utc, sunset_utc) = calculate_sunrise_sunset(latitude, longitude, julian_day)?;
    
    let timezone_offset_hours = timezone_offset as f64 / 60.0;
    let sunrise_local = sunrise_utc + timezone_offset_hours;
    let sunset_local = sunset_utc + timezone_offset_hours;
    
    // 格式化时间
    let sunrise_time = format_time(sunrise_local);
    let sunset_time = format_time(sunset_local);
    
    // 判断当前是否为白天
    let current_hour = now.hour() as f64 + now.minute() as f64 / 60.0;
    let is_day = current_hour >= sunrise_local && current_hour < sunset_local;
    
    Ok(SunTimes {
        sunrise: sunrise_time,
        sunset: sunset_time,
        is_day,
    })
}

// 计算儒略日
fn calculate_julian_day(year: i32, month: i32, day: i32) -> f64 {
    let a = (14 - month) / 12;
    let y = year + 4800 - a;
    let m = month + 12 * a - 3;
    
    day as f64 + (153 * m + 2) as f64 / 5.0 + 365.0 * y as f64 + y as f64 / 4.0 - y as f64 / 100.0 + y as f64 / 400.0 - 32045.0
}

// 计算日出日落时间（返回小时数，UTC时间）
// 使用更精确的算法，参考NOAA Solar Calculator
fn calculate_sunrise_sunset(lat: f64, lon: f64, julian_day: f64) -> Result<(f64, f64), String> {
    let lat_rad = lat.to_radians();
    
    // 计算世纪数
    let century = (julian_day - 2451545.0) / 36525.0;
    
    // 计算太阳几何平均经度 (度)
    let geom_mean_long_sun = (280.46646 + century * (36000.76983 + century * 0.0003032)) % 360.0;
    
    // 计算太阳几何平均近点角 (度)
    let geom_mean_anom_sun = 357.52911 + century * (35999.05029 - 0.0001537 * century);
    
    // 计算地球轨道离心率
    let eccent_earth_orbit = 0.016708634 - century * (0.000042037 + 0.0000001267 * century);
    
    // 计算太阳中心方程 (度)
    let sun_eq_of_ctr = geom_mean_anom_sun.to_radians().sin() * (1.914602 - century * (0.004817 + 0.000014 * century)) +
                       (2.0 * geom_mean_anom_sun.to_radians()).sin() * (0.019993 - 0.000101 * century) +
                       (3.0 * geom_mean_anom_sun.to_radians()).sin() * 0.000289;
    
    // 计算太阳真经度 (度)
    let sun_true_long = geom_mean_long_sun + sun_eq_of_ctr;
    
    // 计算太阳视经度 (度)
    let sun_app_long = sun_true_long - 0.00569 - 0.00478 * (125.04 - 1934.136 * century).to_radians().sin();
    
    // 计算黄赤交角的平均值 (度)
    let mean_obliq_ecliptic = 23.0 + (26.0 + (21.448 - century * (46.815 + century * (0.00059 - century * 0.001813))) / 60.0) / 60.0;
    
    // 计算修正的黄赤交角 (度)
    let obliq_corr = mean_obliq_ecliptic + 0.00256 * (125.04 - 1934.136 * century).to_radians().cos();
    
    // 计算太阳赤纬角 (弧度)
    let sun_declin = (obliq_corr.to_radians().sin() * sun_app_long.to_radians().sin()).asin();
    
    // 计算均时差 (分钟)
    let y = (obliq_corr / 2.0).to_radians().tan().powi(2);
    let eq_of_time = 4.0 * (y * (2.0 * geom_mean_long_sun.to_radians()).sin() -
                           2.0 * eccent_earth_orbit * geom_mean_anom_sun.to_radians().sin() +
                           4.0 * eccent_earth_orbit * y * geom_mean_anom_sun.to_radians().sin() * (2.0 * geom_mean_long_sun.to_radians()).cos() -
                           0.5 * y * y * (4.0 * geom_mean_long_sun.to_radians()).sin() -
                           1.25 * eccent_earth_orbit * eccent_earth_orbit * (2.0 * geom_mean_anom_sun.to_radians()).sin());
    
    // 计算日出时角 (弧度) - 使用 -0.833 度作为地平线角度（包含大气折射）
    let sunrise_angle = -0.833_f64.to_radians();
    let cos_hour_angle = (sunrise_angle.sin() - lat_rad.sin() * sun_declin.sin()) / (lat_rad.cos() * sun_declin.cos());
    
    if cos_hour_angle.abs() > 1.0 {
        return Err("该位置在此日期无日出日落".to_string());
    }
    
    let hour_angle = cos_hour_angle.acos();
    
    // 计算日出和日落时间 (UTC小时)
    let solar_noon = (720.0 - 4.0 * lon - eq_of_time) / 60.0; // 太阳正午时间
    let sunrise_utc = solar_noon - hour_angle.to_degrees() * 4.0 / 60.0;
    let sunset_utc = solar_noon + hour_angle.to_degrees() * 4.0 / 60.0;
    
    Ok((sunrise_utc, sunset_utc))
}

// 格式化时间为 HH:MM 格式
fn format_time(hours: f64) -> String {
    let mut h = hours as i32;
    let m = ((hours - h as f64) * 60.0) as i32;
    
    // 确保小时在0-23范围内
    while h < 0 {
        h += 24;
    }
    while h >= 24 {
        h -= 24;
    }
    
    format!("{:02}:{:02}", h, m.clamp(0, 59))
}

// 保存配置（使用数据库存储）
pub fn save_config(_app_handle: &AppHandle, config: &DarkModeConfig) -> Result<(), String> {
    use crate::json_config;
    use crate::APP;
    
    // 序列化配置为 JSON 字符串
    let config_json = serde_json::to_string(config)
        .map_err(|e| format!("序列化深色模式配置失败: {}", e))?;
    
    // 保存到 app.json
    let app = APP.get().ok_or("应用未初始化")?;
    info!("正在保存深色模式配置到 app.json");
    json_config::set_app_config_value(app, "dark_mode_config", config_json)?;
    
    // 更新全局状态
    *DARK_MODE_CONFIG.lock().unwrap() = Some(config.clone());
    
    Ok(())
}

// 加载配置（从 app.json 读取）
pub fn load_config(_app_handle: &AppHandle) -> DarkModeConfig {
    use crate::json_config;
    
    if let Some(config_json) = json_config::get_app_config_value::<String>(_app_handle, "dark_mode_config") {
        if !config_json.is_empty() {
            if let Ok(config) = serde_json::from_str::<DarkModeConfig>(&config_json) {
                *DARK_MODE_CONFIG.lock().unwrap() = Some(config.clone());
                return config;
            }
        }
    }
    
    // 如果配置不存在，只返回默认配置，不自动保存
    // 配置应该在用户首次设置时保存
    let default_config = DarkModeConfig::default();
    *DARK_MODE_CONFIG.lock().unwrap() = Some(default_config.clone());
    
    default_config
}

fn now_unix_ts() -> i64 {
    use std::time::{SystemTime, UNIX_EPOCH};
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_secs() as i64)
        .unwrap_or(0)
}

fn location_cache_expired(config: &DarkModeConfig, ttl_seconds: i64) -> bool {
    match config.location_updated_at {
        Some(updated_at) => now_unix_ts().saturating_sub(updated_at) > ttl_seconds,
        None => true,
    }
}

async fn refresh_location_if_needed(app_handle: &AppHandle, config: &mut DarkModeConfig, force: bool) {
    // 手动坐标存在时，不覆盖自动缓存，也不触发 IP 定位
    if config.manual_latitude.is_some() && config.manual_longitude.is_some() {
        return;
    }

    let should_refresh = force
        || config.latitude.is_none()
        || config.longitude.is_none()
        || location_cache_expired(config, 24 * 60 * 60);

    if !should_refresh {
        return;
    }

    info!("定时模式：开始刷新定位信息（force={}）", force);
    match get_location_by_ip().await {
        Ok(location) => {
            config.latitude = Some(location.latitude);
            config.longitude = Some(location.longitude);
            config.timezone_offset = Some(location.timezone_offset);
            config.location_name = Some(format!("{}, {}", location.city, location.country));
            config.location_updated_at = Some(now_unix_ts());

            if let Err(e) = save_config(app_handle, config) {
                error!("Failed to save refreshed location: {}", e);
            } else {
                info!("定位信息刷新成功: {}, {}", location.city, location.country);
            }
        }
        Err(e) => {
            warn!("定位信息刷新失败: {}", e);
        }
    }
}

fn resolve_sun_calc_params(config: &DarkModeConfig) -> Option<(f64, f64, i32, String)> {
    // 手动坐标优先
    if let (Some(lat), Some(lon)) = (config.manual_latitude, config.manual_longitude) {
        let tz = config
            .manual_timezone_offset
            .or(config.timezone_offset)
            .or_else(|| get_windows_timezone_info().ok().map(|(_, offset)| offset))
            .unwrap_or(0);

        let name = config
            .manual_location_name
            .clone()
            .unwrap_or_else(|| "Manual Location".to_string());

        return Some((lat, lon, tz, format!("manual:{}", name)));
    }

    if let (Some(lat), Some(lon)) = (config.latitude, config.longitude) {
        let tz = config
            .timezone_offset
            .or_else(|| get_windows_timezone_info().ok().map(|(_, offset)| offset))
            .unwrap_or(0);

        let name = config
            .location_name
            .clone()
            .unwrap_or_else(|| "IP Location".to_string());

        return Some((lat, lon, tz, format!("ip:{}", name)));
    }

    None
}

// 启动定时切换服务
pub fn start_scheduler(app_handle: AppHandle) -> Result<(), String> {
    let instance_id = SCHEDULER_INSTANCE_SEQ.fetch_add(1, Ordering::SeqCst) + 1;

    let mut running = SCHEDULER_RUNNING.lock().unwrap();
    if *running {
        let active_id = ACTIVE_SCHEDULER_INSTANCE_ID.load(Ordering::SeqCst);
        info!("[调度器] start_scheduler 被调用，但已有实例在运行: active_instance_id={}", active_id);
        return Ok(()); // 已经在运行
    }
    *running = true;
    ACTIVE_SCHEDULER_INSTANCE_ID.store(instance_id, Ordering::SeqCst);
    drop(running);

    info!("[调度器] 启动新实例: instance_id={}", instance_id);

    let app_handle_clone = app_handle.clone();
    tauri::async_runtime::spawn(async move {
        let mut config = load_config(&app_handle_clone);

        // System模式不需要调度器，直接返回
        if config.theme_mode == ThemeMode::System {
            *SCHEDULER_RUNNING.lock().unwrap() = false;
            return;
        }

        // 首次启动时刷新定位（仅 Schedule + SunBased）
        if config.theme_mode == ThemeMode::Schedule && config.schedule_type == ScheduleType::SunBased {
            refresh_location_if_needed(&app_handle_clone, &mut config, false).await;
        }

        // 立即执行一次主题检查，确保前端能收到当前实际状态
        if let Err(e) = check_and_switch_theme(&app_handle_clone, &config).await {
            error!("Initial theme switch failed: {}", e);
        }

        // 主循环：简化策略 - 每 30 秒检查一次，确保可靠性
        // 这种方式虽然会多一些 CPU 唤醒，但能保证：
        // 1. 到达切换时间后 30 秒内必定执行
        // 2. 能应对系统时间变更
        // 3. 逻辑简单，不易出错
        info!("[调度器][实例:{}] 主循环已启动，每 30 秒检查一次主题", instance_id);
        loop {
            // 防并发：若当前实例已不是活跃实例，立即退出
            let active_id = ACTIVE_SCHEDULER_INSTANCE_ID.load(Ordering::SeqCst);
            if active_id != instance_id {
                info!("[调度器][实例:{}] 检测到已被新实例接管(active_instance_id={})，当前实例退出", instance_id, active_id);
                break;
            }

            // 检查是否应该停止
            if !*SCHEDULER_RUNNING.lock().unwrap() {
                info!("[调度器][实例:{}] 收到停止信号，准备退出", instance_id);
                break;
            }

            let mut config = load_config(&app_handle_clone);

            // 只有定时模式才需要调度
            if config.theme_mode != ThemeMode::Schedule {
                // 非 Schedule 模式，每 60 秒检查一次是否切换回 Schedule
                info!("[调度器][实例:{}] 当前非 Schedule 模式，60 秒后重试", instance_id);
                time::sleep(Duration::from_secs(60)).await;
                continue;
            }

            // SunBased 模式下，周期性刷新定位缓存（24h 过期）
            if config.schedule_type == ScheduleType::SunBased {
                refresh_location_if_needed(&app_handle_clone, &mut config, false).await;
            }

            // 执行主题检查和切换
            debug!("[调度器][实例:{}] 开始主题检查，当前时间 {}", instance_id, Local::now().format("%H:%M:%S"));
            if let Err(e) = check_and_switch_theme(&app_handle_clone, &config).await {
                error!("[调度器][实例:{}] 主题切换检查失败: {}", instance_id, e);
            }

            // 等待 30 秒后再次检查
            time::sleep(Duration::from_secs(30)).await;
        }

        // 实例退出时，仅当自己仍为活跃实例才清理全局状态
        let active_id = ACTIVE_SCHEDULER_INSTANCE_ID.load(Ordering::SeqCst);
        if active_id == instance_id {
            *SCHEDULER_RUNNING.lock().unwrap() = false;
            ACTIVE_SCHEDULER_INSTANCE_ID.store(0, Ordering::SeqCst);
            info!("[调度器][实例:{}] 已停止，并清理活跃实例标记", instance_id);
        } else {
            info!("[调度器][实例:{}] 已退出（当前活跃实例为:{}）", instance_id, active_id);
        }
    });

    Ok(())
}

// 停止定时切换服务
pub fn stop_scheduler() {
    let active_id = ACTIVE_SCHEDULER_INSTANCE_ID.load(Ordering::SeqCst);
    info!("[调度器] 请求停止调度器，active_instance_id={}", active_id);
    *SCHEDULER_RUNNING.lock().unwrap() = false;
    ACTIVE_SCHEDULER_INSTANCE_ID.store(0, Ordering::SeqCst);
}

// 检查并切换主题
async fn check_and_switch_theme(app_handle: &AppHandle, config: &DarkModeConfig) -> Result<(), String> {
    let now = Local::now();
    let current_time = format!("{:02}:{:02}", now.hour(), now.minute());
    debug!("[主题检查] 当前时间={}, 定时类型={:?}", current_time, config.schedule_type);

    let should_be_dark = match config.schedule_type {
        ScheduleType::Custom => {
            if let (Some(light_time), Some(dark_time)) = (&config.custom_light_time, &config.custom_dark_time) {
                debug!("[主题检查] 自定义模式: 深色时间={}, 浅色时间={}", dark_time, light_time);
                is_dark_time_custom(&current_time, dark_time, light_time)
            } else {
                debug!("[主题检查] 自定义模式未设置时间，跳过");
                return Ok(()); // 没有设置自定义时间
            }
        }
        ScheduleType::SunBased => {
            if let Some((lat, lon, timezone_offset, source)) = resolve_sun_calc_params(config) {
                match calculate_sun_times(lat, lon, timezone_offset) {
                    Ok(sun_times) => {
                        debug!(
                            "[主题检查] 日出日落模式: 来源={}, 日出={}, 日落={}, 白天={}, 纬度={}, 经度={}, 时区偏移={}分钟",
                            source,
                            sun_times.sunrise,
                            sun_times.sunset,
                            sun_times.is_day,
                            lat,
                            lon,
                            timezone_offset
                        );
                        is_dark_time(&current_time, &sun_times.sunrise, &sun_times.sunset)
                    }
                    Err(e) => {
                        error!("[ThemeCheck] SunBased: calculate_sun_times failed: {}", e);
                        return Err(e);
                    }
                }
            } else {
                debug!("[主题检查] 日出日落模式缺少位置信息（手动/IP均无），跳过");
                return Ok(()); // 没有位置信息
            }
        }
    };

    debug!("[主题检查] 目标是否深色={}", should_be_dark);

    // 获取当前系统主题状态
    let current_is_dark = get_windows_dark_mode().unwrap_or(false);
    debug!("[主题检查] 当前是否深色={}", current_is_dark);

    // 只有当需要切换时才修改 Windows 主题
    if should_be_dark != current_is_dark {
        info!("[主题检查] 主题不一致，准备切换: {} -> {}", if current_is_dark { "深色" } else { "浅色" }, if should_be_dark { "深色" } else { "浅色" });
        // 设置主题，失败时记录并通知用户
        if let Err(e) = set_windows_dark_mode(should_be_dark) {
            error!("Failed to switch theme: {}", e);
            // 通知前端主题切换失败
            let _ = app_handle.emit("dark-mode-changed", serde_json::json!({
                "isDark": current_is_dark,
                "reason": "switch_failed",
                "error": e
            }));
            return Err(e);
        }

        // 更新托盘菜单主题状态
        crate::tray::update_tray_theme_status(app_handle);

        // 通知前端主题已更改
    debug!("[主题检查] 已通知前端主题变化: isDark={}", should_be_dark);
        let _ = app_handle.emit("dark-mode-changed", serde_json::json!({
            "isDark": should_be_dark,
            "reason": "auto_switch"
        }));

        info!("主题已自动切换为: {}", if should_be_dark { "深色" } else { "浅色" });
    } else {
        // 不需要切换，只保留调试日志
        debug!("[主题检查] 无需切换，当前={} 与目标={} 一致", current_is_dark, should_be_dark);
    }

    Ok(())
}

// 将 "HH:MM" 转为当日分钟数 (0..1440)
fn time_to_minutes(time_str: &str) -> i32 {
    let parts: Vec<&str> = time_str.split(':').collect();
    if parts.len() == 2 {
        let hours: i32 = parts[0].parse().unwrap_or(0);
        let minutes: i32 = parts[1].parse().unwrap_or(0);
        hours * 60 + minutes
    } else {
        0
    }
}

// 日出日落模式：日出前或日落后为深色
fn is_dark_time(current: &str, sunrise: &str, sunset: &str) -> bool {
    let current_min = time_to_minutes(current);
    let sunrise_min = time_to_minutes(sunrise);
    let sunset_min = time_to_minutes(sunset);
    current_min < sunrise_min || current_min >= sunset_min
}

// 自定义时间模式：
// dark_time: 切换到深色的时间
// light_time: 切换到浅色的时间
// 例如：dark_time=18:00, light_time=06:00 表示 18:00 切换到深色，06:00 切换到浅色
fn is_dark_time_custom(current: &str, dark_time: &str, light_time: &str) -> bool {
    let current_min = time_to_minutes(current);
    let dark_min = time_to_minutes(dark_time);
    let light_min = time_to_minutes(light_time);
    
    let result = if dark_min < light_min {
        // 同一天内切换：深色时段 = [dark_time, light_time)
        // 例如：dark=08:00, light=20:00，则 08:00-20:00 是深色
        current_min >= dark_min && current_min < light_min
    } else {
        // 跨天切换：深色时段 = [dark_time, 24:00) ∪ [0, light_time)
        // 例如：dark=18:00, light=06:00，则 18:00-06:00 是深色
        current_min >= dark_min || current_min < light_min
    };
    
    debug!("[自定义时间判断] 当前={}({}分), 深色={}({}分), 浅色={}({}分), 结果={}", 
        current, current_min, dark_time, dark_min, light_time, light_min, result);
    
    result
}

// 手动切换主题
pub fn toggle_theme(app_handle: Option<&AppHandle>) -> Result<bool, String> {
    // 检查启动定时切换服务是否启用，如果启用，则停止
    if *SCHEDULER_RUNNING.lock().unwrap() {
        stop_scheduler();
    }

    let current_is_dark = get_windows_dark_mode()?;
    let new_state = !current_is_dark;
    
    set_windows_dark_mode(new_state)?;
    
    info!("手动切换系统主题: {} -> {}",
        if current_is_dark { "深色" } else { "浅色" },
        if new_state { "深色" } else { "浅色" }
    );
    
    // 发送主题变化事件通知前端
    if let Some(handle) = app_handle {
        // 更新托盘菜单主题状态
        crate::tray::update_tray_theme_status(handle);
        
        debug!("手动切换后已更新托盘菜单并通知前端主题变化");
        
        let _ = handle.emit("dark-mode-changed", serde_json::json!({
            "isDark": new_state,
            "reason": "manual_toggle"
        }));
    }
    
    Ok(new_state)
}

// 获取当前配置状态
pub fn get_current_status(app_handle: &AppHandle) -> Result<serde_json::Value, String> {
    let config = load_config(app_handle);
    let current_is_dark = get_windows_dark_mode().unwrap_or(false);
    let scheduler_running = *SCHEDULER_RUNNING.lock().unwrap();

    let sun_calc_debug = if config.schedule_type == ScheduleType::SunBased {
        if let Some((lat, lon, timezone_offset, source)) = resolve_sun_calc_params(&config) {
            match calculate_sun_times(lat, lon, timezone_offset) {
                Ok(sun_times) => serde_json::json!({
                    "source": source,
                    "latitude": lat,
                    "longitude": lon,
                    "timezoneOffset": timezone_offset,
                    "sunrise": sun_times.sunrise,
                    "sunset": sun_times.sunset,
                    "isDay": sun_times.is_day
                }),
                Err(e) => serde_json::json!({
                    "source": source,
                    "latitude": lat,
                    "longitude": lon,
                    "timezoneOffset": timezone_offset,
                    "error": e
                }),
            }
        } else {
            serde_json::json!({"error": "no_location"})
        }
    } else {
        serde_json::json!({"info": "not_sun_based_mode"})
    };
    
    Ok(serde_json::json!({
        "config": config,
        "currentIsDark": current_is_dark,
        "schedulerRunning": scheduler_running,
        "systemTimezone": get_windows_timezone_info().unwrap_or(("Unknown".to_string(), 0)),
        "sunCalcDebug": sun_calc_debug
    }))
}
