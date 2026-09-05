use std::path::Path;

use super::repository::GitRepository;
use super::{
    get_git_status_with_repository, git_pull_impl, git_push_impl, GitStatus, PullResult, PushResult,
};

pub(crate) struct GitSyncService<'a> {
    repository: GitRepository<'a>,
}

impl<'a> GitSyncService<'a> {
    pub(crate) fn new(workspace_root: &'a Path) -> Self {
        Self {
            repository: GitRepository::new(workspace_root),
        }
    }

    pub(crate) fn status(&self) -> Result<GitStatus, String> {
        get_git_status_with_repository(&self.repository)
    }

    pub(crate) async fn pull(&self) -> Result<PullResult, String> {
        git_pull_impl(&self.repository).await
    }

    pub(crate) async fn push(&self, message: &str) -> Result<PushResult, String> {
        git_push_impl(&self.repository, message).await
    }
}
