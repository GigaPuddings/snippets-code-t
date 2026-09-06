//! Windows 卸载器使用的路径登记。
//!
//! Tauri 的默认 NSIS 卸载器只能清理 `$APPDATA/$LOCALAPPDATA/<bundle-id>`。
//! 本应用允许用户选择应用数据、插件和工作区目录，因此在 Windows 注册表中
//! 保存已验证的当前路径，供用户明确勾选“删除全部数据”时使用。

use serde::Serialize;
use std::path::Path;
use tauri::AppHandle;

const UNINSTALL_REGISTRY_KEY: &str = r"Software\snippets-code\snippets-code";
const DATA_DIR_VALUE: &str = "SnippetsCodeDataDir";
const WORKSPACE_DIR_VALUE: &str = "SnippetsCodeWorkspaceDir";
const PLUGIN_DIR_VALUE: &str = "SnippetsCodePluginDir";

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct UninstallCleanupPathReport {
    executable_path: String,
    data_dir: String,
    workspace_dir: Option<String>,
    plugin_dir: String,
}

pub fn record_current_paths(app_handle: &AppHandle) {
    match record_current_paths_checked(app_handle) {
        Ok(report) => log::info!(
            "[Uninstall] 卸载路径刷新完成: data={}, workspace={}, plugins={}",
            report.data_dir,
            report.workspace_dir.as_deref().unwrap_or("<none>"),
            report.plugin_dir
        ),
        Err(error) => log::warn!("[Uninstall] 卸载路径刷新失败: {}", error),
    }
}

#[tauri::command]
pub fn refresh_uninstall_cleanup_paths(
    app_handle: AppHandle,
) -> Result<UninstallCleanupPathReport, String> {
    record_current_paths_checked(&app_handle)
}

pub fn record_data_dir(path: &Path) {
    record_path(DATA_DIR_VALUE, path);
}

pub fn record_workspace_dir(path: &Path) {
    record_path(WORKSPACE_DIR_VALUE, path);
}

pub fn record_plugin_dir(path: &Path) {
    record_path(PLUGIN_DIR_VALUE, path);
}

fn is_safe_cleanup_path(path: &Path) -> bool {
    path.is_absolute() && path.parent().is_some()
}

fn is_managed_nsis_executable(executable_path: &Path) -> bool {
    executable_path
        .parent()
        .is_some_and(|install_dir| install_dir.join("uninstall.exe").is_file())
}

#[cfg(target_os = "windows")]
fn managed_nsis_installation() -> Result<std::path::PathBuf, String> {
    let executable_path = std::env::current_exe()
        .map_err(|error| format!("无法读取当前可执行文件路径: {}", error))?;
    if !is_managed_nsis_executable(&executable_path) {
        return Err(format!(
            "当前目录不存在 uninstall.exe: {}",
            executable_path.display()
        ));
    }
    Ok(executable_path)
}

#[cfg(target_os = "windows")]
fn record_current_paths_checked(
    app_handle: &AppHandle,
) -> Result<UninstallCleanupPathReport, String> {
    let executable_path = managed_nsis_installation()?;
    let data_dir = crate::json_config::get_data_dir(app_handle);
    let workspace_dir = crate::json_config::get_workspace_root(app_handle)?;
    let plugin_dir = crate::app_config::get_plugin_install_dir(app_handle.clone())?;

    write_recorded_path(DATA_DIR_VALUE, &data_dir)?;
    match workspace_dir.as_deref() {
        Some(path) => write_recorded_path(WORKSPACE_DIR_VALUE, path)?,
        None => delete_recorded_path(WORKSPACE_DIR_VALUE)?,
    }
    write_recorded_path(PLUGIN_DIR_VALUE, Path::new(&plugin_dir))?;

    Ok(UninstallCleanupPathReport {
        executable_path: executable_path.to_string_lossy().into_owned(),
        data_dir: data_dir.to_string_lossy().into_owned(),
        workspace_dir: workspace_dir.map(|path| path.to_string_lossy().into_owned()),
        plugin_dir,
    })
}

