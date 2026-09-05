//! Effective plugin state, runtime services, and shell capabilities.
use super::model::default_plugin_enabled;
use super::package_paths::is_local_plugin_package_installed;
use super::packages::{installed_plugin_packages_internal, plugin_package_manifest_id};
use super::persistence::AppConfigManager;
use super::plugin_manifest::{manifest_plugin_name, manifest_string_array};
use log::{info, warn};
use serde::Serialize;
use std::collections::HashMap;
use std::sync::{Arc, RwLock};
use tauri::{command, AppHandle, Emitter, Manager};
use tauri_plugin_notification::NotificationExt;

const HOST_PLUGIN_IDS: &[&str] = &[
    "translation",
    "screenshot",
    "screen-recorder",
    "todo",
    "system-theme",
    "local-launcher",
    "desktop-files",
    "quick-tools",
    "search-engines",
    "local-ai",
    "git-sync",
    "wallpaper-switcher",
];

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PluginCapabilityAction {
    pub plugin_id: String,
    pub item_id: String,
    pub plugin_name: String,
}

fn is_uninstalled_host_plugin(app_handle: &AppHandle, plugin_id: &str) -> bool {
    HOST_PLUGIN_IDS.contains(&plugin_id)
        && !is_local_plugin_package_installed(app_handle, plugin_id)
}

pub fn is_plugin_enabled(app_handle: &AppHandle, plugin_id: &str) -> bool {
    if is_uninstalled_host_plugin(app_handle, plugin_id) {
        return false;
    }

    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        if let Ok(manager) = config_state.read() {
            return manager.is_plugin_enabled(plugin_id);
        }
    }

    if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(app_handle) {
        if let Ok(manager) = AppConfigManager::new(&workspace_root) {
            return manager.is_plugin_enabled(plugin_id);
        }
    }

    default_plugin_enabled()
}

fn apply_effective_plugin_state_gates(app_handle: &AppHandle, states: &mut HashMap<String, bool>) {
    for plugin_id in HOST_PLUGIN_IDS {
        if is_uninstalled_host_plugin(app_handle, plugin_id) {
            states.insert((*plugin_id).to_string(), false);
        }
    }
}

pub fn require_plugin_enabled(app_handle: &AppHandle, plugin_id: &str) -> Result<(), String> {
    if is_plugin_enabled(app_handle, plugin_id) {
        Ok(())
    } else {
        Err(format!("插件 '{}' 未启用", plugin_id))
    }
}

struct PluginRuntimeSpec {
    id: &'static str,
    apply_runtime_change: fn(&AppHandle, bool),
}

const PLUGIN_RUNTIME_SPECS: &[PluginRuntimeSpec] = &[
    PluginRuntimeSpec {
        id: "system-theme",
        apply_runtime_change: apply_system_theme_runtime_change,
    },
    PluginRuntimeSpec {
        id: "todo",
        apply_runtime_change: apply_todo_runtime_change,
    },
    PluginRuntimeSpec {
        id: "desktop-files",
        apply_runtime_change: apply_desktop_files_runtime_change,
    },
    PluginRuntimeSpec {
        id: "local-launcher",
        apply_runtime_change: apply_local_launcher_runtime_change,
    },
    PluginRuntimeSpec {
        id: "local-ai",
        apply_runtime_change: apply_local_ai_runtime_change,
    },
    PluginRuntimeSpec {
        id: "git-sync",
        apply_runtime_change: apply_git_sync_runtime_change,
    },
    PluginRuntimeSpec {
        id: "wallpaper-switcher",
        apply_runtime_change: apply_wallpaper_switcher_runtime_change,
    },
];

fn plugin_runtime_spec(plugin_id: &str) -> Option<&'static PluginRuntimeSpec> {
    PLUGIN_RUNTIME_SPECS
        .iter()
        .find(|spec| spec.id == plugin_id)
}

fn apply_system_theme_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        let config = crate::plugins::system_theme::load_config(app_handle);
        if matches!(
            config.theme_mode,
            crate::plugins::system_theme::ThemeMode::Schedule
        ) {
            let _ = crate::plugins::system_theme::start_scheduler(app_handle.clone());
        }
    } else {
        crate::plugins::system_theme::stop_scheduler();
    }
}

