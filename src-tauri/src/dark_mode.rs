use chrono::{Datelike, Local, Timelike};
use log::{error, info, warn};
use serde::{Deserialize, Serialize};
use std::sync::Mutex;
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
    pub latitude: Option<f64>,
    pub longitude: Option<f64>,
    pub timezone_offset: Option<i32>,
    pub location_name: Option<String>,
}

impl Default for DarkModeConfig {
    fn default() -> Self {
        Self {
            theme_mode: ThemeMode::Schedule,
            schedule_type: ScheduleType::SunBased,
            custom_light_time: Some("06:00".to_string()),
            custom_dark_time: Some("18:00".to_string()),
            latitude: None,
            longitude: None,
            timezone_offset: None,
            location_name: None,
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

/// Windows系统主题控制
#[cfg(target_os = "windows")]
pub fn set_windows_dark_mode(enabled: bool) -> Result<(), String> {
    use winreg::enums::*;
    use winreg::RegKey;

    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    
    // 设置应用程序主题
    let theme_key = hkcu
        .open_subkey_with_flags(
            "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize",
            KEY_SET_VALUE,
        )
        .map_err(|e| format!("无法打开主题注册表项: {}", e))?;

    let theme_value = if enabled { 0u32 } else { 1u32 };
    
    // AppsUseLightTheme: 0 = 深色模式, 1 = 浅色模式
    theme_key
        .set_value("AppsUseLightTheme", &theme_value)
        .map_err(|e| format!("设置应用主题失败: {}", e))?;

    // SystemUsesLightTheme: 0 = 深色模式, 1 = 浅色模式  
    theme_key
        .set_value("SystemUsesLightTheme", &theme_value)
        .map_err(|e| format!("设置系统主题失败: {}", e))?;

    // 发送系统消息，通知所有窗口主题已更改
    unsafe {
        use windows::Win32::Foundation::{LPARAM, WPARAM};
        use windows::Win32::UI::WindowsAndMessaging::{
            SendMessageTimeoutW, HWND_BROADCAST, SMTO_ABORTIFHUNG, WM_SETTINGCHANGE,
        };

        let setting = "ImmersiveColorSet\0".encode_utf16().collect::<Vec<u16>>();
        let mut result = 0;

        SendMessageTimeoutW(
            HWND_BROADCAST,
            WM_SETTINGCHANGE,
            WPARAM(0),
            LPARAM(setting.as_ptr() as isize),
            SMTO_ABORTIFHUNG,
            2000,
            Some(&mut result),
        );
    }

    info!("Windows深色模式设置完成: {}", if enabled { "深色" } else { "浅色" });
    Ok(())
}

#[cfg(not(target_os = "windows"))]
pub fn set_windows_dark_mode(_enabled: bool) -> Result<(), String> {
    Err("此功能仅在Windows系统上可用".to_string())
}

/// 获取当前Windows主题模式
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

/// 获取Windows系统时区信息
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

/// 通过IP获取地理位置信息
pub async fn get_location_by_ip() -> Result<LocationInfo, String> {
    let client = reqwest::Client::new();
    
    // 使用免费的IP地理位置服务
    let response = client
        .get("http://ip-api.com/json/?fields=status,country,regionName,city,lat,lon,timezone,offset")
        .send()
        .await
        .map_err(|e| format!("请求地理位置失败: {}", e))?;

    let json: serde_json::Value = response
        .json()
        .await
        .map_err(|e| format!("解析地理位置响应失败: {}", e))?;

    if json["status"] != "success" {
        return Err("获取地理位置失败".to_string());
    }

    let latitude = json["lat"].as_f64().ok_or("无效的纬度")?;
    let longitude = json["lon"].as_f64().ok_or("无效的经度")?;
    let city = json["city"].as_str().unwrap_or("Unknown").to_string();
    let region = json["regionName"].as_str().unwrap_or("Unknown").to_string();
    let country = json["country"].as_str().unwrap_or("Unknown").to_string();
    let timezone = json["timezone"].as_str().unwrap_or("Unknown").to_string();
    let timezone_offset_seconds = json["offset"].as_i64().unwrap_or(0) as i32; // 偏移量是秒为单位
    let timezone_offset = timezone_offset_seconds / 60; // 转换为分钟
    
    Ok(LocationInfo {
        latitude,
        longitude,
        city,
        region,
        country,
        timezone,
        timezone_offset,
    })
}

/// 计算日出日落时间
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

/// 计算儒略日
fn calculate_julian_day(year: i32, month: i32, day: i32) -> f64 {
    let a = (14 - month) / 12;
    let y = year + 4800 - a;
    let m = month + 12 * a - 3;
    
    day as f64 + (153 * m + 2) as f64 / 5.0 + 365.0 * y as f64 + y as f64 / 4.0 - y as f64 / 100.0 + y as f64 / 400.0 - 32045.0
}

/// 计算日出日落时间（返回小时数，UTC时间）
/// 使用更精确的算法，参考NOAA Solar Calculator
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

/// 格式化时间为 HH:MM 格式
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

/// 保存配置（使用数据库存储）
pub fn save_config(_app_handle: &AppHandle, config: &DarkModeConfig) -> Result<(), String> {
    use crate::db;
    
    // 序列化配置为 JSON 字符串
    let config_json = serde_json::to_string(config)
        .map_err(|e| format!("序列化深色模式配置失败: {}", e))?;
    
    // 保存到数据库
    db::set_setting_string("darkModeConfig", &config_json)
        .map_err(|e| format!("保存深色模式配置失败: {}", e))?;
    
    // 更新全局状态
    *DARK_MODE_CONFIG.lock().unwrap() = Some(config.clone());
    
    info!("深色模式配置已保存到数据库");
    Ok(())
}

/// 加载配置（从数据库读取）
pub fn load_config(_app_handle: &AppHandle) -> DarkModeConfig {
    use crate::db;
    
    if let Some(config_json) = db::get_setting_string("darkModeConfig") {
        if !config_json.is_empty() {
            if let Ok(config) = serde_json::from_str::<DarkModeConfig>(&config_json) {
                *DARK_MODE_CONFIG.lock().unwrap() = Some(config.clone());
                return config;
            }
        }
    }
    
    let default_config = DarkModeConfig::default();
    *DARK_MODE_CONFIG.lock().unwrap() = Some(default_config.clone());
    
    if let Ok(config_json) = serde_json::to_string(&default_config) {
        let _ = db::set_setting_string("darkModeConfig", &config_json);
    }
    
    default_config
}

/// 启动定时切换服务
pub fn start_scheduler(app_handle: AppHandle) -> Result<(), String> {
    let mut running = SCHEDULER_RUNNING.lock().unwrap();
    if *running {
        return Ok(()); // 已经在运行
    }
    *running = true;
    drop(running);

    let app_handle_clone = app_handle.clone();
    tauri::async_runtime::spawn(async move {
        // 首次启动时检查是否需要自动获取位置信息
        let mut config = load_config(&app_handle_clone);
        if config.theme_mode == ThemeMode::Schedule 
            && config.schedule_type == ScheduleType::SunBased 
            && config.latitude.is_none() 
        {
            info!("首次启动，自动获取位置信息...");
            if let Ok(location) = get_location_by_ip().await {
                config.latitude = Some(location.latitude);
                config.longitude = Some(location.longitude);
                config.timezone_offset = Some(location.timezone_offset);
                config.location_name = Some(format!("{}, {}", location.city, location.country));
                
                // 保存更新后的配置
                if let Err(e) = save_config(&app_handle_clone, &config) {
                    error!("保存位置信息失败: {}", e);
                } else {
                    info!("自动获取位置信息成功: {}, {}", location.city, location.country);
                }
            } else {
                warn!("自动获取位置信息失败，将使用默认时间");
            }
        }
        
        // 立即执行一次主题检查（不等待第一个interval）
        if config.theme_mode == ThemeMode::Schedule {
            if let Err(e) = check_and_switch_theme(&app_handle_clone, &config).await {
                error!("首次主题切换失败: {}", e);
            }
        }
        
        let mut interval = time::interval(Duration::from_secs(60)); // 每分钟检查一次

        loop {
            interval.tick().await;

            // 检查是否应该停止
            if !*SCHEDULER_RUNNING.lock().unwrap() {
                break;
            }

            let config = load_config(&app_handle_clone);
            
            // 只有定时模式才需要调度
            if config.theme_mode != ThemeMode::Schedule {
                continue;
            }

            // 执行主题切换逻辑
            if let Err(e) = check_and_switch_theme(&app_handle_clone, &config).await {
                error!("主题切换失败: {}", e);
            }
        }

        info!("Auto Dark Mode定时切换服务已停止");
    });

    Ok(())
}

/// 停止定时切换服务
pub fn stop_scheduler() {
    info!("停止Auto Dark Mode定时切换服务");
    *SCHEDULER_RUNNING.lock().unwrap() = false;
}

/// 检查并切换主题
async fn check_and_switch_theme(app_handle: &AppHandle, config: &DarkModeConfig) -> Result<(), String> {
    let now = Local::now();
    let current_time = format!("{:02}:{:02}", now.hour(), now.minute());
    
    let should_be_dark = match config.schedule_type {
        ScheduleType::Custom => {
            // 自定义时间模式
            if let (Some(light_time), Some(dark_time)) = (&config.custom_light_time, &config.custom_dark_time) {
                is_dark_time(&current_time, light_time, dark_time)
            } else {
                return Ok(()); // 没有设置自定义时间
            }
        }
        ScheduleType::SunBased => {
            // 日出日落模式
            if let (Some(lat), Some(lon)) = (config.latitude, config.longitude) {
                let timezone_offset = config.timezone_offset.unwrap_or_else(|| {
                    get_windows_timezone_info().map(|(_, offset)| offset).unwrap_or(0)
                });
                
                let sun_times = calculate_sun_times(lat, lon, timezone_offset)?;
                is_dark_time(&current_time, &sun_times.sunrise, &sun_times.sunset)
            } else {
                return Ok(()); // 没有位置信息
            }
        }
    };

    // 获取当前系统主题状态
    let current_is_dark = get_windows_dark_mode().unwrap_or(false);
    
    // 只有当需要切换时才执行
    if should_be_dark != current_is_dark {
        set_windows_dark_mode(should_be_dark)?;
        
        // 更新托盘菜单主题状态
        crate::tray::update_tray_theme_status(app_handle);
        
        // 通知前端主题已更改
        let _ = app_handle.emit("dark-mode-changed", serde_json::json!({
            "isDark": should_be_dark,
            "reason": "auto_switch"
        }));
        
    }

    Ok(())
}

/// 判断指定时间是否应该为深色模式
fn is_dark_time(current: &str, sunrise: &str, sunset: &str) -> bool {
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

    let current_min = time_to_minutes(current);
    let sunrise_min = time_to_minutes(sunrise);
    let sunset_min = time_to_minutes(sunset);

    current_min < sunrise_min || current_min >= sunset_min
}

/// 手动切换主题
pub fn toggle_theme(app_handle: Option<&AppHandle>) -> Result<bool, String> {
    // 检查启动定时切换服务是否启用，如果启用，则停止
    if *SCHEDULER_RUNNING.lock().unwrap() {
        stop_scheduler();
    }

    let current_is_dark = get_windows_dark_mode()?;
    let new_state = !current_is_dark;
    
    set_windows_dark_mode(new_state)?;
    
    info!("手动切换主题: {} -> {}", 
        if current_is_dark { "深色" } else { "浅色" },
        if new_state { "深色" } else { "浅色" }
    );
    
    // 发送主题变化事件通知前端
    if let Some(handle) = app_handle {
        // 更新托盘菜单主题状态
        crate::tray::update_tray_theme_status(handle);
        
        let _ = handle.emit("dark-mode-changed", serde_json::json!({
            "isDark": new_state,
            "reason": "manual_toggle"
        }));
    }
    
    Ok(new_state)
}

/// 获取当前配置状态
pub fn get_current_status(app_handle: &AppHandle) -> Result<serde_json::Value, String> {
    let config = load_config(app_handle);
    let current_is_dark = get_windows_dark_mode().unwrap_or(false);
    let scheduler_running = *SCHEDULER_RUNNING.lock().unwrap();
    
    Ok(serde_json::json!({
        "config": config,
        "currentIsDark": current_is_dark,
        "schedulerRunning": scheduler_running,
        "systemTimezone": get_windows_timezone_info().unwrap_or(("Unknown".to_string(), 0))
    }))
}
