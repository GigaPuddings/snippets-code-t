#![allow(non_snake_case)]

use std::ffi::{c_void, CStr, OsStr};
use std::fs::{self, OpenOptions};
use std::io::Write;
use std::os::windows::ffi::OsStrExt;
use std::path::PathBuf;
use std::ptr::{null, null_mut};
use std::sync::atomic::{AtomicBool, AtomicPtr, AtomicU32, Ordering};
use std::sync::Mutex;
use std::thread;
use std::time::{Duration, SystemTime, UNIX_EPOCH};

use windows_sys::core::{BSTR, GUID, HRESULT, PCWSTR};
use windows_sys::Win32::Foundation::{
    CloseHandle, SysAllocString, SysFreeString, SysStringLen, BOOL, HINSTANCE, HWND, LPARAM, TRUE,
};
use windows_sys::Win32::System::LibraryLoader::{
    DisableThreadLibraryCalls, GetModuleFileNameW, GetProcAddress, LoadLibraryExW, LoadLibraryW,
    LOAD_LIBRARY_SEARCH_SYSTEM32,
};
use windows_sys::Win32::System::Threading::{CreateThread, GetCurrentProcessId};
use windows_sys::Win32::UI::WindowsAndMessaging::{
    EnumChildWindows, FindWindowExW, FindWindowW, GetClassNameW,
};

const DLL_PROCESS_ATTACH: u32 = 1;

const S_OK: HRESULT = 0;
const S_FALSE: HRESULT = 1;
const E_NOINTERFACE: HRESULT = 0x80004002u32 as i32;
const E_POINTER: HRESULT = 0x80004003u32 as i32;
const E_FAIL: HRESULT = 0x80004005u32 as i32;
const CLASS_E_NOAGGREGATION: HRESULT = 0x80040110u32 as i32;
const CLASS_E_CLASSNOTAVAILABLE: HRESULT = 0x80040111u32 as i32;
const ERROR_NOT_FOUND: u32 = 1168;

const ACCENT_DISABLED: i32 = 0;
const ACCENT_ENABLE_TRANSPARENTGRADIENT: i32 = 2;
const ACCENT_ENABLE_ACRYLICBLURBEHIND: i32 = 4;
const WCA_ACCENT_POLICY: i32 = 19;
const CLEAR_GRADIENT_COLOR: u32 = 0x00000000;
const NEAR_CLEAR_ACRYLIC_COLOR: u32 = 0x01000000;

type InstanceHandle = u64;

const IID_IUNKNOWN: GUID = GUID::from_u128(0x00000000_0000_0000_c000_000000000046);
const IID_ICLASS_FACTORY: GUID = GUID::from_u128(0x00000001_0000_0000_c000_000000000046);
const IID_IOBJECT_WITH_SITE: GUID = GUID::from_u128(0xfc4801a3_2ba9_11cf_a229_00aa003d7352);
const IID_IVISUAL_TREE_SERVICE_CALLBACK: GUID =
    GUID::from_u128(0xaa7a8931_80e4_4fec_8f3b_553f87b4966e);
const IID_IVISUAL_TREE_SERVICE_CALLBACK2: GUID =
    GUID::from_u128(0xbad9eb88_ae77_4397_b948_5fa2db0a19ea);
const IID_IVISUAL_TREE_SERVICE: GUID = GUID::from_u128(0xa593b11a_d17f_48bb_8f66_83910731c8a5);
const CLSID_SNIPPETS_TASKBAR_TAP: GUID = GUID::from_u128(0xe6b5f8be_2f1d_4d68_a21a_04f25a72a998);

static ENABLED_STATE: AtomicBool = AtomicBool::new(false);
static XAML_TAP_INITIALIZED: AtomicBool = AtomicBool::new(false);
static VISUAL_TREE_SERVICE: AtomicPtr<IVisualTreeService> = AtomicPtr::new(null_mut());
static TARGET_HANDLES: Mutex<Vec<InstanceHandle>> = Mutex::new(Vec::new());

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

#[repr(C)]
struct SourceInfo {
    FileName: BSTR,
    LineNumber: u32,
    ColumnNumber: u32,
    CharPosition: u32,
    Hash: BSTR,
}

#[repr(C)]
struct ParentChildRelation {
    Parent: InstanceHandle,
    Child: InstanceHandle,
    ChildIndex: u32,
}

