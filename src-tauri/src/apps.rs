use crate::icon;
use log::info;
use regex::Regex;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::mem::size_of;
use std::path::Path;
use tauri::AppHandle;
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
    pub content: String,      // Path to the executable
    pub icon: Option<String>, // Base64 encoded icon data
    pub summarize: String,
}

fn extract_icon_path(icon_path: &str) -> Option<String> {
    let re = Regex::new(r".*?([A-Z]:\\[^,]+(?:\.exe|\.ico)).*").unwrap();
    re.captures(icon_path)
        .and_then(|caps| caps.get(1))
        .map(|m| m.as_str().to_string())
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
                            if Path::new(&icon_path).exists() {
                                apps.push(AppInfo {
                                    id: Uuid::new_v4().to_string(),
                                    title: display_name.clone(),
                                    content: icon_path.clone(),
                                    icon: None, // Icons will be loaded asynchronously later
                                    summarize: "app".to_string(),
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
            Ok(XmlEvent::StartElement { name, attributes, .. }) => {
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
                if display_name.is_none() && content.trim().len() > 0 {
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
                            icon: None, // 图标将在后续异步加载
                            summarize: "uwp".to_string(),
                        });
                    }
                }
            }
        }
    }
    
    apps
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

    // 从注册表获取传统Win32应用
    for (hkey, path) in paths.iter() {
        let apps = get_registry_apps(*hkey, path);
        all_apps.extend(apps);
    }
    
    // 获取UWP应用
    let uwp_apps = get_uwp_apps();
    all_apps.extend(uwp_apps);

    // 确保所有应用都有默认图标
    all_apps.iter_mut().for_each(|app| {
        if app.icon.is_none() {
            app.icon = None;
        }
    });

    all_apps
}

// 在背景线程中加载应用程序图标 (无通知版本)
pub fn load_app_icons_async_silent(
    app_handle: AppHandle, 
    apps: Vec<AppInfo>, 
    updated_count: std::sync::Arc<std::sync::Mutex<usize>>,
    completion_counter: std::sync::Arc<std::sync::Mutex<usize>>
) {
    let mut updated_apps = Vec::new();
    let mut count = 0;
    
    info!("开始加载应用程序图标: {} 个应用", apps.len());

    for mut app in apps {
        // 只处理没有图标的应用程序
        if app.icon.is_none() {
            // info!("正在为 '{}' 提取图标: {}", app.title, app.content);
            if let Some(icon_data) = icon::extract_app_icon(&app.content) {
                // info!("成功获取 '{}' 的图标", app.title);
                app.icon = Some(icon_data);
                count += 1;
            } else {
                info!("为 '{}' 提取图标失败，使用默认图标", app.title);
                // 如果提取失败，使用默认图标
                app.icon = None;
            }
        }
        updated_apps.push(app);
    }

    // 更新商店中的应用程序
    crate::config::set_value(&app_handle, "installed_apps", &updated_apps);
    
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
    
    info!("已完成加载应用程序图标: {} 个成功", count);
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
pub fn open_app_command(app_path: String) {
    let path = Path::new(&app_path);
    if !path.exists() {
        println!("Path does not exist: {}", app_path);
        return;
    }

    // 尝试查找现有窗口
    if let Some(hwnd) = find_existing_window(&app_path) {
        unsafe {
            // 如果窗口被最小化，先恢复它
            if IsIconic(hwnd).as_bool() {
                let _ = ShowWindow(hwnd, SW_RESTORE);
            }

            // 确保窗口在最前面
            let _ = BringWindowToTop(hwnd);

            // 激活窗口
            let _ = SetForegroundWindow(hwnd);

            // 强制切换到该窗口
            SwitchToThisWindow(hwnd, true);
        }
    } else {
        // 如果没有找到现有窗口，则启动新实例
        std::process::Command::new(path)
            .spawn()
            .unwrap_or_else(|e| {
                println!("Failed to start application: {}", e);
                panic!("Failed to start application");
            });
    }
}
