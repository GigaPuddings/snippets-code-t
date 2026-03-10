// cache.json 管理模块
// 负责管理文件元数据的缓存

use super::metadata::{CacheConfig, FileMetadata, CategoryMetadata, try_parse_front_matter};
use super::workspace::{read_cache, write_cache};
use std::path::{Path, PathBuf};
use log::{info, warn};

/// 从 .md 文件的 Frontmatter 提取索引所需的核心字段（id/created/modified/size）。
/// cache.json 只作为文件系统索引，内容元数据（tags/type/language/favorite）
/// 统一从 Frontmatter 读取，不再写入 cache.json。
fn build_index_metadata(file_path: &Path) -> FileMetadata {
    if let Ok(raw) = std::fs::read_to_string(file_path) {
        let (fm_opt, body) = try_parse_front_matter(&raw);
        if let Some(fm) = fm_opt {
            return FileMetadata {
                id: fm.id,
                created: chrono::DateTime::parse_from_rfc3339(&fm.created)
                    .map(|dt| dt.timestamp_millis())
                    .unwrap_or_else(|_| chrono::Utc::now().timestamp_millis()),
                modified: chrono::DateTime::parse_from_rfc3339(&fm.modified)
                    .map(|dt| dt.timestamp_millis())
                    .unwrap_or_else(|_| chrono::Utc::now().timestamp_millis()),
                size: Some(body.len() as u64),
                hash: None,
            };
        }
    }
    // 无法读取文件或无 Frontmatter：使用文件系统时间戳和新 UUID
    let fs_meta = std::fs::metadata(file_path).ok();
    let now = chrono::Utc::now().timestamp_millis();
    FileMetadata {
        id: uuid::Uuid::new_v4().to_string(),
        created: fs_meta.as_ref()
            .and_then(|m| m.created().ok())
            .and_then(|t| t.duration_since(std::time::UNIX_EPOCH).ok())
            .map(|d| d.as_millis() as i64)
            .unwrap_or(now),
        modified: fs_meta.as_ref()
            .and_then(|m| m.modified().ok())
            .and_then(|t| t.duration_since(std::time::UNIX_EPOCH).ok())
            .map(|d| d.as_millis() as i64)
            .unwrap_or(now),
        size: fs_meta.map(|m| m.len()),
        hash: None,
    }
}

// Cache 管理器
// 
// 负责管理 cache.json 文件，提供文件和分类元数据的读写操作
#[derive(Clone)]
pub struct CacheManager {
    config_dir: PathBuf,
    cache: CacheConfig,
}

impl CacheManager {
    // 创建新的 Cache 管理器
    // 
    // # Arguments
    // * `config_dir` - 配置目录路径（.snippets-code）
    pub fn new(config_dir: PathBuf) -> Result<Self, String> {
        
        // 尝试读取现有的 cache.json
        let cache = match read_cache(&config_dir) {
            Ok(c) => {
                c
            }
            Err(e) => {
                warn!("⚠️ [CacheManager] 读取 cache.json 失败: {}，使用默认配置", e);
                CacheConfig::default()
            }
        };
        
        Ok(Self {
            config_dir,
            cache,
        })
    }
    
    // 保存 cache 到文件
    pub fn save(&self) -> Result<(), String> {
        info!("💾 [CacheManager] 保存 cache.json，文件数: {}, 分类数: {}", 
            self.cache.files.len(), self.cache.categories.len());
        write_cache(&self.config_dir, &self.cache)
    }
    
    // 从磁盘重新加载 cache.json（用于迁移后刷新内存状态）
    pub fn reload_from_disk(&mut self) -> Result<(), String> {
        match read_cache(&self.config_dir) {
            Ok(new_cache) => {
                info!("🔄 [CacheManager] 从磁盘重新加载 cache.json，文件数: {}, 分类数: {}", 
                    new_cache.files.len(), new_cache.categories.len());
                self.cache = new_cache;
                Ok(())
            }
            Err(e) => {
                Err(format!("重新加载 cache.json 失败: {}", e))
            }
        }
    }
    
    // 获取文件元数据
    // 
    // # Arguments
    // * `file_path` - 文件相对路径
    // 
    // # Returns
    // * `Some(FileMetadata)` - 文件元数据
    // * `None` - 文件不存在于缓存中
    pub fn get_file_metadata(&self, file_path: &str) -> Option<&FileMetadata> {
        self.cache.files.get(file_path)
    }
    
