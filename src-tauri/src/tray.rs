use crate::app_config;
use crate::config::get_language_internal;
use crate::plugins::system_theme::{
    get_windows_dark_mode, load_config, save_config, set_windows_dark_mode, start_scheduler,
    stop_scheduler, ScheduleType, ThemeMode,
};
use crate::plugins::wallpaper_switcher::{
    load_config as load_wallpaper_config, save_config as save_wallpaper_config,
    start_scheduler as start_wallpaper_scheduler, WallhavenSource, WallpaperMode,
};
use crate::update::check_update_and_open_window;
use crate::window::{
    hotkey_config, hotkey_dark_mode, hotkey_search, open_config_settings,
    open_data_manager_settings, open_local_launcher_settings, open_plugin_settings,
    open_wallpaper_switcher_window,
};
use log::{debug, info};
use std::sync::atomic::{AtomicBool, Ordering};
use std::time::{Duration, Instant};
use tauri::Emitter;
use tauri::{
    menu::{CheckMenuItem, IsMenuItem, Menu, MenuItem, PredefinedMenuItem, Submenu},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    AppHandle, Manager,
};
use tauri_plugin_global_shortcut::GlobalShortcutExt;
use tauri_plugin_notification::NotificationExt;
use tauri_plugin_opener::OpenerExt;

static WALLPAPER_TRAY_SWITCHING: AtomicBool = AtomicBool::new(false);

// 托盘菜单翻译结构
struct TrayTranslations {
    search: &'static str,
    config: &'static str,
    translate: &'static str,
    screenshot: &'static str,
    screen_recorder: &'static str,
    wallpaper_switcher: &'static str,
    wallpaper_switch_next: &'static str,
    // 主题子菜单
    theme_menu: &'static str,
    theme_system: &'static str,
    theme_light: &'static str,
    theme_dark: &'static str,
    theme_sun_based: &'static str,
    theme_custom: &'static str,
    theme_settings: &'static str,
    // 壁纸子菜单
    wallpaper_local: &'static str,
    wallpaper_online: &'static str,
    wallpaper_mode_fixed: &'static str,
    wallpaper_mode_folder: &'static str,
    wallpaper_mode_hot: &'static str,
    wallpaper_mode_toplist: &'static str,
    wallpaper_mode_favorites: &'static str,
    wallpaper_settings: &'static str,
    wallpaper_switching_online: &'static str,
    wallpaper_switch_complete: &'static str,
    wallpaper_switch_busy: &'static str,
    wallpaper_switch_failed: &'static str,
    // 其他
    check_update: &'static str,
    view_log: &'static str,
    plugin_installing: &'static str,
    background_indexing: &'static str,
    background_icons: &'static str,
    local_sources: &'static str,
    desktop_files: &'static str,
    quit: &'static str,
}

fn tray_plugin_menu_id(plugin_id: &str, item_id: &str) -> String {
    format!("plugin:{}:{}", plugin_id, item_id)
}

fn parse_tray_plugin_menu_id(menu_id: &str) -> Option<(&str, &str)> {
    let rest = menu_id.strip_prefix("plugin:")?;
    let (plugin_id, item_id) = rest.split_once(':')?;
    Some((plugin_id, item_id))
}

fn known_plugin_action_label<'a>(trans: &'a TrayTranslations, item_id: &str) -> Option<&'a str> {
    match item_id {
        "translate" => Some(trans.translate),
        "screenshot" => Some(trans.screenshot),
        "screen_recorder" => Some(trans.screen_recorder),
        "wallpaper_switcher" => Some(trans.wallpaper_switcher),
        "wallpaper_switch_next" => Some(trans.wallpaper_switch_next),
        _ => None,
    }
}

fn plugin_action_label(
    trans: &TrayTranslations,
    action: &app_config::PluginCapabilityAction,
    single_plugin_action: bool,
) -> String {
    if let Some(label) = known_plugin_action_label(trans, &action.item_id) {
        return label.to_string();
    }

    if single_plugin_action {
        action.plugin_name.clone()
    } else {
        format!("{}: {}", action.plugin_name, action.item_id)
    }
}

