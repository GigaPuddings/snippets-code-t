import * as hn from "vue";
import { inject as Ne, ref as X, shallowRef as lo, computed as x, watch as Re, onMounted as gt, onUnmounted as Qs, defineComponent as re, h as er, createVNode as M, Text as co, Fragment as yt, getCurrentInstance as Ye, unref as h, readonly as uo, getCurrentScope as fo, onScopeDispose as mo, nextTick as tr, isRef as ho, warn as _o, provide as po, createElementBlock as Y, openBlock as j, mergeProps as go, renderSlot as Ze, createElementVNode as _, normalizeClass as ne, Transition as Fn, withCtx as De, withDirectives as ue, normalizeStyle as Rt, createTextVNode as Ae, toDisplayString as F, vShow as Ft, shallowReactive as yo, createBlock as me, createCommentVNode as H, resolveDynamicComponent as nr, withModifiers as $n, isVNode as dt, render as $t, vModelRadio as He, vModelText as ts } from "vue";
const lf = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/dark-mode",
    name: "DarkMode",
    component: () => Promise.resolve().then(() => rf)
  }), e.registerWindowShortcut({
    label: "dark_mode"
  });
};
function vo(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function bo(e, t, n, s, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ot;
const de = "__TAURI_TO_IPC_KEY__";
function wo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function N(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class ko {
  get rid() {
    return vo(this, Ot, "f");
  }
  constructor(t) {
    Ot.set(this, void 0), bo(this, Ot, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return N("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ot = /* @__PURE__ */ new WeakMap();
class sr {
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
    return new ct(this.width * t, this.height * t);
  }
  [de]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[de]();
  }
}
class ct {
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
    return new sr(this.width / t, this.height / t);
  }
  [de]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[de]();
  }
}
class Ge {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof sr ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ct ? this.size : this.size.toPhysical(t);
  }
  [de]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[de]();
  }
}
class rr {
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
    return new Te(this.x * t, this.y * t);
  }
  [de]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[de]();
  }
}
class Te {
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
    return new rr(this.x / t, this.y / t);
  }
  [de]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[de]();
  }
}
class Lt {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof rr ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Te ? this.position : this.position.toPhysical(t);
  }
  [de]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[de]();
  }
}
var le;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(le || (le = {}));
async function or(e, t) {
  await N("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Wn(e, t, n) {
  var s;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return N("plugin:event|listen", {
    event: e,
    target: r,
    handler: wo(t)
  }).then((o) => async () => or(e, o));
}
async function Co(e, t, n) {
  return Wn(e, (s) => {
    or(e, s.id), t(s);
  }, n);
}
async function Lo(e, t) {
  await N("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Eo(e, t, n) {
  await N("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class ut extends ko {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, s) {
    return N("plugin:image|new", {
      rgba: Wt(t),
      width: n,
      height: s
    }).then((r) => new ut(r));
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
    return N("plugin:image|from_bytes", {
      bytes: Wt(t)
    }).then((n) => new ut(n));
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
    return N("plugin:image|from_path", { path: t }).then((n) => new ut(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return N("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return N("plugin:image|size", { rid: this.rid });
  }
}
function Wt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ut ? e.rid : e;
}
var kn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(kn || (kn = {}));
class So {
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
var ns;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ns || (ns = {}));
function Cn() {
  return new ar(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function _n() {
  return N("plugin:window|get_all_windows").then((e) => e.map((t) => new ar(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const pn = ["tauri://created", "tauri://error"];
class ar {
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
    var s;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || N("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (s = n.parent) === null || s === void 0 ? void 0 : s.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (r) => this.emit("tauri://error", r));
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
    return (n = (await _n()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Cn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return _n();
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
    for (const t of await _n())
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : Wn(t, n, {
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : Co(t, n, {
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
    if (pn.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Lo(t, n);
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
  async emitTo(t, n, s) {
    if (pn.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Eo(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return pn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return N("plugin:window|scale_factor", {
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
    return N("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Te(t));
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
    return N("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Te(t));
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
    return N("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new ct(t));
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
    return N("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new ct(t));
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
    return N("plugin:window|is_fullscreen", {
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
    return N("plugin:window|is_minimized", {
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
    return N("plugin:window|is_maximized", {
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
    return N("plugin:window|is_focused", {
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
    return N("plugin:window|is_decorated", {
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
    return N("plugin:window|is_resizable", {
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
    return N("plugin:window|is_maximizable", {
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
    return N("plugin:window|is_minimizable", {
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
    return N("plugin:window|is_closable", {
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
    return N("plugin:window|is_visible", {
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
    return N("plugin:window|title", {
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
    return N("plugin:window|theme", {
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
    return N("plugin:window|is_always_on_top", {
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
    return N("plugin:window|center", {
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
    return t && (t === kn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), N("plugin:window|request_user_attention", {
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
    return N("plugin:window|set_resizable", {
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
    return N("plugin:window|set_enabled", {
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
    return N("plugin:window|is_enabled", {
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
    return N("plugin:window|set_maximizable", {
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
    return N("plugin:window|set_minimizable", {
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
    return N("plugin:window|set_closable", {
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
    return N("plugin:window|set_title", {
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
    return N("plugin:window|maximize", {
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
    return N("plugin:window|unmaximize", {
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
    return N("plugin:window|toggle_maximize", {
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
    return N("plugin:window|minimize", {
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
    return N("plugin:window|unminimize", {
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
    return N("plugin:window|show", {
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
    return N("plugin:window|hide", {
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
    return N("plugin:window|close", {
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
    return N("plugin:window|destroy", {
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
    return N("plugin:window|set_decorations", {
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
    return N("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return N("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return N("plugin:window|set_effects", {
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
    return N("plugin:window|set_always_on_top", {
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
    return N("plugin:window|set_always_on_bottom", {
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
    return N("plugin:window|set_content_protected", {
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
    return N("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Ge ? t : new Ge(t)
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
    return N("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Ge ? t : t ? new Ge(t) : null
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
    return N("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Ge ? t : t ? new Ge(t) : null
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
    function n(s) {
      return s ? { Logical: s } : null;
    }
    return N("plugin:window|set_size_constraints", {
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
    return N("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Lt ? t : new Lt(t)
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
    return N("plugin:window|set_fullscreen", {
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
    return N("plugin:window|set_focus", {
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
    return N("plugin:window|set_icon", {
      label: this.label,
      value: Wt(t)
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
    return N("plugin:window|set_skip_taskbar", {
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
    return N("plugin:window|set_cursor_grab", {
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
    return N("plugin:window|set_cursor_visible", {
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
    return N("plugin:window|set_cursor_icon", {
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
    return N("plugin:window|set_background_color", { color: t });
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
    return N("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Lt ? t : new Lt(t)
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
    return N("plugin:window|set_ignore_cursor_events", {
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
    return N("plugin:window|start_dragging", {
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
    return N("plugin:window|start_resize_dragging", {
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
    return N("plugin:window|set_badge_count", {
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
    return N("plugin:window|set_badge_label", {
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
    return N("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Wt(t) : void 0
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
    return N("plugin:window|set_progress_bar", {
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
    return N("plugin:window|set_visible_on_all_workspaces", {
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
    return N("plugin:window|set_title_bar_style", {
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
    return N("plugin:window|set_theme", {
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
    return this.listen(le.WINDOW_RESIZED, (n) => {
      n.payload = new ct(n.payload), t(n);
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
    return this.listen(le.WINDOW_MOVED, (n) => {
      n.payload = new Te(n.payload), t(n);
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
    return this.listen(le.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new So(n);
      await t(s), s.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(le.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Te(a.payload.position)
        }
      });
    }), s = await this.listen(le.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Te(a.payload.position)
        }
      });
    }), r = await this.listen(le.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Te(a.payload.position)
        }
      });
    }), o = await this.listen(le.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), s(), o();
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
    const n = await this.listen(le.WINDOW_FOCUS, (r) => {
      t({ ...r, payload: !0 });
    }), s = await this.listen(le.WINDOW_BLUR, (r) => {
      t({ ...r, payload: !1 });
    });
    return () => {
      n(), s();
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
    return this.listen(le.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(le.WINDOW_THEME_CHANGED, t);
  }
}
var ss;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ss || (ss = {}));
var rs;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(rs || (rs = {}));
var os;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(os || (os = {}));
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function To(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const as = typeof window < "u", xe = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), No = (e, t, n) => Oo({ l: e, k: t, s: n }), Oo = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), se = (e) => typeof e == "number" && isFinite(e), Io = (e) => xn(e) === "[object Date]", xt = (e) => xn(e) === "[object RegExp]", Ht = (e) => z(e) && Object.keys(e).length === 0, oe = Object.assign, Po = Object.create, G = (e = null) => Po(e);
let is;
const It = () => is || (is = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : G());
function ls(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function cs(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Mo(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (s, r, o) => `${r}="${cs(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (s, r, o) => `${r}='${cs(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((s) => {
    e = e.replace(s, "$1javascript&#58;");
  }), e;
}
const Ao = Object.prototype.hasOwnProperty;
function he(e, t) {
  return Ao.call(e, t);
}
const ee = Array.isArray, J = (e) => typeof e == "function", D = (e) => typeof e == "string", Q = (e) => typeof e == "boolean", B = (e) => e !== null && typeof e == "object", Do = (e) => B(e) && J(e.then) && J(e.catch), ir = Object.prototype.toString, xn = (e) => ir.call(e), z = (e) => xn(e) === "[object Object]", Ro = (e) => e == null ? "" : ee(e) || z(e) && e.toString === ir ? JSON.stringify(e, null, 2) : String(e);
function jn(e, t = "") {
  return e.reduce((n, s, r) => r === 0 ? n + s : n + t + s, "");
}
const Et = (e) => !B(e) || ee(e);
function Pt(e, t) {
  if (Et(e) || Et(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: r } = n.pop();
    Object.keys(s).forEach((o) => {
      o !== "__proto__" && (B(s[o]) && !B(r[o]) && (r[o] = Array.isArray(s[o]) ? [] : G()), Et(r[o]) || Et(s[o]) ? r[o] = s[o] : n.push({ src: s[o], des: r[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Fo(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ln(e, t, n) {
  return { start: e, end: t };
}
const V = {
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
}, $o = 17;
function Gt(e, t, n = {}) {
  const { domain: s, messages: r, args: o } = n, a = e, l = new SyntaxError(String(a));
  return l.code = e, t && (l.location = t), l.domain = s, l;
}
function Wo(e) {
  throw e;
}
const ge = " ", xo = "\r", ie = `
`, jo = "\u2028", Uo = "\u2029";
function zo(e) {
  const t = e;
  let n = 0, s = 1, r = 1, o = 0;
  const a = (p) => t[p] === xo && t[p + 1] === ie, l = (p) => t[p] === ie, u = (p) => t[p] === Uo, f = (p) => t[p] === jo, b = (p) => a(p) || l(p) || u(p) || f(p), L = () => n, S = () => s, P = () => r, $ = () => o, w = (p) => a(p) || u(p) || f(p) ? ie : t[p], E = () => w(n), d = () => w(n + o);
  function k() {
    return o = 0, b(n) && (s++, r = 0), a(n) && n++, n++, r++, t[n];
  }
  function y() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function v() {
    n = 0, s = 1, r = 1, o = 0;
  }
  function O(p = 0) {
    o = p;
  }
  function I() {
    const p = n + o;
    for (; p !== n; )
      k();
    o = 0;
  }
  return {
    index: L,
    line: S,
    column: P,
    peekOffset: $,
    charAt: w,
    currentChar: E,
    currentPeek: d,
    next: k,
    peek: y,
    reset: v,
    resetPeek: O,
    skipToPeek: I
  };
}
const we = void 0, Bo = ".", us = "'", Vo = "tokenizer";
function Ho(e, t = {}) {
  const n = t.location !== !1, s = zo(e), r = () => s.index(), o = () => Fo(s.line(), s.column(), s.index()), a = o(), l = r(), u = {
    currentType: 13,
    offset: l,
    startLoc: a,
    endLoc: a,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, f = () => u, { onError: b } = t;
  function L(i, c, C, ...A) {
    const Z = f();
    if (c.column += C, c.offset += C, b) {
      const W = n ? Ln(Z.startLoc, c) : null, m = Gt(i, W, {
        domain: Vo,
        args: A
      });
      b(m);
    }
  }
  function S(i, c, C) {
    i.endLoc = o(), i.currentType = c;
    const A = { type: c };
    return n && (A.loc = Ln(i.startLoc, i.endLoc)), C != null && (A.value = C), A;
  }
  const P = (i) => S(
    i,
    13
    /* TokenTypes.EOF */
  );
  function $(i, c) {
    return i.currentChar() === c ? (i.next(), c) : (L(V.EXPECTED_TOKEN, o(), 0, c), "");
  }
  function w(i) {
    let c = "";
    for (; i.currentPeek() === ge || i.currentPeek() === ie; )
      c += i.currentPeek(), i.peek();
    return c;
  }
  function E(i) {
    const c = w(i);
    return i.skipToPeek(), c;
  }
  function d(i) {
    if (i === we)
      return !1;
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c === 95;
  }
  function k(i) {
    if (i === we)
      return !1;
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function y(i, c) {
    const { currentType: C } = c;
    if (C !== 2)
      return !1;
    w(i);
    const A = d(i.currentPeek());
    return i.resetPeek(), A;
  }
  function v(i, c) {
    const { currentType: C } = c;
    if (C !== 2)
      return !1;
    w(i);
    const A = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), Z = k(A);
    return i.resetPeek(), Z;
  }
  function O(i, c) {
    const { currentType: C } = c;
    if (C !== 2)
      return !1;
    w(i);
    const A = i.currentPeek() === us;
    return i.resetPeek(), A;
  }
  function I(i, c) {
    const { currentType: C } = c;
    if (C !== 7)
      return !1;
    w(i);
    const A = i.currentPeek() === ".";
    return i.resetPeek(), A;
  }
  function p(i, c) {
    const { currentType: C } = c;
    if (C !== 8)
      return !1;
    w(i);
    const A = d(i.currentPeek());
    return i.resetPeek(), A;
  }
  function g(i, c) {
    const { currentType: C } = c;
    if (!(C === 7 || C === 11))
      return !1;
    w(i);
    const A = i.currentPeek() === ":";
    return i.resetPeek(), A;
  }
  function R(i, c) {
    const { currentType: C } = c;
    if (C !== 9)
      return !1;
    const A = () => {
      const W = i.currentPeek();
      return W === "{" ? d(i.peek()) : W === "@" || W === "|" || W === ":" || W === "." || W === ge || !W ? !1 : W === ie ? (i.peek(), A()) : pe(i, !1);
    }, Z = A();
    return i.resetPeek(), Z;
  }
  function U(i) {
    w(i);
    const c = i.currentPeek() === "|";
    return i.resetPeek(), c;
  }
  function pe(i, c = !0) {
    const C = (Z = !1, W = "") => {
      const m = i.currentPeek();
      return m === "{" || m === "@" || !m ? Z : m === "|" ? !(W === ge || W === ie) : m === ge ? (i.peek(), C(!0, ge)) : m === ie ? (i.peek(), C(!0, ie)) : !0;
    }, A = C();
    return c && i.resetPeek(), A;
  }
  function te(i, c) {
    const C = i.currentChar();
    return C === we ? we : c(C) ? (i.next(), C) : null;
  }
  function qt(i) {
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c >= 48 && c <= 57 || // 0-9
    c === 95 || // _
    c === 36;
  }
  function Qt(i) {
    return te(i, qt);
  }
  function en(i) {
    const c = i.charCodeAt(0);
    return c >= 97 && c <= 122 || // a-z
    c >= 65 && c <= 90 || // A-Z
    c >= 48 && c <= 57 || // 0-9
    c === 95 || // _
    c === 36 || // $
    c === 45;
  }
  function tn(i) {
    return te(i, en);
  }
  function nn(i) {
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function sn(i) {
    return te(i, nn);
  }
  function be(i) {
    const c = i.charCodeAt(0);
    return c >= 48 && c <= 57 || // 0-9
    c >= 65 && c <= 70 || // A-F
    c >= 97 && c <= 102;
  }
  function vt(i) {
    return te(i, be);
  }
  function bt(i) {
    let c = "", C = "";
    for (; c = sn(i); )
      C += c;
    return C;
  }
  function rn(i) {
    let c = "";
    for (; ; ) {
      const C = i.currentChar();
      if (C === "{" || C === "}" || C === "@" || C === "|" || !C)
        break;
      if (C === ge || C === ie)
        if (pe(i))
          c += C, i.next();
        else {
          if (U(i))
            break;
          c += C, i.next();
        }
      else
        c += C, i.next();
    }
    return c;
  }
  function on(i) {
    E(i);
    let c = "", C = "";
    for (; c = tn(i); )
      C += c;
    const A = i.currentChar();
    if (A && A !== "}" && A !== we && A !== ge && A !== ie && A !== "　") {
      const Z = kt(i);
      return L(V.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, C + Z), C + Z;
    }
    return i.currentChar() === we && L(V.UNTERMINATED_CLOSING_BRACE, o(), 0), C;
  }
  function an(i) {
    E(i);
    let c = "";
    return i.currentChar() === "-" ? (i.next(), c += `-${bt(i)}`) : c += bt(i), i.currentChar() === we && L(V.UNTERMINATED_CLOSING_BRACE, o(), 0), c;
  }
  function es(i) {
    return i !== us && i !== ie;
  }
  function ln(i) {
    E(i), $(i, "'");
    let c = "", C = "";
    for (; c = te(i, es); )
      c === "\\" ? C += cn(i) : C += c;
    const A = i.currentChar();
    return A === ie || A === we ? (L(V.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), A === ie && (i.next(), $(i, "'")), C) : ($(i, "'"), C);
  }
  function cn(i) {
    const c = i.currentChar();
    switch (c) {
      case "\\":
      case "'":
        return i.next(), `\\${c}`;
      case "u":
        return wt(i, c, 4);
      case "U":
        return wt(i, c, 6);
      default:
        return L(V.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, c), "";
    }
  }
  function wt(i, c, C) {
    $(i, c);
    let A = "";
    for (let Z = 0; Z < C; Z++) {
      const W = vt(i);
      if (!W) {
        L(V.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${c}${A}${i.currentChar()}`);
        break;
      }
      A += W;
    }
    return `\\${c}${A}`;
  }
  function un(i) {
    return i !== "{" && i !== "}" && i !== ge && i !== ie;
  }
  function kt(i) {
    E(i);
    let c = "", C = "";
    for (; c = te(i, un); )
      C += c;
    return C;
  }
  function dn(i) {
    let c = "", C = "";
    for (; c = Qt(i); )
      C += c;
    return C;
  }
  function fn(i) {
    const c = (C) => {
      const A = i.currentChar();
      return A === "{" || A === "@" || A === "|" || A === "(" || A === ")" || !A || A === ge ? C : (C += A, i.next(), c(C));
    };
    return c("");
  }
  function st(i) {
    E(i);
    const c = $(
      i,
      "|"
      /* TokenChars.Pipe */
    );
    return E(i), c;
  }
  function ze(i, c) {
    let C = null;
    switch (i.currentChar()) {
      case "{":
        return c.braceNest >= 1 && L(V.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), i.next(), C = S(
          c,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(i), c.braceNest++, C;
      case "}":
        return c.braceNest > 0 && c.currentType === 2 && L(V.EMPTY_PLACEHOLDER, o(), 0), i.next(), C = S(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), c.braceNest--, c.braceNest > 0 && E(i), c.inLinked && c.braceNest === 0 && (c.inLinked = !1), C;
      case "@":
        return c.braceNest > 0 && L(V.UNTERMINATED_CLOSING_BRACE, o(), 0), C = Be(i, c) || P(c), c.braceNest = 0, C;
      default: {
        let Z = !0, W = !0, m = !0;
        if (U(i))
          return c.braceNest > 0 && L(V.UNTERMINATED_CLOSING_BRACE, o(), 0), C = S(c, 1, st(i)), c.braceNest = 0, c.inLinked = !1, C;
        if (c.braceNest > 0 && (c.currentType === 4 || c.currentType === 5 || c.currentType === 6))
          return L(V.UNTERMINATED_CLOSING_BRACE, o(), 0), c.braceNest = 0, rt(i, c);
        if (Z = y(i, c))
          return C = S(c, 4, on(i)), E(i), C;
        if (W = v(i, c))
          return C = S(c, 5, an(i)), E(i), C;
        if (m = O(i, c))
          return C = S(c, 6, ln(i)), E(i), C;
        if (!Z && !W && !m)
          return C = S(c, 12, kt(i)), L(V.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, C.value), E(i), C;
        break;
      }
    }
    return C;
  }
  function Be(i, c) {
    const { currentType: C } = c;
    let A = null;
    const Z = i.currentChar();
    switch ((C === 7 || C === 8 || C === 11 || C === 9) && (Z === ie || Z === ge) && L(V.INVALID_LINKED_FORMAT, o(), 0), Z) {
      case "@":
        return i.next(), A = S(
          c,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), c.inLinked = !0, A;
      case ".":
        return E(i), i.next(), S(
          c,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(i), i.next(), S(
          c,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return U(i) ? (A = S(c, 1, st(i)), c.braceNest = 0, c.inLinked = !1, A) : I(i, c) || g(i, c) ? (E(i), Be(i, c)) : p(i, c) ? (E(i), S(c, 11, dn(i))) : R(i, c) ? (E(i), Z === "{" ? ze(i, c) || A : S(c, 10, fn(i))) : (C === 7 && L(V.INVALID_LINKED_FORMAT, o(), 0), c.braceNest = 0, c.inLinked = !1, rt(i, c));
    }
  }
  function rt(i, c) {
    let C = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (c.braceNest > 0)
      return ze(i, c) || P(c);
    if (c.inLinked)
      return Be(i, c) || P(c);
    switch (i.currentChar()) {
      case "{":
        return ze(i, c) || P(c);
      case "}":
        return L(V.UNBALANCED_CLOSING_BRACE, o(), 0), i.next(), S(
          c,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Be(i, c) || P(c);
      default: {
        if (U(i))
          return C = S(c, 1, st(i)), c.braceNest = 0, c.inLinked = !1, C;
        if (pe(i))
          return S(c, 0, rn(i));
        break;
      }
    }
    return C;
  }
  function mn() {
    const { currentType: i, offset: c, startLoc: C, endLoc: A } = u;
    return u.lastType = i, u.lastOffset = c, u.lastStartLoc = C, u.lastEndLoc = A, u.offset = r(), u.startLoc = o(), s.currentChar() === we ? S(
      u,
      13
      /* TokenTypes.EOF */
    ) : rt(s, u);
  }
  return {
    nextToken: mn,
    currentOffset: r,
    currentPosition: o,
    context: f
  };
}
const Go = "parser", Ko = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Yo(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const s = parseInt(t || n, 16);
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�";
    }
  }
}
function Zo(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function s(d, k, y, v, ...O) {
    const I = d.currentPosition();
    if (I.offset += v, I.column += v, n) {
      const p = t ? Ln(y, I) : null, g = Gt(k, p, {
        domain: Go,
        args: O
      });
      n(g);
    }
  }
  function r(d, k, y) {
    const v = { type: d };
    return t && (v.start = k, v.end = k, v.loc = { start: y, end: y }), v;
  }
  function o(d, k, y, v) {
    t && (d.end = k, d.loc && (d.loc.end = y));
  }
  function a(d, k) {
    const y = d.context(), v = r(3, y.offset, y.startLoc);
    return v.value = k, o(v, d.currentOffset(), d.currentPosition()), v;
  }
  function l(d, k) {
    const y = d.context(), { lastOffset: v, lastStartLoc: O } = y, I = r(5, v, O);
    return I.index = parseInt(k, 10), d.nextToken(), o(I, d.currentOffset(), d.currentPosition()), I;
  }
  function u(d, k) {
    const y = d.context(), { lastOffset: v, lastStartLoc: O } = y, I = r(4, v, O);
    return I.key = k, d.nextToken(), o(I, d.currentOffset(), d.currentPosition()), I;
  }
  function f(d, k) {
    const y = d.context(), { lastOffset: v, lastStartLoc: O } = y, I = r(9, v, O);
    return I.value = k.replace(Ko, Yo), d.nextToken(), o(I, d.currentOffset(), d.currentPosition()), I;
  }
  function b(d) {
    const k = d.nextToken(), y = d.context(), { lastOffset: v, lastStartLoc: O } = y, I = r(8, v, O);
    return k.type !== 11 ? (s(d, V.UNEXPECTED_EMPTY_LINKED_MODIFIER, y.lastStartLoc, 0), I.value = "", o(I, v, O), {
      nextConsumeToken: k,
      node: I
    }) : (k.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ye(k)), I.value = k.value || "", o(I, d.currentOffset(), d.currentPosition()), {
      node: I
    });
  }
  function L(d, k) {
    const y = d.context(), v = r(7, y.offset, y.startLoc);
    return v.value = k, o(v, d.currentOffset(), d.currentPosition()), v;
  }
  function S(d) {
    const k = d.context(), y = r(6, k.offset, k.startLoc);
    let v = d.nextToken();
    if (v.type === 8) {
      const O = b(d);
      y.modifier = O.node, v = O.nextConsumeToken || d.nextToken();
    }
    switch (v.type !== 9 && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(v)), v = d.nextToken(), v.type === 2 && (v = d.nextToken()), v.type) {
      case 10:
        v.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(v)), y.key = L(d, v.value || "");
        break;
      case 4:
        v.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(v)), y.key = u(d, v.value || "");
        break;
      case 5:
        v.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(v)), y.key = l(d, v.value || "");
        break;
      case 6:
        v.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(v)), y.key = f(d, v.value || "");
        break;
      default: {
        s(d, V.UNEXPECTED_EMPTY_LINKED_KEY, k.lastStartLoc, 0);
        const O = d.context(), I = r(7, O.offset, O.startLoc);
        return I.value = "", o(I, O.offset, O.startLoc), y.key = I, o(y, O.offset, O.startLoc), {
          nextConsumeToken: v,
          node: y
        };
      }
    }
    return o(y, d.currentOffset(), d.currentPosition()), {
      node: y
    };
  }
  function P(d) {
    const k = d.context(), y = k.currentType === 1 ? d.currentOffset() : k.offset, v = k.currentType === 1 ? k.endLoc : k.startLoc, O = r(2, y, v);
    O.items = [];
    let I = null;
    do {
      const R = I || d.nextToken();
      switch (I = null, R.type) {
        case 0:
          R.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(R)), O.items.push(a(d, R.value || ""));
          break;
        case 5:
          R.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(R)), O.items.push(l(d, R.value || ""));
          break;
        case 4:
          R.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(R)), O.items.push(u(d, R.value || ""));
          break;
        case 6:
          R.value == null && s(d, V.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, ye(R)), O.items.push(f(d, R.value || ""));
          break;
        case 7: {
          const U = S(d);
          O.items.push(U.node), I = U.nextConsumeToken || null;
          break;
        }
      }
    } while (k.currentType !== 13 && k.currentType !== 1);
    const p = k.currentType === 1 ? k.lastOffset : d.currentOffset(), g = k.currentType === 1 ? k.lastEndLoc : d.currentPosition();
    return o(O, p, g), O;
  }
  function $(d, k, y, v) {
    const O = d.context();
    let I = v.items.length === 0;
    const p = r(1, k, y);
    p.cases = [], p.cases.push(v);
    do {
      const g = P(d);
      I || (I = g.items.length === 0), p.cases.push(g);
    } while (O.currentType !== 13);
    return I && s(d, V.MUST_HAVE_MESSAGES_IN_PLURAL, y, 0), o(p, d.currentOffset(), d.currentPosition()), p;
  }
  function w(d) {
    const k = d.context(), { offset: y, startLoc: v } = k, O = P(d);
    return k.currentType === 13 ? O : $(d, y, v, O);
  }
  function E(d) {
    const k = Ho(d, oe({}, e)), y = k.context(), v = r(0, y.offset, y.startLoc);
    return t && v.loc && (v.loc.source = d), v.body = w(k), e.onCacheKey && (v.cacheKey = e.onCacheKey(d)), y.currentType !== 13 && s(k, V.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, d[y.offset] || ""), o(v, k.currentOffset(), k.currentPosition()), v;
  }
  return { parse: E };
}
function ye(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Xo(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function ds(e, t) {
  for (let n = 0; n < e.length; n++)
    Un(e[n], t);
}
function Un(e, t) {
  switch (e.type) {
    case 1:
      ds(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ds(e.items, t);
      break;
    case 6: {
      Un(e.key, t), t.helper(
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
function Jo(e, t = {}) {
  const n = Xo(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Un(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function qo(e) {
  const t = e.body;
  return t.type === 2 ? fs(t) : t.cases.forEach((n) => fs(n)), e;
}
function fs(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const s = e.items[n];
      if (!(s.type === 3 || s.type === 9) || s.value == null)
        break;
      t.push(s.value);
    }
    if (t.length === e.items.length) {
      e.static = jn(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
function Ke(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ke(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        Ke(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        Ke(n[s]);
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
      Ke(t.key), t.k = t.key, delete t.key, t.modifier && (Ke(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Qo(e, t) {
  const { filename: n, breakLineCode: s, needIndent: r } = t, o = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: r,
    indentLevel: 0
  };
  o && e.loc && (a.source = e.loc.source);
  const l = () => a;
  function u(w, E) {
    a.code += w;
  }
  function f(w, E = !0) {
    const d = E ? s : "";
    u(r ? d + "  ".repeat(w) : d);
  }
  function b(w = !0) {
    const E = ++a.indentLevel;
    w && f(E);
  }
  function L(w = !0) {
    const E = --a.indentLevel;
    w && f(E);
  }
  function S() {
    f(a.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: b,
    deindent: L,
    newline: S,
    helper: (w) => `_${w}`,
    needIndent: () => a.needIndent
  };
}
function ea(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Xe(e, t.key), t.modifier ? (e.push(", "), Xe(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ta(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const r = t.items.length;
  for (let o = 0; o < r && (Xe(e, t.items[o]), o !== r - 1); o++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function na(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const r = t.cases.length;
    for (let o = 0; o < r && (Xe(e, t.cases[o]), o !== r - 1); o++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function sa(e, t) {
  t.body ? Xe(e, t.body) : e.push("null");
}
function Xe(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      sa(e, t);
      break;
    case 1:
      na(e, t);
      break;
    case 2:
      ta(e, t);
      break;
    case 6:
      ea(e, t);
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
const ra = (e, t = {}) => {
  const n = D(t.mode) ? t.mode : "normal", s = D(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], l = Qo(e, {
    filename: s,
    breakLineCode: r,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), a.length > 0 && (l.push(`const { ${jn(a.map((b) => `${b}: _${b}`), ", ")} } = ctx`), l.newline()), l.push("return "), Xe(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: f } = l.context();
  return {
    ast: e,
    code: u,
    map: f ? f.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function oa(e, t = {}) {
  const n = oe({}, t), s = !!n.jit, r = !!n.minify, o = n.optimize == null ? !0 : n.optimize, l = Zo(n).parse(e);
  return s ? (o && qo(l), r && Ke(l), { ast: l, code: "" }) : (Jo(l, n), ra(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function aa() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (It().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function ve(e) {
  return B(e) && zn(e) === 0 && (he(e, "b") || he(e, "body"));
}
const lr = ["b", "body"];
function ia(e) {
  return Oe(e, lr);
}
const cr = ["c", "cases"];
function la(e) {
  return Oe(e, cr, []);
}
const ur = ["s", "static"];
function ca(e) {
  return Oe(e, ur);
}
const dr = ["i", "items"];
function ua(e) {
  return Oe(e, dr, []);
}
const fr = ["t", "type"];
function zn(e) {
  return Oe(e, fr);
}
const mr = ["v", "value"];
function St(e, t) {
  const n = Oe(e, mr);
  if (n != null)
    return n;
  throw ft(t);
}
const hr = ["m", "modifier"];
function da(e) {
  return Oe(e, hr);
}
const _r = ["k", "key"];
function fa(e) {
  const t = Oe(e, _r);
  if (t)
    return t;
  throw ft(
    6
    /* NodeTypes.Linked */
  );
}
function Oe(e, t, n) {
  for (let s = 0; s < t.length; s++) {
    const r = t[s];
    if (he(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const pr = [
  ...lr,
  ...cr,
  ...ur,
  ...dr,
  ..._r,
  ...hr,
  ...mr,
  ...fr
];
function ft(e) {
  return new Error(`unhandled node type: ${e}`);
}
function gn(e) {
  return (n) => ma(n, e);
}
function ma(e, t) {
  const n = ia(t);
  if (n == null)
    throw ft(
      0
      /* NodeTypes.Resource */
    );
  if (zn(n) === 1) {
    const o = la(n);
    return e.plural(o.reduce((a, l) => [
      ...a,
      ms(e, l)
    ], []));
  } else
    return ms(e, n);
}
function ms(e, t) {
  const n = ca(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = ua(t).reduce((r, o) => [...r, En(e, o)], []);
    return e.normalize(s);
  }
}
function En(e, t) {
  const n = zn(t);
  switch (n) {
    case 3:
      return St(t, n);
    case 9:
      return St(t, n);
    case 4: {
      const s = t;
      if (he(s, "k") && s.k)
        return e.interpolate(e.named(s.k));
      if (he(s, "key") && s.key)
        return e.interpolate(e.named(s.key));
      throw ft(n);
    }
    case 5: {
      const s = t;
      if (he(s, "i") && se(s.i))
        return e.interpolate(e.list(s.i));
      if (he(s, "index") && se(s.index))
        return e.interpolate(e.list(s.index));
      throw ft(n);
    }
    case 6: {
      const s = t, r = da(s), o = fa(s);
      return e.linked(En(e, o), r ? En(e, r) : void 0, e.type);
    }
    case 7:
      return St(t, n);
    case 8:
      return St(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ha = (e) => e;
let Tt = G();
function _a(e, t = {}) {
  let n = !1;
  const s = t.onError || Wo;
  return t.onError = (r) => {
    n = !0, s(r);
  }, { ...oa(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function pa(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && D(e)) {
    Q(t.warnHtmlMessage) && t.warnHtmlMessage;
    const s = (t.onCacheKey || ha)(e), r = Tt[s];
    if (r)
      return r;
    const { ast: o, detectError: a } = _a(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = gn(o);
    return a ? l : Tt[s] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const s = Tt[n];
      return s || (Tt[n] = gn(e));
    } else
      return gn(e);
  }
}
const ke = {
  INVALID_ARGUMENT: $o,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ga = 24;
function Ce(e) {
  return Gt(e, null, void 0);
}
function Bn(e, t) {
  return t.locale != null ? hs(t.locale) : hs(e.locale);
}
let yn;
function hs(e) {
  if (D(e))
    return e;
  if (J(e)) {
    if (e.resolvedOnce && yn != null)
      return yn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Do(t))
        throw Ce(ke.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return yn = t;
    } else
      throw Ce(ke.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ce(ke.NOT_SUPPORT_LOCALE_TYPE);
}
function ya(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ee(t) ? t : B(t) ? Object.keys(t) : D(t) ? [t] : [n]
  ])];
}
function gr(e, t, n) {
  const s = D(n) ? n : jt, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let o = r.__localeChainCache.get(s);
  if (!o) {
    o = [];
    let a = [n];
    for (; ee(a); )
      a = _s(o, a, t);
    const l = ee(t) || !z(t) ? t : t.default ? t.default : null;
    a = D(l) ? [l] : l, ee(a) && _s(o, a, !1), r.__localeChainCache.set(s, o);
  }
  return o;
}
function _s(e, t, n) {
  let s = !0;
  for (let r = 0; r < t.length && Q(s); r++) {
    const o = t[r];
    D(o) && (s = va(e, t[r], n));
  }
  return s;
}
function va(e, t, n) {
  let s;
  const r = t.split("-");
  do {
    const o = r.join("-");
    s = ba(e, o, n), r.splice(-1, 1);
  } while (r.length && s === !0);
  return s;
}
function ba(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (ee(n) || z(n)) && n[r] && (s = n[r]);
  }
  return s;
}
const Ie = [];
Ie[
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
Ie[
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
Ie[
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
Ie[
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
Ie[
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
Ie[
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
Ie[
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
const wa = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ka(e) {
  return wa.test(e);
}
function Ca(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function La(e) {
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
function Ea(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : ka(t) ? Ca(t) : "*" + t;
}
function Sa(e) {
  const t = [];
  let n = -1, s = 0, r = 0, o, a, l, u, f, b, L;
  const S = [];
  S[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = l : a += l;
  }, S[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, S[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    S[
      0
      /* Actions.APPEND */
    ](), r++;
  }, S[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, s = 4, S[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, a === void 0 || (a = Ea(a), a === !1))
        return !1;
      S[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function P() {
    const $ = e[n + 1];
    if (s === 5 && $ === "'" || s === 6 && $ === '"')
      return n++, l = "\\" + $, S[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, o = e[n], !(o === "\\" && P())) {
      if (u = La(o), L = Ie[s], f = L[u] || L.l || 8, f === 8 || (s = f[0], f[1] !== void 0 && (b = S[f[1]], b && (l = o, b() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const ps = /* @__PURE__ */ new Map();
function Ta(e, t) {
  return B(e) ? e[t] : null;
}
function Na(e, t) {
  if (!B(e))
    return null;
  let n = ps.get(t);
  if (n || (n = Sa(t), n && ps.set(t, n)), !n)
    return null;
  const s = n.length;
  let r = e, o = 0;
  for (; o < s; ) {
    const a = n[o];
    if (pr.includes(a) && ve(r))
      return null;
    const l = r[a];
    if (l === void 0 || J(r))
      return null;
    r = l, o++;
  }
  return r;
}
const Oa = "11.2.2", Kt = -1, jt = "en-US", gs = "", ys = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ia() {
  return {
    upper: (e, t) => t === "text" && D(e) ? e.toUpperCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && D(e) ? e.toLowerCase() : t === "vnode" && B(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && D(e) ? ys(e) : t === "vnode" && B(e) && "__v_isVNode" in e ? ys(e.children) : e
  };
}
let yr;
function Pa(e) {
  yr = e;
}
let vr;
function Ma(e) {
  vr = e;
}
let br;
function Aa(e) {
  br = e;
}
let wr = null;
const vs = (e) => {
  wr = e;
}, Da = () => wr;
let bs = 0;
function Ra(e = {}) {
  const t = J(e.onWarn) ? e.onWarn : To, n = D(e.version) ? e.version : Oa, s = D(e.locale) || J(e.locale) ? e.locale : jt, r = J(s) ? jt : s, o = ee(e.fallbackLocale) || z(e.fallbackLocale) || D(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, a = z(e.messages) ? e.messages : vn(r), l = z(e.datetimeFormats) ? e.datetimeFormats : vn(r), u = z(e.numberFormats) ? e.numberFormats : vn(r), f = oe(G(), e.modifiers, Ia()), b = e.pluralRules || G(), L = J(e.missing) ? e.missing : null, S = Q(e.missingWarn) || xt(e.missingWarn) ? e.missingWarn : !0, P = Q(e.fallbackWarn) || xt(e.fallbackWarn) ? e.fallbackWarn : !0, $ = !!e.fallbackFormat, w = !!e.unresolving, E = J(e.postTranslation) ? e.postTranslation : null, d = z(e.processor) ? e.processor : null, k = Q(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, v = J(e.messageCompiler) ? e.messageCompiler : yr, O = J(e.messageResolver) ? e.messageResolver : vr || Ta, I = J(e.localeFallbacker) ? e.localeFallbacker : br || ya, p = B(e.fallbackContext) ? e.fallbackContext : void 0, g = e, R = B(g.__datetimeFormatters) ? g.__datetimeFormatters : /* @__PURE__ */ new Map(), U = B(g.__numberFormatters) ? g.__numberFormatters : /* @__PURE__ */ new Map(), pe = B(g.__meta) ? g.__meta : {};
  bs++;
  const te = {
    version: n,
    cid: bs,
    locale: s,
    fallbackLocale: o,
    messages: a,
    modifiers: f,
    pluralRules: b,
    missing: L,
    missingWarn: S,
    fallbackWarn: P,
    fallbackFormat: $,
    unresolving: w,
    postTranslation: E,
    processor: d,
    warnHtmlMessage: k,
    escapeParameter: y,
    messageCompiler: v,
    messageResolver: O,
    localeFallbacker: I,
    fallbackContext: p,
    onWarn: t,
    __meta: pe
  };
  return te.datetimeFormats = l, te.numberFormats = u, te.__datetimeFormatters = R, te.__numberFormatters = U, te;
}
const vn = (e) => ({ [e]: G() });
function Vn(e, t, n, s, r) {
  const { missing: o, onWarn: a } = e;
  if (o !== null) {
    const l = o(e, n, t, r);
    return D(l) ? l : t;
  } else
    return t;
}
function ot(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Fa(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function $a(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (Fa(e, t[s]))
      return !0;
  return !1;
}
function ws(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: r, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: l } = e, [u, f, b, L] = Sn(...t), S = Q(b.missingWarn) ? b.missingWarn : e.missingWarn;
  Q(b.fallbackWarn) ? b.fallbackWarn : e.fallbackWarn;
  const P = !!b.part, $ = Bn(e, b), w = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    $
  );
  if (!D(u) || u === "")
    return new Intl.DateTimeFormat($, L).format(f);
  let E = {}, d, k = null;
  const y = "datetime format";
  for (let I = 0; I < w.length && (d = w[I], E = n[d] || {}, k = E[u], !z(k)); I++)
    Vn(e, u, d, S, y);
  if (!z(k) || !D(d))
    return s ? Kt : u;
  let v = `${d}__${u}`;
  Ht(L) || (v = `${v}__${JSON.stringify(L)}`);
  let O = l.get(v);
  return O || (O = new Intl.DateTimeFormat(d, oe({}, k, L)), l.set(v, O)), P ? O.formatToParts(f) : O.format(f);
}
const kr = [
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
function Sn(...e) {
  const [t, n, s, r] = e, o = G();
  let a = G(), l;
  if (D(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw Ce(ke.INVALID_ISO_DATE_ARGUMENT);
    const f = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    l = new Date(f);
    try {
      l.toISOString();
    } catch {
      throw Ce(ke.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Io(t)) {
    if (isNaN(t.getTime()))
      throw Ce(ke.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (se(t))
    l = t;
  else
    throw Ce(ke.INVALID_ARGUMENT);
  return D(n) ? o.key = n : z(n) && Object.keys(n).forEach((u) => {
    kr.includes(u) ? a[u] = n[u] : o[u] = n[u];
  }), D(s) ? o.locale = s : z(s) && (a = s), z(r) && (a = r), [o.key || "", l, o, a];
}
function ks(e, t, n) {
  const s = e;
  for (const r in n) {
    const o = `${t}__${r}`;
    s.__datetimeFormatters.has(o) && s.__datetimeFormatters.delete(o);
  }
}
function Cs(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: r, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: l } = e, [u, f, b, L] = Tn(...t), S = Q(b.missingWarn) ? b.missingWarn : e.missingWarn;
  Q(b.fallbackWarn) ? b.fallbackWarn : e.fallbackWarn;
  const P = !!b.part, $ = Bn(e, b), w = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    $
  );
  if (!D(u) || u === "")
    return new Intl.NumberFormat($, L).format(f);
  let E = {}, d, k = null;
  const y = "number format";
  for (let I = 0; I < w.length && (d = w[I], E = n[d] || {}, k = E[u], !z(k)); I++)
    Vn(e, u, d, S, y);
  if (!z(k) || !D(d))
    return s ? Kt : u;
  let v = `${d}__${u}`;
  Ht(L) || (v = `${v}__${JSON.stringify(L)}`);
  let O = l.get(v);
  return O || (O = new Intl.NumberFormat(d, oe({}, k, L)), l.set(v, O)), P ? O.formatToParts(f) : O.format(f);
}
const Cr = [
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
  const [t, n, s, r] = e, o = G();
  let a = G();
  if (!se(t))
    throw Ce(ke.INVALID_ARGUMENT);
  const l = t;
  return D(n) ? o.key = n : z(n) && Object.keys(n).forEach((u) => {
    Cr.includes(u) ? a[u] = n[u] : o[u] = n[u];
  }), D(s) ? o.locale = s : z(s) && (a = s), z(r) && (a = r), [o.key || "", l, o, a];
}
function Ls(e, t, n) {
  const s = e;
  for (const r in n) {
    const o = `${t}__${r}`;
    s.__numberFormatters.has(o) && s.__numberFormatters.delete(o);
  }
}
const Wa = (e) => e, xa = (e) => "", ja = "text", Ua = (e) => e.length === 0 ? "" : jn(e), za = Ro;
function Es(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ba(e) {
  const t = se(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (se(e.named.count) || se(e.named.n)) ? se(e.named.count) ? e.named.count : se(e.named.n) ? e.named.n : t : t;
}
function Va(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Ha(e = {}) {
  const t = e.locale, n = Ba(e), s = B(e.pluralRules) && D(t) && J(e.pluralRules[t]) ? e.pluralRules[t] : Es, r = B(e.pluralRules) && D(t) && J(e.pluralRules[t]) ? Es : void 0, o = (d) => d[s(n, d.length, r)], a = e.list || [], l = (d) => a[d], u = e.named || G();
  se(e.pluralIndex) && Va(n, u);
  const f = (d) => u[d];
  function b(d, k) {
    const y = J(e.messages) ? e.messages(d, !!k) : B(e.messages) ? e.messages[d] : !1;
    return y || (e.parent ? e.parent.message(d) : xa);
  }
  const L = (d) => e.modifiers ? e.modifiers[d] : Wa, S = z(e.processor) && J(e.processor.normalize) ? e.processor.normalize : Ua, P = z(e.processor) && J(e.processor.interpolate) ? e.processor.interpolate : za, $ = z(e.processor) && D(e.processor.type) ? e.processor.type : ja, E = {
    list: l,
    named: f,
    plural: o,
    linked: (d, ...k) => {
      const [y, v] = k;
      let O = "text", I = "";
      k.length === 1 ? B(y) ? (I = y.modifier || I, O = y.type || O) : D(y) && (I = y || I) : k.length === 2 && (D(y) && (I = y || I), D(v) && (O = v || O));
      const p = b(d, !0)(E), g = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && ee(p) && I ? p[0] : p
      );
      return I ? L(I)(g, O) : g;
    },
    message: b,
    type: $,
    interpolate: P,
    normalize: S,
    values: oe(G(), a, u)
  };
  return E;
}
const Ss = () => "", Le = (e) => J(e);
function Ts(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: r, messageCompiler: o, fallbackLocale: a, messages: l } = e, [u, f] = Nn(...t), b = Q(f.missingWarn) ? f.missingWarn : e.missingWarn, L = Q(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, S = Q(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, P = !!f.resolvedMessage, $ = D(f.default) || Q(f.default) ? Q(f.default) ? o ? u : () => u : f.default : n ? o ? u : () => u : null, w = n || $ != null && (D($) || J($)), E = Bn(e, f);
  S && Ga(f);
  let [d, k, y] = P ? [
    u,
    E,
    l[E] || G()
  ] : Lr(e, u, E, a, L, b), v = d, O = u;
  if (!P && !(D(v) || ve(v) || Le(v)) && w && (v = $, O = v), !P && (!(D(v) || ve(v) || Le(v)) || !D(k)))
    return r ? Kt : u;
  let I = !1;
  const p = () => {
    I = !0;
  }, g = Le(v) ? v : Er(e, u, k, v, O, p);
  if (I)
    return v;
  const R = Za(e, k, y, f), U = Ha(R), pe = Ka(e, g, U);
  let te = s ? s(pe, u) : pe;
  return S && D(te) && (te = Mo(te)), te;
}
function Ga(e) {
  ee(e.list) ? e.list = e.list.map((t) => D(t) ? ls(t) : t) : B(e.named) && Object.keys(e.named).forEach((t) => {
    D(e.named[t]) && (e.named[t] = ls(e.named[t]));
  });
}
function Lr(e, t, n, s, r, o) {
  const { messages: a, onWarn: l, messageResolver: u, localeFallbacker: f } = e, b = f(e, s, n);
  let L = G(), S, P = null;
  const $ = "translate";
  for (let w = 0; w < b.length && (S = b[w], L = a[S] || G(), (P = u(L, t)) === null && (P = L[t]), !(D(P) || ve(P) || Le(P))); w++)
    if (!$a(S, b)) {
      const E = Vn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        S,
        o,
        $
      );
      E !== t && (P = E);
    }
  return [P, S, L];
}
function Er(e, t, n, s, r, o) {
  const { messageCompiler: a, warnHtmlMessage: l } = e;
  if (Le(s)) {
    const f = s;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (a == null) {
    const f = () => s;
    return f.locale = n, f.key = t, f;
  }
  const u = a(s, Ya(e, n, r, s, l, o));
  return u.locale = n, u.key = t, u.source = s, u;
}
function Ka(e, t, n) {
  return t(n);
}
function Nn(...e) {
  const [t, n, s] = e, r = G();
  if (!D(t) && !se(t) && !Le(t) && !ve(t))
    throw Ce(ke.INVALID_ARGUMENT);
  const o = se(t) ? String(t) : (Le(t), t);
  return se(n) ? r.plural = n : D(n) ? r.default = n : z(n) && !Ht(n) ? r.named = n : ee(n) && (r.list = n), se(s) ? r.plural = s : D(s) ? r.default = s : z(s) && oe(r, s), [o, r];
}
function Ya(e, t, n, s, r, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => No(t, n, a)
  };
}
function Za(e, t, n, s) {
  const { modifiers: r, pluralRules: o, messageResolver: a, fallbackLocale: l, fallbackWarn: u, missingWarn: f, fallbackContext: b } = e, S = {
    locale: t,
    modifiers: r,
    pluralRules: o,
    messages: (P, $) => {
      let w = a(n, P);
      if (w == null && (b || $)) {
        const [, , E] = Lr(
          b || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          P,
          t,
          l,
          u,
          f
        );
        w = a(E, P);
      }
      if (D(w) || ve(w)) {
        let E = !1;
        const k = Er(e, P, t, w, P, () => {
          E = !0;
        });
        return E ? Ss : k;
      } else return Le(w) ? w : Ss;
    }
  };
  return e.processor && (S.processor = e.processor), s.list && (S.list = s.list), s.named && (S.named = s.named), se(s.plural) && (S.pluralIndex = s.plural), S;
}
aa();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Xa = "11.2.2";
function Ja() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (It().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (It().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (It().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Je = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ga,
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
function mt(e, ...t) {
  return Gt(e, null, void 0);
}
const On = /* @__PURE__ */ xe("__translateVNode"), In = /* @__PURE__ */ xe("__datetimeParts"), Pn = /* @__PURE__ */ xe("__numberParts"), qa = xe("__setPluralRules"), Sr = /* @__PURE__ */ xe("__injectWithOption"), Mn = /* @__PURE__ */ xe("__dispose");
function ht(e) {
  if (!B(e) || ve(e))
    return e;
  for (const t in e)
    if (he(e, t))
      if (!t.includes("."))
        B(e[t]) && ht(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let r = e, o = !1;
        for (let a = 0; a < s; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in r || (r[n[a]] = G()), !B(r[n[a]])) {
            o = !0;
            break;
          }
          r = r[n[a]];
        }
        if (o || (ve(r) ? pr.includes(n[s]) || delete e[t] : (r[n[s]] = e[t], delete e[t])), !ve(r)) {
          const a = r[n[s]];
          B(a) && ht(a);
        }
      }
  return e;
}
function Tr(e, t) {
  const { messages: n, __i18n: s, messageResolver: r, flatJson: o } = t, a = z(n) ? n : ee(s) ? G() : { [e]: G() };
  if (ee(s) && s.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: u, resource: f } = l;
      u ? (a[u] = a[u] || G(), Pt(f, a[u])) : Pt(f, a);
    } else
      D(l) && Pt(JSON.parse(l), a);
  }), r == null && o)
    for (const l in a)
      he(a, l) && ht(a[l]);
  return a;
}
function Qa(e) {
  return e.type;
}
function ei(e, t, n) {
  let s = B(t.messages) ? t.messages : G();
  "__i18nGlobal" in n && (s = Tr(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(s);
  r.length && r.forEach((o) => {
    e.mergeLocaleMessage(o, s[o]);
  });
  {
    if (B(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (B(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Ns(e) {
  return M(co, null, e, 0);
}
function Nr() {
  return "currentInstance" in hn ? hn["currentInstance"] : hn.getCurrentInstance();
}
const Os = () => [], ti = () => !1;
let Is = 0;
function Ps(e) {
  return (t, n, s, r) => e(n, s, Nr() || void 0, r);
}
function ni(e = {}) {
  const { __root: t, __injectWithOption: n } = e, s = t === void 0, r = e.flatJson, o = as ? X : lo;
  let a = Q(e.inheritLocale) ? e.inheritLocale : !0;
  const l = o(
    // prettier-ignore
    t && a ? t.locale.value : D(e.locale) ? e.locale : jt
  ), u = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : D(e.fallbackLocale) || ee(e.fallbackLocale) || z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), f = o(Tr(l.value, e)), b = o(z(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), L = o(z(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let S = t ? t.missingWarn : Q(e.missingWarn) || xt(e.missingWarn) ? e.missingWarn : !0, P = t ? t.fallbackWarn : Q(e.fallbackWarn) || xt(e.fallbackWarn) ? e.fallbackWarn : !0, $ = t ? t.fallbackRoot : Q(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, E = J(e.missing) ? e.missing : null, d = J(e.missing) ? Ps(e.missing) : null, k = J(e.postTranslation) ? e.postTranslation : null, y = t ? t.warnHtmlMessage : Q(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter;
  const O = t ? t.modifiers : z(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, p;
  p = (() => {
    s && vs(null);
    const m = {
      version: Xa,
      locale: l.value,
      fallbackLocale: u.value,
      messages: f.value,
      modifiers: O,
      pluralRules: I,
      missing: d === null ? void 0 : d,
      missingWarn: S,
      fallbackWarn: P,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: k === null ? void 0 : k,
      warnHtmlMessage: y,
      escapeParameter: v,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    m.datetimeFormats = b.value, m.numberFormats = L.value, m.__datetimeFormatters = z(p) ? p.__datetimeFormatters : void 0, m.__numberFormatters = z(p) ? p.__numberFormatters : void 0;
    const T = Ra(m);
    return s && vs(T), T;
  })(), ot(p, l.value, u.value);
  function R() {
    return [
      l.value,
      u.value,
      f.value,
      b.value,
      L.value
    ];
  }
  const U = x({
    get: () => l.value,
    set: (m) => {
      p.locale = m, l.value = m;
    }
  }), pe = x({
    get: () => u.value,
    set: (m) => {
      p.fallbackLocale = m, u.value = m, ot(p, l.value, m);
    }
  }), te = x(() => f.value), qt = /* @__PURE__ */ x(() => b.value), Qt = /* @__PURE__ */ x(() => L.value);
  function en() {
    return J(k) ? k : null;
  }
  function tn(m) {
    k = m, p.postTranslation = m;
  }
  function nn() {
    return E;
  }
  function sn(m) {
    m !== null && (d = Ps(m)), E = m, p.missing = d;
  }
  const be = (m, T, K, q, Pe, Ct) => {
    R();
    let Ve;
    try {
      s || (p.fallbackContext = t ? Da() : void 0), Ve = m(p);
    } finally {
      s || (p.fallbackContext = void 0);
    }
    if (K !== "translate exists" && // for not `te` (e.g `t`)
    se(Ve) && Ve === Kt || K === "translate exists" && !Ve) {
      const [io, of] = T();
      return t && $ ? q(t) : Pe(io);
    } else {
      if (Ct(Ve))
        return Ve;
      throw mt(Je.UNEXPECTED_RETURN_TYPE);
    }
  };
  function vt(...m) {
    return be((T) => Reflect.apply(Ts, null, [T, ...m]), () => Nn(...m), "translate", (T) => Reflect.apply(T.t, T, [...m]), (T) => T, (T) => D(T));
  }
  function bt(...m) {
    const [T, K, q] = m;
    if (q && !B(q))
      throw mt(Je.INVALID_ARGUMENT);
    return vt(T, K, oe({ resolvedMessage: !0 }, q || {}));
  }
  function rn(...m) {
    return be((T) => Reflect.apply(ws, null, [T, ...m]), () => Sn(...m), "datetime format", (T) => Reflect.apply(T.d, T, [...m]), () => gs, (T) => D(T) || ee(T));
  }
  function on(...m) {
    return be((T) => Reflect.apply(Cs, null, [T, ...m]), () => Tn(...m), "number format", (T) => Reflect.apply(T.n, T, [...m]), () => gs, (T) => D(T) || ee(T));
  }
  function an(m) {
    return m.map((T) => D(T) || se(T) || Q(T) ? Ns(String(T)) : T);
  }
  const ln = {
    normalize: an,
    interpolate: (m) => m,
    type: "vnode"
  };
  function cn(...m) {
    return be((T) => {
      let K;
      const q = T;
      try {
        q.processor = ln, K = Reflect.apply(Ts, null, [q, ...m]);
      } finally {
        q.processor = null;
      }
      return K;
    }, () => Nn(...m), "translate", (T) => T[On](...m), (T) => [Ns(T)], (T) => ee(T));
  }
  function wt(...m) {
    return be((T) => Reflect.apply(Cs, null, [T, ...m]), () => Tn(...m), "number format", (T) => T[Pn](...m), Os, (T) => D(T) || ee(T));
  }
  function un(...m) {
    return be((T) => Reflect.apply(ws, null, [T, ...m]), () => Sn(...m), "datetime format", (T) => T[In](...m), Os, (T) => D(T) || ee(T));
  }
  function kt(m) {
    I = m, p.pluralRules = I;
  }
  function dn(m, T) {
    return be(() => {
      if (!m)
        return !1;
      const K = D(T) ? T : l.value, q = ze(K), Pe = p.messageResolver(q, m);
      return ve(Pe) || Le(Pe) || D(Pe);
    }, () => [m], "translate exists", (K) => Reflect.apply(K.te, K, [m, T]), ti, (K) => Q(K));
  }
  function fn(m) {
    let T = null;
    const K = gr(p, u.value, l.value);
    for (let q = 0; q < K.length; q++) {
      const Pe = f.value[K[q]] || {}, Ct = p.messageResolver(Pe, m);
      if (Ct != null) {
        T = Ct;
        break;
      }
    }
    return T;
  }
  function st(m) {
    const T = fn(m);
    return T ?? (t ? t.tm(m) || {} : {});
  }
  function ze(m) {
    return f.value[m] || {};
  }
  function Be(m, T) {
    if (r) {
      const K = { [m]: T };
      for (const q in K)
        he(K, q) && ht(K[q]);
      T = K[m];
    }
    f.value[m] = T, p.messages = f.value;
  }
  function rt(m, T) {
    f.value[m] = f.value[m] || {};
    const K = { [m]: T };
    if (r)
      for (const q in K)
        he(K, q) && ht(K[q]);
    T = K[m], Pt(T, f.value[m]), p.messages = f.value;
  }
  function mn(m) {
    return b.value[m] || {};
  }
  function i(m, T) {
    b.value[m] = T, p.datetimeFormats = b.value, ks(p, m, T);
  }
  function c(m, T) {
    b.value[m] = oe(b.value[m] || {}, T), p.datetimeFormats = b.value, ks(p, m, T);
  }
  function C(m) {
    return L.value[m] || {};
  }
  function A(m, T) {
    L.value[m] = T, p.numberFormats = L.value, Ls(p, m, T);
  }
  function Z(m, T) {
    L.value[m] = oe(L.value[m] || {}, T), p.numberFormats = L.value, Ls(p, m, T);
  }
  Is++, t && as && (Re(t.locale, (m) => {
    a && (l.value = m, p.locale = m, ot(p, l.value, u.value));
  }), Re(t.fallbackLocale, (m) => {
    a && (u.value = m, p.fallbackLocale = m, ot(p, l.value, u.value));
  }));
  const W = {
    id: Is,
    locale: U,
    fallbackLocale: pe,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(m) {
      a = m, m && t && (l.value = t.locale.value, u.value = t.fallbackLocale.value, ot(p, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: te,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return S;
    },
    set missingWarn(m) {
      S = m, p.missingWarn = S;
    },
    get fallbackWarn() {
      return P;
    },
    set fallbackWarn(m) {
      P = m, p.fallbackWarn = P;
    },
    get fallbackRoot() {
      return $;
    },
    set fallbackRoot(m) {
      $ = m;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(m) {
      w = m, p.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(m) {
      y = m, p.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return v;
    },
    set escapeParameter(m) {
      v = m, p.escapeParameter = m;
    },
    t: vt,
    getLocaleMessage: ze,
    setLocaleMessage: Be,
    mergeLocaleMessage: rt,
    getPostTranslationHandler: en,
    setPostTranslationHandler: tn,
    getMissingHandler: nn,
    setMissingHandler: sn,
    [qa]: kt
  };
  return W.datetimeFormats = qt, W.numberFormats = Qt, W.rt = bt, W.te = dn, W.tm = st, W.d = rn, W.n = on, W.getDateTimeFormat = mn, W.setDateTimeFormat = i, W.mergeDateTimeFormat = c, W.getNumberFormat = C, W.setNumberFormat = A, W.mergeNumberFormat = Z, W[Sr] = n, W[On] = cn, W[In] = un, W[Pn] = wt, W;
}
const Hn = {
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
function si({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, r) => [
    ...s,
    // prettier-ignore
    ...r.type === yt ? r.children : [r]
  ], []) : t.reduce((n, s) => {
    const r = e[s];
    return r && (n[s] = r()), n;
  }, G());
}
function Or() {
  return yt;
}
oe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => se(e) || !isNaN(e)
  }
}, Hn);
function ri(e) {
  return ee(e) && !D(e[0]);
}
function Ir(e, t, n, s) {
  const { slots: r, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let l = G();
    e.locale && (a.locale = e.locale), D(e.format) ? a.key = e.format : B(e.format) && (D(e.format.key) && (a.key = e.format.key), l = Object.keys(e.format).reduce((S, P) => n.includes(P) ? oe(G(), S, { [P]: e.format[P] }) : S, G()));
    const u = s(e.value, a, l);
    let f = [a.key];
    ee(u) ? f = u.map((S, P) => {
      const $ = r[S.type], w = $ ? $({ [S.type]: S.value, index: P, parts: u }) : [S.value];
      return ri(w) && (w[0].key = `${S.type}-${P}`), w;
    }) : D(u) && (f = [u]);
    const b = oe(G(), o), L = D(e.tag) || B(e.tag) ? e.tag : Or();
    return er(L, b, f);
  };
}
oe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Hn);
const oi = /* @__PURE__ */ xe("global-vue-i18n");
function Yt(e = {}) {
  const t = Nr();
  if (t == null)
    throw mt(Je.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw mt(Je.NOT_INSTALLED);
  const n = ai(t), s = li(n), r = Qa(t), o = ii(e, r);
  if (o === "global")
    return ei(s, e, r), s;
  if (o === "parent") {
    let u = ci(n, t, e.__useComponent);
    return u == null && (u = s), u;
  }
  const a = n;
  let l = a.__getInstance(t);
  if (l == null) {
    const u = oe({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), s && (u.__root = s), l = ni(u), a.__composerExtend && (l[Mn] = a.__composerExtend(l)), di(a, t, l), a.__setInstance(t, l);
  }
  return l;
}
function ai(e) {
  const t = Ne(e.isCE ? oi : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw mt(e.isCE ? Je.NOT_INSTALLED_WITH_PROVIDE : Je.UNEXPECTED_ERROR);
  return t;
}
function ii(e, t) {
  return Ht(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function li(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function ci(e, t, n = !1) {
  let s = null;
  const r = t.root;
  let o = ui(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      s = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = a.__getInstance(o);
      l != null && (s = l.__composer, n && s && !s[Sr] && (s = null));
    }
    if (s != null || r === o)
      break;
    o = o.parent;
  }
  return s;
}
function ui(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function di(e, t, n) {
  gt(() => {
  }, t), Qs(() => {
    const s = n;
    e.__deleteInstance(t);
    const r = s[Mn];
    r && (r(), delete s[Mn]);
  }, t);
}
oe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Hn);
Ja();
Pa(pa);
Ma(Na);
Aa(gr);
const Pr = Symbol(), Mt = "el", fi = "is-", Me = (e, t, n, s, r) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), s && (o += `__${s}`), r && (o += `--${r}`), o;
}, Mr = Symbol("namespaceContextKey"), mi = (e) => {
  const t = e || (Ye() ? Ne(Mr, X(Mt)) : X(Mt));
  return x(() => h(t) || Mt);
}, Gn = (e, t) => {
  const n = mi(t);
  return {
    namespace: n,
    b: (w = "") => Me(n.value, e, w, "", ""),
    e: (w) => w ? Me(n.value, e, "", w, "") : "",
    m: (w) => w ? Me(n.value, e, "", "", w) : "",
    be: (w, E) => w && E ? Me(n.value, e, w, E, "") : "",
    em: (w, E) => w && E ? Me(n.value, e, "", w, E) : "",
    bm: (w, E) => w && E ? Me(n.value, e, w, "", E) : "",
    bem: (w, E, d) => w && E && d ? Me(n.value, e, w, E, d) : "",
    is: (w, ...E) => {
      const d = E.length >= 1 ? E[0] : !0;
      return w && d ? `${fi}${w}` : "";
    },
    cssVar: (w) => {
      const E = {};
      for (const d in w)
        w[d] && (E[`--${n.value}-${d}`] = w[d]);
      return E;
    },
    cssVarName: (w) => `--${n.value}-${w}`,
    cssVarBlock: (w) => {
      const E = {};
      for (const d in w)
        w[d] && (E[`--${n.value}-${e}-${d}`] = w[d]);
      return E;
    },
    cssVarBlockName: (w) => `--${n.value}-${e}-${w}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const hi = Object.prototype.hasOwnProperty, Ms = (e, t) => hi.call(e, t), _t = (e) => typeof e == "function", Fe = (e) => typeof e == "string", Ar = (e) => e !== null && typeof e == "object";
var _i = typeof global == "object" && global && global.Object === Object && global, pi = typeof self == "object" && self && self.Object === Object && self, Kn = _i || pi || Function("return this")(), qe = Kn.Symbol, Dr = Object.prototype, gi = Dr.hasOwnProperty, yi = Dr.toString, at = qe ? qe.toStringTag : void 0;
function vi(e) {
  var t = gi.call(e, at), n = e[at];
  try {
    e[at] = void 0;
    var s = !0;
  } catch {
  }
  var r = yi.call(e);
  return s && (t ? e[at] = n : delete e[at]), r;
}
var bi = Object.prototype, wi = bi.toString;
function ki(e) {
  return wi.call(e);
}
var Ci = "[object Null]", Li = "[object Undefined]", As = qe ? qe.toStringTag : void 0;
function Rr(e) {
  return e == null ? e === void 0 ? Li : Ci : As && As in Object(e) ? vi(e) : ki(e);
}
function Ei(e) {
  return e != null && typeof e == "object";
}
var Si = "[object Symbol]";
function Yn(e) {
  return typeof e == "symbol" || Ei(e) && Rr(e) == Si;
}
function Ti(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, r = Array(s); ++n < s; )
    r[n] = t(e[n], n, e);
  return r;
}
var Zn = Array.isArray, Ds = qe ? qe.prototype : void 0, Rs = Ds ? Ds.toString : void 0;
function Fr(e) {
  if (typeof e == "string")
    return e;
  if (Zn(e))
    return Ti(e, Fr) + "";
  if (Yn(e))
    return Rs ? Rs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $r(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ni = "[object AsyncFunction]", Oi = "[object Function]", Ii = "[object GeneratorFunction]", Pi = "[object Proxy]";
function Mi(e) {
  if (!$r(e))
    return !1;
  var t = Rr(e);
  return t == Oi || t == Ii || t == Ni || t == Pi;
}
var bn = Kn["__core-js_shared__"], Fs = function() {
  var e = /[^.]+$/.exec(bn && bn.keys && bn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ai(e) {
  return !!Fs && Fs in e;
}
var Di = Function.prototype, Ri = Di.toString;
function Fi(e) {
  if (e != null) {
    try {
      return Ri.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $i = /[\\^$.*+?()[\]{}|]/g, Wi = /^\[object .+?Constructor\]$/, xi = Function.prototype, ji = Object.prototype, Ui = xi.toString, zi = ji.hasOwnProperty, Bi = RegExp(
  "^" + Ui.call(zi).replace($i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vi(e) {
  if (!$r(e) || Ai(e))
    return !1;
  var t = Mi(e) ? Bi : Wi;
  return t.test(Fi(e));
}
function Hi(e, t) {
  return e?.[t];
}
function Wr(e, t) {
  var n = Hi(e, t);
  return Vi(n) ? n : void 0;
}
function Gi(e, t) {
  return e === t || e !== e && t !== t;
}
var Ki = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Yi = /^\w*$/;
function Zi(e, t) {
  if (Zn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Yn(e) ? !0 : Yi.test(e) || !Ki.test(e) || t != null && e in Object(t);
}
var pt = Wr(Object, "create");
function Xi() {
  this.__data__ = pt ? pt(null) : {}, this.size = 0;
}
function Ji(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qi = "__lodash_hash_undefined__", Qi = Object.prototype, el = Qi.hasOwnProperty;
function tl(e) {
  var t = this.__data__;
  if (pt) {
    var n = t[e];
    return n === qi ? void 0 : n;
  }
  return el.call(t, e) ? t[e] : void 0;
}
var nl = Object.prototype, sl = nl.hasOwnProperty;
function rl(e) {
  var t = this.__data__;
  return pt ? t[e] !== void 0 : sl.call(t, e);
}
var ol = "__lodash_hash_undefined__";
function al(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = pt && t === void 0 ? ol : t, this;
}
function $e(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
$e.prototype.clear = Xi;
$e.prototype.delete = Ji;
$e.prototype.get = tl;
$e.prototype.has = rl;
$e.prototype.set = al;
function il() {
  this.__data__ = [], this.size = 0;
}
function Zt(e, t) {
  for (var n = e.length; n--; )
    if (Gi(e[n][0], t))
      return n;
  return -1;
}
var ll = Array.prototype, cl = ll.splice;
function ul(e) {
  var t = this.__data__, n = Zt(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : cl.call(t, n, 1), --this.size, !0;
}
function dl(e) {
  var t = this.__data__, n = Zt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function fl(e) {
  return Zt(this.__data__, e) > -1;
}
function ml(e, t) {
  var n = this.__data__, s = Zt(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function tt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
tt.prototype.clear = il;
tt.prototype.delete = ul;
tt.prototype.get = dl;
tt.prototype.has = fl;
tt.prototype.set = ml;
var hl = Wr(Kn, "Map");
function _l() {
  this.size = 0, this.__data__ = {
    hash: new $e(),
    map: new (hl || tt)(),
    string: new $e()
  };
}
function pl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xt(e, t) {
  var n = e.__data__;
  return pl(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function gl(e) {
  var t = Xt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function yl(e) {
  return Xt(this, e).get(e);
}
function vl(e) {
  return Xt(this, e).has(e);
}
function bl(e, t) {
  var n = Xt(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function je(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
je.prototype.clear = _l;
je.prototype.delete = gl;
je.prototype.get = yl;
je.prototype.has = vl;
je.prototype.set = bl;
var wl = "Expected a function";
function Xn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(wl);
  var n = function() {
    var s = arguments, r = t ? t.apply(this, s) : s[0], o = n.cache;
    if (o.has(r))
      return o.get(r);
    var a = e.apply(this, s);
    return n.cache = o.set(r, a) || o, a;
  };
  return n.cache = new (Xn.Cache || je)(), n;
}
Xn.Cache = je;
var kl = 500;
function Cl(e) {
  var t = Xn(e, function(s) {
    return n.size === kl && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Ll = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, El = /\\(\\)?/g, Sl = Cl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ll, function(n, s, r, o) {
    t.push(r ? o.replace(El, "$1") : s || n);
  }), t;
});
function Tl(e) {
  return e == null ? "" : Fr(e);
}
function Nl(e, t) {
  return Zn(e) ? e : Zi(e, t) ? [e] : Sl(Tl(e));
}
function Ol(e) {
  if (typeof e == "string" || Yn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Il(e, t) {
  t = Nl(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Ol(t[n++])];
  return n && n == s ? e : void 0;
}
function Pl(e, t, n) {
  var s = e == null ? void 0 : Il(e, t);
  return s === void 0 ? n : s;
}
function Ml(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var r = e[t];
    s[r[0]] = r[1];
  }
  return s;
}
const xr = (e) => e === void 0, $s = (e) => typeof e == "boolean", We = (e) => typeof e == "number", An = (e) => typeof Element > "u" ? !1 : e instanceof Element, Al = (e) => Fe(e) ? !Number.isNaN(Number(e)) : !1;
var Ws;
const Ue = typeof window < "u", Dl = (e) => typeof e == "string", Rl = () => {
};
Ue && ((Ws = window?.navigator) != null && Ws.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Jn(e) {
  return typeof e == "function" ? e() : h(e);
}
function Fl(e) {
  return e;
}
function qn(e) {
  return fo() ? (mo(e), !0) : !1;
}
function $l(e, t = !0) {
  Ye() ? gt(e) : t ? e() : tr(e);
}
function jr(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, r = X(!1);
  let o = null;
  function a() {
    o && (clearTimeout(o), o = null);
  }
  function l() {
    r.value = !1, a();
  }
  function u(...f) {
    a(), r.value = !0, o = setTimeout(() => {
      r.value = !1, o = null, e(...f);
    }, Jn(t));
  }
  return s && (r.value = !0, Ue && u()), qn(l), {
    isPending: uo(r),
    start: u,
    stop: l
  };
}
function Ur(e) {
  var t;
  const n = Jn(e);
  return (t = n?.$el) != null ? t : n;
}
const zr = Ue ? window : void 0;
function Br(...e) {
  let t, n, s, r;
  if (Dl(e[0]) || Array.isArray(e[0]) ? ([n, s, r] = e, t = zr) : [t, n, s, r] = e, !t)
    return Rl;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], a = () => {
    o.forEach((b) => b()), o.length = 0;
  }, l = (b, L, S, P) => (b.addEventListener(L, S, P), () => b.removeEventListener(L, S, P)), u = Re(() => [Ur(t), Jn(r)], ([b, L]) => {
    a(), b && o.push(...n.flatMap((S) => s.map((P) => l(b, S, P, L))));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), a();
  };
  return qn(f), f;
}
function Wl(e, t = !1) {
  const n = X(), s = () => n.value = !!e();
  return s(), $l(s, t), n;
}
const xs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, js = "__vueuse_ssr_handlers__";
xs[js] = xs[js] || {};
var Us = Object.getOwnPropertySymbols, xl = Object.prototype.hasOwnProperty, jl = Object.prototype.propertyIsEnumerable, Ul = (e, t) => {
  var n = {};
  for (var s in e)
    xl.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Us)
    for (var s of Us(e))
      t.indexOf(s) < 0 && jl.call(e, s) && (n[s] = e[s]);
  return n;
};
function zl(e, t, n = {}) {
  const s = n, { window: r = zr } = s, o = Ul(s, ["window"]);
  let a;
  const l = Wl(() => r && "ResizeObserver" in r), u = () => {
    a && (a.disconnect(), a = void 0);
  }, f = Re(() => Ur(e), (L) => {
    u(), l.value && r && L && (a = new ResizeObserver(t), a.observe(L, o));
  }, { immediate: !0, flush: "post" }), b = () => {
    u(), f();
  };
  return qn(b), {
    isSupported: l,
    stop: b
  };
}
var zs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(zs || (zs = {}));
var Bl = Object.defineProperty, Bs = Object.getOwnPropertySymbols, Vl = Object.prototype.hasOwnProperty, Hl = Object.prototype.propertyIsEnumerable, Vs = (e, t, n) => t in e ? Bl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Gl = (e, t) => {
  for (var n in t || (t = {}))
    Vl.call(t, n) && Vs(e, n, t[n]);
  if (Bs)
    for (var n of Bs(t))
      Hl.call(t, n) && Vs(e, n, t[n]);
  return e;
};
const Kl = {
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
Gl({
  linear: Fl
}, Kl);
const Hs = {
  current: 0
}, Gs = X(0), Vr = 2e3, Ks = Symbol("elZIndexContextKey"), Hr = Symbol("zIndexContextKey"), Yl = (e) => {
  const t = Ye() ? Ne(Ks, Hs) : Hs, n = e || (Ye() ? Ne(Hr, void 0) : void 0), s = x(() => {
    const a = h(n);
    return We(a) ? a : Vr;
  }), r = x(() => s.value + Gs.value), o = () => (t.current++, Gs.value = t.current, r.value);
  return !Ue && Ne(Ks), {
    initialZIndex: s,
    currentZIndex: r,
    nextZIndex: o
  };
};
var Zl = {
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
const Xl = (e) => (t, n) => Jl(t, n, h(e)), Jl = (e, t, n) => Pl(n, e, e).replace(/\{(\w+)\}/g, (s, r) => {
  var o;
  return `${(o = t?.[r]) != null ? o : `{${r}}`}`;
}), ql = (e) => {
  const t = x(() => h(e).name), n = ho(e) ? e : X(e);
  return {
    lang: t,
    locale: n,
    t: Xl(e)
  };
}, Gr = Symbol("localeContextKey"), Ql = (e) => {
  const t = e || Ne(Gr, X());
  return ql(x(() => t.value || Zl));
}, Kr = "__epPropKey", ce = (e) => e, ec = (e) => Ar(e) && !!e[Kr], Yr = (e, t) => {
  if (!Ar(e) || ec(e))
    return e;
  const { values: n, required: s, default: r, type: o, validator: a } = e, u = {
    type: o,
    required: !!s,
    validator: n || a ? (f) => {
      let b = !1, L = [];
      if (n && (L = Array.from(n), Ms(e, "default") && L.push(r), b || (b = L.includes(f))), a && (b || (b = a(f))), !b && L.length > 0) {
        const S = [...new Set(L)].map((P) => JSON.stringify(P)).join(", ");
        _o(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${S}], got value ${JSON.stringify(f)}.`);
      }
      return b;
    } : void 0,
    [Kr]: !0
  };
  return Ms(e, "default") && (u.default = r), u;
}, nt = (e) => Ml(Object.entries(e).map(([t, n]) => [
  t,
  Yr(n, t)
])), tc = ["", "default", "small", "large"], nc = Yr({
  type: String,
  values: tc,
  required: !1
}), sc = Symbol("size"), rc = Symbol("emptyValuesContextKey"), oc = nt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => _t(e) ? !e() : !e
  }
}), Ys = (e) => Object.keys(e), Ut = X();
function Zr(e, t = void 0) {
  return Ye() ? Ne(Pr, Ut) : Ut;
}
function Xr(e, t) {
  const n = Zr(), s = Gn(e, x(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Mt;
  })), r = Ql(x(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), o = Yl(x(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Vr;
  })), a = x(() => {
    var l;
    return h(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Jr(x(() => h(n) || {})), {
    ns: s,
    locale: r,
    zIndex: o,
    size: a
  };
}
const Jr = (e, t, n = !1) => {
  var s;
  const r = !!Ye(), o = r ? Zr() : void 0, a = (s = void 0) != null ? s : r ? po : void 0;
  if (!a)
    return;
  const l = x(() => {
    const u = h(e);
    return o?.value ? ac(o.value, u) : u;
  });
  return a(Pr, l), a(Gr, x(() => l.value.locale)), a(Mr, x(() => l.value.namespace)), a(Hr, x(() => l.value.zIndex)), a(sc, {
    size: x(() => l.value.size || "")
  }), a(rc, x(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Ut.value) && (Ut.value = l.value), l;
}, ac = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ys(e), ...Ys(t)])], s = {};
  for (const r of n)
    s[r] = t[r] !== void 0 ? t[r] : e[r];
  return s;
};
var Jt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
};
function Dn(e, t = "px") {
  if (!e)
    return "";
  if (We(e) || Al(e))
    return `${e}${t}`;
  if (Fe(e))
    return e;
}
const qr = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Qr = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ic = nt({
  size: {
    type: ce([Number, String])
  },
  color: {
    type: String
  }
}), lc = re({
  name: "ElIcon",
  inheritAttrs: !1
}), cc = /* @__PURE__ */ re({
  ...lc,
  props: ic,
  setup(e) {
    const t = e, n = Gn("icon"), s = x(() => {
      const { size: r, color: o } = t;
      return !r && !o ? {} : {
        fontSize: xr(r) ? void 0 : Dn(r),
        "--color": o
      };
    });
    return (r, o) => (j(), Y("i", go({
      class: h(n).b(),
      style: h(s)
    }, r.$attrs), [
      Ze(r.$slots, "default")
    ], 16));
  }
});
var uc = /* @__PURE__ */ Jt(cc, [["__file", "icon.vue"]]);
const zt = qr(uc);
/*! Element Plus Icons Vue v2.3.1 */
var dc = /* @__PURE__ */ re({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (j(), Y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), fc = dc, mc = /* @__PURE__ */ re({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (j(), Y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), eo = mc, hc = /* @__PURE__ */ re({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (j(), Y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), _c = hc, pc = /* @__PURE__ */ re({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (j(), Y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), gc = pc, yc = /* @__PURE__ */ re({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (j(), Y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      _("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), vc = yc;
const to = ce([
  String,
  Object,
  Function
]), bc = {
  Close: eo
}, wc = {
  Close: eo
}, Bt = {
  success: gc,
  warning: vc,
  error: fc,
  info: _c
}, kc = (e) => e, At = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Cc = nt({
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
    type: ce([String, Object, Array])
  },
  offset: {
    type: ce(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Lc = re({
  name: "ElBadge"
}), Ec = /* @__PURE__ */ re({
  ...Lc,
  props: Cc,
  setup(e, { expose: t }) {
    const n = e, s = Gn("badge"), r = x(() => n.isDot ? "" : We(n.value) && We(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = x(() => {
      var a, l, u, f, b;
      return [
        {
          backgroundColor: n.color,
          marginRight: Dn(-((l = (a = n.offset) == null ? void 0 : a[0]) != null ? l : 0)),
          marginTop: Dn((f = (u = n.offset) == null ? void 0 : u[1]) != null ? f : 0)
        },
        (b = n.badgeStyle) != null ? b : {}
      ];
    });
    return t({
      content: r
    }), (a, l) => (j(), Y("div", {
      class: ne(h(s).b())
    }, [
      Ze(a.$slots, "default"),
      M(Fn, {
        name: `${h(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: De(() => [
          ue(_("sup", {
            class: ne([
              h(s).e("content"),
              h(s).em("content", a.type),
              h(s).is("fixed", !!a.$slots.default),
              h(s).is("dot", a.isDot),
              h(s).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Rt(h(o))
          }, [
            Ze(a.$slots, "content", { value: h(r) }, () => [
              Ae(F(h(r)), 1)
            ])
          ], 6), [
            [Ft, !a.hidden && (h(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Sc = /* @__PURE__ */ Jt(Ec, [["__file", "badge.vue"]]);
const Tc = qr(Sc), Nc = nt({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ce(Object)
  },
  size: nc,
  button: {
    type: ce(Object)
  },
  experimentalFeatures: {
    type: ce(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ce(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...oc
}), fe = {};
re({
  name: "ElConfigProvider",
  props: Nc,
  setup(e, { slots: t }) {
    Re(() => e.message, (s) => {
      Object.assign(fe, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Jr(e);
    return () => Ze(t, "default", { config: n?.value });
  }
});
const no = ["success", "info", "warning", "error"], ae = kc({
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
  appendTo: Ue ? document.body : void 0
}), Oc = nt({
  customClass: {
    type: String,
    default: ae.customClass
  },
  center: {
    type: Boolean,
    default: ae.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: ae.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: ae.duration
  },
  icon: {
    type: to,
    default: ae.icon
  },
  id: {
    type: String,
    default: ae.id
  },
  message: {
    type: ce([
      String,
      Object,
      Function
    ]),
    default: ae.message
  },
  onClose: {
    type: ce(Function),
    default: ae.onClose
  },
  showClose: {
    type: Boolean,
    default: ae.showClose
  },
  type: {
    type: String,
    values: no,
    default: ae.type
  },
  plain: {
    type: Boolean,
    default: ae.plain
  },
  offset: {
    type: Number,
    default: ae.offset
  },
  zIndex: {
    type: Number,
    default: ae.zIndex
  },
  grouping: {
    type: Boolean,
    default: ae.grouping
  },
  repeatNum: {
    type: Number,
    default: ae.repeatNum
  }
}), Ic = {
  destroy: () => !0
}, _e = yo([]), Pc = (e) => {
  const t = _e.findIndex((r) => r.id === e), n = _e[t];
  let s;
  return t > 0 && (s = _e[t - 1]), { current: n, prev: s };
}, Mc = (e) => {
  const { prev: t } = Pc(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Ac = (e, t) => _e.findIndex((s) => s.id === e) > 0 ? 16 : t, Dc = re({
  name: "ElMessage"
}), Rc = /* @__PURE__ */ re({
  ...Dc,
  props: Oc,
  emits: Ic,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = wc, { ns: r, zIndex: o } = Xr("message"), { currentZIndex: a, nextZIndex: l } = o, u = X(), f = X(!1), b = X(0);
    let L;
    const S = x(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = x(() => {
      const p = n.type;
      return { [r.bm("icon", p)]: p && Bt[p] };
    }), $ = x(() => n.icon || Bt[n.type] || ""), w = x(() => Mc(n.id)), E = x(() => Ac(n.id, n.offset) + w.value), d = x(() => b.value + E.value), k = x(() => ({
      top: `${E.value}px`,
      zIndex: a.value
    }));
    function y() {
      n.duration !== 0 && ({ stop: L } = jr(() => {
        O();
      }, n.duration));
    }
    function v() {
      L?.();
    }
    function O() {
      f.value = !1;
    }
    function I({ code: p }) {
      p === At.esc && O();
    }
    return gt(() => {
      y(), l(), f.value = !0;
    }), Re(() => n.repeatNum, () => {
      v(), y();
    }), Br(document, "keydown", I), zl(u, () => {
      b.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: f,
      bottom: d,
      close: O
    }), (p, g) => (j(), me(Fn, {
      name: h(r).b("fade"),
      onBeforeLeave: p.onClose,
      onAfterLeave: (R) => p.$emit("destroy"),
      persisted: ""
    }, {
      default: De(() => [
        ue(_("div", {
          id: p.id,
          ref_key: "messageRef",
          ref: u,
          class: ne([
            h(r).b(),
            { [h(r).m(p.type)]: p.type },
            h(r).is("center", p.center),
            h(r).is("closable", p.showClose),
            h(r).is("plain", p.plain),
            p.customClass
          ]),
          style: Rt(h(k)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: y
        }, [
          p.repeatNum > 1 ? (j(), me(h(Tc), {
            key: 0,
            value: p.repeatNum,
            type: h(S),
            class: ne(h(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          h($) ? (j(), me(h(zt), {
            key: 1,
            class: ne([h(r).e("icon"), h(P)])
          }, {
            default: De(() => [
              (j(), me(nr(h($))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          Ze(p.$slots, "default", {}, () => [
            p.dangerouslyUseHTMLString ? (j(), Y(yt, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              _("p", {
                class: ne(h(r).e("content")),
                innerHTML: p.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (j(), Y("p", {
              key: 0,
              class: ne(h(r).e("content"))
            }, F(p.message), 3))
          ]),
          p.showClose ? (j(), me(h(zt), {
            key: 2,
            class: ne(h(r).e("closeBtn")),
            onClick: $n(O, ["stop"])
          }, {
            default: De(() => [
              M(h(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [Ft, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Fc = /* @__PURE__ */ Jt(Rc, [["__file", "message.vue"]]);
let $c = 1;
const so = (e) => {
  const t = !e || Fe(e) || dt(e) || _t(e) ? { message: e } : e, n = {
    ...ae,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Fe(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    An(s) || (s = document.body), n.appendTo = s;
  }
  return $s(fe.grouping) && !n.grouping && (n.grouping = fe.grouping), We(fe.duration) && n.duration === 3e3 && (n.duration = fe.duration), We(fe.offset) && n.offset === 16 && (n.offset = fe.offset), $s(fe.showClose) && !n.showClose && (n.showClose = fe.showClose), n;
}, Wc = (e) => {
  const t = _e.indexOf(e);
  if (t === -1)
    return;
  _e.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, xc = ({ appendTo: e, ...t }, n) => {
  const s = `message_${$c++}`, r = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: s,
    onClose: () => {
      r?.(), Wc(b);
    },
    onDestroy: () => {
      $t(null, o);
    }
  }, l = M(Fc, a, _t(a.message) || dt(a.message) ? {
    default: _t(a.message) ? a.message : () => a.message
  } : null);
  l.appContext = n || Qe._context, $t(l, o), e.appendChild(o.firstElementChild);
  const u = l.component, b = {
    id: s,
    vnode: l,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return b;
}, Qe = (e = {}, t) => {
  if (!Ue)
    return { close: () => {
    } };
  const n = so(e);
  if (n.grouping && _e.length) {
    const r = _e.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (We(fe.max) && _e.length >= fe.max)
    return { close: () => {
    } };
  const s = xc(n, t);
  return _e.push(s), s.handler;
};
no.forEach((e) => {
  Qe[e] = (t = {}, n) => {
    const s = so(t);
    return Qe({ ...s, type: e }, n);
  };
});
function jc(e) {
  for (const t of _e)
    (!e || e === t.props.type) && t.handler.close();
}
Qe.closeAll = jc;
Qe._context = null;
const Uc = Qr(Qe, "$message"), ro = [
  "success",
  "info",
  "warning",
  "error"
], zc = nt({
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
    type: to
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ce([
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
    type: ce(Function),
    default: () => {
    }
  },
  onClose: {
    type: ce(Function),
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
    values: [...ro, ""],
    default: ""
  },
  zIndex: Number
}), Bc = {
  destroy: () => !0
}, Vc = re({
  name: "ElNotification"
}), Hc = /* @__PURE__ */ re({
  ...Vc,
  props: zc,
  emits: Bc,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: r } = Xr("notification"), { nextZIndex: o, currentZIndex: a } = r, { Close: l } = bc, u = X(!1);
    let f;
    const b = x(() => {
      const y = n.type;
      return y && Bt[n.type] ? s.m(y) : "";
    }), L = x(() => n.type && Bt[n.type] || n.icon), S = x(() => n.position.endsWith("right") ? "right" : "left"), P = x(() => n.position.startsWith("top") ? "top" : "bottom"), $ = x(() => {
      var y;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (y = n.zIndex) != null ? y : a.value
      };
    });
    function w() {
      n.duration > 0 && ({ stop: f } = jr(() => {
        u.value && d();
      }, n.duration));
    }
    function E() {
      f?.();
    }
    function d() {
      u.value = !1;
    }
    function k({ code: y }) {
      y === At.delete || y === At.backspace ? E() : y === At.esc ? u.value && d() : w();
    }
    return gt(() => {
      w(), o(), u.value = !0;
    }), Br(document, "keydown", k), t({
      visible: u,
      close: d
    }), (y, v) => (j(), me(Fn, {
      name: h(s).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (O) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: De(() => [
        ue(_("div", {
          id: y.id,
          class: ne([h(s).b(), y.customClass, h(S)]),
          style: Rt(h($)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: w,
          onClick: y.onClick
        }, [
          h(L) ? (j(), me(h(zt), {
            key: 0,
            class: ne([h(s).e("icon"), h(b)])
          }, {
            default: De(() => [
              (j(), me(nr(h(L))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          _("div", {
            class: ne(h(s).e("group"))
          }, [
            _("h2", {
              class: ne(h(s).e("title")),
              textContent: F(y.title)
            }, null, 10, ["textContent"]),
            ue(_("div", {
              class: ne(h(s).e("content")),
              style: Rt(y.title ? void 0 : { margin: 0 })
            }, [
              Ze(y.$slots, "default", {}, () => [
                y.dangerouslyUseHTMLString ? (j(), Y(yt, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  _("p", { innerHTML: y.message }, null, 8, ["innerHTML"])
                ], 2112)) : (j(), Y("p", { key: 0 }, F(y.message), 1))
              ])
            ], 6), [
              [Ft, y.message]
            ]),
            y.showClose ? (j(), me(h(zt), {
              key: 0,
              class: ne(h(s).e("closeBtn")),
              onClick: $n(d, ["stop"])
            }, {
              default: De(() => [
                M(h(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ft, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Gc = /* @__PURE__ */ Jt(Hc, [["__file", "notification.vue"]]);
const Vt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Rn = 16;
let Kc = 1;
const et = function(e = {}, t) {
  if (!Ue)
    return { close: () => {
    } };
  (Fe(e) || dt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  Vt[n].forEach(({ vm: b }) => {
    var L;
    s += (((L = b.el) == null ? void 0 : L.offsetHeight) || 0) + Rn;
  }), s += Rn;
  const r = `notification_${Kc++}`, o = e.onClose, a = {
    ...e,
    offset: s,
    id: r,
    onClose: () => {
      Yc(r, n, o);
    }
  };
  let l = document.body;
  An(e.appendTo) ? l = e.appendTo : Fe(e.appendTo) && (l = document.querySelector(e.appendTo)), An(l) || (l = document.body);
  const u = document.createElement("div"), f = M(Gc, a, _t(a.message) ? a.message : dt(a.message) ? () => a.message : null);
  return f.appContext = xr(t) ? et._context : t, f.props.onDestroy = () => {
    $t(null, u);
  }, $t(f, u), Vt[n].push({ vm: f }), l.appendChild(u.firstElementChild), {
    close: () => {
      f.component.exposed.visible.value = !1;
    }
  };
};
ro.forEach((e) => {
  et[e] = (t = {}, n) => ((Fe(t) || dt(t)) && (t = {
    message: t
  }), et({ ...t, type: e }, n));
});
function Yc(e, t, n) {
  const s = Vt[t], r = s.findIndex(({ vm: f }) => {
    var b;
    return ((b = f.component) == null ? void 0 : b.props.id) === e;
  });
  if (r === -1)
    return;
  const { vm: o } = s[r];
  if (!o)
    return;
  n?.(o);
  const a = o.el.offsetHeight, l = t.split("-")[0];
  s.splice(r, 1);
  const u = s.length;
  if (!(u < 1))
    for (let f = r; f < u; f++) {
      const { el: b, component: L } = s[f].vm, S = Number.parseInt(b.style[l], 10) - a - Rn;
      L.props.offset = S;
    }
}
function Zc() {
  for (const e of Object.values(Vt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
et.closeAll = Zc;
et._context = null;
const Xc = Qr(et, "$notify"), it = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", s) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: s
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
      position: s = "center",
      duration: r = 3e3,
      showClose: o = !1
    } = e;
    s === "center" ? Uc({
      message: t,
      type: n,
      duration: r,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Xc({
      message: t,
      type: n,
      position: s,
      duration: r,
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
var Jc = {
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
function qc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Qc(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], r = [], o = t.theme || n.theme;
  switch (o) {
    case "outline":
      r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push("none"), r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push("none");
      break;
    case "filled":
      r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push("#FFF"), r.push("#FFF");
      break;
    case "two-tone":
      r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone), r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      r.push(typeof s[0] == "string" ? s[0] : "currentColor"), r.push(typeof s[1] == "string" ? s[1] : n.colors.multiColor.outFillColor), r.push(typeof s[2] == "string" ? s[2] : n.colors.multiColor.innerStrokeColor), r.push(typeof s[3] == "string" ? s[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: r,
    id: e
  };
}
var eu = Symbol("icon-context");
function Ee(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = qc(), l = Ne(eu, Jc);
      return function() {
        var u = o.size, f = o.strokeWidth, b = o.strokeLinecap, L = o.strokeLinejoin, S = o.theme, P = o.fill, $ = o.spin, w = Qc(a, {
          size: u,
          strokeWidth: f,
          strokeLinecap: b,
          strokeLinejoin: L,
          theme: S,
          fill: P
        }, l), E = [l.prefix + "-icon"];
        return E.push(l.prefix + "-icon-" + e), t && l.rtl && E.push(l.prefix + "-icon-rtl"), $ && E.push(l.prefix + "-icon-spin"), M("span", {
          class: E.join(" ")
        }, [n(w)]);
      };
    }
  };
  return s;
}
const tu = Ee("close", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), nu = Ee("computer", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), M("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), su = Ee("local", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wn = Ee("moon", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zs = Ee("refresh", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xs = Ee("sun-one", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z",
    fill: e.colors[0]
  }, null), M("path", {
    d: "M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z",
    fill: e.colors[0]
  }, null), M("path", {
    d: "M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z",
    fill: e.colors[0]
  }, null), M("path", {
    d: "M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z",
    fill: e.colors[0]
  }, null), M("path", {
    d: "M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z",
    fill: e.colors[0]
  }, null), M("path", {
    d: "M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z",
    fill: e.colors[0]
  }, null), M("path", {
    d: "M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z",
    fill: e.colors[0]
  }, null), M("path", {
    d: "M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z",
    fill: e.colors[0]
  }, null)]);
}), Js = Ee("sunrise", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M4 24H7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M10 10L12 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M24 4V7",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 24C14 18.4776 18.4776 14 24 14C29.5224 14 34 18.4776 34 24C34 27.3674 32.3357 30.3458 29.785 32.1578",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M38 10L36 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M44 24L41 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M37.9814 37.982L36.3614 36.362",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M23.4999 28C20.4999 28 14 28.2 14 31C14 33.8 18.6058 33.7908 20.9998 34C23 34.1747 26.4624 35.6879 25.9999 38C24.9998 43 8.99982 42 4.99994 42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ru = Ee("sunset", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M19 8L33 34H5L19 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M29 26L34 20L43 34H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M10 41L38 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("circle", {
    cx: "38",
    cy: "10",
    r: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), qs = Ee("time", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ou = "snippets-code:developer-mode", oo = "snippets-code:frontend-diagnostics", au = 240, lt = "[REDACTED]", Dt = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${lt}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${lt}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  lt
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${lt}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${lt}`
), ao = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Dt(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Dt(
      JSON.stringify(
        e,
        (n, s) => {
          if (s instanceof Error)
            return {
              name: s.name,
              message: s.message,
              stack: s.stack,
              cause: s.cause
            };
          if (typeof s == "bigint") return s.toString();
          if (typeof s == "object" && s !== null) {
            if (t.has(s)) return "[Circular]";
            t.add(s);
          }
          return s;
        },
        2
      )
    );
  } catch {
    return Dt(String(e));
  }
}, iu = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, lu = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(oo) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Qn = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(ou) === "true";
  } catch {
    return !1;
  }
}, cu = (e, t, n) => {
  if (!Qn() || typeof localStorage > "u") return;
  const s = lu();
  s.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: iu(),
    message: Dt(t),
    data: ao(n)
  });
  try {
    localStorage.setItem(
      oo,
      JSON.stringify(s.slice(-au))
    );
  } catch {
  }
}, uu = () => Qn(), du = (e) => e === "warn" || e === "error" || !1 || !1 || Qn(), Nt = (e, t, n) => {
  cu(e, t, n), du(e) && N("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : ao(n)
  }).catch(() => {
  });
}, Se = {
  info: (e, t, ...n) => {
    Nt("info", e, t);
  },
  error: (e, t) => {
    Nt("error", e, t);
  },
  warn: (e, t) => {
    Nt("warn", e, t);
  },
  debug: (e, t) => {
    uu() && Nt("debug", e, t);
  }
}, fu = {
  class: "title-bar fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-3 py-2",
  "data-tauri-drag-region": ""
}, mu = { class: "flex items-center gap-2" }, hu = { class: "title-icon-wrap" }, _u = { class: "m-0 text-base font-medium tracking-tight" }, pu = { class: "content mx-auto max-w-xl px-4 pt-14 pb-4" }, gu = { class: "section" }, yu = { class: "section-title" }, vu = { class: "mode-selector grid grid-cols-2 gap-2.5" }, bu = { class: "mode-option block cursor-pointer h-full" }, wu = { class: "mode-content mode-system" }, ku = { class: "mode-icon-wrap" }, Cu = { class: "mode-body" }, Lu = { class: "mode-title" }, Eu = { class: "mode-desc" }, Su = { class: "mode-option block cursor-pointer h-full" }, Tu = { class: "mode-content mode-light" }, Nu = { class: "mode-icon-wrap" }, Ou = { class: "mode-body" }, Iu = { class: "mode-title" }, Pu = { class: "mode-desc" }, Mu = { class: "mode-option block cursor-pointer h-full" }, Au = { class: "mode-content mode-dark" }, Du = { class: "mode-icon-wrap" }, Ru = { class: "mode-body" }, Fu = { class: "mode-title" }, $u = { class: "mode-desc" }, Wu = { class: "mode-option block cursor-pointer h-full" }, xu = { class: "mode-content mode-schedule" }, ju = { class: "mode-icon-wrap" }, Uu = { class: "mode-body" }, zu = { class: "mode-title" }, Bu = { class: "mode-desc" }, Vu = { class: "section" }, Hu = { class: "status-card" }, Gu = { class: "status-row" }, Ku = { class: "status-label" }, Yu = {
  key: 0,
  class: "status-row"
}, Zu = { class: "status-label" }, Xu = {
  key: 1,
  class: "status-hint"
}, Ju = { class: "section" }, qu = { class: "section-title" }, Qu = { class: "mode-selector grid grid-cols-2 gap-2.5" }, ed = { class: "mode-option block cursor-pointer h-full" }, td = { class: "schedule-type-card" }, nd = { class: "schedule-type-title" }, sd = { class: "schedule-type-desc" }, rd = { class: "mode-option block cursor-pointer h-full" }, od = { class: "schedule-type-card" }, ad = { class: "schedule-type-title" }, id = { class: "schedule-type-desc" }, ld = {
  key: 0,
  class: "section"
}, cd = { class: "section-title section-title-with-icon" }, ud = { class: "inset-card location-card" }, dd = {
  key: 0,
  class: "loading-hint"
}, fd = {
  key: 1,
  class: "location-info"
}, md = { class: "info-row" }, hd = { class: "info-label" }, _d = { class: "info-value" }, pd = { class: "info-row" }, gd = { class: "info-label" }, yd = { class: "info-value" }, vd = { class: "info-row" }, bd = { class: "info-label" }, wd = { class: "info-value" }, kd = ["disabled"], Cd = {
  key: 1,
  class: "section"
}, Ld = { class: "section-title" }, Ed = { class: "inset-card sun-times-card" }, Sd = { class: "sun-row" }, Td = { class: "sun-info" }, Nd = { class: "sun-label" }, Od = { class: "sun-value" }, Id = { class: "sun-row" }, Pd = { class: "sun-info" }, Md = { class: "sun-label" }, Ad = { class: "sun-value" }, Dd = { class: "sun-row sun-period" }, Rd = { class: "sun-label" }, Fd = {
  key: 2,
  class: "section"
}, $d = { class: "inset-card location-card" }, Wd = { class: "info-row" }, xd = { class: "info-value" }, jd = {
  key: 0,
  class: "info-row"
}, Ud = { class: "info-value" }, zd = {
  key: 1,
  class: "info-row"
}, Bd = { class: "info-value" }, Vd = {
  key: 2,
  class: "info-row"
}, Hd = { class: "info-value" }, Gd = {
  key: 3,
  class: "info-row"
}, Kd = { class: "info-value" }, Yd = {
  key: 3,
  class: "section"
}, Zd = { class: "section-title" }, Xd = { class: "inset-card time-settings" }, Jd = { class: "time-row" }, qd = { class: "time-label-text" }, Qd = { class: "time-row" }, ef = { class: "time-label-text" }, tf = /* @__PURE__ */ re({
  __name: "index",
  setup(e) {
    const { t } = Yt(), n = X({
      theme_mode: "Light",
      schedule_type: "SunBased",
      custom_light_time: "06:00",
      custom_dark_time: "18:00",
      latitude: null,
      longitude: null,
      timezone_offset: null,
      location_name: null
    }), s = X(!1), r = X(!1), o = X(null), a = X(null), l = X(null), u = X(!1), f = X(!1), b = X(!1), L = X(null), S = x(() => s.value), P = x(() => {
      const g = l.value?.source || "";
      return g.startsWith("manual:") ? `手动位置（${g.replace("manual:", "")}）` : g.startsWith("ip:") ? `自动定位（${g.replace("ip:", "")}）` : g || "-";
    }), $ = async () => {
      try {
        const g = await N("get_dark_mode_config");
        n.value = g, await w();
      } catch (g) {
        Se.error("[主题] 加载配置失败", g), it.msg(t("darkMode.loadConfigFailed"), "error");
      }
    }, w = async () => {
      try {
        const g = await N("get_dark_mode_status_command");
        s.value = g.currentIsDark, r.value = g.schedulerRunning, l.value = g.sunCalcDebug ?? null;
      } catch (g) {
        Se.error("[主题] 加载状态失败", g);
      }
    }, E = async () => {
      u.value = !0;
      try {
        const g = await N("get_location_info");
        o.value = g, n.value.latitude = g.latitude, n.value.longitude = g.longitude, n.value.timezone_offset = g.timezone_offset, n.value.location_name = `${g.city}, ${g.region}`, n.value.schedule_type === "SunBased" && await d(), await O();
      } catch (g) {
        Se.error("[主题] 获取位置失败", g), it.msg(t("darkMode.getLocationFailed"), "error");
      } finally {
        await w(), u.value = !1;
      }
    }, d = async () => {
      if (!(!n.value.latitude || !n.value.longitude))
        try {
          const g = await N("calculate_sun_times_command", {
            latitude: n.value.latitude,
            longitude: n.value.longitude,
            timezoneOffset: n.value.timezone_offset || 0
          });
          a.value = g;
        } catch (g) {
          Se.error("[主题] 计算日出日落时间失败", g);
        }
    }, k = async () => {
      b.value || (await O(), n.value.theme_mode === "Schedule" && n.value.schedule_type === "SunBased" && !o.value && await E());
    }, y = async () => {
      b.value || (n.value.schedule_type === "SunBased" && !o.value && await E(), await O());
    }, v = async () => {
      b.value || n.value.schedule_type === "Custom" && await O();
    }, O = async () => {
      if (!b.value) {
        f.value = !0;
        try {
          await N("save_dark_mode_config_command", { config: n.value }), await w();
        } catch (g) {
          Se.error("[主题] 保存配置失败", g), it.msg(t("darkMode.saveConfigFailed"), "error");
        } finally {
          f.value = !1;
        }
      }
    }, I = async () => {
      try {
        const g = await N("toggle_system_theme");
        s.value = g;
        const R = t(g ? "darkMode.darkTheme" : "darkMode.lightTheme");
        let U = t("darkMode.switchedTo", { theme: R });
        n.value.theme_mode === "Schedule" && (U += t("darkMode.autoRestoreNote")), it.msg(U, "success");
      } catch (g) {
        Se.error("[主题] 切换主题失败", g), it.msg(t("darkMode.toggleFailed"), "error");
      }
    }, p = () => {
      Cn().close();
    };
    return gt(async () => {
      await $(), n.value.theme_mode === "Schedule" && n.value.schedule_type === "SunBased" && await E(), L.value = await Wn("dark-mode-changed", async (g) => {
        Se.debug(
          `[主题][窗口:dark_mode] 收到主题变更：${JSON.stringify(g.payload)}`
        ), s.value = g.payload.isDark, b.value = !0;
        try {
          await $(), Se.debug(
            `[主题][窗口:dark_mode] 已从后端刷新配置：theme_mode=${n.value.theme_mode}, schedule_type=${n.value.schedule_type}`
          );
        } finally {
          b.value = !1;
        }
      }), tr(() => {
        setTimeout(() => {
          Cn().emit("dark_mode_ready");
        }, 100);
      });
    }), Re(
      () => n.value.schedule_type,
      async (g) => {
        g === "SunBased" && n.value.latitude && n.value.longitude && await d();
      }
    ), Qs(() => {
      L.value && L.value();
    }), (g, R) => (j(), Y(
      "div",
      {
        class: ne(["dark-mode-container select-none rounded-lg", { dark: h(S) }])
      },
      [
        H(" 标题栏 "),
        _("div", fu, [
          _("div", mu, [
            _("div", hu, [
              M(h(wn), {
                class: "text-lg",
                theme: "filled"
              })
            ]),
            _(
              "h1",
              _u,
              F(g.$t("darkMode.title")),
              1
              /* TEXT */
            )
          ]),
          _(
            "button",
            {
              type: "button",
              onMousedown: R[0] || (R[0] = $n(() => {
              }, ["stop"])),
              onClick: p,
              class: "close-btn",
              "aria-label": "Close"
            },
            [
              M(h(tu), { size: 18 })
            ],
            32
            /* NEED_HYDRATION */
          )
        ]),
        H(" 主要内容 "),
        _("div", pu, [
          H(" 主题模式选择（四选一） "),
          _("div", gu, [
            _(
              "h2",
              yu,
              F(g.$t("darkMode.themeMode")),
              1
              /* TEXT */
            ),
            _("div", vu, [
              _("label", bu, [
                ue(_(
                  "input",
                  {
                    type: "radio",
                    value: "System",
                    "onUpdate:modelValue": R[1] || (R[1] = (U) => h(n).theme_mode = U),
                    onChange: k,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [He, h(n).theme_mode]
                ]),
                _("div", wu, [
                  _("span", ku, [
                    M(h(nu), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  _("div", Cu, [
                    _(
                      "span",
                      Lu,
                      F(g.$t("darkMode.systemMode")),
                      1
                      /* TEXT */
                    ),
                    _(
                      "span",
                      Eu,
                      F(g.$t("darkMode.systemModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              _("label", Su, [
                ue(_(
                  "input",
                  {
                    type: "radio",
                    value: "Light",
                    "onUpdate:modelValue": R[2] || (R[2] = (U) => h(n).theme_mode = U),
                    onChange: k,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [He, h(n).theme_mode]
                ]),
                _("div", Tu, [
                  _("span", Nu, [
                    M(h(Xs), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  _("div", Ou, [
                    _(
                      "span",
                      Iu,
                      F(g.$t("darkMode.lightMode")),
                      1
                      /* TEXT */
                    ),
                    _(
                      "span",
                      Pu,
                      F(g.$t("darkMode.lightModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              _("label", Mu, [
                ue(_(
                  "input",
                  {
                    type: "radio",
                    value: "Dark",
                    "onUpdate:modelValue": R[3] || (R[3] = (U) => h(n).theme_mode = U),
                    onChange: k,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [He, h(n).theme_mode]
                ]),
                _("div", Au, [
                  _("span", Du, [
                    M(h(wn), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  _("div", Ru, [
                    _(
                      "span",
                      Fu,
                      F(g.$t("darkMode.darkMode")),
                      1
                      /* TEXT */
                    ),
                    _(
                      "span",
                      $u,
                      F(g.$t("darkMode.darkModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              _("label", Wu, [
                ue(_(
                  "input",
                  {
                    type: "radio",
                    value: "Schedule",
                    "onUpdate:modelValue": R[4] || (R[4] = (U) => h(n).theme_mode = U),
                    onChange: k,
                    class: "sr-only"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [He, h(n).theme_mode]
                ]),
                _("div", xu, [
                  _("span", ju, [
                    M(h(qs), {
                      class: "mode-icon",
                      theme: "filled",
                      size: 22
                    })
                  ]),
                  _("div", Uu, [
                    _(
                      "span",
                      zu,
                      F(g.$t("darkMode.scheduleMode")),
                      1
                      /* TEXT */
                    ),
                    _(
                      "span",
                      Bu,
                      F(g.$t("darkMode.scheduleModeDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ]),
          H(" 当前状态卡片（始终显示） "),
          _("div", Vu, [
            _("div", Hu, [
              _("div", Gu, [
                _(
                  "span",
                  Ku,
                  F(g.$t("darkMode.currentTheme")),
                  1
                  /* TEXT */
                ),
                _(
                  "span",
                  {
                    class: ne(["status-badge", h(s) ? "badge-dark" : "badge-light"])
                  },
                  F(h(s) ? g.$t("darkMode.darkTheme") : g.$t("darkMode.lightTheme")),
                  3
                  /* TEXT, CLASS */
                )
              ]),
              h(n).theme_mode === "Schedule" ? (j(), Y("div", Yu, [
                _(
                  "span",
                  Zu,
                  F(g.$t("darkMode.schedulerStatus")),
                  1
                  /* TEXT */
                ),
                _(
                  "span",
                  {
                    class: ne(["status-badge", h(r) ? "badge-success" : "badge-danger"])
                  },
                  F(h(r) ? g.$t("darkMode.running") : g.$t("darkMode.stopped")),
                  3
                  /* TEXT, CLASS */
                )
              ])) : H("v-if", !0),
              h(n).theme_mode !== "Schedule" ? (j(), Y(
                "p",
                Xu,
                F(h(n).theme_mode === "System" ? g.$t("darkMode.systemModeDesc") : h(n).theme_mode === "Light" ? g.$t("darkMode.lightModeDesc") : g.$t("darkMode.darkModeDesc")),
                1
                /* TEXT */
              )) : H("v-if", !0),
              _(
                "button",
                {
                  type: "button",
                  onClick: I,
                  class: "btn-primary"
                },
                F(g.$t("darkMode.manualToggle")),
                1
                /* TEXT */
              )
            ])
          ]),
          H(" 定时切换详细设置（仅在Schedule模式下显示） "),
          h(n).theme_mode === "Schedule" ? (j(), Y(
            yt,
            { key: 0 },
            [
              H(" 定时类型选择 "),
              _("div", Ju, [
                _(
                  "h2",
                  qu,
                  F(g.$t("darkMode.scheduleType")),
                  1
                  /* TEXT */
                ),
                _("div", Qu, [
                  _("label", ed, [
                    ue(_(
                      "input",
                      {
                        type: "radio",
                        value: "SunBased",
                        "onUpdate:modelValue": R[5] || (R[5] = (U) => h(n).schedule_type = U),
                        onChange: y,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [He, h(n).schedule_type]
                    ]),
                    _("div", td, [
                      _("span", nd, [
                        M(h(Js), { size: 18 }),
                        Ae(
                          " " + F(g.$t("darkMode.sunBased")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _(
                        "span",
                        sd,
                        F(g.$t("darkMode.sunBasedDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  _("label", rd, [
                    ue(_(
                      "input",
                      {
                        type: "radio",
                        value: "Custom",
                        "onUpdate:modelValue": R[6] || (R[6] = (U) => h(n).schedule_type = U),
                        onChange: y,
                        class: "sr-only"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [He, h(n).schedule_type]
                    ]),
                    _("div", od, [
                      _("span", ad, [
                        M(h(qs), { size: 18 }),
                        Ae(
                          " " + F(g.$t("darkMode.customSchedule")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _(
                        "span",
                        id,
                        F(g.$t("darkMode.customScheduleDesc")),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]),
              H(" 位置信息（日出日落模式） "),
              h(n).schedule_type === "SunBased" ? (j(), Y("div", ld, [
                _("h2", cd, [
                  M(h(su), {
                    theme: "filled",
                    size: 18
                  }),
                  Ae(
                    " " + F(g.$t("darkMode.locationInfo")),
                    1
                    /* TEXT */
                  )
                ]),
                _("div", ud, [
                  h(u) ? (j(), Y(
                    "div",
                    dd,
                    F(g.$t("darkMode.gettingLocation")),
                    1
                    /* TEXT */
                  )) : h(o) ? (j(), Y("div", fd, [
                    _("div", md, [
                      _(
                        "span",
                        hd,
                        F(g.$t("darkMode.location")),
                        1
                        /* TEXT */
                      ),
                      _(
                        "span",
                        _d,
                        F(h(o).city) + ", " + F(h(o).region) + ", " + F(h(o).country),
                        1
                        /* TEXT */
                      )
                    ]),
                    _("div", pd, [
                      _(
                        "span",
                        gd,
                        F(g.$t("darkMode.timezone")),
                        1
                        /* TEXT */
                      ),
                      _(
                        "span",
                        yd,
                        F(h(o).timezone),
                        1
                        /* TEXT */
                      )
                    ]),
                    _("div", vd, [
                      _(
                        "span",
                        bd,
                        F(g.$t("darkMode.coordinates")),
                        1
                        /* TEXT */
                      ),
                      _(
                        "span",
                        wd,
                        F(h(o).latitude.toFixed(4)) + ", " + F(h(o).longitude.toFixed(4)),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : H("v-if", !0),
                  _("button", {
                    type: "button",
                    onClick: E,
                    class: "btn-secondary btn-with-icon mt-3",
                    disabled: h(u)
                  }, [
                    h(u) ? (j(), me(h(Zs), {
                      key: 1,
                      class: "animate-spin",
                      size: 16
                    })) : (j(), me(h(Zs), {
                      key: 0,
                      size: 16
                    })),
                    Ae(
                      " " + F(h(u) ? g.$t("darkMode.refreshing") : g.$t("darkMode.refreshLocation")),
                      1
                      /* TEXT */
                    )
                  ], 8, kd)
                ])
              ])) : H("v-if", !0),
              H(" 日出日落时间 "),
              h(n).schedule_type === "SunBased" && h(a) ? (j(), Y("div", Cd, [
                _(
                  "h2",
                  Ld,
                  F(g.$t("darkMode.sunTimes")),
                  1
                  /* TEXT */
                ),
                _("div", Ed, [
                  _("div", Sd, [
                    M(h(Js), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    _("div", Td, [
                      _(
                        "span",
                        Nd,
                        F(g.$t("darkMode.sunrise")),
                        1
                        /* TEXT */
                      ),
                      _(
                        "span",
                        Od,
                        F(h(a).sunrise),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  _("div", Id, [
                    M(h(ru), {
                      class: "sun-icon",
                      theme: "filled",
                      size: 20
                    }),
                    _("div", Pd, [
                      _(
                        "span",
                        Md,
                        F(g.$t("darkMode.sunset")),
                        1
                        /* TEXT */
                      ),
                      _(
                        "span",
                        Ad,
                        F(h(a).sunset),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  R[9] || (R[9] = _(
                    "div",
                    { class: "sun-divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  _("div", Dd, [
                    _(
                      "span",
                      Rd,
                      F(g.$t("darkMode.currentPeriod")),
                      1
                      /* TEXT */
                    ),
                    _(
                      "span",
                      {
                        class: ne(["sun-value", h(a).is_day ? "period-day" : "period-night"])
                      },
                      F(h(a).is_day ? g.$t("darkMode.daytime") : g.$t("darkMode.nighttime")),
                      3
                      /* TEXT, CLASS */
                    )
                  ])
                ])
              ])) : H("v-if", !0),
              H(" 计算调试信息 "),
              h(n).schedule_type === "SunBased" ? (j(), Y("div", Fd, [
                R[15] || (R[15] = _(
                  "h2",
                  { class: "section-title" },
                  "计算依据",
                  -1
                  /* HOISTED */
                )),
                _("div", $d, [
                  _("div", Wd, [
                    R[10] || (R[10] = _(
                      "span",
                      { class: "info-label" },
                      "来源",
                      -1
                      /* HOISTED */
                    )),
                    _(
                      "span",
                      xd,
                      F(h(P)),
                      1
                      /* TEXT */
                    )
                  ]),
                  h(l)?.latitude !== void 0 && h(l)?.longitude !== void 0 ? (j(), Y("div", jd, [
                    R[11] || (R[11] = _(
                      "span",
                      { class: "info-label" },
                      "计算坐标",
                      -1
                      /* HOISTED */
                    )),
                    _(
                      "span",
                      Ud,
                      F(Number(h(l)?.latitude).toFixed(4)) + ", " + F(Number(h(l)?.longitude).toFixed(4)),
                      1
                      /* TEXT */
                    )
                  ])) : H("v-if", !0),
                  h(l)?.timezoneOffset !== void 0 ? (j(), Y("div", zd, [
                    R[12] || (R[12] = _(
                      "span",
                      { class: "info-label" },
                      "时区偏移(分钟)",
                      -1
                      /* HOISTED */
                    )),
                    _(
                      "span",
                      Bd,
                      F(h(l)?.timezoneOffset),
                      1
                      /* TEXT */
                    )
                  ])) : H("v-if", !0),
                  h(l)?.sunset ? (j(), Y("div", Vd, [
                    R[13] || (R[13] = _(
                      "span",
                      { class: "info-label" },
                      "用于切换的日落时间",
                      -1
                      /* HOISTED */
                    )),
                    _(
                      "span",
                      Hd,
                      F(h(l)?.sunset),
                      1
                      /* TEXT */
                    )
                  ])) : H("v-if", !0),
                  h(l)?.error ? (j(), Y("div", Gd, [
                    R[14] || (R[14] = _(
                      "span",
                      { class: "info-label" },
                      "错误",
                      -1
                      /* HOISTED */
                    )),
                    _(
                      "span",
                      Kd,
                      F(h(l)?.error),
                      1
                      /* TEXT */
                    )
                  ])) : H("v-if", !0)
                ])
              ])) : H("v-if", !0),
              H(" 自定义时间 "),
              h(n).schedule_type === "Custom" ? (j(), Y("div", Yd, [
                _(
                  "h2",
                  Zd,
                  F(g.$t("darkMode.customTime")),
                  1
                  /* TEXT */
                ),
                _("div", Xd, [
                  _("label", Jd, [
                    _("span", qd, [
                      M(h(Xs), {
                        theme: "filled",
                        size: 18
                      }),
                      Ae(
                        " " + F(g.$t("darkMode.lightModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    ue(_(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": R[7] || (R[7] = (U) => h(n).custom_light_time = U),
                        onChange: v,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [ts, h(n).custom_light_time]
                    ])
                  ]),
                  _("label", Qd, [
                    _("span", ef, [
                      M(h(wn), {
                        theme: "filled",
                        size: 18
                      }),
                      Ae(
                        " " + F(g.$t("darkMode.darkModeStart")),
                        1
                        /* TEXT */
                      )
                    ]),
                    ue(_(
                      "input",
                      {
                        type: "time",
                        "onUpdate:modelValue": R[8] || (R[8] = (U) => h(n).custom_dark_time = U),
                        onChange: v,
                        class: "time-input"
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [ts, h(n).custom_dark_time]
                    ])
                  ])
                ])
              ])) : H("v-if", !0)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : H("v-if", !0)
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), nf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, sf = /* @__PURE__ */ nf(tf, [["__scopeId", "data-v-69944e66"]]), rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sf
}, Symbol.toStringTag, { value: "Module" }));
export {
  lf as activate
};
