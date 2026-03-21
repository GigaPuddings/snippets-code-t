// 元数据结构定义

use serde::{Deserialize, Serialize};
use std::collections::HashMap;

// workspace.json 的根结构（UI 状态和工作区配置）
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkspaceConfig {
    pub main: WorkspaceMain,
    pub settings: WorkspaceSettings,
}

impl Default for WorkspaceConfig {
    fn default() -> Self {
        Self {
            main: WorkspaceMain::default(),
            settings: WorkspaceSettings::default(),
        }
    }
}

// 主工作区布局
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkspaceMain {
    pub id: String,
    pub r#type: String,
    pub children: Vec<serde_json::Value>,
    pub direction: String,
}

impl Default for WorkspaceMain {
    fn default() -> Self {
        Self {
            id: "main-workspace".to_string(),
            r#type: "split".to_string(),
            children: Vec::new(),
            direction: "vertical".to_string(),
        }
    }
}

// cache.json 的根结构（文件缓存和元数据）
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CacheConfig {
    pub version: String,
    pub files: HashMap<String, FileMetadata>,
    pub categories: HashMap<String, CategoryMetadata>,
}

impl Default for CacheConfig {
    fn default() -> Self {
        Self {
            version: "1.0.0".to_string(),
            files: HashMap::new(),
            categories: HashMap::new(),
        }
    }
}

// 文件元数据（存储在 cache.json）
// 
// 设计原则：cache.json 只作为文件系统索引（id、时间戳、大小、hash），
// 用于快速判断文件是否存在/是否变更，以及按日期排序。
// tags/type/language/favorite 等内容元数据统一存储在各 .md 文件的
// Frontmatter 中，避免双重存储带来的一致性问题。
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FileMetadata {
    pub id: String,
    pub created: i64,  // Unix 时间戳（毫秒）
    pub modified: i64, // Unix 时间戳（毫秒）
    #[serde(skip_serializing_if = "Option::is_none")]
    pub size: Option<u64>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hash: Option<String>,
}

// 分类元数据（存储在 cache.json）
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CategoryMetadata {
    pub id: i64,                 // 数字 ID（稳定的分类标识符）
    pub created: i64,            // Unix 时间戳（毫秒）
    #[serde(skip_serializing_if = "Option::is_none")]
    pub order: Option<i32>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub color: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub icon: Option<String>,
    #[serde(default)]
    pub is_system: bool,         // 是否为系统分类（如"未分类"）
}

// 工作区设置
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkspaceSettings {
    pub sync_enabled: bool,
    // 附件配置
    pub attachment: AttachmentSettings,
}

impl Default for WorkspaceSettings {
    fn default() -> Self {
        Self {
            sync_enabled: false,
            attachment: AttachmentSettings::default(),
        }
    }
}

// 附件设置
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AttachmentSettings {
    pub path_template: String,
    pub filename_format: String,
}

impl Default for AttachmentSettings {
    fn default() -> Self {
        Self {
            path_template: "assets/${noteFileName}/".to_string(),
            filename_format: "snippets-code".to_string(),
        }
    }
}

// Front Matter 元数据（嵌入到 Markdown 文件中）
// 用于存储笔记和代码片段的元数据
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct FrontMatter {
    // 唯一标识符 (UUID v4)
    pub id: String,
    // 标题
    pub title: String,
    // 标签列表
    #[serde(default)]
    pub tags: Vec<String>,
    // 创建时间 (ISO 8601)
    pub created: String,
    // 修改时间 (ISO 8601)
    pub modified: String,
    // 类型：code 或 note
    #[serde(rename = "type")]
    pub fragment_type: String,
    // 编程语言（用于代码片段）
    #[serde(skip_serializing_if = "Option::is_none")]
    pub language: Option<String>,
    // 是否收藏
    #[serde(default)]
    pub favorite: bool,
}

// 迁移进度信息
// 预留用于未来实现实时进度更新
#[allow(dead_code)]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MigrationProgress {
    pub step: String,
    pub current: usize,
    pub total: usize,
    pub percentage: f32,
}

// 迁移结果
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MigrationResult {
    pub success: bool,
    pub total_categories: usize,
    pub total_fragments: usize,
    pub created_folders: usize,
    pub created_files: usize,
    pub failed_files: Vec<String>,
    pub output_path: String,
}

/// 将 FrontMatter 序列化为 YAML 字符串（用于写入文件）
pub fn serialize_frontmatter(metadata: &FrontMatter) -> Result<String, String> {
    serde_yaml::to_string(metadata).map_err(|e| format!("序列化 frontmatter 失败: {}", e))
}

/// 将 FrontMatter 格式化为完整的 frontmatter 块（包含 --- 分隔符）
pub fn format_frontmatter_block(metadata: &FrontMatter) -> Result<String, String> {
    let yaml = serialize_frontmatter(metadata)?;
    // 确保 YAML 内容以换行符结尾，避免与 closing --- 连在一起
    let yaml_with_newline = if yaml.ends_with('\n') {
        yaml.trim_end()
    } else {
        yaml.trim_end()
    };
    Ok(format!("---\n{}\n---\n", yaml_with_newline))
}


/// 尝试解析 Front Matter，无 frontmatter 时返回 None
pub fn try_parse_front_matter(content: &str) -> (Option<FrontMatter>, String) {
    match parse_front_matter(content) {
        Ok((m, body)) => (Some(m), body),
        Err(_) => (None, content.to_string()),
    }
}

// 解析 Markdown 文件中的 Front Matter
// 
// 从 markdown 字符串中提取 YAML front matter 和内容
// Front Matter 必须在文件开头，用 --- 分隔符包围
// 
// # Arguments
// * `content` - 完整的 markdown 文件内容
// 
// # Returns
// * `Ok((FrontMatter, String))` - 解析的元数据和正文内容
// * `Err(String)` - 解析错误信息
// 
// # Example
// ```
// let markdown = r#"---
// id: "123"
// title: "My Note"
// tags: ["rust", "code"]
// created: "2024-01-01T00:00:00Z"
// modified: "2024-01-01T00:00:00Z"
// type: "note"
// favorite: false
// ---
// 
// # Content here
// "#;
// let (metadata, content) = parse_front_matter(markdown).unwrap();
// ```
pub fn parse_front_matter(content: &str) -> Result<(FrontMatter, String), String> {
    let content = content.trim_start();
    
    // 检查是否以 --- 开头
    if !content.starts_with("---") {
        return Err("Front matter must start with '---'".to_string());
    }
    
    // 查找第二个 --- 分隔符
    let after_first_delimiter = &content[3..];
    let end_delimiter_pos = after_first_delimiter.find("\n---");
    
    if end_delimiter_pos.is_none() {
        return Err("Front matter must end with '---'".to_string());
    }
    
    let end_pos = end_delimiter_pos.unwrap();
    let yaml_content = &after_first_delimiter[..end_pos].trim();
    
    // 解析 YAML
    let metadata: FrontMatter = serde_yaml::from_str(yaml_content)
        .map_err(|e| format!("Failed to parse YAML front matter: {}", e))?;
    
    // 提取正文内容（跳过第二个 --- 之后的内容）
    let body_start = 3 + end_pos + 4; // "---" + yaml + "\n---"
    let body = if body_start < content.len() {
        content[body_start..].trim_start().to_string()
    } else {
        String::new()
    };
    
    Ok((metadata, body))
}



