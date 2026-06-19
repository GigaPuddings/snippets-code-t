use futures::StreamExt;
use log::{info, warn};
use regex::Regex;
use reqwest::{
    header::{ACCEPT, CACHE_CONTROL, USER_AGENT},
    Client,
};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::collections::HashMap;
use std::env;
use std::ffi::OsString;
use std::fs::{self, OpenOptions};
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::{
    atomic::{AtomicBool, Ordering},
    Arc, LazyLock, Mutex,
};
use std::time::{Duration, Instant};
use tauri::{AppHandle, Emitter, Manager, Window};

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

const PLUGIN_ID: &str = "local-ai";
const RUNTIME_PLUGIN_ID: &str = "local-ai-llama-runtime";
const AGENT_REACH_RUNTIME_PLUGIN_ID: &str = "local-ai-agent-reach-runtime";
const DEFAULT_MODEL_DIR: &str = r"E:\Models\HauhauCS\Qwen3.5-4B-Uncensored-HauhauCS-Aggressive";
const DEFAULT_HOST: &str = "127.0.0.1";
const DEFAULT_PORT: u16 = 39281;
const HEALTH_TIMEOUT_SECS: u64 = 90;
const IDLE_CHECK_INTERVAL_SECS: u64 = 30;
const CHAT_PARALLEL_SLOTS: u32 = 1;
const AGENT_REACH_PACKAGE_URL: &str = "https://github.com/Panniantong/agent-reach/archive/main.zip";
const AGENT_REACH_INSTALL_TIMEOUT_SECS: u64 = 300;

static SERVICE_STATE: LazyLock<Mutex<LocalAiServiceState>> =
    LazyLock::new(|| Mutex::new(LocalAiServiceState::default()));
