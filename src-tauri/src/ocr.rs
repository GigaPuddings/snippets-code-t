use base64::{engine::general_purpose, Engine as _};
use serde::Serialize;
use serde_json::Value;
use std::env;
use std::ffi::OsString;
use std::fs::{self, OpenOptions};
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::Command;
use std::sync::mpsc;
use std::thread;
use std::time::Instant;
use tauri::Manager;

#[cfg(target_os = "windows")]
use std::os::windows::process::CommandExt;

#[derive(Debug, Clone, Serialize)]
pub struct OcrTextBlock {
    text: String,
    x: f64,
    y: f64,
    width: f64,
    height: f64,
    #[serde(rename = "fontSize")]
    font_size: f64,
    #[serde(rename = "lineHeight")]
    line_height: f64,
    angle: f64,
    confidence: f64,
}

#[derive(Debug, Clone, Serialize)]
pub struct OcrRecognizeResult {
    pub full_text: String,
    pub text: String,
    pub confidence: f64,
    pub blocks: Vec<OcrTextBlock>,
    pub engine: String,
    pub language: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RapidOcrResourceStatus {
    pub plugin_id: String,
    pub resource_id: String,
    pub available: bool,
    pub source: Option<String>,
    pub path: Option<String>,
    pub searched_paths: Vec<String>,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum OcrLanguage {
    ChineseSimplified,
    ChineseTraditional,
    English,
    Japanese,
    Korean,
}

impl OcrLanguage {
    fn from_label(language: &str) -> Result<Self, String> {
        match language.trim().to_ascii_lowercase().as_str() {
            "zh" | "zh-cn" | "chinese" | "chinese_simplified" | "simplified" => {
                Ok(Self::ChineseSimplified)
            }
            "zh-tw" | "zh-hk" | "cht" | "traditional" | "chinese_traditional" => {
                Ok(Self::ChineseTraditional)
            }
            "en" | "eng" | "english" => Ok(Self::English),
            "ja" | "jp" | "jpn" | "japanese" => Ok(Self::Japanese),
            "ko" | "kr" | "kor" | "korean" => Ok(Self::Korean),
            other => Err(format!("不支持的 OCR 语言: {}", other)),
        }
    }

    fn label(self) -> &'static str {
        match self {
            Self::ChineseSimplified => "zh",
            Self::ChineseTraditional => "zh-tw",
            Self::English => "en",
            Self::Japanese => "ja",
            Self::Korean => "ko",
        }
    }

    fn rapidocr_rec_model(self) -> &'static str {
        match self {
            Self::ChineseSimplified => "rec_ch_PP-OCRv4_infer.onnx",
            Self::ChineseTraditional => "rec_chinese_cht_PP-OCRv3_infer.onnx",
            Self::English => "rec_en_PP-OCRv3_infer.onnx",
            Self::Japanese => "rec_japan_PP-OCRv3_infer.onnx",
            Self::Korean => "rec_korean_PP-OCRv3_infer.onnx",
        }
    }

    fn rapidocr_keys(self) -> &'static str {
        match self {
            Self::ChineseSimplified => "dict_chinese.txt",
            Self::ChineseTraditional => "dict_chinese_cht.txt",
            Self::English => "dict_en.txt",
            Self::Japanese => "dict_japan.txt",
            Self::Korean => "dict_korean.txt",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum OcrEngine {
    Auto,
    RapidOcr,
}

impl OcrEngine {
    fn from_option(engine: Option<String>) -> Result<Self, String> {
        match engine
            .as_deref()
            .unwrap_or("auto")
            .trim()
            .to_ascii_lowercase()
            .as_str()
        {
            "" | "auto" => Ok(Self::Auto),
            "rapidocr" | "rapid_ocr" | "rapid-ocr" => Ok(Self::RapidOcr),
            other => Err(format!("不支持的 OCR 引擎: {}", other)),
        }
    }
}

fn parse_language_hint(language: Option<String>) -> Result<Option<OcrLanguage>, String> {
    let Some(language) = language else {
        return Ok(None);
    };

    let normalized = language.trim().to_ascii_lowercase();
    if normalized.is_empty() || normalized == "auto" {
        return Ok(None);
    }

    OcrLanguage::from_label(&normalized).map(Some)
}

struct TempImageGuard {
    path: PathBuf,
    width: u32,
    height: u32,
}

impl TempImageGuard {
    fn new(bytes: &[u8]) -> Result<Self, String> {
        let file_name = format!("snippets_ocr_{}.png", uuid::Uuid::new_v4());
        let path = env::temp_dir().join(file_name);
        let image =
            image::load_from_memory(bytes).map_err(|e| format!("OCR 图片解析失败: {}", e))?;
        let width = image.width();
        let height = image.height();

        image
            .save_with_format(&path, image::ImageFormat::Png)
            .map_err(|e| format!("OCR 临时 PNG 写入失败: {}", e))?;
        Ok(Self {
            path,
            width,
            height,
        })
    }

    fn path(&self) -> &Path {
        &self.path
    }
}

struct TempGeneratedImageGuard {
    path: PathBuf,
}

impl TempGeneratedImageGuard {
    fn path(&self) -> &Path {
        &self.path
    }
}

impl Drop for TempGeneratedImageGuard {
    fn drop(&mut self) {
        if let Err(e) = fs::remove_file(&self.path) {
            log::debug!("OCR 生成临时图片清理失败 {}: {}", self.path.display(), e);
        }
    }
}

pub fn append_ocr_diagnostic_log(
    app_handle: tauri::AppHandle,
    message: String,
    data: Option<String>,
) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(&app_handle, "screenshot")?;
    let log_path = ocr_diagnostic_log_path(&app_handle);
    write_ocr_diagnostic_log(&log_path, "frontend", &message, data.as_deref())
}

impl Drop for TempImageGuard {
    fn drop(&mut self) {
        if let Err(e) = fs::remove_file(&self.path) {
            log::debug!("OCR 临时图片清理失败 {}: {}", self.path.display(), e);
        }
    }
}

pub async fn recognize_text_from_image(
    app_handle: tauri::AppHandle,
    image_data: String,
    engine: Option<String>,
    language: Option<String>,
) -> Result<OcrRecognizeResult, String> {
    crate::app_config::require_plugin_enabled(&app_handle, "screenshot")?;
    let command_started_at = Instant::now();
    let log_path = ocr_diagnostic_log_path(&app_handle);
    append_ocr_log(
        &log_path,
        "backend",
        "recognize_text_from_image start",
        Some(&format!(
            "requested_engine={:?}, requested_language={:?}, image_data_length={}",
            engine,
            language,
            image_data.len()
        )),
    );

    let engine = match OcrEngine::from_option(engine) {
        Ok(engine) => engine,
        Err(error) => {
            append_ocr_log(&log_path, "backend", "invalid OCR engine", Some(&error));
            return Err(error);
        }
    };

    let language_hint = match parse_language_hint(language) {
        Ok(language) => language,
        Err(error) => {
            append_ocr_log(&log_path, "backend", "invalid OCR language", Some(&error));
            return Err(error);
        }
    };

    let image_bytes = match decode_image_data(&image_data) {
        Ok(bytes) => bytes,
        Err(error) => {
            append_ocr_log(&log_path, "backend", "decode image failed", Some(&error));
            return Err(error);
        }
    };
    append_ocr_log(
        &log_path,
        "backend",
        "image data decoded",
        Some(&format!("decoded_bytes={}", image_bytes.len())),
    );

    let temp_image = match TempImageGuard::new(&image_bytes) {
        Ok(image) => image,
        Err(error) => {
            append_ocr_log(&log_path, "backend", "create temp png failed", Some(&error));
            return Err(error);
        }
    };
    append_ocr_log(
        &log_path,
        "backend",
        "temp png created",
        Some(&format!(
            "path={}, width={}, height={}",
            temp_image.path().display(),
            temp_image.width,
            temp_image.height
        )),
    );

    let sidecar = find_rapidocr_sidecar(&app_handle, &log_path).ok_or_else(|| {
        let error = "RAPIDOCR_UNAVAILABLE: RapidOCR sidecar 未配置".to_string();
        append_ocr_log(
            &log_path,
            "backend",
            "RapidOCR sidecar unavailable",
            Some(&error),
        );
        error
    })?;

    let temp_path = temp_image.path().to_path_buf();
    let log_path_for_task = log_path.clone();
    let result = tokio::task::spawn_blocking(move || {
        run_rapidocr_sidecar(
            &sidecar,
            &temp_path,
            language_hint,
            engine,
            &log_path_for_task,
        )
    })
    .await
    .map_err(|e| format!("OCR 后端任务失败: {}", e))?;

    append_ocr_log(
        &log_path,
        "backend",
        "recognize_text_from_image finish",
        Some(&format!(
            "duration_ms={}, success={}",
            command_started_at.elapsed().as_millis(),
            result.is_ok()
        )),
    );

    result
}

fn decode_image_data(image_data: &str) -> Result<Vec<u8>, String> {
    let raw = image_data
        .split_once(',')
        .map(|(_, data)| data)
        .unwrap_or(image_data)
        .trim();

    if raw.is_empty() {
        return Err("OCR 图片数据为空".to_string());
    }

    general_purpose::STANDARD
        .decode(raw)
        .or_else(|_| general_purpose::URL_SAFE.decode(raw))
        .map_err(|e| format!("OCR 图片 base64 解码失败: {}", e))
}

pub fn get_rapidocr_resource_status(
    app_handle: tauri::AppHandle,
) -> Result<RapidOcrResourceStatus, String> {
    let exe_names = rapidocr_exe_names();
    let roots = rapidocr_search_roots(&app_handle);
    let searched_paths = roots
        .iter()
        .flat_map(|(root, _)| {
            exe_names
                .iter()
                .map(move |exe_name| root.join(exe_name).display().to_string())
        })
        .collect::<Vec<_>>();

    let found = find_rapidocr_candidate(&app_handle, None);
    Ok(RapidOcrResourceStatus {
        plugin_id: "screenshot".to_string(),
        resource_id: "rapidocr".to_string(),
        available: found.is_some(),
        source: found.as_ref().map(|candidate| candidate.source.clone()),
        path: found
            .as_ref()
            .map(|candidate| candidate.path.display().to_string()),
        searched_paths,
    })
}

fn find_rapidocr_sidecar(app_handle: &tauri::AppHandle, log_path: &Path) -> Option<PathBuf> {
    find_rapidocr_candidate(app_handle, Some(log_path)).map(|candidate| candidate.path)
}

#[derive(Debug, Clone)]
struct RapidOcrCandidate {
    path: PathBuf,
    source: String,
}

fn find_rapidocr_candidate(
    app_handle: &tauri::AppHandle,
    log_path: Option<&Path>,
) -> Option<RapidOcrCandidate> {
    for env_key in ["SNIPPETS_RAPIDOCR_PATH", "RAPIDOCR_PATH"] {
        if let Ok(path) = env::var(env_key) {
            let candidate = PathBuf::from(path);
            if let Some(log_path) = log_path {
                append_ocr_log(
                    log_path,
                    "backend",
                    "check sidecar env path",
                    Some(&format!("{}={}", env_key, candidate.display())),
                );
            }
            if candidate.is_file() {
                if let Some(log_path) = log_path {
                    append_ocr_log(
                        log_path,
                        "backend",
                        "sidecar found from env",
                        Some(&format!("path={}", candidate.display())),
                    );
                }
                return Some(RapidOcrCandidate {
                    path: candidate,
                    source: format!("env:{}", env_key),
                });
            }
        }
    }

    let exe_names = rapidocr_exe_names();
    let roots = rapidocr_search_roots(app_handle);

    for (root, source) in roots {
        for exe_name in exe_names {
            let candidate = root.join(exe_name);
            if let Some(log_path) = log_path {
                append_ocr_log(
                    log_path,
                    "backend",
                    "check sidecar path",
                    Some(&format!("source={}, path={}", source, candidate.display())),
                );
            }
            if candidate.is_file() {
                if let Some(log_path) = log_path {
                    append_ocr_log(
                        log_path,
                        "backend",
                        "sidecar found",
                        Some(&format!("source={}, path={}", source, candidate.display())),
                    );
                }
                return Some(RapidOcrCandidate {
                    path: candidate,
                    source,
                });
            }
        }
    }

    None
}

fn rapidocr_exe_names() -> &'static [&'static str] {
    if cfg!(target_os = "windows") {
        &[
            "RapidOCR-json.exe",
            "rapidocr.exe",
            "rapidocr-json.exe",
            "rapidocr_onnxruntime.exe",
            "rapidocr_openvino.exe",
        ]
    } else {
        &[
            "rapidocr",
            "rapidocr-json",
            "rapidocr_onnxruntime",
            "rapidocr_openvino",
        ]
    }
}

