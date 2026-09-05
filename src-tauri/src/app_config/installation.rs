//! Package extraction and install/uninstall lifecycle orchestration.
use super::download::download_plugin_url_to_temp;
use super::package_paths::{
    cleanup_stale_plugin_install_temp_dirs, copy_plugin_package_dir,
    create_plugin_install_temp_dir, plugin_packages_dir,
};
use super::packages::{plugin_package_record, write_plugin_install_metadata, LocalPluginPackage};
use super::persistence::AppConfigManager;
use super::plugin_manifest::{
    plugin_index_contract, read_plugin_package_manifest, search_index_contract_changed,
    validate_local_plugin_manifest, validate_plugin_app_compatibility, validate_plugin_package_id,
    validate_plugin_relative_path,
};
use super::progress::{
    begin_plugin_install, emit_plugin_install_failure, emit_plugin_install_progress,
};
use super::runtime::{
    apply_enabled_plugin_runtime_change, apply_plugin_runtime_effects, is_plugin_enabled,
    refresh_plugin_shell_integration, refresh_search_plugin_index_feedback,
};
use super::storage::clear_plugin_owned_data;
use log::{info, warn};
use serde::Deserialize;
use std::fs::{self, File};
use std::io;
use std::path::{Path, PathBuf};
use std::sync::{Arc, LazyLock, RwLock};
use tauri::{command, AppHandle, Manager};
use zip::ZipArchive;

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InstallPluginPackageFromUrlRequest {
    package_url: String,
    #[serde(default)]
    package_subdir: Option<String>,
    #[serde(default)]
    expected_size_bytes: Option<u64>,
    #[serde(default)]
    expected_sha256: Option<String>,
    #[serde(default)]
    overwrite: bool,
    #[serde(default)]
    mirror_urls: Option<Vec<String>>,
    #[serde(default)]
    plugin_id: Option<String>,
}

static PLUGIN_INSTALL_LOCK: LazyLock<tokio::sync::Mutex<()>> =
    LazyLock::new(|| tokio::sync::Mutex::new(()));

fn extract_plugin_zip_package(zip_path: &Path, target_dir: &Path) -> Result<(), String> {
    let file = File::open(zip_path)
        .map_err(|e| format!("打开插件压缩包失败: {} ({})", zip_path.display(), e))?;
    let mut archive = ZipArchive::new(file)
        .map_err(|e| format!("读取插件压缩包失败: {} ({})", zip_path.display(), e))?;
    fs::create_dir_all(target_dir)
        .map_err(|e| format!("创建插件解压目录失败: {} ({})", target_dir.display(), e))?;
    let canonical_target_dir = target_dir
        .canonicalize()
        .map_err(|e| format!("解析插件解压目录失败: {} ({})", target_dir.display(), e))?;

    for index in 0..archive.len() {
        let mut file = archive
            .by_index(index)
            .map_err(|e| format!("读取插件压缩包条目失败: {}", e))?;
        let enclosed_name = file
            .enclosed_name()
            .ok_or_else(|| format!("插件压缩包包含不安全路径: {}", file.name()))?;
        let output_path = target_dir.join(enclosed_name);
        let canonical_output_path = output_path
            .parent()
            .and_then(|parent| parent.canonicalize().ok())
            .unwrap_or_else(|| canonical_target_dir.clone());
        if !canonical_output_path.starts_with(&canonical_target_dir) {
            return Err(format!("插件压缩包包含不安全路径: {}", file.name()));
        }

        if file.is_dir() {
            fs::create_dir_all(&output_path)
                .map_err(|e| format!("创建插件目录失败: {} ({})", output_path.display(), e))?;
            continue;
        }

        if let Some(parent) = output_path.parent() {
            fs::create_dir_all(parent)
                .map_err(|e| format!("创建插件目录失败: {} ({})", parent.display(), e))?;
        }

        let mut output_file = File::create(&output_path)
            .map_err(|e| format!("创建插件文件失败: {} ({})", output_path.display(), e))?;
        io::copy(&mut file, &mut output_file)
            .map_err(|e| format!("解压插件文件失败: {} ({})", output_path.display(), e))?;
    }

    Ok(())
}

