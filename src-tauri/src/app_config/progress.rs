//! Install task state and progress events shared by download and installation.
use log::{debug, warn};
use serde::Serialize;
use std::collections::HashMap;
use std::sync::{LazyLock, Mutex};
use std::time::{SystemTime, UNIX_EPOCH};
use tauri::{command, AppHandle, Emitter};

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PluginInstallProgressPayload {
    package_url: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    plugin_id: Option<String>,
    phase: String,
    downloaded_bytes: u64,
    total_bytes: Option<u64>,
    progress: Option<f64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    error: Option<String>,
    updated_at: u64,
}

static PLUGIN_INSTALL_TASKS: LazyLock<Mutex<HashMap<String, PluginInstallProgressPayload>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

fn plugin_install_timestamp() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64
}

fn is_terminal_plugin_install_phase(phase: &str) -> bool {
    matches!(phase, "installed" | "failed")
}

fn plugin_install_progress_percent(
    phase: &str,
    downloaded_bytes: u64,
    total_bytes: Option<u64>,
) -> Option<f64> {
    total_bytes.filter(|total| *total > 0).map(|total| {
        let percent = ((downloaded_bytes as f64 / total as f64) * 100.0).clamp(0.0, 100.0);
        if phase == "downloading" {
            percent.min(99.0)
        } else {
            percent
        }
    })
}

fn publish_plugin_install_progress(
    app_handle: &AppHandle,
    payload: PluginInstallProgressPayload,
    previous_phase: Option<String>,
) {
    let phase_changed = previous_phase.as_deref() != Some(payload.phase.as_str());
    if phase_changed {
        debug!(
            "[Plugin] install phase plugin={:?} phase={} url={} downloaded={} total={:?} progress={:?}",
            payload.plugin_id,
            payload.phase,
            payload.package_url,
            payload.downloaded_bytes,
            payload.total_bytes,
            payload.progress
        );
    }
    let _ = app_handle.emit("plugin-install-progress", payload);
    if phase_changed {
        crate::tray::update_plugin_install_status(app_handle);
    }
}

pub(super) fn begin_plugin_install(
    app_handle: &AppHandle,
    package_url: &str,
    plugin_id: Option<String>,
) {
    let payload = PluginInstallProgressPayload {
        package_url: package_url.to_string(),
        plugin_id,
        phase: "queued".to_string(),
        downloaded_bytes: 0,
        total_bytes: None,
        progress: None,
        error: None,
        updated_at: plugin_install_timestamp(),
    };
    let previous_phase = PLUGIN_INSTALL_TASKS
        .lock()
        .ok()
        .and_then(|mut tasks| tasks.insert(package_url.to_string(), payload.clone()))
        .map(|previous| previous.phase);
    publish_plugin_install_progress(app_handle, payload, previous_phase);
}

pub(super) fn emit_plugin_install_progress(
    app_handle: &AppHandle,
    package_url: &str,
    phase: &str,
    downloaded_bytes: u64,
    total_bytes: Option<u64>,
) {
    let (payload, previous_phase) = {
        let mut tasks = match PLUGIN_INSTALL_TASKS.lock() {
            Ok(tasks) => tasks,
            Err(error) => {
                warn!("[Plugin] install progress state lock failed: {}", error);
                return;
            }
        };
        let previous = tasks.get(package_url).cloned();
        let retained_downloaded = if phase == "downloading" {
            downloaded_bytes
        } else {
            downloaded_bytes.max(
                previous
                    .as_ref()
                    .map(|task| task.downloaded_bytes)
                    .unwrap_or_default(),
            )
        };
        let retained_total =
            total_bytes.or_else(|| previous.as_ref().and_then(|task| task.total_bytes));
        let progress = plugin_install_progress_percent(phase, retained_downloaded, retained_total);
        let payload = PluginInstallProgressPayload {
            package_url: package_url.to_string(),
            plugin_id: previous.as_ref().and_then(|task| task.plugin_id.clone()),
            phase: phase.to_string(),
            downloaded_bytes: retained_downloaded,
            total_bytes: retained_total,
            progress,
            error: None,
            updated_at: plugin_install_timestamp(),
        };
        let previous_phase = previous.map(|task| task.phase);
        tasks.insert(package_url.to_string(), payload.clone());
        (payload, previous_phase)
    };
    publish_plugin_install_progress(app_handle, payload, previous_phase);
}

pub(super) fn emit_plugin_install_failure(app_handle: &AppHandle, package_url: &str, error: &str) {
    let (payload, previous_phase) = {
        let mut tasks = match PLUGIN_INSTALL_TASKS.lock() {
            Ok(tasks) => tasks,
            Err(lock_error) => {
                warn!("[Plugin] install failure state lock failed: {}", lock_error);
                return;
            }
        };
        let previous = tasks.get(package_url).cloned();
        let payload = PluginInstallProgressPayload {
            package_url: package_url.to_string(),
            plugin_id: previous.as_ref().and_then(|task| task.plugin_id.clone()),
            phase: "failed".to_string(),
            downloaded_bytes: previous
                .as_ref()
                .map(|task| task.downloaded_bytes)
                .unwrap_or_default(),
            total_bytes: previous.as_ref().and_then(|task| task.total_bytes),
            progress: previous.as_ref().and_then(|task| task.progress),
            error: Some(error.to_string()),
            updated_at: plugin_install_timestamp(),
        };
        let previous_phase = previous.map(|task| task.phase);
        tasks.insert(package_url.to_string(), payload.clone());
        (payload, previous_phase)
    };
    publish_plugin_install_progress(app_handle, payload, previous_phase);
}

#[command]
pub fn get_plugin_install_tasks() -> Vec<PluginInstallProgressPayload> {
    let mut tasks = PLUGIN_INSTALL_TASKS
        .lock()
        .map(|tasks| tasks.values().cloned().collect::<Vec<_>>())
        .unwrap_or_default();
    tasks.sort_by_key(|task| task.updated_at);
    tasks
}

pub fn active_plugin_install_status() -> Option<(usize, String)> {
    let tasks = PLUGIN_INSTALL_TASKS.lock().ok()?;
    let mut active = tasks
        .values()
        .filter(|task| !is_terminal_plugin_install_phase(&task.phase))
        .collect::<Vec<_>>();
    active.sort_by_key(|task| task.updated_at);
    active.last().map(|task| (active.len(), task.phase.clone()))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn active_download_progress_reaches_one_hundred_only_after_download() {
        assert_eq!(
            plugin_install_progress_percent("downloading", 1_000, Some(1_000)),
            Some(99.0)
        );
        assert_eq!(
            plugin_install_progress_percent("downloaded", 1_000, Some(1_000)),
            Some(100.0)
        );
    }
}
