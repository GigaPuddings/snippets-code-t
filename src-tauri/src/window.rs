#[cfg(any(target_os = "macos", target_os = "windows"))]
use crate::APP;
use log::info;
use tauri::utils::config::WindowConfig;
use tauri::{Listener, Manager, WebviewUrl, WebviewWindow, WebviewWindowBuilder};
// use crate::config::get_adjusted_position;
use mouse_position::mouse_position::Mouse;
use std::sync::Mutex;
use std::thread;
use std::time::Duration;
use urlencoding;
use uuid;

// 定义搜索框区域结构体
#[derive(Debug, Clone)]
struct SearchArea {
    left: f64,
    right: f64,
    top: f64,
    bottom: f64,
}

// 使用静态变量存储搜索框位置和窗口引用
// 搜索框位置
static SEARCH_AREA: Mutex<Option<SearchArea>> = Mutex::new(None);
// 是否正在追踪
static IS_TRACKING: Mutex<bool> = Mutex::new(false);
// 临时存储是否在窗口外
// pub static IS_OUT_OF_WINDOW: Mutex<bool> = Mutex::new(false);

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
pub fn start_mouse_tracking() {
    let window_option = APP.get().unwrap().get_webview_window("main");

    if let Some(window) = window_option {
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
                        let rel_x = x as f64 - win_x - 245.0;
                        let rel_y = y as f64 - win_y - 42.0;

                        // 检查鼠标是否在搜索框范围内
                        if is_point_in_search_area(rel_x, rel_y) {
                            window.set_ignore_cursor_events(false).unwrap();
                            stop_mouse_tracking();
                            // // 设置为在搜索框内设置为false，如果已经在搜索框内，则不重复设置
                            // if *IS_OUT_OF_WINDOW.lock().unwrap() {
                            //     *IS_OUT_OF_WINDOW.lock().unwrap() = false;
                            // }

                            // println!("在搜索框内 {}", *IS_OUT_OF_WINDOW.lock().unwrap());
                            break;
                        }

                        // 修正窗口边界检查逻辑
                        if rel_x < 0.0 || rel_y < 0.0 || rel_x > win_width || rel_y > win_height {
                            window.set_ignore_cursor_events(false).unwrap();
                            stop_mouse_tracking();
                            // // 设置为在窗口外，如果已经是true，则不重复设置
                            // if !*IS_OUT_OF_WINDOW.lock().unwrap() {
                            //     *IS_OUT_OF_WINDOW.lock().unwrap() = true;
                            // }
                            // println!("在窗口外 {}", *IS_OUT_OF_WINDOW.lock().unwrap());
                            break;
                        }
                    }
                    // 降低刷新频率
                    thread::sleep(Duration::from_millis(200)); // 降至 10fps
                }
            });
        }
    } else {
        info!("窗口不存在");
    }
}

// 停止鼠标追踪
pub fn stop_mouse_tracking() {
    let mut is_tracking = IS_TRACKING.lock().unwrap();
    // 停止鼠标追踪
    *is_tracking = false;
}

