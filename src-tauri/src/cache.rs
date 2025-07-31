use crate::APP;
use log::info;
use std::fs;
use std::thread;
use std::time::Duration;
use tauri::Manager;
use tauri_plugin_global_shortcut::GlobalShortcutExt;

// 清理缓存
#[tauri::command]
pub async fn clear_cache() -> Result<String, String> {
    let app = APP.get().unwrap();

    // 清理缓存相关存储数据
    // // 移除 installed_apps
    // set_value(app, "installed_apps", serde_json::Value::Null);

    // // 移除 search_engines
    // set_value(app, "search_engines", serde_json::Value::Null);

    // // 移除图标缓存
    // set_value(app, "icon_cache", serde_json::Value::Null);

    // // 重置 alarm_cards
    // set_value(app, "alarm_cards", Vec::<serde_json::Value>::new());

    // 重置全局快捷键
    // let search_key = get_value(app, "search").unwrap_or(serde_json::Value::String("Ctrl+Alt".to_string()));
    // let config_key = get_value(app, "config").unwrap_or(serde_json::Value::String("Ctrl+F1".to_string()));

    // if search_key.is_null() {
    //     set_value(app, "search", "Ctrl+Alt");
    // }

    // if config_key.is_null() {
    //     set_value(app, "config", "Ctrl+F1");
    // }

    // 尝试清空缓存目录中的文件
    // 清除配置数据
    let config_path = app.path().app_data_dir().unwrap();
    info!("用户配置数据路径: {}", config_path.display());

    // 安全删除文件的函数
    let safe_remove_file = |path: &std::path::Path, retries: usize| -> Result<(), String> {
        for attempt in 0..retries {
            match fs::remove_file(path) {
                Ok(_) => return Ok(()),
                Err(e) => {
                    if attempt == retries - 1 {
                        info!(
                            "无法删除文件 {} (已尝试 {} 次): {}",
                            path.display(),
                            retries,
                            e
                        );
                        // 如果是因为文件被占用，则跳过而不是返回错误
                        if e.kind() == std::io::ErrorKind::PermissionDenied
                            || e.kind() == std::io::ErrorKind::WouldBlock
                        {
                            return Ok(());
                        }
                        return Err(format!("删除文件失败: {}", e));
                    }
                    // 等待一小段时间后重试
                    thread::sleep(Duration::from_millis(100));
                }
            }
        }
        Ok(())
    };

    // 安全删除目录的函数
    let safe_remove_dir = |path: &std::path::Path, retries: usize| -> Result<(), String> {
        for attempt in 0..retries {
            match fs::remove_dir_all(path) {
                Ok(_) => return Ok(()),
                Err(e) => {
                    if attempt == retries - 1 {
                        info!(
                            "无法删除目录 {} (已尝试 {} 次): {}",
                            path.display(),
                            retries,
                            e
                        );
                        // 如果是因为目录被占用，则跳过而不是返回错误
                        if e.kind() == std::io::ErrorKind::PermissionDenied
                            || e.kind() == std::io::ErrorKind::WouldBlock
                        {
                            return Ok(());
                        }
                        return Err(format!("删除目录失败: {}", e));
                    }
                    // 等待一小段时间后重试
                    thread::sleep(Duration::from_millis(100));
                }
            }
        }
        Ok(())
    };

    if config_path.exists() {
        for entry in fs::read_dir(&config_path).map_err(|e| format!("无法读取配置目录: {}", e))?
        {
            if let Ok(entry) = entry {
                let path = entry.path();
                if path.is_file() {
                    // 删除文件
                    let _ = safe_remove_file(&path, 3);
                } else if path.is_dir() {
                    // 删除目录
                    let _ = safe_remove_dir(&path, 3);
                }
            }
        }
    }

    // 清除缓存数据
    let cache_path = app.path().app_cache_dir().unwrap();
    info!("用户缓存数据路径: {}", cache_path.display());
    if cache_path.exists() {
        for entry in fs::read_dir(&cache_path).map_err(|e| format!("无法读取缓存目录: {}", e))?
        {
            if let Ok(entry) = entry {
                let path = entry.path();
                if path.is_file() {
                    let _ = safe_remove_file(&path, 3);
                } else if path.is_dir() {
                    let _ = safe_remove_dir(&path, 3);
                }
            }
        }
    }

    // 在后台线程中注销所有快捷键并重启应用程序
    std::thread::spawn(move || {
        std::thread::sleep(std::time::Duration::from_secs(3));
        // 注销所有快捷键
        app.global_shortcut().unregister_all().unwrap();
        // 重启应用程序
        app.restart();
    });

    info!("缓存清理完成");
    Ok("缓存清理成功，应用程序将重启".to_string())
}
