//! Terminal outcome and notification policy for launcher source indexing.
use serde::Serialize;

#[derive(Clone, Copy, Debug, PartialEq, Eq, Serialize)]
#[serde(rename_all = "lowercase")]
pub enum IndexStatus {
    Success,
    Partial,
    Failed,
}

impl IndexStatus {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Success => "success",
            Self::Partial => "partial",
            Self::Failed => "failed",
        }
    }
}

#[derive(Clone, Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct LauncherIndexResult {
    pub generation: u64,
    pub status: IndexStatus,
    pub apps_count: Option<usize>,
    pub bookmarks_count: Option<usize>,
    pub desktop_files_count: usize,
    pub errors: Vec<String>,
    pub manual: bool,
    pub notification_window: Option<String>,
    pub notification_error: Option<String>,
}

#[derive(Default)]
pub(super) struct IndexOutcome {
    pub successful_sources: usize,
    pub errors: Vec<String>,
}

impl IndexOutcome {
    pub fn status(&self) -> IndexStatus {
        if self.errors.is_empty() {
            IndexStatus::Success
        } else if self.successful_sources > 0 {
            IndexStatus::Partial
        } else {
            IndexStatus::Failed
        }
    }
    pub fn persisted(&mut self, label: &str, result: Result<(), rusqlite::Error>) -> bool {
        match result {
            Ok(()) => {
                self.successful_sources += 1;
                true
            }
            Err(error) => {
                self.errors.push(format!("{label}: {error}"));
                false
            }
        }
    }
    pub fn count(&mut self, label: &str, result: Result<i64, rusqlite::Error>) -> Option<usize> {
        match result {
            Ok(count) => Some(count.max(0) as usize),
            Err(error) => {
                self.errors.push(format!("{label}: {error}"));
                None
            }
        }
    }
}

pub(super) fn notification_target(manual: bool, focused: Option<&str>) -> Option<&str> {
    if manual {
        focused
    } else {
        None
    }
}

impl LauncherIndexResult {
    pub(super) fn message(&self, english: bool) -> (String, String) {
        let title = match (self.status, english) {
            (IndexStatus::Success, false) => "检索完成",
            (IndexStatus::Partial, false) => "检索部分完成",
            (IndexStatus::Failed, false) => "检索失败",
            (IndexStatus::Success, true) => "Scan complete",
            (IndexStatus::Partial, true) => "Scan partially complete",
            (IndexStatus::Failed, true) => "Scan failed",
        };
        let apps = self
            .apps_count
            .map(|value| value.to_string())
            .unwrap_or_else(|| "—".into());
        let bookmarks = self
            .bookmarks_count
            .map(|value| value.to_string())
            .unwrap_or_else(|| "—".into());
        let mut body = if english {
            format!("{apps} apps, {bookmarks} bookmarks available")
        } else {
            format!("当前可用 {apps} 个应用、{bookmarks} 个书签")
        };
        if let Some(error) = self.errors.first() {
            body.push_str(if english { ". " } else { "。" });
            body.push_str(error);
        }
        (title.into(), body)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn zero_results_are_success_and_partial_or_failed_writes_are_never_success() {
        let mut outcome = IndexOutcome::default();
        assert!(outcome.persisted("apps", Ok(())));
        assert_eq!(outcome.count("apps", Ok(0)), Some(0));
        assert_eq!(outcome.status(), IndexStatus::Success);
        outcome.errors.push("One browser could not be read".into());
        assert_eq!(outcome.status(), IndexStatus::Partial);
        let mut failed = IndexOutcome::default();
        assert!(!failed.persisted("apps", Err(rusqlite::Error::InvalidQuery)));
        assert_eq!(
            failed.count("apps", Err(rusqlite::Error::InvalidQuery)),
            None
        );
        assert_eq!(failed.status(), IndexStatus::Failed);
    }

    #[test]
    fn automatic_jobs_stay_quiet_and_manual_jobs_target_the_focused_window() {
        assert_eq!(notification_target(false, Some("config")), None);
        assert_eq!(notification_target(true, Some("config")), Some("config"));
        assert_eq!(notification_target(true, None), None);
    }
}
