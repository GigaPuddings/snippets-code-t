// Git 同步模块
// 使用系统 Git 命令实现同步功能

use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use std::process::Command;
use std::sync::{Arc, Mutex};
use std::sync::RwLock as StdRwLock;
use log::{info, warn, error};
use tauri::{Manager, Emitter};
use crate::git_common::decode_git_quoted_path;
use crate::git_common::remove_token_from_url;
use crate::git_common::run_git_command;
use crate::git_common::is_git_success;
use crate::git_common::get_git_stdout;
use crate::git_common::get_git_stderr;
use crate::git_common::parse_git_file_count_output;

// ============= 数据结构 =============

/// Git 配置
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitConfig {
    pub user_name: String,
    pub user_email: String,
    pub remote_url: String,
    pub token: String,
}

/// Pull 结果
#[derive(Debug, Serialize, Deserialize)]
pub struct PullResult {
    pub success: bool,
    pub files_updated: usize,
    pub has_conflicts: bool,
    pub conflict_files: Vec<String>,
    pub message: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub pre_pull_head: Option<String>,
    /// 未跟踪文件会被覆盖（与远程新增文件冲突）
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub untracked_files: Vec<String>,
    /// 最后同步时间
    #[serde(skip_serializing_if = "Option::is_none")]
    pub last_sync_time: Option<String>,
}

/// Push 结果
#[derive(Debug, Serialize, Deserialize)]
pub struct PushResult {
    pub success: bool,
    pub files_pushed: usize,
    pub commit_hash: String,
    pub message: String,
}

/// Git 状态
#[derive(Debug, Serialize, Deserialize)]
pub struct GitStatus {
    pub is_repo: bool,
    pub has_remote: bool,
    pub has_changes: bool,
    pub changed_files: Vec<String>,
    pub branch: String,
}

/// 将 `git status --porcelain` 的原始行转换为适合前端展示的格式
/// 主要负责解码其中的中文路径（处理 core.quotepath 导致的 \ooo 八进制转义）
fn format_git_status_line_for_display(line: &str) -> String {
    let trimmed = line.trim();
    if trimmed.len() < 3 {
        return trimmed.to_string();
    }

    // 前两列是状态（例如 " M", "??"），第三列是空格，后面是路径信息
    let (status, rest) = trimmed.split_at(2);
    let rest = rest.trim_start();

    // 处理重命名：old -> new
    if let Some(idx) = rest.find("->") {
        let (from, to) = rest.split_at(idx);
        let to = &to[2..]; // 跳过 "->"
        let from_decoded = decode_git_quoted_path(from.trim());
        let to_decoded = decode_git_quoted_path(to.trim());
        return format!("{} {} -> {}", status.trim(), from_decoded, to_decoded);
    }

    let path_decoded = decode_git_quoted_path(rest);
    if status.trim().is_empty() {
        path_decoded
    } else {
        format!("{} {}", status.trim(), path_decoded)
    }
}

/// 冲突解决策略
#[derive(Debug, Serialize, Deserialize)]
pub enum ConflictStrategy {
    KeepLocal,      // 保留本地版本
    KeepRemote,     // 保留远程版本
    DiscardLocalUntracked,  // 删除本地未跟踪文件（用于 untracked files 场景）
}

/// Git 冲突载荷 - 用于前端事件通知
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConflictPayload {
    pub conflict_files: Vec<String>,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub untracked_files: Vec<String>,
}

/// Git 仓库不存在载荷 - 用于前端事件通知
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RepoNotFoundPayload {
    pub remote_url: String,
    pub operation: String, // "pull" 或 "push"
}

// ============= Git 检查 =============

/// 检查系统是否安装了 Git
pub fn check_git_installed() -> Result<bool, String> {
    match Command::new("git").arg("--version").output() {
        Ok(output) => {
            if output.status.success() {
                let version = String::from_utf8_lossy(&output.stdout);
                info!("✅ [Git] 检测到 Git: {}", version.trim());
                Ok(true)
            } else {
                Ok(false)
            }
        }
        Err(_) => Ok(false),
    }
}

/// 检查目录是否是 Git 仓库
pub fn check_git_repo(workspace_root: &Path) -> Result<bool, String> {
    let git_dir = workspace_root.join(".git");
    Ok(git_dir.exists() && git_dir.is_dir())
}

/// 检查是否配置了远程仓库
pub fn check_remote_configured(workspace_root: &Path) -> Result<bool, String> {
    let output = Command::new("git")
        .args(&["remote", "-v"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("执行 git remote 失败: {}", e))?;
    
    if !output.status.success() {
        return Ok(false);
    }
    
    let stdout = String::from_utf8_lossy(&output.stdout);
    Ok(!stdout.trim().is_empty())
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
    let mut cmd = Command::new("git");
    
    if global {
        cmd.args(&["config", "--global", key]);
    } else {
        cmd.args(&["config", "--local", key]);
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

/// 获取系统 Git 配置
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

/// 配置 Git 用户信息
pub fn configure_git_user(workspace_root: &Path, user_name: &str, user_email: &str) -> Result<(), String> {
    // 配置用户名
    let output = Command::new("git")
        .args(&["config", "user.name", user_name])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("配置 Git 用户名失败: {}", e))?;
    
    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        return Err(format!("配置 Git 用户名失败: {}", error));
    }
    
    // 配置邮箱
    let output = Command::new("git")
        .args(&["config", "user.email", user_email])
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
fn validate_token_url(workspace_root: &Path, authenticated_url: &str) -> Result<(), String> {
    let ls_output = Command::new("git")
        .args(&["-c", "credential.helper=", "ls-remote", authenticated_url])
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
            error!("❌ [Git] Token 校验失败: {}", stderr);
            return Err("GitHub Token 无效或已过期，请检查并更新 Token 后重试".to_string());
        }
        warn!("⚠️ [Git] ls-remote 失败（可能为网络或仓库不存在）: {}", stderr);
    } else {
        info!("✅ [Git] Token 校验通过");
    }
    Ok(())
}

