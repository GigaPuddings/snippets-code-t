use base64::{engine::general_purpose::STANDARD, Engine};
use log::info;
use lru::LruCache;
use once_cell::sync::Lazy;
use std::io::Cursor;
use std::num::NonZeroUsize;
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
    if !path.exists() {
        info!("图标提取失败 - 路径不存在: {}", app_path);
        return None;
    }
    
    if !path.is_file() {
        info!("图标提取失败 - 路径不是文件: {}", app_path);
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
        Err(e) => {
            info!("无法规范化路径 {}: {:?}", app_path, e);
            app_path.to_string()
        }
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
                Err(e) => {
                    info!("创建Shell项失败 ({}): {:?}", canonical_path, e);
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
    let mut cache = ICON_CACHE.lock().unwrap();

    // LRU get 需要可变引用，会更新访问顺序
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
    // LRU 使用 put 方法，会自动淘汰最少使用的项
    cache.put(key.to_string(), icon.clone());
    if let Err(e) = db::insert_icon_to_cache(key, &icon) {
        info!("Failed to cache icon in db: {}", e);
    }
}

// 从商店加载图标缓存
pub fn load_icon_cache(_app_handle: &AppHandle) {
    if let Ok(cache_data) = db::load_all_icon_cache() {
        let mut cache = ICON_CACHE.lock().unwrap();
        
        // 由于 LRU 缓存有大小限制，优先加载最新的图标
        let mut sorted_icons: Vec<_> = cache_data.into_iter().collect();
        sorted_icons.sort_by(|a, b| b.1.timestamp.cmp(&a.1.timestamp));
        
        let mut loaded_count = 0;
        for (key, icon) in sorted_icons.into_iter().take(MAX_CACHE_SIZE) {
            cache.put(key, icon);
            loaded_count += 1;
        }
        
        info!("加载 {} 个来自缓存的图标（最多 {} 个）", loaded_count, MAX_CACHE_SIZE);
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
        .timeout(Duration::from_secs(5)) // 进一步减少超时时间提高响应性
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
    // 并行尝试多个Favicon来源，谁先成功就用谁
    let icon_urls = vec![
        format!("https://t0.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://{}&size=64",domain),
        format!("https://api.vwood.xyz/v1/Favicon/public?domain={}", domain),
        format!("https://www.google.com/s2/favicons?domain={}&sz=64", url),
        format!("https://favicon.yandex.net/favicon/{}", domain),
        format!("https://{}/favicon.ico", domain),
        format!("https://{}/favicon.png", domain),
        format!("https://{}/apple-touch-icon.png", domain),
    ];

    // 创建所有请求的 Future
    let mut tasks = Vec::new();
    for icon_url in icon_urls {
        let client_clone = client.clone();
        let url_clone = url.to_string();
        tasks.push(async move {
            match client_clone.get(&icon_url).send().await {
                Ok(response) => {
                    if response.status().is_success() {
                        if let Ok(bytes) = response.bytes().await {
                            if !bytes.is_empty() && bytes.len() > 16 {
                                // 确保图标数据有效
                                let favicon = format!("data:image/png;base64,{}", STANDARD.encode(&bytes));
                                return Some((url_clone, favicon));
                            }
                        }
                    }
                }
                Err(_) => {}
            }
            None
        });
    }

    // 并行执行所有请求，只要有一个成功就立即返回
    let results = futures::future::join_all(tasks).await;
    for result in results {
        if let Some((original_url, favicon)) = result {
            // 缓存结果
            let cached_icon = CachedIcon {
                data: favicon.clone(),
                timestamp: SystemTime::now()
                    .duration_since(SystemTime::UNIX_EPOCH)
                    .unwrap_or_default()
                    .as_secs(),
            };
            cache_icon(&original_url, cached_icon);
            return Some(favicon);
        }
    }

    None
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

    // 如果数据库已有大量数据，则跳过扫描（优化启动速度）
    // 只有在数据为空时才进行扫描
    if apps_count > 0 && bookmarks_count > 0 {
        // info!("数据库已有数据，跳过应用和书签扫描，启动更快");
        return;
    }

    let mut apps_to_load = Vec::new();
    let mut bookmarks_to_load = Vec::new();

    if apps_count == 0 {
        info!("数据库中没有应用数据，开始扫描应用...");
        apps_to_load = get_installed_apps(); // 应用去重已在 apps.rs 中完成
        
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
        bookmarks_to_load = get_browser_bookmarks(); // 书签去重已在 bookmarks.rs 中完成（基于URL）
        
        // 存储书签到数据库
        if let Err(e) = db::insert_bookmarks(&bookmarks_to_load) {
            info!("插入书签到数据库失败: {}", e);
        } else {
            info!("成功插入 {} 个书签到数据库", bookmarks_to_load.len());
        }
    } else {
        info!("数据库中已存在 {} 个书签，跳过书签扫描", bookmarks_count);
    }

    // 发送数据加载完成通知
    let apps_loaded = apps_to_load.len();
    let bookmarks_loaded = bookmarks_to_load.len();
    let total_loaded = apps_loaded + bookmarks_loaded;
    
    if total_loaded > 0 {
        let _ = app_handle
            .notification()
            .builder()
            .title("snippets-code")
            .body(&format!(
                "数据加载完成：共 {} 个 (应用: {}, 书签: {})",
                total_loaded, apps_loaded, bookmarks_loaded
            ))
            .show();

        info!(
            "数据加载完成，共 {} 个项目已添加到数据库 (应用: {}, 书签: {})",
            total_loaded, apps_loaded, bookmarks_loaded
        );
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
    item_name: &str,
) -> usize 
where
    T: std::marker::Send,
{
    let mut count = 0;
    let total = items.len();

    info!("开始加载{}图标: {} 个{}", item_name, total, item_name);

    for item in items {
        // 只处理没有图标的项目
        if has_icon(&item) {
            continue;
        }

        // 获取图标数据
        if let Some(icon_data) = fetch_icon(&item) {
            // 更新到数据库
            if let Err(e) = update_db(&item, &icon_data) {
                info!("更新{}图标到数据库失败: {}", item_name, e);
            } else {
                count += 1;
            }
        }
    }

    info!("已完成加载{}图标: {} 个成功", item_name, count);
    count
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
            |app, icon| db::update_app_icon(&app.id, icon).map_err(|e| e.to_string()),
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

        let total = bookmarks.len();
        info!("开始加载书签图标: {} 个书签", total);

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
                        if db::update_bookmark_icon(&bookmark_clone.id, &icon_data).is_ok() {
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

        info!("已完成加载书签图标: {} 个成功", count);
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
        let total_loaded = apps_loaded + bookmarks_loaded;

        info!("图标加载完成: {} 个成功 (应用: {}, 书签: {})", total_loaded, apps_loaded, bookmarks_loaded);
        
        // 图标加载静默完成，不发送通知（通知已在数据加载到数据库时发送）
    });
}
