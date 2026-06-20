use base64::{engine::general_purpose, Engine as _};
use chrono::Local;
use futures::StreamExt;
use log::{info, warn};
use regex::Regex;
use reqwest::{
    header::{ACCEPT, CACHE_CONTROL, USER_AGENT},
    Client,
};
use scraper::{Html, Selector};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::collections::HashMap;
use std::fs::{self, OpenOptions};
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::{
    atomic::{AtomicBool, Ordering},
    Arc, LazyLock, Mutex,
};
use std::time::{Duration, Instant};
use tauri::{AppHandle, Emitter, Manager, Window};
use url::Url;

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

const PLUGIN_ID: &str = "local-ai";
const RUNTIME_PLUGIN_ID: &str = "local-ai-llama-runtime";
const DEFAULT_MODEL_DIR: &str = r"E:\Models\HauhauCS\Qwen3.5-4B-Uncensored-HauhauCS-Aggressive";
const DEFAULT_HOST: &str = "127.0.0.1";
const DEFAULT_PORT: u16 = 39281;
const DEFAULT_WEB_SEARCH_URL: &str = "https://html.duckduckgo.com/html/?q={query}";
const LEGACY_WEB_SEARCH_URL: &str = "https://www.bing.com/search?q={query}";
const HEALTH_TIMEOUT_SECS: u64 = 90;
const IDLE_CHECK_INTERVAL_SECS: u64 = 30;
const CHAT_PARALLEL_SLOTS: u32 = 1;
static SERVICE_STATE: LazyLock<Mutex<LocalAiServiceState>> =
    LazyLock::new(|| Mutex::new(LocalAiServiceState::default()));
static ACTIVE_STREAM_CANCELS: LazyLock<Mutex<HashMap<String, Arc<AtomicBool>>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));
static IDLE_MONITOR_RUNNING: AtomicBool = AtomicBool::new(false);
static VERIFIED_SOURCE_CACHE: LazyLock<
    Mutex<HashMap<String, (Instant, Vec<LocalAiVerifiedSource>)>>,
> = LazyLock::new(|| Mutex::new(HashMap::new()));
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
    #[serde(default = "default_web_search_url")]
    pub web_search_url: String,
}

