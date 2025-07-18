use crate::config::{control_logging, get_value, set_value, UPDATE_AVAILABLE_KEY, UPDATE_INFO_KEY};
use crate::APP;
use log::info;
use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Emitter};
use tauri_plugin_notification::NotificationExt;
use tauri_plugin_updater::UpdaterExt;

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

// 检查更新
pub async fn check_update(app: &AppHandle, show_notification: bool) -> Result<bool, String> {
    info!("Checking for updates...");
    control_logging(false); // 禁用日志存储
    match app.updater() {
        Ok(updater) => {
            match updater.check().await {
                Ok(update) => {
                    if let Some(update) = update {
                        // 保存更新信息
                        let update_info = UpdateInfo {
                            version: update.version.clone(),
                            notes: update.body.unwrap_or_default(),
                            pub_date: update.date.map(|d| d.to_string()),
                        };

                        set_value(app, UPDATE_AVAILABLE_KEY, true);
                        set_value(app, UPDATE_INFO_KEY, update_info);

                        // 通知前端有更新
                        if let Err(e) = app.emit("update-available", true) {
                            log::warn!("发送更新可用事件失败: {}", e);
                        }

                        control_logging(true); // 启用日志存储
                        Ok(true)
                    } else {
                        set_value(app, UPDATE_AVAILABLE_KEY, false);
                        if show_notification {
                            if let Err(e) = app.notification()
                                .builder()
                                .title("检查更新")
                                .body("当前已是最新版本")
                                .show() {
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
            }
        }
        Err(e) => {
            control_logging(true); // 启用日志存储
            Err(format!("初始化更新器失败: {}", e))
        }
    }
}

// 获取更新状态
#[tauri::command]
pub fn get_update_status(app: AppHandle) -> bool {
    get_value(&app, UPDATE_AVAILABLE_KEY)
        .and_then(|v| v.as_bool())
        .unwrap_or(false)
}

// 获取更新信息
#[tauri::command]
pub fn get_update_info(app: AppHandle) -> Option<UpdateInfo> {
    get_value(&app, UPDATE_INFO_KEY).and_then(|v| serde_json::from_value(v).ok())
}

// 执行更新
#[tauri::command]
pub async fn perform_update(app: AppHandle) -> Result<(), String> {
    if let Ok(updater) = app.updater() {
        if let Ok(Some(update)) = updater.check().await {
            let app = APP.get().ok_or("无法获取应用实例")?;
            let mut total_downloaded: u64 = 0;

            // 下载更新
            update
                .download_and_install(
                    |chunk_length, content_length| {
                        total_downloaded += chunk_length as u64;

                        let progress = DownloadProgress {
                            event: if total_downloaded == 0 {
                                "Started".to_string()
                            } else if total_downloaded == content_length.unwrap_or(0) {
                                "Finished".to_string()
                            } else {
                                "Progress".to_string()
                            },
                            data: ProgressData {
                                chunk_length: Some(chunk_length as u64),
                                content_length,
                                total_downloaded,
                            },
                        };

                        if let Err(e) = app.emit("download-progress", &progress) {
                            log::warn!("发送下载进度事件失败: {}", e);
                        }
                    },
                    || {
                        if let Err(e) = app.emit("download-finished", ()) {
                            log::warn!("发送下载完成事件失败: {}", e);
                        }
                        // 更新完成后重置更新状态
                        set_value(app, UPDATE_AVAILABLE_KEY, false);
                    },
                )
                .await
                .map_err(|e| e.to_string())?;

            // 再次确保更新状态被重置
            set_value(&app, UPDATE_AVAILABLE_KEY, false);

            Ok(())
        } else {
            Err("No update available".to_string())
        }
    } else {
        Err("Failed to initialize updater".to_string())
    }
}

#[tauri::command]
pub async fn check_update_manually(app: AppHandle) -> Result<bool, String> {
    check_update(&app, true).await
}
