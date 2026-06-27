import * as pn from "vue";
import { inject as He, ref as U, shallowRef as hr, computed as D, watch as wt, onMounted as Lt, onUnmounted as xn, defineComponent as ae, h as nl, createVNode as L, Text as pr, Fragment as Ge, getCurrentInstance as vt, unref as o, readonly as mr, getCurrentScope as gr, onScopeDispose as wr, nextTick as al, isRef as ll, warn as vr, provide as _r, createElementBlock as z, openBlock as $, mergeProps as br, renderSlot as _t, createElementVNode as m, normalizeClass as Z, Transition as zn, withCtx as st, withDirectives as Yt, normalizeStyle as Zt, createTextVNode as oe, toDisplayString as N, vShow as Xt, shallowReactive as yr, createBlock as Se, createCommentVNode as we, resolveDynamicComponent as rl, withModifiers as Dt, isVNode as At, render as Jt, renderList as kn, withKeys as sl } from "vue";
const Df = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => Rf)
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
  const { domain: a, messages: l, args: r } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = a, i;
}
function Ur(e) {
  throw e;
}
const Te = " ", Vr = "\r", pe = `
`, Hr = "\u2028", Gr = "\u2029";
function Kr(e) {
  const t = e;
  let n = 0, a = 1, l = 1, r = 0;
  const s = (b) => t[b] === Vr && t[b + 1] === pe, i = (b) => t[b] === pe, u = (b) => t[b] === Gr, p = (b) => t[b] === Hr, v = (b) => s(b) || i(b) || u(b) || p(b), C = () => n, E = () => a, O = () => l, W = () => r, y = (b) => s(b) || u(b) || p(b) ? pe : t[b], h = () => y(n), d = () => y(n + r);
  function w() {
    return r = 0, v(n) && (a++, l = 0), s(n) && n++, n++, l++, t[n];
  }
  function _() {
    return s(n + r) && r++, r++, t[n + r];
  }
  function k() {
    n = 0, a = 1, l = 1, r = 0;
  }
  function P(b = 0) {
    r = b;
  }
  function A() {
    const b = n + r;
    for (; b !== n; )
      w();
    r = 0;
  }
  return {
    index: C,
    line: E,
    column: O,
    peekOffset: W,
    charAt: y,
    currentChar: h,
    currentPeek: d,
    next: w,
    peek: _,
    reset: k,
    resetPeek: P,
    skipToPeek: A
  };
}
const Ae = void 0, Br = ".", fa = "'", Yr = "tokenizer";
function Zr(e, t = {}) {
  const n = t.location !== !1, a = Kr(e), l = () => a.index(), r = () => xr(a.line(), a.column(), a.index()), s = r(), i = l(), u = {
    currentType: 13,
    offset: i,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, p = () => u, { onError: v } = t;
  function C(c, f, S, ...F) {
    const Q = p();
    if (f.column += S, f.offset += S, v) {
      const x = n ? Sn(Q.startLoc, f) : null, g = cn(c, x, {
        domain: Yr,
        args: F
      });
      v(g);
    }
  }
  function E(c, f, S) {
    c.endLoc = r(), c.currentType = f;
    const F = { type: f };
    return n && (F.loc = Sn(c.startLoc, c.endLoc)), S != null && (F.value = S), F;
  }
  const O = (c) => E(
    c,
    13
    /* TokenTypes.EOF */
  );
  function W(c, f) {
    return c.currentChar() === f ? (c.next(), f) : (C(K.EXPECTED_TOKEN, r(), 0, f), "");
  }
  function y(c) {
    let f = "";
    for (; c.currentPeek() === Te || c.currentPeek() === pe; )
      f += c.currentPeek(), c.peek();
    return f;
  }
  function h(c) {
    const f = y(c);
    return c.skipToPeek(), f;
  }
  function d(c) {
    if (c === Ae)
      return !1;
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f === 95;
  }
  function w(c) {
    if (c === Ae)
      return !1;
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function _(c, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    y(c);
    const F = d(c.currentPeek());
    return c.resetPeek(), F;
  }
  function k(c, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    y(c);
    const F = c.currentPeek() === "-" ? c.peek() : c.currentPeek(), Q = w(F);
    return c.resetPeek(), Q;
  }
  function P(c, f) {
    const { currentType: S } = f;
    if (S !== 2)
      return !1;
    y(c);
    const F = c.currentPeek() === fa;
    return c.resetPeek(), F;
  }
  function A(c, f) {
    const { currentType: S } = f;
    if (S !== 7)
      return !1;
    y(c);
    const F = c.currentPeek() === ".";
    return c.resetPeek(), F;
  }
  function b(c, f) {
    const { currentType: S } = f;
    if (S !== 8)
      return !1;
    y(c);
    const F = d(c.currentPeek());
    return c.resetPeek(), F;
  }
  function q(c, f) {
    const { currentType: S } = f;
    if (!(S === 7 || S === 11))
      return !1;
    y(c);
    const F = c.currentPeek() === ":";
    return c.resetPeek(), F;
  }
  function J(c, f) {
    const { currentType: S } = f;
    if (S !== 9)
      return !1;
    const F = () => {
      const x = c.currentPeek();
      return x === "{" ? d(c.peek()) : x === "@" || x === "|" || x === ":" || x === "." || x === Te || !x ? !1 : x === pe ? (c.peek(), F()) : ue(c, !1);
    }, Q = F();
    return c.resetPeek(), Q;
  }
  function ce(c) {
    y(c);
    const f = c.currentPeek() === "|";
    return c.resetPeek(), f;
  }
  function ue(c, f = !0) {
    const S = (Q = !1, x = "") => {
      const g = c.currentPeek();
      return g === "{" || g === "@" || !g ? Q : g === "|" ? !(x === Te || x === pe) : g === Te ? (c.peek(), S(!0, Te)) : g === pe ? (c.peek(), S(!0, pe)) : !0;
    }, F = S();
    return f && c.resetPeek(), F;
  }
  function ee(c, f) {
    const S = c.currentChar();
    return S === Ae ? Ae : f(S) ? (c.next(), S) : null;
  }
  function Re(c) {
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36;
  }
  function Ye(c) {
    return ee(c, Re);
  }
  function Ze(c) {
    const f = c.charCodeAt(0);
    return f >= 97 && f <= 122 || // a-z
    f >= 65 && f <= 90 || // A-Z
    f >= 48 && f <= 57 || // 0-9
    f === 95 || // _
    f === 36 || // $
    f === 45;
  }
  function ye(c) {
    return ee(c, Ze);
  }
  function Xe(c) {
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57;
  }
  function Je(c) {
    return ee(c, Xe);
  }
  function ve(c) {
    const f = c.charCodeAt(0);
    return f >= 48 && f <= 57 || // 0-9
    f >= 65 && f <= 70 || // A-F
    f >= 97 && f <= 102;
  }
  function $e(c) {
    return ee(c, ve);
  }
  function De(c) {
    let f = "", S = "";
    for (; f = Je(c); )
      S += f;
    return S;
  }
  function je(c) {
    let f = "";
    for (; ; ) {
      const S = c.currentChar();
      if (S === "{" || S === "}" || S === "@" || S === "|" || !S)
        break;
      if (S === Te || S === pe)
        if (ue(c))
          f += S, c.next();
        else {
          if (ce(c))
            break;
          f += S, c.next();
        }
      else
        f += S, c.next();
    }
    return f;
  }
  function qe(c) {
    h(c);
    let f = "", S = "";
    for (; f = ye(c); )
      S += f;
    const F = c.currentChar();
    if (F && F !== "}" && F !== Ae && F !== Te && F !== pe && F !== "　") {
      const Q = at(c);
      return C(K.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, S + Q), S + Q;
    }
    return c.currentChar() === Ae && C(K.UNTERMINATED_CLOSING_BRACE, r(), 0), S;
  }
  function xe(c) {
    h(c);
    let f = "";
    return c.currentChar() === "-" ? (c.next(), f += `-${De(c)}`) : f += De(c), c.currentChar() === Ae && C(K.UNTERMINATED_CLOSING_BRACE, r(), 0), f;
  }
  function Qe(c) {
    return c !== fa && c !== pe;
  }
  function et(c) {
    h(c), W(c, "'");
    let f = "", S = "";
    for (; f = ee(c, Qe); )
      f === "\\" ? S += tt(c) : S += f;
    const F = c.currentChar();
    return F === pe || F === Ae ? (C(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), F === pe && (c.next(), W(c, "'")), S) : (W(c, "'"), S);
  }
  function tt(c) {
    const f = c.currentChar();
    switch (f) {
      case "\\":
      case "'":
        return c.next(), `\\${f}`;
      case "u":
        return ze(c, f, 4);
      case "U":
        return ze(c, f, 6);
      default:
        return C(K.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, f), "";
    }
  }
  function ze(c, f, S) {
    W(c, f);
    let F = "";
    for (let Q = 0; Q < S; Q++) {
      const x = $e(c);
      if (!x) {
        C(K.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${f}${F}${c.currentChar()}`);
        break;
      }
      F += x;
    }
    return `\\${f}${F}`;
  }
  function nt(c) {
    return c !== "{" && c !== "}" && c !== Te && c !== pe;
  }
  function at(c) {
    h(c);
    let f = "", S = "";
    for (; f = ee(c, nt); )
      S += f;
    return S;
  }
  function j(c) {
    let f = "", S = "";
    for (; f = Ye(c); )
      S += f;
    return S;
  }
  function V(c) {
    const f = (S) => {
      const F = c.currentChar();
      return F === "{" || F === "@" || F === "|" || F === "(" || F === ")" || !F || F === Te ? S : (S += F, c.next(), f(S));
    };
    return f("");
  }
  function le(c) {
    h(c);
    const f = W(
      c,
      "|"
      /* TokenChars.Pipe */
    );
    return h(c), f;
  }
  function ge(c, f) {
    let S = null;
    switch (c.currentChar()) {
      case "{":
        return f.braceNest >= 1 && C(K.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), c.next(), S = E(
          f,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), h(c), f.braceNest++, S;
      case "}":
        return f.braceNest > 0 && f.currentType === 2 && C(K.EMPTY_PLACEHOLDER, r(), 0), c.next(), S = E(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), f.braceNest--, f.braceNest > 0 && h(c), f.inLinked && f.braceNest === 0 && (f.inLinked = !1), S;
      case "@":
        return f.braceNest > 0 && C(K.UNTERMINATED_CLOSING_BRACE, r(), 0), S = Ue(c, f) || O(f), f.braceNest = 0, S;
      default: {
        let Q = !0, x = !0, g = !0;
        if (ce(c))
          return f.braceNest > 0 && C(K.UNTERMINATED_CLOSING_BRACE, r(), 0), S = E(f, 1, le(c)), f.braceNest = 0, f.inLinked = !1, S;
        if (f.braceNest > 0 && (f.currentType === 4 || f.currentType === 5 || f.currentType === 6))
          return C(K.UNTERMINATED_CLOSING_BRACE, r(), 0), f.braceNest = 0, lt(c, f);
        if (Q = _(c, f))
          return S = E(f, 4, qe(c)), h(c), S;
        if (x = k(c, f))
          return S = E(f, 5, xe(c)), h(c), S;
        if (g = P(c, f))
          return S = E(f, 6, et(c)), h(c), S;
        if (!Q && !x && !g)
          return S = E(f, 12, at(c)), C(K.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, S.value), h(c), S;
        break;
      }
    }
    return S;
  }
  function Ue(c, f) {
    const { currentType: S } = f;
    let F = null;
    const Q = c.currentChar();
    switch ((S === 7 || S === 8 || S === 11 || S === 9) && (Q === pe || Q === Te) && C(K.INVALID_LINKED_FORMAT, r(), 0), Q) {
      case "@":
        return c.next(), F = E(
          f,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), f.inLinked = !0, F;
      case ".":
        return h(c), c.next(), E(
          f,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return h(c), c.next(), E(
          f,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ce(c) ? (F = E(f, 1, le(c)), f.braceNest = 0, f.inLinked = !1, F) : A(c, f) || q(c, f) ? (h(c), Ue(c, f)) : b(c, f) ? (h(c), E(f, 11, j(c))) : J(c, f) ? (h(c), Q === "{" ? ge(c, f) || F : E(f, 10, V(c))) : (S === 7 && C(K.INVALID_LINKED_FORMAT, r(), 0), f.braceNest = 0, f.inLinked = !1, lt(c, f));
    }
  }
  function lt(c, f) {
    let S = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (f.braceNest > 0)
      return ge(c, f) || O(f);
    if (f.inLinked)
      return Ue(c, f) || O(f);
    switch (c.currentChar()) {
      case "{":
        return ge(c, f) || O(f);
      case "}":
        return C(K.UNBALANCED_CLOSING_BRACE, r(), 0), c.next(), E(
          f,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ue(c, f) || O(f);
      default: {
        if (ce(c))
          return S = E(f, 1, le(c)), f.braceNest = 0, f.inLinked = !1, S;
        if (ue(c))
          return E(f, 0, je(c));
        break;
      }
    }
    return S;
  }
  function ht() {
    const { currentType: c, offset: f, startLoc: S, endLoc: F } = u;
    return u.lastType = c, u.lastOffset = f, u.lastStartLoc = S, u.lastEndLoc = F, u.offset = l(), u.startLoc = r(), a.currentChar() === Ae ? E(
      u,
      13
      /* TokenTypes.EOF */
    ) : lt(a, u);
  }
  return {
    nextToken: ht,
    currentOffset: l,
    currentPosition: r,
    context: p
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
  function a(d, w, _, k, ...P) {
    const A = d.currentPosition();
    if (A.offset += k, A.column += k, n) {
      const b = t ? Sn(_, A) : null, q = cn(w, b, {
        domain: Xr,
        args: P
      });
      n(q);
    }
  }
  function l(d, w, _) {
    const k = { type: d };
    return t && (k.start = w, k.end = w, k.loc = { start: _, end: _ }), k;
  }
  function r(d, w, _, k) {
    t && (d.end = w, d.loc && (d.loc.end = _));
  }
  function s(d, w) {
    const _ = d.context(), k = l(3, _.offset, _.startLoc);
    return k.value = w, r(k, d.currentOffset(), d.currentPosition()), k;
  }
  function i(d, w) {
    const _ = d.context(), { lastOffset: k, lastStartLoc: P } = _, A = l(5, k, P);
    return A.index = parseInt(w, 10), d.nextToken(), r(A, d.currentOffset(), d.currentPosition()), A;
  }
  function u(d, w) {
    const _ = d.context(), { lastOffset: k, lastStartLoc: P } = _, A = l(4, k, P);
    return A.key = w, d.nextToken(), r(A, d.currentOffset(), d.currentPosition()), A;
  }
  function p(d, w) {
    const _ = d.context(), { lastOffset: k, lastStartLoc: P } = _, A = l(9, k, P);
    return A.value = w.replace(Jr, qr), d.nextToken(), r(A, d.currentOffset(), d.currentPosition()), A;
  }
  function v(d) {
    const w = d.nextToken(), _ = d.context(), { lastOffset: k, lastStartLoc: P } = _, A = l(8, k, P);
    return w.type !== 11 ? (a(d, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), A.value = "", r(A, k, P), {
      nextConsumeToken: w,
      node: A
    }) : (w.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ie(w)), A.value = w.value || "", r(A, d.currentOffset(), d.currentPosition()), {
      node: A
    });
  }
  function C(d, w) {
    const _ = d.context(), k = l(7, _.offset, _.startLoc);
    return k.value = w, r(k, d.currentOffset(), d.currentPosition()), k;
  }
  function E(d) {
    const w = d.context(), _ = l(6, w.offset, w.startLoc);
    let k = d.nextToken();
    if (k.type === 8) {
      const P = v(d);
      _.modifier = P.node, k = P.nextConsumeToken || d.nextToken();
    }
    switch (k.type !== 9 && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(k)), k = d.nextToken(), k.type === 2 && (k = d.nextToken()), k.type) {
      case 10:
        k.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(k)), _.key = C(d, k.value || "");
        break;
      case 4:
        k.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(k)), _.key = u(d, k.value || "");
        break;
      case 5:
        k.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(k)), _.key = i(d, k.value || "");
        break;
      case 6:
        k.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(k)), _.key = p(d, k.value || "");
        break;
      default: {
        a(d, K.UNEXPECTED_EMPTY_LINKED_KEY, w.lastStartLoc, 0);
        const P = d.context(), A = l(7, P.offset, P.startLoc);
        return A.value = "", r(A, P.offset, P.startLoc), _.key = A, r(_, P.offset, P.startLoc), {
          nextConsumeToken: k,
          node: _
        };
      }
    }
    return r(_, d.currentOffset(), d.currentPosition()), {
      node: _
    };
  }
  function O(d) {
    const w = d.context(), _ = w.currentType === 1 ? d.currentOffset() : w.offset, k = w.currentType === 1 ? w.endLoc : w.startLoc, P = l(2, _, k);
    P.items = [];
    let A = null;
    do {
      const J = A || d.nextToken();
      switch (A = null, J.type) {
        case 0:
          J.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(J)), P.items.push(s(d, J.value || ""));
          break;
        case 5:
          J.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(J)), P.items.push(i(d, J.value || ""));
          break;
        case 4:
          J.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(J)), P.items.push(u(d, J.value || ""));
          break;
        case 6:
          J.value == null && a(d, K.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, Ie(J)), P.items.push(p(d, J.value || ""));
          break;
        case 7: {
          const ce = E(d);
          P.items.push(ce.node), A = ce.nextConsumeToken || null;
          break;
        }
      }
    } while (w.currentType !== 13 && w.currentType !== 1);
    const b = w.currentType === 1 ? w.lastOffset : d.currentOffset(), q = w.currentType === 1 ? w.lastEndLoc : d.currentPosition();
    return r(P, b, q), P;
  }
  function W(d, w, _, k) {
    const P = d.context();
    let A = k.items.length === 0;
    const b = l(1, w, _);
    b.cases = [], b.cases.push(k);
    do {
      const q = O(d);
      A || (A = q.items.length === 0), b.cases.push(q);
    } while (P.currentType !== 13);
    return A && a(d, K.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), r(b, d.currentOffset(), d.currentPosition()), b;
  }
  function y(d) {
    const w = d.context(), { offset: _, startLoc: k } = w, P = O(d);
    return w.currentType === 13 ? P : W(d, _, k, P);
  }
  function h(d) {
    const w = Zr(d, de({}, e)), _ = w.context(), k = l(0, _.offset, _.startLoc);
    return t && k.loc && (k.loc.source = d), k.body = y(w), e.onCacheKey && (k.cacheKey = e.onCacheKey(d)), _.currentType !== 13 && a(w, K.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, d[_.offset] || ""), r(k, w.currentOffset(), w.currentPosition()), k;
  }
  return { parse: h };
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
  const i = () => s;
  function u(y, h) {
    s.code += y;
  }
  function p(y, h = !0) {
    const d = h ? a : "";
    u(l ? d + "  ".repeat(y) : d);
  }
  function v(y = !0) {
    const h = ++s.indentLevel;
    y && p(h);
  }
  function C(y = !0) {
    const h = --s.indentLevel;
    y && p(h);
  }
  function E() {
    p(s.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: v,
    deindent: C,
    newline: E,
    helper: (y) => `_${y}`,
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
`, r = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = as(e, {
    filename: a,
    breakLineCode: l,
    needIndent: r
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(r), s.length > 0 && (i.push(`const { ${Vn(s.map((v) => `${v}: _${v}`), ", ")} } = ctx`), i.newline()), i.push("return "), bt(i, e), i.deindent(r), i.push("}"), delete e.helpers;
  const { code: u, map: p } = i.context();
  return {
    ast: e,
    code: u,
    map: p ? p.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function cs(e, t = {}) {
  const n = de({}, t), a = !!n.jit, l = !!n.minify, r = n.optimize == null ? !0 : n.optimize, i = Qr(n).parse(e);
  return a ? (r && ns(i), l && gt(i), { ast: i, code: "" }) : (ts(i, n), is(i, n));
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
    return e.plural(r.reduce((s, i) => [
      ...s,
      ma(e, i)
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
    }), i = wn(r);
    return s ? i : Ut[a] = i;
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
    const i = se(t) || !H(t) ? t : t.default ? t.default : null;
    s = M(i) ? [i] : i, se(s) && wa(r, s, !1), l.__localeChainCache.set(a, r);
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
  let n = -1, a = 0, l = 0, r, s, i, u, p, v, C;
  const E = [];
  E[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, E[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, E[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    E[
      0
      /* Actions.APPEND */
    ](), l++;
  }, E[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (l > 0)
      l--, a = 4, E[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (l = 0, s === void 0 || (s = Ns(s), s === !1))
        return !1;
      E[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function O() {
    const W = e[n + 1];
    if (a === 5 && W === "'" || a === 6 && W === '"')
      return n++, i = "\\" + W, E[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, r = e[n], !(r === "\\" && O())) {
      if (u = Is(r), C = Be[a], p = C[u] || C.l || 8, p === 8 || (a = p[0], p[1] !== void 0 && (v = E[p[1]], v && (i = r, v() === !1))))
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
    const i = l[s];
    if (i === void 0 || ne(l))
      return null;
    l = i, r++;
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
  const t = ne(e.onWarn) ? e.onWarn : Or, n = M(e.version) ? e.version : Fs, a = M(e.locale) || ne(e.locale) ? e.locale : tn, l = ne(a) ? tn : a, r = se(e.fallbackLocale) || H(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, s = H(e.messages) ? e.messages : _n(l), i = H(e.datetimeFormats) ? e.datetimeFormats : _n(l), u = H(e.numberFormats) ? e.numberFormats : _n(l), p = de(X(), e.modifiers, Ms()), v = e.pluralRules || X(), C = ne(e.missing) ? e.missing : null, E = re(e.missingWarn) || en(e.missingWarn) ? e.missingWarn : !0, O = re(e.fallbackWarn) || en(e.fallbackWarn) ? e.fallbackWarn : !0, W = !!e.fallbackFormat, y = !!e.unresolving, h = ne(e.postTranslation) ? e.postTranslation : null, d = H(e.processor) ? e.processor : null, w = re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, k = ne(e.messageCompiler) ? e.messageCompiler : Cl, P = ne(e.messageResolver) ? e.messageResolver : Sl || Os, A = ne(e.localeFallbacker) ? e.localeFallbacker : Ll || ks, b = G(e.fallbackContext) ? e.fallbackContext : void 0, q = e, J = G(q.__datetimeFormatters) ? q.__datetimeFormatters : /* @__PURE__ */ new Map(), ce = G(q.__numberFormatters) ? q.__numberFormatters : /* @__PURE__ */ new Map(), ue = G(q.__meta) ? q.__meta : {};
  ka++;
  const ee = {
    version: n,
    cid: ka,
    locale: a,
    fallbackLocale: r,
    messages: s,
    modifiers: p,
    pluralRules: v,
    missing: C,
    missingWarn: E,
    fallbackWarn: O,
    fallbackFormat: W,
    unresolving: y,
    postTranslation: h,
    processor: d,
    warnHtmlMessage: w,
    escapeParameter: _,
    messageCompiler: k,
    messageResolver: P,
    localeFallbacker: A,
    fallbackContext: b,
    onWarn: t,
    __meta: ue
  };
  return ee.datetimeFormats = i, ee.numberFormats = u, ee.__datetimeFormatters = J, ee.__numberFormatters = ce, ee;
}
const _n = (e) => ({ [e]: X() });
function Bn(e, t, n, a, l) {
  const { missing: r, onWarn: s } = e;
  if (r !== null) {
    const i = r(e, n, t, l);
    return M(i) ? i : t;
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
  const { datetimeFormats: n, unresolving: a, fallbackLocale: l, onWarn: r, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [u, p, v, C] = En(...t), E = re(v.missingWarn) ? v.missingWarn : e.missingWarn;
  re(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn;
  const O = !!v.part, W = Kn(e, v), y = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    W
  );
  if (!M(u) || u === "")
    return new Intl.DateTimeFormat(W, C).format(p);
  let h = {}, d, w = null;
  const _ = "datetime format";
  for (let A = 0; A < y.length && (d = y[A], h = n[d] || {}, w = h[u], !H(w)); A++)
    Bn(e, u, d, E, _);
  if (!H(w) || !M(d))
    return a ? un : u;
  let k = `${d}__${u}`;
  on(C) || (k = `${k}__${JSON.stringify(C)}`);
  let P = i.get(k);
  return P || (P = new Intl.DateTimeFormat(d, de({}, w, C)), i.set(k, P)), O ? P.formatToParts(p) : P.format(p);
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
  let s = X(), i;
  if (M(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw Me(Fe.INVALID_ISO_DATE_ARGUMENT);
    const p = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(p);
    try {
      i.toISOString();
    } catch {
      throw Me(Fe.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Mr(t)) {
    if (isNaN(t.getTime()))
      throw Me(Fe.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (ie(t))
    i = t;
  else
    throw Me(Fe.INVALID_ARGUMENT);
  return M(n) ? r.key = n : H(n) && Object.keys(n).forEach((u) => {
    Tl.includes(u) ? s[u] = n[u] : r[u] = n[u];
  }), M(a) ? r.locale = a : H(a) && (s = a), H(l) && (s = l), [r.key || "", i, r, s];
}
function Sa(e, t, n) {
  const a = e;
  for (const l in n) {
    const r = `${t}__${l}`;
    a.__datetimeFormatters.has(r) && a.__datetimeFormatters.delete(r);
  }
}
function La(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: l, onWarn: r, localeFallbacker: s } = e, { __numberFormatters: i } = e, [u, p, v, C] = Tn(...t), E = re(v.missingWarn) ? v.missingWarn : e.missingWarn;
  re(v.fallbackWarn) ? v.fallbackWarn : e.fallbackWarn;
  const O = !!v.part, W = Kn(e, v), y = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    W
  );
  if (!M(u) || u === "")
    return new Intl.NumberFormat(W, C).format(p);
  let h = {}, d, w = null;
  const _ = "number format";
  for (let A = 0; A < y.length && (d = y[A], h = n[d] || {}, w = h[u], !H(w)); A++)
    Bn(e, u, d, E, _);
  if (!H(w) || !M(d))
    return a ? un : u;
  let k = `${d}__${u}`;
  on(C) || (k = `${k}__${JSON.stringify(C)}`);
  let P = i.get(k);
  return P || (P = new Intl.NumberFormat(d, de({}, w, C)), i.set(k, P)), O ? P.formatToParts(p) : P.format(p);
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
  const i = t;
  return M(n) ? r.key = n : H(n) && Object.keys(n).forEach((u) => {
    Il.includes(u) ? s[u] = n[u] : r[u] = n[u];
  }), M(a) ? r.locale = a : H(a) && (s = a), H(l) && (s = l), [r.key || "", i, r, s];
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
  const t = e.locale, n = Bs(e), a = G(e.pluralRules) && M(t) && ne(e.pluralRules[t]) ? e.pluralRules[t] : Ta, l = G(e.pluralRules) && M(t) && ne(e.pluralRules[t]) ? Ta : void 0, r = (d) => d[a(n, d.length, l)], s = e.list || [], i = (d) => s[d], u = e.named || X();
  ie(e.pluralIndex) && Ys(n, u);
  const p = (d) => u[d];
  function v(d, w) {
    const _ = ne(e.messages) ? e.messages(d, !!w) : G(e.messages) ? e.messages[d] : !1;
    return _ || (e.parent ? e.parent.message(d) : Vs);
  }
  const C = (d) => e.modifiers ? e.modifiers[d] : Us, E = H(e.processor) && ne(e.processor.normalize) ? e.processor.normalize : Gs, O = H(e.processor) && ne(e.processor.interpolate) ? e.processor.interpolate : Ks, W = H(e.processor) && M(e.processor.type) ? e.processor.type : Hs, h = {
    list: i,
    named: p,
    plural: r,
    linked: (d, ...w) => {
      const [_, k] = w;
      let P = "text", A = "";
      w.length === 1 ? G(_) ? (A = _.modifier || A, P = _.type || P) : M(_) && (A = _ || A) : w.length === 2 && (M(_) && (A = _ || A), M(k) && (P = k || P));
      const b = v(d, !0)(h), q = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && se(b) && A ? b[0] : b
      );
      return A ? C(A)(q, P) : q;
    },
    message: v,
    type: W,
    interpolate: O,
    normalize: E,
    values: de(X(), s, u)
  };
  return h;
}
const Ia = () => "", We = (e) => ne(e);
function Na(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: l, messageCompiler: r, fallbackLocale: s, messages: i } = e, [u, p] = In(...t), v = re(p.missingWarn) ? p.missingWarn : e.missingWarn, C = re(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, E = re(p.escapeParameter) ? p.escapeParameter : e.escapeParameter, O = !!p.resolvedMessage, W = M(p.default) || re(p.default) ? re(p.default) ? r ? u : () => u : p.default : n ? r ? u : () => u : null, y = n || W != null && (M(W) || ne(W)), h = Kn(e, p);
  E && Xs(p);
  let [d, w, _] = O ? [
    u,
    h,
    i[h] || X()
  ] : Nl(e, u, h, s, C, v), k = d, P = u;
  if (!O && !(M(k) || Ne(k) || We(k)) && y && (k = W, P = k), !O && (!(M(k) || Ne(k) || We(k)) || !M(w)))
    return l ? un : u;
  let A = !1;
  const b = () => {
    A = !0;
  }, q = We(k) ? k : Pl(e, u, w, k, P, b);
  if (A)
    return k;
  const J = Qs(e, w, _, p), ce = Zs(J), ue = Js(e, q, ce);
  let ee = a ? a(ue, u) : ue;
  return E && M(ee) && (ee = Rr(ee)), ee;
}
function Xs(e) {
  se(e.list) ? e.list = e.list.map((t) => M(t) ? ua(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = ua(e.named[t]));
  });
}
function Nl(e, t, n, a, l, r) {
  const { messages: s, onWarn: i, messageResolver: u, localeFallbacker: p } = e, v = p(e, a, n);
  let C = X(), E, O = null;
  const W = "translate";
  for (let y = 0; y < v.length && (E = v[y], C = s[E] || X(), (O = u(C, t)) === null && (O = C[t]), !(M(O) || Ne(O) || We(O))); y++)
    if (!zs(E, v)) {
      const h = Bn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        E,
        r,
        W
      );
      h !== t && (O = h);
    }
  return [O, E, C];
}
function Pl(e, t, n, a, l, r) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (We(a)) {
    const p = a;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (s == null) {
    const p = () => a;
    return p.locale = n, p.key = t, p;
  }
  const u = s(a, qs(e, n, l, a, i, r));
  return u.locale = n, u.key = t, u.source = a, u;
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
  const { modifiers: l, pluralRules: r, messageResolver: s, fallbackLocale: i, fallbackWarn: u, missingWarn: p, fallbackContext: v } = e, E = {
    locale: t,
    modifiers: l,
    pluralRules: r,
    messages: (O, W) => {
      let y = s(n, O);
      if (y == null && (v || W)) {
        const [, , h] = Nl(
          v || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          O,
          t,
          i,
          u,
          p
        );
        y = s(h, O);
      }
      if (M(y) || Ne(y)) {
        let h = !1;
        const w = Pl(e, O, t, y, O, () => {
          h = !0;
        });
        return h ? Ia : w;
      } else return We(y) ? y : Ia;
    }
  };
  return e.processor && (E.processor = e.processor), a.list && (E.list = a.list), a.named && (E.named = a.named), ie(a.plural) && (E.pluralIndex = a.plural), E;
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
  if (se(a) && a.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: p } = i;
      u ? (s[u] = s[u] || X(), Gt(p, s[u])) : Gt(p, s);
    } else
      M(i) && Gt(JSON.parse(i), s);
  }), l == null && r)
    for (const i in s)
      Le(s, i) && Wt(s[i]);
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
  return L(pr, null, e, 0);
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
  const i = r(
    // prettier-ignore
    t && s ? t.locale.value : M(e.locale) ? e.locale : tn
  ), u = r(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : M(e.fallbackLocale) || se(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), p = r(Al(i.value, e)), v = r(H(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), C = r(H(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let E = t ? t.missingWarn : re(e.missingWarn) || en(e.missingWarn) ? e.missingWarn : !0, O = t ? t.fallbackWarn : re(e.fallbackWarn) || en(e.fallbackWarn) ? e.fallbackWarn : !0, W = t ? t.fallbackRoot : re(e.fallbackRoot) ? e.fallbackRoot : !0, y = !!e.fallbackFormat, h = ne(e.missing) ? e.missing : null, d = ne(e.missing) ? Fa(e.missing) : null, w = ne(e.postTranslation) ? e.postTranslation : null, _ = t ? t.warnHtmlMessage : re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const P = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, b;
  b = (() => {
    a && ya(null);
    const g = {
      version: eo,
      locale: i.value,
      fallbackLocale: u.value,
      messages: p.value,
      modifiers: P,
      pluralRules: A,
      missing: d === null ? void 0 : d,
      missingWarn: E,
      fallbackWarn: O,
      fallbackFormat: y,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: _,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    g.datetimeFormats = v.value, g.numberFormats = C.value, g.__datetimeFormatters = H(b) ? b.__datetimeFormatters : void 0, g.__numberFormatters = H(b) ? b.__numberFormatters : void 0;
    const I = js(g);
    return a && ya(I), I;
  })(), It(b, i.value, u.value);
  function J() {
    return [
      i.value,
      u.value,
      p.value,
      v.value,
      C.value
    ];
  }
  const ce = D({
    get: () => i.value,
    set: (g) => {
      b.locale = g, i.value = g;
    }
  }), ue = D({
    get: () => u.value,
    set: (g) => {
      b.fallbackLocale = g, u.value = g, It(b, i.value, g);
    }
  }), ee = D(() => p.value), Re = /* @__PURE__ */ D(() => v.value), Ye = /* @__PURE__ */ D(() => C.value);
  function Ze() {
    return ne(w) ? w : null;
  }
  function ye(g) {
    w = g, b.postTranslation = g;
  }
  function Xe() {
    return h;
  }
  function Je(g) {
    g !== null && (d = Fa(g)), h = g, b.missing = d;
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
      const B = M(I) ? I : i.value, te = ge(B), Oe = b.messageResolver(te, g);
      return Ne(Oe) || We(Oe) || M(Oe);
    }, () => [g], "translate exists", (B) => Reflect.apply(B.te, B, [g, I]), ro, (B) => re(B));
  }
  function V(g) {
    let I = null;
    const B = kl(b, u.value, i.value);
    for (let te = 0; te < B.length; te++) {
      const Oe = p.value[B[te]] || {}, pt = b.messageResolver(Oe, g);
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
    return p.value[g] || {};
  }
  function Ue(g, I) {
    if (l) {
      const B = { [g]: I };
      for (const te in B)
        Le(B, te) && Wt(B[te]);
      I = B[g];
    }
    p.value[g] = I, b.messages = p.value;
  }
  function lt(g, I) {
    p.value[g] = p.value[g] || {};
    const B = { [g]: I };
    if (l)
      for (const te in B)
        Le(B, te) && Wt(B[te]);
    I = B[g], Gt(I, p.value[g]), b.messages = p.value;
  }
  function ht(g) {
    return v.value[g] || {};
  }
  function c(g, I) {
    v.value[g] = I, b.datetimeFormats = v.value, Sa(b, g, I);
  }
  function f(g, I) {
    v.value[g] = de(v.value[g] || {}, I), b.datetimeFormats = v.value, Sa(b, g, I);
  }
  function S(g) {
    return C.value[g] || {};
  }
  function F(g, I) {
    C.value[g] = I, b.numberFormats = C.value, Ea(b, g, I);
  }
  function Q(g, I) {
    C.value[g] = de(C.value[g] || {}, I), b.numberFormats = C.value, Ea(b, g, I);
  }
  Aa++, t && ia && (wt(t.locale, (g) => {
    s && (i.value = g, b.locale = g, It(b, i.value, u.value));
  }), wt(t.fallbackLocale, (g) => {
    s && (u.value = g, b.fallbackLocale = g, It(b, i.value, u.value));
  }));
  const x = {
    id: Aa,
    locale: ce,
    fallbackLocale: ue,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(g) {
      s = g, g && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, It(b, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
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
      return E;
    },
    set missingWarn(g) {
      E = g, b.missingWarn = E;
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
      return y;
    },
    set fallbackFormat(g) {
      y = g, b.fallbackFormat = y;
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(g) {
      _ = g, b.warnHtmlMessage = g;
    },
    get escapeParameter() {
      return k;
    },
    set escapeParameter(g) {
      k = g, b.escapeParameter = g;
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
  return x.datetimeFormats = Re, x.numberFormats = Ye, x.rt = De, x.te = j, x.tm = le, x.d = je, x.n = qe, x.getDateTimeFormat = ht, x.setDateTimeFormat = c, x.mergeDateTimeFormat = f, x.getNumberFormat = S, x.setNumberFormat = F, x.mergeNumberFormat = Q, x[Ol] = n, x[Nn] = tt, x[Pn] = nt, x[On] = ze, x;
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
    let i = X();
    e.locale && (s.locale = e.locale), M(e.format) ? s.key = e.format : G(e.format) && (M(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((E, O) => n.includes(O) ? de(X(), E, { [O]: e.format[O] }) : E, X()));
    const u = a(e.value, s, i);
    let p = [s.key];
    se(u) ? p = u.map((E, O) => {
      const W = l[E.type], y = W ? W({ [E.type]: E.value, index: O, parts: u }) : [E.value];
      return io(y) && (y[0].key = `${E.type}-${O}`), y;
    }) : M(u) && (p = [u]);
    const v = de(X(), r), C = M(e.tag) || G(e.tag) ? e.tag : Ml();
    return nl(C, v, p);
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
    let u = po(n, t, e.__useComponent);
    return u == null && (u = a), u;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const u = de({}, e);
    "__i18n" in l && (u.__i18n = l.__i18n), a && (u.__root = a), i = so(u), s.__composerExtend && (i[An] = s.__composerExtend(i)), go(s, t, i), s.__setInstance(t, i);
  }
  return i;
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
      const i = s.__getInstance(r);
      i != null && (a = i.__composer, n && a && !a[Ol] && (a = null));
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
  return D(() => o(t) || Kt);
}, Zn = (e, t) => {
  const n = vo(t);
  return {
    namespace: n,
    b: (y = "") => rt(n.value, e, y, "", ""),
    e: (y) => y ? rt(n.value, e, "", y, "") : "",
    m: (y) => y ? rt(n.value, e, "", "", y) : "",
    be: (y, h) => y && h ? rt(n.value, e, y, h, "") : "",
    em: (y, h) => y && h ? rt(n.value, e, "", y, h) : "",
    bm: (y, h) => y && h ? rt(n.value, e, y, "", h) : "",
    bem: (y, h, d) => y && h && d ? rt(n.value, e, y, h, d) : "",
    is: (y, ...h) => {
      const d = h.length >= 1 ? h[0] : !0;
      return y && d ? `${wo}${y}` : "";
    },
    cssVar: (y) => {
      const h = {};
      for (const d in y)
        y[d] && (h[`--${n.value}-${d}`] = y[d]);
      return h;
    },
    cssVarName: (y) => `--${n.value}-${y}`,
    cssVarBlock: (y) => {
      const h = {};
      for (const d in y)
        y[d] && (h[`--${n.value}-${e}-${d}`] = y[d]);
      return h;
    },
    cssVarBlockName: (y) => `--${n.value}-${e}-${y}`
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
  return typeof e == "function" ? e() : o(e);
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
  function i() {
    l.value = !1, s();
  }
  function u(...p) {
    s(), l.value = !0, r = setTimeout(() => {
      l.value = !1, r = null, e(...p);
    }, ea(t));
  }
  return a && (l.value = !0, ft && u()), ta(i), {
    isPending: mr(l),
    start: u,
    stop: i
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
  }, i = (v, C, E, O) => (v.addEventListener(C, E, O), () => v.removeEventListener(C, E, O)), u = wt(() => [Kl(t), ea(l)], ([v, C]) => {
    s(), v && r.push(...n.flatMap((E) => a.map((O) => i(v, E, O, C))));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), s();
  };
  return ta(p), p;
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
  const i = Vi(() => l && "ResizeObserver" in l), u = () => {
    s && (s.disconnect(), s = void 0);
  }, p = wt(() => Kl(e), (C) => {
    u(), i.value && l && C && (s = new ResizeObserver(t), s.observe(C, r));
  }, { immediate: !0, flush: "post" }), v = () => {
    u(), p();
  };
  return ta(v), {
    isSupported: i,
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
    const s = o(n);
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
const tc = (e) => (t, n) => nc(t, n, o(e)), nc = (e, t, n) => Ri(n, e, e).replace(/\{(\w+)\}/g, (a, l) => {
  var r;
  return `${(r = t?.[l]) != null ? r : `{${l}}`}`;
}), ac = (e) => {
  const t = D(() => o(e).name), n = ll(e) ? e : U(e);
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
  const { values: n, required: a, default: l, type: r, validator: s } = e, u = {
    type: r,
    required: !!a,
    validator: n || s ? (p) => {
      let v = !1, C = [];
      if (n && (C = Array.from(n), Ma(e, "default") && C.push(l), v || (v = C.includes(p))), s && (v || (v = s(p))), !v && C.length > 0) {
        const E = [...new Set(C)].map((O) => JSON.stringify(O)).join(", ");
        vr(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${E}], got value ${JSON.stringify(p)}.`);
      }
      return v;
    } : void 0,
    [ql]: !0
  };
  return Ma(e, "default") && (u.default = l), u;
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
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Kt;
  })), l = lc(D(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), r = Qi(D(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Zl;
  })), s = D(() => {
    var i;
    return o(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return nr(D(() => o(n) || {})), {
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
  const i = D(() => {
    const u = o(e);
    return r?.value ? dc(r.value, u) : u;
  });
  return s(Rl, i), s(Jl, D(() => i.value.locale)), s($l, D(() => i.value.namespace)), s(Xl, D(() => i.value.zIndex)), s(ic, {
    size: D(() => i.value.size || "")
  }), s(cc, D(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !nn.value) && (nn.value = i.value), i;
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
      class: o(n).b(),
      style: o(a)
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
      var s, i, u, p, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: Mn(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Mn((p = (u = n.offset) == null ? void 0 : u[1]) != null ? p : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: l
    }), (s, i) => ($(), z("div", {
      class: Z(o(a).b())
    }, [
      _t(s.$slots, "default"),
      L(zn, {
        name: `${o(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: st(() => [
          Yt(m("sup", {
            class: Z([
              o(a).e("content"),
              o(a).em("content", s.type),
              o(a).is("fixed", !!s.$slots.default),
              o(a).is("dot", s.isDot),
              o(a).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Zt(o(r))
          }, [
            _t(s.$slots, "content", { value: o(l) }, () => [
              oe(N(o(l)), 1)
            ])
          ], 6), [
            [Xt, !s.hidden && (o(l) || s.isDot || s.$slots.content)]
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
    const n = e, { Close: a } = Ec, { ns: l, zIndex: r } = tr("message"), { currentZIndex: s, nextZIndex: i } = r, u = U(), p = U(!1), v = U(0);
    let C;
    const E = D(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), O = D(() => {
      const b = n.type;
      return { [l.bm("icon", b)]: b && ln[b] };
    }), W = D(() => n.icon || ln[n.type] || ""), y = D(() => $c(n.id)), h = D(() => Dc(n.id, n.offset) + y.value), d = D(() => v.value + h.value), w = D(() => ({
      top: `${h.value}px`,
      zIndex: s.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: C } = Gl(() => {
        P();
      }, n.duration));
    }
    function k() {
      C?.();
    }
    function P() {
      p.value = !1;
    }
    function A({ code: b }) {
      b === Bt.esc && P();
    }
    return Lt(() => {
      _(), i(), p.value = !0;
    }), wt(() => n.repeatNum, () => {
      k(), _();
    }), Yl(document, "keydown", A), Bi(u, () => {
      v.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: p,
      bottom: d,
      close: P
    }), (b, q) => ($(), Se(zn, {
      name: o(l).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (J) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        Yt(m("div", {
          id: b.id,
          ref_key: "messageRef",
          ref: u,
          class: Z([
            o(l).b(),
            { [o(l).m(b.type)]: b.type },
            o(l).is("center", b.center),
            o(l).is("closable", b.showClose),
            o(l).is("plain", b.plain),
            b.customClass
          ]),
          style: Zt(o(w)),
          role: "alert",
          onMouseenter: k,
          onMouseleave: _
        }, [
          b.repeatNum > 1 ? ($(), Se(o(Ac), {
            key: 0,
            value: b.repeatNum,
            type: o(E),
            class: Z(o(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : we("v-if", !0),
          o(W) ? ($(), Se(o(an), {
            key: 1,
            class: Z([o(l).e("icon"), o(O)])
          }, {
            default: st(() => [
              ($(), Se(rl(o(W))))
            ]),
            _: 1
          }, 8, ["class"])) : we("v-if", !0),
          _t(b.$slots, "default", {}, () => [
            b.dangerouslyUseHTMLString ? ($(), z(Ge, { key: 1 }, [
              we(" Caution here, message could've been compromised, never use user's input as message "),
              m("p", {
                class: Z(o(l).e("content")),
                innerHTML: b.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : ($(), z("p", {
              key: 0,
              class: Z(o(l).e("content"))
            }, N(b.message), 3))
          ]),
          b.showClose ? ($(), Se(o(an), {
            key: 2,
            class: Z(o(l).e("closeBtn")),
            onClick: Dt(P, ["stop"])
          }, {
            default: st(() => [
              L(o(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : we("v-if", !0)
        ], 46, ["id"]), [
          [Xt, p.value]
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
  }, i = L(zc, s, Rt(s.message) || At(s.message) ? {
    default: Rt(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Ct._context, Jt(i, r), e.appendChild(r.firstElementChild);
  const u = i.component, v = {
    id: a,
    vnode: i,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: i.component.props
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
    const n = e, { ns: a, zIndex: l } = tr("notification"), { nextZIndex: r, currentZIndex: s } = l, { Close: i } = Lc, u = U(!1);
    let p;
    const v = D(() => {
      const _ = n.type;
      return _ && ln[n.type] ? a.m(_) : "";
    }), C = D(() => n.type && ln[n.type] || n.icon), E = D(() => n.position.endsWith("right") ? "right" : "left"), O = D(() => n.position.startsWith("top") ? "top" : "bottom"), W = D(() => {
      var _;
      return {
        [O.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : s.value
      };
    });
    function y() {
      n.duration > 0 && ({ stop: p } = Gl(() => {
        u.value && d();
      }, n.duration));
    }
    function h() {
      p?.();
    }
    function d() {
      u.value = !1;
    }
    function w({ code: _ }) {
      _ === Bt.delete || _ === Bt.backspace ? h() : _ === Bt.esc ? u.value && d() : y();
    }
    return Lt(() => {
      y(), r(), u.value = !0;
    }), Yl(document, "keydown", w), t({
      visible: u,
      close: d
    }), (_, k) => ($(), Se(zn, {
      name: o(a).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (P) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: st(() => [
        Yt(m("div", {
          id: _.id,
          class: Z([o(a).b(), _.customClass, o(E)]),
          style: Zt(o(W)),
          role: "alert",
          onMouseenter: h,
          onMouseleave: y,
          onClick: _.onClick
        }, [
          o(C) ? ($(), Se(o(an), {
            key: 0,
            class: Z([o(a).e("icon"), o(v)])
          }, {
            default: st(() => [
              ($(), Se(rl(o(C))))
            ]),
            _: 1
          }, 8, ["class"])) : we("v-if", !0),
          m("div", {
            class: Z(o(a).e("group"))
          }, [
            m("h2", {
              class: Z(o(a).e("title")),
              textContent: N(_.title)
            }, null, 10, ["textContent"]),
            Yt(m("div", {
              class: Z(o(a).e("content")),
              style: Zt(_.title ? void 0 : { margin: 0 })
            }, [
              _t(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? ($(), z(Ge, { key: 1 }, [
                  we(" Caution here, message could've been compromised, never use user's input as message "),
                  m("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : ($(), z("p", { key: 0 }, N(_.message), 1))
              ])
            ], 6), [
              [Xt, _.message]
            ]),
            _.showClose ? ($(), Se(o(an), {
              key: 0,
              class: Z(o(a).e("closeBtn")),
              onClick: Dt(d, ["stop"])
            }, {
              default: st(() => [
                L(o(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : we("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Xt, u.value]
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
    var C;
    a += (((C = v.el) == null ? void 0 : C.offsetHeight) || 0) + Wn;
  }), a += Wn;
  const l = `notification_${qc++}`, r = e.onClose, s = {
    ...e,
    offset: a,
    id: l,
    onClose: () => {
      Qc(l, n, r);
    }
  };
  let i = document.body;
  Fn(e.appendTo) ? i = e.appendTo : ot(e.appendTo) && (i = document.querySelector(e.appendTo)), Fn(i) || (i = document.body);
  const u = document.createElement("div"), p = L(Jc, s, Rt(s.message) ? s.message : At(s.message) ? () => s.message : null);
  return p.appContext = Hl(t) ? St._context : t, p.props.onDestroy = () => {
    Jt(null, u);
  }, Jt(p, u), rn[n].push({ vm: p }), i.appendChild(u.firstElementChild), {
    close: () => {
      p.component.exposed.visible.value = !1;
    }
  };
};
cr.forEach((e) => {
  St[e] = (t = {}, n) => ((ot(t) || At(t)) && (t = {
    message: t
  }), St({ ...t, type: e }, n));
});
function Qc(e, t, n) {
  const a = rn[t], l = a.findIndex(({ vm: p }) => {
    var v;
    return ((v = p.component) == null ? void 0 : v.props.id) === e;
  });
  if (l === -1)
    return;
  const { vm: r } = a[l];
  if (!r)
    return;
  n?.(r);
  const s = r.el.offsetHeight, i = t.split("-")[0];
  a.splice(l, 1);
  const u = a.length;
  if (!(u < 1))
    for (let p = l; p < u; p++) {
      const { el: v, component: C } = a[p].vm, E = Number.parseInt(v.style[i], 10) - s - Wn;
      C.props.offset = E;
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
  taskbarTransparencyRegistryHadValue: null,
  taskbarTransparencyRegistryPreviousValue: null,
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
  const { t: n } = Pe(), a = U("switcher"), l = U([]), r = U(1), s = U(1), i = U(!1), u = U(""), p = U(""), v = U("general"), C = U("hot"), E = U(null), O = U(!1), W = U(!1), y = U(/* @__PURE__ */ new Set()), h = U(/* @__PURE__ */ new Set()), d = /* @__PURE__ */ new Map();
  let w = null, _ = null, k = null, P = 0;
  const A = D(() => C.value === "hot" ? "Hot" : C.value === "favorites" ? "Favorites" : "Toplist"), b = D(() => l.value.slice(0, 8)), q = D(() => {
    const j = p.value.trim();
    return v.value === "nature" ? j ? `${j} nature` : "nature" : j || null;
  }), J = D(() => v.value), ce = (j) => {
    const V = String(j).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
      V
    ) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : V.length > 120 ? `${V.slice(0, 120)}...` : V;
  }, ue = (j, V) => {
    const le = new Set(y.value);
    V ? le.add(j) : le.delete(j), y.value = le;
  }, ee = (j) => {
    const V = new Set(h.value);
    V.add(j), h.value = V;
  }, Re = (j, V) => {
    if (!(V instanceof HTMLImageElement)) {
      d.delete(j.id);
      return;
    }
    if (d.set(j.id, V), !w) {
      V.src = j.thumbs.large;
      return;
    }
    V.dataset.src = j.thumbs.large, w.observe(V);
  }, Ye = () => {
    h.value = /* @__PURE__ */ new Set(), d.clear();
  }, Ze = async () => {
    e.value.wallhavenQuery = p.value.trim() || null, e.value.wallhavenCategory = v.value, e.value.wallhavenSource = C.value, e.value.mode = "wallhaven", await $n(e.value);
  }, ye = async (j = r.value) => {
    const V = ++P;
    i.value = !0, u.value = "", l.value = [], Ye();
    try {
      await Ze();
      const le = await iu({
        source: C.value,
        page: j,
        query: q.value,
        category: J.value
      });
      if (V !== P) return;
      l.value = le.data, r.value = le.page, s.value = Math.max(1, le.lastPage), await al();
      for (const ge of d.values())
        w && w.observe(ge);
    } catch (le) {
      if (V !== P) return;
      l.value = [], u.value = ce(le), Y.msg(u.value, "error");
    } finally {
      V === P && (i.value = !1);
    }
  }, Xe = () => ye(1), Je = async (j) => {
    C.value = j, await ye(1);
  }, ve = async (j) => {
    v.value = j, await ye(1);
  }, $e = async () => {
    p.value = "", v.value = e.value.wallhavenCategory || "general", C.value = e.value.wallhavenSource, r.value = 1, u.value = "", l.value = [], a.value = "wallhaven", await ye(1);
  }, De = (j) => {
    E.value = j, O.value = !0, W.value = !1;
  }, je = () => {
    E.value = null, O.value = !1, W.value = !1;
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
    w = new IntersectionObserver(
      (j) => {
        for (const V of j) {
          if (!V.isIntersecting) continue;
          const le = V.target, ge = le.dataset.src;
          ge && le.src !== ge && (le.src = ge), w?.unobserve(le);
        }
      },
      { root: null, rootMargin: "120px" }
    ), _ = null, k = null;
  }), xn(() => {
    w?.disconnect(), w = null, _?.(), k?.();
  }), {
    activeView: a,
    wallpapers: l,
    wallhavenPage: r,
    wallhavenLastPage: s,
    wallhavenLoading: i,
    wallhavenError: u,
    wallhavenKeyword: p,
    wallhavenCategory: v,
    wallhavenSource: C,
    previewWallpaper: E,
    previewLoading: O,
    previewLoadFailed: W,
    workingIds: y,
    loadedThumbIds: h,
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
      _ = await qt("wallpaper-switcher-changed", t), k = await qt(
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
      var s = gu(), i = He(vu, mu);
      return function() {
        var u = r.size, p = r.strokeWidth, v = r.strokeLinecap, C = r.strokeLinejoin, E = r.theme, O = r.fill, W = r.spin, y = wu(s, {
          size: u,
          strokeWidth: p,
          strokeLinecap: v,
          strokeLinejoin: C,
          theme: E,
          fill: O
        }, i), h = [i.prefix + "-icon"];
        return h.push(i.prefix + "-icon-" + e), t && i.rtl && h.push(i.prefix + "-icon-rtl"), W && h.push(i.prefix + "-icon-spin"), L("span", {
          class: h.join(" ")
        }, [n(y)]);
      };
    }
  };
  return a;
}
const _u = me("back", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), sn = me("close-small", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ur = me("computer", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), L("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bu = me("delete", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yu = me("download", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yn = me("folder-open", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ku = me("lightning", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Dn = me("picture", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cu = me("picture-album", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Su = me("pin", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [L("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), L("defs", null, [L("clipPath", {
    id: e.id + "1c742167"
  }, [L("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Lu = me("preview-open", !1, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dr = me("refresh", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Eu = me("save", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), L("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fr = me("search", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tu = me("time", !0, function(e) {
  return L("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [L("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), L("path", {
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
    ], r = (s, i) => {
      i || n("update:modelValue", s);
    };
    return (s, i) => ($(), z(
      Ge,
      null,
      kn(l, (u) => ($(), z(
        Ge,
        {
          key: u.value
        },
        [
          s.tabClass === "button" ? ($(), z("button", {
            key: 0,
            type: "button",
            class: Z({ [s.activeClass || "active"]: s.modelValue === u.value }),
            disabled: s.disabled,
            onClick: (p) => r(u.value, s.disabled)
          }, N(o(a)(u.labelKey)), 11, Iu)) : ($(), z("div", {
            key: 1,
            class: Z(["seg-tab", {
              [s.activeClass || "active"]: s.modelValue === u.value,
              [s.disabledClass || "disabled"]: s.disabled
            }]),
            role: "tab",
            tabindex: "0",
            onClick: (p) => r(u.value, s.disabled),
            onKeydown: sl(Dt((p) => r(u.value, s.disabled), ["prevent"]), ["enter"])
          }, N(o(a)(u.labelKey)), 43, Nu))
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
}, Mu = { class: "status-panel" }, Wu = { class: "status-copy" }, Ru = { class: "wallpaper-name" }, $u = { class: "status-list" }, Du = { class: "status-row" }, ju = { class: "status-row" }, xu = { class: "status-row" }, zu = { class: "status-actions" }, Uu = ["disabled"], Vu = { class: "card settings-card" }, Hu = { class: "form-row mode-row" }, Gu = { class: "row-label" }, Ku = { class: "segmented three" }, Bu = { class: "form-row fixed-row" }, Yu = { class: "row-label" }, Zu = ["value", "placeholder"], Xu = { class: "form-row folder-row" }, Ju = { class: "row-label" }, qu = ["value", "placeholder"], Qu = { class: "hint-row" }, ed = { class: "form-row folder-order-row" }, td = { class: "row-label" }, nd = { class: "segmented folder-order" }, ad = { class: "number-label" }, ld = ["value"], rd = { value: "fileNameAscending" }, sd = { value: "fileNameDescending" }, od = { value: "modifiedAscending" }, id = { value: "modifiedDescending" }, cd = { class: "form-row wallhaven-row" }, ud = { class: "sub-label" }, dd = { class: "segmented source" }, fd = { class: "hint-row" }, hd = { class: "card rules-card" }, pd = { class: "rules-line" }, md = { class: "row-label" }, gd = { class: "switch-label" }, wd = ["checked"], vd = { class: "number-label" }, _d = ["value"], bd = { class: "segmented mini" }, yd = { class: "rules-line" }, kd = { class: "row-label compact" }, Cd = { class: "segmented fit" }, Sd = ["disabled"], Ld = ["disabled"], Ed = ["disabled"], Td = { class: "checkbox-label" }, Id = ["checked"], Nd = { class: "rules-line operation-line" }, Pd = { class: "row-label compact" }, Od = { class: "checkbox-label" }, Ad = ["checked"], Fd = { class: "sub-label" }, Md = { class: "footer-card" }, Wd = { class: "cache-info" }, Rd = { class: "footer-actions" }, $d = ["disabled"], Dd = ["disabled"], jd = ["disabled"], xd = /* @__PURE__ */ ae({
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
    const n = e, a = t, { t: l } = Pe(), r = (h) => {
      a("updateConfig", { ...n.config, ...h });
    }, s = (h) => r({ mode: h }), i = (h) => r({ wallhavenSource: h }), u = (h) => r({ fixedImagePath: h.target.value }), p = (h) => r({ folderPath: h.target.value }), v = (h) => r({ scheduleEnabled: h.target.checked }), C = (h) => r({
      intervalMinutes: Number(h.target.value)
    }), E = (h) => r({ autoRestore: h.target.checked }), O = (h) => r({
      taskbarTransparent: h.target.checked
    }), W = (h) => r({ order: h }), y = (h) => r({ folderSort: h.target.value });
    return (h, d) => ($(), z(
      "div",
      {
        class: Z(["content", { dimmed: h.loading }])
      },
      [
        m("section", Pu, [
          m("div", Ou, [
            h.previewSrc ? ($(), z("img", {
              key: 0,
              src: h.previewSrc,
              alt: o(l)("wallpaperSwitcher.currentPreviewAlt")
            }, null, 8, Au)) : ($(), z("div", Fu, [
              L(o(Dn), { size: 42 }),
              m(
                "span",
                null,
                N(o(l)("wallpaperSwitcher.noCurrentWallpaper")),
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
                  N(o(l)("wallpaperSwitcher.currentWallpaper")),
                  1
                  /* TEXT */
                ),
                m(
                  "strong",
                  null,
                  N(h.currentWallpaperName),
                  1
                  /* TEXT */
                )
              ]),
              m("div", $u, [
                m("div", Du, [
                  L(o(yn), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(o(l)("wallpaperSwitcher.source")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(h.sourceLabel),
                    1
                    /* TEXT */
                  )
                ]),
                m("div", ju, [
                  L(o(ur), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(o(l)("wallpaperSwitcher.resolution")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(h.resolutionLabel),
                    1
                    /* TEXT */
                  )
                ]),
                m("div", xu, [
                  L(o(Tu), { size: 16 }),
                  m(
                    "span",
                    null,
                    N(o(l)("wallpaperSwitcher.nextSwitch")),
                    1
                    /* TEXT */
                  ),
                  m(
                    "strong",
                    null,
                    N(h.nextSwitchLabel),
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
                disabled: h.switching,
                onClick: d[0] || (d[0] = (w) => a("switchNow"))
              }, [
                L(o(ku), {
                  theme: "outline",
                  size: 14
                }),
                oe(
                  " " + N(h.switching ? o(l)("wallpaperSwitcher.switching") : o(l)("wallpaperSwitcher.switchNow")),
                  1
                  /* TEXT */
                )
              ], 8, Uu),
              m("button", {
                type: "button",
                class: "secondary-btn",
                onClick: d[1] || (d[1] = (w) => a("setCurrentAsFixed"))
              }, [
                L(o(Su), {
                  theme: "outline",
                  size: 14
                }),
                oe(
                  " " + N(o(l)("wallpaperSwitcher.setFixed")),
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
              N(o(l)("wallpaperSwitcher.mode")),
              1
              /* TEXT */
            ),
            m("div", Ku, [
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.mode === "fixed" }),
                  onClick: d[2] || (d[2] = (w) => s("fixed"))
                },
                N(o(l)("wallpaperSwitcher.fixedImage")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.mode === "folder" }),
                  onClick: d[3] || (d[3] = (w) => s("folder"))
                },
                N(o(l)("wallpaperSwitcher.localFolder")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.mode === "wallhaven" }),
                  onClick: d[4] || (d[4] = (w) => s("wallhaven"))
                },
                N(o(l)("wallpaperSwitcher.wallhavenOnline")),
                3
                /* TEXT, CLASS */
              )
            ])
          ]),
          m("div", Bu, [
            m(
              "span",
              Yu,
              N(o(l)("wallpaperSwitcher.fixedImage")),
              1
              /* TEXT */
            ),
            m("input", {
              value: h.config.fixedImagePath,
              class: "path-input",
              placeholder: o(l)("wallpaperSwitcher.placeholders.fixedImage"),
              spellcheck: "false",
              onInput: u
            }, null, 40, Zu),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: d[5] || (d[5] = (w) => a("chooseImage"))
            }, [
              L(o(Dn), { size: 16 }),
              oe(
                " " + N(o(l)("wallpaperSwitcher.selectImage")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", Xu, [
            m(
              "span",
              Ju,
              N(o(l)("wallpaperSwitcher.localFolder")),
              1
              /* TEXT */
            ),
            m("input", {
              value: h.config.folderPath,
              class: "path-input",
              placeholder: o(l)("wallpaperSwitcher.placeholders.folder"),
              spellcheck: "false",
              onInput: p
            }, null, 40, qu),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: d[6] || (d[6] = (w) => a("chooseFolder"))
            }, [
              L(o(yn), { size: 16 }),
              oe(
                " " + N(o(l)("wallpaperSwitcher.select")),
                1
                /* TEXT */
              )
            ]),
            m("button", {
              type: "button",
              class: "tool-btn",
              onClick: d[7] || (d[7] = (w) => a("scanFolder"))
            }, [
              L(o(dr), { size: 16 }),
              oe(
                " " + N(o(l)("wallpaperSwitcher.scan")),
                1
                /* TEXT */
              )
            ])
          ]),
          m(
            "div",
            Qu,
            N(h.folderCountLabel),
            1
            /* TEXT */
          ),
          m("div", ed, [
            m(
              "span",
              td,
              N(o(l)("wallpaperSwitcher.folderOrder")),
              1
              /* TEXT */
            ),
            m("div", nd, [
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.order === "sequential" }),
                  onClick: d[8] || (d[8] = (w) => W("sequential"))
                },
                N(o(l)("wallpaperSwitcher.sequential")),
                3
                /* TEXT, CLASS */
              ),
              m(
                "button",
                {
                  type: "button",
                  class: Z({ active: h.config.order === "random" }),
                  onClick: d[9] || (d[9] = (w) => W("random"))
                },
                N(o(l)("wallpaperSwitcher.randomNoRepeat")),
                3
                /* TEXT, CLASS */
              )
            ]),
            m("label", ad, [
              oe(
                N(o(l)("wallpaperSwitcher.sortBy")) + " ",
                1
                /* TEXT */
              ),
              m("select", {
                value: h.config.folderSort,
                onChange: y
              }, [
                m(
                  "option",
                  rd,
                  N(o(l)("wallpaperSwitcher.sortFileNameAscending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  sd,
                  N(o(l)("wallpaperSwitcher.sortFileNameDescending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  od,
                  N(o(l)("wallpaperSwitcher.sortModifiedAscending")),
                  1
                  /* TEXT */
                ),
                m(
                  "option",
                  id,
                  N(o(l)("wallpaperSwitcher.sortModifiedDescending")),
                  1
                  /* TEXT */
                )
              ], 40, ld)
            ])
          ]),
          m("div", cd, [
            d[17] || (d[17] = m(
              "span",
              { class: "row-label" },
              "Wallhaven",
              -1
              /* HOISTED */
            )),
            m(
              "span",
              ud,
              N(o(l)("wallpaperSwitcher.sourceShort")),
              1
              /* TEXT */
            ),
            m("div", dd, [
              L(jn, {
                "tab-class": "button",
                "model-value": h.config.wallhavenSource,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ]),
            m("button", {
              type: "button",
              class: "tool-btn grid-open",
              onClick: d[10] || (d[10] = (w) => a("openWallhavenGrid"))
            }, [
              L(o(fr), { size: 16 }),
              oe(
                " " + N(o(l)("wallpaperSwitcher.openOnlineGrid")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", fd, [
            m(
              "span",
              null,
              N(o(l)("wallpaperSwitcher.screenMatch")),
              1
              /* TEXT */
            ),
            m(
              "strong",
              null,
              N(h.screenLabel),
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
              N(o(l)("wallpaperSwitcher.switchRules")),
              1
              /* TEXT */
            ),
            m("label", gd, [
              oe(
                N(o(l)("wallpaperSwitcher.enableSchedule")) + " ",
                1
                /* TEXT */
              ),
              m("input", {
                checked: h.config.scheduleEnabled,
                type: "checkbox",
                onChange: v
              }, null, 40, wd),
              d[18] || (d[18] = m(
                "span",
                { class: "switch-control" },
                null,
                -1
                /* HOISTED */
              ))
            ]),
            m("label", vd, [
              oe(
                N(o(l)("wallpaperSwitcher.every")) + " ",
                1
                /* TEXT */
              ),
              m("input", {
                value: h.config.intervalMinutes,
                type: "number",
                min: "1",
                max: "1440",
                onInput: C
              }, null, 40, _d),
              oe(
                " " + N(o(l)("wallpaperSwitcher.minutes")),
                1
                /* TEXT */
              )
            ]),
            we(` <span class="sub-label">{{ t('wallpaperSwitcher.type') }}</span> `),
            m("div", bd, [
              L(jn, {
                "tab-class": "button",
                "model-value": h.config.wallhavenSource,
                "onUpdate:modelValue": i
              }, null, 8, ["model-value"])
            ])
          ]),
          m("div", yd, [
            m(
              "span",
              kd,
              N(o(l)("wallpaperSwitcher.fitMode")),
              1
              /* TEXT */
            ),
            m("div", Cd, [
              m("button", {
                type: "button",
                class: Z({ active: h.config.fitMode === "fillCrop" }),
                disabled: h.fitting,
                onClick: d[11] || (d[11] = (w) => a("setFitMode", "fillCrop"))
              }, N(o(l)("wallpaperSwitcher.fitFillCrop")), 11, Sd),
              m("button", {
                type: "button",
                class: Z({ active: h.config.fitMode === "fit" }),
                disabled: h.fitting,
                onClick: d[12] || (d[12] = (w) => a("setFitMode", "fit"))
              }, N(o(l)("wallpaperSwitcher.fitContain")), 11, Ld),
              m("button", {
                type: "button",
                class: Z({ active: h.config.fitMode === "center" }),
                disabled: h.fitting,
                onClick: d[13] || (d[13] = (w) => a("setFitMode", "center"))
              }, N(o(l)("wallpaperSwitcher.fitCenter")), 11, Ed)
            ]),
            m("label", Td, [
              m("input", {
                checked: h.config.autoRestore,
                type: "checkbox",
                onChange: E
              }, null, 40, Id),
              oe(
                " " + N(o(l)("wallpaperSwitcher.autoRestore")),
                1
                /* TEXT */
              )
            ])
          ]),
          m("div", Nd, [
            m(
              "span",
              Pd,
              N(o(l)("wallpaperSwitcher.operationOptions")),
              1
              /* TEXT */
            ),
            m("label", Od, [
              m("input", {
                checked: h.config.taskbarTransparent,
                type: "checkbox",
                onChange: O
              }, null, 40, Ad),
              oe(
                " " + N(o(l)("wallpaperSwitcher.taskbarTransparent")),
                1
                /* TEXT */
              )
            ]),
            m(
              "span",
              Fd,
              N(o(l)("wallpaperSwitcher.taskbarTransparentHint")),
              1
              /* TEXT */
            )
          ])
        ]),
        m("footer", Md, [
          m("div", Wd, [
            m(
              "strong",
              null,
              N(o(l)("wallpaperSwitcher.cache")),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              N(o(l)("wallpaperSwitcher.wallhavenCache")),
              1
              /* TEXT */
            ),
            m(
              "span",
              null,
              N(h.cacheSizeLabel),
              1
              /* TEXT */
            )
          ]),
          m("div", Rd, [
            m("button", {
              type: "button",
              class: "secondary-btn",
              disabled: h.clearingCache,
              onClick: d[14] || (d[14] = (w) => a("clearCache"))
            }, [
              L(o(bu), { size: 16 }),
              oe(
                " " + N(h.clearingCache ? o(l)("wallpaperSwitcher.clearing") : o(l)("wallpaperSwitcher.clearCache")),
                1
                /* TEXT */
              )
            ], 8, $d),
            m("button", {
              type: "button",
              class: "secondary-btn",
              disabled: h.openingCache,
              onClick: d[15] || (d[15] = (w) => a("openCacheDir"))
            }, [
              L(o(yn), { size: 16 }),
              oe(
                " " + N(h.openingCache ? o(l)("wallpaperSwitcher.opening") : o(l)("wallpaperSwitcher.openCache")),
                1
                /* TEXT */
              )
            ], 8, Dd),
            m("button", {
              type: "button",
              class: "primary-btn",
              disabled: h.saving,
              onClick: d[16] || (d[16] = (w) => a("persistConfig"))
            }, [
              L(o(Eu), { size: 17 }),
              oe(
                " " + N(h.saving ? o(l)("wallpaperSwitcher.saving") : o(l)("wallpaperSwitcher.saveSettings")),
                1
                /* TEXT */
              )
            ], 8, jd)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), zd = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Ud = {
  key: 0,
  class: "title"
}, Vd = {
  key: 1,
  class: "title"
}, Hd = ["title"], Gd = {
  key: 2,
  class: "window-actions"
}, Kd = ["title"], Bd = ["title"], Yd = {
  key: 3,
  class: "window-actions"
}, Zd = ["aria-label"], Xd = ["title"], Jd = /* @__PURE__ */ ae({
  __name: "SwitcherTitlebar",
  props: {
    activeView: {},
    wallhavenSource: {},
    wallhavenLoading: { type: Boolean }
  },
  emits: ["back", "close", "openWallhaven", "setWallhavenSource"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = Pe();
    return (l, r) => ($(), z("header", zd, [
      l.activeView === "switcher" ? ($(), z("div", Ud, [
        L(o(Dn), { size: 18 }),
        m(
          "span",
          null,
          N(o(a)("wallpaperSwitcher.title")),
          1
          /* TEXT */
        )
      ])) : ($(), z("div", Vd, [
        m("button", {
          type: "button",
          class: "flat-icon",
          title: o(a)("wallpaperSwitcher.back"),
          onClick: r[0] || (r[0] = (s) => n("back"))
        }, [
          L(o(_u), { size: 20 })
        ], 8, Hd),
        m(
          "span",
          null,
          N(o(a)("wallpaperSwitcher.wallhavenTitle")),
          1
          /* TEXT */
        )
      ])),
      l.activeView === "switcher" ? ($(), z("div", Gd, [
        m("button", {
          type: "button",
          class: "icon-btn online-entry-btn",
          title: o(a)("wallpaperSwitcher.openWallhaven"),
          onClick: r[1] || (r[1] = (s) => n("openWallhaven"))
        }, [
          L(o(Cu), { size: 18 })
        ], 8, Kd),
        m("button", {
          type: "button",
          class: "icon-btn",
          title: o(a)("wallpaperSwitcher.close"),
          onClick: r[2] || (r[2] = (s) => n("close"))
        }, [
          L(o(sn), { size: 20 })
        ], 8, Bd)
      ])) : ($(), z("div", Yd, [
        m("div", {
          class: "source-toggle",
          role: "tablist",
          "aria-label": o(a)("wallpaperSwitcher.sourceToggle")
        }, [
          L(jn, {
            "model-value": l.wallhavenSource,
            disabled: l.wallhavenLoading,
            "onUpdate:modelValue": r[3] || (r[3] = (s) => n("setWallhavenSource", s))
          }, null, 8, ["model-value", "disabled"])
        ], 8, Zd),
        m("button", {
          type: "button",
          class: "icon-btn",
          title: o(a)("wallpaperSwitcher.close"),
          onClick: r[4] || (r[4] = (s) => n("close"))
        }, [
          L(o(sn), { size: 20 })
        ], 8, Xd)
      ]))
    ]));
  }
}), qd = { class: "wallhaven-view" }, Qd = { class: "filters filters--preview-style" }, ef = { class: "search-box wallhaven-search" }, tf = ["value", "placeholder"], nf = ["title"], af = ["aria-label"], lf = ["disabled", "onClick"], rf = { class: "wallhaven-meta" }, sf = ["title"], of = { class: "grid-wrap" }, cf = {
  key: 0,
  class: "empty-state"
}, uf = {
  key: 1,
  class: "empty-state error-state"
}, df = {
  key: 2,
  class: "empty-state"
}, ff = {
  key: 3,
  class: "wallpaper-grid"
}, hf = ["onClick"], pf = {
  key: 0,
  class: "thumb-skeleton"
}, mf = ["alt", "onLoad"], gf = ["title", "onClick"], wf = ["title", "disabled", "onClick"], vf = ["title", "disabled", "onClick"], _f = { class: "pager" }, bf = { class: "source-note" }, yf = { class: "pager-actions" }, kf = ["disabled"], Cf = ["disabled"], Sf = /* @__PURE__ */ ae({
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
    return (s, i) => ($(), z("div", qd, [
      m("section", Qd, [
        m("div", ef, [
          m("input", {
            value: s.keyword,
            type: "text",
            placeholder: o(a)("wallpaperSwitcher.searchPlaceholder"),
            onInput: r,
            onKeydown: i[0] || (i[0] = sl((u) => n("refresh"), ["enter"]))
          }, null, 40, tf),
          L(o(fr), {
            size: 16,
            class: "search-icon"
          }),
          s.keyword ? ($(), z("button", {
            key: 0,
            type: "button",
            class: "clear-btn",
            title: o(a)("wallpaperSwitcher.clear"),
            onClick: i[1] || (i[1] = (u) => n("update:keyword", ""))
          }, [
            L(o(sn), { size: 18 })
          ], 8, nf)) : we("v-if", !0)
        ]),
        m("div", {
          class: "wallhaven-tabs",
          role: "tablist",
          "aria-label": o(a)("wallpaperSwitcher.categoryToggle")
        }, [
          ($(), z(
            Ge,
            null,
            kn(l, (u) => m("button", {
              key: u.value,
              type: "button",
              class: Z({ active: s.category === u.value }),
              disabled: s.loading,
              onClick: (p) => n("setCategory", u.value)
            }, N(o(a)(u.labelKey)), 11, lf)),
            64
            /* STABLE_FRAGMENT */
          ))
        ], 8, af),
        m("div", rf, [
          m(
            "span",
            null,
            N(o(a)("wallpaperSwitcher.autoMatch", { resolution: s.screenLabel })),
            1
            /* TEXT */
          ),
          m("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: o(a)("wallpaperSwitcher.refresh"),
            onClick: i[2] || (i[2] = (u) => n("refresh"))
          }, [
            L(o(dr), {
              size: 14,
              class: Z({ spinning: s.loading })
            }, null, 8, ["class"])
          ], 8, sf)
        ])
      ]),
      m("section", of, [
        s.loading && s.wallpapers.length === 0 ? ($(), z(
          "div",
          cf,
          N(o(a)("wallpaperSwitcher.loadingWallhaven")),
          1
          /* TEXT */
        )) : s.error ? ($(), z("div", uf, [
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
              onClick: i[3] || (i[3] = (u) => n("refresh"))
            },
            N(o(a)("wallpaperSwitcher.retry")),
            1
            /* TEXT */
          )
        ])) : s.wallpapers.length === 0 ? ($(), z(
          "div",
          df,
          N(o(a)("wallpaperSwitcher.noWallpapers")),
          1
          /* TEXT */
        )) : ($(), z("div", ff, [
          ($(!0), z(
            Ge,
            null,
            kn(s.wallpapers, (u) => ($(), z("article", {
              key: u.id,
              class: "wallpaper-card"
            }, [
              m("button", {
                type: "button",
                class: "thumb",
                onClick: (p) => n("openPreview", u)
              }, [
                s.loadedThumbIds.has(u.id) ? we("v-if", !0) : ($(), z("div", pf)),
                m("img", {
                  ref_for: !0,
                  ref: (p) => s.setThumbRef(u, p),
                  alt: u.resolution,
                  loading: "lazy",
                  onLoad: (p) => n("markThumbLoaded", u.id)
                }, null, 40, mf),
                m(
                  "span",
                  null,
                  N(u.resolution),
                  1
                  /* TEXT */
                )
              ], 8, hf),
              m("div", {
                class: "card-actions",
                onClick: i[4] || (i[4] = Dt(() => {
                }, ["stop"]))
              }, [
                m("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.preview"),
                  onClick: (p) => n("openPreview", u)
                }, [
                  L(o(Lu), { size: 16 }),
                  oe(
                    " " + N(o(a)("wallpaperSwitcher.preview")),
                    1
                    /* TEXT */
                  )
                ], 8, gf),
                m("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.setWallpaper"),
                  disabled: s.workingIds.has(u.id),
                  onClick: (p) => n("setWallpaper", u)
                }, [
                  L(o(ur), { size: 16 }),
                  oe(
                    " " + N(s.workingIds.has(u.id) ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.set")),
                    1
                    /* TEXT */
                  )
                ], 8, wf),
                m("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.download"),
                  disabled: s.workingIds.has(u.id),
                  onClick: (p) => n("downloadWallpaper", u)
                }, [
                  L(o(yu), { size: 16 }),
                  oe(
                    " " + N(o(a)("wallpaperSwitcher.download")),
                    1
                    /* TEXT */
                  )
                ], 8, vf)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      m("footer", _f, [
        m(
          "span",
          null,
          N(o(a)("wallpaperSwitcher.page", { page: s.page })),
          1
          /* TEXT */
        ),
        m(
          "span",
          bf,
          N(o(a)("wallpaperSwitcher.sourceNote", { source: s.sourceLabel })),
          1
          /* TEXT */
        ),
        m("div", yf, [
          m("button", {
            type: "button",
            disabled: s.page <= 1 || s.loading,
            onClick: i[5] || (i[5] = (u) => n("prevPage"))
          }, N(o(a)("wallpaperSwitcher.prevPage")), 9, kf),
          m("button", {
            type: "button",
            disabled: s.page >= s.lastPage || s.loading,
            onClick: i[6] || (i[6] = (u) => n("nextPage"))
          }, N(o(a)("wallpaperSwitcher.nextPage")), 9, Cf)
        ])
      ])
    ]));
  }
}), Lf = { class: "preview-dialog" }, Ef = { class: "preview-image-wrap" }, Tf = {
  key: 0,
  class: "preview-skeleton"
}, If = {
  key: 1,
  class: "preview-error"
}, Nf = ["src", "alt"], Pf = ["disabled"], Of = ["disabled"], Af = /* @__PURE__ */ ae({
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
      m("div", Lf, [
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
            L(o(sn), { size: 23 })
          ])
        ]),
        m("div", Ef, [
          l.loading ? ($(), z("div", Tf, [
            m(
              "span",
              null,
              N(o(a)("wallpaperSwitcher.loadingPreview")),
              1
              /* TEXT */
            )
          ])) : we("v-if", !0),
          l.loadFailed ? ($(), z(
            "div",
            If,
            N(o(a)("wallpaperSwitcher.previewLoadFailed")),
            1
            /* TEXT */
          )) : we("v-if", !0),
          m("img", {
            class: Z({ ready: !l.loading && !l.loadFailed }),
            src: l.wallpaper.path,
            alt: o(a)("wallpaperSwitcher.wallpaperPreviewAlt"),
            onLoad: r[1] || (r[1] = (s) => n("loaded")),
            onError: r[2] || (r[2] = (s) => n("failed"))
          }, null, 42, Nf)
        ]),
        m("footer", null, [
          m("button", {
            type: "button",
            class: "secondary-btn",
            disabled: l.workingIds.has(l.wallpaper.id),
            onClick: r[3] || (r[3] = (s) => n("download", l.wallpaper))
          }, N(o(a)("wallpaperSwitcher.downloadCache")), 9, Pf),
          m("button", {
            type: "button",
            class: "primary-btn",
            disabled: l.workingIds.has(l.wallpaper.id),
            onClick: r[4] || (r[4] = (s) => n("setWallpaper", l.wallpaper))
          }, N(l.workingIds.has(l.wallpaper.id) ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.setWallpaper")), 9, Of)
        ])
      ])
    ])) : we("v-if", !0);
  }
}), Ff = { class: "wallpaper-window" }, Mf = {
  key: 0,
  class: "unsupported"
}, Wf = /* @__PURE__ */ ae({
  __name: "index",
  setup(e) {
    const t = ul(), { t: n } = Pe(), a = U(lu()), l = U(null), r = U(null), s = U(!1), i = U(!1), u = U(!1), p = U(!1), v = U(!1), C = U(!1), E = async () => {
      try {
        l.value = await Qa();
      } catch (R) {
        Y.msg(String(R), "error");
      }
    }, O = pu({
      config: a,
      refreshStatus: async () => {
        await E();
      }
    }), {
      activeView: W,
      wallhavenPage: y,
      wallhavenLastPage: h,
      wallhavenLoading: d,
      wallhavenError: w,
      wallhavenKeyword: _,
      wallhavenCategory: k,
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
    }) : a.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), c = async () => {
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
      i.value = !0;
      try {
        await $n(a.value), await E(), Y.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        i.value = !1;
      }
    }, S = async () => {
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
          await tl(R), await c(), Y.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
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
      u.value = !0;
      try {
        await $n(a.value), await su(), await E(), Y.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        u.value = !1;
      }
    }, g = async (R) => {
      a.value.fitMode = R, p.value = !0;
      try {
        await ou(R), await E(), a.value = await qa(), Y.msg(n("wallpaperSwitcher.messages.fitApplied"), "success");
      } catch (fe) {
        Y.msg(String(fe), "error");
      } finally {
        p.value = !1;
      }
    }, I = async () => {
      if (!l.value?.currentPath) {
        Y.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      a.value.mode = "fixed", a.value.fixedImagePath = l.value.currentPath, a.value.scheduleEnabled = !1;
      try {
        await tl(l.value.currentPath), await c(), Y.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
      } catch (R) {
        Y.msg(String(R), "error");
      }
    }, B = async () => {
      v.value = !0;
      try {
        await du(), await E(), Y.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        v.value = !1;
      }
    }, te = async () => {
      C.value = !0;
      try {
        await hu();
      } catch (R) {
        Y.msg(String(R), "error");
      } finally {
        C.value = !1;
      }
    }, Oe = (R) => {
      a.value = R;
    }, pt = async () => {
      await t.close();
    };
    return Lt(async () => {
      await c(), await ze();
    }), xn(() => {
    }), (R, fe) => ($(), z("main", Ff, [
      L(Jd, {
        "active-view": o(W),
        "wallhaven-source": o(P),
        "wallhaven-loading": o(d),
        onBack: o(Ye),
        onClose: pt,
        onOpenWallhaven: o(Re),
        onSetWallhavenSource: o(je)
      }, null, 8, ["active-view", "wallhaven-source", "wallhaven-loading", "onBack", "onOpenWallhaven", "onSetWallhavenSource"]),
      o(l) && !o(l).supported ? ($(), z(
        "section",
        Mf,
        N(o(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : we("v-if", !0),
      o(W) === "switcher" ? ($(), Se(xd, {
        key: 1,
        config: o(a),
        loading: o(s),
        "preview-src": o(nt),
        "current-wallpaper-name": o(at),
        "source-label": o(ge),
        "resolution-label": o(V),
        "next-switch-label": o(Ue),
        "folder-count-label": o(ht),
        "screen-label": o(j),
        "cache-size-label": o(lt),
        switching: o(u),
        fitting: o(p),
        "clearing-cache": o(v),
        "opening-cache": o(C),
        saving: o(i),
        onUpdateConfig: Oe,
        onChooseImage: S,
        onChooseFolder: Q,
        onScanFolder: F,
        onOpenWallhavenGrid: o(Re),
        onSwitchNow: x,
        onSetCurrentAsFixed: I,
        onSetFitMode: g,
        onClearCache: B,
        onOpenCacheDir: te,
        onPersistConfig: f
      }, null, 8, ["config", "loading", "preview-src", "current-wallpaper-name", "source-label", "resolution-label", "next-switch-label", "folder-count-label", "screen-label", "cache-size-label", "switching", "fitting", "clearing-cache", "opening-cache", "saving", "onOpenWallhavenGrid"])) : ($(), Se(Sf, {
        key: 2,
        keyword: o(_),
        "onUpdate:keyword": fe[0] || (fe[0] = (na) => ll(_) ? _.value = na : null),
        category: o(k),
        loading: o(d),
        error: o(w),
        wallpapers: o(ee),
        "loaded-thumb-ids": o(ce),
        "working-ids": o(J),
        page: o(y),
        "last-page": o(h),
        "source-label": o(ue),
        "screen-label": o(j),
        "set-thumb-ref": o($e),
        onRefresh: o(De),
        onSetCategory: o(qe),
        onOpenPreview: o(Ze),
        onMarkThumbLoaded: o(ve),
        onSetWallpaper: o(xe),
        onDownloadWallpaper: o(Qe),
        onPrevPage: o(et),
        onNextPage: o(tt)
      }, null, 8, ["keyword", "category", "loading", "error", "wallpapers", "loaded-thumb-ids", "working-ids", "page", "last-page", "source-label", "screen-label", "set-thumb-ref", "onRefresh", "onSetCategory", "onOpenPreview", "onMarkThumbLoaded", "onSetWallpaper", "onDownloadWallpaper", "onPrevPage", "onNextPage"])),
      L(Af, {
        wallpaper: o(A),
        loading: o(b),
        "load-failed": o(q),
        "working-ids": o(J),
        onClose: o(ye),
        onLoaded: o(Xe),
        onFailed: o(Je),
        onDownload: o(Qe),
        onSetWallpaper: o(xe)
      }, null, 8, ["wallpaper", "loading", "load-failed", "working-ids", "onClose", "onLoaded", "onFailed", "onDownload", "onSetWallpaper"])
    ]));
  }
}), Rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wf
}, Symbol.toStringTag, { value: "Module" }));
export {
  Df as activate
};
