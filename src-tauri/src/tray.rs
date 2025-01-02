use log::info;
use tauri::{
    menu::{Menu, MenuItem},
    tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent},
    Manager, Runtime,
};
use tauri_plugin_global_shortcut::GlobalShortcutExt;
use tauri_plugin_opener::OpenerExt;

pub fn create_tray<R: Runtime>(app: &tauri::AppHandle<R>) -> tauri::Result<()> {
    let show_i = MenuItem::with_id(app, "show", "显示", true, None::<&str>)?;
    let view_log_i = MenuItem::with_id(app, "view_log", "查看日志", true, None::<&str>)?;
    let restart_i = MenuItem::with_id(app, "restart", "重启", true, None::<&str>)?;
    let quit_i = MenuItem::with_id(app, "quit", "退出", true, None::<&str>)?;
    let menu = Menu::with_items(app, &[&show_i, &view_log_i, &restart_i, &quit_i])?;

    let _ = TrayIconBuilder::with_id("tray")
        .icon(app.default_window_icon().unwrap().clone())
        .menu(&menu)
        .menu_on_left_click(false)
        .on_menu_event(move |app, event| match event.id.as_ref() {
            "show" => {
                if let Some(window) = app.get_webview_window("main") {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            }
            "view_log" => {
                // 获取日志文件夹路径
                let log_path = app.path().app_log_dir().unwrap();
                // 将路径转换为字符串
                let path: String = log_path.to_str().unwrap().into();
                // 打开日志文件夹
                app.opener().open_path(path, Option::<String>::None).unwrap();
            }
            "restart" => {
                info!("============== Restart App ==============");
                app.restart();
            }
            "quit" => {
                app.global_shortcut().unregister_all().unwrap();
                info!("============== Quit App ==============");
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
