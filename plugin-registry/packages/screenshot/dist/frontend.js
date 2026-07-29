var Js = Object.defineProperty;
var Qs = (e, t, n) => t in e ? Js(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => Qs(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as we, createVNode as m, defineComponent as zt, ref as N, computed as $, watch as Ee, nextTick as ye, createElementBlock as D, openBlock as L, createCommentVNode as j, createElementVNode as x, Fragment as Bt, renderList as Zt, normalizeClass as rt, createBlock as Tt, resolveDynamicComponent as he, unref as C, toDisplayString as Y, normalizeStyle as gt, onMounted as tn, onUnmounted as xo, withModifiers as ht, withDirectives as Ge, withKeys as Wi, vModelText as ta, getCurrentInstance as Ae, readonly as ea, getCurrentScope as na, onScopeDispose as ia, isRef as oa, warn as sa, provide as aa, mergeProps as ra, renderSlot as xe, Transition as ii, withCtx as Ot, createTextVNode as la, vShow as pn, shallowReactive as ca, isVNode as qe, render as wn } from "vue";
import { useI18n as oi } from "vue-i18n";
const zg = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => Cc)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => wg)
  });
};
function ha(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function ua(e, t, n, i, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var hn;
const Xt = "__TAURI_TO_IPC_KEY__";
function da(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function b(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function ga(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class fa {
  get rid() {
    return ha(this, hn, "f");
  }
  constructor(t) {
    hn.set(this, void 0), ua(this, hn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return b("plugin:resources|close", {
      rid: this.rid
    });
  }
}
hn = /* @__PURE__ */ new WeakMap();
class Ye {
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
    return new Ze(this.width * t, this.height * t);
  }
  [Xt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class Ze {
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
    return new Ye(this.width / t, this.height / t);
  }
  [Xt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class Te {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ye ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ze ? this.size : this.size.toPhysical(t);
  }
  [Xt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class ko {
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
    return new le(this.x * t, this.y * t);
  }
  [Xt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class le {
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
    return new ko(this.x / t, this.y / t);
  }
  [Xt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class sn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof ko ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof le ? this.position : this.position.toPhysical(t);
  }
  [Xt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
var Ft;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ft || (Ft = {}));
async function bo(e, t) {
  await b("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function yn(e, t, n) {
  var i;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return b("plugin:event|listen", {
    event: e,
    target: o,
    handler: da(t)
  }).then((s) => async () => bo(e, s));
}
async function ma(e, t, n) {
  return yn(e, (i) => {
    bo(e, i.id), t(i);
  }, n);
}
async function pa(e, t) {
  await b("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function wa(e, t, n) {
  await b("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let ya = class un extends fa {
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
    return b("plugin:image|new", {
      rgba: vn(t),
      width: n,
      height: i
    }).then((o) => new un(o));
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
    return b("plugin:image|from_bytes", {
      bytes: vn(t)
    }).then((n) => new un(n));
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
    return b("plugin:image|from_path", { path: t }).then((n) => new un(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return b("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return b("plugin:image|size", { rid: this.rid });
  }
};
function vn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ya ? e.rid : e;
}
var Yn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Yn || (Yn = {}));
class va {
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
var Bi;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Bi || (Bi = {}));
function xa() {
  return new en(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Hn() {
  return b("plugin:window|get_all_windows").then((e) => e.map((t) => new en(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const jn = ["tauri://created", "tauri://error"];
class en {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || b("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (i = n.parent) === null || i === void 0 ? void 0 : i.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (o) => this.emit("tauri://error", o));
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
    return (n = (await Hn()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return xa();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Hn();
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
    for (const t of await Hn())
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
    } : ma(t, n, {
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
    if (jn.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return pa(t, n);
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
    if (jn.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return wa(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return jn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return b("plugin:window|scale_factor", {
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
    return b("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new le(t));
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
    return b("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new le(t));
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
    return b("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ze(t));
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
    return b("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Ze(t));
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
    return b("plugin:window|is_fullscreen", {
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
    return b("plugin:window|is_minimized", {
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
    return b("plugin:window|is_maximized", {
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
    return b("plugin:window|is_focused", {
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
    return b("plugin:window|is_decorated", {
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
    return b("plugin:window|is_resizable", {
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
    return b("plugin:window|is_maximizable", {
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
    return b("plugin:window|is_minimizable", {
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
    return b("plugin:window|is_closable", {
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
    return b("plugin:window|is_visible", {
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
    return b("plugin:window|title", {
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
    return b("plugin:window|theme", {
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
    return b("plugin:window|is_always_on_top", {
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
    return b("plugin:window|center", {
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
    return t && (t === Yn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), b("plugin:window|request_user_attention", {
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
    return b("plugin:window|set_resizable", {
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
    return b("plugin:window|set_enabled", {
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
    return b("plugin:window|is_enabled", {
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
    return b("plugin:window|set_maximizable", {
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
    return b("plugin:window|set_minimizable", {
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
    return b("plugin:window|set_closable", {
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
    return b("plugin:window|set_title", {
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
    return b("plugin:window|maximize", {
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
    return b("plugin:window|unmaximize", {
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
    return b("plugin:window|toggle_maximize", {
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
    return b("plugin:window|minimize", {
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
    return b("plugin:window|unminimize", {
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
    return b("plugin:window|show", {
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
    return b("plugin:window|hide", {
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
    return b("plugin:window|close", {
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
    return b("plugin:window|destroy", {
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
    return b("plugin:window|set_decorations", {
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
    return b("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return b("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return b("plugin:window|set_effects", {
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
    return b("plugin:window|set_always_on_top", {
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
    return b("plugin:window|set_always_on_bottom", {
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
    return b("plugin:window|set_content_protected", {
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
    return b("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Te ? t : new Te(t)
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
    return b("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Te ? t : t ? new Te(t) : null
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
    return b("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Te ? t : t ? new Te(t) : null
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
    return b("plugin:window|set_size_constraints", {
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
    return b("plugin:window|set_position", {
      label: this.label,
      value: t instanceof sn ? t : new sn(t)
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
    return b("plugin:window|set_fullscreen", {
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
    return b("plugin:window|set_focus", {
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
    return b("plugin:window|set_icon", {
      label: this.label,
      value: vn(t)
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
    return b("plugin:window|set_skip_taskbar", {
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
    return b("plugin:window|set_cursor_grab", {
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
    return b("plugin:window|set_cursor_visible", {
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
    return b("plugin:window|set_cursor_icon", {
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
    return b("plugin:window|set_background_color", { color: t });
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
    return b("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof sn ? t : new sn(t)
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
    return b("plugin:window|set_ignore_cursor_events", {
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
    return b("plugin:window|start_dragging", {
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
    return b("plugin:window|start_resize_dragging", {
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
    return b("plugin:window|set_badge_count", {
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
    return b("plugin:window|set_badge_label", {
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
    return b("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? vn(t) : void 0
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
    return b("plugin:window|set_progress_bar", {
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
    return b("plugin:window|set_visible_on_all_workspaces", {
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
    return b("plugin:window|set_title_bar_style", {
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
    return b("plugin:window|set_theme", {
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
    return this.listen(Ft.WINDOW_RESIZED, (n) => {
      n.payload = new Ze(n.payload), t(n);
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
    return this.listen(Ft.WINDOW_MOVED, (n) => {
      n.payload = new le(n.payload), t(n);
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
    return this.listen(Ft.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new va(n);
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
    const n = await this.listen(Ft.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new le(a.payload.position)
        }
      });
    }), i = await this.listen(Ft.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new le(a.payload.position)
        }
      });
    }), o = await this.listen(Ft.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new le(a.payload.position)
        }
      });
    }), s = await this.listen(Ft.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), o(), i(), s();
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
    const n = await this.listen(Ft.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), i = await this.listen(Ft.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
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
    return this.listen(Ft.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Ft.WINDOW_THEME_CHANGED, t);
  }
}
var Ni;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ni || (Ni = {}));
var Hi;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Hi || (Hi = {}));
var ji;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ji || (ji = {}));
function St(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Fi(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function si(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function ka(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function ee(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function ze(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class ba {
  constructor(t, n) {
    A(this, "canvas");
    A(this, "ctx");
    A(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = n;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t) {
    if (!ze(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const n = this.canvas.width / (window.devicePixelRatio || 1), i = this.canvas.height / (window.devicePixelRatio || 1), o = Math.round(t.x), s = Math.round(t.y), a = Math.round(t.width), r = Math.round(t.height);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, n, i), this.ctx.moveTo(o, s), this.ctx.lineTo(o, s + r), this.ctx.lineTo(o + a, s + r), this.ctx.lineTo(o + a, s), this.ctx.closePath(), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, n = !0) {
    const { x: i, y: o, width: s, height: a } = t;
    this.ctx.save();
    const r = Math.round(i) + 0.5, l = Math.round(o) + 0.5, h = Math.max(0, Math.round(s) - 1), u = Math.max(0, Math.round(a) - 1);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.strokeRect(r + 1, l + 1, h, u), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.strokeRect(r, l, h, u), n && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: n, y: i, width: o, height: s } = t, a = si(t);
    this.ctx.setLineDash([]), [
      { x: n, y: i, width: 10, height: 10 },
      // 左上
      { x: n + o, y: i, width: 10, height: 10 },
      // 右上
      { x: n, y: i + s, width: 10, height: 10 },
      // 左下
      { x: n + o, y: i + s, width: 10, height: 10 },
      // 右下
      { x: a.x, y: i, width: 16, height: 6 },
      // 上中
      { x: a.x, y: i + s, width: 16, height: 6 },
      // 下中
      { x: n, y: a.y, width: 6, height: 16 },
      // 左中
      { x: n + o, y: a.y, width: 6, height: 16 }
      // 右中
    ].forEach((l) => {
      const h = Math.round(l.x) - l.width / 2, u = Math.round(l.y) - l.height / 2, d = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(h + 1, u + 1, l.width, l.height, d), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(h, u, l.width, l.height, d), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
    });
  }
  // 绘制标注列表
  drawAnnotations(t, n) {
    const i = this.createDrawingContext(n);
    t.forEach((o) => {
      const s = o.getData();
      s.hovered && o.drawHover(i), o.draw(i), s.selected && (o.drawSelection(i), ["rectangle", "ellipse", "line", "arrow"].includes(s.type) && this.drawAnnotationHandles(o));
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
      const i = n.points[0], o = n.points[n.points.length - 1], s = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(i.x, i.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(o.x, o.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, n) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: i, colorInfo: o, showFormat: s, previewImage: a, zoomFactor: r, isCopied: l } = t, h = 156, u = 188, d = 18;
    let v = i.x + d, y = i.y + d;
    v + h > n.x + n.width && (v = i.x - h - d), y + u > n.y + n.height && (y = i.y - u - d), v < n.x && (v = n.x + d), y < n.y && (y = n.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(v, y, h, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const M = 108, w = v + (h - M) / 2, S = y + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(w, S, M, M), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(w, S, M, M);
    const I = a ? a.width : r, z = M / I;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      w,
      S,
      M,
      M
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let H = 1; H < I; H++) {
      const Q = w + H * z;
      this.ctx.moveTo(Q, S), this.ctx.lineTo(Q, S + M);
      const K = S + H * z;
      this.ctx.moveTo(w, K), this.ctx.lineTo(w + M, K);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let H = 1; H < I; H++) {
      const Q = w + H * z + 0.5;
      this.ctx.moveTo(Q, S), this.ctx.lineTo(Q, S + M);
      const K = S + H * z + 0.5;
      this.ctx.moveTo(w, K), this.ctx.lineTo(w + M, K);
    }
    this.ctx.stroke();
    const T = Math.floor(I / 2), U = w + T * z, Z = S + T * z;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(U, Z, z, z), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      U - 1,
      Z - 1,
      z + 2,
      z + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      U,
      Z,
      z,
      z
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let G = S + M + 22;
    if (o) {
      this.ctx.fillStyle = o.hex, this.ctx.fillRect(v + 16, G - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(v + 16, G - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const H = s === "hex" ? o.hex : `${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}`;
      this.ctx.fillText(H, v + 44, G), G += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, v + 16, G), G += 17, this.ctx.font = "12px Arial";
    const V = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(V, v + 16, G), this.ctx.restore();
  }
}
class Sa {
  // 物理尺寸
  constructor(t) {
    A(this, "scale");
    A(this, "canvasRect");
    A(this, "canvasSize");
    // 逻辑尺寸
    A(this, "physicalSize");
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
    return ee(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return ee(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, n) {
    return !ee(t) || !ze(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !ee(t) || !ze(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + n.x,
      y: t.y + n.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return ze(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!ee(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const n = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return ka(t, n);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!ze(t))
      return console.warn("Invalid rect in clampRectToCanvas:", t), { x: 0, y: 0, width: 0, height: 0 };
    const n = Math.max(0, t.x), i = Math.max(0, t.y), o = Math.min(this.canvasSize.width - n, t.width), s = Math.min(this.canvasSize.height - i, t.height);
    return { x: n, y: i, width: o, height: s };
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
    return St(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!ee(t) || !ze(n))
      return !1;
    if (i === 0)
      return Fi(t, n);
    const o = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Fi(t, o);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, o = 8) {
    if (!ee(t) || !ee(n) || !ee(i))
      return !1;
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return St(t, n) <= o;
    const d = h / u;
    let v;
    return d < 0 ? v = n : d > 1 ? v = i : v = {
      x: n.x + d * r,
      y: n.y + d * l
    }, St(t, v) <= o;
  }
}
var R = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMarker = "drawing-marker", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(R || {}), f = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.Marker = "marker", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(f || {});
class Ma {
  constructor(t, n) {
    A(this, "coordinateSystem");
    A(this, "canvas");
    A(this, "isDrawing", !1);
    A(this, "currentOperation", R.None);
    A(this, "startPoint", { x: 0, y: 0 });
    A(this, "lastMousePos", { x: 0, y: 0 });
    A(this, "preventDefault", (t) => {
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
  getOperationType(t, n, i, o) {
    const s = this.getAnnotationAtPoint(t, o);
    if (n !== f.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(n) : R.None : R.Drawing;
    if (s) {
      if (s.getData().type === f.Mosaic)
        return R.None;
      const a = this.getAnnotationControlPointOperation(t, s);
      return a !== R.None ? a : R.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, o.length > 0) : R.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [f.Rectangle]: R.DrawingRect,
      [f.Ellipse]: R.DrawingEllipse,
      [f.Line]: R.DrawingLine,
      [f.Arrow]: R.DrawingArrow,
      [f.Pen]: R.DrawingPen,
      [f.Text]: R.DrawingText,
      [f.Marker]: R.DrawingMarker,
      [f.Mosaic]: R.DrawingMosaic,
      [f.ColorPicker]: R.ColorPicking,
      [f.Ocr]: R.None,
      [f.Pin]: R.Pinning,
      [f.Translate]: R.None,
      [f.Select]: R.None
    }[t] || R.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, n, i) {
    const { x: o, y: s, width: a, height: r } = n, l = 12;
    if (i)
      return R.None;
    const h = si(n);
    return this.isInHandle(t, { x: o, y: s }, l) ? R.ResizingNW : this.isInHandle(t, { x: o + a, y: s }, l) ? R.ResizingNE : this.isInHandle(t, { x: o, y: s + r }, l) ? R.ResizingSW : this.isInHandle(t, { x: o + a, y: s + r }, l) ? R.ResizingSE : this.isInHandle(t, { x: h.x, y: s }, l) ? R.ResizingN : this.isInHandle(t, { x: h.x, y: s + r }, l) ? R.ResizingS : this.isInHandle(t, { x: o, y: h.y }, l) ? R.ResizingW : this.isInHandle(t, { x: o + a, y: h.y }, l) ? R.ResizingE : this.coordinateSystem.isPointInRect(t, n) ? R.Moving : R.Drawing;
  }
  // 检查是否在控制点范围内
  isInHandle(t, n, i) {
    return Math.abs(t.x - n.x) <= i && Math.abs(t.y - n.y) <= i;
  }
  // 获取指定位置的标注
  getAnnotationAtPoint(t, n) {
    for (let i = n.length - 1; i >= 0; i--) {
      const o = n[i];
      if (o.hitTest(t))
        return o;
    }
    return null;
  }
  // 获取标注控制点操作类型
  getAnnotationControlPointOperation(t, n) {
    if (!ee(t))
      return R.None;
    const i = n.getData();
    if (i.type === f.Mosaic || i.type === f.Text || i.type === f.Marker)
      return R.None;
    if ([
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const o = i.points[0], s = i.points[i.points.length - 1], a = 8, r = 6, l = St(t, o), h = St(t, s);
      if (l <= a + r)
        return R.ResizingAnnotationNW;
      if (h <= a + r)
        return R.ResizingAnnotationSE;
    }
    return R.None;
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
    this.isDrawing = !1, this.currentOperation = R.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class de {
  constructor(t) {
    A(this, "data");
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
class Ca extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Rectangle,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = o.x - i.x, a = o.y - i.y;
    n.save(), this.applyOpacity(n), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(i.x, i.y, s, a), n.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n, scale: i, offset: o } = t, s = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: s.x * i - o.x,
      y: s.y * i - o.y
    }, l = (a.x - s.x) * i, h = (a.y - s.y) * i;
    n.save(), this.applyOpacity(n), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth * i, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(r.x, r.y, l, h), n.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = Math.min(i.x, o.x), a = Math.max(i.x, o.x), r = Math.min(i.y, o.y), l = Math.max(i.y, o.y);
    return t.x >= s - n && t.x <= a + n && t.y >= r - n && t.y <= l + n;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), o = Math.max(t.x, n.x), s = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: n } = t, i = 6;
    n.save(), n.fillStyle = "#3b82f6", n.strokeStyle = "#ffffff", n.lineWidth = 1, this.data.points.forEach((o) => {
      n.fillRect(o.x - i / 2, o.y - i / 2, i, i), n.strokeRect(o.x - i / 2, o.y - i / 2, i, i);
    }), n.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = o.x - i.x, a = o.y - i.y;
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(i.x, i.y, s, a), n.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, n = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const o = this.data.points[i];
      if (St(t, o) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class _a extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Ellipse,
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
    const o = this.getBounds();
    if (!o) return;
    const s = (o.x + o.width / 2) * n - i.x, a = (o.y + o.height / 2) * n - i.y, r = Math.max(o.width * n / 2, 0.5), l = Math.max(o.height * n / 2, 0.5);
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.ellipse(s, a, r, l, 0, 0, Math.PI * 2), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    const i = this.getBounds();
    if (!i) return !1;
    const o = i.width / 2, s = i.height / 2;
    if (o < 1 || s < 1)
      return t.x >= i.x - n && t.x <= i.x + i.width + n && t.y >= i.y - n && t.y <= i.y + i.height + n;
    const a = i.x + o, r = i.y + s, l = Math.sqrt(
      (t.x - a) ** 2 / o ** 2 + (t.y - r) ** 2 / s ** 2
    );
    return Math.abs(l - 1) * Math.min(o, s) <= n;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), o = Math.max(t.x, n.x), s = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
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
class Ta extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Line,
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
    const o = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(o.x * n - i.x, o.y * n - i.y), t.lineTo(s.x * n - i.x, s.y * n - i.y), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, n);
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), o = Math.max(t.x, n.x), s = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    this.drawEndpoints(t.ctx);
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.beginPath(), n.moveTo(i.x, i.y), n.lineTo(o.x, o.y), n.stroke(), n.restore();
  }
  drawEndpoints(t) {
    t.save(), t.fillStyle = "#3b82f6", t.strokeStyle = "#ffffff", t.lineWidth = 1, this.data.points.forEach((i) => {
      t.fillRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6), t.strokeRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6);
    }), t.restore();
  }
  isPointNearLine(t, n, i, o) {
    const s = i.x - n.x, a = i.y - n.y, r = s * s + a * a;
    if (r === 0)
      return St(t, n) <= o;
    const l = Math.max(0, Math.min(1, ((t.x - n.x) * s + (t.y - n.y) * a) / r)), h = {
      x: n.x + l * s,
      y: n.y + l * a
    };
    return St(t, h) <= o;
  }
}
class za extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Arrow,
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
    const { ctx: n, scale: i, offset: o } = t;
    this.drawArrow(n, i, o);
  }
  drawArrow(t, n, i) {
    const o = this.data.points[0], s = this.data.points[this.data.points.length - 1], a = {
      x: o.x * n - i.x,
      y: o.y * n - i.y
    }, r = {
      x: s.x * n - i.x,
      y: s.y * n - i.y
    };
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
    const l = Math.atan2(s.y - o.y, s.x - o.x), h = 15 * n, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l - u),
      r.y - h * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l + u),
      r.y - h * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, n);
  }
  isPointNearLine(t, n, i, o) {
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return St(t, n) <= o;
    const d = h / u;
    let v;
    return d < 0 ? v = n : d > 1 ? v = i : v = {
      x: n.x + d * r,
      y: n.y + d * l
    }, St(t, v) <= o;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), o = Math.max(t.x, n.x), s = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: n } = t, i = 6;
    n.save(), n.fillStyle = "#3b82f6", n.strokeStyle = "#ffffff", n.lineWidth = 1, this.data.points.forEach((o) => {
      n.fillRect(o.x - i / 2, o.y - i / 2, i, i), n.strokeRect(o.x - i / 2, o.y - i / 2, i, i);
    }), n.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.beginPath(), n.moveTo(i.x, i.y), n.lineTo(o.x, o.y), n.stroke(), n.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, n = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const o = this.data.points[i];
      if (St(t, o) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Ra extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Pen,
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
      const n = this.data.points[this.data.points.length - 1], i = St(t, n);
      if (i > 5) {
        const o = Math.ceil(i / 3);
        for (let s = 1; s < o; s++) {
          const a = s / o, r = n.x + (t.x - n.x) * a, l = n.y + (t.y - n.y) * a;
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
    const { ctx: n, scale: i, offset: o } = t;
    this.drawPath(n, i, o);
  }
  drawPath(t, n, i) {
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
    const o = this.data.points[0], s = o.x * n - i.x, a = o.y * n - i.y;
    t.moveTo(s, a);
    for (let r = 1; r < this.data.points.length; r++) {
      const l = this.data.points[r], h = l.x * n - i.x, u = l.y * n - i.y;
      t.lineTo(h, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? St(t, this.data.points[0]) <= n : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, n))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, n, i, o) {
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return St(t, n) <= o;
    const d = h / u;
    let v;
    return d < 0 ? v = n : d > 1 ? v = i : v = {
      x: n.x + d * r,
      y: n.y + d * l
    }, St(t, v) <= o;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, n = this.data.points[0].x, i = this.data.points[0].y, o = this.data.points[0].y;
    return this.data.points.forEach((s) => {
      t = Math.min(t, s.x), n = Math.max(n, s.x), i = Math.min(i, s.y), o = Math.max(o, s.y);
    }), {
      x: t,
      y: i,
      width: n - t,
      height: o - i
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
const se = "sans-serif", Re = (e) => ({
  x: e.x + 4,
  y: e.y - 8
});
class La extends de {
  constructor(t, n, i, o = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Text,
      points: [t],
      style: i,
      text: n,
      fontSize: o
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
    const { ctx: n, scale: i, offset: o, bounds: s } = t;
    this.drawText(n, i, o, s);
  }
  drawText(t, n, i, o) {
    const s = (this.data.fontSize || 16) * n, a = this.data.points[0];
    t.save(), this.applyOpacity(t), t.font = `${s}px ${se}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Re(a), l = r.x * n - i.x, h = r.y * n - i.y;
    t.fillText(this.data.text, l, h), t.restore();
  }
  hitTest(t, n = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], o = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${o}px ${se}`;
    const l = a.measureText(this.data.text).width, { x: h, y: u } = Re(i);
    return t.x >= h - n && t.x <= h + l + n && t.y >= u - n && t.y <= u + o + n;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], n = this.data.fontSize || 16, o = document.createElement("canvas").getContext("2d");
    if (!o) return null;
    o.font = `${n}px ${se}`;
    const a = o.measureText(this.data.text).width, { x: r, y: l } = Re(t);
    return {
      x: r,
      y: l,
      width: a,
      height: n
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Re(s), l = r.x * i - o.x, h = r.y * i - o.y;
    n.save(), n.font = `${a}px ${se}`;
    const d = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(l, h, d, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Re(s), l = r.x * i - o.x, h = r.y * i - o.y;
    n.save(), n.font = `${a}px ${se}`;
    const d = n.measureText(this.data.text).width;
    n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(l, h, d, a), n.restore();
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
const ne = class ne extends de {
  constructor(t, n, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Mosaic,
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
      const n = this.data.points[this.data.points.length - 1], i = St(t, n);
      if (i > 2) {
        const o = Math.ceil(i / 2);
        for (let s = 1; s < o; s++) {
          const a = s / o, r = n.x + (t.x - n.x) * a, l = n.y + (t.y - n.y) * a;
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
    const { ctx: n, scale: i, offset: o, bounds: s } = t;
    this.renderRealMosaic(n, i, o, s);
  }
  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  renderRealMosaic(t, n, i, o) {
    ne.helperCanvas || (ne.helperCanvas = document.createElement("canvas"), ne.helperCtx = ne.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const s = ne.helperCanvas, a = ne.helperCtx, r = n || 1, l = this.data.mosaicSize || 8, h = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const v = u, y = Math.floor(d.x - v), M = Math.floor(d.y - v), w = Math.ceil(d.width + v * 2), S = Math.ceil(d.height + v * 2);
    if (w <= 0 || S <= 0) return;
    const I = Math.floor(y * r - i.x), z = Math.floor(M * r - i.y), T = Math.ceil(w * r), U = Math.ceil(S * r), Z = t.canvas.width, G = t.canvas.height, V = Math.max(0, I), H = Math.max(0, z), Q = Math.min(T, Z - V), K = Math.min(U, G - H);
    if (Q <= 0 || K <= 0) return;
    let tt;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), tt = t.getImageData(V, H, Q, K), t.restore();
    } catch {
      return;
    }
    const nt = tt.data, st = V % h, wt = H % h;
    for (let it = -wt; it < K; it += h)
      for (let X = -st; X < Q; X += h) {
        const ot = Math.max(0, X), pt = Math.max(0, it), yt = Math.min(Q, X + h), O = Math.min(K, it + h);
        if (ot >= yt || pt >= O) continue;
        let ft = 0, F = 0, Rt = 0, Lt = 0;
        for (let jt = pt; jt < O; jt++)
          for (let ut = ot; ut < yt; ut++) {
            const _t = (jt * Q + ut) * 4;
            ft += nt[_t], F += nt[_t + 1], Rt += nt[_t + 2], Lt++;
          }
        if (Lt > 0) {
          ft = Math.round(ft / Lt / 8) * 8, F = Math.round(F / Lt / 8) * 8, Rt = Math.round(Rt / Lt / 8) * 8;
          for (let ut = pt; ut < O; ut++)
            for (let _t = ot; _t < yt; _t++) {
              const Et = (ut * Q + _t) * 4;
              nt[Et] = ft, nt[Et + 1] = F, nt[Et + 2] = Rt;
            }
        }
      }
    s.width = Q, s.height = K, a.putImageData(tt, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, V, H), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), o && (t.beginPath(), t.rect(
      o.x * r - i.x,
      o.y * r - i.y,
      o.width * r,
      o.height * r
    ), t.clip()), t.drawImage(s, V, H), t.restore();
  }
  // 在物理坐标系中绘制路径
  drawPathPhysical(t, n, i, o, s) {
    if (this.data.points.length < 1) return;
    t.beginPath();
    const a = (l) => l.x * n - i.x - o, r = (l) => l.y * n - i.y - s;
    if (this.data.points.length === 1) {
      const l = this.data.points[0];
      t.arc(a(l), r(l), t.lineWidth / 2, 0, Math.PI * 2), t.fill();
    } else {
      const l = this.data.points[0];
      t.moveTo(a(l), r(l));
      for (let u = 1; u < this.data.points.length - 1; u++) {
        const d = this.data.points[u], v = this.data.points[u + 1], y = (a(d) + a(v)) / 2, M = (r(d) + r(v)) / 2;
        t.quadraticCurveTo(a(d), r(d), y, M);
      }
      const h = this.data.points[this.data.points.length - 1];
      t.lineTo(a(h), r(h)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return St(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + n;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, (this.data.mosaicSize || 8) * 1.5 + n))
        return !0;
    }
    return !1;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, n = this.data.points[0].x, i = this.data.points[0].y, o = this.data.points[0].y;
    for (const s of this.data.points)
      t = Math.min(t, s.x), n = Math.max(n, s.x), i = Math.min(i, s.y), o = Math.max(o, s.y);
    return {
      x: t,
      y: i,
      width: n - t,
      height: o - i
    };
  }
  isPointNearLine(t, n, i, o) {
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, h = s * r + a * l, u = r * r + l * l;
    let d = -1;
    u !== 0 && (d = h / u);
    let v, y;
    d < 0 ? (v = n.x, y = n.y) : d > 1 ? (v = i.x, y = i.y) : (v = n.x + d * r, y = n.y + d * l);
    const M = t.x - v, w = t.y - y;
    return M * M + w * w <= o * o;
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
A(ne, "helperCanvas", null), A(ne, "helperCtx", null);
let Zn = ne;
const ce = 16, dn = (e = ce) => Math.max(12, Math.round(e * 0.75)), Xn = (e, t = ce) => {
  const n = dn(t);
  return {
    x: e.x + n + 12,
    y: e.y - t / 2
  };
};
class Pa extends de {
  constructor(t, n, i, o, s = ce) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Marker,
      points: [t],
      style: o,
      text: i,
      fontSize: s,
      markerNumber: n
    });
  }
  getMinPoints() {
    return 1;
  }
  draw(t) {
    this.drawMarker(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.drawMarker(t.ctx, t.scale, t.offset);
  }
  drawMarker(t, n, i) {
    const o = this.data.points[0];
    if (!o) return;
    const s = (this.data.fontSize || ce) * n, a = dn(this.data.fontSize || ce) * n, r = o.x * n - i.x, l = o.y * n - i.y, h = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, s, n), h) {
      const u = Xn(
        o,
        this.data.fontSize || ce
      ), d = u.x * n - i.x, v = u.y * n - i.y, y = v + s + 3 * n;
      t.font = `${s}px ${se}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(h, d, v);
      const M = t.measureText(h).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * n * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * n, y), t.lineTo(d + M + 3 * n, y), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, n, i, o, s, a) {
    t.beginPath(), t.arc(n, i, o, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${s}px ${se}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), n, i + a * 0.5);
  }
  hitTest(t, n = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const o = dn(this.data.fontSize || ce);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= o + n) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - n && t.x <= a.x + a.width + n && t.y >= a.y - n && t.y <= a.y + a.height + n;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const n = this.data.fontSize || ce, i = dn(n), o = this.data.text?.trim() || "";
    let s = t.x + i;
    if (o) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${n}px ${se}`, s = Xn(t, n).x + r.measureText(o).width + 4);
    }
    return {
      x: t.x - i,
      y: t.y - i,
      width: s - (t.x - i),
      height: Math.max(i * 2, n + i)
    };
  }
  drawSelection(t) {
    this.drawStateOutline(t, "#3b82f6", [3, 3], 1);
  }
  drawHover(t) {
    this.drawStateOutline(t, "#3b82f6", [4, 4], 2);
  }
  drawStateOutline(t, n, i, o) {
    const s = this.getBounds();
    s && (t.ctx.save(), t.ctx.strokeStyle = n, t.ctx.lineWidth = o, t.ctx.setLineDash(i), t.ctx.strokeRect(s.x, s.y, s.width, s.height), t.ctx.restore());
  }
}
class an {
  static createAnnotation(t, n, i, o = {}) {
    switch (t) {
      case f.Rectangle:
        return new Ca(n, i);
      case f.Ellipse:
        return new _a(n, i);
      case f.Line:
        return new Ta(n, i);
      case f.Arrow:
        return new za(n, i);
      case f.Pen:
        return new Ra(n, i);
      case f.Text:
        return new La(
          n,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case f.Marker:
        return new Pa(
          n,
          o.markerNumber || 1,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case f.Mosaic:
        return new Zn(
          n,
          i,
          o.mosaicSize || 8
        );
      default:
        return null;
    }
  }
  // 从数据恢复标注
  static fromData(t) {
    const { type: n, points: i, style: o } = t;
    if (!i || i.length === 0) return null;
    const s = i[0], a = this.createAnnotation(n, s, o, {
      text: t.text,
      fontSize: t.fontSize,
      markerNumber: t.markerNumber,
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
      [f.Rectangle]: "drawing-rect",
      [f.Ellipse]: "drawing-ellipse",
      [f.Line]: "drawing-line",
      [f.Arrow]: "drawing-arrow",
      [f.Pen]: "drawing-pen",
      [f.Text]: "drawing-text",
      [f.Marker]: "drawing-marker",
      [f.Mosaic]: "drawing-mosaic",
      [f.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== f.Select && t !== f.ColorPicker && t !== f.Ocr && t !== f.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== f.Select && t !== f.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow,
      f.Pen,
      f.Text,
      f.Marker
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow,
      f.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === f.Text || t === f.Marker;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === f.Mosaic;
  }
}
const pe = class pe {
  constructor() {
    A(this, "pool", []);
    A(this, "maxPoolSize", 5);
    // 最大池大小
    A(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return pe.instance || (pe.instance = new pe()), pe.instance;
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
    let o;
    i !== -1 ? (o = this.pool[i], this.pool.splice(i, 1)) : o = document.createElement("canvas"), o.width = t, o.height = n;
    const s = o.getContext("2d");
    return s && s.clearRect(0, 0, t, n), this.inUse.add(o), o;
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
A(pe, "instance");
let Gn = pe;
async function Aa(e, t) {
  return await b("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const Ia = "snippets-code:developer-mode", So = "snippets-code:frontend-diagnostics", Da = 240, He = "[REDACTED]", gn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${He}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${He}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  He
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${He}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${He}`
), ai = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return gn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return gn(
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
    return gn(String(e));
  }
}, Oa = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Ea = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(So) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, ri = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ia) === "true";
  } catch {
    return !1;
  }
}, $a = (e, t, n) => {
  if (!ri() || typeof localStorage > "u") return;
  const i = Ea();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Oa(),
    message: gn(t),
    data: ai(n)
  });
  try {
    localStorage.setItem(
      So,
      JSON.stringify(i.slice(-Da))
    );
  } catch {
  }
}, Wa = () => ri(), Ba = (e) => e === "error" || ri(), rn = (e, t, n) => {
  $a(e, t, n), Ba(e) && b("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : ai(n)
  }).catch(() => {
  });
}, P = {
  info: (e, t, ...n) => {
    rn("info", e, t);
  },
  error: (e, t) => {
    rn("error", e, t);
  },
  warn: (e, t) => {
    rn("warn", e, t);
  },
  debug: (e, t) => {
    Wa() && rn("debug", e, t);
  }
}, Ct = {
  log: (e, t) => {
    b("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : ai(t)
    }).catch(() => {
    });
  }
}, Na = "resources/transformers/transformers.min.js", Ha = ["translation-offline-runtime", "translation"], ja = "https://huggingface.co/", Fa = "{model}/resolve/{revision}/", Va = "/__snippets_code_disabled_transformers_local_models__/", Ua = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let je = null;
const Ya = (e) => {
  const t = e.toLowerCase();
  return [
    { index: e.lastIndexOf("/"), length: 1 },
    { index: e.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (i, o) => o.index > i.index ? o : i,
    { index: -1, length: 0 }
  );
}, Mo = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = Ya(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, Co = (e) => {
  const t = Mo(e);
  return Object.fromEntries(
    Ua.map((n) => [n, `${t}${n}`])
  );
}, Za = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = ja, e.remotePathTemplate = Fa, e.allowLocalModels = !1, e.localModelPath = Va, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = Co(t), e.backends.onnx.wasm.numThreads = 1);
};
async function Xa() {
  return je || (je = (async () => {
    for (const e of Ha) {
      const t = await Aa(e, Na);
      if (!t) continue;
      const n = ga(t), i = await import(
        /* @vite-ignore */
        n
      );
      return Za(i.env, n), P.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw je = null, e;
  }), je);
}
let ae = null, Xe = !1, Le = null, ve = null, qn = null;
const Ga = "Xenova/opus-mt-en-zh", qa = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Ka = 3e5;
function Ja(e) {
  qn = e;
}
function Qa() {
  return qa;
}
function tr(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function _o() {
  return ae || Le || (Xe = !0, P.info("[离线翻译] 正在加载翻译模型..."), Le = (async () => {
    try {
      const { pipeline: e } = await Xa();
      let t = "";
      const n = e("translation", Ga, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== t && (t = o.file, P.info(`[离线翻译] 已加载: ${o.file}`)), qn && qn({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return ae = await tr(
        n,
        Ka,
        "模型加载超时，请检查网络连接后重试"
      ), P.info("[离线翻译] 翻译模型加载完成"), Xe = !1, ae;
    } catch (e) {
      throw Xe = !1, Le = null, P.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Le);
}
async function To(e) {
  if (!e?.trim()) return e;
  ve = new AbortController();
  const t = ve.signal;
  try {
    const n = await _o();
    if (t.aborted)
      throw new Error("翻译已取消");
    const i = e.split(`
`), o = [];
    for (const s of i) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const a = s.trim();
      if (!a) {
        o.push("");
        continue;
      }
      const r = await n(a);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(r) && r.length > 0) {
        const l = r[0].translation_text || a;
        o.push(l);
      } else
        o.push(a);
    }
    return o.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (P.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (P.warn("[离线翻译] 运行时资源未安装"), n) : (P.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    ve = null;
  }
}
function er() {
  ve && (ve.abort(), ve = null, P.info("[离线翻译] 已发送取消信号"));
}
function nr() {
  return ve !== null;
}
async function zo() {
  await _o();
}
function ir() {
  return ae !== null;
}
function or() {
  return Xe;
}
async function li() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      P.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const o = await (await caches.open(n)).keys();
          if (P.info(`[离线翻译] Cache "${n}" 包含 ${o.length} 个文件`), o.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = o.some((r) => r.url.includes(".onnx"));
            if (P.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
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
    P.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return P.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return P.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return P.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function sr() {
  return (await li()).isCached;
}
function ar() {
  return ae !== null;
}
async function rr() {
  if (ae)
    try {
      await ae.dispose?.();
    } catch {
    }
  ae = null, Le = null, Xe = !1, P.info("[离线翻译] 翻译器已释放");
}
async function lr() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), P.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), P.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    P.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw P.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: ar,
  cancelOfflineTranslation: er,
  clearModelCache: lr,
  disposeOfflineTranslator: rr,
  getModelCacheInfo: li,
  getModelFiles: Qa,
  getRuntimeBaseUrl: Mo,
  getRuntimeWasmPaths: Co,
  isModelCached: sr,
  isOfflineTranslatorInitializing: or,
  isOfflineTranslatorReady: ir,
  isTranslationInProgress: nr,
  setProgressCallback: Ja,
  translateOffline: To,
  warmupOfflineTranslator: zo
}, Symbol.toStringTag, { value: "Module" }));
class me {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => Sg).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const n = Promise.resolve(cr).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
A(me, "loadedModules", /* @__PURE__ */ new Map()), A(me, "loadingPromises", /* @__PURE__ */ new Map());
async function hr() {
  return await b("local_ai_get_status");
}
async function ur(e) {
  return await b("local_ai_start_service", {
    config: null
  });
}
async function dr(e) {
  return await b("local_ai_chat", { request: e });
}
function Ro(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), o = i ? i.length : 0, s = e.match(/[\uac00-\ud7af]/g), a = s ? s.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = n + o + a + l;
  return u === 0 ? "unknown" : o >= 3 && o > l && o / u >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / u >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function Pe(e) {
  return e === "zh" || e === "en";
}
function fe(e) {
  return Ro(e);
}
const gr = /[.!?。！？；;：:][)"'”’】）\]]*$/, Vi = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, ln = /[A-Za-z0-9]/, fr = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Ui = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Lo(e, t = {}) {
  const n = Qr(e), i = Tr(e, n);
  return i.length === 0 ? [] : Mr(i, n) ? Sr(i, n) : (t.mode === "single_para" ? [Ve(i, n)] : pr(i, n)).flatMap((s) => mr(s, n));
}
function mr(e, t) {
  const n = hi(e, t), i = [];
  for (const o of n) {
    const s = i[i.length - 1], a = s ? Ir(s, o, t) : !1;
    if (!s || !a) {
      i.push(Or(o));
      continue;
    }
    s.text = $r(s.text, o.text), s.blocks = [...s.blocks, ...o.blocks], s.bbox = Eo(s.bbox, o.bbox), s.fontSize = Xi(
      s.fontSize || o.fontSize,
      s.blocks.length - o.blocks.length,
      o.fontSize,
      o.blocks.length
    ), s.lineHeight = Xi(
      s.lineHeight || o.lineHeight,
      s.blocks.length - o.blocks.length,
      o.lineHeight,
      o.blocks.length
    ), s.isCodeBlock = !!(s.isCodeBlock || o.isCodeLike || o.hasTableColumns), s.isStructuredBlock = !!(s.isStructuredBlock || o.hasTableColumns);
  }
  return Wr(i, t);
}
function pr(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: Cr(l),
    block: l
  })).filter((l) => _r(l.bbox)).sort(ci);
  if (n.length <= 1)
    return [Ve(e, t)];
  if (wr(n, t))
    return [Ve(e, t)];
  const { cuts: i, rows: o } = yr(n);
  if (i.length < 2 || o.length <= 1)
    return [Ve(e, t)];
  const s = kr(i, o), r = br(s).filter((l) => l.units.length > 0).map((l) => l.units.map((h) => h.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Ve(e, t)];
}
function wr(e, t) {
  if (e.length < 2)
    return !0;
  const n = [...e].sort(ci);
  let i = 0, o = 0;
  for (let s = 1; s < n.length; s += 1) {
    const a = n[s - 1].bbox, r = n[s].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const h = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), d = h / u >= 0.45, v = Math.abs(a.left - r.left) <= t * 1.5;
    (d || v) && (o += 1);
  }
  return i > 0 && o / i >= 0.72;
}
function yr(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], o = [];
  let s = [], a = 0;
  for (; a < e.length; ) {
    const h = e[a].bbox.bottom, u = [];
    for (; a < e.length && e[a].bbox.top <= h; )
      u.push(e[a]), a += 1;
    u.sort((w, S) => w.bbox.left - S.bbox.left || w.bbox.right - S.bbox.right);
    const d = vr(u, t, n, i.length), { gaps: v, removedGaps: y } = xr(s, d), M = i.length - 1;
    for (const w of y)
      o.push({
        left: w.left,
        right: w.right,
        startRow: w.startRow,
        endRow: M
      });
    s = v, i.push(u);
  }
  const r = i.length - 1;
  for (const l of s)
    o.push({
      left: l.left,
      right: l.right,
      startRow: l.startRow,
      endRow: r
    });
  return o.sort((l, h) => l.left - h.left || l.right - h.right), { cuts: o, rows: i };
}
function vr(e, t, n, i) {
  const o = [];
  let s = t;
  for (const a of e)
    a.bbox.left > s && o.push({ left: s, right: a.bbox.left, startRow: i }), a.bbox.right > s && (s = a.bbox.right);
  return o.push({ left: s, right: n, startRow: i }), o;
}
function xr(e, t) {
  const n = e.map(() => !1), i = t.map(() => !1), o = [];
  for (let s = 0; s < e.length; s += 1) {
    const a = e[s];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], h = Math.max(a.left, l.left), u = Math.min(a.right, l.right);
      h <= u && (o.push({ left: h, right: u, startRow: a.startRow }), n[s] = !0, i[r] = !0);
    }
  }
  for (let s = 0; s < t.length; s += 1)
    i[s] || o.push(t[s]);
  return {
    gaps: o,
    removedGaps: e.filter((s, a) => !n[a])
  };
}
function kr(e, t) {
  const n = t.map(() => []);
  for (const r of e)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      n[l]?.push({ left: r.left, right: r.right });
  for (const r of n)
    r.sort((l, h) => l.left - h.left || l.right - h.right);
  const i = {
    xLeft: e[0].left - 1,
    xRight: e[e.length - 1].right + 1,
    rowTop: -1,
    rowBottom: -1,
    units: [],
    children: []
  }, o = [i];
  let s = [];
  const a = (r) => {
    const l = r.xRight - 2, h = o.filter((y) => l >= y.xLeft && l <= y.xRight + 1e-4 && y.rowBottom < r.rowTop), u = Math.max(...h.map((y) => y.rowBottom), i.rowBottom), d = h.filter((y) => y.rowBottom === u);
    (d.length > 0 ? d.reduce((y, M) => M.xRight > y.xRight ? M : y) : i).children.push(r), o.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = n[r], h = [];
    for (const y of s) {
      let M = !1, w = !1, S = !1;
      for (const I of l)
        if (cn(I.right, y.xLeft) && (M = !0), cn(I.left, y.xRight) && (w = !0), y.xLeft < I.left && I.left < y.xRight || y.xLeft < I.right && I.right < y.xRight) {
          S = !0;
          break;
        }
      !M || !w || S ? a(y) : (y.rowBottom = r, h.push(y));
    }
    s = h;
    let u = 0, d = 0;
    const v = t[r];
    for (; u < v.length && l.length >= 2; ) {
      const y = v[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const M = l[d].right, w = l[d + 1].left;
      if (y.bbox.left + 1e-4 > w && d < l.length - 2) {
        d += 1;
        continue;
      }
      let S = s.find((I) => cn(I.xLeft, M) && cn(I.xRight, w));
      S || (S = {
        xLeft: M,
        xRight: w,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, s.push(S)), S.units.push(y), u += 1;
    }
  }
  for (const r of s)
    a(r);
  for (const r of o)
    r.children.sort((l, h) => l.xLeft - h.xLeft || l.rowTop - h.rowTop), r.units.sort(ci);
  return i;
}
function br(e) {
  const t = [e], n = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (n.push(i), t.push(...[...i.children].reverse()));
  }
  return n;
}
function Ve(e, t) {
  return [...e].sort((n, i) => {
    const o = n.y - i.y;
    return Math.abs(o) > t * 0.45 ? o : n.x - i.x;
  });
}
function Sr(e, t) {
  const n = ue(Ht(e.map((a) => a.width)), t * 0.5), i = Math.max(n * 1.4, t * 0.28), o = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), s = [];
  for (const a of o) {
    const r = a.x + a.width / 2, l = s[s.length - 1], h = l ? Ht(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - h) <= i ? l.push(a) : s.push([a]);
  }
  return s.map((a) => {
    const r = [...a].sort((v, y) => v.y - y.y), l = r.reduce((v, y, M) => {
      const w = y.text.trim();
      return M === 0 ? w : ui(v, w);
    }, ""), h = Oo(r), u = Ht(r.map((v) => ue(v.fontSize, t))), d = Ht(r.map((v) => Cn(v)));
    return {
      text: l,
      blocks: r,
      bbox: h,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: d,
      angle: Ht(r.map((v) => v.angle || 0))
    };
  });
}
function Mr(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const o = Math.max(i.width, 1);
    return i.height > o * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function Cr(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function _r(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function ci(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function cn(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function Tr(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || zr(n, t) || Lr(i))
      return null;
    const o = Pr(Rr(i, n, t));
    return o === n.text ? n : { ...n, text: o };
  }).filter((n) => !!n);
}
function zr(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function Rr(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function Lr(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function Pr(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function hi(e, t) {
  const n = [...e].sort((s, a) => {
    const r = s.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : s.x - a.x;
  }), i = [], o = t * 0.45;
  for (const s of n) {
    const a = i[i.length - 1];
    a && Math.abs(s.y - a.y) < o && !Xr(a.blocks, s, t) ? (a.blocks.push(s), a.y = Ht(a.blocks.map((r) => r.y))) : i.push({ y: s.y, blocks: [s] });
  }
  return i.map((s) => Ar(s.blocks, t));
}
function Ar(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = Oo(n), o = n.reduce((r, l, h) => {
    const u = l.text.trim();
    return h === 0 ? u : Er(r, u);
  }, ""), s = Ht(n.map((r) => ue(r.fontSize, t))), a = Ht(n.map((r) => Cn(r)));
  return {
    text: o,
    blocks: n,
    bbox: i,
    fontSize: s,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: Gr(n, t),
    isCodeLike: Io(o)
  };
}
function Ir(e, t, n) {
  const i = hi(e.blocks, n), o = i[i.length - 1];
  if (!o) return !1;
  const s = Ke(o.text);
  if (Mn(o.text) || Ke(t.text) || s && !Dr(o, t, n) || t.isCodeLike || o.isCodeLike || t.hasTableColumns || o.hasTableColumns) return !1;
  const a = t.bbox.y - (o.bbox.y + o.bbox.height);
  if (a < -n * 0.25 || a >= n * 1.8 || Fr(i, a, n) || Vr(o, t, a, n) || Ur(o, t, a, n) || Yr(o, t, a, n) || Zr(o, t, a, n))
    return !1;
  if (s)
    return !0;
  const r = Math.max(n * 1.2, o.lineHeight * 0.9);
  return Math.abs(t.bbox.x - o.bbox.x) <= r;
}
function Dr(e, t, n) {
  if (Ao(t.text))
    return !1;
  const i = t.bbox.x - e.bbox.x, o = Math.max(n * 0.8, e.lineHeight * 0.65);
  return i >= o;
}
function Or(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: Ht(e.blocks.map((t) => t.angle || 0))
  };
}
function Er(e, t) {
  return ui(e, t);
}
function $r(e, t) {
  return ui(e, t);
}
function ui(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const o = n.charAt(n.length - 1), s = i.charAt(0), a = n.charAt(n.length - 2);
  return o === "-" && ln.test(a) && ln.test(s) ? `${n.slice(0, -1)}${i}` : tl(s) || el(o) ? `${n}${i}` : Vi.test(o) || Vi.test(s) || Gi(o) || Gi(s) ? `${n}${i}` : ln.test(o) && ln.test(s) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function Mn(e) {
  return gr.test(e.trim());
}
function Ke(e) {
  return fr.test(e);
}
function Wr(e, t) {
  return e.flatMap((n) => Br(n, t));
}
function Br(e, t) {
  const n = Po(e.text);
  if (n.length <= 1)
    return [e];
  const i = hi(e.blocks, t), o = i.length === n.length;
  return n.map((s, a) => {
    const r = o ? i[a] : null, l = r?.bbox || Hr(e.bbox, a, n.length), h = r?.blocks || [jr(e, s, l, a)];
    return {
      ...e,
      text: s,
      blocks: h,
      bbox: l,
      isCodeBlock: !!h.some((u) => Io(u.text)),
      isStructuredBlock: e.isStructuredBlock,
      fontSize: Ht(h.map((u) => ue(u.fontSize, e.fontSize || t))),
      lineHeight: Ht(h.map((u) => Cn(u))),
      angle: Ht(h.map((u) => u.angle || 0))
    };
  });
}
function Po(e) {
  const t = e.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Po);
  const n = Nr(e);
  return n.length > 1 ? n.flatMap(Yi) : Yi(e);
}
function Nr(e) {
  const t = e.trim(), n = [];
  Ui.lastIndex = 0;
  for (const i of t.matchAll(Ui)) {
    const o = i[0], s = i.index ?? 0;
    n.push(s + (o.startsWith(" ") ? 1 : 0));
  }
  return n.length <= 1 ? [t] : n.map((i, o) => {
    const s = n[o + 1] ?? t.length;
    return t.slice(i, s).trim();
  }).filter(Boolean);
}
function Yi(e) {
  const t = e.trim();
  if (!Ke(t))
    return [t];
  const n = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !n || !Ao(n[2]) ? [t] : [n[1].trim(), n[2].trim()];
}
function Hr(e, t, n) {
  const i = e.height / Math.max(n, 1);
  return {
    x: e.x,
    y: e.y + i * t,
    width: e.width,
    height: i
  };
}
function jr(e, t, n, i) {
  const o = e.blocks[Math.min(i, Math.max(e.blocks.length - 1, 0))];
  return {
    ...o || {
      fontSize: e.fontSize || n.height,
      lineHeight: e.lineHeight || n.height,
      angle: e.angle || 0
    },
    text: t,
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height,
    fontSize: o?.fontSize || e.fontSize || n.height,
    lineHeight: o?.lineHeight || e.lineHeight || n.height,
    angle: o?.angle || e.angle || 0
  };
}
function Ao(e) {
  const t = e.trim();
  return !t || Mn(t) || Ke(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Fr(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], h = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    h > 0 && i.push(h);
  }
  const o = i.length > 0 ? Ht(i) : 0, s = Math.max(o * 2.2, n * 1.15);
  return t > s;
}
function Vr(e, t, n, i) {
  const o = e.text.trim();
  if (!o || Mn(o) || Ke(o) || e.isCodeLike || o.endsWith("-"))
    return !1;
  const s = o.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(o) && s <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(o) && o.length <= 12 && a, h = r || l;
  return e.fontSize >= t.fontSize * 1.18 && h ? !0 : n > i * 0.7 && h;
}
function Ur(e, t, n, i) {
  if (n <= 0)
    return !1;
  const o = Math.max(e.fontSize, t.fontSize), s = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = o / s, r = n / Math.max(s, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, h = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && h;
}
function Yr(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const s = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return s && a;
}
function Zr(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Zi(e.text) && Zi(t.text);
}
function Zi(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Mn(t);
}
function Io(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Xr(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), o = i[i.length - 1], s = t.x - (o.x + o.width);
  return s > n * 0.9 && Jr(o.text) && Do(t.text) ? !1 : s > n * 3.2;
}
function Gr(e, t) {
  if (e.length < 2)
    return e.some((o) => qr(o.text));
  const n = [...e].sort((o, s) => o.x - s.x);
  let i = 0;
  for (let o = 1; o < n.length; o++) {
    const s = n[o - 1], a = n[o], r = n[o].x - (s.x + s.width);
    (r > t * 1.8 || r > t * 0.9 && Kr(s.text) && Do(a.text)) && (i += 1);
  }
  return i >= 1;
}
function qr(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Kr(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function Jr(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Do(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Oo(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => Eo(n, i), t[0]);
}
function Eo(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), o = Math.max(e.x + e.width, t.x + t.width), s = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: o - n,
    height: s - i
  };
}
function Qr(e) {
  return ue(Ht(e.map((t) => Cn(t))), 16);
}
function Cn(e) {
  return ue(e.lineHeight, ue(e.height, ue(e.fontSize, 16) * 1.2));
}
function Xi(e, t, n, i) {
  const o = t + i;
  return o <= 0 ? n : (e * t + n * i) / o;
}
function ue(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function Ht(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function tl(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function el(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function Gi(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class nl {
  constructor(t, n, i, o) {
    A(this, "canvas");
    A(this, "coordinateSystem");
    A(this, "drawingEngine");
    A(this, "eventHandler");
    // 状态管理
    A(this, "selectionRect", null);
    A(this, "annotations", []);
    A(this, "currentAnnotation", null);
    A(this, "selectedAnnotation", null);
    A(this, "hoveredAnnotation", null);
    // 拖拽状态
    A(this, "draggedAnnotation", null);
    A(this, "dragStartPoint", null);
    A(this, "resizingAnnotation", null);
    A(this, "resizeStartBounds", null);
    A(this, "resizeOperation", null);
    // 编辑状态
    A(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    A(this, "annotationUndoStack", []);
    A(this, "annotationRedoStack", []);
    A(this, "pendingDragSnapshot", null);
    A(this, "pendingResizeSnapshot", null);
    // 工具设置
    A(this, "currentTool", f.Select);
    A(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    A(this, "textSize", 16);
    A(this, "mosaicSize", 8);
    A(this, "showGuides", !0);
    // 取色器状态
    A(this, "colorPickerState", {
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
    A(this, "allWindows", []);
    A(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    A(this, "snappedWindow", null);
    A(this, "snappedElement", null);
    A(this, "showSnapPreview", !1);
    A(this, "selectionMode", "smart");
    A(this, "captureMonitor", { x: 0, y: 0, scale: 1 });
    A(this, "lastPointerPosition", null);
    A(this, "smartDetectionSequence", 0);
    A(this, "smartDetectionTimer", null);
    // 点击拖拽区分
    A(this, "pendingSnapCandidate", null);
    A(this, "dragStartPosition", null);
    A(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    A(this, "throttleTimer", null);
    A(this, "lastThrottledTimestamp", 0);
    A(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    A(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    A(this, "backgroundImage", null);
    // 是否正在加载完整背景图
    A(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    A(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    A(this, "offlineModelActivated", !1);
    // Canvas 池
    A(this, "canvasPool", Gn.getInstance());
    // 回调函数
    A(this, "onStateChange");
    A(this, "onTextInputRequest");
    A(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    A(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    A(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    A(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    A(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    A(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    A(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    A(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = o, this.coordinateSystem = new Sa(t), this.drawingEngine = new ba(t, this.coordinateSystem), this.eventHandler = new Ma(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), me.preloadModules();
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
    if (this.annotations = t.annotations.map((n) => an.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const n = this.annotations.find((i) => i.getData().id === t.selectedAnnotationId);
      n && (n.updateData({ selected: !0 }), this.selectedAnnotation = n);
    }
    this.draw(), this.onStateChange?.();
  }
  // 初始化画布
  initCanvas() {
    const t = this.canvas.parentElement;
    if (!t) return;
    const n = t.clientWidth, i = t.clientHeight, o = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(n * o), this.canvas.height = Math.round(i * o), this.canvas.style.width = n + "px", this.canvas.style.height = i + "px";
    const s = this.canvas.getContext("2d");
    s && s.scale(o, o), this.drawPendingState(), this.coordinateSystem.updateCanvasRect(this.canvas);
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
        P.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
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
        const o = await b("get_screenshot_preview");
        if (o && o.trim().length > 0)
          return;
        await new Promise((s) => setTimeout(s, 100)), i += 100;
      } catch (o) {
        const s = o?.toString() || "";
        if (s.includes("No screenshot preview available") || s.includes("being captured") || s.includes("Preview load timeout")) {
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
        const o = await b("get_screenshot_background");
        if (o) {
          const s = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              s.onload = null, s.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            s.onload = () => {
              clearTimeout(l), this.backgroundImage = s, this.draw(), a();
            }, s.onerror = (h) => {
              clearTimeout(l), r(h);
            }, s.src = `data:${this.detectImageMime(o)};base64,${o}`;
          });
          return;
        }
      } catch (o) {
        if (o?.toString().includes("No screenshot background available") || o?.toString().includes("being captured")) {
          await new Promise((s) => setTimeout(s, 100)), i += 100;
          continue;
        }
        throw o;
      }
    this.createFallbackBackground();
  }
  detectImageMime(t) {
    return t.trim().startsWith("/9j/") ? "image/jpeg" : "image/png";
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
      P.error("[截图] 创建后备背景失败", t);
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
      const i = 10, o = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < i; l++)
        try {
          const [h, u] = await Promise.all([
            b("get_cached_monitor_info"),
            b("get_cached_window_list")
          ]);
          t = {
            x: h.x,
            y: h.y,
            scale: h.scale,
            isFullscreen: !1
          }, n = u;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((d) => setTimeout(d, o));
            continue;
          }
          const u = await Promise.all([
            b("get_window_info"),
            b("get_all_windows")
          ]);
          t = u[0], n = u[1];
        }
      const s = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.captureMonitor = {
        x: t?.x || 0,
        y: t?.y || 0,
        scale: s
      }, this.allWindows = n.filter((l) => this.isValidWindow(l)).map((l) => ({
        ...l,
        x: Math.round((l.x - this.captureMonitor.x) / s),
        y: Math.round((l.y - this.captureMonitor.y) / s),
        width: Math.round(l.width / s),
        height: Math.round(l.height / s)
      })).filter(
        (l) => l.x >= -l.width && l.y >= -l.height && l.x < a + l.width && l.y < r + l.height
      );
    } catch (t) {
      P.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
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
      let o;
      try {
        const r = await b("get_cached_monitor_info");
        o = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        o = await b("get_window_info");
      }
      let s;
      try {
        const r = await b("get_mouse_position"), l = o?.scale || 1;
        s = {
          x: Math.round((r.x - o.x) / l),
          y: Math.round((r.y - o.y) / l)
        };
      } catch {
        s = {
          x: Math.round(this.canvas.width / (window.devicePixelRatio || 1) / 2),
          y: Math.round(this.canvas.height / (window.devicePixelRatio || 1) / 2)
        };
      }
      const a = this.detectNearbyWindow(s);
      this.lastPointerPosition = s, a && (this.snappedWindow = a, this.showSnapPreview = !0, this.draw(), this.scheduleUiElementDetection(s, a));
    } catch (t) {
      P.error("[截图] 初始窗口吸附检测失败", t);
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
    for (const o of n)
      if (t.title === o || t.title.startsWith(o))
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
      const s = Math.abs(t.x - i.x), a = Math.abs(t.x - (i.x + i.width)), r = Math.abs(t.y - i.y), l = Math.abs(t.y - (i.y + i.height)), h = Math.min(s, a, r, l);
      h <= this.snapThreshold && n.push({ window: i, distance: h });
    }
    return n.length === 0 ? null : n.reduce((i, o) => o.window.display_order < i.window.display_order ? o : o.window.display_order > i.window.display_order ? i : o.distance < i.distance ? o : o.distance > i.distance ? i : o.window.is_fullscreen && !i.window.is_fullscreen ? o : i).window;
  }
  getFullscreenCandidate() {
    const t = window.devicePixelRatio || 1;
    return {
      rect: {
        x: 0,
        y: 0,
        width: this.canvas.width / t,
        height: this.canvas.height / t
      },
      kind: "fullscreen",
      label: ""
    };
  }
  getActiveSelectionCandidate() {
    if (this.selectionMode === "fullscreen")
      return this.getFullscreenCandidate();
    if (this.selectionMode === "smart" && this.snappedElement && this.lastPointerPosition) {
      const { rect: t } = this.snappedElement, n = this.lastPointerPosition;
      if (n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height)
        return this.snappedElement;
    }
    return this.snappedWindow ? {
      rect: {
        x: this.snappedWindow.x,
        y: this.snappedWindow.y,
        width: this.snappedWindow.width,
        height: this.snappedWindow.height
      },
      kind: "window",
      label: this.snappedWindow.title
    } : null;
  }
  scheduleUiElementDetection(t, n) {
    if (this.selectionMode !== "smart" || !n.handle) return;
    const i = ++this.smartDetectionSequence;
    this.smartDetectionTimer !== null && window.clearTimeout(this.smartDetectionTimer), this.smartDetectionTimer = window.setTimeout(() => {
      this.smartDetectionTimer = null, this.detectUiElement(t, n, i);
    }, 70);
  }
  async detectUiElement(t, n, i) {
    const o = this.captureMonitor.scale || 1, s = Math.round(this.captureMonitor.x + t.x * o), a = Math.round(this.captureMonitor.y + t.y * o);
    try {
      const r = await b("get_ui_element_at_point", {
        windowHandle: n.handle,
        x: s,
        y: a
      });
      if (i !== this.smartDetectionSequence || this.selectionMode !== "smart" || this.snappedWindow?.handle !== n.handle)
        return;
      if (!r) {
        this.snappedElement && (this.snappedElement = null, this.draw());
        return;
      }
      const l = {
        x: Math.round((r.x - this.captureMonitor.x) / o),
        y: Math.round((r.y - this.captureMonitor.y) / o),
        width: Math.round(r.width / o),
        height: Math.round(r.height / o)
      }, h = l.x >= n.x - 2 && l.y >= n.y - 2 && l.x + l.width <= n.x + n.width + 2 && l.y + l.height <= n.y + n.height + 2, u = t.x >= l.x && t.x <= l.x + l.width && t.y >= l.y && t.y <= l.y + l.height;
      l.width < 8 || l.height < 8 || !h || !u ? this.snappedElement = null : this.snappedElement = {
        rect: l,
        kind: "element",
        label: r.name
      }, this.draw();
    } catch {
      i === this.smartDetectionSequence && (this.snappedElement = null);
    }
  }
  setSelectionMode(t) {
    this.selectionRect || this.selectionMode === t || (this.selectionMode = t, this.smartDetectionSequence += 1, this.smartDetectionTimer !== null && (window.clearTimeout(this.smartDetectionTimer), this.smartDetectionTimer = null), this.snappedElement = null, this.pendingSnapCandidate = null, this.showSnapPreview = !1, t === "fullscreen" ? (this.snappedWindow = null, this.showSnapPreview = !0) : this.lastPointerPosition && (this.snappedWindow = this.detectNearbyWindow(this.lastPointerPosition), this.showSnapPreview = !!this.snappedWindow, t === "smart" && this.snappedWindow && this.scheduleUiElementDetection(this.lastPointerPosition, this.snappedWindow)), this.draw(), this.onStateChange?.());
  }
  // 绑定鼠标事件
  bindMouseEvents() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler), this.canvas.addEventListener("mousemove", this.mouseMoveHandler), this.canvas.addEventListener("mouseup", this.mouseUpHandler), this.canvas.addEventListener("dblclick", this.doubleClickHandler), window.addEventListener("keydown", this.keyDownHandler), window.addEventListener("keyup", this.keyUpHandler);
  }
  // 鼠标按下处理
  handleMouseDown(t) {
    t.preventDefault(), t.stopPropagation();
    const n = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = n;
    const i = this.eventHandler.getAnnotationAtPoint(n, this.annotations);
    if ((this.currentTool === f.Select || this.currentTool === f.Marker) && i?.getData().type === f.Marker) {
      this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(i.getData().points[0], i), this.draw(), this.onStateChange?.();
      return;
    }
    const o = this.eventHandler.getOperationType(
      n,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (o !== R.None)
      switch (this.eventHandler.setCurrentOperation(o), this.eventHandler.startDrawing(n), o) {
        case R.Drawing:
          if (!this.selectionRect && this.currentTool === f.Select) {
            this.dragStartPosition = { ...n };
            const s = this.getActiveSelectionCandidate();
            s ? this.pendingSnapCandidate = s : (this.selectionRect = {
              x: n.x,
              y: n.y,
              width: 0,
              height: 0
            }, this.onStateChange?.());
          }
          break;
        case R.DrawingRect:
        case R.DrawingEllipse:
        case R.DrawingLine:
        case R.DrawingArrow:
        case R.DrawingPen:
        case R.DrawingMosaic:
        case R.DrawingMarker:
          this.startAnnotation(n);
          break;
        case R.DrawingText:
          this.startTextInput(n), this.eventHandler.stopDrawing();
          break;
        case R.ColorPicking:
          this.handleColorPicking(n), this.eventHandler.stopDrawing();
          break;
        case R.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case R.EditingAnnotation:
          this.selectAnnotationAtPoint(n), this.selectedAnnotation && this.selectedAnnotation.getData().type === f.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case R.MovingAnnotation:
          this.startAnnotationDrag(n);
          break;
        case R.ResizingAnnotationNW:
        case R.ResizingAnnotationSE:
          this.startAnnotationResize(n, o);
          break;
        case R.Moving:
        case R.ResizingNW:
        case R.ResizingNE:
        case R.ResizingSW:
        case R.ResizingSE:
        case R.ResizingN:
        case R.ResizingS:
        case R.ResizingW:
        case R.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const n = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = n;
    const i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(n), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && St(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(n) : this.draggedAnnotation ? this.updateAnnotationDrag(n) : this.resizingAnnotation ? this.updateAnnotationResize(n) : this.selectionRect && this.currentTool === f.Select && this.updateSelectionRect(n, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === f.Select && !this.selectionRect) {
        const o = this.selectionMode === "fullscreen" ? null : this.detectNearbyWindow(n);
        o !== this.snappedWindow && (this.snappedWindow = o, this.snappedElement = null, this.smartDetectionSequence += 1, this.showSnapPreview = this.selectionMode === "fullscreen" || !!o, this.draw()), this.selectionMode === "smart" && o && this.scheduleUiElementDetection(n, o);
      }
      this.updateHoverState(n), this.currentTool === f.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(n, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = n, this.draw(), this.throttledUpdateColorPreview(n)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapCandidate && !this.selectionRect && (this.selectionRect = { ...this.pendingSnapCandidate.rect }), this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.showSnapPreview = !1, this.smartDetectionSequence += 1, this.smartDetectionTimer !== null && (window.clearTimeout(this.smartDetectionTimer), this.smartDetectionTimer = null), this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(n, this.annotations);
    (i?.getData().type === f.Text || i?.getData().type === f.Marker) && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(n, i));
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
    const i = n.currentOperation, o = t.x - n.lastMousePos.x, s = t.y - n.lastMousePos.y;
    switch (i) {
      case R.Drawing:
        this.selectionRect.width = t.x - n.startPoint.x, this.selectionRect.height = t.y - n.startPoint.y;
        break;
      case R.Moving:
        this.selectionRect.x += o, this.selectionRect.y += s;
        break;
      case R.ResizingNW:
        this.selectionRect.x += o, this.selectionRect.y += s, this.selectionRect.width -= o, this.selectionRect.height -= s;
        break;
      case R.ResizingNE:
        this.selectionRect.y += s, this.selectionRect.width += o, this.selectionRect.height -= s;
        break;
      case R.ResizingSW:
        this.selectionRect.x += o, this.selectionRect.width -= o, this.selectionRect.height += s;
        break;
      case R.ResizingSE:
        this.selectionRect.width += o, this.selectionRect.height += s;
        break;
      case R.ResizingN:
        this.selectionRect.y += s, this.selectionRect.height -= s;
        break;
      case R.ResizingS:
        this.selectionRect.height += s;
        break;
      case R.ResizingW:
        this.selectionRect.x += o, this.selectionRect.width -= o;
        break;
      case R.ResizingE:
        this.selectionRect.width += o;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n && n !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === f.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
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
        const t = this.draggedAnnotation.getData(), n = this.pendingDragSnapshot.annotations.find((o) => o.id === t.id);
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
      const o = i.getBounds();
      o && (this.resizeStartBounds = { ...o }), this.selectedAnnotation !== i && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = i, this.selectedAnnotation.updateData({ selected: !0 }));
    }
  }
  // 更新标注缩放
  updateAnnotationResize(t) {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation) return;
    const n = this.resizingAnnotation.getData();
    if (n.points.length < 2) return;
    const i = n.points[0];
    switch (this.resizeOperation) {
      case R.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, n.points[1]]
        });
        break;
      case R.ResizingAnnotationSE:
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
        const t = this.resizingAnnotation.getData(), n = this.pendingResizeSnapshot.annotations.find((o) => o.id === t.id);
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
    const o = this.selectionRect;
    let s = !1, a = [...i.points];
    if (i.points.length >= 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        l.x < o.x ? (a[r] = { ...l, x: o.x }, s = !0) : l.x > o.x + o.width && (a[r] = { ...l, x: o.x + o.width }, s = !0), l.y < o.y ? (a[r] = { ...l, y: o.y }, s = !0) : l.y > o.y + o.height && (a[r] = { ...l, y: o.y + o.height }, s = !0);
      }
    if (i.points.length > 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        (l.x < o.x || l.x > o.x + o.width || l.y < o.y || l.y > o.y + o.height) && (a.splice(r, 1), r--, s = !0);
      }
    s && t.updateData({ points: a });
  }
  // 更新悬停状态
  updateHoverState(t) {
    if (this.currentTool !== f.Select) {
      this.updateToolCursor();
      return;
    }
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = n && n.getData().type !== f.Mosaic ? n : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== f.Select) {
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
    ), o = {
      [R.Moving]: "move",
      [R.ResizingNW]: "nw-resize",
      [R.ResizingNE]: "ne-resize",
      [R.ResizingSW]: "sw-resize",
      [R.ResizingSE]: "se-resize",
      [R.ResizingN]: "n-resize",
      [R.ResizingS]: "s-resize",
      [R.ResizingW]: "w-resize",
      [R.ResizingE]: "e-resize",
      [R.EditingAnnotation]: "pointer",
      [R.MovingAnnotation]: "move",
      [R.ResizingAnnotationNW]: "nw-resize",
      [R.ResizingAnnotationSE]: "se-resize",
      [R.Drawing]: "crosshair"
    }[n] || "default";
    this.updateCursor(o);
  }
  // 更新画布cursor样式
  updateCursor(t) {
    this.canvas.style.cursor !== t && (this.canvas.style.cursor = t);
  }
  // 根据当前工具更新光标样式
  updateToolCursor() {
    switch (this.currentTool) {
      case f.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case f.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case f.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case f.Rectangle:
      case f.Ellipse:
      case f.Line:
      case f.Arrow:
      case f.Text:
      case f.Marker:
        this.updateCursor("crosshair");
        break;
      default:
        this.updateCursor("default");
    }
  }
  // 创建圆形光标（用于画笔和马赛克）
  createCircleCursor(t, n = "#666") {
    const i = Math.max(t / 2, 2), o = i * 2 + 4, s = o / 2, a = `
      <svg width="${o}" height="${o}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${s}" cy="${s}" r="${i}"
                fill="none" stroke="${n}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${s}" cy="${s}" r="1" fill="${n}" opacity="0.9"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(a)}') ${s} ${s}, crosshair`;
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
    if (this.drawingEngine.clear(), this.backgroundImage ? this.drawBackground() : this.drawPendingState(), this.selectionRect && this.drawingEngine.drawMask(this.selectionRect), this.showSnapPreview && this.getActiveSelectionCandidate() && !this.selectionRect && this.drawSnapPreview(), this.annotations.length > 0) {
      const t = this.editingAnnotation?.getData().type === f.Text ? this.annotations.filter((n) => n.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
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
    const { x: n, y: i, width: o, height: s } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const w = n + o / 2, S = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(n, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let I = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? I = "正在启动 AI 模型服务..." : I = "正在由 AI 识图翻译..."), t.fillText(I, w, S), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const w = n + o / 2, S = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(n, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, w, S), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: n, y: i, width: o, height: s }, l = this.sampleRegionColor(r), h = l.brightness < 128;
    let u, d;
    if (h) {
      const w = Math.max(0, Math.round(l.r * 0.1)), S = Math.max(0, Math.round(l.g * 0.1)), I = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${w}, ${S}, ${I}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const w = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), S = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), I = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${w}, ${S}, ${I}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(n, i, o, s), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const v = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((w) => ({
      text: w.text,
      translatedText: w.translatedText,
      blocks: [w],
      bbox: {
        x: w.x,
        y: w.y,
        width: w.width,
        height: w.height
      },
      isCodeBlock: w.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: w.fontSize,
      lineHeight: w.lineHeight,
      angle: w.angle
    })), y = v.filter((w) => w.isStructuredBlock), M = v.filter((w) => !w.isStructuredBlock);
    M.length > 0 && this.drawFlowedTranslationBlocks(t, M, n, i, a, o, s);
    for (const w of y)
      this.drawStructuredTranslationBlock(t, w, n, i, a, o, s);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, o, s, a, r) {
    const l = [...n].filter((T) => (T.translatedText || T.text).trim()).sort((T, U) => {
      const Z = T.bbox.y - U.bbox.y;
      return Math.abs(Z) > 4 ? Z : T.bbox.x - U.bbox.x;
    });
    if (l.length === 0)
      return;
    const h = Math.max(24, r - s * 2), u = s, d = (T, U, Z) => l.map((G) => {
      const V = (G.translatedText || G.text).trim(), H = Math.max(12, Math.min(G.fontSize || 16, 48)), Q = Math.max(8, Math.round(H * T)), K = G.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', tt = Math.max(
        s,
        Math.min(G.bbox.x + s, a * 0.38)
      ), nt = U ? s : tt, st = Math.max(48, a - nt - u), wt = G.lineHeight || Q * 1.35, it = Math.max(
        Q * (Z ? 1.04 : 1.14),
        Math.min(wt * T, Q * (Z ? 1.18 : 1.42))
      );
      return t.font = `${Q}px ${K}`, {
        text: V,
        fontSize: Q,
        fontFamily: K,
        lineHeight: it,
        paragraphGap: Z ? Math.max(1, it * 0.16) : Math.max(3, it * 0.35),
        x: i + nt,
        lines: this.wrapTextToLines(t, V, st)
      };
    }), v = (T) => T.reduce((U, Z, G) => {
      const V = G === T.length - 1 ? 0 : Z.paragraphGap;
      return U + Z.lines.length * Z.lineHeight + V;
    }, 0);
    let y = d(1, !1, !1), M = v(y);
    if (M > h) {
      const T = Math.max(0.56, h / M);
      y = d(T, !1, !1), M = v(y);
    }
    if (M > h && (y = d(1, !0, !1), M = v(y)), M > h) {
      const T = Math.max(0.38, h / M * 0.96);
      y = d(T, !0, !0), M = v(y);
    }
    if (M > h) {
      const T = Math.max(0.3, h / M * 0.94);
      y = d(T, !0, !0), M = v(y);
    }
    const w = Math.min(...l.map((T) => T.bbox.y)), S = o + Math.max(s, Math.min(w, r - s)), I = o + r - s;
    let z = S + M > I ? o + s : S;
    for (const T of y) {
      t.font = `${T.fontSize}px ${T.fontFamily}`;
      for (const U of T.lines)
        t.fillText(U, T.x, z), z += T.lineHeight;
      z += T.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, o, s, a, r) {
    const l = [...n.blocks].sort((d, v) => d.x - v.x), h = Math.max(12, Math.min(n.fontSize || 14, 32)), u = n.lineHeight || h * 1.35;
    t.font = `${h}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const v = d.translatedText || d.text;
      if (!v.trim()) continue;
      const y = i + d.x + Math.min(4, s), M = o + d.y, w = l.find((T) => T.x > d.x), S = w ? Math.max(d.width, w.x - d.x - 8) : Math.max(d.width, a - d.x - s), I = this.wrapTextToLines(t, v.trim(), S);
      let z = M;
      for (const T of I) {
        if (z + h > o + r) break;
        t.fillText(T, y, z), z += u;
      }
    }
  }
  /**
   * 将文字按宽度换行，返回行数组
   */
  wrapTextToLines(t, n, i) {
    const o = n.replace(/\s+/g, " ").trim();
    if (!o)
      return [];
    const s = [], a = /\s/.test(o) ? o.split(/(\s+)/).filter((h) => h.length > 0) : Array.from(o);
    let r = "";
    const l = (h) => {
      let u = "";
      for (const d of Array.from(h)) {
        const v = u + d;
        t.measureText(v).width > i && u !== "" ? (s.push(u), u = d) : u = v;
      }
      r = u;
    };
    for (const h of a) {
      const u = /^\s+$/.test(h), d = u ? " " : h, v = r + d;
      if (t.measureText(v).width <= i) {
        r = v;
        continue;
      }
      r.trim() && (s.push(r.trimEnd()), r = ""), !u && (t.measureText(d).width > i ? l(d) : r = d);
    }
    return r.trim() && s.push(r.trimEnd()), s;
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
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), i;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, v = this.canvas.height / o, y = h / d, M = u / v, w = t.x * y, S = t.y * M, I = t.width * y, z = t.height * M;
    try {
      l.drawImage(
        this.backgroundImage,
        w,
        S,
        I,
        z,
        0,
        0,
        s,
        a
      );
    } catch (X) {
      return P.error("[截图] 采样区域绘制失败", X), this.canvasPool.release(r), i;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (X) {
      return P.error("[截图] 获取像素数据失败", X), this.canvasPool.release(r), i;
    }
    const U = T.data, Z = Math.ceil(Math.sqrt(n)), G = s / (Z + 1), V = a / (Z + 1);
    let H = 0, Q = 0, K = 0, tt = 0;
    for (let X = 1; X <= Z; X++)
      for (let ot = 1; ot <= Z && !(tt >= n); ot++) {
        const pt = Math.floor(ot * G), yt = Math.floor(X * V);
        if (pt >= 0 && pt < s && yt >= 0 && yt < a) {
          const O = (yt * s + pt) * 4;
          O >= 0 && O + 2 < U.length && (H += U[O], Q += U[O + 1], K += U[O + 2], tt++);
        }
      }
    if (this.canvasPool.release(r), tt === 0)
      return i;
    const nt = Math.round(H / tt), st = Math.round(Q / tt), wt = Math.round(K / tt), it = this.getBrightness(nt, st, wt);
    return {
      r: nt,
      g: st,
      b: wt,
      brightness: it
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
    const o = Math.max(0, Math.min(255, t)), s = Math.max(0, Math.min(255, n)), a = Math.max(0, Math.min(255, i));
    return Math.round(0.299 * o + 0.587 * s + 0.114 * a);
  }
  /**
   * 根据采样颜色计算覆盖层样式
   * 深色背景（亮度 < 128）：使用深色半透明背景 + 浅色文字
   * 浅色背景（亮度 >= 128）：使用浅色半透明背景 + 深色文字
   * @param sampledColor 采样得到的背景颜色
   * @returns 覆盖层样式
   */
  calculateOverlayStyle(t) {
    const { brightness: n } = t, i = n < 128, o = n / 255, a = 0.85 + Math.abs(o - 0.5) * 2 * 0.1;
    let r, l;
    if (i) {
      const h = Math.max(0, Math.round(t.r * 0.2)), u = Math.max(0, Math.round(t.g * 0.2)), d = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${h}, ${u}, ${d}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const h = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), u = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), d = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${h}, ${u}, ${d}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
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
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, v = this.canvas.height / o, y = h / d, M = u / v, w = t.x * y, S = t.y * M, I = t.width * y, z = t.height * M;
    try {
      l.drawImage(
        this.backgroundImage,
        w,
        S,
        I,
        z,
        0,
        0,
        s,
        a
      );
    } catch (X) {
      return P.error("[截图] isUniformColor: 采样区域绘制失败", X), this.canvasPool.release(r), !1;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (X) {
      return P.error("[截图] isUniformColor: 获取像素数据失败", X), this.canvasPool.release(r), !1;
    }
    const U = T.data, Z = Math.ceil(Math.sqrt(i)), G = s / (Z + 1), V = a / (Z + 1), H = [];
    for (let X = 1; X <= Z; X++)
      for (let ot = 1; ot <= Z && !(H.length >= i); ot++) {
        const pt = Math.floor(ot * G), yt = Math.floor(X * V);
        if (pt >= 0 && pt < s && yt >= 0 && yt < a) {
          const O = (yt * s + pt) * 4;
          O >= 0 && O + 2 < U.length && H.push({
            r: U[O],
            g: U[O + 1],
            b: U[O + 2]
          });
        }
      }
    if (this.canvasPool.release(r), H.length < 2)
      return !1;
    const Q = H.reduce((X, ot) => X + ot.r, 0) / H.length, K = H.reduce((X, ot) => X + ot.g, 0) / H.length, tt = H.reduce((X, ot) => X + ot.b, 0) / H.length, nt = H.reduce((X, ot) => X + Math.pow(ot.r - Q, 2), 0) / H.length, st = H.reduce((X, ot) => X + Math.pow(ot.g - K, 2), 0) / H.length, wt = H.reduce((X, ot) => X + Math.pow(ot.b - tt, 2), 0) / H.length;
    return (nt + st + wt) / 3 < n;
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
    const n = t * 0.8, i = t * 0.85, s = Math.max(12, Math.min(n, i));
    return Math.round(s);
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
  fitTextToWidth(t, n, i, o) {
    if (!t || t.length === 0)
      return i;
    if (n <= 0 || i <= 12)
      return 12;
    const r = n - 4 * 2;
    if (r <= 0)
      return 12;
    let l = i;
    const h = o.font;
    for (; l > 12 && (o.font = `${l}px sans-serif`, !(o.measureText(t).width <= r)); )
      l -= 1;
    return o.font = h, Math.max(l, 12);
  }
  // 绘制窗口吸附预览
  drawSnapPreview() {
    const t = this.getActiveSelectionCandidate();
    if (!t) return;
    const { rect: n } = t, i = this.canvas.getContext("2d");
    if (i) {
      if (i.save(), i.strokeStyle = "#00a8ff", i.lineWidth = 2, i.setLineDash([5, 5]), i.fillStyle = "rgba(0, 168, 255, 0.1)", i.fillRect(
        n.x,
        n.y,
        n.width,
        n.height
      ), i.strokeRect(
        n.x,
        n.y,
        n.width,
        n.height
      ), t.label) {
        i.setLineDash([]), i.font = "12px sans-serif", i.fillStyle = "#00a8ff", i.textAlign = "center", i.textBaseline = "bottom";
        const s = si(n).x, a = n.y > 28 ? n.y - 5 : n.y + 20, r = i.measureText(t.label), l = 4;
        i.fillStyle = "rgba(0, 0, 0, 0.7)", i.fillRect(
          s - r.width / 2 - l,
          a - 12 - l,
          r.width + l * 2,
          16
        ), i.fillStyle = "#00a8ff", i.fillText(t.label, s, a);
      }
      i.restore();
    }
  }
  // 设置工具
  setTool(t) {
    this.currentTool = t, this.clearSelection(), this.showGuides = t === f.Select, this.colorPickerState.isActive = t === f.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== f.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== f.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.snappedElement = null, this.showSnapPreview = !1, this.pendingSnapCandidate = null, this.smartDetectionSequence += 1, this.smartDetectionTimer !== null && (window.clearTimeout(this.smartDetectionTimer), this.smartDetectionTimer = null), this.dragStartPosition = null, t !== f.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === f.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (an.isDrawingTool(this.currentTool)) {
      if (this.currentTool === f.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = an.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          markerNumber: this.currentTool === f.Marker ? this.getNextMarkerNumber() : void 0,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  getNextMarkerNumber() {
    return this.annotations.reduce((t, n) => n.getData().type !== f.Marker ? t : Math.max(t, n.getData().markerNumber || 0), 0) + 1;
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const n = this.currentAnnotation.getData();
    switch (n.type) {
      case f.Rectangle:
      case f.Ellipse:
      case f.Line:
      case f.Arrow:
        t = this.getConstrainedShapeEndPoint(n.type, n.points[0], t), n.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case f.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case f.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  getConstrainedShapeEndPoint(t, n, i) {
    if (!this.isShiftPressed) return i;
    const o = i.x - n.x, s = i.y - n.y;
    if (t === f.Ellipse || t === f.Rectangle) {
      const a = Math.max(Math.abs(o), Math.abs(s));
      return {
        x: n.x + Math.sign(o || 1) * a,
        y: n.y + Math.sign(s || 1) * a
      };
    }
    if (t === f.Line || t === f.Arrow) {
      const a = Math.sqrt(o * o + s * s), r = Math.PI / 4, l = Math.round(Math.atan2(s, o) / r) * r;
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
      t.type === f.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const n = this.currentAnnotation.getData().points;
    if (n.length < 3) return;
    let i = n[0].x, o = n[0].x, s = n[0].y, a = n[0].y;
    n.forEach((y) => {
      i = Math.min(i, y.x), o = Math.max(o, y.x), s = Math.min(s, y.y), a = Math.max(a, y.y);
    });
    const r = o - i, l = a - s;
    let h = 0;
    for (let y = 1; y < n.length; y++)
      h += St(n[y - 1], n[y]);
    const d = St(n[0], n[n.length - 1]) / h, v = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || v > 5) {
      const y = n[0], M = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [y, M] });
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
    const i = an.createAnnotation(
      f.Text,
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
      const { x: n, y: i, width: o, height: s } = this.selectionRect, r = (await b("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, o, s);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const h = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await b("copy_to_clipboard", { image: h }) : await b("save_screenshot_to_file", { image: h });
    } catch (n) {
      const i = t === "save" ? "保存" : "复制";
      throw P.error(`[截图] ${i}截图失败`, n), new Error(`${i}截图失败: ${n?.message || n?.toString() || "未知错误"}`);
    }
  }
  // 从背景图像裁剪指定区域
  async cropFromBackground(t, n, i, o, s = {}) {
    return new Promise(async (a, r) => {
      const l = setTimeout(() => {
        r(new Error("裁剪背景图像超时"));
      }, 1e4);
      try {
        if (!this.backgroundImage) {
          let ft = 0;
          for (; !this.backgroundImage && ft < 3e3; )
            await new Promise((F) => setTimeout(F, 100)), ft += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const h = window.devicePixelRatio || 1, u = Math.max(0, s.padding || 0), d = this.canvas.width / h, v = this.canvas.height / h, y = t - u, M = n - u, w = i + u * 2, S = o + u * 2, I = Math.max(1, Math.round(w * h)), z = Math.max(1, Math.round(S * h)), T = Math.max(0, y), U = Math.max(0, M), Z = Math.min(d, y + w), G = Math.min(v, M + S), V = Math.max(0, Z - T), H = Math.max(0, G - U), Q = Math.round(T * h), K = Math.round(U * h), tt = Math.min(
          this.canvas.width - Q,
          Math.round(V * h)
        ), nt = Math.min(
          this.canvas.height - K,
          Math.round(H * h)
        ), st = Math.round((T - y) * h), wt = Math.round((U - M) * h), it = document.createElement("canvas");
        it.width = I, it.height = z;
        const X = it.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!X)
          throw new Error("无法获取2D绘图上下文");
        X.imageSmoothingEnabled = !1, s.fillColor && (X.fillStyle = s.fillColor, X.fillRect(0, 0, I, z)), tt > 0 && nt > 0 && X.drawImage(
          this.backgroundImage,
          Q,
          K,
          tt,
          nt,
          st,
          wt,
          tt,
          nt
        );
        const pt = it.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: pt,
          adjusted_width: I,
          adjusted_height: z,
          logical_x: y,
          logical_y: M,
          logical_width: w,
          logical_height: S
        });
      } catch (h) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${h.message || h}`));
      }
    });
  }
  // 渲染带标注的图像
  async renderWithAnnotations(t, n, i) {
    return new Promise((o, s) => {
      const a = setTimeout(() => {
        s(new Error("渲染标注超时"));
      }, 15e3), r = document.createElement("canvas");
      r.width = t.adjusted_width, r.height = t.adjusted_height;
      const l = r.getContext("2d", {
        alpha: !0,
        desynchronized: !1,
        willReadFrequently: !1
      });
      if (!l) {
        clearTimeout(a), s(new Error("无法获取2D绘图上下文"));
        return;
      }
      l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high";
      const h = new Image();
      h.onload = () => {
        try {
          if (l.drawImage(h, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const d = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, v = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, y = this.drawingEngine.createScreenshotContext(
              l,
              d,
              v
            );
            this.annotations.forEach((M, w) => {
              try {
                M.drawToScreenshot(y);
              } catch (S) {
                P.error(`[截图] 绘制标注 ${w} 失败`, S);
              }
            });
          }
          let u;
          u = r.toDataURL("image/png"), clearTimeout(a), o(u);
        } catch (u) {
          P.error("[截图] 绘制过程出错", u);
          try {
            const d = r.toDataURL("image/png");
            clearTimeout(a), o(d);
          } catch {
            clearTimeout(a), s(new Error(`渲染失败: ${u.message || u}`));
          }
        }
      }, h.onerror = (u) => {
        P.error("[截图] 图像加载失败", u), clearTimeout(a), s(new Error("图像加载失败"));
      }, h.src = `data:image/png;base64,${t.image}`;
    });
  }
  // 获取当前状态
  getState() {
    return {
      selectionRect: this.selectionRect,
      selectionMode: this.selectionMode,
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === f.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === f.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const n = this.annotations.findIndex((i) => i === t);
    n !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(n, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字或序号标记的说明内容
  updateTextAnnotation(t, n) {
    if (t.getData().type === f.Text || t.getData().type === f.Marker) {
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
        const { x: n, y: i, width: o, height: s } = this.selectionRect, a = await b("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), h = Math.round(a.y + i * r), u = Math.round(o * r), d = Math.round(s * r), v = Math.round(a.x + window.innerWidth * r), y = Math.round(a.y + window.innerHeight * r), M = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, v - a.x)) : u, w = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, y - a.y)) : d, S = t === "ocr" ? Math.round(l - Math.max(0, M - u) / 2) : l, I = t === "ocr" ? Math.max(a.x, Math.min(S, v - M)) : l, z = t === "ocr" ? Math.max(a.y, Math.min(h, y - w)) : h, T = {}, U = await this.cropFromBackground(n, i, o, s, T);
        if (!U?.image)
          throw new Error("Failed to crop from background image");
        const Z = await this.renderWithAnnotations(U, r, "save");
        await b("create_pin_window", {
          mode: t,
          imageData: Z,
          x: I,
          y: z,
          width: M,
          height: w
        }), this.onStateChange?.(), setTimeout(() => {
          new en("screenshot").close();
        }, 100);
      } catch (n) {
        throw P.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, n), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await b("get_window_info"), i = n?.scale || 1, o = Math.round(n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), s = Math.round(n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await b("get_pixel_color", {
          x: o,
          y: s
        }), r = this.rgbToHex(a.r, a.g, a.b), l = {
          rgb: a,
          hex: r,
          position: t
        };
        this.onColorPicked?.(l), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3);
      } catch (n) {
        P.error("[截图] 获取像素颜色失败", n);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const n = await b("get_window_info"), i = n?.scale || 1, o = this.colorPickerState.zoomFactor, s = Math.floor(o / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await b("get_screen_preview", {
          x: a - s,
          y: r - s,
          width: o,
          height: o
        }), h = new Image();
        h.src = `data:image/png;base64,${l.image}`, await h.decode();
        const u = await createImageBitmap(h);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const v = new OffscreenCanvas(o, o).getContext("2d");
        if (v) {
          v.drawImage(u, 0, 0, o, o);
          const y = v.getImageData(s, s, 1, 1).data, M = { r: y[0], g: y[1], b: y[2] }, w = this.rgbToHex(M.r, M.g, M.b);
          this.colorPickerState.colorInfo = { rgb: M, hex: w, position: t };
        }
        this.draw();
      } catch (n) {
        P.error("[截图] 更新颜色预览失败", n);
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
    const o = (s) => {
      const a = Math.max(0, Math.min(255, Math.round(s))).toString(16);
      return a.length === 1 ? "0" + a : a;
    };
    return `#${o(t)}${o(n)}${o(i)}`.toUpperCase();
  }
  // ==================== OCR翻译功能 ====================
  // 执行OCR识别和翻译
  async performOcrTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage)) {
      if (this.translationOverlay.engine === "local-ai") {
        await this.performVisionTranslation();
        return;
      }
      try {
        const t = performance.now();
        let n = 0, i = 0, o = 0, s = 0, a = 0;
        const { x: r, y: l, width: h, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, v = h * d, y = u * d, M = this.canvasPool.acquire(v, y), w = M.getContext("2d");
        if (!w)
          throw this.canvasPool.release(M), new Error("无法创建临时canvas");
        const S = r * d, I = l * d, z = performance.now();
        w.drawImage(
          this.backgroundImage,
          S,
          I,
          v,
          y,
          0,
          0,
          v,
          y
        ), n = Math.round(performance.now() - z);
        const T = performance.now(), { recognizeFromCanvas: U } = await me.loadOCR();
        i = Math.round(performance.now() - T);
        const Z = performance.now(), G = await U(M);
        o = Math.round(performance.now() - Z), this.canvasPool.release(M);
        const V = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          confidence: G.confidence,
          rawLineCount: G.blocks.length,
          textLength: G.full_text.trim().length
        };
        P.info("[OCR] 识别耗时统计", V), Ct.log("[OCR] recognition timing", V);
        const H = G.blocks, Q = performance.now(), K = Lo(H);
        s = Math.round(performance.now() - Q);
        const tt = K.map((_) => _.text).join(`

`), nt = {
          rawLineCount: H.length,
          paragraphCount: K.length,
          durationMs: s,
          paragraphs: K.map((_, et) => ({
            index: et,
            text: _.text,
            blockCount: _.blocks.length,
            isCodeBlock: !!_.isCodeBlock,
            isStructuredBlock: !!_.isStructuredBlock,
            bbox: _.bbox,
            sourceBlocks: _.blocks.map((ct) => ({
              text: ct.text,
              x: ct.x,
              y: ct.y,
              width: ct.width,
              height: ct.height
            }))
          }))
        };
        if (P.info("[OCR] 版面重组完成", nt), Ct.log("[OCR] layout reflow complete", nt), !tt || !tt.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const st = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(fe(tt));
        const wt = (_) => {
          const et = _.trim();
          return !!(et.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !et.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let it = "";
        const X = fe(tt), ot = {
          detectedLanguage: X,
          textLength: tt.trim().length,
          textPreview: tt.trim().slice(0, 500)
        };
        P.info("[OCR] 翻译语言检测完成", ot), Ct.log("[OCR] translation language detected", ot), Pe(X) && (this.translationOverlay.sourceLanguage = X, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(X));
        const pt = st === "offline" ? me.loadOfflineTranslator() : null, yt = (_) => _.includes("插件") && _.includes("未启用") ? _.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : _ : st === "offline" ? _.includes("未激活") || _.includes("未下载") || _.includes("运行时未安装") ? _ : _.includes("超时") ? "模型加载超时，请重试" : _.includes("离线翻译暂仅支持") ? _ : "离线翻译失败: " + _.substring(0, 50) : _.includes("timeout") || _.includes("超时") ? "翻译超时，请检查网络连接" : _.includes("network") || _.includes("网络") || _.includes("请求") || _.includes("令牌") ? "翻译失败，请检查网络连接" : _.trim() ? _.slice(0, 80) : "翻译失败，请检查网络连接", O = async () => {
          if (!pt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: _,
            canUseOfflineTranslation: et,
            warmupOfflineTranslator: ct,
            getModelCacheInfo: vt
          } = await pt, Mt = et();
          if (this.offlineModelActivated && !Mt)
            if ((await vt()).isCached)
              await ct();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return _;
        }, ft = async (_, et, ct) => {
          if (!_.trim())
            return _;
          if (st === "offline") {
            if (et !== "en" || ct !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await O())(_);
          }
          return await b("translate_text", {
            text: _,
            from: et,
            to: ct,
            engine: st
          });
        }, F = (_) => {
          const et = _.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(et) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(et);
        }, Rt = async (_, et, ct) => {
          const vt = _.trim();
          if (!vt || wt(vt))
            return _;
          const Mt = _.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Mt) {
            const [, k, E, q, lt, mt] = Mt, At = fe(E), qt = F(E) || !Pe(At) ? E : await ft(E, At, this.getAutoTargetLanguage(At)), It = fe(lt), Be = Pe(It) && !wt(lt) ? await ft(lt, It, this.getAutoTargetLanguage(It)) : lt;
            return `${k}${qt}${q}${Be}${mt}`;
          }
          if (F(vt))
            return _;
          const dt = fe(vt);
          if (!Pe(dt))
            return _;
          const te = this.getAutoTargetLanguage(dt), bt = await ft(vt, dt, te), Pt = {
            paragraphIndex: et,
            blockIndex: ct,
            sourceLanguage: dt,
            targetLanguage: te,
            sourceText: vt,
            translatedText: bt.slice(0, 200)
          };
          return P.info("[OCR] 结构化块翻译完成", Pt), Ct.log("[OCR] structured block translation complete", Pt), bt;
        }, Lt = async (_, et) => {
          const ct = performance.now(), vt = (bt) => ({
            index: et,
            durationMs: Math.round(performance.now() - ct),
            ...bt
          }), Mt = fe(_.text), dt = this.getAutoTargetLanguage(Mt), te = {
            index: et,
            text: _.text,
            sourceLanguage: Mt,
            targetLanguage: dt,
            engine: st,
            structured: !!_.isStructuredBlock
          };
          if (P.info("[OCR] 段落翻译方向", te), Ct.log("[OCR] paragraph translation direction", te), !Pe(Mt)) {
            _.translatedText = _.text;
            const bt = vt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), Pt = {
              index: et,
              detectedLanguage: Mt,
              durationMs: bt.durationMs,
              text: _.text
            };
            return P.warn("[OCR] 跳过不支持的段落语言", Pt), Ct.log("[OCR] skip unsupported paragraph language", Pt), bt;
          }
          try {
            if (_.isStructuredBlock && _.blocks.length > 0) {
              const k = async (q, lt) => {
                const mt = await Rt(q.text, et, lt);
                return q.translatedText = mt, mt;
              }, E = [];
              if (st === "offline")
                for (let q = 0; q < _.blocks.length; q += 1)
                  E.push(await k(_.blocks[q], q));
              else
                E.push(
                  ...await Promise.all(
                    _.blocks.map((q, lt) => k(q, lt))
                  )
                );
              _.translatedText = E.join(" ");
            } else if (wt(_.text) || _.isCodeBlock) {
              _.translatedText = _.text;
              const k = _.isCodeBlock ? "code_block" : "command_like_text", E = vt({ skipped: !0, cancelled: !1 }), q = {
                index: et,
                reason: k,
                durationMs: E.durationMs,
                text: _.text
              };
              return P.info("[OCR] 跳过代码段翻译", q), Ct.log("[OCR] skip code paragraph translation", q), E;
            } else
              _.translatedText = await ft(
                _.text,
                Mt,
                dt
              );
            const bt = vt({ skipped: !1, cancelled: !1 }), Pt = {
              index: et,
              durationMs: bt.durationMs,
              sourceLanguage: Mt,
              targetLanguage: dt,
              engine: st,
              structured: !!_.isStructuredBlock,
              sourceLength: _.text.length,
              translatedLength: (_.translatedText || "").length,
              translatedPreview: (_.translatedText || "").slice(0, 300)
            };
            return P.info("[OCR] 段落翻译完成", Pt), Ct.log("[OCR] paragraph translation complete", Pt), bt;
          } catch (bt) {
            const Pt = bt instanceof Error ? bt.message : String(bt);
            if (Pt === "翻译已取消")
              return vt({ skipped: !1, cancelled: !0 });
            _.translatedText = _.text;
            const k = yt(Pt), E = vt({
              skipped: !1,
              cancelled: !1,
              errorMessage: k
            }), q = {
              index: et,
              durationMs: E.durationMs,
              sourceLanguage: Mt,
              targetLanguage: dt,
              engine: st,
              error: Pt,
              structured: !!_.isStructuredBlock,
              text: _.text
            };
            return P.error("[OCR] 段落翻译失败", q), Ct.log("[OCR] paragraph translation failed", q), E;
          }
        }, jt = performance.now();
        let ut = [];
        if (st === "offline")
          for (let _ = 0; _ < K.length; _ += 1) {
            const et = await Lt(K[_], _);
            if (ut.push(et), et.cancelled)
              return;
            if (et.errorMessage) {
              it = et.errorMessage;
              break;
            }
          }
        else {
          if (ut = await Promise.all(
            K.map((_, et) => Lt(_, et))
          ), ut.some((_) => _.cancelled))
            return;
          it = ut.find((_) => _.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - jt);
        const _t = {
          durationMs: a,
          engine: st,
          paragraphCount: K.length,
          translatedParagraphCount: ut.filter((_) => !_.skipped && !_.errorMessage).length,
          skippedParagraphCount: ut.filter((_) => _.skipped).length,
          failedParagraphCount: ut.filter((_) => !!_.errorMessage).length
        };
        P.info("[OCR] 翻译耗时统计", _t), Ct.log("[OCR] translation timing", _t);
        const Et = K.map((_) => this.toDisplayParagraph(_, d)), ie = Et.map((_) => this.toLegacyOverlayBlock(_));
        this.translationOverlay.blocks = ie, this.translationOverlay.paragraphBlocks = Et, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = it || void 0;
        const Gt = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          reflowDurationMs: s,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: H.length,
          paragraphCount: K.length,
          engine: st
        };
        P.info("[OCR] 截图翻译总耗时统计", Gt), Ct.log("[OCR] pipeline timing", Gt), this.draw(), this.onStateChange?.();
      } catch (t) {
        P.error("[OCR] OCR翻译失败:", t);
        const n = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(n), this.draw(), this.onStateChange?.();
      }
    }
  }
  async performVisionTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const { x: t, y: n, width: i, height: o } = this.selectionRect;
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await hr()).running || (P.info("[截图] AI 服务未运行，正在启动..."), await ur(), P.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, n, i, o);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((S) => setTimeout(S, 100));
        const l = (await dr({
          temperature: 0.2,
          maxTokens: 4096,
          messages: [
            {
              role: "system",
              content: [
                "You are a visual translation engine.",
                "Read the text in the supplied screenshot directly; do not describe the image and do not copy source text.",
                "The target language is always Simplified Chinese. Translate every readable non-Chinese fragment (including English, Japanese, Korean, and other languages) into Simplified Chinese.",
                "For mixed-language screenshots, retain existing Simplified Chinese and translate only the non-Chinese fragments, preserving their original reading order.",
                "Preserve headings, paragraphs, lists, tables, code, numbers, URLs, labels, and the reading order as faithfully as possible.",
                "Do not use English as the target language. Return only the final translated text, with no source-language label, explanation, or Markdown fence."
              ].join(" ")
            },
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Translate all readable text in this screenshot."
                },
                {
                  type: "image_url",
                  image_url: {
                    url: `data:image/png;base64,${a.image}`
                  }
                }
              ]
            }
          ]
        })).content.trim();
        if (!l)
          throw new Error("AI 未返回可显示的翻译结果");
        const h = Math.max(14, Math.min(20, Math.round(o / 18))), u = Math.max(18, Math.min(28, Math.round(o / 12))), d = l.split(/\n\n+/).filter((S) => S.trim()), v = Math.max(d.length, 1), y = (o - 16) / v, M = d.map((S, I) => {
          const z = I * y + 8, T = I === v - 1 ? o - z - 8 : y, U = {
            text: "",
            translatedText: S.trim(),
            x: 0,
            y: z,
            width: i,
            height: T,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: S.trim(),
            blocks: [U],
            bbox: { x: 0, y: z, width: i, height: T },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
        }), w = M.length > 0 ? M : [{
          text: "",
          translatedText: l,
          blocks: [{
            text: "",
            translatedText: l,
            x: 0,
            y: 0,
            width: i,
            height: o,
            fontSize: h,
            lineHeight: u,
            angle: 0
          }],
          bbox: { x: 0, y: 0, width: i, height: o },
          isCodeBlock: !1,
          isStructuredBlock: !1,
          fontSize: h,
          lineHeight: u,
          angle: 0
        }];
        this.translationOverlay.blocks = w.map((S) => S.blocks[0]), this.translationOverlay.paragraphBlocks = w, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
      } catch (t) {
        const n = t instanceof Error ? t.message : String(t);
        P.error("[截图] AI 识图翻译失败", t), this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.errorMessage = n.includes("mmproj") || n.includes("vision") ? "AI 翻译需要在“本地 AI”中配置视觉模型（mmproj）" : `AI 识图翻译失败：${n.slice(0, 80)}`, this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await me.loadOfflineTranslator();
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
    me.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.smartDetectionTimer !== null && (window.clearTimeout(this.smartDetectionTimer), this.smartDetectionTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.smartDetectionSequence += 1, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var il = {
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
function ol() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function sl(e, t, n) {
  var i = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], s = t.theme || n.theme;
  switch (s) {
    case "outline":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("none"), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : n.colors.multiColor.outFillColor), o.push(typeof i[2] == "string" ? i[2] : n.colors.multiColor.innerStrokeColor), o.push(typeof i[3] == "string" ? i[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: o,
    id: e
  };
}
var al = Symbol("icon-context");
function at(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = ol(), r = we(al, il);
      return function() {
        var l = s.size, h = s.strokeWidth, u = s.strokeLinecap, d = s.strokeLinejoin, v = s.theme, y = s.fill, M = s.spin, w = sl(a, {
          size: l,
          strokeWidth: h,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: v,
          fill: y
        }, r), S = [r.prefix + "-icon"];
        return S.push(r.prefix + "-icon-" + e), t && r.rtl && S.push(r.prefix + "-icon-rtl"), M && S.push(r.prefix + "-icon-spin"), m("span", {
          class: S.join(" ")
        }, [n(w)]);
      };
    }
  };
  return i;
}
const rl = at("arrow-right-up", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M19 11H37V29",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Kn = at("check", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jn = at("close", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fn = at("copy", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ll = at("delete-four", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 11L40 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M18 5L30 5",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qi = at("down", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), cl = at("download", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hl = at("font-size", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M24 6V42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M16 42H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ul = at("go-on", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dl = at("list-numbers", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M20 9H42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M20 19H42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M20 29H42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M20 39H42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 29H12V32L6 38V39H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M7 11L9 9V19M9 19H7M9 19H11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ki = at("loading", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $o = at("minus", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gl = at("more", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), m("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), m("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), fl = at("mosaic", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M44 36H36V44H44V36Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M28 36H20V44H28V36Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M12 36H4V44H12V36Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M44 20H36V28H44V20Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M28 20H20V28H28V20Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M12 20H4V28H12V20Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M44 4H36V12H44V4Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M28 4H20V12H28V4Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M12 4H4V12H12V4Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M20 12H12V20H20V12Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M20 28H12V36H20V28Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M36 12H28V20H36V12Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M36 28H28V36H36V28Z",
    fill: e.colors[0]
  }, null)]);
}), ml = at("move-one", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pl = at("picture", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ji = at("pin", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [m("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), m("defs", null, [m("clipPath", {
    id: e.id + "1c742167"
  }, [m("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Qi = at("platte", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Qn = at("pushpin", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wl = at("rectangle-one", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), yl = at("redo", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M42 8V17H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), vl = at("refresh", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = at("return", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), kl = at("round", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), to = at("save", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), m("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bl = at("square", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Ue = at("text-recognition", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wo = at("translate", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sl = at("write", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ml = { class: "toolbar-panel first-panel" }, Cl = { class: "tool-section" }, _l = ["onClick", "title", "aria-pressed"], Tl = { class: "action-section" }, zl = ["disabled", "title"], Rl = ["disabled", "title"], Ll = ["disabled", "title"], Pl = ["title"], Al = ["title"], Il = ["title"], Dl = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Ol = { class: "style-section" }, El = {
  key: 0,
  class: "style-group"
}, $l = { class: "style-label" }, Wl = { class: "line-width-selector" }, Bl = ["onClick", "title", "aria-pressed"], Nl = { class: "style-value" }, Hl = {
  key: 1,
  class: "style-divider"
}, jl = {
  key: 2,
  class: "style-group opacity-group"
}, Fl = { class: "style-label" }, Vl = ["value", "title", "aria-label"], Ul = { class: "style-value" }, Yl = {
  key: 3,
  class: "style-divider"
}, Zl = {
  key: 4,
  class: "style-group color-picker-group"
}, Xl = { class: "style-label" }, Gl = { class: "color-row" }, ql = ["onClick", "title", "aria-pressed"], Kl = { class: "custom-color-wrapper" }, Jl = ["title"], Ql = ["value", "title", "aria-label"], tc = {
  key: 5,
  class: "style-group"
}, ec = { class: "style-label" }, nc = { class: "text-size-selector" }, ic = ["onClick", "title", "aria-pressed"], oc = { class: "style-value" }, sc = {
  key: 6,
  class: "style-group"
}, ac = { class: "style-label" }, rc = { class: "mosaic-size-selector" }, lc = ["onClick", "title", "aria-pressed"], cc = { class: "style-value" }, hc = {
  key: 7,
  class: "style-group"
}, uc = { class: "style-label" }, dc = { class: "translate-engine-selector" }, gc = ["onClick", "title", "aria-pressed"], fc = /* @__PURE__ */ zt({
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
    const i = N(null), { t: o } = oi(), s = e, a = n, r = $(() => [
      { type: f.Select, icon: ml, title: o("screenshot.select") },
      { type: f.Rectangle, icon: wl, title: o("screenshot.rectangle") },
      { type: f.Ellipse, icon: kl, title: o("screenshot.ellipse") },
      { type: f.Line, icon: $o, title: o("screenshot.line") },
      { type: f.Arrow, icon: rl, title: o("screenshot.arrow") },
      { type: f.Pen, icon: Sl, title: o("screenshot.pen") },
      { type: f.Mosaic, icon: fl, title: o("screenshot.mosaic") },
      { type: f.Text, icon: hl, title: o("screenshot.text") },
      { type: f.Marker, icon: dl, title: o("screenshot.marker") },
      { type: f.ColorPicker, icon: Qi, title: o("screenshot.colorPicker") },
      { type: f.Ocr, icon: Ue, title: o("screenshot.ocr") },
      { type: f.Translate, icon: Wo, title: o("screenshot.translate") },
      { type: f.Pin, icon: Qn, title: o("screenshot.pin") }
    ]), l = $(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: o("translate.bingTranslate"), short: "B" },
      { value: "offline", label: o("translate.offlineTranslate"), short: o("translate.offlineMark") },
      { value: "local-ai", label: o("translate.localAiTranslate"), short: "AI" }
    ]), h = [2, 3, 5, 8], u = [
      "#ff4444",
      "#f79009",
      "#fdb022",
      "#12b76a",
      "#06b6d4",
      "#2e90fa",
      "#7a5af8",
      "#d444f1",
      "#111827"
    ], d = [12, 14, 16, 18, 20, 24], v = [8, 12, 16, 20], y = $(() => ![f.Select, f.ColorPicker, f.Ocr, f.Pin].includes(s.currentTool)), M = $(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen].includes(s.currentTool)
    ), w = $(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen, f.Text, f.Marker].includes(s.currentTool)
    ), S = $(
      () => [
        f.Rectangle,
        f.Ellipse,
        f.Line,
        f.Arrow,
        f.Pen,
        f.Mosaic,
        f.Text,
        f.Marker
      ].includes(s.currentTool)
    ), I = $(
      () => s.currentTool === f.Text || s.currentTool === f.Marker
    ), z = $(() => s.currentTool === f.Mosaic), T = $(() => s.currentTool === f.Translate), U = (O) => a("tool-select", O), Z = (O) => a("color-change", O), G = (O) => a("line-width-change", O), V = (O) => {
      a("opacity-change", Number(O.target.value) / 100);
    }, H = (O) => a("text-size-change", O), Q = (O) => a("mosaic-size-change", O), K = () => a("undo"), tt = () => a("redo"), nt = () => a("delete"), st = () => a("save"), wt = () => a("confirm"), it = () => a("cancel"), X = (O) => {
      a("translate-engine-change", O);
    }, ot = (O) => {
      Z(O);
    }, pt = (O) => {
      const ft = O.target;
      ft.value && Z(ft.value);
    }, yt = () => {
      const O = i.value?.getBoundingClientRect();
      return {
        width: O?.width ?? 590,
        height: O?.height ?? 50
      };
    };
    return Ee(() => s.currentTool, () => {
      ye(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: yt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: yt
    }), (O, ft) => (L(), D(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        j(" 第一个面板：工具选择 + 操作按钮 "),
        x("div", Ml, [
          j(" 工具选择区域 "),
          x("div", Cl, [
            (L(!0), D(
              Bt,
              null,
              Zt(r.value, (F) => (L(), D("button", {
                key: F.type,
                onClick: (Rt) => U(F.type),
                class: rt(["tool-btn", { active: O.currentTool === F.type }]),
                title: F.title,
                "aria-pressed": O.currentTool === F.type
              }, [
                (L(), Tt(he(F.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, _l))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          j(" 分隔线 "),
          ft[0] || (ft[0] = x(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          j(" 操作按钮区域 "),
          x("div", Tl, [
            x("button", {
              onClick: K,
              disabled: !O.canUndo,
              class: "action-btn undo",
              title: C(o)("screenshot.undo")
            }, [
              m(C(xl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, zl),
            x("button", {
              onClick: tt,
              disabled: !O.canRedo,
              class: "action-btn redo",
              title: C(o)("screenshot.redo")
            }, [
              m(C(ul), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Rl),
            x("button", {
              onClick: nt,
              disabled: !O.canDelete,
              class: "action-btn delete",
              title: C(o)("screenshot.delete")
            }, [
              m(C(ll), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ll),
            x("button", {
              onClick: it,
              class: "action-btn cancel",
              title: C(o)("screenshot.cancel")
            }, [
              m(C(Jn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Pl),
            x("button", {
              onClick: st,
              class: "action-btn save",
              title: C(o)("screenshot.save")
            }, [
              m(C(cl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Al),
            x("button", {
              onClick: wt,
              class: "action-btn confirm",
              title: C(o)("screenshot.confirm")
            }, [
              m(C(Kn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Il)
          ])
        ]),
        j(" 第二个面板：样式设置区域 "),
        y.value ? (L(), D("div", Dl, [
          x("div", Ol, [
            j(" 线宽设置 "),
            M.value ? (L(), D("div", El, [
              x(
                "span",
                $l,
                Y(C(o)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              x("div", Wl, [
                (L(), D(
                  Bt,
                  null,
                  Zt(h, (F) => x("button", {
                    key: F,
                    onClick: (Rt) => G(F),
                    class: rt(["width-btn", { active: O.currentLineWidth === F }]),
                    title: `${F}px`,
                    "aria-pressed": O.currentLineWidth === F
                  }, [
                    x(
                      "span",
                      {
                        class: "line-preview",
                        style: gt({ height: `${F}px`, backgroundColor: O.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Bl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                Nl,
                Y(O.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            M.value && w.value ? (L(), D("div", Hl)) : j("v-if", !0),
            j(" 不透明度设置 "),
            S.value ? (L(), D("div", jl, [
              x(
                "span",
                Fl,
                Y(C(o)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              x("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(O.currentOpacity * 100),
                style: gt({
                  "--opacity-color": O.currentColor,
                  "--opacity-progress": `${Math.round(O.currentOpacity * 100)}%`
                }),
                title: `${Math.round(O.currentOpacity * 100)}%`,
                "aria-label": C(o)("screenshot.opacity"),
                onInput: V
              }, null, 44, Vl),
              x(
                "span",
                Ul,
                Y(Math.round(O.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            S.value && w.value ? (L(), D("div", Yl)) : j("v-if", !0),
            j(" 颜色设置 "),
            w.value ? (L(), D("div", Zl, [
              x(
                "span",
                Xl,
                Y(C(o)("screenshot.color")),
                1
                /* TEXT */
              ),
              x("div", Gl, [
                (L(), D(
                  Bt,
                  null,
                  Zt(u, (F) => x("button", {
                    key: F,
                    onClick: (Rt) => ot(F),
                    class: rt(["color-btn", { active: O.currentColor === F }]),
                    style: gt({ backgroundColor: F }),
                    title: F,
                    "aria-pressed": O.currentColor === F
                  }, null, 14, ql)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                x("div", Kl, [
                  x("button", {
                    class: rt(["color-btn custom-color-btn", { active: !u.includes(O.currentColor) }]),
                    title: C(o)("screenshot.customColor")
                  }, [
                    m(C(Qi), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Jl),
                  x("input", {
                    type: "color",
                    onChange: pt,
                    value: O.currentColor,
                    class: "color-input-hidden",
                    title: C(o)("screenshot.customColor"),
                    "aria-label": C(o)("screenshot.customColor")
                  }, null, 40, Ql)
                ])
              ])
            ])) : j("v-if", !0),
            j(" 文字大小设置 "),
            I.value ? (L(), D("div", tc, [
              x(
                "span",
                ec,
                Y(C(o)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              x("div", nc, [
                (L(), D(
                  Bt,
                  null,
                  Zt(d, (F) => x("button", {
                    key: F,
                    onClick: (Rt) => H(F),
                    class: rt(["size-btn", { active: O.currentTextSize === F }]),
                    title: `${F}px`,
                    "aria-pressed": O.currentTextSize === F
                  }, [
                    x(
                      "span",
                      {
                        class: "size-text",
                        style: gt({ fontSize: `${Math.min(F, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, ic)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                oc,
                Y(O.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            j(" 马赛克大小设置 "),
            z.value ? (L(), D("div", sc, [
              x(
                "span",
                ac,
                Y(C(o)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              x("div", rc, [
                (L(), D(
                  Bt,
                  null,
                  Zt(v, (F) => x("button", {
                    key: F,
                    onClick: (Rt) => Q(F),
                    class: rt(["size-btn", { active: O.currentMosaicSize === F }]),
                    title: `${C(o)("screenshot.brush")} ${F * 3}px`,
                    "aria-pressed": O.currentMosaicSize === F
                  }, [
                    x(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: gt({
                          width: `${Math.min(F * 1.25, 18)}px`,
                          height: `${Math.min(F * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, lc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                cc,
                Y(O.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            j(" 翻译引擎选择 "),
            T.value ? (L(), D("div", hc, [
              x(
                "span",
                uc,
                Y(C(o)("screenshot.engine")),
                1
                /* TEXT */
              ),
              x("div", dc, [
                (L(!0), D(
                  Bt,
                  null,
                  Zt(l.value, (F) => (L(), D("button", {
                    key: F.value,
                    onClick: (Rt) => X(F.value),
                    class: rt(["engine-btn", { active: O.currentTranslateEngine === F.value }]),
                    title: F.label,
                    "aria-pressed": O.currentTranslateEngine === F.value
                  }, Y(F.short), 11, gc))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : j("v-if", !0)
          ])
        ])) : j("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), _n = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, mc = /* @__PURE__ */ _n(fc, [["__scopeId", "data-v-f5f5269f"]]), pc = {
  class: "screenshot-container",
  ref: "containerRef"
}, wc = {
  key: 0,
  class: "mask-layers"
}, yc = {
  key: 1,
  class: "mask-full"
}, vc = ["aria-pressed", "onClick"], xc = { class: "ml-1 border-l border-white/15 px-2 text-[11px] text-white/55" }, kc = { class: "size-text" }, bc = {
  key: 5,
  class: "loading-overlay"
}, Sc = /* @__PURE__ */ zt({
  __name: "index",
  setup(e) {
    const { t } = oi(), n = N(), i = N(), o = N(null), s = N(null);
    let a = null;
    const r = N(!0), l = N(!1), h = N(""), u = N({ x: 0, y: 0 }), d = N(16), v = N(!1), y = N("bing"), M = N({ width: 590, height: 50 });
    let w = !1, S = null;
    const I = $(() => [
      { value: "smart", label: t("screenshot.smartSelect") },
      { value: "window", label: t("screenshot.windowSelect") },
      { value: "fullscreen", label: t("screenshot.fullscreenSelect") }
    ]), z = N({
      selectionRect: null,
      selectionMode: "smart",
      annotations: [],
      currentTool: f.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
      textSize: 16,
      mosaicSize: 8,
      hasSelection: !1,
      hasAnnotations: !1,
      canRedo: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), T = N(), U = N(), Z = $(() => z.value.isDrawing), G = $(() => {
      if (!z.value.selectionRect) return {};
      const { y: k } = z.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${k}px`
      };
    }), V = $(() => {
      if (!z.value.selectionRect) return {};
      const { y: k, height: E } = z.value.selectionRect;
      return {
        top: `${k + E}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), H = $(() => {
      if (!z.value.selectionRect) return {};
      const { x: k, y: E, height: q } = z.value.selectionRect;
      return {
        top: `${E}px`,
        left: "0",
        width: `${k}px`,
        height: `${q}px`
      };
    }), Q = $(() => {
      if (!z.value.selectionRect) return {};
      const { x: k, y: E, width: q, height: lt } = z.value.selectionRect;
      return {
        top: `${E}px`,
        left: `${k + q}px`,
        right: "0",
        height: `${lt}px`
      };
    }), K = $(() => {
      if (!z.value.selectionRect) return {};
      const { x: k, y: E, width: q, height: lt } = z.value.selectionRect, mt = 10, At = 12, qt = Math.min(M.value.width, Math.max(0, window.innerWidth - mt * 2)), It = Math.min(M.value.height, Math.max(0, window.innerHeight - mt * 2)), Be = Math.max(mt, window.innerHeight - It - mt), Ne = Math.max(mt, window.innerWidth - qt - mt);
      let Ut;
      return E + lt + It + At <= window.innerHeight - mt ? Ut = E + lt + At : E - It - At >= mt ? Ut = E - It - At : Ut = E + lt - It - mt, Ut = Math.min(Math.max(Ut, mt), Be), {
        left: `${Math.min(Math.max(k + (q - qt) / 2, mt), Ne)}px`,
        top: `${Ut}px`
      };
    }), tt = $(() => {
      if (!z.value.selectionRect) return {};
      const { x: k, y: E, width: q, height: lt } = z.value.selectionRect, mt = 10;
      let At = k - mt, qt = E - mt, It = "translateY(-100%)";
      return At < 10 && (At = k + q + mt, It = "translateY(-100%)"), qt < 30 && (qt = E + lt + mt, It = "translateY(0)"), {
        left: `${At}px`,
        top: `${qt}px`,
        transform: It
      };
    }), nt = $(() => {
      if (!z.value.selectionRect) return "";
      const { width: k, height: E } = z.value.selectionRect;
      return `${Math.round(k)} × ${Math.round(E)}`;
    }), st = $(
      () => S?.getData().style.color || z.value.currentStyle.color
    ), wt = $(() => {
      const k = S?.getData().type === f.Marker ? Xn(u.value, d.value) : Re(u.value);
      return {
        "--text-accent-color": st.value,
        left: `${k.x}px`,
        top: `${k.y}px`
      };
    }), it = (k) => {
      if (k === f.Pin && z.value.selectionRect) {
        ot();
        return;
      }
      if (k === f.Ocr && z.value.selectionRect) {
        pt();
        return;
      }
      a?.setTool(k);
    }, X = (k) => {
      a?.setSelectionMode(k);
    }, ot = async () => {
      try {
        await a?.createPinWindow();
      } catch (k) {
        P.error("[截图] 创建贴图失败", k);
      }
    }, pt = async () => {
      try {
        await a?.createOcrPinWindow();
      } catch (k) {
        P.error("[截图] 创建文字识别贴图失败", k);
      }
    }, yt = (k) => {
      a?.updateStyle({ color: k });
    }, O = (k) => {
      a?.updateStyle({ lineWidth: k });
    }, ft = (k) => {
      a?.updateStyle({ opacity: k });
    }, F = (k) => {
      a?.updateTextSize(k);
    }, Rt = (k) => {
      a?.updateMosaicSize(k);
    }, Lt = (k) => {
      y.value = k, a?.setTranslationEngine(k), a?.executeTranslation();
    }, jt = () => {
      a?.undoAnnotation();
    }, ut = () => {
      a?.redoAnnotation();
    }, _t = () => {
      a?.deleteSelectedAnnotation();
    }, Et = async () => {
      try {
        await a?.processScreenshot("save"), dt();
      } catch (k) {
        const E = k?.message || k?.toString() || "保存失败";
        if (E.includes("保存已取消") || E.includes("cancelled"))
          return;
        P.error("保存截图时发生错误", E);
      }
    }, ie = async () => {
      try {
        await a?.processScreenshot("copy"), dt();
      } catch {
      }
    }, Gt = () => {
      dt();
    }, _ = (k, E) => {
      if (E && [f.Text, f.Marker].includes(E.getData().type)) {
        const q = E.getData();
        u.value = {
          x: q.points[0].x,
          y: q.points[0].y
        }, d.value = q.fontSize || z.value.textSize;
      } else
        u.value = k, d.value = z.value.textSize;
      l.value = !0, S = E || null, E && a?.setEditingAnnotation(E), E && E.getData().text ? h.value = E.getData().text || "" : h.value = "", ye(() => {
        i.value?.focus(), S && i.value?.select();
      });
    }, et = () => {
      const k = S?.getData().type === f.Marker;
      h.value.trim() || k ? S ? a?.updateTextAnnotation(S, h.value.trim()) : a?.createTextAnnotation(u.value, h.value) : S && a?.deleteAnnotation(S), ct();
    }, ct = () => {
      l.value = !1, h.value = "", S && a?.clearEditingAnnotation(), S = null;
    }, vt = (k) => {
      navigator.clipboard && navigator.clipboard.writeText(k.hex).catch((E) => {
        P.error("[截图] 复制颜色到剪贴板失败", E);
      });
    }, Mt = (k) => {
      if (k.key === "Meta" || k.key === "Win" || k.altKey && k.key === "Tab" || k.altKey && k.key === "F4") {
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (l.value && document.activeElement === i.value) {
        if (k.key === "Escape") {
          ct(), k.preventDefault();
          return;
        }
        if (k.key === "Enter") {
          et(), k.preventDefault();
          return;
        }
        if (k.key === "Tab") {
          k.preventDefault();
          return;
        }
        return;
      }
      if (!z.value.selectionRect) {
        if (k.key === "Escape") {
          dt();
          return;
        }
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (a?.handleKeyDown(k)) {
        k.preventDefault();
        return;
      }
      const E = navigator.platform.toLowerCase().includes("mac");
      if ((E ? k.metaKey : k.ctrlKey) && k.key.toLowerCase() === "z") {
        k.shiftKey ? ut() : jt(), k.preventDefault();
        return;
      }
      if (!E && k.ctrlKey && k.key.toLowerCase() === "y") {
        ut(), k.preventDefault();
        return;
      }
      if (k.key === "Escape") {
        dt();
        return;
      } else if (k.key === "Delete" || k.key === "Backspace") {
        _t(), k.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(k.key) || k.preventDefault();
    }, dt = async () => {
      if (!w) {
        w = !0, a?.destroy(), a = null;
        try {
          await b("cleanup_screenshot_resources");
        } catch {
          try {
            await b("clear_screenshot_background");
          } catch (E) {
            P.error("[截图] 清理后台缓存失败", E);
          }
        }
        z.value = {
          selectionRect: null,
          selectionMode: "smart",
          annotations: [],
          currentTool: f.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, l.value = !1, h.value = "", S = null, v.value = !1, r.value = !0;
        try {
          await b("close_and_destroy_screenshot_window");
        } catch (k) {
          P.error("[截图] 销毁截图窗口失败，回退到 close()", k), await s.value?.close();
        } finally {
          w = !1;
        }
      }
    }, te = () => {
      const k = a?.getState();
      k && (z.value = k);
    }, bt = () => {
      const k = o.value?.getToolbarSize?.();
      k && (M.value = k);
    }, Pt = (k) => {
      const E = k.detail;
      E && (M.value = E);
    };
    return tn(async () => {
      if (n.value) {
        s.value = new en("screenshot"), a = new nl(
          n.value,
          te,
          _,
          vt
        ), document.addEventListener("keydown", Mt), window.addEventListener("resize", bt), window.addEventListener("screenshot-toolbar-resize", Pt), U.value = await yn("screenshot-close-requested", () => {
          dt();
        }), T.value = await yn("tauri://blur", () => {
          if (l.value && document.activeElement === i.value)
            return;
          const k = a?.getTranslationState();
          k?.isLoading || k?.isVisible || setTimeout(() => {
            if (!l.value || document.activeElement !== i.value) {
              const E = a?.getTranslationState();
              if (E?.isLoading || E?.isVisible)
                return;
              dt();
            }
          }, 100);
        }), await ye(), bt(), await s.value.emit("screenshot_ready");
        try {
          const k = await b("get_translation_engine");
          k && ["google", "bing", "offline", "local-ai"].includes(k) && (y.value = k, a?.setTranslationEngine(k));
        } catch (k) {
          P.error("[截图] 获取翻译引擎设置失败", k);
        }
        try {
          const k = await b("get_offline_model_activated");
          a?.setOfflineModelActivated(k);
        } catch (k) {
          P.error("[截图] 获取离线模型激活状态失败", k);
        }
      }
    }), xo(() => {
      a?.destroy(), a = null, document.removeEventListener("keydown", Mt), window.removeEventListener("resize", bt), window.removeEventListener("screenshot-toolbar-resize", Pt), T.value?.(), U.value?.(), T.value = void 0, U.value = void 0, s.value = null;
    }), (k, E) => (L(), D(
      "div",
      pc,
      [
        j(" 遮罩层 "),
        z.value.selectionRect ? (L(), D("div", wc, [
          x(
            "div",
            {
              class: "mask-top",
              style: gt(G.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-bottom",
              style: gt(V.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-left",
              style: gt(H.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-right",
              style: gt(Q.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (L(), D("div", yc)),
        j(" 画布 "),
        x(
          "canvas",
          {
            ref_key: "canvasRef",
            ref: n,
            class: "drawing-canvas"
          },
          null,
          512
          /* NEED_PATCH */
        ),
        z.value.selectionRect ? j("v-if", !0) : (L(), D(
          "div",
          {
            key: 2,
            class: "fixed left-1/2 top-4 z-10 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-white/15 bg-[rgb(16_24_40/88%)] p-1 text-white shadow-xl backdrop-blur-xl",
            onMousedown: E[0] || (E[0] = ht(() => {
            }, ["stop"])),
            onMouseup: E[1] || (E[1] = ht(() => {
            }, ["stop"]))
          },
          [
            (L(!0), D(
              Bt,
              null,
              Zt(I.value, (q) => (L(), D("button", {
                key: q.value,
                type: "button",
                class: rt([
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  z.value.selectionMode === q.value ? "bg-white text-gray-900" : "text-white/75 hover:bg-white/10 hover:text-white"
                ]),
                "aria-pressed": z.value.selectionMode === q.value,
                onClick: (lt) => X(q.value)
              }, Y(q.label), 11, vc))),
              128
              /* KEYED_FRAGMENT */
            )),
            x(
              "span",
              xc,
              Y(k.$t("screenshot.freeSelectHint")),
              1
              /* TEXT */
            )
          ],
          32
          /* NEED_HYDRATION */
        )),
        j(" 尺寸信息 "),
        z.value.selectionRect && r.value ? (L(), D(
          "div",
          {
            key: 3,
            class: "size-info",
            style: gt(tt.value)
          },
          [
            x(
              "span",
              kc,
              Y(nt.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : j("v-if", !0),
        j(" 工具栏 "),
        z.value.selectionRect && !Z.value ? (L(), Tt(mc, {
          key: 4,
          ref_key: "toolbarRef",
          ref: o,
          style: gt(K.value),
          class: "toolbar",
          "current-tool": z.value.currentTool,
          "current-color": z.value.currentStyle.color,
          "current-line-width": z.value.currentStyle.lineWidth,
          "current-opacity": z.value.currentStyle.opacity,
          "current-text-size": z.value.textSize,
          "current-mosaic-size": z.value.mosaicSize,
          "can-undo": z.value.hasAnnotations,
          "can-redo": z.value.canRedo,
          "can-delete": !!z.value.selectedAnnotation,
          "current-translate-engine": y.value,
          onToolSelect: it,
          onColorChange: yt,
          onLineWidthChange: O,
          onOpacityChange: ft,
          onTextSizeChange: F,
          onMosaicSizeChange: Rt,
          onTranslateEngineChange: Lt,
          onUndo: jt,
          onRedo: ut,
          onDelete: _t,
          onSave: Et,
          onConfirm: ie,
          onCancel: Gt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : j("v-if", !0),
        j(" 加载提示 - 仅在初始化时显示 "),
        v.value ? (L(), D("div", bc, [
          E[3] || (E[3] = x(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          x(
            "p",
            null,
            Y(k.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : j("v-if", !0),
        j(" 文字输入框 "),
        l.value ? (L(), D(
          "div",
          {
            key: 6,
            class: "text-input-container",
            style: gt(wt.value)
          },
          [
            Ge(x(
              "input",
              {
                ref_key: "textInputRef",
                ref: i,
                "onUpdate:modelValue": E[2] || (E[2] = (q) => h.value = q),
                type: "text",
                class: "text-input",
                style: gt({
                  color: st.value,
                  fontFamily: C(se),
                  fontSize: d.value + "px",
                  height: d.value + "px",
                  lineHeight: d.value + "px"
                }),
                onKeydown: [
                  Wi(et, ["enter"]),
                  Wi(ct, ["escape"])
                ],
                onBlur: et,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [ta, h.value]
            ])
          ],
          4
          /* STYLE */
        )) : j("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Mc = /* @__PURE__ */ _n(Sc, [["__scopeId", "data-v-78df8f9f"]]), Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mc
}, Symbol.toStringTag, { value: "Module" })), Bo = Symbol(), fn = "el", _c = "is-", ge = (e, t, n, i, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), i && (s += `__${i}`), o && (s += `--${o}`), s;
}, No = Symbol("namespaceContextKey"), Tc = (e) => {
  const t = e || (Ae() ? we(No, N(fn)) : N(fn));
  return $(() => C(t) || fn);
}, di = (e, t) => {
  const n = Tc(t);
  return {
    namespace: n,
    b: (w = "") => ge(n.value, e, w, "", ""),
    e: (w) => w ? ge(n.value, e, "", w, "") : "",
    m: (w) => w ? ge(n.value, e, "", "", w) : "",
    be: (w, S) => w && S ? ge(n.value, e, w, S, "") : "",
    em: (w, S) => w && S ? ge(n.value, e, "", w, S) : "",
    bm: (w, S) => w && S ? ge(n.value, e, w, "", S) : "",
    bem: (w, S, I) => w && S && I ? ge(n.value, e, w, S, I) : "",
    is: (w, ...S) => {
      const I = S.length >= 1 ? S[0] : !0;
      return w && I ? `${_c}${w}` : "";
    },
    cssVar: (w) => {
      const S = {};
      for (const I in w)
        w[I] && (S[`--${n.value}-${I}`] = w[I]);
      return S;
    },
    cssVarName: (w) => `--${n.value}-${w}`,
    cssVarBlock: (w) => {
      const S = {};
      for (const I in w)
        w[I] && (S[`--${n.value}-${e}-${I}`] = w[I]);
      return S;
    },
    cssVarBlockName: (w) => `--${n.value}-${e}-${w}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const zc = Object.prototype.hasOwnProperty, eo = (e, t) => zc.call(e, t), Je = (e) => typeof e == "function", ke = (e) => typeof e == "string", Ho = (e) => e !== null && typeof e == "object";
var Rc = typeof global == "object" && global && global.Object === Object && global, Lc = typeof self == "object" && self && self.Object === Object && self, gi = Rc || Lc || Function("return this")(), Ie = gi.Symbol, jo = Object.prototype, Pc = jo.hasOwnProperty, Ac = jo.toString, Fe = Ie ? Ie.toStringTag : void 0;
function Ic(e) {
  var t = Pc.call(e, Fe), n = e[Fe];
  try {
    e[Fe] = void 0;
    var i = !0;
  } catch {
  }
  var o = Ac.call(e);
  return i && (t ? e[Fe] = n : delete e[Fe]), o;
}
var Dc = Object.prototype, Oc = Dc.toString;
function Ec(e) {
  return Oc.call(e);
}
var $c = "[object Null]", Wc = "[object Undefined]", no = Ie ? Ie.toStringTag : void 0;
function Fo(e) {
  return e == null ? e === void 0 ? Wc : $c : no && no in Object(e) ? Ic(e) : Ec(e);
}
function Bc(e) {
  return e != null && typeof e == "object";
}
var Nc = "[object Symbol]";
function fi(e) {
  return typeof e == "symbol" || Bc(e) && Fo(e) == Nc;
}
function Hc(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, o = Array(i); ++n < i; )
    o[n] = t(e[n], n, e);
  return o;
}
var mi = Array.isArray, io = Ie ? Ie.prototype : void 0, oo = io ? io.toString : void 0;
function Vo(e) {
  if (typeof e == "string")
    return e;
  if (mi(e))
    return Hc(e, Vo) + "";
  if (fi(e))
    return oo ? oo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Uo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var jc = "[object AsyncFunction]", Fc = "[object Function]", Vc = "[object GeneratorFunction]", Uc = "[object Proxy]";
function Yc(e) {
  if (!Uo(e))
    return !1;
  var t = Fo(e);
  return t == Fc || t == Vc || t == jc || t == Uc;
}
var Vn = gi["__core-js_shared__"], so = function() {
  var e = /[^.]+$/.exec(Vn && Vn.keys && Vn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zc(e) {
  return !!so && so in e;
}
var Xc = Function.prototype, Gc = Xc.toString;
function qc(e) {
  if (e != null) {
    try {
      return Gc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Kc = /[\\^$.*+?()[\]{}|]/g, Jc = /^\[object .+?Constructor\]$/, Qc = Function.prototype, th = Object.prototype, eh = Qc.toString, nh = th.hasOwnProperty, ih = RegExp(
  "^" + eh.call(nh).replace(Kc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oh(e) {
  if (!Uo(e) || Zc(e))
    return !1;
  var t = Yc(e) ? ih : Jc;
  return t.test(qc(e));
}
function sh(e, t) {
  return e?.[t];
}
function Yo(e, t) {
  var n = sh(e, t);
  return oh(n) ? n : void 0;
}
function ah(e, t) {
  return e === t || e !== e && t !== t;
}
var rh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lh = /^\w*$/;
function ch(e, t) {
  if (mi(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || fi(e) ? !0 : lh.test(e) || !rh.test(e) || t != null && e in Object(t);
}
var Qe = Yo(Object, "create");
function hh() {
  this.__data__ = Qe ? Qe(null) : {}, this.size = 0;
}
function uh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var dh = "__lodash_hash_undefined__", gh = Object.prototype, fh = gh.hasOwnProperty;
function mh(e) {
  var t = this.__data__;
  if (Qe) {
    var n = t[e];
    return n === dh ? void 0 : n;
  }
  return fh.call(t, e) ? t[e] : void 0;
}
var ph = Object.prototype, wh = ph.hasOwnProperty;
function yh(e) {
  var t = this.__data__;
  return Qe ? t[e] !== void 0 : wh.call(t, e);
}
var vh = "__lodash_hash_undefined__";
function xh(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Qe && t === void 0 ? vh : t, this;
}
function be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
be.prototype.clear = hh;
be.prototype.delete = uh;
be.prototype.get = mh;
be.prototype.has = yh;
be.prototype.set = xh;
function kh() {
  this.__data__ = [], this.size = 0;
}
function Tn(e, t) {
  for (var n = e.length; n--; )
    if (ah(e[n][0], t))
      return n;
  return -1;
}
var bh = Array.prototype, Sh = bh.splice;
function Mh(e) {
  var t = this.__data__, n = Tn(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : Sh.call(t, n, 1), --this.size, !0;
}
function Ch(e) {
  var t = this.__data__, n = Tn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function _h(e) {
  return Tn(this.__data__, e) > -1;
}
function Th(e, t) {
  var n = this.__data__, i = Tn(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function $e(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
$e.prototype.clear = kh;
$e.prototype.delete = Mh;
$e.prototype.get = Ch;
$e.prototype.has = _h;
$e.prototype.set = Th;
var zh = Yo(gi, "Map");
function Rh() {
  this.size = 0, this.__data__ = {
    hash: new be(),
    map: new (zh || $e)(),
    string: new be()
  };
}
function Lh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function zn(e, t) {
  var n = e.__data__;
  return Lh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ph(e) {
  var t = zn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ah(e) {
  return zn(this, e).get(e);
}
function Ih(e) {
  return zn(this, e).has(e);
}
function Dh(e, t) {
  var n = zn(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Me.prototype.clear = Rh;
Me.prototype.delete = Ph;
Me.prototype.get = Ah;
Me.prototype.has = Ih;
Me.prototype.set = Dh;
var Oh = "Expected a function";
function pi(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Oh);
  var n = function() {
    var i = arguments, o = t ? t.apply(this, i) : i[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var a = e.apply(this, i);
    return n.cache = s.set(o, a) || s, a;
  };
  return n.cache = new (pi.Cache || Me)(), n;
}
pi.Cache = Me;
var Eh = 500;
function $h(e) {
  var t = pi(e, function(i) {
    return n.size === Eh && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Wh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bh = /\\(\\)?/g, Nh = $h(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Wh, function(n, i, o, s) {
    t.push(o ? s.replace(Bh, "$1") : i || n);
  }), t;
});
function Hh(e) {
  return e == null ? "" : Vo(e);
}
function jh(e, t) {
  return mi(e) ? e : ch(e, t) ? [e] : Nh(Hh(e));
}
function Fh(e) {
  if (typeof e == "string" || fi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Vh(e, t) {
  t = jh(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Fh(t[n++])];
  return n && n == i ? e : void 0;
}
function Uh(e, t, n) {
  var i = e == null ? void 0 : Vh(e, t);
  return i === void 0 ? n : i;
}
function Yh(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var o = e[t];
    i[o[0]] = o[1];
  }
  return i;
}
const Zo = (e) => e === void 0, ao = (e) => typeof e == "boolean", Se = (e) => typeof e == "number", ti = (e) => typeof Element > "u" ? !1 : e instanceof Element, Zh = (e) => ke(e) ? !Number.isNaN(Number(e)) : !1;
var ro;
const Ce = typeof window < "u", Xh = (e) => typeof e == "string", Gh = () => {
};
Ce && ((ro = window?.navigator) != null && ro.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wi(e) {
  return typeof e == "function" ? e() : C(e);
}
function qh(e) {
  return e;
}
function yi(e) {
  return na() ? (ia(e), !0) : !1;
}
function Kh(e, t = !0) {
  Ae() ? tn(e) : t ? e() : ye(e);
}
function Xo(e, t, n = {}) {
  const {
    immediate: i = !0
  } = n, o = N(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function r() {
    o.value = !1, a();
  }
  function l(...h) {
    a(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...h);
    }, wi(t));
  }
  return i && (o.value = !0, Ce && l()), yi(r), {
    isPending: ea(o),
    start: l,
    stop: r
  };
}
function Go(e) {
  var t;
  const n = wi(e);
  return (t = n?.$el) != null ? t : n;
}
const qo = Ce ? window : void 0;
function Ko(...e) {
  let t, n, i, o;
  if (Xh(e[0]) || Array.isArray(e[0]) ? ([n, i, o] = e, t = qo) : [t, n, i, o] = e, !t)
    return Gh;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const s = [], a = () => {
    s.forEach((u) => u()), s.length = 0;
  }, r = (u, d, v, y) => (u.addEventListener(d, v, y), () => u.removeEventListener(d, v, y)), l = Ee(() => [Go(t), wi(o)], ([u, d]) => {
    a(), u && s.push(...n.flatMap((v) => i.map((y) => r(u, v, y, d))));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), a();
  };
  return yi(h), h;
}
function Jh(e, t = !1) {
  const n = N(), i = () => n.value = !!e();
  return i(), Kh(i, t), n;
}
const lo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, co = "__vueuse_ssr_handlers__";
lo[co] = lo[co] || {};
var ho = Object.getOwnPropertySymbols, Qh = Object.prototype.hasOwnProperty, tu = Object.prototype.propertyIsEnumerable, eu = (e, t) => {
  var n = {};
  for (var i in e)
    Qh.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && ho)
    for (var i of ho(e))
      t.indexOf(i) < 0 && tu.call(e, i) && (n[i] = e[i]);
  return n;
};
function nu(e, t, n = {}) {
  const i = n, { window: o = qo } = i, s = eu(i, ["window"]);
  let a;
  const r = Jh(() => o && "ResizeObserver" in o), l = () => {
    a && (a.disconnect(), a = void 0);
  }, h = Ee(() => Go(e), (d) => {
    l(), r.value && o && d && (a = new ResizeObserver(t), a.observe(d, s));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), h();
  };
  return yi(u), {
    isSupported: r,
    stop: u
  };
}
var uo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(uo || (uo = {}));
var iu = Object.defineProperty, go = Object.getOwnPropertySymbols, ou = Object.prototype.hasOwnProperty, su = Object.prototype.propertyIsEnumerable, fo = (e, t, n) => t in e ? iu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, au = (e, t) => {
  for (var n in t || (t = {}))
    ou.call(t, n) && fo(e, n, t[n]);
  if (go)
    for (var n of go(t))
      su.call(t, n) && fo(e, n, t[n]);
  return e;
};
const ru = {
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
au({
  linear: qh
}, ru);
const mo = {
  current: 0
}, po = N(0), Jo = 2e3, wo = Symbol("elZIndexContextKey"), Qo = Symbol("zIndexContextKey"), lu = (e) => {
  const t = Ae() ? we(wo, mo) : mo, n = e || (Ae() ? we(Qo, void 0) : void 0), i = $(() => {
    const a = C(n);
    return Se(a) ? a : Jo;
  }), o = $(() => i.value + po.value), s = () => (t.current++, po.value = t.current, o.value);
  return !Ce && we(wo), {
    initialZIndex: i,
    currentZIndex: o,
    nextZIndex: s
  };
};
var cu = {
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
const hu = (e) => (t, n) => uu(t, n, C(e)), uu = (e, t, n) => Uh(n, e, e).replace(/\{(\w+)\}/g, (i, o) => {
  var s;
  return `${(s = t?.[o]) != null ? s : `{${o}}`}`;
}), du = (e) => {
  const t = $(() => C(e).name), n = oa(e) ? e : N(e);
  return {
    lang: t,
    locale: n,
    t: hu(e)
  };
}, ts = Symbol("localeContextKey"), gu = (e) => {
  const t = e || we(ts, N());
  return du($(() => t.value || cu));
}, es = "__epPropKey", Vt = (e) => e, fu = (e) => Ho(e) && !!e[es], ns = (e, t) => {
  if (!Ho(e) || fu(e))
    return e;
  const { values: n, required: i, default: o, type: s, validator: a } = e, l = {
    type: s,
    required: !!i,
    validator: n || a ? (h) => {
      let u = !1, d = [];
      if (n && (d = Array.from(n), eo(e, "default") && d.push(o), u || (u = d.includes(h))), a && (u || (u = a(h))), !u && d.length > 0) {
        const v = [...new Set(d)].map((y) => JSON.stringify(y)).join(", ");
        sa(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(h)}.`);
      }
      return u;
    } : void 0,
    [es]: !0
  };
  return eo(e, "default") && (l.default = o), l;
}, We = (e) => Yh(Object.entries(e).map(([t, n]) => [
  t,
  ns(n, t)
])), mu = ["", "default", "small", "large"], pu = ns({
  type: String,
  values: mu,
  required: !1
}), wu = Symbol("size"), yu = Symbol("emptyValuesContextKey"), vu = We({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Je(e) ? !e() : !e
  }
}), yo = (e) => Object.keys(e), xn = N();
function is(e, t = void 0) {
  return Ae() ? we(Bo, xn) : xn;
}
function os(e, t) {
  const n = is(), i = di(e, $(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || fn;
  })), o = gu($(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), s = lu($(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || Jo;
  })), a = $(() => {
    var r;
    return C(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return ss($(() => C(n) || {})), {
    ns: i,
    locale: o,
    zIndex: s,
    size: a
  };
}
const ss = (e, t, n = !1) => {
  var i;
  const o = !!Ae(), s = o ? is() : void 0, a = (i = void 0) != null ? i : o ? aa : void 0;
  if (!a)
    return;
  const r = $(() => {
    const l = C(e);
    return s?.value ? xu(s.value, l) : l;
  });
  return a(Bo, r), a(ts, $(() => r.value.locale)), a(No, $(() => r.value.namespace)), a(Qo, $(() => r.value.zIndex)), a(wu, {
    size: $(() => r.value.size || "")
  }), a(yu, $(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !xn.value) && (xn.value = r.value), r;
}, xu = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...yo(e), ...yo(t)])], i = {};
  for (const o of n)
    i[o] = t[o] !== void 0 ? t[o] : e[o];
  return i;
};
var Rn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
};
function ei(e, t = "px") {
  if (!e)
    return "";
  if (Se(e) || Zh(e))
    return `${e}${t}`;
  if (ke(e))
    return e;
}
const as = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), rs = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ku = We({
  size: {
    type: Vt([Number, String])
  },
  color: {
    type: String
  }
}), bu = zt({
  name: "ElIcon",
  inheritAttrs: !1
}), Su = /* @__PURE__ */ zt({
  ...bu,
  props: ku,
  setup(e) {
    const t = e, n = di("icon"), i = $(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: Zo(o) ? void 0 : ei(o),
        "--color": s
      };
    });
    return (o, s) => (L(), D("i", ra({
      class: C(n).b(),
      style: C(i)
    }, o.$attrs), [
      xe(o.$slots, "default")
    ], 16));
  }
});
var Mu = /* @__PURE__ */ Rn(Su, [["__file", "icon.vue"]]);
const kn = as(Mu);
/*! Element Plus Icons Vue v2.3.1 */
var Cu = /* @__PURE__ */ zt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), _u = Cu, Tu = /* @__PURE__ */ zt({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ls = Tu, zu = /* @__PURE__ */ zt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ru = zu, Lu = /* @__PURE__ */ zt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Pu = Lu, Au = /* @__PURE__ */ zt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (L(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Iu = Au;
const cs = Vt([
  String,
  Object,
  Function
]), Du = {
  Close: ls
}, Ou = {
  Close: ls
}, bn = {
  success: Pu,
  warning: Iu,
  error: _u,
  info: Ru
}, Eu = (e) => e, mn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, $u = We({
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
    type: Vt([String, Object, Array])
  },
  offset: {
    type: Vt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Wu = zt({
  name: "ElBadge"
}), Bu = /* @__PURE__ */ zt({
  ...Wu,
  props: $u,
  setup(e, { expose: t }) {
    const n = e, i = di("badge"), o = $(() => n.isDot ? "" : Se(n.value) && Se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = $(() => {
      var a, r, l, h, u;
      return [
        {
          backgroundColor: n.color,
          marginRight: ei(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: ei((h = (l = n.offset) == null ? void 0 : l[1]) != null ? h : 0)
        },
        (u = n.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: o
    }), (a, r) => (L(), D("div", {
      class: rt(C(i).b())
    }, [
      xe(a.$slots, "default"),
      m(ii, {
        name: `${C(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Ot(() => [
          Ge(x("sup", {
            class: rt([
              C(i).e("content"),
              C(i).em("content", a.type),
              C(i).is("fixed", !!a.$slots.default),
              C(i).is("dot", a.isDot),
              C(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: gt(C(s))
          }, [
            xe(a.$slots, "content", { value: C(o) }, () => [
              la(Y(C(o)), 1)
            ])
          ], 6), [
            [pn, !a.hidden && (C(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Nu = /* @__PURE__ */ Rn(Bu, [["__file", "badge.vue"]]);
const Hu = as(Nu), ju = We({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Vt(Object)
  },
  size: pu,
  button: {
    type: Vt(Object)
  },
  experimentalFeatures: {
    type: Vt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Vt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...vu
}), Jt = {};
zt({
  name: "ElConfigProvider",
  props: ju,
  setup(e, { slots: t }) {
    Ee(() => e.message, (i) => {
      Object.assign(Jt, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ss(e);
    return () => xe(t, "default", { config: n?.value });
  }
});
const hs = ["success", "info", "warning", "error"], Dt = Eu({
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
  appendTo: Ce ? document.body : void 0
}), Fu = We({
  customClass: {
    type: String,
    default: Dt.customClass
  },
  center: {
    type: Boolean,
    default: Dt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Dt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Dt.duration
  },
  icon: {
    type: cs,
    default: Dt.icon
  },
  id: {
    type: String,
    default: Dt.id
  },
  message: {
    type: Vt([
      String,
      Object,
      Function
    ]),
    default: Dt.message
  },
  onClose: {
    type: Vt(Function),
    default: Dt.onClose
  },
  showClose: {
    type: Boolean,
    default: Dt.showClose
  },
  type: {
    type: String,
    values: hs,
    default: Dt.type
  },
  plain: {
    type: Boolean,
    default: Dt.plain
  },
  offset: {
    type: Number,
    default: Dt.offset
  },
  zIndex: {
    type: Number,
    default: Dt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Dt.grouping
  },
  repeatNum: {
    type: Number,
    default: Dt.repeatNum
  }
}), Vu = {
  destroy: () => !0
}, Qt = ca([]), Uu = (e) => {
  const t = Qt.findIndex((o) => o.id === e), n = Qt[t];
  let i;
  return t > 0 && (i = Qt[t - 1]), { current: n, prev: i };
}, Yu = (e) => {
  const { prev: t } = Uu(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Zu = (e, t) => Qt.findIndex((i) => i.id === e) > 0 ? 16 : t, Xu = zt({
  name: "ElMessage"
}), Gu = /* @__PURE__ */ zt({
  ...Xu,
  props: Fu,
  emits: Vu,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = Ou, { ns: o, zIndex: s } = os("message"), { currentZIndex: a, nextZIndex: r } = s, l = N(), h = N(!1), u = N(0);
    let d;
    const v = $(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = $(() => {
      const V = n.type;
      return { [o.bm("icon", V)]: V && bn[V] };
    }), M = $(() => n.icon || bn[n.type] || ""), w = $(() => Yu(n.id)), S = $(() => Zu(n.id, n.offset) + w.value), I = $(() => u.value + S.value), z = $(() => ({
      top: `${S.value}px`,
      zIndex: a.value
    }));
    function T() {
      n.duration !== 0 && ({ stop: d } = Xo(() => {
        Z();
      }, n.duration));
    }
    function U() {
      d?.();
    }
    function Z() {
      h.value = !1;
    }
    function G({ code: V }) {
      V === mn.esc && Z();
    }
    return tn(() => {
      T(), r(), h.value = !0;
    }), Ee(() => n.repeatNum, () => {
      U(), T();
    }), Ko(document, "keydown", G), nu(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: I,
      close: Z
    }), (V, H) => (L(), Tt(ii, {
      name: C(o).b("fade"),
      onBeforeLeave: V.onClose,
      onAfterLeave: (Q) => V.$emit("destroy"),
      persisted: ""
    }, {
      default: Ot(() => [
        Ge(x("div", {
          id: V.id,
          ref_key: "messageRef",
          ref: l,
          class: rt([
            C(o).b(),
            { [C(o).m(V.type)]: V.type },
            C(o).is("center", V.center),
            C(o).is("closable", V.showClose),
            C(o).is("plain", V.plain),
            V.customClass
          ]),
          style: gt(C(z)),
          role: "alert",
          onMouseenter: U,
          onMouseleave: T
        }, [
          V.repeatNum > 1 ? (L(), Tt(C(Hu), {
            key: 0,
            value: V.repeatNum,
            type: C(v),
            class: rt(C(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : j("v-if", !0),
          C(M) ? (L(), Tt(C(kn), {
            key: 1,
            class: rt([C(o).e("icon"), C(y)])
          }, {
            default: Ot(() => [
              (L(), Tt(he(C(M))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          xe(V.$slots, "default", {}, () => [
            V.dangerouslyUseHTMLString ? (L(), D(Bt, { key: 1 }, [
              j(" Caution here, message could've been compromised, never use user's input as message "),
              x("p", {
                class: rt(C(o).e("content")),
                innerHTML: V.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (L(), D("p", {
              key: 0,
              class: rt(C(o).e("content"))
            }, Y(V.message), 3))
          ]),
          V.showClose ? (L(), Tt(C(kn), {
            key: 2,
            class: rt(C(o).e("closeBtn")),
            onClick: ht(Z, ["stop"])
          }, {
            default: Ot(() => [
              m(C(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 46, ["id"]), [
          [pn, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var qu = /* @__PURE__ */ Rn(Gu, [["__file", "message.vue"]]);
let Ku = 1;
const us = (e) => {
  const t = !e || ke(e) || qe(e) || Je(e) ? { message: e } : e, n = {
    ...Dt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ke(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    ti(i) || (i = document.body), n.appendTo = i;
  }
  return ao(Jt.grouping) && !n.grouping && (n.grouping = Jt.grouping), Se(Jt.duration) && n.duration === 3e3 && (n.duration = Jt.duration), Se(Jt.offset) && n.offset === 16 && (n.offset = Jt.offset), ao(Jt.showClose) && !n.showClose && (n.showClose = Jt.showClose), n;
}, Ju = (e) => {
  const t = Qt.indexOf(e);
  if (t === -1)
    return;
  Qt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Qu = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Ku++}`, o = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      o?.(), Ju(u);
    },
    onDestroy: () => {
      wn(null, s);
    }
  }, r = m(qu, a, Je(a.message) || qe(a.message) ? {
    default: Je(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || De._context, wn(r, s), e.appendChild(s.firstElementChild);
  const l = r.component, u = {
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
  return u;
}, De = (e = {}, t) => {
  if (!Ce)
    return { close: () => {
    } };
  const n = us(e);
  if (n.grouping && Qt.length) {
    const o = Qt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Se(Jt.max) && Qt.length >= Jt.max)
    return { close: () => {
    } };
  const i = Qu(n, t);
  return Qt.push(i), i.handler;
};
hs.forEach((e) => {
  De[e] = (t = {}, n) => {
    const i = us(t);
    return De({ ...i, type: e }, n);
  };
});
function td(e) {
  for (const t of Qt)
    (!e || e === t.props.type) && t.handler.close();
}
De.closeAll = td;
De._context = null;
const ed = rs(De, "$message"), ds = [
  "success",
  "info",
  "warning",
  "error"
], nd = We({
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
    type: cs
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Vt([
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
    type: Vt(Function),
    default: () => {
    }
  },
  onClose: {
    type: Vt(Function),
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
    values: [...ds, ""],
    default: ""
  },
  zIndex: Number
}), id = {
  destroy: () => !0
}, od = zt({
  name: "ElNotification"
}), sd = /* @__PURE__ */ zt({
  ...od,
  props: nd,
  emits: id,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: o } = os("notification"), { nextZIndex: s, currentZIndex: a } = o, { Close: r } = Du, l = N(!1);
    let h;
    const u = $(() => {
      const T = n.type;
      return T && bn[n.type] ? i.m(T) : "";
    }), d = $(() => n.type && bn[n.type] || n.icon), v = $(() => n.position.endsWith("right") ? "right" : "left"), y = $(() => n.position.startsWith("top") ? "top" : "bottom"), M = $(() => {
      var T;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (T = n.zIndex) != null ? T : a.value
      };
    });
    function w() {
      n.duration > 0 && ({ stop: h } = Xo(() => {
        l.value && I();
      }, n.duration));
    }
    function S() {
      h?.();
    }
    function I() {
      l.value = !1;
    }
    function z({ code: T }) {
      T === mn.delete || T === mn.backspace ? S() : T === mn.esc ? l.value && I() : w();
    }
    return tn(() => {
      w(), s(), l.value = !0;
    }), Ko(document, "keydown", z), t({
      visible: l,
      close: I
    }), (T, U) => (L(), Tt(ii, {
      name: C(i).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (Z) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: Ot(() => [
        Ge(x("div", {
          id: T.id,
          class: rt([C(i).b(), T.customClass, C(v)]),
          style: gt(C(M)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: w,
          onClick: T.onClick
        }, [
          C(d) ? (L(), Tt(C(kn), {
            key: 0,
            class: rt([C(i).e("icon"), C(u)])
          }, {
            default: Ot(() => [
              (L(), Tt(he(C(d))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          x("div", {
            class: rt(C(i).e("group"))
          }, [
            x("h2", {
              class: rt(C(i).e("title")),
              textContent: Y(T.title)
            }, null, 10, ["textContent"]),
            Ge(x("div", {
              class: rt(C(i).e("content")),
              style: gt(T.title ? void 0 : { margin: 0 })
            }, [
              xe(T.$slots, "default", {}, () => [
                T.dangerouslyUseHTMLString ? (L(), D(Bt, { key: 1 }, [
                  j(" Caution here, message could've been compromised, never use user's input as message "),
                  x("p", { innerHTML: T.message }, null, 8, ["innerHTML"])
                ], 2112)) : (L(), D("p", { key: 0 }, Y(T.message), 1))
              ])
            ], 6), [
              [pn, T.message]
            ]),
            T.showClose ? (L(), Tt(C(kn), {
              key: 0,
              class: rt(C(i).e("closeBtn")),
              onClick: ht(I, ["stop"])
            }, {
              default: Ot(() => [
                m(C(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : j("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [pn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ad = /* @__PURE__ */ Rn(sd, [["__file", "notification.vue"]]);
const Sn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ni = 16;
let rd = 1;
const Oe = function(e = {}, t) {
  if (!Ce)
    return { close: () => {
    } };
  (ke(e) || qe(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  Sn[n].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + ni;
  }), i += ni;
  const o = `notification_${rd++}`, s = e.onClose, a = {
    ...e,
    offset: i,
    id: o,
    onClose: () => {
      ld(o, n, s);
    }
  };
  let r = document.body;
  ti(e.appendTo) ? r = e.appendTo : ke(e.appendTo) && (r = document.querySelector(e.appendTo)), ti(r) || (r = document.body);
  const l = document.createElement("div"), h = m(ad, a, Je(a.message) ? a.message : qe(a.message) ? () => a.message : null);
  return h.appContext = Zo(t) ? Oe._context : t, h.props.onDestroy = () => {
    wn(null, l);
  }, wn(h, l), Sn[n].push({ vm: h }), r.appendChild(l.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
ds.forEach((e) => {
  Oe[e] = (t = {}, n) => ((ke(t) || qe(t)) && (t = {
    message: t
  }), Oe({ ...t, type: e }, n));
});
function ld(e, t, n) {
  const i = Sn[t], o = i.findIndex(({ vm: h }) => {
    var u;
    return ((u = h.component) == null ? void 0 : u.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: s } = i[o];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, r = t.split("-")[0];
  i.splice(o, 1);
  const l = i.length;
  if (!(l < 1))
    for (let h = o; h < l; h++) {
      const { el: u, component: d } = i[h].vm, v = Number.parseInt(u.style[r], 10) - a - ni;
      d.props.offset = v;
    }
}
function cd() {
  for (const e of Object.values(Sn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Oe.closeAll = cd;
Oe._context = null;
const hd = rs(Oe, "$notify"), Nt = {
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
      duration: o = 3e3,
      showClose: s = !1
    } = e;
    i === "center" ? ed({
      message: t,
      type: n,
      duration: o,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : hd({
      message: t,
      type: n,
      position: i,
      duration: o,
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
}, ud = ["disabled"], dd = {
  key: 0,
  class: "custom-button__loading"
}, gd = /* @__PURE__ */ zt({
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
    return (n, i) => (L(), D("button", {
      class: rt([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: i[0] || (i[0] = (o) => n.$emit("click", o))
    }, [
      e.loading ? (L(), D("div", dd, i[1] || (i[1] = [
        x(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            x("circle", {
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
      ]))) : j("v-if", !0),
      xe(n.$slots, "default", {}, void 0, !0)
    ], 10, ud));
  }
}), oe = /* @__PURE__ */ _n(gd, [["__scopeId", "data-v-9497085f"]]);
function fd(e) {
  return wd(e.anchor, e.focus) <= 0 ? { start: e.anchor, end: e.focus } : { start: e.focus, end: e.anchor };
}
function gs(e, t) {
  if (!t || e.length === 0)
    return [];
  const { start: n, end: i } = fd(t);
  if (n.blockIndex < 0 || i.blockIndex >= e.length)
    return [];
  const o = [];
  for (let s = n.blockIndex; s <= i.blockIndex; s += 1) {
    const a = e[s].text.length, r = s === n.blockIndex ? vo(n.offset, a) : 0, l = s === i.blockIndex ? vo(i.offset, a) : a;
    l > r && o.push({ blockIndex: s, start: r, end: l });
  }
  return o;
}
function md(e, t) {
  const n = gs(e, t);
  return n.map((i, o) => {
    const s = e[i.blockIndex], a = s.text.slice(i.start, i.end), r = i.end === s.text.length, l = o < n.length - 1;
    return a + (r && l ? s.separator : "");
  }).join("");
}
function pd(e, t) {
  let n = 0, i = Number.POSITIVE_INFINITY;
  for (let o = 0; o < e.length; o += 1) {
    const s = Math.abs(e[o] - t);
    s < i && (n = o, i = s);
  }
  return n;
}
function wd(e, t) {
  return e.blockIndex - t.blockIndex || e.offset - t.offset;
}
function vo(e, t) {
  return Number.isFinite(e) ? Math.max(0, Math.min(t, Math.round(e))) : 0;
}
const yd = ["src", "alt"], vd = { class: "ocr-header" }, xd = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, kd = { "data-tauri-drag-region": "" }, bd = { class: "ocr-window-controls" }, Sd = ["title"], Md = ["title"], Cd = ["title"], _d = ["title"], Td = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, zd = ["src", "alt"], Rd = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, Ld = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Pd = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, Ad = { "data-tauri-drag-region": "" }, Id = { "data-tauri-drag-region": "" }, Dd = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, Od = ["title"], Ed = {
  key: 0,
  class: "ocr-original-image"
}, $d = ["src", "alt"], Wd = {
  key: 0,
  class: "ocr-state"
}, Bd = {
  key: 1,
  class: "ocr-state error"
}, Nd = {
  key: 2,
  class: "ocr-state muted"
}, Hd = { class: "ocr-preview-pane" }, jd = { class: "ocr-preview-stage" }, Fd = ["src", "alt"], Vd = {
  key: 0,
  class: "ocr-selection-highlight-layer",
  "aria-hidden": "true"
}, Ud = ["data-selection-index", "textContent"], Yd = {
  key: 0,
  class: "ocr-selection-translation"
}, Zd = { class: "ocr-translation-section" }, Xd = { class: "ocr-translation-label" }, Gd = { class: "ocr-translation-source" }, qd = { class: "ocr-translation-section result" }, Kd = { class: "ocr-translation-label" }, Jd = ["textContent"], Qd = { class: "ocr-record-main-row" }, tg = ["onClick"], eg = ["checked", "onChange"], ng = { class: "ocr-record-index" }, ig = ["textContent", "onBlur"], og = {
  key: 0,
  class: "ocr-record-score"
}, sg = {
  key: 0,
  class: "ocr-record-translation"
}, ag = { class: "ocr-translation-label" }, rg = ["textContent", "onBlur"], lg = { class: "ocr-action-bar" }, cg = ["onClick"], hg = { class: "engine-label" }, ug = ["onClick"], dg = { class: "engine-label" }, gg = { class: "ocr-engine-btn-group relative" }, fg = {
  key: 2,
  class: "zoom-info"
}, Un = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', mg = /* @__PURE__ */ zt({
  __name: "index",
  setup(e) {
    const { t } = oi(), n = N(), i = N(), o = N(null), s = N(""), a = N(""), r = N("pin"), l = N(""), h = N([]), u = N(!1), d = N(""), v = N(""), y = N(0), M = N(0), w = N({ width: 0, height: 0 }), S = N({ width: 0, height: 0 }), I = N(!1), z = N(!1), T = N(null), U = N(null), Z = N(!1);
    let G = null;
    const V = N(!1), H = N(!1), Q = N(), K = N({}), tt = N("bing"), nt = N(!1), st = N(), wt = N({}), it = N("auto"), X = $(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: t("translate.offlineMark")
      }
    ]), ot = $(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), pt = (c) => {
      const g = typeof c == "string" ? c.trim().toLowerCase() : "";
      return g === "auto" || g === "zh" || g === "zh-tw" || g === "en" || g === "ja" || g === "ko" ? g : "auto";
    }, yt = $(() => ot.value.find((c) => c.value === it.value)?.label || t("pin.ocrLanguageAuto")), O = $(() => t("pin.showRecords")), ft = $(() => t("pin.hideRecords")), F = $(() => t("pin.translationResult")), Rt = (c, g) => {
      if (!c) {
        g.value = {};
        return;
      }
      const p = c.getBoundingClientRect(), B = 180, W = 8, J = Math.min(
        Math.max(p.left + p.width / 2, W + B / 2),
        window.innerWidth - W - B / 2
      );
      g.value = {
        left: `${J}px`,
        bottom: `${Math.max(8, window.innerHeight - p.top + 8)}px`
      };
    }, Lt = () => {
      H.value && Rt(Q.value, K), nt.value && Rt(st.value, wt);
    }, jt = $(() => it.value), ut = N(1), _t = N(!1), Et = N(!1);
    let ie = null, Gt = null;
    const _ = N(!1), et = N({ x: 0, y: 0 }), ct = N(!0), vt = N({ width: 0, height: 0 });
    let Mt = null, dt = 0;
    const te = N(""), bt = $(() => ({
      width: "100%",
      height: r.value === "ocr" ? "auto" : "100%",
      flex: r.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: r.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), Pt = $(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), k = $(() => y.value > 0 && M.value > 0 ? `${y.value} × ${M.value}` : t("pin.screenshotPreview")), E = $(() => u.value ? t("pin.recognizing") : d.value ? t("pin.recognizeFailed") : l.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), q = $(
      () => h.value.filter((c) => c.selected)
    ), lt = $(
      () => h.value.flatMap(
        (c) => c.blocks.filter(Ln).map((g, p) => ({
          ...g,
          id: `${c.id}-block-${p}`,
          recordId: c.id,
          separator: fs(g, c.blocks[p + 1])
        }))
      )
    ), mt = $(
      () => gs(lt.value, U.value)
    ), At = $(
      () => md(lt.value, U.value)
    ), qt = $(
      () => mt.value.map((c) => {
        const g = lt.value[c.blockIndex], p = Pn(g), B = p.boundaries[c.start] || 0, W = p.boundaries[c.end] || p.renderedWidth, J = B / p.renderedWidth, xt = W / p.renderedWidth;
        return {
          id: `${g.id}-${c.start}-${c.end}`,
          left: g.x + g.width * J,
          top: g.y,
          width: g.width * Math.max(0, xt - J),
          height: g.height
        };
      })
    ), It = $(() => q.value.length), Be = (c) => (c.translatedText || c.text).trim(), Ne = (c) => c.map(Be).filter(Boolean).join(`

`), Ut = () => {
      l.value = Ne(h.value);
    }, Ln = (c) => y.value > 0 && M.value > 0 && c.width > 0 && c.height > 0, fs = (c, g) => {
      if (!g)
        return `

`;
      const p = c.text.trim().slice(-1), B = g.text.trim().slice(0, 1), W = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
      return W.test(p) || W.test(B) ? "" : " ";
    }, ms = (c) => {
      if (!Ln(c))
        return {};
      const g = re(c.x / y.value * 100), p = re(c.y / M.value * 100), B = re(c.width / y.value * 100, 1), W = re(c.height / M.value * 100, 1), J = Pn(c);
      return {
        left: `${g}%`,
        top: `${p}%`,
        width: `${B}%`,
        height: `${W}%`,
        fontSize: `${J.fontSize}px`,
        lineHeight: `${J.lineHeight}px`,
        letterSpacing: `${J.letterSpacing}px`
      };
    }, ps = (c) => y.value <= 0 || M.value <= 0 ? {} : {
      left: `${re(c.left / y.value * 100)}%`,
      top: `${re(c.top / M.value * 100)}%`,
      width: `${re(c.width / y.value * 100)}%`,
      height: `${re(c.height / M.value * 100)}%`
    }, _e = /* @__PURE__ */ new Map();
    let vi = null;
    const Pn = (c) => {
      const g = ys(), p = c.text.trim(), B = `${c.id}:${p}:${g.toFixed(4)}`, W = _e.get(B);
      if (W)
        return W;
      const J = Math.max(c.width * g, 1), xt = Math.max(c.height * g, 1);
      let kt = xi(
        Math.min((c.fontSize || c.height * 0.8) * g, xt * 0.86),
        5,
        28
      );
      const $t = ws();
      $t.font = `${kt}px ${Un}`;
      let Wt = Math.max($t.measureText(p).width, 1);
      Wt > J && (kt = Math.max(5, kt * (J / Wt)), $t.font = `${kt}px ${Un}`, Wt = Math.max($t.measureText(p).width, 1));
      const Yt = p.length > 0 ? Math.max(0, (J - Wt) / p.length) : 0, Ei = Array.from({ length: p.length + 1 }, (Mg, Nn) => Nn === 0 ? 0 : ($t.font = `${kt}px ${Un}`, $t.measureText(p.slice(0, Nn)).width + Yt * Nn)), Ks = Math.max(Ei[p.length] || Wt, 1), $i = {
        fontSize: kt,
        lineHeight: xt,
        letterSpacing: Yt,
        boundaries: Ei,
        renderedWidth: Ks
      };
      return _e.set(B, $i), $i;
    }, ws = () => {
      vi || (vi = document.createElement("canvas"));
      const c = vi.getContext("2d");
      if (!c)
        throw new Error(t("pin.ocrMeasureFailed"));
      return c;
    }, ys = () => y.value <= 0 || M.value <= 0 || w.value.width <= 0 || w.value.height <= 0 ? 1 : Math.min(
      w.value.width / y.value,
      w.value.height / M.value
    ), An = () => {
      const c = i.value;
      if (_e.clear(), !c) {
        w.value = { width: 0, height: 0 };
        return;
      }
      w.value = {
        width: c.clientWidth,
        height: c.clientHeight
      };
    }, re = (c, g = 0) => Number.isFinite(c) ? Math.min(100, Math.max(g, c)) : g, xi = (c, g, p) => Number.isFinite(c) ? Math.min(p, Math.max(g, c)) : g, vs = () => {
      const c = /* @__PURE__ */ new Date(), g = (p) => p.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${c.getFullYear()}-${g(c.getMonth() + 1)}-${g(c.getDate())} ${g(c.getHours())}.${g(c.getMinutes())}.${g(c.getSeconds())}.png`;
    }, xs = $(() => {
      const c = Math.min(
        vt.value.width,
        vt.value.height
      );
      let g = 1;
      return c < 300 && (g = Math.max(0.4, c / 300)), {
        left: `${et.value.x}px`,
        top: `${et.value.y}px`,
        transform: `scale(${g})`,
        transformOrigin: "top left"
      };
    }), ks = (c) => {
      s.value = c, y.value = 0, M.value = 0, w.value = { width: 0, height: 0 }, on(), _e.clear(), S.value = { width: 0, height: 0 }, r.value === "ocr" && (v.value = vs(), z.value = !1), a.value && (URL.revokeObjectURL(a.value), a.value = "");
      try {
        const g = c.split(",")[1] || c, p = c.match(/data:([^;]+);/), B = p ? p[1] : "image/png", W = atob(g), J = new Uint8Array(W.length);
        for (let kt = 0; kt < W.length; kt++)
          J[kt] = W.charCodeAt(kt);
        const xt = new Blob([J], { type: B });
        a.value = URL.createObjectURL(xt);
      } catch (g) {
        P.error("[PIN窗口] 转换 Blob URL 失败", g), a.value = c;
      }
    }, ki = async () => {
      await ye(), await new Promise((c) => requestAnimationFrame(() => c()));
      try {
        await o.value?.emit("pin-window-ready");
      } catch (c) {
        P.error("[PIN窗口] 发送 ready 事件失败", c);
      }
    }, bi = (c) => {
      if (!c?.imageData)
        return P.error("[PIN窗口] 收到的事件数据格式不正确", c), !1;
      const g = c.mode === "ocr" ? "ocr" : "pin", p = `${g}:${c.imageData.length}`;
      return p === te.value ? !1 : (te.value = p, r.value = g, ks(c.imageData), Kt(), r.value === "ocr" ? (Dn(c.text || ""), d.value = "", c.text || In()) : (dt++, u.value = !1, d.value = "", l.value = "", h.value = []), !0);
    }, In = async () => {
      if (!s.value) return;
      const c = ++dt;
      on(), T.value = null, _e.clear(), u.value = !0, d.value = "";
      const g = Date.now();
      Ct.log("[Pin OCR] recognize start", {
        requestId: c,
        imageDataLength: s.value.length,
        imageWidth: y.value,
        imageHeight: M.value,
        language: it.value,
        backendLanguage: jt.value
      });
      try {
        Ct.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: c,
          language: it.value,
          backendLanguage: jt.value
        });
        const p = await b("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: jt.value
        }), B = Ss(p), W = B.length > 0 ? Ne(B) : Ts(p);
        if (Ct.log("[Pin OCR] backend OCR success", {
          requestId: c,
          resultEngine: p?.engine,
          resultLanguage: p?.language,
          confidence: p?.confidence,
          blocks: Array.isArray(p?.blocks) ? p.blocks.length : 0,
          textLength: W.trim().length
        }), c !== dt) return;
        B.length > 0 ? (h.value = B, Ut()) : Dn(W.trim()), _e.clear(), Ct.log("[Pin OCR] recognize success", {
          requestId: c,
          durationMs: Date.now() - g,
          textLength: l.value.length,
          textPreview: l.value.slice(0, 300)
        });
      } catch (p) {
        if (c !== dt) return;
        P.error("[PIN窗口] OCR 识别失败", p), Ct.log("[Pin OCR] recognize failed", {
          requestId: c,
          durationMs: Date.now() - g,
          error: zs(p)
        }), d.value = t("pin.recognizeFailed"), l.value = "", h.value = [], Nt.error(t("pin.recognizeFailed"));
      } finally {
        c === dt && (u.value = !1);
      }
    }, Dn = (c) => {
      const g = c.trim();
      l.value = g, h.value = g ? g.split(/\n{2,}|\n/).map((p, B) => bs(p, B)).filter((p) => p.text.trim()) : [];
    }, bs = (c, g) => ({
      id: `plain-${Date.now()}-${g}`,
      text: c.trim(),
      sourceText: c.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), Ss = (c) => {
      const g = Cs(c?.blocks);
      return g.length === 0 ? [] : Lo(g).map((B, W) => Ms(B, W)).filter((B) => B.text.trim());
    }, Ms = (c, g) => {
      const p = c.text.trim(), B = c.blocks;
      return {
        id: `ocr-${Date.now()}-${g}`,
        text: p,
        sourceText: p,
        translatedText: c.translatedText?.trim() || "",
        bbox: { ...c.bbox },
        blocks: B,
        confidence: _s(B),
        selected: !1
      };
    }, Cs = (c) => Array.isArray(c) ? c.map((g) => {
      if (!g || typeof g != "object")
        return null;
      const p = g, B = typeof p.text == "string" ? p.text.trim() : "";
      if (!B)
        return null;
      const W = {
        text: B,
        x: Number(p.x || 0),
        y: Number(p.y || 0),
        width: Number(p.width || 0),
        height: Number(p.height || 0),
        fontSize: Number(p.fontSize || 0),
        lineHeight: Number(p.lineHeight || 0),
        angle: Number(p.angle || 0),
        isCodeBlock: !!p.isCodeBlock,
        confidence: Number(p.confidence || 0)
      };
      return typeof p.translatedText == "string" && (W.translatedText = p.translatedText), W;
    }).filter((g) => g !== null) : [], _s = (c) => {
      const g = c.map((p) => Number(p.confidence || 0)).filter((p) => Number.isFinite(p) && p > 0);
      return g.length === 0 ? 0 : g.reduce((p, B) => p + B, 0) / g.length;
    }, Ts = (c) => typeof c == "string" ? c : c?.text ? c.text : c?.full_text ? c.full_text : Array.isArray(c?.blocks) ? c.blocks.map((g) => g?.text).filter(Boolean).join(`
`) : "", zs = (c) => c instanceof Error ? `${c.name}: ${c.message}
${c.stack || ""}`.trim() : typeof c == "string" ? c : JSON.stringify(c) || String(c), On = async () => {
      const c = Ls();
      if (c)
        try {
          await navigator.clipboard.writeText(c), Nt.success(t("pin.copySuccess"));
        } catch (g) {
          P.error("[PIN窗口] 复制识别文本失败", g), Nt.error(t("pin.copyFailed"));
        } finally {
          Kt();
        }
    }, Rs = async () => {
      Ut();
      const c = l.value.trim();
      if (c)
        try {
          await b("save_text_to_file", { text: c }), Nt.success(t("pin.saveSuccess"));
        } catch (g) {
          g !== "SAVE_CANCELLED" && (P.error("[PIN窗口] 保存文本失败", g), Nt.error(t("pin.saveFailed")));
        }
    }, Ls = () => {
      const c = Ps();
      if (c)
        return c;
      if (At.value)
        return At.value;
      const g = Ne(q.value);
      return g || (Ut(), l.value.trim());
    }, Ps = () => {
      const c = window.getSelection(), g = n.value?.querySelector(".ocr-reading-surface");
      if (!c || c.rangeCount === 0 || !g)
        return "";
      for (let p = 0; p < c.rangeCount; p += 1) {
        const W = c.getRangeAt(p).commonAncestorContainer;
        if (g.contains(W))
          return c.toString().trim();
      }
      return "";
    }, Si = (c) => {
      const g = h.value.find((p) => p.id === c);
      g && (g.selected = !g.selected);
    }, Mi = (c, g, p) => {
      const B = h.value.find((J) => J.id === c), W = p.target;
      !B || !W || (B[g] = W.innerText.trim(), g === "text" && !B.sourceText.trim() && (B.sourceText = B.text), Ut());
    }, As = (c) => {
      const g = c.target;
      !g || !T.value || (T.value.translatedText = g.innerText.trim());
    }, Is = async () => {
      H.value = !H.value, nt.value = !1, H.value && (await ye(), Lt());
    }, Ds = (c) => {
      tt.value = c, H.value = !1, b("set_translation_engine", { engine: c }).catch((g) => {
        P.error("[PIN窗口] 保存翻译引擎设置失败", g);
      });
    }, Ci = async () => {
      nt.value = !nt.value, H.value = !1, nt.value && (await ye(), Lt());
    }, Os = (c) => {
      it.value = c, nt.value = !1, b("set_ocr_language", { language: c }).catch((g) => {
        P.error("[PIN窗口] 保存 OCR 语言设置失败", g);
      }), s.value && In();
    }, Es = async () => {
      if (Kt(), H.value = !1, nt.value = !1, !l.value.trim() || V.value) return;
      const c = At.value.trim(), g = c ? [] : q.value.length > 0 ? q.value : h.value, p = c || (g.length > 0 ? g.map((W) => W.text).join(`

`) : l.value), B = fe(p);
      if (!Pe(B)) {
        Nt.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      V.value = !0;
      try {
        if (await $s(), c) {
          const W = await En(c, B);
          W && (T.value = {
            sourceText: c,
            translatedText: W.trim()
          }, z.value = !0), Nt.success(t("pin.translateSuccess"));
        } else if (g.length > 0) {
          for (const W of g) {
            const J = await En(W.text, B);
            J && (W.translatedText = J.trim());
          }
          Ut(), z.value = !0, Nt.success(t("pin.translateSuccess"));
        } else {
          const W = await En(l.value, B);
          W && Dn(W), Nt.success(t("pin.translateSuccess"));
        }
      } catch (W) {
        P.error("[PIN窗口] 翻译失败", W);
        const J = W instanceof Error ? W.message : String(W);
        if (J !== "翻译已取消") {
          const xt = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          Nt.error(
            xt.includes(J) ? J : t("pin.translateFailed")
          );
        }
      } finally {
        V.value = !1;
      }
    }, $s = async () => {
      if (tt.value !== "offline")
        return;
      if ((await li()).isCached)
        await zo();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await b("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, En = async (c, g) => {
      const p = c.trim();
      return p ? tt.value === "offline" ? To(p) : await b("translate_text", {
        text: p,
        from: "auto",
        to: g === "zh" ? "en" : "zh",
        engine: tt.value
      }) : "";
    }, Ws = () => {
      I.value = !I.value;
    }, Bs = () => {
      z.value = !z.value;
    }, Ns = (c) => {
      nn(c);
    }, Hs = async () => {
      if (!o.value) return;
      const c = o.value;
      typeof c.minimize == "function" && await c.minimize();
    }, js = async () => {
      if (!o.value) return;
      const c = o.value;
      (typeof c.isMaximized == "function" ? await c.isMaximized() : !1) && typeof c.unmaximize == "function" ? await c.unmaximize() : typeof c.maximize == "function" && await c.maximize();
    }, _i = async (c) => {
      const g = c.target;
      if (y.value = g.naturalWidth, M.value = g.naturalHeight, o.value && S.value.width === 0)
        try {
          const p = await o.value.innerSize(), B = await o.value.scaleFactor(), W = p.toLogical(B);
          S.value = {
            width: W.width,
            height: W.height
          };
        } catch (p) {
          P.error("[PIN窗口] 获取窗口初始尺寸失败", p);
        }
    }, Ti = async (c) => {
      if (c.ctrlKey && (c.preventDefault(), c.stopPropagation(), !Et.value && o.value)) {
        Et.value = !0;
        try {
          const p = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), B = c.deltaY > 0 ? 0.95 : 1.05, W = p.width, J = p.height, xt = Math.round(W * B), kt = Math.round(J * B), $t = 50, Wt = 3e3;
          if (xt >= $t && xt <= Wt && kt >= $t && kt <= Wt) {
            if (await o.value.setSize(new Ye(xt, kt)), y.value > 0) {
              const Yt = Math.round(
                xt / y.value * 100
              );
              ut.value = Yt / 100;
            }
            _t.value = !0, $n();
          }
        } catch (g) {
          P.error("[PIN窗口] 窗口缩放失败", g);
        } finally {
          setTimeout(() => {
            Et.value = !1;
          }, 100);
        }
      }
    }, Fs = (c) => {
      r.value === "ocr" && c.ctrlKey && Ti(c);
    }, $n = () => {
      _t.value = !0, ie && clearTimeout(ie), ie = setTimeout(() => {
        _t.value = !1;
      }, 1e3);
    }, nn = (c) => {
      c.preventDefault(), c.stopPropagation(), _.value = !1, setTimeout(() => {
        const g = window.innerWidth, p = window.innerHeight;
        vt.value = { width: g, height: p };
        const B = Math.min(g, p);
        let W = 1;
        B < 300 && (W = Math.max(0.4, B / 300));
        const J = r.value === "ocr" ? 176 : 150, xt = r.value === "ocr" && l.value.trim() ? 222 : 180, kt = J * W, $t = xt * W;
        let Wt = c.clientX, Yt = c.clientY;
        Wt + kt > g && (Wt = g - kt - 5), Yt + $t > p && (Yt = p - $t - 5), Wt = Math.max(5, Wt), Yt = Math.max(5, Yt), et.value = { x: Wt, y: Yt }, _.value = !0;
      }, 10);
    }, Kt = () => {
      _.value = !1, H.value = !1, nt.value = !1;
    }, zi = async () => {
      o.value && (ct.value = !ct.value, await o.value.setAlwaysOnTop(ct.value), Kt());
    }, Ri = async (c) => {
      if (o.value && !Et.value) {
        Et.value = !0;
        try {
          const p = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), B = Math.round(p.width * c), W = Math.round(p.height * c), J = 50, xt = 3e3;
          B >= J && B <= xt && W >= J && W <= xt && (await o.value.setSize(new Ye(B, W)), y.value > 0 && (ut.value = B / y.value), $n());
        } catch (g) {
          P.error("[PIN窗口] 键盘缩放失败", g);
        } finally {
          setTimeout(() => {
            Et.value = !1;
          }, 100);
        }
      }
    }, Li = async () => {
      if (o.value && S.value.width > 0 && S.value.height > 0)
        try {
          await o.value.setSize(
            new Ye(
              S.value.width,
              S.value.height
            )
          ), ut.value = 1, $n();
        } catch (c) {
          P.error("[PIN窗口] 重置缩放失败", c);
        }
      Kt();
    }, Vs = async () => {
      try {
        const c = s.value;
        Kt(), o.value && await o.value.hide(), await b("copy_image_to_clipboard", { imageData: c }), Nt.success(t("pin.copySuccess")), o.value && await o.value.close();
      } catch (c) {
        P.error("[PIN窗口] 复制图片失败", c), Nt.error(t("pin.copyFailed")), o.value && await o.value.close();
      }
    }, Us = async () => {
      const c = s.value;
      Kt(), o.value && await o.value.hide();
      try {
        await b("save_pin_image", { imageData: c }), Nt.success(t("pin.saveSuccess")), o.value && await o.value.close();
      } catch (g) {
        g === "SAVE_CANCELLED" ? (P.info("[PIN窗口] 用户取消保存，恢复窗口显示"), o.value && await o.value.show()) : (P.error("[PIN窗口] 保存图片失败", g), Nt.error(t("pin.saveFailed")), o.value && await o.value.close());
      }
    }, Wn = async () => {
      o.value && await o.value.close();
    }, Pi = (c) => {
      c.preventDefault();
    }, Bn = async (c) => {
      if (c.button === 0 && o.value) {
        const g = c.target;
        if (g.hasAttribute("data-tauri-drag-region") || g.closest("[data-tauri-drag-region]")) {
          if (g.closest("button") || g.closest(".ocr-view-original"))
            return;
          try {
            await o.value.startDragging();
          } catch (p) {
            P.error("[PIN窗口] 拖拽窗口失败", p);
          }
        }
      }
    }, Ai = (c) => {
      const g = c.target;
      !g.closest(".context-menu") && !g.closest(".ocr-engine-btn-group") && !g.closest(".translate-btn-group") && !g.closest(".ocr-floating-menu") && Kt();
    }, Ys = (c) => {
      if (c.button !== 0)
        return;
      const g = c.currentTarget, p = Di(g, c.clientX, c.clientY);
      if (window.getSelection()?.removeAllRanges(), !p) {
        on();
        return;
      }
      c.preventDefault(), g.setPointerCapture(c.pointerId), G = c.pointerId, Z.value = !0, U.value = {
        anchor: p,
        focus: p
      };
    }, Ii = (c) => {
      if (!Z.value || c.pointerId !== G)
        return;
      const g = c.currentTarget, p = Di(g, c.clientX, c.clientY);
      !p || !U.value || (c.preventDefault(), U.value = {
        anchor: U.value.anchor,
        focus: p
      });
    }, Zs = (c) => {
      if (c.pointerId !== G)
        return;
      Ii(c);
      const g = c.currentTarget;
      g.hasPointerCapture(c.pointerId) && g.releasePointerCapture(c.pointerId), Z.value = !1, G = null;
    }, Xs = (c) => {
      c.pointerId === G && (Z.value = !1, G = null);
    }, on = () => {
      U.value = null, Z.value = !1, G = null;
    }, Gs = () => {
      const c = lt.value.length - 1;
      c < 0 || (window.getSelection()?.removeAllRanges(), U.value = {
        anchor: { blockIndex: 0, offset: 0 },
        focus: {
          blockIndex: c,
          offset: lt.value[c].text.length
        }
      });
    }, Di = (c, g, p) => {
      const B = c.querySelectorAll(
        ".ocr-overlay-block[data-selection-index]"
      );
      for (const W of B) {
        const J = W.getBoundingClientRect();
        if (g < J.left || g > J.right || p < J.top || p > J.bottom)
          continue;
        const xt = Number(W.dataset.selectionIndex), kt = lt.value[xt];
        if (!kt)
          return null;
        const $t = Pn(kt), Yt = xi((g - J.left) / Math.max(J.width, 1), 0, 1) * $t.renderedWidth;
        return {
          blockIndex: xt,
          offset: pd($t.boundaries, Yt)
        };
      }
      return null;
    }, Oi = (c) => {
      if (c.altKey && c.code === "Space") {
        c.preventDefault(), c.stopPropagation();
        return;
      }
      if (c.key === "Escape")
        _.value ? Kt() : Wn();
      else if (c.ctrlKey || c.metaKey) {
        const p = !!c.target?.closest('input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]');
        c.key.toLowerCase() === "c" && r.value === "ocr" && At.value && !p ? (c.preventDefault(), On()) : c.key.toLowerCase() === "a" && r.value === "ocr" && lt.value.length > 0 && !p ? (c.preventDefault(), Gs()) : c.key === "0" ? (c.preventDefault(), Li()) : c.key === "=" || c.key === "+" ? (c.preventDefault(), Ri(1.05)) : c.key === "-" && (c.preventDefault(), Ri(0.95));
      }
    }, qs = async () => {
      if (o.value)
        try {
          const c = await b(
            "get_pin_window_data",
            { label: o.value.label }
          );
          c && bi(c) && await ki();
        } catch (c) {
          P.error("[PIN窗口] 主动获取窗口数据失败", c);
        }
    };
    return Ee(
      i,
      (c) => {
        if (Gt?.disconnect(), Gt = null, !c) {
          w.value = { width: 0, height: 0 };
          return;
        }
        An(), Gt = new ResizeObserver(An), Gt.observe(c);
      },
      { flush: "post" }
    ), tn(async () => {
      if (n.value) {
        try {
          const [c, g] = await Promise.all([
            b("get_translation_engine"),
            b("get_ocr_language")
          ]);
          (c === "google" || c === "bing" || c === "offline") && (tt.value = c), it.value = pt(g);
        } catch (c) {
          P.error("[PIN窗口] 读取默认 OCR/翻译设置失败", c);
        }
        try {
          o.value = en.getCurrent();
          try {
            Mt = await o.value.listen(
              "pin-window-data",
              (c) => {
                bi(c.payload) && ki();
              }
            ), await qs();
          } catch (c) {
            P.error("[PIN窗口] 设置事件监听失败", c);
          }
        } catch (c) {
          if (P.error("[PIN窗口] 初始化错误", c), o.value)
            try {
              await o.value.show();
            } catch (g) {
              P.error("[PIN窗口] 显示窗口失败", g);
            }
        }
        document.addEventListener("click", Ai), document.addEventListener("keydown", Oi, !0), document.addEventListener("contextmenu", Pi, !0), window.addEventListener("resize", Lt), window.addEventListener("scroll", Lt, !0), window.addEventListener("blur", Kt), document.body && (document.body.oncontextmenu = (c) => (c.preventDefault(), !1));
      }
    }), xo(() => {
      a.value && URL.revokeObjectURL(a.value), Mt && Mt(), document.removeEventListener("click", Ai), document.removeEventListener("keydown", Oi, !0), document.removeEventListener("contextmenu", Pi, !0), window.removeEventListener("resize", Lt), window.removeEventListener("scroll", Lt, !0), window.removeEventListener("blur", Kt), Gt?.disconnect(), Gt = null, document.body && (document.body.oncontextmenu = null), ie && clearTimeout(ie);
    }), (c, g) => (L(), D(
      "div",
      {
        class: rt(["pin-container", { "ocr-mode": r.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: ht(nn, ["prevent"]),
        onWheelCapture: Fs
      },
      [
        j(" 图片容器 "),
        a.value && r.value === "pin" ? (L(), D(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: gt(bt.value),
            onWheelCapture: Ti,
            onContextmenu: ht(nn, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Bn
          },
          [
            x("img", {
              src: a.value,
              alt: c.$t("screenshot.pin"),
              style: gt(Pt.value),
              onLoad: _i,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, yd)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : j("v-if", !0),
        r.value === "ocr" ? (L(), D(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: ht(nn, ["prevent"])
          },
          [
            x("header", vd, [
              x(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Bn
                },
                [
                  x("div", xd, [
                    m(C(Ue), {
                      theme: "outline",
                      size: "18"
                    }),
                    x(
                      "span",
                      kd,
                      Y(c.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  x("div", bd, [
                    x("button", {
                      class: "ocr-window-btn",
                      title: ct.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow"),
                      onClick: ht(zi, ["stop"])
                    }, [
                      (L(), Tt(he(ct.value ? C(Qn) : C(Ji)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, Sd),
                    g[2] || (g[2] = x(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    x("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.minimize"),
                      onClick: ht(Hs, ["stop"])
                    }, [
                      m(C($o), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, Md),
                    x("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.maximize"),
                      onClick: ht(js, ["stop"])
                    }, [
                      m(C(bl), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, Cd),
                    x("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.close"),
                      onClick: ht(Wn, ["stop"])
                    }, [
                      m(C(Jn), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, _d)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              x(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: Bn
                },
                [
                  x("div", Td, [
                    a.value ? (L(), D("img", {
                      key: 0,
                      src: a.value,
                      alt: c.$t("pin.ocrPreviewAlt"),
                      onLoad: _i,
                      draggable: "false"
                    }, null, 40, zd)) : j("v-if", !0)
                  ]),
                  x("div", Rd, [
                    x(
                      "div",
                      Ld,
                      Y(v.value),
                      1
                      /* TEXT */
                    ),
                    x("div", Pd, [
                      x(
                        "span",
                        Ad,
                        Y(k.value),
                        1
                        /* TEXT */
                      ),
                      g[3] || (g[3] = x(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      x(
                        "span",
                        Id,
                        Y(E.value),
                        1
                        /* TEXT */
                      ),
                      !u.value && !d.value && l.value.trim() ? (L(), D("span", Dd, " ✓ ")) : j("v-if", !0)
                    ])
                  ]),
                  x("button", {
                    class: "ocr-view-original",
                    title: I.value ? c.$t("pin.viewResult") : c.$t("pin.viewOriginal"),
                    onClick: ht(Ws, ["stop"])
                  }, [
                    (L(), Tt(he(I.value ? C(Ue) : C(pl)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    x(
                      "span",
                      null,
                      Y(I.value ? c.$t("pin.viewResult") : c.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, Od)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            x(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: g[1] || (g[1] = ht(() => {
                }, ["stop"]))
              },
              [
                I.value ? (L(), D("div", Ed, [
                  x("img", {
                    src: a.value || s.value,
                    alt: c.$t("pin.originalImageAlt")
                  }, null, 8, $d)
                ])) : (L(), D(
                  Bt,
                  { key: 1 },
                  [
                    u.value ? (L(), D("div", Wd, [
                      m(C(Ki), {
                        class: "ocr-loading-icon",
                        size: "20",
                        theme: "outline",
                        strokeWidth: 3
                      }),
                      x(
                        "span",
                        null,
                        Y(c.$t("pin.recognizing")),
                        1
                        /* TEXT */
                      )
                    ])) : d.value ? (L(), D(
                      "div",
                      Bd,
                      Y(d.value),
                      1
                      /* TEXT */
                    )) : l.value.trim() ? (L(), D(
                      "div",
                      {
                        key: 3,
                        class: rt(["ocr-result-layout", { "records-open": z.value }])
                      },
                      [
                        x("section", Hd, [
                          x("div", jd, [
                            x("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: i,
                              src: a.value || s.value,
                              alt: c.$t("pin.ocrSourceAlt"),
                              onLoad: An
                            }, null, 40, Fd),
                            qt.value.length > 0 ? (L(), D("div", Vd, [
                              (L(!0), D(
                                Bt,
                                null,
                                Zt(qt.value, (p) => (L(), D(
                                  "span",
                                  {
                                    key: p.id,
                                    class: "ocr-selection-highlight",
                                    style: gt(ps(p))
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : j("v-if", !0),
                            lt.value.length > 0 ? (L(), D(
                              "div",
                              {
                                key: 1,
                                class: "ocr-text-overlay",
                                onPointerdown: Ys,
                                onPointermove: Ii,
                                onPointerup: Zs,
                                onPointercancel: Xs
                              },
                              [
                                (L(!0), D(
                                  Bt,
                                  null,
                                  Zt(lt.value, (p, B) => (L(), D("span", {
                                    key: p.id,
                                    class: "ocr-overlay-block",
                                    "data-selection-index": B,
                                    style: gt(ms(p)),
                                    textContent: Y(p.text.trim())
                                  }, null, 12, Ud))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              32
                              /* NEED_HYDRATION */
                            )) : j("v-if", !0)
                          ])
                        ]),
                        z.value ? (L(), D(
                          "section",
                          {
                            key: 0,
                            class: "ocr-record-pane",
                            onPointerdown: on
                          },
                          [
                            T.value ? (L(), D("section", Yd, [
                              x("div", Zd, [
                                x(
                                  "span",
                                  Xd,
                                  Y(c.$t("pin.selectedText")),
                                  1
                                  /* TEXT */
                                ),
                                x(
                                  "div",
                                  Gd,
                                  Y(T.value.sourceText),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              x("div", qd, [
                                x(
                                  "span",
                                  Kd,
                                  Y(F.value),
                                  1
                                  /* TEXT */
                                ),
                                x("div", {
                                  class: "ocr-selection-translation-editor",
                                  contenteditable: "plaintext-only",
                                  spellcheck: "false",
                                  textContent: Y(T.value.translatedText),
                                  onBlur: As
                                }, null, 40, Jd)
                              ])
                            ])) : j("v-if", !0),
                            (L(!0), D(
                              Bt,
                              null,
                              Zt(h.value, (p, B) => (L(), D(
                                "article",
                                {
                                  key: p.id,
                                  class: rt(["ocr-record-item", { selected: p.selected }])
                                },
                                [
                                  x("div", Qd, [
                                    x("header", {
                                      class: "ocr-record-header",
                                      onClick: ht((W) => Si(p.id), ["stop"])
                                    }, [
                                      x("input", {
                                        class: "ocr-record-checkbox",
                                        type: "checkbox",
                                        checked: p.selected,
                                        onChange: ht((W) => Si(p.id), ["stop"]),
                                        onClick: g[0] || (g[0] = ht(() => {
                                        }, ["stop"]))
                                      }, null, 40, eg),
                                      x(
                                        "span",
                                        ng,
                                        "#" + Y(B + 1),
                                        1
                                        /* TEXT */
                                      )
                                    ], 8, tg),
                                    x("div", {
                                      class: "ocr-record-editor",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: Y(p.text),
                                      onBlur: (W) => Mi(p.id, "text", W)
                                    }, null, 40, ig),
                                    p.confidence > 0 ? (L(), D(
                                      "span",
                                      og,
                                      Y(Math.round(p.confidence)) + "% ",
                                      1
                                      /* TEXT */
                                    )) : j("v-if", !0)
                                  ]),
                                  p.translatedText ? (L(), D("div", sg, [
                                    x(
                                      "span",
                                      ag,
                                      Y(F.value),
                                      1
                                      /* TEXT */
                                    ),
                                    x("div", {
                                      class: "ocr-record-editor translated",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: Y(p.translatedText),
                                      onBlur: (W) => Mi(p.id, "translatedText", W)
                                    }, null, 40, rg)
                                  ])) : j("v-if", !0)
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
                        )) : j("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )) : (L(), D(
                      "div",
                      Nd,
                      Y(c.$t("pin.noTextRecognized")),
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
            x("footer", lg, [
              m(oe, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.copyText"),
                disabled: !l.value.trim(),
                onClick: ht(On, ["stop"])
              }, {
                default: Ot(() => [
                  m(C(Fn), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  x(
                    "span",
                    null,
                    Y(It.value > 0 ? `${c.$t("pin.copyText")} (${It.value})` : c.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              m(oe, {
                class: "ocr-action-btn",
                type: "text",
                title: z.value ? ft.value : O.value,
                disabled: h.value.length === 0,
                onClick: ht(Bs, ["stop"])
              }, {
                default: Ot(() => [
                  m(C(Ue), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  x(
                    "span",
                    null,
                    Y(z.value ? ft.value : O.value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              x(
                "div",
                {
                  ref_key: "translateMenuAnchorRef",
                  ref: Q,
                  class: "translate-btn-group relative"
                },
                [
                  m(oe, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: c.$t("pin.translate"),
                    disabled: !l.value.trim() || V.value,
                    onClick: ht(Es, ["stop"])
                  }, {
                    default: Ot(() => [
                      V.value ? (L(), Tt(C(Ki), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })) : (L(), Tt(C(Wo), {
                        key: 0,
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })),
                      x(
                        "span",
                        null,
                        Y(c.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  m(oe, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !l.value.trim() || V.value,
                    onClick: ht(Is, ["stop"])
                  }, {
                    default: Ot(() => [
                      m(C(qi), {
                        size: "17",
                        theme: "outline",
                        strokeWidth: 2.8
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  j(" 翻译引擎菜单 "),
                  H.value ? (L(), D(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: gt(K.value)
                    },
                    [
                      (L(!0), D(
                        Bt,
                        null,
                        Zt(X.value, (p) => (L(), D("div", {
                          key: p.value,
                          class: rt(["menu-item", { active: tt.value === p.value }]),
                          onClick: (B) => Ds(p.value)
                        }, [
                          x(
                            "span",
                            hg,
                            Y(p.label),
                            1
                            /* TEXT */
                          ),
                          tt.value === p.value ? (L(), Tt(he(C(Kn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : j("v-if", !0)
                        ], 10, cg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : j("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              x(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: st,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  m(oe, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: c.$t("pin.ocrLanguage"),
                    disabled: u.value,
                    onClick: ht(Ci, ["stop"])
                  }, {
                    default: Ot(() => [
                      m(C(Ue), {
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      }),
                      x(
                        "span",
                        null,
                        Y(yt.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  m(oe, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: u.value,
                    onClick: ht(Ci, ["stop"])
                  }, {
                    default: Ot(() => [
                      m(C(qi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  nt.value ? (L(), D(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: gt(wt.value)
                    },
                    [
                      (L(!0), D(
                        Bt,
                        null,
                        Zt(ot.value, (p) => (L(), D("div", {
                          key: p.value,
                          class: rt(["menu-item", { active: it.value === p.value }]),
                          onClick: (B) => Os(p.value)
                        }, [
                          x(
                            "span",
                            dg,
                            Y(p.label),
                            1
                            /* TEXT */
                          ),
                          it.value === p.value ? (L(), Tt(he(C(Kn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : j("v-if", !0)
                        ], 10, ug))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : j("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              x("div", gg, [
                m(oe, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: c.$t("pin.recognizeAgain"),
                  disabled: u.value || !s.value,
                  onClick: ht(In, ["stop"])
                }, {
                  default: Ot(() => [
                    m(C(vl), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    x(
                      "span",
                      null,
                      Y(c.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              m(oe, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.saveAsText"),
                disabled: !l.value.trim(),
                onClick: ht(Rs, ["stop"])
              }, {
                default: Ot(() => [
                  m(C(to), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  x(
                    "span",
                    null,
                    Y(c.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              g[4] || (g[4] = x(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              m(oe, {
                class: "ocr-action-btn more",
                type: "text",
                title: c.$t("pin.more"),
                onClick: ht(Ns, ["stop"])
              }, {
                default: Ot(() => [
                  m(C(gl), {
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
        )) : j("v-if", !0),
        _t.value ? (L(), D(
          "div",
          fg,
          Y(Math.round(ut.value * 100)) + "% ",
          1
          /* TEXT */
        )) : j("v-if", !0),
        j(" 右键菜单 "),
        _.value ? (L(), D(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: gt(xs.value)
          },
          [
            x("div", {
              class: "menu-item",
              onClick: zi
            }, [
              (L(), Tt(he(ct.value ? C(Ji) : C(Qn)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              x(
                "span",
                null,
                Y(ct.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Li
            }, [
              m(C(yl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Vs
            }, [
              m(C(Fn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Us
            }, [
              m(C(to), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            r.value === "ocr" && l.value.trim() ? (L(), D("div", {
              key: 0,
              class: "menu-item",
              onClick: On
            }, [
              m(C(Fn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : j("v-if", !0),
            g[5] || (g[5] = x(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            x("div", {
              class: "menu-item danger",
              onClick: Wn
            }, [
              m(C(Jn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : j("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), pg = /* @__PURE__ */ _n(mg, [["__scopeId", "data-v-b8b84cd7"]]), wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pg
}, Symbol.toStringTag, { value: "Module" }));
async function yg(e) {
  return e.toDataURL("image/png");
}
function vg(e) {
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
async function xg(e) {
  const t = Date.now(), n = await yg(e);
  Ct.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await b("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr",
      language: "auto"
    }), o = vg(i.blocks), s = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || o.map((r) => r.text).join(`
`), a = {
      blocks: o,
      full_text: s,
      text: s,
      language: typeof i.language == "string" && i.language || Ro(s),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return Ct.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw P.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Ct.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function kg() {
  return Promise.resolve();
}
async function bg() {
  return Promise.resolve();
}
const Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: xg,
  terminateOcr: bg,
  warmupOcr: kg
}, Symbol.toStringTag, { value: "Module" }));
export {
  zg as activate
};