/// 配置远程仓库（使用 token 认证）
pub fn configure_remote(workspace_root: &Path, remote_url: &str, token: &str) -> Result<(), String> {
    // 构建带 token 的 URL（仅对 HTTPS URL）
    let authenticated_url = if remote_url.starts_with("git@") {
        // SSH 格式，不需要 token
        remote_url.to_string()
    } else if !token.is_empty() {
        // HTTPS 格式，插入 token
        if let Some(idx) = remote_url.find("://") {
            let protocol = &remote_url[..idx + 3];
            let rest = &remote_url[idx + 3..];
            format!("{}{}@{}", protocol, token, rest)
        } else {
            remote_url.to_string()
        }
    } else {
        remote_url.to_string()
    };

    // 先校验 Token（不修改仓库），失败则直接返回，避免将无效 URL 写入 .git/config
    if remote_url.starts_with("https://") && !token.is_empty() {
        validate_token_url(workspace_root, &authenticated_url)?;
    }

    // 检查是否已有 origin
    let check_output = Command::new("git")
        .args(&["remote", "get-url", "origin"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("检查远程仓库失败: {}", e))?;

    let command = if check_output.status.success() {
        vec!["remote", "set-url", "origin", &authenticated_url]
    } else {
        vec!["remote", "add", "origin", &authenticated_url]
    };

    let output = Command::new("git")
        .args(&command)
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("配置远程仓库失败: {}", e))?;

    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        return Err(format!("配置远程仓库失败: {}", error));
    }

    info!("✅ [Git] 远程仓库配置成功");

    // 获取当前分支名
    let branch = get_current_branch(workspace_root)?;

    if !branch.is_empty() && branch != "master" {
        // 设置上游分支
        let upstream_output = Command::new("git")
            .args(&["branch", &format!("--set-upstream-to=origin/{}", branch), &branch])
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

// ============= Git 操作 =============

/// 获取 Git 状态
pub fn get_git_status(workspace_root: &Path) -> Result<GitStatus, String> {
    info!(
        "📊 [Git] 开始获取 Git 状态，workspace_root: {}",
        workspace_root.display()
    );

    // 检查是否是仓库
    let is_repo = check_git_repo(workspace_root)?;
    if !is_repo {
        info!("📊 [Git] 当前工作区不是 Git 仓库");
        return Ok(GitStatus {
            is_repo: false,
            has_remote: false,
            has_changes: false,
            changed_files: vec![],
            branch: String::new(),
        });
    }
    
    // 检查远程仓库
    let has_remote = check_remote_configured(workspace_root)?;
    
    // 获取当前分支
    let branch_output = Command::new("git")
        .args(&["branch", "--show-current"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("获取分支失败: {}", e))?;
    
    let branch = if branch_output.status.success() {
        String::from_utf8_lossy(&branch_output.stdout).trim().to_string()
    } else {
        "main".to_string()
    };
    
    // 获取变更文件
    let status_output = Command::new("git")
        .args(&["status", "--porcelain"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("获取状态失败: {}", e))?;
    
    let changed_files: Vec<String> = if status_output.status.success() {
        String::from_utf8_lossy(&status_output.stdout)
            .lines()
            .map(|line| format_git_status_line_for_display(line))
            .filter(|line| !line.is_empty())
            .collect()
    } else {
        vec![]
    };
    
    let has_changes = !changed_files.is_empty();
    
    let status = GitStatus {
        is_repo,
        has_remote,
        has_changes,
        changed_files,
        branch,
    };

    info!(
        "📊 [Git] 获取 Git 状态完成: is_repo={}, has_remote={}, has_changes={}, branch={}",
        status.is_repo, status.has_remote, status.has_changes, status.branch
    );

    Ok(status)
}

/// 变更文件分类（用于增量更新）
#[derive(Debug, Default)]
struct ChangedFilesByStatus {
    created: Vec<String>,
    modified: Vec<String>,
    deleted: Vec<String>,
}

impl ChangedFilesByStatus {
    fn all(&self) -> Vec<String> {
        self.created
            .iter()
            .chain(self.modified.iter())
            .chain(self.deleted.iter())
            .cloned()
            .collect()
    }
}

/// 获取 Git Pull 后变更的文件列表（按状态分类，用于真正的增量更新）
fn get_changed_files_with_status(
    workspace_root: &Path,
    pre_pull_head: Option<&str>,
) -> Result<ChangedFilesByStatus, String> {
    let base_ref = match pre_pull_head {
        Some(hash) if !hash.is_empty() => hash.to_string(),
        _ => {
            let orig_head = Command::new("git")
                .args(&["rev-parse", "ORIG_HEAD"])
                .current_dir(workspace_root)
                .output();
            if let Ok(ref out) = orig_head {
                if out.status.success() {
                    String::from_utf8_lossy(&out.stdout).trim().to_string()
                } else {
                    "HEAD@{1}".to_string()
                }
            } else {
                "HEAD@{1}".to_string()
            }
        }
    };

    let output = Command::new("git")
        .args(&["diff", "--name-status", &base_ref, "HEAD"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("获取变更文件列表失败: {}", e))?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        warn!("⚠️ [Git] 无法获取变更文件列表 (base_ref={}): {}", base_ref, stderr);
        return Ok(ChangedFilesByStatus::default());
    }

    let stdout = String::from_utf8_lossy(&output.stdout);
    let mut result = ChangedFilesByStatus::default();

    for line in stdout.lines() {
        let parts: Vec<&str> = line.split_whitespace().collect();
        if parts.len() < 2 {
            continue;
        }
        let status = parts[0];
        let path1 = decode_git_quoted_path(parts[1]).replace('\\', "/");
        // R100 等重命名：parts[1]=旧路径, parts[2]=新路径
        match status {
            "A" => {
                if path1.ends_with(".md") {
                    result.created.push(path1);
                }
            }
            "M" => {
                if path1.ends_with(".md") {
                    result.modified.push(path1);
                }
            }
            "D" => {
                if path1.ends_with(".md") {
                    result.deleted.push(path1);
                }
            }
            _ if status.starts_with('R') && parts.len() >= 3 => {
                if path1.ends_with(".md") {
                    result.deleted.push(path1);
                }
                let path2 = decode_git_quoted_path(parts[2]).replace('\\', "/");
                if path2.ends_with(".md") {
                    result.created.push(path2);
                }
            }
            _ => {}
        }
    }

    info!(
        "📋 [Git] 变更: {} 新增, {} 修改, {} 删除 (base_ref={})",
        result.created.len(),
        result.modified.len(),
        result.deleted.len(),
        base_ref
    );
    Ok(result)
}

/// 获取 Git Pull 后变更的文件列表（扁平列表，保持向后兼容）
fn get_changed_files_after_pull(
    workspace_root: &Path,
    pre_pull_head: Option<&str>,
) -> Result<Vec<String>, String> {
    let by_status = get_changed_files_with_status(workspace_root, pre_pull_head)?;
    Ok(by_status.all())
}

/// 执行 git pull
pub async fn git_pull(workspace_root: &Path) -> Result<PullResult, String> {
    info!("🔄 [Git] 开始 pull 操作");
    
    // 记录 pull 前的 HEAD commit hash
    let pre_pull_head = Command::new("git")
        .args(&["rev-parse", "HEAD"])
        .current_dir(workspace_root)
        .output()
        .ok()
        .filter(|o| o.status.success())
        .map(|o| String::from_utf8_lossy(&o.stdout).trim().to_string());
    
    // 首先检查是否有未解决的冲突
    let conflict_files = detect_conflicts(workspace_root)?;
    if !conflict_files.is_empty() {
        warn!("⚠️ [Git] 检测到未解决的冲突文件: {:?}", conflict_files);
            return Ok(PullResult {
                success: false,
                files_updated: 0,
                has_conflicts: true,
                conflict_files,
                message: "存在未解决的冲突，请先解决冲突".to_string(),
                pre_pull_head: None,
                untracked_files: vec![],
                last_sync_time: None,
            });
    }
    
    // 获取当前分支名
    let branch = get_current_branch(workspace_root)?;

    // 执行 git pull，先 fetch 再 merge/rebase
    // 使用 --no-rebase 避免 rebase 问题
    let output = run_git_command(workspace_root, &["pull", "origin", &branch])?;

    let stdout = get_git_stdout(&output);
    let stderr = get_git_stderr(&output);
    
    if !output.status.success() {
        // 检查是否是本地有未提交的更改会被覆盖
        if stderr.contains("Your local changes to the following files would be overwritten") 
            || stderr.contains("Please commit your changes or stash them before you merge") {
            // 从错误信息中提取文件名
            let conflict_files = extract_files_from_error(&stderr);
            
            if !conflict_files.is_empty() {
                warn!("⚠️ [Git] 本地有未提交的更改会被覆盖: {:?}", conflict_files);
                return Ok(PullResult {
                    success: false,
                    files_updated: 0,
                    has_conflicts: true,
                    conflict_files,
                    message: "本地有未提交的更改会被覆盖，请先处理这些文件".to_string(),
                    pre_pull_head: None,
                    untracked_files: vec![],
                    last_sync_time: None,
                });
            }
        }

        // 检查是否是未跟踪文件会被覆盖
        // 如：The following untracked working tree files would be overwritten by merge
        if stderr.contains("untracked working tree files would be overwritten")
            || stderr.contains("The following untracked working tree files") {
            let untracked_files = extract_untracked_files_from_error(&stderr);

            if !untracked_files.is_empty() {
                warn!("⚠️ [Git] 未跟踪文件会被远程覆盖: {:?}", untracked_files);
                return Ok(PullResult {
                    success: false,
                    files_updated: 0,
                    has_conflicts: true,
                    conflict_files: vec![],
                    message: "存在未跟踪的文件会被远程覆盖，请先处理这些文件".to_string(),
                    pre_pull_head: None,
                    untracked_files,
                    last_sync_time: None,
                });
            }
        }

        // 检查是否是冲突
        if stderr.contains("CONFLICT") || stdout.contains("CONFLICT") {
            let conflict_files = detect_conflicts(workspace_root)?;
            warn!("⚠️ [Git] Pull 发生冲突，冲突文件: {:?}", conflict_files);
            return Ok(PullResult {
                success: false,
                files_updated: 0,
                has_conflicts: true,
                conflict_files,
                message: "Pull 发生冲突，请解决冲突后重试".to_string(),
                pre_pull_head: None,
                untracked_files: vec![],
                last_sync_time: None,
            });
        }
        
        // 检查是否是未解决的冲突（unmerged files）
        if stderr.contains("unmerged files") || stderr.contains("unresolved conflict") {
            let conflict_files = detect_conflicts(workspace_root)?;
            warn!("⚠️ [Git] 存在未解决的冲突: {:?}", conflict_files);
            return Ok(PullResult {
                success: false,
                files_updated: 0,
                has_conflicts: true,
                conflict_files,
                message: "存在未解决的冲突，请先解决冲突".to_string(),
                pre_pull_head: None,
                untracked_files: vec![],
                last_sync_time: None,
            });
        }
        
        // 检查是否是远程分支不存在
        if stderr.contains("couldn't find remote ref") || stderr.contains("does not exist") {
            info!("ℹ️ [Git] 远程分支不存在，可能是首次推送前");
            return Ok(PullResult {
                success: true,
                files_updated: 0,
                has_conflicts: false,
                conflict_files: vec![],
                message: "远程分支尚不存在，请先推送".to_string(),
                pre_pull_head: None,
                untracked_files: vec![],
                last_sync_time: None,
            });
        }

        // 检查是否是仓库不存在
        let stderr_lower = stderr.to_lowercase();
        if stderr_lower.contains("repository not found")
            || stderr_lower.contains("remote repository not found")
            || stderr_lower.contains("could not read remote")
            || (stderr_lower.contains("not found") && stderr_lower.contains("remote")) {
            info!("⚠️ [Git] 远程仓库不存在");
            return Ok(PullResult {
                success: false,
                files_updated: 0,
                has_conflicts: false,
                conflict_files: vec![],
                message: "remote_not_found".to_string(),
                pre_pull_head: None,
                untracked_files: vec![],
                last_sync_time: None,
            });
        }

        error!("❌ [Git] Pull 失败: {}", stderr);
        return Err(format!("git pull 失败: {}", stderr));
    }
    
    // 解析更新的文件数量
    let files_updated = parse_pull_output(&stdout);
    
    // 只有当有文件更新时才打印日志
    if files_updated > 0 {
        info!("✅ [Git] Pull 成功，更新了 {} 个文件", files_updated);
    }

    // 获取当前时间作为最后同步时间
    let last_sync_time = chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string();

    Ok(PullResult {
        success: true,
        files_updated,
        has_conflicts: false,
        conflict_files: vec![],
        message: if files_updated > 0 {
            format!("已从远程同步 {} 个文件", files_updated)
        } else {
            "已是最新版本".to_string()
        },
        pre_pull_head,
        untracked_files: vec![],
        last_sync_time: Some(last_sync_time),
    })
}

/// 执行 git push
pub async fn git_push(workspace_root: &Path, message: &str) -> Result<PushResult, String> {
    info!("🔄 [Git] 开始 push 操作");
    
    // 1. git add .
    let add_output = Command::new("git")
        .args(&["add", "."])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("git add 失败: {}", e))?;
    
    if !add_output.status.success() {
        let error = String::from_utf8_lossy(&add_output.stderr);
        error!("❌ [Git] Add 失败: {}", error);
        return Err(format!("git add 失败: {}", error));
    }
    
    // 2. 检查是否有变更
    let status = get_git_status(workspace_root)?;
    if !status.has_changes {
        info!("ℹ️ [Git] 没有变更需要提交");
        return Ok(PushResult {
            success: true,
            files_pushed: 0,
            commit_hash: String::new(),
            message: "没有变更需要提交".to_string(),
        });
    }
    
    // 3. git commit
    let commit_output = Command::new("git")
        .args(&["commit", "-m", message])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("git commit 失败: {}", e))?;
    
    if !commit_output.status.success() {
        let error = String::from_utf8_lossy(&commit_output.stderr);
        // 如果是 "nothing to commit" 不算错误
        if error.contains("nothing to commit") {
            info!("ℹ️ [Git] 没有变更需要提交");
            return Ok(PushResult {
                success: true,
                files_pushed: 0,
                commit_hash: String::new(),
                message: "没有变更需要提交".to_string(),
            });
        }
        error!("❌ [Git] Commit 失败: {}", error);
        return Err(format!("git commit 失败: {}", error));
    }
    
    let commit_stdout = get_git_stdout(&commit_output);
    let files_pushed = parse_commit_output(&commit_stdout);

    // 4. git push
    // 获取当前分支名
    let branch = get_current_branch(workspace_root)?;

    // 尝试普通 push
    let push_output = run_git_command(workspace_root, &["push"])?;

    let push_stderr = get_git_stderr(&push_output);

    // 如果失败且提示需要设置上游分支，则使用 --set-upstream
    if !is_git_success(&push_output) && push_stderr.contains("--set-upstream") {
        info!("ℹ️ [Git] 首次推送，设置上游分支");
        let push_upstream_output = run_git_command(workspace_root, &["push", "--set-upstream", "origin", &branch])?;

        if !is_git_success(&push_upstream_output) {
            let error = get_git_stderr(&push_upstream_output);
            error!("❌ [Git] Push 失败: {}", error);
            return Err(format!("git push 失败: {}", error));
        }
    } else if !is_git_success(&push_output) {
        // 检查是否是仓库不存在
        let push_stderr_lower = push_stderr.to_lowercase();
        if push_stderr_lower.contains("repository not found")
            || push_stderr_lower.contains("remote repository not found")
            || push_stderr_lower.contains("could not read remote")
            || (push_stderr_lower.contains("not found") && push_stderr_lower.contains("remote")) {
            info!("⚠️ [Git] 远程仓库不存在");
            return Err("remote_not_found".to_string());
        }

        error!("❌ [Git] Push 失败: {}", push_stderr);
        return Err(format!("git push 失败: {}", push_stderr));
    }

    info!("✅ [Git] Push 成功，推送了 {} 个文件", files_pushed);
    
    Ok(PushResult {
        success: true,
        files_pushed,
        commit_hash: String::new(),
        message: format!("Pushed {} files to remote", files_pushed),
    })
}

/// 从 Git 错误信息中提取文件名
/// 用于处理 "Your local changes to the following files would be overwritten" 错误
fn extract_files_from_error(error_msg: &str) -> Vec<String> {
    let mut files = Vec::new();
    let mut in_file_list = false;
    
    for line in error_msg.lines() {
        let trimmed = line.trim();
        
        // 检测文件列表开始
        if trimmed.contains("Your local changes to the following files would be overwritten") {
            in_file_list = true;
            continue;
        }
        
        // 检测文件列表结束
        if in_file_list && (trimmed.starts_with("Please ") || trimmed.starts_with("Aborting") || trimmed.is_empty()) {
            if !trimmed.is_empty() {
                break;
            }
            continue;
        }
        
        // 提取文件名（通常以 tab 开头）
        if in_file_list && !trimmed.is_empty() {
            // 移除前导的 tab 或空格，并解码可能存在的 Git 转义路径
            let file_path = trimmed.trim_start();
            if !file_path.is_empty() && !file_path.starts_with("Please") && !file_path.starts_with("Aborting") {
                files.push(decode_git_quoted_path(file_path));
            }
        }
    }
    
    info!("📋 [Git] 从错误信息中提取到 {} 个文件", files.len());
    files
}

/// 从 Git 错误信息中提取未跟踪文件名
/// 用于处理 "The following untracked working tree files would be overwritten by merge" 错误
fn extract_untracked_files_from_error(error_msg: &str) -> Vec<String> {
    let mut files = Vec::new();
    let mut in_file_list = false;

    for line in error_msg.lines() {
        let trimmed = line.trim();

        // 检测文件列表开始
        if trimmed.contains("untracked working tree files would be overwritten") {
            in_file_list = true;
            continue;
        }

        // 检测文件列表结束
        if in_file_list && (trimmed.starts_with("Please ") || trimmed.starts_with("Aborting") || trimmed.is_empty()) {
            if !trimmed.is_empty() {
                break;
            }
            continue;
        }

        // 提取文件名（通常以 tab 或空格开头）
        if in_file_list && !trimmed.is_empty() {
            let file_path = trimmed.trim_start();
            if !file_path.is_empty() && !file_path.starts_with("Please") && !file_path.starts_with("Aborting") {
                files.push(decode_git_quoted_path(file_path));
            }
        }
    }

    info!("📋 [Git] 从错误信息中提取到 {} 个未跟踪文件", files.len());
    files
}

/// 检测冲突文件
pub fn detect_conflicts(workspace_root: &Path) -> Result<Vec<String>, String> {
    let output = Command::new("git")
        .args(&["diff", "--name-only", "--diff-filter=U"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("检测冲突失败: {}", e))?;
    
    if !output.status.success() {
        return Ok(vec![]);
    }
    
    let stdout = String::from_utf8_lossy(&output.stdout);
    let conflicts: Vec<String> = stdout
        .lines()
        .map(|line| decode_git_quoted_path(line.trim()))
        .filter(|line| !line.is_empty())
        .collect();
    
    Ok(conflicts)
}

/// 解决冲突
pub fn resolve_conflict(workspace_root: &Path, file_path: &str, strategy: ConflictStrategy) -> Result<(), String> {
    match strategy {
        ConflictStrategy::KeepLocal => {
            // 使用本地版本
            let output = Command::new("git")
                .args(&["checkout", "--ours", file_path])
                .current_dir(workspace_root)
                .output()
                .map_err(|e| format!("解决冲突失败: {}", e))?;
            
            if !output.status.success() {
                let error = String::from_utf8_lossy(&output.stderr);
                return Err(format!("保留本地版本失败: {}", error));
            }
        }
        ConflictStrategy::KeepRemote => {
            // 使用远程版本
            let output = Command::new("git")
                .args(&["checkout", "--theirs", file_path])
                .current_dir(workspace_root)
                .output()
                .map_err(|e| format!("解决冲突失败: {}", e))?;
            
            if !output.status.success() {
                let error = String::from_utf8_lossy(&output.stderr);
                return Err(format!("保留远程版本失败: {}", error));
            }
        }
        ConflictStrategy::DiscardLocalUntracked => {
            // 删除本地未跟踪文件
            let full_path = workspace_root.join(file_path);
            if full_path.exists() {
                std::fs::remove_file(&full_path)
                    .map_err(|e| format!("删除本地文件失败: {}", e))?;
                info!("🗑️ [Git] 已删除本地未跟踪文件: {}", file_path);
            } else {
                info!("ℹ️ [Git] 文件不存在，无需删除: {}", file_path);
            }
        }
    }
    
    // 标记为已解决
    let output = Command::new("git")
        .args(&["add", file_path])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("标记冲突已解决失败: {}", e))?;
    
    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        return Err(format!("标记冲突已解决失败: {}", error));
    }
    
    info!("✅ [Git] 冲突已解决: {}", file_path);
    Ok(())
}

