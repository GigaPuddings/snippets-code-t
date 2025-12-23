use crate::db;
use crate::icon;
use crate::APP;
use glob::glob;
use regex::Regex;
use serde::{Deserialize, Serialize};
use tauri_plugin_opener::OpenerExt;
use std::collections::{HashMap, HashSet};
use std::fs;
use std::mem::size_of;
use std::os::windows::process::CommandExt;
use std::path::Path;
use uuid::Uuid;
use windows::Win32::Foundation::{BOOL, HWND, LPARAM};
use windows::Win32::System::ProcessStatus::{K32EnumProcesses, K32GetModuleFileNameExA};
use windows::Win32::System::Threading::{OpenProcess, PROCESS_QUERY_INFORMATION, PROCESS_VM_READ};
use windows::Win32::UI::WindowsAndMessaging::{
    BringWindowToTop, EnumWindows, GetWindow, GetWindowThreadProcessId, IsIconic, IsWindowVisible,
    SetForegroundWindow, ShowWindow, SwitchToThisWindow, GW_OWNER, SW_RESTORE,
};
use winreg::enums::{HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE};
use winreg::RegKey;
use xml::reader::{EventReader, XmlEvent};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AppInfo {
    pub id: String,
    pub title: String,
    pub content: String,
    pub icon: Option<String>,
    pub summarize: String,
    #[serde(default)]
    pub usage_count: u32,
}

fn extract_icon_path(icon_path: &str) -> Option<String> {
    let re = Regex::new(r".*?([A-Z]:\\[^,]+(?:\.exe)).*").unwrap();
    re.captures(icon_path)
        .and_then(|caps| caps.get(1))
        .map(|m| m.as_str().to_string())
}

// 格式化快捷方式标题
fn format_shortcut_title(raw_title: &str) -> String {
    let mut title = raw_title.to_string();
    let suffixes_to_remove = [
        ".exe - 快捷方式",
        ".exe - Shortcut", 
        " - 快捷方式",
        " - Shortcut",
        ".exe",
    ];
    
    for suffix in &suffixes_to_remove {
        if title.ends_with(suffix) {
            title = title[..title.len() - suffix.len()].to_string();
            break;
        }
    }
    if let Some(last_dot_pos) = title.rfind('.') {
        if last_dot_pos > 0 {
            title = title[..last_dot_pos].to_string();
        }
    }
    
    title.trim().to_string()
}

fn get_registry_apps(hkey: winreg::HKEY, path: &str) -> Vec<AppInfo> {
    let hklm = RegKey::predef(hkey);
    let key_result = hklm.open_subkey(path);

    let mut apps = Vec::new();

    if let Ok(key) = key_result {
        if let Ok(keys) = key.enum_keys().collect::<Result<Vec<_>, _>>() {
            for app_key_name in keys {
                if let Ok(app_key) = key.open_subkey(&app_key_name) {
                    let mut app_data: HashMap<String, String> = HashMap::new();

                    if let Ok(values) = app_key.enum_values().collect::<Result<Vec<_>, _>>() {
                        for (name, _value) in values {
                            if let Ok(s) = app_key.get_value::<String, _>(&name) {
                                app_data.insert(name, s);
                            }
                        }
                    }

                    if let (Some(display_name), Some(display_icon)) =
                        (app_data.get("DisplayName"), app_data.get("DisplayIcon"))
                    {
                        if let Some(icon_path) = extract_icon_path(display_icon) {
                            let lower_icon_path = icon_path.to_lowercase();
                            let lower_display_name = display_name.to_lowercase();
                            if Path::new(&icon_path).exists()
                                && !lower_icon_path.contains("uninstall")
                                && !lower_icon_path.contains("unins")
                                && !lower_display_name.contains("uninstall")
                                && !lower_display_name.contains("remove")
                                && !lower_icon_path.contains("package cache")
                                && !lower_icon_path.contains("EXE")
                            {
                                apps.push(AppInfo {
                                    id: Uuid::new_v4().to_string(),
                                    title: display_name.clone(),
                                    content: icon_path.clone(),
                                    icon: None,
                                    summarize: "app".to_string(),
                                    usage_count: 0,
                                });
                            }
                        }
                    }
                }
            }
        }
    }

    apps
}

// UWP应用的信息
#[derive(Debug, Serialize, Deserialize, Clone)]
struct UwpAppInfo {
    display_name: String,
    logo_path: String,
    executable: String,
}

