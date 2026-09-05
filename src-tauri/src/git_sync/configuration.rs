use std::io::Write;
use std::path::Path;
use std::process::Stdio;

use log::{error, info, warn};
use serde::{Deserialize, Serialize};

use crate::git_common::{get_git_stderr, remove_token_from_url};

use super::repository::GitRepository;
use super::service::{get_current_branch, git_has_head};
use super::MAIN_BRANCH;

// ============= Git 检查 =============

/// 检查系统是否安装了 Git
pub fn check_git_installed() -> Result<bool, String> {
    GitRepository::is_git_available()
}

/// 检查目录是否是 Git 仓库
pub fn check_git_repo(workspace_root: &Path) -> Result<bool, String> {
    Ok(GitRepository::new(workspace_root).is_repository())
}

// ============= Git 配置 =============

/// 获取系统 Git 配置（全局和本地）
#[derive(Debug, Serialize, Deserialize)]
pub struct SystemGitConfig {
    pub global_user_name: Option<String>,
    pub global_user_email: Option<String>,
    pub local_user_name: Option<String>,
    pub local_user_email: Option<String>,
    pub remote_url: Option<String>,
}

/// 获取 Git 配置值
fn get_git_config_value(workspace_root: Option<&Path>, key: &str, global: bool) -> Option<String> {
    let mut cmd = crate::git_common::git_command();

    if global {
        cmd.args(["config", "--global", key]);
    } else {
        cmd.args(["config", "--local", key]);
        if let Some(root) = workspace_root {
            cmd.current_dir(root);
        }
    }

    match cmd.output() {
        Ok(output) if output.status.success() => {
            let value = String::from_utf8_lossy(&output.stdout).trim().to_string();
            if value.is_empty() {
                None
            } else {
                Some(value)
            }
        }
        _ => None,
    }
}

/// 从 .git/config 文件直接读取配置（更准确）
fn read_git_config_from_file(workspace_root: &Path) -> Option<SystemGitConfig> {
    let git_config_path = workspace_root.join(".git").join("config");

    if !git_config_path.exists() {
        return None;
    }

    match std::fs::read_to_string(&git_config_path) {
        Ok(content) => {
            let mut local_user_name = None;
            let mut local_user_email = None;
            let mut remote_url = None;

            let mut in_user_section = false;
            let mut in_remote_section = false;

            for line in content.lines() {
                let line = line.trim();

                // 检测 section
                if line.starts_with('[') && line.ends_with(']') {
                    in_user_section = line == "[user]";
                    in_remote_section = line.starts_with("[remote \"origin\"]");
                    continue;
                }

                // 解析配置项
                if let Some(eq_pos) = line.find('=') {
                    let key = line[..eq_pos].trim();
                    let value = line[eq_pos + 1..].trim().to_string();

                    if in_user_section {
                        match key {
                            "name" => local_user_name = Some(value),
                            "email" => local_user_email = Some(value),
                            _ => {}
                        }
                    } else if in_remote_section && key == "url" {
                        // 移除 URL 中的 token
                        let clean_url = remove_token_from_url(&value);
                        remote_url = Some(clean_url);
                    }
                }
            }

            Some(SystemGitConfig {
                global_user_name: None,
                global_user_email: None,
                local_user_name,
                local_user_email,
                remote_url,
            })
        }
        Err(e) => {
            warn!("读取 .git/config 失败: {}", e);
            None
        }
    }
}

/// 获取系统 Git 配置（含全局，可能触发终端，生产环境慎用）
pub fn get_system_git_config(workspace_root: Option<&Path>) -> Result<SystemGitConfig, String> {
    // 优先从工作区 .git/config 读取
    if let Some(root) = workspace_root {
        if let Some(mut config) = read_git_config_from_file(root) {
            // 补充全局配置
            config.global_user_name = get_git_config_value(None, "user.name", true);
            config.global_user_email = get_git_config_value(None, "user.email", true);

            info!("✅ [Git] 从 .git/config 读取配置成功");
            return Ok(config);
        }
    }

    // 如果没有 .git/config，使用 git config 命令
    let global_user_name = get_git_config_value(None, "user.name", true);
    let global_user_email = get_git_config_value(None, "user.email", true);

    let (local_user_name, local_user_email, remote_url) = if let Some(root) = workspace_root {
        let local_name = get_git_config_value(Some(root), "user.name", false);
        let local_email = get_git_config_value(Some(root), "user.email", false);

        // 获取远程仓库 URL（不带 token）
        let remote = get_git_config_value(Some(root), "remote.origin.url", false)
            .map(|url| remove_token_from_url(&url));

        (local_name, local_email, remote)
    } else {
        (None, None, None)
    };

    Ok(SystemGitConfig {
        global_user_name,
        global_user_email,
        local_user_name,
        local_user_email,
        remote_url,
    })
}

