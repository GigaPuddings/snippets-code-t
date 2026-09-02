use std::cmp::Ordering;
use std::fs;
use std::path::Path;

use tauri::AppHandle;

pub(crate) fn validate_plugin_package_id(plugin_id: &str) -> Result<(), String> {
    if plugin_id.is_empty() || plugin_id == "." || plugin_id == ".." || plugin_id.len() > 96 {
        return Err("插件 ID 无效".to_string());
    }

    if plugin_id
        .chars()
        .all(|ch| ch.is_ascii_alphanumeric() || matches!(ch, '-' | '_' | '.'))
    {
        Ok(())
    } else {
        Err("插件 ID 只能包含字母、数字、点、短横线和下划线".to_string())
    }
}

pub(crate) fn validate_plugin_data_key(key: &str) -> Result<(), String> {
    if key.is_empty() || key.len() > 128 {
        return Err("插件数据 key 无效".to_string());
    }

    if key
        .chars()
        .all(|ch| ch.is_ascii_alphanumeric() || matches!(ch, '-' | '_' | '.' | ':'))
    {
        Ok(())
    } else {
        Err("插件数据 key 只能包含字母、数字、点、冒号、短横线和下划线".to_string())
    }
}

pub(crate) fn validate_plugin_relative_path(value: &str) -> Result<(), String> {
    if value.is_empty()
        || value.contains("://")
        || value.starts_with('/')
        || Path::new(value).is_absolute()
        || value
            .split(['/', '\\'])
            .any(|segment| segment == ".." || segment.is_empty())
    {
        return Err(format!("插件资源路径无效: {}", value));
    }

    Ok(())
}

fn validate_plugin_storage_contract(manifest: &serde_json::Value) -> Result<(), String> {
    let Some(storage) = manifest.get("storage") else {
        return Ok(());
    };
    let Some(storage) = storage.as_object() else {
        return Err("插件 storage 必须是对象".to_string());
    };

    for field in ["schemaVersion", "indexSchemaVersion", "extractorVersion"] {
        if storage
            .get(field)
            .and_then(|value| value.as_u64())
            .is_none()
        {
            return Err(format!("插件 storage.{} 必须为非负整数", field));
        }
    }

    Ok(())
}

pub(crate) fn validate_local_plugin_manifest(
    manifest: &serde_json::Value,
) -> Result<String, String> {
    if manifest
        .get("schemaVersion")
        .and_then(|value| value.as_i64())
        != Some(1)
    {
        return Err("插件清单 schemaVersion 必须为 1".to_string());
    }

    if manifest.get("kind").and_then(|value| value.as_str()) != Some("local") {
        return Err("本地插件清单 kind 必须为 local".to_string());
    }

    let plugin_id = manifest
        .get("id")
        .and_then(|value| value.as_str())
        .ok_or("插件清单缺少 id".to_string())?;
    validate_plugin_package_id(plugin_id)?;
    validate_plugin_storage_contract(manifest)?;

    if let Some(entry) = manifest.get("entry").and_then(|value| value.as_object()) {
        for key in ["frontend", "backend"] {
            if let Some(path) = entry.get(key).and_then(|value| value.as_str()) {
                validate_plugin_relative_path(path)?;
            }
        }

        if let Some(kind) = entry.get("backendKind").and_then(|value| value.as_str()) {
            if !matches!(kind, "native-host" | "wasm" | "script") {
                return Err("插件后端类型必须为 native-host、wasm 或 script".to_string());
            }
        }
    }

    Ok(plugin_id.to_string())
}

fn parse_semver_parts(version: &str) -> Vec<u64> {
    version
        .trim_start_matches('v')
        .split('.')
        .map(|part| {
            part.chars()
                .take_while(|value| value.is_ascii_digit())
                .collect::<String>()
                .parse::<u64>()
                .unwrap_or(0)
        })
        .collect()
}

pub(crate) fn compare_semver(left: &str, right: &str) -> Ordering {
    let left_parts = parse_semver_parts(left);
    let right_parts = parse_semver_parts(right);
    let length = left_parts.len().max(right_parts.len());

    for index in 0..length {
        let left_value = *left_parts.get(index).unwrap_or(&0);
        let right_value = *right_parts.get(index).unwrap_or(&0);
        match left_value.cmp(&right_value) {
            Ordering::Equal => continue,
            ordering => return ordering,
        }
    }

    Ordering::Equal
}

pub(crate) fn validate_plugin_app_compatibility(
    app_handle: &AppHandle,
    manifest: &serde_json::Value,
) -> Result<(), String> {
    let min_app_version = manifest
        .get("minAppVersion")
        .or_else(|| manifest.get("compatibleAppVersion"))
        .and_then(|value| value.as_str())
        .map(|value| value.trim_start_matches(">=").trim());

    let Some(min_app_version) = min_app_version.filter(|value| !value.is_empty()) else {
        return Ok(());
    };

    let app_version = app_handle.package_info().version.to_string();
    if compare_semver(&app_version, min_app_version) == Ordering::Less {
        return Err(format!(
            "插件需要应用版本 >= {}，当前版本为 {}",
            min_app_version, app_version
        ));
    }

    Ok(())
}

pub(crate) fn read_plugin_package_manifest(
    manifest_path: &Path,
) -> Result<serde_json::Value, String> {
    fs::read_to_string(manifest_path)
        .map_err(|e| format!("读取插件清单失败: {} ({})", manifest_path.display(), e))
        .and_then(|content| {
            serde_json::from_str::<serde_json::Value>(&content)
                .map_err(|e| format!("解析插件清单失败: {} ({})", manifest_path.display(), e))
        })
}

pub(crate) fn manifest_i18n_fallback(manifest: &serde_json::Value, key: &str) -> Option<String> {
    manifest
        .get(key)
        .and_then(|value| value.get("fallback"))
        .and_then(|value| value.as_str())
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .map(ToOwned::to_owned)
}

pub(crate) fn manifest_plugin_name(manifest: &serde_json::Value) -> String {
    manifest_i18n_fallback(manifest, "name").unwrap_or_else(|| {
        manifest
            .get("id")
            .and_then(|value| value.as_str())
            .unwrap_or("Plugin")
            .to_string()
    })
}

pub(crate) fn manifest_string_array(manifest: &serde_json::Value, key: &str) -> Vec<String> {
    manifest
        .get("capabilities")
        .and_then(|value| value.get(key))
        .and_then(|value| value.as_array())
        .map(|items| {
            items
                .iter()
                .filter_map(|value| value.as_str())
                .map(str::trim)
                .filter(|value| !value.is_empty())
                .map(ToOwned::to_owned)
                .collect()
        })
        .unwrap_or_default()
}

pub(crate) fn plugin_index_contract(manifest: &serde_json::Value) -> (u64, u64, u64) {
    let storage = manifest.get("storage");
    (
        storage
            .and_then(|value| value.get("schemaVersion"))
            .and_then(|value| value.as_u64())
            .unwrap_or(1),
        storage
            .and_then(|value| value.get("indexSchemaVersion"))
            .and_then(|value| value.as_u64())
            .unwrap_or(1),
        storage
            .and_then(|value| value.get("extractorVersion"))
            .and_then(|value| value.as_u64())
            .unwrap_or(1),
    )
}

pub(crate) fn search_index_contract_changed(
    previous: Option<&serde_json::Value>,
    next: &serde_json::Value,
) -> bool {
    previous.is_some_and(|previous| {
        let (_, previous_index, previous_extractor) = plugin_index_contract(previous);
        let (_, next_index, next_extractor) = plugin_index_contract(next);
        previous_index != next_index || previous_extractor != next_extractor
    })
}
