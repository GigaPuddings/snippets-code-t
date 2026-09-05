use super::*;

// ============= Tauri 命令 =============

use tauri::{command, AppHandle};

pub(super) fn require_git_sync_plugin(app_handle: &AppHandle) -> Result<(), String> {
    crate::app_config::require_plugin_enabled(app_handle, "git-sync")
}

/// 检查 Git 是否安装
#[command]
pub fn check_git_installed_command() -> Result<bool, String> {
    check_git_installed()
}

/// 检查是否是 Git 仓库
#[command]
pub fn check_git_repo_command(app_handle: AppHandle) -> Result<bool, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    check_git_repo(&workspace_root)
}

/// 获取 Git 状态（带 2 秒缓存，减少频繁调用）
#[command]
pub fn get_git_status_command(app_handle: AppHandle) -> Result<GitStatus, String> {
    require_git_sync_plugin(&app_handle)?;
    let Some(workspace_root) = crate::json_config::get_workspace_root(&app_handle)? else {
        debug!("📊 [Git] 工作区未设置，返回空 Git 状态");
        return Ok(empty_git_status());
    };

    // 尝试从缓存获取
    if let Some(cached) = get_cached_git_status() {
        debug!(
            "📬 [Git] 使用缓存的 Git 状态（2秒内），workspace_root: {}",
            workspace_root.display()
        );
        return Ok(cached);
    }

    debug!(
        "📬 [Git] 前端请求 Git 状态，workspace_root: {}",
        workspace_root.display()
    );
    let status = GitSyncService::new(&workspace_root).status()?;
    info!(
        "📊 [Git] 前端 Git 状态请求完成: is_repo={}, has_remote={}, has_changes={}, branch={}",
        status.is_repo, status.has_remote, status.has_changes, status.branch
    );

    // 更新缓存
    update_git_status_cache(status.clone());

    Ok(status)
}

#[command]
pub fn get_git_records_command(
    app_handle: AppHandle,
    limit: Option<usize>,
) -> Result<Vec<GitRecord>, String> {
    require_git_sync_plugin(&app_handle)?;
    let Some(workspace_root) = crate::json_config::get_workspace_root(&app_handle)? else {
        return Ok(vec![]);
    };

    get_git_records(&workspace_root, limit.unwrap_or(10))
}

#[command]
pub fn get_git_contribution_activity_command(
    app_handle: AppHandle,
    year: Option<i32>,
) -> Result<GitContributionActivity, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)?;
    get_git_contribution_activity(workspace_root.as_deref(), year)
}

#[command]
pub fn restore_git_record_file_command(
    app_handle: AppHandle,
    commit_hash: String,
    file_path: String,
) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;

    restore_git_record_file(&workspace_root, &commit_hash, &file_path)
}

/// 获取系统 Git 配置
#[command]
pub fn get_system_git_config_command(app_handle: AppHandle) -> Result<SystemGitConfig, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)
        .ok()
        .flatten();
    get_system_git_config(workspace_root.as_deref())
}

/// 配置 Git
#[command]
pub fn configure_git_command(app_handle: AppHandle, config: GitConfig) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;

    // 配置用户信息
    configure_git_user(&workspace_root, &config.user_name, &config.user_email)?;

    // 配置远程仓库
    configure_remote(&workspace_root, &config.remote_url, &config.token)?;

    // 检查 .gitignore（仅检查，不自动创建）
    check_gitignore(&workspace_root)?;

    Ok(())
}