fn rapidocr_search_roots(app_handle: &tauri::AppHandle) -> Vec<(PathBuf, String)> {
    let mut roots = Vec::new();
    if let Ok(plugins_dir) = crate::app_config::resolve_plugin_packages_dir(app_handle) {
        for plugin_id in ["screenshot", "screenshot-rapidocr"] {
            let plugin_dir = plugins_dir.join(plugin_id);
            roots.push((
                plugin_dir.join("resources").join("rapidocr"),
                format!("plugin:{}:resources/rapidocr", plugin_id),
            ));
            roots.push((
                plugin_dir.join("rapidocr"),
                format!("plugin:{}:rapidocr", plugin_id),
            ));
            roots.push((
                plugin_dir.join("resources").join("rapidocr").join("bin"),
                format!("plugin:{}:resources/rapidocr/bin", plugin_id),
            ));
        }
    }
    if let Ok(resource_dir) = app_handle.path().resource_dir() {
        roots.push((resource_dir.clone(), "bundled:root".to_string()));
        roots.push((
            resource_dir.join("resources").join("rapidocr"),
            "bundled:resources/rapidocr".to_string(),
        ));
        roots.push((
            resource_dir.join("rapidocr"),
            "bundled:rapidocr".to_string(),
        ));
        roots.push((
            resource_dir.join("rapidocr").join("bin"),
            "bundled:rapidocr/bin".to_string(),
        ));
        roots.push((
            resource_dir.join("sidecars"),
            "bundled:sidecars".to_string(),
        ));
        roots.push((resource_dir.join("bin"), "bundled:bin".to_string()));
    }
    if let Ok(exe_path) = env::current_exe() {
        if let Some(exe_dir) = exe_path.parent() {
            roots.push((exe_dir.to_path_buf(), "exe:root".to_string()));
            roots.push((
                exe_dir.join("resources").join("rapidocr"),
                "exe:resources/rapidocr".to_string(),
            ));
            roots.push((exe_dir.join("rapidocr"), "exe:rapidocr".to_string()));
            roots.push((
                exe_dir.join("rapidocr").join("bin"),
                "exe:rapidocr/bin".to_string(),
            ));
            roots.push((exe_dir.join("sidecars"), "exe:sidecars".to_string()));
            roots.push((exe_dir.join("bin"), "exe:bin".to_string()));
        }
    }
    if let Ok(cwd) = env::current_dir() {
        roots.push((cwd.clone(), "dev:cwd".to_string()));
        roots.push((
            cwd.join("src-tauri").join("resources").join("rapidocr"),
            "dev:src-tauri/resources/rapidocr".to_string(),
        ));
        roots.push((
            cwd.join("src-tauri")
                .join("resources")
                .join("rapidocr")
                .join("bin"),
            "dev:src-tauri/resources/rapidocr/bin".to_string(),
        ));
        roots.push((
            cwd.join("src-tauri").join("sidecars"),
            "dev:src-tauri/sidecars".to_string(),
        ));
        roots.push((
            cwd.join("src-tauri").join("bin"),
            "dev:src-tauri/bin".to_string(),
        ));
        roots.push((
            cwd.join("resources").join("rapidocr"),
            "dev:resources/rapidocr".to_string(),
        ));
        roots.push((
            cwd.join("resources").join("rapidocr").join("bin"),
            "dev:resources/rapidocr/bin".to_string(),
        ));
        roots.push((cwd.join("rapidocr"), "dev:rapidocr".to_string()));
        roots.push((cwd.join("sidecars"), "dev:sidecars".to_string()));
        roots.push((cwd.join("bin"), "dev:bin".to_string()));
    }

    roots
}

fn run_rapidocr_sidecar(
    sidecar: &Path,
    image_path: &Path,
    language_hint: Option<OcrLanguage>,
    engine: OcrEngine,
    log_path: &Path,
) -> Result<OcrRecognizeResult, String> {
    let sidecar_started_at = Instant::now();
    let primary_languages = build_primary_language_candidates(language_hint, engine);
    let fallback_languages =
        build_fallback_language_candidates(language_hint, engine, &primary_languages);

    append_ocr_log(
        log_path,
        "backend",
        "RapidOCR sidecar start",
        Some(&format!(
            "sidecar={}, image={}, requested_language={:?}, primary_languages={:?}, fallback_languages={:?}",
            sidecar.display(),
            image_path.display(),
            language_hint.as_ref().map(|item| item.label()),
            primary_languages
                .iter()
                .map(|item| item.label())
                .collect::<Vec<_>>(),
            fallback_languages
                .iter()
                .map(|item| item.label())
                .collect::<Vec<_>>()
        )),
    );

    let (mut result, mut best_score) = run_rapidocr_candidate_set(
        sidecar,
        image_path,
        language_hint,
        &primary_languages,
        log_path,
        "original-primary",
    )?;

    if should_retry_transformed_image(&result, best_score) {
        let original_dimensions = image::image_dimensions(image_path)
            .map(|(width, height)| (width as f64, height as f64))
            .ok();

        append_ocr_log(
            log_path,
            "backend",
            "RapidOCR original orientation low quality, retry transformed images",
            Some(&format!(
                "language={}, score={:.2}, confidence={:.2}, text_preview={}",
                result.language,
                best_score,
                result.confidence,
                preview_for_log(&result.full_text, 300)
            )),
        );

        for transform in [ImageRetryTransform::Rotate180] {
            let transform_label = transform.label();
            match create_transformed_temp_image(image_path, transform, log_path) {
                Ok(transformed_image) => {
                    match run_rapidocr_candidate_set(
                        sidecar,
                        transformed_image.path(),
                        language_hint,
                        &primary_languages,
                        log_path,
                        transform_label,
                    ) {
                        Ok((mut retry_result, retry_score)) => {
                            if let Some((width, height)) = original_dimensions {
                                remap_transformed_result_to_original(
                                    &mut retry_result,
                                    transform,
                                    width,
                                    height,
                                );
                                append_ocr_log(
                                    log_path,
                                    "backend",
                                    "RapidOCR transformed result remapped to original coordinates",
                                    Some(&format!(
                                        "transform={}, width={:.0}, height={:.0}, text_preview={}",
                                        transform_label,
                                        width,
                                        height,
                                        preview_for_log(&retry_result.full_text, 300)
                                    )),
                                );
                            }

                            if retry_score > best_score + 25.0 {
                                append_ocr_log(
                                    log_path,
                                    "backend",
                                    "RapidOCR transformed result selected",
                                    Some(&format!(
                                        "transform={}, language={}, previous_score={:.2}, retry_score={:.2}, confidence={:.2}",
                                        transform_label,
                                        retry_result.language,
                                        best_score,
                                        retry_score,
                                        retry_result.confidence
                                    )),
                                );
                                result = retry_result;
                                best_score = retry_score;
                                if !should_retry_transformed_image(&result, best_score) {
                                    append_ocr_log(
                                        log_path,
                                        "backend",
                                        "RapidOCR transformed retry accepted, skip remaining transforms",
                                        Some(&format!(
                                            "transform={}, language={}, score={:.2}, confidence={:.2}",
                                            transform_label,
                                            result.language,
                                            best_score,
                                            result.confidence
                                        )),
                                    );
                                    break;
                                }
                            } else {
                                append_ocr_log(
                                    log_path,
                                    "backend",
                                    "RapidOCR current result kept after transformed retry",
                                    Some(&format!(
                                        "transform={}, current_score={:.2}, retry_score={:.2}",
                                        transform_label, best_score, retry_score
                                    )),
                                );
                            }
                        }
                        Err(error) => {
                            append_ocr_log(
                                log_path,
                                "backend",
                                "RapidOCR transformed retry failed",
                                Some(&format!("transform={}, error={}", transform_label, error)),
                            );
                        }
                    }
                }
                Err(error) => {
                    append_ocr_log(
                        log_path,
                        "backend",
                        "RapidOCR transformed temp image failed",
                        Some(&format!("transform={}, error={}", transform_label, error)),
                    );
                }
            }
        }
    }

    if should_try_fallback_language_candidates(&result, best_score)
        && !fallback_languages.is_empty()
    {
        append_ocr_log(
            log_path,
            "backend",
            "RapidOCR primary languages still low quality, retry fallback languages",
            Some(&format!(
                "current_language={}, current_score={:.2}, confidence={:.2}, fallback_languages={:?}",
                result.language,
                best_score,
                result.confidence,
                fallback_languages
                    .iter()
                    .map(|item| item.label())
                    .collect::<Vec<_>>()
            )),
        );

        match run_rapidocr_candidate_set(
            sidecar,
            image_path,
            language_hint,
            &fallback_languages,
            log_path,
            "original-fallback",
        ) {
            Ok((fallback_result, fallback_score)) => {
                if fallback_score > best_score + 25.0 {
                    append_ocr_log(
                        log_path,
                        "backend",
                        "RapidOCR fallback language result selected",
                        Some(&format!(
                            "language={}, previous_score={:.2}, fallback_score={:.2}, confidence={:.2}",
                            fallback_result.language,
                            best_score,
                            fallback_score,
                            fallback_result.confidence
                        )),
                    );
                    result = fallback_result;
                    best_score = fallback_score;
                } else {
                    append_ocr_log(
                        log_path,
                        "backend",
                        "RapidOCR primary result kept after fallback languages",
                        Some(&format!(
                            "current_score={:.2}, fallback_score={:.2}",
                            best_score, fallback_score
                        )),
                    );
                }
            }
            Err(error) => {
                append_ocr_log(
                    log_path,
                    "backend",
                    "RapidOCR fallback language retry failed",
                    Some(&error),
                );
            }
        }
    }

    if is_final_ocr_result_low_quality(&result, best_score) {
        let language = OcrLanguage::from_label(&result.language).unwrap_or(OcrLanguage::English);
        let breakdown = score_ocr_result_breakdown(&result, language);
        let error =
            "OCR_RECOGNITION_LOW_QUALITY: OCR 识别质量过低，请重新选择更清晰或方向正确的文本区域"
                .to_string();
        append_ocr_log(
            log_path,
            "backend",
            "RapidOCR final result rejected as low quality",
            Some(&format!(
                "language={}, score={:.2}, confidence={:.2}, garbage_penalty={:.2}, script_mismatch_penalty={:.2}, latin_gibberish_penalty={:.2}, text_preview={}",
                result.language,
                best_score,
                result.confidence,
                breakdown.garbage_penalty,
                breakdown.script_mismatch_penalty,
                breakdown.latin_gibberish_penalty,
                preview_for_log(&result.full_text, 300)
            )),
        );
        return Err(error);
    }

    append_ocr_log(
        log_path,
        "backend",
        "RapidOCR best result selected",
        Some(&format!(
            "language={}, score={:.2}, confidence={:.2}, chars={}, duration_ms={}",
            result.language,
            best_score,
            result.confidence,
            result.full_text.chars().count(),
            sidecar_started_at.elapsed().as_millis()
        )),
    );
    result.engine = "rapidocr".to_string();
    Ok(result)
}

