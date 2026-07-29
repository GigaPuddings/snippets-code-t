var ta = Object.defineProperty;
var ea = (n, t, e) => t in n ? ta(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var L = (n, t, e) => ea(n, typeof t != "symbol" ? t + "" : t, e);
import { inject as me, createVNode as p, defineComponent as Lt, ref as B, computed as O, watch as Oe, nextTick as pe, createElementBlock as I, openBlock as R, createCommentVNode as V, createElementVNode as k, Fragment as Bt, renderList as Kt, normalizeClass as ht, createBlock as Rt, resolveDynamicComponent as le, unref as C, toDisplayString as Z, normalizeStyle as dt, onMounted as Je, onUnmounted as xo, withDirectives as Ze, withKeys as Wi, vModelText as na, getCurrentInstance as Pe, readonly as ia, getCurrentScope as oa, onScopeDispose as sa, isRef as aa, warn as ra, provide as la, mergeProps as ca, renderSlot as ye, Transition as ni, withCtx as It, createTextVNode as ha, vShow as mn, shallowReactive as ua, withModifiers as ft, isVNode as Xe, render as pn } from "vue";
import { useI18n as ko } from "vue-i18n";
const Pg = (n) => {
  n.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => zc)
  }), n.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => xg)
  });
};
function da(n, t, e, i) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(n) : i ? i.value : t.get(n);
}
function ga(n, t, e, i, o) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(n, e), e;
}
var cn;
const Zt = "__TAURI_TO_IPC_KEY__";
function fa(n, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(n, t);
}
async function S(n, t = {}, e) {
  return window.__TAURI_INTERNALS__.invoke(n, t, e);
}
function ma(n, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(n, t);
}
class pa {
  get rid() {
    return da(this, cn, "f");
  }
  constructor(t) {
    cn.set(this, void 0), ga(this, cn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return S("plugin:resources|close", {
      rid: this.rid
    });
  }
}
cn = /* @__PURE__ */ new WeakMap();
class Ve {
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
    return new Ue(this.width * t, this.height * t);
  }
  [Zt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class Ue {
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
    return new Ve(this.width / t, this.height / t);
  }
  [Zt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class _e {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ve ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ue ? this.size : this.size.toPhysical(t);
  }
  [Zt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class bo {
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
    return new ae(this.x * t, this.y * t);
  }
  [Zt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class ae {
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
    return new bo(this.x / t, this.y / t);
  }
  [Zt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
class on {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof bo ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof ae ? this.position : this.position.toPhysical(t);
  }
  [Zt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Zt]();
  }
}
var Ft;
(function(n) {
  n.WINDOW_RESIZED = "tauri://resize", n.WINDOW_MOVED = "tauri://move", n.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", n.WINDOW_DESTROYED = "tauri://destroyed", n.WINDOW_FOCUS = "tauri://focus", n.WINDOW_BLUR = "tauri://blur", n.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", n.WINDOW_THEME_CHANGED = "tauri://theme-changed", n.WINDOW_CREATED = "tauri://window-created", n.WEBVIEW_CREATED = "tauri://webview-created", n.DRAG_ENTER = "tauri://drag-enter", n.DRAG_OVER = "tauri://drag-over", n.DRAG_DROP = "tauri://drag-drop", n.DRAG_LEAVE = "tauri://drag-leave";
})(Ft || (Ft = {}));
async function So(n, t) {
  await S("plugin:event|unlisten", {
    event: n,
    eventId: t
  });
}
async function wn(n, t, e) {
  var i;
  const o = typeof e?.target == "string" ? { kind: "AnyLabel", label: e.target } : (i = e?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return S("plugin:event|listen", {
    event: n,
    target: o,
    handler: fa(t)
  }).then((s) => async () => So(n, s));
}
async function wa(n, t, e) {
  return wn(n, (i) => {
    So(n, i.id), t(i);
  }, e);
}
async function ya(n, t) {
  await S("plugin:event|emit", {
    event: n,
    payload: t
  });
}
async function va(n, t, e) {
  await S("plugin:event|emit_to", {
    target: typeof n == "string" ? { kind: "AnyLabel", label: n } : n,
    event: t,
    payload: e
  });
}
let xa = class hn extends pa {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, e, i) {
    return S("plugin:image|new", {
      rgba: yn(t),
      width: e,
      height: i
    }).then((o) => new hn(o));
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
    return S("plugin:image|from_bytes", {
      bytes: yn(t)
    }).then((e) => new hn(e));
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
    return S("plugin:image|from_path", { path: t }).then((e) => new hn(e));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return S("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return S("plugin:image|size", { rid: this.rid });
  }
};
function yn(n) {
  return n == null ? null : typeof n == "string" ? n : n instanceof xa ? n.rid : n;
}
var Un;
(function(n) {
  n[n.Critical = 1] = "Critical", n[n.Informational = 2] = "Informational";
})(Un || (Un = {}));
class ka {
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
var $i;
(function(n) {
  n.None = "none", n.Normal = "normal", n.Indeterminate = "indeterminate", n.Paused = "paused", n.Error = "error";
})($i || ($i = {}));
function ba() {
  return new Qe(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Nn() {
  return S("plugin:window|get_all_windows").then((n) => n.map((t) => new Qe(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Hn = ["tauri://created", "tauri://error"];
class Qe {
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
  constructor(t, e = {}) {
    var i;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), e?.skip || S("plugin:window|create", {
      options: {
        ...e,
        parent: typeof e.parent == "string" ? e.parent : (i = e.parent) === null || i === void 0 ? void 0 : i.label,
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
    var e;
    return (e = (await Nn()).find((i) => i.label === t)) !== null && e !== void 0 ? e : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ba();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Nn();
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
    for (const t of await Nn())
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
  async listen(t, e) {
    return this._handleTauriEvent(t, e) ? () => {
      const i = this.listeners[t];
      i.splice(i.indexOf(e), 1);
    } : wn(t, e, {
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
  async once(t, e) {
    return this._handleTauriEvent(t, e) ? () => {
      const i = this.listeners[t];
      i.splice(i.indexOf(e), 1);
    } : wa(t, e, {
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
  async emit(t, e) {
    if (Hn.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: e
        });
      return;
    }
    return ya(t, e);
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
  async emitTo(t, e, i) {
    if (Hn.includes(e)) {
      for (const o of this.listeners[e] || [])
        o({
          event: e,
          id: -1,
          payload: i
        });
      return;
    }
    return va(t, e, i);
  }
  /** @ignore */
  _handleTauriEvent(t, e) {
    return Hn.includes(t) ? (t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e], !0) : !1;
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
    return S("plugin:window|scale_factor", {
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
    return S("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new ae(t));
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
    return S("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new ae(t));
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
    return S("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ue(t));
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
    return S("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Ue(t));
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
    return S("plugin:window|is_fullscreen", {
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
    return S("plugin:window|is_minimized", {
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
    return S("plugin:window|is_maximized", {
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
    return S("plugin:window|is_focused", {
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
    return S("plugin:window|is_decorated", {
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
    return S("plugin:window|is_resizable", {
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
    return S("plugin:window|is_maximizable", {
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
    return S("plugin:window|is_minimizable", {
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
    return S("plugin:window|is_closable", {
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
    return S("plugin:window|is_visible", {
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
    return S("plugin:window|title", {
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
    return S("plugin:window|theme", {
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
    return S("plugin:window|is_always_on_top", {
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
    return S("plugin:window|center", {
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
    let e = null;
    return t && (t === Un.Critical ? e = { type: "Critical" } : e = { type: "Informational" }), S("plugin:window|request_user_attention", {
      label: this.label,
      value: e
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
    return S("plugin:window|set_resizable", {
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
    return S("plugin:window|set_enabled", {
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
    return S("plugin:window|is_enabled", {
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
    return S("plugin:window|set_maximizable", {
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
    return S("plugin:window|set_minimizable", {
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
    return S("plugin:window|set_closable", {
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
    return S("plugin:window|set_title", {
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
    return S("plugin:window|maximize", {
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
    return S("plugin:window|unmaximize", {
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
    return S("plugin:window|toggle_maximize", {
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
    return S("plugin:window|minimize", {
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
    return S("plugin:window|unminimize", {
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
    return S("plugin:window|show", {
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
    return S("plugin:window|hide", {
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
    return S("plugin:window|close", {
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
    return S("plugin:window|destroy", {
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
    return S("plugin:window|set_decorations", {
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
    return S("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return S("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return S("plugin:window|set_effects", {
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
    return S("plugin:window|set_always_on_top", {
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
    return S("plugin:window|set_always_on_bottom", {
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
    return S("plugin:window|set_content_protected", {
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
    return S("plugin:window|set_size", {
      label: this.label,
      value: t instanceof _e ? t : new _e(t)
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
    return S("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof _e ? t : t ? new _e(t) : null
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
    return S("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof _e ? t : t ? new _e(t) : null
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
    function e(i) {
      return i ? { Logical: i } : null;
    }
    return S("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: e(t?.minWidth),
        minHeight: e(t?.minHeight),
        maxWidth: e(t?.maxWidth),
        maxHeight: e(t?.maxHeight)
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
    return S("plugin:window|set_position", {
      label: this.label,
      value: t instanceof on ? t : new on(t)
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
    return S("plugin:window|set_fullscreen", {
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
    return S("plugin:window|set_focus", {
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
    return S("plugin:window|set_icon", {
      label: this.label,
      value: yn(t)
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
    return S("plugin:window|set_skip_taskbar", {
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
    return S("plugin:window|set_cursor_grab", {
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
    return S("plugin:window|set_cursor_visible", {
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
    return S("plugin:window|set_cursor_icon", {
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
    return S("plugin:window|set_background_color", { color: t });
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
    return S("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof on ? t : new on(t)
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
    return S("plugin:window|set_ignore_cursor_events", {
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
    return S("plugin:window|start_dragging", {
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
    return S("plugin:window|start_resize_dragging", {
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
    return S("plugin:window|set_badge_count", {
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
    return S("plugin:window|set_badge_label", {
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
    return S("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? yn(t) : void 0
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
    return S("plugin:window|set_progress_bar", {
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
    return S("plugin:window|set_visible_on_all_workspaces", {
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
    return S("plugin:window|set_title_bar_style", {
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
    return S("plugin:window|set_theme", {
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
    return this.listen(Ft.WINDOW_RESIZED, (e) => {
      e.payload = new Ue(e.payload), t(e);
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
    return this.listen(Ft.WINDOW_MOVED, (e) => {
      e.payload = new ae(e.payload), t(e);
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
    return this.listen(Ft.WINDOW_CLOSE_REQUESTED, async (e) => {
      const i = new ka(e);
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
    const e = await this.listen(Ft.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new ae(a.payload.position)
        }
      });
    }), i = await this.listen(Ft.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new ae(a.payload.position)
        }
      });
    }), o = await this.listen(Ft.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new ae(a.payload.position)
        }
      });
    }), s = await this.listen(Ft.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      e(), o(), i(), s();
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
    const e = await this.listen(Ft.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), i = await this.listen(Ft.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
    });
    return () => {
      e(), i();
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
var Bi;
(function(n) {
  n.Disabled = "disabled", n.Throttle = "throttle", n.Suspend = "suspend";
})(Bi || (Bi = {}));
var Ni;
(function(n) {
  n.AppearanceBased = "appearanceBased", n.Light = "light", n.Dark = "dark", n.MediumLight = "mediumLight", n.UltraDark = "ultraDark", n.Titlebar = "titlebar", n.Selection = "selection", n.Menu = "menu", n.Popover = "popover", n.Sidebar = "sidebar", n.HeaderView = "headerView", n.Sheet = "sheet", n.WindowBackground = "windowBackground", n.HudWindow = "hudWindow", n.FullScreenUI = "fullScreenUI", n.Tooltip = "tooltip", n.ContentBackground = "contentBackground", n.UnderWindowBackground = "underWindowBackground", n.UnderPageBackground = "underPageBackground", n.Mica = "mica", n.Blur = "blur", n.Acrylic = "acrylic", n.Tabbed = "tabbed", n.TabbedDark = "tabbedDark", n.TabbedLight = "tabbedLight";
})(Ni || (Ni = {}));
var Hi;
(function(n) {
  n.FollowsWindowActiveState = "followsWindowActiveState", n.Active = "active", n.Inactive = "inactive";
})(Hi || (Hi = {}));
function St(n, t) {
  const e = t.x - n.x, i = t.y - n.y;
  return Math.sqrt(e * e + i * i);
}
function ji(n, t) {
  return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
}
function Mo(n) {
  return {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
}
function Sa(n, t) {
  return {
    x: Math.max(t.x, Math.min(n.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(n.y, t.y + t.height))
  };
}
function te(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && !isNaN(n.x) && !isNaN(n.y) && isFinite(n.x) && isFinite(n.y);
}
function Te(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && typeof n.width == "number" && typeof n.height == "number" && !isNaN(n.x) && !isNaN(n.y) && !isNaN(n.width) && !isNaN(n.height) && isFinite(n.x) && isFinite(n.y) && isFinite(n.width) && isFinite(n.height) && n.width > 0 && n.height > 0;
}
class Ma {
  constructor(t, e) {
    L(this, "canvas");
    L(this, "ctx");
    L(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = e;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t) {
    if (!Te(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const e = this.canvas.width / (window.devicePixelRatio || 1), i = this.canvas.height / (window.devicePixelRatio || 1), o = Math.round(t.x), s = Math.round(t.y), a = Math.round(t.width), r = Math.round(t.height);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, e, i), this.ctx.moveTo(o, s), this.ctx.lineTo(o, s + r), this.ctx.lineTo(o + a, s + r), this.ctx.lineTo(o + a, s), this.ctx.closePath(), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, e = !0) {
    const { x: i, y: o, width: s, height: a } = t;
    this.ctx.save();
    const r = Math.round(i) + 0.5, l = Math.round(o) + 0.5, h = Math.max(0, Math.round(s) - 1), u = Math.max(0, Math.round(a) - 1);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.strokeRect(r + 1, l + 1, h, u), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.strokeRect(r, l, h, u), e && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: e, y: i, width: o, height: s } = t, a = Mo(t);
    this.ctx.setLineDash([]), [
      { x: e, y: i, width: 10, height: 10 },
      // 左上
      { x: e + o, y: i, width: 10, height: 10 },
      // 右上
      { x: e, y: i + s, width: 10, height: 10 },
      // 左下
      { x: e + o, y: i + s, width: 10, height: 10 },
      // 右下
      { x: a.x, y: i, width: 16, height: 6 },
      // 上中
      { x: a.x, y: i + s, width: 16, height: 6 },
      // 下中
      { x: e, y: a.y, width: 6, height: 16 },
      // 左中
      { x: e + o, y: a.y, width: 6, height: 16 }
      // 右中
    ].forEach((l) => {
      const h = Math.round(l.x) - l.width / 2, u = Math.round(l.y) - l.height / 2, d = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(h + 1, u + 1, l.width, l.height, d), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(h, u, l.width, l.height, d), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
    });
  }
  // 绘制标注列表
  drawAnnotations(t, e) {
    const i = this.createDrawingContext(e);
    t.forEach((o) => {
      const s = o.getData();
      s.hovered && o.drawHover(i), o.draw(i), s.selected && (o.drawSelection(i), ["rectangle", "ellipse", "line", "arrow"].includes(s.type) && this.drawAnnotationHandles(o));
    });
  }
  // 绘制当前正在创建的标注
  drawCurrentAnnotation(t, e) {
    const i = this.createDrawingContext(e);
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
  createScreenshotContext(t, e, i) {
    return {
      ctx: t,
      scale: e,
      offset: { x: i.x * e, y: i.y * e },
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
    const e = t.getData();
    if (e.type !== "mosaic" && e.type !== "text" && ["rectangle", "ellipse", "line", "arrow"].includes(e.type) && e.points.length >= 2) {
      const i = e.points[0], o = e.points[e.points.length - 1], s = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(i.x, i.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(o.x, o.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, e) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: i, colorInfo: o, showFormat: s, previewImage: a, zoomFactor: r, isCopied: l } = t, h = 156, u = 188, d = 18;
    let x = i.x + d, w = i.y + d;
    x + h > e.x + e.width && (x = i.x - h - d), w + u > e.y + e.height && (w = i.y - u - d), x < e.x && (x = e.x + d), w < e.y && (w = e.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(x, w, h, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const b = 108, f = x + (h - b) / 2, v = w + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(f, v, b, b), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(f, v, b, b);
    const A = a ? a.width : r, N = b / A;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      f,
      v,
      b,
      b
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let j = 1; j < A; j++) {
      const Q = f + j * N;
      this.ctx.moveTo(Q, v), this.ctx.lineTo(Q, v + b);
      const q = v + j * N;
      this.ctx.moveTo(f, q), this.ctx.lineTo(f + b, q);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let j = 1; j < A; j++) {
      const Q = f + j * N + 0.5;
      this.ctx.moveTo(Q, v), this.ctx.lineTo(Q, v + b);
      const q = v + j * N + 0.5;
      this.ctx.moveTo(f, q), this.ctx.lineTo(f + b, q);
    }
    this.ctx.stroke();
    const T = Math.floor(A / 2), U = f + T * N, Y = v + T * N;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(U, Y, N, N), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      U - 1,
      Y - 1,
      N + 2,
      N + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      U,
      Y,
      N,
      N
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let G = v + b + 22;
    if (o) {
      this.ctx.fillStyle = o.hex, this.ctx.fillRect(x + 16, G - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(x + 16, G - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const j = s === "hex" ? o.hex : `${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}`;
      this.ctx.fillText(j, x + 44, G), G += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, x + 16, G), G += 17, this.ctx.font = "12px Arial";
    const H = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(H, x + 16, G), this.ctx.restore();
  }
}
class Ca {
  // 物理尺寸
  constructor(t) {
    L(this, "scale");
    L(this, "canvasRect");
    L(this, "canvasSize");
    // 逻辑尺寸
    L(this, "physicalSize");
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
    return te(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return te(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !te(t) || !Te(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !te(t) || !Te(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Te(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!te(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Sa(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Te(t))
      return console.warn("Invalid rect in clampRectToCanvas:", t), { x: 0, y: 0, width: 0, height: 0 };
    const e = Math.max(0, t.x), i = Math.max(0, t.y), o = Math.min(this.canvasSize.width - e, t.width), s = Math.min(this.canvasSize.height - i, t.height);
    return { x: e, y: i, width: o, height: s };
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
  distance(t, e) {
    return St(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, i = 0) {
    if (!te(t) || !Te(e))
      return !1;
    if (i === 0)
      return ji(t, e);
    const o = {
      x: e.x - i,
      y: e.y - i,
      width: e.width + i * 2,
      height: e.height + i * 2
    };
    return ji(t, o);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, i, o = 8) {
    if (!te(t) || !te(e) || !te(i))
      return !1;
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return St(t, e) <= o;
    const d = h / u;
    let x;
    return d < 0 ? x = e : d > 1 ? x = i : x = {
      x: e.x + d * r,
      y: e.y + d * l
    }, St(t, x) <= o;
  }
}
var z = /* @__PURE__ */ ((n) => (n.None = "none", n.Drawing = "drawing", n.Moving = "moving", n.ResizingNW = "resizing-nw", n.ResizingNE = "resizing-ne", n.ResizingSW = "resizing-sw", n.ResizingSE = "resizing-se", n.ResizingN = "resizing-n", n.ResizingS = "resizing-s", n.ResizingW = "resizing-w", n.ResizingE = "resizing-e", n.DrawingRect = "drawing-rect", n.DrawingEllipse = "drawing-ellipse", n.DrawingLine = "drawing-line", n.DrawingArrow = "drawing-arrow", n.DrawingPen = "drawing-pen", n.EditingAnnotation = "editing-annotation", n.MovingAnnotation = "moving-annotation", n.ResizingAnnotationNW = "resizing-annotation-nw", n.ResizingAnnotationSE = "resizing-annotation-se", n.DrawingText = "drawing-text", n.DrawingMarker = "drawing-marker", n.DrawingMosaic = "drawing-mosaic", n.ColorPicking = "color-picking", n.Pinning = "pinning", n))(z || {}), m = /* @__PURE__ */ ((n) => (n.Select = "select", n.Rectangle = "rectangle", n.Ellipse = "ellipse", n.Line = "line", n.Arrow = "arrow", n.Pen = "pen", n.Mosaic = "mosaic", n.Text = "text", n.Marker = "marker", n.ColorPicker = "color-picker", n.Ocr = "ocr", n.Pin = "pin", n.Translate = "translate", n))(m || {});
class _a {
  constructor(t, e) {
    L(this, "coordinateSystem");
    L(this, "canvas");
    L(this, "isDrawing", !1);
    L(this, "currentOperation", z.None);
    L(this, "startPoint", { x: 0, y: 0 });
    L(this, "lastMousePos", { x: 0, y: 0 });
    L(this, "preventDefault", (t) => {
      t.preventDefault();
    });
    this.canvas = t, this.coordinateSystem = e, this.bindEvents();
  }
  bindEvents() {
    this.canvas.addEventListener("contextmenu", this.preventDefault), this.canvas.addEventListener("dragstart", this.preventDefault), this.canvas.addEventListener("selectstart", this.preventDefault);
  }
  unbind() {
    this.canvas.removeEventListener("contextmenu", this.preventDefault), this.canvas.removeEventListener("dragstart", this.preventDefault), this.canvas.removeEventListener("selectstart", this.preventDefault);
  }
  getOperationType(t, e, i, o) {
    const s = this.getAnnotationAtPoint(t, o);
    if (e !== m.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(e) : z.None : z.Drawing;
    if (s) {
      if (s.getData().type === m.Mosaic)
        return z.None;
      const a = this.getAnnotationControlPointOperation(t, s);
      return a !== z.None ? a : z.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, o.length > 0) : z.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [m.Rectangle]: z.DrawingRect,
      [m.Ellipse]: z.DrawingEllipse,
      [m.Line]: z.DrawingLine,
      [m.Arrow]: z.DrawingArrow,
      [m.Pen]: z.DrawingPen,
      [m.Text]: z.DrawingText,
      [m.Marker]: z.DrawingMarker,
      [m.Mosaic]: z.DrawingMosaic,
      [m.ColorPicker]: z.ColorPicking,
      [m.Ocr]: z.None,
      [m.Pin]: z.Pinning,
      [m.Translate]: z.None,
      [m.Select]: z.None
    }[t] || z.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, i) {
    const { x: o, y: s, width: a, height: r } = e, l = 12;
    if (i)
      return z.None;
    const h = Mo(e);
    return this.isInHandle(t, { x: o, y: s }, l) ? z.ResizingNW : this.isInHandle(t, { x: o + a, y: s }, l) ? z.ResizingNE : this.isInHandle(t, { x: o, y: s + r }, l) ? z.ResizingSW : this.isInHandle(t, { x: o + a, y: s + r }, l) ? z.ResizingSE : this.isInHandle(t, { x: h.x, y: s }, l) ? z.ResizingN : this.isInHandle(t, { x: h.x, y: s + r }, l) ? z.ResizingS : this.isInHandle(t, { x: o, y: h.y }, l) ? z.ResizingW : this.isInHandle(t, { x: o + a, y: h.y }, l) ? z.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? z.Moving : z.Drawing;
  }
  // 检查是否在控制点范围内
  isInHandle(t, e, i) {
    return Math.abs(t.x - e.x) <= i && Math.abs(t.y - e.y) <= i;
  }
  // 获取指定位置的标注
  getAnnotationAtPoint(t, e) {
    for (let i = e.length - 1; i >= 0; i--) {
      const o = e[i];
      if (o.hitTest(t))
        return o;
    }
    return null;
  }
  // 获取标注控制点操作类型
  getAnnotationControlPointOperation(t, e) {
    if (!te(t))
      return z.None;
    const i = e.getData();
    if (i.type === m.Mosaic || i.type === m.Text || i.type === m.Marker)
      return z.None;
    if ([
      m.Rectangle,
      m.Ellipse,
      m.Line,
      m.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const o = i.points[0], s = i.points[i.points.length - 1], a = 8, r = 6, l = St(t, o), h = St(t, s);
      if (l <= a + r)
        return z.ResizingAnnotationNW;
      if (h <= a + r)
        return z.ResizingAnnotationSE;
    }
    return z.None;
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
    this.isDrawing = !1, this.currentOperation = z.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class he {
  constructor(t) {
    L(this, "data");
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
  move(t, e) {
    this.data.points.forEach((i) => {
      i.x += t, i.y += e;
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
class Ta extends he {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Rectangle,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = o.x - i.x, a = o.y - i.y;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(i.x, i.y, s, a), e.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: o } = t, s = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: s.x * i - o.x,
      y: s.y * i - o.y
    }, l = (a.x - s.x) * i, h = (a.y - s.y) * i;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth * i, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(r.x, r.y, l, h), e.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = Math.min(i.x, o.x), a = Math.max(i.x, o.x), r = Math.min(i.y, o.y), l = Math.max(i.y, o.y);
    return t.x >= s - e && t.x <= a + e && t.y >= r - e && t.y <= l + e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((o) => {
      e.fillRect(o.x - i / 2, o.y - i / 2, i, i), e.strokeRect(o.x - i / 2, o.y - i / 2, i, i);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = o.x - i.x, a = o.y - i.y;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(i.x, i.y, s, a), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const o = this.data.points[i];
      if (St(t, o) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class za extends he {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Ellipse,
      points: [t],
      style: e
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
  drawEllipse(t, e, i) {
    const o = this.getBounds();
    if (!o) return;
    const s = (o.x + o.width / 2) * e - i.x, a = (o.y + o.height / 2) * e - i.y, r = Math.max(o.width * e / 2, 0.5), l = Math.max(o.height * e / 2, 0.5);
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.ellipse(s, a, r, l, 0, 0, Math.PI * 2), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    const i = this.getBounds();
    if (!i) return !1;
    const o = i.width / 2, s = i.height / 2;
    if (o < 1 || s < 1)
      return t.x >= i.x - e && t.x <= i.x + i.width + e && t.y >= i.y - e && t.y <= i.y + i.height + e;
    const a = i.x + o, r = i.y + s, l = Math.sqrt(
      (t.x - a) ** 2 / o ** 2 + (t.y - r) ** 2 / s ** 2
    );
    return Math.abs(l - 1) * Math.min(o, s) <= e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = this.getBounds();
    i && (e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.setLineDash([3, 3]), e.strokeRect(i.x, i.y, i.width, i.height), e.restore());
  }
  drawHover(t) {
    const { ctx: e } = t, i = this.getBounds();
    i && (e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.ellipse(
      i.x + i.width / 2,
      i.y + i.height / 2,
      Math.max(i.width / 2, 0.5),
      Math.max(i.height / 2, 0.5),
      0,
      0,
      Math.PI * 2
    ), e.stroke(), e.restore());
  }
}
class Ra extends he {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Line,
      points: [t],
      style: e
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
  drawLine(t, e, i) {
    const o = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(o.x * e - i.x, o.y * e - i.y), t.lineTo(s.x * e - i.x, s.y * e - i.y), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, e);
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
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
    const { ctx: e } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke(), e.restore();
  }
  drawEndpoints(t) {
    t.save(), t.fillStyle = "#3b82f6", t.strokeStyle = "#ffffff", t.lineWidth = 1, this.data.points.forEach((i) => {
      t.fillRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6), t.strokeRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6);
    }), t.restore();
  }
  isPointNearLine(t, e, i, o) {
    const s = i.x - e.x, a = i.y - e.y, r = s * s + a * a;
    if (r === 0)
      return St(t, e) <= o;
    const l = Math.max(0, Math.min(1, ((t.x - e.x) * s + (t.y - e.y) * a) / r)), h = {
      x: e.x + l * s,
      y: e.y + l * a
    };
    return St(t, h) <= o;
  }
}
class La extends he {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Arrow,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    this.drawArrow(e, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: o } = t;
    this.drawArrow(e, i, o);
  }
  drawArrow(t, e, i) {
    const o = this.data.points[0], s = this.data.points[this.data.points.length - 1], a = {
      x: o.x * e - i.x,
      y: o.y * e - i.y
    }, r = {
      x: s.x * e - i.x,
      y: s.y * e - i.y
    };
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
    const l = Math.atan2(s.y - o.y, s.x - o.x), h = 15 * e, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l - u),
      r.y - h * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l + u),
      r.y - h * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, e);
  }
  isPointNearLine(t, e, i, o) {
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return St(t, e) <= o;
    const d = h / u;
    let x;
    return d < 0 ? x = e : d > 1 ? x = i : x = {
      x: e.x + d * r,
      y: e.y + d * l
    }, St(t, x) <= o;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((o) => {
      e.fillRect(o.x - i / 2, o.y - i / 2, i, i), e.strokeRect(o.x - i / 2, o.y - i / 2, i, i);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(o.x, o.y), e.stroke(), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const o = this.data.points[i];
      if (St(t, o) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Pa extends he {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Pen,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  // 智能添加点（带插值）
  addPoint(t) {
    if (this.data.points.length > 0) {
      const e = this.data.points[this.data.points.length - 1], i = St(t, e);
      if (i > 5) {
        const o = Math.ceil(i / 3);
        for (let s = 1; s < o; s++) {
          const a = s / o, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    this.drawPath(e, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: o } = t;
    this.drawPath(e, i, o);
  }
  drawPath(t, e, i) {
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
    const o = this.data.points[0], s = o.x * e - i.x, a = o.y * e - i.y;
    t.moveTo(s, a);
    for (let r = 1; r < this.data.points.length; r++) {
      const l = this.data.points[r], h = l.x * e - i.x, u = l.y * e - i.y;
      t.lineTo(h, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? St(t, this.data.points[0]) <= e : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, e))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, e, i, o) {
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return St(t, e) <= o;
    const d = h / u;
    let x;
    return d < 0 ? x = e : d > 1 ? x = i : x = {
      x: e.x + d * r,
      y: e.y + d * l
    }, St(t, x) <= o;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, i = this.data.points[0].y, o = this.data.points[0].y;
    return this.data.points.forEach((s) => {
      t = Math.min(t, s.x), e = Math.max(e, s.x), i = Math.min(i, s.y), o = Math.max(o, s.y);
    }), {
      x: t,
      y: i,
      width: e - t,
      height: o - i
    };
  }
  drawSelection(t) {
    const e = this.getBounds();
    if (!e) return;
    const { ctx: i } = t;
    i.save(), i.setLineDash([2, 2]), i.strokeStyle = "#3b82f6", i.lineWidth = 1, i.strokeRect(e.x, e.y, e.width, e.height), i.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.lineCap = "round", e.lineJoin = "round", e.beginPath(), e.moveTo(this.data.points[0].x, this.data.points[0].y);
    for (let i = 1; i < this.data.points.length; i++)
      e.lineTo(this.data.points[i].x, this.data.points[i].y);
    e.stroke(), e.restore();
  }
}
const ie = "sans-serif", ze = (n) => ({
  x: n.x + 4,
  y: n.y - 8
});
class Aa extends he {
  constructor(t, e, i, o = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Text,
      points: [t],
      style: i,
      text: e,
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
    const { ctx: e } = t;
    this.drawText(e, 1, { x: 0, y: 0 }, t.bounds);
  }
  drawToScreenshot(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o, bounds: s } = t;
    this.drawText(e, i, o, s);
  }
  drawText(t, e, i, o) {
    const s = (this.data.fontSize || 16) * e, a = this.data.points[0];
    t.save(), this.applyOpacity(t), t.font = `${s}px ${ie}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = ze(a), l = r.x * e - i.x, h = r.y * e - i.y;
    t.fillText(this.data.text, l, h), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], o = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${o}px ${ie}`;
    const l = a.measureText(this.data.text).width, { x: h, y: u } = ze(i);
    return t.x >= h - e && t.x <= h + l + e && t.y >= u - e && t.y <= u + o + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, o = document.createElement("canvas").getContext("2d");
    if (!o) return null;
    o.font = `${e}px ${ie}`;
    const a = o.measureText(this.data.text).width, { x: r, y: l } = ze(t);
    return {
      x: r,
      y: l,
      width: a,
      height: e
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = ze(s), l = r.x * i - o.x, h = r.y * i - o.y;
    e.save(), e.font = `${a}px ${ie}`;
    const d = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(l, h, d, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = ze(s), l = r.x * i - o.x, h = r.y * i - o.y;
    e.save(), e.font = `${a}px ${ie}`;
    const d = e.measureText(this.data.text).width;
    e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(l, h, d, a), e.restore();
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
const ee = class ee extends he {
  constructor(t, e, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Mosaic,
      points: [t],
      style: e,
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
      const e = this.data.points[this.data.points.length - 1], i = St(t, e);
      if (i > 2) {
        const o = Math.ceil(i / 2);
        for (let s = 1; s < o; s++) {
          const a = s / o, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length === 0) return;
    const { ctx: e, bounds: i } = t;
    this.renderRealMosaic(e, window.devicePixelRatio || 1, { x: 0, y: 0 }, i);
  }
  drawToScreenshot(t) {
    if (this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: o, bounds: s } = t;
    this.renderRealMosaic(e, i, o, s);
  }
  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  renderRealMosaic(t, e, i, o) {
    ee.helperCanvas || (ee.helperCanvas = document.createElement("canvas"), ee.helperCtx = ee.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const s = ee.helperCanvas, a = ee.helperCtx, r = e || 1, l = this.data.mosaicSize || 8, h = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const x = u, w = Math.floor(d.x - x), b = Math.floor(d.y - x), f = Math.ceil(d.width + x * 2), v = Math.ceil(d.height + x * 2);
    if (f <= 0 || v <= 0) return;
    const A = Math.floor(w * r - i.x), N = Math.floor(b * r - i.y), T = Math.ceil(f * r), U = Math.ceil(v * r), Y = t.canvas.width, G = t.canvas.height, H = Math.max(0, A), j = Math.max(0, N), Q = Math.min(T, Y - H), q = Math.min(U, G - j);
    if (Q <= 0 || q <= 0) return;
    let K;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), K = t.getImageData(H, j, Q, q), t.restore();
    } catch {
      return;
    }
    const et = K.data, rt = H % h, wt = j % h;
    for (let nt = -wt; nt < q; nt += h)
      for (let X = -rt; X < Q; X += h) {
        const it = Math.max(0, X), mt = Math.max(0, nt), yt = Math.min(Q, X + h), D = Math.min(q, nt + h);
        if (it >= yt || mt >= D) continue;
        let gt = 0, F = 0, Mt = 0, Tt = 0;
        for (let Ut = mt; Ut < D; Ut++)
          for (let pt = it; pt < yt; pt++) {
            const Pt = (Ut * Q + pt) * 4;
            gt += et[Pt], F += et[Pt + 1], Mt += et[Pt + 2], Tt++;
          }
        if (Tt > 0) {
          gt = Math.round(gt / Tt / 8) * 8, F = Math.round(F / Tt / 8) * 8, Mt = Math.round(Mt / Tt / 8) * 8;
          for (let pt = mt; pt < D; pt++)
            for (let Pt = it; Pt < yt; Pt++) {
              const Ot = (pt * Q + Pt) * 4;
              et[Ot] = gt, et[Ot + 1] = F, et[Ot + 2] = Mt;
            }
        }
      }
    s.width = Q, s.height = q, a.putImageData(K, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, H, j), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), o && (t.beginPath(), t.rect(
      o.x * r - i.x,
      o.y * r - i.y,
      o.width * r,
      o.height * r
    ), t.clip()), t.drawImage(s, H, j), t.restore();
  }
  // 在物理坐标系中绘制路径
  drawPathPhysical(t, e, i, o, s) {
    if (this.data.points.length < 1) return;
    t.beginPath();
    const a = (l) => l.x * e - i.x - o, r = (l) => l.y * e - i.y - s;
    if (this.data.points.length === 1) {
      const l = this.data.points[0];
      t.arc(a(l), r(l), t.lineWidth / 2, 0, Math.PI * 2), t.fill();
    } else {
      const l = this.data.points[0];
      t.moveTo(a(l), r(l));
      for (let u = 1; u < this.data.points.length - 1; u++) {
        const d = this.data.points[u], x = this.data.points[u + 1], w = (a(d) + a(x)) / 2, b = (r(d) + r(x)) / 2;
        t.quadraticCurveTo(a(d), r(d), w, b);
      }
      const h = this.data.points[this.data.points.length - 1];
      t.lineTo(a(h), r(h)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return St(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + e;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, (this.data.mosaicSize || 8) * 1.5 + e))
        return !0;
    }
    return !1;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, i = this.data.points[0].y, o = this.data.points[0].y;
    for (const s of this.data.points)
      t = Math.min(t, s.x), e = Math.max(e, s.x), i = Math.min(i, s.y), o = Math.max(o, s.y);
    return {
      x: t,
      y: i,
      width: e - t,
      height: o - i
    };
  }
  isPointNearLine(t, e, i, o) {
    const s = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = s * r + a * l, u = r * r + l * l;
    let d = -1;
    u !== 0 && (d = h / u);
    let x, w;
    d < 0 ? (x = e.x, w = e.y) : d > 1 ? (x = i.x, w = i.y) : (x = e.x + d * r, w = e.y + d * l);
    const b = t.x - x, f = t.y - w;
    return b * b + f * f <= o * o;
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
L(ee, "helperCanvas", null), L(ee, "helperCtx", null);
let Yn = ee;
const re = 16, un = (n = re) => Math.max(12, Math.round(n * 0.75)), Zn = (n, t = re) => {
  const e = un(t);
  return {
    x: n.x + e + 12,
    y: n.y - t / 2
  };
};
class Da extends he {
  constructor(t, e, i, o, s = re) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: m.Marker,
      points: [t],
      style: o,
      text: i,
      fontSize: s,
      markerNumber: e
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
  drawMarker(t, e, i) {
    const o = this.data.points[0];
    if (!o) return;
    const s = (this.data.fontSize || re) * e, a = un(this.data.fontSize || re) * e, r = o.x * e - i.x, l = o.y * e - i.y, h = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, s, e), h) {
      const u = Zn(
        o,
        this.data.fontSize || re
      ), d = u.x * e - i.x, x = u.y * e - i.y, w = x + s + 3 * e;
      t.font = `${s}px ${ie}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(h, d, x);
      const b = t.measureText(h).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * e * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * e, w), t.lineTo(d + b + 3 * e, w), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, e, i, o, s, a) {
    t.beginPath(), t.arc(e, i, o, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${s}px ${ie}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), e, i + a * 0.5);
  }
  hitTest(t, e = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const o = un(this.data.fontSize || re);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= o + e) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - e && t.x <= a.x + a.width + e && t.y >= a.y - e && t.y <= a.y + a.height + e;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const e = this.data.fontSize || re, i = un(e), o = this.data.text?.trim() || "";
    let s = t.x + i;
    if (o) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${e}px ${ie}`, s = Zn(t, e).x + r.measureText(o).width + 4);
    }
    return {
      x: t.x - i,
      y: t.y - i,
      width: s - (t.x - i),
      height: Math.max(i * 2, e + i)
    };
  }
  drawSelection(t) {
    this.drawStateOutline(t, "#3b82f6", [3, 3], 1);
  }
  drawHover(t) {
    this.drawStateOutline(t, "#3b82f6", [4, 4], 2);
  }
  drawStateOutline(t, e, i, o) {
    const s = this.getBounds();
    s && (t.ctx.save(), t.ctx.strokeStyle = e, t.ctx.lineWidth = o, t.ctx.setLineDash(i), t.ctx.strokeRect(s.x, s.y, s.width, s.height), t.ctx.restore());
  }
}
class sn {
  static createAnnotation(t, e, i, o = {}) {
    switch (t) {
      case m.Rectangle:
        return new Ta(e, i);
      case m.Ellipse:
        return new za(e, i);
      case m.Line:
        return new Ra(e, i);
      case m.Arrow:
        return new La(e, i);
      case m.Pen:
        return new Pa(e, i);
      case m.Text:
        return new Aa(
          e,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case m.Marker:
        return new Da(
          e,
          o.markerNumber || 1,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case m.Mosaic:
        return new Yn(
          e,
          i,
          o.mosaicSize || 8
        );
      default:
        return null;
    }
  }
  // 从数据恢复标注
  static fromData(t) {
    const { type: e, points: i, style: o } = t;
    if (!i || i.length === 0) return null;
    const s = i[0], a = this.createAnnotation(e, s, o, {
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
      [m.Rectangle]: "drawing-rect",
      [m.Ellipse]: "drawing-ellipse",
      [m.Line]: "drawing-line",
      [m.Arrow]: "drawing-arrow",
      [m.Pen]: "drawing-pen",
      [m.Text]: "drawing-text",
      [m.Marker]: "drawing-marker",
      [m.Mosaic]: "drawing-mosaic",
      [m.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== m.Select && t !== m.ColorPicker && t !== m.Ocr && t !== m.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== m.Select && t !== m.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      m.Rectangle,
      m.Ellipse,
      m.Line,
      m.Arrow,
      m.Pen,
      m.Text,
      m.Marker
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      m.Rectangle,
      m.Ellipse,
      m.Line,
      m.Arrow,
      m.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === m.Text || t === m.Marker;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === m.Mosaic;
  }
}
const fe = class fe {
  constructor() {
    L(this, "pool", []);
    L(this, "maxPoolSize", 5);
    // 最大池大小
    L(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return fe.instance || (fe.instance = new fe()), fe.instance;
  }
  /**
   * 获取一个 canvas 对象
   * @param width 宽度
   * @param height 高度
   * @returns canvas 对象
   */
  acquire(t, e) {
    const i = this.pool.findIndex(
      (a) => a.width >= t && a.height >= e && !this.inUse.has(a)
    );
    let o;
    i !== -1 ? (o = this.pool[i], this.pool.splice(i, 1)) : o = document.createElement("canvas"), o.width = t, o.height = e;
    const s = o.getContext("2d");
    return s && s.clearRect(0, 0, t, e), this.inUse.add(o), o;
  }
  /**
   * 释放 canvas 对象回池中
   * @param canvas 要释放的 canvas
   */
  release(t) {
    if (this.inUse.has(t) && (this.inUse.delete(t), this.pool.length < this.maxPoolSize)) {
      const e = t.getContext("2d");
      e && e.clearRect(0, 0, t.width, t.height), this.pool.push(t);
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
L(fe, "instance");
let Xn = fe;
async function Ia(n, t) {
  return await S("get_local_plugin_resource_path", {
    pluginId: n,
    relativePath: t
  });
}
const Oa = "snippets-code:developer-mode", Co = "snippets-code:frontend-diagnostics", Ea = 240, Be = "[REDACTED]", dn = (n) => n.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Be}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Be}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Be
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Be}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Be}`
), ii = (n) => {
  if (n === void 0) return;
  if (typeof n == "string") return dn(n);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return dn(
      JSON.stringify(
        n,
        (e, i) => {
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
    return dn(String(n));
  }
}, Wa = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, $a = () => {
  if (typeof localStorage > "u") return [];
  try {
    const n = JSON.parse(localStorage.getItem(Co) || "[]");
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}, oi = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Oa) === "true";
  } catch {
    return !1;
  }
}, Ba = (n, t, e) => {
  if (!oi() || typeof localStorage > "u") return;
  const i = $a();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: n,
    windowLabel: Wa(),
    message: dn(t),
    data: ii(e)
  });
  try {
    localStorage.setItem(
      Co,
      JSON.stringify(i.slice(-Ea))
    );
  } catch {
  }
}, Na = () => oi(), Ha = (n) => n === "error" || oi(), an = (n, t, e) => {
  Ba(n, t, e), Ha(n) && S("frontend_log", {
    level: n,
    message: t,
    data: e === void 0 ? null : ii(e)
  }).catch(() => {
  });
}, P = {
  info: (n, t, ...e) => {
    an("info", n, t);
  },
  error: (n, t) => {
    an("error", n, t);
  },
  warn: (n, t) => {
    an("warn", n, t);
  },
  debug: (n, t) => {
    Na() && an("debug", n, t);
  }
}, _t = {
  log: (n, t) => {
    S("append_ocr_diagnostic_log", {
      message: n,
      data: t === void 0 ? null : ii(t)
    }).catch(() => {
    });
  }
}, ja = "resources/transformers/transformers.min.js", Fa = ["translation-offline-runtime", "translation"], Va = "https://huggingface.co/", Ua = "{model}/resolve/{revision}/", Ya = "/__snippets_code_disabled_transformers_local_models__/", Za = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let Ne = null;
const Xa = (n) => {
  const t = n.toLowerCase();
  return [
    { index: n.lastIndexOf("/"), length: 1 },
    { index: n.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (i, o) => o.index > i.index ? o : i,
    { index: -1, length: 0 }
  );
}, _o = (n) => {
  const t = n.search(/[?#]/), e = t >= 0 ? n.slice(0, t) : n, i = Xa(e);
  return i.index >= 0 ? e.slice(0, i.index + i.length) : e;
}, To = (n) => {
  const t = _o(n);
  return Object.fromEntries(
    Za.map((e) => [e, `${t}${e}`])
  );
}, Ga = (n, t) => {
  var e, i;
  n.useBrowserCache = !0, n.allowRemoteModels = !0, n.remoteHost = Va, n.remotePathTemplate = Ua, n.allowLocalModels = !1, n.localModelPath = Ya, t && (n.backends ?? (n.backends = {}), (e = n.backends).onnx ?? (e.onnx = {}), (i = n.backends.onnx).wasm ?? (i.wasm = {}), n.backends.onnx.wasm.wasmPaths = To(t), n.backends.onnx.wasm.numThreads = 1);
};
async function qa() {
  return Ne || (Ne = (async () => {
    for (const n of Fa) {
      const t = await Ia(n, ja);
      if (!t) continue;
      const e = ma(t), i = await import(
        /* @vite-ignore */
        e
      );
      return Ga(i.env, e), P.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
        wasmPaths: i.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: i.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: i.env.remoteHost,
        remotePathTemplate: i.env.remotePathTemplate,
        allowLocalModels: i.env.allowLocalModels,
        localModelPath: i.env.localModelPath
      }), i;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((n) => {
    throw Ne = null, n;
  }), Ne);
}
let oe = null, Ye = !1, Re = null, we = null, Gn = null;
const Ka = "Xenova/opus-mt-en-zh", Ja = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Qa = 3e5;
function tr(n) {
  Gn = n;
}
function er() {
  return Ja;
}
function nr(n, t, e) {
  return Promise.race([
    n,
    new Promise(
      (i, o) => setTimeout(() => o(new Error(e)), t)
    )
  ]);
}
async function zo() {
  return oe || Re || (Ye = !0, P.info("[离线翻译] 正在加载翻译模型..."), Re = (async () => {
    try {
      const { pipeline: n } = await qa();
      let t = "";
      const e = n("translation", Ka, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== t && (t = o.file, P.info(`[离线翻译] 已加载: ${o.file}`)), Gn && Gn({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return oe = await nr(
        e,
        Qa,
        "模型加载超时，请检查网络连接后重试"
      ), P.info("[离线翻译] 翻译模型加载完成"), Ye = !1, oe;
    } catch (n) {
      throw Ye = !1, Re = null, P.error("[离线翻译] 模型加载失败:", n), n;
    }
  })(), Re);
}
async function Ro(n) {
  if (!n?.trim()) return n;
  we = new AbortController();
  const t = we.signal;
  try {
    const e = await zo();
    if (t.aborted)
      throw new Error("翻译已取消");
    const i = n.split(`
`), o = [];
    for (const s of i) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const a = s.trim();
      if (!a) {
        o.push("");
        continue;
      }
      const r = await e(a);
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
  } catch (e) {
    throw e instanceof Error && e.message === "翻译已取消" ? (P.info("[离线翻译] 翻译已取消"), e) : e instanceof Error && e.message.includes("离线翻译运行时未安装") ? (P.warn("[离线翻译] 运行时资源未安装"), e) : (P.error("[离线翻译] 翻译失败:", e), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    we = null;
  }
}
function ir() {
  we && (we.abort(), we = null, P.info("[离线翻译] 已发送取消信号"));
}
function or() {
  return we !== null;
}
async function Lo() {
  await zo();
}
function sr() {
  return oe !== null;
}
function ar() {
  return Ye;
}
async function si() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      P.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const e of t)
        if (e.includes("transformers") || e.includes("huggingface")) {
          const o = await (await caches.open(e)).keys();
          if (P.info(`[离线翻译] Cache "${e}" 包含 ${o.length} 个文件`), o.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = o.some((r) => r.url.includes(".onnx"));
            if (P.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: e,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const n = await indexedDB.databases();
    P.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(n.map((t) => t.name))}`);
    for (const t of n)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return P.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return P.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (n) {
    return P.warn("[离线翻译] 检查缓存失败:", n), { isCached: !1, cacheType: "none" };
  }
}
async function rr() {
  return (await si()).isCached;
}
function lr() {
  return oe !== null;
}
async function cr() {
  if (oe)
    try {
      await oe.dispose?.();
    } catch {
    }
  oe = null, Re = null, Ye = !1, P.info("[离线翻译] 翻译器已释放");
}
async function hr() {
  try {
    const n = await indexedDB.databases();
    for (const t of n)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), P.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const e of t)
        (e.includes("transformers") || e.includes("onnx")) && (await caches.delete(e), P.info(`[离线翻译] 已删除 Cache: ${e}`));
    }
    P.info("[离线翻译] 模型缓存已清除");
  } catch (n) {
    throw P.error("[离线翻译] 清除缓存失败:", n), n;
  }
}
const ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: lr,
  cancelOfflineTranslation: ir,
  clearModelCache: hr,
  disposeOfflineTranslator: cr,
  getModelCacheInfo: si,
  getModelFiles: er,
  getRuntimeBaseUrl: _o,
  getRuntimeWasmPaths: To,
  isModelCached: rr,
  isOfflineTranslatorInitializing: ar,
  isOfflineTranslatorReady: sr,
  isTranslationInProgress: or,
  setProgressCallback: tr,
  translateOffline: Ro,
  warmupOfflineTranslator: Lo
}, Symbol.toStringTag, { value: "Module" }));
class ge {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve().then(() => _g).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, e), e;
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
    const e = Promise.resolve(ur).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, e), e;
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
L(ge, "loadedModules", /* @__PURE__ */ new Map()), L(ge, "loadingPromises", /* @__PURE__ */ new Map());
async function dr() {
  return await S("local_ai_get_status");
}
async function gr(n) {
  return await S("local_ai_start_service", {
    config: null
  });
}
async function fr(n) {
  return await S("local_ai_chat", { request: n });
}
function Po(n) {
  if (!n) return "unknown";
  const t = n.match(/[\u4e00-\u9fa5]/g), e = t ? t.length : 0, i = n.match(/[\u3040-\u30ff]/g), o = i ? i.length : 0, s = n.match(/[\uac00-\ud7af]/g), a = s ? s.length : 0, r = n.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = e + o + a + l;
  return u === 0 ? "unknown" : o >= 3 && o > l && o / u >= 0.2 ? "ja" : a >= 3 && a > e && a > l && a / u >= 0.2 ? "ko" : e > l ? "zh" : l > e ? "en" : "unknown";
}
function Le(n) {
  return n === "zh" || n === "en";
}
function de(n) {
  return Po(n);
}
const mr = /[.!?。！？；;：:][)"'”’】）\]]*$/, Fi = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, rn = /[A-Za-z0-9]/, pr = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Vi = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Ao(n, t = {}) {
  const e = el(n), i = Rr(n, e);
  return i.length === 0 ? [] : _r(i, e) ? Cr(i, e) : (t.mode === "single_para" ? [je(i, e)] : yr(i, e)).flatMap((s) => wr(s, e));
}
function wr(n, t) {
  const e = ri(n, t), i = [];
  for (const o of e) {
    const s = i[i.length - 1], a = s ? Or(s, o, t) : !1;
    if (!s || !a) {
      i.push(Wr(o));
      continue;
    }
    s.text = Br(s.text, o.text), s.blocks = [...s.blocks, ...o.blocks], s.bbox = $o(s.bbox, o.bbox), s.fontSize = Zi(
      s.fontSize || o.fontSize,
      s.blocks.length - o.blocks.length,
      o.fontSize,
      o.blocks.length
    ), s.lineHeight = Zi(
      s.lineHeight || o.lineHeight,
      s.blocks.length - o.blocks.length,
      o.lineHeight,
      o.blocks.length
    ), s.isCodeBlock = !!(s.isCodeBlock || o.isCodeLike || o.hasTableColumns), s.isStructuredBlock = !!(s.isStructuredBlock || o.hasTableColumns);
  }
  return Nr(i, t);
}
function yr(n, t) {
  if (n.length <= 1)
    return [n];
  const e = n.map((l) => ({
    bbox: Tr(l),
    block: l
  })).filter((l) => zr(l.bbox)).sort(ai);
  if (e.length <= 1)
    return [je(n, t)];
  if (vr(e, t))
    return [je(n, t)];
  const { cuts: i, rows: o } = xr(e);
  if (i.length < 2 || o.length <= 1)
    return [je(n, t)];
  const s = Sr(i, o), r = Mr(s).filter((l) => l.units.length > 0).map((l) => l.units.map((h) => h.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [je(n, t)];
}
function vr(n, t) {
  if (n.length < 2)
    return !0;
  const e = [...n].sort(ai);
  let i = 0, o = 0;
  for (let s = 1; s < e.length; s += 1) {
    const a = e[s - 1].bbox, r = e[s].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const h = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), d = h / u >= 0.45, x = Math.abs(a.left - r.left) <= t * 1.5;
    (d || x) && (o += 1);
  }
  return i > 0 && o / i >= 0.72;
}
function xr(n) {
  const t = Math.min(...n.map((l) => l.bbox.left)) - 1, e = Math.max(...n.map((l) => l.bbox.right)) + 1, i = [], o = [];
  let s = [], a = 0;
  for (; a < n.length; ) {
    const h = n[a].bbox.bottom, u = [];
    for (; a < n.length && n[a].bbox.top <= h; )
      u.push(n[a]), a += 1;
    u.sort((f, v) => f.bbox.left - v.bbox.left || f.bbox.right - v.bbox.right);
    const d = kr(u, t, e, i.length), { gaps: x, removedGaps: w } = br(s, d), b = i.length - 1;
    for (const f of w)
      o.push({
        left: f.left,
        right: f.right,
        startRow: f.startRow,
        endRow: b
      });
    s = x, i.push(u);
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
function kr(n, t, e, i) {
  const o = [];
  let s = t;
  for (const a of n)
    a.bbox.left > s && o.push({ left: s, right: a.bbox.left, startRow: i }), a.bbox.right > s && (s = a.bbox.right);
  return o.push({ left: s, right: e, startRow: i }), o;
}
function br(n, t) {
  const e = n.map(() => !1), i = t.map(() => !1), o = [];
  for (let s = 0; s < n.length; s += 1) {
    const a = n[s];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], h = Math.max(a.left, l.left), u = Math.min(a.right, l.right);
      h <= u && (o.push({ left: h, right: u, startRow: a.startRow }), e[s] = !0, i[r] = !0);
    }
  }
  for (let s = 0; s < t.length; s += 1)
    i[s] || o.push(t[s]);
  return {
    gaps: o,
    removedGaps: n.filter((s, a) => !e[a])
  };
}
function Sr(n, t) {
  const e = t.map(() => []);
  for (const r of n)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      e[l]?.push({ left: r.left, right: r.right });
  for (const r of e)
    r.sort((l, h) => l.left - h.left || l.right - h.right);
  const i = {
    xLeft: n[0].left - 1,
    xRight: n[n.length - 1].right + 1,
    rowTop: -1,
    rowBottom: -1,
    units: [],
    children: []
  }, o = [i];
  let s = [];
  const a = (r) => {
    const l = r.xRight - 2, h = o.filter((w) => l >= w.xLeft && l <= w.xRight + 1e-4 && w.rowBottom < r.rowTop), u = Math.max(...h.map((w) => w.rowBottom), i.rowBottom), d = h.filter((w) => w.rowBottom === u);
    (d.length > 0 ? d.reduce((w, b) => b.xRight > w.xRight ? b : w) : i).children.push(r), o.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = e[r], h = [];
    for (const w of s) {
      let b = !1, f = !1, v = !1;
      for (const A of l)
        if (ln(A.right, w.xLeft) && (b = !0), ln(A.left, w.xRight) && (f = !0), w.xLeft < A.left && A.left < w.xRight || w.xLeft < A.right && A.right < w.xRight) {
          v = !0;
          break;
        }
      !b || !f || v ? a(w) : (w.rowBottom = r, h.push(w));
    }
    s = h;
    let u = 0, d = 0;
    const x = t[r];
    for (; u < x.length && l.length >= 2; ) {
      const w = x[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const b = l[d].right, f = l[d + 1].left;
      if (w.bbox.left + 1e-4 > f && d < l.length - 2) {
        d += 1;
        continue;
      }
      let v = s.find((A) => ln(A.xLeft, b) && ln(A.xRight, f));
      v || (v = {
        xLeft: b,
        xRight: f,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, s.push(v)), v.units.push(w), u += 1;
    }
  }
  for (const r of s)
    a(r);
  for (const r of o)
    r.children.sort((l, h) => l.xLeft - h.xLeft || l.rowTop - h.rowTop), r.units.sort(ai);
  return i;
}
function Mr(n) {
  const t = [n], e = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (e.push(i), t.push(...[...i.children].reverse()));
  }
  return e;
}
function je(n, t) {
  return [...n].sort((e, i) => {
    const o = e.y - i.y;
    return Math.abs(o) > t * 0.45 ? o : e.x - i.x;
  });
}
function Cr(n, t) {
  const e = ce(Nt(n.map((a) => a.width)), t * 0.5), i = Math.max(e * 1.4, t * 0.28), o = [...n].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), s = [];
  for (const a of o) {
    const r = a.x + a.width / 2, l = s[s.length - 1], h = l ? Nt(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - h) <= i ? l.push(a) : s.push([a]);
  }
  return s.map((a) => {
    const r = [...a].sort((x, w) => x.y - w.y), l = r.reduce((x, w, b) => {
      const f = w.text.trim();
      return b === 0 ? f : li(x, f);
    }, ""), h = Wo(r), u = Nt(r.map((x) => ce(x.fontSize, t))), d = Nt(r.map((x) => Mn(x)));
    return {
      text: l,
      blocks: r,
      bbox: h,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: d,
      angle: Nt(r.map((x) => x.angle || 0))
    };
  });
}
function _r(n, t) {
  return n.length < 2 ? !1 : n.filter((i) => {
    const o = Math.max(i.width, 1);
    return i.height > o * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(n.length * 0.56));
}
function Tr(n) {
  return {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function zr(n) {
  return Number.isFinite(n.left) && Number.isFinite(n.top) && Number.isFinite(n.right) && Number.isFinite(n.bottom) && n.right >= n.left && n.bottom >= n.top;
}
function ai(n, t) {
  return n.bbox.top - t.bbox.top || n.bbox.left - t.bbox.left;
}
function ln(n, t) {
  return Math.abs(n - t) <= 1e-4;
}
function Rr(n, t) {
  return n.map((e) => {
    const i = e.text.trim();
    if (!i || Lr(e, t) || Ar(i))
      return null;
    const o = Dr(Pr(i, e, t));
    return o === e.text ? e : { ...e, text: o };
  }).filter((e) => !!e);
}
function Lr(n, t) {
  const e = n.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const i = t * 1.25;
  return n.width <= i && n.height <= i;
}
function Pr(n, t, e) {
  return /^xC$/i.test(n) && t.width <= e * 2.4 ? "X" : n;
}
function Ar(n) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(n.trim());
}
function Dr(n) {
  return n.replace(/^:\s+(?=[A-Z])/, "- ");
}
function ri(n, t) {
  const e = [...n].sort((s, a) => {
    const r = s.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : s.x - a.x;
  }), i = [], o = t * 0.45;
  for (const s of e) {
    const a = i[i.length - 1];
    a && Math.abs(s.y - a.y) < o && !qr(a.blocks, s, t) ? (a.blocks.push(s), a.y = Nt(a.blocks.map((r) => r.y))) : i.push({ y: s.y, blocks: [s] });
  }
  return i.map((s) => Ir(s.blocks, t));
}
function Ir(n, t) {
  const e = [...n].sort((r, l) => r.x - l.x), i = Wo(e), o = e.reduce((r, l, h) => {
    const u = l.text.trim();
    return h === 0 ? u : $r(r, u);
  }, ""), s = Nt(e.map((r) => ce(r.fontSize, t))), a = Nt(e.map((r) => Mn(r)));
  return {
    text: o,
    blocks: e,
    bbox: i,
    fontSize: s,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: Kr(e, t),
    isCodeLike: Oo(o)
  };
}
function Or(n, t, e) {
  const i = ri(n.blocks, e), o = i[i.length - 1];
  if (!o) return !1;
  const s = Ge(o.text);
  if (Sn(o.text) || Ge(t.text) || s && !Er(o, t, e) || t.isCodeLike || o.isCodeLike || t.hasTableColumns || o.hasTableColumns) return !1;
  const a = t.bbox.y - (o.bbox.y + o.bbox.height);
  if (a < -e * 0.25 || a >= e * 1.8 || Ur(i, a, e) || Yr(o, t, a, e) || Zr(o, t, a, e) || Xr(o, t, a, e) || Gr(o, t, a, e))
    return !1;
  if (s)
    return !0;
  const r = Math.max(e * 1.2, o.lineHeight * 0.9);
  return Math.abs(t.bbox.x - o.bbox.x) <= r;
}
function Er(n, t, e) {
  if (Io(t.text))
    return !1;
  const i = t.bbox.x - n.bbox.x, o = Math.max(e * 0.8, n.lineHeight * 0.65);
  return i >= o;
}
function Wr(n) {
  return {
    text: n.text,
    blocks: [...n.blocks],
    bbox: { ...n.bbox },
    isCodeBlock: n.isCodeLike || n.hasTableColumns,
    isStructuredBlock: n.hasTableColumns,
    fontSize: n.fontSize,
    lineHeight: n.lineHeight,
    angle: Nt(n.blocks.map((t) => t.angle || 0))
  };
}
function $r(n, t) {
  return li(n, t);
}
function Br(n, t) {
  return li(n, t);
}
function li(n, t) {
  const e = n.trimEnd(), i = t.trimStart();
  if (!e) return i;
  if (!i) return e;
  const o = e.charAt(e.length - 1), s = i.charAt(0), a = e.charAt(e.length - 2);
  return o === "-" && rn.test(a) && rn.test(s) ? `${e.slice(0, -1)}${i}` : nl(s) || il(o) ? `${e}${i}` : Fi.test(o) || Fi.test(s) || Xi(o) || Xi(s) ? `${e}${i}` : rn.test(o) && rn.test(s) ? `${e} ${i}` : `${e} ${i}`.replace(/\s+/g, " ");
}
function Sn(n) {
  return mr.test(n.trim());
}
function Ge(n) {
  return pr.test(n);
}
function Nr(n, t) {
  return n.flatMap((e) => Hr(e, t));
}
function Hr(n, t) {
  const e = Do(n.text);
  if (e.length <= 1)
    return [n];
  const i = ri(n.blocks, t), o = i.length === e.length;
  return e.map((s, a) => {
    const r = o ? i[a] : null, l = r?.bbox || Fr(n.bbox, a, e.length), h = r?.blocks || [Vr(n, s, l, a)];
    return {
      ...n,
      text: s,
      blocks: h,
      bbox: l,
      isCodeBlock: !!h.some((u) => Oo(u.text)),
      isStructuredBlock: n.isStructuredBlock,
      fontSize: Nt(h.map((u) => ce(u.fontSize, n.fontSize || t))),
      lineHeight: Nt(h.map((u) => Mn(u))),
      angle: Nt(h.map((u) => u.angle || 0))
    };
  });
}
function Do(n) {
  const t = n.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Do);
  const e = jr(n);
  return e.length > 1 ? e.flatMap(Ui) : Ui(n);
}
function jr(n) {
  const t = n.trim(), e = [];
  Vi.lastIndex = 0;
  for (const i of t.matchAll(Vi)) {
    const o = i[0], s = i.index ?? 0;
    e.push(s + (o.startsWith(" ") ? 1 : 0));
  }
  return e.length <= 1 ? [t] : e.map((i, o) => {
    const s = e[o + 1] ?? t.length;
    return t.slice(i, s).trim();
  }).filter(Boolean);
}
function Ui(n) {
  const t = n.trim();
  if (!Ge(t))
    return [t];
  const e = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !e || !Io(e[2]) ? [t] : [e[1].trim(), e[2].trim()];
}
function Fr(n, t, e) {
  const i = n.height / Math.max(e, 1);
  return {
    x: n.x,
    y: n.y + i * t,
    width: n.width,
    height: i
  };
}
function Vr(n, t, e, i) {
  const o = n.blocks[Math.min(i, Math.max(n.blocks.length - 1, 0))];
  return {
    ...o || {
      fontSize: n.fontSize || e.height,
      lineHeight: n.lineHeight || e.height,
      angle: n.angle || 0
    },
    text: t,
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    fontSize: o?.fontSize || n.fontSize || e.height,
    lineHeight: o?.lineHeight || n.lineHeight || e.height,
    angle: o?.angle || n.angle || 0
  };
}
function Io(n) {
  const t = n.trim();
  return !t || Sn(t) || Ge(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Ur(n, t, e) {
  if (n.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < n.length; a++) {
    const r = n[a - 1], h = n[a].bbox.y - (r.bbox.y + r.bbox.height);
    h > 0 && i.push(h);
  }
  const o = i.length > 0 ? Nt(i) : 0, s = Math.max(o * 2.2, e * 1.15);
  return t > s;
}
function Yr(n, t, e, i) {
  const o = n.text.trim();
  if (!o || Sn(o) || Ge(o) || n.isCodeLike || o.endsWith("-"))
    return !1;
  const s = o.split(/\s+/).filter(Boolean).length, a = n.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(o) && s <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(o) && o.length <= 12 && a, h = r || l;
  return n.fontSize >= t.fontSize * 1.18 && h ? !0 : e > i * 0.7 && h;
}
function Zr(n, t, e, i) {
  if (e <= 0)
    return !1;
  const o = Math.max(n.fontSize, t.fontSize), s = Math.max(Math.min(n.fontSize, t.fontSize), 1), a = o / s, r = e / Math.max(s, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = n.fontSize >= i * 1.08 && n.bbox.width >= t.bbox.width * 0.82, h = t.fontSize <= n.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && h;
}
function Xr(n, t, e, i) {
  if (e < i * 0.45)
    return !1;
  const s = n.text.split(/\s+/).filter(Boolean).length <= 3 && n.bbox.width < t.bbox.width * 0.35, a = Math.abs(n.bbox.x - t.bbox.x) <= i * 0.6;
  return s && a;
}
function Gr(n, t, e, i) {
  return e < i * 0.25 || !(Math.abs(n.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Yi(n.text) && Yi(t.text);
}
function Yi(n) {
  const t = n.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Sn(t);
}
function Oo(n) {
  const t = n.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function qr(n, t, e) {
  const i = [...n].sort((a, r) => a.x - r.x), o = i[i.length - 1], s = t.x - (o.x + o.width);
  return s > e * 0.9 && tl(o.text) && Eo(t.text) ? !1 : s > e * 3.2;
}
function Kr(n, t) {
  if (n.length < 2)
    return n.some((o) => Jr(o.text));
  const e = [...n].sort((o, s) => o.x - s.x);
  let i = 0;
  for (let o = 1; o < e.length; o++) {
    const s = e[o - 1], a = e[o], r = e[o].x - (s.x + s.width);
    (r > t * 1.8 || r > t * 0.9 && Qr(s.text) && Eo(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Jr(n) {
  const t = n.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Qr(n) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(n.trim());
}
function tl(n) {
  const t = n.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Eo(n) {
  const t = n.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Wo(n) {
  const t = n.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, i) => $o(e, i), t[0]);
}
function $o(n, t) {
  const e = Math.min(n.x, t.x), i = Math.min(n.y, t.y), o = Math.max(n.x + n.width, t.x + t.width), s = Math.max(n.y + n.height, t.y + t.height);
  return {
    x: e,
    y: i,
    width: o - e,
    height: s - i
  };
}
function el(n) {
  return ce(Nt(n.map((t) => Mn(t))), 16);
}
function Mn(n) {
  return ce(n.lineHeight, ce(n.height, ce(n.fontSize, 16) * 1.2));
}
function Zi(n, t, e, i) {
  const o = t + i;
  return o <= 0 ? e : (n * t + e * i) / o;
}
function ce(n, t) {
  return Number.isFinite(n) && n > 0 ? n : t;
}
function Nt(n) {
  return n.length === 0 ? 0 : n.reduce((t, e) => t + e, 0) / n.length;
}
function nl(n) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(n);
}
function il(n) {
  return /^[(\[{<"'“‘]$/.test(n);
}
function Xi(n) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(n);
}
const Gi = 34;
class ol {
  constructor(t, e, i) {
    this.pixels = t, this.sampleWidth = e, this.sampleHeight = i;
  }
  detect(t, e) {
    const i = this.getDominantNearbyColor(t, e), o = this.findMatchingStart(t, e, i);
    if (!o) return null;
    const s = this.getPixelBounds(e);
    return s ? this.floodFillRegion(o, s, i) : null;
  }
  floodFillRegion(t, e, i) {
    const { left: o, top: s, right: a, bottom: r, width: l, height: h } = e, u = new Uint8Array(l * h), d = new Int32Array(l * h), x = new Int32Array(l * h);
    let w = 0, b = 1, f = t.x, v = t.x, A = t.y, N = t.y;
    for (d[0] = t.x, x[0] = t.y, u[(t.y - s) * l + t.x - o] = 1; w < b; ) {
      const G = d[w], H = x[w];
      if (w += 1, f = Math.min(f, G), v = Math.max(v, G), A = Math.min(A, H), N = Math.max(N, H), b = this.enqueueNeighbors(
        G,
        H,
        o,
        s,
        a,
        r,
        l,
        i,
        u,
        d,
        x,
        b
      ), b > l * h * 0.94) return null;
    }
    const T = v - f + 1, U = N - A + 1;
    return b / Math.max(1, T * U) >= 0.24 ? { x: f, y: A, width: T, height: U } : null;
  }
  getPixelBounds(t) {
    const e = Math.max(0, Math.floor(t.x)), i = Math.max(0, Math.floor(t.y)), o = Math.min(
      this.sampleWidth,
      Math.ceil(t.x + t.width)
    ), s = Math.min(
      this.sampleHeight,
      Math.ceil(t.y + t.height)
    ), a = o - e, r = s - i;
    return a > 0 && r > 0 ? { left: e, top: i, right: o, bottom: s, width: a, height: r } : null;
  }
  enqueueNeighbors(t, e, i, o, s, a, r, l, h, u, d, x) {
    let w = x;
    const b = [
      { x: t - 1, y: e },
      { x: t + 1, y: e },
      { x: t, y: e - 1 },
      { x: t, y: e + 1 }
    ];
    for (const f of b) {
      if (f.x < i || f.x >= s || f.y < o || f.y >= a)
        continue;
      const v = (f.y - o) * r + f.x - i;
      h[v] || (h[v] = 1, this.isColorNear(this.getColor(f.x, f.y), l) && (u[w] = f.x, d[w] = f.y, w += 1));
    }
    return w;
  }
  getDominantNearbyColor(t, e) {
    const i = /* @__PURE__ */ new Map();
    for (let s = -4; s <= 4; s += 2)
      for (let a = -4; a <= 4; a += 2) {
        const r = Math.round(t.x + a), l = Math.round(t.y + s);
        if (!this.contains(e, { x: r, y: l })) continue;
        const h = this.getColor(r, l), u = `${h.r >> 4},${h.g >> 4},${h.b >> 4}`, d = i.get(u) || { count: 0, r: 0, g: 0, b: 0 };
        d.count += 1, d.r += h.r, d.g += h.g, d.b += h.b, i.set(u, d);
      }
    const o = [...i.values()].reduce(
      (s, a) => a.count > s.count ? a : s,
      { count: 1, r: 255, g: 255, b: 255 }
    );
    return {
      r: o.r / o.count,
      g: o.g / o.count,
      b: o.b / o.count
    };
  }
  findMatchingStart(t, e, i) {
    for (let o = 0; o <= 6; o += 1)
      for (let s = t.y - o; s <= t.y + o; s += 1)
        for (let a = t.x - o; a <= t.x + o; a += 1) {
          const r = { x: Math.round(a), y: Math.round(s) };
          if (this.contains(e, r) && this.isColorNear(this.getColor(r.x, r.y), i))
            return r;
        }
    return null;
  }
  isColorNear(t, e) {
    const i = t.r - e.r, o = t.g - e.g, s = t.b - e.b;
    return i * i + o * o + s * s <= Gi * Gi;
  }
  getColor(t, e) {
    const i = Math.max(0, Math.min(this.sampleWidth - 1, t)), s = (Math.max(0, Math.min(this.sampleHeight - 1, e)) * this.sampleWidth + i) * 4;
    return {
      r: this.pixels[s],
      g: this.pixels[s + 1],
      b: this.pixels[s + 2]
    };
  }
  contains(t, e) {
    return e.x >= t.x && e.x < t.x + t.width && e.y >= t.y && e.y < t.y + t.height;
  }
}
const sl = 960, al = 640;
class ci {
  constructor(t, e, i, o, s) {
    L(this, "regionDetector");
    L(this, "lastDetection", null);
    this.sampleWidth = e, this.sampleHeight = i, this.logicalWidth = o, this.logicalHeight = s, this.regionDetector = new ol(
      t,
      e,
      i
    );
  }
  static fromImage(t, e, i) {
    if (e <= 0 || i <= 0) return null;
    const o = Math.min(
      1,
      sl / e,
      al / i
    ), s = Math.max(1, Math.round(e * o)), a = Math.max(1, Math.round(i * o)), r = document.createElement("canvas");
    r.width = s, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, s, a);
    const h = l.getImageData(0, 0, s, a);
    return new ci(
      h.data,
      s,
      a,
      e,
      i
    );
  }
  detect(t, e) {
    const i = this.getCachedDetection(t, e);
    if (i !== void 0) return i;
    const o = this.toSampleRect(e), s = this.toSamplePoint(t);
    if (!this.containsSamplePoint(o, s))
      return this.cacheDetection(t, e, null), null;
    const a = this.regionDetector.detect(s, o);
    if (!a)
      return this.cacheDetection(t, e, null), null;
    const r = this.toLogicalRect(a), l = this.isUsefulCandidate(r, e, t) ? r : null;
    return this.cacheDetection(t, e, l), l;
  }
  getCachedDetection(t, e) {
    const i = this.lastDetection;
    if (!(!i || !this.isSameRect(i.bounds, e))) {
      if (i.result && this.containsLogicalPoint(i.result, t))
        return { ...i.result };
      if (!i.result && Math.hypot(t.x - i.point.x, t.y - i.point.y) < 14)
        return null;
    }
  }
  cacheDetection(t, e, i) {
    this.lastDetection = {
      point: { ...t },
      bounds: { ...e },
      result: i ? { ...i } : null
    };
  }
  isSameRect(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  }
  containsLogicalPoint(t, e) {
    return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
  }
  containsSamplePoint(t, e) {
    return e.x >= t.x && e.x < t.x + t.width && e.y >= t.y && e.y < t.y + t.height;
  }
  isUsefulCandidate(t, e, i) {
    const o = t.width * t.height, s = e.width * e.height;
    return t.width >= 18 && t.height >= 14 && o >= 320 && o < s * 0.92 && this.containsLogicalPoint(t, i);
  }
  toSamplePoint(t) {
    return {
      x: Math.round(t.x * this.sampleWidth / this.logicalWidth),
      y: Math.round(t.y * this.sampleHeight / this.logicalHeight)
    };
  }
  toSampleRect(t) {
    return {
      x: Math.floor(t.x * this.sampleWidth / this.logicalWidth),
      y: Math.floor(t.y * this.sampleHeight / this.logicalHeight),
      width: Math.ceil(t.width * this.sampleWidth / this.logicalWidth),
      height: Math.ceil(t.height * this.sampleHeight / this.logicalHeight)
    };
  }
  toLogicalRect(t) {
    const e = this.logicalWidth / this.sampleWidth, i = this.logicalHeight / this.sampleHeight;
    return {
      x: Math.round(t.x * e),
      y: Math.round(t.y * i),
      width: Math.round(t.width * e),
      height: Math.round(t.height * i)
    };
  }
}
class rl {
  constructor(t, e, i, o) {
    L(this, "canvas");
    L(this, "coordinateSystem");
    L(this, "drawingEngine");
    L(this, "eventHandler");
    // 状态管理
    L(this, "selectionRect", null);
    L(this, "annotations", []);
    L(this, "currentAnnotation", null);
    L(this, "selectedAnnotation", null);
    L(this, "hoveredAnnotation", null);
    // 拖拽状态
    L(this, "draggedAnnotation", null);
    L(this, "dragStartPoint", null);
    L(this, "resizingAnnotation", null);
    L(this, "resizeStartBounds", null);
    L(this, "resizeOperation", null);
    // 编辑状态
    L(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    L(this, "annotationUndoStack", []);
    L(this, "annotationRedoStack", []);
    L(this, "pendingDragSnapshot", null);
    L(this, "pendingResizeSnapshot", null);
    // 工具设置
    L(this, "currentTool", m.Select);
    L(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    L(this, "textSize", 16);
    L(this, "mosaicSize", 8);
    L(this, "showGuides", !0);
    // 取色器状态
    L(this, "colorPickerState", {
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
    L(this, "allWindows", []);
    L(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    L(this, "snappedWindow", null);
    L(this, "snappedElement", null);
    L(this, "showSnapPreview", !1);
    L(this, "captureMonitor", { x: 0, y: 0, scale: 1 });
    L(this, "lastPointerPosition", null);
    L(this, "smartDetectionSequence", 0);
    L(this, "smartDetectionTimer", null);
    L(this, "accessibilityDetectionTimer", null);
    L(this, "pendingSmartDetection", null);
    // 点击拖拽区分
    L(this, "pendingSnapCandidate", null);
    L(this, "dragStartPosition", null);
    L(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    L(this, "throttleTimer", null);
    L(this, "lastThrottledTimestamp", 0);
    L(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    L(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    L(this, "backgroundImage", null);
    L(this, "visualElementDetector", null);
    // 是否正在加载完整背景图
    L(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    L(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    L(this, "offlineModelActivated", !1);
    // Canvas 池
    L(this, "canvasPool", Xn.getInstance());
    // 回调函数
    L(this, "onStateChange");
    L(this, "onTextInputRequest");
    L(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    L(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    L(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    L(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    L(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    L(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    L(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    L(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = i, this.onColorPicked = o, this.coordinateSystem = new Ca(t), this.drawingEngine = new Ma(t, this.coordinateSystem), this.eventHandler = new _a(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), ge.preloadModules();
  }
  // 公开方法：触发背景图重新加载（响应 preview-ready 事件）
  triggerBackgroundReload() {
    this.backgroundReloadPending || (this.backgroundReloadPending = !0, this.isLoadingBackground = !1, this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null, this.visualElementDetector = null), this.loadScreenBackground().finally(() => {
      this.backgroundReloadPending = !1;
    }));
  }
  cloneAnnotationData(t) {
    return {
      ...t,
      points: t.points.map((e) => ({ ...e })),
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
    if (this.annotations = t.annotations.map((e) => sn.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const e = this.annotations.find((i) => i.getData().id === t.selectedAnnotationId);
      e && (e.updateData({ selected: !0 }), this.selectedAnnotation = e);
    }
    this.draw(), this.onStateChange?.();
  }
  // 初始化画布
  initCanvas() {
    const t = this.canvas.parentElement;
    if (!t) return;
    const e = t.clientWidth, i = t.clientHeight, o = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(e * o), this.canvas.height = Math.round(i * o), this.canvas.style.width = e + "px", this.canvas.style.height = i + "px";
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
        this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null, this.visualElementDetector = null), await this.loadPreviewImage(), await this.loadFullBackgroundImage();
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
        const o = await S("get_screenshot_preview");
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
        const o = await S("get_screenshot_background");
        if (o) {
          const s = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              s.onload = null, s.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            s.onload = () => {
              clearTimeout(l), this.backgroundImage = s;
              const h = window.devicePixelRatio || 1;
              this.visualElementDetector = ci.fromImage(
                s,
                this.canvas.width / h,
                this.canvas.height / h
              ), this.lastPointerPosition && this.snappedWindow && this.scheduleUiElementDetection(
                this.lastPointerPosition,
                this.snappedWindow
              ), this.draw(), a();
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
      const e = document.createElement("canvas");
      e.width = 1, e.height = 1;
      const i = e.getContext("2d");
      i && (i.fillStyle = "rgba(0, 0, 0, 0.3)", i.fillRect(0, 0, 1, 1), t.src = e.toDataURL()), t.onload = () => {
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
      let t = { x: 0, y: 0, scale: 1, isFullscreen: !1 }, e = [];
      const i = 10, o = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < i; l++)
        try {
          const [h, u] = await Promise.all([
            S("get_cached_monitor_info"),
            S("get_cached_window_list")
          ]);
          t = {
            x: h.x,
            y: h.y,
            scale: h.scale,
            isFullscreen: !1
          }, e = u;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((d) => setTimeout(d, o));
            continue;
          }
          const u = await Promise.all([
            S("get_window_info"),
            S("get_all_windows")
          ]);
          t = u[0], e = u[1];
        }
      const s = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.captureMonitor = {
        x: t?.x || 0,
        y: t?.y || 0,
        scale: s
      }, this.allWindows = e.filter((l) => this.isValidWindow(l)).map((l) => ({
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
        const r = await S("get_cached_monitor_info");
        o = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        o = await S("get_window_info");
      }
      let s;
      try {
        const r = await S("get_mouse_position"), l = o?.scale || 1;
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
      this.lastPointerPosition = s, a ? (this.snappedWindow = a, this.showSnapPreview = !0, this.draw(), this.scheduleUiElementDetection(s, a)) : (this.showSnapPreview = !0, this.draw());
    } catch (t) {
      P.error("[截图] 初始窗口吸附检测失败", t);
    }
  }
  // 检查窗口是否有效
  isValidWindow(t) {
    if (!t.title || t.width < 100 || t.height < 100 || t.title.includes("screenshot") || t.title.includes("截图") || t.title.includes("Screenshot"))
      return !1;
    const e = [
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
    for (const o of e)
      if (t.title === o || t.title.startsWith(o))
        return !1;
    return !(t.title.startsWith("NVIDIA") || t.title.startsWith("Intel") || t.title.startsWith("AMD") || t.title.startsWith("Realtek") || t.title.includes("Driver") || t.title.includes("Graphics") || t.title.includes("Background Task Host") || t.title.includes("Runtime Broker") || t.title.includes("Service Host") || t.title.includes("Windows Modules Installer") || t.title.includes("System Interrupts") || t.title.includes("Registry") || t.title.includes("dwm.exe") || t.title.includes("explorer.exe") || t.title.includes("winlogon.exe") || t.title.trim().replace(/[^\w\s\u4e00-\u9fa5]/g, "").length < 2);
  }
  detectNearbyWindow(t) {
    if (this.allWindows.length === 0) return null;
    const e = [];
    for (const i of this.allWindows) {
      if (t.x >= i.x && t.x <= i.x + i.width && t.y >= i.y && t.y <= i.y + i.height) {
        e.push({ window: i, distance: 0 });
        continue;
      }
      const s = Math.abs(t.x - i.x), a = Math.abs(t.x - (i.x + i.width)), r = Math.abs(t.y - i.y), l = Math.abs(t.y - (i.y + i.height)), h = Math.min(s, a, r, l);
      h <= this.snapThreshold && e.push({ window: i, distance: h });
    }
    return e.length === 0 ? null : e.reduce((i, o) => o.window.display_order < i.window.display_order ? o : o.window.display_order > i.window.display_order ? i : o.distance < i.distance ? o : o.distance > i.distance ? i : o.window.is_fullscreen && !i.window.is_fullscreen ? o : i).window;
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
      kind: "fullscreen"
    };
  }
  getActiveSelectionCandidate() {
    if (this.snappedElement && this.lastPointerPosition) {
      const { rect: t } = this.snappedElement, e = this.lastPointerPosition;
      if (e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height)
        return this.snappedElement;
    }
    return this.snappedWindow ? {
      rect: {
        x: this.snappedWindow.x,
        y: this.snappedWindow.y,
        width: this.snappedWindow.width,
        height: this.snappedWindow.height
      },
      kind: "window"
    } : this.lastPointerPosition ? this.getFullscreenCandidate() : null;
  }
  scheduleUiElementDetection(t, e) {
    const i = ++this.smartDetectionSequence;
    this.pendingSmartDetection = {
      mousePos: { ...t },
      targetWindow: e,
      sequence: i
    }, this.smartDetectionTimer === null && (this.smartDetectionTimer = window.setTimeout(() => {
      this.smartDetectionTimer = null;
      const o = this.pendingSmartDetection;
      o && this.applyVisualElementCandidate(
        o.mousePos,
        o.targetWindow,
        o.sequence
      );
    }, 24)), this.accessibilityDetectionTimer !== null && window.clearTimeout(this.accessibilityDetectionTimer), this.accessibilityDetectionTimer = window.setTimeout(() => {
      this.accessibilityDetectionTimer = null;
      const o = this.pendingSmartDetection;
      this.pendingSmartDetection = null, o && this.detectUiElement(
        o.mousePos,
        o.targetWindow,
        o.sequence
      );
    }, 90);
  }
  async detectUiElement(t, e, i) {
    if (!e.handle) return;
    const o = this.captureMonitor.scale || 1, s = Math.round(this.captureMonitor.x + t.x * o), a = Math.round(this.captureMonitor.y + t.y * o);
    try {
      const r = await S("get_ui_element_at_point", {
        windowHandle: e.handle,
        x: s,
        y: a
      });
      if (i !== this.smartDetectionSequence || this.snappedWindow !== e || !r) return;
      const l = {
        x: Math.round((r.x - this.captureMonitor.x) / o),
        y: Math.round((r.y - this.captureMonitor.y) / o),
        width: Math.round(r.width / o),
        height: Math.round(r.height / o)
      }, h = l.x >= e.x - 2 && l.y >= e.y - 2 && l.x + l.width <= e.x + e.width + 2 && l.y + l.height <= e.y + e.height + 2, u = t.x >= l.x && t.x <= l.x + l.width && t.y >= l.y && t.y <= l.y + l.height;
      if (l.width < 8 || l.height < 8 || !h || !u)
        return;
      this.snappedElement = {
        rect: l,
        kind: "element"
      }, this.draw();
    } catch {
    }
  }
  applyVisualElementCandidate(t, e, i) {
    if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
      return;
    const o = this.visualElementDetector?.detect(t, e) || null, s = this.snappedElement?.rect || null;
    !s && !o || s && o && s.x === o.x && s.y === o.y && s.width === o.width && s.height === o.height || (this.snappedElement = o ? { rect: o, kind: "element" } : null, this.draw());
  }
  cancelSmartDetection() {
    this.smartDetectionSequence += 1, this.smartDetectionTimer !== null && (window.clearTimeout(this.smartDetectionTimer), this.smartDetectionTimer = null), this.accessibilityDetectionTimer !== null && (window.clearTimeout(this.accessibilityDetectionTimer), this.accessibilityDetectionTimer = null), this.pendingSmartDetection = null;
  }
  // 绑定鼠标事件
  bindMouseEvents() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler), this.canvas.addEventListener("mousemove", this.mouseMoveHandler), this.canvas.addEventListener("mouseup", this.mouseUpHandler), this.canvas.addEventListener("dblclick", this.doubleClickHandler), window.addEventListener("keydown", this.keyDownHandler), window.addEventListener("keyup", this.keyUpHandler);
  }
  // 鼠标按下处理
  handleMouseDown(t) {
    t.preventDefault(), t.stopPropagation();
    const e = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = e;
    const i = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    if ((this.currentTool === m.Select || this.currentTool === m.Marker) && i?.getData().type === m.Marker) {
      this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(i.getData().points[0], i), this.draw(), this.onStateChange?.();
      return;
    }
    const o = this.eventHandler.getOperationType(
      e,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (o !== z.None)
      switch (this.eventHandler.setCurrentOperation(o), this.eventHandler.startDrawing(e), o) {
        case z.Drawing:
          if (!this.selectionRect && this.currentTool === m.Select) {
            this.dragStartPosition = { ...e };
            const s = this.getActiveSelectionCandidate();
            s ? this.pendingSnapCandidate = s : (this.selectionRect = {
              x: e.x,
              y: e.y,
              width: 0,
              height: 0
            }, this.onStateChange?.());
          }
          break;
        case z.DrawingRect:
        case z.DrawingEllipse:
        case z.DrawingLine:
        case z.DrawingArrow:
        case z.DrawingPen:
        case z.DrawingMosaic:
        case z.DrawingMarker:
          this.startAnnotation(e);
          break;
        case z.DrawingText:
          this.startTextInput(e), this.eventHandler.stopDrawing();
          break;
        case z.ColorPicking:
          this.handleColorPicking(e), this.eventHandler.stopDrawing();
          break;
        case z.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case z.EditingAnnotation:
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === m.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case z.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case z.ResizingAnnotationNW:
        case z.ResizingAnnotationSE:
          this.startAnnotationResize(e, o);
          break;
        case z.Moving:
        case z.ResizingNW:
        case z.ResizingNE:
        case z.ResizingSW:
        case z.ResizingSE:
        case z.ResizingN:
        case z.ResizingS:
        case z.ResizingW:
        case z.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const e = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = e;
    const i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(e), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && St(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === m.Select && this.updateSelectionRect(e, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === m.Select && !this.selectionRect) {
        const o = this.detectNearbyWindow(e);
        o !== this.snappedWindow && (this.cancelSmartDetection(), this.snappedWindow = o, this.snappedElement = null, this.showSnapPreview = !0, this.draw()), this.showSnapPreview || (this.showSnapPreview = !0, this.draw()), o && this.scheduleUiElementDetection(e, o);
      }
      this.updateHoverState(e), this.currentTool === m.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(e, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = e, this.draw(), this.throttledUpdateColorPreview(e)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapCandidate && !this.selectionRect && (this.selectionRect = { ...this.pendingSnapCandidate.rect }), this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.showSnapPreview = !1, this.cancelSmartDetection(), this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const e = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    (i?.getData().type === m.Text || i?.getData().type === m.Marker) && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(e, i));
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
  updateSelectionRect(t, e) {
    if (!this.selectionRect) return;
    const i = e.currentOperation, o = t.x - e.lastMousePos.x, s = t.y - e.lastMousePos.y;
    switch (i) {
      case z.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case z.Moving:
        this.selectionRect.x += o, this.selectionRect.y += s;
        break;
      case z.ResizingNW:
        this.selectionRect.x += o, this.selectionRect.y += s, this.selectionRect.width -= o, this.selectionRect.height -= s;
        break;
      case z.ResizingNE:
        this.selectionRect.y += s, this.selectionRect.width += o, this.selectionRect.height -= s;
        break;
      case z.ResizingSW:
        this.selectionRect.x += o, this.selectionRect.width -= o, this.selectionRect.height += s;
        break;
      case z.ResizingSE:
        this.selectionRect.width += o, this.selectionRect.height += s;
        break;
      case z.ResizingN:
        this.selectionRect.y += s, this.selectionRect.height -= s;
        break;
      case z.ResizingS:
        this.selectionRect.height += s;
        break;
      case z.ResizingW:
        this.selectionRect.x += o, this.selectionRect.width -= o;
        break;
      case z.ResizingE:
        this.selectionRect.width += o;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && e !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === m.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
  }
  // 开始标注拖拽
  startAnnotationDrag(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && (this.draggedAnnotation = e, this.dragStartPoint = t, this.pendingDragSnapshot = this.createHistorySnapshot(), this.selectedAnnotation !== e && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 })));
  }
  // 更新标注拖拽
  updateAnnotationDrag(t) {
    if (!this.draggedAnnotation || !this.dragStartPoint) return;
    const e = t.x - this.dragStartPoint.x, i = t.y - this.dragStartPoint.y;
    this.draggedAnnotation.move(e, i), this.constrainAnnotationToBounds(this.draggedAnnotation), this.dragStartPoint = t;
  }
  // 完成标注拖拽
  finishAnnotationDrag() {
    if (this.draggedAnnotation) {
      if (this.pendingDragSnapshot) {
        const t = this.draggedAnnotation.getData(), e = this.pendingDragSnapshot.annotations.find((o) => o.id === t.id);
        (e ? JSON.stringify(e.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingDragSnapshot), this.annotationRedoStack = []), this.pendingDragSnapshot = null;
      }
      this.draggedAnnotation = null, this.dragStartPoint = null;
    }
  }
  // 开始标注缩放
  startAnnotationResize(t, e) {
    const i = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    if (i) {
      this.resizingAnnotation = i, this.resizeOperation = e, this.pendingResizeSnapshot = this.createHistorySnapshot();
      const o = i.getBounds();
      o && (this.resizeStartBounds = { ...o }), this.selectedAnnotation !== i && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = i, this.selectedAnnotation.updateData({ selected: !0 }));
    }
  }
  // 更新标注缩放
  updateAnnotationResize(t) {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation) return;
    const e = this.resizingAnnotation.getData();
    if (e.points.length < 2) return;
    const i = e.points[0];
    switch (this.resizeOperation) {
      case z.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, e.points[1]]
        });
        break;
      case z.ResizingAnnotationSE:
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
        const t = this.resizingAnnotation.getData(), e = this.pendingResizeSnapshot.annotations.find((o) => o.id === t.id);
        (e ? JSON.stringify(e.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingResizeSnapshot), this.annotationRedoStack = []), this.pendingResizeSnapshot = null;
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
    if (this.currentTool !== m.Select) {
      this.updateToolCursor();
      return;
    }
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = e && e.getData().type !== m.Mosaic ? e : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== m.Select) {
      this.updateToolCursor();
      return;
    }
    if (!this.selectionRect) {
      this.updateCursor("crosshair");
      return;
    }
    const e = this.eventHandler.getOperationType(
      t,
      this.currentTool,
      this.selectionRect,
      this.annotations
    ), o = {
      [z.Moving]: "move",
      [z.ResizingNW]: "nw-resize",
      [z.ResizingNE]: "ne-resize",
      [z.ResizingSW]: "sw-resize",
      [z.ResizingSE]: "se-resize",
      [z.ResizingN]: "n-resize",
      [z.ResizingS]: "s-resize",
      [z.ResizingW]: "w-resize",
      [z.ResizingE]: "e-resize",
      [z.EditingAnnotation]: "pointer",
      [z.MovingAnnotation]: "move",
      [z.ResizingAnnotationNW]: "nw-resize",
      [z.ResizingAnnotationSE]: "se-resize",
      [z.Drawing]: "crosshair"
    }[e] || "default";
    this.updateCursor(o);
  }
  // 更新画布cursor样式
  updateCursor(t) {
    this.canvas.style.cursor !== t && (this.canvas.style.cursor = t);
  }
  // 根据当前工具更新光标样式
  updateToolCursor() {
    switch (this.currentTool) {
      case m.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case m.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case m.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case m.Rectangle:
      case m.Ellipse:
      case m.Line:
      case m.Arrow:
      case m.Text:
      case m.Marker:
        this.updateCursor("crosshair");
        break;
      default:
        this.updateCursor("default");
    }
  }
  // 创建圆形光标（用于画笔和马赛克）
  createCircleCursor(t, e = "#666") {
    const i = Math.max(t / 2, 2), o = i * 2 + 4, s = o / 2, a = `
      <svg width="${o}" height="${o}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${s}" cy="${s}" r="${i}"
                fill="none" stroke="${e}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${s}" cy="${s}" r="1" fill="${e}" opacity="0.9"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(a)}') ${s} ${s}, crosshair`;
  }
  createPenCursor(t = "#ff4444") {
    const e = `
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20l4.8-1.1L20.2 7.5a2.2 2.2 0 0 0 0-3.1l-.6-.6a2.2 2.2 0 0 0-3.1 0L5.1 15.2 4 20z"
              fill="white" stroke="#111827" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M14.8 5.5l3.7 3.7" stroke="#111827" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M5.1 15.2L8.8 18.9" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(e)}') 4 20, crosshair`;
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
      const t = this.editingAnnotation?.getData().type === m.Text ? this.annotations.filter((e) => e.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
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
    const { x: e, y: i, width: o, height: s } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const f = e + o / 2, v = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let A = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? A = "正在启动 AI 模型服务..." : A = "正在由 AI 识图翻译..."), t.fillText(A, f, v), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const f = e + o / 2, v = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, f, v), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: i, width: o, height: s }, l = this.sampleRegionColor(r), h = l.brightness < 128;
    let u, d;
    if (h) {
      const f = Math.max(0, Math.round(l.r * 0.1)), v = Math.max(0, Math.round(l.g * 0.1)), A = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${f}, ${v}, ${A}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), v = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), A = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${f}, ${v}, ${A}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(e, i, o, s), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const x = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((f) => ({
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
    })), w = x.filter((f) => f.isStructuredBlock), b = x.filter((f) => !f.isStructuredBlock);
    b.length > 0 && this.drawFlowedTranslationBlocks(t, b, e, i, a, o, s);
    for (const f of w)
      this.drawStructuredTranslationBlock(t, f, e, i, a, o, s);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, i, o, s, a, r) {
    const l = [...e].filter((T) => (T.translatedText || T.text).trim()).sort((T, U) => {
      const Y = T.bbox.y - U.bbox.y;
      return Math.abs(Y) > 4 ? Y : T.bbox.x - U.bbox.x;
    });
    if (l.length === 0)
      return;
    const h = Math.max(24, r - s * 2), u = s, d = (T, U, Y) => l.map((G) => {
      const H = (G.translatedText || G.text).trim(), j = Math.max(12, Math.min(G.fontSize || 16, 48)), Q = Math.max(8, Math.round(j * T)), q = G.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', K = Math.max(
        s,
        Math.min(G.bbox.x + s, a * 0.38)
      ), et = U ? s : K, rt = Math.max(48, a - et - u), wt = G.lineHeight || Q * 1.35, nt = Math.max(
        Q * (Y ? 1.04 : 1.14),
        Math.min(wt * T, Q * (Y ? 1.18 : 1.42))
      );
      return t.font = `${Q}px ${q}`, {
        text: H,
        fontSize: Q,
        fontFamily: q,
        lineHeight: nt,
        paragraphGap: Y ? Math.max(1, nt * 0.16) : Math.max(3, nt * 0.35),
        x: i + et,
        lines: this.wrapTextToLines(t, H, rt)
      };
    }), x = (T) => T.reduce((U, Y, G) => {
      const H = G === T.length - 1 ? 0 : Y.paragraphGap;
      return U + Y.lines.length * Y.lineHeight + H;
    }, 0);
    let w = d(1, !1, !1), b = x(w);
    if (b > h) {
      const T = Math.max(0.56, h / b);
      w = d(T, !1, !1), b = x(w);
    }
    if (b > h && (w = d(1, !0, !1), b = x(w)), b > h) {
      const T = Math.max(0.38, h / b * 0.96);
      w = d(T, !0, !0), b = x(w);
    }
    if (b > h) {
      const T = Math.max(0.3, h / b * 0.94);
      w = d(T, !0, !0), b = x(w);
    }
    const f = Math.min(...l.map((T) => T.bbox.y)), v = o + Math.max(s, Math.min(f, r - s)), A = o + r - s;
    let N = v + b > A ? o + s : v;
    for (const T of w) {
      t.font = `${T.fontSize}px ${T.fontFamily}`;
      for (const U of T.lines)
        t.fillText(U, T.x, N), N += T.lineHeight;
      N += T.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, i, o, s, a, r) {
    const l = [...e.blocks].sort((d, x) => d.x - x.x), h = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || h * 1.35;
    t.font = `${h}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const x = d.translatedText || d.text;
      if (!x.trim()) continue;
      const w = i + d.x + Math.min(4, s), b = o + d.y, f = l.find((T) => T.x > d.x), v = f ? Math.max(d.width, f.x - d.x - 8) : Math.max(d.width, a - d.x - s), A = this.wrapTextToLines(t, x.trim(), v);
      let N = b;
      for (const T of A) {
        if (N + h > o + r) break;
        t.fillText(T, w, N), N += u;
      }
    }
  }
  /**
   * 将文字按宽度换行，返回行数组
   */
  wrapTextToLines(t, e, i) {
    const o = e.replace(/\s+/g, " ").trim();
    if (!o)
      return [];
    const s = [], a = /\s/.test(o) ? o.split(/(\s+)/).filter((h) => h.length > 0) : Array.from(o);
    let r = "";
    const l = (h) => {
      let u = "";
      for (const d of Array.from(h)) {
        const x = u + d;
        t.measureText(x).width > i && u !== "" ? (s.push(u), u = d) : u = x;
      }
      r = u;
    };
    for (const h of a) {
      const u = /^\s+$/.test(h), d = u ? " " : h, x = r + d;
      if (t.measureText(x).width <= i) {
        r = x;
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
  sampleRegionColor(t, e = 16) {
    const i = { r: 255, g: 255, b: 255, brightness: 255 };
    if (!this.backgroundImage)
      return i;
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), i;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, x = this.canvas.height / o, w = h / d, b = u / x, f = t.x * w, v = t.y * b, A = t.width * w, N = t.height * b;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        v,
        A,
        N,
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
    const U = T.data, Y = Math.ceil(Math.sqrt(e)), G = s / (Y + 1), H = a / (Y + 1);
    let j = 0, Q = 0, q = 0, K = 0;
    for (let X = 1; X <= Y; X++)
      for (let it = 1; it <= Y && !(K >= e); it++) {
        const mt = Math.floor(it * G), yt = Math.floor(X * H);
        if (mt >= 0 && mt < s && yt >= 0 && yt < a) {
          const D = (yt * s + mt) * 4;
          D >= 0 && D + 2 < U.length && (j += U[D], Q += U[D + 1], q += U[D + 2], K++);
        }
      }
    if (this.canvasPool.release(r), K === 0)
      return i;
    const et = Math.round(j / K), rt = Math.round(Q / K), wt = Math.round(q / K), nt = this.getBrightness(et, rt, wt);
    return {
      r: et,
      g: rt,
      b: wt,
      brightness: nt
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
  getBrightness(t, e, i) {
    const o = Math.max(0, Math.min(255, t)), s = Math.max(0, Math.min(255, e)), a = Math.max(0, Math.min(255, i));
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
    const { brightness: e } = t, i = e < 128, o = e / 255, a = 0.85 + Math.abs(o - 0.5) * 2 * 0.1;
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
  isUniformColor(t, e = 100, i = 16) {
    if (!this.backgroundImage)
      return !1;
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, x = this.canvas.height / o, w = h / d, b = u / x, f = t.x * w, v = t.y * b, A = t.width * w, N = t.height * b;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        v,
        A,
        N,
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
    const U = T.data, Y = Math.ceil(Math.sqrt(i)), G = s / (Y + 1), H = a / (Y + 1), j = [];
    for (let X = 1; X <= Y; X++)
      for (let it = 1; it <= Y && !(j.length >= i); it++) {
        const mt = Math.floor(it * G), yt = Math.floor(X * H);
        if (mt >= 0 && mt < s && yt >= 0 && yt < a) {
          const D = (yt * s + mt) * 4;
          D >= 0 && D + 2 < U.length && j.push({
            r: U[D],
            g: U[D + 1],
            b: U[D + 2]
          });
        }
      }
    if (this.canvasPool.release(r), j.length < 2)
      return !1;
    const Q = j.reduce((X, it) => X + it.r, 0) / j.length, q = j.reduce((X, it) => X + it.g, 0) / j.length, K = j.reduce((X, it) => X + it.b, 0) / j.length, et = j.reduce((X, it) => X + Math.pow(it.r - Q, 2), 0) / j.length, rt = j.reduce((X, it) => X + Math.pow(it.g - q, 2), 0) / j.length, wt = j.reduce((X, it) => X + Math.pow(it.b - K, 2), 0) / j.length;
    return (et + rt + wt) / 3 < e;
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
    const e = t * 0.8, i = t * 0.85, s = Math.max(12, Math.min(e, i));
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
  fitTextToWidth(t, e, i, o) {
    if (!t || t.length === 0)
      return i;
    if (e <= 0 || i <= 12)
      return 12;
    const r = e - 4 * 2;
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
    const { rect: e } = t, i = this.canvas.getContext("2d");
    i && (i.save(), i.strokeStyle = "#00a8ff", i.lineWidth = 2, i.setLineDash([5, 5]), i.fillStyle = "rgba(0, 168, 255, 0.1)", i.fillRect(
      e.x,
      e.y,
      e.width,
      e.height
    ), i.strokeRect(
      e.x,
      e.y,
      e.width,
      e.height
    ), i.restore());
  }
  // 设置工具
  setTool(t) {
    this.currentTool = t, this.clearSelection(), this.showGuides = t === m.Select, this.colorPickerState.isActive = t === m.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== m.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== m.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.snappedElement = null, this.showSnapPreview = !1, this.pendingSnapCandidate = null, this.cancelSmartDetection(), this.dragStartPosition = null, t !== m.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === m.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (sn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === m.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = sn.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          markerNumber: this.currentTool === m.Marker ? this.getNextMarkerNumber() : void 0,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  getNextMarkerNumber() {
    return this.annotations.reduce((t, e) => e.getData().type !== m.Marker ? t : Math.max(t, e.getData().markerNumber || 0), 0) + 1;
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const e = this.currentAnnotation.getData();
    switch (e.type) {
      case m.Rectangle:
      case m.Ellipse:
      case m.Line:
      case m.Arrow:
        t = this.getConstrainedShapeEndPoint(e.type, e.points[0], t), e.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case m.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case m.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  getConstrainedShapeEndPoint(t, e, i) {
    if (!this.isShiftPressed) return i;
    const o = i.x - e.x, s = i.y - e.y;
    if (t === m.Ellipse || t === m.Rectangle) {
      const a = Math.max(Math.abs(o), Math.abs(s));
      return {
        x: e.x + Math.sign(o || 1) * a,
        y: e.y + Math.sign(s || 1) * a
      };
    }
    if (t === m.Line || t === m.Arrow) {
      const a = Math.sqrt(o * o + s * s), r = Math.PI / 4, l = Math.round(Math.atan2(s, o) / r) * r;
      return {
        x: e.x + Math.cos(l) * a,
        y: e.y + Math.sin(l) * a
      };
    }
    return i;
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === m.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const e = this.currentAnnotation.getData().points;
    if (e.length < 3) return;
    let i = e[0].x, o = e[0].x, s = e[0].y, a = e[0].y;
    e.forEach((w) => {
      i = Math.min(i, w.x), o = Math.max(o, w.x), s = Math.min(s, w.y), a = Math.max(a, w.y);
    });
    const r = o - i, l = a - s;
    let h = 0;
    for (let w = 1; w < e.length; w++)
      h += St(e[w - 1], e[w]);
    const d = St(e[0], e[e.length - 1]) / h, x = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || x > 5) {
      const w = e[0], b = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [w, b] });
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
      const t = this.annotations.findIndex((e) => e.getData().id === this.selectedAnnotation.getData().id);
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
  createTextAnnotation(t, e) {
    if (!e.trim()) return;
    const i = sn.createAnnotation(
      m.Text,
      t,
      this.currentStyle,
      {
        text: e.trim(),
        fontSize: this.textSize
      }
    );
    i && i.isValid() && (this.pushAnnotationHistory(), this.annotations.push(i), this.draw(), this.onStateChange?.());
  }
  // 开始文字输入
  startTextInput(t, e) {
    this.onTextInputRequest?.(t, e);
  }
  // 截图并处理标注
  async processScreenshot(t) {
    if (!this.selectionRect)
      throw new Error("没有选择区域");
    try {
      const { x: e, y: i, width: o, height: s } = this.selectionRect, r = (await S("get_window_info"))?.scale || 1, l = await this.cropFromBackground(e, i, o, s);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const h = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await S("copy_to_clipboard", { image: h }) : await S("save_screenshot_to_file", { image: h });
    } catch (e) {
      const i = t === "save" ? "保存" : "复制";
      throw P.error(`[截图] ${i}截图失败`, e), new Error(`${i}截图失败: ${e?.message || e?.toString() || "未知错误"}`);
    }
  }
  // 从背景图像裁剪指定区域
  async cropFromBackground(t, e, i, o, s = {}) {
    return new Promise(async (a, r) => {
      const l = setTimeout(() => {
        r(new Error("裁剪背景图像超时"));
      }, 1e4);
      try {
        if (!this.backgroundImage) {
          let gt = 0;
          for (; !this.backgroundImage && gt < 3e3; )
            await new Promise((F) => setTimeout(F, 100)), gt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const h = window.devicePixelRatio || 1, u = Math.max(0, s.padding || 0), d = this.canvas.width / h, x = this.canvas.height / h, w = t - u, b = e - u, f = i + u * 2, v = o + u * 2, A = Math.max(1, Math.round(f * h)), N = Math.max(1, Math.round(v * h)), T = Math.max(0, w), U = Math.max(0, b), Y = Math.min(d, w + f), G = Math.min(x, b + v), H = Math.max(0, Y - T), j = Math.max(0, G - U), Q = Math.round(T * h), q = Math.round(U * h), K = Math.min(
          this.canvas.width - Q,
          Math.round(H * h)
        ), et = Math.min(
          this.canvas.height - q,
          Math.round(j * h)
        ), rt = Math.round((T - w) * h), wt = Math.round((U - b) * h), nt = document.createElement("canvas");
        nt.width = A, nt.height = N;
        const X = nt.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!X)
          throw new Error("无法获取2D绘图上下文");
        X.imageSmoothingEnabled = !1, s.fillColor && (X.fillStyle = s.fillColor, X.fillRect(0, 0, A, N)), K > 0 && et > 0 && X.drawImage(
          this.backgroundImage,
          Q,
          q,
          K,
          et,
          rt,
          wt,
          K,
          et
        );
        const mt = nt.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: mt,
          adjusted_width: A,
          adjusted_height: N,
          logical_x: w,
          logical_y: b,
          logical_width: f,
          logical_height: v
        });
      } catch (h) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${h.message || h}`));
      }
    });
  }
  // 渲染带标注的图像
  async renderWithAnnotations(t, e, i) {
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
            const d = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, x = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, w = this.drawingEngine.createScreenshotContext(
              l,
              d,
              x
            );
            this.annotations.forEach((b, f) => {
              try {
                b.drawToScreenshot(w);
              } catch (v) {
                P.error(`[截图] 绘制标注 ${f} 失败`, v);
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === m.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === m.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const e = this.annotations.findIndex((i) => i === t);
    e !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(e, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字或序号标记的说明内容
  updateTextAnnotation(t, e) {
    if (t.getData().type === m.Text || t.getData().type === m.Marker) {
      if (t.getData().text === e) {
        this.clearEditingAnnotation();
        return;
      }
      this.pushAnnotationHistory(), t.updateData({ text: e }), this.clearEditingAnnotation(), this.draw(), this.onStateChange?.();
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
        const { x: e, y: i, width: o, height: s } = this.selectionRect, a = await S("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), h = Math.round(a.y + i * r), u = Math.round(o * r), d = Math.round(s * r), x = Math.round(a.x + window.innerWidth * r), w = Math.round(a.y + window.innerHeight * r), b = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, x - a.x)) : u, f = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, w - a.y)) : d, v = t === "ocr" ? Math.round(l - Math.max(0, b - u) / 2) : l, A = t === "ocr" ? Math.max(a.x, Math.min(v, x - b)) : l, N = t === "ocr" ? Math.max(a.y, Math.min(h, w - f)) : h, T = {}, U = await this.cropFromBackground(e, i, o, s, T);
        if (!U?.image)
          throw new Error("Failed to crop from background image");
        const Y = await this.renderWithAnnotations(U, r, "save");
        await S("create_pin_window", {
          mode: t,
          imageData: Y,
          x: A,
          y: N,
          width: b,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new Qe("screenshot").close();
        }, 100);
      } catch (e) {
        throw P.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, e), e;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const e = await S("get_window_info"), i = e?.scale || 1, o = Math.round(e.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), s = Math.round(e.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await S("get_pixel_color", {
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
      } catch (e) {
        P.error("[截图] 获取像素颜色失败", e);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const e = await S("get_window_info"), i = e?.scale || 1, o = this.colorPickerState.zoomFactor, s = Math.floor(o / 2), a = Math.round(e.x + t.x * i), r = Math.round(e.y + t.y * i), l = await S("get_screen_preview", {
          x: a - s,
          y: r - s,
          width: o,
          height: o
        }), h = new Image();
        h.src = `data:image/png;base64,${l.image}`, await h.decode();
        const u = await createImageBitmap(h);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const x = new OffscreenCanvas(o, o).getContext("2d");
        if (x) {
          x.drawImage(u, 0, 0, o, o);
          const w = x.getImageData(s, s, 1, 1).data, b = { r: w[0], g: w[1], b: w[2] }, f = this.rgbToHex(b.r, b.g, b.b);
          this.colorPickerState.colorInfo = { rgb: b, hex: f, position: t };
        }
        this.draw();
      } catch (e) {
        P.error("[截图] 更新颜色预览失败", e);
      }
  }
  // 节流版本的颜色预览更新
  throttledUpdateColorPreview(t) {
    const e = Date.now();
    e - this.lastThrottledTimestamp < this.throttleInterval || (this.lastThrottledTimestamp = e, this.throttleTimer && cancelAnimationFrame(this.throttleTimer), this.throttleTimer = requestAnimationFrame(() => {
      this.updateColorPreview(t), this.throttleTimer = null;
    }));
  }
  // RGB 转 HEX
  rgbToHex(t, e, i) {
    const o = (s) => {
      const a = Math.max(0, Math.min(255, Math.round(s))).toString(16);
      return a.length === 1 ? "0" + a : a;
    };
    return `#${o(t)}${o(e)}${o(i)}`.toUpperCase();
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
        let e = 0, i = 0, o = 0, s = 0, a = 0;
        const { x: r, y: l, width: h, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, x = h * d, w = u * d, b = this.canvasPool.acquire(x, w), f = b.getContext("2d");
        if (!f)
          throw this.canvasPool.release(b), new Error("无法创建临时canvas");
        const v = r * d, A = l * d, N = performance.now();
        f.drawImage(
          this.backgroundImage,
          v,
          A,
          x,
          w,
          0,
          0,
          x,
          w
        ), e = Math.round(performance.now() - N);
        const T = performance.now(), { recognizeFromCanvas: U } = await ge.loadOCR();
        i = Math.round(performance.now() - T);
        const Y = performance.now(), G = await U(b);
        o = Math.round(performance.now() - Y), this.canvasPool.release(b);
        const H = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          confidence: G.confidence,
          rawLineCount: G.blocks.length,
          textLength: G.full_text.trim().length
        };
        P.info("[OCR] 识别耗时统计", H), _t.log("[OCR] recognition timing", H);
        const j = G.blocks, Q = performance.now(), q = Ao(j);
        s = Math.round(performance.now() - Q);
        const K = q.map((_) => _.text).join(`

`), et = {
          rawLineCount: j.length,
          paragraphCount: q.length,
          durationMs: s,
          paragraphs: q.map((_, tt) => ({
            index: tt,
            text: _.text,
            blockCount: _.blocks.length,
            isCodeBlock: !!_.isCodeBlock,
            isStructuredBlock: !!_.isStructuredBlock,
            bbox: _.bbox,
            sourceBlocks: _.blocks.map((at) => ({
              text: at.text,
              x: at.x,
              y: at.y,
              width: at.width,
              height: at.height
            }))
          }))
        };
        if (P.info("[OCR] 版面重组完成", et), _t.log("[OCR] layout reflow complete", et), !K || !K.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const rt = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(de(K));
        const wt = (_) => {
          const tt = _.trim();
          return !!(tt.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !tt.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let nt = "";
        const X = de(K), it = {
          detectedLanguage: X,
          textLength: K.trim().length,
          textPreview: K.trim().slice(0, 500)
        };
        P.info("[OCR] 翻译语言检测完成", it), _t.log("[OCR] translation language detected", it), Le(X) && (this.translationOverlay.sourceLanguage = X, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(X));
        const mt = rt === "offline" ? ge.loadOfflineTranslator() : null, yt = (_) => _.includes("插件") && _.includes("未启用") ? _.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : _ : rt === "offline" ? _.includes("未激活") || _.includes("未下载") || _.includes("运行时未安装") ? _ : _.includes("超时") ? "模型加载超时，请重试" : _.includes("离线翻译暂仅支持") ? _ : "离线翻译失败: " + _.substring(0, 50) : _.includes("timeout") || _.includes("超时") ? "翻译超时，请检查网络连接" : _.includes("network") || _.includes("网络") || _.includes("请求") || _.includes("令牌") ? "翻译失败，请检查网络连接" : _.trim() ? _.slice(0, 80) : "翻译失败，请检查网络连接", D = async () => {
          if (!mt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: _,
            canUseOfflineTranslation: tt,
            warmupOfflineTranslator: at,
            getModelCacheInfo: vt
          } = await mt, bt = tt();
          if (this.offlineModelActivated && !bt)
            if ((await vt()).isCached)
              await at();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return _;
        }, gt = async (_, tt, at) => {
          if (!_.trim())
            return _;
          if (rt === "offline") {
            if (tt !== "en" || at !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await D())(_);
          }
          return await S("translate_text", {
            text: _,
            from: tt,
            to: at,
            engine: rt
          });
        }, F = (_) => {
          const tt = _.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(tt) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(tt);
        }, Mt = async (_, tt, at) => {
          const vt = _.trim();
          if (!vt || wt(vt))
            return _;
          const bt = _.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (bt) {
            const [, zt, ot, st, ut, At] = bt, Qt = de(ot), Me = F(ot) || !Le(Qt) ? ot : await gt(ot, Qt, this.getAutoTargetLanguage(Qt)), jt = de(ut), tn = Le(jt) && !wt(ut) ? await gt(ut, jt, this.getAutoTargetLanguage(jt)) : ut;
            return `${zt}${Me}${st}${tn}${At}`;
          }
          if (F(vt))
            return _;
          const Ct = de(vt);
          if (!Le(Ct))
            return _;
          const M = this.getAutoTargetLanguage(Ct), W = await gt(vt, Ct, M), lt = {
            paragraphIndex: tt,
            blockIndex: at,
            sourceLanguage: Ct,
            targetLanguage: M,
            sourceText: vt,
            translatedText: W.slice(0, 200)
          };
          return P.info("[OCR] 结构化块翻译完成", lt), _t.log("[OCR] structured block translation complete", lt), W;
        }, Tt = async (_, tt) => {
          const at = performance.now(), vt = (W) => ({
            index: tt,
            durationMs: Math.round(performance.now() - at),
            ...W
          }), bt = de(_.text), Ct = this.getAutoTargetLanguage(bt), M = {
            index: tt,
            text: _.text,
            sourceLanguage: bt,
            targetLanguage: Ct,
            engine: rt,
            structured: !!_.isStructuredBlock
          };
          if (P.info("[OCR] 段落翻译方向", M), _t.log("[OCR] paragraph translation direction", M), !Le(bt)) {
            _.translatedText = _.text;
            const W = vt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), lt = {
              index: tt,
              detectedLanguage: bt,
              durationMs: W.durationMs,
              text: _.text
            };
            return P.warn("[OCR] 跳过不支持的段落语言", lt), _t.log("[OCR] skip unsupported paragraph language", lt), W;
          }
          try {
            if (_.isStructuredBlock && _.blocks.length > 0) {
              const zt = async (st, ut) => {
                const At = await Mt(st.text, tt, ut);
                return st.translatedText = At, At;
              }, ot = [];
              if (rt === "offline")
                for (let st = 0; st < _.blocks.length; st += 1)
                  ot.push(await zt(_.blocks[st], st));
              else
                ot.push(
                  ...await Promise.all(
                    _.blocks.map((st, ut) => zt(st, ut))
                  )
                );
              _.translatedText = ot.join(" ");
            } else if (wt(_.text) || _.isCodeBlock) {
              _.translatedText = _.text;
              const zt = _.isCodeBlock ? "code_block" : "command_like_text", ot = vt({ skipped: !0, cancelled: !1 }), st = {
                index: tt,
                reason: zt,
                durationMs: ot.durationMs,
                text: _.text
              };
              return P.info("[OCR] 跳过代码段翻译", st), _t.log("[OCR] skip code paragraph translation", st), ot;
            } else
              _.translatedText = await gt(
                _.text,
                bt,
                Ct
              );
            const W = vt({ skipped: !1, cancelled: !1 }), lt = {
              index: tt,
              durationMs: W.durationMs,
              sourceLanguage: bt,
              targetLanguage: Ct,
              engine: rt,
              structured: !!_.isStructuredBlock,
              sourceLength: _.text.length,
              translatedLength: (_.translatedText || "").length,
              translatedPreview: (_.translatedText || "").slice(0, 300)
            };
            return P.info("[OCR] 段落翻译完成", lt), _t.log("[OCR] paragraph translation complete", lt), W;
          } catch (W) {
            const lt = W instanceof Error ? W.message : String(W);
            if (lt === "翻译已取消")
              return vt({ skipped: !1, cancelled: !0 });
            _.translatedText = _.text;
            const zt = yt(lt), ot = vt({
              skipped: !1,
              cancelled: !1,
              errorMessage: zt
            }), st = {
              index: tt,
              durationMs: ot.durationMs,
              sourceLanguage: bt,
              targetLanguage: Ct,
              engine: rt,
              error: lt,
              structured: !!_.isStructuredBlock,
              text: _.text
            };
            return P.error("[OCR] 段落翻译失败", st), _t.log("[OCR] paragraph translation failed", st), ot;
          }
        }, Ut = performance.now();
        let pt = [];
        if (rt === "offline")
          for (let _ = 0; _ < q.length; _ += 1) {
            const tt = await Tt(q[_], _);
            if (pt.push(tt), tt.cancelled)
              return;
            if (tt.errorMessage) {
              nt = tt.errorMessage;
              break;
            }
          }
        else {
          if (pt = await Promise.all(
            q.map((_, tt) => Tt(_, tt))
          ), pt.some((_) => _.cancelled))
            return;
          nt = pt.find((_) => _.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Ut);
        const Pt = {
          durationMs: a,
          engine: rt,
          paragraphCount: q.length,
          translatedParagraphCount: pt.filter((_) => !_.skipped && !_.errorMessage).length,
          skippedParagraphCount: pt.filter((_) => _.skipped).length,
          failedParagraphCount: pt.filter((_) => !!_.errorMessage).length
        };
        P.info("[OCR] 翻译耗时统计", Pt), _t.log("[OCR] translation timing", Pt);
        const Ot = q.map((_) => this.toDisplayParagraph(_, d)), Xt = Ot.map((_) => this.toLegacyOverlayBlock(_));
        this.translationOverlay.blocks = Xt, this.translationOverlay.paragraphBlocks = Ot, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = nt || void 0;
        const Ht = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          reflowDurationMs: s,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: j.length,
          paragraphCount: q.length,
          engine: rt
        };
        P.info("[OCR] 截图翻译总耗时统计", Ht), _t.log("[OCR] pipeline timing", Ht), this.draw(), this.onStateChange?.();
      } catch (t) {
        P.error("[OCR] OCR翻译失败:", t);
        const e = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(e), this.draw(), this.onStateChange?.();
      }
    }
  }
  async performVisionTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const { x: t, y: e, width: i, height: o } = this.selectionRect;
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await dr()).running || (P.info("[截图] AI 服务未运行，正在启动..."), await gr(), P.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, e, i, o);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((v) => setTimeout(v, 100));
        const l = (await fr({
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
        const h = Math.max(14, Math.min(20, Math.round(o / 18))), u = Math.max(18, Math.min(28, Math.round(o / 12))), d = l.split(/\n\n+/).filter((v) => v.trim()), x = Math.max(d.length, 1), w = (o - 16) / x, b = d.map((v, A) => {
          const N = A * w + 8, T = A === x - 1 ? o - N - 8 : w, U = {
            text: "",
            translatedText: v.trim(),
            x: 0,
            y: N,
            width: i,
            height: T,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: v.trim(),
            blocks: [U],
            bbox: { x: 0, y: N, width: i, height: T },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
        }), f = b.length > 0 ? b : [{
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
        this.translationOverlay.blocks = f.map((v) => v.blocks[0]), this.translationOverlay.paragraphBlocks = f, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
      } catch (t) {
        const e = t instanceof Error ? t.message : String(t);
        P.error("[截图] AI 识图翻译失败", t), this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.errorMessage = e.includes("mmproj") || e.includes("vision") ? "AI 翻译需要在“本地 AI”中配置视觉模型（mmproj）" : `AI 识图翻译失败：${e.slice(0, 80)}`, this.draw(), this.onStateChange?.();
      }
  }
  getOcrTranslationErrorMessage(t) {
    return t.includes("OCR_RECOGNITION_LOW_QUALITY") ? "OCR识别质量过低，请重新选择更清晰或方向正确的文本区域" : t.includes("RAPIDOCR_UNAVAILABLE") ? "RapidOCR 未配置，无法识别截图文字" : t ? t.slice(0, 80) : "OCR翻译失败";
  }
  getAutoTargetLanguage(t) {
    return t === "zh" ? "en" : "zh";
  }
  toDisplayParagraph(t, e) {
    return {
      ...t,
      blocks: t.blocks.map((i) => ({
        ...i,
        x: i.x / e,
        y: i.y / e,
        width: i.width / e,
        height: i.height / e,
        fontSize: i.fontSize / e,
        lineHeight: i.lineHeight / e
      })),
      bbox: {
        x: t.bbox.x / e,
        y: t.bbox.y / e,
        width: t.bbox.width / e,
        height: t.bbox.height / e
      },
      fontSize: t.fontSize ? t.fontSize / e : void 0,
      lineHeight: t.lineHeight ? t.lineHeight / e : void 0
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
      const { cancelOfflineTranslation: t } = await ge.loadOfflineTranslator();
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
    ge.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.cancelSmartDetection(), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null, this.visualElementDetector = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var ll = {
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
function cl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function hl(n, t, e) {
  var i = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], s = t.theme || e.theme;
  switch (s) {
    case "outline":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("none"), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : e.colors.twoTone.twoTone), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : e.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : e.colors.multiColor.outFillColor), o.push(typeof i[2] == "string" ? i[2] : e.colors.multiColor.innerStrokeColor), o.push(typeof i[3] == "string" ? i[3] : e.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || e.size,
    strokeWidth: t.strokeWidth || e.strokeWidth,
    strokeLinecap: t.strokeLinecap || e.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || e.strokeLinejoin,
    colors: o,
    id: n
  };
}
var ul = Symbol("icon-context");
function ct(n, t, e) {
  var i = {
    name: "icon-" + n,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = cl(), r = me(ul, ll);
      return function() {
        var l = s.size, h = s.strokeWidth, u = s.strokeLinecap, d = s.strokeLinejoin, x = s.theme, w = s.fill, b = s.spin, f = hl(a, {
          size: l,
          strokeWidth: h,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: x,
          fill: w
        }, r), v = [r.prefix + "-icon"];
        return v.push(r.prefix + "-icon-" + n), t && r.rtl && v.push(r.prefix + "-icon-rtl"), b && v.push(r.prefix + "-icon-spin"), p("span", {
          class: v.join(" ")
        }, [e(f)]);
      };
    }
  };
  return i;
}
const dl = ct("arrow-right-up", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M19 11H37V29",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), qn = ct("check", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Kn = ct("close", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 8L40 40",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M8 40L40 8",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), jn = ct("copy", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), gl = ct("delete-four", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 11L40 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M18 5L30 5",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), qi = ct("down", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36 18L24 30L12 18",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), fl = ct("download", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 24.0083V42H42V24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M33 23L24 32L15 23",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M23.9917 6V32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ml = ct("font-size", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M24 6V42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M16 42H32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), pl = ct("go-on", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), wl = ct("list-numbers", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M20 9H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M20 19H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M20 29H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M20 39H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 29H12V32L6 38V39H12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M7 11L9 9V19M9 19H7M9 19H11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ki = ct("loading", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Bo = ct("minus", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M10.5 24L38.5 24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), yl = ct("more", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), p("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), p("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null)]);
}), vl = ct("mosaic", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M44 36H36V44H44V36Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M28 36H20V44H28V36Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M12 36H4V44H12V36Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M44 20H36V28H44V20Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M28 20H20V28H28V20Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M12 20H4V28H12V20Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M44 4H36V12H44V4Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M28 4H20V12H28V4Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M12 4H4V12H12V4Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M20 12H12V20H20V12Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M20 28H12V36H20V28Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M36 12H28V20H36V12Z",
    fill: n.colors[0]
  }, null), p("path", {
    d: "M36 28H28V36H36V28Z",
    fill: n.colors[0]
  }, null)]);
}), xl = ct("move-one", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), kl = ct("picture", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ji = ct("pin", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("g", {
    "clip-path": "url(#" + n.id + "1c742167)"
  }, [p("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]), p("defs", null, [p("clipPath", {
    id: n.id + "1c742167"
  }, [p("rect", {
    width: "48",
    height: "48",
    fill: n.colors[2]
  }, null)])])]);
}), Qi = ct("platte", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Jn = ct("pushpin", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), bl = ct("rectangle-one", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Sl = ct("redo", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M42 8V17H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ml = ct("refresh", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M42 8V24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 24L6 40",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Cl = ct("return", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), _l = ct("round", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), to = ct("save", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: n.colors[3]
  }, null), p("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M9 6H34.2814",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M14 26H34",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M14 34H24.0083",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Tl = ct("square", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Fe = ct("text-recognition", !1, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M24 15V35",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M17 15H24H31",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), No = ct("translate", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M16 6L17 9",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M6 11H28",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), zl = ct("write", !0, function(n) {
  return p("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), p("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Rl = { class: "toolbar-panel first-panel" }, Ll = { class: "tool-section" }, Pl = ["onClick", "title", "aria-pressed"], Al = { class: "action-section" }, Dl = ["disabled", "title"], Il = ["disabled", "title"], Ol = ["disabled", "title"], El = ["title"], Wl = ["title"], $l = ["title"], Bl = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Nl = { class: "style-section" }, Hl = {
  key: 0,
  class: "style-group"
}, jl = { class: "style-label" }, Fl = { class: "line-width-selector" }, Vl = ["onClick", "title", "aria-pressed"], Ul = { class: "style-value" }, Yl = {
  key: 1,
  class: "style-divider"
}, Zl = {
  key: 2,
  class: "style-group opacity-group"
}, Xl = { class: "style-label" }, Gl = ["value", "title", "aria-label"], ql = { class: "style-value" }, Kl = {
  key: 3,
  class: "style-divider"
}, Jl = {
  key: 4,
  class: "style-group color-picker-group"
}, Ql = { class: "style-label" }, tc = { class: "color-row" }, ec = ["onClick", "title", "aria-pressed"], nc = { class: "custom-color-wrapper" }, ic = ["title"], oc = ["value", "title", "aria-label"], sc = {
  key: 5,
  class: "style-group"
}, ac = { class: "style-label" }, rc = { class: "text-size-selector" }, lc = ["onClick", "title", "aria-pressed"], cc = { class: "style-value" }, hc = {
  key: 6,
  class: "style-group"
}, uc = { class: "style-label" }, dc = { class: "mosaic-size-selector" }, gc = ["onClick", "title", "aria-pressed"], fc = { class: "style-value" }, mc = {
  key: 7,
  class: "style-group"
}, pc = { class: "style-label" }, wc = { class: "translate-engine-selector" }, yc = ["onClick", "title", "aria-pressed"], vc = /* @__PURE__ */ Lt({
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
  setup(n, { expose: t, emit: e }) {
    const i = B(null), { t: o } = ko(), s = n, a = e, r = O(() => [
      { type: m.Select, icon: xl, title: o("screenshot.select") },
      { type: m.Rectangle, icon: bl, title: o("screenshot.rectangle") },
      { type: m.Ellipse, icon: _l, title: o("screenshot.ellipse") },
      { type: m.Line, icon: Bo, title: o("screenshot.line") },
      { type: m.Arrow, icon: dl, title: o("screenshot.arrow") },
      { type: m.Pen, icon: zl, title: o("screenshot.pen") },
      { type: m.Mosaic, icon: vl, title: o("screenshot.mosaic") },
      { type: m.Text, icon: ml, title: o("screenshot.text") },
      { type: m.Marker, icon: wl, title: o("screenshot.marker") },
      { type: m.ColorPicker, icon: Qi, title: o("screenshot.colorPicker") },
      { type: m.Ocr, icon: Fe, title: o("screenshot.ocr") },
      { type: m.Translate, icon: No, title: o("screenshot.translate") },
      { type: m.Pin, icon: Jn, title: o("screenshot.pin") }
    ]), l = O(() => [
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
    ], d = [12, 14, 16, 18, 20, 24], x = [8, 12, 16, 20], w = O(() => ![m.Select, m.ColorPicker, m.Ocr, m.Pin].includes(s.currentTool)), b = O(
      () => [m.Rectangle, m.Ellipse, m.Line, m.Arrow, m.Pen].includes(s.currentTool)
    ), f = O(
      () => [m.Rectangle, m.Ellipse, m.Line, m.Arrow, m.Pen, m.Text, m.Marker].includes(s.currentTool)
    ), v = O(
      () => [
        m.Rectangle,
        m.Ellipse,
        m.Line,
        m.Arrow,
        m.Pen,
        m.Mosaic,
        m.Text,
        m.Marker
      ].includes(s.currentTool)
    ), A = O(
      () => s.currentTool === m.Text || s.currentTool === m.Marker
    ), N = O(() => s.currentTool === m.Mosaic), T = O(() => s.currentTool === m.Translate), U = (D) => a("tool-select", D), Y = (D) => a("color-change", D), G = (D) => a("line-width-change", D), H = (D) => {
      a("opacity-change", Number(D.target.value) / 100);
    }, j = (D) => a("text-size-change", D), Q = (D) => a("mosaic-size-change", D), q = () => a("undo"), K = () => a("redo"), et = () => a("delete"), rt = () => a("save"), wt = () => a("confirm"), nt = () => a("cancel"), X = (D) => {
      a("translate-engine-change", D);
    }, it = (D) => {
      Y(D);
    }, mt = (D) => {
      const gt = D.target;
      gt.value && Y(gt.value);
    }, yt = () => {
      const D = i.value?.getBoundingClientRect();
      return {
        width: D?.width ?? 590,
        height: D?.height ?? 50
      };
    };
    return Oe(() => s.currentTool, () => {
      pe(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: yt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: yt
    }), (D, gt) => (R(), I(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        V(" 第一个面板：工具选择 + 操作按钮 "),
        k("div", Rl, [
          V(" 工具选择区域 "),
          k("div", Ll, [
            (R(!0), I(
              Bt,
              null,
              Kt(r.value, (F) => (R(), I("button", {
                key: F.type,
                onClick: (Mt) => U(F.type),
                class: ht(["tool-btn", { active: D.currentTool === F.type }]),
                title: F.title,
                "aria-pressed": D.currentTool === F.type
              }, [
                (R(), Rt(le(F.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, Pl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          V(" 分隔线 "),
          gt[0] || (gt[0] = k(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          V(" 操作按钮区域 "),
          k("div", Al, [
            k("button", {
              onClick: q,
              disabled: !D.canUndo,
              class: "action-btn undo",
              title: C(o)("screenshot.undo")
            }, [
              p(C(Cl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Dl),
            k("button", {
              onClick: K,
              disabled: !D.canRedo,
              class: "action-btn redo",
              title: C(o)("screenshot.redo")
            }, [
              p(C(pl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Il),
            k("button", {
              onClick: et,
              disabled: !D.canDelete,
              class: "action-btn delete",
              title: C(o)("screenshot.delete")
            }, [
              p(C(gl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ol),
            k("button", {
              onClick: nt,
              class: "action-btn cancel",
              title: C(o)("screenshot.cancel")
            }, [
              p(C(Kn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, El),
            k("button", {
              onClick: rt,
              class: "action-btn save",
              title: C(o)("screenshot.save")
            }, [
              p(C(fl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Wl),
            k("button", {
              onClick: wt,
              class: "action-btn confirm",
              title: C(o)("screenshot.confirm")
            }, [
              p(C(qn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, $l)
          ])
        ]),
        V(" 第二个面板：样式设置区域 "),
        w.value ? (R(), I("div", Bl, [
          k("div", Nl, [
            V(" 线宽设置 "),
            b.value ? (R(), I("div", Hl, [
              k(
                "span",
                jl,
                Z(C(o)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              k("div", Fl, [
                (R(), I(
                  Bt,
                  null,
                  Kt(h, (F) => k("button", {
                    key: F,
                    onClick: (Mt) => G(F),
                    class: ht(["width-btn", { active: D.currentLineWidth === F }]),
                    title: `${F}px`,
                    "aria-pressed": D.currentLineWidth === F
                  }, [
                    k(
                      "span",
                      {
                        class: "line-preview",
                        style: dt({ height: `${F}px`, backgroundColor: D.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Vl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              k(
                "span",
                Ul,
                Z(D.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            b.value && f.value ? (R(), I("div", Yl)) : V("v-if", !0),
            V(" 不透明度设置 "),
            v.value ? (R(), I("div", Zl, [
              k(
                "span",
                Xl,
                Z(C(o)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              k("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(D.currentOpacity * 100),
                style: dt({
                  "--opacity-color": D.currentColor,
                  "--opacity-progress": `${Math.round(D.currentOpacity * 100)}%`
                }),
                title: `${Math.round(D.currentOpacity * 100)}%`,
                "aria-label": C(o)("screenshot.opacity"),
                onInput: H
              }, null, 44, Gl),
              k(
                "span",
                ql,
                Z(Math.round(D.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            v.value && f.value ? (R(), I("div", Kl)) : V("v-if", !0),
            V(" 颜色设置 "),
            f.value ? (R(), I("div", Jl, [
              k(
                "span",
                Ql,
                Z(C(o)("screenshot.color")),
                1
                /* TEXT */
              ),
              k("div", tc, [
                (R(), I(
                  Bt,
                  null,
                  Kt(u, (F) => k("button", {
                    key: F,
                    onClick: (Mt) => it(F),
                    class: ht(["color-btn", { active: D.currentColor === F }]),
                    style: dt({ backgroundColor: F }),
                    title: F,
                    "aria-pressed": D.currentColor === F
                  }, null, 14, ec)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                k("div", nc, [
                  k("button", {
                    class: ht(["color-btn custom-color-btn", { active: !u.includes(D.currentColor) }]),
                    title: C(o)("screenshot.customColor")
                  }, [
                    p(C(Qi), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, ic),
                  k("input", {
                    type: "color",
                    onChange: mt,
                    value: D.currentColor,
                    class: "color-input-hidden",
                    title: C(o)("screenshot.customColor"),
                    "aria-label": C(o)("screenshot.customColor")
                  }, null, 40, oc)
                ])
              ])
            ])) : V("v-if", !0),
            V(" 文字大小设置 "),
            A.value ? (R(), I("div", sc, [
              k(
                "span",
                ac,
                Z(C(o)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              k("div", rc, [
                (R(), I(
                  Bt,
                  null,
                  Kt(d, (F) => k("button", {
                    key: F,
                    onClick: (Mt) => j(F),
                    class: ht(["size-btn", { active: D.currentTextSize === F }]),
                    title: `${F}px`,
                    "aria-pressed": D.currentTextSize === F
                  }, [
                    k(
                      "span",
                      {
                        class: "size-text",
                        style: dt({ fontSize: `${Math.min(F, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, lc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              k(
                "span",
                cc,
                Z(D.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            V(" 马赛克大小设置 "),
            N.value ? (R(), I("div", hc, [
              k(
                "span",
                uc,
                Z(C(o)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              k("div", dc, [
                (R(), I(
                  Bt,
                  null,
                  Kt(x, (F) => k("button", {
                    key: F,
                    onClick: (Mt) => Q(F),
                    class: ht(["size-btn", { active: D.currentMosaicSize === F }]),
                    title: `${C(o)("screenshot.brush")} ${F * 3}px`,
                    "aria-pressed": D.currentMosaicSize === F
                  }, [
                    k(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: dt({
                          width: `${Math.min(F * 1.25, 18)}px`,
                          height: `${Math.min(F * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, gc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              k(
                "span",
                fc,
                Z(D.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            V(" 翻译引擎选择 "),
            T.value ? (R(), I("div", mc, [
              k(
                "span",
                pc,
                Z(C(o)("screenshot.engine")),
                1
                /* TEXT */
              ),
              k("div", wc, [
                (R(!0), I(
                  Bt,
                  null,
                  Kt(l.value, (F) => (R(), I("button", {
                    key: F.value,
                    onClick: (Mt) => X(F.value),
                    class: ht(["engine-btn", { active: D.currentTranslateEngine === F.value }]),
                    title: F.label,
                    "aria-pressed": D.currentTranslateEngine === F.value
                  }, Z(F.short), 11, yc))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : V("v-if", !0)
          ])
        ])) : V("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Cn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, o] of t)
    e[i] = o;
  return e;
}, xc = /* @__PURE__ */ Cn(vc, [["__scopeId", "data-v-f5f5269f"]]), kc = {
  class: "screenshot-container",
  ref: "containerRef"
}, bc = {
  key: 0,
  class: "mask-layers"
}, Sc = {
  key: 1,
  class: "mask-full"
}, Mc = { class: "size-text" }, Cc = {
  key: 4,
  class: "loading-overlay"
}, _c = /* @__PURE__ */ Lt({
  __name: "index",
  setup(n) {
    const t = B(), e = B(), i = B(null), o = B(null);
    let s = null;
    const a = B(!0), r = B(!1), l = B(""), h = B({ x: 0, y: 0 }), u = B(16), d = B(!1), x = B("bing"), w = B({ width: 590, height: 50 });
    let b = !1, f = null;
    const v = B({
      selectionRect: null,
      annotations: [],
      currentTool: m.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
      textSize: 16,
      mosaicSize: 8,
      hasSelection: !1,
      hasAnnotations: !1,
      canRedo: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), A = B(), N = B(), T = O(() => v.value.isDrawing), U = O(() => {
      if (!v.value.selectionRect) return {};
      const { y: M } = v.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${M}px`
      };
    }), Y = O(() => {
      if (!v.value.selectionRect) return {};
      const { y: M, height: W } = v.value.selectionRect;
      return {
        top: `${M + W}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), G = O(() => {
      if (!v.value.selectionRect) return {};
      const { x: M, y: W, height: lt } = v.value.selectionRect;
      return {
        top: `${W}px`,
        left: "0",
        width: `${M}px`,
        height: `${lt}px`
      };
    }), H = O(() => {
      if (!v.value.selectionRect) return {};
      const { x: M, y: W, width: lt, height: zt } = v.value.selectionRect;
      return {
        top: `${W}px`,
        left: `${M + lt}px`,
        right: "0",
        height: `${zt}px`
      };
    }), j = O(() => {
      if (!v.value.selectionRect) return {};
      const { x: M, y: W, width: lt, height: zt } = v.value.selectionRect, ot = 10, st = 12, ut = Math.min(w.value.width, Math.max(0, window.innerWidth - ot * 2)), At = Math.min(w.value.height, Math.max(0, window.innerHeight - ot * 2)), Qt = Math.max(ot, window.innerHeight - At - ot), Me = Math.max(ot, window.innerWidth - ut - ot);
      let jt;
      return W + zt + At + st <= window.innerHeight - ot ? jt = W + zt + st : W - At - st >= ot ? jt = W - At - st : jt = W + zt - At - ot, jt = Math.min(Math.max(jt, ot), Qt), {
        left: `${Math.min(Math.max(M + (lt - ut) / 2, ot), Me)}px`,
        top: `${jt}px`
      };
    }), Q = O(() => {
      if (!v.value.selectionRect) return {};
      const { x: M, y: W, width: lt, height: zt } = v.value.selectionRect, ot = 10;
      let st = M - ot, ut = W - ot, At = "translateY(-100%)";
      return st < 10 && (st = M + lt + ot, At = "translateY(-100%)"), ut < 30 && (ut = W + zt + ot, At = "translateY(0)"), {
        left: `${st}px`,
        top: `${ut}px`,
        transform: At
      };
    }), q = O(() => {
      if (!v.value.selectionRect) return "";
      const { width: M, height: W } = v.value.selectionRect;
      return `${Math.round(M)} × ${Math.round(W)}`;
    }), K = O(
      () => f?.getData().style.color || v.value.currentStyle.color
    ), et = O(() => {
      const M = f?.getData().type === m.Marker ? Zn(h.value, u.value) : ze(h.value);
      return {
        "--text-accent-color": K.value,
        left: `${M.x}px`,
        top: `${M.y}px`
      };
    }), rt = (M) => {
      if (M === m.Pin && v.value.selectionRect) {
        wt();
        return;
      }
      if (M === m.Ocr && v.value.selectionRect) {
        nt();
        return;
      }
      s?.setTool(M);
    }, wt = async () => {
      try {
        await s?.createPinWindow();
      } catch (M) {
        P.error("[截图] 创建贴图失败", M);
      }
    }, nt = async () => {
      try {
        await s?.createOcrPinWindow();
      } catch (M) {
        P.error("[截图] 创建文字识别贴图失败", M);
      }
    }, X = (M) => {
      s?.updateStyle({ color: M });
    }, it = (M) => {
      s?.updateStyle({ lineWidth: M });
    }, mt = (M) => {
      s?.updateStyle({ opacity: M });
    }, yt = (M) => {
      s?.updateTextSize(M);
    }, D = (M) => {
      s?.updateMosaicSize(M);
    }, gt = (M) => {
      x.value = M, s?.setTranslationEngine(M), s?.executeTranslation();
    }, F = () => {
      s?.undoAnnotation();
    }, Mt = () => {
      s?.redoAnnotation();
    }, Tt = () => {
      s?.deleteSelectedAnnotation();
    }, Ut = async () => {
      try {
        await s?.processScreenshot("save"), at();
      } catch (M) {
        const W = M?.message || M?.toString() || "保存失败";
        if (W.includes("保存已取消") || W.includes("cancelled"))
          return;
        P.error("保存截图时发生错误", W);
      }
    }, pt = async () => {
      try {
        await s?.processScreenshot("copy"), at();
      } catch {
      }
    }, Pt = () => {
      at();
    }, Ot = (M, W) => {
      if (W && [m.Text, m.Marker].includes(W.getData().type)) {
        const lt = W.getData();
        h.value = {
          x: lt.points[0].x,
          y: lt.points[0].y
        }, u.value = lt.fontSize || v.value.textSize;
      } else
        h.value = M, u.value = v.value.textSize;
      r.value = !0, f = W || null, W && s?.setEditingAnnotation(W), W && W.getData().text ? l.value = W.getData().text || "" : l.value = "", pe(() => {
        e.value?.focus(), f && e.value?.select();
      });
    }, Xt = () => {
      const M = f?.getData().type === m.Marker;
      l.value.trim() || M ? f ? s?.updateTextAnnotation(f, l.value.trim()) : s?.createTextAnnotation(h.value, l.value) : f && s?.deleteAnnotation(f), Ht();
    }, Ht = () => {
      r.value = !1, l.value = "", f && s?.clearEditingAnnotation(), f = null;
    }, _ = (M) => {
      navigator.clipboard && navigator.clipboard.writeText(M.hex).catch((W) => {
        P.error("[截图] 复制颜色到剪贴板失败", W);
      });
    }, tt = (M) => {
      if (M.key === "Meta" || M.key === "Win" || M.altKey && M.key === "Tab" || M.altKey && M.key === "F4") {
        M.preventDefault(), M.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === e.value) {
        if (M.key === "Escape") {
          Ht(), M.preventDefault();
          return;
        }
        if (M.key === "Enter") {
          Xt(), M.preventDefault();
          return;
        }
        if (M.key === "Tab") {
          M.preventDefault();
          return;
        }
        return;
      }
      if (!v.value.selectionRect) {
        if (M.key === "Escape") {
          at();
          return;
        }
        M.preventDefault(), M.stopPropagation();
        return;
      }
      if (s?.handleKeyDown(M)) {
        M.preventDefault();
        return;
      }
      const W = navigator.platform.toLowerCase().includes("mac");
      if ((W ? M.metaKey : M.ctrlKey) && M.key.toLowerCase() === "z") {
        M.shiftKey ? Mt() : F(), M.preventDefault();
        return;
      }
      if (!W && M.ctrlKey && M.key.toLowerCase() === "y") {
        Mt(), M.preventDefault();
        return;
      }
      if (M.key === "Escape") {
        at();
        return;
      } else if (M.key === "Delete" || M.key === "Backspace") {
        Tt(), M.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(M.key) || M.preventDefault();
    }, at = async () => {
      if (!b) {
        b = !0, s?.destroy(), s = null;
        try {
          await S("cleanup_screenshot_resources");
        } catch {
          try {
            await S("clear_screenshot_background");
          } catch (W) {
            P.error("[截图] 清理后台缓存失败", W);
          }
        }
        v.value = {
          selectionRect: null,
          annotations: [],
          currentTool: m.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", f = null, d.value = !1, a.value = !0;
        try {
          await S("close_and_destroy_screenshot_window");
        } catch (M) {
          P.error("[截图] 销毁截图窗口失败，回退到 close()", M), await o.value?.close();
        } finally {
          b = !1;
        }
      }
    }, vt = () => {
      const M = s?.getState();
      M && (v.value = M);
    }, bt = () => {
      const M = i.value?.getToolbarSize?.();
      M && (w.value = M);
    }, Ct = (M) => {
      const W = M.detail;
      W && (w.value = W);
    };
    return Je(async () => {
      if (t.value) {
        o.value = new Qe("screenshot"), s = new rl(
          t.value,
          vt,
          Ot,
          _
        ), document.addEventListener("keydown", tt), window.addEventListener("resize", bt), window.addEventListener("screenshot-toolbar-resize", Ct), N.value = await wn("screenshot-close-requested", () => {
          at();
        }), A.value = await wn("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const M = s?.getTranslationState();
          M?.isLoading || M?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const W = s?.getTranslationState();
              if (W?.isLoading || W?.isVisible)
                return;
              at();
            }
          }, 100);
        }), await pe(), bt(), await o.value.emit("screenshot_ready");
        try {
          const M = await S("get_translation_engine");
          M && ["google", "bing", "offline", "local-ai"].includes(M) && (x.value = M, s?.setTranslationEngine(M));
        } catch (M) {
          P.error("[截图] 获取翻译引擎设置失败", M);
        }
        try {
          const M = await S("get_offline_model_activated");
          s?.setOfflineModelActivated(M);
        } catch (M) {
          P.error("[截图] 获取离线模型激活状态失败", M);
        }
      }
    }), xo(() => {
      s?.destroy(), s = null, document.removeEventListener("keydown", tt), window.removeEventListener("resize", bt), window.removeEventListener("screenshot-toolbar-resize", Ct), A.value?.(), N.value?.(), A.value = void 0, N.value = void 0, o.value = null;
    }), (M, W) => (R(), I(
      "div",
      kc,
      [
        V(" 遮罩层 "),
        v.value.selectionRect ? (R(), I("div", bc, [
          k(
            "div",
            {
              class: "mask-top",
              style: dt(U.value)
            },
            null,
            4
            /* STYLE */
          ),
          k(
            "div",
            {
              class: "mask-bottom",
              style: dt(Y.value)
            },
            null,
            4
            /* STYLE */
          ),
          k(
            "div",
            {
              class: "mask-left",
              style: dt(G.value)
            },
            null,
            4
            /* STYLE */
          ),
          k(
            "div",
            {
              class: "mask-right",
              style: dt(H.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (R(), I("div", Sc)),
        V(" 画布 "),
        k(
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
        V(" 尺寸信息 "),
        v.value.selectionRect && a.value ? (R(), I(
          "div",
          {
            key: 2,
            class: "size-info",
            style: dt(Q.value)
          },
          [
            k(
              "span",
              Mc,
              Z(q.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : V("v-if", !0),
        V(" 工具栏 "),
        v.value.selectionRect && !T.value ? (R(), Rt(xc, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: dt(j.value),
          class: "toolbar",
          "current-tool": v.value.currentTool,
          "current-color": v.value.currentStyle.color,
          "current-line-width": v.value.currentStyle.lineWidth,
          "current-opacity": v.value.currentStyle.opacity,
          "current-text-size": v.value.textSize,
          "current-mosaic-size": v.value.mosaicSize,
          "can-undo": v.value.hasAnnotations,
          "can-redo": v.value.canRedo,
          "can-delete": !!v.value.selectedAnnotation,
          "current-translate-engine": x.value,
          onToolSelect: rt,
          onColorChange: X,
          onLineWidthChange: it,
          onOpacityChange: mt,
          onTextSizeChange: yt,
          onMosaicSizeChange: D,
          onTranslateEngineChange: gt,
          onUndo: F,
          onRedo: Mt,
          onDelete: Tt,
          onSave: Ut,
          onConfirm: pt,
          onCancel: Pt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : V("v-if", !0),
        V(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (R(), I("div", Cc, [
          W[1] || (W[1] = k(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          k(
            "p",
            null,
            Z(M.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : V("v-if", !0),
        V(" 文字输入框 "),
        r.value ? (R(), I(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: dt(et.value)
          },
          [
            Ze(k(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": W[0] || (W[0] = (lt) => l.value = lt),
                type: "text",
                class: "text-input",
                style: dt({
                  color: K.value,
                  fontFamily: C(ie),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  Wi(Xt, ["enter"]),
                  Wi(Ht, ["escape"])
                ],
                onBlur: Xt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [na, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : V("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Tc = /* @__PURE__ */ Cn(_c, [["__scopeId", "data-v-2c46c6fd"]]), zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tc
}, Symbol.toStringTag, { value: "Module" })), Ho = Symbol(), gn = "el", Rc = "is-", ue = (n, t, e, i, o) => {
  let s = `${n}-${t}`;
  return e && (s += `-${e}`), i && (s += `__${i}`), o && (s += `--${o}`), s;
}, jo = Symbol("namespaceContextKey"), Lc = (n) => {
  const t = n || (Pe() ? me(jo, B(gn)) : B(gn));
  return O(() => C(t) || gn);
}, hi = (n, t) => {
  const e = Lc(t);
  return {
    namespace: e,
    b: (f = "") => ue(e.value, n, f, "", ""),
    e: (f) => f ? ue(e.value, n, "", f, "") : "",
    m: (f) => f ? ue(e.value, n, "", "", f) : "",
    be: (f, v) => f && v ? ue(e.value, n, f, v, "") : "",
    em: (f, v) => f && v ? ue(e.value, n, "", f, v) : "",
    bm: (f, v) => f && v ? ue(e.value, n, f, "", v) : "",
    bem: (f, v, A) => f && v && A ? ue(e.value, n, f, v, A) : "",
    is: (f, ...v) => {
      const A = v.length >= 1 ? v[0] : !0;
      return f && A ? `${Rc}${f}` : "";
    },
    cssVar: (f) => {
      const v = {};
      for (const A in f)
        f[A] && (v[`--${e.value}-${A}`] = f[A]);
      return v;
    },
    cssVarName: (f) => `--${e.value}-${f}`,
    cssVarBlock: (f) => {
      const v = {};
      for (const A in f)
        f[A] && (v[`--${e.value}-${n}-${A}`] = f[A]);
      return v;
    },
    cssVarBlockName: (f) => `--${e.value}-${n}-${f}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Pc = Object.prototype.hasOwnProperty, eo = (n, t) => Pc.call(n, t), qe = (n) => typeof n == "function", ve = (n) => typeof n == "string", Fo = (n) => n !== null && typeof n == "object";
var Ac = typeof global == "object" && global && global.Object === Object && global, Dc = typeof self == "object" && self && self.Object === Object && self, ui = Ac || Dc || Function("return this")(), Ae = ui.Symbol, Vo = Object.prototype, Ic = Vo.hasOwnProperty, Oc = Vo.toString, He = Ae ? Ae.toStringTag : void 0;
function Ec(n) {
  var t = Ic.call(n, He), e = n[He];
  try {
    n[He] = void 0;
    var i = !0;
  } catch {
  }
  var o = Oc.call(n);
  return i && (t ? n[He] = e : delete n[He]), o;
}
var Wc = Object.prototype, $c = Wc.toString;
function Bc(n) {
  return $c.call(n);
}
var Nc = "[object Null]", Hc = "[object Undefined]", no = Ae ? Ae.toStringTag : void 0;
function Uo(n) {
  return n == null ? n === void 0 ? Hc : Nc : no && no in Object(n) ? Ec(n) : Bc(n);
}
function jc(n) {
  return n != null && typeof n == "object";
}
var Fc = "[object Symbol]";
function di(n) {
  return typeof n == "symbol" || jc(n) && Uo(n) == Fc;
}
function Vc(n, t) {
  for (var e = -1, i = n == null ? 0 : n.length, o = Array(i); ++e < i; )
    o[e] = t(n[e], e, n);
  return o;
}
var gi = Array.isArray, io = Ae ? Ae.prototype : void 0, oo = io ? io.toString : void 0;
function Yo(n) {
  if (typeof n == "string")
    return n;
  if (gi(n))
    return Vc(n, Yo) + "";
  if (di(n))
    return oo ? oo.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Zo(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
var Uc = "[object AsyncFunction]", Yc = "[object Function]", Zc = "[object GeneratorFunction]", Xc = "[object Proxy]";
function Gc(n) {
  if (!Zo(n))
    return !1;
  var t = Uo(n);
  return t == Yc || t == Zc || t == Uc || t == Xc;
}
var Fn = ui["__core-js_shared__"], so = function() {
  var n = /[^.]+$/.exec(Fn && Fn.keys && Fn.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function qc(n) {
  return !!so && so in n;
}
var Kc = Function.prototype, Jc = Kc.toString;
function Qc(n) {
  if (n != null) {
    try {
      return Jc.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var th = /[\\^$.*+?()[\]{}|]/g, eh = /^\[object .+?Constructor\]$/, nh = Function.prototype, ih = Object.prototype, oh = nh.toString, sh = ih.hasOwnProperty, ah = RegExp(
  "^" + oh.call(sh).replace(th, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rh(n) {
  if (!Zo(n) || qc(n))
    return !1;
  var t = Gc(n) ? ah : eh;
  return t.test(Qc(n));
}
function lh(n, t) {
  return n?.[t];
}
function Xo(n, t) {
  var e = lh(n, t);
  return rh(e) ? e : void 0;
}
function ch(n, t) {
  return n === t || n !== n && t !== t;
}
var hh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, uh = /^\w*$/;
function dh(n, t) {
  if (gi(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || di(n) ? !0 : uh.test(n) || !hh.test(n) || t != null && n in Object(t);
}
var Ke = Xo(Object, "create");
function gh() {
  this.__data__ = Ke ? Ke(null) : {}, this.size = 0;
}
function fh(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var mh = "__lodash_hash_undefined__", ph = Object.prototype, wh = ph.hasOwnProperty;
function yh(n) {
  var t = this.__data__;
  if (Ke) {
    var e = t[n];
    return e === mh ? void 0 : e;
  }
  return wh.call(t, n) ? t[n] : void 0;
}
var vh = Object.prototype, xh = vh.hasOwnProperty;
function kh(n) {
  var t = this.__data__;
  return Ke ? t[n] !== void 0 : xh.call(t, n);
}
var bh = "__lodash_hash_undefined__";
function Sh(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Ke && t === void 0 ? bh : t, this;
}
function xe(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
xe.prototype.clear = gh;
xe.prototype.delete = fh;
xe.prototype.get = yh;
xe.prototype.has = kh;
xe.prototype.set = Sh;
function Mh() {
  this.__data__ = [], this.size = 0;
}
function _n(n, t) {
  for (var e = n.length; e--; )
    if (ch(n[e][0], t))
      return e;
  return -1;
}
var Ch = Array.prototype, _h = Ch.splice;
function Th(n) {
  var t = this.__data__, e = _n(t, n);
  if (e < 0)
    return !1;
  var i = t.length - 1;
  return e == i ? t.pop() : _h.call(t, e, 1), --this.size, !0;
}
function zh(n) {
  var t = this.__data__, e = _n(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function Rh(n) {
  return _n(this.__data__, n) > -1;
}
function Lh(n, t) {
  var e = this.__data__, i = _n(e, n);
  return i < 0 ? (++this.size, e.push([n, t])) : e[i][1] = t, this;
}
function Ee(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
Ee.prototype.clear = Mh;
Ee.prototype.delete = Th;
Ee.prototype.get = zh;
Ee.prototype.has = Rh;
Ee.prototype.set = Lh;
var Ph = Xo(ui, "Map");
function Ah() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new (Ph || Ee)(),
    string: new xe()
  };
}
function Dh(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function Tn(n, t) {
  var e = n.__data__;
  return Dh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function Ih(n) {
  var t = Tn(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function Oh(n) {
  return Tn(this, n).get(n);
}
function Eh(n) {
  return Tn(this, n).has(n);
}
function Wh(n, t) {
  var e = Tn(this, n), i = e.size;
  return e.set(n, t), this.size += e.size == i ? 0 : 1, this;
}
function be(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
be.prototype.clear = Ah;
be.prototype.delete = Ih;
be.prototype.get = Oh;
be.prototype.has = Eh;
be.prototype.set = Wh;
var $h = "Expected a function";
function fi(n, t) {
  if (typeof n != "function" || t != null && typeof t != "function")
    throw new TypeError($h);
  var e = function() {
    var i = arguments, o = t ? t.apply(this, i) : i[0], s = e.cache;
    if (s.has(o))
      return s.get(o);
    var a = n.apply(this, i);
    return e.cache = s.set(o, a) || s, a;
  };
  return e.cache = new (fi.Cache || be)(), e;
}
fi.Cache = be;
var Bh = 500;
function Nh(n) {
  var t = fi(n, function(i) {
    return e.size === Bh && e.clear(), i;
  }), e = t.cache;
  return t;
}
var Hh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jh = /\\(\\)?/g, Fh = Nh(function(n) {
  var t = [];
  return n.charCodeAt(0) === 46 && t.push(""), n.replace(Hh, function(e, i, o, s) {
    t.push(o ? s.replace(jh, "$1") : i || e);
  }), t;
});
function Vh(n) {
  return n == null ? "" : Yo(n);
}
function Uh(n, t) {
  return gi(n) ? n : dh(n, t) ? [n] : Fh(Vh(n));
}
function Yh(n) {
  if (typeof n == "string" || di(n))
    return n;
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Zh(n, t) {
  t = Uh(t, n);
  for (var e = 0, i = t.length; n != null && e < i; )
    n = n[Yh(t[e++])];
  return e && e == i ? n : void 0;
}
function Xh(n, t, e) {
  var i = n == null ? void 0 : Zh(n, t);
  return i === void 0 ? e : i;
}
function Gh(n) {
  for (var t = -1, e = n == null ? 0 : n.length, i = {}; ++t < e; ) {
    var o = n[t];
    i[o[0]] = o[1];
  }
  return i;
}
const Go = (n) => n === void 0, ao = (n) => typeof n == "boolean", ke = (n) => typeof n == "number", Qn = (n) => typeof Element > "u" ? !1 : n instanceof Element, qh = (n) => ve(n) ? !Number.isNaN(Number(n)) : !1;
var ro;
const Se = typeof window < "u", Kh = (n) => typeof n == "string", Jh = () => {
};
Se && ((ro = window?.navigator) != null && ro.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function mi(n) {
  return typeof n == "function" ? n() : C(n);
}
function Qh(n) {
  return n;
}
function pi(n) {
  return oa() ? (sa(n), !0) : !1;
}
function tu(n, t = !0) {
  Pe() ? Je(n) : t ? n() : pe(n);
}
function qo(n, t, e = {}) {
  const {
    immediate: i = !0
  } = e, o = B(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function r() {
    o.value = !1, a();
  }
  function l(...h) {
    a(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, n(...h);
    }, mi(t));
  }
  return i && (o.value = !0, Se && l()), pi(r), {
    isPending: ia(o),
    start: l,
    stop: r
  };
}
function Ko(n) {
  var t;
  const e = mi(n);
  return (t = e?.$el) != null ? t : e;
}
const Jo = Se ? window : void 0;
function Qo(...n) {
  let t, e, i, o;
  if (Kh(n[0]) || Array.isArray(n[0]) ? ([e, i, o] = n, t = Jo) : [t, e, i, o] = n, !t)
    return Jh;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const s = [], a = () => {
    s.forEach((u) => u()), s.length = 0;
  }, r = (u, d, x, w) => (u.addEventListener(d, x, w), () => u.removeEventListener(d, x, w)), l = Oe(() => [Ko(t), mi(o)], ([u, d]) => {
    a(), u && s.push(...e.flatMap((x) => i.map((w) => r(u, x, w, d))));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), a();
  };
  return pi(h), h;
}
function eu(n, t = !1) {
  const e = B(), i = () => e.value = !!n();
  return i(), tu(i, t), e;
}
const lo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, co = "__vueuse_ssr_handlers__";
lo[co] = lo[co] || {};
var ho = Object.getOwnPropertySymbols, nu = Object.prototype.hasOwnProperty, iu = Object.prototype.propertyIsEnumerable, ou = (n, t) => {
  var e = {};
  for (var i in n)
    nu.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && ho)
    for (var i of ho(n))
      t.indexOf(i) < 0 && iu.call(n, i) && (e[i] = n[i]);
  return e;
};
function su(n, t, e = {}) {
  const i = e, { window: o = Jo } = i, s = ou(i, ["window"]);
  let a;
  const r = eu(() => o && "ResizeObserver" in o), l = () => {
    a && (a.disconnect(), a = void 0);
  }, h = Oe(() => Ko(n), (d) => {
    l(), r.value && o && d && (a = new ResizeObserver(t), a.observe(d, s));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), h();
  };
  return pi(u), {
    isSupported: r,
    stop: u
  };
}
var uo;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(uo || (uo = {}));
var au = Object.defineProperty, go = Object.getOwnPropertySymbols, ru = Object.prototype.hasOwnProperty, lu = Object.prototype.propertyIsEnumerable, fo = (n, t, e) => t in n ? au(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, cu = (n, t) => {
  for (var e in t || (t = {}))
    ru.call(t, e) && fo(n, e, t[e]);
  if (go)
    for (var e of go(t))
      lu.call(t, e) && fo(n, e, t[e]);
  return n;
};
const hu = {
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
cu({
  linear: Qh
}, hu);
const mo = {
  current: 0
}, po = B(0), ts = 2e3, wo = Symbol("elZIndexContextKey"), es = Symbol("zIndexContextKey"), uu = (n) => {
  const t = Pe() ? me(wo, mo) : mo, e = n || (Pe() ? me(es, void 0) : void 0), i = O(() => {
    const a = C(e);
    return ke(a) ? a : ts;
  }), o = O(() => i.value + po.value), s = () => (t.current++, po.value = t.current, o.value);
  return !Se && me(wo), {
    initialZIndex: i,
    currentZIndex: o,
    nextZIndex: s
  };
};
var du = {
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
const gu = (n) => (t, e) => fu(t, e, C(n)), fu = (n, t, e) => Xh(e, n, n).replace(/\{(\w+)\}/g, (i, o) => {
  var s;
  return `${(s = t?.[o]) != null ? s : `{${o}}`}`;
}), mu = (n) => {
  const t = O(() => C(n).name), e = aa(n) ? n : B(n);
  return {
    lang: t,
    locale: e,
    t: gu(n)
  };
}, ns = Symbol("localeContextKey"), pu = (n) => {
  const t = n || me(ns, B());
  return mu(O(() => t.value || du));
}, is = "__epPropKey", Vt = (n) => n, wu = (n) => Fo(n) && !!n[is], os = (n, t) => {
  if (!Fo(n) || wu(n))
    return n;
  const { values: e, required: i, default: o, type: s, validator: a } = n, l = {
    type: s,
    required: !!i,
    validator: e || a ? (h) => {
      let u = !1, d = [];
      if (e && (d = Array.from(e), eo(n, "default") && d.push(o), u || (u = d.includes(h))), a && (u || (u = a(h))), !u && d.length > 0) {
        const x = [...new Set(d)].map((w) => JSON.stringify(w)).join(", ");
        ra(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${x}], got value ${JSON.stringify(h)}.`);
      }
      return u;
    } : void 0,
    [is]: !0
  };
  return eo(n, "default") && (l.default = o), l;
}, We = (n) => Gh(Object.entries(n).map(([t, e]) => [
  t,
  os(e, t)
])), yu = ["", "default", "small", "large"], vu = os({
  type: String,
  values: yu,
  required: !1
}), xu = Symbol("size"), ku = Symbol("emptyValuesContextKey"), bu = We({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (n) => qe(n) ? !n() : !n
  }
}), yo = (n) => Object.keys(n), vn = B();
function ss(n, t = void 0) {
  return Pe() ? me(Ho, vn) : vn;
}
function as(n, t) {
  const e = ss(), i = hi(n, O(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.namespace) || gn;
  })), o = pu(O(() => {
    var r;
    return (r = e.value) == null ? void 0 : r.locale;
  })), s = uu(O(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.zIndex) || ts;
  })), a = O(() => {
    var r;
    return C(t) || ((r = e.value) == null ? void 0 : r.size) || "";
  });
  return rs(O(() => C(e) || {})), {
    ns: i,
    locale: o,
    zIndex: s,
    size: a
  };
}
const rs = (n, t, e = !1) => {
  var i;
  const o = !!Pe(), s = o ? ss() : void 0, a = (i = void 0) != null ? i : o ? la : void 0;
  if (!a)
    return;
  const r = O(() => {
    const l = C(n);
    return s?.value ? Su(s.value, l) : l;
  });
  return a(Ho, r), a(ns, O(() => r.value.locale)), a(jo, O(() => r.value.namespace)), a(es, O(() => r.value.zIndex)), a(xu, {
    size: O(() => r.value.size || "")
  }), a(ku, O(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (e || !vn.value) && (vn.value = r.value), r;
}, Su = (n, t) => {
  const e = [.../* @__PURE__ */ new Set([...yo(n), ...yo(t)])], i = {};
  for (const o of e)
    i[o] = t[o] !== void 0 ? t[o] : n[o];
  return i;
};
var zn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, o] of t)
    e[i] = o;
  return e;
};
function ti(n, t = "px") {
  if (!n)
    return "";
  if (ke(n) || qh(n))
    return `${n}${t}`;
  if (ve(n))
    return n;
}
const ls = (n, t) => (n.install = (e) => {
  for (const i of [n, ...Object.values({})])
    e.component(i.name, i);
}, n), cs = (n, t) => (n.install = (e) => {
  n._context = e._context, e.config.globalProperties[t] = n;
}, n), Mu = We({
  size: {
    type: Vt([Number, String])
  },
  color: {
    type: String
  }
}), Cu = Lt({
  name: "ElIcon",
  inheritAttrs: !1
}), _u = /* @__PURE__ */ Lt({
  ...Cu,
  props: Mu,
  setup(n) {
    const t = n, e = hi("icon"), i = O(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: Go(o) ? void 0 : ti(o),
        "--color": s
      };
    });
    return (o, s) => (R(), I("i", ca({
      class: C(e).b(),
      style: C(i)
    }, o.$attrs), [
      ye(o.$slots, "default")
    ], 16));
  }
});
var Tu = /* @__PURE__ */ zn(_u, [["__file", "icon.vue"]]);
const xn = ls(Tu);
/*! Element Plus Icons Vue v2.3.1 */
var zu = /* @__PURE__ */ Lt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(n) {
    return (t, e) => (R(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ru = zu, Lu = /* @__PURE__ */ Lt({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (R(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), hs = Lu, Pu = /* @__PURE__ */ Lt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(n) {
    return (t, e) => (R(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Au = Pu, Du = /* @__PURE__ */ Lt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(n) {
    return (t, e) => (R(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Iu = Du, Ou = /* @__PURE__ */ Lt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(n) {
    return (t, e) => (R(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      k("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Eu = Ou;
const us = Vt([
  String,
  Object,
  Function
]), Wu = {
  Close: hs
}, $u = {
  Close: hs
}, kn = {
  success: Iu,
  warning: Eu,
  error: Ru,
  info: Au
}, Bu = (n) => n, fn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Nu = We({
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
}), Hu = Lt({
  name: "ElBadge"
}), ju = /* @__PURE__ */ Lt({
  ...Hu,
  props: Nu,
  setup(n, { expose: t }) {
    const e = n, i = hi("badge"), o = O(() => e.isDot ? "" : ke(e.value) && ke(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`), s = O(() => {
      var a, r, l, h, u;
      return [
        {
          backgroundColor: e.color,
          marginRight: ti(-((r = (a = e.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: ti((h = (l = e.offset) == null ? void 0 : l[1]) != null ? h : 0)
        },
        (u = e.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: o
    }), (a, r) => (R(), I("div", {
      class: ht(C(i).b())
    }, [
      ye(a.$slots, "default"),
      p(ni, {
        name: `${C(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: It(() => [
          Ze(k("sup", {
            class: ht([
              C(i).e("content"),
              C(i).em("content", a.type),
              C(i).is("fixed", !!a.$slots.default),
              C(i).is("dot", a.isDot),
              C(i).is("hide-zero", !a.showZero && e.value === 0),
              a.badgeClass
            ]),
            style: dt(C(s))
          }, [
            ye(a.$slots, "content", { value: C(o) }, () => [
              ha(Z(C(o)), 1)
            ])
          ], 6), [
            [mn, !a.hidden && (C(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Fu = /* @__PURE__ */ zn(ju, [["__file", "badge.vue"]]);
const Vu = ls(Fu), Uu = We({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Vt(Object)
  },
  size: vu,
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
  ...bu
}), qt = {};
Lt({
  name: "ElConfigProvider",
  props: Uu,
  setup(n, { slots: t }) {
    Oe(() => n.message, (i) => {
      Object.assign(qt, i ?? {});
    }, { immediate: !0, deep: !0 });
    const e = rs(n);
    return () => ye(t, "default", { config: e?.value });
  }
});
const ds = ["success", "info", "warning", "error"], Dt = Bu({
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
  appendTo: Se ? document.body : void 0
}), Yu = We({
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
    type: us,
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
    values: ds,
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
}), Zu = {
  destroy: () => !0
}, Jt = ua([]), Xu = (n) => {
  const t = Jt.findIndex((o) => o.id === n), e = Jt[t];
  let i;
  return t > 0 && (i = Jt[t - 1]), { current: e, prev: i };
}, Gu = (n) => {
  const { prev: t } = Xu(n);
  return t ? t.vm.exposed.bottom.value : 0;
}, qu = (n, t) => Jt.findIndex((i) => i.id === n) > 0 ? 16 : t, Ku = Lt({
  name: "ElMessage"
}), Ju = /* @__PURE__ */ Lt({
  ...Ku,
  props: Yu,
  emits: Zu,
  setup(n, { expose: t }) {
    const e = n, { Close: i } = $u, { ns: o, zIndex: s } = as("message"), { currentZIndex: a, nextZIndex: r } = s, l = B(), h = B(!1), u = B(0);
    let d;
    const x = O(() => e.type ? e.type === "error" ? "danger" : e.type : "info"), w = O(() => {
      const H = e.type;
      return { [o.bm("icon", H)]: H && kn[H] };
    }), b = O(() => e.icon || kn[e.type] || ""), f = O(() => Gu(e.id)), v = O(() => qu(e.id, e.offset) + f.value), A = O(() => u.value + v.value), N = O(() => ({
      top: `${v.value}px`,
      zIndex: a.value
    }));
    function T() {
      e.duration !== 0 && ({ stop: d } = qo(() => {
        Y();
      }, e.duration));
    }
    function U() {
      d?.();
    }
    function Y() {
      h.value = !1;
    }
    function G({ code: H }) {
      H === fn.esc && Y();
    }
    return Je(() => {
      T(), r(), h.value = !0;
    }), Oe(() => e.repeatNum, () => {
      U(), T();
    }), Qo(document, "keydown", G), su(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: A,
      close: Y
    }), (H, j) => (R(), Rt(ni, {
      name: C(o).b("fade"),
      onBeforeLeave: H.onClose,
      onAfterLeave: (Q) => H.$emit("destroy"),
      persisted: ""
    }, {
      default: It(() => [
        Ze(k("div", {
          id: H.id,
          ref_key: "messageRef",
          ref: l,
          class: ht([
            C(o).b(),
            { [C(o).m(H.type)]: H.type },
            C(o).is("center", H.center),
            C(o).is("closable", H.showClose),
            C(o).is("plain", H.plain),
            H.customClass
          ]),
          style: dt(C(N)),
          role: "alert",
          onMouseenter: U,
          onMouseleave: T
        }, [
          H.repeatNum > 1 ? (R(), Rt(C(Vu), {
            key: 0,
            value: H.repeatNum,
            type: C(x),
            class: ht(C(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          C(b) ? (R(), Rt(C(xn), {
            key: 1,
            class: ht([C(o).e("icon"), C(w)])
          }, {
            default: It(() => [
              (R(), Rt(le(C(b))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          ye(H.$slots, "default", {}, () => [
            H.dangerouslyUseHTMLString ? (R(), I(Bt, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              k("p", {
                class: ht(C(o).e("content")),
                innerHTML: H.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), I("p", {
              key: 0,
              class: ht(C(o).e("content"))
            }, Z(H.message), 3))
          ]),
          H.showClose ? (R(), Rt(C(xn), {
            key: 2,
            class: ht(C(o).e("closeBtn")),
            onClick: ft(Y, ["stop"])
          }, {
            default: It(() => [
              p(C(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [mn, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Qu = /* @__PURE__ */ zn(Ju, [["__file", "message.vue"]]);
let td = 1;
const gs = (n) => {
  const t = !n || ve(n) || Xe(n) || qe(n) ? { message: n } : n, e = {
    ...Dt,
    ...t
  };
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (ve(e.appendTo)) {
    let i = document.querySelector(e.appendTo);
    Qn(i) || (i = document.body), e.appendTo = i;
  }
  return ao(qt.grouping) && !e.grouping && (e.grouping = qt.grouping), ke(qt.duration) && e.duration === 3e3 && (e.duration = qt.duration), ke(qt.offset) && e.offset === 16 && (e.offset = qt.offset), ao(qt.showClose) && !e.showClose && (e.showClose = qt.showClose), e;
}, ed = (n) => {
  const t = Jt.indexOf(n);
  if (t === -1)
    return;
  Jt.splice(t, 1);
  const { handler: e } = n;
  e.close();
}, nd = ({ appendTo: n, ...t }, e) => {
  const i = `message_${td++}`, o = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      o?.(), ed(u);
    },
    onDestroy: () => {
      pn(null, s);
    }
  }, r = p(Qu, a, qe(a.message) || Xe(a.message) ? {
    default: qe(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = e || De._context, pn(r, s), n.appendChild(s.firstElementChild);
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
}, De = (n = {}, t) => {
  if (!Se)
    return { close: () => {
    } };
  const e = gs(n);
  if (e.grouping && Jt.length) {
    const o = Jt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === e.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = e.type, o.handler;
  }
  if (ke(qt.max) && Jt.length >= qt.max)
    return { close: () => {
    } };
  const i = nd(e, t);
  return Jt.push(i), i.handler;
};
ds.forEach((n) => {
  De[n] = (t = {}, e) => {
    const i = gs(t);
    return De({ ...i, type: n }, e);
  };
});
function id(n) {
  for (const t of Jt)
    (!n || n === t.props.type) && t.handler.close();
}
De.closeAll = id;
De._context = null;
const od = cs(De, "$message"), fs = [
  "success",
  "info",
  "warning",
  "error"
], sd = We({
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
    type: us
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
    values: [...fs, ""],
    default: ""
  },
  zIndex: Number
}), ad = {
  destroy: () => !0
}, rd = Lt({
  name: "ElNotification"
}), ld = /* @__PURE__ */ Lt({
  ...rd,
  props: sd,
  emits: ad,
  setup(n, { expose: t }) {
    const e = n, { ns: i, zIndex: o } = as("notification"), { nextZIndex: s, currentZIndex: a } = o, { Close: r } = Wu, l = B(!1);
    let h;
    const u = O(() => {
      const T = e.type;
      return T && kn[e.type] ? i.m(T) : "";
    }), d = O(() => e.type && kn[e.type] || e.icon), x = O(() => e.position.endsWith("right") ? "right" : "left"), w = O(() => e.position.startsWith("top") ? "top" : "bottom"), b = O(() => {
      var T;
      return {
        [w.value]: `${e.offset}px`,
        zIndex: (T = e.zIndex) != null ? T : a.value
      };
    });
    function f() {
      e.duration > 0 && ({ stop: h } = qo(() => {
        l.value && A();
      }, e.duration));
    }
    function v() {
      h?.();
    }
    function A() {
      l.value = !1;
    }
    function N({ code: T }) {
      T === fn.delete || T === fn.backspace ? v() : T === fn.esc ? l.value && A() : f();
    }
    return Je(() => {
      f(), s(), l.value = !0;
    }), Qo(document, "keydown", N), t({
      visible: l,
      close: A
    }), (T, U) => (R(), Rt(ni, {
      name: C(i).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (Y) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: It(() => [
        Ze(k("div", {
          id: T.id,
          class: ht([C(i).b(), T.customClass, C(x)]),
          style: dt(C(b)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: f,
          onClick: T.onClick
        }, [
          C(d) ? (R(), Rt(C(xn), {
            key: 0,
            class: ht([C(i).e("icon"), C(u)])
          }, {
            default: It(() => [
              (R(), Rt(le(C(d))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          k("div", {
            class: ht(C(i).e("group"))
          }, [
            k("h2", {
              class: ht(C(i).e("title")),
              textContent: Z(T.title)
            }, null, 10, ["textContent"]),
            Ze(k("div", {
              class: ht(C(i).e("content")),
              style: dt(T.title ? void 0 : { margin: 0 })
            }, [
              ye(T.$slots, "default", {}, () => [
                T.dangerouslyUseHTMLString ? (R(), I(Bt, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  k("p", { innerHTML: T.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), I("p", { key: 0 }, Z(T.message), 1))
              ])
            ], 6), [
              [mn, T.message]
            ]),
            T.showClose ? (R(), Rt(C(xn), {
              key: 0,
              class: ht(C(i).e("closeBtn")),
              onClick: ft(A, ["stop"])
            }, {
              default: It(() => [
                p(C(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [mn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var cd = /* @__PURE__ */ zn(ld, [["__file", "notification.vue"]]);
const bn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ei = 16;
let hd = 1;
const Ie = function(n = {}, t) {
  if (!Se)
    return { close: () => {
    } };
  (ve(n) || Xe(n)) && (n = { message: n });
  const e = n.position || "top-right";
  let i = n.offset || 0;
  bn[e].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + ei;
  }), i += ei;
  const o = `notification_${hd++}`, s = n.onClose, a = {
    ...n,
    offset: i,
    id: o,
    onClose: () => {
      ud(o, e, s);
    }
  };
  let r = document.body;
  Qn(n.appendTo) ? r = n.appendTo : ve(n.appendTo) && (r = document.querySelector(n.appendTo)), Qn(r) || (r = document.body);
  const l = document.createElement("div"), h = p(cd, a, qe(a.message) ? a.message : Xe(a.message) ? () => a.message : null);
  return h.appContext = Go(t) ? Ie._context : t, h.props.onDestroy = () => {
    pn(null, l);
  }, pn(h, l), bn[e].push({ vm: h }), r.appendChild(l.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
fs.forEach((n) => {
  Ie[n] = (t = {}, e) => ((ve(t) || Xe(t)) && (t = {
    message: t
  }), Ie({ ...t, type: n }, e));
});
function ud(n, t, e) {
  const i = bn[t], o = i.findIndex(({ vm: h }) => {
    var u;
    return ((u = h.component) == null ? void 0 : u.props.id) === n;
  });
  if (o === -1)
    return;
  const { vm: s } = i[o];
  if (!s)
    return;
  e?.(s);
  const a = s.el.offsetHeight, r = t.split("-")[0];
  i.splice(o, 1);
  const l = i.length;
  if (!(l < 1))
    for (let h = o; h < l; h++) {
      const { el: u, component: d } = i[h].vm, x = Number.parseInt(u.style[r], 10) - a - ei;
      d.props.offset = x;
    }
}
function dd() {
  for (const n of Object.values(bn))
    n.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ie.closeAll = dd;
Ie._context = null;
const gd = cs(Ie, "$notify"), $t = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(n, t = "success", e = "center", i) {
    this.message({
      message: n,
      type: t,
      position: e,
      duration: i
    });
  },
  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(n) {
    const {
      message: t,
      type: e = "success",
      position: i = "center",
      duration: o = 3e3,
      showClose: s = !1
    } = n;
    i === "center" ? od({
      message: t,
      type: e,
      duration: o,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${e}`
    }) : gd({
      message: t,
      type: e,
      position: i,
      duration: o,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: `app-toast app-toast--corner app-toast--${e}`
      // 自定义样式类
    });
  },
  /**
   * 显示成功消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  success(n, t = "center", e) {
    this.msg(n, "success", t, e);
  },
  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(n, t = "center", e) {
    this.msg(n, "warning", t, e);
  },
  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(n, t = "center", e) {
    this.msg(n, "info", t, e);
  },
  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(n, t = "center", e) {
    this.msg(n, "error", t, e);
  }
}, fd = ["disabled"], md = {
  key: 0,
  class: "custom-button__loading"
}, pd = /* @__PURE__ */ Lt({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (n) => ["default", "primary", "success", "danger", "warning", "text"].includes(n)
    },
    size: {
      type: String,
      default: "",
      validator: (n) => ["", "small", "large"].includes(n)
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
  setup(n) {
    const t = n;
    return (e, i) => (R(), I("button", {
      class: ht([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: n.loading || n.disabled,
      onClick: i[0] || (i[0] = (o) => e.$emit("click", o))
    }, [
      n.loading ? (R(), I("div", md, i[1] || (i[1] = [
        k(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            k("circle", {
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
      ]))) : V("v-if", !0),
      ye(e.$slots, "default", {}, void 0, !0)
    ], 10, fd));
  }
}), ne = /* @__PURE__ */ Cn(pd, [["__scopeId", "data-v-9497085f"]]);
function wd(n) {
  return xd(n.anchor, n.focus) <= 0 ? { start: n.anchor, end: n.focus } : { start: n.focus, end: n.anchor };
}
function ms(n, t) {
  if (!t || n.length === 0)
    return [];
  const { start: e, end: i } = wd(t);
  if (e.blockIndex < 0 || i.blockIndex >= n.length)
    return [];
  const o = [];
  for (let s = e.blockIndex; s <= i.blockIndex; s += 1) {
    const a = n[s].text.length, r = s === e.blockIndex ? vo(e.offset, a) : 0, l = s === i.blockIndex ? vo(i.offset, a) : a;
    l > r && o.push({ blockIndex: s, start: r, end: l });
  }
  return o;
}
function yd(n, t) {
  const e = ms(n, t);
  return e.map((i, o) => {
    const s = n[i.blockIndex], a = s.text.slice(i.start, i.end), r = i.end === s.text.length, l = o < e.length - 1;
    return a + (r && l ? s.separator : "");
  }).join("");
}
function vd(n, t) {
  let e = 0, i = Number.POSITIVE_INFINITY;
  for (let o = 0; o < n.length; o += 1) {
    const s = Math.abs(n[o] - t);
    s < i && (e = o, i = s);
  }
  return e;
}
function xd(n, t) {
  return n.blockIndex - t.blockIndex || n.offset - t.offset;
}
function vo(n, t) {
  return Number.isFinite(n) ? Math.max(0, Math.min(t, Math.round(n))) : 0;
}
const kd = ["src", "alt"], bd = { class: "ocr-header" }, Sd = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, Md = { "data-tauri-drag-region": "" }, Cd = { class: "ocr-window-controls" }, _d = ["title"], Td = ["title"], zd = ["title"], Rd = ["title"], Ld = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, Pd = ["src", "alt"], Ad = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, Dd = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Id = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, Od = { "data-tauri-drag-region": "" }, Ed = { "data-tauri-drag-region": "" }, Wd = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, $d = ["title"], Bd = {
  key: 0,
  class: "ocr-original-image"
}, Nd = ["src", "alt"], Hd = {
  key: 0,
  class: "ocr-state"
}, jd = {
  key: 1,
  class: "ocr-state error"
}, Fd = {
  key: 2,
  class: "ocr-state muted"
}, Vd = { class: "ocr-preview-pane" }, Ud = { class: "ocr-preview-stage" }, Yd = ["src", "alt"], Zd = {
  key: 0,
  class: "ocr-selection-highlight-layer",
  "aria-hidden": "true"
}, Xd = ["data-selection-index", "textContent"], Gd = {
  key: 0,
  class: "ocr-selection-translation"
}, qd = { class: "ocr-translation-section" }, Kd = { class: "ocr-translation-label" }, Jd = { class: "ocr-translation-source" }, Qd = { class: "ocr-translation-section result" }, tg = { class: "ocr-translation-label" }, eg = ["textContent"], ng = { class: "ocr-record-main-row" }, ig = ["onClick"], og = ["checked", "onChange"], sg = { class: "ocr-record-index" }, ag = ["textContent", "onBlur"], rg = {
  key: 0,
  class: "ocr-record-score"
}, lg = {
  key: 0,
  class: "ocr-record-translation"
}, cg = { class: "ocr-translation-label" }, hg = ["textContent", "onBlur"], ug = { class: "ocr-action-bar" }, dg = ["onClick"], gg = { class: "engine-label" }, fg = ["onClick"], mg = { class: "engine-label" }, pg = { class: "ocr-engine-btn-group relative" }, wg = {
  key: 2,
  class: "zoom-info"
}, Vn = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', yg = /* @__PURE__ */ Lt({
  __name: "index",
  setup(n) {
    const { t } = ko(), e = B(), i = B(), o = B(null), s = B(""), a = B(""), r = B("pin"), l = B(""), h = B([]), u = B(!1), d = B(""), x = B(""), w = B(0), b = B(0), f = B({ width: 0, height: 0 }), v = B({ width: 0, height: 0 }), A = B(!1), N = B(!1), T = B(null), U = B(null), Y = B(!1);
    let G = null;
    const H = B(!1), j = B(!1), Q = B(), q = B({}), K = B("bing"), et = B(!1), rt = B(), wt = B({}), nt = B("auto"), X = O(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: t("translate.offlineMark")
      }
    ]), it = O(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), mt = (c) => {
      const g = typeof c == "string" ? c.trim().toLowerCase() : "";
      return g === "auto" || g === "zh" || g === "zh-tw" || g === "en" || g === "ja" || g === "ko" ? g : "auto";
    }, yt = O(() => it.value.find((c) => c.value === nt.value)?.label || t("pin.ocrLanguageAuto")), D = O(() => t("pin.showRecords")), gt = O(() => t("pin.hideRecords")), F = O(() => t("pin.translationResult")), Mt = (c, g) => {
      if (!c) {
        g.value = {};
        return;
      }
      const y = c.getBoundingClientRect(), $ = 180, E = 8, J = Math.min(
        Math.max(y.left + y.width / 2, E + $ / 2),
        window.innerWidth - E - $ / 2
      );
      g.value = {
        left: `${J}px`,
        bottom: `${Math.max(8, window.innerHeight - y.top + 8)}px`
      };
    }, Tt = () => {
      j.value && Mt(Q.value, q), et.value && Mt(rt.value, wt);
    }, Ut = O(() => nt.value), pt = B(1), Pt = B(!1), Ot = B(!1);
    let Xt = null, Ht = null;
    const _ = B(!1), tt = B({ x: 0, y: 0 }), at = B(!0), vt = B({ width: 0, height: 0 });
    let bt = null, Ct = 0;
    const M = B(""), W = O(() => ({
      width: "100%",
      height: r.value === "ocr" ? "auto" : "100%",
      flex: r.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: r.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), lt = O(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), zt = O(() => w.value > 0 && b.value > 0 ? `${w.value} × ${b.value}` : t("pin.screenshotPreview")), ot = O(() => u.value ? t("pin.recognizing") : d.value ? t("pin.recognizeFailed") : l.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), st = O(
      () => h.value.filter((c) => c.selected)
    ), ut = O(
      () => h.value.flatMap(
        (c) => c.blocks.filter(wi).map((g, y) => ({
          ...g,
          id: `${c.id}-block-${y}`,
          recordId: c.id,
          separator: ps(g, c.blocks[y + 1])
        }))
      )
    ), At = O(
      () => ms(ut.value, U.value)
    ), Qt = O(
      () => yd(ut.value, U.value)
    ), Me = O(
      () => At.value.map((c) => {
        const g = ut.value[c.blockIndex], y = Ln(g), $ = y.boundaries[c.start] || 0, E = y.boundaries[c.end] || y.renderedWidth, J = $ / y.renderedWidth, xt = E / y.renderedWidth;
        return {
          id: `${g.id}-${c.start}-${c.end}`,
          left: g.x + g.width * J,
          top: g.y,
          width: g.width * Math.max(0, xt - J),
          height: g.height
        };
      })
    ), jt = O(() => st.value.length), tn = (c) => (c.translatedText || c.text).trim(), Rn = (c) => c.map(tn).filter(Boolean).join(`

`), $e = () => {
      l.value = Rn(h.value);
    }, wi = (c) => w.value > 0 && b.value > 0 && c.width > 0 && c.height > 0, ps = (c, g) => {
      if (!g)
        return `

`;
      const y = c.text.trim().slice(-1), $ = g.text.trim().slice(0, 1), E = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
      return E.test(y) || E.test($) ? "" : " ";
    }, ws = (c) => {
      if (!wi(c))
        return {};
      const g = se(c.x / w.value * 100), y = se(c.y / b.value * 100), $ = se(c.width / w.value * 100, 1), E = se(c.height / b.value * 100, 1), J = Ln(c);
      return {
        left: `${g}%`,
        top: `${y}%`,
        width: `${$}%`,
        height: `${E}%`,
        fontSize: `${J.fontSize}px`,
        lineHeight: `${J.lineHeight}px`,
        letterSpacing: `${J.letterSpacing}px`
      };
    }, ys = (c) => w.value <= 0 || b.value <= 0 ? {} : {
      left: `${se(c.left / w.value * 100)}%`,
      top: `${se(c.top / b.value * 100)}%`,
      width: `${se(c.width / w.value * 100)}%`,
      height: `${se(c.height / b.value * 100)}%`
    }, Ce = /* @__PURE__ */ new Map();
    let yi = null;
    const Ln = (c) => {
      const g = xs(), y = c.text.trim(), $ = `${c.id}:${y}:${g.toFixed(4)}`, E = Ce.get($);
      if (E)
        return E;
      const J = Math.max(c.width * g, 1), xt = Math.max(c.height * g, 1);
      let kt = vi(
        Math.min((c.fontSize || c.height * 0.8) * g, xt * 0.86),
        5,
        28
      );
      const Et = vs();
      Et.font = `${kt}px ${Vn}`;
      let Wt = Math.max(Et.measureText(y).width, 1);
      Wt > J && (kt = Math.max(5, kt * (J / Wt)), Et.font = `${kt}px ${Vn}`, Wt = Math.max(Et.measureText(y).width, 1));
      const Yt = y.length > 0 ? Math.max(0, (J - Wt) / y.length) : 0, Oi = Array.from({ length: y.length + 1 }, (Tg, Bn) => Bn === 0 ? 0 : (Et.font = `${kt}px ${Vn}`, Et.measureText(y.slice(0, Bn)).width + Yt * Bn)), Qs = Math.max(Oi[y.length] || Wt, 1), Ei = {
        fontSize: kt,
        lineHeight: xt,
        letterSpacing: Yt,
        boundaries: Oi,
        renderedWidth: Qs
      };
      return Ce.set($, Ei), Ei;
    }, vs = () => {
      yi || (yi = document.createElement("canvas"));
      const c = yi.getContext("2d");
      if (!c)
        throw new Error(t("pin.ocrMeasureFailed"));
      return c;
    }, xs = () => w.value <= 0 || b.value <= 0 || f.value.width <= 0 || f.value.height <= 0 ? 1 : Math.min(
      f.value.width / w.value,
      f.value.height / b.value
    ), Pn = () => {
      const c = i.value;
      if (Ce.clear(), !c) {
        f.value = { width: 0, height: 0 };
        return;
      }
      f.value = {
        width: c.clientWidth,
        height: c.clientHeight
      };
    }, se = (c, g = 0) => Number.isFinite(c) ? Math.min(100, Math.max(g, c)) : g, vi = (c, g, y) => Number.isFinite(c) ? Math.min(y, Math.max(g, c)) : g, ks = () => {
      const c = /* @__PURE__ */ new Date(), g = (y) => y.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${c.getFullYear()}-${g(c.getMonth() + 1)}-${g(c.getDate())} ${g(c.getHours())}.${g(c.getMinutes())}.${g(c.getSeconds())}.png`;
    }, bs = O(() => {
      const c = Math.min(
        vt.value.width,
        vt.value.height
      );
      let g = 1;
      return c < 300 && (g = Math.max(0.4, c / 300)), {
        left: `${tt.value.x}px`,
        top: `${tt.value.y}px`,
        transform: `scale(${g})`,
        transformOrigin: "top left"
      };
    }), Ss = (c) => {
      s.value = c, w.value = 0, b.value = 0, f.value = { width: 0, height: 0 }, nn(), Ce.clear(), v.value = { width: 0, height: 0 }, r.value === "ocr" && (x.value = ks(), N.value = !1), a.value && (URL.revokeObjectURL(a.value), a.value = "");
      try {
        const g = c.split(",")[1] || c, y = c.match(/data:([^;]+);/), $ = y ? y[1] : "image/png", E = atob(g), J = new Uint8Array(E.length);
        for (let kt = 0; kt < E.length; kt++)
          J[kt] = E.charCodeAt(kt);
        const xt = new Blob([J], { type: $ });
        a.value = URL.createObjectURL(xt);
      } catch (g) {
        P.error("[PIN窗口] 转换 Blob URL 失败", g), a.value = c;
      }
    }, xi = async () => {
      await pe(), await new Promise((c) => requestAnimationFrame(() => c()));
      try {
        await o.value?.emit("pin-window-ready");
      } catch (c) {
        P.error("[PIN窗口] 发送 ready 事件失败", c);
      }
    }, ki = (c) => {
      if (!c?.imageData)
        return P.error("[PIN窗口] 收到的事件数据格式不正确", c), !1;
      const g = c.mode === "ocr" ? "ocr" : "pin", y = `${g}:${c.imageData.length}`;
      return y === M.value ? !1 : (M.value = y, r.value = g, Ss(c.imageData), Gt(), r.value === "ocr" ? (Dn(c.text || ""), d.value = "", c.text || An()) : (Ct++, u.value = !1, d.value = "", l.value = "", h.value = []), !0);
    }, An = async () => {
      if (!s.value) return;
      const c = ++Ct;
      nn(), T.value = null, Ce.clear(), u.value = !0, d.value = "";
      const g = Date.now();
      _t.log("[Pin OCR] recognize start", {
        requestId: c,
        imageDataLength: s.value.length,
        imageWidth: w.value,
        imageHeight: b.value,
        language: nt.value,
        backendLanguage: Ut.value
      });
      try {
        _t.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: c,
          language: nt.value,
          backendLanguage: Ut.value
        });
        const y = await S("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: Ut.value
        }), $ = Cs(y), E = $.length > 0 ? Rn($) : Rs(y);
        if (_t.log("[Pin OCR] backend OCR success", {
          requestId: c,
          resultEngine: y?.engine,
          resultLanguage: y?.language,
          confidence: y?.confidence,
          blocks: Array.isArray(y?.blocks) ? y.blocks.length : 0,
          textLength: E.trim().length
        }), c !== Ct) return;
        $.length > 0 ? (h.value = $, $e()) : Dn(E.trim()), Ce.clear(), _t.log("[Pin OCR] recognize success", {
          requestId: c,
          durationMs: Date.now() - g,
          textLength: l.value.length,
          textPreview: l.value.slice(0, 300)
        });
      } catch (y) {
        if (c !== Ct) return;
        P.error("[PIN窗口] OCR 识别失败", y), _t.log("[Pin OCR] recognize failed", {
          requestId: c,
          durationMs: Date.now() - g,
          error: Ls(y)
        }), d.value = t("pin.recognizeFailed"), l.value = "", h.value = [], $t.error(t("pin.recognizeFailed"));
      } finally {
        c === Ct && (u.value = !1);
      }
    }, Dn = (c) => {
      const g = c.trim();
      l.value = g, h.value = g ? g.split(/\n{2,}|\n/).map((y, $) => Ms(y, $)).filter((y) => y.text.trim()) : [];
    }, Ms = (c, g) => ({
      id: `plain-${Date.now()}-${g}`,
      text: c.trim(),
      sourceText: c.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), Cs = (c) => {
      const g = Ts(c?.blocks);
      return g.length === 0 ? [] : Ao(g).map(($, E) => _s($, E)).filter(($) => $.text.trim());
    }, _s = (c, g) => {
      const y = c.text.trim(), $ = c.blocks;
      return {
        id: `ocr-${Date.now()}-${g}`,
        text: y,
        sourceText: y,
        translatedText: c.translatedText?.trim() || "",
        bbox: { ...c.bbox },
        blocks: $,
        confidence: zs($),
        selected: !1
      };
    }, Ts = (c) => Array.isArray(c) ? c.map((g) => {
      if (!g || typeof g != "object")
        return null;
      const y = g, $ = typeof y.text == "string" ? y.text.trim() : "";
      if (!$)
        return null;
      const E = {
        text: $,
        x: Number(y.x || 0),
        y: Number(y.y || 0),
        width: Number(y.width || 0),
        height: Number(y.height || 0),
        fontSize: Number(y.fontSize || 0),
        lineHeight: Number(y.lineHeight || 0),
        angle: Number(y.angle || 0),
        isCodeBlock: !!y.isCodeBlock,
        confidence: Number(y.confidence || 0)
      };
      return typeof y.translatedText == "string" && (E.translatedText = y.translatedText), E;
    }).filter((g) => g !== null) : [], zs = (c) => {
      const g = c.map((y) => Number(y.confidence || 0)).filter((y) => Number.isFinite(y) && y > 0);
      return g.length === 0 ? 0 : g.reduce((y, $) => y + $, 0) / g.length;
    }, Rs = (c) => typeof c == "string" ? c : c?.text ? c.text : c?.full_text ? c.full_text : Array.isArray(c?.blocks) ? c.blocks.map((g) => g?.text).filter(Boolean).join(`
`) : "", Ls = (c) => c instanceof Error ? `${c.name}: ${c.message}
${c.stack || ""}`.trim() : typeof c == "string" ? c : JSON.stringify(c) || String(c), In = async () => {
      const c = As();
      if (c)
        try {
          await navigator.clipboard.writeText(c), $t.success(t("pin.copySuccess"));
        } catch (g) {
          P.error("[PIN窗口] 复制识别文本失败", g), $t.error(t("pin.copyFailed"));
        } finally {
          Gt();
        }
    }, Ps = async () => {
      $e();
      const c = l.value.trim();
      if (c)
        try {
          await S("save_text_to_file", { text: c }), $t.success(t("pin.saveSuccess"));
        } catch (g) {
          g !== "SAVE_CANCELLED" && (P.error("[PIN窗口] 保存文本失败", g), $t.error(t("pin.saveFailed")));
        }
    }, As = () => {
      const c = Ds();
      if (c)
        return c;
      if (Qt.value)
        return Qt.value;
      const g = Rn(st.value);
      return g || ($e(), l.value.trim());
    }, Ds = () => {
      const c = window.getSelection(), g = e.value?.querySelector(".ocr-reading-surface");
      if (!c || c.rangeCount === 0 || !g)
        return "";
      for (let y = 0; y < c.rangeCount; y += 1) {
        const E = c.getRangeAt(y).commonAncestorContainer;
        if (g.contains(E))
          return c.toString().trim();
      }
      return "";
    }, bi = (c) => {
      const g = h.value.find((y) => y.id === c);
      g && (g.selected = !g.selected);
    }, Si = (c, g, y) => {
      const $ = h.value.find((J) => J.id === c), E = y.target;
      !$ || !E || ($[g] = E.innerText.trim(), g === "text" && !$.sourceText.trim() && ($.sourceText = $.text), $e());
    }, Is = (c) => {
      const g = c.target;
      !g || !T.value || (T.value.translatedText = g.innerText.trim());
    }, Os = async () => {
      j.value = !j.value, et.value = !1, j.value && (await pe(), Tt());
    }, Es = (c) => {
      K.value = c, j.value = !1, S("set_translation_engine", { engine: c }).catch((g) => {
        P.error("[PIN窗口] 保存翻译引擎设置失败", g);
      });
    }, Mi = async () => {
      et.value = !et.value, j.value = !1, et.value && (await pe(), Tt());
    }, Ws = (c) => {
      nt.value = c, et.value = !1, S("set_ocr_language", { language: c }).catch((g) => {
        P.error("[PIN窗口] 保存 OCR 语言设置失败", g);
      }), s.value && An();
    }, $s = async () => {
      if (Gt(), j.value = !1, et.value = !1, !l.value.trim() || H.value) return;
      const c = Qt.value.trim(), g = c ? [] : st.value.length > 0 ? st.value : h.value, y = c || (g.length > 0 ? g.map((E) => E.text).join(`

`) : l.value), $ = de(y);
      if (!Le($)) {
        $t.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      H.value = !0;
      try {
        if (await Bs(), c) {
          const E = await On(c, $);
          E && (T.value = {
            sourceText: c,
            translatedText: E.trim()
          }, N.value = !0), $t.success(t("pin.translateSuccess"));
        } else if (g.length > 0) {
          for (const E of g) {
            const J = await On(E.text, $);
            J && (E.translatedText = J.trim());
          }
          $e(), N.value = !0, $t.success(t("pin.translateSuccess"));
        } else {
          const E = await On(l.value, $);
          E && Dn(E), $t.success(t("pin.translateSuccess"));
        }
      } catch (E) {
        P.error("[PIN窗口] 翻译失败", E);
        const J = E instanceof Error ? E.message : String(E);
        if (J !== "翻译已取消") {
          const xt = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          $t.error(
            xt.includes(J) ? J : t("pin.translateFailed")
          );
        }
      } finally {
        H.value = !1;
      }
    }, Bs = async () => {
      if (K.value !== "offline")
        return;
      if ((await si()).isCached)
        await Lo();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await S("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, On = async (c, g) => {
      const y = c.trim();
      return y ? K.value === "offline" ? Ro(y) : await S("translate_text", {
        text: y,
        from: "auto",
        to: g === "zh" ? "en" : "zh",
        engine: K.value
      }) : "";
    }, Ns = () => {
      A.value = !A.value;
    }, Hs = () => {
      N.value = !N.value;
    }, js = (c) => {
      en(c);
    }, Fs = async () => {
      if (!o.value) return;
      const c = o.value;
      typeof c.minimize == "function" && await c.minimize();
    }, Vs = async () => {
      if (!o.value) return;
      const c = o.value;
      (typeof c.isMaximized == "function" ? await c.isMaximized() : !1) && typeof c.unmaximize == "function" ? await c.unmaximize() : typeof c.maximize == "function" && await c.maximize();
    }, Ci = async (c) => {
      const g = c.target;
      if (w.value = g.naturalWidth, b.value = g.naturalHeight, o.value && v.value.width === 0)
        try {
          const y = await o.value.innerSize(), $ = await o.value.scaleFactor(), E = y.toLogical($);
          v.value = {
            width: E.width,
            height: E.height
          };
        } catch (y) {
          P.error("[PIN窗口] 获取窗口初始尺寸失败", y);
        }
    }, _i = async (c) => {
      if (c.ctrlKey && (c.preventDefault(), c.stopPropagation(), !Ot.value && o.value)) {
        Ot.value = !0;
        try {
          const y = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), $ = c.deltaY > 0 ? 0.95 : 1.05, E = y.width, J = y.height, xt = Math.round(E * $), kt = Math.round(J * $), Et = 50, Wt = 3e3;
          if (xt >= Et && xt <= Wt && kt >= Et && kt <= Wt) {
            if (await o.value.setSize(new Ve(xt, kt)), w.value > 0) {
              const Yt = Math.round(
                xt / w.value * 100
              );
              pt.value = Yt / 100;
            }
            Pt.value = !0, En();
          }
        } catch (g) {
          P.error("[PIN窗口] 窗口缩放失败", g);
        } finally {
          setTimeout(() => {
            Ot.value = !1;
          }, 100);
        }
      }
    }, Us = (c) => {
      r.value === "ocr" && c.ctrlKey && _i(c);
    }, En = () => {
      Pt.value = !0, Xt && clearTimeout(Xt), Xt = setTimeout(() => {
        Pt.value = !1;
      }, 1e3);
    }, en = (c) => {
      c.preventDefault(), c.stopPropagation(), _.value = !1, setTimeout(() => {
        const g = window.innerWidth, y = window.innerHeight;
        vt.value = { width: g, height: y };
        const $ = Math.min(g, y);
        let E = 1;
        $ < 300 && (E = Math.max(0.4, $ / 300));
        const J = r.value === "ocr" ? 176 : 150, xt = r.value === "ocr" && l.value.trim() ? 222 : 180, kt = J * E, Et = xt * E;
        let Wt = c.clientX, Yt = c.clientY;
        Wt + kt > g && (Wt = g - kt - 5), Yt + Et > y && (Yt = y - Et - 5), Wt = Math.max(5, Wt), Yt = Math.max(5, Yt), tt.value = { x: Wt, y: Yt }, _.value = !0;
      }, 10);
    }, Gt = () => {
      _.value = !1, j.value = !1, et.value = !1;
    }, Ti = async () => {
      o.value && (at.value = !at.value, await o.value.setAlwaysOnTop(at.value), Gt());
    }, zi = async (c) => {
      if (o.value && !Ot.value) {
        Ot.value = !0;
        try {
          const y = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), $ = Math.round(y.width * c), E = Math.round(y.height * c), J = 50, xt = 3e3;
          $ >= J && $ <= xt && E >= J && E <= xt && (await o.value.setSize(new Ve($, E)), w.value > 0 && (pt.value = $ / w.value), En());
        } catch (g) {
          P.error("[PIN窗口] 键盘缩放失败", g);
        } finally {
          setTimeout(() => {
            Ot.value = !1;
          }, 100);
        }
      }
    }, Ri = async () => {
      if (o.value && v.value.width > 0 && v.value.height > 0)
        try {
          await o.value.setSize(
            new Ve(
              v.value.width,
              v.value.height
            )
          ), pt.value = 1, En();
        } catch (c) {
          P.error("[PIN窗口] 重置缩放失败", c);
        }
      Gt();
    }, Ys = async () => {
      try {
        const c = s.value;
        Gt(), o.value && await o.value.hide(), await S("copy_image_to_clipboard", { imageData: c }), $t.success(t("pin.copySuccess")), o.value && await o.value.close();
      } catch (c) {
        P.error("[PIN窗口] 复制图片失败", c), $t.error(t("pin.copyFailed")), o.value && await o.value.close();
      }
    }, Zs = async () => {
      const c = s.value;
      Gt(), o.value && await o.value.hide();
      try {
        await S("save_pin_image", { imageData: c }), $t.success(t("pin.saveSuccess")), o.value && await o.value.close();
      } catch (g) {
        g === "SAVE_CANCELLED" ? (P.info("[PIN窗口] 用户取消保存，恢复窗口显示"), o.value && await o.value.show()) : (P.error("[PIN窗口] 保存图片失败", g), $t.error(t("pin.saveFailed")), o.value && await o.value.close());
      }
    }, Wn = async () => {
      o.value && await o.value.close();
    }, Li = (c) => {
      c.preventDefault();
    }, $n = async (c) => {
      if (c.button === 0 && o.value) {
        const g = c.target;
        if (g.hasAttribute("data-tauri-drag-region") || g.closest("[data-tauri-drag-region]")) {
          if (g.closest("button") || g.closest(".ocr-view-original"))
            return;
          try {
            await o.value.startDragging();
          } catch (y) {
            P.error("[PIN窗口] 拖拽窗口失败", y);
          }
        }
      }
    }, Pi = (c) => {
      const g = c.target;
      !g.closest(".context-menu") && !g.closest(".ocr-engine-btn-group") && !g.closest(".translate-btn-group") && !g.closest(".ocr-floating-menu") && Gt();
    }, Xs = (c) => {
      if (c.button !== 0)
        return;
      const g = c.currentTarget, y = Di(g, c.clientX, c.clientY);
      if (window.getSelection()?.removeAllRanges(), !y) {
        nn();
        return;
      }
      c.preventDefault(), g.setPointerCapture(c.pointerId), G = c.pointerId, Y.value = !0, U.value = {
        anchor: y,
        focus: y
      };
    }, Ai = (c) => {
      if (!Y.value || c.pointerId !== G)
        return;
      const g = c.currentTarget, y = Di(g, c.clientX, c.clientY);
      !y || !U.value || (c.preventDefault(), U.value = {
        anchor: U.value.anchor,
        focus: y
      });
    }, Gs = (c) => {
      if (c.pointerId !== G)
        return;
      Ai(c);
      const g = c.currentTarget;
      g.hasPointerCapture(c.pointerId) && g.releasePointerCapture(c.pointerId), Y.value = !1, G = null;
    }, qs = (c) => {
      c.pointerId === G && (Y.value = !1, G = null);
    }, nn = () => {
      U.value = null, Y.value = !1, G = null;
    }, Ks = () => {
      const c = ut.value.length - 1;
      c < 0 || (window.getSelection()?.removeAllRanges(), U.value = {
        anchor: { blockIndex: 0, offset: 0 },
        focus: {
          blockIndex: c,
          offset: ut.value[c].text.length
        }
      });
    }, Di = (c, g, y) => {
      const $ = c.querySelectorAll(
        ".ocr-overlay-block[data-selection-index]"
      );
      for (const E of $) {
        const J = E.getBoundingClientRect();
        if (g < J.left || g > J.right || y < J.top || y > J.bottom)
          continue;
        const xt = Number(E.dataset.selectionIndex), kt = ut.value[xt];
        if (!kt)
          return null;
        const Et = Ln(kt), Yt = vi((g - J.left) / Math.max(J.width, 1), 0, 1) * Et.renderedWidth;
        return {
          blockIndex: xt,
          offset: vd(Et.boundaries, Yt)
        };
      }
      return null;
    }, Ii = (c) => {
      if (c.altKey && c.code === "Space") {
        c.preventDefault(), c.stopPropagation();
        return;
      }
      if (c.key === "Escape")
        _.value ? Gt() : Wn();
      else if (c.ctrlKey || c.metaKey) {
        const y = !!c.target?.closest('input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]');
        c.key.toLowerCase() === "c" && r.value === "ocr" && Qt.value && !y ? (c.preventDefault(), In()) : c.key.toLowerCase() === "a" && r.value === "ocr" && ut.value.length > 0 && !y ? (c.preventDefault(), Ks()) : c.key === "0" ? (c.preventDefault(), Ri()) : c.key === "=" || c.key === "+" ? (c.preventDefault(), zi(1.05)) : c.key === "-" && (c.preventDefault(), zi(0.95));
      }
    }, Js = async () => {
      if (o.value)
        try {
          const c = await S(
            "get_pin_window_data",
            { label: o.value.label }
          );
          c && ki(c) && await xi();
        } catch (c) {
          P.error("[PIN窗口] 主动获取窗口数据失败", c);
        }
    };
    return Oe(
      i,
      (c) => {
        if (Ht?.disconnect(), Ht = null, !c) {
          f.value = { width: 0, height: 0 };
          return;
        }
        Pn(), Ht = new ResizeObserver(Pn), Ht.observe(c);
      },
      { flush: "post" }
    ), Je(async () => {
      if (e.value) {
        try {
          const [c, g] = await Promise.all([
            S("get_translation_engine"),
            S("get_ocr_language")
          ]);
          (c === "google" || c === "bing" || c === "offline") && (K.value = c), nt.value = mt(g);
        } catch (c) {
          P.error("[PIN窗口] 读取默认 OCR/翻译设置失败", c);
        }
        try {
          o.value = Qe.getCurrent();
          try {
            bt = await o.value.listen(
              "pin-window-data",
              (c) => {
                ki(c.payload) && xi();
              }
            ), await Js();
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
        document.addEventListener("click", Pi), document.addEventListener("keydown", Ii, !0), document.addEventListener("contextmenu", Li, !0), window.addEventListener("resize", Tt), window.addEventListener("scroll", Tt, !0), window.addEventListener("blur", Gt), document.body && (document.body.oncontextmenu = (c) => (c.preventDefault(), !1));
      }
    }), xo(() => {
      a.value && URL.revokeObjectURL(a.value), bt && bt(), document.removeEventListener("click", Pi), document.removeEventListener("keydown", Ii, !0), document.removeEventListener("contextmenu", Li, !0), window.removeEventListener("resize", Tt), window.removeEventListener("scroll", Tt, !0), window.removeEventListener("blur", Gt), Ht?.disconnect(), Ht = null, document.body && (document.body.oncontextmenu = null), Xt && clearTimeout(Xt);
    }), (c, g) => (R(), I(
      "div",
      {
        class: ht(["pin-container", { "ocr-mode": r.value === "ocr" }]),
        ref_key: "containerRef",
        ref: e,
        onContextmenu: ft(en, ["prevent"]),
        onWheelCapture: Us
      },
      [
        V(" 图片容器 "),
        a.value && r.value === "pin" ? (R(), I(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: dt(W.value),
            onWheelCapture: _i,
            onContextmenu: ft(en, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: $n
          },
          [
            k("img", {
              src: a.value,
              alt: c.$t("screenshot.pin"),
              style: dt(lt.value),
              onLoad: Ci,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, kd)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : V("v-if", !0),
        r.value === "ocr" ? (R(), I(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: ft(en, ["prevent"])
          },
          [
            k("header", bd, [
              k(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: $n
                },
                [
                  k("div", Sd, [
                    p(C(Fe), {
                      theme: "outline",
                      size: "18"
                    }),
                    k(
                      "span",
                      Md,
                      Z(c.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  k("div", Cd, [
                    k("button", {
                      class: "ocr-window-btn",
                      title: at.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow"),
                      onClick: ft(Ti, ["stop"])
                    }, [
                      (R(), Rt(le(at.value ? C(Jn) : C(Ji)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, _d),
                    g[2] || (g[2] = k(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    k("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.minimize"),
                      onClick: ft(Fs, ["stop"])
                    }, [
                      p(C(Bo), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, Td),
                    k("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.maximize"),
                      onClick: ft(Vs, ["stop"])
                    }, [
                      p(C(Tl), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, zd),
                    k("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.close"),
                      onClick: ft(Wn, ["stop"])
                    }, [
                      p(C(Kn), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, Rd)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              k(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: $n
                },
                [
                  k("div", Ld, [
                    a.value ? (R(), I("img", {
                      key: 0,
                      src: a.value,
                      alt: c.$t("pin.ocrPreviewAlt"),
                      onLoad: Ci,
                      draggable: "false"
                    }, null, 40, Pd)) : V("v-if", !0)
                  ]),
                  k("div", Ad, [
                    k(
                      "div",
                      Dd,
                      Z(x.value),
                      1
                      /* TEXT */
                    ),
                    k("div", Id, [
                      k(
                        "span",
                        Od,
                        Z(zt.value),
                        1
                        /* TEXT */
                      ),
                      g[3] || (g[3] = k(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      k(
                        "span",
                        Ed,
                        Z(ot.value),
                        1
                        /* TEXT */
                      ),
                      !u.value && !d.value && l.value.trim() ? (R(), I("span", Wd, " ✓ ")) : V("v-if", !0)
                    ])
                  ]),
                  k("button", {
                    class: "ocr-view-original",
                    title: A.value ? c.$t("pin.viewResult") : c.$t("pin.viewOriginal"),
                    onClick: ft(Ns, ["stop"])
                  }, [
                    (R(), Rt(le(A.value ? C(Fe) : C(kl)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    k(
                      "span",
                      null,
                      Z(A.value ? c.$t("pin.viewResult") : c.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, $d)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            k(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: g[1] || (g[1] = ft(() => {
                }, ["stop"]))
              },
              [
                A.value ? (R(), I("div", Bd, [
                  k("img", {
                    src: a.value || s.value,
                    alt: c.$t("pin.originalImageAlt")
                  }, null, 8, Nd)
                ])) : (R(), I(
                  Bt,
                  { key: 1 },
                  [
                    u.value ? (R(), I("div", Hd, [
                      p(C(Ki), {
                        class: "ocr-loading-icon",
                        size: "20",
                        theme: "outline",
                        strokeWidth: 3
                      }),
                      k(
                        "span",
                        null,
                        Z(c.$t("pin.recognizing")),
                        1
                        /* TEXT */
                      )
                    ])) : d.value ? (R(), I(
                      "div",
                      jd,
                      Z(d.value),
                      1
                      /* TEXT */
                    )) : l.value.trim() ? (R(), I(
                      "div",
                      {
                        key: 3,
                        class: ht(["ocr-result-layout", { "records-open": N.value }])
                      },
                      [
                        k("section", Vd, [
                          k("div", Ud, [
                            k("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: i,
                              src: a.value || s.value,
                              alt: c.$t("pin.ocrSourceAlt"),
                              onLoad: Pn
                            }, null, 40, Yd),
                            Me.value.length > 0 ? (R(), I("div", Zd, [
                              (R(!0), I(
                                Bt,
                                null,
                                Kt(Me.value, (y) => (R(), I(
                                  "span",
                                  {
                                    key: y.id,
                                    class: "ocr-selection-highlight",
                                    style: dt(ys(y))
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : V("v-if", !0),
                            ut.value.length > 0 ? (R(), I(
                              "div",
                              {
                                key: 1,
                                class: "ocr-text-overlay",
                                onPointerdown: Xs,
                                onPointermove: Ai,
                                onPointerup: Gs,
                                onPointercancel: qs
                              },
                              [
                                (R(!0), I(
                                  Bt,
                                  null,
                                  Kt(ut.value, (y, $) => (R(), I("span", {
                                    key: y.id,
                                    class: "ocr-overlay-block",
                                    "data-selection-index": $,
                                    style: dt(ws(y)),
                                    textContent: Z(y.text.trim())
                                  }, null, 12, Xd))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              32
                              /* NEED_HYDRATION */
                            )) : V("v-if", !0)
                          ])
                        ]),
                        N.value ? (R(), I(
                          "section",
                          {
                            key: 0,
                            class: "ocr-record-pane",
                            onPointerdown: nn
                          },
                          [
                            T.value ? (R(), I("section", Gd, [
                              k("div", qd, [
                                k(
                                  "span",
                                  Kd,
                                  Z(c.$t("pin.selectedText")),
                                  1
                                  /* TEXT */
                                ),
                                k(
                                  "div",
                                  Jd,
                                  Z(T.value.sourceText),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              k("div", Qd, [
                                k(
                                  "span",
                                  tg,
                                  Z(F.value),
                                  1
                                  /* TEXT */
                                ),
                                k("div", {
                                  class: "ocr-selection-translation-editor",
                                  contenteditable: "plaintext-only",
                                  spellcheck: "false",
                                  textContent: Z(T.value.translatedText),
                                  onBlur: Is
                                }, null, 40, eg)
                              ])
                            ])) : V("v-if", !0),
                            (R(!0), I(
                              Bt,
                              null,
                              Kt(h.value, (y, $) => (R(), I(
                                "article",
                                {
                                  key: y.id,
                                  class: ht(["ocr-record-item", { selected: y.selected }])
                                },
                                [
                                  k("div", ng, [
                                    k("header", {
                                      class: "ocr-record-header",
                                      onClick: ft((E) => bi(y.id), ["stop"])
                                    }, [
                                      k("input", {
                                        class: "ocr-record-checkbox",
                                        type: "checkbox",
                                        checked: y.selected,
                                        onChange: ft((E) => bi(y.id), ["stop"]),
                                        onClick: g[0] || (g[0] = ft(() => {
                                        }, ["stop"]))
                                      }, null, 40, og),
                                      k(
                                        "span",
                                        sg,
                                        "#" + Z($ + 1),
                                        1
                                        /* TEXT */
                                      )
                                    ], 8, ig),
                                    k("div", {
                                      class: "ocr-record-editor",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: Z(y.text),
                                      onBlur: (E) => Si(y.id, "text", E)
                                    }, null, 40, ag),
                                    y.confidence > 0 ? (R(), I(
                                      "span",
                                      rg,
                                      Z(Math.round(y.confidence)) + "% ",
                                      1
                                      /* TEXT */
                                    )) : V("v-if", !0)
                                  ]),
                                  y.translatedText ? (R(), I("div", lg, [
                                    k(
                                      "span",
                                      cg,
                                      Z(F.value),
                                      1
                                      /* TEXT */
                                    ),
                                    k("div", {
                                      class: "ocr-record-editor translated",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: Z(y.translatedText),
                                      onBlur: (E) => Si(y.id, "translatedText", E)
                                    }, null, 40, hg)
                                  ])) : V("v-if", !0)
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
                        )) : V("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )) : (R(), I(
                      "div",
                      Fd,
                      Z(c.$t("pin.noTextRecognized")),
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
            k("footer", ug, [
              p(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.copyText"),
                disabled: !l.value.trim(),
                onClick: ft(In, ["stop"])
              }, {
                default: It(() => [
                  p(C(jn), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  k(
                    "span",
                    null,
                    Z(jt.value > 0 ? `${c.$t("pin.copyText")} (${jt.value})` : c.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              p(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: N.value ? gt.value : D.value,
                disabled: h.value.length === 0,
                onClick: ft(Hs, ["stop"])
              }, {
                default: It(() => [
                  p(C(Fe), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  k(
                    "span",
                    null,
                    Z(N.value ? gt.value : D.value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              k(
                "div",
                {
                  ref_key: "translateMenuAnchorRef",
                  ref: Q,
                  class: "translate-btn-group relative"
                },
                [
                  p(ne, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: c.$t("pin.translate"),
                    disabled: !l.value.trim() || H.value,
                    onClick: ft($s, ["stop"])
                  }, {
                    default: It(() => [
                      H.value ? (R(), Rt(C(Ki), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })) : (R(), Rt(C(No), {
                        key: 0,
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })),
                      k(
                        "span",
                        null,
                        Z(c.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(ne, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !l.value.trim() || H.value,
                    onClick: ft(Os, ["stop"])
                  }, {
                    default: It(() => [
                      p(C(qi), {
                        size: "17",
                        theme: "outline",
                        strokeWidth: 2.8
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  V(" 翻译引擎菜单 "),
                  j.value ? (R(), I(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: dt(q.value)
                    },
                    [
                      (R(!0), I(
                        Bt,
                        null,
                        Kt(X.value, (y) => (R(), I("div", {
                          key: y.value,
                          class: ht(["menu-item", { active: K.value === y.value }]),
                          onClick: ($) => Es(y.value)
                        }, [
                          k(
                            "span",
                            gg,
                            Z(y.label),
                            1
                            /* TEXT */
                          ),
                          K.value === y.value ? (R(), Rt(le(C(qn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : V("v-if", !0)
                        ], 10, dg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : V("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              k(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: rt,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  p(ne, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: c.$t("pin.ocrLanguage"),
                    disabled: u.value,
                    onClick: ft(Mi, ["stop"])
                  }, {
                    default: It(() => [
                      p(C(Fe), {
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      }),
                      k(
                        "span",
                        null,
                        Z(yt.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(ne, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: u.value,
                    onClick: ft(Mi, ["stop"])
                  }, {
                    default: It(() => [
                      p(C(qi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  et.value ? (R(), I(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: dt(wt.value)
                    },
                    [
                      (R(!0), I(
                        Bt,
                        null,
                        Kt(it.value, (y) => (R(), I("div", {
                          key: y.value,
                          class: ht(["menu-item", { active: nt.value === y.value }]),
                          onClick: ($) => Ws(y.value)
                        }, [
                          k(
                            "span",
                            mg,
                            Z(y.label),
                            1
                            /* TEXT */
                          ),
                          nt.value === y.value ? (R(), Rt(le(C(qn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : V("v-if", !0)
                        ], 10, fg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : V("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              k("div", pg, [
                p(ne, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: c.$t("pin.recognizeAgain"),
                  disabled: u.value || !s.value,
                  onClick: ft(An, ["stop"])
                }, {
                  default: It(() => [
                    p(C(Ml), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    k(
                      "span",
                      null,
                      Z(c.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              p(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.saveAsText"),
                disabled: !l.value.trim(),
                onClick: ft(Ps, ["stop"])
              }, {
                default: It(() => [
                  p(C(to), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  k(
                    "span",
                    null,
                    Z(c.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              g[4] || (g[4] = k(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              p(ne, {
                class: "ocr-action-btn more",
                type: "text",
                title: c.$t("pin.more"),
                onClick: ft(js, ["stop"])
              }, {
                default: It(() => [
                  p(C(yl), {
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
        )) : V("v-if", !0),
        Pt.value ? (R(), I(
          "div",
          wg,
          Z(Math.round(pt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : V("v-if", !0),
        V(" 右键菜单 "),
        _.value ? (R(), I(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: dt(bs.value)
          },
          [
            k("div", {
              class: "menu-item",
              onClick: Ti
            }, [
              (R(), Rt(le(at.value ? C(Ji) : C(Jn)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              k(
                "span",
                null,
                Z(at.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            k("div", {
              class: "menu-item",
              onClick: Ri
            }, [
              p(C(Sl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Z(c.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            k("div", {
              class: "menu-item",
              onClick: Ys
            }, [
              p(C(jn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Z(c.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            k("div", {
              class: "menu-item",
              onClick: Zs
            }, [
              p(C(to), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Z(c.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            r.value === "ocr" && l.value.trim() ? (R(), I("div", {
              key: 0,
              class: "menu-item",
              onClick: In
            }, [
              p(C(jn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Z(c.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : V("v-if", !0),
            g[5] || (g[5] = k(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            k("div", {
              class: "menu-item danger",
              onClick: Wn
            }, [
              p(C(Kn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              k(
                "span",
                null,
                Z(c.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : V("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), vg = /* @__PURE__ */ Cn(yg, [["__scopeId", "data-v-b8b84cd7"]]), xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vg
}, Symbol.toStringTag, { value: "Module" }));
async function kg(n) {
  return n.toDataURL("image/png");
}
function bg(n) {
  return Array.isArray(n) ? n.map((t) => {
    if (!t || typeof t != "object")
      return null;
    const e = t, i = typeof e.text == "string" ? e.text : "";
    return i.trim() ? {
      text: i,
      x: Number(e.x || 0),
      y: Number(e.y || 0),
      width: Number(e.width || 0),
      height: Number(e.height || 0),
      fontSize: Number(e.fontSize || 0),
      lineHeight: Number(e.lineHeight || 0),
      angle: Number(e.angle || 0),
      confidence: Number(e.confidence || 0)
    } : null;
  }).filter((t) => !!t) : [];
}
async function Sg(n) {
  const t = Date.now(), e = await kg(n);
  _t.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const i = await S("recognize_text_from_image", {
      imageData: e,
      engine: "rapidocr",
      language: "auto"
    }), o = bg(i.blocks), s = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || o.map((r) => r.text).join(`
`), a = {
      blocks: o,
      full_text: s,
      text: s,
      language: typeof i.language == "string" && i.language || Po(s),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return _t.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw P.error("[OCR] RapidOCR recognizeFromCanvas failed", i), _t.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function Mg() {
  return Promise.resolve();
}
async function Cg() {
  return Promise.resolve();
}
const _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: Sg,
  terminateOcr: Cg,
  warmupOcr: Mg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Pg as activate
};
