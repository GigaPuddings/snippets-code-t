use crate::window::{ hotkey_config, hotkey_translate, hotkey_dark_mode, open_config_settings, hotkey_screenshot };
use crate::dark_mode::{stop_scheduler, get_windows_dark_mode};
use log::info;
use tauri::{
    menu::{Menu, MenuItem, PredefinedMenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Manager, AppHandle
};
use tauri_plugin_global_shortcut::GlobalShortcutExt;
use tauri_plugin_opener::OpenerExt;

pub fn create_tray(app: &tauri::AppHandle) -> tauri::Result<()> {
    let search_i = MenuItem::with_id(app, "search", "快速搜索", true, None::<&str>)?;
    let config_i = MenuItem::with_id(app, "config", "配置管理", true, None::<&str>)?;
    let translate_i = MenuItem::with_id(app, "translate", "输入翻译", true, None::<&str>)?;
    let screenshot_i = MenuItem::with_id(app, "screenshot", "快速截图", true, None::<&str>)?;
    
    // 获取当前主题状态并创建动态文本
    let theme_text = get_theme_menu_text();
    let dark_mode_window_i = MenuItem::with_id(app, "dark_mode_window", &theme_text, true, None::<&str>)?;
    
    let separator1 = PredefinedMenuItem::separator(app)?;
    let view_log_i = MenuItem::with_id(app, "view_log", "日志记录", true, None::<&str>)?;
    let quit_i = MenuItem::with_id(app, "quit", "退出程序", true, None::<&str>)?;
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

/// 获取主题菜单文本
fn get_theme_menu_text() -> String {
    match get_windows_dark_mode() {
        Ok(is_dark) => {
            if is_dark {
                "深色模式".to_string()
            } else {
                "浅色模式".to_string()
            }
        }
        Err(_) => "主题切换".to_string()
    }
}

/// 更新托盘菜单主题状态显示
pub fn update_tray_theme_status(app_handle: &AppHandle) {
    // 在 Tauri 2.x 中，重新创建托盘菜单来更新状态
    if let Err(e) = recreate_tray_menu(app_handle) {
        log::error!("更新托盘菜单主题状态失败: {}", e);
    } else {
        log::info!("托盘菜单主题状态已更新");
    }
}

/// 重新创建托盘菜单
fn recreate_tray_menu(app: &AppHandle) -> tauri::Result<()> {
    let search_i = MenuItem::with_id(app, "search", "快速搜索", true, None::<&str>)?;
    let config_i = MenuItem::with_id(app, "config", "配置管理", true, None::<&str>)?;
    let translate_i = MenuItem::with_id(app, "translate", "输入翻译", true, None::<&str>)?;
    let screenshot_i = MenuItem::with_id(app, "screenshot", "快速截图", true, None::<&str>)?;
    
    // 获取当前主题状态并创建动态文本
    let theme_text = get_theme_menu_text();
    let dark_mode_window_i = MenuItem::with_id(app, "dark_mode_window", &theme_text, true, None::<&str>)?;
    
    let separator1 = PredefinedMenuItem::separator(app)?;
    let view_log_i = MenuItem::with_id(app, "view_log", "日志记录", true, None::<&str>)?;
    let quit_i = MenuItem::with_id(app, "quit", "退出程序", true, None::<&str>)?;
    
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
