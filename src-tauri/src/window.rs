#[cfg(any(target_os = "macos", target_os = "windows"))]
use crate::APP;
use log::{error, info};
use tauri::utils::config::WindowConfig;
use tauri::{
    Emitter, Listener, Manager, WebviewUrl, WebviewWindow, WebviewWindowBuilder, Window,
    WindowEvent,
};

// 窗口准备回调类型别名，用于简化复杂类型
type WindowReadyCallback = Box<dyn FnOnce(&WebviewWindow) + Send + 'static>;
// use crate::config::get_adjusted_position;
use base64::{engine::general_purpose, Engine as _};
use image::GenericImageView;
use mouse_position::mouse_position::Mouse;
use std::sync::LazyLock;
use std::sync::Mutex;
use std::thread;
use std::time::{Duration, Instant};
use tauri::AppHandle;
use tauri_plugin_dialog::DialogExt;

// 用于跟踪 config 窗口是否已添加关闭清理监听器
static CONFIG_CLEANUP_REGISTERED: LazyLock<Mutex<bool>> = LazyLock::new(|| Mutex::new(false));

// 启动过渡耗时统计起点（loading 显示时记录）
static STARTUP_TRANSITION_STARTED_AT: LazyLock<Mutex<Option<Instant>>> =
    LazyLock::new(|| Mutex::new(None));

fn get_app_handle_or_log(context: &str) -> Option<&'static AppHandle> {
    match APP.get() {
        Some(app) => Some(app),
        None => {
            error!("{}: 无法获取应用句柄", context);
            None
        }
    }
}

use selection::get_text;
use tauri::image::Image;
use tauri_plugin_clipboard_manager::ClipboardExt;
#[cfg(target_os = "windows")]
use windows::Win32::UI::WindowsAndMessaging::{
    GetForegroundWindow, EnumWindows, GetWindowRect, IsWindowVisible, GetWindowTextW,
    IsIconic, GetWindowLongW, GetClassNameW, GetWindow, GetParent, GetTopWindow,
    GWL_EXSTYLE, GW_OWNER, WS_EX_TOOLWINDOW, WS_EX_APPWINDOW, GW_HWNDNEXT,
    GetSystemMetrics, SM_CXSCREEN, SM_CYSCREEN
};
#[cfg(target_os = "windows")]
use windows::Win32::Foundation::{BOOL, HWND, LPARAM, RECT};

// 定义搜索框区域结构体
#[derive(Debug, Clone)]
struct SearchArea {
    left: f64,
    right: f64,
    top: f64,
    bottom: f64,
}

// 定义窗口信息结构体
#[derive(Debug, Clone, serde::Serialize)]
pub struct WindowInfo {
    x: i32,
    y: i32,
    width: i32,
    height: i32,
    title: String,
    z_order: i32, // 原始窗口层级
    is_fullscreen: bool, // 是否为全屏窗口
    display_order: i32, // 实际显示层级（考虑全屏优先后），值越小层级越高
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

// 存储贴图窗口的图片数据 (窗口标签 -> 图片数据)
use std::collections::HashMap;
static PIN_IMAGE_DATA: LazyLock<Mutex<HashMap<String, String>>> = 
    LazyLock::new(|| Mutex::new(HashMap::new()));

// 存储截图窗口的预捕获屏幕图像（PNG格式，高质量）
static SCREENSHOT_BACKGROUND: LazyLock<Mutex<Option<String>>> =
    LazyLock::new(|| Mutex::new(None));

// 存储截图预览图（JPEG格式，快速显示）
static SCREENSHOT_PREVIEW: LazyLock<Mutex<Option<String>>> =
    LazyLock::new(|| Mutex::new(None));

// 缓存窗口列表（用于快速截图初始化）
static CACHED_WINDOW_LIST: LazyLock<Mutex<Option<Vec<WindowInfo>>>> =
    LazyLock::new(|| Mutex::new(None));

// 缓存主显示器信息
static CACHED_MONITOR_INFO: LazyLock<Mutex<Option<MonitorInfo>>> =
    LazyLock::new(|| Mutex::new(None));

// 主显示器信息结构
#[derive(Clone, serde::Serialize)]
pub struct MonitorInfo {
    pub x: i32,
    pub y: i32,
    pub width: u32,
    pub height: u32,
    pub scale: f64,
}

// 标记是否正在捕获屏幕（防止并发捕获）
static IS_CAPTURING: Mutex<bool> = Mutex::new(false);

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
    let Some(app_handle) = get_app_handle_or_log("start_mouse_tracking") else {
        return;
    };
    let window_option = app_handle.get_webview_window("main");

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
                            let _ = window.set_ignore_cursor_events(false);
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
                            let _ = window.set_ignore_cursor_events(false);
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

// ==================== 窗口管理器框架 ====================

// 窗口规格配置
#[derive(Debug, Clone)]
pub struct WindowSpec {
    // 窗口标签（唯一标识）
    pub label: &'static str,
    // URL路径
    pub url: &'static str,
    // 窗口标题
    pub title: &'static str,
    // 窗口宽度
    pub width: f64,
    // 窗口高度
    pub height: f64,
    // 是否可调整大小
    pub resizable: bool,
    // 是否透明
    pub transparent: bool,
    // 是否显示阴影
    pub shadow: bool,
    // 是否总是在顶层
    pub always_on_top: bool,
    // 前端准备完成的事件名称
    pub ready_event: Option<&'static str>,
}

impl WindowSpec {
    // 转换为 WindowConfig
    fn to_window_config(&self) -> WindowConfig {
        WindowConfig {
            title: self.title.to_string(),
            width: self.width,
            height: self.height,
            resizable: self.resizable,
            transparent: self.transparent,
            shadow: self.shadow,
            always_on_top: self.always_on_top,
            ..Default::default()
        }
    }
}

// 窗口显示行为
#[derive(Debug, Clone, Copy, PartialEq)]
pub enum WindowShowBehavior {
    // 简单切换：可见则隐藏，不可见则显示
    SimpleToggle,
    // 智能切换：可见且有焦点则隐藏，可见无焦点则聚焦，不可见则显示
    SmartToggle,
    // 总是显示并聚焦
    AlwaysShow,
}

// 窗口管理器 - 提供统一的窗口创建和管理功能
pub struct WindowManager;

impl WindowManager {
    // 获取或创建窗口，并根据显示行为处理窗口状态
    pub fn get_or_create_with_behavior(
        spec: &WindowSpec,
        behavior: WindowShowBehavior,
        on_ready: Option<WindowReadyCallback>,
    ) -> Result<WebviewWindow, String> {
        let _app = APP.get().ok_or("无法获取应用句柄")?;
        
        // 获取或创建窗口
        let window = build_window(spec.label, spec.url, spec.to_window_config())?;
        
        // 根据行为处理窗口显示逻辑
        match behavior {
            WindowShowBehavior::SimpleToggle => {
                Self::handle_simple_toggle(&window)?;
            }
            WindowShowBehavior::SmartToggle => {
                Self::handle_smart_toggle(&window, spec.ready_event, on_ready)?;
            }
            WindowShowBehavior::AlwaysShow => {
                Self::handle_always_show(&window, spec.ready_event, on_ready)?;
            }
        }
        
        Ok(window)
    }
    
    // 简单切换：可见则隐藏，不可见则显示
    fn handle_simple_toggle(window: &WebviewWindow) -> Result<(), String> {
        if window.is_visible().unwrap_or(false) {
            window.hide().map_err(|e| e.to_string())?;
        } else {
            window.show().map_err(|e| e.to_string())?;
            window.set_focus().map_err(|e| e.to_string())?;
        }
        Ok(())
    }
    
    // 智能切换：可见且有焦点则隐藏，可见无焦点则聚焦，不可见则显示
    fn handle_smart_toggle(
        window: &WebviewWindow,
        ready_event: Option<&'static str>,
        on_ready: Option<WindowReadyCallback>,
    ) -> Result<(), String> {
        if window.is_visible().unwrap_or(false) {
            if window.is_focused().unwrap_or(false) {
                // 有焦点则隐藏
                window.hide().map_err(|e| e.to_string())?;
            } else {
                // 没有焦点则重新聚焦并临时置顶
                #[cfg(any(target_os = "windows", target_os = "macos"))]
                {
                    let _ = window.unminimize();
                }
                
                window.show().map_err(|e| e.to_string())?;
                window.set_focus().map_err(|e| e.to_string())?;
                
                // 临时置顶以确保可见
                window.set_always_on_top(true).map_err(|e| e.to_string())?;
                let window_clone = window.clone();
                tauri::async_runtime::spawn(async move {
                    tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
                    let _ = window_clone.set_always_on_top(false);
                });
            }
        } else {
            // 窗口不可见，需要显示
            Self::handle_always_show(window, ready_event, on_ready)?;
        }
        Ok(())
    }
    
    // 总是显示并聚焦
    fn handle_always_show(
        window: &WebviewWindow,
        ready_event: Option<&'static str>,
        on_ready: Option<WindowReadyCallback>,
    ) -> Result<(), String> {
        match window.show() {
            Ok(_) => {
                // 成功显示，直接设置焦点
                window.set_focus().ok();
                if let Some(callback) = on_ready {
                    callback(window);
                }
            }
            Err(_) => {
                // 显示失败，可能是新窗口尚未 ready
                if let Some(event) = ready_event {
                    // 有 ready 事件：按事件重试
                    let window_clone = window.clone();
                    window.once(event, move |_| {
                        window_clone.show().ok();
                        window_clone.set_focus().ok();
                    });
                }

                // 无论是否有 ready 事件，都做多次短重试，避免首次 show 丢失
                let window_clone = window.clone();
                tauri::async_runtime::spawn(async move {
                    for _ in 0..8 {
                        tokio::time::sleep(tokio::time::Duration::from_millis(120)).await;
                        if window_clone.show().is_ok() {
                            let _ = window_clone.set_focus();
                            break;
                        }
                    }
                });

                if let Some(callback) = on_ready {
                    let window_clone = window.clone();
                    tauri::async_runtime::spawn(async move {
                        for _ in 0..8 {
                            tokio::time::sleep(tokio::time::Duration::from_millis(120)).await;
                            if window_clone.is_visible().unwrap_or(false) {
                                callback(&window_clone);
                                break;
                            }
                        }
                    });
                }
            }
        }
        Ok(())
    }
    