fn run_rapidocr_candidate_set(
    sidecar: &Path,
    image_path: &Path,
    language_hint: Option<OcrLanguage>,
    candidate_languages: &[OcrLanguage],
    log_path: &Path,
    orientation: &str,
) -> Result<(OcrRecognizeResult, f64), String> {
    let candidate_set_started_at = Instant::now();
    let mut candidate_errors = Vec::new();
    let mut successful_candidates: Vec<(OcrLanguage, OcrRecognizeResult, f64)> = Vec::new();
    let mut best_result: Option<OcrRecognizeResult> = None;
    let mut best_score = f64::MIN;

    append_ocr_log(
        log_path,
        "backend",
        "RapidOCR candidate set start",
        Some(&format!(
            "orientation={}, image={}, requested_language={:?}, candidate_languages={:?}",
            orientation,
            image_path.display(),
            language_hint.as_ref().map(|item| item.label()),
            candidate_languages
                .iter()
                .map(|item| item.label())
                .collect::<Vec<_>>()
        )),
    );

    if language_hint.is_some() {
        if let Some(language) = candidate_languages.first().copied() {
            match run_rapidocr_language_candidate(sidecar, image_path, language, log_path)? {
                LanguageCandidateOutcome::Success { result, score } => {
                    best_score = score;
                    successful_candidates.push((language, result.clone(), score));
                    best_result = Some(result);
                }
                LanguageCandidateOutcome::Failed { language, errors } => {
                    candidate_errors.push(format!(
                        "{} => {}",
                        language.label(),
                        errors.join(" | ")
                    ));
                }
            }
        }
    } else {
        let (sender, receiver) = mpsc::channel();
        let mut handles = Vec::new();
        let worker_count = candidate_languages.len();

        for language in candidate_languages.iter().copied() {
            let sender = sender.clone();
            let sidecar = sidecar.to_path_buf();
            let image_path = image_path.to_path_buf();
            let log_path = log_path.to_path_buf();

            handles.push(thread::spawn(move || {
                let outcome =
                    run_rapidocr_language_candidate(&sidecar, &image_path, language, &log_path);
                let _ = sender.send(outcome);
            }));
        }
        drop(sender);

        for outcome in receiver.iter().take(worker_count) {
            match outcome? {
                LanguageCandidateOutcome::Success { result, score } => {
                    successful_candidates.push((
                        OcrLanguage::from_label(&result.language)?,
                        result.clone(),
                        score,
                    ));
                    if score > best_score {
                        best_score = score;
                        best_result = Some(result);
                    }
                }
                LanguageCandidateOutcome::Failed { language, errors } => {
                    candidate_errors.push(format!(
                        "{} => {}",
                        language.label(),
                        errors.join(" | ")
                    ));
                }
            }
        }

        for handle in handles {
            let _ = handle.join();
        }
    }

    if let Some(mut result) = best_result {
        if language_hint.is_none() {
            merge_mixed_script_blocks(&mut result, &successful_candidates, log_path);
        }

        append_ocr_log(
            log_path,
            "backend",
            "RapidOCR candidate set finish",
            Some(&format!(
                "orientation={}, duration_ms={}, best_language={}, best_score={:.2}, confidence={:.2}, blocks={}, chars={}",
                orientation,
                candidate_set_started_at.elapsed().as_millis(),
                result.language,
                best_score,
                result.confidence,
                result.blocks.len(),
                result.full_text.chars().count()
            )),
        );
        return Ok((result, best_score));
    }

    let error = format!(
        "RapidOCR sidecar 调用失败: {}",
        candidate_errors
            .last()
            .cloned()
            .unwrap_or_else(|| "没有可用调用协议".to_string())
    );
    append_ocr_log(log_path, "backend", "RapidOCR sidecar failed", Some(&error));
    Err(error)
}

fn merge_mixed_script_blocks(
    result: &mut OcrRecognizeResult,
    candidates: &[(OcrLanguage, OcrRecognizeResult, f64)],
    log_path: &Path,
) {
    let Ok(base_language) = OcrLanguage::from_label(&result.language) else {
        return;
    };
    if base_language != OcrLanguage::English {
        return;
    }

    let mut replacements = Vec::new();
    for block in &mut result.blocks {
        let Some((candidate_language, replacement_text, overlap)) =
            find_mixed_script_replacement(block, candidates, base_language)
        else {
            continue;
        };

        let previous_text = block.text.clone();
        block.text = replacement_text;
        replacements.push(format!(
            "{} overlap={:.2}: {} => {}",
            candidate_language.label(),
            overlap,
            preview_for_log(&previous_text, 80),
            preview_for_log(&block.text, 80)
        ));
    }

    if replacements.is_empty() {
        return;
    }

    normalize_result_reading_order(result);
    if !result.language.contains("+mixed") {
        result.language = format!("{}+mixed", result.language);
    }
    append_ocr_log(
        log_path,
        "backend",
        "RapidOCR mixed-script block replacements applied",
        Some(&format!(
            "count={}, replacements={}",
            replacements.len(),
            replacements.join(" | ")
        )),
    );
}

fn find_mixed_script_replacement<'a>(
    block: &OcrTextBlock,
    candidates: &'a [(OcrLanguage, OcrRecognizeResult, f64)],
    base_language: OcrLanguage,
) -> Option<(OcrLanguage, String, f64)> {
    let base_stats = script_stats(&block.text);
    if base_stats.cjk_count > 0 {
        return None;
    }

    let mut best: Option<(OcrLanguage, String, f64)> = None;
    for (language, result, _) in candidates {
        if *language == base_language {
            continue;
        }
        if !matches!(
            language,
            OcrLanguage::ChineseSimplified
                | OcrLanguage::ChineseTraditional
                | OcrLanguage::Japanese
        ) {
            continue;
        }

        for candidate_block in &result.blocks {
            let candidate_stats = script_stats(&candidate_block.text);
            if candidate_stats.cjk_count < 2 {
                continue;
            }

            let overlap = block_overlap_ratio(block, candidate_block);
            if overlap < 0.58 {
                continue;
            }
            let replacement_text = if candidate_block.text.trim().chars().count() + 8
                < block.text.trim().chars().count()
            {
                merge_inline_mixed_script_text(block, candidate_block)
            } else {
                candidate_block.text.trim().to_string()
            };

            if best
                .as_ref()
                .map(|(_, _, best_overlap)| overlap > *best_overlap)
                .unwrap_or(true)
            {
                best = Some((*language, replacement_text, overlap));
            }
        }
    }

    best
}

fn merge_inline_mixed_script_text(base: &OcrTextBlock, candidate: &OcrTextBlock) -> String {
    let base_text = base.text.trim();
    let candidate_text = candidate.text.trim();
    if base_text.is_empty() {
        return candidate_text.to_string();
    }
    if candidate_text.is_empty() {
        return base_text.to_string();
    }

    let relative_x = ((candidate.x + candidate.width * 0.5) - base.x) / base.width.max(1.0);
    if relative_x > 0.55 {
        return merge_inline_candidate_into_suffix(base_text, candidate_text, true);
    }
    if relative_x < 0.25 {
        return merge_inline_candidate_into_prefix(base_text, candidate_text);
    }

    merge_inline_candidate_by_position(base_text, candidate_text, relative_x)
}