fn handle_plugin_tray_menu_click(app: &AppHandle, menu_id: &str) -> bool {
    let Some((plugin_id, item_id)) = parse_tray_plugin_menu_id(menu_id) else {
        return false;
    };

    if !app_config::is_plugin_enabled(app, plugin_id) {
        return true;
    }

    if plugin_id == "wallpaper-switcher" && item_id == "wallpaper_switch_next" {
        debug!("[托盘菜单] 直接切换下一张壁纸");
        let app_handle = app.clone();
        tauri::async_runtime::spawn(async move {
            if let Err(error) =
                crate::plugins::wallpaper_switcher::wallpaper_switch_now(app_handle.clone()).await
            {
                log::warn!("[托盘菜单] 壁纸快捷切换失败: {}", error);
                let _ = app_handle.emit(
                    "wallpaper-switcher-error",
                    serde_json::json!({ "message": error }),
                );
            }
        });
        return true;
    }

    debug!("[托盘菜单] 执行插件动作: {} / {}", plugin_id, item_id);
    let label = item_id.to_string();
    tauri::async_runtime::spawn(async move {
        if let Err(error) = crate::window::show_hide_window_command(&label, None).await {
            log::warn!("[托盘菜单] 插件动作执行失败 {}: {}", label, error);
        }
    });
    true
}

pub fn exit_app_now(app: &AppHandle) -> ! {
    info!("[托盘菜单] 用户选择退出程序");
    crate::plugins::system_theme::stop_scheduler();
    crate::plugins::local_ai::stop_service_now();
    let _ = app.global_shortcut().unregister_all();
    let _ = app.remove_tray_by_id("tray");
    app.cleanup_before_exit();
    std::process::exit(0);
}

// 获取当前语言的翻译
fn get_translations(lang: &str) -> TrayTranslations {
    match lang {
        "en-US" => TrayTranslations {
            search: "Quick Search",
            config: "Settings",
            translate: "Translate",
            screenshot: "Screenshot",
            screen_recorder: "Screen Recorder",
            wallpaper_switcher: "Wallpaper Switcher",
            wallpaper_switch_next: "Switch to Next Wallpaper",
            theme_menu: "Theme Mode",
            theme_system: "Follow System",
            theme_light: "Light Mode",
            theme_dark: "Dark Mode",
            theme_sun_based: "Sunrise/Sunset",
            theme_custom: "Custom Schedule",
            theme_settings: "More Settings...",
            wallpaper_local: "Local Wallpaper",
            wallpaper_online: "Online Wallpaper",
            wallpaper_mode_fixed: "Fixed Image",
            wallpaper_mode_folder: "Folder Rotation",
            wallpaper_mode_hot: "Hot",
            wallpaper_mode_toplist: "Toplist",
            wallpaper_mode_favorites: "Favorites",
            wallpaper_settings: "More Settings...",
            wallpaper_switching_online: "Fetching the next online wallpaper. Please wait...",
            wallpaper_switch_complete: "Desktop wallpaper updated",
            wallpaper_switch_busy: "A wallpaper switch is already in progress",
            wallpaper_switch_failed: "Wallpaper switch failed",
            check_update: "Check for Updates",
            view_log: "View Logs",
            plugin_installing: "Plugin installs",
            background_indexing: "Background indexing",
            background_icons: "Background icons",
            local_sources: "Local sources",
            desktop_files: "Desktop files",
            quit: "Quit",
        },
        _ => TrayTranslations {
            // zh-CN 默认
            search: "快速搜索",
            config: "配置管理",
            translate: "输入翻译",
            screenshot: "快速截图",
            screen_recorder: "区域录制",
            wallpaper_switcher: "壁纸切换",
            wallpaper_switch_next: "切换下一张壁纸",
            theme_menu: "主题模式",
            theme_system: "跟随系统",
            theme_light: "浅色模式",
            theme_dark: "深色模式",
            theme_sun_based: "日出日落",
            theme_custom: "自定义时间",
            theme_settings: "更多设置...",
            wallpaper_local: "本地壁纸",
            wallpaper_online: "在线壁纸",
            wallpaper_mode_fixed: "固定图片",
            wallpaper_mode_folder: "文件夹轮换",
            wallpaper_mode_hot: "热门",
            wallpaper_mode_toplist: "排行榜",
            wallpaper_mode_favorites: "收藏",
            wallpaper_settings: "更多设置...",
            wallpaper_switching_online: "正在获取下一张在线壁纸，请稍候…",
            wallpaper_switch_complete: "桌面壁纸已更新",
            wallpaper_switch_busy: "壁纸正在切换，请稍候",
            wallpaper_switch_failed: "壁纸切换失败",
            check_update: "检查更新",
            view_log: "日志记录",
            plugin_installing: "插件安装",
            background_indexing: "后台索引",
            background_icons: "后台图标",
            local_sources: "本机来源",
            desktop_files: "桌面文件",
            quit: "退出程序",
        },
    }
}

