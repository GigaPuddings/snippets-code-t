use crate::config::{get_value, set_value, BROWSER_BOOKMARKS_KEY, INSTALLED_APPS_KEY, SEARCH_ENGINES_KEY};
use log::info;
use serde::{Deserialize, Serialize};
use tauri::AppHandle;
use fuzzy_matcher::skim::SkimMatcherV2;
use fuzzy_matcher::FuzzyMatcher;
use crate::apps::AppInfo;
use crate::bookmarks::BookmarkInfo;
use pinyin::ToPinyin;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SearchEngine {
    pub id: String,
    pub keyword: String,
    pub name: String,
    pub icon: String,
    pub url: String,
    pub enabled: bool,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct SearchResult {
    pub id: String,
    pub title: String,
    pub content: String,
    pub summarize: String,
    pub icon: String,
    pub score: f64,
}

// 默认搜索引擎配置
pub const DEFAULT_ENGINES: &str = include_str!("../assets/default_engines.json");

// 转换文本为拼音（全拼和首字母）
fn text_to_pinyin(text: &str) -> (String, String) {
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

// 模糊搜索函数（支持拼音）
fn fuzzy_search<T: Clone>(
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
        
        // 直接匹配
        let direct_title_score = matcher.fuzzy_match(title, &query).unwrap_or(0) as f64;
        let direct_content_score = matcher.fuzzy_match(content, &query).unwrap_or(0) as f64;
        
        // 拼音匹配（针对标题）
        let (title_pinyin, title_initials) = text_to_pinyin(title);
        let pinyin_score = matcher.fuzzy_match(&title_pinyin, &query).unwrap_or(0) as f64;
        let initials_score = matcher.fuzzy_match(&title_initials, &query).unwrap_or(0) as f64 * 1.5; // 首字母匹配权重更高
        
        // 取最高分作为标题得分
        let title_score = direct_title_score.max(pinyin_score).max(initials_score);
        
        // 标题匹配权重更高
        let total_score = title_score * 2.0 + direct_content_score;
        
        if total_score > 0.0 {
            results.push((item.clone(), total_score));
        }
    }

    // 按分数降序排序
    results.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
    results
}

// 搜索应用
#[tauri::command]
pub fn search_apps(app_handle: AppHandle, query: String) -> Result<Vec<SearchResult>, String> {
    let apps = match crate::config::get_value(&app_handle, INSTALLED_APPS_KEY) {
        Some(value) => serde_json::from_value(value).unwrap_or_default(),
        None => Vec::new(),
    };
    
    let results = fuzzy_search(
        &apps,
        &query,
        |app: &AppInfo| &app.title,
        |app: &AppInfo| &app.content,
    );

    Ok(results
        .into_iter()
        .map(|(app, score)| SearchResult {
            id: app.id,
            title: app.title,
            content: app.content,
            summarize: "app".to_string(),
            icon: app.icon.unwrap_or_default(),
            score,
        })
        .collect())
}

// 搜索书签
#[tauri::command]
pub fn search_bookmarks(app_handle: AppHandle, query: String) -> Result<Vec<SearchResult>, String> {
    let bookmarks = match crate::config::get_value(&app_handle, BROWSER_BOOKMARKS_KEY) {
        Some(value) => serde_json::from_value(value).unwrap_or_default(),
        None => Vec::new(),
    };
    
    let results = fuzzy_search(
        &bookmarks,
        &query,
        |bookmark: &BookmarkInfo| &bookmark.title,
        |bookmark: &BookmarkInfo| &bookmark.content,
    );

    Ok(results
        .into_iter()
        .map(|(bookmark, score)| SearchResult {
            id: bookmark.id,
            title: bookmark.title,
            content: bookmark.content,
            summarize: "bookmark".to_string(),
            icon: bookmark.icon.unwrap_or_default(),
            score,
        })
        .collect())
}

// 获取搜索引擎配置
#[tauri::command]
pub fn get_search_engines(app_handle: AppHandle) -> Result<Vec<SearchEngine>, String> {
    match get_value(&app_handle, SEARCH_ENGINES_KEY) {
        Some(engines) => Ok(engines
            .as_array()
            .unwrap_or(&Vec::new())
            .iter()
            .map(|e| serde_json::from_value(e.clone()).unwrap())
            .collect()),
        None => {
            // 如果没有保存的搜索引擎配置，使用默认配置,并且第一条数据设置为默认搜索引擎
            let mut engines: Vec<SearchEngine> = serde_json::from_str(DEFAULT_ENGINES)
                .map_err(|e| e.to_string())?;
            if !engines.is_empty() {
                engines[0].enabled = true;
            }
            set_value(&app_handle, SEARCH_ENGINES_KEY, &engines);
            Ok(engines)
        }
    }
}

// 更新搜索引擎配置
#[tauri::command]
pub fn update_search_engines(
    app_handle: AppHandle,
    engines: Vec<SearchEngine>,
) -> Result<(), String> {
    info!("更新搜索引擎配置");    
    set_value(&app_handle, SEARCH_ENGINES_KEY, &engines);
    Ok(())
}

// 获取默认搜索引擎配置
#[tauri::command]
pub fn get_default_engines() -> Result<Vec<SearchEngine>, String> {
    serde_json::from_str(DEFAULT_ENGINES).map_err(|e| e.to_string())
}
