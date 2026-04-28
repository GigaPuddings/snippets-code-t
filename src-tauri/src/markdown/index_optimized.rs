// 优化的搜索索引实现
// 集成中文分词、并行搜索和相关性评分

use crate::markdown::CacheManager;
use crate::markdown::metadata::try_parse_front_matter;
use fuzzy_matcher::skim::SkimMatcherV2;
use fuzzy_matcher::FuzzyMatcher;
use jieba_rs::Jieba;
use pinyin::ToPinyin;
use rayon::prelude::*;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};
use std::sync::{Arc, RwLock};
use walkdir::WalkDir;
use log::warn;

// 搜索索引项
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IndexEntry {
    // 文件路径
    pub file_path: PathBuf,
    // 文件 ID
    pub id: String,
    // 标题（从文件名提取）
    pub title: String,
    // 标签
    pub tags: Vec<String>,
    // 是否收藏
    pub favorite: bool,
    // 文件类型
    pub file_type: String,
    // 编程语言（代码片段）
    pub language: Option<String>,
    // 内容摘要
    pub content_summary: String,
    // 完整内容（用于搜索）
    #[serde(skip)]
    pub full_content: String,
}

// 优化的索引管理器
pub struct OptimizedIndexManager {
    // 所有索引项
    entries: Arc<RwLock<Vec<IndexEntry>>>,
    // 标签索引：标签 -> 索引项索引列表
    tag_index: Arc<RwLock<HashMap<String, Vec<usize>>>>,
    // 收藏索引：收藏的索引项索引列表
    favorite_index: Arc<RwLock<Vec<usize>>>,
    // 中文分词器
    jieba: Arc<Jieba>,
    // 模糊匹配器
    fuzzy_matcher: SkimMatcherV2,
    // 倒排索引：词 -> [(索引项索引, 出现次数)]
    inverted_index: Arc<RwLock<HashMap<String, Vec<(usize, usize)>>>>,
}

