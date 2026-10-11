//! The browser owns bookmark writes. Native Messaging transports only confirmed
//! node deletions through an authenticated, per-session loopback broker.
use crate::bookmarks::BookmarkSource;
use crate::db::DbConnectionManager;
use rusqlite::{params, OptionalExtension};
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
use std::collections::{HashMap, VecDeque};
use std::io::{Read, Write};
use std::net::{Ipv4Addr, SocketAddrV4, TcpListener, TcpStream};
use std::path::PathBuf;
use std::sync::{
    atomic::{AtomicBool, Ordering},
    mpsc, LazyLock, Mutex,
};
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};
use uuid::Uuid;
use winreg::{enums::HKEY_CURRENT_USER, RegKey};

const HOST: &str = "com.snippets_code.bookmarks";
const CHROME_ID: &str = "ekedlagmngafnfdpkbolakefpgjgnpam";
const FIREFOX_ID: &str = "bookmark-bridge@snippets-code.app";
const MAX_MESSAGE: usize = 512 * 1024;
const REQUEST_TIMEOUT: Duration = Duration::from_secs(15);
const REGISTRY_ROOTS: &[&str] = &[
    "Software\\Google\\Chrome",
    "Software\\Microsoft\\Edge",
    "Software\\BraveSoftware\\Brave-Browser",
    "Software\\Mozilla",
];

#[derive(Clone, Serialize, Deserialize)]
pub struct BridgeClient {
    pub id: String,
    pub browser: String,
    pub label: String,
}
struct Client {
    info: BridgeClient,
    seen: Instant,
}
struct Pending {
    client_id: String,
    expires: Instant,
    reply: mpsc::Sender<Result<(), String>>,
}
#[derive(Default)]
struct Broker {
    clients: HashMap<String, Client>,
    queues: HashMap<String, VecDeque<Value>>,
    pending: HashMap<String, Pending>,
}
static CONNECTIONS_ALLOWED: AtomicBool = AtomicBool::new(true);
static BROKER: LazyLock<Mutex<Broker>> = LazyLock::new(|| Mutex::new(Broker::default()));
static ENDPOINT: LazyLock<Mutex<Option<Endpoint>>> = LazyLock::new(|| Mutex::new(None));

#[derive(Clone, Serialize, Deserialize)]
struct Endpoint {
    port: u16,
    token: String,
}

fn bridge_dir() -> Result<PathBuf, String> {
    Ok(dirs::data_local_dir()
        .ok_or("无法获取用户数据目录")?
        .join("SnippetsCode/BookmarkBridge"))
}

fn unix_millis() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_millis() as u64
}

fn read_frame(reader: &mut impl Read) -> Result<Value, String> {
    let mut length = [0u8; 4];
    reader.read_exact(&mut length).map_err(|e| e.to_string())?;
    let length = u32::from_le_bytes(length) as usize;
    if length == 0 || length > MAX_MESSAGE {
        return Err("消息超过允许大小".into());
    }
    let mut body = vec![0u8; length];
    reader.read_exact(&mut body).map_err(|e| e.to_string())?;
    serde_json::from_slice(&body).map_err(|e| e.to_string())
}

fn write_frame(writer: &mut impl Write, value: &Value) -> Result<(), String> {
    let body = serde_json::to_vec(value).map_err(|e| e.to_string())?;
    if body.len() > MAX_MESSAGE {
        return Err("消息超过允许大小".into());
    }
    writer
        .write_all(&(body.len() as u32).to_le_bytes())
        .and_then(|_| writer.write_all(&body))
        .and_then(|_| writer.flush())
        .map_err(|e| e.to_string())
}

/// Called before Tauri initializes or installs its single-instance/log plugins.
pub fn run_native_host_if_requested() -> bool {
    let args: Vec<String> = std::env::args().skip(1).collect();
    let chrome_origin = format!("chrome-extension://{CHROME_ID}/");
    let firefox_manifest = bridge_dir().ok().map(|dir| dir.join("firefox-host.json"));
    let trusted = args.first().is_some_and(|arg| arg == &chrome_origin)
        || (args.get(1).is_some_and(|arg| arg == FIREFOX_ID)
            && args
                .first()
                .zip(firefox_manifest.as_ref())
                .is_some_and(|(arg, path)| std::path::Path::new(arg) == path));
    let looks_like_host = args
        .first()
        .is_some_and(|arg| arg.starts_with("chrome-extension://"))
        || args.first().is_some_and(|arg| {
            std::path::Path::new(arg)
                .file_name()
                .is_some_and(|name| name == "firefox-host.json")
        });
    if !looks_like_host {
        return false;
    }
    if !trusted {
        return true;
    }
    let mut input = std::io::stdin().lock();
    let mut output = std::io::stdout().lock();
    while let Ok(message) = read_frame(&mut input) {
        let response = (|| -> Result<Value, String> {
            let endpoint: Endpoint = serde_json::from_slice(
                &std::fs::read(bridge_dir()?.join("session.json")).map_err(|e| e.to_string())?,
            )
            .map_err(|e| e.to_string())?;
            let mut stream = TcpStream::connect_timeout(
                &SocketAddrV4::new(Ipv4Addr::LOCALHOST, endpoint.port).into(),
                Duration::from_secs(2),
            )
            .map_err(|_| "请先打开 Snippets Code 的浏览器连接设置".to_string())?;
            stream
                .set_read_timeout(Some(Duration::from_secs(3)))
                .map_err(|e| e.to_string())?;
            stream
                .set_write_timeout(Some(Duration::from_secs(3)))
                .map_err(|e| e.to_string())?;
            write_frame(
                &mut stream,
                &json!({"token": endpoint.token, "message": message}),
            )?;
            read_frame(&mut stream)
        })()
        .unwrap_or_else(|error| json!({"error": error, "commands": []}));
        if write_frame(&mut output, &response).is_err() {
            break;
        }
    }
    true
}

