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

    if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(app_handle) {
        record_workspace_dir(&workspace_root);
    }

    if let Ok(plugin_dir) = crate::app_config::get_plugin_install_dir(app_handle.clone()) {
        record_plugin_dir(Path::new(&plugin_dir));
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

#[cfg(target_os = "windows")]
fn record_path(value_name: &str, path: &Path) {
    use winreg::enums::HKEY_CURRENT_USER;
    use winreg::RegKey;

    // 根目录永远不应成为可清理目标；NSIS 侧也会再次检查。
    if !path.is_absolute() || path.parent().is_none() {
        log::warn!("跳过登记不安全的卸载路径: {}", path.display());
        return;
    }

    let result = (|| -> Result<(), String> {
        let hkcu = RegKey::predef(HKEY_CURRENT_USER);
        let (key, _) = hkcu
            .create_subkey(UNINSTALL_REGISTRY_KEY)
            .map_err(|error| format!("创建卸载路径注册表项失败: {}", error))?;
        key.set_value(value_name, &path.to_string_lossy().to_string())
            .map_err(|error| format!("写入卸载路径注册表项失败: {}", error))
    })();

    if let Err(error) = result {
        log::warn!("{}", error);
    }
}

#[cfg(not(target_os = "windows"))]
fn record_path(_value_name: &str, _path: &Path) {}