fn merge_inline_candidate_into_suffix(
    base_text: &str,
    candidate_text: &str,
    prefer_punctuation_boundary: bool,
) -> String {
    if prefer_punctuation_boundary {
        if let Some(index) = find_last_inline_boundary(base_text) {
            let prefix = base_text[..index].trim_end();
            return format!(
                "{} {}{}",
                prefix,
                candidate_text,
                trailing_sentence_punctuation(base_text, candidate_text)
            )
            .trim()
            .to_string();
        }
    }

    let split_index = previous_char_boundary(
        base_text,
        base_text.len().saturating_sub(candidate_text.len()),
    );
    format!(
        "{} {}{}",
        base_text[..split_index].trim_end(),
        candidate_text,
        trailing_sentence_punctuation(base_text, candidate_text)
    )
    .trim()
    .to_string()
}

fn merge_inline_candidate_into_prefix(base_text: &str, candidate_text: &str) -> String {
    let suffix_start = next_word_boundary(base_text, candidate_text.len().min(base_text.len()));
    format!(
        "{} {}",
        candidate_text,
        base_text[suffix_start..].trim_start()
    )
    .trim()
    .to_string()
}

fn merge_inline_candidate_by_position(
    base_text: &str,
    candidate_text: &str,
    relative_x: f64,
) -> String {
    let char_count = base_text.chars().count().max(1);
    let approximate_char = ((char_count as f64) * relative_x.clamp(0.0, 1.0)).round() as usize;
    let byte_index = byte_index_for_char(base_text, approximate_char);
    let split_index = previous_word_boundary(base_text, byte_index);
    merge_inline_candidate_into_suffix(&base_text[..split_index], candidate_text, false)
}

fn find_last_inline_boundary(text: &str) -> Option<usize> {
    [",", "，", ":", "：", ";", "；"]
        .iter()
        .filter_map(|marker| text.rfind(marker).map(|index| index + marker.len()))
        .max()
}

fn trailing_sentence_punctuation(base_text: &str, candidate_text: &str) -> &'static str {
    let candidate_last = candidate_text.chars().rev().find(|ch| !ch.is_whitespace());
    if matches!(candidate_last, Some('.' | '。' | '!' | '！' | '?' | '？')) {
        return "";
    }

    match base_text.chars().rev().find(|ch| !ch.is_whitespace()) {
        Some('.') => ".",
        Some('。') => "。",
        Some('!') => "!",
        Some('！') => "！",
        Some('?') => "?",
        Some('？') => "？",
        _ => "",
    }
}

fn previous_word_boundary(text: &str, index: usize) -> usize {
    let mut boundary = previous_char_boundary(text, index);
    while boundary > 0 {
        let previous = text[..boundary].chars().last();
        if matches!(previous, Some(ch) if ch.is_whitespace() || ch.is_ascii_punctuation()) {
            break;
        }
        boundary = previous_char_boundary(text, boundary.saturating_sub(1));
    }
    boundary
}

fn next_word_boundary(text: &str, index: usize) -> usize {
    let mut boundary = previous_char_boundary(text, index);
    while boundary < text.len() {
        let current = text[boundary..].chars().next();
        if matches!(current, Some(ch) if ch.is_whitespace() || ch.is_ascii_punctuation()) {
            break;
        }
        boundary += current.map(char::len_utf8).unwrap_or(1);
    }
    boundary
}

fn previous_char_boundary(text: &str, index: usize) -> usize {
    let mut boundary = index.min(text.len());
    while boundary > 0 && !text.is_char_boundary(boundary) {
        boundary -= 1;
    }
    boundary
}

fn byte_index_for_char(text: &str, char_index: usize) -> usize {
    text.char_indices()
        .nth(char_index)
        .map(|(index, _)| index)
        .unwrap_or(text.len())
}

fn block_overlap_ratio(left: &OcrTextBlock, right: &OcrTextBlock) -> f64 {
    let left_area = (left.width.max(0.0) * left.height.max(0.0)).max(1.0);
    let right_area = (right.width.max(0.0) * right.height.max(0.0)).max(1.0);
    let intersection_left = left.x.max(right.x);
    let intersection_top = left.y.max(right.y);
    let intersection_right = (left.x + left.width).min(right.x + right.width);
    let intersection_bottom = (left.y + left.height).min(right.y + right.height);
    let intersection_width = (intersection_right - intersection_left).max(0.0);
    let intersection_height = (intersection_bottom - intersection_top).max(0.0);
    let intersection_area = intersection_width * intersection_height;
    intersection_area / left_area.min(right_area)
}

#[derive(Debug, Clone, Copy)]
enum ImageRetryTransform {
    Rotate180,
}

impl ImageRetryTransform {
    fn label(self) -> &'static str {
        match self {
            Self::Rotate180 => "rotate180",
        }
    }
}

fn create_transformed_temp_image(
    image_path: &Path,
    transform: ImageRetryTransform,
    log_path: &Path,
) -> Result<TempGeneratedImageGuard, String> {
    let image = image::open(image_path).map_err(|e| format!("OCR 图像重试图片读取失败: {}", e))?;
    let transformed = match transform {
        ImageRetryTransform::Rotate180 => image.rotate180(),
    };
    let path = env::temp_dir().join(format!(
        "snippets_ocr_{}_{}.png",
        transform.label(),
        uuid::Uuid::new_v4()
    ));

    transformed
        .save_with_format(&path, image::ImageFormat::Png)
        .map_err(|e| format!("OCR 图像重试图片写入失败: {}", e))?;

    append_ocr_log(
        log_path,
        "backend",
        "RapidOCR transformed temp png created",
        Some(&format!(
            "transform={}, path={}, width={}, height={}",
            transform.label(),
            path.display(),
            transformed.width(),
            transformed.height()
        )),
    );

    Ok(TempGeneratedImageGuard { path })
}

fn remap_transformed_result_to_original(
    result: &mut OcrRecognizeResult,
    transform: ImageRetryTransform,
    original_width: f64,
    original_height: f64,
) {
    for block in &mut result.blocks {
        match transform {
            ImageRetryTransform::Rotate180 => {
                block.x = (original_width - block.x - block.width).max(0.0);
                block.y = (original_height - block.y - block.height).max(0.0);
            }
        }
    }

    normalize_result_reading_order(result);
}

fn normalize_result_reading_order(result: &mut OcrRecognizeResult) {
    if result.blocks.is_empty() {
        return;
    }

    let average_line_height = result
        .blocks
        .iter()
        .map(|block| block.line_height.max(block.height).max(16.0))
        .sum::<f64>()
        / result.blocks.len() as f64;

    result.blocks.sort_by(|left, right| {
        let y_diff = left.y - right.y;
        if y_diff.abs() > average_line_height * 0.45 {
            left.y
                .partial_cmp(&right.y)
                .unwrap_or(std::cmp::Ordering::Equal)
        } else {
            left.x
                .partial_cmp(&right.x)
                .unwrap_or(std::cmp::Ordering::Equal)
        }
    });

    let text = result
        .blocks
        .iter()
        .map(|block| block.text.as_str())
        .filter(|text| !text.trim().is_empty())
        .collect::<Vec<_>>()
        .join("\n");

    if !text.is_empty() {
        result.full_text = text.clone();
        result.text = text;
    }
}

struct SidecarAttempt {
    label: &'static str,
    args: Vec<OsString>,
}

enum LanguageCandidateOutcome {
    Success {
        result: OcrRecognizeResult,
        score: f64,
    },
    Failed {
        language: OcrLanguage,
        errors: Vec<String>,
    },
}

fn run_rapidocr_language_candidate(
    sidecar: &Path,
    image_path: &Path,
    language: OcrLanguage,
    log_path: &Path,
) -> Result<LanguageCandidateOutcome, String> {
    let language_started_at = Instant::now();
    let attempts = build_rapidocr_attempts(image_path, language);
    append_ocr_log(
        log_path,
        "backend",
        "RapidOCR language candidate start",
        Some(&format!(
            "language={}, rec={}, keys={}, attempts={}",
            language.label(),
            language.rapidocr_rec_model(),
            language.rapidocr_keys(),
            attempts.len()
        )),
    );

    let mut language_errors = Vec::new();

    for attempt in attempts {
        append_ocr_log(
            log_path,
            "backend",
            "RapidOCR sidecar attempt",
            Some(&format!(
                "language={}, label={}, args={}",
                language.label(),
                attempt.label,
                format_args_for_log(&attempt.args)
            )),
        );

        match run_sidecar_attempt(sidecar, &attempt) {
            Ok(output) => {
                append_ocr_log(
                    log_path,
                    "backend",
                    "RapidOCR sidecar stdout",
                    Some(&format!(
                        "language={}, label={}, chars={}, preview={}",
                        language.label(),
                        attempt.label,
                        output.chars().count(),
                        preview_for_log(&output, 1200)
                    )),
                );

                if output.trim().is_empty() {
                    language_errors.push(format!("{}: 无输出", attempt.label));
                    continue;
                }
                if looks_like_cli_help(&output) {
                    language_errors
                        .push(format!("{}: 输出为命令帮助，不是 OCR JSON", attempt.label));
                    continue;
                }

                let mut result = parse_rapidocr_output(&output)?;
                result.engine = format!("rapidocr:{}", language.label());
                result.language = language.label().to_string();
                let score_breakdown = score_ocr_result_breakdown(&result, language);
                let score = score_breakdown.total;

                append_ocr_log(
                    log_path,
                    "backend",
                    "RapidOCR parse success",
                    Some(&format!(
                        "language={}, label={}, duration_ms={}, score={:.2}, chars={}, blocks={}, confidence={:.2}, readable_bonus={:.2}, script_presence_bonus={:.2}, garbage_penalty={:.2}, script_mismatch_penalty={:.2}, competing_script_penalty={:.2}, latin_gibberish_penalty={:.2}, low_confidence_penalty={:.2}, text_preview={}",
                        language.label(),
                        attempt.label,
                        language_started_at.elapsed().as_millis(),
                        score,
                        result.full_text.chars().count(),
                        result.blocks.len(),
                        result.confidence,
                        score_breakdown.readable_bonus,
                        score_breakdown.script_presence_bonus,
                        score_breakdown.garbage_penalty,
                        score_breakdown.script_mismatch_penalty,
                        score_breakdown.competing_script_penalty,
                        score_breakdown.latin_gibberish_penalty,
                        score_breakdown.low_confidence_penalty,
                        preview_for_log(&result.full_text, 500)
                    )),
                );

                return Ok(LanguageCandidateOutcome::Success { result, score });
            }
            Err(error) => {
                append_ocr_log(
                    log_path,
                    "backend",
                    "RapidOCR sidecar attempt failed",
                    Some(&format!(
                        "language={}, label={}, error={}",
                        language.label(),
                        attempt.label,
                        error
                    )),
                );
                language_errors.push(format!("{}: {}", attempt.label, error));
            }
        }
    }

    append_ocr_log(
        log_path,
        "backend",
        "RapidOCR language candidate failed",
        Some(&format!(
            "language={}, duration_ms={}, errors={}",
            language.label(),
            language_started_at.elapsed().as_millis(),
            language_errors.join(" | ")
        )),
    );

    Ok(LanguageCandidateOutcome::Failed {
        language,
        errors: language_errors,
    })
}

