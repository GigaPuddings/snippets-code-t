use crate::window::hotkey_config;
use log::info;
use tauri::{
    menu::{Menu, MenuItem, PredefinedMenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Manager, Runtime,
};
use tauri_plugin_global_shortcut::GlobalShortcutExt;
use tauri_plugin_opener::OpenerExt;

pub fn create_tray<R: Runtime>(app: &tauri::AppHandle<R>) -> tauri::Result<()> {
    let search_i = MenuItem::with_id(app, "search", "快速搜索", true, None::<&str>)?;
    let config_i = MenuItem::with_id(app, "config", "配置管理", true, None::<&str>)?;
    let translate_i = MenuItem::with_id(app, "translate", "输入翻译", true, None::<&str>)?;
    let separator = PredefinedMenuItem::separator(app)?;
    let view_log_i = MenuItem::with_id(app, "view_log", "日志记录", true, None::<&str>)?;
    let quit_i = MenuItem::with_id(app, "quit", "退出程序", true, None::<&str>)?;
    let menu = Menu::with_items(app, &[&search_i, &config_i, &translate_i, &separator, &view_log_i, &quit_i])?;

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
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
            "config" => {
                info!("============== Config ==============");
                hotkey_config();
            }
            "translate" => {
                info!("============== Search ==============");
                if let Some(window) = app.get_webview_window("translate") {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
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
                app.global_shortcut().unregister_all().unwrap();
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
