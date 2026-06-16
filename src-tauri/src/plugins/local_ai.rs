use log::{info, warn};
use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::fs::{self, OpenOptions};
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::{
    atomic::{AtomicBool, Ordering},
    LazyLock, Mutex,
};
use std::time::{Duration, Instant};
use tauri::{AppHandle, Manager};

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

const PLUGIN_ID: &str = "local-ai";
const RUNTIME_PLUGIN_ID: &str = "local-ai-llama-runtime";
const DEFAULT_MODEL_DIR: &str =
    r"E:\Models\HauhauCS\Qwen3.5-4B-Uncensored-HauhauCS-Aggressive";
const DEFAULT_HOST: &str = "127.0.0.1";
const DEFAULT_PORT: u16 = 39281;
const HEALTH_TIMEOUT_SECS: u64 = 90;
const IDLE_CHECK_INTERVAL_SECS: u64 = 30;

static SERVICE_STATE: LazyLock<Mutex<LocalAiServiceState>> =
    LazyLock::new(|| Mutex::new(LocalAiServiceState::default()));
static IDLE_MONITOR_RUNNING: AtomicBool = AtomicBool::new(false);

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiConfig {
    pub model_dir: String,
    pub model_path: Option<String>,
    pub mmproj_path: Option<String>,
    pub runtime_path: Option<String>,
    pub host: String,
    pub port: u16,
    pub ctx_size: u32,
    pub gpu_layers: i32,
    pub main_gpu: u32,
    pub threads: u32,
    pub batch_size: u32,
    pub ubatch_size: u32,
    pub flash_attn: bool,
    pub kv_offload: bool,
    pub mmap: bool,
    pub auto_start_on_request: bool,
    pub idle_timeout_minutes: u32,
    pub keep_alive: bool,
    pub temperature: f32,
    pub max_tokens: u32,
    pub request_timeout_secs: u32,
}

