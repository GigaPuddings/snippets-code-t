use super::*;

use std::path::Path;
use std::time::Duration;

use log::info;
use tauri::{AppHandle, Emitter, Manager};

use super::commands::require_git_sync_plugin;
use super::types::ConflictStrategy;

// ============= Git 操作 =============

/// 解决冲突
pub fn resolve_conflict(
    workspace_root: &Path,
    file_path: &str,
    strategy: ConflictStrategy,
) -> Result<(), String> {
    let attachment_roots = crate::sync_data::managed_attachment_roots(workspace_root);
    if !crate::sync_data::is_allowed_sync_path(file_path, &attachment_roots) {
        return Err(format!("拒绝解决同步白名单之外的文件冲突: {}", file_path));
    }

    match strategy {
        ConflictStrategy::KeepLocal => {
            // 使用本地版本
            let output = crate::git_common::git_command()
                .args(["checkout", "--ours", file_path])
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
            let output = crate::git_common::git_command()
                .args(["checkout", "--theirs", file_path])
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
                std::fs::remove_file(&full_path).map_err(|e| format!("删除本地文件失败: {}", e))?;
                info!("🗑️ [Git] 已删除本地未跟踪文件: {}", file_path);
            } else {
                info!("ℹ️ [Git] 文件不存在，无需删除: {}", file_path);
            }
        }
    }

    // 标记为已解决
    let output = crate::git_common::git_command()
        .args(["add", file_path])
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
pub(crate) fn get_conflict_file_content_impl(
    app_handle: AppHandle,
    file_path: String,
) -> Result<ConflictFileContent, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let normalized_path = file_path.replace('\\', "/");
    let attachment_roots = crate::sync_data::managed_attachment_roots(&workspace_root);
    if !crate::sync_data::is_allowed_sync_path(&normalized_path, &attachment_roots) {
        return Err(format!(
            "拒绝读取同步白名单之外的冲突文件: {}",
            normalized_path
        ));
    }

    let full_path = workspace_root.join(&normalized_path);

    let merge_head_path = workspace_root.join(".git/MERGE_HEAD");
    let is_merge_conflict = merge_head_path.exists();

    let local_content = if is_merge_conflict {
        let head_output = crate::git_common::git_command()
            .args(["show", &format!("HEAD:{}", normalized_path)])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("获取本地版本失败: {}", e))?;

        if head_output.status.success() {
            String::from_utf8_lossy(&head_output.stdout).to_string()
        } else {
            warn!(
                "⚠️ [Git] git show HEAD:{} 失败，回退读取磁盘文件",
                normalized_path
            );
            std::fs::read_to_string(&full_path).map_err(|e| format!("读取本地文件失败: {}", e))?
        }
    } else {
        std::fs::read_to_string(&full_path).map_err(|e| format!("读取本地文件失败: {}", e))?
    };

    // 获取远程版本（MERGE_HEAD 或 origin/branch）
    let remote_output = crate::git_common::git_command()
        .args(["show", &format!("MERGE_HEAD:{}", normalized_path)])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("获取远程版本失败: {}", e))?;

    let remote_content = if remote_output.status.success() {
        String::from_utf8_lossy(&remote_output.stdout).to_string()
    } else {
        // 如果 MERGE_HEAD 不存在，尝试从 origin/branch 获取
        let branch_output = crate::git_common::git_command()
            .args(["branch", "--show-current"])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("获取当前分支失败: {}", e))?;

        let branch = String::from_utf8_lossy(&branch_output.stdout)
            .trim()
            .to_string();

        let origin_output = crate::git_common::git_command()
            .args(["show", &format!("origin/{}:{}", branch, normalized_path)])
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
    let base_output = crate::git_common::git_command()
        .args(["show", &format!(":1:{}", normalized_path)])
        .current_dir(&workspace_root)
        .output()
        .ok();

    let base_content = base_output.and_then(|output| {
        if output.status.success() {
            Some(String::from_utf8_lossy(&output.stdout).to_string())
        } else {
            None
        }
    });

    info!("✅ [Git] 获取冲突文件内容: {}", normalized_path);

    Ok(ConflictFileContent {
        file_path: normalized_path,
        remote_content,
        local_content,
        base_content,
    })
}