// ============= .gitignore 管理 =============

/// 检查 .gitignore 文件（仅检查，不自动创建或修改）
pub fn check_gitignore(workspace_root: &Path) -> Result<(), String> {
    let gitignore_path = workspace_root.join(".gitignore");
    
    if !gitignore_path.exists() {
        warn!("⚠️ [Git] .gitignore 文件不存在，建议手动创建");
        return Ok(());
    }
    
    // 读取内容检查是否包含关键规则
    let content = std::fs::read_to_string(&gitignore_path)
        .map_err(|e| format!("读取 .gitignore 失败: {}", e))?;
    
    let mut missing_rules = Vec::new();
    
    if !content.contains(".snippets-code") {
        missing_rules.push(".snippets-code/");
    }
    if !content.contains("*.db") {
        missing_rules.push("*.db");
    }
    if !content.contains("*.exe") {
        missing_rules.push("*.exe");
    }
    
    if !missing_rules.is_empty() {
        warn!("⚠️ [Git] .gitignore 中缺少以下规则: {:?}", missing_rules);
        warn!("⚠️ [Git] 建议手动添加这些规则以避免同步不必要的文件");
    }
    
    Ok(())
}

// ============= 辅助函数 =============

/// 获取当前分支名
pub fn get_current_branch(workspace_root: &Path) -> Result<String, String> {
    let output = Command::new("git")
        .args(&["branch", "--show-current"])
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("获取当前分支失败: {}", e))?;

    if !output.status.success() {
        return Ok("master".to_string()); // 默认分支
    }

    let branch = String::from_utf8_lossy(&output.stdout).trim().to_string();
    if branch.is_empty() {
        Ok("master".to_string())
    } else {
        Ok(branch)
    }
}

/// 执行 Git 命令并返回输出

/// 解析 pull 输出，统计更新的文件数量
fn parse_pull_output(output: &str) -> usize {
    parse_git_file_count_output(output)
}


/// 解析 commit 输出，统计提交的文件数量
fn parse_commit_output(output: &str) -> usize {
    parse_git_file_count_output(output)
}


// ============= Tauri 命令 =============

use tauri::{command, AppHandle};

/// 检查 Git 是否安装
#[command]
pub fn check_git_installed_command() -> Result<bool, String> {
    check_git_installed()
}

/// 检查是否是 Git 仓库
#[command]
pub fn check_git_repo_command(app_handle: AppHandle) -> Result<bool, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    check_git_repo(&workspace_root)
}

/// 获取 Git 状态
#[command]
pub fn get_git_status_command(app_handle: AppHandle) -> Result<GitStatus, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    info!(
        "📬 [Git] 前端请求 Git 状态，workspace_root: {}",
        workspace_root.display()
    );
    get_git_status(&workspace_root)
}

/// 获取系统 Git 配置
#[command]
pub fn get_system_git_config_command(app_handle: AppHandle) -> Result<SystemGitConfig, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle).ok().flatten();
    get_system_git_config(workspace_root.as_deref())
}

/// 配置 Git
#[command]
pub fn configure_git_command(app_handle: AppHandle, config: GitConfig) -> Result<(), String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    
    // 配置用户信息
    configure_git_user(&workspace_root, &config.user_name, &config.user_email)?;
    
    // 配置远程仓库
    configure_remote(&workspace_root, &config.remote_url, &config.token)?;
    
    // 检查 .gitignore（仅检查，不自动创建）
    check_gitignore(&workspace_root)?;
    
    Ok(())
}

