import * as pn from "vue";
import { inject as He, ref as U, shallowRef as hr, computed as D, watch as wt, onMounted as Lt, onUnmounted as xn, defineComponent as ae, h as nl, createVNode as S, Text as pr, Fragment as Ge, getCurrentInstance as vt, unref as i, readonly as mr, getCurrentScope as gr, onScopeDispose as wr, nextTick as al, isRef as ll, warn as vr, provide as _r, createElementBlock as z, openBlock as $, mergeProps as br, renderSlot as _t, createElementVNode as m, normalizeClass as Z, Transition as zn, withCtx as st, withDirectives as Yt, normalizeStyle as Zt, createTextVNode as oe, toDisplayString as N, vShow as Xt, shallowReactive as yr, createBlock as Se, createCommentVNode as we, resolveDynamicComponent as rl, withModifiers as Dt, isVNode as At, render as Jt, renderList as kn, withKeys as sl } from "vue";
const jf = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => $f)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function kr(e, t, n, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? a : n === "a" ? a.call(e) : a ? a.value : t.get(e);
}
function Cr(e, t, n, a, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Vt;
const ke = "__TAURI_TO_IPC_KEY__";
function Sr(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function T(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Lr(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Er {
  get rid() {
    return kr(this, Vt, "f");
  }
  constructor(t) {
    Vt.set(this, void 0), Cr(this, Vt, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return T("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Vt = /* @__PURE__ */ new WeakMap();
class ol {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.width = t[0].Logical.width, this.height = t[0].Logical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the logical size to a physical one.
   * @example
   * ```typescript
   * import { LogicalSize } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = new LogicalSize(400, 500);
   * const physical = size.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new Pt(this.width * t, this.height * t);
  }
  [ke]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class Pt {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.width = t[0].Physical.width, this.height = t[0].Physical.height) : (this.width = t[0].width, this.height = t[0].height) : (this.width = t[0], this.height = t[1]);
  }
  /**
   * Converts the physical size to a logical one.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const size = await appWindow.innerSize(); // PhysicalSize
   * const logical = size.toLogical(factor);
   * ```
   */
  toLogical(t) {
    return new ol(this.width / t, this.height / t);
  }
  [ke]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class mt {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof ol ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Pt ? this.size : this.size.toPhysical(t);
  }
  [ke]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class il {
  constructor(...t) {
    this.type = "Logical", t.length === 1 ? "Logical" in t[0] ? (this.x = t[0].Logical.x, this.y = t[0].Logical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the logical position to a physical one.
   * @example
   * ```typescript
   * import { LogicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new LogicalPosition(400, 500);
   * const physical = position.toPhysical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toPhysical(t) {
    return new Ve(this.x * t, this.y * t);
  }
  [ke]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class Ve {
  constructor(...t) {
    this.type = "Physical", t.length === 1 ? "Physical" in t[0] ? (this.x = t[0].Physical.x, this.y = t[0].Physical.y) : (this.x = t[0].x, this.y = t[0].y) : (this.x = t[0], this.y = t[1]);
  }
  /**
   * Converts the physical position to a logical one.
   * @example
   * ```typescript
   * import { PhysicalPosition } from '@tauri-apps/api/dpi';
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   *
   * const appWindow = getCurrentWindow();
   * const factor = await appWindow.scaleFactor();
   * const position = new PhysicalPosition(400, 500);
   * const physical = position.toLogical(factor);
   * ```
   *
   * @since 2.0.0
   */
  toLogical(t) {
    return new il(this.x / t, this.y / t);
  }
  [ke]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ke]();
  }
}
class jt {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof il ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Ve ? this.position : this.position.toPhysical(t);
  }
  [ke]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ke]();
  }
}
var _e;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(_e || (_e = {}));
async function cl(e, t) {
  await T("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function qt(e, t, n) {
  var a;
  const l = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (a = n?.target) !== null && a !== void 0 ? a : { kind: "Any" };
  return T("plugin:event|listen", {
    event: e,
    target: l,
    handler: Sr(t)
  }).then((r) => async () => cl(e, r));
}
async function Tr(e, t, n) {
  return qt(e, (a) => {
    cl(e, a.id), t(a);
  }, n);
}
async function Ir(e, t) {
  await T("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Nr(e, t, n) {
  await T("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Ot extends Er {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, a) {
    return T("plugin:image|new", {
      rgba: Qt(t),
      width: n,
      height: a
    }).then((l) => new Ot(l));
  }
  /**
   * Creates a new image using the provided bytes by inferring the file format.
   * If the format is known, prefer [@link Image.fromPngBytes] or [@link Image.fromIcoBytes].
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromBytes(t) {
    return T("plugin:image|from_bytes", {
      bytes: Qt(t)
    }).then((n) => new Ot(n));
  }
  /**
   * Creates a new image using the provided path.
   *
   * Only `ico` and `png` are supported (based on activated feature flag).
   *
   * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   */
  static async fromPath(t) {
    return T("plugin:image|from_path", { path: t }).then((n) => new Ot(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return T("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return T("plugin:image|size", { rid: this.rid });
  }
}
function Qt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ot ? e.rid : e;
}
var Cn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Cn || (Cn = {}));
class Pr {
  constructor(t) {
    this._preventDefault = !1, this.event = t.event, this.id = t.id;
  }
  preventDefault() {
    this._preventDefault = !0;
  }
  isPreventDefault() {
    return this._preventDefault;
  }
}
var aa;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(aa || (aa = {}));
function ul() {
  return new dl(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function mn() {
  return T("plugin:window|get_all_windows").then((e) => e.map((t) => new dl(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const gn = ["tauri://created", "tauri://error"];
class dl {
  /**
   * Creates a new Window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const appWindow = new Window('my-label');
   * appWindow.once('tauri://created', function () {
   *  // window successfully created
   * });
   * appWindow.once('tauri://error', function (e) {
   *  // an error happened creating the window
   * });
   * ```
   *
   * @param label The unique window label. Must be alphanumeric: `a-zA-Z-/:_`.
   * @returns The {@link Window} instance to communicate with the window.
   */
  constructor(t, n = {}) {
    var a;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || T("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (a = n.parent) === null || a === void 0 ? void 0 : a.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (l) => this.emit("tauri://error", l));
  }
  /**
   * Gets the Window associated with the given label.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const mainWindow = Window.getByLabel('main');
   * ```
   *
   * @param label The window label.
   * @returns The Window instance to communicate with the window or null if the window doesn't exist.
   */
  static async getByLabel(t) {
    var n;
    return (n = (await mn()).find((a) => a.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ul();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return mn();
  }
  /**
   *  Gets the focused window.
   * @example
   * ```typescript
   * import { Window } from '@tauri-apps/api/window';
   * const focusedWindow = Window.getFocusedWindow();
   * ```
   *
   * @returns The Window instance or `undefined` if there is not any focused window.
   */
  static async getFocusedWindow() {
    for (const t of await mn())
      if (await t.isFocused())
        return t;
    return null;
  }
  /**
   * Listen to an emitted event on this window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().listen<string>('state-changed', (event) => {
   *   console.log(`Got error: ${payload}`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async listen(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const a = this.listeners[t];
      a.splice(a.indexOf(n), 1);
    } : qt(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Listen to an emitted event on this window only once.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const unlisten = await getCurrentWindow().once<null>('initialized', (event) => {
   *   console.log(`Window initialized!`);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param handler Event handler.
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async once(t, n) {
    return this._handleTauriEvent(t, n) ? () => {
      const a = this.listeners[t];
      a.splice(a.indexOf(n), 1);
    } : Tr(t, n, {
      target: { kind: "Window", label: this.label }
    });
  }
  /**
   * Emits an event to all {@link EventTarget|targets}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   *
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emit(t, n) {
    if (gn.includes(t)) {
      for (const a of this.listeners[t] || [])
        a({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Ir(t, n);
  }
  /**
   * Emits an event to all {@link EventTarget|targets} matching the given target.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().emit('main', 'window-loaded', { loggedIn: true, token: 'authToken' });
   * ```
   * @param target Label of the target Window/Webview/WebviewWindow or raw {@link EventTarget} object.
   * @param event Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.
   * @param payload Event payload.
   */
  async emitTo(t, n, a) {
    if (gn.includes(n)) {
      for (const l of this.listeners[n] || [])
        l({
          event: n,
          id: -1,
          payload: a
        });
      return;
    }
    return Nr(t, n, a);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return gn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
  }
  // Getters
  /**
   * The scale factor that can be used to map physical pixels to logical pixels.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const factor = await getCurrentWindow().scaleFactor();
   * ```
   *
   * @returns The window's monitor scale factor.
   */
  async scaleFactor() {
    return T("plugin:window|scale_factor", {
      label: this.label
    });
  }
  /**
   * The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().innerPosition();
   * ```
   *
   * @returns The window's inner position.
   */
  async innerPosition() {
    return T("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Ve(t));
  }
  /**
   * The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const position = await getCurrentWindow().outerPosition();
   * ```
   *
   * @returns The window's outer position.
   */
  async outerPosition() {
    return T("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Ve(t));
  }
  /**
   * The physical size of the window's client area.
   * The client area is the content of the window, excluding the title bar and borders.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().innerSize();
   * ```
   *
   * @returns The window's inner size.
   */
  async innerSize() {
    return T("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Pt(t));
  }
  /**
   * The physical size of the entire window.
   * These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const size = await getCurrentWindow().outerSize();
   * ```
   *
   * @returns The window's outer size.
   */
  async outerSize() {
    return T("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Pt(t));
  }
  /**
   * Gets the window's current fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const fullscreen = await getCurrentWindow().isFullscreen();
   * ```
   *
   * @returns Whether the window is in fullscreen mode or not.
   */
  async isFullscreen() {
    return T("plugin:window|is_fullscreen", {
      label: this.label
    });
  }
  /**
   * Gets the window's current minimized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimized = await getCurrentWindow().isMinimized();
   * ```
   */
  async isMinimized() {
    return T("plugin:window|is_minimized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximized = await getCurrentWindow().isMaximized();
   * ```
   *
   * @returns Whether the window is maximized or not.
   */
  async isMaximized() {
    return T("plugin:window|is_maximized", {
      label: this.label
    });
  }
  /**
   * Gets the window's current focus state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const focused = await getCurrentWindow().isFocused();
   * ```
   *
   * @returns Whether the window is focused or not.
   */
  async isFocused() {
    return T("plugin:window|is_focused", {
      label: this.label
    });
  }
  /**
   * Gets the window's current decorated state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const decorated = await getCurrentWindow().isDecorated();
   * ```
   *
   * @returns Whether the window is decorated or not.
   */
  async isDecorated() {
    return T("plugin:window|is_decorated", {
      label: this.label
    });
  }
  /**
   * Gets the window's current resizable state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const resizable = await getCurrentWindow().isResizable();
   * ```
   *
   * @returns Whether the window is resizable or not.
   */
  async isResizable() {
    return T("plugin:window|is_resizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native maximize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const maximizable = await getCurrentWindow().isMaximizable();
   * ```
   *
   * @returns Whether the window's native maximize button is enabled or not.
   */
  async isMaximizable() {
    return T("plugin:window|is_maximizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native minimize button state.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const minimizable = await getCurrentWindow().isMinimizable();
   * ```
   *
   * @returns Whether the window's native minimize button is enabled or not.
   */
  async isMinimizable() {
    return T("plugin:window|is_minimizable", {
      label: this.label
    });
  }
  /**
   * Gets the window's native close button state.
   *
   * #### Platform-specific
   *
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const closable = await getCurrentWindow().isClosable();
   * ```
   *
   * @returns Whether the window's native close button is enabled or not.
   */
  async isClosable() {
    return T("plugin:window|is_closable", {
      label: this.label
    });
  }
  /**
   * Gets the window's current visible state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const visible = await getCurrentWindow().isVisible();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isVisible() {
    return T("plugin:window|is_visible", {
      label: this.label
    });
  }
  /**
   * Gets the window's current title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const title = await getCurrentWindow().title();
   * ```
   */
  async title() {
    return T("plugin:window|title", {
      label: this.label
    });
  }
  /**
   * Gets the window's current theme.
   *
   * #### Platform-specific
   *
   * - **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const theme = await getCurrentWindow().theme();
   * ```
   *
   * @returns The window theme.
   */
  async theme() {
    return T("plugin:window|theme", {
      label: this.label
    });
  }
  /**
   * Whether the window is configured to be always on top of other windows or not.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * const alwaysOnTop = await getCurrentWindow().isAlwaysOnTop();
   * ```
   *
   * @returns Whether the window is visible or not.
   */
  async isAlwaysOnTop() {
    return T("plugin:window|is_always_on_top", {
      label: this.label
    });
  }
  // Setters
  /**
   * Centers the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().center();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async center() {
    return T("plugin:window|center", {
      label: this.label
    });
  }
  /**
   *  Requests user attention to the window, this has no effect if the application
   * is already focused. How requesting for user attention manifests is platform dependent,
   * see `UserAttentionType` for details.
   *
   * Providing `null` will unset the request for user attention. Unsetting the request for
   * user attention might not be done automatically by the WM when the window receives input.
   *
   * #### Platform-specific
   *
   * - **macOS:** `null` has no effect.
   * - **Linux:** Urgency levels have the same effect.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().requestUserAttention();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async requestUserAttention(t) {
    let n = null;
    return t && (t === Cn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), T("plugin:window|request_user_attention", {
      label: this.label,
      value: n
    });
  }
  /**
   * Updates the window resizable flag.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setResizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setResizable(t) {
    return T("plugin:window|set_resizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Enable or disable the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async setEnabled(t) {
    return T("plugin:window|set_enabled", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window is enabled or disabled.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setEnabled(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.0.0
   */
  async isEnabled() {
    return T("plugin:window|is_enabled", {
      label: this.label
    });
  }
  /**
   * Sets whether the window's native maximize button is enabled or not.
   * If resizable is set to false, this setting is ignored.
   *
   * #### Platform-specific
   *
   * - **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaximizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaximizable(t) {
    return T("plugin:window|set_maximizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native minimize button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux / iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinimizable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinimizable(t) {
    return T("plugin:window|set_minimizable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window's native close button is enabled or not.
   *
   * #### Platform-specific
   *
   * - **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
   * - **iOS / Android:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setClosable(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setClosable(t) {
    return T("plugin:window|set_closable", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window title.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setTitle('Tauri');
   * ```
   *
   * @param title The new title
   * @returns A promise indicating the success or failure of the operation.
   */
  async setTitle(t) {
    return T("plugin:window|set_title", {
      label: this.label,
      value: t
    });
  }
  /**
   * Maximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().maximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async maximize() {
    return T("plugin:window|maximize", {
      label: this.label
    });
  }
  /**
   * Unmaximizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unmaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unmaximize() {
    return T("plugin:window|unmaximize", {
      label: this.label
    });
  }
  /**
   * Toggles the window maximized state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().toggleMaximize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async toggleMaximize() {
    return T("plugin:window|toggle_maximize", {
      label: this.label
    });
  }
  /**
   * Minimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().minimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async minimize() {
    return T("plugin:window|minimize", {
      label: this.label
    });
  }
  /**
   * Unminimizes the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().unminimize();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async unminimize() {
    return T("plugin:window|unminimize", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to true.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().show();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async show() {
    return T("plugin:window|show", {
      label: this.label
    });
  }
  /**
   * Sets the window visibility to false.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().hide();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async hide() {
    return T("plugin:window|hide", {
      label: this.label
    });
  }
  /**
   * Closes the window.
   *
   * Note this emits a closeRequested event so you can intercept it. To force window close, use {@link Window.destroy}.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().close();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async close() {
    return T("plugin:window|close", {
      label: this.label
    });
  }
  /**
   * Destroys the window. Behaves like {@link Window.close} but forces the window close instead of emitting a closeRequested event.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().destroy();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async destroy() {
    return T("plugin:window|destroy", {
      label: this.label
    });
  }
  /**
   * Whether the window should have borders and bars.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setDecorations(false);
   * ```
   *
   * @param decorations Whether the window should have borders and bars.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setDecorations(t) {
    return T("plugin:window|set_decorations", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether or not the window should have shadow.
   *
   * #### Platform-specific
   *
   * - **Windows:**
   *   - `false` has no effect on decorated window, shadows are always ON.
   *   - `true` will make undecorated window have a 1px white border,
   * and on Windows 11, it will have a rounded corners.
   * - **Linux:** Unsupported.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setShadow(false);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setShadow(t) {
    return T("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return T("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return T("plugin:window|set_effects", {
      label: this.label,
      value: null
    });
  }
  /**
   * Whether the window should always be on top of other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnTop(true);
   * ```
   *
   * @param alwaysOnTop Whether the window should always be on top of other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnTop(t) {
    return T("plugin:window|set_always_on_top", {
      label: this.label,
      value: t
    });
  }
  /**
   * Whether the window should always be below other windows.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setAlwaysOnBottom(true);
   * ```
   *
   * @param alwaysOnBottom Whether the window should always be below other windows or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setAlwaysOnBottom(t) {
    return T("plugin:window|set_always_on_bottom", {
      label: this.label,
      value: t
    });
  }
  /**
   * Prevents the window contents from being captured by other apps.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setContentProtected(true);
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setContentProtected(t) {
    return T("plugin:window|set_content_protected", {
      label: this.label,
      value: t
    });
  }
  /**
   * Resizes the window with a new inner size.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSize(t) {
    return T("plugin:window|set_size", {
      label: this.label,
      value: t instanceof mt ? t : new mt(t)
    });
  }
  /**
   * Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, PhysicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMinSize(new PhysicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMinSize(t) {
    return T("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof mt ? t : t ? new mt(t) : null
    });
  }
  /**
   * Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
   * await getCurrentWindow().setMaxSize(new LogicalSize(600, 500));
   * ```
   *
   * @param size The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setMaxSize(t) {
    return T("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof mt ? t : t ? new mt(t) : null
    });
  }
  /**
   * Sets the window inner size constraints.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSizeConstraints({ minWidth: 300 });
   * ```
   *
   * @param constraints The logical or physical inner size, or `null` to unset the constraint.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSizeConstraints(t) {
    function n(a) {
      return a ? { Logical: a } : null;
    }
    return T("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: n(t?.minWidth),
        minHeight: n(t?.minHeight),
        maxWidth: n(t?.maxWidth),
        maxHeight: n(t?.maxHeight)
      }
    });
  }
  /**
   * Sets the window outer position.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setPosition(new LogicalPosition(600, 500));
   * ```
   *
   * @param position The new position, in logical or physical pixels.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setPosition(t) {
    return T("plugin:window|set_position", {
      label: this.label,
      value: t instanceof jt ? t : new jt(t)
    });
  }
  /**
   * Sets the window fullscreen state.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFullscreen(true);
   * ```
   *
   * @param fullscreen Whether the window should go to fullscreen or not.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFullscreen(t) {
    return T("plugin:window|set_fullscreen", {
      label: this.label,
      value: t
    });
  }
  /**
   * Bring the window to front and focus.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setFocus();
   * ```
   *
   * @returns A promise indicating the success or failure of the operation.
   */
  async setFocus() {
    return T("plugin:window|set_focus", {
      label: this.label
    });
  }
  /**
   * Sets the window icon.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIcon('/tauri/awesome.png');
   * ```
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @param icon Icon bytes or path to the icon file.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIcon(t) {
    return T("plugin:window|set_icon", {
      label: this.label,
      value: Qt(t)
    });
  }
  /**
   * Whether the window icon should be hidden from the taskbar or not.
   *
   * #### Platform-specific
   *
   * - **macOS:** Unsupported.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setSkipTaskbar(true);
   * ```
   *
   * @param skip true to hide window icon, false to show it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setSkipTaskbar(t) {
    return T("plugin:window|set_skip_taskbar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Grabs the cursor, preventing it from leaving the window.
   *
   * There's no guarantee that the cursor will be hidden. You should
   * hide it by yourself if you want so.
   *
   * #### Platform-specific
   *
   * - **Linux:** Unsupported.
   * - **macOS:** This locks the cursor in a fixed location, which looks visually awkward.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorGrab(true);
   * ```
   *
   * @param grab `true` to grab the cursor icon, `false` to release it.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorGrab(t) {
    return T("plugin:window|set_cursor_grab", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor's visibility.
   *
   * #### Platform-specific
   *
   * - **Windows:** The cursor is only hidden within the confines of the window.
   * - **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
   *   outside of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorVisible(false);
   * ```
   *
   * @param visible If `false`, this will hide the cursor. If `true`, this will show the cursor.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorVisible(t) {
    return T("plugin:window|set_cursor_visible", {
      label: this.label,
      value: t
    });
  }
  /**
   * Modifies the cursor icon of the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorIcon('help');
   * ```
   *
   * @param icon The new cursor icon.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorIcon(t) {
    return T("plugin:window|set_cursor_icon", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the window background color.
   *
   * #### Platform-specific:
   *
   * - **Windows:** alpha channel is ignored.
   * - **iOS / Android:** Unsupported.
   *
   * @returns A promise indicating the success or failure of the operation.
   *
   * @since 2.1.0
   */
  async setBackgroundColor(t) {
    return T("plugin:window|set_background_color", { color: t });
  }
  /**
   * Changes the position of the cursor in window coordinates.
   * @example
   * ```typescript
   * import { getCurrentWindow, LogicalPosition } from '@tauri-apps/api/window';
   * await getCurrentWindow().setCursorPosition(new LogicalPosition(600, 300));
   * ```
   *
   * @param position The new cursor position.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setCursorPosition(t) {
    return T("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof jt ? t : new jt(t)
    });
  }
  /**
   * Changes the cursor events behavior.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setIgnoreCursorEvents(true);
   * ```
   *
   * @param ignore `true` to ignore the cursor events; `false` to process them as usual.
   * @returns A promise indicating the success or failure of the operation.
   */
  async setIgnoreCursorEvents(t) {
    return T("plugin:window|set_ignore_cursor_events", {
      label: this.label,
      value: t
    });
  }
  /**
   * Starts dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startDragging() {
    return T("plugin:window|start_dragging", {
      label: this.label
    });
  }
  /**
   * Starts resize-dragging the window.
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().startResizeDragging();
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async startResizeDragging(t) {
    return T("plugin:window|start_resize_dragging", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge count. It is app wide and not specific to this window.
   *
   * #### Platform-specific
   *
   * - **Windows**: Unsupported. Use @{linkcode Window.setOverlayIcon} instead.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeCount(5);
   * ```
   *
   * @param count The badge count. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeCount(t) {
    return T("plugin:window|set_badge_count", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the badge cont **macOS only**.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setBadgeLabel("Hello");
   * ```
   *
   * @param label The badge label. Use `undefined` to remove the badge.
   * @return A promise indicating the success or failure of the operation.
   */
  async setBadgeLabel(t) {
    return T("plugin:window|set_badge_label", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the overlay icon. **Windows only**
   * The overlay icon can be set for every window.
   *
   *
   * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
   * To enable it, change your Cargo.toml file:
   *
   * ```toml
   * [dependencies]
   * tauri = { version = "...", features = ["...", "image-png"] }
   * ```
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from '@tauri-apps/api/window';
   * await getCurrentWindow().setOverlayIcon("/tauri/awesome.png");
   * ```
   *
   * @param icon Icon bytes or path to the icon file. Use `undefined` to remove the overlay icon.
   * @return A promise indicating the success or failure of the operation.
   */
  async setOverlayIcon(t) {
    return T("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Qt(t) : void 0
    });
  }
  /**
   * Sets the taskbar progress state.
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Progress bar is app-wide and not specific to this window.
   * - **Linux**: Only supported desktop environments with `libunity` (e.g. GNOME).
   *
   * @example
   * ```typescript
   * import { getCurrentWindow, ProgressBarStatus } from '@tauri-apps/api/window';
   * await getCurrentWindow().setProgressBar({
   *   status: ProgressBarStatus.Normal,
   *   progress: 50,
   * });
   * ```
   *
   * @return A promise indicating the success or failure of the operation.
   */
  async setProgressBar(t) {
    return T("plugin:window|set_progress_bar", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets whether the window should be visible on all workspaces or virtual desktops.
   *
   * #### Platform-specific
   *
   * - **Windows / iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setVisibleOnAllWorkspaces(t) {
    return T("plugin:window|set_visible_on_all_workspaces", {
      label: this.label,
      value: t
    });
  }
  /**
   * Sets the title bar style. **macOS only**.
   *
   * @since 2.0.0
   */
  async setTitleBarStyle(t) {
    return T("plugin:window|set_title_bar_style", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window theme, pass in `null` or `undefined` to follow system theme
   *
   * #### Platform-specific
   *
   * - **Linux / macOS**: Theme is app-wide and not specific to this window.
   * - **iOS / Android:** Unsupported.
   *
   * @since 2.0.0
   */
  async setTheme(t) {
    return T("plugin:window|set_theme", {
      label: this.label,
      value: t
    });
  }
  // Listeners
  /**
   * Listen to window resize.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onResized(({ payload: size }) => {
   *  console.log('Window resized', size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onResized(t) {
    return this.listen(_e.WINDOW_RESIZED, (n) => {
      n.payload = new Pt(n.payload), t(n);
    });
  }
  /**
   * Listen to window move.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onMoved(({ payload: position }) => {
   *  console.log('Window moved', position);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onMoved(t) {
    return this.listen(_e.WINDOW_MOVED, (n) => {
      n.payload = new Ve(n.payload), t(n);
    });
  }
  /**
   * Listen to window close requested. Emitted when the user requests to closes the window.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * import { confirm } from '@tauri-apps/api/dialog';
   * const unlisten = await getCurrentWindow().onCloseRequested(async (event) => {
   *   const confirmed = await confirm('Are you sure?');
   *   if (!confirmed) {
   *     // user did not confirm closing the window; let's prevent it
   *     event.preventDefault();
   *   }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onCloseRequested(t) {
    return this.listen(_e.WINDOW_CLOSE_REQUESTED, async (n) => {
      const a = new Pr(n);
      await t(a), a.isPreventDefault() || await this.destroy();
    });
  }
  /**
   * Listen to a file drop event.
   * The listener is triggered when the user hovers the selected files on the webview,
   * drops the files or cancels the operation.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/webview";
   * const unlisten = await getCurrentWindow().onDragDropEvent((event) => {
   *  if (event.payload.type === 'over') {
   *    console.log('User hovering', event.payload.position);
   *  } else if (event.payload.type === 'drop') {
   *    console.log('User dropped', event.payload.paths);
   *  } else {
   *    console.log('File drop cancelled');
   *  }
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onDragDropEvent(t) {
    const n = await this.listen(_e.DRAG_ENTER, (s) => {
      t({
        ...s,
        payload: {
          type: "enter",
          paths: s.payload.paths,
          position: new Ve(s.payload.position)
        }
      });
    }), a = await this.listen(_e.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new Ve(s.payload.position)
        }
      });
    }), l = await this.listen(_e.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new Ve(s.payload.position)
        }
      });
    }), r = await this.listen(_e.DRAG_LEAVE, (s) => {
      t({ ...s, payload: { type: "leave" } });
    });
    return () => {
      n(), l(), a(), r();
    };
  }
  /**
   * Listen to window focus change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onFocusChanged(({ payload: focused }) => {
   *  console.log('Focus changed, window is focused? ' + focused);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onFocusChanged(t) {
    const n = await this.listen(_e.WINDOW_FOCUS, (l) => {
      t({ ...l, payload: !0 });
    }), a = await this.listen(_e.WINDOW_BLUR, (l) => {
      t({ ...l, payload: !1 });
    });
    return () => {
      n(), a();
    };
  }
  /**
   * Listen to window scale change. Emitted when the window's scale factor has changed.
   * The following user actions can cause DPI changes:
   * - Changing the display's resolution.
   * - Changing the display's scale factor (e.g. in Control Panel on Windows).
   * - Moving the window to a display with a different scale factor.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onScaleChanged(({ payload }) => {
   *  console.log('Scale changed', payload.scaleFactor, payload.size);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onScaleChanged(t) {
    return this.listen(_e.WINDOW_SCALE_FACTOR_CHANGED, t);
  }
  /**
   * Listen to the system theme change.
   *
   * @example
   * ```typescript
   * import { getCurrentWindow } from "@tauri-apps/api/window";
   * const unlisten = await getCurrentWindow().onThemeChanged(({ payload: theme }) => {
   *  console.log('New theme: ' + theme);
   * });
   *
   * // you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
   * unlisten();
   * ```
   *
   * @returns A promise resolving to a function to unlisten to the event.
   * Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
   */
  async onThemeChanged(t) {
    return this.listen(_e.WINDOW_THEME_CHANGED, t);
  }
}
var la;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(la || (la = {}));
var ra;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ra || (ra = {}));
var sa;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(sa || (sa = {}));
async function oa(e = {}) {
  return typeof e == "object" && Object.freeze(e), await T("plugin:dialog|open", { options: e });
}
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Or(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ia = typeof window < "u", ut = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ar = (e, t, n) => Fr({ l: e, k: t, s: n }), Fr = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ie = (e) => typeof e == "number" && isFinite(e), Mr = (e) => Un(e) === "[object Date]", en = (e) => Un(e) === "[object RegExp]", on = (e) => H(e) && Object.keys(e).length === 0, de = Object.assign, Wr = Object.create, X = (e = null) => Wr(e);
let ca;
const Ht = () => ca || (ca = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : X());
function ua(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function da(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Rr(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (a, l, r) => `${l}="${da(r)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (a, l, r) => `${l}='${da(r)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((a) => {
    e = e.replace(a, "$1javascript&#58;");
  }), e;
}
const $r = Object.prototype.hasOwnProperty;
function Le(e, t) {
  return $r.call(e, t);
}
const se = Array.isArray, ne = (e) => typeof e == "function", M = (e) => typeof e == "string", re = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", Dr = (e) => G(e) && ne(e.then) && ne(e.catch), fl = Object.prototype.toString, Un = (e) => fl.call(e), H = (e) => Un(e) === "[object Object]", jr = (e) => e == null ? "" : se(e) || H(e) && e.toString === fl ? JSON.stringify(e, null, 2) : String(e);
function Vn(e, t = "") {
  return e.reduce((n, a, l) => l === 0 ? n + a : n + t + a, "");
}
const xt = (e) => !G(e) || se(e);
function Gt(e, t) {
  if (xt(e) || xt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: a, des: l } = n.pop();
    Object.keys(a).forEach((r) => {
      r !== "__proto__" && (G(a[r]) && !G(l[r]) && (l[r] = Array.isArray(a[r]) ? [] : X()), xt(l[r]) || xt(a[r]) ? l[r] = a[r] : n.push({ src: a[r], des: l[r] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function xr(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Sn(e, t, n) {
  return { start: e, end: t };
}
const K = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14
}, zr = 17;
function cn(e, t, n = {}) {
  const { domain: a, messages: l, args: r } = n, s = e, c = new SyntaxError(String(s));
  return c.code = e, t && (c.location = t), c.domain = a, c;
}
function Ur(e) {
  throw e;
}
const Te = " ", Vr = "\r", pe = `
`, Hr = "\u2028", Gr = "\u2029";
function Kr(e) {
  const t = e;
  let n = 0, a = 1, l = 1, r = 0;
  const s = (b) => t[b] === Vr && t[b + 1] === pe, c = (b) => t[b] === pe, d = (b) => t[b] === Gr, h = (b) => t[b] === Hr, v = (b) => s(b) || c(b) || d(b) || h(b), k = () => n, L = () => a, O = () => l, W = () => r, _ = (b) => s(b) || d(b) || h(b) ? pe : t[b], E = () => _(n), o = () => _(n + r);
  function p() {
    return r = 0, v(n) && (a++, l = 0), s(n) && n++, n++, l++, t[n];
  }
  function w() {
    return s(n + r) && r++, r++, t[n + r];
  }
  function y() {
    n = 0, a = 1, l = 1, r = 0;
  }
  function P(b = 0) {
    r = b;
  }
  function A() {
    const b = n + r;
    for (; b !== n; )
      p();
    r = 0;
  }
  return {
    index: k,
    line: L,
    column: O,
    peekOffset: W,
    charAt: _,
    currentChar: E,
    currentPeek: o,
    next: p,
    peek: w,
    reset: y,
    resetPeek: P,
    skipToPeek: A
  };
}
const Ae = void 0, Br = ".", fa = "'", Yr = "tokenizer";
function Zr(e, t = {}) {
  const n = t.location !== !1, a = Kr(e), l = () => a.index(), r = () => xr(a.line(), a.column(), a.index()), s = r(), c = l(), d = {
    currentType: 13,
    offset: c,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: c,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, h = () => d, { onError: v } = t;
  function k(u, f, C, ...F) {
    const Q = h();
    if (f.column += C, f.offset += C, v) {
      const x = n ? Sn(Q.startLoc, f) : null, g = cn(u, x, {
        domain: Yr,
        args: F
      });
      v(g);
    }
  }
  function L(u, f, C) {
    u.endLoc = r(), u.currentType = f;
    const F = { type: f };
    return n && (F.loc = Sn(u.startLoc, u.endLoc)), C != null && (F.value = C), F;
  }
  const O = (u) => L(
    u,
    13
    /* TokenTypes.EOF */
  );
  function W(u, f) {
    return u.currentChar() === f ? (u.next(), f) : (k(K.EXPECTED_TOKEN, r(), 0, f), "");
  }
  function _(u) {
    let f = "";
    for (; u.currentPeek() === Te || u.currentPeek() === pe; )
      f += u.currentPeek(), u.peek();
    return f;
  }
  function E(u) {
    const f = _(u);
    return u.skipToPeek(), f;
  }
  function o(u) {
    if (u === Ae)
      return !1;
    const f = u.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f === 95;
  }
  function p(u) {
    if (u === Ae)
      return !1;
    const f = u.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function w(u, f) {
    const { currentType: C } = f;
    if (C !== 2)
      return !1;
    _(u);
    const F = o(u.currentPeek());
    return u.resetPeek(), F;
  }
  function y(u, f) {
    const { currentType: C } = f;
    if (C !== 2)
      return !1;
    _(u);
    const F = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), Q = p(F);
    return u.resetPeek(), Q;
  }
  function P(u, f) {
    const { currentType: C } = f;
    if (C !== 2)
      return !1;
    _(u);
    const F = u.currentPeek() === fa;
    return u.resetPeek(), F;
  }
  function A(u, f) {
    const { currentType: C } = f;
    if (C !== 7)
      return !1;
    _(u);
    const F = u.currentPeek() === ".";
    return u.resetPeek(), F;
  }
  function b(u, f) {
    const { currentType: C } = f;
    if (C !== 8)
      return !1;
    _(u);
    const F = o(u.currentPeek());
    return u.resetPeek(), F;
  }
  function q(u, f) {
    const { currentType: C } = f;
    if (!(C === 7 || C === 11))
      return !1;
    _(u);
    const F = u.currentPeek() === ":";
    return u.resetPeek(), F;
  }
  function J(u, f) {
    const { currentType: C } = f;
    if (C !== 9)
      return !1;
    const F = () => {
      const x = u.currentPeek();
      return x === "{" ? o(u.peek()) : x === "@" || x === "|" || x === ":" || x === "." || x === Te || !x ? !1 : x === pe ? (u.peek(), F()) : ue(u, !1);
    }, Q = F();
    return u.resetPeek(), Q;
  }
  function ce(u) {
    _(u);
    const f = u.currentPeek() === "|";
    return u.resetPeek(), f;
  }
  function ue(u, f = !0) {
    const C = (Q = !1, x = "") => {
      const g = u.currentPeek();
      return g === "{" || g === "@" || !g ? Q : g === "|" ? !(x === Te || x === pe) : g === Te ? (u.peek(), C(!0, Te)) : g === pe ? (u.peek(), C(!0, pe)) : !0;
    }, F = C();
    return f && u.resetPeek(), F;
  }
  function ee(u, f) {
    const C = u.currentChar();
    return C === Ae ? Ae : f(C) ? (u.next(), C) : null;
  }
  function Re(u) {
    const f = u.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36;
  }
  function Ye(u) {
    return ee(u, Re);
  }
  function Ze(u) {
    const f = u.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36 || // $
    f === 45;
  }
  function ye(u) {
    return ee(u, Ze);
  }
  function Xe(u) {
    const f = u.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function Je(u) {
    return ee(u, Xe);
  }
  function ve(u) {
    const f = u.charCodeAt(0);
    return f >= 48 && f <= 57 || // 0-9
    f >= 65 && f <= 70 || // A-F
    f >= 97 && f <= 102;
  }
  function $e(u) {
    return ee(u, ve);
  }
  function De(u) {
    let f = "", C = "";
    for (; f = Je(u); )
      C += f;
    return C;
  }
  function je(u) {
    let f = "";
    for (; ; ) {
      const C = u.currentChar();
      if (C === "{" || C === "}" || C === "@" || C === "|" || !C)
        break;
      if (C === Te || C === pe)
        if (ue(u))
          f += C, u.next();
        else {
          if (ce(u))
            break;
          f += C, u.next();
        }
      else
        f += C, u.next();
    }
    return f;
  }
  function qe(u) {
    E(u);
    let f = "", C = "";
    for (; f = ye(u); )
      C += f;
    const F = u.currentChar();
    if (F && F !== "}" && F !== Ae && F !== Te && F !== pe && F !== "　") {
      const Q = at(u);
      return k(K.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, C + Q), C + Q;
    }
    return u.currentChar() === Ae && k(K.UNTERMINATED_CLOSING_BRACE, r(), 0), C;
  }
  function xe(u) {
    E(u);
    let f = "";
    return u.currentChar() === "-" ? (u.next(), f += `-${De(u)}`) : f += De(u), u.currentChar() === Ae && k(K.UNTERMINATED_CLOSING_BRACE, r(), 0), f;
  }
  function Qe(u) {
    return u !== fa && u !== pe;
  }
  function et(u) {
    E(u), W(u, "'");
    let f = "", C = "";
    for (; f = ee(u, Qe); )
      f === "\\" ? C += tt(u) : C += f;
    const F = u.currentChar();
    return F === pe || F === Ae ? (k(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), F === pe && (u.next(), W(u, "'")), C) : (W(u, "'"), C);
  }
  function tt(u) {
    const f = u.currentChar();
    switch (f) {
      case "\\":
      case "'":
        return u.next(), `\\${f}`;
      case "u":
        return ze(u, f, 4);
      case "U":
        return ze(u, f, 6);
      default:
        return k(K.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, f), "";
    }
  }
  function ze(u, f, C) {
    W(u, f);
    let F = "";
    for (let Q = 0; Q < C; Q++) {
      const x = $e(u);
      if (!x) {
        k(K.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${f}${F}${u.currentChar()}`);
        break;
      }
      F += x;
    }
    return `\\${f}${F}`;
  }
  function nt(u) {
    return u !== "{" && u !== "}" && u !== Te && u !== pe;
  }
  function at(u) {
    E(u);
    let f = "", C = "";
    for (; f = ee(u, nt); )
      C += f;
    return C;
  }
  function j(u) {
    let f = "", C = "";
    for (; f = Ye(u); )
      C += f;
    return C;
  }
  function V(u) {
    const f = (C) => {
      const F = u.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Te ? C : (C += F, u.next(), f(C));
    };
    return f("");
  }
  function le(u) {
    E(u);
    const f = W(
      u,
      "|"
      /* TokenChars.Pipe */
    );
    return E(u), f;
  }
  function ge(u, f) {
    let C = null;
    switch (u.currentChar()) {
      case "{":
        return f.braceNest >= 1 && k(K.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), u.next(), C = L(
          f,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(u), f.braceNest++, C;
      case "}":
        return f.braceNest > 0 && f.currentType === 2 && k(K.EMPTY_PLACEHOLDER, r(), 0), u.next(), C = L(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), f.braceNest--, f.braceNest > 0 && E(u), f.inLinked && f.braceNest === 0 && (f.inLinked = !1), C;
      case "@":
        return f.braceNest > 0 && k(K.UNTERMINATED_CLOSING_BRACE, r(), 0), C = Ue(u, f) || O(f), f.braceNest = 0, C;
      default: {
        let Q = !0, x = !0, g = !0;
        if (ce(u))
          return f.braceNest > 0 && k(K.UNTERMINATED_CLOSING_BRACE, r(), 0), C = L(f, 1, le(u)), f.braceNest = 0, f.inLinked = !1, C;
        if (f.braceNest > 0 && (f.currentType === 4 || f.currentType === 5 || f.currentType === 6))
          return k(K.UNTERMINATED_CLOSING_BRACE, r(), 0), f.braceNest = 0, lt(u, f);
        if (Q = w(u, f))
          return C = L(f, 4, qe(u)), E(u), C;
        if (x = y(u, f))
          return C = L(f, 5, xe(u)), E(u), C;
        if (g = P(u, f))
          return C = L(f, 6, et(u)), E(u), C;
        if (!Q && !x && !g)
          return C = L(f, 12, at(u)), k(K.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, C.value), E(u), C;
        break;
      }
    }
    return C;
  }
  function Ue(u, f) {
    const { currentType: C } = f;
    let F = null;
    const Q = u.currentChar();
    switch ((C === 7 || C === 8 || C === 11 || C === 9) && (Q === pe || Q === Te) && k(K.INVALID_LINKED_FORMAT, r(), 0), Q) {
      case "@":
        return u.next(), F = L(
          f,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), f.inLinked = !0, F;
      case ".":
        return E(u), u.next(), L(
          f,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(u), u.next(), L(
          f,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ce(u) ? (F = L(f, 1, le(u)), f.braceNest = 0, f.inLinked = !1, F) : A(u, f) || q(u, f) ? (E(u), Ue(u, f)) : b(u, f) ? (E(u), L(f, 11, j(u))) : J(u, f) ? (E(u), Q === "{" ? ge(u, f) || F : L(f, 10, V(u))) : (C === 7 && k(K.INVALID_LINKED_FORMAT, r(), 0), f.braceNest = 0, f.inLinked = !1, lt(u, f));
    }
  }
  function lt(u, f) {
    let C = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (f.braceNest > 0)
      return ge(u, f) || O(f);
    if (f.inLinked)
      return Ue(u, f) || O(f);
    switch (u.currentChar()) {
      case "{":
        return ge(u, f) || O(f);
      case "}":
        return k(K.UNBALANCED_CLOSING_BRACE, r(), 0), u.next(), L(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ue(u, f) || O(f);
      default: {
        if (ce(u))
          return C = L(f, 1, le(u)), f.braceNest = 0, f.inLinked = !1, C;
        if (ue(u))
          return L(f, 0, je(u));
        break;
      }
    }
    return C;
  }
  function ht() {
    const { currentType: u, offset: f, startLoc: C, endLoc: F } = d;
    return d.lastType = u, d.lastOffset = f, d.lastStartLoc = C, d.lastEndLoc = F, d.offset = l(), d.startLoc = r(), a.currentChar() === Ae ? L(
      d,
      13
      /* TokenTypes.EOF */
    ) : lt(a, d);
  }
  return {
    nextToken: ht,
    currentOffset: l,
    currentPosition: r,
    context: h
  };
}
const Xr = "parser", Jr = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function qr(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const a = parseInt(t || n, 16);
      return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "�";
    }
  }
}
function Qr(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function a(o, p, w, y, ...P) {
    const A = o.currentPosition();
    if (A.offset += y, A.column += y, n) {
      const b = t ? Sn(w, A) : null, q = cn(p, b, {
        domain: Xr,
        args: P
      });
      n(q);
    }
  }
  function l(o, p, w) {
    const y = { type: o };
    return t && (y.start = p, y.end = p, y.loc = { start: w, end: w }), y;
  }
  function r(o, p, w, y) {
    t && (o.end = p, o.loc && (o.loc.end = w));
  }
  function s(o, p) {
    const w = o.context(), y = l(3, w.offset, w.startLoc);
    return y.value = p, r(y, o.currentOffset(), o.currentPosition()), y;
  }
  function c(o, p) {
    const w = o.context(), { lastOffset: y, lastStartLoc: P } = w, A = l(5, y, P);
    return A.index = parseInt(p, 10), o.nextToken(), r(A, o.currentOffset(), o.currentPosition()), A;
  }
  function d(o, p) {
    const w = o.context(), { lastOffset: y, lastStartLoc: P } = w, A = l(4, y, P);
    return A.key = p, o.nextToken(), r(A, o.currentOffset(), o.currentPosition()), A;
  }
  function h(o, p) {
    const w = o.context(), { lastOffset: y, lastStartLoc: P } = w, A = l(9, y, P);
    return A.value = p.replace(Jr, qr), o.nextToken(), r(A, o.currentOffset(), o.currentPosition()), A;
  }
  function v(o) {
    const p = o.nextToken(), w = o.context(), { lastOffset: y, lastStartLoc: P } = w, A = l(8, y, P);
    return p.type !== 11 ? (a(o, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, w.lastStartLoc, 0), A.value = "", r(A, y, P), {
      nextConsumeToken: p,
      node: A
    }) : (p.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(p)), A.value = p.value || "", r(A, o.currentOffset(), o.currentPosition()), {
      node: A
    });
  }
  function k(o, p) {
    const w = o.context(), y = l(7, w.offset, w.startLoc);
    return y.value = p, r(y, o.currentOffset(), o.currentPosition()), y;
  }
  function L(o) {
    const p = o.context(), w = l(6, p.offset, p.startLoc);
    let y = o.nextToken();
    if (y.type === 8) {
      const P = v(o);
      w.modifier = P.node, y = P.nextConsumeToken || o.nextToken();
    }
    switch (y.type !== 9 && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(y)), y = o.nextToken(), y.type === 2 && (y = o.nextToken()), y.type) {
      case 10:
        y.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(y)), w.key = k(o, y.value || "");
        break;
      case 4:
        y.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(y)), w.key = d(o, y.value || "");
        break;
      case 5:
        y.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(y)), w.key = c(o, y.value || "");
        break;
      case 6:
        y.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(y)), w.key = h(o, y.value || "");
        break;
      default: {
        a(o, K.UNEXPECTED_EMPTY_LINKED_KEY, p.lastStartLoc, 0);
        const P = o.context(), A = l(7, P.offset, P.startLoc);
        return A.value = "", r(A, P.offset, P.startLoc), w.key = A, r(w, P.offset, P.startLoc), {
          nextConsumeToken: y,
          node: w
        };
      }
    }
    return r(w, o.currentOffset(), o.currentPosition()), {
      node: w
    };
  }
  function O(o) {
    const p = o.context(), w = p.currentType === 1 ? o.currentOffset() : p.offset, y = p.currentType === 1 ? p.endLoc : p.startLoc, P = l(2, w, y);
    P.items = [];
    let A = null;
    do {
      const J = A || o.nextToken();
      switch (A = null, J.type) {
        case 0:
          J.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(J)), P.items.push(s(o, J.value || ""));
          break;
        case 5:
          J.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(J)), P.items.push(c(o, J.value || ""));
          break;
        case 4:
          J.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(J)), P.items.push(d(o, J.value || ""));
          break;
        case 6:
          J.value == null && a(o, K.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ie(J)), P.items.push(h(o, J.value || ""));
          break;
        case 7: {
          const ce = L(o);
          P.items.push(ce.node), A = ce.nextConsumeToken || null;
          break;
        }
      }
    } while (p.currentType !== 13 && p.currentType !== 1);
    const b = p.currentType === 1 ? p.lastOffset : o.currentOffset(), q = p.currentType === 1 ? p.lastEndLoc : o.currentPosition();
    return r(P, b, q), P;
  }
  function W(o, p, w, y) {
    const P = o.context();
    let A = y.items.length === 0;
    const b = l(1, p, w);
    b.cases = [], b.cases.push(y);
    do {
      const q = O(o);
      A || (A = q.items.length === 0), b.cases.push(q);
    } while (P.currentType !== 13);
    return A && a(o, K.MUST_HAVE_MESSAGES_IN_PLURAL, w, 0), r(b, o.currentOffset(), o.currentPosition()), b;
  }
  function _(o) {
    const p = o.context(), { offset: w, startLoc: y } = p, P = O(o);
    return p.currentType === 13 ? P : W(o, w, y, P);
  }
  function E(o) {
    const p = Zr(o, de({}, e)), w = p.context(), y = l(0, w.offset, w.startLoc);
    return t && y.loc && (y.loc.source = o), y.body = _(p), e.onCacheKey && (y.cacheKey = e.onCacheKey(o)), w.currentType !== 13 && a(p, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, o[w.offset] || ""), r(y, p.currentOffset(), p.currentPosition()), y;
  }
  return { parse: E };
}
function Ie(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function es(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function ha(e, t) {
  for (let n = 0; n < e.length; n++)
    Hn(e[n], t);
}
function Hn(e, t) {
  switch (e.type) {
    case 1:
      ha(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ha(e.items, t);
      break;
    case 6: {
      Hn(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function ts(e, t = {}) {
  const n = es(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Hn(e.body, n);
  const a = n.context();
  e.helpers = Array.from(a.helpers);
}
function ns(e) {
  const t = e.body;
  return t.type === 2 ? pa(t) : t.cases.forEach((n) => pa(n)), e;
}
function pa(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const a = e.items[n];
      if (!(a.type === 3 || a.type === 9) || a.value == null)
        break;
      t.push(a.value);
    }
    if (t.length === e.items.length) {
      e.static = Vn(t);
      for (let n = 0; n < e.items.length; n++) {
        const a = e.items[n];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
function gt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      gt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let a = 0; a < n.length; a++)
        gt(n[a]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let a = 0; a < n.length; a++)
        gt(n[a]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      gt(t.key), t.k = t.key, delete t.key, t.modifier && (gt(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
  }
  delete e.type;
}
function as(e, t) {
  const { filename: n, breakLineCode: a, needIndent: l } = t, r = t.location !== !1, s = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: l,
    indentLevel: 0
  };
  r && e.loc && (s.source = e.loc.source);
  const c = () => s;
  function d(_, E) {
    s.code += _;
  }
  function h(_, E = !0) {
    const o = E ? a : "";
    d(l ? o + "  ".repeat(_) : o);
  }
  function v(_ = !0) {
    const E = ++s.indentLevel;
    _ && h(E);
  }
  function k(_ = !0) {
    const E = --s.indentLevel;
    _ && h(E);
  }
  function L() {
    h(s.indentLevel);
  }
  return {
    context: c,
    push: d,
    indent: v,
    deindent: k,
    newline: L,
    helper: (_) => `_${_}`,
    needIndent: () => s.needIndent
  };
}
function ls(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), bt(e, t.key), t.modifier ? (e.push(", "), bt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function rs(e, t) {
  const { helper: n, needIndent: a } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(a());
  const l = t.items.length;
  for (let r = 0; r < l && (bt(e, t.items[r]), r !== l - 1); r++)
    e.push(", ");
  e.deindent(a()), e.push("])");
}
function ss(e, t) {
  const { helper: n, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(a());
    const l = t.cases.length;
    for (let r = 0; r < l && (bt(e, t.cases[r]), r !== l - 1); r++)
      e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function os(e, t) {
  t.body ? bt(e, t.body) : e.push("null");
}
function bt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      os(e, t);
      break;
    case 1:
      ss(e, t);
      break;
    case 2:
      rs(e, t);
      break;
    case 6:
      ls(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const is = (e, t = {}) => {
  const n = M(t.mode) ? t.mode : "normal", a = M(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const l = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], c = as(e, {
    filename: a,
    breakLineCode: l,
    needIndent: r
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(r), s.length > 0 && (c.push(`const { ${Vn(s.map((v) => `${v}: _${v}`), ", ")} } = ctx`), c.newline()), c.push("return "), bt(c, e), c.deindent(r), c.push("}"), delete e.helpers;
  const { code: d, map: h } = c.context();
  return {
    ast: e,
    code: d,
    map: h ? h.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function cs(e, t = {}) {
  const n = de({}, t), a = !!n.jit, l = !!n.minify, r = n.optimize == null ? !0 : n.optimize, c = Qr(n).parse(e);
  return a ? (r && ns(c), l && gt(c), { ast: c, code: "" }) : (ts(c, n), is(c, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function us() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ht().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ne(e) {
  return G(e) && Gn(e) === 0 && (Le(e, "b") || Le(e, "body"));
}
const hl = ["b", "body"];
function ds(e) {
  return Ke(e, hl);
}
const pl = ["c", "cases"];
function fs(e) {
  return Ke(e, pl, []);
}
const ml = ["s", "static"];
function hs(e) {
  return Ke(e, ml);
}
const gl = ["i", "items"];
function ps(e) {
  return Ke(e, gl, []);
}
const wl = ["t", "type"];
function Gn(e) {
  return Ke(e, wl);
}
const vl = ["v", "value"];
function zt(e, t) {
  const n = Ke(e, vl);
  if (n != null)
    return n;
  throw Ft(t);
}
const _l = ["m", "modifier"];
function ms(e) {
  return Ke(e, _l);
}
const bl = ["k", "key"];
function gs(e) {
  const t = Ke(e, bl);
  if (t)
    return t;
  throw Ft(
    6
    /* NodeTypes.Linked */
  );
}
function Ke(e, t, n) {
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    if (Le(e, l) && e[l] != null)
      return e[l];
  }
  return n;
}
const yl = [
  ...hl,
  ...pl,
  ...ml,
  ...gl,
  ...bl,
  ..._l,
  ...vl,
  ...wl
];
function Ft(e) {
  return new Error(`unhandled node type: ${e}`);
}
function wn(e) {
  return (n) => ws(n, e);
}
function ws(e, t) {
  const n = ds(t);
  if (n == null)
    throw Ft(
      0
      /* NodeTypes.Resource */
    );
  if (Gn(n) === 1) {
    const r = fs(n);
    return e.plural(r.reduce((s, c) => [
      ...s,
      ma(e, c)
    ], []));
  } else
    return ma(e, n);
}
function ma(e, t) {
  const n = hs(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const a = ps(t).reduce((l, r) => [...l, Ln(e, r)], []);
    return e.normalize(a);
  }
}
function Ln(e, t) {
  const n = Gn(t);
  switch (n) {
    case 3:
      return zt(t, n);
    case 9:
      return zt(t, n);
    case 4: {
      const a = t;
      if (Le(a, "k") && a.k)
        return e.interpolate(e.named(a.k));
      if (Le(a, "key") && a.key)
        return e.interpolate(e.named(a.key));
      throw Ft(n);
    }
    case 5: {
      const a = t;
      if (Le(a, "i") && ie(a.i))
        return e.interpolate(e.list(a.i));
      if (Le(a, "index") && ie(a.index))
        return e.interpolate(e.list(a.index));
      throw Ft(n);
    }
    case 6: {
      const a = t, l = ms(a), r = gs(a);
      return e.linked(Ln(e, r), l ? Ln(e, l) : void 0, e.type);
    }
    case 7:
      return zt(t, n);
    case 8:
      return zt(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const vs = (e) => e;
let Ut = X();
function _s(e, t = {}) {
  let n = !1;
  const a = t.onError || Ur;
  return t.onError = (l) => {
    n = !0, a(l);
  }, { ...cs(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function bs(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    re(t.warnHtmlMessage) && t.warnHtmlMessage;
    const a = (t.onCacheKey || vs)(e), l = Ut[a];
    if (l)
      return l;
    const { ast: r, detectError: s } = _s(e, {
      ...t,
      location: !1,
      jit: !0
    }), c = wn(r);
    return s ? c : Ut[a] = c;
  } else {
    const n = e.cacheKey;
    if (n) {
      const a = Ut[n];
      return a || (Ut[n] = wn(e));
    } else
      return wn(e);
  }
}
const Fe = {
  INVALID_ARGUMENT: zr,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ys = 24;
function Me(e) {
  return cn(e, null, void 0);
}
function Kn(e, t) {
  return t.locale != null ? ga(t.locale) : ga(e.locale);
}
let vn;
function ga(e) {
  if (M(e))
    return e;
  if (ne(e)) {
    if (e.resolvedOnce && vn != null)
      return vn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Dr(t))
        throw Me(Fe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return vn = t;
    } else
      throw Me(Fe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Me(Fe.NOT_SUPPORT_LOCALE_TYPE);
}
function ks(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...se(t) ? t : G(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function kl(e, t, n) {
  const a = M(n) ? n : tn, l = e;
  l.__localeChainCache || (l.__localeChainCache = /* @__PURE__ */ new Map());
  let r = l.__localeChainCache.get(a);
  if (!r) {
    r = [];
    let s = [n];
    for (; se(s); )
      s = wa(r, s, t);
    const c = se(t) || !H(t) ? t : t.default ? t.default : null;
    s = M(c) ? [c] : c, se(s) && wa(r, s, !1), l.__localeChainCache.set(a, r);
  }
  return r;
}
function wa(e, t, n) {
  let a = !0;
  for (let l = 0; l < t.length && re(a); l++) {
    const r = t[l];
    M(r) && (a = Cs(e, t[l], n));
  }
  return a;
}
function Cs(e, t, n) {
  let a;
  const l = t.split("-");
  do {
    const r = l.join("-");
    a = Ss(e, r, n), l.splice(-1, 1);
  } while (l.length && a === !0);
  return a;
}
function Ss(e, t, n) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const l = t.replace(/!/g, "");
    e.push(l), (se(n) || H(n)) && n[l] && (a = n[l]);
  }
  return a;
}
const Be = [];
Be[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Be[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Be[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Be[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Be[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Be[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Be[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Ls = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Es(e) {
  return Ls.test(e);
}
function Ts(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Is(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function Ns(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Es(t) ? Ts(t) : "*" + t;
}
function Ps(e) {
  const t = [];
  let n = -1, a = 0, l = 0, r, s, c, d, h, v, k;
  const L = [];
  L[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = c : s += c;
  }, L[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, L[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    L[
      0
      /* Actions.APPEND */
    ](), l++;
  }, L[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (l > 0)
      l--, a = 4, L[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (l = 0, s === void 0 || (s = Ns(s), s === !1))
        return !1;
      L[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function O() {
    const W = e[n + 1];
    if (a === 5 && W === "'" || a === 6 && W === '"')
      return n++, c = "\\" + W, L[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, r = e[n], !(r === "\\" && O())) {
      if (d = Is(r), k = Be[a], h = k[d] || k.l || 8, h === 8 || (a = h[0], h[1] !== void 0 && (v = L[h[1]], v && (c = r, v() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const va = /* @__PURE__ */ new Map();
function Os(e, t) {
  return G(e) ? e[t] : null;
}
function As(e, t) {
  if (!G(e))
    return null;
  let n = va.get(t);
  if (n || (n = Ps(t), n && va.set(t, n)), !n)
    return null;
  const a = n.length;
  let l = e, r = 0;
  for (; r < a; ) {
    const s = n[r];
    if (yl.includes(s) && Ne(l))
      return null;
    const c = l[s];
    if (c === void 0 || ne(l))
      return null;
    l = c, r++;
  }
  return l;
}
const Fs = "11.2.2", un = -1, tn = "en-US", _a = "", ba = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ms() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? ba(e) : t === "vnode" && G(e) && "__v_isVNode" in e ? ba(e.children) : e
  };
}
let Cl;
function Ws(e) {
  Cl = e;
}
let Sl;
function Rs(e) {
  Sl = e;
}
let Ll;
function $s(e) {
  Ll = e;
}
let El = null;
const ya = (e) => {
  El = e;
}, Ds = () => El;
let ka = 0;
function js(e = {}) {
  const t = ne(e.onWarn) ? e.onWarn : Or, n = M(e.version) ? e.version : Fs, a = M(e.locale) || ne(e.locale) ? e.locale : tn, l = ne(a) ? tn : a, r = se(e.fallbackLocale) || H(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, s = H(e.messages) ? e.messages : _n(l), c = H(e.datetimeFormats) ? e.datetimeFormats : _n(l), d = H(e.numberFormats) ? e.numberFormats : _n(l), h = de(X(), e.modifiers, Ms()), v = e.pluralRules || X(), k = ne(e.missing) ? e.missing : null, L = re(e.missingWarn) || en(e.missingWarn) ? e.missingWarn : !0, O = re(e.fallbackWarn) || en(e.fallbackWarn) ? e.fallbackWarn : !0, W = !!e.fallbackFormat, _ = !!e.unresolving, E = ne(e.postTranslation) ? e.postTranslation : null, o = H(e.processor) ? e.processor : null, p = re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter, y = ne(e.messageCompiler) ? e.messageCompiler : Cl, P = ne(e.messageResolver) ? e.messageResolver : Sl || Os, A = ne(e.localeFallbacker) ? e.localeFallbacker : Ll || ks, b = G(e.fallbackContext) ? e.fallbackContext : void 0, q = e, J = G(q.__datetimeFormatters) ? q.__datetimeFormatters : /* @__PURE__ */ new Map(), ce = G(q.__numberFormatters) ? q.__numberFormatters : /* @__PURE__ */ new Map(), ue = G(q.__meta) ? q.__meta : {};
  ka++;
  const ee = {
    version: n,
    cid: ka,
    locale: a,
    fallbackLocale: r,
    messages: s,
    modifiers: h,
    pluralRules: v,
    missing: k,
    missingWarn: L,
    fallbackWarn: O,
    fallbackFormat: W,
    unresolving: _,
    postTranslation: E,
    processor: o,
    warnHtmlMessage: p,
    escapeParameter: w,
    messageCompiler: y,
    messageResolver: P,
    localeFallbacker: A,
    fallbackContext: b,
    onWarn: t,
    __meta: ue
  };
  return ee.datetimeFormats = c, ee.numberFormats = d, ee.__datetimeFormatters = J, ee.__numberFormatters = ce, ee;
}
const _n = (e) => ({ [e]: X() });
function Bn(e, t, n, a, l) {
  const { missing: r, onWarn: s } = e;
  if (r !== null) {
    const c = r(e, n, t, l);
    return M(c) ? c : t;
  } else
    return t;
}
function It(e, t, n) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function xs(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function zs(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let a = n + 1; a < t.length; a++)
    if (xs(e, t[a]))
      return !0;
  return !1;
}
function Ca(e, ...t) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: l, onWarn: r, localeFallbacker: s } = e, { __datetimeFormatters: c } = e, [d, h, v, k] = En(...t), L = re(v.missingWarn) ? v.missingWarn : e.missingWarn;
  re(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn;
  const O = !!v.part, W = Kn(e, v), _ = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    W
  );
  if (!M(d) || d === "")
    return new Intl.DateTimeFormat(W, k).format(h);
  let E = {}, o, p = null;
  const w = "datetime format";
  for (let A = 0; A < _.length && (o = _[A], E = n[o] || {}, p = E[d], !H(p)); A++)
    Bn(e, d, o, L, w);
  if (!H(p) || !M(o))
    return a ? un : d;
  let y = `${o}__${d}`;
  on(k) || (y = `${y}__${JSON.stringify(k)}`);
  let P = c.get(y);
  return P || (P = new Intl.DateTimeFormat(o, de({}, p, k)), c.set(y, P)), O ? P.formatToParts(h) : P.format(h);
}
const Tl = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function En(...e) {
  const [t, n, a, l] = e, r = X();
  let s = X(), c;
  if (M(t)) {
    const d = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!d)
      throw Me(Fe.INVALID_ISO_DATE_ARGUMENT);
    const h = d[3] ? d[3].trim().startsWith("T") ? `${d[1].trim()}${d[3].trim()}` : `${d[1].trim()}T${d[3].trim()}` : d[1].trim();
    c = new Date(h);
    try {
      c.toISOString();
    } catch {
      throw Me(Fe.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Mr(t)) {
    if (isNaN(t.getTime()))
      throw Me(Fe.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (ie(t))
    c = t;
  else
    throw Me(Fe.INVALID_ARGUMENT);
  return M(n) ? r.key = n : H(n) && Object.keys(n).forEach((d) => {
    Tl.includes(d) ? s[d] = n[d] : r[d] = n[d];
  }), M(a) ? r.locale = a : H(a) && (s = a), H(l) && (s = l), [r.key || "", c, r, s];
}
function Sa(e, t, n) {
  const a = e;
  for (const l in n) {
    const r = `${t}__${l}`;
    a.__datetimeFormatters.has(r) && a.__datetimeFormatters.delete(r);
  }
}
function La(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: l, onWarn: r, localeFallbacker: s } = e, { __numberFormatters: c } = e, [d, h, v, k] = Tn(...t), L = re(v.missingWarn) ? v.missingWarn : e.missingWarn;
  re(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn;
  const O = !!v.part, W = Kn(e, v), _ = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    W
  );
  if (!M(d) || d === "")
    return new Intl.NumberFormat(W, k).format(h);
  let E = {}, o, p = null;
  const w = "number format";
  for (let A = 0; A < _.length && (o = _[A], E = n[o] || {}, p = E[d], !H(p)); A++)
    Bn(e, d, o, L, w);
  if (!H(p) || !M(o))
    return a ? un : d;
  let y = `${o}__${d}`;
  on(k) || (y = `${y}__${JSON.stringify(k)}`);
  let P = c.get(y);
  return P || (P = new Intl.NumberFormat(o, de({}, p, k)), c.set(y, P)), O ? P.formatToParts(h) : P.format(h);
}
const Il = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Tn(...e) {
  const [t, n, a, l] = e, r = X();
  let s = X();
  if (!ie(t))
    throw Me(Fe.INVALID_ARGUMENT);
  const c = t;
  return M(n) ? r.key = n : H(n) && Object.keys(n).forEach((d) => {
    Il.includes(d) ? s[d] = n[d] : r[d] = n[d];
  }), M(a) ? r.locale = a : H(a) && (s = a), H(l) && (s = l), [r.key || "", c, r, s];
}
function Ea(e, t, n) {
  const a = e;
  for (const l in n) {
    const r = `${t}__${l}`;
    a.__numberFormatters.has(r) && a.__numberFormatters.delete(r);
  }
}
const Us = (e) => e, Vs = (e) => "", Hs = "text", Gs = (e) => e.length === 0 ? "" : Vn(e), Ks = jr;
function Ta(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Bs(e) {
  const t = ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ie(e.named.count) || ie(e.named.n)) ? ie(e.named.count) ? e.named.count : ie(e.named.n) ? e.named.n : t : t;
}
function Ys(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Zs(e = {}) {
  const t = e.locale, n = Bs(e), a = G(e.pluralRules) && M(t) && ne(e.pluralRules[t]) ? e.pluralRules[t] : Ta, l = G(e.pluralRules) && M(t) && ne(e.pluralRules[t]) ? Ta : void 0, r = (o) => o[a(n, o.length, l)], s = e.list || [], c = (o) => s[o], d = e.named || X();
  ie(e.pluralIndex) && Ys(n, d);
  const h = (o) => d[o];
  function v(o, p) {
    const w = ne(e.messages) ? e.messages(o, !!p) : G(e.messages) ? e.messages[o] : !1;
    return w || (e.parent ? e.parent.message(o) : Vs);
  }
  const k = (o) => e.modifiers ? e.modifiers[o] : Us, L = H(e.processor) && ne(e.processor.normalize) ? e.processor.normalize : Gs, O = H(e.processor) && ne(e.processor.interpolate) ? e.processor.interpolate : Ks, W = H(e.processor) && M(e.processor.type) ? e.processor.type : Hs, E = {
    list: c,
    named: h,
    plural: r,
    linked: (o, ...p) => {
      const [w, y] = p;
      let P = "text", A = "";
      p.length === 1 ? G(w) ? (A = w.modifier || A, P = w.type || P) : M(w) && (A = w || A) : p.length === 2 && (M(w) && (A = w || A), M(y) && (P = y || P));
      const b = v(o, !0)(E), q = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && se(b) && A ? b[0] : b
      );
      return A ? k(A)(q, P) : q;
    },
    message: v,
    type: W,
    interpolate: O,
    normalize: L,
    values: de(X(), s, d)
  };
  return E;
}
const Ia = () => "", We = (e) => ne(e);
function Na(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: l, messageCompiler: r, fallbackLocale: s, messages: c } = e, [d, h] = In(...t), v = re(h.missingWarn) ? h.missingWarn : e.missingWarn, k = re(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, L = re(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, O = !!h.resolvedMessage, W = M(h.default) || re(h.default) ? re(h.default) ? r ? d : () => d : h.default : n ? r ? d : () => d : null, _ = n || W != null && (M(W) || ne(W)), E = Kn(e, h);
  L && Xs(h);
  let [o, p, w] = O ? [
    d,
    E,
    c[E] || X()
  ] : Nl(e, d, E, s, k, v), y = o, P = d;
  if (!O && !(M(y) || Ne(y) || We(y)) && _ && (y = W, P = y), !O && (!(M(y) || Ne(y) || We(y)) || !M(p)))
    return l ? un : d;
  let A = !1;
  const b = () => {
    A = !0;
  }, q = We(y) ? y : Pl(e, d, p, y, P, b);
  if (A)
    return y;
  const J = Qs(e, p, w, h), ce = Zs(J), ue = Js(e, q, ce);
  let ee = a ? a(ue, d) : ue;
  return L && M(ee) && (ee = Rr(ee)), ee;
}
function Xs(e) {
  se(e.list) ? e.list = e.list.map((t) => M(t) ? ua(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = ua(e.named[t]));
  });
}
function Nl(e, t, n, a, l, r) {
  const { messages: s, onWarn: c, messageResolver: d, localeFallbacker: h } = e, v = h(e, a, n);
  let k = X(), L, O = null;
  const W = "translate";
  for (let _ = 0; _ < v.length && (L = v[_], k = s[L] || X(), (O = d(k, t)) === null && (O = k[t]), !(M(O) || Ne(O) || We(O))); _++)
    if (!zs(L, v)) {
      const E = Bn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        L,
        r,
        W
      );
      E !== t && (O = E);
    }
  return [O, L, k];
}
function Pl(e, t, n, a, l, r) {
  const { messageCompiler: s, warnHtmlMessage: c } = e;
  if (We(a)) {
    const h = a;
    return h.locale = h.locale || n, h.key = h.key || t, h;
  }
  if (s == null) {
    const h = () => a;
    return h.locale = n, h.key = t, h;
  }
  const d = s(a, qs(e, n, l, a, c, r));
  return d.locale = n, d.key = t, d.source = a, d;
}
function Js(e, t, n) {
  return t(n);
}
function In(...e) {
  const [t, n, a] = e, l = X();
  if (!M(t) && !ie(t) && !We(t) && !Ne(t))
    throw Me(Fe.INVALID_ARGUMENT);
  const r = ie(t) ? String(t) : (We(t), t);
  return ie(n) ? l.plural = n : M(n) ? l.default = n : H(n) && !on(n) ? l.named = n : se(n) && (l.list = n), ie(a) ? l.plural = a : M(a) ? l.default = a : H(a) && de(l, a), [r, l];
}
function qs(e, t, n, a, l, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: l,
    onError: (s) => {
      throw r && r(s), s;
    },
    onCacheKey: (s) => Ar(t, n, s)
  };
}
function Qs(e, t, n, a) {
  const { modifiers: l, pluralRules: r, messageResolver: s, fallbackLocale: c, fallbackWarn: d, missingWarn: h, fallbackContext: v } = e, L = {
    locale: t,
    modifiers: l,
    pluralRules: r,
    messages: (O, W) => {
      let _ = s(n, O);
      if (_ == null && (v || W)) {
        const [, , E] = Nl(
          v || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          O,
          t,
          c,
          d,
          h
        );
        _ = s(E, O);
      }
      if (M(_) || Ne(_)) {
        let E = !1;
        const p = Pl(e, O, t, _, O, () => {
          E = !0;
        });
        return E ? Ia : p;
      } else return We(_) ? _ : Ia;
    }
  };
  return e.processor && (L.processor = e.processor), a.list && (L.list = a.list), a.named && (L.named = a.named), ie(a.plural) && (L.pluralIndex = a.plural), L;
}
us();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const eo = "11.2.2";
function to() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ht().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ht().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ht().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const yt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ys,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32
};
function Mt(e, ...t) {
  return cn(e, null, void 0);
}
const Nn = /* @__PURE__ */ ut("__translateVNode"), Pn = /* @__PURE__ */ ut("__datetimeParts"), On = /* @__PURE__ */ ut("__numberParts"), no = ut("__setPluralRules"), Ol = /* @__PURE__ */ ut("__injectWithOption"), An = /* @__PURE__ */ ut("__dispose");
function Wt(e) {
  if (!G(e) || Ne(e))
    return e;
  for (const t in e)
    if (Le(e, t))
      if (!t.includes("."))
        G(e[t]) && Wt(e[t]);
      else {
        const n = t.split("."), a = n.length - 1;
        let l = e, r = !1;
        for (let s = 0; s < a; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in l || (l[n[s]] = X()), !G(l[n[s]])) {
            r = !0;
            break;
          }
          l = l[n[s]];
        }
        if (r || (Ne(l) ? yl.includes(n[a]) || delete e[t] : (l[n[a]] = e[t], delete e[t])), !Ne(l)) {
          const s = l[n[a]];
          G(s) && Wt(s);
        }
      }
  return e;
}
function Al(e, t) {
  const { messages: n, __i18n: a, messageResolver: l, flatJson: r } = t, s = H(n) ? n : se(a) ? X() : { [e]: X() };
  if (se(a) && a.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: d, resource: h } = c;
      d ? (s[d] = s[d] || X(), Gt(h, s[d])) : Gt(h, s);
    } else
      M(c) && Gt(JSON.parse(c), s);
  }), l == null && r)
    for (const c in s)
      Le(s, c) && Wt(s[c]);
  return s;
}
function ao(e) {
  return e.type;
}
function lo(e, t, n) {
  let a = G(t.messages) ? t.messages : X();
  "__i18nGlobal" in n && (a = Al(e.locale.value, {
    messages: a,
    __i18n: n.__i18nGlobal
  }));
  const l = Object.keys(a);
  l.length && l.forEach((r) => {
    e.mergeLocaleMessage(r, a[r]);
  });
  {
    if (G(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (G(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Pa(e) {
  return S(pr, null, e, 0);
}
function Fl() {
  return "currentInstance" in pn ? pn["currentInstance"] : pn.getCurrentInstance();
}
const Oa = () => [], ro = () => !1;
let Aa = 0;
function Fa(e) {
  return (t, n, a, l) => e(n, a, Fl() || void 0, l);
}
function so(e = {}) {
  const { __root: t, __injectWithOption: n } = e, a = t === void 0, l = e.flatJson, r = ia ? U : hr;
  let s = re(e.inheritLocale) ? e.inheritLocale : !0;
  const c = r(
    // prettier-ignore
    t && s ? t.locale.value : M(e.locale) ? e.locale : tn
  ), d = r(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : M(e.fallbackLocale) || se(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), h = r(Al(c.value, e)), v = r(H(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), k = r(H(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let L = t ? t.missingWarn : re(e.missingWarn) || en(e.missingWarn) ? e.missingWarn : !0, O = t ? t.fallbackWarn : re(e.fallbackWarn) || en(e.fallbackWarn) ? e.fallbackWarn : !0, W = t ? t.fallbackRoot : re(e.fallbackRoot) ? e.fallbackRoot : !0, _ = !!e.fallbackFormat, E = ne(e.missing) ? e.missing : null, o = ne(e.missing) ? Fa(e.missing) : null, p = ne(e.postTranslation) ? e.postTranslation : null, w = t ? t.warnHtmlMessage : re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const P = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, b;
  b = (() => {
    a && ya(null);
    const g = {
      version: eo,
      locale: c.value,
      fallbackLocale: d.value,
      messages: h.value,
      modifiers: P,
      pluralRules: A,
      missing: o === null ? void 0 : o,
      missingWarn: L,
      fallbackWarn: O,
      fallbackFormat: _,
      unresolving: !0,
      postTranslation: p === null ? void 0 : p,
      warnHtmlMessage: w,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    g.datetimeFormats = v.value, g.numberFormats = k.value, g.__datetimeFormatters = H(b) ? b.__datetimeFormatters : void 0, g.__numberFormatters = H(b) ? b.__numberFormatters : void 0;
    const I = js(g);
    return a && ya(I), I;
  })(), It(b, c.value, d.value);
  function J() {
    return [
      c.value,
      d.value,
      h.value,
      v.value,
      k.value
    ];
  }
  const ce = D({
    get: () => c.value,
    set: (g) => {
      b.locale = g, c.value = g;
    }
  }), ue = D({
    get: () => d.value,
    set: (g) => {
      b.fallbackLocale = g, d.value = g, It(b, c.value, g);
    }
  }), ee = D(() => h.value), Re = /* @__PURE__ */ D(() => v.value), Ye = /* @__PURE__ */ D(() => k.value);
  function Ze() {
    return ne(p) ? p : null;
  }
  function ye(g) {
    p = g, b.postTranslation = g;
  }
  function Xe() {
    return E;
  }
  function Je(g) {
    g !== null && (o = Fa(g)), E = g, b.missing = o;
  }
  const ve = (g, I, B, te, Oe, pt) => {
    J();
    let R;
    try {
      a || (b.fallbackContext = t ? Ds() : void 0), R = g(b);
    } finally {
      a || (b.fallbackContext = void 0);
    }
    if (B !== "translate exists" && // for not `te` (e.g `t`)
    ie(R) && R === un || B === "translate exists" && !R) {
      const [fe, na] = I();
      return t && W ? te(t) : Oe(fe);
    } else {
      if (pt(R))
        return R;
      throw Mt(yt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function $e(...g) {
    return ve((I) => Reflect.apply(Na, null, [I, ...g]), () => In(...g), "translate", (I) => Reflect.apply(I.t, I, [...g]), (I) => I, (I) => M(I));
  }
  function De(...g) {
    const [I, B, te] = g;
    if (te && !G(te))
      throw Mt(yt.INVALID_ARGUMENT);
    return $e(I, B, de({ resolvedMessage: !0 }, te || {}));
  }
  function je(...g) {
    return ve((I) => Reflect.apply(Ca, null, [I, ...g]), () => En(...g), "datetime format", (I) => Reflect.apply(I.d, I, [...g]), () => _a, (I) => M(I) || se(I));
  }
  function qe(...g) {
    return ve((I) => Reflect.apply(La, null, [I, ...g]), () => Tn(...g), "number format", (I) => Reflect.apply(I.n, I, [...g]), () => _a, (I) => M(I) || se(I));
  }
  function xe(g) {
    return g.map((I) => M(I) || ie(I) || re(I) ? Pa(String(I)) : I);
  }
  const et = {
    normalize: xe,
    interpolate: (g) => g,
    type: "vnode"
  };
  function tt(...g) {
    return ve((I) => {
      let B;
      const te = I;
      try {
        te.processor = et, B = Reflect.apply(Na, null, [te, ...g]);
      } finally {
        te.processor = null;
      }
      return B;
    }, () => In(...g), "translate", (I) => I[Nn](...g), (I) => [Pa(I)], (I) => se(I));
  }
  function ze(...g) {
    return ve((I) => Reflect.apply(La, null, [I, ...g]), () => Tn(...g), "number format", (I) => I[On](...g), Oa, (I) => M(I) || se(I));
  }
  function nt(...g) {
    return ve((I) => Reflect.apply(Ca, null, [I, ...g]), () => En(...g), "datetime format", (I) => I[Pn](...g), Oa, (I) => M(I) || se(I));
  }
  function at(g) {
    A = g, b.pluralRules = A;
  }
  function j(g, I) {
    return ve(() => {
      if (!g)
        return !1;
      const B = M(I) ? I : c.value, te = ge(B), Oe = b.messageResolver(te, g);
      return Ne(Oe) || We(Oe) || M(Oe);
    }, () => [g], "translate exists", (B) => Reflect.apply(B.te, B, [g, I]), ro, (B) => re(B));
  }
  function V(g) {
    let I = null;
    const B = kl(b, d.value, c.value);
    for (let te = 0; te < B.length; te++) {
      const Oe = h.value[B[te]] || {}, pt = b.messageResolver(Oe, g);
      if (pt != null) {
        I = pt;
        break;
      }
    }
    return I;
  }
  function le(g) {
    const I = V(g);
    return I ?? (t ? t.tm(g) || {} : {});
  }
  function ge(g) {
    return h.value[g] || {};
  }
  function Ue(g, I) {
    if (l) {
      const B = { [g]: I };
      for (const te in B)
        Le(B, te) && Wt(B[te]);
      I = B[g];
    }
    h.value[g] = I, b.messages = h.value;
  }
  function lt(g, I) {
    h.value[g] = h.value[g] || {};
    const B = { [g]: I };
    if (l)
      for (const te in B)
        Le(B, te) && Wt(B[te]);
    I = B[g], Gt(I, h.value[g]), b.messages = h.value;
  }
  function ht(g) {
    return v.value[g] || {};
  }
  function u(g, I) {
    v.value[g] = I, b.datetimeFormats = v.value, Sa(b, g, I);
  }
  function f(g, I) {
    v.value[g] = de(v.value[g] || {}, I), b.datetimeFormats = v.value, Sa(b, g, I);
  }
  function C(g) {
    return k.value[g] || {};
  }
  function F(g, I) {
    k.value[g] = I, b.numberFormats = k.value, Ea(b, g, I);
  }
  function Q(g, I) {
    k.value[g] = de(k.value[g] || {}, I), b.numberFormats = k.value, Ea(b, g, I);
  }
  Aa++, t && ia && (wt(t.locale, (g) => {
    s && (c.value = g, b.locale = g, It(b, c.value, d.value));
  }), wt(t.fallbackLocale, (g) => {
    s && (d.value = g, b.fallbackLocale = g, It(b, c.value, d.value));
  }));
  const x = {
    id: Aa,
    locale: ce,
    fallbackLocale: ue,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(g) {
      s = g, g && t && (c.value = t.locale.value, d.value = t.fallbackLocale.value, It(b, c.value, d.value));
    },
    get availableLocales() {
      return Object.keys(h.value).sort();
    },
    messages: ee,
    get modifiers() {
      return P;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return L;
    },
    set missingWarn(g) {
      L = g, b.missingWarn = L;
    },
    get fallbackWarn() {
      return O;
    },
    set fallbackWarn(g) {
      O = g, b.fallbackWarn = O;
    },
    get fallbackRoot() {
      return W;
    },
    set fallbackRoot(g) {
      W = g;
    },
    get fallbackFormat() {
      return _;
    },
    set fallbackFormat(g) {
      _ = g, b.fallbackFormat = _;
    },
    get warnHtmlMessage() {
      return w;
    },
    set warnHtmlMessage(g) {
      w = g, b.warnHtmlMessage = g;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(g) {
      y = g, b.escapeParameter = g;
    },
    t: $e,
    getLocaleMessage: ge,
    setLocaleMessage: Ue,
    mergeLocaleMessage: lt,
    getPostTranslationHandler: Ze,
    setPostTranslationHandler: ye,
    getMissingHandler: Xe,
    setMissingHandler: Je,
    [no]: at
  };
  return x.datetimeFormats = Re, x.numberFormats = Ye, x.rt = De, x.te = j, x.tm = le, x.d = je, x.n = qe, x.getDateTimeFormat = ht, x.setDateTimeFormat = u, x.mergeDateTimeFormat = f, x.getNumberFormat = C, x.setNumberFormat = F, x.mergeNumberFormat = Q, x[Ol] = n, x[Nn] = tt, x[Pn] = nt, x[On] = ze, x;
}
const Yn = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function oo({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, l) => [
    ...a,
    // prettier-ignore
    ...l.type === Ge ? l.children : [l]
  ], []) : t.reduce((n, a) => {
    const l = e[a];
    return l && (n[a] = l()), n;
  }, X());
}
function Ml() {
  return Ge;
}
de({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ie(e) || !isNaN(e)
  }
}, Yn);
function io(e) {
  return se(e) && !M(e[0]);
}
function Wl(e, t, n, a) {
  const { slots: l, attrs: r } = t;
  return () => {
    const s = { part: !0 };
    let c = X();
    e.locale && (s.locale = e.locale), M(e.format) ? s.key = e.format : G(e.format) && (M(e.format.key) && (s.key = e.format.key), c = Object.keys(e.format).reduce((L, O) => n.includes(O) ? de(X(), L, { [O]: e.format[O] }) : L, X()));
    const d = a(e.value, s, c);
    let h = [s.key];
    se(d) ? h = d.map((L, O) => {
      const W = l[L.type], _ = W ? W({ [L.type]: L.value, index: O, parts: d }) : [L.value];
      return io(_) && (_[0].key = `${L.type}-${O}`), _;
    }) : M(d) && (h = [d]);
    const v = de(X(), r), k = M(e.tag) || G(e.tag) ? e.tag : Ml();
    return nl(k, v, h);
  };
}
de({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Yn);
const co = /* @__PURE__ */ ut("global-vue-i18n");
function Pe(e = {}) {
  const t = Fl();
  if (t == null)
    throw Mt(yt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Mt(yt.NOT_INSTALLED);
  const n = uo(t), a = ho(n), l = ao(t), r = fo(e, l);
  if (r === "global")
    return lo(a, e, l), a;
  if (r === "parent") {
    let d = po(n, t, e.__useComponent);
    return d == null && (d = a), d;
  }
  const s = n;
  let c = s.__getInstance(t);
  if (c == null) {
    const d = de({}, e);
    "__i18n" in l && (d.__i18n = l.__i18n), a && (d.__root = a), c = so(d), s.__composerExtend && (c[An] = s.__composerExtend(c)), go(s, t, c), s.__setInstance(t, c);
  }
  return c;
}
function uo(e) {
  const t = He(e.isCE ? co : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Mt(e.isCE ? yt.NOT_INSTALLED_WITH_PROVIDE : yt.UNEXPECTED_ERROR);
  return t;
}
function fo(e, t) {
  return on(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function ho(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function po(e, t, n = !1) {
  let a = null;
  const l = t.root;
  let r = mo(t, n);
  for (; r != null; ) {
    const s = e;
    if (e.mode === "composition")
      a = s.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = s.__getInstance(r);
      c != null && (a = c.__composer, n && a && !a[Ol] && (a = null));
    }
    if (a != null || l === r)
      break;
    r = r.parent;
  }
  return a;
}
function mo(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function go(e, t, n) {
  Lt(() => {
  }, t), xn(() => {
    const a = n;
    e.__deleteInstance(t);
    const l = a[An];
    l && (l(), delete a[An]);
  }, t);
}
de({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Yn);
to();
Ws(bs);
Rs(As);
$s(kl);
const Rl = Symbol(), Kt = "el", wo = "is-", rt = (e, t, n, a, l) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), a && (r += `__${a}`), l && (r += `--${l}`), r;
}, $l = Symbol("namespaceContextKey"), vo = (e) => {
  const t = e || (vt() ? He($l, U(Kt)) : U(Kt));
  return D(() => i(t) || Kt);
}, Zn = (e, t) => {
  const n = vo(t);
  return {
    namespace: n,
    b: (_ = "") => rt(n.value, e, _, "", ""),
    e: (_) => _ ? rt(n.value, e, "", _, "") : "",
    m: (_) => _ ? rt(n.value, e, "", "", _) : "",
    be: (_, E) => _ && E ? rt(n.value, e, _, E, "") : "",
    em: (_, E) => _ && E ? rt(n.value, e, "", _, E) : "",
    bm: (_, E) => _ && E ? rt(n.value, e, _, "", E) : "",
    bem: (_, E, o) => _ && E && o ? rt(n.value, e, _, E, o) : "",
    is: (_, ...E) => {
      const o = E.length >= 1 ? E[0] : !0;
      return _ && o ? `${wo}${_}` : "";
    },
    cssVar: (_) => {
      const E = {};
      for (const o in _)
        _[o] && (E[`--${n.value}-${o}`] = _[o]);
      return E;
    },
    cssVarName: (_) => `--${n.value}-${_}`,
    cssVarBlock: (_) => {
      const E = {};
      for (const o in _)
        _[o] && (E[`--${n.value}-${e}-${o}`] = _[o]);
      return E;
    },
    cssVarBlockName: (_) => `--${n.value}-${e}-${_}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const _o = Object.prototype.hasOwnProperty, Ma = (e, t) => _o.call(e, t), Rt = (e) => typeof e == "function", ot = (e) => typeof e == "string", Dl = (e) => e !== null && typeof e == "object";
var bo = typeof global == "object" && global && global.Object === Object && global, yo = typeof self == "object" && self && self.Object === Object && self, Xn = bo || yo || Function("return this")(), kt = Xn.Symbol, jl = Object.prototype, ko = jl.hasOwnProperty, Co = jl.toString, Nt = kt ? kt.toStringTag : void 0;
function So(e) {
  var t = ko.call(e, Nt), n = e[Nt];
  try {
    e[Nt] = void 0;
    var a = !0;
  } catch {
  }
  var l = Co.call(e);
  return a && (t ? e[Nt] = n : delete e[Nt]), l;
}
var Lo = Object.prototype, Eo = Lo.toString;
function To(e) {
  return Eo.call(e);
}
var Io = "[object Null]", No = "[object Undefined]", Wa = kt ? kt.toStringTag : void 0;
function xl(e) {
  return e == null ? e === void 0 ? No : Io : Wa && Wa in Object(e) ? So(e) : To(e);
}
function Po(e) {
  return e != null && typeof e == "object";
}
var Oo = "[object Symbol]";
function Jn(e) {
  return typeof e == "symbol" || Po(e) && xl(e) == Oo;
}
function Ao(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, l = Array(a); ++n < a; )
    l[n] = t(e[n], n, e);
  return l;
}
var qn = Array.isArray, Ra = kt ? kt.prototype : void 0, $a = Ra ? Ra.toString : void 0;
function zl(e) {
  if (typeof e == "string")
    return e;
  if (qn(e))
    return Ao(e, zl) + "";
  if (Jn(e))
    return $a ? $a.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ul(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Fo = "[object AsyncFunction]", Mo = "[object Function]", Wo = "[object GeneratorFunction]", Ro = "[object Proxy]";
function $o(e) {
  if (!Ul(e))
    return !1;
  var t = xl(e);
  return t == Mo || t == Wo || t == Fo || t == Ro;
}
var bn = Xn["__core-js_shared__"], Da = function() {
  var e = /[^.]+$/.exec(bn && bn.keys && bn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Do(e) {
  return !!Da && Da in e;
}
var jo = Function.prototype, xo = jo.toString;
function zo(e) {
  if (e != null) {
    try {
      return xo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Uo = /[\\^$.*+?()[\]{}|]/g, Vo = /^\[object .+?Constructor\]$/, Ho = Function.prototype, Go = Object.prototype, Ko = Ho.toString, Bo = Go.hasOwnProperty, Yo = RegExp(
  "^" + Ko.call(Bo).replace(Uo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zo(e) {
  if (!Ul(e) || Do(e))
    return !1;
  var t = $o(e) ? Yo : Vo;
  return t.test(zo(e));
}
function Xo(e, t) {
  return e?.[t];
}
function Vl(e, t) {
  var n = Xo(e, t);
  return Zo(n) ? n : void 0;
}
function Jo(e, t) {
  return e === t || e !== e && t !== t;
}
var qo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Qo = /^\w*$/;
function ei(e, t) {
  if (qn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Jn(e) ? !0 : Qo.test(e) || !qo.test(e) || t != null && e in Object(t);
}
var $t = Vl(Object, "create");
function ti() {
  this.__data__ = $t ? $t(null) : {}, this.size = 0;
}
function ni(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ai = "__lodash_hash_undefined__", li = Object.prototype, ri = li.hasOwnProperty;
function si(e) {
  var t = this.__data__;
  if ($t) {
    var n = t[e];
    return n === ai ? void 0 : n;
  }
  return ri.call(t, e) ? t[e] : void 0;
}
var oi = Object.prototype, ii = oi.hasOwnProperty;
function ci(e) {
  var t = this.__data__;
  return $t ? t[e] !== void 0 : ii.call(t, e);
}
var ui = "__lodash_hash_undefined__";
function di(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $t && t === void 0 ? ui : t, this;
}
function it(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
it.prototype.clear = ti;
it.prototype.delete = ni;
it.prototype.get = si;
it.prototype.has = ci;
it.prototype.set = di;
function fi() {
  this.__data__ = [], this.size = 0;
}
function dn(e, t) {
  for (var n = e.length; n--; )
    if (Jo(e[n][0], t))
      return n;
  return -1;
}
var hi = Array.prototype, pi = hi.splice;
function mi(e) {
  var t = this.__data__, n = dn(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : pi.call(t, n, 1), --this.size, !0;
}
function gi(e) {
  var t = this.__data__, n = dn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function wi(e) {
  return dn(this.__data__, e) > -1;
}
function vi(e, t) {
  var n = this.__data__, a = dn(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function Et(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Et.prototype.clear = fi;
Et.prototype.delete = mi;
Et.prototype.get = gi;
Et.prototype.has = wi;
Et.prototype.set = vi;
var _i = Vl(Xn, "Map");
function bi() {
  this.size = 0, this.__data__ = {
    hash: new it(),
    map: new (_i || Et)(),
    string: new it()
  };
}
function yi(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function fn(e, t) {
  var n = e.__data__;
  return yi(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ki(e) {
  var t = fn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ci(e) {
  return fn(this, e).get(e);
}
function Si(e) {
  return fn(this, e).has(e);
}
function Li(e, t) {
  var n = fn(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function dt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
dt.prototype.clear = bi;
dt.prototype.delete = ki;
dt.prototype.get = Ci;
dt.prototype.has = Si;
dt.prototype.set = Li;
var Ei = "Expected a function";
function Qn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ei);
  var n = function() {
    var a = arguments, l = t ? t.apply(this, a) : a[0], r = n.cache;
    if (r.has(l))
      return r.get(l);
    var s = e.apply(this, a);
    return n.cache = r.set(l, s) || r, s;
  };
  return n.cache = new (Qn.Cache || dt)(), n;
}
Qn.Cache = dt;
var Ti = 500;
function Ii(e) {
  var t = Qn(e, function(a) {
    return n.size === Ti && n.clear(), a;
  }), n = t.cache;
  return t;
}
var Ni = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pi = /\\(\\)?/g, Oi = Ii(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ni, function(n, a, l, r) {
    t.push(l ? r.replace(Pi, "$1") : a || n);
  }), t;
});
function Ai(e) {
  return e == null ? "" : zl(e);
}
function Fi(e, t) {
  return qn(e) ? e : ei(e, t) ? [e] : Oi(Ai(e));
}
function Mi(e) {
  if (typeof e == "string" || Jn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Wi(e, t) {
  t = Fi(t, e);
  for (var n = 0, a = t.length; e != null && n < a; )
    e = e[Mi(t[n++])];
  return n && n == a ? e : void 0;
}
function Ri(e, t, n) {
  var a = e == null ? void 0 : Wi(e, t);
  return a === void 0 ? n : a;
}
function $i(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var l = e[t];
    a[l[0]] = l[1];
  }
  return a;
}
const Hl = (e) => e === void 0, ja = (e) => typeof e == "boolean", ct = (e) => typeof e == "number", Fn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Di = (e) => ot(e) ? !Number.isNaN(Number(e)) : !1;
var xa;
const ft = typeof window < "u", ji = (e) => typeof e == "string", xi = () => {
};
ft && ((xa = window?.navigator) != null && xa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ea(e) {
  return typeof e == "function" ? e() : i(e);
}
function zi(e) {
  return e;
}
function ta(e) {
  return gr() ? (wr(e), !0) : !1;
}
function Ui(e, t = !0) {
  vt() ? Lt(e) : t ? e() : al(e);
}
function Gl(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, l = U(!1);
  let r = null;
  function s() {
    r && (clearTimeout(r), r = null);
  }
  function c() {
    l.value = !1, s();
  }
  function d(...h) {
    s(), l.value = !0, r = setTimeout(() => {
      l.value = !1, r = null, e(...h);
    }, ea(t));
  }
  return a && (l.value = !0, ft && d()), ta(c), {
    isPending: mr(l),
    start: d,
    stop: c
  };
}
function Kl(e) {
  var t;
  const n = ea(e);
  return (t = n?.$el) != null ? t : n;
}
const Bl = ft ? window : void 0;
function Yl(...e) {
  let t, n, a, l;
  if (ji(e[0]) || Array.isArray(e[0]) ? ([n, a, l] = e, t = Bl) : [t, n, a, l] = e, !t)
    return xi;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], s = () => {
    r.forEach((v) => v()), r.length = 0;
  }, c = (v, k, L, O) => (v.addEventListener(k, L, O), () => v.removeEventListener(k, L, O)), d = wt(() => [Kl(t), ea(l)], ([v, k]) => {
    s(), v && r.push(...n.flatMap((L) => a.map((O) => c(v, L, O, k))));
  }, { immediate: !0, flush: "post" }), h = () => {
    d(), s();
  };
  return ta(h), h;
}
function Vi(e, t = !1) {
  const n = U(), a = () => n.value = !!e();
  return a(), Ui(a, t), n;
}
const za = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ua = "__vueuse_ssr_handlers__";
za[Ua] = za[Ua] || {};
var Va = Object.getOwnPropertySymbols, Hi = Object.prototype.hasOwnProperty, Gi = Object.prototype.propertyIsEnumerable, Ki = (e, t) => {
  var n = {};
  for (var a in e)
    Hi.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && Va)
    for (var a of Va(e))
      t.indexOf(a) < 0 && Gi.call(e, a) && (n[a] = e[a]);
  return n;
};
function Bi(e, t, n = {}) {
  const a = n, { window: l = Bl } = a, r = Ki(a, ["window"]);
  let s;
  const c = Vi(() => l && "ResizeObserver" in l), d = () => {
    s && (s.disconnect(), s = void 0);
  }, h = wt(() => Kl(e), (k) => {
    d(), c.value && l && k && (s = new ResizeObserver(t), s.observe(k, r));
  }, { immediate: !0, flush: "post" }), v = () => {
    d(), h();
  };
  return ta(v), {
    isSupported: c,
    stop: v
  };
}
var Ha;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ha || (Ha = {}));
var Yi = Object.defineProperty, Ga = Object.getOwnPropertySymbols, Zi = Object.prototype.hasOwnProperty, Xi = Object.prototype.propertyIsEnumerable, Ka = (e, t, n) => t in e ? Yi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ji = (e, t) => {
  for (var n in t || (t = {}))
    Zi.call(t, n) && Ka(e, n, t[n]);
  if (Ga)
    for (var n of Ga(t))
      Xi.call(t, n) && Ka(e, n, t[n]);
  return e;
};
const qi = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Ji({
  linear: zi
}, qi);
const Ba = {
  current: 0
}, Ya = U(0), Zl = 2e3, Za = Symbol("elZIndexContextKey"), Xl = Symbol("zIndexContextKey"), Qi = (e) => {
  const t = vt() ? He(Za, Ba) : Ba, n = e || (vt() ? He(Xl, void 0) : void 0), a = D(() => {
    const s = i(n);
    return ct(s) ? s : Zl;
  }), l = D(() => a.value + Ya.value), r = () => (t.current++, Ya.value = t.current, l.value);
  return !ft && He(Za), {
    initialZIndex: a,
    currentZIndex: l,
    nextZIndex: r
  };
};
var ec = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const tc = (e) => (t, n) => nc(t, n, i(e)), nc = (e, t, n) => Ri(n, e, e).replace(/\{(\w+)\}/g, (a, l) => {
  var r;
  return `${(r = t?.[l]) != null ? r : `{${l}}`}`;
}), ac = (e) => {
  const t = D(() => i(e).name), n = ll(e) ? e : U(e);
  return {
    lang: t,
    locale: n,
    t: tc(e)
  };
}, Jl = Symbol("localeContextKey"), lc = (e) => {
  const t = e || He(Jl, U());
  return ac(D(() => t.value || ec));
}, ql = "__epPropKey", be = (e) => e, rc = (e) => Dl(e) && !!e[ql], Ql = (e, t) => {
  if (!Dl(e) || rc(e))
    return e;
  const { values: n, required: a, default: l, type: r, validator: s } = e, d = {
    type: r,
    required: !!a,
    validator: n || s ? (h) => {
      let v = !1, k = [];
      if (n && (k = Array.from(n), Ma(e, "default") && k.push(l), v || (v = k.includes(h))), s && (v || (v = s(h))), !v && k.length > 0) {
        const L = [...new Set(k)].map((O) => JSON.stringify(O)).join(", ");
        vr(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${L}], got value ${JSON.stringify(h)}.`);
      }
      return v;
    } : void 0,
    [ql]: !0
  };
  return Ma(e, "default") && (d.default = l), d;
}, Tt = (e) => $i(Object.entries(e).map(([t, n]) => [
  t,
  Ql(n, t)
])), sc = ["", "default", "small", "large"], oc = Ql({
  type: String,
  values: sc,
  required: !1
}), ic = Symbol("size"), cc = Symbol("emptyValuesContextKey"), uc = Tt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Rt(e) ? !e() : !e
  }
}), Xa = (e) => Object.keys(e), nn = U();
function er(e, t = void 0) {
  return vt() ? He(Rl, nn) : nn;
}
function tr(e, t) {
  const n = er(), a = Zn(e, D(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || Kt;
  })), l = lc(D(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), r = Qi(D(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || Zl;
  })), s = D(() => {
    var c;
    return i(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return nr(D(() => i(n) || {})), {
    ns: a,
    locale: l,
    zIndex: r,
    size: s
  };
}
const nr = (e, t, n = !1) => {
  var a;
  const l = !!vt(), r = l ? er() : void 0, s = (a = void 0) != null ? a : l ? _r : void 0;
  if (!s)
    return;
  const c = D(() => {
    const d = i(e);
    return r?.value ? dc(r.value, d) : d;
  });
  return s(Rl, c), s(Jl, D(() => c.value.locale)), s($l, D(() => c.value.namespace)), s(Xl, D(() => c.value.zIndex)), s(ic, {
    size: D(() => c.value.size || "")
  }), s(cc, D(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !nn.value) && (nn.value = c.value), c;
}, dc = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Xa(e), ...Xa(t)])], a = {};
  for (const l of n)
    a[l] = t[l] !== void 0 ? t[l] : e[l];
  return a;
};
var hn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
};
function Mn(e, t = "px") {
  if (!e)
    return "";
  if (ct(e) || Di(e))
    return `${e}${t}`;
  if (ot(e))
    return e;
}
const ar = (e, t) => (e.install = (n) => {
  for (const a of [e, ...Object.values({})])
    n.component(a.name, a);
}, e), lr = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), fc = Tt({
  size: {
    type: be([Number, String])
  },
  color: {
    type: String
  }
}), hc = ae({
  name: "ElIcon",
  inheritAttrs: !1
}), pc = /* @__PURE__ */ ae({
  ...hc,
  props: fc,
  setup(e) {
    const t = e, n = Zn("icon"), a = D(() => {
      const { size: l, color: r } = t;
      return !l && !r ? {} : {
        fontSize: Hl(l) ? void 0 : Mn(l),
        "--color": r
      };
    });
    return (l, r) => ($(), z("i", br({
      class: i(n).b(),
      style: i(a)
    }, l.$attrs), [
      _t(l.$slots, "default")
    ], 16));
  }
});
var mc = /* @__PURE__ */ hn(pc, [["__file", "icon.vue"]]);
const an = ar(mc);
/*! Element Plus Icons Vue v2.3.1 */
var gc = /* @__PURE__ */ ae({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), wc = gc, vc = /* @__PURE__ */ ae({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), rr = vc, _c = /* @__PURE__ */ ae({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), bc = _c, yc = /* @__PURE__ */ ae({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), kc = yc, Cc = /* @__PURE__ */ ae({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => ($(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Sc = Cc;
const sr = be([
  String,
  Object,
  Function
]), Lc = {
  Close: rr
}, Ec = {
  Close: rr
}, ln = {
  success: kc,
  warning: Sc,
  error: wc,
  info: bc
}, Tc = (e) => e, Bt = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ic = Tt({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: !0
  },
  color: String,
  badgeStyle: {
    type: be([String, Object, Array])
  },
  offset: {
    type: be(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Nc = ae({
  name: "ElBadge"
}), Pc = /* @__PURE__ */ ae({
  ...Nc,
  props: Ic,
  setup(e, { expose: t }) {
    const n = e, a = Zn("badge"), l = D(() => n.isDot ? "" : ct(n.value) && ct(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = D(() => {
      var s, c, d, h, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: Mn(-((c = (s = n.offset) == null ? void 0 : s[0]) != null ? c : 0)),
          marginTop: Mn((h = (d = n.offset) == null ? void 0 : d[1]) != null ? h : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: l
    }), (s, c) => ($(), z("div", {
      class: Z(i(a).b())
    }, [
      _t(s.$slots, "default"),
      S(zn, {
        name: `${i(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: st(() => [
          Yt(m("sup", {
            class: Z([
              i(a).e("content"),
              i(a).em("content", s.type),
              i(a).is("fixed", !!s.$slots.default),
              i(a).is("dot", s.isDot),
              i(a).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Zt(i(r))
          }, [
            _t(s.$slots, "content", { value: i(l) }, () => [
              oe(N(i(l)), 1)
            ])
          ], 6), [
            [Xt, !s.hidden && (i(l) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Oc = /* @__PURE__ */ hn(Pc, [["__file", "badge.vue"]]);
const Ac = ar(Oc), Fc = Tt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: be(Object)
  },
  size: oc,
  button: {
    type: be(Object)
  },
  experimentalFeatures: {
    type: be(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: be(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...uc
}), Ce = {};
ae({
  name: "ElConfigProvider",
  props: Fc,
  setup(e, { slots: t }) {
    wt(() => e.message, (a) => {
      Object.assign(Ce, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = nr(e);
    return () => _t(t, "default", { config: n?.value });
  }
});
const or = ["success", "info", "warning", "error"], he = Tc({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  plain: !1,
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: ft ? document.body : void 0
}), Mc = Tt({
  customClass: {
    type: String,
    default: he.customClass
  },
  center: {
    type: Boolean,
    default: he.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: he.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: he.duration
  },
  icon: {
    type: sr,
    default: he.icon
  },
  id: {
    type: String,
    default: he.id
  },
  message: {
    type: be([
      String,
      Object,
      Function
    ]),
    default: he.message
  },
  onClose: {
    type: be(Function),
    default: he.onClose
  },
  showClose: {
    type: Boolean,
    default: he.showClose
  },
  type: {
    type: String,
    values: or,
    default: he.type
  },
  plain: {
    type: Boolean,
    default: he.plain
  },
  offset: {
    type: Number,
    default: he.offset
  },
  zIndex: {
    type: Number,
    default: he.zIndex
  },
  grouping: {
    type: Boolean,
    default: he.grouping
  },
  repeatNum: {
    type: Number,
    default: he.repeatNum
  }
}), Wc = {
  destroy: () => !0
}, Ee = yr([]), Rc = (e) => {
  const t = Ee.findIndex((l) => l.id === e), n = Ee[t];
  let a;
  return t > 0 && (a = Ee[t - 1]), { current: n, prev: a };
}, $c = (e) => {
  const { prev: t } = Rc(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Dc = (e, t) => Ee.findIndex((a) => a.id === e) > 0 ? 16 : t, jc = ae({
  name: "ElMessage"
}), xc = /* @__PURE__ */ ae({
  ...jc,
  props: Mc,
  emits: Wc,
  setup(e, { expose: t }) {
    const n = e, { Close: a } = Ec, { ns: l, zIndex: r } = tr("message"), { currentZIndex: s, nextZIndex: c } = r, d = U(), h = U(!1), v = U(0);
    let k;
    const L = D(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), O = D(() => {
      const b = n.type;
      return { [l.bm("icon", b)]: b && ln[b] };
    }), W = D(() => n.icon || ln[n.type] || ""), _ = D(() => $c(n.id)), E = D(() => Dc(n.id, n.offset) + _.value), o = D(() => v.value + E.value), p = D(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function w() {
      n.duration !== 0 && ({ stop: k } = Gl(() => {
        P();
      }, n.duration));
    }
    function y() {
      k?.();
    }
    function P() {
      h.value = !1;
    }
    function A({ code: b }) {
      b === Bt.esc && P();
    }
    return Lt(() => {
      w(), c(), h.value = !0;
    }), wt(() => n.repeatNum, () => {
      y(), w();
    }), Yl(document, "keydown", A), Bi(d, () => {
      v.value = d.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: o,
      close: P
    }), (b, q) => ($(), Se(zn, {
      name: i(l).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (J) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        Yt(m("div", {
          id: b.id,
          ref_key: "messageRef",
          ref: d,
          class: Z([
            i(l).b(),
            { [i(l).m(b.type)]: b.type },
            i(l).is("center", b.center),
            i(l).is("closable", b.showClose),
            i(l).is("plain", b.plain),
            b.customClass
          ]),
          style: Zt(i(p)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: w
        }, [
          b.repeatNum > 1 ? ($(), Se(i(Ac), {
            key: 0,
            value: b.repeatNum,
            type: i(L),
            class: Z(i(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : we("v-if", !0),
          i(W) ? ($(), Se(i(an), {
            key: 1,
            class: Z([i(l).e("icon"), i(O)])
          }, {
            default: st(() => [
              ($(), Se(rl(i(W))))
            ]),
            _: 1
          }, 8, ["class"])) : we("v-if", !0),
          _t(b.$slots, "default", {}, () => [
            b.dangerouslyUseHTMLString ? ($(), z(Ge, { key: 1 }, [
              we(" Caution here, message could've been compromised, never use user's input as message "),
              m("p", {
                class: Z(i(l).e("content")),
                innerHTML: b.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : ($(), z("p", {
              key: 0,
              class: Z(i(l).e("content"))
            }, N(b.message), 3))
          ]),
          b.showClose ? ($(), Se(i(an), {
            key: 2,
            class: Z(i(l).e("closeBtn")),
            onClick: Dt(P, ["stop"])
          }, {
            default: st(() => [
              S(i(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : we("v-if", !0)
        ], 46, ["id"]), [
          [Xt, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var zc = /* @__PURE__ */ hn(xc, [["__file", "message.vue"]]);
let Uc = 1;
const ir = (e) => {
  const t = !e || ot(e) || At(e) || Rt(e) ? { message: e } : e, n = {
    ...he,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ot(n.appendTo)) {
    let a = document.querySelector(n.appendTo);
    Fn(a) || (a = document.body), n.appendTo = a;
  }
  return ja(Ce.grouping) && !n.grouping && (n.grouping = Ce.grouping), ct(Ce.duration) && n.duration === 3e3 && (n.duration = Ce.duration), ct(Ce.offset) && n.offset === 16 && (n.offset = Ce.offset), ja(Ce.showClose) && !n.showClose && (n.showClose = Ce.showClose), n;
}, Vc = (e) => {
  const t = Ee.indexOf(e);
  if (t === -1)
    return;
  Ee.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Hc = ({ appendTo: e, ...t }, n) => {
  const a = `message_${Uc++}`, l = t.onClose, r = document.createElement("div"), s = {
    ...t,
    id: a,
    onClose: () => {
      l?.(), Vc(v);
    },
    onDestroy: () => {
      Jt(null, r);
    }
  }, c = S(zc, s, Rt(s.message) || At(s.message) ? {
    default: Rt(s.message) ? s.message : () => s.message
  } : null);
  c.appContext = n || Ct._context, Jt(c, r), e.appendChild(r.firstElementChild);
  const d = c.component, v = {
    id: a,
    vnode: c,
    vm: d,
    handler: {
      close: () => {
        d.exposed.visible.value = !1;
      }
    },
    props: c.component.props
  };
  return v;
}, Ct = (e = {}, t) => {
  if (!ft)
    return { close: () => {
    } };
  const n = ir(e);
  if (n.grouping && Ee.length) {
    const l = Ee.find(({ vnode: r }) => {
      var s;
      return ((s = r.props) == null ? void 0 : s.message) === n.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = n.type, l.handler;
  }
  if (ct(Ce.max) && Ee.length >= Ce.max)
    return { close: () => {
    } };
  const a = Hc(n, t);
  return Ee.push(a), a.handler;
};
or.forEach((e) => {
  Ct[e] = (t = {}, n) => {
    const a = ir(t);
    return Ct({ ...a, type: e }, n);
  };
});
function Gc(e) {
  for (const t of Ee)
    (!e || e === t.props.type) && t.handler.close();
}
Ct.closeAll = Gc;
Ct._context = null;
const Kc = lr(Ct, "$message"), cr = [
  "success",
  "info",
  "warning",
  "error"
], Bc = Tt({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: Boolean,
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: sr
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: be([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: be(Function),
    default: () => {
    }
  },
  onClose: {
    type: be(Function),
    required: !0
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...cr, ""],
    default: ""
  },
  zIndex: Number
}), Yc = {
  destroy: () => !0
}, Zc = ae({
  name: "ElNotification"
}), Xc = /* @__PURE__ */ ae({
  ...Zc,
  props: Bc,
  emits: Yc,
  setup(e, { expose: t }) {
    const n = e, { ns: a, zIndex: l } = tr("notification"), { nextZIndex: r, currentZIndex: s } = l, { Close: c } = Lc, d = U(!1);
    let h;
    const v = D(() => {
      const w = n.type;
      return w && ln[n.type] ? a.m(w) : "";
    }), k = D(() => n.type && ln[n.type] || n.icon), L = D(() => n.position.endsWith("right") ? "right" : "left"), O = D(() => n.position.startsWith("top") ? "top" : "bottom"), W = D(() => {
      var w;
      return {
        [O.value]: `${n.offset}px`,
        zIndex: (w = n.zIndex) != null ? w : s.value
      };
    });
    function _() {
      n.duration > 0 && ({ stop: h } = Gl(() => {
        d.value && o();
      }, n.duration));
    }
    function E() {
      h?.();
    }
    function o() {
      d.value = !1;
    }
    function p({ code: w }) {
      w === Bt.delete || w === Bt.backspace ? E() : w === Bt.esc ? d.value && o() : _();
    }
    return Lt(() => {
      _(), r(), d.value = !0;
    }), Yl(document, "keydown", p), t({
      visible: d,
      close: o
    }), (w, y) => ($(), Se(zn, {
      name: i(a).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: (P) => w.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        Yt(m("div", {
          id: w.id,
          class: Z([i(a).b(), w.customClass, i(L)]),
          style: Zt(i(W)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: _,
          onClick: w.onClick
        }, [
          i(k) ? ($(), Se(i(an), {
            key: 0,
            class: Z([i(a).e("icon"), i(v)])
          }, {
            default: st(() => [
              ($(), Se(rl(i(k))))
            ]),
            _: 1
          }, 8, ["class"])) : we("v-if", !0),
          m("div", {
            class: Z(i(a).e("group"))
          }, [
            m("h2", {
              class: Z(i(a).e("title")),
              textContent: N(w.title)
            }, null, 10, ["textContent"]),
            Yt(m("div", {
              class: Z(i(a).e("content")),
              style: Zt(w.title ? void 0 : { margin: 0 })
            }, [
              _t(w.$slots, "default", {}, () => [
                w.dangerouslyUseHTMLString ? ($(), z(Ge, { key: 1 }, [
                  we(" Caution here, message could've been compromised, never use user's input as message "),
                  m("p", { innerHTML: w.message }, null, 8, ["innerHTML"])
                ], 2112)) : ($(), z("p", { key: 0 }, N(w.message), 1))
              ])
            ], 6), [
              [Xt, w.message]
            ]),
            w.showClose ? ($(), Se(i(an), {
              key: 0,
              class: Z(i(a).e("closeBtn")),
              onClick: Dt(o, ["stop"])
            }, {
              default: st(() => [
                S(i(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : we("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Xt, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Jc = /* @__PURE__ */ hn(Xc, [["__file", "notification.vue"]]);
const rn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Wn = 16;
let qc = 1;
const St = function(e = {}, t) {
  if (!ft)
    return { close: () => {
    } };
  (ot(e) || At(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let a = e.offset || 0;
  rn[n].forEach(({ vm: v }) => {
    var k;
    a += (((k = v.el) == null ? void 0 : k.offsetHeight) || 0) + Wn;
  }), a += Wn;
  const l = `notification_${qc++}`, r = e.onClose, s = {
    ...e,
    offset: a,
    id: l,
    onClose: () => {
      Qc(l, n, r);
    }
  };
  let c = document.body;
  Fn(e.appendTo) ? c = e.appendTo : ot(e.appendTo) && (c = document.querySelector(e.appendTo)), Fn(c) || (c = document.body);
  const d = document.createElement("div"), h = S(Jc, s, Rt(s.message) ? s.message : At(s.message) ? () => s.message : null);
  return h.appContext = Hl(t) ? St._context : t, h.props.onDestroy = () => {
    Jt(null, d);
  }, Jt(h, d), rn[n].push({ vm: h }), c.appendChild(d.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
cr.forEach((e) => {
  St[e] = (t = {}, n) => ((ot(t) || At(t)) && (t = {
    message: t
  }), St({ ...t, type: e }, n));
});
function Qc(e, t, n) {
  const a = rn[t], l = a.findIndex(({ vm: h }) => {
    var v;
    return ((v = h.component) == null ? void 0 : v.props.id) === e;
  });
  if (l === -1)
    return;
  const { vm: r } = a[l];
  if (!r)
    return;
  n?.(r);
  const s = r.el.offsetHeight, c = t.split("-")[0];
  a.splice(l, 1);
  const d = a.length;
  if (!(d < 1))
    for (let h = l; h < d; h++) {
      const { el: v, component: k } = a[h].vm, L = Number.parseInt(v.style[c], 10) - s - Wn;
      k.props.offset = L;
    }
}
function eu() {
  for (const e of Object.values(rn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
St.closeAll = eu;
St._context = null;
const tu = lr(St, "$notify"), Y = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", a) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: a
    });
  },
  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(e) {
    const {
      message: t,
      type: n = "success",
      position: a = "center",
      duration: l = 3e3,
      showClose: r = !1
    } = e;
    a === "center" ? Kc({
      message: t,
      type: n,
      duration: l,
      showClose: r,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : tu({
      message: t,
      type: n,
      position: a,
      duration: l,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: `app-toast app-toast--corner app-toast--${n}`
      // 自定义样式类
    });
  },
  /**
   * 显示成功消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  success(e, t = "center", n) {
    this.msg(e, "success", t, n);
  },
  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(e, t = "center", n) {
    this.msg(e, "warning", t, n);
  },
  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(e, t = "center", n) {
    this.msg(e, "info", t, n);
  },
  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(e, t = "center", n) {
    this.msg(e, "error", t, n);
  }
};
var Rn;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(Rn || (Rn = {}));
async function nu() {
  return T("plugin:path|resolve_directory", {
    directory: Rn.AppCache
  });
}
async function au(...e) {
  return T("plugin:path|join", { paths: e });
}
async function Ja(e, t) {
  await T("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const lu = () => ({
  mode: "folder",
  fixedImagePath: null,
  folderPath: null,
  scheduleEnabled: !1,
  intervalMinutes: 30,
  order: "random",
  folderSort: "fileNameAscending",
  fitMode: "fillCrop",
  autoRestore: !0,
  wallhavenSource: "hot",
  wallhavenCategory: "general",
  wallhavenQuery: null,
  folderSeenPaths: [],
  wallhavenSeenIds: [],
  wallhavenHistoryScope: null,
  taskbarTransparent: !1,
  taskbarAcrylic: !1,
  taskbarTransparencyRegistryHadValue: null,
  taskbarTransparencyRegistryPreviousValue: null,
  systemTransparencyRegistryHadValue: null,
  systemTransparencyRegistryPreviousValue: null,
  lastFolderIndex: 0,
  lastAppliedPath: null
}), ru = (e) => e ? /^https?:\/\//i.test(e) ? e : Lr(e) : "", qa = () => T("wallpaper_get_config"), $n = (e) => T("wallpaper_save_config", { config: e }), Qa = () => T("wallpaper_get_status"), el = (e) => T("wallpaper_scan_folder", { path: e }), tl = (e) => T("wallpaper_set_fixed_image", { path: e }), su = () => T("wallpaper_switch_now"), ou = (e) => T("wallpaper_apply_current_fit", { fitMode: e }), iu = (e) => T("wallpaper_fetch_wallhaven", { params: e }), cu = (e) => T("wallpaper_set_wallhaven_image", { wallpaper: e }), uu = (e) => T("wallpaper_download_wallhaven_image", { wallpaper: e }), du = () => T("wallpaper_clear_cache"), fu = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), hu = async () => {
  try {
    await T("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!fu(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await nu(), t = await au(e, "wallpaper-switcher");
  try {
    await Ja(t);
  } catch {
    await Ja(e);
  }
};
function pu({ config: e, refreshStatus: t }) {
  const { t: n } = Pe(), a = U("switcher"), l = U([]), r = U(1), s = U(1), c = U(!1), d = U(""), h = U(""), v = U("general"), k = U("hot"), L = U(null), O = U(!1), W = U(!1), _ = U(/* @__PURE__ */ new Set()), E = U(/* @__PURE__ */ new Set()), o = /* @__PURE__ */ new Map();
  let p = null, w = null, y = null, P = 0;
  const A = D(() => k.value === "hot" ? "Hot" : k.value === "favorites" ? "Favorites" : "Toplist"), b = D(() => l.value.slice(0, 8)), q = D(() => {
    const j = h.value.trim();
    return v.value === "nature" ? j ? `${j} nature` : "nature" : j || null;
  }), J = D(() => v.value), ce = (j) => {
    const V = String(j).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
      V
    ) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : V.length > 120 ? `${V.slice(0, 120)}...` : V;
  }, ue = (j, V) => {
    const le = new Set(_.value);
    V ? le.add(j) : le.delete(j), _.value = le;
  }, ee = (j) => {
    const V = new Set(E.value);
    V.add(j), E.value = V;
  }, Re = (j, V) => {
    if (!(V instanceof HTMLImageElement)) {
      o.delete(j.id);
      return;
    }
    if (o.set(j.id, V), !p) {
      V.src = j.thumbs.large;
      return;
    }
    V.dataset.src = j.thumbs.large, p.observe(V);
  }, Ye = () => {
    E.value = /* @__PURE__ */ new Set(), o.clear();
  }, Ze = async () => {
    e.value.wallhavenQuery = h.value.trim() || null, e.value.wallhavenCategory = v.value, e.value.wallhavenSource = k.value, e.value.mode = "wallhaven", await $n(e.value);
  }, ye = async (j = r.value) => {
    const V = ++P;
    c.value = !0, d.value = "", l.value = [], Ye();
    try {
      await Ze();
      const le = await iu({
        source: k.value,
        page: j,
        query: q.value,
        category: J.value
      });
      if (V !== P) return;
      l.value = le.data, r.value = le.page, s.value = Math.max(1, le.lastPage), await al();
      for (const ge of o.values())
        p && p.observe(ge);
    } catch (le) {
      if (V !== P) return;
      l.value = [], d.value = ce(le), Y.msg(d.value, "error");
    } finally {
      V === P && (c.value = !1);
    }
  }, Xe = () => ye(1), Je = async (j) => {
    k.value = j, await ye(1);
  }, ve = async (j) => {
    v.value = j, await ye(1);
  }, $e = async () => {
    h.value = "", v.value = e.value.wallhavenCategory || "general", k.value = e.value.wallhavenSource, r.value = 1, d.value = "", l.value = [], a.value = "wallhaven", await ye(1);
  }, De = (j) => {
    L.value = j, O.value = !0, W.value = !1;
  }, je = () => {
    L.value = null, O.value = !1, W.value = !1;
  }, qe = async () => {
    a.value = "switcher", je(), await t();
  }, xe = () => {
    O.value = !1;
  }, Qe = () => {
    O.value = !1, W.value = !0;
  }, et = async (j) => {
    ue(j.id, !0);
    try {
      Y.msg(n("wallpaperSwitcher.messages.settingWallpaper"), "info"), await cu(j), await t(), Y.msg(n("wallpaperSwitcher.messages.wallpaperSet"), "success");
    } catch (V) {
      Y.msg(String(V), "error");
    } finally {
      ue(j.id, !1);
    }
  }, tt = async (j) => {
    ue(j.id, !0);
    try {
      Y.msg(n("wallpaperSwitcher.messages.downloadingWallpaper"), "info"), await uu(j), await t(), Y.msg(n("wallpaperSwitcher.messages.wallpaperDownloaded"), "success");
    } catch (V) {
      Y.msg(String(V), "error");
    } finally {
      ue(j.id, !1);
    }
  }, ze = async () => {
    r.value > 1 && await ye(r.value - 1);
  }, nt = async () => {
    r.value < s.value && await ye(r.value + 1);
  };
  return Lt(() => {
    p = new IntersectionObserver(
      (j) => {
        for (const V of j) {
          if (!V.isIntersecting) continue;
          const le = V.target, ge = le.dataset.src;
          ge && le.src !== ge && (le.src = ge), p?.unobserve(le);
        }
      },
      { root: null, rootMargin: "120px" }
    ), w = null, y = null;
  }), xn(() => {
    p?.disconnect(), p = null, w?.(), y?.();
  }), {
    activeView: a,
    wallpapers: l,
    wallhavenPage: r,
    wallhavenLastPage: s,
    wallhavenLoading: c,
    wallhavenError: d,
    wallhavenKeyword: h,
    wallhavenCategory: v,
    wallhavenSource: k,
    previewWallpaper: L,
    previewLoading: O,
    previewLoadFailed: W,
    workingIds: _,
    loadedThumbIds: E,
    wallhavenSourceLabel: A,
    visibleWallpapers: b,
    openWallhavenGrid: $e,
    backToSwitcher: qe,
    openPreview: De,
    closePreview: je,
    markPreviewLoaded: xe,
    markPreviewFailed: Qe,
    markThumbLoaded: ee,
    setThumbRef: Re,
    refreshWallhaven: Xe,
    setWallhavenSource: Je,
    setWallhavenCategory: ve,
    setWallpaperFromWallhaven: et,
    downloadWallpaperFromWallhaven: tt,
    prevWallhavenPage: ze,
    nextWallhavenPage: nt,
    setupListeners: async () => {
      w = await qt("wallpaper-switcher-changed", t), y = await qt(
        "wallpaper-switcher-error",
        (j) => {
          Y.msg(
            j.payload?.message || n("wallpaperSwitcher.messages.scheduleSwitchFailed"),
            "error"
          );
        }
      );
    }
  };
}
var mu = {
  size: "1em",
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  rtl: !1,
  theme: "outline",
  colors: {
    outline: {
      fill: "#333",
      background: "transparent"
    },
    filled: {
      fill: "#333",
      background: "#FFF"
    },
    twoTone: {
      fill: "#333",
      twoTone: "#2F88FF"
    },
    multiColor: {
      outStrokeColor: "#333",
      outFillColor: "#2F88FF",
      innerStrokeColor: "#FFF",
      innerFillColor: "#43CCF8"
    }
  },
  prefix: "i"
};
function gu() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function wu(e, t, n) {
  var a = typeof t.fill == "string" ? [t.fill] : t.fill || [], l = [], r = t.theme || n.theme;
  switch (r) {
    case "outline":
      l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push("none"), l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push("none");
      break;
    case "filled":
      l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push("#FFF"), l.push("#FFF");
      break;
    case "two-tone":
      l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push(typeof a[1] == "string" ? a[1] : n.colors.twoTone.twoTone), l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push(typeof a[1] == "string" ? a[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push(typeof a[1] == "string" ? a[1] : n.colors.multiColor.outFillColor), l.push(typeof a[2] == "string" ? a[2] : n.colors.multiColor.innerStrokeColor), l.push(typeof a[3] == "string" ? a[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: l,
    id: e
  };
}
var vu = Symbol("icon-context");
function me(e, t, n) {
  var a = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var s = gu(), c = He(vu, mu);
      return function() {
        var d = r.size, h = r.strokeWidth, v = r.strokeLinecap, k = r.strokeLinejoin, L = r.theme, O = r.fill, W = r.spin, _ = wu(s, {
          size: d,
          strokeWidth: h,
          strokeLinecap: v,
          strokeLinejoin: k,
          theme: L,
          fill: O
        }, c), E = [c.prefix + "-icon"];
        return E.push(c.prefix + "-icon-" + e), t && c.rtl && E.push(c.prefix + "-icon-rtl"), W && E.push(c.prefix + "-icon-spin"), S("span", {
          class: E.join(" ")
        }, [n(_)]);
      };
    }
  };
  return a;
}
const _u = me("back", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), sn = me("close-small", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ur = me("computer", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), S("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bu = me("delete", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yu = me("download", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yn = me("folder-open", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ku = me("lightning", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Dn = me("picture", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cu = me("picture-album", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Su = me("pin", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [S("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), S("defs", null, [S("clipPath", {
    id: e.id + "1c742167"
  }, [S("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Lu = me("preview-open", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dr = me("refresh", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Eu = me("save", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), S("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fr = me("search", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tu = me("time", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Iu = ["disabled", "onClick"], Nu = ["onClick", "onKeydown"], jn = /* @__PURE__ */ ae({
  __name: "WallhavenSourceTabs",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    tabClass: {},
    activeClass: {},
    disabledClass: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe(), l = [
      { value: "hot", labelKey: "wallpaperSwitcher.hot" },
      { value: "toplist", labelKey: "wallpaperSwitcher.toplist" },
      { value: "favorites", labelKey: "wallpaperSwitcher.favorites" }
    ], r = (s, c) => {
      c || n("update:modelValue", s);
    };
    return (s, c) => ($(), z(
      Ge,
      null,
      kn(l, (d) => ($(), z(
        Ge,
        {
          key: d.value
        },
        [
          s.tabClass === "button" ? ($(), z("button", {
            key: 0,
            type: "button",
            class: Z({ [s.activeClass || "active"]: s.modelValue === d.value }),
            disabled: s.disabled,
            onClick: (h) => r(d.value, s.disabled)
          }, N(i(a)(d.labelKey)), 11, Iu)) : ($(), z("div", {
            key: 1,
            class: Z(["seg-tab", {
              [s.activeClass || "active"]: s.modelValue === d.value,
              [s.disabledClass || "disabled"]: s.disabled
            }]),
            role: "tab",
            tabindex: "0",
            onClick: (h) => r(d.value, s.disabled),
            onKeydown: sl(Dt((h) => r(d.value, s.disabled), ["prevent"]), ["enter"])
          }, N(i(a)(d.labelKey)), 43, Nu))
        ],
        64
        /* STABLE_FRAGMENT */
      ))),
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), Pu = { class: "top-panel" }, Ou = { class: "preview" }, Au = ["src", "alt"], Fu = {
  key: 1,
  class: "preview-empty"
}, Mu = { class: "status-panel" }, Wu = { class: "status-copy" }, Ru = { class: "wallpaper-name" }, $u = { class: "status-list" }, Du = { class: "status-row" }, ju = { class: "status-row" }, xu = { class: "status-row" }, zu = { class: "status-actions" }, Uu = ["disabled"], Vu = { class: "card settings-card" }, Hu = { class: "form-row mode-row" }, Gu = { class: "row-label" }, Ku = { class: "segmented three" }, Bu = { class: "form-row fixed-row" }, Yu = { class: "row-label" }, Zu = ["value", "placeholder"], Xu = { class: "form-row folder-row" }, Ju = { class: "row-label" }, qu = ["value", "placeholder"], Qu = { class: "hint-row" }, ed = { class: "form-row folder-order-row" }, td = { class: "row-label" }, nd = { class: "segmented folder-order" }, ad = { class: "number-label" }, ld = ["value"], rd = { value: "fileNameAscending" }, sd = { value: "fileNameDescending" }, od = { value: "modifiedAscending" }, id = { value: "modifiedDescending" }, cd = { class: "form-row wallhaven-row" }, ud = { class: "sub-label" }, dd = { class: "segmented source" }, fd = { class: "hint-row" }, hd = { class: "card rules-card" }, pd = { class: "rules-line" }, md = { class: "row-label" }, gd = { class: "switch-label" }, wd = ["checked"], vd = { class: "number-label" }, _d = ["value"], bd = { class: "segmented mini" }, yd = { class: "rules-line" }, kd = { class: "row-label compact" }, Cd = { class: "segmented fit" }, Sd = ["disabled"], Ld = ["disabled"], Ed = ["disabled"], Td = { class: "checkbox-label" }, Id = ["checked"], Nd = { class: "rules-line operation-line" }, Pd = { class: "row-label compact" }, Od = { class: "checkbox-label" }, Ad = ["checked"], Fd = { class: "checkbox-label" }, Md = ["checked", "disabled"], Wd = { class: "footer-card" }, Rd = { class: "cache-info" }, $d = { class: "footer-actions" }, Dd = ["disabled"], jd = ["disabled"], xd = ["disabled"], zd = /* @__PURE__ */ ae({
  __name: "SwitcherHome",
  props: {
    config: {},
    loading: { type: Boolean },
    previewSrc: {},
    currentWallpaperName: {},
    sourceLabel: {},
    resolutionLabel: {},
    nextSwitchLabel: {},
    folderCountLabel: {},
    screenLabel: {},
    cacheSizeLabel: {},
    switching: { type: Boolean },
    fitting: { type: Boolean },
    clearingCache: { type: Boolean },
    openingCache: { type: Boolean },
    saving: { type: Boolean }
  },
  emits: ["updateConfig", "chooseImage", "chooseFolder", "scanFolder", "openWallhavenGrid", "switchNow", "setCurrentAsFixed", "setFitMode", "clearCache", "openCacheDir", "persistConfig"],
  setup(e, { emit: t }) {
    const n = e, a = t, { t: l } = Pe(), r = (o) => {
      a("updateConfig", { ...n.config, ...o });
    }, s = (o) => r({ mode: o }), c = (o) => r({ wallhavenSource: o }), d = (o) => r({ fixedImagePath: o.target.value }), h = (o) => r({ folderPath: o.target.value }), v = (o) => r({ scheduleEnabled: o.target.checked }), k = (o) => r({
      intervalMinutes: Number(o.target.value)
    }), L = (o) => r({ autoRestore: o.target.checked }), O = (o) => r({
      taskbarTransparent: o.target.checked,
      taskbarAcrylic: o.target.checked ? n.config.taskbarAcrylic : !1
    }), W = (o) => r({
      taskbarAcrylic: o.target.checked
    }), _ = (o) => r({ order: o }), E = (o) => r({ folderSort: o.target.value });
    return (o, p) => ($(), z(
      "div",
      {
        class: Z(["content", { dimmed: o.loading }])
      },
      [
        m("section", Pu, [
          m("div", Ou, [
            o.previewSrc ? ($(), z("img", {
              key: 0,
              src: o.previewSrc,
              alt: i(l)("wallpaperSwitcher.currentPreviewAlt")
            }, null, 8, Au)) : ($(), z("div", Fu, [
              S(i(Dn), { size: 42 }),
              m(
                "span",
                null,
                N(i(l)("wallpaperSwitcher.noCurrentWallpaper")),
                1
                /* TEXT */
              )
            ]))
          ]),
          m("div", Mu, [
            m("div", Wu, [
              m("div", Ru, [
                m(
                  "span",
                  null,
                  N(i(l)("wallpaperSwitcher.currentWallpaper")),
                  1
                  /* TEXT */
                ),
                m(
                  "strong",
                  null,
                  N(o.currentWallpaperName),
                  1
                  /* TEXT */
                )
              ]),
              m("div", $u, [
                m("div", Du, [
                  S(i(yn), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(i(l)("wallpaperSwitcher.source")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(o.sourceLabel),
                    1
                    /* TEXT */
                  )
                ]),
                m("div", ju, [
                  S(i(ur), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(i(l)("wallpaperSwitcher.resolution")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(o.resolutionLabel),
                    1
                    /* TEXT */
                  )
                ]),
                m("div", xu, [
                  S(i(Tu), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(i(l)("wallpaperSwitcher.nextSwitch")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(o.nextSwitchLabel),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            m("div", zu, [
              m("button", {
                type: "button",
                class: "primary-btn",
                disabled: o.switching,
                onClick: p[0] || (p[0] = (w) => a("switchNow"))
              }, [
                S(i(ku), {
                  theme: "outline",
                  size: 14
                }),
                oe(
                  " " + N(o.switching ? i(l)("wallpaperSwitcher.switching") : i(l)("wallpaperSwitcher.switchNow")),
                  1
                  /* TEXT */
                )
              ], 8, Uu),
              m("button", {
                type: "button",
                class: "secondary-btn",
                onClick: p[1] || (p[1] = (w) => a("setCurrentAsFixed"))
              }, [
                S(i(Su), {
                  theme: "outline",
                  size: 14
                }),
                oe(
                  " " + N(i(l)("wallpaperSwitcher.setFixed")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ]),
        m("section", Vu, [
          m("div", Hu, [
            m(
              "span",
              Gu,
              N(i(l)("wallpaperSwitcher.mode")),
              1
              /* TEXT */
            ),
            m("div", Ku, [
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: o.config.mode === "fixed" }),
                  onClick: p[2] || (p[2] = (w) => s("fixed"))
                },
                N(i(l)("wallpaperSwitcher.fixedImage")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: o.config.mode === "folder" }),
                  onClick: p[3] || (p[3] = (w) => s("folder"))
                },
                N(i(l)("wallpaperSwitcher.localFolder")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: o.config.mode === "wallhaven" }),
                  onClick: p[4] || (p[4] = (w) => s("wallhaven"))
                },
                N(i(l)("wallpaperSwitcher.wallhavenOnline")),
                3
                /* TEXT, CLASS */
              )
            ])
          ]),
          m("div", Bu, [
            m(
              "span",
              Yu,
              N(i(l)("wallpaperSwitcher.fixedImage")),
              1
              /* TEXT */
            ),
            m("input", {
              value: o.config.fixedImagePath,
              class: "path-input",
              placeholder: i(l)("wallpaperSwitcher.placeholders.fixedImage"),
              spellcheck: "false",
              onInput: d
            }, null, 40, Zu),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: p[5] || (p[5] = (w) => a("chooseImage"))
            }, [
              S(i(Dn), { size: 16 }),
              oe(
                " " + N(i(l)("wallpaperSwitcher.selectImage")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", Xu, [
            m(
              "span",
              Ju,
              N(i(l)("wallpaperSwitcher.localFolder")),
              1
              /* TEXT */
            ),
            m("input", {
              value: o.config.folderPath,
              class: "path-input",
              placeholder: i(l)("wallpaperSwitcher.placeholders.folder"),
              spellcheck: "false",
              onInput: h
            }, null, 40, qu),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: p[6] || (p[6] = (w) => a("chooseFolder"))
            }, [
              S(i(yn), { size: 16 }),
              oe(
                " " + N(i(l)("wallpaperSwitcher.select")),
                1
                /* TEXT */
              )
            ]),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: p[7] || (p[7] = (w) => a("scanFolder"))
            }, [
              S(i(dr), { size: 16 }),
              oe(
                " " + N(i(l)("wallpaperSwitcher.scan")),
                1
                /* TEXT */
              )
            ])
          ]),
          m(
            "div",
            Qu,
            N(o.folderCountLabel),
            1
            /* TEXT */
          ),
          m("div", ed, [
            m(
              "span",
              td,
              N(i(l)("wallpaperSwitcher.folderOrder")),
              1
              /* TEXT */
            ),
            m("div", nd, [
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: o.config.order === "sequential" }),
                  onClick: p[8] || (p[8] = (w) => _("sequential"))
                },
                N(i(l)("wallpaperSwitcher.sequential")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: o.config.order === "random" }),
                  onClick: p[9] || (p[9] = (w) => _("random"))
                },
                N(i(l)("wallpaperSwitcher.randomNoRepeat")),
                3
                /* TEXT, CLASS */
              )
            ]),
            m("label", ad, [
              oe(
                N(i(l)("wallpaperSwitcher.sortBy")) + " ",
                1
                /* TEXT */
              ),
              m("select", {
                value: o.config.folderSort,
                onChange: E
              }, [
                m(
                  "option",
                  rd,
                  N(i(l)("wallpaperSwitcher.sortFileNameAscending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  sd,
                  N(i(l)("wallpaperSwitcher.sortFileNameDescending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  od,
                  N(i(l)("wallpaperSwitcher.sortModifiedAscending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  id,
                  N(i(l)("wallpaperSwitcher.sortModifiedDescending")),
                  1
                  /* TEXT */
                )
              ], 40, ld)
            ])
          ]),
          m("div", cd, [
            p[17] || (p[17] = m(
              "span",
              { class: "row-label" },
              "Wallhaven",
              -1
              /* HOISTED */
            )),
            m(
              "span",
              ud,
              N(i(l)("wallpaperSwitcher.sourceShort")),
              1
              /* TEXT */
            ),
            m("div", dd, [
              S(jn, {
                "tab-class": "button",
                "model-value": o.config.wallhavenSource,
                "onUpdate:modelValue": c
              }, null, 8, ["model-value"])
            ]),
            m("button", {
              type: "button",
              class: "tool-btn grid-open",
              onClick: p[10] || (p[10] = (w) => a("openWallhavenGrid"))
            }, [
              S(i(fr), { size: 16 }),
              oe(
                " " + N(i(l)("wallpaperSwitcher.openOnlineGrid")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", fd, [
            m(
              "span",
              null,
              N(i(l)("wallpaperSwitcher.screenMatch")),
              1
              /* TEXT */
            ),
            m(
              "strong",
              null,
              N(o.screenLabel),
              1
              /* TEXT */
            )
          ])
        ]),
        m("section", hd, [
          m("div", pd, [
            m(
              "span",
              md,
              N(i(l)("wallpaperSwitcher.switchRules")),
              1
              /* TEXT */
            ),
            m("label", gd, [
              oe(
                N(i(l)("wallpaperSwitcher.enableSchedule")) + " ",
                1
                /* TEXT */
              ),
              m("input", {
                checked: o.config.scheduleEnabled,
                type: "checkbox",
                onChange: v
              }, null, 40, wd),
              p[18] || (p[18] = m(
                "span",
                { class: "switch-control" },
                null,
                -1
                /* HOISTED */
              ))
            ]),
            m("label", vd, [
              oe(
                N(i(l)("wallpaperSwitcher.every")) + " ",
                1
                /* TEXT */
              ),
              m("input", {
                value: o.config.intervalMinutes,
                type: "number",
                min: "1",
                max: "1440",
                onInput: k
              }, null, 40, _d),
              oe(
                " " + N(i(l)("wallpaperSwitcher.minutes")),
                1
                /* TEXT */
              )
            ]),
            we(` <span class="sub-label">{{ t('wallpaperSwitcher.type') }}</span> `),
            m("div", bd, [
              S(jn, {
                "tab-class": "button",
                "model-value": o.config.wallhavenSource,
                "onUpdate:modelValue": c
              }, null, 8, ["model-value"])
            ])
          ]),
          m("div", yd, [
            m(
              "span",
              kd,
              N(i(l)("wallpaperSwitcher.fitMode")),
              1
              /* TEXT */
            ),
            m("div", Cd, [
              m("button", {
                type: "button",
                class: Z({ active: o.config.fitMode === "fillCrop" }),
                disabled: o.fitting,
                onClick: p[11] || (p[11] = (w) => a("setFitMode", "fillCrop"))
              }, N(i(l)("wallpaperSwitcher.fitFillCrop")), 11, Sd),
              m("button", {
                type: "button",
                class: Z({ active: o.config.fitMode === "fit" }),
                disabled: o.fitting,
                onClick: p[12] || (p[12] = (w) => a("setFitMode", "fit"))
              }, N(i(l)("wallpaperSwitcher.fitContain")), 11, Ld),
              m("button", {
                type: "button",
                class: Z({ active: o.config.fitMode === "center" }),
                disabled: o.fitting,
                onClick: p[13] || (p[13] = (w) => a("setFitMode", "center"))
              }, N(i(l)("wallpaperSwitcher.fitCenter")), 11, Ed)
            ]),
            m("label", Td, [
              m("input", {
                checked: o.config.autoRestore,
                type: "checkbox",
                onChange: L
              }, null, 40, Id),
              oe(
                " " + N(i(l)("wallpaperSwitcher.autoRestore")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", Nd, [
            m(
              "span",
              Pd,
              N(i(l)("wallpaperSwitcher.operationOptions")),
              1
              /* TEXT */
            ),
            m("label", Od, [
              m("input", {
                checked: o.config.taskbarTransparent,
                type: "checkbox",
                onChange: O
              }, null, 40, Ad),
              oe(
                " " + N(i(l)("wallpaperSwitcher.taskbarTransparent")),
                1
                /* TEXT */
              )
            ]),
            m("label", Fd, [
              m("input", {
                checked: o.config.taskbarAcrylic,
                disabled: !o.config.taskbarTransparent,
                type: "checkbox",
                onChange: W
              }, null, 40, Md),
              oe(
                " " + N(i(l)("wallpaperSwitcher.taskbarAcrylic")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        m("footer", Wd, [
          m("div", Rd, [
            m(
              "strong",
              null,
              N(i(l)("wallpaperSwitcher.cache")),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              N(i(l)("wallpaperSwitcher.wallhavenCache")),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              N(o.cacheSizeLabel),
              1
              /* TEXT */
            )
          ]),
          m("div", $d, [
            m("button", {
              type: "button",
              class: "secondary-btn",
              disabled: o.clearingCache,
              onClick: p[14] || (p[14] = (w) => a("clearCache"))
            }, [
              S(i(bu), { size: 16 }),
              oe(
                " " + N(o.clearingCache ? i(l)("wallpaperSwitcher.clearing") : i(l)("wallpaperSwitcher.clearCache")),
                1
                /* TEXT */
              )
            ], 8, Dd),
            m("button", {
              type: "button",
              class: "secondary-btn",
              disabled: o.openingCache,
              onClick: p[15] || (p[15] = (w) => a("openCacheDir"))
            }, [
              S(i(yn), { size: 16 }),
              oe(
                " " + N(o.openingCache ? i(l)("wallpaperSwitcher.opening") : i(l)("wallpaperSwitcher.openCache")),
                1
                /* TEXT */
              )
            ], 8, jd),
            m("button", {
              type: "button",
              class: "primary-btn",
              disabled: o.saving,
              onClick: p[16] || (p[16] = (w) => a("persistConfig"))
            }, [
              S(i(Eu), { size: 17 }),
              oe(
                " " + N(o.saving ? i(l)("wallpaperSwitcher.saving") : i(l)("wallpaperSwitcher.saveSettings")),
                1
                /* TEXT */
              )
            ], 8, xd)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Ud = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Vd = {
  key: 0,
  class: "title"
}, Hd = {
  key: 1,
  class: "title"
}, Gd = ["title"], Kd = {
  key: 2,
  class: "window-actions"
}, Bd = ["title"], Yd = ["title"], Zd = {
  key: 3,
  class: "window-actions"
}, Xd = ["aria-label"], Jd = ["title"], qd = /* @__PURE__ */ ae({
  __name: "SwitcherTitlebar",
  props: {
    activeView: {},
    wallhavenSource: {},
    wallhavenLoading: { type: Boolean }
  },
  emits: ["back", "close", "openWallhaven", "setWallhavenSource"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe();
    return (l, r) => ($(), z("header", Ud, [
      l.activeView === "switcher" ? ($(), z("div", Vd, [
        S(i(Dn), { size: 18 }),
        m(
          "span",
          null,
          N(i(a)("wallpaperSwitcher.title")),
          1
          /* TEXT */
        )
      ])) : ($(), z("div", Hd, [
        m("button", {
          type: "button",
          class: "flat-icon",
          title: i(a)("wallpaperSwitcher.back"),
          onClick: r[0] || (r[0] = (s) => n("back"))
        }, [
          S(i(_u), { size: 20 })
        ], 8, Gd),
        m(
          "span",
          null,
          N(i(a)("wallpaperSwitcher.wallhavenTitle")),
          1
          /* TEXT */
        )
      ])),
      l.activeView === "switcher" ? ($(), z("div", Kd, [
        m("button", {
          type: "button",
          class: "icon-btn online-entry-btn",
          title: i(a)("wallpaperSwitcher.openWallhaven"),
          onClick: r[1] || (r[1] = (s) => n("openWallhaven"))
        }, [
          S(i(Cu), { size: 18 })
        ], 8, Bd),
        m("button", {
          type: "button",
          class: "icon-btn",
          title: i(a)("wallpaperSwitcher.close"),
          onClick: r[2] || (r[2] = (s) => n("close"))
        }, [
          S(i(sn), { size: 20 })
        ], 8, Yd)
      ])) : ($(), z("div", Zd, [
        m("div", {
          class: "source-toggle",
          role: "tablist",
          "aria-label": i(a)("wallpaperSwitcher.sourceToggle")
        }, [
          S(jn, {
            "model-value": l.wallhavenSource,
            disabled: l.wallhavenLoading,
            "onUpdate:modelValue": r[3] || (r[3] = (s) => n("setWallhavenSource", s))
          }, null, 8, ["model-value", "disabled"])
        ], 8, Xd),
        m("button", {
          type: "button",
          class: "icon-btn",
          title: i(a)("wallpaperSwitcher.close"),
          onClick: r[4] || (r[4] = (s) => n("close"))
        }, [
          S(i(sn), { size: 20 })
        ], 8, Jd)
      ]))
    ]));
  }
}), Qd = { class: "wallhaven-view" }, ef = { class: "filters filters--preview-style" }, tf = { class: "search-box wallhaven-search" }, nf = ["value", "placeholder"], af = ["title"], lf = ["aria-label"], rf = ["disabled", "onClick"], sf = { class: "wallhaven-meta" }, of = ["title"], cf = { class: "grid-wrap" }, uf = {
  key: 0,
  class: "empty-state"
}, df = {
  key: 1,
  class: "empty-state error-state"
}, ff = {
  key: 2,
  class: "empty-state"
}, hf = {
  key: 3,
  class: "wallpaper-grid"
}, pf = ["onClick"], mf = {
  key: 0,
  class: "thumb-skeleton"
}, gf = ["alt", "onLoad"], wf = ["title", "onClick"], vf = ["title", "disabled", "onClick"], _f = ["title", "disabled", "onClick"], bf = { class: "pager" }, yf = { class: "source-note" }, kf = { class: "pager-actions" }, Cf = ["disabled"], Sf = ["disabled"], Lf = /* @__PURE__ */ ae({
  __name: "WallhavenView",
  props: {
    keyword: {},
    category: {},
    loading: { type: Boolean },
    error: {},
    wallpapers: {},
    loadedThumbIds: {},
    workingIds: {},
    page: {},
    lastPage: {},
    sourceLabel: {},
    screenLabel: {},
    setThumbRef: { type: Function }
  },
  emits: ["update:keyword", "refresh", "setCategory", "openPreview", "markThumbLoaded", "setWallpaper", "downloadWallpaper", "prevPage", "nextPage"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe(), l = [
      { value: "general", labelKey: "wallpaperSwitcher.categories.general" },
      { value: "anime", labelKey: "wallpaperSwitcher.categories.anime" },
      { value: "people", labelKey: "wallpaperSwitcher.categories.people" },
      { value: "nature", labelKey: "wallpaperSwitcher.categories.nature" }
    ], r = (s) => n("update:keyword", s.target.value);
    return (s, c) => ($(), z("div", Qd, [
      m("section", ef, [
        m("div", tf, [
          m("input", {
            value: s.keyword,
            type: "text",
            placeholder: i(a)("wallpaperSwitcher.searchPlaceholder"),
            onInput: r,
            onKeydown: c[0] || (c[0] = sl((d) => n("refresh"), ["enter"]))
          }, null, 40, nf),
          S(i(fr), {
            size: 16,
            class: "search-icon"
          }),
          s.keyword ? ($(), z("button", {
            key: 0,
            type: "button",
            class: "clear-btn",
            title: i(a)("wallpaperSwitcher.clear"),
            onClick: c[1] || (c[1] = (d) => n("update:keyword", ""))
          }, [
            S(i(sn), { size: 18 })
          ], 8, af)) : we("v-if", !0)
        ]),
        m("div", {
          class: "wallhaven-tabs",
          role: "tablist",
          "aria-label": i(a)("wallpaperSwitcher.categoryToggle")
        }, [
          ($(), z(
            Ge,
            null,
            kn(l, (d) => m("button", {
              key: d.value,
              type: "button",
              class: Z({ active: s.category === d.value }),
              disabled: s.loading,
              onClick: (h) => n("setCategory", d.value)
            }, N(i(a)(d.labelKey)), 11, rf)),
            64
            /* STABLE_FRAGMENT */
          ))
        ], 8, lf),
        m("div", sf, [
          m(
            "span",
            null,
            N(i(a)("wallpaperSwitcher.autoMatch", { resolution: s.screenLabel })),
            1
            /* TEXT */
          ),
          m("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: i(a)("wallpaperSwitcher.refresh"),
            onClick: c[2] || (c[2] = (d) => n("refresh"))
          }, [
            S(i(dr), {
              size: 14,
              class: Z({ spinning: s.loading })
            }, null, 8, ["class"])
          ], 8, of)
        ])
      ]),
      m("section", cf, [
        s.loading && s.wallpapers.length === 0 ? ($(), z(
          "div",
          uf,
          N(i(a)("wallpaperSwitcher.loadingWallhaven")),
          1
          /* TEXT */
        )) : s.error ? ($(), z("div", df, [
          m(
            "span",
            null,
            N(s.error),
            1
            /* TEXT */
          ),
          m(
            "button",
            {
              type: "button",
              onClick: c[3] || (c[3] = (d) => n("refresh"))
            },
            N(i(a)("wallpaperSwitcher.retry")),
            1
            /* TEXT */
          )
        ])) : s.wallpapers.length === 0 ? ($(), z(
          "div",
          ff,
          N(i(a)("wallpaperSwitcher.noWallpapers")),
          1
          /* TEXT */
        )) : ($(), z("div", hf, [
          ($(!0), z(
            Ge,
            null,
            kn(s.wallpapers, (d) => ($(), z("article", {
              key: d.id,
              class: "wallpaper-card"
            }, [
              m("button", {
                type: "button",
                class: "thumb",
                onClick: (h) => n("openPreview", d)
              }, [
                s.loadedThumbIds.has(d.id) ? we("v-if", !0) : ($(), z("div", mf)),
                m("img", {
                  ref_for: !0,
                  ref: (h) => s.setThumbRef(d, h),
                  alt: d.resolution,
                  loading: "lazy",
                  onLoad: (h) => n("markThumbLoaded", d.id)
                }, null, 40, gf),
                m(
                  "span",
                  null,
                  N(d.resolution),
                  1
                  /* TEXT */
                )
              ], 8, pf),
              m("div", {
                class: "card-actions",
                onClick: c[4] || (c[4] = Dt(() => {
                }, ["stop"]))
              }, [
                m("button", {
                  type: "button",
                  title: i(a)("wallpaperSwitcher.preview"),
                  onClick: (h) => n("openPreview", d)
                }, [
                  S(i(Lu), { size: 16 }),
                  oe(
                    " " + N(i(a)("wallpaperSwitcher.preview")),
                    1
                    /* TEXT */
                  )
                ], 8, wf),
                m("button", {
                  type: "button",
                  title: i(a)("wallpaperSwitcher.setWallpaper"),
                  disabled: s.workingIds.has(d.id),
                  onClick: (h) => n("setWallpaper", d)
                }, [
                  S(i(ur), { size: 16 }),
                  oe(
                    " " + N(s.workingIds.has(d.id) ? i(a)("wallpaperSwitcher.setting") : i(a)("wallpaperSwitcher.set")),
                    1
                    /* TEXT */
                  )
                ], 8, vf),
                m("button", {
                  type: "button",
                  title: i(a)("wallpaperSwitcher.download"),
                  disabled: s.workingIds.has(d.id),
                  onClick: (h) => n("downloadWallpaper", d)
                }, [
                  S(i(yu), { size: 16 }),
                  oe(
                    " " + N(i(a)("wallpaperSwitcher.download")),
                    1
                    /* TEXT */
                  )
                ], 8, _f)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      m("footer", bf, [
        m(
          "span",
          null,
          N(i(a)("wallpaperSwitcher.page", { page: s.page })),
          1
          /* TEXT */
        ),
        m(
          "span",
          yf,
          N(i(a)("wallpaperSwitcher.sourceNote", { source: s.sourceLabel })),
          1
          /* TEXT */
        ),
        m("div", kf, [
          m("button", {
            type: "button",
            disabled: s.page <= 1 || s.loading,
            onClick: c[5] || (c[5] = (d) => n("prevPage"))
          }, N(i(a)("wallpaperSwitcher.prevPage")), 9, Cf),
          m("button", {
            type: "button",
            disabled: s.page >= s.lastPage || s.loading,
            onClick: c[6] || (c[6] = (d) => n("nextPage"))
          }, N(i(a)("wallpaperSwitcher.nextPage")), 9, Sf)
        ])
      ])
    ]));
  }
}), Ef = { class: "preview-dialog" }, Tf = { class: "preview-image-wrap" }, If = {
  key: 0,
  class: "preview-skeleton"
}, Nf = {
  key: 1,
  class: "preview-error"
}, Pf = ["src", "alt"], Of = ["disabled"], Af = ["disabled"], Ff = /* @__PURE__ */ ae({
  __name: "WallpaperPreviewModal",
  props: {
    wallpaper: {},
    loading: { type: Boolean },
    loadFailed: { type: Boolean },
    workingIds: {}
  },
  emits: ["close", "loaded", "failed", "download", "setWallpaper"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe();
    return (l, r) => l.wallpaper ? ($(), z("div", {
      key: 0,
      class: "preview-modal",
      onClick: r[5] || (r[5] = Dt((s) => n("close"), ["self"]))
    }, [
      m("div", Ef, [
        m("header", null, [
          m(
            "strong",
            null,
            N(l.wallpaper.resolution),
            1
            /* TEXT */
          ),
          m("button", {
            type: "button",
            class: "flat-icon",
            onClick: r[0] || (r[0] = (s) => n("close"))
          }, [
            S(i(sn), { size: 23 })
          ])
        ]),
        m("div", Tf, [
          l.loading ? ($(), z("div", If, [
            m(
              "span",
              null,
              N(i(a)("wallpaperSwitcher.loadingPreview")),
              1
              /* TEXT */
            )
          ])) : we("v-if", !0),
          l.loadFailed ? ($(), z(
            "div",
            Nf,
            N(i(a)("wallpaperSwitcher.previewLoadFailed")),
            1
            /* TEXT */
          )) : we("v-if", !0),
          m("img", {
            class: Z({ ready: !l.loading && !l.loadFailed }),
            src: l.wallpaper.path,
            alt: i(a)("wallpaperSwitcher.wallpaperPreviewAlt"),
            onLoad: r[1] || (r[1] = (s) => n("loaded")),
            onError: r[2] || (r[2] = (s) => n("failed"))
          }, null, 42, Pf)
        ]),
        m("footer", null, [
          m("button", {
            type: "button",
            class: "secondary-btn",
            disabled: l.workingIds.has(l.wallpaper.id),
            onClick: r[3] || (r[3] = (s) => n("download", l.wallpaper))
          }, N(i(a)("wallpaperSwitcher.downloadCache")), 9, Of),
          m("button", {
            type: "button",
            class: "primary-btn",
            disabled: l.workingIds.has(l.wallpaper.id),
            onClick: r[4] || (r[4] = (s) => n("setWallpaper", l.wallpaper))
          }, N(l.workingIds.has(l.wallpaper.id) ? i(a)("wallpaperSwitcher.setting") : i(a)("wallpaperSwitcher.setWallpaper")), 9, Af)
        ])
      ])
    ])) : we("v-if", !0);
  }
}), Mf = { class: "wallpaper-window" }, Wf = {
  key: 0,
  class: "unsupported"
}, Rf = /* @__PURE__ */ ae({
  __name: "index",
  setup(e) {
    const t = ul(), { t: n } = Pe(), a = U(lu()), l = U(null), r = U(null), s = U(!1), c = U(!1), d = U(!1), h = U(!1), v = U(!1), k = U(!1), L = async () => {
      try {
        l.value = await Qa();
      } catch (R) {
        Y.msg(String(R), "error");
      }
    }, O = pu({
      config: a,
      refreshStatus: async () => {
        await L();
      }
    }), {
      activeView: W,
      wallhavenPage: _,
      wallhavenLastPage: E,
      wallhavenLoading: o,
      wallhavenError: p,
      wallhavenKeyword: w,
      wallhavenCategory: y,
      wallhavenSource: P,
      previewWallpaper: A,
      previewLoading: b,
      previewLoadFailed: q,
      workingIds: J,
      loadedThumbIds: ce,
      wallhavenSourceLabel: ue,
      visibleWallpapers: ee,
      openWallhavenGrid: Re,
      backToSwitcher: Ye,
      openPreview: Ze,
      closePreview: ye,
      markPreviewLoaded: Xe,
      markPreviewFailed: Je,
      markThumbLoaded: ve,
      setThumbRef: $e,
      refreshWallhaven: De,
      setWallhavenSource: je,
      setWallhavenCategory: qe,
      setWallpaperFromWallhaven: xe,
      downloadWallpaperFromWallhaven: Qe,
      prevWallhavenPage: et,
      nextWallhavenPage: tt,
      setupListeners: ze
    } = O, nt = D(
      () => ru(l.value?.currentPath || a.value.lastAppliedPath)
    ), at = D(() => {
      const R = l.value?.currentPath || a.value.lastAppliedPath;
      return R ? R.split(/[\\/]/).pop() || R : n("wallpaperSwitcher.noCurrentWallpaper");
    }), j = D(() => {
      const R = l.value?.screenWidth || 2560, fe = l.value?.screenHeight || 1440;
      return `${R} × ${fe}`;
    }), V = D(
      () => l.value?.currentResolution || j.value
    ), le = (R) => R < 1024 ? `${R} B` : R < 1024 * 1024 ? `${(R / 1024).toFixed(1)} KB` : R < 1024 * 1024 * 1024 ? `${(R / 1024 / 1024).toFixed(1)} MB` : `${(R / 1024 / 1024 / 1024).toFixed(1)} GB`, ge = D(() => a.value.mode === "fixed" ? n("wallpaperSwitcher.fixedImage") : a.value.mode === "wallhaven" ? "Wallhaven" : n("wallpaperSwitcher.localFolder")), Ue = D(() => {
      if (a.value.mode === "fixed" || !a.value.scheduleEnabled || !l.value?.schedulerRunning)
        return "—";
      const R = l.value?.nextSwitchAt;
      if (!R) return "—";
      const fe = Math.max(0, R - Math.floor(Date.now() / 1e3));
      return fe < 60 ? n("wallpaperSwitcher.time.secondsLater", { count: fe }) : n("wallpaperSwitcher.time.minutesLater", {
        count: Math.ceil(fe / 60)
      });
    }), lt = D(() => {
      const R = l.value?.cacheSizeBytes ?? 0;
      return le(R);
    }), ht = D(() => r.value ? n("wallpaperSwitcher.folderStatus.detected", {
      count: r.value.count
    }) : a.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), u = async () => {
      s.value = !0;
      try {
        const [R, fe] = await Promise.all([
          qa(),
          Qa()
        ]);
        if (a.value = R, l.value = fe, R.folderPath)
          try {
            r.value = await el(R.folderPath);
          } catch {
            r.value = null;
          }
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        s.value = !1;
      }
    }, f = async () => {
      c.value = !0;
      try {
        await $n(a.value), await L(), Y.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        c.value = !1;
      }
    }, C = async () => {
      const R = await oa({
        multiple: !1,
        directory: !1,
        filters: [
          { name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }
        ]
      });
      if (typeof R == "string") {
        a.value.fixedImagePath = R, a.value.mode = "fixed";
        try {
          await tl(R), await u(), Y.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
        } catch (fe) {
          Y.msg(String(fe), "error");
        }
      }
    }, F = async () => {
      if (!a.value.folderPath) {
        Y.msg(n("wallpaperSwitcher.messages.selectFolderFirst"), "warning");
        return;
      }
      try {
        r.value = await el(a.value.folderPath), r.value.count === 0 ? Y.msg(n("wallpaperSwitcher.messages.noImagesInFolder"), "warning") : Y.msg(ht.value, "success");
      } catch (R) {
        Y.msg(String(R), "error");
      }
    }, Q = async () => {
      const R = await oa({ multiple: !1, directory: !0 });
      typeof R == "string" && (a.value.folderPath = R, a.value.mode = "folder", await F());
    }, x = async () => {
      d.value = !0;
      try {
        await $n(a.value), await su(), await L(), Y.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        d.value = !1;
      }
    }, g = async (R) => {
      a.value.fitMode = R, h.value = !0;
      try {
        await ou(R), await L(), a.value = await qa(), Y.msg(n("wallpaperSwitcher.messages.fitApplied"), "success");
      } catch (fe) {
        Y.msg(String(fe), "error");
      } finally {
        h.value = !1;
      }
    }, I = async () => {
      if (!l.value?.currentPath) {
        Y.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      a.value.mode = "fixed", a.value.fixedImagePath = l.value.currentPath, a.value.scheduleEnabled = !1;
      try {
        await tl(l.value.currentPath), await u(), Y.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
      } catch (R) {
        Y.msg(String(R), "error");
      }
    }, B = async () => {
      v.value = !0;
      try {
        await du(), await L(), Y.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        v.value = !1;
      }
    }, te = async () => {
      k.value = !0;
      try {
        await hu();
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        k.value = !1;
      }
    }, Oe = (R) => {
      a.value = R;
    }, pt = async () => {
      await t.close();
    };
    return Lt(async () => {
      await u(), await ze();
    }), xn(() => {
    }), (R, fe) => ($(), z("main", Mf, [
      S(qd, {
        "active-view": i(W),
        "wallhaven-source": i(P),
        "wallhaven-loading": i(o),
        onBack: i(Ye),
        onClose: pt,
        onOpenWallhaven: i(Re),
        onSetWallhavenSource: i(je)
      }, null, 8, ["active-view", "wallhaven-source", "wallhaven-loading", "onBack", "onOpenWallhaven", "onSetWallhavenSource"]),
      i(l) && !i(l).supported ? ($(), z(
        "section",
        Wf,
        N(i(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : we("v-if", !0),
      i(W) === "switcher" ? ($(), Se(zd, {
        key: 1,
        config: i(a),
        loading: i(s),
        "preview-src": i(nt),
        "current-wallpaper-name": i(at),
        "source-label": i(ge),
        "resolution-label": i(V),
        "next-switch-label": i(Ue),
        "folder-count-label": i(ht),
        "screen-label": i(j),
        "cache-size-label": i(lt),
        switching: i(d),
        fitting: i(h),
        "clearing-cache": i(v),
        "opening-cache": i(k),
        saving: i(c),
        onUpdateConfig: Oe,
        onChooseImage: C,
        onChooseFolder: Q,
        onScanFolder: F,
        onOpenWallhavenGrid: i(Re),
        onSwitchNow: x,
        onSetCurrentAsFixed: I,
        onSetFitMode: g,
        onClearCache: B,
        onOpenCacheDir: te,
        onPersistConfig: f
      }, null, 8, ["config", "loading", "preview-src", "current-wallpaper-name", "source-label", "resolution-label", "next-switch-label", "folder-count-label", "screen-label", "cache-size-label", "switching", "fitting", "clearing-cache", "opening-cache", "saving", "onOpenWallhavenGrid"])) : ($(), Se(Lf, {
        key: 2,
        keyword: i(w),
        "onUpdate:keyword": fe[0] || (fe[0] = (na) => ll(w) ? w.value = na : null),
        category: i(y),
        loading: i(o),
        error: i(p),
        wallpapers: i(ee),
        "loaded-thumb-ids": i(ce),
        "working-ids": i(J),
        page: i(_),
        "last-page": i(E),
        "source-label": i(ue),
        "screen-label": i(j),
        "set-thumb-ref": i($e),
        onRefresh: i(De),
        onSetCategory: i(qe),
        onOpenPreview: i(Ze),
        onMarkThumbLoaded: i(ve),
        onSetWallpaper: i(xe),
        onDownloadWallpaper: i(Qe),
        onPrevPage: i(et),
        onNextPage: i(tt)
      }, null, 8, ["keyword", "category", "loading", "error", "wallpapers", "loaded-thumb-ids", "working-ids", "page", "last-page", "source-label", "screen-label", "set-thumb-ref", "onRefresh", "onSetCategory", "onOpenPreview", "onMarkThumbLoaded", "onSetWallpaper", "onDownloadWallpaper", "onPrevPage", "onNextPage"])),
      S(Ff, {
        wallpaper: i(A),
        loading: i(b),
        "load-failed": i(q),
        "working-ids": i(J),
        onClose: i(ye),
        onLoaded: i(Xe),
        onFailed: i(Je),
        onDownload: i(Qe),
        onSetWallpaper: i(xe)
      }, null, 8, ["wallpaper", "loading", "load-failed", "working-ids", "onClose", "onLoaded", "onFailed", "onDownload", "onSetWallpaper"])
    ]));
  }
}), $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rf
}, Symbol.toStringTag, { value: "Module" }));
export {
  jf as activate
};
