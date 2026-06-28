#![allow(non_snake_case)]

use std::collections::HashMap;
use std::ffi::{c_void, CStr, OsStr};
use std::fs::{self, OpenOptions};
use std::io::Write;
use std::os::windows::ffi::OsStrExt;
use std::path::PathBuf;
use std::ptr::{null, null_mut};
use std::sync::atomic::{AtomicBool, AtomicPtr, AtomicU32, Ordering};
use std::sync::{LazyLock, Mutex};
use std::thread;
use std::time::{Duration, SystemTime, UNIX_EPOCH};

use windows_sys::core::{BSTR, GUID, HRESULT, PCWSTR};
use windows_sys::Win32::Foundation::{
    CloseHandle, SysAllocString, SysFreeString, SysStringLen, BOOL, HINSTANCE, HWND, LPARAM, TRUE,
};
use windows_sys::Win32::System::LibraryLoader::{
    DisableThreadLibraryCalls, GetModuleFileNameW, GetProcAddress, LoadLibraryExW,
    LOAD_LIBRARY_SEARCH_SYSTEM32,
};
use windows_sys::Win32::System::Threading::{CreateThread, GetCurrentProcessId};
use windows_sys::Win32::UI::WindowsAndMessaging::{
    EnumChildWindows, FindWindowExW, FindWindowW, GetClassNameW, SendMessageTimeoutW,
    SMTO_ABORTIFHUNG, WM_SETTINGCHANGE, WM_THEMECHANGED,
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

type InstanceHandle = u64;
type HString = *mut c_void;

const AGENT_PROTOCOL_VERSION: u32 = 12;
const AGENT_LOG_FILE_NAME: &str = "taskbar-transparency-agent.log";
const AGENT_POLL_INTERVAL: Duration = Duration::from_millis(100);
const MAX_PENDING_NUDGES: u32 = 8;

const DISPATCH_ACTION_APPLY: u32 = 1;
const DISPATCH_ACTION_RESTORE: u32 = 2;
const CORE_DISPATCHER_PRIORITY_NORMAL: i32 = 0;

const IID_IUNKNOWN: GUID = GUID::from_u128(0x00000000_0000_0000_c000_000000000046);
const IID_IAGILE_OBJECT: GUID = GUID::from_u128(0x94ea2b94_e9cc_49e0_c0ff_ee64ca8f5b90);
const IID_ICLASS_FACTORY: GUID = GUID::from_u128(0x00000001_0000_0000_c000_000000000046);
const IID_IOBJECT_WITH_SITE: GUID = GUID::from_u128(0xfc4801a3_2ba9_11cf_a229_00aa003d7352);
const IID_IVISUAL_TREE_SERVICE_CALLBACK: GUID =
    GUID::from_u128(0xaa7a8931_80e4_4fec_8f3b_553f87b4966e);
const IID_IVISUAL_TREE_SERVICE_CALLBACK2: GUID =
    GUID::from_u128(0xbad9eb88_ae77_4397_b948_5fa2db0a19ea);
const IID_IVISUAL_TREE_SERVICE: GUID = GUID::from_u128(0xa593b11a_d17f_48bb_8f66_83910731c8a5);
const IID_IXAML_DIAGNOSTICS: GUID = GUID::from_u128(0x18c9e2b6_3f43_4116_9f2b_ff935d7770d2);
const IID_ICORE_DISPATCHER: GUID = GUID::from_u128(0x60db2fa8_b705_4fde_a7d6_ebbb1891d39e);
const IID_DISPATCHED_HANDLER: GUID = GUID::from_u128(0xd1f276c4_98d8_4636_bf49_eb79507548e9);
const IID_ISHAPE: GUID = GUID::from_u128(0x786f2b75_9aa0_454d_ae06_a2466e37c832);
const IID_IBRUSH: GUID = GUID::from_u128(0x8806a321_1e06_422c_a1cc_01696559e021);
const IID_ISOLID_COLOR_BRUSH_FACTORY: GUID =
    GUID::from_u128(0xd935ce0c_86f5_4da6_8a27_b1619ef7f92b);
const CLSID_SNIPPETS_TASKBAR_TAP: GUID = GUID::from_u128(0xe6b5f8be_2f1d_4d68_a21a_04f25a72a998);

static ENABLED_STATE: AtomicBool = AtomicBool::new(false);
static ACRYLIC_STATE: AtomicBool = AtomicBool::new(false);
static XAML_TAP_INITIALIZED: AtomicBool = AtomicBool::new(false);
static PENDING_XAML_APPLY: AtomicBool = AtomicBool::new(false);
static PENDING_XAML_RESTORE: AtomicBool = AtomicBool::new(false);
static PENDING_XAML_APPLY_NUDGES: AtomicU32 = AtomicU32::new(0);
static PENDING_XAML_RESTORE_NUDGES: AtomicU32 = AtomicU32::new(0);
static VISUAL_TREE_SERVICE: AtomicPtr<IVisualTreeService> = AtomicPtr::new(null_mut());
static XAML_DIAGNOSTICS: AtomicPtr<IXamlDiagnostics> = AtomicPtr::new(null_mut());
static XAML_DISPATCHER: AtomicPtr<ICoreDispatcher> = AtomicPtr::new(null_mut());

/// Object-level backups inspired by TranslucentTB/Windhawk: keep a live Shape
/// object and its original Brush object, then restore Shape.Fill(originalBrush).
/// This deliberately avoids storing VisualDiagnostics InstanceHandle values as
/// long-lived "original" values; those handles can expire across XAML rebuilds.
static XAML_BRUSH_BACKUPS: LazyLock<Mutex<HashMap<InstanceHandle, XamlBrushBackup>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

/// Property-level backups for non-Shape taskbar surfaces such as Grid/Border
/// backgrounds. Some Windows 11 builds keep an extra taskbar frame background
/// behind the BackgroundFill/BackgroundStroke rectangles.
static XAML_PROPERTY_BACKUPS: LazyLock<Mutex<HashMap<(InstanceHandle, u32), XamlPropertyBackup>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

/// Track taskbar background rectangles already seen by the TAP callback so state
/// changes can be replayed without waiting for a full visual-tree rebuild.
static DISCOVERED_TARGET_ELEMENTS: LazyLock<Mutex<HashMap<InstanceHandle, String>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

/// Old agent versions wrote item-level hover backgrounds. Track those elements
/// without modifying them so disabling transparency can clean stale overrides.
static DISCOVERED_LEGACY_ITEM_BACKGROUNDS: LazyLock<Mutex<HashMap<InstanceHandle, String>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

#[derive(Clone)]
struct XamlBrushBackup {
    shape: usize,
    original_brush: usize,
    element_name: String,
}

#[derive(Clone)]
struct XamlPropertyBackup {
    original_value: InstanceHandle,
    property_name: String,
    element_name: String,
}

#[derive(Clone)]
struct XamlPropertyInfo {
    index: u32,
    type_name: String,
    value_type: String,
    value: String,
    metadata_bits: i64,
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
struct ICoreDispatcher {
    lpVtbl: *const ICoreDispatcherVtbl,
}

#[repr(C)]
struct ICoreDispatcherVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut ICoreDispatcher,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut ICoreDispatcher) -> u32,
    Release: unsafe extern "system" fn(this: *mut ICoreDispatcher) -> u32,
    GetIids: unsafe extern "system" fn(
        this: *mut ICoreDispatcher,
        iid_count: *mut u32,
        iids: *mut *mut GUID,
    ) -> HRESULT,
    GetRuntimeClassName:
        unsafe extern "system" fn(this: *mut ICoreDispatcher, class_name: *mut HString) -> HRESULT,
    GetTrustLevel:
        unsafe extern "system" fn(this: *mut ICoreDispatcher, trust_level: *mut i32) -> HRESULT,
    get_HasThreadAccess:
        unsafe extern "system" fn(this: *mut ICoreDispatcher, value: *mut bool) -> HRESULT,
    ProcessEvents: unsafe extern "system" fn(this: *mut ICoreDispatcher, options: i32) -> HRESULT,
    RunAsync: unsafe extern "system" fn(
        this: *mut ICoreDispatcher,
        priority: i32,
        agile_callback: *mut c_void,
        async_action: *mut *mut c_void,
    ) -> HRESULT,
    RunIdleAsync: unsafe extern "system" fn(
        this: *mut ICoreDispatcher,
        agile_callback: *mut c_void,
        async_action: *mut *mut c_void,
    ) -> HRESULT,
}