// 解析AppxManifest.xml文件提取UWP应用信息
fn parse_appx_manifest(manifest_path: &Path) -> Option<UwpAppInfo> {
    // 读取清单文件
    let file = fs::File::open(manifest_path).ok()?;
    let parser = EventReader::new(file);

    let mut display_name = None;
    let mut logo_path = None;
    let mut executable = None;
    let mut package_path = manifest_path.parent()?.to_path_buf();

    // 移除掉最后一级目录(通常是AppxManifest.xml所在的目录)
    if let Some(parent) = package_path.parent() {
        package_path = parent.to_path_buf();
    }

    for event in parser {
        match event {
            Ok(XmlEvent::StartElement {
                name, attributes, ..
            }) => {
                // 获取显示名称
                if name.local_name == "Application" {
                    for attr in &attributes {
                        if attr.name.local_name == "Executable" {
                            executable = Some(attr.value.clone());
                        }
                    }
                } else if name.local_name == "DisplayName" {
                    for attr in &attributes {
                        if attr.name.local_name == "Name" {
                            display_name = Some(attr.value.clone());
                        }
                    }
                } else if name.local_name == "Logo" {
                    for attr in &attributes {
                        if attr.name.local_name == "Path" {
                            logo_path = Some(attr.value.clone());
                        }
                    }
                }
            }
            Ok(XmlEvent::Characters(content)) => {
                // 如果之前找到了DisplayName标签但没有Name属性，则使用内容作为名称
                if display_name.is_none() && !content.trim().is_empty() {
                    display_name = Some(content);
                }
            }
            Err(_) => break,
            _ => {}
        }
    }

    // 检查是否找到所有必要信息
    if let (Some(name), Some(logo), Some(exe)) = (display_name, logo_path, executable) {
        // 构建完整的图标路径
        let full_logo_path = package_path.join(&logo);
        let full_exe_path = package_path.join(&exe);

        Some(UwpAppInfo {
            display_name: name,
            logo_path: full_logo_path.to_string_lossy().to_string(),
            executable: full_exe_path.to_string_lossy().to_string(),
        })
    } else {
        None
    }
}

// 获取UWP应用
fn get_uwp_apps() -> Vec<AppInfo> {
    let mut apps = Vec::new();

    // UWP应用通常安装在以下目录
    let packages_paths = [
        "C:\\Program Files\\WindowsApps",
        "C:\\Program Files\\ModifiableWindowsApps",
    ];

    for &base_path in &packages_paths {
        let base_dir = Path::new(base_path);

        if !base_dir.exists() || !base_dir.is_dir() {
            continue;
        }

        // 遍历所有应用包目录
        if let Ok(entries) = fs::read_dir(base_dir) {
            for entry in entries.filter_map(Result::ok) {
                let package_dir = entry.path();

                if !package_dir.is_dir() {
                    continue;
                }

                // 查找AppxManifest.xml文件
                let manifest_path = package_dir.join("AppxManifest.xml");

                if manifest_path.exists() {
                    if let Some(app_info) = parse_appx_manifest(&manifest_path) {
                        apps.push(AppInfo {
                            id: Uuid::new_v4().to_string(),
                            title: app_info.display_name,
                            content: app_info.executable,
                            icon: None,
                            summarize: "uwp".to_string(),
                            usage_count: 0,
                        });
                    }
                }
            }
        }
    }

    apps
}

// 从桌面快捷方式获取应用程序信息
fn get_desktop_shortcuts() -> Vec<AppInfo> {
    let mut apps = Vec::new();


    // 尝试获取公共桌面和用户桌面路径
    let desktop_paths = [
        dirs::desktop_dir(),
        dirs::document_dir()
            .and_then(|p| p.join("..").join("Desktop").canonicalize().ok()),
        Some(Path::new("C:\\Users\\Public\\Desktop").to_path_buf()),
    ];

    for desktop_path in desktop_paths.iter().flatten() {

        // 查找所有.lnk快捷方式
        if let Ok(entries) = fs::read_dir(desktop_path) {
            for entry in entries.filter_map(Result::ok) {
                let path = entry.path();

                if path.extension().is_some_and(|ext| ext == "lnk") {
                    // info!("检测到快捷方式: {:?}", path);

                    let raw_file_name = path
                        .file_stem()
                        .unwrap_or_default()
                        .to_string_lossy()
                        .to_string();

                    let file_name = format_shortcut_title(&raw_file_name);

                    let target_path = resolve_shortcut(&path)
                        .unwrap_or_else(|| path.to_string_lossy().to_string());

                    // 检查是否为有效的可执行文件或快捷方式
                    let is_valid = (target_path.ends_with(".exe") && Path::new(&target_path).exists())
                        || target_path.ends_with(".lnk");

                    if is_valid {
                        let lower_target_path = target_path.to_lowercase();
                        let lower_file_name = file_name.to_lowercase();

                        if !lower_target_path.contains("uninstall")
                            && !lower_target_path.contains("unins")
                            && !lower_file_name.contains("uninstall")
                            && !lower_file_name.contains("remove")
                        {
                            apps.push(AppInfo {
                                id: Uuid::new_v4().to_string(),
                                title: file_name,
                                content: target_path,
                                icon: None,
                                summarize: "app".to_string(),
                                usage_count: 0,
                            });
                        }
                    }
                }
            }
        }
    }
    apps
}