fn default_web_search_url() -> String {
    DEFAULT_WEB_SEARCH_URL.to_string()
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
            web_search_url: default_web_search_url(),
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
pub struct LocalAiVerifiedSourceSearchRequest {
    pub query: String,
    pub max_results: Option<u32>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiVerifiedSource {
    pub title: String,
    pub url: String,
    pub snippet: String,
    pub source: String,
    pub published_at: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LocalAiVerifiedSourceSearchResponse {
    pub query: String,
    pub results: Vec<LocalAiVerifiedSource>,
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
    if config.web_search_url.trim().is_empty() || config.web_search_url == LEGACY_WEB_SEARCH_URL {
        config.web_search_url = default_web_search_url();
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

fn completion_token_limit(config: &LocalAiConfig, request_max_tokens: Option<u32>) -> i64 {
    let limit = request_max_tokens.unwrap_or(config.max_tokens);
    if limit == 0 {
        -1
    } else {
        i64::from(limit)
    }
}

fn compact_source_text(value: &str, limit: usize) -> String {
    let mut text = String::with_capacity(value.len());
    let mut in_tag = false;
    for character in value.chars() {
        match character {
            '<' => in_tag = true,
            '>' => {
                in_tag = false;
                text.push(' ');
            }
            _ if !in_tag => text.push(character),
            _ => {}
        }
    }
    text.replace("&quot;", "\"")
        .replace("&#39;", "'")
        .replace("&amp;", "&")
        .split_whitespace()
        .collect::<Vec<_>>()
        .join(" ")
        .chars()
        .take(limit)
        .collect()
}

fn resolve_search_result_url(search_host: Option<&str>, candidate: Url) -> Option<Url> {
    for key in ["url", "uddg", "q"] {
        if let Some((_, value)) = candidate.query_pairs().find(|(name, _)| name == key) {
            if let Ok(url) = Url::parse(&value) {
                if matches!(url.scheme(), "http" | "https") && url.host_str() != search_host {
                    return Some(url);
                }
            }
        }
    }
    if let Some((_, encoded)) = candidate.query_pairs().find(|(name, _)| name == "u") {
        let encoded = encoded.strip_prefix("a1").unwrap_or(&encoded);
        let decoded = general_purpose::URL_SAFE_NO_PAD
            .decode(encoded.as_bytes())
            .or_else(|_| general_purpose::STANDARD.decode(encoded.as_bytes()))
            .ok()?;
        let url = Url::parse(std::str::from_utf8(&decoded).ok()?).ok()?;
        if matches!(url.scheme(), "http" | "https") && url.host_str() != search_host {
            return Some(url);
        }
    }
    (candidate.host_str() != search_host).then_some(candidate)
}

fn is_current_weather_query(query: &str) -> bool {
    let lower = query.to_lowercase();
    ["天气", "气温", "温度", "降雨", "weather", "temperature"]
        .iter()
        .any(|term| lower.contains(term))
        && ["今天", "今日", "现在", "实时", "today", "current", "now"]
            .iter()
            .any(|term| lower.contains(term))
}

fn is_weather_query(query: &str) -> bool {
    let lower = query.to_lowercase();
    ["天气", "气温", "温度", "降雨", "下雨", "weather", "temperature", "rain"]
        .iter()
        .any(|term| lower.contains(term))
}

fn weather_location_candidate(query: &str) -> Option<String> {
    let mut value = query.to_string();
    for term in [
        "今天", "今日", "明天", "后天", "现在", "实时", "当地", "天气", "气温", "温度", "降雨",
        "下雨", "怎么样", "怎样", "如何", "多少", "帮我", "查询", "预报", "的", "weather", "temperature", "today",
        "current", "now",
    ] {
        value = value.replace(term, " ");
    }
    let location = value
        .split_whitespace()
        .filter(|part| part.chars().any(char::is_alphabetic))
        .collect::<Vec<_>>()
        .join(" ");
    (!location.is_empty()).then_some(location)
}

fn weather_code_label(code: i64) -> &'static str {
    match code {
        0 => "晴",
        1..=3 => "多云",
        45 | 48 => "雾",
        51 | 53 | 55 | 56 | 57 => "毛毛雨",
        61 | 63 | 65 | 66 | 67 | 80 | 81 | 82 => "雨",
        71 | 73 | 75 | 77 | 85 | 86 => "雪",
        95 | 96 | 99 => "雷暴",
        _ => "未知",
    }
}

async fn fetch_weather_api_sources(
    client: &Client,
    query: &str,
) -> Result<Vec<LocalAiVerifiedSource>, String> {
    let location = weather_location_candidate(query)
        .ok_or_else(|| "无法从问题中识别天气地点。".to_string())?;
    let geocoding: Value = client
        .get("https://geocoding-api.open-meteo.com/v1/search")
        .query(&[("name", location.as_str()), ("count", "1"), ("language", "zh"), ("format", "json")])
        .send()
        .await
        .map_err(|error| format!("天气地点查询失败: {}", error))?
        .error_for_status()
        .map_err(|error| format!("天气地点查询请求失败: {}", error))?
        .json()
        .await
        .map_err(|error| format!("天气地点查询数据无效: {}", error))?;
    let place = geocoding["results"].as_array().and_then(|items| items.first())
        .ok_or_else(|| "未找到对应的天气地点。".to_string())?;
    let latitude = place["latitude"].as_f64().ok_or_else(|| "天气地点缺少纬度。".to_string())?;
    let longitude = place["longitude"].as_f64().ok_or_else(|| "天气地点缺少经度。".to_string())?;
    let weather: Value = client
        .get("https://api.open-meteo.com/v1/forecast")
        .query(&[
            ("latitude", latitude.to_string()),
            ("longitude", longitude.to_string()),
            ("current", "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m".to_string()),
            ("daily", "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max".to_string()),
            ("forecast_days", "1".to_string()),
            ("timezone", "auto".to_string()),
        ])
        .send()
        .await
        .map_err(|error| format!("天气接口请求失败: {}", error))?
        .error_for_status()
        .map_err(|error| format!("天气接口返回错误: {}", error))?
        .json()
        .await
        .map_err(|error| format!("天气接口数据无效: {}", error))?;
    let current = &weather["current"];
    let daily = &weather["daily"];
    let name = place["name"].as_str().unwrap_or(location.as_str());
    let value = |item: &Value, key: &str| item[key].as_f64().map(|number| format!("{number:.1}")).unwrap_or_else(|| "未知".to_string());
    let daily_value = |key: &str| daily[key].as_array().and_then(|items| items.first()).and_then(Value::as_f64).map(|number| format!("{number:.1}")).unwrap_or_else(|| "未知".to_string());
    let code = current["weather_code"].as_i64().unwrap_or(-1);
    let day_code = daily["weather_code"].as_array().and_then(|items| items.first()).and_then(Value::as_i64).unwrap_or(code);
    let observed_at = current["time"].as_str().unwrap_or("未知时间");
    Ok(vec![LocalAiVerifiedSource {
        title: format!("{} 实时天气与当日预报（Open-Meteo）", name),
        url: format!("https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}"),
        snippet: format!(
            "观测时间：{observed_at}。实时：{}，气温 {}°C，体感 {}°C，湿度 {}%，降水 {} mm，风速 {} km/h。当日预报：{}，最高 {}°C，最低 {}°C，最大降水概率 {}%。",
            weather_code_label(code), value(current, "temperature_2m"), value(current, "apparent_temperature"), value(current, "relative_humidity_2m"), value(current, "precipitation"), value(current, "wind_speed_10m"), weather_code_label(day_code), daily_value("temperature_2m_max"), daily_value("temperature_2m_min"), daily_value("precipitation_probability_max")
        ),
        source: "Open-Meteo 免费天气 API".to_string(),
        published_at: Some(observed_at.to_string()),
    }])
}

fn build_web_search_query(query: &str) -> String {
    if !is_current_weather_query(query) {
        return query.to_string();
    }
    let today = Local::now().format("%Y-%m-%d");
    format!(
        "site:weather.com.cn {} {} 当日 实况 温度 降水",
        query, today
    )
}

async fn search_verified_sources(
    app_handle: &AppHandle,
    query: &str,
    max_results: u32,
) -> Result<Vec<LocalAiVerifiedSource>, String> {
    let config = read_config(app_handle);
    let client = Client::builder()
        .timeout(Duration::from_secs(15))
        .build()
        .map_err(|error| format!("client initialization failed: {}", error))?;
    if is_weather_query(query) {
        if let Ok(results) = fetch_weather_api_sources(&client, query).await {
            return Ok(results);
        }
    }
    let template = config.web_search_url.trim();
    if !template.contains("{query}") {
        return Err("搜索页面地址必须包含 {query} 占位符。".to_string());
    }
    let search_query = build_web_search_query(query);
    let current_weather = is_current_weather_query(query);
    let search_url = template.replace("{query}", &urlencoding::encode(&search_query));
    let endpoint =
        Url::parse(&search_url).map_err(|error| format!("搜索页面地址无效: {}", error))?;
    if !matches!(endpoint.scheme(), "http" | "https") || endpoint.host_str().is_none() {
        return Err("搜索页面地址仅支持有效的 http 或 https URL。".to_string());
    }
    let cache_key = format!("{}:{}", template, search_query.to_lowercase());
    if let Ok(cache) = VERIFIED_SOURCE_CACHE.lock() {
        if let Some((cached_at, results)) = cache.get(&cache_key) {
            if cached_at.elapsed() < Duration::from_secs(10 * 60) {
                return Ok(results.iter().take(max_results as usize).cloned().collect());
            }
        }
    }
    let response = client
        .get(search_url.clone())
        .header(ACCEPT, "text/html,application/xhtml+xml")
        .header(
            USER_AGENT,
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36",
        )
        .send()
        .await
        .map_err(|error| format!("无法请求搜索页面（{}）: {}", endpoint, error))?
        .error_for_status()
        .map_err(|error| format!("搜索页面请求失败（{}）: {}", endpoint, error))?
        .text()
        .await
        .map_err(|error| format!("无法读取搜索页面: {}", error))?;
    if response.to_ascii_lowercase().contains("turnstile")
        || response.to_ascii_lowercase().contains("captcha")
    {
        return Err(
            "搜索页面要求人机验证，无法在后台解析；请改用不需要验证的搜索页面地址。".to_string(),
        );
    }
    let result_selector = Selector::parse("li.b_algo h2 a, h2 a, h3 a, a")
        .map_err(|_| "无法初始化搜索页面解析器。".to_string())?;
    let result_links = {
        let document = Html::parse_document(&response);
        let mut seen_urls = Vec::new();
        let mut links = Vec::new();
        for link in document.select(&result_selector) {
            let Some(href) = link.value().attr("href") else {
                continue;
            };
            let Ok(candidate) = endpoint.join(href) else {
                continue;
            };
            let Some(url) = resolve_search_result_url(endpoint.host_str(), candidate) else {
                continue;
            };
            let title = compact_source_text(&link.text().collect::<String>(), 240);
            if title.len() < 3 || !matches!(url.scheme(), "http" | "https") {
                continue;
            }
            if seen_urls.iter().any(|seen| seen == url.as_str()) {
                continue;
            }
            seen_urls.push(url.as_str().to_string());
            links.push((title, url));
            if links.len() >= max_results.clamp(3, 5) as usize {
                break;
            }
        }
        if links.is_empty() {
            let fallback = Regex::new(
                r#"(?is)<a[^>]*class=["'][^"']*result__a[^"']*["'][^>]*href=["']([^"']+)["'][^>]*>(.*?)</a>"#,
            )
            .expect("valid DuckDuckGo result link regex");
            for captures in fallback.captures_iter(&response) {
                let href = captures
                    .get(1)
                    .map(|value| value.as_str().replace("&amp;", "&"));
                let title = captures
                    .get(2)
                    .map(|value| compact_source_text(value.as_str(), 240))
                    .unwrap_or_default();
                let Some(href) = href else { continue };
                let Ok(candidate) = endpoint.join(&href) else {
                    continue;
                };
                let Some(url) = resolve_search_result_url(endpoint.host_str(), candidate) else {
                    continue;
                };
                if title.len() < 3 || seen_urls.iter().any(|seen| seen == url.as_str()) {
                    continue;
                }
                seen_urls.push(url.as_str().to_string());
                links.push((title, url));
                if links.len() >= max_results.clamp(3, 5) as usize {
                    break;
                }
            }
        }
        links
    };
    if result_links.is_empty() {
        return Err("搜索页面没有解析到可用结果链接；请更换搜索页面地址。".to_string());
    }
    let mut result_links = result_links;
    if current_weather {
        result_links.sort_by_key(|(_, url)| {
            !url.host_str().is_some_and(|host| {
                host.eq_ignore_ascii_case("weather.com.cn") || host.ends_with(".weather.com.cn")
            })
        });
    }
    let article_selector = Selector::parse("article, main, [role='main'], p")
        .map_err(|_| "无法初始化正文解析器。".to_string())?;
    let mut results = Vec::new();
    for (title, url) in result_links {
        let page = match client
            .get(url.clone())
            .header(USER_AGENT, "Mozilla/5.0")
            .send()
            .await
        {
            Ok(response) => response.error_for_status().ok(),
            Err(_) => None,
        };
        let Some(page) = page else { continue };
        let html = match page.text().await {
            Ok(html) => html,
            Err(_) => continue,
        };
        // Readability-style extraction: prefer semantic article/main containers, then concatenate paragraphs.
        let content = Html::parse_document(&html)
            .select(&article_selector)
            .map(|node| compact_source_text(&node.text().collect::<String>(), 1800))
            .filter(|text| text.len() >= 120)
            .max_by_key(|text| text.len());
        let Some(snippet) = content else { continue };
        results.push(LocalAiVerifiedSource {
            title,
            url: url.to_string(),
            snippet,
            source: url.host_str().unwrap_or("网页").to_string(),
            published_at: None,
        });
    }
    if results.is_empty() {
        return Err("已找到搜索结果，但未能从结果页面提取正文。".to_string());
    }
    if let Ok(mut cache) = VERIFIED_SOURCE_CACHE.lock() {
        cache.retain(|_, (cached_at, _)| cached_at.elapsed() < Duration::from_secs(10 * 60));
        cache.insert(cache_key, (Instant::now(), results.clone()));
    }
    Ok(results)
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
pub async fn local_ai_search_verified_sources(
    app_handle: AppHandle,
    request: LocalAiVerifiedSourceSearchRequest,
) -> Result<LocalAiVerifiedSourceSearchResponse, String> {
    require_plugin(&app_handle)?;
    let query = request.query.trim();
    if query.is_empty() {
        return Err("查询关键词不能为空。".to_string());
    }
    if query.chars().count() > 300 {
        return Err("查询关键词过长，请控制在 300 个字符以内。".to_string());
    }
    let results = search_verified_sources(
        &app_handle,
        query,
        request.max_results.unwrap_or(6).clamp(1, 8),
    )
    .await?;
    Ok(LocalAiVerifiedSourceSearchResponse {
        query: query.to_string(),
        results,
    })
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

pub fn apply_runtime_change(_app_handle: &AppHandle, enabled: bool) {
    if !enabled {
        stop_service_now();
        return;
    }

    info!("[Plugin:local-ai] enabled");
}

pub fn stop_service_now() {
    match SERVICE_STATE.lock() {
        Ok(mut state) => stop_child_locked(&mut state),
        Err(error) => warn!("[Plugin:local-ai] stop service lock failed: {}", error),
    }
}
