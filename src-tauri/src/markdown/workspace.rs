// workspace.json 和 cache.json 管理模块

use super::metadata::{CacheConfig, WorkspaceConfig};
use log::info;
use std::fs;
use std::path::Path;

// 读取 workspace.json
pub fn read_workspace(config_dir: &Path) -> Result<WorkspaceConfig, String> {
    let workspace_path = config_dir.join("workspace.json");

    if !workspace_path.exists() {
        // 如果文件不存在，返回默认配置
        return Ok(WorkspaceConfig::default());
    }

    let content = fs::read_to_string(&workspace_path)
        .map_err(|e| format!("读取 workspace.json 失败: {}", e))?;

    serde_json::from_str(&content).map_err(|e| format!("解析 workspace.json 失败: {}", e))
}

// 写入 workspace.json
pub fn write_workspace(config_dir: &Path, workspace: &WorkspaceConfig) -> Result<(), String> {
    ensure_config_dir_exists(config_dir)?;
    let workspace_path = config_dir.join("workspace.json");

    let json = serde_json::to_string_pretty(workspace)
        .map_err(|e| format!("序列化 workspace.json 失败: {}", e))?;

    fs::write(&workspace_path, json).map_err(|e| format!("写入 workspace.json 失败: {}", e))?;

    info!("✅ workspace.json 已保存");
    Ok(())
}

fn read_cache_inner(config_dir: &Path, log_missing: bool) -> Result<CacheConfig, String> {
    let cache_path = config_dir.join("cache.json");

    if !cache_path.exists() {
        if log_missing {
            info!(
                "⚠️ [读取缓存] cache.json 不存在，返回默认配置: {}",
                cache_path.display()
            );
        }
        // 如果文件不存在，返回默认配置
        return Ok(CacheConfig::default());
    }

    let content =
        fs::read_to_string(&cache_path).map_err(|e| format!("读取 cache.json 失败: {}", e))?;

    let cache: CacheConfig =
        serde_json::from_str(&content).map_err(|e| format!("解析 cache.json 失败: {}", e))?;

    Ok(cache)
}

// 读取 cache.json
pub fn read_cache(config_dir: &Path) -> Result<CacheConfig, String> {
    read_cache_inner(config_dir, true)
}

// 静默读取 cache.json，用于启动期占位状态，避免误导性日志。
pub fn read_cache_silent(config_dir: &Path) -> Result<CacheConfig, String> {
    read_cache_inner(config_dir, false)
}

// 写入 cache.json
pub fn write_cache(config_dir: &Path, cache: &CacheConfig) -> Result<(), String> {
    ensure_config_dir_exists(config_dir)?;
    let cache_path = config_dir.join("cache.json");

    let json = serde_json::to_string_pretty(cache)
        .map_err(|e| format!("序列化 cache.json 失败: {}", e))?;

    fs::write(&cache_path, &json).map_err(|e| format!("写入 cache.json 失败: {}", e))?;
    Ok(())
}

/// 配置目录可能被用户或外部清理工具删除。每次写入前确保其存在，
/// 让 cache/workspace 文件能够在下次保存时自动恢复。
fn ensure_config_dir_exists(config_dir: &Path) -> Result<(), String> {
    fs::create_dir_all(config_dir)
        .map_err(|e| format!("创建配置目录失败 '{}': {}", config_dir.display(), e))
}

// 更新文件元数据
pub fn update_file_metadata(
    cache: &mut CacheConfig,
    file_path: &str,
    metadata: super::metadata::FileMetadata,
) {
    cache.files.insert(file_path.to_string(), metadata);
}

// 更新分类元数据
pub fn update_category_metadata(
    cache: &mut CacheConfig,
    category_name: &str,
    metadata: super::metadata::CategoryMetadata,
) {
    cache.categories.insert(category_name.to_string(), metadata);
}

#[cfg(test)]
mod tests {
    use super::{write_cache, write_workspace};
    use crate::markdown::metadata::{CacheConfig, WorkspaceConfig};

    #[test]
    fn writes_cache_after_config_directory_was_deleted() {
        let temp_dir = tempfile::tempdir().unwrap();
        let config_dir = temp_dir.path().join(".snippets-code");
        std::fs::create_dir_all(&config_dir).unwrap();
        std::fs::remove_dir_all(&config_dir).unwrap();

        write_cache(&config_dir, &CacheConfig::default()).unwrap();

        assert!(config_dir.join("cache.json").is_file());
    }

    #[test]
    fn writes_workspace_after_config_directory_was_deleted() {
        let temp_dir = tempfile::tempdir().unwrap();
        let config_dir = temp_dir.path().join(".snippets-code");
        std::fs::create_dir_all(&config_dir).unwrap();
        std::fs::remove_dir_all(&config_dir).unwrap();

        write_workspace(&config_dir, &WorkspaceConfig::default()).unwrap();

        assert!(config_dir.join("workspace.json").is_file());
    }
}
