// 工作区相关的 Tauri 命令

use std::path::PathBuf;
use crate::json_config::{get_workspace_root, set_workspace_root, validate_workspace};

// 打开文件夹选择对话框
#[tauri::command]
pub async fn select_workspace(app_handle: tauri::AppHandle) -> Result<Option<String>, String> {
    use tauri_plugin_dialog::DialogExt;
    
    // 打开文件夹选择对话框
    let folder = app_handle.dialog()
        .file()
        .set_title("选择 Markdown 工作区文件夹")
        .blocking_pick_folder();
    
    if let Some(file_path) = folder {
        // 将 FilePath 转换为 PathBuf
        let path = PathBuf::from(file_path.as_path().unwrap());
        
        // 验证选择的目录
        validate_workspace(&path)?;
        
        // 返回路径字符串
        Ok(Some(path.to_string_lossy().to_string()))
    } else {
        Ok(None)
    }
}

// 检查目录权限
#[tauri::command]
pub fn validate_workspace_dir(path: String) -> Result<(), String> {
    let path_buf = PathBuf::from(path);
    validate_workspace(&path_buf)
}

// 获取配置的 workspace_root
#[tauri::command]
pub fn get_workspace_root_path(app_handle: tauri::AppHandle) -> Result<Option<String>, String> {
    let workspace_root = get_workspace_root(&app_handle)?;
    Ok(workspace_root.map(|p| p.to_string_lossy().to_string()))
}

// 设置 workspace_root 配置
#[tauri::command]
pub fn set_workspace_root_path(app_handle: tauri::AppHandle, path: String) -> Result<(), String> {
    let path_buf = PathBuf::from(path);
    set_workspace_root(&app_handle, path_buf)
}

// 提供更改工作区的功能
// 注意：实际的文件迁移需要在前端处理用户确认后执行
#[tauri::command]
pub fn change_workspace(
    app_handle: tauri::AppHandle,
    new_path: String,
    migrate_files: bool,
) -> Result<String, String> {
    let new_path_buf = PathBuf::from(&new_path);
    
    // 验证新目录
    validate_workspace(&new_path_buf)?;
    
    // 获取旧的工作区路径
    let old_path = get_workspace_root(&app_handle)?;
    
    if migrate_files && old_path.is_some() {
        // 返回需要迁移的信息，让前端处理
        Ok(format!(
            "需要迁移文件从 {} 到 {}",
            old_path.unwrap().display(),
            new_path_buf.display()
        ))
    } else {
        // 直接设置新路径
        set_workspace_root(&app_handle, new_path_buf)?;
        Ok("工作区已更改".to_string())
    }
}