/// 执行 git pull
#[command]
pub async fn git_pull_command(app_handle: AppHandle) -> Result<PullResult, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;

    if let Err(e) = app_handle.emit_to("config", "git-pull-start", ()) {
        warn!("⚠️ [Git] 发送 git-pull-start 事件失败: {}", e);
    }

    // 同时发送到 main 窗口（标题栏需要）
    if let Err(e) = app_handle.emit_to("main", "git-pull-start", ()) {
        warn!("⚠️ [Git] 发送 git-pull-start 到 main 失败: {}", e);
    }

    let result = git_pull(&workspace_root).await?;

    // 如果检测到冲突（包括 untracked files），存入待处理队列
    if result.has_conflicts {
        let payload = ConflictPayload {
            conflict_files: result.conflict_files.clone(),
            untracked_files: result.untracked_files.clone(),
        };
        
        // 将冲突存入待处理队列
        if let Some(pending_conflicts) = app_handle.try_state::<Arc<Mutex<Vec<ConflictPayload>>>>() {
            if let Ok(mut queue) = pending_conflicts.lock() {
                queue.push(payload.clone());
                info!("📋 [Git] 冲突已存入待处理队列");
            }
        }
        
        // 尝试发送到 config 窗口（如果窗口已就绪）
        if let Err(_e) = app_handle.emit_to("config", "git-conflict-detected", payload) {
            info!("ℹ️ [Git] Config 窗口未就绪");
        }
    }

    // 检测仓库不存在
    if result.message == "remote_not_found" {
        let remote_url = crate::git_sync::get_system_git_config(Some(&workspace_root))
            .ok()
            .and_then(|config| config.remote_url)
            .unwrap_or_else(|| "未知".to_string());

        let payload = RepoNotFoundPayload {
            remote_url,
            operation: "pull".to_string(),
        };

        // 发送仓库不存在事件到 config 窗口
        if let Err(e) = app_handle.emit_to("config", "git-repo-not-found", payload.clone()) {
            error!("❌ [Git] 发送仓库不存在事件失败，存入待处理队列: {}", e);
            // 存入待处理队列
            if let Some(pending_queue) = app_handle.try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>() {
                if let Ok(mut queue) = pending_queue.lock() {
                    queue.push(payload);
                }
            }
        }
    }

    // 发送 git-sync-complete 事件
    let last_sync_time = result.last_sync_time.clone();
    if let Err(e) = app_handle.emit_to("config", "git-sync-complete", serde_json::json!({
        "success": result.success,
        "last_sync_time": last_sync_time
    })) {
        warn!("⚠️ [Git] 发送 git-sync-complete 事件失败: {}", e);
    }
    // 同时发送到 main
    if let Err(e) = app_handle.emit_to("main", "git-sync-complete", serde_json::json!({
        "success": result.success,
        "last_sync_time": last_sync_time
    })) {
        warn!("⚠️ [Git] 发送 git-sync-complete 到 main 失败: {}", e);
    }

    // 如果 Pull 成功且有文件更新，使用增量扫描更新 cache
    if result.success && result.files_updated > 0 {
        info!("🔍 [Git] Pull 完成，开始增量扫描变更文件...");

        let by_status = get_changed_files_with_status(&workspace_root, result.pre_pull_head.as_deref())?;
        let changed_files = by_status.all();

        if changed_files.is_empty() {
            info!("ℹ️ [Git] 没有检测到 .md 文件变更，跳过扫描");
        } else {
            // 将变更文件添加到 FileWatcher 忽略列表
            if let Some(watcher_state) = app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>() {
                if let Ok(watcher_lock) = watcher_state.lock() {
                    if let Some(ref watcher) = *watcher_lock {
                        for file in &changed_files {
                            let file_path = workspace_root.join(file);
                            watcher.ignore_next_change(file_path);
                        }
                        info!("🔕 [Git] 已将 {} 个文件添加到 FileWatcher 忽略列表", changed_files.len());
                    }
                }
            }

            // 增量更新 cache：新增/修改用 scan_files，删除用 remove_file
            if let Some(cache_state) = app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>() {
                match cache_state.write() {
                    Ok(mut cache) => {
                        let to_scan: Vec<String> = by_status
                            .created
                            .iter()
                            .chain(by_status.modified.iter())
                            .cloned()
                            .collect();
                        if !to_scan.is_empty() {
                            match cache.scan_files(&to_scan, &workspace_root) {
                                Ok(added_count) => {
                                    info!("✅ [Git] 增量扫描完成，添加 {} 个新文件", added_count);
                                }
                                Err(e) => {
                                    error!("❌ [Git] 增量扫描失败: {}，回退到全量扫描", e);
                                    if let Err(rebuild_err) =
                                        cache.rebuild_cache(&workspace_root)
                                    {
                                        error!("❌ [Git] 全量扫描也失败: {}", rebuild_err);
                                    }
                                }
                            }
                        }
                        for rel_path in &by_status.deleted {
                            let abs_path = workspace_root.join(rel_path);
                            if let Err(e) = cache.remove_file(&abs_path, &workspace_root) {
                                warn!("⚠️ [Git] 从 cache 删除文件失败 {}: {}", rel_path, e);
                            }
                        }
                        if let Err(e) = cache.save() {
                            error!("❌ [Git] 保存 cache 失败: {}", e);
                        }
                    }
                    Err(e) => error!("❌ [Git] 获取 cache 锁失败: {}", e),
                }
            }

            // 发送 files-changed-batch 到 config 窗口（任务 5：真正的增量更新）
            if let Some(config_window) = app_handle.get_webview_window("config") {
                let payload = serde_json::json!({
                    "created": by_status.created,
                    "modified": by_status.modified,
                    "deleted": by_status.deleted,
                });
                if let Err(e) = config_window.emit("files-changed-batch", payload) {
                    error!("❌ [Git] 发送 files-changed-batch 失败: {}", e);
                }
            }

            if let Err(e) = app_handle.emit_to("config", "git-pull-completed", result.files_updated) {
                error!("❌ [Git] 发送 git-pull-completed 失败: {}", e);
            }

            // 发送 git-sync-complete 事件
            let last_sync_time = result.last_sync_time.clone();
            if let Err(e) = app_handle.emit_to("config", "git-sync-complete", serde_json::json!({
                "success": result.success,
                "last_sync_time": last_sync_time
            })) {
                warn!("⚠️ [Git] 发送 git-sync-complete 事件失败: {}", e);
            }
            // 同时发送到 main
            if let Err(e) = app_handle.emit_to("main", "git-sync-complete", serde_json::json!({
                "success": result.success,
                "last_sync_time": last_sync_time
            })) {
                warn!("⚠️ [Git] 发送 git-sync-complete 到 main 失败: {}", e);
            }
        }
    }
    
    Ok(result)
}

/// 执行 git push
#[command]
pub async fn git_push_command(app_handle: AppHandle, message: Option<String>) -> Result<PushResult, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;

    // 发送 push 开始事件到前端
    if let Err(e) = app_handle.emit_to("config", "git-push-start", ()) {
        warn!("⚠️ [Git] 发送 git-push-start 事件失败: {}", e);
    }

    let commit_message = message.unwrap_or_else(|| {
        let now = chrono::Local::now();
        format!("Auto sync: {}", now.format("%Y-%m-%d %H:%M:%S"))
    });

    let push_result = git_push(&workspace_root, &commit_message).await;

    // 发送同步完成事件
    let last_sync_time = chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
    let success = push_result.is_ok();

    if let Err(e) = app_handle.emit_to("config", "git-sync-complete", serde_json::json!({
        "success": success,
        "last_sync_time": if success { serde_json::Value::String(last_sync_time.clone()) } else { serde_json::Value::Null }
    })) {
        warn!("⚠️ [Git] 发送 git-sync-complete 事件失败: {}", e);
    }

    // 检测仓库不存在
    if let Err(ref e) = push_result {
        if e.contains("remote_not_found") {
            let remote_url = crate::git_sync::get_system_git_config(Some(&workspace_root))
                .ok()
                .and_then(|config| config.remote_url)
                .unwrap_or_else(|| "未知".to_string());

            let payload = RepoNotFoundPayload {
                remote_url,
                operation: "push".to_string(),
            };

            // 发送仓库不存在事件到 config 窗口
            if let Err(e) = app_handle.emit_to("config", "git-repo-not-found", payload.clone()) {
                error!("❌ [Git] 发送仓库不存在事件失败，存入待处理队列: {}", e);
                // 存入待处理队列
                if let Some(pending_queue) = app_handle.try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>() {
                    if let Ok(mut queue) = pending_queue.lock() {
                        queue.push(payload);
                    }
                }
            }
        }
    }

    push_result
}

/// 解决冲突
#[command]
pub fn resolve_conflict_command(
    app_handle: AppHandle,
    file_path: String,
    strategy: ConflictStrategy,
) -> Result<(), String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    resolve_conflict(&workspace_root, &file_path, strategy)
}

/// 检查 .gitignore
#[command]
pub fn check_gitignore_command(app_handle: AppHandle) -> Result<(), String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    check_gitignore(&workspace_root)
}


// ============= 自动同步管理器 =============

use std::time::{Duration, Instant};
use tokio::time::sleep;

/// 自动同步管理器
pub struct AutoSyncManager {
    workspace_root: PathBuf,
    delay_minutes: u64,
    last_edit_time: Arc<Mutex<Option<Instant>>>,
    is_running: Arc<Mutex<bool>>,
    is_paused: Arc<Mutex<bool>>, // 新增：暂停状态（用于冲突处理）
    app_handle: tauri::AppHandle,
}

impl AutoSyncManager {
    /// 创建新的自动同步管理器
    pub fn new(workspace_root: PathBuf, delay_minutes: u64, app_handle: tauri::AppHandle) -> Self {
        Self {
            workspace_root,
            delay_minutes,
            last_edit_time: Arc::new(Mutex::new(None)),
            is_running: Arc::new(Mutex::new(false)),
            is_paused: Arc::new(Mutex::new(false)),
            app_handle,
        }
    }
    