fn build_language_candidates(
    language_hint: Option<OcrLanguage>,
    _engine: OcrEngine,
) -> Vec<OcrLanguage> {
    let mut candidates = Vec::new();

    if let Some(language_hint) = language_hint {
        candidates.push(language_hint);
        return candidates;
    }

    for language in [
        OcrLanguage::ChineseSimplified,
        OcrLanguage::English,
        OcrLanguage::Japanese,
        OcrLanguage::Korean,
        OcrLanguage::ChineseTraditional,
    ] {
        if !candidates.contains(&language) {
            candidates.push(language);
        }
    }

    candidates
}

fn build_primary_language_candidates(
    language_hint: Option<OcrLanguage>,
    engine: OcrEngine,
) -> Vec<OcrLanguage> {
    if let Some(language_hint) = language_hint {
        return vec![language_hint];
    }

    let mut candidates = Vec::new();
    let preferred = match engine {
        OcrEngine::Auto | OcrEngine::RapidOcr => {
            [OcrLanguage::ChineseSimplified, OcrLanguage::English]
        }
    };

    for language in preferred {
        if !candidates.contains(&language) {
            candidates.push(language);
        }
    }

    candidates
}

fn build_fallback_language_candidates(
    language_hint: Option<OcrLanguage>,
    engine: OcrEngine,
    primary_languages: &[OcrLanguage],
) -> Vec<OcrLanguage> {
    if language_hint.is_some() {
        return Vec::new();
    }

    build_language_candidates(None, engine)
        .into_iter()
        .filter(|language| !primary_languages.contains(language))
        .collect()
}

struct OcrScoreBreakdown {
    total: f64,
    readable_bonus: f64,
    script_presence_bonus: f64,
    garbage_penalty: f64,
    script_mismatch_penalty: f64,
    competing_script_penalty: f64,
    latin_gibberish_penalty: f64,
    low_confidence_penalty: f64,
}

fn score_ocr_result_breakdown(
    result: &OcrRecognizeResult,
    language: OcrLanguage,
) -> OcrScoreBreakdown {
    let text = result.full_text.trim();
    if text.is_empty() {
        return OcrScoreBreakdown {
            total: -10000.0,
            readable_bonus: 0.0,
            script_presence_bonus: 0.0,
            garbage_penalty: 0.0,
            script_mismatch_penalty: 0.0,
            competing_script_penalty: 0.0,
            latin_gibberish_penalty: 0.0,
            low_confidence_penalty: 0.0,
        };
    }

    let compact_chars = text.chars().filter(|ch| !ch.is_whitespace()).count() as f64;
    let block_bonus = result.blocks.len() as f64 * 4.0;
    let confidence = result.confidence.clamp(0.0, 100.0);
    let confidence_bonus = confidence * 4.0;
    let readable_bonus = text_readability_score(text, language);
    let script_presence_bonus = text_script_presence_bonus(text, language);
    let garbage_penalty = text_garbage_penalty(text);
    let script_mismatch_penalty = text_script_mismatch_penalty(text, language);
    let competing_script_penalty = text_competing_script_penalty(text, language);
    let latin_gibberish_penalty = text_latin_gibberish_penalty(text);
    let low_confidence_penalty = if confidence < 70.0 {
        (70.0 - confidence) * 4.0
    } else {
        0.0
    };

    let total = compact_chars * 0.6
        + block_bonus
        + confidence_bonus
        + readable_bonus
        + script_presence_bonus
        - garbage_penalty
        - script_mismatch_penalty
        - competing_script_penalty
        - latin_gibberish_penalty
        - low_confidence_penalty;

    OcrScoreBreakdown {
        total,
        readable_bonus,
        script_presence_bonus,
        garbage_penalty,
        script_mismatch_penalty,
        competing_script_penalty,
        latin_gibberish_penalty,
        low_confidence_penalty,
    }
}

fn text_readability_score(text: &str, language: OcrLanguage) -> f64 {
    let total = text.chars().filter(|ch| !ch.is_whitespace()).count() as f64;
    if total <= 0.0 {
        return 0.0;
    }

    let mut matching = 0.0;
    for ch in text.chars() {
        if ch.is_whitespace() || ch.is_ascii_punctuation() || ch.is_ascii_digit() {
            matching += 1.0;
            continue;
        }

        if is_char_for_language(ch, language) {
            matching += 1.0;
        }
    }

    (matching / total) * 140.0
}

fn text_script_presence_bonus(text: &str, language: OcrLanguage) -> f64 {
    let stats = script_stats(text);
    let compact = stats.compact_count as f64;
    if compact < 20.0 {
        return 0.0;
    }

    match language {
        OcrLanguage::ChineseSimplified | OcrLanguage::ChineseTraditional => {
            let cjk = stats.cjk_count as f64;
            if cjk < 8.0 {
                return 0.0;
            }

            let ratio = cjk / compact;
            80.0 + cjk.min(80.0) * 3.5 + ratio * 180.0
        }
        OcrLanguage::Japanese => {
            let cjk = stats.cjk_count as f64;
            let kana = stats.kana_count as f64;
            if cjk + kana < 8.0 {
                return 0.0;
            }
            70.0 + (cjk + kana).min(80.0) * 3.0
        }
        OcrLanguage::Korean => {
            let hangul = stats.hangul_count as f64;
            if hangul < 8.0 {
                return 0.0;
            }
            70.0 + hangul.min(80.0) * 3.0
        }
        OcrLanguage::English => 0.0,
    }
}

fn text_script_mismatch_penalty(text: &str, language: OcrLanguage) -> f64 {
    let mut meaningful = 0.0;
    let mut mismatched = 0.0;

    for ch in text.chars() {
        if ch.is_whitespace() || ch.is_ascii_punctuation() || ch.is_ascii_digit() {
            continue;
        }

        if !is_language_script_char(ch) {
            continue;
        }

        meaningful += 1.0;
        if !is_char_for_language(ch, language) {
            mismatched += 1.0;
        }
    }

    if meaningful < 16.0 {
        return 0.0;
    }

    let ratio = mismatched / meaningful;
    if ratio <= 0.28 {
        return 0.0;
    }

    let multiplier = if language == OcrLanguage::English {
        260.0
    } else {
        430.0
    };
    (ratio - 0.28) * multiplier
}

fn is_char_for_language(ch: char, language: OcrLanguage) -> bool {
    let code = ch as u32;
    match language {
        OcrLanguage::ChineseSimplified | OcrLanguage::ChineseTraditional => {
            matches!(code, 0x3400..=0x4DBF | 0x4E00..=0x9FFF)
        }
        OcrLanguage::English => ch.is_ascii_alphabetic(),
        OcrLanguage::Japanese => {
            matches!(code, 0x3040..=0x30FF | 0x3400..=0x4DBF | 0x4E00..=0x9FFF)
        }
        OcrLanguage::Korean => matches!(code, 0xAC00..=0xD7AF),
    }
}

fn is_language_script_char(ch: char) -> bool {
    let code = ch as u32;
    ch.is_ascii_alphabetic()
        || matches!(
            code,
            0x3040..=0x30FF | 0x3400..=0x4DBF | 0x4E00..=0x9FFF | 0xAC00..=0xD7AF
        )
}

fn text_competing_script_penalty(text: &str, language: OcrLanguage) -> f64 {
    let stats = script_stats(text);
    let compact = stats.compact_count as f64;
    if compact < 20.0 {
        return 0.0;
    }

    match language {
        OcrLanguage::English => {
            let cjk = stats.cjk_count as f64;
            if cjk < 4.0 {
                return 0.0;
            }
            let ratio = cjk / compact;
            140.0 + cjk * 7.0 + ratio * 360.0
        }
        OcrLanguage::ChineseSimplified | OcrLanguage::ChineseTraditional => {
            let ascii_letters = stats.ascii_letter_count as f64;
            let cjk = stats.cjk_count as f64;
            if ascii_letters < 18.0 || cjk >= 4.0 {
                return 0.0;
            }
            let ratio = ascii_letters / compact;
            if ratio > 0.72 {
                120.0 + ratio * 160.0
            } else {
                0.0
            }
        }
        _ => 0.0,
    }
}

#[derive(Default)]
struct ScriptStats {
    compact_count: usize,
    cjk_count: usize,
    kana_count: usize,
    hangul_count: usize,
    ascii_letter_count: usize,
}

fn script_stats(text: &str) -> ScriptStats {
    let mut stats = ScriptStats::default();
    for ch in text.chars() {
        if ch.is_whitespace() {
            continue;
        }

        stats.compact_count += 1;
        if ch.is_ascii_alphabetic() {
            stats.ascii_letter_count += 1;
        }
        let code = ch as u32;
        if matches!(code, 0x3400..=0x4DBF | 0x4E00..=0x9FFF) {
            stats.cjk_count += 1;
        }
        if matches!(code, 0x3040..=0x30FF) {
            stats.kana_count += 1;
        }
        if matches!(code, 0xAC00..=0xD7AF) {
            stats.hangul_count += 1;
        }
    }
    stats
}

