use serde::{Deserialize, Serialize};
use std::{
    collections::HashMap,
    sync::{LazyLock, Mutex},
    time::Instant,
};
use tauri::{AppHandle, Emitter, Window};

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(tag = "kind", rename_all = "kebab-case")]
pub enum SearchAction {
    #[serde(rename_all = "camelCase")]
    Page {
        route_name: String,
        #[serde(default)]
        params: HashMap<String, String>,
        #[serde(default)]
        query: HashMap<String, String>,
    },
    #[serde(rename_all = "camelCase")]
    Settings {
        tab_id: String,
    },
    NewChat,
    #[serde(rename_all = "camelCase")]
    Conversation {
        conversation_id: String,
    },
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct SearchNavigationRequest {
    pub request_id: String,
    pub plugin_id: Option<String>,
    pub action: SearchAction,
}

static PENDING: LazyLock<Mutex<Option<(SearchNavigationRequest, Instant)>>> =
    LazyLock::new(|| Mutex::new(None));

fn valid_id(value: &str) -> bool {
    !value.is_empty() && value.len() <= 256 && !value.chars().any(char::is_control)
}

fn valid_fields(fields: &HashMap<String, String>) -> bool {
    fields.len() <= 16
        && fields.iter().all(|(key, value)| {
            !key.is_empty()
                && key.len() <= 64
                && key
                    .chars()
                    .all(|c| c.is_ascii_alphanumeric() || c == '_' || c == '-')
                && value.len() <= 2048
        })
}

fn validate(app: &AppHandle, request: &SearchNavigationRequest) -> Result<(), String> {
    if !valid_id(&request.request_id) {
        return Err("无效的搜索跳转请求".into());
    }
    if let Some(owner) = &request.plugin_id {
        crate::app_config::require_plugin_enabled(app, owner)?;
    }
    let declared = |field, id: &str| -> bool {
        request.plugin_id.as_ref().is_some_and(|owner| {
            crate::app_config::plugin_declares_capability(app, owner, field, id)
        })
    };
    let allowed = match &request.action {
        SearchAction::Page {
            route_name,
            params,
            query,
        } => {
            valid_id(route_name)
                && valid_fields(params)
                && valid_fields(query)
                && if request.plugin_id.is_some() {
                    declared("routeNames", route_name)
                } else {
                    matches!(route_name.as_str(), "Workbench" | "Welcome" | "User")
                        && params.is_empty()
                        && query.is_empty()
                }
        }
        SearchAction::Settings { tab_id } => {
            valid_id(tab_id)
                && if request.plugin_id.is_some() {
                    declared("settingsTabs", tab_id)
                } else {
                    matches!(
                        tab_id.as_str(),
                        "workbench"
                            | "general"
                            | "ai"
                            | "plugins"
                            | "shortcut"
                            | "data"
                            | "developer"
                            | "attachment"
                    )
                }
        }
        SearchAction::NewChat => {
            request.plugin_id.as_deref() == Some("local-ai")
                && declared("routeNames", "LocalAiChat")
        }
        SearchAction::Conversation { conversation_id } => {
            valid_id(conversation_id)
                && request.plugin_id.as_deref() == Some("local-ai")
                && declared("routeNames", "LocalAiChat")
        }
    };
    if allowed {
        Ok(())
    } else {
        Err("搜索目标不属于当前插件或未注册".into())
    }
}

#[tauri::command]
pub async fn open_product_search_target(
    app_handle: AppHandle,
    window: Window,
    request: SearchNavigationRequest,
) -> Result<(), String> {
    if !matches!(window.label(), "main" | "config") {
        return Err("此窗口不能请求搜索跳转".into());
    }
    validate(&app_handle, &request)?;
    *PENDING.lock().map_err(|e| e.to_string())? = Some((request, Instant::now()));
    if let Err(error) = crate::window::activate_config_for_search_navigation() {
        *PENDING.lock().map_err(|e| e.to_string())? = None;
        return Err(error);
    }
    Ok(())
}

#[tauri::command]
pub fn get_pending_search_navigation(
    app_handle: AppHandle,
    window: Window,
) -> Result<Option<SearchNavigationRequest>, String> {
    if window.label() != "config" {
        return Err("只有配置窗口可以读取跳转请求".into());
    }
    let mut pending = PENDING.lock().map_err(|e| e.to_string())?;
    if pending
        .as_ref()
        .is_some_and(|(_, at)| at.elapsed().as_secs() >= 30)
    {
        *pending = None;
    }
    let request = pending.as_ref().map(|(request, _)| request.clone());
    drop(pending);
    if let Some(request) = &request {
        if let Err(error) = validate(&app_handle, request) {
            finish_search_navigation(
                app_handle,
                window,
                request.request_id.clone(),
                false,
                Some(error),
            )?;
            return Ok(None);
        }
    }
    Ok(request)
}

#[tauri::command]
pub fn finish_search_navigation(
    app_handle: AppHandle,
    window: Window,
    request_id: String,
    success: bool,
    error: Option<String>,
) -> Result<(), String> {
    if window.label() != "config" {
        return Err("只有配置窗口可以确认跳转".into());
    }
    let mut pending = PENDING.lock().map_err(|e| e.to_string())?;
    if pending
        .as_ref()
        .is_none_or(|(request, _)| request.request_id != request_id)
    {
        return Ok(());
    }
    *pending = None;
    drop(pending);
    let _ = app_handle.emit_to(
        "main",
        "product-search-navigation-complete",
        serde_json::json!({ "requestId": request_id, "success": success, "error": error }),
    );
    Ok(())
}

#[tauri::command]
pub fn cancel_search_navigation(window: Window, request_id: String) -> Result<(), String> {
    if window.label() != "main" {
        return Err("此窗口不能取消搜索请求".into());
    }
    let mut pending = PENDING.lock().map_err(|e| e.to_string())?;
    if pending
        .as_ref()
        .is_some_and(|(request, _)| request.request_id == request_id)
    {
        *pending = None;
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn accepts_only_bounded_serializable_actions() {
        assert!(serde_json::from_value::<SearchAction>(
            serde_json::json!({"kind":"command","command":"delete_all_data"})
        )
        .is_err());
        let action: SearchAction = serde_json::from_value(
            serde_json::json!({"kind":"conversation","conversationId":"chat-1"}),
        )
        .unwrap();
        assert!(
            matches!(action, SearchAction::Conversation { conversation_id } if conversation_id == "chat-1")
        );
        assert!(!valid_id("\nchat"));
        assert!(!valid_fields(&HashMap::from([(
            "unsafe key".into(),
            "x".into()
        )])));
    }
}