/// 仅从工作区 .git/config 读取 Git 配置，不调用系统 git config（避免生产环境终端闪退）
pub fn get_workspace_git_config(workspace_root: Option<&Path>) -> Result<SystemGitConfig, String> {
    let root = workspace_root.ok_or_else(|| "工作区未设置".to_string())?;
    match read_git_config_from_file(root) {
        Some(config) => {
            info!("✅ [Git] 从工作区 .git/config 读取配置成功");
            Ok(config)
        }
        None => Ok(SystemGitConfig {
            global_user_name: None,
            global_user_email: None,
            local_user_name: None,
            local_user_email: None,
            remote_url: None,
        }),
    }
}

/// 配置 Git 用户信息
pub fn configure_git_user(
    workspace_root: &Path,
    user_name: &str,
    user_email: &str,
) -> Result<(), String> {
    // 配置用户名
    let output = crate::git_common::git_command()
        .args(["config", "user.name", user_name])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("配置 Git 用户名失败: {}", e))?;

    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        return Err(format!("配置 Git 用户名失败: {}", error));
    }

    // 配置邮箱
    let output = crate::git_common::git_command()
        .args(["config", "user.email", user_email])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("配置 Git 邮箱失败: {}", e))?;

    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        return Err(format!("配置 Git 邮箱失败: {}", error));
    }

    info!("✅ [Git] 用户配置成功: {} <{}>", user_name, user_email);
    Ok(())
}

/// 校验 Token 有效性（仅 HTTPS + token，不修改仓库配置）
pub fn validate_token_url(workspace_root: &Path, authenticated_url: &str) -> Result<(), String> {
    let ls_output = crate::git_common::git_command()
        .args(["-c", "credential.helper=", "ls-remote", authenticated_url])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("验证远程连接失败: {}", e))?;

    if !ls_output.status.success() {
        let stderr = String::from_utf8_lossy(&ls_output.stderr).to_lowercase();
        if stderr.contains("authentication failed")
            || stderr.contains("could not read username")
            || stderr.contains("terminal prompts disabled")
            || stderr.contains("invalid username or password")
            || stderr.contains("invalid username or token")
            || stderr.contains("support for password authentication was removed")
            || stderr.contains("401")
            || stderr.contains("403")
            || stderr.contains("missing or invalid credentials")
            || (stderr.contains("repository not found") && stderr.contains("remote:"))
        {
            error!("❌ [Git] Token 校验失败，已隐藏远程响应详情");
            return Err("GitHub Token 无效或已过期，请检查并更新 Token 后重试".to_string());
        }
        warn!("⚠️ [Git] ls-remote 失败（可能为网络或仓库不存在），已隐藏远程响应详情");
    } else {
        info!("✅ [Git] Token 校验通过");
    }
    Ok(())
}

pub(crate) fn build_authenticated_url(remote_url: &str, token: &str) -> String {
    if remote_url.starts_with("git@") || token.is_empty() {
        return remote_url.to_string();
    }

    if let Some(idx) = remote_url.find("://") {
        let protocol = &remote_url[..idx + 3];
        let rest = &remote_url[idx + 3..];
        format!("{}{}@{}", protocol, token, rest)
    } else {
        remote_url.to_string()
    }
}

fn set_credential_use_http_path(workspace_root: &Path) {
    let output = crate::git_common::git_command()
        .args(["config", "credential.useHttpPath", "true"])
        .current_dir(workspace_root)
        .output();

    if let Err(e) = output {
        warn!("⚠️ [Git] 设置 credential.useHttpPath 失败: {}", e);
    }
}

