use log::{info, warn};
use serde::{Deserialize, Serialize};
use std::fs::{self, File, OpenOptions};
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::{
    atomic::{AtomicBool, AtomicU32, Ordering},
    Arc, LazyLock, Mutex,
};
use std::thread;
use std::time::{Duration, Instant};
use tauri::{AppHandle, Emitter, Listener, Manager, WebviewUrl, WebviewWindowBuilder};

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

const PLUGIN_ID: &str = "screen-recorder";
const FFMPEG_STOP_WAIT_ATTEMPTS: usize = 120;
const FFMPEG_STOP_WAIT_INTERVAL_MS: u64 = 100;

static RECORDING_SESSION: LazyLock<Mutex<Option<RecordingSession>>> =
    LazyLock::new(|| Mutex::new(None));
static PASSTHROUGH_STATE: LazyLock<Mutex<PassthroughState>> =
    LazyLock::new(|| Mutex::new(PassthroughState::default()));
static EXPORT_CANCEL_REQUESTED: AtomicBool = AtomicBool::new(false);
static ACTIVE_EXPORT_PID: AtomicU32 = AtomicU32::new(0);

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

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct OverlayWindowRegion {
    width: i32,
    height: i32,
    top_height: i32,
    bottom_height: i32,
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

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ExportProgressEvent {
    stage: String,
    message: String,
    progress: f32,
    current_frame: u32,
    total_frames: Option<u32>,
}

struct FfmpegLocation {
    path: PathBuf,
    source: String,
}

#[derive(Debug, Clone)]
struct AudioSegment {
    path: PathBuf,
    sample_rate: u32,
    channels: u16,
    sample_format: String,
    bytes_written: u64,
}

struct AudioCaptureSession {
    stop: Arc<AtomicBool>,
    handle: thread::JoinHandle<Result<AudioSegment, String>>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct AudioLevelEvent {
    level: f32,
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
    audio_segments: Vec<AudioSegment>,
    audio_capture: Option<AudioCaptureSession>,
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
    chrono::Local::now()
        .format("%Y-%m-%d %H:%M:%S%.3f")
        .to_string()
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
        || lower.contains("wasapi")
        || lower.contains("monitor")
        || device.contains("立体声混音")
        || device.contains("系统声音")
}

fn native_system_audio_device() -> Option<String> {
    if cfg!(target_os = "windows") {
        Some("WASAPI loopback (default render device)".to_string())
    } else {
        None
    }
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
        .cloned();
    info!(
        "[Plugin:screen-recorder] selected system dshow audio device: {:?}, system_audio_available={}, all_devices={:?}",
        selected,
        devices.iter().any(|device| is_system_audio_device(device)),
        devices
    );
    selected
}

fn ffmpeg_supports_filter(ffmpeg_path: &Path, filter: &str) -> bool {
    let Ok(output) = Command::new(ffmpeg_path)
        .args(["-hide_banner", "-filters"])
        .output()
    else {
        return false;
    };
    let combined = format!(
        "{}\n{}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );
    combined
        .lines()
        .any(|line| line.split_whitespace().any(|part| part == filter))
}

#[cfg(target_os = "windows")]
fn start_wasapi_loopback_capture(
    app_handle: AppHandle,
    temp_dir: &Path,
    index: usize,
) -> Result<AudioCaptureSession, String> {
    let path = temp_dir.join(format!("audio_{:03}.raw", index));
    let stop = Arc::new(AtomicBool::new(false));
    let thread_stop = Arc::clone(&stop);
    let thread_path = path.clone();
    let handle =
        thread::spawn(move || capture_wasapi_loopback(app_handle, thread_path, thread_stop));
    Ok(AudioCaptureSession { stop, handle })
}

#[cfg(not(target_os = "windows"))]
fn start_wasapi_loopback_capture(
    _app_handle: AppHandle,
    _temp_dir: &Path,
    _index: usize,
) -> Result<AudioCaptureSession, String> {
    Err("系统声音录制当前仅支持 Windows WASAPI loopback".to_string())
}

fn emit_audio_level(app_handle: &AppHandle, level: f32) {
    let _ = app_handle.emit(
        "screen_recorder_audio_level",
        AudioLevelEvent {
            level: level.clamp(0.0, 1.0),
        },
    );
}

fn emit_export_progress(
    app_handle: &AppHandle,
    stage: &str,
    message: impl Into<String>,
    progress: f32,
    current_frame: u32,
    total_frames: Option<u32>,
) {
    let _ = app_handle.emit(
        "screen_recorder_export_progress",
        ExportProgressEvent {
            stage: stage.to_string(),
            message: message.into(),
            progress: progress.clamp(0.0, 1.0),
            current_frame,
            total_frames,
        },
    );
}

fn normalize_audio_rms(rms: f32) -> f32 {
    if rms <= 0.0001 {
        return 0.0;
    }
    ((20.0 * rms.log10() + 60.0) / 60.0).clamp(0.0, 1.0)
}

fn audio_level_from_samples(buffer: &[u8], sample_format: &str) -> f32 {
    let mut sum = 0.0_f64;
    let mut count = 0_u64;

    match sample_format {
        "f32le" => {
            for chunk in buffer.chunks_exact(4) {
                let sample =
                    f32::from_le_bytes([chunk[0], chunk[1], chunk[2], chunk[3]]).clamp(-1.0, 1.0);
                sum += (sample as f64) * (sample as f64);
                count += 1;
            }
        }
        "s16le" => {
            for chunk in buffer.chunks_exact(2) {
                let sample = i16::from_le_bytes([chunk[0], chunk[1]]) as f32 / i16::MAX as f32;
                sum += (sample as f64) * (sample as f64);
                count += 1;
            }
        }
        "s32le" => {
            for chunk in buffer.chunks_exact(4) {
                let sample = i32::from_le_bytes([chunk[0], chunk[1], chunk[2], chunk[3]]) as f32
                    / i32::MAX as f32;
                sum += (sample as f64) * (sample as f64);
                count += 1;
            }
        }
        _ => {}
    }

    if count == 0 {
        0.0
    } else {
        normalize_audio_rms((sum / count as f64).sqrt() as f32)
    }
}

#[cfg(target_os = "windows")]
fn capture_wasapi_loopback(
    app_handle: AppHandle,
    path: PathBuf,
    stop: Arc<AtomicBool>,
) -> Result<AudioSegment, String> {
    use std::ffi::c_void;
    use std::ptr;
    use windows::Win32::Media::Audio::{
        eConsole, eRender, IAudioCaptureClient, IAudioClient, IMMDeviceEnumerator,
        MMDeviceEnumerator, AUDCLNT_BUFFERFLAGS_SILENT, AUDCLNT_SHAREMODE_SHARED,
        AUDCLNT_STREAMFLAGS_LOOPBACK,
    };
    use windows::Win32::System::Com::{
        CoCreateInstance, CoInitializeEx, CoTaskMemFree, CoUninitialize, CLSCTX_ALL,
        COINIT_MULTITHREADED,
    };

    const WAVE_FORMAT_IEEE_FLOAT: u16 = 0x0003;
    const WAVE_FORMAT_EXTENSIBLE: u16 = 0xfffe;

    unsafe {
        let hr = CoInitializeEx(None, COINIT_MULTITHREADED);
        if hr.is_err() {
            return Err(format!("初始化 WASAPI COM 失败: {:?}", hr));
        }

        let result = (|| -> Result<AudioSegment, String> {
            let enumerator: IMMDeviceEnumerator =
                CoCreateInstance(&MMDeviceEnumerator, None, CLSCTX_ALL)
                    .map_err(|e| format!("创建 WASAPI 设备枚举器失败: {}", e))?;
            let device = enumerator
                .GetDefaultAudioEndpoint(eRender, eConsole)
                .map_err(|e| format!("获取默认播放设备失败: {}", e))?;
            let audio_client: IAudioClient = device
                .Activate(CLSCTX_ALL, None)
                .map_err(|e| format!("激活 WASAPI 音频客户端失败: {}", e))?;
            let mix_format = audio_client
                .GetMixFormat()
                .map_err(|e| format!("读取 WASAPI mix format 失败: {}", e))?;
            if mix_format.is_null() {
                return Err("WASAPI mix format 为空".to_string());
            }

            let format = *mix_format;
            let channels = format.nChannels;
            let sample_rate = format.nSamplesPerSec;
            let bits_per_sample = format.wBitsPerSample;
            let block_align = format.nBlockAlign as usize;
            let format_tag = format.wFormatTag;
            let sample_format = match (format_tag, bits_per_sample) {
                (WAVE_FORMAT_IEEE_FLOAT, 32) => "f32le",
                (WAVE_FORMAT_EXTENSIBLE, 32) => "f32le",
                (_, 16) => "s16le",
                (_, 32) => "s32le",
                _ => {
                    CoTaskMemFree(Some(mix_format as *const c_void));
                    return Err(format!(
                        "不支持的 WASAPI 音频格式: tag={} bits={} channels={} sample_rate={}",
                        format_tag, bits_per_sample, channels, sample_rate
                    ));
                }
            }
            .to_string();

            audio_client
                .Initialize(
                    AUDCLNT_SHAREMODE_SHARED,
                    AUDCLNT_STREAMFLAGS_LOOPBACK,
                    10_000_000,
                    0,
                    mix_format,
                    None,
                )
                .map_err(|e| format!("初始化 WASAPI loopback 失败: {}", e))?;
            CoTaskMemFree(Some(mix_format as *const c_void));

            let capture_client: IAudioCaptureClient = audio_client
                .GetService()
                .map_err(|e| format!("获取 WASAPI capture client 失败: {}", e))?;
            let mut file =
                File::create(&path).map_err(|e| format!("创建系统声音缓存失败: {}", e))?;
            let mut bytes_written = 0_u64;
            let mut peak_level = 0.0_f32;
            let mut last_level_emit = Instant::now() - Duration::from_millis(100);

            audio_client
                .Start()
                .map_err(|e| format!("启动 WASAPI loopback 失败: {}", e))?;

            while !stop.load(Ordering::Relaxed) {
                let mut packet_size = capture_client
                    .GetNextPacketSize()
                    .map_err(|e| format!("读取 WASAPI packet size 失败: {}", e))?;
                while packet_size > 0 {
                    let mut data: *mut u8 = ptr::null_mut();
                    let mut frames = 0_u32;
                    let mut flags = 0_u32;
                    capture_client
                        .GetBuffer(&mut data, &mut frames, &mut flags, None, None)
                        .map_err(|e| format!("读取 WASAPI buffer 失败: {}", e))?;
                    let byte_len = frames as usize * block_align;
                    if flags & AUDCLNT_BUFFERFLAGS_SILENT.0 as u32 != 0 || data.is_null() {
                        let zeros = vec![0_u8; byte_len];
                        file.write_all(&zeros)
                            .map_err(|e| format!("写入静音 WASAPI buffer 失败: {}", e))?;
                        peak_level = peak_level.max(0.0);
                    } else {
                        let buffer = std::slice::from_raw_parts(data, byte_len);
                        file.write_all(buffer)
                            .map_err(|e| format!("写入 WASAPI buffer 失败: {}", e))?;
                        peak_level =
                            peak_level.max(audio_level_from_samples(buffer, &sample_format));
                    }
                    bytes_written += byte_len as u64;
                    capture_client
                        .ReleaseBuffer(frames)
                        .map_err(|e| format!("释放 WASAPI buffer 失败: {}", e))?;
                    if last_level_emit.elapsed() >= Duration::from_millis(80) {
                        emit_audio_level(&app_handle, peak_level);
                        peak_level = 0.0;
                        last_level_emit = Instant::now();
                    }
                    packet_size = capture_client
                        .GetNextPacketSize()
                        .map_err(|e| format!("读取 WASAPI packet size 失败: {}", e))?;
                }
                if last_level_emit.elapsed() >= Duration::from_millis(120) {
                    emit_audio_level(&app_handle, peak_level);
                    peak_level = 0.0;
                    last_level_emit = Instant::now();
                }
                thread::sleep(Duration::from_millis(10));
            }

            let _ = audio_client.Stop();
            emit_audio_level(&app_handle, 0.0);
            file.flush()
                .map_err(|e| format!("刷新系统声音缓存失败: {}", e))?;

            Ok(AudioSegment {
                path,
                sample_rate,
                channels,
                sample_format,
                bytes_written,
            })
        })();

        CoUninitialize();
        result
    }
}

fn finish_audio_capture(session: &mut RecordingSession, capture: AudioCaptureSession) {
    capture.stop.store(true, Ordering::Relaxed);
    match capture.handle.join() {
        Ok(Ok(segment)) => {
            append_debug_log(
                &session.temp_dir,
                format!(
                    "wasapi loopback stopped: path={} bytes={} sample_format={} sample_rate={} channels={}",
                    display_path(&segment.path),
                    segment.bytes_written,
                    segment.sample_format,
                    segment.sample_rate,
                    segment.channels
                ),
            );
            if segment.bytes_written > 0 {
                session.audio_segments.push(segment);
            }
        }
        Ok(Err(error)) => {
            append_debug_log(
                &session.temp_dir,
                format!("wasapi loopback failed: {}", error),
            );
            warn!("[Plugin:screen-recorder] wasapi loopback failed: {}", error);
        }
        Err(_) => {
            append_debug_log(&session.temp_dir, "wasapi loopback thread panicked");
            warn!("[Plugin:screen-recorder] wasapi loopback thread panicked");
        }
    }
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
    let mut audio_devices = Vec::new();
    if let Some(device) = native_system_audio_device() {
        if !audio_devices.iter().any(|existing| existing == &device) {
            audio_devices.push(device);
        }
    }
    let system_audio_available = audio_devices
        .iter()
        .any(|device| is_system_audio_device(device));
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
    .title("区域录制")
    .inner_size(width, height)
    .min_inner_size(420.0, 260.0)
    .position(x, y)
    .resizable(true)
    .always_on_top(true)
    .skip_taskbar(false)
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
        tokio::time::sleep(tokio::time::Duration::from_millis(2500)).await;
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
pub fn screen_recorder_set_overlay_window_region(
    app_handle: AppHandle,
    window: tauri::Window,
    region: Option<OverlayWindowRegion>,
) -> Result<(), String> {
    require_plugin(&app_handle)?;
    #[cfg(target_os = "windows")]
    {
        use windows::Win32::Foundation::HWND;
        use windows::Win32::Graphics::Gdi::{
            CombineRgn, CreateRectRgn, DeleteObject, SetWindowRgn, RGN_OR,
        };

        let raw_hwnd = window.hwnd().map_err(|e| e.to_string())?;
        let hwnd = HWND(raw_hwnd.0 as _);
        let Some(region) = region else {
            unsafe {
                SetWindowRgn(hwnd, None, true);
            }
            return Ok(());
        };

        let width = region.width.max(1);
        let height = region.height.max(1);
        let top_height = region.top_height.clamp(0, height);
        let bottom_height = region.bottom_height.clamp(0, height.saturating_sub(top_height));

        if top_height <= 0 && bottom_height <= 0 {
            unsafe {
                SetWindowRgn(hwnd, None, true);
            }
            return Ok(());
        }

        unsafe {
            let combined = CreateRectRgn(0, 0, width, top_height.max(1));
            if bottom_height > 0 {
                let bottom = CreateRectRgn(0, height - bottom_height, width, height);
                CombineRgn(Some(combined), Some(combined), Some(bottom), RGN_OR);
                let _ = DeleteObject(bottom.into());
            }

            let result = SetWindowRgn(hwnd, Some(combined), true);
            if result == 0 {
                let _ = DeleteObject(combined.into());
                return Err("设置录屏窗口区域失败".to_string());
            }
        }
    }
    #[cfg(not(target_os = "windows"))]
    {
        let _ = (window, region);
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
        use windows::Win32::Graphics::Dwm::{DwmGetWindowAttribute, DWMWINDOWATTRIBUTE};
        use windows::Win32::UI::Input::KeyboardAndMouse::{GetAsyncKeyState, VK_LBUTTON};
        use windows::Win32::UI::WindowsAndMessaging::{
            GetAncestor, GetCursorPos, GetWindowRect, GetWindowTextLengthW, GetWindowTextW,
            IsWindowVisible, LoadCursorW, SetCursor, WindowFromPoint, GA_ROOT, IDC_HAND,
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

        fn set_hand_cursor() {
            if let Ok(cursor) = unsafe { LoadCursorW(None, IDC_HAND) } {
                unsafe {
                    SetCursor(Some(cursor));
                }
            }
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
        thread::sleep(Duration::from_millis(80));

        let deadline = Instant::now() + Duration::from_secs(20);
        while left_button_down() {
            set_hand_cursor();
            if Instant::now() > deadline {
                let _ = window.set_focus();
                let _ = window.set_ignore_cursor_events(false);
                return Err("窗口捕捉超时".to_string());
            }
            thread::sleep(Duration::from_millis(16));
        }

        let point = cursor_pos()?;
        let raw_hwnd = unsafe { WindowFromPoint(point) };
        if raw_hwnd.0.is_null() {
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
            let _ = window.set_focus();
            let _ = window.set_ignore_cursor_events(false);
            return Err("目标窗口不可见".to_string());
        }

        let mut rect = RECT::default();
        let dwm_result = unsafe {
            DwmGetWindowAttribute(
                hwnd,
                DWMWINDOWATTRIBUTE(9), // DWMWA_EXTENDED_FRAME_BOUNDS
                &mut rect as *mut _ as *mut _,
                std::mem::size_of::<RECT>() as u32,
            )
        };
        if dwm_result.is_err() {
            unsafe { GetWindowRect(hwnd, &mut rect) }
                .map_err(|e| format!("读取目标窗口边界失败: {}", e))?;
        }

        let width = (rect.right - rect.left).max(1) as u32;
        let height = (rect.bottom - rect.top).max(1) as u32;
        let title = window_title(hwnd);

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

fn count_png_frames(dir: &Path) -> Result<usize, String> {
    let entries = fs::read_dir(dir)
        .map_err(|e| format!("读取 GIF 帧目录失败 {}: {}", dir.display(), e))?;
    Ok(entries
        .filter_map(Result::ok)
        .filter(|entry| {
            entry
                .path()
                .extension()
                .and_then(|extension| extension.to_str())
                .is_some_and(|extension| extension.eq_ignore_ascii_case("png"))
        })
        .count())
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
) -> Result<
    (
        Child,
        PathBuf,
        Option<String>,
        PathBuf,
        Option<AudioCaptureSession>,
    ),
    String,
> {
    #[cfg(not(target_os = "windows"))]
    {
        let _ = (app_handle, temp_dir, region, fps, quality, audio, index);
        return Err("区域录制当前仅支持 Windows + FFmpeg。".to_string());
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
        let use_ddagrab = ffmpeg_supports_filter(&ffmpeg.path, "ddagrab");
        let capture_backend = if use_ddagrab { "ddagrab" } else { "gdigrab" };
        let mut audio_capture = if audio {
            match start_wasapi_loopback_capture(app_handle.clone(), temp_dir, index) {
                Ok(capture) => {
                    append_debug_log(
                        temp_dir,
                        format!("wasapi loopback started: segment=#{index}"),
                    );
                    Some(capture)
                }
                Err(error) => {
                    append_debug_log(temp_dir, format!("wasapi loopback start failed: {}", error));
                    warn!(
                        "[Plugin:screen-recorder] wasapi loopback start failed: {}",
                        error
                    );
                    None
                }
            }
        } else {
            None
        };
        let audio_device = audio_capture
            .as_ref()
            .map(|_| "WASAPI loopback (default render device)".to_string())
            .or_else(|| {
                if audio {
                    default_audio_device(app_handle)
                } else {
                    None
                }
            });

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
        ];
        let mut video_filters: Vec<String> = Vec::new();
        if use_ddagrab {
            args.extend([
                "-f".to_string(),
                "lavfi".to_string(),
                "-i".to_string(),
                format!(
                    "ddagrab=framerate={}:offset_x={}:offset_y={}:video_size={}:draw_mouse=1:output_fmt=bgra:dup_frames=0",
                    fps_text,
                    region.screen_x,
                    region.screen_y,
                    video_size
                ),
            ]);
            video_filters.extend(["-vf".to_string(), "hwdownload,format=bgra".to_string()]);
        } else {
            args.extend([
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
            ]);
        }

        if audio_capture.is_none() {
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
        } else {
            args.push("-an".to_string());
        }

        args.extend(video_filters);
        args.extend([
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

        if audio_capture.is_none() && audio_device.is_some() {
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
                "spawn segment #{index}: backend={} region=({}, {}) {}x{} scale={} fps={} quality={} audio_requested={} audio_device={:?} output={} ffmpeg_log={}",
                capture_backend,
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
        append_debug_log(
            temp_dir,
            format!("spawn segment #{index} command: {command_line}"),
        );
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
        let child = match command.spawn() {
            Ok(child) => child,
            Err(error) => {
                if let Some(capture) = audio_capture.take() {
                    capture.stop.store(true, Ordering::Relaxed);
                    let _ = capture.handle.join();
                }
                return Err(format!("启动 FFmpeg 录屏失败: {}", error));
            }
        };
        append_debug_log(
            temp_dir,
            format!(
                "segment #{index} spawned: pid={} elapsed_ms={}",
                child.id(),
                started.elapsed().as_millis()
            ),
        );

        Ok((child, output, audio_device, segment_log, audio_capture))
    }
}

fn stop_child(child: &mut Child) -> Option<i32> {
    if let Some(mut stdin) = child.stdin.take() {
        let _ = stdin.write_all(b"q\n");
        let _ = stdin.flush();
    }

    for _ in 0..FFMPEG_STOP_WAIT_ATTEMPTS {
        if let Some(status) = child.try_wait().ok().flatten() {
            return status.code();
        }
        thread::sleep(Duration::from_millis(FFMPEG_STOP_WAIT_INTERVAL_MS));
    }

    let _ = child.kill();
    child.wait().ok().and_then(|status| status.code())
}

fn terminate_process_by_pid(pid: u32) {
    if pid == 0 {
        return;
    }

    #[cfg(target_os = "windows")]
    unsafe {
        use windows::Win32::Foundation::CloseHandle;
        use windows::Win32::System::Threading::{OpenProcess, TerminateProcess, PROCESS_TERMINATE};

        if let Ok(handle) = OpenProcess(PROCESS_TERMINATE, false, pid) {
            if !handle.is_invalid() {
                let _ = TerminateProcess(handle, 1);
                let _ = CloseHandle(handle);
            }
        }
    }
}

fn stop_active_segment(session: &mut RecordingSession) {
    let audio_capture = session.audio_capture.take();
    if let Some(capture) = &audio_capture {
        capture.stop.store(true, Ordering::Relaxed);
    }
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
    if let Some(capture) = audio_capture {
        finish_audio_capture(session, capture);
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
    let (child, output, audio_device, segment_log, audio_capture) =
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
        audio_segments: Vec::new(),
        audio_capture,
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
    let (child, output, audio_device, segment_log, audio_capture) = spawn_segment(
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
    session.audio_capture = audio_capture;
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

#[tauri::command]
pub fn screen_recorder_cancel_export(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    EXPORT_CANCEL_REQUESTED.store(true, Ordering::SeqCst);
    let pid = ACTIVE_EXPORT_PID.load(Ordering::SeqCst);
    terminate_process_by_pid(pid);
    Ok(())
}

fn concat_file_line(path: &Path) -> String {
    let value = path
        .to_string_lossy()
        .replace('\\', "/")
        .replace('\'', "'\\''");
    format!("file '{}'\n", value)
}

fn validate_video_segment(
    ffmpeg_path: &Path,
    temp_dir: &Path,
    segment: &Path,
) -> Result<u64, String> {
    let size = fs::metadata(segment)
        .map_err(|e| format!("读取片段文件信息失败 {}: {}", segment.display(), e))?
        .len();
    if size == 0 {
        return Err("片段文件为空".to_string());
    }

    let mut command = Command::new(ffmpeg_path);
    command
        .args(["-hide_banner", "-nostdin", "-v", "error", "-i"])
        .arg(segment)
        .args(["-map", "0:v:0", "-frames:v", "1", "-f", "null", "-"])
        .stdout(Stdio::null())
        .stderr(Stdio::piped());
    #[cfg(target_os = "windows")]
    {
        command.creation_flags(0x08000000);
    }
    let output = command
        .output()
        .map_err(|e| format!("校验录屏片段失败 {}: {}", segment.display(), e))?;
    if output.status.success() {
        return Ok(size);
    }

    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
    append_debug_log(
        temp_dir,
        format!(
            "segment validation failed: path={} size_bytes={} error={}",
            display_path(segment),
            size,
            stderr
        ),
    );
    Err(if stderr.is_empty() {
        "FFmpeg 无法读取片段".to_string()
    } else {
        stderr
    })
}

fn write_concat_file(session: &RecordingSession, ffmpeg_path: &Path) -> Result<PathBuf, String> {
    let concat_path = session.temp_dir.join("segments.txt");
    let mut content = String::new();
    let mut segment_errors = Vec::new();
    for segment in &session.segments {
        if segment.is_file() {
            match validate_video_segment(ffmpeg_path, &session.temp_dir, segment) {
                Ok(size) => {
                    content.push_str(&concat_file_line(segment));
                    append_debug_log(
                        &session.temp_dir,
                        format!(
                            "concat include segment: path={} size_bytes={} validation=ok",
                            display_path(segment),
                            size
                        ),
                    );
                }
                Err(error) => {
                    segment_errors.push(format!("{}: {}", display_path(segment), error));
                }
            }
        } else {
            let message = format!("片段文件不存在: {}", display_path(segment));
            segment_errors.push(message.clone());
            append_debug_log(
                &session.temp_dir,
                format!(
                    "concat skip missing segment: path={}",
                    display_path(segment)
                ),
            );
        }
    }
    if !segment_errors.is_empty() {
        append_debug_log(
            &session.temp_dir,
            format!("concat aborted: invalid_segments={:?}", segment_errors),
        );
        return Err(format!(
            "录屏片段未完整写入，无法导出。请重新录制；首个异常片段：{}",
            segment_errors
                .first()
                .cloned()
                .unwrap_or_else(|| "未知错误".to_string())
        ));
    }
    if content.is_empty() {
        return Err("没有可导出的录屏片段".to_string());
    }
    fs::write(&concat_path, content).map_err(|e| format!("写入片段列表失败: {}", e))?;
    Ok(concat_path)
}

fn write_combined_audio(session: &RecordingSession) -> Result<Option<AudioSegment>, String> {
    if session.audio_segments.is_empty() {
        return Ok(None);
    }

    let first = &session.audio_segments[0];
    if session.audio_segments.iter().any(|segment| {
        segment.sample_rate != first.sample_rate
            || segment.channels != first.channels
            || segment.sample_format != first.sample_format
    }) {
        return Err("系统声音片段格式不一致，无法合并".to_string());
    }

    let output = session.temp_dir.join("system_audio.raw");
    let mut writer =
        File::create(&output).map_err(|e| format!("创建系统声音合并文件失败: {}", e))?;
    let mut bytes_written = 0_u64;
    for segment in &session.audio_segments {
        append_debug_log(
            &session.temp_dir,
            format!(
                "audio concat include segment: path={} size_bytes={} sample_format={} sample_rate={} channels={}",
                display_path(&segment.path),
                segment.bytes_written,
                segment.sample_format,
                segment.sample_rate,
                segment.channels
            ),
        );
        let data = fs::read(&segment.path)
            .map_err(|e| format!("读取系统声音片段失败 {}: {}", segment.path.display(), e))?;
        writer
            .write_all(&data)
            .map_err(|e| format!("写入系统声音合并文件失败: {}", e))?;
        bytes_written += data.len() as u64;
    }
    writer
        .flush()
        .map_err(|e| format!("刷新系统声音合并文件失败: {}", e))?;

    Ok(Some(AudioSegment {
        path: output,
        sample_rate: first.sample_rate,
        channels: first.channels,
        sample_format: first.sample_format.clone(),
        bytes_written,
    }))
}

fn run_ffmpeg_with_tick<F>(
    mut command: Command,
    label: &str,
    debug_dir: Option<&Path>,
    mut on_tick: F,
) -> Result<(), String>
where
    F: FnMut(),
{
    #[cfg(target_os = "windows")]
    {
        command.creation_flags(0x08000000);
    }
    let started = Instant::now();
    command.stdout(Stdio::piped()).stderr(Stdio::piped());
    let mut child = command
        .spawn()
        .map_err(|e| format!("执行 FFmpeg {} 失败: {}", label, e))?;
    ACTIVE_EXPORT_PID.store(child.id(), Ordering::SeqCst);

    let output = loop {
        if EXPORT_CANCEL_REQUESTED.load(Ordering::SeqCst) {
            let _ = child.kill();
            let output = child
                .wait_with_output()
                .map_err(|e| format!("取消 FFmpeg {} 失败: {}", label, e))?;
            ACTIVE_EXPORT_PID.store(0, Ordering::SeqCst);
            if let Some(debug_dir) = debug_dir {
                append_debug_log(
                    debug_dir,
                    format!(
                        "ffmpeg {} canceled: elapsed_ms={} stdout_bytes={} stderr_bytes={}",
                        label,
                        started.elapsed().as_millis(),
                        output.stdout.len(),
                        output.stderr.len()
                    ),
                );
                append_debug_block(
                    debug_dir,
                    &format!("ffmpeg {} canceled stdout", label),
                    &output.stdout,
                );
                append_debug_block(
                    debug_dir,
                    &format!("ffmpeg {} canceled stderr", label),
                    &output.stderr,
                );
            }
            return Err("导出已取消".to_string());
        }

        match child.try_wait() {
            Ok(Some(_)) => {
                let output = child
                    .wait_with_output()
                    .map_err(|e| format!("读取 FFmpeg {} 输出失败: {}", label, e))?;
                ACTIVE_EXPORT_PID.store(0, Ordering::SeqCst);
                break output;
            }
            Ok(None) => {
                on_tick();
                thread::sleep(Duration::from_millis(100));
            }
            Err(error) => {
                ACTIVE_EXPORT_PID.store(0, Ordering::SeqCst);
                return Err(format!("等待 FFmpeg {} 失败: {}", label, error));
            }
        }
    };
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
        append_debug_block(
            debug_dir,
            &format!("ffmpeg {} stdout", label),
            &output.stdout,
        );
        append_debug_block(
            debug_dir,
            &format!("ffmpeg {} stderr", label),
            &output.stderr,
        );
    }
    if output.status.success() {
        return Ok(());
    }
    let stderr = String::from_utf8_lossy(&output.stderr);
    Err(format!("FFmpeg {} 失败: {}", label, stderr.trim()))
}

fn run_ffmpeg(command: Command, label: &str, debug_dir: Option<&Path>) -> Result<(), String> {
    run_ffmpeg_with_tick(command, label, debug_dir, || {})
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
    duration_ms: Option<u64>,
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
    EXPORT_CANCEL_REQUESTED.store(false, Ordering::SeqCst);
    ACTIVE_EXPORT_PID.store(0, Ordering::SeqCst);

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
                "export request: session={} format={} fps={} quality={} save_path={} duration_ms={:?} segments={} has_audio={} audio_device={:?}",
                session.id,
                format,
                fps,
                quality,
                display_path(&output_path),
                duration_ms,
                session.segments.len(),
                session.audio_device.is_some(),
                &session.audio_device
            ),
        );
        let concat_path = write_concat_file(&session, &ffmpeg.path)?;
        append_debug_log(
            &session.temp_dir,
            format!("concat file written: {}", display_path(&concat_path)),
        );

        match format.as_str() {
            "gif" => {
                let fps_text = fps.to_string();
                let estimated_total_frames = duration_ms
                    .map(|duration| ((duration as f64 / 1000.0) * fps as f64).ceil() as u32)
                    .filter(|frames| *frames > 0);
                let frames_dir = session.temp_dir.join("gif_frames");
                let _ = fs::remove_dir_all(&frames_dir);
                fs::create_dir_all(&frames_dir)
                    .map_err(|e| format!("创建 GIF 临时帧目录失败: {}", e))?;
                let frame_pattern = frames_dir.join("frame_%06d.png");
                let frame_filter = format!("fps={},format=rgba", fps);
                append_debug_log(
                    &session.temp_dir,
                    format!(
                        "export GIF frames: filter={} pattern={}",
                        frame_filter,
                        display_path(&frame_pattern)
                    ),
                );
                emit_export_progress(
                    &app_handle,
                    "frames",
                    "正在生成 GIF 帧",
                    0.03,
                    0,
                    estimated_total_frames,
                );
                let mut frames_command = Command::new(&ffmpeg.path);
                frames_command
                    .args([
                        "-hide_banner",
                        "-nostdin",
                        "-y",
                        "-f",
                        "concat",
                        "-safe",
                        "0",
                        "-i",
                    ])
                    .arg(&concat_path)
                    .args(["-an", "-vf", &frame_filter])
                    .arg(&frame_pattern);
                let mut last_frame_progress = Instant::now() - Duration::from_millis(300);
                run_ffmpeg_with_tick(
                    frames_command,
                    "生成 GIF 临时帧",
                    Some(&session.temp_dir),
                    || {
                        if last_frame_progress.elapsed() < Duration::from_millis(250) {
                            return;
                        }
                        last_frame_progress = Instant::now();
                        let current = count_png_frames(&frames_dir).unwrap_or(0) as u32;
                        let stage_progress = estimated_total_frames
                            .map(|total| (current as f32 / total.max(1) as f32).clamp(0.0, 1.0))
                            .unwrap_or(0.0);
                        let progress = if estimated_total_frames.is_some() {
                            0.03 + stage_progress * 0.62
                        } else {
                            (0.08 + (current as f32 / 1200.0)).min(0.62)
                        };
                        let message = match estimated_total_frames {
                            Some(total) => format!("正在生成 GIF 帧 {}/{}", current, total),
                            None => format!("正在生成 GIF 帧 {}", current),
                        };
                        emit_export_progress(
                            &app_handle,
                            "frames",
                            message,
                            progress,
                            current,
                            estimated_total_frames,
                        );
                    },
                )?;
                let frame_count = count_png_frames(&frames_dir)?;
                if frame_count == 0 {
                    return Err("GIF 导出失败：没有生成任何临时帧".to_string());
                }
                let frame_count_u32 = frame_count.min(u32::MAX as usize) as u32;
                append_debug_log(
                    &session.temp_dir,
                    format!(
                        "export GIF frames ready: dir={} count={}",
                        display_path(&frames_dir),
                        frame_count
                    ),
                );
                emit_export_progress(
                    &app_handle,
                    "frames",
                    format!("GIF 帧生成完成 {}/{}", frame_count, frame_count),
                    0.65,
                    frame_count_u32,
                    Some(frame_count_u32),
                );

                let palette_path = session.temp_dir.join("palette.png");
                let palette_filter = format!("palettegen=max_colors={}", gif_colors(&quality));
                append_debug_log(
                    &session.temp_dir,
                    format!(
                        "export GIF palette: filter={} palette={}",
                        palette_filter,
                        display_path(&palette_path)
                    ),
                );
                emit_export_progress(
                    &app_handle,
                    "palette",
                    "正在生成 GIF 调色板",
                    0.68,
                    frame_count_u32,
                    Some(frame_count_u32),
                );
                let mut palette_command = Command::new(&ffmpeg.path);
                palette_command
                    .args([
                        "-hide_banner",
                        "-nostdin",
                        "-y",
                        "-framerate",
                        &fps_text,
                        "-i",
                    ])
                    .arg(&frame_pattern)
                    .args(["-an", "-vf", &palette_filter, "-frames:v", "1", "-update", "1"])
                    .arg(&palette_path);
                run_ffmpeg(palette_command, "生成 GIF 调色板", Some(&session.temp_dir))?;
                emit_export_progress(
                    &app_handle,
                    "palette",
                    "GIF 调色板生成完成",
                    0.76,
                    frame_count_u32,
                    Some(frame_count_u32),
                );

                let gif_filter = "[0:v][1:v]paletteuse=dither=bayer[v]";
                append_debug_log(
                    &session.temp_dir,
                    format!(
                        "export GIF: filter={} output={}",
                        gif_filter,
                        display_path(&output_path)
                    ),
                );
                emit_export_progress(
                    &app_handle,
                    "encode",
                    format!("正在合成 GIF，共 {} 帧", frame_count),
                    0.8,
                    0,
                    Some(frame_count_u32),
                );
                let mut gif_command = Command::new(&ffmpeg.path);
                gif_command
                    .args([
                        "-hide_banner",
                        "-nostdin",
                        "-y",
                        "-framerate",
                        &fps_text,
                        "-i",
                    ])
                    .arg(&frame_pattern)
                    .arg("-i")
                    .arg(&palette_path)
                    .args([
                        "-an",
                        "-filter_complex",
                        gif_filter,
                        "-map",
                        "[v]",
                        "-loop",
                        "0",
                    ])
                    .arg(&output_path);
                let mut encode_progress = 0.8_f32;
                let mut last_encode_progress = Instant::now() - Duration::from_millis(500);
                run_ffmpeg_with_tick(
                    gif_command,
                    "导出 GIF",
                    Some(&session.temp_dir),
                    || {
                        if last_encode_progress.elapsed() < Duration::from_millis(500) {
                            return;
                        }
                        last_encode_progress = Instant::now();
                        encode_progress = (encode_progress + 0.015).min(0.96);
                        emit_export_progress(
                            &app_handle,
                            "encode",
                            format!("正在合成 GIF，共 {} 帧", frame_count),
                            encode_progress,
                            frame_count_u32,
                            Some(frame_count_u32),
                        );
                    },
                )?;
                emit_export_progress(
                    &app_handle,
                    "done",
                    "GIF 导出完成",
                    1.0,
                    frame_count_u32,
                    Some(frame_count_u32),
                );
            }
            _ => {
                emit_export_progress(&app_handle, "encode", "正在导出 MP4", 0.15, 0, None);
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
                    .args([
                        "-hide_banner",
                        "-nostdin",
                        "-y",
                        "-f",
                        "concat",
                        "-safe",
                        "0",
                        "-i",
                    ])
                    .arg(&concat_path);
                let combined_audio = write_combined_audio(&session)?;
                if let Some(audio) = &combined_audio {
                    append_debug_log(
                        &session.temp_dir,
                        format!(
                            "export MP4 system audio input: path={} size_bytes={} sample_format={} sample_rate={} channels={}",
                            display_path(&audio.path),
                            audio.bytes_written,
                            audio.sample_format,
                            audio.sample_rate,
                            audio.channels
                        ),
                    );
                    mp4_command
                        .args(["-f", &audio.sample_format])
                        .arg("-ar")
                        .arg(audio.sample_rate.to_string())
                        .arg("-ac")
                        .arg(audio.channels.to_string())
                        .arg("-i")
                        .arg(&audio.path)
                        .args(["-map", "0:v:0", "-map", "1:a:0"]);
                }
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
                if combined_audio.is_some() {
                    mp4_command.args(["-c:a", "aac", "-b:a", "192k", "-shortest"]);
                } else {
                    mp4_command.arg("-an");
                }
                mp4_command.args(["-movflags", "+faststart"]);
                mp4_command.arg(&output_path);
                run_ffmpeg(mp4_command, "导出 MP4", Some(&session.temp_dir))?;
                emit_export_progress(&app_handle, "done", "MP4 导出完成", 1.0, 0, None);
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
                    session.id, error
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
            has_audio: !session.audio_segments.is_empty(),
            audio_device: session.audio_device.clone(),
            debug_log_path,
        })
    })();

    match export_result {
        Ok(result) => {
            EXPORT_CANCEL_REQUESTED.store(false, Ordering::SeqCst);
            ACTIVE_EXPORT_PID.store(0, Ordering::SeqCst);
            let _ = fs::remove_dir_all(&session.temp_dir);
            info!(
                "[Plugin:screen-recorder] exported session {} to {}",
                session.id, result.path
            );
            Ok(result)
        }
        Err(error) => {
            ACTIVE_EXPORT_PID.store(0, Ordering::SeqCst);
            if EXPORT_CANCEL_REQUESTED.swap(false, Ordering::SeqCst) || error == "导出已取消" {
                let _ = fs::remove_file(&output_path);
                let _ = fs::remove_dir_all(&session.temp_dir);
            } else {
                let mut state = RECORDING_SESSION
                    .lock()
                    .map_err(|e| format!("录屏状态锁定失败: {}", e))?;
                *state = Some(session);
            }
            Err(error)
        }
    }
}

#[tauri::command]
pub fn screen_recorder_compress_recording(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    Ok(())
}