// 解析快捷方式获取目标路径
fn resolve_shortcut(shortcut_path: &Path) -> Option<String> {

    let filename = shortcut_path
        .file_stem()
        .unwrap_or_default()
        .to_string_lossy()
        .to_string();
    let common_targets = match filename.to_lowercase().as_str() {
        "word" | "microsoft word" => {
            Some("C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE")
        }
        "excel" | "microsoft excel" => {
            Some("C:\\Program Files\\Microsoft Office\\root\\Office16\\EXCEL.EXE")
        }
        "powerpoint" | "microsoft powerpoint" => {
            Some("C:\\Program Files\\Microsoft Office\\root\\Office16\\POWERPNT.EXE")
        }
        "outlook" | "microsoft outlook" => {
            Some("C:\\Program Files\\Microsoft Office\\root\\Office16\\OUTLOOK.EXE")
        }
        "access" | "microsoft access" => {
            Some("C:\\Program Files\\Microsoft Office\\root\\Office16\\MSACCESS.EXE")
        }
        "chrome" | "google chrome" => {
            Some("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")
        }
        "edge" | "microsoft edge" => {
            Some("C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe")
        }
        "firefox" | "mozilla firefox" => Some("C:\\Program Files\\Mozilla Firefox\\firefox.exe"),
        "notepad++" => Some("C:\\Program Files\\Notepad++\\notepad++.exe"),
        "paint" | "mspaint" => Some("C:\\Windows\\System32\\mspaint.exe"),
        "cmd" | "command prompt" => Some("C:\\Windows\\System32\\cmd.exe"),
        _ => None,
    };

    if let Some(target) = common_targets {
        if Path::new(target).exists() {
            // info!("通过名称匹配找到快捷方式目标: {} -> {}", filename, target);
            return Some(target.to_string());
        }
    }

    // 包装在一个独立函数中，避免在出错时影响整个应用程序
    match resolve_shortcut_with_powershell(shortcut_path) {
        Ok(Some(path)) => {
            // info!("成功解析快捷方式: {} -> {}", shortcut_path_str, path);
            Some(path)
        }
        Ok(None) => None,
        Err(_) => None,
    }
}

// 使用PowerShell解析快捷方式，但添加错误处理
fn resolve_shortcut_with_powershell(shortcut_path: &Path) -> Result<Option<String>, String> {
    let shortcut_path_str = shortcut_path.to_string_lossy().to_string();

    // 使用try_with_timeout包装PowerShell执行，防止长时间阻塞
    let result = try_with_timeout(
        move || {
            let output = std::process::Command::new("powershell")
            .args([
                "-NoProfile",
                "-NonInteractive", // 添加非交互模式，减少显示窗口的机会
                "-ExecutionPolicy", "Bypass", // 确保脚本可以运行
                "-Command",
            ])
            .arg(format!(
                "try {{ $shortcut = $(New-Object -ComObject WScript.Shell).CreateShortcut('{}'); $shortcut.TargetPath }} catch {{ Write-Output 'ERROR:' $_.Exception.Message }}",
                shortcut_path_str.replace("'", "''") // 正确处理路径中的单引号
            ))
            .creation_flags(0x08000000) // CREATE_NO_WINDOW 标志，防止窗口闪现
            .output();

            match output {
                Ok(output) => {
                    let stdout = String::from_utf8_lossy(&output.stdout).trim().to_string();

                    // 检查PowerShell错误输出
                    if stdout.starts_with("ERROR:") {
                        return Err(stdout);
                    }

                    // 确保得到有效路径
                    if !stdout.is_empty() && stdout.ends_with(".exe") && Path::new(&stdout).exists()
                    {
                        return Ok(Some(stdout));
                    }

                    Ok(None)
                }
                Err(e) => Err(format!("执行PowerShell命令失败: {}", e)),
            }
        },
        std::time::Duration::from_secs(1),
    );

    match result {
        Ok(result) => result,
        Err(_) => Err("解析快捷方式超时".to_string()),
    }
}

// 执行一个操作，如果超时则返回错误
fn try_with_timeout<T, E, F>(f: F, timeout: std::time::Duration) -> Result<Result<T, E>, ()>
where
    F: FnOnce() -> Result<T, E> + Send + 'static,
    T: Send + 'static,
    E: Send + 'static,
{
    use std::sync::mpsc;
    use std::thread;

    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        tx.send(f()).unwrap_or(());
    });

    match rx.recv_timeout(timeout) {
        Ok(result) => Ok(result),
        Err(_) => Err(()),
    }
}

