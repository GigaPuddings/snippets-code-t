use base64::{engine::general_purpose::STANDARD, Engine};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::io::{Cursor, Write};
use std::path::Path;
use std::process::{Command, Stdio};
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};
use tauri::Manager;

const CACHE_TTL: u64 = 7 * 24 * 60 * 60;
const MAX_IMAGE_BYTES: usize = 1024 * 1024;

#[derive(Clone, Serialize, Deserialize)]
pub struct GitHubAccountProfile {
    login: String,
    name: Option<String>,
    avatar_data_url: String,
}

#[derive(Serialize, Deserialize)]
struct CachedProfile {
    credential_hash: String,
    cached_at: u64,
    profile: GitHubAccountProfile,
}

#[derive(Deserialize)]
struct GitHubUser {
    login: String,
    name: Option<String>,
    avatar_url: String,
}

fn github_remote_url(remote: &str) -> Option<url::Url> {
    let remote = if let Some(path) = remote.strip_prefix("git@github.com:") {
        format!("https://github.com/{path}")
    } else {
        remote.to_string()
    };
    let url = url::Url::parse(&remote).ok()?;
    if url.host_str()? != "github.com" || !matches!(url.scheme(), "https" | "ssh") {
        return None;
    }
    url::Url::parse(&format!("https://github.com{}", url.path())).ok()
}

// Credential helpers must never open a login dialog during a background refresh.
// Only stdout is captured; it is never logged or sent to the webview.
fn command_secret(mut command: Command, input: Option<&str>) -> Option<String> {
    let mut child = command
        .env("GIT_TERMINAL_PROMPT", "0")
        .env("GCM_INTERACTIVE", "never")
        .stdin(Stdio::piped())
        .stdout(Stdio::piped())
        .stderr(Stdio::null())
        .spawn()
        .ok()?;
    if let Some(mut stdin) = child.stdin.take() {
        if let Some(input) = input {
            if stdin.write_all(input.as_bytes()).is_err() {
                let _ = child.kill();
                let _ = child.wait();
                return None;
            }
        }
    }
    let deadline = Instant::now() + Duration::from_secs(5);
    loop {
        match child.try_wait() {
            Ok(Some(_)) => break,
            Ok(None) if Instant::now() < deadline => {
                std::thread::sleep(Duration::from_millis(25));
            }
            _ => {
                let _ = child.kill();
                let _ = child.wait();
                return None;
            }
        }
    }
    let output = child.wait_with_output().ok()?;
    output
        .status
        .success()
        .then(|| String::from_utf8_lossy(&output.stdout).trim().to_string())
}

fn account_credential(workspace: &Path, remote: &url::Url) -> Option<String> {
    let mut git = crate::git_common::git_command();
    git.current_dir(workspace)
        .args(["-c", "credential.interactive=false", "credential", "fill"]);
    let input = format!("url={}\n\n", remote.as_str());
    if let Some(output) = command_secret(git, Some(&input)) {
        if let Some(token) = output
            .lines()
            .find_map(|line| line.strip_prefix("password="))
        {
            if !token.is_empty() {
                return Some(token.to_string());
            }
        }
    }
    // SSH workspaces can use a GitHub CLI login, without treating the repo owner as the user.
    let mut gh = Command::new("gh");
    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        gh.creation_flags(0x08000000);
    }
    gh.args(["auth", "token", "--hostname", "github.com"]);
    command_secret(gh, None).filter(|token| !token.is_empty())
}

fn credential_hash(token: &str) -> String {
    hex::encode(Sha256::digest(token.as_bytes()))
}

fn read_cache(path: &Path, hash: &str) -> Option<CachedProfile> {
    if std::fs::metadata(path).ok()?.len() > (MAX_IMAGE_BYTES * 2) as u64 {
        return None;
    }
    let cached: CachedProfile = serde_json::from_slice(&std::fs::read(path).ok()?).ok()?;
    (cached.credential_hash == hash
        && !cached.profile.login.is_empty()
        && cached
            .profile
            .avatar_data_url
            .starts_with("data:image/png;base64,"))
    .then_some(cached)
}

fn avatar_url(source: &str) -> Option<url::Url> {
    let mut url = url::Url::parse(source).ok()?;
    if url.scheme() != "https" || url.host_str()? != "avatars.githubusercontent.com" {
        return None;
    }
    url.query_pairs_mut().append_pair("s", "128");
    Some(url)
}

