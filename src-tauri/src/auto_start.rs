use tauri::AppHandle;
use tauri_plugin_autostart::ManagerExt;

pub const AUTO_START_ARG: &str = "--auto-start";
const LEGACY_AUTO_START_ARGS: [&str; 2] = ["--flag1", "--flag2"];

pub fn is_auto_start_argument(arg: &str) -> bool {
    arg == AUTO_START_ARG || LEGACY_AUTO_START_ARGS.contains(&arg)
}

pub fn is_auto_start_launch() -> bool {
    std::env::args().any(|arg| is_auto_start_argument(&arg))
}

fn legacy_auto_start_enabled(app_handle: &AppHandle) -> Result<bool, String> {
    app_handle
        .autolaunch()
        .is_enabled()
        .map_err(|error| format!("读取兼容自启动项失败: {error}"))
}

fn enable_legacy_auto_start(app_handle: &AppHandle) -> Result<(), String> {
    app_handle
        .autolaunch()
        .enable()
        .map_err(|error| format!("启用兼容自启动项失败: {error}"))
}

#[cfg(not(target_os = "windows"))]
fn disable_legacy_auto_start(app_handle: &AppHandle) -> Result<(), String> {
    app_handle
        .autolaunch()
        .disable()
        .map_err(|error| format!("清理兼容自启动项失败: {error}"))
}

#[cfg(target_os = "windows")]
fn disable_legacy_auto_start(_app_handle: &AppHandle) -> Result<(), String> {
    use std::io::ErrorKind;
    use winreg::enums::{HKEY_CURRENT_USER, KEY_SET_VALUE};
    use winreg::RegKey;

    const RUN_KEY: &str = r"SOFTWARE\Microsoft\Windows\CurrentVersion\Run";
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let run_key = match hkcu.open_subkey_with_flags(RUN_KEY, KEY_SET_VALUE) {
        Ok(run_key) => run_key,
        Err(error) if error.kind() == ErrorKind::NotFound => return Ok(()),
        Err(error) => return Err(format!("打开兼容自启动注册表失败: {error}")),
    };

    match run_key.delete_value("snippets-code") {
        Ok(()) => Ok(()),
        Err(error) if error.kind() == ErrorKind::NotFound => Ok(()),
        Err(error) => Err(format!("清理兼容自启动项失败: {error}")),
    }
}

#[cfg(target_os = "windows")]
mod windows_task {
    use super::AUTO_START_ARG;
    use std::path::PathBuf;
    use windows::{
        core::{Interface, BSTR, HRESULT},
        Win32::{
            Foundation::{ERROR_FILE_NOT_FOUND, VARIANT_BOOL},
            System::{
                Com::{
                    CoCreateInstance, CoInitializeEx, CoUninitialize, CLSCTX_INPROC_SERVER,
                    COINIT_MULTITHREADED,
                },
                TaskScheduler::{
                    IExecAction, ILogonTrigger, ITaskService, TaskScheduler, TASK_ACTION_EXEC,
                    TASK_CREATE_OR_UPDATE, TASK_INSTANCES_IGNORE_NEW, TASK_LOGON_INTERACTIVE_TOKEN,
                    TASK_RUNLEVEL_LUA, TASK_TRIGGER_LOGON,
                },
                Variant::VARIANT,
            },
        },
    };

    pub const TASK_NAME: &str = "snippets-code AutoStart";

    struct ComGuard;

    impl ComGuard {
        fn initialize() -> Result<Self, String> {
            unsafe { CoInitializeEx(None, COINIT_MULTITHREADED) }
                .ok()
                .map_err(|error| format!("初始化任务计划 COM 失败: {error}"))?;
            Ok(Self)
        }
    }

    impl Drop for ComGuard {
        fn drop(&mut self) {
            unsafe { CoUninitialize() };
        }
    }

    fn task_service() -> Result<ITaskService, String> {
        let service: ITaskService =
            unsafe { CoCreateInstance(&TaskScheduler, None, CLSCTX_INPROC_SERVER) }
                .map_err(|error| format!("连接 Windows 任务计划程序失败: {error}"))?;
        let empty = VARIANT::default();
        unsafe { service.Connect(&empty, &empty, &empty, &empty) }
            .map_err(|error| format!("初始化 Windows 任务计划服务失败: {error}"))?;
        Ok(service)
    }