fn plugin_install_phase_label(lang: &str, phase: &str) -> &'static str {
    match (lang, phase) {
        ("en-US", "queued") => "queued",
        ("en-US", "downloading") => "downloading",
        ("en-US", "downloaded") => "downloaded",
        ("en-US", "extracting") => "extracting",
        ("en-US", "installing") => "installing",
        ("en-US", _) => "working",
        (_, "queued") => "排队中",
        (_, "downloading") => "下载中",
        (_, "downloaded") => "已下载",
        (_, "extracting") => "解压中",
        (_, "installing") => "安装中",
        _ => "处理中",
    }
}

// 创建主题子菜单
fn create_theme_submenu(app: &AppHandle, lang: &str) -> tauri::Result<Submenu<tauri::Wry>> {
    let trans = get_translations(lang);
    let config = load_config(app);

    let is_system = matches!(config.theme_mode, ThemeMode::System);
    let is_light = matches!(config.theme_mode, ThemeMode::Light);
    let is_dark = matches!(config.theme_mode, ThemeMode::Dark);
    let is_sun_based = matches!(config.theme_mode, ThemeMode::Schedule)
        && matches!(config.schedule_type, ScheduleType::SunBased);
    let is_custom = matches!(config.theme_mode, ThemeMode::Schedule)
        && matches!(config.schedule_type, ScheduleType::Custom);

    let system_i = CheckMenuItem::with_id(
        app,
        "theme_system",
        trans.theme_system,
        true,
        is_system,
        None::<&str>,
    )?;
    let light_i = CheckMenuItem::with_id(
        app,
        "theme_light",
        trans.theme_light,
        true,
        is_light,
        None::<&str>,
    )?;
    let dark_i = CheckMenuItem::with_id(
        app,
        "theme_dark",
        trans.theme_dark,
        true,
        is_dark,
        None::<&str>,
    )?;
    let separator1 = PredefinedMenuItem::separator(app)?;
    let sun_based_i = CheckMenuItem::with_id(
        app,
        "theme_sun_based",
        trans.theme_sun_based,
        true,
        is_sun_based,
        None::<&str>,
    )?;
    let custom_i = CheckMenuItem::with_id(
        app,
        "theme_custom",
        trans.theme_custom,
        true,
        is_custom,
        None::<&str>,
    )?;
    let separator2 = PredefinedMenuItem::separator(app)?;
    let settings_i = MenuItem::with_id(
        app,
        "theme_settings",
        trans.theme_settings,
        true,
        None::<&str>,
    )?;

    Submenu::with_items(
        app,
        trans.theme_menu,
        true,
        &[
            &system_i,
            &light_i,
            &dark_i,
            &separator1,
            &sun_based_i,
            &custom_i,
            &separator2,
            &settings_i,
        ],
    )
}

