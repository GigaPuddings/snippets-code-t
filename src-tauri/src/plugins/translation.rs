use log::info;
use regex::Regex;
use reqwest::Client;
use serde::Deserialize;
use serde_json::{json, Value};
use std::sync::LazyLock;
use std::time::Duration;
use tauri::{AppHandle, Emitter, Manager, WebviewWindow};

use crate::window::{WindowManager, WindowReadyCallback, WindowShowBehavior, WindowSpec};

#[derive(Deserialize)]
#[serde(untagged)]
enum BingResponse {
    Translations(Vec<BingTranslation>),
    Error {
        #[serde(rename = "statusCode")]
        status_code: u16,
    },
}

#[derive(Deserialize)]
struct BingTranslation {
    #[serde(default)]
    translations: Vec<BingTranslationText>,
}

#[derive(Deserialize)]
struct BingTranslationText {
    text: String,
}

fn require_translation_plugin(app_handle: &AppHandle, context: &str) -> bool {
    if let Err(error) = crate::app_config::require_plugin_enabled(app_handle, "translation") {
        log::warn!("[Plugin:translation] {} blocked: {}", context, error);
        return false;
    }

    true
}

fn get_app_handle_or_log(context: &str) -> Option<&'static AppHandle> {
    match crate::APP.get() {
        Some(app) => Some(app),
        None => {
            log::error!("{}: 无法获取应用句柄", context);
            None
        }
    }
}

pub fn hotkey_selection_translate() {
    let Some(app_handle) = get_app_handle_or_log("hotkey_selection_translate").cloned() else {
        return;
    };
    if !require_translation_plugin(&app_handle, "hotkey_selection_translate") {
        return;
    }

    std::thread::sleep(std::time::Duration::from_millis(50));
    let selected_text = get_selected_text_with_retry();
    log::info!("[划词翻译] 最终获取的文本长度: {}", selected_text.len());

    if let Some(window) = app_handle.get_webview_window("translate") {
        if !WindowManager::is_ready(&window) {
            if !selected_text.trim().is_empty() {
                open_translate_window(Some(selected_text));
            }
            return;
        }
        let minimized = window.is_minimized().unwrap_or(false);
        if window.is_visible().unwrap_or(false) && !minimized {
            if !selected_text.trim().is_empty() {
                let _ = window.emit(
                    "selection-text",
                    serde_json::json!({
                        "text": selected_text
                    }),
                );
                let _ = window.set_focus();
            } else {
                let _ = window.emit("reset-state", ());
                let _ = window.hide();
            }
            return;
        }

        if !selected_text.trim().is_empty() {
            let _ = window.emit(
                "selection-text",
                serde_json::json!({
                    "text": selected_text
                }),
            );
            let _ = WindowManager::restore_and_focus(&window);
            return;
        }
    }

    if !selected_text.trim().is_empty() {
        open_translate_window(Some(selected_text));
    } else if let Some(window) = app_handle.get_webview_window("main") {
        let _ = window.emit(
            "notification",
            serde_json::json!({
                "type": "warning",
                "message": "请先选择要翻译的文本"
            }),
        );
    }
}

fn get_selected_text_with_retry() -> String {
    let text = selection::get_text();
    log::info!("[划词翻译] 第1次尝试获取选中文本，长度: {}", text.len());
    if !text.trim().is_empty() {
        return text;
    }

    std::thread::sleep(std::time::Duration::from_millis(150));
    let text = selection::get_text();
    log::info!("[划词翻译] 第2次尝试获取选中文本，长度: {}", text.len());
    if !text.trim().is_empty() {
        return text;
    }

    std::thread::sleep(std::time::Duration::from_millis(150));
    let text = selection::get_text();
    log::info!("[划词翻译] 第3次尝试获取选中文本，长度: {}", text.len());
    text
}

pub fn hotkey_translate() {
    let Some(app) = get_app_handle_or_log("hotkey_translate") else {
        return;
    };
    if !require_translation_plugin(app, "hotkey_translate") {
        return;
    }

    if let Some(window) = app.get_webview_window("translate") {
        if !WindowManager::is_ready(&window) {
            let _ = WindowManager::restore_and_focus(&window);
            return;
        }
        if window.is_visible().unwrap_or(false) && !window.is_minimized().unwrap_or(false) {
            let _ = window.emit("reset-state", ());
            let _ = window.hide();
            return;
        }

        let _ = WindowManager::restore_and_focus(&window);
        return;
    }

    let spec = translate_window_spec();
    let _ = WindowManager::get_or_create_with_behavior(&spec, WindowShowBehavior::AlwaysShow, None);
}