fn text_garbage_penalty(text: &str) -> f64 {
    let mut penalty = 0.0;
    let mut ascii_symbols = 0.0;
    let mut compact_chars = 0.0;

    for ch in text.chars() {
        if !ch.is_whitespace() {
            compact_chars += 1.0;
        }

        if ch == '\u{fffd}' {
            penalty += 40.0;
            continue;
        }

        if ch.is_control() && !ch.is_whitespace() {
            penalty += 20.0;
            continue;
        }

        if ch.is_ascii_punctuation()
            && !matches!(
                ch,
                '.' | ',' | ':' | ';' | '\'' | '"' | '-' | '(' | ')' | '[' | ']'
            )
        {
            ascii_symbols += 1.0;
            penalty += 3.0;
            continue;
        }

        let code = ch as u32;
        if !ch.is_whitespace()
            && !ch.is_ascii_punctuation()
            && !ch.is_ascii_digit()
            && !matches!(
                code,
                0x0041..=0x005A
                    | 0x0061..=0x007A
                    | 0x3040..=0x30FF
                    | 0x3400..=0x4DBF
                    | 0x4E00..=0x9FFF
                    | 0xAC00..=0xD7AF
            )
        {
            penalty += 6.0;
        }
    }

    if compact_chars > 0.0 {
        let symbol_ratio = ascii_symbols / compact_chars;
        if symbol_ratio > 0.12 {
            penalty += symbol_ratio * 260.0;
        }
    }

    penalty
}

fn text_latin_gibberish_penalty(text: &str) -> f64 {
    let ascii_letters = text.chars().filter(|ch| ch.is_ascii_alphabetic()).count();
    if ascii_letters < 32 {
        return 0.0;
    }

    let mut penalty = 0.0;
    let mut word_count = 0.0;
    let mut suspicious_words = 0.0;

    for raw_word in text.split(|ch: char| !ch.is_ascii_alphanumeric() && ch != '\'') {
        let word = raw_word.trim_matches('\'');
        if word.len() < 4 {
            continue;
        }

        word_count += 1.0;
        let lower = word.to_ascii_lowercase();
        let letters = lower.chars().filter(|ch| ch.is_ascii_alphabetic()).count();
        let digits = lower.chars().filter(|ch| ch.is_ascii_digit()).count();
        let vowels = lower
            .chars()
            .filter(|ch| matches!(ch, 'a' | 'e' | 'i' | 'o' | 'u'))
            .count();
        let max_consonant_run = max_ascii_consonant_run(&lower);
        let max_repeated_run = max_repeated_char_run(&lower);

        let mut suspicious = false;
        if letters >= 6 && vowels == 0 {
            penalty += 18.0;
            suspicious = true;
        }
        if letters >= 8 && (vowels as f64 / letters as f64) < 0.15 {
            penalty += 12.0;
            suspicious = true;
        }
        if max_consonant_run >= 6 {
            penalty += 16.0;
            suspicious = true;
        }
        if max_repeated_run >= 4 {
            penalty += 20.0;
            suspicious = true;
        }
        if digits > 0 && letters >= 3 {
            penalty += digits as f64 * 8.0;
            suspicious = true;
        }
        if letters >= 10 && lacks_common_english_shape(&lower) {
            penalty += 10.0;
            suspicious = true;
        }

        if suspicious {
            suspicious_words += 1.0;
        }
    }

    if word_count >= 4.0 {
        let suspicious_ratio = suspicious_words / word_count;
        if suspicious_ratio > 0.35 {
            penalty += suspicious_ratio * 180.0;
        }
    }

    penalty
}

fn max_ascii_consonant_run(text: &str) -> usize {
    let mut max_run = 0;
    let mut current = 0;
    for ch in text.chars() {
        if ch.is_ascii_alphabetic() && !matches!(ch, 'a' | 'e' | 'i' | 'o' | 'u') {
            current += 1;
            max_run = max_run.max(current);
        } else {
            current = 0;
        }
    }
    max_run
}

fn max_repeated_char_run(text: &str) -> usize {
    let mut previous: Option<char> = None;
    let mut max_run = 0;
    let mut current = 0;
    for ch in text.chars() {
        if Some(ch) == previous {
            current += 1;
        } else {
            current = 1;
            previous = Some(ch);
        }
        max_run = max_run.max(current);
    }
    max_run
}

fn lacks_common_english_shape(word: &str) -> bool {
    const COMMON_PATTERNS: [&str; 24] = [
        "th", "he", "in", "er", "an", "re", "on", "at", "en", "nd", "ti", "es", "or", "te", "of",
        "ed", "is", "it", "al", "ar", "st", "ng", "ion", "ing",
    ];
    !COMMON_PATTERNS.iter().any(|pattern| word.contains(pattern))
}

fn looks_like_readable_english(text: &str) -> bool {
    const COMMON_WORDS: [&str; 96] = [
        "a",
        "about",
        "after",
        "all",
        "also",
        "an",
        "and",
        "any",
        "are",
        "as",
        "at",
        "be",
        "been",
        "but",
        "by",
        "can",
        "data",
        "described",
        "for",
        "from",
        "has",
        "have",
        "in",
        "into",
        "is",
        "it",
        "known",
        "library",
        "makes",
        "more",
        "not",
        "of",
        "often",
        "on",
        "or",
        "query",
        "server",
        "state",
        "that",
        "the",
        "their",
        "there",
        "this",
        "to",
        "updating",
        "vue",
        "was",
        "web",
        "were",
        "which",
        "with",
        "your",
        "you",
        "application",
        "applications",
        "breeze",
        "caching",
        "fetching",
        "formerly",
        "missing",
        "synchronizing",
        "technical",
        "terms",
        "use",
        "using",
        "when",
        "where",
        "will",
        "would",
        "get",
        "set",
        "new",
        "old",
        "true",
        "false",
        "value",
        "values",
        "type",
        "types",
        "function",
        "component",
        "components",
        "framework",
        "latest",
        "docs",
        "guide",
        "overview",
        "learn",
        "start",
        "getting",
        "example",
        "examples",
        "option",
        "options",
        "return",
        "returns",
    ];

    let mut word_count = 0usize;
    let mut common_count = 0usize;

    for raw_word in text.split(|ch: char| !ch.is_ascii_alphabetic() && ch != '\'') {
        let word = raw_word.trim_matches('\'').to_ascii_lowercase();
        if word.len() < 2 {
            continue;
        }

        word_count += 1;
        if COMMON_WORDS.contains(&word.as_str()) {
            common_count += 1;
        }
    }

    if word_count < 6 {
        return false;
    }

    let common_ratio = common_count as f64 / word_count as f64;
    common_count >= 4 || (common_count >= 3 && common_ratio >= 0.12)
}

fn should_retry_transformed_image(result: &OcrRecognizeResult, score: f64) -> bool {
    if result.full_text.trim().chars().count() < 20 {
        return false;
    }

    let language = OcrLanguage::from_label(&result.language).unwrap_or(OcrLanguage::English);
    let breakdown = score_ocr_result_breakdown(result, language);
    score < 260.0
        || result.confidence < 72.0
        || breakdown.garbage_penalty + breakdown.latin_gibberish_penalty > 160.0
        || breakdown.script_mismatch_penalty > 180.0
}

fn should_try_fallback_language_candidates(result: &OcrRecognizeResult, score: f64) -> bool {
    if result.full_text.trim().chars().count() < 20 {
        return false;
    }

    let language = OcrLanguage::from_label(&result.language).unwrap_or(OcrLanguage::English);
    let breakdown = score_ocr_result_breakdown(result, language);
    score < 180.0
        || result.confidence < 65.0
        || breakdown.garbage_penalty + breakdown.latin_gibberish_penalty > 220.0
        || breakdown.script_mismatch_penalty > 240.0
}

fn is_final_ocr_result_low_quality(result: &OcrRecognizeResult, score: f64) -> bool {
    let char_count = result
        .full_text
        .trim()
        .chars()
        .filter(|ch| !ch.is_whitespace())
        .count();
    if char_count < 48 {
        return false;
    }

    let language = OcrLanguage::from_label(&result.language).unwrap_or(OcrLanguage::English);
    let breakdown = score_ocr_result_breakdown(result, language);
    let quality_penalty = breakdown.garbage_penalty
        + breakdown.script_mismatch_penalty
        + breakdown.latin_gibberish_penalty;

    if language == OcrLanguage::English {
        let readable_english = looks_like_readable_english(&result.full_text);
        return score < 90.0
            || breakdown.latin_gibberish_penalty > 180.0
            || (score < 180.0 && quality_penalty > 120.0 && !readable_english)
            || (result.confidence < 45.0 && score < 140.0 && !readable_english);
    }

    score < 90.0 || (score < 180.0 && quality_penalty > 180.0)
}

fn build_rapidocr_attempts(image_path: &Path, language: OcrLanguage) -> Vec<SidecarAttempt> {
    let image_arg = OsString::from(image_path);
    let mut attempts = Vec::new();

    if let Ok(template) = env::var("SNIPPETS_RAPIDOCR_ARGS") {
        let args = parse_args_template(&template, image_path);
        if !args.is_empty() {
            attempts.push(SidecarAttempt {
                label: "env-template",
                args,
            });
        }
    }

    attempts.extend([
        SidecarAttempt {
            label: "RapidOCR-json --image_path",
            args: vec![
                "--models=models".into(),
                "--det=ch_PP-OCRv4_det_infer.onnx".into(),
                "--cls=ch_ppocr_mobile_v2.0_cls_infer.onnx".into(),
                OsString::from(format!("--rec={}", language.rapidocr_rec_model())),
                OsString::from(format!("--keys={}", language.rapidocr_keys())),
                OsString::from(format!("--image_path={}", image_path.to_string_lossy())),
                "--ensureAscii=1".into(),
            ],
        },
        SidecarAttempt {
            label: "--image --output-format json",
            args: vec![
                "--image".into(),
                image_arg.clone(),
                "--output-format".into(),
                "json".into(),
            ],
        },
        SidecarAttempt {
            label: "--image --format json",
            args: vec![
                "--image".into(),
                image_arg.clone(),
                "--format".into(),
                "json".into(),
            ],
        },
        SidecarAttempt {
            label: "--image --json",
            args: vec!["--image".into(), image_arg.clone(), "--json".into()],
        },
        SidecarAttempt {
            label: "--image",
            args: vec!["--image".into(), image_arg.clone()],
        },
        SidecarAttempt {
            label: "--image_path split",
            args: vec!["--image_path".into(), image_arg.clone()],
        },
        SidecarAttempt {
            label: "--img_path",
            args: vec!["--img_path".into(), image_arg.clone()],
        },
        SidecarAttempt {
            label: "-img --json",
            args: vec!["-img".into(), image_arg.clone(), "--json".into()],
        },
        SidecarAttempt {
            label: "-img",
            args: vec!["-img".into(), image_arg.clone()],
        },
        SidecarAttempt {
            label: "positional",
            args: vec![image_arg],
        },
    ]);

    attempts
}