    // 设置文件元数据
    // 
    // # Arguments
    // * `file_path` - 文件相对路径
    // * `metadata` - 文件元数据
    pub fn set_file_metadata(&mut self, file_path: String, metadata: FileMetadata) {
        self.cache.files.insert(file_path, metadata);
    }
    
    // 更新文件元数据
    // 
    // # Arguments
    // * `file_path` - 文件相对路径
    // * `update_fn` - 更新函数
    pub fn update_file_metadata<F>(&mut self, file_path: &str, update_fn: F) -> Result<(), String>
    where
        F: FnOnce(&mut FileMetadata),
    {
        if let Some(metadata) = self.cache.files.get_mut(file_path) {
            update_fn(metadata);
            Ok(())
        } else {
            Err(format!("文件不存在于缓存中: {}", file_path))
        }
    }
    
    // 删除文件元数据
    // 
    // # Arguments
    // * `file_path` - 文件相对路径
    pub fn remove_file_metadata(&mut self, file_path: &str) -> Option<FileMetadata> {
        self.cache.files.remove(file_path)
    }
    
    // 获取分类元数据
    // 
    // # Arguments
    // * `category_name` - 分类名称
    // 
    // # Returns
    // * `Some(CategoryMetadata)` - 分类元数据
    // * `None` - 分类不存在于缓存中
    pub fn get_category_metadata(&self, category_name: &str) -> Option<&CategoryMetadata> {
        self.cache.categories.get(category_name)
    }
    
    // 设置分类元数据
    // 
    // # Arguments
    // * `category_name` - 分类名称
    // * `metadata` - 分类元数据
    pub fn set_category_metadata(&mut self, category_name: String, metadata: CategoryMetadata) {
        self.cache.categories.insert(category_name, metadata);
    }
    
    // 删除分类元数据
    // 
    // # Arguments
    // * `category_name` - 分类名称
    pub fn remove_category_metadata(&mut self, category_name: &str) -> Option<CategoryMetadata> {
        self.cache.categories.remove(category_name)
    }
    
    // 获取所有文件元数据
    pub fn get_all_files(&self) -> &std::collections::HashMap<String, FileMetadata> {
        &self.cache.files
    }
    
    // 获取所有分类元数据
    pub fn get_all_categories(&self) -> &std::collections::HashMap<String, CategoryMetadata> {
        &self.cache.categories
    }
    
    // 按标签筛选文件
    // 按标签过滤（已废弃：tags 不再存储在 cache.json，此函数始终返回空）
    #[allow(dead_code)]
    pub fn filter_by_tag(&self, _tag: &str) -> Vec<(String, &FileMetadata)> {
        vec![]
    }
    
    // 获取收藏文件（已废弃：favorite 不再存储在 cache.json，此函数始终返回空）
    #[allow(dead_code)]
    pub fn get_favorites(&self) -> Vec<(String, &FileMetadata)> {
        vec![]
    }
    
    // 搜索文件（按标题）
    // 
    // # Arguments
    // * `query` - 搜索查询字符串
    // 
    // # Returns
    // * `Vec<(String, &FileMetadata)>` - 匹配的文件列表（文件路径和元数据）
    #[allow(dead_code)]
    pub fn search_by_title(&self, query: &str) -> Vec<(String, &FileMetadata)> {
        let query_lower = query.to_lowercase();
        self.cache.files
            .iter()
            .filter(|(path, _)| {
                // 从文件路径提取文件名（不含扩展名）作为标题
                Path::new(path)
                    .file_stem()
                    .and_then(|s| s.to_str())
                    .map(|title| title.to_lowercase().contains(&query_lower))
                    .unwrap_or(false)
            })
            .map(|(path, metadata)| (path.clone(), metadata))
            .collect()
    }
    
    // 清理不存在的文件元数据
    // 
    // # Arguments
    // * `workspace_root` - 工作区根目录
    // 
    // # Returns
    // * `usize` - 清理的文件数量
    pub fn cleanup_missing_files(&mut self, workspace_root: &Path) -> usize {
        let mut removed_count = 0;
        let mut to_remove = Vec::new();
        
        for (file_path, _) in &self.cache.files {
            let full_path = workspace_root.join(file_path);
            if !full_path.exists() {
                to_remove.push(file_path.clone());
            }
        }
        
        for file_path in to_remove {
            self.cache.files.remove(&file_path);
            removed_count += 1;
            info!("🗑️ 清理不存在的文件元数据: {}", file_path);
        }
        
        removed_count
    }
    
