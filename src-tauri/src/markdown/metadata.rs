// 元数据结构定义

use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::io::BufRead;

// workspace.json 的根结构（UI 状态和工作区配置）
#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct WorkspaceConfig {
    pub main: WorkspaceMain,
    pub settings: WorkspaceSettings,
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
    pub id: i64,      // 数字 ID（稳定的分类标识符）
    pub created: i64, // Unix 时间戳（毫秒）
    #[serde(skip_serializing_if = "Option::is_none")]
    pub order: Option<i32>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub color: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub icon: Option<String>,
    #[serde(default)]
    pub is_system: bool, // 是否为系统分类（如"未分类"）
}

// 工作区设置
#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct WorkspaceSettings {
    pub sync_enabled: bool,
    // 附件配置
    pub attachment: AttachmentSettings,
}

// 附件设置
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct AttachmentSettings {
    pub path_template: String,
    pub filename_format: String,
    #[serde(default = "default_image_scale_percent")]
    pub default_image_scale_percent: u16,
    #[serde(default = "default_responsive_images")]
    pub responsive_images: bool,
    #[serde(default = "default_show_image_path")]
    pub show_image_path: bool,
}

fn default_image_scale_percent() -> u16 {
    100
}

fn default_responsive_images() -> bool {
    true
}

fn default_show_image_path() -> bool {
    true
}

impl Default for AttachmentSettings {
    fn default() -> Self {
        Self {
            path_template: "assets/${noteFileName}/".to_string(),
            filename_format: "snippets-code".to_string(),
            default_image_scale_percent: default_image_scale_percent(),
            responsive_images: default_responsive_images(),
            show_image_path: default_show_image_path(),
        }
    }
}

// Front Matter 元数据（嵌入到 Markdown 文件中）
// 用于存储笔记和代码片段的元数据
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
pub struct FrontMatter {
    #[serde(rename = "aiSource", default, skip_serializing_if = "Option::is_none")]
    pub ai_source: Option<AiNoteSource>,
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
    // 前端框架或主要生态（如 vue、react、svelte）
    #[serde(skip_serializing_if = "Option::is_none")]
    pub framework: Option<String>,
    // 片段语义类型（如 component、hook、style、api、regex、error-fix）
    #[serde(skip_serializing_if = "Option::is_none")]
    pub kind: Option<String>,
    // 是否收藏
    #[serde(default)]
    pub favorite: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct AiNoteSource {
    pub version: u8,
    pub conversation_id: String,
    pub message_id: String,
    pub generated_at: String,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub model_name: Option<String>,
    pub question: String,
    // Preserve old attribution fields without retaining a knowledge-Q&A schema.
    #[serde(flatten)]
    pub legacy_metadata: HashMap<String, serde_json::Value>,
}

/// 将 FrontMatter 序列化为 YAML 字符串（用于写入文件）
pub fn serialize_frontmatter(metadata: &FrontMatter) -> Result<String, String> {
    serde_yaml::to_string(metadata).map_err(|e| format!("序列化 frontmatter 失败: {}", e))
}

/// 将 FrontMatter 格式化为完整的 frontmatter 块（包含 --- 分隔符）
pub fn format_frontmatter_block(metadata: &FrontMatter) -> Result<String, String> {
    let yaml = serialize_frontmatter(metadata)?;
    // 确保 YAML 内容以换行符结尾，避免与 closing --- 连在一起
    let yaml_with_newline = yaml.trim_end();
    Ok(format!("---\n{}\n---\n", yaml_with_newline))
}

/// 尝试解析 Front Matter，无 frontmatter 时返回 None
pub fn try_parse_front_matter(content: &str) -> (Option<FrontMatter>, String) {
    match parse_front_matter(content) {
        Ok((m, body)) => (Some(m), body),
        Err(_) => (None, content.to_string()),
    }
}

/// Read only the leading metadata block for lists, without loading the body.
/// Use the existing parser so malformed / absent headers keep their fallback.
pub fn read_front_matter_metadata(mut reader: impl BufRead) -> Result<Option<FrontMatter>, String> {
    let mut header = String::new();
    let mut line = String::new();
    loop {
        line.clear();
        if reader
            .read_line(&mut line)
            .map_err(|error| format!("读取 Front Matter 失败: {error}"))?
            == 0
        {
            return Ok(None);
        }
        let opening = header.is_empty();
        if opening {
            let trimmed = line.trim_start();
            if trimmed.is_empty() {
                continue;
            }
            if !trimmed.starts_with("---") {
                return Ok(None);
            }
            header.push_str(trimmed);
        } else {
            header.push_str(&line);
            if line.starts_with("---") {
                return Ok(try_parse_front_matter(&header).0);
            }
        }
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

#[cfg(test)]
mod metadata_reader_tests {
    use super::*;
    use std::io::Cursor;

    const HEADER: &str = "---\nid: note-id\ntitle: 架构文档\ncreated: '2026-10-07'\nmodified: '2026-10-07'\ntype: note\nfavorite: true\n---\n";

    #[test]
    fn saved_reply_attribution_preserves_opaque_legacy_fields() {
        let current = serde_json::json!({
            "version": 1, "conversationId": "chat", "messageId": "reply",
            "generatedAt": "2026-10-07T00:00:00Z", "question": "Question"
        });
        let parsed: AiNoteSource = serde_json::from_value(current.clone()).unwrap();
        assert_eq!(serde_json::to_value(&parsed).unwrap(), current);

        let mut legacy = current;
        legacy["sources"] = serde_json::json!([{
            "filePath": "Doc/old.md", "content": "Original snapshot",
            "startColumn": 2, "endColumn": 7
        }]);
        legacy["extraOrigin"] = serde_json::json!({"oldVersion": true});
        let parsed: AiNoteSource = serde_json::from_value(legacy.clone()).unwrap();
        let yaml = serde_yaml::to_string(&parsed).unwrap();
        let restored: AiNoteSource = serde_yaml::from_str(&yaml).unwrap();
        assert_eq!(serde_json::to_value(restored).unwrap(), legacy);
    }

    #[test]
    fn metadata_reader_stops_before_a_large_body() {
        let document = format!("{HEADER}{}", "正文 text\n".repeat(500_000));
        let mut cursor = Cursor::new(document.as_bytes());
        let metadata = read_front_matter_metadata(&mut cursor).unwrap().unwrap();
        assert_eq!(metadata.title, "架构文档");
        assert!(metadata.favorite);
        assert_eq!(cursor.position() as usize, HEADER.len());
    }

    #[test]
    fn metadata_reader_matches_parser_for_crlf_and_leading_whitespace() {
        let document = format!(" \r\n  {}正文", HEADER.replace('\n', "\r\n"));
        let streamed = read_front_matter_metadata(Cursor::new(document.as_bytes())).unwrap();
        assert_eq!(streamed, try_parse_front_matter(&document).0);
    }

    #[test]
    fn metadata_reader_preserves_missing_and_invalid_header_fallbacks() {
        for document in [
            "# Plain note\n正文",
            "---\ntitle: broken\n---\n正文",
            "---\nmissing closing delimiter",
        ] {
            assert!(read_front_matter_metadata(Cursor::new(document.as_bytes()))
                .unwrap()
                .is_none());
        }
    }
}