fn apply_todo_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        if let Err(e) = crate::db::ensure_plugin_storage("todo") {
            warn!("[Plugin] 初始化待办插件存储失败: {}", e);
            return;
        }
        crate::plugins::todo::start_alarm_service(app_handle.clone());
    } else {
        crate::plugins::todo::stop_alarm_service();
    }
}

fn notify_desktop_index_complete(app_handle: &AppHandle, count: usize) {
    if let Err(error) = app_handle
        .notification()
        .builder()
        .title("数据索引完成")
        .body(format!("已索引 {} 个桌面文件", count))
        .show()
    {
        warn!("[DesktopFiles] 显示索引完成通知失败: {}", error);
    }
}

fn apply_desktop_files_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if let Some(watcher_state) = app_handle
        .try_state::<Arc<std::sync::Mutex<Option<crate::desktop_watcher::DesktopFileWatcher>>>>()
    {
        if let Ok(mut watcher_lock) = watcher_state.lock() {
            if !enabled {
                *watcher_lock = None;
            } else if watcher_lock.is_none() {
                if let Some(desktop_path) = dirs::desktop_dir() {
                    match crate::desktop_watcher::DesktopFileWatcher::start(desktop_path) {
                        Ok(watcher) => {
                            *watcher_lock = Some(watcher);
                        }
                        Err(e) => {
                            warn!("[Plugin] 启动桌面文件监听失败: {}", e);
                        }
                    }
                }
            }
        }
    }
    if enabled {
        if let Err(e) = crate::db::ensure_plugin_storage("desktop-files") {
            warn!("[Plugin] 初始化桌面文件插件存储失败: {}", e);
            return;
        }
        let progress_reset_kind = crate::db::peek_show_progress_kind(app_handle);
        if matches!(progress_reset_kind.as_deref(), Some("desktopFiles")) {
            if let Err(error) = crate::db::consume_show_progress_kind(app_handle) {
                warn!("[Plugin] 消费桌面文件重置任务失败: {}", error);
                return;
            }
            let count = crate::plugins::desktop_files::refresh_desktop_files_cache_with_progress(
                "desktop-files",
            );
            crate::window::emit_scan_complete_for("desktop-files", 0, 0, count);
            notify_desktop_index_complete(app_handle, count);
        } else if matches!(progress_reset_kind.as_deref(), Some("all")) {
            // “全部本机来源”由本地启动器统一消费并纳入同一条进度链，
            // 此处避免桌面文件插件同时扫描和覆盖缓存。
            info!("[DesktopFiles] 全部来源重建由本地启动器统一处理");
        } else if crate::window::get_active_scan_progress_states()
            .iter()
            .any(|state| state.owner == "local-launcher" && state.task == "index")
        {
            // 本地启动器可能已先一步消费 all 标记；根据活动任务再次门禁，
            // 消除线程调度顺序导致的并发桌面扫描。
            info!("[DesktopFiles] 本机来源索引进行中，跳过重复初始化");
        } else {
            crate::plugins::desktop_files::initialize_desktop_files_cache_with_count();
        }
    } else {
        crate::plugins::desktop_files::cancel_desktop_file_icon_rebuild();
        crate::plugins::desktop_files::invalidate_desktop_files_cache();
    }
}

fn apply_local_launcher_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        if let Err(e) = crate::db::ensure_plugin_storage("local-launcher") {
            warn!("[Plugin] 初始化本地启动器插件存储失败: {}", e);
            return;
        }
        crate::icon::init_app_and_bookmark_icons(app_handle);
    } else {
        crate::icon::cancel_app_and_bookmark_icons();
        crate::plugins::local_launcher::invalidate_apps_cache();
        crate::plugins::local_launcher::invalidate_bookmarks_cache();
    }
}

pub(super) fn refresh_search_plugin_index_feedback(
    app_handle: AppHandle,
    plugin_id: String,
    enabled: bool,
) {
    if !enabled {
        return;
    }

    std::thread::spawn(move || match plugin_id.as_str() {
        "local-launcher" => crate::icon::rebuild_app_and_bookmark_index(app_handle),
        "desktop-files" => {
            let count = crate::plugins::desktop_files::refresh_desktop_files_cache_with_progress(
                "desktop-files",
            );
            crate::window::emit_scan_complete_for("desktop-files", 0, 0, count);
            notify_desktop_index_complete(&app_handle, count);
        }
        _ => {
            let _ = app_handle;
        }
    });
}