fn open_translate_window(text: Option<String>) {
    let spec = translate_window_spec();
    let on_ready: Option<WindowReadyCallback> = text.map(|txt| {
        Box::new(move |window: &WebviewWindow| {
            info!("翻译窗口准备完成，发送选中文本，长度: {}", txt.len());

            let _ = window.emit("selection-text", serde_json::json!({ "text": txt }));
        }) as WindowReadyCallback
    });

    let _ =
        WindowManager::get_or_create_with_behavior(&spec, WindowShowBehavior::AlwaysShow, on_ready);
    info!("翻译窗口将在首屏和内容监听就绪后显示");
}

fn translate_window_spec() -> WindowSpec {
    WindowSpec {
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
    }
}

// 翻译文本
#[tauri::command]
pub async fn translate_text(
    app_handle: AppHandle,
    text: String,
    from: String,
    to: String,
    engine: String,
) -> Result<String, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "translation")?;

    info!(
        "翻译请求: 引擎={}, 源语言={}, 目标语言={}",
        engine, from, to
    );

    match engine.as_str() {
        "bing" => translate_with_bing(text, from, to).await,
        "google" => translate_with_google(text, from, to).await,
        "local-ai" => super::local_ai::translate_text(app_handle, text, from, to).await,
        _ => Err(format!("不支持的翻译引擎: {}", engine)),
    }
}

#[tauri::command]
pub fn set_translation_engine(app_handle: AppHandle, engine: String) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(&app_handle, "translation")?;
    crate::config::set_translation_engine(app_handle, engine)
}

#[tauri::command]
pub fn get_translation_engine(app_handle: AppHandle) -> Result<String, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "translation")?;
    Ok(crate::config::get_translation_engine(app_handle))
}

const BING_TRANSLATOR_URL: &str = "https://www.bing.com/translator";
const GOOGLE_TRANSLATE_ORIGIN: &str = "https://translate.google.com";
const GOOGLE_TRANSLATE_RPC_ID: &str = "MkEWBc";

fn online_translation_client() -> Result<Client, String> {
    Client::builder()
        .connect_timeout(Duration::from_secs(8))
        .timeout(Duration::from_secs(15))
        .user_agent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        .redirect(reqwest::redirect::Policy::custom(|attempt| {
            let url = attempt.url();
            if attempt.previous().len() < 5
                && url.scheme() == "https"
                && matches!(url.host_str(), Some("www.bing.com" | "cn.bing.com" | "translate.google.com"))
            {
                attempt.follow()
            } else {
                attempt.stop()
            }
        }))
        .build()
        .map_err(|error| translation_request_error("初始化在线翻译", error))
}

fn translation_request_error(stage: &str, error: reqwest::Error) -> String {
    if let Some(status) = error.status() {
        format!("{stage}失败：HTTP {status}")
    } else if error.is_timeout() {
        format!("{stage}超时")
    } else if error.is_connect() || error.is_body() {
        format!("{stage}网络连接失败：{}", error.without_url())
    } else {
        format!("{stage}失败：{}", error.without_url())
    }
}

fn bing_language(language: &str) -> &str {
    match language {
        "auto" => "auto-detect",
        "zh" => "zh-Hans",
        "zh_tw" => "zh-Hant",
        "pt_pt" => "pt-pt",
        "pt_br" => "pt",
        _ => language,
    }
}

