use base64::{engine::general_purpose, Engine as _};
use log::info;
use serde::{Deserialize, Serialize};
use tauri::command;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OcrTextBlock {
    pub text: String,
    pub x: f64,
    pub y: f64,
    pub width: f64,
    pub height: f64,
    pub angle: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OcrResult {
    pub blocks: Vec<OcrTextBlock>,
    pub full_text: String,
    pub language: String,
}

#[cfg(target_os = "windows")]
mod windows_ocr {
    use super::*;
    use windows::core::Interface;
    use windows::Graphics::Imaging::BitmapDecoder;
    use windows::Media::Ocr::OcrEngine;
    use windows::Storage::Streams::{DataWriter, InMemoryRandomAccessStream, IRandomAccessStream};

    pub async fn recognize_image(image_data: &[u8]) -> Result<OcrResult, String> {
        // 创建内存流
        let stream = InMemoryRandomAccessStream::new()
            .map_err(|e| format!("创建内存流失败: {}", e))?;
        
        // 写入图片数据
        let writer = DataWriter::CreateDataWriter(&stream)
            .map_err(|e| format!("创建DataWriter失败: {}", e))?;
        
        writer.WriteBytes(image_data)
            .map_err(|e| format!("写入图片数据失败: {}", e))?;
        
        writer.StoreAsync()
            .map_err(|e| format!("存储数据失败: {}", e))?
            .get()
            .map_err(|e| format!("等待存储完成失败: {}", e))?;
        
        writer.FlushAsync()
            .map_err(|e| format!("刷新失败: {}", e))?
            .get()
            .map_err(|e| format!("等待刷新完成失败: {}", e))?;

        // 重置流位置到开头
        stream.Seek(0)
            .map_err(|e| format!("重置流位置失败: {}", e))?;

        // 解码图片
        let decoder = BitmapDecoder::CreateAsync(&stream.cast::<IRandomAccessStream>().unwrap())
            .map_err(|e| format!("创建解码器失败: {}", e))?
            .get()
            .map_err(|e| format!("等待解码器创建失败: {}", e))?;

        let bitmap = decoder.GetSoftwareBitmapAsync()
            .map_err(|e| format!("获取SoftwareBitmap失败: {}", e))?
            .get()
            .map_err(|e| format!("等待获取SoftwareBitmap失败: {}", e))?;

        // 使用系统默认OCR引擎
        let engine = OcrEngine::TryCreateFromUserProfileLanguages()
            .map_err(|e| format!("创建OCR引擎失败: {}", e))?;
        
        info!("开始OCR识别，图片大小: {}字节", image_data.len());

        // 执行OCR识别
        let result = engine.RecognizeAsync(&bitmap)
            .map_err(|e| format!("OCR识别失败: {}", e))?
            .get()
            .map_err(|e| format!("等待OCR识别完成失败: {}", e))?;

        // 解析识别结果
        let mut blocks = Vec::new();
        let lines = result.Lines()
            .map_err(|e| format!("获取行失败: {}", e))?;
        
        info!("OCR识别到 {} 行文本", lines.Size().unwrap_or(0));

        // 获取文本角度
        let text_angle = match result.TextAngle() {
            Ok(angle_ref) => angle_ref.Value().unwrap_or(0.0),
            Err(_) => 0.0,
        };

        for line in lines {
            let raw_line_text = line
                .Text()
                .map_err(|e| format!("获取行文字失败: {}", e))?
                .to_string();

            let words = line
                .Words()
                .map_err(|e| format!("获取单词失败: {}", e))?;
            let mut assembled_text = String::new();
            let mut prev_right: Option<f32> = None;
            let mut prev_char_width: Option<f32> = None;
            let mut prev_height: Option<f32> = None;
            let mut prev_text: Option<String> = None;

            let mut min_x = f64::MAX;
            let mut min_y = f64::MAX;
            let mut max_x = f64::MIN;
            let mut max_y = f64::MIN;
            let mut has_word = false;

            for word in words {
                has_word = true;
                let text = word
                    .Text()
                    .map_err(|e| format!("获取文字失败: {}", e))?
                    .to_string();
                let rect = word.BoundingRect()
                    .map_err(|e| format!("获取边界失败: {}", e))?;

                if let Some(prev_right) = prev_right {
                    let gap = rect.X - prev_right;
                    if gap > 0.0 {
                        let cur_chars = text.chars().count().max(1);
                        let cur_len = cur_chars as f32;

                        let prev_cw = prev_char_width.unwrap_or(0.0);
                        let cur_cw = rect.Width / cur_len;
                        let char_width = if prev_cw > 0.0 { prev_cw.min(cur_cw) } else { cur_cw };
                        let avg_h = (prev_height.unwrap_or(rect.Height) + rect.Height) / 2.0;
                        let mut threshold = char_width * 0.35;
                        let min_th = avg_h * 0.05;
                        let max_th = avg_h * 0.30;
                        if threshold < min_th {
                            threshold = min_th;
                        }
                        if threshold > max_th {
                            threshold = max_th;
                        }

                        let mut need_space = gap > threshold;
                        if need_space {
                            if let Some(prev_text) = prev_text.as_deref() {
                                let prev_alpha_cnt = prev_text
                                    .chars()
                                    .filter(|c| c.is_ascii_alphabetic())
                                    .count();
                                let cur_alpha_cnt = text
                                    .chars()
                                    .filter(|c| c.is_ascii_alphabetic())
                                    .count();

                                let prev_is_alpha_like = prev_alpha_cnt > 0
                                    && prev_text
                                        .chars()
                                        .all(|c| c.is_ascii_alphabetic() || c.is_ascii_punctuation());
                                let cur_is_alpha_like = cur_alpha_cnt > 0
                                    && text
                                        .chars()
                                        .all(|c| c.is_ascii_alphabetic() || c.is_ascii_punctuation());

                                if prev_is_alpha_like && cur_is_alpha_like
                                    && (prev_alpha_cnt == 1 || cur_alpha_cnt == 1) && gap <= max_th {
                                        need_space = false;
                                    }
                            }
                        }

                        if need_space && text.chars().all(|c| c.is_ascii_punctuation()) {
                            need_space = false;
                        }

                        if need_space && !assembled_text.is_empty() {
                            assembled_text.push(' ');
                        }
                    }
                }

                assembled_text.push_str(&text);
                prev_right = Some(rect.X + rect.Width);
                prev_char_width = Some(rect.Width / (text.chars().count().max(1) as f32));
                prev_height = Some(rect.Height);
                prev_text = Some(text);

                min_x = min_x.min(rect.X as f64);
                min_y = min_y.min(rect.Y as f64);
                max_x = max_x.max((rect.X + rect.Width) as f64);
                max_y = max_y.max((rect.Y + rect.Height) as f64);
            }

            let line_text = assembled_text.trim().to_string();

            if !raw_line_text.is_empty() && raw_line_text != line_text {
                info!("OCR行文本空格修正: raw='{}' -> fixed='{}'", raw_line_text, line_text);
            }

            if !line_text.is_empty() && has_word {
                let block = OcrTextBlock {
                    text: line_text.clone(),
                    x: min_x,
                    y: min_y,
                    width: max_x - min_x,
                    height: max_y - min_y,
                    angle: text_angle,
                };
                
                info!("OCR识别文本块 {}: '{}' 位置({:.1}, {:.1}) 大小({:.1}x{:.1})", 
                      blocks.len() + 1, line_text, min_x, min_y, max_x - min_x, max_y - min_y);
                
                blocks.push(block);
            }
        }

        // 获取完整文本
        let full_text = result.Text()
            .map_err(|e| format!("获取完整文本失败: {}", e))?
            .to_string();

        // 获取识别语言（简化处理）
        let language = "auto".to_string();

        Ok(OcrResult {
            blocks,
            full_text,
            language,
        })
    }
}

#[command]
pub async fn recognize_text(image_base64: String) -> Result<OcrResult, String> {
    info!("开始OCR识别，图片数据长度: {}", image_base64.len());
    
    // 解码Base64图片
    let image_data = general_purpose::STANDARD
        .decode(&image_base64)
        .map_err(|e| format!("Base64解码失败: {}", e))?;

    info!("图片解码完成，字节数: {}", image_data.len());

    #[cfg(target_os = "windows")]
    {
        windows_ocr::recognize_image(&image_data).await
    }

    #[cfg(not(target_os = "windows"))]
    {
        Err("OCR功能仅在Windows系统上可用".to_string())
    }
}

#[command]
pub async fn get_available_ocr_languages() -> Result<Vec<String>, String> {
    // 返回常见语言列表（Windows OCR会自动检测）
    Ok(vec![
        "zh-Hans".to_string(),
        "zh-Hant".to_string(),
        "en".to_string(),
        "ja".to_string(),
        "ko".to_string(),
    ])
}
