// App 生命周期与初始化辅助模块
// 从 lib.rs 中提取的 setup 相关逻辑，降低主入口文件复杂度

use crate::APP;
use log::info;
use std::sync::Mutex;
use std::time::{Duration, Instant};
use tauri::Manager;

// App 初始化防抖机制（防止多窗口重复初始化）
static APP_INIT_STATE: Mutex<Option<Instant>> = Mutex::new(None);
static APP_INITIALIZED: Mutex<bool> = Mutex::new(false);

pub const AUTO_START_BACKGROUND_DELAY_SECS: u64 = 15;
pub const POST_UPDATE_STARTUP_DELAY_MILLIS: u64 = 1800;
const SETUP_RESTART_ARG: &str = "--setup-restart";
const SETUP_RESTART_DELAY_ARG: &str = "--setup-restart-delay-ms";
const MAX_SETUP_RESTART_DELAY_MILLIS: u64 = 5_000;

/// 检测本次启动是否为 setup 重启
pub fn is_setup_restart_launch() -> bool {
    std::env::args().any(|arg| arg == SETUP_RESTART_ARG)
}

/// 如果命令行携带了 setup-restart-delay 参数，则在启动时等待对应毫秒数
pub fn apply_setup_restart_delay() {
    let args: Vec<String> = std::env::args().collect();
    let delay = args
        .windows(2)
        .find_map(|pair| {
            if pair[0] == SETUP_RESTART_DELAY_ARG {
                pair[1].parse::<u64>().ok()
            } else {
                None
            }
        })
        .map(|millis| millis.min(MAX_SETUP_RESTART_DELAY_MILLIS));

    if let Some(delay) = delay {
        std::thread::sleep(Duration::from_millis(delay));
    }
}

/// 判断本次启动是否为后台自启动模式
pub fn is_auto_start_launch(app_handle: &tauri::AppHandle) -> bool {
    let has_auto_start_flag = std::env::args().any(|arg| arg == "--flag1" || arg == "--flag2");
    let has_setup_restart_flag = is_setup_restart_launch();
    let setup_restart_pending: bool =
        crate::json_config::get_app_config_value(app_handle, "setup_restart_pending")
            .unwrap_or(false);

    if has_setup_restart_flag {
        info!("[Startup] setup restart argument detected; forcing foreground startup");
        if setup_restart_pending {
            let _ = crate::json_config::set_app_config_value(
                app_handle,
                "setup_restart_pending",
                false,
            );
        }
        return false;
    }

    if !has_auto_start_flag {
        if setup_restart_pending {
            let _ = crate::json_config::set_app_config_value(
                app_handle,
                "setup_restart_pending",
                false,
            );
        }
        return false;
    }

    if setup_restart_pending {
        info!("[Startup] setup restart marker detected; forcing foreground startup");
        let _ = crate::json_config::set_app_config_value(app_handle, "setup_restart_pending", false);
        return false;
    }

    true
}

/// 注册 App 初始化请求（防抖）
#[tauri::command]
pub fn register_app_init_request() {
    let mut state = APP_INIT_STATE.lock().unwrap();
    *state = Some(Instant::now());
}

/// 检查是否应该执行 App 初始化（防抖检查）
/// 等待 500ms，如果没有新的请求，则允许执行
#[tauri::command]
pub async fn should_execute_app_init() -> bool {
    use tokio::time::sleep;

    sleep(Duration::from_millis(500)).await;

    let mut initialized = APP_INITIALIZED.lock().unwrap();
    if *initialized {
        return false;
    }

    let state = APP_INIT_STATE.lock().unwrap();
    if let Some(last_request) = *state {
        let elapsed = last_request.elapsed();
        if elapsed >= Duration::from_millis(450) {
            drop(state);
            *initialized = true;
            return true;
        }
    }

    false
}

/// 清理旧日志文件（保留最近7天的日志）
pub fn cleanup_old_logs() {
    use std::fs;
    use std::time::SystemTime;

    let app = match APP.get() {
        Some(app) => app,
        None => return,
    };

    let log_dir = match app.path().app_log_dir() {
        Ok(dir) => dir,
        Err(e) => {
            log::warn!("无法获取日志目录: {}", e);
            return;
        }
    };

    if !log_dir.exists() {
        return;
    }

    let now = SystemTime::now();
    let seven_days_ago = now - Duration::from_secs(7 * 24 * 3600);

    let mut cleaned_count = 0;
    let mut cleaned_size = 0u64;

    if let Ok(entries) = fs::read_dir(&log_dir) {
        for entry in entries.flatten() {
            let path = entry.path();

            if path.is_file() && path.extension().and_then(|s| s.to_str()) == Some("log") {
                if let Ok(metadata) = fs::metadata(&path) {
                    if let Ok(modified) = metadata.modified() {
                        if modified < seven_days_ago {
                            cleaned_size += metadata.len();
                            if fs::remove_file(&path).is_ok() {
                                cleaned_count += 1;
                            }
                        }
                    }
                }
            }
        }
    }

    if cleaned_count > 0 {
        log::info!(
            "清理了 {} 个旧日志文件，释放空间 {} KB",
            cleaned_count,
            cleaned_size / 1024
        );
    }
}