static ACTIVE_STREAM_CANCELS: LazyLock<Mutex<HashMap<String, Arc<AtomicBool>>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));
static IDLE_MONITOR_RUNNING: AtomicBool = AtomicBool::new(false);
static AGENT_REACH_BOOTSTRAP_RUNNING: AtomicBool = AtomicBool::new(false);
static HTML_TAG_RE: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r"(?s)<[^>]*>").expect("valid HTML tag regex"));
static URL_RE: LazyLock<Regex> =
    LazyLock::new(|| Regex::new(r#"https?://[^\s<>"']+"#).expect("valid URL regex"));

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
    #[serde(default = "default_top_p")]
    pub top_p: f32,
    #[serde(default = "default_top_k")]
    pub top_k: u32,
    #[serde(default = "default_min_p")]
    pub min_p: f32,
    #[serde(default = "default_repeat_penalty")]
    pub repeat_penalty: f32,
    #[serde(default = "default_repeat_last_n")]
    pub repeat_last_n: u32,
    pub max_tokens: u32,
    pub request_timeout_secs: u32,
    #[serde(default = "default_web_search_max_results")]
    pub web_search_max_results: u32,
    #[serde(default = "default_web_search_timeout_secs")]
    pub web_search_timeout_secs: u32,
}

fn default_top_p() -> f32 {
    0.85
}

fn default_top_k() -> u32 {
    40
}

fn default_min_p() -> f32 {
    0.05
}

fn default_repeat_penalty() -> f32 {
    1.12
}

fn default_repeat_last_n() -> u32 {
    256
}

fn default_web_search_max_results() -> u32 {
    5
}

fn default_web_search_timeout_secs() -> u32 {
    12
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
            top_p: default_top_p(),
            top_k: default_top_k(),
            min_p: default_min_p(),
            repeat_penalty: default_repeat_penalty(),
            repeat_last_n: default_repeat_last_n(),
            max_tokens: 0,
            request_timeout_secs: 600,
            web_search_max_results: default_web_search_max_results(),
            web_search_timeout_secs: default_web_search_timeout_secs(),
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
    pub ctx_size: u32,
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
    pub content: Value,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiChatTurn {
    pub id: String,
    pub role: String,
    pub content: String,
    pub created_at: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiChatHistory {
    pub id: String,
    pub title: String,
    pub created_at: String,
    pub updated_at: String,
    pub turns: Vec<LocalAiChatTurn>,
    #[serde(default)]
    pub current_node_id: Option<String>,
    #[serde(default)]
    pub messages: Option<Value>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiChatRequest {
    pub messages: Vec<LocalAiMessage>,
    pub temperature: Option<f32>,
    pub enable_thinking: Option<bool>,
    pub max_tokens: Option<u32>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiChatResponse {
    pub content: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiChatStreamStats {
    pub prompt_tokens: Option<u32>,
    pub completion_tokens: Option<u32>,
    pub total_tokens: Option<u32>,
    pub ctx_size: Option<u32>,
    pub generation_time_ms: Option<f64>,
    pub tokens_per_second: Option<f64>,
    pub finish_reason: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiChatStreamPayload {
    pub request_id: String,
    pub event: String,
    pub content: Option<String>,
    pub error: Option<String>,
    pub stats: Option<LocalAiChatStreamStats>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiWebSearchRequest {
    pub query: String,
    pub max_results: Option<u32>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiWebSearchResult {
    pub title: String,
    pub url: String,
    pub content: String,
    pub engine: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiWebSearchResponse {
    pub query: String,
    pub results: Vec<LocalAiWebSearchResult>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiWeatherRequest {
    pub query: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiWeatherResponse {
    pub location: String,
    pub country: String,
    pub latitude: f64,
    pub longitude: f64,
    pub date: String,
    pub time: String,
    pub timezone: String,
    pub temperature: Option<f64>,
    pub apparent_temperature: Option<f64>,
    pub humidity: Option<f64>,
    pub precipitation: Option<f64>,
    pub weather_code: Option<i64>,
    pub weather_text: String,
    pub wind_speed: Option<f64>,
    pub temperature_max: Option<f64>,
    pub temperature_min: Option<f64>,
    pub precipitation_probability: Option<f64>,
    pub source: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiAgentReachStatus {
    pub ready: bool,
    pub source: String,
    pub agent_reach_path: Option<String>,
    pub mcporter_path: Option<String>,
    pub managed_root: String,
    pub runtime_resource_available: bool,
    pub installing: bool,
    pub message: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiAgentReachProgress {
    pub phase: String,
    pub message: String,
    pub progress: Option<f64>,
    pub detail: Option<String>,
}

#[derive(Debug, Clone, Copy)]
struct WeatherLocation {
    name: &'static str,
    country: &'static str,
    latitude: f64,
    longitude: f64,
    timezone: &'static str,
}

#[derive(Debug, Clone)]
struct ResolvedWeatherLocation {
    name: String,
    country: String,
    latitude: f64,
    longitude: f64,
    timezone: String,
}

#[derive(Debug, Deserialize)]
struct OpenMeteoGeocodingResponse {
    results: Option<Vec<OpenMeteoGeocodingResult>>,
}

#[derive(Debug, Deserialize)]
struct OpenMeteoGeocodingResult {
    name: String,
    country: Option<String>,
    latitude: f64,
    longitude: f64,
    timezone: Option<String>,
}

#[derive(Debug, Clone)]
struct AgentReachRuntime {
    agent_reach: String,
    agent_reach_args_prefix: Vec<String>,
    mcporter: String,
    path_prefixes: Vec<PathBuf>,
}

const WEATHER_LOCATIONS: &[WeatherLocation] = &[
    WeatherLocation {
        name: "北京",
        country: "中国",
        latitude: 39.9042,
        longitude: 116.4074,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "天津",
        country: "中国",
        latitude: 39.3434,
        longitude: 117.3616,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "河北",
        country: "中国",
        latitude: 38.0428,
        longitude: 114.5149,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "石家庄",
        country: "中国",
        latitude: 38.0428,
        longitude: 114.5149,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "上海",
        country: "中国",
        latitude: 31.2304,
        longitude: 121.4737,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "广州",
        country: "中国",
        latitude: 23.1291,
        longitude: 113.2644,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "深圳",
        country: "中国",
        latitude: 22.5431,
        longitude: 114.0579,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "杭州",
        country: "中国",
        latitude: 30.2741,
        longitude: 120.1551,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "南京",
        country: "中国",
        latitude: 32.0603,
        longitude: 118.7969,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "安徽",
        country: "中国",
        latitude: 31.8612,
        longitude: 117.2857,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "合肥",
        country: "中国",
        latitude: 31.8206,
        longitude: 117.2272,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "成都",
        country: "中国",
        latitude: 30.5728,
        longitude: 104.0668,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "重庆",
        country: "中国",
        latitude: 29.563,
        longitude: 106.5516,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "武汉",
        country: "中国",
        latitude: 30.5928,
        longitude: 114.3055,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "西安",
        country: "中国",
        latitude: 34.3416,
        longitude: 108.9398,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "郑州",
        country: "中国",
        latitude: 34.7466,
        longitude: 113.6254,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "济南",
        country: "中国",
        latitude: 36.6512,
        longitude: 117.1201,
        timezone: "Asia/Shanghai",
    },
    WeatherLocation {
        name: "青岛",
        country: "中国",
        latitude: 36.0671,
        longitude: 120.3826,
        timezone: "Asia/Shanghai",
    },
];

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

fn history_path(app_handle: &AppHandle) -> PathBuf {
    let config_dir = crate::json_config::get_data_dir(app_handle).join(".snippets-code");
    let _ = fs::create_dir_all(&config_dir);
    config_dir.join("local-ai-chat-history.json")
}

fn app_json_chat_histories(app_handle: &AppHandle) -> Vec<LocalAiChatHistory> {
    crate::json_config::get_app_config_value(app_handle, "local_ai_chat_histories")
        .unwrap_or_default()
}

fn save_app_json_chat_histories(
    app_handle: &AppHandle,
    histories: &[LocalAiChatHistory],
) -> Result<(), String> {
    crate::json_config::set_app_config_value(app_handle, "local_ai_chat_histories", histories)
}

fn read_history_file(app_handle: &AppHandle) -> Vec<LocalAiChatHistory> {
    let path = history_path(app_handle);
    fs::read_to_string(path)
        .ok()
        .and_then(|content| serde_json::from_str::<Vec<LocalAiChatHistory>>(&content).ok())
        .unwrap_or_default()
}

fn write_history_file(
    app_handle: &AppHandle,
    histories: &[LocalAiChatHistory],
) -> Result<(), String> {
    let path = history_path(app_handle);
    let json = serde_json::to_string_pretty(histories)
        .map_err(|error| format!("序列化聊天历史失败: {}", error))?;
    fs::write(&path, json)
        .map_err(|error| format!("写入聊天历史失败 {}: {}", path.to_string_lossy(), error))
}

fn load_chat_histories(app_handle: &AppHandle) -> Vec<LocalAiChatHistory> {
    let mut histories = app_json_chat_histories(app_handle);
    if histories.is_empty() {
        histories = read_history_file(app_handle);
    }
    histories
}

fn persist_chat_histories(
    app_handle: &AppHandle,
    histories: &[LocalAiChatHistory],
) -> Result<(), String> {
    save_app_json_chat_histories(app_handle, histories)
        .or_else(|_| write_history_file(app_handle, histories))
}

fn read_config(app_handle: &AppHandle) -> LocalAiConfig {
    let path = config_path(app_handle);
    let mut config = fs::read_to_string(path)
        .ok()
        .and_then(|content| serde_json::from_str::<LocalAiConfig>(&content).ok())
        .unwrap_or_default();
    if config.max_tokens == 1024 {
        config.max_tokens = 0;
    }
    config
}

fn write_config(app_handle: &AppHandle, config: &LocalAiConfig) -> Result<(), String> {
    let path = config_path(app_handle);
    let json = serde_json::to_string_pretty(config)
        .map_err(|error| format!("序列化本地 AI 配置失败: {}", error))?;
    fs::write(&path, json)
        .map_err(|error| format!("写入本地 AI 配置失败 {}: {}", path.to_string_lossy(), error))
}

fn display_path(path: &Path) -> String {
    path.to_string_lossy().to_string()
}

fn base_url(config: &LocalAiConfig) -> String {
    format!("http://{}:{}", config.host, config.port)
}

fn response_preview(value: &str) -> String {
    value
        .chars()
        .take(240)
        .collect::<String>()
        .replace(['\r', '\n', '\t'], " ")
        .trim()
        .to_string()
}

fn web_search_status_error(status: reqwest::StatusCode, body: &str) -> String {
    let preview = response_preview(body);
    if preview.is_empty() {
        return format!("联网搜索服务返回错误 {}，且响应为空。", status);
    }
    format!("联网搜索服务返回错误 {}: {}", status, preview)
}

fn weather_code_text(code: Option<i64>) -> String {
    match code {
        Some(0) => "晴".to_string(),
        Some(1) => "大部晴朗".to_string(),
        Some(2) => "局部多云".to_string(),
        Some(3) => "阴/多云".to_string(),
        Some(45 | 48) => "雾".to_string(),
        Some(51 | 53 | 55) => "毛毛雨".to_string(),
        Some(56 | 57) => "冻毛毛雨".to_string(),
        Some(61 | 63 | 65) => "雨".to_string(),
        Some(66 | 67) => "冻雨".to_string(),
        Some(71 | 73 | 75) => "雪".to_string(),
        Some(77) => "雪粒".to_string(),
        Some(80 | 81 | 82) => "阵雨".to_string(),
        Some(85 | 86) => "阵雪".to_string(),
        Some(95) => "雷暴".to_string(),
        Some(96 | 99) => "雷暴伴冰雹".to_string(),
        Some(value) => format!("天气代码 {}", value),
        None => "未知".to_string(),
    }
}

fn number_at(value: &Value, key: &str) -> Option<f64> {
    value.get(key).and_then(Value::as_f64)
}

fn integer_at(value: &Value, key: &str) -> Option<i64> {
    value.get(key).and_then(Value::as_i64)
}

fn daily_number_at(value: &Value, key: &str) -> Option<f64> {
    value
        .get("daily")
        .and_then(|daily| daily.get(key))
        .and_then(Value::as_array)
        .and_then(|items| items.first())
        .and_then(Value::as_f64)
}

fn daily_integer_at(value: &Value, key: &str) -> Option<i64> {
    value
        .get("daily")
        .and_then(|daily| daily.get(key))
        .and_then(Value::as_array)
        .and_then(|items| items.first())
        .and_then(Value::as_i64)
}

fn daily_string_at(value: &Value, key: &str) -> Option<String> {
    value
        .get("daily")
        .and_then(|daily| daily.get(key))
        .and_then(Value::as_array)
        .and_then(|items| items.first())
        .and_then(Value::as_str)
        .map(str::to_string)
}

fn extract_weather_location(query: &str) -> Option<WeatherLocation> {
    WEATHER_LOCATIONS
        .iter()
        .copied()
        .filter(|location| query.contains(location.name))
        .max_by_key(|location| location.name.chars().count())
}

fn resolved_weather_location(location: WeatherLocation) -> ResolvedWeatherLocation {
    ResolvedWeatherLocation {
        name: location.name.to_string(),
        country: location.country.to_string(),
        latitude: location.latitude,
        longitude: location.longitude,
        timezone: location.timezone.to_string(),
    }
}

fn compact_weather_location_candidate(value: &str) -> Option<String> {
    let candidate = value
        .chars()
        .filter(|character| {
            character.is_alphabetic()
                || matches!(
                    character,
                    '·' | '-' | '\'' | '市' | '省' | '州' | '县' | '区' | '旗'
                )
        })
        .collect::<String>()
        .replace("今天", "")
        .replace("今日", "")
        .replace("明天", "")
        .replace("后天", "")
        .replace("现在", "")
        .replace("当前", "")
        .replace("怎么样", "")
        .replace("如何", "")
        .replace("怎样", "")
        .replace("天气", "")
        .replace("温度", "")
        .replace("气温", "")
        .replace("下雨", "")
        .replace("降雨", "")
        .replace("湿度", "")
        .replace("会", "")
        .replace("吗", "")
        .replace("么", "")
        .replace("呢", "")
        .trim_matches(['市', '省'])
        .trim()
        .to_string();

    if candidate.chars().count() >= 2 {
        Some(candidate)
    } else {
        None
    }
}

fn weather_location_candidates(query: &str) -> Vec<String> {
    let keywords = [
        "天气",
        "温度",
        "气温",
        "体感",
        "湿度",
        "降雨",
        "下雨",
        "风速",
        "weather",
        "temperature",
        "humidity",
        "rain",
        "wind",
    ];
    let mut candidates = Vec::new();

    for line in query.lines().map(str::trim).filter(|line| !line.is_empty()) {
        if let Some(location) = extract_weather_location(line) {
            candidates.push(location.name.to_string());
            continue;
        }

        let mut matched_keyword = false;
        for keyword in keywords {
            if let Some(index) = line.find(keyword) {
                matched_keyword = true;
                let prefix = &line[..index];
                if let Some(candidate) = compact_weather_location_candidate(prefix) {
                    candidates.push(candidate);
                }
            }
        }

        if !matched_keyword {
            if let Some(candidate) = compact_weather_location_candidate(line) {
                candidates.push(candidate);
            }
        }
    }

    candidates.sort_by_key(|candidate| std::cmp::Reverse(candidate.chars().count()));
    candidates.dedup();
    candidates
}

async fn resolve_weather_location(
    client: &Client,
    query: &str,
) -> Result<ResolvedWeatherLocation, String> {
    if let Some(location) = extract_weather_location(query) {
        return Ok(resolved_weather_location(location));
    }

    let geocoding_url = "https://geocoding-api.open-meteo.com/v1/search";
    for candidate in weather_location_candidates(query) {
        let response = client
            .get(geocoding_url)
            .header(ACCEPT, "application/json")
            .header(USER_AGENT, "snippets-code-local-ai/1.0")
            .query(&[
                ("name", candidate.as_str()),
                ("count", "1"),
                ("language", "zh"),
                ("format", "json"),
            ])
            .send()
            .await
            .map_err(|error| format!("天气地点解析请求失败: {}", error))?;
        let status = response.status();
        let body = response
            .text()
            .await
            .map_err(|error| format!("读取天气地点解析响应失败: {}", error))?;
        if !status.is_success() {
            warn!(
                "[Plugin:local-ai] weather geocoding failed provider=open_meteo location_candidate={} status={} preview=\"{}\"",
                candidate,
                status,
                response_preview(&body)
            );
            continue;
        }
        let value = serde_json::from_str::<OpenMeteoGeocodingResponse>(&body)
            .map_err(|error| format!("解析天气地点响应失败: {}", error))?;
        if let Some(result) = value
            .results
            .and_then(|mut results| results.drain(..).next())
        {
            return Ok(ResolvedWeatherLocation {
                name: result.name,
                country: result.country.unwrap_or_else(|| "未知".to_string()),
                latitude: result.latitude,
                longitude: result.longitude,
                timezone: result
                    .timezone
                    .unwrap_or_else(|| "Asia/Shanghai".to_string()),
            });
        }
    }

    Err("未识别到天气地点，请在问题中包含城市或省份，例如“合肥天气”。".to_string())
}

fn decode_html_entities(value: &str) -> String {
    let mut decoded = value
        .replace("&amp;", "&")
        .replace("&quot;", "\"")
        .replace("&#39;", "'")
        .replace("&apos;", "'")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&nbsp;", " ");

    for entity in Regex::new(r"&#x([0-9a-fA-F]+);|&#([0-9]+);")
        .expect("valid html entity regex")
        .captures_iter(value)
    {
        let Some(raw) = entity.get(0).map(|item| item.as_str()) else {
            continue;
        };
        let codepoint = entity
            .get(1)
            .and_then(|item| u32::from_str_radix(item.as_str(), 16).ok())
            .or_else(|| {
                entity
                    .get(2)
                    .and_then(|item| item.as_str().parse::<u32>().ok())
            });
        if let Some(character) = codepoint.and_then(char::from_u32) {
            decoded = decoded.replace(raw, &character.to_string());
        }
    }

    decoded
}

fn clean_html_text(value: &str) -> String {
    let without_tags = HTML_TAG_RE.replace_all(value, " ");
    decode_html_entities(&without_tags)
        .split_whitespace()
        .collect::<Vec<_>>()
        .join(" ")
}

fn json_string_at<'a>(
    object: &'a serde_json::Map<String, Value>,
    keys: &[&str],
) -> Option<&'a str> {
    keys.iter()
        .find_map(|key| object.get(*key).and_then(Value::as_str))
        .map(str::trim)
        .filter(|value| !value.is_empty())
}

fn push_agent_reach_result(
    object: &serde_json::Map<String, Value>,
    results: &mut Vec<LocalAiWebSearchResult>,
    seen_urls: &mut Vec<String>,
    max_results: u32,
) {
    if results.len() >= max_results as usize {
        return;
    }
    let Some(url) = json_string_at(object, &["url", "link", "href"]) else {
        return;
    };
    if !url.starts_with("http://") && !url.starts_with("https://") {
        return;
    }
    if seen_urls.iter().any(|seen| seen == url) {
        return;
    }

    let title = json_string_at(object, &["title", "name"])
        .unwrap_or(url)
        .chars()
        .take(160)
        .collect::<String>();
    let content = json_string_at(
        object,
        &[
            "text",
            "content",
            "snippet",
            "summary",
            "description",
            "markdown",
        ],
    )
    .map(clean_html_text)
    .unwrap_or_default()
    .chars()
    .take(900)
    .collect::<String>();

    seen_urls.push(url.to_string());
    results.push(LocalAiWebSearchResult {
        title,
        url: url.to_string(),
        content,
        engine: Some("Agent-Reach / Exa".to_string()),
    });
}

fn collect_agent_reach_results(
    value: &Value,
    results: &mut Vec<LocalAiWebSearchResult>,
    seen_urls: &mut Vec<String>,
    max_results: u32,
) {
    if results.len() >= max_results as usize {
        return;
    }

    match value {
        Value::Object(object) => {
            push_agent_reach_result(object, results, seen_urls, max_results);
            for nested in object.values() {
                collect_agent_reach_results(nested, results, seen_urls, max_results);
                if results.len() >= max_results as usize {
                    break;
                }
            }
        }
        Value::Array(items) => {
            for item in items {
                collect_agent_reach_results(item, results, seen_urls, max_results);
                if results.len() >= max_results as usize {
                    break;
                }
            }
        }
        Value::String(text) => {
            let trimmed = text.trim();
            if matches!(trimmed.chars().next(), Some('{') | Some('[')) {
                if let Ok(nested) = serde_json::from_str::<Value>(trimmed) {
                    collect_agent_reach_results(&nested, results, seen_urls, max_results);
                }
            }
        }
        _ => {}
    }
}

fn parse_agent_reach_plain_text(output: &str, max_results: u32) -> Vec<LocalAiWebSearchResult> {
    let mut results = Vec::new();
    let mut seen_urls = Vec::new();
    for line in output
        .lines()
        .map(str::trim)
        .filter(|line| !line.is_empty())
    {
        if results.len() >= max_results as usize {
            break;
        }
        let Some(url_match) = URL_RE.find(line) else {
            continue;
        };
        let url = url_match.as_str();
        if seen_urls.iter().any(|seen| seen == url) {
            continue;
        }
        let title = line[..url_match.start()]
            .trim_matches(['-', '*', ' ', '\t', ':'])
            .trim();
        let content = line[url_match.end()..]
            .trim_matches(['-', '*', ' ', '\t', ':'])
            .trim();
        seen_urls.push(url.to_string());
        results.push(LocalAiWebSearchResult {
            title: if title.is_empty() {
                url.chars().take(160).collect()
            } else {
                title.chars().take(160).collect()
            },
            url: url.to_string(),
            content: content.chars().take(900).collect(),
            engine: Some("Agent-Reach / Exa".to_string()),
        });
    }
    results
}

fn parse_agent_reach_search_results(output: &str, max_results: u32) -> Vec<LocalAiWebSearchResult> {
    let trimmed = output.trim();
    if trimmed.is_empty() {
        return Vec::new();
    }
    if let Ok(value) = serde_json::from_str::<Value>(trimmed) {
        let mut results = Vec::new();
        let mut seen_urls = Vec::new();
        collect_agent_reach_results(&value, &mut results, &mut seen_urls, max_results);
        if !results.is_empty() {
            return results;
        }
    }
    parse_agent_reach_plain_text(trimmed, max_results)
}

fn agent_reach_root(app_handle: &AppHandle) -> PathBuf {
    crate::json_config::get_data_dir(app_handle)
        .join(".snippets-code")
        .join("agent-reach")
}

fn agent_reach_venv_dir(app_handle: &AppHandle) -> PathBuf {
    agent_reach_root(app_handle).join("venv")
}

#[cfg(windows)]
fn agent_reach_venv_bin_dir(venv_dir: &Path) -> PathBuf {
    venv_dir.join("Scripts")
}

#[cfg(not(windows))]
fn agent_reach_venv_bin_dir(venv_dir: &Path) -> PathBuf {
    venv_dir.join("bin")
}

#[cfg(windows)]
fn executable_name(name: &str) -> String {
    format!("{}.exe", name)
}

#[cfg(not(windows))]
fn executable_name(name: &str) -> String {
    name.to_string()
}

fn managed_agent_reach_runtime(app_handle: &AppHandle) -> AgentReachRuntime {
    let venv_dir = agent_reach_venv_dir(app_handle);
    let bin_dir = agent_reach_venv_bin_dir(&venv_dir);
    let mcporter = bin_dir.join(executable_name("mcporter"));
    AgentReachRuntime {
        agent_reach: display_path(&bin_dir.join(executable_name("python"))),
        agent_reach_args_prefix: agent_reach_python_args(),
        mcporter: if mcporter.exists() {
            display_path(&mcporter)
        } else {
            "mcporter".to_string()
        },
        path_prefixes: vec![bin_dir],
    }
}

fn system_agent_reach_runtime() -> AgentReachRuntime {
    AgentReachRuntime {
        agent_reach: "agent-reach".to_string(),
        agent_reach_args_prefix: Vec::new(),
        mcporter: "mcporter".to_string(),
        path_prefixes: Vec::new(),
    }
}

fn agent_reach_python_args() -> Vec<String> {
    vec![
        "-c".to_string(),
        "from agent_reach.cli import main; main()".to_string(),
    ]
}

fn find_mcporter_path(search_dirs: &[PathBuf]) -> String {
    let mut candidates = Vec::new();
    for dir in search_dirs {
        candidates.extend([
            dir.join(executable_name("mcporter")),
            dir.join("mcporter"),
            dir.join("mcporter.exe"),
            dir.join("mcporter.cmd"),
            dir.join("mcporter.ps1"),
        ]);
    }
    candidates
        .into_iter()
        .find(|path| path.is_file())
        .map(|path| display_path(&path))
        .unwrap_or_else(|| "mcporter".to_string())
}

fn resource_agent_reach_runtimes(app_handle: &AppHandle) -> Vec<AgentReachRuntime> {
    let mut runtimes = Vec::new();
    for relative in [
        "resources/agent-reach/venv/Scripts/python.exe",
        "resources/agent-reach/venv/bin/python",
        "resources/agent-reach/python/python.exe",
        "resources/agent-reach/python/bin/python",
    ] {
        let Ok(Some(python_path)) = crate::app_config::get_local_plugin_resource_path(
            app_handle.clone(),
            AGENT_REACH_RUNTIME_PLUGIN_ID.to_string(),
            relative.to_string(),
        ) else {
            continue;
        };
        let python_path = PathBuf::from(python_path);
        if !python_path.is_file() {
            continue;
        }
        let bin_dir = python_path
            .parent()
            .map(Path::to_path_buf)
            .unwrap_or_else(|| python_path.clone());
        let agent_reach_dir = bin_dir
            .parent()
            .and_then(Path::parent)
            .map(Path::to_path_buf)
            .unwrap_or_else(|| bin_dir.clone());
        let launcher_dir = agent_reach_dir.join("bin");
        let node_runtime_dir = agent_reach_dir.join("node-runtime");
        runtimes.push(AgentReachRuntime {
            agent_reach: display_path(&python_path),
            agent_reach_args_prefix: agent_reach_python_args(),
            mcporter: find_mcporter_path(&[
                launcher_dir.clone(),
                bin_dir.clone(),
                agent_reach_dir
                    .join("node")
                    .join("node_modules")
                    .join(".bin"),
            ]),
            path_prefixes: vec![launcher_dir, bin_dir, node_runtime_dir],
        });
    }

    for relative in [
        "resources/agent-reach/bin/agent-reach.exe",
        "resources/agent-reach/bin/agent-reach.cmd",
        "resources/agent-reach/bin/agent-reach",
        "resources/agent-reach/Scripts/agent-reach.exe",
        "resources/agent-reach/bin/Scripts/agent-reach.exe",
    ] {
        let Ok(Some(agent_reach_path)) = crate::app_config::get_local_plugin_resource_path(
            app_handle.clone(),
            AGENT_REACH_RUNTIME_PLUGIN_ID.to_string(),
            relative.to_string(),
        ) else {
            continue;
        };
        let agent_reach_path = PathBuf::from(agent_reach_path);
        if !agent_reach_path.is_file() {
            continue;
        }
        let bin_dir = agent_reach_path
            .parent()
            .map(Path::to_path_buf)
            .unwrap_or_else(|| agent_reach_path.clone());
        let agent_reach_dir = bin_dir
            .parent()
            .map(Path::to_path_buf)
            .unwrap_or_else(|| bin_dir.clone());
        let node_bin_dir = agent_reach_dir
            .join("node")
            .join("node_modules")
            .join(".bin");
        let node_runtime_dir = agent_reach_dir.join("node-runtime");
        runtimes.push(AgentReachRuntime {
            agent_reach: display_path(&agent_reach_path),
            agent_reach_args_prefix: Vec::new(),
            mcporter: find_mcporter_path(&[bin_dir.clone(), node_bin_dir]),
            path_prefixes: vec![bin_dir, node_runtime_dir],
        });
    }
    runtimes
}

fn runtime_resource_available(app_handle: &AppHandle) -> bool {
    crate::app_config::get_local_plugin_resource_path(
        app_handle.clone(),
        AGENT_REACH_RUNTIME_PLUGIN_ID.to_string(),
        "plugin.json".to_string(),
    )
    .ok()
    .flatten()
    .map(|path| Path::new(&path).is_file())
    .unwrap_or(false)
        || !resource_agent_reach_runtimes(app_handle).is_empty()
}

fn emit_agent_reach_progress(
    app_handle: &AppHandle,
    phase: &str,
    message: &str,
    progress: Option<f64>,
    detail: Option<String>,
) {
    let payload = LocalAiAgentReachProgress {
        phase: phase.to_string(),
        message: message.to_string(),
        progress,
        detail,
    };
    let _ = app_handle.emit("local-ai-agent-reach-progress", payload);
}

fn path_with_prefixes(prefixes: &[PathBuf]) -> Option<OsString> {
    if prefixes.is_empty() {
        return None;
    }
    let mut paths = prefixes.to_vec();
    if let Some(current_path) = env::var_os("PATH") {
        paths.extend(env::split_paths(&current_path));
    }
    env::join_paths(paths).ok()
}

async fn run_command_text(
    program: String,
    args: Vec<String>,
    timeout_secs: u64,
    label: &'static str,
    path_prefixes: Vec<PathBuf>,
) -> Result<String, String> {
    let display = std::iter::once(program.clone())
        .chain(args.iter().map(|arg| quote_command_part(arg)))
        .collect::<Vec<_>>()
        .join(" ");
    let path = path_with_prefixes(&path_prefixes);
    let task = tauri::async_runtime::spawn_blocking(move || {
        let is_windows_script = cfg!(windows)
            && matches!(
                Path::new(&program)
                    .extension()
                    .and_then(|extension| extension.to_str())
                    .map(|extension| extension.to_ascii_lowercase())
                    .as_deref(),
                Some("bat" | "cmd")
            );
        let mut command = if is_windows_script {
            let mut shell = Command::new("cmd");
            shell.args(["/C", &program]).args(args);
            shell
        } else {
            let mut direct = Command::new(&program);
            direct.args(args);
            direct
        };
        command.stdin(Stdio::null());
        if let Some(path) = path {
            command.env("PATH", path);
        }
        command.output()
    });
    let output = tokio::time::timeout(Duration::from_secs(timeout_secs), task)
        .await
        .map_err(|_| format!("{}超时: {}", label, display))?
        .map_err(|error| format!("{}执行失败: {}", label, error))?
        .map_err(|error| {
            format!(
                "{}启动失败: {}。local-ai 会自动安装 Agent-Reach；如果持续失败，请确认系统可用 Python 3.10+ 且网络可访问 {}。",
                label, error, AGENT_REACH_PACKAGE_URL
            )
        })?;
    let stdout = String::from_utf8_lossy(&output.stdout).trim().to_string();
    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();
    if !output.status.success() {
        let detail = if stderr.is_empty() { stdout } else { stderr };
        return Err(format!("{}失败: {}", label, response_preview(&detail)));
    }
    if stdout.is_empty() {
        Ok(stderr)
    } else {
        Ok(stdout)
    }
}

async fn run_agent_reach_text(
    runtime: &AgentReachRuntime,
    args: Vec<String>,
    timeout_secs: u64,
    label: &'static str,
) -> Result<String, String> {
    let mut command_args = runtime.agent_reach_args_prefix.clone();
    command_args.extend(args);
    run_command_text(
        runtime.agent_reach.clone(),
        command_args,
        timeout_secs,
        label,
        runtime.path_prefixes.clone(),
    )
    .await
}

fn python_candidates() -> Vec<(String, Vec<String>)> {
    #[cfg(windows)]
    {
        vec![
            ("py".to_string(), vec!["-3".to_string()]),
            ("python".to_string(), Vec::new()),
            ("python3".to_string(), Vec::new()),
        ]
    }
    #[cfg(not(windows))]
    {
        vec![
            ("python3".to_string(), Vec::new()),
            ("python".to_string(), Vec::new()),
        ]
    }
}

async fn create_agent_reach_venv(venv_dir: &Path) -> Result<(), String> {
    let python = agent_reach_venv_bin_dir(venv_dir).join(executable_name("python"));
    if python.exists() {
        return Ok(());
    }
    let parent = venv_dir
        .parent()
        .ok_or_else(|| format!("Agent-Reach venv 路径无效: {}", display_path(venv_dir)))?;
    fs::create_dir_all(parent).map_err(|error| {
        format!(
            "创建 Agent-Reach 目录失败 {}: {}",
            display_path(parent),
            error
        )
    })?;
    let mut last_error = None;
    for (program, mut args) in python_candidates() {
        args.extend(["-m".to_string(), "venv".to_string(), display_path(venv_dir)]);
        match run_command_text(
            program,
            args,
            AGENT_REACH_INSTALL_TIMEOUT_SECS,
            "创建 Agent-Reach Python 环境",
            Vec::new(),
        )
        .await
        {
            Ok(_) => return Ok(()),
            Err(error) => last_error = Some(error),
        }
    }
    Err(last_error.unwrap_or_else(|| "未找到可用 Python，无法创建 Agent-Reach 环境".to_string()))
}

async fn install_managed_agent_reach(app_handle: &AppHandle) -> Result<AgentReachRuntime, String> {
    let runtime = managed_agent_reach_runtime(app_handle);
    let venv_dir = agent_reach_venv_dir(app_handle);
    emit_agent_reach_progress(
        app_handle,
        "creating-venv",
        "正在创建 Agent-Reach Python 环境...",
        Some(30.0),
        Some(display_path(&venv_dir)),
    );
    create_agent_reach_venv(&venv_dir).await?;
    let python = agent_reach_venv_bin_dir(&venv_dir).join(executable_name("python"));
    emit_agent_reach_progress(
        app_handle,
        "installing",
        "正在安装 Agent-Reach...",
        Some(45.0),
        Some(AGENT_REACH_PACKAGE_URL.to_string()),
    );
    run_command_text(
        display_path(&python),
        vec![
            "-m".to_string(),
            "pip".to_string(),
            "install".to_string(),
            "--upgrade".to_string(),
            AGENT_REACH_PACKAGE_URL.to_string(),
        ],
        AGENT_REACH_INSTALL_TIMEOUT_SECS,
        "安装 Agent-Reach",
        runtime.path_prefixes.clone(),
    )
    .await?;
    emit_agent_reach_progress(
        app_handle,
        "configuring",
        "正在配置 Agent-Reach 上游工具...",
        Some(70.0),
        None,
    );
    run_agent_reach_text(
        &runtime,
        vec!["install".to_string(), "--env=auto".to_string()],
        AGENT_REACH_INSTALL_TIMEOUT_SECS,
        "配置 Agent-Reach",
    )
    .await?;
    Ok(runtime)
}

async fn agent_reach_doctor(
    runtime: &AgentReachRuntime,
    timeout_secs: u64,
) -> Result<String, String> {
    run_agent_reach_text(
        runtime,
        vec!["doctor".to_string(), "--json".to_string()],
        timeout_secs,
        "Agent-Reach 体检",
    )
    .await
}

async fn ensure_agent_reach_ready(
    app_handle: &AppHandle,
    timeout_secs: u64,
) -> Result<AgentReachRuntime, String> {
    let doctor_timeout = timeout_secs.clamp(3, 8);
    emit_agent_reach_progress(
        app_handle,
        "checking-resource",
        "正在检查 Agent-Reach 资源包...",
        Some(8.0),
        None,
    );
    for resource_runtime in resource_agent_reach_runtimes(app_handle) {
        if agent_reach_doctor(&resource_runtime, doctor_timeout)
            .await
            .is_ok()
        {
            emit_agent_reach_progress(
                app_handle,
                "ready",
                "Agent-Reach 资源包可用。",
                Some(100.0),
                Some(resource_runtime.agent_reach.clone()),
            );
            return Ok(resource_runtime);
        }
    }

    emit_agent_reach_progress(
        app_handle,
        "checking-system",
        "正在检查系统 Agent-Reach...",
        Some(15.0),
        None,
    );
    let system_runtime = system_agent_reach_runtime();
    if agent_reach_doctor(&system_runtime, doctor_timeout)
        .await
        .is_ok()
    {
        emit_agent_reach_progress(
            app_handle,
            "ready",
            "系统 Agent-Reach 可用。",
            Some(100.0),
            None,
        );
        return Ok(system_runtime);
    }

    emit_agent_reach_progress(
        app_handle,
        "checking-managed",
        "正在检查应用托管 Agent-Reach...",
        Some(22.0),
        None,
    );
    let managed_runtime = managed_agent_reach_runtime(app_handle);
    if Path::new(&managed_runtime.agent_reach).exists()
        && agent_reach_doctor(&managed_runtime, doctor_timeout)
            .await
            .is_ok()
    {
        emit_agent_reach_progress(
            app_handle,
            "ready",
            "应用托管 Agent-Reach 可用。",
            Some(100.0),
            Some(managed_runtime.agent_reach.clone()),
        );
        return Ok(managed_runtime);
    }

    if AGENT_REACH_BOOTSTRAP_RUNNING
        .compare_exchange(false, true, Ordering::Relaxed, Ordering::Relaxed)
        .is_err()
    {
        emit_agent_reach_progress(
            app_handle,
            "waiting",
            "Agent-Reach 正在准备中...",
            None,
            None,
        );
        for _ in 0..30 {
            tokio::time::sleep(Duration::from_secs(2)).await;
            let managed_runtime = managed_agent_reach_runtime(app_handle);
            if Path::new(&managed_runtime.agent_reach).exists()
                && agent_reach_doctor(&managed_runtime, doctor_timeout)
                    .await
                    .is_ok()
            {
                emit_agent_reach_progress(
                    app_handle,
                    "ready",
                    "应用托管 Agent-Reach 可用。",
                    Some(100.0),
                    Some(managed_runtime.agent_reach.clone()),
                );
                return Ok(managed_runtime);
            }
        }
        return Err("Agent-Reach 正在准备中，请稍后重试。".to_string());
    }

    info!("[Plugin:local-ai] bootstrapping managed Agent-Reach runtime");
    let result: Result<AgentReachRuntime, String> = async {
        let installed_runtime = install_managed_agent_reach(app_handle).await?;
        emit_agent_reach_progress(
            app_handle,
            "doctor",
            "正在体检 Agent-Reach...",
            Some(90.0),
            Some(installed_runtime.agent_reach.clone()),
        );
        agent_reach_doctor(&installed_runtime, doctor_timeout).await?;
        emit_agent_reach_progress(
            app_handle,
            "ready",
            "Agent-Reach 已准备就绪。",
            Some(100.0),
            Some(installed_runtime.agent_reach.clone()),
        );
        Ok(installed_runtime)
    }
    .await;
    AGENT_REACH_BOOTSTRAP_RUNNING.store(false, Ordering::Relaxed);
    if let Err(error) = &result {
        emit_agent_reach_progress(
            app_handle,
            "failed",
            "Agent-Reach 准备失败。",
            None,
            Some(error.clone()),
        );
    }
    result
}

async fn search_with_agent_reach(
    app_handle: &AppHandle,
    query: &str,
    max_results: u32,
    timeout_secs: u64,
) -> Result<Vec<LocalAiWebSearchResult>, String> {
    let doctor_timeout = timeout_secs.clamp(3, 8);
    let runtime = ensure_agent_reach_ready(app_handle, timeout_secs).await?;
    let doctor_output = agent_reach_doctor(&runtime, doctor_timeout).await?;
    info!(
        "[Plugin:local-ai] agent-reach doctor ok preview=\"{}\"",
        response_preview(&doctor_output)
    );

    let call = format!(
        "exa.web_search_exa(query: {}, numResults: {})",
        serde_json::to_string(query).unwrap_or_else(|_| "\"\"".to_string()),
        max_results
    );
    info!(
        "[Plugin:local-ai] web search start provider=agent_reach_exa query=\"{}\" max_results={}",
        response_preview(query),
        max_results
    );
    let output = run_command_text(
        runtime.mcporter.clone(),
        vec!["call".to_string(), call],
        timeout_secs,
        "Agent-Reach Exa 搜索",
        runtime.path_prefixes.clone(),
    )
    .await?;
    let results = parse_agent_reach_search_results(&output, max_results);
    info!(
        "[Plugin:local-ai] web search parsed provider=agent_reach_exa query=\"{}\" usable_results={}",
        response_preview(query),
        results.len()
    );
    Ok(results)
}

async fn agent_reach_status_inner(app_handle: &AppHandle) -> LocalAiAgentReachStatus {
    let managed_root = display_path(&agent_reach_root(app_handle));
    let runtime_resource_available = runtime_resource_available(app_handle);
    let installing = AGENT_REACH_BOOTSTRAP_RUNNING.load(Ordering::Relaxed);
    let timeout_secs = 5;

    for runtime in resource_agent_reach_runtimes(app_handle) {
        if agent_reach_doctor(&runtime, timeout_secs).await.is_ok() {
            return LocalAiAgentReachStatus {
                ready: true,
                source: "resource".to_string(),
                agent_reach_path: Some(runtime.agent_reach),
                mcporter_path: Some(runtime.mcporter),
                managed_root,
                runtime_resource_available,
                installing,
                message: Some("Agent-Reach 资源包可用".to_string()),
            };
        }
    }

    let system_runtime = system_agent_reach_runtime();
    if agent_reach_doctor(&system_runtime, timeout_secs)
        .await
        .is_ok()
    {
        return LocalAiAgentReachStatus {
            ready: true,
            source: "system".to_string(),
            agent_reach_path: Some(system_runtime.agent_reach),
            mcporter_path: Some(system_runtime.mcporter),
            managed_root,
            runtime_resource_available,
            installing,
            message: Some("系统 Agent-Reach 可用".to_string()),
        };
    }

    let managed_runtime = managed_agent_reach_runtime(app_handle);
    if Path::new(&managed_runtime.agent_reach).exists()
        && agent_reach_doctor(&managed_runtime, timeout_secs)
            .await
            .is_ok()
    {
        return LocalAiAgentReachStatus {
            ready: true,
            source: "managed".to_string(),
            agent_reach_path: Some(managed_runtime.agent_reach),
            mcporter_path: Some(managed_runtime.mcporter),
            managed_root,
            runtime_resource_available,
            installing,
            message: Some("应用托管 Agent-Reach 可用".to_string()),
        };
    }

    LocalAiAgentReachStatus {
        ready: false,
        source: if runtime_resource_available {
            "resource".to_string()
        } else {
            "missing".to_string()
        },
        agent_reach_path: Path::new(&managed_runtime.agent_reach)
            .exists()
            .then_some(managed_runtime.agent_reach),
        mcporter_path: None,
        managed_root,
        runtime_resource_available,
        installing,
        message: Some(if installing {
            "Agent-Reach 正在准备中".to_string()
        } else {
            "Agent-Reach 尚未准备就绪".to_string()
        }),
    }
}

fn completion_token_limit(config: &LocalAiConfig, request_max_tokens: Option<u32>) -> i64 {
    let limit = request_max_tokens.unwrap_or(config.max_tokens);
    if limit == 0 {
        -1
    } else {
        i64::from(limit)
    }
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

fn candidate_runtime_paths(
    app_handle: &AppHandle,
    config: &LocalAiConfig,
) -> Vec<(PathBuf, String)> {
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
                paths.push((
                    PathBuf::from(path),
                    format!("plugin:{}:{}", plugin_id, relative),
                ));
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
            paths.push((
                resource_dir.join(relative),
                format!("resource:{}", relative),
            ));
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

fn find_llama_server(
    app_handle: &AppHandle,
    config: &LocalAiConfig,
) -> (Option<(PathBuf, String)>, Vec<String>) {
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
    let model_path = scan.selected_model_path.ok_or_else(|| {
        scan.message
            .unwrap_or_else(|| "未找到主模型 GGUF 文件".to_string())
    })?;
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

fn build_server_args(
    config: &LocalAiConfig,
    model_path: &Path,
    mmproj_path: Option<&Path>,
) -> Vec<String> {
    let mut args = vec![
        "--host".to_string(),
        config.host.clone(),
        "--port".to_string(),
        config.port.to_string(),
        "--model".to_string(),
        display_path(model_path),
        "--ctx-size".to_string(),
        config.ctx_size.to_string(),
        "--parallel".to_string(),
        CHAT_PARALLEL_SLOTS.to_string(),
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
    let Ok(client) = Client::builder().timeout(Duration::from_secs(3)).build() else {
        return false;
    };

    client
        .get(url)
        .send()
        .await
        .map(|response| response.status().is_success())
        .unwrap_or(false)
}

async fn server_context_size(base_url: &str) -> Option<u32> {
    let url = format!("{}/props", base_url.trim_end_matches('/'));
    let client = Client::builder()
        .timeout(Duration::from_secs(3))
        .build()
        .ok()?;
    let value = client
        .get(url)
        .send()
        .await
        .ok()?
        .json::<Value>()
        .await
        .ok()?;
    get_u32_field(&value, "n_ctx")
        .or_else(|| {
            value
                .get("default_generation_settings")
                .and_then(|settings| get_u32_field(settings, "n_ctx"))
        })
        .or_else(|| {
            value
                .get("slots")
                .and_then(|slots| slots.as_array())
                .and_then(|slots| slots.first())
                .and_then(|slot| get_u32_field(slot, "n_ctx"))
        })
        .or_else(|| {
            value
                .get("data")
                .and_then(|data| data.as_array())
                .and_then(|models| models.first())
                .and_then(|model| model.get("meta"))
                .and_then(|meta| get_u32_field(meta, "n_ctx"))
        })
        .or_else(|| {
            value
                .get("data")
                .and_then(|data| data.as_array())
                .and_then(|models| models.first())
                .and_then(|model| get_u32_field(model, "n_ctx"))
        })
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

#[cfg(target_os = "windows")]
fn stop_orphan_llama_server_on_port(port: u16, model_path: &Path) -> bool {
    let script = r#"
$port = [int]$env:LOCAL_AI_PORT
$model = ''
if ($env:LOCAL_AI_MODEL_PATH) {
  $model = $env:LOCAL_AI_MODEL_PATH.ToLowerInvariant()
}
$listeners = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
foreach ($listener in $listeners) {
  $process = Get-CimInstance Win32_Process -Filter "ProcessId=$($listener.OwningProcess)" -ErrorAction SilentlyContinue
  if (-not $process -or -not $process.CommandLine) { continue }
  $commandLine = $process.CommandLine.ToLowerInvariant()
  $isLlamaServer = $commandLine.Contains('llama-server')
  $isLocalAiRuntime = $commandLine.Contains('local-ai-llama-runtime')
  $isSameModel = $model.Length -gt 0 -and $commandLine.Contains($model)
  if ($isLlamaServer -and ($isLocalAiRuntime -or $isSameModel)) {
    Stop-Process -Id $process.ProcessId -Force -ErrorAction SilentlyContinue
    Write-Output $process.ProcessId
  }
}
"#;
    let mut command = Command::new("powershell");
    command
        .args(["-NoProfile", "-NonInteractive", "-Command", script])
        .env("LOCAL_AI_PORT", port.to_string())
        .env("LOCAL_AI_MODEL_PATH", display_path(model_path));
    #[cfg(target_os = "windows")]
    {
        command.creation_flags(0x08000000);
    }

    match command.output() {
        Ok(output) if output.status.success() => {
            let stdout = String::from_utf8_lossy(&output.stdout);
            let stopped_pids = stdout
                .lines()
                .map(str::trim)
                .filter(|line| !line.is_empty())
                .collect::<Vec<_>>();
            if stopped_pids.is_empty() {
                false
            } else {
                info!(
                    "[Plugin:local-ai] stopped orphan llama-server pid(s) on port {}: {}",
                    port,
                    stopped_pids.join(", ")
                );
                true
            }
        }
        Ok(output) => {
            warn!(
                "[Plugin:local-ai] orphan llama-server cleanup failed: {}",
                String::from_utf8_lossy(&output.stderr).trim()
            );
            false
        }
        Err(error) => {
            warn!(
                "[Plugin:local-ai] orphan llama-server cleanup could not run: {}",
                error
            );
            false
        }
    }
}

#[cfg(not(target_os = "windows"))]
fn stop_orphan_llama_server_on_port(_port: u16, _model_path: &Path) -> bool {
    false
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
                            .map(|last| {
                                last.elapsed() >= Duration::from_secs(idle_timeout as u64 * 60)
                            })
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

fn normalize_service_config(mut config: LocalAiConfig) -> LocalAiConfig {
    if config.host.trim().is_empty() {
        config.host = DEFAULT_HOST.to_string();
    }
    if config.port == 0 {
        config.port = DEFAULT_PORT;
    }
    config
}

fn service_config_matches(running: &LocalAiConfig, desired: &LocalAiConfig) -> bool {
    running.model_dir == desired.model_dir
        && running.model_path == desired.model_path
        && running.mmproj_path == desired.mmproj_path
        && running.runtime_path == desired.runtime_path
        && running.host == desired.host
        && running.port == desired.port
        && running.ctx_size == desired.ctx_size
        && running.gpu_layers == desired.gpu_layers
        && running.main_gpu == desired.main_gpu
        && running.threads == desired.threads
        && running.batch_size == desired.batch_size
        && running.ubatch_size == desired.ubatch_size
        && running.flash_attn == desired.flash_attn
        && running.kv_offload == desired.kv_offload
        && running.mmap == desired.mmap
}

fn service_command_matches(command_line: Option<&str>) -> bool {
    command_line
        .map(|command_line| command_line.contains("--parallel"))
        .unwrap_or(false)
}

async fn ensure_service_running(
    app_handle: &AppHandle,
    config: &LocalAiConfig,
) -> Result<(), String> {
    let desired = normalize_service_config(config.clone());
    let should_start = {
        let mut state = SERVICE_STATE
            .lock()
            .map_err(|error| format!("本地 AI 服务状态锁定失败: {}", error))?;
        let running = is_child_running_locked(&mut state);
        if !running {
            true
        } else {
            let config_matches = state
                .config
                .as_ref()
                .map(|running_config| service_config_matches(running_config, &desired))
                .unwrap_or(false);
            let command_matches = service_command_matches(state.command_line.as_deref());
            if config_matches && command_matches {
                return Ok(());
            }
            if state.active_requests > 0 {
                return Err("本地 AI 运行配置已变更，请等待当前请求结束后再重试".to_string());
            }
            warn!(
                "[Plugin:local-ai] restarting llama-server because running config or startup args differ from saved config"
            );
            stop_child_locked(&mut state);
            true
        }
    };
    if !should_start {
        return Ok(());
    }
    if !desired.auto_start_on_request {
        return Err("本地 AI 服务未启动，请先在本地 AI 设置中启动服务".to_string());
    }

    start_service_inner(app_handle, desired).await.map(|_| ())
}

async fn start_service_inner(
    app_handle: &AppHandle,
    mut config: LocalAiConfig,
) -> Result<LocalAiServiceStatus, String> {
    config = normalize_service_config(config);
    if config.host != "127.0.0.1" && config.host != "localhost" {
        return Err("本地 AI 服务仅允许绑定 127.0.0.1 或 localhost".to_string());
    }

    let (runtime, _) = find_llama_server(app_handle, &config);
    let (runtime_path, runtime_source) = runtime.ok_or_else(|| {
        "未找到 llama-server.exe，请安装 local-ai-llama-runtime 资源包或手动指定路径".to_string()
    })?;
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
    if stop_orphan_llama_server_on_port(config.port, &model_path) {
        tokio::time::sleep(Duration::from_millis(500)).await;
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
    enable_thinking: Option<bool>,
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
        "top_p": config.top_p,
        "top_k": config.top_k,
        "min_p": config.min_p,
        "repeat_penalty": config.repeat_penalty,
        "repeat_last_n": config.repeat_last_n,
        "max_tokens": completion_token_limit(&config, max_tokens),
        "chat_template_kwargs": {
            "enable_thinking": enable_thinking.unwrap_or(false)
        },
        "cache_prompt": true,
        "timings_per_token": true,
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

fn emit_chat_stream(
    window: &Window,
    request_id: &str,
    event: &str,
    content: Option<String>,
    error: Option<String>,
    stats: Option<LocalAiChatStreamStats>,
) {
    let _ = window.emit(
        "local-ai-chat-stream",
        LocalAiChatStreamPayload {
            request_id: request_id.to_string(),
            event: event.to_string(),
            content,
            error,
            stats,
        },
    );
}

fn get_u32_field(value: &Value, key: &str) -> Option<u32> {
    value
        .get(key)
        .and_then(|field| field.as_u64())
        .and_then(|number| u32::try_from(number).ok())
}

fn get_f64_field(value: &Value, key: &str) -> Option<f64> {
    value.get(key).and_then(|field| field.as_f64())
}

fn extract_stream_stats(value: &Value, ctx_size: u32) -> Option<LocalAiChatStreamStats> {
    let usage = value.get("usage");
    let timings = value.get("timings");
    let finish_reason = value
        .get("choices")
        .and_then(|choices| choices.as_array())
        .and_then(|choices| choices.first())
        .and_then(|choice| choice.get("finish_reason"))
        .and_then(|reason| reason.as_str())
        .filter(|reason| !reason.is_empty())
        .map(str::to_string);
    let prompt_tokens = usage
        .and_then(|usage| get_u32_field(usage, "prompt_tokens"))
        .or_else(|| timings.and_then(|timings| get_u32_field(timings, "prompt_n")));
    let completion_tokens = usage
        .and_then(|usage| get_u32_field(usage, "completion_tokens"))
        .or_else(|| timings.and_then(|timings| get_u32_field(timings, "predicted_n")));
    let total_tokens = usage
        .and_then(|usage| get_u32_field(usage, "total_tokens"))
        .or_else(|| {
            prompt_tokens
                .zip(completion_tokens)
                .map(|(prompt, completion)| prompt + completion)
        });
    let generation_time_ms = timings.and_then(|timings| get_f64_field(timings, "predicted_ms"));
    let tokens_per_second =
        timings.and_then(|timings| get_f64_field(timings, "predicted_per_second"));

    if prompt_tokens.is_none()
        && completion_tokens.is_none()
        && total_tokens.is_none()
        && generation_time_ms.is_none()
        && tokens_per_second.is_none()
        && finish_reason.is_none()
    {
        return None;
    }

    Some(LocalAiChatStreamStats {
        prompt_tokens,
        completion_tokens,
        total_tokens,
        ctx_size: Some(ctx_size),
        generation_time_ms,
        tokens_per_second,
        finish_reason,
    })
}

fn extract_stream_delta(
    value: &Value,
    reasoning_open: &mut bool,
    enable_thinking: bool,
) -> Option<String> {
    let message = value
        .get("choices")
        .and_then(|choices| choices.as_array())
        .and_then(|choices| choices.first())
        .and_then(|choice| choice.get("delta").or_else(|| choice.get("message")))?;

    if let Some(reasoning) = message
        .get("reasoning_content")
        .and_then(|content| content.as_str())
        .filter(|content| !content.is_empty())
    {
        if !enable_thinking {
            return None;
        }
        if *reasoning_open {
            return Some(reasoning.to_string());
        }
        *reasoning_open = true;
        return Some(format!("<think>{}", reasoning));
    }

    value
        .get("choices")
        .and_then(|choices| choices.as_array())
        .and_then(|choices| choices.first())
        .and_then(|choice| choice.get("delta").or_else(|| choice.get("message")))
        .and_then(|message| message.get("content"))
        .and_then(|content| content.as_str())
        .filter(|content| !content.is_empty())
        .map(|content| {
            if *reasoning_open {
                *reasoning_open = false;
                format!("</think>\n\n{}", content)
            } else {
                content.to_string()
            }
        })
}

async fn chat_completion_stream(
    app_handle: &AppHandle,
    window: Window,
    request_id: String,
    messages: Vec<LocalAiMessage>,
    temperature: Option<f32>,
    max_tokens: Option<u32>,
    enable_thinking: Option<bool>,
) -> Result<String, String> {
    require_plugin(app_handle)?;
    if messages.is_empty() {
        return Err("消息不能为空".to_string());
    }

    let config = read_config(app_handle);
    ensure_service_running(app_handle, &config).await?;
    let _guard = mark_request_started();
    let cancel_flag = Arc::new(AtomicBool::new(false));
    if let Ok(mut cancels) = ACTIVE_STREAM_CANCELS.lock() {
        cancels.insert(request_id.clone(), Arc::clone(&cancel_flag));
    }

    let request_ctx_size = config.ctx_size;
    emit_chat_stream(
        &window,
        &request_id,
        "stats",
        None,
        None,
        Some(LocalAiChatStreamStats {
            prompt_tokens: None,
            completion_tokens: None,
            total_tokens: None,
            ctx_size: Some(request_ctx_size),
            generation_time_ms: None,
            tokens_per_second: None,
            finish_reason: None,
        }),
    );

    let client = Client::builder()
        .timeout(Duration::from_secs(config.request_timeout_secs as u64))
        .build()
        .map_err(|error| format!("创建本地 AI 请求客户端失败: {}", error))?;
    let url = format!("{}/v1/chat/completions", base_url(&config));
    let body = serde_json::json!({
        "model": "local-ai",
        "messages": messages,
        "temperature": temperature.unwrap_or(config.temperature),
        "top_p": config.top_p,
        "top_k": config.top_k,
        "min_p": config.min_p,
        "repeat_penalty": config.repeat_penalty,
        "repeat_last_n": config.repeat_last_n,
        "max_tokens": completion_token_limit(&config, max_tokens),
        "chat_template_kwargs": {
            "enable_thinking": enable_thinking.unwrap_or(false)
        },
        "cache_prompt": true,
        "timings_per_token": true,
        "stream": true,
        "stream_options": {
            "include_usage": true
        }
    });

    let response_result = client
        .post(url)
        .header(ACCEPT, "text/event-stream")
        .header(CACHE_CONTROL, "no-cache")
        .json(&body)
        .send()
        .await;
    let response = match response_result {
        Ok(response) => response,
        Err(error) => {
            if let Ok(mut cancels) = ACTIVE_STREAM_CANCELS.lock() {
                cancels.remove(&request_id);
            }
            return Err(format!("请求本地 AI 服务失败: {}", error));
        }
    };
    let status = response.status();
    if !status.is_success() {
        let value = response
            .text()
            .await
            .unwrap_or_else(|error| format!("读取错误响应失败: {}", error));
        if let Ok(mut cancels) = ACTIVE_STREAM_CANCELS.lock() {
            cancels.remove(&request_id);
        }
        return Err(format!("本地 AI 服务返回错误 {}: {}", status, value));
    }

    let mut stream = response.bytes_stream();
    let mut buffer = String::new();
    let mut content = String::new();
    let mut reasoning_open = false;
    while let Some(chunk) = stream.next().await {
        if cancel_flag.load(Ordering::Relaxed) {
            if reasoning_open {
                content.push_str("</think>");
                emit_chat_stream(
                    &window,
                    &request_id,
                    "delta",
                    Some("</think>".to_string()),
                    None,
                    None,
                );
            }
            emit_chat_stream(&window, &request_id, "done", None, None, None);
            if let Ok(mut cancels) = ACTIVE_STREAM_CANCELS.lock() {
                cancels.remove(&request_id);
            }
            return Ok(content.trim().to_string());
        }

        let chunk = chunk.map_err(|error| format!("读取本地 AI 流失败: {}", error))?;
        buffer.push_str(&String::from_utf8_lossy(&chunk));

        while let Some(index) = buffer.find('\n') {
            let line = buffer[..index].trim().to_string();
            buffer = buffer[index + 1..].to_string();
            if line.is_empty() || !line.starts_with("data:") {
                continue;
            }

            let data = line.trim_start_matches("data:").trim();
            if data == "[DONE]" {
                if reasoning_open {
                    let delta = "</think>".to_string();
                    content.push_str(&delta);
                    emit_chat_stream(&window, &request_id, "delta", Some(delta), None, None);
                }
                emit_chat_stream(&window, &request_id, "done", None, None, None);
                if let Ok(mut cancels) = ACTIVE_STREAM_CANCELS.lock() {
                    cancels.remove(&request_id);
                }
                return Ok(content.trim().to_string());
            }

            let value = serde_json::from_str::<Value>(data)
                .map_err(|error| format!("解析本地 AI 流响应失败: {}", error))?;
            if let Some(stats) = extract_stream_stats(&value, request_ctx_size) {
                emit_chat_stream(&window, &request_id, "stats", None, None, Some(stats));
            }
            if let Some(delta) = extract_stream_delta(
                &value,
                &mut reasoning_open,
                enable_thinking.unwrap_or(false),
            ) {
                content.push_str(&delta);
                emit_chat_stream(&window, &request_id, "delta", Some(delta), None, None);
            }
        }
    }

    if let Ok(mut cancels) = ACTIVE_STREAM_CANCELS.lock() {
        cancels.remove(&request_id);
    }
    if !content.trim().is_empty() {
        if reasoning_open {
            emit_chat_stream(
                &window,
                &request_id,
                "delta",
                Some("</think>".to_string()),
                None,
                None,
            );
        }
        return Err("本地 AI 流在完成前断开，已保留已生成内容。".to_string());
    }
    Err("本地 AI 响应中没有可用内容".to_string())
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
            content: Value::String(system_prompt),
        },
        LocalAiMessage {
            role: "user".to_string(),
            content: Value::String(text),
        },
    ];
    chat_completion(&app_handle, messages, Some(0.2), None, Some(false)).await
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
        if let Some(running_config) = state.config.as_mut() {
            running_config.auto_start_on_request = config.auto_start_on_request;
            running_config.idle_timeout_minutes = config.idle_timeout_minutes;
            running_config.keep_alive = config.keep_alive;
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
    let (
        running,
        pid,
        model_path,
        runtime_path,
        status_config,
        ctx_size,
        command_line,
        active_requests,
        last_error,
    ) = {
        let mut state = SERVICE_STATE
            .lock()
            .map_err(|error| format!("本地 AI 服务状态锁定失败: {}", error))?;
        let running = is_child_running_locked(&mut state);
        let pid = state.child.as_ref().map(|child| child.id());
        let status_config = if running {
            state.config.clone().unwrap_or_else(|| config.clone())
        } else {
            config.clone()
        };
        let ctx_size = status_config.ctx_size;
        (
            running,
            pid,
            state.model_path.clone(),
            state.runtime_path.clone(),
            status_config,
            ctx_size,
            state.command_line.clone(),
            state.active_requests,
            state.last_error.clone(),
        )
    };
    let url = base_url(&status_config);
    let healthy = if running {
        health_check_url(&url).await
    } else {
        false
    };
    let ctx_size = if healthy {
        server_context_size(&url).await.unwrap_or(ctx_size)
    } else {
        ctx_size
    };

    Ok(LocalAiServiceStatus {
        running,
        healthy,
        pid,
        base_url: url,
        model_path,
        runtime_path,
        ctx_size,
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
pub async fn local_ai_restart_service(
    app_handle: AppHandle,
) -> Result<LocalAiServiceStatus, String> {
    require_plugin(&app_handle)?;
    local_ai_stop_service(app_handle.clone())?;
    local_ai_start_service(app_handle, None).await
}

#[tauri::command]
pub fn local_ai_stop_service(app_handle: AppHandle) -> Result<(), String> {
    require_plugin(&app_handle)?;
    let config = read_config(&app_handle);
    stop_service_now();
    if let Ok((model_path, _)) = resolve_model_paths(&config) {
        stop_orphan_llama_server_on_port(config.port, &model_path);
    }
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
        request.enable_thinking,
    )
    .await?;
    Ok(LocalAiChatResponse { content })
}

#[tauri::command]
pub async fn local_ai_chat_stream(
    app_handle: AppHandle,
    window: Window,
    request: LocalAiChatRequest,
    request_id: String,
) -> Result<LocalAiChatResponse, String> {
    match chat_completion_stream(
        &app_handle,
        window.clone(),
        request_id.clone(),
        request.messages,
        request.temperature,
        request.max_tokens,
        request.enable_thinking,
    )
    .await
    {
        Ok(content) => Ok(LocalAiChatResponse { content }),
        Err(error) => {
            if let Ok(mut cancels) = ACTIVE_STREAM_CANCELS.lock() {
                cancels.remove(&request_id);
            }
            emit_chat_stream(
                &window,
                &request_id,
                "error",
                None,
                Some(error.clone()),
                None,
            );
            Err(error)
        }
    }
}

#[tauri::command]
pub async fn local_ai_web_search(
    app_handle: AppHandle,
    request: LocalAiWebSearchRequest,
) -> Result<LocalAiWebSearchResponse, String> {
    require_plugin(&app_handle)?;
    let query = request.query.trim();
    if query.is_empty() {
        return Err("搜索关键词不能为空".to_string());
    }

    let config = read_config(&app_handle);
    let max_results = request
        .max_results
        .unwrap_or(config.web_search_max_results)
        .clamp(1, 10);

    let results = search_with_agent_reach(
        &app_handle,
        query,
        max_results,
        u64::from(config.web_search_timeout_secs.max(3)),
    )
    .await?;
    if results.is_empty() {
        Err(
            "Agent-Reach 搜索没有返回可用结果，请运行 agent-reach doctor 检查 Exa/mcporter 后端。"
                .to_string(),
        )
    } else {
        Ok(LocalAiWebSearchResponse {
            query: query.to_string(),
            results,
        })
    }
}

#[tauri::command]
pub async fn local_ai_agent_reach_status(
    app_handle: AppHandle,
) -> Result<LocalAiAgentReachStatus, String> {
    require_plugin(&app_handle)?;
    Ok(agent_reach_status_inner(&app_handle).await)
}

#[tauri::command]
pub async fn local_ai_weather(
    app_handle: AppHandle,
    request: LocalAiWeatherRequest,
) -> Result<LocalAiWeatherResponse, String> {
    require_plugin(&app_handle)?;
    let query = request.query.trim();
    if query.is_empty() {
        return Err("天气查询不能为空".to_string());
    }
    let config = read_config(&app_handle);
    let client = Client::builder()
        .timeout(Duration::from_secs(u64::from(
            config.web_search_timeout_secs.max(3),
        )))
        .build()
        .map_err(|error| format!("创建天气查询客户端失败: {}", error))?;
    let location = resolve_weather_location(&client, query).await?;
    let weather_url = "https://api.open-meteo.com/v1/forecast";
    info!(
        "[Plugin:local-ai] weather start provider=open_meteo location={} query=\"{}\"",
        location.name,
        response_preview(query)
    );
    let response = client
        .get(weather_url)
        .header(ACCEPT, "application/json")
        .header(USER_AGENT, "snippets-code-local-ai/1.0")
        .query(&[
            ("latitude", location.latitude.to_string()),
            ("longitude", location.longitude.to_string()),
            (
                "current",
                "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m".to_string(),
            ),
            (
                "daily",
                "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max".to_string(),
            ),
            ("timezone", location.timezone.clone()),
            ("forecast_days", "1".to_string()),
        ])
        .send()
        .await
        .map_err(|error| {
            warn!(
                "[Plugin:local-ai] weather request failed provider=open_meteo location={} error={}",
                location.name, error
            );
            format!("天气查询请求失败: {}", error)
        })?;
    let status = response.status();
    let body = response.text().await.map_err(|error| {
        warn!(
            "[Plugin:local-ai] weather read response failed provider=open_meteo location={} status={} error={}",
            location.name, status, error
        );
        format!("读取天气响应失败: {}", error)
    })?;
    info!(
        "[Plugin:local-ai] weather response provider=open_meteo location={} status={} bytes={} preview=\"{}\"",
        location.name,
        status,
        body.len(),
        response_preview(&body)
    );
    if !status.is_success() {
        return Err(web_search_status_error(status, &body));
    }
    let value = serde_json::from_str::<Value>(&body)
        .map_err(|error| format!("解析天气响应失败: {}", error))?;
    let current = value.get("current").unwrap_or(&Value::Null);
    let current_code = integer_at(current, "weather_code");
    let daily_code = daily_integer_at(&value, "weather_code");
    let weather_code = current_code.or(daily_code);
    let response = LocalAiWeatherResponse {
        location: location.name.to_string(),
        country: location.country.to_string(),
        latitude: value
            .get("latitude")
            .and_then(Value::as_f64)
            .unwrap_or(location.latitude),
        longitude: value
            .get("longitude")
            .and_then(Value::as_f64)
            .unwrap_or(location.longitude),
        date: daily_string_at(&value, "time").unwrap_or_default(),
        time: current
            .get("time")
            .and_then(Value::as_str)
            .unwrap_or("")
            .to_string(),
        timezone: value
            .get("timezone")
            .and_then(Value::as_str)
            .unwrap_or(location.timezone.as_str())
            .to_string(),
        temperature: number_at(current, "temperature_2m"),
        apparent_temperature: number_at(current, "apparent_temperature"),
        humidity: number_at(current, "relative_humidity_2m"),
        precipitation: number_at(current, "precipitation"),
        weather_code,
        weather_text: weather_code_text(weather_code),
        wind_speed: number_at(current, "wind_speed_10m"),
        temperature_max: daily_number_at(&value, "temperature_2m_max"),
        temperature_min: daily_number_at(&value, "temperature_2m_min"),
        precipitation_probability: daily_number_at(&value, "precipitation_probability_max"),
        source: "Open-Meteo".to_string(),
    };
    info!(
        "[Plugin:local-ai] weather parsed provider=open_meteo location={} date={} temp={:?} max={:?} min={:?}",
        response.location,
        response.date,
        response.temperature,
        response.temperature_max,
        response.temperature_min
    );
    Ok(response)
}

#[tauri::command]
pub fn local_ai_cancel_chat_stream(
    app_handle: AppHandle,
    request_id: String,
) -> Result<bool, String> {
    require_plugin(&app_handle)?;
    let cancels = ACTIVE_STREAM_CANCELS
        .lock()
        .map_err(|error| format!("本地 AI 取消状态锁定失败: {}", error))?;
    if let Some(flag) = cancels.get(&request_id) {
        flag.store(true, Ordering::Relaxed);
        return Ok(true);
    }
    Ok(false)
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

#[tauri::command]
pub fn local_ai_get_chat_histories(
    app_handle: AppHandle,
) -> Result<Vec<LocalAiChatHistory>, String> {
    require_plugin(&app_handle)?;
    Ok(load_chat_histories(&app_handle))
}

#[tauri::command]
pub fn local_ai_save_chat_history(
    app_handle: AppHandle,
    history: LocalAiChatHistory,
) -> Result<Vec<LocalAiChatHistory>, String> {
    require_plugin(&app_handle)?;
    let mut histories = load_chat_histories(&app_handle);
    if let Some(index) = histories.iter().position(|item| item.id == history.id) {
        histories[index] = history;
    } else {
        histories.insert(0, history);
    }
    persist_chat_histories(&app_handle, &histories)?;
    Ok(histories)
}

#[tauri::command]
pub fn local_ai_delete_chat_history(
    app_handle: AppHandle,
    history_id: String,
) -> Result<Vec<LocalAiChatHistory>, String> {
    require_plugin(&app_handle)?;
    let mut histories = load_chat_histories(&app_handle);
    histories.retain(|item| item.id != history_id);
    persist_chat_histories(&app_handle, &histories)?;
    Ok(histories)
}

pub fn apply_runtime_change(app_handle: &AppHandle, enabled: bool) {
    if !enabled {
        stop_service_now();
        return;
    }

    let app_handle = app_handle.clone();
    tauri::async_runtime::spawn(async move {
        match ensure_agent_reach_ready(
            &app_handle,
            u64::from(default_web_search_timeout_secs().max(3)),
        )
        .await
        {
            Ok(_) => info!("[Plugin:local-ai] Agent-Reach ready"),
            Err(error) => warn!("[Plugin:local-ai] Agent-Reach bootstrap failed: {}", error),
        }
    });
}

pub fn stop_service_now() {
    match SERVICE_STATE.lock() {
        Ok(mut state) => stop_child_locked(&mut state),
        Err(error) => warn!("[Plugin:local-ai] stop service lock failed: {}", error),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn extracts_weather_location_from_recent_context() {
        let location = extract_weather_location("今天河北天气如何\n温度呢")
            .expect("河北 should be recognized");
        assert_eq!(location.name, "河北");
        assert_eq!(location.timezone, "Asia/Shanghai");
        assert_eq!(weather_code_text(Some(3)), "阴/多云");
    }

    #[test]
    fn extracts_hefei_weather_location() {
        let location =
            extract_weather_location("合肥今天天气怎么样").expect("合肥 should be recognized");
        assert_eq!(location.name, "合肥");
        assert_eq!(location.country, "中国");
    }

    #[test]
    fn builds_weather_location_candidates_for_geocoding() {
        let candidates = weather_location_candidates("苏州今天会下雨吗");
        assert_eq!(candidates.first().map(String::as_str), Some("苏州"));
    }

    #[test]
    fn parses_agent_reach_exa_json_results() {
        let output = r#"
        {
          "content": [
            {
              "type": "text",
              "text": "{\"results\":[{\"title\":\"合肥天气预报\",\"url\":\"https://example.com/hefei\",\"text\":\"今天大雨转阴。\"}]}"
            }
          ]
        }
        "#;
        let results = parse_agent_reach_search_results(output, 5);
        assert_eq!(results.len(), 1);
        assert_eq!(results[0].title, "合肥天气预报");
        assert_eq!(results[0].url, "https://example.com/hefei");
        assert_eq!(results[0].content, "今天大雨转阴。");
        assert_eq!(results[0].engine.as_deref(), Some("Agent-Reach / Exa"));
    }

    #[test]
    fn parses_agent_reach_plain_text_results() {
        let output = "- Example Result https://example.com/article A clean snippet.";
        let results = parse_agent_reach_search_results(output, 5);
        assert_eq!(results.len(), 1);
        assert_eq!(results[0].title, "Example Result");
        assert_eq!(results[0].url, "https://example.com/article");
        assert_eq!(results[0].content, "A clean snippet.");
    }
}
