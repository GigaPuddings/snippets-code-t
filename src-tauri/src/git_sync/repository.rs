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
        self.output(&["status", "--porcelain"], "获取状态失败")
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
        self.output(&["fetch", "origin", branch], "执行 git fetch 失败")
    }

    pub(crate) fn fetch_origin_all(&self) -> Result<Output, String> {
        self.output(&["fetch", "origin"], "执行 git fetch 失败")
    }

    pub(crate) fn pull_origin(&self, branch: &str) -> Result<Output, String> {
        self.output(&["pull", "origin", branch], "执行 git pull 失败")
    }

    pub(crate) fn push(&self) -> Result<Output, String> {
        self.output(&["push"], "执行 git push 失败")
    }

    pub(crate) fn push_origin_branch(&self, branch: &str) -> Result<Output, String> {
        self.output(&["push", "origin", branch], "重试 Push 失败")
    }

    pub(crate) fn push_set_upstream(&self, branch: &str) -> Result<Output, String> {
        self.output(
            &["push", "--set-upstream", "origin", branch],
            "执行 git push 失败",
        )
    }

    pub(crate) fn commit(&self, message: &str) -> Result<Output, String> {
        self.output(&["commit", "-m", message], "git commit 失败")
    }

    pub(crate) fn cat_file_exists(&self, spec: &str) -> Result<bool, String> {
        let output = self.output(&["cat-file", "-e", spec], "检查远端文件失败")?;
        Ok(output.status.success())
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