#[cfg(not(target_os = "windows"))]
fn record_current_paths_checked(
    _app_handle: &AppHandle,
) -> Result<UninstallCleanupPathReport, String> {
    Err("卸载路径登记仅适用于 Windows NSIS 安装包".to_string())
}

#[cfg(target_os = "windows")]
fn record_path(value_name: &str, path: &Path) {
    if let Err(error) =
        managed_nsis_installation().and_then(|_| write_recorded_path(value_name, path))
    {
        log::warn!("[Uninstall] 跳过卸载路径登记: {} ({})", value_name, error);
    }
}

#[cfg(target_os = "windows")]
fn write_recorded_path(value_name: &str, path: &Path) -> Result<(), String> {
    use winreg::enums::{HKEY_CURRENT_USER, KEY_WOW64_64KEY, KEY_WRITE};
    use winreg::RegKey;

    // 根目录永远不应成为可清理目标；NSIS 侧也会再次检查。
    if !is_safe_cleanup_path(path) {
        return Err(format!("拒绝登记不安全的卸载路径: {}", path.display()));
    }

    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let (key, _) = hkcu
        .create_subkey_with_flags(UNINSTALL_REGISTRY_KEY, KEY_WRITE | KEY_WOW64_64KEY)
        .map_err(|error| format!("创建卸载路径注册表项失败: {}", error))?;
    key.set_value(value_name, &path.to_string_lossy().to_string())
        .map_err(|error| format!("写入卸载路径注册表项失败: {}", error))?;
    log::info!(
        "[Uninstall] 已登记卸载路径: {}={}",
        value_name,
        path.display()
    );
    Ok(())
}

#[cfg(not(target_os = "windows"))]
fn record_path(_value_name: &str, _path: &Path) {}

#[cfg(target_os = "windows")]
fn delete_recorded_path(value_name: &str) -> Result<(), String> {
    use std::io::ErrorKind;
    use winreg::enums::{HKEY_CURRENT_USER, KEY_WOW64_64KEY, KEY_WRITE};
    use winreg::RegKey;

    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let key = match hkcu.open_subkey_with_flags(UNINSTALL_REGISTRY_KEY, KEY_WRITE | KEY_WOW64_64KEY)
    {
        Ok(key) => key,
        Err(error) if error.kind() == ErrorKind::NotFound => return Ok(()),
        Err(error) => return Err(format!("打开卸载路径注册表项失败: {}", error)),
    };

    match key.delete_value(value_name) {
        Ok(()) => log::info!("[Uninstall] 已清除陈旧卸载路径: {}", value_name),
        Err(error) if error.kind() == ErrorKind::NotFound => {}
        Err(error) => return Err(format!("清除卸载路径注册表项失败: {}", error)),
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn cleanup_path_must_be_absolute_and_below_a_root() {
        assert!(!is_safe_cleanup_path(Path::new("relative/path")));
        assert!(is_safe_cleanup_path(
            &std::env::temp_dir().join("snippets-code-cleanup-test")
        ));
    }

    #[test]
    fn managed_nsis_install_requires_sibling_uninstaller() {
        let install_dir =
            std::env::temp_dir().join(format!("snippets-code-nsis-test-{}", std::process::id()));
        let executable_path = install_dir.join("snippets-code.exe");
        let uninstaller_path = install_dir.join("uninstall.exe");

        std::fs::create_dir_all(&install_dir).unwrap();
        let _ = std::fs::remove_file(&uninstaller_path);
        assert!(!is_managed_nsis_executable(&executable_path));

        std::fs::write(&uninstaller_path, []).unwrap();
        assert!(is_managed_nsis_executable(&executable_path));

        std::fs::remove_file(uninstaller_path).unwrap();
        std::fs::remove_dir(install_dir).unwrap();
    }
}