fn bing_page_session(html: &str) -> Option<(&str, &str, u64, String)> {
    static IMPRESSION_ID: LazyLock<Regex> =
        LazyLock::new(|| Regex::new(r#"\bIG\s*:\s*"([A-Za-z0-9]+)""#).unwrap());
    static TRANSLATOR_ID: LazyLock<Regex> =
        LazyLock::new(|| Regex::new(r#"data-iid="(translator\.[0-9]+)""#).unwrap());
    static PAGE_PARAMETERS: LazyLock<Regex> =
        LazyLock::new(|| Regex::new(r"params_AbusePreventionHelper\s*=\s*(\[[^\]]+\])").unwrap());

    let impression_id = IMPRESSION_ID.captures(html)?.get(1)?.as_str();
    let translator_id = TRANSLATOR_ID.captures(html)?.get(1)?.as_str();
    let parameters = PAGE_PARAMETERS.captures(html)?.get(1)?.as_str();
    let parameters: Value = serde_json::from_str(parameters).ok()?;
    let key = parameters[0].as_u64()?;
    let token = parameters[1].as_str()?;
    Some((impression_id, translator_id, key, token.to_string()))
}

async fn translate_with_bing(text: String, from: String, to: String) -> Result<String, String> {
    let client = online_translation_client()?;
    // The retired Edge token endpoint has been replaced by Bing's translator page session.
    let page = client
        .get(BING_TRANSLATOR_URL)
        .send()
        .await
        .and_then(reqwest::Response::error_for_status)
        .map_err(|error| translation_request_error("打开必应翻译页面", error))?;
    let origin = page.url().origin().ascii_serialization();
    let html = page
        .text()
        .await
        .map_err(|error| translation_request_error("读取必应翻译页面", error))?;

    let (impression_id, translator_id, key, token) =
        bing_page_session(&html).ok_or_else(|| "必应翻译页面未返回有效的会话参数".to_string())?;
    let iid = format!("{translator_id}.1");
    let key = key.to_string();

    let response = client
        .post(format!("{origin}/ttranslatev3"))
        .header(reqwest::header::ORIGIN, &origin)
        .header(reqwest::header::REFERER, format!("{origin}/translator"))
        .query(&[
            ("isVertical", "1"),
            ("IG", impression_id),
            ("IID", iid.as_str()),
        ])
        .form(&[
            ("fromLang", bing_language(&from)),
            (
                "to",
                if to == "auto" {
                    "en"
                } else {
                    bing_language(&to)
                },
            ),
            ("text", text.as_str()),
            ("key", key.as_str()),
            ("token", token.as_str()),
        ])
        .send()
        .await
        .and_then(reqwest::Response::error_for_status)
        .map_err(|error| translation_request_error("必应翻译请求", error))?;

    let result: BingResponse = response
        .json()
        .await
        .map_err(|error| translation_request_error("解析必应翻译结果", error))?;
    match result {
        BingResponse::Translations(results) => results
            .into_iter()
            .flat_map(|result| result.translations)
            .next()
            .map(|translation| translation.text.trim().to_string())
            .filter(|text| !text.is_empty())
            .ok_or_else(|| "必应翻译未返回译文".to_string()),
        BingResponse::Error { status_code } => Err(format!("必应翻译服务错误：{status_code}")),
    }
}

fn google_language(language: &str) -> &str {
    match language {
        "zh" => "zh-CN",
        "zh_tw" => "zh-TW",
        "pt_pt" => "pt-PT",
        "pt_br" => "pt-BR",
        _ => language,
    }
}

async fn translate_with_google(text: String, from: String, to: String) -> Result<String, String> {
    let client = online_translation_client()?;
    let target = google_language(&to);
    let arguments = json!([[text, google_language(&from), target, true], [null]]);
    let payload = json!([[[
        GOOGLE_TRANSLATE_RPC_ID,
        arguments.to_string(),
        null,
        "generic"
    ]]]);

    let body = client
        .post(format!(
            "{GOOGLE_TRANSLATE_ORIGIN}/_/TranslateWebserverUi/data/batchexecute"
        ))
        .header(reqwest::header::ORIGIN, GOOGLE_TRANSLATE_ORIGIN)
        .header(
            reqwest::header::REFERER,
            format!("{GOOGLE_TRANSLATE_ORIGIN}/"),
        )
        .query(&[("rpcids", GOOGLE_TRANSLATE_RPC_ID), ("rt", "c")])
        .form(&[("f.req", payload.to_string())])
        .send()
        .await
        .and_then(reqwest::Response::error_for_status)
        .map_err(|error| translation_request_error("谷歌翻译请求", error))?
        .text()
        .await
        .map_err(|error| translation_request_error("读取谷歌翻译结果", error))?;

    parse_google_translation(&body, target).ok_or_else(|| "谷歌翻译未返回有效的译文".to_string())
}

fn parse_google_translation(body: &str, target: &str) -> Option<String> {
    // rt=c returns one JSON frame per line, preceded by an XSSI guard and byte counts.
    let reply = body
        .lines()
        .filter_map(|line| serde_json::from_str::<Vec<Value>>(line).ok())
        .flatten()
        .find(|item| item[0] == "wrb.fr" && item[1] == GOOGLE_TRANSLATE_RPC_ID)?;
    let payload: Value = serde_json::from_str(reply[2].as_str()?).ok()?;
    let translation = &payload[1][0][0];

    let mut text = String::new();
    if let Some(parts) = translation[5].as_array() {
        let use_spaces = !matches!(target, "zh-CN" | "zh-TW" | "ja");
        for part in parts.iter().filter_map(|part| part[0].as_str()) {
            if use_spaces
                && !text.is_empty()
                && !text.ends_with(char::is_whitespace)
                && !part.is_empty()
                && !part.starts_with(char::is_whitespace)
            {
                text.push(' ');
            }
            text.push_str(part);
        }
    }
    if text.trim().is_empty() {
        text = translation[0].as_str()?.to_string();
    }
    let text = text.trim();
    (!text.is_empty()).then(|| text.to_string())
}
