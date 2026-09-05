use std::collections::{BTreeSet, HashMap};
use std::path::Path;

use chrono::{Datelike, Duration as ChronoDuration, Local, NaiveDate};

use crate::git_common::{decode_git_quoted_path, get_git_stderr, is_git_success};

use super::configuration::check_git_repo;
use super::repository::GitRepository;
use super::service::git_has_head;
use super::state::clear_git_status_cache;
use super::types::{GitContributionActivity, GitContributionDay, GitRecord, GitRecordFile};

// ============= 辅助函数 =============

fn git_output_string(workspace_root: &Path, args: &[&str]) -> Result<String, String> {
    GitRepository::new(workspace_root).successful_stdout(args, "执行 git 命令失败")
}

fn split_git_record_fields(line: &str) -> Vec<&str> {
    line.split('\x1f').collect()
}

fn parse_git_record_file(line: &str) -> Option<GitRecordFile> {
    let trimmed = line.trim();
    if trimmed.is_empty() {
        return None;
    }

    let mut parts = trimmed.splitn(2, char::is_whitespace);
    let status = parts.next()?.trim().to_string();
    let raw_path = parts.next().unwrap_or("").trim();
    if raw_path.is_empty() {
        return None;
    }

    let file_path = if let Some(idx) = raw_path.find("->") {
        decode_git_quoted_path(raw_path[idx + 2..].trim())
    } else {
        decode_git_quoted_path(raw_path)
    };

    let file_name = Path::new(&file_path)
        .file_name()
        .and_then(|name| name.to_str())
        .unwrap_or(&file_path)
        .to_string();

    Some(GitRecordFile {
        status,
        file_name,
        file_path,
    })
}

pub fn get_git_records(workspace_root: &Path, limit: usize) -> Result<Vec<GitRecord>, String> {
    if !check_git_repo(workspace_root)? || !git_has_head(workspace_root) {
        return Ok(vec![]);
    }

    let limit_arg = format!("-n{}", limit.clamp(1, 50));
    let log_output = git_output_string(
        workspace_root,
        &[
            "log",
            &limit_arg,
            "--date=format:%Y-%m-%d %H:%M:%S",
            "--pretty=format:%H%x1f%h%x1f%s%x1f%an%x1f%ad",
        ],
    )?;

    if log_output.is_empty() {
        return Ok(vec![]);
    }

    let remote_head = git_output_string(workspace_root, &["rev-parse", "--verify", "@{u}"]).ok();
    let mut records = Vec::new();

    for line in log_output.lines() {
        let fields = split_git_record_fields(line);
        if fields.len() < 5 {
            continue;
        }

        let commit_hash = fields[0].to_string();
        let files_output = git_output_string(
            workspace_root,
            &[
                "show",
                "--name-status",
                "--format=",
                "--no-renames",
                &commit_hash,
            ],
        )
        .unwrap_or_default();
        let files = files_output
            .lines()
            .filter_map(parse_git_record_file)
            .take(20)
            .collect::<Vec<_>>();

        let synced = remote_head
            .as_ref()
            .map(|head| {
                let merge_base =
                    git_output_string(workspace_root, &["merge-base", &commit_hash, head])
                        .unwrap_or_default();
                merge_base == commit_hash
            })
            .unwrap_or(false);

        records.push(GitRecord {
            commit_hash,
            short_hash: fields[1].to_string(),
            message: fields[2].to_string(),
            author: fields[3].to_string(),
            time: fields[4].to_string(),
            synced,
            files,
        });
    }

    Ok(records)
}

fn contribution_range_for_year(
    year: i32,
    current_year: i32,
    today: NaiveDate,
) -> (NaiveDate, NaiveDate) {
    if year == current_year {
        return (today - ChronoDuration::days(364), today);
    }

    let start = NaiveDate::from_ymd_opt(year, 1, 1).unwrap_or(today);
    let end = NaiveDate::from_ymd_opt(year, 12, 31).unwrap_or(today);
    (start, end)
}

