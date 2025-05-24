#[cfg(any(target_os = "macos", target_os = "windows"))]
use crate::APP;
use log::info;
use tauri::utils::config::WindowConfig;
use tauri::{
    Emitter, Listener, Manager, WebviewUrl, WebviewWindow, WebviewWindowBuilder, Window,
    WindowEvent,
};
// use crate::config::get_adjusted_position;
use mouse_position::mouse_position::Mouse;
use serde_json;
use std::sync::LazyLock;
use std::sync::Mutex;
use std::thread;
use std::time::Duration;
use tauri::AppHandle;
use tauri_plugin_clipboard_manager::ClipboardExt;
use urlencoding;
use uuid;
use selection::get_text;
#[cfg(target_os = "windows")]
use windows::Win32::UI::WindowsAndMessaging::GetForegroundWindow;

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

// 窗口拖拽状态跟踪
static WINDOW_DRAGGING: Mutex<bool> = Mutex::new(false);
// 最后一次移动时间
static LAST_MOVE_TIME: LazyLock<Mutex<std::time::Instant>> =
    LazyLock::new(|| Mutex::new(std::time::Instant::now()));
// 跟踪失焦时间
static LAST_FOCUS_LOST_TIME: LazyLock<Mutex<Option<std::time::Instant>>> =
    LazyLock::new(|| Mutex::new(None));
// 存储上次活动窗口标识
static LAST_ACTIVE_WINDOW_ID: Mutex<Option<String>> = Mutex::new(None);

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

// 将文本插入到上次活动窗口
#[tauri::command]
pub fn insert_text_to_last_window(text: String) -> Result<(), String> {
    info!("尝试将文本插入到上次活动窗口");
    
    // 使用clipboard-manager插件复制文本到剪贴板
    let app_handle = APP.get().unwrap();
    match app_handle.clipboard().write_text(text) {
        Ok(_) => info!("成功使用插件复制文本到剪贴板"),
        Err(e) => return Err(format!("复制文本到剪贴板失败: {}", e)),
    }
    
    // 检查是否有记录的上次活动窗口
    if LAST_ACTIVE_WINDOW_ID.lock().unwrap().is_some() {
        info!("检测到上次活动窗口，尝试模拟粘贴操作");
        
        #[cfg(target_os = "windows")]
        {
            use windows::Win32::Foundation::HWND;
            use windows::Win32::UI::Input::KeyboardAndMouse::{
                SendInput, INPUT, INPUT_KEYBOARD, KEYEVENTF_KEYUP, VIRTUAL_KEY, VK_CONTROL, VK_V,
            };
            
            // 获取前台窗口
            let foreground_window = unsafe { GetForegroundWindow() };
            if foreground_window == HWND(std::ptr::null_mut()) {
                info!("无法获取前台窗口，回退到剪贴板复制");
                return Ok(());
            }
            
            // 创建输入事件数组
            let mut inputs: [INPUT; 4] = unsafe { std::mem::zeroed() };
            
            // 按下Ctrl键
            inputs[0].r#type = INPUT_KEYBOARD;
            inputs[0].Anonymous.ki.wVk = VIRTUAL_KEY(VK_CONTROL.0);
            
            // 按下V键
            inputs[1].r#type = INPUT_KEYBOARD;
            inputs[1].Anonymous.ki.wVk = VIRTUAL_KEY(VK_V.0);
            
            // 释放V键
            inputs[2].r#type = INPUT_KEYBOARD;
            inputs[2].Anonymous.ki.wVk = VIRTUAL_KEY(VK_V.0);
            inputs[2].Anonymous.ki.dwFlags = KEYEVENTF_KEYUP;
            
            // 释放Ctrl键
            inputs[3].r#type = INPUT_KEYBOARD;
            inputs[3].Anonymous.ki.wVk = VIRTUAL_KEY(VK_CONTROL.0);
            inputs[3].Anonymous.ki.dwFlags = KEYEVENTF_KEYUP;
            
            // 发送输入事件
            let result = unsafe { SendInput(&inputs, std::mem::size_of::<INPUT>() as i32) };
            
            if result != inputs.len() as u32 {
                info!("模拟键盘输入失败，已复制到剪贴板，请手动粘贴");
            } else {
                info!("成功模拟Ctrl+V粘贴操作");
            }
        }
        
        #[cfg(not(target_os = "windows"))]
        {
            info!("当前平台不支持自动粘贴，已复制到剪贴板，请手动按Ctrl+V粘贴");
        }
    } else {
        info!("未检测到上次活动窗口，已复制到剪贴板，请手动按Ctrl+V粘贴");
    }
    
    Ok(())
}

