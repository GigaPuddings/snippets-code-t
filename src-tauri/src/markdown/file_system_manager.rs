// 文件系统管理器模块
// 提供统一的文件操作 API，包含路径安全验证

use std::fs;
use std::io;
use std::path::{Path, PathBuf};
use log::info;
use crate::markdown::metadata::{FrontMatter, parse_front_matter, try_parse_front_matter, format_frontmatter_block};
use crate::markdown::file_ops::FileNameGenerator;

/// 将 std::io::Error 映射为用户友好的错误信息，显式识别权限错误
fn map_io_error(e: &io::Error, action: &str, path: &Path) -> String {
    use std::io::ErrorKind;
    match e.kind() {
        ErrorKind::PermissionDenied => {
            format!(
                "{}失败 '{}': 工作区为只读或没有写入权限，请检查目录权限或选择可写的目录",
                action,
                path.display()
            )
        }
        ErrorKind::ReadOnlyFilesystem => {
            format!(
                "{}失败 '{}': 文件系统为只读，无法写入",
                action,
                path.display()
            )
        }
        _ => format!("{}失败 '{}': {}", action, path.display(), e),
    }
}

// 文件系统管理器
// 
// 负责管理 Markdown 文件和 Category 文件夹的创建、读取、更新、删除操作
// 所有操作都会进行路径安全验证，确保操作在 workspace_root 内进行
pub struct FileSystemManager {
    workspace_root: PathBuf,
}

impl FileSystemManager {
    // 创建新的文件系统管理器
    // 
    // # Arguments
    // * `workspace_root` - 工作区根目录路径
    pub fn new(workspace_root: PathBuf) -> Self {
        Self { workspace_root }
    }
    
    // 获取工作区根目录
    pub fn workspace_root(&self) -> &Path {
        &self.workspace_root
    }
    
    // 验证路径安全性
    // 
    // 验证路径：
    // - 确保路径在 workspace_root 内
    // - 拒绝包含 ".." 段的路径
    // - 拒绝绝对路径（workspace_root 本身除外）
    // - 规范化所有路径以防止绕过尝试
    // 
    // # Arguments
    // * `path` - 要验证的路径
    // 
    // # Returns
    // * `Ok(())` - 路径安全
    // * `Err(String)` - 路径不安全，包含错误描述
    fn validate_path(&self, path: &Path) -> Result<(), String> {
        // 规范化路径
        let canonical_workspace = self.workspace_root
            .canonicalize()
            .map_err(|e| format!("无法规范化工作区路径: {}", e))?;
        
        // 如果路径是相对路径，将其解析为相对于 workspace_root 的路径
        let full_path = if path.is_absolute() {
            path.to_path_buf()
        } else {
            self.workspace_root.join(path)
        };
        
        // 检查路径是否包含 ".." 段
        for component in path.components() {
            if component.as_os_str() == ".." {
                return Err("路径不能包含 '..' 段".to_string());
            }
        }
        
        // 规范化完整路径
        let canonical_path = full_path
            .canonicalize()
            .or_else(|_| {
                // 如果文件不存在，尝试规范化父目录
                if let Some(parent) = full_path.parent() {
                    parent.canonicalize().map(|p| {
                        if let Some(filename) = full_path.file_name() {
                            p.join(filename)
                        } else {
                            p
                        }
                    })
                } else {
                    Err(std::io::Error::new(
                        std::io::ErrorKind::NotFound,
                        "无法规范化路径"
                    ))
                }
            })
            .map_err(|e| format!("无法规范化路径: {}", e))?;
        
        // 确保规范化后的路径在 workspace_root 内
        if !canonical_path.starts_with(&canonical_workspace) {
            return Err(format!(
                "路径必须在工作区内: {} 不在 {} 内",
                canonical_path.display(),
                canonical_workspace.display()
            ));
        }
        
        Ok(())
    }
    
