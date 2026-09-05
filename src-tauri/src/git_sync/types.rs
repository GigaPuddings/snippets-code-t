use serde::{Deserialize, Serialize};

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
    /// 需要用户选择分支时返回候选分支
    #[serde(skip_serializing_if = "Option::is_none")]
    pub branch_selection: Option<BranchSelection>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BranchSelection {
    pub current_branch: String,
    pub recommended_branch: String,
    pub available_branches: Vec<String>,
    pub reason: String,
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
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitStatus {
    pub is_repo: bool,
    pub has_remote: bool,
    pub has_changes: bool,
    pub changed_files: Vec<String>,
    pub branch: String,
    pub main_branch: String,
    pub available_branches: Vec<String>,
    pub has_other_branches: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitRecordFile {
    pub status: String,
    pub file_name: String,
    pub file_path: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitRecord {
    pub commit_hash: String,
    pub short_hash: String,
    pub message: String,
    pub author: String,
    pub time: String,
    pub synced: bool,
    pub files: Vec<GitRecordFile>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitContributionDay {
    pub date: String,
    pub count: usize,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitContributionActivity {
    pub year: i32,
    pub current_year: i32,
    pub start_date: String,
    pub end_date: String,
    pub total: usize,
    pub max_count: usize,
    pub years: Vec<i32>,
    pub days: Vec<GitContributionDay>,
}

/// 冲突解决策略
#[derive(Debug, Serialize, Deserialize)]
pub enum ConflictStrategy {
    KeepLocal,             // 保留本地版本
    KeepRemote,            // 保留远程版本
    DiscardLocalUntracked, // 删除本地未跟踪文件（用于 untracked files 场景）
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
