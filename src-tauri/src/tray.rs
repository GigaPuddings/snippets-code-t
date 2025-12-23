use crate::window::{ hotkey_config, hotkey_translate, hotkey_dark_mode, open_config_settings, hotkey_screenshot };
use crate::dark_mode::{stop_scheduler, load_config, save_config, set_windows_dark_mode, ThemeMode, ScheduleType, start_scheduler};
use crate::config::get_language_internal;
use log::info;
use tauri::{
    menu::{Menu, MenuItem, CheckMenuItem, Submenu, PredefinedMenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Manager, AppHandle
};
use tauri_plugin_global_shortcut::GlobalShortcutExt;
use tauri_plugin_opener::OpenerExt;

/// 托盘菜单翻译结构
struct TrayTranslations {
    search: &'static str,
    config: &'static str,
    translate: &'static str,
    screenshot: &'static str,
    // 主题子菜单
    theme_menu: &'static str,
    theme_system: &'static str,
    theme_light: &'static str,
    theme_dark: &'static str,
    theme_sun_based: &'static str,
    theme_custom: &'static str,
    theme_settings: &'static str,
    // 其他
    view_log: &'static str,
    quit: &'static str,
}

/// 获取当前语言的翻译
fn get_translations(lang: &str) -> TrayTranslations {
    match lang {
        "en-US" => TrayTranslations {
            search: "Quick Search",
            config: "Settings",
            translate: "Translate",
            screenshot: "Screenshot",
            theme_menu: "Theme Mode",
            theme_system: "Follow System",
            theme_light: "Light Mode",
            theme_dark: "Dark Mode",
            theme_sun_based: "Sunrise/Sunset",
            theme_custom: "Custom Schedule",
            theme_settings: "More Settings...",
            view_log: "View Logs",
            quit: "Quit",
        },
        _ => TrayTranslations { // zh-CN 默认
            search: "快速搜索",
            config: "配置管理",
            translate: "输入翻译",
            screenshot: "快速截图",
            theme_menu: "主题模式",
            theme_system: "跟随系统",
            theme_light: "浅色模式",
            theme_dark: "深色模式",
            theme_sun_based: "日出日落",
            theme_custom: "自定义时间",
            theme_settings: "更多设置...",
            view_log: "日志记录",
            quit: "退出程序",
        },
    }
}

/// 创建主题子菜单
fn create_theme_submenu(app: &AppHandle, lang: &str) -> tauri::Result<Submenu<tauri::Wry>> {
    let trans = get_translations(lang);
    let config = load_config(app);
    
    // 判断当前选中状态
    let is_system = matches!(config.theme_mode, ThemeMode::System);
    let is_light = matches!(config.theme_mode, ThemeMode::Light);
    let is_dark = matches!(config.theme_mode, ThemeMode::Dark);
    let is_sun_based = matches!(config.theme_mode, ThemeMode::Schedule) 
        && matches!(config.schedule_type, ScheduleType::SunBased);
    let is_custom = matches!(config.theme_mode, ThemeMode::Schedule) 
        && matches!(config.schedule_type, ScheduleType::Custom);
    
    // 创建带勾选状态的菜单项
    let system_i = CheckMenuItem::with_id(app, "theme_system", trans.theme_system, true, is_system, None::<&str>)?;
    let light_i = CheckMenuItem::with_id(app, "theme_light", trans.theme_light, true, is_light, None::<&str>)?;
    let dark_i = CheckMenuItem::with_id(app, "theme_dark", trans.theme_dark, true, is_dark, None::<&str>)?;
    let separator1 = PredefinedMenuItem::separator(app)?;
    let sun_based_i = CheckMenuItem::with_id(app, "theme_sun_based", trans.theme_sun_based, true, is_sun_based, None::<&str>)?;
    let custom_i = CheckMenuItem::with_id(app, "theme_custom", trans.theme_custom, true, is_custom, None::<&str>)?;
    let separator2 = PredefinedMenuItem::separator(app)?;
    let settings_i = MenuItem::with_id(app, "theme_settings", trans.theme_settings, true, None::<&str>)?;
    
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

/// 处理主题菜单项点击
pub fn handle_theme_menu_click(app: &AppHandle, menu_id: &str) {
    let mut config = load_config(app);
    
    match menu_id {
        "theme_system" => {
            config.theme_mode = ThemeMode::System;
            stop_scheduler();
            info!("切换到跟随系统模式");
        }
        "theme_light" => {
            config.theme_mode = ThemeMode::Light;
            stop_scheduler();
            let _ = set_windows_dark_mode(false);
            info!("切换到浅色模式");
        }
        "theme_dark" => {
            config.theme_mode = ThemeMode::Dark;
            stop_scheduler();
            let _ = set_windows_dark_mode(true);
            info!("切换到深色模式");
        }
        "theme_sun_based" => {
            config.theme_mode = ThemeMode::Schedule;
            config.schedule_type = ScheduleType::SunBased;
            // 启动调度器
            let app_clone = app.clone();
            std::thread::spawn(move || {
                let _ = start_scheduler(app_clone);
            });
            info!("切换到日出日落模式");
        }
        "theme_custom" => {
            config.theme_mode = ThemeMode::Schedule;
            config.schedule_type = ScheduleType::Custom;
            // 启动调度器
            let app_clone = app.clone();
            std::thread::spawn(move || {
                let _ = start_scheduler(app_clone);
            });
            info!("切换到自定义时间模式");
        }
        "theme_settings" => {
            hotkey_dark_mode();
            return; // 不需要保存配置
        }
        _ => return,
    }
    
    // 保存配置并更新托盘菜单
    let _ = save_config(app, &config);
    update_tray_theme_status(app);
}

pub fn create_tray(app: &tauri::AppHandle) -> tauri::Result<()> {
    let lang = get_language_internal(app);
    let trans = get_translations(&lang);
    
    let search_i = MenuItem::with_id(app, "search", trans.search, true, None::<&str>)?;
    let config_i = MenuItem::with_id(app, "config", trans.config, true, None::<&str>)?;
    let translate_i = MenuItem::with_id(app, "translate", trans.translate, true, None::<&str>)?;
    let screenshot_i = MenuItem::with_id(app, "screenshot", trans.screenshot, true, None::<&str>)?;
    
    // 创建主题子菜单
    let theme_submenu = create_theme_submenu(app, &lang)?;
    
    let separator1 = PredefinedMenuItem::separator(app)?;
    let view_log_i = MenuItem::with_id(app, "view_log", trans.view_log, true, None::<&str>)?;
    let quit_i = MenuItem::with_id(app, "quit", trans.quit, true, None::<&str>)?;
    let menu = Menu::with_items(
        app,
        &[
            &search_i,
            &config_i,
            &translate_i,
            &screenshot_i,
            &theme_submenu,
            &separator1,
            &view_log_i,
            &quit_i,
        ],
    )?;

    let app_name = app.package_info().name.clone();

    let _ = TrayIconBuilder::with_id("tray")
        .icon(app.default_window_icon().unwrap().clone())
        .tooltip(&app_name)
        .menu(&menu)
        .show_menu_on_left_click(false)
        .on_menu_event(move |app, event| {
            let menu_id = event.id.as_ref();
            
            // 主题菜单项处理
            if menu_id.starts_with("theme_") {
                handle_theme_menu_click(app, menu_id);
                return;
            }
            
            match menu_id {
                "search" => {
                    info!("============== Search ==============");
                    if let Some(window) = app.get_webview_window("main") {
                        let _ = window.center();
                        let _ = window.show();
                        let _ = window.set_focus();
                    }
                }
                "config" => {
                    info!("============== Config ==============");
                    open_config_settings();
                }
                "translate" => {
                    info!("============== Translate ==============");
                    hotkey_translate();
                }
                "screenshot" => {
                    info!("============== Screenshot ==============");
                    hotkey_screenshot();
                }
                "view_log" => {
                    info!("============== View Log ==============");
                    if let Ok(log_path) = app.path().app_log_dir() {
                        if let Some(path_str) = log_path.to_str() {
                            let _ = app.opener().open_path(path_str, Option::<String>::None);
                        }
                    }
                }
                "quit" => {
                    info!("============== Quit App ==============");
                    stop_scheduler();
                    let _ = app.global_shortcut().unregister_all();
                    app.exit(0);
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
                hotkey_config();
            }
        })
        .build(app)?;

    Ok(())
}

/// 更新托盘菜单主题状态显示
pub fn update_tray_theme_status(app_handle: &AppHandle) {
    if !crate::db::is_setup_completed_internal(app_handle) {
        return;
    }
    if let Err(e) = recreate_tray_menu(app_handle) {
        log::error!("更新托盘菜单主题状态失败: {}", e);
    }
}

/// 更新托盘菜单语言
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

/// 创建最小化托盘（首次运行时使用）
pub fn create_minimal_tray(app: &tauri::AppHandle) -> tauri::Result<()> {
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
                stop_scheduler();
                let _ = app.global_shortcut().unregister_all();
                app.exit(0);
            }
        })
        .build(app)?;

    Ok(())
}

