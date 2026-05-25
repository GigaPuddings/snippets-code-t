use log::{info, warn};
use serde::{Deserialize, Serialize};
use std::fs::{self, File, OpenOptions};
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::{LazyLock, Mutex};
use std::thread;
use std::time::{Duration, Instant};
use tauri::{AppHandle, Listener, Manager, WebviewUrl, WebviewWindowBuilder};

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

const PLUGIN_ID: &str = "screen-recorder";

static RECORDING_SESSION: LazyLock<Mutex<Option<RecordingSession>>> =
    LazyLock::new(|| Mutex::new(None));
static PASSTHROUGH_STATE: LazyLock<Mutex<PassthroughState>> =
    LazyLock::new(|| Mutex::new(PassthroughState::default()));

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RecordingRegion {
    x: f64,
    y: f64,
    width: f64,
    height: f64,
    screen_x: i32,
    screen_y: i32,
    physical_width: u32,
    physical_height: u32,
    scale: f64,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PassthroughRegion {
    x: i32,
    y: i32,
    width: i32,
    height: i32,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SnapWindowRegion {
    screen_x: i32,
    screen_y: i32,
    physical_width: u32,
    physical_height: u32,
    title: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct FfmpegStatus {
    available: bool,
    path: Option<String>,
    source: Option<String>,
    searched_paths: Vec<String>,
    message: Option<String>,
    audio_devices: Vec<String>,
    system_audio_available: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RecordingExportResult {
    path: String,
    size_bytes: u64,
    width: u32,
    height: u32,
    format: String,
    has_audio: bool,
    audio_device: Option<String>,
    debug_log_path: Option<String>,
}

struct FfmpegLocation {
    path: PathBuf,
    source: String,
}

struct RecordingSession {
    id: String,
    temp_dir: PathBuf,
    region: RecordingRegion,
    fps: u32,
    quality: String,
    audio: bool,
    audio_device: Option<String>,
    next_segment_index: usize,
    segments: Vec<PathBuf>,
    segment_logs: Vec<PathBuf>,
    child: Option<Child>,
    stopped: bool,
    started_at: Instant,
}

#[derive(Default)]
struct PassthroughState {
    region: Option<PassthroughRegion>,
    running: bool,
    last_ignored: bool,
}

fn require_plugin(app_handle: &AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, PLUGIN_ID)
}

fn display_path(path: &Path) -> String {
    path.to_string_lossy().to_string()
}

fn debug_log_path(temp_dir: &Path) -> PathBuf {
    temp_dir.join("debug.log")
}

fn timestamp_text() -> String {
    chrono::Local::now().format("%Y-%m-%d %H:%M:%S%.3f").to_string()
}

fn append_debug_log(temp_dir: &Path, message: impl AsRef<str>) {
    let path = debug_log_path(temp_dir);
    let line = format!("[{}] {}\n", timestamp_text(), message.as_ref());
    if let Err(error) = OpenOptions::new()
        .create(true)
        .append(true)
        .open(&path)
        .and_then(|mut file| file.write_all(line.as_bytes()))
    {
        warn!(
            "[Plugin:screen-recorder] write debug log failed {}: {}",
            display_path(&path),
            error
        );
    }
}

fn append_debug_block(temp_dir: &Path, title: &str, content: &[u8]) {
    let text = String::from_utf8_lossy(content);
    if text.trim().is_empty() {
        return;
    }
    append_debug_log(temp_dir, format!("{}:\n{}", title, text.trim_end()));
}

fn quote_command_part(value: &str) -> String {
    if value.is_empty()
        || value
            .chars()
            .any(|ch| ch.is_whitespace() || matches!(ch, '"' | '\'' | '&' | '|' | '<' | '>'))
    {
        format!("\"{}\"", value.replace('"', "\\\""))
    } else {
        value.to_string()
    }
}

fn format_command_line(program: &Path, args: &[String]) -> String {
    std::iter::once(quote_command_part(&display_path(program)))
        .chain(args.iter().map(|arg| quote_command_part(arg)))
        .collect::<Vec<_>>()
        .join(" ")
}

fn candidate_paths(app_handle: &AppHandle) -> Vec<(PathBuf, String)> {
    let mut paths = Vec::new();

    if let Ok(value) = std::env::var("SNIPPETS_FFMPEG_PATH") {
        if !value.trim().is_empty() {
            paths.push((PathBuf::from(value), "env:SNIPPETS_FFMPEG_PATH".to_string()));
        }
    }
    if let Ok(value) = std::env::var("FFMPEG_PATH") {
        if !value.trim().is_empty() {
            paths.push((PathBuf::from(value), "env:FFMPEG_PATH".to_string()));
        }
    }

    for relative in [
        "resources/ffmpeg/ffmpeg.exe",
        "resources/ffmpeg/bin/ffmpeg.exe",
    ] {
        if let Ok(Some(path)) = crate::app_config::get_local_plugin_resource_path(
            app_handle.clone(),
            PLUGIN_ID.to_string(),
            relative.to_string(),
        ) {
            paths.push((
                PathBuf::from(path),
                format!("plugin:{}:{}", PLUGIN_ID, relative),
            ));
        }
        if let Ok(Some(path)) = crate::app_config::get_local_plugin_resource_path(
            app_handle.clone(),
            "screen-recorder-ffmpeg".to_string(),
            relative.to_string(),
        ) {
            paths.push((
                PathBuf::from(path),
                format!("plugin:screen-recorder-ffmpeg:{}", relative),
            ));
        }
    }

    if let Ok(resource_dir) = app_handle.path().resource_dir() {
        for relative in [
            "resources/ffmpeg/ffmpeg.exe",
            "resources/ffmpeg/bin/ffmpeg.exe",
            "ffmpeg/ffmpeg.exe",
            "ffmpeg/bin/ffmpeg.exe",
        ] {
            paths.push((
                resource_dir.join(relative),
                format!("resource:{}", relative),
            ));
        }
    }

    if let Ok(cwd) = std::env::current_dir() {
        for relative in [
            "src-tauri/resources/ffmpeg/ffmpeg.exe",
            "src-tauri/resources/ffmpeg/bin/ffmpeg.exe",
            "resources/ffmpeg/ffmpeg.exe",
            "resources/ffmpeg/bin/ffmpeg.exe",
        ] {
            paths.push((cwd.join(relative), format!("dev:{}", relative)));
        }
    }

    paths
}

fn command_exists(command: &Path) -> bool {
    Command::new(command)
        .arg("-version")
        .stdout(Stdio::null())
        .stderr(Stdio::null())
        .status()
        .map(|status| status.success())
        .unwrap_or(false)
}

fn find_ffmpeg(app_handle: &AppHandle) -> (Option<FfmpegLocation>, Vec<String>) {
    let candidates = candidate_paths(app_handle);
    let mut searched_paths = Vec::new();

    for (path, source) in candidates {
        searched_paths.push(display_path(&path));
        if path.is_file() && command_exists(&path) {
            return (Some(FfmpegLocation { path, source }), searched_paths);
        }
    }

    searched_paths.push("PATH:ffmpeg".to_string());
    let path_candidate = PathBuf::from("ffmpeg");
    if command_exists(&path_candidate) {
        return (
            Some(FfmpegLocation {
                path: path_candidate,
                source: "PATH".to_string(),
            }),
            searched_paths,
        );
    }

    (None, searched_paths)
}

fn is_system_audio_device(device: &str) -> bool {
    let lower = device.to_lowercase();
    lower.contains("stereo mix")
        || lower.contains("what u hear")
        || lower.contains("loopback")
        || lower.contains("monitor")
        || device.contains("立体声混音")
        || device.contains("系统声音")
}

fn list_audio_devices(app_handle: &AppHandle) -> Vec<String> {
    let (ffmpeg, _) = find_ffmpeg(app_handle);
    let Some(ffmpeg) = ffmpeg else {
        warn!("[Plugin:screen-recorder] list audio devices skipped: ffmpeg unavailable");
        return Vec::new();
    };
    let started = Instant::now();
    let Ok(output) = Command::new(&ffmpeg.path)
        .args([
            "-hide_banner",
            "-f",
            "dshow",
            "-list_devices",
            "true",
            "-i",
            "dummy",
        ])
        .output()
    else {
        warn!("[Plugin:screen-recorder] list audio devices failed to run");
        return Vec::new();
    };

    let combined = format!(
        "{}\n{}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );

    let mut devices = Vec::new();
    for line in combined.lines() {
        if !line.contains("(audio)") {
            continue;
        }
        let Some(start) = line.find('"') else {
            continue;
        };
        let rest = &line[start + 1..];
        let Some(end) = rest.find('"') else {
            continue;
        };
        let device = rest[..end].trim();
        if !device.is_empty() {
            devices.push(device.to_string());
        }
    }

    info!(
        "[Plugin:screen-recorder] dshow audio devices listed in {}ms: status={}, devices={:?}",
        started.elapsed().as_millis(),
        output.status,
        devices
    );
    devices
}

fn default_audio_device(app_handle: &AppHandle) -> Option<String> {
    let devices = list_audio_devices(app_handle);
    let selected = devices
        .iter()
        .find(|device| is_system_audio_device(device))
        .cloned()
        .or_else(|| devices.first().cloned());
    info!(
        "[Plugin:screen-recorder] selected dshow audio device: {:?}, system_audio_available={}, all_devices={:?}",
        selected,
        devices.iter().any(|device| is_system_audio_device(device)),
        devices
    );
    selected
}

fn default_output_path(format: &str) -> PathBuf {
    let dir = dirs::video_dir()
        .or_else(dirs::download_dir)
        .or_else(|| std::env::current_dir().ok())
        .unwrap_or_else(std::env::temp_dir);
    let extension = if format == "gif" { "gif" } else { "mp4" };
    let timestamp = chrono::Local::now().format("%Y%m%d-%H%M%S");
    dir.join(format!("screen-recording-{}.{}", timestamp, extension))
}

#[tauri::command]
pub fn screen_recorder_get_ffmpeg_status(app_handle: AppHandle) -> Result<FfmpegStatus, String> {
    require_plugin(&app_handle)?;
    let (ffmpeg, searched_paths) = find_ffmpeg(&app_handle);
    let audio_devices = if ffmpeg.is_some() {
        list_audio_devices(&app_handle)
    } else {
        Vec::new()
    };
    let system_audio_available = audio_devices
        .iter()
        .any(|device| is_system_audio_device(device));
    info!(
        "[Plugin:screen-recorder] ffmpeg status requested: available={}, searched={}, audio_devices={:?}, system_audio_available={}",
        ffmpeg.is_some(),
        searched_paths.len(),
        audio_devices,
        system_audio_available
    );
    Ok(match ffmpeg {
        Some(location) => FfmpegStatus {
            available: true,
            path: Some(display_path(&location.path)),
            source: Some(location.source),
            searched_paths,
            message: None,
            audio_devices,
            system_audio_available,
        },
        None => FfmpegStatus {
            available: false,
            path: None,
            source: None,
            searched_paths,
            message: Some(
                "未找到 FFmpeg。请安装 FFmpeg，或将 ffmpeg.exe 放入录屏插件资源目录。".to_string(),
            ),
            audio_devices,
            system_audio_available,
        },
    })
}

pub fn open_screen_recorder_window() {
    let Some(app_handle) = crate::APP.get() else {
        warn!("[Plugin:screen-recorder] app handle unavailable");
        return;
    };

    if let Err(error) = require_plugin(app_handle) {
        warn!("[Plugin:screen-recorder] blocked: {}", error);
        return;
    }

    if let Some(existing) = app_handle.get_webview_window("screen_recorder") {
        let _ = existing.destroy();
        thread::sleep(Duration::from_millis(40));
    }

    let monitor = match app_handle.primary_monitor() {
        Ok(Some(monitor)) => monitor,
        _ => {
            warn!("[Plugin:screen-recorder] primary monitor unavailable");
            return;
        }
    };
    let monitor_size = monitor.size();
    let monitor_pos = monitor.position();
    let scale = monitor.scale_factor();
    let width = 468.0;
    let height = 300.0;
    let monitor_width = monitor_size.width as f64 / scale;
    let monitor_height = monitor_size.height as f64 / scale;
    let monitor_x = monitor_pos.x as f64 / scale;
    let monitor_y = monitor_pos.y as f64 / scale;
    let x = monitor_x + (monitor_width - width) / 2.0;
    let y = monitor_y + (monitor_height - height) / 2.0;

    let builder = WebviewWindowBuilder::new(
        app_handle,
        "screen_recorder",
        WebviewUrl::App("/#/screen-recorder".into()),
    )
    .title("自定义录屏")
    .inner_size(width, height)
    .min_inner_size(420.0, 260.0)
    .position(x, y)
    .resizable(true)
    .always_on_top(true)
    .skip_taskbar(true)
    .transparent(true)
    .shadow(true)
    .decorations(false)
    .visible(false);

    let window = match builder.build() {
        Ok(window) => window,
        Err(error) => {
            warn!("[Plugin:screen-recorder] create window failed: {}", error);
            return;
        }
    };

    let window_ready = window.clone();
    window.once("screen_recorder_ready", move |_| {
        let _ = window_ready.show();
        let _ = window_ready.set_focus();
    });

    let window_timeout = window.clone();
    tauri::async_runtime::spawn(async move {
        tokio::time::sleep(tokio::time::Duration::from_millis(300)).await;
        if !window_timeout.is_visible().unwrap_or(false) {
            let _ = window_timeout.show();
            let _ = window_timeout.set_focus();
        }
    });
}

#[tauri::command]
pub fn screen_recorder_close_window(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    clear_passthrough_region(&app_handle);
    if let Some(window) = app_handle.get_webview_window("screen_recorder") {
        let _ = window.set_ignore_cursor_events(false);
        window.destroy().map_err(|e| e.to_string())?;
    }
    Ok(())
}

fn clear_passthrough_region(app_handle: &AppHandle) {
    if let Ok(mut state) = PASSTHROUGH_STATE.lock() {
        state.region = None;
        if let Some(window) = app_handle.get_webview_window("screen_recorder") {
            let _ = window.set_ignore_cursor_events(false);
        }
        state.last_ignored = false;
    }
}

fn ensure_passthrough_tracker(app_handle: AppHandle) {
    let should_start = {
        let mut state = match PASSTHROUGH_STATE.lock() {
            Ok(state) => state,
            Err(_) => return,
        };
        if state.running {
            false
        } else {
            state.running = true;
            true
        }
    };
    if !should_start {
        return;
    }

    thread::spawn(move || loop {
        let region = match PASSTHROUGH_STATE.lock() {
            Ok(state) => state.region.clone(),
            Err(_) => None,
        };
        let Some(region) = region else {
            if let Ok(mut state) = PASSTHROUGH_STATE.lock() {
                state.running = false;
                state.last_ignored = false;
            }
            if let Some(window) = app_handle.get_webview_window("screen_recorder") {
                let _ = window.set_ignore_cursor_events(false);
            }
            break;
        };

        let Some(window) = app_handle.get_webview_window("screen_recorder") else {
            if let Ok(mut state) = PASSTHROUGH_STATE.lock() {
                state.running = false;
                state.region = None;
                state.last_ignored = false;
            }
            break;
        };

        #[cfg(target_os = "windows")]
        let should_ignore = {
            use windows::Win32::Foundation::POINT;
            use windows::Win32::UI::WindowsAndMessaging::GetCursorPos;

            let mut point = POINT::default();
            if unsafe { GetCursorPos(&mut point) }.is_err() {
                false
            } else if let Ok(inner_position) = window.inner_position() {
                let x = point.x - inner_position.x;
                let y = point.y - inner_position.y;
                x >= region.x
                    && y >= region.y
                    && x < region.x + region.width
                    && y < region.y + region.height
            } else {
                false
            }
        };

        #[cfg(not(target_os = "windows"))]
        let should_ignore = false;

        let mut changed = false;
        if let Ok(mut state) = PASSTHROUGH_STATE.lock() {
            if state.last_ignored != should_ignore {
                state.last_ignored = should_ignore;
                changed = true;
            }
        }
        if changed {
            let _ = window.set_ignore_cursor_events(should_ignore);
        }

        thread::sleep(Duration::from_millis(24));
    });
}

#[tauri::command]
pub fn screen_recorder_set_passthrough_region(
    app_handle: AppHandle,
    region: Option<PassthroughRegion>,
) -> Result<(), String> {
    require_plugin(&app_handle)?;
    {
        let mut state = PASSTHROUGH_STATE
            .lock()
            .map_err(|e| format!("录屏穿透状态锁定失败: {}", e))?;
        state.region = region.filter(|item| item.width > 0 && item.height > 0);
        if state.region.is_none() {
            state.last_ignored = false;
        }
    }

    if PASSTHROUGH_STATE
        .lock()
        .map(|state| state.region.is_some())
        .unwrap_or(false)
    {
        ensure_passthrough_tracker(app_handle);
    } else if let Some(window) = app_handle.get_webview_window("screen_recorder") {
        let _ = window.set_ignore_cursor_events(false);
    }

    Ok(())
}

#[tauri::command]
pub fn screen_recorder_set_capture_excluded(
    app_handle: AppHandle,
    window: tauri::Window,
    excluded: bool,
) -> Result<(), String> {
    require_plugin(&app_handle)?;
    #[cfg(target_os = "windows")]
    {
        use windows::Win32::UI::WindowsAndMessaging::{
            SetWindowDisplayAffinity, WDA_EXCLUDEFROMCAPTURE, WDA_NONE,
        };

        let raw_hwnd = window.hwnd().map_err(|e| e.to_string())?;
        let hwnd = windows::Win32::Foundation::HWND(raw_hwnd.0 as _);
        let affinity = if excluded {
            WDA_EXCLUDEFROMCAPTURE
        } else {
            WDA_NONE
        };
        unsafe { SetWindowDisplayAffinity(hwnd, affinity) }.map_err(|e| e.to_string())?;
    }
    #[cfg(not(target_os = "windows"))]
    {
        let _ = (window, excluded);
    }
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_get_background(app_handle: AppHandle) -> Result<String, String> {
    require_plugin(&app_handle)?;
    crate::window::get_screenshot_background()
}

#[tauri::command]
pub fn screen_recorder_get_preview(app_handle: AppHandle) -> Result<String, String> {
    require_plugin(&app_handle)?;
    crate::window::get_screenshot_preview()
}

#[tauri::command]
pub fn screen_recorder_clear_background(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    crate::window::clear_screenshot_background();
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_pick_region(
    app_handle: AppHandle,
    window: tauri::Window,
) -> Result<RecordingRegion, String> {
    require_plugin(&app_handle)?;

    #[cfg(not(target_os = "windows"))]
    {
        let _ = window;
        return Err("区域拖选当前仅支持 Windows。".to_string());
    }

    #[cfg(target_os = "windows")]
    {
        use windows::Win32::Foundation::POINT;
        use windows::Win32::UI::Input::KeyboardAndMouse::{GetAsyncKeyState, VK_LBUTTON};
        use windows::Win32::UI::WindowsAndMessaging::GetCursorPos;

        fn left_button_down() -> bool {
            unsafe { (GetAsyncKeyState(VK_LBUTTON.0 as i32) & 0x8000u16 as i16) != 0 }
        }

        fn cursor_pos() -> Result<POINT, String> {
            let mut point = POINT::default();
            unsafe { GetCursorPos(&mut point) }
                .map(|_| point)
                .map_err(|e| format!("读取鼠标位置失败: {}", e))
        }

        let _ = window.hide();
        thread::sleep(Duration::from_millis(180));

        let deadline = std::time::Instant::now() + Duration::from_secs(30);
        while left_button_down() {
            if std::time::Instant::now() > deadline {
                let _ = window.show();
                let _ = window.set_focus();
                return Err("区域拖选超时".to_string());
            }
            thread::sleep(Duration::from_millis(16));
        }

        while !left_button_down() {
            if std::time::Instant::now() > deadline {
                let _ = window.show();
                let _ = window.set_focus();
                return Err("区域拖选超时".to_string());
            }
            thread::sleep(Duration::from_millis(16));
        }

        let start = cursor_pos()?;
        let mut end = start;
        while left_button_down() {
            end = cursor_pos()?;
            thread::sleep(Duration::from_millis(16));
        }

        let left = start.x.min(end.x);
        let top = start.y.min(end.y);
        let right = start.x.max(end.x);
        let bottom = start.y.max(end.y);
        let physical_width = (right - left).max(1) as u32;
        let physical_height = (bottom - top).max(1) as u32;

        let monitor = app_handle
            .primary_monitor()
            .map_err(|e| e.to_string())?
            .ok_or_else(|| "无法获取主显示器信息".to_string())?;
        let monitor_pos = monitor.position();
        let scale = monitor.scale_factor();

        let _ = window.show();
        let _ = window.set_focus();

        if physical_width < 20 || physical_height < 20 {
            return Err("录制区域太小，请重新拖选".to_string());
        }

        Ok(RecordingRegion {
            x: (left - monitor_pos.x) as f64 / scale,
            y: (top - monitor_pos.y) as f64 / scale,
            width: physical_width as f64 / scale,
            height: physical_height as f64 / scale,
            screen_x: left,
            screen_y: top,
            physical_width,
            physical_height,
            scale,
        })
    }
}

#[tauri::command]
pub fn screen_recorder_pick_target_window(
    app_handle: AppHandle,
    window: tauri::Window,
) -> Result<SnapWindowRegion, String> {
    require_plugin(&app_handle)?;

    #[cfg(not(target_os = "windows"))]
    {
        let _ = window;
        return Err("窗口捕捉当前仅支持 Windows。".to_string());
    }

    #[cfg(target_os = "windows")]
    {
        use windows::Win32::Foundation::{HWND, POINT, RECT};
        use windows::Win32::UI::Input::KeyboardAndMouse::{GetAsyncKeyState, VK_LBUTTON};
        use windows::Win32::UI::WindowsAndMessaging::{
            GetAncestor, GetCursorPos, GetWindowRect, GetWindowTextLengthW, GetWindowTextW,
            IsWindowVisible, WindowFromPoint, GA_ROOT,
        };

        fn left_button_down() -> bool {
            unsafe { (GetAsyncKeyState(VK_LBUTTON.0 as i32) & 0x8000u16 as i16) != 0 }
        }

        fn cursor_pos() -> Result<POINT, String> {
            let mut point = POINT::default();
            unsafe { GetCursorPos(&mut point) }
                .map(|_| point)
                .map_err(|e| format!("读取鼠标位置失败: {}", e))
        }

        fn window_title(hwnd: HWND) -> String {
            let len = unsafe { GetWindowTextLengthW(hwnd) };
            if len <= 0 {
                return String::new();
            }
            let mut buffer = vec![0u16; len as usize + 1];
            let copied = unsafe { GetWindowTextW(hwnd, &mut buffer) };
            String::from_utf16_lossy(&buffer[..copied as usize])
        }

        clear_passthrough_region(&app_handle);
        let _ = window.set_ignore_cursor_events(true);
        let _ = window.hide();
        thread::sleep(Duration::from_millis(80));

        let deadline = Instant::now() + Duration::from_secs(20);
        while left_button_down() {
            if Instant::now() > deadline {
                let _ = window.show();
                let _ = window.set_focus();
                let _ = window.set_ignore_cursor_events(false);
                return Err("窗口捕捉超时".to_string());
            }
            thread::sleep(Duration::from_millis(16));
        }

        let point = cursor_pos()?;
        let raw_hwnd = unsafe { WindowFromPoint(point) };
        if raw_hwnd.0.is_null() {
            let _ = window.show();
            let _ = window.set_focus();
            let _ = window.set_ignore_cursor_events(false);
            return Err("未找到目标窗口".to_string());
        }

        let ancestor = unsafe { GetAncestor(raw_hwnd, GA_ROOT) };
        let hwnd = if ancestor.0.is_null() {
            raw_hwnd
        } else {
            ancestor
        };
        if !unsafe { IsWindowVisible(hwnd) }.as_bool() {
            let _ = window.show();
            let _ = window.set_focus();
            let _ = window.set_ignore_cursor_events(false);
            return Err("目标窗口不可见".to_string());
        }

        let mut rect = RECT::default();
        unsafe { GetWindowRect(hwnd, &mut rect) }
            .map_err(|e| format!("读取目标窗口边界失败: {}", e))?;

        let width = (rect.right - rect.left).max(1) as u32;
        let height = (rect.bottom - rect.top).max(1) as u32;
        let title = window_title(hwnd);

        let _ = window.show();
        let _ = window.set_focus();
        let _ = window.set_ignore_cursor_events(false);

        Ok(SnapWindowRegion {
            screen_x: rect.left,
            screen_y: rect.top,
            physical_width: width,
            physical_height: height,
            title,
        })
    }
}

fn quality_crf(quality: &str) -> &'static str {
    match quality {
        "high" => "16",
        "small" => "26",
        _ => "20",
    }
}

fn export_crf(quality: &str) -> &'static str {
    match quality {
        "high" => "18",
        "small" => "28",
        _ => "21",
    }
}

fn gif_colors(quality: &str) -> &'static str {
    match quality {
        "high" => "256",
        "small" => "96",
        _ => "160",
    }
}

fn ensure_parent_dir(path: &Path) -> Result<(), String> {
    if let Some(parent) = path.parent() {
        if !parent.as_os_str().is_empty() {
            fs::create_dir_all(parent)
                .map_err(|e| format!("创建导出目录失败 {}: {}", parent.display(), e))?;
        }
    }
    Ok(())
}

fn session_temp_dir(app_handle: &AppHandle, id: &str) -> Result<PathBuf, String> {
    let dir = app_handle
        .path()
        .app_cache_dir()
        .map_err(|e| e.to_string())?
        .join("screen-recorder")
        .join(id);
    fs::create_dir_all(&dir).map_err(|e| format!("创建录屏临时目录失败: {}", e))?;
    Ok(dir)
}

fn spawn_segment(
    app_handle: &AppHandle,
    temp_dir: &Path,
    region: &RecordingRegion,
    fps: u32,
    quality: &str,
    audio: bool,
    index: usize,
) -> Result<(Child, PathBuf, Option<String>, PathBuf), String> {
    #[cfg(not(target_os = "windows"))]
    {
        let _ = (app_handle, temp_dir, region, fps, quality, audio, index);
        return Err("自定义录屏当前仅支持 Windows + FFmpeg。".to_string());
    }

    #[cfg(target_os = "windows")]
    {
        let (ffmpeg, _) = find_ffmpeg(app_handle);
        let ffmpeg = ffmpeg.ok_or_else(|| "未找到 FFmpeg，无法开始录屏".to_string())?;
        let output = temp_dir.join(format!("segment_{:03}.mp4", index));
        let segment_log = temp_dir.join(format!("segment_{:03}.ffmpeg.log", index));
        let video_size = format!("{}x{}", region.physical_width, region.physical_height);
        let fps_text = fps.to_string();
        let keyframe_interval = (fps.max(1) * 2).to_string();
        let audio_device = if audio {
            default_audio_device(app_handle)
        } else {
            None
        };

        let mut args = vec![
            "-hide_banner".to_string(),
            "-loglevel".to_string(),
            "info".to_string(),
            "-stats".to_string(),
            "-y".to_string(),
            "-fflags".to_string(),
            "+genpts".to_string(),
            "-thread_queue_size".to_string(),
            "1024".to_string(),
            "-f".to_string(),
            "gdigrab".to_string(),
            "-rtbufsize".to_string(),
            "512M".to_string(),
            "-framerate".to_string(),
            fps_text.clone(),
            "-offset_x".to_string(),
            region.screen_x.to_string(),
            "-offset_y".to_string(),
            region.screen_y.to_string(),
            "-video_size".to_string(),
            video_size.clone(),
            "-draw_mouse".to_string(),
            "1".to_string(),
            "-i".to_string(),
            "desktop".to_string(),
        ];

        if let Some(device) = &audio_device {
            args.extend([
                "-thread_queue_size".to_string(),
                "1024".to_string(),
                "-f".to_string(),
                "dshow".to_string(),
                "-audio_buffer_size".to_string(),
                "120".to_string(),
                "-i".to_string(),
                format!("audio={}", device),
                "-map".to_string(),
                "0:v:0".to_string(),
                "-map".to_string(),
                "1:a:0".to_string(),
            ]);
        } else {
            args.push("-an".to_string());
        }

        args.extend([
            "-r".to_string(),
            fps_text.clone(),
            "-c:v".to_string(),
            "libx264".to_string(),
            "-preset".to_string(),
            "ultrafast".to_string(),
            "-tune".to_string(),
            "zerolatency".to_string(),
            "-crf".to_string(),
            quality_crf(quality).to_string(),
            "-g".to_string(),
            keyframe_interval.clone(),
            "-pix_fmt".to_string(),
            "yuv420p".to_string(),
            "-movflags".to_string(),
            "+faststart".to_string(),
        ]);

        if audio_device.is_some() {
            args.extend([
                "-af".to_string(),
                "volume=2.0".to_string(),
                "-c:a".to_string(),
                "aac".to_string(),
                "-b:a".to_string(),
                "192k".to_string(),
            ]);
        }

        args.push(display_path(&output));

        let command_line = format_command_line(&ffmpeg.path, &args);
        append_debug_log(
            temp_dir,
            format!(
                "spawn segment #{index}: region=({}, {}) {}x{} scale={} fps={} quality={} audio_requested={} audio_device={:?} output={} ffmpeg_log={}",
                region.screen_x,
                region.screen_y,
                region.physical_width,
                region.physical_height,
                region.scale,
                fps,
                quality,
                audio,
                audio_device,
                display_path(&output),
                display_path(&segment_log)
            ),
        );
        append_debug_log(temp_dir, format!("spawn segment #{index} command: {command_line}"));
        info!(
            "[Plugin:screen-recorder] spawning segment #{index}: {}",
            command_line
        );

        let mut log_file = File::create(&segment_log)
            .map_err(|e| format!("创建 FFmpeg 录制日志失败 {}: {}", segment_log.display(), e))?;
        writeln!(
            log_file,
            "[{}] FFmpeg segment #{index}\ncommand: {}\n",
            timestamp_text(),
            command_line
        )
        .map_err(|e| format!("写入 FFmpeg 录制日志失败: {}", e))?;

        let mut command = Command::new(&ffmpeg.path);
        command.args(&args);
        command
            .stdin(Stdio::piped())
            .stdout(Stdio::null())
            .stderr(Stdio::from(log_file))
            .creation_flags(0x08000000);

        let started = Instant::now();
        let child = command
            .spawn()
            .map_err(|e| format!("启动 FFmpeg 录屏失败: {}", e))?;
        append_debug_log(
            temp_dir,
            format!(
                "segment #{index} spawned: pid={} elapsed_ms={}",
                child.id(),
                started.elapsed().as_millis()
            ),
        );

        Ok((child, output, audio_device, segment_log))
    }
}

fn stop_child(child: &mut Child) -> Option<i32> {
    if let Some(stdin) = child.stdin.as_mut() {
        let _ = stdin.write_all(b"q\n");
        let _ = stdin.flush();
    }

    for _ in 0..20 {
        if let Some(status) = child.try_wait().ok().flatten() {
            return status.code();
        }
        thread::sleep(Duration::from_millis(50));
    }

    let _ = child.kill();
    child.wait().ok().and_then(|status| status.code())
}

fn stop_active_segment(session: &mut RecordingSession) {
    if let Some(mut child) = session.child.take() {
        let child_id = child.id();
        let segment = session.segments.last().cloned();
        append_debug_log(
            &session.temp_dir,
            format!(
                "stopping active segment: pid={} segment={:?}",
                child_id,
                segment.as_ref().map(|path| display_path(path))
            ),
        );
        let started = Instant::now();
        let exit_code = stop_child(&mut child);
        let segment_size = segment
            .as_ref()
            .and_then(|path| fs::metadata(path).ok())
            .map(|metadata| metadata.len());
        append_debug_log(
            &session.temp_dir,
            format!(
                "active segment stopped: pid={} exit_code={:?} elapsed_ms={} segment_size_bytes={:?}",
                child_id,
                exit_code,
                started.elapsed().as_millis(),
                segment_size
            ),
        );
        info!(
            "[Plugin:screen-recorder] active segment stopped: session={}, pid={}, exit_code={:?}, segment_size_bytes={:?}",
            session.id,
            child_id,
            exit_code,
            segment_size
        );
    }
}

#[tauri::command]
pub fn screen_recorder_start_recording(
    app_handle: AppHandle,
    region: RecordingRegion,
    fps: u32,
    quality: String,
    audio: bool,
) -> Result<(), String> {
    require_plugin(&app_handle)?;

    let id = uuid::Uuid::new_v4().to_string();
    let temp_dir = session_temp_dir(&app_handle, &id)?;
    append_debug_log(
        &temp_dir,
        format!(
            "start recording request: session={} region=({}, {}) {}x{} logical={}x{} scale={} fps={} quality={} audio={}",
            id,
            region.screen_x,
            region.screen_y,
            region.physical_width,
            region.physical_height,
            region.width,
            region.height,
            region.scale,
            fps,
            quality,
            audio
        ),
    );
    let (child, output, audio_device, segment_log) =
        spawn_segment(&app_handle, &temp_dir, &region, fps, &quality, audio, 0)?;

    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    if let Some(mut previous) = state.take() {
        stop_active_segment(&mut previous);
        let _ = fs::remove_dir_all(previous.temp_dir);
    }

    *state = Some(RecordingSession {
        id: id.clone(),
        temp_dir,
        region,
        fps,
        quality,
        audio,
        audio_device,
        next_segment_index: 1,
        segments: vec![output],
        segment_logs: vec![segment_log],
        child: Some(child),
        stopped: false,
        started_at: Instant::now(),
    });

    info!("[Plugin:screen-recorder] recording started: session={}", id);
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_pause_recording(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    let session = state
        .as_mut()
        .ok_or_else(|| "当前没有录屏任务".to_string())?;
    append_debug_log(
        &session.temp_dir,
        format!(
            "pause recording request: session={} elapsed_ms={}",
            session.id,
            session.started_at.elapsed().as_millis()
        ),
    );
    stop_active_segment(session);
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_resume_recording(
    app_handle: AppHandle,
    region: RecordingRegion,
    fps: u32,
    quality: String,
    audio: bool,
) -> Result<(), String> {
    require_plugin(&app_handle)?;
    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    let session = state
        .as_mut()
        .ok_or_else(|| "当前没有录屏任务".to_string())?;
    if session.child.is_some() {
        return Ok(());
    }

    session.region = region;
    session.fps = fps;
    session.quality = quality;
    session.audio = audio;
    append_debug_log(
        &session.temp_dir,
        format!(
            "resume recording request: session={} next_segment={} region=({}, {}) {}x{} fps={} quality={} audio={}",
            session.id,
            session.next_segment_index,
            session.region.screen_x,
            session.region.screen_y,
            session.region.physical_width,
            session.region.physical_height,
            session.fps,
            session.quality,
            session.audio
        ),
    );
    let (child, output, audio_device, segment_log) = spawn_segment(
        &app_handle,
        &session.temp_dir,
        &session.region,
        session.fps,
        &session.quality,
        session.audio,
        session.next_segment_index,
    )?;
    if session.audio_device.is_none() {
        session.audio_device = audio_device;
    }
    session.next_segment_index += 1;
    session.segments.push(output);
    session.segment_logs.push(segment_log);
    session.child = Some(child);
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_stop_recording(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    let session = state
        .as_mut()
        .ok_or_else(|| "当前没有录屏任务".to_string())?;
    append_debug_log(
        &session.temp_dir,
        format!(
            "stop recording request: session={} elapsed_ms={} segments={}",
            session.id,
            session.started_at.elapsed().as_millis(),
            session.segments.len()
        ),
    );
    stop_active_segment(session);
    session.stopped = true;
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_cancel_recording(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    if let Some(mut session) = state.take() {
        append_debug_log(
            &session.temp_dir,
            format!(
                "cancel recording request: session={} elapsed_ms={} segments={}",
                session.id,
                session.started_at.elapsed().as_millis(),
                session.segments.len()
            ),
        );
        stop_active_segment(&mut session);
        let _ = fs::remove_dir_all(session.temp_dir);
    }
    Ok(())
}

fn concat_file_line(path: &Path) -> String {
    let value = path
        .to_string_lossy()
        .replace('\\', "/")
        .replace('\'', "'\\''");
    format!("file '{}'\n", value)
}

fn write_concat_file(session: &RecordingSession) -> Result<PathBuf, String> {
    let concat_path = session.temp_dir.join("segments.txt");
    let mut content = String::new();
    for segment in &session.segments {
        if segment.is_file() {
            content.push_str(&concat_file_line(segment));
            let size = fs::metadata(segment).ok().map(|metadata| metadata.len());
            append_debug_log(
                &session.temp_dir,
                format!(
                    "concat include segment: path={} size_bytes={:?}",
                    display_path(segment),
                    size
                ),
            );
        } else {
            append_debug_log(
                &session.temp_dir,
                format!("concat skip missing segment: path={}", display_path(segment)),
            );
        }
    }
    if content.is_empty() {
        return Err("没有可导出的录屏片段".to_string());
    }
    fs::write(&concat_path, content).map_err(|e| format!("写入片段列表失败: {}", e))?;
    Ok(concat_path)
}

fn run_ffmpeg(mut command: Command, label: &str, debug_dir: Option<&Path>) -> Result<(), String> {
    #[cfg(target_os = "windows")]
    {
        command.creation_flags(0x08000000);
    }
    let started = Instant::now();
    let output = command
        .output()
        .map_err(|e| format!("执行 FFmpeg {} 失败: {}", label, e))?;
    if let Some(debug_dir) = debug_dir {
        append_debug_log(
            debug_dir,
            format!(
                "ffmpeg {} finished: status={} elapsed_ms={} stdout_bytes={} stderr_bytes={}",
                label,
                output.status,
                started.elapsed().as_millis(),
                output.stdout.len(),
                output.stderr.len()
            ),
        );
        append_debug_block(debug_dir, &format!("ffmpeg {} stdout", label), &output.stdout);
        append_debug_block(debug_dir, &format!("ffmpeg {} stderr", label), &output.stderr);
    }
    if output.status.success() {
        return Ok(());
    }
    let stderr = String::from_utf8_lossy(&output.stderr);
    Err(format!("FFmpeg {} 失败: {}", label, stderr.trim()))
}

fn exported_debug_log_path(output_path: &Path) -> PathBuf {
    let file_name = output_path
        .file_name()
        .map(|name| format!("{}.debug.log", name.to_string_lossy()))
        .unwrap_or_else(|| "screen-recording.debug.log".to_string());
    output_path
        .parent()
        .map(|parent| parent.join(&file_name))
        .unwrap_or_else(|| PathBuf::from(file_name))
}

fn write_export_debug_log(session: &RecordingSession, target: &Path) -> Result<(), String> {
    let mut file = File::create(target)
        .map_err(|e| format!("写入调试日志失败 {}: {}", target.display(), e))?;
    writeln!(
        file,
        "Screen recorder debug log\nsession={}\nexported_at={}\n\n== session events ==\n",
        session.id,
        timestamp_text()
    )
    .map_err(|e| format!("写入调试日志失败: {}", e))?;

    let session_log = debug_log_path(&session.temp_dir);
    if session_log.is_file() {
        let content = fs::read(&session_log).map_err(|e| format!("读取调试日志失败: {}", e))?;
        file.write_all(String::from_utf8_lossy(&content).as_bytes())
            .map_err(|e| format!("写入调试日志失败: {}", e))?;
    }

    for segment_log in &session.segment_logs {
        writeln!(
            file,
            "\n== ffmpeg segment log: {} ==\n",
            display_path(segment_log)
        )
        .map_err(|e| format!("写入调试日志失败: {}", e))?;
        if segment_log.is_file() {
            let content =
                fs::read(segment_log).map_err(|e| format!("读取 FFmpeg 日志失败: {}", e))?;
            file.write_all(String::from_utf8_lossy(&content).as_bytes())
                .map_err(|e| format!("写入 FFmpeg 日志失败: {}", e))?;
        } else {
            writeln!(file, "missing").map_err(|e| format!("写入调试日志失败: {}", e))?;
        }
    }

    Ok(())
}

#[tauri::command]
pub fn screen_recorder_export_recording(
    app_handle: AppHandle,
    format: String,
    fps: u32,
    quality: String,
    save_path: String,
) -> Result<RecordingExportResult, String> {
    require_plugin(&app_handle)?;
    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    let mut session = state
        .take()
        .ok_or_else(|| "当前没有可导出的录屏任务".to_string())?;
    drop(state);
    stop_active_segment(&mut session);
    session.stopped = true;

    let output_path = if save_path.trim().is_empty() {
        default_output_path(&format)
    } else {
        PathBuf::from(save_path)
    };
    let export_result = (|| {
        ensure_parent_dir(&output_path)?;
        let (ffmpeg, _) = find_ffmpeg(&app_handle);
        let ffmpeg = ffmpeg.ok_or_else(|| "未找到 FFmpeg，无法导出录屏".to_string())?;
        append_debug_log(
            &session.temp_dir,
            format!(
                "export request: session={} format={} fps={} quality={} save_path={} segments={} has_audio={} audio_device={:?}",
                session.id,
                format,
                fps,
                quality,
                display_path(&output_path),
                session.segments.len(),
                session.audio_device.is_some(),
                &session.audio_device
            ),
        );
        let concat_path = write_concat_file(&session)?;
        append_debug_log(
            &session.temp_dir,
            format!("concat file written: {}", display_path(&concat_path)),
        );

        match format.as_str() {
            "gif" => {
                let palette_path = session.temp_dir.join("palette.png");
                let palette_filter =
                    format!("fps={},palettegen=max_colors={}", fps, gif_colors(&quality));
                append_debug_log(
                    &session.temp_dir,
                    format!(
                        "export GIF palette: filter={} palette={}",
                        palette_filter,
                        display_path(&palette_path)
                    ),
                );
                let mut palette_command = Command::new(&ffmpeg.path);
                palette_command
                    .args(["-y", "-f", "concat", "-safe", "0", "-i"])
                    .arg(&concat_path)
                    .args(["-an", "-vf", &palette_filter])
                    .arg(&palette_path);
                run_ffmpeg(palette_command, "生成 GIF 调色板", Some(&session.temp_dir))?;

                let gif_filter = format!("fps={}[x];[x][1:v]paletteuse=dither=bayer", fps);
                append_debug_log(
                    &session.temp_dir,
                    format!("export GIF: filter={} output={}", gif_filter, display_path(&output_path)),
                );
                let mut gif_command = Command::new(&ffmpeg.path);
                gif_command
                    .args(["-y", "-f", "concat", "-safe", "0", "-i"])
                    .arg(&concat_path)
                    .arg("-i")
                    .arg(&palette_path)
                    .args(["-an", "-lavfi", &gif_filter])
                    .arg(&output_path);
                run_ffmpeg(gif_command, "导出 GIF", Some(&session.temp_dir))?;
            }
            _ => {
                let should_copy_video = session.quality == quality && session.fps == fps;
                append_debug_log(
                    &session.temp_dir,
                    format!(
                        "export MP4: should_copy_video={} source_fps={} target_fps={} source_quality={} target_quality={} output={}",
                        should_copy_video,
                        session.fps,
                        fps,
                        session.quality,
                        quality,
                        display_path(&output_path)
                    ),
                );
                let mut mp4_command = Command::new(&ffmpeg.path);
                mp4_command
                    .args(["-y", "-f", "concat", "-safe", "0", "-i"])
                    .arg(&concat_path);
                if should_copy_video {
                    mp4_command.args(["-c:v", "copy"]);
                } else {
                    mp4_command.args([
                        "-r",
                        &fps.to_string(),
                        "-c:v",
                        "libx264",
                        "-preset",
                        "veryfast",
                        "-crf",
                        export_crf(&quality),
                        "-pix_fmt",
                        "yuv420p",
                    ]);
                }
                if session.audio_device.is_some() {
                    mp4_command.args(["-c:a", "aac", "-b:a", "192k"]);
                } else {
                    mp4_command.arg("-an");
                }
                mp4_command.args(["-movflags", "+faststart"]);
                mp4_command.arg(&output_path);
                run_ffmpeg(mp4_command, "导出 MP4", Some(&session.temp_dir))?;
            }
        }

        let size = fs::metadata(&output_path)
            .map_err(|e| format!("读取导出文件信息失败: {}", e))?
            .len();
        append_debug_log(
            &session.temp_dir,
            format!(
                "export output ready: path={} size_bytes={}",
                display_path(&output_path),
                size
            ),
        );
        let debug_log_path = exported_debug_log_path(&output_path);
        let debug_log_path = match write_export_debug_log(&session, &debug_log_path) {
            Ok(()) => {
                info!(
                    "[Plugin:screen-recorder] debug log exported: session={}, path={}",
                    session.id,
                    display_path(&debug_log_path)
                );
                Some(display_path(&debug_log_path))
            }
            Err(error) => {
                warn!(
                    "[Plugin:screen-recorder] export debug log failed: session={}, error={}",
                    session.id,
                    error
                );
                None
            }
        };
        Ok(RecordingExportResult {
            path: display_path(&output_path),
            size_bytes: size,
            width: session.region.physical_width,
            height: session.region.physical_height,
            format: format.clone(),
            has_audio: session.audio_device.is_some(),
            audio_device: session.audio_device.clone(),
            debug_log_path,
        })
    })();

    match export_result {
        Ok(result) => {
            let _ = fs::remove_dir_all(&session.temp_dir);
            info!(
                "[Plugin:screen-recorder] exported session {} to {}",
                session.id, result.path
            );
            Ok(result)
        }
        Err(error) => {
            let mut state = RECORDING_SESSION
                .lock()
                .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
            *state = Some(session);
            Err(error)
        }
    }
}

#[tauri::command]
pub fn screen_recorder_compress_recording(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    Ok(())
}
