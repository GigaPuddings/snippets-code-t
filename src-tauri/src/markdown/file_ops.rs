// 文件操作模块

use std::fs;
use std::path::{Path, PathBuf};
use log::info;
use chrono::Local;

// 文件名生成器
pub struct FileNameGenerator;

impl FileNameGenerator {
    // 从标题生成文件名
    pub fn generate_filename(title: &str) -> String {
        let sanitized = Self::sanitize_filename(title);
        let truncated = Self::truncate_filename(&sanitized, 255);
        format!("{}.md", truncated)
    }
    
    // 为重复文件名添加时间戳后缀（格式：-YYYYMMDDHHMMSS）
    pub fn resolve_conflict(base_path: &Path, filename: &str) -> String {
        let file_path = base_path.join(filename);
        
        // 如果文件不存在，直接返回原文件名
        if !file_path.exists() {
            return filename.to_string();
        }
        
        // 分离文件名和扩展名
        let stem = filename.strip_suffix(".md").unwrap_or(filename);
        
        // 生成时间戳后缀：-YYYYMMDDHHMMSS
        let timestamp = Local::now().format("%Y%m%d%H%M%S").to_string();
        let new_filename = format!("{}-{}.md", stem, timestamp);
        
        new_filename
    }
    
    // 清理非法字符
    // 将特殊字符（/ \ : * ? " < > |）替换为下划线
    pub fn sanitize_filename(name: &str) -> String {
        let mut sanitized = name
            .replace(['/', '\\', ':', '*', '?', '"', '<', '>', '|'], "_")
            .trim()
            .to_string();
        
        // 确保不为空
        if sanitized.is_empty() {
            sanitized = "untitled".to_string();
        }
        
        sanitized
    }
    
    // 限制文件名长度
    // 限制文件名长度不超过指定字符数
    fn truncate_filename(name: &str, max_len: usize) -> String {
        if name.len() <= max_len {
            return name.to_string();
        }
        
        // 截断到最大长度，确保在字符边界上
        let mut truncated = name.to_string();
        truncated.truncate(max_len);
        
        // 如果截断后以空格结尾，去除空格
        truncated.trim_end().to_string()
    }
}



// 创建分类文件夹
pub fn create_category_folder(base_path: &Path, category_name: &str) -> Result<PathBuf, String> {
    let safe_name = FileNameGenerator::sanitize_filename(category_name);
    let folder_path = base_path.join(&safe_name);
    
    if !folder_path.exists() {
        fs::create_dir_all(&folder_path)
            .map_err(|e| format!("创建文件夹失败 '{}': {}", safe_name, e))?;
        info!("📁 创建文件夹: {}", safe_name);
    }
    
    Ok(folder_path)
}

// 创建 Markdown 文件
pub fn create_markdown_file(
    folder_path: &Path,
    filename: &str,
    content: &str,
) -> Result<PathBuf, String> {
    let safe_name = FileNameGenerator::generate_filename(filename);
    let mut file_path = folder_path.join(&safe_name);
    
    // 处理文件名冲突：添加时间戳后缀
    if file_path.exists() {
        let resolved_name = FileNameGenerator::resolve_conflict(folder_path, &safe_name);
        file_path = folder_path.join(&resolved_name);
    }
    
    // 写入文件
    fs::write(&file_path, content)
        .map_err(|e| format!("写入文件失败 '{}': {}", file_path.display(), e))?;
    
    info!("📝 创建文件: {}", file_path.display());
    Ok(file_path)
}

// 读取 Markdown 文件
// 预留用于未来读取和解析 Markdown 文件
#[allow(dead_code)]
pub fn read_markdown_file(file_path: &Path) -> Result<String, String> {
    fs::read_to_string(file_path)
        .map_err(|e| format!("读取文件失败 '{}': {}", file_path.display(), e))
}

// 获取相对路径（相对于数据目录）
pub fn get_relative_path(base_path: &Path, file_path: &Path) -> Result<String, String> {
    file_path
        .strip_prefix(base_path)
        .map_err(|e| format!("获取相对路径失败: {}", e))?
        .to_str()
        .ok_or_else(|| "路径包含非 UTF-8 字符".to_string())
        .map(|s| s.replace('\\', "/")) // 统一使用 / 作为路径分隔符
}

// 确保 .snippets-code 目录存在
pub fn ensure_config_dir(base_path: &Path) -> Result<PathBuf, String> {
    let config_dir = base_path.join(".snippets-code");
    
    if !config_dir.exists() {
        fs::create_dir_all(&config_dir)
            .map_err(|e| format!("创建配置目录失败: {}", e))?;
    }
    
    Ok(config_dir)
}