fn poll(message: Value) -> Result<Value, String> {
    if !CONNECTIONS_ALLOWED.load(Ordering::SeqCst) {
        return Err("浏览器连接已移除".into());
    }
    let app = crate::APP.get().ok_or("应用尚未初始化")?;
    crate::app_config::require_plugin_enabled(app, "local-launcher")?;
    let client: BridgeClient =
        serde_json::from_value(message.get("client").cloned().ok_or("缺少连接信息")?)
            .map_err(|e| e.to_string())?;
    Uuid::parse_str(&client.id).map_err(|_| "无效的浏览器连接标识")?;
    if !["Chrome", "Edge", "Brave", "Firefox"].contains(&client.browser.as_str())
        || client.label.is_empty()
        || client.label.len() > 160
    {
        return Err("无效的浏览器配置文件信息".into());
    }
    let mut broker = BROKER.lock().map_err(|e| e.to_string())?;
    broker
        .clients
        .retain(|_, client| client.seen.elapsed() < Duration::from_secs(20));
    broker
        .pending
        .retain(|_, pending| pending.expires > Instant::now());
    let pending_ids: std::collections::HashSet<_> = broker.pending.keys().cloned().collect();
    for queue in broker.queues.values_mut() {
        queue.retain(|command| {
            command
                .get("request_id")
                .and_then(Value::as_str)
                .is_some_and(|id| pending_ids.contains(id))
        });
    }
    if broker.clients.len() >= 32 && !broker.clients.contains_key(&client.id) {
        return Err("浏览器连接数量超过限制".into());
    }
    if let Some(results) = message.get("results").and_then(Value::as_array) {
        for result in results.iter().take(64) {
            let Some(id) = result.get("request_id").and_then(Value::as_str) else {
                continue;
            };
            if broker
                .pending
                .get(id)
                .is_some_and(|pending| pending.client_id == client.id)
            {
                if let Some(pending) = broker.pending.remove(id) {
                    let outcome = if result.get("ok").and_then(Value::as_bool) == Some(true) {
                        Ok(())
                    } else {
                        Err(result
                            .get("error")
                            .and_then(Value::as_str)
                            .unwrap_or("浏览器未完成删除")
                            .chars()
                            .take(500)
                            .collect())
                    };
                    let _ = pending.reply.send(outcome);
                }
            }
        }
    }
    let commands: Vec<_> = broker
        .queues
        .entry(client.id.clone())
        .or_default()
        .drain(..)
        .collect();
    broker.clients.insert(
        client.id.clone(),
        Client {
            info: client,
            seen: Instant::now(),
        },
    );
    Ok(json!({"commands": commands}))
}

fn start_broker() -> Result<(), String> {
    let mut endpoint = ENDPOINT.lock().map_err(|e| e.to_string())?;
    if endpoint.is_some() {
        return Ok(());
    }
    let listener = TcpListener::bind((Ipv4Addr::LOCALHOST, 0)).map_err(|e| e.to_string())?;
    let value = Endpoint {
        port: listener.local_addr().map_err(|e| e.to_string())?.port(),
        token: format!("{}{}", Uuid::new_v4(), Uuid::new_v4()),
    };
    let dir = bridge_dir()?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    std::fs::write(
        dir.join("session.json"),
        serde_json::to_vec(&value).map_err(|e| e.to_string())?,
    )
    .map_err(|e| e.to_string())?;
    let token = value.token.clone();
    std::thread::Builder::new()
        .name("bookmark-bridge".into())
        .spawn(move || {
            for mut stream in listener.incoming().flatten() {
                let _ = stream.set_read_timeout(Some(Duration::from_secs(1)));
                let _ = stream.set_write_timeout(Some(Duration::from_secs(1)));
                let response = read_frame(&mut stream)
                    .and_then(|value| {
                        if value.get("token").and_then(Value::as_str) != Some(&token) {
                            return Err("连接身份验证失败".into());
                        }
                        poll(value.get("message").cloned().unwrap_or(Value::Null))
                    })
                    .unwrap_or_else(|error| json!({"error": error, "commands": []}));
                let _ = write_frame(&mut stream, &response);
            }
        })
        .map_err(|e| e.to_string())?;
    *endpoint = Some(value);
    Ok(())
}

