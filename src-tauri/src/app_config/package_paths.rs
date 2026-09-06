//! Package locations, directory migration, and install staging directories.
use super::persistence::AppConfigManager;
use super::plugin_manifest::validate_plugin_package_id;
use log::{info, warn};
use std::collections::HashSet;
use std::fs;
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, OnceLock, RwLock};
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use tauri::{command, AppHandle, Manager};
use walkdir::WalkDir;

const PLUGIN_PACKAGES_DIR_NAME: &str = "plugins";

const PLUGIN_PACKAGES_ROOT_DIR_NAME: &str = "packages";

static COMPLETED_DEFAULT_PLUGIN_MIGRATIONS: OnceLock<Mutex<HashSet<(String, String)>>> =
    OnceLock::new();

pub(super) fn plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    if let Some(configured_root) = configured_plugin_install_root_dir(app_handle)? {
        return Ok(configured_root.join(PLUGIN_PACKAGES_DIR_NAME));
    }

    default_plugin_packages_dir(app_handle)
}

fn default_plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    let data_dir = crate::json_config::get_data_dir(app_handle);
    let packages_dir = default_plugin_packages_dir_for_data_dir(&data_dir);
    let legacy_packages_dir = legacy_default_plugin_packages_dir_for_data_dir(&data_dir);
    let migrated_count = migrate_installed_plugin_packages_once(
        &legacy_packages_dir,
        &packages_dir,
        COMPLETED_DEFAULT_PLUGIN_MIGRATIONS.get_or_init(|| Mutex::new(HashSet::new())),
    )?;
    if migrated_count > 0 {
        info!(
            "[Plugin] 旧插件目录迁移完成: {} 个 ({} -> {})",
            migrated_count,
            legacy_packages_dir.display(),
            packages_dir.display()
        );
    }
    Ok(packages_dir)
}

fn default_plugin_packages_dir_for_data_dir(data_dir: &Path) -> PathBuf {
    data_dir
        .join(PLUGIN_PACKAGES_ROOT_DIR_NAME)
        .join(PLUGIN_PACKAGES_DIR_NAME)
}

fn legacy_default_plugin_packages_dir_for_data_dir(data_dir: &Path) -> PathBuf {
    data_dir.join(PLUGIN_PACKAGES_DIR_NAME)
}

pub fn resolve_plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    plugin_packages_dir(app_handle)
}

fn configured_plugin_install_root_dir(app_handle: &AppHandle) -> Result<Option<PathBuf>, String> {
    let config = if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>()
    {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        Some(manager.get_config().clone())
    } else if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(app_handle) {
        AppConfigManager::new(&workspace_root)
            .map(|manager| Some(manager.get_config().clone()))
            .unwrap_or(None)
    } else {
        None
    };

    Ok(config
        .and_then(|value| value.plugin_install_dir)
        .map(|value| normalize_plugin_install_root(Path::new(value.trim())))
        .filter(|value| value.is_absolute()))
}

fn normalize_plugin_install_root(path: &Path) -> PathBuf {
    if path
        .file_name()
        .is_some_and(|name| name.to_string_lossy().eq_ignore_ascii_case("plugins"))
    {
        return path
            .parent()
            .map(Path::to_path_buf)
            .unwrap_or_else(|| path.to_path_buf());
    }

    path.to_path_buf()
}

pub(super) fn path_to_display_string(path: &Path) -> String {
    let value = path.to_string_lossy().to_string();
    #[cfg(windows)]
    {
        if let Some(rest) = value.strip_prefix(r"\\?\UNC\") {
            return format!(r"\\{}", rest);
        }
        if let Some(rest) = value.strip_prefix(r"\\?\") {
            return rest.to_string();
        }
    }
    value
}

pub(super) fn normalized_existing_path(path: &Path) -> PathBuf {
    path.canonicalize().unwrap_or_else(|_| path.to_path_buf())
}

fn same_path(left: &Path, right: &Path) -> bool {
    path_to_display_string(&normalized_existing_path(left))
        .eq_ignore_ascii_case(&path_to_display_string(&normalized_existing_path(right)))
}

fn migration_path_key(path: &Path) -> String {
    let value = path_to_display_string(&normalized_existing_path(path));
    if cfg!(windows) {
        value.to_ascii_lowercase()
    } else {
        value
    }
}

fn migrate_installed_plugin_packages_once(
    old_dir: &Path,
    new_dir: &Path,
    completed_migrations: &Mutex<HashSet<(String, String)>>,
) -> Result<usize, String> {
    if same_path(old_dir, new_dir) || !old_dir.exists() {
        return Ok(0);
    }

    let migration_key = (migration_path_key(old_dir), migration_path_key(new_dir));
    let mut completed = completed_migrations
        .lock()
        .map_err(|_| "插件迁移状态锁已损坏".to_string())?;
    if completed.contains(&migration_key) {
        return Ok(0);
    }

    let migrated_count = migrate_installed_plugin_packages(old_dir, new_dir)?;
    completed.insert(migration_key);
    Ok(migrated_count)
}