fn find_plugin_source_root(extracted_dir: &Path) -> Result<PathBuf, String> {
    if extracted_dir.join("plugin.json").is_file() {
        return Ok(extracted_dir.to_path_buf());
    }

    let mut candidates = Vec::new();
    for entry in fs::read_dir(extracted_dir)
        .map_err(|e| format!("读取插件临时目录失败: {} ({})", extracted_dir.display(), e))?
    {
        let entry = entry.map_err(|e| format!("读取插件临时目录条目失败: {}", e))?;
        let path = entry.path();
        if path.is_dir() && path.join("plugin.json").is_file() {
            candidates.push(path);
        }
    }

    match candidates.len() {
        1 => Ok(candidates.remove(0)),
        0 => Err("插件包缺少 plugin.json".to_string()),
        _ => Err("插件包中包含多个 plugin.json 根目录".to_string()),
    }
}

fn find_plugin_archive_subdir(
    extracted_dir: &Path,
    package_subdir: &str,
) -> Result<PathBuf, String> {
    validate_plugin_relative_path(package_subdir)?;

    let mut roots = vec![extracted_dir.to_path_buf()];
    let entries = fs::read_dir(extracted_dir)
        .map_err(|e| format!("读取插件临时目录失败: {} ({})", extracted_dir.display(), e))?
        .filter_map(Result::ok)
        .filter(|entry| entry.path().is_dir())
        .map(|entry| entry.path())
        .collect::<Vec<_>>();

    if entries.len() == 1 {
        roots.push(entries[0].clone());
    }

    for root in roots {
        let candidate = root.join(package_subdir);
        if candidate.join("plugin.json").is_file() {
            return Ok(candidate);
        }
    }

    Err(format!("插件压缩包中未找到子目录: {}", package_subdir))
}

fn resolve_plugin_install_source(
    app_handle: &AppHandle,
    source_path: &Path,
) -> Result<(PathBuf, Option<PathBuf>), String> {
    if source_path.is_dir() {
        return source_path
            .canonicalize()
            .map(|path| (path, None))
            .map_err(|e| format!("解析插件目录失败: {}", e));
    }

    let is_zip = source_path
        .extension()
        .and_then(|value| value.to_str())
        .map(|value| value.eq_ignore_ascii_case("zip"))
        .unwrap_or(false);

    if !source_path.is_file() || !is_zip {
        return Err("请选择包含 plugin.json 的插件目录，或 .zip 插件包".to_string());
    }

    let temp_dir = create_plugin_install_temp_dir(app_handle)?;
    let result = extract_plugin_zip_package(source_path, &temp_dir)
        .and_then(|_| find_plugin_source_root(&temp_dir));

    match result {
        Ok(source_dir) => Ok((source_dir, Some(temp_dir))),
        Err(error) => {
            let _ = fs::remove_dir_all(&temp_dir);
            Err(error)
        }
    }
}

