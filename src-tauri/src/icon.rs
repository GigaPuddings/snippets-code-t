use base64::{engine::general_purpose::STANDARD, Engine};
use lru::LruCache;
use once_cell::sync::Lazy;
use std::io::Cursor;
use std::num::NonZeroUsize;
use std::sync::{Arc, Mutex};
use std::time::{Duration, SystemTime};
use tokio::sync::Semaphore;
use tauri::AppHandle;
use tauri_plugin_http::reqwest;
use url::Url;
use windows::core::HSTRING;
use windows::Win32::Foundation::SIZE;
use windows::Win32::Graphics::Gdi::{
    CreateCompatibleDC, DeleteDC, DeleteObject, GetDIBits, SelectObject, BITMAPINFO,
    BITMAPINFOHEADER, DIB_RGB_COLORS, HBITMAP, HGDIOBJ,
};
use windows::Win32::System::Com::CoInitialize;
use windows::Win32::UI::Shell::{
    IShellItemImageFactory, SHCreateItemFromParsingName, SIIGBF_BIGGERSIZEOK, SIIGBF_ICONONLY,
};
use serde::{Deserialize, Serialize};

use crate::apps::{get_installed_apps, AppInfo};
use crate::bookmarks::{get_browser_bookmarks, BookmarkInfo};
use crate::db;

// 代表一个缓存的图标
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CachedIcon {
    pub data: String,
    pub timestamp: u64,
}

// 图标缓存常数
const MAX_CACHE_AGE: u64 = 604800; // 7 days in seconds
const MAX_CACHE_SIZE: usize = 500; // 最多缓存500个图标，防止内存溢出

// 全局图标缓存 - 使用 LRU 缓存自动淘汰最少使用的图标
static ICON_CACHE: Lazy<Arc<Mutex<LruCache<String, CachedIcon>>>> =
    Lazy::new(|| {
        Arc::new(Mutex::new(
            LruCache::new(NonZeroUsize::new(MAX_CACHE_SIZE).unwrap())
        ))
    });

// 并发管理 - 限制同时进行的图标加载任务数量以优化性能
static ICON_SEMAPHORE: Lazy<Arc<Semaphore>> = Lazy::new(|| Arc::new(Semaphore::new(10))); // 并发10个任务，平衡性能和资源占用

// Tauri command: 提取应用图标
#[tauri::command]
pub fn extract_icon_from_app(app_path: String) -> Result<Option<String>, String> {
    Ok(extract_app_icon(&app_path))
}

