use serde::Serialize;
use std::fs;
use std::path::{Path, PathBuf};
use std::time::SystemTime;
use tauri::{AppHandle, Manager};

const MAX_LOG_FILES: usize = 4;
const MAX_LOG_BYTES_PER_FILE: usize = 48 * 1024;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DiagnosticWindow {
    label: String,
    visible: bool,
    url: String,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DiagnosticLogFile {
    path: String,
    size_bytes: u64,
    modified_at: Option<String>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct DeveloperDiagnostics {
    generated_at: String,
    app_version: String,
    build_mode: &'static str,
    os: String,
    arch: String,
    log_dir: String,
    data_dir: String,
    plugin_dir: Option<String>,
    windows: Vec<DiagnosticWindow>,
    log_files: Vec<DiagnosticLogFile>,
    recent_backend_logs: String,
}

fn display_path(path: &Path) -> String {
    path.to_string_lossy().to_string()
}

fn modified_timestamp(path: &Path) -> Option<SystemTime> {
    fs::metadata(path).ok()?.modified().ok()
}

fn modified_text(path: &Path) -> Option<String> {
    let timestamp = modified_timestamp(path)?;
    let datetime: chrono::DateTime<chrono::Local> = timestamp.into();
    Some(datetime.format("%Y-%m-%d %H:%M:%S").to_string())
}

fn read_log_tail(path: &Path) -> String {
    let Ok(bytes) = fs::read(path) else {
        return String::new();
    };
    let start = bytes.len().saturating_sub(MAX_LOG_BYTES_PER_FILE);
    String::from_utf8_lossy(&bytes[start..]).to_string()
}

fn list_log_paths(log_dir: &Path) -> Vec<PathBuf> {
    let Ok(entries) = fs::read_dir(log_dir) else {
        return Vec::new();
    };
    let mut paths = entries
        .flatten()
        .map(|entry| entry.path())
        .filter(|path| path.extension().and_then(|value| value.to_str()) == Some("log"))
        .collect::<Vec<_>>();
    paths.sort_by_key(|path| std::cmp::Reverse(modified_timestamp(path)));
    paths.truncate(MAX_LOG_FILES);
    paths
}

#[tauri::command]
pub fn get_developer_diagnostics(app_handle: AppHandle) -> Result<DeveloperDiagnostics, String> {
    let log_dir = app_handle
        .path()
        .app_log_dir()
        .map_err(|error| format!("获取日志目录失败: {}", error))?;
    fs::create_dir_all(&log_dir)
        .map_err(|error| format!("创建日志目录失败: {} ({})", display_path(&log_dir), error))?;

    let log_paths = list_log_paths(&log_dir);
    let log_files = log_paths
        .iter()
        .filter_map(|path| {
            let metadata = fs::metadata(path).ok()?;
            Some(DiagnosticLogFile {
                path: display_path(path),
                size_bytes: metadata.len(),
                modified_at: modified_text(path),
            })
        })
        .collect();
    let recent_backend_logs = log_paths
        .iter()
        .map(|path| {
            format!(
                "===== {} =====\n{}",
                display_path(path),
                read_log_tail(path)
            )
        })
        .collect::<Vec<_>>()
        .join("\n\n");

    let windows = app_handle
        .webview_windows()
        .into_values()
        .map(|window| DiagnosticWindow {
            label: window.label().to_string(),
            visible: window.is_visible().unwrap_or(false),
            url: window
                .url()
                .map(|url| url.to_string())
                .unwrap_or_else(|_| "<unavailable>".to_string()),
        })
        .collect();

    Ok(DeveloperDiagnostics {
        generated_at: chrono::Local::now()
            .format("%Y-%m-%d %H:%M:%S%.3f")
            .to_string(),
        app_version: app_handle.package_info().version.to_string(),
        build_mode: if cfg!(debug_assertions) {
            "debug"
        } else {
            "release"
        },
        os: std::env::consts::OS.to_string(),
        arch: std::env::consts::ARCH.to_string(),
        log_dir: display_path(&log_dir),
        data_dir: display_path(&crate::json_config::get_data_dir(&app_handle)),
        plugin_dir: crate::app_config::resolve_plugin_packages_dir(&app_handle)
            .ok()
            .map(|path| display_path(&path)),
        windows,
        log_files,
        recent_backend_logs,
    })
}

#[tauri::command]
pub fn open_developer_log_dir(app_handle: AppHandle) -> Result<(), String> {
    let log_dir = app_handle
        .path()
        .app_log_dir()
        .map_err(|error| format!("获取日志目录失败: {}", error))?;
    fs::create_dir_all(&log_dir)
        .map_err(|error| format!("创建日志目录失败: {} ({})", display_path(&log_dir), error))?;
    crate::commands::open_folder(display_path(&log_dir))
}