#[command]
pub fn install_local_plugin_package(
    app_handle: AppHandle,
    source_path: String,
    overwrite: bool,
) -> Result<LocalPluginPackage, String> {
    let source_path = PathBuf::from(source_path);
    let (source_dir, temp_dir) = resolve_plugin_install_source(&app_handle, &source_path)?;
    let manifest_path = source_dir.join("plugin.json");
    if !manifest_path.is_file() {
        if let Some(temp_dir) = temp_dir {
            let _ = fs::remove_dir_all(temp_dir);
        }
        return Err("插件目录缺少 plugin.json".to_string());
    }

    let result = (|| -> Result<LocalPluginPackage, String> {
        let manifest = read_plugin_package_manifest(&manifest_path)?;
        let plugin_id = validate_local_plugin_manifest(&manifest)?;
        validate_plugin_app_compatibility(&app_handle, &manifest)?;

        let plugins_dir = plugin_packages_dir(&app_handle)?;
        fs::create_dir_all(&plugins_dir)
            .map_err(|e| format!("创建插件目录失败: {} ({})", plugins_dir.display(), e))?;

        let target_dir = plugins_dir.join(&plugin_id);
        let previous_manifest = target_dir
            .join("plugin.json")
            .is_file()
            .then(|| read_plugin_package_manifest(&target_dir.join("plugin.json")))
            .transpose()?;
        let rebuild_search_index =
            search_index_contract_changed(previous_manifest.as_ref(), &manifest);
        if target_dir.exists() {
            if !overwrite {
                return Err(format!("插件 '{}' 已安装", plugin_id));
            }
            // 停止旧运行时后再覆盖目录；此时不能广播插件状态，否则其他
            // WebView 会在旧目录仍存在时重新读回旧插件清单。
            apply_plugin_runtime_effects(&app_handle, &plugin_id, false);
            fs::remove_dir_all(&target_dir)
                .map_err(|e| format!("移除旧插件目录失败: {} ({})", target_dir.display(), e))?;
        }

        fs::create_dir_all(&target_dir)
            .map_err(|e| format!("创建插件目录失败: {} ({})", target_dir.display(), e))?;
        if let Err(error) = copy_plugin_package_dir(&source_dir, &target_dir) {
            let _ = fs::remove_dir_all(&target_dir);
            return Err(error);
        }
        write_plugin_install_metadata(&target_dir)?;

        info!("✅ [Plugin] installed local package {}", plugin_id);
        if is_plugin_enabled(&app_handle, &plugin_id) {
            if let Err(error) = crate::db::ensure_plugin_storage(&plugin_id) {
                warn!(
                    "[Plugin] ensure storage after installing {} failed: {}",
                    plugin_id, error
                );
            }
            if let Err(error) =
                crate::hotkey::refresh_plugin_shortcuts(&app_handle, &plugin_id, true)
            {
                warn!(
                    "[Plugin] refresh hotkeys after installing {} failed: {}",
                    plugin_id, error
                );
            }
            apply_enabled_plugin_runtime_change(&app_handle, &plugin_id);
            if rebuild_search_index {
                info!(
                    "[Plugin] {} index contract changed {:?} -> {:?}; rebuilding affected source",
                    plugin_id,
                    previous_manifest.as_ref().map(plugin_index_contract),
                    plugin_index_contract(&manifest)
                );
                refresh_search_plugin_index_feedback(
                    app_handle.clone(),
                    plugin_id.to_string(),
                    true,
                );
            }
        }
        refresh_plugin_shell_integration(
            &app_handle,
            &plugin_id,
            is_plugin_enabled(&app_handle, &plugin_id),
        );
        plugin_package_record(manifest, &target_dir)
    })();

    if let Some(temp_dir) = temp_dir {
        let _ = fs::remove_dir_all(temp_dir);
    }

    result
}

fn install_downloaded_plugin_package(
    app_handle: AppHandle,
    package_url: String,
    downloaded_package: PathBuf,
    package_subdir: Option<String>,
    overwrite: bool,
) -> Result<LocalPluginPackage, String> {
    let temp_dir = downloaded_package.parent().map(Path::to_path_buf);
    emit_plugin_install_progress(&app_handle, &package_url, "extracting", 0, None);

    let result = (|| {
        if let Some(package_subdir) = package_subdir.filter(|value| !value.trim().is_empty()) {
            let extract_dir = temp_dir
                .as_ref()
                .ok_or("插件下载临时目录无效".to_string())?
                .join("extract");
            fs::create_dir_all(&extract_dir)
                .map_err(|e| format!("创建插件解压目录失败: {} ({})", extract_dir.display(), e))?;
            extract_plugin_zip_package(&downloaded_package, &extract_dir)
                .and_then(|_| find_plugin_archive_subdir(&extract_dir, package_subdir.trim()))
                .and_then(|source_dir| {
                    emit_plugin_install_progress(&app_handle, &package_url, "installing", 0, None);
                    install_local_plugin_package(
                        app_handle.clone(),
                        source_dir.to_string_lossy().to_string(),
                        overwrite,
                    )
                })
        } else {
            install_local_plugin_package(
                app_handle.clone(),
                downloaded_package.to_string_lossy().to_string(),
                overwrite,
            )
        }
    })();

    if let Some(temp_dir) = temp_dir {
        let _ = fs::remove_dir_all(temp_dir);
    }
    result
}