    /// 启动自动同步
    pub fn start(&self) -> Result<(), String> {
        let mut is_running = self.is_running.lock()
            .map_err(|e| format!("获取运行状态锁失败: {}", e))?;
        
        if *is_running {
            return Ok(()); // 已经在运行
        }
        
        *is_running = true;
        
        let workspace_root = self.workspace_root.clone();
        let delay_minutes = self.delay_minutes;
        let last_edit_time = Arc::clone(&self.last_edit_time);
        let is_running_clone = Arc::clone(&self.is_running);
        let is_paused_clone = Arc::clone(&self.is_paused);
        let app_handle = self.app_handle.clone();
        
        // 启动后台任务
        tauri::async_runtime::spawn(async move {
            info!("🚀 [AutoSync] 自动同步管理器已启动，延迟: {} 分钟", delay_minutes);
            
            let pull_interval = Duration::from_secs(delay_minutes * 60); // Pull 间隔
            let mut last_pull_time = Instant::now();
            
            loop {
                // 检查是否应该停止
                {
                    let running = is_running_clone.lock().unwrap();
                    if !*running {
                        info!("⏹️ [AutoSync] 自动同步管理器已停止");
                        break;
                    }
                }
                
                // 每 1 秒检查一次（提高精度）
                sleep(Duration::from_secs(1)).await;
                
                // 检查是否暂停（冲突处理中）
                let is_paused = {
                    let paused = is_paused_clone.lock().unwrap();
                    *paused
                };
                
                if is_paused {
                    // 暂停期间不执行任何同步操作
                    continue;
                }
                
                // 1. 检查是否需要定期 Pull
                let should_pull = last_pull_time.elapsed() >= pull_interval;
                
                if should_pull {
                    // 执行 Pull，带重试机制
                    let max_retries = 3;
                    let mut retry_count = 0;
                    let mut pull_result = None;
                    
                    while retry_count < max_retries {
                        match git_pull(&workspace_root).await {
                            Ok(result) => {
                                pull_result = Some(Ok(result));
                                break;
                            }
                            Err(e) => {
                                let error_msg = e.to_string().to_lowercase();
                                let is_network_error = error_msg.contains("unable to access")
                                    || error_msg.contains("ssl")
                                    || error_msg.contains("tls")
                                    || error_msg.contains("timeout")
                                    || error_msg.contains("connection")
                                    || error_msg.contains("network")
                                    || error_msg.contains("schannel");
                                
                                if is_network_error && retry_count < max_retries - 1 {
                                    retry_count += 1;
                                    let delay_secs = 2u64.pow(retry_count as u32); // 指数退避: 2s, 4s, 8s
                                    warn!("⚠️ [AutoSync] Pull 遇到网络错误，{} 秒后重试 ({}/{}): {}", delay_secs, retry_count, max_retries, e);
                                    sleep(Duration::from_secs(delay_secs)).await;
                                } else {
                                    // 非网络错误或已达到最大重试次数
                                    pull_result = Some(Err(e));
                                    break;
                                }
                            }
                        }
                    }
                    
                    // 处理 Pull 结果
                    match pull_result {
                        Some(Ok(result)) => {
                            if result.success {
                                if result.files_updated > 0 {
                                    info!("✅ [AutoSync] 定期 Pull 成功，更新了 {} 个文件", result.files_updated);

                                    let by_status = match get_changed_files_with_status(&workspace_root, result.pre_pull_head.as_deref()) {
                                        Ok(s) => s,
                                        Err(e) => {
                                            warn!("⚠️ [AutoSync] 获取变更文件失败: {}", e);
                                            ChangedFilesByStatus::default()
                                        }
                                    };
                                    let changed_files = by_status.all();

                                    if !changed_files.is_empty() {
                                        info!("📋 [AutoSync] 检测到 {} 个 .md 文件变更", changed_files.len());

                                        // 将变更文件添加到 FileWatcher 忽略列表
                                        if let Some(watcher_state) = app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>() {
                                            if let Ok(watcher_lock) = watcher_state.lock() {
                                                if let Some(ref watcher) = *watcher_lock {
                                                    for file in &changed_files {
                                                        let file_path = workspace_root.join(file);
                                                        watcher.ignore_next_change(file_path);
                                                    }
                                                    info!("🔕 [AutoSync] 已将 {} 个文件添加到 FileWatcher 忽略列表", changed_files.len());
                                                }
                                            }
                                        }

                                        // 增量更新 cache：新增/修改用 scan_files，删除用 remove_file
                                        if let Some(cache_state) = app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>() {
                                            if let Ok(mut cache) = cache_state.write() {
                                                let to_scan: Vec<String> = by_status
                                                    .created
                                                    .iter()
                                                    .chain(by_status.modified.iter())
                                                    .cloned()
                                                    .collect();
                                                if !to_scan.is_empty() {
                                                    if let Ok(added_count) = cache.scan_files(&to_scan, &workspace_root) {
                                                        info!("✅ [AutoSync] 增量扫描完成，添加 {} 个新文件", added_count);
                                                    }
                                                }
                                                for rel_path in &by_status.deleted {
                                                    let abs_path = workspace_root.join(rel_path);
                                                    let _ = cache.remove_file(&abs_path, &workspace_root);
                                                }
                                                let _ = cache.save();
                                            }
                                        }

                                        // 发送 files-changed-batch，使 Content 页面能重新加载已修改的当前文件
                                        if let Some(config_window) = app_handle.get_webview_window("config") {
                                            let payload = serde_json::json!({
                                                "created": by_status.created,
                                                "modified": by_status.modified,
                                                "deleted": by_status.deleted,
                                            });
                                            if let Err(e) = config_window.emit("files-changed-batch", payload) {
                                                error!("❌ [AutoSync] 发送 files-changed-batch 失败: {}", e);
                                            }
                                        }
                                    }

                                    // 发送 Pull 完成事件到 config 窗口
                                    if let Err(e) = app_handle.emit_to("config", "git-pull-completed", result.files_updated) {
                                        error!("❌ [AutoSync] 发送 Pull 完成事件失败: {}", e);
                                    }

                                    // 发送 git-sync-complete 事件
                                    if let Err(e) = app_handle.emit_to("config", "git-sync-complete", serde_json::json!({
                                        "success": true,
                                        "last_sync_time": result.last_sync_time
                                    })) {
                                        warn!("⚠️ [AutoSync] 发送 git-sync-complete 事件失败: {}", e);
                                    }
                                    // 同时发送到 main
                                    if let Err(e) = app_handle.emit_to("main", "git-sync-complete", serde_json::json!({
                                        "success": true,
                                        "last_sync_time": result.last_sync_time
                                    })) {
                                        warn!("⚠️ [AutoSync] 发送 git-sync-complete 到 main 失败: {}", e);
                                    }

                                    // 发送成功通知到 config 窗口
                                    let notification_message = format!("已从远程同步 {} 个文件", result.files_updated);
                                    if let Err(e) = app_handle.emit_to("config", "git-sync-success", notification_message.clone()) {
                                        error!("❌ [AutoSync] 发送通知失败: {}", e);
                                    }
                                } else {
                                    info!("ℹ️ [AutoSync] 定期 Pull 完成，已是最新版本");
                                }
                                } else if result.has_conflicts {
                                // 检测到冲突，暂停自动同步并发送冲突事件到前端
                                warn!("⚠️ [AutoSync] 定期 Pull 检测到冲突: {:?}", result.conflict_files);
                                
                                // 更新 cache 中的冲突文件，确保它们在界面上可见
                                if !result.conflict_files.is_empty() {
                                    if let Some(cache_state) = app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>() {
                                        if let Ok(mut cache) = cache_state.write() {
                                            match cache.scan_files(&result.conflict_files, &workspace_root) {
                                                Ok(added_count) => {
                                                    info!("[AutoSync] 更新了 {} 个冲突文件到 cache", added_count);
                                                    let _ = cache.save();
                                                }
                                                Err(e) => {
                                                    warn!("⚠️ [AutoSync] Cache 更新失败: {}", e);
                                                }
                                            }
                                        }
                                    }
                                }
                                
                                // 暂停自动同步
                                {
                                    let mut paused = is_paused_clone.lock().unwrap();
                                    *paused = true;
                                    info!("⏸️ [AutoSync] 已暂停自动同步，等待冲突解决");
                                }
                                
                                #[derive(serde::Serialize, Clone)]
                                struct ConflictPayload {
                                    conflict_files: Vec<String>,
                                    #[serde(skip_serializing_if = "Vec::is_empty")]
                                    untracked_files: Vec<String>,
                                }
                                
                                let payload = ConflictPayload {
                                    conflict_files: result.conflict_files.clone(),
                                    untracked_files: result.untracked_files.clone(),
                                };
                                
                                if let Err(e) = app_handle.emit_to("config", "git-conflict-detected", payload) {
                                    error!("❌ [AutoSync] 发送冲突事件失败: {}", e);
                                }
                            } else if result.message == "remote_not_found" {
                                // 检测到仓库不存在，发送事件到前端提示用户重新配置
                                warn!("⚠️ [AutoSync] 定期 Pull 检测到远程仓库不存在");
                                
                                let remote_url = crate::git_sync::get_system_git_config(Some(&workspace_root))
                                    .ok()
                                    .and_then(|config| config.remote_url)
                                    .unwrap_or_else(|| "未知".to_string());
                                
                                let payload = RepoNotFoundPayload {
                                    remote_url,
                                    operation: "pull".to_string(),
                                };
                                
                                // 发送仓库不存在事件
                                if let Err(e) = app_handle.emit_to("config", "git-repo-not-found", payload.clone()) {
                                    error!("❌ [AutoSync] 发送仓库不存在事件失败，存入待处理队列: {}", e);
                                    if let Some(pending_queue) = app_handle.try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>() {
                                        if let Ok(mut queue) = pending_queue.lock() {
                                            queue.push(payload);
                                            info!("📋 [AutoSync] 仓库不存在通知已存入待处理队列");
                                        }
                                    }
                                }
                            }
                        }
                        Some(Err(e)) => {
                            let error_msg = e.to_string().to_lowercase();
                            let is_network_error = error_msg.contains("unable to access")
                                || error_msg.contains("ssl")
                                || error_msg.contains("tls")
                                || error_msg.contains("timeout")
                                || error_msg.contains("connection")
                                || error_msg.contains("network")
                                || error_msg.contains("schannel");

                            let is_repo_not_found = error_msg.contains("repository not found")
                                || error_msg.contains("remote repository not found")
                                || error_msg.contains("remote_not_found");

                            if is_repo_not_found {
                                // 仓库不存在：发送特殊事件到前端，提示用户重新配置
                                warn!("⚠️ [AutoSync] 远程仓库不存在");

                                let remote_url = crate::git_sync::get_system_git_config(Some(&workspace_root))
                                    .ok()
                                    .and_then(|config| config.remote_url)
                                    .unwrap_or_else(|| "未知".to_string());

                                let payload = RepoNotFoundPayload {
                                    remote_url,
                                    operation: "pull".to_string(),
                                };

                                if let Err(err) = app_handle.emit_to("config", "git-repo-not-found", payload.clone()) {
                                    error!("❌ [AutoSync] 发送仓库不存在事件失败，存入待处理队列: {}", err);
                                    // 存入待处理队列
                                    if let Some(pending_queue) = app_handle.try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>() {
                                        if let Ok(mut queue) = pending_queue.lock() {
                                            queue.push(payload);
                                            info!("📋 [AutoSync] 仓库不存在通知已存入待处理队列");
                                        }
                                    }
                                }
                            } else if is_network_error {
                                // 网络错误：静默失败，不发送通知
                                error!("❌ [AutoSync] 定期 Pull 失败（网络错误，已重试 {} 次）: {}", max_retries, e);
                            } else {
                                // 非网络错误：记录并发送通知
                                error!("❌ [AutoSync] 定期 Pull 失败: {}", e);

                                if let Err(err) = app_handle.emit_to("config", "git-sync-error", format!("Auto pull failed: {}", e)) {
                                    error!("❌ [AutoSync] 发送错误通知失败: {}", err);
                                }
                            }
                        }
                        None => {
                            // 不应该发生
                            error!("❌ [AutoSync] Pull 结果为空");
                        }
                    }
                    
                    // 更新最后 Pull 时间
                    last_pull_time = Instant::now();
                }
                
                // 2. 检查是否需要 Push（文件编辑后）
                let should_push = {
                    let last_edit = last_edit_time.lock().unwrap();
                    if let Some(last_time) = *last_edit {
                        let elapsed = last_time.elapsed();
                        let delay_duration = Duration::from_secs(delay_minutes * 60);
                        elapsed >= delay_duration
                    } else {
                        false
                    }
                };
                
                if should_push {
                    let mut push_result = git_push(&workspace_root, "Auto sync").await;
                    
                    // Push 被 non-fast-forward 拒绝时：先 pull 再重试
                    if let Err(ref e) = push_result {
                        let err_lower = e.to_string().to_lowercase();
                        if err_lower.contains("rejected") || err_lower.contains("non-fast-forward") || err_lower.contains("behind") {
                            info!("ℹ️ [AutoSync] Push 被拒绝（本地落后于远程），先 Pull 再重试");
                            match git_pull(&workspace_root).await {
                                Ok(pull_result) => {
                                    if pull_result.has_conflicts {
                                        warn!("⚠️ [AutoSync] Pull 产生冲突，转入冲突流程");
                                        if !pull_result.conflict_files.is_empty() {
                                            if let Some(cache_state) = app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>() {
                                                if let Ok(mut cache) = cache_state.write() {
                                                    let _ = cache.scan_files(&pull_result.conflict_files, &workspace_root);
                                                    let _ = cache.save();
                                                }
                                            }
                                        }
                                        {
                                            let mut paused = is_paused_clone.lock().unwrap();
                                            *paused = true;
                                            info!("⏸️ [AutoSync] 已暂停自动同步，等待冲突解决");
                                        }
                                        #[derive(serde::Serialize, Clone)]
                                        struct ConflictPayload { conflict_files: Vec<String> }
                                        let payload = ConflictPayload { conflict_files: pull_result.conflict_files.clone() };
                                        let _ = app_handle.emit_to("config", "git-conflict-detected", payload);
                                    } else {
                                        info!("✅ [AutoSync] Pull 成功，重试 Push");
                                        let branch_output = Command::new("git")
                                            .args(&["branch", "--show-current"])
                                            .current_dir(&workspace_root)
                                            .output()
                                            .map_err(|e| format!("获取分支失败: {}", e));
                                        if let Ok(out) = branch_output {
                                            let branch = String::from_utf8_lossy(&out.stdout).trim().to_string();
                                            let push_out = Command::new("git")
                                                .args(&["push", "origin", &branch])
                                                .current_dir(&workspace_root)
                                                .output();
                                            if let Ok(po) = push_out {
                                                if po.status.success() {
                                                    info!("✅ [AutoSync] 重试 Push 成功");
                                                    push_result = Ok(PushResult {
                                                        success: true,
                                                        files_pushed: 1,
                                                        commit_hash: String::new(),
                                                        message: "Push 成功".to_string(),
                                                    });
                                                } else {
                                                    let err = String::from_utf8_lossy(&po.stderr);
                                                    push_result = Err(format!("重试 Push 失败: {}", err));
                                                }
                                            }
                                        }
                                    }
                                }
                                Err(pull_err) => {
                                    error!("❌ [AutoSync] Pull 失败: {}", pull_err);
                                    push_result = Err(format!("Push 失败后 Pull 也失败: {}", pull_err));
                                }
                            }
                        }
                    }
                    
                    match push_result {
                        Ok(result) => {
                            if result.success && result.files_pushed > 0 {
                                info!("✅ [AutoSync] 自动 Push 成功: {}", result.message);
                                let notification_message = format!("已推送 {} 个文件到远程", result.files_pushed);
                                if let Err(e) = app_handle.emit_to("config", "git-sync-success", notification_message.clone()) {
                                    error!("❌ [AutoSync] 发送通知失败: {}", e);
                                }
                            }
                        }
                        Err(e) => {
                            let err_lower = e.to_lowercase();
                            let is_repo_not_found = err_lower.contains("repository not found")
                                || err_lower.contains("remote repository not found")
                                || err_lower.contains("remote_not_found");

                            if is_repo_not_found {
                                // 仓库不存在：发送特殊事件到前端，提示用户重新配置
                                warn!("⚠️ [AutoSync] 远程仓库不存在");

                                let remote_url = crate::git_sync::get_system_git_config(Some(&workspace_root))
                                    .ok()
                                    .and_then(|config| config.remote_url)
                                    .unwrap_or_else(|| "未知".to_string());

                                let payload = RepoNotFoundPayload {
                                    remote_url,
                                    operation: "push".to_string(),
                                };

                                if let Err(err) = app_handle.emit_to("config", "git-repo-not-found", payload.clone()) {
                                    error!("❌ [AutoSync] 发送仓库不存在事件失败，存入待处理队列: {}", err);
                                    // 存入待处理队列
                                    if let Some(pending_queue) = app_handle.try_state::<Arc<Mutex<Vec<RepoNotFoundPayload>>>>() {
                                        if let Ok(mut queue) = pending_queue.lock() {
                                            queue.push(payload);
                                            info!("📋 [AutoSync] 仓库不存在通知已存入待处理队列");
                                        }
                                    }
                                }
                            } else {
                                error!("❌ [AutoSync] 自动 Push 失败: {}", e);
                                if let Err(err) = app_handle.emit_to("config", "git-sync-error", format!("Auto push failed: {}", e)) {
                                    error!("❌ [AutoSync] 发送错误通知失败: {}", err);
                                }
                            }
                        }
                    }
                    
                    // 重置最后编辑时间
                    let mut last_edit = last_edit_time.lock().unwrap();
                    *last_edit = None;
                }
            }
        });
        
        Ok(())
    }
    
