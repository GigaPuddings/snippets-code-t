var tl = Object.defineProperty;
var el = (e, t, n) => t in e ? tl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var V = (e, t, n) => el(e, typeof t != "symbol" ? t + "" : t, n);
import * as Ti from "vue";
import { inject as Re, createVNode as S, ref as Z, shallowRef as nl, computed as Y, watch as Ee, onMounted as hn, onUnmounted as ts, defineComponent as Wt, h as qo, Text as il, Fragment as qt, nextTick as $e, createElementBlock as X, openBlock as B, createCommentVNode as et, createElementVNode as P, renderList as he, normalizeClass as Lt, createBlock as Vt, resolveDynamicComponent as Le, unref as N, toDisplayString as at, normalizeStyle as Pt, withDirectives as Cn, withKeys as js, vModelText as sl, getCurrentInstance as on, readonly as ol, getCurrentScope as al, onScopeDispose as rl, isRef as ll, warn as cl, provide as ul, mergeProps as hl, renderSlot as Be, Transition as es, withCtx as Zt, createTextVNode as dl, vShow as Jn, shallowReactive as fl, withModifiers as It, isVNode as Tn, render as Qn } from "vue";
const cw = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => rf)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => Qp)
  });
};
function gl(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function ml(e, t, n, i, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Vn;
const le = "__TAURI_TO_IPC_KEY__";
function pl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function O(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function wl(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class yl {
  get rid() {
    return gl(this, Vn, "f");
  }
  constructor(t) {
    Vn.set(this, void 0), ml(this, Vn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return O("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Vn = /* @__PURE__ */ new WeakMap();
class bn {
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
    return new kn(this.width * t, this.height * t);
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
class kn {
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
    return new bn(this.width / t, this.height / t);
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
class qe {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof bn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof kn ? this.size : this.size.toPhysical(t);
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
class Jo {
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
    return new Me(this.x * t, this.y * t);
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
class Me {
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
    return new Jo(this.x / t, this.y / t);
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
class Nn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Jo ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Me ? this.position : this.position.toPhysical(t);
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
var oe;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(oe || (oe = {}));
async function Qo(e, t) {
  await O("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function _n(e, t, n) {
  var i;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return O("plugin:event|listen", {
    event: e,
    target: s,
    handler: pl(t)
  }).then((o) => async () => Qo(e, o));
}
async function vl(e, t, n) {
  return _n(e, (i) => {
    Qo(e, i.id), t(i);
  }, n);
}
async function xl(e, t) {
  await O("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function bl(e, t, n) {
  await O("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let kl = class Yn extends yl {
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
    return O("plugin:image|new", {
      rgba: ti(t),
      width: n,
      height: i
    }).then((s) => new Yn(s));
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
    return O("plugin:image|from_bytes", {
      bytes: ti(t)
    }).then((n) => new Yn(n));
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
    return O("plugin:image|from_path", { path: t }).then((n) => new Yn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return O("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return O("plugin:image|size", { rid: this.rid });
  }
};
function ti(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof kl ? e.rid : e;
}
var zi;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(zi || (zi = {}));
class _l {
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
var Us;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Us || (Us = {}));
function Sl() {
  return new An(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Mi() {
  return O("plugin:window|get_all_windows").then((e) => e.map((t) => new An(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Li = ["tauri://created", "tauri://error"];
class An {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || O("plugin:window|create", {
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
    return (n = (await Mi()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Sl();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Mi();
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
    for (const t of await Mi())
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
    } : _n(t, n, {
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
    } : vl(t, n, {
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
    if (Li.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return xl(t, n);
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
    if (Li.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return bl(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Li.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return O("plugin:window|scale_factor", {
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
    return O("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Me(t));
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
    return O("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Me(t));
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
    return O("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new kn(t));
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
    return O("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new kn(t));
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
    return O("plugin:window|is_fullscreen", {
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
    return O("plugin:window|is_minimized", {
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
    return O("plugin:window|is_maximized", {
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
    return O("plugin:window|is_focused", {
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
    return O("plugin:window|is_decorated", {
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
    return O("plugin:window|is_resizable", {
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
    return O("plugin:window|is_maximizable", {
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
    return O("plugin:window|is_minimizable", {
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
    return O("plugin:window|is_closable", {
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
    return O("plugin:window|is_visible", {
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
    return O("plugin:window|title", {
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
    return O("plugin:window|theme", {
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
    return O("plugin:window|is_always_on_top", {
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
    return O("plugin:window|center", {
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
    return t && (t === zi.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), O("plugin:window|request_user_attention", {
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
    return O("plugin:window|set_resizable", {
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
    return O("plugin:window|set_enabled", {
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
    return O("plugin:window|is_enabled", {
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
    return O("plugin:window|set_maximizable", {
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
    return O("plugin:window|set_minimizable", {
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
    return O("plugin:window|set_closable", {
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
    return O("plugin:window|set_title", {
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
    return O("plugin:window|maximize", {
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
    return O("plugin:window|unmaximize", {
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
    return O("plugin:window|toggle_maximize", {
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
    return O("plugin:window|minimize", {
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
    return O("plugin:window|unminimize", {
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
    return O("plugin:window|show", {
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
    return O("plugin:window|hide", {
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
    return O("plugin:window|close", {
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
    return O("plugin:window|destroy", {
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
    return O("plugin:window|set_decorations", {
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
    return O("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return O("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return O("plugin:window|set_effects", {
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
    return O("plugin:window|set_always_on_top", {
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
    return O("plugin:window|set_always_on_bottom", {
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
    return O("plugin:window|set_content_protected", {
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
    return O("plugin:window|set_size", {
      label: this.label,
      value: t instanceof qe ? t : new qe(t)
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
    return O("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof qe ? t : t ? new qe(t) : null
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
    return O("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof qe ? t : t ? new qe(t) : null
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
    return O("plugin:window|set_size_constraints", {
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
    return O("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Nn ? t : new Nn(t)
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
    return O("plugin:window|set_fullscreen", {
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
    return O("plugin:window|set_focus", {
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
    return O("plugin:window|set_icon", {
      label: this.label,
      value: ti(t)
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
    return O("plugin:window|set_skip_taskbar", {
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
    return O("plugin:window|set_cursor_grab", {
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
    return O("plugin:window|set_cursor_visible", {
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
    return O("plugin:window|set_cursor_icon", {
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
    return O("plugin:window|set_background_color", { color: t });
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
    return O("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Nn ? t : new Nn(t)
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
    return O("plugin:window|set_ignore_cursor_events", {
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
    return O("plugin:window|start_dragging", {
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
    return O("plugin:window|start_resize_dragging", {
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
    return O("plugin:window|set_badge_count", {
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
    return O("plugin:window|set_badge_label", {
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
    return O("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? ti(t) : void 0
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
    return O("plugin:window|set_progress_bar", {
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
    return O("plugin:window|set_visible_on_all_workspaces", {
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
    return O("plugin:window|set_title_bar_style", {
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
    return O("plugin:window|set_theme", {
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
    return this.listen(oe.WINDOW_RESIZED, (n) => {
      n.payload = new kn(n.payload), t(n);
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
    return this.listen(oe.WINDOW_MOVED, (n) => {
      n.payload = new Me(n.payload), t(n);
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
    return this.listen(oe.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new _l(n);
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
    const n = await this.listen(oe.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Me(a.payload.position)
        }
      });
    }), i = await this.listen(oe.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Me(a.payload.position)
        }
      });
    }), s = await this.listen(oe.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Me(a.payload.position)
        }
      });
    }), o = await this.listen(oe.DRAG_LEAVE, (a) => {
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
    const n = await this.listen(oe.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(oe.WINDOW_BLUR, (s) => {
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
    return this.listen(oe.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(oe.WINDOW_THEME_CHANGED, t);
  }
}
var Vs;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Vs || (Vs = {}));
var Ys;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ys || (Ys = {}));
var Gs;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Gs || (Gs = {}));
function $t(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Xs(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function ns(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function Cl(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function pe(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function Je(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class Tl {
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
    if (!Je(t)) {
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
    const { x: n, y: i, width: s, height: o } = t, a = ns(t);
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
    let w = i.x + g, v = i.y + g;
    w + c > n.x + n.width && (w = i.x - c - g), v + d > n.y + n.height && (v = i.y - d - g), w < n.x && (w = n.x + g), v < n.y && (v = n.y + g), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(w, v, c, d, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const k = 108, f = w + (c - k) / 2, b = v + 16;
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
    for (let j = 1; j < p; j++) {
      const q = f + j * M;
      this.ctx.moveTo(q, b), this.ctx.lineTo(q, b + k);
      const it = b + j * M;
      this.ctx.moveTo(f, it), this.ctx.lineTo(f + k, it);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let j = 1; j < p; j++) {
      const q = f + j * M + 0.5;
      this.ctx.moveTo(q, b), this.ctx.lineTo(q, b + k);
      const it = b + j * M + 0.5;
      this.ctx.moveTo(f, it), this.ctx.lineTo(f + k, it);
    }
    this.ctx.stroke();
    const x = Math.floor(p / 2), T = f + x * M, A = b + x * M;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(T, A, M, M), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      T - 1,
      A - 1,
      M + 2,
      M + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      T,
      A,
      M,
      M
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let z = b + k + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(w + 16, z - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(w + 16, z - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const j = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(j, w + 44, z), z += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, w + 16, z), z += 17, this.ctx.font = "12px Arial";
    const R = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(R, w + 16, z), this.ctx.restore();
  }
}
class Ml {
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
    return pe(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return pe(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, n) {
    return !pe(t) || !Je(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !pe(t) || !Je(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + n.x,
      y: t.y + n.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Je(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!pe(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const n = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Cl(t, n);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Je(t))
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
    return $t(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!pe(t) || !Je(n))
      return !1;
    if (i === 0)
      return Xs(t, n);
    const s = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Xs(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, s = 8) {
    if (!pe(t) || !pe(n) || !pe(i))
      return !1;
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, d = r * r + l * l;
    if (d === 0)
      return $t(t, n) <= s;
    const g = c / d;
    let w;
    return g < 0 ? w = n : g > 1 ? w = i : w = {
      x: n.x + g * r,
      y: n.y + g * l
    }, $t(t, w) <= s;
  }
}
var F = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(F || {}), L = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(L || {});
class Ll {
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
    const c = ns(n);
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
    if (!pe(t))
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
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = $t(t, s), c = $t(t, o);
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
class Ve {
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
class Rl extends Ve {
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
      if ($t(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Pl extends Ve {
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
class El extends Ve {
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
      return $t(t, n) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - n.x) * o + (t.y - n.y) * a) / r)), c = {
      x: n.x + l * o,
      y: n.y + l * a
    };
    return $t(t, c) <= s;
  }
}
class Il extends Ve {
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
      return $t(t, n) <= s;
    const g = c / d;
    let w;
    return g < 0 ? w = n : g > 1 ? w = i : w = {
      x: n.x + g * r,
      y: n.y + g * l
    }, $t(t, w) <= s;
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
      if ($t(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Al extends Ve {
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
      const n = this.data.points[this.data.points.length - 1], i = $t(t, n);
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
      return this.data.points.length === 1 ? $t(t, this.data.points[0]) <= n : !1;
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
      return $t(t, n) <= s;
    const g = c / d;
    let w;
    return g < 0 ? w = n : g > 1 ? w = i : w = {
      x: n.x + g * r,
      y: n.y + g * l
    }, $t(t, w) <= s;
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
const Qe = "sans-serif", tn = (e) => ({
  x: e.x + 4,
  y: e.y - 8
});
class Ol extends Ve {
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
    t.save(), this.applyOpacity(t), t.font = `${o}px ${Qe}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = tn(a), l = r.x * n - i.x, c = r.y * n - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, n = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${Qe}`;
    const l = a.measureText(this.data.text).width, { x: c, y: d } = tn(i);
    return t.x >= c - n && t.x <= c + l + n && t.y >= d - n && t.y <= d + s + n;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], n = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${n}px ${Qe}`;
    const a = s.measureText(this.data.text).width, { x: r, y: l } = tn(t);
    return {
      x: r,
      y: l,
      width: a,
      height: n
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = tn(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Qe}`;
    const g = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(l, c, g, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = tn(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Qe}`;
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
const we = class we extends Ve {
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
      const n = this.data.points[this.data.points.length - 1], i = $t(t, n);
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
    const w = d, v = Math.floor(g.x - w), k = Math.floor(g.y - w), f = Math.ceil(g.width + w * 2), b = Math.ceil(g.height + w * 2);
    if (f <= 0 || b <= 0) return;
    const p = Math.floor(v * r - i.x), M = Math.floor(k * r - i.y), x = Math.ceil(f * r), T = Math.ceil(b * r), A = t.canvas.width, z = t.canvas.height, R = Math.max(0, p), j = Math.max(0, M), q = Math.min(x, A - R), it = Math.min(T, z - j);
    if (q <= 0 || it <= 0) return;
    let rt;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), rt = t.getImageData(R, j, q, it), t.restore();
    } catch {
      return;
    }
    const st = rt.data, ct = R % c, Rt = j % c;
    for (let mt = -Rt; mt < it; mt += c)
      for (let tt = -ct; tt < q; tt += c) {
        const ut = Math.max(0, tt), Mt = Math.max(0, mt), pt = Math.min(q, tt + c), U = Math.min(it, mt + c);
        if (ut >= pt || Mt >= U) continue;
        let bt = 0, J = 0, Ot = 0, Ht = 0;
        for (let te = Mt; te < U; te++)
          for (let kt = ut; kt < pt; kt++) {
            const _t = (te * q + kt) * 4;
            bt += st[_t], J += st[_t + 1], Ot += st[_t + 2], Ht++;
          }
        if (Ht > 0) {
          bt = Math.round(bt / Ht / 8) * 8, J = Math.round(J / Ht / 8) * 8, Ot = Math.round(Ot / Ht / 8) * 8;
          for (let kt = Mt; kt < U; kt++)
            for (let _t = ut; _t < pt; _t++) {
              const jt = (kt * q + _t) * 4;
              st[jt] = bt, st[jt + 1] = J, st[jt + 2] = Ot;
            }
        }
      }
    o.width = q, o.height = it, a.putImageData(rt, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = d * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, R, j), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, R, j), t.restore();
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
        const g = this.data.points[d], w = this.data.points[d + 1], v = (a(g) + a(w)) / 2, k = (r(g) + r(w)) / 2;
        t.quadraticCurveTo(a(g), r(g), v, k);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return $t(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + n;
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
    let w, v;
    g < 0 ? (w = n.x, v = n.y) : g > 1 ? (w = i.x, v = i.y) : (w = n.x + g * r, v = n.y + g * l);
    const k = t.x - w, f = t.y - v;
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
let Di = we;
class Wn {
  static createAnnotation(t, n, i, s = {}) {
    switch (t) {
      case L.Rectangle:
        return new Rl(n, i);
      case L.Ellipse:
        return new Pl(n, i);
      case L.Line:
        return new El(n, i);
      case L.Arrow:
        return new Il(n, i);
      case L.Pen:
        return new Al(n, i);
      case L.Text:
        return new Ol(
          n,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case L.Mosaic:
        return new Di(
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
let Ni = We;
async function zl(e, t) {
  return await O("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const Dl = "snippets-code:developer-mode", ta = "snippets-code:frontend-diagnostics", Nl = 240, mn = "[REDACTED]", Gn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${mn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${mn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  mn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${mn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${mn}`
), is = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Gn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Gn(
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
    return Gn(String(e));
  }
}, Wl = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, $l = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(ta) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, ss = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Dl) === "true";
  } catch {
    return !1;
  }
}, Fl = (e, t, n) => {
  if (!ss() || typeof localStorage > "u") return;
  const i = $l();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Wl(),
    message: Gn(t),
    data: is(n)
  });
  try {
    localStorage.setItem(
      ta,
      JSON.stringify(i.slice(-Nl))
    );
  } catch {
  }
}, Bl = () => ss(), Hl = (e) => e === "warn" || e === "error" || !1 || !1 || ss(), $n = (e, t, n) => {
  Fl(e, t, n), Hl(e) && O("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : is(n)
  }).catch(() => {
  });
}, H = {
  info: (e, t, ...n) => {
    $n("info", e, t);
  },
  error: (e, t) => {
    $n("error", e, t);
  },
  warn: (e, t) => {
    $n("warn", e, t);
  },
  debug: (e, t) => {
    Bl() && $n("debug", e, t);
  }
}, Bt = {
  log: (e, t) => {
    O("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : is(t)
    }).catch(() => {
    });
  }
}, jl = "resources/transformers/transformers.min.js", Ul = ["translation-offline-runtime", "translation"], Vl = "https://huggingface.co/", Yl = "{model}/resolve/{revision}/", Gl = "/__snippets_code_disabled_transformers_local_models__/", Xl = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let pn = null;
const Kl = (e) => {
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
}, ea = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = Kl(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, na = (e) => {
  const t = ea(e);
  return Object.fromEntries(
    Xl.map((n) => [n, `${t}${n}`])
  );
}, ia = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Vl, e.remotePathTemplate = Yl, e.allowLocalModels = !1, e.localModelPath = Gl, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = na(t), e.backends.onnx.wasm.numThreads = 1);
};
async function Zl() {
  return pn || (pn = (async () => {
    for (const e of Ul) {
      const t = await zl(e, jl);
      if (!t) continue;
      const n = wl(t), i = await import(
        /* @vite-ignore */
        n
      );
      return ia(i.env, n), H.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw pn = null, e;
  }), pn);
}
let be = null, Sn = !1, en = null, Fe = null, Wi = null;
const ql = "Xenova/opus-mt-en-zh", Jl = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Ql = 3e5;
function tc(e) {
  Wi = e;
}
function ec() {
  return Jl;
}
function nc(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function sa() {
  return be || en || (Sn = !0, H.info("[离线翻译] 正在加载翻译模型..."), en = (async () => {
    try {
      const { pipeline: e, env: t } = await Zl();
      ia(t);
      let n = "";
      const i = e("translation", ql, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== n && (n = o.file, H.info(`[离线翻译] 已加载: ${o.file}`)), Wi && Wi({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return be = await nc(
        i,
        Ql,
        "模型加载超时，请检查网络连接后重试"
      ), H.info("[离线翻译] 翻译模型加载完成"), Sn = !1, be;
    } catch (e) {
      throw Sn = !1, en = null, H.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), en);
}
async function oa(e) {
  if (!e?.trim()) return e;
  Fe = new AbortController();
  const t = Fe.signal;
  try {
    const n = await sa();
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
    Fe = null;
  }
}
function ic() {
  Fe && (Fe.abort(), Fe = null, H.info("[离线翻译] 已发送取消信号"));
}
function sc() {
  return Fe !== null;
}
async function aa() {
  await sa();
}
function oc() {
  return be !== null;
}
function ac() {
  return Sn;
}
async function os() {
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
async function rc() {
  return (await os()).isCached;
}
function lc() {
  return be !== null;
}
async function cc() {
  if (be)
    try {
      await be.dispose?.();
    } catch {
    }
  be = null, en = null, Sn = !1, H.info("[离线翻译] 翻译器已释放");
}
async function uc() {
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
const hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: lc,
  cancelOfflineTranslation: ic,
  clearModelCache: uc,
  disposeOfflineTranslator: cc,
  getModelCacheInfo: os,
  getModelFiles: ec,
  getRuntimeBaseUrl: ea,
  getRuntimeWasmPaths: na,
  isModelCached: rc,
  isOfflineTranslatorInitializing: ac,
  isOfflineTranslatorReady: oc,
  isTranslationInProgress: sc,
  setProgressCallback: tc,
  translateOffline: oa,
  warmupOfflineTranslator: aa
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
    const n = Promise.resolve().then(() => ow).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const n = Promise.resolve(hc).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
function ra(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = e.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, d = n + s + a + l;
  return d === 0 ? "unknown" : s >= 3 && s > l && s / d >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / d >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function nn(e) {
  return e === "zh" || e === "en";
}
function De(e) {
  return ra(e);
}
const dc = /[.!?。！？；;：:][)"'”’】）\]]*$/, Ks = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, Fn = /[A-Za-z0-9]/, fc = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Zs = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function la(e, t = {}) {
  const n = Jc(e), i = Tc(e, n);
  return i.length === 0 ? [] : _c(i, n) ? kc(i, n) : (t.mode === "single_para" ? [vn(i, n)] : mc(i, n)).flatMap((o) => gc(o, n));
}
function gc(e, t) {
  const n = rs(e, t), i = [];
  for (const s of n) {
    const o = i[i.length - 1], a = o ? Ic(o, s, t) : !1;
    if (!o || !a) {
      i.push(Oc(s));
      continue;
    }
    o.text = Dc(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = ga(o.bbox, s.bbox), o.fontSize = Qs(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Qs(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return Nc(i, t);
}
function mc(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: Sc(l),
    block: l
  })).filter((l) => Cc(l.bbox)).sort(as);
  if (n.length <= 1)
    return [vn(e, t)];
  if (pc(n, t))
    return [vn(e, t)];
  const { cuts: i, rows: s } = wc(n);
  if (i.length < 2 || s.length <= 1)
    return [vn(e, t)];
  const o = xc(i, s), r = bc(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [vn(e, t)];
}
function pc(e, t) {
  if (e.length < 2)
    return !0;
  const n = [...e].sort(as);
  let i = 0, s = 0;
  for (let o = 1; o < n.length; o += 1) {
    const a = n[o - 1].bbox, r = n[o].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const c = Math.min(a.right, r.right) - Math.max(a.left, r.left), d = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), g = c / d >= 0.45, w = Math.abs(a.left - r.left) <= t * 1.5;
    (g || w) && (s += 1);
  }
  return i > 0 && s / i >= 0.72;
}
function wc(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < e.length; ) {
    const c = e[a].bbox.bottom, d = [];
    for (; a < e.length && e[a].bbox.top <= c; )
      d.push(e[a]), a += 1;
    d.sort((f, b) => f.bbox.left - b.bbox.left || f.bbox.right - b.bbox.right);
    const g = yc(d, t, n, i.length), { gaps: w, removedGaps: v } = vc(o, g), k = i.length - 1;
    for (const f of v)
      s.push({
        left: f.left,
        right: f.right,
        startRow: f.startRow,
        endRow: k
      });
    o = w, i.push(d);
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
function yc(e, t, n, i) {
  const s = [];
  let o = t;
  for (const a of e)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: n, startRow: i }), s;
}
function vc(e, t) {
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
function xc(e, t) {
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
    const l = r.xRight - 2, c = s.filter((v) => l >= v.xLeft && l <= v.xRight + 1e-4 && v.rowBottom < r.rowTop), d = Math.max(...c.map((v) => v.rowBottom), i.rowBottom), g = c.filter((v) => v.rowBottom === d);
    (g.length > 0 ? g.reduce((v, k) => k.xRight > v.xRight ? k : v) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = n[r], c = [];
    for (const v of o) {
      let k = !1, f = !1, b = !1;
      for (const p of l)
        if (Bn(p.right, v.xLeft) && (k = !0), Bn(p.left, v.xRight) && (f = !0), v.xLeft < p.left && p.left < v.xRight || v.xLeft < p.right && p.right < v.xRight) {
          b = !0;
          break;
        }
      !k || !f || b ? a(v) : (v.rowBottom = r, c.push(v));
    }
    o = c;
    let d = 0, g = 0;
    const w = t[r];
    for (; d < w.length && l.length >= 2; ) {
      const v = w[d];
      g + 1 >= l.length && (g = Math.max(0, l.length - 2));
      const k = l[g].right, f = l[g + 1].left;
      if (v.bbox.left + 1e-4 > f && g < l.length - 2) {
        g += 1;
        continue;
      }
      let b = o.find((p) => Bn(p.xLeft, k) && Bn(p.xRight, f));
      b || (b = {
        xLeft: k,
        xRight: f,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(b)), b.units.push(v), d += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(as);
  return i;
}
function bc(e) {
  const t = [e], n = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (n.push(i), t.push(...[...i.children].reverse()));
  }
  return n;
}
function vn(e, t) {
  return [...e].sort((n, i) => {
    const s = n.y - i.y;
    return Math.abs(s) > t * 0.45 ? s : n.x - i.x;
  });
}
function kc(e, t) {
  const n = Pe(ie(e.map((a) => a.width)), t * 0.5), i = Math.max(n * 1.4, t * 0.28), s = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? ie(l.map((d) => d.x + d.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((w, v) => w.y - v.y), l = r.reduce((w, v, k) => {
      const f = v.text.trim();
      return k === 0 ? f : ls(w, f);
    }, ""), c = fa(r), d = ie(r.map((w) => Pe(w.fontSize, t))), g = ie(r.map((w) => li(w)));
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: d,
      lineHeight: g,
      angle: ie(r.map((w) => w.angle || 0))
    };
  });
}
function _c(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function Sc(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Cc(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function as(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function Bn(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function Tc(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || Mc(n, t) || Rc(i))
      return null;
    const s = Pc(Lc(i, n, t));
    return s === n.text ? n : { ...n, text: s };
  }).filter((n) => !!n);
}
function Mc(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function Lc(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function Rc(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function Pc(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function rs(e, t) {
  const n = [...e].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of n) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !Gc(a.blocks, o, t) ? (a.blocks.push(o), a.y = ie(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => Ec(o.blocks, t));
}
function Ec(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = fa(n), s = n.reduce((r, l, c) => {
    const d = l.text.trim();
    return c === 0 ? d : zc(r, d);
  }, ""), o = ie(n.map((r) => Pe(r.fontSize, t))), a = ie(n.map((r) => li(r)));
  return {
    text: s,
    blocks: n,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: Xc(n, t),
    isCodeLike: ha(s)
  };
}
function Ic(e, t, n) {
  const i = rs(e.blocks, n), s = i[i.length - 1];
  if (!s) return !1;
  const o = Mn(s.text);
  if (ri(s.text) || Mn(t.text) || o && !Ac(s, t, n) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -n * 0.25 || a >= n * 1.8 || Hc(i, a, n) || jc(s, t, a, n) || Uc(s, t, a, n) || Vc(s, t, a, n) || Yc(s, t, a, n))
    return !1;
  if (o)
    return !0;
  const r = Math.max(n * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function Ac(e, t, n) {
  if (ua(t.text))
    return !1;
  const i = t.bbox.x - e.bbox.x, s = Math.max(n * 0.8, e.lineHeight * 0.65);
  return i >= s;
}
function Oc(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: ie(e.blocks.map((t) => t.angle || 0))
  };
}
function zc(e, t) {
  return ls(e, t);
}
function Dc(e, t) {
  return ls(e, t);
}
function ls(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const s = n.charAt(n.length - 1), o = i.charAt(0), a = n.charAt(n.length - 2);
  return s === "-" && Fn.test(a) && Fn.test(o) ? `${n.slice(0, -1)}${i}` : Qc(o) || tu(s) ? `${n}${i}` : Ks.test(s) || Ks.test(o) || to(s) || to(o) ? `${n}${i}` : Fn.test(s) && Fn.test(o) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function ri(e) {
  return dc.test(e.trim());
}
function Mn(e) {
  return fc.test(e);
}
function Nc(e, t) {
  return e.flatMap((n) => Wc(n, t));
}
function Wc(e, t) {
  const n = ca(e.text);
  if (n.length <= 1)
    return [e];
  const i = rs(e.blocks, t), s = i.length === n.length;
  return n.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || Fc(e.bbox, a, n.length), c = r?.blocks || [Bc(e, o, l, a)];
    return {
      ...e,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((d) => ha(d.text)),
      isStructuredBlock: e.isStructuredBlock,
      fontSize: ie(c.map((d) => Pe(d.fontSize, e.fontSize || t))),
      lineHeight: ie(c.map((d) => li(d))),
      angle: ie(c.map((d) => d.angle || 0))
    };
  });
}
function ca(e) {
  const t = e.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(ca);
  const n = $c(e);
  return n.length > 1 ? n.flatMap(qs) : qs(e);
}
function $c(e) {
  const t = e.trim(), n = [];
  Zs.lastIndex = 0;
  for (const i of t.matchAll(Zs)) {
    const s = i[0], o = i.index ?? 0;
    n.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return n.length <= 1 ? [t] : n.map((i, s) => {
    const o = n[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function qs(e) {
  const t = e.trim();
  if (!Mn(t))
    return [t];
  const n = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !n || !ua(n[2]) ? [t] : [n[1].trim(), n[2].trim()];
}
function Fc(e, t, n) {
  const i = e.height / Math.max(n, 1);
  return {
    x: e.x,
    y: e.y + i * t,
    width: e.width,
    height: i
  };
}
function Bc(e, t, n, i) {
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
function ua(e) {
  const t = e.trim();
  return !t || ri(t) || Mn(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Hc(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? ie(i) : 0, o = Math.max(s * 2.2, n * 1.15);
  return t > o;
}
function jc(e, t, n, i) {
  const s = e.text.trim();
  if (!s || ri(s) || Mn(s) || e.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function Uc(e, t, n, i) {
  if (n <= 0)
    return !1;
  const s = Math.max(e.fontSize, t.fontSize), o = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = s / o, r = n / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Vc(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const o = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Yc(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Js(e.text) && Js(t.text);
}
function Js(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !ri(t);
}
function ha(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Gc(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > n * 0.9 && qc(s.text) && da(t.text) ? !1 : o > n * 3.2;
}
function Xc(e, t) {
  if (e.length < 2)
    return e.some((s) => Kc(s.text));
  const n = [...e].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < n.length; s++) {
    const o = n[s - 1], a = n[s], r = n[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && Zc(o.text) && da(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Kc(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Zc(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function qc(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function da(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function fa(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => ga(n, i), t[0]);
}
function ga(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), s = Math.max(e.x + e.width, t.x + t.width), o = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: s - n,
    height: o - i
  };
}
function Jc(e) {
  return Pe(ie(e.map((t) => li(t))), 16);
}
function li(e) {
  return Pe(e.lineHeight, Pe(e.height, Pe(e.fontSize, 16) * 1.2));
}
function Qs(e, t, n, i) {
  const s = t + i;
  return s <= 0 ? n : (e * t + n * i) / s;
}
function Pe(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function ie(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function Qc(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function tu(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function to(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class eu {
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
    V(this, "canvasPool", Ni.getInstance());
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
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Ml(t), this.drawingEngine = new Tl(t, this.coordinateSystem), this.eventHandler = new Ll(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
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
    if (this.annotations = t.annotations.map((n) => Wn.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
        const s = await O("get_screenshot_preview");
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
        const s = await O("get_screenshot_background");
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
            O("get_cached_monitor_info"),
            O("get_cached_window_list")
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
            O("get_window_info"),
            O("get_all_windows")
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
        const r = await O("get_cached_monitor_info");
        s = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        s = await O("get_window_info");
      }
      let o;
      try {
        const r = await O("get_mouse_position"), l = s?.scale || 1;
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
      this.eventHandler.updateMousePosition(n), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && $t(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
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
    const w = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((f) => ({
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
    })), v = w.filter((f) => f.isStructuredBlock), k = w.filter((f) => !f.isStructuredBlock);
    k.length > 0 && this.drawFlowedTranslationBlocks(t, k, n, i, a, s, o);
    for (const f of v)
      this.drawStructuredTranslationBlock(t, f, n, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, s, o, a, r) {
    const l = [...n].filter((x) => (x.translatedText || x.text).trim()).sort((x, T) => {
      const A = x.bbox.y - T.bbox.y;
      return Math.abs(A) > 4 ? A : x.bbox.x - T.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), d = o, g = (x, T, A) => l.map((z) => {
      const R = (z.translatedText || z.text).trim(), j = Math.max(12, Math.min(z.fontSize || 16, 48)), q = Math.max(8, Math.round(j * x)), it = z.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', rt = Math.max(
        o,
        Math.min(z.bbox.x + o, a * 0.38)
      ), st = T ? o : rt, ct = Math.max(48, a - st - d), Rt = z.lineHeight || q * 1.35, mt = Math.max(
        q * (A ? 1.04 : 1.14),
        Math.min(Rt * x, q * (A ? 1.18 : 1.42))
      );
      return t.font = `${q}px ${it}`, {
        text: R,
        fontSize: q,
        fontFamily: it,
        lineHeight: mt,
        paragraphGap: A ? Math.max(1, mt * 0.16) : Math.max(3, mt * 0.35),
        x: i + st,
        lines: this.wrapTextToLines(t, R, ct)
      };
    }), w = (x) => x.reduce((T, A, z) => {
      const R = z === x.length - 1 ? 0 : A.paragraphGap;
      return T + A.lines.length * A.lineHeight + R;
    }, 0);
    let v = g(1, !1, !1), k = w(v);
    if (k > c) {
      const x = Math.max(0.56, c / k);
      v = g(x, !1, !1), k = w(v);
    }
    if (k > c && (v = g(1, !0, !1), k = w(v)), k > c) {
      const x = Math.max(0.38, c / k * 0.96);
      v = g(x, !0, !0), k = w(v);
    }
    if (k > c) {
      const x = Math.max(0.3, c / k * 0.94);
      v = g(x, !0, !0), k = w(v);
    }
    const f = Math.min(...l.map((x) => x.bbox.y)), b = s + Math.max(o, Math.min(f, r - o)), p = s + r - o;
    let M = b + k > p ? s + o : b;
    for (const x of v) {
      t.font = `${x.fontSize}px ${x.fontFamily}`;
      for (const T of x.lines)
        t.fillText(T, x.x, M), M += x.lineHeight;
      M += x.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, s, o, a, r) {
    const l = [...n.blocks].sort((g, w) => g.x - w.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), d = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const g of l) {
      const w = g.translatedText || g.text;
      if (!w.trim()) continue;
      const v = i + g.x + Math.min(4, o), k = s + g.y, f = l.find((x) => x.x > g.x), b = f ? Math.max(g.width, f.x - g.x - 8) : Math.max(g.width, a - g.x - o), p = this.wrapTextToLines(t, w.trim(), b);
      let M = k;
      for (const x of p) {
        if (M + c > s + r) break;
        t.fillText(x, v, M), M += d;
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
        const w = d + g;
        t.measureText(w).width > i && d !== "" ? (o.push(d), d = g) : d = w;
      }
      r = d;
    };
    for (const c of a) {
      const d = /^\s+$/.test(c), g = d ? " " : c, w = r + g;
      if (t.measureText(w).width <= i) {
        r = w;
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
    const c = this.backgroundImage.width, d = this.backgroundImage.height, g = this.canvas.width / s, w = this.canvas.height / s, v = c / g, k = d / w, f = t.x * v, b = t.y * k, p = t.width * v, M = t.height * k;
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
    } catch (tt) {
      return H.error("[截图] 采样区域绘制失败", tt), this.canvasPool.release(r), i;
    }
    let x;
    try {
      x = l.getImageData(0, 0, o, a);
    } catch (tt) {
      return H.error("[截图] 获取像素数据失败", tt), this.canvasPool.release(r), i;
    }
    const T = x.data, A = Math.ceil(Math.sqrt(n)), z = o / (A + 1), R = a / (A + 1);
    let j = 0, q = 0, it = 0, rt = 0;
    for (let tt = 1; tt <= A; tt++)
      for (let ut = 1; ut <= A && !(rt >= n); ut++) {
        const Mt = Math.floor(ut * z), pt = Math.floor(tt * R);
        if (Mt >= 0 && Mt < o && pt >= 0 && pt < a) {
          const U = (pt * o + Mt) * 4;
          U >= 0 && U + 2 < T.length && (j += T[U], q += T[U + 1], it += T[U + 2], rt++);
        }
      }
    if (this.canvasPool.release(r), rt === 0)
      return i;
    const st = Math.round(j / rt), ct = Math.round(q / rt), Rt = Math.round(it / rt), mt = this.getBrightness(st, ct, Rt);
    return {
      r: st,
      g: ct,
      b: Rt,
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
    const c = this.backgroundImage.width, d = this.backgroundImage.height, g = this.canvas.width / s, w = this.canvas.height / s, v = c / g, k = d / w, f = t.x * v, b = t.y * k, p = t.width * v, M = t.height * k;
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
    } catch (tt) {
      return H.error("[截图] isUniformColor: 采样区域绘制失败", tt), this.canvasPool.release(r), !1;
    }
    let x;
    try {
      x = l.getImageData(0, 0, o, a);
    } catch (tt) {
      return H.error("[截图] isUniformColor: 获取像素数据失败", tt), this.canvasPool.release(r), !1;
    }
    const T = x.data, A = Math.ceil(Math.sqrt(i)), z = o / (A + 1), R = a / (A + 1), j = [];
    for (let tt = 1; tt <= A; tt++)
      for (let ut = 1; ut <= A && !(j.length >= i); ut++) {
        const Mt = Math.floor(ut * z), pt = Math.floor(tt * R);
        if (Mt >= 0 && Mt < o && pt >= 0 && pt < a) {
          const U = (pt * o + Mt) * 4;
          U >= 0 && U + 2 < T.length && j.push({
            r: T[U],
            g: T[U + 1],
            b: T[U + 2]
          });
        }
      }
    if (this.canvasPool.release(r), j.length < 2)
      return !1;
    const q = j.reduce((tt, ut) => tt + ut.r, 0) / j.length, it = j.reduce((tt, ut) => tt + ut.g, 0) / j.length, rt = j.reduce((tt, ut) => tt + ut.b, 0) / j.length, st = j.reduce((tt, ut) => tt + Math.pow(ut.r - q, 2), 0) / j.length, ct = j.reduce((tt, ut) => tt + Math.pow(ut.g - it, 2), 0) / j.length, Rt = j.reduce((tt, ut) => tt + Math.pow(ut.b - rt, 2), 0) / j.length;
    return (st + ct + Rt) / 3 < n;
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
        const i = ns(this.snappedWindow).x, s = this.snappedWindow.y - 5, o = t.measureText(this.snappedWindow.title), a = 4;
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
    if (Wn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === L.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = Wn.createAnnotation(
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
    n.forEach((v) => {
      i = Math.min(i, v.x), s = Math.max(s, v.x), o = Math.min(o, v.y), a = Math.max(a, v.y);
    });
    const r = s - i, l = a - o;
    let c = 0;
    for (let v = 1; v < n.length; v++)
      c += $t(n[v - 1], n[v]);
    const g = $t(n[0], n[n.length - 1]) / c, w = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (g > 0.85 || w > 5) {
      const v = n[0], k = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [v, k] });
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
    const i = Wn.createAnnotation(
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
      const { x: n, y: i, width: s, height: o } = this.selectionRect, r = (await O("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, s, o);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await O("copy_to_clipboard", { image: c }) : await O("save_screenshot_to_file", { image: c });
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
          let bt = 0;
          for (; !this.backgroundImage && bt < 3e3; )
            await new Promise((J) => setTimeout(J, 100)), bt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, d = Math.max(0, o.padding || 0), g = this.canvas.width / c, w = this.canvas.height / c, v = t - d, k = n - d, f = i + d * 2, b = s + d * 2, p = Math.max(1, Math.round(f * c)), M = Math.max(1, Math.round(b * c)), x = Math.max(0, v), T = Math.max(0, k), A = Math.min(g, v + f), z = Math.min(w, k + b), R = Math.max(0, A - x), j = Math.max(0, z - T), q = Math.round(x * c), it = Math.round(T * c), rt = Math.min(
          this.canvas.width - q,
          Math.round(R * c)
        ), st = Math.min(
          this.canvas.height - it,
          Math.round(j * c)
        ), ct = Math.round((x - v) * c), Rt = Math.round((T - k) * c), mt = document.createElement("canvas");
        mt.width = p, mt.height = M;
        const tt = mt.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!tt)
          throw new Error("无法获取2D绘图上下文");
        tt.imageSmoothingEnabled = !1, o.fillColor && (tt.fillStyle = o.fillColor, tt.fillRect(0, 0, p, M)), rt > 0 && st > 0 && tt.drawImage(
          this.backgroundImage,
          q,
          it,
          rt,
          st,
          ct,
          Rt,
          rt,
          st
        );
        const Mt = mt.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: Mt,
          adjusted_width: p,
          adjusted_height: M,
          logical_x: v,
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
            const g = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, w = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, v = this.drawingEngine.createScreenshotContext(
              l,
              g,
              w
            );
            this.annotations.forEach((k, f) => {
              try {
                k.drawToScreenshot(v);
              } catch (b) {
                H.error(`[截图] 绘制标注 ${f} 失败`, b);
              }
            });
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), s(d);
        } catch (d) {
          H.error("[截图] 绘制过程出错", d);
          try {
            const g = r.toDataURL("image/png");
            clearTimeout(a), s(g);
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
        const { x: n, y: i, width: s, height: o } = this.selectionRect, a = await O("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), d = Math.round(s * r), g = Math.round(o * r), w = Math.round(a.x + window.innerWidth * r), v = Math.round(a.y + window.innerHeight * r), k = t === "ocr" ? Math.min(Math.max(d, 760), Math.max(360, w - a.x)) : d, f = t === "ocr" ? Math.min(Math.max(g, 520), Math.max(260, v - a.y)) : g, b = t === "ocr" ? Math.round(l - Math.max(0, k - d) / 2) : l, p = t === "ocr" ? Math.max(a.x, Math.min(b, w - k)) : l, M = t === "ocr" ? Math.max(a.y, Math.min(c, v - f)) : c, x = {}, T = await this.cropFromBackground(n, i, s, o, x);
        if (!T?.image)
          throw new Error("Failed to crop from background image");
        const A = await this.renderWithAnnotations(T, r, "save");
        await O("create_pin_window", {
          mode: t,
          imageData: A,
          x: p,
          y: M,
          width: k,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new An("screenshot").close();
        }, 100);
      } catch (n) {
        throw H.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, n), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await O("get_window_info"), i = n?.scale || 1, s = Math.round(n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), o = Math.round(n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await O("get_pixel_color", {
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
        const n = await O("get_window_info"), i = n?.scale || 1, s = this.colorPickerState.zoomFactor, o = Math.floor(s / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await O("get_screen_preview", {
          x: a - o,
          y: r - o,
          width: s,
          height: s
        }), c = new Image();
        c.src = `data:image/png;base64,${l.image}`, await c.decode();
        const d = await createImageBitmap(c);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = d;
        const w = new OffscreenCanvas(s, s).getContext("2d");
        if (w) {
          w.drawImage(d, 0, 0, s, s);
          const v = w.getImageData(o, o, 1, 1).data, k = { r: v[0], g: v[1], b: v[2] }, f = this.rgbToHex(k.r, k.g, k.b);
          this.colorPickerState.colorInfo = { rgb: k, hex: f, position: t };
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
        const { x: r, y: l, width: c, height: d } = this.selectionRect, g = window.devicePixelRatio || 1, w = c * g, v = d * g, k = this.canvasPool.acquire(w, v), f = k.getContext("2d");
        if (!f)
          throw this.canvasPool.release(k), new Error("无法创建临时canvas");
        const b = r * g, p = l * g, M = performance.now();
        f.drawImage(
          this.backgroundImage,
          b,
          p,
          w,
          v,
          0,
          0,
          w,
          v
        ), n = Math.round(performance.now() - M);
        const x = performance.now(), { recognizeFromCanvas: T } = await Ne.loadOCR();
        i = Math.round(performance.now() - x);
        const A = performance.now(), z = await T(k);
        s = Math.round(performance.now() - A), this.canvasPool.release(k);
        const R = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: z.confidence,
          rawLineCount: z.blocks.length,
          textLength: z.full_text.trim().length
        };
        H.info("[OCR] 识别耗时统计", R), Bt.log("[OCR] recognition timing", R);
        const j = z.blocks, q = performance.now(), it = la(j);
        o = Math.round(performance.now() - q);
        const rt = it.map((D) => D.text).join(`

`), st = {
          rawLineCount: j.length,
          paragraphCount: it.length,
          durationMs: o,
          paragraphs: it.map((D, lt) => ({
            index: lt,
            text: D.text,
            blockCount: D.blocks.length,
            isCodeBlock: !!D.isCodeBlock,
            isStructuredBlock: !!D.isStructuredBlock,
            bbox: D.bbox,
            sourceBlocks: D.blocks.map((ft) => ({
              text: ft.text,
              x: ft.x,
              y: ft.y,
              width: ft.width,
              height: ft.height
            }))
          }))
        };
        if (H.info("[OCR] 版面重组完成", st), Bt.log("[OCR] layout reflow complete", st), !rt || !rt.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ct = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(De(rt));
        const Rt = (D) => {
          const lt = D.trim();
          return !!(lt.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !lt.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let mt = "";
        const tt = De(rt), ut = {
          detectedLanguage: tt,
          textLength: rt.trim().length,
          textPreview: rt.trim().slice(0, 500)
        };
        H.info("[OCR] 翻译语言检测完成", ut), Bt.log("[OCR] translation language detected", ut), nn(tt) && (this.translationOverlay.sourceLanguage = tt, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(tt));
        const Mt = ct === "offline" ? Ne.loadOfflineTranslator() : null, pt = (D) => D.includes("插件") && D.includes("未启用") ? D.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : D : ct === "offline" ? D.includes("未激活") || D.includes("未下载") || D.includes("运行时未安装") ? D : D.includes("超时") ? "模型加载超时，请重试" : D.includes("离线翻译暂仅支持") ? D : "离线翻译失败: " + D.substring(0, 50) : D.includes("timeout") || D.includes("超时") ? "翻译超时，请检查网络连接" : D.includes("network") || D.includes("网络") || D.includes("请求") || D.includes("令牌") ? "翻译失败，请检查网络连接" : D.trim() ? D.slice(0, 80) : "翻译失败，请检查网络连接", U = async () => {
          if (!Mt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: D,
            canUseOfflineTranslation: lt,
            warmupOfflineTranslator: ft,
            getModelCacheInfo: St
          } = await Mt, wt = lt();
          if (this.offlineModelActivated && !wt)
            if ((await St()).isCached)
              await ft();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return D;
        }, bt = async (D, lt, ft) => {
          if (!D.trim())
            return D;
          if (ct === "offline") {
            if (lt !== "en" || ft !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await U())(D);
          }
          return await O("translate_text", {
            text: D,
            from: lt,
            to: ft,
            engine: ct
          });
        }, J = (D) => {
          const lt = D.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(lt) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(lt);
        }, Ot = async (D, lt, ft) => {
          const St = D.trim();
          if (!St || Rt(St))
            return D;
          const wt = D.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (wt) {
            const [, I, $, ot, nt, C] = wt, W = De($), gt = J($) || !nn(W) ? $ : await bt($, W, this.getAutoTargetLanguage(W)), ht = De(nt), se = nn(ht) && !Rt(nt) ? await bt(nt, ht, this.getAutoTargetLanguage(ht)) : nt;
            return `${I}${gt}${ot}${se}${C}`;
          }
          if (J(St))
            return D;
          const Et = De(St);
          if (!nn(Et))
            return D;
          const E = this.getAutoTargetLanguage(Et), h = await bt(St, Et, E), m = {
            paragraphIndex: lt,
            blockIndex: ft,
            sourceLanguage: Et,
            targetLanguage: E,
            sourceText: St,
            translatedText: h.slice(0, 200)
          };
          return H.info("[OCR] 结构化块翻译完成", m), Bt.log("[OCR] structured block translation complete", m), h;
        }, Ht = async (D, lt) => {
          const ft = performance.now(), St = (h) => ({
            index: lt,
            durationMs: Math.round(performance.now() - ft),
            ...h
          }), wt = De(D.text), Et = this.getAutoTargetLanguage(wt), E = {
            index: lt,
            text: D.text,
            sourceLanguage: wt,
            targetLanguage: Et,
            engine: ct,
            structured: !!D.isStructuredBlock
          };
          if (H.info("[OCR] 段落翻译方向", E), Bt.log("[OCR] paragraph translation direction", E), !nn(wt)) {
            D.translatedText = D.text;
            const h = St({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), m = {
              index: lt,
              detectedLanguage: wt,
              durationMs: h.durationMs,
              text: D.text
            };
            return H.warn("[OCR] 跳过不支持的段落语言", m), Bt.log("[OCR] skip unsupported paragraph language", m), h;
          }
          try {
            if (D.isStructuredBlock && D.blocks.length > 0) {
              const I = async (ot, nt) => {
                const C = await Ot(ot.text, lt, nt);
                return ot.translatedText = C, C;
              }, $ = [];
              if (ct === "offline")
                for (let ot = 0; ot < D.blocks.length; ot += 1)
                  $.push(await I(D.blocks[ot], ot));
              else
                $.push(
                  ...await Promise.all(
                    D.blocks.map((ot, nt) => I(ot, nt))
                  )
                );
              D.translatedText = $.join(" ");
            } else if (Rt(D.text) || D.isCodeBlock) {
              D.translatedText = D.text;
              const I = D.isCodeBlock ? "code_block" : "command_like_text", $ = St({ skipped: !0, cancelled: !1 }), ot = {
                index: lt,
                reason: I,
                durationMs: $.durationMs,
                text: D.text
              };
              return H.info("[OCR] 跳过代码段翻译", ot), Bt.log("[OCR] skip code paragraph translation", ot), $;
            } else
              D.translatedText = await bt(
                D.text,
                wt,
                Et
              );
            const h = St({ skipped: !1, cancelled: !1 }), m = {
              index: lt,
              durationMs: h.durationMs,
              sourceLanguage: wt,
              targetLanguage: Et,
              engine: ct,
              structured: !!D.isStructuredBlock,
              sourceLength: D.text.length,
              translatedLength: (D.translatedText || "").length,
              translatedPreview: (D.translatedText || "").slice(0, 300)
            };
            return H.info("[OCR] 段落翻译完成", m), Bt.log("[OCR] paragraph translation complete", m), h;
          } catch (h) {
            const m = h instanceof Error ? h.message : String(h);
            if (m === "翻译已取消")
              return St({ skipped: !1, cancelled: !0 });
            D.translatedText = D.text;
            const I = pt(m), $ = St({
              skipped: !1,
              cancelled: !1,
              errorMessage: I
            }), ot = {
              index: lt,
              durationMs: $.durationMs,
              sourceLanguage: wt,
              targetLanguage: Et,
              engine: ct,
              error: m,
              structured: !!D.isStructuredBlock,
              text: D.text
            };
            return H.error("[OCR] 段落翻译失败", ot), Bt.log("[OCR] paragraph translation failed", ot), $;
          }
        }, te = performance.now();
        let kt = [];
        if (ct === "offline")
          for (let D = 0; D < it.length; D += 1) {
            const lt = await Ht(it[D], D);
            if (kt.push(lt), lt.cancelled)
              return;
            if (lt.errorMessage) {
              mt = lt.errorMessage;
              break;
            }
          }
        else {
          if (kt = await Promise.all(
            it.map((D, lt) => Ht(D, lt))
          ), kt.some((D) => D.cancelled))
            return;
          mt = kt.find((D) => D.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - te);
        const _t = {
          durationMs: a,
          engine: ct,
          paragraphCount: it.length,
          translatedParagraphCount: kt.filter((D) => !D.skipped && !D.errorMessage).length,
          skippedParagraphCount: kt.filter((D) => D.skipped).length,
          failedParagraphCount: kt.filter((D) => !!D.errorMessage).length
        };
        H.info("[OCR] 翻译耗时统计", _t), Bt.log("[OCR] translation timing", _t);
        const jt = it.map((D) => this.toDisplayParagraph(D, g)), ee = jt.map((D) => this.toLegacyOverlayBlock(D));
        this.translationOverlay.blocks = ee, this.translationOverlay.paragraphBlocks = jt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = mt || void 0;
        const Ut = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: j.length,
          paragraphCount: it.length,
          engine: ct
        };
        H.info("[OCR] 截图翻译总耗时统计", Ut), Bt.log("[OCR] pipeline timing", Ut), this.draw(), this.onStateChange?.();
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
var nu = {
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
function iu() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function su(e, t, n) {
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
var ou = Symbol("icon-context");
function Tt(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = iu(), r = Re(ou, nu);
      return function() {
        var l = o.size, c = o.strokeWidth, d = o.strokeLinecap, g = o.strokeLinejoin, w = o.theme, v = o.fill, k = o.spin, f = su(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: g,
          theme: w,
          fill: v
        }, r), b = [r.prefix + "-icon"];
        return b.push(r.prefix + "-icon-" + e), t && r.rtl && b.push(r.prefix + "-icon-rtl"), k && b.push(r.prefix + "-icon-spin"), S("span", {
          class: b.join(" ")
        }, [n(f)]);
      };
    }
  };
  return i;
}
const au = Tt("arrow-right-up", !0, function(e) {
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
}), $i = Tt("check", !0, function(e) {
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
}), Fi = Tt("close", !1, function(e) {
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
}), Ri = Tt("copy", !0, function(e) {
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
}), ru = Tt("delete-four", !1, function(e) {
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
}), eo = Tt("down", !1, function(e) {
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
}), lu = Tt("download", !1, function(e) {
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
}), cu = Tt("font-size", !0, function(e) {
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
}), uu = Tt("go-on", !0, function(e) {
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
}), no = Tt("loading", !0, function(e) {
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
}), ma = Tt("minus", !1, function(e) {
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
}), hu = Tt("more", !1, function(e) {
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
}), du = Tt("mosaic", !0, function(e) {
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
}), fu = Tt("move-one", !0, function(e) {
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
}), gu = Tt("picture", !0, function(e) {
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
}), io = Tt("pin", !0, function(e) {
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
}), so = Tt("platte", !0, function(e) {
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
}), Bi = Tt("pushpin", !1, function(e) {
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
}), mu = Tt("rectangle-one", !1, function(e) {
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
}), pu = Tt("redo", !0, function(e) {
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
}), wu = Tt("refresh", !0, function(e) {
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
}), yu = Tt("return", !0, function(e) {
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
}), vu = Tt("round", !1, function(e) {
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
}), oo = Tt("save", !0, function(e) {
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
}), xu = Tt("square", !1, function(e) {
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
}), xn = Tt("text-recognition", !1, function(e) {
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
}), pa = Tt("translate", !0, function(e) {
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
}), bu = Tt("write", !0, function(e) {
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
function ku(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ao = typeof window < "u", Ye = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), _u = (e, t, n) => Su({ l: e, k: t, s: n }), Su = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Yt = (e) => typeof e == "number" && isFinite(e), Cu = (e) => cs(e) === "[object Date]", ei = (e) => cs(e) === "[object RegExp]", ci = (e) => yt(e) && Object.keys(e).length === 0, Gt = Object.assign, Tu = Object.create, Ct = (e = null) => Tu(e);
let ro;
const Xn = () => ro || (ro = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ct());
function lo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function co(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Mu(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, s, o) => `${s}="${co(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, s, o) => `${s}='${co(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    e = e.replace(i, "$1javascript&#58;");
  }), e;
}
const Lu = Object.prototype.hasOwnProperty;
function de(e, t) {
  return Lu.call(e, t);
}
const Nt = Array.isArray, At = (e) => typeof e == "function", Q = (e) => typeof e == "string", Dt = (e) => typeof e == "boolean", vt = (e) => e !== null && typeof e == "object", Ru = (e) => vt(e) && At(e.then) && At(e.catch), wa = Object.prototype.toString, cs = (e) => wa.call(e), yt = (e) => cs(e) === "[object Object]", Pu = (e) => e == null ? "" : Nt(e) || yt(e) && e.toString === wa ? JSON.stringify(e, null, 2) : String(e);
function us(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Hn = (e) => !vt(e) || Nt(e);
function Kn(e, t) {
  if (Hn(e) || Hn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      o !== "__proto__" && (vt(i[o]) && !vt(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : Ct()), Hn(s[o]) || Hn(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Eu(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Hi(e, t, n) {
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
}, Iu = 17;
function ui(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function Au(e) {
  throw e;
}
const ge = " ", Ou = "\r", Kt = `
`, zu = "\u2028", Du = "\u2029";
function Nu(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (R) => t[R] === Ou && t[R + 1] === Kt, r = (R) => t[R] === Kt, l = (R) => t[R] === Du, c = (R) => t[R] === zu, d = (R) => a(R) || r(R) || l(R) || c(R), g = () => n, w = () => i, v = () => s, k = () => o, f = (R) => a(R) || l(R) || c(R) ? Kt : t[R], b = () => f(n), p = () => f(n + o);
  function M() {
    return o = 0, d(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function x() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function T() {
    n = 0, i = 1, s = 1, o = 0;
  }
  function A(R = 0) {
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
    line: w,
    column: v,
    peekOffset: k,
    charAt: f,
    currentChar: b,
    currentPeek: p,
    next: M,
    peek: x,
    reset: T,
    resetPeek: A,
    skipToPeek: z
  };
}
const ve = void 0, Wu = ".", uo = "'", $u = "tokenizer";
function Fu(e, t = {}) {
  const n = t.location !== !1, i = Nu(e), s = () => i.index(), o = () => Eu(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
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
  function g(h, m, I, ...$) {
    const ot = c();
    if (m.column += I, m.offset += I, d) {
      const nt = n ? Hi(ot.startLoc, m) : null, C = ui(h, nt, {
        domain: $u,
        args: $
      });
      d(C);
    }
  }
  function w(h, m, I) {
    h.endLoc = o(), h.currentType = m;
    const $ = { type: m };
    return n && ($.loc = Hi(h.startLoc, h.endLoc)), I != null && ($.value = I), $;
  }
  const v = (h) => w(
    h,
    13
    /* TokenTypes.EOF */
  );
  function k(h, m) {
    return h.currentChar() === m ? (h.next(), m) : (g(xt.EXPECTED_TOKEN, o(), 0, m), "");
  }
  function f(h) {
    let m = "";
    for (; h.currentPeek() === ge || h.currentPeek() === Kt; )
      m += h.currentPeek(), h.peek();
    return m;
  }
  function b(h) {
    const m = f(h);
    return h.skipToPeek(), m;
  }
  function p(h) {
    if (h === ve)
      return !1;
    const m = h.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function M(h) {
    if (h === ve)
      return !1;
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function x(h, m) {
    const { currentType: I } = m;
    if (I !== 2)
      return !1;
    f(h);
    const $ = p(h.currentPeek());
    return h.resetPeek(), $;
  }
  function T(h, m) {
    const { currentType: I } = m;
    if (I !== 2)
      return !1;
    f(h);
    const $ = h.currentPeek() === "-" ? h.peek() : h.currentPeek(), ot = M($);
    return h.resetPeek(), ot;
  }
  function A(h, m) {
    const { currentType: I } = m;
    if (I !== 2)
      return !1;
    f(h);
    const $ = h.currentPeek() === uo;
    return h.resetPeek(), $;
  }
  function z(h, m) {
    const { currentType: I } = m;
    if (I !== 7)
      return !1;
    f(h);
    const $ = h.currentPeek() === ".";
    return h.resetPeek(), $;
  }
  function R(h, m) {
    const { currentType: I } = m;
    if (I !== 8)
      return !1;
    f(h);
    const $ = p(h.currentPeek());
    return h.resetPeek(), $;
  }
  function j(h, m) {
    const { currentType: I } = m;
    if (!(I === 7 || I === 11))
      return !1;
    f(h);
    const $ = h.currentPeek() === ":";
    return h.resetPeek(), $;
  }
  function q(h, m) {
    const { currentType: I } = m;
    if (I !== 9)
      return !1;
    const $ = () => {
      const nt = h.currentPeek();
      return nt === "{" ? p(h.peek()) : nt === "@" || nt === "|" || nt === ":" || nt === "." || nt === ge || !nt ? !1 : nt === Kt ? (h.peek(), $()) : rt(h, !1);
    }, ot = $();
    return h.resetPeek(), ot;
  }
  function it(h) {
    f(h);
    const m = h.currentPeek() === "|";
    return h.resetPeek(), m;
  }
  function rt(h, m = !0) {
    const I = (ot = !1, nt = "") => {
      const C = h.currentPeek();
      return C === "{" || C === "@" || !C ? ot : C === "|" ? !(nt === ge || nt === Kt) : C === ge ? (h.peek(), I(!0, ge)) : C === Kt ? (h.peek(), I(!0, Kt)) : !0;
    }, $ = I();
    return m && h.resetPeek(), $;
  }
  function st(h, m) {
    const I = h.currentChar();
    return I === ve ? ve : m(I) ? (h.next(), I) : null;
  }
  function ct(h) {
    const m = h.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function Rt(h) {
    return st(h, ct);
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
  function tt(h) {
    return st(h, mt);
  }
  function ut(h) {
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function Mt(h) {
    return st(h, ut);
  }
  function pt(h) {
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function U(h) {
    return st(h, pt);
  }
  function bt(h) {
    let m = "", I = "";
    for (; m = Mt(h); )
      I += m;
    return I;
  }
  function J(h) {
    let m = "";
    for (; ; ) {
      const I = h.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I)
        break;
      if (I === ge || I === Kt)
        if (rt(h))
          m += I, h.next();
        else {
          if (it(h))
            break;
          m += I, h.next();
        }
      else
        m += I, h.next();
    }
    return m;
  }
  function Ot(h) {
    b(h);
    let m = "", I = "";
    for (; m = tt(h); )
      I += m;
    const $ = h.currentChar();
    if ($ && $ !== "}" && $ !== ve && $ !== ge && $ !== Kt && $ !== "　") {
      const ot = Ut(h);
      return g(xt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, I + ot), I + ot;
    }
    return h.currentChar() === ve && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), I;
  }
  function Ht(h) {
    b(h);
    let m = "";
    return h.currentChar() === "-" ? (h.next(), m += `-${bt(h)}`) : m += bt(h), h.currentChar() === ve && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), m;
  }
  function te(h) {
    return h !== uo && h !== Kt;
  }
  function kt(h) {
    b(h), k(h, "'");
    let m = "", I = "";
    for (; m = st(h, te); )
      m === "\\" ? I += _t(h) : I += m;
    const $ = h.currentChar();
    return $ === Kt || $ === ve ? (g(xt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), $ === Kt && (h.next(), k(h, "'")), I) : (k(h, "'"), I);
  }
  function _t(h) {
    const m = h.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return h.next(), `\\${m}`;
      case "u":
        return jt(h, m, 4);
      case "U":
        return jt(h, m, 6);
      default:
        return g(xt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, m), "";
    }
  }
  function jt(h, m, I) {
    k(h, m);
    let $ = "";
    for (let ot = 0; ot < I; ot++) {
      const nt = U(h);
      if (!nt) {
        g(xt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${m}${$}${h.currentChar()}`);
        break;
      }
      $ += nt;
    }
    return `\\${m}${$}`;
  }
  function ee(h) {
    return h !== "{" && h !== "}" && h !== ge && h !== Kt;
  }
  function Ut(h) {
    b(h);
    let m = "", I = "";
    for (; m = st(h, ee); )
      I += m;
    return I;
  }
  function D(h) {
    let m = "", I = "";
    for (; m = Rt(h); )
      I += m;
    return I;
  }
  function lt(h) {
    const m = (I) => {
      const $ = h.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === ge ? I : (I += $, h.next(), m(I));
    };
    return m("");
  }
  function ft(h) {
    b(h);
    const m = k(
      h,
      "|"
      /* TokenChars.Pipe */
    );
    return b(h), m;
  }
  function St(h, m) {
    let I = null;
    switch (h.currentChar()) {
      case "{":
        return m.braceNest >= 1 && g(xt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), h.next(), I = w(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), b(h), m.braceNest++, I;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && g(xt.EMPTY_PLACEHOLDER, o(), 0), h.next(), I = w(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && b(h), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), I;
      case "@":
        return m.braceNest > 0 && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), I = wt(h, m) || v(m), m.braceNest = 0, I;
      default: {
        let ot = !0, nt = !0, C = !0;
        if (it(h))
          return m.braceNest > 0 && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), I = w(m, 1, ft(h)), m.braceNest = 0, m.inLinked = !1, I;
        if (m.braceNest > 0 && (m.currentType === 4 || m.currentType === 5 || m.currentType === 6))
          return g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), m.braceNest = 0, Et(h, m);
        if (ot = x(h, m))
          return I = w(m, 4, Ot(h)), b(h), I;
        if (nt = T(h, m))
          return I = w(m, 5, Ht(h)), b(h), I;
        if (C = A(h, m))
          return I = w(m, 6, kt(h)), b(h), I;
        if (!ot && !nt && !C)
          return I = w(m, 12, Ut(h)), g(xt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, I.value), b(h), I;
        break;
      }
    }
    return I;
  }
  function wt(h, m) {
    const { currentType: I } = m;
    let $ = null;
    const ot = h.currentChar();
    switch ((I === 7 || I === 8 || I === 11 || I === 9) && (ot === Kt || ot === ge) && g(xt.INVALID_LINKED_FORMAT, o(), 0), ot) {
      case "@":
        return h.next(), $ = w(
          m,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, $;
      case ".":
        return b(h), h.next(), w(
          m,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return b(h), h.next(), w(
          m,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return it(h) ? ($ = w(m, 1, ft(h)), m.braceNest = 0, m.inLinked = !1, $) : z(h, m) || j(h, m) ? (b(h), wt(h, m)) : R(h, m) ? (b(h), w(m, 11, D(h))) : q(h, m) ? (b(h), ot === "{" ? St(h, m) || $ : w(m, 10, lt(h))) : (I === 7 && g(xt.INVALID_LINKED_FORMAT, o(), 0), m.braceNest = 0, m.inLinked = !1, Et(h, m));
    }
  }
  function Et(h, m) {
    let I = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return St(h, m) || v(m);
    if (m.inLinked)
      return wt(h, m) || v(m);
    switch (h.currentChar()) {
      case "{":
        return St(h, m) || v(m);
      case "}":
        return g(xt.UNBALANCED_CLOSING_BRACE, o(), 0), h.next(), w(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return wt(h, m) || v(m);
      default: {
        if (it(h))
          return I = w(m, 1, ft(h)), m.braceNest = 0, m.inLinked = !1, I;
        if (rt(h))
          return w(m, 0, J(h));
        break;
      }
    }
    return I;
  }
  function E() {
    const { currentType: h, offset: m, startLoc: I, endLoc: $ } = l;
    return l.lastType = h, l.lastOffset = m, l.lastStartLoc = I, l.lastEndLoc = $, l.offset = s(), l.startLoc = o(), i.currentChar() === ve ? w(
      l,
      13
      /* TokenTypes.EOF */
    ) : Et(i, l);
  }
  return {
    nextToken: E,
    currentOffset: s,
    currentPosition: o,
    context: c
  };
}
const Bu = "parser", Hu = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ju(e, t, n) {
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
function Uu(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(p, M, x, T, ...A) {
    const z = p.currentPosition();
    if (z.offset += T, z.column += T, n) {
      const R = t ? Hi(x, z) : null, j = ui(M, R, {
        domain: Bu,
        args: A
      });
      n(j);
    }
  }
  function s(p, M, x) {
    const T = { type: p };
    return t && (T.start = M, T.end = M, T.loc = { start: x, end: x }), T;
  }
  function o(p, M, x, T) {
    t && (p.end = M, p.loc && (p.loc.end = x));
  }
  function a(p, M) {
    const x = p.context(), T = s(3, x.offset, x.startLoc);
    return T.value = M, o(T, p.currentOffset(), p.currentPosition()), T;
  }
  function r(p, M) {
    const x = p.context(), { lastOffset: T, lastStartLoc: A } = x, z = s(5, T, A);
    return z.index = parseInt(M, 10), p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function l(p, M) {
    const x = p.context(), { lastOffset: T, lastStartLoc: A } = x, z = s(4, T, A);
    return z.key = M, p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function c(p, M) {
    const x = p.context(), { lastOffset: T, lastStartLoc: A } = x, z = s(9, T, A);
    return z.value = M.replace(Hu, ju), p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function d(p) {
    const M = p.nextToken(), x = p.context(), { lastOffset: T, lastStartLoc: A } = x, z = s(8, T, A);
    return M.type !== 11 ? (i(p, xt.UNEXPECTED_EMPTY_LINKED_MODIFIER, x.lastStartLoc, 0), z.value = "", o(z, T, A), {
      nextConsumeToken: M,
      node: z
    }) : (M.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, me(M)), z.value = M.value || "", o(z, p.currentOffset(), p.currentPosition()), {
      node: z
    });
  }
  function g(p, M) {
    const x = p.context(), T = s(7, x.offset, x.startLoc);
    return T.value = M, o(T, p.currentOffset(), p.currentPosition()), T;
  }
  function w(p) {
    const M = p.context(), x = s(6, M.offset, M.startLoc);
    let T = p.nextToken();
    if (T.type === 8) {
      const A = d(p);
      x.modifier = A.node, T = A.nextConsumeToken || p.nextToken();
    }
    switch (T.type !== 9 && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(T)), T = p.nextToken(), T.type === 2 && (T = p.nextToken()), T.type) {
      case 10:
        T.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(T)), x.key = g(p, T.value || "");
        break;
      case 4:
        T.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(T)), x.key = l(p, T.value || "");
        break;
      case 5:
        T.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(T)), x.key = r(p, T.value || "");
        break;
      case 6:
        T.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(T)), x.key = c(p, T.value || "");
        break;
      default: {
        i(p, xt.UNEXPECTED_EMPTY_LINKED_KEY, M.lastStartLoc, 0);
        const A = p.context(), z = s(7, A.offset, A.startLoc);
        return z.value = "", o(z, A.offset, A.startLoc), x.key = z, o(x, A.offset, A.startLoc), {
          nextConsumeToken: T,
          node: x
        };
      }
    }
    return o(x, p.currentOffset(), p.currentPosition()), {
      node: x
    };
  }
  function v(p) {
    const M = p.context(), x = M.currentType === 1 ? p.currentOffset() : M.offset, T = M.currentType === 1 ? M.endLoc : M.startLoc, A = s(2, x, T);
    A.items = [];
    let z = null;
    do {
      const q = z || p.nextToken();
      switch (z = null, q.type) {
        case 0:
          q.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(q)), A.items.push(a(p, q.value || ""));
          break;
        case 5:
          q.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(q)), A.items.push(r(p, q.value || ""));
          break;
        case 4:
          q.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(q)), A.items.push(l(p, q.value || ""));
          break;
        case 6:
          q.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, M.lastStartLoc, 0, me(q)), A.items.push(c(p, q.value || ""));
          break;
        case 7: {
          const it = w(p);
          A.items.push(it.node), z = it.nextConsumeToken || null;
          break;
        }
      }
    } while (M.currentType !== 13 && M.currentType !== 1);
    const R = M.currentType === 1 ? M.lastOffset : p.currentOffset(), j = M.currentType === 1 ? M.lastEndLoc : p.currentPosition();
    return o(A, R, j), A;
  }
  function k(p, M, x, T) {
    const A = p.context();
    let z = T.items.length === 0;
    const R = s(1, M, x);
    R.cases = [], R.cases.push(T);
    do {
      const j = v(p);
      z || (z = j.items.length === 0), R.cases.push(j);
    } while (A.currentType !== 13);
    return z && i(p, xt.MUST_HAVE_MESSAGES_IN_PLURAL, x, 0), o(R, p.currentOffset(), p.currentPosition()), R;
  }
  function f(p) {
    const M = p.context(), { offset: x, startLoc: T } = M, A = v(p);
    return M.currentType === 13 ? A : k(p, x, T, A);
  }
  function b(p) {
    const M = Fu(p, Gt({}, e)), x = M.context(), T = s(0, x.offset, x.startLoc);
    return t && T.loc && (T.loc.source = p), T.body = f(M), e.onCacheKey && (T.cacheKey = e.onCacheKey(p)), x.currentType !== 13 && i(M, xt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, p[x.offset] || ""), o(T, M.currentOffset(), M.currentPosition()), T;
  }
  return { parse: b };
}
function me(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Vu(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function ho(e, t) {
  for (let n = 0; n < e.length; n++)
    hs(e[n], t);
}
function hs(e, t) {
  switch (e.type) {
    case 1:
      ho(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ho(e.items, t);
      break;
    case 6: {
      hs(e.key, t), t.helper(
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
function Yu(e, t = {}) {
  const n = Vu(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && hs(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function Gu(e) {
  const t = e.body;
  return t.type === 2 ? fo(t) : t.cases.forEach((n) => fo(n)), e;
}
function fo(e) {
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
      e.static = us(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
function sn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      sn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let i = 0; i < n.length; i++)
        sn(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        sn(n[i]);
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
      sn(t.key), t.k = t.key, delete t.key, t.modifier && (sn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Xu(e, t) {
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
  function w() {
    c(a.indentLevel);
  }
  return {
    context: r,
    push: l,
    indent: d,
    deindent: g,
    newline: w,
    helper: (f) => `_${f}`,
    needIndent: () => a.needIndent
  };
}
function Ku(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), an(e, t.key), t.modifier ? (e.push(", "), an(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Zu(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let o = 0; o < s && (an(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function qu(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let o = 0; o < s && (an(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function Ju(e, t) {
  t.body ? an(e, t.body) : e.push("null");
}
function an(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Ju(e, t);
      break;
    case 1:
      qu(e, t);
      break;
    case 2:
      Zu(e, t);
      break;
    case 6:
      Ku(e, t);
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
const Qu = (e, t = {}) => {
  const n = Q(t.mode) ? t.mode : "normal", i = Q(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], r = Xu(e, {
    filename: i,
    breakLineCode: s,
    needIndent: o
  });
  r.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), r.indent(o), a.length > 0 && (r.push(`const { ${us(a.map((d) => `${d}: _${d}`), ", ")} } = ctx`), r.newline()), r.push("return "), an(r, e), r.deindent(o), r.push("}"), delete e.helpers;
  const { code: l, map: c } = r.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function th(e, t = {}) {
  const n = Gt({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = Uu(n).parse(e);
  return i ? (o && Gu(r), s && sn(r), { ast: r, code: "" }) : (Yu(r, n), Qu(r, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function eh() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function ye(e) {
  return vt(e) && ds(e) === 0 && (de(e, "b") || de(e, "body"));
}
const ya = ["b", "body"];
function nh(e) {
  return Ie(e, ya);
}
const va = ["c", "cases"];
function ih(e) {
  return Ie(e, va, []);
}
const xa = ["s", "static"];
function sh(e) {
  return Ie(e, xa);
}
const ba = ["i", "items"];
function oh(e) {
  return Ie(e, ba, []);
}
const ka = ["t", "type"];
function ds(e) {
  return Ie(e, ka);
}
const _a = ["v", "value"];
function jn(e, t) {
  const n = Ie(e, _a);
  if (n != null)
    return n;
  throw Ln(t);
}
const Sa = ["m", "modifier"];
function ah(e) {
  return Ie(e, Sa);
}
const Ca = ["k", "key"];
function rh(e) {
  const t = Ie(e, Ca);
  if (t)
    return t;
  throw Ln(
    6
    /* NodeTypes.Linked */
  );
}
function Ie(e, t, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (de(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const Ta = [
  ...ya,
  ...va,
  ...xa,
  ...ba,
  ...Ca,
  ...Sa,
  ..._a,
  ...ka
];
function Ln(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Pi(e) {
  return (n) => lh(n, e);
}
function lh(e, t) {
  const n = nh(t);
  if (n == null)
    throw Ln(
      0
      /* NodeTypes.Resource */
    );
  if (ds(n) === 1) {
    const o = ih(n);
    return e.plural(o.reduce((a, r) => [
      ...a,
      go(e, r)
    ], []));
  } else
    return go(e, n);
}
function go(e, t) {
  const n = sh(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = oh(t).reduce((s, o) => [...s, ji(e, o)], []);
    return e.normalize(i);
  }
}
function ji(e, t) {
  const n = ds(t);
  switch (n) {
    case 3:
      return jn(t, n);
    case 9:
      return jn(t, n);
    case 4: {
      const i = t;
      if (de(i, "k") && i.k)
        return e.interpolate(e.named(i.k));
      if (de(i, "key") && i.key)
        return e.interpolate(e.named(i.key));
      throw Ln(n);
    }
    case 5: {
      const i = t;
      if (de(i, "i") && Yt(i.i))
        return e.interpolate(e.list(i.i));
      if (de(i, "index") && Yt(i.index))
        return e.interpolate(e.list(i.index));
      throw Ln(n);
    }
    case 6: {
      const i = t, s = ah(i), o = rh(i);
      return e.linked(ji(e, o), s ? ji(e, s) : void 0, e.type);
    }
    case 7:
      return jn(t, n);
    case 8:
      return jn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ch = (e) => e;
let Un = Ct();
function uh(e, t = {}) {
  let n = !1;
  const i = t.onError || Au;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...th(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function hh(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Q(e)) {
    Dt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || ch)(e), s = Un[i];
    if (s)
      return s;
    const { ast: o, detectError: a } = uh(e, {
      ...t,
      location: !1,
      jit: !0
    }), r = Pi(o);
    return a ? r : Un[i] = r;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = Un[n];
      return i || (Un[n] = Pi(e));
    } else
      return Pi(e);
  }
}
const ke = {
  INVALID_ARGUMENT: Iu,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, dh = 24;
function _e(e) {
  return ui(e, null, void 0);
}
function fs(e, t) {
  return t.locale != null ? mo(t.locale) : mo(e.locale);
}
let Ei;
function mo(e) {
  if (Q(e))
    return e;
  if (At(e)) {
    if (e.resolvedOnce && Ei != null)
      return Ei;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Ru(t))
        throw _e(ke.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ei = t;
    } else
      throw _e(ke.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw _e(ke.NOT_SUPPORT_LOCALE_TYPE);
}
function fh(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Nt(t) ? t : vt(t) ? Object.keys(t) : Q(t) ? [t] : [n]
  ])];
}
function Ma(e, t, n) {
  const i = Q(n) ? n : ni, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; Nt(a); )
      a = po(o, a, t);
    const r = Nt(t) || !yt(t) ? t : t.default ? t.default : null;
    a = Q(r) ? [r] : r, Nt(a) && po(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function po(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && Dt(i); s++) {
    const o = t[s];
    Q(o) && (i = gh(e, t[s], n));
  }
  return i;
}
function gh(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = mh(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function mh(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Nt(n) || yt(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const Ae = [];
Ae[
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
Ae[
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
Ae[
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
Ae[
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
Ae[
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
Ae[
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
Ae[
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
const ph = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function wh(e) {
  return ph.test(e);
}
function yh(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function vh(e) {
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
function xh(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : wh(t) ? yh(t) : "*" + t;
}
function bh(e) {
  const t = [];
  let n = -1, i = 0, s = 0, o, a, r, l, c, d, g;
  const w = [];
  w[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = r : a += r;
  }, w[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, w[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    w[
      0
      /* Actions.APPEND */
    ](), s++;
  }, w[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, i = 4, w[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, a === void 0 || (a = xh(a), a === !1))
        return !1;
      w[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function v() {
    const k = e[n + 1];
    if (i === 5 && k === "'" || i === 6 && k === '"')
      return n++, r = "\\" + k, w[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, o = e[n], !(o === "\\" && v())) {
      if (l = vh(o), g = Ae[i], c = g[l] || g.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (d = w[c[1]], d && (r = o, d() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const wo = /* @__PURE__ */ new Map();
function kh(e, t) {
  return vt(e) ? e[t] : null;
}
function _h(e, t) {
  if (!vt(e))
    return null;
  let n = wo.get(t);
  if (n || (n = bh(t), n && wo.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = n[o];
    if (Ta.includes(a) && ye(s))
      return null;
    const r = s[a];
    if (r === void 0 || At(s))
      return null;
    s = r, o++;
  }
  return s;
}
const Sh = "11.2.2", hi = -1, ni = "en-US", yo = "", vo = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ch() {
  return {
    upper: (e, t) => t === "text" && Q(e) ? e.toUpperCase() : t === "vnode" && vt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Q(e) ? e.toLowerCase() : t === "vnode" && vt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Q(e) ? vo(e) : t === "vnode" && vt(e) && "__v_isVNode" in e ? vo(e.children) : e
  };
}
let La;
function Th(e) {
  La = e;
}
let Ra;
function Mh(e) {
  Ra = e;
}
let Pa;
function Lh(e) {
  Pa = e;
}
let Ea = null;
const xo = (e) => {
  Ea = e;
}, Rh = () => Ea;
let bo = 0;
function Ph(e = {}) {
  const t = At(e.onWarn) ? e.onWarn : ku, n = Q(e.version) ? e.version : Sh, i = Q(e.locale) || At(e.locale) ? e.locale : ni, s = At(i) ? ni : i, o = Nt(e.fallbackLocale) || yt(e.fallbackLocale) || Q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = yt(e.messages) ? e.messages : Ii(s), r = yt(e.datetimeFormats) ? e.datetimeFormats : Ii(s), l = yt(e.numberFormats) ? e.numberFormats : Ii(s), c = Gt(Ct(), e.modifiers, Ch()), d = e.pluralRules || Ct(), g = At(e.missing) ? e.missing : null, w = Dt(e.missingWarn) || ei(e.missingWarn) ? e.missingWarn : !0, v = Dt(e.fallbackWarn) || ei(e.fallbackWarn) ? e.fallbackWarn : !0, k = !!e.fallbackFormat, f = !!e.unresolving, b = At(e.postTranslation) ? e.postTranslation : null, p = yt(e.processor) ? e.processor : null, M = Dt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter, T = At(e.messageCompiler) ? e.messageCompiler : La, A = At(e.messageResolver) ? e.messageResolver : Ra || kh, z = At(e.localeFallbacker) ? e.localeFallbacker : Pa || fh, R = vt(e.fallbackContext) ? e.fallbackContext : void 0, j = e, q = vt(j.__datetimeFormatters) ? j.__datetimeFormatters : /* @__PURE__ */ new Map(), it = vt(j.__numberFormatters) ? j.__numberFormatters : /* @__PURE__ */ new Map(), rt = vt(j.__meta) ? j.__meta : {};
  bo++;
  const st = {
    version: n,
    cid: bo,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: d,
    missing: g,
    missingWarn: w,
    fallbackWarn: v,
    fallbackFormat: k,
    unresolving: f,
    postTranslation: b,
    processor: p,
    warnHtmlMessage: M,
    escapeParameter: x,
    messageCompiler: T,
    messageResolver: A,
    localeFallbacker: z,
    fallbackContext: R,
    onWarn: t,
    __meta: rt
  };
  return st.datetimeFormats = r, st.numberFormats = l, st.__datetimeFormatters = q, st.__numberFormatters = it, st;
}
const Ii = (e) => ({ [e]: Ct() });
function gs(e, t, n, i, s) {
  const { missing: o, onWarn: a } = e;
  if (o !== null) {
    const r = o(e, n, t, s);
    return Q(r) ? r : t;
  } else
    return t;
}
function wn(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Eh(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ih(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (Eh(e, t[i]))
      return !0;
  return !1;
}
function ko(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e, [l, c, d, g] = Ui(...t), w = Dt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Dt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const v = !!d.part, k = fs(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    k
  );
  if (!Q(l) || l === "")
    return new Intl.DateTimeFormat(k, g).format(c);
  let b = {}, p, M = null;
  const x = "datetime format";
  for (let z = 0; z < f.length && (p = f[z], b = n[p] || {}, M = b[l], !yt(M)); z++)
    gs(e, l, p, w, x);
  if (!yt(M) || !Q(p))
    return i ? hi : l;
  let T = `${p}__${l}`;
  ci(g) || (T = `${T}__${JSON.stringify(g)}`);
  let A = r.get(T);
  return A || (A = new Intl.DateTimeFormat(p, Gt({}, M, g)), r.set(T, A)), v ? A.formatToParts(c) : A.format(c);
}
const Ia = [
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
function Ui(...e) {
  const [t, n, i, s] = e, o = Ct();
  let a = Ct(), r;
  if (Q(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw _e(ke.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    r = new Date(c);
    try {
      r.toISOString();
    } catch {
      throw _e(ke.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Cu(t)) {
    if (isNaN(t.getTime()))
      throw _e(ke.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (Yt(t))
    r = t;
  else
    throw _e(ke.INVALID_ARGUMENT);
  return Q(n) ? o.key = n : yt(n) && Object.keys(n).forEach((l) => {
    Ia.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), Q(i) ? o.locale = i : yt(i) && (a = i), yt(s) && (a = s), [o.key || "", r, o, a];
}
function _o(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function So(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e, [l, c, d, g] = Vi(...t), w = Dt(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Dt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const v = !!d.part, k = fs(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    k
  );
  if (!Q(l) || l === "")
    return new Intl.NumberFormat(k, g).format(c);
  let b = {}, p, M = null;
  const x = "number format";
  for (let z = 0; z < f.length && (p = f[z], b = n[p] || {}, M = b[l], !yt(M)); z++)
    gs(e, l, p, w, x);
  if (!yt(M) || !Q(p))
    return i ? hi : l;
  let T = `${p}__${l}`;
  ci(g) || (T = `${T}__${JSON.stringify(g)}`);
  let A = r.get(T);
  return A || (A = new Intl.NumberFormat(p, Gt({}, M, g)), r.set(T, A)), v ? A.formatToParts(c) : A.format(c);
}
const Aa = [
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
function Vi(...e) {
  const [t, n, i, s] = e, o = Ct();
  let a = Ct();
  if (!Yt(t))
    throw _e(ke.INVALID_ARGUMENT);
  const r = t;
  return Q(n) ? o.key = n : yt(n) && Object.keys(n).forEach((l) => {
    Aa.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), Q(i) ? o.locale = i : yt(i) && (a = i), yt(s) && (a = s), [o.key || "", r, o, a];
}
function Co(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const Ah = (e) => e, Oh = (e) => "", zh = "text", Dh = (e) => e.length === 0 ? "" : us(e), Nh = Pu;
function To(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Wh(e) {
  const t = Yt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Yt(e.named.count) || Yt(e.named.n)) ? Yt(e.named.count) ? e.named.count : Yt(e.named.n) ? e.named.n : t : t;
}
function $h(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Fh(e = {}) {
  const t = e.locale, n = Wh(e), i = vt(e.pluralRules) && Q(t) && At(e.pluralRules[t]) ? e.pluralRules[t] : To, s = vt(e.pluralRules) && Q(t) && At(e.pluralRules[t]) ? To : void 0, o = (p) => p[i(n, p.length, s)], a = e.list || [], r = (p) => a[p], l = e.named || Ct();
  Yt(e.pluralIndex) && $h(n, l);
  const c = (p) => l[p];
  function d(p, M) {
    const x = At(e.messages) ? e.messages(p, !!M) : vt(e.messages) ? e.messages[p] : !1;
    return x || (e.parent ? e.parent.message(p) : Oh);
  }
  const g = (p) => e.modifiers ? e.modifiers[p] : Ah, w = yt(e.processor) && At(e.processor.normalize) ? e.processor.normalize : Dh, v = yt(e.processor) && At(e.processor.interpolate) ? e.processor.interpolate : Nh, k = yt(e.processor) && Q(e.processor.type) ? e.processor.type : zh, b = {
    list: r,
    named: c,
    plural: o,
    linked: (p, ...M) => {
      const [x, T] = M;
      let A = "text", z = "";
      M.length === 1 ? vt(x) ? (z = x.modifier || z, A = x.type || A) : Q(x) && (z = x || z) : M.length === 2 && (Q(x) && (z = x || z), Q(T) && (A = T || A));
      const R = d(p, !0)(b), j = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        A === "vnode" && Nt(R) && z ? R[0] : R
      );
      return z ? g(z)(j, A) : j;
    },
    message: d,
    type: k,
    interpolate: v,
    normalize: w,
    values: Gt(Ct(), a, l)
  };
  return b;
}
const Mo = () => "", Se = (e) => At(e);
function Lo(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = Yi(...t), d = Dt(c.missingWarn) ? c.missingWarn : e.missingWarn, g = Dt(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, w = Dt(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, v = !!c.resolvedMessage, k = Q(c.default) || Dt(c.default) ? Dt(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, f = n || k != null && (Q(k) || At(k)), b = fs(e, c);
  w && Bh(c);
  let [p, M, x] = v ? [
    l,
    b,
    r[b] || Ct()
  ] : Oa(e, l, b, a, g, d), T = p, A = l;
  if (!v && !(Q(T) || ye(T) || Se(T)) && f && (T = k, A = T), !v && (!(Q(T) || ye(T) || Se(T)) || !Q(M)))
    return s ? hi : l;
  let z = !1;
  const R = () => {
    z = !0;
  }, j = Se(T) ? T : za(e, l, M, T, A, R);
  if (z)
    return T;
  const q = Uh(e, M, x, c), it = Fh(q), rt = Hh(e, j, it);
  let st = i ? i(rt, l) : rt;
  return w && Q(st) && (st = Mu(st)), st;
}
function Bh(e) {
  Nt(e.list) ? e.list = e.list.map((t) => Q(t) ? lo(t) : t) : vt(e.named) && Object.keys(e.named).forEach((t) => {
    Q(e.named[t]) && (e.named[t] = lo(e.named[t]));
  });
}
function Oa(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, d = c(e, i, n);
  let g = Ct(), w, v = null;
  const k = "translate";
  for (let f = 0; f < d.length && (w = d[f], g = a[w] || Ct(), (v = l(g, t)) === null && (v = g[t]), !(Q(v) || ye(v) || Se(v))); f++)
    if (!Ih(w, d)) {
      const b = gs(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        w,
        o,
        k
      );
      b !== t && (v = b);
    }
  return [v, w, g];
}
function za(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (Se(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => i;
    return c.locale = n, c.key = t, c;
  }
  const l = a(i, jh(e, n, s, i, r, o));
  return l.locale = n, l.key = t, l.source = i, l;
}
function Hh(e, t, n) {
  return t(n);
}
function Yi(...e) {
  const [t, n, i] = e, s = Ct();
  if (!Q(t) && !Yt(t) && !Se(t) && !ye(t))
    throw _e(ke.INVALID_ARGUMENT);
  const o = Yt(t) ? String(t) : (Se(t), t);
  return Yt(n) ? s.plural = n : Q(n) ? s.default = n : yt(n) && !ci(n) ? s.named = n : Nt(n) && (s.list = n), Yt(i) ? s.plural = i : Q(i) ? s.default = i : yt(i) && Gt(s, i), [o, s];
}
function jh(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => _u(t, n, a)
  };
}
function Uh(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: d } = e, w = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (v, k) => {
      let f = a(n, v);
      if (f == null && (d || k)) {
        const [, , b] = Oa(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          r,
          l,
          c
        );
        f = a(b, v);
      }
      if (Q(f) || ye(f)) {
        let b = !1;
        const M = za(e, v, t, f, v, () => {
          b = !0;
        });
        return b ? Mo : M;
      } else return Se(f) ? f : Mo;
    }
  };
  return e.processor && (w.processor = e.processor), i.list && (w.list = i.list), i.named && (w.named = i.named), Yt(i.plural) && (w.pluralIndex = i.plural), w;
}
eh();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Vh = "11.2.2";
function Yh() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Xn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Xn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const rn = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: dh,
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
function Rn(e, ...t) {
  return ui(e, null, void 0);
}
const Gi = /* @__PURE__ */ Ye("__translateVNode"), Xi = /* @__PURE__ */ Ye("__datetimeParts"), Ki = /* @__PURE__ */ Ye("__numberParts"), Gh = Ye("__setPluralRules"), Da = /* @__PURE__ */ Ye("__injectWithOption"), Zi = /* @__PURE__ */ Ye("__dispose");
function Pn(e) {
  if (!vt(e) || ye(e))
    return e;
  for (const t in e)
    if (de(e, t))
      if (!t.includes("."))
        vt(e[t]) && Pn(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = Ct()), !vt(s[n[a]])) {
            o = !0;
            break;
          }
          s = s[n[a]];
        }
        if (o || (ye(s) ? Ta.includes(n[i]) || delete e[t] : (s[n[i]] = e[t], delete e[t])), !ye(s)) {
          const a = s[n[i]];
          vt(a) && Pn(a);
        }
      }
  return e;
}
function Na(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = yt(n) ? n : Nt(i) ? Ct() : { [e]: Ct() };
  if (Nt(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || Ct(), Kn(c, a[l])) : Kn(c, a);
    } else
      Q(r) && Kn(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      de(a, r) && Pn(a[r]);
  return a;
}
function Xh(e) {
  return e.type;
}
function Kh(e, t, n) {
  let i = vt(t.messages) ? t.messages : Ct();
  "__i18nGlobal" in n && (i = Na(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, i[o]);
  });
  {
    if (vt(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (vt(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Ro(e) {
  return S(il, null, e, 0);
}
function Wa() {
  return "currentInstance" in Ti ? Ti["currentInstance"] : Ti.getCurrentInstance();
}
const Po = () => [], Zh = () => !1;
let Eo = 0;
function Io(e) {
  return (t, n, i, s) => e(n, i, Wa() || void 0, s);
}
function qh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = ao ? Z : nl;
  let a = Dt(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : Q(e.locale) ? e.locale : ni
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : Q(e.fallbackLocale) || Nt(e.fallbackLocale) || yt(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(Na(r.value, e)), d = o(yt(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), g = o(yt(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let w = t ? t.missingWarn : Dt(e.missingWarn) || ei(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : Dt(e.fallbackWarn) || ei(e.fallbackWarn) ? e.fallbackWarn : !0, k = t ? t.fallbackRoot : Dt(e.fallbackRoot) ? e.fallbackRoot : !0, f = !!e.fallbackFormat, b = At(e.missing) ? e.missing : null, p = At(e.missing) ? Io(e.missing) : null, M = At(e.postTranslation) ? e.postTranslation : null, x = t ? t.warnHtmlMessage : Dt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const A = t ? t.modifiers : yt(e.modifiers) ? e.modifiers : {};
  let z = e.pluralRules || t && t.pluralRules, R;
  R = (() => {
    i && xo(null);
    const C = {
      version: Vh,
      locale: r.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: A,
      pluralRules: z,
      missing: p === null ? void 0 : p,
      missingWarn: w,
      fallbackWarn: v,
      fallbackFormat: f,
      unresolving: !0,
      postTranslation: M === null ? void 0 : M,
      warnHtmlMessage: x,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = d.value, C.numberFormats = g.value, C.__datetimeFormatters = yt(R) ? R.__datetimeFormatters : void 0, C.__numberFormatters = yt(R) ? R.__numberFormatters : void 0;
    const W = Ph(C);
    return i && xo(W), W;
  })(), wn(R, r.value, l.value);
  function q() {
    return [
      r.value,
      l.value,
      c.value,
      d.value,
      g.value
    ];
  }
  const it = Y({
    get: () => r.value,
    set: (C) => {
      R.locale = C, r.value = C;
    }
  }), rt = Y({
    get: () => l.value,
    set: (C) => {
      R.fallbackLocale = C, l.value = C, wn(R, r.value, C);
    }
  }), st = Y(() => c.value), ct = /* @__PURE__ */ Y(() => d.value), Rt = /* @__PURE__ */ Y(() => g.value);
  function mt() {
    return At(M) ? M : null;
  }
  function tt(C) {
    M = C, R.postTranslation = C;
  }
  function ut() {
    return b;
  }
  function Mt(C) {
    C !== null && (p = Io(C)), b = C, R.missing = p;
  }
  const pt = (C, W, gt, ht, se, Oe) => {
    q();
    let Ce;
    try {
      i || (R.fallbackContext = t ? Rh() : void 0), Ce = C(R);
    } finally {
      i || (R.fallbackContext = void 0);
    }
    if (gt !== "translate exists" && // for not `te` (e.g `t`)
    Yt(Ce) && Ce === hi || gt === "translate exists" && !Ce) {
      const [gn, Ke] = W();
      return t && k ? ht(t) : se(gn);
    } else {
      if (Oe(Ce))
        return Ce;
      throw Rn(rn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function U(...C) {
    return pt((W) => Reflect.apply(Lo, null, [W, ...C]), () => Yi(...C), "translate", (W) => Reflect.apply(W.t, W, [...C]), (W) => W, (W) => Q(W));
  }
  function bt(...C) {
    const [W, gt, ht] = C;
    if (ht && !vt(ht))
      throw Rn(rn.INVALID_ARGUMENT);
    return U(W, gt, Gt({ resolvedMessage: !0 }, ht || {}));
  }
  function J(...C) {
    return pt((W) => Reflect.apply(ko, null, [W, ...C]), () => Ui(...C), "datetime format", (W) => Reflect.apply(W.d, W, [...C]), () => yo, (W) => Q(W) || Nt(W));
  }
  function Ot(...C) {
    return pt((W) => Reflect.apply(So, null, [W, ...C]), () => Vi(...C), "number format", (W) => Reflect.apply(W.n, W, [...C]), () => yo, (W) => Q(W) || Nt(W));
  }
  function Ht(C) {
    return C.map((W) => Q(W) || Yt(W) || Dt(W) ? Ro(String(W)) : W);
  }
  const kt = {
    normalize: Ht,
    interpolate: (C) => C,
    type: "vnode"
  };
  function _t(...C) {
    return pt((W) => {
      let gt;
      const ht = W;
      try {
        ht.processor = kt, gt = Reflect.apply(Lo, null, [ht, ...C]);
      } finally {
        ht.processor = null;
      }
      return gt;
    }, () => Yi(...C), "translate", (W) => W[Gi](...C), (W) => [Ro(W)], (W) => Nt(W));
  }
  function jt(...C) {
    return pt((W) => Reflect.apply(So, null, [W, ...C]), () => Vi(...C), "number format", (W) => W[Ki](...C), Po, (W) => Q(W) || Nt(W));
  }
  function ee(...C) {
    return pt((W) => Reflect.apply(ko, null, [W, ...C]), () => Ui(...C), "datetime format", (W) => W[Xi](...C), Po, (W) => Q(W) || Nt(W));
  }
  function Ut(C) {
    z = C, R.pluralRules = z;
  }
  function D(C, W) {
    return pt(() => {
      if (!C)
        return !1;
      const gt = Q(W) ? W : r.value, ht = St(gt), se = R.messageResolver(ht, C);
      return ye(se) || Se(se) || Q(se);
    }, () => [C], "translate exists", (gt) => Reflect.apply(gt.te, gt, [C, W]), Zh, (gt) => Dt(gt));
  }
  function lt(C) {
    let W = null;
    const gt = Ma(R, l.value, r.value);
    for (let ht = 0; ht < gt.length; ht++) {
      const se = c.value[gt[ht]] || {}, Oe = R.messageResolver(se, C);
      if (Oe != null) {
        W = Oe;
        break;
      }
    }
    return W;
  }
  function ft(C) {
    const W = lt(C);
    return W ?? (t ? t.tm(C) || {} : {});
  }
  function St(C) {
    return c.value[C] || {};
  }
  function wt(C, W) {
    if (s) {
      const gt = { [C]: W };
      for (const ht in gt)
        de(gt, ht) && Pn(gt[ht]);
      W = gt[C];
    }
    c.value[C] = W, R.messages = c.value;
  }
  function Et(C, W) {
    c.value[C] = c.value[C] || {};
    const gt = { [C]: W };
    if (s)
      for (const ht in gt)
        de(gt, ht) && Pn(gt[ht]);
    W = gt[C], Kn(W, c.value[C]), R.messages = c.value;
  }
  function E(C) {
    return d.value[C] || {};
  }
  function h(C, W) {
    d.value[C] = W, R.datetimeFormats = d.value, _o(R, C, W);
  }
  function m(C, W) {
    d.value[C] = Gt(d.value[C] || {}, W), R.datetimeFormats = d.value, _o(R, C, W);
  }
  function I(C) {
    return g.value[C] || {};
  }
  function $(C, W) {
    g.value[C] = W, R.numberFormats = g.value, Co(R, C, W);
  }
  function ot(C, W) {
    g.value[C] = Gt(g.value[C] || {}, W), R.numberFormats = g.value, Co(R, C, W);
  }
  Eo++, t && ao && (Ee(t.locale, (C) => {
    a && (r.value = C, R.locale = C, wn(R, r.value, l.value));
  }), Ee(t.fallbackLocale, (C) => {
    a && (l.value = C, R.fallbackLocale = C, wn(R, r.value, l.value));
  }));
  const nt = {
    id: Eo,
    locale: it,
    fallbackLocale: rt,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(C) {
      a = C, C && t && (r.value = t.locale.value, l.value = t.fallbackLocale.value, wn(R, r.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: st,
    get modifiers() {
      return A;
    },
    get pluralRules() {
      return z || {};
    },
    get isGlobal() {
      return i;
    },
    get missingWarn() {
      return w;
    },
    set missingWarn(C) {
      w = C, R.missingWarn = w;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(C) {
      v = C, R.fallbackWarn = v;
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
      return x;
    },
    set warnHtmlMessage(C) {
      x = C, R.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(C) {
      T = C, R.escapeParameter = C;
    },
    t: U,
    getLocaleMessage: St,
    setLocaleMessage: wt,
    mergeLocaleMessage: Et,
    getPostTranslationHandler: mt,
    setPostTranslationHandler: tt,
    getMissingHandler: ut,
    setMissingHandler: Mt,
    [Gh]: Ut
  };
  return nt.datetimeFormats = ct, nt.numberFormats = Rt, nt.rt = bt, nt.te = D, nt.tm = ft, nt.d = J, nt.n = Ot, nt.getDateTimeFormat = E, nt.setDateTimeFormat = h, nt.mergeDateTimeFormat = m, nt.getNumberFormat = I, nt.setNumberFormat = $, nt.mergeNumberFormat = ot, nt[Da] = n, nt[Gi] = _t, nt[Xi] = ee, nt[Ki] = jt, nt;
}
const ms = {
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
function Jh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === qt ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, Ct());
}
function $a() {
  return qt;
}
Gt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Yt(e) || !isNaN(e)
  }
}, ms);
function Qh(e) {
  return Nt(e) && !Q(e[0]);
}
function Fa(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = Ct();
    e.locale && (a.locale = e.locale), Q(e.format) ? a.key = e.format : vt(e.format) && (Q(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((w, v) => n.includes(v) ? Gt(Ct(), w, { [v]: e.format[v] }) : w, Ct()));
    const l = i(e.value, a, r);
    let c = [a.key];
    Nt(l) ? c = l.map((w, v) => {
      const k = s[w.type], f = k ? k({ [w.type]: w.value, index: v, parts: l }) : [w.value];
      return Qh(f) && (f[0].key = `${w.type}-${v}`), f;
    }) : Q(l) && (c = [l]);
    const d = Gt(Ct(), o), g = Q(e.tag) || vt(e.tag) ? e.tag : $a();
    return qo(g, d, c);
  };
}
Gt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ms);
const td = /* @__PURE__ */ Ye("global-vue-i18n");
function On(e = {}) {
  const t = Wa();
  if (t == null)
    throw Rn(rn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Rn(rn.NOT_INSTALLED);
  const n = ed(t), i = id(n), s = Xh(t), o = nd(e, s);
  if (o === "global")
    return Kh(i, e, s), i;
  if (o === "parent") {
    let l = sd(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = Gt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = qh(l), a.__composerExtend && (r[Zi] = a.__composerExtend(r)), ad(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function ed(e) {
  const t = Re(e.isCE ? td : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Rn(e.isCE ? rn.NOT_INSTALLED_WITH_PROVIDE : rn.UNEXPECTED_ERROR);
  return t;
}
function nd(e, t) {
  return ci(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function id(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function sd(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = od(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[Da] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function od(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ad(e, t, n) {
  hn(() => {
  }, t), ts(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Zi];
    s && (s(), delete i[Zi]);
  }, t);
}
Gt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ms);
Yh();
Th(hh);
Mh(_h);
Lh(Ma);
const rd = { class: "toolbar-panel first-panel" }, ld = { class: "tool-section" }, cd = ["onClick", "title", "aria-pressed"], ud = { class: "action-section" }, hd = ["disabled", "title"], dd = ["disabled", "title"], fd = ["disabled", "title"], gd = ["title"], md = ["title"], pd = ["title"], wd = {
  key: 0,
  class: "toolbar-panel second-panel"
}, yd = { class: "style-section" }, vd = {
  key: 0,
  class: "style-group"
}, xd = { class: "style-label" }, bd = { class: "line-width-selector" }, kd = ["onClick", "title", "aria-pressed"], _d = { class: "style-value" }, Sd = {
  key: 1,
  class: "style-divider"
}, Cd = {
  key: 2,
  class: "style-group opacity-group"
}, Td = { class: "style-label" }, Md = ["value", "title", "aria-label"], Ld = { class: "style-value" }, Rd = {
  key: 3,
  class: "style-divider"
}, Pd = {
  key: 4,
  class: "style-group color-picker-group"
}, Ed = { class: "style-label" }, Id = { class: "color-row" }, Ad = ["onClick", "title", "aria-pressed"], Od = { class: "custom-color-wrapper" }, zd = ["title"], Dd = ["value", "title", "aria-label"], Nd = {
  key: 5,
  class: "style-group"
}, Wd = { class: "style-label" }, $d = { class: "text-size-selector" }, Fd = ["onClick", "title", "aria-pressed"], Bd = { class: "style-value" }, Hd = {
  key: 6,
  class: "style-group"
}, jd = { class: "style-label" }, Ud = { class: "mosaic-size-selector" }, Vd = ["onClick", "title", "aria-pressed"], Yd = { class: "style-value" }, Gd = {
  key: 7,
  class: "style-group"
}, Xd = { class: "style-label" }, Kd = { class: "translate-engine-selector" }, Zd = ["onClick", "title", "aria-pressed"], qd = /* @__PURE__ */ Wt({
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
    const i = Z(null), { t: s } = On(), o = e, a = n, r = Y(() => [
      { type: L.Select, icon: fu, title: s("screenshot.select") },
      { type: L.Rectangle, icon: mu, title: s("screenshot.rectangle") },
      { type: L.Ellipse, icon: vu, title: s("screenshot.ellipse") },
      { type: L.Line, icon: ma, title: s("screenshot.line") },
      { type: L.Arrow, icon: au, title: s("screenshot.arrow") },
      { type: L.Pen, icon: bu, title: s("screenshot.pen") },
      { type: L.Mosaic, icon: du, title: s("screenshot.mosaic") },
      { type: L.Text, icon: cu, title: s("screenshot.text") },
      { type: L.ColorPicker, icon: so, title: s("screenshot.colorPicker") },
      { type: L.Ocr, icon: xn, title: s("screenshot.ocr") },
      { type: L.Translate, icon: pa, title: s("screenshot.translate") },
      { type: L.Pin, icon: Bi, title: s("screenshot.pin") }
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
    ], g = [12, 14, 16, 18, 20, 24], w = [8, 12, 16, 20], v = Y(() => ![L.Select, L.ColorPicker, L.Ocr, L.Pin].includes(o.currentTool)), k = Y(
      () => [L.Rectangle, L.Ellipse, L.Line, L.Arrow, L.Pen].includes(o.currentTool)
    ), f = Y(
      () => [L.Rectangle, L.Ellipse, L.Line, L.Arrow, L.Pen, L.Text].includes(o.currentTool)
    ), b = Y(
      () => [
        L.Rectangle,
        L.Ellipse,
        L.Line,
        L.Arrow,
        L.Pen,
        L.Mosaic,
        L.Text
      ].includes(o.currentTool)
    ), p = Y(() => o.currentTool === L.Text), M = Y(() => o.currentTool === L.Mosaic), x = Y(() => o.currentTool === L.Translate), T = (U) => a("tool-select", U), A = (U) => a("color-change", U), z = (U) => a("line-width-change", U), R = (U) => {
      a("opacity-change", Number(U.target.value) / 100);
    }, j = (U) => a("text-size-change", U), q = (U) => a("mosaic-size-change", U), it = () => a("undo"), rt = () => a("redo"), st = () => a("delete"), ct = () => a("save"), Rt = () => a("confirm"), mt = () => a("cancel"), tt = (U) => {
      a("translate-engine-change", U);
    }, ut = (U) => {
      A(U);
    }, Mt = (U) => {
      const bt = U.target;
      bt.value && A(bt.value);
    }, pt = () => {
      const U = i.value?.getBoundingClientRect();
      return {
        width: U?.width ?? 590,
        height: U?.height ?? 50
      };
    };
    return Ee(() => o.currentTool, () => {
      $e(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: pt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: pt
    }), (U, bt) => (B(), X(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        et(" 第一个面板：工具选择 + 操作按钮 "),
        P("div", rd, [
          et(" 工具选择区域 "),
          P("div", ld, [
            (B(!0), X(
              qt,
              null,
              he(r.value, (J) => (B(), X("button", {
                key: J.type,
                onClick: (Ot) => T(J.type),
                class: Lt(["tool-btn", { active: U.currentTool === J.type }]),
                title: J.title,
                "aria-pressed": U.currentTool === J.type
              }, [
                (B(), Vt(Le(J.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, cd))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          et(" 分隔线 "),
          bt[0] || (bt[0] = P(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          et(" 操作按钮区域 "),
          P("div", ud, [
            P("button", {
              onClick: it,
              disabled: !U.canUndo,
              class: "action-btn undo",
              title: N(s)("screenshot.undo")
            }, [
              S(N(yu), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, hd),
            P("button", {
              onClick: rt,
              disabled: !U.canRedo,
              class: "action-btn redo",
              title: N(s)("screenshot.redo")
            }, [
              S(N(uu), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, dd),
            P("button", {
              onClick: st,
              disabled: !U.canDelete,
              class: "action-btn delete",
              title: N(s)("screenshot.delete")
            }, [
              S(N(ru), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, fd),
            P("button", {
              onClick: mt,
              class: "action-btn cancel",
              title: N(s)("screenshot.cancel")
            }, [
              S(N(Fi), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, gd),
            P("button", {
              onClick: ct,
              class: "action-btn save",
              title: N(s)("screenshot.save")
            }, [
              S(N(lu), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, md),
            P("button", {
              onClick: Rt,
              class: "action-btn confirm",
              title: N(s)("screenshot.confirm")
            }, [
              S(N($i), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, pd)
          ])
        ]),
        et(" 第二个面板：样式设置区域 "),
        v.value ? (B(), X("div", wd, [
          P("div", yd, [
            et(" 线宽设置 "),
            k.value ? (B(), X("div", vd, [
              P(
                "span",
                xd,
                at(N(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              P("div", bd, [
                (B(), X(
                  qt,
                  null,
                  he(c, (J) => P("button", {
                    key: J,
                    onClick: (Ot) => z(J),
                    class: Lt(["width-btn", { active: U.currentLineWidth === J }]),
                    title: `${J}px`,
                    "aria-pressed": U.currentLineWidth === J
                  }, [
                    P(
                      "span",
                      {
                        class: "line-preview",
                        style: Pt({ height: `${J}px`, backgroundColor: U.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, kd)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              P(
                "span",
                _d,
                at(U.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            k.value && f.value ? (B(), X("div", Sd)) : et("v-if", !0),
            et(" 不透明度设置 "),
            b.value ? (B(), X("div", Cd, [
              P(
                "span",
                Td,
                at(N(s)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              P("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(U.currentOpacity * 100),
                style: Pt({
                  "--opacity-color": U.currentColor,
                  "--opacity-progress": `${Math.round(U.currentOpacity * 100)}%`
                }),
                title: `${Math.round(U.currentOpacity * 100)}%`,
                "aria-label": N(s)("screenshot.opacity"),
                onInput: R
              }, null, 44, Md),
              P(
                "span",
                Ld,
                at(Math.round(U.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            b.value && f.value ? (B(), X("div", Rd)) : et("v-if", !0),
            et(" 颜色设置 "),
            f.value ? (B(), X("div", Pd, [
              P(
                "span",
                Ed,
                at(N(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              P("div", Id, [
                (B(), X(
                  qt,
                  null,
                  he(d, (J) => P("button", {
                    key: J,
                    onClick: (Ot) => ut(J),
                    class: Lt(["color-btn", { active: U.currentColor === J }]),
                    style: Pt({ backgroundColor: J }),
                    title: J,
                    "aria-pressed": U.currentColor === J
                  }, null, 14, Ad)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                P("div", Od, [
                  P("button", {
                    class: Lt(["color-btn custom-color-btn", { active: !d.includes(U.currentColor) }]),
                    title: N(s)("screenshot.customColor")
                  }, [
                    S(N(so), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, zd),
                  P("input", {
                    type: "color",
                    onChange: Mt,
                    value: U.currentColor,
                    class: "color-input-hidden",
                    title: N(s)("screenshot.customColor"),
                    "aria-label": N(s)("screenshot.customColor")
                  }, null, 40, Dd)
                ])
              ])
            ])) : et("v-if", !0),
            et(" 文字大小设置 "),
            p.value ? (B(), X("div", Nd, [
              P(
                "span",
                Wd,
                at(N(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              P("div", $d, [
                (B(), X(
                  qt,
                  null,
                  he(g, (J) => P("button", {
                    key: J,
                    onClick: (Ot) => j(J),
                    class: Lt(["size-btn", { active: U.currentTextSize === J }]),
                    title: `${J}px`,
                    "aria-pressed": U.currentTextSize === J
                  }, [
                    P(
                      "span",
                      {
                        class: "size-text",
                        style: Pt({ fontSize: `${Math.min(J, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Fd)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              P(
                "span",
                Bd,
                at(U.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            et(" 马赛克大小设置 "),
            M.value ? (B(), X("div", Hd, [
              P(
                "span",
                jd,
                at(N(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              P("div", Ud, [
                (B(), X(
                  qt,
                  null,
                  he(w, (J) => P("button", {
                    key: J,
                    onClick: (Ot) => q(J),
                    class: Lt(["size-btn", { active: U.currentMosaicSize === J }]),
                    title: `${N(s)("screenshot.brush")} ${J * 3}px`,
                    "aria-pressed": U.currentMosaicSize === J
                  }, [
                    P(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: Pt({
                          width: `${Math.min(J * 1.25, 18)}px`,
                          height: `${Math.min(J * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Vd)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              P(
                "span",
                Yd,
                at(U.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            et(" 翻译引擎选择 "),
            x.value ? (B(), X("div", Gd, [
              P(
                "span",
                Xd,
                at(N(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              P("div", Kd, [
                (B(!0), X(
                  qt,
                  null,
                  he(l.value, (J) => (B(), X("button", {
                    key: J.value,
                    onClick: (Ot) => tt(J.value),
                    class: Lt(["engine-btn", { active: U.currentTranslateEngine === J.value }]),
                    title: J.label,
                    "aria-pressed": U.currentTranslateEngine === J.value
                  }, at(J.short), 11, Zd))),
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
}), di = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, Jd = /* @__PURE__ */ di(qd, [["__scopeId", "data-v-dc3e37ec"]]), Qd = {
  class: "screenshot-container",
  ref: "containerRef"
}, tf = {
  key: 0,
  class: "mask-layers"
}, ef = {
  key: 1,
  class: "mask-full"
}, nf = { class: "size-text" }, sf = {
  key: 4,
  class: "loading-overlay"
}, of = /* @__PURE__ */ Wt({
  __name: "index",
  setup(e) {
    const t = Z(), n = Z(), i = Z(null), s = Z(null);
    let o = null;
    const a = Z(!0), r = Z(!1), l = Z(""), c = Z({ x: 0, y: 0 }), d = Z(16), g = Z(!1), w = Z("bing"), v = Z({ width: 590, height: 50 });
    let k = !1;
    const f = Z({
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
    }), b = Z(), p = Z(), M = Z(), x = Y(() => f.value.isDrawing), T = Y(() => {
      if (!f.value.selectionRect) return {};
      const { y: E } = f.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${E}px`
      };
    }), A = Y(() => {
      if (!f.value.selectionRect) return {};
      const { y: E, height: h } = f.value.selectionRect;
      return {
        top: `${E + h}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), z = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: h, height: m } = f.value.selectionRect;
      return {
        top: `${h}px`,
        left: "0",
        width: `${E}px`,
        height: `${m}px`
      };
    }), R = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: h, width: m, height: I } = f.value.selectionRect;
      return {
        top: `${h}px`,
        left: `${E + m}px`,
        right: "0",
        height: `${I}px`
      };
    }), j = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: h, width: m, height: I } = f.value.selectionRect, $ = 10, ot = 12, nt = Math.min(v.value.width, Math.max(0, window.innerWidth - $ * 2)), C = Math.min(v.value.height, Math.max(0, window.innerHeight - $ * 2)), W = Math.max($, window.innerHeight - C - $), gt = Math.max($, window.innerWidth - nt - $);
      let ht;
      return h + I + C + ot <= window.innerHeight - $ ? ht = h + I + ot : h - C - ot >= $ ? ht = h - C - ot : ht = h + I - C - $, ht = Math.min(Math.max(ht, $), W), {
        left: `${Math.min(Math.max(E + (m - nt) / 2, $), gt)}px`,
        top: `${ht}px`
      };
    }), q = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: h, width: m, height: I } = f.value.selectionRect, $ = 10;
      let ot = E - $, nt = h - $, C = "translateY(-100%)";
      return ot < 10 && (ot = E + m + $, C = "translateY(-100%)"), nt < 30 && (nt = h + I + $, C = "translateY(0)"), {
        left: `${ot}px`,
        top: `${nt}px`,
        transform: C
      };
    }), it = Y(() => {
      if (!f.value.selectionRect) return "";
      const { width: E, height: h } = f.value.selectionRect;
      return `${Math.round(E)} × ${Math.round(h)}`;
    }), rt = Y(() => {
      const E = tn(c.value);
      return {
        "--text-accent-color": f.value.currentStyle.color,
        left: `${E.x}px`,
        top: `${E.y}px`
      };
    }), st = (E) => {
      if (E === L.Pin && f.value.selectionRect) {
        ct();
        return;
      }
      if (E === L.Ocr && f.value.selectionRect) {
        Rt();
        return;
      }
      o?.setTool(E);
    }, ct = async () => {
      try {
        await o?.createPinWindow();
      } catch (E) {
        H.error("[截图] 创建贴图失败", E);
      }
    }, Rt = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (E) {
        H.error("[截图] 创建文字识别贴图失败", E);
      }
    }, mt = (E) => {
      o?.updateStyle({ color: E });
    }, tt = (E) => {
      o?.updateStyle({ lineWidth: E });
    }, ut = (E) => {
      o?.updateStyle({ opacity: E });
    }, Mt = (E) => {
      o?.updateTextSize(E);
    }, pt = (E) => {
      o?.updateMosaicSize(E);
    }, U = (E) => {
      w.value = E, o?.setTranslationEngine(E), o?.executeTranslation();
    }, bt = () => {
      o?.undoAnnotation();
    }, J = () => {
      o?.redoAnnotation();
    }, Ot = () => {
      o?.deleteSelectedAnnotation();
    }, Ht = async () => {
      try {
        await o?.processScreenshot("save"), ft();
      } catch (E) {
        const h = E?.message || E?.toString() || "保存失败";
        if (h.includes("保存已取消") || h.includes("cancelled"))
          return;
        H.error("保存截图时发生错误", h);
      }
    }, te = async () => {
      try {
        await o?.processScreenshot("copy"), ft();
      } catch {
      }
    }, kt = () => {
      ft();
    };
    let _t = null;
    const jt = (E, h) => {
      if (h && h.getData().type === "text") {
        const m = h.getData();
        c.value = {
          x: m.points[0].x,
          y: m.points[0].y
        }, d.value = m.fontSize || f.value.textSize;
      } else
        c.value = E, d.value = f.value.textSize;
      r.value = !0, _t = h || null, h && o?.setEditingAnnotation(h), h && h.getData().text ? l.value = h.getData().text : l.value = "", $e(() => {
        n.value?.focus(), _t && n.value?.select();
      });
    }, ee = () => {
      l.value.trim() ? _t ? o?.updateTextAnnotation(_t, l.value) : o?.createTextAnnotation(c.value, l.value) : _t && o?.deleteAnnotation(_t), Ut();
    }, Ut = () => {
      r.value = !1, l.value = "", _t && o?.clearEditingAnnotation(), _t = null;
    }, D = (E) => {
      navigator.clipboard && navigator.clipboard.writeText(E.hex).catch((h) => {
        H.error("[截图] 复制颜色到剪贴板失败", h);
      });
    }, lt = (E) => {
      if (E.key === "Meta" || E.key === "Win" || E.altKey && E.key === "Tab" || E.altKey && E.key === "F4") {
        E.preventDefault(), E.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (E.key === "Escape") {
          Ut(), E.preventDefault();
          return;
        }
        if (E.key === "Enter") {
          ee(), E.preventDefault();
          return;
        }
        if (E.key === "Tab") {
          E.preventDefault();
          return;
        }
        return;
      }
      if (!f.value.selectionRect) {
        if (E.key === "Escape") {
          ft();
          return;
        }
        E.preventDefault(), E.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(E)) {
        E.preventDefault();
        return;
      }
      const h = navigator.platform.toLowerCase().includes("mac");
      if ((h ? E.metaKey : E.ctrlKey) && E.key.toLowerCase() === "z") {
        E.shiftKey ? J() : bt(), E.preventDefault();
        return;
      }
      if (!h && E.ctrlKey && E.key.toLowerCase() === "y") {
        J(), E.preventDefault();
        return;
      }
      if (E.key === "Escape") {
        ft();
        return;
      } else if (E.key === "Delete" || E.key === "Backspace") {
        Ot(), E.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(E.key) || E.preventDefault();
    }, ft = async () => {
      if (!k) {
        k = !0, o?.destroy(), o = null;
        try {
          await O("cleanup_screenshot_resources");
        } catch {
          try {
            await O("clear_screenshot_background");
          } catch (h) {
            H.error("[截图] 清理后台缓存失败", h);
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
        }, r.value = !1, l.value = "", _t = null, g.value = !1, a.value = !0;
        try {
          await O("close_and_destroy_screenshot_window");
        } catch (E) {
          H.error("[截图] 销毁截图窗口失败，回退到 close()", E), await s.value?.close();
        } finally {
          k = !1;
        }
      }
    }, St = () => {
      const E = o?.getState();
      E && (f.value = E);
    }, wt = () => {
      const E = i.value?.getToolbarSize?.();
      E && (v.value = E);
    }, Et = (E) => {
      const h = E.detail;
      h && (v.value = h);
    };
    return hn(async () => {
      if (t.value) {
        s.value = new An("screenshot"), await s.value.emit("screenshot_ready"), o = new eu(
          t.value,
          St,
          jt,
          D
        );
        try {
          const E = await O("get_translation_engine");
          E && ["google", "bing", "offline"].includes(E) && (w.value = E, o?.setTranslationEngine(E));
        } catch (E) {
          H.error("[截图] 获取翻译引擎设置失败", E);
        }
        try {
          const E = await O("get_offline_model_activated");
          o?.setOfflineModelActivated(E);
        } catch (E) {
          H.error("[截图] 获取离线模型激活状态失败", E);
        }
        document.addEventListener("keydown", lt), window.addEventListener("resize", wt), window.addEventListener("screenshot-toolbar-resize", Et), p.value = await _n("background-ready", () => {
          o?.triggerBackgroundReload();
        }), M.value = await _n("screenshot-close-requested", () => {
          ft();
        }), b.value = await _n("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const E = o?.getTranslationState();
          E?.isLoading || E?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const h = o?.getTranslationState();
              if (h?.isLoading || h?.isVisible)
                return;
              ft();
            }
          }, 100);
        }), $e(wt);
      }
    }), ts(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", lt), window.removeEventListener("resize", wt), window.removeEventListener("screenshot-toolbar-resize", Et), b.value?.(), p.value?.(), M.value?.(), b.value = void 0, p.value = void 0, M.value = void 0, s.value = null;
    }), (E, h) => (B(), X(
      "div",
      Qd,
      [
        et(" 遮罩层 "),
        f.value.selectionRect ? (B(), X("div", tf, [
          P(
            "div",
            {
              class: "mask-top",
              style: Pt(T.value)
            },
            null,
            4
            /* STYLE */
          ),
          P(
            "div",
            {
              class: "mask-bottom",
              style: Pt(A.value)
            },
            null,
            4
            /* STYLE */
          ),
          P(
            "div",
            {
              class: "mask-left",
              style: Pt(z.value)
            },
            null,
            4
            /* STYLE */
          ),
          P(
            "div",
            {
              class: "mask-right",
              style: Pt(R.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (B(), X("div", ef)),
        et(" 画布 "),
        P(
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
            style: Pt(q.value)
          },
          [
            P(
              "span",
              nf,
              at(it.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : et("v-if", !0),
        et(" 工具栏 "),
        f.value.selectionRect && !x.value ? (B(), Vt(Jd, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: Pt(j.value),
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
          "current-translate-engine": w.value,
          onToolSelect: st,
          onColorChange: mt,
          onLineWidthChange: tt,
          onOpacityChange: ut,
          onTextSizeChange: Mt,
          onMosaicSizeChange: pt,
          onTranslateEngineChange: U,
          onUndo: bt,
          onRedo: J,
          onDelete: Ot,
          onSave: Ht,
          onConfirm: te,
          onCancel: kt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : et("v-if", !0),
        et(" 加载提示 - 仅在初始化时显示 "),
        g.value ? (B(), X("div", sf, [
          h[1] || (h[1] = P(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          P(
            "p",
            null,
            at(E.$t("screenshotTool.loading")),
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
            style: Pt(rt.value)
          },
          [
            Cn(P(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": h[0] || (h[0] = (m) => l.value = m),
                type: "text",
                class: "text-input",
                style: Pt({
                  color: f.value.currentStyle.color,
                  fontFamily: N(Qe),
                  fontSize: d.value + "px",
                  height: d.value + "px",
                  lineHeight: d.value + "px"
                }),
                onKeydown: [
                  js(ee, ["enter"]),
                  js(Ut, ["escape"])
                ],
                onBlur: ee,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [sl, l.value]
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
}), af = /* @__PURE__ */ di(of, [["__scopeId", "data-v-fd4bfc80"]]), rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: af
}, Symbol.toStringTag, { value: "Module" })), Ba = Symbol(), Zn = "el", lf = "is-", ze = (e, t, n, i, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Ha = Symbol("namespaceContextKey"), cf = (e) => {
  const t = e || (on() ? Re(Ha, Z(Zn)) : Z(Zn));
  return Y(() => N(t) || Zn);
}, ps = (e, t) => {
  const n = cf(t);
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
      return f && p ? `${lf}${f}` : "";
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
const uf = Object.prototype.hasOwnProperty, Ao = (e, t) => uf.call(e, t), En = (e) => typeof e == "function", He = (e) => typeof e == "string", ja = (e) => e !== null && typeof e == "object";
var hf = typeof global == "object" && global && global.Object === Object && global, df = typeof self == "object" && self && self.Object === Object && self, ws = hf || df || Function("return this")(), ln = ws.Symbol, Ua = Object.prototype, ff = Ua.hasOwnProperty, gf = Ua.toString, yn = ln ? ln.toStringTag : void 0;
function mf(e) {
  var t = ff.call(e, yn), n = e[yn];
  try {
    e[yn] = void 0;
    var i = !0;
  } catch {
  }
  var s = gf.call(e);
  return i && (t ? e[yn] = n : delete e[yn]), s;
}
var pf = Object.prototype, wf = pf.toString;
function yf(e) {
  return wf.call(e);
}
var vf = "[object Null]", xf = "[object Undefined]", Oo = ln ? ln.toStringTag : void 0;
function Va(e) {
  return e == null ? e === void 0 ? xf : vf : Oo && Oo in Object(e) ? mf(e) : yf(e);
}
function bf(e) {
  return e != null && typeof e == "object";
}
var kf = "[object Symbol]";
function ys(e) {
  return typeof e == "symbol" || bf(e) && Va(e) == kf;
}
function _f(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var vs = Array.isArray, zo = ln ? ln.prototype : void 0, Do = zo ? zo.toString : void 0;
function Ya(e) {
  if (typeof e == "string")
    return e;
  if (vs(e))
    return _f(e, Ya) + "";
  if (ys(e))
    return Do ? Do.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ga(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Sf = "[object AsyncFunction]", Cf = "[object Function]", Tf = "[object GeneratorFunction]", Mf = "[object Proxy]";
function Lf(e) {
  if (!Ga(e))
    return !1;
  var t = Va(e);
  return t == Cf || t == Tf || t == Sf || t == Mf;
}
var Ai = ws["__core-js_shared__"], No = function() {
  var e = /[^.]+$/.exec(Ai && Ai.keys && Ai.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rf(e) {
  return !!No && No in e;
}
var Pf = Function.prototype, Ef = Pf.toString;
function If(e) {
  if (e != null) {
    try {
      return Ef.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Af = /[\\^$.*+?()[\]{}|]/g, Of = /^\[object .+?Constructor\]$/, zf = Function.prototype, Df = Object.prototype, Nf = zf.toString, Wf = Df.hasOwnProperty, $f = RegExp(
  "^" + Nf.call(Wf).replace(Af, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ff(e) {
  if (!Ga(e) || Rf(e))
    return !1;
  var t = Lf(e) ? $f : Of;
  return t.test(If(e));
}
function Bf(e, t) {
  return e?.[t];
}
function Xa(e, t) {
  var n = Bf(e, t);
  return Ff(n) ? n : void 0;
}
function Hf(e, t) {
  return e === t || e !== e && t !== t;
}
var jf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uf = /^\w*$/;
function Vf(e, t) {
  if (vs(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ys(e) ? !0 : Uf.test(e) || !jf.test(e) || t != null && e in Object(t);
}
var In = Xa(Object, "create");
function Yf() {
  this.__data__ = In ? In(null) : {}, this.size = 0;
}
function Gf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Xf = "__lodash_hash_undefined__", Kf = Object.prototype, Zf = Kf.hasOwnProperty;
function qf(e) {
  var t = this.__data__;
  if (In) {
    var n = t[e];
    return n === Xf ? void 0 : n;
  }
  return Zf.call(t, e) ? t[e] : void 0;
}
var Jf = Object.prototype, Qf = Jf.hasOwnProperty;
function tg(e) {
  var t = this.__data__;
  return In ? t[e] !== void 0 : Qf.call(t, e);
}
var eg = "__lodash_hash_undefined__";
function ng(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = In && t === void 0 ? eg : t, this;
}
function je(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
je.prototype.clear = Yf;
je.prototype.delete = Gf;
je.prototype.get = qf;
je.prototype.has = tg;
je.prototype.set = ng;
function ig() {
  this.__data__ = [], this.size = 0;
}
function fi(e, t) {
  for (var n = e.length; n--; )
    if (Hf(e[n][0], t))
      return n;
  return -1;
}
var sg = Array.prototype, og = sg.splice;
function ag(e) {
  var t = this.__data__, n = fi(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : og.call(t, n, 1), --this.size, !0;
}
function rg(e) {
  var t = this.__data__, n = fi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function lg(e) {
  return fi(this.__data__, e) > -1;
}
function cg(e, t) {
  var n = this.__data__, i = fi(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function dn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
dn.prototype.clear = ig;
dn.prototype.delete = ag;
dn.prototype.get = rg;
dn.prototype.has = lg;
dn.prototype.set = cg;
var ug = Xa(ws, "Map");
function hg() {
  this.size = 0, this.__data__ = {
    hash: new je(),
    map: new (ug || dn)(),
    string: new je()
  };
}
function dg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function gi(e, t) {
  var n = e.__data__;
  return dg(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function fg(e) {
  var t = gi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function gg(e) {
  return gi(this, e).get(e);
}
function mg(e) {
  return gi(this, e).has(e);
}
function pg(e, t) {
  var n = gi(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ge.prototype.clear = hg;
Ge.prototype.delete = fg;
Ge.prototype.get = gg;
Ge.prototype.has = mg;
Ge.prototype.set = pg;
var wg = "Expected a function";
function xs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(wg);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, i);
    return n.cache = o.set(s, a) || o, a;
  };
  return n.cache = new (xs.Cache || Ge)(), n;
}
xs.Cache = Ge;
var yg = 500;
function vg(e) {
  var t = xs(e, function(i) {
    return n.size === yg && n.clear(), i;
  }), n = t.cache;
  return t;
}
var xg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bg = /\\(\\)?/g, kg = vg(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xg, function(n, i, s, o) {
    t.push(s ? o.replace(bg, "$1") : i || n);
  }), t;
});
function _g(e) {
  return e == null ? "" : Ya(e);
}
function Sg(e, t) {
  return vs(e) ? e : Vf(e, t) ? [e] : kg(_g(e));
}
function Cg(e) {
  if (typeof e == "string" || ys(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Tg(e, t) {
  t = Sg(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Cg(t[n++])];
  return n && n == i ? e : void 0;
}
function Mg(e, t, n) {
  var i = e == null ? void 0 : Tg(e, t);
  return i === void 0 ? n : i;
}
function Lg(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var s = e[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Ka = (e) => e === void 0, Wo = (e) => typeof e == "boolean", Ue = (e) => typeof e == "number", qi = (e) => typeof Element > "u" ? !1 : e instanceof Element, Rg = (e) => He(e) ? !Number.isNaN(Number(e)) : !1;
var $o;
const Xe = typeof window < "u", Pg = (e) => typeof e == "string", Eg = () => {
};
Xe && (($o = window?.navigator) != null && $o.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function bs(e) {
  return typeof e == "function" ? e() : N(e);
}
function Ig(e) {
  return e;
}
function ks(e) {
  return al() ? (rl(e), !0) : !1;
}
function Ag(e, t = !0) {
  on() ? hn(e) : t ? e() : $e(e);
}
function Za(e, t, n = {}) {
  const {
    immediate: i = !0
  } = n, s = Z(!1);
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
    }, bs(t));
  }
  return i && (s.value = !0, Xe && l()), ks(r), {
    isPending: ol(s),
    start: l,
    stop: r
  };
}
function qa(e) {
  var t;
  const n = bs(e);
  return (t = n?.$el) != null ? t : n;
}
const Ja = Xe ? window : void 0;
function Qa(...e) {
  let t, n, i, s;
  if (Pg(e[0]) || Array.isArray(e[0]) ? ([n, i, s] = e, t = Ja) : [t, n, i, s] = e, !t)
    return Eg;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((d) => d()), o.length = 0;
  }, r = (d, g, w, v) => (d.addEventListener(g, w, v), () => d.removeEventListener(g, w, v)), l = Ee(() => [qa(t), bs(s)], ([d, g]) => {
    a(), d && o.push(...n.flatMap((w) => i.map((v) => r(d, w, v, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return ks(c), c;
}
function Og(e, t = !1) {
  const n = Z(), i = () => n.value = !!e();
  return i(), Ag(i, t), n;
}
const Fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bo = "__vueuse_ssr_handlers__";
Fo[Bo] = Fo[Bo] || {};
var Ho = Object.getOwnPropertySymbols, zg = Object.prototype.hasOwnProperty, Dg = Object.prototype.propertyIsEnumerable, Ng = (e, t) => {
  var n = {};
  for (var i in e)
    zg.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Ho)
    for (var i of Ho(e))
      t.indexOf(i) < 0 && Dg.call(e, i) && (n[i] = e[i]);
  return n;
};
function Wg(e, t, n = {}) {
  const i = n, { window: s = Ja } = i, o = Ng(i, ["window"]);
  let a;
  const r = Og(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Ee(() => qa(e), (g) => {
    l(), r.value && s && g && (a = new ResizeObserver(t), a.observe(g, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), c();
  };
  return ks(d), {
    isSupported: r,
    stop: d
  };
}
var jo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(jo || (jo = {}));
var $g = Object.defineProperty, Uo = Object.getOwnPropertySymbols, Fg = Object.prototype.hasOwnProperty, Bg = Object.prototype.propertyIsEnumerable, Vo = (e, t, n) => t in e ? $g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Hg = (e, t) => {
  for (var n in t || (t = {}))
    Fg.call(t, n) && Vo(e, n, t[n]);
  if (Uo)
    for (var n of Uo(t))
      Bg.call(t, n) && Vo(e, n, t[n]);
  return e;
};
const jg = {
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
Hg({
  linear: Ig
}, jg);
const Yo = {
  current: 0
}, Go = Z(0), tr = 2e3, Xo = Symbol("elZIndexContextKey"), er = Symbol("zIndexContextKey"), Ug = (e) => {
  const t = on() ? Re(Xo, Yo) : Yo, n = e || (on() ? Re(er, void 0) : void 0), i = Y(() => {
    const a = N(n);
    return Ue(a) ? a : tr;
  }), s = Y(() => i.value + Go.value), o = () => (t.current++, Go.value = t.current, s.value);
  return !Xe && Re(Xo), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Vg = {
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
const Yg = (e) => (t, n) => Gg(t, n, N(e)), Gg = (e, t, n) => Mg(n, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), Xg = (e) => {
  const t = Y(() => N(e).name), n = ll(e) ? e : Z(e);
  return {
    lang: t,
    locale: n,
    t: Yg(e)
  };
}, nr = Symbol("localeContextKey"), Kg = (e) => {
  const t = e || Re(nr, Z());
  return Xg(Y(() => t.value || Vg));
}, ir = "__epPropKey", ae = (e) => e, Zg = (e) => ja(e) && !!e[ir], sr = (e, t) => {
  if (!ja(e) || Zg(e))
    return e;
  const { values: n, required: i, default: s, type: o, validator: a } = e, l = {
    type: o,
    required: !!i,
    validator: n || a ? (c) => {
      let d = !1, g = [];
      if (n && (g = Array.from(n), Ao(e, "default") && g.push(s), d || (d = g.includes(c))), a && (d || (d = a(c))), !d && g.length > 0) {
        const w = [...new Set(g)].map((v) => JSON.stringify(v)).join(", ");
        cl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${w}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [ir]: !0
  };
  return Ao(e, "default") && (l.default = s), l;
}, fn = (e) => Lg(Object.entries(e).map(([t, n]) => [
  t,
  sr(n, t)
])), qg = ["", "default", "small", "large"], Jg = sr({
  type: String,
  values: qg,
  required: !1
}), Qg = Symbol("size"), tm = Symbol("emptyValuesContextKey"), em = fn({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => En(e) ? !e() : !e
  }
}), Ko = (e) => Object.keys(e), ii = Z();
function or(e, t = void 0) {
  return on() ? Re(Ba, ii) : ii;
}
function ar(e, t) {
  const n = or(), i = ps(e, Y(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || Zn;
  })), s = Kg(Y(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), o = Ug(Y(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || tr;
  })), a = Y(() => {
    var r;
    return N(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return rr(Y(() => N(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const rr = (e, t, n = !1) => {
  var i;
  const s = !!on(), o = s ? or() : void 0, a = (i = void 0) != null ? i : s ? ul : void 0;
  if (!a)
    return;
  const r = Y(() => {
    const l = N(e);
    return o?.value ? nm(o.value, l) : l;
  });
  return a(Ba, r), a(nr, Y(() => r.value.locale)), a(Ha, Y(() => r.value.namespace)), a(er, Y(() => r.value.zIndex)), a(Qg, {
    size: Y(() => r.value.size || "")
  }), a(tm, Y(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !ii.value) && (ii.value = r.value), r;
}, nm = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ko(e), ...Ko(t)])], i = {};
  for (const s of n)
    i[s] = t[s] !== void 0 ? t[s] : e[s];
  return i;
};
var mi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
function Ji(e, t = "px") {
  if (!e)
    return "";
  if (Ue(e) || Rg(e))
    return `${e}${t}`;
  if (He(e))
    return e;
}
const lr = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), cr = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), im = fn({
  size: {
    type: ae([Number, String])
  },
  color: {
    type: String
  }
}), sm = Wt({
  name: "ElIcon",
  inheritAttrs: !1
}), om = /* @__PURE__ */ Wt({
  ...sm,
  props: im,
  setup(e) {
    const t = e, n = ps("icon"), i = Y(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Ka(s) ? void 0 : Ji(s),
        "--color": o
      };
    });
    return (s, o) => (B(), X("i", hl({
      class: N(n).b(),
      style: N(i)
    }, s.$attrs), [
      Be(s.$slots, "default")
    ], 16));
  }
});
var am = /* @__PURE__ */ mi(om, [["__file", "icon.vue"]]);
const si = lr(am);
/*! Element Plus Icons Vue v2.3.1 */
var rm = /* @__PURE__ */ Wt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), lm = rm, cm = /* @__PURE__ */ Wt({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ur = cm, um = /* @__PURE__ */ Wt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), hm = um, dm = /* @__PURE__ */ Wt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), fm = dm, gm = /* @__PURE__ */ Wt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), mm = gm;
const hr = ae([
  String,
  Object,
  Function
]), pm = {
  Close: ur
}, wm = {
  Close: ur
}, oi = {
  success: fm,
  warning: mm,
  error: lm,
  info: hm
}, ym = (e) => e, qn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, vm = fn({
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
    type: ae([String, Object, Array])
  },
  offset: {
    type: ae(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), xm = Wt({
  name: "ElBadge"
}), bm = /* @__PURE__ */ Wt({
  ...xm,
  props: vm,
  setup(e, { expose: t }) {
    const n = e, i = ps("badge"), s = Y(() => n.isDot ? "" : Ue(n.value) && Ue(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = Y(() => {
      var a, r, l, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ji(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Ji((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (B(), X("div", {
      class: Lt(N(i).b())
    }, [
      Be(a.$slots, "default"),
      S(es, {
        name: `${N(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Zt(() => [
          Cn(P("sup", {
            class: Lt([
              N(i).e("content"),
              N(i).em("content", a.type),
              N(i).is("fixed", !!a.$slots.default),
              N(i).is("dot", a.isDot),
              N(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Pt(N(o))
          }, [
            Be(a.$slots, "content", { value: N(s) }, () => [
              dl(at(N(s)), 1)
            ])
          ], 6), [
            [Jn, !a.hidden && (N(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var km = /* @__PURE__ */ mi(bm, [["__file", "badge.vue"]]);
const _m = lr(km), Sm = fn({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ae(Object)
  },
  size: Jg,
  button: {
    type: ae(Object)
  },
  experimentalFeatures: {
    type: ae(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ae(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...em
}), ue = {};
Wt({
  name: "ElConfigProvider",
  props: Sm,
  setup(e, { slots: t }) {
    Ee(() => e.message, (i) => {
      Object.assign(ue, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = rr(e);
    return () => Be(t, "default", { config: n?.value });
  }
});
const dr = ["success", "info", "warning", "error"], Xt = ym({
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
  appendTo: Xe ? document.body : void 0
}), Cm = fn({
  customClass: {
    type: String,
    default: Xt.customClass
  },
  center: {
    type: Boolean,
    default: Xt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Xt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Xt.duration
  },
  icon: {
    type: hr,
    default: Xt.icon
  },
  id: {
    type: String,
    default: Xt.id
  },
  message: {
    type: ae([
      String,
      Object,
      Function
    ]),
    default: Xt.message
  },
  onClose: {
    type: ae(Function),
    default: Xt.onClose
  },
  showClose: {
    type: Boolean,
    default: Xt.showClose
  },
  type: {
    type: String,
    values: dr,
    default: Xt.type
  },
  plain: {
    type: Boolean,
    default: Xt.plain
  },
  offset: {
    type: Number,
    default: Xt.offset
  },
  zIndex: {
    type: Number,
    default: Xt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Xt.grouping
  },
  repeatNum: {
    type: Number,
    default: Xt.repeatNum
  }
}), Tm = {
  destroy: () => !0
}, fe = fl([]), Mm = (e) => {
  const t = fe.findIndex((s) => s.id === e), n = fe[t];
  let i;
  return t > 0 && (i = fe[t - 1]), { current: n, prev: i };
}, Lm = (e) => {
  const { prev: t } = Mm(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Rm = (e, t) => fe.findIndex((i) => i.id === e) > 0 ? 16 : t, Pm = Wt({
  name: "ElMessage"
}), Em = /* @__PURE__ */ Wt({
  ...Pm,
  props: Cm,
  emits: Tm,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = wm, { ns: s, zIndex: o } = ar("message"), { currentZIndex: a, nextZIndex: r } = o, l = Z(), c = Z(!1), d = Z(0);
    let g;
    const w = Y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = Y(() => {
      const R = n.type;
      return { [s.bm("icon", R)]: R && oi[R] };
    }), k = Y(() => n.icon || oi[n.type] || ""), f = Y(() => Lm(n.id)), b = Y(() => Rm(n.id, n.offset) + f.value), p = Y(() => d.value + b.value), M = Y(() => ({
      top: `${b.value}px`,
      zIndex: a.value
    }));
    function x() {
      n.duration !== 0 && ({ stop: g } = Za(() => {
        A();
      }, n.duration));
    }
    function T() {
      g?.();
    }
    function A() {
      c.value = !1;
    }
    function z({ code: R }) {
      R === qn.esc && A();
    }
    return hn(() => {
      x(), r(), c.value = !0;
    }), Ee(() => n.repeatNum, () => {
      T(), x();
    }), Qa(document, "keydown", z), Wg(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: p,
      close: A
    }), (R, j) => (B(), Vt(es, {
      name: N(s).b("fade"),
      onBeforeLeave: R.onClose,
      onAfterLeave: (q) => R.$emit("destroy"),
      persisted: ""
    }, {
      default: Zt(() => [
        Cn(P("div", {
          id: R.id,
          ref_key: "messageRef",
          ref: l,
          class: Lt([
            N(s).b(),
            { [N(s).m(R.type)]: R.type },
            N(s).is("center", R.center),
            N(s).is("closable", R.showClose),
            N(s).is("plain", R.plain),
            R.customClass
          ]),
          style: Pt(N(M)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: x
        }, [
          R.repeatNum > 1 ? (B(), Vt(N(_m), {
            key: 0,
            value: R.repeatNum,
            type: N(w),
            class: Lt(N(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : et("v-if", !0),
          N(k) ? (B(), Vt(N(si), {
            key: 1,
            class: Lt([N(s).e("icon"), N(v)])
          }, {
            default: Zt(() => [
              (B(), Vt(Le(N(k))))
            ]),
            _: 1
          }, 8, ["class"])) : et("v-if", !0),
          Be(R.$slots, "default", {}, () => [
            R.dangerouslyUseHTMLString ? (B(), X(qt, { key: 1 }, [
              et(" Caution here, message could've been compromised, never use user's input as message "),
              P("p", {
                class: Lt(N(s).e("content")),
                innerHTML: R.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (B(), X("p", {
              key: 0,
              class: Lt(N(s).e("content"))
            }, at(R.message), 3))
          ]),
          R.showClose ? (B(), Vt(N(si), {
            key: 2,
            class: Lt(N(s).e("closeBtn")),
            onClick: It(A, ["stop"])
          }, {
            default: Zt(() => [
              S(N(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : et("v-if", !0)
        ], 46, ["id"]), [
          [Jn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Im = /* @__PURE__ */ mi(Em, [["__file", "message.vue"]]);
let Am = 1;
const fr = (e) => {
  const t = !e || He(e) || Tn(e) || En(e) ? { message: e } : e, n = {
    ...Xt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (He(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    qi(i) || (i = document.body), n.appendTo = i;
  }
  return Wo(ue.grouping) && !n.grouping && (n.grouping = ue.grouping), Ue(ue.duration) && n.duration === 3e3 && (n.duration = ue.duration), Ue(ue.offset) && n.offset === 16 && (n.offset = ue.offset), Wo(ue.showClose) && !n.showClose && (n.showClose = ue.showClose), n;
}, Om = (e) => {
  const t = fe.indexOf(e);
  if (t === -1)
    return;
  fe.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, zm = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Am++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), Om(d);
    },
    onDestroy: () => {
      Qn(null, o);
    }
  }, r = S(Im, a, En(a.message) || Tn(a.message) ? {
    default: En(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || cn._context, Qn(r, o), e.appendChild(o.firstElementChild);
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
}, cn = (e = {}, t) => {
  if (!Xe)
    return { close: () => {
    } };
  const n = fr(e);
  if (n.grouping && fe.length) {
    const s = fe.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (Ue(ue.max) && fe.length >= ue.max)
    return { close: () => {
    } };
  const i = zm(n, t);
  return fe.push(i), i.handler;
};
dr.forEach((e) => {
  cn[e] = (t = {}, n) => {
    const i = fr(t);
    return cn({ ...i, type: e }, n);
  };
});
function Dm(e) {
  for (const t of fe)
    (!e || e === t.props.type) && t.handler.close();
}
cn.closeAll = Dm;
cn._context = null;
const Nm = cr(cn, "$message"), gr = [
  "success",
  "info",
  "warning",
  "error"
], Wm = fn({
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
    type: hr
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ae([
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
    type: ae(Function),
    default: () => {
    }
  },
  onClose: {
    type: ae(Function),
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
    values: [...gr, ""],
    default: ""
  },
  zIndex: Number
}), $m = {
  destroy: () => !0
}, Fm = Wt({
  name: "ElNotification"
}), Bm = /* @__PURE__ */ Wt({
  ...Fm,
  props: Wm,
  emits: $m,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: s } = ar("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = pm, l = Z(!1);
    let c;
    const d = Y(() => {
      const x = n.type;
      return x && oi[n.type] ? i.m(x) : "";
    }), g = Y(() => n.type && oi[n.type] || n.icon), w = Y(() => n.position.endsWith("right") ? "right" : "left"), v = Y(() => n.position.startsWith("top") ? "top" : "bottom"), k = Y(() => {
      var x;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (x = n.zIndex) != null ? x : a.value
      };
    });
    function f() {
      n.duration > 0 && ({ stop: c } = Za(() => {
        l.value && p();
      }, n.duration));
    }
    function b() {
      c?.();
    }
    function p() {
      l.value = !1;
    }
    function M({ code: x }) {
      x === qn.delete || x === qn.backspace ? b() : x === qn.esc ? l.value && p() : f();
    }
    return hn(() => {
      f(), o(), l.value = !0;
    }), Qa(document, "keydown", M), t({
      visible: l,
      close: p
    }), (x, T) => (B(), Vt(es, {
      name: N(i).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (A) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: Zt(() => [
        Cn(P("div", {
          id: x.id,
          class: Lt([N(i).b(), x.customClass, N(w)]),
          style: Pt(N(k)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: f,
          onClick: x.onClick
        }, [
          N(g) ? (B(), Vt(N(si), {
            key: 0,
            class: Lt([N(i).e("icon"), N(d)])
          }, {
            default: Zt(() => [
              (B(), Vt(Le(N(g))))
            ]),
            _: 1
          }, 8, ["class"])) : et("v-if", !0),
          P("div", {
            class: Lt(N(i).e("group"))
          }, [
            P("h2", {
              class: Lt(N(i).e("title")),
              textContent: at(x.title)
            }, null, 10, ["textContent"]),
            Cn(P("div", {
              class: Lt(N(i).e("content")),
              style: Pt(x.title ? void 0 : { margin: 0 })
            }, [
              Be(x.$slots, "default", {}, () => [
                x.dangerouslyUseHTMLString ? (B(), X(qt, { key: 1 }, [
                  et(" Caution here, message could've been compromised, never use user's input as message "),
                  P("p", { innerHTML: x.message }, null, 8, ["innerHTML"])
                ], 2112)) : (B(), X("p", { key: 0 }, at(x.message), 1))
              ])
            ], 6), [
              [Jn, x.message]
            ]),
            x.showClose ? (B(), Vt(N(si), {
              key: 0,
              class: Lt(N(i).e("closeBtn")),
              onClick: It(p, ["stop"])
            }, {
              default: Zt(() => [
                S(N(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : et("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Jn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Hm = /* @__PURE__ */ mi(Bm, [["__file", "notification.vue"]]);
const ai = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Qi = 16;
let jm = 1;
const un = function(e = {}, t) {
  if (!Xe)
    return { close: () => {
    } };
  (He(e) || Tn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  ai[n].forEach(({ vm: d }) => {
    var g;
    i += (((g = d.el) == null ? void 0 : g.offsetHeight) || 0) + Qi;
  }), i += Qi;
  const s = `notification_${jm++}`, o = e.onClose, a = {
    ...e,
    offset: i,
    id: s,
    onClose: () => {
      Um(s, n, o);
    }
  };
  let r = document.body;
  qi(e.appendTo) ? r = e.appendTo : He(e.appendTo) && (r = document.querySelector(e.appendTo)), qi(r) || (r = document.body);
  const l = document.createElement("div"), c = S(Hm, a, En(a.message) ? a.message : Tn(a.message) ? () => a.message : null);
  return c.appContext = Ka(t) ? un._context : t, c.props.onDestroy = () => {
    Qn(null, l);
  }, Qn(c, l), ai[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
gr.forEach((e) => {
  un[e] = (t = {}, n) => ((He(t) || Tn(t)) && (t = {
    message: t
  }), un({ ...t, type: e }, n));
});
function Um(e, t, n) {
  const i = ai[t], s = i.findIndex(({ vm: c }) => {
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
      const { el: d, component: g } = i[c].vm, w = Number.parseInt(d.style[r], 10) - a - Qi;
      g.props.offset = w;
    }
}
function Vm() {
  for (const e of Object.values(ai))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
un.closeAll = Vm;
un._context = null;
const Ym = cr(un, "$notify"), ne = {
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
    i === "center" ? Nm({
      message: t,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Ym({
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
}, Gm = ["disabled"], Xm = {
  key: 0,
  class: "custom-button__loading"
}, Km = /* @__PURE__ */ Wt({
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
      class: Lt([
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
      e.loading ? (B(), X("div", Xm, i[1] || (i[1] = [
        P(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            P("circle", {
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
      Be(n.$slots, "default", {}, void 0, !0)
    ], 10, Gm));
  }
}), xe = /* @__PURE__ */ di(Km, [["__scopeId", "data-v-9497085f"]]);
function Zm(e) {
  return Qm(e.anchor, e.focus) <= 0 ? { start: e.anchor, end: e.focus } : { start: e.focus, end: e.anchor };
}
function mr(e, t) {
  if (!t || e.length === 0)
    return [];
  const { start: n, end: i } = Zm(t);
  if (n.blockIndex < 0 || i.blockIndex >= e.length)
    return [];
  const s = [];
  for (let o = n.blockIndex; o <= i.blockIndex; o += 1) {
    const a = e[o].text.length, r = o === n.blockIndex ? Zo(n.offset, a) : 0, l = o === i.blockIndex ? Zo(i.offset, a) : a;
    l > r && s.push({ blockIndex: o, start: r, end: l });
  }
  return s;
}
function qm(e, t) {
  const n = mr(e, t);
  return n.map((i, s) => {
    const o = e[i.blockIndex], a = o.text.slice(i.start, i.end), r = i.end === o.text.length, l = s < n.length - 1;
    return a + (r && l ? o.separator : "");
  }).join("");
}
function Jm(e, t) {
  let n = 0, i = Number.POSITIVE_INFINITY;
  for (let s = 0; s < e.length; s += 1) {
    const o = Math.abs(e[s] - t);
    o < i && (n = s, i = o);
  }
  return n;
}
function Qm(e, t) {
  return e.blockIndex - t.blockIndex || e.offset - t.offset;
}
function Zo(e, t) {
  return Number.isFinite(e) ? Math.max(0, Math.min(t, Math.round(e))) : 0;
}
const tp = ["src"], ep = { class: "ocr-header" }, np = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, ip = { "data-tauri-drag-region": "" }, sp = { class: "ocr-window-controls" }, op = ["title"], ap = ["title"], rp = ["title"], lp = ["title"], cp = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, up = ["src"], hp = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, dp = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, fp = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, gp = { "data-tauri-drag-region": "" }, mp = { "data-tauri-drag-region": "" }, pp = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, wp = ["title"], yp = {
  key: 0,
  class: "ocr-original-image"
}, vp = ["src"], xp = {
  key: 0,
  class: "ocr-state"
}, bp = {
  key: 1,
  class: "ocr-state error"
}, kp = {
  key: 2,
  class: "ocr-state muted"
}, _p = { class: "ocr-preview-pane" }, Sp = { class: "ocr-preview-stage" }, Cp = ["src"], Tp = {
  key: 0,
  class: "ocr-selection-highlight-layer",
  "aria-hidden": "true"
}, Mp = ["data-selection-index", "textContent"], Lp = {
  key: 0,
  class: "ocr-selection-translation"
}, Rp = { class: "ocr-translation-section" }, Pp = { class: "ocr-translation-label" }, Ep = { class: "ocr-translation-source" }, Ip = { class: "ocr-translation-section result" }, Ap = { class: "ocr-translation-label" }, Op = ["textContent"], zp = { class: "ocr-record-main-row" }, Dp = ["onClick"], Np = ["checked", "onChange"], Wp = { class: "ocr-record-index" }, $p = ["textContent", "onBlur"], Fp = {
  key: 0,
  class: "ocr-record-score"
}, Bp = {
  key: 0,
  class: "ocr-record-translation"
}, Hp = { class: "ocr-translation-label" }, jp = ["textContent", "onBlur"], Up = { class: "ocr-action-bar" }, Vp = ["onClick"], Yp = { class: "engine-label" }, Gp = ["onClick"], Xp = { class: "engine-label" }, Kp = { class: "ocr-engine-btn-group relative" }, Zp = {
  key: 2,
  class: "zoom-info"
}, Oi = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', qp = /* @__PURE__ */ Wt({
  __name: "index",
  setup(e) {
    const { t, locale: n } = On(), i = Z(), s = Z(), o = Z(null), a = Z(""), r = Z(""), l = Z("pin"), c = Z(""), d = Z([]), g = Z(!1), w = Z(""), v = Z(""), k = Z(0), f = Z(0), b = Z({ width: 0, height: 0 }), p = Z({ width: 0, height: 0 }), M = Z(!1), x = Z(!1), T = Z(null), A = Z(null), z = Z(!1);
    let R = null;
    const j = Z(!1), q = Z(!1), it = Z(), rt = Z({}), st = Z("bing"), ct = Z(!1), Rt = Z(), mt = Z({}), tt = Z("auto"), ut = Y(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: "离"
      }
    ]), Mt = Y(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), pt = (u) => {
      const y = typeof u == "string" ? u.trim().toLowerCase() : "";
      return y === "auto" || y === "zh" || y === "zh-tw" || y === "en" || y === "ja" || y === "ko" ? y : "auto";
    }, U = Y(() => Mt.value.find((u) => u.value === tt.value)?.label || t("pin.ocrLanguageAuto")), bt = Y(
      () => Ht("pin.showRecords", "显示记录", "Show Records")
    ), J = Y(
      () => Ht("pin.hideRecords", "隐藏记录", "Hide Records")
    ), Ot = Y(
      () => Ht("pin.translationResult", "译文", "Translation")
    ), Ht = (u, y, _) => {
      const G = t(u);
      return G && G !== u ? G : String(n.value).toLowerCase().startsWith("zh") ? y : _;
    }, te = (u, y) => {
      if (!u) {
        y.value = {};
        return;
      }
      const _ = u.getBoundingClientRect(), G = 180, K = 8, dt = Math.min(
        Math.max(_.left + _.width / 2, K + G / 2),
        window.innerWidth - K - G / 2
      );
      y.value = {
        left: `${dt}px`,
        bottom: `${Math.max(8, window.innerHeight - _.top + 8)}px`
      };
    }, kt = () => {
      q.value && te(it.value, rt), ct.value && te(Rt.value, mt);
    }, _t = Y(() => tt.value), jt = Z(1), ee = Z(!1), Ut = Z(!1);
    let D = null, lt = null;
    const ft = Z(!1), St = Z({ x: 0, y: 0 }), wt = Z(!0), Et = Z({ width: 0, height: 0 });
    let E = null, h = 0;
    const m = Z(""), I = Y(() => ({
      width: "100%",
      height: l.value === "ocr" ? "auto" : "100%",
      flex: l.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: l.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), $ = Y(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), ot = Y(() => k.value > 0 && f.value > 0 ? `${k.value} × ${f.value}` : t("pin.screenshotPreview")), nt = Y(() => g.value ? t("pin.recognizing") : w.value ? t("pin.recognizeFailed") : c.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), C = Y(
      () => d.value.filter((u) => u.selected)
    ), W = Y(
      () => d.value.flatMap(
        (u) => u.blocks.filter(_s).map((y, _) => ({
          ...y,
          id: `${u.id}-block-${_}`,
          recordId: u.id,
          separator: pr(y, u.blocks[_ + 1])
        }))
      )
    ), gt = Y(
      () => mr(W.value, A.value)
    ), ht = Y(
      () => qm(W.value, A.value)
    ), se = Y(
      () => gt.value.map((u) => {
        const y = W.value[u.blockIndex], _ = pi(y), G = _.boundaries[u.start] || 0, K = _.boundaries[u.end] || _.renderedWidth, dt = G / _.renderedWidth, Ft = K / _.renderedWidth;
        return {
          id: `${y.id}-${u.start}-${u.end}`,
          left: y.x + y.width * dt,
          top: y.y,
          width: y.width * Math.max(0, Ft - dt),
          height: y.height
        };
      })
    ), Oe = Y(() => C.value.length), Ce = (u) => (u.translatedText || u.text).trim(), gn = (u) => u.map(Ce).filter(Boolean).join(`

`), Ke = () => {
      c.value = gn(d.value);
    }, _s = (u) => k.value > 0 && f.value > 0 && u.width > 0 && u.height > 0, pr = (u, y) => {
      if (!y)
        return `

`;
      const _ = u.text.trim().slice(-1), G = y.text.trim().slice(0, 1), K = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
      return K.test(_) || K.test(G) ? "" : " ";
    }, wr = (u) => {
      if (!_s(u))
        return {};
      const y = Te(u.x / k.value * 100), _ = Te(u.y / f.value * 100), G = Te(u.width / k.value * 100, 1), K = Te(u.height / f.value * 100, 1), dt = pi(u);
      return {
        left: `${y}%`,
        top: `${_}%`,
        width: `${G}%`,
        height: `${K}%`,
        fontSize: `${dt.fontSize}px`,
        lineHeight: `${dt.lineHeight}px`,
        letterSpacing: `${dt.letterSpacing}px`
      };
    }, yr = (u) => k.value <= 0 || f.value <= 0 ? {} : {
      left: `${Te(u.left / k.value * 100)}%`,
      top: `${Te(u.top / f.value * 100)}%`,
      width: `${Te(u.width / k.value * 100)}%`,
      height: `${Te(u.height / f.value * 100)}%`
    }, Ze = /* @__PURE__ */ new Map();
    let Ss = null;
    const pi = (u) => {
      const y = xr(), _ = u.text.trim(), G = `${u.id}:${_}:${y.toFixed(4)}`, K = Ze.get(G);
      if (K)
        return K;
      const dt = Math.max(u.width * y, 1), Ft = Math.max(u.height * y, 1);
      let zt = Cs(
        Math.min((u.fontSize || u.height * 0.8) * y, Ft * 0.86),
        5,
        28
      );
      const Jt = vr();
      Jt.font = `${zt}px ${Oi}`;
      let Qt = Math.max(Jt.measureText(_).width, 1);
      Qt > dt && (zt = Math.max(5, zt * (dt / Qt)), Jt.font = `${zt}px ${Oi}`, Qt = Math.max(Jt.measureText(_).width, 1));
      const re = _.length > 0 ? Math.max(0, (dt - Qt) / _.length) : 0, Bs = Array.from({ length: _.length + 1 }, (aw, Ci) => Ci === 0 ? 0 : (Jt.font = `${zt}px ${Oi}`, Jt.measureText(_.slice(0, Ci)).width + re * Ci)), Qr = Math.max(Bs[_.length] || Qt, 1), Hs = {
        fontSize: zt,
        lineHeight: Ft,
        letterSpacing: re,
        boundaries: Bs,
        renderedWidth: Qr
      };
      return Ze.set(G, Hs), Hs;
    }, vr = () => {
      Ss || (Ss = document.createElement("canvas"));
      const u = Ss.getContext("2d");
      if (!u)
        throw new Error("无法创建 OCR 文字测量画布");
      return u;
    }, xr = () => k.value <= 0 || f.value <= 0 || b.value.width <= 0 || b.value.height <= 0 ? 1 : Math.min(
      b.value.width / k.value,
      b.value.height / f.value
    ), wi = () => {
      const u = s.value;
      if (Ze.clear(), !u) {
        b.value = { width: 0, height: 0 };
        return;
      }
      b.value = {
        width: u.clientWidth,
        height: u.clientHeight
      };
    }, Te = (u, y = 0) => Number.isFinite(u) ? Math.min(100, Math.max(y, u)) : y, Cs = (u, y, _) => Number.isFinite(u) ? Math.min(_, Math.max(y, u)) : y, br = () => {
      const u = /* @__PURE__ */ new Date(), y = (_) => _.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${u.getFullYear()}-${y(u.getMonth() + 1)}-${y(u.getDate())} ${y(u.getHours())}.${y(u.getMinutes())}.${y(u.getSeconds())}.png`;
    }, kr = Y(() => {
      const u = Math.min(
        Et.value.width,
        Et.value.height
      );
      let y = 1;
      return u < 300 && (y = Math.max(0.4, u / 300)), {
        left: `${St.value.x}px`,
        top: `${St.value.y}px`,
        transform: `scale(${y})`,
        transformOrigin: "top left"
      };
    }), _r = (u) => {
      a.value = u, k.value = 0, f.value = 0, b.value = { width: 0, height: 0 }, Dn(), Ze.clear(), p.value = { width: 0, height: 0 }, l.value === "ocr" && (v.value = br(), x.value = !1), r.value && (URL.revokeObjectURL(r.value), r.value = "");
      try {
        const y = u.split(",")[1] || u, _ = u.match(/data:([^;]+);/), G = _ ? _[1] : "image/png", K = atob(y), dt = new Uint8Array(K.length);
        for (let zt = 0; zt < K.length; zt++)
          dt[zt] = K.charCodeAt(zt);
        const Ft = new Blob([dt], { type: G });
        r.value = URL.createObjectURL(Ft);
      } catch (y) {
        H.error("[PIN窗口] 转换 Blob URL 失败", y), r.value = u;
      }
    }, Ts = async () => {
      await $e(), await new Promise((u) => requestAnimationFrame(() => u()));
      try {
        await o.value?.emit("pin-window-ready");
      } catch (u) {
        H.error("[PIN窗口] 发送 ready 事件失败", u);
      }
    }, Ms = (u) => {
      if (!u?.imageData)
        return H.error("[PIN窗口] 收到的事件数据格式不正确", u), !1;
      const y = u.mode === "ocr" ? "ocr" : "pin", _ = `${y}:${u.imageData.length}`;
      return _ === m.value ? !1 : (m.value = _, l.value = y, _r(u.imageData), ce(), l.value === "ocr" ? (vi(u.text || ""), w.value = "", u.text || yi()) : (h++, g.value = !1, w.value = "", c.value = "", d.value = []), !0);
    }, yi = async () => {
      if (!a.value) return;
      const u = ++h;
      Dn(), T.value = null, Ze.clear(), g.value = !0, w.value = "";
      const y = Date.now();
      Bt.log("[Pin OCR] recognize start", {
        requestId: u,
        imageDataLength: a.value.length,
        imageWidth: k.value,
        imageHeight: f.value,
        language: tt.value,
        backendLanguage: _t.value
      });
      try {
        Bt.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: u,
          language: tt.value,
          backendLanguage: _t.value
        });
        const _ = await O("recognize_text_from_image", {
          imageData: a.value,
          engine: "rapidocr",
          language: _t.value
        }), G = Cr(_), K = G.length > 0 ? gn(G) : Rr(_);
        if (Bt.log("[Pin OCR] backend OCR success", {
          requestId: u,
          resultEngine: _?.engine,
          resultLanguage: _?.language,
          confidence: _?.confidence,
          blocks: Array.isArray(_?.blocks) ? _.blocks.length : 0,
          textLength: K.trim().length
        }), u !== h) return;
        G.length > 0 ? (d.value = G, Ke()) : vi(K.trim()), Ze.clear(), Bt.log("[Pin OCR] recognize success", {
          requestId: u,
          durationMs: Date.now() - y,
          textLength: c.value.length,
          textPreview: c.value.slice(0, 300)
        });
      } catch (_) {
        if (u !== h) return;
        H.error("[PIN窗口] OCR 识别失败", _), Bt.log("[Pin OCR] recognize failed", {
          requestId: u,
          durationMs: Date.now() - y,
          error: Pr(_)
        }), w.value = t("pin.recognizeFailed"), c.value = "", d.value = [], ne.error(t("pin.recognizeFailed"));
      } finally {
        u === h && (g.value = !1);
      }
    }, vi = (u) => {
      const y = u.trim();
      c.value = y, d.value = y ? y.split(/\n{2,}|\n/).map((_, G) => Sr(_, G)).filter((_) => _.text.trim()) : [];
    }, Sr = (u, y) => ({
      id: `plain-${Date.now()}-${y}`,
      text: u.trim(),
      sourceText: u.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), Cr = (u) => {
      const y = Mr(u?.blocks);
      return y.length === 0 ? [] : la(y).map((G, K) => Tr(G, K)).filter((G) => G.text.trim());
    }, Tr = (u, y) => {
      const _ = u.text.trim(), G = u.blocks;
      return {
        id: `ocr-${Date.now()}-${y}`,
        text: _,
        sourceText: _,
        translatedText: u.translatedText?.trim() || "",
        bbox: { ...u.bbox },
        blocks: G,
        confidence: Lr(G),
        selected: !1
      };
    }, Mr = (u) => Array.isArray(u) ? u.map((y) => {
      if (!y || typeof y != "object")
        return null;
      const _ = y, G = typeof _.text == "string" ? _.text.trim() : "";
      if (!G)
        return null;
      const K = {
        text: G,
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
      return typeof _.translatedText == "string" && (K.translatedText = _.translatedText), K;
    }).filter((y) => y !== null) : [], Lr = (u) => {
      const y = u.map((_) => Number(_.confidence || 0)).filter((_) => Number.isFinite(_) && _ > 0);
      return y.length === 0 ? 0 : y.reduce((_, G) => _ + G, 0) / y.length;
    }, Rr = (u) => typeof u == "string" ? u : u?.text ? u.text : u?.full_text ? u.full_text : Array.isArray(u?.blocks) ? u.blocks.map((y) => y?.text).filter(Boolean).join(`
`) : "", Pr = (u) => u instanceof Error ? `${u.name}: ${u.message}
${u.stack || ""}`.trim() : typeof u == "string" ? u : JSON.stringify(u) || String(u), xi = async () => {
      const u = Ir();
      if (u)
        try {
          await navigator.clipboard.writeText(u), ne.success(t("pin.copySuccess"));
        } catch (y) {
          H.error("[PIN窗口] 复制识别文本失败", y), ne.error(t("pin.copyFailed"));
        } finally {
          ce();
        }
    }, Er = async () => {
      Ke();
      const u = c.value.trim();
      if (u)
        try {
          await O("save_text_to_file", { text: u }), ne.success(t("pin.saveSuccess"));
        } catch (y) {
          y !== "SAVE_CANCELLED" && (H.error("[PIN窗口] 保存文本失败", y), ne.error(t("pin.saveFailed")));
        }
    }, Ir = () => {
      const u = Ar();
      if (u)
        return u;
      if (ht.value)
        return ht.value;
      const y = gn(C.value);
      return y || (Ke(), c.value.trim());
    }, Ar = () => {
      const u = window.getSelection(), y = i.value?.querySelector(".ocr-reading-surface");
      if (!u || u.rangeCount === 0 || !y)
        return "";
      for (let _ = 0; _ < u.rangeCount; _ += 1) {
        const K = u.getRangeAt(_).commonAncestorContainer;
        if (y.contains(K))
          return u.toString().trim();
      }
      return "";
    }, Ls = (u) => {
      const y = d.value.find((_) => _.id === u);
      y && (y.selected = !y.selected);
    }, Rs = (u, y, _) => {
      const G = d.value.find((dt) => dt.id === u), K = _.target;
      !G || !K || (G[y] = K.innerText.trim(), y === "text" && !G.sourceText.trim() && (G.sourceText = G.text), Ke());
    }, Or = (u) => {
      const y = u.target;
      !y || !T.value || (T.value.translatedText = y.innerText.trim());
    }, zr = async () => {
      q.value = !q.value, ct.value = !1, q.value && (await $e(), kt());
    }, Dr = (u) => {
      st.value = u, q.value = !1, O("set_translation_engine", { engine: u }).catch((y) => {
        H.error("[PIN窗口] 保存翻译引擎设置失败", y);
      });
    }, Ps = async () => {
      ct.value = !ct.value, q.value = !1, ct.value && (await $e(), kt());
    }, Nr = (u) => {
      tt.value = u, ct.value = !1, O("set_ocr_language", { language: u }).catch((y) => {
        H.error("[PIN窗口] 保存 OCR 语言设置失败", y);
      }), a.value && yi();
    }, Wr = async () => {
      if (ce(), q.value = !1, ct.value = !1, !c.value.trim() || j.value) return;
      const u = ht.value.trim(), y = u ? [] : C.value.length > 0 ? C.value : d.value, _ = u || (y.length > 0 ? y.map((K) => K.text).join(`

`) : c.value), G = De(_);
      if (!nn(G)) {
        ne.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      j.value = !0;
      try {
        if (await $r(), u) {
          const K = await bi(u, G);
          K && (T.value = {
            sourceText: u,
            translatedText: K.trim()
          }, x.value = !0), ne.success(t("pin.translateSuccess"));
        } else if (y.length > 0) {
          for (const K of y) {
            const dt = await bi(K.text, G);
            dt && (K.translatedText = dt.trim());
          }
          Ke(), x.value = !0, ne.success(t("pin.translateSuccess"));
        } else {
          const K = await bi(c.value, G);
          K && vi(K), ne.success(t("pin.translateSuccess"));
        }
      } catch (K) {
        H.error("[PIN窗口] 翻译失败", K);
        const dt = K instanceof Error ? K.message : String(K);
        dt !== "翻译已取消" && ne.error(dt || t("pin.translateFailed"));
      } finally {
        j.value = !1;
      }
    }, $r = async () => {
      if (st.value !== "offline")
        return;
      if ((await os()).isCached)
        await aa();
      else
        throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
      if (!await O("get_offline_model_activated"))
        throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
    }, bi = async (u, y) => {
      const _ = u.trim();
      return _ ? st.value === "offline" ? oa(_) : await O("translate_text", {
        text: _,
        from: "auto",
        to: y === "zh" ? "en" : "zh",
        engine: st.value
      }) : "";
    }, Fr = () => {
      M.value = !M.value;
    }, Br = () => {
      x.value = !x.value;
    }, Hr = (u) => {
      zn(u);
    }, jr = async () => {
      if (!o.value) return;
      const u = o.value;
      typeof u.minimize == "function" && await u.minimize();
    }, Ur = async () => {
      if (!o.value) return;
      const u = o.value;
      (typeof u.isMaximized == "function" ? await u.isMaximized() : !1) && typeof u.unmaximize == "function" ? await u.unmaximize() : typeof u.maximize == "function" && await u.maximize();
    }, Es = async (u) => {
      const y = u.target;
      if (k.value = y.naturalWidth, f.value = y.naturalHeight, o.value && p.value.width === 0)
        try {
          const _ = await o.value.innerSize(), G = await o.value.scaleFactor(), K = _.toLogical(G);
          p.value = {
            width: K.width,
            height: K.height
          };
        } catch (_) {
          H.error("[PIN窗口] 获取窗口初始尺寸失败", _);
        }
    }, Is = async (u) => {
      if (u.ctrlKey && (u.preventDefault(), u.stopPropagation(), !Ut.value && o.value)) {
        Ut.value = !0;
        try {
          const _ = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), G = u.deltaY > 0 ? 0.95 : 1.05, K = _.width, dt = _.height, Ft = Math.round(K * G), zt = Math.round(dt * G), Jt = 50, Qt = 3e3;
          if (Ft >= Jt && Ft <= Qt && zt >= Jt && zt <= Qt) {
            if (await o.value.setSize(new bn(Ft, zt)), k.value > 0) {
              const re = Math.round(
                Ft / k.value * 100
              );
              jt.value = re / 100;
            }
            ee.value = !0, ki();
          }
        } catch (y) {
          H.error("[PIN窗口] 窗口缩放失败", y);
        } finally {
          setTimeout(() => {
            Ut.value = !1;
          }, 100);
        }
      }
    }, Vr = (u) => {
      l.value === "ocr" && u.ctrlKey && Is(u);
    }, ki = () => {
      ee.value = !0, D && clearTimeout(D), D = setTimeout(() => {
        ee.value = !1;
      }, 1e3);
    }, zn = (u) => {
      u.preventDefault(), u.stopPropagation(), ft.value = !1, setTimeout(() => {
        const y = window.innerWidth, _ = window.innerHeight;
        Et.value = { width: y, height: _ };
        const G = Math.min(y, _);
        let K = 1;
        G < 300 && (K = Math.max(0.4, G / 300));
        const dt = l.value === "ocr" ? 176 : 150, Ft = l.value === "ocr" && c.value.trim() ? 222 : 180, zt = dt * K, Jt = Ft * K;
        let Qt = u.clientX, re = u.clientY;
        Qt + zt > y && (Qt = y - zt - 5), re + Jt > _ && (re = _ - Jt - 5), Qt = Math.max(5, Qt), re = Math.max(5, re), St.value = { x: Qt, y: re }, ft.value = !0;
      }, 10);
    }, ce = () => {
      ft.value = !1, q.value = !1, ct.value = !1;
    }, As = async () => {
      o.value && (wt.value = !wt.value, await o.value.setAlwaysOnTop(wt.value), ce());
    }, Os = async (u) => {
      if (o.value && !Ut.value) {
        Ut.value = !0;
        try {
          const _ = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), G = Math.round(_.width * u), K = Math.round(_.height * u), dt = 50, Ft = 3e3;
          G >= dt && G <= Ft && K >= dt && K <= Ft && (await o.value.setSize(new bn(G, K)), k.value > 0 && (jt.value = G / k.value), ki());
        } catch (y) {
          H.error("[PIN窗口] 键盘缩放失败", y);
        } finally {
          setTimeout(() => {
            Ut.value = !1;
          }, 100);
        }
      }
    }, zs = async () => {
      if (o.value && p.value.width > 0 && p.value.height > 0)
        try {
          await o.value.setSize(
            new bn(
              p.value.width,
              p.value.height
            )
          ), jt.value = 1, ki();
        } catch (u) {
          H.error("[PIN窗口] 重置缩放失败", u);
        }
      ce();
    }, Yr = async () => {
      try {
        const u = a.value;
        ce(), o.value && await o.value.hide(), await O("copy_image_to_clipboard", { imageData: u }), ne.success(t("pin.copySuccess")), o.value && await o.value.close();
      } catch (u) {
        H.error("[PIN窗口] 复制图片失败", u), ne.error(t("pin.copyFailed")), o.value && await o.value.close();
      }
    }, Gr = async () => {
      const u = a.value;
      ce(), o.value && await o.value.hide();
      try {
        await O("save_pin_image", { imageData: u }), ne.success(t("pin.saveSuccess")), o.value && await o.value.close();
      } catch (y) {
        y === "SAVE_CANCELLED" ? (H.info("[PIN窗口] 用户取消保存，恢复窗口显示"), o.value && await o.value.show()) : (H.error("[PIN窗口] 保存图片失败", y), ne.error(t("pin.saveFailed")), o.value && await o.value.close());
      }
    }, _i = async () => {
      o.value && await o.value.close();
    }, Ds = (u) => {
      u.preventDefault();
    }, Si = async (u) => {
      if (u.button === 0 && o.value) {
        const y = u.target;
        if (y.hasAttribute("data-tauri-drag-region") || y.closest("[data-tauri-drag-region]")) {
          if (y.closest("button") || y.closest(".ocr-view-original"))
            return;
          try {
            await o.value.startDragging();
          } catch (_) {
            H.error("[PIN窗口] 拖拽窗口失败", _);
          }
        }
      }
    }, Ns = (u) => {
      const y = u.target;
      !y.closest(".context-menu") && !y.closest(".ocr-engine-btn-group") && !y.closest(".translate-btn-group") && !y.closest(".ocr-floating-menu") && ce();
    }, Xr = (u) => {
      if (u.button !== 0)
        return;
      const y = u.currentTarget, _ = $s(y, u.clientX, u.clientY);
      if (window.getSelection()?.removeAllRanges(), !_) {
        Dn();
        return;
      }
      u.preventDefault(), y.setPointerCapture(u.pointerId), R = u.pointerId, z.value = !0, A.value = {
        anchor: _,
        focus: _
      };
    }, Ws = (u) => {
      if (!z.value || u.pointerId !== R)
        return;
      const y = u.currentTarget, _ = $s(y, u.clientX, u.clientY);
      !_ || !A.value || (u.preventDefault(), A.value = {
        anchor: A.value.anchor,
        focus: _
      });
    }, Kr = (u) => {
      if (u.pointerId !== R)
        return;
      Ws(u);
      const y = u.currentTarget;
      y.hasPointerCapture(u.pointerId) && y.releasePointerCapture(u.pointerId), z.value = !1, R = null;
    }, Zr = (u) => {
      u.pointerId === R && (z.value = !1, R = null);
    }, Dn = () => {
      A.value = null, z.value = !1, R = null;
    }, qr = () => {
      const u = W.value.length - 1;
      u < 0 || (window.getSelection()?.removeAllRanges(), A.value = {
        anchor: { blockIndex: 0, offset: 0 },
        focus: {
          blockIndex: u,
          offset: W.value[u].text.length
        }
      });
    }, $s = (u, y, _) => {
      const G = u.querySelectorAll(
        ".ocr-overlay-block[data-selection-index]"
      );
      for (const K of G) {
        const dt = K.getBoundingClientRect();
        if (y < dt.left || y > dt.right || _ < dt.top || _ > dt.bottom)
          continue;
        const Ft = Number(K.dataset.selectionIndex), zt = W.value[Ft];
        if (!zt)
          return null;
        const Jt = pi(zt), re = Cs((y - dt.left) / Math.max(dt.width, 1), 0, 1) * Jt.renderedWidth;
        return {
          blockIndex: Ft,
          offset: Jm(Jt.boundaries, re)
        };
      }
      return null;
    }, Fs = (u) => {
      if (u.altKey && u.code === "Space") {
        u.preventDefault(), u.stopPropagation();
        return;
      }
      if (u.key === "Escape")
        ft.value ? ce() : _i();
      else if (u.ctrlKey || u.metaKey) {
        const _ = !!u.target?.closest('input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]');
        u.key.toLowerCase() === "c" && l.value === "ocr" && ht.value && !_ ? (u.preventDefault(), xi()) : u.key.toLowerCase() === "a" && l.value === "ocr" && W.value.length > 0 && !_ ? (u.preventDefault(), qr()) : u.key === "0" ? (u.preventDefault(), zs()) : u.key === "=" || u.key === "+" ? (u.preventDefault(), Os(1.05)) : u.key === "-" && (u.preventDefault(), Os(0.95));
      }
    }, Jr = async () => {
      if (o.value)
        try {
          const u = await O(
            "get_pin_window_data",
            { label: o.value.label }
          );
          u && Ms(u) && await Ts();
        } catch (u) {
          H.error("[PIN窗口] 主动获取窗口数据失败", u);
        }
    };
    return Ee(
      s,
      (u) => {
        if (lt?.disconnect(), lt = null, !u) {
          b.value = { width: 0, height: 0 };
          return;
        }
        wi(), lt = new ResizeObserver(wi), lt.observe(u);
      },
      { flush: "post" }
    ), hn(async () => {
      if (i.value) {
        try {
          const [u, y] = await Promise.all([
            O("get_translation_engine"),
            O("get_ocr_language")
          ]);
          (u === "google" || u === "bing" || u === "offline") && (st.value = u), tt.value = pt(y);
        } catch (u) {
          H.error("[PIN窗口] 读取默认 OCR/翻译设置失败", u);
        }
        try {
          o.value = An.getCurrent();
          try {
            E = await o.value.listen(
              "pin-window-data",
              (u) => {
                Ms(u.payload) && Ts();
              }
            ), await Jr();
          } catch (u) {
            H.error("[PIN窗口] 设置事件监听失败", u);
          }
        } catch (u) {
          if (H.error("[PIN窗口] 初始化错误", u), o.value)
            try {
              await o.value.show();
            } catch (y) {
              H.error("[PIN窗口] 显示窗口失败", y);
            }
        }
        document.addEventListener("click", Ns), document.addEventListener("keydown", Fs, !0), document.addEventListener("contextmenu", Ds, !0), window.addEventListener("resize", kt), window.addEventListener("scroll", kt, !0), window.addEventListener("blur", ce), document.body && (document.body.oncontextmenu = (u) => (u.preventDefault(), !1));
      }
    }), ts(() => {
      r.value && URL.revokeObjectURL(r.value), E && E(), document.removeEventListener("click", Ns), document.removeEventListener("keydown", Fs, !0), document.removeEventListener("contextmenu", Ds, !0), window.removeEventListener("resize", kt), window.removeEventListener("scroll", kt, !0), window.removeEventListener("blur", ce), lt?.disconnect(), lt = null, document.body && (document.body.oncontextmenu = null), D && clearTimeout(D);
    }), (u, y) => (B(), X(
      "div",
      {
        class: Lt(["pin-container", { "ocr-mode": l.value === "ocr" }]),
        ref_key: "containerRef",
        ref: i,
        onContextmenu: It(zn, ["prevent"]),
        onWheelCapture: Vr
      },
      [
        et(" 图片容器 "),
        r.value && l.value === "pin" ? (B(), X(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: Pt(I.value),
            onWheelCapture: Is,
            onContextmenu: It(zn, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Si
          },
          [
            P("img", {
              src: r.value,
              alt: "贴图",
              style: Pt($.value),
              onLoad: Es,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, tp)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : et("v-if", !0),
        l.value === "ocr" ? (B(), X(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: It(zn, ["prevent"])
          },
          [
            P("header", ep, [
              P(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Si
                },
                [
                  P("div", np, [
                    S(N(xn), {
                      theme: "outline",
                      size: "18"
                    }),
                    P(
                      "span",
                      ip,
                      at(u.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  P("div", sp, [
                    P("button", {
                      class: "ocr-window-btn",
                      title: wt.value ? u.$t("pin.togglePin") : u.$t("pin.pinWindow"),
                      onClick: It(As, ["stop"])
                    }, [
                      (B(), Vt(Le(wt.value ? N(Bi) : N(io)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, op),
                    y[2] || (y[2] = P(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    P("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.minimize"),
                      onClick: It(jr, ["stop"])
                    }, [
                      S(N(ma), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, ap),
                    P("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.maximize"),
                      onClick: It(Ur, ["stop"])
                    }, [
                      S(N(xu), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, rp),
                    P("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.close"),
                      onClick: It(_i, ["stop"])
                    }, [
                      S(N(Fi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, lp)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              P(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: Si
                },
                [
                  P("div", cp, [
                    r.value ? (B(), X("img", {
                      key: 0,
                      src: r.value,
                      alt: "OCR preview",
                      onLoad: Es,
                      draggable: "false"
                    }, null, 40, up)) : et("v-if", !0)
                  ]),
                  P("div", hp, [
                    P(
                      "div",
                      dp,
                      at(v.value),
                      1
                      /* TEXT */
                    ),
                    P("div", fp, [
                      P(
                        "span",
                        gp,
                        at(ot.value),
                        1
                        /* TEXT */
                      ),
                      y[3] || (y[3] = P(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      P(
                        "span",
                        mp,
                        at(nt.value),
                        1
                        /* TEXT */
                      ),
                      !g.value && !w.value && c.value.trim() ? (B(), X("span", pp, " ✓ ")) : et("v-if", !0)
                    ])
                  ]),
                  P("button", {
                    class: "ocr-view-original",
                    title: M.value ? u.$t("pin.viewResult") : u.$t("pin.viewOriginal"),
                    onClick: It(Fr, ["stop"])
                  }, [
                    (B(), Vt(Le(M.value ? N(xn) : N(gu)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    P(
                      "span",
                      null,
                      at(M.value ? u.$t("pin.viewResult") : u.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, wp)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            P(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: y[1] || (y[1] = It(() => {
                }, ["stop"]))
              },
              [
                M.value ? (B(), X("div", yp, [
                  P("img", {
                    src: r.value || a.value,
                    alt: "original"
                  }, null, 8, vp)
                ])) : (B(), X(
                  qt,
                  { key: 1 },
                  [
                    g.value ? (B(), X("div", xp, [
                      S(N(no), {
                        class: "ocr-loading-icon",
                        size: "20",
                        theme: "outline",
                        strokeWidth: 3
                      }),
                      P(
                        "span",
                        null,
                        at(u.$t("pin.recognizing")),
                        1
                        /* TEXT */
                      )
                    ])) : w.value ? (B(), X(
                      "div",
                      bp,
                      at(w.value),
                      1
                      /* TEXT */
                    )) : c.value.trim() ? (B(), X(
                      "div",
                      {
                        key: 3,
                        class: Lt(["ocr-result-layout", { "records-open": x.value }])
                      },
                      [
                        P("section", _p, [
                          P("div", Sp, [
                            P("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: s,
                              src: r.value || a.value,
                              alt: "OCR source",
                              onLoad: wi
                            }, null, 40, Cp),
                            se.value.length > 0 ? (B(), X("div", Tp, [
                              (B(!0), X(
                                qt,
                                null,
                                he(se.value, (_) => (B(), X(
                                  "span",
                                  {
                                    key: _.id,
                                    class: "ocr-selection-highlight",
                                    style: Pt(yr(_))
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : et("v-if", !0),
                            W.value.length > 0 ? (B(), X(
                              "div",
                              {
                                key: 1,
                                class: "ocr-text-overlay",
                                onPointerdown: Xr,
                                onPointermove: Ws,
                                onPointerup: Kr,
                                onPointercancel: Zr
                              },
                              [
                                (B(!0), X(
                                  qt,
                                  null,
                                  he(W.value, (_, G) => (B(), X("span", {
                                    key: _.id,
                                    class: "ocr-overlay-block",
                                    "data-selection-index": G,
                                    style: Pt(wr(_)),
                                    textContent: at(_.text.trim())
                                  }, null, 12, Mp))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              32
                              /* NEED_HYDRATION */
                            )) : et("v-if", !0)
                          ])
                        ]),
                        x.value ? (B(), X(
                          "section",
                          {
                            key: 0,
                            class: "ocr-record-pane",
                            onPointerdown: Dn
                          },
                          [
                            T.value ? (B(), X("section", Lp, [
                              P("div", Rp, [
                                P(
                                  "span",
                                  Pp,
                                  at(u.$t("pin.selectedText")),
                                  1
                                  /* TEXT */
                                ),
                                P(
                                  "div",
                                  Ep,
                                  at(T.value.sourceText),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              P("div", Ip, [
                                P(
                                  "span",
                                  Ap,
                                  at(Ot.value),
                                  1
                                  /* TEXT */
                                ),
                                P("div", {
                                  class: "ocr-selection-translation-editor",
                                  contenteditable: "plaintext-only",
                                  spellcheck: "false",
                                  textContent: at(T.value.translatedText),
                                  onBlur: Or
                                }, null, 40, Op)
                              ])
                            ])) : et("v-if", !0),
                            (B(!0), X(
                              qt,
                              null,
                              he(d.value, (_, G) => (B(), X(
                                "article",
                                {
                                  key: _.id,
                                  class: Lt(["ocr-record-item", { selected: _.selected }])
                                },
                                [
                                  P("div", zp, [
                                    P("header", {
                                      class: "ocr-record-header",
                                      onClick: It((K) => Ls(_.id), ["stop"])
                                    }, [
                                      P("input", {
                                        class: "ocr-record-checkbox",
                                        type: "checkbox",
                                        checked: _.selected,
                                        onChange: It((K) => Ls(_.id), ["stop"]),
                                        onClick: y[0] || (y[0] = It(() => {
                                        }, ["stop"]))
                                      }, null, 40, Np),
                                      P(
                                        "span",
                                        Wp,
                                        "#" + at(G + 1),
                                        1
                                        /* TEXT */
                                      )
                                    ], 8, Dp),
                                    P("div", {
                                      class: "ocr-record-editor",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: at(_.text),
                                      onBlur: (K) => Rs(_.id, "text", K)
                                    }, null, 40, $p),
                                    _.confidence > 0 ? (B(), X(
                                      "span",
                                      Fp,
                                      at(Math.round(_.confidence)) + "% ",
                                      1
                                      /* TEXT */
                                    )) : et("v-if", !0)
                                  ]),
                                  _.translatedText ? (B(), X("div", Bp, [
                                    P(
                                      "span",
                                      Hp,
                                      at(Ot.value),
                                      1
                                      /* TEXT */
                                    ),
                                    P("div", {
                                      class: "ocr-record-editor translated",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: at(_.translatedText),
                                      onBlur: (K) => Rs(_.id, "translatedText", K)
                                    }, null, 40, jp)
                                  ])) : et("v-if", !0)
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
                      kp,
                      at(u.$t("pin.noTextRecognized")),
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
            P("footer", Up, [
              S(xe, {
                class: "ocr-action-btn",
                type: "text",
                title: u.$t("pin.copyText"),
                disabled: !c.value.trim(),
                onClick: It(xi, ["stop"])
              }, {
                default: Zt(() => [
                  S(N(Ri), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  P(
                    "span",
                    null,
                    at(Oe.value > 0 ? `${u.$t("pin.copyText")} (${Oe.value})` : u.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              S(xe, {
                class: "ocr-action-btn",
                type: "text",
                title: x.value ? J.value : bt.value,
                disabled: d.value.length === 0,
                onClick: It(Br, ["stop"])
              }, {
                default: Zt(() => [
                  S(N(xn), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  P(
                    "span",
                    null,
                    at(x.value ? J.value : bt.value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              P(
                "div",
                {
                  ref_key: "translateMenuAnchorRef",
                  ref: it,
                  class: "translate-btn-group relative"
                },
                [
                  S(xe, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: u.$t("pin.translate"),
                    disabled: !c.value.trim() || j.value,
                    onClick: It(Wr, ["stop"])
                  }, {
                    default: Zt(() => [
                      j.value ? (B(), Vt(N(no), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })) : (B(), Vt(N(pa), {
                        key: 0,
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })),
                      P(
                        "span",
                        null,
                        at(u.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  S(xe, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !c.value.trim() || j.value,
                    onClick: It(zr, ["stop"])
                  }, {
                    default: Zt(() => [
                      S(N(eo), {
                        size: "17",
                        theme: "outline",
                        strokeWidth: 2.8
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  et(" 翻译引擎菜单 "),
                  q.value ? (B(), X(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: Pt(rt.value)
                    },
                    [
                      (B(!0), X(
                        qt,
                        null,
                        he(ut.value, (_) => (B(), X("div", {
                          key: _.value,
                          class: Lt(["menu-item", { active: st.value === _.value }]),
                          onClick: (G) => Dr(_.value)
                        }, [
                          P(
                            "span",
                            Yp,
                            at(_.label),
                            1
                            /* TEXT */
                          ),
                          st.value === _.value ? (B(), Vt(Le(N($i)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : et("v-if", !0)
                        ], 10, Vp))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : et("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              P(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: Rt,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  S(xe, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: u.$t("pin.ocrLanguage"),
                    disabled: g.value,
                    onClick: It(Ps, ["stop"])
                  }, {
                    default: Zt(() => [
                      S(N(xn), {
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      }),
                      P(
                        "span",
                        null,
                        at(U.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  S(xe, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: g.value,
                    onClick: It(Ps, ["stop"])
                  }, {
                    default: Zt(() => [
                      S(N(eo), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  ct.value ? (B(), X(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: Pt(mt.value)
                    },
                    [
                      (B(!0), X(
                        qt,
                        null,
                        he(Mt.value, (_) => (B(), X("div", {
                          key: _.value,
                          class: Lt(["menu-item", { active: tt.value === _.value }]),
                          onClick: (G) => Nr(_.value)
                        }, [
                          P(
                            "span",
                            Xp,
                            at(_.label),
                            1
                            /* TEXT */
                          ),
                          tt.value === _.value ? (B(), Vt(Le(N($i)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : et("v-if", !0)
                        ], 10, Gp))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : et("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              P("div", Kp, [
                S(xe, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: u.$t("pin.recognizeAgain"),
                  disabled: g.value || !a.value,
                  onClick: It(yi, ["stop"])
                }, {
                  default: Zt(() => [
                    S(N(wu), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    P(
                      "span",
                      null,
                      at(u.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              S(xe, {
                class: "ocr-action-btn",
                type: "text",
                title: u.$t("pin.saveAsText"),
                disabled: !c.value.trim(),
                onClick: It(Er, ["stop"])
              }, {
                default: Zt(() => [
                  S(N(oo), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  P(
                    "span",
                    null,
                    at(u.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              y[4] || (y[4] = P(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              S(xe, {
                class: "ocr-action-btn more",
                type: "text",
                title: u.$t("pin.more"),
                onClick: It(Hr, ["stop"])
              }, {
                default: Zt(() => [
                  S(N(hu), {
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
        ee.value ? (B(), X(
          "div",
          Zp,
          at(Math.round(jt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : et("v-if", !0),
        et(" 右键菜单 "),
        ft.value ? (B(), X(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: Pt(kr.value)
          },
          [
            P("div", {
              class: "menu-item",
              onClick: As
            }, [
              (B(), Vt(Le(wt.value ? N(io) : N(Bi)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              P(
                "span",
                null,
                at(wt.value ? u.$t("pin.togglePin") : u.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            P("div", {
              class: "menu-item",
              onClick: zs
            }, [
              S(N(pu), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              P(
                "span",
                null,
                at(u.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            P("div", {
              class: "menu-item",
              onClick: Yr
            }, [
              S(N(Ri), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              P(
                "span",
                null,
                at(u.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            P("div", {
              class: "menu-item",
              onClick: Gr
            }, [
              S(N(oo), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              P(
                "span",
                null,
                at(u.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            l.value === "ocr" && c.value.trim() ? (B(), X("div", {
              key: 0,
              class: "menu-item",
              onClick: xi
            }, [
              S(N(Ri), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              P(
                "span",
                null,
                at(u.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            y[5] || (y[5] = P(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            P("div", {
              class: "menu-item danger",
              onClick: _i
            }, [
              S(N(Fi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              P(
                "span",
                null,
                at(u.$t("pin.closePin")),
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
}), Jp = /* @__PURE__ */ di(qp, [["__scopeId", "data-v-c35dc47d"]]), Qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jp
}, Symbol.toStringTag, { value: "Module" }));
async function tw(e) {
  return e.toDataURL("image/png");
}
function ew(e) {
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
async function nw(e) {
  const t = Date.now(), n = await tw(e);
  Bt.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await O("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr",
      language: "auto"
    }), s = ew(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || ra(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return Bt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw H.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Bt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function iw() {
  return Promise.resolve();
}
async function sw() {
  return Promise.resolve();
}
const ow = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: nw,
  terminateOcr: sw,
  warmupOcr: iw
}, Symbol.toStringTag, { value: "Module" }));
export {
  cw as activate
};
