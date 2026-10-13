use super::{load_chat_histories, LocalAiChatHistory};
use serde::Serialize;
use std::{
    path::PathBuf,
    sync::{LazyLock, Mutex},
    time::SystemTime,
};
use tauri::{AppHandle, Emitter};

struct Document {
    id: String,
    title: String,
    title_lower: String,
    body: String,
    body_lower: String,
    updated_at: String,
}
struct Projection {
    path: PathBuf,
    stamp: Option<(SystemTime, u64)>,
    documents: Vec<Document>,
}
static CACHE: LazyLock<Mutex<Option<Projection>>> = LazyLock::new(|| Mutex::new(None));

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ChatSearchHit {
    pub conversation_id: String,
    pub title: String,
    pub updated_at: String,
    pub excerpt: String,
    pub score: f64,
}

fn project(history: LocalAiChatHistory) -> Option<Document> {
    let body = history
        .messages
        .as_ref()
        .and_then(|value| value.as_array())
        .filter(|messages| !messages.is_empty())
        .map(|messages| {
            messages
                .iter()
                .filter(|message| {
                    matches!(
                        message.get("role").and_then(|v| v.as_str()),
                        Some("user" | "assistant")
                    )
                })
                .filter_map(|message| message.get("content").and_then(|v| v.as_str()))
                .collect::<Vec<_>>()
                .join("\n")
        })
        .unwrap_or_else(|| {
            history
                .turns
                .iter()
                .filter(|turn| turn.role != "system")
                .map(|turn| turn.content.as_str())
                .collect::<Vec<_>>()
                .join("\n")
        });
    // Empty, unsent chats do not fill the global search with "New chat" entries.
    if body.trim().is_empty() {
        return None;
    }
    Some(Document {
        id: history.id,
        title_lower: history.title.to_lowercase(),
        title: history.title,
        body_lower: body.to_lowercase(),
        body,
        updated_at: history.updated_at,
    })
}

fn ordered_match(value: &str, query: &str) -> bool {
    if query.chars().count() < 2 || (query.is_ascii() && query.len() < 3) {
        return false;
    }
    let mut chars = value.chars();
    query
        .chars()
        .all(|needle| chars.any(|character| character == needle))
}

fn excerpt(body: &str, query: &str) -> String {
    let lower = body.to_lowercase();
    let start = lower
        .find(query)
        .map(|position| lower[..position].chars().count().saturating_sub(24))
        .unwrap_or(0);
    let text: String = body.chars().skip(start).take(140).collect();
    format!(
        "{}{}",
        if start > 0 { "…" } else { "" },
        text.replace(['\r', '\n'], " ")
    )
}

fn search(documents: &[Document], query: &str, deep: bool, limit: usize) -> Vec<ChatSearchHit> {
    let query = query.trim().to_lowercase();
    if query.is_empty() {
        return Vec::new();
    }
    let tokens: Vec<&str> = query.split_whitespace().collect();
    let mut results: Vec<_> = documents
        .iter()
        .filter_map(|document| {
            let title_match = tokens
                .iter()
                .all(|token| document.title_lower.contains(token))
                || ordered_match(&document.title_lower, &query);
            let body_match = deep
                && tokens
                    .iter()
                    .all(|token| document.body_lower.contains(token));
            if !title_match && !body_match {
                return None;
            }
            let score = if document.title_lower == query {
                100.0
            } else if document.title_lower.starts_with(&query) {
                80.0
            } else if title_match {
                40.0
            } else {
                1.0
            };
            Some(ChatSearchHit {
                conversation_id: document.id.clone(),
                title: document.title.clone(),
                updated_at: document.updated_at.clone(),
                excerpt: excerpt(&document.body, &query),
                score,
            })
        })
        .collect();
    results.sort_by(|a, b| {
        b.score
            .total_cmp(&a.score)
            .then_with(|| b.updated_at.cmp(&a.updated_at))
            .then_with(|| a.conversation_id.cmp(&b.conversation_id))
    });
    results.truncate(limit.min(50));
    results
}

pub fn query(
    app: &AppHandle,
    query: &str,
    deep: bool,
    limit: usize,
) -> Result<Vec<ChatSearchHit>, String> {
    if query.len() > 1024 {
        return Err("搜索关键词过长".into());
    }
    let path = crate::json_config::get_app_config_file(app);
    let stamp = std::fs::metadata(&path)
        .ok()
        .and_then(|metadata| metadata.modified().ok().map(|time| (time, metadata.len())));
    let mut cache = CACHE.lock().map_err(|error| error.to_string())?;
    if cache
        .as_ref()
        .is_none_or(|projection| projection.path != path || projection.stamp != stamp)
    {
        let documents = load_chat_histories(app)
            .into_iter()
            .filter_map(project)
            .collect();
        *cache = Some(Projection {
            path,
            stamp,
            documents,
        });
    }
    Ok(search(
        &cache.as_ref().expect("projection initialized").documents,
        query,
        deep,
        limit,
    ))
}

pub fn invalidate(app: &AppHandle) {
    if let Ok(mut cache) = CACHE.lock() {
        *cache = None;
    }
    let _ = app.emit(
        "plugin-search-content-changed",
        serde_json::json!({ "pluginId": "local-ai" }),
    );
}

#[cfg(test)]
mod tests {
    use super::*;
    fn document(id: &str, title: &str, body: &str) -> Document {
        Document {
            id: id.into(),
            title: title.into(),
            title_lower: title.to_lowercase(),
            body: body.into(),
            body_lower: body.to_lowercase(),
            updated_at: "2026-10-13T01:00:00Z".into(),
        }
    }
    #[test]
    fn title_search_does_not_expose_body_only_matches() {
        let docs = [
            document("one", "代码评审", "秘密模型设置"),
            document("two", "模型配置", "正文"),
        ];
        assert_eq!(
            search(&docs, "模型", false, 10)
                .iter()
                .map(|hit| hit.conversation_id.as_str())
                .collect::<Vec<_>>(),
            ["two"]
        );
        assert_eq!(search(&docs, "模型", true, 10).len(), 2);
    }
    #[test]
    fn deep_search_requires_all_tokens_and_limits_plain_text_excerpt() {
        let docs = [document(
            "one",
            "其他",
            &format!("{} AI Provider 配置", "中文".repeat(500)),
        )];
        let hits = search(&docs, "AI Provider", true, 1);
        assert_eq!(hits.len(), 1);
        assert!(hits[0].excerpt.chars().count() <= 141);
        assert!(search(&docs, "AI missing", true, 10).is_empty());
    }
    #[test]
    fn indexes_message_branches_but_excludes_system_and_attachment_data() {
        let history: LocalAiChatHistory = serde_json::from_value(serde_json::json!({
            "id":"chat-1", "title":"讨论", "createdAt":"", "updatedAt":"", "turns":[],
            "messages":[{"role":"system","content":"secret"},{"role":"user","content":"分支一","attachments":[{"text":"private"}]},{"role":"assistant","content":"分支二"}]
        })).unwrap();
        let docs = [project(history).unwrap()];
        assert_eq!(search(&docs, "分支二", true, 10).len(), 1);
        assert!(search(&docs, "secret", true, 10).is_empty());
        assert!(search(&docs, "private", true, 10).is_empty());
    }
}