// 获取Windows内置应用
fn get_windows_apps() -> Vec<AppInfo> {
    let mut apps = Vec::new();


    // Windows常用内置应用的路径 - 增加更多变体以提高检测成功率
    let windows_apps = [
        ("计算器", "C:\\Windows\\System32\\calc.exe"),
        ("记事本", "C:\\Windows\\System32\\notepad.exe"),
        ("画图", "C:\\Windows\\System32\\mspaint.exe"),
        (
            "画图3D",
            "C:\\Program Files\\WindowsApps\\Microsoft.Paint3D_*\\PaintStudio.View.exe",
        ),
    ];

    // 首先尝试直接查找路径（对于常规系统工具）
    for (name, path) in windows_apps.iter() {
        // 如果路径包含通配符，则使用glob查找
        if path.contains('*') {
            if let Ok(matches) = glob(path) {
                if let Some(first_match) = matches.filter_map(Result::ok).next() {
                    let path_str = first_match.to_string_lossy().to_string();
                    if Path::new(&path_str).exists() {

                        apps.push(AppInfo {
                            id: Uuid::new_v4().to_string(),
                            title: name.to_string(),
                            content: path_str,
                            icon: None,
                            summarize: "app".to_string(),
                            usage_count: 0,
                        });
                    }
                }
            }
        } else if Path::new(path).exists() {

            apps.push(AppInfo {
                id: Uuid::new_v4().to_string(),
                title: name.to_string(),
                content: path.to_string(),
                icon: None,
                summarize: "app".to_string(),
                usage_count: 0,
            });
        }
    }

    // 查找Windows 10/11中的现代UWP应用
    let system_apps = find_modern_system_apps();
    apps.extend(system_apps);

    // 查找Microsoft Office应用
    let office_apps = get_office_apps();
    apps.extend(office_apps);

    apps
}

// 从注册表App Paths获取应用路径
fn get_app_path_from_registry(exe_name: &str) -> Option<String> {
    let hklm = RegKey::predef(HKEY_LOCAL_MACHINE);
    let app_paths_key = format!(
        "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\{}",
        exe_name
    );

    if let Ok(key) = hklm.open_subkey(&app_paths_key) {
        if let Ok(path) = key.get_value::<String, _>("") {
            if Path::new(&path).exists() {
                return Some(path);
            }
        }
    }

    // 如果在HKLM中找不到，尝试在HKCU中查找
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    if let Ok(key) = hkcu.open_subkey(&app_paths_key) {
        if let Ok(path) = key.get_value::<String, _>("") {
            if Path::new(&path).exists() {
                return Some(path);
            }
        }
    }

    None
}