    /// 停止自动同步
    pub fn stop(&self) -> Result<(), String> {
        let mut is_running = self.is_running.lock()
            .map_err(|e| format!("获取运行状态锁失败: {}", e))?;
        *is_running = false;
        
        info!("🛑 [AutoSync] 停止自动同步管理器");
        Ok(())
    }
    
    /// 通知文件编辑
    pub fn notify_edit(&self) -> Result<(), String> {
        let mut last_edit = self.last_edit_time.lock()
            .map_err(|e| format!("获取编辑时间锁失败: {}", e))?;
        *last_edit = Some(Instant::now());
        
        Ok(())
    }
    
    /// 检查是否正在运行
    pub fn is_running(&self) -> bool {
        self.is_running.lock()
            .map(|guard| *guard)
            .unwrap_or(false)
    }
    
    /// 暂停自动同步（用于冲突处理）
    pub fn pause(&self) -> Result<(), String> {
        let mut is_paused = self.is_paused.lock()
            .map_err(|e| format!("获取暂停状态锁失败: {}", e))?;
        *is_paused = true;
        
        info!("⏸️ [AutoSync] 暂停自动同步");
        Ok(())
    }
    
    /// 恢复自动同步（冲突解决后）
    pub fn resume(&self) -> Result<(), String> {
        let mut is_paused = self.is_paused.lock()
            .map_err(|e| format!("获取暂停状态锁失败: {}", e))?;
        *is_paused = false;
        
        info!("▶️ [AutoSync] 恢复自动同步");
        Ok(())
    }
}

// ============= 自动同步 Tauri 命令 =============

/// 启动自动同步
#[command]
pub fn start_auto_sync_command(app_handle: AppHandle) -> Result<(), String> {
    // 获取工作区根目录
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    
    // 获取 Git 设置
    use crate::app_config::AppConfigManager;
    
    let config_state = app_handle.try_state::<Arc<StdRwLock<AppConfigManager>>>()
        .ok_or("AppConfigManager 未初始化".to_string())?;
    
    let manager = config_state.read()
        .map_err(|e| format!("获取配置锁失败: {}", e))?;
    
    let git_settings = manager.get_git_settings();
    
    if !git_settings.enabled || !git_settings.auto_sync {
        return Err("自动同步未启用".to_string());
    }
    
    let delay_minutes = git_settings.auto_sync_delay;
    
    // 创建或获取 AutoSyncManager
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let mut sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state.lock()
            .map_err(|e| format!("获取同步管理器锁失败: {}", e))?;
        
        if sync_manager.is_none() {
            *sync_manager = Some(AutoSyncManager::new(workspace_root, delay_minutes, app_handle.clone()));
        }
        
        if let Some(ref manager) = *sync_manager {
            manager.start()?;
        }
    } else {
        // 首次创建
        let manager = AutoSyncManager::new(workspace_root, delay_minutes, app_handle.clone());
        manager.start()?;
        app_handle.manage(Arc::new(Mutex::new(Some(manager))));
    }
    
    Ok(())
}

/// 停止自动同步
#[command]
pub fn stop_auto_sync_command(app_handle: AppHandle) -> Result<(), String> {
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state.lock()
            .map_err(|e| format!("获取同步管理器锁失败: {}", e))?;
        
        if let Some(ref manager) = *sync_manager {
            manager.stop()?;
        }
    }
    
    Ok(())
}

/// 通知文件编辑
#[command]
pub fn notify_file_edit_command(app_handle: AppHandle) -> Result<(), String> {
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state.lock()
            .map_err(|e| format!("获取同步管理器锁失败: {}", e))?;
        
        if let Some(ref manager) = *sync_manager {
            manager.notify_edit()?;
        }
    }
    
    Ok(())
}

/// 获取自动同步状态
#[command]
pub fn get_auto_sync_status_command(app_handle: AppHandle) -> Result<bool, String> {
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state.lock()
            .map_err(|e| format!("获取同步管理器锁失败: {}", e))?;
        
        if let Some(ref manager) = *sync_manager {
            return Ok(manager.is_running());
        }
    }
    
    Ok(false)
}

/// 暂停自动同步
#[command]
pub fn pause_auto_sync_command(app_handle: AppHandle) -> Result<(), String> {
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state.lock()
            .map_err(|e| format!("获取同步管理器锁失败: {}", e))?;
        
        if let Some(ref manager) = *sync_manager {
            manager.pause()?;
        }
    }
    
    Ok(())
}

/// 恢复自动同步
#[command]
pub fn resume_auto_sync_command(app_handle: AppHandle) -> Result<(), String> {
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state.lock()
            .map_err(|e| format!("获取同步管理器锁失败: {}", e))?;
        
        if let Some(ref manager) = *sync_manager {
            manager.resume()?;
        }
    }
    
    Ok(())
}

