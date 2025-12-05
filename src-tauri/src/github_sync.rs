use aes_gcm::{
    aead::{Aead, KeyInit},
    Aes256Gcm, Nonce,
};
use base64::{engine::general_purpose, Engine as _};
use reqwest;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use tauri::Emitter;

// ============= 数据结构定义 =============

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct UserSettings {
    pub github_token: Option<String>,
    pub github_username: Option<String>,
    pub github_repo: Option<String>,
    pub last_sync_time: Option<String>,
    pub auto_sync_on_exit: bool,
    pub auto_restore_on_start: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct GitHubUser {
    pub login: String,
    pub avatar_url: String,
    pub name: Option<String>,
}

// ============= 数据库操作 =============

/// 获取用户设置
#[tauri::command]
pub async fn get_user_settings() -> Result<UserSettings, String> {
    use crate::db::DbConnectionManager;
    
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    let mut stmt = conn
        .prepare("SELECT github_token, github_username, github_repo, last_sync_time, auto_sync_on_exit, auto_restore_on_start FROM user_settings WHERE id = 1")
        .map_err(|e| e.to_string())?;
    
    let settings = stmt
        .query_row([], |row| {
            Ok(UserSettings {
                github_token: row.get(0).ok(),
                github_username: row.get(1).ok(),
                github_repo: row.get(2).ok(),
                last_sync_time: row.get(3).ok(),
                auto_sync_on_exit: row.get::<_, i32>(4).unwrap_or(0) == 1,
                auto_restore_on_start: row.get::<_, i32>(5).unwrap_or(0) == 1,
            })
        })
        .unwrap_or_else(|_| UserSettings {
            github_token: None,
            github_username: None,
            github_repo: None,
            last_sync_time: None,
            auto_sync_on_exit: false,
            auto_restore_on_start: false,
        });
    
    Ok(settings)
}

/// 保存用户设置
#[tauri::command]
pub async fn save_user_settings(settings: UserSettings) -> Result<(), String> {
    use crate::db::DbConnectionManager;
    
    let conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
    
    conn.execute(
        "INSERT OR REPLACE INTO user_settings (id, github_token, github_username, github_repo, last_sync_time, auto_sync_on_exit, auto_restore_on_start, updated_at)
         VALUES (1, ?1, ?2, ?3, ?4, ?5, ?6, datetime('now'))",
        rusqlite::params![
            settings.github_token,
            settings.github_username,
            settings.github_repo,
            settings.last_sync_time,
            if settings.auto_sync_on_exit { 1 } else { 0 },
            if settings.auto_restore_on_start { 1 } else { 0 },
        ],
    )
    .map_err(|e| e.to_string())?;
    
    Ok(())
}

// ============= GitHub API 操作 =============

/// 验证 GitHub Token 并获取用户信息
#[tauri::command]
pub async fn verify_github_token(token: String) -> Result<GitHubUser, String> {
    let client = reqwest::Client::new();
    
    let response = client
        .get("https://api.github.com/user")
        .header("Authorization", format!("Bearer {}", token))
        .header("User-Agent", "snippets-code")
        .send()
        .await
        .map_err(|e| format!("请求失败: {}", e))?;
    
    if !response.status().is_success() {
        return Err(format!("Token 验证失败: {}", response.status()));
    }
    
    let user: GitHubUser = response
        .json()
        .await
        .map_err(|e| format!("解析用户信息失败: {}", e))?;
    
    Ok(user)
}

/// 创建或获取 GitHub 仓库
async fn ensure_repo_exists(token: &str, username: &str, repo_name: &str) -> Result<(), String> {
    let client = reqwest::Client::new();
    
    // 检查仓库是否存在
    let check_url = format!("https://api.github.com/repos/{}/{}", username, repo_name);
    let response = client
        .get(&check_url)
        .header("Authorization", format!("Bearer {}", token))
        .header("User-Agent", "snippets-code")
        .send()
        .await
        .map_err(|e| format!("检查仓库失败: {}", e))?;
    
    if response.status().is_success() {
        return Ok(()); // 仓库已存在
    }
    
    // 创建私有仓库
    #[derive(Serialize)]
    struct CreateRepoPayload {
        name: String,
        private: bool,
        description: String,
    }
    
    let payload = CreateRepoPayload {
        name: repo_name.to_string(),
        private: true,
        description: "Snippets Code Data Backup".to_string(),
    };
    
    let response = client
        .post("https://api.github.com/user/repos")
        .header("Authorization", format!("Bearer {}", token))
        .header("User-Agent", "snippets-code")
        .json(&payload)
        .send()
        .await
        .map_err(|e| format!("创建仓库失败: {}", e))?;
    
    if !response.status().is_success() {
        return Err(format!("创建仓库失败: {}", response.status()));
    }
    
    Ok(())
}

// ============= 加密/解密 =============

/// 使用 AES-256-GCM 加密数据
fn encrypt_data(data: &[u8], token: &str) -> Result<Vec<u8>, String> {
    // 使用 Token 的 SHA256 作为密钥
    let mut hasher = Sha256::new();
    hasher.update(token.as_bytes());
    let key_bytes = hasher.finalize();
    
    let cipher = Aes256Gcm::new_from_slice(&key_bytes)
        .map_err(|e| format!("创建加密器失败: {}", e))?;
    
    // 使用固定的 12 字节 nonce
    let nonce_bytes: [u8; 12] = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B];
    let nonce = Nonce::from_slice(&nonce_bytes);
    
    let ciphertext = cipher
        .encrypt(nonce, data)
        .map_err(|e| format!("加密失败: {}", e))?;
    
    Ok(ciphertext)
}