//相对于前端body元素，宽误差16、 高误差39
pub fn build_window(label: &str, url: &str, option: WindowConfig) -> WebviewWindow {
    let app_handle = APP.get().unwrap();
    // let (adjusted_x, adjusted_y) = get_adjusted_position(app_handle, width, height);

    match app_handle.get_webview_window(label) {
        Some(window) => {
            info!("Window exists: {}", label);
            // 更新窗口位置到鼠标位置
            // let _ = v.set_position(tauri::PhysicalPosition::new(adjusted_x, adjusted_y));
            return window;
        }
        None => {
            info!("Create new window: {}", label);

            let mut builder =
                WebviewWindowBuilder::new(app_handle, label, WebviewUrl::App(url.into()))
                    .title(option.title)
                    .inner_size(option.width, option.height)
                    .min_inner_size(option.width, option.height)
                    .resizable(option.resizable)
                    .shadow(option.shadow)
                    .transparent(option.transparent)
                    .always_on_top(option.always_on_top)
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
        // 停止鼠标追踪
        stop_mouse_tracking();
        // 取消忽略光标
        window.set_ignore_cursor_events(false).unwrap();
    } else {
        window.show().unwrap();
        window.set_focus().unwrap();
        // 启动鼠标追踪
        start_mouse_tracking();
    }
}

// 创建config窗口
pub fn hotkey_config() {
    let window = build_window(
        "config",
        "/#config/category/contentList",
        WindowConfig {
            title: "配置".to_string(),
            width: 1180.0,
            height: 630.0,
            resizable: true,
            transparent: true,
            shadow: false,
            always_on_top: false,
            ..Default::default()
        },
    );

    // 先检查搜索窗口是否打开，如果打开则先关闭
    let search_window = APP.get().unwrap().get_webview_window("main").unwrap();

    // 搜索窗口和配置窗口都打开，直接关闭搜索窗口，不执行后面代码
    if search_window.is_visible().unwrap() && window.is_visible().unwrap() {
        search_window.hide().unwrap();
        // 停止鼠标追踪
        stop_mouse_tracking();
        // 取消忽略光标
        search_window.set_ignore_cursor_events(false).unwrap();
    } else {
        // 配置窗口打开，则隐藏
        if window.is_visible().unwrap() {
            // 如果窗口已经显示但失去焦点，则不隐藏
            if !window.is_focused().unwrap() {
                window.show().unwrap(); // 重新显示窗口并聚焦
                window.set_focus().unwrap();
            } else {
                window.hide().unwrap(); // 隐藏窗口
            }
        } else {
            // 如果配置窗口未显示，检查搜索窗口
            if search_window.is_visible().unwrap() {
                search_window.hide().unwrap();
                // 停止鼠标追踪
                stop_mouse_tracking();
                // 取消忽略光标
                search_window.set_ignore_cursor_events(false).unwrap();
            }
            window.show().unwrap();
            window.set_focus().unwrap();
        }
    }
}

// 创建update窗口
pub fn create_update_window() {
    let window = build_window( 
        "update",
        "/#update",
        WindowConfig {
            title: "系统更新".to_string(),
            width: 520.0,
            height: 460.0,
            resizable: false,
            transparent: true,
            shadow: false,
            always_on_top: true,
            ..Default::default()
        },
    );

    window.show().unwrap();
    window.set_focus().unwrap();
}


// 显示隐藏窗口
#[tauri::command]
pub fn show_hide_window_command(label: &str) -> Result<(), String> {
    match label {
        "search" => {
            hotkey_search();
        }
        "config" => {
            hotkey_config();
        }
        "update" => {
            create_update_window();
        }
        _ => {
            return Err("Invalid label".to_string());
        }
    }
    Ok(())
}

// 创建通知窗口
pub fn create_notification_window(body: &str, reminder_time: Option<i64>) -> WebviewWindow {
    let app_handle = APP.get().unwrap();
    let label = format!("notification_{}", uuid::Uuid::new_v4());

    // 获取主显示器
    let monitor = app_handle.primary_monitor().unwrap().unwrap();
    let monitor_size = monitor.size();
    let scale_factor = monitor.scale_factor();

    // 设置窗口大小 (逻辑像素)
    let window_width = 300.0;
    let window_height = 126.0;

    // 基础边距 (逻辑像素)
    let taskbar_height = 40.0;
    let margin = 16.0;

    // 转换为物理像素
    let physical_width = window_width * scale_factor;
    let physical_height = window_height * scale_factor;
    let physical_taskbar = taskbar_height * scale_factor;
    let physical_margin = margin * scale_factor;

    // 计算目标位置 (物理像素)
    let target_x = monitor_size.width as f64 - physical_width - physical_margin;
    let target_y =
        monitor_size.height as f64 - physical_height - physical_taskbar - physical_margin;

    // 初始位置
    let start_x = monitor_size.width as f64;

    info!(
        "显示器信息: 缩放比例 = {}, 大小 = {}x{}",
        scale_factor, monitor_size.width, monitor_size.height
    );

    // 构建查询参数
    let mut query_params = vec![
        format!("label={}", urlencoding::encode(&label)),
        format!("body={}", urlencoding::encode(body)),
    ];

    if let Some(time) = reminder_time {
        query_params.push(format!("reminder_time={}", time));
    }

    // 构建完整的URL路径
    let url = format!("/#/notification?{}", query_params.join("&"));

    info!(
        "创建通知窗口: 起始位置({}, {}), 目标位置({}, {})",
        start_x, target_y, target_x, target_y
    );

    // 创建窗口
    let window = WebviewWindowBuilder::new(app_handle, &label, WebviewUrl::App(url.into()))
        .title("提醒")
        .inner_size(window_width, window_height)
        .position(start_x, target_y)
        .decorations(false)
        .always_on_top(true)
        .resizable(false)
        .skip_taskbar(true)
        .transparent(true)
        .focused(true)
        .visible(false)
        .build()
        .expect("Failed to create notification window");

    // 启动动画线程
    let window_handle = window.clone();

    // 监听页面准备事件
    window.listen("notification-ready", move |_| {
        // 等待窗口准备完成
        thread::sleep(Duration::from_millis(100));

        // 显示窗口
        if let Err(e) = window_handle.show() {
            info!("显示窗口失败: {}", e);
            return;
        }

        // 执行动画
        let animation_duration = 300.0f64;
        let frame_duration = 16.0f64;
        let total_frames = (animation_duration / frame_duration).ceil() as i32;
        let distance = start_x - target_x;
        let step = distance / total_frames as f64;

        let mut current_x = start_x;
        for _ in 0..total_frames {
            current_x -= step;
            if let Err(e) =
                window_handle.set_position(tauri::Position::Physical(tauri::PhysicalPosition {
                    x: current_x as i32,
                    y: target_y as i32,
                }))
            {
                info!("设置窗口位置失败: {}", e);
                break;
            }
            thread::sleep(Duration::from_millis(frame_duration as u64));
        }

        // 确保最终位置正确
        let _ = window_handle.set_position(tauri::Position::Physical(tauri::PhysicalPosition {
            x: target_x as i32,
            y: target_y as i32,
        }));
    });

    window
}
