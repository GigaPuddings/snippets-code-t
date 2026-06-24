// 文件操作模块

use chrono::Local;
use log::info;
use std::fs;
use std::path::{Path, PathBuf};

// 文件名生成器
pub struct FileNameGenerator;

impl FileNameGenerator {
    /// Windows, macOS and most Linux file systems allow a maximum of 255 bytes
    /// for one path component. Keep the extension inside that budget.
    const MAX_FILENAME_BYTES: usize = 255;
    const MARKDOWN_EXTENSION: &'static str = ".md";

    // 从标题生成文件名
    pub fn generate_filename(title: &str) -> String {
        let sanitized = Self::sanitize_filename(title);
        let max_stem_bytes = Self::MAX_FILENAME_BYTES - Self::MARKDOWN_EXTENSION.len();
        let truncated = Self::truncate_filename(&sanitized, max_stem_bytes);
        format!("{}{}", truncated, Self::MARKDOWN_EXTENSION)
    }

    // 为重复文件名添加时间戳后缀（格式：-YYYYMMDDHHMMSS）
    pub fn resolve_conflict(base_path: &Path, filename: &str) -> String {
        let file_path = base_path.join(filename);

        // 如果文件不存在，直接返回原文件名
        if !file_path.exists() {
            return filename.to_string();
        }

        // 分离文件名和扩展名
        let stem = filename
            .strip_suffix(Self::MARKDOWN_EXTENSION)
            .unwrap_or(filename);

        // 生成时间戳后缀：-YYYYMMDDHHMMSS
        let timestamp = Local::now().format("%Y%m%d%H%M%S").to_string();
        let mut sequence = 1usize;

        loop {
            let suffix = if sequence == 1 {
                format!("-{}", timestamp)
            } else {
                format!("-{}-{}", timestamp, sequence)
            };
            let max_stem_bytes = Self::MAX_FILENAME_BYTES
                .saturating_sub(Self::MARKDOWN_EXTENSION.len() + suffix.len());
            let candidate_stem = Self::truncate_filename(stem, max_stem_bytes);
            let new_filename = format!("{}{}{}", candidate_stem, suffix, Self::MARKDOWN_EXTENSION);

            if !base_path.join(&new_filename).exists() {
                return new_filename;
            }

            sequence += 1;
        }
    }

    // 清理非法字符
    // 将特殊字符（/ \ : * ? " < > |）替换为下划线
    pub fn sanitize_filename(name: &str) -> String {
        let mut sanitized: String = name
            .chars()
            .map(|ch| {
                if ch.is_control()
                    || matches!(ch, '/' | '\\' | ':' | '*' | '?' | '"' | '<' | '>' | '|')
                {
                    '_'
                } else {
                    ch
                }
            })
            .collect();
        sanitized = sanitized.trim().trim_end_matches(['.', ' ']).to_string();

        // Windows does not allow these device names, even with an extension.
        let base_name = sanitized
            .split('.')
            .next()
            .unwrap_or("")
            .to_ascii_uppercase();
        let is_reserved_device_name = matches!(base_name.as_str(), "CON" | "PRN" | "AUX" | "NUL")
            || (base_name.starts_with("COM")
                && matches!(base_name.as_bytes().get(3), Some(b'1'..=b'9'))
                && base_name.len() == 4)
            || (base_name.starts_with("LPT")
                && matches!(base_name.as_bytes().get(3), Some(b'1'..=b'9'))
                && base_name.len() == 4);

        // 确保不为空，且不产生 . 或 .. 这样的路径段。
        if sanitized.is_empty() || sanitized == "." || sanitized == ".." {
            sanitized = "untitled".to_string();
        } else if is_reserved_device_name {
            sanitized.insert(0, '_');
        }

        sanitized
    }

    // 限制文件名长度
    // 限制文件名长度不超过指定字符数
    fn truncate_filename(name: &str, max_len: usize) -> String {
        if name.len() <= max_len {
            return name.to_string();
        }

        // 按 UTF-8 字节数截断，并且始终落在字符边界上。
        let end = name
            .char_indices()
            .map(|(index, ch)| index + ch.len_utf8())
            .take_while(|end| *end <= max_len)
            .last()
            .unwrap_or(0);
        let truncated = &name[..end];
        let trimmed = truncated.trim_end_matches(['.', ' ']);
        if trimmed.is_empty() {
            "untitled".to_string()
        } else {
            trimmed.to_string()
        }
    }
}

#[cfg(test)]
mod tests {
    use super::FileNameGenerator;
    use std::fs;

    #[test]
    fn generated_filename_keeps_extension_inside_component_limit_for_unicode_titles() {
        let filename = FileNameGenerator::generate_filename(&"测".repeat(200));

        assert!(filename.ends_with(".md"));
        assert!(filename.len() <= 255);
        assert!(std::str::from_utf8(filename.as_bytes()).is_ok());
    }

    #[test]
    fn sanitizer_handles_windows_reserved_and_trailing_names() {
        assert_eq!(FileNameGenerator::sanitize_filename("CON"), "_CON");
        assert_eq!(FileNameGenerator::sanitize_filename("notes. "), "notes");
        assert_eq!(FileNameGenerator::sanitize_filename(".."), "untitled");
    }

    #[test]
    fn conflict_resolution_never_reuses_an_existing_timestamped_name() {
        let directory = tempfile::tempdir().expect("temporary directory");
        fs::write(directory.path().join("note.md"), "first").expect("write base file");

        let first = FileNameGenerator::resolve_conflict(directory.path(), "note.md");
        fs::write(directory.path().join(&first), "second").expect("write conflicting file");
        let second = FileNameGenerator::resolve_conflict(directory.path(), "note.md");

        assert_ne!(first, second);
        assert!(!directory.path().join(second).exists());
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
        fs::create_dir_all(&config_dir).map_err(|e| format!("创建配置目录失败: {}", e))?;
    }

    Ok(config_dir)
}