    // 创建 Markdown 文件
    // 
    // 创建 Markdown 文件，将元数据写入 Front Matter（同时会写入 cache.json 以兼容）
    // 
    // # Arguments
    // * `category` - 可选的 Category 名称，如果为 None 则创建在根目录
    // * `filename` - 文件名（不含扩展名）
    // * `content` - 文件正文内容（Markdown 正文）
    // * `metadata` - 元数据（写入 Front Matter 和 cache.json）
    // 
    // # Returns
    // * `Ok(PathBuf)` - 创建的文件路径
    // * `Err(String)` - 创建失败的错误信息
    pub fn create_markdown_file(
        &self,
        category: Option<&str>,
        filename: &str,
        content: &str,
        metadata: &FrontMatter,
    ) -> Result<PathBuf, String> {
        // 确定目标文件夹
        // 如果没有指定分类，默认使用"未分类"文件夹
        let folder_path = if let Some(cat) = category {
            let cat_path = self.create_category_folder(cat)?;
            cat_path
        } else {
            // 没有指定分类时，使用"未分类"文件夹
            let uncategorized_path = self.create_category_folder("未分类")?;
            uncategorized_path
        };
        
        // 生成文件名
        let safe_filename = FileNameGenerator::generate_filename(filename);
        let mut file_path = folder_path.join(&safe_filename);
        
        // 处理文件名冲突
        if file_path.exists() {
            let resolved_name = FileNameGenerator::resolve_conflict(&folder_path, &safe_filename);
            file_path = folder_path.join(&resolved_name);
        }
        
        // 验证路径安全性
        self.validate_path(&file_path)?;
        
        // 写入 Front Matter + 正文
        let full_content = if content.trim().is_empty() {
            format_frontmatter_block(metadata)
                .map_err(|e| format!("格式化 frontmatter 失败: {}", e))?
                .trim_end()
                .to_string()
        } else {
            format!(
                "{}\n\n{}",
                format_frontmatter_block(metadata)
                    .map_err(|e| format!("格式化 frontmatter 失败: {}", e))?
                    .trim_end(),
                content
            )
        };
        fs::write(&file_path, full_content).map_err(|e| map_io_error(&e, "写入文件", &file_path))?;
        
        info!("📝 创建文件（含 Front Matter）: {}", file_path.display());
        Ok(file_path)
    }
    
    // 读取 Markdown 文件
    // 注意：元数据不再从 Front Matter 读取，而是从 cache.json 读取
    // 此方法仅返回文件内容，元数据需要从 cache.json 获取
    // 
    // # Arguments
    // * `file_path` - 文件路径（相对于 workspace_root 或绝对路径）
    // 
    // # Returns
    // * `Ok(String)` - 文件内容（纯 Markdown）
    // * `Err(String)` - 读取失败的错误信息
    pub fn read_markdown_file_content(
        &self,
        file_path: &Path,
    ) -> Result<String, String> {
        // 解析为完整路径
        let full_path = if file_path.is_absolute() {
            file_path.to_path_buf()
        } else {
            self.workspace_root.join(file_path)
        };
        
        // 验证路径安全性
        self.validate_path(&full_path)?;
        
        // 读取文件内容（纯 Markdown，不解析 Front Matter）
        let content = fs::read_to_string(&full_path)
            .map_err(|e| format!("读取文件失败 '{}': {}", full_path.display(), e))?;
        
        Ok(content)
    }
    