fn apply_git_sync_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if enabled {
        let _ = crate::git_sync::start_auto_sync_command(app_handle.clone());
    } else {
        let _ = crate::git_sync::stop_auto_sync_command(app_handle.clone());
    }
}

fn apply_wallpaper_switcher_runtime_change(app_handle: &AppHandle, enabled: bool) {
    crate::plugins::wallpaper_switcher::apply_runtime_change(app_handle, enabled);
}

fn apply_local_ai_runtime_change(app_handle: &AppHandle, enabled: bool) {
    crate::plugins::local_ai::apply_runtime_change(app_handle, enabled);
}

pub(super) fn apply_plugin_runtime_effects(app_handle: &AppHandle, plugin_id: &str, enabled: bool) {
    if let Some(spec) = plugin_runtime_spec(plugin_id) {
        (spec.apply_runtime_change)(app_handle, enabled);
    }

    if let Err(e) = crate::hotkey::refresh_plugin_shortcuts(app_handle, plugin_id, enabled) {
        warn!(
            "[Plugin] refresh hotkeys for {} enabled={} failed: {}",
            plugin_id, enabled, e
        );
    }
}

fn apply_plugin_runtime_change(app_handle: &AppHandle, plugin_id: &str, enabled: bool) {
    apply_plugin_runtime_effects(app_handle, plugin_id, enabled);
    refresh_plugin_shell_integration(app_handle, plugin_id, enabled);
}

pub fn apply_enabled_plugin_runtime_change(app_handle: &AppHandle, plugin_id: &str) {
    if is_plugin_enabled(app_handle, plugin_id) {
        if let Some(spec) = plugin_runtime_spec(plugin_id) {
            (spec.apply_runtime_change)(app_handle, true);
        }
    }
}

pub fn ensure_enabled_plugin_storage(app_handle: &AppHandle) {
    for plugin_id in ["local-launcher", "desktop-files", "search-engines", "todo"] {
        if is_plugin_enabled(app_handle, plugin_id) {
            if let Err(e) = crate::db::ensure_plugin_storage(plugin_id) {
                warn!("[Plugin] ensure storage for {} failed: {}", plugin_id, e);
            }
        }
    }
}

pub(super) fn refresh_plugin_shell_integration(
    app_handle: &AppHandle,
    plugin_id: &str,
    enabled: bool,
) {
    if crate::db::is_setup_completed_internal(app_handle) {
        if let Err(e) = crate::tray::recreate_tray_menu(app_handle) {
            warn!("[Plugin] 刷新托盘菜单失败: {}", e);
        }
    }

    let _ = app_handle.emit(
        "plugin-state-changed",
        serde_json::json!({
            "pluginId": plugin_id,
            "enabled": enabled,
            "installed": is_local_plugin_package_installed(app_handle, plugin_id)
        }),
    );
}

#[command]
pub fn get_plugin_states(app_handle: AppHandle) -> Result<HashMap<String, bool>, String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        let manager = config_state
            .read()
            .map_err(|e| format!("获取配置锁失败: {}", e))?;
        let mut states = manager.get_plugin_states();
        apply_effective_plugin_state_gates(&app_handle, &mut states);
        return Ok(states);
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let manager = AppConfigManager::new(&workspace_root)?;
    let mut states = manager.get_plugin_states();
    apply_effective_plugin_state_gates(&app_handle, &mut states);
    Ok(states)
}

