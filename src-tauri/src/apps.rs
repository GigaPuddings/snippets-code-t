use regex::Regex;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::path::Path;
use uuid::Uuid;
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

// 打开应用
#[tauri::command]
pub fn open_app_command(app_path: String) {
    let path = Path::new(&app_path);
    if path.exists() {
        std::process::Command::new(path).spawn().unwrap();
    } else {
        println!("Path does not exist: {}", app_path);
    }
}
