//! Native-host invocation with package, state, and permission checks.
use super::package_paths::{is_local_plugin_package_installed, local_plugin_package_dir};
use super::plugin_manifest::{
    read_plugin_package_manifest, validate_local_plugin_manifest, validate_plugin_data_key,
    validate_plugin_package_id, validate_plugin_relative_path,
};
use super::runtime::require_plugin_enabled;
use std::io::Write;
use std::path::PathBuf;
use std::process::{Command, Stdio};
use tauri::{command, AppHandle};

fn local_plugin_backend_spec(
    app_handle: &AppHandle,
    plugin_id: &str,
) -> Result<Option<(serde_json::Value, PathBuf, PathBuf)>, String> {
    let package_dir = local_plugin_package_dir(app_handle, plugin_id)?;
    let manifest_path = package_dir.join("plugin.json");
    let manifest = read_plugin_package_manifest(&manifest_path)?;
    let manifest_plugin_id = validate_local_plugin_manifest(&manifest)?;
    if manifest_plugin_id != plugin_id {
        return Err("插件清单 id 与安装目录不一致".to_string());
    }

    let Some(entry) = manifest.get("entry").and_then(|value| value.as_object()) else {
        return Ok(None);
    };

    let Some(backend) = entry.get("backend").and_then(|value| value.as_str()) else {
        return Ok(None);
    };
    validate_plugin_relative_path(backend)?;

    let backend_kind = entry
        .get("backendKind")
        .and_then(|value| value.as_str())
        .unwrap_or("native-host");
    if backend_kind != "native-host" {
        return Err(format!("当前应用暂不支持 {} 插件后端", backend_kind));
    }

    let backend_path = package_dir.join(backend);
    if !backend_path.is_file() {
        return Err(format!("插件后端入口不存在: {}", backend_path.display()));
    }
    let canonical_package_dir = package_dir
        .canonicalize()
        .map_err(|e| format!("解析插件目录失败: {}", e))?;
    let canonical_backend_path = backend_path
        .canonicalize()
        .map_err(|e| format!("解析插件后端入口失败: {}", e))?;
    if !canonical_backend_path.starts_with(&canonical_package_dir) {
        return Err("插件后端入口不能指向插件目录外部".to_string());
    }

    Ok(Some((
        manifest,
        canonical_package_dir,
        canonical_backend_path,
    )))
}

fn manifest_allows_backend_command(manifest: &serde_json::Value, command: &str) -> bool {
    manifest
        .get("permissions")
        .and_then(|value| value.as_array())
        .map(|permissions| {
            let command_permission = format!("backend:{}", command);
            permissions.iter().any(|permission| {
                permission.as_str() == Some("backend:*")
                    || permission.as_str() == Some(command_permission.as_str())
            })
        })
        .unwrap_or(false)
}

pub fn invoke_local_plugin_backend(
    app_handle: &AppHandle,
    plugin_id: &str,
    command: &str,
    payload: serde_json::Value,
) -> Result<serde_json::Value, String> {
    try_invoke_local_plugin_backend(app_handle, plugin_id, command, payload)?
        .ok_or_else(|| format!("插件 '{}' 未声明 native host 后端入口", plugin_id))
}

pub fn try_invoke_local_plugin_backend(
    app_handle: &AppHandle,
    plugin_id: &str,
    command: &str,
    payload: serde_json::Value,
) -> Result<Option<serde_json::Value>, String> {
    validate_plugin_package_id(plugin_id)?;
    validate_plugin_data_key(command)?;
    if !is_local_plugin_package_installed(app_handle, plugin_id) {
        return Ok(None);
    }
    require_plugin_enabled(app_handle, plugin_id)?;

    let Some((manifest, package_dir, backend_path)) =
        local_plugin_backend_spec(app_handle, plugin_id)?
    else {
        return Ok(None);
    };

    if !manifest_allows_backend_command(&manifest, command) {
        return Err(format!(
            "插件 '{}' 没有后端命令 {} 的权限",
            plugin_id, command
        ));
    }

    let request = serde_json::json!({
        "schemaVersion": 1,
        "pluginId": plugin_id,
        "command": command,
        "payload": payload,
    });

    let mut child = Command::new(&backend_path)
        .current_dir(&package_dir)
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .map_err(|e| format!("启动插件后端失败: {} ({})", backend_path.display(), e))?;

    if let Some(mut stdin) = child.stdin.take() {
        serde_json::to_writer(&mut stdin, &request)
            .map_err(|e| format!("写入插件后端请求失败: {}", e))?;
        stdin
            .write_all(b"\n")
            .map_err(|e| format!("写入插件后端请求失败: {}", e))?;
    }

    let output = child
        .wait_with_output()
        .map_err(|e| format!("读取插件后端响应失败: {}", e))?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
        return Err(if stderr.is_empty() {
            format!("插件后端执行失败: {}", output.status)
        } else {
            format!("插件后端执行失败: {}", stderr)
        });
    }

    let response: serde_json::Value = serde_json::from_slice(&output.stdout)
        .map_err(|e| format!("解析插件后端响应失败: {}", e))?;

    if response.get("ok").and_then(|value| value.as_bool()) == Some(false) {
        return Err(response
            .get("error")
            .and_then(|value| value.as_str())
            .unwrap_or("插件后端返回失败")
            .to_string());
    }

    Ok(Some(
        response
            .get("result")
            .cloned()
            .unwrap_or(serde_json::Value::Null),
    ))
}

#[command]
pub fn invoke_plugin_backend(
    app_handle: AppHandle,
    plugin_id: String,
    command: String,
    payload: serde_json::Value,
) -> Result<serde_json::Value, String> {
    invoke_local_plugin_backend(&app_handle, &plugin_id, &command, payload)
}
