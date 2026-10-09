//! 自定义标题栏的 Windows 最大化命中区。WebView2 覆盖客户区，因此需要一个
//! 不绘制内容的原生子窗口，让系统收到 HTMAXBUTTON 并提供 Windows 11 贴靠布局。
use serde::Deserialize;

#[derive(Clone, Copy, Deserialize)]
pub struct CaptionButtonBounds {
    x: f64,
    y: f64,
    width: f64,
    height: f64,
    scale: f64,
}

impl CaptionButtonBounds {
    fn physical(self) -> Result<[i32; 4], String> {
        if ![self.x, self.y, self.width, self.height, self.scale]
            .iter()
            .all(|value| value.is_finite())
            || !(0.0..=32768.0).contains(&self.x)
            || !(0.0..=64.0).contains(&self.y)
            || !(1.0..=96.0).contains(&self.width)
            || !(1.0..=64.0).contains(&self.height)
            || !(0.5..=8.0).contains(&self.scale)
        {
            return Err("无效的标题栏按钮位置".into());
        }
        Ok([self.x, self.y, self.width, self.height]
            .map(|value| (value * self.scale).round() as i32))
    }
}

#[tauri::command]
pub async fn set_titlebar_maximize_bounds(
    window: tauri::WebviewWindow,
    bounds: Option<CaptionButtonBounds>,
) -> Result<bool, String> {
    if window.label() != "config" {
        return Ok(false);
    }
    let physical = bounds.map(CaptionButtonBounds::physical).transpose()?;
    #[cfg(target_os = "windows")]
    {
        let (sender, receiver) = tokio::sync::oneshot::channel();
        let target = window.clone();
        window
            .run_on_main_thread(move || {
                let _ = sender.send(native::update(&target, physical));
            })
            .map_err(|error| error.to_string())?;
        receiver.await.map_err(|error| error.to_string())?
    }
    #[cfg(not(target_os = "windows"))]
    {
        let _ = physical;
        Ok(false)
    }
}

#[cfg(target_os = "windows")]
mod native {
    use tauri::{Emitter, WebviewWindow};
    use windows::{
        core::w,
        Win32::{
            Foundation::{HANDLE, HWND, LPARAM, LRESULT, RECT, WPARAM},
            Graphics::Gdi::ValidateRect,
            UI::{
                Input::KeyboardAndMouse::{
                    TrackMouseEvent, TME_LEAVE, TME_NONCLIENT, TRACKMOUSEEVENT,
                },
                Shell::{
                    DefSubclassProc, GetWindowSubclass, RemoveWindowSubclass, SetWindowSubclass,
                },
                WindowsAndMessaging::*,
            },
        },
    };

    const SUBCLASS_ID: usize = 0x53434D58;
    const TARGET_PROPERTY: windows::core::PCWSTR = w!("SnippetsCodeMaximizeTarget");

    struct Target {
        window: WebviewWindow,
        root: HWND,
        right_inset: i32,
        top: i32,
        width: i32,
        height: i32,
        hovered: bool,
        pressed: bool,
    }

    pub fn update(window: &WebviewWindow, bounds: Option<[i32; 4]>) -> Result<bool, String> {
        let root = HWND(window.hwnd().map_err(|error| error.to_string())?.0 as _);
        // 所有 HWND 和 subclass 状态只在窗口 UI 线程读写；销毁子窗口时释放状态。
        unsafe {
            let child = HWND(GetPropW(root, TARGET_PROPERTY).0);
            let Some([x, y, width, height]) = bounds else {
                if !child.0.is_null() {
                    DestroyWindow(child).map_err(|error| error.to_string())?;
                }
                return Ok(true);
            };
            let mut client = RECT::default();
            GetClientRect(root, &mut client).map_err(|error| error.to_string())?;
            if x + width > client.right || y + height > client.bottom {
                return Err("标题栏按钮超出当前窗口范围".into());
            }
            if !child.0.is_null() {
                let mut state = 0;
                if !GetWindowSubclass(child, Some(target_proc), SUBCLASS_ID, Some(&mut state))
                    .as_bool()
                    || state == 0
                {
                    return Err("标题栏原生命中区状态不可用".into());
                }
                let target = state as *mut Target;
                (*target).right_inset = client.right - x - width;
                (*target).top = y;
                (*target).width = width;
                (*target).height = height;
                SetWindowPos(
                    child,
                    Some(HWND_TOP),
                    x,
                    y,
                    width,
                    height,
                    SWP_NOACTIVATE | SWP_SHOWWINDOW,
                )
                .map_err(|error| error.to_string())?;
                return Ok(true);
            }

            // STATIC 是系统内置窗口类；不绘制、不激活，只接收最大化按钮的非客户区消息。
            let child = CreateWindowExW(
                WS_EX_TRANSPARENT | WS_EX_NOACTIVATE,
                w!("STATIC"),
                None,
                WS_CHILD | WS_VISIBLE | WS_CLIPSIBLINGS,
                x,
                y,
                width,
                height,
                Some(root),
                None,
                None,
                None,
            )
            .map_err(|error| error.to_string())?;
            let state = Box::into_raw(Box::new(Target {
                window: window.clone(),
                root,
                right_inset: client.right - x - width,
                top: y,
                width,
                height,
                hovered: false,
                pressed: false,
            }));
            if !SetWindowSubclass(child, Some(target_proc), SUBCLASS_ID, state as usize).as_bool() {
                drop(Box::from_raw(state));
                let _ = DestroyWindow(child);
                return Err("无法创建标题栏原生命中区".into());
            }
            if let Err(error) = SetPropW(root, TARGET_PROPERTY, Some(HANDLE(child.0))) {
                let _ = DestroyWindow(child);
                return Err(error.to_string());
            }
            if !SetWindowSubclass(root, Some(root_proc), SUBCLASS_ID, child.0 as usize).as_bool() {
                let _ = DestroyWindow(child);
                return Err("无法同步标题栏原生命中区位置".into());
            }
            SetWindowPos(
                child,
                Some(HWND_TOP),
                x,
                y,
                width,
                height,
                SWP_NOACTIVATE | SWP_SHOWWINDOW,
            )
            .map_err(|error| error.to_string())?;
            Ok(true)
        }
    }

