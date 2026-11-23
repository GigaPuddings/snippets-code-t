use super::*;
use lru::LruCache;
use scraper::{Html, Selector};
use std::num::NonZeroUsize;
use std::sync::LazyLock;

static DETAILS: LazyLock<Mutex<LruCache<String, WallhavenWallpaper>>> =
    LazyLock::new(|| Mutex::new(LruCache::new(NonZeroUsize::new(256).unwrap())));

fn script_value(body: &str, name: &str) -> Result<serde_json::Value, String> {
    let marker = format!("window.{}", name);
    let start = body.find(&marker).ok_or("Wallspic 页面缺少图库数据")?;
    let tail = &body[start + marker.len()..];
    let (_, json) = tail.split_once('=').ok_or("Wallspic 图库数据格式已变更")?;
    serde_json::Deserializer::from_str(json.trim_start())
        .into_iter::<serde_json::Value>()
        .next()
        .ok_or("Wallspic 图库数据为空")?
        .map_err(|error| format!("解析 Wallspic 图库失败: {}", error))
}

pub(super) fn image_url(value: &str) -> bool {
    url::Url::parse(value).ok().is_some_and(|url| {
        url.scheme() == "https"
            && url
                .host_str()
                .is_some_and(|host| host.starts_with("img") && host.ends_with(".wallspic.com"))
    })
}

const CATEGORIES: &[&str] = &[
    "general",
    "brands",
    "technology",
    "city",
    "sport",
    "textures",
    "abstract",
    "other",
    "animals",
    "anime",
    "food_and_drink",
    "games",
    "space",
    "cars",
    "music",
    "movies",
    "flowers",
    "fantasy",
    "aviation",
    "motorcycles",
    "nature",
    "people",
    "holidays_and_events",
    "weapon",
];

fn page_url(params: &WallhavenFetchParams) -> Result<String, String> {
    if !matches!(
        params.source,
        WallhavenSource::Latest | WallhavenSource::Hot
    ) {
        return Err("Wallspic 仅提供最新和热门排序".to_string());
    }
    let category = params.category.as_deref().unwrap_or("general");
    if !CATEGORIES.contains(&category) {
        return Err("Wallspic 分类无效".into());
    }
    let keyword = params.query.as_deref().unwrap_or("").trim();
    let latest = params.source == WallhavenSource::Latest;
    let path = if !keyword.is_empty() {
        // A keyword is a site-wide search, not a tag appended to an album query.
        format!(
            "search/{}/{}for_desktop",
            urlencoding::encode(&normalize_keyword_alias(keyword)),
            if latest { "date/" } else { "" }
        )
    } else {
        let album = if category == "general" {
            String::new()
        } else {
            format!("{}/", category)
        };
        format!(
            "album/{}{}for_desktop",
            album,
            if latest { "" } else { "popular/" }
        )
    };
    Ok(format!(
        "https://wallspic.com/{}?page={}",
        path,
        params.page.unwrap_or(1).max(1)
    ))
}