    // 读取 Markdown 文件（兼容旧版本，支持 Front Matter）
    // 
    // 此方法用于向后兼容，支持读取包含 Front Matter 的旧文件
    // 如果文件包含 Front Matter，则解析并返回；否则返回默认元数据
    // 
    // # Arguments
    // * `file_path` - 文件路径（相对于 workspace_root 或绝对路径）
    // 
    // # Returns
    // * `Ok((FrontMatter, String))` - 元数据和正文内容
    // * `Err(String)` - 读取失败的错误信息
    pub fn read_markdown_file(
        &self,
        file_path: &Path,
    ) -> Result<(FrontMatter, String), String> {
        // 解析为完整路径
        let full_path = if file_path.is_absolute() {
            file_path.to_path_buf()
        } else {
            self.workspace_root.join(file_path)
        };
        
        // 验证路径安全性
        self.validate_path(&full_path)?;
        
        // 读取文件内容
        let content = fs::read_to_string(&full_path)
            .map_err(|e| format!("读取文件失败 '{}': {}", full_path.display(), e))?;
        
        // 尝试解析 Front Matter（用于向后兼容）
        match parse_front_matter(&content) {
            Ok((metadata, body)) => {
                info!("📖 读取文件（包含 Front Matter）: {}", full_path.display());
                Ok((metadata, body))
            },
            Err(_) => {
                // 文件不包含 Front Matter，返回默认元数据和完整内容
                // 从文件路径提取标题（去掉扩展名）
                let title = full_path
                    .file_stem()
                    .and_then(|s| s.to_str())
                    .unwrap_or("Untitled")
                    .to_string();
                
                // 创建默认元数据（实际元数据应从 cache.json 读取）
                let metadata = FrontMatter {
                    id: uuid::Uuid::new_v4().to_string(),
                    title,
                    tags: Vec::new(),
                    created: chrono::Utc::now().to_rfc3339(),
                    modified: chrono::Utc::now().to_rfc3339(),
                    fragment_type: "note".to_string(),
                    language: None,
                    favorite: false,
                };
                
                info!("📖 读取文件（无 Front Matter）: {}", full_path.display());
                Ok((metadata, content))
            }
        }
    }

    
    // 更新 Markdown 文件的内容
    // 当提供 metadata 时，同时将元数据写入 Front Matter
    // 
    // # Arguments
    // * `file_path` - 文件路径（相对于 workspace_root 或绝对路径）
    // * `content` - 可选的新正文内容（body，不含 frontmatter）
    // * `metadata` - 可选的新元数据，提供时写入 Front Matter
    // 
    // # Returns
    // * `Ok(())` - 更新成功
    // * `Err(String)` - 更新失败的错误信息
    pub fn update_markdown_file(
        &self,
        file_path: &Path,
        content: Option<&str>,
        metadata: Option<&FrontMatter>,
    ) -> Result<(), String> {
        let full_path = if file_path.is_absolute() {
            file_path.to_path_buf()
        } else {
            self.workspace_root.join(file_path)
        };
        
        self.validate_path(&full_path)?;
        
        match (content, metadata) {
            (Some(new_content), Some(meta)) => {
                // 同时更新内容和元数据：写入 frontmatter + body
                let full_content = if new_content.trim().is_empty() {
                    format_frontmatter_block(meta)
                        .map_err(|e| format!("格式化 frontmatter 失败: {}", e))?
                        .trim_end()
                        .to_string()
                } else {
                    format!(
                        "{}\n\n{}",
                        format_frontmatter_block(meta)
                            .map_err(|e| format!("格式化 frontmatter 失败: {}", e))?
                            .trim_end(),
                        new_content
                    )
                };
                fs::write(&full_path, full_content)
                    .map_err(|e| map_io_error(&e, "写入文件", &full_path))?;
                info!("✏️ 更新文件（含 Front Matter）: {}", full_path.display());
                return Ok(());
            }
            (None, Some(meta)) => {
                // 仅更新元数据：保留原 body，替换 frontmatter
                let raw = fs::read_to_string(&full_path)
                    .map_err(|e| format!("读取文件失败: {}", e))?;
                let (_, existing_body) = try_parse_front_matter(&raw);
                let full_content = if existing_body.trim().is_empty() {
                    format_frontmatter_block(meta)?
                        .trim_end()
                        .to_string()
                } else {
                    format!("{}\n\n{}", format_frontmatter_block(meta)?.trim_end(), existing_body)
                };
                fs::write(&full_path, full_content)
                    .map_err(|e| map_io_error(&e, "写入文件", &full_path))?;
                info!("✏️ 更新文件 Front Matter: {}", full_path.display());
                return Ok(());
            }
            (Some(new_content), None) => {
                // 仅更新内容：若有现有 frontmatter 则保留
                let raw = fs::read_to_string(&full_path);
                let full_content = if let Ok(existing) = raw {
                    let (existing_fm, _) = try_parse_front_matter(&existing);
                    if let Some(fm) = existing_fm {
                        let block = format_frontmatter_block(&fm)
                            .unwrap_or_else(|_| "---\n---\n".to_string());
                        format!("{}\n\n{}", block.trim_end(), new_content)
                    } else {
                        new_content.to_string()
                    }
                } else {
                    new_content.to_string()
                };
                fs::write(&full_path, full_content)
                    .map_err(|e| map_io_error(&e, "写入文件", &full_path))?;
                info!("✏️ 更新文件内容: {}", full_path.display());
                return Ok(());
            }
            (None, None) => {
                // 无操作
            }
        };
        
        Ok(())
    }
    
    /// 更新文件的 Front Matter 元数据（用于 cache → frontmatter 迁移）
    /// 读取文件 → 解析/替换 frontmatter → 写回
    pub fn update_file_frontmatter(
        &self,
        file_path: &Path,
        metadata: &FrontMatter,
    ) -> Result<(), String> {
        let full_path = if file_path.is_absolute() {
            file_path.to_path_buf()
        } else {
            self.workspace_root.join(file_path)
        };
        
        self.validate_path(&full_path)?;
        
        let content = fs::read_to_string(&full_path)
            .map_err(|e| format!("读取文件失败 '{}': {}", full_path.display(), e))?;
        
        let (_, body) = try_parse_front_matter(&content);
        let frontmatter_block = format_frontmatter_block(metadata)?;
        let new_content = if body.trim().is_empty() {
            frontmatter_block.trim_end().to_string()
        } else {
            format!("{}\n\n{}", frontmatter_block.trim_end(), body)
        };
        
        fs::write(&full_path, new_content)
            .map_err(|e| map_io_error(&e, "写入文件", &full_path))?;
        
        info!("✏️ 更新文件 Front Matter: {}", full_path.display());
        Ok(())
    }
    