    // 关闭搜索窗口的辅助方法（很多窗口打开时需要关闭搜索窗口）
    pub fn close_search_window_if_visible() {
        if let Some(app) = APP.get() {
            if let Some(search_window) = app.get_webview_window("main") {
                if search_window.is_visible().unwrap_or(false) {
                    // 发送事件到前端，让前端清除搜索状态
                    let _ = search_window.emit("reset-search-state", ());
                    
                    // 隐藏搜索窗口
                    let _ = search_window.hide();
                    
                    
                    stop_mouse_tracking();
                    let _ = search_window.set_ignore_cursor_events(false);
                }
            }
        }
    }
}

//相对于前端body元素，宽误差16、 高误差39
pub fn build_window(label: &str, url: &str, option: WindowConfig) -> Result<WebviewWindow, String> {
    let Some(app_handle) = get_app_handle_or_log("build_window") else {
        return Err("无法获取应用句柄".to_string());
    };
    // let (adjusted_x, adjusted_y) = get_adjusted_position(app_handle, width, height);

    match app_handle.get_webview_window(label) {
        Some(window) => {
            info!("Window exists: {}", label);
            // 更新窗口位置到鼠标位置
            // let _ = v.set_position(tauri::PhysicalPosition::new(adjusted_x, adjusted_y));
            Ok(window)
        }
        None => {
            // info!("Create new window: {}", label);

            // config 窗口允许缩小到较小尺寸，以便前端折叠左侧面板的响应式逻辑生效
            let (min_w, min_h) = if label == "config" {
                (720.0, 480.0)
            } else {
                (option.width, option.height)
            };

            let mut builder =
                WebviewWindowBuilder::new(app_handle, label, WebviewUrl::App(url.into()))
                    .title(option.title)
                    .inner_size(option.width, option.height)
                    .min_inner_size(min_w, min_h)
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

            builder.build().map_err(|e| {
                let msg = format!("build_window: 创建窗口失败 label={}, err={}", label, e);
                error!("{}", msg);
                msg
            })
        }
    }
}

// 将文本插入到上次活动窗口
#[tauri::command]
pub fn insert_text_to_last_window(text: String) -> Result<(), String> {
    // 保留错误日志，减少正常流程噪音

    // 使用clipboard-manager插件复制文本到剪贴板
    let app_handle = APP.get().ok_or_else(|| {
        let msg = "insert_text_to_last_window: 无法获取应用句柄".to_string();
        error!("{}", msg);
        msg
    })?;
    match app_handle.clipboard().write_text(text) {
        Ok(_) => info!("成功使用插件复制文本到剪贴板"),
        Err(e) => {
            let msg = format!("复制文本到剪贴板失败: {}", e);
            error!("insert_text_to_last_window: {}", msg);
            return Err(msg);
        }
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
    let Some(app_handle) = get_app_handle_or_log("hotkey_search") else {
        return;
    };
    let Some(window) = app_handle.get_webview_window("main") else {
        error!("hotkey_search: main 窗口不存在");
        return;
    };
    let is_visible = match window.is_visible() {
        Ok(v) => v,
        Err(e) => {
            error!("hotkey_search: 获取窗口可见状态失败: {}", e);
            return;
        }
    };
    if is_visible {
        let _ = window.hide();
        // 停止鼠标追踪
        stop_mouse_tracking();
        // 取消忽略光标
        let _ = window.set_ignore_cursor_events(false);
        
        // 只有当不是从 selectItem 上下文调用，或者 context 为 None 时才清除
        let should_clear_last_active_id = match context.as_deref() {
            Some("selectItem") => false, // 如果是 selectItem，则不清除
            _ => true,                   // 其他情况（包括 None 或其他字符串）都清除
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

            // info!("记录当前活动窗口: {}", window_id);
            *LAST_ACTIVE_WINDOW_ID.lock().unwrap() = Some(window_id);
        }

        #[cfg(not(target_os = "windows"))]
        {
            // info!("记录当前活动窗口状态");
            *LAST_ACTIVE_WINDOW_ID.lock().unwrap() = Some("last_active".to_string());
        }

        let _ = window.show();
        let _ = window.set_focus();
        // 启动鼠标追踪
        start_mouse_tracking();
    }
}

// 新增的包装函数，用于快捷键注册
pub fn hotkey_search_wrapper() {
    hotkey_search(None);
}

// 创建config窗口并跳转到设置页面
pub fn open_config_settings() {
    // 先关闭搜索窗口
    WindowManager::close_search_window_if_visible();
    
    // 定义窗口规格（与 hotkey_config 共享）
    let spec = WindowSpec {
        label: "config",
        url: "/#/config/category/settings",
        title: "配置",
        width: 1180.0,
        height: 642.0,
        resizable: true,
        transparent: true,
        shadow: false,
        always_on_top: false,
        ready_event: Some("config_ready"),
    };
    
    // 使用总是显示行为，并在准备完成后导航到设置页面
    let _ = WindowManager::get_or_create_with_behavior(
        &spec,
        WindowShowBehavior::AlwaysShow,
        Some(Box::new(|window| {
            // 导航到设置页面
            let _ = window.emit("navigate-to-settings", ());
        })),
    );
}

fn ensure_config_cleanup_listener(window: &WebviewWindow) {
    // 只在首次创建窗口时注册清理监听器
    let mut registered = match CONFIG_CLEANUP_REGISTERED.lock() {
        Ok(registered) => registered,
        Err(e) => {
            error!("ensure_config_cleanup_listener: 清理监听状态锁定失败: {}", e);
            return;
        }
    };
    if !*registered {
        *registered = true;
        drop(registered); // 释放锁

        // 监听 config 窗口关闭事件，清理软删除附件
        let Some(app_for_cleanup) = get_app_handle_or_log("ensure_config_cleanup_listener") else {
            return;
        };
        let app_for_thread = app_for_cleanup.clone();
        window.on_window_event(move |event| {
            if let WindowEvent::Destroyed = event {
                // 在窗口关闭后清理软删除附件
                let app = app_for_thread.clone();
                std::thread::spawn(move || {
                    if let Ok(Some(workspace_root)) = crate::json_config::get_workspace_root(&app) {
                        if let Ok(trash_dir) = crate::attachment::get_trash_dir(&workspace_root) {
                            if trash_dir.exists() {
                                if let Err(e) = std::fs::remove_dir_all(&trash_dir) {
                                    log::warn!("[Config] 清理软删除目录失败: {}", e);
                                } else {
                                    log::info!("[Config] 已清理软删除目录: {}", trash_dir.display());
                                }
                            }
                        }
                    }
                });
            }
        });
    }
}

// 启动阶段：先显示 loading，静默加载 config，待 config_ready 再切换
pub fn open_config_with_loading_transition() {
    WindowManager::close_search_window_if_visible();
    {
        let mut started = match STARTUP_TRANSITION_STARTED_AT.lock() {
            Ok(started) => started,
            Err(e) => {
                error!("open_config_with_loading_transition: 启动计时状态锁定失败: {}", e);
                return;
            }
        };
        *started = Some(Instant::now());
    }
    show_loading_window();
    info!("[StartupTransition] loading shown");

    let spec = WindowSpec {
        label: "config",
        url: "/#/config/category/contentList",
        title: "配置",
        width: 1180.0,
        height: 642.0,
        resizable: true,
        transparent: true,
        shadow: false,
        always_on_top: false,
        ready_event: Some("config_ready"),
    };

    let window = match build_window(spec.label, spec.url, spec.to_window_config()) {
        Ok(window) => window,
        Err(e) => {
            error!("open_config_with_loading_transition: 创建 config 窗口失败: {}", e);
            close_and_destroy_loading_window();
            return;
        }
    };
    info!("[StartupTransition] config created and preloading under loading");
    ensure_config_cleanup_listener(&window);

    // 先挂监听，再触发显示，避免极端时序下丢失 ready 事件
    let window_clone = window.clone();
    window.once("config_ready", move |_| {
        let Some(started_at) = (match STARTUP_TRANSITION_STARTED_AT.lock() {
            Ok(mut started) => started.take(),
            Err(e) => {
                error!("open_config_with_loading_transition: 读取启动计时状态失败: {}", e);
                None
            }
        }) else {
            // 超时兜底已完成切换，忽略迟到的 ready 事件
            return;
        };
        let elapsed_ms = started_at.elapsed().as_millis();

        info!(
            "[StartupTransition] config ready -> switch to config (loading_to_ready={}ms)",
            elapsed_ms
        );

        let _ = window_clone.show();
        let _ = window_clone.set_focus();
        close_and_destroy_loading_window();

        info!(
            "[StartupTransition] loading closed (normal path, total={}ms)",
            elapsed_ms
        );
    });

    // 显示重试：某些平台首次 show 可能失败，导致前端不挂载
    let window_for_retry = window.clone();
    tauri::async_runtime::spawn(async move {
        for attempt in 1..=20 {
            if window_for_retry.is_visible().unwrap_or(false) {
                break;
            }
            let _ = window_for_retry.show();
            if window_for_retry.is_visible().unwrap_or(false) {
                info!("[StartupTransition] config show success on attempt {}", attempt);
                // 触发挂载后立即隐藏，避免与 loading 同时可见
                let _ = window_for_retry.hide();
                break;
            }
            tokio::time::sleep(tokio::time::Duration::from_millis(120)).await;
        }
    });

    // 超时兜底：避免异常情况下卡在 loading
    tauri::async_runtime::spawn(async move {
        tokio::time::sleep(tokio::time::Duration::from_secs(10)).await;

        // 若正常路径已完成并清理了计时起点，则不再执行兜底逻辑
        let Some(started_at) = (match STARTUP_TRANSITION_STARTED_AT.lock() {
            Ok(mut started) => started.take(),
            Err(e) => {
                error!("open_config_with_loading_transition: 读取启动计时状态失败: {}", e);
                None
            }
        }) else {
            return;
        };
        let elapsed_ms = started_at.elapsed().as_millis();

        if let Some(app) = APP.get() {
            if let Some(config_window) = app.get_webview_window("config") {
                if !config_window.is_visible().unwrap_or(false) {
                    info!(
                        "[StartupTransition] timeout fallback -> show config (elapsed={}ms)",
                        elapsed_ms
                    );
                    let _ = config_window.show();
                    let _ = config_window.set_focus();
                }
            }
        }
        close_and_destroy_loading_window();

        info!(
            "[StartupTransition] loading closed (timeout fallback, total={}ms)",
            elapsed_ms
        );
    });
}

// 创建config窗口
pub fn hotkey_config() {
    // 先关闭搜索窗口（与 open_config_settings 保持一致）
    WindowManager::close_search_window_if_visible();
    
    // 定义窗口规格 - 不等待 ready_event
    let spec = WindowSpec {
        label: "config",
        url: "/#/config/category/contentList",
        title: "配置",
        width: 1180.0,
        height: 642.0,
        resizable: true,
        transparent: true,
        shadow: false,
        always_on_top: false,
        ready_event: None,
    };
    
    // 使用智能切换行为
    let window = match WindowManager::get_or_create_with_behavior(
        &spec,
        WindowShowBehavior::SmartToggle,
        None,
    ) {
        Ok(w) => w,
        Err(_) => return,
    };

    ensure_config_cleanup_listener(&window);
}

// 划词翻译快捷键处理
pub fn hotkey_selection_translate() {
    let Some(app_handle) = get_app_handle_or_log("hotkey_selection_translate").cloned() else {
        return;
    };
    
    // 给系统一点时间完成焦点转移
    std::thread::sleep(std::time::Duration::from_millis(50));
    
    // 尝试获取选中文本，支持重试
    let selected_text = get_selected_text_with_retry();
    
    let preview: String = selected_text.chars().take(50).collect();
    log::info!("[划词翻译] 最终获取的文本长度: {}, 内容预览: {}",
        selected_text.len(),
        if selected_text.len() > 50 { format!("{}...", preview) } else { selected_text.clone() }
    );
    
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

// 带重试机制的获取选中文本
fn get_selected_text_with_retry() -> String {
    // 首先尝试直接获取
    let text = get_text();
    log::info!("[划词翻译] 第1次尝试获取选中文本，长度: {}", text.len());
    if !text.trim().is_empty() {
        return text;
    }
    
    // 如果第一次失败，等待更长时间后重试
    std::thread::sleep(std::time::Duration::from_millis(150));
    
    let text = get_text();
    log::info!("[划词翻译] 第2次尝试获取选中文本，长度: {}", text.len());
    if !text.trim().is_empty() {
        return text;
    }
    
    // 第二次重试
    std::thread::sleep(std::time::Duration::from_millis(150));
    
    let text = get_text();
    log::info!("[划词翻译] 第3次尝试获取选中文本，长度: {}", text.len());
    text
}

// 翻译窗口快捷键处理
pub fn hotkey_translate() {
    let Some(app) = get_app_handle_or_log("hotkey_translate") else {
        return;
    };
    
    // 检查窗口是否已存在
    if let Some(window) = app.get_webview_window("translate") {
        // 如果窗口已经存在并且可见，则复位状态并隐藏
        if window.is_visible().unwrap_or(false) {
            let _ = window.emit("reset-state", ());
            let _ = window.hide();
            return;
        } else {
            // 窗口存在但不可见，则显示
            let _ = window.show();
            let _ = window.set_focus();
            return;
        }
    }
    
    // 窗口不存在，创建新窗口
    let spec = WindowSpec {
        label: "translate",
        url: "/#/translate",
        title: "翻译",
        width: 400.0,
        height: 500.0,
        resizable: true,
        transparent: true,
        shadow: false,
        always_on_top: false,
        ready_event: Some("translate_ready"),
    };
    
    let _ = WindowManager::get_or_create_with_behavior(
        &spec,
        WindowShowBehavior::AlwaysShow,
        None,
    );
}

// 打开翻译窗口（带选中文本）
fn open_translate_window(app_handle: &AppHandle, text: Option<String>) {
    if let Some(window) = app_handle.get_webview_window("translate") {
        // 窗口已存在，立即显示并聚焦
        let _ = window.show();
        let _ = window.set_focus();

        // 如果有文本，直接发送（窗口已存在说明前端已经准备好）
        if let Some(text) = text {
            let _ = window.emit(
                "selection-text",
                serde_json::json!({ "text": text }),
            );
        }
    } else {
        // 创建新窗口
        let spec = WindowSpec {
            label: "translate",
            url: "/#/translate",
            title: "翻译",
            width: 400.0,
            height: 500.0,
            resizable: true,
            transparent: true,
            shadow: false,
            always_on_top: false,
            ready_event: Some("translate_ready"),
        };
        
        // 如果有选中文本，在窗口准备完成后发送
        let on_ready: Option<WindowReadyCallback> = text.map(|txt| {
            Box::new(move |window: &WebviewWindow| {
                info!("翻译窗口准备完成，发送选中的文本: {}", txt);
                
                // 延迟发送事件，确保前端已经准备好监听
                let window_clone = window.clone();
                let text_clone = txt.clone();
                tauri::async_runtime::spawn(async move {
                    // 等待前端组件挂载
                    tokio::time::sleep(tokio::time::Duration::from_millis(300)).await;
                    info!("[延迟发送] 翻译窗口延迟发送选中的文本: {}", text_clone);
                    let emit_result = window_clone.emit(
                        "selection-text",
                        serde_json::json!({ "text": text_clone }),
                    );
                    info!("发送 selection-text 事件结果: {:?}", emit_result);
                });
                
                // 添加超时保护机制
                let window_clone2 = window.clone();
                let text_clone2 = txt.clone();
                tauri::async_runtime::spawn(async move {
                    tokio::time::sleep(tokio::time::Duration::from_millis(1500)).await;
                    info!("翻译窗口超时保护：尝试发送选中的文本");
                    let _ = window_clone2.emit(
                        "selection-text",
                        serde_json::json!({ "text": text_clone2 }),
                    );
                });
            }) as Box<dyn FnOnce(&WebviewWindow) + Send + 'static>
        });
        
        let _ = WindowManager::get_or_create_with_behavior(
            &spec,
            WindowShowBehavior::AlwaysShow,
            on_ready,
        );
        
        info!("创建翻译窗口并立即显示");
    }
}

// 创建update窗口
pub fn create_update_window() {
    let spec = WindowSpec {
        label: "update",
        url: "/#update",
        title: "系统更新",
        width: 520.0,
        height: 460.0,
        resizable: false,
        transparent: true,
        shadow: false,
        always_on_top: true,
        ready_event: Some("update-ready"),
    };
    
    let _ = WindowManager::get_or_create_with_behavior(
        &spec,
        WindowShowBehavior::AlwaysShow,
        None,
    );
}

// 按需创建启动 loading 窗口
pub fn show_loading_window() {
    let spec = WindowSpec {
        label: "loading",
        url: "/#/loading",
        title: "启动",
        width: 340.0,
        height: 280.0,
        resizable: false,
        transparent: true,
        shadow: false,
        always_on_top: true,
        ready_event: None,
    };

    let _ = WindowManager::get_or_create_with_behavior(
        &spec,
        WindowShowBehavior::AlwaysShow,
        None,
    );
}

// 关闭并销毁 loading 窗口
pub fn close_and_destroy_loading_window() {
    if let Some(app) = APP.get() {
        if let Some(window) = app.get_webview_window("loading") {
            let _ = window.close();
        }
    }
}

// 关闭并销毁截图窗口，避免仅隐藏不释放导致残留窗口
#[tauri::command]
pub fn close_and_destroy_screenshot_window() -> Result<(), String> {
    let app = APP.get().ok_or("无法获取应用句柄")?;


    if let Some(window) = app.get_webview_window("screenshot") {
        let _ = window.emit("screenshot-close-requested", ());
        let _ = window.set_ignore_cursor_events(false);

        match window.destroy() {
            Ok(_) => {},
            Err(e) => {
                return Err(format!("销毁截图窗口失败: {}", e));
            }
        }
    } 

    // 同步清理截图资源，防止下次快速截图复用到旧状态
    if let Err(e) = SCREENSHOT_BACKGROUND.lock().map(|mut bg| *bg = None) {
        error!("close_and_destroy_screenshot_window: 清理截图背景锁定失败: {}", e);
    }
    if let Err(e) = SCREENSHOT_PREVIEW.lock().map(|mut preview| *preview = None) {
        error!("close_and_destroy_screenshot_window: 清理截图预览锁定失败: {}", e);
    }
    if let Err(e) = CACHED_WINDOW_LIST.lock().map(|mut cached| *cached = None) {
        error!("close_and_destroy_screenshot_window: 清理窗口列表缓存锁定失败: {}", e);
    }
    if let Err(e) = CACHED_MONITOR_INFO.lock().map(|mut cached| *cached = None) {
        error!("close_and_destroy_screenshot_window: 清理显示器缓存锁定失败: {}", e);
    }
    if let Err(e) = IS_CAPTURING.lock().map(|mut capturing| *capturing = false) {
        error!("close_and_destroy_screenshot_window: 重置截图捕获状态锁定失败: {}", e);
    }

    Ok(())
}

// 显示隐藏窗口
#[tauri::command]
pub async fn show_hide_window_command(label: &str, context: Option<String>) -> Result<(), String> {
    match label {
        "search" => {
            hotkey_search(context);
        }
        "config" => {
            hotkey_config();
        }
        "config_settings" => {
            open_config_settings();
        }
        "translate" => {
            hotkey_translate();
        }
        "update" => {
            create_update_window();
        }
        "dark_mode" => {
            hotkey_dark_mode();
        }
        _ => {
            return Err("Invalid label".to_string());
        }
    }
    
    Ok(())
}

// 通知类型
pub enum NotificationType {
    // 代办提醒
    Reminder { body: String, reminder_time: Option<i64> },
    // 扫描进度
    Progress,
}

// 统一的通知窗口创建函数
pub fn create_notification_window_unified(ntype: NotificationType) -> Option<WebviewWindow> {
    let app_handle = APP.get()?;
    
    // 根据类型确定标签和是否复用
    let (label, reuse_existing) = match &ntype {
        NotificationType::Reminder { .. } => (
            format!("notification_{}", uuid::Uuid::new_v4()),
            false,
        ),
        NotificationType::Progress => (
            "notification_progress".to_string(),
            true,
        ),
    };
    
    // 进度通知：检查是否已存在窗口
    if reuse_existing {
        if let Some(window) = app_handle.get_webview_window(&label) {
            info!("通知窗口已存在，直接显示: {}", label);
            let _ = window.show();
            let _ = window.set_focus();
            return Some(window);
        }
        // 重置进度状态
        match PROGRESS_STATE.lock() {
            Ok(mut state) => *state = ScanProgressState::default(),
            Err(e) => error!("create_notification_window_unified: 重置进度状态锁定失败: {}", e),
        }
    }
    
    // 获取主显示器
    let monitor = app_handle.primary_monitor().ok()??;
    let monitor_size = monitor.size();
    let scale_factor = monitor.scale_factor();
    
    // 窗口大小和边距 (逻辑像素)
    let (window_width, window_height) = match &ntype {
        NotificationType::Reminder { .. } => (300.0, 126.0),
        NotificationType::Progress => (320.0, 120.0),
    };
    let taskbar_height = 40.0;
    let margin = 16.0;
    
    // 转换为逻辑像素计算位置
    let logical_monitor_width = monitor_size.width as f64 / scale_factor;
    let logical_monitor_height = monitor_size.height as f64 / scale_factor;
    
    // 目标位置 (逻辑像素) - 右下角
    let target_x = logical_monitor_width - window_width - margin;
    let target_y = logical_monitor_height - window_height - taskbar_height - margin;
    
    // 构建URL
    let url = match &ntype {
        NotificationType::Reminder { body, reminder_time } => {
            let mut params = vec![
                format!("label={}", urlencoding::encode(&label)),
                format!("body={}", urlencoding::encode(body)),
            ];
            if let Some(time) = reminder_time {
                params.push(format!("reminder_time={}", time));
            }
            format!("/#/notification?{}", params.join("&"))
        }
        NotificationType::Progress => {
            format!("/#/notification?label={}&type=progress", urlencoding::encode(&label))
        }
    };
    
    // 窗口标题
    let title = match &ntype {
        NotificationType::Reminder { .. } => "提醒",
        NotificationType::Progress => "索引进度",
    };
    
    // 所有通知类型都有滑入动画
    let with_animation = true;
    
    // 初始位置
    let (start_x, start_y) = if with_animation {
        // 从屏幕右侧滑入
        (logical_monitor_width, target_y)
    } else {
        // 直接在目标位置
        (target_x, target_y)
    };
    
    info!("创建通知窗口: label={}, 位置({}, {})", label, start_x, start_y);
    
    // 创建窗口
    let window = WebviewWindowBuilder::new(app_handle, &label, WebviewUrl::App(url.into()))
        .title(title)
        .inner_size(window_width, window_height)
        .position(start_x, start_y)
        .decorations(false)
        .always_on_top(true)
        .resizable(false)
        .skip_taskbar(true)
        .transparent(true)
        .focused(matches!(&ntype, NotificationType::Reminder { .. })) // 仅代办提醒需要焦点
        .visible(false)
        .build()
        .ok()?;
    
    // 监听页面准备事件
    let window_handle = window.clone();
    let target_x_anim = target_x;
    let target_y_anim = target_y;
    let start_x_anim = start_x;
    
    window.listen("notification-ready", move |_| {
        thread::sleep(Duration::from_millis(50));
        
        let _ = window_handle.show();
        
        if with_animation {
            // 滑入动画
            let animation_duration = 300.0f64;
            let frame_duration = 16.0f64;
            let total_frames = (animation_duration / frame_duration).ceil() as i32;
            let distance = start_x_anim - target_x_anim;
            let step = distance / total_frames as f64;
            
            let mut current_x = start_x_anim;
            for _ in 0..total_frames {
                current_x -= step;
                let _ = window_handle.set_position(tauri::Position::Logical(tauri::LogicalPosition {
                    x: current_x,
                    y: target_y_anim,
                }));
                thread::sleep(Duration::from_millis(frame_duration as u64));
            }
            
            // 确保最终位置正确
            let _ = window_handle.set_position(tauri::Position::Logical(tauri::LogicalPosition {
                x: target_x_anim,
                y: target_y_anim,
            }));
        }
    });
    
    // 备用方案：1秒后强制显示
    let window_fallback = window.clone();
    std::thread::spawn(move || {
        std::thread::sleep(Duration::from_millis(1000));
        if !window_fallback.is_visible().unwrap_or(true) {
            info!("备用方案：强制显示通知窗口");
            let _ = window_fallback.show();
        }
    });
    
    Some(window)
}

// 创建代办提醒通知窗口（兼容旧接口）
pub fn create_notification_window(body: &str, reminder_time: Option<i64>) -> WebviewWindow {
    create_notification_window_unified(NotificationType::Reminder {
        body: body.to_string(),
        reminder_time,
    }).expect("Failed to create notification window")
}

// 创建进度通知窗口
pub fn create_progress_notification_window() -> Option<WebviewWindow> {
    info!("尝试创建进度通知窗口...");
    create_notification_window_unified(NotificationType::Progress)
}

// 处理窗口事件的函数
pub fn handle_window_event(window: &Window, event: &WindowEvent) {
    if window.label() == "main" {
        match event {
            WindowEvent::Focused(true) => {
                // 重置失焦时间
                *LAST_FOCUS_LOST_TIME.lock().unwrap() = None;
                // 发送窗口聚焦事件
                let _ = window.emit("windowFocused", ());
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

                    // 检查是否需要自动隐藏窗口（从 app.json 读取）
                    let auto_hide_on_blur = crate::db::get_auto_hide_on_blur();

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
                                // 同时关闭预览窗口（直接调用而不是通过 command）
                                if let Some(app) = APP.get() {
                                    if let Some(preview_window) = app.get_webview_window("preview") {
                                        let _ = preview_window.close();
                                    }
                                }
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

                    // 检查是否需要自动隐藏窗口（从 app.json 读取）
                    let auto_hide_on_blur = crate::db::get_auto_hide_on_blur();

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

// 创建Auto Dark Mode窗口
pub fn hotkey_dark_mode() {
    let spec = WindowSpec {
        label: "dark_mode",
        url: "/#/dark-mode",
        title: "Auto Dark Mode",
        width: 500.0,
        height: 650.0,
        resizable: false,
        transparent: true,
        shadow: false,
        always_on_top: false,
        ready_event: Some("dark_mode_ready"),
    };
    
    let _ = WindowManager::get_or_create_with_behavior(
        &spec,
        WindowShowBehavior::SimpleToggle,
        None,
    );
}

// 扫描进度状态
#[derive(Debug, Clone, serde::Serialize, Default)]
pub struct ScanProgressState {
    pub stage: String,
    pub current: usize,
    pub total: usize,
    pub current_item: String,
    pub completed: bool,
    pub apps_count: usize,
    pub bookmarks_count: usize,
    pub desktop_files_count: usize,
}

static PROGRESS_STATE: LazyLock<Mutex<ScanProgressState>> = LazyLock::new(|| Mutex::new(ScanProgressState::default()));

// 获取扫描进度状态的命令
#[tauri::command]
pub fn get_scan_progress_state() -> ScanProgressState {
    PROGRESS_STATE.lock().unwrap().clone()
}

// 发送扫描进度事件（使用全局 emit_all 确保所有窗口都能收到）
pub fn emit_scan_progress(stage: &str, current: usize, total: usize, current_item: &str) {
    let emit_started = std::time::Instant::now();

    // 更新状态
    {
        let mut state = PROGRESS_STATE.lock().unwrap();
        state.stage = stage.to_string();
        state.current = current;
        state.total = total;
        state.current_item = current_item.to_string();
        state.completed = false;
    }

    if let Some(app) = APP.get() {
        let emit_result = app.emit("scan-progress", serde_json::json!({
            "stage": stage,
            "current": current,
            "total": total,
            "currentItem": current_item
        }));

        if let Err(e) = emit_result {
            log::error!(
                "[ProgressDiag] emit_scan_progress failed: stage={}, {}/{}, err={}",
                stage,
                current,
                total,
                e
            );
        } else {
            let elapsed_ms = emit_started.elapsed().as_millis();
            if elapsed_ms > 50 {
                log::error!(
                    "[ProgressDiag] emit_scan_progress slow: stage={}, {}/{}, elapsed={}ms, item={}",
                    stage,
                    current,
                    total,
                    elapsed_ms,
                    current_item
                );
            }
        }
    }
}

// 发送扫描完成事件
pub fn emit_scan_complete(apps_count: usize, bookmarks_count: usize, desktop_files_count: usize) {
    // 更新状态
    {
        let mut state = PROGRESS_STATE.lock().unwrap();
        state.completed = true;
        state.apps_count = apps_count;
        state.bookmarks_count = bookmarks_count;
        state.desktop_files_count = desktop_files_count;
        state.stage = format!(
            "扫描完成 (应用: {}, 书签: {}, 桌面文件: {})",
            apps_count,
            bookmarks_count,
            desktop_files_count
        );
    }

    if let Some(app) = APP.get() {
        info!(
            "发送完成事件: apps={}, bookmarks={}, desktop_files={}",
            apps_count,
            bookmarks_count,
            desktop_files_count
        );
        let _ = app.emit("scan-complete", serde_json::json!({
            "appsCount": apps_count,
            "bookmarksCount": bookmarks_count,
            "desktopFilesCount": desktop_files_count
        }));
    }
}

// 优化后的 GDI 截图函数
#[cfg(target_os = "windows")]
fn capture_screen_gdi_optimized() -> Result<(Vec<u8>, i32, i32), String> {
    use windows::Win32::Graphics::Gdi::{
        BitBlt, CreateCompatibleBitmap, CreateCompatibleDC, DeleteDC, DeleteObject, GetDC,
        GetDIBits, ReleaseDC, SelectObject, BITMAPINFO, BITMAPINFOHEADER, DIB_RGB_COLORS,
        HGDIOBJ, SRCCOPY, RGBQUAD,
    };
    use windows::Win32::UI::WindowsAndMessaging::GetDesktopWindow;

    unsafe {
        let screen_width = GetSystemMetrics(SM_CXSCREEN);
        let screen_height = GetSystemMetrics(SM_CYSCREEN);

        let desktop_dc = GetDC(Some(GetDesktopWindow()));
        if desktop_dc.is_invalid() {
            return Err("Failed to get desktop DC".to_string());
        }

        let mem_dc = CreateCompatibleDC(Some(desktop_dc));
        if mem_dc.is_invalid() {
            ReleaseDC(Some(GetDesktopWindow()), desktop_dc);
            return Err("Failed to create compatible DC".to_string());
        }

        let bitmap = CreateCompatibleBitmap(desktop_dc, screen_width, screen_height);
        if bitmap.is_invalid() {
            let _ = DeleteDC(mem_dc);
            ReleaseDC(Some(GetDesktopWindow()), desktop_dc);
            return Err("Failed to create bitmap".to_string());
        }

        let old_bitmap = SelectObject(mem_dc, HGDIOBJ(bitmap.0));

        // 直接 BitBlt 复制全屏（最高效的方式）
        let result = BitBlt(mem_dc, 0, 0, screen_width, screen_height, Some(desktop_dc), 0, 0, SRCCOPY);

        SelectObject(mem_dc, old_bitmap);

        if result.is_err() {
            let _ = DeleteObject(HGDIOBJ(bitmap.0));
            let _ = DeleteDC(mem_dc);
            ReleaseDC(Some(GetDesktopWindow()), desktop_dc);
            return Err("BitBlt failed".to_string());
        }

        // 使用 BITMAPINFOHEADER 快速读取
        let buffer_size = (screen_width * screen_height * 4) as usize;
        let mut buffer = vec![0u8; buffer_size];

        let mut bitmap_info = BITMAPINFO {
            bmiHeader: BITMAPINFOHEADER {
                biSize: std::mem::size_of::<BITMAPINFOHEADER>() as u32,
                biWidth: screen_width,
                biHeight: -screen_height,
                biPlanes: 1,
                biBitCount: 32,
                biCompression: 0,
                biSizeImage: 0,
                biXPelsPerMeter: 0,
                biYPelsPerMeter: 0,
                biClrUsed: 0,
                biClrImportant: 0,
            },
            bmiColors: [RGBQUAD::default()],
        };

        let get_result = GetDIBits(
            mem_dc,
            bitmap,
            0,
            screen_height as u32,
            Some(buffer.as_mut_ptr() as *mut core::ffi::c_void),
            &mut bitmap_info,
            DIB_RGB_COLORS,
        );

        let _ = DeleteObject(HGDIOBJ(bitmap.0));
        let _ = DeleteDC(mem_dc);
        ReleaseDC(Some(GetDesktopWindow()), desktop_dc);

        if get_result == 0 {
            return Err("GetDIBits failed".to_string());
        }

        // BGRA -> RGBA 转换
        let rgba_buffer: Vec<u8> = buffer
            .chunks_exact(4)
            .flat_map(|chunk| [chunk[2], chunk[1], chunk[0], chunk[3]])
            .collect();

        Ok((rgba_buffer, screen_width, screen_height))
    }
}

// 捕获全屏并返回 base64
#[cfg(target_os = "windows")]
fn capture_screen_and_encode() -> Result<(String, String), String> {
    use image::codecs::jpeg::JpegEncoder;

    // 使用优化后的 GDI 方式捕获
    let (rgba_data, width, height) = capture_screen_gdi_optimized()?;

    // 创建图像
    let img = image::RgbaImage::from_raw(width as u32, height as u32, rgba_data)
        .ok_or("Failed to create image")?;

    // 编码为 JPEG
    let mut jpeg_data = Vec::new();
    {
        let mut encoder = JpegEncoder::new_with_quality(&mut jpeg_data, 85);
        encoder.encode(&img, width as u32, height as u32, image::ColorType::Rgba8)
            .map_err(|e| format!("Failed to encode JPEG: {}", e))?;
    }

    let base64_str = general_purpose::STANDARD.encode(&jpeg_data);

    // 存储预览图（备用）
    {
        let mut preview = SCREENSHOT_PREVIEW.lock().unwrap();
        *preview = Some(base64_str.clone());
    }

    Ok((base64_str.clone(), base64_str))
}

// 旧的函数，保留用于兼容
#[cfg(target_os = "windows")]
fn capture_full_screen_to_base64() -> Result<(String, String), String> {
    capture_screen_and_encode()
}

// 创建截图窗口
pub fn hotkey_screenshot() {
    let app_handle = match APP.get() {
        Some(app) => app,
        None => {
            info!("无法获取应用句柄");
            return;
        }
    };

    // 检查窗口是否已存在，如果存在则先关闭（不等待）
    if let Some(existing_window) = app_handle.get_webview_window("screenshot") {
        let _ = existing_window.emit("screenshot-close-requested", ());
        let _ = existing_window.set_ignore_cursor_events(false);
        let _ = existing_window.destroy();
        
        // 只等待很短时间，避免阻塞
        thread::sleep(Duration::from_millis(50));
    }
    
    // 获取主显示器信息（同步操作，很快）
    let monitor = match app_handle.primary_monitor() {
        Ok(Some(m)) => m,
        _ => {
            info!("无法获取主显示器信息");
            return;
        }
    };
    let monitor_size = monitor.size();
    let monitor_pos = monitor.position();
    // scale_factor() 返回 f64，不需要 unwrap_or
    let scale_factor = monitor.scale_factor();

    // 【优化】立即预加载窗口列表到缓存（同步操作，很快）
    // 这样前端初始化时可以直接获取，无需等待
    let windows_result = get_all_windows();
    match windows_result {
        Ok(windows) => {
            let mut cached = CACHED_WINDOW_LIST.lock().unwrap();
            *cached = Some(windows);
            info!("窗口列表已预加载到缓存 (窗口数: {})", cached.as_ref().map(|w| w.len()).unwrap_or(0));
        }
        Err(e) => {
            info!("预加载窗口列表失败: {}", e);
        }
    }

    // 【优化】缓存显示器信息（必须在创建窗口之前完成）
    let cached_monitor = MonitorInfo {
        x: monitor_pos.x,
        y: monitor_pos.y,
        width: monitor_size.width,
        height: monitor_size.height,
        scale: scale_factor,
    };
    {
        let mut cached = CACHED_MONITOR_INFO.lock().unwrap();
        *cached = Some(cached_monitor.clone());
        info!("显示器信息已预缓存: {:?}", cached.as_ref().map(|m| format!("{}x{} @({},{}) scale:{}", m.width, m.height, m.x, m.y, m.scale)));
    }
    
    // 清除旧的背景图像，确保重新捕获
    {
        let mut bg = SCREENSHOT_BACKGROUND.lock().unwrap();
        *bg = None;
    }
    
    // 【立即开始新的捕获任务】不等待旧任务，直接开始新捕获
    let app_handle_capture = app_handle.clone();
    tauri::async_runtime::spawn(async move {
        // 尝试获取捕获锁
        let can_capture = {
            let mut is_capturing = IS_CAPTURING.lock().unwrap();
            if *is_capturing {
                // 已经有任务在捕获，强制重置
                *is_capturing = false;
            }
            *is_capturing = true;
            true
        };
        
        if !can_capture {
            return;
        }
        
        // 在后台线程捕获屏幕
        let capture_result = tokio::task::spawn_blocking(|| {
            capture_full_screen_to_base64()
        }).await;
        
        let screen_image = match capture_result {
            Ok(Ok(img)) => img,
            Ok(Err(e)) => {
                log::error!("截图屏幕捕获失败: {}", e);
                return;
            },
            Err(e) => {
                log::error!("截图捕获线程错误: {}", e);
                return;
            }
        };
        
        // 存储捕获的屏幕图像
        {
            let mut bg = SCREENSHOT_BACKGROUND.lock().unwrap();
            let mut preview = SCREENSHOT_PREVIEW.lock().unwrap();
            *bg = Some(screen_image.1);
            *preview = Some(screen_image.0);
        }
        
        // 标记捕获完成
        {
            let mut is_capturing = IS_CAPTURING.lock().unwrap();
            *is_capturing = false;
        }
        
        // 通知前端背景已准备好
        if let Some(window) = app_handle_capture.get_webview_window("screenshot") {
            let _ = window.emit("background-ready", ());
        }
    });
    
    // 【优化2】创建窗口（与屏幕捕获并行）
    let builder = WebviewWindowBuilder::new(
        app_handle,
        "screenshot",
        WebviewUrl::App("/#/screenshot".into()),
    )
    .title("截图")
    .fullscreen(true)
    .inner_size(monitor_size.width as f64, monitor_size.height as f64)
    .resizable(false)
    .always_on_top(true)
    .skip_taskbar(true)
    .transparent(true)
    .shadow(false)
    .decorations(false)
    .visible(false);

    let window = match builder.build() {
        Ok(w) => w,
        Err(e) => {
            log::error!("创建截图窗口失败: {}", e);
            return;
        }
    };


    // 【优化3】立即显示窗口，不等待背景加载
    // 监听窗口准备事件
    let window_clone = window.clone();
    window.once("screenshot_ready", move |_| {
        let _ = window_clone.show();
        let _ = window_clone.set_focus();
    });
    
    // 【优化4】添加超时保护，确保窗口一定会显示
    let window_timeout = window.clone();
    tauri::async_runtime::spawn(async move {
        tokio::time::sleep(tokio::time::Duration::from_millis(300)).await;
        if let Ok(visible) = window_timeout.is_visible() {
            if !visible {
                let _ = window_timeout.show();
                let _ = window_timeout.set_focus();
            }
        }
    });
}

// 获取窗口信息
#[tauri::command]
pub fn get_window_info() -> Result<serde_json::Value, String> {
    let app_handle = APP.get().ok_or_else(|| {
        let msg = "get_window_info: 无法获取应用句柄".to_string();
        error!("{}", msg);
        msg
    })?;
    if let Some(window) = app_handle.get_webview_window("screenshot") {
        let position = window.outer_position().unwrap_or_default();
        let scale_factor = window.scale_factor().unwrap_or(1.0);
        let is_fullscreen = window.is_fullscreen().unwrap_or(false);
        // info!(
        //     "get_window_info: x: {}, y: {}, scale: {}, fullscreen: {}",
        //     position.x, position.y, scale_factor, is_fullscreen
        // );
        Ok(serde_json::json!({
            "x": position.x,
            "y": position.y,
            "scale": scale_factor,
            "isFullscreen": is_fullscreen
        }))
    } else {
        Err("Screenshot window not found".to_string())
    }
}

// 获取预捕获的屏幕背景图像
#[tauri::command]
pub fn get_screenshot_background() -> Result<String, String> {
    let bg = SCREENSHOT_BACKGROUND.lock().unwrap();
    match bg.as_ref() {
        Some(image) => {
            if image.is_empty() {
                Err("Screenshot background is being captured".to_string())
            } else {
                Ok(image.clone())
            }
        },
        None => {
            Err("No screenshot background available".to_string())
        }
    }
}

// 获取截图预览图（JPEG格式，快速加载）
#[tauri::command]
pub fn get_screenshot_preview() -> Result<String, String> {
    let preview = SCREENSHOT_PREVIEW.lock().unwrap();
    match preview.as_ref() {
        Some(image) => {
            if image.is_empty() {
                Err("Screenshot preview is being captured".to_string())
            } else {
                Ok(image.clone())
            }
        },
        None => {
            Err("No screenshot preview available".to_string())
        }
    }
}

// 获取预缓存的窗口列表（用于快速截图初始化）
#[tauri::command]
pub fn get_cached_window_list() -> Result<Vec<WindowInfo>, String> {
    let cached = CACHED_WINDOW_LIST.lock().unwrap();
    match cached.as_ref() {
        Some(windows) => Ok(windows.clone()),
        None => Err("No cached window list available".to_string())
    }
}

// 获取预缓存的显示器信息（用于快速截图初始化）
#[tauri::command]
pub fn get_cached_monitor_info() -> Result<MonitorInfo, String> {
    let cached = CACHED_MONITOR_INFO.lock().unwrap();
    match cached.as_ref() {
        Some(info) => Ok(info.clone()),
        None => Err("No cached monitor info available".to_string())
    }
}

// 清理截图背景缓存（窗口关闭时调用）
#[tauri::command]
pub fn clear_screenshot_background() {
    {
        let mut bg = SCREENSHOT_BACKGROUND.lock().unwrap();
        *bg = None;
    }
    {
        let mut preview = SCREENSHOT_PREVIEW.lock().unwrap();
        *preview = None;
    }
    info!("截图背景缓存已清理");
}

// 清理所有截图相关的缓存和状态（可选的深度清理）
#[tauri::command]
pub fn cleanup_screenshot_resources() {
    // 清理截图背景
    {
        let mut bg = SCREENSHOT_BACKGROUND.lock().unwrap();
        *bg = None;
    }
    // 清理截图预览
    {
        let mut preview = SCREENSHOT_PREVIEW.lock().unwrap();
        *preview = None;
    }
    // 清理预缓存的窗口列表
    {
        let mut cached = CACHED_WINDOW_LIST.lock().unwrap();
        *cached = None;
    }
    // 清理预缓存的显示器信息
    {
        let mut cached = CACHED_MONITOR_INFO.lock().unwrap();
        *cached = None;
    }

    // 重置捕获状态
    {
        let mut capturing = IS_CAPTURING.lock().unwrap();
        *capturing = false;
    }

    info!("所有截图资源已清理");
}

// 复制图像到剪贴板
#[tauri::command]
pub fn copy_to_clipboard(app_handle: AppHandle, image: String) -> Result<(), String> {
    let base64_data = image.split(',').nth(1).unwrap_or(&image);

    let image_bytes = general_purpose::STANDARD
        .decode(base64_data)
        .map_err(|e| format!("Failed to decode base64 image: {}", e))?;

    let img = image::load_from_memory(&image_bytes)
        .map_err(|e| format!("Failed to load image from memory: {}", e))?;

    let (width, height) = img.dimensions();
    let rgba_bytes = img.to_rgba8().into_raw();

    let clipboard = app_handle.clipboard();
    let clipboard_image = Image::new(&rgba_bytes, width, height);

    clipboard
        .write_image(&clipboard_image)
        .map_err(|e| format!("Failed to write image to clipboard: {}", e))
}

// 获取指定位置的像素颜色
#[tauri::command]
pub fn get_pixel_color(x: i32, y: i32) -> Result<serde_json::Value, String> {
    info!("get_pixel_color: x: {}, y: {}", x, y);

    #[cfg(target_os = "windows")]
    {
        use windows::Win32::Graphics::Gdi::{
            BitBlt, CreateCompatibleBitmap, CreateCompatibleDC, DeleteDC, DeleteObject, GetDC,
            GetDIBits, ReleaseDC, SelectObject, BITMAPINFO, BITMAPINFOHEADER, DIB_RGB_COLORS,
            HGDIOBJ, RGBQUAD, SRCCOPY,
        };
        use windows::Win32::UI::WindowsAndMessaging::GetDesktopWindow;

        unsafe {
            // 获取桌面窗口的DC
            let desktop_dc = GetDC(Some(GetDesktopWindow()));
            if desktop_dc.is_invalid() {
                return Err("Failed to get desktop DC".to_string());
            }

            // 创建兼容的DC
            let mem_dc = CreateCompatibleDC(Some(desktop_dc));
            if mem_dc.is_invalid() {
                ReleaseDC(Some(GetDesktopWindow()), desktop_dc);
                return Err("Failed to create compatible DC".to_string());
            }

            // 创建兼容的位图，只需要1x1像素
            let bitmap = CreateCompatibleBitmap(desktop_dc, 1, 1);
            if bitmap.is_invalid() {
                let _ = DeleteDC(mem_dc);
                ReleaseDC(Some(GetDesktopWindow()), desktop_dc);
                return Err("Failed to create compatible bitmap".to_string());
            }

            // 选择位图到DC
            let old_bitmap = SelectObject(mem_dc, HGDIOBJ(bitmap.0));

            // 复制指定像素到位图
            let result = BitBlt(mem_dc, 0, 0, 1, 1, Some(desktop_dc), x, y, SRCCOPY);

            if result.is_err() {
                SelectObject(mem_dc, old_bitmap);
                let _ = DeleteObject(HGDIOBJ(bitmap.0));
                let _ = DeleteDC(mem_dc);
                ReleaseDC(Some(GetDesktopWindow()), desktop_dc);
                return Err("Failed to copy pixel".to_string());
            }

            // 准备位图信息
            let mut bitmap_info = BITMAPINFO {
                bmiHeader: BITMAPINFOHEADER {
                    biSize: std::mem::size_of::<BITMAPINFOHEADER>() as u32,
                    biWidth: 1,
                    biHeight: -1, // 负值表示自上而下的DIB
                    biPlanes: 1,
                    biBitCount: 32,
                    biCompression: 0, // BI_RGB is 0
                    biSizeImage: 0,
                    biXPelsPerMeter: 0,
                    biYPelsPerMeter: 0,
                    biClrUsed: 0,
                    biClrImportant: 0,
                },
                bmiColors: [RGBQUAD::default()],
            };

            // 分配内存存储像素数据 (BGRA 格式)
            let mut buffer = [0u8; 4];

            // 获取位图数据
            let result = GetDIBits(
                mem_dc,
                bitmap,
                0,
                1,
                Some(buffer.as_mut_ptr() as *mut core::ffi::c_void),
                &mut bitmap_info,
                DIB_RGB_COLORS,
            );

            // 清理资源
            SelectObject(mem_dc, old_bitmap);
            let _ = DeleteObject(HGDIOBJ(bitmap.0));
            let _ = DeleteDC(mem_dc);
            ReleaseDC(Some(GetDesktopWindow()), desktop_dc);

            if result == 0 {
                return Err("Failed to get pixel data".to_string());
            }

            // BGRA -> RGB
            let r = buffer[2];
            let g = buffer[1];  
            let b = buffer[0];

            // 返回RGB值
            Ok(serde_json::json!({
                "r": r,
                "g": g,
                "b": b
            }))
        }
    }

    #[cfg(not(target_os = "windows"))]
    {
        Err("Pixel color detection not implemented for this platform".to_string())
    }
}

// 获取屏幕预览图像
#[tauri::command]
pub fn get_screen_preview(
    x: i32,
    y: i32,
    width: i32,
    height: i32,
) -> Result<serde_json::Value, String> {
    // 此函数逻辑与 capture_screen_area 非常相似，但不隐藏窗口
    #[cfg(target_os = "windows")]
    {
        use windows::Win32::Graphics::Gdi::{
            BitBlt, CreateCompatibleBitmap, CreateCompatibleDC, DeleteDC, DeleteObject, GetDC,
            GetDIBits, ReleaseDC, SelectObject, BITMAPINFO, BITMAPINFOHEADER, DIB_RGB_COLORS,
            HGDIOBJ, SRCCOPY
        };
        use windows::Win32::UI::WindowsAndMessaging::GetDesktopWindow;

        unsafe {
            let desktop_dc = GetDC(Some(GetDesktopWindow()));
            if desktop_dc.is_invalid() {
                return Err("Failed to get desktop DC".to_string());
            }

            let mem_dc = CreateCompatibleDC(Some(desktop_dc));
            if mem_dc.is_invalid() {
                ReleaseDC(Some(GetDesktopWindow()), desktop_dc);
                return Err("Failed to create compatible DC".to_string());
            }

            let bitmap = CreateCompatibleBitmap(desktop_dc, width, height);
            if bitmap.is_invalid() {
                let _ = DeleteDC(mem_dc);
                ReleaseDC(Some(GetDesktopWindow()), desktop_dc);
                return Err("Failed to create compatible bitmap".to_string());
            }

            let old_bitmap = SelectObject(mem_dc, HGDIOBJ(bitmap.0));

            BitBlt(mem_dc, 0, 0, width, height, Some(desktop_dc), x, y, SRCCOPY)
                .map_err(|_| "Failed to copy screen content".to_string())?;

            let mut bitmap_info = BITMAPINFO {
                bmiHeader: BITMAPINFOHEADER {
                    biSize: std::mem::size_of::<BITMAPINFOHEADER>() as u32,
                    biWidth: width,
                    biHeight: -height,
                    biPlanes: 1,
                    biBitCount: 32,
                    biCompression: 0,
                    ..Default::default()
                },
                ..Default::default()
            };

            let buffer_size = (width * height * 4) as usize;
            let mut buffer = vec![0u8; buffer_size];

            GetDIBits(
                mem_dc,
                bitmap,
                0,
                height as u32,
                Some(buffer.as_mut_ptr() as *mut core::ffi::c_void),
                &mut bitmap_info,
                DIB_RGB_COLORS,
            );

            SelectObject(mem_dc, old_bitmap);
            let _ = DeleteObject(HGDIOBJ(bitmap.0));
            let _ = DeleteDC(mem_dc);
            ReleaseDC(Some(GetDesktopWindow()), desktop_dc);

            let mut rgba_buffer = vec![0u8; buffer_size];
            for i in 0..(width * height) as usize {
                rgba_buffer[i * 4] = buffer[i * 4 + 2]; // R
                rgba_buffer[i * 4 + 1] = buffer[i * 4 + 1]; // G
                rgba_buffer[i * 4 + 2] = buffer[i * 4]; // B
                rgba_buffer[i * 4 + 3] = 255; // A
            }

            let img = image::RgbaImage::from_raw(width as u32, height as u32, rgba_buffer)
                .ok_or("Failed to create image from raw data")?;

            let mut png_data = Vec::new();
            img.write_to(
                &mut std::io::Cursor::new(&mut png_data),
                image::ImageFormat::Png,
            )
            .map_err(|e| format!("Failed to encode PNG: {}", e))?;

            let base64_data = general_purpose::STANDARD.encode(&png_data);

            Ok(serde_json::json!({ "image": base64_data }))
        }
    }

    #[cfg(not(target_os = "windows"))]
    {
        Err("Screen preview not implemented for this platform".to_string())
    }
}


// 保存截图到文件
#[tauri::command]
pub async fn save_screenshot_to_file(app_handle: AppHandle, image: String) -> Result<String, String> {
    use std::sync::Arc;
    use tokio::task;
    
    // 提取base64数据
    let base64_data = image.split(',').nth(1).unwrap_or(&image);

    let image_bytes = general_purpose::STANDARD
        .decode(base64_data)
        .map_err(|e| format!("Failed to decode base64 image: {}", e))?;

    // 使用image crate加载图像
    let img = image::load_from_memory(&image_bytes)
        .map_err(|e| format!("Failed to load image from memory: {}", e))?;

    // 获取桌面目录
    let desktop = dirs::desktop_dir().ok_or("Cannot find desktop directory")?;

    // 生成默认文件名（使用当前时间戳）
    let timestamp = chrono::Utc::now().format("%Y%m%d_%H%M%S");
    let default_filename = format!("screenshot_{}.png", timestamp);

    // 将app_handle包装为Arc以便在异步任务中使用
    let app_handle = Arc::new(app_handle);
    
    // 在单独的任务中显示保存文件对话框，避免阻塞主线程
    let selected_path = task::spawn_blocking({
        let app_handle = Arc::clone(&app_handle);
        let default_filename = default_filename.clone();
        let desktop = desktop.clone();
        move || {
            app_handle
                .dialog()
                .file()
                .add_filter("PNG Image", &["png"])
                .add_filter("JPEG Image", &["jpg", "jpeg"])
                .add_filter("All Files", &["*"])
                .set_file_name(&default_filename)
                .set_directory(desktop)
                .blocking_save_file()
        }
    }).await.map_err(|e| format!("Dialog task failed: {}", e))?;

    if let Some(selected_path) = selected_path {
        let path = selected_path.as_path().ok_or_else(|| {
            let msg = "保存截图失败: 选择的文件路径无效".to_string();
            error!("save_screenshot_to_file: {}", msg);
            msg
        })?;

        // 根据文件扩展名确定格式
        let format = match path.extension().and_then(|s| s.to_str()) {
            Some("jpg") | Some("jpeg") => image::ImageFormat::Jpeg,
            Some("png") => image::ImageFormat::Png,
            _ => image::ImageFormat::Png, // 默认使用PNG
        };

        // 在单独的任务中保存图像，避免阻塞主线程
        let path_clone = path.to_path_buf();
        task::spawn_blocking(move || {
            img.save_with_format(&path_clone, format)
        }).await.map_err(|e| format!("Save task failed: {}", e))?
        .map_err(|e| format!("Failed to save image: {}", e))?;

        Ok(format!("截图已保存到: {}", path.display()))
    } else {
        // 用户取消保存，返回特殊错误码让前端区分
        Err("SAVE_CANCELLED".to_string())
    }
}

// 创建贴图窗口命令
#[tauri::command]
pub async fn create_pin_window(
    app_handle: AppHandle,
    image_data: String,
    x: i32,
    y: i32,
    width: i32,
    height: i32,
) -> Result<String, String> {
    
    // 生成唯一的窗口标签
    let window_label = format!("pin_{}", uuid::Uuid::new_v4());
    
    // 存储图片数据到全局静态变量
    {
        let mut data_map = PIN_IMAGE_DATA.lock().map_err(|e| {
            let msg = format!("create_pin_window: 图片数据缓存锁定失败: {}", e);
            error!("{}", msg);
            msg
        })?;
        data_map.insert(window_label.clone(), image_data);
        info!("图片数据已存储，窗口标签: {}", window_label);
    }
    
    // 获取缩放因子
    let scale_factor = if let Some(window) = app_handle.get_webview_window("screenshot") {
        window.scale_factor().unwrap_or(1.0)
    } else {
        1.0
    };
    
    // 转换为逻辑像素
    let window_width = (width as f64) / scale_factor;
    let window_height = (height as f64) / scale_factor;
    let window_x = (x as f64) / scale_factor;
    let window_y = (y as f64) / scale_factor;

    let label_clone = window_label.clone();
    let app_handle_clone = app_handle.clone();
    
    // 在单独的任务中创建窗口，避免阻塞
    let result = tokio::task::spawn_blocking(move || {
        let builder = WebviewWindowBuilder::new(
            &app_handle_clone,
            &label_clone,
            WebviewUrl::App("/#pin".into()),
        )
        .title("贴图")
        .inner_size(window_width, window_height)
        .position(window_x, window_y)
        .decorations(false)
        .always_on_top(true)
        .resizable(false)
        .skip_taskbar(true)
        .transparent(true)
        .shadow(false)
        .focused(true)
        .visible(true);
        builder.build()
    }).await;
    
    let window = match result {
        Ok(Ok(w)) => {
            info!("贴图窗口 build() 成功");
            w
        },
        Ok(Err(e)) => {
            let error_msg = format!("创建贴图窗口失败: {}", e);
            error!("create_pin_window: {}", error_msg);
            // 创建失败时清理数据
            if let Err(lock_err) = PIN_IMAGE_DATA.lock().map(|mut data| data.remove(&window_label)) {
                error!("create_pin_window: 清理图片数据缓存失败: {}", lock_err);
            }
            return Err(error_msg);
        },
        Err(e) => {
            let error_msg = format!("窗口创建任务失败: {}", e);
            error!("create_pin_window: {}", error_msg);
            if let Err(lock_err) = PIN_IMAGE_DATA.lock().map(|mut data| data.remove(&window_label)) {
                error!("create_pin_window: 清理图片数据缓存失败: {}", lock_err);
            }
            return Err(error_msg);
        }
    };

    info!("贴图窗口创建成功: {}", window_label);
    
    // 立即发送图片数据到窗口（不等待前端请求）
    let image_data = match PIN_IMAGE_DATA.lock() {
        Ok(data_map) => data_map.get(&window_label).cloned(),
        Err(e) => {
            error!("create_pin_window: 读取图片数据缓存失败: {}", e);
            None
        }
    };
    
    if let Some(img_data) = image_data {
        info!("准备发送图片数据到窗口: {} bytes", img_data.len());
        let label_for_emit = window_label.clone();
        let app_for_emit = app_handle.clone();
        
        // 多次尝试发送数据，确保前端已经准备好
        tauri::async_runtime::spawn(async move {
            // 初始延迟 800ms，确保前端页面已加载（处理快速操作场景）
            tokio::time::sleep(tokio::time::Duration::from_millis(800)).await;
            
            // 发送多次确保前端接收到（emit_to 成功不代表前端已监听）
            for attempt in 1..=5 {
                info!("尝试第 {} 次发送图片数据到窗口: {}", attempt, label_for_emit);
                
                // 使用 emit_to 明确指定目标窗口
                match app_for_emit.emit_to(&label_for_emit, "pin-image-data", serde_json::json!({
                    "imageData": img_data.clone()
                })) {
                    Ok(_) => {
                        info!("第 {} 次发送成功（emit_to），停止继续发送", attempt);
                        // 成功后立即停止，避免前端重复渲染
                        break;
                    },
                    Err(e) => {
                        info!("第 {} 次发送失败: {}", attempt, e);
                        if attempt < 5 {
                            // 每次失败后等待 300ms 再重试
                            tokio::time::sleep(tokio::time::Duration::from_millis(300)).await;
                        } else {
                            info!("已尝试 5 次，放弃发送");
                        }
                    }
                }
            }
        });
    }
    
    // 监听窗口关闭事件，清理数据
    let label_for_cleanup = window_label.clone();
    window.on_window_event(move |event| {
        if let WindowEvent::Destroyed = event {
            if let Err(e) = PIN_IMAGE_DATA.lock().map(|mut data| data.remove(&label_for_cleanup)) {
                error!("create_pin_window: 窗口销毁时清理图片数据失败: {}", e);
            }
            info!("贴图窗口已关闭，清理数据: {}", label_for_cleanup);
        }
    });
    
    info!("返回窗口标签: {}", window_label);
    Ok(window_label)
}

// 复制图片到剪贴板（用于贴图窗口）
#[tauri::command]
pub fn copy_image_to_clipboard(app_handle: AppHandle, image_data: String) -> Result<(), String> {
    copy_to_clipboard(app_handle, image_data)
}

// 保存贴图图片
#[tauri::command]
pub async fn save_pin_image(app_handle: AppHandle, image_data: String) -> Result<String, String> {
    save_screenshot_to_file(app_handle, image_data).await
}

// 前端日志转发到后台
#[tauri::command]
pub fn frontend_log(level: String, message: String, data: Option<String>) {
    if level.as_str() != "error" {
        return;
    }

    let log_msg = if let Some(d) = data {
        format!("[Frontend] {} - {}", message, d)
    } else {
        format!("[Frontend] {}", message)
    };

    log::error!("{}", log_msg);
}

// 获取所有窗口信息
#[tauri::command]
pub fn get_all_windows() -> Result<Vec<WindowInfo>, String> {
    let mut windows = Vec::new();

    #[cfg(target_os = "windows")]
    {
        // Windows平台实现
        unsafe {
            // 定义回调函数
            unsafe extern "system" fn enum_windows_callback(hwnd: HWND, lparam: LPARAM) -> BOOL {
                let windows = &mut *(lparam.0 as *mut Vec<WindowInfo>);
                
                // 多重检查窗口是否应该包含在列表中
                if should_include_window(hwnd) {
                    // 使用 DwmGetWindowAttribute 获取窗口的实际内容区域（排除阴影）
                    let mut rect = RECT::default();
                    let dwm_result = windows::Win32::Graphics::Dwm::DwmGetWindowAttribute(
                        hwnd,
                        windows::Win32::Graphics::Dwm::DWMWINDOWATTRIBUTE(9), // DWMWA_EXTENDED_FRAME_BOUNDS = 9
                        &mut rect as *mut _ as *mut _,
                        std::mem::size_of::<RECT>() as u32,
                    );
                    
                    // 如果 DWM API 失败，回退到 GetWindowRect
                    if dwm_result.is_err()
                        && GetWindowRect(hwnd, &mut rect).is_err() {
                            return BOOL(1); // 继续枚举
                        }
                    
                    // 获取窗口标题
                    let mut title_buffer = [0u16; 256];
                    let title_len = GetWindowTextW(hwnd, &mut title_buffer);
                    let title = String::from_utf16_lossy(&title_buffer[..title_len as usize]);
                    
                    let width = rect.right - rect.left;
                    let height = rect.bottom - rect.top;
                    
                    if !title.is_empty() && 
                       rect.right > rect.left && 
                       rect.bottom > rect.top &&
                       width >= 100 &&
                       height >= 100 &&
                       is_valid_window_title(&title) {
                        let z_order = get_window_z_order(hwnd);
                        let is_fullscreen = is_fullscreen_window(hwnd);
                        
                        // 如果是全屏窗口，将尺寸限制为屏幕尺寸
                        let screen_width = GetSystemMetrics(SM_CXSCREEN);
                        let screen_height = GetSystemMetrics(SM_CYSCREEN);
                        let final_width = if is_fullscreen { screen_width.min(width) } else { width };
                        let final_height = if is_fullscreen { screen_height.min(height) } else { height };
                        let final_x = if is_fullscreen { 0 } else { rect.left };
                        let final_y = if is_fullscreen { 0 } else { rect.top };
                        
                        windows.push(WindowInfo {
                            x: final_x,
                            y: final_y,
                            width: final_width,
                            height: final_height,
                            title,
                            z_order,
                            is_fullscreen,
                            display_order: 0,
                        });
                    }
                }
                
                BOOL(1) // 继续枚举
            }
            
            // 辅助函数：获取窗口的Z-order（层级）
            unsafe fn get_window_z_order(hwnd: HWND) -> i32 {
                let mut z_order = 0;
                let mut current_hwnd_result = GetTopWindow(None);
                
                while let Ok(current_hwnd) = current_hwnd_result {
                    if current_hwnd.0.is_null() {
                        break;
                    }
                    
                    if current_hwnd == hwnd {
                        return z_order;
                    }
                    
                    z_order += 1;
                    current_hwnd_result = GetWindow(current_hwnd, GW_HWNDNEXT);
                }
                
                // 如果没有找到，返回一个很大的值，表示层级很低
                999999
            }
            
            unsafe fn should_include_window(hwnd: HWND) -> bool {
                if !IsWindowVisible(hwnd).as_bool() {
                    return false;
                }
                
                if IsIconic(hwnd).as_bool() {
                    return false;
                }
                
                let ex_style = GetWindowLongW(hwnd, GWL_EXSTYLE) as u32;
                
                if (ex_style & WS_EX_TOOLWINDOW.0) != 0 {
                    return false;
                }
                
                if let Ok(parent) = GetParent(hwnd) {
                    if !parent.0.is_null() && (ex_style & WS_EX_APPWINDOW.0) == 0 {
                        return false;
                    }
                }
                
                if let Ok(owner) = GetWindow(hwnd, GW_OWNER) {
                    if !owner.0.is_null() && (ex_style & WS_EX_APPWINDOW.0) == 0 {
                        return false;
                    }
                }
                
                let mut class_name_buffer = [0u16; 256];
                let class_name_len = GetClassNameW(hwnd, &mut class_name_buffer);
                let class_name = String::from_utf16_lossy(&class_name_buffer[..class_name_len as usize]);
                
                if is_system_class(&class_name) {
                    return false;
                }
                
                let mut rect = RECT::default();
                if GetWindowRect(hwnd, &mut rect).is_ok() {
                    let window_width = rect.right - rect.left;
                    let window_height = rect.bottom - rect.top;
                    let screen_width = GetSystemMetrics(SM_CXSCREEN);
                    let screen_height = GetSystemMetrics(SM_CYSCREEN);
                    
                    // 允许全屏窗口略微超出屏幕尺寸（容差50px），因为全屏窗口可能包含边框
                    let tolerance = 50;
                    if window_width > screen_width + tolerance || window_height > screen_height + tolerance {
                        return false;
                    }
                }
                
                true
            }
            
            unsafe fn is_fullscreen_window(hwnd: HWND) -> bool {
                let mut rect = RECT::default();
                if GetWindowRect(hwnd, &mut rect).is_err() {
                    return false;
                }
                
                let screen_width = GetSystemMetrics(SM_CXSCREEN);
                let screen_height = GetSystemMetrics(SM_CYSCREEN);
                
                let window_width = rect.right - rect.left;
                let window_height = rect.bottom - rect.top;
                
                let size_threshold = 85;
                let position_tolerance = 20;
                
                let is_large_window = window_width >= screen_width * size_threshold / 100 &&
                                    window_height >= screen_height * size_threshold / 100;
                                       
                let is_near_screen_edge = rect.left <= position_tolerance && 
                                        rect.top <= position_tolerance;
                
                let screen_coverage_x = (window_width as f64) / (screen_width as f64);
                let screen_coverage_y = (window_height as f64) / (screen_height as f64);
                let is_mostly_fullscreen = screen_coverage_x >= 0.9 && screen_coverage_y >= 0.9;
                
                (is_large_window && is_near_screen_edge) || is_mostly_fullscreen
            }
            
            // 辅助函数：检查是否为系统类名
            fn is_system_class(class_name: &str) -> bool {
                matches!(class_name,
                    "Progman" | "WorkerW" | "Shell_TrayWnd" | "DV2ControlHost" | 
                    "MsgrIMEWindowClass" | "SysShadow" | "Button" | "Ghost" |
                    "IME" | "Default IME" | "MSCTFIME UI" | "ApplicationFrameWindow" |
                    "Windows.UI.Core.CoreWindow" | "Shell_SecondaryTrayWnd" |
                    "NotifyIconOverflowWindow" | "NativeHWNDHost" | "HwndWrapper"
                )
            }
            
            // 辅助函数：检查窗口标题是否有效
            fn is_valid_window_title(title: &str) -> bool {
                // 过滤无关的窗口标题
                !matches!(title,
                    "Program Manager" | "Settings" | "Microsoft Text Input Application" |
                    "Windows Input Experience" | "Microsoft Store" | "Calculator" |
                    "Windows Security" | "" | "Desktop" | "TaskManager" | "msrdc" |
                    "dwm" | "winlogon" | "csrss" | "lsass" | "services" | "smss" |
                    "System" | "Registry" | "Windows Shell Experience Host" |
                    "Desktop Window Manager" | "Window Manager" | "explorer" |
                    "Windows PowerShell" | "Command Prompt" | "Cortana" |
                    "Action Center" | "Volume Control" | "Network Connections" |
                    "Task Manager" | "截图"  // 过滤截图窗口本身
                ) && 
                !title.starts_with("Desktop") &&
                !title.starts_with("NVIDIA") &&
                !title.starts_with("Intel") &&
                !title.starts_with("AMD") &&
                !title.contains("Background Task Host") &&
                !title.contains("Runtime Broker") &&
                !title.contains("Service Host") &&
                !title.contains("Windows Modules Installer") &&
                !title.contains("Desktop Window Manager") &&
                !title.contains("screenshot") &&  // 过滤可能的英文截图标题
                !title.contains("Screenshot") &&
                title.len() > 1  // 至少要有实际内容
            }
            
            // 枚举所有窗口
            let _ = EnumWindows(
                Some(enum_windows_callback),
                LPARAM(&mut windows as *mut Vec<WindowInfo> as isize),
            );
            
            // 排序：按Z-order排序（z_order值越小表示层级越高，即最顶层的窗口）
            windows.sort_by(|a: &WindowInfo, b: &WindowInfo| {
                a.z_order.cmp(&b.z_order)
            });
            
            // 过滤被遮挡的窗口
            let mut filtered_windows: Vec<WindowInfo> = Vec::new();
            for mut window in windows {
                let is_occluded = filtered_windows.iter()
                    .any(|higher_window| {
                        let overlap = calculate_overlap_area(&window, higher_window);
                        let area = window.width * window.height;
                        area > 0 && overlap as f64 / area as f64 > 0.2
                    });
                
                if !is_occluded {
                    window.display_order = filtered_windows.len() as i32;
                    filtered_windows.push(window);
                }
            }
            
            windows = filtered_windows;
        }
    }

    #[cfg(not(target_os = "windows"))]
    {
        return Err("Window enumeration not implemented for this platform".to_string());
    }

    Ok(windows)
}

// 计算两个窗口的重叠面积
#[cfg(target_os = "windows")]
fn calculate_overlap_area(window1: &WindowInfo, window2: &WindowInfo) -> i32 {
    let left = std::cmp::max(window1.x, window2.x);
    let top = std::cmp::max(window1.y, window2.y);
    let right = std::cmp::min(window1.x + window1.width, window2.x + window2.width);
    let bottom = std::cmp::min(window1.y + window1.height, window2.y + window2.height);
    
    if left < right && top < bottom {
        (right - left) * (bottom - top)
    } else {
        0
    }
}

// ==================== 设置向导窗口 ====================

// 创建设置向导窗口
pub fn create_setup_window() {
    let spec = WindowSpec {
        label: "setup",
        url: "/#/setup",
        title: "设置向导",
        width: 720.0,
        height: 540.0,
        resizable: false,
        transparent: true,
        shadow: false,
        always_on_top: false,
        ready_event: Some("setup_ready"),
    };
    
    let _ = WindowManager::get_or_create_with_behavior(
        &spec,
        WindowShowBehavior::AlwaysShow,
        None,
    );
}

// 关闭设置向导窗口并重启应用
#[tauri::command]
pub fn close_setup_window() {
    let app = match APP.get() {
        Some(app) => app,
        None => return,
    };
    
    info!("设置完成，正在重启应用...");
    
    // 重启应用以使用新的数据库路径
    app.restart();
}