impl Default for LocalAiConfig {
    fn default() -> Self {
        let available_threads = std::thread::available_parallelism()
            .map(|threads| threads.get() as u32)
            .unwrap_or(4);
        Self {
            model_dir: DEFAULT_MODEL_DIR.to_string(),
            model_path: None,
            mmproj_path: None,
            runtime_path: None,
            host: DEFAULT_HOST.to_string(),
            port: DEFAULT_PORT,
            ctx_size: 4096,
            gpu_layers: 28,
            main_gpu: 0,
            threads: available_threads.saturating_sub(2).max(2),
            batch_size: 512,
            ubatch_size: 128,
            flash_attn: false,
            kv_offload: true,
            mmap: true,
            auto_start_on_request: true,
            idle_timeout_minutes: 10,
            keep_alive: false,
            temperature: 0.3,
            max_tokens: 1024,
            request_timeout_secs: 600,
        }
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiRuntimeStatus {
    pub available: bool,
    pub path: Option<String>,
    pub source: Option<String>,
    pub searched_paths: Vec<String>,
    pub message: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiModelScan {
    pub model_dir: String,
    pub exists: bool,
    pub main_models: Vec<String>,
    pub mmproj_models: Vec<String>,
    pub selected_model_path: Option<String>,
    pub selected_mmproj_path: Option<String>,
    pub message: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiServiceStatus {
    pub running: bool,
    pub healthy: bool,
    pub pid: Option<u32>,
    pub base_url: String,
    pub model_path: Option<String>,
    pub runtime_path: Option<String>,
    pub command_line: Option<String>,
    pub active_requests: usize,
    pub idle_timeout_minutes: u32,
    pub keep_alive: bool,
    pub last_error: Option<String>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiMessage {
    pub role: String,
    pub content: String,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiChatRequest {
    pub messages: Vec<LocalAiMessage>,
    pub temperature: Option<f32>,
    pub max_tokens: Option<u32>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiChatResponse {
    pub content: String,
}

#[derive(Default)]
struct LocalAiServiceState {
    child: Option<Child>,
    config: Option<LocalAiConfig>,
    model_path: Option<String>,
    runtime_path: Option<String>,
    command_line: Option<String>,
    last_activity: Option<Instant>,
    active_requests: usize,
    last_error: Option<String>,
}

struct LocalAiRequestGuard;

impl Drop for LocalAiRequestGuard {
    fn drop(&mut self) {
        if let Ok(mut state) = SERVICE_STATE.lock() {
            state.active_requests = state.active_requests.saturating_sub(1);
            state.last_activity = Some(Instant::now());
        }
    }
}

fn require_plugin(app_handle: &AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, PLUGIN_ID)
}

fn config_path(app_handle: &AppHandle) -> PathBuf {
    let config_dir = crate::json_config::get_data_dir(app_handle).join(".snippets-code");
    let _ = fs::create_dir_all(&config_dir);
    config_dir.join("local-ai.json")
}

fn read_config(app_handle: &AppHandle) -> LocalAiConfig {
    let path = config_path(app_handle);
    fs::read_to_string(path)
        .ok()
        .and_then(|content| serde_json::from_str::<LocalAiConfig>(&content).ok())
        .unwrap_or_default()
}

fn write_config(app_handle: &AppHandle, config: &LocalAiConfig) -> Result<(), String> {
    let path = config_path(app_handle);
    let json = serde_json::to_string_pretty(config)
        .map_err(|error| format!("序列化本地 AI 配置失败: {}", error))?;
    fs::write(&path, json).map_err(|error| {
        format!(
            "写入本地 AI 配置失败 {}: {}",
            path.to_string_lossy(),
            error
        )
    })
}

fn display_path(path: &Path) -> String {
    path.to_string_lossy().to_string()
}

fn base_url(config: &LocalAiConfig) -> String {
    format!("http://{}:{}", config.host, config.port)
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

fn log_path(app_handle: &AppHandle) -> PathBuf {
    let dir = crate::json_config::get_data_dir(app_handle).join(".snippets-code");
    let _ = fs::create_dir_all(&dir);
    dir.join("local-ai-llama-server.log")
}

fn candidate_runtime_paths(app_handle: &AppHandle, config: &LocalAiConfig) -> Vec<(PathBuf, String)> {
    let mut paths = Vec::new();

    if let Some(path) = config
        .runtime_path
        .as_deref()
        .map(str::trim)
        .filter(|value| !value.is_empty())
    {
        paths.push((PathBuf::from(path), "config:runtimePath".to_string()));
    }

    for env_name in ["SNIPPETS_LOCAL_AI_LLAMA_SERVER", "LLAMA_SERVER_PATH"] {
        if let Ok(value) = std::env::var(env_name) {
            if !value.trim().is_empty() {
                paths.push((PathBuf::from(value), format!("env:{}", env_name)));
            }
        }
    }

    for plugin_id in [RUNTIME_PLUGIN_ID, PLUGIN_ID] {
        for relative in [
            "resources/llama/llama-server.exe",
            "resources/llama/bin/llama-server.exe",
        ] {
            if let Ok(Some(path)) = crate::app_config::get_local_plugin_resource_path(
                app_handle.clone(),
                plugin_id.to_string(),
                relative.to_string(),
            ) {
                paths.push((PathBuf::from(path), format!("plugin:{}:{}", plugin_id, relative)));
            }
        }
    }

    if let Ok(resource_dir) = app_handle.path().resource_dir() {
        let resource_dir: PathBuf = resource_dir;
        for relative in [
            "resources/llama/llama-server.exe",
            "llama/llama-server.exe",
            "llama/bin/llama-server.exe",
        ] {
            paths.push((resource_dir.join(relative), format!("resource:{}", relative)));
        }
    }

    if let Ok(cwd) = std::env::current_dir() {
        for relative in [
            "docs/plugin-packages/local-ai-llama-runtime/resources/llama/llama-server.exe",
            "docs/plugin-packages/local-ai/resources/llama/llama-server.exe",
            "src-tauri/resources/llama/llama-server.exe",
        ] {
            paths.push((cwd.join(relative), format!("dev:{}", relative)));
        }
    }

    paths.push((PathBuf::from("llama-server"), "PATH".to_string()));
    paths.push((PathBuf::from("llama-server.exe"), "PATH".to_string()));
    paths
}

fn find_llama_server(app_handle: &AppHandle, config: &LocalAiConfig) -> (Option<(PathBuf, String)>, Vec<String>) {
    let candidates = candidate_runtime_paths(app_handle, config);
    let mut searched_paths = Vec::new();

    for (path, source) in candidates {
        searched_paths.push(display_path(&path));
        if source == "PATH" || path.is_file() {
            return (Some((path, source)), searched_paths);
        }
    }

    (None, searched_paths)
}

fn is_gguf_file(path: &Path) -> bool {
    path.extension()
        .and_then(|extension| extension.to_str())
        .map(|extension| extension.eq_ignore_ascii_case("gguf"))
        .unwrap_or(false)
}

fn is_mmproj_file(path: &Path) -> bool {
    path.file_name()
        .and_then(|name| name.to_str())
        .map(|name| name.to_ascii_lowercase().contains("mmproj"))
        .unwrap_or(false)
}

fn scan_model_dir(config: &LocalAiConfig) -> LocalAiModelScan {
    let model_dir = PathBuf::from(&config.model_dir);
    if !model_dir.is_dir() {
        return LocalAiModelScan {
            model_dir: config.model_dir.clone(),
            exists: false,
            main_models: Vec::new(),
            mmproj_models: Vec::new(),
            selected_model_path: config.model_path.clone(),
            selected_mmproj_path: config.mmproj_path.clone(),
            message: Some("模型目录不存在".to_string()),
        };
    }

    let mut main_models = Vec::new();
    let mut mmproj_models = Vec::new();
    if let Ok(entries) = fs::read_dir(&model_dir) {
        for entry in entries.flatten() {
            let path = entry.path();
            if !path.is_file() || !is_gguf_file(&path) {
                continue;
            }
            if is_mmproj_file(&path) {
                mmproj_models.push(display_path(&path));
            } else {
                main_models.push(display_path(&path));
            }
        }
    }
    main_models.sort();
    mmproj_models.sort();

    let selected_model_path = config
        .model_path
        .as_ref()
        .filter(|path| Path::new(path.as_str()).is_file())
        .cloned()
        .or_else(|| main_models.first().cloned());
    let selected_mmproj_path = config
        .mmproj_path
        .as_ref()
        .filter(|path| Path::new(path.as_str()).is_file())
        .cloned()
        .or_else(|| mmproj_models.first().cloned());
    let message = if selected_model_path.is_none() {
        Some("未找到主模型 GGUF 文件；下载中的 .part 文件不会被加载".to_string())
    } else {
        None
    };

    LocalAiModelScan {
        model_dir: config.model_dir.clone(),
        exists: true,
        main_models,
        mmproj_models,
        selected_model_path,
        selected_mmproj_path,
        message,
    }
}

fn resolve_model_paths(config: &LocalAiConfig) -> Result<(PathBuf, Option<PathBuf>), String> {
    let scan = scan_model_dir(config);
    let model_path = scan
        .selected_model_path
        .ok_or_else(|| scan.message.unwrap_or_else(|| "未找到主模型 GGUF 文件".to_string()))?;
    let model_path = PathBuf::from(model_path);
    if !model_path.is_file() {
        return Err(format!("主模型文件不存在: {}", display_path(&model_path)));
    }

    let mmproj_path = scan
        .selected_mmproj_path
        .map(PathBuf::from)
        .filter(|path| path.is_file());
    Ok((model_path, mmproj_path))
}

fn build_server_args(config: &LocalAiConfig, model_path: &Path, mmproj_path: Option<&Path>) -> Vec<String> {
    let mut args = vec![
        "--host".to_string(),
        config.host.clone(),
        "--port".to_string(),
        config.port.to_string(),
        "--model".to_string(),
        display_path(model_path),
        "--ctx-size".to_string(),
        config.ctx_size.to_string(),
        "--threads".to_string(),
        config.threads.to_string(),
        "--batch-size".to_string(),
        config.batch_size.to_string(),
        "--ubatch-size".to_string(),
        config.ubatch_size.to_string(),
        "--n-gpu-layers".to_string(),
        config.gpu_layers.to_string(),
        "--main-gpu".to_string(),
        config.main_gpu.to_string(),
    ];

    if let Some(mmproj_path) = mmproj_path {
        args.push("--mmproj".to_string());
        args.push(display_path(mmproj_path));
    }
    if config.flash_attn {
        args.push("--flash-attn".to_string());
    }
    if !config.kv_offload {
        args.push("--no-kv-offload".to_string());
    }
    if !config.mmap {
        args.push("--no-mmap".to_string());
    }

    args
}

fn server_command(program: &Path) -> Command {
    let mut command = Command::new(program);
    #[cfg(target_os = "windows")]
    {
        command.creation_flags(0x08000000);
    }
    command
}

async fn health_check_url(base_url: &str) -> bool {
    let url = format!("{}/health", base_url.trim_end_matches('/'));
    let Ok(client) = Client::builder()
        .timeout(Duration::from_secs(3))
        .build()
    else {
        return false;
    };

    client
        .get(url)
        .send()
        .await
        .map(|response| response.status().is_success())
        .unwrap_or(false)
}

async fn wait_until_healthy(base_url: &str, timeout: Duration) -> bool {
    let started = Instant::now();
    while started.elapsed() < timeout {
        if health_check_url(base_url).await {
            return true;
        }
        tokio::time::sleep(Duration::from_millis(700)).await;
    }
    false
}

fn is_child_running_locked(state: &mut LocalAiServiceState) -> bool {
    match state.child.as_mut() {
        Some(child) => match child.try_wait() {
            Ok(Some(status)) => {
                state.last_error = Some(format!("llama-server 已退出: {}", status));
                state.child = None;
                false
            }
            Ok(None) => true,
            Err(error) => {
                state.last_error = Some(format!("检查 llama-server 状态失败: {}", error));
                false
            }
        },
        None => false,
    }
}

fn stop_child_locked(state: &mut LocalAiServiceState) {
    if let Some(mut child) = state.child.take() {
        let pid = child.id();
        let _ = child.kill();
        let _ = child.wait();
        info!("[Plugin:local-ai] stopped llama-server pid={}", pid);
    }
    state.active_requests = 0;
}

fn start_idle_monitor() {
    if IDLE_MONITOR_RUNNING.swap(true, Ordering::SeqCst) {
        return;
    }

    tauri::async_runtime::spawn(async {
        loop {
            tokio::time::sleep(Duration::from_secs(IDLE_CHECK_INTERVAL_SECS)).await;
            let mut should_stop_monitor = false;
            if let Ok(mut state) = SERVICE_STATE.lock() {
                if !is_child_running_locked(&mut state) {
                    should_stop_monitor = true;
                } else if let Some(config) = state.config.clone() {
                    let idle_timeout = config.idle_timeout_minutes;
                    let should_stop = !config.keep_alive
                        && idle_timeout > 0
                        && state.active_requests == 0
                        && state
                            .last_activity
                            .map(|last| last.elapsed() >= Duration::from_secs(idle_timeout as u64 * 60))
                            .unwrap_or(false);
                    if should_stop {
                        info!(
                            "[Plugin:local-ai] idle timeout reached, stopping service after {} minutes",
                            idle_timeout
                        );
                        stop_child_locked(&mut state);
                        should_stop_monitor = true;
                    }
                }
            } else {
                should_stop_monitor = true;
            }

            if should_stop_monitor {
                IDLE_MONITOR_RUNNING.store(false, Ordering::SeqCst);
                break;
            }
        }
    });
}

fn mark_request_started() -> LocalAiRequestGuard {
    if let Ok(mut state) = SERVICE_STATE.lock() {
        state.active_requests += 1;
        state.last_activity = Some(Instant::now());
    }
    LocalAiRequestGuard
}

async fn ensure_service_running(app_handle: &AppHandle, config: &LocalAiConfig) -> Result<(), String> {
    let running = {
        let mut state = SERVICE_STATE
            .lock()
            .map_err(|error| format!("本地 AI 服务状态锁定失败: {}", error))?;
        is_child_running_locked(&mut state)
    };
    if running {
        return Ok(());
    }
    if !config.auto_start_on_request {
        return Err("本地 AI 服务未启动，请先在本地 AI 设置中启动服务".to_string());
    }

    start_service_inner(app_handle, config.clone()).await.map(|_| ())
}

async fn start_service_inner(
    app_handle: &AppHandle,
    mut config: LocalAiConfig,
) -> Result<LocalAiServiceStatus, String> {
    if config.host.trim().is_empty() {
        config.host = DEFAULT_HOST.to_string();
    }
    if config.host != "127.0.0.1" && config.host != "localhost" {
        return Err("本地 AI 服务仅允许绑定 127.0.0.1 或 localhost".to_string());
    }
    if config.port == 0 {
        config.port = DEFAULT_PORT;
    }

    let (runtime, _) = find_llama_server(app_handle, &config);
    let (runtime_path, runtime_source) =
        runtime.ok_or_else(|| "未找到 llama-server.exe，请安装 local-ai-llama-runtime 资源包或手动指定路径".to_string())?;
    let (model_path, mmproj_path) = resolve_model_paths(&config)?;
    let args = build_server_args(&config, &model_path, mmproj_path.as_deref());
    let command_line = format_command_line(&runtime_path, &args);
    let runtime_dir = runtime_path.parent().map(Path::to_path_buf);
    let log_path = log_path(app_handle);
    let log_stdout = OpenOptions::new()
        .create(true)
        .append(true)
        .open(&log_path)
        .map_err(|error| format!("创建本地 AI 日志失败: {}", error))?;
    let log_stderr = log_stdout
        .try_clone()
        .map_err(|error| format!("创建本地 AI 日志句柄失败: {}", error))?;

    {
        let mut state = SERVICE_STATE
            .lock()
            .map_err(|error| format!("本地 AI 服务状态锁定失败: {}", error))?;
        stop_child_locked(&mut state);
        state.last_error = None;
    }

    let mut command = server_command(&runtime_path);
    command
        .args(&args)
        .stdout(Stdio::from(log_stdout))
        .stderr(Stdio::from(log_stderr))
        .stdin(Stdio::null());
    if let Some(runtime_dir) = runtime_dir.as_ref() {
        command.current_dir(runtime_dir);
    }

    info!(
        "[Plugin:local-ai] starting llama-server source={} command={}",
        runtime_source, command_line
    );
    let child = command.spawn().map_err(|error| {
        format!(
            "启动 llama-server 失败: {}。如果是 CUDA runtime/driver mismatch，请更换匹配 CUDA 13.0/13.1 的 llama.cpp 运行包或升级显卡驱动。日志: {}",
            error,
            display_path(&log_path)
        )
    })?;
    let pid = child.id();

    {
        let mut state = SERVICE_STATE
            .lock()
            .map_err(|error| format!("本地 AI 服务状态锁定失败: {}", error))?;
        state.child = Some(child);
        state.config = Some(config.clone());
        state.model_path = Some(display_path(&model_path));
        state.runtime_path = Some(display_path(&runtime_path));
        state.command_line = Some(command_line);
        state.last_activity = Some(Instant::now());
        state.active_requests = 0;
    }

    let url = base_url(&config);
    let healthy = wait_until_healthy(&url, Duration::from_secs(HEALTH_TIMEOUT_SECS)).await;
    if !healthy {
        let mut state = SERVICE_STATE
            .lock()
            .map_err(|error| format!("本地 AI 服务状态锁定失败: {}", error))?;
        let error = format!(
            "llama-server 启动后未通过健康检查，请查看日志: {}",
            display_path(&log_path)
        );
        state.last_error = Some(error.clone());
        stop_child_locked(&mut state);
        return Err(error);
    }

    start_idle_monitor();
    info!("[Plugin:local-ai] llama-server healthy pid={}", pid);
    local_ai_get_status(app_handle.clone()).await
}

async fn chat_completion(
    app_handle: &AppHandle,
    messages: Vec<LocalAiMessage>,
    temperature: Option<f32>,
    max_tokens: Option<u32>,
) -> Result<String, String> {
    require_plugin(app_handle)?;
    if messages.is_empty() {
        return Err("消息不能为空".to_string());
    }

    let config = read_config(app_handle);
    ensure_service_running(app_handle, &config).await?;
    let _guard = mark_request_started();

    let client = Client::builder()
        .timeout(Duration::from_secs(config.request_timeout_secs as u64))
        .build()
        .map_err(|error| format!("创建本地 AI 请求客户端失败: {}", error))?;
    let url = format!("{}/v1/chat/completions", base_url(&config));
    let body = serde_json::json!({
        "model": "local-ai",
        "messages": messages,
        "temperature": temperature.unwrap_or(config.temperature),
        "max_tokens": max_tokens.unwrap_or(config.max_tokens),
        "stream": false
    });

    let response = client
        .post(url)
        .json(&body)
        .send()
        .await
        .map_err(|error| format!("请求本地 AI 服务失败: {}", error))?;
    let status = response.status();
    let value = response
        .json::<Value>()
        .await
        .map_err(|error| format!("解析本地 AI 响应失败: {}", error))?;
    if !status.is_success() {
        return Err(format!("本地 AI 服务返回错误 {}: {}", status, value));
    }

    value
        .get("choices")
        .and_then(|choices| choices.as_array())
        .and_then(|choices| choices.first())
        .and_then(|choice| choice.get("message"))
        .and_then(|message| message.get("content"))
        .and_then(|content| content.as_str())
        .map(|content| content.trim().to_string())
        .filter(|content| !content.is_empty())
        .ok_or_else(|| "本地 AI 响应中没有可用内容".to_string())
}

fn language_label(value: &str) -> &str {
    match value {
        "auto" => "auto-detected language",
        "zh" => "Simplified Chinese",
        "zh_tw" => "Traditional Chinese",
        "en" => "English",
        "ja" => "Japanese",
        "ko" => "Korean",
        "fr" => "French",
        "de" => "German",
        "ru" => "Russian",
        "es" => "Spanish",
        "pt_pt" => "Portuguese (Portugal)",
        "pt_br" => "Portuguese (Brazil)",
        "vi" => "Vietnamese",
        "id" => "Indonesian",
        "th" => "Thai",
        "ar" => "Arabic",
        _ => value,
    }
}

pub async fn translate_text(
    app_handle: AppHandle,
    text: String,
    from: String,
    to: String,
) -> Result<String, String> {
    let system_prompt = format!(
        "You are a precise translation engine. Translate from {} to {}. Preserve Markdown, code fences, inline code, URLs, numbers, and line breaks. Return only the translated text, with no explanations.",
        language_label(&from),
        language_label(&to)
    );
    let messages = vec![
        LocalAiMessage {
            role: "system".to_string(),
            content: system_prompt,
        },
        LocalAiMessage {
            role: "user".to_string(),
            content: text,
        },
    ];
    chat_completion(&app_handle, messages, Some(0.2), None).await
}

#[tauri::command]
pub fn local_ai_get_config(app_handle: AppHandle) -> Result<LocalAiConfig, String> {
    require_plugin(&app_handle)?;
    Ok(read_config(&app_handle))
}

#[tauri::command]
pub fn local_ai_save_config(
    app_handle: AppHandle,
    config: LocalAiConfig,
) -> Result<LocalAiConfig, String> {
    require_plugin(&app_handle)?;
    write_config(&app_handle, &config)?;
    if let Ok(mut state) = SERVICE_STATE.lock() {
        if state.child.is_some() {
            state.config = Some(config.clone());
        }
    }
    Ok(config)
}

#[tauri::command]
pub fn local_ai_scan_models(
    app_handle: AppHandle,
    config: Option<LocalAiConfig>,
) -> Result<LocalAiModelScan, String> {
    require_plugin(&app_handle)?;
    let config = config.unwrap_or_else(|| read_config(&app_handle));
    Ok(scan_model_dir(&config))
}

#[tauri::command]
pub fn local_ai_get_runtime_status(app_handle: AppHandle) -> Result<LocalAiRuntimeStatus, String> {
    require_plugin(&app_handle)?;
    let config = read_config(&app_handle);
    let (runtime, searched_paths) = find_llama_server(&app_handle, &config);
    Ok(match runtime {
        Some((path, source)) => LocalAiRuntimeStatus {
            available: true,
            path: Some(display_path(&path)),
            source: Some(source),
            searched_paths,
            message: None,
        },
        None => LocalAiRuntimeStatus {
            available: false,
            path: None,
            source: None,
            searched_paths,
            message: Some("未找到 llama-server.exe".to_string()),
        },
    })
}

#[tauri::command]
pub async fn local_ai_get_status(app_handle: AppHandle) -> Result<LocalAiServiceStatus, String> {
    require_plugin(&app_handle)?;
    let config = read_config(&app_handle);
    let (running, pid, model_path, runtime_path, command_line, active_requests, last_error) = {
        let mut state = SERVICE_STATE
            .lock()
            .map_err(|error| format!("本地 AI 服务状态锁定失败: {}", error))?;
        let running = is_child_running_locked(&mut state);
        let pid = state.child.as_ref().map(|child| child.id());
        (
            running,
            pid,
            state.model_path.clone(),
            state.runtime_path.clone(),
            state.command_line.clone(),
            state.active_requests,
            state.last_error.clone(),
        )
    };
    let url = base_url(&config);
    let healthy = if running {
        health_check_url(&url).await
    } else {
        false
    };

    Ok(LocalAiServiceStatus {
        running,
        healthy,
        pid,
        base_url: url,
        model_path,
        runtime_path,
        command_line,
        active_requests,
        idle_timeout_minutes: config.idle_timeout_minutes,
        keep_alive: config.keep_alive,
        last_error,
    })
}

#[tauri::command]
pub async fn local_ai_start_service(
    app_handle: AppHandle,
    config: Option<LocalAiConfig>,
) -> Result<LocalAiServiceStatus, String> {
    require_plugin(&app_handle)?;
    let config = match config {
        Some(config) => {
            write_config(&app_handle, &config)?;
            config
        }
        None => read_config(&app_handle),
    };
    start_service_inner(&app_handle, config).await
}

#[tauri::command]
pub async fn local_ai_restart_service(app_handle: AppHandle) -> Result<LocalAiServiceStatus, String> {
    require_plugin(&app_handle)?;
    local_ai_stop_service(app_handle.clone())?;
    local_ai_start_service(app_handle, None).await
}

#[tauri::command]
pub fn local_ai_stop_service(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    stop_service_now();
    Ok(())
}

#[tauri::command]
pub async fn local_ai_chat(
    app_handle: AppHandle,
    request: LocalAiChatRequest,
) -> Result<LocalAiChatResponse, String> {
    let content = chat_completion(
        &app_handle,
        request.messages,
        request.temperature,
        request.max_tokens,
    )
    .await?;
    Ok(LocalAiChatResponse { content })
}

#[tauri::command]
pub async fn local_ai_translate(
    app_handle: AppHandle,
    text: String,
    from: String,
    to: String,
) -> Result<String, String> {
    translate_text(app_handle, text, from, to).await
}

pub fn apply_runtime_change(_app_handle: &AppHandle, enabled: bool) {
    if !enabled {
        stop_service_now();
    }
}

pub fn stop_service_now() {
    match SERVICE_STATE.lock() {
        Ok(mut state) => stop_child_locked(&mut state),
        Err(error) => warn!("[Plugin:local-ai] stop service lock failed: {}", error),
    }
}