// 创建壁纸子菜单
fn create_wallpaper_submenu(app: &AppHandle, lang: &str) -> tauri::Result<Submenu<tauri::Wry>> {
    let trans = get_translations(lang);
    let config = load_wallpaper_config(app);

    // 判断当前选中状态
    let is_fixed = matches!(config.mode, WallpaperMode::Fixed);
    let is_folder = matches!(config.mode, WallpaperMode::Folder);
    let is_wallhaven = matches!(config.mode, WallpaperMode::Wallhaven);
    let is_hot = is_wallhaven && matches!(config.wallhaven_source, WallhavenSource::Hot);
    let is_toplist = is_wallhaven && matches!(config.wallhaven_source, WallhavenSource::Toplist);
    let is_favorites =
        is_wallhaven && matches!(config.wallhaven_source, WallhavenSource::Favorites);

    debug!(
        "[托盘菜单] 壁纸子菜单状态: 固定图片={}, 文件夹轮换={}, 在线热门={}, 在线排行榜={}, 在线收藏={}",
        is_fixed, is_folder, is_hot, is_toplist, is_favorites
    );

    // 切换下一张壁纸
    let switch_next_i = MenuItem::with_id(
        app,
        "wallpaper_switch_next",
        trans.wallpaper_switch_next,
        true,
        None::<&str>,
    )?;
    let separator1 = PredefinedMenuItem::separator(app)?;

    // 本地壁纸子菜单
    let local_fixed_i = CheckMenuItem::with_id(
        app,
        "wallpaper_mode_fixed",
        trans.wallpaper_mode_fixed,
        true,
        is_fixed,
        None::<&str>,
    )?;
    let local_folder_i = CheckMenuItem::with_id(
        app,
        "wallpaper_mode_folder",
        trans.wallpaper_mode_folder,
        true,
        is_folder,
        None::<&str>,
    )?;
    let local_submenu = Submenu::with_items(
        app,
        trans.wallpaper_local,
        true,
        &[&local_fixed_i, &local_folder_i],
    )?;

    // 在线壁纸子菜单
    let online_hot_i = CheckMenuItem::with_id(
        app,
        "wallpaper_mode_hot",
        trans.wallpaper_mode_hot,
        true,
        is_hot,
        None::<&str>,
    )?;
    let online_toplist_i = CheckMenuItem::with_id(
        app,
        "wallpaper_mode_toplist",
        trans.wallpaper_mode_toplist,
        true,
        is_toplist,
        None::<&str>,
    )?;
    let online_favorites_i = CheckMenuItem::with_id(
        app,
        "wallpaper_mode_favorites",
        trans.wallpaper_mode_favorites,
        true,
        is_favorites,
        None::<&str>,
    )?;
    let online_submenu = Submenu::with_items(
        app,
        trans.wallpaper_online,
        true,
        &[&online_hot_i, &online_toplist_i, &online_favorites_i],
    )?;

    let separator2 = PredefinedMenuItem::separator(app)?;

    // 更多设置
    let settings_i = MenuItem::with_id(
        app,
        "wallpaper_settings",
        trans.wallpaper_settings,
        true,
        None::<&str>,
    )?;

    Submenu::with_items(
        app,
        trans.wallpaper_switcher,
        true,
        &[
            &switch_next_i,
            &separator1,
            &local_submenu,
            &online_submenu,
            &separator2,
            &settings_i,
        ],
    )
}

fn build_tray_menu(app: &AppHandle, lang: &str) -> tauri::Result<Menu<tauri::Wry>> {
    let trans = get_translations(lang);
    let system_theme_enabled = app_config::is_plugin_enabled(app, "system-theme");

    let search_i = MenuItem::with_id(app, "search", trans.search, true, None::<&str>)?;
    let config_i = MenuItem::with_id(app, "config", trans.config, true, None::<&str>)?;
    let plugin_install_i = app_config::active_plugin_install_status()
        .map(|(count, phase)| {
            MenuItem::with_id(
                app,
                "plugin_install_status",
                format!(
                    "{}：{} ({})",
                    trans.plugin_installing,
                    count,
                    plugin_install_phase_label(lang, &phase)
                ),
                true,
                None::<&str>,
            )
        })
        .transpose()?;
    let background_index_items = crate::window::get_active_scan_progress_states()
        .into_iter()
        .filter(|state| match state.owner.as_str() {
            "local-launcher" => app_config::is_plugin_enabled(app, "local-launcher"),
            "desktop-files" => app_config::is_plugin_enabled(app, "desktop-files"),
            _ => true,
        })
        .map(|state| {
            let task_label = if state.task == "icons" {
                trans.background_icons
            } else {
                trans.background_indexing
            };
            let source_label = if state.owner == "desktop-files" {
                trans.desktop_files
            } else {
                trans.local_sources
            };
            let progress = if state.total > 0 {
                format!(
                    "{} · {}：{}/{}",
                    source_label, task_label, state.current, state.total
                )
            } else {
                format!("{} · {}", source_label, task_label)
            };
            MenuItem::with_id(
                app,
                format!("background_index_status:{}", state.owner),
                progress,
                true,
                None::<&str>,
            )
        })
        .collect::<tauri::Result<Vec<_>>>()?;
    let wallpaper_enabled = app_config::is_plugin_enabled(app, "wallpaper-switcher");
    let plugin_actions = app_config::installed_plugin_capability_actions(app, "trayItems", true);
    let plugin_items = plugin_actions
        .iter()
        .filter(|action| {
            action.plugin_id != "system-theme"
                && !(wallpaper_enabled && action.plugin_id == "wallpaper-switcher")
        })
        .map(|action| {
            let action_count = plugin_actions
                .iter()
                .filter(|candidate| candidate.plugin_id == action.plugin_id)
                .count();
            MenuItem::with_id(
                app,
                tray_plugin_menu_id(&action.plugin_id, &action.item_id),
                plugin_action_label(&trans, action, action_count == 1),
                true,
                None::<&str>,
            )
        })
        .collect::<tauri::Result<Vec<_>>>()?;
    let theme_submenu = if system_theme_enabled {
        Some(create_theme_submenu(app, lang)?)
    } else {
        None
    };
    let wallpaper_submenu = if wallpaper_enabled {
        Some(create_wallpaper_submenu(app, lang)?)
    } else {
        None
    };
    let separator1 = PredefinedMenuItem::separator(app)?;
    let check_update_i =
        MenuItem::with_id(app, "check_update", trans.check_update, true, None::<&str>)?;
    let view_log_i = MenuItem::with_id(app, "view_log", trans.view_log, true, None::<&str>)?;
    let quit_i = MenuItem::with_id(app, "quit", trans.quit, true, None::<&str>)?;

    let mut items: Vec<&dyn IsMenuItem<tauri::Wry>> = vec![&search_i, &config_i];
    if let Some(item) = &plugin_install_i {
        items.push(item);
    }
    for item in &background_index_items {
        items.push(item);
    }
    for item in &plugin_items {
        items.push(item);
    }
    if let Some(item) = &theme_submenu {
        items.push(item);
    }
    if let Some(item) = &wallpaper_submenu {
        items.push(item);
    }
    items.push(&separator1);
    items.push(&check_update_i);
    items.push(&view_log_i);
    items.push(&quit_i);

    Menu::with_items(app, &items)
}