// 检测Microsoft Office应用程序
fn get_office_apps() -> Vec<AppInfo> {
    let mut apps = Vec::new();


    // 定义Office版本号和应用
    let office_versions = [
        "16.0", // Office 2016/2019/365
        "15.0", // Office 2013
        "14.0", // Office 2010
        "12.0", // Office 2007
        "11.0", // Office 2003
    ];

    let office_apps = [
        ("Word", "WINWORD.EXE", "Microsoft Word"),
        ("Excel", "EXCEL.EXE", "Microsoft Excel"),
        ("PowerPoint", "POWERPNT.EXE", "Microsoft PowerPoint"),
        ("Outlook", "OUTLOOK.EXE", "Microsoft Outlook"),
        ("Access", "MSACCESS.EXE", "Microsoft Access"),
        ("Publisher", "MSPUB.EXE", "Microsoft Publisher"),
        ("OneNote", "ONENOTE.EXE", "Microsoft OneNote"),
    ];

    // 方式1: 从App Paths注册表项检测Office应用
    for (_, exe_name, display_name) in office_apps.iter() {
        if let Some(path) = get_app_path_from_registry(exe_name) {
            // 再次验证路径确实存在和可访问
            if Path::new(&path).exists() && Path::new(&path).is_file() {

                apps.push(AppInfo {
                    id: Uuid::new_v4().to_string(),
                    title: display_name.to_string(),
                    content: path,
                    icon: None,
                    summarize: "app".to_string(),
                    usage_count: 0,
                });
            }
        }
    }

    // 方式2: 检查Office注册表项
    for version in office_versions.iter() {
        // 首先检查Office主安装路径
        let install_root = detect_office_install_root(version);
        if let Some(root_path) = install_root {

            // 检查每个应用的路径
            for (app_name, exe_name, display_name) in office_apps.iter() {
                let app_path = format!("{}\\{}", root_path, exe_name);
                if Path::new(&app_path).exists() && Path::new(&app_path).is_file() {

                    apps.push(AppInfo {
                        id: Uuid::new_v4().to_string(),
                        title: display_name.to_string(),
                        content: app_path,
                        icon: None,
                        summarize: "app".to_string(),
                        usage_count: 0,
                    });
                } else {
                    // 尝试使用特定应用注册表项
                    let app_install_path = detect_office_app_path(version, app_name);
                    if let Some(path) = app_install_path {
                        let full_path = format!("{}\\{}", path, exe_name);
                        if Path::new(&full_path).exists() && Path::new(&full_path).is_file() {

                            apps.push(AppInfo {
                                id: Uuid::new_v4().to_string(),
                                title: display_name.to_string(),
                                content: full_path,
                                icon: None,
                                summarize: "app".to_string(),
                                usage_count: 0,
                            });
                        }
                    }
                }
            }
        } else {
            // 尝试分别检查每个Office应用
            for (app_name, exe_name, display_name) in office_apps.iter() {
                let app_install_path = detect_office_app_path(version, app_name);
                if let Some(path) = app_install_path {
                    let full_path = format!("{}\\{}", path, exe_name);
                    if Path::new(&full_path).exists() && Path::new(&full_path).is_file() {

                        apps.push(AppInfo {
                            id: Uuid::new_v4().to_string(),
                            title: display_name.to_string(),
                            content: full_path,
                            icon: None,
                            summarize: "app".to_string(),
                            usage_count: 0,
                        });
                    }
                }
            }
        }
    }

    // 方式3: 搜索常见安装位置
    let common_office_paths = [
        "C:\\Program Files\\Microsoft Office",
        "C:\\Program Files (x86)\\Microsoft Office",
        "C:\\Program Files\\Microsoft Office 15",
        "C:\\Program Files\\Microsoft Office 16",
        "C:\\Program Files (x86)\\Microsoft Office 15",
        "C:\\Program Files (x86)\\Microsoft Office 16",
        "C:\\Program Files\\Microsoft 365",
        "C:\\Program Files (x86)\\Microsoft 365",
        "C:\\Program Files\\WindowsApps\\Microsoft.Office.Desktop",
    ];

    for &base_path in &common_office_paths {
        for (_, exe_name, display_name) in office_apps.iter() {
            // 递归搜索基础路径下的所有可能位置
            let search_pattern = format!("{}\\**\\{}", base_path, exe_name);
            if let Ok(paths) = glob(&search_pattern) {
                for entry in paths.filter_map(Result::ok) {
                    let app_path = entry.to_string_lossy().to_string();

                    // 检查是否已添加此路径
                    if !apps.iter().any(|app| app.content == app_path) {

                        apps.push(AppInfo {
                            id: Uuid::new_v4().to_string(),
                            title: display_name.to_string(),
                            content: app_path,
                            icon: None,
                            summarize: "app".to_string(),
                            usage_count: 0,
                        });
                    }
                }
            }
        }
    }

    // 方式4: 对于Office 2019和Office 365，检查Click-to-Run安装
    let c2r_paths = [
        "C:\\Program Files\\Microsoft Office\\root\\Office16",
        "C:\\Program Files (x86)\\Microsoft Office\\root\\Office16",
    ];

    for &c2r_path in &c2r_paths {
        if Path::new(c2r_path).exists() {
            for (_, exe_name, display_name) in office_apps.iter() {
                let app_path = format!("{}\\{}", c2r_path, exe_name);
                if Path::new(&app_path).exists() 
                    && Path::new(&app_path).is_file() 
                    && !apps.iter().any(|app| app.content == app_path)
                {

                    apps.push(AppInfo {
                        id: Uuid::new_v4().to_string(),
                        title: display_name.to_string(),
                        content: app_path,
                        icon: None,
                        summarize: "app".to_string(),
                        usage_count: 0,
                    });
                }
            }
        }
    }

    apps
}

// 检测Office公共安装根路径
fn detect_office_install_root(version: &str) -> Option<String> {
    // 尝试64位注册表
    let hklm = RegKey::predef(HKEY_LOCAL_MACHINE);
    let path = format!(
        "SOFTWARE\\Microsoft\\Office\\{}\\Common\\InstallRoot",
        version
    );

    if let Ok(key) = hklm.open_subkey(&path) {
        if let Ok(root_path) = key.get_value::<String, _>("Path") {
            if Path::new(&root_path).exists() {
                return Some(root_path);
            }
        }
    }

    // 尝试32位注册表(在64位系统上)
    let wow6432_path = format!(
        "SOFTWARE\\Wow6432Node\\Microsoft\\Office\\{}\\Common\\InstallRoot",
        version
    );
    if let Ok(key) = hklm.open_subkey(&wow6432_path) {
        if let Ok(root_path) = key.get_value::<String, _>("Path") {
            if Path::new(&root_path).exists() {
                return Some(root_path);
            }
        }
    }

    // 尝试用户级别注册表
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let user_path = format!(
        "SOFTWARE\\Microsoft\\Office\\{}\\Common\\InstallRoot",
        version
    );

    if let Ok(key) = hkcu.open_subkey(&user_path) {
        if let Ok(root_path) = key.get_value::<String, _>("Path") {
            if Path::new(&root_path).exists() {
                return Some(root_path);
            }
        }
    }

    None
}