/// 强制推送（覆盖远程）
pub(crate) async fn force_push_impl(
    app_handle: AppHandle,
    message: Option<String>,
) -> Result<PushResult, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    ensure_gitignore(&workspace_root)?;
    crate::sync_data::export_sync_bundle(&app_handle, &workspace_root)?;
    let _git_operation_guard = GIT_OPERATION_LOCK
        .lock()
        .map_err(|e| format!("获取 Git 操作锁失败: {}", e))?;

    info!("🔄 [Git] 开始强制推送");

    // 如果处于 merge 状态，先 abort 以恢复干净的本地状态，避免提交冲突标记
    let merge_head_path = workspace_root.join(".git/MERGE_HEAD");
    if merge_head_path.exists() {
        info!("⚠️ [Git] 检测到 merge 状态，先执行 merge --abort");
        let abort_output = crate::git_common::git_command()
            .args(["merge", "--abort"])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("git merge --abort 失败: {}", e))?;

        if !abort_output.status.success() {
            let error = String::from_utf8_lossy(&abort_output.stderr);
            warn!("⚠️ [Git] merge --abort 失败: {}", error);
        }
    }

    // 1. 只添加同步白名单范围。强制推送只改变远端分支策略，不扩大数据范围。
    let staged_files = crate::sync_data::stage_allowed_sync_changes(&workspace_root)?;

    // 2. 提交
    let commit_message = message.unwrap_or_else(|| {
        format!(
            "Force push: {}",
            chrono::Local::now().format("%Y-%m-%d %H:%M:%S")
        )
    });

    if !staged_files.is_empty() {
        let commit_output = crate::git_common::git_command()
            .args(["commit", "-m", &commit_message])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("git commit 失败: {}", e))?;

        if !commit_output.status.success() {
            let stderr = String::from_utf8_lossy(&commit_output.stderr);
            if !stderr.contains("nothing to commit") {
                return Err(format!("git commit 失败: {}", stderr));
            }
        }
    }

    // 3. 获取当前分支
    let branch_output = crate::git_common::git_command()
        .args(["branch", "--show-current"])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("获取当前分支失败: {}", e))?;

    let branch = String::from_utf8_lossy(&branch_output.stdout)
        .trim()
        .to_string();

    // 4. 强制推送
    let output = crate::git_common::git_command()
        .args(["push", "--force", "origin", &branch])
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
        files_pushed: staged_files.len(),
        commit_hash: String::new(),
        message: "强制推送成功".to_string(),
    })
}