impl OptimizedIndexManager {
    // 创建新的索引管理器
    pub fn new() -> Self {
        Self {
            entries: Arc::new(RwLock::new(Vec::new())),
            tag_index: Arc::new(RwLock::new(HashMap::new())),
            favorite_index: Arc::new(RwLock::new(Vec::new())),
            jieba: Arc::new(Jieba::new()),
            fuzzy_matcher: SkimMatcherV2::default(),
            inverted_index: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    // 分词（支持中英文和拼音）
    fn tokenize(&self, text: &str) -> Vec<String> {
        let mut tokens = Vec::new();

        // 中文分词
        let chinese_tokens: Vec<String> = self.jieba
            .cut(text, false)
            .into_iter()
            .map(|s| s.to_lowercase())
            .filter(|s| s.len() > 1)  // 过滤单字
            .collect();
        tokens.extend(chinese_tokens.clone());

        // 每个中文词单独转拼音并加入索引（这样搜 "wendang" 能匹配到含「文档」的文档）
        for word in &chinese_tokens {
            let (full, first) = self.text_to_pinyin(word);
            if !full.is_empty() {
                tokens.push(full);
            }
            if first.len() > 1 {
                tokens.push(first);
            }
        }

        // 整段拼音（可选，便于整句拼音搜索）
        let (full_pinyin, first_letters) = self.text_to_pinyin(text);
        if !full_pinyin.is_empty() && full_pinyin.len() > 1 {
            tokens.push(full_pinyin);
        }
        if !first_letters.is_empty() && first_letters.len() > 1 {
            tokens.push(first_letters);
        }

        // 英文分词
        let english_tokens: Vec<String> = text
            .split(|c: char| !c.is_alphanumeric() && c != '_')
            .filter(|s| !s.is_empty() && s.len() > 1)
            .map(|s| s.to_lowercase())
            .collect();
        tokens.extend(english_tokens);

        // 去重
        tokens.sort();
        tokens.dedup();
        tokens
    }

    // 转换文本为拼音（全拼和首字母）
    fn text_to_pinyin(&self, text: &str) -> (String, String) {
        let mut full_pinyin = String::new();
        let mut first_letters = String::new();

        for c in text.chars() {
            if c.is_ascii_whitespace() || !c.is_alphanumeric() {
                // 跳过空白和非字母数字字符
                continue;
            }
            if let Some(pinyin_iter) = c.to_pinyin() {
                let pinyin_str = pinyin_iter.plain();
                full_pinyin.push_str(pinyin_str);
                if let Some(first_char) = pinyin_str.chars().next() {
                    first_letters.push(first_char);
                }
            } else if c.is_ascii_alphanumeric() {
                // 保留英文字符
                full_pinyin.push(c);
                first_letters.push(c);
            }
        }

        (full_pinyin, first_letters)
    }

    // 构建索引
    pub async fn build_index(
        workspace_root: &Path,
        _cache_manager: &CacheManager,
    ) -> Result<Self, String> {
        
        let manager = Self::new();

        // 扫描所有 Markdown 文件
        let mut entries = Vec::new();
        let mut tag_index: HashMap<String, Vec<usize>> = HashMap::new();
        let mut favorite_index = Vec::new();
        let mut inverted_index: HashMap<String, Vec<(usize, usize)>> = HashMap::new();

        for entry in WalkDir::new(workspace_root)
            .follow_links(true)
            .into_iter()
            .filter_map(|e| e.ok())
        {
            let path = entry.path();

            // 只处理 .md 文件
            if !path.is_file() || path.extension().and_then(|s| s.to_str()) != Some("md") {
                continue;
            }

            // 读取文件内容
            let raw_content = match fs::read_to_string(path) {
                Ok(c) => c,
                Err(e) => {
                    warn!("⚠️ [优化索引] 读取文件失败 {}: {}", path.display(), e);
                    continue;
                }
            };

            // 从 Frontmatter 读取所有内容元数据（唯一数据源）
            let (title, tags, file_type, language, favorite, body) = {
                let (fm_opt, body) = try_parse_front_matter(&raw_content);
                if let Some(fm) = fm_opt {
                    (fm.title, fm.tags, fm.fragment_type, fm.language, fm.favorite, body)
                } else {
                    // 无 Frontmatter：使用文件名作为标题，其余默认值
                    let file_stem = path
                        .file_stem()
                        .and_then(|s| s.to_str())
                        .unwrap_or("Untitled")
                        .to_string();
                    (file_stem, vec![], "note".to_string(), None, false, raw_content.clone())
                }
            };

            // 生成内容摘要（前 200 个字符，安全处理多字节字符）
            let content_summary = if body.chars().count() > 200 {
                let truncated: String = body.chars().take(200).collect();
                format!("{}...", truncated)
            } else {
                body.clone()
            };

            // 创建索引项
            let index_entry = IndexEntry {
                file_path: path.to_path_buf(),
                id: path.to_string_lossy().to_string(),
                title: title.clone(),
                tags,
                favorite,
                file_type,
                language,
                content_summary,
                full_content: body.clone(),
            };

            let entry_index = entries.len();
            
            // 构建倒排索引
            let text_to_index = format!("{} {} {}", title, body, index_entry.tags.join(" "));
            let tokens = manager.tokenize(&text_to_index);
            
            for token in tokens {
                let entry_list = inverted_index.entry(token.clone()).or_insert_with(Vec::new);
                
                // 计算词频
                let count = text_to_index.matches(&token).count();
                entry_list.push((entry_index, count));
            }
            
            entries.push(index_entry.clone());

            // 更新标签索引
            for tag in &index_entry.tags {
                tag_index
                    .entry(tag.clone())
                    .or_insert_with(Vec::new)
                    .push(entry_index);
            }

            // 更新收藏索引
            if index_entry.favorite {
                favorite_index.push(entry_index);
            }
        }

        // 更新管理器的数据
        if let Ok(mut e) = manager.entries.write() {
            *e = entries;
        }
        if let Ok(mut t) = manager.tag_index.write() {
            *t = tag_index;
        }
        if let Ok(mut f) = manager.favorite_index.write() {
            *f = favorite_index;
        }
        if let Ok(mut i) = manager.inverted_index.write() {
            *i = inverted_index;
        }

        Ok(manager)
    }

    // 计算相关性评分
    fn calculate_relevance_score(&self, entry: &IndexEntry, query_tokens: &[String]) -> f32 {
        let mut score = 0.0;
        
        // 标题匹配（权重 5.0）
        let title_lower = entry.title.to_lowercase();
        for token in query_tokens {
            if title_lower.contains(token) {
                score += 5.0;
                // 完全匹配额外加分
                if title_lower == *token {
                    score += 10.0;
                }
            }
            // 拼音匹配：检查 token 是否匹配标题的中文拼音
            let (full_pinyin, first_letters) = self.text_to_pinyin(&title_lower);
            if full_pinyin.contains(token) || first_letters.contains(token) {
                score += 4.0;
            }
        }
        
        // 内容匹配（权重 1.0，使用 TF）
        let content_lower = entry.full_content.to_lowercase();
        for token in query_tokens {
            let count = content_lower.matches(token).count();
            score += count as f32;
            // 拼音匹配：检查 token 是否匹配内容的拼音
            let (full_pinyin, first_letters) = self.text_to_pinyin(&content_lower);
            if full_pinyin.contains(token) || first_letters.contains(token) {
                score += 0.5;
            }
        }
        
        // 标签匹配（权重 3.0）
        for tag in &entry.tags {
            let tag_lower = tag.to_lowercase();
            for token in query_tokens {
                if tag_lower.contains(token) {
                    score += 3.0;
                    // 完全匹配额外加分
                    if tag_lower == *token {
                        score += 5.0;
                    }
                }
                // 拼音匹配
                let (full_pinyin, first_letters) = self.text_to_pinyin(&tag_lower);
                if full_pinyin.contains(token) || first_letters.contains(token) {
                    score += 2.5;
                }
            }
        }
        
        // 收藏加权（1.5倍）
        if entry.favorite {
            score *= 1.5;
        }
        
        score
    }

    // 并行搜索（支持精确匹配 + 模糊匹配）
    pub fn search(&self, query: &str) -> Vec<IndexEntry> {
        let entries = match self.entries.read() {
            Ok(e) => e,
            Err(_) => return Vec::new(),
        };

        if entries.is_empty() {
            return Vec::new();
        }

        // 分词查询
        let query_tokens = self.tokenize(query);
        
        if query_tokens.is_empty() && query.chars().any(|c| c.is_alphanumeric()) {
            // 如果分词为空但查询有内容，直接用原查询
            query_tokens.iter().for_each(|_| {});
        }

        // 第一轮：精确匹配
        let exact_results: Vec<(usize, f32)> = entries
            .par_iter()
            .enumerate()
            .filter_map(|(idx, entry)| {
                let score = self.calculate_relevance_score(entry, &query_tokens);
                if score > 0.0 {
                    Some((idx, score))
                } else {
                    None
                }
            })
            .collect();

        // 如果精确匹配结果 >= 5，直接返回（排序后取前100）
        let mut all_results = exact_results;

        // 如果精确匹配结果不足 10 条，补充模糊匹配
        if all_results.len() < 10 && !query.is_empty() {
            let query_lower = query.to_lowercase();
            
            let fuzzy_results: Vec<(usize, f32)> = entries
                .par_iter()
                .enumerate()
                .filter_map(|(idx, entry)| {
                    // 跳过已精确匹配的
                    if all_results.iter().any(|(i, _)| *i == idx) {
                        return None;
                    }

                    // 模糊匹配标题
                    let title_score = self.fuzzy_matcher
                        .fuzzy_match(&entry.title.to_lowercase(), &query_lower)
                        .map(|s| s as f32 * 5.0) // 标题权重高
                        .unwrap_or(0.0);

                    // 模糊匹配标签
                    let tag_score: f32 = entry.tags
                        .iter()
                        .map(|tag| {
                            self.fuzzy_matcher
                                .fuzzy_match(&tag.to_lowercase(), &query_lower)
                                .map(|s| s as f32 * 3.0)
                                .unwrap_or(0.0)
                        })
                        .sum();

                    let total = title_score + tag_score;
                    if total > 0.0 {
                        Some((idx, total))
                    } else {
                        None
                    }
                })
                .collect();

            all_results.extend(fuzzy_results);
        }

        // 按分数排序
        all_results.par_sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap_or(std::cmp::Ordering::Equal));

        let result_entries: Vec<IndexEntry> = all_results
            .into_iter()
            .take(100)
            .filter_map(|(idx, _score)| entries.get(idx).cloned())
            .collect();

        result_entries
    }

    // 按标签筛选
    #[allow(dead_code)]
    pub fn filter_by_tag(&self, tag: &str) -> Vec<IndexEntry> {
        let entries = match self.entries.read() {
            Ok(e) => e,
            Err(_) => return Vec::new(),
        };

        let tag_index = match self.tag_index.read() {
            Ok(t) => t,
            Err(_) => return Vec::new(),
        };

        if let Some(indices) = tag_index.get(tag) {
            indices
                .iter()
                .filter_map(|&index| entries.get(index).cloned())
                .collect()
        } else {
            Vec::new()
        }
    }

    // 获取收藏列表
    #[allow(dead_code)]
    pub fn get_favorites(&self) -> Vec<IndexEntry> {
        let entries = match self.entries.read() {
            Ok(e) => e,
            Err(_) => return Vec::new(),
        };

        let favorite_index = match self.favorite_index.read() {
            Ok(f) => f,
            Err(_) => return Vec::new(),
        };

        favorite_index
            .iter()
            .filter_map(|&index| entries.get(index).cloned())
            .collect()
    }

    // 获取所有标签
    #[allow(dead_code)]
    pub fn get_all_tags(&self) -> Vec<String> {
        let tag_index = match self.tag_index.read() {
            Ok(t) => t,
            Err(_) => return Vec::new(),
        };

        tag_index.keys().cloned().collect()
    }

    // 获取所有索引项
    #[allow(dead_code)]
    pub fn get_all_entries(&self) -> Vec<IndexEntry> {
        let entries = match self.entries.read() {
            Ok(e) => e,
            Err(_) => return Vec::new(),
        };

        entries.clone()
    }

    // 更新索引项
    pub fn update_entry(
        &self,
        file_path: &Path,
        _workspace_root: &Path,
        _cache_manager: &CacheManager,
    ) -> Result<(), String> {
        // 读取文件内容
        let raw_content = fs::read_to_string(file_path)
            .map_err(|e| format!("读取文件失败: {}", e))?;

        // 从 Frontmatter 读取所有内容元数据（唯一数据源）
        let (title, tags, file_type, language, favorite, body) = {
            let (fm_opt, body) = try_parse_front_matter(&raw_content);
            if let Some(fm) = fm_opt {
                (fm.title, fm.tags, fm.fragment_type, fm.language, fm.favorite, body)
            } else {
                let file_stem = file_path
                    .file_stem()
                    .and_then(|s| s.to_str())
                    .unwrap_or("Untitled")
                    .to_string();
                (file_stem, vec![], "note".to_string(), None, false, raw_content.clone())
            }
        };

        // 生成内容摘要（安全地处理多字节字符）
        let content_summary = if body.chars().count() > 200 {
            let truncated: String = body.chars().take(200).collect();
            format!("{}...", truncated)
        } else {
            body.clone()
        };

        // 创建新的索引项
        let new_entry = IndexEntry {
            file_path: file_path.to_path_buf(),
            id: file_path.to_string_lossy().to_string(),
            title: title.clone(),
            tags,
            favorite,
            file_type,
            language,
            content_summary,
            full_content: body.clone(),
        };

        // 更新或添加索引项
        let mut entries = self.entries.write().map_err(|_| "获取写锁失败")?;
        let mut tag_index = self.tag_index.write().map_err(|_| "获取写锁失败")?;
        let mut favorite_index = self.favorite_index.write().map_err(|_| "获取写锁失败")?;
        let mut inverted_index = self.inverted_index.write().map_err(|_| "获取写锁失败")?;

        // 查找现有索引项
        if let Some(index) = entries.iter().position(|e| e.file_path == file_path) {
            // 移除旧的标签索引
            let old_entry = &entries[index];
            for tag in &old_entry.tags {
                if let Some(indices) = tag_index.get_mut(tag) {
                    indices.retain(|&i| i != index);
                    if indices.is_empty() {
                        tag_index.remove(tag);
                    }
                }
            }

            // 移除旧的收藏索引
            if old_entry.favorite {
                favorite_index.retain(|&i| i != index);
            }

            // 移除旧的倒排索引
            for token_entries in inverted_index.values_mut() {
                token_entries.retain(|(i, _)| *i != index);
            }

            // 更新索引项
            entries[index] = new_entry.clone();

            // 重建倒排索引
            let text_to_index = format!("{} {} {}", title, body, new_entry.tags.join(" "));
            let tokens = self.tokenize(&text_to_index);
            
            for token in tokens {
                let entry_list = inverted_index.entry(token.clone()).or_insert_with(Vec::new);
                let count = text_to_index.matches(&token).count();
                entry_list.push((index, count));
            }

            // 添加新的标签索引
            for tag in &new_entry.tags {
                tag_index
                    .entry(tag.clone())
                    .or_insert_with(Vec::new)
                    .push(index);
            }

            // 添加新的收藏索引
            if new_entry.favorite {
                favorite_index.push(index);
            }
        } else {
            // 添加新索引项
            let index = entries.len();
            entries.push(new_entry.clone());

            // 构建倒排索引
            let text_to_index = format!("{} {} {}", title, body, new_entry.tags.join(" "));
            let tokens = self.tokenize(&text_to_index);
            
            for token in tokens {
                let entry_list = inverted_index.entry(token.clone()).or_insert_with(Vec::new);
                let count = text_to_index.matches(&token).count();
                entry_list.push((index, count));
            }

            // 添加标签索引
            for tag in &new_entry.tags {
                tag_index
                    .entry(tag.clone())
                    .or_insert_with(Vec::new)
                    .push(index);
            }

            // 添加收藏索引
            if new_entry.favorite {
                favorite_index.push(index);
            }
        }

        Ok(())
    }

    // 删除索引项
    pub fn remove_entry(&self, file_path: &Path) -> Result<(), String> {
        let mut entries = self.entries.write().map_err(|_| "获取写锁失败")?;
        let mut tag_index = self.tag_index.write().map_err(|_| "获取写锁失败")?;
        let mut favorite_index = self.favorite_index.write().map_err(|_| "获取写锁失败")?;
        let mut inverted_index = self.inverted_index.write().map_err(|_| "获取写锁失败")?;

        // 查找索引项
        if let Some(index) = entries.iter().position(|e| e.file_path == file_path) {
            let entry = &entries[index];

            // 移除标签索引
            for tag in &entry.tags {
                if let Some(indices) = tag_index.get_mut(tag) {
                    indices.retain(|&i| i != index);
                    if indices.is_empty() {
                        tag_index.remove(tag);
                    }
                }
            }

            // 移除收藏索引
            if entry.favorite {
                favorite_index.retain(|&i| i != index);
            }

            // 移除倒排索引
            for token_entries in inverted_index.values_mut() {
                token_entries.retain(|(i, _)| *i != index);
            }

            // 移除索引项
            entries.remove(index);

            // 更新所有大于被删除索引的索引值
            for indices in tag_index.values_mut() {
                for i in indices.iter_mut() {
                    if *i > index {
                        *i -= 1;
                    }
                }
            }

            for i in favorite_index.iter_mut() {
                if *i > index {
                    *i -= 1;
                }
            }

            for token_entries in inverted_index.values_mut() {
                for (i, _) in token_entries.iter_mut() {
                    if *i > index {
                        *i -= 1;
                    }
                }
            }
        }

        Ok(())
    }
}

impl Default for OptimizedIndexManager {
    fn default() -> Self {
        Self::new()
    }
}
