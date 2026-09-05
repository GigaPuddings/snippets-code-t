//! Remote package transport, mirror fallback, integrity, and marketplace fetch.
use super::integrity::{normalize_plugin_package_sha256, verify_plugin_package_sha256};
use super::package_paths::create_plugin_install_temp_dir;
use super::progress::emit_plugin_install_progress;
use futures::StreamExt;
use log::{debug, warn};
use std::error::Error as StdError;
use std::fs::{self, File};
use std::io::Write;
use std::path::PathBuf;
use std::time::{Duration, Instant};
use tauri::{command, AppHandle};

fn validate_plugin_remote_url(value: &str) -> Result<(), String> {
    let url = url::Url::parse(value).map_err(|e| format!("插件 URL 无效: {}", e))?;
    match url.scheme() {
        "https" => Ok(()),
        "http" if matches!(url.host_str(), Some("localhost" | "127.0.0.1" | "::1")) => Ok(()),
        _ => Err("插件 URL 仅允许 https，或本地开发 http://localhost".to_string()),
    }
}

fn reqwest_error_details(error: &reqwest::Error) -> String {
    let mut details = error.to_string();
    let mut source = error.source();
    while let Some(cause) = source {
        details.push_str(": ");
        details.push_str(&cause.to_string());
        source = cause.source();
    }
    details
}

fn github_codeload_fallback_url(package_url: &str) -> Option<String> {
    let url = url::Url::parse(package_url).ok()?;
    if url.scheme() != "https" || url.host_str() != Some("github.com") {
        return None;
    }

    let segments: Vec<_> = url.path_segments()?.collect();
    if segments.len() < 6 || segments[2] != "archive" || segments[3] != "refs" {
        return None;
    }

    let ref_kind = segments[4];
    if ref_kind != "tags" && ref_kind != "heads" {
        return None;
    }

    let mut ref_name = segments[5..].join("/");
    if let Some(stripped) = ref_name.strip_suffix(".zip") {
        ref_name = stripped.to_string();
    }
    if ref_name.is_empty() {
        return None;
    }

    Some(format!(
        "https://codeload.github.com/{}/{}/zip/refs/{}/{}",
        segments[0], segments[1], ref_kind, ref_name
    ))
}

fn plugin_package_download_urls(package_url: &str) -> Vec<String> {
    let mut urls = Vec::new();
    if let Some(fallback_url) = github_codeload_fallback_url(package_url) {
        urls.push(fallback_url);
    }
    if !urls.iter().any(|url| url == package_url) {
        urls.push(package_url.to_string());
    }
    urls
}

fn plugin_download_total_bytes(
    response_content_length: Option<u64>,
    expected_size_bytes: Option<u64>,
) -> Option<u64> {
    response_content_length
        .filter(|size| *size > 0)
        .or_else(|| expected_size_bytes.filter(|size| *size > 0))
}