/// 强制拉取（覆盖本地）
pub(crate) async fn force_pull_impl(app_handle: AppHandle) -> Result<PullResult, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let _git_operation_guard = GIT_OPERATION_LOCK
        .lock()
        .map_err(|e| format!("获取 Git 操作锁失败: {}", e))?;

    info!("🔄 [Git] 开始强制拉取");
    if let Err(e) = app_handle.emit_to("config", "git-pull-start", ()) {
        warn!("⚠️ [Git] 发送 git-pull-start 事件失败: {}", e);
    }
    if let Err(e) = app_handle.emit_to("main", "git-pull-start", ()) {
        warn!("⚠️ [Git] 发送 git-pull-start 到 main 失败: {}", e);
    }

    // 1. 获取远程更新
    let fetch_output = crate::git_common::git_command()
        .args(["fetch", "origin"])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("git fetch 失败: {}", e))?;

    if !fetch_output.status.success() {
        let error = String::from_utf8_lossy(&fetch_output.stderr);
        return Err(format!("git fetch 失败: {}", error));
    }

    // 2. 获取当前分支。detached 或空仓库场景下回退远端默认分支。
    let mut branch = get_current_branch(&workspace_root)?;
    if branch.is_empty() {
        branch =
            get_remote_default_branch(&workspace_root).unwrap_or_else(|_| MAIN_BRANCH.to_string());
    }
    if branch.is_empty() {
        branch = MAIN_BRANCH.to_string();
    }

    let remote_ref = format!("origin/{}", branch);
    let remote_ref_output = crate::git_common::git_command()
        .args(["rev-parse", "--verify", &remote_ref])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("检查远程分支失败: {}", e))?;
    if !remote_ref_output.status.success() {
        let error = get_git_stderr(&remote_ref_output);
        return Err(format!(
            "强制拉取失败: 远程分支 {} 不存在或不可访问: {}",
            remote_ref, error
        ));
    }

    prepare_auto_generated_untracked_files_for_pull(&workspace_root, &remote_ref)?;

    // 3. 重置到远程分支
    let output = crate::git_common::git_command()
        .args(["reset", "--hard", &remote_ref])
        .current_dir(&workspace_root)
        .output()
        .map_err(|e| format!("git reset 失败: {}", e))?;

    if !output.status.success() {
        let error = String::from_utf8_lossy(&output.stderr);
        error!("❌ [Git] 强制拉取失败: {}", error);
        return Err(format!("强制拉取失败: {}", error));
    }

    info!("✅ [Git] 强制拉取成功");
    import_portable_sync_config(&app_handle, &workspace_root);

    // 获取变更的文件列表用于增量扫描（强制拉取无 pre_pull_head，使用 ORIG_HEAD 回退）
    let by_status = get_changed_files_with_status(&workspace_root, None)?;
    let changed_files = by_status.all();
    apply_non_content_sync_changes(&app_handle, &by_status);

    // 将变更的文件添加到 FileWatcher 忽略列表，避免触发删除事件
    if !changed_files.is_empty() {
        if let Some(watcher_state) =
            app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>()
        {
            if let Ok(watcher_lock) = watcher_state.lock() {
                if let Some(ref watcher) = *watcher_lock {
                    for file in &changed_files {
                        let file_path = workspace_root.join(file);
                        watcher.ignore_next_change(file_path);
                    }
                    info!(
                        "🔕 [Git] 已将 {} 个文件添加到 FileWatcher 忽略列表",
                        changed_files.len()
                    );
                }
            }
        }
    }

    // 使用增量扫描更新 cache
    if !changed_files.is_empty() {
        info!("📋 [Git] 检测到 {} 个 .md 文件变更", changed_files.len());

        if let Some(cache_state) =
            app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>()
        {
            if let Ok(mut cache) = cache_state.write() {
                if let Ok(added_count) = cache.scan_files(&changed_files, &workspace_root) {
                    info!("✅ [Git] 增量扫描完成，添加 {} 个新文件", added_count);
                    let _ = cache.save();
                }
            }
        }
    }

    let result = PullResult {
        success: true,
        files_updated: by_status.total_count(),
        has_conflicts: false,
        conflict_files: vec![],
        message: "强制拉取成功".to_string(),
        pre_pull_head: None,
        untracked_files: vec![],
        last_sync_time: Some(chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string()),
        branch_selection: None,
    };

    if let Err(e) = app_handle.emit_to(
        "config",
        "git-sync-complete",
        serde_json::json!({
            "success": result.success,
            "last_sync_time": result.last_sync_time
        }),
    ) {
        warn!("⚠️ [Git] 发送 git-sync-complete 事件失败: {}", e);
    }
    if let Err(e) = app_handle.emit_to(
        "main",
        "git-sync-complete",
        serde_json::json!({
            "success": result.success,
            "last_sync_time": result.last_sync_time
        }),
    ) {
        warn!("⚠️ [Git] 发送 git-sync-complete 到 main 失败: {}", e);
    }

    clear_git_status_cache();

    Ok(result)
}

/// 批量解决冲突的返回结果
#[derive(serde::Serialize)]
pub struct ResolveConflictsResult {
    pub success: bool,
    pub resolved_count: usize,
}