    // 重建缓存（扫描工作区所有文件）
    // 
    // # Arguments
    // * `workspace_root` - 工作区根目录
    // 
    // # Returns
    // * `Result<usize, String>` - 扫描的文件数量
    pub fn rebuild_cache(&mut self, workspace_root: &Path) -> Result<usize, String> {
        use walkdir::WalkDir;
        
        info!("🔄 开始重建缓存...");
        
        let mut file_count = 0;
        
        for entry in WalkDir::new(workspace_root)
            .follow_links(true)
            .into_iter()
            .filter_map(|e| e.ok())
        {
            let path = entry.path();
            
            // 跳过隐藏文件夹
            if path.is_dir() {
                if let Some(name) = path.file_name() {
                    if name.to_string_lossy().starts_with('.') {
                        continue;
                    }
                }
            }
            
            // 只处理 .md 文件
            if !path.is_file() || path.extension().and_then(|s| s.to_str()) != Some("md") {
                continue;
            }
            
            // 获取相对路径
            let relative_path = path
                .strip_prefix(workspace_root)
                .map_err(|e| format!("获取相对路径失败: {}", e))?
                .to_str()
                .ok_or_else(|| "路径包含非 UTF-8 字符".to_string())?
                .replace('\\', "/");
            
            // 如果缓存中不存在此文件，从 Frontmatter 提取索引字段
            if !self.cache.files.contains_key(&relative_path) {
                let metadata = build_index_metadata(path);
                self.cache.files.insert(relative_path.clone(), metadata);
                info!("➕ 添加文件到缓存: {}", relative_path);
            }
            
            file_count += 1;
        }
        
        info!("✅ 缓存重建完成，共 {} 个文件", file_count);
        Ok(file_count)
    }
    
    /// 添加单个文件到缓存（用于文件监听器）
    /// 
    /// # Arguments
    /// * `file_path` - 文件绝对路径
    /// * `workspace_root` - 工作区根目录
    /// 
    /// # Returns
    /// * `Result<(), String>` - 成功或错误信息
    pub fn add_file(&mut self, file_path: &Path, workspace_root: &Path) -> Result<(), String> {
        // 只处理 .md 文件
        if file_path.extension().and_then(|s| s.to_str()) != Some("md") {
            return Ok(());
        }
        
        // 获取相对路径
        let relative_path = file_path
            .strip_prefix(workspace_root)
            .map_err(|e| format!("获取相对路径失败: {}", e))?
            .to_str()
            .ok_or_else(|| "路径包含非 UTF-8 字符".to_string())?
            .replace('\\', "/");
        
        // 如果已存在，不重复添加
        if self.cache.files.contains_key(&relative_path) {
            info!("⏭️ [CacheManager] 文件已存在于缓存: {}", relative_path);
            return Ok(());
        }
        
        let metadata = build_index_metadata(file_path);
        self.cache.files.insert(relative_path.clone(), metadata);
        info!("➕ [CacheManager] 添加文件到缓存: {}", relative_path);
        
        Ok(())
    }
    
    /// 扫描指定的文件列表（增量扫描，用于 Git Pull）
    /// 
    /// # Arguments
    /// * `file_paths` - 文件相对路径列表
    /// * `_workspace_root` - 工作区根目录（保留用于未来扩展）
    /// 
    /// # Returns
    /// * `Result<usize, String>` - 添加的文件数量
    pub fn scan_files(&mut self, file_paths: &[String], workspace_root: &Path) -> Result<usize, String> {
        let mut added_count = 0;
        
        for file_path in file_paths {
            // 只处理 .md 文件
            if !file_path.ends_with(".md") {
                continue;
            }
            
            // 如果缓存中不存在，从 Frontmatter 提取索引字段
            if !self.cache.files.contains_key(file_path) {
                let full_path = workspace_root.join(file_path);
                let metadata = build_index_metadata(&full_path);
                self.cache.files.insert(file_path.clone(), metadata);
                info!("➕ [CacheManager] 添加文件到缓存: {}", file_path);
                added_count += 1;
            } else {
                // 如果已存在，更新修改时间
                if let Some(metadata) = self.cache.files.get_mut(file_path) {
                    metadata.modified = chrono::Utc::now().timestamp_millis();
                    info!("🔄 [CacheManager] 更新文件元数据: {}", file_path);
                }
            }
        }
        
        info!("✅ [CacheManager] 增量扫描完成，添加 {} 个新文件", added_count);
        Ok(added_count)
    }
    