/// 重新创建托盘菜单
fn recreate_tray_menu(app: &AppHandle) -> tauri::Result<()> {
    let lang = get_language_internal(app);
    let trans = get_translations(&lang);
    
    let search_i = MenuItem::with_id(app, "search", trans.search, true, None::<&str>)?;
    let config_i = MenuItem::with_id(app, "config", trans.config, true, None::<&str>)?;
    let translate_i = MenuItem::with_id(app, "translate", trans.translate, true, None::<&str>)?;
    let screenshot_i = MenuItem::with_id(app, "screenshot", trans.screenshot, true, None::<&str>)?;
    
    // 创建主题子菜单
    let theme_submenu = create_theme_submenu(app, &lang)?;
    
    let separator1 = PredefinedMenuItem::separator(app)?;
    let view_log_i = MenuItem::with_id(app, "view_log", trans.view_log, true, None::<&str>)?;
    let quit_i = MenuItem::with_id(app, "quit", trans.quit, true, None::<&str>)?;
    
    let menu = Menu::with_items(
        app,
        &[
            &search_i,
            &config_i,
            &translate_i,
            &screenshot_i,
            &theme_submenu,
            &separator1,
            &view_log_i,
            &quit_i,
        ],
    )?;
    
    // 更新托盘菜单
    if let Some(tray) = app.tray_by_id("tray") {
        tray.set_menu(Some(menu))?;
    }
    
    Ok(())
}