// 从可执行文件中提取图标的功能
pub fn extract_app_icon(app_path: &str) -> Option<String> {
    // 首先检查缓存
    if let Some(cached_icon) = get_cached_icon(app_path) {
        return Some(cached_icon);
    }

    // 验证路径是否存在且为有效文件
    let path = std::path::Path::new(app_path);
    if !path.exists() || !path.is_file() {
        return None;
    }

    // 规范化路径，去除可能的路径问题
    let canonical_path = match path.canonicalize() {
        Ok(p) => {
            let path_str = p.to_string_lossy().to_string();
            // 移除 Windows 扩展长度路径前缀 "\\?\"，因为 Shell API 不支持
            if path_str.starts_with(r"\\?\") {
                path_str.strip_prefix(r"\\?\").unwrap_or(&path_str).to_string()
            } else {
                path_str
            }
        },
        Err(_) => app_path.to_string()
    };

    // info!("提取应用图标: {}", canonical_path);

    unsafe {
        // 初始化 COM
        let _ = CoInitialize(None);

        // 转换路径为宽字符串
        let path_hstring = HSTRING::from(canonical_path.as_str());

        // 创建 Shell 项并直接转换为IShellItemImageFactory
        let image_factory: IShellItemImageFactory =
            match SHCreateItemFromParsingName(&path_hstring, None) {
                Ok(item) => item,
                Err(_) => return None,
            };

        // 定义图标大小 (48x48 - 更大以获得更好的图标)
        let size = SIZE { cx: 48, cy: 48 };

        // 获取图标的位图句柄
        let h_bitmap: HBITMAP =
            match image_factory.GetImage(size, SIIGBF_BIGGERSIZEOK | SIIGBF_ICONONLY) {
                Ok(bitmap) => bitmap,
                Err(_) => return None,
            };

        // 创建设备上下文
        let hdc = CreateCompatibleDC(None);
        if hdc.is_invalid() {
            let _ = DeleteObject(HGDIOBJ(h_bitmap.0));
            return None;
        }

        // 选择位图到DC
        let old_obj = SelectObject(hdc, HGDIOBJ(h_bitmap.0));

        // 准备位图信息
        let mut bitmap_info = BITMAPINFO {
            bmiHeader: BITMAPINFOHEADER {
                biSize: std::mem::size_of::<BITMAPINFOHEADER>() as u32,
                biWidth: 48,
                biHeight: -48, // 负值表示自上而下的DIB
                biPlanes: 1,
                biBitCount: 32,
                biCompression: 0, // BI_RGB is 0
                biSizeImage: 0,
                biXPelsPerMeter: 0,
                biYPelsPerMeter: 0,
                biClrUsed: 0,
                biClrImportant: 0,
            },
            bmiColors: [windows::Win32::Graphics::Gdi::RGBQUAD::default()],
        };

        // 分配内存存储像素数据 (BGRA 格式)
        let buffer_size = 48 * 48 * 4;
        let mut buffer = vec![0u8; buffer_size];

        // 获取位图数据
        let result = GetDIBits(
            hdc,
            h_bitmap,
            0,
            48,
            Some(buffer.as_mut_ptr() as *mut core::ffi::c_void),
            &mut bitmap_info,
            DIB_RGB_COLORS,
        );

        // 清理资源
        SelectObject(hdc, old_obj);
        DeleteDC(hdc).unwrap();
        DeleteObject(HGDIOBJ(h_bitmap.0)).unwrap();

        if result == 0 {
            return None;
        }

        // info!("成功获取位图数据，大小: {}", buffer.len());

        // 检查透明度和数据有效性
        // let mut has_transparency = false;
        let mut non_zero_pixels = 0;

        for i in (0..buffer.len()).step_by(4) {
            if i + 3 < buffer.len() {
                if buffer[i] != 0 || buffer[i + 1] != 0 || buffer[i + 2] != 0 {
                    non_zero_pixels += 1;
                }
                // if buffer[i+3] != 255 {
                //     has_transparency = true;
                // }

                // 确保Alpha通道正确
                if buffer[i + 3] == 0 {
                    // 完全透明像素的RGB应该为0
                    buffer[i] = 0;
                    buffer[i + 1] = 0;
                    buffer[i + 2] = 0;
                }

                // 交换B和R通道 (BGRA -> RGBA)
                buffer.swap(i, i + 2);
            }
        }

        // info!("图像分析 - 非零像素: {}, 有透明度: {}", non_zero_pixels, has_transparency);

        if non_zero_pixels == 0 {
            // info!("图标数据无效 - 全黑");
            return None;
        }

        // 使用PNG库编码图标
        let mut png_data = Vec::new();
        {
            let mut encoder = png::Encoder::new(Cursor::new(&mut png_data), 48, 48);
            encoder.set_color(png::ColorType::Rgba);
            encoder.set_depth(png::BitDepth::Eight);

            let mut writer = match encoder.write_header() {
                Ok(writer) => writer,
                Err(_) => return None,
            };

            if writer.write_image_data(&buffer).is_err() {
                return None;
            }
        }

        // info!("PNG编码成功，大小: {}", png_data.len());

        // 转换为base64
        let base64 = format!("data:image/png;base64,{}", STANDARD.encode(&png_data));

        // 缓存结果
        let cached_icon = CachedIcon {
            data: base64.clone(),
            timestamp: SystemTime::now()
                .duration_since(SystemTime::UNIX_EPOCH)
                .unwrap_or_default()
                .as_secs(),
        };
        cache_icon(app_path, cached_icon);

        // info!("图标提取成功，Base64长度: {}", base64.len());

        Some(base64)
    }
}

// 如果存在并且未过期，从缓存中获取图标
fn get_cached_icon(key: &str) -> Option<String> {
    let mut cache = ICON_CACHE.lock().unwrap();

    // LRU get 需要可变引用，会更新访问顺序
    if let Some(cached_icon) = cache.get(key) {
        let now = SystemTime::now()
            .duration_since(SystemTime::UNIX_EPOCH)
            .unwrap_or(Duration::from_secs(0))
            .as_secs();

        if now - cached_icon.timestamp < MAX_CACHE_AGE {
            // 验证缓存的图标数据是否有效
            if is_valid_cached_icon(&cached_icon.data) {
                return Some(cached_icon.data.clone());
            }
            // 如果缓存数据无效，移除它
            drop(cache);
            remove_cached_icon(key);
            return None;
        }
    }

    None
}

// 验证缓存的 base64 图标数据是否有效
fn is_valid_cached_icon(data: &str) -> bool {
    // 检查是否是有效的 data URL 格式
    if !data.starts_with("data:image/") {
        return false;
    }
    
    // 提取 base64 部分
    if let Some(base64_start) = data.find(";base64,") {
        let base64_data = &data[base64_start + 8..];
        // 尝试解码 base64
        if let Ok(decoded) = STANDARD.decode(base64_data) {
            // 验证解码后的数据是否是有效图片
            return is_valid_image_data(&decoded);
        }
    }
    
    false
}

// 从缓存中移除无效图标
fn remove_cached_icon(key: &str) {
    let mut cache = ICON_CACHE.lock().unwrap();
    cache.pop(key);
    // 同时从数据库中删除
    if let Ok(conn) = crate::db::DbConnectionManager::get() {
        let _ = conn.execute(
            "DELETE FROM icon_cache WHERE key = ?1",
            rusqlite::params![key],
        );
    }
}

// 将图标存储在缓存中
fn cache_icon(key: &str, icon: CachedIcon) {
    let mut cache = ICON_CACHE.lock().unwrap();
    cache.put(key.to_string(), icon.clone());
    let _ = db::insert_icon_to_cache(key, &icon);
}

// 从商店加载图标缓存
pub fn load_icon_cache(_app_handle: &AppHandle) {
    if let Ok(cache_data) = db::load_all_icon_cache() {
        let mut cache = ICON_CACHE.lock().unwrap();
        
        // 由于 LRU 缓存有大小限制，优先加载最新的图标
        let mut sorted_icons: Vec<_> = cache_data.into_iter().collect();
        sorted_icons.sort_by(|a, b| b.1.timestamp.cmp(&a.1.timestamp));
        
        let mut loaded_count = 0;
        let mut invalid_keys = Vec::new();
        
        for (key, icon) in sorted_icons.into_iter().take(MAX_CACHE_SIZE) {
            // 验证缓存数据是否有效
            if is_valid_cached_icon(&icon.data) {
                cache.put(key, icon);
                loaded_count += 1;
            } else {
                invalid_keys.push(key);
            }
        }
        
        // 删除无效的缓存
        drop(cache);
        for key in invalid_keys {
            if let Ok(conn) = crate::db::DbConnectionManager::get() {
                let _ = conn.execute(
                    "DELETE FROM icon_cache WHERE key = ?1",
                    rusqlite::params![key],
                );
            }
        }
        
        log::info!("加载了 {} 个有效图标缓存", loaded_count);
    }
}

// 将图标缓存保存到存储
// pub fn save_icon_cache(app_handle: &AppHandle) {
//     let cache = ICON_CACHE.lock().unwrap();

//     // 保存之前清洁过期的条目
//     let now = SystemTime::now()
//         .duration_since(SystemTime::UNIX_EPOCH)
//         .unwrap_or(Duration::from_secs(0))
//         .as_secs();

//     let cache_to_save: HashMap<String, CachedIcon> = cache
//         .iter()
//         .filter(|(_, icon)| now - icon.timestamp < MAX_CACHE_AGE)
//         .map(|(k, v)| (k.clone(), v.clone()))
//         .collect();

//     info!("保存 {} 个图标到缓存", cache_to_save.len());
//     set_value(app_handle, ICON_CACHE_KEY, cache_to_save);
// }

// 提取域名
pub fn extract_domain(url: &str) -> Option<String> {
    Url::parse(url)
        .ok()
        .and_then(|parsed_url| parsed_url.host_str().map(|s| s.to_string()))
}

// 获取网站的Fetch Favicon
/// 图标源类型
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum IconSource {
    Auto,           // 自动尝试所有源
    Google,         // Google Favicon API
    Yandex,         // Yandex Favicon
    Website,        // 直接从网站获取
}

impl IconSource {
    pub fn from_str(s: &str) -> Self {
        match s {
            "google" => IconSource::Google,
            "yandex" => IconSource::Yandex,
            "website" => IconSource::Website,
            _ => IconSource::Auto,
        }
    }
}

/// 根据指定源获取图标URL列表
fn get_icon_urls_for_source(source: IconSource, domain: &str) -> Vec<String> {
    match source {
        IconSource::Google => vec![
            format!("https://t0.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://{}&size=64", domain),
            format!("https://www.google.com/s2/favicons?domain={}&sz=64", domain),
        ],
        IconSource::Yandex => vec![
            format!("https://favicon.yandex.net/favicon/{}", domain),
        ],
        IconSource::Website => vec![
            format!("https://{}/favicon.ico", domain),
            format!("https://{}/favicon.png", domain),
            format!("https://{}/apple-touch-icon.png", domain),
        ],
        IconSource::Auto => vec![
            // 优先使用 Google Favicon 服务
            format!("https://t0.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://{}&size=64", domain),
            format!("https://www.google.com/s2/favicons?domain={}&sz=64", domain),
            // 如果 Google 获取不到，使用 Yandex
            format!("https://favicon.yandex.net/favicon/{}", domain),
            // 最后尝试直接从网站获取
            format!("https://{}/favicon.ico", domain),
            format!("https://{}/favicon.png", domain),
            format!("https://{}/apple-touch-icon.png", domain),
        ],
    }
}

/// 检查图标数据是否是有效的图片格式（不是占位图或错误页面）
fn is_valid_image_data(bytes: &[u8]) -> bool {
    if bytes.len() < 32 {
        return false;
    }
    
    // 检查常见图片格式的魔数（文件头）
    // PNG: 89 50 4E 47 0D 0A 1A 0A
    let is_png = bytes.len() >= 8 && 
        bytes[0] == 0x89 && bytes[1] == 0x50 && bytes[2] == 0x4E && bytes[3] == 0x47 &&
        bytes[4] == 0x0D && bytes[5] == 0x0A && bytes[6] == 0x1A && bytes[7] == 0x0A;
    
    // JPEG: FF D8 FF
    let is_jpeg = bytes.len() >= 3 && 
        bytes[0] == 0xFF && bytes[1] == 0xD8 && bytes[2] == 0xFF;
    
    // GIF: 47 49 46 38 (GIF8)
    let is_gif = bytes.len() >= 6 && 
        bytes[0] == 0x47 && bytes[1] == 0x49 && bytes[2] == 0x46 && bytes[3] == 0x38;
    
    // ICO: 00 00 01 00 或 00 00 02 00 (CUR)
    let is_ico = bytes.len() >= 4 && 
        bytes[0] == 0x00 && bytes[1] == 0x00 && (bytes[2] == 0x01 || bytes[2] == 0x02) && bytes[3] == 0x00;
    
    // BMP: 42 4D (BM)
    let is_bmp = bytes.len() >= 2 && 
        bytes[0] == 0x42 && bytes[1] == 0x4D;
    
    // WebP: 52 49 46 46 ... 57 45 42 50 (RIFF...WEBP)
    let is_webp = bytes.len() >= 12 && 
        bytes[0] == 0x52 && bytes[1] == 0x49 && bytes[2] == 0x46 && bytes[3] == 0x46 &&
        bytes[8] == 0x57 && bytes[9] == 0x45 && bytes[10] == 0x42 && bytes[11] == 0x50;
    
    // SVG: 检查是否以 <?xml 或 <svg 开头（文本格式），也检查带 BOM 的情况
    let is_svg = if bytes.len() >= 5 {
        // 跳过可能的 BOM
        let start = if bytes.len() >= 3 && bytes[0] == 0xEF && bytes[1] == 0xBB && bytes[2] == 0xBF {
            3
        } else {
            0
        };
        let check_bytes = &bytes[start..];
        check_bytes.len() >= 4 && (
            // <?xml
            (check_bytes[0] == 0x3C && check_bytes[1] == 0x3F) ||
            // <svg
            (check_bytes[0] == 0x3C && check_bytes[1] == 0x73 && check_bytes[2] == 0x76 && check_bytes[3] == 0x67) ||
            // < svg (with space)
            (check_bytes[0] == 0x3C && check_bytes.len() > 4 && 
             String::from_utf8_lossy(&check_bytes[..std::cmp::min(100, check_bytes.len())]).contains("<svg"))
        )
    } else {
        false
    };
    
    // 检查是否是 HTML 错误页面（以 <!DOCTYPE 或 <html 开头）
    let is_html = bytes.len() >= 15 && {
        let text = String::from_utf8_lossy(&bytes[..std::cmp::min(100, bytes.len())]).to_lowercase();
        text.contains("<!doctype") || text.contains("<html") || text.contains("<head")
    };
    
    if is_html {
        return false;
    }
    
    // 检查是否是已知的占位图（1x1 透明 GIF 等）
    // 1x1 透明 GIF 的标准大小是 43 字节
    if is_gif && bytes.len() < 100 {
        return false;
    }
    
    // PNG 图片太小可能是占位图
    if is_png && bytes.len() < 200 {
        return false;
    }
    
    is_png || is_jpeg || is_gif || is_ico || is_bmp || is_webp || is_svg
}

/// 根据图片数据返回正确的 MIME 类型
fn get_image_mime_type(bytes: &[u8]) -> &'static str {
    if bytes.len() < 4 {
        return "image/png";
    }
    
    // PNG
    if bytes.len() >= 8 && bytes[0] == 0x89 && bytes[1] == 0x50 && bytes[2] == 0x4E && bytes[3] == 0x47 {
        return "image/png";
    }
    
    // JPEG
    if bytes[0] == 0xFF && bytes[1] == 0xD8 && bytes[2] == 0xFF {
        return "image/jpeg";
    }
    
    // GIF
    if bytes[0] == 0x47 && bytes[1] == 0x49 && bytes[2] == 0x46 && bytes[3] == 0x38 {
        return "image/gif";
    }
    
    // ICO
    if bytes[0] == 0x00 && bytes[1] == 0x00 && bytes[2] == 0x01 && bytes[3] == 0x00 {
        return "image/x-icon";
    }
    
    // BMP
    if bytes[0] == 0x42 && bytes[1] == 0x4D {
        return "image/bmp";
    }
    
    // WebP
    if bytes.len() >= 12 && bytes[0] == 0x52 && bytes[1] == 0x49 && bytes[2] == 0x46 && bytes[3] == 0x46 &&
       bytes[8] == 0x57 && bytes[9] == 0x45 && bytes[10] == 0x42 && bytes[11] == 0x50 {
        return "image/webp";
    }
    
    // SVG
    if bytes.len() >= 5 && bytes[0] == 0x3C && (bytes[1] == 0x3F || bytes[1] == 0x73) {
        return "image/svg+xml";
    }
    
    "image/png"
}