#[repr(C)]
struct IXamlDiagnostics {
    lpVtbl: *const IXamlDiagnosticsVtbl,
}

#[repr(C)]
struct IXamlDiagnosticsVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut IXamlDiagnostics,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut IXamlDiagnostics) -> u32,
    Release: unsafe extern "system" fn(this: *mut IXamlDiagnostics) -> u32,
    GetDispatcher: unsafe extern "system" fn(
        this: *mut IXamlDiagnostics,
        dispatcher: *mut *mut c_void,
    ) -> HRESULT,
    GetUiLayer:
        unsafe extern "system" fn(this: *mut IXamlDiagnostics, layer: *mut *mut c_void) -> HRESULT,
    GetApplication: unsafe extern "system" fn(
        this: *mut IXamlDiagnostics,
        application: *mut *mut c_void,
    ) -> HRESULT,
    GetIInspectableFromHandle: unsafe extern "system" fn(
        this: *mut IXamlDiagnostics,
        instance_handle: InstanceHandle,
        instance: *mut *mut c_void,
    ) -> HRESULT,
    GetHandleFromIInspectable: unsafe extern "system" fn(
        this: *mut IXamlDiagnostics,
        instance: *mut c_void,
        instance_handle: *mut InstanceHandle,
    ) -> HRESULT,
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
struct IBrush {
    lpVtbl: *const IUnknownLikeVtbl,
}

#[repr(C)]
struct ISolidColorBrush {
    lpVtbl: *const IUnknownLikeVtbl,
}

#[repr(C)]
struct IShape {
    lpVtbl: *const IShapeVtbl,
}

#[repr(C)]
struct IShapeVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut IShape,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut IShape) -> u32,
    Release: unsafe extern "system" fn(this: *mut IShape) -> u32,
    GetIids: unsafe extern "system" fn(
        this: *mut IShape,
        iid_count: *mut u32,
        iids: *mut *mut GUID,
    ) -> HRESULT,
    GetRuntimeClassName:
        unsafe extern "system" fn(this: *mut IShape, class_name: *mut HString) -> HRESULT,
    GetTrustLevel: unsafe extern "system" fn(this: *mut IShape, trust_level: *mut i32) -> HRESULT,
    get_Fill: unsafe extern "system" fn(this: *mut IShape, value: *mut *mut IBrush) -> HRESULT,
    put_Fill: unsafe extern "system" fn(this: *mut IShape, value: *mut IBrush) -> HRESULT,
}

#[repr(C)]
#[derive(Clone, Copy)]
struct WindowsUIColor {
    A: u8,
    R: u8,
    G: u8,
    B: u8,
}

#[repr(C)]
struct ISolidColorBrushFactory {
    lpVtbl: *const ISolidColorBrushFactoryVtbl,
}