/// 初始化 Git 仓库并配置远程（保存 Git 配置后自动调用）
#[command]
pub fn init_git_repository_command(
    app_handle: AppHandle,
    user_name: String,
    user_email: String,
    remote_url: String,
    token: String,
) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;

    info!(
        "🚀 [Git] 开始初始化 Git 仓库，workspace_root: {}",
        workspace_root.display()
    );

    // 1. 检查是否已是 Git 仓库
    if !check_git_repo(&workspace_root)? {
        // 初始化仓库
        let init_output = crate::git_common::git_command()
            .args(["init", "-b", MAIN_BRANCH])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("初始化 Git 仓库失败: {}", e))?;

        if !init_output.status.success() {
            let error = get_git_stderr(&init_output);
            return Err(format!("初始化 Git 仓库失败: {}", error));
        }
        info!("✅ [Git] Git 仓库初始化成功");
    } else {
        info!("ℹ️ [Git] 已是 Git 仓库，跳过初始化");
    }

    // 2. 配置用户名和邮箱
    configure_git_user(&workspace_root, &user_name, &user_email)?;

    // 3. 配置远程仓库（内部会校验 token）
    configure_remote(&workspace_root, &remote_url, &token)?;

    // 4. 创建默认忽略规则，但不在初始化阶段导出配置投影。
    // 新设备可能正准备拉取一个已经包含同步协议的远端仓库；提前生成同名
    // 未跟踪文件会阻塞 pull。配置投影在首次 push 前生成。
    ensure_gitignore(&workspace_root)?;

    // 5. 只做非破坏性的 fetch。保存/更新 Git 配置不应自动 reset 到远端，
    // 否则远端缺少的本地文件会被静默删除，并进一步清理 cache。
    let repository = GitRepository::new(&workspace_root);
    let fetch_out = repository.fetch_origin_all();

    if let Ok(ref out) = fetch_out {
        if out.status.success() {
            info!("✅ [Git] 远程信息获取成功，未自动覆盖本地工作区");
            if let Ok(remote_branch) = get_remote_default_branch(&workspace_root) {
                let local_branch = get_current_branch(&workspace_root).unwrap_or_default();
                if !local_branch.is_empty() && local_branch != remote_branch {
                    info!(
                        "ℹ️ [Git] 当前分支为 {}，main 主分支为 {}，需要同步时将由用户确认处理",
                        local_branch, remote_branch
                    );
                }
            }
        } else {
            let err = get_git_stderr(out);
            info!("ℹ️ [Git] fetch 失败（可能网络或空仓库）: {}", err);
        }
    } else {
        info!("ℹ️ [Git] fetch 执行失败，跳过远程状态同步");
    }

    // 已存在的工作区可能早已位于远端最新提交，后续 pull 会得到 0 变更。
    // 因此配置 Git 成功后也要执行一次幂等导入，不能依赖 Git diff 触发。
    import_portable_sync_config(&app_handle, &workspace_root);

    info!("✅ [Git] Git 仓库初始化完成");

    // 配置完成后异步重建搜索索引。
    let workspace_root_buf = workspace_root.to_path_buf();
    let app_handle_rebuild = app_handle.clone();
    tauri::async_runtime::spawn(async move {
        let workspace_root = &workspace_root_buf;
        let mut new_index_opt = None;
        if let Some(cache_state) =
            app_handle_rebuild.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>()
        {
            let cache_clone_opt = match cache_state.read() {
                Ok(cache) => Some(cache.clone()),
                Err(e) => {
                    error!(
                        "❌ [Git] 获取 CacheManager 读锁失败，无法在初始化后重建索引: {}",
                        e
                    );
                    None
                }
            };
            if let Some(cache_clone) = cache_clone_opt {
                match crate::markdown::IndexManager::build_index(workspace_root, &cache_clone).await
                {
                    Ok(new_index) => {
                        info!("✅ [Git] 初始化后搜索索引重建完成");
                        new_index_opt = Some(new_index);
                    }
                    Err(e) => {
                        error!("❌ [Git] 初始化后重建搜索索引失败: {}", e);
                    }
                }
            }
        }
        if let Some(new_index) = new_index_opt {
            if let Some(index_state) = app_handle_rebuild
                .try_state::<Arc<std::sync::RwLock<Option<crate::markdown::IndexManager>>>>()
            {
                if let Ok(mut index_lock) = index_state.write() {
                    *index_lock = Some(new_index);
                    info!("✅ [Git] 全局搜索索引已更新（配置 Git 后）");
                }
            }
        }
    });

    Ok(())
}

#[command]
pub fn switch_git_branch_command(app_handle: AppHandle, branch: String) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    switch_git_branch(&workspace_root, &branch)
}

/// 测试 Git 连接（验证 Token 和远程仓库是否可用）
#[command]
pub fn test_git_connection_command(
    app_handle: AppHandle,
    remote_url: String,
    token: String,
) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;

    let clean_remote_url = remove_token_from_url(&remote_url);
    let authenticated_url = build_authenticated_url(&clean_remote_url, &token);

    // 仅 HTTPS + token 需要验证
    if clean_remote_url.starts_with("https://") && !token.is_empty() {
        validate_token_url(&workspace_root, &authenticated_url)?;
    } else if clean_remote_url.starts_with("git@") || token.is_empty() {
        // SSH 或无 token，简单检查 remote 是否可访问
        let output = crate::git_common::git_command()
            .args(["ls-remote", "--heads", &clean_remote_url])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("验证远程连接失败: {}", e))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            return Err(format!("远程仓库不可访问: {}", stderr));
        }
    }

    Ok(())
}

/// 执行 git pull
#[command]
pub async fn git_pull_command(app_handle: AppHandle) -> Result<PullResult, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    application::pull(app_handle, workspace_root).await
}

