use log::{debug, warn};
use notify::{Config, Event, EventKind, RecommendedWatcher, RecursiveMode, Watcher};
use notify::event::ModifyKind;
use std::collections::HashSet;
use std::path::{Path, PathBuf};
use std::sync::mpsc::channel;
use std::time::{Duration, Instant};

use crate::search::refresh_desktop_files_cache;

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

        tauri::async_runtime::spawn(async move {
            let debounce = Duration::from_millis(400);
            let mut pending = false;
            let mut last_event = Instant::now();
            let mut changed_ids: HashSet<String> = HashSet::new();
            let mut removed_ids: HashSet<String> = HashSet::new();

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

                        debug!("[DesktopWatcher] recv kind={:?} paths={}", event.kind, filtered_paths.len());

                        pending = true;
                        last_event = Instant::now();

                        for path in filtered_paths {
                            let id = format!("desktop-file:{}", path.to_string_lossy());
                            match event.kind {
                                EventKind::Create(_) | EventKind::Modify(ModifyKind::Data(_)) | EventKind::Modify(ModifyKind::Metadata(_)) | EventKind::Modify(ModifyKind::Name(_)) => {
                                    changed_ids.insert(id);
                                }
                                EventKind::Remove(_) => {
                                    removed_ids.insert(id);
                                }
                                _ => {}
                            }
                        }
                    }
                    Err(_) => {
                        if !pending || last_event.elapsed() < debounce {
                            continue;
                        }

                        if !removed_ids.is_empty() {
                            let ids: Vec<String> = removed_ids.drain().collect();
                            let _ = crate::db::delete_desktop_file_cache_by_ids(&ids);
                        }

                        if !changed_ids.is_empty() {
                            let ids: Vec<String> = changed_ids.drain().collect();
                            // 变化项这里直接触发全量刷新，保证 icon/元信息一致
                            debug!("[DesktopWatcher] partial sync count={}", ids.len());
                            refresh_desktop_files_cache();
                        }

                        let changed_count = changed_ids.len();
                        let removed_count = removed_ids.len();
                        debug!("[DesktopWatcher] sync changed={} removed={}", changed_count, removed_count);

                        pending = false;
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