    // 删除 Markdown 文件
    // 
    // # Arguments
    // * `file_path` - 文件路径（相对于 workspace_root 或绝对路径）
    // 
    // # Returns
    // * `Ok(())` - 删除成功
    // * `Err(String)` - 删除失败的错误信息
    pub fn delete_markdown_file(
        &self,
        file_path: &Path,
    ) -> Result<(), String> {
        // 解析为完整路径
        let full_path = if file_path.is_absolute() {
            file_path.to_path_buf()
        } else {
            self.workspace_root.join(file_path)
        };
        
        // 验证路径安全性
        self.validate_path(&full_path)?;
        
        // 删除文件
        fs::remove_file(&full_path)
            .map_err(|e| format!("删除文件失败 '{}': {}", full_path.display(), e))?;
        
        info!("🗑️ 删除文件: {}", full_path.display());
        Ok(())
    }
    
    // 移动 Markdown 文件到新分类
    // 
    // # Arguments
    // * `file_path` - 当前文件路径（相对于 workspace_root 或绝对路径）
    // * `new_category` - 新分类名称（空字符串表示"未分类"）
    // 
    // # Returns
    // * `Ok(PathBuf)` - 新文件路径（相对于 workspace_root）
    // * `Err(String)` - 移动失败的错误信息
    pub fn move_markdown_file(
        &self,
        file_path: &Path,
        new_category: &str,
    ) -> Result<PathBuf, String> {
        // 解析为完整路径
        let old_full_path = if file_path.is_absolute() {
            file_path.to_path_buf()
        } else {
            self.workspace_root.join(file_path)
        };
        
        // 验证路径安全性
        self.validate_path(&old_full_path)?;
        
        // 确保文件存在
        if !old_full_path.exists() {
            return Err(format!("文件不存在: {}", old_full_path.display()));
        }
        
        // 获取文件名
        let file_name = old_full_path
            .file_name()
            .ok_or_else(|| "无法获取文件名".to_string())?;
        
        // 构建新路径
        let new_full_path = if new_category.is_empty() {
            // 空字符串：移动到"未分类"文件夹
            let uncategorized_path = self.workspace_root.join("未分类");
            
            // 确保"未分类"文件夹存在
            if !uncategorized_path.exists() {
                fs::create_dir_all(&uncategorized_path)
                    .map_err(|e| format!("创建\"未分类\"文件夹失败: {}", e))?;
            }
            
            uncategorized_path.join(file_name)
        } else if new_category == "未分类" {
            // "未分类"：移动到"未分类"文件夹
            let uncategorized_path = self.workspace_root.join("未分类");
            
            // 确保"未分类"文件夹存在
            if !uncategorized_path.exists() {
                fs::create_dir_all(&uncategorized_path)
                    .map_err(|e| format!("创建\"未分类\"文件夹失败: {}", e))?;
            }
            
            uncategorized_path.join(file_name)
        } else {
            // 移动到指定分类文件夹
            let category_path = self.workspace_root.join(new_category);
            
            // 确保目标文件夹存在
            if !category_path.exists() {
                fs::create_dir_all(&category_path)
                    .map_err(|e| format!("创建分类文件夹失败: {}", e))?;
            }
            
            category_path.join(file_name)
        };
        
        // 验证新路径安全性
        self.validate_path(&new_full_path)?;
        
        // 如果新旧路径相同，直接返回
        if old_full_path == new_full_path {
            let relative_path = new_full_path.strip_prefix(&self.workspace_root)
                .map_err(|e| format!("获取相对路径失败: {}", e))?;
            return Ok(relative_path.to_path_buf());
        }
        
        // 如果目标文件已存在，返回错误
        if new_full_path.exists() {
            return Err(format!("目标文件已存在: {}", new_full_path.display()));
        }
        
        // 移动文件
        fs::rename(&old_full_path, &new_full_path)
            .map_err(|e| format!("移动文件失败: {}", e))?;
        
        // 返回新的相对路径
        let relative_path = new_full_path.strip_prefix(&self.workspace_root)
            .map_err(|e| format!("获取相对路径失败: {}", e))?;
        
        info!("📦 移动文件: {} -> {}", old_full_path.display(), new_full_path.display());
        Ok(relative_path.to_path_buf())
    }
    