fn collect_git_contribution_years(workspace_root: Option<&Path>, current_year: i32) -> Vec<i32> {
    let mut years = BTreeSet::new();
    for offset in 0..5 {
        years.insert(current_year - offset);
    }

    if let Some(workspace_root) = workspace_root {
        if check_git_repo(workspace_root).unwrap_or(false) && git_has_head(workspace_root) {
            if let Ok(log_output) = git_output_string(
                workspace_root,
                &["log", "--date=format:%Y", "--pretty=format:%ad"],
            ) {
                for line in log_output.lines() {
                    if let Ok(year) = line.trim().parse::<i32>() {
                        if (1970..=current_year).contains(&year) {
                            years.insert(year);
                        }
                    }
                }
            }
        }
    }

    let mut years = years.into_iter().collect::<Vec<_>>();
    years.sort_by(|a, b| b.cmp(a));
    years
}

pub fn get_git_contribution_activity(
    workspace_root: Option<&Path>,
    year: Option<i32>,
) -> Result<GitContributionActivity, String> {
    let today = Local::now().date_naive();
    let current_year = today.year();
    let selected_year = year.unwrap_or(current_year);
    let (start_date, end_date) = contribution_range_for_year(selected_year, current_year, today);
    let years = collect_git_contribution_years(workspace_root, current_year);
    let mut counts: HashMap<NaiveDate, usize> = HashMap::new();

    if let Some(workspace_root) = workspace_root {
        if check_git_repo(workspace_root)? && git_has_head(workspace_root) {
            let since = format!("--since={} 00:00:00", start_date.format("%Y-%m-%d"));
            let until = format!("--until={} 23:59:59", end_date.format("%Y-%m-%d"));
            let log_output = git_output_string(
                workspace_root,
                &["log", &since, &until, "--date=short", "--pretty=format:%ad"],
            )?;

            for line in log_output.lines() {
                if let Ok(date) = NaiveDate::parse_from_str(line.trim(), "%Y-%m-%d") {
                    if date >= start_date && date <= end_date {
                        *counts.entry(date).or_insert(0) += 1;
                    }
                }
            }
        }
    }

    let mut days = Vec::new();
    let mut cursor = start_date;
    while cursor <= end_date {
        days.push(GitContributionDay {
            date: cursor.format("%Y-%m-%d").to_string(),
            count: counts.get(&cursor).copied().unwrap_or(0),
        });
        cursor += ChronoDuration::days(1);
    }

    let total = days.iter().map(|day| day.count).sum();
    let max_count = days.iter().map(|day| day.count).max().unwrap_or(0);

    Ok(GitContributionActivity {
        year: selected_year,
        current_year,
        start_date: start_date.format("%Y-%m-%d").to_string(),
        end_date: end_date.format("%Y-%m-%d").to_string(),
        total,
        max_count,
        years,
        days,
    })
}

pub fn restore_git_record_file(
    workspace_root: &Path,
    commit_hash: &str,
    file_path: &str,
) -> Result<(), String> {
    if commit_hash.trim().is_empty() || file_path.trim().is_empty() {
        return Err("恢复参数不能为空".to_string());
    }

    let normalized_path = file_path.replace('\\', "/");
    if normalized_path.starts_with('/')
        || normalized_path.contains("../")
        || normalized_path == ".."
        || normalized_path.contains('\0')
    {
        return Err("文件路径不安全，已取消恢复".to_string());
    }
    let attachment_roots = crate::sync_data::managed_attachment_roots(workspace_root);
    if !crate::sync_data::is_allowed_sync_path(&normalized_path, &attachment_roots) {
        return Err(format!("拒绝恢复同步白名单之外的文件: {}", normalized_path));
    }

    let rev = format!("{}^", commit_hash);
    let output = GitRepository::new(workspace_root)
        .output(&["checkout", &rev, "--", &normalized_path], "恢复文件失败")?;
    if !is_git_success(&output) {
        return Err(format!("恢复文件失败: {}", get_git_stderr(&output)));
    }

    clear_git_status_cache();
    Ok(())
}