#[command]
pub async fn install_plugin_package_from_url(
    app_handle: AppHandle,
    request: InstallPluginPackageFromUrlRequest,
) -> Result<LocalPluginPackage, String> {
    let InstallPluginPackageFromUrlRequest {
        package_url,
        package_subdir,
        expected_size_bytes,
        expected_sha256,
        overwrite,
        mirror_urls,
        plugin_id,
    } = request;

    begin_plugin_install(&app_handle, &package_url, plugin_id);
    let _install_guard = PLUGIN_INSTALL_LOCK.lock().await;
    cleanup_stale_plugin_install_temp_dirs(&app_handle);

    let mirror_urls = mirror_urls.unwrap_or_default();
    let result = async {
        let downloaded_package = download_plugin_url_to_temp(
            &app_handle,
            &package_url,
            expected_size_bytes,
            expected_sha256,
            &mirror_urls,
        )
        .await?;
        let install_app_handle = app_handle.clone();
        let install_package_url = package_url.clone();
        tokio::task::spawn_blocking(move || {
            install_downloaded_plugin_package(
                install_app_handle,
                install_package_url,
                downloaded_package,
                package_subdir,
                overwrite,
            )
        })
        .await
        .map_err(|error| format!("插件安装后台任务失败: {}", error))?
    }
    .await;

    match &result {
        Ok(_) => emit_plugin_install_progress(&app_handle, &package_url, "installed", 0, None),
        Err(error) => emit_plugin_install_failure(&app_handle, &package_url, error),
    }
    result
}

#[command]
pub fn uninstall_local_plugin_package(
    app_handle: AppHandle,
    plugin_id: String,
    delete_data: Option<bool>,
) -> Result<(), String> {
    validate_plugin_package_id(&plugin_id)?;
    let delete_data = delete_data.unwrap_or(false);

    let plugins_dir = plugin_packages_dir(&app_handle)?;
    let target_dir = plugins_dir.join(&plugin_id);
    if !target_dir.exists() {
        return Err(format!("本地插件 '{}' 未安装", plugin_id));
    }
    // 默认卸载只移除可重新安装的包；用户数据保留在独立状态目录。

    if let Err(error) = crate::hotkey::refresh_plugin_shortcuts(&app_handle, &plugin_id, false) {
        warn!(
            "[Plugin] refresh hotkeys before uninstalling {} failed: {}",
            plugin_id, error
        );
    }
    // 先停止运行时，等目录和持久化状态都清理完成后再广播一次最终状态。
    apply_plugin_runtime_effects(&app_handle, &plugin_id, false);

    fs::remove_dir_all(&target_dir)
        .map_err(|e| format!("删除插件目录失败: {} ({})", target_dir.display(), e))?;

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        manager.remove_plugin_state(&plugin_id);
        manager.save()?;
    } else if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(&app_handle) {
        let mut manager = AppConfigManager::new(&workspace_root)?;
        manager.remove_plugin_state(&plugin_id);
        manager.save()?;
    }

    let data_cleanup_result = if delete_data {
        clear_plugin_owned_data(&app_handle, &plugin_id).map_err(|error| {
            format!(
                "插件包已卸载，但删除插件 '{}' 的相关数据失败: {}",
                plugin_id, error
            )
        })
    } else {
        Ok(())
    };

    info!(
        "✅ [Plugin] uninstalled local package {} (user data {})",
        plugin_id,
        if delete_data { "deleted" } else { "preserved" }
    );
    refresh_plugin_shell_integration(&app_handle, &plugin_id, false);
    data_cleanup_result
}