#[repr(C)]
struct VisualElement {
    Handle: InstanceHandle,
    SrcInfo: SourceInfo,
    Type: BSTR,
    Name: BSTR,
    NumChildren: u32,
}

#[repr(C)]
struct PropertyChainSource {
    Handle: InstanceHandle,
    TargetType: BSTR,
    Name: BSTR,
    Source: i32,
    SrcInfo: SourceInfo,
}

#[repr(C)]
struct PropertyChainValue {
    Index: u32,
    Type: BSTR,
    DeclaringType: BSTR,
    ValueType: BSTR,
    ItemType: BSTR,
    Value: BSTR,
    Overridden: BOOL,
    MetadataBits: i64,
    PropertyName: BSTR,
    PropertyChainIndex: u32,
}

#[repr(C)]
struct IUnknownLike {
    lpVtbl: *const IUnknownLikeVtbl,
}

#[repr(C)]
struct IUnknownLikeVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut IUnknownLike,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut IUnknownLike) -> u32,
    Release: unsafe extern "system" fn(this: *mut IUnknownLike) -> u32,
}

#[repr(C)]
struct IVisualTreeService {
    lpVtbl: *const IVisualTreeServiceVtbl,
}

#[repr(C)]
struct IVisualTreeServiceVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut IVisualTreeService,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut IVisualTreeService) -> u32,
    Release: unsafe extern "system" fn(this: *mut IVisualTreeService) -> u32,
    AdviseVisualTreeChange:
        unsafe extern "system" fn(this: *mut IVisualTreeService, callback: *mut c_void) -> HRESULT,
    UnadviseVisualTreeChange:
        unsafe extern "system" fn(this: *mut IVisualTreeService, callback: *mut c_void) -> HRESULT,
    GetEnums: unsafe extern "system" fn(
        this: *mut IVisualTreeService,
        count: *mut u32,
        enums: *mut *mut c_void,
    ) -> HRESULT,
    CreateInstance: unsafe extern "system" fn(
        this: *mut IVisualTreeService,
        type_name: BSTR,
        value: BSTR,
        instance_handle: *mut InstanceHandle,
    ) -> HRESULT,
    GetPropertyValuesChain: unsafe extern "system" fn(
        this: *mut IVisualTreeService,
        instance_handle: InstanceHandle,
        source_count: *mut u32,
        property_sources: *mut *mut PropertyChainSource,
        property_count: *mut u32,
        property_values: *mut *mut PropertyChainValue,
    ) -> HRESULT,
    SetProperty: unsafe extern "system" fn(
        this: *mut IVisualTreeService,
        instance_handle: InstanceHandle,
        value: InstanceHandle,
        property_index: u32,
    ) -> HRESULT,
    ClearProperty: unsafe extern "system" fn(
        this: *mut IVisualTreeService,
        instance_handle: InstanceHandle,
        property_index: u32,
    ) -> HRESULT,
}

#[repr(C)]
struct ClassFactory {
    lpVtbl: *const ClassFactoryVtbl,
    ref_count: AtomicU32,
}

#[repr(C)]
struct ClassFactoryVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut ClassFactory,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut ClassFactory) -> u32,
    Release: unsafe extern "system" fn(this: *mut ClassFactory) -> u32,
    CreateInstance: unsafe extern "system" fn(
        this: *mut ClassFactory,
        outer: *mut c_void,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    LockServer: unsafe extern "system" fn(this: *mut ClassFactory, lock: BOOL) -> HRESULT,
}

#[repr(C)]
struct TapObject {
    lpVtbl: *const TapObjectVtbl,
    ref_count: AtomicU32,
    site: AtomicPtr<c_void>,
}

#[repr(C)]
struct TapObjectVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut TapObject,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut TapObject) -> u32,
    Release: unsafe extern "system" fn(this: *mut TapObject) -> u32,
    SetSite: unsafe extern "system" fn(this: *mut TapObject, site: *mut c_void) -> HRESULT,
    GetSite: unsafe extern "system" fn(
        this: *mut TapObject,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
}

#[repr(C)]
struct VisualTreeWatcher {
    lpVtbl: *const VisualTreeWatcherVtbl,
    ref_count: AtomicU32,
    service: AtomicPtr<IVisualTreeService>,
}