// 处理主题菜单项点击
pub fn handle_theme_menu_click(app: &AppHandle, menu_id: &str) {
    if !app_config::is_plugin_enabled(app, "system-theme") {
        return;
    }

    let mut config = load_config(app);
    let mut should_restart_scheduler = false;

    match menu_id {
        "theme_system" => {
            config.theme_mode = ThemeMode::System;
            stop_scheduler();
        }
        "theme_light" => {
            config.theme_mode = ThemeMode::Light;
            stop_scheduler();
            let _ = set_windows_dark_mode(false);
        }
        "theme_dark" => {
            config.theme_mode = ThemeMode::Dark;
            stop_scheduler();
            let _ = set_windows_dark_mode(true);
        }
        "theme_sun_based" => {
            config.theme_mode = ThemeMode::Schedule;
            config.schedule_type = ScheduleType::SunBased;
            should_restart_scheduler = true;
        }
        "theme_custom" => {
            config.theme_mode = ThemeMode::Schedule;
            config.schedule_type = ScheduleType::Custom;
            should_restart_scheduler = true;
        }
        "theme_settings" => {
            hotkey_dark_mode();
            return;
        }
        _ => return,
    }

    if should_restart_scheduler {
        if let Err(error) = save_config(app, &config) {
            log::error!("[TrayMenu] 保存定时主题配置失败: {}", error);
        }
        stop_scheduler();
        let _ = start_scheduler(app.clone());
    } else if let Err(error) = save_config(app, &config) {
        log::error!("[TrayMenu] 保存主题配置失败: {}", error);
    }

    update_tray_theme_status(app);
    let current_is_dark = get_windows_dark_mode().unwrap_or(false);
    let _ = app.emit(
        "dark-mode-changed",
        serde_json::json!({
            "isDark": current_is_dark,
            "reason": "tray_menu"
        }),
    );
}

// 处理壁纸菜单项点击
fn notify_wallpaper_tray(app: &AppHandle, title: &str, body: impl Into<String>) {
    if let Err(error) = app
        .notification()
        .builder()
        .title(title)
        .body(body.into())
        .show()
    {
        log::warn!("[托盘菜单] 显示壁纸切换通知失败: {}", error);
    }
}

