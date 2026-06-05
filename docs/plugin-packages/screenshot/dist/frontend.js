var Vr = Object.defineProperty;
var Yr = (e, t, n) => t in e ? Vr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var V = (e, t, n) => Yr(e, typeof t != "symbol" ? t + "" : t, n);
import * as ki from "vue";
import { inject as Pe, createVNode as S, ref as q, shallowRef as Gr, computed as G, watch as Ie, onMounted as ln, onUnmounted as Zi, defineComponent as $t, h as Go, Text as Xr, Fragment as Jt, nextTick as kn, createElementBlock as X, openBlock as B, createCommentVNode as et, createElementVNode as A, renderList as de, normalizeClass as Ct, createBlock as jt, resolveDynamicComponent as Re, unref as D, toDisplayString as rt, normalizeStyle as Ot, withDirectives as _n, withKeys as $s, vModelText as Kr, getCurrentInstance as en, readonly as Zr, getCurrentScope as qr, onScopeDispose as Jr, isRef as Qr, warn as tl, provide as el, mergeProps as nl, renderSlot as Fe, Transition as qi, withCtx as qt, createTextVNode as il, vShow as Zn, shallowReactive as sl, withModifiers as It, isVNode as Sn, render as qn } from "vue";
const Kp = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => qd)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => $p)
  });
};
function ol(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function al(e, t, n, i, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var jn;
const le = "__TAURI_TO_IPC_KEY__";
function rl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function I(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function ll(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class cl {
  get rid() {
    return ol(this, jn, "f");
  }
  constructor(t) {
    jn.set(this, void 0), al(this, jn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return I("plugin:resources|close", {
      rid: this.rid
    });
  }
}
jn = /* @__PURE__ */ new WeakMap();
class wn {
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
    return new vn(this.width * t, this.height * t);
  }
  [le]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[le]();
  }
}
class vn {
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
    return new wn(this.width / t, this.height / t);
  }
  [le]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[le]();
  }
}
class Xe {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof wn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof vn ? this.size : this.size.toPhysical(t);
  }
  [le]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[le]();
  }
}
class Xo {
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
    return new Le(this.x * t, this.y * t);
  }
  [le]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[le]();
  }
}
class Le {
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
    return new Xo(this.x / t, this.y / t);
  }
  [le]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[le]();
  }
}
class zn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Xo ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Le ? this.position : this.position.toPhysical(t);
  }
  [le]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[le]();
  }
}
var se;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(se || (se = {}));
async function Ko(e, t) {
  await I("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function xn(e, t, n) {
  var i;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return I("plugin:event|listen", {
    event: e,
    target: s,
    handler: rl(t)
  }).then((o) => async () => Ko(e, o));
}
async function ul(e, t, n) {
  return xn(e, (i) => {
    Ko(e, i.id), t(i);
  }, n);
}
async function hl(e, t) {
  await I("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function dl(e, t, n) {
  await I("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let fl = class Un extends cl {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, i) {
    return I("plugin:image|new", {
      rgba: Jn(t),
      width: n,
      height: i
    }).then((s) => new Un(s));
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
    return I("plugin:image|from_bytes", {
      bytes: Jn(t)
    }).then((n) => new Un(n));
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
    return I("plugin:image|from_path", { path: t }).then((n) => new Un(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return I("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return I("plugin:image|size", { rid: this.rid });
  }
};
function Jn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof fl ? e.rid : e;
}
var Ei;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ei || (Ei = {}));
class gl {
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
var Fs;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Fs || (Fs = {}));
function ml() {
  return new En(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function _i() {
  return I("plugin:window|get_all_windows").then((e) => e.map((t) => new En(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Si = ["tauri://created", "tauri://error"];
class En {
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
    var i;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || I("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (i = n.parent) === null || i === void 0 ? void 0 : i.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (s) => this.emit("tauri://error", s));
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
    return (n = (await _i()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ml();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return _i();
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
    for (const t of await _i())
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
      const i = this.listeners[t];
      i.splice(i.indexOf(n), 1);
    } : xn(t, n, {
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
      const i = this.listeners[t];
      i.splice(i.indexOf(n), 1);
    } : ul(t, n, {
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
    if (Si.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return hl(t, n);
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
  async emitTo(t, n, i) {
    if (Si.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return dl(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Si.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return I("plugin:window|scale_factor", {
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
    return I("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Le(t));
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
    return I("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Le(t));
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
    return I("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new vn(t));
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
    return I("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new vn(t));
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
    return I("plugin:window|is_fullscreen", {
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
    return I("plugin:window|is_minimized", {
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
    return I("plugin:window|is_maximized", {
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
    return I("plugin:window|is_focused", {
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
    return I("plugin:window|is_decorated", {
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
    return I("plugin:window|is_resizable", {
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
    return I("plugin:window|is_maximizable", {
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
    return I("plugin:window|is_minimizable", {
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
    return I("plugin:window|is_closable", {
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
    return I("plugin:window|is_visible", {
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
    return I("plugin:window|title", {
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
    return I("plugin:window|theme", {
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
    return I("plugin:window|is_always_on_top", {
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
    return I("plugin:window|center", {
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
    return t && (t === Ei.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), I("plugin:window|request_user_attention", {
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
    return I("plugin:window|set_resizable", {
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
    return I("plugin:window|set_enabled", {
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
    return I("plugin:window|is_enabled", {
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
    return I("plugin:window|set_maximizable", {
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
    return I("plugin:window|set_minimizable", {
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
    return I("plugin:window|set_closable", {
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
    return I("plugin:window|set_title", {
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
    return I("plugin:window|maximize", {
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
    return I("plugin:window|unmaximize", {
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
    return I("plugin:window|toggle_maximize", {
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
    return I("plugin:window|minimize", {
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
    return I("plugin:window|unminimize", {
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
    return I("plugin:window|show", {
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
    return I("plugin:window|hide", {
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
    return I("plugin:window|close", {
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
    return I("plugin:window|destroy", {
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
    return I("plugin:window|set_decorations", {
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
    return I("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return I("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return I("plugin:window|set_effects", {
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
    return I("plugin:window|set_always_on_top", {
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
    return I("plugin:window|set_always_on_bottom", {
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
    return I("plugin:window|set_content_protected", {
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
    return I("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Xe ? t : new Xe(t)
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
    return I("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Xe ? t : t ? new Xe(t) : null
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
    return I("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Xe ? t : t ? new Xe(t) : null
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
    function n(i) {
      return i ? { Logical: i } : null;
    }
    return I("plugin:window|set_size_constraints", {
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
    return I("plugin:window|set_position", {
      label: this.label,
      value: t instanceof zn ? t : new zn(t)
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
    return I("plugin:window|set_fullscreen", {
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
    return I("plugin:window|set_focus", {
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
    return I("plugin:window|set_icon", {
      label: this.label,
      value: Jn(t)
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
    return I("plugin:window|set_skip_taskbar", {
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
    return I("plugin:window|set_cursor_grab", {
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
    return I("plugin:window|set_cursor_visible", {
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
    return I("plugin:window|set_cursor_icon", {
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
    return I("plugin:window|set_background_color", { color: t });
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
    return I("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof zn ? t : new zn(t)
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
    return I("plugin:window|set_ignore_cursor_events", {
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
    return I("plugin:window|start_dragging", {
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
    return I("plugin:window|start_resize_dragging", {
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
    return I("plugin:window|set_badge_count", {
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
    return I("plugin:window|set_badge_label", {
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
    return I("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Jn(t) : void 0
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
    return I("plugin:window|set_progress_bar", {
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
    return I("plugin:window|set_visible_on_all_workspaces", {
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
    return I("plugin:window|set_title_bar_style", {
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
    return I("plugin:window|set_theme", {
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
    return this.listen(se.WINDOW_RESIZED, (n) => {
      n.payload = new vn(n.payload), t(n);
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
    return this.listen(se.WINDOW_MOVED, (n) => {
      n.payload = new Le(n.payload), t(n);
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
    return this.listen(se.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new gl(n);
      await t(i), i.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(se.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Le(a.payload.position)
        }
      });
    }), i = await this.listen(se.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Le(a.payload.position)
        }
      });
    }), s = await this.listen(se.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Le(a.payload.position)
        }
      });
    }), o = await this.listen(se.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), i(), o();
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
    const n = await this.listen(se.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(se.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
    });
    return () => {
      n(), i();
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
    return this.listen(se.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(se.WINDOW_THEME_CHANGED, t);
  }
}
var Bs;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Bs || (Bs = {}));
var Hs;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Hs || (Hs = {}));
var js;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(js || (js = {}));
function Ft(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Us(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function Ji(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function pl(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function ye(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function Ke(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class yl {
  constructor(t, n) {
    V(this, "canvas");
    V(this, "ctx");
    V(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = n;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t) {
    if (!Ke(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const n = this.canvas.width / (window.devicePixelRatio || 1), i = this.canvas.height / (window.devicePixelRatio || 1), s = Math.round(t.x), o = Math.round(t.y), a = Math.round(t.width), r = Math.round(t.height);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, n, i), this.ctx.moveTo(s, o), this.ctx.lineTo(s, o + r), this.ctx.lineTo(s + a, o + r), this.ctx.lineTo(s + a, o), this.ctx.closePath(), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, n = !0) {
    const { x: i, y: s, width: o, height: a } = t;
    this.ctx.save();
    const r = Math.round(i) + 0.5, l = Math.round(s) + 0.5, c = Math.max(0, Math.round(o) - 1), d = Math.max(0, Math.round(a) - 1);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.strokeRect(r + 1, l + 1, c, d), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.strokeRect(r, l, c, d), n && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: n, y: i, width: s, height: o } = t, a = Ji(t);
    this.ctx.setLineDash([]), [
      { x: n, y: i, width: 10, height: 10 },
      // 左上
      { x: n + s, y: i, width: 10, height: 10 },
      // 右上
      { x: n, y: i + o, width: 10, height: 10 },
      // 左下
      { x: n + s, y: i + o, width: 10, height: 10 },
      // 右下
      { x: a.x, y: i, width: 16, height: 6 },
      // 上中
      { x: a.x, y: i + o, width: 16, height: 6 },
      // 下中
      { x: n, y: a.y, width: 6, height: 16 },
      // 左中
      { x: n + s, y: a.y, width: 6, height: 16 }
      // 右中
    ].forEach((l) => {
      const c = Math.round(l.x) - l.width / 2, d = Math.round(l.y) - l.height / 2, g = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(c + 1, d + 1, l.width, l.height, g), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(c, d, l.width, l.height, g), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
    });
  }
  // 绘制标注列表
  drawAnnotations(t, n) {
    const i = this.createDrawingContext(n);
    t.forEach((s) => {
      const o = s.getData();
      o.hovered && s.drawHover(i), s.draw(i), o.selected && (s.drawSelection(i), ["rectangle", "ellipse", "line", "arrow"].includes(o.type) && this.drawAnnotationHandles(s));
    });
  }
  // 绘制当前正在创建的标注
  drawCurrentAnnotation(t, n) {
    const i = this.createDrawingContext(n);
    t.draw(i);
  }
  // 创建绘制上下文
  createDrawingContext(t) {
    return {
      ctx: this.ctx,
      scale: 1,
      offset: { x: 0, y: 0 },
      bounds: t || { x: 0, y: 0, width: this.canvas.width, height: this.canvas.height }
    };
  }
  // 为截图创建绘制上下文
  createScreenshotContext(t, n, i) {
    return {
      ctx: t,
      scale: n,
      offset: { x: i.x * n, y: i.y * n },
      bounds: i
    };
  }
  // 获取坐标转换器
  getCoordinateTransform() {
    return this.coordinateTransform;
  }
  // 获取画布
  getCanvas() {
    return this.canvas;
  }
  // 获取上下文
  getContext() {
    return this.ctx;
  }
  // 绘制标注控制点
  drawAnnotationHandles(t) {
    const n = t.getData();
    if (n.type !== "mosaic" && n.type !== "text" && ["rectangle", "ellipse", "line", "arrow"].includes(n.type) && n.points.length >= 2) {
      const i = n.points[0], s = n.points[n.points.length - 1], o = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(i.x, i.y, o, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(s.x, s.y, o, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, n) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: i, colorInfo: s, showFormat: o, previewImage: a, zoomFactor: r, isCopied: l } = t, c = 156, d = 188, g = 18;
    let y = i.x + g, w = i.y + g;
    y + c > n.x + n.width && (y = i.x - c - g), w + d > n.y + n.height && (w = i.y - d - g), y < n.x && (y = n.x + g), w < n.y && (w = n.y + g), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(y, w, c, d, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const k = 108, f = y + (c - k) / 2, b = w + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(f, b, k, k), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(f, b, k, k);
    const p = a ? a.width : r, M = k / p;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      f,
      b,
      k,
      k
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let H = 1; H < p; H++) {
      const Z = f + H * M;
      this.ctx.moveTo(Z, b), this.ctx.lineTo(Z, b + k);
      const Q = b + H * M;
      this.ctx.moveTo(f, Q), this.ctx.lineTo(f + k, Q);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let H = 1; H < p; H++) {
      const Z = f + H * M + 0.5;
      this.ctx.moveTo(Z, b), this.ctx.lineTo(Z, b + k);
      const Q = b + H * M + 0.5;
      this.ctx.moveTo(f, Q), this.ctx.lineTo(f + k, Q);
    }
    this.ctx.stroke();
    const v = Math.floor(p / 2), T = f + v * M, O = b + v * M;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(T, O, M, M), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      T - 1,
      O - 1,
      M + 2,
      M + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      T,
      O,
      M,
      M
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let z = b + k + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(y + 16, z - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(y + 16, z - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const H = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(H, y + 44, z), z += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, y + 16, z), z += 17, this.ctx.font = "12px Arial";
    const R = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(R, y + 16, z), this.ctx.restore();
  }
}
class wl {
  // 物理尺寸
  constructor(t) {
    V(this, "scale");
    V(this, "canvasRect");
    V(this, "canvasSize");
    // 逻辑尺寸
    V(this, "physicalSize");
    this.canvasRect = t.getBoundingClientRect(), this.canvasSize = {
      width: this.canvasRect.width,
      height: this.canvasRect.height
    }, this.physicalSize = {
      width: t.width,
      height: t.height
    }, this.scale = this.calculateScale();
  }
  // 更新画布矩形信息
  updateCanvasRect(t) {
    this.canvasRect = t.getBoundingClientRect(), this.canvasSize = {
      width: this.canvasRect.width,
      height: this.canvasRect.height
    }, this.physicalSize = {
      width: t.width,
      height: t.height
    }, this.scale = this.calculateScale();
  }
  // 计算缩放比例（DPI）
  calculateScale() {
    return this.physicalSize.width / this.canvasRect.width;
  }
  // 从鼠标事件获取画布坐标
  getCanvasPosition(t) {
    return {
      x: t.clientX - this.canvasRect.left,
      y: t.clientY - this.canvasRect.top
    };
  }
  // 逻辑像素转物理像素
  logicalToPhysical(t) {
    return ye(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return ye(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, n) {
    return !ye(t) || !Ke(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !ye(t) || !Ke(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + n.x,
      y: t.y + n.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Ke(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!ye(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const n = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return pl(t, n);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Ke(t))
      return console.warn("Invalid rect in clampRectToCanvas:", t), { x: 0, y: 0, width: 0, height: 0 };
    const n = Math.max(0, t.x), i = Math.max(0, t.y), s = Math.min(this.canvasSize.width - n, t.width), o = Math.min(this.canvasSize.height - i, t.height);
    return { x: n, y: i, width: s, height: o };
  }
  // 获取画布尺寸
  getCanvasSize() {
    return { ...this.canvasSize };
  }
  // 获取缩放比例
  getScale() {
    return this.scale;
  }
  // 计算两点间距离（使用工具函数）
  distance(t, n) {
    return Ft(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!ye(t) || !Ke(n))
      return !1;
    if (i === 0)
      return Us(t, n);
    const s = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Us(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, s = 8) {
    if (!ye(t) || !ye(n) || !ye(i))
      return !1;
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, d = r * r + l * l;
    if (d === 0)
      return Ft(t, n) <= s;
    const g = c / d;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Ft(t, y) <= s;
  }
}
var F = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(F || {}), L = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(L || {});
class vl {
  constructor(t, n) {
    V(this, "coordinateSystem");
    V(this, "canvas");
    V(this, "isDrawing", !1);
    V(this, "currentOperation", F.None);
    V(this, "startPoint", { x: 0, y: 0 });
    V(this, "lastMousePos", { x: 0, y: 0 });
    V(this, "preventDefault", (t) => {
      t.preventDefault();
    });
    this.canvas = t, this.coordinateSystem = n, this.bindEvents();
  }
  bindEvents() {
    this.canvas.addEventListener("contextmenu", this.preventDefault), this.canvas.addEventListener("dragstart", this.preventDefault), this.canvas.addEventListener("selectstart", this.preventDefault);
  }
  unbind() {
    this.canvas.removeEventListener("contextmenu", this.preventDefault), this.canvas.removeEventListener("dragstart", this.preventDefault), this.canvas.removeEventListener("selectstart", this.preventDefault);
  }
  getOperationType(t, n, i, s) {
    const o = this.getAnnotationAtPoint(t, s);
    if (n !== L.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(n) : F.None : F.Drawing;
    if (o) {
      if (o.getData().type === L.Mosaic)
        return F.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== F.None ? a : F.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : F.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [L.Rectangle]: F.DrawingRect,
      [L.Ellipse]: F.DrawingEllipse,
      [L.Line]: F.DrawingLine,
      [L.Arrow]: F.DrawingArrow,
      [L.Pen]: F.DrawingPen,
      [L.Text]: F.DrawingText,
      [L.Mosaic]: F.DrawingMosaic,
      [L.ColorPicker]: F.ColorPicking,
      [L.Ocr]: F.None,
      [L.Pin]: F.Pinning,
      [L.Translate]: F.None,
      [L.Select]: F.None
    }[t] || F.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, n, i) {
    const { x: s, y: o, width: a, height: r } = n, l = 12;
    if (i)
      return F.None;
    const c = Ji(n);
    return this.isInHandle(t, { x: s, y: o }, l) ? F.ResizingNW : this.isInHandle(t, { x: s + a, y: o }, l) ? F.ResizingNE : this.isInHandle(t, { x: s, y: o + r }, l) ? F.ResizingSW : this.isInHandle(t, { x: s + a, y: o + r }, l) ? F.ResizingSE : this.isInHandle(t, { x: c.x, y: o }, l) ? F.ResizingN : this.isInHandle(t, { x: c.x, y: o + r }, l) ? F.ResizingS : this.isInHandle(t, { x: s, y: c.y }, l) ? F.ResizingW : this.isInHandle(t, { x: s + a, y: c.y }, l) ? F.ResizingE : this.coordinateSystem.isPointInRect(t, n) ? F.Moving : F.Drawing;
  }
  // 检查是否在控制点范围内
  isInHandle(t, n, i) {
    return Math.abs(t.x - n.x) <= i && Math.abs(t.y - n.y) <= i;
  }
  // 获取指定位置的标注
  getAnnotationAtPoint(t, n) {
    for (let i = n.length - 1; i >= 0; i--) {
      const s = n[i];
      if (s.hitTest(t))
        return s;
    }
    return null;
  }
  // 获取标注控制点操作类型
  getAnnotationControlPointOperation(t, n) {
    if (!ye(t))
      return F.None;
    const i = n.getData();
    if (i.type === L.Mosaic || i.type === L.Text)
      return F.None;
    if ([
      L.Rectangle,
      L.Ellipse,
      L.Line,
      L.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = Ft(t, s), c = Ft(t, o);
      if (l <= a + r)
        return F.ResizingAnnotationNW;
      if (c <= a + r)
        return F.ResizingAnnotationSE;
    }
    return F.None;
  }
  // 获取绘制状态
  getDrawingState() {
    return {
      isDrawing: this.isDrawing,
      currentOperation: this.currentOperation,
      startPoint: this.startPoint,
      lastMousePos: this.lastMousePos
    };
  }
  // 设置操作类型
  setCurrentOperation(t) {
    this.currentOperation = t;
  }
  // 开始绘制操作
  startDrawing(t) {
    this.isDrawing = !0, this.startPoint = t, this.lastMousePos = t;
  }
  // 结束绘制操作
  stopDrawing() {
    this.isDrawing = !1, this.currentOperation = F.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class Ue {
  constructor(t) {
    V(this, "data");
    this.data = t;
  }
  // 获取标注数据
  getData() {
    return this.data;
  }
  // 更新标注数据
  updateData(t) {
    this.data = { ...this.data, ...t };
  }
  // 添加点
  addPoint(t) {
    this.data.points.push(t);
  }
  // 更新最后一个点
  updateLastPoint(t) {
    this.data.points.length > 0 && (this.data.points[this.data.points.length - 1] = t);
  }
  // 移动标注
  move(t, n) {
    this.data.points.forEach((i) => {
      i.x += t, i.y += n;
    });
  }
  // 检查是否有效
  isValid() {
    return this.data.points.length >= this.getMinPoints();
  }
  applyOpacity(t) {
    t.globalAlpha *= this.data.style.opacity ?? 1;
  }
  // 生成唯一ID
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
class xl extends Ue {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: L.Rectangle,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = s.x - i.x, a = s.y - i.y;
    n.save(), this.applyOpacity(n), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(i.x, i.y, o, a), n.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: o.x * i - s.x,
      y: o.y * i - s.y
    }, l = (a.x - o.x) * i, c = (a.y - o.y) * i;
    n.save(), this.applyOpacity(n), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth * i, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(r.x, r.y, l, c), n.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = Math.min(i.x, s.x), a = Math.max(i.x, s.x), r = Math.min(i.y, s.y), l = Math.max(i.y, s.y);
    return t.x >= o - n && t.x <= a + n && t.y >= r - n && t.y <= l + n;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), s = Math.max(t.x, n.x), o = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    const { ctx: n } = t, i = 6;
    n.save(), n.fillStyle = "#3b82f6", n.strokeStyle = "#ffffff", n.lineWidth = 1, this.data.points.forEach((s) => {
      n.fillRect(s.x - i / 2, s.y - i / 2, i, i), n.strokeRect(s.x - i / 2, s.y - i / 2, i, i);
    }), n.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = s.x - i.x, a = s.y - i.y;
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(i.x, i.y, o, a), n.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, n = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const s = this.data.points[i];
      if (Ft(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class bl extends Ue {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: L.Ellipse,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    this.data.points.length < 2 || this.drawEllipse(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.data.points.length < 2 || this.drawEllipse(t.ctx, t.scale, t.offset);
  }
  drawEllipse(t, n, i) {
    const s = this.getBounds();
    if (!s) return;
    const o = (s.x + s.width / 2) * n - i.x, a = (s.y + s.height / 2) * n - i.y, r = Math.max(s.width * n / 2, 0.5), l = Math.max(s.height * n / 2, 0.5);
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.ellipse(o, a, r, l, 0, 0, Math.PI * 2), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    const i = this.getBounds();
    if (!i) return !1;
    const s = i.width / 2, o = i.height / 2;
    if (s < 1 || o < 1)
      return t.x >= i.x - n && t.x <= i.x + i.width + n && t.y >= i.y - n && t.y <= i.y + i.height + n;
    const a = i.x + s, r = i.y + o, l = Math.sqrt(
      (t.x - a) ** 2 / s ** 2 + (t.y - r) ** 2 / o ** 2
    );
    return Math.abs(l - 1) * Math.min(s, o) <= n;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), s = Math.max(t.x, n.x), o = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    const { ctx: n } = t, i = this.getBounds();
    i && (n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.setLineDash([3, 3]), n.strokeRect(i.x, i.y, i.width, i.height), n.restore());
  }
  drawHover(t) {
    const { ctx: n } = t, i = this.getBounds();
    i && (n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.beginPath(), n.ellipse(
      i.x + i.width / 2,
      i.y + i.height / 2,
      Math.max(i.width / 2, 0.5),
      Math.max(i.height / 2, 0.5),
      0,
      0,
      Math.PI * 2
    ), n.stroke(), n.restore());
  }
}
class kl extends Ue {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: L.Line,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    this.data.points.length < 2 || this.drawLine(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.data.points.length < 2 || this.drawLine(t.ctx, t.scale, t.offset);
  }
  drawLine(t, n, i) {
    const s = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(s.x * n - i.x, s.y * n - i.y), t.lineTo(o.x * n - i.x, o.y * n - i.y), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, s, n);
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), s = Math.max(t.x, n.x), o = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    this.drawEndpoints(t.ctx);
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.beginPath(), n.moveTo(i.x, i.y), n.lineTo(s.x, s.y), n.stroke(), n.restore();
  }
  drawEndpoints(t) {
    t.save(), t.fillStyle = "#3b82f6", t.strokeStyle = "#ffffff", t.lineWidth = 1, this.data.points.forEach((i) => {
      t.fillRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6), t.strokeRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6);
    }), t.restore();
  }
  isPointNearLine(t, n, i, s) {
    const o = i.x - n.x, a = i.y - n.y, r = o * o + a * a;
    if (r === 0)
      return Ft(t, n) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - n.x) * o + (t.y - n.y) * a) / r)), c = {
      x: n.x + l * o,
      y: n.y + l * a
    };
    return Ft(t, c) <= s;
  }
}
class _l extends Ue {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: L.Arrow,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t;
    this.drawArrow(n, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n, scale: i, offset: s } = t;
    this.drawArrow(n, i, s);
  }
  drawArrow(t, n, i) {
    const s = this.data.points[0], o = this.data.points[this.data.points.length - 1], a = {
      x: s.x * n - i.x,
      y: s.y * n - i.y
    }, r = {
      x: o.x * n - i.x,
      y: o.y * n - i.y
    };
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
    const l = Math.atan2(o.y - s.y, o.x - s.x), c = 15 * n, d = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l - d),
      r.y - c * Math.sin(l - d)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l + d),
      r.y - c * Math.sin(l + d)
    ), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, s, n);
  }
  isPointNearLine(t, n, i, s) {
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, d = r * r + l * l;
    if (d === 0)
      return Ft(t, n) <= s;
    const g = c / d;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Ft(t, y) <= s;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), s = Math.max(t.x, n.x), o = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    const { ctx: n } = t, i = 6;
    n.save(), n.fillStyle = "#3b82f6", n.strokeStyle = "#ffffff", n.lineWidth = 1, this.data.points.forEach((s) => {
      n.fillRect(s.x - i / 2, s.y - i / 2, i, i), n.strokeRect(s.x - i / 2, s.y - i / 2, i, i);
    }), n.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.beginPath(), n.moveTo(i.x, i.y), n.lineTo(s.x, s.y), n.stroke(), n.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, n = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const s = this.data.points[i];
      if (Ft(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Sl extends Ue {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: L.Pen,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  // 智能添加点（带插值）
  addPoint(t) {
    if (this.data.points.length > 0) {
      const n = this.data.points[this.data.points.length - 1], i = Ft(t, n);
      if (i > 5) {
        const s = Math.ceil(i / 3);
        for (let o = 1; o < s; o++) {
          const a = o / s, r = n.x + (t.x - n.x) * a, l = n.y + (t.y - n.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t;
    this.drawPath(n, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n, scale: i, offset: s } = t;
    this.drawPath(n, i, s);
  }
  drawPath(t, n, i) {
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
    const s = this.data.points[0], o = s.x * n - i.x, a = s.y * n - i.y;
    t.moveTo(o, a);
    for (let r = 1; r < this.data.points.length; r++) {
      const l = this.data.points[r], c = l.x * n - i.x, d = l.y * n - i.y;
      t.lineTo(c, d);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? Ft(t, this.data.points[0]) <= n : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const s = this.data.points[i], o = this.data.points[i + 1];
      if (this.isPointNearLine(t, s, o, n))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, n, i, s) {
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, d = r * r + l * l;
    if (d === 0)
      return Ft(t, n) <= s;
    const g = c / d;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Ft(t, y) <= s;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, n = this.data.points[0].x, i = this.data.points[0].y, s = this.data.points[0].y;
    return this.data.points.forEach((o) => {
      t = Math.min(t, o.x), n = Math.max(n, o.x), i = Math.min(i, o.y), s = Math.max(s, o.y);
    }), {
      x: t,
      y: i,
      width: n - t,
      height: s - i
    };
  }
  drawSelection(t) {
    const n = this.getBounds();
    if (!n) return;
    const { ctx: i } = t;
    i.save(), i.setLineDash([2, 2]), i.strokeStyle = "#3b82f6", i.lineWidth = 1, i.strokeRect(n.x, n.y, n.width, n.height), i.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t;
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.lineCap = "round", n.lineJoin = "round", n.beginPath(), n.moveTo(this.data.points[0].x, this.data.points[0].y);
    for (let i = 1; i < this.data.points.length; i++)
      n.lineTo(this.data.points[i].x, this.data.points[i].y);
    n.stroke(), n.restore();
  }
}
const Ze = "sans-serif", qe = (e) => ({
  x: e.x + 4,
  y: e.y - 8
});
class Cl extends Ue {
  constructor(t, n, i, s = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: L.Text,
      points: [t],
      style: i,
      text: n,
      fontSize: s
    });
  }
  getMinPoints() {
    return 1;
  }
  // 更新文字内容
  updateText(t) {
    this.data.text = t;
  }
  // 更新字体大小
  updateFontSize(t) {
    this.data.fontSize = t;
  }
  draw(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n } = t;
    this.drawText(n, 1, { x: 0, y: 0 }, t.bounds);
  }
  drawToScreenshot(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s, bounds: o } = t;
    this.drawText(n, i, s, o);
  }
  drawText(t, n, i, s) {
    const o = (this.data.fontSize || 16) * n, a = this.data.points[0];
    t.save(), this.applyOpacity(t), t.font = `${o}px ${Ze}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = qe(a), l = r.x * n - i.x, c = r.y * n - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, n = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${Ze}`;
    const l = a.measureText(this.data.text).width, { x: c, y: d } = qe(i);
    return t.x >= c - n && t.x <= c + l + n && t.y >= d - n && t.y <= d + s + n;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], n = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${n}px ${Ze}`;
    const a = s.measureText(this.data.text).width, { x: r, y: l } = qe(t);
    return {
      x: r,
      y: l,
      width: a,
      height: n
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = qe(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Ze}`;
    const g = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(l, c, g, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = qe(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Ze}`;
    const g = n.measureText(this.data.text).width;
    n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(l, c, g, a), n.restore();
  }
  // 获取文字内容
  getText() {
    return this.data.text || "";
  }
  // 获取字体大小
  getFontSize() {
    return this.data.fontSize || 16;
  }
  // 检查是否为空文字
  isEmpty() {
    return !this.data.text || this.data.text.trim().length === 0;
  }
  // 重写isValid方法
  isValid() {
    return this.data.points.length >= this.getMinPoints() && !this.isEmpty();
  }
}
const we = class we extends Ue {
  constructor(t, n, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: L.Mosaic,
      points: [t],
      style: n,
      mosaicSize: i,
      mosaicColor: "transparent"
      // 真实马赛克不需要颜色，颜色源自底图
    });
  }
  getMinPoints() {
    return 1;
  }
  addPoint(t) {
    if (this.data.points.length > 0) {
      const n = this.data.points[this.data.points.length - 1], i = Ft(t, n);
      if (i > 2) {
        const s = Math.ceil(i / 2);
        for (let o = 1; o < s; o++) {
          const a = o / s, r = n.x + (t.x - n.x) * a, l = n.y + (t.y - n.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length === 0) return;
    const { ctx: n, bounds: i } = t;
    this.renderRealMosaic(n, window.devicePixelRatio || 1, { x: 0, y: 0 }, i);
  }
  drawToScreenshot(t) {
    if (this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s, bounds: o } = t;
    this.renderRealMosaic(n, i, s, o);
  }
  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  renderRealMosaic(t, n, i, s) {
    we.helperCanvas || (we.helperCanvas = document.createElement("canvas"), we.helperCtx = we.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const o = we.helperCanvas, a = we.helperCtx, r = n || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), d = Math.max(l * 3, 24), g = this.getBounds();
    if (!g) return;
    const y = d, w = Math.floor(g.x - y), k = Math.floor(g.y - y), f = Math.ceil(g.width + y * 2), b = Math.ceil(g.height + y * 2);
    if (f <= 0 || b <= 0) return;
    const p = Math.floor(w * r - i.x), M = Math.floor(k * r - i.y), v = Math.ceil(f * r), T = Math.ceil(b * r), O = t.canvas.width, z = t.canvas.height, R = Math.max(0, p), H = Math.max(0, M), Z = Math.min(v, O - R), Q = Math.min(T, z - H);
    if (Z <= 0 || Q <= 0) return;
    let ot;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), ot = t.getImageData(R, H, Z, Q), t.restore();
    } catch {
      return;
    }
    const at = ot.data, ht = R % c, Pt = H % c;
    for (let mt = -Pt; mt < Q; mt += c)
      for (let nt = -ht; nt < Z; nt += c) {
        const lt = Math.max(0, nt), St = Math.max(0, mt), dt = Math.min(Z, nt + c), U = Math.min(Q, mt + c);
        if (lt >= dt || St >= U) continue;
        let pt = 0, K = 0, Mt = 0, zt = 0;
        for (let Vt = St; Vt < U; Vt++)
          for (let Lt = lt; Lt < dt; Lt++) {
            const gt = (Vt * Z + Lt) * 4;
            pt += at[gt], K += at[gt + 1], Mt += at[gt + 2], zt++;
          }
        if (zt > 0) {
          pt = Math.round(pt / zt / 8) * 8, K = Math.round(K / zt / 8) * 8, Mt = Math.round(Mt / zt / 8) * 8;
          for (let Lt = St; Lt < U; Lt++)
            for (let gt = lt; gt < dt; gt++) {
              const Yt = (Lt * Z + gt) * 4;
              at[Yt] = pt, at[Yt + 1] = K, at[Yt + 2] = Mt;
            }
        }
      }
    o.width = Z, o.height = Q, a.putImageData(ot, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = d * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, R, H), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, R, H), t.restore();
  }
  // 在物理坐标系中绘制路径
  drawPathPhysical(t, n, i, s, o) {
    if (this.data.points.length < 1) return;
    t.beginPath();
    const a = (l) => l.x * n - i.x - s, r = (l) => l.y * n - i.y - o;
    if (this.data.points.length === 1) {
      const l = this.data.points[0];
      t.arc(a(l), r(l), t.lineWidth / 2, 0, Math.PI * 2), t.fill();
    } else {
      const l = this.data.points[0];
      t.moveTo(a(l), r(l));
      for (let d = 1; d < this.data.points.length - 1; d++) {
        const g = this.data.points[d], y = this.data.points[d + 1], w = (a(g) + a(y)) / 2, k = (r(g) + r(y)) / 2;
        t.quadraticCurveTo(a(g), r(g), w, k);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Ft(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + n;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const s = this.data.points[i], o = this.data.points[i + 1];
      if (this.isPointNearLine(t, s, o, (this.data.mosaicSize || 8) * 1.5 + n))
        return !0;
    }
    return !1;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, n = this.data.points[0].x, i = this.data.points[0].y, s = this.data.points[0].y;
    for (const o of this.data.points)
      t = Math.min(t, o.x), n = Math.max(n, o.x), i = Math.min(i, o.y), s = Math.max(s, o.y);
    return {
      x: t,
      y: i,
      width: n - t,
      height: s - i
    };
  }
  isPointNearLine(t, n, i, s) {
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, d = r * r + l * l;
    let g = -1;
    d !== 0 && (g = c / d);
    let y, w;
    g < 0 ? (y = n.x, w = n.y) : g > 1 ? (y = i.x, w = i.y) : (y = n.x + g * r, w = n.y + g * l);
    const k = t.x - y, f = t.y - w;
    return k * k + f * f <= s * s;
  }
  drawSelection(t) {
  }
  drawHover(t) {
  }
  updateMosaicSize(t) {
    this.data.mosaicSize = t;
  }
  getMosaicSize() {
    return this.data.mosaicSize || 8;
  }
};
// 缓存离屏 Canvas 以减少 GC 压力（静态复用）
V(we, "helperCanvas", null), V(we, "helperCtx", null);
let Ii = we;
class Dn {
  static createAnnotation(t, n, i, s = {}) {
    switch (t) {
      case L.Rectangle:
        return new xl(n, i);
      case L.Ellipse:
        return new bl(n, i);
      case L.Line:
        return new kl(n, i);
      case L.Arrow:
        return new _l(n, i);
      case L.Pen:
        return new Sl(n, i);
      case L.Text:
        return new Cl(
          n,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case L.Mosaic:
        return new Ii(
          n,
          i,
          s.mosaicSize || 8
        );
      default:
        return null;
    }
  }
  // 从数据恢复标注
  static fromData(t) {
    const { type: n, points: i, style: s } = t;
    if (!i || i.length === 0) return null;
    const o = i[0], a = this.createAnnotation(n, o, s, {
      text: t.text,
      fontSize: t.fontSize,
      mosaicSize: t.mosaicSize
    });
    if (a) {
      for (let r = 1; r < i.length; r++)
        a.addPoint(i[r]);
      a.updateData({
        id: t.id,
        selected: t.selected,
        hovered: t.hovered
      });
    }
    return a;
  }
  // 获取工具对应的操作类型
  static getOperationType(t) {
    return {
      [L.Rectangle]: "drawing-rect",
      [L.Ellipse]: "drawing-ellipse",
      [L.Line]: "drawing-line",
      [L.Arrow]: "drawing-arrow",
      [L.Pen]: "drawing-pen",
      [L.Text]: "drawing-text",
      [L.Mosaic]: "drawing-mosaic",
      [L.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== L.Select && t !== L.ColorPicker && t !== L.Ocr && t !== L.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== L.Select && t !== L.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      L.Rectangle,
      L.Ellipse,
      L.Line,
      L.Arrow,
      L.Pen,
      L.Text
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      L.Rectangle,
      L.Ellipse,
      L.Line,
      L.Arrow,
      L.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === L.Text;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === L.Mosaic;
  }
}
const We = class We {
  constructor() {
    V(this, "pool", []);
    V(this, "maxPoolSize", 5);
    // 最大池大小
    V(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return We.instance || (We.instance = new We()), We.instance;
  }
  /**
   * 获取一个 canvas 对象
   * @param width 宽度
   * @param height 高度
   * @returns canvas 对象
   */
  acquire(t, n) {
    const i = this.pool.findIndex(
      (a) => a.width >= t && a.height >= n && !this.inUse.has(a)
    );
    let s;
    i !== -1 ? (s = this.pool[i], this.pool.splice(i, 1)) : s = document.createElement("canvas"), s.width = t, s.height = n;
    const o = s.getContext("2d");
    return o && o.clearRect(0, 0, t, n), this.inUse.add(s), s;
  }
  /**
   * 释放 canvas 对象回池中
   * @param canvas 要释放的 canvas
   */
  release(t) {
    if (this.inUse.has(t) && (this.inUse.delete(t), this.pool.length < this.maxPoolSize)) {
      const n = t.getContext("2d");
      n && n.clearRect(0, 0, t.width, t.height), this.pool.push(t);
    }
  }
  /**
   * 清空池
   */
  clear() {
    this.pool = [], this.inUse.clear();
  }
  /**
   * 获取池状态
   */
  getStats() {
    return {
      poolSize: this.pool.length,
      inUse: this.inUse.size
    };
  }
};
V(We, "instance");
let Ai = We;
async function Tl(e, t) {
  return await I("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const Ml = "snippets-code:developer-mode", Zo = "snippets-code:frontend-diagnostics", Ll = 240, dn = "[REDACTED]", Vn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${dn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${dn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  dn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${dn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${dn}`
), Qi = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Vn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Vn(
      JSON.stringify(
        e,
        (n, i) => {
          if (i instanceof Error)
            return {
              name: i.name,
              message: i.message,
              stack: i.stack,
              cause: i.cause
            };
          if (typeof i == "bigint") return i.toString();
          if (typeof i == "object" && i !== null) {
            if (t.has(i)) return "[Circular]";
            t.add(i);
          }
          return i;
        },
        2
      )
    );
  } catch {
    return Vn(String(e));
  }
}, Rl = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Pl = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Zo) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, ts = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ml) === "true";
  } catch {
    return !1;
  }
}, El = (e, t, n) => {
  if (!ts() || typeof localStorage > "u") return;
  const i = Pl();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Rl(),
    message: Vn(t),
    data: Qi(n)
  });
  try {
    localStorage.setItem(
      Zo,
      JSON.stringify(i.slice(-Ll))
    );
  } catch {
  }
}, Il = () => ts(), Al = (e) => e === "warn" || e === "error" || !1 || !1 || ts(), Nn = (e, t, n) => {
  El(e, t, n), Al(e) && I("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Qi(n)
  }).catch(() => {
  });
}, j = {
  info: (e, t, ...n) => {
    Nn("info", e, t);
  },
  error: (e, t) => {
    Nn("error", e, t);
  },
  warn: (e, t) => {
    Nn("warn", e, t);
  },
  debug: (e, t) => {
    Il() && Nn("debug", e, t);
  }
}, Ht = {
  log: (e, t) => {
    I("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : Qi(t)
    }).catch(() => {
    });
  }
}, Ol = "resources/transformers/transformers.min.js", zl = ["translation-offline-runtime", "translation"], Dl = "https://huggingface.co/", Nl = "{model}/resolve/{revision}/", Wl = "/__snippets_code_disabled_transformers_local_models__/", $l = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let fn = null;
const Fl = (e) => {
  const t = e.toLowerCase();
  return [
    { index: e.lastIndexOf("/"), length: 1 },
    { index: e.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (i, s) => s.index > i.index ? s : i,
    { index: -1, length: 0 }
  );
}, qo = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = Fl(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, Jo = (e) => {
  const t = qo(e);
  return Object.fromEntries(
    $l.map((n) => [n, `${t}${n}`])
  );
}, Qo = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Dl, e.remotePathTemplate = Nl, e.allowLocalModels = !1, e.localModelPath = Wl, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = Jo(t), e.backends.onnx.wasm.numThreads = 1);
};
async function Bl() {
  return fn || (fn = (async () => {
    for (const e of zl) {
      const t = await Tl(e, Ol);
      if (!t) continue;
      const n = ll(t), i = await import(
        /* @vite-ignore */
        n
      );
      return Qo(i.env, n), j.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
        wasmPaths: i.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: i.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: i.env.remoteHost,
        remotePathTemplate: i.env.remotePathTemplate,
        allowLocalModels: i.env.allowLocalModels,
        localModelPath: i.env.localModelPath
      }), i;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw fn = null, e;
  }), fn);
}
let _e = null, bn = !1, Je = null, $e = null, Oi = null;
const Hl = "Xenova/opus-mt-en-zh", jl = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Ul = 3e5;
function Vl(e) {
  Oi = e;
}
function Yl() {
  return jl;
}
function Gl(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function ta() {
  return _e || Je || (bn = !0, j.info("[离线翻译] 正在加载翻译模型..."), Je = (async () => {
    try {
      const { pipeline: e, env: t } = await Bl();
      Qo(t);
      let n = "";
      const i = e("translation", Hl, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== n && (n = o.file, j.info(`[离线翻译] 已加载: ${o.file}`)), Oi && Oi({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return _e = await Gl(
        i,
        Ul,
        "模型加载超时，请检查网络连接后重试"
      ), j.info("[离线翻译] 翻译模型加载完成"), bn = !1, _e;
    } catch (e) {
      throw bn = !1, Je = null, j.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Je);
}
async function ea(e) {
  if (!e?.trim()) return e;
  $e = new AbortController();
  const t = $e.signal;
  try {
    const n = await ta();
    if (t.aborted)
      throw new Error("翻译已取消");
    const i = e.split(`
`), s = [];
    for (const o of i) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const a = o.trim();
      if (!a) {
        s.push("");
        continue;
      }
      const r = await n(a);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(r) && r.length > 0) {
        const l = r[0].translation_text || a;
        s.push(l);
      } else
        s.push(a);
    }
    return s.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (j.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (j.warn("[离线翻译] 运行时资源未安装"), n) : (j.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    $e = null;
  }
}
function Xl() {
  $e && ($e.abort(), $e = null, j.info("[离线翻译] 已发送取消信号"));
}
function Kl() {
  return $e !== null;
}
async function na() {
  await ta();
}
function Zl() {
  return _e !== null;
}
function ql() {
  return bn;
}
async function es() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      j.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const s = await (await caches.open(n)).keys();
          if (j.info(`[离线翻译] Cache "${n}" 包含 ${s.length} 个文件`), s.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = s.some((r) => r.url.includes(".onnx"));
            if (j.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: n,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const e = await indexedDB.databases();
    j.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return j.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return j.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return j.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function Jl() {
  return (await es()).isCached;
}
function Ql() {
  return _e !== null;
}
async function tc() {
  if (_e)
    try {
      await _e.dispose?.();
    } catch {
    }
  _e = null, Je = null, bn = !1, j.info("[离线翻译] 翻译器已释放");
}
async function ec() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), j.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), j.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    j.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw j.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Ql,
  cancelOfflineTranslation: Xl,
  clearModelCache: ec,
  disposeOfflineTranslator: tc,
  getModelCacheInfo: es,
  getModelFiles: Yl,
  getRuntimeBaseUrl: qo,
  getRuntimeWasmPaths: Jo,
  isModelCached: Jl,
  isOfflineTranslatorInitializing: ql,
  isOfflineTranslatorReady: Zl,
  isTranslationInProgress: Kl,
  setProgressCallback: Vl,
  translateOffline: ea,
  warmupOfflineTranslator: na
}, Symbol.toStringTag, { value: "Module" }));
class Ne {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => Vp).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, n), n;
  }
  /**
   * 懒加载离线翻译模块
   */
  static async loadOfflineTranslator() {
    const t = "offlineTranslator";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve(nc).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, n), n;
  }
  /**
   * 预加载模块（在空闲时）
   */
  static preloadModules() {
    "requestIdleCallback" in window ? requestIdleCallback(() => {
      this.loadOCR().catch(() => {
      }), this.loadOfflineTranslator().catch(() => {
      });
    }, { timeout: 2e3 }) : setTimeout(() => {
      this.loadOCR().catch(() => {
      }), this.loadOfflineTranslator().catch(() => {
      });
    }, 1e3);
  }
  /**
   * 清除已加载的模块
   */
  static clear() {
    this.loadedModules.clear(), this.loadingPromises.clear();
  }
  /**
   * 获取加载状态
   */
  static getLoadStatus() {
    return {
      loaded: Array.from(this.loadedModules.keys()),
      loading: Array.from(this.loadingPromises.keys())
    };
  }
}
V(Ne, "loadedModules", /* @__PURE__ */ new Map()), V(Ne, "loadingPromises", /* @__PURE__ */ new Map());
function ia(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = e.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, d = n + s + a + l;
  return d === 0 ? "unknown" : s >= 3 && s > l && s / d >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / d >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function Qe(e) {
  return e === "zh" || e === "en";
}
function De(e) {
  return ia(e);
}
const ic = /[.!?。！？；;：:][)"'”’】）\]]*$/, Vs = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, Wn = /[A-Za-z0-9]/, sc = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Ys = /(?:^|\s)(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function sa(e, t = {}) {
  const n = jc(e), i = yc(e, n);
  return i.length === 0 ? [] : gc(i, n) ? fc(i, n) : (t.mode === "single_para" ? [pn(i, n)] : ac(i, n)).flatMap((o) => oc(o, n));
}
function oc(e, t) {
  const n = is(e, t), i = [];
  for (const s of n) {
    const o = i[i.length - 1], a = o ? _c(o, s, t) : !1;
    if (!o || !a) {
      i.push(Cc(s));
      continue;
    }
    o.text = Mc(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = ua(o.bbox, s.bbox), o.fontSize = Ks(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Ks(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return Lc(i, t);
}
function ac(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: mc(l),
    block: l
  })).filter((l) => pc(l.bbox)).sort(ns);
  if (n.length <= 1)
    return [pn(e, t)];
  if (rc(n, t))
    return [pn(e, t)];
  const { cuts: i, rows: s } = lc(n);
  if (i.length < 2 || s.length <= 1)
    return [pn(e, t)];
  const o = hc(i, s), r = dc(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [pn(e, t)];
}
function rc(e, t) {
  if (e.length < 2)
    return !0;
  const n = [...e].sort(ns);
  let i = 0, s = 0;
  for (let o = 1; o < n.length; o += 1) {
    const a = n[o - 1].bbox, r = n[o].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const c = Math.min(a.right, r.right) - Math.max(a.left, r.left), d = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), g = c / d >= 0.45, y = Math.abs(a.left - r.left) <= t * 1.5;
    (g || y) && (s += 1);
  }
  return i > 0 && s / i >= 0.72;
}
function lc(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < e.length; ) {
    const c = e[a].bbox.bottom, d = [];
    for (; a < e.length && e[a].bbox.top <= c; )
      d.push(e[a]), a += 1;
    d.sort((f, b) => f.bbox.left - b.bbox.left || f.bbox.right - b.bbox.right);
    const g = cc(d, t, n, i.length), { gaps: y, removedGaps: w } = uc(o, g), k = i.length - 1;
    for (const f of w)
      s.push({
        left: f.left,
        right: f.right,
        startRow: f.startRow,
        endRow: k
      });
    o = y, i.push(d);
  }
  const r = i.length - 1;
  for (const l of o)
    s.push({
      left: l.left,
      right: l.right,
      startRow: l.startRow,
      endRow: r
    });
  return s.sort((l, c) => l.left - c.left || l.right - c.right), { cuts: s, rows: i };
}
function cc(e, t, n, i) {
  const s = [];
  let o = t;
  for (const a of e)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: n, startRow: i }), s;
}
function uc(e, t) {
  const n = e.map(() => !1), i = t.map(() => !1), s = [];
  for (let o = 0; o < e.length; o += 1) {
    const a = e[o];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], c = Math.max(a.left, l.left), d = Math.min(a.right, l.right);
      c <= d && (s.push({ left: c, right: d, startRow: a.startRow }), n[o] = !0, i[r] = !0);
    }
  }
  for (let o = 0; o < t.length; o += 1)
    i[o] || s.push(t[o]);
  return {
    gaps: s,
    removedGaps: e.filter((o, a) => !n[a])
  };
}
function hc(e, t) {
  const n = t.map(() => []);
  for (const r of e)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      n[l]?.push({ left: r.left, right: r.right });
  for (const r of n)
    r.sort((l, c) => l.left - c.left || l.right - c.right);
  const i = {
    xLeft: e[0].left - 1,
    xRight: e[e.length - 1].right + 1,
    rowTop: -1,
    rowBottom: -1,
    units: [],
    children: []
  }, s = [i];
  let o = [];
  const a = (r) => {
    const l = r.xRight - 2, c = s.filter((w) => l >= w.xLeft && l <= w.xRight + 1e-4 && w.rowBottom < r.rowTop), d = Math.max(...c.map((w) => w.rowBottom), i.rowBottom), g = c.filter((w) => w.rowBottom === d);
    (g.length > 0 ? g.reduce((w, k) => k.xRight > w.xRight ? k : w) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = n[r], c = [];
    for (const w of o) {
      let k = !1, f = !1, b = !1;
      for (const p of l)
        if ($n(p.right, w.xLeft) && (k = !0), $n(p.left, w.xRight) && (f = !0), w.xLeft < p.left && p.left < w.xRight || w.xLeft < p.right && p.right < w.xRight) {
          b = !0;
          break;
        }
      !k || !f || b ? a(w) : (w.rowBottom = r, c.push(w));
    }
    o = c;
    let d = 0, g = 0;
    const y = t[r];
    for (; d < y.length && l.length >= 2; ) {
      const w = y[d];
      g + 1 >= l.length && (g = Math.max(0, l.length - 2));
      const k = l[g].right, f = l[g + 1].left;
      if (w.bbox.left + 1e-4 > f && g < l.length - 2) {
        g += 1;
        continue;
      }
      let b = o.find((p) => $n(p.xLeft, k) && $n(p.xRight, f));
      b || (b = {
        xLeft: k,
        xRight: f,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(b)), b.units.push(w), d += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(ns);
  return i;
}
function dc(e) {
  const t = [e], n = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (n.push(i), t.push(...[...i.children].reverse()));
  }
  return n;
}
function pn(e, t) {
  return [...e].sort((n, i) => {
    const s = n.y - i.y;
    return Math.abs(s) > t * 0.45 ? s : n.x - i.x;
  });
}
function fc(e, t) {
  const n = Ee(ee(e.map((a) => a.width)), t * 0.5), i = Math.max(n * 1.4, t * 0.28), s = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? ee(l.map((d) => d.x + d.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((y, w) => y.y - w.y), l = r.reduce((y, w, k) => {
      const f = w.text.trim();
      return k === 0 ? f : ss(y, f);
    }, ""), c = ca(r), d = ee(r.map((y) => Ee(y.fontSize, t))), g = ee(r.map((y) => ai(y)));
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: d,
      lineHeight: g,
      angle: ee(r.map((y) => y.angle || 0))
    };
  });
}
function gc(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function mc(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function pc(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function ns(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function $n(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function yc(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || wc(n, t) || xc(i))
      return null;
    const s = bc(vc(i, n, t));
    return s === n.text ? n : { ...n, text: s };
  }).filter((n) => !!n);
}
function wc(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function vc(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function xc(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function bc(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function is(e, t) {
  const n = [...e].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of n) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !Wc(a.blocks, o, t) ? (a.blocks.push(o), a.y = ee(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => kc(o.blocks, t));
}
function kc(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = ca(n), s = n.reduce((r, l, c) => {
    const d = l.text.trim();
    return c === 0 ? d : Tc(r, d);
  }, ""), o = ee(n.map((r) => Ee(r.fontSize, t))), a = ee(n.map((r) => ai(r)));
  return {
    text: s,
    blocks: n,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: $c(n, t),
    isCodeLike: ra(s)
  };
}
function _c(e, t, n) {
  const i = is(e.blocks, n), s = i[i.length - 1];
  if (!s) return !1;
  const o = Cn(s.text);
  if (oi(s.text) || Cn(t.text) || o && !Sc(s, t, n) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -n * 0.25 || a >= n * 1.8 || Ac(i, a, n) || Oc(s, t, a, n) || zc(s, t, a, n) || Dc(s, t, a, n) || Nc(s, t, a, n))
    return !1;
  if (o)
    return !0;
  const r = Math.max(n * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function Sc(e, t, n) {
  if (aa(t.text))
    return !1;
  const i = t.bbox.x - e.bbox.x, s = Math.max(n * 0.8, e.lineHeight * 0.65);
  return i >= s;
}
function Cc(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: ee(e.blocks.map((t) => t.angle || 0))
  };
}
function Tc(e, t) {
  return ss(e, t);
}
function Mc(e, t) {
  return ss(e, t);
}
function ss(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const s = n.charAt(n.length - 1), o = i.charAt(0), a = n.charAt(n.length - 2);
  return s === "-" && Wn.test(a) && Wn.test(o) ? `${n.slice(0, -1)}${i}` : Uc(o) || Vc(s) ? `${n}${i}` : Vs.test(s) || Vs.test(o) || Zs(s) || Zs(o) ? `${n}${i}` : Wn.test(s) && Wn.test(o) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function oi(e) {
  return ic.test(e.trim());
}
function Cn(e) {
  return sc.test(e);
}
function Lc(e, t) {
  return e.flatMap((n) => Rc(n, t));
}
function Rc(e, t) {
  const n = oa(e.text);
  if (n.length <= 1)
    return [e];
  const i = is(e.blocks, t), s = i.length === n.length;
  return n.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || Ec(e.bbox, a, n.length), c = r?.blocks || [Ic(e, o, l, a)];
    return {
      ...e,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((d) => ra(d.text)),
      isStructuredBlock: e.isStructuredBlock,
      fontSize: ee(c.map((d) => Ee(d.fontSize, e.fontSize || t))),
      lineHeight: ee(c.map((d) => ai(d))),
      angle: ee(c.map((d) => d.angle || 0))
    };
  });
}
function oa(e) {
  const t = e.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(oa);
  const n = Pc(e);
  return n.length > 1 ? n.flatMap(Gs) : Gs(e);
}
function Pc(e) {
  const t = e.trim(), n = [];
  Ys.lastIndex = 0;
  for (const i of t.matchAll(Ys)) {
    const s = i[0], o = i.index ?? 0;
    n.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return n.length <= 1 ? [t] : n.map((i, s) => {
    const o = n[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function Gs(e) {
  const t = e.trim();
  if (!Cn(t))
    return [t];
  const n = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !n || !aa(n[2]) ? [t] : [n[1].trim(), n[2].trim()];
}
function Ec(e, t, n) {
  const i = e.height / Math.max(n, 1);
  return {
    x: e.x,
    y: e.y + i * t,
    width: e.width,
    height: i
  };
}
function Ic(e, t, n, i) {
  const s = e.blocks[Math.min(i, Math.max(e.blocks.length - 1, 0))];
  return {
    ...s || {
      fontSize: e.fontSize || n.height,
      lineHeight: e.lineHeight || n.height,
      angle: e.angle || 0
    },
    text: t,
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height,
    fontSize: s?.fontSize || e.fontSize || n.height,
    lineHeight: s?.lineHeight || e.lineHeight || n.height,
    angle: s?.angle || e.angle || 0
  };
}
function aa(e) {
  const t = e.trim();
  return !t || oi(t) || Cn(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Ac(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? ee(i) : 0, o = Math.max(s * 2.2, n * 1.15);
  return t > o;
}
function Oc(e, t, n, i) {
  const s = e.text.trim();
  if (!s || oi(s) || Cn(s) || e.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function zc(e, t, n, i) {
  if (n <= 0)
    return !1;
  const s = Math.max(e.fontSize, t.fontSize), o = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = s / o, r = n / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Dc(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const o = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Nc(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Xs(e.text) && Xs(t.text);
}
function Xs(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !oi(t);
}
function ra(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Wc(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > n * 0.9 && Hc(s.text) && la(t.text) ? !1 : o > n * 3.2;
}
function $c(e, t) {
  if (e.length < 2)
    return e.some((s) => Fc(s.text));
  const n = [...e].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < n.length; s++) {
    const o = n[s - 1], a = n[s], r = n[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && Bc(o.text) && la(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Fc(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Bc(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function Hc(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function la(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function ca(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => ua(n, i), t[0]);
}
function ua(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), s = Math.max(e.x + e.width, t.x + t.width), o = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: s - n,
    height: o - i
  };
}
function jc(e) {
  return Ee(ee(e.map((t) => ai(t))), 16);
}
function ai(e) {
  return Ee(e.lineHeight, Ee(e.height, Ee(e.fontSize, 16) * 1.2));
}
function Ks(e, t, n, i) {
  const s = t + i;
  return s <= 0 ? n : (e * t + n * i) / s;
}
function Ee(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function ee(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function Uc(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function Vc(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function Zs(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class Yc {
  constructor(t, n, i, s) {
    V(this, "canvas");
    V(this, "coordinateSystem");
    V(this, "drawingEngine");
    V(this, "eventHandler");
    // 状态管理
    V(this, "selectionRect", null);
    V(this, "annotations", []);
    V(this, "currentAnnotation", null);
    V(this, "selectedAnnotation", null);
    V(this, "hoveredAnnotation", null);
    // 拖拽状态
    V(this, "draggedAnnotation", null);
    V(this, "dragStartPoint", null);
    V(this, "resizingAnnotation", null);
    V(this, "resizeStartBounds", null);
    V(this, "resizeOperation", null);
    // 编辑状态
    V(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    V(this, "annotationUndoStack", []);
    V(this, "annotationRedoStack", []);
    V(this, "pendingDragSnapshot", null);
    V(this, "pendingResizeSnapshot", null);
    // 工具设置
    V(this, "currentTool", L.Select);
    V(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    V(this, "textSize", 16);
    V(this, "mosaicSize", 8);
    V(this, "showGuides", !0);
    // 取色器状态
    V(this, "colorPickerState", {
      isActive: !1,
      isVisible: !1,
      // 默认不可见
      mousePosition: { x: 0, y: 0 },
      showFormat: "hex",
      zoomFactor: 9,
      // 使用紧凑奇数采样，让中心像素醒目且面板不挤压底部信息
      isCopied: !1
    });
    // 窗口吸附相关
    V(this, "allWindows", []);
    V(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    V(this, "snappedWindow", null);
    V(this, "showSnapPreview", !1);
    // 点击拖拽区分
    V(this, "pendingSnapWindow", null);
    V(this, "dragStartPosition", null);
    V(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    V(this, "throttleTimer", null);
    V(this, "lastThrottledTimestamp", 0);
    V(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    V(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    V(this, "backgroundImage", null);
    // 是否正在加载完整背景图
    V(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    V(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    V(this, "offlineModelActivated", !1);
    // Canvas 池
    V(this, "canvasPool", Ai.getInstance());
    // 回调函数
    V(this, "onStateChange");
    V(this, "onTextInputRequest");
    V(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    V(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    V(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    V(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    V(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    V(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    V(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    V(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new wl(t), this.drawingEngine = new yl(t, this.coordinateSystem), this.eventHandler = new vl(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), Ne.preloadModules();
  }
  // 公开方法：触发背景图重新加载（响应 preview-ready 事件）
  triggerBackgroundReload() {
    this.backgroundReloadPending || (this.backgroundReloadPending = !0, this.isLoadingBackground = !1, this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null), this.loadScreenBackground().finally(() => {
      this.backgroundReloadPending = !1;
    }));
  }
  cloneAnnotationData(t) {
    return {
      ...t,
      points: t.points.map((n) => ({ ...n })),
      style: { ...t.style },
      selected: !1,
      hovered: !1
    };
  }
  createHistorySnapshot() {
    return {
      annotations: this.annotations.map((t) => this.cloneAnnotationData(t.getData())),
      selectedAnnotationId: this.selectedAnnotation?.getData().id || null
    };
  }
  pushAnnotationHistory() {
    this.annotationUndoStack.push(this.createHistorySnapshot()), this.annotationRedoStack = [];
  }
  restoreHistorySnapshot(t) {
    if (this.annotations = t.annotations.map((n) => Dn.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const n = this.annotations.find((i) => i.getData().id === t.selectedAnnotationId);
      n && (n.updateData({ selected: !0 }), this.selectedAnnotation = n);
    }
    this.draw(), this.onStateChange?.();
  }
  // 初始化画布
  initCanvas() {
    const t = this.canvas.parentElement;
    if (!t) return;
    const n = t.clientWidth, i = t.clientHeight, s = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(n * s), this.canvas.height = Math.round(i * s), this.canvas.style.width = n + "px", this.canvas.style.height = i + "px";
    const o = this.canvas.getContext("2d");
    o && o.scale(s, s), this.drawPendingState(), this.coordinateSystem.updateCanvasRect(this.canvas);
  }
  // 绘制等待状态（背景图加载前的中间状态）
  drawPendingState() {
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0.6)", t.fillRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
  // 加载预捕获的屏幕背景图像
  async loadScreenBackground() {
    if (!this.isLoadingBackground) {
      this.isLoadingBackground = !0;
      try {
        this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null), await this.loadPreviewImage(), await this.loadFullBackgroundImage();
      } catch (t) {
        j.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
      } finally {
        this.isLoadingBackground = !1;
      }
    }
  }
  // 加载预览图（等待但不显示）
  // 注意：预览图只用于等待，不作为背景显示（避免模糊）
  async loadPreviewImage() {
    let i = 0;
    for (; i < 5e3; )
      try {
        const s = await I("get_screenshot_preview");
        if (s && s.trim().length > 0)
          return;
        await new Promise((o) => setTimeout(o, 100)), i += 100;
      } catch (s) {
        const o = s?.toString() || "";
        if (o.includes("No screenshot preview available") || o.includes("being captured") || o.includes("Preview load timeout")) {
          await new Promise((a) => setTimeout(a, 100)), i += 100;
          continue;
        }
        break;
      }
  }
  // 加载完整背景图（高质量PNG）
  async loadFullBackgroundImage() {
    let i = 0;
    for (; i < 5e3; )
      try {
        const s = await I("get_screenshot_background");
        if (s) {
          const o = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              o.onload = null, o.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            o.onload = () => {
              clearTimeout(l), this.backgroundImage = o, this.draw(), a();
            }, o.onerror = (c) => {
              clearTimeout(l), r(c);
            }, o.src = `data:image/png;base64,${s}`;
          });
          return;
        }
      } catch (s) {
        if (s?.toString().includes("No screenshot background available") || s?.toString().includes("being captured")) {
          await new Promise((o) => setTimeout(o, 100)), i += 100;
          continue;
        }
        throw s;
      }
    this.createFallbackBackground();
  }
  // 创建后备背景（当背景图加载失败时使用）
  createFallbackBackground() {
    try {
      const t = new Image();
      t.width = 1, t.height = 1;
      const n = document.createElement("canvas");
      n.width = 1, n.height = 1;
      const i = n.getContext("2d");
      i && (i.fillStyle = "rgba(0, 0, 0, 0.3)", i.fillRect(0, 0, 1, 1), t.src = n.toDataURL()), t.onload = () => {
        this.backgroundImage = t, this.draw();
      };
    } catch (t) {
      j.error("[截图] 创建后备背景失败", t);
    }
  }
  // 绘制背景图像（支持预览图和完整图）
  drawBackground() {
    const t = this.canvas.getContext("2d");
    t && this.backgroundImage && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.imageSmoothingEnabled = !1, t.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
  // 加载所有窗口信息（使用预缓存数据 + 重试机制）
  async loadAllWindows() {
    try {
      let t = { x: 0, y: 0, scale: 1, isFullscreen: !1 }, n = [];
      const i = 10, s = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < i; l++)
        try {
          const [c, d] = await Promise.all([
            I("get_cached_monitor_info"),
            I("get_cached_window_list")
          ]);
          t = {
            x: c.x,
            y: c.y,
            scale: c.scale,
            isFullscreen: !1
          }, n = d;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((g) => setTimeout(g, s));
            continue;
          }
          const d = await Promise.all([
            I("get_window_info"),
            I("get_all_windows")
          ]);
          t = d[0], n = d[1];
        }
      const o = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.allWindows = n.filter((l) => this.isValidWindow(l)).map((l) => ({
        ...l,
        x: Math.round(l.x / o),
        y: Math.round(l.y / o),
        width: Math.round(l.width / o),
        height: Math.round(l.height / o)
      })).filter(
        (l) => l.x >= -l.width && l.y >= -l.height && l.x < a + l.width && l.y < r + l.height
      );
    } catch (t) {
      j.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
    }
  }
  // 检测初始窗口吸附（在窗口打开时立即调用）
  async detectInitialWindowSnap() {
    try {
      let i = 0;
      for (; this.allWindows.length === 0 && i < 500; )
        await new Promise((r) => setTimeout(r, 50)), i += 50;
      if (this.allWindows.length === 0)
        return;
      let s;
      try {
        const r = await I("get_cached_monitor_info");
        s = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        s = await I("get_window_info");
      }
      let o;
      try {
        const r = await I("get_mouse_position"), l = s?.scale || 1;
        o = {
          x: Math.round((r.x - s.x) / l),
          y: Math.round((r.y - s.y) / l)
        };
      } catch {
        o = {
          x: Math.round(this.canvas.width / (window.devicePixelRatio || 1) / 2),
          y: Math.round(this.canvas.height / (window.devicePixelRatio || 1) / 2)
        };
      }
      const a = this.detectNearbyWindow(o);
      a && (this.snappedWindow = a, this.showSnapPreview = !0, this.draw());
    } catch (t) {
      j.error("[截图] 初始窗口吸附检测失败", t);
    }
  }
  // 检查窗口是否有效
  isValidWindow(t) {
    if (!t.title || t.width < 100 || t.height < 100 || t.title.includes("screenshot") || t.title.includes("截图") || t.title.includes("Screenshot"))
      return !1;
    const n = [
      "Program Manager",
      "Desktop Window Manager",
      "Windows Security",
      "Task Manager",
      "Settings",
      "Microsoft Store",
      "Calculator",
      "Windows Input Experience",
      "Microsoft Text Input Application",
      "Windows Shell Experience Host",
      "Action Center",
      "Volume Control",
      "Network Connections",
      "Cortana",
      "Search",
      "Start",
      "Taskbar",
      "System Tray",
      "Notification Area",
      "Clock",
      "Volume",
      "Network",
      "Battery",
      "Power",
      "Language Bar",
      "Input Method Editor",
      "Windows PowerShell",
      "Command Prompt",
      "cmd.exe",
      "powershell.exe"
    ];
    for (const s of n)
      if (t.title === s || t.title.startsWith(s))
        return !1;
    return !(t.title.startsWith("NVIDIA") || t.title.startsWith("Intel") || t.title.startsWith("AMD") || t.title.startsWith("Realtek") || t.title.includes("Driver") || t.title.includes("Graphics") || t.title.includes("Background Task Host") || t.title.includes("Runtime Broker") || t.title.includes("Service Host") || t.title.includes("Windows Modules Installer") || t.title.includes("System Interrupts") || t.title.includes("Registry") || t.title.includes("dwm.exe") || t.title.includes("explorer.exe") || t.title.includes("winlogon.exe") || t.title.trim().replace(/[^\w\s\u4e00-\u9fa5]/g, "").length < 2);
  }
  detectNearbyWindow(t) {
    if (this.allWindows.length === 0) return null;
    const n = [];
    for (const i of this.allWindows) {
      if (t.x >= i.x && t.x <= i.x + i.width && t.y >= i.y && t.y <= i.y + i.height) {
        n.push({ window: i, distance: 0 });
        continue;
      }
      const o = Math.abs(t.x - i.x), a = Math.abs(t.x - (i.x + i.width)), r = Math.abs(t.y - i.y), l = Math.abs(t.y - (i.y + i.height)), c = Math.min(o, a, r, l);
      c <= this.snapThreshold && n.push({ window: i, distance: c });
    }
    return n.length === 0 ? null : n.reduce((i, s) => s.window.display_order < i.window.display_order ? s : s.window.display_order > i.window.display_order ? i : s.distance < i.distance ? s : s.distance > i.distance ? i : s.window.is_fullscreen && !i.window.is_fullscreen ? s : i).window;
  }
  // 绑定鼠标事件
  bindMouseEvents() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler), this.canvas.addEventListener("mousemove", this.mouseMoveHandler), this.canvas.addEventListener("mouseup", this.mouseUpHandler), this.canvas.addEventListener("dblclick", this.doubleClickHandler), window.addEventListener("keydown", this.keyDownHandler), window.addEventListener("keyup", this.keyUpHandler);
  }
  // 鼠标按下处理
  handleMouseDown(t) {
    t.preventDefault(), t.stopPropagation();
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getOperationType(
      n,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (i !== F.None)
      switch (this.eventHandler.setCurrentOperation(i), this.eventHandler.startDrawing(n), i) {
        case F.Drawing:
          !this.selectionRect && this.currentTool === L.Select && (this.dragStartPosition = { ...n }, this.snappedWindow ? this.pendingSnapWindow = this.snappedWindow : (this.selectionRect = {
            x: n.x,
            y: n.y,
            width: 0,
            height: 0
          }, this.onStateChange?.()));
          break;
        case F.DrawingRect:
        case F.DrawingEllipse:
        case F.DrawingLine:
        case F.DrawingArrow:
        case F.DrawingPen:
        case F.DrawingMosaic:
          this.startAnnotation(n);
          break;
        case F.DrawingText:
          this.startTextInput(n), this.eventHandler.stopDrawing();
          break;
        case F.ColorPicking:
          this.handleColorPicking(n), this.eventHandler.stopDrawing();
          break;
        case F.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case F.EditingAnnotation:
          this.selectAnnotationAtPoint(n), this.selectedAnnotation && this.selectedAnnotation.getData().type === L.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case F.MovingAnnotation:
          this.startAnnotationDrag(n);
          break;
        case F.ResizingAnnotationNW:
        case F.ResizingAnnotationSE:
          this.startAnnotationResize(n, i);
          break;
        case F.Moving:
        case F.ResizingNW:
        case F.ResizingNE:
        case F.ResizingSW:
        case F.ResizingSE:
        case F.ResizingN:
        case F.ResizingS:
        case F.ResizingW:
        case F.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(n), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && Ft(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapWindow = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(n) : this.draggedAnnotation ? this.updateAnnotationDrag(n) : this.resizingAnnotation ? this.updateAnnotationResize(n) : this.selectionRect && this.currentTool === L.Select && this.updateSelectionRect(n, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === L.Select && !this.selectionRect) {
        const s = this.detectNearbyWindow(n);
        s !== this.snappedWindow && (this.snappedWindow = s, this.showSnapPreview = !!s, this.draw());
      }
      this.updateHoverState(n), this.currentTool === L.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(n, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = n, this.draw(), this.throttledUpdateColorPreview(n)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapWindow && !this.selectionRect && (this.selectionRect = {
      x: this.pendingSnapWindow.x,
      y: this.pendingSnapWindow.y,
      width: this.pendingSnapWindow.width,
      height: this.pendingSnapWindow.height
    }), this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.showSnapPreview = !1, this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(n, this.annotations);
    i?.getData().type === L.Text && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(n, i));
  }
  // 键盘按下处理（内部）
  handleKeyDownInternal(t) {
    t.key === "Shift" && (this.isShiftPressed = !0);
  }
  // 键盘抬起处理
  handleKeyUp(t) {
    t.key === "Shift" && (this.isShiftPressed = !1);
  }
  // 更新选择框
  updateSelectionRect(t, n) {
    if (!this.selectionRect) return;
    const i = n.currentOperation, s = t.x - n.lastMousePos.x, o = t.y - n.lastMousePos.y;
    switch (i) {
      case F.Drawing:
        this.selectionRect.width = t.x - n.startPoint.x, this.selectionRect.height = t.y - n.startPoint.y;
        break;
      case F.Moving:
        this.selectionRect.x += s, this.selectionRect.y += o;
        break;
      case F.ResizingNW:
        this.selectionRect.x += s, this.selectionRect.y += o, this.selectionRect.width -= s, this.selectionRect.height -= o;
        break;
      case F.ResizingNE:
        this.selectionRect.y += o, this.selectionRect.width += s, this.selectionRect.height -= o;
        break;
      case F.ResizingSW:
        this.selectionRect.x += s, this.selectionRect.width -= s, this.selectionRect.height += o;
        break;
      case F.ResizingSE:
        this.selectionRect.width += s, this.selectionRect.height += o;
        break;
      case F.ResizingN:
        this.selectionRect.y += o, this.selectionRect.height -= o;
        break;
      case F.ResizingS:
        this.selectionRect.height += o;
        break;
      case F.ResizingW:
        this.selectionRect.x += s, this.selectionRect.width -= s;
        break;
      case F.ResizingE:
        this.selectionRect.width += s;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n && n !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === L.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
  }
  // 开始标注拖拽
  startAnnotationDrag(t) {
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n && (this.draggedAnnotation = n, this.dragStartPoint = t, this.pendingDragSnapshot = this.createHistorySnapshot(), this.selectedAnnotation !== n && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 })));
  }
  // 更新标注拖拽
  updateAnnotationDrag(t) {
    if (!this.draggedAnnotation || !this.dragStartPoint) return;
    const n = t.x - this.dragStartPoint.x, i = t.y - this.dragStartPoint.y;
    this.draggedAnnotation.move(n, i), this.constrainAnnotationToBounds(this.draggedAnnotation), this.dragStartPoint = t;
  }
  // 完成标注拖拽
  finishAnnotationDrag() {
    if (this.draggedAnnotation) {
      if (this.pendingDragSnapshot) {
        const t = this.draggedAnnotation.getData(), n = this.pendingDragSnapshot.annotations.find((s) => s.id === t.id);
        (n ? JSON.stringify(n.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingDragSnapshot), this.annotationRedoStack = []), this.pendingDragSnapshot = null;
      }
      this.draggedAnnotation = null, this.dragStartPoint = null;
    }
  }
  // 开始标注缩放
  startAnnotationResize(t, n) {
    const i = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    if (i) {
      this.resizingAnnotation = i, this.resizeOperation = n, this.pendingResizeSnapshot = this.createHistorySnapshot();
      const s = i.getBounds();
      s && (this.resizeStartBounds = { ...s }), this.selectedAnnotation !== i && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = i, this.selectedAnnotation.updateData({ selected: !0 }));
    }
  }
  // 更新标注缩放
  updateAnnotationResize(t) {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation) return;
    const n = this.resizingAnnotation.getData();
    if (n.points.length < 2) return;
    const i = n.points[0];
    switch (this.resizeOperation) {
      case F.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, n.points[1]]
        });
        break;
      case F.ResizingAnnotationSE:
        this.resizingAnnotation.updateData({
          points: [i, t]
        });
        break;
    }
    this.constrainAnnotationToBounds(this.resizingAnnotation);
  }
  // 完成标注缩放
  finishAnnotationResize() {
    if (this.resizingAnnotation) {
      if (this.pendingResizeSnapshot) {
        const t = this.resizingAnnotation.getData(), n = this.pendingResizeSnapshot.annotations.find((s) => s.id === t.id);
        (n ? JSON.stringify(n.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingResizeSnapshot), this.annotationRedoStack = []), this.pendingResizeSnapshot = null;
      }
      this.resizingAnnotation = null, this.resizeStartBounds = null, this.resizeOperation = null;
    }
  }
  // 边界约束：确保标注不超出选择框
  constrainAnnotationToBounds(t) {
    if (!this.selectionRect || !t.getBounds()) return;
    const i = t.getData();
    if (i.points.length < 1) return;
    const s = this.selectionRect;
    let o = !1, a = [...i.points];
    if (i.points.length >= 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        l.x < s.x ? (a[r] = { ...l, x: s.x }, o = !0) : l.x > s.x + s.width && (a[r] = { ...l, x: s.x + s.width }, o = !0), l.y < s.y ? (a[r] = { ...l, y: s.y }, o = !0) : l.y > s.y + s.height && (a[r] = { ...l, y: s.y + s.height }, o = !0);
      }
    if (i.points.length > 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        (l.x < s.x || l.x > s.x + s.width || l.y < s.y || l.y > s.y + s.height) && (a.splice(r, 1), r--, o = !0);
      }
    o && t.updateData({ points: a });
  }
  // 更新悬停状态
  updateHoverState(t) {
    if (this.currentTool !== L.Select) {
      this.updateToolCursor();
      return;
    }
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = n && n.getData().type !== L.Mosaic ? n : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== L.Select) {
      this.updateToolCursor();
      return;
    }
    if (!this.selectionRect) {
      this.updateCursor("crosshair");
      return;
    }
    const n = this.eventHandler.getOperationType(
      t,
      this.currentTool,
      this.selectionRect,
      this.annotations
    ), s = {
      [F.Moving]: "move",
      [F.ResizingNW]: "nw-resize",
      [F.ResizingNE]: "ne-resize",
      [F.ResizingSW]: "sw-resize",
      [F.ResizingSE]: "se-resize",
      [F.ResizingN]: "n-resize",
      [F.ResizingS]: "s-resize",
      [F.ResizingW]: "w-resize",
      [F.ResizingE]: "e-resize",
      [F.EditingAnnotation]: "pointer",
      [F.MovingAnnotation]: "move",
      [F.ResizingAnnotationNW]: "nw-resize",
      [F.ResizingAnnotationSE]: "se-resize",
      [F.Drawing]: "crosshair"
    }[n] || "default";
    this.updateCursor(s);
  }
  // 更新画布cursor样式
  updateCursor(t) {
    this.canvas.style.cursor !== t && (this.canvas.style.cursor = t);
  }
  // 根据当前工具更新光标样式
  updateToolCursor() {
    switch (this.currentTool) {
      case L.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case L.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case L.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case L.Rectangle:
      case L.Ellipse:
      case L.Line:
      case L.Arrow:
      case L.Text:
        this.updateCursor("crosshair");
        break;
      default:
        this.updateCursor("default");
    }
  }
  // 创建圆形光标（用于画笔和马赛克）
  createCircleCursor(t, n = "#666") {
    const i = Math.max(t / 2, 2), s = i * 2 + 4, o = s / 2, a = `
      <svg width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${o}" cy="${o}" r="${i}"
                fill="none" stroke="${n}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${o}" cy="${o}" r="1" fill="${n}" opacity="0.9"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(a)}') ${o} ${o}, crosshair`;
  }
  createPenCursor(t = "#ff4444") {
    const n = `
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20l4.8-1.1L20.2 7.5a2.2 2.2 0 0 0 0-3.1l-.6-.6a2.2 2.2 0 0 0-3.1 0L5.1 15.2 4 20z"
              fill="white" stroke="#111827" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M14.8 5.5l3.7 3.7" stroke="#111827" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M5.1 15.2L8.8 18.9" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(n)}') 4 20, crosshair`;
  }
  createColorPickerCursor() {
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 3.8a2.4 2.4 0 0 1 3.4 0l1.3 1.3a2.4 2.4 0 0 1 0 3.4l-9.4 9.4H7.4v-3.4l9.4-9.4z"
              fill="white" stroke="#111827" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M13.7 6.3l4 4" stroke="#111827" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M4 20h6" stroke="#4f46e5" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `)}') 4 20, crosshair`;
  }
  // 绘制所有内容
  draw() {
    if (this.drawingEngine.clear(), !this.backgroundImage) {
      this.drawPendingState();
      return;
    }
    if (this.drawBackground(), this.selectionRect && this.drawingEngine.drawMask(this.selectionRect), this.showSnapPreview && this.snappedWindow && !this.selectionRect && this.drawSnapPreview(), this.annotations.length > 0) {
      const t = this.editingAnnotation ? this.annotations.filter((n) => n.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
      this.drawingEngine.drawAnnotations(t, this.selectionRect || void 0);
    }
    this.currentAnnotation && this.drawingEngine.drawCurrentAnnotation(this.currentAnnotation, this.selectionRect || void 0), this.selectionRect && this.drawingEngine.drawSelectionBox(this.selectionRect, this.showGuides), this.colorPickerState.isActive && this.selectionRect && this.drawingEngine.drawColorPicker(this.colorPickerState, this.selectionRect), this.translationOverlay.isVisible && this.selectionRect && this.drawTranslationOverlay();
  }
  // 绘制翻译覆盖层（智能排版）
  drawTranslationOverlay() {
    if (!this.selectionRect) return;
    const t = this.canvas.getContext("2d");
    if (!t) return;
    t.save();
    const { x: n, y: i, width: s, height: o } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const f = n + s / 2, b = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(n, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle", t.fillText("正在识别翻译...", f, b), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const f = n + s / 2, b = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(n, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, f, b), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: n, y: i, width: s, height: o }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let d, g;
    if (c) {
      const f = Math.max(0, Math.round(l.r * 0.1)), b = Math.max(0, Math.round(l.g * 0.1)), p = Math.max(0, Math.round(l.b * 0.1));
      d = `rgba(${f}, ${b}, ${p}, 0.95)`, g = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), b = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), p = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      d = `rgba(${f}, ${b}, ${p}, 0.95)`, g = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = d, t.fillRect(n, i, s, o), t.fillStyle = g, t.textAlign = "left", t.textBaseline = "top";
    const y = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((f) => ({
      text: f.text,
      translatedText: f.translatedText,
      blocks: [f],
      bbox: {
        x: f.x,
        y: f.y,
        width: f.width,
        height: f.height
      },
      isCodeBlock: f.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: f.fontSize,
      lineHeight: f.lineHeight,
      angle: f.angle
    })), w = y.filter((f) => f.isStructuredBlock), k = y.filter((f) => !f.isStructuredBlock);
    k.length > 0 && this.drawFlowedTranslationBlocks(t, k, n, i, a, s, o);
    for (const f of w)
      this.drawStructuredTranslationBlock(t, f, n, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, s, o, a, r) {
    const l = [...n].filter((v) => (v.translatedText || v.text).trim()).sort((v, T) => {
      const O = v.bbox.y - T.bbox.y;
      return Math.abs(O) > 4 ? O : v.bbox.x - T.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), d = o, g = (v, T, O) => l.map((z) => {
      const R = (z.translatedText || z.text).trim(), H = Math.max(12, Math.min(z.fontSize || 16, 48)), Z = Math.max(8, Math.round(H * v)), Q = z.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', ot = Math.max(
        o,
        Math.min(z.bbox.x + o, a * 0.38)
      ), at = T ? o : ot, ht = Math.max(48, a - at - d), Pt = z.lineHeight || Z * 1.35, mt = Math.max(
        Z * (O ? 1.04 : 1.14),
        Math.min(Pt * v, Z * (O ? 1.18 : 1.42))
      );
      return t.font = `${Z}px ${Q}`, {
        text: R,
        fontSize: Z,
        fontFamily: Q,
        lineHeight: mt,
        paragraphGap: O ? Math.max(1, mt * 0.16) : Math.max(3, mt * 0.35),
        x: i + at,
        lines: this.wrapTextToLines(t, R, ht)
      };
    }), y = (v) => v.reduce((T, O, z) => {
      const R = z === v.length - 1 ? 0 : O.paragraphGap;
      return T + O.lines.length * O.lineHeight + R;
    }, 0);
    let w = g(1, !1, !1), k = y(w);
    if (k > c) {
      const v = Math.max(0.56, c / k);
      w = g(v, !1, !1), k = y(w);
    }
    if (k > c && (w = g(1, !0, !1), k = y(w)), k > c) {
      const v = Math.max(0.38, c / k * 0.96);
      w = g(v, !0, !0), k = y(w);
    }
    if (k > c) {
      const v = Math.max(0.3, c / k * 0.94);
      w = g(v, !0, !0), k = y(w);
    }
    const f = Math.min(...l.map((v) => v.bbox.y)), b = s + Math.max(o, Math.min(f, r - o)), p = s + r - o;
    let M = b + k > p ? s + o : b;
    for (const v of w) {
      t.font = `${v.fontSize}px ${v.fontFamily}`;
      for (const T of v.lines)
        t.fillText(T, v.x, M), M += v.lineHeight;
      M += v.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, s, o, a, r) {
    const l = [...n.blocks].sort((g, y) => g.x - y.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), d = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const g of l) {
      const y = g.translatedText || g.text;
      if (!y.trim()) continue;
      const w = i + g.x + Math.min(4, o), k = s + g.y, f = l.find((v) => v.x > g.x), b = f ? Math.max(g.width, f.x - g.x - 8) : Math.max(g.width, a - g.x - o), p = this.wrapTextToLines(t, y.trim(), b);
      let M = k;
      for (const v of p) {
        if (M + c > s + r) break;
        t.fillText(v, w, M), M += d;
      }
    }
  }
  /**
   * 将文字按宽度换行，返回行数组
   */
  wrapTextToLines(t, n, i) {
    const s = n.replace(/\s+/g, " ").trim();
    if (!s)
      return [];
    const o = [], a = /\s/.test(s) ? s.split(/(\s+)/).filter((c) => c.length > 0) : Array.from(s);
    let r = "";
    const l = (c) => {
      let d = "";
      for (const g of Array.from(c)) {
        const y = d + g;
        t.measureText(y).width > i && d !== "" ? (o.push(d), d = g) : d = y;
      }
      r = d;
    };
    for (const c of a) {
      const d = /^\s+$/.test(c), g = d ? " " : c, y = r + g;
      if (t.measureText(y).width <= i) {
        r = y;
        continue;
      }
      r.trim() && (o.push(r.trimEnd()), r = ""), !d && (t.measureText(g).width > i ? l(g) : r = g);
    }
    return r.trim() && o.push(r.trimEnd()), o;
  }
  /**
   * 从背景图像采样指定区域的平均颜色
   * @param rect 采样区域（相对于canvas的坐标）
   * @param sampleSize 采样点数量（默认16）
   * @returns 采样得到的颜色信息，包含RGB值和亮度值
   */
  sampleRegionColor(t, n = 16) {
    const i = { r: 255, g: 255, b: 255, brightness: 255 };
    if (!this.backgroundImage)
      return i;
    const s = window.devicePixelRatio || 1, o = Math.round(t.width * s), a = Math.round(t.height * s), r = this.canvasPool.acquire(o, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), i;
    const c = this.backgroundImage.width, d = this.backgroundImage.height, g = this.canvas.width / s, y = this.canvas.height / s, w = c / g, k = d / y, f = t.x * w, b = t.y * k, p = t.width * w, M = t.height * k;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        b,
        p,
        M,
        0,
        0,
        o,
        a
      );
    } catch (nt) {
      return j.error("[截图] 采样区域绘制失败", nt), this.canvasPool.release(r), i;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (nt) {
      return j.error("[截图] 获取像素数据失败", nt), this.canvasPool.release(r), i;
    }
    const T = v.data, O = Math.ceil(Math.sqrt(n)), z = o / (O + 1), R = a / (O + 1);
    let H = 0, Z = 0, Q = 0, ot = 0;
    for (let nt = 1; nt <= O; nt++)
      for (let lt = 1; lt <= O && !(ot >= n); lt++) {
        const St = Math.floor(lt * z), dt = Math.floor(nt * R);
        if (St >= 0 && St < o && dt >= 0 && dt < a) {
          const U = (dt * o + St) * 4;
          U >= 0 && U + 2 < T.length && (H += T[U], Z += T[U + 1], Q += T[U + 2], ot++);
        }
      }
    if (this.canvasPool.release(r), ot === 0)
      return i;
    const at = Math.round(H / ot), ht = Math.round(Z / ot), Pt = Math.round(Q / ot), mt = this.getBrightness(at, ht, Pt);
    return {
      r: at,
      g: ht,
      b: Pt,
      brightness: mt
    };
  }
  /**
   * 计算颜色的亮度值
   * 使用标准公式: brightness = 0.299*R + 0.587*G + 0.114*B
   * @param r 红色分量 (0-255)
   * @param g 绿色分量 (0-255)
   * @param b 蓝色分量 (0-255)
   * @returns 亮度值 (0-255)
   */
  getBrightness(t, n, i) {
    const s = Math.max(0, Math.min(255, t)), o = Math.max(0, Math.min(255, n)), a = Math.max(0, Math.min(255, i));
    return Math.round(0.299 * s + 0.587 * o + 0.114 * a);
  }
  /**
   * 根据采样颜色计算覆盖层样式
   * 深色背景（亮度 < 128）：使用深色半透明背景 + 浅色文字
   * 浅色背景（亮度 >= 128）：使用浅色半透明背景 + 深色文字
   * @param sampledColor 采样得到的背景颜色
   * @returns 覆盖层样式
   */
  calculateOverlayStyle(t) {
    const { brightness: n } = t, i = n < 128, s = n / 255, a = 0.85 + Math.abs(s - 0.5) * 2 * 0.1;
    let r, l;
    if (i) {
      const c = Math.max(0, Math.round(t.r * 0.2)), d = Math.max(0, Math.round(t.g * 0.2)), g = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${c}, ${d}, ${g}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const c = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), d = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), g = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${c}, ${d}, ${g}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
    }
    return {
      backgroundColor: r,
      textColor: l,
      borderRadius: 3,
      // 轻微圆角（2-4px范围内）
      padding: 4
      // 内边距
    };
  }
  /**
   * 检测指定区域是否为纯色（颜色方差小于阈值）
   * 通过计算采样点的颜色方差来判断区域是否为纯色
   * @param rect 检测区域（相对于canvas的坐标）
   * @param threshold 方差阈值，默认100，方差小于此值认为是纯色
   * @param sampleSize 采样点数量，默认16
   * @returns 是否为纯色区域
   */
  isUniformColor(t, n = 100, i = 16) {
    if (!this.backgroundImage)
      return !1;
    const s = window.devicePixelRatio || 1, o = Math.round(t.width * s), a = Math.round(t.height * s), r = this.canvasPool.acquire(o, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const c = this.backgroundImage.width, d = this.backgroundImage.height, g = this.canvas.width / s, y = this.canvas.height / s, w = c / g, k = d / y, f = t.x * w, b = t.y * k, p = t.width * w, M = t.height * k;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        b,
        p,
        M,
        0,
        0,
        o,
        a
      );
    } catch (nt) {
      return j.error("[截图] isUniformColor: 采样区域绘制失败", nt), this.canvasPool.release(r), !1;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (nt) {
      return j.error("[截图] isUniformColor: 获取像素数据失败", nt), this.canvasPool.release(r), !1;
    }
    const T = v.data, O = Math.ceil(Math.sqrt(i)), z = o / (O + 1), R = a / (O + 1), H = [];
    for (let nt = 1; nt <= O; nt++)
      for (let lt = 1; lt <= O && !(H.length >= i); lt++) {
        const St = Math.floor(lt * z), dt = Math.floor(nt * R);
        if (St >= 0 && St < o && dt >= 0 && dt < a) {
          const U = (dt * o + St) * 4;
          U >= 0 && U + 2 < T.length && H.push({
            r: T[U],
            g: T[U + 1],
            b: T[U + 2]
          });
        }
      }
    if (this.canvasPool.release(r), H.length < 2)
      return !1;
    const Z = H.reduce((nt, lt) => nt + lt.r, 0) / H.length, Q = H.reduce((nt, lt) => nt + lt.g, 0) / H.length, ot = H.reduce((nt, lt) => nt + lt.b, 0) / H.length, at = H.reduce((nt, lt) => nt + Math.pow(lt.r - Z, 2), 0) / H.length, ht = H.reduce((nt, lt) => nt + Math.pow(lt.g - Q, 2), 0) / H.length, Pt = H.reduce((nt, lt) => nt + Math.pow(lt.b - ot, 2), 0) / H.length;
    return (at + ht + Pt) / 3 < n;
  }
  /**
   * 根据OCR块高度估算合适的字体大小
   * 基础公式: fontSize = blockHeight * 0.8
   * 边界约束: fontSize = clamp(fontSize, 12, blockHeight * 0.85)
   * @param blockHeight OCR块的高度
   * @returns 估算的字体大小
   */
  estimateFontSize(t) {
    if (t <= 0)
      return 12;
    const n = t * 0.8, i = t * 0.85, o = Math.max(12, Math.min(n, i));
    return Math.round(o);
  }
  /**
   * 根据文字内容和块宽度调整字体大小
   * 测量文字宽度，如果超出块宽度则缩小字体
   * 最小字体不低于12px
   * @param text 文字内容
   * @param blockWidth 块宽度
   * @param initialFontSize 初始字体大小
   * @param ctx Canvas上下文（用于测量文字宽度）
   * @returns 调整后的字体大小
   */
  fitTextToWidth(t, n, i, s) {
    if (!t || t.length === 0)
      return i;
    if (n <= 0 || i <= 12)
      return 12;
    const r = n - 4 * 2;
    if (r <= 0)
      return 12;
    let l = i;
    const c = s.font;
    for (; l > 12 && (s.font = `${l}px sans-serif`, !(s.measureText(t).width <= r)); )
      l -= 1;
    return s.font = c, Math.max(l, 12);
  }
  // 绘制窗口吸附预览
  drawSnapPreview() {
    if (!this.snappedWindow) return;
    const t = this.canvas.getContext("2d");
    if (t) {
      if (t.save(), t.strokeStyle = "#00a8ff", t.lineWidth = 2, t.setLineDash([5, 5]), t.fillStyle = "rgba(0, 168, 255, 0.1)", t.fillRect(
        this.snappedWindow.x,
        this.snappedWindow.y,
        this.snappedWindow.width,
        this.snappedWindow.height
      ), t.strokeRect(
        this.snappedWindow.x,
        this.snappedWindow.y,
        this.snappedWindow.width,
        this.snappedWindow.height
      ), this.snappedWindow.title) {
        t.setLineDash([]), t.font = "12px sans-serif", t.fillStyle = "#00a8ff", t.textAlign = "center", t.textBaseline = "bottom";
        const i = Ji(this.snappedWindow).x, s = this.snappedWindow.y - 5, o = t.measureText(this.snappedWindow.title), a = 4;
        t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(
          i - o.width / 2 - a,
          s - 12 - a,
          o.width + a * 2,
          16
        ), t.fillStyle = "#00a8ff", t.fillText(this.snappedWindow.title, i, s);
      }
      t.restore();
    }
  }
  // 设置工具
  setTool(t) {
    this.currentTool = t, this.clearSelection(), this.showGuides = t === L.Select, this.colorPickerState.isActive = t === L.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== L.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== L.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.showSnapPreview = !1, this.pendingSnapWindow = null, this.dragStartPosition = null, t !== L.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === L.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (Dn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === L.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = Dn.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const n = this.currentAnnotation.getData();
    switch (n.type) {
      case L.Rectangle:
      case L.Ellipse:
      case L.Line:
      case L.Arrow:
        t = this.getConstrainedShapeEndPoint(n.type, n.points[0], t), n.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case L.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case L.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  getConstrainedShapeEndPoint(t, n, i) {
    if (!this.isShiftPressed) return i;
    const s = i.x - n.x, o = i.y - n.y;
    if (t === L.Ellipse || t === L.Rectangle) {
      const a = Math.max(Math.abs(s), Math.abs(o));
      return {
        x: n.x + Math.sign(s || 1) * a,
        y: n.y + Math.sign(o || 1) * a
      };
    }
    if (t === L.Line || t === L.Arrow) {
      const a = Math.sqrt(s * s + o * o), r = Math.PI / 4, l = Math.round(Math.atan2(o, s) / r) * r;
      return {
        x: n.x + Math.cos(l) * a,
        y: n.y + Math.sin(l) * a
      };
    }
    return i;
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === L.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const n = this.currentAnnotation.getData().points;
    if (n.length < 3) return;
    let i = n[0].x, s = n[0].x, o = n[0].y, a = n[0].y;
    n.forEach((w) => {
      i = Math.min(i, w.x), s = Math.max(s, w.x), o = Math.min(o, w.y), a = Math.max(a, w.y);
    });
    const r = s - i, l = a - o;
    let c = 0;
    for (let w = 1; w < n.length; w++)
      c += Ft(n[w - 1], n[w]);
    const g = Ft(n[0], n[n.length - 1]) / c, y = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (g > 0.85 || y > 5) {
      const w = n[0], k = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [w, k] });
      return;
    }
  }
  // 撤销最后一个操作（标注或翻译）
  undoAnnotation() {
    if (this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0) {
      this.clearTranslationOverlay();
      return;
    }
    if (this.annotationUndoStack.length === 0)
      return;
    this.annotationRedoStack.push(this.createHistorySnapshot());
    const t = this.annotationUndoStack.pop();
    t && this.restoreHistorySnapshot(t);
  }
  // 恢复最后一次撤销的操作
  redoAnnotation() {
    if (this.annotationRedoStack.length === 0)
      return;
    this.annotationUndoStack.push(this.createHistorySnapshot());
    const t = this.annotationRedoStack.pop();
    t && this.restoreHistorySnapshot(t);
  }
  // 删除选中的标注
  deleteSelectedAnnotation() {
    if (this.selectedAnnotation) {
      const t = this.annotations.findIndex((n) => n.getData().id === this.selectedAnnotation.getData().id);
      t !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(t, 1), this.selectedAnnotation = null, this.draw(), this.onStateChange?.());
    }
  }
  // 清除所有选中状态
  clearSelection() {
    this.annotations.forEach((t) => {
      t.updateData({ selected: !1, hovered: !1 });
    }), this.selectedAnnotation = null, this.hoveredAnnotation = null;
  }
  // 创建文字标注
  createTextAnnotation(t, n) {
    if (!n.trim()) return;
    const i = Dn.createAnnotation(
      L.Text,
      t,
      this.currentStyle,
      {
        text: n.trim(),
        fontSize: this.textSize
      }
    );
    i && i.isValid() && (this.pushAnnotationHistory(), this.annotations.push(i), this.draw(), this.onStateChange?.());
  }
  // 开始文字输入
  startTextInput(t, n) {
    this.onTextInputRequest?.(t, n);
  }
  // 截图并处理标注
  async processScreenshot(t) {
    if (!this.selectionRect)
      throw new Error("没有选择区域");
    try {
      const { x: n, y: i, width: s, height: o } = this.selectionRect, r = (await I("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, s, o);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await I("copy_to_clipboard", { image: c }) : await I("save_screenshot_to_file", { image: c });
    } catch (n) {
      const i = t === "save" ? "保存" : "复制";
      throw j.error(`[截图] ${i}截图失败`, n), new Error(`${i}截图失败: ${n?.message || n?.toString() || "未知错误"}`);
    }
  }
  // 从背景图像裁剪指定区域
  async cropFromBackground(t, n, i, s, o = {}) {
    return new Promise(async (a, r) => {
      const l = setTimeout(() => {
        r(new Error("裁剪背景图像超时"));
      }, 1e4);
      try {
        if (!this.backgroundImage) {
          let pt = 0;
          for (; !this.backgroundImage && pt < 3e3; )
            await new Promise((K) => setTimeout(K, 100)), pt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, d = Math.max(0, o.padding || 0), g = this.canvas.width / c, y = this.canvas.height / c, w = t - d, k = n - d, f = i + d * 2, b = s + d * 2, p = Math.max(1, Math.round(f * c)), M = Math.max(1, Math.round(b * c)), v = Math.max(0, w), T = Math.max(0, k), O = Math.min(g, w + f), z = Math.min(y, k + b), R = Math.max(0, O - v), H = Math.max(0, z - T), Z = Math.round(v * c), Q = Math.round(T * c), ot = Math.min(
          this.canvas.width - Z,
          Math.round(R * c)
        ), at = Math.min(
          this.canvas.height - Q,
          Math.round(H * c)
        ), ht = Math.round((v - w) * c), Pt = Math.round((T - k) * c), mt = document.createElement("canvas");
        mt.width = p, mt.height = M;
        const nt = mt.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!nt)
          throw new Error("无法获取2D绘图上下文");
        nt.imageSmoothingEnabled = !1, o.fillColor && (nt.fillStyle = o.fillColor, nt.fillRect(0, 0, p, M)), ot > 0 && at > 0 && nt.drawImage(
          this.backgroundImage,
          Z,
          Q,
          ot,
          at,
          ht,
          Pt,
          ot,
          at
        );
        const St = mt.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: St,
          adjusted_width: p,
          adjusted_height: M,
          logical_x: w,
          logical_y: k,
          logical_width: f,
          logical_height: b
        });
      } catch (c) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${c.message || c}`));
      }
    });
  }
  // 渲染带标注的图像
  async renderWithAnnotations(t, n, i) {
    return new Promise((s, o) => {
      const a = setTimeout(() => {
        o(new Error("渲染标注超时"));
      }, 15e3), r = document.createElement("canvas");
      r.width = t.adjusted_width, r.height = t.adjusted_height;
      const l = r.getContext("2d", {
        alpha: !0,
        desynchronized: !1,
        willReadFrequently: !1
      });
      if (!l) {
        clearTimeout(a), o(new Error("无法获取2D绘图上下文"));
        return;
      }
      l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high";
      const c = new Image();
      c.onload = () => {
        try {
          if (l.drawImage(c, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const g = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, y = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, w = this.drawingEngine.createScreenshotContext(
              l,
              g,
              y
            );
            this.annotations.forEach((k, f) => {
              try {
                k.drawToScreenshot(w);
              } catch (b) {
                j.error(`[截图] 绘制标注 ${f} 失败`, b);
              }
            });
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), s(d);
        } catch (d) {
          j.error("[截图] 绘制过程出错", d);
          try {
            const g = r.toDataURL("image/png");
            clearTimeout(a), s(g);
          } catch {
            clearTimeout(a), o(new Error(`渲染失败: ${d.message || d}`));
          }
        }
      }, c.onerror = (d) => {
        j.error("[截图] 图像加载失败", d), clearTimeout(a), o(new Error("图像加载失败"));
      }, c.src = `data:image/png;base64,${t.image}`;
    });
  }
  // 获取当前状态
  getState() {
    return {
      selectionRect: this.selectionRect,
      annotations: this.annotations.map((t) => t.getData()),
      currentTool: this.currentTool,
      currentStyle: {
        ...this.currentStyle,
        opacity: this.currentStyle.opacity ?? 1
      },
      textSize: this.textSize,
      mosaicSize: this.mosaicSize,
      hasSelection: !!this.selectionRect,
      // 有标注或有翻译覆盖层时都可以撤销
      hasAnnotations: this.annotations.length > 0 || this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0,
      canRedo: this.annotationRedoStack.length > 0,
      selectedAnnotation: this.selectedAnnotation?.getData() || null,
      isDrawing: this.eventHandler.getDrawingState().isDrawing
    };
  }
  // 获取绘制状态
  getDrawingState() {
    return this.eventHandler.getDrawingState().isDrawing;
  }
  // 更新样式
  updateStyle(t) {
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === L.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === L.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const n = this.annotations.findIndex((i) => i === t);
    n !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(n, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字标注内容
  updateTextAnnotation(t, n) {
    if (t.getData().type === L.Text) {
      if (t.getData().text === n) {
        this.clearEditingAnnotation();
        return;
      }
      this.pushAnnotationHistory(), t.updateData({ text: n }), this.clearEditingAnnotation(), this.draw(), this.onStateChange?.();
    }
  }
  // 设置正在编辑的文字注释
  setEditingAnnotation(t) {
    this.editingAnnotation = t, this.draw();
  }
  // 清除编辑状态
  clearEditingAnnotation() {
    this.editingAnnotation = null, this.draw();
  }
  async createPinWindow() {
    return this.createPinLikeWindow("pin");
  }
  async createOcrPinWindow() {
    return this.createPinLikeWindow("ocr");
  }
  // 创建贴图/文字识别复用窗口
  async createPinLikeWindow(t) {
    if (this.selectionRect)
      try {
        const { x: n, y: i, width: s, height: o } = this.selectionRect, a = await I("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), d = Math.round(s * r), g = Math.round(o * r), y = Math.round(a.x + window.innerWidth * r), w = Math.round(a.y + window.innerHeight * r), k = t === "ocr" ? Math.min(Math.max(d, 760), Math.max(360, y - a.x)) : d, f = t === "ocr" ? Math.min(Math.max(g, 520), Math.max(260, w - a.y)) : g, b = t === "ocr" ? Math.round(l - Math.max(0, k - d) / 2) : l, p = t === "ocr" ? Math.max(a.x, Math.min(b, y - k)) : l, M = t === "ocr" ? Math.max(a.y, Math.min(c, w - f)) : c, v = {}, T = await this.cropFromBackground(n, i, s, o, v);
        if (!T?.image)
          throw new Error("Failed to crop from background image");
        const O = await this.renderWithAnnotations(T, r, "save");
        await I("create_pin_window", {
          mode: t,
          imageData: O,
          x: p,
          y: M,
          width: k,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new En("screenshot").close();
        }, 100);
      } catch (n) {
        throw j.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, n), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await I("get_window_info"), i = n?.scale || 1, s = Math.round(n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), o = Math.round(n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await I("get_pixel_color", {
          x: s,
          y: o
        }), r = this.rgbToHex(a.r, a.g, a.b), l = {
          rgb: a,
          hex: r,
          position: t
        };
        this.onColorPicked?.(l), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3);
      } catch (n) {
        j.error("[截图] 获取像素颜色失败", n);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const n = await I("get_window_info"), i = n?.scale || 1, s = this.colorPickerState.zoomFactor, o = Math.floor(s / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await I("get_screen_preview", {
          x: a - o,
          y: r - o,
          width: s,
          height: s
        }), c = new Image();
        c.src = `data:image/png;base64,${l.image}`, await c.decode();
        const d = await createImageBitmap(c);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = d;
        const y = new OffscreenCanvas(s, s).getContext("2d");
        if (y) {
          y.drawImage(d, 0, 0, s, s);
          const w = y.getImageData(o, o, 1, 1).data, k = { r: w[0], g: w[1], b: w[2] }, f = this.rgbToHex(k.r, k.g, k.b);
          this.colorPickerState.colorInfo = { rgb: k, hex: f, position: t };
        }
        this.draw();
      } catch (n) {
        j.error("[截图] 更新颜色预览失败", n);
      }
  }
  // 节流版本的颜色预览更新
  throttledUpdateColorPreview(t) {
    const n = Date.now();
    n - this.lastThrottledTimestamp < this.throttleInterval || (this.lastThrottledTimestamp = n, this.throttleTimer && cancelAnimationFrame(this.throttleTimer), this.throttleTimer = requestAnimationFrame(() => {
      this.updateColorPreview(t), this.throttleTimer = null;
    }));
  }
  // RGB 转 HEX
  rgbToHex(t, n, i) {
    const s = (o) => {
      const a = Math.max(0, Math.min(255, Math.round(o))).toString(16);
      return a.length === 1 ? "0" + a : a;
    };
    return `#${s(t)}${s(n)}${s(i)}`.toUpperCase();
  }
  // ==================== OCR翻译功能 ====================
  // 执行OCR识别和翻译
  async performOcrTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const t = performance.now();
        let n = 0, i = 0, s = 0, o = 0, a = 0;
        const { x: r, y: l, width: c, height: d } = this.selectionRect, g = window.devicePixelRatio || 1, y = c * g, w = d * g, k = this.canvasPool.acquire(y, w), f = k.getContext("2d");
        if (!f)
          throw this.canvasPool.release(k), new Error("无法创建临时canvas");
        const b = r * g, p = l * g, M = performance.now();
        f.drawImage(
          this.backgroundImage,
          b,
          p,
          y,
          w,
          0,
          0,
          y,
          w
        ), n = Math.round(performance.now() - M);
        const v = performance.now(), { recognizeFromCanvas: T } = await Ne.loadOCR();
        i = Math.round(performance.now() - v);
        const O = performance.now(), z = await T(k);
        s = Math.round(performance.now() - O), this.canvasPool.release(k);
        const R = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: z.confidence,
          rawLineCount: z.blocks.length,
          textLength: z.full_text.trim().length
        };
        j.info("[OCR] 识别耗时统计", R), Ht.log("[OCR] recognition timing", R);
        const H = z.blocks, Z = performance.now(), Q = sa(H);
        o = Math.round(performance.now() - Z);
        const ot = Q.map((N) => N.text).join(`

`), at = {
          rawLineCount: H.length,
          paragraphCount: Q.length,
          durationMs: o,
          paragraphs: Q.map((N, ct) => ({
            index: ct,
            text: N.text,
            blockCount: N.blocks.length,
            isCodeBlock: !!N.isCodeBlock,
            isStructuredBlock: !!N.isStructuredBlock,
            bbox: N.bbox,
            sourceBlocks: N.blocks.map((vt) => ({
              text: vt.text,
              x: vt.x,
              y: vt.y,
              width: vt.width,
              height: vt.height
            }))
          }))
        };
        if (j.info("[OCR] 版面重组完成", at), Ht.log("[OCR] layout reflow complete", at), !ot || !ot.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ht = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(De(ot));
        const Pt = (N) => {
          const ct = N.trim();
          return !!(ct.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !ct.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let mt = "";
        const nt = De(ot), lt = {
          detectedLanguage: nt,
          textLength: ot.trim().length,
          textPreview: ot.trim().slice(0, 500)
        };
        j.info("[OCR] 翻译语言检测完成", lt), Ht.log("[OCR] translation language detected", lt), Qe(nt) && (this.translationOverlay.sourceLanguage = nt, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(nt));
        const St = ht === "offline" ? Ne.loadOfflineTranslator() : null, dt = (N) => N.includes("插件") && N.includes("未启用") ? N.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : N : ht === "offline" ? N.includes("未激活") || N.includes("未下载") || N.includes("运行时未安装") ? N : N.includes("超时") ? "模型加载超时，请重试" : N.includes("离线翻译暂仅支持") ? N : "离线翻译失败: " + N.substring(0, 50) : N.includes("timeout") || N.includes("超时") ? "翻译超时，请检查网络连接" : N.includes("network") || N.includes("网络") || N.includes("请求") || N.includes("令牌") ? "翻译失败，请检查网络连接" : N.trim() ? N.slice(0, 80) : "翻译失败，请检查网络连接", U = async () => {
          if (!St)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: N,
            canUseOfflineTranslation: ct,
            warmupOfflineTranslator: vt,
            getModelCacheInfo: Tt
          } = await St, Rt = ct();
          if (this.offlineModelActivated && !Rt)
            if ((await Tt()).isCached)
              await vt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return N;
        }, pt = async (N, ct, vt) => {
          if (!N.trim())
            return N;
          if (ht === "offline") {
            if (ct !== "en" || vt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await U())(N);
          }
          return await I("translate_text", {
            text: N,
            from: ct,
            to: vt,
            engine: ht
          });
        }, K = (N) => {
          const ct = N.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(ct) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(ct);
        }, Mt = async (N, ct, vt) => {
          const Tt = N.trim();
          if (!Tt || Pt(Tt))
            return N;
          const Rt = N.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Rt) {
            const [, E, $, st, tt, C] = Rt, W = De($), ft = K($) || !Qe(W) ? $ : await pt($, W, this.getAutoTargetLanguage(W)), ut = De(tt), ae = Qe(ut) && !Pt(tt) ? await pt(tt, ut, this.getAutoTargetLanguage(ut)) : tt;
            return `${E}${ft}${st}${ae}${C}`;
          }
          if (K(Tt))
            return N;
          const Et = De(Tt);
          if (!Qe(Et))
            return N;
          const P = this.getAutoTargetLanguage(Et), h = await pt(Tt, Et, P), m = {
            paragraphIndex: ct,
            blockIndex: vt,
            sourceLanguage: Et,
            targetLanguage: P,
            sourceText: Tt,
            translatedText: h.slice(0, 200)
          };
          return j.info("[OCR] 结构化块翻译完成", m), Ht.log("[OCR] structured block translation complete", m), h;
        }, zt = async (N, ct) => {
          const vt = performance.now(), Tt = (h) => ({
            index: ct,
            durationMs: Math.round(performance.now() - vt),
            ...h
          }), Rt = De(N.text), Et = this.getAutoTargetLanguage(Rt), P = {
            index: ct,
            text: N.text,
            sourceLanguage: Rt,
            targetLanguage: Et,
            engine: ht,
            structured: !!N.isStructuredBlock
          };
          if (j.info("[OCR] 段落翻译方向", P), Ht.log("[OCR] paragraph translation direction", P), !Qe(Rt)) {
            N.translatedText = N.text;
            const h = Tt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), m = {
              index: ct,
              detectedLanguage: Rt,
              durationMs: h.durationMs,
              text: N.text
            };
            return j.warn("[OCR] 跳过不支持的段落语言", m), Ht.log("[OCR] skip unsupported paragraph language", m), h;
          }
          try {
            if (N.isStructuredBlock && N.blocks.length > 0) {
              const E = async (st, tt) => {
                const C = await Mt(st.text, ct, tt);
                return st.translatedText = C, C;
              }, $ = [];
              if (ht === "offline")
                for (let st = 0; st < N.blocks.length; st += 1)
                  $.push(await E(N.blocks[st], st));
              else
                $.push(
                  ...await Promise.all(
                    N.blocks.map((st, tt) => E(st, tt))
                  )
                );
              N.translatedText = $.join(" ");
            } else if (Pt(N.text) || N.isCodeBlock) {
              N.translatedText = N.text;
              const E = N.isCodeBlock ? "code_block" : "command_like_text", $ = Tt({ skipped: !0, cancelled: !1 }), st = {
                index: ct,
                reason: E,
                durationMs: $.durationMs,
                text: N.text
              };
              return j.info("[OCR] 跳过代码段翻译", st), Ht.log("[OCR] skip code paragraph translation", st), $;
            } else
              N.translatedText = await pt(
                N.text,
                Rt,
                Et
              );
            const h = Tt({ skipped: !1, cancelled: !1 }), m = {
              index: ct,
              durationMs: h.durationMs,
              sourceLanguage: Rt,
              targetLanguage: Et,
              engine: ht,
              structured: !!N.isStructuredBlock,
              sourceLength: N.text.length,
              translatedLength: (N.translatedText || "").length,
              translatedPreview: (N.translatedText || "").slice(0, 300)
            };
            return j.info("[OCR] 段落翻译完成", m), Ht.log("[OCR] paragraph translation complete", m), h;
          } catch (h) {
            const m = h instanceof Error ? h.message : String(h);
            if (m === "翻译已取消")
              return Tt({ skipped: !1, cancelled: !0 });
            N.translatedText = N.text;
            const E = dt(m), $ = Tt({
              skipped: !1,
              cancelled: !1,
              errorMessage: E
            }), st = {
              index: ct,
              durationMs: $.durationMs,
              sourceLanguage: Rt,
              targetLanguage: Et,
              engine: ht,
              error: m,
              structured: !!N.isStructuredBlock,
              text: N.text
            };
            return j.error("[OCR] 段落翻译失败", st), Ht.log("[OCR] paragraph translation failed", st), $;
          }
        }, Vt = performance.now();
        let Lt = [];
        if (ht === "offline")
          for (let N = 0; N < Q.length; N += 1) {
            const ct = await zt(Q[N], N);
            if (Lt.push(ct), ct.cancelled)
              return;
            if (ct.errorMessage) {
              mt = ct.errorMessage;
              break;
            }
          }
        else {
          if (Lt = await Promise.all(
            Q.map((N, ct) => zt(N, ct))
          ), Lt.some((N) => N.cancelled))
            return;
          mt = Lt.find((N) => N.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Vt);
        const gt = {
          durationMs: a,
          engine: ht,
          paragraphCount: Q.length,
          translatedParagraphCount: Lt.filter((N) => !N.skipped && !N.errorMessage).length,
          skippedParagraphCount: Lt.filter((N) => N.skipped).length,
          failedParagraphCount: Lt.filter((N) => !!N.errorMessage).length
        };
        j.info("[OCR] 翻译耗时统计", gt), Ht.log("[OCR] translation timing", gt);
        const Yt = Q.map((N) => this.toDisplayParagraph(N, g)), ne = Yt.map((N) => this.toLegacyOverlayBlock(N));
        this.translationOverlay.blocks = ne, this.translationOverlay.paragraphBlocks = Yt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = mt || void 0;
        const Gt = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: H.length,
          paragraphCount: Q.length,
          engine: ht
        };
        j.info("[OCR] 截图翻译总耗时统计", Gt), Ht.log("[OCR] pipeline timing", Gt), this.draw(), this.onStateChange?.();
      } catch (t) {
        j.error("[OCR] OCR翻译失败:", t);
        const n = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(n), this.draw(), this.onStateChange?.();
      }
  }
  getOcrTranslationErrorMessage(t) {
    return t.includes("OCR_RECOGNITION_LOW_QUALITY") ? "OCR识别质量过低，请重新选择更清晰或方向正确的文本区域" : t.includes("RAPIDOCR_UNAVAILABLE") ? "RapidOCR 未配置，无法识别截图文字" : t ? t.slice(0, 80) : "OCR翻译失败";
  }
  getAutoTargetLanguage(t) {
    return t === "zh" ? "en" : "zh";
  }
  toDisplayParagraph(t, n) {
    return {
      ...t,
      blocks: t.blocks.map((i) => ({
        ...i,
        x: i.x / n,
        y: i.y / n,
        width: i.width / n,
        height: i.height / n,
        fontSize: i.fontSize / n,
        lineHeight: i.lineHeight / n
      })),
      bbox: {
        x: t.bbox.x / n,
        y: t.bbox.y / n,
        width: t.bbox.width / n,
        height: t.bbox.height / n
      },
      fontSize: t.fontSize ? t.fontSize / n : void 0,
      lineHeight: t.lineHeight ? t.lineHeight / n : void 0
    };
  }
  toLegacyOverlayBlock(t) {
    return {
      text: t.text,
      x: t.bbox.x,
      y: t.bbox.y,
      width: t.bbox.width,
      height: t.bbox.height,
      fontSize: t.fontSize || 16,
      lineHeight: t.lineHeight || (t.fontSize || 16) * 1.4,
      angle: t.angle || 0,
      translatedText: t.translatedText || t.text,
      isCodeBlock: t.isCodeBlock
    };
  }
  // 清除翻译覆盖层
  async clearTranslationOverlay() {
    try {
      const { cancelOfflineTranslation: t } = await Ne.loadOfflineTranslator();
      t();
    } catch {
    }
    this.translationOverlay = {
      blocks: [],
      paragraphBlocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: this.translationOverlay.engine
      // 保留用户选择的引擎
    }, this.draw(), this.onStateChange?.();
  }
  // 获取翻译状态
  getTranslationState() {
    return this.translationOverlay;
  }
  // 设置翻译引擎
  setTranslationEngine(t) {
    this.translationOverlay.engine = t, this.onStateChange?.();
  }
  // 设置离线模型激活状态
  setOfflineModelActivated(t) {
    this.offlineModelActivated = t;
  }
  // 处理键盘事件
  handleKeyDown(t) {
    if (!this.colorPickerState.isActive) return !1;
    switch (t.key.toLowerCase()) {
      case "q":
        return this.colorPickerState.colorInfo && (this.onColorPicked?.(this.colorPickerState.colorInfo), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3)), !0;
      case "shift":
        return this.colorPickerState.showFormat = this.colorPickerState.showFormat === "hex" ? "rgb" : "hex", this.draw(), !0;
      default:
        return !1;
    }
  }
  // 销毁
  destroy() {
    Ne.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var Gc = {
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
function Xc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Kc(e, t, n) {
  var i = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], o = t.theme || n.theme;
  switch (o) {
    case "outline":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("none"), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : n.colors.multiColor.outFillColor), s.push(typeof i[2] == "string" ? i[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof i[3] == "string" ? i[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: s,
    id: e
  };
}
var Zc = Symbol("icon-context");
function _t(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = Xc(), r = Pe(Zc, Gc);
      return function() {
        var l = o.size, c = o.strokeWidth, d = o.strokeLinecap, g = o.strokeLinejoin, y = o.theme, w = o.fill, k = o.spin, f = Kc(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: g,
          theme: y,
          fill: w
        }, r), b = [r.prefix + "-icon"];
        return b.push(r.prefix + "-icon-" + e), t && r.rtl && b.push(r.prefix + "-icon-rtl"), k && b.push(r.prefix + "-icon-spin"), S("span", {
          class: b.join(" ")
        }, [n(f)]);
      };
    }
  };
  return i;
}
const qc = _t("arrow-right-up", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M19 11H37V29",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), zi = _t("check", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Di = _t("close", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ci = _t("copy", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jc = _t("delete-four", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M8 11L40 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M18 5L30 5",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qs = _t("down", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Qc = _t("download", !1, function(e) {
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
}), tu = _t("font-size", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M24 6V42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M16 42H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), eu = _t("go-on", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Js = _t("loading", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ha = _t("minus", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), nu = _t("more", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), S("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), S("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), iu = _t("mosaic", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M44 36H36V44H44V36Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M28 36H20V44H28V36Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M12 36H4V44H12V36Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M44 20H36V28H44V20Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M28 20H20V28H28V20Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M12 20H4V28H12V20Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M44 4H36V12H44V4Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M28 4H20V12H28V4Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M12 4H4V12H12V4Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M20 12H12V20H20V12Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M20 28H12V36H20V28Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M36 12H28V20H36V12Z",
    fill: e.colors[0]
  }, null), S("path", {
    d: "M36 28H28V36H36V28Z",
    fill: e.colors[0]
  }, null)]);
}), su = _t("move-one", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ou = _t("picture", !0, function(e) {
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
}), Qs = _t("pin", !0, function(e) {
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
}), to = _t("platte", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ni = _t("pushpin", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), au = _t("rectangle-one", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), ru = _t("redo", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M42 8V17H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), lu = _t("refresh", !0, function(e) {
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
}), cu = _t("return", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), uu = _t("round", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), eo = _t("save", !0, function(e) {
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
}), hu = _t("square", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), yn = _t("text-recognition", !1, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), da = _t("translate", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), du = _t("write", !0, function(e) {
  return S("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [S("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), S("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
});
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function fu(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const no = typeof window < "u", Ve = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), gu = (e, t, n) => mu({ l: e, k: t, s: n }), mu = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ut = (e) => typeof e == "number" && isFinite(e), pu = (e) => os(e) === "[object Date]", Qn = (e) => os(e) === "[object RegExp]", ri = (e) => yt(e) && Object.keys(e).length === 0, Xt = Object.assign, yu = Object.create, kt = (e = null) => yu(e);
let io;
const Yn = () => io || (io = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : kt());
function so(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function oo(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wu(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, s, o) => `${s}="${oo(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, s, o) => `${s}='${oo(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    e = e.replace(i, "$1javascript&#58;");
  }), e;
}
const vu = Object.prototype.hasOwnProperty;
function fe(e, t) {
  return vu.call(e, t);
}
const Wt = Array.isArray, At = (e) => typeof e == "function", J = (e) => typeof e == "string", Nt = (e) => typeof e == "boolean", wt = (e) => e !== null && typeof e == "object", xu = (e) => wt(e) && At(e.then) && At(e.catch), fa = Object.prototype.toString, os = (e) => fa.call(e), yt = (e) => os(e) === "[object Object]", bu = (e) => e == null ? "" : Wt(e) || yt(e) && e.toString === fa ? JSON.stringify(e, null, 2) : String(e);
function as(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Fn = (e) => !wt(e) || Wt(e);
function Gn(e, t) {
  if (Fn(e) || Fn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      o !== "__proto__" && (wt(i[o]) && !wt(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : kt()), Fn(s[o]) || Fn(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ku(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Wi(e, t, n) {
  return { start: e, end: t };
}
const xt = {
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
}, _u = 17;
function li(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function Su(e) {
  throw e;
}
const me = " ", Cu = "\r", Zt = `
`, Tu = "\u2028", Mu = "\u2029";
function Lu(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (R) => t[R] === Cu && t[R + 1] === Zt, r = (R) => t[R] === Zt, l = (R) => t[R] === Mu, c = (R) => t[R] === Tu, d = (R) => a(R) || r(R) || l(R) || c(R), g = () => n, y = () => i, w = () => s, k = () => o, f = (R) => a(R) || l(R) || c(R) ? Zt : t[R], b = () => f(n), p = () => f(n + o);
  function M() {
    return o = 0, d(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function v() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function T() {
    n = 0, i = 1, s = 1, o = 0;
  }
  function O(R = 0) {
    o = R;
  }
  function z() {
    const R = n + o;
    for (; R !== n; )
      M();
    o = 0;
  }
  return {
    index: g,
    line: y,
    column: w,
    peekOffset: k,
    charAt: f,
    currentChar: b,
    currentPeek: p,
    next: M,
    peek: v,
    reset: T,
    resetPeek: O,
    skipToPeek: z
  };
}
const be = void 0, Ru = ".", ao = "'", Pu = "tokenizer";
function Eu(e, t = {}) {
  const n = t.location !== !1, i = Lu(e), s = () => i.index(), o = () => ku(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
    currentType: 13,
    offset: r,
    startLoc: a,
    endLoc: a,
    lastType: 13,
    lastOffset: r,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: d } = t;
  function g(h, m, E, ...$) {
    const st = c();
    if (m.column += E, m.offset += E, d) {
      const tt = n ? Wi(st.startLoc, m) : null, C = li(h, tt, {
        domain: Pu,
        args: $
      });
      d(C);
    }
  }
  function y(h, m, E) {
    h.endLoc = o(), h.currentType = m;
    const $ = { type: m };
    return n && ($.loc = Wi(h.startLoc, h.endLoc)), E != null && ($.value = E), $;
  }
  const w = (h) => y(
    h,
    13
    /* TokenTypes.EOF */
  );
  function k(h, m) {
    return h.currentChar() === m ? (h.next(), m) : (g(xt.EXPECTED_TOKEN, o(), 0, m), "");
  }
  function f(h) {
    let m = "";
    for (; h.currentPeek() === me || h.currentPeek() === Zt; )
      m += h.currentPeek(), h.peek();
    return m;
  }
  function b(h) {
    const m = f(h);
    return h.skipToPeek(), m;
  }
  function p(h) {
    if (h === be)
      return !1;
    const m = h.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function M(h) {
    if (h === be)
      return !1;
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function v(h, m) {
    const { currentType: E } = m;
    if (E !== 2)
      return !1;
    f(h);
    const $ = p(h.currentPeek());
    return h.resetPeek(), $;
  }
  function T(h, m) {
    const { currentType: E } = m;
    if (E !== 2)
      return !1;
    f(h);
    const $ = h.currentPeek() === "-" ? h.peek() : h.currentPeek(), st = M($);
    return h.resetPeek(), st;
  }
  function O(h, m) {
    const { currentType: E } = m;
    if (E !== 2)
      return !1;
    f(h);
    const $ = h.currentPeek() === ao;
    return h.resetPeek(), $;
  }
  function z(h, m) {
    const { currentType: E } = m;
    if (E !== 7)
      return !1;
    f(h);
    const $ = h.currentPeek() === ".";
    return h.resetPeek(), $;
  }
  function R(h, m) {
    const { currentType: E } = m;
    if (E !== 8)
      return !1;
    f(h);
    const $ = p(h.currentPeek());
    return h.resetPeek(), $;
  }
  function H(h, m) {
    const { currentType: E } = m;
    if (!(E === 7 || E === 11))
      return !1;
    f(h);
    const $ = h.currentPeek() === ":";
    return h.resetPeek(), $;
  }
  function Z(h, m) {
    const { currentType: E } = m;
    if (E !== 9)
      return !1;
    const $ = () => {
      const tt = h.currentPeek();
      return tt === "{" ? p(h.peek()) : tt === "@" || tt === "|" || tt === ":" || tt === "." || tt === me || !tt ? !1 : tt === Zt ? (h.peek(), $()) : ot(h, !1);
    }, st = $();
    return h.resetPeek(), st;
  }
  function Q(h) {
    f(h);
    const m = h.currentPeek() === "|";
    return h.resetPeek(), m;
  }
  function ot(h, m = !0) {
    const E = (st = !1, tt = "") => {
      const C = h.currentPeek();
      return C === "{" || C === "@" || !C ? st : C === "|" ? !(tt === me || tt === Zt) : C === me ? (h.peek(), E(!0, me)) : C === Zt ? (h.peek(), E(!0, Zt)) : !0;
    }, $ = E();
    return m && h.resetPeek(), $;
  }
  function at(h, m) {
    const E = h.currentChar();
    return E === be ? be : m(E) ? (h.next(), E) : null;
  }
  function ht(h) {
    const m = h.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function Pt(h) {
    return at(h, ht);
  }
  function mt(h) {
    const m = h.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function nt(h) {
    return at(h, mt);
  }
  function lt(h) {
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function St(h) {
    return at(h, lt);
  }
  function dt(h) {
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function U(h) {
    return at(h, dt);
  }
  function pt(h) {
    let m = "", E = "";
    for (; m = St(h); )
      E += m;
    return E;
  }
  function K(h) {
    let m = "";
    for (; ; ) {
      const E = h.currentChar();
      if (E === "{" || E === "}" || E === "@" || E === "|" || !E)
        break;
      if (E === me || E === Zt)
        if (ot(h))
          m += E, h.next();
        else {
          if (Q(h))
            break;
          m += E, h.next();
        }
      else
        m += E, h.next();
    }
    return m;
  }
  function Mt(h) {
    b(h);
    let m = "", E = "";
    for (; m = nt(h); )
      E += m;
    const $ = h.currentChar();
    if ($ && $ !== "}" && $ !== be && $ !== me && $ !== Zt && $ !== "　") {
      const st = Gt(h);
      return g(xt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, E + st), E + st;
    }
    return h.currentChar() === be && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), E;
  }
  function zt(h) {
    b(h);
    let m = "";
    return h.currentChar() === "-" ? (h.next(), m += `-${pt(h)}`) : m += pt(h), h.currentChar() === be && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), m;
  }
  function Vt(h) {
    return h !== ao && h !== Zt;
  }
  function Lt(h) {
    b(h), k(h, "'");
    let m = "", E = "";
    for (; m = at(h, Vt); )
      m === "\\" ? E += gt(h) : E += m;
    const $ = h.currentChar();
    return $ === Zt || $ === be ? (g(xt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), $ === Zt && (h.next(), k(h, "'")), E) : (k(h, "'"), E);
  }
  function gt(h) {
    const m = h.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return h.next(), `\\${m}`;
      case "u":
        return Yt(h, m, 4);
      case "U":
        return Yt(h, m, 6);
      default:
        return g(xt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, m), "";
    }
  }
  function Yt(h, m, E) {
    k(h, m);
    let $ = "";
    for (let st = 0; st < E; st++) {
      const tt = U(h);
      if (!tt) {
        g(xt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${m}${$}${h.currentChar()}`);
        break;
      }
      $ += tt;
    }
    return `\\${m}${$}`;
  }
  function ne(h) {
    return h !== "{" && h !== "}" && h !== me && h !== Zt;
  }
  function Gt(h) {
    b(h);
    let m = "", E = "";
    for (; m = at(h, ne); )
      E += m;
    return E;
  }
  function N(h) {
    let m = "", E = "";
    for (; m = Pt(h); )
      E += m;
    return E;
  }
  function ct(h) {
    const m = (E) => {
      const $ = h.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === me ? E : (E += $, h.next(), m(E));
    };
    return m("");
  }
  function vt(h) {
    b(h);
    const m = k(
      h,
      "|"
      /* TokenChars.Pipe */
    );
    return b(h), m;
  }
  function Tt(h, m) {
    let E = null;
    switch (h.currentChar()) {
      case "{":
        return m.braceNest >= 1 && g(xt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), h.next(), E = y(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), b(h), m.braceNest++, E;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && g(xt.EMPTY_PLACEHOLDER, o(), 0), h.next(), E = y(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && b(h), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), E;
      case "@":
        return m.braceNest > 0 && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), E = Rt(h, m) || w(m), m.braceNest = 0, E;
      default: {
        let st = !0, tt = !0, C = !0;
        if (Q(h))
          return m.braceNest > 0 && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), E = y(m, 1, vt(h)), m.braceNest = 0, m.inLinked = !1, E;
        if (m.braceNest > 0 && (m.currentType === 4 || m.currentType === 5 || m.currentType === 6))
          return g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), m.braceNest = 0, Et(h, m);
        if (st = v(h, m))
          return E = y(m, 4, Mt(h)), b(h), E;
        if (tt = T(h, m))
          return E = y(m, 5, zt(h)), b(h), E;
        if (C = O(h, m))
          return E = y(m, 6, Lt(h)), b(h), E;
        if (!st && !tt && !C)
          return E = y(m, 12, Gt(h)), g(xt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, E.value), b(h), E;
        break;
      }
    }
    return E;
  }
  function Rt(h, m) {
    const { currentType: E } = m;
    let $ = null;
    const st = h.currentChar();
    switch ((E === 7 || E === 8 || E === 11 || E === 9) && (st === Zt || st === me) && g(xt.INVALID_LINKED_FORMAT, o(), 0), st) {
      case "@":
        return h.next(), $ = y(
          m,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, $;
      case ".":
        return b(h), h.next(), y(
          m,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return b(h), h.next(), y(
          m,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Q(h) ? ($ = y(m, 1, vt(h)), m.braceNest = 0, m.inLinked = !1, $) : z(h, m) || H(h, m) ? (b(h), Rt(h, m)) : R(h, m) ? (b(h), y(m, 11, N(h))) : Z(h, m) ? (b(h), st === "{" ? Tt(h, m) || $ : y(m, 10, ct(h))) : (E === 7 && g(xt.INVALID_LINKED_FORMAT, o(), 0), m.braceNest = 0, m.inLinked = !1, Et(h, m));
    }
  }
  function Et(h, m) {
    let E = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return Tt(h, m) || w(m);
    if (m.inLinked)
      return Rt(h, m) || w(m);
    switch (h.currentChar()) {
      case "{":
        return Tt(h, m) || w(m);
      case "}":
        return g(xt.UNBALANCED_CLOSING_BRACE, o(), 0), h.next(), y(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Rt(h, m) || w(m);
      default: {
        if (Q(h))
          return E = y(m, 1, vt(h)), m.braceNest = 0, m.inLinked = !1, E;
        if (ot(h))
          return y(m, 0, K(h));
        break;
      }
    }
    return E;
  }
  function P() {
    const { currentType: h, offset: m, startLoc: E, endLoc: $ } = l;
    return l.lastType = h, l.lastOffset = m, l.lastStartLoc = E, l.lastEndLoc = $, l.offset = s(), l.startLoc = o(), i.currentChar() === be ? y(
      l,
      13
      /* TokenTypes.EOF */
    ) : Et(i, l);
  }
  return {
    nextToken: P,
    currentOffset: s,
    currentPosition: o,
    context: c
  };
}
const Iu = "parser", Au = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ou(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const i = parseInt(t || n, 16);
      return i <= 55295 || i >= 57344 ? String.fromCodePoint(i) : "�";
    }
  }
}
function zu(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(p, M, v, T, ...O) {
    const z = p.currentPosition();
    if (z.offset += T, z.column += T, n) {
      const R = t ? Wi(v, z) : null, H = li(M, R, {
        domain: Iu,
        args: O
      });
      n(H);
    }
  }
  function s(p, M, v) {
    const T = { type: p };
    return t && (T.start = M, T.end = M, T.loc = { start: v, end: v }), T;
  }
  function o(p, M, v, T) {
    t && (p.end = M, p.loc && (p.loc.end = v));
  }
  function a(p, M) {
    const v = p.context(), T = s(3, v.offset, v.startLoc);
    return T.value = M, o(T, p.currentOffset(), p.currentPosition()), T;
  }
  function r(p, M) {
    const v = p.context(), { lastOffset: T, lastStartLoc: O } = v, z = s(5, T, O);
    return z.index = parseInt(M, 10), p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function l(p, M) {
    const v = p.context(), { lastOffset: T, lastStartLoc: O } = v, z = s(4, T, O);
    return z.key = M, p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function c(p, M) {
    const v = p.context(), { lastOffset: T, lastStartLoc: O } = v, z = s(9, T, O);
    return z.value = M.replace(Au, Ou), p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function d(p) {
    const M = p.nextToken(), v = p.context(), { lastOffset: T, lastStartLoc: O } = v, z = s(8, T, O);
    return M.type !== 11 ? (i(p, xt.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), z.value = "", o(z, T, O), {
      nextConsumeToken: M,
      node: z
    }) : (M.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, pe(M)), z.value = M.value || "", o(z, p.currentOffset(), p.currentPosition()), {
      node: z
    });
  }
  function g(p, M) {
    const v = p.context(), T = s(7, v.offset, v.startLoc);
    return T.value = M, o(T, p.currentOffset(), p.currentPosition()), T;
  }
  function y(p) {
    const M = p.context(), v = s(6, M.offset, M.startLoc);
    let T = p.nextToken();
    if (T.type === 8) {
      const O = d(p);
      v.modifier = O.node, T = O.nextConsumeToken || p.nextToken();
    }
    switch (T.type !== 9 && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(T)), T = p.nextToken(), T.type === 2 && (T = p.nextToken()), T.type) {
      case 10:
        T.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(T)), v.key = g(p, T.value || "");
        break;
      case 4:
        T.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(T)), v.key = l(p, T.value || "");
        break;
      case 5:
        T.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(T)), v.key = r(p, T.value || "");
        break;
      case 6:
        T.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(T)), v.key = c(p, T.value || "");
        break;
      default: {
        i(p, xt.UNEXPECTED_EMPTY_LINKED_KEY, M.lastStartLoc, 0);
        const O = p.context(), z = s(7, O.offset, O.startLoc);
        return z.value = "", o(z, O.offset, O.startLoc), v.key = z, o(v, O.offset, O.startLoc), {
          nextConsumeToken: T,
          node: v
        };
      }
    }
    return o(v, p.currentOffset(), p.currentPosition()), {
      node: v
    };
  }
  function w(p) {
    const M = p.context(), v = M.currentType === 1 ? p.currentOffset() : M.offset, T = M.currentType === 1 ? M.endLoc : M.startLoc, O = s(2, v, T);
    O.items = [];
    let z = null;
    do {
      const Z = z || p.nextToken();
      switch (z = null, Z.type) {
        case 0:
          Z.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(Z)), O.items.push(a(p, Z.value || ""));
          break;
        case 5:
          Z.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(Z)), O.items.push(r(p, Z.value || ""));
          break;
        case 4:
          Z.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(Z)), O.items.push(l(p, Z.value || ""));
          break;
        case 6:
          Z.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, pe(Z)), O.items.push(c(p, Z.value || ""));
          break;
        case 7: {
          const Q = y(p);
          O.items.push(Q.node), z = Q.nextConsumeToken || null;
          break;
        }
      }
    } while (M.currentType !== 13 && M.currentType !== 1);
    const R = M.currentType === 1 ? M.lastOffset : p.currentOffset(), H = M.currentType === 1 ? M.lastEndLoc : p.currentPosition();
    return o(O, R, H), O;
  }
  function k(p, M, v, T) {
    const O = p.context();
    let z = T.items.length === 0;
    const R = s(1, M, v);
    R.cases = [], R.cases.push(T);
    do {
      const H = w(p);
      z || (z = H.items.length === 0), R.cases.push(H);
    } while (O.currentType !== 13);
    return z && i(p, xt.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), o(R, p.currentOffset(), p.currentPosition()), R;
  }
  function f(p) {
    const M = p.context(), { offset: v, startLoc: T } = M, O = w(p);
    return M.currentType === 13 ? O : k(p, v, T, O);
  }
  function b(p) {
    const M = Eu(p, Xt({}, e)), v = M.context(), T = s(0, v.offset, v.startLoc);
    return t && T.loc && (T.loc.source = p), T.body = f(M), e.onCacheKey && (T.cacheKey = e.onCacheKey(p)), v.currentType !== 13 && i(M, xt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, p[v.offset] || ""), o(T, M.currentOffset(), M.currentPosition()), T;
  }
  return { parse: b };
}
function pe(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Du(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function ro(e, t) {
  for (let n = 0; n < e.length; n++)
    rs(e[n], t);
}
function rs(e, t) {
  switch (e.type) {
    case 1:
      ro(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ro(e.items, t);
      break;
    case 6: {
      rs(e.key, t), t.helper(
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
function Nu(e, t = {}) {
  const n = Du(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && rs(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function Wu(e) {
  const t = e.body;
  return t.type === 2 ? lo(t) : t.cases.forEach((n) => lo(n)), e;
}
function lo(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const i = e.items[n];
      if (!(i.type === 3 || i.type === 9) || i.value == null)
        break;
      t.push(i.value);
    }
    if (t.length === e.items.length) {
      e.static = as(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
function tn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      tn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let i = 0; i < n.length; i++)
        tn(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        tn(n[i]);
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
      tn(t.key), t.k = t.key, delete t.key, t.modifier && (tn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function $u(e, t) {
  const { filename: n, breakLineCode: i, needIndent: s } = t, o = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: i,
    needIndent: s,
    indentLevel: 0
  };
  o && e.loc && (a.source = e.loc.source);
  const r = () => a;
  function l(f, b) {
    a.code += f;
  }
  function c(f, b = !0) {
    const p = b ? i : "";
    l(s ? p + "  ".repeat(f) : p);
  }
  function d(f = !0) {
    const b = ++a.indentLevel;
    f && c(b);
  }
  function g(f = !0) {
    const b = --a.indentLevel;
    f && c(b);
  }
  function y() {
    c(a.indentLevel);
  }
  return {
    context: r,
    push: l,
    indent: d,
    deindent: g,
    newline: y,
    helper: (f) => `_${f}`,
    needIndent: () => a.needIndent
  };
}
function Fu(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), nn(e, t.key), t.modifier ? (e.push(", "), nn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Bu(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let o = 0; o < s && (nn(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function Hu(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let o = 0; o < s && (nn(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function ju(e, t) {
  t.body ? nn(e, t.body) : e.push("null");
}
function nn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ju(e, t);
      break;
    case 1:
      Hu(e, t);
      break;
    case 2:
      Bu(e, t);
      break;
    case 6:
      Fu(e, t);
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
const Uu = (e, t = {}) => {
  const n = J(t.mode) ? t.mode : "normal", i = J(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], r = $u(e, {
    filename: i,
    breakLineCode: s,
    needIndent: o
  });
  r.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), r.indent(o), a.length > 0 && (r.push(`const { ${as(a.map((d) => `${d}: _${d}`), ", ")} } = ctx`), r.newline()), r.push("return "), nn(r, e), r.deindent(o), r.push("}"), delete e.helpers;
  const { code: l, map: c } = r.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Vu(e, t = {}) {
  const n = Xt({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = zu(n).parse(e);
  return i ? (o && Wu(r), s && tn(r), { ast: r, code: "" }) : (Nu(r, n), Uu(r, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Yu() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Yn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function ve(e) {
  return wt(e) && ls(e) === 0 && (fe(e, "b") || fe(e, "body"));
}
const ga = ["b", "body"];
function Gu(e) {
  return Ae(e, ga);
}
const ma = ["c", "cases"];
function Xu(e) {
  return Ae(e, ma, []);
}
const pa = ["s", "static"];
function Ku(e) {
  return Ae(e, pa);
}
const ya = ["i", "items"];
function Zu(e) {
  return Ae(e, ya, []);
}
const wa = ["t", "type"];
function ls(e) {
  return Ae(e, wa);
}
const va = ["v", "value"];
function Bn(e, t) {
  const n = Ae(e, va);
  if (n != null)
    return n;
  throw Tn(t);
}
const xa = ["m", "modifier"];
function qu(e) {
  return Ae(e, xa);
}
const ba = ["k", "key"];
function Ju(e) {
  const t = Ae(e, ba);
  if (t)
    return t;
  throw Tn(
    6
    /* NodeTypes.Linked */
  );
}
function Ae(e, t, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (fe(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const ka = [
  ...ga,
  ...ma,
  ...pa,
  ...ya,
  ...ba,
  ...xa,
  ...va,
  ...wa
];
function Tn(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Ti(e) {
  return (n) => Qu(n, e);
}
function Qu(e, t) {
  const n = Gu(t);
  if (n == null)
    throw Tn(
      0
      /* NodeTypes.Resource */
    );
  if (ls(n) === 1) {
    const o = Xu(n);
    return e.plural(o.reduce((a, r) => [
      ...a,
      co(e, r)
    ], []));
  } else
    return co(e, n);
}
function co(e, t) {
  const n = Ku(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = Zu(t).reduce((s, o) => [...s, $i(e, o)], []);
    return e.normalize(i);
  }
}
function $i(e, t) {
  const n = ls(t);
  switch (n) {
    case 3:
      return Bn(t, n);
    case 9:
      return Bn(t, n);
    case 4: {
      const i = t;
      if (fe(i, "k") && i.k)
        return e.interpolate(e.named(i.k));
      if (fe(i, "key") && i.key)
        return e.interpolate(e.named(i.key));
      throw Tn(n);
    }
    case 5: {
      const i = t;
      if (fe(i, "i") && Ut(i.i))
        return e.interpolate(e.list(i.i));
      if (fe(i, "index") && Ut(i.index))
        return e.interpolate(e.list(i.index));
      throw Tn(n);
    }
    case 6: {
      const i = t, s = qu(i), o = Ju(i);
      return e.linked($i(e, o), s ? $i(e, s) : void 0, e.type);
    }
    case 7:
      return Bn(t, n);
    case 8:
      return Bn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const th = (e) => e;
let Hn = kt();
function eh(e, t = {}) {
  let n = !1;
  const i = t.onError || Su;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...Vu(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function nh(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && J(e)) {
    Nt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || th)(e), s = Hn[i];
    if (s)
      return s;
    const { ast: o, detectError: a } = eh(e, {
      ...t,
      location: !1,
      jit: !0
    }), r = Ti(o);
    return a ? r : Hn[i] = r;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = Hn[n];
      return i || (Hn[n] = Ti(e));
    } else
      return Ti(e);
  }
}
const Se = {
  INVALID_ARGUMENT: _u,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ih = 24;
function Ce(e) {
  return li(e, null, void 0);
}
function cs(e, t) {
  return t.locale != null ? uo(t.locale) : uo(e.locale);
}
let Mi;
function uo(e) {
  if (J(e))
    return e;
  if (At(e)) {
    if (e.resolvedOnce && Mi != null)
      return Mi;
    if (e.constructor.name === "Function") {
      const t = e();
      if (xu(t))
        throw Ce(Se.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Mi = t;
    } else
      throw Ce(Se.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ce(Se.NOT_SUPPORT_LOCALE_TYPE);
}
function sh(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Wt(t) ? t : wt(t) ? Object.keys(t) : J(t) ? [t] : [n]
  ])];
}
function _a(e, t, n) {
  const i = J(n) ? n : ti, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; Wt(a); )
      a = ho(o, a, t);
    const r = Wt(t) || !yt(t) ? t : t.default ? t.default : null;
    a = J(r) ? [r] : r, Wt(a) && ho(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function ho(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && Nt(i); s++) {
    const o = t[s];
    J(o) && (i = oh(e, t[s], n));
  }
  return i;
}
function oh(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = ah(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function ah(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Wt(n) || yt(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const Oe = [];
Oe[
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
Oe[
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
Oe[
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
Oe[
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
Oe[
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
Oe[
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
Oe[
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
const rh = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function lh(e) {
  return rh.test(e);
}
function ch(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function uh(e) {
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
function hh(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : lh(t) ? ch(t) : "*" + t;
}
function dh(e) {
  const t = [];
  let n = -1, i = 0, s = 0, o, a, r, l, c, d, g;
  const y = [];
  y[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = r : a += r;
  }, y[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, y[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    y[
      0
      /* Actions.APPEND */
    ](), s++;
  }, y[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, i = 4, y[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, a === void 0 || (a = hh(a), a === !1))
        return !1;
      y[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function w() {
    const k = e[n + 1];
    if (i === 5 && k === "'" || i === 6 && k === '"')
      return n++, r = "\\" + k, y[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, o = e[n], !(o === "\\" && w())) {
      if (l = uh(o), g = Oe[i], c = g[l] || g.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (d = y[c[1]], d && (r = o, d() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const fo = /* @__PURE__ */ new Map();
function fh(e, t) {
  return wt(e) ? e[t] : null;
}
function gh(e, t) {
  if (!wt(e))
    return null;
  let n = fo.get(t);
  if (n || (n = dh(t), n && fo.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = n[o];
    if (ka.includes(a) && ve(s))
      return null;
    const r = s[a];
    if (r === void 0 || At(s))
      return null;
    s = r, o++;
  }
  return s;
}
const mh = "11.2.2", ci = -1, ti = "en-US", go = "", mo = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function ph() {
  return {
    upper: (e, t) => t === "text" && J(e) ? e.toUpperCase() : t === "vnode" && wt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && J(e) ? e.toLowerCase() : t === "vnode" && wt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && J(e) ? mo(e) : t === "vnode" && wt(e) && "__v_isVNode" in e ? mo(e.children) : e
  };
}
let Sa;
function yh(e) {
  Sa = e;
}
let Ca;
function wh(e) {
  Ca = e;
}
let Ta;
function vh(e) {
  Ta = e;
}
let Ma = null;
const po = (e) => {
  Ma = e;
}, xh = () => Ma;
let yo = 0;
function bh(e = {}) {
  const t = At(e.onWarn) ? e.onWarn : fu, n = J(e.version) ? e.version : mh, i = J(e.locale) || At(e.locale) ? e.locale : ti, s = At(i) ? ti : i, o = Wt(e.fallbackLocale) || yt(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = yt(e.messages) ? e.messages : Li(s), r = yt(e.datetimeFormats) ? e.datetimeFormats : Li(s), l = yt(e.numberFormats) ? e.numberFormats : Li(s), c = Xt(kt(), e.modifiers, ph()), d = e.pluralRules || kt(), g = At(e.missing) ? e.missing : null, y = Nt(e.missingWarn) || Qn(e.missingWarn) ? e.missingWarn : !0, w = Nt(e.fallbackWarn) || Qn(e.fallbackWarn) ? e.fallbackWarn : !0, k = !!e.fallbackFormat, f = !!e.unresolving, b = At(e.postTranslation) ? e.postTranslation : null, p = yt(e.processor) ? e.processor : null, M = Nt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter, T = At(e.messageCompiler) ? e.messageCompiler : Sa, O = At(e.messageResolver) ? e.messageResolver : Ca || fh, z = At(e.localeFallbacker) ? e.localeFallbacker : Ta || sh, R = wt(e.fallbackContext) ? e.fallbackContext : void 0, H = e, Z = wt(H.__datetimeFormatters) ? H.__datetimeFormatters : /* @__PURE__ */ new Map(), Q = wt(H.__numberFormatters) ? H.__numberFormatters : /* @__PURE__ */ new Map(), ot = wt(H.__meta) ? H.__meta : {};
  yo++;
  const at = {
    version: n,
    cid: yo,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: d,
    missing: g,
    missingWarn: y,
    fallbackWarn: w,
    fallbackFormat: k,
    unresolving: f,
    postTranslation: b,
    processor: p,
    warnHtmlMessage: M,
    escapeParameter: v,
    messageCompiler: T,
    messageResolver: O,
    localeFallbacker: z,
    fallbackContext: R,
    onWarn: t,
    __meta: ot
  };
  return at.datetimeFormats = r, at.numberFormats = l, at.__datetimeFormatters = Z, at.__numberFormatters = Q, at;
}
const Li = (e) => ({ [e]: kt() });
function us(e, t, n, i, s) {
  const { missing: o, onWarn: a } = e;
  if (o !== null) {
    const r = o(e, n, t, s);
    return J(r) ? r : t;
  } else
    return t;
}
function gn(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function kh(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function _h(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (kh(e, t[i]))
      return !0;
  return !1;
}
function wo(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e, [l, c, d, g] = Fi(...t), y = Nt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Nt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const w = !!d.part, k = cs(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    k
  );
  if (!J(l) || l === "")
    return new Intl.DateTimeFormat(k, g).format(c);
  let b = {}, p, M = null;
  const v = "datetime format";
  for (let z = 0; z < f.length && (p = f[z], b = n[p] || {}, M = b[l], !yt(M)); z++)
    us(e, l, p, y, v);
  if (!yt(M) || !J(p))
    return i ? ci : l;
  let T = `${p}__${l}`;
  ri(g) || (T = `${T}__${JSON.stringify(g)}`);
  let O = r.get(T);
  return O || (O = new Intl.DateTimeFormat(p, Xt({}, M, g)), r.set(T, O)), w ? O.formatToParts(c) : O.format(c);
}
const La = [
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
function Fi(...e) {
  const [t, n, i, s] = e, o = kt();
  let a = kt(), r;
  if (J(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Ce(Se.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    r = new Date(c);
    try {
      r.toISOString();
    } catch {
      throw Ce(Se.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (pu(t)) {
    if (isNaN(t.getTime()))
      throw Ce(Se.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (Ut(t))
    r = t;
  else
    throw Ce(Se.INVALID_ARGUMENT);
  return J(n) ? o.key = n : yt(n) && Object.keys(n).forEach((l) => {
    La.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), J(i) ? o.locale = i : yt(i) && (a = i), yt(s) && (a = s), [o.key || "", r, o, a];
}
function vo(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function xo(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e, [l, c, d, g] = Bi(...t), y = Nt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Nt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const w = !!d.part, k = cs(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    k
  );
  if (!J(l) || l === "")
    return new Intl.NumberFormat(k, g).format(c);
  let b = {}, p, M = null;
  const v = "number format";
  for (let z = 0; z < f.length && (p = f[z], b = n[p] || {}, M = b[l], !yt(M)); z++)
    us(e, l, p, y, v);
  if (!yt(M) || !J(p))
    return i ? ci : l;
  let T = `${p}__${l}`;
  ri(g) || (T = `${T}__${JSON.stringify(g)}`);
  let O = r.get(T);
  return O || (O = new Intl.NumberFormat(p, Xt({}, M, g)), r.set(T, O)), w ? O.formatToParts(c) : O.format(c);
}
const Ra = [
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
function Bi(...e) {
  const [t, n, i, s] = e, o = kt();
  let a = kt();
  if (!Ut(t))
    throw Ce(Se.INVALID_ARGUMENT);
  const r = t;
  return J(n) ? o.key = n : yt(n) && Object.keys(n).forEach((l) => {
    Ra.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), J(i) ? o.locale = i : yt(i) && (a = i), yt(s) && (a = s), [o.key || "", r, o, a];
}
function bo(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const Sh = (e) => e, Ch = (e) => "", Th = "text", Mh = (e) => e.length === 0 ? "" : as(e), Lh = bu;
function ko(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Rh(e) {
  const t = Ut(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ut(e.named.count) || Ut(e.named.n)) ? Ut(e.named.count) ? e.named.count : Ut(e.named.n) ? e.named.n : t : t;
}
function Ph(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Eh(e = {}) {
  const t = e.locale, n = Rh(e), i = wt(e.pluralRules) && J(t) && At(e.pluralRules[t]) ? e.pluralRules[t] : ko, s = wt(e.pluralRules) && J(t) && At(e.pluralRules[t]) ? ko : void 0, o = (p) => p[i(n, p.length, s)], a = e.list || [], r = (p) => a[p], l = e.named || kt();
  Ut(e.pluralIndex) && Ph(n, l);
  const c = (p) => l[p];
  function d(p, M) {
    const v = At(e.messages) ? e.messages(p, !!M) : wt(e.messages) ? e.messages[p] : !1;
    return v || (e.parent ? e.parent.message(p) : Ch);
  }
  const g = (p) => e.modifiers ? e.modifiers[p] : Sh, y = yt(e.processor) && At(e.processor.normalize) ? e.processor.normalize : Mh, w = yt(e.processor) && At(e.processor.interpolate) ? e.processor.interpolate : Lh, k = yt(e.processor) && J(e.processor.type) ? e.processor.type : Th, b = {
    list: r,
    named: c,
    plural: o,
    linked: (p, ...M) => {
      const [v, T] = M;
      let O = "text", z = "";
      M.length === 1 ? wt(v) ? (z = v.modifier || z, O = v.type || O) : J(v) && (z = v || z) : M.length === 2 && (J(v) && (z = v || z), J(T) && (O = T || O));
      const R = d(p, !0)(b), H = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && Wt(R) && z ? R[0] : R
      );
      return z ? g(z)(H, O) : H;
    },
    message: d,
    type: k,
    interpolate: w,
    normalize: y,
    values: Xt(kt(), a, l)
  };
  return b;
}
const _o = () => "", Te = (e) => At(e);
function So(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = Hi(...t), d = Nt(c.missingWarn) ? c.missingWarn : e.missingWarn, g = Nt(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, y = Nt(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, w = !!c.resolvedMessage, k = J(c.default) || Nt(c.default) ? Nt(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, f = n || k != null && (J(k) || At(k)), b = cs(e, c);
  y && Ih(c);
  let [p, M, v] = w ? [
    l,
    b,
    r[b] || kt()
  ] : Pa(e, l, b, a, g, d), T = p, O = l;
  if (!w && !(J(T) || ve(T) || Te(T)) && f && (T = k, O = T), !w && (!(J(T) || ve(T) || Te(T)) || !J(M)))
    return s ? ci : l;
  let z = !1;
  const R = () => {
    z = !0;
  }, H = Te(T) ? T : Ea(e, l, M, T, O, R);
  if (z)
    return T;
  const Z = zh(e, M, v, c), Q = Eh(Z), ot = Ah(e, H, Q);
  let at = i ? i(ot, l) : ot;
  return y && J(at) && (at = wu(at)), at;
}
function Ih(e) {
  Wt(e.list) ? e.list = e.list.map((t) => J(t) ? so(t) : t) : wt(e.named) && Object.keys(e.named).forEach((t) => {
    J(e.named[t]) && (e.named[t] = so(e.named[t]));
  });
}
function Pa(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, d = c(e, i, n);
  let g = kt(), y, w = null;
  const k = "translate";
  for (let f = 0; f < d.length && (y = d[f], g = a[y] || kt(), (w = l(g, t)) === null && (w = g[t]), !(J(w) || ve(w) || Te(w))); f++)
    if (!_h(y, d)) {
      const b = us(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        y,
        o,
        k
      );
      b !== t && (w = b);
    }
  return [w, y, g];
}
function Ea(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (Te(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => i;
    return c.locale = n, c.key = t, c;
  }
  const l = a(i, Oh(e, n, s, i, r, o));
  return l.locale = n, l.key = t, l.source = i, l;
}
function Ah(e, t, n) {
  return t(n);
}
function Hi(...e) {
  const [t, n, i] = e, s = kt();
  if (!J(t) && !Ut(t) && !Te(t) && !ve(t))
    throw Ce(Se.INVALID_ARGUMENT);
  const o = Ut(t) ? String(t) : (Te(t), t);
  return Ut(n) ? s.plural = n : J(n) ? s.default = n : yt(n) && !ri(n) ? s.named = n : Wt(n) && (s.list = n), Ut(i) ? s.plural = i : J(i) ? s.default = i : yt(i) && Xt(s, i), [o, s];
}
function Oh(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => gu(t, n, a)
  };
}
function zh(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: d } = e, y = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (w, k) => {
      let f = a(n, w);
      if (f == null && (d || k)) {
        const [, , b] = Pa(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          w,
          t,
          r,
          l,
          c
        );
        f = a(b, w);
      }
      if (J(f) || ve(f)) {
        let b = !1;
        const M = Ea(e, w, t, f, w, () => {
          b = !0;
        });
        return b ? _o : M;
      } else return Te(f) ? f : _o;
    }
  };
  return e.processor && (y.processor = e.processor), i.list && (y.list = i.list), i.named && (y.named = i.named), Ut(i.plural) && (y.pluralIndex = i.plural), y;
}
Yu();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Dh = "11.2.2";
function Nh() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Yn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Yn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Yn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const sn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ih,
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
function Mn(e, ...t) {
  return li(e, null, void 0);
}
const ji = /* @__PURE__ */ Ve("__translateVNode"), Ui = /* @__PURE__ */ Ve("__datetimeParts"), Vi = /* @__PURE__ */ Ve("__numberParts"), Wh = Ve("__setPluralRules"), Ia = /* @__PURE__ */ Ve("__injectWithOption"), Yi = /* @__PURE__ */ Ve("__dispose");
function Ln(e) {
  if (!wt(e) || ve(e))
    return e;
  for (const t in e)
    if (fe(e, t))
      if (!t.includes("."))
        wt(e[t]) && Ln(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = kt()), !wt(s[n[a]])) {
            o = !0;
            break;
          }
          s = s[n[a]];
        }
        if (o || (ve(s) ? ka.includes(n[i]) || delete e[t] : (s[n[i]] = e[t], delete e[t])), !ve(s)) {
          const a = s[n[i]];
          wt(a) && Ln(a);
        }
      }
  return e;
}
function Aa(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = yt(n) ? n : Wt(i) ? kt() : { [e]: kt() };
  if (Wt(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || kt(), Gn(c, a[l])) : Gn(c, a);
    } else
      J(r) && Gn(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      fe(a, r) && Ln(a[r]);
  return a;
}
function $h(e) {
  return e.type;
}
function Fh(e, t, n) {
  let i = wt(t.messages) ? t.messages : kt();
  "__i18nGlobal" in n && (i = Aa(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, i[o]);
  });
  {
    if (wt(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (wt(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Co(e) {
  return S(Xr, null, e, 0);
}
function Oa() {
  return "currentInstance" in ki ? ki["currentInstance"] : ki.getCurrentInstance();
}
const To = () => [], Bh = () => !1;
let Mo = 0;
function Lo(e) {
  return (t, n, i, s) => e(n, i, Oa() || void 0, s);
}
function Hh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = no ? q : Gr;
  let a = Nt(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : J(e.locale) ? e.locale : ti
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : J(e.fallbackLocale) || Wt(e.fallbackLocale) || yt(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(Aa(r.value, e)), d = o(yt(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), g = o(yt(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let y = t ? t.missingWarn : Nt(e.missingWarn) || Qn(e.missingWarn) ? e.missingWarn : !0, w = t ? t.fallbackWarn : Nt(e.fallbackWarn) || Qn(e.fallbackWarn) ? e.fallbackWarn : !0, k = t ? t.fallbackRoot : Nt(e.fallbackRoot) ? e.fallbackRoot : !0, f = !!e.fallbackFormat, b = At(e.missing) ? e.missing : null, p = At(e.missing) ? Lo(e.missing) : null, M = At(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : Nt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const O = t ? t.modifiers : yt(e.modifiers) ? e.modifiers : {};
  let z = e.pluralRules || t && t.pluralRules, R;
  R = (() => {
    i && po(null);
    const C = {
      version: Dh,
      locale: r.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: O,
      pluralRules: z,
      missing: p === null ? void 0 : p,
      missingWarn: y,
      fallbackWarn: w,
      fallbackFormat: f,
      unresolving: !0,
      postTranslation: M === null ? void 0 : M,
      warnHtmlMessage: v,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = d.value, C.numberFormats = g.value, C.__datetimeFormatters = yt(R) ? R.__datetimeFormatters : void 0, C.__numberFormatters = yt(R) ? R.__numberFormatters : void 0;
    const W = bh(C);
    return i && po(W), W;
  })(), gn(R, r.value, l.value);
  function Z() {
    return [
      r.value,
      l.value,
      c.value,
      d.value,
      g.value
    ];
  }
  const Q = G({
    get: () => r.value,
    set: (C) => {
      R.locale = C, r.value = C;
    }
  }), ot = G({
    get: () => l.value,
    set: (C) => {
      R.fallbackLocale = C, l.value = C, gn(R, r.value, C);
    }
  }), at = G(() => c.value), ht = /* @__PURE__ */ G(() => d.value), Pt = /* @__PURE__ */ G(() => g.value);
  function mt() {
    return At(M) ? M : null;
  }
  function nt(C) {
    M = C, R.postTranslation = C;
  }
  function lt() {
    return b;
  }
  function St(C) {
    C !== null && (p = Lo(C)), b = C, R.missing = p;
  }
  const dt = (C, W, ft, ut, ae, ce) => {
    Z();
    let xe;
    try {
      i || (R.fallbackContext = t ? xh() : void 0), xe = C(R);
    } finally {
      i || (R.fallbackContext = void 0);
    }
    if (ft !== "translate exists" && // for not `te` (e.g `t`)
    Ut(xe) && xe === ci || ft === "translate exists" && !xe) {
      const [hn, vs] = W();
      return t && k ? ut(t) : ae(hn);
    } else {
      if (ce(xe))
        return xe;
      throw Mn(sn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function U(...C) {
    return dt((W) => Reflect.apply(So, null, [W, ...C]), () => Hi(...C), "translate", (W) => Reflect.apply(W.t, W, [...C]), (W) => W, (W) => J(W));
  }
  function pt(...C) {
    const [W, ft, ut] = C;
    if (ut && !wt(ut))
      throw Mn(sn.INVALID_ARGUMENT);
    return U(W, ft, Xt({ resolvedMessage: !0 }, ut || {}));
  }
  function K(...C) {
    return dt((W) => Reflect.apply(wo, null, [W, ...C]), () => Fi(...C), "datetime format", (W) => Reflect.apply(W.d, W, [...C]), () => go, (W) => J(W) || Wt(W));
  }
  function Mt(...C) {
    return dt((W) => Reflect.apply(xo, null, [W, ...C]), () => Bi(...C), "number format", (W) => Reflect.apply(W.n, W, [...C]), () => go, (W) => J(W) || Wt(W));
  }
  function zt(C) {
    return C.map((W) => J(W) || Ut(W) || Nt(W) ? Co(String(W)) : W);
  }
  const Lt = {
    normalize: zt,
    interpolate: (C) => C,
    type: "vnode"
  };
  function gt(...C) {
    return dt((W) => {
      let ft;
      const ut = W;
      try {
        ut.processor = Lt, ft = Reflect.apply(So, null, [ut, ...C]);
      } finally {
        ut.processor = null;
      }
      return ft;
    }, () => Hi(...C), "translate", (W) => W[ji](...C), (W) => [Co(W)], (W) => Wt(W));
  }
  function Yt(...C) {
    return dt((W) => Reflect.apply(xo, null, [W, ...C]), () => Bi(...C), "number format", (W) => W[Vi](...C), To, (W) => J(W) || Wt(W));
  }
  function ne(...C) {
    return dt((W) => Reflect.apply(wo, null, [W, ...C]), () => Fi(...C), "datetime format", (W) => W[Ui](...C), To, (W) => J(W) || Wt(W));
  }
  function Gt(C) {
    z = C, R.pluralRules = z;
  }
  function N(C, W) {
    return dt(() => {
      if (!C)
        return !1;
      const ft = J(W) ? W : r.value, ut = Tt(ft), ae = R.messageResolver(ut, C);
      return ve(ae) || Te(ae) || J(ae);
    }, () => [C], "translate exists", (ft) => Reflect.apply(ft.te, ft, [C, W]), Bh, (ft) => Nt(ft));
  }
  function ct(C) {
    let W = null;
    const ft = _a(R, l.value, r.value);
    for (let ut = 0; ut < ft.length; ut++) {
      const ae = c.value[ft[ut]] || {}, ce = R.messageResolver(ae, C);
      if (ce != null) {
        W = ce;
        break;
      }
    }
    return W;
  }
  function vt(C) {
    const W = ct(C);
    return W ?? (t ? t.tm(C) || {} : {});
  }
  function Tt(C) {
    return c.value[C] || {};
  }
  function Rt(C, W) {
    if (s) {
      const ft = { [C]: W };
      for (const ut in ft)
        fe(ft, ut) && Ln(ft[ut]);
      W = ft[C];
    }
    c.value[C] = W, R.messages = c.value;
  }
  function Et(C, W) {
    c.value[C] = c.value[C] || {};
    const ft = { [C]: W };
    if (s)
      for (const ut in ft)
        fe(ft, ut) && Ln(ft[ut]);
    W = ft[C], Gn(W, c.value[C]), R.messages = c.value;
  }
  function P(C) {
    return d.value[C] || {};
  }
  function h(C, W) {
    d.value[C] = W, R.datetimeFormats = d.value, vo(R, C, W);
  }
  function m(C, W) {
    d.value[C] = Xt(d.value[C] || {}, W), R.datetimeFormats = d.value, vo(R, C, W);
  }
  function E(C) {
    return g.value[C] || {};
  }
  function $(C, W) {
    g.value[C] = W, R.numberFormats = g.value, bo(R, C, W);
  }
  function st(C, W) {
    g.value[C] = Xt(g.value[C] || {}, W), R.numberFormats = g.value, bo(R, C, W);
  }
  Mo++, t && no && (Ie(t.locale, (C) => {
    a && (r.value = C, R.locale = C, gn(R, r.value, l.value));
  }), Ie(t.fallbackLocale, (C) => {
    a && (l.value = C, R.fallbackLocale = C, gn(R, r.value, l.value));
  }));
  const tt = {
    id: Mo,
    locale: Q,
    fallbackLocale: ot,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(C) {
      a = C, C && t && (r.value = t.locale.value, l.value = t.fallbackLocale.value, gn(R, r.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: at,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return z || {};
    },
    get isGlobal() {
      return i;
    },
    get missingWarn() {
      return y;
    },
    set missingWarn(C) {
      y = C, R.missingWarn = y;
    },
    get fallbackWarn() {
      return w;
    },
    set fallbackWarn(C) {
      w = C, R.fallbackWarn = w;
    },
    get fallbackRoot() {
      return k;
    },
    set fallbackRoot(C) {
      k = C;
    },
    get fallbackFormat() {
      return f;
    },
    set fallbackFormat(C) {
      f = C, R.fallbackFormat = f;
    },
    get warnHtmlMessage() {
      return v;
    },
    set warnHtmlMessage(C) {
      v = C, R.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(C) {
      T = C, R.escapeParameter = C;
    },
    t: U,
    getLocaleMessage: Tt,
    setLocaleMessage: Rt,
    mergeLocaleMessage: Et,
    getPostTranslationHandler: mt,
    setPostTranslationHandler: nt,
    getMissingHandler: lt,
    setMissingHandler: St,
    [Wh]: Gt
  };
  return tt.datetimeFormats = ht, tt.numberFormats = Pt, tt.rt = pt, tt.te = N, tt.tm = vt, tt.d = K, tt.n = Mt, tt.getDateTimeFormat = P, tt.setDateTimeFormat = h, tt.mergeDateTimeFormat = m, tt.getNumberFormat = E, tt.setNumberFormat = $, tt.mergeNumberFormat = st, tt[Ia] = n, tt[ji] = gt, tt[Ui] = ne, tt[Vi] = Yt, tt;
}
const hs = {
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
function jh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Jt ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, kt());
}
function za() {
  return Jt;
}
Xt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ut(e) || !isNaN(e)
  }
}, hs);
function Uh(e) {
  return Wt(e) && !J(e[0]);
}
function Da(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = kt();
    e.locale && (a.locale = e.locale), J(e.format) ? a.key = e.format : wt(e.format) && (J(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((y, w) => n.includes(w) ? Xt(kt(), y, { [w]: e.format[w] }) : y, kt()));
    const l = i(e.value, a, r);
    let c = [a.key];
    Wt(l) ? c = l.map((y, w) => {
      const k = s[y.type], f = k ? k({ [y.type]: y.value, index: w, parts: l }) : [y.value];
      return Uh(f) && (f[0].key = `${y.type}-${w}`), f;
    }) : J(l) && (c = [l]);
    const d = Xt(kt(), o), g = J(e.tag) || wt(e.tag) ? e.tag : za();
    return Go(g, d, c);
  };
}
Xt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, hs);
const Vh = /* @__PURE__ */ Ve("global-vue-i18n");
function In(e = {}) {
  const t = Oa();
  if (t == null)
    throw Mn(sn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Mn(sn.NOT_INSTALLED);
  const n = Yh(t), i = Xh(n), s = $h(t), o = Gh(e, s);
  if (o === "global")
    return Fh(i, e, s), i;
  if (o === "parent") {
    let l = Kh(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = Xt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = Hh(l), a.__composerExtend && (r[Yi] = a.__composerExtend(r)), qh(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function Yh(e) {
  const t = Pe(e.isCE ? Vh : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Mn(e.isCE ? sn.NOT_INSTALLED_WITH_PROVIDE : sn.UNEXPECTED_ERROR);
  return t;
}
function Gh(e, t) {
  return ri(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Xh(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Kh(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = Zh(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[Ia] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function Zh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function qh(e, t, n) {
  ln(() => {
  }, t), Zi(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Yi];
    s && (s(), delete i[Yi]);
  }, t);
}
Xt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, hs);
Nh();
yh(nh);
wh(gh);
vh(_a);
const Jh = { class: "toolbar-panel first-panel" }, Qh = { class: "tool-section" }, td = ["onClick", "title", "aria-pressed"], ed = { class: "action-section" }, nd = ["disabled", "title"], id = ["disabled", "title"], sd = ["disabled", "title"], od = ["title"], ad = ["title"], rd = ["title"], ld = {
  key: 0,
  class: "toolbar-panel second-panel"
}, cd = { class: "style-section" }, ud = {
  key: 0,
  class: "style-group"
}, hd = { class: "style-label" }, dd = { class: "line-width-selector" }, fd = ["onClick", "title", "aria-pressed"], gd = { class: "style-value" }, md = {
  key: 1,
  class: "style-divider"
}, pd = {
  key: 2,
  class: "style-group opacity-group"
}, yd = { class: "style-label" }, wd = ["value", "title", "aria-label"], vd = { class: "style-value" }, xd = {
  key: 3,
  class: "style-divider"
}, bd = {
  key: 4,
  class: "style-group color-picker-group"
}, kd = { class: "style-label" }, _d = { class: "color-row" }, Sd = ["onClick", "title", "aria-pressed"], Cd = { class: "custom-color-wrapper" }, Td = ["title"], Md = ["value", "title", "aria-label"], Ld = {
  key: 5,
  class: "style-group"
}, Rd = { class: "style-label" }, Pd = { class: "text-size-selector" }, Ed = ["onClick", "title", "aria-pressed"], Id = { class: "style-value" }, Ad = {
  key: 6,
  class: "style-group"
}, Od = { class: "style-label" }, zd = { class: "mosaic-size-selector" }, Dd = ["onClick", "title", "aria-pressed"], Nd = { class: "style-value" }, Wd = {
  key: 7,
  class: "style-group"
}, $d = { class: "style-label" }, Fd = { class: "translate-engine-selector" }, Bd = ["onClick", "title", "aria-pressed"], Hd = /* @__PURE__ */ $t({
  __name: "ToolbarSection",
  props: {
    currentTool: {},
    currentColor: {},
    currentLineWidth: {},
    currentOpacity: {},
    currentTextSize: {},
    currentMosaicSize: {},
    canUndo: { type: Boolean },
    canRedo: { type: Boolean },
    canDelete: { type: Boolean },
    currentTranslateEngine: { default: "bing" }
  },
  emits: ["tool-select", "color-change", "line-width-change", "opacity-change", "text-size-change", "mosaic-size-change", "translate-engine-change", "undo", "redo", "delete", "save", "confirm", "cancel"],
  setup(e, { expose: t, emit: n }) {
    const i = q(null), { t: s } = In(), o = e, a = n, r = G(() => [
      { type: L.Select, icon: su, title: s("screenshot.select") },
      { type: L.Rectangle, icon: au, title: s("screenshot.rectangle") },
      { type: L.Ellipse, icon: uu, title: s("screenshot.ellipse") },
      { type: L.Line, icon: ha, title: s("screenshot.line") },
      { type: L.Arrow, icon: qc, title: s("screenshot.arrow") },
      { type: L.Pen, icon: du, title: s("screenshot.pen") },
      { type: L.Mosaic, icon: iu, title: s("screenshot.mosaic") },
      { type: L.Text, icon: tu, title: s("screenshot.text") },
      { type: L.ColorPicker, icon: to, title: s("screenshot.colorPicker") },
      { type: L.Ocr, icon: yn, title: s("screenshot.ocr") },
      { type: L.Translate, icon: da, title: s("screenshot.translate") },
      { type: L.Pin, icon: Ni, title: s("screenshot.pin") }
    ]), l = G(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: s("translate.bingTranslate"), short: "B" },
      { value: "offline", label: s("translate.offlineTranslate"), short: "离" }
    ]), c = [2, 3, 5, 8], d = [
      "#ff4444",
      "#f79009",
      "#fdb022",
      "#12b76a",
      "#06b6d4",
      "#2e90fa",
      "#7a5af8",
      "#d444f1",
      "#111827"
    ], g = [12, 14, 16, 18, 20, 24], y = [8, 12, 16, 20], w = G(() => ![L.Select, L.ColorPicker, L.Ocr, L.Pin].includes(o.currentTool)), k = G(
      () => [L.Rectangle, L.Ellipse, L.Line, L.Arrow, L.Pen].includes(o.currentTool)
    ), f = G(
      () => [L.Rectangle, L.Ellipse, L.Line, L.Arrow, L.Pen, L.Text].includes(o.currentTool)
    ), b = G(
      () => [
        L.Rectangle,
        L.Ellipse,
        L.Line,
        L.Arrow,
        L.Pen,
        L.Mosaic,
        L.Text
      ].includes(o.currentTool)
    ), p = G(() => o.currentTool === L.Text), M = G(() => o.currentTool === L.Mosaic), v = G(() => o.currentTool === L.Translate), T = (U) => a("tool-select", U), O = (U) => a("color-change", U), z = (U) => a("line-width-change", U), R = (U) => {
      a("opacity-change", Number(U.target.value) / 100);
    }, H = (U) => a("text-size-change", U), Z = (U) => a("mosaic-size-change", U), Q = () => a("undo"), ot = () => a("redo"), at = () => a("delete"), ht = () => a("save"), Pt = () => a("confirm"), mt = () => a("cancel"), nt = (U) => {
      a("translate-engine-change", U);
    }, lt = (U) => {
      O(U);
    }, St = (U) => {
      const pt = U.target;
      pt.value && O(pt.value);
    }, dt = () => {
      const U = i.value?.getBoundingClientRect();
      return {
        width: U?.width ?? 590,
        height: U?.height ?? 50
      };
    };
    return Ie(() => o.currentTool, () => {
      kn(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: dt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: dt
    }), (U, pt) => (B(), X(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        et(" 第一个面板：工具选择 + 操作按钮 "),
        A("div", Jh, [
          et(" 工具选择区域 "),
          A("div", Qh, [
            (B(!0), X(
              Jt,
              null,
              de(r.value, (K) => (B(), X("button", {
                key: K.type,
                onClick: (Mt) => T(K.type),
                class: Ct(["tool-btn", { active: U.currentTool === K.type }]),
                title: K.title,
                "aria-pressed": U.currentTool === K.type
              }, [
                (B(), jt(Re(K.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, td))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          et(" 分隔线 "),
          pt[0] || (pt[0] = A(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          et(" 操作按钮区域 "),
          A("div", ed, [
            A("button", {
              onClick: Q,
              disabled: !U.canUndo,
              class: "action-btn undo",
              title: D(s)("screenshot.undo")
            }, [
              S(D(cu), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, nd),
            A("button", {
              onClick: ot,
              disabled: !U.canRedo,
              class: "action-btn redo",
              title: D(s)("screenshot.redo")
            }, [
              S(D(eu), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, id),
            A("button", {
              onClick: at,
              disabled: !U.canDelete,
              class: "action-btn delete",
              title: D(s)("screenshot.delete")
            }, [
              S(D(Jc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, sd),
            A("button", {
              onClick: mt,
              class: "action-btn cancel",
              title: D(s)("screenshot.cancel")
            }, [
              S(D(Di), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, od),
            A("button", {
              onClick: ht,
              class: "action-btn save",
              title: D(s)("screenshot.save")
            }, [
              S(D(Qc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ad),
            A("button", {
              onClick: Pt,
              class: "action-btn confirm",
              title: D(s)("screenshot.confirm")
            }, [
              S(D(zi), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, rd)
          ])
        ]),
        et(" 第二个面板：样式设置区域 "),
        w.value ? (B(), X("div", ld, [
          A("div", cd, [
            et(" 线宽设置 "),
            k.value ? (B(), X("div", ud, [
              A(
                "span",
                hd,
                rt(D(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              A("div", dd, [
                (B(), X(
                  Jt,
                  null,
                  de(c, (K) => A("button", {
                    key: K,
                    onClick: (Mt) => z(K),
                    class: Ct(["width-btn", { active: U.currentLineWidth === K }]),
                    title: `${K}px`,
                    "aria-pressed": U.currentLineWidth === K
                  }, [
                    A(
                      "span",
                      {
                        class: "line-preview",
                        style: Ot({ height: `${K}px`, backgroundColor: U.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, fd)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                gd,
                rt(U.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            k.value && f.value ? (B(), X("div", md)) : et("v-if", !0),
            et(" 不透明度设置 "),
            b.value ? (B(), X("div", pd, [
              A(
                "span",
                yd,
                rt(D(s)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              A("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(U.currentOpacity * 100),
                style: Ot({
                  "--opacity-color": U.currentColor,
                  "--opacity-progress": `${Math.round(U.currentOpacity * 100)}%`
                }),
                title: `${Math.round(U.currentOpacity * 100)}%`,
                "aria-label": D(s)("screenshot.opacity"),
                onInput: R
              }, null, 44, wd),
              A(
                "span",
                vd,
                rt(Math.round(U.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            b.value && f.value ? (B(), X("div", xd)) : et("v-if", !0),
            et(" 颜色设置 "),
            f.value ? (B(), X("div", bd, [
              A(
                "span",
                kd,
                rt(D(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              A("div", _d, [
                (B(), X(
                  Jt,
                  null,
                  de(d, (K) => A("button", {
                    key: K,
                    onClick: (Mt) => lt(K),
                    class: Ct(["color-btn", { active: U.currentColor === K }]),
                    style: Ot({ backgroundColor: K }),
                    title: K,
                    "aria-pressed": U.currentColor === K
                  }, null, 14, Sd)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                A("div", Cd, [
                  A("button", {
                    class: Ct(["color-btn custom-color-btn", { active: !d.includes(U.currentColor) }]),
                    title: D(s)("screenshot.customColor")
                  }, [
                    S(D(to), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Td),
                  A("input", {
                    type: "color",
                    onChange: St,
                    value: U.currentColor,
                    class: "color-input-hidden",
                    title: D(s)("screenshot.customColor"),
                    "aria-label": D(s)("screenshot.customColor")
                  }, null, 40, Md)
                ])
              ])
            ])) : et("v-if", !0),
            et(" 文字大小设置 "),
            p.value ? (B(), X("div", Ld, [
              A(
                "span",
                Rd,
                rt(D(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              A("div", Pd, [
                (B(), X(
                  Jt,
                  null,
                  de(g, (K) => A("button", {
                    key: K,
                    onClick: (Mt) => H(K),
                    class: Ct(["size-btn", { active: U.currentTextSize === K }]),
                    title: `${K}px`,
                    "aria-pressed": U.currentTextSize === K
                  }, [
                    A(
                      "span",
                      {
                        class: "size-text",
                        style: Ot({ fontSize: `${Math.min(K, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Ed)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Id,
                rt(U.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            et(" 马赛克大小设置 "),
            M.value ? (B(), X("div", Ad, [
              A(
                "span",
                Od,
                rt(D(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              A("div", zd, [
                (B(), X(
                  Jt,
                  null,
                  de(y, (K) => A("button", {
                    key: K,
                    onClick: (Mt) => Z(K),
                    class: Ct(["size-btn", { active: U.currentMosaicSize === K }]),
                    title: `${D(s)("screenshot.brush")} ${K * 3}px`,
                    "aria-pressed": U.currentMosaicSize === K
                  }, [
                    A(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: Ot({
                          width: `${Math.min(K * 1.25, 18)}px`,
                          height: `${Math.min(K * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Dd)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Nd,
                rt(U.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            et(" 翻译引擎选择 "),
            v.value ? (B(), X("div", Wd, [
              A(
                "span",
                $d,
                rt(D(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              A("div", Fd, [
                (B(!0), X(
                  Jt,
                  null,
                  de(l.value, (K) => (B(), X("button", {
                    key: K.value,
                    onClick: (Mt) => nt(K.value),
                    class: Ct(["engine-btn", { active: U.currentTranslateEngine === K.value }]),
                    title: K.label,
                    "aria-pressed": U.currentTranslateEngine === K.value
                  }, rt(K.short), 11, Bd))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : et("v-if", !0)
          ])
        ])) : et("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), ui = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, jd = /* @__PURE__ */ ui(Hd, [["__scopeId", "data-v-dc3e37ec"]]), Ud = {
  class: "screenshot-container",
  ref: "containerRef"
}, Vd = {
  key: 0,
  class: "mask-layers"
}, Yd = {
  key: 1,
  class: "mask-full"
}, Gd = { class: "size-text" }, Xd = {
  key: 4,
  class: "loading-overlay"
}, Kd = /* @__PURE__ */ $t({
  __name: "index",
  setup(e) {
    const t = q(), n = q(), i = q(null), s = q(null);
    let o = null;
    const a = q(!0), r = q(!1), l = q(""), c = q({ x: 0, y: 0 }), d = q(16), g = q(!1), y = q("bing"), w = q({ width: 590, height: 50 });
    let k = !1;
    const f = q({
      selectionRect: null,
      annotations: [],
      currentTool: L.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
      textSize: 16,
      mosaicSize: 8,
      hasSelection: !1,
      hasAnnotations: !1,
      canRedo: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), b = q(), p = q(), M = q(), v = G(() => f.value.isDrawing), T = G(() => {
      if (!f.value.selectionRect) return {};
      const { y: P } = f.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${P}px`
      };
    }), O = G(() => {
      if (!f.value.selectionRect) return {};
      const { y: P, height: h } = f.value.selectionRect;
      return {
        top: `${P + h}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), z = G(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: h, height: m } = f.value.selectionRect;
      return {
        top: `${h}px`,
        left: "0",
        width: `${P}px`,
        height: `${m}px`
      };
    }), R = G(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: h, width: m, height: E } = f.value.selectionRect;
      return {
        top: `${h}px`,
        left: `${P + m}px`,
        right: "0",
        height: `${E}px`
      };
    }), H = G(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: h, width: m, height: E } = f.value.selectionRect, $ = 10, st = 12, tt = Math.min(w.value.width, Math.max(0, window.innerWidth - $ * 2)), C = Math.min(w.value.height, Math.max(0, window.innerHeight - $ * 2)), W = Math.max($, window.innerHeight - C - $), ft = Math.max($, window.innerWidth - tt - $);
      let ut;
      return h + E + C + st <= window.innerHeight - $ ? ut = h + E + st : h - C - st >= $ ? ut = h - C - st : ut = h + E - C - $, ut = Math.min(Math.max(ut, $), W), {
        left: `${Math.min(Math.max(P + (m - tt) / 2, $), ft)}px`,
        top: `${ut}px`
      };
    }), Z = G(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: h, width: m, height: E } = f.value.selectionRect, $ = 10;
      let st = P - $, tt = h - $, C = "translateY(-100%)";
      return st < 10 && (st = P + m + $, C = "translateY(-100%)"), tt < 30 && (tt = h + E + $, C = "translateY(0)"), {
        left: `${st}px`,
        top: `${tt}px`,
        transform: C
      };
    }), Q = G(() => {
      if (!f.value.selectionRect) return "";
      const { width: P, height: h } = f.value.selectionRect;
      return `${Math.round(P)} × ${Math.round(h)}`;
    }), ot = G(() => {
      const P = qe(c.value);
      return {
        "--text-accent-color": f.value.currentStyle.color,
        left: `${P.x}px`,
        top: `${P.y}px`
      };
    }), at = (P) => {
      if (P === L.Pin && f.value.selectionRect) {
        ht();
        return;
      }
      if (P === L.Ocr && f.value.selectionRect) {
        Pt();
        return;
      }
      o?.setTool(P);
    }, ht = async () => {
      try {
        await o?.createPinWindow();
      } catch (P) {
        j.error("[截图] 创建贴图失败", P);
      }
    }, Pt = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (P) {
        j.error("[截图] 创建文字识别贴图失败", P);
      }
    }, mt = (P) => {
      o?.updateStyle({ color: P });
    }, nt = (P) => {
      o?.updateStyle({ lineWidth: P });
    }, lt = (P) => {
      o?.updateStyle({ opacity: P });
    }, St = (P) => {
      o?.updateTextSize(P);
    }, dt = (P) => {
      o?.updateMosaicSize(P);
    }, U = (P) => {
      y.value = P, o?.setTranslationEngine(P), o?.executeTranslation();
    }, pt = () => {
      o?.undoAnnotation();
    }, K = () => {
      o?.redoAnnotation();
    }, Mt = () => {
      o?.deleteSelectedAnnotation();
    }, zt = async () => {
      try {
        await o?.processScreenshot("save"), vt();
      } catch (P) {
        const h = P?.message || P?.toString() || "保存失败";
        if (h.includes("保存已取消") || h.includes("cancelled"))
          return;
        j.error("保存截图时发生错误", h);
      }
    }, Vt = async () => {
      try {
        await o?.processScreenshot("copy"), vt();
      } catch {
      }
    }, Lt = () => {
      vt();
    };
    let gt = null;
    const Yt = (P, h) => {
      if (h && h.getData().type === "text") {
        const m = h.getData();
        c.value = {
          x: m.points[0].x,
          y: m.points[0].y
        }, d.value = m.fontSize || f.value.textSize;
      } else
        c.value = P, d.value = f.value.textSize;
      r.value = !0, gt = h || null, h && o?.setEditingAnnotation(h), h && h.getData().text ? l.value = h.getData().text : l.value = "", kn(() => {
        n.value?.focus(), gt && n.value?.select();
      });
    }, ne = () => {
      l.value.trim() ? gt ? o?.updateTextAnnotation(gt, l.value) : o?.createTextAnnotation(c.value, l.value) : gt && o?.deleteAnnotation(gt), Gt();
    }, Gt = () => {
      r.value = !1, l.value = "", gt && o?.clearEditingAnnotation(), gt = null;
    }, N = (P) => {
      navigator.clipboard && navigator.clipboard.writeText(P.hex).catch((h) => {
        j.error("[截图] 复制颜色到剪贴板失败", h);
      });
    }, ct = (P) => {
      if (P.key === "Meta" || P.key === "Win" || P.altKey && P.key === "Tab" || P.altKey && P.key === "F4") {
        P.preventDefault(), P.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (P.key === "Escape") {
          Gt(), P.preventDefault();
          return;
        }
        if (P.key === "Enter") {
          ne(), P.preventDefault();
          return;
        }
        if (P.key === "Tab") {
          P.preventDefault();
          return;
        }
        return;
      }
      if (!f.value.selectionRect) {
        if (P.key === "Escape") {
          vt();
          return;
        }
        P.preventDefault(), P.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(P)) {
        P.preventDefault();
        return;
      }
      const h = navigator.platform.toLowerCase().includes("mac");
      if ((h ? P.metaKey : P.ctrlKey) && P.key.toLowerCase() === "z") {
        P.shiftKey ? K() : pt(), P.preventDefault();
        return;
      }
      if (!h && P.ctrlKey && P.key.toLowerCase() === "y") {
        K(), P.preventDefault();
        return;
      }
      if (P.key === "Escape") {
        vt();
        return;
      } else if (P.key === "Delete" || P.key === "Backspace") {
        Mt(), P.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(P.key) || P.preventDefault();
    }, vt = async () => {
      if (!k) {
        k = !0, o?.destroy(), o = null;
        try {
          await I("cleanup_screenshot_resources");
        } catch {
          try {
            await I("clear_screenshot_background");
          } catch (h) {
            j.error("[截图] 清理后台缓存失败", h);
          }
        }
        f.value = {
          selectionRect: null,
          annotations: [],
          currentTool: L.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", gt = null, g.value = !1, a.value = !0;
        try {
          await I("close_and_destroy_screenshot_window");
        } catch (P) {
          j.error("[截图] 销毁截图窗口失败，回退到 close()", P), await s.value?.close();
        } finally {
          k = !1;
        }
      }
    }, Tt = () => {
      const P = o?.getState();
      P && (f.value = P);
    }, Rt = () => {
      const P = i.value?.getToolbarSize?.();
      P && (w.value = P);
    }, Et = (P) => {
      const h = P.detail;
      h && (w.value = h);
    };
    return ln(async () => {
      if (t.value) {
        s.value = new En("screenshot"), await s.value.emit("screenshot_ready"), o = new Yc(
          t.value,
          Tt,
          Yt,
          N
        );
        try {
          const P = await I("get_translation_engine");
          P && ["google", "bing", "offline"].includes(P) && (y.value = P, o?.setTranslationEngine(P));
        } catch (P) {
          j.error("[截图] 获取翻译引擎设置失败", P);
        }
        try {
          const P = await I("get_offline_model_activated");
          o?.setOfflineModelActivated(P);
        } catch (P) {
          j.error("[截图] 获取离线模型激活状态失败", P);
        }
        document.addEventListener("keydown", ct), window.addEventListener("resize", Rt), window.addEventListener("screenshot-toolbar-resize", Et), p.value = await xn("background-ready", () => {
          o?.triggerBackgroundReload();
        }), M.value = await xn("screenshot-close-requested", () => {
          vt();
        }), b.value = await xn("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const P = o?.getTranslationState();
          P?.isLoading || P?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const h = o?.getTranslationState();
              if (h?.isLoading || h?.isVisible)
                return;
              vt();
            }
          }, 100);
        }), kn(Rt);
      }
    }), Zi(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", ct), window.removeEventListener("resize", Rt), window.removeEventListener("screenshot-toolbar-resize", Et), b.value?.(), p.value?.(), M.value?.(), b.value = void 0, p.value = void 0, M.value = void 0, s.value = null;
    }), (P, h) => (B(), X(
      "div",
      Ud,
      [
        et(" 遮罩层 "),
        f.value.selectionRect ? (B(), X("div", Vd, [
          A(
            "div",
            {
              class: "mask-top",
              style: Ot(T.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-bottom",
              style: Ot(O.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-left",
              style: Ot(z.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-right",
              style: Ot(R.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (B(), X("div", Yd)),
        et(" 画布 "),
        A(
          "canvas",
          {
            ref_key: "canvasRef",
            ref: t,
            class: "drawing-canvas"
          },
          null,
          512
          /* NEED_PATCH */
        ),
        et(" 尺寸信息 "),
        f.value.selectionRect && a.value ? (B(), X(
          "div",
          {
            key: 2,
            class: "size-info",
            style: Ot(Z.value)
          },
          [
            A(
              "span",
              Gd,
              rt(Q.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : et("v-if", !0),
        et(" 工具栏 "),
        f.value.selectionRect && !v.value ? (B(), jt(jd, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: Ot(H.value),
          class: "toolbar",
          "current-tool": f.value.currentTool,
          "current-color": f.value.currentStyle.color,
          "current-line-width": f.value.currentStyle.lineWidth,
          "current-opacity": f.value.currentStyle.opacity,
          "current-text-size": f.value.textSize,
          "current-mosaic-size": f.value.mosaicSize,
          "can-undo": f.value.hasAnnotations,
          "can-redo": f.value.canRedo,
          "can-delete": !!f.value.selectedAnnotation,
          "current-translate-engine": y.value,
          onToolSelect: at,
          onColorChange: mt,
          onLineWidthChange: nt,
          onOpacityChange: lt,
          onTextSizeChange: St,
          onMosaicSizeChange: dt,
          onTranslateEngineChange: U,
          onUndo: pt,
          onRedo: K,
          onDelete: Mt,
          onSave: zt,
          onConfirm: Vt,
          onCancel: Lt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : et("v-if", !0),
        et(" 加载提示 - 仅在初始化时显示 "),
        g.value ? (B(), X("div", Xd, [
          h[1] || (h[1] = A(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          A(
            "p",
            null,
            rt(P.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : et("v-if", !0),
        et(" 文字输入框 "),
        r.value ? (B(), X(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: Ot(ot.value)
          },
          [
            _n(A(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": h[0] || (h[0] = (m) => l.value = m),
                type: "text",
                class: "text-input",
                style: Ot({
                  color: f.value.currentStyle.color,
                  fontFamily: D(Ze),
                  fontSize: d.value + "px",
                  height: d.value + "px",
                  lineHeight: d.value + "px"
                }),
                onKeydown: [
                  $s(ne, ["enter"]),
                  $s(Gt, ["escape"])
                ],
                onBlur: ne,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [Kr, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : et("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Zd = /* @__PURE__ */ ui(Kd, [["__scopeId", "data-v-fd4bfc80"]]), qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zd
}, Symbol.toStringTag, { value: "Module" })), Na = Symbol(), Xn = "el", Jd = "is-", ze = (e, t, n, i, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Wa = Symbol("namespaceContextKey"), Qd = (e) => {
  const t = e || (en() ? Pe(Wa, q(Xn)) : q(Xn));
  return G(() => D(t) || Xn);
}, ds = (e, t) => {
  const n = Qd(t);
  return {
    namespace: n,
    b: (f = "") => ze(n.value, e, f, "", ""),
    e: (f) => f ? ze(n.value, e, "", f, "") : "",
    m: (f) => f ? ze(n.value, e, "", "", f) : "",
    be: (f, b) => f && b ? ze(n.value, e, f, b, "") : "",
    em: (f, b) => f && b ? ze(n.value, e, "", f, b) : "",
    bm: (f, b) => f && b ? ze(n.value, e, f, "", b) : "",
    bem: (f, b, p) => f && b && p ? ze(n.value, e, f, b, p) : "",
    is: (f, ...b) => {
      const p = b.length >= 1 ? b[0] : !0;
      return f && p ? `${Jd}${f}` : "";
    },
    cssVar: (f) => {
      const b = {};
      for (const p in f)
        f[p] && (b[`--${n.value}-${p}`] = f[p]);
      return b;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const b = {};
      for (const p in f)
        f[p] && (b[`--${n.value}-${e}-${p}`] = f[p]);
      return b;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const tf = Object.prototype.hasOwnProperty, Ro = (e, t) => tf.call(e, t), Rn = (e) => typeof e == "function", Be = (e) => typeof e == "string", $a = (e) => e !== null && typeof e == "object";
var ef = typeof global == "object" && global && global.Object === Object && global, nf = typeof self == "object" && self && self.Object === Object && self, fs = ef || nf || Function("return this")(), on = fs.Symbol, Fa = Object.prototype, sf = Fa.hasOwnProperty, of = Fa.toString, mn = on ? on.toStringTag : void 0;
function af(e) {
  var t = sf.call(e, mn), n = e[mn];
  try {
    e[mn] = void 0;
    var i = !0;
  } catch {
  }
  var s = of.call(e);
  return i && (t ? e[mn] = n : delete e[mn]), s;
}
var rf = Object.prototype, lf = rf.toString;
function cf(e) {
  return lf.call(e);
}
var uf = "[object Null]", hf = "[object Undefined]", Po = on ? on.toStringTag : void 0;
function Ba(e) {
  return e == null ? e === void 0 ? hf : uf : Po && Po in Object(e) ? af(e) : cf(e);
}
function df(e) {
  return e != null && typeof e == "object";
}
var ff = "[object Symbol]";
function gs(e) {
  return typeof e == "symbol" || df(e) && Ba(e) == ff;
}
function gf(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var ms = Array.isArray, Eo = on ? on.prototype : void 0, Io = Eo ? Eo.toString : void 0;
function Ha(e) {
  if (typeof e == "string")
    return e;
  if (ms(e))
    return gf(e, Ha) + "";
  if (gs(e))
    return Io ? Io.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ja(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var mf = "[object AsyncFunction]", pf = "[object Function]", yf = "[object GeneratorFunction]", wf = "[object Proxy]";
function vf(e) {
  if (!ja(e))
    return !1;
  var t = Ba(e);
  return t == pf || t == yf || t == mf || t == wf;
}
var Ri = fs["__core-js_shared__"], Ao = function() {
  var e = /[^.]+$/.exec(Ri && Ri.keys && Ri.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xf(e) {
  return !!Ao && Ao in e;
}
var bf = Function.prototype, kf = bf.toString;
function _f(e) {
  if (e != null) {
    try {
      return kf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sf = /[\\^$.*+?()[\]{}|]/g, Cf = /^\[object .+?Constructor\]$/, Tf = Function.prototype, Mf = Object.prototype, Lf = Tf.toString, Rf = Mf.hasOwnProperty, Pf = RegExp(
  "^" + Lf.call(Rf).replace(Sf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ef(e) {
  if (!ja(e) || xf(e))
    return !1;
  var t = vf(e) ? Pf : Cf;
  return t.test(_f(e));
}
function If(e, t) {
  return e?.[t];
}
function Ua(e, t) {
  var n = If(e, t);
  return Ef(n) ? n : void 0;
}
function Af(e, t) {
  return e === t || e !== e && t !== t;
}
var Of = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, zf = /^\w*$/;
function Df(e, t) {
  if (ms(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || gs(e) ? !0 : zf.test(e) || !Of.test(e) || t != null && e in Object(t);
}
var Pn = Ua(Object, "create");
function Nf() {
  this.__data__ = Pn ? Pn(null) : {}, this.size = 0;
}
function Wf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $f = "__lodash_hash_undefined__", Ff = Object.prototype, Bf = Ff.hasOwnProperty;
function Hf(e) {
  var t = this.__data__;
  if (Pn) {
    var n = t[e];
    return n === $f ? void 0 : n;
  }
  return Bf.call(t, e) ? t[e] : void 0;
}
var jf = Object.prototype, Uf = jf.hasOwnProperty;
function Vf(e) {
  var t = this.__data__;
  return Pn ? t[e] !== void 0 : Uf.call(t, e);
}
var Yf = "__lodash_hash_undefined__";
function Gf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Pn && t === void 0 ? Yf : t, this;
}
function He(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
He.prototype.clear = Nf;
He.prototype.delete = Wf;
He.prototype.get = Hf;
He.prototype.has = Vf;
He.prototype.set = Gf;
function Xf() {
  this.__data__ = [], this.size = 0;
}
function hi(e, t) {
  for (var n = e.length; n--; )
    if (Af(e[n][0], t))
      return n;
  return -1;
}
var Kf = Array.prototype, Zf = Kf.splice;
function qf(e) {
  var t = this.__data__, n = hi(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : Zf.call(t, n, 1), --this.size, !0;
}
function Jf(e) {
  var t = this.__data__, n = hi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Qf(e) {
  return hi(this.__data__, e) > -1;
}
function tg(e, t) {
  var n = this.__data__, i = hi(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
cn.prototype.clear = Xf;
cn.prototype.delete = qf;
cn.prototype.get = Jf;
cn.prototype.has = Qf;
cn.prototype.set = tg;
var eg = Ua(fs, "Map");
function ng() {
  this.size = 0, this.__data__ = {
    hash: new He(),
    map: new (eg || cn)(),
    string: new He()
  };
}
function ig(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function di(e, t) {
  var n = e.__data__;
  return ig(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function sg(e) {
  var t = di(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function og(e) {
  return di(this, e).get(e);
}
function ag(e) {
  return di(this, e).has(e);
}
function rg(e, t) {
  var n = di(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ye.prototype.clear = ng;
Ye.prototype.delete = sg;
Ye.prototype.get = og;
Ye.prototype.has = ag;
Ye.prototype.set = rg;
var lg = "Expected a function";
function ps(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(lg);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, i);
    return n.cache = o.set(s, a) || o, a;
  };
  return n.cache = new (ps.Cache || Ye)(), n;
}
ps.Cache = Ye;
var cg = 500;
function ug(e) {
  var t = ps(e, function(i) {
    return n.size === cg && n.clear(), i;
  }), n = t.cache;
  return t;
}
var hg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dg = /\\(\\)?/g, fg = ug(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(hg, function(n, i, s, o) {
    t.push(s ? o.replace(dg, "$1") : i || n);
  }), t;
});
function gg(e) {
  return e == null ? "" : Ha(e);
}
function mg(e, t) {
  return ms(e) ? e : Df(e, t) ? [e] : fg(gg(e));
}
function pg(e) {
  if (typeof e == "string" || gs(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function yg(e, t) {
  t = mg(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[pg(t[n++])];
  return n && n == i ? e : void 0;
}
function wg(e, t, n) {
  var i = e == null ? void 0 : yg(e, t);
  return i === void 0 ? n : i;
}
function vg(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var s = e[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Va = (e) => e === void 0, Oo = (e) => typeof e == "boolean", je = (e) => typeof e == "number", Gi = (e) => typeof Element > "u" ? !1 : e instanceof Element, xg = (e) => Be(e) ? !Number.isNaN(Number(e)) : !1;
var zo;
const Ge = typeof window < "u", bg = (e) => typeof e == "string", kg = () => {
};
Ge && ((zo = window?.navigator) != null && zo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ys(e) {
  return typeof e == "function" ? e() : D(e);
}
function _g(e) {
  return e;
}
function ws(e) {
  return qr() ? (Jr(e), !0) : !1;
}
function Sg(e, t = !0) {
  en() ? ln(e) : t ? e() : kn(e);
}
function Ya(e, t, n = {}) {
  const {
    immediate: i = !0
  } = n, s = q(!1);
  let o = null;
  function a() {
    o && (clearTimeout(o), o = null);
  }
  function r() {
    s.value = !1, a();
  }
  function l(...c) {
    a(), s.value = !0, o = setTimeout(() => {
      s.value = !1, o = null, e(...c);
    }, ys(t));
  }
  return i && (s.value = !0, Ge && l()), ws(r), {
    isPending: Zr(s),
    start: l,
    stop: r
  };
}
function Ga(e) {
  var t;
  const n = ys(e);
  return (t = n?.$el) != null ? t : n;
}
const Xa = Ge ? window : void 0;
function Ka(...e) {
  let t, n, i, s;
  if (bg(e[0]) || Array.isArray(e[0]) ? ([n, i, s] = e, t = Xa) : [t, n, i, s] = e, !t)
    return kg;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((d) => d()), o.length = 0;
  }, r = (d, g, y, w) => (d.addEventListener(g, y, w), () => d.removeEventListener(g, y, w)), l = Ie(() => [Ga(t), ys(s)], ([d, g]) => {
    a(), d && o.push(...n.flatMap((y) => i.map((w) => r(d, y, w, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return ws(c), c;
}
function Cg(e, t = !1) {
  const n = q(), i = () => n.value = !!e();
  return i(), Sg(i, t), n;
}
const Do = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, No = "__vueuse_ssr_handlers__";
Do[No] = Do[No] || {};
var Wo = Object.getOwnPropertySymbols, Tg = Object.prototype.hasOwnProperty, Mg = Object.prototype.propertyIsEnumerable, Lg = (e, t) => {
  var n = {};
  for (var i in e)
    Tg.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Wo)
    for (var i of Wo(e))
      t.indexOf(i) < 0 && Mg.call(e, i) && (n[i] = e[i]);
  return n;
};
function Rg(e, t, n = {}) {
  const i = n, { window: s = Xa } = i, o = Lg(i, ["window"]);
  let a;
  const r = Cg(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Ie(() => Ga(e), (g) => {
    l(), r.value && s && g && (a = new ResizeObserver(t), a.observe(g, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), c();
  };
  return ws(d), {
    isSupported: r,
    stop: d
  };
}
var $o;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})($o || ($o = {}));
var Pg = Object.defineProperty, Fo = Object.getOwnPropertySymbols, Eg = Object.prototype.hasOwnProperty, Ig = Object.prototype.propertyIsEnumerable, Bo = (e, t, n) => t in e ? Pg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ag = (e, t) => {
  for (var n in t || (t = {}))
    Eg.call(t, n) && Bo(e, n, t[n]);
  if (Fo)
    for (var n of Fo(t))
      Ig.call(t, n) && Bo(e, n, t[n]);
  return e;
};
const Og = {
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
Ag({
  linear: _g
}, Og);
const Ho = {
  current: 0
}, jo = q(0), Za = 2e3, Uo = Symbol("elZIndexContextKey"), qa = Symbol("zIndexContextKey"), zg = (e) => {
  const t = en() ? Pe(Uo, Ho) : Ho, n = e || (en() ? Pe(qa, void 0) : void 0), i = G(() => {
    const a = D(n);
    return je(a) ? a : Za;
  }), s = G(() => i.value + jo.value), o = () => (t.current++, jo.value = t.current, s.value);
  return !Ge && Pe(Uo), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Dg = {
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
const Ng = (e) => (t, n) => Wg(t, n, D(e)), Wg = (e, t, n) => wg(n, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), $g = (e) => {
  const t = G(() => D(e).name), n = Qr(e) ? e : q(e);
  return {
    lang: t,
    locale: n,
    t: Ng(e)
  };
}, Ja = Symbol("localeContextKey"), Fg = (e) => {
  const t = e || Pe(Ja, q());
  return $g(G(() => t.value || Dg));
}, Qa = "__epPropKey", oe = (e) => e, Bg = (e) => $a(e) && !!e[Qa], tr = (e, t) => {
  if (!$a(e) || Bg(e))
    return e;
  const { values: n, required: i, default: s, type: o, validator: a } = e, l = {
    type: o,
    required: !!i,
    validator: n || a ? (c) => {
      let d = !1, g = [];
      if (n && (g = Array.from(n), Ro(e, "default") && g.push(s), d || (d = g.includes(c))), a && (d || (d = a(c))), !d && g.length > 0) {
        const y = [...new Set(g)].map((w) => JSON.stringify(w)).join(", ");
        tl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Qa]: !0
  };
  return Ro(e, "default") && (l.default = s), l;
}, un = (e) => vg(Object.entries(e).map(([t, n]) => [
  t,
  tr(n, t)
])), Hg = ["", "default", "small", "large"], jg = tr({
  type: String,
  values: Hg,
  required: !1
}), Ug = Symbol("size"), Vg = Symbol("emptyValuesContextKey"), Yg = un({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Rn(e) ? !e() : !e
  }
}), Vo = (e) => Object.keys(e), ei = q();
function er(e, t = void 0) {
  return en() ? Pe(Na, ei) : ei;
}
function nr(e, t) {
  const n = er(), i = ds(e, G(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || Xn;
  })), s = Fg(G(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), o = zg(G(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || Za;
  })), a = G(() => {
    var r;
    return D(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return ir(G(() => D(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const ir = (e, t, n = !1) => {
  var i;
  const s = !!en(), o = s ? er() : void 0, a = (i = void 0) != null ? i : s ? el : void 0;
  if (!a)
    return;
  const r = G(() => {
    const l = D(e);
    return o?.value ? Gg(o.value, l) : l;
  });
  return a(Na, r), a(Ja, G(() => r.value.locale)), a(Wa, G(() => r.value.namespace)), a(qa, G(() => r.value.zIndex)), a(Ug, {
    size: G(() => r.value.size || "")
  }), a(Vg, G(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !ei.value) && (ei.value = r.value), r;
}, Gg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Vo(e), ...Vo(t)])], i = {};
  for (const s of n)
    i[s] = t[s] !== void 0 ? t[s] : e[s];
  return i;
};
var fi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
function Xi(e, t = "px") {
  if (!e)
    return "";
  if (je(e) || xg(e))
    return `${e}${t}`;
  if (Be(e))
    return e;
}
const sr = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), or = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Xg = un({
  size: {
    type: oe([Number, String])
  },
  color: {
    type: String
  }
}), Kg = $t({
  name: "ElIcon",
  inheritAttrs: !1
}), Zg = /* @__PURE__ */ $t({
  ...Kg,
  props: Xg,
  setup(e) {
    const t = e, n = ds("icon"), i = G(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Va(s) ? void 0 : Xi(s),
        "--color": o
      };
    });
    return (s, o) => (B(), X("i", nl({
      class: D(n).b(),
      style: D(i)
    }, s.$attrs), [
      Fe(s.$slots, "default")
    ], 16));
  }
});
var qg = /* @__PURE__ */ fi(Zg, [["__file", "icon.vue"]]);
const ni = sr(qg);
/*! Element Plus Icons Vue v2.3.1 */
var Jg = /* @__PURE__ */ $t({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Qg = Jg, tm = /* @__PURE__ */ $t({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ar = tm, em = /* @__PURE__ */ $t({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), nm = em, im = /* @__PURE__ */ $t({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), sm = im, om = /* @__PURE__ */ $t({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), am = om;
const rr = oe([
  String,
  Object,
  Function
]), rm = {
  Close: ar
}, lm = {
  Close: ar
}, ii = {
  success: sm,
  warning: am,
  error: Qg,
  info: nm
}, cm = (e) => e, Kn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, um = un({
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
    type: oe([String, Object, Array])
  },
  offset: {
    type: oe(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), hm = $t({
  name: "ElBadge"
}), dm = /* @__PURE__ */ $t({
  ...hm,
  props: um,
  setup(e, { expose: t }) {
    const n = e, i = ds("badge"), s = G(() => n.isDot ? "" : je(n.value) && je(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = G(() => {
      var a, r, l, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Xi(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Xi((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (B(), X("div", {
      class: Ct(D(i).b())
    }, [
      Fe(a.$slots, "default"),
      S(qi, {
        name: `${D(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: qt(() => [
          _n(A("sup", {
            class: Ct([
              D(i).e("content"),
              D(i).em("content", a.type),
              D(i).is("fixed", !!a.$slots.default),
              D(i).is("dot", a.isDot),
              D(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Ot(D(o))
          }, [
            Fe(a.$slots, "content", { value: D(s) }, () => [
              il(rt(D(s)), 1)
            ])
          ], 6), [
            [Zn, !a.hidden && (D(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var fm = /* @__PURE__ */ fi(dm, [["__file", "badge.vue"]]);
const gm = sr(fm), mm = un({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: oe(Object)
  },
  size: jg,
  button: {
    type: oe(Object)
  },
  experimentalFeatures: {
    type: oe(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: oe(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Yg
}), he = {};
$t({
  name: "ElConfigProvider",
  props: mm,
  setup(e, { slots: t }) {
    Ie(() => e.message, (i) => {
      Object.assign(he, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ir(e);
    return () => Fe(t, "default", { config: n?.value });
  }
});
const lr = ["success", "info", "warning", "error"], Kt = cm({
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
  appendTo: Ge ? document.body : void 0
}), pm = un({
  customClass: {
    type: String,
    default: Kt.customClass
  },
  center: {
    type: Boolean,
    default: Kt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Kt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Kt.duration
  },
  icon: {
    type: rr,
    default: Kt.icon
  },
  id: {
    type: String,
    default: Kt.id
  },
  message: {
    type: oe([
      String,
      Object,
      Function
    ]),
    default: Kt.message
  },
  onClose: {
    type: oe(Function),
    default: Kt.onClose
  },
  showClose: {
    type: Boolean,
    default: Kt.showClose
  },
  type: {
    type: String,
    values: lr,
    default: Kt.type
  },
  plain: {
    type: Boolean,
    default: Kt.plain
  },
  offset: {
    type: Number,
    default: Kt.offset
  },
  zIndex: {
    type: Number,
    default: Kt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Kt.grouping
  },
  repeatNum: {
    type: Number,
    default: Kt.repeatNum
  }
}), ym = {
  destroy: () => !0
}, ge = sl([]), wm = (e) => {
  const t = ge.findIndex((s) => s.id === e), n = ge[t];
  let i;
  return t > 0 && (i = ge[t - 1]), { current: n, prev: i };
}, vm = (e) => {
  const { prev: t } = wm(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, xm = (e, t) => ge.findIndex((i) => i.id === e) > 0 ? 16 : t, bm = $t({
  name: "ElMessage"
}), km = /* @__PURE__ */ $t({
  ...bm,
  props: pm,
  emits: ym,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = lm, { ns: s, zIndex: o } = nr("message"), { currentZIndex: a, nextZIndex: r } = o, l = q(), c = q(!1), d = q(0);
    let g;
    const y = G(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = G(() => {
      const R = n.type;
      return { [s.bm("icon", R)]: R && ii[R] };
    }), k = G(() => n.icon || ii[n.type] || ""), f = G(() => vm(n.id)), b = G(() => xm(n.id, n.offset) + f.value), p = G(() => d.value + b.value), M = G(() => ({
      top: `${b.value}px`,
      zIndex: a.value
    }));
    function v() {
      n.duration !== 0 && ({ stop: g } = Ya(() => {
        O();
      }, n.duration));
    }
    function T() {
      g?.();
    }
    function O() {
      c.value = !1;
    }
    function z({ code: R }) {
      R === Kn.esc && O();
    }
    return ln(() => {
      v(), r(), c.value = !0;
    }), Ie(() => n.repeatNum, () => {
      T(), v();
    }), Ka(document, "keydown", z), Rg(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: p,
      close: O
    }), (R, H) => (B(), jt(qi, {
      name: D(s).b("fade"),
      onBeforeLeave: R.onClose,
      onAfterLeave: (Z) => R.$emit("destroy"),
      persisted: ""
    }, {
      default: qt(() => [
        _n(A("div", {
          id: R.id,
          ref_key: "messageRef",
          ref: l,
          class: Ct([
            D(s).b(),
            { [D(s).m(R.type)]: R.type },
            D(s).is("center", R.center),
            D(s).is("closable", R.showClose),
            D(s).is("plain", R.plain),
            R.customClass
          ]),
          style: Ot(D(M)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: v
        }, [
          R.repeatNum > 1 ? (B(), jt(D(gm), {
            key: 0,
            value: R.repeatNum,
            type: D(y),
            class: Ct(D(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : et("v-if", !0),
          D(k) ? (B(), jt(D(ni), {
            key: 1,
            class: Ct([D(s).e("icon"), D(w)])
          }, {
            default: qt(() => [
              (B(), jt(Re(D(k))))
            ]),
            _: 1
          }, 8, ["class"])) : et("v-if", !0),
          Fe(R.$slots, "default", {}, () => [
            R.dangerouslyUseHTMLString ? (B(), X(Jt, { key: 1 }, [
              et(" Caution here, message could've been compromised, never use user's input as message "),
              A("p", {
                class: Ct(D(s).e("content")),
                innerHTML: R.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (B(), X("p", {
              key: 0,
              class: Ct(D(s).e("content"))
            }, rt(R.message), 3))
          ]),
          R.showClose ? (B(), jt(D(ni), {
            key: 2,
            class: Ct(D(s).e("closeBtn")),
            onClick: It(O, ["stop"])
          }, {
            default: qt(() => [
              S(D(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : et("v-if", !0)
        ], 46, ["id"]), [
          [Zn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var _m = /* @__PURE__ */ fi(km, [["__file", "message.vue"]]);
let Sm = 1;
const cr = (e) => {
  const t = !e || Be(e) || Sn(e) || Rn(e) ? { message: e } : e, n = {
    ...Kt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Be(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    Gi(i) || (i = document.body), n.appendTo = i;
  }
  return Oo(he.grouping) && !n.grouping && (n.grouping = he.grouping), je(he.duration) && n.duration === 3e3 && (n.duration = he.duration), je(he.offset) && n.offset === 16 && (n.offset = he.offset), Oo(he.showClose) && !n.showClose && (n.showClose = he.showClose), n;
}, Cm = (e) => {
  const t = ge.indexOf(e);
  if (t === -1)
    return;
  ge.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Tm = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Sm++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), Cm(d);
    },
    onDestroy: () => {
      qn(null, o);
    }
  }, r = S(_m, a, Rn(a.message) || Sn(a.message) ? {
    default: Rn(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || an._context, qn(r, o), e.appendChild(o.firstElementChild);
  const l = r.component, d = {
    id: i,
    vnode: r,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: r.component.props
  };
  return d;
}, an = (e = {}, t) => {
  if (!Ge)
    return { close: () => {
    } };
  const n = cr(e);
  if (n.grouping && ge.length) {
    const s = ge.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (je(he.max) && ge.length >= he.max)
    return { close: () => {
    } };
  const i = Tm(n, t);
  return ge.push(i), i.handler;
};
lr.forEach((e) => {
  an[e] = (t = {}, n) => {
    const i = cr(t);
    return an({ ...i, type: e }, n);
  };
});
function Mm(e) {
  for (const t of ge)
    (!e || e === t.props.type) && t.handler.close();
}
an.closeAll = Mm;
an._context = null;
const Lm = or(an, "$message"), ur = [
  "success",
  "info",
  "warning",
  "error"
], Rm = un({
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
    type: rr
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: oe([
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
    type: oe(Function),
    default: () => {
    }
  },
  onClose: {
    type: oe(Function),
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
    values: [...ur, ""],
    default: ""
  },
  zIndex: Number
}), Pm = {
  destroy: () => !0
}, Em = $t({
  name: "ElNotification"
}), Im = /* @__PURE__ */ $t({
  ...Em,
  props: Rm,
  emits: Pm,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: s } = nr("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = rm, l = q(!1);
    let c;
    const d = G(() => {
      const v = n.type;
      return v && ii[n.type] ? i.m(v) : "";
    }), g = G(() => n.type && ii[n.type] || n.icon), y = G(() => n.position.endsWith("right") ? "right" : "left"), w = G(() => n.position.startsWith("top") ? "top" : "bottom"), k = G(() => {
      var v;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (v = n.zIndex) != null ? v : a.value
      };
    });
    function f() {
      n.duration > 0 && ({ stop: c } = Ya(() => {
        l.value && p();
      }, n.duration));
    }
    function b() {
      c?.();
    }
    function p() {
      l.value = !1;
    }
    function M({ code: v }) {
      v === Kn.delete || v === Kn.backspace ? b() : v === Kn.esc ? l.value && p() : f();
    }
    return ln(() => {
      f(), o(), l.value = !0;
    }), Ka(document, "keydown", M), t({
      visible: l,
      close: p
    }), (v, T) => (B(), jt(qi, {
      name: D(i).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (O) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: qt(() => [
        _n(A("div", {
          id: v.id,
          class: Ct([D(i).b(), v.customClass, D(y)]),
          style: Ot(D(k)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: f,
          onClick: v.onClick
        }, [
          D(g) ? (B(), jt(D(ni), {
            key: 0,
            class: Ct([D(i).e("icon"), D(d)])
          }, {
            default: qt(() => [
              (B(), jt(Re(D(g))))
            ]),
            _: 1
          }, 8, ["class"])) : et("v-if", !0),
          A("div", {
            class: Ct(D(i).e("group"))
          }, [
            A("h2", {
              class: Ct(D(i).e("title")),
              textContent: rt(v.title)
            }, null, 10, ["textContent"]),
            _n(A("div", {
              class: Ct(D(i).e("content")),
              style: Ot(v.title ? void 0 : { margin: 0 })
            }, [
              Fe(v.$slots, "default", {}, () => [
                v.dangerouslyUseHTMLString ? (B(), X(Jt, { key: 1 }, [
                  et(" Caution here, message could've been compromised, never use user's input as message "),
                  A("p", { innerHTML: v.message }, null, 8, ["innerHTML"])
                ], 2112)) : (B(), X("p", { key: 0 }, rt(v.message), 1))
              ])
            ], 6), [
              [Zn, v.message]
            ]),
            v.showClose ? (B(), jt(D(ni), {
              key: 0,
              class: Ct(D(i).e("closeBtn")),
              onClick: It(p, ["stop"])
            }, {
              default: qt(() => [
                S(D(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : et("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Zn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Am = /* @__PURE__ */ fi(Im, [["__file", "notification.vue"]]);
const si = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ki = 16;
let Om = 1;
const rn = function(e = {}, t) {
  if (!Ge)
    return { close: () => {
    } };
  (Be(e) || Sn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  si[n].forEach(({ vm: d }) => {
    var g;
    i += (((g = d.el) == null ? void 0 : g.offsetHeight) || 0) + Ki;
  }), i += Ki;
  const s = `notification_${Om++}`, o = e.onClose, a = {
    ...e,
    offset: i,
    id: s,
    onClose: () => {
      zm(s, n, o);
    }
  };
  let r = document.body;
  Gi(e.appendTo) ? r = e.appendTo : Be(e.appendTo) && (r = document.querySelector(e.appendTo)), Gi(r) || (r = document.body);
  const l = document.createElement("div"), c = S(Am, a, Rn(a.message) ? a.message : Sn(a.message) ? () => a.message : null);
  return c.appContext = Va(t) ? rn._context : t, c.props.onDestroy = () => {
    qn(null, l);
  }, qn(c, l), si[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
ur.forEach((e) => {
  rn[e] = (t = {}, n) => ((Be(t) || Sn(t)) && (t = {
    message: t
  }), rn({ ...t, type: e }, n));
});
function zm(e, t, n) {
  const i = si[t], s = i.findIndex(({ vm: c }) => {
    var d;
    return ((d = c.component) == null ? void 0 : d.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: o } = i[s];
  if (!o)
    return;
  n?.(o);
  const a = o.el.offsetHeight, r = t.split("-")[0];
  i.splice(s, 1);
  const l = i.length;
  if (!(l < 1))
    for (let c = s; c < l; c++) {
      const { el: d, component: g } = i[c].vm, y = Number.parseInt(d.style[r], 10) - a - Ki;
      g.props.offset = y;
    }
}
function Dm() {
  for (const e of Object.values(si))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
rn.closeAll = Dm;
rn._context = null;
const Nm = or(rn, "$notify"), ie = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", i) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: i
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
      position: i = "center",
      duration: s = 3e3,
      showClose: o = !1
    } = e;
    i === "center" ? Lm({
      message: t,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Nm({
      message: t,
      type: n,
      position: i,
      duration: s,
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
}, Wm = ["disabled"], $m = {
  key: 0,
  class: "custom-button__loading"
}, Fm = /* @__PURE__ */ $t({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "success", "danger", "warning", "text"].includes(e)
    },
    size: {
      type: String,
      default: "",
      validator: (e) => ["", "small", "large"].includes(e)
    },
    circle: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    plain: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e) {
    const t = e;
    return (n, i) => (B(), X("button", {
      class: Ct([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: i[0] || (i[0] = (s) => n.$emit("click", s))
    }, [
      e.loading ? (B(), X("div", $m, i[1] || (i[1] = [
        A(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            A("circle", {
              class: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              "stroke-width": "5"
            })
          ],
          -1
          /* HOISTED */
        )
      ]))) : et("v-if", !0),
      Fe(n.$slots, "default", {}, void 0, !0)
    ], 10, Wm));
  }
}), ke = /* @__PURE__ */ ui(Fm, [["__scopeId", "data-v-9497085f"]]);
function Bm(e) {
  return Um(e.anchor, e.focus) <= 0 ? { start: e.anchor, end: e.focus } : { start: e.focus, end: e.anchor };
}
function hr(e, t) {
  if (!t || e.length === 0)
    return [];
  const { start: n, end: i } = Bm(t);
  if (n.blockIndex < 0 || i.blockIndex >= e.length)
    return [];
  const s = [];
  for (let o = n.blockIndex; o <= i.blockIndex; o += 1) {
    const a = e[o].text.length, r = o === n.blockIndex ? Yo(n.offset, a) : 0, l = o === i.blockIndex ? Yo(i.offset, a) : a;
    l > r && s.push({ blockIndex: o, start: r, end: l });
  }
  return s;
}
function Hm(e, t) {
  const n = hr(e, t);
  return n.map((i, s) => {
    const o = e[i.blockIndex], a = o.text.slice(i.start, i.end), r = i.end === o.text.length, l = s < n.length - 1;
    return a + (r && l ? o.separator : "");
  }).join("");
}
function jm(e, t) {
  let n = 0, i = Number.POSITIVE_INFINITY;
  for (let s = 0; s < e.length; s += 1) {
    const o = Math.abs(e[s] - t);
    o < i && (n = s, i = o);
  }
  return n;
}
function Um(e, t) {
  return e.blockIndex - t.blockIndex || e.offset - t.offset;
}
function Yo(e, t) {
  return Number.isFinite(e) ? Math.max(0, Math.min(t, Math.round(e))) : 0;
}
const Vm = ["src"], Ym = { class: "ocr-header" }, Gm = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, Xm = { "data-tauri-drag-region": "" }, Km = { class: "ocr-window-controls" }, Zm = ["title"], qm = ["title"], Jm = ["title"], Qm = ["title"], tp = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, ep = ["src"], np = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, ip = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, sp = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, op = { "data-tauri-drag-region": "" }, ap = { "data-tauri-drag-region": "" }, rp = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, lp = ["title"], cp = {
  key: 0,
  class: "ocr-original-image"
}, up = ["src"], hp = {
  key: 0,
  class: "ocr-state"
}, dp = {
  key: 1,
  class: "ocr-state error"
}, fp = {
  key: 2,
  class: "ocr-state muted"
}, gp = { class: "ocr-preview-pane" }, mp = { class: "ocr-preview-stage" }, pp = ["src"], yp = {
  key: 0,
  class: "ocr-selection-highlight-layer",
  "aria-hidden": "true"
}, wp = ["data-selection-index", "textContent"], vp = { class: "ocr-record-main-row" }, xp = ["onClick"], bp = ["checked", "onChange"], kp = { class: "ocr-record-index" }, _p = ["textContent", "onBlur"], Sp = {
  key: 0,
  class: "ocr-record-score"
}, Cp = ["textContent", "onBlur"], Tp = { class: "ocr-action-bar" }, Mp = { class: "translate-btn-group relative" }, Lp = {
  key: 0,
  class: "translate-menu"
}, Rp = ["onClick"], Pp = { class: "engine-label" }, Ep = { class: "ocr-engine-btn-group relative" }, Ip = {
  key: 0,
  class: "ocr-engine-menu"
}, Ap = ["onClick"], Op = { class: "engine-label" }, zp = { class: "ocr-engine-btn-group relative" }, Dp = {
  key: 2,
  class: "zoom-info"
}, Pi = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', Np = /* @__PURE__ */ $t({
  __name: "index",
  setup(e) {
    const { t, locale: n } = In(), i = q(), s = q(), o = q(null), a = q(""), r = q(""), l = q("pin"), c = q(""), d = q([]), g = q(!1), y = q(""), w = q(""), k = q(0), f = q(0), b = q({ width: 0, height: 0 }), p = q({ width: 0, height: 0 }), M = q(!1), v = q(!1), T = q(null), O = q(!1);
    let z = null;
    const R = q(!1), H = q(!1), Z = q("bing"), Q = q(!1), ot = q("auto"), at = G(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: "离"
      }
    ]), ht = G(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), Pt = (u) => {
      const x = typeof u == "string" ? u.trim().toLowerCase() : "";
      return x === "auto" || x === "zh" || x === "zh-tw" || x === "en" || x === "ja" || x === "ko" ? x : "auto";
    }, mt = G(() => ht.value.find((u) => u.value === ot.value)?.label || t("pin.ocrLanguageAuto")), nt = G(
      () => St("pin.showRecords", "显示记录", "Show Records")
    ), lt = G(
      () => St("pin.hideRecords", "隐藏记录", "Hide Records")
    ), St = (u, x, _) => {
      const Y = t(u);
      return Y && Y !== u ? Y : String(n.value).toLowerCase().startsWith("zh") ? x : _;
    }, dt = G(() => ot.value === "auto" ? "zh" : ot.value), U = q(1), pt = q(!1), K = q(!1);
    let Mt = null, zt = null;
    const Vt = q(!1), Lt = q({ x: 0, y: 0 }), gt = q(!0), Yt = q({ width: 0, height: 0 });
    let ne = null, Gt = 0;
    const N = q(""), ct = G(() => ({
      width: "100%",
      height: l.value === "ocr" ? "auto" : "100%",
      flex: l.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: l.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), vt = G(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), Tt = G(() => k.value > 0 && f.value > 0 ? `${k.value} × ${f.value}` : t("pin.screenshotPreview")), Rt = G(() => g.value ? t("pin.recognizing") : y.value ? t("pin.recognizeFailed") : c.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Et = G(
      () => d.value.filter((u) => u.selected)
    ), P = G(
      () => d.value.flatMap(
        (u) => u.blocks.filter(W).map((x, _) => ({
          ...x,
          id: `${u.id}-block-${_}`,
          recordId: u.id,
          separator: ft(x, u.blocks[_ + 1])
        }))
      )
    ), h = G(
      () => hr(P.value, T.value)
    ), m = G(
      () => Hm(P.value, T.value)
    ), E = G(
      () => h.value.map((u) => {
        const x = P.value[u.blockIndex], _ = hn(x), Y = _.boundaries[u.start] || 0, it = _.boundaries[u.end] || _.renderedWidth, bt = Y / _.renderedWidth, Bt = it / _.renderedWidth;
        return {
          id: `${x.id}-${u.start}-${u.end}`,
          left: x.x + x.width * bt,
          top: x.y,
          width: x.width * Math.max(0, Bt - bt),
          height: x.height
        };
      })
    ), $ = G(() => Et.value.length), st = (u) => (u.translatedText || u.text).trim(), tt = (u) => u.map(st).filter(Boolean).join(`

`), C = () => {
      c.value = tt(d.value);
    }, W = (u) => k.value > 0 && f.value > 0 && u.width > 0 && u.height > 0, ft = (u, x) => {
      if (!x)
        return `

`;
      const _ = u.text.trim().slice(-1), Y = x.text.trim().slice(0, 1), it = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
      return it.test(_) || it.test(Y) ? "" : " ";
    }, ut = (u) => {
      if (!W(u))
        return {};
      const x = Me(u.x / k.value * 100), _ = Me(u.y / f.value * 100), Y = Me(u.width / k.value * 100, 1), it = Me(u.height / f.value * 100, 1), bt = hn(u);
      return {
        left: `${x}%`,
        top: `${_}%`,
        width: `${Y}%`,
        height: `${it}%`,
        fontSize: `${bt.fontSize}px`,
        lineHeight: `${bt.lineHeight}px`,
        letterSpacing: `${bt.letterSpacing}px`
      };
    }, ae = (u) => k.value <= 0 || f.value <= 0 ? {} : {
      left: `${Me(u.left / k.value * 100)}%`,
      top: `${Me(u.top / f.value * 100)}%`,
      width: `${Me(u.width / k.value * 100)}%`,
      height: `${Me(u.height / f.value * 100)}%`
    }, ce = /* @__PURE__ */ new Map();
    let xe = null;
    const hn = (u) => {
      const x = dr(), _ = u.text.trim(), Y = `${u.id}:${_}:${x.toFixed(4)}`, it = ce.get(Y);
      if (it)
        return it;
      const bt = Math.max(u.width * x, 1), Bt = Math.max(u.height * x, 1);
      let Dt = xs(
        Math.min((u.fontSize || u.height * 0.8) * x, Bt * 0.86),
        5,
        28
      );
      const Qt = vs();
      Qt.font = `${Dt}px ${Pi}`;
      let te = Math.max(Qt.measureText(_).width, 1);
      te > bt && (Dt = Math.max(5, Dt * (bt / te)), Qt.font = `${Dt}px ${Pi}`, te = Math.max(Qt.measureText(_).width, 1));
      const re = _.length > 0 ? Math.max(0, (bt - te) / _.length) : 0, Ns = Array.from({ length: _.length + 1 }, (Yp, bi) => bi === 0 ? 0 : (Qt.font = `${Dt}px ${Pi}`, Qt.measureText(_.slice(0, bi)).width + re * bi)), Ur = Math.max(Ns[_.length] || te, 1), Ws = {
        fontSize: Dt,
        lineHeight: Bt,
        letterSpacing: re,
        boundaries: Ns,
        renderedWidth: Ur
      };
      return ce.set(Y, Ws), Ws;
    }, vs = () => {
      xe || (xe = document.createElement("canvas"));
      const u = xe.getContext("2d");
      if (!u)
        throw new Error("无法创建 OCR 文字测量画布");
      return u;
    }, dr = () => k.value <= 0 || f.value <= 0 || b.value.width <= 0 || b.value.height <= 0 ? 1 : Math.min(
      b.value.width / k.value,
      b.value.height / f.value
    ), gi = () => {
      const u = s.value;
      if (ce.clear(), !u) {
        b.value = { width: 0, height: 0 };
        return;
      }
      b.value = {
        width: u.clientWidth,
        height: u.clientHeight
      };
    }, Me = (u, x = 0) => Number.isFinite(u) ? Math.min(100, Math.max(x, u)) : x, xs = (u, x, _) => Number.isFinite(u) ? Math.min(_, Math.max(x, u)) : x, fr = () => {
      const u = /* @__PURE__ */ new Date(), x = (_) => _.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${u.getFullYear()}-${x(u.getMonth() + 1)}-${x(u.getDate())} ${x(u.getHours())}.${x(u.getMinutes())}.${x(u.getSeconds())}.png`;
    }, gr = G(() => {
      const u = Math.min(
        Yt.value.width,
        Yt.value.height
      );
      let x = 1;
      return u < 300 && (x = Math.max(0.4, u / 300)), {
        left: `${Lt.value.x}px`,
        top: `${Lt.value.y}px`,
        transform: `scale(${x})`,
        transformOrigin: "top left"
      };
    }), mr = (u) => {
      a.value = u, k.value = 0, f.value = 0, b.value = { width: 0, height: 0 }, On(), ce.clear(), p.value = { width: 0, height: 0 }, l.value === "ocr" && (w.value = fr(), v.value = !1), r.value && (URL.revokeObjectURL(r.value), r.value = "");
      try {
        const x = u.split(",")[1] || u, _ = u.match(/data:([^;]+);/), Y = _ ? _[1] : "image/png", it = atob(x), bt = new Uint8Array(it.length);
        for (let Dt = 0; Dt < it.length; Dt++)
          bt[Dt] = it.charCodeAt(Dt);
        const Bt = new Blob([bt], { type: Y });
        r.value = URL.createObjectURL(Bt);
      } catch (x) {
        j.error("[PIN窗口] 转换 Blob URL 失败", x), r.value = u;
      }
    }, bs = async () => {
      await kn(), await new Promise((u) => requestAnimationFrame(() => u()));
      try {
        await o.value?.emit("pin-window-ready");
      } catch (u) {
        j.error("[PIN窗口] 发送 ready 事件失败", u);
      }
    }, ks = (u) => {
      if (!u?.imageData)
        return j.error("[PIN窗口] 收到的事件数据格式不正确", u), !1;
      const x = u.mode === "ocr" ? "ocr" : "pin", _ = `${x}:${u.imageData.length}`;
      return _ === N.value ? !1 : (N.value = _, l.value = x, mr(u.imageData), ue(), l.value === "ocr" ? (pi(u.text || ""), y.value = "", u.text || mi()) : (Gt++, g.value = !1, y.value = "", c.value = "", d.value = []), !0);
    }, mi = async () => {
      if (!a.value) return;
      const u = ++Gt;
      On(), ce.clear(), g.value = !0, y.value = "";
      const x = Date.now();
      Ht.log("[Pin OCR] recognize start", {
        requestId: u,
        imageDataLength: a.value.length,
        imageWidth: k.value,
        imageHeight: f.value,
        language: ot.value,
        backendLanguage: dt.value
      });
      try {
        Ht.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: u,
          language: ot.value,
          backendLanguage: dt.value
        });
        const _ = await I("recognize_text_from_image", {
          imageData: a.value,
          engine: "rapidocr",
          language: dt.value
        }), Y = yr(_), it = Y.length > 0 ? tt(Y) : br(_);
        if (Ht.log("[Pin OCR] backend OCR success", {
          requestId: u,
          resultEngine: _?.engine,
          resultLanguage: _?.language,
          confidence: _?.confidence,
          blocks: Array.isArray(_?.blocks) ? _.blocks.length : 0,
          textLength: it.trim().length
        }), u !== Gt) return;
        Y.length > 0 ? (d.value = Y, C()) : pi(it.trim()), ce.clear(), Ht.log("[Pin OCR] recognize success", {
          requestId: u,
          durationMs: Date.now() - x,
          textLength: c.value.length,
          textPreview: c.value.slice(0, 300)
        });
      } catch (_) {
        if (u !== Gt) return;
        j.error("[PIN窗口] OCR 识别失败", _), Ht.log("[Pin OCR] recognize failed", {
          requestId: u,
          durationMs: Date.now() - x,
          error: kr(_)
        }), y.value = t("pin.recognizeFailed"), c.value = "", d.value = [], ie.error(t("pin.recognizeFailed"));
      } finally {
        u === Gt && (g.value = !1);
      }
    }, pi = (u) => {
      const x = u.trim();
      c.value = x, d.value = x ? x.split(/\n{2,}|\n/).map((_, Y) => pr(_, Y)).filter((_) => _.text.trim()) : [];
    }, pr = (u, x) => ({
      id: `plain-${Date.now()}-${x}`,
      text: u.trim(),
      sourceText: u.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), yr = (u) => {
      const x = vr(u?.blocks);
      return x.length === 0 ? [] : sa(x).map((Y, it) => wr(Y, it)).filter((Y) => Y.text.trim());
    }, wr = (u, x) => {
      const _ = u.text.trim(), Y = u.blocks;
      return {
        id: `ocr-${Date.now()}-${x}`,
        text: _,
        sourceText: _,
        translatedText: u.translatedText?.trim() || "",
        bbox: { ...u.bbox },
        blocks: Y,
        confidence: xr(Y),
        selected: !1
      };
    }, vr = (u) => Array.isArray(u) ? u.map((x) => {
      if (!x || typeof x != "object")
        return null;
      const _ = x, Y = typeof _.text == "string" ? _.text.trim() : "";
      if (!Y)
        return null;
      const it = {
        text: Y,
        x: Number(_.x || 0),
        y: Number(_.y || 0),
        width: Number(_.width || 0),
        height: Number(_.height || 0),
        fontSize: Number(_.fontSize || 0),
        lineHeight: Number(_.lineHeight || 0),
        angle: Number(_.angle || 0),
        isCodeBlock: !!_.isCodeBlock,
        confidence: Number(_.confidence || 0)
      };
      return typeof _.translatedText == "string" && (it.translatedText = _.translatedText), it;
    }).filter((x) => x !== null) : [], xr = (u) => {
      const x = u.map((_) => Number(_.confidence || 0)).filter((_) => Number.isFinite(_) && _ > 0);
      return x.length === 0 ? 0 : x.reduce((_, Y) => _ + Y, 0) / x.length;
    }, br = (u) => typeof u == "string" ? u : u?.text ? u.text : u?.full_text ? u.full_text : Array.isArray(u?.blocks) ? u.blocks.map((x) => x?.text).filter(Boolean).join(`
`) : "", kr = (u) => u instanceof Error ? `${u.name}: ${u.message}
${u.stack || ""}`.trim() : typeof u == "string" ? u : JSON.stringify(u) || String(u), yi = async () => {
      const u = Sr();
      if (u)
        try {
          await navigator.clipboard.writeText(u), ie.success(t("pin.copySuccess"));
        } catch (x) {
          j.error("[PIN窗口] 复制识别文本失败", x), ie.error(t("pin.copyFailed"));
        } finally {
          ue();
        }
    }, _r = async () => {
      C();
      const u = c.value.trim();
      if (u)
        try {
          await I("save_text_to_file", { text: u }), ie.success(t("pin.saveSuccess"));
        } catch (x) {
          x !== "SAVE_CANCELLED" && (j.error("[PIN窗口] 保存文本失败", x), ie.error(t("pin.saveFailed")));
        }
    }, Sr = () => {
      const u = Cr();
      if (u)
        return u;
      if (m.value)
        return m.value;
      const x = tt(Et.value);
      return x || (C(), c.value.trim());
    }, Cr = () => {
      const u = window.getSelection(), x = i.value?.querySelector(".ocr-reading-surface");
      if (!u || u.rangeCount === 0 || !x)
        return "";
      for (let _ = 0; _ < u.rangeCount; _ += 1) {
        const it = u.getRangeAt(_).commonAncestorContainer;
        if (x.contains(it))
          return u.toString().trim();
      }
      return "";
    }, _s = (u) => {
      const x = d.value.find((_) => _.id === u);
      x && (x.selected = !x.selected);
    }, Ss = (u, x, _) => {
      const Y = d.value.find((bt) => bt.id === u), it = _.target;
      !Y || !it || (Y[x] = it.innerText.trim(), x === "text" && !Y.sourceText.trim() && (Y.sourceText = Y.text), C());
    }, Tr = () => {
      H.value = !H.value, Q.value = !1;
    }, Mr = (u) => {
      Z.value = u, H.value = !1, I("set_translation_engine", { engine: u }).catch((x) => {
        j.error("[PIN窗口] 保存翻译引擎设置失败", x);
      });
    }, Cs = () => {
      Q.value = !Q.value, H.value = !1;
    }, Lr = (u) => {
      ot.value = u, Q.value = !1, I("set_ocr_language", { language: u }).catch((x) => {
        j.error("[PIN窗口] 保存 OCR 语言设置失败", x);
      }), a.value && mi();
    }, Rr = async () => {
      if (ue(), H.value = !1, Q.value = !1, !c.value.trim() || R.value) return;
      const u = Et.value.length > 0 ? Et.value : d.value, x = u.length > 0 ? u.map((Y) => Y.text).join(`

`) : c.value, _ = De(x);
      if (!Qe(_)) {
        ie.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      R.value = !0;
      try {
        if (await Pr(), u.length > 0) {
          for (const Y of u) {
            const it = await Ts(Y.text, _);
            it && (Y.translatedText = it.trim());
          }
          C(), ie.success(t("pin.translateSuccess"));
        } else {
          const Y = await Ts(c.value, _);
          Y && pi(Y), ie.success(t("pin.translateSuccess"));
        }
      } catch (Y) {
        j.error("[PIN窗口] 翻译失败", Y);
        const it = Y instanceof Error ? Y.message : String(Y);
        it !== "翻译已取消" && ie.error(it || t("pin.translateFailed"));
      } finally {
        R.value = !1;
      }
    }, Pr = async () => {
      if (Z.value !== "offline")
        return;
      if ((await es()).isCached)
        await na();
      else
        throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
      if (!await I("get_offline_model_activated"))
        throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
    }, Ts = async (u, x) => {
      const _ = u.trim();
      return _ ? Z.value === "offline" ? ea(_) : await I("translate_text", {
        text: _,
        from: "auto",
        to: x === "zh" ? "en" : "zh",
        engine: Z.value
      }) : "";
    }, Er = () => {
      M.value = !M.value;
    }, Ir = () => {
      v.value = !v.value;
    }, Ar = (u) => {
      An(u);
    }, Or = async () => {
      if (!o.value) return;
      const u = o.value;
      typeof u.minimize == "function" && await u.minimize();
    }, zr = async () => {
      if (!o.value) return;
      const u = o.value;
      (typeof u.isMaximized == "function" ? await u.isMaximized() : !1) && typeof u.unmaximize == "function" ? await u.unmaximize() : typeof u.maximize == "function" && await u.maximize();
    }, Ms = async (u) => {
      const x = u.target;
      if (k.value = x.naturalWidth, f.value = x.naturalHeight, o.value && p.value.width === 0)
        try {
          const _ = await o.value.innerSize(), Y = await o.value.scaleFactor(), it = _.toLogical(Y);
          p.value = {
            width: it.width,
            height: it.height
          };
        } catch (_) {
          j.error("[PIN窗口] 获取窗口初始尺寸失败", _);
        }
    }, Ls = async (u) => {
      if (u.ctrlKey && (u.preventDefault(), u.stopPropagation(), !K.value && o.value)) {
        K.value = !0;
        try {
          const _ = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), Y = u.deltaY > 0 ? 0.95 : 1.05, it = _.width, bt = _.height, Bt = Math.round(it * Y), Dt = Math.round(bt * Y), Qt = 50, te = 3e3;
          if (Bt >= Qt && Bt <= te && Dt >= Qt && Dt <= te) {
            if (await o.value.setSize(new wn(Bt, Dt)), k.value > 0) {
              const re = Math.round(
                Bt / k.value * 100
              );
              U.value = re / 100;
            }
            pt.value = !0, wi();
          }
        } catch (x) {
          j.error("[PIN窗口] 窗口缩放失败", x);
        } finally {
          setTimeout(() => {
            K.value = !1;
          }, 100);
        }
      }
    }, Dr = (u) => {
      l.value === "ocr" && u.ctrlKey && Ls(u);
    }, wi = () => {
      pt.value = !0, Mt && clearTimeout(Mt), Mt = setTimeout(() => {
        pt.value = !1;
      }, 1e3);
    }, An = (u) => {
      u.preventDefault(), u.stopPropagation(), Vt.value = !1, setTimeout(() => {
        const x = window.innerWidth, _ = window.innerHeight;
        Yt.value = { width: x, height: _ };
        const Y = Math.min(x, _);
        let it = 1;
        Y < 300 && (it = Math.max(0.4, Y / 300));
        const bt = l.value === "ocr" ? 176 : 150, Bt = l.value === "ocr" && c.value.trim() ? 222 : 180, Dt = bt * it, Qt = Bt * it;
        let te = u.clientX, re = u.clientY;
        te + Dt > x && (te = x - Dt - 5), re + Qt > _ && (re = _ - Qt - 5), te = Math.max(5, te), re = Math.max(5, re), Lt.value = { x: te, y: re }, Vt.value = !0;
      }, 10);
    }, ue = () => {
      Vt.value = !1, H.value = !1, Q.value = !1;
    }, Rs = async () => {
      o.value && (gt.value = !gt.value, await o.value.setAlwaysOnTop(gt.value), ue());
    }, Ps = async (u) => {
      if (o.value && !K.value) {
        K.value = !0;
        try {
          const _ = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), Y = Math.round(_.width * u), it = Math.round(_.height * u), bt = 50, Bt = 3e3;
          Y >= bt && Y <= Bt && it >= bt && it <= Bt && (await o.value.setSize(new wn(Y, it)), k.value > 0 && (U.value = Y / k.value), wi());
        } catch (x) {
          j.error("[PIN窗口] 键盘缩放失败", x);
        } finally {
          setTimeout(() => {
            K.value = !1;
          }, 100);
        }
      }
    }, Es = async () => {
      if (o.value && p.value.width > 0 && p.value.height > 0)
        try {
          await o.value.setSize(
            new wn(
              p.value.width,
              p.value.height
            )
          ), U.value = 1, wi();
        } catch (u) {
          j.error("[PIN窗口] 重置缩放失败", u);
        }
      ue();
    }, Nr = async () => {
      try {
        const u = a.value;
        ue(), o.value && await o.value.hide(), await I("copy_image_to_clipboard", { imageData: u }), ie.success(t("pin.copySuccess")), o.value && await o.value.close();
      } catch (u) {
        j.error("[PIN窗口] 复制图片失败", u), ie.error(t("pin.copyFailed")), o.value && await o.value.close();
      }
    }, Wr = async () => {
      const u = a.value;
      ue(), o.value && await o.value.hide();
      try {
        await I("save_pin_image", { imageData: u }), ie.success(t("pin.saveSuccess")), o.value && await o.value.close();
      } catch (x) {
        x === "SAVE_CANCELLED" ? (j.info("[PIN窗口] 用户取消保存，恢复窗口显示"), o.value && await o.value.show()) : (j.error("[PIN窗口] 保存图片失败", x), ie.error(t("pin.saveFailed")), o.value && await o.value.close());
      }
    }, vi = async () => {
      o.value && await o.value.close();
    }, Is = (u) => {
      u.preventDefault();
    }, xi = async (u) => {
      if (u.button === 0 && o.value) {
        const x = u.target;
        if (x.hasAttribute("data-tauri-drag-region") || x.closest("[data-tauri-drag-region]")) {
          if (x.closest("button") || x.closest(".ocr-view-original"))
            return;
          try {
            await o.value.startDragging();
          } catch (_) {
            j.error("[PIN窗口] 拖拽窗口失败", _);
          }
        }
      }
    }, As = (u) => {
      const x = u.target;
      !x.closest(".context-menu") && !x.closest(".ocr-engine-btn-group") && ue();
    }, $r = (u) => {
      if (u.button !== 0)
        return;
      const x = u.currentTarget, _ = zs(x, u.clientX, u.clientY);
      if (window.getSelection()?.removeAllRanges(), !_) {
        On();
        return;
      }
      u.preventDefault(), x.setPointerCapture(u.pointerId), z = u.pointerId, O.value = !0, T.value = {
        anchor: _,
        focus: _
      };
    }, Os = (u) => {
      if (!O.value || u.pointerId !== z)
        return;
      const x = u.currentTarget, _ = zs(x, u.clientX, u.clientY);
      !_ || !T.value || (u.preventDefault(), T.value = {
        anchor: T.value.anchor,
        focus: _
      });
    }, Fr = (u) => {
      if (u.pointerId !== z)
        return;
      Os(u);
      const x = u.currentTarget;
      x.hasPointerCapture(u.pointerId) && x.releasePointerCapture(u.pointerId), O.value = !1, z = null;
    }, Br = (u) => {
      u.pointerId === z && (O.value = !1, z = null);
    }, On = () => {
      T.value = null, O.value = !1, z = null;
    }, Hr = () => {
      const u = P.value.length - 1;
      u < 0 || (window.getSelection()?.removeAllRanges(), T.value = {
        anchor: { blockIndex: 0, offset: 0 },
        focus: {
          blockIndex: u,
          offset: P.value[u].text.length
        }
      });
    }, zs = (u, x, _) => {
      const Y = u.querySelectorAll(
        ".ocr-overlay-block[data-selection-index]"
      );
      for (const it of Y) {
        const bt = it.getBoundingClientRect();
        if (x < bt.left || x > bt.right || _ < bt.top || _ > bt.bottom)
          continue;
        const Bt = Number(it.dataset.selectionIndex), Dt = P.value[Bt];
        if (!Dt)
          return null;
        const Qt = hn(Dt), re = xs((x - bt.left) / Math.max(bt.width, 1), 0, 1) * Qt.renderedWidth;
        return {
          blockIndex: Bt,
          offset: jm(Qt.boundaries, re)
        };
      }
      return null;
    }, Ds = (u) => {
      if (u.altKey && u.code === "Space") {
        u.preventDefault(), u.stopPropagation();
        return;
      }
      if (u.key === "Escape")
        Vt.value ? ue() : vi();
      else if (u.ctrlKey || u.metaKey) {
        const _ = !!u.target?.closest('input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]');
        u.key.toLowerCase() === "c" && l.value === "ocr" && m.value && !_ ? (u.preventDefault(), yi()) : u.key.toLowerCase() === "a" && l.value === "ocr" && P.value.length > 0 && !_ ? (u.preventDefault(), Hr()) : u.key === "0" ? (u.preventDefault(), Es()) : u.key === "=" || u.key === "+" ? (u.preventDefault(), Ps(1.05)) : u.key === "-" && (u.preventDefault(), Ps(0.95));
      }
    }, jr = async () => {
      if (o.value)
        try {
          const u = await I(
            "get_pin_window_data",
            { label: o.value.label }
          );
          u && ks(u) && await bs();
        } catch (u) {
          j.error("[PIN窗口] 主动获取窗口数据失败", u);
        }
    };
    return Ie(
      s,
      (u) => {
        if (zt?.disconnect(), zt = null, !u) {
          b.value = { width: 0, height: 0 };
          return;
        }
        gi(), zt = new ResizeObserver(gi), zt.observe(u);
      },
      { flush: "post" }
    ), ln(async () => {
      if (i.value) {
        try {
          const [u, x] = await Promise.all([
            I("get_translation_engine"),
            I("get_ocr_language")
          ]);
          (u === "google" || u === "bing" || u === "offline") && (Z.value = u), ot.value = Pt(x);
        } catch (u) {
          j.error("[PIN窗口] 读取默认 OCR/翻译设置失败", u);
        }
        try {
          o.value = En.getCurrent();
          try {
            ne = await o.value.listen(
              "pin-window-data",
              (u) => {
                ks(u.payload) && bs();
              }
            ), await jr();
          } catch (u) {
            j.error("[PIN窗口] 设置事件监听失败", u);
          }
        } catch (u) {
          if (j.error("[PIN窗口] 初始化错误", u), o.value)
            try {
              await o.value.show();
            } catch (x) {
              j.error("[PIN窗口] 显示窗口失败", x);
            }
        }
        document.addEventListener("click", As), document.addEventListener("keydown", Ds, !0), document.addEventListener("contextmenu", Is, !0), window.addEventListener("blur", ue), document.body && (document.body.oncontextmenu = (u) => (u.preventDefault(), !1));
      }
    }), Zi(() => {
      r.value && URL.revokeObjectURL(r.value), ne && ne(), document.removeEventListener("click", As), document.removeEventListener("keydown", Ds, !0), document.removeEventListener("contextmenu", Is, !0), window.removeEventListener("blur", ue), zt?.disconnect(), zt = null, document.body && (document.body.oncontextmenu = null), Mt && clearTimeout(Mt);
    }), (u, x) => (B(), X(
      "div",
      {
        class: Ct(["pin-container", { "ocr-mode": l.value === "ocr" }]),
        ref_key: "containerRef",
        ref: i,
        onContextmenu: It(An, ["prevent"]),
        onWheelCapture: Dr
      },
      [
        et(" 图片容器 "),
        r.value && l.value === "pin" ? (B(), X(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: Ot(ct.value),
            onWheelCapture: Ls,
            onContextmenu: It(An, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: xi
          },
          [
            A("img", {
              src: r.value,
              alt: "贴图",
              style: Ot(vt.value),
              onLoad: Ms,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Vm)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : et("v-if", !0),
        l.value === "ocr" ? (B(), X(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: It(An, ["prevent"])
          },
          [
            A("header", Ym, [
              A(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: xi
                },
                [
                  A("div", Gm, [
                    S(D(yn), {
                      theme: "outline",
                      size: "18"
                    }),
                    A(
                      "span",
                      Xm,
                      rt(u.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  A("div", Km, [
                    A("button", {
                      class: "ocr-window-btn",
                      title: gt.value ? u.$t("pin.togglePin") : u.$t("pin.pinWindow"),
                      onClick: It(Rs, ["stop"])
                    }, [
                      (B(), jt(Re(gt.value ? D(Ni) : D(Qs)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, Zm),
                    x[2] || (x[2] = A(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    A("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.minimize"),
                      onClick: It(Or, ["stop"])
                    }, [
                      S(D(ha), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, qm),
                    A("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.maximize"),
                      onClick: It(zr, ["stop"])
                    }, [
                      S(D(hu), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, Jm),
                    A("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.close"),
                      onClick: It(vi, ["stop"])
                    }, [
                      S(D(Di), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, Qm)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              A(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: xi
                },
                [
                  A("div", tp, [
                    r.value ? (B(), X("img", {
                      key: 0,
                      src: r.value,
                      alt: "OCR preview",
                      onLoad: Ms,
                      draggable: "false"
                    }, null, 40, ep)) : et("v-if", !0)
                  ]),
                  A("div", np, [
                    A(
                      "div",
                      ip,
                      rt(w.value),
                      1
                      /* TEXT */
                    ),
                    A("div", sp, [
                      A(
                        "span",
                        op,
                        rt(Tt.value),
                        1
                        /* TEXT */
                      ),
                      x[3] || (x[3] = A(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      A(
                        "span",
                        ap,
                        rt(Rt.value),
                        1
                        /* TEXT */
                      ),
                      !g.value && !y.value && c.value.trim() ? (B(), X("span", rp, " ✓ ")) : et("v-if", !0)
                    ])
                  ]),
                  A("button", {
                    class: "ocr-view-original",
                    title: M.value ? u.$t("pin.viewResult") : u.$t("pin.viewOriginal"),
                    onClick: It(Er, ["stop"])
                  }, [
                    (B(), jt(Re(M.value ? D(yn) : D(ou)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    A(
                      "span",
                      null,
                      rt(M.value ? u.$t("pin.viewResult") : u.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, lp)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            A(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: x[1] || (x[1] = It(() => {
                }, ["stop"]))
              },
              [
                M.value ? (B(), X("div", cp, [
                  A("img", {
                    src: r.value || a.value,
                    alt: "original"
                  }, null, 8, up)
                ])) : (B(), X(
                  Jt,
                  { key: 1 },
                  [
                    g.value ? (B(), X("div", hp, [
                      S(D(Js), {
                        class: "ocr-loading-icon",
                        size: "20",
                        theme: "outline",
                        strokeWidth: 3
                      }),
                      A(
                        "span",
                        null,
                        rt(u.$t("pin.recognizing")),
                        1
                        /* TEXT */
                      )
                    ])) : y.value ? (B(), X(
                      "div",
                      dp,
                      rt(y.value),
                      1
                      /* TEXT */
                    )) : c.value.trim() ? (B(), X(
                      "div",
                      {
                        key: 3,
                        class: Ct(["ocr-result-layout", { "records-open": v.value }])
                      },
                      [
                        A("section", gp, [
                          A("div", mp, [
                            A("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: s,
                              src: r.value || a.value,
                              alt: "OCR source",
                              onLoad: gi
                            }, null, 40, pp),
                            E.value.length > 0 ? (B(), X("div", yp, [
                              (B(!0), X(
                                Jt,
                                null,
                                de(E.value, (_) => (B(), X(
                                  "span",
                                  {
                                    key: _.id,
                                    class: "ocr-selection-highlight",
                                    style: Ot(ae(_))
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : et("v-if", !0),
                            P.value.length > 0 ? (B(), X(
                              "div",
                              {
                                key: 1,
                                class: "ocr-text-overlay",
                                onPointerdown: $r,
                                onPointermove: Os,
                                onPointerup: Fr,
                                onPointercancel: Br
                              },
                              [
                                (B(!0), X(
                                  Jt,
                                  null,
                                  de(P.value, (_, Y) => (B(), X("span", {
                                    key: _.id,
                                    class: "ocr-overlay-block",
                                    "data-selection-index": Y,
                                    style: Ot(ut(_)),
                                    textContent: rt(_.text.trim())
                                  }, null, 12, wp))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              32
                              /* NEED_HYDRATION */
                            )) : et("v-if", !0)
                          ])
                        ]),
                        v.value ? (B(), X(
                          "section",
                          {
                            key: 0,
                            class: "ocr-record-pane",
                            onPointerdown: On
                          },
                          [
                            (B(!0), X(
                              Jt,
                              null,
                              de(d.value, (_, Y) => (B(), X(
                                "article",
                                {
                                  key: _.id,
                                  class: Ct(["ocr-record-item", { selected: _.selected }])
                                },
                                [
                                  A("div", vp, [
                                    A("header", {
                                      class: "ocr-record-header",
                                      onClick: It((it) => _s(_.id), ["stop"])
                                    }, [
                                      A("input", {
                                        class: "ocr-record-checkbox",
                                        type: "checkbox",
                                        checked: _.selected,
                                        onChange: It((it) => _s(_.id), ["stop"]),
                                        onClick: x[0] || (x[0] = It(() => {
                                        }, ["stop"]))
                                      }, null, 40, bp),
                                      A(
                                        "span",
                                        kp,
                                        "#" + rt(Y + 1),
                                        1
                                        /* TEXT */
                                      )
                                    ], 8, xp),
                                    A("div", {
                                      class: "ocr-record-editor",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: rt(_.text),
                                      onBlur: (it) => Ss(_.id, "text", it)
                                    }, null, 40, _p),
                                    _.confidence > 0 ? (B(), X(
                                      "span",
                                      Sp,
                                      rt(Math.round(_.confidence)) + "% ",
                                      1
                                      /* TEXT */
                                    )) : et("v-if", !0)
                                  ]),
                                  _.translatedText ? (B(), X("div", {
                                    key: 0,
                                    class: "ocr-record-editor translated",
                                    contenteditable: "plaintext-only",
                                    spellcheck: "false",
                                    textContent: rt(_.translatedText),
                                    onBlur: (it) => Ss(_.id, "translatedText", it)
                                  }, null, 40, Cp)) : et("v-if", !0)
                                ],
                                2
                                /* CLASS */
                              ))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ],
                          32
                          /* NEED_HYDRATION */
                        )) : et("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )) : (B(), X(
                      "div",
                      fp,
                      rt(u.$t("pin.noTextRecognized")),
                      1
                      /* TEXT */
                    ))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ],
              32
              /* NEED_HYDRATION */
            ),
            A("footer", Tp, [
              S(ke, {
                class: "ocr-action-btn",
                type: "text",
                title: u.$t("pin.copyText"),
                disabled: !c.value.trim(),
                onClick: It(yi, ["stop"])
              }, {
                default: qt(() => [
                  S(D(Ci), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    rt($.value > 0 ? `${u.$t("pin.copyText")} (${$.value})` : u.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              S(ke, {
                class: "ocr-action-btn",
                type: "text",
                title: v.value ? lt.value : nt.value,
                disabled: d.value.length === 0,
                onClick: It(Ir, ["stop"])
              }, {
                default: qt(() => [
                  S(D(yn), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    rt(v.value ? lt.value : nt.value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              A("div", Mp, [
                S(ke, {
                  class: "ocr-action-btn translate-main",
                  type: "text",
                  title: u.$t("pin.translate"),
                  disabled: !c.value.trim() || R.value,
                  onClick: It(Rr, ["stop"])
                }, {
                  default: qt(() => [
                    R.value ? (B(), jt(D(Js), {
                      key: 1,
                      class: "ocr-loading-icon",
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })) : (B(), jt(D(da), {
                      key: 0,
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })),
                    A(
                      "span",
                      null,
                      rt(u.$t("pin.translate")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                S(ke, {
                  class: "ocr-action-btn translate-arrow",
                  type: "text",
                  disabled: !c.value.trim() || R.value,
                  onClick: It(Tr, ["stop"])
                }, {
                  default: qt(() => [
                    S(D(qs), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.8
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                et(" 翻译引擎菜单 "),
                H.value ? (B(), X("div", Lp, [
                  (B(!0), X(
                    Jt,
                    null,
                    de(at.value, (_) => (B(), X("div", {
                      key: _.value,
                      class: Ct(["menu-item", { active: Z.value === _.value }]),
                      onClick: (Y) => Mr(_.value)
                    }, [
                      A(
                        "span",
                        Pp,
                        rt(_.label),
                        1
                        /* TEXT */
                      ),
                      Z.value === _.value ? (B(), jt(Re(D(zi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : et("v-if", !0)
                    ], 10, Rp))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : et("v-if", !0)
              ]),
              A("div", Ep, [
                S(ke, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: u.$t("pin.ocrLanguage"),
                  disabled: g.value,
                  onClick: It(Cs, ["stop"])
                }, {
                  default: qt(() => [
                    S(D(yn), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    A(
                      "span",
                      null,
                      rt(mt.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                S(ke, {
                  class: "ocr-action-btn ocr-engine-arrow",
                  type: "text",
                  disabled: g.value,
                  onClick: It(Cs, ["stop"])
                }, {
                  default: qt(() => [
                    S(D(qs), {
                      size: "14",
                      theme: "outline",
                      strokeWidth: 3
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                Q.value ? (B(), X("div", Ip, [
                  (B(!0), X(
                    Jt,
                    null,
                    de(ht.value, (_) => (B(), X("div", {
                      key: _.value,
                      class: Ct(["menu-item", { active: ot.value === _.value }]),
                      onClick: (Y) => Lr(_.value)
                    }, [
                      A(
                        "span",
                        Op,
                        rt(_.label),
                        1
                        /* TEXT */
                      ),
                      ot.value === _.value ? (B(), jt(Re(D(zi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : et("v-if", !0)
                    ], 10, Ap))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : et("v-if", !0)
              ]),
              A("div", zp, [
                S(ke, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: u.$t("pin.recognizeAgain"),
                  disabled: g.value || !a.value,
                  onClick: It(mi, ["stop"])
                }, {
                  default: qt(() => [
                    S(D(lu), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    A(
                      "span",
                      null,
                      rt(u.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              S(ke, {
                class: "ocr-action-btn",
                type: "text",
                title: u.$t("pin.saveAsText"),
                disabled: !c.value.trim(),
                onClick: It(_r, ["stop"])
              }, {
                default: qt(() => [
                  S(D(eo), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    rt(u.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              x[4] || (x[4] = A(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              S(ke, {
                class: "ocr-action-btn more",
                type: "text",
                title: u.$t("pin.more"),
                onClick: It(Ar, ["stop"])
              }, {
                default: qt(() => [
                  S(D(nu), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.8
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : et("v-if", !0),
        pt.value ? (B(), X(
          "div",
          Dp,
          rt(Math.round(U.value * 100)) + "% ",
          1
          /* TEXT */
        )) : et("v-if", !0),
        et(" 右键菜单 "),
        Vt.value ? (B(), X(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: Ot(gr.value)
          },
          [
            A("div", {
              class: "menu-item",
              onClick: Rs
            }, [
              (B(), jt(Re(gt.value ? D(Qs) : D(Ni)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              A(
                "span",
                null,
                rt(gt.value ? u.$t("pin.togglePin") : u.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: Es
            }, [
              S(D(ru), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                rt(u.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: Nr
            }, [
              S(D(Ci), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                rt(u.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: Wr
            }, [
              S(D(eo), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                rt(u.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            l.value === "ocr" && c.value.trim() ? (B(), X("div", {
              key: 0,
              class: "menu-item",
              onClick: yi
            }, [
              S(D(Ci), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                rt(u.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            x[5] || (x[5] = A(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            A("div", {
              class: "menu-item danger",
              onClick: vi
            }, [
              S(D(Di), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                rt(u.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : et("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), Wp = /* @__PURE__ */ ui(Np, [["__scopeId", "data-v-81fc4be2"]]), $p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wp
}, Symbol.toStringTag, { value: "Module" }));
async function Fp(e) {
  return e.toDataURL("image/png");
}
function Bp(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object")
      return null;
    const n = t, i = typeof n.text == "string" ? n.text : "";
    return i.trim() ? {
      text: i,
      x: Number(n.x || 0),
      y: Number(n.y || 0),
      width: Number(n.width || 0),
      height: Number(n.height || 0),
      fontSize: Number(n.fontSize || 0),
      lineHeight: Number(n.lineHeight || 0),
      angle: Number(n.angle || 0),
      confidence: Number(n.confidence || 0)
    } : null;
  }).filter((t) => !!t) : [];
}
async function Hp(e) {
  const t = Date.now(), n = await Fp(e);
  Ht.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await I("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr",
      language: "zh"
    }), s = Bp(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || ia(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return Ht.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw j.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Ht.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function jp() {
  return Promise.resolve();
}
async function Up() {
  return Promise.resolve();
}
const Vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: Hp,
  terminateOcr: Up,
  warmupOcr: jp
}, Symbol.toStringTag, { value: "Module" }));
export {
  Kp as activate
};
