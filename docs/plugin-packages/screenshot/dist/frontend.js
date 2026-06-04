var er = Object.defineProperty;
var nr = (e, t, n) => t in e ? er(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var U = (e, t, n) => nr(e, typeof t != "symbol" ? t + "" : t, n);
import * as fi from "vue";
import { inject as Te, createVNode as k, ref as J, shallowRef as ir, computed as Y, watch as De, onMounted as an, onUnmounted as Fi, defineComponent as Dt, h as So, Text as sr, Fragment as Xt, nextTick as vn, createElementBlock as G, openBlock as B, createCommentVNode as nt, createElementVNode as A, renderList as ge, normalizeClass as _t, createBlock as Ft, resolveDynamicComponent as Ce, unref as z, toDisplayString as at, normalizeStyle as It, withDirectives as xn, withKeys as vs, vModelText as or, getCurrentInstance as Qe, readonly as ar, getCurrentScope as rr, onScopeDispose as lr, isRef as cr, warn as ur, provide as hr, mergeProps as dr, renderSlot as Ne, Transition as Bi, withCtx as Gt, createTextVNode as fr, vShow as Gn, shallowReactive as gr, withModifiers as Et, isVNode as bn, render as Xn } from "vue";
const qm = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => ed)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => Hm)
  });
};
function mr(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function pr(e, t, n, i, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Wn;
const ee = "__TAURI_TO_IPC_KEY__";
function yr(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function E(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function wr(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class vr {
  get rid() {
    return mr(this, Wn, "f");
  }
  constructor(t) {
    Wn.set(this, void 0), pr(this, Wn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return E("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Wn = /* @__PURE__ */ new WeakMap();
class mn {
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
    return new pn(this.width * t, this.height * t);
  }
  [ee]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ee]();
  }
}
class pn {
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
    return new mn(this.width / t, this.height / t);
  }
  [ee]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ee]();
  }
}
class Ye {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof mn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof pn ? this.size : this.size.toPhysical(t);
  }
  [ee]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ee]();
  }
}
class Co {
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
    return new Se(this.x * t, this.y * t);
  }
  [ee]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ee]();
  }
}
class Se {
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
    return new Co(this.x / t, this.y / t);
  }
  [ee]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ee]();
  }
}
class Pn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Co ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Se ? this.position : this.position.toPhysical(t);
  }
  [ee]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ee]();
  }
}
var Jt;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Jt || (Jt = {}));
async function To(e, t) {
  await E("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function yn(e, t, n) {
  var i;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return E("plugin:event|listen", {
    event: e,
    target: s,
    handler: yr(t)
  }).then((o) => async () => To(e, o));
}
async function xr(e, t, n) {
  return yn(e, (i) => {
    To(e, i.id), t(i);
  }, n);
}
async function br(e, t) {
  await E("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function kr(e, t, n) {
  await E("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let _r = class $n extends vr {
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
    return E("plugin:image|new", {
      rgba: Kn(t),
      width: n,
      height: i
    }).then((s) => new $n(s));
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
    return E("plugin:image|from_bytes", {
      bytes: Kn(t)
    }).then((n) => new $n(n));
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
    return E("plugin:image|from_path", { path: t }).then((n) => new $n(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return E("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return E("plugin:image|size", { rid: this.rid });
  }
};
function Kn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof _r ? e.rid : e;
}
var bi;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(bi || (bi = {}));
class Sr {
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
var xs;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(xs || (xs = {}));
function Cr() {
  return new Mn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function gi() {
  return E("plugin:window|get_all_windows").then((e) => e.map((t) => new Mn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const mi = ["tauri://created", "tauri://error"];
class Mn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || E("plugin:window|create", {
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
    return (n = (await gi()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Cr();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return gi();
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
    for (const t of await gi())
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
    } : yn(t, n, {
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
    } : xr(t, n, {
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
    if (mi.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return br(t, n);
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
    if (mi.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return kr(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return mi.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return E("plugin:window|scale_factor", {
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
    return E("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Se(t));
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
    return E("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Se(t));
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
    return E("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new pn(t));
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
    return E("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new pn(t));
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
    return E("plugin:window|is_fullscreen", {
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
    return E("plugin:window|is_minimized", {
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
    return E("plugin:window|is_maximized", {
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
    return E("plugin:window|is_focused", {
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
    return E("plugin:window|is_decorated", {
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
    return E("plugin:window|is_resizable", {
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
    return E("plugin:window|is_maximizable", {
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
    return E("plugin:window|is_minimizable", {
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
    return E("plugin:window|is_closable", {
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
    return E("plugin:window|is_visible", {
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
    return E("plugin:window|title", {
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
    return E("plugin:window|theme", {
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
    return E("plugin:window|is_always_on_top", {
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
    return E("plugin:window|center", {
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
    return t && (t === bi.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), E("plugin:window|request_user_attention", {
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
    return E("plugin:window|set_resizable", {
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
    return E("plugin:window|set_enabled", {
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
    return E("plugin:window|is_enabled", {
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
    return E("plugin:window|set_maximizable", {
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
    return E("plugin:window|set_minimizable", {
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
    return E("plugin:window|set_closable", {
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
    return E("plugin:window|set_title", {
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
    return E("plugin:window|maximize", {
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
    return E("plugin:window|unmaximize", {
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
    return E("plugin:window|toggle_maximize", {
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
    return E("plugin:window|minimize", {
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
    return E("plugin:window|unminimize", {
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
    return E("plugin:window|show", {
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
    return E("plugin:window|hide", {
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
    return E("plugin:window|close", {
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
    return E("plugin:window|destroy", {
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
    return E("plugin:window|set_decorations", {
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
    return E("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return E("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return E("plugin:window|set_effects", {
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
    return E("plugin:window|set_always_on_top", {
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
    return E("plugin:window|set_always_on_bottom", {
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
    return E("plugin:window|set_content_protected", {
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
    return E("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Ye ? t : new Ye(t)
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
    return E("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Ye ? t : t ? new Ye(t) : null
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
    return E("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Ye ? t : t ? new Ye(t) : null
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
    return E("plugin:window|set_size_constraints", {
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
    return E("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Pn ? t : new Pn(t)
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
    return E("plugin:window|set_fullscreen", {
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
    return E("plugin:window|set_focus", {
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
    return E("plugin:window|set_icon", {
      label: this.label,
      value: Kn(t)
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
    return E("plugin:window|set_skip_taskbar", {
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
    return E("plugin:window|set_cursor_grab", {
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
    return E("plugin:window|set_cursor_visible", {
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
    return E("plugin:window|set_cursor_icon", {
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
    return E("plugin:window|set_background_color", { color: t });
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
    return E("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Pn ? t : new Pn(t)
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
    return E("plugin:window|set_ignore_cursor_events", {
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
    return E("plugin:window|start_dragging", {
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
    return E("plugin:window|start_resize_dragging", {
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
    return E("plugin:window|set_badge_count", {
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
    return E("plugin:window|set_badge_label", {
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
    return E("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Kn(t) : void 0
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
    return E("plugin:window|set_progress_bar", {
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
    return E("plugin:window|set_visible_on_all_workspaces", {
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
    return E("plugin:window|set_title_bar_style", {
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
    return E("plugin:window|set_theme", {
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
    return this.listen(Jt.WINDOW_RESIZED, (n) => {
      n.payload = new pn(n.payload), t(n);
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
    return this.listen(Jt.WINDOW_MOVED, (n) => {
      n.payload = new Se(n.payload), t(n);
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
    return this.listen(Jt.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new Sr(n);
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
    const n = await this.listen(Jt.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Se(a.payload.position)
        }
      });
    }), i = await this.listen(Jt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Se(a.payload.position)
        }
      });
    }), s = await this.listen(Jt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Se(a.payload.position)
        }
      });
    }), o = await this.listen(Jt.DRAG_LEAVE, (a) => {
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
    const n = await this.listen(Jt.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(Jt.WINDOW_BLUR, (s) => {
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
    return this.listen(Jt.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Jt.WINDOW_THEME_CHANGED, t);
  }
}
var bs;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(bs || (bs = {}));
var ks;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ks || (ks = {}));
var _s;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(_s || (_s = {}));
function Nt(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Ss(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function Hi(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function Tr(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function de(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function Ge(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class Mr {
  constructor(t, n) {
    U(this, "canvas");
    U(this, "ctx");
    U(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = n;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t) {
    if (!Ge(t)) {
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
    const { x: n, y: i, width: s, height: o } = t, a = Hi(t);
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
      const c = Math.round(l.x) - l.width / 2, d = Math.round(l.y) - l.height / 2, m = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(c + 1, d + 1, l.width, l.height, m), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(c, d, l.width, l.height, m), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
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
    const { mousePosition: i, colorInfo: s, showFormat: o, previewImage: a, zoomFactor: r, isCopied: l } = t, c = 156, d = 188, m = 18;
    let y = i.x + m, w = i.y + m;
    y + c > n.x + n.width && (y = i.x - c - m), w + d > n.y + n.height && (w = i.y - d - m), y < n.x && (y = n.x + m), w < n.y && (w = n.y + m), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(y, w, c, d, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const C = 108, f = y + (c - C) / 2, x = w + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(f, x, C, C), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(f, x, C, C);
    const p = a ? a.width : r, _ = C / p;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      f,
      x,
      C,
      C
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let V = 1; V < p; V++) {
      const K = f + V * _;
      this.ctx.moveTo(K, x), this.ctx.lineTo(K, x + C);
      const tt = x + V * _;
      this.ctx.moveTo(f, tt), this.ctx.lineTo(f + C, tt);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let V = 1; V < p; V++) {
      const K = f + V * _ + 0.5;
      this.ctx.moveTo(K, x), this.ctx.lineTo(K, x + C);
      const tt = x + V * _ + 0.5;
      this.ctx.moveTo(f, tt), this.ctx.lineTo(f + C, tt);
    }
    this.ctx.stroke();
    const v = Math.floor(p / 2), b = f + v * _, O = x + v * _;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(b, O, _, _), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      b - 1,
      O - 1,
      _ + 2,
      _ + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      b,
      O,
      _,
      _
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let D = x + C + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(y + 16, D - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(y + 16, D - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const V = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(V, y + 44, D), D += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, y + 16, D), D += 17, this.ctx.font = "12px Arial";
    const M = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(M, y + 16, D), this.ctx.restore();
  }
}
class Lr {
  // 物理尺寸
  constructor(t) {
    U(this, "scale");
    U(this, "canvasRect");
    U(this, "canvasSize");
    // 逻辑尺寸
    U(this, "physicalSize");
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
    return de(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return de(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, n) {
    return !de(t) || !Ge(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !de(t) || !Ge(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + n.x,
      y: t.y + n.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Ge(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!de(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const n = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Tr(t, n);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Ge(t))
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
    return Nt(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!de(t) || !Ge(n))
      return !1;
    if (i === 0)
      return Ss(t, n);
    const s = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Ss(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, s = 8) {
    if (!de(t) || !de(n) || !de(i))
      return !1;
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, d = r * r + l * l;
    if (d === 0)
      return Nt(t, n) <= s;
    const m = c / d;
    let y;
    return m < 0 ? y = n : m > 1 ? y = i : y = {
      x: n.x + m * r,
      y: n.y + m * l
    }, Nt(t, y) <= s;
  }
}
var F = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(F || {}), T = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(T || {});
class Rr {
  constructor(t, n) {
    U(this, "coordinateSystem");
    U(this, "canvas");
    U(this, "isDrawing", !1);
    U(this, "currentOperation", F.None);
    U(this, "startPoint", { x: 0, y: 0 });
    U(this, "lastMousePos", { x: 0, y: 0 });
    U(this, "preventDefault", (t) => {
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
    if (n !== T.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(n) : F.None : F.Drawing;
    if (o) {
      if (o.getData().type === T.Mosaic)
        return F.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== F.None ? a : F.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : F.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [T.Rectangle]: F.DrawingRect,
      [T.Ellipse]: F.DrawingEllipse,
      [T.Line]: F.DrawingLine,
      [T.Arrow]: F.DrawingArrow,
      [T.Pen]: F.DrawingPen,
      [T.Text]: F.DrawingText,
      [T.Mosaic]: F.DrawingMosaic,
      [T.ColorPicker]: F.ColorPicking,
      [T.Ocr]: F.None,
      [T.Pin]: F.Pinning,
      [T.Translate]: F.None,
      [T.Select]: F.None
    }[t] || F.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, n, i) {
    const { x: s, y: o, width: a, height: r } = n, l = 12;
    if (i)
      return F.None;
    const c = Hi(n);
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
    if (!de(t))
      return F.None;
    const i = n.getData();
    if (i.type === T.Mosaic || i.type === T.Text)
      return F.None;
    if ([
      T.Rectangle,
      T.Ellipse,
      T.Line,
      T.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = Nt(t, s), c = Nt(t, o);
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
class Be {
  constructor(t) {
    U(this, "data");
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
class Pr extends Be {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: T.Rectangle,
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
      if (Nt(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Er extends Be {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: T.Ellipse,
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
class Ar extends Be {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: T.Line,
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
      return Nt(t, n) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - n.x) * o + (t.y - n.y) * a) / r)), c = {
      x: n.x + l * o,
      y: n.y + l * a
    };
    return Nt(t, c) <= s;
  }
}
class Ir extends Be {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: T.Arrow,
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
      return Nt(t, n) <= s;
    const m = c / d;
    let y;
    return m < 0 ? y = n : m > 1 ? y = i : y = {
      x: n.x + m * r,
      y: n.y + m * l
    }, Nt(t, y) <= s;
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
      if (Nt(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Or extends Be {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: T.Pen,
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
      const n = this.data.points[this.data.points.length - 1], i = Nt(t, n);
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
      return this.data.points.length === 1 ? Nt(t, this.data.points[0]) <= n : !1;
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
      return Nt(t, n) <= s;
    const m = c / d;
    let y;
    return m < 0 ? y = n : m > 1 ? y = i : y = {
      x: n.x + m * r,
      y: n.y + m * l
    }, Nt(t, y) <= s;
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
const Xe = "sans-serif", Ke = (e) => ({
  x: e.x + 4,
  y: e.y - 8
});
class zr extends Be {
  constructor(t, n, i, s = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: T.Text,
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
    t.save(), this.applyOpacity(t), t.font = `${o}px ${Xe}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Ke(a), l = r.x * n - i.x, c = r.y * n - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, n = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${Xe}`;
    const l = a.measureText(this.data.text).width, { x: c, y: d } = Ke(i);
    return t.x >= c - n && t.x <= c + l + n && t.y >= d - n && t.y <= d + s + n;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], n = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${n}px ${Xe}`;
    const a = s.measureText(this.data.text).width, { x: r, y: l } = Ke(t);
    return {
      x: r,
      y: l,
      width: a,
      height: n
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Ke(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Xe}`;
    const m = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(l, c, m, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Ke(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Xe}`;
    const m = n.measureText(this.data.text).width;
    n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(l, c, m, a), n.restore();
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
const fe = class fe extends Be {
  constructor(t, n, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: T.Mosaic,
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
      const n = this.data.points[this.data.points.length - 1], i = Nt(t, n);
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
    fe.helperCanvas || (fe.helperCanvas = document.createElement("canvas"), fe.helperCtx = fe.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const o = fe.helperCanvas, a = fe.helperCtx, r = n || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), d = Math.max(l * 3, 24), m = this.getBounds();
    if (!m) return;
    const y = d, w = Math.floor(m.x - y), C = Math.floor(m.y - y), f = Math.ceil(m.width + y * 2), x = Math.ceil(m.height + y * 2);
    if (f <= 0 || x <= 0) return;
    const p = Math.floor(w * r - i.x), _ = Math.floor(C * r - i.y), v = Math.ceil(f * r), b = Math.ceil(x * r), O = t.canvas.width, D = t.canvas.height, M = Math.max(0, p), V = Math.max(0, _), K = Math.min(v, O - M), tt = Math.min(b, D - V);
    if (K <= 0 || tt <= 0) return;
    let ot;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), ot = t.getImageData(M, V, K, tt), t.restore();
    } catch {
      return;
    }
    const st = ot.data, ht = M % c, St = V % c;
    for (let ut = -St; ut < tt; ut += c)
      for (let et = -ht; et < K; et += c) {
        const ct = Math.max(0, et), yt = Math.max(0, ut), gt = Math.min(K, et + c), j = Math.min(tt, ut + c);
        if (ct >= gt || yt >= j) continue;
        let xt = 0, X = 0, At = 0, Wt = 0;
        for (let Kt = yt; Kt < j; Kt++)
          for (let Lt = ct; Lt < gt; Lt++) {
            const Ct = (Kt * K + Lt) * 4;
            xt += st[Ct], X += st[Ct + 1], At += st[Ct + 2], Wt++;
          }
        if (Wt > 0) {
          xt = Math.round(xt / Wt / 8) * 8, X = Math.round(X / Wt / 8) * 8, At = Math.round(At / Wt / 8) * 8;
          for (let Lt = yt; Lt < j; Lt++)
            for (let Ct = ct; Ct < gt; Ct++) {
              const Ht = (Lt * K + Ct) * 4;
              st[Ht] = xt, st[Ht + 1] = X, st[Ht + 2] = At;
            }
        }
      }
    o.width = K, o.height = tt, a.putImageData(ot, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = d * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, M, V), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, M, V), t.restore();
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
        const m = this.data.points[d], y = this.data.points[d + 1], w = (a(m) + a(y)) / 2, C = (r(m) + r(y)) / 2;
        t.quadraticCurveTo(a(m), r(m), w, C);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Nt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + n;
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
    let m = -1;
    d !== 0 && (m = c / d);
    let y, w;
    m < 0 ? (y = n.x, w = n.y) : m > 1 ? (y = i.x, w = i.y) : (y = n.x + m * r, w = n.y + m * l);
    const C = t.x - y, f = t.y - w;
    return C * C + f * f <= s * s;
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
U(fe, "helperCanvas", null), U(fe, "helperCtx", null);
let ki = fe;
class En {
  static createAnnotation(t, n, i, s = {}) {
    switch (t) {
      case T.Rectangle:
        return new Pr(n, i);
      case T.Ellipse:
        return new Er(n, i);
      case T.Line:
        return new Ar(n, i);
      case T.Arrow:
        return new Ir(n, i);
      case T.Pen:
        return new Or(n, i);
      case T.Text:
        return new zr(
          n,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case T.Mosaic:
        return new ki(
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
      [T.Rectangle]: "drawing-rect",
      [T.Ellipse]: "drawing-ellipse",
      [T.Line]: "drawing-line",
      [T.Arrow]: "drawing-arrow",
      [T.Pen]: "drawing-pen",
      [T.Text]: "drawing-text",
      [T.Mosaic]: "drawing-mosaic",
      [T.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== T.Select && t !== T.ColorPicker && t !== T.Ocr && t !== T.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== T.Select && t !== T.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      T.Rectangle,
      T.Ellipse,
      T.Line,
      T.Arrow,
      T.Pen,
      T.Text
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      T.Rectangle,
      T.Ellipse,
      T.Line,
      T.Arrow,
      T.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === T.Text;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === T.Mosaic;
  }
}
const Ie = class Ie {
  constructor() {
    U(this, "pool", []);
    U(this, "maxPoolSize", 5);
    // 最大池大小
    U(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return Ie.instance || (Ie.instance = new Ie()), Ie.instance;
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
U(Ie, "instance");
let _i = Ie;
async function Dr(e, t) {
  return await E("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const Nr = "snippets-code:developer-mode", Mo = "snippets-code:frontend-diagnostics", Wr = 240, hn = "[REDACTED]", Fn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${hn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${hn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  hn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${hn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${hn}`
), ji = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Fn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Fn(
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
    return Fn(String(e));
  }
}, $r = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Fr = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Mo) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Ui = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Nr) === "true";
  } catch {
    return !1;
  }
}, Br = (e, t, n) => {
  if (!Ui() || typeof localStorage > "u") return;
  const i = Fr();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: $r(),
    message: Fn(t),
    data: ji(n)
  });
  try {
    localStorage.setItem(
      Mo,
      JSON.stringify(i.slice(-Wr))
    );
  } catch {
  }
}, Hr = () => Ui(), jr = (e) => e === "warn" || e === "error" || !1 || !1 || Ui(), An = (e, t, n) => {
  Br(e, t, n), jr(e) && E("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : ji(n)
  }).catch(() => {
  });
}, H = {
  info: (e, t, ...n) => {
    An("info", e, t);
  },
  error: (e, t) => {
    An("error", e, t);
  },
  warn: (e, t) => {
    An("warn", e, t);
  },
  debug: (e, t) => {
    Hr() && An("debug", e, t);
  }
}, $t = {
  log: (e, t) => {
    E("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : ji(t)
    }).catch(() => {
    });
  }
}, Ur = "resources/transformers/transformers.min.js", Vr = ["translation-offline-runtime", "translation"], Yr = "https://huggingface.co/", Gr = "{model}/resolve/{revision}/", Xr = "/__snippets_code_disabled_transformers_local_models__/", Kr = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let dn = null;
const Zr = (e) => {
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
}, Lo = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = Zr(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, Ro = (e) => {
  const t = Lo(e);
  return Object.fromEntries(
    Kr.map((n) => [n, `${t}${n}`])
  );
}, Po = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Yr, e.remotePathTemplate = Gr, e.allowLocalModels = !1, e.localModelPath = Xr, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = Ro(t), e.backends.onnx.wasm.numThreads = 1);
};
async function qr() {
  return dn || (dn = (async () => {
    for (const e of Vr) {
      const t = await Dr(e, Ur);
      if (!t) continue;
      const n = wr(t), i = await import(
        /* @vite-ignore */
        n
      );
      return Po(i.env, n), H.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw dn = null, e;
  }), dn);
}
let ye = null, wn = !1, Ze = null, Oe = null, Si = null;
const Jr = "Xenova/opus-mt-en-zh", Qr = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], tl = 3e5;
function el(e) {
  Si = e;
}
function nl() {
  return Qr;
}
function il(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function Eo() {
  return ye || Ze || (wn = !0, H.info("[离线翻译] 正在加载翻译模型..."), Ze = (async () => {
    try {
      const { pipeline: e, env: t } = await qr();
      Po(t);
      let n = "";
      const i = e("translation", Jr, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== n && (n = o.file, H.info(`[离线翻译] 已加载: ${o.file}`)), Si && Si({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return ye = await il(
        i,
        tl,
        "模型加载超时，请检查网络连接后重试"
      ), H.info("[离线翻译] 翻译模型加载完成"), wn = !1, ye;
    } catch (e) {
      throw wn = !1, Ze = null, H.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Ze);
}
async function Ao(e) {
  if (!e?.trim()) return e;
  Oe = new AbortController();
  const t = Oe.signal;
  try {
    const n = await Eo();
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
    throw n instanceof Error && n.message === "翻译已取消" ? (H.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (H.warn("[离线翻译] 运行时资源未安装"), n) : (H.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    Oe = null;
  }
}
function sl() {
  Oe && (Oe.abort(), Oe = null, H.info("[离线翻译] 已发送取消信号"));
}
function ol() {
  return Oe !== null;
}
async function Io() {
  await Eo();
}
function al() {
  return ye !== null;
}
function rl() {
  return wn;
}
async function Vi() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      H.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const s = await (await caches.open(n)).keys();
          if (H.info(`[离线翻译] Cache "${n}" 包含 ${s.length} 个文件`), s.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = s.some((r) => r.url.includes(".onnx"));
            if (H.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
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
    H.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return H.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return H.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return H.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function ll() {
  return (await Vi()).isCached;
}
function cl() {
  return ye !== null;
}
async function ul() {
  if (ye)
    try {
      await ye.dispose?.();
    } catch {
    }
  ye = null, Ze = null, wn = !1, H.info("[离线翻译] 翻译器已释放");
}
async function hl() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), H.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), H.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    H.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw H.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: cl,
  cancelOfflineTranslation: sl,
  clearModelCache: hl,
  disposeOfflineTranslator: ul,
  getModelCacheInfo: Vi,
  getModelFiles: nl,
  getRuntimeBaseUrl: Lo,
  getRuntimeWasmPaths: Ro,
  isModelCached: ll,
  isOfflineTranslatorInitializing: rl,
  isOfflineTranslatorReady: al,
  isTranslationInProgress: ol,
  setProgressCallback: el,
  translateOffline: Ao,
  warmupOfflineTranslator: Io
}, Symbol.toStringTag, { value: "Module" }));
class Ae {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => Xm).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const n = Promise.resolve(dl).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
U(Ae, "loadedModules", /* @__PURE__ */ new Map()), U(Ae, "loadingPromises", /* @__PURE__ */ new Map());
function Oo(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = e.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, d = n + s + a + l;
  return d === 0 ? "unknown" : s >= 3 && s > l && s / d >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / d >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function qe(e) {
  return e === "zh" || e === "en";
}
function Ee(e) {
  return Oo(e);
}
const fl = /[.!?。！？；;：:][)"'”’】）\]]*$/, Cs = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, In = /[A-Za-z0-9]/, gl = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/;
function zo(e, t = {}) {
  const n = Gl(e), i = Tl(e, n);
  return i.length === 0 ? [] : _l(i, n) ? kl(i, n) : (t.mode === "single_para" ? [Bn(i, n)] : pl(i, n)).flatMap((o) => ml(o, n));
}
function ml(e, t) {
  const n = No(e, t), i = [];
  for (const s of n) {
    const o = i[i.length - 1], a = o ? Al(o, s, t) : !1;
    if (!o || !a) {
      i.push(Il(s));
      continue;
    }
    o.text = zl(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = Bo(o.bbox, s.bbox), o.fontSize = Ms(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Ms(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return i;
}
function pl(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: Sl(l),
    block: l
  })).filter((l) => Cl(l.bbox)).sort(Do);
  if (n.length <= 1)
    return [Bn(e, t)];
  const { cuts: i, rows: s } = yl(n);
  if (i.length < 2 || s.length <= 1)
    return [Bn(e, t)];
  const o = xl(i, s), r = bl(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Bn(e, t)];
}
function yl(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < e.length; ) {
    const c = e[a].bbox.bottom, d = [];
    for (; a < e.length && e[a].bbox.top <= c; )
      d.push(e[a]), a += 1;
    d.sort((f, x) => f.bbox.left - x.bbox.left || f.bbox.right - x.bbox.right);
    const m = wl(d, t, n, i.length), { gaps: y, removedGaps: w } = vl(o, m), C = i.length - 1;
    for (const f of w)
      s.push({
        left: f.left,
        right: f.right,
        startRow: f.startRow,
        endRow: C
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
function wl(e, t, n, i) {
  const s = [];
  let o = t;
  for (const a of e)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: n, startRow: i }), s;
}
function vl(e, t) {
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
function xl(e, t) {
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
    const l = r.xRight - 2, c = s.filter((w) => l >= w.xLeft && l <= w.xRight + 1e-4 && w.rowBottom < r.rowTop), d = Math.max(...c.map((w) => w.rowBottom), i.rowBottom), m = c.filter((w) => w.rowBottom === d);
    (m.length > 0 ? m.reduce((w, C) => C.xRight > w.xRight ? C : w) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = n[r], c = [];
    for (const w of o) {
      let C = !1, f = !1, x = !1;
      for (const p of l)
        if (On(p.right, w.xLeft) && (C = !0), On(p.left, w.xRight) && (f = !0), w.xLeft < p.left && p.left < w.xRight || w.xLeft < p.right && p.right < w.xRight) {
          x = !0;
          break;
        }
      !C || !f || x ? a(w) : (w.rowBottom = r, c.push(w));
    }
    o = c;
    let d = 0, m = 0;
    const y = t[r];
    for (; d < y.length && l.length >= 2; ) {
      const w = y[d];
      m + 1 >= l.length && (m = Math.max(0, l.length - 2));
      const C = l[m].right, f = l[m + 1].left;
      if (w.bbox.left + 1e-4 > f && m < l.length - 2) {
        m += 1;
        continue;
      }
      let x = o.find((p) => On(p.xLeft, C) && On(p.xRight, f));
      x || (x = {
        xLeft: C,
        xRight: f,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(x)), x.units.push(w), d += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(Do);
  return i;
}
function bl(e) {
  const t = [e], n = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (n.push(i), t.push(...[...i.children].reverse()));
  }
  return n;
}
function Bn(e, t) {
  return [...e].sort((n, i) => {
    const s = n.y - i.y;
    return Math.abs(s) > t * 0.45 ? s : n.x - i.x;
  });
}
function kl(e, t) {
  const n = ze(re(e.map((a) => a.width)), t * 0.5), i = Math.max(n * 1.4, t * 0.28), s = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? re(l.map((d) => d.x + d.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((y, w) => y.y - w.y), l = r.reduce((y, w, C) => {
      const f = w.text.trim();
      return C === 0 ? f : Yi(y, f);
    }, ""), c = Fo(r), d = re(r.map((y) => ze(y.fontSize, t))), m = re(r.map((y) => Xi(y)));
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: d,
      lineHeight: m,
      angle: re(r.map((y) => y.angle || 0))
    };
  });
}
function _l(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function Sl(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Cl(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function Do(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function On(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function Tl(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || Ml(n, t) || Rl(i))
      return null;
    const s = Pl(Ll(i, n, t));
    return s === n.text ? n : { ...n, text: s };
  }).filter((n) => !!n);
}
function Ml(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function Ll(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function Rl(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function Pl(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function No(e, t) {
  const n = [...e].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of n) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !Hl(a.blocks, o, t) ? (a.blocks.push(o), a.y = re(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => El(o.blocks, t));
}
function El(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = Fo(n), s = n.reduce((r, l, c) => {
    const d = l.text.trim();
    return c === 0 ? d : Ol(r, d);
  }, ""), o = re(n.map((r) => ze(r.fontSize, t))), a = re(n.map((r) => Xi(r)));
  return {
    text: s,
    blocks: n,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: jl(n, t),
    isCodeLike: Bl(s)
  };
}
function Al(e, t, n) {
  const i = No(e.blocks, n), s = i[i.length - 1];
  if (!s || Gi(s.text) || Wo(t.text) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const o = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (o < -n * 0.25 || o >= n * 1.8 || Dl(i, o, n) || Nl(s, t, o, n) || Wl(s, t, o, n) || $l(s, t, o, n) || Fl(s, t, o, n))
    return !1;
  const a = Math.max(n * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= a;
}
function Il(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: re(e.blocks.map((t) => t.angle || 0))
  };
}
function Ol(e, t) {
  return Yi(e, t);
}
function zl(e, t) {
  return Yi(e, t);
}
function Yi(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const s = n.charAt(n.length - 1), o = i.charAt(0), a = n.charAt(n.length - 2);
  return s === "-" && In.test(a) && In.test(o) ? `${n.slice(0, -1)}${i}` : Xl(o) || Kl(s) ? `${n}${i}` : Cs.test(s) || Cs.test(o) || Ls(s) || Ls(o) ? `${n}${i}` : In.test(s) && In.test(o) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function Gi(e) {
  return fl.test(e.trim());
}
function Wo(e) {
  return gl.test(e);
}
function Dl(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? re(i) : 0, o = Math.max(s * 2.2, n * 1.15);
  return t > o;
}
function Nl(e, t, n, i) {
  const s = e.text.trim();
  if (!s || Gi(s) || Wo(s) || e.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function Wl(e, t, n, i) {
  if (n <= 0)
    return !1;
  const s = Math.max(e.fontSize, t.fontSize), o = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = s / o, r = n / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function $l(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const o = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Fl(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Ts(e.text) && Ts(t.text);
}
function Ts(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Gi(t);
}
function Bl(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Hl(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > n * 0.9 && Yl(s.text) && $o(t.text) ? !1 : o > n * 3.2;
}
function jl(e, t) {
  if (e.length < 2)
    return e.some((s) => Ul(s.text));
  const n = [...e].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < n.length; s++) {
    const o = n[s - 1], a = n[s], r = n[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && Vl(o.text) && $o(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Ul(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Vl(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function Yl(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function $o(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Fo(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => Bo(n, i), t[0]);
}
function Bo(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), s = Math.max(e.x + e.width, t.x + t.width), o = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: s - n,
    height: o - i
  };
}
function Gl(e) {
  return ze(re(e.map((t) => Xi(t))), 16);
}
function Xi(e) {
  return ze(e.lineHeight, ze(e.height, ze(e.fontSize, 16) * 1.2));
}
function Ms(e, t, n, i) {
  const s = t + i;
  return s <= 0 ? n : (e * t + n * i) / s;
}
function ze(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function re(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function Xl(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function Kl(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function Ls(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class Zl {
  constructor(t, n, i, s) {
    U(this, "canvas");
    U(this, "coordinateSystem");
    U(this, "drawingEngine");
    U(this, "eventHandler");
    // 状态管理
    U(this, "selectionRect", null);
    U(this, "annotations", []);
    U(this, "currentAnnotation", null);
    U(this, "selectedAnnotation", null);
    U(this, "hoveredAnnotation", null);
    // 拖拽状态
    U(this, "draggedAnnotation", null);
    U(this, "dragStartPoint", null);
    U(this, "resizingAnnotation", null);
    U(this, "resizeStartBounds", null);
    U(this, "resizeOperation", null);
    // 编辑状态
    U(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    U(this, "annotationUndoStack", []);
    U(this, "annotationRedoStack", []);
    U(this, "pendingDragSnapshot", null);
    U(this, "pendingResizeSnapshot", null);
    // 工具设置
    U(this, "currentTool", T.Select);
    U(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    U(this, "textSize", 16);
    U(this, "mosaicSize", 8);
    U(this, "showGuides", !0);
    // 取色器状态
    U(this, "colorPickerState", {
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
    U(this, "allWindows", []);
    U(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    U(this, "snappedWindow", null);
    U(this, "showSnapPreview", !1);
    // 点击拖拽区分
    U(this, "pendingSnapWindow", null);
    U(this, "dragStartPosition", null);
    U(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    U(this, "throttleTimer", null);
    U(this, "lastThrottledTimestamp", 0);
    U(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    U(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    U(this, "backgroundImage", null);
    // 是否正在加载完整背景图
    U(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    U(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    U(this, "offlineModelActivated", !1);
    // Canvas 池
    U(this, "canvasPool", _i.getInstance());
    // 回调函数
    U(this, "onStateChange");
    U(this, "onTextInputRequest");
    U(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    U(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    U(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    U(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    U(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    U(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    U(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    U(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Lr(t), this.drawingEngine = new Mr(t, this.coordinateSystem), this.eventHandler = new Rr(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), Ae.preloadModules();
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
    if (this.annotations = t.annotations.map((n) => En.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
        H.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
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
        const s = await E("get_screenshot_preview");
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
        const s = await E("get_screenshot_background");
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
      H.error("[截图] 创建后备背景失败", t);
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
            E("get_cached_monitor_info"),
            E("get_cached_window_list")
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
            await new Promise((m) => setTimeout(m, s));
            continue;
          }
          const d = await Promise.all([
            E("get_window_info"),
            E("get_all_windows")
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
      H.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
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
        const r = await E("get_cached_monitor_info");
        s = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        s = await E("get_window_info");
      }
      let o;
      try {
        const r = await E("get_mouse_position"), l = s?.scale || 1;
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
      H.error("[截图] 初始窗口吸附检测失败", t);
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
          !this.selectionRect && this.currentTool === T.Select && (this.dragStartPosition = { ...n }, this.snappedWindow ? this.pendingSnapWindow = this.snappedWindow : (this.selectionRect = {
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
          this.selectAnnotationAtPoint(n), this.selectedAnnotation && this.selectedAnnotation.getData().type === T.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
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
      this.eventHandler.updateMousePosition(n), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && Nt(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapWindow = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(n) : this.draggedAnnotation ? this.updateAnnotationDrag(n) : this.resizingAnnotation ? this.updateAnnotationResize(n) : this.selectionRect && this.currentTool === T.Select && this.updateSelectionRect(n, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === T.Select && !this.selectionRect) {
        const s = this.detectNearbyWindow(n);
        s !== this.snappedWindow && (this.snappedWindow = s, this.showSnapPreview = !!s, this.draw());
      }
      this.updateHoverState(n), this.currentTool === T.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(n, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = n, this.draw(), this.throttledUpdateColorPreview(n)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
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
    i?.getData().type === T.Text && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(n, i));
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
    n && n !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === T.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
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
    if (this.currentTool !== T.Select) {
      this.updateToolCursor();
      return;
    }
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = n && n.getData().type !== T.Mosaic ? n : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== T.Select) {
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
      case T.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case T.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case T.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case T.Rectangle:
      case T.Ellipse:
      case T.Line:
      case T.Arrow:
      case T.Text:
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
      const f = n + s / 2, x = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(n, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle", t.fillText("正在识别翻译...", f, x), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const f = n + s / 2, x = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(n, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, f, x), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: n, y: i, width: s, height: o }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let d, m;
    if (c) {
      const f = Math.max(0, Math.round(l.r * 0.1)), x = Math.max(0, Math.round(l.g * 0.1)), p = Math.max(0, Math.round(l.b * 0.1));
      d = `rgba(${f}, ${x}, ${p}, 0.95)`, m = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), x = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), p = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      d = `rgba(${f}, ${x}, ${p}, 0.95)`, m = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = d, t.fillRect(n, i, s, o), t.fillStyle = m, t.textAlign = "left", t.textBaseline = "top";
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
    })), w = y.filter((f) => f.isStructuredBlock), C = y.filter((f) => !f.isStructuredBlock);
    C.length > 0 && this.drawFlowedTranslationBlocks(t, C, n, i, a, s, o);
    for (const f of w)
      this.drawStructuredTranslationBlock(t, f, n, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, s, o, a, r) {
    const l = [...n].filter((v) => (v.translatedText || v.text).trim()).sort((v, b) => {
      const O = v.bbox.y - b.bbox.y;
      return Math.abs(O) > 4 ? O : v.bbox.x - b.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), d = o, m = (v, b, O) => l.map((D) => {
      const M = (D.translatedText || D.text).trim(), V = Math.max(12, Math.min(D.fontSize || 16, 48)), K = Math.max(8, Math.round(V * v)), tt = D.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', ot = Math.max(
        o,
        Math.min(D.bbox.x + o, a * 0.38)
      ), st = b ? o : ot, ht = Math.max(48, a - st - d), St = D.lineHeight || K * 1.35, ut = Math.max(
        K * (O ? 1.04 : 1.14),
        Math.min(St * v, K * (O ? 1.18 : 1.42))
      );
      return t.font = `${K}px ${tt}`, {
        text: M,
        fontSize: K,
        fontFamily: tt,
        lineHeight: ut,
        paragraphGap: O ? Math.max(1, ut * 0.16) : Math.max(3, ut * 0.35),
        x: i + st,
        lines: this.wrapTextToLines(t, M, ht)
      };
    }), y = (v) => v.reduce((b, O, D) => {
      const M = D === v.length - 1 ? 0 : O.paragraphGap;
      return b + O.lines.length * O.lineHeight + M;
    }, 0);
    let w = m(1, !1, !1), C = y(w);
    if (C > c) {
      const v = Math.max(0.56, c / C);
      w = m(v, !1, !1), C = y(w);
    }
    if (C > c && (w = m(1, !0, !1), C = y(w)), C > c) {
      const v = Math.max(0.38, c / C * 0.96);
      w = m(v, !0, !0), C = y(w);
    }
    if (C > c) {
      const v = Math.max(0.3, c / C * 0.94);
      w = m(v, !0, !0), C = y(w);
    }
    const f = Math.min(...l.map((v) => v.bbox.y)), x = s + Math.max(o, Math.min(f, r - o)), p = s + r - o;
    let _ = x + C > p ? s + o : x;
    for (const v of w) {
      t.font = `${v.fontSize}px ${v.fontFamily}`;
      for (const b of v.lines)
        t.fillText(b, v.x, _), _ += v.lineHeight;
      _ += v.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, s, o, a, r) {
    const l = [...n.blocks].sort((m, y) => m.x - y.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), d = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const m of l) {
      const y = m.translatedText || m.text;
      if (!y.trim()) continue;
      const w = i + m.x + Math.min(4, o), C = s + m.y, f = l.find((v) => v.x > m.x), x = f ? Math.max(m.width, f.x - m.x - 8) : Math.max(m.width, a - m.x - o), p = this.wrapTextToLines(t, y.trim(), x);
      let _ = C;
      for (const v of p) {
        if (_ + c > s + r) break;
        t.fillText(v, w, _), _ += d;
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
      for (const m of Array.from(c)) {
        const y = d + m;
        t.measureText(y).width > i && d !== "" ? (o.push(d), d = m) : d = y;
      }
      r = d;
    };
    for (const c of a) {
      const d = /^\s+$/.test(c), m = d ? " " : c, y = r + m;
      if (t.measureText(y).width <= i) {
        r = y;
        continue;
      }
      r.trim() && (o.push(r.trimEnd()), r = ""), !d && (t.measureText(m).width > i ? l(m) : r = m);
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
    const c = this.backgroundImage.width, d = this.backgroundImage.height, m = this.canvas.width / s, y = this.canvas.height / s, w = c / m, C = d / y, f = t.x * w, x = t.y * C, p = t.width * w, _ = t.height * C;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        x,
        p,
        _,
        0,
        0,
        o,
        a
      );
    } catch (et) {
      return H.error("[截图] 采样区域绘制失败", et), this.canvasPool.release(r), i;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (et) {
      return H.error("[截图] 获取像素数据失败", et), this.canvasPool.release(r), i;
    }
    const b = v.data, O = Math.ceil(Math.sqrt(n)), D = o / (O + 1), M = a / (O + 1);
    let V = 0, K = 0, tt = 0, ot = 0;
    for (let et = 1; et <= O; et++)
      for (let ct = 1; ct <= O && !(ot >= n); ct++) {
        const yt = Math.floor(ct * D), gt = Math.floor(et * M);
        if (yt >= 0 && yt < o && gt >= 0 && gt < a) {
          const j = (gt * o + yt) * 4;
          j >= 0 && j + 2 < b.length && (V += b[j], K += b[j + 1], tt += b[j + 2], ot++);
        }
      }
    if (this.canvasPool.release(r), ot === 0)
      return i;
    const st = Math.round(V / ot), ht = Math.round(K / ot), St = Math.round(tt / ot), ut = this.getBrightness(st, ht, St);
    return {
      r: st,
      g: ht,
      b: St,
      brightness: ut
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
      const c = Math.max(0, Math.round(t.r * 0.2)), d = Math.max(0, Math.round(t.g * 0.2)), m = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${c}, ${d}, ${m}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const c = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), d = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), m = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${c}, ${d}, ${m}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
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
    const c = this.backgroundImage.width, d = this.backgroundImage.height, m = this.canvas.width / s, y = this.canvas.height / s, w = c / m, C = d / y, f = t.x * w, x = t.y * C, p = t.width * w, _ = t.height * C;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        x,
        p,
        _,
        0,
        0,
        o,
        a
      );
    } catch (et) {
      return H.error("[截图] isUniformColor: 采样区域绘制失败", et), this.canvasPool.release(r), !1;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (et) {
      return H.error("[截图] isUniformColor: 获取像素数据失败", et), this.canvasPool.release(r), !1;
    }
    const b = v.data, O = Math.ceil(Math.sqrt(i)), D = o / (O + 1), M = a / (O + 1), V = [];
    for (let et = 1; et <= O; et++)
      for (let ct = 1; ct <= O && !(V.length >= i); ct++) {
        const yt = Math.floor(ct * D), gt = Math.floor(et * M);
        if (yt >= 0 && yt < o && gt >= 0 && gt < a) {
          const j = (gt * o + yt) * 4;
          j >= 0 && j + 2 < b.length && V.push({
            r: b[j],
            g: b[j + 1],
            b: b[j + 2]
          });
        }
      }
    if (this.canvasPool.release(r), V.length < 2)
      return !1;
    const K = V.reduce((et, ct) => et + ct.r, 0) / V.length, tt = V.reduce((et, ct) => et + ct.g, 0) / V.length, ot = V.reduce((et, ct) => et + ct.b, 0) / V.length, st = V.reduce((et, ct) => et + Math.pow(ct.r - K, 2), 0) / V.length, ht = V.reduce((et, ct) => et + Math.pow(ct.g - tt, 2), 0) / V.length, St = V.reduce((et, ct) => et + Math.pow(ct.b - ot, 2), 0) / V.length;
    return (st + ht + St) / 3 < n;
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
        const i = Hi(this.snappedWindow).x, s = this.snappedWindow.y - 5, o = t.measureText(this.snappedWindow.title), a = 4;
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
    this.currentTool = t, this.clearSelection(), this.showGuides = t === T.Select, this.colorPickerState.isActive = t === T.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== T.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== T.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.showSnapPreview = !1, this.pendingSnapWindow = null, this.dragStartPosition = null, t !== T.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === T.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (En.isDrawingTool(this.currentTool)) {
      if (this.currentTool === T.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = En.createAnnotation(
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
      case T.Rectangle:
      case T.Ellipse:
      case T.Line:
      case T.Arrow:
        t = this.getConstrainedShapeEndPoint(n.type, n.points[0], t), n.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case T.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case T.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  getConstrainedShapeEndPoint(t, n, i) {
    if (!this.isShiftPressed) return i;
    const s = i.x - n.x, o = i.y - n.y;
    if (t === T.Ellipse || t === T.Rectangle) {
      const a = Math.max(Math.abs(s), Math.abs(o));
      return {
        x: n.x + Math.sign(s || 1) * a,
        y: n.y + Math.sign(o || 1) * a
      };
    }
    if (t === T.Line || t === T.Arrow) {
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
      t.type === T.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
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
      c += Nt(n[w - 1], n[w]);
    const m = Nt(n[0], n[n.length - 1]) / c, y = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (m > 0.85 || y > 5) {
      const w = n[0], C = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [w, C] });
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
    const i = En.createAnnotation(
      T.Text,
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
      const { x: n, y: i, width: s, height: o } = this.selectionRect, r = (await E("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, s, o);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await E("copy_to_clipboard", { image: c }) : await E("save_screenshot_to_file", { image: c });
    } catch (n) {
      const i = t === "save" ? "保存" : "复制";
      throw H.error(`[截图] ${i}截图失败`, n), new Error(`${i}截图失败: ${n?.message || n?.toString() || "未知错误"}`);
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
          let xt = 0;
          for (; !this.backgroundImage && xt < 3e3; )
            await new Promise((X) => setTimeout(X, 100)), xt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, d = Math.max(0, o.padding || 0), m = this.canvas.width / c, y = this.canvas.height / c, w = t - d, C = n - d, f = i + d * 2, x = s + d * 2, p = Math.max(1, Math.round(f * c)), _ = Math.max(1, Math.round(x * c)), v = Math.max(0, w), b = Math.max(0, C), O = Math.min(m, w + f), D = Math.min(y, C + x), M = Math.max(0, O - v), V = Math.max(0, D - b), K = Math.round(v * c), tt = Math.round(b * c), ot = Math.min(
          this.canvas.width - K,
          Math.round(M * c)
        ), st = Math.min(
          this.canvas.height - tt,
          Math.round(V * c)
        ), ht = Math.round((v - w) * c), St = Math.round((b - C) * c), ut = document.createElement("canvas");
        ut.width = p, ut.height = _;
        const et = ut.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!et)
          throw new Error("无法获取2D绘图上下文");
        et.imageSmoothingEnabled = !1, o.fillColor && (et.fillStyle = o.fillColor, et.fillRect(0, 0, p, _)), ot > 0 && st > 0 && et.drawImage(
          this.backgroundImage,
          K,
          tt,
          ot,
          st,
          ht,
          St,
          ot,
          st
        );
        const yt = ut.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: yt,
          adjusted_width: p,
          adjusted_height: _,
          logical_x: w,
          logical_y: C,
          logical_width: f,
          logical_height: x
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
            const m = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, y = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, w = this.drawingEngine.createScreenshotContext(
              l,
              m,
              y
            );
            this.annotations.forEach((C, f) => {
              try {
                C.drawToScreenshot(w);
              } catch (x) {
                H.error(`[截图] 绘制标注 ${f} 失败`, x);
              }
            });
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), s(d);
        } catch (d) {
          H.error("[截图] 绘制过程出错", d);
          try {
            const m = r.toDataURL("image/png");
            clearTimeout(a), s(m);
          } catch {
            clearTimeout(a), o(new Error(`渲染失败: ${d.message || d}`));
          }
        }
      }, c.onerror = (d) => {
        H.error("[截图] 图像加载失败", d), clearTimeout(a), o(new Error("图像加载失败"));
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === T.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === T.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const n = this.annotations.findIndex((i) => i === t);
    n !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(n, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字标注内容
  updateTextAnnotation(t, n) {
    if (t.getData().type === T.Text) {
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
        const { x: n, y: i, width: s, height: o } = this.selectionRect, a = await E("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), d = Math.round(s * r), m = Math.round(o * r), y = Math.round(a.x + window.innerWidth * r), w = Math.round(a.y + window.innerHeight * r), C = t === "ocr" ? Math.min(Math.max(d, 760), Math.max(360, y - a.x)) : d, f = t === "ocr" ? Math.min(Math.max(m, 520), Math.max(260, w - a.y)) : m, x = t === "ocr" ? Math.round(l - Math.max(0, C - d) / 2) : l, p = t === "ocr" ? Math.max(a.x, Math.min(x, y - C)) : l, _ = t === "ocr" ? Math.max(a.y, Math.min(c, w - f)) : c, v = {}, b = await this.cropFromBackground(n, i, s, o, v);
        if (!b?.image)
          throw new Error("Failed to crop from background image");
        const O = await this.renderWithAnnotations(b, r, "save");
        await E("create_pin_window", {
          mode: t,
          imageData: O,
          x: p,
          y: _,
          width: C,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new Mn("screenshot").close();
        }, 100);
      } catch (n) {
        throw H.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, n), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await E("get_window_info"), i = n?.scale || 1, s = Math.round(n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), o = Math.round(n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await E("get_pixel_color", {
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
        H.error("[截图] 获取像素颜色失败", n);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const n = await E("get_window_info"), i = n?.scale || 1, s = this.colorPickerState.zoomFactor, o = Math.floor(s / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await E("get_screen_preview", {
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
          const w = y.getImageData(o, o, 1, 1).data, C = { r: w[0], g: w[1], b: w[2] }, f = this.rgbToHex(C.r, C.g, C.b);
          this.colorPickerState.colorInfo = { rgb: C, hex: f, position: t };
        }
        this.draw();
      } catch (n) {
        H.error("[截图] 更新颜色预览失败", n);
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
        const { x: r, y: l, width: c, height: d } = this.selectionRect, m = window.devicePixelRatio || 1, y = c * m, w = d * m, C = this.canvasPool.acquire(y, w), f = C.getContext("2d");
        if (!f)
          throw this.canvasPool.release(C), new Error("无法创建临时canvas");
        const x = r * m, p = l * m, _ = performance.now();
        f.drawImage(
          this.backgroundImage,
          x,
          p,
          y,
          w,
          0,
          0,
          y,
          w
        ), n = Math.round(performance.now() - _);
        const v = performance.now(), { recognizeFromCanvas: b } = await Ae.loadOCR();
        i = Math.round(performance.now() - v);
        const O = performance.now(), D = await b(C);
        s = Math.round(performance.now() - O), this.canvasPool.release(C);
        const M = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: D.confidence,
          rawLineCount: D.blocks.length,
          textLength: D.full_text.trim().length
        };
        H.info("[OCR] 识别耗时统计", M), $t.log("[OCR] recognition timing", M);
        const V = D.blocks, K = performance.now(), tt = zo(V);
        o = Math.round(performance.now() - K);
        const ot = tt.map((N) => N.text).join(`

`), st = {
          rawLineCount: V.length,
          paragraphCount: tt.length,
          durationMs: o,
          paragraphs: tt.map((N, lt) => ({
            index: lt,
            text: N.text,
            blockCount: N.blocks.length,
            isCodeBlock: !!N.isCodeBlock,
            isStructuredBlock: !!N.isStructuredBlock,
            bbox: N.bbox,
            sourceBlocks: N.blocks.map((wt) => ({
              text: wt.text,
              x: wt.x,
              y: wt.y,
              width: wt.width,
              height: wt.height
            }))
          }))
        };
        if (H.info("[OCR] 版面重组完成", st), $t.log("[OCR] layout reflow complete", st), !ot || !ot.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ht = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Ee(ot));
        const St = (N) => {
          const lt = N.trim();
          return !!(lt.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !lt.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let ut = "";
        const et = Ee(ot), ct = {
          detectedLanguage: et,
          textLength: ot.trim().length,
          textPreview: ot.trim().slice(0, 500)
        };
        H.info("[OCR] 翻译语言检测完成", ct), $t.log("[OCR] translation language detected", ct), qe(et) && (this.translationOverlay.sourceLanguage = et, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(et));
        const yt = ht === "offline" ? Ae.loadOfflineTranslator() : null, gt = (N) => N.includes("插件") && N.includes("未启用") ? N.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : N : ht === "offline" ? N.includes("未激活") || N.includes("未下载") || N.includes("运行时未安装") ? N : N.includes("超时") ? "模型加载超时，请重试" : N.includes("离线翻译暂仅支持") ? N : "离线翻译失败: " + N.substring(0, 50) : N.includes("timeout") || N.includes("超时") ? "翻译超时，请检查网络连接" : N.includes("network") || N.includes("网络") || N.includes("请求") || N.includes("令牌") ? "翻译失败，请检查网络连接" : N.trim() ? N.slice(0, 80) : "翻译失败，请检查网络连接", j = async () => {
          if (!yt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: N,
            canUseOfflineTranslation: lt,
            warmupOfflineTranslator: wt,
            getModelCacheInfo: Tt
          } = await yt, Mt = lt();
          if (this.offlineModelActivated && !Mt)
            if ((await Tt()).isCached)
              await wt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return N;
        }, xt = async (N, lt, wt) => {
          if (!N.trim())
            return N;
          if (ht === "offline") {
            if (lt !== "en" || wt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await j())(N);
          }
          return await E("translate_text", {
            text: N,
            from: lt,
            to: wt,
            engine: ht
          });
        }, X = (N) => {
          const lt = N.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(lt) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(lt);
        }, At = async (N, lt, wt) => {
          const Tt = N.trim();
          if (!Tt || St(Tt))
            return N;
          const Mt = N.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Mt) {
            const [, P, $, it, Q, S] = Mt, W = Ee($), ft = X($) || !qe(W) ? $ : await xt($, W, this.getAutoTargetLanguage(W)), dt = Ee(Q), te = qe(dt) && !St(Q) ? await xt(Q, dt, this.getAutoTargetLanguage(dt)) : Q;
            return `${P}${ft}${it}${te}${S}`;
          }
          if (X(Tt))
            return N;
          const Pt = Ee(Tt);
          if (!qe(Pt))
            return N;
          const R = this.getAutoTargetLanguage(Pt), u = await xt(Tt, Pt, R), g = {
            paragraphIndex: lt,
            blockIndex: wt,
            sourceLanguage: Pt,
            targetLanguage: R,
            sourceText: Tt,
            translatedText: u.slice(0, 200)
          };
          return H.info("[OCR] 结构化块翻译完成", g), $t.log("[OCR] structured block translation complete", g), u;
        }, Wt = async (N, lt) => {
          const wt = performance.now(), Tt = (u) => ({
            index: lt,
            durationMs: Math.round(performance.now() - wt),
            ...u
          }), Mt = Ee(N.text), Pt = this.getAutoTargetLanguage(Mt), R = {
            index: lt,
            text: N.text,
            sourceLanguage: Mt,
            targetLanguage: Pt,
            engine: ht,
            structured: !!N.isStructuredBlock
          };
          if (H.info("[OCR] 段落翻译方向", R), $t.log("[OCR] paragraph translation direction", R), !qe(Mt)) {
            N.translatedText = N.text;
            const u = Tt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), g = {
              index: lt,
              detectedLanguage: Mt,
              durationMs: u.durationMs,
              text: N.text
            };
            return H.warn("[OCR] 跳过不支持的段落语言", g), $t.log("[OCR] skip unsupported paragraph language", g), u;
          }
          try {
            if (N.isStructuredBlock && N.blocks.length > 0) {
              const P = async (it, Q) => {
                const S = await At(it.text, lt, Q);
                return it.translatedText = S, S;
              }, $ = [];
              if (ht === "offline")
                for (let it = 0; it < N.blocks.length; it += 1)
                  $.push(await P(N.blocks[it], it));
              else
                $.push(
                  ...await Promise.all(
                    N.blocks.map((it, Q) => P(it, Q))
                  )
                );
              N.translatedText = $.join(" ");
            } else if (St(N.text) || N.isCodeBlock) {
              N.translatedText = N.text;
              const P = N.isCodeBlock ? "code_block" : "command_like_text", $ = Tt({ skipped: !0, cancelled: !1 }), it = {
                index: lt,
                reason: P,
                durationMs: $.durationMs,
                text: N.text
              };
              return H.info("[OCR] 跳过代码段翻译", it), $t.log("[OCR] skip code paragraph translation", it), $;
            } else
              N.translatedText = await xt(
                N.text,
                Mt,
                Pt
              );
            const u = Tt({ skipped: !1, cancelled: !1 }), g = {
              index: lt,
              durationMs: u.durationMs,
              sourceLanguage: Mt,
              targetLanguage: Pt,
              engine: ht,
              structured: !!N.isStructuredBlock,
              sourceLength: N.text.length,
              translatedLength: (N.translatedText || "").length,
              translatedPreview: (N.translatedText || "").slice(0, 300)
            };
            return H.info("[OCR] 段落翻译完成", g), $t.log("[OCR] paragraph translation complete", g), u;
          } catch (u) {
            const g = u instanceof Error ? u.message : String(u);
            if (g === "翻译已取消")
              return Tt({ skipped: !1, cancelled: !0 });
            N.translatedText = N.text;
            const P = gt(g), $ = Tt({
              skipped: !1,
              cancelled: !1,
              errorMessage: P
            }), it = {
              index: lt,
              durationMs: $.durationMs,
              sourceLanguage: Mt,
              targetLanguage: Pt,
              engine: ht,
              error: g,
              structured: !!N.isStructuredBlock,
              text: N.text
            };
            return H.error("[OCR] 段落翻译失败", it), $t.log("[OCR] paragraph translation failed", it), $;
          }
        }, Kt = performance.now();
        let Lt = [];
        if (ht === "offline")
          for (let N = 0; N < tt.length; N += 1) {
            const lt = await Wt(tt[N], N);
            if (Lt.push(lt), lt.cancelled)
              return;
            if (lt.errorMessage) {
              ut = lt.errorMessage;
              break;
            }
          }
        else {
          if (Lt = await Promise.all(
            tt.map((N, lt) => Wt(N, lt))
          ), Lt.some((N) => N.cancelled))
            return;
          ut = Lt.find((N) => N.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Kt);
        const Ct = {
          durationMs: a,
          engine: ht,
          paragraphCount: tt.length,
          translatedParagraphCount: Lt.filter((N) => !N.skipped && !N.errorMessage).length,
          skippedParagraphCount: Lt.filter((N) => N.skipped).length,
          failedParagraphCount: Lt.filter((N) => !!N.errorMessage).length
        };
        H.info("[OCR] 翻译耗时统计", Ct), $t.log("[OCR] translation timing", Ct);
        const Ht = tt.map((N) => this.toDisplayParagraph(N, m)), Yt = Ht.map((N) => this.toLegacyOverlayBlock(N));
        this.translationOverlay.blocks = Yt, this.translationOverlay.paragraphBlocks = Ht, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = ut || void 0;
        const Zt = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: V.length,
          paragraphCount: tt.length,
          engine: ht
        };
        H.info("[OCR] 截图翻译总耗时统计", Zt), $t.log("[OCR] pipeline timing", Zt), this.draw(), this.onStateChange?.();
      } catch (t) {
        H.error("[OCR] OCR翻译失败:", t);
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
      const { cancelOfflineTranslation: t } = await Ae.loadOfflineTranslator();
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
    Ae.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var ql = {
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
function Jl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ql(e, t, n) {
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
var tc = Symbol("icon-context");
function kt(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = Jl(), r = Te(tc, ql);
      return function() {
        var l = o.size, c = o.strokeWidth, d = o.strokeLinecap, m = o.strokeLinejoin, y = o.theme, w = o.fill, C = o.spin, f = Ql(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: y,
          fill: w
        }, r), x = [r.prefix + "-icon"];
        return x.push(r.prefix + "-icon-" + e), t && r.rtl && x.push(r.prefix + "-icon-rtl"), C && x.push(r.prefix + "-icon-spin"), k("span", {
          class: x.join(" ")
        }, [n(f)]);
      };
    }
  };
  return i;
}
const ec = kt("arrow-right-up", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M19 11H37V29",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ci = kt("check", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ti = kt("close", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pi = kt("copy", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), nc = kt("delete-four", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M8 11L40 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M18 5L30 5",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rs = kt("down", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ic = kt("download", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), sc = kt("font-size", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 6V42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M16 42H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oc = kt("go-on", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ps = kt("loading", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ho = kt("minus", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ac = kt("more", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), k("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), k("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), rc = kt("mosaic", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M44 36H36V44H44V36Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M28 36H20V44H28V36Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M12 36H4V44H12V36Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M44 20H36V28H44V20Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M28 20H20V28H28V20Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M12 20H4V28H12V20Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M44 4H36V12H44V4Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M28 4H20V12H28V4Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M12 4H4V12H12V4Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M20 12H12V20H20V12Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M20 28H12V36H20V28Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M36 12H28V20H36V12Z",
    fill: e.colors[0]
  }, null), k("path", {
    d: "M36 28H28V36H36V28Z",
    fill: e.colors[0]
  }, null)]);
}), lc = kt("move-one", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), cc = kt("picture", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Es = kt("pin", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [k("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), k("defs", null, [k("clipPath", {
    id: e.id + "1c742167"
  }, [k("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), As = kt("platte", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Mi = kt("pushpin", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), uc = kt("rectangle-one", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), hc = kt("redo", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M42 8V17H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dc = kt("refresh", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fc = kt("return", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gc = kt("round", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Is = kt("save", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), k("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), mc = kt("square", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Hn = kt("text-recognition", !1, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jo = kt("translate", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pc = kt("write", !0, function(e) {
  return k("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [k("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), k("path", {
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
function yc(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Os = typeof window < "u", He = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), wc = (e, t, n) => vc({ l: e, k: t, s: n }), vc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Bt = (e) => typeof e == "number" && isFinite(e), xc = (e) => Ki(e) === "[object Date]", Zn = (e) => Ki(e) === "[object RegExp]", ni = (e) => mt(e) && Object.keys(e).length === 0, jt = Object.assign, bc = Object.create, bt = (e = null) => bc(e);
let zs;
const jn = () => zs || (zs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : bt());
function Ds(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ns(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function kc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, s, o) => `${s}="${Ns(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, s, o) => `${s}='${Ns(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    e = e.replace(i, "$1javascript&#58;");
  }), e;
}
const _c = Object.prototype.hasOwnProperty;
function le(e, t) {
  return _c.call(e, t);
}
const zt = Array.isArray, Rt = (e) => typeof e == "function", Z = (e) => typeof e == "string", Ot = (e) => typeof e == "boolean", pt = (e) => e !== null && typeof e == "object", Sc = (e) => pt(e) && Rt(e.then) && Rt(e.catch), Uo = Object.prototype.toString, Ki = (e) => Uo.call(e), mt = (e) => Ki(e) === "[object Object]", Cc = (e) => e == null ? "" : zt(e) || mt(e) && e.toString === Uo ? JSON.stringify(e, null, 2) : String(e);
function Zi(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const zn = (e) => !pt(e) || zt(e);
function Un(e, t) {
  if (zn(e) || zn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      o !== "__proto__" && (pt(i[o]) && !pt(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : bt()), zn(s[o]) || zn(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Tc(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Li(e, t, n) {
  return { start: e, end: t };
}
const vt = {
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
}, Mc = 17;
function ii(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function Lc(e) {
  throw e;
}
const ue = " ", Rc = "\r", Vt = `
`, Pc = "\u2028", Ec = "\u2029";
function Ac(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (M) => t[M] === Rc && t[M + 1] === Vt, r = (M) => t[M] === Vt, l = (M) => t[M] === Ec, c = (M) => t[M] === Pc, d = (M) => a(M) || r(M) || l(M) || c(M), m = () => n, y = () => i, w = () => s, C = () => o, f = (M) => a(M) || l(M) || c(M) ? Vt : t[M], x = () => f(n), p = () => f(n + o);
  function _() {
    return o = 0, d(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function v() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function b() {
    n = 0, i = 1, s = 1, o = 0;
  }
  function O(M = 0) {
    o = M;
  }
  function D() {
    const M = n + o;
    for (; M !== n; )
      _();
    o = 0;
  }
  return {
    index: m,
    line: y,
    column: w,
    peekOffset: C,
    charAt: f,
    currentChar: x,
    currentPeek: p,
    next: _,
    peek: v,
    reset: b,
    resetPeek: O,
    skipToPeek: D
  };
}
const pe = void 0, Ic = ".", Ws = "'", Oc = "tokenizer";
function zc(e, t = {}) {
  const n = t.location !== !1, i = Ac(e), s = () => i.index(), o = () => Tc(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
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
  function m(u, g, P, ...$) {
    const it = c();
    if (g.column += P, g.offset += P, d) {
      const Q = n ? Li(it.startLoc, g) : null, S = ii(u, Q, {
        domain: Oc,
        args: $
      });
      d(S);
    }
  }
  function y(u, g, P) {
    u.endLoc = o(), u.currentType = g;
    const $ = { type: g };
    return n && ($.loc = Li(u.startLoc, u.endLoc)), P != null && ($.value = P), $;
  }
  const w = (u) => y(
    u,
    13
    /* TokenTypes.EOF */
  );
  function C(u, g) {
    return u.currentChar() === g ? (u.next(), g) : (m(vt.EXPECTED_TOKEN, o(), 0, g), "");
  }
  function f(u) {
    let g = "";
    for (; u.currentPeek() === ue || u.currentPeek() === Vt; )
      g += u.currentPeek(), u.peek();
    return g;
  }
  function x(u) {
    const g = f(u);
    return u.skipToPeek(), g;
  }
  function p(u) {
    if (u === pe)
      return !1;
    const g = u.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g === 95;
  }
  function _(u) {
    if (u === pe)
      return !1;
    const g = u.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function v(u, g) {
    const { currentType: P } = g;
    if (P !== 2)
      return !1;
    f(u);
    const $ = p(u.currentPeek());
    return u.resetPeek(), $;
  }
  function b(u, g) {
    const { currentType: P } = g;
    if (P !== 2)
      return !1;
    f(u);
    const $ = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), it = _($);
    return u.resetPeek(), it;
  }
  function O(u, g) {
    const { currentType: P } = g;
    if (P !== 2)
      return !1;
    f(u);
    const $ = u.currentPeek() === Ws;
    return u.resetPeek(), $;
  }
  function D(u, g) {
    const { currentType: P } = g;
    if (P !== 7)
      return !1;
    f(u);
    const $ = u.currentPeek() === ".";
    return u.resetPeek(), $;
  }
  function M(u, g) {
    const { currentType: P } = g;
    if (P !== 8)
      return !1;
    f(u);
    const $ = p(u.currentPeek());
    return u.resetPeek(), $;
  }
  function V(u, g) {
    const { currentType: P } = g;
    if (!(P === 7 || P === 11))
      return !1;
    f(u);
    const $ = u.currentPeek() === ":";
    return u.resetPeek(), $;
  }
  function K(u, g) {
    const { currentType: P } = g;
    if (P !== 9)
      return !1;
    const $ = () => {
      const Q = u.currentPeek();
      return Q === "{" ? p(u.peek()) : Q === "@" || Q === "|" || Q === ":" || Q === "." || Q === ue || !Q ? !1 : Q === Vt ? (u.peek(), $()) : ot(u, !1);
    }, it = $();
    return u.resetPeek(), it;
  }
  function tt(u) {
    f(u);
    const g = u.currentPeek() === "|";
    return u.resetPeek(), g;
  }
  function ot(u, g = !0) {
    const P = (it = !1, Q = "") => {
      const S = u.currentPeek();
      return S === "{" || S === "@" || !S ? it : S === "|" ? !(Q === ue || Q === Vt) : S === ue ? (u.peek(), P(!0, ue)) : S === Vt ? (u.peek(), P(!0, Vt)) : !0;
    }, $ = P();
    return g && u.resetPeek(), $;
  }
  function st(u, g) {
    const P = u.currentChar();
    return P === pe ? pe : g(P) ? (u.next(), P) : null;
  }
  function ht(u) {
    const g = u.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g >= 48 && g <= 57 || // 0-9
    g === 95 || // _
    g === 36;
  }
  function St(u) {
    return st(u, ht);
  }
  function ut(u) {
    const g = u.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g >= 48 && g <= 57 || // 0-9
    g === 95 || // _
    g === 36 || // $
    g === 45;
  }
  function et(u) {
    return st(u, ut);
  }
  function ct(u) {
    const g = u.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function yt(u) {
    return st(u, ct);
  }
  function gt(u) {
    const g = u.charCodeAt(0);
    return g >= 48 && g <= 57 || // 0-9
    g >= 65 && g <= 70 || // A-F
    g >= 97 && g <= 102;
  }
  function j(u) {
    return st(u, gt);
  }
  function xt(u) {
    let g = "", P = "";
    for (; g = yt(u); )
      P += g;
    return P;
  }
  function X(u) {
    let g = "";
    for (; ; ) {
      const P = u.currentChar();
      if (P === "{" || P === "}" || P === "@" || P === "|" || !P)
        break;
      if (P === ue || P === Vt)
        if (ot(u))
          g += P, u.next();
        else {
          if (tt(u))
            break;
          g += P, u.next();
        }
      else
        g += P, u.next();
    }
    return g;
  }
  function At(u) {
    x(u);
    let g = "", P = "";
    for (; g = et(u); )
      P += g;
    const $ = u.currentChar();
    if ($ && $ !== "}" && $ !== pe && $ !== ue && $ !== Vt && $ !== "　") {
      const it = Zt(u);
      return m(vt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, P + it), P + it;
    }
    return u.currentChar() === pe && m(vt.UNTERMINATED_CLOSING_BRACE, o(), 0), P;
  }
  function Wt(u) {
    x(u);
    let g = "";
    return u.currentChar() === "-" ? (u.next(), g += `-${xt(u)}`) : g += xt(u), u.currentChar() === pe && m(vt.UNTERMINATED_CLOSING_BRACE, o(), 0), g;
  }
  function Kt(u) {
    return u !== Ws && u !== Vt;
  }
  function Lt(u) {
    x(u), C(u, "'");
    let g = "", P = "";
    for (; g = st(u, Kt); )
      g === "\\" ? P += Ct(u) : P += g;
    const $ = u.currentChar();
    return $ === Vt || $ === pe ? (m(vt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), $ === Vt && (u.next(), C(u, "'")), P) : (C(u, "'"), P);
  }
  function Ct(u) {
    const g = u.currentChar();
    switch (g) {
      case "\\":
      case "'":
        return u.next(), `\\${g}`;
      case "u":
        return Ht(u, g, 4);
      case "U":
        return Ht(u, g, 6);
      default:
        return m(vt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, g), "";
    }
  }
  function Ht(u, g, P) {
    C(u, g);
    let $ = "";
    for (let it = 0; it < P; it++) {
      const Q = j(u);
      if (!Q) {
        m(vt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${g}${$}${u.currentChar()}`);
        break;
      }
      $ += Q;
    }
    return `\\${g}${$}`;
  }
  function Yt(u) {
    return u !== "{" && u !== "}" && u !== ue && u !== Vt;
  }
  function Zt(u) {
    x(u);
    let g = "", P = "";
    for (; g = st(u, Yt); )
      P += g;
    return P;
  }
  function N(u) {
    let g = "", P = "";
    for (; g = St(u); )
      P += g;
    return P;
  }
  function lt(u) {
    const g = (P) => {
      const $ = u.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === ue ? P : (P += $, u.next(), g(P));
    };
    return g("");
  }
  function wt(u) {
    x(u);
    const g = C(
      u,
      "|"
      /* TokenChars.Pipe */
    );
    return x(u), g;
  }
  function Tt(u, g) {
    let P = null;
    switch (u.currentChar()) {
      case "{":
        return g.braceNest >= 1 && m(vt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), u.next(), P = y(
          g,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), x(u), g.braceNest++, P;
      case "}":
        return g.braceNest > 0 && g.currentType === 2 && m(vt.EMPTY_PLACEHOLDER, o(), 0), u.next(), P = y(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), g.braceNest--, g.braceNest > 0 && x(u), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), P;
      case "@":
        return g.braceNest > 0 && m(vt.UNTERMINATED_CLOSING_BRACE, o(), 0), P = Mt(u, g) || w(g), g.braceNest = 0, P;
      default: {
        let it = !0, Q = !0, S = !0;
        if (tt(u))
          return g.braceNest > 0 && m(vt.UNTERMINATED_CLOSING_BRACE, o(), 0), P = y(g, 1, wt(u)), g.braceNest = 0, g.inLinked = !1, P;
        if (g.braceNest > 0 && (g.currentType === 4 || g.currentType === 5 || g.currentType === 6))
          return m(vt.UNTERMINATED_CLOSING_BRACE, o(), 0), g.braceNest = 0, Pt(u, g);
        if (it = v(u, g))
          return P = y(g, 4, At(u)), x(u), P;
        if (Q = b(u, g))
          return P = y(g, 5, Wt(u)), x(u), P;
        if (S = O(u, g))
          return P = y(g, 6, Lt(u)), x(u), P;
        if (!it && !Q && !S)
          return P = y(g, 12, Zt(u)), m(vt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, P.value), x(u), P;
        break;
      }
    }
    return P;
  }
  function Mt(u, g) {
    const { currentType: P } = g;
    let $ = null;
    const it = u.currentChar();
    switch ((P === 7 || P === 8 || P === 11 || P === 9) && (it === Vt || it === ue) && m(vt.INVALID_LINKED_FORMAT, o(), 0), it) {
      case "@":
        return u.next(), $ = y(
          g,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), g.inLinked = !0, $;
      case ".":
        return x(u), u.next(), y(
          g,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return x(u), u.next(), y(
          g,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return tt(u) ? ($ = y(g, 1, wt(u)), g.braceNest = 0, g.inLinked = !1, $) : D(u, g) || V(u, g) ? (x(u), Mt(u, g)) : M(u, g) ? (x(u), y(g, 11, N(u))) : K(u, g) ? (x(u), it === "{" ? Tt(u, g) || $ : y(g, 10, lt(u))) : (P === 7 && m(vt.INVALID_LINKED_FORMAT, o(), 0), g.braceNest = 0, g.inLinked = !1, Pt(u, g));
    }
  }
  function Pt(u, g) {
    let P = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (g.braceNest > 0)
      return Tt(u, g) || w(g);
    if (g.inLinked)
      return Mt(u, g) || w(g);
    switch (u.currentChar()) {
      case "{":
        return Tt(u, g) || w(g);
      case "}":
        return m(vt.UNBALANCED_CLOSING_BRACE, o(), 0), u.next(), y(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Mt(u, g) || w(g);
      default: {
        if (tt(u))
          return P = y(g, 1, wt(u)), g.braceNest = 0, g.inLinked = !1, P;
        if (ot(u))
          return y(g, 0, X(u));
        break;
      }
    }
    return P;
  }
  function R() {
    const { currentType: u, offset: g, startLoc: P, endLoc: $ } = l;
    return l.lastType = u, l.lastOffset = g, l.lastStartLoc = P, l.lastEndLoc = $, l.offset = s(), l.startLoc = o(), i.currentChar() === pe ? y(
      l,
      13
      /* TokenTypes.EOF */
    ) : Pt(i, l);
  }
  return {
    nextToken: R,
    currentOffset: s,
    currentPosition: o,
    context: c
  };
}
const Dc = "parser", Nc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Wc(e, t, n) {
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
function $c(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(p, _, v, b, ...O) {
    const D = p.currentPosition();
    if (D.offset += b, D.column += b, n) {
      const M = t ? Li(v, D) : null, V = ii(_, M, {
        domain: Dc,
        args: O
      });
      n(V);
    }
  }
  function s(p, _, v) {
    const b = { type: p };
    return t && (b.start = _, b.end = _, b.loc = { start: v, end: v }), b;
  }
  function o(p, _, v, b) {
    t && (p.end = _, p.loc && (p.loc.end = v));
  }
  function a(p, _) {
    const v = p.context(), b = s(3, v.offset, v.startLoc);
    return b.value = _, o(b, p.currentOffset(), p.currentPosition()), b;
  }
  function r(p, _) {
    const v = p.context(), { lastOffset: b, lastStartLoc: O } = v, D = s(5, b, O);
    return D.index = parseInt(_, 10), p.nextToken(), o(D, p.currentOffset(), p.currentPosition()), D;
  }
  function l(p, _) {
    const v = p.context(), { lastOffset: b, lastStartLoc: O } = v, D = s(4, b, O);
    return D.key = _, p.nextToken(), o(D, p.currentOffset(), p.currentPosition()), D;
  }
  function c(p, _) {
    const v = p.context(), { lastOffset: b, lastStartLoc: O } = v, D = s(9, b, O);
    return D.value = _.replace(Nc, Wc), p.nextToken(), o(D, p.currentOffset(), p.currentPosition()), D;
  }
  function d(p) {
    const _ = p.nextToken(), v = p.context(), { lastOffset: b, lastStartLoc: O } = v, D = s(8, b, O);
    return _.type !== 11 ? (i(p, vt.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), D.value = "", o(D, b, O), {
      nextConsumeToken: _,
      node: D
    }) : (_.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, he(_)), D.value = _.value || "", o(D, p.currentOffset(), p.currentPosition()), {
      node: D
    });
  }
  function m(p, _) {
    const v = p.context(), b = s(7, v.offset, v.startLoc);
    return b.value = _, o(b, p.currentOffset(), p.currentPosition()), b;
  }
  function y(p) {
    const _ = p.context(), v = s(6, _.offset, _.startLoc);
    let b = p.nextToken();
    if (b.type === 8) {
      const O = d(p);
      v.modifier = O.node, b = O.nextConsumeToken || p.nextToken();
    }
    switch (b.type !== 9 && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), b = p.nextToken(), b.type === 2 && (b = p.nextToken()), b.type) {
      case 10:
        b.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), v.key = m(p, b.value || "");
        break;
      case 4:
        b.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), v.key = l(p, b.value || "");
        break;
      case 5:
        b.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), v.key = r(p, b.value || "");
        break;
      case 6:
        b.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), v.key = c(p, b.value || "");
        break;
      default: {
        i(p, vt.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const O = p.context(), D = s(7, O.offset, O.startLoc);
        return D.value = "", o(D, O.offset, O.startLoc), v.key = D, o(v, O.offset, O.startLoc), {
          nextConsumeToken: b,
          node: v
        };
      }
    }
    return o(v, p.currentOffset(), p.currentPosition()), {
      node: v
    };
  }
  function w(p) {
    const _ = p.context(), v = _.currentType === 1 ? p.currentOffset() : _.offset, b = _.currentType === 1 ? _.endLoc : _.startLoc, O = s(2, v, b);
    O.items = [];
    let D = null;
    do {
      const K = D || p.nextToken();
      switch (D = null, K.type) {
        case 0:
          K.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(K)), O.items.push(a(p, K.value || ""));
          break;
        case 5:
          K.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(K)), O.items.push(r(p, K.value || ""));
          break;
        case 4:
          K.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(K)), O.items.push(l(p, K.value || ""));
          break;
        case 6:
          K.value == null && i(p, vt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(K)), O.items.push(c(p, K.value || ""));
          break;
        case 7: {
          const tt = y(p);
          O.items.push(tt.node), D = tt.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 13 && _.currentType !== 1);
    const M = _.currentType === 1 ? _.lastOffset : p.currentOffset(), V = _.currentType === 1 ? _.lastEndLoc : p.currentPosition();
    return o(O, M, V), O;
  }
  function C(p, _, v, b) {
    const O = p.context();
    let D = b.items.length === 0;
    const M = s(1, _, v);
    M.cases = [], M.cases.push(b);
    do {
      const V = w(p);
      D || (D = V.items.length === 0), M.cases.push(V);
    } while (O.currentType !== 13);
    return D && i(p, vt.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), o(M, p.currentOffset(), p.currentPosition()), M;
  }
  function f(p) {
    const _ = p.context(), { offset: v, startLoc: b } = _, O = w(p);
    return _.currentType === 13 ? O : C(p, v, b, O);
  }
  function x(p) {
    const _ = zc(p, jt({}, e)), v = _.context(), b = s(0, v.offset, v.startLoc);
    return t && b.loc && (b.loc.source = p), b.body = f(_), e.onCacheKey && (b.cacheKey = e.onCacheKey(p)), v.currentType !== 13 && i(_, vt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, p[v.offset] || ""), o(b, _.currentOffset(), _.currentPosition()), b;
  }
  return { parse: x };
}
function he(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Fc(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function $s(e, t) {
  for (let n = 0; n < e.length; n++)
    qi(e[n], t);
}
function qi(e, t) {
  switch (e.type) {
    case 1:
      $s(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      $s(e.items, t);
      break;
    case 6: {
      qi(e.key, t), t.helper(
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
function Bc(e, t = {}) {
  const n = Fc(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && qi(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function Hc(e) {
  const t = e.body;
  return t.type === 2 ? Fs(t) : t.cases.forEach((n) => Fs(n)), e;
}
function Fs(e) {
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
      e.static = Zi(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
function Je(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Je(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let i = 0; i < n.length; i++)
        Je(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        Je(n[i]);
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
      Je(t.key), t.k = t.key, delete t.key, t.modifier && (Je(t.modifier), t.m = t.modifier, delete t.modifier);
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
function jc(e, t) {
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
  function l(f, x) {
    a.code += f;
  }
  function c(f, x = !0) {
    const p = x ? i : "";
    l(s ? p + "  ".repeat(f) : p);
  }
  function d(f = !0) {
    const x = ++a.indentLevel;
    f && c(x);
  }
  function m(f = !0) {
    const x = --a.indentLevel;
    f && c(x);
  }
  function y() {
    c(a.indentLevel);
  }
  return {
    context: r,
    push: l,
    indent: d,
    deindent: m,
    newline: y,
    helper: (f) => `_${f}`,
    needIndent: () => a.needIndent
  };
}
function Uc(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tn(e, t.key), t.modifier ? (e.push(", "), tn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Vc(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let o = 0; o < s && (tn(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function Yc(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let o = 0; o < s && (tn(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function Gc(e, t) {
  t.body ? tn(e, t.body) : e.push("null");
}
function tn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Gc(e, t);
      break;
    case 1:
      Yc(e, t);
      break;
    case 2:
      Vc(e, t);
      break;
    case 6:
      Uc(e, t);
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
const Xc = (e, t = {}) => {
  const n = Z(t.mode) ? t.mode : "normal", i = Z(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], r = jc(e, {
    filename: i,
    breakLineCode: s,
    needIndent: o
  });
  r.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), r.indent(o), a.length > 0 && (r.push(`const { ${Zi(a.map((d) => `${d}: _${d}`), ", ")} } = ctx`), r.newline()), r.push("return "), tn(r, e), r.deindent(o), r.push("}"), delete e.helpers;
  const { code: l, map: c } = r.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Kc(e, t = {}) {
  const n = jt({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = $c(n).parse(e);
  return i ? (o && Hc(r), s && Je(r), { ast: r, code: "" }) : (Bc(r, n), Xc(r, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Zc() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function me(e) {
  return pt(e) && Ji(e) === 0 && (le(e, "b") || le(e, "body"));
}
const Vo = ["b", "body"];
function qc(e) {
  return Me(e, Vo);
}
const Yo = ["c", "cases"];
function Jc(e) {
  return Me(e, Yo, []);
}
const Go = ["s", "static"];
function Qc(e) {
  return Me(e, Go);
}
const Xo = ["i", "items"];
function tu(e) {
  return Me(e, Xo, []);
}
const Ko = ["t", "type"];
function Ji(e) {
  return Me(e, Ko);
}
const Zo = ["v", "value"];
function Dn(e, t) {
  const n = Me(e, Zo);
  if (n != null)
    return n;
  throw kn(t);
}
const qo = ["m", "modifier"];
function eu(e) {
  return Me(e, qo);
}
const Jo = ["k", "key"];
function nu(e) {
  const t = Me(e, Jo);
  if (t)
    return t;
  throw kn(
    6
    /* NodeTypes.Linked */
  );
}
function Me(e, t, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (le(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const Qo = [
  ...Vo,
  ...Yo,
  ...Go,
  ...Xo,
  ...Jo,
  ...qo,
  ...Zo,
  ...Ko
];
function kn(e) {
  return new Error(`unhandled node type: ${e}`);
}
function yi(e) {
  return (n) => iu(n, e);
}
function iu(e, t) {
  const n = qc(t);
  if (n == null)
    throw kn(
      0
      /* NodeTypes.Resource */
    );
  if (Ji(n) === 1) {
    const o = Jc(n);
    return e.plural(o.reduce((a, r) => [
      ...a,
      Bs(e, r)
    ], []));
  } else
    return Bs(e, n);
}
function Bs(e, t) {
  const n = Qc(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = tu(t).reduce((s, o) => [...s, Ri(e, o)], []);
    return e.normalize(i);
  }
}
function Ri(e, t) {
  const n = Ji(t);
  switch (n) {
    case 3:
      return Dn(t, n);
    case 9:
      return Dn(t, n);
    case 4: {
      const i = t;
      if (le(i, "k") && i.k)
        return e.interpolate(e.named(i.k));
      if (le(i, "key") && i.key)
        return e.interpolate(e.named(i.key));
      throw kn(n);
    }
    case 5: {
      const i = t;
      if (le(i, "i") && Bt(i.i))
        return e.interpolate(e.list(i.i));
      if (le(i, "index") && Bt(i.index))
        return e.interpolate(e.list(i.index));
      throw kn(n);
    }
    case 6: {
      const i = t, s = eu(i), o = nu(i);
      return e.linked(Ri(e, o), s ? Ri(e, s) : void 0, e.type);
    }
    case 7:
      return Dn(t, n);
    case 8:
      return Dn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const su = (e) => e;
let Nn = bt();
function ou(e, t = {}) {
  let n = !1;
  const i = t.onError || Lc;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...Kc(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function au(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Z(e)) {
    Ot(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || su)(e), s = Nn[i];
    if (s)
      return s;
    const { ast: o, detectError: a } = ou(e, {
      ...t,
      location: !1,
      jit: !0
    }), r = yi(o);
    return a ? r : Nn[i] = r;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = Nn[n];
      return i || (Nn[n] = yi(e));
    } else
      return yi(e);
  }
}
const we = {
  INVALID_ARGUMENT: Mc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ru = 24;
function ve(e) {
  return ii(e, null, void 0);
}
function Qi(e, t) {
  return t.locale != null ? Hs(t.locale) : Hs(e.locale);
}
let wi;
function Hs(e) {
  if (Z(e))
    return e;
  if (Rt(e)) {
    if (e.resolvedOnce && wi != null)
      return wi;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Sc(t))
        throw ve(we.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return wi = t;
    } else
      throw ve(we.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ve(we.NOT_SUPPORT_LOCALE_TYPE);
}
function lu(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...zt(t) ? t : pt(t) ? Object.keys(t) : Z(t) ? [t] : [n]
  ])];
}
function ta(e, t, n) {
  const i = Z(n) ? n : qn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; zt(a); )
      a = js(o, a, t);
    const r = zt(t) || !mt(t) ? t : t.default ? t.default : null;
    a = Z(r) ? [r] : r, zt(a) && js(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function js(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && Ot(i); s++) {
    const o = t[s];
    Z(o) && (i = cu(e, t[s], n));
  }
  return i;
}
function cu(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = uu(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function uu(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (zt(n) || mt(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const Le = [];
Le[
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
Le[
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
Le[
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
Le[
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
Le[
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
Le[
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
Le[
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
const hu = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function du(e) {
  return hu.test(e);
}
function fu(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function gu(e) {
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
function mu(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : du(t) ? fu(t) : "*" + t;
}
function pu(e) {
  const t = [];
  let n = -1, i = 0, s = 0, o, a, r, l, c, d, m;
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
      if (s = 0, a === void 0 || (a = mu(a), a === !1))
        return !1;
      y[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function w() {
    const C = e[n + 1];
    if (i === 5 && C === "'" || i === 6 && C === '"')
      return n++, r = "\\" + C, y[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, o = e[n], !(o === "\\" && w())) {
      if (l = gu(o), m = Le[i], c = m[l] || m.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (d = y[c[1]], d && (r = o, d() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const Us = /* @__PURE__ */ new Map();
function yu(e, t) {
  return pt(e) ? e[t] : null;
}
function wu(e, t) {
  if (!pt(e))
    return null;
  let n = Us.get(t);
  if (n || (n = pu(t), n && Us.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = n[o];
    if (Qo.includes(a) && me(s))
      return null;
    const r = s[a];
    if (r === void 0 || Rt(s))
      return null;
    s = r, o++;
  }
  return s;
}
const vu = "11.2.2", si = -1, qn = "en-US", Vs = "", Ys = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function xu() {
  return {
    upper: (e, t) => t === "text" && Z(e) ? e.toUpperCase() : t === "vnode" && pt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Z(e) ? e.toLowerCase() : t === "vnode" && pt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Z(e) ? Ys(e) : t === "vnode" && pt(e) && "__v_isVNode" in e ? Ys(e.children) : e
  };
}
let ea;
function bu(e) {
  ea = e;
}
let na;
function ku(e) {
  na = e;
}
let ia;
function _u(e) {
  ia = e;
}
let sa = null;
const Gs = (e) => {
  sa = e;
}, Su = () => sa;
let Xs = 0;
function Cu(e = {}) {
  const t = Rt(e.onWarn) ? e.onWarn : yc, n = Z(e.version) ? e.version : vu, i = Z(e.locale) || Rt(e.locale) ? e.locale : qn, s = Rt(i) ? qn : i, o = zt(e.fallbackLocale) || mt(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = mt(e.messages) ? e.messages : vi(s), r = mt(e.datetimeFormats) ? e.datetimeFormats : vi(s), l = mt(e.numberFormats) ? e.numberFormats : vi(s), c = jt(bt(), e.modifiers, xu()), d = e.pluralRules || bt(), m = Rt(e.missing) ? e.missing : null, y = Ot(e.missingWarn) || Zn(e.missingWarn) ? e.missingWarn : !0, w = Ot(e.fallbackWarn) || Zn(e.fallbackWarn) ? e.fallbackWarn : !0, C = !!e.fallbackFormat, f = !!e.unresolving, x = Rt(e.postTranslation) ? e.postTranslation : null, p = mt(e.processor) ? e.processor : null, _ = Ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter, b = Rt(e.messageCompiler) ? e.messageCompiler : ea, O = Rt(e.messageResolver) ? e.messageResolver : na || yu, D = Rt(e.localeFallbacker) ? e.localeFallbacker : ia || lu, M = pt(e.fallbackContext) ? e.fallbackContext : void 0, V = e, K = pt(V.__datetimeFormatters) ? V.__datetimeFormatters : /* @__PURE__ */ new Map(), tt = pt(V.__numberFormatters) ? V.__numberFormatters : /* @__PURE__ */ new Map(), ot = pt(V.__meta) ? V.__meta : {};
  Xs++;
  const st = {
    version: n,
    cid: Xs,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: d,
    missing: m,
    missingWarn: y,
    fallbackWarn: w,
    fallbackFormat: C,
    unresolving: f,
    postTranslation: x,
    processor: p,
    warnHtmlMessage: _,
    escapeParameter: v,
    messageCompiler: b,
    messageResolver: O,
    localeFallbacker: D,
    fallbackContext: M,
    onWarn: t,
    __meta: ot
  };
  return st.datetimeFormats = r, st.numberFormats = l, st.__datetimeFormatters = K, st.__numberFormatters = tt, st;
}
const vi = (e) => ({ [e]: bt() });
function ts(e, t, n, i, s) {
  const { missing: o, onWarn: a } = e;
  if (o !== null) {
    const r = o(e, n, t, s);
    return Z(r) ? r : t;
  } else
    return t;
}
function fn(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Tu(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Mu(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (Tu(e, t[i]))
      return !0;
  return !1;
}
function Ks(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e, [l, c, d, m] = Pi(...t), y = Ot(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Ot(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const w = !!d.part, C = Qi(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!Z(l) || l === "")
    return new Intl.DateTimeFormat(C, m).format(c);
  let x = {}, p, _ = null;
  const v = "datetime format";
  for (let D = 0; D < f.length && (p = f[D], x = n[p] || {}, _ = x[l], !mt(_)); D++)
    ts(e, l, p, y, v);
  if (!mt(_) || !Z(p))
    return i ? si : l;
  let b = `${p}__${l}`;
  ni(m) || (b = `${b}__${JSON.stringify(m)}`);
  let O = r.get(b);
  return O || (O = new Intl.DateTimeFormat(p, jt({}, _, m)), r.set(b, O)), w ? O.formatToParts(c) : O.format(c);
}
const oa = [
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
function Pi(...e) {
  const [t, n, i, s] = e, o = bt();
  let a = bt(), r;
  if (Z(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw ve(we.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    r = new Date(c);
    try {
      r.toISOString();
    } catch {
      throw ve(we.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (xc(t)) {
    if (isNaN(t.getTime()))
      throw ve(we.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (Bt(t))
    r = t;
  else
    throw ve(we.INVALID_ARGUMENT);
  return Z(n) ? o.key = n : mt(n) && Object.keys(n).forEach((l) => {
    oa.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), Z(i) ? o.locale = i : mt(i) && (a = i), mt(s) && (a = s), [o.key || "", r, o, a];
}
function Zs(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function qs(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e, [l, c, d, m] = Ei(...t), y = Ot(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Ot(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const w = !!d.part, C = Qi(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!Z(l) || l === "")
    return new Intl.NumberFormat(C, m).format(c);
  let x = {}, p, _ = null;
  const v = "number format";
  for (let D = 0; D < f.length && (p = f[D], x = n[p] || {}, _ = x[l], !mt(_)); D++)
    ts(e, l, p, y, v);
  if (!mt(_) || !Z(p))
    return i ? si : l;
  let b = `${p}__${l}`;
  ni(m) || (b = `${b}__${JSON.stringify(m)}`);
  let O = r.get(b);
  return O || (O = new Intl.NumberFormat(p, jt({}, _, m)), r.set(b, O)), w ? O.formatToParts(c) : O.format(c);
}
const aa = [
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
function Ei(...e) {
  const [t, n, i, s] = e, o = bt();
  let a = bt();
  if (!Bt(t))
    throw ve(we.INVALID_ARGUMENT);
  const r = t;
  return Z(n) ? o.key = n : mt(n) && Object.keys(n).forEach((l) => {
    aa.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), Z(i) ? o.locale = i : mt(i) && (a = i), mt(s) && (a = s), [o.key || "", r, o, a];
}
function Js(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const Lu = (e) => e, Ru = (e) => "", Pu = "text", Eu = (e) => e.length === 0 ? "" : Zi(e), Au = Cc;
function Qs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Iu(e) {
  const t = Bt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Bt(e.named.count) || Bt(e.named.n)) ? Bt(e.named.count) ? e.named.count : Bt(e.named.n) ? e.named.n : t : t;
}
function Ou(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function zu(e = {}) {
  const t = e.locale, n = Iu(e), i = pt(e.pluralRules) && Z(t) && Rt(e.pluralRules[t]) ? e.pluralRules[t] : Qs, s = pt(e.pluralRules) && Z(t) && Rt(e.pluralRules[t]) ? Qs : void 0, o = (p) => p[i(n, p.length, s)], a = e.list || [], r = (p) => a[p], l = e.named || bt();
  Bt(e.pluralIndex) && Ou(n, l);
  const c = (p) => l[p];
  function d(p, _) {
    const v = Rt(e.messages) ? e.messages(p, !!_) : pt(e.messages) ? e.messages[p] : !1;
    return v || (e.parent ? e.parent.message(p) : Ru);
  }
  const m = (p) => e.modifiers ? e.modifiers[p] : Lu, y = mt(e.processor) && Rt(e.processor.normalize) ? e.processor.normalize : Eu, w = mt(e.processor) && Rt(e.processor.interpolate) ? e.processor.interpolate : Au, C = mt(e.processor) && Z(e.processor.type) ? e.processor.type : Pu, x = {
    list: r,
    named: c,
    plural: o,
    linked: (p, ..._) => {
      const [v, b] = _;
      let O = "text", D = "";
      _.length === 1 ? pt(v) ? (D = v.modifier || D, O = v.type || O) : Z(v) && (D = v || D) : _.length === 2 && (Z(v) && (D = v || D), Z(b) && (O = b || O));
      const M = d(p, !0)(x), V = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && zt(M) && D ? M[0] : M
      );
      return D ? m(D)(V, O) : V;
    },
    message: d,
    type: C,
    interpolate: w,
    normalize: y,
    values: jt(bt(), a, l)
  };
  return x;
}
const to = () => "", xe = (e) => Rt(e);
function eo(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = Ai(...t), d = Ot(c.missingWarn) ? c.missingWarn : e.missingWarn, m = Ot(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, y = Ot(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, w = !!c.resolvedMessage, C = Z(c.default) || Ot(c.default) ? Ot(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, f = n || C != null && (Z(C) || Rt(C)), x = Qi(e, c);
  y && Du(c);
  let [p, _, v] = w ? [
    l,
    x,
    r[x] || bt()
  ] : ra(e, l, x, a, m, d), b = p, O = l;
  if (!w && !(Z(b) || me(b) || xe(b)) && f && (b = C, O = b), !w && (!(Z(b) || me(b) || xe(b)) || !Z(_)))
    return s ? si : l;
  let D = !1;
  const M = () => {
    D = !0;
  }, V = xe(b) ? b : la(e, l, _, b, O, M);
  if (D)
    return b;
  const K = $u(e, _, v, c), tt = zu(K), ot = Nu(e, V, tt);
  let st = i ? i(ot, l) : ot;
  return y && Z(st) && (st = kc(st)), st;
}
function Du(e) {
  zt(e.list) ? e.list = e.list.map((t) => Z(t) ? Ds(t) : t) : pt(e.named) && Object.keys(e.named).forEach((t) => {
    Z(e.named[t]) && (e.named[t] = Ds(e.named[t]));
  });
}
function ra(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, d = c(e, i, n);
  let m = bt(), y, w = null;
  const C = "translate";
  for (let f = 0; f < d.length && (y = d[f], m = a[y] || bt(), (w = l(m, t)) === null && (w = m[t]), !(Z(w) || me(w) || xe(w))); f++)
    if (!Mu(y, d)) {
      const x = ts(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        y,
        o,
        C
      );
      x !== t && (w = x);
    }
  return [w, y, m];
}
function la(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (xe(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => i;
    return c.locale = n, c.key = t, c;
  }
  const l = a(i, Wu(e, n, s, i, r, o));
  return l.locale = n, l.key = t, l.source = i, l;
}
function Nu(e, t, n) {
  return t(n);
}
function Ai(...e) {
  const [t, n, i] = e, s = bt();
  if (!Z(t) && !Bt(t) && !xe(t) && !me(t))
    throw ve(we.INVALID_ARGUMENT);
  const o = Bt(t) ? String(t) : (xe(t), t);
  return Bt(n) ? s.plural = n : Z(n) ? s.default = n : mt(n) && !ni(n) ? s.named = n : zt(n) && (s.list = n), Bt(i) ? s.plural = i : Z(i) ? s.default = i : mt(i) && jt(s, i), [o, s];
}
function Wu(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => wc(t, n, a)
  };
}
function $u(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: d } = e, y = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (w, C) => {
      let f = a(n, w);
      if (f == null && (d || C)) {
        const [, , x] = ra(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          w,
          t,
          r,
          l,
          c
        );
        f = a(x, w);
      }
      if (Z(f) || me(f)) {
        let x = !1;
        const _ = la(e, w, t, f, w, () => {
          x = !0;
        });
        return x ? to : _;
      } else return xe(f) ? f : to;
    }
  };
  return e.processor && (y.processor = e.processor), i.list && (y.list = i.list), i.named && (y.named = i.named), Bt(i.plural) && (y.pluralIndex = i.plural), y;
}
Zc();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Fu = "11.2.2";
function Bu() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (jn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (jn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const en = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ru,
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
function _n(e, ...t) {
  return ii(e, null, void 0);
}
const Ii = /* @__PURE__ */ He("__translateVNode"), Oi = /* @__PURE__ */ He("__datetimeParts"), zi = /* @__PURE__ */ He("__numberParts"), Hu = He("__setPluralRules"), ca = /* @__PURE__ */ He("__injectWithOption"), Di = /* @__PURE__ */ He("__dispose");
function Sn(e) {
  if (!pt(e) || me(e))
    return e;
  for (const t in e)
    if (le(e, t))
      if (!t.includes("."))
        pt(e[t]) && Sn(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = bt()), !pt(s[n[a]])) {
            o = !0;
            break;
          }
          s = s[n[a]];
        }
        if (o || (me(s) ? Qo.includes(n[i]) || delete e[t] : (s[n[i]] = e[t], delete e[t])), !me(s)) {
          const a = s[n[i]];
          pt(a) && Sn(a);
        }
      }
  return e;
}
function ua(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = mt(n) ? n : zt(i) ? bt() : { [e]: bt() };
  if (zt(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || bt(), Un(c, a[l])) : Un(c, a);
    } else
      Z(r) && Un(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      le(a, r) && Sn(a[r]);
  return a;
}
function ju(e) {
  return e.type;
}
function Uu(e, t, n) {
  let i = pt(t.messages) ? t.messages : bt();
  "__i18nGlobal" in n && (i = ua(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, i[o]);
  });
  {
    if (pt(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (pt(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function no(e) {
  return k(sr, null, e, 0);
}
function ha() {
  return "currentInstance" in fi ? fi["currentInstance"] : fi.getCurrentInstance();
}
const io = () => [], Vu = () => !1;
let so = 0;
function oo(e) {
  return (t, n, i, s) => e(n, i, ha() || void 0, s);
}
function Yu(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = Os ? J : ir;
  let a = Ot(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : Z(e.locale) ? e.locale : qn
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : Z(e.fallbackLocale) || zt(e.fallbackLocale) || mt(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(ua(r.value, e)), d = o(mt(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), m = o(mt(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let y = t ? t.missingWarn : Ot(e.missingWarn) || Zn(e.missingWarn) ? e.missingWarn : !0, w = t ? t.fallbackWarn : Ot(e.fallbackWarn) || Zn(e.fallbackWarn) ? e.fallbackWarn : !0, C = t ? t.fallbackRoot : Ot(e.fallbackRoot) ? e.fallbackRoot : !0, f = !!e.fallbackFormat, x = Rt(e.missing) ? e.missing : null, p = Rt(e.missing) ? oo(e.missing) : null, _ = Rt(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : Ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const O = t ? t.modifiers : mt(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || t && t.pluralRules, M;
  M = (() => {
    i && Gs(null);
    const S = {
      version: Fu,
      locale: r.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: O,
      pluralRules: D,
      missing: p === null ? void 0 : p,
      missingWarn: y,
      fallbackWarn: w,
      fallbackFormat: f,
      unresolving: !0,
      postTranslation: _ === null ? void 0 : _,
      warnHtmlMessage: v,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = d.value, S.numberFormats = m.value, S.__datetimeFormatters = mt(M) ? M.__datetimeFormatters : void 0, S.__numberFormatters = mt(M) ? M.__numberFormatters : void 0;
    const W = Cu(S);
    return i && Gs(W), W;
  })(), fn(M, r.value, l.value);
  function K() {
    return [
      r.value,
      l.value,
      c.value,
      d.value,
      m.value
    ];
  }
  const tt = Y({
    get: () => r.value,
    set: (S) => {
      M.locale = S, r.value = S;
    }
  }), ot = Y({
    get: () => l.value,
    set: (S) => {
      M.fallbackLocale = S, l.value = S, fn(M, r.value, S);
    }
  }), st = Y(() => c.value), ht = /* @__PURE__ */ Y(() => d.value), St = /* @__PURE__ */ Y(() => m.value);
  function ut() {
    return Rt(_) ? _ : null;
  }
  function et(S) {
    _ = S, M.postTranslation = S;
  }
  function ct() {
    return x;
  }
  function yt(S) {
    S !== null && (p = oo(S)), x = S, M.missing = p;
  }
  const gt = (S, W, ft, dt, te, Ve) => {
    K();
    let be;
    try {
      i || (M.fallbackContext = t ? Su() : void 0), be = S(M);
    } finally {
      i || (M.fallbackContext = void 0);
    }
    if (ft !== "translate exists" && // for not `te` (e.g `t`)
    Bt(be) && be === si || ft === "translate exists" && !be) {
      const [cn, ci] = W();
      return t && C ? dt(t) : te(cn);
    } else {
      if (Ve(be))
        return be;
      throw _n(en.UNEXPECTED_RETURN_TYPE);
    }
  };
  function j(...S) {
    return gt((W) => Reflect.apply(eo, null, [W, ...S]), () => Ai(...S), "translate", (W) => Reflect.apply(W.t, W, [...S]), (W) => W, (W) => Z(W));
  }
  function xt(...S) {
    const [W, ft, dt] = S;
    if (dt && !pt(dt))
      throw _n(en.INVALID_ARGUMENT);
    return j(W, ft, jt({ resolvedMessage: !0 }, dt || {}));
  }
  function X(...S) {
    return gt((W) => Reflect.apply(Ks, null, [W, ...S]), () => Pi(...S), "datetime format", (W) => Reflect.apply(W.d, W, [...S]), () => Vs, (W) => Z(W) || zt(W));
  }
  function At(...S) {
    return gt((W) => Reflect.apply(qs, null, [W, ...S]), () => Ei(...S), "number format", (W) => Reflect.apply(W.n, W, [...S]), () => Vs, (W) => Z(W) || zt(W));
  }
  function Wt(S) {
    return S.map((W) => Z(W) || Bt(W) || Ot(W) ? no(String(W)) : W);
  }
  const Lt = {
    normalize: Wt,
    interpolate: (S) => S,
    type: "vnode"
  };
  function Ct(...S) {
    return gt((W) => {
      let ft;
      const dt = W;
      try {
        dt.processor = Lt, ft = Reflect.apply(eo, null, [dt, ...S]);
      } finally {
        dt.processor = null;
      }
      return ft;
    }, () => Ai(...S), "translate", (W) => W[Ii](...S), (W) => [no(W)], (W) => zt(W));
  }
  function Ht(...S) {
    return gt((W) => Reflect.apply(qs, null, [W, ...S]), () => Ei(...S), "number format", (W) => W[zi](...S), io, (W) => Z(W) || zt(W));
  }
  function Yt(...S) {
    return gt((W) => Reflect.apply(Ks, null, [W, ...S]), () => Pi(...S), "datetime format", (W) => W[Oi](...S), io, (W) => Z(W) || zt(W));
  }
  function Zt(S) {
    D = S, M.pluralRules = D;
  }
  function N(S, W) {
    return gt(() => {
      if (!S)
        return !1;
      const ft = Z(W) ? W : r.value, dt = Tt(ft), te = M.messageResolver(dt, S);
      return me(te) || xe(te) || Z(te);
    }, () => [S], "translate exists", (ft) => Reflect.apply(ft.te, ft, [S, W]), Vu, (ft) => Ot(ft));
  }
  function lt(S) {
    let W = null;
    const ft = ta(M, l.value, r.value);
    for (let dt = 0; dt < ft.length; dt++) {
      const te = c.value[ft[dt]] || {}, Ve = M.messageResolver(te, S);
      if (Ve != null) {
        W = Ve;
        break;
      }
    }
    return W;
  }
  function wt(S) {
    const W = lt(S);
    return W ?? (t ? t.tm(S) || {} : {});
  }
  function Tt(S) {
    return c.value[S] || {};
  }
  function Mt(S, W) {
    if (s) {
      const ft = { [S]: W };
      for (const dt in ft)
        le(ft, dt) && Sn(ft[dt]);
      W = ft[S];
    }
    c.value[S] = W, M.messages = c.value;
  }
  function Pt(S, W) {
    c.value[S] = c.value[S] || {};
    const ft = { [S]: W };
    if (s)
      for (const dt in ft)
        le(ft, dt) && Sn(ft[dt]);
    W = ft[S], Un(W, c.value[S]), M.messages = c.value;
  }
  function R(S) {
    return d.value[S] || {};
  }
  function u(S, W) {
    d.value[S] = W, M.datetimeFormats = d.value, Zs(M, S, W);
  }
  function g(S, W) {
    d.value[S] = jt(d.value[S] || {}, W), M.datetimeFormats = d.value, Zs(M, S, W);
  }
  function P(S) {
    return m.value[S] || {};
  }
  function $(S, W) {
    m.value[S] = W, M.numberFormats = m.value, Js(M, S, W);
  }
  function it(S, W) {
    m.value[S] = jt(m.value[S] || {}, W), M.numberFormats = m.value, Js(M, S, W);
  }
  so++, t && Os && (De(t.locale, (S) => {
    a && (r.value = S, M.locale = S, fn(M, r.value, l.value));
  }), De(t.fallbackLocale, (S) => {
    a && (l.value = S, M.fallbackLocale = S, fn(M, r.value, l.value));
  }));
  const Q = {
    id: so,
    locale: tt,
    fallbackLocale: ot,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(S) {
      a = S, S && t && (r.value = t.locale.value, l.value = t.fallbackLocale.value, fn(M, r.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: st,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return D || {};
    },
    get isGlobal() {
      return i;
    },
    get missingWarn() {
      return y;
    },
    set missingWarn(S) {
      y = S, M.missingWarn = y;
    },
    get fallbackWarn() {
      return w;
    },
    set fallbackWarn(S) {
      w = S, M.fallbackWarn = w;
    },
    get fallbackRoot() {
      return C;
    },
    set fallbackRoot(S) {
      C = S;
    },
    get fallbackFormat() {
      return f;
    },
    set fallbackFormat(S) {
      f = S, M.fallbackFormat = f;
    },
    get warnHtmlMessage() {
      return v;
    },
    set warnHtmlMessage(S) {
      v = S, M.warnHtmlMessage = S;
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(S) {
      b = S, M.escapeParameter = S;
    },
    t: j,
    getLocaleMessage: Tt,
    setLocaleMessage: Mt,
    mergeLocaleMessage: Pt,
    getPostTranslationHandler: ut,
    setPostTranslationHandler: et,
    getMissingHandler: ct,
    setMissingHandler: yt,
    [Hu]: Zt
  };
  return Q.datetimeFormats = ht, Q.numberFormats = St, Q.rt = xt, Q.te = N, Q.tm = wt, Q.d = X, Q.n = At, Q.getDateTimeFormat = R, Q.setDateTimeFormat = u, Q.mergeDateTimeFormat = g, Q.getNumberFormat = P, Q.setNumberFormat = $, Q.mergeNumberFormat = it, Q[ca] = n, Q[Ii] = Ct, Q[Oi] = Yt, Q[zi] = Ht, Q;
}
const es = {
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
function Gu({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Xt ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, bt());
}
function da() {
  return Xt;
}
jt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Bt(e) || !isNaN(e)
  }
}, es);
function Xu(e) {
  return zt(e) && !Z(e[0]);
}
function fa(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = bt();
    e.locale && (a.locale = e.locale), Z(e.format) ? a.key = e.format : pt(e.format) && (Z(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((y, w) => n.includes(w) ? jt(bt(), y, { [w]: e.format[w] }) : y, bt()));
    const l = i(e.value, a, r);
    let c = [a.key];
    zt(l) ? c = l.map((y, w) => {
      const C = s[y.type], f = C ? C({ [y.type]: y.value, index: w, parts: l }) : [y.value];
      return Xu(f) && (f[0].key = `${y.type}-${w}`), f;
    }) : Z(l) && (c = [l]);
    const d = jt(bt(), o), m = Z(e.tag) || pt(e.tag) ? e.tag : da();
    return So(m, d, c);
  };
}
jt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, es);
const Ku = /* @__PURE__ */ He("global-vue-i18n");
function Ln(e = {}) {
  const t = ha();
  if (t == null)
    throw _n(en.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw _n(en.NOT_INSTALLED);
  const n = Zu(t), i = Ju(n), s = ju(t), o = qu(e, s);
  if (o === "global")
    return Uu(i, e, s), i;
  if (o === "parent") {
    let l = Qu(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = jt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = Yu(l), a.__composerExtend && (r[Di] = a.__composerExtend(r)), eh(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function Zu(e) {
  const t = Te(e.isCE ? Ku : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw _n(e.isCE ? en.NOT_INSTALLED_WITH_PROVIDE : en.UNEXPECTED_ERROR);
  return t;
}
function qu(e, t) {
  return ni(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ju(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Qu(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = th(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[ca] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function th(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function eh(e, t, n) {
  an(() => {
  }, t), Fi(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Di];
    s && (s(), delete i[Di]);
  }, t);
}
jt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, es);
Bu();
bu(au);
ku(wu);
_u(ta);
const nh = { class: "toolbar-panel first-panel" }, ih = { class: "tool-section" }, sh = ["onClick", "title", "aria-pressed"], oh = { class: "action-section" }, ah = ["disabled", "title"], rh = ["disabled", "title"], lh = ["disabled", "title"], ch = ["title"], uh = ["title"], hh = ["title"], dh = {
  key: 0,
  class: "toolbar-panel second-panel"
}, fh = { class: "style-section" }, gh = {
  key: 0,
  class: "style-group"
}, mh = { class: "style-label" }, ph = { class: "line-width-selector" }, yh = ["onClick", "title", "aria-pressed"], wh = { class: "style-value" }, vh = {
  key: 1,
  class: "style-divider"
}, xh = {
  key: 2,
  class: "style-group opacity-group"
}, bh = { class: "style-label" }, kh = ["value", "title", "aria-label"], _h = { class: "style-value" }, Sh = {
  key: 3,
  class: "style-divider"
}, Ch = {
  key: 4,
  class: "style-group color-picker-group"
}, Th = { class: "style-label" }, Mh = { class: "color-row" }, Lh = ["onClick", "title", "aria-pressed"], Rh = { class: "custom-color-wrapper" }, Ph = ["title"], Eh = ["value", "title", "aria-label"], Ah = {
  key: 5,
  class: "style-group"
}, Ih = { class: "style-label" }, Oh = { class: "text-size-selector" }, zh = ["onClick", "title", "aria-pressed"], Dh = { class: "style-value" }, Nh = {
  key: 6,
  class: "style-group"
}, Wh = { class: "style-label" }, $h = { class: "mosaic-size-selector" }, Fh = ["onClick", "title", "aria-pressed"], Bh = { class: "style-value" }, Hh = {
  key: 7,
  class: "style-group"
}, jh = { class: "style-label" }, Uh = { class: "translate-engine-selector" }, Vh = ["onClick", "title", "aria-pressed"], Yh = /* @__PURE__ */ Dt({
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
    const i = J(null), { t: s } = Ln(), o = e, a = n, r = Y(() => [
      { type: T.Select, icon: lc, title: s("screenshot.select") },
      { type: T.Rectangle, icon: uc, title: s("screenshot.rectangle") },
      { type: T.Ellipse, icon: gc, title: s("screenshot.ellipse") },
      { type: T.Line, icon: Ho, title: s("screenshot.line") },
      { type: T.Arrow, icon: ec, title: s("screenshot.arrow") },
      { type: T.Pen, icon: pc, title: s("screenshot.pen") },
      { type: T.Mosaic, icon: rc, title: s("screenshot.mosaic") },
      { type: T.Text, icon: sc, title: s("screenshot.text") },
      { type: T.ColorPicker, icon: As, title: s("screenshot.colorPicker") },
      { type: T.Ocr, icon: Hn, title: s("screenshot.ocr") },
      { type: T.Translate, icon: jo, title: s("screenshot.translate") },
      { type: T.Pin, icon: Mi, title: s("screenshot.pin") }
    ]), l = Y(() => [
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
    ], m = [12, 14, 16, 18, 20, 24], y = [8, 12, 16, 20], w = Y(() => ![T.Select, T.ColorPicker, T.Ocr, T.Pin].includes(o.currentTool)), C = Y(
      () => [T.Rectangle, T.Ellipse, T.Line, T.Arrow, T.Pen].includes(o.currentTool)
    ), f = Y(
      () => [T.Rectangle, T.Ellipse, T.Line, T.Arrow, T.Pen, T.Text].includes(o.currentTool)
    ), x = Y(
      () => [
        T.Rectangle,
        T.Ellipse,
        T.Line,
        T.Arrow,
        T.Pen,
        T.Mosaic,
        T.Text
      ].includes(o.currentTool)
    ), p = Y(() => o.currentTool === T.Text), _ = Y(() => o.currentTool === T.Mosaic), v = Y(() => o.currentTool === T.Translate), b = (j) => a("tool-select", j), O = (j) => a("color-change", j), D = (j) => a("line-width-change", j), M = (j) => {
      a("opacity-change", Number(j.target.value) / 100);
    }, V = (j) => a("text-size-change", j), K = (j) => a("mosaic-size-change", j), tt = () => a("undo"), ot = () => a("redo"), st = () => a("delete"), ht = () => a("save"), St = () => a("confirm"), ut = () => a("cancel"), et = (j) => {
      a("translate-engine-change", j);
    }, ct = (j) => {
      O(j);
    }, yt = (j) => {
      const xt = j.target;
      xt.value && O(xt.value);
    }, gt = () => {
      const j = i.value?.getBoundingClientRect();
      return {
        width: j?.width ?? 590,
        height: j?.height ?? 50
      };
    };
    return De(() => o.currentTool, () => {
      vn(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: gt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: gt
    }), (j, xt) => (B(), G(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        nt(" 第一个面板：工具选择 + 操作按钮 "),
        A("div", nh, [
          nt(" 工具选择区域 "),
          A("div", ih, [
            (B(!0), G(
              Xt,
              null,
              ge(r.value, (X) => (B(), G("button", {
                key: X.type,
                onClick: (At) => b(X.type),
                class: _t(["tool-btn", { active: j.currentTool === X.type }]),
                title: X.title,
                "aria-pressed": j.currentTool === X.type
              }, [
                (B(), Ft(Ce(X.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, sh))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          nt(" 分隔线 "),
          xt[0] || (xt[0] = A(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          nt(" 操作按钮区域 "),
          A("div", oh, [
            A("button", {
              onClick: tt,
              disabled: !j.canUndo,
              class: "action-btn undo",
              title: z(s)("screenshot.undo")
            }, [
              k(z(fc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ah),
            A("button", {
              onClick: ot,
              disabled: !j.canRedo,
              class: "action-btn redo",
              title: z(s)("screenshot.redo")
            }, [
              k(z(oc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, rh),
            A("button", {
              onClick: st,
              disabled: !j.canDelete,
              class: "action-btn delete",
              title: z(s)("screenshot.delete")
            }, [
              k(z(nc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, lh),
            A("button", {
              onClick: ut,
              class: "action-btn cancel",
              title: z(s)("screenshot.cancel")
            }, [
              k(z(Ti), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ch),
            A("button", {
              onClick: ht,
              class: "action-btn save",
              title: z(s)("screenshot.save")
            }, [
              k(z(ic), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, uh),
            A("button", {
              onClick: St,
              class: "action-btn confirm",
              title: z(s)("screenshot.confirm")
            }, [
              k(z(Ci), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, hh)
          ])
        ]),
        nt(" 第二个面板：样式设置区域 "),
        w.value ? (B(), G("div", dh, [
          A("div", fh, [
            nt(" 线宽设置 "),
            C.value ? (B(), G("div", gh, [
              A(
                "span",
                mh,
                at(z(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              A("div", ph, [
                (B(), G(
                  Xt,
                  null,
                  ge(c, (X) => A("button", {
                    key: X,
                    onClick: (At) => D(X),
                    class: _t(["width-btn", { active: j.currentLineWidth === X }]),
                    title: `${X}px`,
                    "aria-pressed": j.currentLineWidth === X
                  }, [
                    A(
                      "span",
                      {
                        class: "line-preview",
                        style: It({ height: `${X}px`, backgroundColor: j.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, yh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                wh,
                at(j.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            C.value && f.value ? (B(), G("div", vh)) : nt("v-if", !0),
            nt(" 不透明度设置 "),
            x.value ? (B(), G("div", xh, [
              A(
                "span",
                bh,
                at(z(s)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              A("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(j.currentOpacity * 100),
                style: It({
                  "--opacity-color": j.currentColor,
                  "--opacity-progress": `${Math.round(j.currentOpacity * 100)}%`
                }),
                title: `${Math.round(j.currentOpacity * 100)}%`,
                "aria-label": z(s)("screenshot.opacity"),
                onInput: M
              }, null, 44, kh),
              A(
                "span",
                _h,
                at(Math.round(j.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            x.value && f.value ? (B(), G("div", Sh)) : nt("v-if", !0),
            nt(" 颜色设置 "),
            f.value ? (B(), G("div", Ch, [
              A(
                "span",
                Th,
                at(z(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              A("div", Mh, [
                (B(), G(
                  Xt,
                  null,
                  ge(d, (X) => A("button", {
                    key: X,
                    onClick: (At) => ct(X),
                    class: _t(["color-btn", { active: j.currentColor === X }]),
                    style: It({ backgroundColor: X }),
                    title: X,
                    "aria-pressed": j.currentColor === X
                  }, null, 14, Lh)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                A("div", Rh, [
                  A("button", {
                    class: _t(["color-btn custom-color-btn", { active: !d.includes(j.currentColor) }]),
                    title: z(s)("screenshot.customColor")
                  }, [
                    k(z(As), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Ph),
                  A("input", {
                    type: "color",
                    onChange: yt,
                    value: j.currentColor,
                    class: "color-input-hidden",
                    title: z(s)("screenshot.customColor"),
                    "aria-label": z(s)("screenshot.customColor")
                  }, null, 40, Eh)
                ])
              ])
            ])) : nt("v-if", !0),
            nt(" 文字大小设置 "),
            p.value ? (B(), G("div", Ah, [
              A(
                "span",
                Ih,
                at(z(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              A("div", Oh, [
                (B(), G(
                  Xt,
                  null,
                  ge(m, (X) => A("button", {
                    key: X,
                    onClick: (At) => V(X),
                    class: _t(["size-btn", { active: j.currentTextSize === X }]),
                    title: `${X}px`,
                    "aria-pressed": j.currentTextSize === X
                  }, [
                    A(
                      "span",
                      {
                        class: "size-text",
                        style: It({ fontSize: `${Math.min(X, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, zh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Dh,
                at(j.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            nt(" 马赛克大小设置 "),
            _.value ? (B(), G("div", Nh, [
              A(
                "span",
                Wh,
                at(z(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              A("div", $h, [
                (B(), G(
                  Xt,
                  null,
                  ge(y, (X) => A("button", {
                    key: X,
                    onClick: (At) => K(X),
                    class: _t(["size-btn", { active: j.currentMosaicSize === X }]),
                    title: `${z(s)("screenshot.brush")} ${X * 3}px`,
                    "aria-pressed": j.currentMosaicSize === X
                  }, [
                    A(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: It({
                          width: `${Math.min(X * 1.25, 18)}px`,
                          height: `${Math.min(X * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Fh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Bh,
                at(j.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            nt(" 翻译引擎选择 "),
            v.value ? (B(), G("div", Hh, [
              A(
                "span",
                jh,
                at(z(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              A("div", Uh, [
                (B(!0), G(
                  Xt,
                  null,
                  ge(l.value, (X) => (B(), G("button", {
                    key: X.value,
                    onClick: (At) => et(X.value),
                    class: _t(["engine-btn", { active: j.currentTranslateEngine === X.value }]),
                    title: X.label,
                    "aria-pressed": j.currentTranslateEngine === X.value
                  }, at(X.short), 11, Vh))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : nt("v-if", !0)
          ])
        ])) : nt("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), oi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, Gh = /* @__PURE__ */ oi(Yh, [["__scopeId", "data-v-dc3e37ec"]]), Xh = {
  class: "screenshot-container",
  ref: "containerRef"
}, Kh = {
  key: 0,
  class: "mask-layers"
}, Zh = {
  key: 1,
  class: "mask-full"
}, qh = { class: "size-text" }, Jh = {
  key: 4,
  class: "loading-overlay"
}, Qh = /* @__PURE__ */ Dt({
  __name: "index",
  setup(e) {
    const t = J(), n = J(), i = J(null), s = J(null);
    let o = null;
    const a = J(!0), r = J(!1), l = J(""), c = J({ x: 0, y: 0 }), d = J(16), m = J(!1), y = J("bing"), w = J({ width: 590, height: 50 });
    let C = !1;
    const f = J({
      selectionRect: null,
      annotations: [],
      currentTool: T.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
      textSize: 16,
      mosaicSize: 8,
      hasSelection: !1,
      hasAnnotations: !1,
      canRedo: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), x = J(), p = J(), _ = J(), v = Y(() => f.value.isDrawing), b = Y(() => {
      if (!f.value.selectionRect) return {};
      const { y: R } = f.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${R}px`
      };
    }), O = Y(() => {
      if (!f.value.selectionRect) return {};
      const { y: R, height: u } = f.value.selectionRect;
      return {
        top: `${R + u}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), D = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: R, y: u, height: g } = f.value.selectionRect;
      return {
        top: `${u}px`,
        left: "0",
        width: `${R}px`,
        height: `${g}px`
      };
    }), M = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: R, y: u, width: g, height: P } = f.value.selectionRect;
      return {
        top: `${u}px`,
        left: `${R + g}px`,
        right: "0",
        height: `${P}px`
      };
    }), V = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: R, y: u, width: g, height: P } = f.value.selectionRect, $ = 10, it = 12, Q = Math.min(w.value.width, Math.max(0, window.innerWidth - $ * 2)), S = Math.min(w.value.height, Math.max(0, window.innerHeight - $ * 2)), W = Math.max($, window.innerHeight - S - $), ft = Math.max($, window.innerWidth - Q - $);
      let dt;
      return u + P + S + it <= window.innerHeight - $ ? dt = u + P + it : u - S - it >= $ ? dt = u - S - it : dt = u + P - S - $, dt = Math.min(Math.max(dt, $), W), {
        left: `${Math.min(Math.max(R + (g - Q) / 2, $), ft)}px`,
        top: `${dt}px`
      };
    }), K = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: R, y: u, width: g, height: P } = f.value.selectionRect, $ = 10;
      let it = R - $, Q = u - $, S = "translateY(-100%)";
      return it < 10 && (it = R + g + $, S = "translateY(-100%)"), Q < 30 && (Q = u + P + $, S = "translateY(0)"), {
        left: `${it}px`,
        top: `${Q}px`,
        transform: S
      };
    }), tt = Y(() => {
      if (!f.value.selectionRect) return "";
      const { width: R, height: u } = f.value.selectionRect;
      return `${Math.round(R)} × ${Math.round(u)}`;
    }), ot = Y(() => {
      const R = Ke(c.value);
      return {
        "--text-accent-color": f.value.currentStyle.color,
        left: `${R.x}px`,
        top: `${R.y}px`
      };
    }), st = (R) => {
      if (R === T.Pin && f.value.selectionRect) {
        ht();
        return;
      }
      if (R === T.Ocr && f.value.selectionRect) {
        St();
        return;
      }
      o?.setTool(R);
    }, ht = async () => {
      try {
        await o?.createPinWindow();
      } catch (R) {
        H.error("[截图] 创建贴图失败", R);
      }
    }, St = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (R) {
        H.error("[截图] 创建文字识别贴图失败", R);
      }
    }, ut = (R) => {
      o?.updateStyle({ color: R });
    }, et = (R) => {
      o?.updateStyle({ lineWidth: R });
    }, ct = (R) => {
      o?.updateStyle({ opacity: R });
    }, yt = (R) => {
      o?.updateTextSize(R);
    }, gt = (R) => {
      o?.updateMosaicSize(R);
    }, j = (R) => {
      y.value = R, o?.setTranslationEngine(R), o?.executeTranslation();
    }, xt = () => {
      o?.undoAnnotation();
    }, X = () => {
      o?.redoAnnotation();
    }, At = () => {
      o?.deleteSelectedAnnotation();
    }, Wt = async () => {
      try {
        await o?.processScreenshot("save"), wt();
      } catch (R) {
        const u = R?.message || R?.toString() || "保存失败";
        if (u.includes("保存已取消") || u.includes("cancelled"))
          return;
        H.error("保存截图时发生错误", u);
      }
    }, Kt = async () => {
      try {
        await o?.processScreenshot("copy"), wt();
      } catch {
      }
    }, Lt = () => {
      wt();
    };
    let Ct = null;
    const Ht = (R, u) => {
      if (u && u.getData().type === "text") {
        const g = u.getData();
        c.value = {
          x: g.points[0].x,
          y: g.points[0].y
        }, d.value = g.fontSize || f.value.textSize;
      } else
        c.value = R, d.value = f.value.textSize;
      r.value = !0, Ct = u || null, u && o?.setEditingAnnotation(u), u && u.getData().text ? l.value = u.getData().text : l.value = "", vn(() => {
        n.value?.focus(), Ct && n.value?.select();
      });
    }, Yt = () => {
      l.value.trim() ? Ct ? o?.updateTextAnnotation(Ct, l.value) : o?.createTextAnnotation(c.value, l.value) : Ct && o?.deleteAnnotation(Ct), Zt();
    }, Zt = () => {
      r.value = !1, l.value = "", Ct && o?.clearEditingAnnotation(), Ct = null;
    }, N = (R) => {
      navigator.clipboard && navigator.clipboard.writeText(R.hex).catch((u) => {
        H.error("[截图] 复制颜色到剪贴板失败", u);
      });
    }, lt = (R) => {
      if (R.key === "Meta" || R.key === "Win" || R.altKey && R.key === "Tab" || R.altKey && R.key === "F4") {
        R.preventDefault(), R.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (R.key === "Escape") {
          Zt(), R.preventDefault();
          return;
        }
        if (R.key === "Enter") {
          Yt(), R.preventDefault();
          return;
        }
        if (R.key === "Tab") {
          R.preventDefault();
          return;
        }
        return;
      }
      if (!f.value.selectionRect) {
        if (R.key === "Escape") {
          wt();
          return;
        }
        R.preventDefault(), R.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(R)) {
        R.preventDefault();
        return;
      }
      const u = navigator.platform.toLowerCase().includes("mac");
      if ((u ? R.metaKey : R.ctrlKey) && R.key.toLowerCase() === "z") {
        R.shiftKey ? X() : xt(), R.preventDefault();
        return;
      }
      if (!u && R.ctrlKey && R.key.toLowerCase() === "y") {
        X(), R.preventDefault();
        return;
      }
      if (R.key === "Escape") {
        wt();
        return;
      } else if (R.key === "Delete" || R.key === "Backspace") {
        At(), R.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(R.key) || R.preventDefault();
    }, wt = async () => {
      if (!C) {
        C = !0, o?.destroy(), o = null;
        try {
          await E("cleanup_screenshot_resources");
        } catch {
          try {
            await E("clear_screenshot_background");
          } catch (u) {
            H.error("[截图] 清理后台缓存失败", u);
          }
        }
        f.value = {
          selectionRect: null,
          annotations: [],
          currentTool: T.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", Ct = null, m.value = !1, a.value = !0;
        try {
          await E("close_and_destroy_screenshot_window");
        } catch (R) {
          H.error("[截图] 销毁截图窗口失败，回退到 close()", R), await s.value?.close();
        } finally {
          C = !1;
        }
      }
    }, Tt = () => {
      const R = o?.getState();
      R && (f.value = R);
    }, Mt = () => {
      const R = i.value?.getToolbarSize?.();
      R && (w.value = R);
    }, Pt = (R) => {
      const u = R.detail;
      u && (w.value = u);
    };
    return an(async () => {
      if (t.value) {
        s.value = new Mn("screenshot"), await s.value.emit("screenshot_ready"), o = new Zl(
          t.value,
          Tt,
          Ht,
          N
        );
        try {
          const R = await E("get_translation_engine");
          R && ["google", "bing", "offline"].includes(R) && (y.value = R, o?.setTranslationEngine(R));
        } catch (R) {
          H.error("[截图] 获取翻译引擎设置失败", R);
        }
        try {
          const R = await E("get_offline_model_activated");
          o?.setOfflineModelActivated(R);
        } catch (R) {
          H.error("[截图] 获取离线模型激活状态失败", R);
        }
        document.addEventListener("keydown", lt), window.addEventListener("resize", Mt), window.addEventListener("screenshot-toolbar-resize", Pt), p.value = await yn("background-ready", () => {
          o?.triggerBackgroundReload();
        }), _.value = await yn("screenshot-close-requested", () => {
          wt();
        }), x.value = await yn("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const R = o?.getTranslationState();
          R?.isLoading || R?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const u = o?.getTranslationState();
              if (u?.isLoading || u?.isVisible)
                return;
              wt();
            }
          }, 100);
        }), vn(Mt);
      }
    }), Fi(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", lt), window.removeEventListener("resize", Mt), window.removeEventListener("screenshot-toolbar-resize", Pt), x.value?.(), p.value?.(), _.value?.(), x.value = void 0, p.value = void 0, _.value = void 0, s.value = null;
    }), (R, u) => (B(), G(
      "div",
      Xh,
      [
        nt(" 遮罩层 "),
        f.value.selectionRect ? (B(), G("div", Kh, [
          A(
            "div",
            {
              class: "mask-top",
              style: It(b.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-bottom",
              style: It(O.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-left",
              style: It(D.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-right",
              style: It(M.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (B(), G("div", Zh)),
        nt(" 画布 "),
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
        nt(" 尺寸信息 "),
        f.value.selectionRect && a.value ? (B(), G(
          "div",
          {
            key: 2,
            class: "size-info",
            style: It(K.value)
          },
          [
            A(
              "span",
              qh,
              at(tt.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : nt("v-if", !0),
        nt(" 工具栏 "),
        f.value.selectionRect && !v.value ? (B(), Ft(Gh, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: It(V.value),
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
          onToolSelect: st,
          onColorChange: ut,
          onLineWidthChange: et,
          onOpacityChange: ct,
          onTextSizeChange: yt,
          onMosaicSizeChange: gt,
          onTranslateEngineChange: j,
          onUndo: xt,
          onRedo: X,
          onDelete: At,
          onSave: Wt,
          onConfirm: Kt,
          onCancel: Lt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : nt("v-if", !0),
        nt(" 加载提示 - 仅在初始化时显示 "),
        m.value ? (B(), G("div", Jh, [
          u[1] || (u[1] = A(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          A(
            "p",
            null,
            at(R.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : nt("v-if", !0),
        nt(" 文字输入框 "),
        r.value ? (B(), G(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: It(ot.value)
          },
          [
            xn(A(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": u[0] || (u[0] = (g) => l.value = g),
                type: "text",
                class: "text-input",
                style: It({
                  color: f.value.currentStyle.color,
                  fontFamily: z(Xe),
                  fontSize: d.value + "px",
                  height: d.value + "px",
                  lineHeight: d.value + "px"
                }),
                onKeydown: [
                  vs(Yt, ["enter"]),
                  vs(Zt, ["escape"])
                ],
                onBlur: Yt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [or, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : nt("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), td = /* @__PURE__ */ oi(Qh, [["__scopeId", "data-v-fd4bfc80"]]), ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: td
}, Symbol.toStringTag, { value: "Module" })), ga = Symbol(), Vn = "el", nd = "is-", Pe = (e, t, n, i, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, ma = Symbol("namespaceContextKey"), id = (e) => {
  const t = e || (Qe() ? Te(ma, J(Vn)) : J(Vn));
  return Y(() => z(t) || Vn);
}, ns = (e, t) => {
  const n = id(t);
  return {
    namespace: n,
    b: (f = "") => Pe(n.value, e, f, "", ""),
    e: (f) => f ? Pe(n.value, e, "", f, "") : "",
    m: (f) => f ? Pe(n.value, e, "", "", f) : "",
    be: (f, x) => f && x ? Pe(n.value, e, f, x, "") : "",
    em: (f, x) => f && x ? Pe(n.value, e, "", f, x) : "",
    bm: (f, x) => f && x ? Pe(n.value, e, f, "", x) : "",
    bem: (f, x, p) => f && x && p ? Pe(n.value, e, f, x, p) : "",
    is: (f, ...x) => {
      const p = x.length >= 1 ? x[0] : !0;
      return f && p ? `${nd}${f}` : "";
    },
    cssVar: (f) => {
      const x = {};
      for (const p in f)
        f[p] && (x[`--${n.value}-${p}`] = f[p]);
      return x;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const x = {};
      for (const p in f)
        f[p] && (x[`--${n.value}-${e}-${p}`] = f[p]);
      return x;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const sd = Object.prototype.hasOwnProperty, ao = (e, t) => sd.call(e, t), Cn = (e) => typeof e == "function", We = (e) => typeof e == "string", pa = (e) => e !== null && typeof e == "object";
var od = typeof global == "object" && global && global.Object === Object && global, ad = typeof self == "object" && self && self.Object === Object && self, is = od || ad || Function("return this")(), nn = is.Symbol, ya = Object.prototype, rd = ya.hasOwnProperty, ld = ya.toString, gn = nn ? nn.toStringTag : void 0;
function cd(e) {
  var t = rd.call(e, gn), n = e[gn];
  try {
    e[gn] = void 0;
    var i = !0;
  } catch {
  }
  var s = ld.call(e);
  return i && (t ? e[gn] = n : delete e[gn]), s;
}
var ud = Object.prototype, hd = ud.toString;
function dd(e) {
  return hd.call(e);
}
var fd = "[object Null]", gd = "[object Undefined]", ro = nn ? nn.toStringTag : void 0;
function wa(e) {
  return e == null ? e === void 0 ? gd : fd : ro && ro in Object(e) ? cd(e) : dd(e);
}
function md(e) {
  return e != null && typeof e == "object";
}
var pd = "[object Symbol]";
function ss(e) {
  return typeof e == "symbol" || md(e) && wa(e) == pd;
}
function yd(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var os = Array.isArray, lo = nn ? nn.prototype : void 0, co = lo ? lo.toString : void 0;
function va(e) {
  if (typeof e == "string")
    return e;
  if (os(e))
    return yd(e, va) + "";
  if (ss(e))
    return co ? co.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function xa(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var wd = "[object AsyncFunction]", vd = "[object Function]", xd = "[object GeneratorFunction]", bd = "[object Proxy]";
function kd(e) {
  if (!xa(e))
    return !1;
  var t = wa(e);
  return t == vd || t == xd || t == wd || t == bd;
}
var xi = is["__core-js_shared__"], uo = function() {
  var e = /[^.]+$/.exec(xi && xi.keys && xi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function _d(e) {
  return !!uo && uo in e;
}
var Sd = Function.prototype, Cd = Sd.toString;
function Td(e) {
  if (e != null) {
    try {
      return Cd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Md = /[\\^$.*+?()[\]{}|]/g, Ld = /^\[object .+?Constructor\]$/, Rd = Function.prototype, Pd = Object.prototype, Ed = Rd.toString, Ad = Pd.hasOwnProperty, Id = RegExp(
  "^" + Ed.call(Ad).replace(Md, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Od(e) {
  if (!xa(e) || _d(e))
    return !1;
  var t = kd(e) ? Id : Ld;
  return t.test(Td(e));
}
function zd(e, t) {
  return e?.[t];
}
function ba(e, t) {
  var n = zd(e, t);
  return Od(n) ? n : void 0;
}
function Dd(e, t) {
  return e === t || e !== e && t !== t;
}
var Nd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Wd = /^\w*$/;
function $d(e, t) {
  if (os(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ss(e) ? !0 : Wd.test(e) || !Nd.test(e) || t != null && e in Object(t);
}
var Tn = ba(Object, "create");
function Fd() {
  this.__data__ = Tn ? Tn(null) : {}, this.size = 0;
}
function Bd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Hd = "__lodash_hash_undefined__", jd = Object.prototype, Ud = jd.hasOwnProperty;
function Vd(e) {
  var t = this.__data__;
  if (Tn) {
    var n = t[e];
    return n === Hd ? void 0 : n;
  }
  return Ud.call(t, e) ? t[e] : void 0;
}
var Yd = Object.prototype, Gd = Yd.hasOwnProperty;
function Xd(e) {
  var t = this.__data__;
  return Tn ? t[e] !== void 0 : Gd.call(t, e);
}
var Kd = "__lodash_hash_undefined__";
function Zd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Tn && t === void 0 ? Kd : t, this;
}
function $e(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
$e.prototype.clear = Fd;
$e.prototype.delete = Bd;
$e.prototype.get = Vd;
$e.prototype.has = Xd;
$e.prototype.set = Zd;
function qd() {
  this.__data__ = [], this.size = 0;
}
function ai(e, t) {
  for (var n = e.length; n--; )
    if (Dd(e[n][0], t))
      return n;
  return -1;
}
var Jd = Array.prototype, Qd = Jd.splice;
function tf(e) {
  var t = this.__data__, n = ai(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : Qd.call(t, n, 1), --this.size, !0;
}
function ef(e) {
  var t = this.__data__, n = ai(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function nf(e) {
  return ai(this.__data__, e) > -1;
}
function sf(e, t) {
  var n = this.__data__, i = ai(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
rn.prototype.clear = qd;
rn.prototype.delete = tf;
rn.prototype.get = ef;
rn.prototype.has = nf;
rn.prototype.set = sf;
var of = ba(is, "Map");
function af() {
  this.size = 0, this.__data__ = {
    hash: new $e(),
    map: new (of || rn)(),
    string: new $e()
  };
}
function rf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ri(e, t) {
  var n = e.__data__;
  return rf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function lf(e) {
  var t = ri(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function cf(e) {
  return ri(this, e).get(e);
}
function uf(e) {
  return ri(this, e).has(e);
}
function hf(e, t) {
  var n = ri(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function je(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
je.prototype.clear = af;
je.prototype.delete = lf;
je.prototype.get = cf;
je.prototype.has = uf;
je.prototype.set = hf;
var df = "Expected a function";
function as(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(df);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, i);
    return n.cache = o.set(s, a) || o, a;
  };
  return n.cache = new (as.Cache || je)(), n;
}
as.Cache = je;
var ff = 500;
function gf(e) {
  var t = as(e, function(i) {
    return n.size === ff && n.clear(), i;
  }), n = t.cache;
  return t;
}
var mf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pf = /\\(\\)?/g, yf = gf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(mf, function(n, i, s, o) {
    t.push(s ? o.replace(pf, "$1") : i || n);
  }), t;
});
function wf(e) {
  return e == null ? "" : va(e);
}
function vf(e, t) {
  return os(e) ? e : $d(e, t) ? [e] : yf(wf(e));
}
function xf(e) {
  if (typeof e == "string" || ss(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function bf(e, t) {
  t = vf(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[xf(t[n++])];
  return n && n == i ? e : void 0;
}
function kf(e, t, n) {
  var i = e == null ? void 0 : bf(e, t);
  return i === void 0 ? n : i;
}
function _f(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var s = e[t];
    i[s[0]] = s[1];
  }
  return i;
}
const ka = (e) => e === void 0, ho = (e) => typeof e == "boolean", Fe = (e) => typeof e == "number", Ni = (e) => typeof Element > "u" ? !1 : e instanceof Element, Sf = (e) => We(e) ? !Number.isNaN(Number(e)) : !1;
var fo;
const Ue = typeof window < "u", Cf = (e) => typeof e == "string", Tf = () => {
};
Ue && ((fo = window?.navigator) != null && fo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rs(e) {
  return typeof e == "function" ? e() : z(e);
}
function Mf(e) {
  return e;
}
function ls(e) {
  return rr() ? (lr(e), !0) : !1;
}
function Lf(e, t = !0) {
  Qe() ? an(e) : t ? e() : vn(e);
}
function _a(e, t, n = {}) {
  const {
    immediate: i = !0
  } = n, s = J(!1);
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
    }, rs(t));
  }
  return i && (s.value = !0, Ue && l()), ls(r), {
    isPending: ar(s),
    start: l,
    stop: r
  };
}
function Sa(e) {
  var t;
  const n = rs(e);
  return (t = n?.$el) != null ? t : n;
}
const Ca = Ue ? window : void 0;
function Ta(...e) {
  let t, n, i, s;
  if (Cf(e[0]) || Array.isArray(e[0]) ? ([n, i, s] = e, t = Ca) : [t, n, i, s] = e, !t)
    return Tf;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((d) => d()), o.length = 0;
  }, r = (d, m, y, w) => (d.addEventListener(m, y, w), () => d.removeEventListener(m, y, w)), l = De(() => [Sa(t), rs(s)], ([d, m]) => {
    a(), d && o.push(...n.flatMap((y) => i.map((w) => r(d, y, w, m))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return ls(c), c;
}
function Rf(e, t = !1) {
  const n = J(), i = () => n.value = !!e();
  return i(), Lf(i, t), n;
}
const go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mo = "__vueuse_ssr_handlers__";
go[mo] = go[mo] || {};
var po = Object.getOwnPropertySymbols, Pf = Object.prototype.hasOwnProperty, Ef = Object.prototype.propertyIsEnumerable, Af = (e, t) => {
  var n = {};
  for (var i in e)
    Pf.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && po)
    for (var i of po(e))
      t.indexOf(i) < 0 && Ef.call(e, i) && (n[i] = e[i]);
  return n;
};
function If(e, t, n = {}) {
  const i = n, { window: s = Ca } = i, o = Af(i, ["window"]);
  let a;
  const r = Rf(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = De(() => Sa(e), (m) => {
    l(), r.value && s && m && (a = new ResizeObserver(t), a.observe(m, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), c();
  };
  return ls(d), {
    isSupported: r,
    stop: d
  };
}
var yo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(yo || (yo = {}));
var Of = Object.defineProperty, wo = Object.getOwnPropertySymbols, zf = Object.prototype.hasOwnProperty, Df = Object.prototype.propertyIsEnumerable, vo = (e, t, n) => t in e ? Of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Nf = (e, t) => {
  for (var n in t || (t = {}))
    zf.call(t, n) && vo(e, n, t[n]);
  if (wo)
    for (var n of wo(t))
      Df.call(t, n) && vo(e, n, t[n]);
  return e;
};
const Wf = {
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
Nf({
  linear: Mf
}, Wf);
const xo = {
  current: 0
}, bo = J(0), Ma = 2e3, ko = Symbol("elZIndexContextKey"), La = Symbol("zIndexContextKey"), $f = (e) => {
  const t = Qe() ? Te(ko, xo) : xo, n = e || (Qe() ? Te(La, void 0) : void 0), i = Y(() => {
    const a = z(n);
    return Fe(a) ? a : Ma;
  }), s = Y(() => i.value + bo.value), o = () => (t.current++, bo.value = t.current, s.value);
  return !Ue && Te(ko), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Ff = {
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
const Bf = (e) => (t, n) => Hf(t, n, z(e)), Hf = (e, t, n) => kf(n, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), jf = (e) => {
  const t = Y(() => z(e).name), n = cr(e) ? e : J(e);
  return {
    lang: t,
    locale: n,
    t: Bf(e)
  };
}, Ra = Symbol("localeContextKey"), Uf = (e) => {
  const t = e || Te(Ra, J());
  return jf(Y(() => t.value || Ff));
}, Pa = "__epPropKey", Qt = (e) => e, Vf = (e) => pa(e) && !!e[Pa], Ea = (e, t) => {
  if (!pa(e) || Vf(e))
    return e;
  const { values: n, required: i, default: s, type: o, validator: a } = e, l = {
    type: o,
    required: !!i,
    validator: n || a ? (c) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), ao(e, "default") && m.push(s), d || (d = m.includes(c))), a && (d || (d = a(c))), !d && m.length > 0) {
        const y = [...new Set(m)].map((w) => JSON.stringify(w)).join(", ");
        ur(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Pa]: !0
  };
  return ao(e, "default") && (l.default = s), l;
}, ln = (e) => _f(Object.entries(e).map(([t, n]) => [
  t,
  Ea(n, t)
])), Yf = ["", "default", "small", "large"], Gf = Ea({
  type: String,
  values: Yf,
  required: !1
}), Xf = Symbol("size"), Kf = Symbol("emptyValuesContextKey"), Zf = ln({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Cn(e) ? !e() : !e
  }
}), _o = (e) => Object.keys(e), Jn = J();
function Aa(e, t = void 0) {
  return Qe() ? Te(ga, Jn) : Jn;
}
function Ia(e, t) {
  const n = Aa(), i = ns(e, Y(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || Vn;
  })), s = Uf(Y(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), o = $f(Y(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || Ma;
  })), a = Y(() => {
    var r;
    return z(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return Oa(Y(() => z(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const Oa = (e, t, n = !1) => {
  var i;
  const s = !!Qe(), o = s ? Aa() : void 0, a = (i = void 0) != null ? i : s ? hr : void 0;
  if (!a)
    return;
  const r = Y(() => {
    const l = z(e);
    return o?.value ? qf(o.value, l) : l;
  });
  return a(ga, r), a(Ra, Y(() => r.value.locale)), a(ma, Y(() => r.value.namespace)), a(La, Y(() => r.value.zIndex)), a(Xf, {
    size: Y(() => r.value.size || "")
  }), a(Kf, Y(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !Jn.value) && (Jn.value = r.value), r;
}, qf = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([..._o(e), ..._o(t)])], i = {};
  for (const s of n)
    i[s] = t[s] !== void 0 ? t[s] : e[s];
  return i;
};
var li = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
function Wi(e, t = "px") {
  if (!e)
    return "";
  if (Fe(e) || Sf(e))
    return `${e}${t}`;
  if (We(e))
    return e;
}
const za = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), Da = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Jf = ln({
  size: {
    type: Qt([Number, String])
  },
  color: {
    type: String
  }
}), Qf = Dt({
  name: "ElIcon",
  inheritAttrs: !1
}), tg = /* @__PURE__ */ Dt({
  ...Qf,
  props: Jf,
  setup(e) {
    const t = e, n = ns("icon"), i = Y(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: ka(s) ? void 0 : Wi(s),
        "--color": o
      };
    });
    return (s, o) => (B(), G("i", dr({
      class: z(n).b(),
      style: z(i)
    }, s.$attrs), [
      Ne(s.$slots, "default")
    ], 16));
  }
});
var eg = /* @__PURE__ */ li(tg, [["__file", "icon.vue"]]);
const Qn = za(eg);
/*! Element Plus Icons Vue v2.3.1 */
var ng = /* @__PURE__ */ Dt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (B(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), ig = ng, sg = /* @__PURE__ */ Dt({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (B(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Na = sg, og = /* @__PURE__ */ Dt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (B(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ag = og, rg = /* @__PURE__ */ Dt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (B(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), lg = rg, cg = /* @__PURE__ */ Dt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (B(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ug = cg;
const Wa = Qt([
  String,
  Object,
  Function
]), hg = {
  Close: Na
}, dg = {
  Close: Na
}, ti = {
  success: lg,
  warning: ug,
  error: ig,
  info: ag
}, fg = (e) => e, Yn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, gg = ln({
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
    type: Qt([String, Object, Array])
  },
  offset: {
    type: Qt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), mg = Dt({
  name: "ElBadge"
}), pg = /* @__PURE__ */ Dt({
  ...mg,
  props: gg,
  setup(e, { expose: t }) {
    const n = e, i = ns("badge"), s = Y(() => n.isDot ? "" : Fe(n.value) && Fe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = Y(() => {
      var a, r, l, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Wi(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Wi((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (B(), G("div", {
      class: _t(z(i).b())
    }, [
      Ne(a.$slots, "default"),
      k(Bi, {
        name: `${z(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Gt(() => [
          xn(A("sup", {
            class: _t([
              z(i).e("content"),
              z(i).em("content", a.type),
              z(i).is("fixed", !!a.$slots.default),
              z(i).is("dot", a.isDot),
              z(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: It(z(o))
          }, [
            Ne(a.$slots, "content", { value: z(s) }, () => [
              fr(at(z(s)), 1)
            ])
          ], 6), [
            [Gn, !a.hidden && (z(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var yg = /* @__PURE__ */ li(pg, [["__file", "badge.vue"]]);
const wg = za(yg), vg = ln({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Qt(Object)
  },
  size: Gf,
  button: {
    type: Qt(Object)
  },
  experimentalFeatures: {
    type: Qt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Qt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Zf
}), ae = {};
Dt({
  name: "ElConfigProvider",
  props: vg,
  setup(e, { slots: t }) {
    De(() => e.message, (i) => {
      Object.assign(ae, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Oa(e);
    return () => Ne(t, "default", { config: n?.value });
  }
});
const $a = ["success", "info", "warning", "error"], Ut = fg({
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
}), xg = ln({
  customClass: {
    type: String,
    default: Ut.customClass
  },
  center: {
    type: Boolean,
    default: Ut.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ut.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ut.duration
  },
  icon: {
    type: Wa,
    default: Ut.icon
  },
  id: {
    type: String,
    default: Ut.id
  },
  message: {
    type: Qt([
      String,
      Object,
      Function
    ]),
    default: Ut.message
  },
  onClose: {
    type: Qt(Function),
    default: Ut.onClose
  },
  showClose: {
    type: Boolean,
    default: Ut.showClose
  },
  type: {
    type: String,
    values: $a,
    default: Ut.type
  },
  plain: {
    type: Boolean,
    default: Ut.plain
  },
  offset: {
    type: Number,
    default: Ut.offset
  },
  zIndex: {
    type: Number,
    default: Ut.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ut.grouping
  },
  repeatNum: {
    type: Number,
    default: Ut.repeatNum
  }
}), bg = {
  destroy: () => !0
}, ce = gr([]), kg = (e) => {
  const t = ce.findIndex((s) => s.id === e), n = ce[t];
  let i;
  return t > 0 && (i = ce[t - 1]), { current: n, prev: i };
}, _g = (e) => {
  const { prev: t } = kg(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Sg = (e, t) => ce.findIndex((i) => i.id === e) > 0 ? 16 : t, Cg = Dt({
  name: "ElMessage"
}), Tg = /* @__PURE__ */ Dt({
  ...Cg,
  props: xg,
  emits: bg,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = dg, { ns: s, zIndex: o } = Ia("message"), { currentZIndex: a, nextZIndex: r } = o, l = J(), c = J(!1), d = J(0);
    let m;
    const y = Y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = Y(() => {
      const M = n.type;
      return { [s.bm("icon", M)]: M && ti[M] };
    }), C = Y(() => n.icon || ti[n.type] || ""), f = Y(() => _g(n.id)), x = Y(() => Sg(n.id, n.offset) + f.value), p = Y(() => d.value + x.value), _ = Y(() => ({
      top: `${x.value}px`,
      zIndex: a.value
    }));
    function v() {
      n.duration !== 0 && ({ stop: m } = _a(() => {
        O();
      }, n.duration));
    }
    function b() {
      m?.();
    }
    function O() {
      c.value = !1;
    }
    function D({ code: M }) {
      M === Yn.esc && O();
    }
    return an(() => {
      v(), r(), c.value = !0;
    }), De(() => n.repeatNum, () => {
      b(), v();
    }), Ta(document, "keydown", D), If(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: p,
      close: O
    }), (M, V) => (B(), Ft(Bi, {
      name: z(s).b("fade"),
      onBeforeLeave: M.onClose,
      onAfterLeave: (K) => M.$emit("destroy"),
      persisted: ""
    }, {
      default: Gt(() => [
        xn(A("div", {
          id: M.id,
          ref_key: "messageRef",
          ref: l,
          class: _t([
            z(s).b(),
            { [z(s).m(M.type)]: M.type },
            z(s).is("center", M.center),
            z(s).is("closable", M.showClose),
            z(s).is("plain", M.plain),
            M.customClass
          ]),
          style: It(z(_)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: v
        }, [
          M.repeatNum > 1 ? (B(), Ft(z(wg), {
            key: 0,
            value: M.repeatNum,
            type: z(y),
            class: _t(z(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : nt("v-if", !0),
          z(C) ? (B(), Ft(z(Qn), {
            key: 1,
            class: _t([z(s).e("icon"), z(w)])
          }, {
            default: Gt(() => [
              (B(), Ft(Ce(z(C))))
            ]),
            _: 1
          }, 8, ["class"])) : nt("v-if", !0),
          Ne(M.$slots, "default", {}, () => [
            M.dangerouslyUseHTMLString ? (B(), G(Xt, { key: 1 }, [
              nt(" Caution here, message could've been compromised, never use user's input as message "),
              A("p", {
                class: _t(z(s).e("content")),
                innerHTML: M.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (B(), G("p", {
              key: 0,
              class: _t(z(s).e("content"))
            }, at(M.message), 3))
          ]),
          M.showClose ? (B(), Ft(z(Qn), {
            key: 2,
            class: _t(z(s).e("closeBtn")),
            onClick: Et(O, ["stop"])
          }, {
            default: Gt(() => [
              k(z(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : nt("v-if", !0)
        ], 46, ["id"]), [
          [Gn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Mg = /* @__PURE__ */ li(Tg, [["__file", "message.vue"]]);
let Lg = 1;
const Fa = (e) => {
  const t = !e || We(e) || bn(e) || Cn(e) ? { message: e } : e, n = {
    ...Ut,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (We(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    Ni(i) || (i = document.body), n.appendTo = i;
  }
  return ho(ae.grouping) && !n.grouping && (n.grouping = ae.grouping), Fe(ae.duration) && n.duration === 3e3 && (n.duration = ae.duration), Fe(ae.offset) && n.offset === 16 && (n.offset = ae.offset), ho(ae.showClose) && !n.showClose && (n.showClose = ae.showClose), n;
}, Rg = (e) => {
  const t = ce.indexOf(e);
  if (t === -1)
    return;
  ce.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Pg = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Lg++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), Rg(d);
    },
    onDestroy: () => {
      Xn(null, o);
    }
  }, r = k(Mg, a, Cn(a.message) || bn(a.message) ? {
    default: Cn(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || sn._context, Xn(r, o), e.appendChild(o.firstElementChild);
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
}, sn = (e = {}, t) => {
  if (!Ue)
    return { close: () => {
    } };
  const n = Fa(e);
  if (n.grouping && ce.length) {
    const s = ce.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (Fe(ae.max) && ce.length >= ae.max)
    return { close: () => {
    } };
  const i = Pg(n, t);
  return ce.push(i), i.handler;
};
$a.forEach((e) => {
  sn[e] = (t = {}, n) => {
    const i = Fa(t);
    return sn({ ...i, type: e }, n);
  };
});
function Eg(e) {
  for (const t of ce)
    (!e || e === t.props.type) && t.handler.close();
}
sn.closeAll = Eg;
sn._context = null;
const Ag = Da(sn, "$message"), Ba = [
  "success",
  "info",
  "warning",
  "error"
], Ig = ln({
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
    type: Wa
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Qt([
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
    type: Qt(Function),
    default: () => {
    }
  },
  onClose: {
    type: Qt(Function),
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
    values: [...Ba, ""],
    default: ""
  },
  zIndex: Number
}), Og = {
  destroy: () => !0
}, zg = Dt({
  name: "ElNotification"
}), Dg = /* @__PURE__ */ Dt({
  ...zg,
  props: Ig,
  emits: Og,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: s } = Ia("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = hg, l = J(!1);
    let c;
    const d = Y(() => {
      const v = n.type;
      return v && ti[n.type] ? i.m(v) : "";
    }), m = Y(() => n.type && ti[n.type] || n.icon), y = Y(() => n.position.endsWith("right") ? "right" : "left"), w = Y(() => n.position.startsWith("top") ? "top" : "bottom"), C = Y(() => {
      var v;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (v = n.zIndex) != null ? v : a.value
      };
    });
    function f() {
      n.duration > 0 && ({ stop: c } = _a(() => {
        l.value && p();
      }, n.duration));
    }
    function x() {
      c?.();
    }
    function p() {
      l.value = !1;
    }
    function _({ code: v }) {
      v === Yn.delete || v === Yn.backspace ? x() : v === Yn.esc ? l.value && p() : f();
    }
    return an(() => {
      f(), o(), l.value = !0;
    }), Ta(document, "keydown", _), t({
      visible: l,
      close: p
    }), (v, b) => (B(), Ft(Bi, {
      name: z(i).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (O) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: Gt(() => [
        xn(A("div", {
          id: v.id,
          class: _t([z(i).b(), v.customClass, z(y)]),
          style: It(z(C)),
          role: "alert",
          onMouseenter: x,
          onMouseleave: f,
          onClick: v.onClick
        }, [
          z(m) ? (B(), Ft(z(Qn), {
            key: 0,
            class: _t([z(i).e("icon"), z(d)])
          }, {
            default: Gt(() => [
              (B(), Ft(Ce(z(m))))
            ]),
            _: 1
          }, 8, ["class"])) : nt("v-if", !0),
          A("div", {
            class: _t(z(i).e("group"))
          }, [
            A("h2", {
              class: _t(z(i).e("title")),
              textContent: at(v.title)
            }, null, 10, ["textContent"]),
            xn(A("div", {
              class: _t(z(i).e("content")),
              style: It(v.title ? void 0 : { margin: 0 })
            }, [
              Ne(v.$slots, "default", {}, () => [
                v.dangerouslyUseHTMLString ? (B(), G(Xt, { key: 1 }, [
                  nt(" Caution here, message could've been compromised, never use user's input as message "),
                  A("p", { innerHTML: v.message }, null, 8, ["innerHTML"])
                ], 2112)) : (B(), G("p", { key: 0 }, at(v.message), 1))
              ])
            ], 6), [
              [Gn, v.message]
            ]),
            v.showClose ? (B(), Ft(z(Qn), {
              key: 0,
              class: _t(z(i).e("closeBtn")),
              onClick: Et(p, ["stop"])
            }, {
              default: Gt(() => [
                k(z(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : nt("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Gn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ng = /* @__PURE__ */ li(Dg, [["__file", "notification.vue"]]);
const ei = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, $i = 16;
let Wg = 1;
const on = function(e = {}, t) {
  if (!Ue)
    return { close: () => {
    } };
  (We(e) || bn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  ei[n].forEach(({ vm: d }) => {
    var m;
    i += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + $i;
  }), i += $i;
  const s = `notification_${Wg++}`, o = e.onClose, a = {
    ...e,
    offset: i,
    id: s,
    onClose: () => {
      $g(s, n, o);
    }
  };
  let r = document.body;
  Ni(e.appendTo) ? r = e.appendTo : We(e.appendTo) && (r = document.querySelector(e.appendTo)), Ni(r) || (r = document.body);
  const l = document.createElement("div"), c = k(Ng, a, Cn(a.message) ? a.message : bn(a.message) ? () => a.message : null);
  return c.appContext = ka(t) ? on._context : t, c.props.onDestroy = () => {
    Xn(null, l);
  }, Xn(c, l), ei[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Ba.forEach((e) => {
  on[e] = (t = {}, n) => ((We(t) || bn(t)) && (t = {
    message: t
  }), on({ ...t, type: e }, n));
});
function $g(e, t, n) {
  const i = ei[t], s = i.findIndex(({ vm: c }) => {
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
      const { el: d, component: m } = i[c].vm, y = Number.parseInt(d.style[r], 10) - a - $i;
      m.props.offset = y;
    }
}
function Fg() {
  for (const e of Object.values(ei))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
on.closeAll = Fg;
on._context = null;
const Bg = Da(on, "$notify"), qt = {
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
    i === "center" ? Ag({
      message: t,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Bg({
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
}, Hg = ["disabled"], jg = {
  key: 0,
  class: "custom-button__loading"
}, Ug = /* @__PURE__ */ Dt({
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
    return (n, i) => (B(), G("button", {
      class: _t([
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
      e.loading ? (B(), G("div", jg, i[1] || (i[1] = [
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
      ]))) : nt("v-if", !0),
      Ne(n.$slots, "default", {}, void 0, !0)
    ], 10, Hg));
  }
}), _e = /* @__PURE__ */ oi(Ug, [["__scopeId", "data-v-9497085f"]]), Vg = ["src"], Yg = { class: "ocr-header" }, Gg = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, Xg = { "data-tauri-drag-region": "" }, Kg = { class: "ocr-window-controls" }, Zg = ["title"], qg = ["title"], Jg = ["title"], Qg = ["title"], tm = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, em = ["src"], nm = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, im = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, sm = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, om = { "data-tauri-drag-region": "" }, am = { "data-tauri-drag-region": "" }, rm = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, lm = ["title"], cm = { class: "ocr-reading-surface" }, um = {
  key: 0,
  class: "ocr-original-image"
}, hm = ["src"], dm = {
  key: 0,
  class: "ocr-state"
}, fm = {
  key: 1,
  class: "ocr-state error"
}, gm = {
  key: 2,
  class: "ocr-state muted"
}, mm = {
  key: 3,
  class: "ocr-result-layout"
}, pm = { class: "ocr-preview-pane" }, ym = { class: "ocr-preview-stage" }, wm = ["src"], vm = {
  key: 0,
  class: "ocr-text-overlay"
}, xm = ["onClick"], bm = { class: "ocr-record-pane" }, km = { class: "ocr-record-main-row" }, _m = ["onClick"], Sm = ["checked", "onChange"], Cm = { class: "ocr-record-index" }, Tm = ["textContent", "onBlur"], Mm = {
  key: 0,
  class: "ocr-record-score"
}, Lm = ["textContent", "onBlur"], Rm = { class: "ocr-action-bar" }, Pm = { class: "translate-btn-group relative" }, Em = {
  key: 0,
  class: "translate-menu"
}, Am = ["onClick"], Im = { class: "engine-label" }, Om = { class: "ocr-engine-btn-group relative" }, zm = {
  key: 0,
  class: "ocr-engine-menu"
}, Dm = ["onClick"], Nm = { class: "engine-label" }, Wm = { class: "ocr-engine-btn-group relative" }, $m = {
  key: 2,
  class: "zoom-info"
}, Fm = /* @__PURE__ */ Dt({
  __name: "index",
  setup(e) {
    const { t } = Ln(), n = J(), i = J(null), s = J(""), o = J(""), a = J("pin"), r = J(""), l = J([]), c = J(!1), d = J(""), m = J(""), y = J(0), w = J(0), C = J({ width: 0, height: 0 }), f = J(!1), x = J(!1), p = J(!1), _ = J("bing"), v = J(!1), b = J("auto"), O = Y(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: "离"
      }
    ]), D = Y(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), M = (h) => {
      const L = typeof h == "string" ? h.trim().toLowerCase() : "";
      return L === "auto" || L === "zh" || L === "zh-tw" || L === "en" || L === "ja" || L === "ko" ? L : "auto";
    }, V = Y(() => D.value.find((h) => h.value === b.value)?.label || t("pin.ocrLanguageAuto")), K = J(1), tt = J(!1), ot = J(!1);
    let st = null;
    const ht = J(!1), St = J({ x: 0, y: 0 }), ut = J(!0), et = J({ width: 0, height: 0 });
    let ct = null, yt = 0;
    const gt = J(""), j = Y(() => ({
      width: "100%",
      height: a.value === "ocr" ? "auto" : "100%",
      flex: a.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: a.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), xt = Y(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), X = Y(() => y.value > 0 && w.value > 0 ? `${y.value} × ${w.value}` : t("pin.screenshotPreview")), At = Y(() => c.value ? t("pin.recognizing") : d.value ? t("pin.recognizeFailed") : r.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Wt = Y(
      () => l.value.filter((h) => h.selected)
    ), Kt = Y(
      () => l.value.filter((h) => Zt(h))
    ), Lt = Y(() => Wt.value.length), Ct = (h) => (h.translatedText || h.text).trim(), Ht = (h) => h.map(Ct).filter(Boolean).join(`

`), Yt = () => {
      r.value = Ht(l.value);
    }, Zt = (h) => y.value > 0 && w.value > 0 && h.bbox.width > 0 && h.bbox.height > 0, N = (h) => {
      if (!Zt(h))
        return {};
      const L = lt(h.bbox.x / y.value * 100), I = lt(h.bbox.y / w.value * 100), q = lt(h.bbox.width / y.value * 100, 6), rt = lt(h.bbox.height / w.value * 100, 4);
      return {
        left: `${L}%`,
        top: `${I}%`,
        width: `${q}%`,
        minHeight: `${rt}%`
      };
    }, lt = (h, L = 0) => Number.isFinite(h) ? Math.min(100, Math.max(L, h)) : L, wt = () => {
      const h = /* @__PURE__ */ new Date(), L = (I) => I.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${h.getFullYear()}-${L(h.getMonth() + 1)}-${L(h.getDate())} ${L(h.getHours())}.${L(h.getMinutes())}.${L(h.getSeconds())}.png`;
    }, Tt = Y(() => {
      const h = Math.min(
        et.value.width,
        et.value.height
      );
      let L = 1;
      return h < 300 && (L = Math.max(0.4, h / 300)), {
        left: `${St.value.x}px`,
        top: `${St.value.y}px`,
        transform: `scale(${L})`,
        transformOrigin: "top left"
      };
    }), Mt = (h) => {
      s.value = h, y.value = 0, w.value = 0, C.value = { width: 0, height: 0 }, a.value === "ocr" && (m.value = wt()), o.value && (URL.revokeObjectURL(o.value), o.value = "");
      try {
        const L = h.split(",")[1] || h, I = h.match(/data:([^;]+);/), q = I ? I[1] : "image/png", rt = atob(L), ie = new Uint8Array(rt.length);
        for (let oe = 0; oe < rt.length; oe++)
          ie[oe] = rt.charCodeAt(oe);
        const se = new Blob([ie], { type: q });
        o.value = URL.createObjectURL(se);
      } catch (L) {
        H.error("[PIN窗口] 转换 Blob URL 失败", L), o.value = h;
      }
    }, Pt = async () => {
      await vn(), await new Promise((h) => requestAnimationFrame(() => h()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (h) {
        H.error("[PIN窗口] 发送 ready 事件失败", h);
      }
    }, R = (h) => {
      if (!h?.imageData)
        return H.error("[PIN窗口] 收到的事件数据格式不正确", h), !1;
      const L = h.mode === "ocr" ? "ocr" : "pin", I = `${L}:${h.imageData.length}`;
      return I === gt.value ? !1 : (gt.value = I, a.value = L, Mt(h.imageData), ne(), a.value === "ocr" ? (g(h.text || ""), d.value = "", h.text || u()) : (yt++, c.value = !1, d.value = "", r.value = "", l.value = []), !0);
    }, u = async () => {
      if (!s.value) return;
      const h = ++yt;
      c.value = !0, d.value = "";
      const L = Date.now();
      $t.log("[Pin OCR] recognize start", {
        requestId: h,
        imageDataLength: s.value.length,
        imageWidth: y.value,
        imageHeight: w.value,
        language: b.value
      });
      try {
        $t.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: h,
          language: b.value
        });
        const I = await E("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: b.value
        }), q = $(I), rt = q.length > 0 ? Ht(q) : W(I);
        if ($t.log("[Pin OCR] backend OCR success", {
          requestId: h,
          resultEngine: I?.engine,
          resultLanguage: I?.language,
          confidence: I?.confidence,
          blocks: Array.isArray(I?.blocks) ? I.blocks.length : 0,
          textLength: rt.trim().length
        }), h !== yt) return;
        q.length > 0 ? (l.value = q, Yt()) : g(rt.trim()), $t.log("[Pin OCR] recognize success", {
          requestId: h,
          durationMs: Date.now() - L,
          textLength: r.value.length,
          textPreview: r.value.slice(0, 300)
        });
      } catch (I) {
        if (h !== yt) return;
        H.error("[PIN窗口] OCR 识别失败", I), $t.log("[Pin OCR] recognize failed", {
          requestId: h,
          durationMs: Date.now() - L,
          error: ft(I)
        }), d.value = t("pin.recognizeFailed"), r.value = "", l.value = [], qt.error(t("pin.recognizeFailed"));
      } finally {
        h === yt && (c.value = !1);
      }
    }, g = (h) => {
      const L = h.trim();
      r.value = L, l.value = L ? L.split(/\n{2,}|\n/).map((I, q) => P(I, q)).filter((I) => I.text.trim()) : [];
    }, P = (h, L) => ({
      id: `plain-${Date.now()}-${L}`,
      text: h.trim(),
      sourceText: h.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), $ = (h) => {
      const L = Q(h?.blocks);
      return L.length === 0 ? [] : zo(L).map((q, rt) => it(q, rt)).filter((q) => q.text.trim());
    }, it = (h, L) => {
      const I = h.text.trim(), q = h.blocks;
      return {
        id: `ocr-${Date.now()}-${L}`,
        text: I,
        sourceText: I,
        translatedText: h.translatedText?.trim() || "",
        bbox: { ...h.bbox },
        blocks: q,
        confidence: S(q),
        selected: !1
      };
    }, Q = (h) => Array.isArray(h) ? h.map((L) => {
      if (!L || typeof L != "object")
        return null;
      const I = L, q = typeof I.text == "string" ? I.text.trim() : "";
      if (!q)
        return null;
      const rt = {
        text: q,
        x: Number(I.x || 0),
        y: Number(I.y || 0),
        width: Number(I.width || 0),
        height: Number(I.height || 0),
        fontSize: Number(I.fontSize || 0),
        lineHeight: Number(I.lineHeight || 0),
        angle: Number(I.angle || 0),
        isCodeBlock: !!I.isCodeBlock,
        confidence: Number(I.confidence || 0)
      };
      return typeof I.translatedText == "string" && (rt.translatedText = I.translatedText), rt;
    }).filter((L) => L !== null) : [], S = (h) => {
      const L = h.map((I) => Number(I.confidence || 0)).filter((I) => Number.isFinite(I) && I > 0);
      return L.length === 0 ? 0 : L.reduce((I, q) => I + q, 0) / L.length;
    }, W = (h) => typeof h == "string" ? h : h?.text ? h.text : h?.full_text ? h.full_text : Array.isArray(h?.blocks) ? h.blocks.map((L) => L?.text).filter(Boolean).join(`
`) : "", ft = (h) => h instanceof Error ? `${h.name}: ${h.message}
${h.stack || ""}`.trim() : typeof h == "string" ? h : JSON.stringify(h) || String(h), dt = async () => {
      const h = Ve();
      if (h)
        try {
          await navigator.clipboard.writeText(h), qt.success(t("pin.copySuccess"));
        } catch (L) {
          H.error("[PIN窗口] 复制识别文本失败", L), qt.error(t("pin.copyFailed"));
        } finally {
          ne();
        }
    }, te = async () => {
      Yt();
      const h = r.value.trim();
      if (h)
        try {
          await E("save_text_to_file", { text: h }), qt.success(t("pin.saveSuccess"));
        } catch (L) {
          L !== "SAVE_CANCELLED" && (H.error("[PIN窗口] 保存文本失败", L), qt.error(t("pin.saveFailed")));
        }
    }, Ve = () => {
      const h = be();
      if (h)
        return h;
      const L = Ht(Wt.value);
      return L || (Yt(), r.value.trim());
    }, be = () => {
      const h = window.getSelection(), L = n.value?.querySelector(".ocr-reading-surface");
      if (!h || h.rangeCount === 0 || !L)
        return "";
      for (let I = 0; I < h.rangeCount; I += 1) {
        const rt = h.getRangeAt(I).commonAncestorContainer;
        if (L.contains(rt))
          return h.toString().trim();
      }
      return "";
    }, cn = (h) => {
      const L = l.value.find((I) => I.id === h);
      L && (L.selected = !L.selected);
    }, ci = (h, L, I) => {
      const q = l.value.find((ie) => ie.id === h), rt = I.target;
      !q || !rt || (q[L] = rt.innerText.trim(), L === "text" && !q.sourceText.trim() && (q.sourceText = q.text), Yt());
    }, Ha = () => {
      p.value = !p.value, v.value = !1;
    }, ja = (h) => {
      _.value = h, p.value = !1, E("set_translation_engine", { engine: h }).catch((L) => {
        H.error("[PIN窗口] 保存翻译引擎设置失败", L);
      });
    }, cs = () => {
      v.value = !v.value, p.value = !1;
    }, Ua = (h) => {
      b.value = h, v.value = !1, E("set_ocr_language", { language: h }).catch((L) => {
        H.error("[PIN窗口] 保存 OCR 语言设置失败", L);
      }), s.value && u();
    }, Va = async () => {
      if (ne(), p.value = !1, v.value = !1, !r.value.trim() || x.value) return;
      const h = Wt.value.length > 0 ? Wt.value : l.value, L = h.length > 0 ? h.map((q) => q.text).join(`

`) : r.value, I = Ee(L);
      if (!qe(I)) {
        qt.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      x.value = !0;
      try {
        if (await Ya(), h.length > 0) {
          for (const q of h) {
            const rt = await us(q.text, I);
            rt && (q.translatedText = rt.trim());
          }
          Yt(), qt.success(t("pin.translateSuccess"));
        } else {
          const q = await us(r.value, I);
          q && g(q), qt.success(t("pin.translateSuccess"));
        }
      } catch (q) {
        H.error("[PIN窗口] 翻译失败", q);
        const rt = q instanceof Error ? q.message : String(q);
        rt !== "翻译已取消" && qt.error(rt || t("pin.translateFailed"));
      } finally {
        x.value = !1;
      }
    }, Ya = async () => {
      if (_.value !== "offline")
        return;
      if ((await Vi()).isCached)
        await Io();
      else
        throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
      if (!await E("get_offline_model_activated"))
        throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
    }, us = async (h, L) => {
      const I = h.trim();
      return I ? _.value === "offline" ? Ao(I) : await E("translate_text", {
        text: I,
        from: "auto",
        to: L === "zh" ? "en" : "zh",
        engine: _.value
      }) : "";
    }, Ga = () => {
      f.value = !f.value;
    }, Xa = (h) => {
      Rn(h);
    }, Ka = async () => {
      if (!i.value) return;
      const h = i.value;
      typeof h.minimize == "function" && await h.minimize();
    }, Za = async () => {
      if (!i.value) return;
      const h = i.value;
      (typeof h.isMaximized == "function" ? await h.isMaximized() : !1) && typeof h.unmaximize == "function" ? await h.unmaximize() : typeof h.maximize == "function" && await h.maximize();
    }, hs = async (h) => {
      const L = h.target;
      if (y.value = L.naturalWidth, w.value = L.naturalHeight, i.value && C.value.width === 0)
        try {
          const I = await i.value.innerSize(), q = await i.value.scaleFactor(), rt = I.toLogical(q);
          C.value = {
            width: rt.width,
            height: rt.height
          };
        } catch (I) {
          H.error("[PIN窗口] 获取窗口初始尺寸失败", I);
        }
    }, ds = async (h) => {
      if (h.ctrlKey && (h.preventDefault(), h.stopPropagation(), !ot.value && i.value)) {
        ot.value = !0;
        try {
          const I = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), q = h.deltaY > 0 ? 0.95 : 1.05, rt = I.width, ie = I.height, se = Math.round(rt * q), oe = Math.round(ie * q), un = 50, ke = 3e3;
          if (se >= un && se <= ke && oe >= un && oe <= ke) {
            if (await i.value.setSize(new mn(se, oe)), y.value > 0) {
              const Re = Math.round(
                se / y.value * 100
              );
              K.value = Re / 100;
            }
            tt.value = !0, ui();
          }
        } catch (L) {
          H.error("[PIN窗口] 窗口缩放失败", L);
        } finally {
          setTimeout(() => {
            ot.value = !1;
          }, 100);
        }
      }
    }, qa = (h) => {
      a.value === "ocr" && h.ctrlKey && ds(h);
    }, ui = () => {
      tt.value = !0, st && clearTimeout(st), st = setTimeout(() => {
        tt.value = !1;
      }, 1e3);
    }, Rn = (h) => {
      h.preventDefault(), h.stopPropagation(), ht.value = !1, setTimeout(() => {
        const L = window.innerWidth, I = window.innerHeight;
        et.value = { width: L, height: I };
        const q = Math.min(L, I);
        let rt = 1;
        q < 300 && (rt = Math.max(0.4, q / 300));
        const ie = a.value === "ocr" ? 176 : 150, se = a.value === "ocr" && r.value.trim() ? 222 : 180, oe = ie * rt, un = se * rt;
        let ke = h.clientX, Re = h.clientY;
        ke + oe > L && (ke = L - oe - 5), Re + un > I && (Re = I - un - 5), ke = Math.max(5, ke), Re = Math.max(5, Re), St.value = { x: ke, y: Re }, ht.value = !0;
      }, 10);
    }, ne = () => {
      ht.value = !1, p.value = !1, v.value = !1;
    }, fs = async () => {
      i.value && (ut.value = !ut.value, await i.value.setAlwaysOnTop(ut.value), ne());
    }, gs = async (h) => {
      if (i.value && !ot.value) {
        ot.value = !0;
        try {
          const I = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), q = Math.round(I.width * h), rt = Math.round(I.height * h), ie = 50, se = 3e3;
          q >= ie && q <= se && rt >= ie && rt <= se && (await i.value.setSize(new mn(q, rt)), y.value > 0 && (K.value = q / y.value), ui());
        } catch (L) {
          H.error("[PIN窗口] 键盘缩放失败", L);
        } finally {
          setTimeout(() => {
            ot.value = !1;
          }, 100);
        }
      }
    }, ms = async () => {
      if (i.value && C.value.width > 0 && C.value.height > 0)
        try {
          await i.value.setSize(
            new mn(
              C.value.width,
              C.value.height
            )
          ), K.value = 1, ui();
        } catch (h) {
          H.error("[PIN窗口] 重置缩放失败", h);
        }
      ne();
    }, Ja = async () => {
      try {
        const h = s.value;
        ne(), i.value && await i.value.hide(), await E("copy_image_to_clipboard", { imageData: h }), qt.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (h) {
        H.error("[PIN窗口] 复制图片失败", h), qt.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, Qa = async () => {
      const h = s.value;
      ne(), i.value && await i.value.hide();
      try {
        await E("save_pin_image", { imageData: h }), qt.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (L) {
        L === "SAVE_CANCELLED" ? (H.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (H.error("[PIN窗口] 保存图片失败", L), qt.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, hi = async () => {
      i.value && await i.value.close();
    }, ps = (h) => {
      h.preventDefault();
    }, di = async (h) => {
      if (h.button === 0 && i.value) {
        const L = h.target;
        if (L.hasAttribute("data-tauri-drag-region") || L.closest("[data-tauri-drag-region]")) {
          if (L.closest("button") || L.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (I) {
            H.error("[PIN窗口] 拖拽窗口失败", I);
          }
        }
      }
    }, ys = (h) => {
      const L = h.target;
      !L.closest(".context-menu") && !L.closest(".ocr-engine-btn-group") && ne();
    }, ws = (h) => {
      if (h.altKey && h.code === "Space") {
        h.preventDefault(), h.stopPropagation();
        return;
      }
      h.key === "Escape" ? ht.value ? ne() : hi() : (h.ctrlKey || h.metaKey) && (h.key === "0" ? (h.preventDefault(), ms()) : h.key === "=" || h.key === "+" ? (h.preventDefault(), gs(1.05)) : h.key === "-" && (h.preventDefault(), gs(0.95)));
    }, tr = async () => {
      if (i.value)
        try {
          const h = await E(
            "get_pin_window_data",
            { label: i.value.label }
          );
          h && R(h) && await Pt();
        } catch (h) {
          H.error("[PIN窗口] 主动获取窗口数据失败", h);
        }
    };
    return an(async () => {
      if (n.value) {
        try {
          const [h, L] = await Promise.all([
            E("get_translation_engine"),
            E("get_ocr_language")
          ]);
          (h === "google" || h === "bing" || h === "offline") && (_.value = h), b.value = M(L);
        } catch (h) {
          H.error("[PIN窗口] 读取默认 OCR/翻译设置失败", h);
        }
        try {
          i.value = Mn.getCurrent();
          try {
            ct = await i.value.listen(
              "pin-window-data",
              (h) => {
                R(h.payload) && Pt();
              }
            ), await tr();
          } catch (h) {
            H.error("[PIN窗口] 设置事件监听失败", h);
          }
        } catch (h) {
          if (H.error("[PIN窗口] 初始化错误", h), i.value)
            try {
              await i.value.show();
            } catch (L) {
              H.error("[PIN窗口] 显示窗口失败", L);
            }
        }
        document.addEventListener("click", ys), document.addEventListener("keydown", ws, !0), document.addEventListener("contextmenu", ps, !0), window.addEventListener("blur", ne), document.body && (document.body.oncontextmenu = (h) => (h.preventDefault(), !1));
      }
    }), Fi(() => {
      o.value && URL.revokeObjectURL(o.value), ct && ct(), document.removeEventListener("click", ys), document.removeEventListener("keydown", ws, !0), document.removeEventListener("contextmenu", ps, !0), window.removeEventListener("blur", ne), document.body && (document.body.oncontextmenu = null), st && clearTimeout(st);
    }), (h, L) => (B(), G(
      "div",
      {
        class: _t(["pin-container", { "ocr-mode": a.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: Et(Rn, ["prevent"]),
        onWheelCapture: qa
      },
      [
        nt(" 图片容器 "),
        o.value && a.value === "pin" ? (B(), G(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: It(j.value),
            onWheelCapture: ds,
            onContextmenu: Et(Rn, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: di
          },
          [
            A("img", {
              src: o.value,
              alt: "贴图",
              style: It(xt.value),
              onLoad: hs,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Vg)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : nt("v-if", !0),
        a.value === "ocr" ? (B(), G(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: Et(Rn, ["prevent"])
          },
          [
            A("header", Yg, [
              A(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: di
                },
                [
                  A("div", Gg, [
                    k(z(Hn), {
                      theme: "outline",
                      size: "18"
                    }),
                    A(
                      "span",
                      Xg,
                      at(h.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  A("div", Kg, [
                    A("button", {
                      class: "ocr-window-btn",
                      title: ut.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow"),
                      onClick: Et(fs, ["stop"])
                    }, [
                      (B(), Ft(Ce(ut.value ? z(Mi) : z(Es)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, Zg),
                    L[1] || (L[1] = A(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    A("button", {
                      class: "ocr-window-btn",
                      title: h.$t("pin.minimize"),
                      onClick: Et(Ka, ["stop"])
                    }, [
                      k(z(Ho), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, qg),
                    A("button", {
                      class: "ocr-window-btn",
                      title: h.$t("pin.maximize"),
                      onClick: Et(Za, ["stop"])
                    }, [
                      k(z(mc), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, Jg),
                    A("button", {
                      class: "ocr-window-btn",
                      title: h.$t("pin.close"),
                      onClick: Et(hi, ["stop"])
                    }, [
                      k(z(Ti), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, Qg)
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
                  onMousedown: di
                },
                [
                  A("div", tm, [
                    o.value ? (B(), G("img", {
                      key: 0,
                      src: o.value,
                      alt: "OCR preview",
                      onLoad: hs,
                      draggable: "false"
                    }, null, 40, em)) : nt("v-if", !0)
                  ]),
                  A("div", nm, [
                    A(
                      "div",
                      im,
                      at(m.value),
                      1
                      /* TEXT */
                    ),
                    A("div", sm, [
                      A(
                        "span",
                        om,
                        at(X.value),
                        1
                        /* TEXT */
                      ),
                      L[2] || (L[2] = A(
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
                        am,
                        at(At.value),
                        1
                        /* TEXT */
                      ),
                      !c.value && !d.value && r.value.trim() ? (B(), G("span", rm, " ✓ ")) : nt("v-if", !0)
                    ])
                  ]),
                  A("button", {
                    class: "ocr-view-original",
                    title: f.value ? h.$t("pin.viewResult") : h.$t("pin.viewOriginal"),
                    onClick: Et(Ga, ["stop"])
                  }, [
                    (B(), Ft(Ce(f.value ? z(Hn) : z(cc)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    A(
                      "span",
                      null,
                      at(f.value ? h.$t("pin.viewResult") : h.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, lm)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            A("main", cm, [
              f.value ? (B(), G("div", um, [
                A("img", {
                  src: o.value || s.value,
                  alt: "original"
                }, null, 8, hm)
              ])) : (B(), G(
                Xt,
                { key: 1 },
                [
                  c.value ? (B(), G("div", dm, [
                    k(z(Ps), {
                      class: "ocr-loading-icon",
                      size: "20",
                      theme: "outline",
                      strokeWidth: 3
                    }),
                    A(
                      "span",
                      null,
                      at(h.$t("pin.recognizing")),
                      1
                      /* TEXT */
                    )
                  ])) : d.value ? (B(), G(
                    "div",
                    fm,
                    at(d.value),
                    1
                    /* TEXT */
                  )) : r.value.trim() ? (B(), G("div", mm, [
                    A("section", pm, [
                      A("div", ym, [
                        A("img", {
                          src: o.value || s.value,
                          alt: "OCR source"
                        }, null, 8, wm),
                        Kt.value.length > 0 ? (B(), G("div", vm, [
                          (B(!0), G(
                            Xt,
                            null,
                            ge(Kt.value, (I) => (B(), G("span", {
                              key: I.id,
                              class: _t(["ocr-overlay-block", { selected: I.selected }]),
                              style: It(N(I)),
                              onClick: Et((q) => cn(I.id), ["stop"])
                            }, at(I.text.trim()), 15, xm))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : nt("v-if", !0)
                      ])
                    ]),
                    A("section", bm, [
                      (B(!0), G(
                        Xt,
                        null,
                        ge(l.value, (I, q) => (B(), G(
                          "article",
                          {
                            key: I.id,
                            class: _t(["ocr-record-item", { selected: I.selected }])
                          },
                          [
                            A("div", km, [
                              A("header", {
                                class: "ocr-record-header",
                                onClick: Et((rt) => cn(I.id), ["stop"])
                              }, [
                                A("input", {
                                  class: "ocr-record-checkbox",
                                  type: "checkbox",
                                  checked: I.selected,
                                  onChange: Et((rt) => cn(I.id), ["stop"]),
                                  onClick: L[0] || (L[0] = Et(() => {
                                  }, ["stop"]))
                                }, null, 40, Sm),
                                A(
                                  "span",
                                  Cm,
                                  "#" + at(q + 1),
                                  1
                                  /* TEXT */
                                )
                              ], 8, _m),
                              A("div", {
                                class: "ocr-record-editor",
                                contenteditable: "plaintext-only",
                                spellcheck: "false",
                                textContent: at(I.text),
                                onBlur: (rt) => ci(I.id, "text", rt)
                              }, null, 40, Tm),
                              I.confidence > 0 ? (B(), G(
                                "span",
                                Mm,
                                at(Math.round(I.confidence)) + "% ",
                                1
                                /* TEXT */
                              )) : nt("v-if", !0)
                            ]),
                            I.translatedText ? (B(), G("div", {
                              key: 0,
                              class: "ocr-record-editor translated",
                              contenteditable: "plaintext-only",
                              spellcheck: "false",
                              textContent: at(I.translatedText),
                              onBlur: (rt) => ci(I.id, "translatedText", rt)
                            }, null, 40, Lm)) : nt("v-if", !0)
                          ],
                          2
                          /* CLASS */
                        ))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])) : (B(), G(
                    "div",
                    gm,
                    at(h.$t("pin.noTextRecognized")),
                    1
                    /* TEXT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            A("footer", Rm, [
              k(_e, {
                class: "ocr-action-btn",
                type: "text",
                title: h.$t("pin.copyText"),
                disabled: !r.value.trim(),
                onClick: Et(dt, ["stop"])
              }, {
                default: Gt(() => [
                  k(z(pi), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    at(Lt.value > 0 ? `${h.$t("pin.copyText")} (${Lt.value})` : h.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              A("div", Pm, [
                k(_e, {
                  class: "ocr-action-btn translate-main",
                  type: "text",
                  title: h.$t("pin.translate"),
                  disabled: !r.value.trim() || x.value,
                  onClick: Et(Va, ["stop"])
                }, {
                  default: Gt(() => [
                    x.value ? (B(), Ft(z(Ps), {
                      key: 1,
                      class: "ocr-loading-icon",
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })) : (B(), Ft(z(jo), {
                      key: 0,
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })),
                    A(
                      "span",
                      null,
                      at(h.$t("pin.translate")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                k(_e, {
                  class: "ocr-action-btn translate-arrow",
                  type: "text",
                  disabled: !r.value.trim() || x.value,
                  onClick: Et(Ha, ["stop"])
                }, {
                  default: Gt(() => [
                    k(z(Rs), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.8
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                nt(" 翻译引擎菜单 "),
                p.value ? (B(), G("div", Em, [
                  (B(!0), G(
                    Xt,
                    null,
                    ge(O.value, (I) => (B(), G("div", {
                      key: I.value,
                      class: _t(["menu-item", { active: _.value === I.value }]),
                      onClick: (q) => ja(I.value)
                    }, [
                      A(
                        "span",
                        Im,
                        at(I.label),
                        1
                        /* TEXT */
                      ),
                      _.value === I.value ? (B(), Ft(Ce(z(Ci)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : nt("v-if", !0)
                    ], 10, Am))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : nt("v-if", !0)
              ]),
              A("div", Om, [
                k(_e, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: h.$t("pin.ocrLanguage"),
                  disabled: c.value,
                  onClick: Et(cs, ["stop"])
                }, {
                  default: Gt(() => [
                    k(z(Hn), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    A(
                      "span",
                      null,
                      at(V.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                k(_e, {
                  class: "ocr-action-btn ocr-engine-arrow",
                  type: "text",
                  disabled: c.value,
                  onClick: Et(cs, ["stop"])
                }, {
                  default: Gt(() => [
                    k(z(Rs), {
                      size: "14",
                      theme: "outline",
                      strokeWidth: 3
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                v.value ? (B(), G("div", zm, [
                  (B(!0), G(
                    Xt,
                    null,
                    ge(D.value, (I) => (B(), G("div", {
                      key: I.value,
                      class: _t(["menu-item", { active: b.value === I.value }]),
                      onClick: (q) => Ua(I.value)
                    }, [
                      A(
                        "span",
                        Nm,
                        at(I.label),
                        1
                        /* TEXT */
                      ),
                      b.value === I.value ? (B(), Ft(Ce(z(Ci)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : nt("v-if", !0)
                    ], 10, Dm))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : nt("v-if", !0)
              ]),
              A("div", Wm, [
                k(_e, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: h.$t("pin.recognizeAgain"),
                  disabled: c.value || !s.value,
                  onClick: Et(u, ["stop"])
                }, {
                  default: Gt(() => [
                    k(z(dc), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    A(
                      "span",
                      null,
                      at(h.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              k(_e, {
                class: "ocr-action-btn",
                type: "text",
                title: h.$t("pin.saveAsText"),
                disabled: !r.value.trim(),
                onClick: Et(te, ["stop"])
              }, {
                default: Gt(() => [
                  k(z(Is), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    at(h.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              L[3] || (L[3] = A(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              k(_e, {
                class: "ocr-action-btn more",
                type: "text",
                title: h.$t("pin.more"),
                onClick: Et(Xa, ["stop"])
              }, {
                default: Gt(() => [
                  k(z(ac), {
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
        )) : nt("v-if", !0),
        tt.value ? (B(), G(
          "div",
          $m,
          at(Math.round(K.value * 100)) + "% ",
          1
          /* TEXT */
        )) : nt("v-if", !0),
        nt(" 右键菜单 "),
        ht.value ? (B(), G(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: It(Tt.value)
          },
          [
            A("div", {
              class: "menu-item",
              onClick: fs
            }, [
              (B(), Ft(Ce(ut.value ? z(Es) : z(Mi)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              A(
                "span",
                null,
                at(ut.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: ms
            }, [
              k(z(hc), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(h.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: Ja
            }, [
              k(z(pi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(h.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: Qa
            }, [
              k(z(Is), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(h.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            a.value === "ocr" && r.value.trim() ? (B(), G("div", {
              key: 0,
              class: "menu-item",
              onClick: dt
            }, [
              k(z(pi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(h.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            L[4] || (L[4] = A(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            A("div", {
              class: "menu-item danger",
              onClick: hi
            }, [
              k(z(Ti), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(h.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : nt("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), Bm = /* @__PURE__ */ oi(Fm, [["__scopeId", "data-v-a031fef6"]]), Hm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bm
}, Symbol.toStringTag, { value: "Module" }));
async function jm(e) {
  return e.toDataURL("image/png");
}
function Um(e) {
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
async function Vm(e) {
  const t = Date.now(), n = await jm(e);
  $t.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await E("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr"
    }), s = Um(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || Oo(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return $t.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw H.error("[OCR] RapidOCR recognizeFromCanvas failed", i), $t.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function Ym() {
  return Promise.resolve();
}
async function Gm() {
  return Promise.resolve();
}
const Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: Vm,
  terminateOcr: Gm,
  warmupOcr: Ym
}, Symbol.toStringTag, { value: "Module" }));
export {
  qm as activate
};
