// workspace.json 和 cache.json 管理模块

use super::metadata::{WorkspaceConfig, CacheConfig};
use std::fs;
use std::path::Path;
use log::info;

// 读取 workspace.json
pub fn read_workspace(config_dir: &Path) -> Result<WorkspaceConfig, String> {
    let workspace_path = config_dir.join("workspace.json");
    
    if !workspace_path.exists() {
        // 如果文件不存在，返回默认配置
        return Ok(WorkspaceConfig::default());
    }
    
    let content = fs::read_to_string(&workspace_path)
        .map_err(|e| format!("读取 workspace.json 失败: {}", e))?;
    
    serde_json::from_str(&content)
        .map_err(|e| format!("解析 workspace.json 失败: {}", e))
}

// 写入 workspace.json
pub fn write_workspace(config_dir: &Path, workspace: &WorkspaceConfig) -> Result<(), String> {
    let workspace_path = config_dir.join("workspace.json");
    
    let json = serde_json::to_string_pretty(workspace)
        .map_err(|e| format!("序列化 workspace.json 失败: {}", e))?;
    
    fs::write(&workspace_path, json)
        .map_err(|e| format!("写入 workspace.json 失败: {}", e))?;
    
    info!("✅ workspace.json 已保存");
    Ok(())
}

// 读取 cache.json
pub fn read_cache(config_dir: &Path) -> Result<CacheConfig, String> {
    let cache_path = config_dir.join("cache.json");
    
    if !cache_path.exists() {
        info!("⚠️ [读取缓存] cache.json 不存在，返回默认配置");
        // 如果文件不存在，返回默认配置
        return Ok(CacheConfig::default());
    }
    
    let content = fs::read_to_string(&cache_path)
        .map_err(|e| format!("读取 cache.json 失败: {}", e))?;
    
    let cache: CacheConfig = serde_json::from_str(&content)
        .map_err(|e| format!("解析 cache.json 失败: {}", e))?;
    
    Ok(cache)
}

// 写入 cache.json
pub fn write_cache(config_dir: &Path, cache: &CacheConfig) -> Result<(), String> {
    let cache_path = config_dir.join("cache.json");
    
    let json = serde_json::to_string_pretty(cache)
        .map_err(|e| format!("序列化 cache.json 失败: {}", e))?;
    
    fs::write(&cache_path, &json)
        .map_err(|e| format!("写入 cache.json 失败: {}", e))?;
    Ok(())
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