fn migrate_installed_plugin_packages(old_dir: &Path, new_dir: &Path) -> Result<usize, String> {
    if same_path(old_dir, new_dir) || !old_dir.exists() {
        return Ok(0);
    }

    fs::create_dir_all(new_dir)
        .map_err(|e| format!("创建插件安装目录失败: {} ({})", new_dir.display(), e))?;

    let entries = fs::read_dir(old_dir)
        .map_err(|e| format!("读取原插件目录失败: {} ({})", old_dir.display(), e))?;

    let mut migrated_count = 0;
    for entry in entries.flatten() {
        let source_path = entry.path();
        if !source_path.join("plugin.json").is_file() {
            continue;
        }

        let Some(plugin_dir_name) = source_path.file_name() else {
            continue;
        };
        let target_path = new_dir.join(plugin_dir_name);
        if target_path.exists() {
            continue;
        }

        let temp_path = new_dir.join(format!(
            ".migration-tmp-{}-{}",
            plugin_dir_name.to_string_lossy(),
            SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .map_err(|e| format!("生成迁移临时目录失败: {}", e))?
                .as_millis()
        ));

        if let Err(error) = copy_plugin_package_dir(&source_path, &temp_path).and_then(|_| {
            fs::rename(&temp_path, &target_path).map_err(|e| {
                format!(
                    "完成插件迁移失败: {} -> {} ({})",
                    temp_path.display(),
                    target_path.display(),
                    e
                )
            })
        }) {
            let _ = fs::remove_dir_all(&temp_path);
            return Err(error);
        }
        migrated_count += 1;
    }

    Ok(migrated_count)
}

#[command]
pub fn get_plugin_install_dir(app_handle: AppHandle) -> Result<String, String> {
    let plugins_dir = plugin_packages_dir(&app_handle)?;
    Ok(path_to_display_string(&normalized_existing_path(
        &plugins_dir,
    )))
}

#[command]
pub fn set_plugin_install_dir(app_handle: AppHandle, path: Option<String>) -> Result<(), String> {
    let old_plugins_dir = plugin_packages_dir(&app_handle)?;
    let configured_path = path
        .map(|value| value.trim().to_string())
        .filter(|value| !value.is_empty());

    let (new_plugins_dir, normalized_path) = if let Some(value) = configured_path {
        let selected_root = normalize_plugin_install_root(&PathBuf::from(value));
        if !selected_root.is_absolute() {
            return Err("插件安装目录必须是绝对路径".to_string());
        }
        if selected_root.is_file() {
            return Err("插件安装目录不能是文件".to_string());
        }
        fs::create_dir_all(&selected_root).map_err(|e| {
            format!(
                "创建插件安装根目录失败: {} ({})",
                selected_root.display(),
                e
            )
        })?;
        let normalized_root = normalized_existing_path(&selected_root);
        let plugins_dir = normalized_root.join(PLUGIN_PACKAGES_DIR_NAME);
        fs::create_dir_all(&plugins_dir)
            .map_err(|e| format!("创建插件安装目录失败: {} ({})", plugins_dir.display(), e))?;
        (
            normalized_existing_path(&plugins_dir),
            Some(path_to_display_string(&normalized_root)),
        )
    } else {
        let default_dir = default_plugin_packages_dir(&app_handle)?;
        (normalized_existing_path(&default_dir), None)
    };

    let migrated_count = migrate_installed_plugin_packages(&old_plugins_dir, &new_plugins_dir)?;
    if migrated_count > 0 {
        info!(
            "[Plugin] 插件安装目录迁移完成: {} 个 ({} -> {})",
            migrated_count,
            old_plugins_dir.display(),
            new_plugins_dir.display()
        );
    }

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        let mut config = manager.get_config().clone();
        config.plugin_install_dir = normalized_path;
        manager.update_config(config);
        manager.save()?;
        crate::uninstall::record_plugin_dir(&new_plugins_dir);
        info!("✅ [Plugin] 插件安装目录已更新");
        return Ok(());
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let mut manager = AppConfigManager::new(&workspace_root)?;
    let mut config = manager.get_config().clone();
    config.plugin_install_dir = normalized_path;
    manager.update_config(config);
    manager.save()?;
    crate::uninstall::record_plugin_dir(&new_plugins_dir);
    info!("✅ [Plugin] 插件安装目录已更新");
    Ok(())
}

pub(super) fn is_local_plugin_package_installed(app_handle: &AppHandle, plugin_id: &str) -> bool {
    plugin_packages_dir(app_handle)
        .map(|plugins_dir| plugins_dir.join(plugin_id).join("plugin.json").is_file())
        .unwrap_or(false)
}

pub(super) fn local_plugin_package_dir(
    app_handle: &AppHandle,
    plugin_id: &str,
) -> Result<PathBuf, String> {
    validate_plugin_package_id(plugin_id)?;
    let package_dir = plugin_packages_dir(app_handle)?.join(plugin_id);
    if !package_dir.join("plugin.json").is_file() {
        return Err(format!("本地插件 '{}' 未安装", plugin_id));
    }
    Ok(package_dir)
}