pub fn handle_wallpaper_menu_click(app: &AppHandle, menu_id: &str) {
    if !app_config::is_plugin_enabled(app, "wallpaper-switcher") {
        return;
    }

    debug!("[托盘菜单] 点击壁纸菜单项: {}", menu_id);

    match menu_id {
        "wallpaper_switch_next" => {
            debug!("[托盘菜单] 直接切换下一张壁纸");
            let lang = get_language_internal(app);
            let trans = get_translations(&lang);
            if WALLPAPER_TRAY_SWITCHING
                .compare_exchange(false, true, Ordering::SeqCst, Ordering::SeqCst)
                .is_err()
            {
                notify_wallpaper_tray(app, trans.wallpaper_switcher, trans.wallpaper_switch_busy);
                return;
            }

            let is_online = matches!(load_wallpaper_config(app).mode, WallpaperMode::Wallhaven);
            if is_online {
                notify_wallpaper_tray(
                    app,
                    trans.wallpaper_switcher,
                    trans.wallpaper_switching_online,
                );
            }

            let app_handle = app.clone();
            let notification_title = trans.wallpaper_switcher;
            let success_message = trans.wallpaper_switch_complete;
            let failed_message = trans.wallpaper_switch_failed;
            tauri::async_runtime::spawn(async move {
                let result =
                    crate::plugins::wallpaper_switcher::wallpaper_switch_now(app_handle.clone())
                        .await;
                WALLPAPER_TRAY_SWITCHING.store(false, Ordering::SeqCst);
                match result {
                    Ok(_) if is_online => {
                        notify_wallpaper_tray(&app_handle, notification_title, success_message)
                    }
                    Ok(_) => {}
                    Err(error) => {
                        log::warn!("[托盘菜单] 壁纸快捷切换失败: {}", error);
                        notify_wallpaper_tray(
                            &app_handle,
                            notification_title,
                            format!("{}：{}", failed_message, error),
                        );
                        let _ = app_handle.emit(
                            "wallpaper-switcher-error",
                            serde_json::json!({ "message": error }),
                        );
                    }
                }
            });
            return;
        }
        "wallpaper_mode_fixed"
        | "wallpaper_mode_folder"
        | "wallpaper_mode_hot"
        | "wallpaper_mode_toplist"
        | "wallpaper_mode_favorites" => {
            let mut config = load_wallpaper_config(app);
            match menu_id {
                "wallpaper_mode_fixed" => {
                    config.mode = WallpaperMode::Fixed;
                    info!("[TrayMenu] 壁纸切换到固定图片模式");
                }
                "wallpaper_mode_folder" => {
                    config.mode = WallpaperMode::Folder;
                    info!("[TrayMenu] 壁纸切换到文件夹轮换模式");
                }
                "wallpaper_mode_hot" => {
                    config.mode = WallpaperMode::Wallhaven;
                    config.wallhaven_source = WallhavenSource::Hot;
                    info!("[TrayMenu] 壁纸切换到在线热门模式");
                }
                "wallpaper_mode_toplist" => {
                    config.mode = WallpaperMode::Wallhaven;
                    config.wallhaven_source = WallhavenSource::Toplist;
                    info!("[TrayMenu] 壁纸切换到在线排行榜模式");
                }
                "wallpaper_mode_favorites" => {
                    config.mode = WallpaperMode::Wallhaven;
                    config.wallhaven_source = WallhavenSource::Favorites;
                    info!("[TrayMenu] 壁纸切换到在线收藏模式");
                }
                _ => return,
            }
            if let Err(e) = save_wallpaper_config(app, &config) {
                log::error!("[TrayMenu] 保存壁纸配置失败: {}", e);
            }
            // 重启调度器以应用新模式
            if config.schedule_enabled && config.auto_restore {
                let _ = start_wallpaper_scheduler(app.clone());
            }
            // 刷新托盘菜单以更新勾选状态
            let _ = recreate_tray_menu(app);
            // 通知前端配置已变更
            let _ = app.emit("wallpaper-switcher-changed", ());
        }
        "wallpaper_settings" => {
            debug!("[托盘菜单] 打开壁纸切换设置");
            open_wallpaper_switcher_window();
        }
        _ => return,
    }
}

