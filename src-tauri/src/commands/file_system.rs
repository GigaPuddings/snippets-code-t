#![allow(dead_code)]
#![allow(unused)]

use std::path::Path;
use tauri::command;

/// 使用系统默认应用打开文件
#[command]
pub fn open_file_with_default_app(file_path: String) -> Result<(), String> {
    let path = Path::new(&file_path);

    if !path.exists() {
        return Err(format!("文件不存在: {}", file_path));
    }

    #[cfg(target_os = "windows")]
    {
        std::process::Command::new("cmd")
            .args(["/C", "start", "", &file_path])
            .spawn()
            .map_err(|e| format!("打开文件失败: {}", e))?;
    }

    #[cfg(target_os = "macos")]
    {
        std::process::Command::new("open")
            .arg(&file_path)
            .spawn()
            .map_err(|e| format!("打开文件失败: {}", e))?;
    }

    #[cfg(target_os = "linux")]
    {
        std::process::Command::new("xdg-open")
            .arg(&filePath)
            .spawn()
            .map_err(|e| format!("打开文件失败: {}", e))?;
    }

    Ok(())
}

/// 保存文本到文件，弹出对话框让用户选择位置
#[command]
pub async fn save_text_to_file(
    app_handle: tauri::AppHandle,
    text: String,
) -> Result<String, String> {
    use std::sync::Arc;
    use tokio::task;
    use tauri_plugin_dialog::DialogExt;

    let desktop = dirs::desktop_dir().ok_or("Cannot find desktop directory")?;
    let timestamp = chrono::Utc::now().format("%Y%m%d_%H%M%S");
    let default_filename = format!("ocr_{}.txt", timestamp);

    let app_handle = Arc::new(app_handle);

    let selected_path = task::spawn_blocking({
        let app_handle = Arc::clone(&app_handle);
        let default_filename = default_filename.clone();
        let desktop = desktop.clone();
        move || {
            app_handle
                .dialog()
                .file()
                .add_filter("Text Document", &["txt"])
                .add_filter("All Files", &["*"])
                .set_title("保存文本")
                .set_file_name(&default_filename)
                .set_directory(&desktop)
                .blocking_save_file()
        }
    })
    .await
    .map_err(|e| format!("Task joined failed: {}", e))?;

    match selected_path {
        Some(path) => {
            let file_path = path.into_path().map_err(|_| "Invalid path")?;
            std::fs::write(&file_path, text).map_err(|e| format!("写入文件失败: {}", e))?;
            Ok(file_path.to_string_lossy().to_string())
        }
        None => Err("SAVE_CANCELLED".to_string()),
    }
}

/// 在文件管理器中显示文件
#[command]
pub fn show_file_in_folder(file_path: String) -> Result<(), String> {
    let path = Path::new(&file_path);

    if !path.exists() {
        return Err(format!("文件不存在: {}", file_path));
    }

    #[cfg(target_os = "windows")]
    {
        use std::process::Command;
        // Windows: 使用 explorer /select 命令
        Command::new("explorer")
            .args(["/select,", &file_path])
            .spawn()
            .map_err(|e| format!("打开文件夹失败: {}", e))?;
    }

    #[cfg(target_os = "macos")]
    {
        use std::process::Command;
        // macOS: 使用 open -R 命令
        Command::new("open")
            .args(["-R", &filePath])
            .spawn()
            .map_err(|e| format!("打开文件夹失败: {}", e))?;
    }

    #[cfg(target_os = "linux")]
    {
        use std::process::Command;
        // Linux: 使用 xdg-open 打开父目录
        if let Some(parent) = path.parent() {
            Command::new("xdg-open")
                .arg(parent)
                .spawn()
                .map_err(|e| format!("打开文件夹失败: {}", e))?;
        } else {
            return Err("无法获取父目录".to_string());
        }
    }

    Ok(())
}

/// 打开“选择其他方式打开”对话框，行为尽量贴近 Windows 右键菜单里的“打开方式”
#[allow(dead_code)]
#[command]
pub fn open_path(path_str: String) -> Result<(), String> {
    let path = Path::new(&path_str);

    if !path.exists() {
        return Err(format!("路径不存在: {}", path_str));
    }

    #[cfg(target_os = "windows")]
    {
        use std::process::Command;
        Command::new("rundll32.exe")
            .args(["shell32.dll,OpenAs_RunDLL", &path_str])
            .spawn()
            .map_err(|e| format!("打开方式失败: {}", e))?;
    }

    #[cfg(target_os = "macos")]
    {
        use std::process::Command;
        Command::new("open")
            .arg(&path_str)
            .spawn()
            .map_err(|e| format!("打开方式失败: {}", e))?;
    }

    #[cfg(target_os = "linux")]
    {
        use std::process::Command;
        Command::new("xdg-open")
            .arg(&path_str)
            .spawn()
            .map_err(|e| format!("打开方式失败: {}", e))?;
    }

    Ok(())
}

/// 打开文件夹
#[command]
pub fn open_folder(folder_path: String) -> Result<(), String> {
    let path = Path::new(&folder_path);

    if !path.exists() {
        return Err(format!("文件夹不存在: {}", folder_path));
    }

    if !path.is_dir() {
        return Err(format!("路径不是文件夹: {}", folder_path));
    }

    #[cfg(target_os = "windows")]
    {
        use std::process::Command;
        Command::new("explorer")
            .arg(&folder_path)
            .spawn()
            .map_err(|e| format!("打开文件夹失败: {}", e))?;
    }

    #[cfg(target_os = "macos")]
    {
        use std::process::Command;
        Command::new("open")
            .arg(&folder_path)
            .spawn()
            .map_err(|e| format!("打开文件夹失败: {}", e))?;
    }

    #[cfg(target_os = "linux")]
    {
        use std::process::Command;
        Command::new("xdg-open")
            .arg(&folder_path)
            .spawn()
            .map_err(|e| format!("打开文件夹失败: {}", e))?;
    }

    Ok(())
}
