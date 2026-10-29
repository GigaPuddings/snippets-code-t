//! Package locations, user-requested directory moves, and install staging directories.
use super::persistence::AppConfigManager;
use super::plugin_manifest::{
    read_plugin_package_manifest, validate_local_plugin_manifest, validate_plugin_package_id,
    validate_plugin_relative_path,
};
use log::{info, warn};
use std::collections::BTreeMap;
use std::fs;
use std::io::{BufReader, Read};
use std::path::{Path, PathBuf};
use std::sync::{Arc, Mutex, RwLock};
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use tauri::{command, AppHandle, Manager};
use walkdir::WalkDir;

const PLUGIN_PACKAGES_DIR_NAME: &str = "plugins";

const PLUGIN_PACKAGES_ROOT_DIR_NAME: &str = "packages";

// Local installs, downloaded installs, uninstall and directory changes share one
// filesystem critical section. Downloads themselves do not hold this lock.
pub(super) static PLUGIN_PACKAGE_MUTATION_LOCK: Mutex<()> = Mutex::new(());

pub(super) struct PluginPackageStagingDir {
    path: PathBuf,
    preserve: bool,
}

impl PluginPackageStagingDir {
    pub(super) fn new(parent: &Path, purpose: &str) -> Result<Self, String> {
        let path = parent.join(format!(".package-{}-{}", purpose, uuid::Uuid::new_v4()));
        fs::create_dir(&path)
            .map_err(|e| format!("创建插件暂存目录失败: {} ({})", path.display(), e))?;
        Ok(Self {
            path,
            preserve: false,
        })
    }

    pub(super) fn path(&self) -> &Path {
        &self.path
    }

    pub(super) fn preserve_for_recovery(&mut self) {
        self.preserve = true;
    }
}

impl Drop for PluginPackageStagingDir {
    fn drop(&mut self) {
        if !self.preserve {
            if let Err(error) = fs::remove_dir_all(&self.path) {
                warn!(
                    "[Plugin] 清理插件暂存目录失败: {} ({})",
                    self.path.display(),
                    error
                );
            }
        }
    }
}

fn plugin_package_entries(root: &Path) -> Result<BTreeMap<PathBuf, bool>, String> {
    let metadata = fs::symlink_metadata(root)
        .map_err(|e| format!("读取插件目录失败: {} ({})", root.display(), e))?;
    #[cfg(windows)]
    let is_link = {
        use std::os::windows::fs::MetadataExt;
        metadata.file_attributes() & 0x400 != 0
    };
    #[cfg(not(windows))]
    let is_link = metadata.file_type().is_symlink();
    if !metadata.is_dir() || is_link {
        return Err(format!("插件包必须是普通目录: {}", root.display()));
    }
    let mut entries = BTreeMap::new();
    for entry in WalkDir::new(root).follow_links(false) {
        let entry = entry.map_err(|e| format!("读取插件包失败: {}", e))?;
        let relative = entry.path().strip_prefix(root).map_err(|e| e.to_string())?;
        if relative.as_os_str().is_empty() || relative == Path::new(".install-meta.json") {
            continue;
        }
        if !entry.file_type().is_file() && !entry.file_type().is_dir() {
            return Err(format!(
                "插件包包含不支持的链接或文件: {}",
                entry.path().display()
            ));
        }
        entries.insert(relative.to_path_buf(), entry.file_type().is_dir());
    }
    Ok(entries)
}

// Install timestamps do not change a package's contents. Compare every other
// path and stream file bytes so large resource packages do not fill memory.
pub(super) fn plugin_package_contents_match(left: &Path, right: &Path) -> Result<bool, String> {
    let left_entries = plugin_package_entries(left)?;
    if left_entries != plugin_package_entries(right)? {
        return Ok(false);
    }
    for (relative, is_dir) in left_entries {
        if is_dir {
            continue;
        }
        let compare = || -> std::io::Result<bool> {
            let mut left = BufReader::new(fs::File::open(left.join(&relative))?);
            let mut right = BufReader::new(fs::File::open(right.join(&relative))?);
            if left.get_ref().metadata()?.len() != right.get_ref().metadata()?.len() {
                return Ok(false);
            }
            let mut left_bytes = [0_u8; 64 * 1024];
            let mut right_bytes = [0_u8; 64 * 1024];
            loop {
                let size = left.read(&mut left_bytes)?;
                right.read_exact(&mut right_bytes[..size])?;
                if left_bytes[..size] != right_bytes[..size] {
                    return Ok(false);
                }
                if size == 0 {
                    return Ok(right.read(&mut right_bytes)? == 0);
                }
            }
        };
        if !compare().map_err(|e| format!("比较插件文件失败: {} ({})", relative.display(), e))?
        {
            return Ok(false);
        }
    }
    Ok(true)
}