/// 批量解决冲突
pub(crate) fn resolve_conflicts_batch_impl(
    app_handle: AppHandle,
    resolutions: Vec<(String, ConflictStrategy)>,
) -> Result<ResolveConflictsResult, String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;

    info!("🔄 [Git] 开始批量解决冲突，共 {} 个文件", resolutions.len());

    // 收集所有冲突文件路径
    let conflict_file_paths: Vec<String> =
        resolutions.iter().map(|(path, _)| path.clone()).collect();
    let attachment_roots = crate::sync_data::managed_attachment_roots(&workspace_root);
    let forbidden_paths = conflict_file_paths
        .iter()
        .filter(|path| !crate::sync_data::is_allowed_sync_path(path, &attachment_roots))
        .cloned()
        .collect::<Vec<_>>();
    if !forbidden_paths.is_empty() {
        return Err(format!(
            "冲突列表包含不同步的本机数据，已拒绝提交: {}",
            forbidden_paths.join(", ")
        ));
    }

    let resolved_count = conflict_file_paths.len();

    // 检查是否处于 merge 状态
    let merge_head_path = workspace_root.join(".git/MERGE_HEAD");
    let is_merge_conflict = merge_head_path.exists();

    info!(
        "📋 [Git] 冲突类型: {}",
        if is_merge_conflict {
            "Merge 冲突"
        } else {
            "本地更改冲突"
        }
    );

    // 在执行任何 Git 操作之前，将冲突文件添加到 FileWatcher 的忽略列表
    // 注意：每个 Git 操作都可能触发文件变更事件，需要多次添加忽略
    if !conflict_file_paths.is_empty() {
        info!(
            "🔒 [Git] 将 {} 个冲突文件添加到 FileWatcher 忽略列表（多次）",
            conflict_file_paths.len()
        );

        if let Some(watcher_state) =
            app_handle.try_state::<Arc<Mutex<Option<crate::markdown::FileWatcher>>>>()
        {
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
                    let output = crate::git_common::git_command()
                        .args(["add", &file_path])
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
                    warn!(
                        "⚠️ [Git] DiscardLocalUntracked 策略不适用于 merge 冲突，跳过: {}",
                        file_path
                    );
                }
            }
        }

        let output = crate::git_common::git_command()
            .args(["commit", "--no-edit"])
            .current_dir(&workspace_root)
            .output()
            .map_err(|e| format!("完成合并失败: {}", e))?;

        if !output.status.success() {
            let error = String::from_utf8_lossy(&output.stderr);
            return Err(format!("完成合并失败: {}", error));
        }
    } else {
        // 本地更改冲突：根据策略处理
        let has_local_strategy = resolutions
            .iter()
            .any(|(_, s)| matches!(s, ConflictStrategy::KeepLocal));
        let has_remote_strategy = resolutions
            .iter()
            .any(|(_, s)| matches!(s, ConflictStrategy::KeepRemote));

        for (file_path, strategy) in resolutions {
            info!("📝 [Git] 解决本地更改冲突: {} - {:?}", file_path, strategy);

            match strategy {
                ConflictStrategy::KeepLocal => {
                    // 保留本地版本：先 add，然后 commit
                    let output = crate::git_common::git_command()
                        .args(["add", &file_path])
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
                    let output = crate::git_common::git_command()
                        .args(["stash", "push", "-u", "--", &file_path])
                        .current_dir(&workspace_root)
                        .output()
                        .map_err(|e| format!("Stash 失败: {}", e))?;

                    if output.status.success() {
                        let stdout = String::from_utf8_lossy(&output.stdout);
                        if !stdout.contains("No local changes") {
                            let drop_output = crate::git_common::git_command()
                                .args(["stash", "drop"])
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
                    warn!(
                        "⚠️ [Git] DiscardLocalUntracked 策略不适用于本地更改冲突，跳过: {}",
                        file_path
                    );
                }
            }

            info!("✅ [Git] 冲突已解决: {}", file_path);
        }

        // 对于保留本地版本的情况，需要 commit
        if has_local_strategy {
            let output = crate::git_common::git_command()
                .args(["commit", "-m", "Resolve conflicts: keep local changes"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("提交失败: {}", e))?;

            if !output.status.success() {
                let error = String::from_utf8_lossy(&output.stderr);
                if error.contains("nothing to commit") {
                    info!("ℹ️ [Git] 没有更改需要提交，使用 reset 清理状态");
                    let reset_output = crate::git_common::git_command()
                        .args(["reset", "HEAD"])
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
            let branch_output = crate::git_common::git_command()
                .args(["branch", "--show-current"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("获取分支失败: {}", e))?;
            let branch = String::from_utf8_lossy(&branch_output.stdout)
                .trim()
                .to_string();

            let push_output = crate::git_common::git_command()
                .args(["push", "origin", &branch])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("Push 失败: {}", e))?;

            if !push_output.status.success() {
                let stderr = String::from_utf8_lossy(&push_output.stderr);
                if stderr.contains("rejected") || stderr.contains("non-fast-forward") {
                    info!("ℹ️ [Git] 普通 push 被拒绝，尝试 force push");
                    let force_output = crate::git_common::git_command()
                        .args(["push", "--force", "origin", &branch])
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
            let fetch_output = crate::git_common::git_command()
                .args(["fetch", "origin"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("Fetch 失败: {}", e))?;
            if !fetch_output.status.success() {
                let err = String::from_utf8_lossy(&fetch_output.stderr);
                return Err(format!("Fetch 失败: {}", err));
            }

            let branch_output = crate::git_common::git_command()
                .args(["branch", "--show-current"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("获取分支失败: {}", e))?;
            let branch = String::from_utf8_lossy(&branch_output.stdout)
                .trim()
                .to_string();

            let pull_output = crate::git_common::git_command()
                .args(["pull"])
                .current_dir(&workspace_root)
                .output()
                .map_err(|e| format!("Pull 失败: {}", e))?;

            if !pull_output.status.success() {
                let stderr = String::from_utf8_lossy(&pull_output.stderr);
                let stdout = String::from_utf8_lossy(&pull_output.stdout);
                if stderr.contains("CONFLICT") || stdout.contains("CONFLICT") {
                    info!("ℹ️ [Git] Pull 产生冲突，用户选择保留远程，reset 到 origin");
                    let reset_output = crate::git_common::git_command()
                        .args(["merge", "--abort"])
                        .current_dir(&workspace_root)
                        .output();
                    let _ = reset_output;

                    let reset_output = crate::git_common::git_command()
                        .args(["reset", "--hard", &format!("origin/{}", branch)])
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
        info!(
            "📋 [Git] 更新 cache，共 {} 个冲突文件",
            conflict_file_paths.len()
        );

        if let Some(cache_state) =
            app_handle.try_state::<Arc<StdRwLock<crate::markdown::CacheManager>>>()
        {
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
pub(crate) fn write_conflict_file_impl(
    app_handle: AppHandle,
    file_path: String,
    content: String,
) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;
    let attachment_roots = crate::sync_data::managed_attachment_roots(&workspace_root);
    if !crate::sync_data::is_allowed_sync_path(&file_path, &attachment_roots) {
        return Err(format!("拒绝写入同步白名单之外的冲突文件: {}", file_path));
    }

    let full_path = workspace_root.join(&file_path);

    info!("💾 [Git] 写入编辑后的冲突文件: {}", file_path);

    std::fs::write(&full_path, content).map_err(|e| format!("写入文件失败: {}", e))?;

    info!("✅ [Git] 文件写入成功: {}", file_path);

    Ok(())
}

/// 删除未跟踪文件（用于解决 untracked files 冲突）
pub(crate) fn remove_untracked_file_impl(
    app_handle: AppHandle,
    file_path: String,
) -> Result<(), String> {
    require_git_sync_plugin(&app_handle)?;
    let workspace_root =
        crate::json_config::get_workspace_root(&app_handle)?.ok_or("工作区未设置".to_string())?;

    let relative_path = file_path.replace('\\', "/");
    let relative_path = relative_path.trim_start_matches('/');
    if relative_path.is_empty() || relative_path.contains("..") {
        return Err("拒绝删除非法路径".to_string());
    }
    let attachment_roots = crate::sync_data::managed_attachment_roots(&workspace_root);
    if !crate::sync_data::is_allowed_sync_path(relative_path, &attachment_roots) {
        return Err(format!(
            "拒绝删除同步白名单之外的本机文件: {}",
            relative_path
        ));
    }

    let full_path = workspace_root.join(relative_path);
    if !full_path.exists() {
        info!("ℹ️ [Git] 文件不存在，无需删除: {}", relative_path);
        return Ok(());
    }

    let canonical_workspace = workspace_root
        .canonicalize()
        .map_err(|e| format!("解析工作区路径失败: {}", e))?;
    let canonical_target = full_path
        .canonicalize()
        .map_err(|e| format!("解析目标路径失败: {}", e))?;
    if !canonical_target.starts_with(&canonical_workspace) {
        return Err("拒绝删除工作区外的文件".to_string());
    }

    info!("🗑️ [Git] 删除未跟踪文件: {}", relative_path);

    if full_path.is_dir() {
        std::fs::remove_dir_all(&full_path).map_err(|e| format!("删除目录失败: {}", e))?;
    } else {
        std::fs::remove_file(&full_path).map_err(|e| format!("删除文件失败: {}", e))?;
    }

    info!("✅ [Git] 已删除未跟踪文件: {}", relative_path);

    Ok(())
}