fn parse_args_template(template: &str, image_path: &Path) -> Vec<OsString> {
    let image = image_path.to_string_lossy();
    split_command_args(template)
        .into_iter()
        .map(|arg| OsString::from(arg.replace("{image}", &image)))
        .collect()
}

fn split_command_args(input: &str) -> Vec<String> {
    let mut args = Vec::new();
    let mut current = String::new();
    let mut quote: Option<char> = None;
    let mut escaped = false;

    for ch in input.chars() {
        if escaped {
            current.push(ch);
            escaped = false;
            continue;
        }

        if ch == '\\' {
            escaped = true;
            continue;
        }

        match quote {
            Some(q) if ch == q => quote = None,
            Some(_) => current.push(ch),
            None if ch == '"' || ch == '\'' => quote = Some(ch),
            None if ch.is_whitespace() => {
                if !current.is_empty() {
                    args.push(std::mem::take(&mut current));
                }
            }
            None => current.push(ch),
        }
    }

    if !current.is_empty() {
        args.push(current);
    }

    args
}

fn run_sidecar_attempt(sidecar: &Path, attempt: &SidecarAttempt) -> Result<String, String> {
    let mut command = Command::new(sidecar);
    command.args(&attempt.args);
    #[cfg(target_os = "windows")]
    command.creation_flags(0x08000000);

    if let Some(sidecar_dir) = sidecar.parent() {
        command.current_dir(sidecar_dir);
    }

    let output = command.output().map_err(|e| format!("启动失败: {}", e))?;

    let stdout = String::from_utf8_lossy(&output.stdout).trim().to_string();
    let stderr = String::from_utf8_lossy(&output.stderr).trim().to_string();

    if output.status.success() {
        if !stderr.is_empty() {
            log::debug!("RapidOCR sidecar stderr [{}]: {}", attempt.label, stderr);
        }
        Ok(stdout)
    } else {
        let detail = if stderr.is_empty() {
            format!("退出码 {:?}", output.status.code())
        } else {
            stderr
        };
        Err(detail)
    }
}

fn ocr_diagnostic_log_path(app_handle: &tauri::AppHandle) -> PathBuf {
    app_handle
        .path()
        .app_log_dir()
        .unwrap_or_else(|_| env::temp_dir())
        .join("ocr-diagnostic.log")
}

fn append_ocr_log(log_path: &Path, source: &str, message: &str, data: Option<&str>) {
    if let Err(error) = write_ocr_diagnostic_log(log_path, source, message, data) {
        log::warn!("写入 OCR 诊断日志失败 {}: {}", log_path.display(), error);
    }
}

fn write_ocr_diagnostic_log(
    log_path: &Path,
    source: &str,
    message: &str,
    data: Option<&str>,
) -> Result<(), String> {
    if let Some(parent) = log_path.parent() {
        fs::create_dir_all(parent).map_err(|e| format!("创建 OCR 日志目录失败: {}", e))?;
    }

    let mut file = OpenOptions::new()
        .create(true)
        .append(true)
        .open(log_path)
        .map_err(|e| format!("打开 OCR 日志失败: {}", e))?;

    let timestamp = chrono::Local::now().format("%Y-%m-%d %H:%M:%S%.3f");
    writeln!(file, "[{}] [{}] {}", timestamp, source, message)
        .map_err(|e| format!("写入 OCR 日志失败: {}", e))?;

    if let Some(data) = data.filter(|value| !value.trim().is_empty()) {
        for line in data.lines() {
            writeln!(file, "    {}", line).map_err(|e| format!("写入 OCR 日志失败: {}", e))?;
        }
    }

    Ok(())
}

fn format_args_for_log(args: &[OsString]) -> String {
    args.iter()
        .map(|arg| arg.to_string_lossy().to_string())
        .collect::<Vec<_>>()
        .join(" ")
}

fn preview_for_log(value: &str, max_chars: usize) -> String {
    let mut preview = value
        .replace('\r', "\\r")
        .replace('\n', "\\n")
        .chars()
        .take(max_chars)
        .collect::<String>();
    if value.chars().count() > max_chars {
        preview.push_str("...");
    }
    preview
}

fn looks_like_cli_help(output: &str) -> bool {
    let lower = output.to_ascii_lowercase();
    lower.contains("usage:")
        || lower.contains("options:")
        || lower.contains("required arguments")
        || (lower.contains("rapidocr") && lower.contains("--help"))
}

fn parse_rapidocr_output(stdout: &str) -> Result<OcrRecognizeResult, String> {
    if let Some(value) = extract_json_value(stdout) {
        return Ok(parse_rapidocr_json(&value));
    }

    Ok(OcrRecognizeResult {
        full_text: stdout.to_string(),
        text: stdout.to_string(),
        confidence: 0.0,
        blocks: Vec::new(),
        engine: "rapidocr".to_string(),
        language: "unknown".to_string(),
    })
}

fn extract_json_value(stdout: &str) -> Option<Value> {
    if let Ok(value) = serde_json::from_str::<Value>(stdout) {
        return Some(value);
    }

    for line in stdout.lines().rev() {
        let trimmed = line.trim();
        if trimmed.is_empty() {
            continue;
        }
        if let Ok(value) = serde_json::from_str::<Value>(trimmed) {
            return Some(value);
        }
    }

    let starts = stdout
        .char_indices()
        .filter_map(|(index, ch)| matches!(ch, '{' | '[').then_some((index, ch)));
    for (start, ch) in starts {
        let end_char = if ch == '{' { '}' } else { ']' };
        for (end, _) in stdout.char_indices().rev().filter(|(_, c)| *c == end_char) {
            if end <= start {
                continue;
            }
            let candidate = &stdout[start..=end];
            if let Ok(value) = serde_json::from_str::<Value>(candidate) {
                return Some(value);
            }
        }
    }

    None
}

fn parse_rapidocr_json(value: &Value) -> OcrRecognizeResult {
    let blocks = parse_blocks(value);
    let text_from_blocks = blocks
        .iter()
        .map(|block| block.text.as_str())
        .filter(|text| !text.trim().is_empty())
        .collect::<Vec<_>>()
        .join("\n");

    let full_text = find_text_value(value)
        .filter(|text| !text.trim().is_empty())
        .unwrap_or(text_from_blocks);
    let confidence = find_confidence_value(value).unwrap_or_else(|| average_confidence(&blocks));

    OcrRecognizeResult {
        full_text: full_text.clone(),
        text: full_text,
        confidence,
        blocks,
        engine: "rapidocr".to_string(),
        language: "unknown".to_string(),
    }
}

fn parse_blocks(value: &Value) -> Vec<OcrTextBlock> {
    let mut blocks = Vec::new();
    collect_blocks(value, &mut blocks);
    blocks
}

fn collect_blocks(value: &Value, blocks: &mut Vec<OcrTextBlock>) {
    if let Some(block) = parse_single_block(value) {
        blocks.push(block);
        return;
    }

    match value {
        Value::Array(items) => {
            for item in items {
                collect_blocks(item, blocks);
            }
        }
        Value::Object(map) => {
            if collect_split_rapidocr_arrays(value, blocks) {
                return;
            }

            for key in [
                "blocks",
                "results",
                "result",
                "data",
                "ocr",
                "ocr_result",
                "ocrResult",
                "res",
                "items",
                "lines",
            ] {
                if let Some(nested) = map.get(key) {
                    collect_blocks(nested, blocks);
                }
            }
        }
        _ => {}
    }
}

fn collect_split_rapidocr_arrays(value: &Value, blocks: &mut Vec<OcrTextBlock>) -> bool {
    let Some(texts) = get_first_array(value, &["rec_texts", "texts", "txts"]) else {
        return false;
    };
    let boxes = get_first_array(
        value,
        &["dt_boxes", "dt_polys", "boxes", "rec_boxes", "polys"],
    );
    let scores = get_first_array(value, &["rec_scores", "scores", "confs", "confidences"]);

    for (index, text_value) in texts.iter().enumerate() {
        let Some(text) = text_value.as_str().map(str::trim).filter(|s| !s.is_empty()) else {
            continue;
        };
        let rect = boxes
            .and_then(|items| items.get(index))
            .and_then(parse_rect_value)
            .unwrap_or((0.0, blocks.len() as f64 * 24.0, 0.0, 0.0));
        let confidence = scores
            .and_then(|items| items.get(index))
            .and_then(Value::as_f64)
            .map(normalize_confidence)
            .unwrap_or(0.0);

        blocks.push(make_block(text.to_string(), rect, confidence));
    }

    true
}

fn get_first_array<'a>(value: &'a Value, keys: &[&str]) -> Option<&'a Vec<Value>> {
    keys.iter()
        .find_map(|key| value.get(*key).and_then(Value::as_array))
}

fn parse_single_block(value: &Value) -> Option<OcrTextBlock> {
    match value {
        Value::Object(map) => {
            let text = get_string_field(
                value,
                &[
                    "text",
                    "label",
                    "rec_text",
                    "transcription",
                    "value",
                    "content",
                ],
            )?
            .trim()
            .to_string();
            if text.is_empty() {
                return None;
            }

            let rect = [
                "bbox", "box", "points", "dt_box", "poly", "polygon", "position",
            ]
            .iter()
            .find_map(|key| map.get(*key).and_then(parse_rect_value))
            .or_else(|| parse_rect_value(value))
            .unwrap_or((0.0, 0.0, 0.0, 0.0));
            let confidence =
                get_number_field(value, &["confidence", "score", "prob", "rec_score", "conf"])
                    .map(normalize_confidence)
                    .unwrap_or(0.0);

            Some(make_block(text, rect, confidence))
        }
        Value::Array(items) => parse_tuple_block(items),
        _ => None,
    }
}