pub fn create_tray(app: &tauri::AppHandle) -> tauri::Result<()> {
    let lang = get_language_internal(app);
    let menu = build_tray_menu(app, &lang)?;
    // 先完成菜单构建，再替换最小托盘，避免插件清单扫描期间图标消失。
    let _ = app.remove_tray_by_id("tray");

    let app_name = app.package_info().name.clone();

    let _ = TrayIconBuilder::with_id("tray")
        .icon(app.default_window_icon().unwrap().clone())
        .tooltip(&app_name)
        .menu(&menu)
        .show_menu_on_left_click(false)
        .on_menu_event(move |app, event| {
            let menu_id = event.id.as_ref();

            if menu_id.starts_with("theme_") {
                handle_theme_menu_click(app, menu_id);
                return;
            }

            // 壁纸菜单项处理
            if menu_id.starts_with("wallpaper_") {
                handle_wallpaper_menu_click(app, menu_id);
                return;
            }

            if handle_plugin_tray_menu_click(app, menu_id) {
                return;
            }

            if let Some(owner) = menu_id.strip_prefix("background_index_status:") {
                let open_local_launcher = owner == "local-launcher";
                tauri::async_runtime::spawn(async move {
                    if open_local_launcher {
                        open_local_launcher_settings();
                    } else {
                        open_data_manager_settings();
                    }
                });
                return;
            }

            match menu_id {
                "search" => {
                    debug!("[托盘菜单] 执行：快速搜索");
                    tauri::async_runtime::spawn(async move {
                        hotkey_search(None);
                    });
                }
                "config" => {
                    debug!("[托盘菜单] 执行：打开配置窗口");
                    tauri::async_runtime::spawn(async move {
                        open_config_settings();
                    });
                }
                "plugin_install_status" => {
                    debug!("[托盘菜单] 执行：查看插件安装状态");
                    tauri::async_runtime::spawn(async move {
                        open_plugin_settings();
                    });
                }
                "background_index_status" => {
                    debug!("[托盘菜单] 执行：查看本地索引状态");
                    tauri::async_runtime::spawn(async move {
                        if crate::window::get_scan_progress_state().owner == "local-launcher" {
                            open_local_launcher_settings();
                        } else {
                            open_data_manager_settings();
                        }
                    });
                }
                "check_update" => {
                    debug!("[托盘菜单] 执行：检查更新");
                    let app_handle = app.clone();
                    tauri::async_runtime::spawn(async move {
                        let _ = check_update_and_open_window(app_handle).await;
                    });
                }
                "view_log" => {
                    debug!("[托盘菜单] 执行：打开日志目录");
                    if let Ok(log_path) = app.path().app_log_dir() {
                        if let Some(path_str) = log_path.to_str() {
                            let _ = app.opener().open_path(path_str, Option::<String>::None);
                        }
                    }
                }
                "quit" => {
                    exit_app_now(app);
                }
                _ => {}
            }
        })
        .on_tray_icon_event(move |_tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                tauri::async_runtime::spawn(async move {
                    hotkey_config();
                });
            }
        })
        .build(app)?;

    Ok(())
}

// 更新托盘菜单主题状态显示
pub fn update_tray_theme_status(app_handle: &AppHandle) {
    if !crate::db::is_setup_completed_internal(app_handle) {
        return;
    }
    if let Err(e) = recreate_tray_menu(app_handle) {
        log::error!("更新托盘菜单主题状态失败: {}", e);
    }
}

pub fn update_plugin_install_status(app_handle: &AppHandle) {
    let Some(tray) = app_handle.tray_by_id("tray") else {
        return;
    };
    let lang = get_language_internal(app_handle);
    let app_name = app_handle.package_info().name.clone();
    let trans = get_translations(&lang);
    let mut tooltip_parts = vec![app_name];
    if let Some((count, phase)) = app_config::active_plugin_install_status() {
        tooltip_parts.push(format!(
            "{}：{} ({})",
            trans.plugin_installing,
            count,
            plugin_install_phase_label(&lang, &phase)
        ));
    }
    for scan_state in crate::window::get_active_scan_progress_states() {
        let label = if scan_state.task == "icons" {
            trans.background_icons
        } else {
            trans.background_indexing
        };
        let source_label = if scan_state.owner == "desktop-files" {
            trans.desktop_files
        } else {
            trans.local_sources
        };
        if scan_state.total > 0 {
            tooltip_parts.push(format!(
                "{} · {}：{}/{}",
                source_label, label, scan_state.current, scan_state.total
            ));
        } else {
            tooltip_parts.push(format!("{} · {}", source_label, label));
        }
    }
    let tooltip = tooltip_parts.join(" · ");
    if let Err(error) = tray.set_tooltip(Some(tooltip)) {
        log::warn!("[TrayMenu] 更新插件安装提示失败: {}", error);
    }
    if crate::db::is_setup_completed_internal(app_handle) {
        if let Err(error) = recreate_tray_menu(app_handle) {
            log::warn!("[TrayMenu] 更新插件安装菜单失败: {}", error);
        }
    }
}

