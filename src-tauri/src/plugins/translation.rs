use log::info;
use reqwest::Client;
use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Emitter, Manager, WebviewWindow};

use crate::window::{WindowManager, WindowReadyCallback, WindowShowBehavior, WindowSpec};

#[derive(Debug, Serialize, Deserialize)]
struct BingTranslation {
    translations: Vec<BingTranslationText>,
}

#[derive(Debug, Serialize, Deserialize)]
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
    let preview: String = selected_text.chars().take(50).collect();
    log::info!(
        "[划词翻译] 最终获取的文本长度: {}, 内容预览: {}",
        selected_text.len(),
        if selected_text.len() > 50 {
            format!("{}...", preview)
        } else {
            selected_text.clone()
        }
    );

    if let Some(window) = app_handle.get_webview_window("translate") {
        if window.is_visible().unwrap_or(false) {
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
            let _ = window.show();
            let _ = window.set_focus();
            return;
        }
    }

    if !selected_text.trim().is_empty() {
        open_translate_window(&app_handle, Some(selected_text));
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
        if window.is_visible().unwrap_or(false) {
            let _ = window.emit("reset-state", ());
            let _ = window.hide();
            return;
        }

        let _ = window.show();
        let _ = window.set_focus();
        return;
    }

    let spec = translate_window_spec();
    let _ = WindowManager::get_or_create_with_behavior(&spec, WindowShowBehavior::AlwaysShow, None);
}