#[repr(C)]
struct ISolidColorBrushFactoryVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut ISolidColorBrushFactory,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut ISolidColorBrushFactory) -> u32,
    Release: unsafe extern "system" fn(this: *mut ISolidColorBrushFactory) -> u32,
    GetIids: unsafe extern "system" fn(
        this: *mut ISolidColorBrushFactory,
        iid_count: *mut u32,
        iids: *mut *mut GUID,
    ) -> HRESULT,
    GetRuntimeClassName: unsafe extern "system" fn(
        this: *mut ISolidColorBrushFactory,
        class_name: *mut HString,
    ) -> HRESULT,
    GetTrustLevel: unsafe extern "system" fn(
        this: *mut ISolidColorBrushFactory,
        trust_level: *mut i32,
    ) -> HRESULT,
    CreateInstanceWithColor: unsafe extern "system" fn(
        this: *mut ISolidColorBrushFactory,
        color: WindowsUIColor,
        value: *mut *mut ISolidColorBrush,
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
    diagnostics: AtomicPtr<IXamlDiagnostics>,
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
struct DispatchedHandler {
    lpVtbl: *const DispatchedHandlerVtbl,
    ref_count: AtomicU32,
    action: u32,
    acrylic: BOOL,
}

#[repr(C)]
struct DispatchedHandlerVtbl {
    QueryInterface: unsafe extern "system" fn(
        this: *mut DispatchedHandler,
        riid: *const GUID,
        ppv: *mut *mut c_void,
    ) -> HRESULT,
    AddRef: unsafe extern "system" fn(this: *mut DispatchedHandler) -> u32,
    Release: unsafe extern "system" fn(this: *mut DispatchedHandler) -> u32,
    Invoke: unsafe extern "system" fn(this: *mut DispatchedHandler) -> HRESULT,
}

#[repr(C)]
struct AdviseThreadParam {
    service: *mut IVisualTreeService,
    watcher: *mut VisualTreeWatcher,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
struct AgentState {
    transparent: bool,
    acrylic: bool,
}

type InitializeXamlDiagnosticsExFn = unsafe extern "system" fn(
    endpoint_name: PCWSTR,
    pid: u32,
    dll_xaml_diagnostics: PCWSTR,
    tap_dll_name: PCWSTR,
    tap_clsid: GUID,
    initialization_data: PCWSTR,
) -> HRESULT;

type WindowsCreateStringFn =
    unsafe extern "system" fn(source: PCWSTR, length: u32, string: *mut HString) -> HRESULT;
type WindowsDeleteStringFn = unsafe extern "system" fn(string: HString) -> HRESULT;
type RoGetActivationFactoryFn = unsafe extern "system" fn(
    class_id: HString,
    iid: *const GUID,
    factory: *mut *mut c_void,
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

static DISPATCHED_HANDLER_VTBL: DispatchedHandlerVtbl = DispatchedHandlerVtbl {
    QueryInterface: dispatched_handler_query_interface,
    AddRef: dispatched_handler_add_ref,
    Release: dispatched_handler_release,
    Invoke: dispatched_handler_invoke,
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
    let initial_state = read_agent_state();
    ENABLED_STATE.store(initial_state.transparent, Ordering::SeqCst);
    ACRYLIC_STATE.store(initial_state.acrylic, Ordering::SeqCst);
    log_line(&format!(
        "agent v{} taskbar XAML monitor loaded transparent={} acrylic={}",
        AGENT_PROTOCOL_VERSION, initial_state.transparent, initial_state.acrylic
    ));

    apply_runtime_layers(module, initial_state, "initial");

    let mut last_state = initial_state;
    loop {
        thread::sleep(AGENT_POLL_INTERVAL);
        let state = read_agent_state();

        if state != last_state {
            ENABLED_STATE.store(state.transparent, Ordering::SeqCst);
            ACRYLIC_STATE.store(state.acrylic, Ordering::SeqCst);
            log_line(&format!(
                "state changed transparent={} acrylic={}",
                state.transparent, state.acrylic
            ));
            apply_runtime_layers(module, state, "state-change");
            last_state = state;
        } else if state.transparent && !XAML_TAP_INITIALIZED.load(Ordering::SeqCst) {
            apply_runtime_layers(module, state, "retry-xaml-init");
        } else if state.transparent && PENDING_XAML_APPLY.load(Ordering::SeqCst) {
            nudge_pending_xaml_apply();
        } else if !state.transparent && PENDING_XAML_RESTORE.load(Ordering::SeqCst) {
            nudge_pending_xaml_restore();
        }
    }
}

fn apply_runtime_layers(module: HINSTANCE, state: AgentState, reason: &str) {
    match initialize_xaml_tap(module) {
        Ok(()) => log_line(&format!("xaml object tap active reason={reason}")),
        Err(error) => {
            log_line(&format!(
                "xaml object tap init failed reason={reason}: {error}"
            ));
            return;
        }
    }

    if state.transparent {
        PENDING_XAML_RESTORE.store(false, Ordering::SeqCst);
        PENDING_XAML_RESTORE_NUDGES.store(0, Ordering::SeqCst);
        PENDING_XAML_APPLY.store(true, Ordering::SeqCst);
        PENDING_XAML_APPLY_NUDGES.store(0, Ordering::SeqCst);
        log_line(&format!(
            "xaml object apply scheduled reason={reason}: dispatching through XAML CoreDispatcher"
        ));
        schedule_xaml_dispatch(DISPATCH_ACTION_APPLY, state.acrylic, reason);
        request_taskbar_xaml_refresh("apply-deferred-light");
    } else {
        PENDING_XAML_APPLY.store(false, Ordering::SeqCst);
        PENDING_XAML_APPLY_NUDGES.store(0, Ordering::SeqCst);
        PENDING_XAML_RESTORE.store(true, Ordering::SeqCst);
        PENDING_XAML_RESTORE_NUDGES.store(0, Ordering::SeqCst);
        log_line(&format!(
            "xaml object restore scheduled reason={reason}: dispatching through XAML CoreDispatcher"
        ));
        schedule_xaml_dispatch(DISPATCH_ACTION_RESTORE, false, reason);
        request_taskbar_xaml_refresh("restore-deferred-light");
    }
}

fn nudge_pending_xaml_apply() {
    let nudge = PENDING_XAML_APPLY_NUDGES.fetch_add(1, Ordering::SeqCst) + 1;
    if nudge <= MAX_PENDING_NUDGES {
        schedule_xaml_dispatch(
            DISPATCH_ACTION_APPLY,
            ACRYLIC_STATE.load(Ordering::SeqCst),
            "apply-pending-dispatch-retry",
        );
        request_taskbar_xaml_refresh("apply-pending-light-retry");
    } else {
        PENDING_XAML_APPLY.store(false, Ordering::SeqCst);
        log_line(&format!("xaml object apply pending stopped after {MAX_PENDING_NUDGES} dispatcher/light retries; waiting for future XAML visual-tree callback"));
    }
}

fn nudge_pending_xaml_restore() {
    let nudge = PENDING_XAML_RESTORE_NUDGES.fetch_add(1, Ordering::SeqCst) + 1;
    if nudge <= MAX_PENDING_NUDGES {
        schedule_xaml_dispatch(
            DISPATCH_ACTION_RESTORE,
            false,
            "restore-pending-dispatch-retry",
        );
        request_taskbar_xaml_refresh("restore-pending-light-retry");
    } else if nudge == MAX_PENDING_NUDGES + 1 {
        log_line(&format!("xaml object restore pending kept without more nudges after {MAX_PENDING_NUDGES} dispatcher/light retries; waiting for future XAML visual-tree callback"));
    }
}

fn base_dir() -> PathBuf {
    std::env::var_os("LOCALAPPDATA")
        .map(PathBuf::from)
        .unwrap_or_else(std::env::temp_dir)
        .join("snippets-code")
}

fn state_file() -> PathBuf {
    base_dir().join(format!(
        "taskbar-transparency-agent-v{AGENT_PROTOCOL_VERSION}.state"
    ))
}

fn log_file() -> PathBuf {
    base_dir().join(AGENT_LOG_FILE_NAME)
}

fn read_agent_state() -> AgentState {
    let Ok(content) = fs::read_to_string(state_file()) else {
        return AgentState {
            transparent: false,
            acrylic: false,
        };
    };
    let trimmed = content.trim();
    if trimmed == "1" || trimmed == "0" {
        return AgentState {
            transparent: trimmed == "1",
            acrylic: false,
        };
    }

    let mut state = AgentState {
        transparent: false,
        acrylic: false,
    };
    for line in content.lines() {
        let Some((key, value)) = line.split_once('=') else {
            continue;
        };
        let enabled = matches!(value.trim(), "1" | "true" | "yes");
        match key.trim() {
            "transparent" => state.transparent = enabled,
            "acrylic" => state.acrylic = enabled,
            _ => {}
        }
    }
    state
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

fn verbose_logging_enabled() -> bool {
    std::env::var("SNIPPETS_TASKBAR_AGENT_VERBOSE")
        .map(|value| matches!(value.as_str(), "1" | "true" | "TRUE" | "yes" | "YES"))
        .unwrap_or(false)
}

fn log_verbose_line(message: &str) {
    if verbose_logging_enabled() {
        log_line(message);
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

fn request_taskbar_xaml_refresh(reason: &str) {
    unsafe {
        let windows = find_taskbar_windows();
        if windows.is_empty() {
            log_line(&format!(
                "xaml refresh skipped reason={reason}: no taskbar windows"
            ));
            return;
        }

        let descriptions = windows
            .iter()
            .map(|hwnd| format!("{hwnd:p}:{}", hwnd_class_name(*hwnd)))
            .collect::<Vec<_>>();
        log_verbose_line(&format!("windows={}", descriptions.join(", ")));

        let setting = wide_null("ImmersiveColorSet");
        let mut sent_count = 0usize;
        for hwnd in windows {
            let mut result = 0usize;
            let theme_result = SendMessageTimeoutW(
                hwnd,
                WM_THEMECHANGED,
                0,
                0,
                SMTO_ABORTIFHUNG,
                30,
                &mut result,
            );
            let setting_result = SendMessageTimeoutW(
                hwnd,
                WM_SETTINGCHANGE,
                0,
                setting.as_ptr() as isize,
                SMTO_ABORTIFHUNG,
                30,
                &mut result,
            );
            if theme_result != 0 || setting_result != 0 {
                sent_count += 1;
            }
        }

        log_line(&format!(
            "xaml refresh messages sent reason={reason} window_count={sent_count}"
        ));
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
    let service_hr = ((*(*site_unknown).lpVtbl).QueryInterface)(
        site_unknown,
        &IID_IVISUAL_TREE_SERVICE,
        &mut service,
    );
    if service_hr != S_OK || service.is_null() {
        log_line(&format!(
            "tap SetSite QueryInterface(IVisualTreeService) failed hr={}",
            hr_hex(service_hr)
        ));
        return service_hr;
    }

    let mut diagnostics: *mut c_void = null_mut();
    let diagnostics_hr = ((*(*site_unknown).lpVtbl).QueryInterface)(
        site_unknown,
        &IID_IXAML_DIAGNOSTICS,
        &mut diagnostics,
    );
    if diagnostics_hr != S_OK || diagnostics.is_null() {
        log_line(&format!(
            "tap SetSite QueryInterface(IXamlDiagnostics) failed hr={}; object-level restore unavailable",
            hr_hex(diagnostics_hr)
        ));
    } else {
        let diagnostics = diagnostics as *mut IXamlDiagnostics;
        XAML_DIAGNOSTICS.store(diagnostics, Ordering::SeqCst);
        log_line("tap SetSite IXamlDiagnostics acquired");

        let mut dispatcher: *mut c_void = null_mut();
        let dispatcher_hr = ((*(*diagnostics).lpVtbl).GetDispatcher)(diagnostics, &mut dispatcher);
        if dispatcher_hr == S_OK && !dispatcher.is_null() {
            match query_interface::<ICoreDispatcher>(dispatcher, &IID_ICORE_DISPATCHER) {
                Ok(core_dispatcher) => {
                    let previous = XAML_DISPATCHER.swap(core_dispatcher, Ordering::SeqCst);
                    if !previous.is_null() {
                        release_unknown(previous as *mut c_void);
                    }
                    log_line(&format!(
                        "tap SetSite XAML CoreDispatcher acquired dispatcher={core_dispatcher:p}"
                    ));
                }
                Err(error) => log_line(&format!(
                    "tap SetSite QueryInterface(ICoreDispatcher) failed hr={} dispatcher={dispatcher:p} error={error}",
                    hr_hex(dispatcher_hr)
                )),
            }
            release_unknown(dispatcher);
        } else {
            log_line(&format!(
                "tap SetSite IXamlDiagnostics.GetDispatcher failed hr={} dispatcher={dispatcher:p}",
                hr_hex(dispatcher_hr)
            ));
        }
    }

    let service = service as *mut IVisualTreeService;
    VISUAL_TREE_SERVICE.store(service, Ordering::SeqCst);

    let watcher = Box::into_raw(Box::new(VisualTreeWatcher {
        lpVtbl: &VISUAL_TREE_WATCHER_VTBL,
        ref_count: AtomicU32::new(1),
        service: AtomicPtr::new(service),
        diagnostics: AtomicPtr::new(diagnostics as *mut IXamlDiagnostics),
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

unsafe extern "system" fn dispatched_handler_query_interface(
    this: *mut DispatchedHandler,
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
        || guid_eq(&*riid, &IID_IAGILE_OBJECT)
        || guid_eq(&*riid, &IID_DISPATCHED_HANDLER)
    {
        dispatched_handler_add_ref(this);
        *ppv = this as *mut c_void;
        S_OK
    } else {
        E_NOINTERFACE
    }
}

unsafe extern "system" fn dispatched_handler_add_ref(this: *mut DispatchedHandler) -> u32 {
    (*this).ref_count.fetch_add(1, Ordering::Relaxed) + 1
}

unsafe extern "system" fn dispatched_handler_release(this: *mut DispatchedHandler) -> u32 {
    let remaining = (*this).ref_count.fetch_sub(1, Ordering::Release) - 1;
    if remaining == 0 {
        std::sync::atomic::fence(Ordering::Acquire);
        drop(Box::from_raw(this));
    }
    remaining
}

unsafe extern "system" fn dispatched_handler_invoke(this: *mut DispatchedHandler) -> HRESULT {
    let action = (*this).action;
    let acrylic = (*this).acrylic != 0;

    match action {
        DISPATCH_ACTION_APPLY => run_dispatcher_apply(acrylic, "dispatcher"),
        DISPATCH_ACTION_RESTORE => run_dispatcher_restore("dispatcher"),
        _ => log_line(&format!("xaml dispatcher invoked unknown action={action}")),
    }

    dispatched_handler_release(this);
    S_OK
}

fn schedule_xaml_dispatch(action: u32, acrylic: bool, reason: &str) -> bool {
    let dispatcher = XAML_DISPATCHER.load(Ordering::SeqCst);
    if dispatcher.is_null() {
        log_line(&format!(
            "xaml dispatcher schedule skipped reason={reason} action={action}: dispatcher=null"
        ));
        return false;
    }

    unsafe {
        let handler = Box::into_raw(Box::new(DispatchedHandler {
            lpVtbl: &DISPATCHED_HANDLER_VTBL,
            ref_count: AtomicU32::new(1),
            action,
            acrylic: if acrylic { TRUE } else { 0 },
        }));

        dispatched_handler_add_ref(handler);
        let mut async_action: *mut c_void = null_mut();
        let hr = ((*(*dispatcher).lpVtbl).RunAsync)(
            dispatcher,
            CORE_DISPATCHER_PRIORITY_NORMAL,
            handler as *mut c_void,
            &mut async_action,
        );

        if hr == S_OK {
            if !async_action.is_null() {
                release_unknown(async_action);
            }
            dispatched_handler_release(handler);
            log_line(&format!(
                "xaml dispatcher RunAsync queued reason={reason} action={action} acrylic={acrylic}"
            ));
            true
        } else {
            dispatched_handler_release(handler);
            dispatched_handler_release(handler);
            log_line(&format!(
                "xaml dispatcher RunAsync failed reason={reason} action={action} acrylic={acrylic} hr={} async_action={async_action:p}",
                hr_hex(hr)
            ));
            false
        }
    }
}

fn run_dispatcher_apply(acrylic: bool, reason: &str) {
    if !ENABLED_STATE.load(Ordering::SeqCst) {
        PENDING_XAML_APPLY.store(false, Ordering::SeqCst);
        log_line(&format!(
            "xaml dispatcher apply cancelled reason={reason}: transparency disabled"
        ));
        return;
    }

    let service = VISUAL_TREE_SERVICE.load(Ordering::SeqCst);
    let diagnostics = XAML_DIAGNOSTICS.load(Ordering::SeqCst);
    let targets = DISCOVERED_TARGET_ELEMENTS
        .lock()
        .map(|targets| {
            targets
                .iter()
                .map(|(handle, name)| (*handle, name.clone()))
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();

    if targets.is_empty() {
        log_line(&format!(
            "xaml dispatcher apply skipped reason={reason}: no discovered taskbar XAML targets yet"
        ));
        return;
    }

    let mut applied = 0usize;
    let mut failed = 0usize;
    for (handle, name) in targets {
        match unsafe { apply_target_xaml_element(service, diagnostics, handle, acrylic, &name) } {
            Ok(summary) => {
                applied += 1;
                log_line(&format!(
                    "xaml dispatcher apply OK handle={handle} name={name} reason={reason} {summary}"
                ));
            }
            Err(error) => {
                failed += 1;
                forget_discovered_target(handle);
                log_line(&format!(
                    "xaml dispatcher apply FAILED handle={handle} name={name} reason={reason} error={error}"
                ));
            }
        }
    }

    if applied > 0 {
        PENDING_XAML_APPLY.store(false, Ordering::SeqCst);
        PENDING_XAML_APPLY_NUDGES.store(0, Ordering::SeqCst);
    }

    log_line(&format!(
        "xaml dispatcher apply finished reason={reason} acrylic={acrylic} applied={applied} failed={failed}"
    ));
}

fn run_dispatcher_restore(reason: &str) {
    if ENABLED_STATE.load(Ordering::SeqCst) {
        PENDING_XAML_RESTORE.store(false, Ordering::SeqCst);
        log_line(&format!(
            "xaml dispatcher restore cancelled reason={reason}: transparency enabled again"
        ));
        return;
    }

    let (object_restored, object_failed, object_total) = restore_all_cached_object_fills(reason);
    let (property_restored, property_failed, property_total) =
        restore_all_cached_property_values(reason);
    cleanup_known_legacy_item_backgrounds("dispatcher-restore");
    let restored = object_restored + property_restored;
    let failed = object_failed + property_failed;
    let total = object_total + property_total;

    if total == 0 || failed == 0 {
        PENDING_XAML_RESTORE.store(false, Ordering::SeqCst);
        PENDING_XAML_RESTORE_NUDGES.store(0, Ordering::SeqCst);
        return;
    }

    clear_all_object_backups(&format!(
        "{reason}: object restore failed even on XAML dispatcher restored={restored} failed={failed}"
    ));
    clear_all_property_backups(&format!(
        "{reason}: property restore failed even on XAML dispatcher restored={restored} failed={failed}"
    ));
    PENDING_XAML_RESTORE.store(false, Ordering::SeqCst);
    PENDING_XAML_RESTORE_NUDGES.store(0, Ordering::SeqCst);
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
    if target_xaml_property_kind(&element_type, &element_name).is_none() {
        if is_legacy_item_background_candidate(&element_type, &element_name) {
            remember_legacy_item_background(element.Handle, &element_name);
            log_verbose_line(&format!(
                "xaml legacy item background observed handle={} type={} name={} enabled={}",
                element.Handle,
                element_type,
                element_name,
                ENABLED_STATE.load(Ordering::SeqCst)
            ));
            if !ENABLED_STATE.load(Ordering::SeqCst) {
                clear_xaml_property_override(
                    element.Handle,
                    "Background",
                    "legacy-item-background-cleanup",
                );
            }
        }
        return S_OK;
    }

    let enabled = ENABLED_STATE.load(Ordering::SeqCst);
    let acrylic = ACRYLIC_STATE.load(Ordering::SeqCst);
    let service = (*this).service.load(Ordering::SeqCst);
    let diagnostics = (*this).diagnostics.load(Ordering::SeqCst);

    log_verbose_line(&format!(
        "xaml target added handle={} type={} name={} enabled={enabled} acrylic={acrylic}",
        element.Handle, element_type, element_name
    ));

    drain_pending_restore_on_xaml_callback("visual-tree-change");

    if let Ok(mut targets) = DISCOVERED_TARGET_ELEMENTS.lock() {
        targets
            .entry(element.Handle)
            .or_insert_with(|| element_name.clone());
    }

    if enabled {
        match apply_target_xaml_element(
            service,
            diagnostics,
            element.Handle,
            acrylic,
            &element_name,
        ) {
            Ok(summary) => {
                PENDING_XAML_APPLY.store(false, Ordering::SeqCst);
                log_line(&format!(
                    "xaml object apply succeeded handle={} name={} {summary}",
                    element.Handle, element_name
                ));
            }
            Err(error) => {
                forget_discovered_target(element.Handle);
                log_line(&format!(
                    "xaml object apply failed handle={} name={} error={error}",
                    element.Handle, element_name
                ));
            }
        }
    } else {
        restore_xaml_element_object(element.Handle, "callback-disabled");
        restore_xaml_property_values_for_element(element.Handle, "callback-disabled");
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
    drain_pending_restore_on_xaml_callback("element-state-changed");
    S_OK
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum TargetXamlPropertyKind {
    ShapeFill,
    Background,
}

fn target_xaml_property_kind(
    element_type: &str,
    element_name: &str,
) -> Option<TargetXamlPropertyKind> {
    if (element_name == "BackgroundFill" || element_name == "BackgroundStroke")
        && (element_type.contains("Rectangle") || element_type.contains("Shapes.Rectangle"))
    {
        return Some(TargetXamlPropertyKind::ShapeFill);
    }

    if !is_taskbar_surface_background_candidate(element_type, element_name) {
        return None;
    }

    Some(TargetXamlPropertyKind::Background)
}

fn target_xaml_property_kind_by_name(element_name: &str) -> Option<TargetXamlPropertyKind> {
    if element_name == "BackgroundFill" || element_name == "BackgroundStroke" {
        return Some(TargetXamlPropertyKind::ShapeFill);
    }
    if matches!(
        element_name,
        "RootGrid" | "SystemTrayFrameGrid" | "TaskbarFrameRepeater"
    ) {
        return Some(TargetXamlPropertyKind::Background);
    }
    None
}

fn is_taskbar_surface_background_candidate(element_type: &str, element_name: &str) -> bool {
    let is_background_capable = element_type.contains("Border")
        || element_type.contains("Grid")
        || element_type.contains("Panel")
        || element_type.contains("Control");
    if !is_background_capable {
        return false;
    }

    matches!(
        element_name,
        "RootGrid" | "SystemTrayFrameGrid" | "TaskbarFrameRepeater"
    )
}

fn is_legacy_item_background_candidate(element_type: &str, element_name: &str) -> bool {
    (element_name == "BackgroundElement" || element_name == "BackgroundBorder")
        && (element_type.contains("Border") || element_type.contains("Grid"))
}

fn forget_discovered_target(element_handle: InstanceHandle) {
    let _ = DISCOVERED_TARGET_ELEMENTS
        .lock()
        .map(|mut targets| targets.remove(&element_handle));
}

fn remember_legacy_item_background(element_handle: InstanceHandle, element_name: &str) {
    let _ = DISCOVERED_LEGACY_ITEM_BACKGROUNDS
        .lock()
        .map(|mut targets| {
            targets
                .entry(element_handle)
                .or_insert_with(|| element_name.to_string());
        });
}

fn drain_pending_restore_on_xaml_callback(reason: &str) {
    if !PENDING_XAML_RESTORE.load(Ordering::SeqCst) {
        return;
    }

    if ENABLED_STATE.load(Ordering::SeqCst) {
        PENDING_XAML_RESTORE.store(false, Ordering::SeqCst);
        log_line(&format!(
            "xaml object deferred restore cancelled reason={reason}: transparency is enabled again"
        ));
        return;
    }

    let (object_restored, object_failed, object_total) = restore_all_cached_object_fills(reason);
    let (property_restored, property_failed, property_total) =
        restore_all_cached_property_values(reason);
    cleanup_known_legacy_item_backgrounds("callback-restore");
    let restored = object_restored + property_restored;
    let failed = object_failed + property_failed;
    let total = object_total + property_total;

    if total == 0 || failed == 0 {
        PENDING_XAML_RESTORE.store(false, Ordering::SeqCst);
        return;
    }

    // If we got here from a XAML callback, we are already on the thread that
    // accepted the original transparent Fill writes. Remaining failures are
    // stale/detached elements after a taskbar visual-tree rebuild. The newly
    // reported disabled elements are left untouched, so the visible taskbar is
    // back on Explorer's default template values; drop stale backups to avoid
    // repeated failures and leaked references.
    clear_all_object_backups(&format!(
        "{reason}: object restore still failed on XAML callback restored={restored} failed={failed}"
    ));
    clear_all_property_backups(&format!(
        "{reason}: property restore still failed on XAML callback restored={restored} failed={failed}"
    ));
    PENDING_XAML_RESTORE.store(false, Ordering::SeqCst);
}

fn restore_all_cached_object_fills(reason: &str) -> (usize, usize, usize) {
    let handles = XAML_BRUSH_BACKUPS
        .lock()
        .map(|backups| backups.keys().copied().collect::<Vec<_>>())
        .unwrap_or_default();

    if handles.is_empty() {
        log_line(&format!(
            "xaml object restore skipped reason={reason}: no object backups cached"
        ));
        return (0, 0, 0);
    }

    let mut restored = 0usize;
    let mut failed = 0usize;
    let total = handles.len();
    for handle in handles {
        if restore_xaml_element_object(handle, reason) {
            restored += 1;
        } else {
            failed += 1;
        }
    }

    log_line(&format!(
        "xaml object restore finished reason={reason} restored={restored} failed={failed}"
    ));
    (restored, failed, total)
}

fn restore_xaml_element_object(element_handle: InstanceHandle, reason: &str) -> bool {
    let Some(backup) = XAML_BRUSH_BACKUPS
        .lock()
        .ok()
        .and_then(|backups| backups.get(&element_handle).cloned())
    else {
        log_line(&format!(
            "xaml object restore skipped handle={} reason={reason}: no backup",
            element_handle
        ));
        return true;
    };

    let original_brush = backup.original_brush as *mut IBrush;
    let cached_shape = backup.shape as *mut IShape;

    let cached_hr = unsafe { ((*(*cached_shape).lpVtbl).put_Fill)(cached_shape, original_brush) };
    if cached_hr == S_OK {
        remove_object_backup(element_handle);
        log_line(&format!(
            "xaml object restore OK handle={} name={} reason={reason} path=cached-shape",
            element_handle, backup.element_name
        ));
        return true;
    }

    let diagnostics = XAML_DIAGNOSTICS.load(Ordering::SeqCst);
    if !diagnostics.is_null() {
        match unsafe { shape_from_handle(diagnostics, element_handle) } {
            Ok(fresh_shape) => {
                let fresh_hr =
                    unsafe { ((*(*fresh_shape).lpVtbl).put_Fill)(fresh_shape, original_brush) };
                unsafe { release_unknown(fresh_shape as *mut c_void) };
                if fresh_hr == S_OK {
                    remove_object_backup(element_handle);
                    log_line(&format!(
                        "xaml object restore OK handle={} name={} reason={reason} path=fresh-shape cached_hr={}",
                        element_handle,
                        backup.element_name,
                        hr_hex(cached_hr)
                    ));
                    return true;
                }

                log_line(&format!(
                    "xaml object restore FAILED handle={} name={} reason={reason} cached_hr={} fresh_hr={}",
                    element_handle,
                    backup.element_name,
                    hr_hex(cached_hr),
                    hr_hex(fresh_hr)
                ));
            }
            Err(error) => log_line(&format!(
                "xaml object restore fresh-shape lookup failed handle={} name={} reason={reason} cached_hr={} error={}",
                element_handle,
                backup.element_name,
                hr_hex(cached_hr),
                error
            )),
        }
    } else {
        log_line(&format!(
            "xaml object restore FAILED handle={} name={} reason={reason} cached_hr={} diagnostics=null",
            element_handle,
            backup.element_name,
            hr_hex(cached_hr)
        ));
    }

    false
}

fn remove_object_backup(element_handle: InstanceHandle) {
    let backup = XAML_BRUSH_BACKUPS
        .lock()
        .ok()
        .and_then(|mut backups| backups.remove(&element_handle));

    if let Some(backup) = backup {
        unsafe {
            release_unknown(backup.shape as *mut c_void);
            release_unknown(backup.original_brush as *mut c_void);
        }
    }
}

fn clear_all_object_backups(reason: &str) {
    let backups = XAML_BRUSH_BACKUPS
        .lock()
        .map(|mut backups| {
            backups
                .drain()
                .map(|(_, backup)| backup)
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();

    let count = backups.len();
    for backup in backups {
        unsafe {
            release_unknown(backup.shape as *mut c_void);
            release_unknown(backup.original_brush as *mut c_void);
        }
    }

    log_line(&format!(
        "xaml object backups cleared count={count} reason={reason}"
    ));
}

unsafe fn apply_target_xaml_element(
    service: *mut IVisualTreeService,
    diagnostics: *mut IXamlDiagnostics,
    element_handle: InstanceHandle,
    acrylic: bool,
    element_name: &str,
) -> Result<String, String> {
    let kind = target_xaml_property_kind_by_name(element_name);
    if matches!(kind, Some(TargetXamlPropertyKind::ShapeFill))
        || element_name == "BackgroundFill"
        || element_name == "BackgroundStroke"
    {
        return apply_xaml_element_object(
            service,
            diagnostics,
            element_handle,
            acrylic,
            element_name,
        );
    }

    apply_xaml_element_property(service, element_handle, "Background", acrylic, element_name)
}

unsafe fn apply_xaml_element_property(
    service: *mut IVisualTreeService,
    element_handle: InstanceHandle,
    property_name: &str,
    acrylic: bool,
    element_name: &str,
) -> Result<String, String> {
    if service.is_null() {
        return Err("IVisualTreeService is null".to_string());
    }

    let property = find_property_info(service, element_handle, property_name)?
        .ok_or_else(|| format!("{property_name} property was not found on target element"))?;
    remember_original_xaml_property_value(element_handle, &property, property_name, element_name);

    let value_handle = if acrylic {
        create_acrylic_property_value(service).or_else(|error| {
            log_line(
                "xaml acrylic property value creation failed; using translucent fallback brush",
            );
            log_verbose_line(&format!("xaml acrylic property creation detail: {error}"));
            create_acrylic_fallback_property_value(service)
        })?
    } else {
        create_transparent_property_value(service, &property)?
    };

    let hr =
        ((*(*service).lpVtbl).SetProperty)(service, element_handle, value_handle, property.index);
    if hr == S_OK {
        let mode = if acrylic {
            "AcrylicOrTranslucent"
        } else {
            "Transparent"
        };
        Ok(format!(
            "set {property_name}={mode} property_index={} value_handle={} type={} value_type={} original_value={} metadata={:#x}",
            property.index,
            value_handle,
            property.type_name,
            property.value_type,
            property.value,
            property.metadata_bits
        ))
    } else {
        Err(format!(
            "SetProperty({property_name}=Transparent) failed hr={}",
            hr_hex(hr)
        ))
    }
}

fn remember_original_xaml_property_value(
    element_handle: InstanceHandle,
    property: &XamlPropertyInfo,
    property_name: &str,
    element_name: &str,
) {
    if property.value.is_empty() {
        return;
    }
    let Ok(original_value) = property.value.parse::<InstanceHandle>() else {
        return;
    };
    if original_value == 0 {
        return;
    }
    if let Ok(mut values) = XAML_PROPERTY_BACKUPS.lock() {
        values
            .entry((element_handle, property.index))
            .or_insert_with(|| XamlPropertyBackup {
                original_value,
                property_name: property_name.to_string(),
                element_name: element_name.to_string(),
            });
    }
}

fn restore_all_cached_property_values(reason: &str) -> (usize, usize, usize) {
    let keys = XAML_PROPERTY_BACKUPS
        .lock()
        .map(|backups| backups.keys().copied().collect::<Vec<_>>())
        .unwrap_or_default();

    if keys.is_empty() {
        log_line(&format!(
            "xaml property restore skipped reason={reason}: no property backups cached"
        ));
        return (0, 0, 0);
    }

    let mut restored = 0usize;
    let mut failed = 0usize;
    let total = keys.len();
    for (handle, property_index) in keys {
        if restore_xaml_property_value(handle, property_index, reason) {
            restored += 1;
        } else {
            failed += 1;
        }
    }

    log_line(&format!(
        "xaml property restore finished reason={reason} restored={restored} failed={failed}"
    ));
    (restored, failed, total)
}

fn restore_xaml_property_values_for_element(element_handle: InstanceHandle, reason: &str) {
    let keys = XAML_PROPERTY_BACKUPS
        .lock()
        .map(|backups| {
            backups
                .keys()
                .filter(|(handle, _)| *handle == element_handle)
                .copied()
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();

    for (_, property_index) in keys {
        restore_xaml_property_value(element_handle, property_index, reason);
    }
}

fn restore_xaml_property_value(
    element_handle: InstanceHandle,
    property_index: u32,
    reason: &str,
) -> bool {
    let Some(backup) = XAML_PROPERTY_BACKUPS
        .lock()
        .ok()
        .and_then(|backups| backups.get(&(element_handle, property_index)).cloned())
    else {
        return true;
    };

    let service = VISUAL_TREE_SERVICE.load(Ordering::SeqCst);
    if service.is_null() {
        log_line(&format!(
            "xaml property restore FAILED handle={} name={} property={} index={} reason={reason}: service=null",
            element_handle, backup.element_name, backup.property_name, property_index
        ));
        return false;
    }

    let hr = unsafe {
        ((*(*service).lpVtbl).SetProperty)(
            service,
            element_handle,
            backup.original_value,
            property_index,
        )
    };
    if hr == S_OK {
        remove_property_backup(element_handle, property_index);
        log_line(&format!(
            "xaml property restore OK handle={} name={} property={} index={} reason={reason} original_value={}",
            element_handle,
            backup.element_name,
            backup.property_name,
            property_index,
            backup.original_value
        ));
        true
    } else {
        let clear_hr = unsafe {
            ((*(*service).lpVtbl).ClearProperty)(service, element_handle, property_index)
        };
        if clear_hr == S_OK {
            remove_property_backup(element_handle, property_index);
            log_line(&format!(
                "xaml property restore OK via ClearProperty handle={} name={} property={} index={} reason={reason} set_hr={} original_value={}",
                element_handle,
                backup.element_name,
                backup.property_name,
                property_index,
                hr_hex(hr),
                backup.original_value
            ));
            true
        } else {
            log_line(&format!(
                "xaml property restore FAILED handle={} name={} property={} index={} reason={reason} set_hr={} clear_hr={} original_value={}",
                element_handle,
                backup.element_name,
                backup.property_name,
                property_index,
                hr_hex(hr),
                hr_hex(clear_hr),
                backup.original_value
            ));
            false
        }
    }
}

fn clear_xaml_property_override(element_handle: InstanceHandle, property_name: &str, reason: &str) {
    let service = VISUAL_TREE_SERVICE.load(Ordering::SeqCst);
    if service.is_null() {
        log_line(&format!(
            "xaml property cleanup skipped handle={} property={} reason={reason}: service=null",
            element_handle, property_name
        ));
        return;
    }

    let property = match unsafe { find_property_info(service, element_handle, property_name) } {
        Ok(Some(property)) => property,
        Ok(None) => {
            log_verbose_line(&format!(
            "xaml property cleanup skipped handle={} property={} reason={reason}: property not found",
            element_handle, property_name
        ));
            return;
        }
        Err(error) => {
            log_line(&format!(
                "xaml property cleanup skipped handle={} property={} reason={reason}: {error}",
                element_handle, property_name
            ));
            return;
        }
    };

    let hr =
        unsafe { ((*(*service).lpVtbl).ClearProperty)(service, element_handle, property.index) };
    if hr == S_OK {
        log_verbose_line(&format!(
            "xaml property cleanup OK handle={} property={} index={} reason={reason}",
            element_handle, property_name, property.index
        ));
    } else {
        log_line(&format!(
            "xaml property cleanup FAILED handle={} property={} index={} reason={reason} hr={}",
            element_handle,
            property_name,
            property.index,
            hr_hex(hr)
        ));
    }
}

fn cleanup_known_legacy_item_backgrounds(reason: &str) {
    let targets = DISCOVERED_LEGACY_ITEM_BACKGROUNDS
        .lock()
        .map(|targets| {
            targets
                .iter()
                .map(|(handle, name)| (*handle, name.clone()))
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();

    if targets.is_empty() {
        log_line(&format!(
            "xaml legacy item background cleanup skipped reason={reason}: no observed targets"
        ));
        return;
    }

    let mut attempted = 0usize;
    for (handle, name) in targets {
        attempted += 1;
        log_verbose_line(&format!(
            "xaml legacy item background cleanup attempt handle={} name={} reason={reason}",
            handle, name
        ));
        clear_xaml_property_override(handle, "Background", reason);
    }

    log_line(&format!(
        "xaml legacy item background cleanup finished reason={reason} attempted={attempted}"
    ));
}

fn remove_property_backup(element_handle: InstanceHandle, property_index: u32) {
    let _ = XAML_PROPERTY_BACKUPS
        .lock()
        .map(|mut backups| backups.remove(&(element_handle, property_index)));
}

fn clear_all_property_backups(reason: &str) {
    let count = XAML_PROPERTY_BACKUPS
        .lock()
        .map(|mut backups| {
            let count = backups.len();
            backups.clear();
            count
        })
        .unwrap_or(0);

    log_line(&format!(
        "xaml property backups cleared count={count} reason={reason}"
    ));
}

unsafe fn apply_xaml_element_object(
    service: *mut IVisualTreeService,
    diagnostics: *mut IXamlDiagnostics,
    element_handle: InstanceHandle,
    acrylic: bool,
    element_name: &str,
) -> Result<String, String> {
    if service.is_null() {
        return Err("IVisualTreeService is null".to_string());
    }
    if diagnostics.is_null() {
        return Err("IXamlDiagnostics is null; cannot resolve XAML object".to_string());
    }

    let shape = shape_from_handle(diagnostics, element_handle)?;
    let mut shape_owned_by_cache = false;
    let mut inserted_backup = false;

    let already_cached = XAML_BRUSH_BACKUPS
        .lock()
        .map(|backups| backups.contains_key(&element_handle))
        .unwrap_or(false);

    if !already_cached {
        let mut original_brush: *mut IBrush = null_mut();
        let fill_hr = ((*(*shape).lpVtbl).get_Fill)(shape, &mut original_brush);
        if fill_hr != S_OK || original_brush.is_null() {
            release_unknown(shape as *mut c_void);
            return Err(format!(
                "IShape.get_Fill failed hr={} original={:p}",
                hr_hex(fill_hr),
                original_brush
            ));
        }

        let backup = XamlBrushBackup {
            shape: shape as usize,
            original_brush: original_brush as usize,
            element_name: element_name.to_string(),
        };

        let mut should_release_new_backup = false;
        if let Ok(mut backups) = XAML_BRUSH_BACKUPS.lock() {
            if backups.contains_key(&element_handle) {
                should_release_new_backup = true;
            } else {
                backups.insert(element_handle, backup);
                shape_owned_by_cache = true;
                inserted_backup = true;
            }
        } else {
            should_release_new_backup = true;
        }

        if should_release_new_backup {
            release_unknown(original_brush as *mut c_void);
        }
    }

    let brush = if acrylic && element_name == "BackgroundFill" {
        create_acrylic_brush_object(service, diagnostics).or_else(|error| {
            log_line("xaml acrylic brush creation failed; using translucent fallback brush");
            log_verbose_line(&format!("xaml acrylic brush creation detail: {error}"));
            create_acrylic_fallback_solid_brush()
        })?
    } else {
        create_transparent_solid_brush().or_else(|error| {
            log_line(&format!(
                "xaml solid transparent brush creation failed, fallback to VisualDiagnostics transparent brush: {error}"
            ));
            create_transparent_brush_object(service, diagnostics)
        })?
    };

    let put_hr = ((*(*shape).lpVtbl).put_Fill)(shape, brush);
    release_unknown(brush as *mut c_void);

    if !shape_owned_by_cache {
        release_unknown(shape as *mut c_void);
    }

    if put_hr == S_OK {
        let mode = if acrylic && element_name == "BackgroundFill" {
            "AcrylicOrTranslucent"
        } else {
            "Transparent"
        };
        Ok(format!(
            "set Shape.Fill={mode} object cached_new={} acrylic={} brush_mode={}",
            inserted_backup,
            acrylic,
            if acrylic && element_name == "BackgroundFill" {
                "acrylic-or-fallback"
            } else {
                "solid"
            }
        ))
    } else {
        Err(format!("IShape.put_Fill failed hr={}", hr_hex(put_hr)))
    }
}

unsafe fn shape_from_handle(
    diagnostics: *mut IXamlDiagnostics,
    element_handle: InstanceHandle,
) -> Result<*mut IShape, String> {
    let mut inspectable: *mut c_void = null_mut();
    let hr = ((*(*diagnostics).lpVtbl).GetIInspectableFromHandle)(
        diagnostics,
        element_handle,
        &mut inspectable,
    );
    if hr != S_OK || inspectable.is_null() {
        return Err(format!(
            "GetIInspectableFromHandle failed hr={} inspectable={:p}",
            hr_hex(hr),
            inspectable
        ));
    }

    let shape = match query_interface::<IShape>(inspectable, &IID_ISHAPE) {
        Ok(shape) => shape,
        Err(error) => {
            release_unknown(inspectable);
            return Err(format!("QueryInterface(IShape) failed: {error}"));
        }
    };
    release_unknown(inspectable);
    Ok(shape)
}

unsafe fn query_interface<T>(unknown: *mut c_void, iid: &GUID) -> Result<*mut T, String> {
    if unknown.is_null() {
        return Err("source object is null".to_string());
    }

    let mut out: *mut c_void = null_mut();
    let source = unknown as *mut IUnknownLike;
    let hr = ((*(*source).lpVtbl).QueryInterface)(source, iid, &mut out);
    if hr == S_OK && !out.is_null() {
        Ok(out as *mut T)
    } else {
        Err(format!("hr={} out={:p}", hr_hex(hr), out))
    }
}

unsafe fn release_unknown(object: *mut c_void) {
    if object.is_null() {
        return;
    }

    let unknown = object as *mut IUnknownLike;
    ((*(*unknown).lpVtbl).Release)(unknown);
}

unsafe fn create_transparent_solid_brush() -> Result<*mut IBrush, String> {
    create_solid_color_brush(WindowsUIColor {
        A: 0,
        R: 0,
        G: 0,
        B: 0,
    })
}

unsafe fn create_acrylic_fallback_solid_brush() -> Result<*mut IBrush, String> {
    create_solid_color_brush(WindowsUIColor {
        A: 56,
        R: 255,
        G: 255,
        B: 255,
    })
}

unsafe fn create_solid_color_brush(color: WindowsUIColor) -> Result<*mut IBrush, String> {
    let combase = wide_null("combase.dll");
    let module = LoadLibraryExW(combase.as_ptr(), null_mut(), LOAD_LIBRARY_SEARCH_SYSTEM32);
    if module.is_null() {
        return Err("LoadLibraryExW(combase.dll) failed".to_string());
    }

    let create_name = CStr::from_bytes_with_nul_unchecked(b"WindowsCreateString\0");
    let delete_name = CStr::from_bytes_with_nul_unchecked(b"WindowsDeleteString\0");
    let factory_name = CStr::from_bytes_with_nul_unchecked(b"RoGetActivationFactory\0");

    let windows_create_string = GetProcAddress(module, create_name.as_ptr() as *const u8)
        .ok_or_else(|| "WindowsCreateString unavailable".to_string())
        .map(|proc| std::mem::transmute::<_, WindowsCreateStringFn>(proc))?;
    let windows_delete_string = GetProcAddress(module, delete_name.as_ptr() as *const u8)
        .ok_or_else(|| "WindowsDeleteString unavailable".to_string())
        .map(|proc| std::mem::transmute::<_, WindowsDeleteStringFn>(proc))?;
    let ro_get_activation_factory = GetProcAddress(module, factory_name.as_ptr() as *const u8)
        .ok_or_else(|| "RoGetActivationFactory unavailable".to_string())
        .map(|proc| std::mem::transmute::<_, RoGetActivationFactoryFn>(proc))?;

    let runtime_class = wide_null("Windows.UI.Xaml.Media.SolidColorBrush");
    let mut class_id: HString = null_mut();
    let create_hr = windows_create_string(
        runtime_class.as_ptr(),
        runtime_class.len().saturating_sub(1) as u32,
        &mut class_id,
    );
    if create_hr != S_OK || class_id.is_null() {
        return Err(format!(
            "WindowsCreateString failed hr={}",
            hr_hex(create_hr)
        ));
    }

    let mut factory: *mut c_void = null_mut();
    let factory_hr =
        ro_get_activation_factory(class_id, &IID_ISOLID_COLOR_BRUSH_FACTORY, &mut factory);
    let _ = windows_delete_string(class_id);
    if factory_hr != S_OK || factory.is_null() {
        return Err(format!(
            "RoGetActivationFactory(SolidColorBrush) failed hr={} factory={:p}",
            hr_hex(factory_hr),
            factory
        ));
    }

    let factory = factory as *mut ISolidColorBrushFactory;
    let mut solid: *mut ISolidColorBrush = null_mut();
    let create_brush_hr =
        ((*(*factory).lpVtbl).CreateInstanceWithColor)(factory, color, &mut solid);
    release_unknown(factory as *mut c_void);
    if create_brush_hr != S_OK || solid.is_null() {
        return Err(format!(
            "ISolidColorBrushFactory.CreateInstanceWithColor failed hr={} brush={:p}",
            hr_hex(create_brush_hr),
            solid
        ));
    }

    let brush = match query_interface::<IBrush>(solid as *mut c_void, &IID_IBRUSH) {
        Ok(brush) => brush,
        Err(error) => {
            release_unknown(solid as *mut c_void);
            return Err(format!(
                "QueryInterface(IBrush) on SolidColorBrush failed: {error}"
            ));
        }
    };
    release_unknown(solid as *mut c_void);
    Ok(brush)
}

unsafe fn create_acrylic_brush_object(
    service: *mut IVisualTreeService,
    diagnostics: *mut IXamlDiagnostics,
) -> Result<*mut IBrush, String> {
    let handle = create_acrylic_value_handle(service)?;

    let mut inspectable: *mut c_void = null_mut();
    let hr =
        ((*(*diagnostics).lpVtbl).GetIInspectableFromHandle)(diagnostics, handle, &mut inspectable);
    if hr != S_OK || inspectable.is_null() {
        return Err(format!(
            "GetIInspectableFromHandle(acrylic brush handle={handle}) failed hr={} inspectable={:p}",
            hr_hex(hr),
            inspectable
        ));
    }

    let brush = match query_interface::<IBrush>(inspectable, &IID_IBRUSH) {
        Ok(brush) => brush,
        Err(error) => {
            release_unknown(inspectable);
            return Err(format!(
                "QueryInterface(IBrush) on AcrylicBrush failed: {error}"
            ));
        }
    };
    release_unknown(inspectable);
    Ok(brush)
}

unsafe fn create_transparent_brush_object(
    service: *mut IVisualTreeService,
    diagnostics: *mut IXamlDiagnostics,
) -> Result<*mut IBrush, String> {
    let handle = create_xaml_value(service, "Windows.UI.Xaml.Media.Brush", "Transparent")?;

    let mut inspectable: *mut c_void = null_mut();
    let hr =
        ((*(*diagnostics).lpVtbl).GetIInspectableFromHandle)(diagnostics, handle, &mut inspectable);
    if hr != S_OK || inspectable.is_null() {
        return Err(format!(
            "GetIInspectableFromHandle(transparent brush handle={handle}) failed hr={} inspectable={:p}",
            hr_hex(hr),
            inspectable
        ));
    }

    let brush = match query_interface::<IBrush>(inspectable, &IID_IBRUSH) {
        Ok(brush) => brush,
        Err(error) => {
            release_unknown(inspectable);
            return Err(format!(
                "QueryInterface(IBrush) on Transparent Brush failed: {error}"
            ));
        }
    };
    release_unknown(inspectable);
    Ok(brush)
}

unsafe fn find_property_info(
    service: *mut IVisualTreeService,
    element_handle: InstanceHandle,
    property_name: &str,
) -> Result<Option<XamlPropertyInfo>, String> {
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
        if logged_properties.len() < 24 {
            logged_properties.push(format!("{}:{}", property.Index, name));
        }

        if name == property_name {
            let type_name = bstr_to_string(property.Type);
            let value_type = bstr_to_string(property.ValueType);
            let value = bstr_to_string(property.Value);
            log_verbose_line(&format!(
                "xaml property match handle={element_handle} property={} index={} type={} value_type={} value={} metadata={:#x} sample=[{}]",
                property_name,
                property.Index,
                type_name,
                value_type,
                value,
                property.MetadataBits,
                logged_properties.join(", ")
            ));
            return Ok(Some(XamlPropertyInfo {
                index: property.Index,
                type_name,
                value_type,
                value,
                metadata_bits: property.MetadataBits,
            }));
        }
    }

    log_verbose_line(&format!(
        "xaml property not found handle={element_handle} wanted={} property_count={} sample=[{}]",
        property_name,
        property_count,
        logged_properties.join(", ")
    ));
    Ok(None)
}

unsafe fn create_transparent_property_value(
    service: *mut IVisualTreeService,
    property: &XamlPropertyInfo,
) -> Result<InstanceHandle, String> {
    let mut candidate_types = Vec::new();
    if !property.type_name.is_empty() {
        candidate_types.push(property.type_name.as_str());
    }
    if !property.value_type.is_empty() && property.value_type != property.type_name {
        candidate_types.push(property.value_type.as_str());
    }
    candidate_types.push("Windows.UI.Xaml.Media.Brush");

    let mut errors = Vec::new();
    for candidate_type in candidate_types {
        match create_xaml_value(service, candidate_type, "Transparent") {
            Ok(handle) => {
                log_verbose_line(&format!(
                    "xaml transparent property value created type={} handle={handle}",
                    candidate_type
                ));
                return Ok(handle);
            }
            Err(error) => errors.push(format!("{candidate_type}: {error}")),
        }
    }

    Err(format!(
        "CreateInstance transparent property value failed for all candidate types: {}",
        errors.join("; ")
    ))
}

unsafe fn create_acrylic_property_value(
    service: *mut IVisualTreeService,
) -> Result<InstanceHandle, String> {
    create_acrylic_value_handle(service)
}

unsafe fn create_acrylic_value_handle(
    service: *mut IVisualTreeService,
) -> Result<InstanceHandle, String> {
    let candidates = [
        (
            "Windows.UI.Xaml.Media.Brush",
            r#"<AcrylicBrush TintColor="White" TintOpacity="0.30" TintLuminosityOpacity="0.45" Opacity="1" FallbackColor="White" />"#,
        ),
        (
            "Windows.UI.Xaml.Media.Brush",
            r##"<AcrylicBrush TintColor="#FFFFFFFF" TintOpacity="0.30" TintLuminosityOpacity="0.45" Opacity="1" FallbackColor="#66FFFFFF" />"##,
        ),
        (
            "Windows.UI.Xaml.Media.Brush",
            r##"<AcrylicBrush BackgroundSource="Backdrop" TintColor="White" TintOpacity="0.24" TintLuminosityOpacity="0.45" Opacity="1" FallbackColor="White" />"##,
        ),
        (
            "Windows.UI.Xaml.Media.Brush",
            r##"<AcrylicBrush BackgroundSource="HostBackdrop" TintColor="White" TintOpacity="0.24" TintLuminosityOpacity="0.45" Opacity="1" FallbackColor="White" />"##,
        ),
    ];

    let mut errors = Vec::new();
    for (type_name, value) in candidates {
        match create_xaml_value(service, type_name, value) {
            Ok(handle) => {
                log_verbose_line(&format!(
                    "xaml acrylic value created type={} handle={} value={}",
                    type_name, handle, value
                ));
                return Ok(handle);
            }
            Err(error) => errors.push(format!("{type_name}: {error}")),
        }
    }

    Err(format!(
        "CreateInstance AcrylicBrush failed for {} candidate values: {}",
        errors.len(),
        errors.join("; ")
    ))
}

unsafe fn create_acrylic_fallback_property_value(
    service: *mut IVisualTreeService,
) -> Result<InstanceHandle, String> {
    let candidates = [
        "#38FFFFFF",
        "#40FFFFFF",
        "#48FFFFFF",
        r##"<SolidColorBrush Color="#38FFFFFF" />"##,
    ];

    let mut errors = Vec::new();
    for value in candidates {
        match create_xaml_value(service, "Windows.UI.Xaml.Media.Brush", value) {
            Ok(handle) => {
                log_verbose_line(&format!(
                    "xaml acrylic fallback translucent value created handle={} value={}",
                    handle, value
                ));
                return Ok(handle);
            }
            Err(error) => errors.push(format!("{value}: {error}")),
        }
    }

    Err(format!(
        "CreateInstance acrylic fallback translucent value failed: {}",
        errors.join("; ")
    ))
}

unsafe fn create_xaml_value(
    service: *mut IVisualTreeService,
    type_name_text: &str,
    value_text: &str,
) -> Result<InstanceHandle, String> {
    let type_name = make_bstr(type_name_text);
    let value = make_bstr(value_text);
    if type_name.is_null() || value.is_null() {
        if !type_name.is_null() {
            SysFreeString(type_name);
        }
        if !value.is_null() {
            SysFreeString(value);
        }
        return Err("SysAllocString failed".to_string());
    }

    let mut value_handle = 0u64;
    let hr = ((*(*service).lpVtbl).CreateInstance)(service, type_name, value, &mut value_handle);
    SysFreeString(type_name);
    SysFreeString(value);

    if hr == S_OK && value_handle != 0 {
        Ok(value_handle)
    } else {
        Err(format!(
            "CreateInstance({}, {}) failed hr={} value_handle={value_handle}",
            type_name_text,
            value_text,
            hr_hex(hr),
        ))
    }
}