/// 使用指定源获取 favicon
pub async fn fetch_favicon_with_source(url: &str, source: IconSource) -> Option<String> {
    if source == IconSource::Auto {
        if let Some(cached_icon) = get_cached_icon(url) {
            return Some(cached_icon);
        }
    }

    // 使用信号量控制并发
    let _permit = ICON_SEMAPHORE.acquire().await.ok()?;
    
    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(8))
        .build()
        .ok()?;

    let domain = match extract_domain(url) {
        Some(domain) => domain,
        None => url.to_string(),
    };

    let icon_urls = get_icon_urls_for_source(source, &domain);

    for icon_url in &icon_urls {
        log::debug!("尝试获取图标: {}", icon_url);
        match client.get(icon_url).send().await {
            Ok(response) => {
                let status = response.status();
                log::debug!("响应状态: {}", status);
                if status.is_success() {
                    if let Ok(bytes) = response.bytes().await {
                        log::debug!("获取到数据大小: {} 字节, 前8字节: {:02X?}", 
                            bytes.len(), 
                            &bytes[..std::cmp::min(8, bytes.len())]);
                        
                        // 验证返回的数据是否是有效的图片格式
                        if !bytes.is_empty() && bytes.len() > 16 && is_valid_image_data(&bytes) {
                            // 根据实际图片格式设置正确的 MIME 类型
                            let mime_type = get_image_mime_type(&bytes);
                            log::debug!("图片格式有效, MIME类型: {}", mime_type);
                            let favicon = format!("data:{};base64,{}", mime_type, STANDARD.encode(&bytes));
                            
                            // 只有自动模式才缓存结果
                            if source == IconSource::Auto {
                                let cached_icon = CachedIcon {
                                    data: favicon.clone(),
                                    timestamp: SystemTime::now()
                                        .duration_since(SystemTime::UNIX_EPOCH)
                                        .unwrap_or_default()
                                        .as_secs(),
                                };
                                cache_icon(url, cached_icon);
                            }
                            return Some(favicon);
                        } else {
                            log::debug!("数据验证失败，尝试下一个源");
                        }
                    }
                }
            }
            Err(e) => {
                log::debug!("请求失败: {}", e);
                continue;
            }
        }
    }

    log::debug!("所有源都未能获取到有效图标");
    None
}