/// 执行 git push
#[command]
pub async fn git_push_command(
    app_handle: AppHandle,
    message: Option<String>,
) -> Result<PushResult, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    application::push(app_handle, workspace_root, message).await
}

/// 解决冲突
#[command]
pub fn resolve_conflict_command(
    app_handle: AppHandle,
    file_path: String,
    strategy: ConflictStrategy,
) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    resolve_conflict(&workspace_root, &file_path, strategy)
}

/// 检查 .gitignore
#[command]
pub fn check_gitignore_command(app_handle: AppHandle) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    check_gitignore(&workspace_root)
}

/// 仅从工作区检测 Git 配置（不调用系统 git config，避免终端闪退）
#[command]
pub fn get_workspace_git_config_command(app_handle: AppHandle) -> Result<SystemGitConfig, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root = crate::json_config::get_workspace_root(&app_handle)
        .ok()
        .flatten();
    get_workspace_git_config(workspace_root.as_deref())
}

/// 确保工作区存在 .gitignore，不存在则创建
#[command]
pub fn ensure_gitignore_command(app_handle: AppHandle) -> Result<bool, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    ensure_gitignore(&workspace_root)
}

// ============= 自动同步 Tauri 命令 =============

/// 启动自动同步
#[command]
pub fn start_auto_sync_command(app_handle: AppHandle) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    // 获取工作区根目录
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;

    // 获取 Git 设置
    use crate::app_config::AppConfigManager;

    let config_state = app_handle
        .try_state::<Arc<StdRwLock<AppConfigManager>>>()
        .ok_or("AppConfigManager 未初始化".to_string())?;

    let manager = config_state
        .read()
        .map_err(|e| format!("获取配置锁失败: {}", e))?;

    let git_settings = manager.get_git_settings();

    if !git_settings.enabled || !git_settings.auto_sync {
        return Err("自动同步未启用".to_string());
    }

    let delay_minutes = git_settings.auto_sync_delay;

    // 创建或获取 AutoSyncManager
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let mut sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state
            .lock()
            .map_err(|e| format!("获取同步管理器锁失败: {}", e))?;

        let should_replace = sync_manager
            .as_ref()
            .is_some_and(|manager| !manager.matches_config(&workspace_root, delay_minutes));

        if should_replace {
            if let Some(manager) = sync_manager.as_ref() {
                manager.stop()?;
            }
            *sync_manager = None;
        }

        if sync_manager.is_none() {
            *sync_manager = Some(AutoSyncManager::new(
                workspace_root,
                delay_minutes,
                app_handle.clone(),
            ));
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
    require_git_sync_plugin(&app_handle)?;
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state
            .lock()
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
    require_git_sync_plugin(&app_handle)?;
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state
            .lock()
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
    require_git_sync_plugin(&app_handle)?;
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state
            .lock()
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
    require_git_sync_plugin(&app_handle)?;
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state
            .lock()
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
    require_git_sync_plugin(&app_handle)?;
    if let Some(sync_state) = app_handle.try_state::<Arc<Mutex<Option<AutoSyncManager>>>>() {
        let sync_manager: std::sync::MutexGuard<Option<AutoSyncManager>> = sync_state
            .lock()
            .map_err(|e| format!("获取同步管理器锁失败: {}", e))?;

        if let Some(ref manager) = *sync_manager {
            manager.resume()?;
        }
    }

    Ok(())
}

#[command]
pub fn get_conflict_file_content(
    app_handle: AppHandle,
    file_path: String,
) -> Result<ConflictFileContent, String> {
    conflict::get_conflict_file_content_impl(app_handle, file_path)
}

#[command]
pub async fn force_push_command(
    app_handle: AppHandle,
    message: Option<String>,
) -> Result<PushResult, String> {
    conflict::force_push_impl(app_handle, message).await
}

#[command]
pub async fn force_pull_command(app_handle: AppHandle) -> Result<PullResult, String> {
    conflict::force_pull_impl(app_handle).await
}

#[command]
pub fn resolve_conflicts_batch(
    app_handle: AppHandle,
    resolutions: Vec<(String, ConflictStrategy)>,
) -> Result<ResolveConflictsResult, String> {
    conflict::resolve_conflicts_batch_impl(app_handle, resolutions)
}

#[command]
pub fn write_conflict_file(
    app_handle: AppHandle,
    file_path: String,
    content: String,
) -> Result<(), String> {
    conflict::write_conflict_file_impl(app_handle, file_path, content)
}

#[command]
pub fn remove_untracked_file_command(
    app_handle: AppHandle,
    file_path: String,
) -> Result<(), String> {
    conflict::remove_untracked_file_impl(app_handle, file_path)
}
