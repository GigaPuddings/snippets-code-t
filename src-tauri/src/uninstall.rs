//! Windows 卸载器使用的路径登记。
//!
//! Tauri 的默认 NSIS 卸载器只能清理 `$APPDATA/$LOCALAPPDATA/<bundle-id>`。
//! 本应用允许用户选择应用数据、插件和工作区目录，因此在 Windows 注册表中
//! 保存已验证的当前路径，供用户明确勾选“删除全部数据”时使用。

use std::path::Path;
use tauri::AppHandle;

const UNINSTALL_REGISTRY_KEY: &str = r"Software\snippets-code\snippets-code";
const DATA_DIR_VALUE: &str = "SnippetsCodeDataDir";
const WORKSPACE_DIR_VALUE: &str = "SnippetsCodeWorkspaceDir";
const PLUGIN_DIR_VALUE: &str = "SnippetsCodePluginDir";

pub fn record_current_paths(app_handle: &AppHandle) {
    record_data_dir(&crate::json_config::get_data_dir(app_handle));

    match crate::json_config::get_workspace_root(app_handle) {
        Ok(Some(workspace_root)) => record_workspace_dir(&workspace_root),
        Ok(None) => clear_recorded_path(WORKSPACE_DIR_VALUE),
        Err(error) => log::warn!("[Uninstall] 读取工作区路径失败: {}", error),
    }

    match crate::app_config::get_plugin_install_dir(app_handle.clone()) {
        Ok(plugin_dir) => record_plugin_dir(Path::new(&plugin_dir)),
        Err(error) => log::warn!("[Uninstall] 读取插件路径失败: {}", error),
    }
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

#[cfg(target_os = "windows")]
fn record_path(value_name: &str, path: &Path) {
    use winreg::enums::{HKEY_CURRENT_USER, KEY_WOW64_64KEY, KEY_WRITE};
    use winreg::RegKey;

    if cfg!(debug_assertions) {
        log::debug!("[Uninstall] debug 构建跳过生产卸载路径登记: {}", value_name);
        return;
    }

    // 根目录永远不应成为可清理目标；NSIS 侧也会再次检查。
    if !is_safe_cleanup_path(path) {
        log::warn!("跳过登记不安全的卸载路径: {}", path.display());
        return;
    }

    let result = (|| -> Result<(), String> {
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
    })();

    if let Err(error) = result {
        log::warn!("{}", error);
    }
}

#[cfg(not(target_os = "windows"))]
fn record_path(_value_name: &str, _path: &Path) {}

#[cfg(target_os = "windows")]
fn clear_recorded_path(value_name: &str) {
    use std::io::ErrorKind;
    use winreg::enums::{HKEY_CURRENT_USER, KEY_WOW64_64KEY, KEY_WRITE};
    use winreg::RegKey;

    if cfg!(debug_assertions) {
        return;
    }

    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let key = match hkcu.open_subkey_with_flags(UNINSTALL_REGISTRY_KEY, KEY_WRITE | KEY_WOW64_64KEY)
    {
        Ok(key) => key,
        Err(error) if error.kind() == ErrorKind::NotFound => return,
        Err(error) => {
            log::warn!("打开卸载路径注册表项失败: {}", error);
            return;
        }
    };

    match key.delete_value(value_name) {
        Ok(()) => log::info!("[Uninstall] 已清除陈旧卸载路径: {}", value_name),
        Err(error) if error.kind() == ErrorKind::NotFound => {}
        Err(error) => log::warn!("清除卸载路径注册表项失败: {}", error),
    }
}

#[cfg(not(target_os = "windows"))]
fn clear_recorded_path(_value_name: &str) {}

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
}