pub async fn fetch_favicon_async(url: &str) -> Option<String> {
    fetch_favicon_with_source(url, IconSource::Auto).await
}

// 获取应用和书签的图标
pub fn init_app_and_bookmark_icons(app_handle: &AppHandle) {
    // info!("初始化应用和书签图标");
    
    // 先加载图标缓存到内存，提升后续查询速度
    load_icon_cache(app_handle);

    // 检查数据库中是否已有数据
    let apps_count = db::count_apps().unwrap_or(0);
    let bookmarks_count = db::count_bookmarks().unwrap_or(0);

    // info!("应用数量: {}, 书签数量: {}", apps_count, bookmarks_count);

    // 如果数据库已有数据，检查是否有缺失图标的记录
    if apps_count > 0 && bookmarks_count > 0 {
        // info!("数据库已有数据，检查缺失图标的记录");
        load_missing_icons(app_handle.clone());
        return;
    }

    let is_first_run = !db::is_setup_completed_internal(app_handle);
    if is_first_run {
        return;
    }

    // 需要扫描，检查是否显示进度窗口
    let need_scan = apps_count == 0 || bookmarks_count == 0;
    
    // 手动重置后显示进度窗口，正常启动时静默
    let show_progress = need_scan && db::consume_show_progress_flag(app_handle);
    
    if show_progress {
        crate::window::create_progress_notification_window();
        // 短暂等待窗口创建完成
        std::thread::sleep(std::time::Duration::from_millis(100));
    }

    let mut apps_to_load = Vec::new();
    let mut bookmarks_to_load = Vec::new();

    if apps_count == 0 {
        crate::window::emit_scan_progress("正在扫描本地应用...", 0, 100, "");
        apps_to_load = get_installed_apps();
        crate::window::emit_scan_progress("正在保存应用数据...", 50, 100, &format!("共 {} 个应用", apps_to_load.len()));
        if let Err(e) = db::insert_apps(&apps_to_load) {
            log::error!("插入应用到数据库失败: {}", e);
        }
    }

    if bookmarks_count == 0 {
        crate::window::emit_scan_progress("正在扫描浏览器书签...", 60, 100, "");
        bookmarks_to_load = get_browser_bookmarks();
        crate::window::emit_scan_progress("正在保存书签数据...", 90, 100, &format!("共 {} 个书签", bookmarks_to_load.len()));
        if let Err(e) = db::insert_bookmarks(&bookmarks_to_load) {
            log::error!("插入书签到数据库失败: {}", e);
        }
    }

    // 发送扫描完成事件
    let apps_loaded = apps_to_load.len();
    let bookmarks_loaded = bookmarks_to_load.len();
    let total_loaded = apps_loaded + bookmarks_loaded;
    
    if total_loaded > 0 {
        if show_progress {
            // 手动重置后：发送完成事件到进度窗口
            crate::window::emit_scan_complete(apps_loaded, bookmarks_loaded);
        } else {
            // setup完成后的正常启动：使用系统通知
            use tauri_plugin_notification::NotificationExt;
            let _ = app_handle
                .notification()
                .builder()
                .title("数据索引完成")
                .body(format!("已索引 {} 个应用，{} 个书签", apps_loaded, bookmarks_loaded))
                .show();
        }

    } else if show_progress {
        // 如果没有找到数据但创建了进度窗口，也发送完成事件
        crate::window::emit_scan_complete(0, 0);
    }

    // 只为需要加载的数据异步加载图标（静默加载，不发送通知）
    if !apps_to_load.is_empty() || !bookmarks_to_load.is_empty() {
        load_icons_with_combined_notification(app_handle.clone(), apps_to_load, bookmarks_to_load);
    }
}