    /// 更新单个文件的元数据（用于文件监听器）
    /// 
    /// # Arguments
    /// * `file_path` - 文件绝对路径
    /// * `workspace_root` - 工作区根目录
    /// 
    /// # Returns
    /// * `Result<(), String>` - 成功或错误信息
    pub fn update_file(&mut self, file_path: &Path, workspace_root: &Path) -> Result<(), String> {
        // 只处理 .md 文件
        if file_path.extension().and_then(|s| s.to_str()) != Some("md") {
            return Ok(());
        }
        
        // 获取相对路径
        let relative_path = file_path
            .strip_prefix(workspace_root)
            .map_err(|e| format!("获取相对路径失败: {}", e))?
            .to_str()
            .ok_or_else(|| "路径包含非 UTF-8 字符".to_string())?
            .replace('\\', "/");
        
        // 更新修改时间
        if let Some(metadata) = self.cache.files.get_mut(&relative_path) {
            metadata.modified = chrono::Utc::now().timestamp_millis();
            info!("🔄 [CacheManager] 更新文件元数据: {}", relative_path);
        } else {
            // 如果不存在，添加新文件
            warn!("⚠️ [CacheManager] 文件不存在于缓存，尝试添加: {}", relative_path);
            self.add_file(file_path, workspace_root)?;
        }
        
        Ok(())
    }
    
    /// 从缓存中删除单个文件（用于文件监听器）
    /// 
    /// # Arguments
    /// * `file_path` - 文件绝对路径
    /// * `workspace_root` - 工作区根目录
    /// 
    /// # Returns
    /// * `Result<(), String>` - 成功或错误信息
    pub fn remove_file(&mut self, file_path: &Path, workspace_root: &Path) -> Result<(), String> {
        // 获取相对路径
        let relative_path = file_path
            .strip_prefix(workspace_root)
            .map_err(|e| format!("获取相对路径失败: {}", e))?
            .to_str()
            .ok_or_else(|| "路径包含非 UTF-8 字符".to_string())?
            .replace('\\', "/");
        
        // 从缓存中删除
        if self.cache.files.remove(&relative_path).is_some() {
            info!("🗑️ [CacheManager] 从缓存中删除文件: {}", relative_path);
        } else {
            warn!("⚠️ [CacheManager] 文件不存在于缓存: {}", relative_path);
        }
        
        Ok(())
    }

    /// 删除目录下所有文件的元数据及该目录对应的分类元数据
    ///
    /// # Arguments
    /// * `dir_relative` - 目录的相对路径（如 "CategoryA"）
    ///
    /// # Returns
    /// * 删除的文件数量
    pub fn remove_directory_files(&mut self, dir_relative: &str) -> usize {
        let prefix = format!("{}/", dir_relative.trim_end_matches('/'));
        
        // 收集需要删除的文件键
        let keys_to_remove: Vec<String> = self.cache.files
            .keys()
            .filter(|k| k.starts_with(&prefix) || *k == dir_relative)
            .cloned()
            .collect();
        
        let count = keys_to_remove.len();
        for key in &keys_to_remove {
            self.cache.files.remove(key);
            info!("🗑️ [CacheManager] 目录删除，移除文件元数据: {}", key);
        }
        
        // 同时删除分类元数据（目录名即分类名）
        let dir_name = std::path::Path::new(dir_relative)
            .file_name()
            .and_then(|n| n.to_str())
            .unwrap_or(dir_relative);
        if self.cache.categories.remove(dir_name).is_some() {
            info!("🗑️ [CacheManager] 目录删除，移除分类元数据: {}", dir_name);
        }
        
        count
    }
    
    // 获取或创建分类 ID
    // 
    // 如果分类已存在，返回其 ID；否则创建新分类并分配 ID
    // 
    // # Arguments
    // * `category_name` - 分类名称
    // 
    // # Returns
    // * `i64` - 分类 ID
    pub fn get_or_create_category_id(&mut self, category_name: &str) -> i64 {
        // 检查分类是否已存在
        if let Some(metadata) = self.cache.categories.get(category_name) {
            return metadata.id;
        }
        
        // 分配新 ID
        let new_id = self.allocate_category_id();
        // 判断是否为系统分类
        let is_system = category_name == "未分类" || category_name == "assets";
        
        // 创建新分类元数据
        let metadata = CategoryMetadata {
            id: new_id,
            created: chrono::Utc::now().timestamp_millis(),
            order: None,
            color: None,
            icon: None,
            is_system,
        };
        
        self.cache.categories.insert(category_name.to_string(), metadata);
        info!("✨ 创建新分类: {} (ID: {}, is_system: {})", category_name, new_id, is_system);
        
        new_id
    }
    