    fn connected_account(service: &ITaskService) -> Result<String, String> {
        let user = unsafe { service.ConnectedUser() }
            .map_err(|error| format!("读取当前任务计划用户失败: {error}"))?
            .to_string();
        let domain = unsafe { service.ConnectedDomain() }
            .map_err(|error| format!("读取当前任务计划域失败: {error}"))?
            .to_string();

        if user.contains('\\') || user.contains('@') || domain.is_empty() {
            Ok(user)
        } else {
            Ok(format!("{domain}\\{user}"))
        }
    }

    fn is_not_found(error: &windows::core::Error) -> bool {
        error.code() == HRESULT::from_win32(ERROR_FILE_NOT_FOUND.0)
    }

    fn run_on_com_thread<T, F>(operation: F) -> Result<T, String>
    where
        T: Send + 'static,
        F: FnOnce() -> Result<T, String> + Send + 'static,
    {
        std::thread::spawn(move || {
            let _com = ComGuard::initialize()?;
            operation()
        })
        .join()
        .map_err(|_| "Windows 自启动任务线程异常退出".to_string())?
    }

    pub fn register(executable: PathBuf) -> Result<(), String> {
        run_on_com_thread(move || {
            let service = task_service()?;
            let account = connected_account(&service)?;
            let root = unsafe { service.GetFolder(&BSTR::from("\\")) }
                .map_err(|error| format!("打开任务计划根目录失败: {error}"))?;
            let definition = unsafe { service.NewTask(0) }
                .map_err(|error| format!("创建自启动任务定义失败: {error}"))?;

            let registration = unsafe { definition.RegistrationInfo() }
                .map_err(|error| format!("读取任务注册信息失败: {error}"))?;
            unsafe {
                registration
                    .SetAuthor(&BSTR::from("snippets-code"))
                    .map_err(|error| format!("设置任务作者失败: {error}"))?;
                registration
                    .SetDescription(&BSTR::from(
                        "Launch snippets-code promptly after the current user signs in",
                    ))
                    .map_err(|error| format!("设置任务描述失败: {error}"))?;
            }

            let principal = unsafe { definition.Principal() }
                .map_err(|error| format!("读取任务运行账户失败: {error}"))?;
            unsafe {
                principal
                    .SetUserId(&BSTR::from(account.as_str()))
                    .map_err(|error| format!("设置任务运行用户失败: {error}"))?;
                principal
                    .SetLogonType(TASK_LOGON_INTERACTIVE_TOKEN)
                    .map_err(|error| format!("设置任务登录类型失败: {error}"))?;
                principal
                    .SetRunLevel(TASK_RUNLEVEL_LUA)
                    .map_err(|error| format!("设置任务权限级别失败: {error}"))?;
            }

            let triggers = unsafe { definition.Triggers() }
                .map_err(|error| format!("读取任务触发器失败: {error}"))?;
            let trigger: ILogonTrigger = unsafe { triggers.Create(TASK_TRIGGER_LOGON) }
                .and_then(|trigger| trigger.cast())
                .map_err(|error| format!("创建用户登录触发器失败: {error}"))?;
            unsafe {
                trigger
                    .SetUserId(&BSTR::from(account.as_str()))
                    .map_err(|error| format!("绑定登录触发用户失败: {error}"))?;
            }

            let actions = unsafe { definition.Actions() }
                .map_err(|error| format!("读取任务动作失败: {error}"))?;
            let action: IExecAction = unsafe { actions.Create(TASK_ACTION_EXEC) }
                .and_then(|action| action.cast())
                .map_err(|error| format!("创建自启动程序动作失败: {error}"))?;
            let executable_text = executable.to_string_lossy().into_owned();
            unsafe {
                action
                    .SetPath(&BSTR::from(executable_text.as_str()))
                    .map_err(|error| format!("设置自启动程序路径失败: {error}"))?;
                action
                    .SetArguments(&BSTR::from(AUTO_START_ARG))
                    .map_err(|error| format!("设置自启动参数失败: {error}"))?;
                if let Some(working_directory) = executable.parent() {
                    let working_directory = working_directory.to_string_lossy();
                    action
                        .SetWorkingDirectory(&BSTR::from(working_directory.as_ref()))
                        .map_err(|error| format!("设置自启动工作目录失败: {error}"))?;
                }
            }

            let settings = unsafe { definition.Settings() }
                .map_err(|error| format!("读取任务设置失败: {error}"))?;
            unsafe {
                settings
                    .SetMultipleInstances(TASK_INSTANCES_IGNORE_NEW)
                    .map_err(|error| format!("设置任务单实例策略失败: {error}"))?;
                settings
                    .SetDisallowStartIfOnBatteries(VARIANT_BOOL(0))
                    .map_err(|error| format!("设置电池启动策略失败: {error}"))?;
                settings
                    .SetStopIfGoingOnBatteries(VARIANT_BOOL(0))
                    .map_err(|error| format!("设置电池运行策略失败: {error}"))?;
                settings
                    .SetStartWhenAvailable(VARIANT_BOOL(-1))
                    .map_err(|error| format!("设置错过启动补偿失败: {error}"))?;
                settings
                    .SetExecutionTimeLimit(&BSTR::from("PT0S"))
                    .map_err(|error| format!("设置任务运行时限失败: {error}"))?;
                // Task Scheduler 默认使用偏低优先级；普通优先级可更快完成托盘创建。
                settings
                    .SetPriority(4)
                    .map_err(|error| format!("设置任务优先级失败: {error}"))?;
            }

            let user_variant = VARIANT::from(account.as_str());
            let empty = VARIANT::default();
            unsafe {
                root.RegisterTaskDefinition(
                    &BSTR::from(TASK_NAME),
                    &definition,
                    TASK_CREATE_OR_UPDATE.0,
                    &user_variant,
                    &empty,
                    TASK_LOGON_INTERACTIVE_TOKEN,
                    &empty,
                )
            }
            .map_err(|error| format!("注册快速自启动任务失败: {error}"))?;
            Ok(())
        })
    }