fn open_translate_window(app_handle: &AppHandle, text: Option<String>) {
    if let Some(window) = app_handle.get_webview_window("translate") {
        let _ = window.show();
        let _ = window.set_focus();

        if let Some(text) = text {
            let _ = window.emit("selection-text", serde_json::json!({ "text": text }));
        }
        return;
    }

    let spec = translate_window_spec();
    let on_ready: Option<WindowReadyCallback> = text.map(|txt| {
        Box::new(move |window: &WebviewWindow| {
            info!("翻译窗口准备完成，发送选中的文本: {}", txt);

            let window_clone = window.clone();
            let text_clone = txt.clone();
            tauri::async_runtime::spawn(async move {
                tokio::time::sleep(tokio::time::Duration::from_millis(300)).await;
                info!("[延迟发送] 翻译窗口延迟发送选中的文本: {}", text_clone);
                let emit_result =
                    window_clone.emit("selection-text", serde_json::json!({ "text": text_clone }));
                info!("发送 selection-text 事件结果: {:?}", emit_result);
            });

            let window_clone2 = window.clone();
            let text_clone2 = txt.clone();
            tauri::async_runtime::spawn(async move {
                tokio::time::sleep(tokio::time::Duration::from_millis(1500)).await;
                info!("翻译窗口超时保护：尝试发送选中的文本");
                let _ =
                    window_clone2.emit("selection-text", serde_json::json!({ "text": text_clone2 }));
            });
        }) as WindowReadyCallback
    });

    let _ =
        WindowManager::get_or_create_with_behavior(&spec, WindowShowBehavior::AlwaysShow, on_ready);
    info!("创建翻译窗口并立即显示");
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

// 使用Bing翻译
async fn translate_with_bing(text: String, from: String, to: String) -> Result<String, String> {
    let client = Client::new();
    let token_url = "https://edge.microsoft.com/translate/auth";

    // 获取token
    let token_response = client
        .get(token_url)
        .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.42")
        .send()
        .await
        .map_err(|e| format!("获取Bing令牌失败: {}", e))?;

    let token = token_response
        .text()
        .await
        .map_err(|e| format!("读取Bing令牌失败: {}", e))?;

    if token.is_empty() {
        return Err("获取Bing令牌为空".to_string());
    }

    // 转换语言代码
    let from_code = match from.as_str() {
        "auto" => "",
        "zh" => "zh-Hans",
        "zh_tw" => "zh-Hant",
        "en" => "en",
        "ja" => "ja",
        "ko" => "ko",
        "fr" => "fr",
        "de" => "de",
        "ru" => "ru",
        "es" => "es",
        "pt_pt" => "pt-pt",
        "pt_br" => "pt",
        "vi" => "vi",
        "id" => "id",
        "th" => "th",
        "ar" => "ar",
        _ => &from,
    };

    let to_code = match to.as_str() {
        "zh" => "zh-Hans",
        "zh_tw" => "zh-Hant",
        "en" => "en",
        "ja" => "ja",
        "ko" => "ko",
        "fr" => "fr",
        "de" => "de",
        "ru" => "ru",
        "es" => "es",
        "pt_pt" => "pt-pt",
        "pt_br" => "pt",
        "vi" => "vi",
        "id" => "id",
        "th" => "th",
        "ar" => "ar",
        _ => &to,
    };

    // 构造翻译请求
    let url = format!(
        "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from={}&to={}",
        from_code, to_code
    );

    let json_body = serde_json::json!([{"text": text}]);

    // 发送翻译请求
    let response = client
        .post(url)
        .header("Content-Type", "application/json")
        .header("Authorization", format!("Bearer {}", token))
        .json(&json_body)
        .send()
        .await
        .map_err(|e| format!("Bing翻译请求失败: {}", e))?;

    let status = response.status();

    if status.is_success() {
        let result: Vec<BingTranslation> = response
            .json()
            .await
            .map_err(|e| format!("解析Bing翻译结果失败: {}", e))?;

        if let Some(first_result) = result.first() {
            if let Some(translation) = first_result.translations.first() {
                return Ok(translation.text.trim().to_string());
            }
        }

        Err("Bing翻译结果解析错误".to_string())
    } else {
        let error_text = response
            .text()
            .await
            .unwrap_or_else(|_| "无法获取错误详情".to_string());

        Err(format!(
            "Bing翻译API错误，状态码: {}，详情: {}",
            status, error_text
        ))
    }
}

// 使用Google翻译
async fn translate_with_google(text: String, from: String, to: String) -> Result<String, String> {
    let client = Client::new();

    let from_code = match from.as_str() {
        "auto" => "auto",
        "zh" => "zh-CN",
        "zh_tw" => "zh-TW",
        "en" => "en",
        "ja" => "ja",
        "ko" => "ko",
        "fr" => "fr",
        "de" => "de",
        "ru" => "ru",
        "es" => "es",
        "pt_pt" => "pt-PT",
        "pt_br" => "pt-BR",
        "vi" => "vi",
        "id" => "id",
        "th" => "th",
        "ar" => "ar",
        _ => &from,
    };

    let to_code = match to.as_str() {
        "zh" => "zh-CN",
        "zh_tw" => "zh-TW",
        "en" => "en",
        "ja" => "ja",
        "ko" => "ko",
        "fr" => "fr",
        "de" => "de",
        "ru" => "ru",
        "es" => "es",
        "pt_pt" => "pt-PT",
        "pt_br" => "pt-BR",
        "vi" => "vi",
        "id" => "id",
        "th" => "th",
        "ar" => "ar",
        _ => &to,
    };

    let url = "https://translate.google.com/translate_a/single";

    // 构造请求参数
    let response = client
        .get(url)
        .query(&[
            ("client", "gtx"),
            ("sl", from_code),
            ("tl", to_code),
            ("hl", to_code),
            ("dt", "t"),
            ("dt", "at"),
            ("dt", "bd"),
            ("dt", "ex"),
            ("dt", "ld"),
            ("dt", "md"),
            ("dt", "qca"),
            ("dt", "rw"),
            ("dt", "rm"),
            ("dt", "ss"),
            ("ie", "UTF-8"),
            ("oe", "UTF-8"),
            ("otf", "1"),
            ("ssel", "0"),
            ("tsel", "0"),
            ("kc", "7"),
            ("q", &text),
        ])
        .header("Content-Type", "application/json")
        .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        .send()
        .await
        .map_err(|e| format!("Google翻译请求失败: {}", e))?;

    let status = response.status();

    if status.is_success() {
        let result: serde_json::Value = response
            .json()
            .await
            .map_err(|e| format!("解析Google翻译结果失败: {}", e))?;

        let mut translated_text = String::new();

        // 解析Google翻译结果
        if let Some(outer_array) = result.get(0).and_then(|v| v.as_array()) {
            for item in outer_array {
                if let Some(inner_array) = item.get(0) {
                    if let Some(text) = inner_array.as_str() {
                        translated_text.push_str(text);
                    }
                }
            }

            if !translated_text.is_empty() {
                return Ok(translated_text.trim().to_string());
            }
        }

        Err("Google翻译结果解析错误".to_string())
    } else {
        let error_text = response
            .text()
            .await
            .unwrap_or_else(|_| "无法获取错误详情".to_string());

        Err(format!(
            "Google翻译API错误，状态码: {}，详情: {}",
            status, error_text
        ))
    }
}
