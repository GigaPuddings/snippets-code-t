//! Installed resource lookup and translation offline-runtime assets.
use super::package_paths::{
    local_plugin_package_dir, normalized_existing_path, path_to_display_string,
};
use super::plugin_manifest::validate_plugin_relative_path;
use futures::StreamExt;
use log::{info, warn};
use std::fs::{self, File};
use std::io::Write;
use std::path::{Path, PathBuf};
use std::time::Duration;
use tauri::{command, AppHandle};

const TRANSLATION_OFFLINE_RUNTIME_PLUGIN_ID: &str = "translation-offline-runtime";

const TRANSLATION_OFFLINE_RUNTIME_VERSION: &str = "2.17.2";

const TRANSLATION_OFFLINE_RUNTIME_FILES: &[&str] = &[
    "transformers.min.js",
    "ort-wasm-simd-threaded.wasm",
    "ort-wasm-simd.wasm",
    "ort-wasm-threaded.wasm",
    "ort-wasm.wasm",
];

#[command]
pub fn get_local_plugin_resource_path(
    app_handle: AppHandle,
    plugin_id: String,
    relative_path: String,
) -> Result<Option<String>, String> {
    validate_plugin_relative_path(&relative_path)?;
    let package_dir = match local_plugin_package_dir(&app_handle, &plugin_id) {
        Ok(package_dir) => package_dir,
        Err(_) => return Ok(None),
    };
    let resource_path = package_dir.join(relative_path);
    if !resource_path.is_file() {
        return Ok(None);
    }

    Ok(Some(path_to_display_string(&normalized_existing_path(
        &resource_path,
    ))))
}

async fn download_translation_runtime_file(
    client: &reqwest::Client,
    file_name: &str,
    target_path: &Path,
) -> Result<(), String> {
    let urls = [
        format!(
            "https://cdn.jsdelivr.net/npm/@xenova/transformers@{}/dist/{}",
            TRANSLATION_OFFLINE_RUNTIME_VERSION, file_name
        ),
        format!(
            "https://unpkg.com/@xenova/transformers@{}/dist/{}",
            TRANSLATION_OFFLINE_RUNTIME_VERSION, file_name
        ),
    ];
    let temp_path = target_path.with_file_name(format!("{}.download", file_name));
    let mut last_error: Option<String> = None;

    for url in urls {
        info!(
            "[Plugin] downloading translation offline runtime file {}",
            url
        );
        let response = match client.get(&url).send().await {
            Ok(response) => response,
            Err(error) => {
                last_error = Some(format!("请求运行时资源失败: {} ({})", url, error));
                continue;
            }
        };

        if !response.status().is_success() {
            last_error = Some(format!(
                "下载运行时资源失败: HTTP {} ({})",
                response.status(),
                url
            ));
            continue;
        }

        let mut file = File::create(&temp_path).map_err(|e| {
            format!(
                "创建运行时资源临时文件失败: {} ({})",
                temp_path.display(),
                e
            )
        })?;
        let mut downloaded_bytes = 0_u64;
        let mut stream = response.bytes_stream();
        let mut stream_error: Option<String> = None;

        while let Some(chunk) = stream.next().await {
            match chunk {
                Ok(chunk) => {
                    downloaded_bytes += chunk.len() as u64;
                    file.write_all(&chunk).map_err(|e| {
                        format!("写入运行时资源文件失败: {} ({})", temp_path.display(), e)
                    })?;
                }
                Err(error) => {
                    stream_error = Some(format!("读取运行时资源失败: {} ({})", url, error));
                    break;
                }
            }
        }

        if let Some(error) = stream_error {
            let _ = fs::remove_file(&temp_path);
            last_error = Some(error);
            continue;
        }

        if downloaded_bytes == 0 {
            let _ = fs::remove_file(&temp_path);
            last_error = Some(format!("运行时资源内容为空: {}", url));
            continue;
        }

        fs::rename(&temp_path, target_path)
            .map_err(|e| format!("保存运行时资源文件失败: {} ({})", target_path.display(), e))?;
        info!(
            "✅ [Plugin] installed translation offline runtime file {} bytes={}",
            file_name, downloaded_bytes
        );
        return Ok(());
    }

    Err(last_error.unwrap_or_else(|| format!("下载运行时资源失败: {}", file_name)))
}