// 检测特定Office应用的安装路径
fn detect_office_app_path(version: &str, app_name: &str) -> Option<String> {
    // 尝试64位注册表
    let hklm = RegKey::predef(HKEY_LOCAL_MACHINE);
    let path = format!(
        "SOFTWARE\\Microsoft\\Office\\{}\\{}\\InstallRoot",
        version, app_name
    );

    if let Ok(key) = hklm.open_subkey(&path) {
        if let Ok(app_path) = key.get_value::<String, _>("Path") {
            if Path::new(&app_path).exists() {
                return Some(app_path);
            }
        }
    }

    // 尝试32位注册表(在64位系统上)
    let wow6432_path = format!(
        "SOFTWARE\\Wow6432Node\\Microsoft\\Office\\{}\\{}\\InstallRoot",
        version, app_name
    );
    if let Ok(key) = hklm.open_subkey(&wow6432_path) {
        if let Ok(app_path) = key.get_value::<String, _>("Path") {
            if Path::new(&app_path).exists() {
                return Some(app_path);
            }
        }
    }

    // 尝试用户级别注册表
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let user_path = format!(
        "SOFTWARE\\Microsoft\\Office\\{}\\{}\\InstallRoot",
        version, app_name
    );

    if let Ok(key) = hkcu.open_subkey(&user_path) {
        if let Ok(app_path) = key.get_value::<String, _>("Path") {
            if Path::new(&app_path).exists() {
                return Some(app_path);
            }
        }
    }

    None
}

// 查找System32目录下的系统应用
fn find_modern_system_apps() -> Vec<AppInfo> {
    let mut apps = Vec::new();

    let system32_dir = "C:\\Windows\\System32";
    let search_pattern = format!("{}\\*.exe", system32_dir);


    if let Ok(paths) = glob(&search_pattern) {
        for entry in paths.filter_map(Result::ok) {
            if let Some(file_name) = entry.file_name() {
                let name = file_name.to_string_lossy().to_string();

                // 映射一些常见的系统应用名称
                let display_name = match name.as_str() {
                    "calc.exe" => "计算器".to_string(),
                    "notepad.exe" => "记事本".to_string(),
                    "mspaint.exe" => "画图".to_string(),
                    "cmd.exe" => "命令提示符".to_string(),
                    "powershell.exe" => "PowerShell".to_string(),
                    "taskmgr.exe" => "任务管理器".to_string(),
                    "regedit.exe" => "注册表编辑器".to_string(),
                    "msconfig.exe" => "系统配置".to_string(),
                    "winver.exe" => "关于Windows".to_string(),
                    "dxdiag.exe" => "DirectX诊断工具".to_string(),
                    "msinfo32.exe" => "系统信息".to_string(),
                    "charmap.exe" => "字符映射表".to_string(),
                    "control.exe" => "控制面板".to_string(),
                    "explorer.exe" => "文件资源管理器".to_string(),
                    _ => {
                        continue;
                    }
                };

                let path_str = entry.to_string_lossy().to_string();

                apps.push(AppInfo {
                    id: Uuid::new_v4().to_string(),
                    title: display_name,
                    content: path_str,
                    icon: None,
                    summarize: "app".to_string(),
                    usage_count: 0,
                });
            }
        }
    }

    apps
}

