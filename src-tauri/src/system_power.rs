//! Windows suspend/resume handling for process-wide desktop integrations.
//!
//! Tauri does not emit desktop suspend/resume events on Windows. A small,
//! hidden top-level window receives `WM_POWERBROADCAST` on its own thread so
//! background jobs can avoid touching Explorer's notification area while the
//! shell is being suspended. After resume we refresh the existing tray icon
//! once Explorer has settled.

use std::sync::atomic::{AtomicBool, Ordering};
use std::time::Duration;

use windows::core::w;
use windows::Win32::Foundation::{HINSTANCE, HWND, LPARAM, LRESULT, WPARAM};
use windows::Win32::System::LibraryLoader::GetModuleHandleW;
use windows::Win32::UI::WindowsAndMessaging::{
    CreateWindowExW, DefWindowProcW, DispatchMessageW, GetMessageW, RegisterClassW,
    TranslateMessage, MSG, PBT_APMRESUMEAUTOMATIC, PBT_APMRESUMECRITICAL, PBT_APMRESUMESTANDBY,
    PBT_APMRESUMESUSPEND, PBT_APMSUSPEND, WM_POWERBROADCAST, WNDCLASSW, WS_EX_NOACTIVATE,
    WS_EX_TOOLWINDOW, WS_OVERLAPPED,
};

static SYSTEM_SUSPENDED: AtomicBool = AtomicBool::new(false);
static RESUME_RECOVERY_PENDING: AtomicBool = AtomicBool::new(false);

const RESUME_SETTLE_DELAY: Duration = Duration::from_millis(1_500);

pub fn is_system_suspended() -> bool {
    SYSTEM_SUSPENDED.load(Ordering::Acquire)
}

pub fn start_monitor() {
    if let Err(error) = std::thread::Builder::new()
        .name("system-power-monitor".to_string())
        .spawn(run_power_message_loop)
    {
        log::warn!("[Power] 无法启动系统电源监听线程: {}", error);
    }
}

fn run_power_message_loop() {
    let class_name = w!("SnippetsCodePowerMonitorWindow");
    let module = match unsafe { GetModuleHandleW(None) } {
        Ok(module) => module,
        Err(error) => {
            log::warn!("[Power] 获取进程模块句柄失败: {}", error);
            return;
        }
    };

    let window_class = WNDCLASSW {
        lpfnWndProc: Some(power_window_proc),
        hInstance: HINSTANCE(module.0),
        lpszClassName: class_name,
        ..Default::default()
    };

    if unsafe { RegisterClassW(&window_class) } == 0 {
        log::warn!(
            "[Power] 注册系统电源监听窗口失败: {}",
            std::io::Error::last_os_error()
        );
        return;
    }

    let window = match unsafe {
        CreateWindowExW(
            WS_EX_NOACTIVATE | WS_EX_TOOLWINDOW,
            class_name,
            w!(""),
            WS_OVERLAPPED,
            0,
            0,
            0,
            0,
            None,
            None,
            Some(HINSTANCE(module.0)),
            None,
        )
    } {
        Ok(window) => window,
        Err(error) => {
            log::warn!("[Power] 创建系统电源监听窗口失败: {}", error);
            return;
        }
    };

    log::info!("[Power] Windows 待机/恢复监听已启动");
    let mut message = MSG::default();
    while unsafe { GetMessageW(&mut message, Some(window), 0, 0) }.0 > 0 {
        unsafe {
            let _ = TranslateMessage(&message);
            DispatchMessageW(&message);
        }
    }
}

unsafe extern "system" fn power_window_proc(
    window: HWND,
    message: u32,
    wparam: WPARAM,
    lparam: LPARAM,
) -> LRESULT {
    if message == WM_POWERBROADCAST {
        match wparam.0 as u32 {
            PBT_APMSUSPEND => {
                SYSTEM_SUSPENDED.store(true, Ordering::Release);
                log::info!("[Power] 系统即将待机，暂停托盘系统调用");
                return LRESULT(1);
            }
            PBT_APMRESUMEAUTOMATIC
            | PBT_APMRESUMECRITICAL
            | PBT_APMRESUMESTANDBY
            | PBT_APMRESUMESUSPEND => {
                // Keep tray updates gated through the short Explorer recovery window.
                // The flag is released on the Tauri main thread immediately before the
                // consolidated tray refresh.
                SYSTEM_SUSPENDED.store(true, Ordering::Release);
                schedule_resume_recovery();
                return LRESULT(1);
            }
            _ => {}
        }
    }

    unsafe { DefWindowProcW(window, message, wparam, lparam) }
}

fn schedule_resume_recovery() {
    if RESUME_RECOVERY_PENDING.swap(true, Ordering::AcqRel) {
        return;
    }

    std::thread::spawn(|| {
        std::thread::sleep(RESUME_SETTLE_DELAY);

        let Some(app_handle) = crate::APP.get().cloned() else {
            SYSTEM_SUSPENDED.store(false, Ordering::Release);
            RESUME_RECOVERY_PENDING.store(false, Ordering::Release);
            return;
        };
        let recovery_app = app_handle.clone();
        let scheduled = app_handle.run_on_main_thread(move || {
            log::info!("[Power] 系统已恢复，开始刷新托盘状态");
            SYSTEM_SUSPENDED.store(false, Ordering::Release);
            crate::tray::refresh_after_system_resume(&recovery_app);
            RESUME_RECOVERY_PENDING.store(false, Ordering::Release);
            log::info!("[Power] 系统恢复处理完成");
        });

        if let Err(error) = scheduled {
            SYSTEM_SUSPENDED.store(false, Ordering::Release);
            RESUME_RECOVERY_PENDING.store(false, Ordering::Release);
            log::warn!("[Power] 无法调度系统恢复处理: {}", error);
        }
    });
}
