use log::{debug, warn};
use notify::event::ModifyKind;
use notify::{Config, Event, EventKind, RecommendedWatcher, RecursiveMode, Watcher};
use std::collections::HashSet;
use std::path::{Path, PathBuf};
use std::sync::mpsc::{channel, RecvTimeoutError};
use std::time::{Duration, Instant};

pub struct DesktopFileWatcher {
    _watcher: RecommendedWatcher,
}

impl DesktopFileWatcher {
    pub fn start(desktop_path: PathBuf) -> Result<Self, String> {
        let (tx, rx) = channel::<Event>();
        let handler = move |res: Result<Event, notify::Error>| match res {
            Ok(event) => {
                let _ = tx.send(event);
            }
            Err(e) => warn!("桌面目录监听错误: {:?}", e),
        };

        let mut watcher = RecommendedWatcher::new(handler, Config::default())
            .map_err(|e| format!("创建桌面目录监听器失败: {}", e))?;

        watcher
            .watch(&desktop_path, RecursiveMode::Recursive)
            .map_err(|e| format!("启动桌面目录监听失败: {}", e))?;

        debug!("[DesktopWatcher] started dir={}", desktop_path.display());

        std::thread::spawn(move || {
            let debounce = Duration::from_millis(400);
            let mut pending = false;
            let mut last_event = Instant::now();
            let mut changed_paths: HashSet<PathBuf> = HashSet::new();
            let mut removed_paths: HashSet<PathBuf> = HashSet::new();

            loop {
                match rx.recv_timeout(Duration::from_millis(100)) {
                    Ok(event) => {
                        if matches!(event.kind, EventKind::Access(_)) {
                            continue;
                        }

                        let filtered_paths: Vec<_> = event
                            .paths
                            .iter()
                            .filter(|path| !is_windows_desktop_noise(path))
                            .cloned()
                            .collect();
                        if filtered_paths.is_empty() {
                            continue;
                        }

                        debug!(
                            "[DesktopWatcher] recv kind={:?} paths={}",
                            event.kind,
                            filtered_paths.len()
                        );

                        pending = true;
                        last_event = Instant::now();

                        for path in filtered_paths {
                            match event.kind {
                                EventKind::Create(_)
                                | EventKind::Modify(ModifyKind::Data(_))
                                | EventKind::Modify(ModifyKind::Metadata(_))
                                | EventKind::Modify(ModifyKind::Name(_)) => {
                                    changed_paths.insert(path);
                                }
                                EventKind::Remove(_) => {
                                    removed_paths.insert(path);
                                }
                                _ => {}
                            }
                        }
                    }
                    Err(RecvTimeoutError::Timeout) => {
                        if !pending || last_event.elapsed() < debounce {
                            continue;
                        }

                        let changed = changed_paths.drain().collect::<Vec<_>>();
                        let removed = removed_paths.drain().collect::<Vec<_>>();
                        match crate::plugins::desktop_files::sync_desktop_file_changes(
                            &changed, &removed,
                        ) {
                            Ok((changed_count, removed_count)) => debug!(
                                "[DesktopWatcher] incremental sync changed={} removed={}",
                                changed_count, removed_count
                            ),
                            Err(error) => {
                                warn!("[DesktopWatcher] incremental sync failed: {}", error)
                            }
                        }

                        pending = false;
                    }
                    Err(RecvTimeoutError::Disconnected) => {
                        debug!("[DesktopWatcher] event channel disconnected, stopping");
                        break;
                    }
                }
            }
        });

        Ok(Self { _watcher: watcher })
    }
}

fn is_windows_desktop_noise(path: &Path) -> bool {
    let Some(name) = path.file_name().and_then(|s| s.to_str()) else {
        return false;
    };

    let lower = name.to_ascii_lowercase();
    lower.ends_with(".lnk") || lower.ends_with("desktop.ini") || lower == "thumbs.db"
}
