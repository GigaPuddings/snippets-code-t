#![allow(non_snake_case)]

use std::ffi::{c_void, CStr, OsStr};
use std::fs::{self, OpenOptions};
use std::io::Write;
use std::os::windows::ffi::OsStrExt;
use std::path::PathBuf;
use std::ptr::{null, null_mut};
use std::time::{SystemTime, UNIX_EPOCH};

use windows_sys::Win32::Foundation::{CloseHandle, BOOL, HINSTANCE, HWND, LPARAM, TRUE};
use windows_sys::Win32::System::LibraryLoader::{
    DisableThreadLibraryCalls, FreeLibraryAndExitThread, GetProcAddress, LoadLibraryW,
};
use windows_sys::Win32::System::Threading::CreateThread;
use windows_sys::Win32::UI::WindowsAndMessaging::{
    EnumChildWindows, FindWindowExW, FindWindowW, GetClassNameW,
};

const DLL_PROCESS_ATTACH: u32 = 1;
const ACCENT_DISABLED: i32 = 0;
const ACCENT_ENABLE_TRANSPARENTGRADIENT: i32 = 2;
const ACCENT_ENABLE_ACRYLICBLURBEHIND: i32 = 4;
const WCA_ACCENT_POLICY: i32 = 19;
const CLEAR_GRADIENT_COLOR: u32 = 0x00000000;
const NEAR_CLEAR_ACRYLIC_COLOR: u32 = 0x01000000;

#[repr(C)]
struct AccentPolicy {
    accent_state: i32,
    accent_flags: i32,
    gradient_color: u32,
    animation_id: i32,
}

#[repr(C)]
struct WindowCompositionAttribData {
    attribute: i32,
    data: *mut c_void,
    size_of_data: usize,
}

type SetWindowCompositionAttributeFn =
    unsafe extern "system" fn(HWND, *mut WindowCompositionAttribData) -> BOOL;

#[no_mangle]
pub unsafe extern "system" fn DllMain(
    module: HINSTANCE,
    reason: u32,
    _reserved: *mut c_void,
) -> BOOL {
    if reason == DLL_PROCESS_ATTACH {
        let _ = DisableThreadLibraryCalls(module);
        let thread = CreateThread(
            null(),
            0,
            Some(agent_thread),
            module as *mut c_void,
            0,
            null_mut(),
        );
        if !thread.is_null() {
            CloseHandle(thread);
        }
    }

    TRUE
}

unsafe extern "system" fn agent_thread(module: *mut c_void) -> u32 {
    let module = module as HINSTANCE;
    run_agent();
    FreeLibraryAndExitThread(module, 0);
}

fn run_agent() {
    let enabled = read_enabled_state();
    log_line(&format!("agent loaded enabled={enabled}"));

    match apply_taskbar_transparency(enabled) {
        Ok(summary) => log_line(&format!("apply finished: {summary}")),
        Err(error) => log_line(&format!("apply failed: {error}")),
    }
}

fn base_dir() -> PathBuf {
    std::env::var_os("LOCALAPPDATA")
        .map(PathBuf::from)
        .unwrap_or_else(std::env::temp_dir)
        .join("snippets-code")
}

fn state_file() -> PathBuf {
    base_dir().join("taskbar-transparency-agent.state")
}

fn log_file() -> PathBuf {
    base_dir().join("taskbar-transparency-agent.log")
}

fn read_enabled_state() -> bool {
    fs::read_to_string(state_file())
        .map(|content| content.trim() == "1")
        .unwrap_or(false)
}

fn log_line(message: &str) {
    let dir = base_dir();
    let _ = fs::create_dir_all(&dir);
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|duration| duration.as_secs())
        .unwrap_or(0);

    if let Ok(mut file) = OpenOptions::new()
        .create(true)
        .append(true)
        .open(log_file())
    {
        let _ = writeln!(file, "[{timestamp}] {message}");
    }
}

fn wide_null(value: &str) -> Vec<u16> {
    OsStr::new(value)
        .encode_wide()
        .chain(std::iter::once(0))
        .collect()
}

unsafe fn hwnd_class_name(hwnd: HWND) -> String {
    let mut buffer = [0u16; 256];
    let len = GetClassNameW(hwnd, buffer.as_mut_ptr(), buffer.len() as i32);
    if len <= 0 {
        return "<unknown>".to_string();
    }
    String::from_utf16_lossy(&buffer[..len as usize])
}

