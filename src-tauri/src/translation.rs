use log::info;
use reqwest::Client;
use serde::{Deserialize, Serialize};
use tauri::command;

#[derive(Debug, Serialize, Deserialize)]
struct BingTranslation {
    translations: Vec<BingTranslationText>,
}

#[derive(Debug, Serialize, Deserialize)]
struct BingTranslationText {
    text: String,
}

// 翻译文本命令
#[command]
pub async fn translate_text(
    text: String,
    from: String,
    to: String,
    engine: String,
) -> Result<String, String> {
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

// 批量翻译文本命令（保持输入输出一一对应）
#[command]
pub async fn translate_texts(
    texts: Vec<String>,
    from: String,
    to: String,
    engine: String,
) -> Result<Vec<String>, String> {
    info!(
        "批量翻译请求: 引擎={}, 源语言={}, 目标语言={}, 条数={}",
        engine,
        from,
        to,
        texts.len()
    );

    if texts.is_empty() {
        return Ok(vec![]);
    }

    match engine.as_str() {
        "bing" => translate_with_bing_texts(texts, from, to).await,
        "google" => {
            // Google免费接口不支持一次性提交多条文本，这里做顺序调用兜底
            let mut results = Vec::with_capacity(texts.len());
            for text in texts {
                results.push(translate_with_google(text, from.clone(), to.clone()).await?);
            }
            Ok(results)
        }
        _ => Err(format!("不支持的翻译引擎: {}", engine)),
    }
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

// 使用Bing翻译（批量）
async fn translate_with_bing_texts(
    texts: Vec<String>,
    from: String,
    to: String,
) -> Result<Vec<String>, String> {
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

    let json_body = serde_json::Value::Array(
        texts
            .into_iter()
            .map(|t| serde_json::json!({ "text": t }))
            .collect(),
    );

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

        let mut out = Vec::with_capacity(result.len());
        for item in result {
            if let Some(translation) = item.translations.first() {
                out.push(translation.text.trim().to_string());
            } else {
                out.push(String::new());
            }
        }

        Ok(out)
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