#[command]
pub fn set_plugin_enabled(
    app_handle: AppHandle,
    plugin_id: String,
    enabled: bool,
) -> Result<(), String> {
    if let Some(config_state) = app_handle.try_state::<Arc<RwLock<AppConfigManager>>>() {
        {
            let mut manager = config_state
                .write()
                .map_err(|e| format!("获取配置锁失败: {}", e))?;
            manager.set_plugin_enabled(plugin_id.clone(), enabled);
            manager.save()?;
        }
        let effective_enabled = is_plugin_enabled(&app_handle, &plugin_id);
        info!(
            "✅ [Plugin] {} enabled={} effective={}",
            plugin_id, enabled, effective_enabled
        );
        if effective_enabled {
            if let Err(e) = crate::db::ensure_plugin_storage(&plugin_id) {
                warn!("[Plugin] ensure storage for {} failed: {}", plugin_id, e);
            }
        }
        apply_plugin_runtime_change(&app_handle, &plugin_id, effective_enabled);
        return Ok(());
    }

    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let mut manager = AppConfigManager::new(&workspace_root)?;
    manager.set_plugin_enabled(plugin_id.clone(), enabled);
    manager.save()?;
    let effective_enabled = is_plugin_enabled(&app_handle, &plugin_id);
    info!(
        "✅ [Plugin] {} enabled={} effective={}",
        plugin_id, enabled, effective_enabled
    );
    if effective_enabled {
        if let Err(e) = crate::db::ensure_plugin_storage(&plugin_id) {
            warn!("[Plugin] ensure storage for {} failed: {}", plugin_id, e);
        }
    }
    apply_plugin_runtime_change(&app_handle, &plugin_id, effective_enabled);
    Ok(())
}

pub fn installed_plugin_capability_actions(
    app_handle: &AppHandle,
    capability_key: &str,
    enabled_only: bool,
) -> Vec<PluginCapabilityAction> {
    installed_plugin_packages_internal(app_handle)
        .unwrap_or_default()
        .into_iter()
        .filter_map(|plugin_package| {
            let plugin_id = plugin_package_manifest_id(&plugin_package).to_string();
            if plugin_id.is_empty() || (enabled_only && !is_plugin_enabled(app_handle, &plugin_id))
            {
                return None;
            }

            let plugin_name = manifest_plugin_name(&plugin_package.manifest);
            let actions = manifest_string_array(&plugin_package.manifest, capability_key)
                .into_iter()
                .map(|item_id| PluginCapabilityAction {
                    plugin_id: plugin_id.clone(),
                    item_id,
                    plugin_name: plugin_name.clone(),
                })
                .collect::<Vec<_>>();
            Some(actions)
        })
        .flatten()
        .collect()
}

pub fn enabled_plugin_for_capability_item(
    app_handle: &AppHandle,
    capability_key: &str,
    item_id: &str,
) -> Option<String> {
    installed_plugin_capability_actions(app_handle, capability_key, true)
        .into_iter()
        .find(|action| action.item_id == item_id)
        .map(|action| action.plugin_id)
}

pub fn plugin_window_route_path(
    app_handle: &AppHandle,
    window_label: &str,
) -> Result<(String, String), String> {
    let packages = installed_plugin_packages_internal(app_handle)?;
    for plugin_package in packages {
        let plugin_id = plugin_package_manifest_id(&plugin_package).to_string();
        if plugin_id.is_empty() || !is_plugin_enabled(app_handle, &plugin_id) {
            continue;
        }

        let windows = manifest_string_array(&plugin_package.manifest, "windows");
        let Some(index) = windows.iter().position(|label| label == window_label) else {
            continue;
        };

        let route_names = manifest_string_array(&plugin_package.manifest, "routeNames");
        let route_name = route_names.get(index).cloned();
        let route_path = route_name
            .map(|value| format!("/{}", pascal_or_snake_to_kebab(&value)))
            .unwrap_or_else(|| format!("/{}", window_label.replace('_', "-")));
        return Ok((plugin_id, route_path));
    }

    Err(format!("插件窗口 '{}' 未安装或未启用", window_label))
}

fn pascal_or_snake_to_kebab(value: &str) -> String {
    let mut output = String::new();
    let mut previous_is_separator = true;
    for (index, ch) in value.chars().enumerate() {
        if matches!(ch, '_' | '-' | ' ' | '.') {
            if !previous_is_separator {
                output.push('-');
            }
            previous_is_separator = true;
            continue;
        }

        if ch.is_ascii_uppercase() {
            if index > 0 && !previous_is_separator {
                output.push('-');
            }
            output.push(ch.to_ascii_lowercase());
        } else {
            output.push(ch);
        }
        previous_is_separator = false;
    }

    output.trim_matches('-').to_string()
}