// ============= 冲突处理命令 =============

/// 冲突文件内容
#[derive(Debug, Serialize, Deserialize)]
pub struct ConflictFileContent {
    pub file_path: String,
    pub remote_content: String,
    pub local_content: String,
    pub base_content: Option<String>,
}

/// 获取冲突文件内容
#[command]
pub fn get_conflict_file_content(
    app_handle: AppHandle,
    file_path: String,
) -> Result<ConflictFileContent, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    
    let full_path = workspace_root.join(&file_path);
    
    let merge_head_path = workspace_root.join(".git/MERGE_HEAD");
    let is_merge_conflict = merge_head_path.exists();
    
    let local_content = if is_merge_conflict {
        let head_output = Command::new("git")
            .args(&["show", &format!("HEAD:{}", file_path)])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("获取本地版本失败: {}", e))?;
        
        if head_output.status.success() {
            String::from_utf8_lossy(&head_output.stdout).to_string()
        } else {
            warn!("⚠️ [Git] git show HEAD:{} 失败，回退读取磁盘文件", file_path);
            std::fs::read_to_string(&full_path)
                .map_err(|e| format!("读取本地文件失败: {}", e))?
        }
    } else {
        std::fs::read_to_string(&full_path)
            .map_err(|e| format!("读取本地文件失败: {}", e))?
    };
    
    // 获取远程版本（MERGE_HEAD 或 origin/branch）
    let remote_output = Command::new("git")
        .args(&["show", &format!("MERGE_HEAD:{}", file_path)])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("获取远程版本失败: {}", e))?;
    
    let remote_content = if remote_output.status.success() {
        String::from_utf8_lossy(&remote_output.stdout).to_string()
    } else {
        // 如果 MERGE_HEAD 不存在，尝试从 origin/branch 获取
        let branch_output = Command::new("git")
            .args(&["branch", "--show-current"])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("获取当前分支失败: {}", e))?;
        
        let branch = String::from_utf8_lossy(&branch_output.stdout).trim().to_string();
        
        let origin_output = Command::new("git")
            .args(&["show", &format!("origin/{}:{}", branch, file_path)])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("获取远程版本失败: {}", e))?;
        
        if origin_output.status.success() {
            String::from_utf8_lossy(&origin_output.stdout).to_string()
        } else {
            String::new()
        }
    };
    
    // 获取共同祖先版本（可选）
    let base_output = Command::new("git")
        .args(&["show", &format!(":1:{}", file_path)])
        .current_dir(&workspace_root)
        .output()
        .ok();
    
    let base_content = base_output
        .and_then(|output| {
            if output.status.success() {
                Some(String::from_utf8_lossy(&output.stdout).to_string())
            } else {
                None
            }
        });
    
    info!("✅ [Git] 获取冲突文件内容: {}", file_path);
    
    Ok(ConflictFileContent {
        file_path,
        remote_content,
        local_content,
        base_content,
    })
}

/// 强制推送（覆盖远程）
#[command]
pub async fn force_push_command(
    app_handle: AppHandle,
    message: Option<String>,
) -> Result<PushResult, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    
    info!("🔄 [Git] 开始强制推送");
    
    // 如果处于 merge 状态，先 abort 以恢复干净的本地状态，避免提交冲突标记
    let merge_head_path = workspace_root.join(".git/MERGE_HEAD");
    if merge_head_path.exists() {
        info!("⚠️ [Git] 检测到 merge 状态，先执行 merge --abort");
        let abort_output = Command::new("git")
            .args(&["merge", "--abort"])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("git merge --abort 失败: {}", e))?;
        
        if !abort_output.status.success() {
            let error = String::from_utf8_lossy(&abort_output.stderr);
            warn!("⚠️ [Git] merge --abort 失败: {}", error);
        }
    }
    
    // 1. 添加所有文件
    let add_output = Command::new("git")
        .args(&["add", "."])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("git add 失败: {}", e))?;
    
    if !add_output.status.success() {
        let error = String::from_utf8_lossy(&add_output.stderr);
        return Err(format!("git add 失败: {}", error));
    }
    
    // 2. 提交
    let commit_message = message.unwrap_or_else(|| {
        format!("Force push: {}", chrono::Local::now().format("%Y-%m-%d %H:%M:%S"))
    });
    
    let commit_output = Command::new("git")
        .args(&["commit", "-m", &commit_message])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("git commit 失败: {}", e))?;
    
    // 如果没有变更，也不算错误
    if !commit_output.status.success() {
        let stderr = String::from_utf8_lossy(&commit_output.stderr);
        if !stderr.contains("nothing to commit") {
            return Err(format!("git commit 失败: {}", stderr));
        }
    }
    
    // 3. 获取当前分支
    let branch_output = Command::new("git")
        .args(&["branch", "--show-current"])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("获取当前分支失败: {}", e))?;
    
    let branch = String::from_utf8_lossy(&branch_output.stdout).trim().to_string();
    
    // 4. 强制推送
    let output = Command::new("git")
        .args(&["push", "--force", "origin", &branch])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("git push --force 失败: {}", e))?;
    
    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        error!("❌ [Git] 强制推送失败: {}", error);
        return Err(format!("强制推送失败: {}", error));
    }
    
    info!("✅ [Git] 强制推送成功");
    
    Ok(PushResult {
        success: true,
        files_pushed: 1,
        commit_hash: String::new(),
        message: "强制推送成功".to_string(),
    })
}

/// 强制拉取（覆盖本地）
#[command]
pub async fn force_pull_command(app_handle: AppHandle) -> Result<PullResult, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    
    info!("🔄 [Git] 开始强制拉取");
    
    // 1. 获取远程更新
    let fetch_output = Command::new("git")
        .args(&["fetch", "origin"])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("git fetch 失败: {}", e))?;
    
    if !fetch_output.status.success() {
        let error = String::from_utf8_lossy(&fetch_output.stderr);
        return Err(format!("git fetch 失败: {}", error));
    }
    
    // 2. 获取当前分支
    let branch_output = Command::new("git")
        .args(&["branch", "--show-current"])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("获取当前分支失败: {}", e))?;
    
    let branch = String::from_utf8_lossy(&branch_output.stdout).trim().to_string();
    
    // 3. 重置到远程分支
    let output = Command::new("git")
        .args(&["reset", "--hard", &format!("origin/{}", branch)])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("git reset 失败: {}", e))?;
    
    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        error!("❌ [Git] 强制拉取失败: {}", error);
        return Err(format!("强制拉取失败: {}", error));
    }
    
    info!("✅ [Git] 强制拉取成功");
    
    // 获取变更的文件列表用于增量扫描（强制拉取无 pre_pull_head，使用 ORIG_HEAD 回退）
    let changed_files = get_changed_files_after_pull(&workspace_root, None)?;
    
    // 将变更的文件添加到 FileWatcher 忽略列表，避免触发删除事件
    if !changed_files.is_empty() {
        if let Some(watcher_state) = app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>() {
            if let Ok(watcher_lock) = watcher_state.lock() {
                if let Some(ref watcher) = *watcher_lock {
                    for file in &changed_files {
                        let file_path = workspace_root.join(file);
                        watcher.ignore_next_change(file_path);
                    }
                    info!("🔕 [Git] 已将 {} 个文件添加到 FileWatcher 忽略列表", changed_files.len());
                }
            }
        }
    }
    
    // 使用增量扫描更新 cache
    if !changed_files.is_empty() {
        info!("📋 [Git] 检测到 {} 个 .md 文件变更", changed_files.len());
        
        if let Some(cache_state) = app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>() {
            if let Ok(mut cache) = cache_state.write() {
                if let Ok(added_count) = cache.scan_files(&changed_files, &workspace_root) {
                    info!("✅ [Git] 增量扫描完成，添加 {} 个新文件", added_count);
                    let _ = cache.save();
                }
            }
        }
    }
    
    Ok(PullResult {
        success: true,
        files_updated: changed_files.len(),
        has_conflicts: false,
        conflict_files: vec![],
        message: "强制拉取成功".to_string(),
        pre_pull_head: None,
        untracked_files: vec![],
        last_sync_time: Some(chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string()),
    })
}

/// 批量解决冲突的返回结果
#[derive(serde::Serialize)]
pub struct ResolveConflictsResult {
    pub success: bool,
    pub resolved_count: usize,
}