#[derive(Serialize)]
pub struct BridgeStatus {
    pub clients: Vec<BridgeClient>,
    pub bindings: HashMap<String, String>,
}

pub fn status() -> Result<BridgeStatus, String> {
    start_broker()?;
    let broker = BROKER.lock().map_err(|e| e.to_string())?;
    let clients = broker
        .clients
        .values()
        .filter(|client| client.seen.elapsed() < Duration::from_secs(20))
        .map(|client| client.info.clone())
        .collect();
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare("SELECT profile_key, client_id FROM bookmark_bridge_bindings")
        .map_err(|e| e.to_string())?;
    let bindings = stmt
        .query_map([], |row| Ok((row.get(0)?, row.get(1)?)))
        .map_err(|e| e.to_string())?
        .collect::<Result<_, _>>()
        .map_err(|e| e.to_string())?;
    Ok(BridgeStatus { clients, bindings })
}

pub fn bind_profile(profile_key: &str, client_id: &str) -> Result<(), String> {
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;
    if client_id.is_empty() {
        conn.execute(
            "DELETE FROM bookmark_bridge_bindings WHERE profile_key = ?1",
            [profile_key],
        )
        .map_err(|e| e.to_string())?;
        return Ok(());
    }
    let source = crate::db::get_all_bookmarks()
        .map_err(|e| e.to_string())?
        .into_iter()
        .flat_map(|bookmark| bookmark.sources)
        .find(|source| source.profile_key == profile_key)
        .ok_or("配置文件已不存在")?;
    let broker = BROKER.lock().map_err(|e| e.to_string())?;
    let client = broker
        .clients
        .get(client_id)
        .filter(|client| client.seen.elapsed() < Duration::from_secs(20))
        .ok_or("浏览器扩展未连接")?;
    if client.info.browser != source.browser {
        return Err("浏览器类型不匹配".into());
    }
    let transaction = conn.unchecked_transaction().map_err(|e| e.to_string())?;
    // A client represents exactly one browser profile; prevent accidental cross-profile pairing.
    transaction
        .execute(
            "DELETE FROM bookmark_bridge_bindings WHERE client_id = ?1",
            [client_id],
        )
        .map_err(|e| e.to_string())?;
    transaction.execute("INSERT INTO bookmark_bridge_bindings(profile_key, client_id) VALUES (?1, ?2) ON CONFLICT(profile_key) DO UPDATE SET client_id = excluded.client_id", params![profile_key, client_id]).map_err(|e| e.to_string())?;
    transaction.commit().map_err(|e| e.to_string())?;
    Ok(())
}

pub fn delete_source(source: &BookmarkSource) -> Result<(), String> {
    if !CONNECTIONS_ALLOWED.load(Ordering::SeqCst) {
        return Err("浏览器连接已移除".into());
    }
    if source.node_id.is_empty() {
        return Err("旧书签缺少节点标识，请重新扫描".into());
    }
    let conn = DbConnectionManager::get_core().map_err(|e| e.to_string())?;
    let client_id: String = conn
        .query_row(
            "SELECT client_id FROM bookmark_bridge_bindings WHERE profile_key = ?1",
            [&source.profile_key],
            |row| row.get(0),
        )
        .optional()
        .map_err(|e| e.to_string())?
        .ok_or("请先在浏览器连接设置中绑定该配置文件")?;
    let (sender, receiver) = mpsc::channel();
    let id = Uuid::new_v4().to_string();
    {
        let mut broker = BROKER.lock().map_err(|e| e.to_string())?;
        let client = broker
            .clients
            .get(&client_id)
            .filter(|client| client.seen.elapsed() < Duration::from_secs(20))
            .ok_or("对应浏览器扩展未连接，请打开浏览器并点击扩展的连接按钮")?;
        if client.info.browser != source.browser {
            return Err("浏览器类型不匹配".into());
        }
        if broker.pending.len() >= 64 {
            return Err("待处理操作过多，请稍后重试".into());
        }
        broker.pending.insert(
            id.clone(),
            Pending {
                client_id: client_id.clone(),
                expires: Instant::now() + REQUEST_TIMEOUT,
                reply: sender,
            },
        );
        broker.queues.entry(client_id).or_default().push_back(json!({"request_id": id, "operation": "remove_bookmark", "node_id": source.node_id, "expected_url": source.url, "expected_title": source.title, "expires_at": unix_millis() + REQUEST_TIMEOUT.as_millis() as u64}));
    }
    let result = receiver
        .recv_timeout(REQUEST_TIMEOUT)
        .map_err(|_| {
            "浏览器操作超时，请确认连接后重试；未收到成功结果的来源会保留在列表中".to_string()
        })
        .and_then(|result| result);
    if let Ok(mut broker) = BROKER.lock() {
        broker.pending.remove(&id);
    }
    result
}