    pub fn remove() -> Result<(), String> {
        run_on_com_thread(|| {
            let service = task_service()?;
            let root = unsafe { service.GetFolder(&BSTR::from("\\")) }
                .map_err(|error| format!("打开任务计划根目录失败: {error}"))?;
            match unsafe { root.DeleteTask(&BSTR::from(TASK_NAME), 0) } {
                Ok(()) => Ok(()),
                Err(error) if is_not_found(&error) => Ok(()),
                Err(error) => Err(format!("删除快速自启动任务失败: {error}")),
            }
        })
    }

    pub fn is_enabled() -> Result<bool, String> {
        run_on_com_thread(|| {
            let service = task_service()?;
            let root = unsafe { service.GetFolder(&BSTR::from("\\")) }
                .map_err(|error| format!("打开任务计划根目录失败: {error}"))?;
            let task = match unsafe { root.GetTask(&BSTR::from(TASK_NAME)) } {
                Ok(task) => task,
                Err(error) if is_not_found(&error) => return Ok(false),
                Err(error) => return Err(format!("读取快速自启动任务失败: {error}")),
            };
            unsafe { task.Enabled() }
                .map(|enabled| enabled.0 != 0)
                .map_err(|error| format!("读取快速自启动任务状态失败: {error}"))
        })
    }
}

#[cfg(target_os = "windows")]
fn set_platform_auto_start(app_handle: &AppHandle, enabled: bool) -> Result<&'static str, String> {
    if enabled {
        let executable =
            std::env::current_exe().map_err(|error| format!("读取当前程序路径失败: {error}"))?;
        match windows_task::register(executable) {
            Ok(()) => {
                if let Err(error) = disable_legacy_auto_start(app_handle) {
                    log::warn!("[Startup] 快速自启动已启用，但旧启动项清理失败: {error}");
                }
                Ok("scheduled-task")
            }
            Err(task_error) => {
                log::warn!("[Startup] 快速自启动不可用，将使用兼容注册表启动项: {task_error}");
                enable_legacy_auto_start(app_handle)?;
                Ok("registry-fallback")
            }
        }
    } else {
        let task_result = windows_task::remove();
        let legacy_result = disable_legacy_auto_start(app_handle);
        match (task_result, legacy_result) {
            (Ok(()), Ok(())) => Ok("disabled"),
            (Err(task_error), Ok(())) => Err(task_error),
            (Ok(()), Err(legacy_error)) => Err(legacy_error),
            (Err(task_error), Err(legacy_error)) => Err(format!("{task_error}; {legacy_error}")),
        }
    }
}

