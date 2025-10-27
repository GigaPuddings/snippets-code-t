use base64::{engine::general_purpose::STANDARD, Engine};
use log::info;
use once_cell::sync::Lazy;
use std::collections::HashMap;
use std::io::Cursor;
use std::sync::{Arc, Mutex};
use std::time::{Duration, SystemTime};
use tokio::sync::Semaphore;
use tauri::AppHandle;
use tauri_plugin_http::reqwest;
use tauri_plugin_notification::NotificationExt;
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

use crate::apps::load_app_icons_async_silent;
use crate::apps::{get_installed_apps, AppInfo};
use crate::bookmarks::load_bookmark_icons_async_silent;
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

// 全局图标缓存
static ICON_CACHE: Lazy<Arc<Mutex<HashMap<String, CachedIcon>>>> =
    Lazy::new(|| Arc::new(Mutex::new(HashMap::new())));

// 并发管理 - 限制同时进行的图标加载任务数量以优化性能
static ICON_SEMAPHORE: Lazy<Arc<Semaphore>> = Lazy::new(|| Arc::new(Semaphore::new(4))); // 限制4个并发任务

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

    // info!("提取应用图标: {}", app_path);

    unsafe {
        // 初始化 COM
        let _ = CoInitialize(None);

        // 转换路径为宽字符串
        let path_hstring = HSTRING::from(app_path);

        // 创建 Shell 项并直接转换为IShellItemImageFactory
        let image_factory: IShellItemImageFactory =
            match SHCreateItemFromParsingName(&path_hstring, None) {
                Ok(item) => item,
                Err(e) => {
                    info!("创建Shell项失败: {:?}", e);
                    return None;
                }
            };

        // 定义图标大小 (48x48 - 更大以获得更好的图标)
        let size = SIZE { cx: 48, cy: 48 };

        // 获取图标的位图句柄
        let h_bitmap: HBITMAP =
            match image_factory.GetImage(size, SIIGBF_BIGGERSIZEOK | SIIGBF_ICONONLY) {
                Ok(bitmap) => bitmap,
                Err(e) => {
                    info!("获取图标位图失败: {:?}", e);
                    return None;
                }
            };

        // info!("成功获取位图句柄");

        // 创建设备上下文
        let hdc = CreateCompatibleDC(None);
        if hdc.is_invalid() {
            info!("创建兼容DC失败");
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
            info!("获取位图数据失败");
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
                let temp = buffer[i];
                buffer[i] = buffer[i + 2];
                buffer[i + 2] = temp;
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
                Err(e) => {
                    info!("PNG编码器创建失败: {:?}", e);
                    return None;
                }
            };

            if let Err(e) = writer.write_image_data(&buffer) {
                info!("PNG编码失败: {:?}", e);
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
    let cache = ICON_CACHE.lock().unwrap();

    if let Some(cached_icon) = cache.get(key) {
        let now = SystemTime::now()
            .duration_since(SystemTime::UNIX_EPOCH)
            .unwrap_or(Duration::from_secs(0))
            .as_secs();

        if now - cached_icon.timestamp < MAX_CACHE_AGE {
            return Some(cached_icon.data.clone());
        }
    }

    None
}

// 将图标存储在缓存中
fn cache_icon(key: &str, icon: CachedIcon) {
    let mut cache = ICON_CACHE.lock().unwrap();
    cache.insert(key.to_string(), icon.clone());
    if let Err(e) = db::insert_icon_to_cache(key, &icon) {
        info!("Failed to cache icon in db: {}", e);
    }
}

// 从商店加载图标缓存
pub fn load_icon_cache(_app_handle: &AppHandle) {
    if let Ok(cache_data) = db::load_all_icon_cache() {
        let mut cache = ICON_CACHE.lock().unwrap();
        *cache = cache_data;
        info!("加载 {} 个来自缓存的图标", cache.len());
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
pub async fn fetch_favicon_async(url: &str) -> Option<String> {
    // 首先检查缓存
    if let Some(cached_icon) = get_cached_icon(url) {
        info!("从缓存中获取图标: {}", url);
        return Some(cached_icon);
    }

    // 使用信号量控制并发，避免过多的图标请求同时进行
    let _permit = ICON_SEMAPHORE.acquire().await.ok()?;
    
    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(8)) // 减少超时时间提高响应性
        .build()
        .ok()?;

    // 提取域名（针对vwood接口获取图标特殊处理）
    let domain = match extract_domain(url) {
        Some(domain) => domain,
        None => {
            // 如果无法提取域名，尝试直接使用URL
            url.to_string()
        }
    };
    // 尝试不同的Favicon来源
    let icon_urls = vec![
        format!("https://t0.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://{}&size=64",domain),
        format!("https://api.vwood.xyz/v1/Favicon/public?domain={}", domain),
        format!("https://www.google.com/s2/favicons?domain={}&sz=64", url),
        format!("https://favicon.yandex.net/favicon/{}", domain),
        format!("https://{}/favicon.ico", domain),
        format!("https://{}/favicon.png", domain),
        format!("https://{}/apple-touch-icon.png", domain),
    ];

    for icon_url in icon_urls {
        match client.get(&icon_url).send().await {
            Ok(response) => {
                if response.status().is_success() {
                    if let Ok(bytes) = response.bytes().await {
                        if !bytes.is_empty() && bytes.len() > 16 {
                            // 确保图标数据有效
                            let favicon =
                                format!("data:image/png;base64,{}", STANDARD.encode(&bytes));
                            // 缓存结果
                            let cached_icon = CachedIcon {
                                data: favicon.clone(),
                                timestamp: SystemTime::now()
                                    .duration_since(SystemTime::UNIX_EPOCH)
                                    .unwrap_or_default()
                                    .as_secs(),
                            };
                            cache_icon(url, cached_icon);
                            return Some(favicon);
                        }
                    }
                }
            }
            Err(_) => continue, // 忽略错误，尝试下一个URL
        }
    }

    // 如果所有尝试失败
    None
}

// 获取应用和书签的图标
pub fn init_app_and_bookmark_icons(app_handle: &AppHandle) {
    info!("初始化应用和书签图标");
    //加载图标缓存
    load_icon_cache(app_handle);

    // 检查数据库中是否已有数据
    let apps_count = db::count_apps().unwrap_or(0);
    let bookmarks_count = db::count_bookmarks().unwrap_or(0);

    info!("应用数量: {}, 书签数量: {}", apps_count, bookmarks_count);

    let mut apps_to_load = Vec::new();
    let mut bookmarks_to_load = Vec::new();

    if apps_count == 0 {
        info!("数据库中没有应用数据，开始扫描应用...");
        apps_to_load = get_installed_apps();
        
        // 存储应用到数据库
        if let Err(e) = db::insert_apps(&apps_to_load) {
            info!("插入应用到数据库失败: {}", e);
        } else {
            info!("成功插入 {} 个应用到数据库", apps_to_load.len());
        }
    } else {
        info!("数据库中已存在 {} 个应用，跳过应用扫描", apps_count);
    }

    if bookmarks_count == 0 {
        info!("数据库中没有书签数据，开始扫描书签...");
        bookmarks_to_load = get_browser_bookmarks();
        
        // 存储书签到数据库
        if let Err(e) = db::insert_bookmarks(&bookmarks_to_load) {
            info!("插入书签到数据库失败: {}", e);
        } else {
            info!("成功插入 {} 个书签到数据库", bookmarks_to_load.len());
        }
    } else {
        info!("数据库中已存在 {} 个书签，跳过书签扫描", bookmarks_count);
    }

    // 只为需要加载的数据异步加载图标
    if !apps_to_load.is_empty() || !bookmarks_to_load.is_empty() {
        load_icons_with_combined_notification(app_handle.clone(), apps_to_load, bookmarks_to_load);
    }
}

// 合并加载应用和书签图标并发送单一通知
fn load_icons_with_combined_notification(
    app_handle: AppHandle,
    apps: Vec<AppInfo>,
    bookmarks: Vec<BookmarkInfo>,
) {
    use std::sync::{Arc, Mutex};

    let app_count = Arc::new(Mutex::new(0));
    let bookmark_count = Arc::new(Mutex::new(0));

    let app_count_clone = app_count.clone();
    let app_thread = std::thread::spawn(move || {
        if apps.is_empty() {
            return;
        }
        let dummy_completion_counter = Arc::new(Mutex::new(0));
        load_app_icons_async_silent(apps, app_count_clone, dummy_completion_counter);
    });

    let bookmark_count_clone = bookmark_count.clone();
    let bookmark_thread = std::thread::spawn(move || {
        if bookmarks.is_empty() {
            return;
        }
        let dummy_completion_counter = Arc::new(Mutex::new(0));
        load_bookmark_icons_async_silent(bookmarks, bookmark_count_clone, dummy_completion_counter);
    });

    // 在一个单独的线程中等待并发送通知，以避免阻塞UI
    std::thread::spawn(move || {
        // 等待两个加载过程完成
        app_thread.join().unwrap();
        bookmark_thread.join().unwrap();

        // 获取加载的图标数量
        let apps_loaded = *app_count.lock().unwrap();
        let bookmarks_loaded = *bookmark_count.lock().unwrap();
        let total_loaded = apps_loaded + bookmarks_loaded;

        info!("应用加载数量: {}, 书签加载数量: {}, 总共加载数量: {}", apps_loaded, bookmarks_loaded, total_loaded);
        // 只有当确实加载了图标时才发送通知
        if total_loaded > 0 {
            let _ = app_handle
                .notification()
                .builder()
                .title("图标加载完成")
                .body(&format!(
                    "共加载 {} 个图标 (应用: {}, 书签: {})",
                    total_loaded, apps_loaded, bookmarks_loaded
                ))
                .show();

            info!(
                "图标加载完成，共加载 {} 个图标 (应用: {}, 书签: {})",
                total_loaded, apps_loaded, bookmarks_loaded
            );
        }
    });
}