    unsafe fn set_hover(target: *mut Target, hovered: bool) {
        if (*target).hovered != hovered {
            (*target).hovered = hovered;
            let _ = (*target).window.emit("titlebar-maximize-hover", hovered);
        }
    }

    unsafe extern "system" fn root_proc(
        hwnd: HWND,
        msg: u32,
        wparam: WPARAM,
        lparam: LPARAM,
        id: usize,
        data: usize,
    ) -> LRESULT {
        let result = DefSubclassProc(hwnd, msg, wparam, lparam);
        if msg == WM_SIZE && wparam.0 != SIZE_MINIMIZED as usize {
            // 在前端下一帧上报坐标前也保持右侧锚定，避免还原/贴靠时挡住相邻按钮。
            let child = HWND(data as _);
            let mut state = 0;
            if GetWindowSubclass(child, Some(target_proc), SUBCLASS_ID, Some(&mut state)).as_bool()
                && state != 0
            {
                let target = state as *const Target;
                let mut client = RECT::default();
                if GetClientRect(hwnd, &mut client).is_ok() {
                    let x = client.right - (*target).right_inset - (*target).width;
                    let (top, width, height) = ((*target).top, (*target).width, (*target).height);
                    let _ =
                        SetWindowPos(child, Some(HWND_TOP), x, top, width, height, SWP_NOACTIVATE);
                }
            }
        } else if msg == WM_NCDESTROY {
            let _ = RemoveWindowSubclass(hwnd, Some(root_proc), id);
        }
        result
    }

    unsafe extern "system" fn target_proc(
        hwnd: HWND,
        msg: u32,
        wparam: WPARAM,
        lparam: LPARAM,
        id: usize,
        data: usize,
    ) -> LRESULT {
        let target = data as *mut Target;
        match msg {
            WM_NCHITTEST => return LRESULT(HTMAXBUTTON as isize),
            WM_NCMOUSEMOVE => {
                set_hover(target, true);
                let mut tracking = TRACKMOUSEEVENT {
                    cbSize: std::mem::size_of::<TRACKMOUSEEVENT>() as u32,
                    dwFlags: TME_LEAVE | TME_NONCLIENT,
                    hwndTrack: hwnd,
                    dwHoverTime: 0,
                };
                let _ = TrackMouseEvent(&mut tracking);
            }
            WM_NCMOUSELEAVE => {
                (*target).pressed = false;
                set_hover(target, false);
            }
            WM_NCLBUTTONDOWN | WM_NCLBUTTONDBLCLK => {
                (*target).pressed = true;
                return LRESULT(0);
            }
            WM_NCLBUTTONUP => {
                let pressed = (*target).pressed;
                (*target).pressed = false;
                if pressed && wparam.0 == HTMAXBUTTON as usize {
                    let root = (*target).root;
                    let action = if IsZoomed(root).as_bool() {
                        SC_RESTORE
                    } else {
                        SC_MAXIMIZE
                    };
                    let _ = PostMessageW(
                        Some(root),
                        WM_SYSCOMMAND,
                        WPARAM(action as usize),
                        LPARAM(0),
                    );
                }
                return LRESULT(0);
            }
            WM_SETCURSOR => {
                if let Ok(cursor) = LoadCursorW(None, IDC_ARROW) {
                    SetCursor(Some(cursor));
                }
                return LRESULT(1);
            }
            WM_PAINT => {
                let _ = ValidateRect(Some(hwnd), None);
                return LRESULT(0);
            }
            WM_ERASEBKGND => return LRESULT(1),
            WM_NCDESTROY => {
                let root = (*target).root;
                let _ = RemoveWindowSubclass(hwnd, Some(target_proc), id);
                let _ = RemoveWindowSubclass(root, Some(root_proc), id);
                if GetPropW(root, TARGET_PROPERTY).0 == hwnd.0 {
                    let _ = RemovePropW(root, TARGET_PROPERTY);
                }
                set_hover(target, false);
                drop(Box::from_raw(target));
            }
            _ => {}
        }
        DefSubclassProc(hwnd, msg, wparam, lparam)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn bounds() -> CaptionButtonBounds {
        CaptionButtonBounds {
            x: 900.0,
            y: 4.0,
            width: 36.0,
            height: 32.0,
            scale: 1.5,
        }
    }

    #[test]
    fn scales_css_bounds_for_high_dpi() {
        assert_eq!(bounds().physical().unwrap(), [1350, 6, 54, 48]);
    }

    #[test]
    fn rejects_invalid_or_non_titlebar_geometry() {
        for invalid in [
            CaptionButtonBounds {
                x: f64::NAN,
                ..bounds()
            },
            CaptionButtonBounds {
                y: 100.0,
                ..bounds()
            },
            CaptionButtonBounds {
                width: 500.0,
                ..bounds()
            },
            CaptionButtonBounds {
                scale: 0.0,
                ..bounds()
            },
        ] {
            assert!(invalid.physical().is_err());
        }
    }
}