// ============= 通用图标加载框架 =============

/// 通用图标加载器 - 统一处理应用和书签的图标加载逻辑
/// 
/// 参数说明：
/// - items: 需要加载图标的项目列表
/// - has_icon: 检查项目是否已有图标的函数
/// - fetch_icon: 获取图标数据的函数
/// - update_db: 更新数据库的函数
/// - item_name: 日志中使用的项目名称（"应用" 或 "书签"）
pub fn load_icons_generic<T>(
    items: Vec<T>,
    has_icon: impl Fn(&T) -> bool,
    fetch_icon: impl Fn(&T) -> Option<String>,
    update_db: impl Fn(&T, &str) -> Result<(), String>,
    _item_name: &str,
) -> usize 
where
    T: std::marker::Send,
{
    let mut count = 0;

    for item in items {
        if has_icon(&item) {
            continue;
        }
        if let Some(icon_data) = fetch_icon(&item) {
            if update_db(&item, &icon_data).is_ok() {
                count += 1;
            }
        }
    }
    count
}

// 检查并加载缺失图标的应用和书签
fn load_missing_icons(app_handle: AppHandle) {
    // 在后台线程中异步加载缺失的图标
    std::thread::spawn(move || {
        // 获取所有应用，过滤出缺失图标的
        let apps_without_icon: Vec<AppInfo> = match db::get_all_apps() {
            Ok(apps) => apps.into_iter().filter(|app| app.icon.is_none()).collect(),
            Err(_) => Vec::new(),
        };

        // 获取所有书签，过滤出缺失图标的
        let bookmarks_without_icon: Vec<BookmarkInfo> = match db::get_all_bookmarks() {
            Ok(bookmarks) => bookmarks.into_iter().filter(|b| b.icon.is_none()).collect(),
            Err(_) => Vec::new(),
        };

        let apps_count = apps_without_icon.len();
        let bookmarks_count = bookmarks_without_icon.len();

        if apps_count == 0 && bookmarks_count == 0 {
            // info!("所有应用和书签都已有图标，无需加载");
            return;
        }


        // 使用现有的图标加载逻辑
        load_icons_with_combined_notification(app_handle, apps_without_icon, bookmarks_without_icon);
    });
}

