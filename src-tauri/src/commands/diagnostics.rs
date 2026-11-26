use once_cell::sync::Lazy;
use regex::Regex;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::io::{Read, Seek, SeekFrom};
use std::path::{Path, PathBuf};
use std::sync::Mutex;
use std::time::SystemTime;
use tauri::{AppHandle, Manager, WebviewWindow};

const MAX_LOG_FILES: usize = 4;
const MAX_LOG_BYTES_PER_FILE: usize = 48 * 1024;
const MAX_SEARCH_SOURCES: usize = 128;
const REDACTED_VALUE: &str = "[REDACTED]";

static SENSITIVE_JSON_FIELD_RE: Lazy<Regex> = Lazy::new(|| {
    Regex::new(
        r#"(?i)("(?:[^"]*(?:token|password|secret|authorization|api[_-]?key|cookie|credential)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)"#,
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
    Regex::new(r"(?i)([?&][^=&\s]*(?:token|password|secret|authorization|api[_-]?key|cookie|credential)[^=&\s]*=)[^&\s]+")
        .expect("query secret regex must be valid")
});

#[derive(Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub enum SearchDiagnosticOutcome {
    Success,
    Timeout,
    Failed,
}

#[derive(Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SearchDiagnosticResult {
    plugin_id: String,
    source: String,
    started_at: u64,
    completed_at: u64,
    outcome: SearchDiagnosticOutcome,
}

#[derive(Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SearchDiagnosticEntry {
    #[serde(flatten)]
    result: SearchDiagnosticResult,
    window_label: String,
}

type SearchDiagnosticEntries = HashMap<(String, String), SearchDiagnosticEntry>;
static SEARCH_DIAGNOSTICS: Lazy<Mutex<SearchDiagnosticEntries>> =
    Lazy::new(|| Mutex::new(HashMap::new()));

#[tauri::command]
pub fn record_search_diagnostic(
    window: WebviewWindow,
    result: SearchDiagnosticResult,
) -> Result<(), String> {
    if result.plugin_id.is_empty()
        || result.source.is_empty()
        || result.plugin_id.len() > 128
        || result.source.len() > 128
        || result.completed_at < result.started_at
    {
        return Err("Invalid search diagnostic".into());
    }
    let key = (result.plugin_id.clone(), result.source.clone());
    let mut entries = SEARCH_DIAGNOSTICS
        .lock()
        .map_err(|error| error.to_string())?;
    if let Some(entry) = entries.get(&key) {
        if (entry.result.started_at, entry.result.completed_at)
            > (result.started_at, result.completed_at)
        {
            return Ok(());
        }
    } else if entries.len() >= MAX_SEARCH_SOURCES {
        if let Some(oldest) = entries
            .iter()
            .min_by_key(|(_, entry)| entry.result.completed_at)
            .map(|(key, _)| key.clone())
        {
            entries.remove(&oldest);
        }
    }
    entries.insert(
        key,
        SearchDiagnosticEntry {
            result,
            window_label: window.label().to_owned(),
        },
    );
    Ok(())
}

#[tauri::command]
pub fn get_search_diagnostics() -> Result<Vec<SearchDiagnosticEntry>, String> {
    let entries = SEARCH_DIAGNOSTICS
        .lock()
        .map_err(|error| error.to_string())?;
    Ok(entries.values().cloned().collect())
}

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
    windows: Vec<DiagnosticWindow>,
    log_files: Vec<DiagnosticLogFile>,
    recent_backend_logs: String,
    backend_logs_incomplete: bool,
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

fn read_log_tail(path: &Path) -> std::io::Result<String> {
    let mut file = fs::File::open(path)?;
    let start = file
        .metadata()?
        .len()
        .saturating_sub(MAX_LOG_BYTES_PER_FILE as u64);
    file.seek(SeekFrom::Start(start))?;
    let mut bytes = Vec::new();
    file.take(MAX_LOG_BYTES_PER_FILE as u64)
        .read_to_end(&mut bytes)?;
    let text = String::from_utf8_lossy(&bytes);
    let tail = if start > 0 {
        // Drop the first partial line before redaction and parsing.
        text.split_once('\n').map(|(_, rest)| rest).unwrap_or("")
    } else {
        &text
    };
    Ok(redact_diagnostic_text(tail))
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

fn list_log_paths(log_dir: &Path) -> std::io::Result<Vec<PathBuf>> {
    let entries = fs::read_dir(log_dir)?;
    let mut paths = entries
        .flatten()
        .map(|entry| entry.path())
        .filter(|path| {
            path.extension().and_then(|value| value.to_str()) == Some("log") && path.is_file()
        })
        .collect::<Vec<_>>();
    paths.sort_by_key(|path| std::cmp::Reverse(modified_timestamp(path)));
    paths.truncate(MAX_LOG_FILES);
    Ok(paths)
}

fn read_backend_logs(log_dir: &Path) -> (Vec<DiagnosticLogFile>, String, bool) {
    let Ok(paths) = list_log_paths(log_dir) else {
        return (Vec::new(), String::new(), true);
    };
    let mut files = Vec::new();
    let mut tails = Vec::new();
    let mut incomplete = false;
    for path in paths {
        let Ok(metadata) = fs::metadata(&path) else {
            incomplete = true;
            continue;
        };
        let path_text = display_path(&path);
        match read_log_tail(&path) {
            Ok(tail) => tails.push(format!("===== {path_text} =====\n{tail}")),
            Err(_) => incomplete = true,
        }
        files.push(DiagnosticLogFile {
            path: path_text,
            size_bytes: metadata.len(),
            modified_at: modified_text(&path),
        });
    }
    (files, tails.join("\n\n"), incomplete)
}

fn resolve_log_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    let path = app_handle
        .path()
        .app_log_dir()
        .map_err(|error| format!("获取日志目录失败: {error}"))?;
    fs::create_dir_all(&path)
        .map_err(|error| format!("创建日志目录失败: {error} ({})", display_path(&path)))?;
    Ok(path)
}

#[tauri::command]
pub fn get_developer_log_dir(app_handle: AppHandle) -> Result<String, String> {
    resolve_log_dir(&app_handle).map(|path| display_path(&path))
}

#[tauri::command]
pub fn get_developer_diagnostics(
    app_handle: AppHandle,
    include_logs: Option<bool>,
) -> Result<DeveloperDiagnostics, String> {
    let include_logs = include_logs.unwrap_or(false);
    let log_dir = resolve_log_dir(&app_handle)?;

    let (log_files, recent_backend_logs, backend_logs_incomplete) = if include_logs {
        read_backend_logs(&log_dir)
    } else {
        (Vec::new(), String::new(), false)
    };

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
        windows,
        log_files,
        recent_backend_logs,
        backend_logs_incomplete,
    })
}

#[tauri::command]
pub fn open_developer_log_dir(app_handle: AppHandle) -> Result<(), String> {
    crate::commands::open_folder(get_developer_log_dir(app_handle)?)
}
