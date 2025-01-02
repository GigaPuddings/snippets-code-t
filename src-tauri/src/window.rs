#[cfg(any(target_os = "macos", target_os = "windows"))]
use crate::APP;
use log::info;
use tauri::{Manager, WebviewUrl, WebviewWindow, WebviewWindowBuilder};
// use crate::config::get_adjusted_position;
use mouse_position::mouse_position::Mouse;
use std::sync::Mutex;
use std::thread;
use std::time::Duration;

// 定义搜索框区域结构体
#[derive(Debug, Clone)]
struct SearchArea {
    left: f64,
    right: f64,
    top: f64,
    bottom: f64,
}

// 使用静态变量存储搜索框位置和窗口引用
static SEARCH_AREA: Mutex<Option<SearchArea>> = Mutex::new(None);
static IS_TRACKING: Mutex<bool> = Mutex::new(false);

// 更新搜索框位置的命令
#[tauri::command]
pub fn update_search_area(left: f64, right: f64, top: f64, bottom: f64) {
    let mut area = SEARCH_AREA.lock().unwrap();
    *area = Some(SearchArea {
        left,
        right,
        top,
        bottom,
    });
}

// 检查点是否在搜索框内
fn is_point_in_search_area(x: f64, y: f64) -> bool {
    if let Some(area) = SEARCH_AREA.lock().unwrap().as_ref() {
        x >= area.left && x <= area.right && y >= area.top && y <= area.bottom
    } else {
        false
    }
}

// 监听鼠标位置并控制穿透
pub fn start_mouse_tracking(window: tauri::Window) {
    // info!("开始鼠标追踪");
    let mut is_tracking = IS_TRACKING.lock().unwrap();
    if *is_tracking {
        return;
    }
    *is_tracking = true;

    // 获取窗口位置和大小
    if let (Ok(position), Ok(size)) = (window.outer_position(), window.outer_size()) {
        let win_x = position.x as f64;
        let win_y = position.y as f64;
        let win_width = size.width as f64;
        let win_height = size.height as f64;

        thread::spawn(move || {
            let mut last_pos = Mouse::get_mouse_position();

            while *IS_TRACKING.lock().unwrap() {
                if let Mouse::Position { x, y } = Mouse::get_mouse_position() {
                    // 检查鼠标是否移动
                    if let Mouse::Position {
                        x: last_x,
                        y: last_y,
                    } = last_pos
                    {
                        if x == last_x && y == last_y {
                            thread::sleep(Duration::from_millis(200));
                            continue;
                        }
                    }

                    // 更新上次位置
                    last_pos = Mouse::Position { x, y };

                    // 转换为相对窗口的坐标
                    let rel_x = x as f64 - win_x;
                    let rel_y = y as f64 - win_y;
                    // info!("鼠标位置: {}, {}, 窗口位置: {}, {}", rel_x, rel_y, win_x, win_y);

                    // 检查鼠标是否在搜索框范围内
                    if is_point_in_search_area(rel_x, rel_y) {
                        // info!("鼠标在搜索框内，取消鼠标穿透");
                        window.set_ignore_cursor_events(false).unwrap();
                        stop_mouse_tracking();
                        break;
                    }

                    // 修正窗口边界检查逻辑
                    if rel_x < 0.0 || rel_y < 0.0 || rel_x > win_width || rel_y > win_height {
                        // info!("鼠标移出窗体外，取消鼠标穿透");
                        window.set_ignore_cursor_events(false).unwrap();
                        stop_mouse_tracking();
                        break;
                    }
                }
                // 降低刷新频率
                thread::sleep(Duration::from_millis(200)); // 降至 10fps
            }
        });
    }
}

// 停止鼠标追踪
pub fn stop_mouse_tracking() {
    let mut is_tracking = IS_TRACKING.lock().unwrap();
    // 停止鼠标追踪
    *is_tracking = false;
}

//相对于前端body元素，宽误差16、 高误差39
pub fn build_window(label: &str, title: &str, url: &str, width: f64, height: f64) -> WebviewWindow {
    let app_handle = APP.get().unwrap();
    // let (adjusted_x, adjusted_y) = get_adjusted_position(app_handle, width, height);

    match app_handle.get_webview_window(label) {
        Some(window) => {
            info!("Window exists: {}", label);
            // 更新窗口位置到鼠标位置
            // let _ = v.set_position(tauri::PhysicalPosition::new(adjusted_x, adjusted_y));
            // let _ = v.set_focus();
            // window.show().unwrap();
            // window.set_focus().unwrap();
            window.set_always_on_top(true).unwrap();

            return window;
        }
        None => {
            info!("Create new window: {}", label);

            let mut builder =
                WebviewWindowBuilder::new(app_handle, label, WebviewUrl::App(url.into()))
                    .title(title)
                    .inner_size(width, height)
                    .min_inner_size(800.0, 630.0)
                    .transparent(true)
                    .focused(true)
                    .center()
                    .visible(false);

            // macOS 特定配置
            #[cfg(target_os = "macos")]
            {
                builder = builder
                    .title_bar_style(tauri::TitleBarStyle::Overlay)
                    .hidden_title(true);
            }
            // 非 macOS 配置
            #[cfg(not(target_os = "macos"))]
            {
                builder = builder.decorations(false);
            }

            let window = builder.build().expect("Failed to build window");

            window
        }
    }
}


pub fn hotkey_search() {
  // 显示隐藏搜索窗口
  let window = APP.get().unwrap().get_webview_window("main").unwrap();
  if window.is_visible().unwrap() {
      window.hide().unwrap();
  } else {
      window.show().unwrap();
      window.set_focus().unwrap();
  }
}

pub fn hotkey_config() {
  let window = build_window("config", "配置", "/#config/category/contentList", 1180.0, 630.0);
  if window.is_visible().unwrap() {
      window.hide().unwrap();
  } else {
      window.show().unwrap();
      window.set_focus().unwrap();
  }
}