    // 创建 Category 文件夹
    // 
    // # Arguments
    // * `category_name` - Category 名称
    // 
    // # Returns
    // * `Ok(PathBuf)` - 创建的文件夹路径
    // * `Err(String)` - 创建失败的错误信息
    pub fn create_category_folder(
        &self,
        category_name: &str,
    ) -> Result<PathBuf, String> {
        let safe_name = FileNameGenerator::sanitize_filename(category_name);
        let folder_path = self.workspace_root.join(&safe_name);
        
        // 验证路径安全性
        self.validate_path(&folder_path)?;
        
        // 如果文件夹已存在，直接返回
        if folder_path.exists() {
            if !folder_path.is_dir() {
                return Err(format!("路径已存在但不是文件夹: {}", folder_path.display()));
            }
            return Ok(folder_path);
        }
        
        // 创建文件夹
        fs::create_dir_all(&folder_path)
            .map_err(|e| map_io_error(&e, "创建文件夹", &folder_path))?;
        
        info!("📁 创建文件夹: {}", safe_name);
        Ok(folder_path)
    }
    
    // 列出所有 Category 文件夹
    // 
    // 返回 workspace_root 下的所有文件夹
    // 
    // # Returns
    // * `Ok(Vec<String>)` - Category 名称列表
    // * `Err(String)` - 读取失败的错误信息
    pub fn list_categories(&self) -> Result<Vec<String>, String> {
        let entries = fs::read_dir(&self.workspace_root)
            .map_err(|e| format!("读取工作区目录失败: {}", e))?;
        
        let mut categories = Vec::new();
        
        for entry in entries {
            let entry = entry.map_err(|e| format!("读取目录项失败: {}", e))?;
            let path = entry.path();
            
            // 只包含文件夹，排除隐藏文件夹（以 . 开头）和"未分类"文件夹
            if path.is_dir() {
                if let Some(name) = path.file_name() {
                    let name_str = name.to_string_lossy().to_string();
                    // 过滤掉隐藏文件夹（以 . 开头）和"未分类"文件夹
                    if !name_str.starts_with('.') && name_str != "未分类" {
                        categories.push(name_str);
                    }
                }
            }
        }
        
        categories.sort();
        Ok(categories)
    }

    
    // 列出指定 Category 下的所有 Markdown 文件
    // 
    // 返回指定文件夹下的所有 .md 文件
    // 
    // # Arguments
    // * `category` - 可选的 Category 名称，如果为 None 则列出根目录的文件（未分类的文件）
    // 
    // # Returns
    // * `Ok(Vec<PathBuf>)` - Markdown 文件路径列表
    // * `Err(String)` - 读取失败的错误信息
    pub fn list_markdown_files(&self, category: Option<&str>) -> Result<Vec<PathBuf>, String> {
        let mut files = Vec::new();
        
        match category {
            Some(cat) => {
                // 指定分类：列出该分类文件夹下的文件（不递归）
                let folder_path = self.workspace_root.join(cat);
                
                // 验证路径安全性
                self.validate_path(&folder_path)?;
                
                if !folder_path.exists() {
                    info!("   ⚠️ 分类文件夹不存在: {}", folder_path.display());
                    return Ok(Vec::new());
                }
                
                let entries = fs::read_dir(&folder_path)
                    .map_err(|e| format!("读取目录失败: {}", e))?;
                
                for entry in entries {
                    let entry = entry.map_err(|e| format!("读取目录项失败: {}", e))?;
                    let path = entry.path();
                    
                    // 只包含 .md 文件（不包含子目录）
                    if path.is_file() && path.extension().and_then(|s| s.to_str()) == Some("md") {
                        info!("   ✅ 找到分类文件: {}", path.display());
                        files.push(path);
                    }
                }
            }
            None => {
                // None：递归列出所有文件
                use walkdir::WalkDir;
                
                for entry in WalkDir::new(&self.workspace_root)
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
                    
                    // 只包含 .md 文件
                    if path.is_file() && path.extension().and_then(|s| s.to_str()) == Some("md") {
                        files.push(path.to_path_buf());
                    }
                }
            }
        }
        
        // 按文件名排序
        files.sort();
        Ok(files)
    }
}