pub fn hotkey_search(context: Option<String>) {
    // 显示隐藏搜索窗口
    let window = APP.get().unwrap().get_webview_window("main").unwrap();
    if window.is_visible().unwrap() {
        window.hide().unwrap();
        // 停止鼠标追踪
        stop_mouse_tracking();
        // 取消忽略光标
        window.set_ignore_cursor_events(false).unwrap();
        
        // 只有当不是从 selectItem 上下文调用，或者 context 为 None 时才清除
        let should_clear_last_active_id = match context.as_deref() {
            Some("selectItem") => false, // 如果是 selectItem，则不清除
            _ => true, // 其他情况（包括 None 或其他字符串）都清除
        };

        if should_clear_last_active_id {
            // 取消记录当前活动窗口
            *LAST_ACTIVE_WINDOW_ID.lock().unwrap() = None;
        }
    } else {
        // 记录当前活动窗口
        #[cfg(target_os = "windows")]
        {
            use windows::Win32::UI::WindowsAndMessaging::GetForegroundWindow;

            // 获取当前前台窗口句柄
            let foreground_window = unsafe { GetForegroundWindow() };
            let window_id = format!("{:?}", foreground_window);

            info!("记录当前活动窗口: {}", window_id);
            *LAST_ACTIVE_WINDOW_ID.lock().unwrap() = Some(window_id);
        }
        
        #[cfg(not(target_os = "windows"))]
        {
            info!("记录当前活动窗口状态");
            *LAST_ACTIVE_WINDOW_ID.lock().unwrap() = Some("last_active".to_string());
        }

        window.show().unwrap();
        window.set_focus().unwrap();
        // 启动鼠标追踪
        start_mouse_tracking();
    }
}

// 新增的包装函数，用于快捷键注册
pub fn hotkey_search_wrapper() {
    hotkey_search(None);
}