/// 使用 AES-256-GCM 解密数据
fn decrypt_data(encrypted_data: &[u8], token: &str) -> Result<Vec<u8>, String> {
    let mut hasher = Sha256::new();
    hasher.update(token.as_bytes());
    let key_bytes = hasher.finalize();
    
    let cipher = Aes256Gcm::new_from_slice(&key_bytes)
        .map_err(|e| format!("创建解密器失败: {}", e))?;
    
    // 使用与加密时相同的 nonce
    let nonce_bytes: [u8; 12] = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B];
    let nonce = Nonce::from_slice(&nonce_bytes);
    
    let plaintext = cipher
        .decrypt(nonce, encrypted_data)
        .map_err(|e| format!("解密失败: {} (加密数据长度: {} 字节)", e, encrypted_data.len()))?;
    
    Ok(plaintext)
}

// ============= 数据同步 =============

/// 备份数据库到 GitHub
#[tauri::command]
pub async fn sync_to_github(app_handle: tauri::AppHandle) -> Result<String, String> {
    use crate::db::DbConnectionManager;
    
    // 发送进度事件的辅助函数
    let emit_progress = |progress: u8, message: &str| {
        let _ = app_handle.emit("sync-progress", serde_json::json!({
            "progress": progress,
            "message": message
        }));
    };
    
    emit_progress(0, "开始同步...");
    
    // 获取用户设置
    let settings = get_user_settings().await?;
    let token = settings.github_token.clone().ok_or("未配置 GitHub Token")?;
    let username = settings.github_username.clone().ok_or("未配置 GitHub 用户名")?;
    let repo = settings.github_repo.clone().unwrap_or_else(|| "snippets-code-backup".to_string());
    
    emit_progress(10, "检查仓库...");
    // 确保仓库存在
    ensure_repo_exists(&token, &username, &repo).await?;
    
    emit_progress(20, "备份数据库...");
    // 使用 rusqlite 的 backup API 备份数据库到临时文件
    let temp_dir = std::env::temp_dir();
    let backup_path = temp_dir.join("snippets_backup.db");
    
    // 备份数据库
    {
        let source_conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
        let mut backup_conn = rusqlite::Connection::open(&backup_path)
            .map_err(|e| format!("创建备份文件失败: {}", e))?;
        
        let backup = rusqlite::backup::Backup::new(&source_conn, &mut backup_conn)
            .map_err(|e| format!("创建备份失败: {}", e))?;
        
        backup.run_to_completion(100, std::time::Duration::from_millis(250), None)
            .map_err(|e| format!("备份失败: {}", e))?;
    }
    
    emit_progress(40, "读取备份文件...");
    // 读取备份文件
    let backup_data = std::fs::read(&backup_path)
        .map_err(|e| format!("读取备份文件失败: {}", e))?;
    
    emit_progress(50, "加密数据...");
    // 加密数据
    let encrypted_data = encrypt_data(&backup_data, &token)?;
    
    emit_progress(60, "编码数据...");
    // Base64 编码
    let encoded_data = general_purpose::STANDARD.encode(&encrypted_data);
    
    emit_progress(70, "上传到 GitHub...");
    // 上传到 GitHub
    let client = reqwest::Client::new();
    
    // 获取当前文件的 SHA（如果存在）
    let file_url = format!(
        "https://api.github.com/repos/{}/{}/contents/backup.db.enc",
        username, repo
    );
    
    #[derive(Deserialize)]
    struct FileInfo {
        sha: String,
    }
    
    // 获取文件的现有 SHA（如果存在）
    let existing_sha = match client
        .get(&file_url)
        .header("Authorization", format!("Bearer {}", token))
        .header("User-Agent", "snippets-code")
        .send()
        .await
    {
        Ok(response) => response.json::<FileInfo>().await.ok().map(|f| f.sha),
        Err(_) => None,
    };
    
    // 创建或更新文件
    #[derive(Serialize)]
    struct UpdateFilePayload {
        message: String,
        content: String,
        #[serde(skip_serializing_if = "Option::is_none")]
        sha: Option<String>,
    }
    
    let now = chrono::Local::now().format("%Y-%m-%d %H:%M:%S").to_string();
    
    // 验证编码数据不为空
    if encoded_data.is_empty() {
        return Err("Base64 编码后的数据为空".to_string());
    }
    
    let payload = UpdateFilePayload {
        message: format!("Backup at {}", now),
        content: encoded_data.clone(),
        sha: existing_sha,
    };
    
    let response = client
        .put(&file_url)
        .header("Authorization", format!("Bearer {}", token))
        .header("User-Agent", "snippets-code")
        .header("Accept", "application/vnd.github.v3+json")
        .json(&payload)
        .send()
        .await
        .map_err(|e| format!("上传失败: {}", e))?;
    
    if !response.status().is_success() {
        let status = response.status();
        let error_text = response.text().await.unwrap_or_else(|_| "未知错误".to_string());
        return Err(format!("上传失败 (状态码: {}): {}", status, error_text));
    }
    
    emit_progress(90, "更新同步时间...");
    // 更新同步时间
    let mut updated_settings = settings;
    updated_settings.last_sync_time = Some(now.clone());
    save_user_settings(updated_settings).await?;
    
    // 清理临时文件
    let _ = std::fs::remove_file(backup_path);
    
    emit_progress(100, "同步完成！");
    Ok(now)
}