    // 分配新的分类 ID
    // 
    // ID 分配策略：
    // - 0: 保留给"未分类"
    // - 1+: 其他分类按顺序分配
    // 
    // # Returns
    // * `i64` - 新分配的 ID
    fn allocate_category_id(&self) -> i64 {
        // 找到当前最大的 ID
        let max_id = self.cache.categories
            .values()
            .map(|m| m.id)
            .max()
            .unwrap_or(0);
        
        // 返回下一个可用 ID
        if max_id == 0 {
            1 // 第一个非系统分类从 1 开始
        } else {
            max_id + 1
        }
    }
    
    // 从文件路径提取分类名称
    // 
    // # Arguments
    // * `file_path` - 文件相对路径（相对于工作区根目录）
    // 
    // # Returns
    // * `String` - 分类名称，如果文件在根目录则返回"未分类"
    // 
    // # Examples
    // * `"React/file.md"` -> `"React"`
    // * `"Vue/components/Button.md"` -> `"Vue"`
    // * `"file.md"` -> `"未分类"`
    pub fn extract_category_from_path(&self, file_path: &str) -> String {
        // 标准化路径分隔符
        let normalized = file_path.replace('\\', "/");
        
        // 分割路径
        let parts: Vec<&str> = normalized.split('/').filter(|p| !p.is_empty()).collect();
        
        // 如果路径中有多个部分，第一个部分是分类名
        if parts.len() > 1 {
            parts[0].to_string()
        } else {
            "未分类".to_string()
        }
    }
    
    // 获取分类 ID（如果分类不存在则返回 None）
    // 
    // # Arguments
    // * `category_name` - 分类名称
    // 
    // # Returns
    // * `Option<i64>` - 分类 ID，如果分类不存在则返回 None
    pub fn get_category_id(&self, category_name: &str) -> Option<i64> {
        self.cache.categories.get(category_name).map(|m| m.id)
    }
    
    // 初始化默认分类
    // 
    // 确保系统分类存在：
    // - "未分类" (ID: 0)
    // - "assets" (ID: -1, 用于存储图片等资源文件)
    pub fn ensure_default_categories(&mut self) {
        // 1. 检查"未分类"是否存在
        let needs_fix_uncategorized = if let Some(metadata) = self.cache.categories.get("未分类") {
            // 如果存在但 ID 不是 0，需要修复
            if metadata.id != 0 {
                warn!("⚠️ 发现\"未分类\"的 ID 不是 0，当前 ID: {}，需要修复", metadata.id);
                true
            } else {
                false
            }
        } else {
            // 如果不存在，需要创建
            true
        };
        
        if needs_fix_uncategorized {
            let metadata = CategoryMetadata {
                id: 0,
                created: chrono::Utc::now().timestamp_millis(),
                order: None,
                color: None,
                icon: None,
                is_system: true,
            };
            self.cache.categories.insert("未分类".to_string(), metadata);
            info!("✨ 创建/修复系统分类: 未分类 (ID: 0)");
        }
        
        // 2. 检查"assets"是否存在
        let needs_fix_assets = if let Some(metadata) = self.cache.categories.get("assets") {
            // 如果存在但 ID 不是 -1 或不是系统分类，需要修复
            if metadata.id != -1 || !metadata.is_system {
                warn!("⚠️ 发现\"assets\"的配置不正确，当前 ID: {}, is_system: {}，需要修复", 
                    metadata.id, metadata.is_system);
                true
            } else {
                false
            }
        } else {
            // 如果不存在，需要创建
            true
        };
        
        if needs_fix_assets {
            let metadata = CategoryMetadata {
                id: -1,
                created: chrono::Utc::now().timestamp_millis(),
                order: None,
                color: None,
                icon: None,
                is_system: true,
            };
            self.cache.categories.insert("assets".to_string(), metadata);
            info!("✨ 创建/修复系统分类: assets (ID: -1, 用于存储资源文件)");
        }
    }
}