pub(super) fn copy_plugin_package_dir(source_dir: &Path, target_dir: &Path) -> Result<(), String> {
    for entry in WalkDir::new(source_dir).follow_links(false) {
        let entry = entry.map_err(|e| format!("读取插件包文件失败: {}", e))?;
        let source_path = entry.path();
        let relative_path = source_path
            .strip_prefix(source_dir)
            .map_err(|e| format!("计算插件包路径失败: {}", e))?;
        let target_path = target_dir.join(relative_path);

        if entry.file_type().is_dir() {
            fs::create_dir_all(&target_path)
                .map_err(|e| format!("创建插件目录失败: {} ({})", target_path.display(), e))?;
        } else if entry.file_type().is_file() {
            if let Some(parent) = target_path.parent() {
                fs::create_dir_all(parent)
                    .map_err(|e| format!("创建插件目录失败: {} ({})", parent.display(), e))?;
            }
            fs::copy(source_path, &target_path).map_err(|e| {
                format!(
                    "复制插件文件失败: {} -> {} ({})",
                    source_path.display(),
                    target_path.display(),
                    e
                )
            })?;
        }
    }

    Ok(())
}

pub(super) fn create_plugin_install_temp_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map_err(|e| format!("生成临时目录失败: {}", e))?
        .as_millis();
    let temp_dir = plugin_packages_dir(app_handle)?.join(format!(".install-tmp-{}", now));
    fs::create_dir_all(&temp_dir)
        .map_err(|e| format!("创建插件临时目录失败: {} ({})", temp_dir.display(), e))?;
    Ok(temp_dir)
}

pub(super) fn cleanup_stale_plugin_install_temp_dirs(app_handle: &AppHandle) {
    let Ok(plugins_dir) = plugin_packages_dir(app_handle) else {
        return;
    };
    let Ok(entries) = fs::read_dir(&plugins_dir) else {
        return;
    };

    for entry in entries.filter_map(Result::ok) {
        let path = entry.path();
        let is_stale_install_dir = entry
            .file_name()
            .to_str()
            .is_some_and(|name| name.starts_with(".install-tmp-"))
            && path.is_dir()
            && path.parent() == Some(plugins_dir.as_path())
            && entry
                .metadata()
                .and_then(|metadata| metadata.modified())
                .ok()
                .and_then(|modified| SystemTime::now().duration_since(modified).ok())
                .is_some_and(|age| age >= Duration::from_secs(60 * 60));
        if is_stale_install_dir {
            if let Err(error) = fs::remove_dir_all(&path) {
                warn!(
                    "[Plugin] 清理上次中断的安装临时目录失败: {} ({})",
                    path.display(),
                    error
                );
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn migration_test_dir(name: &str) -> PathBuf {
        std::env::temp_dir().join(format!(
            "snippets-code-plugin-migration-{}-{}-{}",
            name,
            std::process::id(),
            SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .unwrap()
                .as_nanos()
        ))
    }

    fn write_test_plugin(root: &Path, plugin_id: &str, marker: &str) {
        let plugin_dir = root.join(plugin_id);
        fs::create_dir_all(&plugin_dir).unwrap();
        fs::write(plugin_dir.join("plugin.json"), "{}").unwrap();
        fs::write(plugin_dir.join("marker.txt"), marker).unwrap();
    }

    #[test]
    fn default_plugin_packages_dir_lives_under_packages() {
        assert_eq!(
            default_plugin_packages_dir_for_data_dir(&PathBuf::from("data-root")),
            PathBuf::from("data-root").join("packages").join("plugins")
        );
    }

    #[test]
    fn plugin_migration_copies_missing_packages_without_overwriting_existing_targets() {
        let root = migration_test_dir("copy");
        let old_dir = root.join("old");
        let new_dir = root.join("new");
        write_test_plugin(&old_dir, "missing", "legacy");
        write_test_plugin(&old_dir, "existing", "legacy");
        write_test_plugin(&new_dir, "existing", "current");

        let migrated_count = migrate_installed_plugin_packages(&old_dir, &new_dir).unwrap();

        assert_eq!(migrated_count, 1);
        assert_eq!(
            fs::read_to_string(new_dir.join("missing/marker.txt")).unwrap(),
            "legacy"
        );
        assert_eq!(
            fs::read_to_string(new_dir.join("existing/marker.txt")).unwrap(),
            "current"
        );
        fs::remove_dir_all(root).unwrap();
    }

    #[test]
    fn default_plugin_migration_runs_once_for_each_path_pair() {
        let root = migration_test_dir("once");
        let old_dir = root.join("old");
        let new_dir = root.join("new");
        let completed_migrations = Mutex::new(HashSet::new());
        write_test_plugin(&old_dir, "first", "legacy");

        assert_eq!(
            migrate_installed_plugin_packages_once(&old_dir, &new_dir, &completed_migrations)
                .unwrap(),
            1
        );
        write_test_plugin(&old_dir, "added-later", "legacy");
        assert_eq!(
            migrate_installed_plugin_packages_once(&old_dir, &new_dir, &completed_migrations)
                .unwrap(),
            0
        );
        assert!(!new_dir.join("added-later").exists());
        fs::remove_dir_all(root).unwrap();
    }
}