// 合并加载应用和书签图标并发送单一通知
fn load_icons_with_combined_notification(
    _app_handle: AppHandle,
    apps: Vec<AppInfo>,
    bookmarks: Vec<BookmarkInfo>,
) {
    use std::sync::{Arc, Mutex};

    let app_count = Arc::new(Mutex::new(0));
    let bookmark_count = Arc::new(Mutex::new(0));

    // 加载应用图标
    let app_count_clone = app_count.clone();
    let app_thread = std::thread::spawn(move || {
        if apps.is_empty() {
            return;
        }
        
        let count = load_icons_generic(
            apps,
            |app| app.icon.is_some(),
            |app| extract_app_icon(&app.content),
            |app, icon| db::update_app_icon_silent(&app.id, icon).map_err(|e| e.to_string()),
            "应用",
        );
        
        *app_count_clone.lock().unwrap() = count;
    });

    // 加载书签图标（需要异步运行时）- 使用并行处理提升性能
    let bookmark_count_clone = bookmark_count.clone();
    let bookmark_thread = std::thread::spawn(move || {
        if bookmarks.is_empty() {
            return;
        }

        // 创建 Tokio 运行时用于异步操作
        let runtime = match tokio::runtime::Runtime::new() {
            Ok(rt) => rt,
            Err(e) => {
                log::error!("创建Tokio运行时失败: {}", e);
                return;
            }
        };


        // 并行处理所有书签图标加载
        let count = runtime.block_on(async {
            let mut tasks = Vec::new();
            
            for bookmark in bookmarks {
                // 跳过已有图标的书签
                if bookmark.icon.is_some() {
                    continue;
                }
                
                let bookmark_clone = bookmark.clone();
                tasks.push(async move {
                    if let Some(icon_data) = fetch_favicon_async(&bookmark_clone.content).await {
                        if db::update_bookmark_icon_silent(&bookmark_clone.id, &icon_data).is_ok() {
                            return 1;
                        }
                    }
                    0
                });
            }
            
            // 并行执行所有任务并统计成功数量
            let results = futures::future::join_all(tasks).await;
            results.into_iter().sum::<usize>()
        });

        *bookmark_count_clone.lock().unwrap() = count;
    });

    // 在一个单独的线程中等待并发送通知，以避免阻塞UI
    std::thread::spawn(move || {
        // 等待两个加载过程完成
        app_thread.join().unwrap();
        bookmark_thread.join().unwrap();

        // 获取加载的图标数量
        let apps_loaded = *app_count.lock().unwrap();
        let bookmarks_loaded = *bookmark_count.lock().unwrap();
        if apps_loaded > 0 {
            crate::search::invalidate_apps_cache();
        }
        if bookmarks_loaded > 0 {
            crate::search::invalidate_bookmarks_cache();
        }
    });
}