fn translation_runtime_wasm_fallback_target_dirs() -> Vec<PathBuf> {
    let mut target_dirs = Vec::new();

    if let Ok(exe_path) = std::env::current_exe() {
        if let Some(exe_dir) = exe_path.parent() {
            target_dirs.push(exe_dir.to_path_buf());
        }
    }

    if let Ok(current_dir) = std::env::current_dir() {
        target_dirs.push(current_dir);
    }

    target_dirs.sort();
    target_dirs.dedup();
    target_dirs
}

fn sync_translation_runtime_wasm_fallbacks(runtime_dir: &Path) {
    sync_translation_runtime_wasm_fallbacks_to_dirs(
        runtime_dir,
        translation_runtime_wasm_fallback_target_dirs(),
    );
}

fn sync_translation_runtime_wasm_fallbacks_to_dirs<I>(runtime_dir: &Path, target_dirs: I)
where
    I: IntoIterator<Item = PathBuf>,
{
    for target_dir in target_dirs {
        if !target_dir.is_dir() {
            warn!(
                "[Plugin] skip translation offline wasm fallback target because it is not a directory: {}",
                target_dir.display()
            );
            continue;
        }

        for file_name in TRANSLATION_OFFLINE_RUNTIME_FILES {
            if !file_name.ends_with(".wasm") {
                continue;
            }

            let source_path = runtime_dir.join(file_name);
            if !source_path.is_file() {
                continue;
            }

            let target_path = target_dir.join(file_name);
            if target_path == source_path {
                continue;
            }

            let needs_copy = fs::metadata(&target_path)
                .and_then(|target| {
                    fs::metadata(&source_path)
                        .map(|source| target.len() == 0 || target.len() != source.len())
                })
                .unwrap_or(true);

            if needs_copy {
                if let Err(error) = fs::copy(&source_path, &target_path) {
                    warn!(
                        "[Plugin] skip translation offline wasm fallback copy {} -> {}: {}",
                        source_path.display(),
                        target_path.display(),
                        error
                    );
                    continue;
                }
                info!(
                    "[Plugin] synced translation offline wasm fallback {} -> {}",
                    file_name,
                    target_path.display()
                );
            }
        }
    }
}

#[command]
pub async fn install_translation_offline_runtime_resources(
    app_handle: AppHandle,
) -> Result<(), String> {
    let package_dir = local_plugin_package_dir(&app_handle, TRANSLATION_OFFLINE_RUNTIME_PLUGIN_ID)
        .map_err(|_| "请先安装 translation-offline-runtime 插件资源包".to_string())?;
    let manifest_path = package_dir.join("plugin.json");
    if !manifest_path.is_file() {
        return Err("translation-offline-runtime 插件资源包缺少 plugin.json".to_string());
    }

    let runtime_dir = package_dir.join("resources").join("transformers");
    fs::create_dir_all(&runtime_dir).map_err(|e| {
        format!(
            "创建离线翻译运行时资源目录失败: {} ({})",
            runtime_dir.display(),
            e
        )
    })?;

    let client = reqwest::Client::builder()
        .user_agent("snippets-code-translation-runtime-installer")
        .connect_timeout(Duration::from_secs(20))
        .timeout(Duration::from_secs(240))
        .redirect(reqwest::redirect::Policy::limited(10))
        .build()
        .map_err(|e| format!("创建运行时资源下载客户端失败: {}", e))?;

    for file_name in TRANSLATION_OFFLINE_RUNTIME_FILES {
        let target_path = runtime_dir.join(file_name);
        if target_path.is_file()
            && fs::metadata(&target_path)
                .map(|metadata| metadata.len() > 0)
                .unwrap_or(false)
        {
            continue;
        }
        download_translation_runtime_file(&client, file_name, &target_path).await?;
    }

    let missing_runtime_files = TRANSLATION_OFFLINE_RUNTIME_FILES
        .iter()
        .filter(|file_name| {
            let path = runtime_dir.join(file_name);
            !path.is_file()
                || fs::metadata(&path)
                    .map(|metadata| metadata.len() == 0)
                    .unwrap_or(true)
        })
        .copied()
        .collect::<Vec<_>>();
    if !missing_runtime_files.is_empty() {
        return Err(format!(
            "离线翻译运行时安装不完整，仍缺少资源文件: {}",
            missing_runtime_files.join(", ")
        ));
    }

    sync_translation_runtime_wasm_fallbacks(&runtime_dir);

    Ok(())
}
