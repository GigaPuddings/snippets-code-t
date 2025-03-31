use base64::{engine::general_purpose::STANDARD, Engine};
use log::info;
use once_cell::sync::Lazy;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::io::Cursor;
use std::sync::{Arc, Mutex};
use std::time::{Duration, SystemTime};
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

use crate::apps::load_app_icons_async_silent;
use crate::apps::{get_installed_apps, AppInfo};
use crate::bookmarks::load_bookmark_icons_async_silent;
use crate::bookmarks::{get_browser_bookmarks, BookmarkInfo};
use crate::config::{get_value, set_value, INSTALLED_APPS_KEY, BROWSER_BOOKMARKS_KEY};

// 图标缓存常数
const ICON_CACHE_KEY: &str = "icon_cache";
const MAX_CACHE_AGE: u64 = 604800; // 7 days in seconds

// 全局图标缓存
static ICON_CACHE: Lazy<Arc<Mutex<HashMap<String, CachedIcon>>>> =
    Lazy::new(|| Arc::new(Mutex::new(HashMap::new())));

// 代表一个缓存的图标
#[derive(Debug, Clone, Serialize, Deserialize)]
struct CachedIcon {
    data: String,
    timestamp: u64,
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

        info!("PNG编码成功，大小: {}", png_data.len());

        // 转换为base64
        let base64 = format!("data:image/png;base64,{}", STANDARD.encode(&png_data));

        // 缓存结果
        cache_icon(app_path, &base64);

        info!("图标提取成功，Base64长度: {}", base64.len());

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
fn cache_icon(key: &str, data: &str) {
    let mut cache = ICON_CACHE.lock().unwrap();

    let now = SystemTime::now()
        .duration_since(SystemTime::UNIX_EPOCH)
        .unwrap_or(Duration::from_secs(0))
        .as_secs();

    cache.insert(
        key.to_string(),
        CachedIcon {
            data: data.to_string(),
            timestamp: now,
        },
    );
}

// 从商店加载图标缓存
pub fn load_icon_cache(app_handle: &AppHandle) {
    if let Some(cache_value) = get_value(app_handle, ICON_CACHE_KEY) {
        if let Ok(cache_data) = serde_json::from_value::<HashMap<String, CachedIcon>>(cache_value) {
            let mut cache = ICON_CACHE.lock().unwrap();
            *cache = cache_data;
            info!("加载 {} 个来自缓存的图标", cache.len());
        }
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

    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(10))  // 增加超时时间
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
        format!("https://api.vwood.xyz/v1/Favicon/public?domain={}", domain),
        format!("https://www.google.com/s2/favicons?domain={}&sz=64", url),
        format!("https://favicon.yandex.net/favicon/{}", domain),
        format!("https://{}/favicon.ico", domain),
        format!("https://{}/favicon.png", domain),
        format!("https://{}/apple-touch-icon.png", domain)
    ];

    for icon_url in icon_urls {
        match client.get(&icon_url).send().await {
            Ok(response) => {
                if response.status().is_success() {
                    if let Ok(bytes) = response.bytes().await {
                        if !bytes.is_empty() && bytes.len() > 16 {  // 确保图标数据有效
                            let favicon = format!("data:image/png;base64,{}", STANDARD.encode(&bytes));
                            // 缓存结果
                            cache_icon(url, &favicon);
                            return Some(favicon);
                        }
                    }
                }
            }
            Err(_) => continue,  // 忽略错误，尝试下一个URL
        }
    }

    // 如果所有尝试失败
    None
}

// 获取应用和书签的图标，并保存在store中
pub fn init_app_and_bookmark_icons(app_handle: &AppHandle) {
    //加载图标缓存
    load_icon_cache(app_handle);

    // 先检查是否已有缓存的数据
    let has_cached_apps = get_value(app_handle, INSTALLED_APPS_KEY).is_some();
    let has_cached_bookmarks = get_value(app_handle, BROWSER_BOOKMARKS_KEY).is_some();

    // 只有在没有缓存时才重新加载应用和书签
    // 开发模式暂时关闭
    if !has_cached_apps || !has_cached_bookmarks {
        info!("没有缓存的应用程序或书签数据，加载新数据..");

        //获取应用程序和书签
        let apps = get_installed_apps();
        let bookmarks = get_browser_bookmarks();

        //首先存储无图标的应用程序和书签以快速访问
        set_value(app_handle, INSTALLED_APPS_KEY, apps.clone());
        set_value(app_handle, BROWSER_BOOKMARKS_KEY, bookmarks.clone());

        //异步加载图标并合并通知
        load_icons_with_combined_notification(app_handle.clone(), apps, bookmarks);
    } else {
        info!("使用缓存的应用程序和书签数据");
    }

    //安排定期图标缓存保存
    // let app_handle_clone = app_handle.clone();
    // tauri::async_runtime::spawn(async move {
    //     loop {
    //         //每30分钟保存每30分钟的图标缓存
    //         tokio::time::sleep(tokio::time::Duration::from_secs(1800)).await;
    //         save_icon_cache(&app_handle_clone);
    //     }
    // });
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
    let completion_counter = Arc::new(Mutex::new(0));

    // 使用克隆以便在两个线程中使用
    let app_handle_for_apps = app_handle.clone();
    let app_handle_for_bookmarks = app_handle.clone();
    let app_handle_for_notification = app_handle.clone();

    let app_count_for_apps = app_count.clone();
    let bookmark_count_for_bookmarks = bookmark_count.clone();
    let completion_counter_for_apps = completion_counter.clone();
    let completion_counter_for_bookmarks = completion_counter.clone();

    // 启动应用图标加载线程
    std::thread::spawn(move || {
        load_app_icons_async_silent(
            app_handle_for_apps,
            apps,
            app_count_for_apps,
            completion_counter_for_apps,
        );
    });

    // 启动书签图标加载线程
    std::thread::spawn(move || {
        load_bookmark_icons_async_silent(
            app_handle_for_bookmarks,
            bookmarks,
            bookmark_count_for_bookmarks,
            completion_counter_for_bookmarks,
        );
    });

    // 监控完成状态并发送统一通知
    std::thread::spawn(move || {
        // 等待两个加载过程完成
        while *completion_counter.lock().unwrap() < 2 {
            std::thread::sleep(std::time::Duration::from_millis(100));
        }

        // 获取加载的图标数量
        let apps_loaded = *app_count.lock().unwrap();
        let bookmarks_loaded = *bookmark_count.lock().unwrap();
        let total_loaded = apps_loaded + bookmarks_loaded;

        // 只有当确实加载了图标时才发送通知
        if total_loaded > 0 {
            let _ = app_handle_for_notification
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
