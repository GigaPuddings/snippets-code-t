use regex::Regex;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::mem::size_of;
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

#[derive(Debug, Serialize, Deserialize)]
pub struct AppInfo {
    pub id: String,
    pub title: String,
    pub content: String,
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
                                    content: icon_path,
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

// 获取已安装应用
#[tauri::command]
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

    all_apps
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