/// User-triggered only: export extension files and register this executable as
/// a native host in HKCU. No elevation, remote download or browser-data write.
pub fn register() -> Result<String, String> {
    start_broker()?;
    let dir = bridge_dir()?;
    let path = std::env::current_exe().map_err(|e| e.to_string())?;
    for (browser, manifest, background, policy, popup, popup_js) in [
        ("chromium", include_str!("../../plugin-registry/packages/local-launcher/browser-extension/chromium/manifest.json"), include_str!("../../plugin-registry/packages/local-launcher/browser-extension/background.js"), include_str!("../../plugin-registry/packages/local-launcher/browser-extension/policy.js"), include_str!("../../plugin-registry/packages/local-launcher/browser-extension/popup.html"), include_str!("../../plugin-registry/packages/local-launcher/browser-extension/popup.js")),
        ("firefox", include_str!("../../plugin-registry/packages/local-launcher/browser-extension/firefox/manifest.json"), include_str!("../../plugin-registry/packages/local-launcher/browser-extension/background.js"), include_str!("../../plugin-registry/packages/local-launcher/browser-extension/policy.js"), include_str!("../../plugin-registry/packages/local-launcher/browser-extension/popup.html"), include_str!("../../plugin-registry/packages/local-launcher/browser-extension/popup.js")),
    ] {
        let extension = dir.join(browser);
        std::fs::create_dir_all(&extension).map_err(|e| e.to_string())?;
        for (name, body) in [("manifest.json", manifest), ("background.js", background), ("policy.js", policy), ("popup.html", popup), ("popup.js", popup_js)] { std::fs::write(extension.join(name), body).map_err(|e| e.to_string())?; }
    }
    let mut manifest = json!({"name": HOST, "description": "Snippets Code confirmed bookmark operations", "path": path, "type": "stdio", "allowed_origins": [format!("chrome-extension://{CHROME_ID}/")]});
    std::fs::write(dir.join("chromium-host.json"), manifest.to_string())
        .map_err(|e| e.to_string())?;
    manifest.as_object_mut().unwrap().remove("allowed_origins");
    manifest["allowed_extensions"] = json!([FIREFOX_ID]);
    std::fs::write(dir.join("firefox-host.json"), manifest.to_string())
        .map_err(|e| e.to_string())?;
    let root = RegKey::predef(HKEY_CURRENT_USER);
    for registry_root in REGISTRY_ROOTS {
        let (key, _) = root
            .create_subkey(format!("{registry_root}\\NativeMessagingHosts\\{HOST}"))
            .map_err(|e| e.to_string())?;
        let manifest = if registry_root.contains("Mozilla") {
            "firefox-host.json"
        } else {
            "chromium-host.json"
        };
        key.set_value("", &dir.join(manifest).to_string_lossy().as_ref())
            .map_err(|e| e.to_string())?;
    }
    CONNECTIONS_ALLOWED.store(true, Ordering::SeqCst);
    Ok(dir.to_string_lossy().into())
}

pub fn disconnect() {
    if let Ok(mut broker) = BROKER.lock() {
        for (_, pending) in broker.pending.drain() {
            let _ = pending.reply.send(Err("浏览器连接已断开".into()));
        }
        broker.queues.clear();
        broker.clients.clear();
    }
}

pub fn unregister() -> Result<(), String> {
    CONNECTIONS_ALLOWED.store(false, Ordering::SeqCst);
    disconnect();
    let root = RegKey::predef(HKEY_CURRENT_USER);
    for registry_root in REGISTRY_ROOTS {
        match root.delete_subkey_all(format!("{registry_root}\\NativeMessagingHosts\\{HOST}")) {
            Ok(()) => {}
            Err(error) if error.kind() == std::io::ErrorKind::NotFound => {}
            Err(error) => return Err(error.to_string()),
        }
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn native_frames_round_trip_and_reject_oversized_input() {
        let message = json!({"title": "中文书签", "commands": []});
        let mut bytes = Vec::new();
        write_frame(&mut bytes, &message).unwrap();
        assert_eq!(read_frame(&mut bytes.as_slice()).unwrap(), message);
        assert!(read_frame(&mut ((MAX_MESSAGE + 1) as u32).to_le_bytes().as_slice()).is_err());
    }
}
