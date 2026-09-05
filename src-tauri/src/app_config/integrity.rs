use std::fs::File;
use std::io::Read;
use std::path::Path;

use sha2::{Digest, Sha256};

pub(crate) fn normalize_plugin_package_sha256(value: &str) -> Result<String, String> {
    let sha256 = value.trim().to_ascii_lowercase();
    if sha256.len() == 64 && sha256.chars().all(|ch| ch.is_ascii_hexdigit()) {
        Ok(sha256)
    } else {
        Err("插件包 SHA-256 必须是 64 位十六进制字符串".to_string())
    }
}

fn file_sha256(path: &Path) -> Result<String, String> {
    let mut file = File::open(path)
        .map_err(|error| format!("打开插件包失败: {} ({})", path.display(), error))?;
    let mut hasher = Sha256::new();
    let mut buffer = [0_u8; 64 * 1024];

    loop {
        let read = file
            .read(&mut buffer)
            .map_err(|error| format!("读取插件包失败: {} ({})", path.display(), error))?;
        if read == 0 {
            break;
        }
        hasher.update(&buffer[..read]);
    }

    Ok(hex::encode(hasher.finalize()))
}

pub(crate) fn verify_plugin_package_sha256(
    package_path: &Path,
    expected_sha256: Option<&str>,
) -> Result<(), String> {
    let Some(expected_sha256) = expected_sha256 else {
        return Ok(());
    };
    let expected_sha256 = normalize_plugin_package_sha256(expected_sha256)?;
    let actual_sha256 = file_sha256(package_path)?;
    if actual_sha256 != expected_sha256 {
        return Err(format!(
            "插件包 SHA-256 校验失败: expected {}, actual {}",
            expected_sha256, actual_sha256
        ));
    }

    Ok(())
}