async fn fetch_profile(token: &str) -> Result<Option<GitHubAccountProfile>, ()> {
    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(10))
        .redirect(reqwest::redirect::Policy::none())
        .user_agent("Snippets-Code")
        .build()
        .map_err(|_| ())?;
    let response = client
        .get("https://api.github.com/user")
        .bearer_auth(token)
        .header("Accept", "application/vnd.github+json")
        .header("X-GitHub-Api-Version", "2026-03-10")
        .send()
        .await
        .map_err(|_| ())?;
    if response.status() == reqwest::StatusCode::UNAUTHORIZED {
        return Ok(None);
    }
    let user: GitHubUser = response
        .error_for_status()
        .map_err(|_| ())?
        .json()
        .await
        .map_err(|_| ())?;
    let source = avatar_url(&user.avatar_url).ok_or(())?;
    // Do not attach the credential to avatar requests.
    let mut response = client
        .get(source)
        .send()
        .await
        .map_err(|_| ())?
        .error_for_status()
        .map_err(|_| ())?;
    let mut bytes = Vec::new();
    while let Some(chunk) = response.chunk().await.map_err(|_| ())? {
        if bytes.len() + chunk.len() > MAX_IMAGE_BYTES {
            return Err(());
        }
        bytes.extend_from_slice(&chunk);
    }
    let mut reader = image::ImageReader::new(Cursor::new(bytes))
        .with_guessed_format()
        .map_err(|_| ())?;
    let mut limits = image::Limits::default();
    limits.max_image_width = Some(2048);
    limits.max_image_height = Some(2048);
    reader.limits(limits);
    let avatar = reader.decode().map_err(|_| ())?.thumbnail(128, 128);
    let mut png = Cursor::new(Vec::new());
    avatar
        .write_to(&mut png, image::ImageFormat::Png)
        .map_err(|_| ())?;
    Ok(Some(GitHubAccountProfile {
        login: user.login,
        name: user.name,
        avatar_data_url: format!(
            "data:image/png;base64,{}",
            STANDARD.encode(png.into_inner())
        ),
    }))
}

#[tauri::command]
pub async fn get_github_account_profile_command(
    app_handle: tauri::AppHandle,
    window: tauri::WebviewWindow,
) -> Result<Option<GitHubAccountProfile>, String> {
    if window.label() != "config" {
        return Err("仅配置窗口可读取账户头像".to_string());
    }
    super::commands::require_git_sync_plugin(&app_handle)?;
    let Some(workspace) = crate::json_config::get_workspace_root(&app_handle)? else {
        return Ok(None);
    };
    let remote = super::get_workspace_git_config(Some(&workspace))?.remote_url;
    let Some(remote) = remote.as_deref().and_then(github_remote_url) else {
        return Ok(None);
    };
    let token =
        tauri::async_runtime::spawn_blocking(move || account_credential(&workspace, &remote))
            .await
            .map_err(|_| "读取账户失败".to_string())?;
    let Some(token) = token else {
        return Ok(None);
    };
    let hash = credential_hash(&token);
    let directory = app_handle
        .path()
        .app_cache_dir()
        .map_err(|_| "缓存目录不可用".to_string())?
        .join("github-account");
    let cache_path = directory.join(format!("{hash}.json"));
    let cached = read_cache(&cache_path, &hash);
    let now = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();
    if let Some(ref cached) = cached {
        if now.saturating_sub(cached.cached_at) < CACHE_TTL {
            return Ok(Some(cached.profile.clone()));
        }
    }
    match fetch_profile(&token).await {
        Ok(Some(profile)) => {
            // Cache public profile fields and normalized image bytes, never the token.
            if std::fs::create_dir_all(&directory).is_ok() {
                let value = CachedProfile {
                    credential_hash: hash,
                    cached_at: now,
                    profile: profile.clone(),
                };
                if let Ok(data) = serde_json::to_vec(&value) {
                    let _ = std::fs::write(cache_path, data);
                }
            }
            Ok(Some(profile))
        }
        Ok(None) => {
            let _ = std::fs::remove_file(cache_path);
            Ok(None)
        }
        Err(()) => Ok(cached.map(|cached| cached.profile)),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn github_remote_accepts_https_and_ssh_without_using_repository_owner() {
        for remote in [
            "https://github.com/team/repo.git",
            "git@github.com:team/repo.git",
            "ssh://git@github.com/team/repo.git",
        ] {
            let parsed = github_remote_url(remote).unwrap();
            assert_eq!(parsed.host_str(), Some("github.com"));
            assert_eq!(parsed.scheme(), "https");
            assert!(parsed.username().is_empty());
        }
        assert!(github_remote_url("https://github.com.evil.test/team/repo").is_none());
        assert!(github_remote_url("http://github.com/team/repo").is_none());
    }

    #[test]
    fn cache_is_account_bound_and_does_not_store_credentials() {
        let token = "test-only-token";
        let hash = credential_hash(token);
        let path =
            std::env::temp_dir().join(format!("snippets-avatar-{}.json", uuid::Uuid::new_v4()));
        let cached = CachedProfile {
            credential_hash: hash.clone(),
            cached_at: 1,
            profile: GitHubAccountProfile {
                login: "account-a".into(),
                name: None,
                avatar_data_url: "data:image/png;base64,test".into(),
            },
        };
        let bytes = serde_json::to_vec(&cached).unwrap();
        assert!(!String::from_utf8_lossy(&bytes).contains(token));
        std::fs::write(&path, bytes).unwrap();
        assert!(read_cache(&path, &hash).is_some());
        assert!(read_cache(&path, &credential_hash("another-token")).is_none());
        std::fs::write(&path, "broken-json").unwrap();
        assert!(read_cache(&path, &hash).is_none());
        std::fs::remove_file(path).unwrap();
    }

    #[test]
    fn avatar_downloads_are_limited_to_the_github_avatar_host() {
        assert!(avatar_url("https://avatars.githubusercontent.com/u/1?v=4").is_some());
        assert!(avatar_url("https://example.com/avatar.png").is_none());
        assert!(avatar_url("http://avatars.githubusercontent.com/u/1").is_none());
    }
}