fn parse_tuple_block(items: &[Value]) -> Option<OcrTextBlock> {
    let text = items
        .iter()
        .find_map(Value::as_str)
        .map(str::trim)
        .filter(|text| !text.is_empty())?
        .to_string();
    let rect = items
        .iter()
        .find_map(parse_rect_value)
        .unwrap_or((0.0, 0.0, 0.0, 0.0));
    let confidence = items
        .iter()
        .find_map(Value::as_f64)
        .map(normalize_confidence)
        .unwrap_or(0.0);

    Some(make_block(text, rect, confidence))
}

fn make_block(text: String, rect: (f64, f64, f64, f64), confidence: f64) -> OcrTextBlock {
    let (_, _, _, height) = rect;
    OcrTextBlock {
        text,
        x: rect.0,
        y: rect.1,
        width: rect.2,
        height: rect.3,
        font_size: height.max(16.0) * 0.75,
        line_height: height.max(16.0),
        angle: 0.0,
        confidence,
    }
}

fn parse_rect_value(value: &Value) -> Option<(f64, f64, f64, f64)> {
    match value {
        Value::Object(map) => {
            if let (Some(x), Some(y), Some(width), Some(height)) = (
                map.get("x").and_then(Value::as_f64),
                map.get("y").and_then(Value::as_f64),
                map.get("width").and_then(Value::as_f64),
                map.get("height").and_then(Value::as_f64),
            ) {
                return Some((x, y, width.max(0.0), height.max(0.0)));
            }

            if let (Some(left), Some(top), Some(right), Some(bottom)) = (
                map.get("left").and_then(Value::as_f64),
                map.get("top").and_then(Value::as_f64),
                map.get("right").and_then(Value::as_f64),
                map.get("bottom").and_then(Value::as_f64),
            ) {
                return Some((left, top, (right - left).max(0.0), (bottom - top).max(0.0)));
            }

            if let (Some(x0), Some(y0), Some(x1), Some(y1)) = (
                map.get("x0").and_then(Value::as_f64),
                map.get("y0").and_then(Value::as_f64),
                map.get("x1").and_then(Value::as_f64),
                map.get("y1").and_then(Value::as_f64),
            ) {
                return Some((x0, y0, (x1 - x0).max(0.0), (y1 - y0).max(0.0)));
            }

            ["bbox", "box", "points", "poly", "polygon"]
                .iter()
                .find_map(|key| map.get(*key).and_then(parse_rect_value))
        }
        Value::Array(array) => parse_rect_array(array),
        _ => None,
    }
}

fn parse_rect_array(array: &[Value]) -> Option<(f64, f64, f64, f64)> {
    if array.len() >= 4 && array.iter().take(4).all(Value::is_number) {
        let x0 = array[0].as_f64().unwrap_or(0.0);
        let y0 = array[1].as_f64().unwrap_or(0.0);
        let x1 = array[2].as_f64().unwrap_or(x0);
        let y1 = array[3].as_f64().unwrap_or(y0);
        return Some((x0, y0, (x1 - x0).max(0.0), (y1 - y0).max(0.0)));
    }

    let points = array
        .iter()
        .filter_map(|point| {
            let point = point.as_array()?;
            if point.len() < 2 {
                return None;
            }
            Some((
                point[0].as_f64().unwrap_or(0.0),
                point[1].as_f64().unwrap_or(0.0),
            ))
        })
        .collect::<Vec<_>>();

    if points.is_empty() {
        return None;
    }

    let min_x = points.iter().map(|p| p.0).fold(f64::INFINITY, f64::min);
    let min_y = points.iter().map(|p| p.1).fold(f64::INFINITY, f64::min);
    let max_x = points.iter().map(|p| p.0).fold(f64::NEG_INFINITY, f64::max);
    let max_y = points.iter().map(|p| p.1).fold(f64::NEG_INFINITY, f64::max);

    Some((
        min_x,
        min_y,
        (max_x - min_x).max(0.0),
        (max_y - min_y).max(0.0),
    ))
}

fn get_string_field(value: &Value, keys: &[&str]) -> Option<String> {
    keys.iter()
        .find_map(|key| value.get(*key).and_then(Value::as_str))
        .map(ToString::to_string)
}

fn get_number_field(value: &Value, keys: &[&str]) -> Option<f64> {
    keys.iter()
        .find_map(|key| value.get(*key).and_then(Value::as_f64))
}

fn find_text_value(value: &Value) -> Option<String> {
    match value {
        Value::Object(map) => {
            for key in ["full_text", "fullText", "text", "txt"] {
                if let Some(text) = map.get(key).and_then(Value::as_str) {
                    return Some(text.to_string());
                }
            }

            if let Some(texts) = get_first_array(value, &["rec_texts", "texts", "txts"]) {
                let text = texts
                    .iter()
                    .filter_map(Value::as_str)
                    .filter(|text| !text.trim().is_empty())
                    .collect::<Vec<_>>()
                    .join("\n");
                if !text.is_empty() {
                    return Some(text);
                }
            }

            for key in ["result", "data", "ocr_result", "ocrResult"] {
                if let Some(text) = map.get(key).and_then(find_text_value) {
                    return Some(text);
                }
            }
            None
        }
        _ => None,
    }
}

fn find_confidence_value(value: &Value) -> Option<f64> {
    get_number_field(value, &["confidence", "score", "prob", "rec_score", "conf"])
        .map(normalize_confidence)
}

fn normalize_confidence(confidence: f64) -> f64 {
    if confidence.is_nan() {
        0.0
    } else if (0.0..=1.0).contains(&confidence) {
        confidence * 100.0
    } else {
        confidence.clamp(0.0, 100.0)
    }
}

fn average_confidence(blocks: &[OcrTextBlock]) -> f64 {
    if blocks.is_empty() {
        return 0.0;
    }

    blocks.iter().map(|block| block.confidence).sum::<f64>() / blocks.len() as f64
}

#[cfg(test)]
mod tests {
    use super::*;

    fn test_block(text: &str, x: f64, y: f64, width: f64, height: f64) -> OcrTextBlock {
        OcrTextBlock {
            text: text.to_string(),
            x,
            y,
            width,
            height,
            font_size: height,
            line_height: height,
            angle: 0.0,
            confidence: 96.0,
        }
    }

    #[test]
    fn mixed_script_merge_replaces_english_garbage_with_cjk_candidate() {
        let mut result = OcrRecognizeResult {
            full_text: "If you need to manually switch languages, iii -- i#/Language .".to_string(),
            text: "If you need to manually switch languages, iii -- i#/Language .".to_string(),
            confidence: 98.0,
            blocks: vec![test_block(
                "If you need to manually switch languages, iii -- i#/Language .",
                40.0,
                500.0,
                1180.0,
                36.0,
            )],
            engine: "rapidocr:en".to_string(),
            language: "en".to_string(),
        };
        let zh_result = OcrRecognizeResult {
            full_text: "If you need to manually switch languages, 全局设置 → 语言/Language ."
                .to_string(),
            text: "If you need to manually switch languages, 全局设置 → 语言/Language ."
                .to_string(),
            confidence: 98.0,
            blocks: vec![test_block(
                "If you need to manually switch languages, 全局设置 → 语言/Language .",
                42.0,
                501.0,
                1174.0,
                36.0,
            )],
            engine: "rapidocr:zh".to_string(),
            language: "zh".to_string(),
        };
        let log_path = std::env::temp_dir().join("snippets_ocr_mixed_script_test.log");

        merge_mixed_script_blocks(
            &mut result,
            &[(OcrLanguage::ChineseSimplified, zh_result, 900.0)],
            &log_path,
        );

        assert!(result.language.contains("+mixed"));
        assert!(result.full_text.contains("全局设置"));
        assert!(!result.full_text.contains("i#/Language"));
    }

    #[test]
    fn mixed_script_merge_replaces_inline_tail_garbage() {
        let mut result = OcrRecognizeResult {
            full_text: "If you need to manually switch languages, please refer to the following figure, iii -- i#/Language .".to_string(),
            text: "If you need to manually switch languages, please refer to the following figure, iii -- i#/Language .".to_string(),
            confidence: 98.0,
            blocks: vec![test_block(
                "If you need to manually switch languages, please refer to the following figure, iii -- i#/Language .",
                40.0,
                500.0,
                1180.0,
                36.0,
            )],
            engine: "rapidocr:en".to_string(),
            language: "en".to_string(),
        };
        let zh_result = OcrRecognizeResult {
            full_text: "全局设置 → 语言/Language".to_string(),
            text: "全局设置 → 语言/Language".to_string(),
            confidence: 98.0,
            blocks: vec![test_block(
                "全局设置 → 语言/Language",
                900.0,
                501.0,
                250.0,
                34.0,
            )],
            engine: "rapidocr:zh".to_string(),
            language: "zh".to_string(),
        };
        let log_path = std::env::temp_dir().join("snippets_ocr_mixed_script_test.log");

        merge_mixed_script_blocks(
            &mut result,
            &[(OcrLanguage::ChineseSimplified, zh_result, 900.0)],
            &log_path,
        );

        assert!(result.full_text.contains("following figure, 全局设置"));
        assert!(result.full_text.ends_with("Language."));
        assert!(!result.full_text.contains("iii"));
        assert!(!result.full_text.contains("i#/Language"));
    }

    #[test]
    fn mixed_script_merge_keeps_plain_english_blocks() {
        let mut result = OcrRecognizeResult {
            full_text: "Getting Started".to_string(),
            text: "Getting Started".to_string(),
            confidence: 99.0,
            blocks: vec![test_block("Getting Started", 20.0, 20.0, 260.0, 40.0)],
            engine: "rapidocr:en".to_string(),
            language: "en".to_string(),
        };
        let zh_result = OcrRecognizeResult {
            full_text: "Getting Started".to_string(),
            text: "Getting Started".to_string(),
            confidence: 96.0,
            blocks: vec![test_block("Getting Started", 20.0, 20.0, 260.0, 40.0)],
            engine: "rapidocr:zh".to_string(),
            language: "zh".to_string(),
        };
        let log_path = std::env::temp_dir().join("snippets_ocr_mixed_script_test.log");

        merge_mixed_script_blocks(
            &mut result,
            &[(OcrLanguage::ChineseSimplified, zh_result, 900.0)],
            &log_path,
        );

        assert_eq!(result.language, "en");
        assert_eq!(result.full_text, "Getting Started");
    }
}
