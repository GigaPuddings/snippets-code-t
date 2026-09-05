//! Local package manifests, compatibility, install metadata, and inventory.
use super::package_paths::{normalized_existing_path, path_to_display_string, plugin_packages_dir};
use super::plugin_manifest::{read_plugin_package_manifest, validate_local_plugin_manifest};
use chrono::{DateTime, Utc};
use log::warn;
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::Path;
use std::time::SystemTime;
use tauri::{command, AppHandle};

const PLUGIN_INSTALL_METADATA_FILE: &str = ".install-meta.json";

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalPluginPackage {
    pub(super) manifest: serde_json::Value,
    package_path: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    installed_at: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct PluginInstallMetadata {
    installed_at: String,
}

fn system_time_to_rfc3339(value: SystemTime) -> String {
    let datetime: DateTime<Utc> = value.into();
    datetime.to_rfc3339()
}

fn read_plugin_install_metadata(package_path: &Path) -> Option<PluginInstallMetadata> {
    let metadata_path = package_path.join(PLUGIN_INSTALL_METADATA_FILE);
    let content = fs::read_to_string(metadata_path).ok()?;
    serde_json::from_str::<PluginInstallMetadata>(&content).ok()
}

pub(super) fn write_plugin_install_metadata(package_path: &Path) -> Result<(), String> {
    let metadata = PluginInstallMetadata {
        installed_at: system_time_to_rfc3339(SystemTime::now()),
    };
    let content = serde_json::to_string_pretty(&metadata)
        .map_err(|e| format!("序列化插件安装元数据失败: {}", e))?;
    fs::write(package_path.join(PLUGIN_INSTALL_METADATA_FILE), content)
        .map_err(|e| format!("写入插件安装元数据失败: {} ({})", package_path.display(), e))
}

fn plugin_installed_at(package_path: &Path) -> Option<String> {
    read_plugin_install_metadata(package_path)
        .map(|metadata| metadata.installed_at)
        .or_else(|| {
            fs::metadata(package_path)
                .ok()
                .and_then(|metadata| metadata.created().or_else(|_| metadata.modified()).ok())
                .map(system_time_to_rfc3339)
        })
}

pub(super) fn plugin_package_record(
    manifest: serde_json::Value,
    package_path: &Path,
) -> Result<LocalPluginPackage, String> {
    Ok(LocalPluginPackage {
        manifest,
        package_path: path_to_display_string(&normalized_existing_path(package_path)),
        installed_at: plugin_installed_at(package_path),
    })
}

pub(super) fn installed_plugin_packages_internal(
    app_handle: &AppHandle,
) -> Result<Vec<LocalPluginPackage>, String> {
    let plugins_dir = plugin_packages_dir(app_handle)?;

    if !plugins_dir.exists() {
        return Ok(Vec::new());
    }

    let entries = fs::read_dir(&plugins_dir)
        .map_err(|e| format!("读取插件目录失败: {} ({})", plugins_dir.display(), e))?;

    let mut manifests = Vec::new();
    for entry in entries.flatten() {
        let package_path = entry.path();
        let manifest_path = package_path.join("plugin.json");
        if !manifest_path.is_file() {
            continue;
        }

        match read_plugin_package_manifest(&manifest_path).and_then(|manifest| {
            validate_local_plugin_manifest(&manifest)?;
            plugin_package_record(manifest, &package_path)
        }) {
            Ok(plugin_package) => manifests.push(plugin_package),
            Err(error) => warn!("[Plugin] {}", error),
        }
    }

    manifests.sort_by(compare_plugin_package_install_time);

    Ok(manifests)
}

pub(super) fn plugin_package_manifest_id(plugin_package: &LocalPluginPackage) -> &str {
    plugin_package
        .manifest
        .get("id")
        .and_then(|value| value.as_str())
        .unwrap_or_default()
}

fn compare_plugin_package_install_time(
    left: &LocalPluginPackage,
    right: &LocalPluginPackage,
) -> std::cmp::Ordering {
    right
        .installed_at
        .cmp(&left.installed_at)
        .then_with(|| plugin_package_manifest_id(left).cmp(plugin_package_manifest_id(right)))
}

#[command]
pub fn get_installed_plugin_manifests(
    app_handle: AppHandle,
) -> Result<Vec<LocalPluginPackage>, String> {
    installed_plugin_packages_internal(&app_handle)
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    fn local_manifest_with_storage(storage: serde_json::Value) -> serde_json::Value {
        json!({
            "schemaVersion": 1,
            "id": "desktop-files",
            "version": "1.0.0",
            "kind": "local",
            "name": {
                "i18nKey": "plugins.desktopFiles.name",
                "fallback": "Desktop Files"
            },
            "description": {
                "i18nKey": "plugins.desktopFiles.description",
                "fallback": "Desktop file search"
            },
            "category": "search",
            "enabledByDefault": true,
            "storage": storage
        })
    }

    #[test]
    fn plugin_manifest_accepts_valid_storage_contract() {
        let manifest = local_manifest_with_storage(json!({
            "schemaVersion": 1,
            "indexSchemaVersion": 2,
            "extractorVersion": 3
        }));

        assert_eq!(
            validate_local_plugin_manifest(&manifest).expect("manifest should be valid"),
            "desktop-files"
        );
    }

    #[test]
    fn plugin_manifest_rejects_invalid_storage_contract() {
        let manifest = local_manifest_with_storage(json!({
            "schemaVersion": 1,
            "indexSchemaVersion": -1,
            "extractorVersion": 3
        }));

        assert!(validate_local_plugin_manifest(&manifest).is_err());
    }
}