/// 批量解决冲突
#[command]
pub fn resolve_conflicts_batch(
    app_handle: AppHandle,
    resolutions: Vec<(String, ConflictStrategy)>,
) -> Result<ResolveConflictsResult, String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    
    info!("🔄 [Git] 开始批量解决冲突，共 {} 个文件", resolutions.len());
    
    // 收集所有冲突文件路径
    let conflict_file_paths: Vec<String> = resolutions.iter()
        .map(|(path, _)| path.clone())
        .collect();
    
    let resolved_count = conflict_file_paths.len();
    
    // 检查是否处于 merge 状态
    let merge_head_path = workspace_root.join(".git/MERGE_HEAD");
    let is_merge_conflict = merge_head_path.exists();
    
    info!("📋 [Git] 冲突类型: {}", if is_merge_conflict { "Merge 冲突" } else { "本地更改冲突" });
    
    // 在执行任何 Git 操作之前，将冲突文件添加到 FileWatcher 的忽略列表
    // 注意：每个 Git 操作都可能触发文件变更事件，需要多次添加忽略
    if !conflict_file_paths.is_empty() {
        info!("🔒 [Git] 将 {} 个冲突文件添加到 FileWatcher 忽略列表（多次）", conflict_file_paths.len());
        
        if let Some(watcher_state) = app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>() {
            if let Ok(watcher_lock) = watcher_state.lock() {
                if let Some(ref watcher) = *watcher_lock {
                    for _ in 0..5 {
                        for file_path in &conflict_file_paths {
                            let full_path = workspace_root.join(file_path);
                            watcher.ignore_next_change(full_path.clone());
                        }
                    }
                    info!("✅ [Git] 已添加到忽略列表（5次）");
                }
            }
        }
    }
    
    if is_merge_conflict {
        for (file_path, strategy) in resolutions {
            info!("📝 [Git] 解决 Merge 冲突: {} - {:?}", file_path, strategy);
            
            match strategy {
                ConflictStrategy::KeepLocal => {
                    // write_conflict_file 已将正确内容写入磁盘，直接 git add
                    let output = Command::new("git")
                        .args(&["add", &file_path])
                        .current_dir(&workspace_root)
                        .output()
                        .map_err(|e| format!("标记冲突已解决失败: {}", e))?;
                    
                    if !output.status.success() {
                        let error = String::from_utf8_lossy(&output.stderr);
                        return Err(format!("标记冲突已解决失败: {}", error));
                    }
                }
                ConflictStrategy::KeepRemote => {
                    resolve_conflict(&workspace_root, &file_path, strategy)?;
                }
                ConflictStrategy::DiscardLocalUntracked => {
                    // Untracked files 场景不应出现在 merge conflict 中
                    warn!("⚠️ [Git] DiscardLocalUntracked 策略不适用于 merge 冲突，跳过: {}", file_path);
                }
            }
        }
        
        let output = Command::new("git")
            .args(&["commit", "--no-edit"])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("完成合并失败: {}", e))?;
        
        if !output.status.success() {
            let error = String::from_utf8_lossy(&output.stderr);
            return Err(format!("完成合并失败: {}", error));
        }
    } else {
        // 本地更改冲突：根据策略处理
        let has_local_strategy = resolutions.iter().any(|(_, s)| matches!(s, ConflictStrategy::KeepLocal));
        let has_remote_strategy = resolutions.iter().any(|(_, s)| matches!(s, ConflictStrategy::KeepRemote));
        
        for (file_path, strategy) in resolutions {
            info!("📝 [Git] 解决本地更改冲突: {} - {:?}", file_path, strategy);
            
            match strategy {
                ConflictStrategy::KeepLocal => {
                    // 保留本地版本：先 add，然后 commit
                    let output = Command::new("git")
                        .args(&["add", &file_path])
                        .current_dir(&workspace_root)
                        .output()
                        .map_err(|e| format!("添加文件失败: {}", e))?;
                    
                    if !output.status.success() {
                        let error = String::from_utf8_lossy(&output.stderr);
                        return Err(format!("添加文件失败: {}", error));
                    }
                }
                ConflictStrategy::KeepRemote => {
                    // 保留远程版本：stash 本地更改，pull 后丢弃 stash
                    let output = Command::new("git")
                        .args(&["stash", "push", "-u", "--", &file_path])
                        .current_dir(&workspace_root)
                        .output()
                        .map_err(|e| format!("Stash 失败: {}", e))?;
                    
                    if output.status.success() {
                        let stdout = String::from_utf8_lossy(&output.stdout);
                        if !stdout.contains("No local changes") {
                            let drop_output = Command::new("git")
                                .args(&["stash", "drop"])
                                .current_dir(&workspace_root)
                                .output();
                            if let Ok(drop_result) = drop_output {
                                if drop_result.status.success() {
                                    info!("🗑️ [Git] 已丢弃 stash（保留远程版本）: {}", file_path);
                                }
                            }
                        }
                    } else {
                        let error = String::from_utf8_lossy(&output.stderr);
                        warn!("⚠️ [Git] Stash 失败（可能文件未修改）: {}", error);
                    }
                }
                ConflictStrategy::DiscardLocalUntracked => {
                    // Untracked files 场景不应出现在本地更改冲突中
                    warn!("⚠️ [Git] DiscardLocalUntracked 策略不适用于本地更改冲突，跳过: {}", file_path);
                }
            }
            
            info!("✅ [Git] 冲突已解决: {}", file_path);
        }
        
        // 对于保留本地版本的情况，需要 commit
        if has_local_strategy {
            let output = Command::new("git")
                .args(&["commit", "-m", "Resolve conflicts: keep local changes"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("提交失败: {}", e))?;
            
            if !output.status.success() {
                let error = String::from_utf8_lossy(&output.stderr);
                if error.contains("nothing to commit") {
                    info!("ℹ️ [Git] 没有更改需要提交，使用 reset 清理状态");
                    let reset_output = Command::new("git")
                        .args(&["reset", "HEAD"])
                        .current_dir(&workspace_root)
                        .output()
                        .map_err(|e| format!("Reset 失败: {}", e))?;
                    if !reset_output.status.success() {
                        let reset_error = String::from_utf8_lossy(&reset_output.stderr);
                        warn!("⚠️ [Git] Reset 失败: {}", reset_error);
                    }
                } else {
                    return Err(format!("提交失败: {}", error));
                }
            }
        }
        
        // 保留本地：push 到远程（用户选择的是覆盖远程）
        // 保留远程：pull 拉取远程（用户选择的是丢弃本地）
        if has_local_strategy {
            let branch_output = Command::new("git")
                .args(&["branch", "--show-current"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("获取分支失败: {}", e))?;
            let branch = String::from_utf8_lossy(&branch_output.stdout).trim().to_string();
            
            let push_output = Command::new("git")
                .args(&["push", "origin", &branch])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("Push 失败: {}", e))?;
            
            if !push_output.status.success() {
                let stderr = String::from_utf8_lossy(&push_output.stderr);
                if stderr.contains("rejected") || stderr.contains("non-fast-forward") {
                    info!("ℹ️ [Git] 普通 push 被拒绝，尝试 force push");
                    let force_output = Command::new("git")
                        .args(&["push", "--force", "origin", &branch])
                        .current_dir(&workspace_root)
                        .output()
                        .map_err(|e| format!("Force push 失败: {}", e))?;
                    if !force_output.status.success() {
                        let err = String::from_utf8_lossy(&force_output.stderr);
                        return Err(format!("推送失败: {}", err));
                    }
                } else {
                    return Err(format!("推送失败: {}", stderr));
                }
            }
        } else if has_remote_strategy {
            // 保留远程：先 fetch，再 pull；若 pull 冲突则 reset --hard 到远程
            let fetch_output = Command::new("git")
                .args(&["fetch", "origin"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("Fetch 失败: {}", e))?;
            if !fetch_output.status.success() {
                let err = String::from_utf8_lossy(&fetch_output.stderr);
                return Err(format!("Fetch 失败: {}", err));
            }
            
            let branch_output = Command::new("git")
                .args(&["branch", "--show-current"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("获取分支失败: {}", e))?;
            let branch = String::from_utf8_lossy(&branch_output.stdout).trim().to_string();
            
            let pull_output = Command::new("git")
                .args(&["pull"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("Pull 失败: {}", e))?;
            
            if !pull_output.status.success() {
                let stderr = String::from_utf8_lossy(&pull_output.stderr);
                let stdout = String::from_utf8_lossy(&pull_output.stdout);
                if stderr.contains("CONFLICT") || stdout.contains("CONFLICT") {
                    info!("ℹ️ [Git] Pull 产生冲突，用户选择保留远程，reset 到 origin");
                    let reset_output = Command::new("git")
                        .args(&["merge", "--abort"])
                        .current_dir(&workspace_root)
                        .output();
                    let _ = reset_output;
                    
                    let reset_output = Command::new("git")
                        .args(&["reset", "--hard", &format!("origin/{}", branch)])
                        .current_dir(&workspace_root)
                        .output()
                        .map_err(|e| format!("Reset 失败: {}", e))?;
                    if !reset_output.status.success() {
                        let err = String::from_utf8_lossy(&reset_output.stderr);
                        return Err(format!("重置到远程失败: {}", err));
                    }
                    info!("✅ [Git] 已重置到远程版本");
                } else {
                    return Err(format!("Pull 失败: {}", stderr));
                }
            }
        }
    }
    
    info!("✅ [Git] 批量解决冲突成功");
    
    // 等待 FileWatcher 处理完所有事件（给它一点时间）
    std::thread::sleep(Duration::from_millis(500));
    
    // 更新 cache 中的冲突文件
    if !conflict_file_paths.is_empty() {
        info!("📋 [Git] 更新 cache，共 {} 个冲突文件", conflict_file_paths.len());
        
        if let Some(cache_state) = app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>() {
            if let Ok(mut cache) = cache_state.write() {
                match cache.scan_files(&conflict_file_paths, &workspace_root) {
                    Ok(added_count) => {
                        info!("✅ [Git] Cache 更新完成，添加 {} 个文件", added_count);
                        let _ = cache.save();
                        
                        // 再次等待，确保 FileWatcher 不会在我们保存后删除
                        drop(cache);
                        std::thread::sleep(Duration::from_millis(500));
                        
                        // 最后再次确认文件在 cache 中
                        if let Ok(mut cache) = cache_state.write() {
                            info!("🔍 [Git] 最后确认：再次扫描冲突文件");
                            match cache.scan_files(&conflict_file_paths, &workspace_root) {
                                Ok(count) => {
                                    if count > 0 {
                                        info!("✅ [Git] 最后确认：重新添加了 {} 个文件", count);
                                    } else {
                                        info!("✅ [Git] 最后确认：文件已在 cache 中");
                                    }
                                    let _ = cache.save();
                                }
                                Err(e) => {
                                    warn!("⚠️ [Git] 最后确认失败: {}", e);
                                }
                            }
                        }
                    }
                    Err(e) => {
                        warn!("⚠️ [Git] Cache 更新失败: {}", e);
                    }
                }
            }
        }
    }
    
    // 冲突解决后，恢复自动同步
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        if let Ok(sync_manager) = sync_state.lock() {
            if let Some(ref manager) = *sync_manager {
                if let Err(e) = manager.resume() {
                    warn!("⚠️ [Git] 恢复自动同步失败: {}", e);
                }
            }
        }
    }
    
    Ok(ResolveConflictsResult {
        success: true,
        resolved_count,
    })
}

/// 写入冲突文件内容（用于手动编辑后保存）
#[command]
pub fn write_conflict_file(
    app_handle: AppHandle,
    file_path: String,
    content: String,
) -> Result<(), String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    
    let full_path = workspace_root.join(&file_path);
    
    info!("💾 [Git] 写入编辑后的冲突文件: {}", file_path);
    
    std::fs::write(&full_path, content)
        .map_err(|e| format!("写入文件失败: {}", e))?;
    
    info!("✅ [Git] 文件写入成功: {}", file_path);
    
    Ok(())
}

/// 删除未跟踪文件（用于解决 untracked files 冲突）
#[command]
pub fn remove_untracked_file_command(
    app_handle: AppHandle,
    file_path: String,
) -> Result<(), String> {
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?
        .ok_or("工作区未设置".to_string())?;
    
    let full_path = workspace_root.join(&file_path);
    
    info!("🗑️ [Git] 删除未跟踪文件: {}", file_path);
    
    if !full_path.exists() {
        info!("ℹ️ [Git] 文件不存在，无需删除: {}", file_path);
        return Ok(());
    }
    
    std::fs::remove_file(&full_path)
        .map_err(|e| format!("删除文件失败: {}", e))?;
    
    info!("✅ [Git] 已删除未跟踪文件: {}", file_path);
    
    Ok(())
}
