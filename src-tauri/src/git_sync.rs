// Git 同步模块
// 使用系统 Git 命令实现同步功能

use crate::git_common::get_git_stderr;
use crate::git_common::remove_token_from_url;
use log::{debug, error, info, warn};
use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::RwLock as StdRwLock;
use std::sync::{Arc, Mutex};
use tauri::{Emitter, Manager};

mod application;
mod auto_sync;
mod command_runner;
mod commands;
mod configuration;
mod conflict;
mod gitignore;
mod history;
mod repository;
mod service;
mod state;
mod types;

use application::{apply_non_content_sync_changes, import_portable_sync_config};
use configuration::build_authenticated_url;
pub use configuration::*;
pub use conflict::resolve_conflict;
pub use gitignore::{check_gitignore, ensure_gitignore};
pub use history::{get_git_contribution_activity, get_git_records, restore_git_record_file};
use repository::GitRepository;
use service::{
    empty_git_status, get_changed_files_with_status, get_current_branch, get_remote_default_branch,
    prepare_auto_generated_untracked_files_for_pull, push_current_branch, switch_git_branch,
    ChangedFilesByStatus, GitSyncService,
};
pub use state::clear_git_status_cache;
use state::{get_cached_git_status, update_git_status_cache, GIT_OPERATION_LOCK};
pub use types::{
    ConflictPayload, ConflictStrategy, GitConfig, GitContributionActivity, GitRecord, GitStatus,
    PullResult, PushResult, RepoNotFoundPayload,
};

const MAIN_BRANCH: &str = "main";
const AUTO_GENERATED_UNTRACKED_PULL_PATHS: &[&str] = &[".gitignore"];

pub use auto_sync::AutoSyncManager;
pub use commands::*;
pub use conflict::{ConflictFileContent, ResolveConflictsResult};
