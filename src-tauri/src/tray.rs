use crate::window::build_window;
use log::info;
use tauri::{
    menu::{Menu, MenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    utils::config::WindowConfig,
    Manager, Runtime,
};
use tauri_plugin_global_shortcut::GlobalShortcutExt;
use tauri_plugin_opener::OpenerExt;

pub fn create_tray<R: Runtime>(app: &tauri::AppHandle<R>) -> tauri::Result<()> {
    let search_i = MenuItem::with_id(app, "search", "搜索", true, None::<&str>)?;
    let config_i = MenuItem::with_id(app, "config", "配置", true, None::<&str>)?;
    let view_log_i = MenuItem::with_id(app, "view_log", "日志", true, None::<&str>)?;
    let quit_i = MenuItem::with_id(app, "quit", "退出", true, None::<&str>)?;
    let menu = Menu::with_items(app, &[&search_i, &config_i, &view_log_i, &quit_i])?;

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
                let window = build_window(
                    "config",
                    "/#config/summarize",
                    WindowConfig {
                        title: "配置".to_string(),
                        width: 1180.0,
                        height: 630.0,
                        resizable: true,
                        transparent: true,
                        shadow: false,
                        ..Default::default()
                    },
                );
                window.show().unwrap();
                window.set_focus().unwrap();
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
        .on_tray_icon_event(move |tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                println!("left click pressed and released");
                let app = tray.app_handle();
                if let Some(window) = app.get_webview_window("main") {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
        })
        .build(app)?;

    Ok(())
}