pub(super) fn validate_plugin_package_dir(
    package_dir: &Path,
    expected_id: &str,
) -> Result<(), String> {
    let manifest = read_plugin_package_manifest(&package_dir.join("plugin.json"))?;
    if validate_local_plugin_manifest(&manifest)? != expected_id {
        return Err(format!(
            "插件清单 id 与目录不一致: {}",
            package_dir.display()
        ));
    }
    if let Some(entry) = manifest.get("entry") {
        let mut paths = ["frontend", "backend"]
            .iter()
            .filter_map(|key| entry.get(key).and_then(serde_json::Value::as_str))
            .collect::<Vec<_>>();
        if let Some(styles) = entry.get("styles").and_then(serde_json::Value::as_array) {
            paths.extend(styles.iter().filter_map(serde_json::Value::as_str));
        }
        for relative in paths {
            validate_plugin_relative_path(relative)?;
            if !package_dir.join(relative).is_file() {
                return Err(format!(
                    "插件入口文件不存在: {}",
                    package_dir.join(relative).display()
                ));
            }
        }
    }
    Ok(())
}

pub(super) fn plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    if let Some(configured_root) = configured_plugin_install_root_dir(app_handle)? {
        return Ok(configured_root.join(PLUGIN_PACKAGES_DIR_NAME));
    }

    default_plugin_packages_dir(app_handle)
}

fn default_plugin_packages_dir(app_handle: &AppHandle) -> Result<PathBuf, String> {
    let data_dir = crate::json_config::get_data_dir(app_handle);
    Ok(default_plugin_packages_dir_for_data_dir(&data_dir))
}

