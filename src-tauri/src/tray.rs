use crate::window::{ hotkey_config, hotkey_translate, hotkey_dark_mode, open_config_settings, hotkey_screenshot };
use crate::dark_mode::{stop_scheduler, get_windows_dark_mode};
use crate::config::get_language_internal;
use log::info;
use tauri::{
    menu::{Menu, MenuItem, PredefinedMenuItem},
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
    dark_mode: &'static str,
    light_mode: &'static str,
    theme_switch: &'static str,
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
            dark_mode: "Dark Mode",
            light_mode: "Light Mode",
            theme_switch: "Theme",
            view_log: "View Logs",
            quit: "Quit",
        },
        _ => TrayTranslations { // zh-CN 默认
            search: "快速搜索",
            config: "配置管理",
            translate: "输入翻译",
            screenshot: "快速截图",
            dark_mode: "深色模式",
            light_mode: "浅色模式",
            theme_switch: "主题切换",
            view_log: "日志记录",
            quit: "退出程序",
        },
    }
}

/// 获取主题菜单文本（根据当前语言和主题状态）
fn get_theme_menu_text_i18n(lang: &str) -> String {
    let trans = get_translations(lang);
    match get_windows_dark_mode() {
        Ok(is_dark) => {
            if is_dark {
                trans.dark_mode.to_string()
            } else {
                trans.light_mode.to_string()
            }
        }
        Err(_) => trans.theme_switch.to_string()
    }
}

pub fn create_tray(app: &tauri::AppHandle) -> tauri::Result<()> {
    let lang = get_language_internal(app);
    let trans = get_translations(&lang);
    
    let search_i = MenuItem::with_id(app, "search", trans.search, true, None::<&str>)?;
    let config_i = MenuItem::with_id(app, "config", trans.config, true, None::<&str>)?;
    let translate_i = MenuItem::with_id(app, "translate", trans.translate, true, None::<&str>)?;
    let screenshot_i = MenuItem::with_id(app, "screenshot", trans.screenshot, true, None::<&str>)?;
    
    // 获取当前主题状态并创建动态文本
    let theme_text = get_theme_menu_text_i18n(&lang);
    let dark_mode_window_i = MenuItem::with_id(app, "dark_mode_window", &theme_text, true, None::<&str>)?;
    
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
            &dark_mode_window_i,
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
        .on_menu_event(move |app, event| match event.id.as_ref() {
            "search" => {
                info!("============== Search ==============");
                if let Some(window) = app.get_webview_window("main") {
                    window.center().unwrap();
                    window.show().unwrap();
                    window.set_focus().unwrap();
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
            "dark_mode_window" => {
                info!("============== Auto Dark Mode Window ==============");
                hotkey_dark_mode();
            }
            "view_log" => {
                info!("============== View Log ==============");
                // 获取日志文件夹路径
                let log_path = app.path().app_log_dir().unwrap();
                // 将路径转换为字符串
                let path: String = log_path.to_str().unwrap().into();
                // 打开日志文件夹
                app.opener()
                    .open_path(path, Option::<String>::None)
                    .unwrap();
            }
            "quit" => {
                info!("============== Quit App ==============");
                // 停止Auto Dark Mode服务
                stop_scheduler();
                // 取消注册所有全局快捷键
                app.global_shortcut().unregister_all().unwrap();
                // 退出应用程序
                app.exit(0);
            }
            _ => {}
        })
        .on_tray_icon_event(move |_tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                println!("left click pressed and released");
                // 打开config窗口
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
                app.global_shortcut().unregister_all().unwrap();
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
    
    // 获取当前主题状态并创建动态文本
    let theme_text = get_theme_menu_text_i18n(&lang);
    let dark_mode_window_i = MenuItem::with_id(app, "dark_mode_window", &theme_text, true, None::<&str>)?;
    
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
            &dark_mode_window_i,
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