#[cfg(not(target_os = "windows"))]
fn set_platform_auto_start(app_handle: &AppHandle, enabled: bool) -> Result<&'static str, String> {
    if enabled {
        enable_legacy_auto_start(app_handle)?;
        Ok("platform-default")
    } else {
        disable_legacy_auto_start(app_handle)?;
        Ok("disabled")
    }
}

#[cfg(target_os = "windows")]
fn platform_auto_start_enabled(app_handle: &AppHandle) -> Result<bool, String> {
    match windows_task::is_enabled() {
        Ok(true) => Ok(true),
        Ok(false) => legacy_auto_start_enabled(app_handle),
        Err(error) => {
            log::warn!("[Startup] 快速自启动状态读取失败，回退检查兼容启动项: {error}");
            legacy_auto_start_enabled(app_handle)
        }
    }
}

#[cfg(not(target_os = "windows"))]
fn platform_auto_start_enabled(app_handle: &AppHandle) -> Result<bool, String> {
    legacy_auto_start_enabled(app_handle)
}

#[tauri::command]
pub async fn set_auto_start_enabled(
    app_handle: AppHandle,
    enabled: bool,
) -> Result<String, String> {
    let platform_handle = app_handle.clone();
    let mode = tauri::async_runtime::spawn_blocking(move || {
        set_platform_auto_start(&platform_handle, enabled)
    })
    .await
    .map_err(|error| format!("配置自启动任务失败: {error}"))??;

    crate::json_config::set_app_config_value(&app_handle, "auto_start", enabled)?;
    log::info!("[Startup] auto-start enabled={enabled}, mode={mode}");
    Ok(mode.to_string())
}

#[tauri::command]
pub async fn is_auto_start_enabled(app_handle: AppHandle) -> Result<bool, String> {
    tauri::async_runtime::spawn_blocking(move || platform_auto_start_enabled(&app_handle))
        .await
        .map_err(|error| format!("读取自启动任务失败: {error}"))?
}

/// 升级旧版本后，把 HKCU Run 启动项迁移为用户登录任务。
/// 迁移失败时保留旧启动项，避免破坏已有的开机自启行为。
pub fn migrate_legacy_auto_start(app_handle: AppHandle) {
    #[cfg(target_os = "windows")]
    if cfg!(debug_assertions) {
        // 开发构建的 current_exe 指向 target/debug，不能覆盖已安装版本的登录任务。
        return;
    }

    #[cfg(target_os = "windows")]
    tauri::async_runtime::spawn_blocking(move || {
        let task_enabled = windows_task::is_enabled().unwrap_or(false);
        let legacy_enabled = legacy_auto_start_enabled(&app_handle).unwrap_or(false);
        if !task_enabled && !legacy_enabled {
            return;
        }

        let executable = match std::env::current_exe() {
            Ok(executable) => executable,
            Err(error) => {
                log::warn!("[Startup] 自动迁移时无法读取程序路径: {error}");
                return;
            }
        };
        match windows_task::register(executable) {
            Ok(()) => {
                if let Err(error) = disable_legacy_auto_start(&app_handle) {
                    log::warn!("[Startup] 自动迁移后清理旧启动项失败: {error}");
                } else {
                    log::info!("[Startup] legacy auto-start migrated to scheduled task");
                }
            }
            Err(error) => {
                log::warn!("[Startup] 快速自启动迁移失败，继续保留旧启动项: {error}");
            }
        }
    });

    #[cfg(not(target_os = "windows"))]
    let _ = app_handle;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn recognizes_current_and_legacy_auto_start_arguments() {
        assert!(is_auto_start_argument(AUTO_START_ARG));
        assert!(is_auto_start_argument("--flag1"));
        assert!(is_auto_start_argument("--flag2"));
        assert!(!is_auto_start_argument("--setup-restart"));
    }
}