unsafe extern "system" fn enum_child_windows_callback(hwnd: HWND, lparam: LPARAM) -> BOOL {
    let windows = &mut *(lparam as *mut Vec<HWND>);
    windows.push(hwnd);
    TRUE
}

unsafe fn find_taskbar_windows() -> Vec<HWND> {
    let mut windows = Vec::new();
    let shell_tray = wide_null("Shell_TrayWnd");
    let secondary_tray = wide_null("Shell_SecondaryTrayWnd");

    let primary = FindWindowW(shell_tray.as_ptr(), null());
    if !primary.is_null() {
        windows.push(primary);
    }

    let mut previous: HWND = null_mut();
    loop {
        let secondary = FindWindowExW(null_mut(), previous, secondary_tray.as_ptr(), null());
        if secondary.is_null() {
            break;
        }
        windows.push(secondary);
        previous = secondary;
    }

    let roots = windows.clone();
    for root in roots {
        let mut children = Vec::new();
        EnumChildWindows(
            root,
            Some(enum_child_windows_callback),
            &mut children as *mut Vec<HWND> as LPARAM,
        );
        windows.extend(children);
    }

    windows.sort_unstable();
    windows.dedup();
    windows
}

unsafe fn load_set_window_composition_attribute() -> Option<SetWindowCompositionAttributeFn> {
    let user32 = wide_null("user32.dll");
    let module = LoadLibraryW(user32.as_ptr());
    if module.is_null() {
        return None;
    }

    let proc_name = CStr::from_bytes_with_nul_unchecked(b"SetWindowCompositionAttribute\0");
    let proc = GetProcAddress(module, proc_name.as_ptr() as *const u8);
    proc.map(|function| std::mem::transmute::<_, SetWindowCompositionAttributeFn>(function))
}

unsafe fn set_accent(
    set_window_composition_attribute: SetWindowCompositionAttributeFn,
    hwnd: HWND,
    accent_state: i32,
    accent_flags: i32,
    gradient_color: u32,
) -> bool {
    let mut policy = AccentPolicy {
        accent_state,
        accent_flags,
        gradient_color,
        animation_id: 0,
    };
    let mut data = WindowCompositionAttribData {
        attribute: WCA_ACCENT_POLICY,
        data: &mut policy as *mut AccentPolicy as *mut c_void,
        size_of_data: std::mem::size_of::<AccentPolicy>(),
    };

    set_window_composition_attribute(hwnd, &mut data) != 0
}

fn apply_taskbar_transparency(enabled: bool) -> Result<String, String> {
    unsafe {
        let set_window_composition_attribute = load_set_window_composition_attribute()
            .ok_or_else(|| "SetWindowCompositionAttribute unavailable".to_string())?;
        let windows = find_taskbar_windows();
        if windows.is_empty() {
            return Err("no taskbar windows found".to_string());
        }

        let mut applied_count = 0usize;
        let mut failed_count = 0usize;
        let mut descriptions = Vec::new();

        for hwnd in windows {
            let class_name = hwnd_class_name(hwnd);
            let applied = if enabled {
                let reset = set_accent(
                    set_window_composition_attribute,
                    hwnd,
                    ACCENT_DISABLED,
                    0,
                    CLEAR_GRADIENT_COLOR,
                );
                let transparent = set_accent(
                    set_window_composition_attribute,
                    hwnd,
                    ACCENT_ENABLE_TRANSPARENTGRADIENT,
                    2,
                    CLEAR_GRADIENT_COLOR,
                );
                let acrylic = set_accent(
                    set_window_composition_attribute,
                    hwnd,
                    ACCENT_ENABLE_ACRYLICBLURBEHIND,
                    0,
                    NEAR_CLEAR_ACRYLIC_COLOR,
                );
                reset || transparent || acrylic
            } else {
                set_accent(
                    set_window_composition_attribute,
                    hwnd,
                    ACCENT_DISABLED,
                    0,
                    CLEAR_GRADIENT_COLOR,
                )
            };

            if applied {
                applied_count += 1;
            } else {
                failed_count += 1;
            }

            descriptions.push(format!("{hwnd:p}:{class_name}:{applied}"));
        }

        log_line(&format!("windows={}", descriptions.join(", ")));
        Ok(format!(
            "enabled={enabled} applied_count={applied_count} failed_count={failed_count}"
        ))
    }
}