/// 将 HTTPS token 交给系统 Git credential helper，避免写入 app.json 或 .git/config。
pub fn store_git_credentials(
    workspace_root: &Path,
    remote_url: &str,
    token: &str,
) -> Result<(), String> {
    if !remote_url.starts_with("http://") && !remote_url.starts_with("https://") {
        return Ok(());
    }

    if token.is_empty() {
        return Ok(());
    }

    let url = url::Url::parse(remote_url).map_err(|e| format!("解析远程仓库 URL 失败: {}", e))?;
    let Some(host) = url.host_str() else {
        return Err("远程仓库 URL 缺少主机名".to_string());
    };

    let path = url.path().trim_start_matches('/');
    let input = format!(
        "protocol={}\nhost={}\npath={}\nusername=x-access-token\npassword={}\n\n",
        url.scheme(),
        host,
        path,
        token
    );

    let mut child = crate::git_common::git_command()
        .args(["credential", "approve"])
        .current_dir(workspace_root)
        .stdin(Stdio::piped())
        .stdout(Stdio::null())
        .stderr(Stdio::piped())
        .spawn()
        .map_err(|e| format!("保存 Git 凭据失败: {}", e))?;

    if let Some(stdin) = child.stdin.as_mut() {
        stdin
            .write_all(input.as_bytes())
            .map_err(|e| format!("写入 Git 凭据失败: {}", e))?;
    }

    let output = child
        .wait_with_output()
        .map_err(|e| format!("保存 Git 凭据失败: {}", e))?;

    if !output.status.success() {
        return Err("保存 Git 凭据失败，请检查系统 Git credential helper 配置".to_string());
    }

    Ok(())
}

/// 配置远程仓库（remote 仅保存干净 URL，token 交给 credential helper）
pub fn configure_remote(
    workspace_root: &Path,
    remote_url: &str,
    token: &str,
) -> Result<(), String> {
    let clean_remote_url = remove_token_from_url(remote_url);
    let authenticated_url = build_authenticated_url(&clean_remote_url, token);

    // 先校验 Token（不修改仓库），失败则直接返回，避免将无效 URL 写入 .git/config
    if clean_remote_url.starts_with("https://") && !token.is_empty() {
        validate_token_url(workspace_root, &authenticated_url)?;
        set_credential_use_http_path(workspace_root);
        store_git_credentials(workspace_root, &clean_remote_url, token)?;
    }

    // 检查是否已有 origin
    let check_output = crate::git_common::git_command()
        .args(["remote", "get-url", "origin"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("检查远程仓库失败: {}", e))?;

    let command = if check_output.status.success() {
        vec!["remote", "set-url", "origin", &clean_remote_url]
    } else {
        vec!["remote", "add", "origin", &clean_remote_url]
    };

    let output = crate::git_common::git_command()
        .args(&command)
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("配置远程仓库失败: {}", e))?;

    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        return Err(format!("配置远程仓库失败: {}", error));
    }

    info!("✅ [Git] 远程仓库配置成功");

    // 获取当前分支名。新初始化但尚未提交的仓库没有 HEAD，此时直接对齐唯一主分支 main。
    let mut branch = get_current_branch(workspace_root)?;
    if !git_has_head(workspace_root) && branch != MAIN_BRANCH {
        let target_ref = format!("refs/heads/{}", MAIN_BRANCH);
        let switch_output = crate::git_common::git_command()
            .args(["symbolic-ref", "HEAD", &target_ref])
            .current_dir(workspace_root)
            .output();

        match switch_output {
            Ok(output) if output.status.success() => {
                info!(
                    "ℹ️ [Git] 本地仓库尚无提交，已将当前分支从 {} 对齐到 {}",
                    branch, MAIN_BRANCH
                );
                branch = MAIN_BRANCH.to_string();
            }
            Ok(output) => {
                warn!("⚠️ [Git] 对齐 main 分支失败: {}", get_git_stderr(&output));
            }
            Err(e) => {
                warn!("⚠️ [Git] 对齐 main 分支执行失败: {}", e);
            }
        }
    }

    if !branch.is_empty() {
        // 设置上游分支
        let upstream_output = crate::git_common::git_command()
            .args([
                "branch",
                &format!("--set-upstream-to=origin/{}", branch),
                &branch,
            ])
            .current_dir(workspace_root)
            .output();

        match upstream_output {
            Ok(output) if output.status.success() => {
                info!("✅ [Git] 上游分支设置成功: origin/{}", branch);
            }
            Ok(output) => {
                let error = get_git_stderr(&output);
                // 如果远程分支不存在或没有提交，这是正常的（首次推送前）
                if error.contains("does not exist") || error.contains("no commit") {
                    info!("ℹ️ [Git] 远程分支尚不存在或无提交，首次推送时会自动创建");
                } else {
                    warn!("⚠️ [Git] 设置上游分支失败: {}", error);
                }
            }
            Err(e) => {
                warn!("⚠️ [Git] 设置上游分支失败: {}", e);
            }
        }
    }

    Ok(())
}