pub(super) async fn download_plugin_url_to_temp(
    app_handle: &AppHandle,
    package_url: &str,
    expected_size_bytes: Option<u64>,
    expected_sha256: Option<String>,
    mirror_urls: &[String],
) -> Result<PathBuf, String> {
    validate_plugin_remote_url(package_url)?;
    let mut download_urls = plugin_package_download_urls(package_url);
    for mirror_url in mirror_urls {
        if validate_plugin_remote_url(mirror_url).is_ok() && !download_urls.contains(mirror_url) {
            download_urls.push(mirror_url.clone());
        }
    }
    for download_url in &download_urls {
        validate_plugin_remote_url(download_url)?;
    }

    let expected_sha256 = expected_sha256
        .as_deref()
        .map(normalize_plugin_package_sha256)
        .transpose()?;
    let temp_dir = create_plugin_install_temp_dir(app_handle)?;
    let temp_file = temp_dir.join("package.zip");
    let expected_size_bytes = expected_size_bytes.filter(|size| *size > 0);
    let result = async {
        debug!("[Plugin] downloading remote package {}", package_url);
        emit_plugin_install_progress(
            app_handle,
            package_url,
            "downloading",
            0,
            expected_size_bytes,
        );

        let client = reqwest::Client::builder()
            .user_agent("snippets-code-plugin-installer")
            .connect_timeout(Duration::from_secs(20))
            .redirect(reqwest::redirect::Policy::limited(10))
            .build()
            .map_err(|e| format!("创建插件下载客户端失败: {}", e))?;
        let mut last_error: Option<String> = None;
        const MAX_DOWNLOAD_ATTEMPTS: usize = 3;

        for download_url in &download_urls {
            for attempt in 1..=MAX_DOWNLOAD_ATTEMPTS {
                if download_url != package_url || attempt > 1 {
                    debug!(
                        "[Plugin] retrying remote package download url={} attempt={}/{}",
                        download_url, attempt, MAX_DOWNLOAD_ATTEMPTS
                    );
                    emit_plugin_install_progress(
                        app_handle,
                        package_url,
                        "downloading",
                        0,
                        expected_size_bytes,
                    );
                }

                let response = match tokio::time::timeout(
                    Duration::from_secs(60),
                    client.get(download_url).send(),
                )
                .await
                {
                    Ok(Ok(response)) => response,
                    Ok(Err(error)) => {
                        let message = format!(
                            "请求插件包失败: {} ({})",
                            download_url,
                            reqwest_error_details(&error)
                        );
                        warn!(
                            "[Plugin] download request failed url={} attempt={}/{} error={}",
                            download_url, attempt, MAX_DOWNLOAD_ATTEMPTS, message
                        );
                        last_error = Some(message);
                        tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                        continue;
                    }
                    Err(_) => {
                        let message = format!(
                            "请求插件包超时: {} (60 秒内未收到响应)",
                            download_url
                        );
                        warn!(
                            "[Plugin] download response timed out url={} attempt={}/{}",
                            download_url, attempt, MAX_DOWNLOAD_ATTEMPTS
                        );
                        last_error = Some(message);
                        tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                        continue;
                    }
                };

                if !response.status().is_success() {
                    let message = format!(
                        "下载插件失败: HTTP {} ({})",
                        response.status(),
                        download_url
                    );
                    warn!(
                        "[Plugin] download response failed url={} attempt={}/{} status={}",
                        download_url,
                        attempt,
                        MAX_DOWNLOAD_ATTEMPTS,
                        response.status()
                    );
                    last_error = Some(message);
                    tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                    continue;
                }

                let total_bytes =
                    plugin_download_total_bytes(response.content_length(), expected_size_bytes);
                emit_plugin_install_progress(
                    app_handle,
                    package_url,
                    "downloading",
                    0,
                    total_bytes,
                );

                let content_type = response
                    .headers()
                    .get(reqwest::header::CONTENT_TYPE)
                    .and_then(|value| value.to_str().ok())
                    .unwrap_or_default()
                    .to_ascii_lowercase();
                if !content_type.is_empty()
                    && !content_type.contains("zip")
                    && !content_type.contains("octet-stream")
                {
                    warn!(
                        "[Plugin] remote package content-type looks unusual: {}",
                        content_type
                    );
                }

                let mut file = File::create(&temp_file).map_err(|e| {
                    format!("创建插件下载临时文件失败: {} ({})", temp_file.display(), e)
                })?;
                let mut downloaded_bytes = 0_u64;
                let mut last_emitted_bytes = 0_u64;
                let mut last_emitted_at = Instant::now();
                let mut stream = response.bytes_stream();
                let mut stream_failed = false;

                loop {
                    let next_chunk = match tokio::time::timeout(
                        Duration::from_secs(90),
                        stream.next(),
                    )
                    .await
                    {
                        Ok(next_chunk) => next_chunk,
                        Err(_) => {
                            let message = format!(
                                "读取插件下载内容超时: {} (90 秒内未收到新数据)",
                                download_url
                            );
                            warn!(
                                "[Plugin] download stream stalled url={} attempt={}/{} downloaded={} error={}",
                                download_url,
                                attempt,
                                MAX_DOWNLOAD_ATTEMPTS,
                                downloaded_bytes,
                                message
                            );
                            last_error = Some(message);
                            stream_failed = true;
                            break;
                        }
                    };
                    let Some(chunk) = next_chunk else {
                        break;
                    };
                    let chunk = match chunk {
                        Ok(chunk) => chunk,
                        Err(error) => {
                            let message = format!(
                                "读取插件下载内容失败: {} ({})",
                                download_url,
                                reqwest_error_details(&error)
                            );
                            warn!(
                                "[Plugin] download stream failed url={} attempt={}/{} error={}",
                                download_url, attempt, MAX_DOWNLOAD_ATTEMPTS, message
                            );
                            last_error = Some(message);
                            stream_failed = true;
                            break;
                        }
                    };
                    file.write_all(&chunk).map_err(|e| {
                        format!("写入插件下载临时文件失败: {} ({})", temp_file.display(), e)
                    })?;
                    downloaded_bytes += chunk.len() as u64;

                    let download_complete = total_bytes
                        .map(|total| downloaded_bytes >= total)
                        .unwrap_or(false);
                    if download_complete
                        || (downloaded_bytes.saturating_sub(last_emitted_bytes) >= 512 * 1024
                            && last_emitted_at.elapsed() >= Duration::from_millis(250))
                    {
                        last_emitted_bytes = downloaded_bytes;
                        last_emitted_at = Instant::now();
                        emit_plugin_install_progress(
                            app_handle,
                            package_url,
                            "downloading",
                            downloaded_bytes,
                            total_bytes,
                        );
                    }
                }

                if stream_failed {
                    tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                    continue;
                }

                if downloaded_bytes == 0 {
                    last_error = Some(format!("插件下载内容为空 ({})", download_url));
                    tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                    continue;
                }

                file.flush().map_err(|e| {
                    format!("保存插件下载临时文件失败: {} ({})", temp_file.display(), e)
                })?;
                drop(file);

                if let Err(error) =
                    verify_plugin_package_sha256(&temp_file, expected_sha256.as_deref())
                {
                    let _ = fs::remove_file(&temp_file);
                    let message = format!("{} ({})", error, download_url);
                    warn!(
                        "[Plugin] download integrity check failed url={} attempt={}/{} error={}",
                        download_url, attempt, MAX_DOWNLOAD_ATTEMPTS, message
                    );
                    last_error = Some(message);
                    tokio::time::sleep(Duration::from_millis(500 * attempt as u64)).await;
                    continue;
                }

                emit_plugin_install_progress(
                    app_handle,
                    package_url,
                    "downloaded",
                    downloaded_bytes,
                    Some(downloaded_bytes),
                );
                return Ok(temp_file.clone());
            }
        }

        Err(format!(
            "下载插件失败，已尝试 {} 个地址: {}",
            download_urls.len(),
            last_error.unwrap_or_else(|| "未知错误".to_string())
        ))
    }
    .await;

    match result {
        Ok(path) => Ok(path),
        Err(error) => {
            let _ = fs::remove_dir_all(temp_dir);
            Err(error)
        }
    }
}