#[repr(C)]
struct VisualTreeWatcherVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut VisualTreeWatcher,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut VisualTreeWatcher) -> u32,
    Release: unsafe extern "system" fn(this: *mut VisualTreeWatcher) -> u32,
    OnVisualTreeChange: unsafe extern "system" fn(
        this: *mut VisualTreeWatcher,
        relation: ParentChildRelation,
        element: VisualElement,
        mutation_type: i32,
    ) -> HRESULT,
    OnElementStateChanged: unsafe extern "system" fn(
        this: *mut VisualTreeWatcher,
        element: InstanceHandle,
        element_state: i32,
        context: PCWSTR,
    ) -> HRESULT,
}

#[repr(C)]
struct AdviseThreadParam {
    service: *mut IVisualTreeService,
    watcher: *mut VisualTreeWatcher,
}

type SetWindowCompositionAttributeFn =
    unsafe extern "system" fn(HWND, *mut WindowCompositionAttribData) -> BOOL;

type InitializeXamlDiagnosticsExFn = unsafe extern "system" fn(
    endpoint_name: PCWSTR,
    pid: u32,
    dll_xaml_diagnostics: PCWSTR,
    tap_dll_name: PCWSTR,
    tap_clsid: GUID,
    initialization_data: PCWSTR,
) -> HRESULT;

static CLASS_FACTORY_VTBL: ClassFactoryVtbl = ClassFactoryVtbl {
    QueryInterface: class_factory_query_interface,
    AddRef: class_factory_add_ref,
    Release: class_factory_release,
    CreateInstance: class_factory_create_instance,
    LockServer: class_factory_lock_server,
};

static TAP_OBJECT_VTBL: TapObjectVtbl = TapObjectVtbl {
    QueryInterface: tap_query_interface,
    AddRef: tap_add_ref,
    Release: tap_release,
    SetSite: tap_set_site,
    GetSite: tap_get_site,
};

static VISUAL_TREE_WATCHER_VTBL: VisualTreeWatcherVtbl = VisualTreeWatcherVtbl {
    QueryInterface: watcher_query_interface,
    AddRef: watcher_add_ref,
    Release: watcher_release,
    OnVisualTreeChange: watcher_on_visual_tree_change,
    OnElementStateChanged: watcher_on_element_state_changed,
};

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

#[no_mangle]
pub unsafe extern "system" fn DllCanUnloadNow() -> HRESULT {
    S_FALSE
}

#[no_mangle]
pub unsafe extern "system" fn DllGetClassObject(
    clsid: *const GUID,
    riid: *const GUID,
    ppv: *mut *mut c_void,
) -> HRESULT {
    if ppv.is_null() {
        return E_POINTER;
    }

    *ppv = null_mut();
    if clsid.is_null() || !guid_eq(&*clsid, &CLSID_SNIPPETS_TASKBAR_TAP) {
        return CLASS_E_CLASSNOTAVAILABLE;
    }

    let factory = Box::into_raw(Box::new(ClassFactory {
        lpVtbl: &CLASS_FACTORY_VTBL,
        ref_count: AtomicU32::new(1),
    }));
    let hr = class_factory_query_interface(factory, riid, ppv);
    class_factory_release(factory);
    hr
}

unsafe extern "system" fn agent_thread(module: *mut c_void) -> u32 {
    run_agent(module as HINSTANCE);
    0
}

fn run_agent(module: HINSTANCE) {
    let initial_enabled = read_enabled_state();
    ENABLED_STATE.store(initial_enabled, Ordering::SeqCst);
    log_line(&format!("agent monitor loaded enabled={initial_enabled}"));

    apply_runtime_layers(module, initial_enabled, "initial");

    let mut last_enabled = initial_enabled;
    loop {
        thread::sleep(Duration::from_secs(2));
        let enabled = read_enabled_state();

        if enabled != last_enabled {
            ENABLED_STATE.store(enabled, Ordering::SeqCst);
            log_line(&format!("state changed enabled={enabled}"));
            apply_runtime_layers(module, enabled, "state-change");
            last_enabled = enabled;
        } else if enabled && !XAML_TAP_INITIALIZED.load(Ordering::SeqCst) {
            apply_runtime_layers(module, enabled, "retry-xaml-init");
        }
    }
}