pub(super) fn parse_page(body: &str) -> Result<WallhavenPage, String> {
    let gallery = script_value(body, "mainAdaptiveGallery")?;
    let target = script_value(body, "mainGalleryTarget")?;
    let document = Html::parse_document(body);
    let selector = Selector::parse("script[type='application/ld+json']").unwrap();
    let mut originals = std::collections::HashMap::new();
    for script in document.select(&selector) {
        let Ok(serde_json::Value::Array(items)) = serde_json::from_str(&script.inner_html()) else {
            continue;
        };
        for item in items {
            if let Some(path) = item.get("contentUrl").and_then(|value| value.as_str()) {
                if !image_url(path) {
                    continue;
                }
                if let Some(filename) = path.rsplit('/').next() {
                    if let Some((id, _)) = filename.split_once('-') {
                        originals.insert(id.to_string(), path.to_string());
                    }
                }
            }
        }
    }
    let list = gallery
        .get("list")
        .and_then(|value| value.as_array())
        .ok_or("Wallspic 页面缺少图片列表")?;
    let data = list
        .iter()
        .filter_map(|item| {
            let raw_id = item.get("id")?.as_u64()?.to_string();
            let width = json_u32(item.get("original")?, "width")?;
            let height = json_u32(item.get("original")?, "height")?;
            // The desktop album also contains square phone assets: enforce landscape locally.
            if width <= height || height == 0 {
                return None;
            }
            let path = originals.get(&raw_id)?.clone();
            let thumbnail = item.get("thumbnail")?.get("link")?.as_str()?.to_string();
            if !image_url(&thumbnail) {
                return None;
            }
            let detail = item.get("original")?.get("link")?.as_str()?.to_string();
            if !detail.starts_with("https://wallspic.com/image/") {
                return None;
            }
            Some(WallhavenWallpaper {
                id: format!("ws-{}", raw_id),
                provider: WallpaperProvider::Wallspic,
                tags: Vec::new(),
                url: detail,
                short_url: None,
                file_type: file_type_from_path(&path),
                path,
                thumbs: WallhavenThumbs {
                    large: thumbnail.clone(),
                    original: thumbnail.clone(),
                    small: thumbnail,
                },
                resolution: format!("{}x{}", width, height),
                dimension_x: width,
                dimension_y: height,
                category: None,
                file_size: None,
            })
        })
        .collect();
    Ok(WallhavenPage {
        data,
        page: json_u32(&target, "page").unwrap_or(1),
        last_page: json_u32(&target, "pages").unwrap_or(1).max(1),
    })
}

fn parse_detail(body: &str, wallpaper: &WallhavenWallpaper) -> Result<WallhavenWallpaper, String> {
    let document = Html::parse_document(body);
    let selector = Selector::parse("a.wallpaper__download[href]").unwrap();
    let path = document
        .select(&selector)
        .find_map(|element| element.value().attr("href"))
        .ok_or("Wallspic 页面缺少原图下载链接")?;
    if !image_url(path) || !path.contains("/attachments/originals/") {
        return Err("Wallspic 原图地址无效".to_string());
    }
    let mut result = wallpaper.clone();
    result.path = path.to_string();
    result.file_type = file_type_from_path(path);
    // These are this image's tags, not the unrelated footer category links.
    result.tags = script_value(body, "galleryTagPills")?
        .as_array()
        .ok_or("Wallspic 图片标签格式无效")?
        .iter()
        .filter_map(|tag| json_string(tag, "title"))
        .collect();
    Ok(result)
}

async fn request(client: &reqwest::Client, url: &str) -> Result<String, String> {
    client
        .get(url)
        .header(reqwest::header::REFERER, "https://wallspic.com/")
        .send()
        .await
        .map_err(|error| format!("请求 Wallspic 失败: {}", reqwest_error_details(&error)))?
        .error_for_status()
        .map_err(|error| format!("Wallspic 返回错误: {}", error))?
        .text()
        .await
        .map_err(|error| format!("读取 Wallspic 失败: {}", error))
}

pub(super) async fn resolve_detail(
    client: &reqwest::Client,
    wallpaper: &WallhavenWallpaper,
) -> Result<WallhavenWallpaper, String> {
    if let Ok(mut cache) = DETAILS.lock() {
        if let Some(detail) = cache.get(&wallpaper.id) {
            return Ok(detail.clone());
        }
    }
    if !wallpaper.url.starts_with("https://wallspic.com/image/") {
        return Err("Wallspic 详情地址无效".to_string());
    }
    let body = request(client, &wallpaper.url).await?;
    let detail = parse_detail(&body, wallpaper)?;
    if let Ok(mut cache) = DETAILS.lock() {
        cache.put(wallpaper.id.clone(), detail.clone());
    }
    Ok(detail)
}

pub(super) async fn fetch_page(params: &WallhavenFetchParams) -> Result<WallhavenPage, String> {
    let client = apply_wallhaven_proxy(
        reqwest::Client::builder()
            .use_native_tls()
            .user_agent(USER_AGENT)
            .connect_timeout(Duration::from_secs(12))
            .timeout(Duration::from_secs(35)),
    )
    .build()
    .map_err(|error| format!("创建 Wallspic 客户端失败: {}", error))?;
    let body = request(&client, &page_url(params)?).await?;
    parse_page(&body)
}