// 更新托盘菜单语言
pub fn update_tray_language(app_handle: &AppHandle) {
    let is_first_run = !crate::db::is_setup_completed_internal(app_handle);
    if is_first_run {
        let _ = recreate_minimal_tray_menu(app_handle);
    } else {
        let _ = recreate_tray_menu(app_handle);
    }
}

fn recreate_minimal_tray_menu(app: &AppHandle) -> tauri::Result<()> {
    let lang = get_language_internal(app);
    let trans = get_translations(&lang);
    let quit_i = MenuItem::with_id(app, "quit", trans.quit, true, None::<&str>)?;
    let menu = Menu::with_items(app, &[&quit_i])?;
    if let Some(tray) = app.tray_by_id("tray") {
        tray.set_menu(Some(menu))?;
    }
    Ok(())
}

// 创建最小化托盘（首次运行时使用）
pub fn create_minimal_tray(app: &tauri::AppHandle) -> tauri::Result<()> {
    let _ = app.remove_tray_by_id("tray");
    let lang = get_language_internal(app);
    let trans = get_translations(&lang);
    let quit_i = MenuItem::with_id(app, "quit", trans.quit, true, None::<&str>)?;
    let menu = Menu::with_items(app, &[&quit_i])?;
    let app_name = app.package_info().name.clone();

    TrayIconBuilder::with_id("tray")
        .icon(app.default_window_icon().unwrap().clone())
        .tooltip(&app_name)
        .menu(&menu)
        .show_menu_on_left_click(false)
        .on_menu_event(move |app, event| {
            if event.id.as_ref() == "quit" {
                exit_app_now(app);
            }
        })
        .build(app)?;

    Ok(())
}

/// 在应用 setup 的最前段创建轻量托盘，并在后台补全菜单。
/// 计划任务可能早于 Explorer/通知区域就绪，因此失败后会短间隔重试。
pub fn create_startup_tray(app: &AppHandle, should_create_full_menu: bool) {
    const RETRY_INTERVAL_MILLIS: u64 = 250;
    const MAX_RETRIES: u32 = 120;

    let started_at = Instant::now();
    let mut tray_ready = match create_minimal_tray(app) {
        Ok(()) => {
            info!(
                "[Startup] minimal tray ready in {}ms",
                started_at.elapsed().as_millis()
            );
            true
        }
        Err(error) => {
            log::warn!("[Startup] 通知区域尚未就绪，将重试创建托盘: {error}");
            false
        }
    };

    let app_handle = app.clone();
    tauri::async_runtime::spawn(async move {
        if !tray_ready {
            for attempt in 1..=MAX_RETRIES {
                tokio::time::sleep(Duration::from_millis(RETRY_INTERVAL_MILLIS)).await;
                match create_minimal_tray(&app_handle) {
                    Ok(()) => {
                        tray_ready = true;
                        info!(
                            "[Startup] tray ready after retry {}, elapsed={}ms",
                            attempt,
                            started_at.elapsed().as_millis()
                        );
                        break;
                    }
                    Err(error) if attempt == MAX_RETRIES => {
                        log::error!(
                            "[Startup] 托盘创建在 {} 次重试后仍失败: {}",
                            MAX_RETRIES,
                            error
                        );
                    }
                    Err(_) => {}
                }
            }
        }

        if !tray_ready || !should_create_full_menu {
            return;
        }

        // 先让轻量图标进入通知区域，再加载插件清单并替换为完整菜单。
        tokio::time::sleep(Duration::from_millis(25)).await;
        let menu_started_at = Instant::now();
        match create_tray(&app_handle) {
            Ok(()) => info!(
                "[Startup] full tray menu ready in {}ms",
                menu_started_at.elapsed().as_millis()
            ),
            Err(error) => {
                log::warn!("[Startup] 完整托盘菜单创建失败，恢复最小托盘: {error}");
                if let Err(restore_error) = create_minimal_tray(&app_handle) {
                    log::error!("[Startup] 恢复最小托盘失败: {restore_error}");
                }
            }
        }
    });
}

pub fn recreate_tray_as_full(app: &AppHandle) -> tauri::Result<()> {
    create_tray(app)
}

// 重新创建托盘菜单（公开给其他模块调用）
pub fn recreate_tray_menu(app: &AppHandle) -> tauri::Result<()> {
    let lang = get_language_internal(app);
    let menu = build_tray_menu(app, &lang)?;

    // 更新托盘菜单
    if let Some(tray) = app.tray_by_id("tray") {
        tray.set_menu(Some(menu))?;
    }

    Ok(())
}
