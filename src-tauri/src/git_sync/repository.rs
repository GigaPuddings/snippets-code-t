use std::path::Path;
use std::process::Output;

use crate::git_common::{get_git_stderr, get_git_stdout};

use super::command_runner::GitCommandRunner;
use super::MAIN_BRANCH;

pub(crate) struct GitRepository<'a> {
    workspace_root: &'a Path,
    runner: GitCommandRunner<'a>,
}

impl<'a> GitRepository<'a> {
    pub(crate) fn new(workspace_root: &'a Path) -> Self {
        Self {
            workspace_root,
            runner: GitCommandRunner::in_workspace(workspace_root),
        }
    }

    pub(crate) fn is_git_available() -> Result<bool, String> {
        match GitCommandRunner::system().output(&["--version"], "检查 Git 版本失败") {
            Ok(output) => {
                if output.status.success() {
                    let version = get_git_stdout(&output);
                    log::info!("✅ [Git] 检测到 Git: {}", version);
                    Ok(true)
                } else {
                    Ok(false)
                }
            }
            Err(_) => Ok(false),
        }
    }

    pub(crate) fn workspace_root(&self) -> &'a Path {
        self.workspace_root
    }

    pub(crate) fn is_repository(&self) -> bool {
        let git_dir = self.workspace_root.join(".git");
        git_dir.exists() && git_dir.is_dir()
    }

    pub(crate) fn has_remote(&self) -> Result<bool, String> {
        let output = self.output(&["remote", "-v"], "执行 git remote 失败")?;
        if !output.status.success() {
            return Ok(false);
        }

        Ok(!get_git_stdout(&output).is_empty())
    }

    pub(crate) fn has_head(&self) -> bool {
        self.output(&["rev-parse", "--verify", "HEAD"], "检查 HEAD 失败")
            .map(|output| output.status.success())
            .unwrap_or(false)
    }

    pub(crate) fn current_head(&self) -> Option<String> {
        self.successful_stdout(&["rev-parse", "HEAD"], "获取 HEAD 失败")
            .ok()
            .filter(|value| !value.is_empty())
    }

    pub(crate) fn current_branch_or_main(&self) -> Result<String, String> {
        let output = self.output(&["branch", "--show-current"], "获取当前分支失败")?;
        if !output.status.success() {
            return Ok(MAIN_BRANCH.to_string());
        }

        let branch = get_git_stdout(&output);
        if branch.is_empty() {
            Ok(MAIN_BRANCH.to_string())
        } else {
            Ok(branch)
        }
    }

    pub(crate) fn current_branch(&self) -> Result<String, String> {
        let output = self.output(&["branch", "--show-current"], "获取分支失败")?;
        if !output.status.success() {
            return Err(format!("获取分支失败: {}", get_git_stderr(&output)));
        }

        let branch = get_git_stdout(&output);
        if branch.is_empty() {
            Err("获取分支失败: 当前分支为空".to_string())
        } else {
            Ok(branch)
        }
    }

    pub(crate) fn status_porcelain(&self) -> Result<Output, String> {
        self.output(
            &["status", "--porcelain", "--untracked-files=all"],
            "获取状态失败",
        )
    }

    pub(crate) fn status_porcelain_for_path(&self, relative_path: &str) -> Result<Output, String> {
        self.output(
            &["status", "--porcelain", "--", relative_path],
            "检测 Git 文件状态失败",
        )
    }

    pub(crate) fn local_branches(&self) -> Result<Output, String> {
        self.output(&["branch", "--format=%(refname:short)"], "获取本地分支失败")
    }

    pub(crate) fn remote_branches(&self) -> Result<Output, String> {
        self.output(
            &["branch", "-r", "--format=%(refname:short)"],
            "获取远程分支失败",
        )
    }

    pub(crate) fn fetch_origin(&self, branch: &str) -> Result<Output, String> {
        let refspec = format!("+refs/heads/{branch}:refs/remotes/origin/{branch}");
        self.output(&["fetch", "origin", &refspec], "执行 git fetch 失败")
    }

    pub(crate) fn fetch_origin_all(&self) -> Result<Output, String> {
        self.output(&["fetch", "origin"], "执行 git fetch 失败")
    }

    pub(crate) fn merge_commit(&self, commit: &str) -> Result<Output, String> {
        self.output(
            &["merge", "--no-edit", "--no-overwrite-ignore", commit],
            "合并远端提交失败",
        )
    }

    pub(crate) fn has_unpushed_commits(&self) -> Result<bool, String> {
        if !self.has_head() {
            return Ok(false);
        }
        let branch = self.current_branch()?;
        let remote_ref = format!("refs/remotes/origin/{}", branch);
        let remote = self.output(
            &["show-ref", "--verify", "--quiet", &remote_ref],
            "检查远端引用失败",
        )?;
        if remote.status.code() == Some(1) {
            return Ok(true);
        }
        if !remote.status.success() {
            return Err(format!("检查远端引用失败: {}", get_git_stderr(&remote)));
        }
        let range = format!("{}..HEAD", remote_ref);
        let pending =
            self.successful_stdout(&["rev-list", "--count", &range], "检查待推送提交失败")?;
        Ok(pending != "0")
    }

    pub(crate) fn push_origin_branch(&self, branch: &str) -> Result<Output, String> {
        // 显式指定源和目标，避免 pushRemote、remote.origin.push 改写同步目标。
        let refspec = format!("refs/heads/{branch}:refs/heads/{branch}");
        let tracking = self.output(
            &["config", "--get", &format!("branch.{branch}.merge")],
            "检查分支跟踪配置失败",
        )?;
        if !tracking.status.success() && tracking.status.code() != Some(1) {
            return Err(format!(
                "检查分支跟踪配置失败: {}",
                get_git_stderr(&tracking)
            ));
        }
        let mut args = vec!["push"];
        if tracking.status.code() == Some(1) {
            args.push("--set-upstream");
        }
        args.extend(["origin", &refspec]);
        self.output(&args, "执行 git push 失败")
    }

    pub(crate) fn commit(&self, message: &str) -> Result<Output, String> {
        self.output(&["commit", "-m", message], "git commit 失败")
    }

    pub(crate) fn cat_file_exists(&self, spec: &str) -> Result<bool, String> {
        let output = self.output(&["cat-file", "-e", spec], "检查远端文件失败")?;
        Ok(output.status.success())
    }

    pub(crate) fn has_worktree_diff(&self, relative_path: &str) -> bool {
        self.output(
            &["diff", "--quiet", "--no-ext-diff", "--", relative_path],
            "检查工作区差异失败",
        )
        .map(|output| !output.status.success())
        .unwrap_or(true)
    }

    pub(crate) fn original_head(&self) -> Option<String> {
        self.successful_stdout(&["rev-parse", "ORIG_HEAD"], "获取 ORIG_HEAD 失败")
            .ok()
            .filter(|value| !value.is_empty())
    }

    pub(crate) fn head_tree_paths(&self) -> Result<Output, String> {
        self.output(
            &["ls-tree", "-r", "-z", "--name-only", "HEAD"],
            "获取首次拉取文件列表失败",
        )
    }

    pub(crate) fn changed_paths(&self, from: &str, to: &str) -> Result<Output, String> {
        self.output(
            &["diff", "--name-status", "-z", from, to],
            "获取变更文件列表失败",
        )
    }

    pub(crate) fn conflict_paths(&self) -> Result<Output, String> {
        self.output(&["diff", "--name-only", "--diff-filter=U"], "检测冲突失败")
    }

    pub(crate) fn switch_branch(&self, args: &[&str]) -> Result<Output, String> {
        self.output(args, "切换分支失败")
    }

    pub(crate) fn workspace_path_exists(&self, relative_path: &str) -> bool {
        self.workspace_root.join(relative_path).exists()
    }

    pub(crate) fn remove_workspace_path(&self, relative_path: &str) -> Result<(), String> {
        let path = self.workspace_root.join(relative_path);
        if path.is_dir() {
            std::fs::remove_dir_all(&path)
                .map_err(|e| format!("删除未跟踪目录失败 {}: {}", relative_path, e))
        } else {
            std::fs::remove_file(&path)
                .map_err(|e| format!("删除未跟踪文件失败 {}: {}", relative_path, e))
        }
    }

    pub(crate) fn successful_stdout(
        &self,
        args: &[&str],
        error_context: &str,
    ) -> Result<String, String> {
        let output = self.output(args, error_context)?;
        if !output.status.success() {
            return Err(get_git_stderr(&output));
        }

        Ok(get_git_stdout(&output))
    }

    pub(crate) fn output(&self, args: &[&str], error_context: &str) -> Result<Output, String> {
        self.runner.output(args, error_context)
    }
}