fn default_plugin_packages_dir_for_data_dir(data_dir: &Path) -> PathBuf {
    data_dir
        .join(PLUGIN_PACKAGES_ROOT_DIR_NAME)
        .join(PLUGIN_PACKAGES_DIR_NAME)
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

fn move_installed_plugin_packages(old_dir: &Path, new_dir: &Path) -> Result<usize, String> {
    if same_path(old_dir, new_dir) {
        return Ok(0);
    }
    if !old_dir
        .try_exists()
        .map_err(|e| format!("读取原插件目录失败: {} ({})", old_dir.display(), e))?
    {
        return Ok(0);
    }

    fs::create_dir_all(new_dir)
        .map_err(|e| format!("创建插件安装目录失败: {} ({})", new_dir.display(), e))?;

    let old_dir = normalized_existing_path(old_dir);
    let new_dir = normalized_existing_path(new_dir);
    if new_dir.starts_with(&old_dir) || old_dir.starts_with(&new_dir) {
        return Err("插件安装目录不能互相嵌套".into());
    }

    let entries = fs::read_dir(&old_dir)
        .map_err(|e| format!("读取原插件目录失败: {} ({})", old_dir.display(), e))?;

    // Preflight the entire set before creating any destination package. An
    // existing, different package is a conflict, never a successful skip.
    let mut missing = Vec::new();
    for entry in entries {
        let entry = entry.map_err(|e| format!("读取原插件目录条目失败: {}", e))?;
        let source_path = entry.path();
        let file_type = entry.file_type().map_err(|e| {
            format!(
                "读取原插件目录条目类型失败: {} ({})",
                source_path.display(),
                e
            )
        })?;
        if file_type.is_file() {
            continue;
        }
        if file_type.is_symlink() {
            return Err(format!(
                "插件安装目录包含不支持的链接: {}",
                source_path.display()
            ));
        }
        match fs::metadata(source_path.join("plugin.json")) {
            Ok(metadata) if metadata.is_file() => {}
            Ok(_) => continue,
            Err(error) if error.kind() == std::io::ErrorKind::NotFound => continue,
            Err(error) => {
                return Err(format!(
                    "读取原插件清单失败: {} ({})",
                    source_path.display(),
                    error
                ))
            }
        }

        let Some(plugin_dir_name) = source_path.file_name() else {
            continue;
        };
        let plugin_id = plugin_dir_name.to_str().ok_or("插件目录名无效")?;
        validate_plugin_package_dir(&source_path, plugin_id)?;
        let target_path = new_dir.join(plugin_dir_name);
        if target_path
            .try_exists()
            .map_err(|e| format!("读取目标插件目录失败: {} ({})", target_path.display(), e))?
        {
            validate_plugin_package_dir(&target_path, plugin_id).map_err(|error| {
                format!(
                    "插件目录迁移冲突 '{}': 目标包无效，仍保留原安装位置。{}",
                    plugin_id, error
                )
            })?;
            if !plugin_package_contents_match(&source_path, &target_path)? {
                return Err(format!(
                    "插件目录迁移冲突 '{}': 目标包版本或内容不同，仍保留原安装位置。请先处理 {}",
                    plugin_id,
                    target_path.display()
                ));
            }
            continue;
        }
        missing.push((source_path, target_path));
    }

    if missing.is_empty() {
        return Ok(0);
    }
    let staging = PluginPackageStagingDir::new(&new_dir, "move")?;
    for (source, target) in &missing {
        let staged = staging
            .path()
            .join(target.file_name().ok_or("插件目录名无效")?);
        copy_plugin_package_dir(source, &staged)?;
        validate_plugin_package_dir(
            &staged,
            target
                .file_name()
                .and_then(|id| id.to_str())
                .ok_or("插件目录名无效")?,
        )?;
        if !plugin_package_contents_match(source, &staged)? {
            return Err(format!("插件迁移校验失败: {}", source.display()));
        }
    }
    let mut published: Vec<PathBuf> = Vec::new();
    for (_, target) in &missing {
        let staged = staging
            .path()
            .join(target.file_name().ok_or("插件目录名无效")?);
        // Never replace a directory created by another process during staging.
        let result = target.try_exists().and_then(|exists| {
            if exists {
                return Err(std::io::Error::new(
                    std::io::ErrorKind::AlreadyExists,
                    "目标插件目录已存在",
                ));
            }
            fs::rename(&staged, target)
        });
        if let Err(error) = result {
            for path in published {
                if let Err(error) = fs::remove_dir_all(&path) {
                    warn!(
                        "[Plugin] 清理未完成迁移的副本失败: {} ({})",
                        path.display(),
                        error
                    );
                }
            }
            return Err(format!(
                "完成插件迁移失败: {} ({})，仍保留原安装位置",
                target.display(),
                error
            ));
        }
        published.push(target.clone());
    }
    Ok(missing.len())
}

fn save_plugin_install_dir(
    manager: &mut AppConfigManager,
    path: Option<String>,
) -> Result<(), String> {
    let previous = manager.get_config().clone();
    let mut config = previous.clone();
    config.plugin_install_dir = path;
    manager.update_config(config);
    if let Err(error) = manager.save() {
        manager.update_config(previous);
        return match manager.save() {
            Ok(()) => Err(error),
            Err(restore_error) => Err(format!(
                "{}；恢复原安装目录配置失败: {}",
                error, restore_error
            )),
        };
    }
    Ok(())
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
    let _guard = PLUGIN_PACKAGE_MUTATION_LOCK
        .lock()
        .map_err(|e| format!("获取插件目录锁失败: {}", e))?;
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

    let moved_count = move_installed_plugin_packages(&old_plugins_dir, &new_plugins_dir)?;
    if moved_count > 0 {
        info!(
            "[Plugin] 插件安装目录移动完成: {} 个 ({} -> {})",
            moved_count,
            old_plugins_dir.display(),
            new_plugins_dir.display()
        );
    }

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        save_plugin_install_dir(&mut manager, normalized_path)?;
        crate::uninstall::record_plugin_dir(&new_plugins_dir);
        info!("✅ [Plugin] 插件安装目录已更新");
        return Ok(());
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let mut manager = AppConfigManager::new(&workspace_root)?;
    save_plugin_install_dir(&mut manager, normalized_path)?;
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

    struct TestDir(PathBuf);

    impl Drop for TestDir {
        fn drop(&mut self) {
            let _ = fs::remove_dir_all(&self.0);
        }
    }

    fn move_test_dir(name: &str) -> PathBuf {
        std::env::temp_dir().join(format!(
            "snippets-code-plugin-move-{}-{}-{}",
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
        fs::write(
            plugin_dir.join("plugin.json"),
            serde_json::json!({
                "schemaVersion": 1, "kind": "local", "id": plugin_id, "version": "1.0.0"
            })
            .to_string(),
        )
        .unwrap();
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
    fn plugin_directory_move_reuses_identical_packages_and_copies_missing_packages() {
        let root = move_test_dir("copy");
        let _cleanup = TestDir(root.clone());
        let old_dir = root.join("old");
        let new_dir = root.join("new");
        write_test_plugin(&old_dir, "missing", "source");
        write_test_plugin(&old_dir, "existing", "source");
        write_test_plugin(&new_dir, "existing", "source");

        let moved_count = move_installed_plugin_packages(&old_dir, &new_dir).unwrap();

        assert_eq!(moved_count, 1);
        assert_eq!(
            fs::read_to_string(new_dir.join("missing/marker.txt")).unwrap(),
            "source"
        );
        assert_eq!(
            fs::read_to_string(new_dir.join("existing/marker.txt")).unwrap(),
            "source"
        );
        fs::remove_dir_all(root).unwrap();
    }

    #[test]
    fn plugin_directory_move_ignores_unrelated_regular_files() {
        let root = move_test_dir("regular-files");
        let _cleanup = TestDir(root.clone());
        let old_dir = root.join("old");
        let new_dir = root.join("new");
        write_test_plugin(&old_dir, "demo", "usable");
        fs::write(old_dir.join("README.md"), "local notes").unwrap();
        fs::write(old_dir.join("install.log"), "previous install log").unwrap();

        assert_eq!(
            move_installed_plugin_packages(&old_dir, &new_dir).unwrap(),
            1
        );

        assert_eq!(
            fs::read_to_string(new_dir.join("demo/marker.txt")).unwrap(),
            "usable"
        );
        assert_eq!(
            fs::read_to_string(old_dir.join("README.md")).unwrap(),
            "local notes"
        );
        assert_eq!(
            fs::read_to_string(old_dir.join("install.log")).unwrap(),
            "previous install log"
        );
        assert_eq!(fs::read_dir(&new_dir).unwrap().count(), 1);
    }

    #[test]
    fn plugin_directory_round_trip_rejects_stale_target_without_downgrading() {
        let root = move_test_dir("round-trip");
        let _cleanup = TestDir(root.clone());
        let default_dir = root.join("default");
        let custom_dir = root.join("custom");
        write_test_plugin(&default_dir, "demo", "v1");
        move_installed_plugin_packages(&default_dir, &custom_dir).unwrap();
        fs::write(custom_dir.join("demo/marker.txt"), "v2").unwrap();
        let result = move_installed_plugin_packages(&custom_dir, &default_dir);
        assert!(
            result.is_err(),
            "a stale package must not silently replace the active v2"
        );
        assert_eq!(
            fs::read_to_string(custom_dir.join("demo/marker.txt")).unwrap(),
            "v2"
        );
        assert_eq!(
            fs::read_to_string(default_dir.join("demo/marker.txt")).unwrap(),
            "v1"
        );
        fs::remove_dir_all(root).unwrap();
    }

    #[test]
    fn plugin_directory_move_rejects_corrupt_target() {
        let root = move_test_dir("corrupt");
        let _cleanup = TestDir(root.clone());
        let old_dir = root.join("old");
        let new_dir = root.join("new");
        write_test_plugin(&old_dir, "demo", "usable");
        fs::create_dir_all(new_dir.join("demo")).unwrap();
        fs::write(new_dir.join("demo/plugin.json"), "corrupt").unwrap();
        assert!(move_installed_plugin_packages(&old_dir, &new_dir).is_err());
        assert_eq!(
            fs::read_to_string(old_dir.join("demo/marker.txt")).unwrap(),
            "usable"
        );
        assert_eq!(
            fs::read_to_string(new_dir.join("demo/plugin.json")).unwrap(),
            "corrupt"
        );
        fs::remove_dir_all(root).unwrap();
    }

    #[test]
    fn failed_plugin_directory_config_save_preserves_active_location() {
        let root = move_test_dir("config-save");
        let _cleanup = TestDir(root.clone());
        let mut manager = AppConfigManager::new(&root).unwrap();
        save_plugin_install_dir(&mut manager, Some("C:/original".into())).unwrap();
        let config_path = root.join(".snippets-code/app.json");
        let old_config = fs::read(&config_path).unwrap();
        fs::create_dir(root.join(".snippets-code/.app.json.backup")).unwrap();
        assert!(save_plugin_install_dir(&mut manager, Some("C:/new".into())).is_err());
        assert_eq!(
            manager.get_config().plugin_install_dir.as_deref(),
            Some("C:/original")
        );
        assert_eq!(fs::read(config_path).unwrap(), old_config);
        fs::remove_dir_all(root).unwrap();
    }
}
