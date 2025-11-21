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
                                .title("snippets-code")  // 在标题中包含应用名
                                .body("检查更新：当前已是最新版本")
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
    log::info!("开始执行更新...");
    
    if let Ok(updater) = app.updater() {
        if let Ok(Some(update)) = updater.check().await {
            let app = APP.get().ok_or("无法获取应用实例")?;
            let mut total_downloaded: u64 = 0;

            log::info!("发现新版本: {}, 开始下载更新...", update.version);

            // 下载更新
            let result = update
                .download_and_install(
                    |chunk_length, content_length| {
                        total_downloaded += chunk_length as u64;

                        let progress = DownloadProgress {
                            event: if total_downloaded == chunk_length as u64 {
                                "Started".to_string()
                            } else if content_length.map_or(false, |len| total_downloaded >= len) {
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
                        log::info!("下载完成，准备安装更新...");
                        if let Err(e) = app.emit("download-finished", ()) {
                            log::warn!("发送下载完成事件失败: {}", e);
                        }
                        // 更新完成后重置更新状态
                        set_value(app, UPDATE_AVAILABLE_KEY, false);
                    },
                )
                .await;

            match result {
                Ok(_) => {
                    log::info!("更新安装成功，应用即将重启");
                    // 确保更新状态被重置
                    set_value(&app, UPDATE_AVAILABLE_KEY, false);
                    Ok(())
                }
                Err(e) => {
                    let error_msg = format!("更新安装失败: {}", e);
                    log::error!("{}", error_msg);
                    
                    // 检查是否是权限问题
                    let error_str = e.to_string();
                    if error_str.contains("permission") || error_str.contains("access denied") {
                        Err("安装失败：需要管理员权限。请以管理员身份运行应用或手动安装更新。".to_string())
                    } else if error_str.contains("signature") {
                        Err("安装失败：更新文件签名验证失败。请重新下载或联系开发者。".to_string())
                    } else {
                        Err(error_msg)
                    }
                }
            }
        } else {
            log::warn!("未发现可用更新");
            Err("未发现可用更新".to_string())
        }
    } else {
        log::error!("无法初始化更新器");
        Err("无法初始化更新器".to_string())
    }
}

#[tauri::command]
pub async fn check_update_manually(app: AppHandle) -> Result<bool, String> {
    check_update(&app, true).await
}
