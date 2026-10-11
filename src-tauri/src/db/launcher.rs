use super::DbConnectionManager;
use rusqlite::{params, OptionalExtension};
use serde::{Deserialize, Serialize};

#[derive(Debug, Default, Clone, Serialize, Deserialize)]
pub struct LauncherSettings {
    #[serde(default)]
    pub show_auxiliary: bool,
    #[serde(default)]
    pub scan_roots: Vec<String>,
}

#[derive(Serialize)]
pub struct LauncherExclusion {
    pub kind: String,
    pub target: String,
    pub title: String,
}

pub fn launcher_settings() -> Result<LauncherSettings, String> {
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;
    let value: Option<String> = conn
        .query_row(
            "SELECT value FROM launcher_preferences WHERE key = 'settings'",
            [],
            |row| row.get(0),
        )
        .optional()
        .map_err(|e| e.to_string())?;
    value
        .map(|value| serde_json::from_str(&value).map_err(|e| e.to_string()))
        .unwrap_or_else(|| Ok(LauncherSettings::default()))
}

pub fn save_launcher_settings(settings: &LauncherSettings) -> Result<(), String> {
    if settings.scan_roots.len() > 10
        || settings.scan_roots.iter().any(|root| {
            !std::path::Path::new(root).is_absolute() || !std::path::Path::new(root).is_dir()
        })
    {
        return Err("最多添加 10 个有效的绝对目录路径".into());
    }
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;
    conn.execute("INSERT INTO launcher_preferences(key, value) VALUES ('settings', ?1) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
        [serde_json::to_string(settings).map_err(|e| e.to_string())?]).map_err(|e| e.to_string())?;
    Ok(())
}

pub fn hide_launcher_entry(kind: &str, id: &str) -> Result<(), String> {
    let table = match kind {
        "app" => "apps",
        "bookmark" => "bookmarks",
        _ => return Err("无效的启动器类型".into()),
    };
    let core = DbConnectionManager::get_core().map_err(|e| e.to_string())?;
    DbConnectionManager::attach_search_database(&core).map_err(|e| e.to_string())?;
    let row: Option<(String, String)> = core.query_row(&format!("SELECT content, title FROM main.{table} WHERE id = ?1 UNION ALL SELECT content, title FROM search_db.{table} WHERE id = ?1 LIMIT 1"),
        [id], |row| Ok((row.get(0)?, row.get(1)?))).optional().map_err(|e| e.to_string())?;
    let (target, title) = row.ok_or("项目已不存在，请刷新列表")?;
    core.execute("INSERT INTO launcher_exclusions(kind, target, title) VALUES (?1, ?2, ?3) ON CONFLICT(kind, target) DO UPDATE SET title = excluded.title",
        params![kind, target, title]).map_err(|e| e.to_string())?;
    Ok(())
}

pub fn launcher_exclusions() -> Result<Vec<LauncherExclusion>, String> {
    let core = DbConnectionManager::get_core().map_err(|e| e.to_string())?;
    let mut stmt = core
        .prepare("SELECT kind, target, title FROM launcher_exclusions ORDER BY kind, title")
        .map_err(|e| e.to_string())?;
    let result = stmt
        .query_map([], |row| {
            Ok(LauncherExclusion {
                kind: row.get(0)?,
                target: row.get(1)?,
                title: row.get(2)?,
            })
        })
        .map_err(|e| e.to_string())?
        .collect::<Result<Vec<_>, _>>()
        .map_err(|e| e.to_string())?;
    Ok(result)
}

pub fn restore_launcher_entry(kind: &str, target: &str) -> Result<(), String> {
    let core = DbConnectionManager::get_core().map_err(|e| e.to_string())?;
    core.execute(
        "DELETE FROM launcher_exclusions WHERE kind = ?1 AND target = ?2",
        params![kind, target],
    )
    .map_err(|e| e.to_string())?;
    Ok(())
}