#[command]
pub async fn fetch_plugin_marketplace(
    marketplace_url: String,
) -> Result<serde_json::Value, String> {
    validate_plugin_remote_url(&marketplace_url)?;
    let client = reqwest::Client::builder()
        .user_agent("snippets-code-plugin-marketplace")
        .build()
        .map_err(|e| format!("创建插件市场客户端失败: {}", e))?;
    let response = client
        .get(&marketplace_url)
        .header(reqwest::header::CACHE_CONTROL, "no-cache")
        .header(reqwest::header::PRAGMA, "no-cache")
        .send()
        .await
        .map_err(|e| format!("获取插件市场失败: {}", e))?;

    if !response.status().is_success() {
        return Err(format!("获取插件市场失败: HTTP {}", response.status()));
    }

    let marketplace = response
        .json::<serde_json::Value>()
        .await
        .map_err(|e| format!("解析插件市场失败: {}", e))?;

    if marketplace
        .get("schemaVersion")
        .and_then(|value| value.as_i64())
        != Some(1)
    {
        return Err("插件市场 schemaVersion 必须为 1".to_string());
    }

    Ok(marketplace)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn plugin_download_uses_expected_size_without_content_length() {
        assert_eq!(
            plugin_download_total_bytes(None, Some(1_000_000_000)),
            Some(1_000_000_000)
        );
        assert_eq!(
            plugin_download_total_bytes(Some(800), Some(1_000)),
            Some(800)
        );
    }

    #[test]
    fn plugin_package_sha256_must_be_hex() {
        assert!(normalize_plugin_package_sha256(&"a".repeat(64)).is_ok());
        assert!(normalize_plugin_package_sha256("not-a-sha").is_err());
    }

    #[test]
    fn plugin_package_sha256_verification_rejects_mismatch() {
        let path = std::env::temp_dir().join(format!(
            "snippets-code-plugin-sha-test-{}.zip",
            std::process::id()
        ));
        fs::write(&path, b"plugin package").expect("test package should be written");

        let result = verify_plugin_package_sha256(&path, Some(&"0".repeat(64)));
        let _ = fs::remove_file(&path);

        assert!(result.is_err());
    }
}
