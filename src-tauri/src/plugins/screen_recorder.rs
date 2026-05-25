use log::{info, warn};
use serde::{Deserialize, Serialize};
use std::fs;
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::{LazyLock, Mutex};
use std::thread;
use std::time::Duration;
use tauri::{AppHandle, Listener, Manager, WebviewUrl, WebviewWindowBuilder};

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

const PLUGIN_ID: &str = "screen-recorder";

static RECORDING_SESSION: LazyLock<Mutex<Option<RecordingSession>>> =
    LazyLock::new(|| Mutex::new(None));

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

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct FfmpegStatus {
    available: bool,
    path: Option<String>,
    source: Option<String>,
    searched_paths: Vec<String>,
    message: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RecordingExportResult {
    path: String,
    size_bytes: u64,
    width: u32,
    height: u32,
    format: String,
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
    next_segment_index: usize,
    segments: Vec<PathBuf>,
    child: Option<Child>,
    stopped: bool,
}

fn require_plugin(app_handle: &AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, PLUGIN_ID)
}

fn display_path(path: &Path) -> String {
    path.to_string_lossy().to_string()
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
            paths.push((PathBuf::from(path), format!("plugin:{}:{}", PLUGIN_ID, relative)));
        }
        if let Ok(Some(path)) = crate::app_config::get_local_plugin_resource_path(
            app_handle.clone(),
            "screen-recorder-ffmpeg".to_string(),
            relative.to_string(),
        ) {
            paths.push((PathBuf::from(path), format!("plugin:screen-recorder-ffmpeg:{}", relative)));
        }
    }

    if let Ok(resource_dir) = app_handle.path().resource_dir() {
        for relative in [
            "resources/ffmpeg/ffmpeg.exe",
            "resources/ffmpeg/bin/ffmpeg.exe",
            "ffmpeg/ffmpeg.exe",
            "ffmpeg/bin/ffmpeg.exe",
        ] {
            paths.push((resource_dir.join(relative), format!("resource:{}", relative)));
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

#[tauri::command]
pub fn screen_recorder_get_ffmpeg_status(app_handle: AppHandle) -> Result<FfmpegStatus, String> {
    require_plugin(&app_handle)?;
    let (ffmpeg, searched_paths) = find_ffmpeg(&app_handle);
    Ok(match ffmpeg {
        Some(location) => FfmpegStatus {
            available: true,
            path: Some(display_path(&location.path)),
            source: Some(location.source),
            searched_paths,
            message: None,
        },
        None => FfmpegStatus {
            available: false,
            path: None,
            source: None,
            searched_paths,
            message: Some("未找到 FFmpeg。请安装 FFmpeg，或将 ffmpeg.exe 放入录屏插件资源目录。".to_string()),
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
    let width = 720.0;
    let height = 430.0;
    let x = monitor_pos.x as f64 + (monitor_size.width as f64 - width) / 2.0;
    let y = monitor_pos.y as f64 + (monitor_size.height as f64 - height) / 2.0;

    let builder = WebviewWindowBuilder::new(
        app_handle,
        "screen_recorder",
        WebviewUrl::App("/#/screen-recorder".into()),
    )
    .title("自定义录屏")
    .inner_size(width, height)
    .min_inner_size(360.0, 260.0)
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
    if let Some(window) = app_handle.get_webview_window("screen_recorder") {
        window.destroy().map_err(|e| e.to_string())?;
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
        let affinity = if excluded { WDA_EXCLUDEFROMCAPTURE } else { WDA_NONE };
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

fn quality_crf(quality: &str) -> &'static str {
    match quality {
        "high" => "18",
        "small" => "30",
        _ => "24",
    }
}

fn export_crf(quality: &str) -> &'static str {
    match quality {
        "high" => "20",
        "small" => "34",
        _ => "27",
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
    index: usize,
) -> Result<(Child, PathBuf), String> {
    #[cfg(not(target_os = "windows"))]
    {
        let _ = (app_handle, temp_dir, region, fps, quality, index);
        return Err("自定义录屏当前仅支持 Windows + FFmpeg。".to_string());
    }

    #[cfg(target_os = "windows")]
    {
        let (ffmpeg, _) = find_ffmpeg(app_handle);
        let ffmpeg = ffmpeg.ok_or_else(|| "未找到 FFmpeg，无法开始录屏".to_string())?;
        let output = temp_dir.join(format!("segment_{:03}.mp4", index));
        let video_size = format!("{}x{}", region.physical_width, region.physical_height);

        let mut command = Command::new(ffmpeg.path);
        command
            .args([
                "-y",
                "-f",
                "gdigrab",
                "-framerate",
                &fps.to_string(),
                "-offset_x",
                &region.screen_x.to_string(),
                "-offset_y",
                &region.screen_y.to_string(),
                "-video_size",
                &video_size,
                "-draw_mouse",
                "1",
                "-i",
                "desktop",
                "-an",
                "-c:v",
                "libx264",
                "-preset",
                "ultrafast",
                "-crf",
                quality_crf(quality),
                "-pix_fmt",
                "yuv420p",
            ])
            .arg(&output)
            .stdin(Stdio::piped())
            .stdout(Stdio::null())
            .stderr(Stdio::null())
            .creation_flags(0x08000000);

        let child = command
            .spawn()
            .map_err(|e| format!("启动 FFmpeg 录屏失败: {}", e))?;

        Ok((child, output))
    }
}

fn stop_child(child: &mut Child) {
    if let Some(stdin) = child.stdin.as_mut() {
        let _ = stdin.write_all(b"q\n");
        let _ = stdin.flush();
    }

    for _ in 0..20 {
        if child.try_wait().ok().flatten().is_some() {
            return;
        }
        thread::sleep(Duration::from_millis(50));
    }

    let _ = child.kill();
    let _ = child.wait();
}

fn stop_active_segment(session: &mut RecordingSession) {
    if let Some(mut child) = session.child.take() {
        stop_child(&mut child);
    }
}

#[tauri::command]
pub fn screen_recorder_start_recording(
    app_handle: AppHandle,
    region: RecordingRegion,
    fps: u32,
    quality: String,
) -> Result<(), String> {
    require_plugin(&app_handle)?;

    let id = uuid::Uuid::new_v4().to_string();
    let temp_dir = session_temp_dir(&app_handle, &id)?;
    let (child, output) = spawn_segment(&app_handle, &temp_dir, &region, fps, &quality, 0)?;

    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    if let Some(mut previous) = state.take() {
        stop_active_segment(&mut previous);
        let _ = fs::remove_dir_all(previous.temp_dir);
    }

    *state = Some(RecordingSession {
        id,
        temp_dir,
        region,
        fps,
        quality,
        next_segment_index: 1,
        segments: vec![output],
        child: Some(child),
        stopped: false,
    });

    info!("[Plugin:screen-recorder] recording started");
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_pause_recording(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    let session = state.as_mut().ok_or_else(|| "当前没有录屏任务".to_string())?;
    stop_active_segment(session);
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_resume_recording(
    app_handle: AppHandle,
    region: RecordingRegion,
    fps: u32,
    quality: String,
) -> Result<(), String> {
    require_plugin(&app_handle)?;
    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    let session = state.as_mut().ok_or_else(|| "当前没有录屏任务".to_string())?;
    if session.child.is_some() {
        return Ok(());
    }

    session.region = region;
    session.fps = fps;
    session.quality = quality;
    let (child, output) = spawn_segment(
        &app_handle,
        &session.temp_dir,
        &session.region,
        session.fps,
        &session.quality,
        session.next_segment_index,
    )?;
    session.next_segment_index += 1;
    session.segments.push(output);
    session.child = Some(child);
    Ok(())
}

#[tauri::command]
pub fn screen_recorder_stop_recording(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    let mut state = RECORDING_SESSION
        .lock()
        .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
    let session = state.as_mut().ok_or_else(|| "当前没有录屏任务".to_string())?;
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
        stop_active_segment(&mut session);
        let _ = fs::remove_dir_all(session.temp_dir);
    }
    Ok(())
}

fn concat_file_line(path: &Path) -> String {
    let value = path.to_string_lossy().replace('\\', "/").replace('\'', "'\\''");
    format!("file '{}'\n", value)
}

fn write_concat_file(session: &RecordingSession) -> Result<PathBuf, String> {
    let concat_path = session.temp_dir.join("segments.txt");
    let mut content = String::new();
    for segment in &session.segments {
        if segment.is_file() {
            content.push_str(&concat_file_line(segment));
        }
    }
    if content.is_empty() {
        return Err("没有可导出的录屏片段".to_string());
    }
    fs::write(&concat_path, content).map_err(|e| format!("写入片段列表失败: {}", e))?;
    Ok(concat_path)
}

fn run_ffmpeg(mut command: Command, label: &str) -> Result<(), String> {
    #[cfg(target_os = "windows")]
    {
        command.creation_flags(0x08000000);
    }
    let output = command
        .output()
        .map_err(|e| format!("执行 FFmpeg {} 失败: {}", label, e))?;
    if output.status.success() {
        return Ok(());
    }
    let stderr = String::from_utf8_lossy(&output.stderr);
    Err(format!("FFmpeg {} 失败: {}", label, stderr.trim()))
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

    let output_path = PathBuf::from(save_path);
    let export_result = (|| {
        ensure_parent_dir(&output_path)?;
        let (ffmpeg, _) = find_ffmpeg(&app_handle);
        let ffmpeg = ffmpeg.ok_or_else(|| "未找到 FFmpeg，无法导出录屏".to_string())?;
        let concat_path = write_concat_file(&session)?;

        match format.as_str() {
            "gif" => {
                let palette_path = session.temp_dir.join("palette.png");
                let palette_filter =
                    format!("fps={},palettegen=max_colors={}", fps, gif_colors(&quality));
                let mut palette_command = Command::new(&ffmpeg.path);
                palette_command
                    .args(["-y", "-f", "concat", "-safe", "0", "-i"])
                    .arg(&concat_path)
                    .args(["-vf", &palette_filter])
                    .arg(&palette_path);
                run_ffmpeg(palette_command, "生成 GIF 调色板")?;

                let gif_filter = format!("fps={}[x];[x][1:v]paletteuse=dither=bayer", fps);
                let mut gif_command = Command::new(&ffmpeg.path);
                gif_command
                    .args(["-y", "-f", "concat", "-safe", "0", "-i"])
                    .arg(&concat_path)
                    .arg("-i")
                    .arg(&palette_path)
                    .args(["-lavfi", &gif_filter])
                    .arg(&output_path);
                run_ffmpeg(gif_command, "导出 GIF")?;
            }
            _ => {
                let mut mp4_command = Command::new(&ffmpeg.path);
                mp4_command
                    .args(["-y", "-f", "concat", "-safe", "0", "-i"])
                    .arg(&concat_path)
                    .args([
                        "-r",
                        &fps.to_string(),
                        "-an",
                        "-c:v",
                        "libx264",
                        "-preset",
                        "medium",
                        "-crf",
                        export_crf(&quality),
                        "-pix_fmt",
                        "yuv420p",
                        "-movflags",
                        "+faststart",
                    ])
                    .arg(&output_path);
                run_ffmpeg(mp4_command, "导出 MP4")?;
            }
        }

        let size = fs::metadata(&output_path)
            .map_err(|e| format!("读取导出文件信息失败: {}", e))?
            .len();
        Ok(RecordingExportResult {
            path: display_path(&output_path),
            size_bytes: size,
            width: session.region.physical_width,
            height: session.region.physical_height,
            format: format.clone(),
        })
    })();

    match export_result {
        Ok(result) => {
            let _ = fs::remove_dir_all(&session.temp_dir);
            info!(
                "[Plugin:screen-recorder] exported session {} to {}",
                session.id,
                result.path
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
