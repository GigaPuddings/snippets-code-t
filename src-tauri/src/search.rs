use pinyin::ToPinyin;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SearchResult {
    pub id: String,
    pub title: String,
    pub content: String,
    pub summarize: String,
    pub icon: String,
    pub score: f64,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub file_path: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub metadata: Option<serde_json::Value>,
}

pub fn text_to_pinyin(text: &str) -> (String, String) {
    let mut full_pinyin = String::new();
    let mut first_letters = String::new();

    for c in text.chars() {
        if let Some(pinyin_iter) = c.to_pinyin() {
            let pinyin_str = pinyin_iter.plain();
            full_pinyin.push_str(pinyin_str);
            if let Some(first_char) = pinyin_str.chars().next() {
                first_letters.push(first_char);
            }
        } else {
            full_pinyin.push(c);
            if c.is_ascii_alphanumeric() {
                first_letters.push(c);
            }
        }
    }

    (full_pinyin, first_letters)
}

/// 提取由空白、标点或驼峰分隔的英文单词首字母。
///
/// 中文标题缩写由 `text_to_pinyin` 处理；这里补充诸如
/// "Visual Studio Code" -> "vsc" 的常见英文应用缩写，避免把任意
/// 字符子序列都误认为缩写。
fn ascii_word_initials(text: &str) -> String {
    let mut initials = String::new();
    let mut at_word_start = true;
    let mut previous_was_lowercase = false;

    for character in text.chars() {
        if character.is_ascii_alphanumeric() {
            if at_word_start || (character.is_ascii_uppercase() && previous_was_lowercase) {
                initials.push(character.to_ascii_lowercase());
            }
            at_word_start = false;
            previous_was_lowercase = character.is_ascii_lowercase();
        } else {
            at_word_start = true;
            previous_was_lowercase = false;
        }
    }

    initials
}

fn match_score(value: &str, query: &str, exact: f64, prefix: f64, contains: f64) -> f64 {
    if value.is_empty() || query.is_empty() {
        0.0
    } else if value == query {
        exact
    } else if value.starts_with(query) {
        prefix
    } else if value.contains(query) {
        contains
    } else {
        0.0
    }
}

pub fn fuzzy_search<T: Clone>(
    items: &[T],
    query: &str,
    get_title: fn(&T) -> &str,
    get_content: fn(&T) -> &str,
) -> Vec<(T, f64)> {
    let query = query.trim().to_lowercase();
    if query.is_empty() {
        return Vec::new();
    }

    let mut results = Vec::new();

    for item in items {
        let title = get_title(item);
        let content = get_content(item);

        let normalized_title = title.to_lowercase();
        let normalized_content = content.to_lowercase();

        let (title_pinyin, title_initials) = text_to_pinyin(title);
        let word_initials = ascii_word_initials(title);

        // 不在此处使用 Skim 的字符子序列匹配。对于 "wx" 这样的短查询，
        // 它会仅因 "waifu2x" 中的 `w` 位于 `x` 之前而将其视为命中；同样
        // 宽松的规则也会让很长的路径带出无关条目。改为只匹配真实的标题
        // 子串、全拼或连续的首字母序列。
        let title_score = match_score(&normalized_title, &query, 1200.0, 1050.0, 900.0)
            .max(match_score(&title_pinyin, &query, 1150.0, 1000.0, 850.0))
            .max(match_score(&title_initials, &query, 1100.0, 1000.0, 850.0))
            .max(match_score(&word_initials, &query, 1080.0, 980.0, 820.0));
        // 内容仍可供显式传入内容字段的调用方（如书签）使用，但仅接受字面
        // 包含匹配；目录名不再能通过模糊子序列匹配产生结果。
        let content_score = match_score(&normalized_content, &query, 320.0, 280.0, 240.0);
        let total_score = title_score * 2.0 + content_score;

        if total_score > 0.0 {
            results.push((item.clone(), total_score));
        }
    }

    results.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
    results
}
