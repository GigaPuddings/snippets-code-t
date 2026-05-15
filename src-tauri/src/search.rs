use fuzzy_matcher::skim::SkimMatcherV2;
use fuzzy_matcher::FuzzyMatcher;
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

pub fn fuzzy_search<T: Clone>(
    items: &[T],
    query: &str,
    get_title: fn(&T) -> &str,
    get_content: fn(&T) -> &str,
) -> Vec<(T, f64)> {
    let matcher = SkimMatcherV2::default();
    let query = query.to_lowercase();
    let mut results = Vec::new();

    for item in items {
        let title = get_title(item);
        let content = get_content(item);

        let direct_title_score = matcher.fuzzy_match(title, &query).unwrap_or(0) as f64;
        let direct_content_score = matcher.fuzzy_match(content, &query).unwrap_or(0) as f64;

        let (title_pinyin, title_initials) = text_to_pinyin(title);
        let pinyin_score = matcher.fuzzy_match(&title_pinyin, &query).unwrap_or(0) as f64;
        let initials_score = matcher.fuzzy_match(&title_initials, &query).unwrap_or(0) as f64 * 1.5;

        let title_score = direct_title_score.max(pinyin_score).max(initials_score);
        let total_score = title_score * 2.0 + direct_content_score;

        if total_score > 0.0 {
            results.push((item.clone(), total_score));
        }
    }

    results.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
    results
}