// 获取 Windows 商店应用
fn get_windows_store_apps() -> Vec<AppInfo> {
    let mut apps = Vec::new();

    // 访问 Windows 应用清单注册表位置
    let hklm = RegKey::predef(HKEY_CURRENT_USER);
    let path = r"Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppModel\Repository\Packages";

    if let Ok(key) = hklm.open_subkey(path) {
        if let Ok(package_names) = key.enum_keys().collect::<Result<Vec<_>, _>>() {
            for package_name in package_names {
                // 只检查Microsoft.开头的包或其他可能的应用商店应用
                if package_name.starts_with("Microsoft.")
                    || package_name.contains("_8wekyb3d8bbwe")
                    || package_name.contains(".AppX")
                {
                    if let Ok(package_key) = key.open_subkey(&package_name) {
                        // 尝试获取应用的显示名称
                        let display_name = if let Ok(display_name) =
                            package_key.get_value::<String, _>("DisplayName")
                        {
                            display_name
                        } else {
                            // 如果没有DisplayName，使用包名的一部分作为名称
                            let parts: Vec<&str> = package_name.split('_').collect();
                            if !parts.is_empty() {
                                parts[0].replace("Microsoft.", "").to_string()
                            } else {
                                continue;
                            }
                        };

                        // 尝试获取可执行文件路径
                        if let Ok(appid) = package_key.get_value::<String, _>("AppID") {
                            if let Ok(packdir) =
                                package_key.get_value::<String, _>("PackageRootFolder")
                            {
                                // 尝试查找应用的可执行文件
                                let app_exe_path = find_uwp_executable(&packdir, &appid);

                                if let Some(exe_path) = app_exe_path {
                                    if Path::new(&exe_path).exists() {


                                        apps.push(AppInfo {
                                            id: Uuid::new_v4().to_string(),
                                            title: display_name,
                                            content: exe_path,
                                            icon: None,
                                            summarize: "app".to_string(),
                                            usage_count: 0,
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    apps
}

// 查找 UWP 应用的可执行文件路径
fn find_uwp_executable(package_root: &str, app_id: &str) -> Option<String> {
    // 首先检查应用清单中的信息
    let manifest_path = format!("{}\\AppxManifest.xml", package_root);
    if Path::new(&manifest_path).exists() {
        if let Ok(manifest_content) = fs::read_to_string(&manifest_path) {
            // 检查清单中是否有应用的可执行文件信息
            if let Some(exe_rel_path) = extract_executable_from_manifest(&manifest_content) {
                let full_path = format!("{}\\{}", package_root, exe_rel_path);
                if Path::new(&full_path).exists() {
                    return Some(full_path);
                }
            }
        }
    }

    // 如果无法从清单中获取，尝试直接搜索常见的可执行文件位置
    let common_locations = [
        format!("{}\\*.exe", package_root),
        format!("{}\\app\\*.exe", package_root),
        format!("{}\\bin\\*.exe", package_root),
    ];

    for pattern in &common_locations {
        if let Ok(paths) = glob(pattern) {
            for entry in paths.filter_map(Result::ok) {
                // 有些UWP应用可能有多个exe，优先选择与应用ID相关的
                let file_name = entry
                    .file_name()
                    .unwrap_or_default()
                    .to_string_lossy()
                    .to_string();
                if file_name.contains(app_id) || !file_name.contains("Helper") {
                    return Some(entry.to_string_lossy().to_string());
                }
            }

            // 如果没有找到优先匹配的，返回第一个找到的exe
            if let Ok(paths) = glob(pattern) {
                if let Some(first_exe) = paths.filter_map(Result::ok).next() {
                    return Some(first_exe.to_string_lossy().to_string());
                }
            }
        }
    }

    None
}

// 从应用清单XML中提取可执行文件路径
fn extract_executable_from_manifest(manifest_content: &str) -> Option<String> {
    if let Some(start_idx) = manifest_content.find("Executable=\"") {
        let start = start_idx + 12; // "Executable=\"" 的长度
        if let Some(end_idx) = manifest_content[start..].find('"') {
            return Some(manifest_content[start..start + end_idx].to_string());
        }
    }
    None
}

// 获取已安装应用
pub fn get_installed_apps() -> Vec<AppInfo> {

    let paths = [
        (
            HKEY_LOCAL_MACHINE,
            r"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall",
        ),
        (
            HKEY_LOCAL_MACHINE,
            r"SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall",
        ),
        (
            HKEY_CURRENT_USER,
            r"Software\Microsoft\Windows\CurrentVersion\Uninstall",
        ),
        (
            HKEY_CURRENT_USER,
            r"Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall",
        ),
    ];

    let mut all_apps = Vec::new();

    for (hkey, path) in paths.iter() {
        let apps = get_registry_apps(*hkey, path);
        all_apps.extend(apps);
    }

    let uwp_apps = get_uwp_apps();
    all_apps.extend(uwp_apps);

    let store_apps = get_windows_store_apps();
    all_apps.extend(store_apps);

    let shortcut_apps = get_desktop_shortcuts();
    all_apps.extend(shortcut_apps);

    let windows_apps = get_windows_apps();
    all_apps.extend(windows_apps);

    // 确保所有应用都有默认图标
    all_apps.iter_mut().for_each(|app| {
        if app.icon.is_none() {
            app.icon = None;
        }
    });

    // 去除重复应用（基于路径和标题的组合去重）
    let mut unique_apps = Vec::new();
    let mut seen_paths = HashSet::new();
    let mut seen_titles = HashSet::new();

    for app in all_apps {
        // 标准化路径（转为小写以忽略大小写差异）
        let normalized_path = app.content.to_lowercase();
        // 标准化标题（用于去除不同路径的同名应用）
        let normalized_title = app.title.to_lowercase().trim().to_string();

        // 检查是否重复的路径
        if seen_paths.contains(&normalized_path) {
            continue; // 跳过相同路径的应用
        }

        // 对于Microsoft Office应用，特殊处理：只保留第一个同名应用
        if app.title.contains("Microsoft")
            && (app.title.contains("Word")
                || app.title.contains("Excel")
                || app.title.contains("PowerPoint")
                || app.title.contains("Outlook")
                || app.title.contains("Access")
                || app.title.contains("Publisher")
                || app.title.contains("OneNote"))
        {
            if seen_titles.contains(&app.title) { 
                continue;
            }
            seen_titles.insert(app.title.clone());
        } 
        // 对于其他应用，检查标题是否重复（避免 "Snippets Code" 和 "snippets-code" 同时存在）
        else if seen_titles.contains(&normalized_title) {
            continue;
        }

        // 记录此路径和标题
        seen_paths.insert(normalized_path);
        seen_titles.insert(normalized_title);

        // 添加非重复应用
        unique_apps.push(app);
    }

    unique_apps
}

// 在背景线程中加载应用程序图标 (无通知版本)
#[allow(dead_code)]
pub fn load_app_icons_async_silent(
    apps: Vec<AppInfo>,
    updated_count: std::sync::Arc<std::sync::Mutex<usize>>,
    completion_counter: std::sync::Arc<std::sync::Mutex<usize>>,
) {
    // 使用通用图标加载器
    let count = icon::load_icons_generic(
        apps,
        |app| app.icon.is_some(),
        |app| icon::extract_app_icon(&app.content),
        |app, icon| db::update_app_icon(&app.id, icon).map_err(|e| e.to_string()),
        "应用程序",
    );

    // 更新计数
    {
        let mut counter = updated_count.lock().unwrap();
        *counter = count;
    }

    // 标记此任务为完成
    {
        let mut complete = completion_counter.lock().unwrap();
        *complete += 1;
    }
}

struct EnumWindowsCallbackArgs {
    process_id: u32,
    hwnd: HWND,
}

fn is_main_window(hwnd: HWND) -> bool {
    unsafe {
        if !IsWindowVisible(hwnd).as_bool() {
            return false;
        }

        let owner = GetWindow(hwnd, GW_OWNER).unwrap_or(HWND(std::ptr::null_mut()));
        if owner != HWND(std::ptr::null_mut()) {
            return false;
        }

        true
    }
}

extern "system" fn enum_windows_callback(hwnd: HWND, lparam: LPARAM) -> BOOL {
    unsafe {
        let args = &mut *(lparam.0 as *mut EnumWindowsCallbackArgs);
        let mut process_id: u32 = 0;
        GetWindowThreadProcessId(hwnd, Some(&mut process_id));

        if process_id == args.process_id && is_main_window(hwnd) {
            args.hwnd = hwnd;
            return false.into();
        }
        true.into()
    }
}

fn find_existing_window(target_path: &str) -> Option<HWND> {
    unsafe {
        let mut process_ids = [0u32; 1024];
        let mut cb_needed = 0;

        if !K32EnumProcesses(
            process_ids.as_mut_ptr(),
            (process_ids.len() * size_of::<u32>()) as u32,
            &mut cb_needed,
        )
        .as_bool()
        {
            return None;
        }

        let process_count = cb_needed as usize / size_of::<u32>();

        for &process_id in &process_ids[..process_count] {
            if process_id == 0 {
                continue;
            }

            if let Ok(process_handle) = OpenProcess(
                PROCESS_QUERY_INFORMATION | PROCESS_VM_READ,
                false,
                process_id,
            ) {
                let mut buffer = [0u8; 1024];
                if K32GetModuleFileNameExA(Some(process_handle), None, &mut buffer) > 0 {
                    let process_path = String::from_utf8_lossy(&buffer)
                        .trim_matches(char::from(0))
                        .to_string();

                    if process_path.eq_ignore_ascii_case(target_path) {
                        let mut args = EnumWindowsCallbackArgs {
                            process_id,
                            hwnd: HWND(std::ptr::null_mut()),
                        };

                        let _ = EnumWindows(
                            Some(enum_windows_callback),
                            LPARAM(&mut args as *mut EnumWindowsCallbackArgs as isize),
                        );

                        if !args.hwnd.is_invalid() {
                            return Some(args.hwnd);
                        }
                    }
                }
            }
        }
        None
    }
}

#[tauri::command]
pub fn open_app_command(app_path: String) -> Result<(), String> {
    let path = Path::new(&app_path);
    if !path.exists() {
        return Err(format!("应用程序路径不存在: {}", app_path));
    }

    if let Some(hwnd) = find_existing_window(&app_path) {
        unsafe {
            if IsIconic(hwnd).as_bool() {
                let _ = ShowWindow(hwnd, SW_RESTORE);
            }
            let _ = BringWindowToTop(hwnd);
            let _ = SetForegroundWindow(hwnd);
            SwitchToThisWindow(hwnd, true);
        }
        return Ok(());
    }

    match APP.get() {
        Some(app) => {
            let actual_path = if app_path.ends_with(".lnk") {
                resolve_shortcut(Path::new(&app_path)).unwrap_or(app_path.clone())
            } else {
                app_path.clone()
            };
            
            app.opener().open_path(actual_path.clone(), None::<&str>)
                .map_err(|e| format!("启动应用程序失败 '{}': {}", app_path, e))
        }
        None => Err("无法获取应用程序实例".to_string())
    }
}

