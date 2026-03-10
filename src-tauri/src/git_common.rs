// Git 同步通用工具模块
// 提供加密、进度事件等通用功能

use aes_gcm::{
    aead::{Aead, KeyInit},
    Aes256Gcm, Nonce,
};
use base64::{engine::general_purpose, Engine as _};
use sha2::{Digest, Sha256};

/// 使用 AES-256-GCM 加密数据
pub fn encrypt_data(data: &[u8], token: &str) -> Result<Vec<u8>, String> {
    let key_bytes = derive_key(token);
    let cipher = Aes256Gcm::new_from_slice(&key_bytes)
        .map_err(|e| format!("创建加密器失败: {}", e))?;

    let nonce = Nonce::from_slice(&FIXED_NONCE);
    let ciphertext = cipher
        .encrypt(nonce, data)
        .map_err(|e| format!("加密失败: {}", e))?;

    Ok(ciphertext)
}

/// 使用 AES-256-GCM 解密数据
pub fn decrypt_data(encrypted_data: &[u8], token: &str) -> Result<Vec<u8>, String> {
    let key_bytes = derive_key(token);
    let cipher = Aes256Gcm::new_from_slice(&key_bytes)
        .map_err(|e| format!("创建解密器失败: {}", e))?;

    let nonce = Nonce::from_slice(&FIXED_NONCE);
    let plaintext = cipher
        .decrypt(nonce, encrypted_data)
        .map_err(|e| format!("解密失败: {}", e))?;

    Ok(plaintext)
}

/// 从 Token 派生加密密钥
fn derive_key(token: &str) -> [u8; 32] {
    let mut hasher = Sha256::new();
    hasher.update(token.as_bytes());
    let result = hasher.finalize();
    let mut key = [0u8; 32];
    key.copy_from_slice(&result);
    key
}

/// Base64 编码
pub fn encode_base64(data: &[u8]) -> String {
    general_purpose::STANDARD.encode(data)
}

/// Base64 解码
pub fn decode_base64(encoded: &str) -> Result<Vec<u8>, String> {
    general_purpose::STANDARD
        .decode(encoded)
        .map_err(|e| format!("Base64 解码失败: {}", e))
}

/// 固定的 12 字节 nonce
const FIXED_NONCE: [u8; 12] = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B];

use std::process::Command;
use std::path::Path;

/// 从 Git remote URL 中移除 token（安全展示用）
///
/// 支持格式：
/// - HTTPS: https://token@github.com/user/repo -> https://github.com/user/repo
/// - SSH: git@github.com:user/repo (不处理)
pub fn remove_token_from_url(url: &str) -> String {
    if url.starts_with("git@") {
        // SSH 格式，不含 token
        return url.to_string();
    }

    if let Some(protocol_idx) = url.find("://") {
        if let Some(at_idx) = url[protocol_idx..].find('@') {
            // 找到 @ 符号（在协议后面）
            let absolute_at_idx = protocol_idx + at_idx;
            if absolute_at_idx > protocol_idx {
                // 有 token，移除它
                let protocol = &url[..protocol_idx + 3]; // 包含 "://"
                let rest = &url[absolute_at_idx + 1..];
                return format!("{}{}", protocol, rest);
            }
        }
    }

    url.to_string()
}

/// 解码 Git 输出中的 C 风格转义路径
///
/// 在 `core.quotepath=true`（默认）时，Git 会将非 ASCII 字符
/// 以 `\"Vue\\345\\247...\"` 这种形式输出。该函数负责：
/// - 去掉首尾引号
/// - 解析 `\\ooo` 八进制转义为字节并按 UTF-8 解码
/// - 处理常见的转义字符（`\\n`、`\\t`、`\\\\`、`\\\"`）
/// 解码失败时会安全地回退为原始输入。
pub fn decode_git_quoted_path(input: &str) -> String {
    // 去掉首尾引号（如果存在）
    let inner = input
        .strip_prefix('"')
        .and_then(|s| s.strip_suffix('"'))
        .unwrap_or(input);

    // 没有反斜杠说明不包含转义，直接返回
    if !inner.contains('\\') {
        return inner.to_string();
    }

    let mut bytes = Vec::with_capacity(inner.len());
    let mut chars = inner.chars().peekable();

    while let Some(ch) = chars.next() {
        if ch == '\\' {
            match chars.peek().copied() {
                Some('n') => {
                    chars.next();
                    bytes.push(b'\n');
                }
                Some('t') => {
                    chars.next();
                    bytes.push(b'\t');
                }
                Some('\\') => {
                    chars.next();
                    bytes.push(b'\\');
                }
                Some('"') => {
                    chars.next();
                    bytes.push(b'"');
                }
                // 八进制转义：\345 以 1-3 位 0-7 开头
                Some(c @ '0'..='7') => {
                    let mut oct = String::new();
                    oct.push(c);
                    chars.next();

                    for _ in 0..2 {
                        if let Some(d @ '0'..='7') = chars.peek().copied() {
                            oct.push(d);
                            chars.next();
                        } else {
                            break;
                        }
                    }

                    if let Ok(v) = u8::from_str_radix(&oct, 8) {
                        bytes.push(v);
                    } else {
                        // 解析失败，按原样保留
                        bytes.push(b'\\');
                        bytes.extend_from_slice(oct.as_bytes());
                    }
                }
                // 未知转义，保留反斜杠本身
                _ => {
                    bytes.push(b'\\');
                }
            }
        } else {
            let mut buf = [0u8; 4];
            let encoded = ch.encode_utf8(&mut buf);
            bytes.extend_from_slice(encoded.as_bytes());
        }
    }

    String::from_utf8(bytes).unwrap_or_else(|_| inner.to_string())
}

// ============= Git 辅助函数 =============

/// 执行 Git 命令并返回输出
pub fn run_git_command(workspace_root: &Path, args: &[&str]) -> Result<std::process::Output, String> {
    Command::new("git")
        .args(args)
        .current_dir(workspace_root)
        .output()
        .map_err(|e| format!("执行 git 命令失败: {}", e))
}

/// 检查 Git 命令输出是否成功
pub fn is_git_success(output: &std::process::Output) -> bool {
    output.status.success()
}

/// 获取 Git 命令的标准输出
pub fn get_git_stdout(output: &std::process::Output) -> String {
    String::from_utf8_lossy(&output.stdout).trim().to_string()
}

/// 获取 Git 命令的标准错误
pub fn get_git_stderr(output: &std::process::Output) -> String {
    String::from_utf8_lossy(&output.stderr).trim().to_string()
}

/// 解析 Git diff 输出，统计变更的文件数量
///
/// 查找类似 "3 files changed" 或 "1 file changed" 的行
pub fn parse_git_file_count_output(output: &str) -> usize {
    for line in output.lines() {
        if line.contains("file") && (line.contains("changed") || line.contains("updated")) {
            if let Some(num_str) = line.split_whitespace().next() {
                if let Ok(num) = num_str.parse::<usize>() {
                    return num;
                }
            }
        }
    }

    // 检查是否有 "Already up to date"
    if output.contains("Already up to date") || output.contains("Already up-to-date") {
        return 0;
    }

    // 有输出但无法解析，默认返回 1
    if !output.trim().is_empty() && !output.contains("Already") {
        return 1;
    }

    0
}