/// 从 GitHub 恢复数据库
#[tauri::command]
pub async fn restore_from_github(app_handle: tauri::AppHandle) -> Result<String, String> {
    use crate::db::DbConnectionManager;
    
    // 发送进度事件的辅助函数
    let emit_progress = |progress: u8, message: &str| {
        let _ = app_handle.emit("restore-progress", serde_json::json!({
            "progress": progress,
            "message": message
        }));
    };
    
    emit_progress(0, "开始恢复...");
    
    // 获取用户设置
    let settings = get_user_settings().await?;
    let token = settings.github_token.clone().ok_or("未配置 GitHub Token")?;
    let username = settings.github_username.clone().ok_or("未配置 GitHub 用户名")?;
    let repo = settings.github_repo.clone().unwrap_or_else(|| "snippets-code-backup".to_string());
    
    emit_progress(10, "连接 GitHub...");
    // 从 GitHub 下载文件
    let client = reqwest::Client::new();
    let file_url = format!(
        "https://api.github.com/repos/{}/{}/contents/backup.db.enc",
        username, repo
    );
    
    #[derive(Deserialize)]
    struct FileInfo {
        #[serde(default)]
        content: String,
        download_url: Option<String>,
        size: u64,
    }
    
    // 获取文件元数据
    let response = client
        .get(&file_url)
        .header("Authorization", format!("Bearer {}", token))
        .header("User-Agent", "snippets-code")
        .header("Accept", "application/vnd.github.v3+json")
        .send()
        .await
        .map_err(|e| format!("下载失败: {}", e))?;
    
    if !response.status().is_success() {
        return Err(format!("文件不存在或下载失败: {}", response.status()));
    }
    
    let file_info: FileInfo = response
        .json()
        .await
        .map_err(|e| format!("解析文件信息失败: {}", e))?;
    
    emit_progress(30, "下载加密数据...");
    // 根据文件大小选择下载方式
    let encrypted_data = if file_info.size > 1_000_000 {
        // 大文件：使用 download_url（返回的是原始文件内容，即我们的 Base64 字符串）
        let download_url = file_info.download_url
            .ok_or("文件过大但没有 download_url")?;
        
        let download_response = client
            .get(&download_url)
            .header("Authorization", format!("Bearer {}", token))
            .header("User-Agent", "snippets-code")
            .send()
            .await
            .map_err(|e| format!("从 download_url 下载失败: {}", e))?;
        
        if !download_response.status().is_success() {
            return Err(format!("下载文件内容失败: {}", download_response.status()));
        }
        
        // download_url 返回的是原始二进制数据
        // GitHub Contents API 的行为：
        // 1. 上传时：我们发送 Base64 字符串，GitHub 自动解码并存储为二进制
        // 2. 下载时：download_url 直接返回存储的二进制数据（已解码）
        // 所以我们不需要再进行 Base64 解码，直接使用这些字节作为加密数据
        let encrypted_bytes = download_response.bytes().await
            .map_err(|e| format!("读取文件内容失败: {}", e))?;
        
        // 直接返回字节数据（这就是我们加密后的数据）
        encrypted_bytes.to_vec()
    } else {
        // 小文件：直接使用 content 字段（GitHub API 返回的是 Base64）
        if file_info.content.is_empty() {
            return Err("文件内容为空".to_string());
        }
        
        // 移除空白字符
        let content_cleaned = file_info.content.chars()
            .filter(|c| !c.is_whitespace())
            .collect::<String>();
        
        general_purpose::STANDARD
            .decode(&content_cleaned)
            .map_err(|e| format!("Base64 解码失败: {}", e))?
    };
    
    emit_progress(60, "解密数据...");
    // 解密数据
    let decrypted_data = decrypt_data(&encrypted_data, &token)?;
    
    emit_progress(70, "保存临时文件...");
    // 保存到临时文件
    let temp_dir = std::env::temp_dir();
    let restore_path = temp_dir.join("snippets_restore.db");
    std::fs::write(&restore_path, decrypted_data)
        .map_err(|e| format!("保存临时文件失败: {}", e))?;
    
    emit_progress(80, "恢复数据库...");
    // 使用 rusqlite 的 backup API 恢复数据库
    {
        let restore_conn = rusqlite::Connection::open(&restore_path)
            .map_err(|e| format!("打开恢复文件失败: {}", e))?;
        let mut target_conn = DbConnectionManager::get().map_err(|e| e.to_string())?;
        
        let backup = rusqlite::backup::Backup::new(&restore_conn, &mut target_conn)
            .map_err(|e| format!("创建恢复失败: {}", e))?;
        
        backup.run_to_completion(100, std::time::Duration::from_millis(250), None)
            .map_err(|e| format!("恢复失败: {}", e))?;
    }
    
    // 清理临时文件
    let _ = std::fs::remove_file(restore_path);
    
    emit_progress(100, "恢复完成！正在重启...");
    
    // 给前端一点时间显示完成状态
    tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
    
    // 重启应用以加载新数据
    app_handle.restart();
    
    // restart() 不会返回，所以这里不需要返回值
    #[allow(unreachable_code)]
    Ok("恢复成功".to_string())
}
