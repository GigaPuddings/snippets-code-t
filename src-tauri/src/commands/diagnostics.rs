use once_cell::sync::Lazy;
use regex::Regex;
use serde::Serialize;
use std::fs;
use std::path::{Path, PathBuf};
use std::time::SystemTime;
use tauri::{AppHandle, Manager};

const MAX_LOG_FILES: usize = 4;
const MAX_LOG_BYTES_PER_FILE: usize = 48 * 1024;
const REDACTED_VALUE: &str = "[REDACTED]";

static SENSITIVE_JSON_FIELD_RE: Lazy<Regex> = Lazy::new(|| {
    Regex::new(
        r#"(?i)("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)"#,
    )
    .expect("sensitive JSON field regex must be valid")
});
static BEARER_TOKEN_RE: Lazy<Regex> = Lazy::new(|| {
    Regex::new(r"(?i)\bBearer\s+[A-Za-z0-9._~+/=-]+").expect("bearer token regex must be valid")
});
static GITHUB_TOKEN_RE: Lazy<Regex> = Lazy::new(|| {
    Regex::new(r"\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b")
        .expect("GitHub token regex must be valid")
});
static URL_CREDENTIALS_RE: Lazy<Regex> = Lazy::new(|| {
    Regex::new(r"(?i)(https?://)[^/\s@]+@").expect("URL credentials regex must be valid")
});
static QUERY_SECRET_RE: Lazy<Regex> = Lazy::new(|| {
    Regex::new(r"(?i)([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+")
        .expect("query secret regex must be valid")
});

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
    diagnostic_logs_enabled: bool,
    log_dir: String,
    data_dir: String,
    plugin_dir: Option<String>,
    wallpaper_plugin_probe: Option<String>,
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
    redact_diagnostic_text(&String::from_utf8_lossy(&bytes[start..]))
}

fn redact_diagnostic_text(value: &str) -> String {
    let value = SENSITIVE_JSON_FIELD_RE.replace_all(value, format!("$1\"{}\"", REDACTED_VALUE));
    let value = BEARER_TOKEN_RE.replace_all(&value, format!("Bearer {}", REDACTED_VALUE));
    let value = GITHUB_TOKEN_RE.replace_all(&value, REDACTED_VALUE);
    let value = URL_CREDENTIALS_RE.replace_all(&value, format!("$1{}@", REDACTED_VALUE));
    QUERY_SECRET_RE
        .replace_all(&value, format!("$1{}", REDACTED_VALUE))
        .to_string()
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

fn probe_wallpaper_plugin_runtime(app_handle: &AppHandle) -> Option<String> {
    let plugin_dir = crate::app_config::resolve_plugin_packages_dir(app_handle).ok()?;
    let wallpaper_dir = plugin_dir.join("wallpaper-switcher");
    let manifest_path = wallpaper_dir.join("plugin.json");
    let manifest_text = fs::read_to_string(&manifest_path).ok()?;
    let manifest_json: serde_json::Value = serde_json::from_str(&manifest_text).ok()?;
    let version = manifest_json
        .get("version")
        .and_then(|value| value.as_str())
        .unwrap_or("<unknown>");
    let frontend = manifest_json
        .get("entry")
        .and_then(|entry| entry.get("frontend"))
        .and_then(|value| value.as_str())
        .unwrap_or("dist/frontend.js");
    let frontend_path = wallpaper_dir.join(frontend);
    let frontend_text = fs::read_to_string(&frontend_path).unwrap_or_default();
    let has_legacy_decode_text = frontend_text.contains("Wallhaven 数据失败")
        || frontend_text.contains("解析 Wallhaven")
        || frontend_text.contains("error decoding response body")
        || frontend_text.contains("wallpaper_wallhaven")
        || frontend_text.contains("WallpaperWallhaven");
    Some(format!(
        "path={}; version={}; frontend={}; legacyWallhavenMarkers={}",
        display_path(&manifest_path),
        version,
        display_path(&frontend_path),
        has_legacy_decode_text
    ))
}

#[tauri::command]
pub fn get_developer_diagnostics(
    app_handle: AppHandle,
    include_logs: Option<bool>,
) -> Result<DeveloperDiagnostics, String> {
    let include_logs = include_logs.unwrap_or(false);
    let log_dir = app_handle
        .path()
        .app_log_dir()
        .map_err(|error| format!("获取日志目录失败: {}", error))?;
    fs::create_dir_all(&log_dir)
        .map_err(|error| format!("创建日志目录失败: {} ({})", display_path(&log_dir), error))?;

    let log_paths = if include_logs {
        list_log_paths(&log_dir)
    } else {
        Vec::new()
    };
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
        diagnostic_logs_enabled: include_logs,
        log_dir: display_path(&log_dir),
        data_dir: display_path(&crate::json_config::get_data_dir(&app_handle)),
        plugin_dir: crate::app_config::resolve_plugin_packages_dir(&app_handle)
            .ok()
            .map(|path| display_path(&path)),
        wallpaper_plugin_probe: probe_wallpaper_plugin_runtime(&app_handle),
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

#[cfg(test)]
mod tests {
    use super::redact_diagnostic_text;

    #[test]
    fn redacts_credentials_from_log_text() {
        let text = r#"{
  "token": "github_pat_12345678901234567890",
  "authorization": "Bearer abc.def-123",
  "remoteUrl": "https://secret-value@github.com/example/repo",
  "callback": "https://example.com?access_token=query-secret&mode=test"
}"#;

        let redacted = redact_diagnostic_text(text);

        assert!(!redacted.contains("github_pat_12345678901234567890"));
        assert!(!redacted.contains("abc.def-123"));
        assert!(!redacted.contains("secret-value"));
        assert!(!redacted.contains("query-secret"));
        assert!(redacted.contains("[REDACTED]"));
    }
}