// 创建config窗口
pub fn hotkey_config() {
    let window = build_window(
        "config",
        "/#config/category/contentList",
        WindowConfig {
            title: "配置".to_string(),
            width: 1180.0,
            height: 642.0,
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
        // 配置窗口打开，则判断其状态
        if window.is_visible().unwrap() {
            // 如果窗口已经显示但失去焦点，重新显示并聚焦
            if !window.is_focused().unwrap() {
                // 对于可能被最小化的窗口，先尝试取消最小化
                #[cfg(target_os = "windows")]
                {
                    let _ = window.unminimize();
                }
                #[cfg(target_os = "macos")]
                {
                    let _ = window.unminimize();
                }

                // 强制显示窗口并设置为前台窗口
                window.show().unwrap();
                window.set_focus().unwrap();

                // 如果窗口被其他应用遮挡，临时设置为顶层窗口
                window.set_always_on_top(true).unwrap();
                // 短暂延迟后恢复原始设置
                let window_clone = window.clone();
                tauri::async_runtime::spawn(async move {
                    tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
                    let _ = window_clone.set_always_on_top(false);
                });
            } else {
                window.hide().unwrap(); // 窗口有焦点时隐藏
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

// 划词翻译快捷键处理
pub fn hotkey_selection_translate() {
    // 直接使用selection获取选中文本
    let selected_text = get_text();

    let app_handle = APP.get().unwrap().clone();

    // 检查窗口是否已经存在
    if let Some(window) = app_handle.get_webview_window("translate") {
        // 如果窗口已经存在并且可见
        if window.is_visible().unwrap_or(false) {
            // 如果有选中文本且不为空，则更新翻译窗口的内容
            if !selected_text.trim().is_empty() {
                let _ = window.emit(
                    "selection-text",
                    serde_json::json!({
                        "text": selected_text
                    }),
                );
                let _ = window.set_focus();
            } else {
                // 无选中文本且窗口可见，则关闭窗口
                let _ = window.emit("reset-state", ());
                let _ = window.hide();
            }
            return;
        } else {
            // 窗口存在但不可见，且有选中文本，则显示窗口并发送文本
            if !selected_text.trim().is_empty() {
                let _ = window.emit(
                    "selection-text",
                    serde_json::json!({
                        "text": selected_text
                    }),
                );
                let _ = window.show();
                let _ = window.set_focus();
                return;
            }
        }
    }

    // 检查是否有选中文本
    if !selected_text.trim().is_empty() {
        // 窗口不存在，创建新窗口
        open_translate_window(&app_handle, Some(selected_text));
    } else {
        // 无选中文本，提示用户
        if let Some(window) = app_handle.get_webview_window("main") {
            let _ = window.emit(
                "notification",
                serde_json::json!({
                    "type": "warning",
                    "message": "请先选择要翻译的文本"
                }),
            );
        }
    }
}

// 翻译窗口快捷键处理
pub fn hotkey_translate() {
    let app_handle = APP.get().unwrap().clone();

    // 检查窗口是否已经存在
    if let Some(window) = app_handle.get_webview_window("translate") {
        // 如果窗口已经存在并且可见，则隐藏窗口
        if window.is_visible().unwrap_or(false) {
            // 先复位状态，然后隐藏窗口
            let _ = window.emit("reset-state", ());
            let _ = window.hide();
            return;
        } else {
            // 窗口存在但不可见，则显示窗口
            let _ = window.show();
            let _ = window.set_focus();
            return;
        }
    }

    // 窗口不存在，创建新窗口
    open_translate_window(&app_handle, None);
}

// 打开翻译窗口
fn open_translate_window(app_handle: &AppHandle, text: Option<String>) {
    // 保存选中文本以便在窗口创建后使用
    let selected_text = text.clone();
    
    if let Some(window) = app_handle.get_webview_window("translate") {
        // 窗口已存在，显示并聚焦
        let _ = window.show();
        let _ = window.set_focus();

        // 使用延迟发送机制确保文本能被前端接收
        if let Some(text) = selected_text {
            let window_clone = window.clone();
            let text_clone = text.clone();
            
            // 立即尝试发送一次
            let _ = window.emit(
                "selection-text",
                serde_json::json!({
                    "text": text.clone()
                }),
            );
            
            // 再延迟300ms后尝试发送，确保前端已准备好
            tauri::async_runtime::spawn(async move {
                tokio::time::sleep(tokio::time::Duration::from_millis(300)).await;
                let _ = window_clone.emit(
                    "selection-text",
                    serde_json::json!({
                        "text": text_clone
                    }),
                );
            });
        }
    } else {
        // 创建新窗口
        let window = build_window(
            "translate",
            "/#/translate",
            WindowConfig {
                title: "翻译".to_string(),
                width: 400.0,
                height: 500.0,
                resizable: true,
                transparent: true,
                shadow: false,
                always_on_top: true,
                ..Default::default()
            },
        );
        
        window.show().unwrap();
        window.set_focus().unwrap();

        // 如果有文本，在窗口创建后发送文本
        if let Some(text) = selected_text {
            let window_clone = window.clone();
            let text_clone = text.clone();
            
            // 使用延迟发送的方式，确保前端组件有足够时间初始化和设置监听器
            tauri::async_runtime::spawn(async move {
                // 延迟500ms尝试发送
                tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
                let _ = window_clone.emit(
                    "selection-text",
                    serde_json::json!({
                        "text": text_clone.clone()
                    }),
                );
            });
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
pub fn show_hide_window_command(label: &str, context: Option<String>) -> Result<(), String> {
    match label {
        "search" => {
            hotkey_search(context);
        }
        "config" => {
            hotkey_config();
        }
        "translate" => {
            hotkey_translate();
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

// 处理窗口事件的函数
pub fn handle_window_event(window: &Window, event: &WindowEvent) {
    if window.label() == "main" {
        match event {
            WindowEvent::Focused(true) => {
                // 重置失焦时间
                *LAST_FOCUS_LOST_TIME.lock().unwrap() = None;
                // 发送窗口聚焦事件
                window.emit("windowFocused", ()).unwrap();
            }
            // 失焦
            WindowEvent::Focused(false) => {
                // 记录失焦时间
                *LAST_FOCUS_LOST_TIME.lock().unwrap() = Some(std::time::Instant::now());

                // 创建一个窗口引用的克隆用于后续处理
                let window_clone = window.clone();
                // 延迟一段时间后再判断是否隐藏窗口
                tauri::async_runtime::spawn(async move {
                    // 等待200毫秒，这段时间足够判断是否是拖拽引起的失焦
                    tokio::time::sleep(tokio::time::Duration::from_millis(200)).await;

                    // 检查是否需要自动隐藏窗口
                    let auto_hide_on_blur = match crate::config::get_value(
                        &crate::APP.get().unwrap(),
                        "autoHideOnBlur",
                    ) {
                        Some(value) => value.as_bool().unwrap_or(true),
                        None => true, // 默认为开启
                    };

                    // 如果不需要自动隐藏窗口，直接返回
                    if !auto_hide_on_blur {
                        return;
                    }

                    let dragging = *WINDOW_DRAGGING.lock().unwrap();
                    let last_move = LAST_MOVE_TIME.lock().unwrap().elapsed();

                    // 获取上次失焦时间
                    let should_hide =
                        if let Some(focus_lost_time) = *LAST_FOCUS_LOST_TIME.lock().unwrap() {
                            // 如果失焦后200ms内没有移动操作，或者失焦时间与最后移动时间间隔大于200ms
                            focus_lost_time.elapsed() > std::time::Duration::from_millis(200)
                                && (!dragging || last_move > std::time::Duration::from_millis(200))
                        } else {
                            false // 如果没有失焦时间记录，不隐藏
                        };

                    if should_hide {
                        // 检查窗口当前是否仍然没有焦点
                        if let Ok(has_focus) = window_clone.is_focused() {
                            if !has_focus {
                                // println!("延迟判断后确认窗口失焦，隐藏窗口");
                                // 停止鼠标追踪
                                stop_mouse_tracking();
                                // 取消忽略光标
                                let _ = window_clone.set_ignore_cursor_events(false);
                                let _ = window_clone.hide();
                            }
                        }
                    } else {
                        // println!("窗口处于拖拽状态，忽略失焦事件");
                    }
                });
            }
            // 窗口被移动时，记录拖拽状态
            WindowEvent::Moved(_) => {
                // 标记为正在拖拽
                *WINDOW_DRAGGING.lock().unwrap() = true;
                // 更新最后移动时间
                *LAST_MOVE_TIME.lock().unwrap() = std::time::Instant::now();

                // 创建一个窗口引用的克隆用于后续处理
                let window_clone = window.clone();
                // 延迟一段时间后重置拖拽状态
                tauri::async_runtime::spawn(async move {
                    // 等待500毫秒
                    tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
                    // 重置拖拽状态
                    *WINDOW_DRAGGING.lock().unwrap() = false;

                    // 检查是否需要自动隐藏窗口
                    let auto_hide_on_blur = match crate::config::get_value(
                        &crate::APP.get().unwrap(),
                        "autoHideOnBlur",
                    ) {
                        Some(value) => value.as_bool().unwrap_or(true),
                        None => true, // 默认为开启
                    };

                    // 如果不需要自动隐藏窗口，直接返回
                    if !auto_hide_on_blur {
                        return;
                    }

                    // 检查窗口当前是否有焦点
                    if let Ok(has_focus) = window_clone.is_focused() {
                        if !has_focus {
                            // 再次检查最后一次失焦时间
                            if let Some(focus_lost_time) = *LAST_FOCUS_LOST_TIME.lock().unwrap() {
                                // 如果失焦发生在拖拽重置后
                                if focus_lost_time.elapsed() < std::time::Duration::from_millis(500)
                                {
                                    // println!("拖拽结束后检测窗口无焦点，隐藏窗口");
                                    // 停止鼠标追踪
                                    stop_mouse_tracking();
                                    // 取消忽略光标
                                    let _ = window_clone.set_ignore_cursor_events(false);
                                    let _ = window_clone.hide();
                                }
                            }
                        }
                    }
                });
            }
            _ => {}
        }
    }
}