fn apply_runtime_layers(module: HINSTANCE, enabled: bool, reason: &str) {
    match apply_taskbar_transparency(enabled) {
        Ok(summary) => log_line(&format!("accent apply finished reason={reason}: {summary}")),
        Err(error) => log_line(&format!("accent apply failed reason={reason}: {error}")),
    }

    if enabled {
        match initialize_xaml_tap(module) {
            Ok(()) => log_line(&format!("xaml tap active reason={reason}")),
            Err(error) => log_line(&format!("xaml tap init failed reason={reason}: {error}")),
        }
    }

    apply_known_xaml_targets(enabled, reason);
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

fn hresult_from_win32(error: u32) -> HRESULT {
    if error == 0 {
        0
    } else {
        ((error & 0x0000ffff) | 0x80070000) as HRESULT
    }
}

fn hr_hex(hr: HRESULT) -> String {
    format!("0x{:08X}", hr as u32)
}

fn guid_eq(left: &GUID, right: &GUID) -> bool {
    left.data1 == right.data1
        && left.data2 == right.data2
        && left.data3 == right.data3
        && left.data4 == right.data4
}

unsafe fn bstr_to_string(value: BSTR) -> String {
    if value.is_null() {
        return String::new();
    }

    let len = SysStringLen(value);
    String::from_utf16_lossy(std::slice::from_raw_parts(value, len as usize))
}

unsafe fn make_bstr(value: &str) -> BSTR {
    let wide = wide_null(value);
    SysAllocString(wide.as_ptr())
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

fn initialize_xaml_tap(module: HINSTANCE) -> Result<(), String> {
    if XAML_TAP_INITIALIZED.load(Ordering::SeqCst) {
        return Ok(());
    }

    unsafe {
        let mut module_path = [0u16; 32768];
        let path_len =
            GetModuleFileNameW(module, module_path.as_mut_ptr(), module_path.len() as u32);
        if path_len == 0 {
            return Err("GetModuleFileNameW returned empty DLL path".to_string());
        }

        let xaml_dll = wide_null("Windows.UI.Xaml.dll");
        let xaml_module =
            LoadLibraryExW(xaml_dll.as_ptr(), null_mut(), LOAD_LIBRARY_SEARCH_SYSTEM32);
        if xaml_module.is_null() {
            return Err("LoadLibraryExW(Windows.UI.Xaml.dll) failed".to_string());
        }

        let proc_name = CStr::from_bytes_with_nul_unchecked(b"InitializeXamlDiagnosticsEx\0");
        let proc = GetProcAddress(xaml_module, proc_name.as_ptr() as *const u8)
            .ok_or_else(|| "InitializeXamlDiagnosticsEx unavailable".to_string())?;
        let initialize = std::mem::transmute::<_, InitializeXamlDiagnosticsExFn>(proc);

        let empty = wide_null("");
        let not_found_hr = hresult_from_win32(ERROR_NOT_FOUND);
        let mut last_hr = E_FAIL;

        for index in 1..=10000 {
            let endpoint = wide_null(&format!("VisualDiagConnection{index}"));
            let hr = initialize(
                endpoint.as_ptr(),
                GetCurrentProcessId(),
                empty.as_ptr(),
                module_path.as_ptr(),
                CLSID_SNIPPETS_TASKBAR_TAP,
                null(),
            );
            last_hr = hr;

            if hr == S_OK {
                XAML_TAP_INITIALIZED.store(true, Ordering::SeqCst);
                log_line(&format!(
                    "xaml diagnostics initialized endpoint=VisualDiagConnection{index} hr={}",
                    hr_hex(hr)
                ));
                return Ok(());
            }

            if hr != not_found_hr {
                break;
            }
        }

        Err(format!(
            "InitializeXamlDiagnosticsEx failed hr={}",
            hr_hex(last_hr)
        ))
    }
}

unsafe extern "system" fn class_factory_query_interface(
    this: *mut ClassFactory,
    riid: *const GUID,
    ppv: *mut *mut c_void,
) -> HRESULT {
    if ppv.is_null() {
        return E_POINTER;
    }

    *ppv = null_mut();
    if riid.is_null() {
        return E_NOINTERFACE;
    }

    if guid_eq(&*riid, &IID_IUNKNOWN) || guid_eq(&*riid, &IID_ICLASS_FACTORY) {
        class_factory_add_ref(this);
        *ppv = this as *mut c_void;
        S_OK
    } else {
        E_NOINTERFACE
    }
}

unsafe extern "system" fn class_factory_add_ref(this: *mut ClassFactory) -> u32 {
    (*this).ref_count.fetch_add(1, Ordering::Relaxed) + 1
}

unsafe extern "system" fn class_factory_release(this: *mut ClassFactory) -> u32 {
    let remaining = (*this).ref_count.fetch_sub(1, Ordering::Release) - 1;
    if remaining == 0 {
        std::sync::atomic::fence(Ordering::Acquire);
        drop(Box::from_raw(this));
    }
    remaining
}

unsafe extern "system" fn class_factory_create_instance(
    _this: *mut ClassFactory,
    outer: *mut c_void,
    riid: *const GUID,
    ppv: *mut *mut c_void,
) -> HRESULT {
    if ppv.is_null() {
        return E_POINTER;
    }

    *ppv = null_mut();
    if !outer.is_null() {
        return CLASS_E_NOAGGREGATION;
    }

    let tap = Box::into_raw(Box::new(TapObject {
        lpVtbl: &TAP_OBJECT_VTBL,
        ref_count: AtomicU32::new(1),
        site: AtomicPtr::new(null_mut()),
    }));
    let hr = tap_query_interface(tap, riid, ppv);
    tap_release(tap);
    log_line(&format!("tap CreateInstance hr={}", hr_hex(hr)));
    hr
}

unsafe extern "system" fn class_factory_lock_server(
    _this: *mut ClassFactory,
    _lock: BOOL,
) -> HRESULT {
    S_OK
}

unsafe extern "system" fn tap_query_interface(
    this: *mut TapObject,
    riid: *const GUID,
    ppv: *mut *mut c_void,
) -> HRESULT {
    if ppv.is_null() {
        return E_POINTER;
    }

    *ppv = null_mut();
    if riid.is_null() {
        return E_NOINTERFACE;
    }

    if guid_eq(&*riid, &IID_IUNKNOWN) || guid_eq(&*riid, &IID_IOBJECT_WITH_SITE) {
        tap_add_ref(this);
        *ppv = this as *mut c_void;
        S_OK
    } else {
        E_NOINTERFACE
    }
}

unsafe extern "system" fn tap_add_ref(this: *mut TapObject) -> u32 {
    (*this).ref_count.fetch_add(1, Ordering::Relaxed) + 1
}

unsafe extern "system" fn tap_release(this: *mut TapObject) -> u32 {
    let remaining = (*this).ref_count.fetch_sub(1, Ordering::Release) - 1;
    if remaining == 0 {
        std::sync::atomic::fence(Ordering::Acquire);
        drop(Box::from_raw(this));
    }
    remaining
}

unsafe extern "system" fn tap_set_site(this: *mut TapObject, site: *mut c_void) -> HRESULT {
    (*this).site.store(site, Ordering::SeqCst);
    if site.is_null() {
        log_line("tap SetSite called with null site");
        return S_OK;
    }

    let site_unknown = site as *mut IUnknownLike;
    let mut service: *mut c_void = null_mut();
    let hr = ((*(*site_unknown).lpVtbl).QueryInterface)(
        site_unknown,
        &IID_IVISUAL_TREE_SERVICE,
        &mut service,
    );
    if hr != S_OK || service.is_null() {
        log_line(&format!(
            "tap SetSite QueryInterface(IVisualTreeService) failed hr={}",
            hr_hex(hr)
        ));
        return hr;
    }

    let service = service as *mut IVisualTreeService;
    VISUAL_TREE_SERVICE.store(service, Ordering::SeqCst);

    let watcher = Box::into_raw(Box::new(VisualTreeWatcher {
        lpVtbl: &VISUAL_TREE_WATCHER_VTBL,
        ref_count: AtomicU32::new(1),
        service: AtomicPtr::new(service),
    }));

    let param = Box::into_raw(Box::new(AdviseThreadParam { service, watcher }));
    let thread = CreateThread(
        null(),
        0,
        Some(advise_visual_tree_thread),
        param as *mut c_void,
        0,
        null_mut(),
    );

    if thread.is_null() {
        drop(Box::from_raw(param));
        let advise_hr =
            ((*(*service).lpVtbl).AdviseVisualTreeChange)(service, watcher as *mut c_void);
        log_line(&format!(
            "tap SetSite AdviseVisualTreeChange direct hr={}",
            hr_hex(advise_hr)
        ));
        return advise_hr;
    }

    CloseHandle(thread);
    log_line("tap SetSite queued AdviseVisualTreeChange worker");
    S_OK
}

unsafe extern "system" fn advise_visual_tree_thread(param: *mut c_void) -> u32 {
    let param = Box::from_raw(param as *mut AdviseThreadParam);
    let hr = ((*(*param.service).lpVtbl).AdviseVisualTreeChange)(
        param.service,
        param.watcher as *mut c_void,
    );
    log_line(&format!(
        "tap AdviseVisualTreeChange worker hr={}",
        hr_hex(hr)
    ));
    hr as u32
}

unsafe extern "system" fn tap_get_site(
    this: *mut TapObject,
    riid: *const GUID,
    ppv: *mut *mut c_void,
) -> HRESULT {
    if ppv.is_null() {
        return E_POINTER;
    }

    *ppv = null_mut();
    let site = (*this).site.load(Ordering::SeqCst);
    if site.is_null() {
        return E_FAIL;
    }

    let site_unknown = site as *mut IUnknownLike;
    ((*(*site_unknown).lpVtbl).QueryInterface)(site_unknown, riid, ppv)
}

unsafe extern "system" fn watcher_query_interface(
    this: *mut VisualTreeWatcher,
    riid: *const GUID,
    ppv: *mut *mut c_void,
) -> HRESULT {
    if ppv.is_null() {
        return E_POINTER;
    }

    *ppv = null_mut();
    if riid.is_null() {
        return E_NOINTERFACE;
    }

    if guid_eq(&*riid, &IID_IUNKNOWN)
        || guid_eq(&*riid, &IID_IVISUAL_TREE_SERVICE_CALLBACK)
        || guid_eq(&*riid, &IID_IVISUAL_TREE_SERVICE_CALLBACK2)
    {
        watcher_add_ref(this);
        *ppv = this as *mut c_void;
        S_OK
    } else {
        E_NOINTERFACE
    }
}

unsafe extern "system" fn watcher_add_ref(this: *mut VisualTreeWatcher) -> u32 {
    (*this).ref_count.fetch_add(1, Ordering::Relaxed) + 1
}

unsafe extern "system" fn watcher_release(this: *mut VisualTreeWatcher) -> u32 {
    let remaining = (*this).ref_count.fetch_sub(1, Ordering::Release) - 1;
    if remaining == 0 {
        std::sync::atomic::fence(Ordering::Acquire);
        drop(Box::from_raw(this));
    }
    remaining
}

unsafe extern "system" fn watcher_on_visual_tree_change(
    this: *mut VisualTreeWatcher,
    _relation: ParentChildRelation,
    element: VisualElement,
    mutation_type: i32,
) -> HRESULT {
    if mutation_type != 0 {
        return S_OK;
    }

    let element_type = bstr_to_string(element.Type);
    let element_name = bstr_to_string(element.Name);
    if !is_target_taskbar_xaml_element(&element_type, &element_name) {
        return S_OK;
    }

    remember_target_handle(element.Handle);
    let enabled = ENABLED_STATE.load(Ordering::SeqCst);
    let service = (*this).service.load(Ordering::SeqCst);

    log_line(&format!(
        "xaml target added handle={} type={} name={} enabled={enabled}",
        element.Handle, element_type, element_name
    ));

    match apply_xaml_element(service, element.Handle, enabled) {
        Ok(summary) => log_line(&format!(
            "xaml target apply succeeded handle={} name={} {summary}",
            element.Handle, element_name
        )),
        Err(error) => log_line(&format!(
            "xaml target apply failed handle={} name={} error={error}",
            element.Handle, element_name
        )),
    }

    S_OK
}

unsafe extern "system" fn watcher_on_element_state_changed(
    _this: *mut VisualTreeWatcher,
    element: InstanceHandle,
    element_state: i32,
    _context: PCWSTR,
) -> HRESULT {
    log_line(&format!(
        "xaml element state changed handle={element} state={element_state}"
    ));
    S_OK
}

fn is_target_taskbar_xaml_element(element_type: &str, element_name: &str) -> bool {
    (element_name == "BackgroundFill" || element_name == "BackgroundStroke")
        && element_type.contains("Rectangle")
}

fn remember_target_handle(handle: InstanceHandle) {
    if let Ok(mut handles) = TARGET_HANDLES.lock() {
        if !handles.contains(&handle) {
            handles.push(handle);
        }
    }
}

fn apply_known_xaml_targets(enabled: bool, reason: &str) {
    let service = VISUAL_TREE_SERVICE.load(Ordering::SeqCst);
    if service.is_null() {
        return;
    }

    let handles = TARGET_HANDLES
        .lock()
        .map(|handles| handles.clone())
        .unwrap_or_default();
    if handles.is_empty() {
        return;
    }

    let mut success_count = 0usize;
    let mut failed_count = 0usize;

    for handle in handles {
        match unsafe { apply_xaml_element(service, handle, enabled) } {
            Ok(_) => success_count += 1,
            Err(error) => {
                failed_count += 1;
                log_line(&format!(
                    "known xaml target apply failed reason={reason} handle={handle} error={error}"
                ));
            }
        }
    }

    log_line(&format!(
        "known xaml targets applied reason={reason} enabled={enabled} success_count={success_count} failed_count={failed_count}"
    ));
}

unsafe fn apply_xaml_element(
    service: *mut IVisualTreeService,
    element_handle: InstanceHandle,
    enabled: bool,
) -> Result<String, String> {
    if service.is_null() {
        return Err("IVisualTreeService is null".to_string());
    }

    let fill_property_index = find_property_index(service, element_handle, "Fill")?
        .ok_or_else(|| "Fill property was not found on target Rectangle".to_string())?;

    if enabled {
        let brush_handle = create_transparent_brush(service)?;
        let hr = ((*(*service).lpVtbl).SetProperty)(
            service,
            element_handle,
            brush_handle,
            fill_property_index,
        );
        if hr == S_OK {
            Ok(format!(
                "set Fill=Transparent property_index={fill_property_index} brush_handle={brush_handle}"
            ))
        } else {
            Err(format!(
                "SetProperty(Fill=Transparent) failed hr={}",
                hr_hex(hr)
            ))
        }
    } else {
        let hr = ((*(*service).lpVtbl).ClearProperty)(service, element_handle, fill_property_index);
        if hr == S_OK {
            Ok(format!("cleared Fill property_index={fill_property_index}"))
        } else {
            Err(format!("ClearProperty(Fill) failed hr={}", hr_hex(hr)))
        }
    }
}

unsafe fn find_property_index(
    service: *mut IVisualTreeService,
    element_handle: InstanceHandle,
    property_name: &str,
) -> Result<Option<u32>, String> {
    let mut source_count = 0u32;
    let mut sources: *mut PropertyChainSource = null_mut();
    let mut property_count = 0u32;
    let mut values: *mut PropertyChainValue = null_mut();

    let hr = ((*(*service).lpVtbl).GetPropertyValuesChain)(
        service,
        element_handle,
        &mut source_count,
        &mut sources,
        &mut property_count,
        &mut values,
    );

    if hr != S_OK {
        return Err(format!("GetPropertyValuesChain failed hr={}", hr_hex(hr)));
    }

    if values.is_null() || property_count == 0 {
        return Ok(None);
    }

    let properties = std::slice::from_raw_parts(values, property_count as usize);
    let mut logged_properties = Vec::new();

    for property in properties {
        let name = bstr_to_string(property.PropertyName);
        if logged_properties.len() < 16 {
            logged_properties.push(format!("{}:{}", property.Index, name));
        }

        if name == property_name {
            log_line(&format!(
                "xaml property match handle={element_handle} property={} index={} sample=[{}]",
                property_name,
                property.Index,
                logged_properties.join(", ")
            ));
            return Ok(Some(property.Index));
        }
    }

    log_line(&format!(
        "xaml property not found handle={element_handle} wanted={} property_count={} sample=[{}]",
        property_name,
        property_count,
        logged_properties.join(", ")
    ));
    Ok(None)
}

unsafe fn create_transparent_brush(
    service: *mut IVisualTreeService,
) -> Result<InstanceHandle, String> {
    let type_name = make_bstr("Windows.UI.Xaml.Media.SolidColorBrush");
    let value = make_bstr("Transparent");
    if type_name.is_null() || value.is_null() {
        if !type_name.is_null() {
            SysFreeString(type_name);
        }
        if !value.is_null() {
            SysFreeString(value);
        }
        return Err("SysAllocString failed for transparent brush".to_string());
    }

    let mut brush_handle = 0u64;
    let hr = ((*(*service).lpVtbl).CreateInstance)(service, type_name, value, &mut brush_handle);
    SysFreeString(type_name);
    SysFreeString(value);

    if hr == S_OK && brush_handle != 0 {
        Ok(brush_handle)
    } else {
        Err(format!(
            "CreateInstance(SolidColorBrush, Transparent) failed hr={} brush_handle={brush_handle}",
            hr_hex(hr)
        ))
    }
}
