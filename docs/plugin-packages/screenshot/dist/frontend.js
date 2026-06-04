var rr = Object.defineProperty;
var lr = (e, t, n) => t in e ? rr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var U = (e, t, n) => lr(e, typeof t != "symbol" ? t + "" : t, n);
import * as pi from "vue";
import { inject as Te, createVNode as k, ref as Q, shallowRef as cr, computed as Y, watch as De, onMounted as an, onUnmounted as ji, defineComponent as Dt, h as Po, Text as ur, Fragment as Kt, nextTick as vn, createElementBlock as G, openBlock as F, createCommentVNode as nt, createElementVNode as A, renderList as ge, normalizeClass as Ct, createBlock as $t, resolveDynamicComponent as Ce, unref as z, toDisplayString as at, normalizeStyle as It, withDirectives as xn, withKeys as _s, vModelText as hr, getCurrentInstance as Qe, readonly as dr, getCurrentScope as fr, onScopeDispose as gr, isRef as mr, warn as pr, provide as yr, mergeProps as wr, renderSlot as Ne, Transition as Ui, withCtx as Xt, createTextVNode as vr, vShow as Xn, shallowReactive as xr, withModifiers as Pt, isVNode as bn, render as Kn } from "vue";
const cp = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => fd)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => tp)
  });
};
function br(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function kr(e, t, n, i, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Bn;
const ne = "__TAURI_TO_IPC_KEY__";
function _r(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function E(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Sr(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Cr {
  get rid() {
    return br(this, Bn, "f");
  }
  constructor(t) {
    Bn.set(this, void 0), kr(this, Bn, t);
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
Bn = /* @__PURE__ */ new WeakMap();
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
  [ne]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ne]();
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
  [ne]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ne]();
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
  [ne]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ne]();
  }
}
class Eo {
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
  [ne]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ne]();
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
    return new Eo(this.x / t, this.y / t);
  }
  [ne]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ne]();
  }
}
class An {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Eo ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Se ? this.position : this.position.toPhysical(t);
  }
  [ne]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ne]();
  }
}
var te;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(te || (te = {}));
async function Ao(e, t) {
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
    handler: _r(t)
  }).then((o) => async () => Ao(e, o));
}
async function Tr(e, t, n) {
  return yn(e, (i) => {
    Ao(e, i.id), t(i);
  }, n);
}
async function Mr(e, t) {
  await E("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Lr(e, t, n) {
  await E("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let Rr = class Fn extends Cr {
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
      rgba: Zn(t),
      width: n,
      height: i
    }).then((s) => new Fn(s));
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
      bytes: Zn(t)
    }).then((n) => new Fn(n));
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
    return E("plugin:image|from_path", { path: t }).then((n) => new Fn(n));
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
function Zn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Rr ? e.rid : e;
}
var Si;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Si || (Si = {}));
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
var Ss;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ss || (Ss = {}));
function Er() {
  return new Ln(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function yi() {
  return E("plugin:window|get_all_windows").then((e) => e.map((t) => new Ln(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const wi = ["tauri://created", "tauri://error"];
class Ln {
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
    return (n = (await yi()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Er();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return yi();
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
    for (const t of await yi())
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
    if (wi.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Mr(t, n);
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
    if (wi.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return Lr(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return wi.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return t && (t === Si.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), E("plugin:window|request_user_attention", {
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
      value: t instanceof An ? t : new An(t)
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
      value: Zn(t)
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
      value: t instanceof An ? t : new An(t)
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
      value: t ? Zn(t) : void 0
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
    return this.listen(te.WINDOW_RESIZED, (n) => {
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
    return this.listen(te.WINDOW_MOVED, (n) => {
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
    return this.listen(te.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new Pr(n);
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
    const n = await this.listen(te.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Se(a.payload.position)
        }
      });
    }), i = await this.listen(te.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Se(a.payload.position)
        }
      });
    }), s = await this.listen(te.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Se(a.payload.position)
        }
      });
    }), o = await this.listen(te.DRAG_LEAVE, (a) => {
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
    const n = await this.listen(te.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(te.WINDOW_BLUR, (s) => {
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
    return this.listen(te.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(te.WINDOW_THEME_CHANGED, t);
  }
}
var Cs;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Cs || (Cs = {}));
var Ts;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ts || (Ts = {}));
var Ms;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ms || (Ms = {}));
function Nt(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Ls(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function Vi(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function Ar(e, t) {
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
class Ir {
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
    const r = Math.round(i) + 0.5, l = Math.round(s) + 0.5, c = Math.max(0, Math.round(o) - 1), h = Math.max(0, Math.round(a) - 1);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.strokeRect(r + 1, l + 1, c, h), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.strokeRect(r, l, c, h), n && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: n, y: i, width: s, height: o } = t, a = Vi(t);
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
      const c = Math.round(l.x) - l.width / 2, h = Math.round(l.y) - l.height / 2, g = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(c + 1, h + 1, l.width, l.height, g), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(c, h, l.width, l.height, g), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
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
    const { mousePosition: i, colorInfo: s, showFormat: o, previewImage: a, zoomFactor: r, isCopied: l } = t, c = 156, h = 188, g = 18;
    let y = i.x + g, w = i.y + g;
    y + c > n.x + n.width && (y = i.x - c - g), w + h > n.y + n.height && (w = i.y - h - g), y < n.x && (y = n.x + g), w < n.y && (w = n.y + g), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(y, w, c, h, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
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
      const Z = f + V * _;
      this.ctx.moveTo(Z, x), this.ctx.lineTo(Z, x + C);
      const et = x + V * _;
      this.ctx.moveTo(f, et), this.ctx.lineTo(f + C, et);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let V = 1; V < p; V++) {
      const Z = f + V * _ + 0.5;
      this.ctx.moveTo(Z, x), this.ctx.lineTo(Z, x + C);
      const et = x + V * _ + 0.5;
      this.ctx.moveTo(f, et), this.ctx.lineTo(f + C, et);
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
class Or {
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
    return Ar(t, n);
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
      return Ls(t, n);
    const s = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Ls(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, s = 8) {
    if (!de(t) || !de(n) || !de(i))
      return !1;
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, h = r * r + l * l;
    if (h === 0)
      return Nt(t, n) <= s;
    const g = c / h;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Nt(t, y) <= s;
  }
}
var B = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(B || {}), T = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(T || {});
class zr {
  constructor(t, n) {
    U(this, "coordinateSystem");
    U(this, "canvas");
    U(this, "isDrawing", !1);
    U(this, "currentOperation", B.None);
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
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(n) : B.None : B.Drawing;
    if (o) {
      if (o.getData().type === T.Mosaic)
        return B.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== B.None ? a : B.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : B.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [T.Rectangle]: B.DrawingRect,
      [T.Ellipse]: B.DrawingEllipse,
      [T.Line]: B.DrawingLine,
      [T.Arrow]: B.DrawingArrow,
      [T.Pen]: B.DrawingPen,
      [T.Text]: B.DrawingText,
      [T.Mosaic]: B.DrawingMosaic,
      [T.ColorPicker]: B.ColorPicking,
      [T.Ocr]: B.None,
      [T.Pin]: B.Pinning,
      [T.Translate]: B.None,
      [T.Select]: B.None
    }[t] || B.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, n, i) {
    const { x: s, y: o, width: a, height: r } = n, l = 12;
    if (i)
      return B.None;
    const c = Vi(n);
    return this.isInHandle(t, { x: s, y: o }, l) ? B.ResizingNW : this.isInHandle(t, { x: s + a, y: o }, l) ? B.ResizingNE : this.isInHandle(t, { x: s, y: o + r }, l) ? B.ResizingSW : this.isInHandle(t, { x: s + a, y: o + r }, l) ? B.ResizingSE : this.isInHandle(t, { x: c.x, y: o }, l) ? B.ResizingN : this.isInHandle(t, { x: c.x, y: o + r }, l) ? B.ResizingS : this.isInHandle(t, { x: s, y: c.y }, l) ? B.ResizingW : this.isInHandle(t, { x: s + a, y: c.y }, l) ? B.ResizingE : this.coordinateSystem.isPointInRect(t, n) ? B.Moving : B.Drawing;
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
      return B.None;
    const i = n.getData();
    if (i.type === T.Mosaic || i.type === T.Text)
      return B.None;
    if ([
      T.Rectangle,
      T.Ellipse,
      T.Line,
      T.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = Nt(t, s), c = Nt(t, o);
      if (l <= a + r)
        return B.ResizingAnnotationNW;
      if (c <= a + r)
        return B.ResizingAnnotationSE;
    }
    return B.None;
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
    this.isDrawing = !1, this.currentOperation = B.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class Fe {
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
class Dr extends Fe {
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
class Nr extends Fe {
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
class Wr extends Fe {
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
class $r extends Fe {
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
    const l = Math.atan2(o.y - s.y, o.x - s.x), c = 15 * n, h = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l - h),
      r.y - c * Math.sin(l - h)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l + h),
      r.y - c * Math.sin(l + h)
    ), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, s, n);
  }
  isPointNearLine(t, n, i, s) {
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, h = r * r + l * l;
    if (h === 0)
      return Nt(t, n) <= s;
    const g = c / h;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
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
class Br extends Fe {
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
      const l = this.data.points[r], c = l.x * n - i.x, h = l.y * n - i.y;
      t.lineTo(c, h);
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
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, h = r * r + l * l;
    if (h === 0)
      return Nt(t, n) <= s;
    const g = c / h;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
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
class Fr extends Fe {
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
    const l = a.measureText(this.data.text).width, { x: c, y: h } = Ke(i);
    return t.x >= c - n && t.x <= c + l + n && t.y >= h - n && t.y <= h + s + n;
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
    const g = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(l, c, g, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Ke(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Xe}`;
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
const fe = class fe extends Fe {
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
    const o = fe.helperCanvas, a = fe.helperCtx, r = n || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), h = Math.max(l * 3, 24), g = this.getBounds();
    if (!g) return;
    const y = h, w = Math.floor(g.x - y), C = Math.floor(g.y - y), f = Math.ceil(g.width + y * 2), x = Math.ceil(g.height + y * 2);
    if (f <= 0 || x <= 0) return;
    const p = Math.floor(w * r - i.x), _ = Math.floor(C * r - i.y), v = Math.ceil(f * r), b = Math.ceil(x * r), O = t.canvas.width, D = t.canvas.height, M = Math.max(0, p), V = Math.max(0, _), Z = Math.min(v, O - M), et = Math.min(b, D - V);
    if (Z <= 0 || et <= 0) return;
    let ot;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), ot = t.getImageData(M, V, Z, et), t.restore();
    } catch {
      return;
    }
    const st = ot.data, ut = M % c, vt = V % c;
    for (let ft = -vt; ft < et; ft += c)
      for (let J = -ut; J < Z; J += c) {
        const lt = Math.max(0, J), xt = Math.max(0, ft), ht = Math.min(Z, J + c), j = Math.min(et, ft + c);
        if (lt >= ht || xt >= j) continue;
        let bt = 0, X = 0, Et = 0, jt = 0;
        for (let Ut = xt; Ut < j; Ut++)
          for (let Lt = lt; Lt < ht; Lt++) {
            const St = (Ut * Z + Lt) * 4;
            bt += st[St], X += st[St + 1], Et += st[St + 2], jt++;
          }
        if (jt > 0) {
          bt = Math.round(bt / jt / 8) * 8, X = Math.round(X / jt / 8) * 8, Et = Math.round(Et / jt / 8) * 8;
          for (let Lt = xt; Lt < j; Lt++)
            for (let St = lt; St < ht; St++) {
              const Gt = (Lt * Z + St) * 4;
              st[Gt] = bt, st[Gt + 1] = X, st[Gt + 2] = Et;
            }
        }
      }
    o.width = Z, o.height = et, a.putImageData(ot, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = h * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, M, V), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
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
      for (let h = 1; h < this.data.points.length - 1; h++) {
        const g = this.data.points[h], y = this.data.points[h + 1], w = (a(g) + a(y)) / 2, C = (r(g) + r(y)) / 2;
        t.quadraticCurveTo(a(g), r(g), w, C);
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
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, h = r * r + l * l;
    let g = -1;
    h !== 0 && (g = c / h);
    let y, w;
    g < 0 ? (y = n.x, w = n.y) : g > 1 ? (y = i.x, w = i.y) : (y = n.x + g * r, w = n.y + g * l);
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
let Ci = fe;
class In {
  static createAnnotation(t, n, i, s = {}) {
    switch (t) {
      case T.Rectangle:
        return new Dr(n, i);
      case T.Ellipse:
        return new Nr(n, i);
      case T.Line:
        return new Wr(n, i);
      case T.Arrow:
        return new $r(n, i);
      case T.Pen:
        return new Br(n, i);
      case T.Text:
        return new Fr(
          n,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case T.Mosaic:
        return new Ci(
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
const Oe = class Oe {
  constructor() {
    U(this, "pool", []);
    U(this, "maxPoolSize", 5);
    // 最大池大小
    U(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return Oe.instance || (Oe.instance = new Oe()), Oe.instance;
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
U(Oe, "instance");
let Ti = Oe;
async function Hr(e, t) {
  return await E("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const jr = "snippets-code:developer-mode", Io = "snippets-code:frontend-diagnostics", Ur = 240, un = "[REDACTED]", Hn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${un}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${un}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  un
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${un}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${un}`
), Yi = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Hn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Hn(
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
    return Hn(String(e));
  }
}, Vr = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Yr = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Io) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Gi = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(jr) === "true";
  } catch {
    return !1;
  }
}, Gr = (e, t, n) => {
  if (!Gi() || typeof localStorage > "u") return;
  const i = Yr();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Vr(),
    message: Hn(t),
    data: Yi(n)
  });
  try {
    localStorage.setItem(
      Io,
      JSON.stringify(i.slice(-Ur))
    );
  } catch {
  }
}, Xr = () => Gi(), Kr = (e) => e === "warn" || e === "error" || !1 || !1 || Gi(), On = (e, t, n) => {
  Gr(e, t, n), Kr(e) && E("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Yi(n)
  }).catch(() => {
  });
}, H = {
  info: (e, t, ...n) => {
    On("info", e, t);
  },
  error: (e, t) => {
    On("error", e, t);
  },
  warn: (e, t) => {
    On("warn", e, t);
  },
  debug: (e, t) => {
    Xr() && On("debug", e, t);
  }
}, Wt = {
  log: (e, t) => {
    E("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : Yi(t)
    }).catch(() => {
    });
  }
}, Zr = "resources/transformers/transformers.min.js", qr = ["translation-offline-runtime", "translation"], Jr = "https://huggingface.co/", Qr = "{model}/resolve/{revision}/", tl = "/__snippets_code_disabled_transformers_local_models__/", el = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let hn = null;
const nl = (e) => {
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
}, Oo = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = nl(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, zo = (e) => {
  const t = Oo(e);
  return Object.fromEntries(
    el.map((n) => [n, `${t}${n}`])
  );
}, Do = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Jr, e.remotePathTemplate = Qr, e.allowLocalModels = !1, e.localModelPath = tl, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = zo(t), e.backends.onnx.wasm.numThreads = 1);
};
async function il() {
  return hn || (hn = (async () => {
    for (const e of qr) {
      const t = await Hr(e, Zr);
      if (!t) continue;
      const n = Sr(t), i = await import(
        /* @vite-ignore */
        n
      );
      return Do(i.env, n), H.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw hn = null, e;
  }), hn);
}
let ye = null, wn = !1, Ze = null, ze = null, Mi = null;
const sl = "Xenova/opus-mt-en-zh", ol = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], al = 3e5;
function rl(e) {
  Mi = e;
}
function ll() {
  return ol;
}
function cl(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function No() {
  return ye || Ze || (wn = !0, H.info("[离线翻译] 正在加载翻译模型..."), Ze = (async () => {
    try {
      const { pipeline: e, env: t } = await il();
      Do(t);
      let n = "";
      const i = e("translation", sl, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== n && (n = o.file, H.info(`[离线翻译] 已加载: ${o.file}`)), Mi && Mi({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return ye = await cl(
        i,
        al,
        "模型加载超时，请检查网络连接后重试"
      ), H.info("[离线翻译] 翻译模型加载完成"), wn = !1, ye;
    } catch (e) {
      throw wn = !1, Ze = null, H.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Ze);
}
async function Wo(e) {
  if (!e?.trim()) return e;
  ze = new AbortController();
  const t = ze.signal;
  try {
    const n = await No();
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
    ze = null;
  }
}
function ul() {
  ze && (ze.abort(), ze = null, H.info("[离线翻译] 已发送取消信号"));
}
function hl() {
  return ze !== null;
}
async function $o() {
  await No();
}
function dl() {
  return ye !== null;
}
function fl() {
  return wn;
}
async function Xi() {
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
async function gl() {
  return (await Xi()).isCached;
}
function ml() {
  return ye !== null;
}
async function pl() {
  if (ye)
    try {
      await ye.dispose?.();
    } catch {
    }
  ye = null, Ze = null, wn = !1, H.info("[离线翻译] 翻译器已释放");
}
async function yl() {
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
const wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: ml,
  cancelOfflineTranslation: ul,
  clearModelCache: yl,
  disposeOfflineTranslator: pl,
  getModelCacheInfo: Xi,
  getModelFiles: ll,
  getRuntimeBaseUrl: Oo,
  getRuntimeWasmPaths: zo,
  isModelCached: gl,
  isOfflineTranslatorInitializing: fl,
  isOfflineTranslatorReady: dl,
  isTranslationInProgress: hl,
  setProgressCallback: rl,
  translateOffline: Wo,
  warmupOfflineTranslator: $o
}, Symbol.toStringTag, { value: "Module" }));
class Ie {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => ap).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const n = Promise.resolve(wl).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
U(Ie, "loadedModules", /* @__PURE__ */ new Map()), U(Ie, "loadingPromises", /* @__PURE__ */ new Map());
function Bo(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = e.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, h = n + s + a + l;
  return h === 0 ? "unknown" : s >= 3 && s > l && s / h >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / h >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function qe(e) {
  return e === "zh" || e === "en";
}
function Ae(e) {
  return Bo(e);
}
const vl = /[.!?。！？；;：:][)"'”’】）\]]*$/, Rs = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, zn = /[A-Za-z0-9]/, xl = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Ps = /(?:^|\s)(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Fo(e, t = {}) {
  const n = oc(e), i = Il(e, n);
  return i.length === 0 ? [] : Pl(i, n) ? Rl(i, n) : (t.mode === "single_para" ? [gn(i, n)] : kl(i, n)).flatMap((o) => bl(o, n));
}
function bl(e, t) {
  const n = Zi(e, t), i = [];
  for (const s of n) {
    const o = i[i.length - 1], a = o ? $l(o, s, t) : !1;
    if (!o || !a) {
      i.push(Fl(s));
      continue;
    }
    o.text = jl(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = Go(o.bbox, s.bbox), o.fontSize = Is(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Is(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return Ul(i, t);
}
function kl(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: El(l),
    block: l
  })).filter((l) => Al(l.bbox)).sort(Ki);
  if (n.length <= 1)
    return [gn(e, t)];
  if (_l(n, t))
    return [gn(e, t)];
  const { cuts: i, rows: s } = Sl(n);
  if (i.length < 2 || s.length <= 1)
    return [gn(e, t)];
  const o = Ml(i, s), r = Ll(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [gn(e, t)];
}
function _l(e, t) {
  if (e.length < 2)
    return !0;
  const n = [...e].sort(Ki);
  let i = 0, s = 0;
  for (let o = 1; o < n.length; o += 1) {
    const a = n[o - 1].bbox, r = n[o].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const c = Math.min(a.right, r.right) - Math.max(a.left, r.left), h = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), g = c / h >= 0.45, y = Math.abs(a.left - r.left) <= t * 1.5;
    (g || y) && (s += 1);
  }
  return i > 0 && s / i >= 0.72;
}
function Sl(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < e.length; ) {
    const c = e[a].bbox.bottom, h = [];
    for (; a < e.length && e[a].bbox.top <= c; )
      h.push(e[a]), a += 1;
    h.sort((f, x) => f.bbox.left - x.bbox.left || f.bbox.right - x.bbox.right);
    const g = Cl(h, t, n, i.length), { gaps: y, removedGaps: w } = Tl(o, g), C = i.length - 1;
    for (const f of w)
      s.push({
        left: f.left,
        right: f.right,
        startRow: f.startRow,
        endRow: C
      });
    o = y, i.push(h);
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
function Cl(e, t, n, i) {
  const s = [];
  let o = t;
  for (const a of e)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: n, startRow: i }), s;
}
function Tl(e, t) {
  const n = e.map(() => !1), i = t.map(() => !1), s = [];
  for (let o = 0; o < e.length; o += 1) {
    const a = e[o];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], c = Math.max(a.left, l.left), h = Math.min(a.right, l.right);
      c <= h && (s.push({ left: c, right: h, startRow: a.startRow }), n[o] = !0, i[r] = !0);
    }
  }
  for (let o = 0; o < t.length; o += 1)
    i[o] || s.push(t[o]);
  return {
    gaps: s,
    removedGaps: e.filter((o, a) => !n[a])
  };
}
function Ml(e, t) {
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
    const l = r.xRight - 2, c = s.filter((w) => l >= w.xLeft && l <= w.xRight + 1e-4 && w.rowBottom < r.rowTop), h = Math.max(...c.map((w) => w.rowBottom), i.rowBottom), g = c.filter((w) => w.rowBottom === h);
    (g.length > 0 ? g.reduce((w, C) => C.xRight > w.xRight ? C : w) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = n[r], c = [];
    for (const w of o) {
      let C = !1, f = !1, x = !1;
      for (const p of l)
        if (Dn(p.right, w.xLeft) && (C = !0), Dn(p.left, w.xRight) && (f = !0), w.xLeft < p.left && p.left < w.xRight || w.xLeft < p.right && p.right < w.xRight) {
          x = !0;
          break;
        }
      !C || !f || x ? a(w) : (w.rowBottom = r, c.push(w));
    }
    o = c;
    let h = 0, g = 0;
    const y = t[r];
    for (; h < y.length && l.length >= 2; ) {
      const w = y[h];
      g + 1 >= l.length && (g = Math.max(0, l.length - 2));
      const C = l[g].right, f = l[g + 1].left;
      if (w.bbox.left + 1e-4 > f && g < l.length - 2) {
        g += 1;
        continue;
      }
      let x = o.find((p) => Dn(p.xLeft, C) && Dn(p.xRight, f));
      x || (x = {
        xLeft: C,
        xRight: f,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(x)), x.units.push(w), h += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(Ki);
  return i;
}
function Ll(e) {
  const t = [e], n = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (n.push(i), t.push(...[...i.children].reverse()));
  }
  return n;
}
function gn(e, t) {
  return [...e].sort((n, i) => {
    const s = n.y - i.y;
    return Math.abs(s) > t * 0.45 ? s : n.x - i.x;
  });
}
function Rl(e, t) {
  const n = Me(Zt(e.map((a) => a.width)), t * 0.5), i = Math.max(n * 1.4, t * 0.28), s = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? Zt(l.map((h) => h.x + h.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((y, w) => y.y - w.y), l = r.reduce((y, w, C) => {
      const f = w.text.trim();
      return C === 0 ? f : qi(y, f);
    }, ""), c = Yo(r), h = Zt(r.map((y) => Me(y.fontSize, t))), g = Zt(r.map((y) => si(y)));
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: h,
      lineHeight: g,
      angle: Zt(r.map((y) => y.angle || 0))
    };
  });
}
function Pl(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function El(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Al(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function Ki(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function Dn(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function Il(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || Ol(n, t) || Dl(i))
      return null;
    const s = Nl(zl(i, n, t));
    return s === n.text ? n : { ...n, text: s };
  }).filter((n) => !!n);
}
function Ol(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function zl(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function Dl(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function Nl(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function Zi(e, t) {
  const n = [...e].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of n) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !tc(a.blocks, o, t) ? (a.blocks.push(o), a.y = Zt(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => Wl(o.blocks, t));
}
function Wl(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = Yo(n), s = n.reduce((r, l, c) => {
    const h = l.text.trim();
    return c === 0 ? h : Hl(r, h);
  }, ""), o = Zt(n.map((r) => Me(r.fontSize, t))), a = Zt(n.map((r) => si(r)));
  return {
    text: s,
    blocks: n,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: ec(n, t),
    isCodeLike: Uo(s)
  };
}
function $l(e, t, n) {
  const i = Zi(e.blocks, n), s = i[i.length - 1];
  if (!s) return !1;
  const o = kn(s.text);
  if (ii(s.text) || kn(t.text) || o && !Bl(s, t, n) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -n * 0.25 || a >= n * 1.8 || Kl(i, a, n) || Zl(s, t, a, n) || ql(s, t, a, n) || Jl(s, t, a, n) || Ql(s, t, a, n))
    return !1;
  if (o)
    return !0;
  const r = Math.max(n * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function Bl(e, t, n) {
  if (jo(t.text))
    return !1;
  const i = t.bbox.x - e.bbox.x, s = Math.max(n * 0.8, e.lineHeight * 0.65);
  return i >= s;
}
function Fl(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: Zt(e.blocks.map((t) => t.angle || 0))
  };
}
function Hl(e, t) {
  return qi(e, t);
}
function jl(e, t) {
  return qi(e, t);
}
function qi(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const s = n.charAt(n.length - 1), o = i.charAt(0), a = n.charAt(n.length - 2);
  return s === "-" && zn.test(a) && zn.test(o) ? `${n.slice(0, -1)}${i}` : ac(o) || rc(s) ? `${n}${i}` : Rs.test(s) || Rs.test(o) || Os(s) || Os(o) ? `${n}${i}` : zn.test(s) && zn.test(o) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function ii(e) {
  return vl.test(e.trim());
}
function kn(e) {
  return xl.test(e);
}
function Ul(e, t) {
  return e.flatMap((n) => Vl(n, t));
}
function Vl(e, t) {
  const n = Ho(e.text);
  if (n.length <= 1)
    return [e];
  const i = Zi(e.blocks, t), s = i.length === n.length;
  return n.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || Gl(e.bbox, a, n.length), c = r?.blocks || [Xl(e, o, l, a)];
    return {
      ...e,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((h) => Uo(h.text)),
      isStructuredBlock: e.isStructuredBlock,
      fontSize: Zt(c.map((h) => Me(h.fontSize, e.fontSize || t))),
      lineHeight: Zt(c.map((h) => si(h))),
      angle: Zt(c.map((h) => h.angle || 0))
    };
  });
}
function Ho(e) {
  const t = e.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Ho);
  const n = Yl(e);
  return n.length > 1 ? n.flatMap(Es) : Es(e);
}
function Yl(e) {
  const t = e.trim(), n = [];
  Ps.lastIndex = 0;
  for (const i of t.matchAll(Ps)) {
    const s = i[0], o = i.index ?? 0;
    n.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return n.length <= 1 ? [t] : n.map((i, s) => {
    const o = n[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function Es(e) {
  const t = e.trim();
  if (!kn(t))
    return [t];
  const n = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !n || !jo(n[2]) ? [t] : [n[1].trim(), n[2].trim()];
}
function Gl(e, t, n) {
  const i = e.height / Math.max(n, 1);
  return {
    x: e.x,
    y: e.y + i * t,
    width: e.width,
    height: i
  };
}
function Xl(e, t, n, i) {
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
function jo(e) {
  const t = e.trim();
  return !t || ii(t) || kn(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Kl(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? Zt(i) : 0, o = Math.max(s * 2.2, n * 1.15);
  return t > o;
}
function Zl(e, t, n, i) {
  const s = e.text.trim();
  if (!s || ii(s) || kn(s) || e.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function ql(e, t, n, i) {
  if (n <= 0)
    return !1;
  const s = Math.max(e.fontSize, t.fontSize), o = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = s / o, r = n / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Jl(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const o = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Ql(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : As(e.text) && As(t.text);
}
function As(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !ii(t);
}
function Uo(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function tc(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > n * 0.9 && sc(s.text) && Vo(t.text) ? !1 : o > n * 3.2;
}
function ec(e, t) {
  if (e.length < 2)
    return e.some((s) => nc(s.text));
  const n = [...e].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < n.length; s++) {
    const o = n[s - 1], a = n[s], r = n[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && ic(o.text) && Vo(a.text)) && (i += 1);
  }
  return i >= 1;
}
function nc(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function ic(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function sc(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Vo(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Yo(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => Go(n, i), t[0]);
}
function Go(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), s = Math.max(e.x + e.width, t.x + t.width), o = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: s - n,
    height: o - i
  };
}
function oc(e) {
  return Me(Zt(e.map((t) => si(t))), 16);
}
function si(e) {
  return Me(e.lineHeight, Me(e.height, Me(e.fontSize, 16) * 1.2));
}
function Is(e, t, n, i) {
  const s = t + i;
  return s <= 0 ? n : (e * t + n * i) / s;
}
function Me(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function Zt(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function ac(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function rc(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function Os(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class lc {
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
    U(this, "canvasPool", Ti.getInstance());
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
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Or(t), this.drawingEngine = new Ir(t, this.coordinateSystem), this.eventHandler = new zr(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), Ie.preloadModules();
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
    if (this.annotations = t.annotations.map((n) => In.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
          const [c, h] = await Promise.all([
            E("get_cached_monitor_info"),
            E("get_cached_window_list")
          ]);
          t = {
            x: c.x,
            y: c.y,
            scale: c.scale,
            isFullscreen: !1
          }, n = h;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((g) => setTimeout(g, s));
            continue;
          }
          const h = await Promise.all([
            E("get_window_info"),
            E("get_all_windows")
          ]);
          t = h[0], n = h[1];
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
    if (i !== B.None)
      switch (this.eventHandler.setCurrentOperation(i), this.eventHandler.startDrawing(n), i) {
        case B.Drawing:
          !this.selectionRect && this.currentTool === T.Select && (this.dragStartPosition = { ...n }, this.snappedWindow ? this.pendingSnapWindow = this.snappedWindow : (this.selectionRect = {
            x: n.x,
            y: n.y,
            width: 0,
            height: 0
          }, this.onStateChange?.()));
          break;
        case B.DrawingRect:
        case B.DrawingEllipse:
        case B.DrawingLine:
        case B.DrawingArrow:
        case B.DrawingPen:
        case B.DrawingMosaic:
          this.startAnnotation(n);
          break;
        case B.DrawingText:
          this.startTextInput(n), this.eventHandler.stopDrawing();
          break;
        case B.ColorPicking:
          this.handleColorPicking(n), this.eventHandler.stopDrawing();
          break;
        case B.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case B.EditingAnnotation:
          this.selectAnnotationAtPoint(n), this.selectedAnnotation && this.selectedAnnotation.getData().type === T.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case B.MovingAnnotation:
          this.startAnnotationDrag(n);
          break;
        case B.ResizingAnnotationNW:
        case B.ResizingAnnotationSE:
          this.startAnnotationResize(n, i);
          break;
        case B.Moving:
        case B.ResizingNW:
        case B.ResizingNE:
        case B.ResizingSW:
        case B.ResizingSE:
        case B.ResizingN:
        case B.ResizingS:
        case B.ResizingW:
        case B.ResizingE:
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
      case B.Drawing:
        this.selectionRect.width = t.x - n.startPoint.x, this.selectionRect.height = t.y - n.startPoint.y;
        break;
      case B.Moving:
        this.selectionRect.x += s, this.selectionRect.y += o;
        break;
      case B.ResizingNW:
        this.selectionRect.x += s, this.selectionRect.y += o, this.selectionRect.width -= s, this.selectionRect.height -= o;
        break;
      case B.ResizingNE:
        this.selectionRect.y += o, this.selectionRect.width += s, this.selectionRect.height -= o;
        break;
      case B.ResizingSW:
        this.selectionRect.x += s, this.selectionRect.width -= s, this.selectionRect.height += o;
        break;
      case B.ResizingSE:
        this.selectionRect.width += s, this.selectionRect.height += o;
        break;
      case B.ResizingN:
        this.selectionRect.y += o, this.selectionRect.height -= o;
        break;
      case B.ResizingS:
        this.selectionRect.height += o;
        break;
      case B.ResizingW:
        this.selectionRect.x += s, this.selectionRect.width -= s;
        break;
      case B.ResizingE:
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
      case B.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, n.points[1]]
        });
        break;
      case B.ResizingAnnotationSE:
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
      [B.Moving]: "move",
      [B.ResizingNW]: "nw-resize",
      [B.ResizingNE]: "ne-resize",
      [B.ResizingSW]: "sw-resize",
      [B.ResizingSE]: "se-resize",
      [B.ResizingN]: "n-resize",
      [B.ResizingS]: "s-resize",
      [B.ResizingW]: "w-resize",
      [B.ResizingE]: "e-resize",
      [B.EditingAnnotation]: "pointer",
      [B.MovingAnnotation]: "move",
      [B.ResizingAnnotationNW]: "nw-resize",
      [B.ResizingAnnotationSE]: "se-resize",
      [B.Drawing]: "crosshair"
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
    let h, g;
    if (c) {
      const f = Math.max(0, Math.round(l.r * 0.1)), x = Math.max(0, Math.round(l.g * 0.1)), p = Math.max(0, Math.round(l.b * 0.1));
      h = `rgba(${f}, ${x}, ${p}, 0.95)`, g = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), x = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), p = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      h = `rgba(${f}, ${x}, ${p}, 0.95)`, g = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = h, t.fillRect(n, i, s, o), t.fillStyle = g, t.textAlign = "left", t.textBaseline = "top";
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
    const c = Math.max(24, r - o * 2), h = o, g = (v, b, O) => l.map((D) => {
      const M = (D.translatedText || D.text).trim(), V = Math.max(12, Math.min(D.fontSize || 16, 48)), Z = Math.max(8, Math.round(V * v)), et = D.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', ot = Math.max(
        o,
        Math.min(D.bbox.x + o, a * 0.38)
      ), st = b ? o : ot, ut = Math.max(48, a - st - h), vt = D.lineHeight || Z * 1.35, ft = Math.max(
        Z * (O ? 1.04 : 1.14),
        Math.min(vt * v, Z * (O ? 1.18 : 1.42))
      );
      return t.font = `${Z}px ${et}`, {
        text: M,
        fontSize: Z,
        fontFamily: et,
        lineHeight: ft,
        paragraphGap: O ? Math.max(1, ft * 0.16) : Math.max(3, ft * 0.35),
        x: i + st,
        lines: this.wrapTextToLines(t, M, ut)
      };
    }), y = (v) => v.reduce((b, O, D) => {
      const M = D === v.length - 1 ? 0 : O.paragraphGap;
      return b + O.lines.length * O.lineHeight + M;
    }, 0);
    let w = g(1, !1, !1), C = y(w);
    if (C > c) {
      const v = Math.max(0.56, c / C);
      w = g(v, !1, !1), C = y(w);
    }
    if (C > c && (w = g(1, !0, !1), C = y(w)), C > c) {
      const v = Math.max(0.38, c / C * 0.96);
      w = g(v, !0, !0), C = y(w);
    }
    if (C > c) {
      const v = Math.max(0.3, c / C * 0.94);
      w = g(v, !0, !0), C = y(w);
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
    const l = [...n.blocks].sort((g, y) => g.x - y.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), h = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const g of l) {
      const y = g.translatedText || g.text;
      if (!y.trim()) continue;
      const w = i + g.x + Math.min(4, o), C = s + g.y, f = l.find((v) => v.x > g.x), x = f ? Math.max(g.width, f.x - g.x - 8) : Math.max(g.width, a - g.x - o), p = this.wrapTextToLines(t, y.trim(), x);
      let _ = C;
      for (const v of p) {
        if (_ + c > s + r) break;
        t.fillText(v, w, _), _ += h;
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
      let h = "";
      for (const g of Array.from(c)) {
        const y = h + g;
        t.measureText(y).width > i && h !== "" ? (o.push(h), h = g) : h = y;
      }
      r = h;
    };
    for (const c of a) {
      const h = /^\s+$/.test(c), g = h ? " " : c, y = r + g;
      if (t.measureText(y).width <= i) {
        r = y;
        continue;
      }
      r.trim() && (o.push(r.trimEnd()), r = ""), !h && (t.measureText(g).width > i ? l(g) : r = g);
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
    const c = this.backgroundImage.width, h = this.backgroundImage.height, g = this.canvas.width / s, y = this.canvas.height / s, w = c / g, C = h / y, f = t.x * w, x = t.y * C, p = t.width * w, _ = t.height * C;
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
    } catch (J) {
      return H.error("[截图] 采样区域绘制失败", J), this.canvasPool.release(r), i;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (J) {
      return H.error("[截图] 获取像素数据失败", J), this.canvasPool.release(r), i;
    }
    const b = v.data, O = Math.ceil(Math.sqrt(n)), D = o / (O + 1), M = a / (O + 1);
    let V = 0, Z = 0, et = 0, ot = 0;
    for (let J = 1; J <= O; J++)
      for (let lt = 1; lt <= O && !(ot >= n); lt++) {
        const xt = Math.floor(lt * D), ht = Math.floor(J * M);
        if (xt >= 0 && xt < o && ht >= 0 && ht < a) {
          const j = (ht * o + xt) * 4;
          j >= 0 && j + 2 < b.length && (V += b[j], Z += b[j + 1], et += b[j + 2], ot++);
        }
      }
    if (this.canvasPool.release(r), ot === 0)
      return i;
    const st = Math.round(V / ot), ut = Math.round(Z / ot), vt = Math.round(et / ot), ft = this.getBrightness(st, ut, vt);
    return {
      r: st,
      g: ut,
      b: vt,
      brightness: ft
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
      const c = Math.max(0, Math.round(t.r * 0.2)), h = Math.max(0, Math.round(t.g * 0.2)), g = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${c}, ${h}, ${g}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const c = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), h = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), g = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${c}, ${h}, ${g}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
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
    const c = this.backgroundImage.width, h = this.backgroundImage.height, g = this.canvas.width / s, y = this.canvas.height / s, w = c / g, C = h / y, f = t.x * w, x = t.y * C, p = t.width * w, _ = t.height * C;
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
    } catch (J) {
      return H.error("[截图] isUniformColor: 采样区域绘制失败", J), this.canvasPool.release(r), !1;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (J) {
      return H.error("[截图] isUniformColor: 获取像素数据失败", J), this.canvasPool.release(r), !1;
    }
    const b = v.data, O = Math.ceil(Math.sqrt(i)), D = o / (O + 1), M = a / (O + 1), V = [];
    for (let J = 1; J <= O; J++)
      for (let lt = 1; lt <= O && !(V.length >= i); lt++) {
        const xt = Math.floor(lt * D), ht = Math.floor(J * M);
        if (xt >= 0 && xt < o && ht >= 0 && ht < a) {
          const j = (ht * o + xt) * 4;
          j >= 0 && j + 2 < b.length && V.push({
            r: b[j],
            g: b[j + 1],
            b: b[j + 2]
          });
        }
      }
    if (this.canvasPool.release(r), V.length < 2)
      return !1;
    const Z = V.reduce((J, lt) => J + lt.r, 0) / V.length, et = V.reduce((J, lt) => J + lt.g, 0) / V.length, ot = V.reduce((J, lt) => J + lt.b, 0) / V.length, st = V.reduce((J, lt) => J + Math.pow(lt.r - Z, 2), 0) / V.length, ut = V.reduce((J, lt) => J + Math.pow(lt.g - et, 2), 0) / V.length, vt = V.reduce((J, lt) => J + Math.pow(lt.b - ot, 2), 0) / V.length;
    return (st + ut + vt) / 3 < n;
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
        const i = Vi(this.snappedWindow).x, s = this.snappedWindow.y - 5, o = t.measureText(this.snappedWindow.title), a = 4;
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
    if (In.isDrawingTool(this.currentTool)) {
      if (this.currentTool === T.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = In.createAnnotation(
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
    const g = Nt(n[0], n[n.length - 1]) / c, y = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (g > 0.85 || y > 5) {
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
    const i = In.createAnnotation(
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
          let bt = 0;
          for (; !this.backgroundImage && bt < 3e3; )
            await new Promise((X) => setTimeout(X, 100)), bt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, h = Math.max(0, o.padding || 0), g = this.canvas.width / c, y = this.canvas.height / c, w = t - h, C = n - h, f = i + h * 2, x = s + h * 2, p = Math.max(1, Math.round(f * c)), _ = Math.max(1, Math.round(x * c)), v = Math.max(0, w), b = Math.max(0, C), O = Math.min(g, w + f), D = Math.min(y, C + x), M = Math.max(0, O - v), V = Math.max(0, D - b), Z = Math.round(v * c), et = Math.round(b * c), ot = Math.min(
          this.canvas.width - Z,
          Math.round(M * c)
        ), st = Math.min(
          this.canvas.height - et,
          Math.round(V * c)
        ), ut = Math.round((v - w) * c), vt = Math.round((b - C) * c), ft = document.createElement("canvas");
        ft.width = p, ft.height = _;
        const J = ft.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!J)
          throw new Error("无法获取2D绘图上下文");
        J.imageSmoothingEnabled = !1, o.fillColor && (J.fillStyle = o.fillColor, J.fillRect(0, 0, p, _)), ot > 0 && st > 0 && J.drawImage(
          this.backgroundImage,
          Z,
          et,
          ot,
          st,
          ut,
          vt,
          ot,
          st
        );
        const xt = ft.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: xt,
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
            this.annotations.forEach((C, f) => {
              try {
                C.drawToScreenshot(w);
              } catch (x) {
                H.error(`[截图] 绘制标注 ${f} 失败`, x);
              }
            });
          }
          let h;
          h = r.toDataURL("image/png"), clearTimeout(a), s(h);
        } catch (h) {
          H.error("[截图] 绘制过程出错", h);
          try {
            const g = r.toDataURL("image/png");
            clearTimeout(a), s(g);
          } catch {
            clearTimeout(a), o(new Error(`渲染失败: ${h.message || h}`));
          }
        }
      }, c.onerror = (h) => {
        H.error("[截图] 图像加载失败", h), clearTimeout(a), o(new Error("图像加载失败"));
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
        const { x: n, y: i, width: s, height: o } = this.selectionRect, a = await E("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), h = Math.round(s * r), g = Math.round(o * r), y = Math.round(a.x + window.innerWidth * r), w = Math.round(a.y + window.innerHeight * r), C = t === "ocr" ? Math.min(Math.max(h, 760), Math.max(360, y - a.x)) : h, f = t === "ocr" ? Math.min(Math.max(g, 520), Math.max(260, w - a.y)) : g, x = t === "ocr" ? Math.round(l - Math.max(0, C - h) / 2) : l, p = t === "ocr" ? Math.max(a.x, Math.min(x, y - C)) : l, _ = t === "ocr" ? Math.max(a.y, Math.min(c, w - f)) : c, v = {}, b = await this.cropFromBackground(n, i, s, o, v);
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
          new Ln("screenshot").close();
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
        const h = await createImageBitmap(c);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = h;
        const y = new OffscreenCanvas(s, s).getContext("2d");
        if (y) {
          y.drawImage(h, 0, 0, s, s);
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
        const { x: r, y: l, width: c, height: h } = this.selectionRect, g = window.devicePixelRatio || 1, y = c * g, w = h * g, C = this.canvasPool.acquire(y, w), f = C.getContext("2d");
        if (!f)
          throw this.canvasPool.release(C), new Error("无法创建临时canvas");
        const x = r * g, p = l * g, _ = performance.now();
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
        const v = performance.now(), { recognizeFromCanvas: b } = await Ie.loadOCR();
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
        H.info("[OCR] 识别耗时统计", M), Wt.log("[OCR] recognition timing", M);
        const V = D.blocks, Z = performance.now(), et = Fo(V);
        o = Math.round(performance.now() - Z);
        const ot = et.map((N) => N.text).join(`

`), st = {
          rawLineCount: V.length,
          paragraphCount: et.length,
          durationMs: o,
          paragraphs: et.map((N, ct) => ({
            index: ct,
            text: N.text,
            blockCount: N.blocks.length,
            isCodeBlock: !!N.isCodeBlock,
            isStructuredBlock: !!N.isStructuredBlock,
            bbox: N.bbox,
            sourceBlocks: N.blocks.map((gt) => ({
              text: gt.text,
              x: gt.x,
              y: gt.y,
              width: gt.width,
              height: gt.height
            }))
          }))
        };
        if (H.info("[OCR] 版面重组完成", st), Wt.log("[OCR] layout reflow complete", st), !ot || !ot.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ut = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Ae(ot));
        const vt = (N) => {
          const ct = N.trim();
          return !!(ct.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !ct.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let ft = "";
        const J = Ae(ot), lt = {
          detectedLanguage: J,
          textLength: ot.trim().length,
          textPreview: ot.trim().slice(0, 500)
        };
        H.info("[OCR] 翻译语言检测完成", lt), Wt.log("[OCR] translation language detected", lt), qe(J) && (this.translationOverlay.sourceLanguage = J, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(J));
        const xt = ut === "offline" ? Ie.loadOfflineTranslator() : null, ht = (N) => N.includes("插件") && N.includes("未启用") ? N.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : N : ut === "offline" ? N.includes("未激活") || N.includes("未下载") || N.includes("运行时未安装") ? N : N.includes("超时") ? "模型加载超时，请重试" : N.includes("离线翻译暂仅支持") ? N : "离线翻译失败: " + N.substring(0, 50) : N.includes("timeout") || N.includes("超时") ? "翻译超时，请检查网络连接" : N.includes("network") || N.includes("网络") || N.includes("请求") || N.includes("令牌") ? "翻译失败，请检查网络连接" : N.trim() ? N.slice(0, 80) : "翻译失败，请检查网络连接", j = async () => {
          if (!xt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: N,
            canUseOfflineTranslation: ct,
            warmupOfflineTranslator: gt,
            getModelCacheInfo: Tt
          } = await xt, Mt = ct();
          if (this.offlineModelActivated && !Mt)
            if ((await Tt()).isCached)
              await gt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return N;
        }, bt = async (N, ct, gt) => {
          if (!N.trim())
            return N;
          if (ut === "offline") {
            if (ct !== "en" || gt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await j())(N);
          }
          return await E("translate_text", {
            text: N,
            from: ct,
            to: gt,
            engine: ut
          });
        }, X = (N) => {
          const ct = N.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(ct) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(ct);
        }, Et = async (N, ct, gt) => {
          const Tt = N.trim();
          if (!Tt || vt(Tt))
            return N;
          const Mt = N.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Mt) {
            const [, R, $, it, tt, S] = Mt, W = Ae($), mt = X($) || !qe(W) ? $ : await bt($, W, this.getAutoTargetLanguage(W)), dt = Ae(tt), Jt = qe(dt) && !vt(tt) ? await bt(tt, dt, this.getAutoTargetLanguage(dt)) : tt;
            return `${R}${mt}${it}${Jt}${S}`;
          }
          if (X(Tt))
            return N;
          const At = Ae(Tt);
          if (!qe(At))
            return N;
          const P = this.getAutoTargetLanguage(At), u = await bt(Tt, At, P), m = {
            paragraphIndex: ct,
            blockIndex: gt,
            sourceLanguage: At,
            targetLanguage: P,
            sourceText: Tt,
            translatedText: u.slice(0, 200)
          };
          return H.info("[OCR] 结构化块翻译完成", m), Wt.log("[OCR] structured block translation complete", m), u;
        }, jt = async (N, ct) => {
          const gt = performance.now(), Tt = (u) => ({
            index: ct,
            durationMs: Math.round(performance.now() - gt),
            ...u
          }), Mt = Ae(N.text), At = this.getAutoTargetLanguage(Mt), P = {
            index: ct,
            text: N.text,
            sourceLanguage: Mt,
            targetLanguage: At,
            engine: ut,
            structured: !!N.isStructuredBlock
          };
          if (H.info("[OCR] 段落翻译方向", P), Wt.log("[OCR] paragraph translation direction", P), !qe(Mt)) {
            N.translatedText = N.text;
            const u = Tt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), m = {
              index: ct,
              detectedLanguage: Mt,
              durationMs: u.durationMs,
              text: N.text
            };
            return H.warn("[OCR] 跳过不支持的段落语言", m), Wt.log("[OCR] skip unsupported paragraph language", m), u;
          }
          try {
            if (N.isStructuredBlock && N.blocks.length > 0) {
              const R = async (it, tt) => {
                const S = await Et(it.text, ct, tt);
                return it.translatedText = S, S;
              }, $ = [];
              if (ut === "offline")
                for (let it = 0; it < N.blocks.length; it += 1)
                  $.push(await R(N.blocks[it], it));
              else
                $.push(
                  ...await Promise.all(
                    N.blocks.map((it, tt) => R(it, tt))
                  )
                );
              N.translatedText = $.join(" ");
            } else if (vt(N.text) || N.isCodeBlock) {
              N.translatedText = N.text;
              const R = N.isCodeBlock ? "code_block" : "command_like_text", $ = Tt({ skipped: !0, cancelled: !1 }), it = {
                index: ct,
                reason: R,
                durationMs: $.durationMs,
                text: N.text
              };
              return H.info("[OCR] 跳过代码段翻译", it), Wt.log("[OCR] skip code paragraph translation", it), $;
            } else
              N.translatedText = await bt(
                N.text,
                Mt,
                At
              );
            const u = Tt({ skipped: !1, cancelled: !1 }), m = {
              index: ct,
              durationMs: u.durationMs,
              sourceLanguage: Mt,
              targetLanguage: At,
              engine: ut,
              structured: !!N.isStructuredBlock,
              sourceLength: N.text.length,
              translatedLength: (N.translatedText || "").length,
              translatedPreview: (N.translatedText || "").slice(0, 300)
            };
            return H.info("[OCR] 段落翻译完成", m), Wt.log("[OCR] paragraph translation complete", m), u;
          } catch (u) {
            const m = u instanceof Error ? u.message : String(u);
            if (m === "翻译已取消")
              return Tt({ skipped: !1, cancelled: !0 });
            N.translatedText = N.text;
            const R = ht(m), $ = Tt({
              skipped: !1,
              cancelled: !1,
              errorMessage: R
            }), it = {
              index: ct,
              durationMs: $.durationMs,
              sourceLanguage: Mt,
              targetLanguage: At,
              engine: ut,
              error: m,
              structured: !!N.isStructuredBlock,
              text: N.text
            };
            return H.error("[OCR] 段落翻译失败", it), Wt.log("[OCR] paragraph translation failed", it), $;
          }
        }, Ut = performance.now();
        let Lt = [];
        if (ut === "offline")
          for (let N = 0; N < et.length; N += 1) {
            const ct = await jt(et[N], N);
            if (Lt.push(ct), ct.cancelled)
              return;
            if (ct.errorMessage) {
              ft = ct.errorMessage;
              break;
            }
          }
        else {
          if (Lt = await Promise.all(
            et.map((N, ct) => jt(N, ct))
          ), Lt.some((N) => N.cancelled))
            return;
          ft = Lt.find((N) => N.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Ut);
        const St = {
          durationMs: a,
          engine: ut,
          paragraphCount: et.length,
          translatedParagraphCount: Lt.filter((N) => !N.skipped && !N.errorMessage).length,
          skippedParagraphCount: Lt.filter((N) => N.skipped).length,
          failedParagraphCount: Lt.filter((N) => !!N.errorMessage).length
        };
        H.info("[OCR] 翻译耗时统计", St), Wt.log("[OCR] translation timing", St);
        const Gt = et.map((N) => this.toDisplayParagraph(N, g)), qt = Gt.map((N) => this.toLegacyOverlayBlock(N));
        this.translationOverlay.blocks = qt, this.translationOverlay.paragraphBlocks = Gt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = ft || void 0;
        const Ft = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: V.length,
          paragraphCount: et.length,
          engine: ut
        };
        H.info("[OCR] 截图翻译总耗时统计", Ft), Wt.log("[OCR] pipeline timing", Ft), this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await Ie.loadOfflineTranslator();
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
    Ie.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var cc = {
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
function uc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function hc(e, t, n) {
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
var dc = Symbol("icon-context");
function _t(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = uc(), r = Te(dc, cc);
      return function() {
        var l = o.size, c = o.strokeWidth, h = o.strokeLinecap, g = o.strokeLinejoin, y = o.theme, w = o.fill, C = o.spin, f = hc(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: h,
          strokeLinejoin: g,
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
const fc = _t("arrow-right-up", !0, function(e) {
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
}), Li = _t("check", !0, function(e) {
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
}), Ri = _t("close", !1, function(e) {
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
}), vi = _t("copy", !0, function(e) {
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
}), gc = _t("delete-four", !1, function(e) {
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
}), zs = _t("down", !1, function(e) {
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
}), mc = _t("download", !1, function(e) {
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
}), pc = _t("font-size", !0, function(e) {
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
}), yc = _t("go-on", !0, function(e) {
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
}), Ds = _t("loading", !0, function(e) {
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
}), Xo = _t("minus", !1, function(e) {
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
}), wc = _t("more", !1, function(e) {
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
}), vc = _t("mosaic", !0, function(e) {
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
}), xc = _t("move-one", !0, function(e) {
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
}), bc = _t("picture", !0, function(e) {
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
}), Ns = _t("pin", !0, function(e) {
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
}), Ws = _t("platte", !0, function(e) {
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
}), Pi = _t("pushpin", !1, function(e) {
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
}), kc = _t("rectangle-one", !1, function(e) {
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
}), _c = _t("redo", !0, function(e) {
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
}), Sc = _t("refresh", !0, function(e) {
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
}), Cc = _t("return", !0, function(e) {
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
}), Tc = _t("round", !1, function(e) {
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
}), $s = _t("save", !0, function(e) {
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
}), Mc = _t("square", !1, function(e) {
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
}), jn = _t("text-recognition", !1, function(e) {
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
}), Ko = _t("translate", !0, function(e) {
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
}), Lc = _t("write", !0, function(e) {
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
function Rc(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Bs = typeof window < "u", He = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Pc = (e, t, n) => Ec({ l: e, k: t, s: n }), Ec = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Bt = (e) => typeof e == "number" && isFinite(e), Ac = (e) => Ji(e) === "[object Date]", qn = (e) => Ji(e) === "[object RegExp]", oi = (e) => pt(e) && Object.keys(e).length === 0, Ht = Object.assign, Ic = Object.create, kt = (e = null) => Ic(e);
let Fs;
const Un = () => Fs || (Fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : kt());
function Hs(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function js(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, s, o) => `${s}="${js(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, s, o) => `${s}='${js(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    e = e.replace(i, "$1javascript&#58;");
  }), e;
}
const zc = Object.prototype.hasOwnProperty;
function le(e, t) {
  return zc.call(e, t);
}
const zt = Array.isArray, Rt = (e) => typeof e == "function", K = (e) => typeof e == "string", Ot = (e) => typeof e == "boolean", yt = (e) => e !== null && typeof e == "object", Dc = (e) => yt(e) && Rt(e.then) && Rt(e.catch), Zo = Object.prototype.toString, Ji = (e) => Zo.call(e), pt = (e) => Ji(e) === "[object Object]", Nc = (e) => e == null ? "" : zt(e) || pt(e) && e.toString === Zo ? JSON.stringify(e, null, 2) : String(e);
function Qi(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Nn = (e) => !yt(e) || zt(e);
function Vn(e, t) {
  if (Nn(e) || Nn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      o !== "__proto__" && (yt(i[o]) && !yt(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : kt()), Nn(s[o]) || Nn(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Wc(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ei(e, t, n) {
  return { start: e, end: t };
}
const wt = {
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
}, $c = 17;
function ai(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function Bc(e) {
  throw e;
}
const ue = " ", Fc = "\r", Yt = `
`, Hc = "\u2028", jc = "\u2029";
function Uc(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (M) => t[M] === Fc && t[M + 1] === Yt, r = (M) => t[M] === Yt, l = (M) => t[M] === jc, c = (M) => t[M] === Hc, h = (M) => a(M) || r(M) || l(M) || c(M), g = () => n, y = () => i, w = () => s, C = () => o, f = (M) => a(M) || l(M) || c(M) ? Yt : t[M], x = () => f(n), p = () => f(n + o);
  function _() {
    return o = 0, h(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
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
    index: g,
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
const pe = void 0, Vc = ".", Us = "'", Yc = "tokenizer";
function Gc(e, t = {}) {
  const n = t.location !== !1, i = Uc(e), s = () => i.index(), o = () => Wc(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
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
  }, c = () => l, { onError: h } = t;
  function g(u, m, R, ...$) {
    const it = c();
    if (m.column += R, m.offset += R, h) {
      const tt = n ? Ei(it.startLoc, m) : null, S = ai(u, tt, {
        domain: Yc,
        args: $
      });
      h(S);
    }
  }
  function y(u, m, R) {
    u.endLoc = o(), u.currentType = m;
    const $ = { type: m };
    return n && ($.loc = Ei(u.startLoc, u.endLoc)), R != null && ($.value = R), $;
  }
  const w = (u) => y(
    u,
    13
    /* TokenTypes.EOF */
  );
  function C(u, m) {
    return u.currentChar() === m ? (u.next(), m) : (g(wt.EXPECTED_TOKEN, o(), 0, m), "");
  }
  function f(u) {
    let m = "";
    for (; u.currentPeek() === ue || u.currentPeek() === Yt; )
      m += u.currentPeek(), u.peek();
    return m;
  }
  function x(u) {
    const m = f(u);
    return u.skipToPeek(), m;
  }
  function p(u) {
    if (u === pe)
      return !1;
    const m = u.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function _(u) {
    if (u === pe)
      return !1;
    const m = u.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function v(u, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    f(u);
    const $ = p(u.currentPeek());
    return u.resetPeek(), $;
  }
  function b(u, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    f(u);
    const $ = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), it = _($);
    return u.resetPeek(), it;
  }
  function O(u, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    f(u);
    const $ = u.currentPeek() === Us;
    return u.resetPeek(), $;
  }
  function D(u, m) {
    const { currentType: R } = m;
    if (R !== 7)
      return !1;
    f(u);
    const $ = u.currentPeek() === ".";
    return u.resetPeek(), $;
  }
  function M(u, m) {
    const { currentType: R } = m;
    if (R !== 8)
      return !1;
    f(u);
    const $ = p(u.currentPeek());
    return u.resetPeek(), $;
  }
  function V(u, m) {
    const { currentType: R } = m;
    if (!(R === 7 || R === 11))
      return !1;
    f(u);
    const $ = u.currentPeek() === ":";
    return u.resetPeek(), $;
  }
  function Z(u, m) {
    const { currentType: R } = m;
    if (R !== 9)
      return !1;
    const $ = () => {
      const tt = u.currentPeek();
      return tt === "{" ? p(u.peek()) : tt === "@" || tt === "|" || tt === ":" || tt === "." || tt === ue || !tt ? !1 : tt === Yt ? (u.peek(), $()) : ot(u, !1);
    }, it = $();
    return u.resetPeek(), it;
  }
  function et(u) {
    f(u);
    const m = u.currentPeek() === "|";
    return u.resetPeek(), m;
  }
  function ot(u, m = !0) {
    const R = (it = !1, tt = "") => {
      const S = u.currentPeek();
      return S === "{" || S === "@" || !S ? it : S === "|" ? !(tt === ue || tt === Yt) : S === ue ? (u.peek(), R(!0, ue)) : S === Yt ? (u.peek(), R(!0, Yt)) : !0;
    }, $ = R();
    return m && u.resetPeek(), $;
  }
  function st(u, m) {
    const R = u.currentChar();
    return R === pe ? pe : m(R) ? (u.next(), R) : null;
  }
  function ut(u) {
    const m = u.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function vt(u) {
    return st(u, ut);
  }
  function ft(u) {
    const m = u.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function J(u) {
    return st(u, ft);
  }
  function lt(u) {
    const m = u.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function xt(u) {
    return st(u, lt);
  }
  function ht(u) {
    const m = u.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function j(u) {
    return st(u, ht);
  }
  function bt(u) {
    let m = "", R = "";
    for (; m = xt(u); )
      R += m;
    return R;
  }
  function X(u) {
    let m = "";
    for (; ; ) {
      const R = u.currentChar();
      if (R === "{" || R === "}" || R === "@" || R === "|" || !R)
        break;
      if (R === ue || R === Yt)
        if (ot(u))
          m += R, u.next();
        else {
          if (et(u))
            break;
          m += R, u.next();
        }
      else
        m += R, u.next();
    }
    return m;
  }
  function Et(u) {
    x(u);
    let m = "", R = "";
    for (; m = J(u); )
      R += m;
    const $ = u.currentChar();
    if ($ && $ !== "}" && $ !== pe && $ !== ue && $ !== Yt && $ !== "　") {
      const it = Ft(u);
      return g(wt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, R + it), R + it;
    }
    return u.currentChar() === pe && g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), R;
  }
  function jt(u) {
    x(u);
    let m = "";
    return u.currentChar() === "-" ? (u.next(), m += `-${bt(u)}`) : m += bt(u), u.currentChar() === pe && g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), m;
  }
  function Ut(u) {
    return u !== Us && u !== Yt;
  }
  function Lt(u) {
    x(u), C(u, "'");
    let m = "", R = "";
    for (; m = st(u, Ut); )
      m === "\\" ? R += St(u) : R += m;
    const $ = u.currentChar();
    return $ === Yt || $ === pe ? (g(wt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), $ === Yt && (u.next(), C(u, "'")), R) : (C(u, "'"), R);
  }
  function St(u) {
    const m = u.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return u.next(), `\\${m}`;
      case "u":
        return Gt(u, m, 4);
      case "U":
        return Gt(u, m, 6);
      default:
        return g(wt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, m), "";
    }
  }
  function Gt(u, m, R) {
    C(u, m);
    let $ = "";
    for (let it = 0; it < R; it++) {
      const tt = j(u);
      if (!tt) {
        g(wt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${m}${$}${u.currentChar()}`);
        break;
      }
      $ += tt;
    }
    return `\\${m}${$}`;
  }
  function qt(u) {
    return u !== "{" && u !== "}" && u !== ue && u !== Yt;
  }
  function Ft(u) {
    x(u);
    let m = "", R = "";
    for (; m = st(u, qt); )
      R += m;
    return R;
  }
  function N(u) {
    let m = "", R = "";
    for (; m = vt(u); )
      R += m;
    return R;
  }
  function ct(u) {
    const m = (R) => {
      const $ = u.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === ue ? R : (R += $, u.next(), m(R));
    };
    return m("");
  }
  function gt(u) {
    x(u);
    const m = C(
      u,
      "|"
      /* TokenChars.Pipe */
    );
    return x(u), m;
  }
  function Tt(u, m) {
    let R = null;
    switch (u.currentChar()) {
      case "{":
        return m.braceNest >= 1 && g(wt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), u.next(), R = y(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), x(u), m.braceNest++, R;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && g(wt.EMPTY_PLACEHOLDER, o(), 0), u.next(), R = y(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && x(u), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), R;
      case "@":
        return m.braceNest > 0 && g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), R = Mt(u, m) || w(m), m.braceNest = 0, R;
      default: {
        let it = !0, tt = !0, S = !0;
        if (et(u))
          return m.braceNest > 0 && g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), R = y(m, 1, gt(u)), m.braceNest = 0, m.inLinked = !1, R;
        if (m.braceNest > 0 && (m.currentType === 4 || m.currentType === 5 || m.currentType === 6))
          return g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), m.braceNest = 0, At(u, m);
        if (it = v(u, m))
          return R = y(m, 4, Et(u)), x(u), R;
        if (tt = b(u, m))
          return R = y(m, 5, jt(u)), x(u), R;
        if (S = O(u, m))
          return R = y(m, 6, Lt(u)), x(u), R;
        if (!it && !tt && !S)
          return R = y(m, 12, Ft(u)), g(wt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, R.value), x(u), R;
        break;
      }
    }
    return R;
  }
  function Mt(u, m) {
    const { currentType: R } = m;
    let $ = null;
    const it = u.currentChar();
    switch ((R === 7 || R === 8 || R === 11 || R === 9) && (it === Yt || it === ue) && g(wt.INVALID_LINKED_FORMAT, o(), 0), it) {
      case "@":
        return u.next(), $ = y(
          m,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, $;
      case ".":
        return x(u), u.next(), y(
          m,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return x(u), u.next(), y(
          m,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return et(u) ? ($ = y(m, 1, gt(u)), m.braceNest = 0, m.inLinked = !1, $) : D(u, m) || V(u, m) ? (x(u), Mt(u, m)) : M(u, m) ? (x(u), y(m, 11, N(u))) : Z(u, m) ? (x(u), it === "{" ? Tt(u, m) || $ : y(m, 10, ct(u))) : (R === 7 && g(wt.INVALID_LINKED_FORMAT, o(), 0), m.braceNest = 0, m.inLinked = !1, At(u, m));
    }
  }
  function At(u, m) {
    let R = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return Tt(u, m) || w(m);
    if (m.inLinked)
      return Mt(u, m) || w(m);
    switch (u.currentChar()) {
      case "{":
        return Tt(u, m) || w(m);
      case "}":
        return g(wt.UNBALANCED_CLOSING_BRACE, o(), 0), u.next(), y(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Mt(u, m) || w(m);
      default: {
        if (et(u))
          return R = y(m, 1, gt(u)), m.braceNest = 0, m.inLinked = !1, R;
        if (ot(u))
          return y(m, 0, X(u));
        break;
      }
    }
    return R;
  }
  function P() {
    const { currentType: u, offset: m, startLoc: R, endLoc: $ } = l;
    return l.lastType = u, l.lastOffset = m, l.lastStartLoc = R, l.lastEndLoc = $, l.offset = s(), l.startLoc = o(), i.currentChar() === pe ? y(
      l,
      13
      /* TokenTypes.EOF */
    ) : At(i, l);
  }
  return {
    nextToken: P,
    currentOffset: s,
    currentPosition: o,
    context: c
  };
}
const Xc = "parser", Kc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Zc(e, t, n) {
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
function qc(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(p, _, v, b, ...O) {
    const D = p.currentPosition();
    if (D.offset += b, D.column += b, n) {
      const M = t ? Ei(v, D) : null, V = ai(_, M, {
        domain: Xc,
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
    return D.value = _.replace(Kc, Zc), p.nextToken(), o(D, p.currentOffset(), p.currentPosition()), D;
  }
  function h(p) {
    const _ = p.nextToken(), v = p.context(), { lastOffset: b, lastStartLoc: O } = v, D = s(8, b, O);
    return _.type !== 11 ? (i(p, wt.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), D.value = "", o(D, b, O), {
      nextConsumeToken: _,
      node: D
    }) : (_.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, he(_)), D.value = _.value || "", o(D, p.currentOffset(), p.currentPosition()), {
      node: D
    });
  }
  function g(p, _) {
    const v = p.context(), b = s(7, v.offset, v.startLoc);
    return b.value = _, o(b, p.currentOffset(), p.currentPosition()), b;
  }
  function y(p) {
    const _ = p.context(), v = s(6, _.offset, _.startLoc);
    let b = p.nextToken();
    if (b.type === 8) {
      const O = h(p);
      v.modifier = O.node, b = O.nextConsumeToken || p.nextToken();
    }
    switch (b.type !== 9 && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), b = p.nextToken(), b.type === 2 && (b = p.nextToken()), b.type) {
      case 10:
        b.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), v.key = g(p, b.value || "");
        break;
      case 4:
        b.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), v.key = l(p, b.value || "");
        break;
      case 5:
        b.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), v.key = r(p, b.value || "");
        break;
      case 6:
        b.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(b)), v.key = c(p, b.value || "");
        break;
      default: {
        i(p, wt.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
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
      const Z = D || p.nextToken();
      switch (D = null, Z.type) {
        case 0:
          Z.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(Z)), O.items.push(a(p, Z.value || ""));
          break;
        case 5:
          Z.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(Z)), O.items.push(r(p, Z.value || ""));
          break;
        case 4:
          Z.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(Z)), O.items.push(l(p, Z.value || ""));
          break;
        case 6:
          Z.value == null && i(p, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(Z)), O.items.push(c(p, Z.value || ""));
          break;
        case 7: {
          const et = y(p);
          O.items.push(et.node), D = et.nextConsumeToken || null;
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
    return D && i(p, wt.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), o(M, p.currentOffset(), p.currentPosition()), M;
  }
  function f(p) {
    const _ = p.context(), { offset: v, startLoc: b } = _, O = w(p);
    return _.currentType === 13 ? O : C(p, v, b, O);
  }
  function x(p) {
    const _ = Gc(p, Ht({}, e)), v = _.context(), b = s(0, v.offset, v.startLoc);
    return t && b.loc && (b.loc.source = p), b.body = f(_), e.onCacheKey && (b.cacheKey = e.onCacheKey(p)), v.currentType !== 13 && i(_, wt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, p[v.offset] || ""), o(b, _.currentOffset(), _.currentPosition()), b;
  }
  return { parse: x };
}
function he(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Jc(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function Vs(e, t) {
  for (let n = 0; n < e.length; n++)
    ts(e[n], t);
}
function ts(e, t) {
  switch (e.type) {
    case 1:
      Vs(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Vs(e.items, t);
      break;
    case 6: {
      ts(e.key, t), t.helper(
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
function Qc(e, t = {}) {
  const n = Jc(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ts(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function tu(e) {
  const t = e.body;
  return t.type === 2 ? Ys(t) : t.cases.forEach((n) => Ys(n)), e;
}
function Ys(e) {
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
      e.static = Qi(t);
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
function eu(e, t) {
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
  function h(f = !0) {
    const x = ++a.indentLevel;
    f && c(x);
  }
  function g(f = !0) {
    const x = --a.indentLevel;
    f && c(x);
  }
  function y() {
    c(a.indentLevel);
  }
  return {
    context: r,
    push: l,
    indent: h,
    deindent: g,
    newline: y,
    helper: (f) => `_${f}`,
    needIndent: () => a.needIndent
  };
}
function nu(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tn(e, t.key), t.modifier ? (e.push(", "), tn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function iu(e, t) {
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
function su(e, t) {
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
function ou(e, t) {
  t.body ? tn(e, t.body) : e.push("null");
}
function tn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ou(e, t);
      break;
    case 1:
      su(e, t);
      break;
    case 2:
      iu(e, t);
      break;
    case 6:
      nu(e, t);
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
const au = (e, t = {}) => {
  const n = K(t.mode) ? t.mode : "normal", i = K(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], r = eu(e, {
    filename: i,
    breakLineCode: s,
    needIndent: o
  });
  r.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), r.indent(o), a.length > 0 && (r.push(`const { ${Qi(a.map((h) => `${h}: _${h}`), ", ")} } = ctx`), r.newline()), r.push("return "), tn(r, e), r.deindent(o), r.push("}"), delete e.helpers;
  const { code: l, map: c } = r.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function ru(e, t = {}) {
  const n = Ht({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = qc(n).parse(e);
  return i ? (o && tu(r), s && Je(r), { ast: r, code: "" }) : (Qc(r, n), au(r, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function lu() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Un().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function me(e) {
  return yt(e) && es(e) === 0 && (le(e, "b") || le(e, "body"));
}
const qo = ["b", "body"];
function cu(e) {
  return Le(e, qo);
}
const Jo = ["c", "cases"];
function uu(e) {
  return Le(e, Jo, []);
}
const Qo = ["s", "static"];
function hu(e) {
  return Le(e, Qo);
}
const ta = ["i", "items"];
function du(e) {
  return Le(e, ta, []);
}
const ea = ["t", "type"];
function es(e) {
  return Le(e, ea);
}
const na = ["v", "value"];
function Wn(e, t) {
  const n = Le(e, na);
  if (n != null)
    return n;
  throw _n(t);
}
const ia = ["m", "modifier"];
function fu(e) {
  return Le(e, ia);
}
const sa = ["k", "key"];
function gu(e) {
  const t = Le(e, sa);
  if (t)
    return t;
  throw _n(
    6
    /* NodeTypes.Linked */
  );
}
function Le(e, t, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (le(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const oa = [
  ...qo,
  ...Jo,
  ...Qo,
  ...ta,
  ...sa,
  ...ia,
  ...na,
  ...ea
];
function _n(e) {
  return new Error(`unhandled node type: ${e}`);
}
function xi(e) {
  return (n) => mu(n, e);
}
function mu(e, t) {
  const n = cu(t);
  if (n == null)
    throw _n(
      0
      /* NodeTypes.Resource */
    );
  if (es(n) === 1) {
    const o = uu(n);
    return e.plural(o.reduce((a, r) => [
      ...a,
      Gs(e, r)
    ], []));
  } else
    return Gs(e, n);
}
function Gs(e, t) {
  const n = hu(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = du(t).reduce((s, o) => [...s, Ai(e, o)], []);
    return e.normalize(i);
  }
}
function Ai(e, t) {
  const n = es(t);
  switch (n) {
    case 3:
      return Wn(t, n);
    case 9:
      return Wn(t, n);
    case 4: {
      const i = t;
      if (le(i, "k") && i.k)
        return e.interpolate(e.named(i.k));
      if (le(i, "key") && i.key)
        return e.interpolate(e.named(i.key));
      throw _n(n);
    }
    case 5: {
      const i = t;
      if (le(i, "i") && Bt(i.i))
        return e.interpolate(e.list(i.i));
      if (le(i, "index") && Bt(i.index))
        return e.interpolate(e.list(i.index));
      throw _n(n);
    }
    case 6: {
      const i = t, s = fu(i), o = gu(i);
      return e.linked(Ai(e, o), s ? Ai(e, s) : void 0, e.type);
    }
    case 7:
      return Wn(t, n);
    case 8:
      return Wn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const pu = (e) => e;
let $n = kt();
function yu(e, t = {}) {
  let n = !1;
  const i = t.onError || Bc;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...ru(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function wu(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && K(e)) {
    Ot(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || pu)(e), s = $n[i];
    if (s)
      return s;
    const { ast: o, detectError: a } = yu(e, {
      ...t,
      location: !1,
      jit: !0
    }), r = xi(o);
    return a ? r : $n[i] = r;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = $n[n];
      return i || ($n[n] = xi(e));
    } else
      return xi(e);
  }
}
const we = {
  INVALID_ARGUMENT: $c,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, vu = 24;
function ve(e) {
  return ai(e, null, void 0);
}
function ns(e, t) {
  return t.locale != null ? Xs(t.locale) : Xs(e.locale);
}
let bi;
function Xs(e) {
  if (K(e))
    return e;
  if (Rt(e)) {
    if (e.resolvedOnce && bi != null)
      return bi;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Dc(t))
        throw ve(we.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return bi = t;
    } else
      throw ve(we.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ve(we.NOT_SUPPORT_LOCALE_TYPE);
}
function xu(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...zt(t) ? t : yt(t) ? Object.keys(t) : K(t) ? [t] : [n]
  ])];
}
function aa(e, t, n) {
  const i = K(n) ? n : Jn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; zt(a); )
      a = Ks(o, a, t);
    const r = zt(t) || !pt(t) ? t : t.default ? t.default : null;
    a = K(r) ? [r] : r, zt(a) && Ks(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function Ks(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && Ot(i); s++) {
    const o = t[s];
    K(o) && (i = bu(e, t[s], n));
  }
  return i;
}
function bu(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = ku(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function ku(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (zt(n) || pt(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const Re = [];
Re[
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
Re[
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
Re[
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
Re[
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
Re[
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
Re[
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
Re[
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
const _u = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Su(e) {
  return _u.test(e);
}
function Cu(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Tu(e) {
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
function Mu(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Su(t) ? Cu(t) : "*" + t;
}
function Lu(e) {
  const t = [];
  let n = -1, i = 0, s = 0, o, a, r, l, c, h, g;
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
      if (s = 0, a === void 0 || (a = Mu(a), a === !1))
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
      if (l = Tu(o), g = Re[i], c = g[l] || g.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (h = y[c[1]], h && (r = o, h() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const Zs = /* @__PURE__ */ new Map();
function Ru(e, t) {
  return yt(e) ? e[t] : null;
}
function Pu(e, t) {
  if (!yt(e))
    return null;
  let n = Zs.get(t);
  if (n || (n = Lu(t), n && Zs.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = n[o];
    if (oa.includes(a) && me(s))
      return null;
    const r = s[a];
    if (r === void 0 || Rt(s))
      return null;
    s = r, o++;
  }
  return s;
}
const Eu = "11.2.2", ri = -1, Jn = "en-US", qs = "", Js = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Au() {
  return {
    upper: (e, t) => t === "text" && K(e) ? e.toUpperCase() : t === "vnode" && yt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && K(e) ? e.toLowerCase() : t === "vnode" && yt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && K(e) ? Js(e) : t === "vnode" && yt(e) && "__v_isVNode" in e ? Js(e.children) : e
  };
}
let ra;
function Iu(e) {
  ra = e;
}
let la;
function Ou(e) {
  la = e;
}
let ca;
function zu(e) {
  ca = e;
}
let ua = null;
const Qs = (e) => {
  ua = e;
}, Du = () => ua;
let to = 0;
function Nu(e = {}) {
  const t = Rt(e.onWarn) ? e.onWarn : Rc, n = K(e.version) ? e.version : Eu, i = K(e.locale) || Rt(e.locale) ? e.locale : Jn, s = Rt(i) ? Jn : i, o = zt(e.fallbackLocale) || pt(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = pt(e.messages) ? e.messages : ki(s), r = pt(e.datetimeFormats) ? e.datetimeFormats : ki(s), l = pt(e.numberFormats) ? e.numberFormats : ki(s), c = Ht(kt(), e.modifiers, Au()), h = e.pluralRules || kt(), g = Rt(e.missing) ? e.missing : null, y = Ot(e.missingWarn) || qn(e.missingWarn) ? e.missingWarn : !0, w = Ot(e.fallbackWarn) || qn(e.fallbackWarn) ? e.fallbackWarn : !0, C = !!e.fallbackFormat, f = !!e.unresolving, x = Rt(e.postTranslation) ? e.postTranslation : null, p = pt(e.processor) ? e.processor : null, _ = Ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter, b = Rt(e.messageCompiler) ? e.messageCompiler : ra, O = Rt(e.messageResolver) ? e.messageResolver : la || Ru, D = Rt(e.localeFallbacker) ? e.localeFallbacker : ca || xu, M = yt(e.fallbackContext) ? e.fallbackContext : void 0, V = e, Z = yt(V.__datetimeFormatters) ? V.__datetimeFormatters : /* @__PURE__ */ new Map(), et = yt(V.__numberFormatters) ? V.__numberFormatters : /* @__PURE__ */ new Map(), ot = yt(V.__meta) ? V.__meta : {};
  to++;
  const st = {
    version: n,
    cid: to,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: h,
    missing: g,
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
  return st.datetimeFormats = r, st.numberFormats = l, st.__datetimeFormatters = Z, st.__numberFormatters = et, st;
}
const ki = (e) => ({ [e]: kt() });
function is(e, t, n, i, s) {
  const { missing: o, onWarn: a } = e;
  if (o !== null) {
    const r = o(e, n, t, s);
    return K(r) ? r : t;
  } else
    return t;
}
function dn(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Wu(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function $u(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (Wu(e, t[i]))
      return !0;
  return !1;
}
function eo(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e, [l, c, h, g] = Ii(...t), y = Ot(h.missingWarn) ? h.missingWarn : e.missingWarn;
  Ot(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn;
  const w = !!h.part, C = ns(e, h), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!K(l) || l === "")
    return new Intl.DateTimeFormat(C, g).format(c);
  let x = {}, p, _ = null;
  const v = "datetime format";
  for (let D = 0; D < f.length && (p = f[D], x = n[p] || {}, _ = x[l], !pt(_)); D++)
    is(e, l, p, y, v);
  if (!pt(_) || !K(p))
    return i ? ri : l;
  let b = `${p}__${l}`;
  oi(g) || (b = `${b}__${JSON.stringify(g)}`);
  let O = r.get(b);
  return O || (O = new Intl.DateTimeFormat(p, Ht({}, _, g)), r.set(b, O)), w ? O.formatToParts(c) : O.format(c);
}
const ha = [
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
function Ii(...e) {
  const [t, n, i, s] = e, o = kt();
  let a = kt(), r;
  if (K(t)) {
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
  } else if (Ac(t)) {
    if (isNaN(t.getTime()))
      throw ve(we.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (Bt(t))
    r = t;
  else
    throw ve(we.INVALID_ARGUMENT);
  return K(n) ? o.key = n : pt(n) && Object.keys(n).forEach((l) => {
    ha.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), K(i) ? o.locale = i : pt(i) && (a = i), pt(s) && (a = s), [o.key || "", r, o, a];
}
function no(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function io(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e, [l, c, h, g] = Oi(...t), y = Ot(h.missingWarn) ? h.missingWarn : e.missingWarn;
  Ot(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn;
  const w = !!h.part, C = ns(e, h), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!K(l) || l === "")
    return new Intl.NumberFormat(C, g).format(c);
  let x = {}, p, _ = null;
  const v = "number format";
  for (let D = 0; D < f.length && (p = f[D], x = n[p] || {}, _ = x[l], !pt(_)); D++)
    is(e, l, p, y, v);
  if (!pt(_) || !K(p))
    return i ? ri : l;
  let b = `${p}__${l}`;
  oi(g) || (b = `${b}__${JSON.stringify(g)}`);
  let O = r.get(b);
  return O || (O = new Intl.NumberFormat(p, Ht({}, _, g)), r.set(b, O)), w ? O.formatToParts(c) : O.format(c);
}
const da = [
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
function Oi(...e) {
  const [t, n, i, s] = e, o = kt();
  let a = kt();
  if (!Bt(t))
    throw ve(we.INVALID_ARGUMENT);
  const r = t;
  return K(n) ? o.key = n : pt(n) && Object.keys(n).forEach((l) => {
    da.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), K(i) ? o.locale = i : pt(i) && (a = i), pt(s) && (a = s), [o.key || "", r, o, a];
}
function so(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const Bu = (e) => e, Fu = (e) => "", Hu = "text", ju = (e) => e.length === 0 ? "" : Qi(e), Uu = Nc;
function oo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Vu(e) {
  const t = Bt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Bt(e.named.count) || Bt(e.named.n)) ? Bt(e.named.count) ? e.named.count : Bt(e.named.n) ? e.named.n : t : t;
}
function Yu(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Gu(e = {}) {
  const t = e.locale, n = Vu(e), i = yt(e.pluralRules) && K(t) && Rt(e.pluralRules[t]) ? e.pluralRules[t] : oo, s = yt(e.pluralRules) && K(t) && Rt(e.pluralRules[t]) ? oo : void 0, o = (p) => p[i(n, p.length, s)], a = e.list || [], r = (p) => a[p], l = e.named || kt();
  Bt(e.pluralIndex) && Yu(n, l);
  const c = (p) => l[p];
  function h(p, _) {
    const v = Rt(e.messages) ? e.messages(p, !!_) : yt(e.messages) ? e.messages[p] : !1;
    return v || (e.parent ? e.parent.message(p) : Fu);
  }
  const g = (p) => e.modifiers ? e.modifiers[p] : Bu, y = pt(e.processor) && Rt(e.processor.normalize) ? e.processor.normalize : ju, w = pt(e.processor) && Rt(e.processor.interpolate) ? e.processor.interpolate : Uu, C = pt(e.processor) && K(e.processor.type) ? e.processor.type : Hu, x = {
    list: r,
    named: c,
    plural: o,
    linked: (p, ..._) => {
      const [v, b] = _;
      let O = "text", D = "";
      _.length === 1 ? yt(v) ? (D = v.modifier || D, O = v.type || O) : K(v) && (D = v || D) : _.length === 2 && (K(v) && (D = v || D), K(b) && (O = b || O));
      const M = h(p, !0)(x), V = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && zt(M) && D ? M[0] : M
      );
      return D ? g(D)(V, O) : V;
    },
    message: h,
    type: C,
    interpolate: w,
    normalize: y,
    values: Ht(kt(), a, l)
  };
  return x;
}
const ao = () => "", xe = (e) => Rt(e);
function ro(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = zi(...t), h = Ot(c.missingWarn) ? c.missingWarn : e.missingWarn, g = Ot(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, y = Ot(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, w = !!c.resolvedMessage, C = K(c.default) || Ot(c.default) ? Ot(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, f = n || C != null && (K(C) || Rt(C)), x = ns(e, c);
  y && Xu(c);
  let [p, _, v] = w ? [
    l,
    x,
    r[x] || kt()
  ] : fa(e, l, x, a, g, h), b = p, O = l;
  if (!w && !(K(b) || me(b) || xe(b)) && f && (b = C, O = b), !w && (!(K(b) || me(b) || xe(b)) || !K(_)))
    return s ? ri : l;
  let D = !1;
  const M = () => {
    D = !0;
  }, V = xe(b) ? b : ga(e, l, _, b, O, M);
  if (D)
    return b;
  const Z = qu(e, _, v, c), et = Gu(Z), ot = Ku(e, V, et);
  let st = i ? i(ot, l) : ot;
  return y && K(st) && (st = Oc(st)), st;
}
function Xu(e) {
  zt(e.list) ? e.list = e.list.map((t) => K(t) ? Hs(t) : t) : yt(e.named) && Object.keys(e.named).forEach((t) => {
    K(e.named[t]) && (e.named[t] = Hs(e.named[t]));
  });
}
function fa(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, h = c(e, i, n);
  let g = kt(), y, w = null;
  const C = "translate";
  for (let f = 0; f < h.length && (y = h[f], g = a[y] || kt(), (w = l(g, t)) === null && (w = g[t]), !(K(w) || me(w) || xe(w))); f++)
    if (!$u(y, h)) {
      const x = is(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        y,
        o,
        C
      );
      x !== t && (w = x);
    }
  return [w, y, g];
}
function ga(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (xe(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => i;
    return c.locale = n, c.key = t, c;
  }
  const l = a(i, Zu(e, n, s, i, r, o));
  return l.locale = n, l.key = t, l.source = i, l;
}
function Ku(e, t, n) {
  return t(n);
}
function zi(...e) {
  const [t, n, i] = e, s = kt();
  if (!K(t) && !Bt(t) && !xe(t) && !me(t))
    throw ve(we.INVALID_ARGUMENT);
  const o = Bt(t) ? String(t) : (xe(t), t);
  return Bt(n) ? s.plural = n : K(n) ? s.default = n : pt(n) && !oi(n) ? s.named = n : zt(n) && (s.list = n), Bt(i) ? s.plural = i : K(i) ? s.default = i : pt(i) && Ht(s, i), [o, s];
}
function Zu(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => Pc(t, n, a)
  };
}
function qu(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: h } = e, y = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (w, C) => {
      let f = a(n, w);
      if (f == null && (h || C)) {
        const [, , x] = fa(
          h || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          w,
          t,
          r,
          l,
          c
        );
        f = a(x, w);
      }
      if (K(f) || me(f)) {
        let x = !1;
        const _ = ga(e, w, t, f, w, () => {
          x = !0;
        });
        return x ? ao : _;
      } else return xe(f) ? f : ao;
    }
  };
  return e.processor && (y.processor = e.processor), i.list && (y.list = i.list), i.named && (y.named = i.named), Bt(i.plural) && (y.pluralIndex = i.plural), y;
}
lu();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ju = "11.2.2";
function Qu() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Un().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Un().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Un().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const en = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: vu,
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
function Sn(e, ...t) {
  return ai(e, null, void 0);
}
const Di = /* @__PURE__ */ He("__translateVNode"), Ni = /* @__PURE__ */ He("__datetimeParts"), Wi = /* @__PURE__ */ He("__numberParts"), th = He("__setPluralRules"), ma = /* @__PURE__ */ He("__injectWithOption"), $i = /* @__PURE__ */ He("__dispose");
function Cn(e) {
  if (!yt(e) || me(e))
    return e;
  for (const t in e)
    if (le(e, t))
      if (!t.includes("."))
        yt(e[t]) && Cn(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = kt()), !yt(s[n[a]])) {
            o = !0;
            break;
          }
          s = s[n[a]];
        }
        if (o || (me(s) ? oa.includes(n[i]) || delete e[t] : (s[n[i]] = e[t], delete e[t])), !me(s)) {
          const a = s[n[i]];
          yt(a) && Cn(a);
        }
      }
  return e;
}
function pa(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = pt(n) ? n : zt(i) ? kt() : { [e]: kt() };
  if (zt(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || kt(), Vn(c, a[l])) : Vn(c, a);
    } else
      K(r) && Vn(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      le(a, r) && Cn(a[r]);
  return a;
}
function eh(e) {
  return e.type;
}
function nh(e, t, n) {
  let i = yt(t.messages) ? t.messages : kt();
  "__i18nGlobal" in n && (i = pa(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, i[o]);
  });
  {
    if (yt(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (yt(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function lo(e) {
  return k(ur, null, e, 0);
}
function ya() {
  return "currentInstance" in pi ? pi["currentInstance"] : pi.getCurrentInstance();
}
const co = () => [], ih = () => !1;
let uo = 0;
function ho(e) {
  return (t, n, i, s) => e(n, i, ya() || void 0, s);
}
function sh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = Bs ? Q : cr;
  let a = Ot(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : K(e.locale) ? e.locale : Jn
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : K(e.fallbackLocale) || zt(e.fallbackLocale) || pt(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(pa(r.value, e)), h = o(pt(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), g = o(pt(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let y = t ? t.missingWarn : Ot(e.missingWarn) || qn(e.missingWarn) ? e.missingWarn : !0, w = t ? t.fallbackWarn : Ot(e.fallbackWarn) || qn(e.fallbackWarn) ? e.fallbackWarn : !0, C = t ? t.fallbackRoot : Ot(e.fallbackRoot) ? e.fallbackRoot : !0, f = !!e.fallbackFormat, x = Rt(e.missing) ? e.missing : null, p = Rt(e.missing) ? ho(e.missing) : null, _ = Rt(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : Ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const O = t ? t.modifiers : pt(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || t && t.pluralRules, M;
  M = (() => {
    i && Qs(null);
    const S = {
      version: Ju,
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
    S.datetimeFormats = h.value, S.numberFormats = g.value, S.__datetimeFormatters = pt(M) ? M.__datetimeFormatters : void 0, S.__numberFormatters = pt(M) ? M.__numberFormatters : void 0;
    const W = Nu(S);
    return i && Qs(W), W;
  })(), dn(M, r.value, l.value);
  function Z() {
    return [
      r.value,
      l.value,
      c.value,
      h.value,
      g.value
    ];
  }
  const et = Y({
    get: () => r.value,
    set: (S) => {
      M.locale = S, r.value = S;
    }
  }), ot = Y({
    get: () => l.value,
    set: (S) => {
      M.fallbackLocale = S, l.value = S, dn(M, r.value, S);
    }
  }), st = Y(() => c.value), ut = /* @__PURE__ */ Y(() => h.value), vt = /* @__PURE__ */ Y(() => g.value);
  function ft() {
    return Rt(_) ? _ : null;
  }
  function J(S) {
    _ = S, M.postTranslation = S;
  }
  function lt() {
    return x;
  }
  function xt(S) {
    S !== null && (p = ho(S)), x = S, M.missing = p;
  }
  const ht = (S, W, mt, dt, Jt, Ve) => {
    Z();
    let be;
    try {
      i || (M.fallbackContext = t ? Du() : void 0), be = S(M);
    } finally {
      i || (M.fallbackContext = void 0);
    }
    if (mt !== "translate exists" && // for not `te` (e.g `t`)
    Bt(be) && be === ri || mt === "translate exists" && !be) {
      const [di, Pn] = W();
      return t && C ? dt(t) : Jt(di);
    } else {
      if (Ve(be))
        return be;
      throw Sn(en.UNEXPECTED_RETURN_TYPE);
    }
  };
  function j(...S) {
    return ht((W) => Reflect.apply(ro, null, [W, ...S]), () => zi(...S), "translate", (W) => Reflect.apply(W.t, W, [...S]), (W) => W, (W) => K(W));
  }
  function bt(...S) {
    const [W, mt, dt] = S;
    if (dt && !yt(dt))
      throw Sn(en.INVALID_ARGUMENT);
    return j(W, mt, Ht({ resolvedMessage: !0 }, dt || {}));
  }
  function X(...S) {
    return ht((W) => Reflect.apply(eo, null, [W, ...S]), () => Ii(...S), "datetime format", (W) => Reflect.apply(W.d, W, [...S]), () => qs, (W) => K(W) || zt(W));
  }
  function Et(...S) {
    return ht((W) => Reflect.apply(io, null, [W, ...S]), () => Oi(...S), "number format", (W) => Reflect.apply(W.n, W, [...S]), () => qs, (W) => K(W) || zt(W));
  }
  function jt(S) {
    return S.map((W) => K(W) || Bt(W) || Ot(W) ? lo(String(W)) : W);
  }
  const Lt = {
    normalize: jt,
    interpolate: (S) => S,
    type: "vnode"
  };
  function St(...S) {
    return ht((W) => {
      let mt;
      const dt = W;
      try {
        dt.processor = Lt, mt = Reflect.apply(ro, null, [dt, ...S]);
      } finally {
        dt.processor = null;
      }
      return mt;
    }, () => zi(...S), "translate", (W) => W[Di](...S), (W) => [lo(W)], (W) => zt(W));
  }
  function Gt(...S) {
    return ht((W) => Reflect.apply(io, null, [W, ...S]), () => Oi(...S), "number format", (W) => W[Wi](...S), co, (W) => K(W) || zt(W));
  }
  function qt(...S) {
    return ht((W) => Reflect.apply(eo, null, [W, ...S]), () => Ii(...S), "datetime format", (W) => W[Ni](...S), co, (W) => K(W) || zt(W));
  }
  function Ft(S) {
    D = S, M.pluralRules = D;
  }
  function N(S, W) {
    return ht(() => {
      if (!S)
        return !1;
      const mt = K(W) ? W : r.value, dt = Tt(mt), Jt = M.messageResolver(dt, S);
      return me(Jt) || xe(Jt) || K(Jt);
    }, () => [S], "translate exists", (mt) => Reflect.apply(mt.te, mt, [S, W]), ih, (mt) => Ot(mt));
  }
  function ct(S) {
    let W = null;
    const mt = aa(M, l.value, r.value);
    for (let dt = 0; dt < mt.length; dt++) {
      const Jt = c.value[mt[dt]] || {}, Ve = M.messageResolver(Jt, S);
      if (Ve != null) {
        W = Ve;
        break;
      }
    }
    return W;
  }
  function gt(S) {
    const W = ct(S);
    return W ?? (t ? t.tm(S) || {} : {});
  }
  function Tt(S) {
    return c.value[S] || {};
  }
  function Mt(S, W) {
    if (s) {
      const mt = { [S]: W };
      for (const dt in mt)
        le(mt, dt) && Cn(mt[dt]);
      W = mt[S];
    }
    c.value[S] = W, M.messages = c.value;
  }
  function At(S, W) {
    c.value[S] = c.value[S] || {};
    const mt = { [S]: W };
    if (s)
      for (const dt in mt)
        le(mt, dt) && Cn(mt[dt]);
    W = mt[S], Vn(W, c.value[S]), M.messages = c.value;
  }
  function P(S) {
    return h.value[S] || {};
  }
  function u(S, W) {
    h.value[S] = W, M.datetimeFormats = h.value, no(M, S, W);
  }
  function m(S, W) {
    h.value[S] = Ht(h.value[S] || {}, W), M.datetimeFormats = h.value, no(M, S, W);
  }
  function R(S) {
    return g.value[S] || {};
  }
  function $(S, W) {
    g.value[S] = W, M.numberFormats = g.value, so(M, S, W);
  }
  function it(S, W) {
    g.value[S] = Ht(g.value[S] || {}, W), M.numberFormats = g.value, so(M, S, W);
  }
  uo++, t && Bs && (De(t.locale, (S) => {
    a && (r.value = S, M.locale = S, dn(M, r.value, l.value));
  }), De(t.fallbackLocale, (S) => {
    a && (l.value = S, M.fallbackLocale = S, dn(M, r.value, l.value));
  }));
  const tt = {
    id: uo,
    locale: et,
    fallbackLocale: ot,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(S) {
      a = S, S && t && (r.value = t.locale.value, l.value = t.fallbackLocale.value, dn(M, r.value, l.value));
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
    mergeLocaleMessage: At,
    getPostTranslationHandler: ft,
    setPostTranslationHandler: J,
    getMissingHandler: lt,
    setMissingHandler: xt,
    [th]: Ft
  };
  return tt.datetimeFormats = ut, tt.numberFormats = vt, tt.rt = bt, tt.te = N, tt.tm = gt, tt.d = X, tt.n = Et, tt.getDateTimeFormat = P, tt.setDateTimeFormat = u, tt.mergeDateTimeFormat = m, tt.getNumberFormat = R, tt.setNumberFormat = $, tt.mergeNumberFormat = it, tt[ma] = n, tt[Di] = St, tt[Ni] = qt, tt[Wi] = Gt, tt;
}
const ss = {
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
function oh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Kt ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, kt());
}
function wa() {
  return Kt;
}
Ht({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Bt(e) || !isNaN(e)
  }
}, ss);
function ah(e) {
  return zt(e) && !K(e[0]);
}
function va(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = kt();
    e.locale && (a.locale = e.locale), K(e.format) ? a.key = e.format : yt(e.format) && (K(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((y, w) => n.includes(w) ? Ht(kt(), y, { [w]: e.format[w] }) : y, kt()));
    const l = i(e.value, a, r);
    let c = [a.key];
    zt(l) ? c = l.map((y, w) => {
      const C = s[y.type], f = C ? C({ [y.type]: y.value, index: w, parts: l }) : [y.value];
      return ah(f) && (f[0].key = `${y.type}-${w}`), f;
    }) : K(l) && (c = [l]);
    const h = Ht(kt(), o), g = K(e.tag) || yt(e.tag) ? e.tag : wa();
    return Po(g, h, c);
  };
}
Ht({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ss);
const rh = /* @__PURE__ */ He("global-vue-i18n");
function Rn(e = {}) {
  const t = ya();
  if (t == null)
    throw Sn(en.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Sn(en.NOT_INSTALLED);
  const n = lh(t), i = uh(n), s = eh(t), o = ch(e, s);
  if (o === "global")
    return nh(i, e, s), i;
  if (o === "parent") {
    let l = hh(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = Ht({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = sh(l), a.__composerExtend && (r[$i] = a.__composerExtend(r)), fh(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function lh(e) {
  const t = Te(e.isCE ? rh : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Sn(e.isCE ? en.NOT_INSTALLED_WITH_PROVIDE : en.UNEXPECTED_ERROR);
  return t;
}
function ch(e, t) {
  return oi(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function uh(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function hh(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = dh(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[ma] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function dh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function fh(e, t, n) {
  an(() => {
  }, t), ji(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[$i];
    s && (s(), delete i[$i]);
  }, t);
}
Ht({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ss);
Qu();
Iu(wu);
Ou(Pu);
zu(aa);
const gh = { class: "toolbar-panel first-panel" }, mh = { class: "tool-section" }, ph = ["onClick", "title", "aria-pressed"], yh = { class: "action-section" }, wh = ["disabled", "title"], vh = ["disabled", "title"], xh = ["disabled", "title"], bh = ["title"], kh = ["title"], _h = ["title"], Sh = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Ch = { class: "style-section" }, Th = {
  key: 0,
  class: "style-group"
}, Mh = { class: "style-label" }, Lh = { class: "line-width-selector" }, Rh = ["onClick", "title", "aria-pressed"], Ph = { class: "style-value" }, Eh = {
  key: 1,
  class: "style-divider"
}, Ah = {
  key: 2,
  class: "style-group opacity-group"
}, Ih = { class: "style-label" }, Oh = ["value", "title", "aria-label"], zh = { class: "style-value" }, Dh = {
  key: 3,
  class: "style-divider"
}, Nh = {
  key: 4,
  class: "style-group color-picker-group"
}, Wh = { class: "style-label" }, $h = { class: "color-row" }, Bh = ["onClick", "title", "aria-pressed"], Fh = { class: "custom-color-wrapper" }, Hh = ["title"], jh = ["value", "title", "aria-label"], Uh = {
  key: 5,
  class: "style-group"
}, Vh = { class: "style-label" }, Yh = { class: "text-size-selector" }, Gh = ["onClick", "title", "aria-pressed"], Xh = { class: "style-value" }, Kh = {
  key: 6,
  class: "style-group"
}, Zh = { class: "style-label" }, qh = { class: "mosaic-size-selector" }, Jh = ["onClick", "title", "aria-pressed"], Qh = { class: "style-value" }, td = {
  key: 7,
  class: "style-group"
}, ed = { class: "style-label" }, nd = { class: "translate-engine-selector" }, id = ["onClick", "title", "aria-pressed"], sd = /* @__PURE__ */ Dt({
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
    const i = Q(null), { t: s } = Rn(), o = e, a = n, r = Y(() => [
      { type: T.Select, icon: xc, title: s("screenshot.select") },
      { type: T.Rectangle, icon: kc, title: s("screenshot.rectangle") },
      { type: T.Ellipse, icon: Tc, title: s("screenshot.ellipse") },
      { type: T.Line, icon: Xo, title: s("screenshot.line") },
      { type: T.Arrow, icon: fc, title: s("screenshot.arrow") },
      { type: T.Pen, icon: Lc, title: s("screenshot.pen") },
      { type: T.Mosaic, icon: vc, title: s("screenshot.mosaic") },
      { type: T.Text, icon: pc, title: s("screenshot.text") },
      { type: T.ColorPicker, icon: Ws, title: s("screenshot.colorPicker") },
      { type: T.Ocr, icon: jn, title: s("screenshot.ocr") },
      { type: T.Translate, icon: Ko, title: s("screenshot.translate") },
      { type: T.Pin, icon: Pi, title: s("screenshot.pin") }
    ]), l = Y(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: s("translate.bingTranslate"), short: "B" },
      { value: "offline", label: s("translate.offlineTranslate"), short: "离" }
    ]), c = [2, 3, 5, 8], h = [
      "#ff4444",
      "#f79009",
      "#fdb022",
      "#12b76a",
      "#06b6d4",
      "#2e90fa",
      "#7a5af8",
      "#d444f1",
      "#111827"
    ], g = [12, 14, 16, 18, 20, 24], y = [8, 12, 16, 20], w = Y(() => ![T.Select, T.ColorPicker, T.Ocr, T.Pin].includes(o.currentTool)), C = Y(
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
    }, V = (j) => a("text-size-change", j), Z = (j) => a("mosaic-size-change", j), et = () => a("undo"), ot = () => a("redo"), st = () => a("delete"), ut = () => a("save"), vt = () => a("confirm"), ft = () => a("cancel"), J = (j) => {
      a("translate-engine-change", j);
    }, lt = (j) => {
      O(j);
    }, xt = (j) => {
      const bt = j.target;
      bt.value && O(bt.value);
    }, ht = () => {
      const j = i.value?.getBoundingClientRect();
      return {
        width: j?.width ?? 590,
        height: j?.height ?? 50
      };
    };
    return De(() => o.currentTool, () => {
      vn(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: ht()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: ht
    }), (j, bt) => (F(), G(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        nt(" 第一个面板：工具选择 + 操作按钮 "),
        A("div", gh, [
          nt(" 工具选择区域 "),
          A("div", mh, [
            (F(!0), G(
              Kt,
              null,
              ge(r.value, (X) => (F(), G("button", {
                key: X.type,
                onClick: (Et) => b(X.type),
                class: Ct(["tool-btn", { active: j.currentTool === X.type }]),
                title: X.title,
                "aria-pressed": j.currentTool === X.type
              }, [
                (F(), $t(Ce(X.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, ph))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          nt(" 分隔线 "),
          bt[0] || (bt[0] = A(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          nt(" 操作按钮区域 "),
          A("div", yh, [
            A("button", {
              onClick: et,
              disabled: !j.canUndo,
              class: "action-btn undo",
              title: z(s)("screenshot.undo")
            }, [
              k(z(Cc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, wh),
            A("button", {
              onClick: ot,
              disabled: !j.canRedo,
              class: "action-btn redo",
              title: z(s)("screenshot.redo")
            }, [
              k(z(yc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, vh),
            A("button", {
              onClick: st,
              disabled: !j.canDelete,
              class: "action-btn delete",
              title: z(s)("screenshot.delete")
            }, [
              k(z(gc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, xh),
            A("button", {
              onClick: ft,
              class: "action-btn cancel",
              title: z(s)("screenshot.cancel")
            }, [
              k(z(Ri), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, bh),
            A("button", {
              onClick: ut,
              class: "action-btn save",
              title: z(s)("screenshot.save")
            }, [
              k(z(mc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, kh),
            A("button", {
              onClick: vt,
              class: "action-btn confirm",
              title: z(s)("screenshot.confirm")
            }, [
              k(z(Li), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, _h)
          ])
        ]),
        nt(" 第二个面板：样式设置区域 "),
        w.value ? (F(), G("div", Sh, [
          A("div", Ch, [
            nt(" 线宽设置 "),
            C.value ? (F(), G("div", Th, [
              A(
                "span",
                Mh,
                at(z(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              A("div", Lh, [
                (F(), G(
                  Kt,
                  null,
                  ge(c, (X) => A("button", {
                    key: X,
                    onClick: (Et) => D(X),
                    class: Ct(["width-btn", { active: j.currentLineWidth === X }]),
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
                  ], 10, Rh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Ph,
                at(j.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            C.value && f.value ? (F(), G("div", Eh)) : nt("v-if", !0),
            nt(" 不透明度设置 "),
            x.value ? (F(), G("div", Ah, [
              A(
                "span",
                Ih,
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
              }, null, 44, Oh),
              A(
                "span",
                zh,
                at(Math.round(j.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            x.value && f.value ? (F(), G("div", Dh)) : nt("v-if", !0),
            nt(" 颜色设置 "),
            f.value ? (F(), G("div", Nh, [
              A(
                "span",
                Wh,
                at(z(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              A("div", $h, [
                (F(), G(
                  Kt,
                  null,
                  ge(h, (X) => A("button", {
                    key: X,
                    onClick: (Et) => lt(X),
                    class: Ct(["color-btn", { active: j.currentColor === X }]),
                    style: It({ backgroundColor: X }),
                    title: X,
                    "aria-pressed": j.currentColor === X
                  }, null, 14, Bh)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                A("div", Fh, [
                  A("button", {
                    class: Ct(["color-btn custom-color-btn", { active: !h.includes(j.currentColor) }]),
                    title: z(s)("screenshot.customColor")
                  }, [
                    k(z(Ws), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Hh),
                  A("input", {
                    type: "color",
                    onChange: xt,
                    value: j.currentColor,
                    class: "color-input-hidden",
                    title: z(s)("screenshot.customColor"),
                    "aria-label": z(s)("screenshot.customColor")
                  }, null, 40, jh)
                ])
              ])
            ])) : nt("v-if", !0),
            nt(" 文字大小设置 "),
            p.value ? (F(), G("div", Uh, [
              A(
                "span",
                Vh,
                at(z(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              A("div", Yh, [
                (F(), G(
                  Kt,
                  null,
                  ge(g, (X) => A("button", {
                    key: X,
                    onClick: (Et) => V(X),
                    class: Ct(["size-btn", { active: j.currentTextSize === X }]),
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
                  ], 10, Gh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Xh,
                at(j.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            nt(" 马赛克大小设置 "),
            _.value ? (F(), G("div", Kh, [
              A(
                "span",
                Zh,
                at(z(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              A("div", qh, [
                (F(), G(
                  Kt,
                  null,
                  ge(y, (X) => A("button", {
                    key: X,
                    onClick: (Et) => Z(X),
                    class: Ct(["size-btn", { active: j.currentMosaicSize === X }]),
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
                  ], 10, Jh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Qh,
                at(j.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            nt(" 翻译引擎选择 "),
            v.value ? (F(), G("div", td, [
              A(
                "span",
                ed,
                at(z(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              A("div", nd, [
                (F(!0), G(
                  Kt,
                  null,
                  ge(l.value, (X) => (F(), G("button", {
                    key: X.value,
                    onClick: (Et) => J(X.value),
                    class: Ct(["engine-btn", { active: j.currentTranslateEngine === X.value }]),
                    title: X.label,
                    "aria-pressed": j.currentTranslateEngine === X.value
                  }, at(X.short), 11, id))),
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
}), li = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, od = /* @__PURE__ */ li(sd, [["__scopeId", "data-v-dc3e37ec"]]), ad = {
  class: "screenshot-container",
  ref: "containerRef"
}, rd = {
  key: 0,
  class: "mask-layers"
}, ld = {
  key: 1,
  class: "mask-full"
}, cd = { class: "size-text" }, ud = {
  key: 4,
  class: "loading-overlay"
}, hd = /* @__PURE__ */ Dt({
  __name: "index",
  setup(e) {
    const t = Q(), n = Q(), i = Q(null), s = Q(null);
    let o = null;
    const a = Q(!0), r = Q(!1), l = Q(""), c = Q({ x: 0, y: 0 }), h = Q(16), g = Q(!1), y = Q("bing"), w = Q({ width: 590, height: 50 });
    let C = !1;
    const f = Q({
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
    }), x = Q(), p = Q(), _ = Q(), v = Y(() => f.value.isDrawing), b = Y(() => {
      if (!f.value.selectionRect) return {};
      const { y: P } = f.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${P}px`
      };
    }), O = Y(() => {
      if (!f.value.selectionRect) return {};
      const { y: P, height: u } = f.value.selectionRect;
      return {
        top: `${P + u}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), D = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: u, height: m } = f.value.selectionRect;
      return {
        top: `${u}px`,
        left: "0",
        width: `${P}px`,
        height: `${m}px`
      };
    }), M = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: u, width: m, height: R } = f.value.selectionRect;
      return {
        top: `${u}px`,
        left: `${P + m}px`,
        right: "0",
        height: `${R}px`
      };
    }), V = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: u, width: m, height: R } = f.value.selectionRect, $ = 10, it = 12, tt = Math.min(w.value.width, Math.max(0, window.innerWidth - $ * 2)), S = Math.min(w.value.height, Math.max(0, window.innerHeight - $ * 2)), W = Math.max($, window.innerHeight - S - $), mt = Math.max($, window.innerWidth - tt - $);
      let dt;
      return u + R + S + it <= window.innerHeight - $ ? dt = u + R + it : u - S - it >= $ ? dt = u - S - it : dt = u + R - S - $, dt = Math.min(Math.max(dt, $), W), {
        left: `${Math.min(Math.max(P + (m - tt) / 2, $), mt)}px`,
        top: `${dt}px`
      };
    }), Z = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: u, width: m, height: R } = f.value.selectionRect, $ = 10;
      let it = P - $, tt = u - $, S = "translateY(-100%)";
      return it < 10 && (it = P + m + $, S = "translateY(-100%)"), tt < 30 && (tt = u + R + $, S = "translateY(0)"), {
        left: `${it}px`,
        top: `${tt}px`,
        transform: S
      };
    }), et = Y(() => {
      if (!f.value.selectionRect) return "";
      const { width: P, height: u } = f.value.selectionRect;
      return `${Math.round(P)} × ${Math.round(u)}`;
    }), ot = Y(() => {
      const P = Ke(c.value);
      return {
        "--text-accent-color": f.value.currentStyle.color,
        left: `${P.x}px`,
        top: `${P.y}px`
      };
    }), st = (P) => {
      if (P === T.Pin && f.value.selectionRect) {
        ut();
        return;
      }
      if (P === T.Ocr && f.value.selectionRect) {
        vt();
        return;
      }
      o?.setTool(P);
    }, ut = async () => {
      try {
        await o?.createPinWindow();
      } catch (P) {
        H.error("[截图] 创建贴图失败", P);
      }
    }, vt = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (P) {
        H.error("[截图] 创建文字识别贴图失败", P);
      }
    }, ft = (P) => {
      o?.updateStyle({ color: P });
    }, J = (P) => {
      o?.updateStyle({ lineWidth: P });
    }, lt = (P) => {
      o?.updateStyle({ opacity: P });
    }, xt = (P) => {
      o?.updateTextSize(P);
    }, ht = (P) => {
      o?.updateMosaicSize(P);
    }, j = (P) => {
      y.value = P, o?.setTranslationEngine(P), o?.executeTranslation();
    }, bt = () => {
      o?.undoAnnotation();
    }, X = () => {
      o?.redoAnnotation();
    }, Et = () => {
      o?.deleteSelectedAnnotation();
    }, jt = async () => {
      try {
        await o?.processScreenshot("save"), gt();
      } catch (P) {
        const u = P?.message || P?.toString() || "保存失败";
        if (u.includes("保存已取消") || u.includes("cancelled"))
          return;
        H.error("保存截图时发生错误", u);
      }
    }, Ut = async () => {
      try {
        await o?.processScreenshot("copy"), gt();
      } catch {
      }
    }, Lt = () => {
      gt();
    };
    let St = null;
    const Gt = (P, u) => {
      if (u && u.getData().type === "text") {
        const m = u.getData();
        c.value = {
          x: m.points[0].x,
          y: m.points[0].y
        }, h.value = m.fontSize || f.value.textSize;
      } else
        c.value = P, h.value = f.value.textSize;
      r.value = !0, St = u || null, u && o?.setEditingAnnotation(u), u && u.getData().text ? l.value = u.getData().text : l.value = "", vn(() => {
        n.value?.focus(), St && n.value?.select();
      });
    }, qt = () => {
      l.value.trim() ? St ? o?.updateTextAnnotation(St, l.value) : o?.createTextAnnotation(c.value, l.value) : St && o?.deleteAnnotation(St), Ft();
    }, Ft = () => {
      r.value = !1, l.value = "", St && o?.clearEditingAnnotation(), St = null;
    }, N = (P) => {
      navigator.clipboard && navigator.clipboard.writeText(P.hex).catch((u) => {
        H.error("[截图] 复制颜色到剪贴板失败", u);
      });
    }, ct = (P) => {
      if (P.key === "Meta" || P.key === "Win" || P.altKey && P.key === "Tab" || P.altKey && P.key === "F4") {
        P.preventDefault(), P.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (P.key === "Escape") {
          Ft(), P.preventDefault();
          return;
        }
        if (P.key === "Enter") {
          qt(), P.preventDefault();
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
          gt();
          return;
        }
        P.preventDefault(), P.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(P)) {
        P.preventDefault();
        return;
      }
      const u = navigator.platform.toLowerCase().includes("mac");
      if ((u ? P.metaKey : P.ctrlKey) && P.key.toLowerCase() === "z") {
        P.shiftKey ? X() : bt(), P.preventDefault();
        return;
      }
      if (!u && P.ctrlKey && P.key.toLowerCase() === "y") {
        X(), P.preventDefault();
        return;
      }
      if (P.key === "Escape") {
        gt();
        return;
      } else if (P.key === "Delete" || P.key === "Backspace") {
        Et(), P.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(P.key) || P.preventDefault();
    }, gt = async () => {
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
        }, r.value = !1, l.value = "", St = null, g.value = !1, a.value = !0;
        try {
          await E("close_and_destroy_screenshot_window");
        } catch (P) {
          H.error("[截图] 销毁截图窗口失败，回退到 close()", P), await s.value?.close();
        } finally {
          C = !1;
        }
      }
    }, Tt = () => {
      const P = o?.getState();
      P && (f.value = P);
    }, Mt = () => {
      const P = i.value?.getToolbarSize?.();
      P && (w.value = P);
    }, At = (P) => {
      const u = P.detail;
      u && (w.value = u);
    };
    return an(async () => {
      if (t.value) {
        s.value = new Ln("screenshot"), await s.value.emit("screenshot_ready"), o = new lc(
          t.value,
          Tt,
          Gt,
          N
        );
        try {
          const P = await E("get_translation_engine");
          P && ["google", "bing", "offline"].includes(P) && (y.value = P, o?.setTranslationEngine(P));
        } catch (P) {
          H.error("[截图] 获取翻译引擎设置失败", P);
        }
        try {
          const P = await E("get_offline_model_activated");
          o?.setOfflineModelActivated(P);
        } catch (P) {
          H.error("[截图] 获取离线模型激活状态失败", P);
        }
        document.addEventListener("keydown", ct), window.addEventListener("resize", Mt), window.addEventListener("screenshot-toolbar-resize", At), p.value = await yn("background-ready", () => {
          o?.triggerBackgroundReload();
        }), _.value = await yn("screenshot-close-requested", () => {
          gt();
        }), x.value = await yn("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const P = o?.getTranslationState();
          P?.isLoading || P?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const u = o?.getTranslationState();
              if (u?.isLoading || u?.isVisible)
                return;
              gt();
            }
          }, 100);
        }), vn(Mt);
      }
    }), ji(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", ct), window.removeEventListener("resize", Mt), window.removeEventListener("screenshot-toolbar-resize", At), x.value?.(), p.value?.(), _.value?.(), x.value = void 0, p.value = void 0, _.value = void 0, s.value = null;
    }), (P, u) => (F(), G(
      "div",
      ad,
      [
        nt(" 遮罩层 "),
        f.value.selectionRect ? (F(), G("div", rd, [
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
        ])) : (F(), G("div", ld)),
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
        f.value.selectionRect && a.value ? (F(), G(
          "div",
          {
            key: 2,
            class: "size-info",
            style: It(Z.value)
          },
          [
            A(
              "span",
              cd,
              at(et.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : nt("v-if", !0),
        nt(" 工具栏 "),
        f.value.selectionRect && !v.value ? (F(), $t(od, {
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
          onColorChange: ft,
          onLineWidthChange: J,
          onOpacityChange: lt,
          onTextSizeChange: xt,
          onMosaicSizeChange: ht,
          onTranslateEngineChange: j,
          onUndo: bt,
          onRedo: X,
          onDelete: Et,
          onSave: jt,
          onConfirm: Ut,
          onCancel: Lt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : nt("v-if", !0),
        nt(" 加载提示 - 仅在初始化时显示 "),
        g.value ? (F(), G("div", ud, [
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
            at(P.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : nt("v-if", !0),
        nt(" 文字输入框 "),
        r.value ? (F(), G(
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
                "onUpdate:modelValue": u[0] || (u[0] = (m) => l.value = m),
                type: "text",
                class: "text-input",
                style: It({
                  color: f.value.currentStyle.color,
                  fontFamily: z(Xe),
                  fontSize: h.value + "px",
                  height: h.value + "px",
                  lineHeight: h.value + "px"
                }),
                onKeydown: [
                  _s(qt, ["enter"]),
                  _s(Ft, ["escape"])
                ],
                onBlur: qt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [hr, l.value]
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
}), dd = /* @__PURE__ */ li(hd, [["__scopeId", "data-v-fd4bfc80"]]), fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dd
}, Symbol.toStringTag, { value: "Module" })), xa = Symbol(), Yn = "el", gd = "is-", Ee = (e, t, n, i, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, ba = Symbol("namespaceContextKey"), md = (e) => {
  const t = e || (Qe() ? Te(ba, Q(Yn)) : Q(Yn));
  return Y(() => z(t) || Yn);
}, os = (e, t) => {
  const n = md(t);
  return {
    namespace: n,
    b: (f = "") => Ee(n.value, e, f, "", ""),
    e: (f) => f ? Ee(n.value, e, "", f, "") : "",
    m: (f) => f ? Ee(n.value, e, "", "", f) : "",
    be: (f, x) => f && x ? Ee(n.value, e, f, x, "") : "",
    em: (f, x) => f && x ? Ee(n.value, e, "", f, x) : "",
    bm: (f, x) => f && x ? Ee(n.value, e, f, "", x) : "",
    bem: (f, x, p) => f && x && p ? Ee(n.value, e, f, x, p) : "",
    is: (f, ...x) => {
      const p = x.length >= 1 ? x[0] : !0;
      return f && p ? `${gd}${f}` : "";
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
const pd = Object.prototype.hasOwnProperty, fo = (e, t) => pd.call(e, t), Tn = (e) => typeof e == "function", We = (e) => typeof e == "string", ka = (e) => e !== null && typeof e == "object";
var yd = typeof global == "object" && global && global.Object === Object && global, wd = typeof self == "object" && self && self.Object === Object && self, as = yd || wd || Function("return this")(), nn = as.Symbol, _a = Object.prototype, vd = _a.hasOwnProperty, xd = _a.toString, fn = nn ? nn.toStringTag : void 0;
function bd(e) {
  var t = vd.call(e, fn), n = e[fn];
  try {
    e[fn] = void 0;
    var i = !0;
  } catch {
  }
  var s = xd.call(e);
  return i && (t ? e[fn] = n : delete e[fn]), s;
}
var kd = Object.prototype, _d = kd.toString;
function Sd(e) {
  return _d.call(e);
}
var Cd = "[object Null]", Td = "[object Undefined]", go = nn ? nn.toStringTag : void 0;
function Sa(e) {
  return e == null ? e === void 0 ? Td : Cd : go && go in Object(e) ? bd(e) : Sd(e);
}
function Md(e) {
  return e != null && typeof e == "object";
}
var Ld = "[object Symbol]";
function rs(e) {
  return typeof e == "symbol" || Md(e) && Sa(e) == Ld;
}
function Rd(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var ls = Array.isArray, mo = nn ? nn.prototype : void 0, po = mo ? mo.toString : void 0;
function Ca(e) {
  if (typeof e == "string")
    return e;
  if (ls(e))
    return Rd(e, Ca) + "";
  if (rs(e))
    return po ? po.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ta(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Pd = "[object AsyncFunction]", Ed = "[object Function]", Ad = "[object GeneratorFunction]", Id = "[object Proxy]";
function Od(e) {
  if (!Ta(e))
    return !1;
  var t = Sa(e);
  return t == Ed || t == Ad || t == Pd || t == Id;
}
var _i = as["__core-js_shared__"], yo = function() {
  var e = /[^.]+$/.exec(_i && _i.keys && _i.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zd(e) {
  return !!yo && yo in e;
}
var Dd = Function.prototype, Nd = Dd.toString;
function Wd(e) {
  if (e != null) {
    try {
      return Nd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $d = /[\\^$.*+?()[\]{}|]/g, Bd = /^\[object .+?Constructor\]$/, Fd = Function.prototype, Hd = Object.prototype, jd = Fd.toString, Ud = Hd.hasOwnProperty, Vd = RegExp(
  "^" + jd.call(Ud).replace($d, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yd(e) {
  if (!Ta(e) || zd(e))
    return !1;
  var t = Od(e) ? Vd : Bd;
  return t.test(Wd(e));
}
function Gd(e, t) {
  return e?.[t];
}
function Ma(e, t) {
  var n = Gd(e, t);
  return Yd(n) ? n : void 0;
}
function Xd(e, t) {
  return e === t || e !== e && t !== t;
}
var Kd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zd = /^\w*$/;
function qd(e, t) {
  if (ls(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || rs(e) ? !0 : Zd.test(e) || !Kd.test(e) || t != null && e in Object(t);
}
var Mn = Ma(Object, "create");
function Jd() {
  this.__data__ = Mn ? Mn(null) : {}, this.size = 0;
}
function Qd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tf = "__lodash_hash_undefined__", ef = Object.prototype, nf = ef.hasOwnProperty;
function sf(e) {
  var t = this.__data__;
  if (Mn) {
    var n = t[e];
    return n === tf ? void 0 : n;
  }
  return nf.call(t, e) ? t[e] : void 0;
}
var of = Object.prototype, af = of.hasOwnProperty;
function rf(e) {
  var t = this.__data__;
  return Mn ? t[e] !== void 0 : af.call(t, e);
}
var lf = "__lodash_hash_undefined__";
function cf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Mn && t === void 0 ? lf : t, this;
}
function $e(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
$e.prototype.clear = Jd;
$e.prototype.delete = Qd;
$e.prototype.get = sf;
$e.prototype.has = rf;
$e.prototype.set = cf;
function uf() {
  this.__data__ = [], this.size = 0;
}
function ci(e, t) {
  for (var n = e.length; n--; )
    if (Xd(e[n][0], t))
      return n;
  return -1;
}
var hf = Array.prototype, df = hf.splice;
function ff(e) {
  var t = this.__data__, n = ci(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : df.call(t, n, 1), --this.size, !0;
}
function gf(e) {
  var t = this.__data__, n = ci(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function mf(e) {
  return ci(this.__data__, e) > -1;
}
function pf(e, t) {
  var n = this.__data__, i = ci(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
rn.prototype.clear = uf;
rn.prototype.delete = ff;
rn.prototype.get = gf;
rn.prototype.has = mf;
rn.prototype.set = pf;
var yf = Ma(as, "Map");
function wf() {
  this.size = 0, this.__data__ = {
    hash: new $e(),
    map: new (yf || rn)(),
    string: new $e()
  };
}
function vf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ui(e, t) {
  var n = e.__data__;
  return vf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function xf(e) {
  var t = ui(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function bf(e) {
  return ui(this, e).get(e);
}
function kf(e) {
  return ui(this, e).has(e);
}
function _f(e, t) {
  var n = ui(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function je(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
je.prototype.clear = wf;
je.prototype.delete = xf;
je.prototype.get = bf;
je.prototype.has = kf;
je.prototype.set = _f;
var Sf = "Expected a function";
function cs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sf);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, i);
    return n.cache = o.set(s, a) || o, a;
  };
  return n.cache = new (cs.Cache || je)(), n;
}
cs.Cache = je;
var Cf = 500;
function Tf(e) {
  var t = cs(e, function(i) {
    return n.size === Cf && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Mf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lf = /\\(\\)?/g, Rf = Tf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Mf, function(n, i, s, o) {
    t.push(s ? o.replace(Lf, "$1") : i || n);
  }), t;
});
function Pf(e) {
  return e == null ? "" : Ca(e);
}
function Ef(e, t) {
  return ls(e) ? e : qd(e, t) ? [e] : Rf(Pf(e));
}
function Af(e) {
  if (typeof e == "string" || rs(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function If(e, t) {
  t = Ef(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Af(t[n++])];
  return n && n == i ? e : void 0;
}
function Of(e, t, n) {
  var i = e == null ? void 0 : If(e, t);
  return i === void 0 ? n : i;
}
function zf(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var s = e[t];
    i[s[0]] = s[1];
  }
  return i;
}
const La = (e) => e === void 0, wo = (e) => typeof e == "boolean", Be = (e) => typeof e == "number", Bi = (e) => typeof Element > "u" ? !1 : e instanceof Element, Df = (e) => We(e) ? !Number.isNaN(Number(e)) : !1;
var vo;
const Ue = typeof window < "u", Nf = (e) => typeof e == "string", Wf = () => {
};
Ue && ((vo = window?.navigator) != null && vo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function us(e) {
  return typeof e == "function" ? e() : z(e);
}
function $f(e) {
  return e;
}
function hs(e) {
  return fr() ? (gr(e), !0) : !1;
}
function Bf(e, t = !0) {
  Qe() ? an(e) : t ? e() : vn(e);
}
function Ra(e, t, n = {}) {
  const {
    immediate: i = !0
  } = n, s = Q(!1);
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
    }, us(t));
  }
  return i && (s.value = !0, Ue && l()), hs(r), {
    isPending: dr(s),
    start: l,
    stop: r
  };
}
function Pa(e) {
  var t;
  const n = us(e);
  return (t = n?.$el) != null ? t : n;
}
const Ea = Ue ? window : void 0;
function Aa(...e) {
  let t, n, i, s;
  if (Nf(e[0]) || Array.isArray(e[0]) ? ([n, i, s] = e, t = Ea) : [t, n, i, s] = e, !t)
    return Wf;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((h) => h()), o.length = 0;
  }, r = (h, g, y, w) => (h.addEventListener(g, y, w), () => h.removeEventListener(g, y, w)), l = De(() => [Pa(t), us(s)], ([h, g]) => {
    a(), h && o.push(...n.flatMap((y) => i.map((w) => r(h, y, w, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return hs(c), c;
}
function Ff(e, t = !1) {
  const n = Q(), i = () => n.value = !!e();
  return i(), Bf(i, t), n;
}
const xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bo = "__vueuse_ssr_handlers__";
xo[bo] = xo[bo] || {};
var ko = Object.getOwnPropertySymbols, Hf = Object.prototype.hasOwnProperty, jf = Object.prototype.propertyIsEnumerable, Uf = (e, t) => {
  var n = {};
  for (var i in e)
    Hf.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && ko)
    for (var i of ko(e))
      t.indexOf(i) < 0 && jf.call(e, i) && (n[i] = e[i]);
  return n;
};
function Vf(e, t, n = {}) {
  const i = n, { window: s = Ea } = i, o = Uf(i, ["window"]);
  let a;
  const r = Ff(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = De(() => Pa(e), (g) => {
    l(), r.value && s && g && (a = new ResizeObserver(t), a.observe(g, o));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), c();
  };
  return hs(h), {
    isSupported: r,
    stop: h
  };
}
var _o;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(_o || (_o = {}));
var Yf = Object.defineProperty, So = Object.getOwnPropertySymbols, Gf = Object.prototype.hasOwnProperty, Xf = Object.prototype.propertyIsEnumerable, Co = (e, t, n) => t in e ? Yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Kf = (e, t) => {
  for (var n in t || (t = {}))
    Gf.call(t, n) && Co(e, n, t[n]);
  if (So)
    for (var n of So(t))
      Xf.call(t, n) && Co(e, n, t[n]);
  return e;
};
const Zf = {
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
Kf({
  linear: $f
}, Zf);
const To = {
  current: 0
}, Mo = Q(0), Ia = 2e3, Lo = Symbol("elZIndexContextKey"), Oa = Symbol("zIndexContextKey"), qf = (e) => {
  const t = Qe() ? Te(Lo, To) : To, n = e || (Qe() ? Te(Oa, void 0) : void 0), i = Y(() => {
    const a = z(n);
    return Be(a) ? a : Ia;
  }), s = Y(() => i.value + Mo.value), o = () => (t.current++, Mo.value = t.current, s.value);
  return !Ue && Te(Lo), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Jf = {
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
const Qf = (e) => (t, n) => tg(t, n, z(e)), tg = (e, t, n) => Of(n, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), eg = (e) => {
  const t = Y(() => z(e).name), n = mr(e) ? e : Q(e);
  return {
    lang: t,
    locale: n,
    t: Qf(e)
  };
}, za = Symbol("localeContextKey"), ng = (e) => {
  const t = e || Te(za, Q());
  return eg(Y(() => t.value || Jf));
}, Da = "__epPropKey", ee = (e) => e, ig = (e) => ka(e) && !!e[Da], Na = (e, t) => {
  if (!ka(e) || ig(e))
    return e;
  const { values: n, required: i, default: s, type: o, validator: a } = e, l = {
    type: o,
    required: !!i,
    validator: n || a ? (c) => {
      let h = !1, g = [];
      if (n && (g = Array.from(n), fo(e, "default") && g.push(s), h || (h = g.includes(c))), a && (h || (h = a(c))), !h && g.length > 0) {
        const y = [...new Set(g)].map((w) => JSON.stringify(w)).join(", ");
        pr(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(c)}.`);
      }
      return h;
    } : void 0,
    [Da]: !0
  };
  return fo(e, "default") && (l.default = s), l;
}, ln = (e) => zf(Object.entries(e).map(([t, n]) => [
  t,
  Na(n, t)
])), sg = ["", "default", "small", "large"], og = Na({
  type: String,
  values: sg,
  required: !1
}), ag = Symbol("size"), rg = Symbol("emptyValuesContextKey"), lg = ln({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Tn(e) ? !e() : !e
  }
}), Ro = (e) => Object.keys(e), Qn = Q();
function Wa(e, t = void 0) {
  return Qe() ? Te(xa, Qn) : Qn;
}
function $a(e, t) {
  const n = Wa(), i = os(e, Y(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || Yn;
  })), s = ng(Y(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), o = qf(Y(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || Ia;
  })), a = Y(() => {
    var r;
    return z(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return Ba(Y(() => z(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const Ba = (e, t, n = !1) => {
  var i;
  const s = !!Qe(), o = s ? Wa() : void 0, a = (i = void 0) != null ? i : s ? yr : void 0;
  if (!a)
    return;
  const r = Y(() => {
    const l = z(e);
    return o?.value ? cg(o.value, l) : l;
  });
  return a(xa, r), a(za, Y(() => r.value.locale)), a(ba, Y(() => r.value.namespace)), a(Oa, Y(() => r.value.zIndex)), a(ag, {
    size: Y(() => r.value.size || "")
  }), a(rg, Y(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !Qn.value) && (Qn.value = r.value), r;
}, cg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ro(e), ...Ro(t)])], i = {};
  for (const s of n)
    i[s] = t[s] !== void 0 ? t[s] : e[s];
  return i;
};
var hi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
function Fi(e, t = "px") {
  if (!e)
    return "";
  if (Be(e) || Df(e))
    return `${e}${t}`;
  if (We(e))
    return e;
}
const Fa = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), Ha = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ug = ln({
  size: {
    type: ee([Number, String])
  },
  color: {
    type: String
  }
}), hg = Dt({
  name: "ElIcon",
  inheritAttrs: !1
}), dg = /* @__PURE__ */ Dt({
  ...hg,
  props: ug,
  setup(e) {
    const t = e, n = os("icon"), i = Y(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: La(s) ? void 0 : Fi(s),
        "--color": o
      };
    });
    return (s, o) => (F(), G("i", wr({
      class: z(n).b(),
      style: z(i)
    }, s.$attrs), [
      Ne(s.$slots, "default")
    ], 16));
  }
});
var fg = /* @__PURE__ */ hi(dg, [["__file", "icon.vue"]]);
const ti = Fa(fg);
/*! Element Plus Icons Vue v2.3.1 */
var gg = /* @__PURE__ */ Dt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), mg = gg, pg = /* @__PURE__ */ Dt({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ja = pg, yg = /* @__PURE__ */ Dt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), wg = yg, vg = /* @__PURE__ */ Dt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), xg = vg, bg = /* @__PURE__ */ Dt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), kg = bg;
const Ua = ee([
  String,
  Object,
  Function
]), _g = {
  Close: ja
}, Sg = {
  Close: ja
}, ei = {
  success: xg,
  warning: kg,
  error: mg,
  info: wg
}, Cg = (e) => e, Gn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Tg = ln({
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
    type: ee([String, Object, Array])
  },
  offset: {
    type: ee(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Mg = Dt({
  name: "ElBadge"
}), Lg = /* @__PURE__ */ Dt({
  ...Mg,
  props: Tg,
  setup(e, { expose: t }) {
    const n = e, i = os("badge"), s = Y(() => n.isDot ? "" : Be(n.value) && Be(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = Y(() => {
      var a, r, l, c, h;
      return [
        {
          backgroundColor: n.color,
          marginRight: Fi(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Fi((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (h = n.badgeStyle) != null ? h : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (F(), G("div", {
      class: Ct(z(i).b())
    }, [
      Ne(a.$slots, "default"),
      k(Ui, {
        name: `${z(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Xt(() => [
          xn(A("sup", {
            class: Ct([
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
              vr(at(z(s)), 1)
            ])
          ], 6), [
            [Xn, !a.hidden && (z(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Rg = /* @__PURE__ */ hi(Lg, [["__file", "badge.vue"]]);
const Pg = Fa(Rg), Eg = ln({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ee(Object)
  },
  size: og,
  button: {
    type: ee(Object)
  },
  experimentalFeatures: {
    type: ee(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ee(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...lg
}), re = {};
Dt({
  name: "ElConfigProvider",
  props: Eg,
  setup(e, { slots: t }) {
    De(() => e.message, (i) => {
      Object.assign(re, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ba(e);
    return () => Ne(t, "default", { config: n?.value });
  }
});
const Va = ["success", "info", "warning", "error"], Vt = Cg({
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
}), Ag = ln({
  customClass: {
    type: String,
    default: Vt.customClass
  },
  center: {
    type: Boolean,
    default: Vt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Vt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Vt.duration
  },
  icon: {
    type: Ua,
    default: Vt.icon
  },
  id: {
    type: String,
    default: Vt.id
  },
  message: {
    type: ee([
      String,
      Object,
      Function
    ]),
    default: Vt.message
  },
  onClose: {
    type: ee(Function),
    default: Vt.onClose
  },
  showClose: {
    type: Boolean,
    default: Vt.showClose
  },
  type: {
    type: String,
    values: Va,
    default: Vt.type
  },
  plain: {
    type: Boolean,
    default: Vt.plain
  },
  offset: {
    type: Number,
    default: Vt.offset
  },
  zIndex: {
    type: Number,
    default: Vt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Vt.grouping
  },
  repeatNum: {
    type: Number,
    default: Vt.repeatNum
  }
}), Ig = {
  destroy: () => !0
}, ce = xr([]), Og = (e) => {
  const t = ce.findIndex((s) => s.id === e), n = ce[t];
  let i;
  return t > 0 && (i = ce[t - 1]), { current: n, prev: i };
}, zg = (e) => {
  const { prev: t } = Og(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Dg = (e, t) => ce.findIndex((i) => i.id === e) > 0 ? 16 : t, Ng = Dt({
  name: "ElMessage"
}), Wg = /* @__PURE__ */ Dt({
  ...Ng,
  props: Ag,
  emits: Ig,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = Sg, { ns: s, zIndex: o } = $a("message"), { currentZIndex: a, nextZIndex: r } = o, l = Q(), c = Q(!1), h = Q(0);
    let g;
    const y = Y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = Y(() => {
      const M = n.type;
      return { [s.bm("icon", M)]: M && ei[M] };
    }), C = Y(() => n.icon || ei[n.type] || ""), f = Y(() => zg(n.id)), x = Y(() => Dg(n.id, n.offset) + f.value), p = Y(() => h.value + x.value), _ = Y(() => ({
      top: `${x.value}px`,
      zIndex: a.value
    }));
    function v() {
      n.duration !== 0 && ({ stop: g } = Ra(() => {
        O();
      }, n.duration));
    }
    function b() {
      g?.();
    }
    function O() {
      c.value = !1;
    }
    function D({ code: M }) {
      M === Gn.esc && O();
    }
    return an(() => {
      v(), r(), c.value = !0;
    }), De(() => n.repeatNum, () => {
      b(), v();
    }), Aa(document, "keydown", D), Vf(l, () => {
      h.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: p,
      close: O
    }), (M, V) => (F(), $t(Ui, {
      name: z(s).b("fade"),
      onBeforeLeave: M.onClose,
      onAfterLeave: (Z) => M.$emit("destroy"),
      persisted: ""
    }, {
      default: Xt(() => [
        xn(A("div", {
          id: M.id,
          ref_key: "messageRef",
          ref: l,
          class: Ct([
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
          M.repeatNum > 1 ? (F(), $t(z(Pg), {
            key: 0,
            value: M.repeatNum,
            type: z(y),
            class: Ct(z(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : nt("v-if", !0),
          z(C) ? (F(), $t(z(ti), {
            key: 1,
            class: Ct([z(s).e("icon"), z(w)])
          }, {
            default: Xt(() => [
              (F(), $t(Ce(z(C))))
            ]),
            _: 1
          }, 8, ["class"])) : nt("v-if", !0),
          Ne(M.$slots, "default", {}, () => [
            M.dangerouslyUseHTMLString ? (F(), G(Kt, { key: 1 }, [
              nt(" Caution here, message could've been compromised, never use user's input as message "),
              A("p", {
                class: Ct(z(s).e("content")),
                innerHTML: M.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (F(), G("p", {
              key: 0,
              class: Ct(z(s).e("content"))
            }, at(M.message), 3))
          ]),
          M.showClose ? (F(), $t(z(ti), {
            key: 2,
            class: Ct(z(s).e("closeBtn")),
            onClick: Pt(O, ["stop"])
          }, {
            default: Xt(() => [
              k(z(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : nt("v-if", !0)
        ], 46, ["id"]), [
          [Xn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var $g = /* @__PURE__ */ hi(Wg, [["__file", "message.vue"]]);
let Bg = 1;
const Ya = (e) => {
  const t = !e || We(e) || bn(e) || Tn(e) ? { message: e } : e, n = {
    ...Vt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (We(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    Bi(i) || (i = document.body), n.appendTo = i;
  }
  return wo(re.grouping) && !n.grouping && (n.grouping = re.grouping), Be(re.duration) && n.duration === 3e3 && (n.duration = re.duration), Be(re.offset) && n.offset === 16 && (n.offset = re.offset), wo(re.showClose) && !n.showClose && (n.showClose = re.showClose), n;
}, Fg = (e) => {
  const t = ce.indexOf(e);
  if (t === -1)
    return;
  ce.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Hg = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Bg++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), Fg(h);
    },
    onDestroy: () => {
      Kn(null, o);
    }
  }, r = k($g, a, Tn(a.message) || bn(a.message) ? {
    default: Tn(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || sn._context, Kn(r, o), e.appendChild(o.firstElementChild);
  const l = r.component, h = {
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
  return h;
}, sn = (e = {}, t) => {
  if (!Ue)
    return { close: () => {
    } };
  const n = Ya(e);
  if (n.grouping && ce.length) {
    const s = ce.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (Be(re.max) && ce.length >= re.max)
    return { close: () => {
    } };
  const i = Hg(n, t);
  return ce.push(i), i.handler;
};
Va.forEach((e) => {
  sn[e] = (t = {}, n) => {
    const i = Ya(t);
    return sn({ ...i, type: e }, n);
  };
});
function jg(e) {
  for (const t of ce)
    (!e || e === t.props.type) && t.handler.close();
}
sn.closeAll = jg;
sn._context = null;
const Ug = Ha(sn, "$message"), Ga = [
  "success",
  "info",
  "warning",
  "error"
], Vg = ln({
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
    type: Ua
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ee([
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
    type: ee(Function),
    default: () => {
    }
  },
  onClose: {
    type: ee(Function),
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
    values: [...Ga, ""],
    default: ""
  },
  zIndex: Number
}), Yg = {
  destroy: () => !0
}, Gg = Dt({
  name: "ElNotification"
}), Xg = /* @__PURE__ */ Dt({
  ...Gg,
  props: Vg,
  emits: Yg,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: s } = $a("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = _g, l = Q(!1);
    let c;
    const h = Y(() => {
      const v = n.type;
      return v && ei[n.type] ? i.m(v) : "";
    }), g = Y(() => n.type && ei[n.type] || n.icon), y = Y(() => n.position.endsWith("right") ? "right" : "left"), w = Y(() => n.position.startsWith("top") ? "top" : "bottom"), C = Y(() => {
      var v;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (v = n.zIndex) != null ? v : a.value
      };
    });
    function f() {
      n.duration > 0 && ({ stop: c } = Ra(() => {
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
      v === Gn.delete || v === Gn.backspace ? x() : v === Gn.esc ? l.value && p() : f();
    }
    return an(() => {
      f(), o(), l.value = !0;
    }), Aa(document, "keydown", _), t({
      visible: l,
      close: p
    }), (v, b) => (F(), $t(Ui, {
      name: z(i).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (O) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: Xt(() => [
        xn(A("div", {
          id: v.id,
          class: Ct([z(i).b(), v.customClass, z(y)]),
          style: It(z(C)),
          role: "alert",
          onMouseenter: x,
          onMouseleave: f,
          onClick: v.onClick
        }, [
          z(g) ? (F(), $t(z(ti), {
            key: 0,
            class: Ct([z(i).e("icon"), z(h)])
          }, {
            default: Xt(() => [
              (F(), $t(Ce(z(g))))
            ]),
            _: 1
          }, 8, ["class"])) : nt("v-if", !0),
          A("div", {
            class: Ct(z(i).e("group"))
          }, [
            A("h2", {
              class: Ct(z(i).e("title")),
              textContent: at(v.title)
            }, null, 10, ["textContent"]),
            xn(A("div", {
              class: Ct(z(i).e("content")),
              style: It(v.title ? void 0 : { margin: 0 })
            }, [
              Ne(v.$slots, "default", {}, () => [
                v.dangerouslyUseHTMLString ? (F(), G(Kt, { key: 1 }, [
                  nt(" Caution here, message could've been compromised, never use user's input as message "),
                  A("p", { innerHTML: v.message }, null, 8, ["innerHTML"])
                ], 2112)) : (F(), G("p", { key: 0 }, at(v.message), 1))
              ])
            ], 6), [
              [Xn, v.message]
            ]),
            v.showClose ? (F(), $t(z(ti), {
              key: 0,
              class: Ct(z(i).e("closeBtn")),
              onClick: Pt(p, ["stop"])
            }, {
              default: Xt(() => [
                k(z(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : nt("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Xn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Kg = /* @__PURE__ */ hi(Xg, [["__file", "notification.vue"]]);
const ni = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Hi = 16;
let Zg = 1;
const on = function(e = {}, t) {
  if (!Ue)
    return { close: () => {
    } };
  (We(e) || bn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  ni[n].forEach(({ vm: h }) => {
    var g;
    i += (((g = h.el) == null ? void 0 : g.offsetHeight) || 0) + Hi;
  }), i += Hi;
  const s = `notification_${Zg++}`, o = e.onClose, a = {
    ...e,
    offset: i,
    id: s,
    onClose: () => {
      qg(s, n, o);
    }
  };
  let r = document.body;
  Bi(e.appendTo) ? r = e.appendTo : We(e.appendTo) && (r = document.querySelector(e.appendTo)), Bi(r) || (r = document.body);
  const l = document.createElement("div"), c = k(Kg, a, Tn(a.message) ? a.message : bn(a.message) ? () => a.message : null);
  return c.appContext = La(t) ? on._context : t, c.props.onDestroy = () => {
    Kn(null, l);
  }, Kn(c, l), ni[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Ga.forEach((e) => {
  on[e] = (t = {}, n) => ((We(t) || bn(t)) && (t = {
    message: t
  }), on({ ...t, type: e }, n));
});
function qg(e, t, n) {
  const i = ni[t], s = i.findIndex(({ vm: c }) => {
    var h;
    return ((h = c.component) == null ? void 0 : h.props.id) === e;
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
      const { el: h, component: g } = i[c].vm, y = Number.parseInt(h.style[r], 10) - a - Hi;
      g.props.offset = y;
    }
}
function Jg() {
  for (const e of Object.values(ni))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
on.closeAll = Jg;
on._context = null;
const Qg = Ha(on, "$notify"), Qt = {
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
    i === "center" ? Ug({
      message: t,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Qg({
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
}, tm = ["disabled"], em = {
  key: 0,
  class: "custom-button__loading"
}, nm = /* @__PURE__ */ Dt({
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
    return (n, i) => (F(), G("button", {
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
      e.loading ? (F(), G("div", em, i[1] || (i[1] = [
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
    ], 10, tm));
  }
}), _e = /* @__PURE__ */ li(nm, [["__scopeId", "data-v-9497085f"]]), im = ["src"], sm = { class: "ocr-header" }, om = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, am = { "data-tauri-drag-region": "" }, rm = { class: "ocr-window-controls" }, lm = ["title"], cm = ["title"], um = ["title"], hm = ["title"], dm = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, fm = ["src"], gm = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, mm = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, pm = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, ym = { "data-tauri-drag-region": "" }, wm = { "data-tauri-drag-region": "" }, vm = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, xm = ["title"], bm = { class: "ocr-reading-surface" }, km = {
  key: 0,
  class: "ocr-original-image"
}, _m = ["src"], Sm = {
  key: 0,
  class: "ocr-state"
}, Cm = {
  key: 1,
  class: "ocr-state error"
}, Tm = {
  key: 2,
  class: "ocr-state muted"
}, Mm = {
  key: 3,
  class: "ocr-result-layout"
}, Lm = { class: "ocr-preview-pane" }, Rm = { class: "ocr-preview-stage" }, Pm = ["src"], Em = {
  key: 0,
  class: "ocr-text-overlay"
}, Am = ["onClick"], Im = { class: "ocr-record-pane" }, Om = { class: "ocr-record-main-row" }, zm = ["onClick"], Dm = ["checked", "onChange"], Nm = { class: "ocr-record-index" }, Wm = ["textContent", "onBlur"], $m = {
  key: 0,
  class: "ocr-record-score"
}, Bm = ["textContent", "onBlur"], Fm = { class: "ocr-action-bar" }, Hm = { class: "translate-btn-group relative" }, jm = {
  key: 0,
  class: "translate-menu"
}, Um = ["onClick"], Vm = { class: "engine-label" }, Ym = { class: "ocr-engine-btn-group relative" }, Gm = {
  key: 0,
  class: "ocr-engine-menu"
}, Xm = ["onClick"], Km = { class: "engine-label" }, Zm = { class: "ocr-engine-btn-group relative" }, qm = {
  key: 2,
  class: "zoom-info"
}, Jm = /* @__PURE__ */ Dt({
  __name: "index",
  setup(e) {
    const { t } = Rn(), n = Q(), i = Q(null), s = Q(""), o = Q(""), a = Q("pin"), r = Q(""), l = Q([]), c = Q(!1), h = Q(""), g = Q(""), y = Q(0), w = Q(0), C = Q({ width: 0, height: 0 }), f = Q(!1), x = Q(!1), p = Q(!1), _ = Q("bing"), v = Q(!1), b = Q("auto"), O = Y(() => [
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
    ]), M = (d) => {
      const L = typeof d == "string" ? d.trim().toLowerCase() : "";
      return L === "auto" || L === "zh" || L === "zh-tw" || L === "en" || L === "ja" || L === "ko" ? L : "auto";
    }, V = Y(() => D.value.find((d) => d.value === b.value)?.label || t("pin.ocrLanguageAuto")), Z = Y(() => b.value === "auto" ? "zh" : b.value), et = Q(1), ot = Q(!1), st = Q(!1);
    let ut = null;
    const vt = Q(!1), ft = Q({ x: 0, y: 0 }), J = Q(!0), lt = Q({ width: 0, height: 0 });
    let xt = null, ht = 0;
    const j = Q(""), bt = Y(() => ({
      width: "100%",
      height: a.value === "ocr" ? "auto" : "100%",
      flex: a.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: a.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), X = Y(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), Et = Y(() => y.value > 0 && w.value > 0 ? `${y.value} × ${w.value}` : t("pin.screenshotPreview")), jt = Y(() => c.value ? t("pin.recognizing") : h.value ? t("pin.recognizeFailed") : r.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Ut = Y(
      () => l.value.filter((d) => d.selected)
    ), Lt = Y(
      () => l.value.filter((d) => N(d))
    ), St = Y(() => Ut.value.length), Gt = (d) => (d.translatedText || d.text).trim(), qt = (d) => d.map(Gt).filter(Boolean).join(`

`), Ft = () => {
      r.value = qt(l.value);
    }, N = (d) => y.value > 0 && w.value > 0 && d.bbox.width > 0 && d.bbox.height > 0, ct = (d) => {
      if (!N(d))
        return {};
      const L = gt(d.bbox.x / y.value * 100), I = gt(d.bbox.y / w.value * 100), q = gt(d.bbox.width / y.value * 100, 6), rt = gt(d.bbox.height / w.value * 100, 4);
      return {
        left: `${L}%`,
        top: `${I}%`,
        width: `${q}%`,
        minHeight: `${rt}%`
      };
    }, gt = (d, L = 0) => Number.isFinite(d) ? Math.min(100, Math.max(L, d)) : L, Tt = () => {
      const d = /* @__PURE__ */ new Date(), L = (I) => I.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${d.getFullYear()}-${L(d.getMonth() + 1)}-${L(d.getDate())} ${L(d.getHours())}.${L(d.getMinutes())}.${L(d.getSeconds())}.png`;
    }, Mt = Y(() => {
      const d = Math.min(
        lt.value.width,
        lt.value.height
      );
      let L = 1;
      return d < 300 && (L = Math.max(0.4, d / 300)), {
        left: `${ft.value.x}px`,
        top: `${ft.value.y}px`,
        transform: `scale(${L})`,
        transformOrigin: "top left"
      };
    }), At = (d) => {
      s.value = d, y.value = 0, w.value = 0, C.value = { width: 0, height: 0 }, a.value === "ocr" && (g.value = Tt()), o.value && (URL.revokeObjectURL(o.value), o.value = "");
      try {
        const L = d.split(",")[1] || d, I = d.match(/data:([^;]+);/), q = I ? I[1] : "image/png", rt = atob(L), se = new Uint8Array(rt.length);
        for (let ae = 0; ae < rt.length; ae++)
          se[ae] = rt.charCodeAt(ae);
        const oe = new Blob([se], { type: q });
        o.value = URL.createObjectURL(oe);
      } catch (L) {
        H.error("[PIN窗口] 转换 Blob URL 失败", L), o.value = d;
      }
    }, P = async () => {
      await vn(), await new Promise((d) => requestAnimationFrame(() => d()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (d) {
        H.error("[PIN窗口] 发送 ready 事件失败", d);
      }
    }, u = (d) => {
      if (!d?.imageData)
        return H.error("[PIN窗口] 收到的事件数据格式不正确", d), !1;
      const L = d.mode === "ocr" ? "ocr" : "pin", I = `${L}:${d.imageData.length}`;
      return I === j.value ? !1 : (j.value = I, a.value = L, At(d.imageData), ie(), a.value === "ocr" ? (R(d.text || ""), h.value = "", d.text || m()) : (ht++, c.value = !1, h.value = "", r.value = "", l.value = []), !0);
    }, m = async () => {
      if (!s.value) return;
      const d = ++ht;
      c.value = !0, h.value = "";
      const L = Date.now();
      Wt.log("[Pin OCR] recognize start", {
        requestId: d,
        imageDataLength: s.value.length,
        imageWidth: y.value,
        imageHeight: w.value,
        language: b.value,
        backendLanguage: Z.value
      });
      try {
        Wt.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: d,
          language: b.value,
          backendLanguage: Z.value
        });
        const I = await E("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: Z.value
        }), q = it(I), rt = q.length > 0 ? qt(q) : mt(I);
        if (Wt.log("[Pin OCR] backend OCR success", {
          requestId: d,
          resultEngine: I?.engine,
          resultLanguage: I?.language,
          confidence: I?.confidence,
          blocks: Array.isArray(I?.blocks) ? I.blocks.length : 0,
          textLength: rt.trim().length
        }), d !== ht) return;
        q.length > 0 ? (l.value = q, Ft()) : R(rt.trim()), Wt.log("[Pin OCR] recognize success", {
          requestId: d,
          durationMs: Date.now() - L,
          textLength: r.value.length,
          textPreview: r.value.slice(0, 300)
        });
      } catch (I) {
        if (d !== ht) return;
        H.error("[PIN窗口] OCR 识别失败", I), Wt.log("[Pin OCR] recognize failed", {
          requestId: d,
          durationMs: Date.now() - L,
          error: dt(I)
        }), h.value = t("pin.recognizeFailed"), r.value = "", l.value = [], Qt.error(t("pin.recognizeFailed"));
      } finally {
        d === ht && (c.value = !1);
      }
    }, R = (d) => {
      const L = d.trim();
      r.value = L, l.value = L ? L.split(/\n{2,}|\n/).map((I, q) => $(I, q)).filter((I) => I.text.trim()) : [];
    }, $ = (d, L) => ({
      id: `plain-${Date.now()}-${L}`,
      text: d.trim(),
      sourceText: d.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), it = (d) => {
      const L = S(d?.blocks);
      return L.length === 0 ? [] : Fo(L).map((q, rt) => tt(q, rt)).filter((q) => q.text.trim());
    }, tt = (d, L) => {
      const I = d.text.trim(), q = d.blocks;
      return {
        id: `ocr-${Date.now()}-${L}`,
        text: I,
        sourceText: I,
        translatedText: d.translatedText?.trim() || "",
        bbox: { ...d.bbox },
        blocks: q,
        confidence: W(q),
        selected: !1
      };
    }, S = (d) => Array.isArray(d) ? d.map((L) => {
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
    }).filter((L) => L !== null) : [], W = (d) => {
      const L = d.map((I) => Number(I.confidence || 0)).filter((I) => Number.isFinite(I) && I > 0);
      return L.length === 0 ? 0 : L.reduce((I, q) => I + q, 0) / L.length;
    }, mt = (d) => typeof d == "string" ? d : d?.text ? d.text : d?.full_text ? d.full_text : Array.isArray(d?.blocks) ? d.blocks.map((L) => L?.text).filter(Boolean).join(`
`) : "", dt = (d) => d instanceof Error ? `${d.name}: ${d.message}
${d.stack || ""}`.trim() : typeof d == "string" ? d : JSON.stringify(d) || String(d), Jt = async () => {
      const d = be();
      if (d)
        try {
          await navigator.clipboard.writeText(d), Qt.success(t("pin.copySuccess"));
        } catch (L) {
          H.error("[PIN窗口] 复制识别文本失败", L), Qt.error(t("pin.copyFailed"));
        } finally {
          ie();
        }
    }, Ve = async () => {
      Ft();
      const d = r.value.trim();
      if (d)
        try {
          await E("save_text_to_file", { text: d }), Qt.success(t("pin.saveSuccess"));
        } catch (L) {
          L !== "SAVE_CANCELLED" && (H.error("[PIN窗口] 保存文本失败", L), Qt.error(t("pin.saveFailed")));
        }
    }, be = () => {
      const d = di();
      if (d)
        return d;
      const L = qt(Ut.value);
      return L || (Ft(), r.value.trim());
    }, di = () => {
      const d = window.getSelection(), L = n.value?.querySelector(".ocr-reading-surface");
      if (!d || d.rangeCount === 0 || !L)
        return "";
      for (let I = 0; I < d.rangeCount; I += 1) {
        const rt = d.getRangeAt(I).commonAncestorContainer;
        if (L.contains(rt))
          return d.toString().trim();
      }
      return "";
    }, Pn = (d) => {
      const L = l.value.find((I) => I.id === d);
      L && (L.selected = !L.selected);
    }, ds = (d, L, I) => {
      const q = l.value.find((se) => se.id === d), rt = I.target;
      !q || !rt || (q[L] = rt.innerText.trim(), L === "text" && !q.sourceText.trim() && (q.sourceText = q.text), Ft());
    }, Xa = () => {
      p.value = !p.value, v.value = !1;
    }, Ka = (d) => {
      _.value = d, p.value = !1, E("set_translation_engine", { engine: d }).catch((L) => {
        H.error("[PIN窗口] 保存翻译引擎设置失败", L);
      });
    }, fs = () => {
      v.value = !v.value, p.value = !1;
    }, Za = (d) => {
      b.value = d, v.value = !1, E("set_ocr_language", { language: d }).catch((L) => {
        H.error("[PIN窗口] 保存 OCR 语言设置失败", L);
      }), s.value && m();
    }, qa = async () => {
      if (ie(), p.value = !1, v.value = !1, !r.value.trim() || x.value) return;
      const d = Ut.value.length > 0 ? Ut.value : l.value, L = d.length > 0 ? d.map((q) => q.text).join(`

`) : r.value, I = Ae(L);
      if (!qe(I)) {
        Qt.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      x.value = !0;
      try {
        if (await Ja(), d.length > 0) {
          for (const q of d) {
            const rt = await gs(q.text, I);
            rt && (q.translatedText = rt.trim());
          }
          Ft(), Qt.success(t("pin.translateSuccess"));
        } else {
          const q = await gs(r.value, I);
          q && R(q), Qt.success(t("pin.translateSuccess"));
        }
      } catch (q) {
        H.error("[PIN窗口] 翻译失败", q);
        const rt = q instanceof Error ? q.message : String(q);
        rt !== "翻译已取消" && Qt.error(rt || t("pin.translateFailed"));
      } finally {
        x.value = !1;
      }
    }, Ja = async () => {
      if (_.value !== "offline")
        return;
      if ((await Xi()).isCached)
        await $o();
      else
        throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
      if (!await E("get_offline_model_activated"))
        throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
    }, gs = async (d, L) => {
      const I = d.trim();
      return I ? _.value === "offline" ? Wo(I) : await E("translate_text", {
        text: I,
        from: "auto",
        to: L === "zh" ? "en" : "zh",
        engine: _.value
      }) : "";
    }, Qa = () => {
      f.value = !f.value;
    }, tr = (d) => {
      En(d);
    }, er = async () => {
      if (!i.value) return;
      const d = i.value;
      typeof d.minimize == "function" && await d.minimize();
    }, nr = async () => {
      if (!i.value) return;
      const d = i.value;
      (typeof d.isMaximized == "function" ? await d.isMaximized() : !1) && typeof d.unmaximize == "function" ? await d.unmaximize() : typeof d.maximize == "function" && await d.maximize();
    }, ms = async (d) => {
      const L = d.target;
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
    }, ps = async (d) => {
      if (d.ctrlKey && (d.preventDefault(), d.stopPropagation(), !st.value && i.value)) {
        st.value = !0;
        try {
          const I = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), q = d.deltaY > 0 ? 0.95 : 1.05, rt = I.width, se = I.height, oe = Math.round(rt * q), ae = Math.round(se * q), cn = 50, ke = 3e3;
          if (oe >= cn && oe <= ke && ae >= cn && ae <= ke) {
            if (await i.value.setSize(new mn(oe, ae)), y.value > 0) {
              const Pe = Math.round(
                oe / y.value * 100
              );
              et.value = Pe / 100;
            }
            ot.value = !0, fi();
          }
        } catch (L) {
          H.error("[PIN窗口] 窗口缩放失败", L);
        } finally {
          setTimeout(() => {
            st.value = !1;
          }, 100);
        }
      }
    }, ir = (d) => {
      a.value === "ocr" && d.ctrlKey && ps(d);
    }, fi = () => {
      ot.value = !0, ut && clearTimeout(ut), ut = setTimeout(() => {
        ot.value = !1;
      }, 1e3);
    }, En = (d) => {
      d.preventDefault(), d.stopPropagation(), vt.value = !1, setTimeout(() => {
        const L = window.innerWidth, I = window.innerHeight;
        lt.value = { width: L, height: I };
        const q = Math.min(L, I);
        let rt = 1;
        q < 300 && (rt = Math.max(0.4, q / 300));
        const se = a.value === "ocr" ? 176 : 150, oe = a.value === "ocr" && r.value.trim() ? 222 : 180, ae = se * rt, cn = oe * rt;
        let ke = d.clientX, Pe = d.clientY;
        ke + ae > L && (ke = L - ae - 5), Pe + cn > I && (Pe = I - cn - 5), ke = Math.max(5, ke), Pe = Math.max(5, Pe), ft.value = { x: ke, y: Pe }, vt.value = !0;
      }, 10);
    }, ie = () => {
      vt.value = !1, p.value = !1, v.value = !1;
    }, ys = async () => {
      i.value && (J.value = !J.value, await i.value.setAlwaysOnTop(J.value), ie());
    }, ws = async (d) => {
      if (i.value && !st.value) {
        st.value = !0;
        try {
          const I = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), q = Math.round(I.width * d), rt = Math.round(I.height * d), se = 50, oe = 3e3;
          q >= se && q <= oe && rt >= se && rt <= oe && (await i.value.setSize(new mn(q, rt)), y.value > 0 && (et.value = q / y.value), fi());
        } catch (L) {
          H.error("[PIN窗口] 键盘缩放失败", L);
        } finally {
          setTimeout(() => {
            st.value = !1;
          }, 100);
        }
      }
    }, vs = async () => {
      if (i.value && C.value.width > 0 && C.value.height > 0)
        try {
          await i.value.setSize(
            new mn(
              C.value.width,
              C.value.height
            )
          ), et.value = 1, fi();
        } catch (d) {
          H.error("[PIN窗口] 重置缩放失败", d);
        }
      ie();
    }, sr = async () => {
      try {
        const d = s.value;
        ie(), i.value && await i.value.hide(), await E("copy_image_to_clipboard", { imageData: d }), Qt.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (d) {
        H.error("[PIN窗口] 复制图片失败", d), Qt.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, or = async () => {
      const d = s.value;
      ie(), i.value && await i.value.hide();
      try {
        await E("save_pin_image", { imageData: d }), Qt.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (L) {
        L === "SAVE_CANCELLED" ? (H.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (H.error("[PIN窗口] 保存图片失败", L), Qt.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, gi = async () => {
      i.value && await i.value.close();
    }, xs = (d) => {
      d.preventDefault();
    }, mi = async (d) => {
      if (d.button === 0 && i.value) {
        const L = d.target;
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
    }, bs = (d) => {
      const L = d.target;
      !L.closest(".context-menu") && !L.closest(".ocr-engine-btn-group") && ie();
    }, ks = (d) => {
      if (d.altKey && d.code === "Space") {
        d.preventDefault(), d.stopPropagation();
        return;
      }
      d.key === "Escape" ? vt.value ? ie() : gi() : (d.ctrlKey || d.metaKey) && (d.key === "0" ? (d.preventDefault(), vs()) : d.key === "=" || d.key === "+" ? (d.preventDefault(), ws(1.05)) : d.key === "-" && (d.preventDefault(), ws(0.95)));
    }, ar = async () => {
      if (i.value)
        try {
          const d = await E(
            "get_pin_window_data",
            { label: i.value.label }
          );
          d && u(d) && await P();
        } catch (d) {
          H.error("[PIN窗口] 主动获取窗口数据失败", d);
        }
    };
    return an(async () => {
      if (n.value) {
        try {
          const [d, L] = await Promise.all([
            E("get_translation_engine"),
            E("get_ocr_language")
          ]);
          (d === "google" || d === "bing" || d === "offline") && (_.value = d), b.value = M(L);
        } catch (d) {
          H.error("[PIN窗口] 读取默认 OCR/翻译设置失败", d);
        }
        try {
          i.value = Ln.getCurrent();
          try {
            xt = await i.value.listen(
              "pin-window-data",
              (d) => {
                u(d.payload) && P();
              }
            ), await ar();
          } catch (d) {
            H.error("[PIN窗口] 设置事件监听失败", d);
          }
        } catch (d) {
          if (H.error("[PIN窗口] 初始化错误", d), i.value)
            try {
              await i.value.show();
            } catch (L) {
              H.error("[PIN窗口] 显示窗口失败", L);
            }
        }
        document.addEventListener("click", bs), document.addEventListener("keydown", ks, !0), document.addEventListener("contextmenu", xs, !0), window.addEventListener("blur", ie), document.body && (document.body.oncontextmenu = (d) => (d.preventDefault(), !1));
      }
    }), ji(() => {
      o.value && URL.revokeObjectURL(o.value), xt && xt(), document.removeEventListener("click", bs), document.removeEventListener("keydown", ks, !0), document.removeEventListener("contextmenu", xs, !0), window.removeEventListener("blur", ie), document.body && (document.body.oncontextmenu = null), ut && clearTimeout(ut);
    }), (d, L) => (F(), G(
      "div",
      {
        class: Ct(["pin-container", { "ocr-mode": a.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: Pt(En, ["prevent"]),
        onWheelCapture: ir
      },
      [
        nt(" 图片容器 "),
        o.value && a.value === "pin" ? (F(), G(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: It(bt.value),
            onWheelCapture: ps,
            onContextmenu: Pt(En, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: mi
          },
          [
            A("img", {
              src: o.value,
              alt: "贴图",
              style: It(X.value),
              onLoad: ms,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, im)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : nt("v-if", !0),
        a.value === "ocr" ? (F(), G(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: Pt(En, ["prevent"])
          },
          [
            A("header", sm, [
              A(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: mi
                },
                [
                  A("div", om, [
                    k(z(jn), {
                      theme: "outline",
                      size: "18"
                    }),
                    A(
                      "span",
                      am,
                      at(d.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  A("div", rm, [
                    A("button", {
                      class: "ocr-window-btn",
                      title: J.value ? d.$t("pin.togglePin") : d.$t("pin.pinWindow"),
                      onClick: Pt(ys, ["stop"])
                    }, [
                      (F(), $t(Ce(J.value ? z(Pi) : z(Ns)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, lm),
                    L[1] || (L[1] = A(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    A("button", {
                      class: "ocr-window-btn",
                      title: d.$t("pin.minimize"),
                      onClick: Pt(er, ["stop"])
                    }, [
                      k(z(Xo), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, cm),
                    A("button", {
                      class: "ocr-window-btn",
                      title: d.$t("pin.maximize"),
                      onClick: Pt(nr, ["stop"])
                    }, [
                      k(z(Mc), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, um),
                    A("button", {
                      class: "ocr-window-btn",
                      title: d.$t("pin.close"),
                      onClick: Pt(gi, ["stop"])
                    }, [
                      k(z(Ri), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, hm)
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
                  onMousedown: mi
                },
                [
                  A("div", dm, [
                    o.value ? (F(), G("img", {
                      key: 0,
                      src: o.value,
                      alt: "OCR preview",
                      onLoad: ms,
                      draggable: "false"
                    }, null, 40, fm)) : nt("v-if", !0)
                  ]),
                  A("div", gm, [
                    A(
                      "div",
                      mm,
                      at(g.value),
                      1
                      /* TEXT */
                    ),
                    A("div", pm, [
                      A(
                        "span",
                        ym,
                        at(Et.value),
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
                        wm,
                        at(jt.value),
                        1
                        /* TEXT */
                      ),
                      !c.value && !h.value && r.value.trim() ? (F(), G("span", vm, " ✓ ")) : nt("v-if", !0)
                    ])
                  ]),
                  A("button", {
                    class: "ocr-view-original",
                    title: f.value ? d.$t("pin.viewResult") : d.$t("pin.viewOriginal"),
                    onClick: Pt(Qa, ["stop"])
                  }, [
                    (F(), $t(Ce(f.value ? z(jn) : z(bc)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    A(
                      "span",
                      null,
                      at(f.value ? d.$t("pin.viewResult") : d.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, xm)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            A("main", bm, [
              f.value ? (F(), G("div", km, [
                A("img", {
                  src: o.value || s.value,
                  alt: "original"
                }, null, 8, _m)
              ])) : (F(), G(
                Kt,
                { key: 1 },
                [
                  c.value ? (F(), G("div", Sm, [
                    k(z(Ds), {
                      class: "ocr-loading-icon",
                      size: "20",
                      theme: "outline",
                      strokeWidth: 3
                    }),
                    A(
                      "span",
                      null,
                      at(d.$t("pin.recognizing")),
                      1
                      /* TEXT */
                    )
                  ])) : h.value ? (F(), G(
                    "div",
                    Cm,
                    at(h.value),
                    1
                    /* TEXT */
                  )) : r.value.trim() ? (F(), G("div", Mm, [
                    A("section", Lm, [
                      A("div", Rm, [
                        A("img", {
                          src: o.value || s.value,
                          alt: "OCR source"
                        }, null, 8, Pm),
                        Lt.value.length > 0 ? (F(), G("div", Em, [
                          (F(!0), G(
                            Kt,
                            null,
                            ge(Lt.value, (I) => (F(), G("span", {
                              key: I.id,
                              class: Ct(["ocr-overlay-block", { selected: I.selected }]),
                              style: It(ct(I)),
                              onClick: Pt((q) => Pn(I.id), ["stop"])
                            }, at(I.text.trim()), 15, Am))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : nt("v-if", !0)
                      ])
                    ]),
                    A("section", Im, [
                      (F(!0), G(
                        Kt,
                        null,
                        ge(l.value, (I, q) => (F(), G(
                          "article",
                          {
                            key: I.id,
                            class: Ct(["ocr-record-item", { selected: I.selected }])
                          },
                          [
                            A("div", Om, [
                              A("header", {
                                class: "ocr-record-header",
                                onClick: Pt((rt) => Pn(I.id), ["stop"])
                              }, [
                                A("input", {
                                  class: "ocr-record-checkbox",
                                  type: "checkbox",
                                  checked: I.selected,
                                  onChange: Pt((rt) => Pn(I.id), ["stop"]),
                                  onClick: L[0] || (L[0] = Pt(() => {
                                  }, ["stop"]))
                                }, null, 40, Dm),
                                A(
                                  "span",
                                  Nm,
                                  "#" + at(q + 1),
                                  1
                                  /* TEXT */
                                )
                              ], 8, zm),
                              A("div", {
                                class: "ocr-record-editor",
                                contenteditable: "plaintext-only",
                                spellcheck: "false",
                                textContent: at(I.text),
                                onBlur: (rt) => ds(I.id, "text", rt)
                              }, null, 40, Wm),
                              I.confidence > 0 ? (F(), G(
                                "span",
                                $m,
                                at(Math.round(I.confidence)) + "% ",
                                1
                                /* TEXT */
                              )) : nt("v-if", !0)
                            ]),
                            I.translatedText ? (F(), G("div", {
                              key: 0,
                              class: "ocr-record-editor translated",
                              contenteditable: "plaintext-only",
                              spellcheck: "false",
                              textContent: at(I.translatedText),
                              onBlur: (rt) => ds(I.id, "translatedText", rt)
                            }, null, 40, Bm)) : nt("v-if", !0)
                          ],
                          2
                          /* CLASS */
                        ))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])) : (F(), G(
                    "div",
                    Tm,
                    at(d.$t("pin.noTextRecognized")),
                    1
                    /* TEXT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            A("footer", Fm, [
              k(_e, {
                class: "ocr-action-btn",
                type: "text",
                title: d.$t("pin.copyText"),
                disabled: !r.value.trim(),
                onClick: Pt(Jt, ["stop"])
              }, {
                default: Xt(() => [
                  k(z(vi), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    at(St.value > 0 ? `${d.$t("pin.copyText")} (${St.value})` : d.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              A("div", Hm, [
                k(_e, {
                  class: "ocr-action-btn translate-main",
                  type: "text",
                  title: d.$t("pin.translate"),
                  disabled: !r.value.trim() || x.value,
                  onClick: Pt(qa, ["stop"])
                }, {
                  default: Xt(() => [
                    x.value ? (F(), $t(z(Ds), {
                      key: 1,
                      class: "ocr-loading-icon",
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })) : (F(), $t(z(Ko), {
                      key: 0,
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })),
                    A(
                      "span",
                      null,
                      at(d.$t("pin.translate")),
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
                  onClick: Pt(Xa, ["stop"])
                }, {
                  default: Xt(() => [
                    k(z(zs), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.8
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                nt(" 翻译引擎菜单 "),
                p.value ? (F(), G("div", jm, [
                  (F(!0), G(
                    Kt,
                    null,
                    ge(O.value, (I) => (F(), G("div", {
                      key: I.value,
                      class: Ct(["menu-item", { active: _.value === I.value }]),
                      onClick: (q) => Ka(I.value)
                    }, [
                      A(
                        "span",
                        Vm,
                        at(I.label),
                        1
                        /* TEXT */
                      ),
                      _.value === I.value ? (F(), $t(Ce(z(Li)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : nt("v-if", !0)
                    ], 10, Um))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : nt("v-if", !0)
              ]),
              A("div", Ym, [
                k(_e, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: d.$t("pin.ocrLanguage"),
                  disabled: c.value,
                  onClick: Pt(fs, ["stop"])
                }, {
                  default: Xt(() => [
                    k(z(jn), {
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
                  onClick: Pt(fs, ["stop"])
                }, {
                  default: Xt(() => [
                    k(z(zs), {
                      size: "14",
                      theme: "outline",
                      strokeWidth: 3
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                v.value ? (F(), G("div", Gm, [
                  (F(!0), G(
                    Kt,
                    null,
                    ge(D.value, (I) => (F(), G("div", {
                      key: I.value,
                      class: Ct(["menu-item", { active: b.value === I.value }]),
                      onClick: (q) => Za(I.value)
                    }, [
                      A(
                        "span",
                        Km,
                        at(I.label),
                        1
                        /* TEXT */
                      ),
                      b.value === I.value ? (F(), $t(Ce(z(Li)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : nt("v-if", !0)
                    ], 10, Xm))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : nt("v-if", !0)
              ]),
              A("div", Zm, [
                k(_e, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: d.$t("pin.recognizeAgain"),
                  disabled: c.value || !s.value,
                  onClick: Pt(m, ["stop"])
                }, {
                  default: Xt(() => [
                    k(z(Sc), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    A(
                      "span",
                      null,
                      at(d.$t("pin.recognizeAgain")),
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
                title: d.$t("pin.saveAsText"),
                disabled: !r.value.trim(),
                onClick: Pt(Ve, ["stop"])
              }, {
                default: Xt(() => [
                  k(z($s), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    at(d.$t("pin.saveAsText")),
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
                title: d.$t("pin.more"),
                onClick: Pt(tr, ["stop"])
              }, {
                default: Xt(() => [
                  k(z(wc), {
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
        ot.value ? (F(), G(
          "div",
          qm,
          at(Math.round(et.value * 100)) + "% ",
          1
          /* TEXT */
        )) : nt("v-if", !0),
        nt(" 右键菜单 "),
        vt.value ? (F(), G(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: It(Mt.value)
          },
          [
            A("div", {
              class: "menu-item",
              onClick: ys
            }, [
              (F(), $t(Ce(J.value ? z(Ns) : z(Pi)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              A(
                "span",
                null,
                at(J.value ? d.$t("pin.togglePin") : d.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: vs
            }, [
              k(z(_c), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(d.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: sr
            }, [
              k(z(vi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(d.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: or
            }, [
              k(z($s), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(d.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            a.value === "ocr" && r.value.trim() ? (F(), G("div", {
              key: 0,
              class: "menu-item",
              onClick: Jt
            }, [
              k(z(vi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(d.$t("pin.copyText")),
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
              onClick: gi
            }, [
              k(z(Ri), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(d.$t("pin.closePin")),
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
}), Qm = /* @__PURE__ */ li(Jm, [["__scopeId", "data-v-48ccedcb"]]), tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qm
}, Symbol.toStringTag, { value: "Module" }));
async function ep(e) {
  return e.toDataURL("image/png");
}
function np(e) {
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
async function ip(e) {
  const t = Date.now(), n = await ep(e);
  Wt.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await E("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr",
      language: "zh"
    }), s = np(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || Bo(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return Wt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw H.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Wt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function sp() {
  return Promise.resolve();
}
async function op() {
  return Promise.resolve();
}
const ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: ip,
  terminateOcr: op,
  warmupOcr: sp
}, Symbol.toStringTag, { value: "Module" }));
export {
  cp as activate
};
