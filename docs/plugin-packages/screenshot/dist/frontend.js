var xr = Object.defineProperty;
var br = (e, t, n) => t in e ? xr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var V = (e, t, n) => br(e, typeof t != "symbol" ? t + "" : t, n);
import * as mi from "vue";
import { inject as Te, createVNode as b, ref as Z, shallowRef as kr, computed as G, watch as Le, onMounted as an, onUnmounted as Hi, defineComponent as Dt, h as Io, Text as _r, Fragment as Kt, nextTick as bn, createElementBlock as X, openBlock as B, createCommentVNode as et, createElementVNode as I, renderList as me, normalizeClass as _t, createBlock as Ft, resolveDynamicComponent as Ce, unref as D, toDisplayString as at, normalizeStyle as It, withDirectives as kn, withKeys as Ts, vModelText as Sr, getCurrentInstance as Qe, readonly as Cr, getCurrentScope as Tr, onScopeDispose as Mr, isRef as Lr, warn as Rr, provide as Pr, mergeProps as Er, renderSlot as We, Transition as ji, withCtx as Gt, createTextVNode as Ar, vShow as Xn, shallowReactive as Ir, withModifiers as Pt, isVNode as _n, render as Kn } from "vue";
const xp = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => Td)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => hp)
  });
};
function Or(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function zr(e, t, n, i, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Bn;
const ie = "__TAURI_TO_IPC_KEY__";
function Dr(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function A(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Nr(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Wr {
  get rid() {
    return Or(this, Bn, "f");
  }
  constructor(t) {
    Bn.set(this, void 0), zr(this, Bn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return A("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Bn = /* @__PURE__ */ new WeakMap();
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
    return new yn(this.width * t, this.height * t);
  }
  [ie]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class yn {
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
  [ie]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class Ye {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof wn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof yn ? this.size : this.size.toPhysical(t);
  }
  [ie]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class Oo {
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
  [ie]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ie]();
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
    return new Oo(this.x / t, this.y / t);
  }
  [ie]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ie]();
  }
}
class In {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Oo ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Se ? this.position : this.position.toPhysical(t);
  }
  [ie]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ie]();
  }
}
var ee;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ee || (ee = {}));
async function zo(e, t) {
  await A("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function vn(e, t, n) {
  var i;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return A("plugin:event|listen", {
    event: e,
    target: s,
    handler: Dr(t)
  }).then((o) => async () => zo(e, o));
}
async function $r(e, t, n) {
  return vn(e, (i) => {
    zo(e, i.id), t(i);
  }, n);
}
async function Fr(e, t) {
  await A("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Br(e, t, n) {
  await A("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let Hr = class Hn extends Wr {
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
    return A("plugin:image|new", {
      rgba: Zn(t),
      width: n,
      height: i
    }).then((s) => new Hn(s));
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
    return A("plugin:image|from_bytes", {
      bytes: Zn(t)
    }).then((n) => new Hn(n));
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
    return A("plugin:image|from_path", { path: t }).then((n) => new Hn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return A("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return A("plugin:image|size", { rid: this.rid });
  }
};
function Zn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Hr ? e.rid : e;
}
var _i;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(_i || (_i = {}));
class jr {
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
var Ms;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ms || (Ms = {}));
function Ur() {
  return new Pn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function pi() {
  return A("plugin:window|get_all_windows").then((e) => e.map((t) => new Pn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const wi = ["tauri://created", "tauri://error"];
class Pn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || A("plugin:window|create", {
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
    return (n = (await pi()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ur();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return pi();
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
    for (const t of await pi())
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
    } : vn(t, n, {
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
    } : $r(t, n, {
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
    return Fr(t, n);
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
    return Br(t, n, i);
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
    return A("plugin:window|scale_factor", {
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
    return A("plugin:window|inner_position", {
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
    return A("plugin:window|outer_position", {
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
    return A("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new yn(t));
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
    return A("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new yn(t));
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
    return A("plugin:window|is_fullscreen", {
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
    return A("plugin:window|is_minimized", {
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
    return A("plugin:window|is_maximized", {
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
    return A("plugin:window|is_focused", {
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
    return A("plugin:window|is_decorated", {
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
    return A("plugin:window|is_resizable", {
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
    return A("plugin:window|is_maximizable", {
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
    return A("plugin:window|is_minimizable", {
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
    return A("plugin:window|is_closable", {
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
    return A("plugin:window|is_visible", {
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
    return A("plugin:window|title", {
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
    return A("plugin:window|theme", {
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
    return A("plugin:window|is_always_on_top", {
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
    return A("plugin:window|center", {
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
    return t && (t === _i.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), A("plugin:window|request_user_attention", {
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
    return A("plugin:window|set_resizable", {
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
    return A("plugin:window|set_enabled", {
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
    return A("plugin:window|is_enabled", {
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
    return A("plugin:window|set_maximizable", {
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
    return A("plugin:window|set_minimizable", {
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
    return A("plugin:window|set_closable", {
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
    return A("plugin:window|set_title", {
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
    return A("plugin:window|maximize", {
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
    return A("plugin:window|unmaximize", {
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
    return A("plugin:window|toggle_maximize", {
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
    return A("plugin:window|minimize", {
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
    return A("plugin:window|unminimize", {
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
    return A("plugin:window|show", {
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
    return A("plugin:window|hide", {
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
    return A("plugin:window|close", {
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
    return A("plugin:window|destroy", {
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
    return A("plugin:window|set_decorations", {
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
    return A("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return A("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return A("plugin:window|set_effects", {
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
    return A("plugin:window|set_always_on_top", {
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
    return A("plugin:window|set_always_on_bottom", {
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
    return A("plugin:window|set_content_protected", {
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
    return A("plugin:window|set_size", {
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
    return A("plugin:window|set_min_size", {
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
    return A("plugin:window|set_max_size", {
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
    return A("plugin:window|set_size_constraints", {
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
    return A("plugin:window|set_position", {
      label: this.label,
      value: t instanceof In ? t : new In(t)
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
    return A("plugin:window|set_fullscreen", {
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
    return A("plugin:window|set_focus", {
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
    return A("plugin:window|set_icon", {
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
    return A("plugin:window|set_skip_taskbar", {
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
    return A("plugin:window|set_cursor_grab", {
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
    return A("plugin:window|set_cursor_visible", {
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
    return A("plugin:window|set_cursor_icon", {
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
    return A("plugin:window|set_background_color", { color: t });
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
    return A("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof In ? t : new In(t)
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
    return A("plugin:window|set_ignore_cursor_events", {
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
    return A("plugin:window|start_dragging", {
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
    return A("plugin:window|start_resize_dragging", {
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
    return A("plugin:window|set_badge_count", {
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
    return A("plugin:window|set_badge_label", {
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
    return A("plugin:window|set_overlay_icon", {
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
    return A("plugin:window|set_progress_bar", {
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
    return A("plugin:window|set_visible_on_all_workspaces", {
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
    return A("plugin:window|set_title_bar_style", {
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
    return A("plugin:window|set_theme", {
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
    return this.listen(ee.WINDOW_RESIZED, (n) => {
      n.payload = new yn(n.payload), t(n);
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
    return this.listen(ee.WINDOW_MOVED, (n) => {
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
    return this.listen(ee.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new jr(n);
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
    const n = await this.listen(ee.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Se(a.payload.position)
        }
      });
    }), i = await this.listen(ee.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Se(a.payload.position)
        }
      });
    }), s = await this.listen(ee.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Se(a.payload.position)
        }
      });
    }), o = await this.listen(ee.DRAG_LEAVE, (a) => {
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
    const n = await this.listen(ee.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(ee.WINDOW_BLUR, (s) => {
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
    return this.listen(ee.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(ee.WINDOW_THEME_CHANGED, t);
  }
}
var Ls;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ls || (Ls = {}));
var Rs;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Rs || (Rs = {}));
var Ps;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ps || (Ps = {}));
function Wt(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Es(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function Ui(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function Vr(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function fe(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function Ge(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class Yr {
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
    const { x: n, y: i, width: s, height: o } = t, a = Ui(t);
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
    let w = i.x + g, y = i.y + g;
    w + c > n.x + n.width && (w = i.x - c - g), y + d > n.y + n.height && (y = i.y - d - g), w < n.x && (w = n.x + g), y < n.y && (y = n.y + g), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(w, y, c, d, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const k = 108, f = w + (c - k) / 2, x = y + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(f, x, k, k), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(f, x, k, k);
    const p = a ? a.width : r, _ = k / p;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      f,
      x,
      k,
      k
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let H = 1; H < p; H++) {
      const Q = f + H * _;
      this.ctx.moveTo(Q, x), this.ctx.lineTo(Q, x + k);
      const it = x + H * _;
      this.ctx.moveTo(f, it), this.ctx.lineTo(f + k, it);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let H = 1; H < p; H++) {
      const Q = f + H * _ + 0.5;
      this.ctx.moveTo(Q, x), this.ctx.lineTo(Q, x + k);
      const it = x + H * _ + 0.5;
      this.ctx.moveTo(f, it), this.ctx.lineTo(f + k, it);
    }
    this.ctx.stroke();
    const v = Math.floor(p / 2), S = f + v * _, O = x + v * _;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(S, O, _, _), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      S - 1,
      O - 1,
      _ + 2,
      _ + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      S,
      O,
      _,
      _
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let z = x + k + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(w + 16, z - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(w + 16, z - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const H = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(H, w + 44, z), z += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, w + 16, z), z += 17, this.ctx.font = "12px Arial";
    const M = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(M, w + 16, z), this.ctx.restore();
  }
}
class Gr {
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
    return fe(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return fe(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, n) {
    return !fe(t) || !Ge(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !fe(t) || !Ge(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
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
    if (!fe(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const n = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Vr(t, n);
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
    return Wt(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!fe(t) || !Ge(n))
      return !1;
    if (i === 0)
      return Es(t, n);
    const s = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Es(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, s = 8) {
    if (!fe(t) || !fe(n) || !fe(i))
      return !1;
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, d = r * r + l * l;
    if (d === 0)
      return Wt(t, n) <= s;
    const g = c / d;
    let w;
    return g < 0 ? w = n : g > 1 ? w = i : w = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Wt(t, w) <= s;
  }
}
var F = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(F || {}), T = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(T || {});
class Xr {
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
    const c = Ui(n);
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
    if (!fe(t))
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
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = Wt(t, s), c = Wt(t, o);
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
class He {
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
class Kr extends He {
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
      if (Wt(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Zr extends He {
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
class qr extends He {
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
      return Wt(t, n) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - n.x) * o + (t.y - n.y) * a) / r)), c = {
      x: n.x + l * o,
      y: n.y + l * a
    };
    return Wt(t, c) <= s;
  }
}
class Jr extends He {
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
      return Wt(t, n) <= s;
    const g = c / d;
    let w;
    return g < 0 ? w = n : g > 1 ? w = i : w = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Wt(t, w) <= s;
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
      if (Wt(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Qr extends He {
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
      const n = this.data.points[this.data.points.length - 1], i = Wt(t, n);
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
      return this.data.points.length === 1 ? Wt(t, this.data.points[0]) <= n : !1;
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
      return Wt(t, n) <= s;
    const g = c / d;
    let w;
    return g < 0 ? w = n : g > 1 ? w = i : w = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Wt(t, w) <= s;
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
class tl extends He {
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
const ge = class ge extends He {
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
      const n = this.data.points[this.data.points.length - 1], i = Wt(t, n);
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
    ge.helperCanvas || (ge.helperCanvas = document.createElement("canvas"), ge.helperCtx = ge.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const o = ge.helperCanvas, a = ge.helperCtx, r = n || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), d = Math.max(l * 3, 24), g = this.getBounds();
    if (!g) return;
    const w = d, y = Math.floor(g.x - w), k = Math.floor(g.y - w), f = Math.ceil(g.width + w * 2), x = Math.ceil(g.height + w * 2);
    if (f <= 0 || x <= 0) return;
    const p = Math.floor(y * r - i.x), _ = Math.floor(k * r - i.y), v = Math.ceil(f * r), S = Math.ceil(x * r), O = t.canvas.width, z = t.canvas.height, M = Math.max(0, p), H = Math.max(0, _), Q = Math.min(v, O - M), it = Math.min(S, z - H);
    if (Q <= 0 || it <= 0) return;
    let rt;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), rt = t.getImageData(M, H, Q, it), t.restore();
    } catch {
      return;
    }
    const ot = rt.data, ht = M % c, Tt = H % c;
    for (let dt = -Tt; dt < it; dt += c)
      for (let tt = -ht; tt < Q; tt += c) {
        const lt = Math.max(0, tt), pt = Math.max(0, dt), ut = Math.min(Q, tt + c), U = Math.min(it, dt + c);
        if (lt >= ut || pt >= U) continue;
        let ft = 0, K = 0, Lt = 0, Nt = 0;
        for (let Zt = pt; Zt < U; Zt++)
          for (let Rt = lt; Rt < ut; Rt++) {
            const Mt = (Zt * Q + Rt) * 4;
            ft += ot[Mt], K += ot[Mt + 1], Lt += ot[Mt + 2], Nt++;
          }
        if (Nt > 0) {
          ft = Math.round(ft / Nt / 8) * 8, K = Math.round(K / Nt / 8) * 8, Lt = Math.round(Lt / Nt / 8) * 8;
          for (let Rt = pt; Rt < U; Rt++)
            for (let Mt = lt; Mt < ut; Mt++) {
              const Xt = (Rt * Q + Mt) * 4;
              ot[Xt] = ft, ot[Xt + 1] = K, ot[Xt + 2] = Lt;
            }
        }
      }
    o.width = Q, o.height = it, a.putImageData(rt, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = d * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, M, H), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, M, H), t.restore();
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
        const g = this.data.points[d], w = this.data.points[d + 1], y = (a(g) + a(w)) / 2, k = (r(g) + r(w)) / 2;
        t.quadraticCurveTo(a(g), r(g), y, k);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Wt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + n;
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
    let w, y;
    g < 0 ? (w = n.x, y = n.y) : g > 1 ? (w = i.x, y = i.y) : (w = n.x + g * r, y = n.y + g * l);
    const k = t.x - w, f = t.y - y;
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
V(ge, "helperCanvas", null), V(ge, "helperCtx", null);
let Si = ge;
class On {
  static createAnnotation(t, n, i, s = {}) {
    switch (t) {
      case T.Rectangle:
        return new Kr(n, i);
      case T.Ellipse:
        return new Zr(n, i);
      case T.Line:
        return new qr(n, i);
      case T.Arrow:
        return new Jr(n, i);
      case T.Pen:
        return new Qr(n, i);
      case T.Text:
        return new tl(
          n,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case T.Mosaic:
        return new Si(
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
const De = class De {
  constructor() {
    V(this, "pool", []);
    V(this, "maxPoolSize", 5);
    // 最大池大小
    V(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return De.instance || (De.instance = new De()), De.instance;
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
V(De, "instance");
let Ci = De;
async function el(e, t) {
  return await A("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const nl = "snippets-code:developer-mode", Do = "snippets-code:frontend-diagnostics", il = 240, hn = "[REDACTED]", jn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${hn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${hn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  hn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${hn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${hn}`
), Vi = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return jn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return jn(
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
    return jn(String(e));
  }
}, sl = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, ol = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Do) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Yi = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(nl) === "true";
  } catch {
    return !1;
  }
}, al = (e, t, n) => {
  if (!Yi() || typeof localStorage > "u") return;
  const i = ol();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: sl(),
    message: jn(t),
    data: Vi(n)
  });
  try {
    localStorage.setItem(
      Do,
      JSON.stringify(i.slice(-il))
    );
  } catch {
  }
}, rl = () => Yi(), ll = (e) => e === "warn" || e === "error" || !1 || !1 || Yi(), zn = (e, t, n) => {
  al(e, t, n), ll(e) && A("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Vi(n)
  }).catch(() => {
  });
}, j = {
  info: (e, t, ...n) => {
    zn("info", e, t);
  },
  error: (e, t) => {
    zn("error", e, t);
  },
  warn: (e, t) => {
    zn("warn", e, t);
  },
  debug: (e, t) => {
    rl() && zn("debug", e, t);
  }
}, $t = {
  log: (e, t) => {
    A("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : Vi(t)
    }).catch(() => {
    });
  }
}, cl = "resources/transformers/transformers.min.js", ul = ["translation-offline-runtime", "translation"], hl = "https://huggingface.co/", dl = "{model}/resolve/{revision}/", fl = "/__snippets_code_disabled_transformers_local_models__/", gl = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let dn = null;
const ml = (e) => {
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
}, No = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = ml(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, Wo = (e) => {
  const t = No(e);
  return Object.fromEntries(
    gl.map((n) => [n, `${t}${n}`])
  );
}, $o = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = hl, e.remotePathTemplate = dl, e.allowLocalModels = !1, e.localModelPath = fl, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = Wo(t), e.backends.onnx.wasm.numThreads = 1);
};
async function pl() {
  return dn || (dn = (async () => {
    for (const e of ul) {
      const t = await el(e, cl);
      if (!t) continue;
      const n = Nr(t), i = await import(
        /* @vite-ignore */
        n
      );
      return $o(i.env, n), j.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
let ve = null, xn = !1, Ze = null, Ne = null, Ti = null;
const wl = "Xenova/opus-mt-en-zh", yl = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], vl = 3e5;
function xl(e) {
  Ti = e;
}
function bl() {
  return yl;
}
function kl(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function Fo() {
  return ve || Ze || (xn = !0, j.info("[离线翻译] 正在加载翻译模型..."), Ze = (async () => {
    try {
      const { pipeline: e, env: t } = await pl();
      $o(t);
      let n = "";
      const i = e("translation", wl, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== n && (n = o.file, j.info(`[离线翻译] 已加载: ${o.file}`)), Ti && Ti({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return ve = await kl(
        i,
        vl,
        "模型加载超时，请检查网络连接后重试"
      ), j.info("[离线翻译] 翻译模型加载完成"), xn = !1, ve;
    } catch (e) {
      throw xn = !1, Ze = null, j.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Ze);
}
async function Bo(e) {
  if (!e?.trim()) return e;
  Ne = new AbortController();
  const t = Ne.signal;
  try {
    const n = await Fo();
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
    Ne = null;
  }
}
function _l() {
  Ne && (Ne.abort(), Ne = null, j.info("[离线翻译] 已发送取消信号"));
}
function Sl() {
  return Ne !== null;
}
async function Ho() {
  await Fo();
}
function Cl() {
  return ve !== null;
}
function Tl() {
  return xn;
}
async function Gi() {
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
async function Ml() {
  return (await Gi()).isCached;
}
function Ll() {
  return ve !== null;
}
async function Rl() {
  if (ve)
    try {
      await ve.dispose?.();
    } catch {
    }
  ve = null, Ze = null, xn = !1, j.info("[离线翻译] 翻译器已释放");
}
async function Pl() {
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
const El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Ll,
  cancelOfflineTranslation: _l,
  clearModelCache: Pl,
  disposeOfflineTranslator: Rl,
  getModelCacheInfo: Gi,
  getModelFiles: bl,
  getRuntimeBaseUrl: No,
  getRuntimeWasmPaths: Wo,
  isModelCached: Ml,
  isOfflineTranslatorInitializing: Tl,
  isOfflineTranslatorReady: Cl,
  isTranslationInProgress: Sl,
  setProgressCallback: xl,
  translateOffline: Bo,
  warmupOfflineTranslator: Ho
}, Symbol.toStringTag, { value: "Module" }));
class ze {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => wp).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const n = Promise.resolve(El).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
V(ze, "loadedModules", /* @__PURE__ */ new Map()), V(ze, "loadingPromises", /* @__PURE__ */ new Map());
function jo(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = e.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, d = n + s + a + l;
  return d === 0 ? "unknown" : s >= 3 && s > l && s / d >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / d >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function qe(e) {
  return e === "zh" || e === "en";
}
function Oe(e) {
  return jo(e);
}
const Al = /[.!?。！？；;：:][)"'”’】）\]]*$/, As = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, Dn = /[A-Za-z0-9]/, Il = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Is = /(?:^|\s)(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Uo(e, t = {}) {
  const n = yc(e), i = Yl(e, n);
  return i.length === 0 ? [] : jl(i, n) ? Hl(i, n) : (t.mode === "single_para" ? [mn(i, n)] : zl(i, n)).flatMap((o) => Ol(o, n));
}
function Ol(e, t) {
  const n = Ki(e, t), i = [];
  for (const s of n) {
    const o = i[i.length - 1], a = o ? Jl(o, s, t) : !1;
    if (!o || !a) {
      i.push(tc(s));
      continue;
    }
    o.text = nc(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = Zo(o.bbox, s.bbox), o.fontSize = Ds(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Ds(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return ic(i, t);
}
function zl(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: Ul(l),
    block: l
  })).filter((l) => Vl(l.bbox)).sort(Xi);
  if (n.length <= 1)
    return [mn(e, t)];
  if (Dl(n, t))
    return [mn(e, t)];
  const { cuts: i, rows: s } = Nl(n);
  if (i.length < 2 || s.length <= 1)
    return [mn(e, t)];
  const o = Fl(i, s), r = Bl(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [mn(e, t)];
}
function Dl(e, t) {
  if (e.length < 2)
    return !0;
  const n = [...e].sort(Xi);
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
function Nl(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < e.length; ) {
    const c = e[a].bbox.bottom, d = [];
    for (; a < e.length && e[a].bbox.top <= c; )
      d.push(e[a]), a += 1;
    d.sort((f, x) => f.bbox.left - x.bbox.left || f.bbox.right - x.bbox.right);
    const g = Wl(d, t, n, i.length), { gaps: w, removedGaps: y } = $l(o, g), k = i.length - 1;
    for (const f of y)
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
function Wl(e, t, n, i) {
  const s = [];
  let o = t;
  for (const a of e)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: n, startRow: i }), s;
}
function $l(e, t) {
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
function Fl(e, t) {
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
    const l = r.xRight - 2, c = s.filter((y) => l >= y.xLeft && l <= y.xRight + 1e-4 && y.rowBottom < r.rowTop), d = Math.max(...c.map((y) => y.rowBottom), i.rowBottom), g = c.filter((y) => y.rowBottom === d);
    (g.length > 0 ? g.reduce((y, k) => k.xRight > y.xRight ? k : y) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = n[r], c = [];
    for (const y of o) {
      let k = !1, f = !1, x = !1;
      for (const p of l)
        if (Nn(p.right, y.xLeft) && (k = !0), Nn(p.left, y.xRight) && (f = !0), y.xLeft < p.left && p.left < y.xRight || y.xLeft < p.right && p.right < y.xRight) {
          x = !0;
          break;
        }
      !k || !f || x ? a(y) : (y.rowBottom = r, c.push(y));
    }
    o = c;
    let d = 0, g = 0;
    const w = t[r];
    for (; d < w.length && l.length >= 2; ) {
      const y = w[d];
      g + 1 >= l.length && (g = Math.max(0, l.length - 2));
      const k = l[g].right, f = l[g + 1].left;
      if (y.bbox.left + 1e-4 > f && g < l.length - 2) {
        g += 1;
        continue;
      }
      let x = o.find((p) => Nn(p.xLeft, k) && Nn(p.xRight, f));
      x || (x = {
        xLeft: k,
        xRight: f,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(x)), x.units.push(y), d += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(Xi);
  return i;
}
function Bl(e) {
  const t = [e], n = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (n.push(i), t.push(...[...i.children].reverse()));
  }
  return n;
}
function mn(e, t) {
  return [...e].sort((n, i) => {
    const s = n.y - i.y;
    return Math.abs(s) > t * 0.45 ? s : n.x - i.x;
  });
}
function Hl(e, t) {
  const n = Me(qt(e.map((a) => a.width)), t * 0.5), i = Math.max(n * 1.4, t * 0.28), s = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? qt(l.map((d) => d.x + d.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((w, y) => w.y - y.y), l = r.reduce((w, y, k) => {
      const f = y.text.trim();
      return k === 0 ? f : Zi(w, f);
    }, ""), c = Ko(r), d = qt(r.map((w) => Me(w.fontSize, t))), g = qt(r.map((w) => si(w)));
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: d,
      lineHeight: g,
      angle: qt(r.map((w) => w.angle || 0))
    };
  });
}
function jl(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function Ul(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Vl(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function Xi(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function Nn(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function Yl(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || Gl(n, t) || Kl(i))
      return null;
    const s = Zl(Xl(i, n, t));
    return s === n.text ? n : { ...n, text: s };
  }).filter((n) => !!n);
}
function Gl(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function Xl(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function Kl(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function Zl(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function Ki(e, t) {
  const n = [...e].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of n) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !fc(a.blocks, o, t) ? (a.blocks.push(o), a.y = qt(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => ql(o.blocks, t));
}
function ql(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = Ko(n), s = n.reduce((r, l, c) => {
    const d = l.text.trim();
    return c === 0 ? d : ec(r, d);
  }, ""), o = qt(n.map((r) => Me(r.fontSize, t))), a = qt(n.map((r) => si(r)));
  return {
    text: s,
    blocks: n,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: gc(n, t),
    isCodeLike: Go(s)
  };
}
function Jl(e, t, n) {
  const i = Ki(e.blocks, n), s = i[i.length - 1];
  if (!s) return !1;
  const o = Sn(s.text);
  if (ii(s.text) || Sn(t.text) || o && !Ql(s, t, n) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -n * 0.25 || a >= n * 1.8 || lc(i, a, n) || cc(s, t, a, n) || uc(s, t, a, n) || hc(s, t, a, n) || dc(s, t, a, n))
    return !1;
  if (o)
    return !0;
  const r = Math.max(n * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function Ql(e, t, n) {
  if (Yo(t.text))
    return !1;
  const i = t.bbox.x - e.bbox.x, s = Math.max(n * 0.8, e.lineHeight * 0.65);
  return i >= s;
}
function tc(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: qt(e.blocks.map((t) => t.angle || 0))
  };
}
function ec(e, t) {
  return Zi(e, t);
}
function nc(e, t) {
  return Zi(e, t);
}
function Zi(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const s = n.charAt(n.length - 1), o = i.charAt(0), a = n.charAt(n.length - 2);
  return s === "-" && Dn.test(a) && Dn.test(o) ? `${n.slice(0, -1)}${i}` : vc(o) || xc(s) ? `${n}${i}` : As.test(s) || As.test(o) || Ns(s) || Ns(o) ? `${n}${i}` : Dn.test(s) && Dn.test(o) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function ii(e) {
  return Al.test(e.trim());
}
function Sn(e) {
  return Il.test(e);
}
function ic(e, t) {
  return e.flatMap((n) => sc(n, t));
}
function sc(e, t) {
  const n = Vo(e.text);
  if (n.length <= 1)
    return [e];
  const i = Ki(e.blocks, t), s = i.length === n.length;
  return n.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || ac(e.bbox, a, n.length), c = r?.blocks || [rc(e, o, l, a)];
    return {
      ...e,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((d) => Go(d.text)),
      isStructuredBlock: e.isStructuredBlock,
      fontSize: qt(c.map((d) => Me(d.fontSize, e.fontSize || t))),
      lineHeight: qt(c.map((d) => si(d))),
      angle: qt(c.map((d) => d.angle || 0))
    };
  });
}
function Vo(e) {
  const t = e.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Vo);
  const n = oc(e);
  return n.length > 1 ? n.flatMap(Os) : Os(e);
}
function oc(e) {
  const t = e.trim(), n = [];
  Is.lastIndex = 0;
  for (const i of t.matchAll(Is)) {
    const s = i[0], o = i.index ?? 0;
    n.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return n.length <= 1 ? [t] : n.map((i, s) => {
    const o = n[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function Os(e) {
  const t = e.trim();
  if (!Sn(t))
    return [t];
  const n = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !n || !Yo(n[2]) ? [t] : [n[1].trim(), n[2].trim()];
}
function ac(e, t, n) {
  const i = e.height / Math.max(n, 1);
  return {
    x: e.x,
    y: e.y + i * t,
    width: e.width,
    height: i
  };
}
function rc(e, t, n, i) {
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
function Yo(e) {
  const t = e.trim();
  return !t || ii(t) || Sn(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function lc(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? qt(i) : 0, o = Math.max(s * 2.2, n * 1.15);
  return t > o;
}
function cc(e, t, n, i) {
  const s = e.text.trim();
  if (!s || ii(s) || Sn(s) || e.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function uc(e, t, n, i) {
  if (n <= 0)
    return !1;
  const s = Math.max(e.fontSize, t.fontSize), o = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = s / o, r = n / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function hc(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const o = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function dc(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : zs(e.text) && zs(t.text);
}
function zs(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !ii(t);
}
function Go(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function fc(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > n * 0.9 && wc(s.text) && Xo(t.text) ? !1 : o > n * 3.2;
}
function gc(e, t) {
  if (e.length < 2)
    return e.some((s) => mc(s.text));
  const n = [...e].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < n.length; s++) {
    const o = n[s - 1], a = n[s], r = n[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && pc(o.text) && Xo(a.text)) && (i += 1);
  }
  return i >= 1;
}
function mc(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function pc(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function wc(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Xo(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Ko(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => Zo(n, i), t[0]);
}
function Zo(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), s = Math.max(e.x + e.width, t.x + t.width), o = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: s - n,
    height: o - i
  };
}
function yc(e) {
  return Me(qt(e.map((t) => si(t))), 16);
}
function si(e) {
  return Me(e.lineHeight, Me(e.height, Me(e.fontSize, 16) * 1.2));
}
function Ds(e, t, n, i) {
  const s = t + i;
  return s <= 0 ? n : (e * t + n * i) / s;
}
function Me(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function qt(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function vc(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function xc(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function Ns(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class bc {
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
    V(this, "currentTool", T.Select);
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
    V(this, "canvasPool", Ci.getInstance());
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
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Gr(t), this.drawingEngine = new Yr(t, this.coordinateSystem), this.eventHandler = new Xr(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), ze.preloadModules();
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
    if (this.annotations = t.annotations.map((n) => On.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
        const s = await A("get_screenshot_preview");
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
        const s = await A("get_screenshot_background");
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
            A("get_cached_monitor_info"),
            A("get_cached_window_list")
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
            A("get_window_info"),
            A("get_all_windows")
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
        const r = await A("get_cached_monitor_info");
        s = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        s = await A("get_window_info");
      }
      let o;
      try {
        const r = await A("get_mouse_position"), l = s?.scale || 1;
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
      this.eventHandler.updateMousePosition(n), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && Wt(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
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
    let d, g;
    if (c) {
      const f = Math.max(0, Math.round(l.r * 0.1)), x = Math.max(0, Math.round(l.g * 0.1)), p = Math.max(0, Math.round(l.b * 0.1));
      d = `rgba(${f}, ${x}, ${p}, 0.95)`, g = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), x = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), p = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      d = `rgba(${f}, ${x}, ${p}, 0.95)`, g = "rgba(0, 0, 0, 0.85)";
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
    })), y = w.filter((f) => f.isStructuredBlock), k = w.filter((f) => !f.isStructuredBlock);
    k.length > 0 && this.drawFlowedTranslationBlocks(t, k, n, i, a, s, o);
    for (const f of y)
      this.drawStructuredTranslationBlock(t, f, n, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, s, o, a, r) {
    const l = [...n].filter((v) => (v.translatedText || v.text).trim()).sort((v, S) => {
      const O = v.bbox.y - S.bbox.y;
      return Math.abs(O) > 4 ? O : v.bbox.x - S.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), d = o, g = (v, S, O) => l.map((z) => {
      const M = (z.translatedText || z.text).trim(), H = Math.max(12, Math.min(z.fontSize || 16, 48)), Q = Math.max(8, Math.round(H * v)), it = z.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', rt = Math.max(
        o,
        Math.min(z.bbox.x + o, a * 0.38)
      ), ot = S ? o : rt, ht = Math.max(48, a - ot - d), Tt = z.lineHeight || Q * 1.35, dt = Math.max(
        Q * (O ? 1.04 : 1.14),
        Math.min(Tt * v, Q * (O ? 1.18 : 1.42))
      );
      return t.font = `${Q}px ${it}`, {
        text: M,
        fontSize: Q,
        fontFamily: it,
        lineHeight: dt,
        paragraphGap: O ? Math.max(1, dt * 0.16) : Math.max(3, dt * 0.35),
        x: i + ot,
        lines: this.wrapTextToLines(t, M, ht)
      };
    }), w = (v) => v.reduce((S, O, z) => {
      const M = z === v.length - 1 ? 0 : O.paragraphGap;
      return S + O.lines.length * O.lineHeight + M;
    }, 0);
    let y = g(1, !1, !1), k = w(y);
    if (k > c) {
      const v = Math.max(0.56, c / k);
      y = g(v, !1, !1), k = w(y);
    }
    if (k > c && (y = g(1, !0, !1), k = w(y)), k > c) {
      const v = Math.max(0.38, c / k * 0.96);
      y = g(v, !0, !0), k = w(y);
    }
    if (k > c) {
      const v = Math.max(0.3, c / k * 0.94);
      y = g(v, !0, !0), k = w(y);
    }
    const f = Math.min(...l.map((v) => v.bbox.y)), x = s + Math.max(o, Math.min(f, r - o)), p = s + r - o;
    let _ = x + k > p ? s + o : x;
    for (const v of y) {
      t.font = `${v.fontSize}px ${v.fontFamily}`;
      for (const S of v.lines)
        t.fillText(S, v.x, _), _ += v.lineHeight;
      _ += v.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, s, o, a, r) {
    const l = [...n.blocks].sort((g, w) => g.x - w.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), d = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const g of l) {
      const w = g.translatedText || g.text;
      if (!w.trim()) continue;
      const y = i + g.x + Math.min(4, o), k = s + g.y, f = l.find((v) => v.x > g.x), x = f ? Math.max(g.width, f.x - g.x - 8) : Math.max(g.width, a - g.x - o), p = this.wrapTextToLines(t, w.trim(), x);
      let _ = k;
      for (const v of p) {
        if (_ + c > s + r) break;
        t.fillText(v, y, _), _ += d;
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
    const c = this.backgroundImage.width, d = this.backgroundImage.height, g = this.canvas.width / s, w = this.canvas.height / s, y = c / g, k = d / w, f = t.x * y, x = t.y * k, p = t.width * y, _ = t.height * k;
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
    } catch (tt) {
      return j.error("[截图] 采样区域绘制失败", tt), this.canvasPool.release(r), i;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (tt) {
      return j.error("[截图] 获取像素数据失败", tt), this.canvasPool.release(r), i;
    }
    const S = v.data, O = Math.ceil(Math.sqrt(n)), z = o / (O + 1), M = a / (O + 1);
    let H = 0, Q = 0, it = 0, rt = 0;
    for (let tt = 1; tt <= O; tt++)
      for (let lt = 1; lt <= O && !(rt >= n); lt++) {
        const pt = Math.floor(lt * z), ut = Math.floor(tt * M);
        if (pt >= 0 && pt < o && ut >= 0 && ut < a) {
          const U = (ut * o + pt) * 4;
          U >= 0 && U + 2 < S.length && (H += S[U], Q += S[U + 1], it += S[U + 2], rt++);
        }
      }
    if (this.canvasPool.release(r), rt === 0)
      return i;
    const ot = Math.round(H / rt), ht = Math.round(Q / rt), Tt = Math.round(it / rt), dt = this.getBrightness(ot, ht, Tt);
    return {
      r: ot,
      g: ht,
      b: Tt,
      brightness: dt
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
    const c = this.backgroundImage.width, d = this.backgroundImage.height, g = this.canvas.width / s, w = this.canvas.height / s, y = c / g, k = d / w, f = t.x * y, x = t.y * k, p = t.width * y, _ = t.height * k;
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
    } catch (tt) {
      return j.error("[截图] isUniformColor: 采样区域绘制失败", tt), this.canvasPool.release(r), !1;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (tt) {
      return j.error("[截图] isUniformColor: 获取像素数据失败", tt), this.canvasPool.release(r), !1;
    }
    const S = v.data, O = Math.ceil(Math.sqrt(i)), z = o / (O + 1), M = a / (O + 1), H = [];
    for (let tt = 1; tt <= O; tt++)
      for (let lt = 1; lt <= O && !(H.length >= i); lt++) {
        const pt = Math.floor(lt * z), ut = Math.floor(tt * M);
        if (pt >= 0 && pt < o && ut >= 0 && ut < a) {
          const U = (ut * o + pt) * 4;
          U >= 0 && U + 2 < S.length && H.push({
            r: S[U],
            g: S[U + 1],
            b: S[U + 2]
          });
        }
      }
    if (this.canvasPool.release(r), H.length < 2)
      return !1;
    const Q = H.reduce((tt, lt) => tt + lt.r, 0) / H.length, it = H.reduce((tt, lt) => tt + lt.g, 0) / H.length, rt = H.reduce((tt, lt) => tt + lt.b, 0) / H.length, ot = H.reduce((tt, lt) => tt + Math.pow(lt.r - Q, 2), 0) / H.length, ht = H.reduce((tt, lt) => tt + Math.pow(lt.g - it, 2), 0) / H.length, Tt = H.reduce((tt, lt) => tt + Math.pow(lt.b - rt, 2), 0) / H.length;
    return (ot + ht + Tt) / 3 < n;
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
        const i = Ui(this.snappedWindow).x, s = this.snappedWindow.y - 5, o = t.measureText(this.snappedWindow.title), a = 4;
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
    if (On.isDrawingTool(this.currentTool)) {
      if (this.currentTool === T.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = On.createAnnotation(
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
    n.forEach((y) => {
      i = Math.min(i, y.x), s = Math.max(s, y.x), o = Math.min(o, y.y), a = Math.max(a, y.y);
    });
    const r = s - i, l = a - o;
    let c = 0;
    for (let y = 1; y < n.length; y++)
      c += Wt(n[y - 1], n[y]);
    const g = Wt(n[0], n[n.length - 1]) / c, w = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (g > 0.85 || w > 5) {
      const y = n[0], k = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [y, k] });
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
    const i = On.createAnnotation(
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
      const { x: n, y: i, width: s, height: o } = this.selectionRect, r = (await A("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, s, o);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await A("copy_to_clipboard", { image: c }) : await A("save_screenshot_to_file", { image: c });
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
          let ft = 0;
          for (; !this.backgroundImage && ft < 3e3; )
            await new Promise((K) => setTimeout(K, 100)), ft += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, d = Math.max(0, o.padding || 0), g = this.canvas.width / c, w = this.canvas.height / c, y = t - d, k = n - d, f = i + d * 2, x = s + d * 2, p = Math.max(1, Math.round(f * c)), _ = Math.max(1, Math.round(x * c)), v = Math.max(0, y), S = Math.max(0, k), O = Math.min(g, y + f), z = Math.min(w, k + x), M = Math.max(0, O - v), H = Math.max(0, z - S), Q = Math.round(v * c), it = Math.round(S * c), rt = Math.min(
          this.canvas.width - Q,
          Math.round(M * c)
        ), ot = Math.min(
          this.canvas.height - it,
          Math.round(H * c)
        ), ht = Math.round((v - y) * c), Tt = Math.round((S - k) * c), dt = document.createElement("canvas");
        dt.width = p, dt.height = _;
        const tt = dt.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!tt)
          throw new Error("无法获取2D绘图上下文");
        tt.imageSmoothingEnabled = !1, o.fillColor && (tt.fillStyle = o.fillColor, tt.fillRect(0, 0, p, _)), rt > 0 && ot > 0 && tt.drawImage(
          this.backgroundImage,
          Q,
          it,
          rt,
          ot,
          ht,
          Tt,
          rt,
          ot
        );
        const pt = dt.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: pt,
          adjusted_width: p,
          adjusted_height: _,
          logical_x: y,
          logical_y: k,
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
            const g = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, w = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, y = this.drawingEngine.createScreenshotContext(
              l,
              g,
              w
            );
            this.annotations.forEach((k, f) => {
              try {
                k.drawToScreenshot(y);
              } catch (x) {
                j.error(`[截图] 绘制标注 ${f} 失败`, x);
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
        const { x: n, y: i, width: s, height: o } = this.selectionRect, a = await A("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), d = Math.round(s * r), g = Math.round(o * r), w = Math.round(a.x + window.innerWidth * r), y = Math.round(a.y + window.innerHeight * r), k = t === "ocr" ? Math.min(Math.max(d, 760), Math.max(360, w - a.x)) : d, f = t === "ocr" ? Math.min(Math.max(g, 520), Math.max(260, y - a.y)) : g, x = t === "ocr" ? Math.round(l - Math.max(0, k - d) / 2) : l, p = t === "ocr" ? Math.max(a.x, Math.min(x, w - k)) : l, _ = t === "ocr" ? Math.max(a.y, Math.min(c, y - f)) : c, v = {}, S = await this.cropFromBackground(n, i, s, o, v);
        if (!S?.image)
          throw new Error("Failed to crop from background image");
        const O = await this.renderWithAnnotations(S, r, "save");
        await A("create_pin_window", {
          mode: t,
          imageData: O,
          x: p,
          y: _,
          width: k,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new Pn("screenshot").close();
        }, 100);
      } catch (n) {
        throw j.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, n), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await A("get_window_info"), i = n?.scale || 1, s = Math.round(n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), o = Math.round(n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await A("get_pixel_color", {
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
        const n = await A("get_window_info"), i = n?.scale || 1, s = this.colorPickerState.zoomFactor, o = Math.floor(s / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await A("get_screen_preview", {
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
          const y = w.getImageData(o, o, 1, 1).data, k = { r: y[0], g: y[1], b: y[2] }, f = this.rgbToHex(k.r, k.g, k.b);
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
        const { x: r, y: l, width: c, height: d } = this.selectionRect, g = window.devicePixelRatio || 1, w = c * g, y = d * g, k = this.canvasPool.acquire(w, y), f = k.getContext("2d");
        if (!f)
          throw this.canvasPool.release(k), new Error("无法创建临时canvas");
        const x = r * g, p = l * g, _ = performance.now();
        f.drawImage(
          this.backgroundImage,
          x,
          p,
          w,
          y,
          0,
          0,
          w,
          y
        ), n = Math.round(performance.now() - _);
        const v = performance.now(), { recognizeFromCanvas: S } = await ze.loadOCR();
        i = Math.round(performance.now() - v);
        const O = performance.now(), z = await S(k);
        s = Math.round(performance.now() - O), this.canvasPool.release(k);
        const M = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: z.confidence,
          rawLineCount: z.blocks.length,
          textLength: z.full_text.trim().length
        };
        j.info("[OCR] 识别耗时统计", M), $t.log("[OCR] recognition timing", M);
        const H = z.blocks, Q = performance.now(), it = Uo(H);
        o = Math.round(performance.now() - Q);
        const rt = it.map((N) => N.text).join(`

`), ot = {
          rawLineCount: H.length,
          paragraphCount: it.length,
          durationMs: o,
          paragraphs: it.map((N, ct) => ({
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
        if (j.info("[OCR] 版面重组完成", ot), $t.log("[OCR] layout reflow complete", ot), !rt || !rt.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ht = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Oe(rt));
        const Tt = (N) => {
          const ct = N.trim();
          return !!(ct.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !ct.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let dt = "";
        const tt = Oe(rt), lt = {
          detectedLanguage: tt,
          textLength: rt.trim().length,
          textPreview: rt.trim().slice(0, 500)
        };
        j.info("[OCR] 翻译语言检测完成", lt), $t.log("[OCR] translation language detected", lt), qe(tt) && (this.translationOverlay.sourceLanguage = tt, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(tt));
        const pt = ht === "offline" ? ze.loadOfflineTranslator() : null, ut = (N) => N.includes("插件") && N.includes("未启用") ? N.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : N : ht === "offline" ? N.includes("未激活") || N.includes("未下载") || N.includes("运行时未安装") ? N : N.includes("超时") ? "模型加载超时，请重试" : N.includes("离线翻译暂仅支持") ? N : "离线翻译失败: " + N.substring(0, 50) : N.includes("timeout") || N.includes("超时") ? "翻译超时，请检查网络连接" : N.includes("network") || N.includes("网络") || N.includes("请求") || N.includes("令牌") ? "翻译失败，请检查网络连接" : N.trim() ? N.slice(0, 80) : "翻译失败，请检查网络连接", U = async () => {
          if (!pt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: N,
            canUseOfflineTranslation: ct,
            warmupOfflineTranslator: vt,
            getModelCacheInfo: kt
          } = await pt, bt = ct();
          if (this.offlineModelActivated && !bt)
            if ((await kt()).isCached)
              await vt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return N;
        }, ft = async (N, ct, vt) => {
          if (!N.trim())
            return N;
          if (ht === "offline") {
            if (ct !== "en" || vt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await U())(N);
          }
          return await A("translate_text", {
            text: N,
            from: ct,
            to: vt,
            engine: ht
          });
        }, K = (N) => {
          const ct = N.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(ct) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(ct);
        }, Lt = async (N, ct, vt) => {
          const kt = N.trim();
          if (!kt || Tt(kt))
            return N;
          const bt = N.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (bt) {
            const [, P, W, nt, J, C] = bt, $ = Oe(W), mt = K(W) || !qe($) ? W : await ft(W, $, this.getAutoTargetLanguage($)), gt = Oe(J), Jt = qe(gt) && !Tt(J) ? await ft(J, gt, this.getAutoTargetLanguage(gt)) : J;
            return `${P}${mt}${nt}${Jt}${C}`;
          }
          if (K(kt))
            return N;
          const At = Oe(kt);
          if (!qe(At))
            return N;
          const E = this.getAutoTargetLanguage(At), h = await ft(kt, At, E), m = {
            paragraphIndex: ct,
            blockIndex: vt,
            sourceLanguage: At,
            targetLanguage: E,
            sourceText: kt,
            translatedText: h.slice(0, 200)
          };
          return j.info("[OCR] 结构化块翻译完成", m), $t.log("[OCR] structured block translation complete", m), h;
        }, Nt = async (N, ct) => {
          const vt = performance.now(), kt = (h) => ({
            index: ct,
            durationMs: Math.round(performance.now() - vt),
            ...h
          }), bt = Oe(N.text), At = this.getAutoTargetLanguage(bt), E = {
            index: ct,
            text: N.text,
            sourceLanguage: bt,
            targetLanguage: At,
            engine: ht,
            structured: !!N.isStructuredBlock
          };
          if (j.info("[OCR] 段落翻译方向", E), $t.log("[OCR] paragraph translation direction", E), !qe(bt)) {
            N.translatedText = N.text;
            const h = kt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), m = {
              index: ct,
              detectedLanguage: bt,
              durationMs: h.durationMs,
              text: N.text
            };
            return j.warn("[OCR] 跳过不支持的段落语言", m), $t.log("[OCR] skip unsupported paragraph language", m), h;
          }
          try {
            if (N.isStructuredBlock && N.blocks.length > 0) {
              const P = async (nt, J) => {
                const C = await Lt(nt.text, ct, J);
                return nt.translatedText = C, C;
              }, W = [];
              if (ht === "offline")
                for (let nt = 0; nt < N.blocks.length; nt += 1)
                  W.push(await P(N.blocks[nt], nt));
              else
                W.push(
                  ...await Promise.all(
                    N.blocks.map((nt, J) => P(nt, J))
                  )
                );
              N.translatedText = W.join(" ");
            } else if (Tt(N.text) || N.isCodeBlock) {
              N.translatedText = N.text;
              const P = N.isCodeBlock ? "code_block" : "command_like_text", W = kt({ skipped: !0, cancelled: !1 }), nt = {
                index: ct,
                reason: P,
                durationMs: W.durationMs,
                text: N.text
              };
              return j.info("[OCR] 跳过代码段翻译", nt), $t.log("[OCR] skip code paragraph translation", nt), W;
            } else
              N.translatedText = await ft(
                N.text,
                bt,
                At
              );
            const h = kt({ skipped: !1, cancelled: !1 }), m = {
              index: ct,
              durationMs: h.durationMs,
              sourceLanguage: bt,
              targetLanguage: At,
              engine: ht,
              structured: !!N.isStructuredBlock,
              sourceLength: N.text.length,
              translatedLength: (N.translatedText || "").length,
              translatedPreview: (N.translatedText || "").slice(0, 300)
            };
            return j.info("[OCR] 段落翻译完成", m), $t.log("[OCR] paragraph translation complete", m), h;
          } catch (h) {
            const m = h instanceof Error ? h.message : String(h);
            if (m === "翻译已取消")
              return kt({ skipped: !1, cancelled: !0 });
            N.translatedText = N.text;
            const P = ut(m), W = kt({
              skipped: !1,
              cancelled: !1,
              errorMessage: P
            }), nt = {
              index: ct,
              durationMs: W.durationMs,
              sourceLanguage: bt,
              targetLanguage: At,
              engine: ht,
              error: m,
              structured: !!N.isStructuredBlock,
              text: N.text
            };
            return j.error("[OCR] 段落翻译失败", nt), $t.log("[OCR] paragraph translation failed", nt), W;
          }
        }, Zt = performance.now();
        let Rt = [];
        if (ht === "offline")
          for (let N = 0; N < it.length; N += 1) {
            const ct = await Nt(it[N], N);
            if (Rt.push(ct), ct.cancelled)
              return;
            if (ct.errorMessage) {
              dt = ct.errorMessage;
              break;
            }
          }
        else {
          if (Rt = await Promise.all(
            it.map((N, ct) => Nt(N, ct))
          ), Rt.some((N) => N.cancelled))
            return;
          dt = Rt.find((N) => N.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Zt);
        const Mt = {
          durationMs: a,
          engine: ht,
          paragraphCount: it.length,
          translatedParagraphCount: Rt.filter((N) => !N.skipped && !N.errorMessage).length,
          skippedParagraphCount: Rt.filter((N) => N.skipped).length,
          failedParagraphCount: Rt.filter((N) => !!N.errorMessage).length
        };
        j.info("[OCR] 翻译耗时统计", Mt), $t.log("[OCR] translation timing", Mt);
        const Xt = it.map((N) => this.toDisplayParagraph(N, g)), se = Xt.map((N) => this.toLegacyOverlayBlock(N));
        this.translationOverlay.blocks = se, this.translationOverlay.paragraphBlocks = Xt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = dt || void 0;
        const Ut = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: H.length,
          paragraphCount: it.length,
          engine: ht
        };
        j.info("[OCR] 截图翻译总耗时统计", Ut), $t.log("[OCR] pipeline timing", Ut), this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await ze.loadOfflineTranslator();
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
    ze.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var kc = {
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
function _c() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Sc(e, t, n) {
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
var Cc = Symbol("icon-context");
function Ct(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = _c(), r = Te(Cc, kc);
      return function() {
        var l = o.size, c = o.strokeWidth, d = o.strokeLinecap, g = o.strokeLinejoin, w = o.theme, y = o.fill, k = o.spin, f = Sc(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: g,
          theme: w,
          fill: y
        }, r), x = [r.prefix + "-icon"];
        return x.push(r.prefix + "-icon-" + e), t && r.rtl && x.push(r.prefix + "-icon-rtl"), k && x.push(r.prefix + "-icon-spin"), b("span", {
          class: x.join(" ")
        }, [n(f)]);
      };
    }
  };
  return i;
}
const Tc = Ct("arrow-right-up", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M19 11H37V29",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Mi = Ct("check", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Li = Ct("close", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yi = Ct("copy", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Mc = Ct("delete-four", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M8 11L40 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M18 5L30 5",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ws = Ct("down", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Lc = Ct("download", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rc = Ct("font-size", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M24 6V42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M16 42H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pc = Ct("go-on", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $s = Ct("loading", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qo = Ct("minus", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ec = Ct("more", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), b("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), b("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), Ac = Ct("mosaic", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M44 36H36V44H44V36Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M28 36H20V44H28V36Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M12 36H4V44H12V36Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M44 20H36V28H44V20Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M28 20H20V28H28V20Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M12 20H4V28H12V20Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M44 4H36V12H44V4Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M28 4H20V12H28V4Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M12 4H4V12H12V4Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M20 12H12V20H20V12Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M20 28H12V36H20V28Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M36 12H28V20H36V12Z",
    fill: e.colors[0]
  }, null), b("path", {
    d: "M36 28H28V36H36V28Z",
    fill: e.colors[0]
  }, null)]);
}), Ic = Ct("move-one", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Oc = Ct("picture", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fs = Ct("pin", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [b("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), b("defs", null, [b("clipPath", {
    id: e.id + "1c742167"
  }, [b("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Bs = Ct("platte", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ri = Ct("pushpin", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), zc = Ct("rectangle-one", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Dc = Ct("redo", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M42 8V17H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nc = Ct("refresh", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wc = Ct("return", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $c = Ct("round", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Hs = Ct("save", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), b("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fc = Ct("square", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), pn = Ct("text-recognition", !1, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jo = Ct("translate", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Bc = Ct("write", !0, function(e) {
  return b("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [b("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), b("path", {
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
function Hc(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const js = typeof window < "u", je = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), jc = (e, t, n) => Uc({ l: e, k: t, s: n }), Uc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Bt = (e) => typeof e == "number" && isFinite(e), Vc = (e) => qi(e) === "[object Date]", qn = (e) => qi(e) === "[object RegExp]", oi = (e) => wt(e) && Object.keys(e).length === 0, jt = Object.assign, Yc = Object.create, St = (e = null) => Yc(e);
let Us;
const Un = () => Us || (Us = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : St());
function Vs(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ys(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Gc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, s, o) => `${s}="${Ys(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, s, o) => `${s}='${Ys(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    e = e.replace(i, "$1javascript&#58;");
  }), e;
}
const Xc = Object.prototype.hasOwnProperty;
function le(e, t) {
  return Xc.call(e, t);
}
const zt = Array.isArray, Et = (e) => typeof e == "function", q = (e) => typeof e == "string", Ot = (e) => typeof e == "boolean", yt = (e) => e !== null && typeof e == "object", Kc = (e) => yt(e) && Et(e.then) && Et(e.catch), Qo = Object.prototype.toString, qi = (e) => Qo.call(e), wt = (e) => qi(e) === "[object Object]", Zc = (e) => e == null ? "" : zt(e) || wt(e) && e.toString === Qo ? JSON.stringify(e, null, 2) : String(e);
function Ji(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Wn = (e) => !yt(e) || zt(e);
function Vn(e, t) {
  if (Wn(e) || Wn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      o !== "__proto__" && (yt(i[o]) && !yt(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : St()), Wn(s[o]) || Wn(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function qc(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Pi(e, t, n) {
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
}, Jc = 17;
function ai(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function Qc(e) {
  throw e;
}
const he = " ", tu = "\r", Yt = `
`, eu = "\u2028", nu = "\u2029";
function iu(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (M) => t[M] === tu && t[M + 1] === Yt, r = (M) => t[M] === Yt, l = (M) => t[M] === nu, c = (M) => t[M] === eu, d = (M) => a(M) || r(M) || l(M) || c(M), g = () => n, w = () => i, y = () => s, k = () => o, f = (M) => a(M) || l(M) || c(M) ? Yt : t[M], x = () => f(n), p = () => f(n + o);
  function _() {
    return o = 0, d(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function v() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function S() {
    n = 0, i = 1, s = 1, o = 0;
  }
  function O(M = 0) {
    o = M;
  }
  function z() {
    const M = n + o;
    for (; M !== n; )
      _();
    o = 0;
  }
  return {
    index: g,
    line: w,
    column: y,
    peekOffset: k,
    charAt: f,
    currentChar: x,
    currentPeek: p,
    next: _,
    peek: v,
    reset: S,
    resetPeek: O,
    skipToPeek: z
  };
}
const we = void 0, su = ".", Gs = "'", ou = "tokenizer";
function au(e, t = {}) {
  const n = t.location !== !1, i = iu(e), s = () => i.index(), o = () => qc(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
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
  function g(h, m, P, ...W) {
    const nt = c();
    if (m.column += P, m.offset += P, d) {
      const J = n ? Pi(nt.startLoc, m) : null, C = ai(h, J, {
        domain: ou,
        args: W
      });
      d(C);
    }
  }
  function w(h, m, P) {
    h.endLoc = o(), h.currentType = m;
    const W = { type: m };
    return n && (W.loc = Pi(h.startLoc, h.endLoc)), P != null && (W.value = P), W;
  }
  const y = (h) => w(
    h,
    13
    /* TokenTypes.EOF */
  );
  function k(h, m) {
    return h.currentChar() === m ? (h.next(), m) : (g(xt.EXPECTED_TOKEN, o(), 0, m), "");
  }
  function f(h) {
    let m = "";
    for (; h.currentPeek() === he || h.currentPeek() === Yt; )
      m += h.currentPeek(), h.peek();
    return m;
  }
  function x(h) {
    const m = f(h);
    return h.skipToPeek(), m;
  }
  function p(h) {
    if (h === we)
      return !1;
    const m = h.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function _(h) {
    if (h === we)
      return !1;
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function v(h, m) {
    const { currentType: P } = m;
    if (P !== 2)
      return !1;
    f(h);
    const W = p(h.currentPeek());
    return h.resetPeek(), W;
  }
  function S(h, m) {
    const { currentType: P } = m;
    if (P !== 2)
      return !1;
    f(h);
    const W = h.currentPeek() === "-" ? h.peek() : h.currentPeek(), nt = _(W);
    return h.resetPeek(), nt;
  }
  function O(h, m) {
    const { currentType: P } = m;
    if (P !== 2)
      return !1;
    f(h);
    const W = h.currentPeek() === Gs;
    return h.resetPeek(), W;
  }
  function z(h, m) {
    const { currentType: P } = m;
    if (P !== 7)
      return !1;
    f(h);
    const W = h.currentPeek() === ".";
    return h.resetPeek(), W;
  }
  function M(h, m) {
    const { currentType: P } = m;
    if (P !== 8)
      return !1;
    f(h);
    const W = p(h.currentPeek());
    return h.resetPeek(), W;
  }
  function H(h, m) {
    const { currentType: P } = m;
    if (!(P === 7 || P === 11))
      return !1;
    f(h);
    const W = h.currentPeek() === ":";
    return h.resetPeek(), W;
  }
  function Q(h, m) {
    const { currentType: P } = m;
    if (P !== 9)
      return !1;
    const W = () => {
      const J = h.currentPeek();
      return J === "{" ? p(h.peek()) : J === "@" || J === "|" || J === ":" || J === "." || J === he || !J ? !1 : J === Yt ? (h.peek(), W()) : rt(h, !1);
    }, nt = W();
    return h.resetPeek(), nt;
  }
  function it(h) {
    f(h);
    const m = h.currentPeek() === "|";
    return h.resetPeek(), m;
  }
  function rt(h, m = !0) {
    const P = (nt = !1, J = "") => {
      const C = h.currentPeek();
      return C === "{" || C === "@" || !C ? nt : C === "|" ? !(J === he || J === Yt) : C === he ? (h.peek(), P(!0, he)) : C === Yt ? (h.peek(), P(!0, Yt)) : !0;
    }, W = P();
    return m && h.resetPeek(), W;
  }
  function ot(h, m) {
    const P = h.currentChar();
    return P === we ? we : m(P) ? (h.next(), P) : null;
  }
  function ht(h) {
    const m = h.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function Tt(h) {
    return ot(h, ht);
  }
  function dt(h) {
    const m = h.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function tt(h) {
    return ot(h, dt);
  }
  function lt(h) {
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function pt(h) {
    return ot(h, lt);
  }
  function ut(h) {
    const m = h.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function U(h) {
    return ot(h, ut);
  }
  function ft(h) {
    let m = "", P = "";
    for (; m = pt(h); )
      P += m;
    return P;
  }
  function K(h) {
    let m = "";
    for (; ; ) {
      const P = h.currentChar();
      if (P === "{" || P === "}" || P === "@" || P === "|" || !P)
        break;
      if (P === he || P === Yt)
        if (rt(h))
          m += P, h.next();
        else {
          if (it(h))
            break;
          m += P, h.next();
        }
      else
        m += P, h.next();
    }
    return m;
  }
  function Lt(h) {
    x(h);
    let m = "", P = "";
    for (; m = tt(h); )
      P += m;
    const W = h.currentChar();
    if (W && W !== "}" && W !== we && W !== he && W !== Yt && W !== "　") {
      const nt = Ut(h);
      return g(xt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, P + nt), P + nt;
    }
    return h.currentChar() === we && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), P;
  }
  function Nt(h) {
    x(h);
    let m = "";
    return h.currentChar() === "-" ? (h.next(), m += `-${ft(h)}`) : m += ft(h), h.currentChar() === we && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), m;
  }
  function Zt(h) {
    return h !== Gs && h !== Yt;
  }
  function Rt(h) {
    x(h), k(h, "'");
    let m = "", P = "";
    for (; m = ot(h, Zt); )
      m === "\\" ? P += Mt(h) : P += m;
    const W = h.currentChar();
    return W === Yt || W === we ? (g(xt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), W === Yt && (h.next(), k(h, "'")), P) : (k(h, "'"), P);
  }
  function Mt(h) {
    const m = h.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return h.next(), `\\${m}`;
      case "u":
        return Xt(h, m, 4);
      case "U":
        return Xt(h, m, 6);
      default:
        return g(xt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, m), "";
    }
  }
  function Xt(h, m, P) {
    k(h, m);
    let W = "";
    for (let nt = 0; nt < P; nt++) {
      const J = U(h);
      if (!J) {
        g(xt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${m}${W}${h.currentChar()}`);
        break;
      }
      W += J;
    }
    return `\\${m}${W}`;
  }
  function se(h) {
    return h !== "{" && h !== "}" && h !== he && h !== Yt;
  }
  function Ut(h) {
    x(h);
    let m = "", P = "";
    for (; m = ot(h, se); )
      P += m;
    return P;
  }
  function N(h) {
    let m = "", P = "";
    for (; m = Tt(h); )
      P += m;
    return P;
  }
  function ct(h) {
    const m = (P) => {
      const W = h.currentChar();
      return W === "{" || W === "@" || W === "|" || W === "(" || W === ")" || !W || W === he ? P : (P += W, h.next(), m(P));
    };
    return m("");
  }
  function vt(h) {
    x(h);
    const m = k(
      h,
      "|"
      /* TokenChars.Pipe */
    );
    return x(h), m;
  }
  function kt(h, m) {
    let P = null;
    switch (h.currentChar()) {
      case "{":
        return m.braceNest >= 1 && g(xt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), h.next(), P = w(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), x(h), m.braceNest++, P;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && g(xt.EMPTY_PLACEHOLDER, o(), 0), h.next(), P = w(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && x(h), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), P;
      case "@":
        return m.braceNest > 0 && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), P = bt(h, m) || y(m), m.braceNest = 0, P;
      default: {
        let nt = !0, J = !0, C = !0;
        if (it(h))
          return m.braceNest > 0 && g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), P = w(m, 1, vt(h)), m.braceNest = 0, m.inLinked = !1, P;
        if (m.braceNest > 0 && (m.currentType === 4 || m.currentType === 5 || m.currentType === 6))
          return g(xt.UNTERMINATED_CLOSING_BRACE, o(), 0), m.braceNest = 0, At(h, m);
        if (nt = v(h, m))
          return P = w(m, 4, Lt(h)), x(h), P;
        if (J = S(h, m))
          return P = w(m, 5, Nt(h)), x(h), P;
        if (C = O(h, m))
          return P = w(m, 6, Rt(h)), x(h), P;
        if (!nt && !J && !C)
          return P = w(m, 12, Ut(h)), g(xt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, P.value), x(h), P;
        break;
      }
    }
    return P;
  }
  function bt(h, m) {
    const { currentType: P } = m;
    let W = null;
    const nt = h.currentChar();
    switch ((P === 7 || P === 8 || P === 11 || P === 9) && (nt === Yt || nt === he) && g(xt.INVALID_LINKED_FORMAT, o(), 0), nt) {
      case "@":
        return h.next(), W = w(
          m,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, W;
      case ".":
        return x(h), h.next(), w(
          m,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return x(h), h.next(), w(
          m,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return it(h) ? (W = w(m, 1, vt(h)), m.braceNest = 0, m.inLinked = !1, W) : z(h, m) || H(h, m) ? (x(h), bt(h, m)) : M(h, m) ? (x(h), w(m, 11, N(h))) : Q(h, m) ? (x(h), nt === "{" ? kt(h, m) || W : w(m, 10, ct(h))) : (P === 7 && g(xt.INVALID_LINKED_FORMAT, o(), 0), m.braceNest = 0, m.inLinked = !1, At(h, m));
    }
  }
  function At(h, m) {
    let P = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return kt(h, m) || y(m);
    if (m.inLinked)
      return bt(h, m) || y(m);
    switch (h.currentChar()) {
      case "{":
        return kt(h, m) || y(m);
      case "}":
        return g(xt.UNBALANCED_CLOSING_BRACE, o(), 0), h.next(), w(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return bt(h, m) || y(m);
      default: {
        if (it(h))
          return P = w(m, 1, vt(h)), m.braceNest = 0, m.inLinked = !1, P;
        if (rt(h))
          return w(m, 0, K(h));
        break;
      }
    }
    return P;
  }
  function E() {
    const { currentType: h, offset: m, startLoc: P, endLoc: W } = l;
    return l.lastType = h, l.lastOffset = m, l.lastStartLoc = P, l.lastEndLoc = W, l.offset = s(), l.startLoc = o(), i.currentChar() === we ? w(
      l,
      13
      /* TokenTypes.EOF */
    ) : At(i, l);
  }
  return {
    nextToken: E,
    currentOffset: s,
    currentPosition: o,
    context: c
  };
}
const ru = "parser", lu = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function cu(e, t, n) {
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
function uu(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(p, _, v, S, ...O) {
    const z = p.currentPosition();
    if (z.offset += S, z.column += S, n) {
      const M = t ? Pi(v, z) : null, H = ai(_, M, {
        domain: ru,
        args: O
      });
      n(H);
    }
  }
  function s(p, _, v) {
    const S = { type: p };
    return t && (S.start = _, S.end = _, S.loc = { start: v, end: v }), S;
  }
  function o(p, _, v, S) {
    t && (p.end = _, p.loc && (p.loc.end = v));
  }
  function a(p, _) {
    const v = p.context(), S = s(3, v.offset, v.startLoc);
    return S.value = _, o(S, p.currentOffset(), p.currentPosition()), S;
  }
  function r(p, _) {
    const v = p.context(), { lastOffset: S, lastStartLoc: O } = v, z = s(5, S, O);
    return z.index = parseInt(_, 10), p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function l(p, _) {
    const v = p.context(), { lastOffset: S, lastStartLoc: O } = v, z = s(4, S, O);
    return z.key = _, p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function c(p, _) {
    const v = p.context(), { lastOffset: S, lastStartLoc: O } = v, z = s(9, S, O);
    return z.value = _.replace(lu, cu), p.nextToken(), o(z, p.currentOffset(), p.currentPosition()), z;
  }
  function d(p) {
    const _ = p.nextToken(), v = p.context(), { lastOffset: S, lastStartLoc: O } = v, z = s(8, S, O);
    return _.type !== 11 ? (i(p, xt.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), z.value = "", o(z, S, O), {
      nextConsumeToken: _,
      node: z
    }) : (_.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, de(_)), z.value = _.value || "", o(z, p.currentOffset(), p.currentPosition()), {
      node: z
    });
  }
  function g(p, _) {
    const v = p.context(), S = s(7, v.offset, v.startLoc);
    return S.value = _, o(S, p.currentOffset(), p.currentPosition()), S;
  }
  function w(p) {
    const _ = p.context(), v = s(6, _.offset, _.startLoc);
    let S = p.nextToken();
    if (S.type === 8) {
      const O = d(p);
      v.modifier = O.node, S = O.nextConsumeToken || p.nextToken();
    }
    switch (S.type !== 9 && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(S)), S = p.nextToken(), S.type === 2 && (S = p.nextToken()), S.type) {
      case 10:
        S.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(S)), v.key = g(p, S.value || "");
        break;
      case 4:
        S.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(S)), v.key = l(p, S.value || "");
        break;
      case 5:
        S.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(S)), v.key = r(p, S.value || "");
        break;
      case 6:
        S.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(S)), v.key = c(p, S.value || "");
        break;
      default: {
        i(p, xt.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const O = p.context(), z = s(7, O.offset, O.startLoc);
        return z.value = "", o(z, O.offset, O.startLoc), v.key = z, o(v, O.offset, O.startLoc), {
          nextConsumeToken: S,
          node: v
        };
      }
    }
    return o(v, p.currentOffset(), p.currentPosition()), {
      node: v
    };
  }
  function y(p) {
    const _ = p.context(), v = _.currentType === 1 ? p.currentOffset() : _.offset, S = _.currentType === 1 ? _.endLoc : _.startLoc, O = s(2, v, S);
    O.items = [];
    let z = null;
    do {
      const Q = z || p.nextToken();
      switch (z = null, Q.type) {
        case 0:
          Q.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(Q)), O.items.push(a(p, Q.value || ""));
          break;
        case 5:
          Q.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(Q)), O.items.push(r(p, Q.value || ""));
          break;
        case 4:
          Q.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(Q)), O.items.push(l(p, Q.value || ""));
          break;
        case 6:
          Q.value == null && i(p, xt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, de(Q)), O.items.push(c(p, Q.value || ""));
          break;
        case 7: {
          const it = w(p);
          O.items.push(it.node), z = it.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 13 && _.currentType !== 1);
    const M = _.currentType === 1 ? _.lastOffset : p.currentOffset(), H = _.currentType === 1 ? _.lastEndLoc : p.currentPosition();
    return o(O, M, H), O;
  }
  function k(p, _, v, S) {
    const O = p.context();
    let z = S.items.length === 0;
    const M = s(1, _, v);
    M.cases = [], M.cases.push(S);
    do {
      const H = y(p);
      z || (z = H.items.length === 0), M.cases.push(H);
    } while (O.currentType !== 13);
    return z && i(p, xt.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), o(M, p.currentOffset(), p.currentPosition()), M;
  }
  function f(p) {
    const _ = p.context(), { offset: v, startLoc: S } = _, O = y(p);
    return _.currentType === 13 ? O : k(p, v, S, O);
  }
  function x(p) {
    const _ = au(p, jt({}, e)), v = _.context(), S = s(0, v.offset, v.startLoc);
    return t && S.loc && (S.loc.source = p), S.body = f(_), e.onCacheKey && (S.cacheKey = e.onCacheKey(p)), v.currentType !== 13 && i(_, xt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, p[v.offset] || ""), o(S, _.currentOffset(), _.currentPosition()), S;
  }
  return { parse: x };
}
function de(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function hu(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function Xs(e, t) {
  for (let n = 0; n < e.length; n++)
    Qi(e[n], t);
}
function Qi(e, t) {
  switch (e.type) {
    case 1:
      Xs(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Xs(e.items, t);
      break;
    case 6: {
      Qi(e.key, t), t.helper(
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
function du(e, t = {}) {
  const n = hu(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Qi(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function fu(e) {
  const t = e.body;
  return t.type === 2 ? Ks(t) : t.cases.forEach((n) => Ks(n)), e;
}
function Ks(e) {
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
      e.static = Ji(t);
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
function gu(e, t) {
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
  function g(f = !0) {
    const x = --a.indentLevel;
    f && c(x);
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
function mu(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tn(e, t.key), t.modifier ? (e.push(", "), tn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function pu(e, t) {
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
function wu(e, t) {
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
function yu(e, t) {
  t.body ? tn(e, t.body) : e.push("null");
}
function tn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      yu(e, t);
      break;
    case 1:
      wu(e, t);
      break;
    case 2:
      pu(e, t);
      break;
    case 6:
      mu(e, t);
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
const vu = (e, t = {}) => {
  const n = q(t.mode) ? t.mode : "normal", i = q(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], r = gu(e, {
    filename: i,
    breakLineCode: s,
    needIndent: o
  });
  r.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), r.indent(o), a.length > 0 && (r.push(`const { ${Ji(a.map((d) => `${d}: _${d}`), ", ")} } = ctx`), r.newline()), r.push("return "), tn(r, e), r.deindent(o), r.push("}"), delete e.helpers;
  const { code: l, map: c } = r.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function xu(e, t = {}) {
  const n = jt({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = uu(n).parse(e);
  return i ? (o && fu(r), s && Je(r), { ast: r, code: "" }) : (du(r, n), vu(r, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function bu() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Un().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function pe(e) {
  return yt(e) && ts(e) === 0 && (le(e, "b") || le(e, "body"));
}
const ta = ["b", "body"];
function ku(e) {
  return Re(e, ta);
}
const ea = ["c", "cases"];
function _u(e) {
  return Re(e, ea, []);
}
const na = ["s", "static"];
function Su(e) {
  return Re(e, na);
}
const ia = ["i", "items"];
function Cu(e) {
  return Re(e, ia, []);
}
const sa = ["t", "type"];
function ts(e) {
  return Re(e, sa);
}
const oa = ["v", "value"];
function $n(e, t) {
  const n = Re(e, oa);
  if (n != null)
    return n;
  throw Cn(t);
}
const aa = ["m", "modifier"];
function Tu(e) {
  return Re(e, aa);
}
const ra = ["k", "key"];
function Mu(e) {
  const t = Re(e, ra);
  if (t)
    return t;
  throw Cn(
    6
    /* NodeTypes.Linked */
  );
}
function Re(e, t, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (le(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const la = [
  ...ta,
  ...ea,
  ...na,
  ...ia,
  ...ra,
  ...aa,
  ...oa,
  ...sa
];
function Cn(e) {
  return new Error(`unhandled node type: ${e}`);
}
function vi(e) {
  return (n) => Lu(n, e);
}
function Lu(e, t) {
  const n = ku(t);
  if (n == null)
    throw Cn(
      0
      /* NodeTypes.Resource */
    );
  if (ts(n) === 1) {
    const o = _u(n);
    return e.plural(o.reduce((a, r) => [
      ...a,
      Zs(e, r)
    ], []));
  } else
    return Zs(e, n);
}
function Zs(e, t) {
  const n = Su(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = Cu(t).reduce((s, o) => [...s, Ei(e, o)], []);
    return e.normalize(i);
  }
}
function Ei(e, t) {
  const n = ts(t);
  switch (n) {
    case 3:
      return $n(t, n);
    case 9:
      return $n(t, n);
    case 4: {
      const i = t;
      if (le(i, "k") && i.k)
        return e.interpolate(e.named(i.k));
      if (le(i, "key") && i.key)
        return e.interpolate(e.named(i.key));
      throw Cn(n);
    }
    case 5: {
      const i = t;
      if (le(i, "i") && Bt(i.i))
        return e.interpolate(e.list(i.i));
      if (le(i, "index") && Bt(i.index))
        return e.interpolate(e.list(i.index));
      throw Cn(n);
    }
    case 6: {
      const i = t, s = Tu(i), o = Mu(i);
      return e.linked(Ei(e, o), s ? Ei(e, s) : void 0, e.type);
    }
    case 7:
      return $n(t, n);
    case 8:
      return $n(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Ru = (e) => e;
let Fn = St();
function Pu(e, t = {}) {
  let n = !1;
  const i = t.onError || Qc;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...xu(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Eu(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && q(e)) {
    Ot(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || Ru)(e), s = Fn[i];
    if (s)
      return s;
    const { ast: o, detectError: a } = Pu(e, {
      ...t,
      location: !1,
      jit: !0
    }), r = vi(o);
    return a ? r : Fn[i] = r;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = Fn[n];
      return i || (Fn[n] = vi(e));
    } else
      return vi(e);
  }
}
const xe = {
  INVALID_ARGUMENT: Jc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Au = 24;
function be(e) {
  return ai(e, null, void 0);
}
function es(e, t) {
  return t.locale != null ? qs(t.locale) : qs(e.locale);
}
let xi;
function qs(e) {
  if (q(e))
    return e;
  if (Et(e)) {
    if (e.resolvedOnce && xi != null)
      return xi;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Kc(t))
        throw be(xe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return xi = t;
    } else
      throw be(xe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw be(xe.NOT_SUPPORT_LOCALE_TYPE);
}
function Iu(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...zt(t) ? t : yt(t) ? Object.keys(t) : q(t) ? [t] : [n]
  ])];
}
function ca(e, t, n) {
  const i = q(n) ? n : Jn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; zt(a); )
      a = Js(o, a, t);
    const r = zt(t) || !wt(t) ? t : t.default ? t.default : null;
    a = q(r) ? [r] : r, zt(a) && Js(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function Js(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && Ot(i); s++) {
    const o = t[s];
    q(o) && (i = Ou(e, t[s], n));
  }
  return i;
}
function Ou(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = zu(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function zu(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (zt(n) || wt(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const Pe = [];
Pe[
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
Pe[
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
Pe[
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
Pe[
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
Pe[
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
Pe[
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
Pe[
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
const Du = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Nu(e) {
  return Du.test(e);
}
function Wu(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function $u(e) {
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
function Fu(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Nu(t) ? Wu(t) : "*" + t;
}
function Bu(e) {
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
      if (s = 0, a === void 0 || (a = Fu(a), a === !1))
        return !1;
      w[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function y() {
    const k = e[n + 1];
    if (i === 5 && k === "'" || i === 6 && k === '"')
      return n++, r = "\\" + k, w[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, o = e[n], !(o === "\\" && y())) {
      if (l = $u(o), g = Pe[i], c = g[l] || g.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (d = w[c[1]], d && (r = o, d() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const Qs = /* @__PURE__ */ new Map();
function Hu(e, t) {
  return yt(e) ? e[t] : null;
}
function ju(e, t) {
  if (!yt(e))
    return null;
  let n = Qs.get(t);
  if (n || (n = Bu(t), n && Qs.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = n[o];
    if (la.includes(a) && pe(s))
      return null;
    const r = s[a];
    if (r === void 0 || Et(s))
      return null;
    s = r, o++;
  }
  return s;
}
const Uu = "11.2.2", ri = -1, Jn = "en-US", to = "", eo = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Vu() {
  return {
    upper: (e, t) => t === "text" && q(e) ? e.toUpperCase() : t === "vnode" && yt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && q(e) ? e.toLowerCase() : t === "vnode" && yt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && q(e) ? eo(e) : t === "vnode" && yt(e) && "__v_isVNode" in e ? eo(e.children) : e
  };
}
let ua;
function Yu(e) {
  ua = e;
}
let ha;
function Gu(e) {
  ha = e;
}
let da;
function Xu(e) {
  da = e;
}
let fa = null;
const no = (e) => {
  fa = e;
}, Ku = () => fa;
let io = 0;
function Zu(e = {}) {
  const t = Et(e.onWarn) ? e.onWarn : Hc, n = q(e.version) ? e.version : Uu, i = q(e.locale) || Et(e.locale) ? e.locale : Jn, s = Et(i) ? Jn : i, o = zt(e.fallbackLocale) || wt(e.fallbackLocale) || q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = wt(e.messages) ? e.messages : bi(s), r = wt(e.datetimeFormats) ? e.datetimeFormats : bi(s), l = wt(e.numberFormats) ? e.numberFormats : bi(s), c = jt(St(), e.modifiers, Vu()), d = e.pluralRules || St(), g = Et(e.missing) ? e.missing : null, w = Ot(e.missingWarn) || qn(e.missingWarn) ? e.missingWarn : !0, y = Ot(e.fallbackWarn) || qn(e.fallbackWarn) ? e.fallbackWarn : !0, k = !!e.fallbackFormat, f = !!e.unresolving, x = Et(e.postTranslation) ? e.postTranslation : null, p = wt(e.processor) ? e.processor : null, _ = Ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter, S = Et(e.messageCompiler) ? e.messageCompiler : ua, O = Et(e.messageResolver) ? e.messageResolver : ha || Hu, z = Et(e.localeFallbacker) ? e.localeFallbacker : da || Iu, M = yt(e.fallbackContext) ? e.fallbackContext : void 0, H = e, Q = yt(H.__datetimeFormatters) ? H.__datetimeFormatters : /* @__PURE__ */ new Map(), it = yt(H.__numberFormatters) ? H.__numberFormatters : /* @__PURE__ */ new Map(), rt = yt(H.__meta) ? H.__meta : {};
  io++;
  const ot = {
    version: n,
    cid: io,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: d,
    missing: g,
    missingWarn: w,
    fallbackWarn: y,
    fallbackFormat: k,
    unresolving: f,
    postTranslation: x,
    processor: p,
    warnHtmlMessage: _,
    escapeParameter: v,
    messageCompiler: S,
    messageResolver: O,
    localeFallbacker: z,
    fallbackContext: M,
    onWarn: t,
    __meta: rt
  };
  return ot.datetimeFormats = r, ot.numberFormats = l, ot.__datetimeFormatters = Q, ot.__numberFormatters = it, ot;
}
const bi = (e) => ({ [e]: St() });
function ns(e, t, n, i, s) {
  const { missing: o, onWarn: a } = e;
  if (o !== null) {
    const r = o(e, n, t, s);
    return q(r) ? r : t;
  } else
    return t;
}
function fn(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function qu(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Ju(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (qu(e, t[i]))
      return !0;
  return !1;
}
function so(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e, [l, c, d, g] = Ai(...t), w = Ot(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Ot(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, k = es(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    k
  );
  if (!q(l) || l === "")
    return new Intl.DateTimeFormat(k, g).format(c);
  let x = {}, p, _ = null;
  const v = "datetime format";
  for (let z = 0; z < f.length && (p = f[z], x = n[p] || {}, _ = x[l], !wt(_)); z++)
    ns(e, l, p, w, v);
  if (!wt(_) || !q(p))
    return i ? ri : l;
  let S = `${p}__${l}`;
  oi(g) || (S = `${S}__${JSON.stringify(g)}`);
  let O = r.get(S);
  return O || (O = new Intl.DateTimeFormat(p, jt({}, _, g)), r.set(S, O)), y ? O.formatToParts(c) : O.format(c);
}
const ga = [
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
function Ai(...e) {
  const [t, n, i, s] = e, o = St();
  let a = St(), r;
  if (q(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw be(xe.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    r = new Date(c);
    try {
      r.toISOString();
    } catch {
      throw be(xe.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Vc(t)) {
    if (isNaN(t.getTime()))
      throw be(xe.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (Bt(t))
    r = t;
  else
    throw be(xe.INVALID_ARGUMENT);
  return q(n) ? o.key = n : wt(n) && Object.keys(n).forEach((l) => {
    ga.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), q(i) ? o.locale = i : wt(i) && (a = i), wt(s) && (a = s), [o.key || "", r, o, a];
}
function oo(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function ao(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e, [l, c, d, g] = Ii(...t), w = Ot(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Ot(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const y = !!d.part, k = es(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    k
  );
  if (!q(l) || l === "")
    return new Intl.NumberFormat(k, g).format(c);
  let x = {}, p, _ = null;
  const v = "number format";
  for (let z = 0; z < f.length && (p = f[z], x = n[p] || {}, _ = x[l], !wt(_)); z++)
    ns(e, l, p, w, v);
  if (!wt(_) || !q(p))
    return i ? ri : l;
  let S = `${p}__${l}`;
  oi(g) || (S = `${S}__${JSON.stringify(g)}`);
  let O = r.get(S);
  return O || (O = new Intl.NumberFormat(p, jt({}, _, g)), r.set(S, O)), y ? O.formatToParts(c) : O.format(c);
}
const ma = [
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
function Ii(...e) {
  const [t, n, i, s] = e, o = St();
  let a = St();
  if (!Bt(t))
    throw be(xe.INVALID_ARGUMENT);
  const r = t;
  return q(n) ? o.key = n : wt(n) && Object.keys(n).forEach((l) => {
    ma.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), q(i) ? o.locale = i : wt(i) && (a = i), wt(s) && (a = s), [o.key || "", r, o, a];
}
function ro(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const Qu = (e) => e, th = (e) => "", eh = "text", nh = (e) => e.length === 0 ? "" : Ji(e), ih = Zc;
function lo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function sh(e) {
  const t = Bt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Bt(e.named.count) || Bt(e.named.n)) ? Bt(e.named.count) ? e.named.count : Bt(e.named.n) ? e.named.n : t : t;
}
function oh(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function ah(e = {}) {
  const t = e.locale, n = sh(e), i = yt(e.pluralRules) && q(t) && Et(e.pluralRules[t]) ? e.pluralRules[t] : lo, s = yt(e.pluralRules) && q(t) && Et(e.pluralRules[t]) ? lo : void 0, o = (p) => p[i(n, p.length, s)], a = e.list || [], r = (p) => a[p], l = e.named || St();
  Bt(e.pluralIndex) && oh(n, l);
  const c = (p) => l[p];
  function d(p, _) {
    const v = Et(e.messages) ? e.messages(p, !!_) : yt(e.messages) ? e.messages[p] : !1;
    return v || (e.parent ? e.parent.message(p) : th);
  }
  const g = (p) => e.modifiers ? e.modifiers[p] : Qu, w = wt(e.processor) && Et(e.processor.normalize) ? e.processor.normalize : nh, y = wt(e.processor) && Et(e.processor.interpolate) ? e.processor.interpolate : ih, k = wt(e.processor) && q(e.processor.type) ? e.processor.type : eh, x = {
    list: r,
    named: c,
    plural: o,
    linked: (p, ..._) => {
      const [v, S] = _;
      let O = "text", z = "";
      _.length === 1 ? yt(v) ? (z = v.modifier || z, O = v.type || O) : q(v) && (z = v || z) : _.length === 2 && (q(v) && (z = v || z), q(S) && (O = S || O));
      const M = d(p, !0)(x), H = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && zt(M) && z ? M[0] : M
      );
      return z ? g(z)(H, O) : H;
    },
    message: d,
    type: k,
    interpolate: y,
    normalize: w,
    values: jt(St(), a, l)
  };
  return x;
}
const co = () => "", ke = (e) => Et(e);
function uo(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = Oi(...t), d = Ot(c.missingWarn) ? c.missingWarn : e.missingWarn, g = Ot(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, w = Ot(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, y = !!c.resolvedMessage, k = q(c.default) || Ot(c.default) ? Ot(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, f = n || k != null && (q(k) || Et(k)), x = es(e, c);
  w && rh(c);
  let [p, _, v] = y ? [
    l,
    x,
    r[x] || St()
  ] : pa(e, l, x, a, g, d), S = p, O = l;
  if (!y && !(q(S) || pe(S) || ke(S)) && f && (S = k, O = S), !y && (!(q(S) || pe(S) || ke(S)) || !q(_)))
    return s ? ri : l;
  let z = !1;
  const M = () => {
    z = !0;
  }, H = ke(S) ? S : wa(e, l, _, S, O, M);
  if (z)
    return S;
  const Q = uh(e, _, v, c), it = ah(Q), rt = lh(e, H, it);
  let ot = i ? i(rt, l) : rt;
  return w && q(ot) && (ot = Gc(ot)), ot;
}
function rh(e) {
  zt(e.list) ? e.list = e.list.map((t) => q(t) ? Vs(t) : t) : yt(e.named) && Object.keys(e.named).forEach((t) => {
    q(e.named[t]) && (e.named[t] = Vs(e.named[t]));
  });
}
function pa(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, d = c(e, i, n);
  let g = St(), w, y = null;
  const k = "translate";
  for (let f = 0; f < d.length && (w = d[f], g = a[w] || St(), (y = l(g, t)) === null && (y = g[t]), !(q(y) || pe(y) || ke(y))); f++)
    if (!Ju(w, d)) {
      const x = ns(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        w,
        o,
        k
      );
      x !== t && (y = x);
    }
  return [y, w, g];
}
function wa(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (ke(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => i;
    return c.locale = n, c.key = t, c;
  }
  const l = a(i, ch(e, n, s, i, r, o));
  return l.locale = n, l.key = t, l.source = i, l;
}
function lh(e, t, n) {
  return t(n);
}
function Oi(...e) {
  const [t, n, i] = e, s = St();
  if (!q(t) && !Bt(t) && !ke(t) && !pe(t))
    throw be(xe.INVALID_ARGUMENT);
  const o = Bt(t) ? String(t) : (ke(t), t);
  return Bt(n) ? s.plural = n : q(n) ? s.default = n : wt(n) && !oi(n) ? s.named = n : zt(n) && (s.list = n), Bt(i) ? s.plural = i : q(i) ? s.default = i : wt(i) && jt(s, i), [o, s];
}
function ch(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => jc(t, n, a)
  };
}
function uh(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: d } = e, w = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (y, k) => {
      let f = a(n, y);
      if (f == null && (d || k)) {
        const [, , x] = pa(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          r,
          l,
          c
        );
        f = a(x, y);
      }
      if (q(f) || pe(f)) {
        let x = !1;
        const _ = wa(e, y, t, f, y, () => {
          x = !0;
        });
        return x ? co : _;
      } else return ke(f) ? f : co;
    }
  };
  return e.processor && (w.processor = e.processor), i.list && (w.list = i.list), i.named && (w.named = i.named), Bt(i.plural) && (w.pluralIndex = i.plural), w;
}
bu();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const hh = "11.2.2";
function dh() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Un().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Un().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Un().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const en = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Au,
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
function Tn(e, ...t) {
  return ai(e, null, void 0);
}
const zi = /* @__PURE__ */ je("__translateVNode"), Di = /* @__PURE__ */ je("__datetimeParts"), Ni = /* @__PURE__ */ je("__numberParts"), fh = je("__setPluralRules"), ya = /* @__PURE__ */ je("__injectWithOption"), Wi = /* @__PURE__ */ je("__dispose");
function Mn(e) {
  if (!yt(e) || pe(e))
    return e;
  for (const t in e)
    if (le(e, t))
      if (!t.includes("."))
        yt(e[t]) && Mn(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = St()), !yt(s[n[a]])) {
            o = !0;
            break;
          }
          s = s[n[a]];
        }
        if (o || (pe(s) ? la.includes(n[i]) || delete e[t] : (s[n[i]] = e[t], delete e[t])), !pe(s)) {
          const a = s[n[i]];
          yt(a) && Mn(a);
        }
      }
  return e;
}
function va(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = wt(n) ? n : zt(i) ? St() : { [e]: St() };
  if (zt(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || St(), Vn(c, a[l])) : Vn(c, a);
    } else
      q(r) && Vn(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      le(a, r) && Mn(a[r]);
  return a;
}
function gh(e) {
  return e.type;
}
function mh(e, t, n) {
  let i = yt(t.messages) ? t.messages : St();
  "__i18nGlobal" in n && (i = va(e.locale.value, {
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
function ho(e) {
  return b(_r, null, e, 0);
}
function xa() {
  return "currentInstance" in mi ? mi["currentInstance"] : mi.getCurrentInstance();
}
const fo = () => [], ph = () => !1;
let go = 0;
function mo(e) {
  return (t, n, i, s) => e(n, i, xa() || void 0, s);
}
function wh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = js ? Z : kr;
  let a = Ot(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : q(e.locale) ? e.locale : Jn
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : q(e.fallbackLocale) || zt(e.fallbackLocale) || wt(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(va(r.value, e)), d = o(wt(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), g = o(wt(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let w = t ? t.missingWarn : Ot(e.missingWarn) || qn(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : Ot(e.fallbackWarn) || qn(e.fallbackWarn) ? e.fallbackWarn : !0, k = t ? t.fallbackRoot : Ot(e.fallbackRoot) ? e.fallbackRoot : !0, f = !!e.fallbackFormat, x = Et(e.missing) ? e.missing : null, p = Et(e.missing) ? mo(e.missing) : null, _ = Et(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : Ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const O = t ? t.modifiers : wt(e.modifiers) ? e.modifiers : {};
  let z = e.pluralRules || t && t.pluralRules, M;
  M = (() => {
    i && no(null);
    const C = {
      version: hh,
      locale: r.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: O,
      pluralRules: z,
      missing: p === null ? void 0 : p,
      missingWarn: w,
      fallbackWarn: y,
      fallbackFormat: f,
      unresolving: !0,
      postTranslation: _ === null ? void 0 : _,
      warnHtmlMessage: v,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = d.value, C.numberFormats = g.value, C.__datetimeFormatters = wt(M) ? M.__datetimeFormatters : void 0, C.__numberFormatters = wt(M) ? M.__numberFormatters : void 0;
    const $ = Zu(C);
    return i && no($), $;
  })(), fn(M, r.value, l.value);
  function Q() {
    return [
      r.value,
      l.value,
      c.value,
      d.value,
      g.value
    ];
  }
  const it = G({
    get: () => r.value,
    set: (C) => {
      M.locale = C, r.value = C;
    }
  }), rt = G({
    get: () => l.value,
    set: (C) => {
      M.fallbackLocale = C, l.value = C, fn(M, r.value, C);
    }
  }), ot = G(() => c.value), ht = /* @__PURE__ */ G(() => d.value), Tt = /* @__PURE__ */ G(() => g.value);
  function dt() {
    return Et(_) ? _ : null;
  }
  function tt(C) {
    _ = C, M.postTranslation = C;
  }
  function lt() {
    return x;
  }
  function pt(C) {
    C !== null && (p = mo(C)), x = C, M.missing = p;
  }
  const ut = (C, $, mt, gt, Jt, Ee) => {
    Q();
    let ue;
    try {
      i || (M.fallbackContext = t ? Ku() : void 0), ue = C(M);
    } finally {
      i || (M.fallbackContext = void 0);
    }
    if (mt !== "translate exists" && // for not `te` (e.g `t`)
    Bt(ue) && ue === ri || mt === "translate exists" && !ue) {
      const [cn, hs] = $();
      return t && k ? gt(t) : Jt(cn);
    } else {
      if (Ee(ue))
        return ue;
      throw Tn(en.UNEXPECTED_RETURN_TYPE);
    }
  };
  function U(...C) {
    return ut(($) => Reflect.apply(uo, null, [$, ...C]), () => Oi(...C), "translate", ($) => Reflect.apply($.t, $, [...C]), ($) => $, ($) => q($));
  }
  function ft(...C) {
    const [$, mt, gt] = C;
    if (gt && !yt(gt))
      throw Tn(en.INVALID_ARGUMENT);
    return U($, mt, jt({ resolvedMessage: !0 }, gt || {}));
  }
  function K(...C) {
    return ut(($) => Reflect.apply(so, null, [$, ...C]), () => Ai(...C), "datetime format", ($) => Reflect.apply($.d, $, [...C]), () => to, ($) => q($) || zt($));
  }
  function Lt(...C) {
    return ut(($) => Reflect.apply(ao, null, [$, ...C]), () => Ii(...C), "number format", ($) => Reflect.apply($.n, $, [...C]), () => to, ($) => q($) || zt($));
  }
  function Nt(C) {
    return C.map(($) => q($) || Bt($) || Ot($) ? ho(String($)) : $);
  }
  const Rt = {
    normalize: Nt,
    interpolate: (C) => C,
    type: "vnode"
  };
  function Mt(...C) {
    return ut(($) => {
      let mt;
      const gt = $;
      try {
        gt.processor = Rt, mt = Reflect.apply(uo, null, [gt, ...C]);
      } finally {
        gt.processor = null;
      }
      return mt;
    }, () => Oi(...C), "translate", ($) => $[zi](...C), ($) => [ho($)], ($) => zt($));
  }
  function Xt(...C) {
    return ut(($) => Reflect.apply(ao, null, [$, ...C]), () => Ii(...C), "number format", ($) => $[Ni](...C), fo, ($) => q($) || zt($));
  }
  function se(...C) {
    return ut(($) => Reflect.apply(so, null, [$, ...C]), () => Ai(...C), "datetime format", ($) => $[Di](...C), fo, ($) => q($) || zt($));
  }
  function Ut(C) {
    z = C, M.pluralRules = z;
  }
  function N(C, $) {
    return ut(() => {
      if (!C)
        return !1;
      const mt = q($) ? $ : r.value, gt = kt(mt), Jt = M.messageResolver(gt, C);
      return pe(Jt) || ke(Jt) || q(Jt);
    }, () => [C], "translate exists", (mt) => Reflect.apply(mt.te, mt, [C, $]), ph, (mt) => Ot(mt));
  }
  function ct(C) {
    let $ = null;
    const mt = ca(M, l.value, r.value);
    for (let gt = 0; gt < mt.length; gt++) {
      const Jt = c.value[mt[gt]] || {}, Ee = M.messageResolver(Jt, C);
      if (Ee != null) {
        $ = Ee;
        break;
      }
    }
    return $;
  }
  function vt(C) {
    const $ = ct(C);
    return $ ?? (t ? t.tm(C) || {} : {});
  }
  function kt(C) {
    return c.value[C] || {};
  }
  function bt(C, $) {
    if (s) {
      const mt = { [C]: $ };
      for (const gt in mt)
        le(mt, gt) && Mn(mt[gt]);
      $ = mt[C];
    }
    c.value[C] = $, M.messages = c.value;
  }
  function At(C, $) {
    c.value[C] = c.value[C] || {};
    const mt = { [C]: $ };
    if (s)
      for (const gt in mt)
        le(mt, gt) && Mn(mt[gt]);
    $ = mt[C], Vn($, c.value[C]), M.messages = c.value;
  }
  function E(C) {
    return d.value[C] || {};
  }
  function h(C, $) {
    d.value[C] = $, M.datetimeFormats = d.value, oo(M, C, $);
  }
  function m(C, $) {
    d.value[C] = jt(d.value[C] || {}, $), M.datetimeFormats = d.value, oo(M, C, $);
  }
  function P(C) {
    return g.value[C] || {};
  }
  function W(C, $) {
    g.value[C] = $, M.numberFormats = g.value, ro(M, C, $);
  }
  function nt(C, $) {
    g.value[C] = jt(g.value[C] || {}, $), M.numberFormats = g.value, ro(M, C, $);
  }
  go++, t && js && (Le(t.locale, (C) => {
    a && (r.value = C, M.locale = C, fn(M, r.value, l.value));
  }), Le(t.fallbackLocale, (C) => {
    a && (l.value = C, M.fallbackLocale = C, fn(M, r.value, l.value));
  }));
  const J = {
    id: go,
    locale: it,
    fallbackLocale: rt,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(C) {
      a = C, C && t && (r.value = t.locale.value, l.value = t.fallbackLocale.value, fn(M, r.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: ot,
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
      return w;
    },
    set missingWarn(C) {
      w = C, M.missingWarn = w;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(C) {
      y = C, M.fallbackWarn = y;
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
      f = C, M.fallbackFormat = f;
    },
    get warnHtmlMessage() {
      return v;
    },
    set warnHtmlMessage(C) {
      v = C, M.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(C) {
      S = C, M.escapeParameter = C;
    },
    t: U,
    getLocaleMessage: kt,
    setLocaleMessage: bt,
    mergeLocaleMessage: At,
    getPostTranslationHandler: dt,
    setPostTranslationHandler: tt,
    getMissingHandler: lt,
    setMissingHandler: pt,
    [fh]: Ut
  };
  return J.datetimeFormats = ht, J.numberFormats = Tt, J.rt = ft, J.te = N, J.tm = vt, J.d = K, J.n = Lt, J.getDateTimeFormat = E, J.setDateTimeFormat = h, J.mergeDateTimeFormat = m, J.getNumberFormat = P, J.setNumberFormat = W, J.mergeNumberFormat = nt, J[ya] = n, J[zi] = Mt, J[Di] = se, J[Ni] = Xt, J;
}
const is = {
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
function yh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Kt ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, St());
}
function ba() {
  return Kt;
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
}, is);
function vh(e) {
  return zt(e) && !q(e[0]);
}
function ka(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = St();
    e.locale && (a.locale = e.locale), q(e.format) ? a.key = e.format : yt(e.format) && (q(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((w, y) => n.includes(y) ? jt(St(), w, { [y]: e.format[y] }) : w, St()));
    const l = i(e.value, a, r);
    let c = [a.key];
    zt(l) ? c = l.map((w, y) => {
      const k = s[w.type], f = k ? k({ [w.type]: w.value, index: y, parts: l }) : [w.value];
      return vh(f) && (f[0].key = `${w.type}-${y}`), f;
    }) : q(l) && (c = [l]);
    const d = jt(St(), o), g = q(e.tag) || yt(e.tag) ? e.tag : ba();
    return Io(g, d, c);
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
}, is);
const xh = /* @__PURE__ */ je("global-vue-i18n");
function En(e = {}) {
  const t = xa();
  if (t == null)
    throw Tn(en.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Tn(en.NOT_INSTALLED);
  const n = bh(t), i = _h(n), s = gh(t), o = kh(e, s);
  if (o === "global")
    return mh(i, e, s), i;
  if (o === "parent") {
    let l = Sh(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = jt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = wh(l), a.__composerExtend && (r[Wi] = a.__composerExtend(r)), Th(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function bh(e) {
  const t = Te(e.isCE ? xh : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Tn(e.isCE ? en.NOT_INSTALLED_WITH_PROVIDE : en.UNEXPECTED_ERROR);
  return t;
}
function kh(e, t) {
  return oi(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function _h(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Sh(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = Ch(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[ya] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function Ch(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Th(e, t, n) {
  an(() => {
  }, t), Hi(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Wi];
    s && (s(), delete i[Wi]);
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
}, is);
dh();
Yu(Eu);
Gu(ju);
Xu(ca);
const Mh = { class: "toolbar-panel first-panel" }, Lh = { class: "tool-section" }, Rh = ["onClick", "title", "aria-pressed"], Ph = { class: "action-section" }, Eh = ["disabled", "title"], Ah = ["disabled", "title"], Ih = ["disabled", "title"], Oh = ["title"], zh = ["title"], Dh = ["title"], Nh = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Wh = { class: "style-section" }, $h = {
  key: 0,
  class: "style-group"
}, Fh = { class: "style-label" }, Bh = { class: "line-width-selector" }, Hh = ["onClick", "title", "aria-pressed"], jh = { class: "style-value" }, Uh = {
  key: 1,
  class: "style-divider"
}, Vh = {
  key: 2,
  class: "style-group opacity-group"
}, Yh = { class: "style-label" }, Gh = ["value", "title", "aria-label"], Xh = { class: "style-value" }, Kh = {
  key: 3,
  class: "style-divider"
}, Zh = {
  key: 4,
  class: "style-group color-picker-group"
}, qh = { class: "style-label" }, Jh = { class: "color-row" }, Qh = ["onClick", "title", "aria-pressed"], td = { class: "custom-color-wrapper" }, ed = ["title"], nd = ["value", "title", "aria-label"], id = {
  key: 5,
  class: "style-group"
}, sd = { class: "style-label" }, od = { class: "text-size-selector" }, ad = ["onClick", "title", "aria-pressed"], rd = { class: "style-value" }, ld = {
  key: 6,
  class: "style-group"
}, cd = { class: "style-label" }, ud = { class: "mosaic-size-selector" }, hd = ["onClick", "title", "aria-pressed"], dd = { class: "style-value" }, fd = {
  key: 7,
  class: "style-group"
}, gd = { class: "style-label" }, md = { class: "translate-engine-selector" }, pd = ["onClick", "title", "aria-pressed"], wd = /* @__PURE__ */ Dt({
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
    const i = Z(null), { t: s } = En(), o = e, a = n, r = G(() => [
      { type: T.Select, icon: Ic, title: s("screenshot.select") },
      { type: T.Rectangle, icon: zc, title: s("screenshot.rectangle") },
      { type: T.Ellipse, icon: $c, title: s("screenshot.ellipse") },
      { type: T.Line, icon: qo, title: s("screenshot.line") },
      { type: T.Arrow, icon: Tc, title: s("screenshot.arrow") },
      { type: T.Pen, icon: Bc, title: s("screenshot.pen") },
      { type: T.Mosaic, icon: Ac, title: s("screenshot.mosaic") },
      { type: T.Text, icon: Rc, title: s("screenshot.text") },
      { type: T.ColorPicker, icon: Bs, title: s("screenshot.colorPicker") },
      { type: T.Ocr, icon: pn, title: s("screenshot.ocr") },
      { type: T.Translate, icon: Jo, title: s("screenshot.translate") },
      { type: T.Pin, icon: Ri, title: s("screenshot.pin") }
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
    ], g = [12, 14, 16, 18, 20, 24], w = [8, 12, 16, 20], y = G(() => ![T.Select, T.ColorPicker, T.Ocr, T.Pin].includes(o.currentTool)), k = G(
      () => [T.Rectangle, T.Ellipse, T.Line, T.Arrow, T.Pen].includes(o.currentTool)
    ), f = G(
      () => [T.Rectangle, T.Ellipse, T.Line, T.Arrow, T.Pen, T.Text].includes(o.currentTool)
    ), x = G(
      () => [
        T.Rectangle,
        T.Ellipse,
        T.Line,
        T.Arrow,
        T.Pen,
        T.Mosaic,
        T.Text
      ].includes(o.currentTool)
    ), p = G(() => o.currentTool === T.Text), _ = G(() => o.currentTool === T.Mosaic), v = G(() => o.currentTool === T.Translate), S = (U) => a("tool-select", U), O = (U) => a("color-change", U), z = (U) => a("line-width-change", U), M = (U) => {
      a("opacity-change", Number(U.target.value) / 100);
    }, H = (U) => a("text-size-change", U), Q = (U) => a("mosaic-size-change", U), it = () => a("undo"), rt = () => a("redo"), ot = () => a("delete"), ht = () => a("save"), Tt = () => a("confirm"), dt = () => a("cancel"), tt = (U) => {
      a("translate-engine-change", U);
    }, lt = (U) => {
      O(U);
    }, pt = (U) => {
      const ft = U.target;
      ft.value && O(ft.value);
    }, ut = () => {
      const U = i.value?.getBoundingClientRect();
      return {
        width: U?.width ?? 590,
        height: U?.height ?? 50
      };
    };
    return Le(() => o.currentTool, () => {
      bn(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: ut()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: ut
    }), (U, ft) => (B(), X(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        et(" 第一个面板：工具选择 + 操作按钮 "),
        I("div", Mh, [
          et(" 工具选择区域 "),
          I("div", Lh, [
            (B(!0), X(
              Kt,
              null,
              me(r.value, (K) => (B(), X("button", {
                key: K.type,
                onClick: (Lt) => S(K.type),
                class: _t(["tool-btn", { active: U.currentTool === K.type }]),
                title: K.title,
                "aria-pressed": U.currentTool === K.type
              }, [
                (B(), Ft(Ce(K.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, Rh))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          et(" 分隔线 "),
          ft[0] || (ft[0] = I(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          et(" 操作按钮区域 "),
          I("div", Ph, [
            I("button", {
              onClick: it,
              disabled: !U.canUndo,
              class: "action-btn undo",
              title: D(s)("screenshot.undo")
            }, [
              b(D(Wc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Eh),
            I("button", {
              onClick: rt,
              disabled: !U.canRedo,
              class: "action-btn redo",
              title: D(s)("screenshot.redo")
            }, [
              b(D(Pc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ah),
            I("button", {
              onClick: ot,
              disabled: !U.canDelete,
              class: "action-btn delete",
              title: D(s)("screenshot.delete")
            }, [
              b(D(Mc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ih),
            I("button", {
              onClick: dt,
              class: "action-btn cancel",
              title: D(s)("screenshot.cancel")
            }, [
              b(D(Li), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Oh),
            I("button", {
              onClick: ht,
              class: "action-btn save",
              title: D(s)("screenshot.save")
            }, [
              b(D(Lc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, zh),
            I("button", {
              onClick: Tt,
              class: "action-btn confirm",
              title: D(s)("screenshot.confirm")
            }, [
              b(D(Mi), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Dh)
          ])
        ]),
        et(" 第二个面板：样式设置区域 "),
        y.value ? (B(), X("div", Nh, [
          I("div", Wh, [
            et(" 线宽设置 "),
            k.value ? (B(), X("div", $h, [
              I(
                "span",
                Fh,
                at(D(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              I("div", Bh, [
                (B(), X(
                  Kt,
                  null,
                  me(c, (K) => I("button", {
                    key: K,
                    onClick: (Lt) => z(K),
                    class: _t(["width-btn", { active: U.currentLineWidth === K }]),
                    title: `${K}px`,
                    "aria-pressed": U.currentLineWidth === K
                  }, [
                    I(
                      "span",
                      {
                        class: "line-preview",
                        style: It({ height: `${K}px`, backgroundColor: U.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Hh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              I(
                "span",
                jh,
                at(U.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            k.value && f.value ? (B(), X("div", Uh)) : et("v-if", !0),
            et(" 不透明度设置 "),
            x.value ? (B(), X("div", Vh, [
              I(
                "span",
                Yh,
                at(D(s)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              I("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(U.currentOpacity * 100),
                style: It({
                  "--opacity-color": U.currentColor,
                  "--opacity-progress": `${Math.round(U.currentOpacity * 100)}%`
                }),
                title: `${Math.round(U.currentOpacity * 100)}%`,
                "aria-label": D(s)("screenshot.opacity"),
                onInput: M
              }, null, 44, Gh),
              I(
                "span",
                Xh,
                at(Math.round(U.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            x.value && f.value ? (B(), X("div", Kh)) : et("v-if", !0),
            et(" 颜色设置 "),
            f.value ? (B(), X("div", Zh, [
              I(
                "span",
                qh,
                at(D(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              I("div", Jh, [
                (B(), X(
                  Kt,
                  null,
                  me(d, (K) => I("button", {
                    key: K,
                    onClick: (Lt) => lt(K),
                    class: _t(["color-btn", { active: U.currentColor === K }]),
                    style: It({ backgroundColor: K }),
                    title: K,
                    "aria-pressed": U.currentColor === K
                  }, null, 14, Qh)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                I("div", td, [
                  I("button", {
                    class: _t(["color-btn custom-color-btn", { active: !d.includes(U.currentColor) }]),
                    title: D(s)("screenshot.customColor")
                  }, [
                    b(D(Bs), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, ed),
                  I("input", {
                    type: "color",
                    onChange: pt,
                    value: U.currentColor,
                    class: "color-input-hidden",
                    title: D(s)("screenshot.customColor"),
                    "aria-label": D(s)("screenshot.customColor")
                  }, null, 40, nd)
                ])
              ])
            ])) : et("v-if", !0),
            et(" 文字大小设置 "),
            p.value ? (B(), X("div", id, [
              I(
                "span",
                sd,
                at(D(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              I("div", od, [
                (B(), X(
                  Kt,
                  null,
                  me(g, (K) => I("button", {
                    key: K,
                    onClick: (Lt) => H(K),
                    class: _t(["size-btn", { active: U.currentTextSize === K }]),
                    title: `${K}px`,
                    "aria-pressed": U.currentTextSize === K
                  }, [
                    I(
                      "span",
                      {
                        class: "size-text",
                        style: It({ fontSize: `${Math.min(K, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, ad)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              I(
                "span",
                rd,
                at(U.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            et(" 马赛克大小设置 "),
            _.value ? (B(), X("div", ld, [
              I(
                "span",
                cd,
                at(D(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              I("div", ud, [
                (B(), X(
                  Kt,
                  null,
                  me(w, (K) => I("button", {
                    key: K,
                    onClick: (Lt) => Q(K),
                    class: _t(["size-btn", { active: U.currentMosaicSize === K }]),
                    title: `${D(s)("screenshot.brush")} ${K * 3}px`,
                    "aria-pressed": U.currentMosaicSize === K
                  }, [
                    I(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: It({
                          width: `${Math.min(K * 1.25, 18)}px`,
                          height: `${Math.min(K * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, hd)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              I(
                "span",
                dd,
                at(U.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            et(" 翻译引擎选择 "),
            v.value ? (B(), X("div", fd, [
              I(
                "span",
                gd,
                at(D(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              I("div", md, [
                (B(!0), X(
                  Kt,
                  null,
                  me(l.value, (K) => (B(), X("button", {
                    key: K.value,
                    onClick: (Lt) => tt(K.value),
                    class: _t(["engine-btn", { active: U.currentTranslateEngine === K.value }]),
                    title: K.label,
                    "aria-pressed": U.currentTranslateEngine === K.value
                  }, at(K.short), 11, pd))),
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
}), li = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, yd = /* @__PURE__ */ li(wd, [["__scopeId", "data-v-dc3e37ec"]]), vd = {
  class: "screenshot-container",
  ref: "containerRef"
}, xd = {
  key: 0,
  class: "mask-layers"
}, bd = {
  key: 1,
  class: "mask-full"
}, kd = { class: "size-text" }, _d = {
  key: 4,
  class: "loading-overlay"
}, Sd = /* @__PURE__ */ Dt({
  __name: "index",
  setup(e) {
    const t = Z(), n = Z(), i = Z(null), s = Z(null);
    let o = null;
    const a = Z(!0), r = Z(!1), l = Z(""), c = Z({ x: 0, y: 0 }), d = Z(16), g = Z(!1), w = Z("bing"), y = Z({ width: 590, height: 50 });
    let k = !1;
    const f = Z({
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
    }), x = Z(), p = Z(), _ = Z(), v = G(() => f.value.isDrawing), S = G(() => {
      if (!f.value.selectionRect) return {};
      const { y: E } = f.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${E}px`
      };
    }), O = G(() => {
      if (!f.value.selectionRect) return {};
      const { y: E, height: h } = f.value.selectionRect;
      return {
        top: `${E + h}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), z = G(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: h, height: m } = f.value.selectionRect;
      return {
        top: `${h}px`,
        left: "0",
        width: `${E}px`,
        height: `${m}px`
      };
    }), M = G(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: h, width: m, height: P } = f.value.selectionRect;
      return {
        top: `${h}px`,
        left: `${E + m}px`,
        right: "0",
        height: `${P}px`
      };
    }), H = G(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: h, width: m, height: P } = f.value.selectionRect, W = 10, nt = 12, J = Math.min(y.value.width, Math.max(0, window.innerWidth - W * 2)), C = Math.min(y.value.height, Math.max(0, window.innerHeight - W * 2)), $ = Math.max(W, window.innerHeight - C - W), mt = Math.max(W, window.innerWidth - J - W);
      let gt;
      return h + P + C + nt <= window.innerHeight - W ? gt = h + P + nt : h - C - nt >= W ? gt = h - C - nt : gt = h + P - C - W, gt = Math.min(Math.max(gt, W), $), {
        left: `${Math.min(Math.max(E + (m - J) / 2, W), mt)}px`,
        top: `${gt}px`
      };
    }), Q = G(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: h, width: m, height: P } = f.value.selectionRect, W = 10;
      let nt = E - W, J = h - W, C = "translateY(-100%)";
      return nt < 10 && (nt = E + m + W, C = "translateY(-100%)"), J < 30 && (J = h + P + W, C = "translateY(0)"), {
        left: `${nt}px`,
        top: `${J}px`,
        transform: C
      };
    }), it = G(() => {
      if (!f.value.selectionRect) return "";
      const { width: E, height: h } = f.value.selectionRect;
      return `${Math.round(E)} × ${Math.round(h)}`;
    }), rt = G(() => {
      const E = Ke(c.value);
      return {
        "--text-accent-color": f.value.currentStyle.color,
        left: `${E.x}px`,
        top: `${E.y}px`
      };
    }), ot = (E) => {
      if (E === T.Pin && f.value.selectionRect) {
        ht();
        return;
      }
      if (E === T.Ocr && f.value.selectionRect) {
        Tt();
        return;
      }
      o?.setTool(E);
    }, ht = async () => {
      try {
        await o?.createPinWindow();
      } catch (E) {
        j.error("[截图] 创建贴图失败", E);
      }
    }, Tt = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (E) {
        j.error("[截图] 创建文字识别贴图失败", E);
      }
    }, dt = (E) => {
      o?.updateStyle({ color: E });
    }, tt = (E) => {
      o?.updateStyle({ lineWidth: E });
    }, lt = (E) => {
      o?.updateStyle({ opacity: E });
    }, pt = (E) => {
      o?.updateTextSize(E);
    }, ut = (E) => {
      o?.updateMosaicSize(E);
    }, U = (E) => {
      w.value = E, o?.setTranslationEngine(E), o?.executeTranslation();
    }, ft = () => {
      o?.undoAnnotation();
    }, K = () => {
      o?.redoAnnotation();
    }, Lt = () => {
      o?.deleteSelectedAnnotation();
    }, Nt = async () => {
      try {
        await o?.processScreenshot("save"), vt();
      } catch (E) {
        const h = E?.message || E?.toString() || "保存失败";
        if (h.includes("保存已取消") || h.includes("cancelled"))
          return;
        j.error("保存截图时发生错误", h);
      }
    }, Zt = async () => {
      try {
        await o?.processScreenshot("copy"), vt();
      } catch {
      }
    }, Rt = () => {
      vt();
    };
    let Mt = null;
    const Xt = (E, h) => {
      if (h && h.getData().type === "text") {
        const m = h.getData();
        c.value = {
          x: m.points[0].x,
          y: m.points[0].y
        }, d.value = m.fontSize || f.value.textSize;
      } else
        c.value = E, d.value = f.value.textSize;
      r.value = !0, Mt = h || null, h && o?.setEditingAnnotation(h), h && h.getData().text ? l.value = h.getData().text : l.value = "", bn(() => {
        n.value?.focus(), Mt && n.value?.select();
      });
    }, se = () => {
      l.value.trim() ? Mt ? o?.updateTextAnnotation(Mt, l.value) : o?.createTextAnnotation(c.value, l.value) : Mt && o?.deleteAnnotation(Mt), Ut();
    }, Ut = () => {
      r.value = !1, l.value = "", Mt && o?.clearEditingAnnotation(), Mt = null;
    }, N = (E) => {
      navigator.clipboard && navigator.clipboard.writeText(E.hex).catch((h) => {
        j.error("[截图] 复制颜色到剪贴板失败", h);
      });
    }, ct = (E) => {
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
          se(), E.preventDefault();
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
          vt();
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
        E.shiftKey ? K() : ft(), E.preventDefault();
        return;
      }
      if (!h && E.ctrlKey && E.key.toLowerCase() === "y") {
        K(), E.preventDefault();
        return;
      }
      if (E.key === "Escape") {
        vt();
        return;
      } else if (E.key === "Delete" || E.key === "Backspace") {
        Lt(), E.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(E.key) || E.preventDefault();
    }, vt = async () => {
      if (!k) {
        k = !0, o?.destroy(), o = null;
        try {
          await A("cleanup_screenshot_resources");
        } catch {
          try {
            await A("clear_screenshot_background");
          } catch (h) {
            j.error("[截图] 清理后台缓存失败", h);
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
        }, r.value = !1, l.value = "", Mt = null, g.value = !1, a.value = !0;
        try {
          await A("close_and_destroy_screenshot_window");
        } catch (E) {
          j.error("[截图] 销毁截图窗口失败，回退到 close()", E), await s.value?.close();
        } finally {
          k = !1;
        }
      }
    }, kt = () => {
      const E = o?.getState();
      E && (f.value = E);
    }, bt = () => {
      const E = i.value?.getToolbarSize?.();
      E && (y.value = E);
    }, At = (E) => {
      const h = E.detail;
      h && (y.value = h);
    };
    return an(async () => {
      if (t.value) {
        s.value = new Pn("screenshot"), await s.value.emit("screenshot_ready"), o = new bc(
          t.value,
          kt,
          Xt,
          N
        );
        try {
          const E = await A("get_translation_engine");
          E && ["google", "bing", "offline"].includes(E) && (w.value = E, o?.setTranslationEngine(E));
        } catch (E) {
          j.error("[截图] 获取翻译引擎设置失败", E);
        }
        try {
          const E = await A("get_offline_model_activated");
          o?.setOfflineModelActivated(E);
        } catch (E) {
          j.error("[截图] 获取离线模型激活状态失败", E);
        }
        document.addEventListener("keydown", ct), window.addEventListener("resize", bt), window.addEventListener("screenshot-toolbar-resize", At), p.value = await vn("background-ready", () => {
          o?.triggerBackgroundReload();
        }), _.value = await vn("screenshot-close-requested", () => {
          vt();
        }), x.value = await vn("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const E = o?.getTranslationState();
          E?.isLoading || E?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const h = o?.getTranslationState();
              if (h?.isLoading || h?.isVisible)
                return;
              vt();
            }
          }, 100);
        }), bn(bt);
      }
    }), Hi(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", ct), window.removeEventListener("resize", bt), window.removeEventListener("screenshot-toolbar-resize", At), x.value?.(), p.value?.(), _.value?.(), x.value = void 0, p.value = void 0, _.value = void 0, s.value = null;
    }), (E, h) => (B(), X(
      "div",
      vd,
      [
        et(" 遮罩层 "),
        f.value.selectionRect ? (B(), X("div", xd, [
          I(
            "div",
            {
              class: "mask-top",
              style: It(S.value)
            },
            null,
            4
            /* STYLE */
          ),
          I(
            "div",
            {
              class: "mask-bottom",
              style: It(O.value)
            },
            null,
            4
            /* STYLE */
          ),
          I(
            "div",
            {
              class: "mask-left",
              style: It(z.value)
            },
            null,
            4
            /* STYLE */
          ),
          I(
            "div",
            {
              class: "mask-right",
              style: It(M.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (B(), X("div", bd)),
        et(" 画布 "),
        I(
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
            style: It(Q.value)
          },
          [
            I(
              "span",
              kd,
              at(it.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : et("v-if", !0),
        et(" 工具栏 "),
        f.value.selectionRect && !v.value ? (B(), Ft(yd, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: It(H.value),
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
          onToolSelect: ot,
          onColorChange: dt,
          onLineWidthChange: tt,
          onOpacityChange: lt,
          onTextSizeChange: pt,
          onMosaicSizeChange: ut,
          onTranslateEngineChange: U,
          onUndo: ft,
          onRedo: K,
          onDelete: Lt,
          onSave: Nt,
          onConfirm: Zt,
          onCancel: Rt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : et("v-if", !0),
        et(" 加载提示 - 仅在初始化时显示 "),
        g.value ? (B(), X("div", _d, [
          h[1] || (h[1] = I(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          I(
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
            style: It(rt.value)
          },
          [
            kn(I(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": h[0] || (h[0] = (m) => l.value = m),
                type: "text",
                class: "text-input",
                style: It({
                  color: f.value.currentStyle.color,
                  fontFamily: D(Xe),
                  fontSize: d.value + "px",
                  height: d.value + "px",
                  lineHeight: d.value + "px"
                }),
                onKeydown: [
                  Ts(se, ["enter"]),
                  Ts(Ut, ["escape"])
                ],
                onBlur: se,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [Sr, l.value]
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
}), Cd = /* @__PURE__ */ li(Sd, [["__scopeId", "data-v-fd4bfc80"]]), Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cd
}, Symbol.toStringTag, { value: "Module" })), _a = Symbol(), Yn = "el", Md = "is-", Ie = (e, t, n, i, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Sa = Symbol("namespaceContextKey"), Ld = (e) => {
  const t = e || (Qe() ? Te(Sa, Z(Yn)) : Z(Yn));
  return G(() => D(t) || Yn);
}, ss = (e, t) => {
  const n = Ld(t);
  return {
    namespace: n,
    b: (f = "") => Ie(n.value, e, f, "", ""),
    e: (f) => f ? Ie(n.value, e, "", f, "") : "",
    m: (f) => f ? Ie(n.value, e, "", "", f) : "",
    be: (f, x) => f && x ? Ie(n.value, e, f, x, "") : "",
    em: (f, x) => f && x ? Ie(n.value, e, "", f, x) : "",
    bm: (f, x) => f && x ? Ie(n.value, e, f, "", x) : "",
    bem: (f, x, p) => f && x && p ? Ie(n.value, e, f, x, p) : "",
    is: (f, ...x) => {
      const p = x.length >= 1 ? x[0] : !0;
      return f && p ? `${Md}${f}` : "";
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
const Rd = Object.prototype.hasOwnProperty, po = (e, t) => Rd.call(e, t), Ln = (e) => typeof e == "function", $e = (e) => typeof e == "string", Ca = (e) => e !== null && typeof e == "object";
var Pd = typeof global == "object" && global && global.Object === Object && global, Ed = typeof self == "object" && self && self.Object === Object && self, os = Pd || Ed || Function("return this")(), nn = os.Symbol, Ta = Object.prototype, Ad = Ta.hasOwnProperty, Id = Ta.toString, gn = nn ? nn.toStringTag : void 0;
function Od(e) {
  var t = Ad.call(e, gn), n = e[gn];
  try {
    e[gn] = void 0;
    var i = !0;
  } catch {
  }
  var s = Id.call(e);
  return i && (t ? e[gn] = n : delete e[gn]), s;
}
var zd = Object.prototype, Dd = zd.toString;
function Nd(e) {
  return Dd.call(e);
}
var Wd = "[object Null]", $d = "[object Undefined]", wo = nn ? nn.toStringTag : void 0;
function Ma(e) {
  return e == null ? e === void 0 ? $d : Wd : wo && wo in Object(e) ? Od(e) : Nd(e);
}
function Fd(e) {
  return e != null && typeof e == "object";
}
var Bd = "[object Symbol]";
function as(e) {
  return typeof e == "symbol" || Fd(e) && Ma(e) == Bd;
}
function Hd(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var rs = Array.isArray, yo = nn ? nn.prototype : void 0, vo = yo ? yo.toString : void 0;
function La(e) {
  if (typeof e == "string")
    return e;
  if (rs(e))
    return Hd(e, La) + "";
  if (as(e))
    return vo ? vo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ra(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var jd = "[object AsyncFunction]", Ud = "[object Function]", Vd = "[object GeneratorFunction]", Yd = "[object Proxy]";
function Gd(e) {
  if (!Ra(e))
    return !1;
  var t = Ma(e);
  return t == Ud || t == Vd || t == jd || t == Yd;
}
var ki = os["__core-js_shared__"], xo = function() {
  var e = /[^.]+$/.exec(ki && ki.keys && ki.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Xd(e) {
  return !!xo && xo in e;
}
var Kd = Function.prototype, Zd = Kd.toString;
function qd(e) {
  if (e != null) {
    try {
      return Zd.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jd = /[\\^$.*+?()[\]{}|]/g, Qd = /^\[object .+?Constructor\]$/, tf = Function.prototype, ef = Object.prototype, nf = tf.toString, sf = ef.hasOwnProperty, of = RegExp(
  "^" + nf.call(sf).replace(Jd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function af(e) {
  if (!Ra(e) || Xd(e))
    return !1;
  var t = Gd(e) ? of : Qd;
  return t.test(qd(e));
}
function rf(e, t) {
  return e?.[t];
}
function Pa(e, t) {
  var n = rf(e, t);
  return af(n) ? n : void 0;
}
function lf(e, t) {
  return e === t || e !== e && t !== t;
}
var cf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, uf = /^\w*$/;
function hf(e, t) {
  if (rs(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || as(e) ? !0 : uf.test(e) || !cf.test(e) || t != null && e in Object(t);
}
var Rn = Pa(Object, "create");
function df() {
  this.__data__ = Rn ? Rn(null) : {}, this.size = 0;
}
function ff(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var gf = "__lodash_hash_undefined__", mf = Object.prototype, pf = mf.hasOwnProperty;
function wf(e) {
  var t = this.__data__;
  if (Rn) {
    var n = t[e];
    return n === gf ? void 0 : n;
  }
  return pf.call(t, e) ? t[e] : void 0;
}
var yf = Object.prototype, vf = yf.hasOwnProperty;
function xf(e) {
  var t = this.__data__;
  return Rn ? t[e] !== void 0 : vf.call(t, e);
}
var bf = "__lodash_hash_undefined__";
function kf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Rn && t === void 0 ? bf : t, this;
}
function Fe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Fe.prototype.clear = df;
Fe.prototype.delete = ff;
Fe.prototype.get = wf;
Fe.prototype.has = xf;
Fe.prototype.set = kf;
function _f() {
  this.__data__ = [], this.size = 0;
}
function ci(e, t) {
  for (var n = e.length; n--; )
    if (lf(e[n][0], t))
      return n;
  return -1;
}
var Sf = Array.prototype, Cf = Sf.splice;
function Tf(e) {
  var t = this.__data__, n = ci(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : Cf.call(t, n, 1), --this.size, !0;
}
function Mf(e) {
  var t = this.__data__, n = ci(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Lf(e) {
  return ci(this.__data__, e) > -1;
}
function Rf(e, t) {
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
rn.prototype.clear = _f;
rn.prototype.delete = Tf;
rn.prototype.get = Mf;
rn.prototype.has = Lf;
rn.prototype.set = Rf;
var Pf = Pa(os, "Map");
function Ef() {
  this.size = 0, this.__data__ = {
    hash: new Fe(),
    map: new (Pf || rn)(),
    string: new Fe()
  };
}
function Af(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ui(e, t) {
  var n = e.__data__;
  return Af(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function If(e) {
  var t = ui(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Of(e) {
  return ui(this, e).get(e);
}
function zf(e) {
  return ui(this, e).has(e);
}
function Df(e, t) {
  var n = ui(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ue.prototype.clear = Ef;
Ue.prototype.delete = If;
Ue.prototype.get = Of;
Ue.prototype.has = zf;
Ue.prototype.set = Df;
var Nf = "Expected a function";
function ls(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Nf);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, i);
    return n.cache = o.set(s, a) || o, a;
  };
  return n.cache = new (ls.Cache || Ue)(), n;
}
ls.Cache = Ue;
var Wf = 500;
function $f(e) {
  var t = ls(e, function(i) {
    return n.size === Wf && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Ff = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bf = /\\(\\)?/g, Hf = $f(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ff, function(n, i, s, o) {
    t.push(s ? o.replace(Bf, "$1") : i || n);
  }), t;
});
function jf(e) {
  return e == null ? "" : La(e);
}
function Uf(e, t) {
  return rs(e) ? e : hf(e, t) ? [e] : Hf(jf(e));
}
function Vf(e) {
  if (typeof e == "string" || as(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Yf(e, t) {
  t = Uf(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Vf(t[n++])];
  return n && n == i ? e : void 0;
}
function Gf(e, t, n) {
  var i = e == null ? void 0 : Yf(e, t);
  return i === void 0 ? n : i;
}
function Xf(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var s = e[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Ea = (e) => e === void 0, bo = (e) => typeof e == "boolean", Be = (e) => typeof e == "number", $i = (e) => typeof Element > "u" ? !1 : e instanceof Element, Kf = (e) => $e(e) ? !Number.isNaN(Number(e)) : !1;
var ko;
const Ve = typeof window < "u", Zf = (e) => typeof e == "string", qf = () => {
};
Ve && ((ko = window?.navigator) != null && ko.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cs(e) {
  return typeof e == "function" ? e() : D(e);
}
function Jf(e) {
  return e;
}
function us(e) {
  return Tr() ? (Mr(e), !0) : !1;
}
function Qf(e, t = !0) {
  Qe() ? an(e) : t ? e() : bn(e);
}
function Aa(e, t, n = {}) {
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
    }, cs(t));
  }
  return i && (s.value = !0, Ve && l()), us(r), {
    isPending: Cr(s),
    start: l,
    stop: r
  };
}
function Ia(e) {
  var t;
  const n = cs(e);
  return (t = n?.$el) != null ? t : n;
}
const Oa = Ve ? window : void 0;
function za(...e) {
  let t, n, i, s;
  if (Zf(e[0]) || Array.isArray(e[0]) ? ([n, i, s] = e, t = Oa) : [t, n, i, s] = e, !t)
    return qf;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((d) => d()), o.length = 0;
  }, r = (d, g, w, y) => (d.addEventListener(g, w, y), () => d.removeEventListener(g, w, y)), l = Le(() => [Ia(t), cs(s)], ([d, g]) => {
    a(), d && o.push(...n.flatMap((w) => i.map((y) => r(d, w, y, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return us(c), c;
}
function tg(e, t = !1) {
  const n = Z(), i = () => n.value = !!e();
  return i(), Qf(i, t), n;
}
const _o = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, So = "__vueuse_ssr_handlers__";
_o[So] = _o[So] || {};
var Co = Object.getOwnPropertySymbols, eg = Object.prototype.hasOwnProperty, ng = Object.prototype.propertyIsEnumerable, ig = (e, t) => {
  var n = {};
  for (var i in e)
    eg.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Co)
    for (var i of Co(e))
      t.indexOf(i) < 0 && ng.call(e, i) && (n[i] = e[i]);
  return n;
};
function sg(e, t, n = {}) {
  const i = n, { window: s = Oa } = i, o = ig(i, ["window"]);
  let a;
  const r = tg(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Le(() => Ia(e), (g) => {
    l(), r.value && s && g && (a = new ResizeObserver(t), a.observe(g, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), c();
  };
  return us(d), {
    isSupported: r,
    stop: d
  };
}
var To;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(To || (To = {}));
var og = Object.defineProperty, Mo = Object.getOwnPropertySymbols, ag = Object.prototype.hasOwnProperty, rg = Object.prototype.propertyIsEnumerable, Lo = (e, t, n) => t in e ? og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lg = (e, t) => {
  for (var n in t || (t = {}))
    ag.call(t, n) && Lo(e, n, t[n]);
  if (Mo)
    for (var n of Mo(t))
      rg.call(t, n) && Lo(e, n, t[n]);
  return e;
};
const cg = {
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
lg({
  linear: Jf
}, cg);
const Ro = {
  current: 0
}, Po = Z(0), Da = 2e3, Eo = Symbol("elZIndexContextKey"), Na = Symbol("zIndexContextKey"), ug = (e) => {
  const t = Qe() ? Te(Eo, Ro) : Ro, n = e || (Qe() ? Te(Na, void 0) : void 0), i = G(() => {
    const a = D(n);
    return Be(a) ? a : Da;
  }), s = G(() => i.value + Po.value), o = () => (t.current++, Po.value = t.current, s.value);
  return !Ve && Te(Eo), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var hg = {
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
const dg = (e) => (t, n) => fg(t, n, D(e)), fg = (e, t, n) => Gf(n, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), gg = (e) => {
  const t = G(() => D(e).name), n = Lr(e) ? e : Z(e);
  return {
    lang: t,
    locale: n,
    t: dg(e)
  };
}, Wa = Symbol("localeContextKey"), mg = (e) => {
  const t = e || Te(Wa, Z());
  return gg(G(() => t.value || hg));
}, $a = "__epPropKey", ne = (e) => e, pg = (e) => Ca(e) && !!e[$a], Fa = (e, t) => {
  if (!Ca(e) || pg(e))
    return e;
  const { values: n, required: i, default: s, type: o, validator: a } = e, l = {
    type: o,
    required: !!i,
    validator: n || a ? (c) => {
      let d = !1, g = [];
      if (n && (g = Array.from(n), po(e, "default") && g.push(s), d || (d = g.includes(c))), a && (d || (d = a(c))), !d && g.length > 0) {
        const w = [...new Set(g)].map((y) => JSON.stringify(y)).join(", ");
        Rr(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${w}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [$a]: !0
  };
  return po(e, "default") && (l.default = s), l;
}, ln = (e) => Xf(Object.entries(e).map(([t, n]) => [
  t,
  Fa(n, t)
])), wg = ["", "default", "small", "large"], yg = Fa({
  type: String,
  values: wg,
  required: !1
}), vg = Symbol("size"), xg = Symbol("emptyValuesContextKey"), bg = ln({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ln(e) ? !e() : !e
  }
}), Ao = (e) => Object.keys(e), Qn = Z();
function Ba(e, t = void 0) {
  return Qe() ? Te(_a, Qn) : Qn;
}
function Ha(e, t) {
  const n = Ba(), i = ss(e, G(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || Yn;
  })), s = mg(G(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), o = ug(G(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || Da;
  })), a = G(() => {
    var r;
    return D(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return ja(G(() => D(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const ja = (e, t, n = !1) => {
  var i;
  const s = !!Qe(), o = s ? Ba() : void 0, a = (i = void 0) != null ? i : s ? Pr : void 0;
  if (!a)
    return;
  const r = G(() => {
    const l = D(e);
    return o?.value ? kg(o.value, l) : l;
  });
  return a(_a, r), a(Wa, G(() => r.value.locale)), a(Sa, G(() => r.value.namespace)), a(Na, G(() => r.value.zIndex)), a(vg, {
    size: G(() => r.value.size || "")
  }), a(xg, G(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !Qn.value) && (Qn.value = r.value), r;
}, kg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ao(e), ...Ao(t)])], i = {};
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
  if (Be(e) || Kf(e))
    return `${e}${t}`;
  if ($e(e))
    return e;
}
const Ua = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), Va = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), _g = ln({
  size: {
    type: ne([Number, String])
  },
  color: {
    type: String
  }
}), Sg = Dt({
  name: "ElIcon",
  inheritAttrs: !1
}), Cg = /* @__PURE__ */ Dt({
  ...Sg,
  props: _g,
  setup(e) {
    const t = e, n = ss("icon"), i = G(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Ea(s) ? void 0 : Fi(s),
        "--color": o
      };
    });
    return (s, o) => (B(), X("i", Er({
      class: D(n).b(),
      style: D(i)
    }, s.$attrs), [
      We(s.$slots, "default")
    ], 16));
  }
});
var Tg = /* @__PURE__ */ hi(Cg, [["__file", "icon.vue"]]);
const ti = Ua(Tg);
/*! Element Plus Icons Vue v2.3.1 */
var Mg = /* @__PURE__ */ Dt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Lg = Mg, Rg = /* @__PURE__ */ Dt({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ya = Rg, Pg = /* @__PURE__ */ Dt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Eg = Pg, Ag = /* @__PURE__ */ Dt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ig = Ag, Og = /* @__PURE__ */ Dt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (B(), X("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), zg = Og;
const Ga = ne([
  String,
  Object,
  Function
]), Dg = {
  Close: Ya
}, Ng = {
  Close: Ya
}, ei = {
  success: Ig,
  warning: zg,
  error: Lg,
  info: Eg
}, Wg = (e) => e, Gn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, $g = ln({
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
    type: ne([String, Object, Array])
  },
  offset: {
    type: ne(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Fg = Dt({
  name: "ElBadge"
}), Bg = /* @__PURE__ */ Dt({
  ...Fg,
  props: $g,
  setup(e, { expose: t }) {
    const n = e, i = ss("badge"), s = G(() => n.isDot ? "" : Be(n.value) && Be(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = G(() => {
      var a, r, l, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Fi(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Fi((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (B(), X("div", {
      class: _t(D(i).b())
    }, [
      We(a.$slots, "default"),
      b(ji, {
        name: `${D(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Gt(() => [
          kn(I("sup", {
            class: _t([
              D(i).e("content"),
              D(i).em("content", a.type),
              D(i).is("fixed", !!a.$slots.default),
              D(i).is("dot", a.isDot),
              D(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: It(D(o))
          }, [
            We(a.$slots, "content", { value: D(s) }, () => [
              Ar(at(D(s)), 1)
            ])
          ], 6), [
            [Xn, !a.hidden && (D(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Hg = /* @__PURE__ */ hi(Bg, [["__file", "badge.vue"]]);
const jg = Ua(Hg), Ug = ln({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ne(Object)
  },
  size: yg,
  button: {
    type: ne(Object)
  },
  experimentalFeatures: {
    type: ne(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ne(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...bg
}), re = {};
Dt({
  name: "ElConfigProvider",
  props: Ug,
  setup(e, { slots: t }) {
    Le(() => e.message, (i) => {
      Object.assign(re, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ja(e);
    return () => We(t, "default", { config: n?.value });
  }
});
const Xa = ["success", "info", "warning", "error"], Vt = Wg({
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
  appendTo: Ve ? document.body : void 0
}), Vg = ln({
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
    type: Ga,
    default: Vt.icon
  },
  id: {
    type: String,
    default: Vt.id
  },
  message: {
    type: ne([
      String,
      Object,
      Function
    ]),
    default: Vt.message
  },
  onClose: {
    type: ne(Function),
    default: Vt.onClose
  },
  showClose: {
    type: Boolean,
    default: Vt.showClose
  },
  type: {
    type: String,
    values: Xa,
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
}), Yg = {
  destroy: () => !0
}, ce = Ir([]), Gg = (e) => {
  const t = ce.findIndex((s) => s.id === e), n = ce[t];
  let i;
  return t > 0 && (i = ce[t - 1]), { current: n, prev: i };
}, Xg = (e) => {
  const { prev: t } = Gg(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Kg = (e, t) => ce.findIndex((i) => i.id === e) > 0 ? 16 : t, Zg = Dt({
  name: "ElMessage"
}), qg = /* @__PURE__ */ Dt({
  ...Zg,
  props: Vg,
  emits: Yg,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = Ng, { ns: s, zIndex: o } = Ha("message"), { currentZIndex: a, nextZIndex: r } = o, l = Z(), c = Z(!1), d = Z(0);
    let g;
    const w = G(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = G(() => {
      const M = n.type;
      return { [s.bm("icon", M)]: M && ei[M] };
    }), k = G(() => n.icon || ei[n.type] || ""), f = G(() => Xg(n.id)), x = G(() => Kg(n.id, n.offset) + f.value), p = G(() => d.value + x.value), _ = G(() => ({
      top: `${x.value}px`,
      zIndex: a.value
    }));
    function v() {
      n.duration !== 0 && ({ stop: g } = Aa(() => {
        O();
      }, n.duration));
    }
    function S() {
      g?.();
    }
    function O() {
      c.value = !1;
    }
    function z({ code: M }) {
      M === Gn.esc && O();
    }
    return an(() => {
      v(), r(), c.value = !0;
    }), Le(() => n.repeatNum, () => {
      S(), v();
    }), za(document, "keydown", z), sg(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: p,
      close: O
    }), (M, H) => (B(), Ft(ji, {
      name: D(s).b("fade"),
      onBeforeLeave: M.onClose,
      onAfterLeave: (Q) => M.$emit("destroy"),
      persisted: ""
    }, {
      default: Gt(() => [
        kn(I("div", {
          id: M.id,
          ref_key: "messageRef",
          ref: l,
          class: _t([
            D(s).b(),
            { [D(s).m(M.type)]: M.type },
            D(s).is("center", M.center),
            D(s).is("closable", M.showClose),
            D(s).is("plain", M.plain),
            M.customClass
          ]),
          style: It(D(_)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: v
        }, [
          M.repeatNum > 1 ? (B(), Ft(D(jg), {
            key: 0,
            value: M.repeatNum,
            type: D(w),
            class: _t(D(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : et("v-if", !0),
          D(k) ? (B(), Ft(D(ti), {
            key: 1,
            class: _t([D(s).e("icon"), D(y)])
          }, {
            default: Gt(() => [
              (B(), Ft(Ce(D(k))))
            ]),
            _: 1
          }, 8, ["class"])) : et("v-if", !0),
          We(M.$slots, "default", {}, () => [
            M.dangerouslyUseHTMLString ? (B(), X(Kt, { key: 1 }, [
              et(" Caution here, message could've been compromised, never use user's input as message "),
              I("p", {
                class: _t(D(s).e("content")),
                innerHTML: M.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (B(), X("p", {
              key: 0,
              class: _t(D(s).e("content"))
            }, at(M.message), 3))
          ]),
          M.showClose ? (B(), Ft(D(ti), {
            key: 2,
            class: _t(D(s).e("closeBtn")),
            onClick: Pt(O, ["stop"])
          }, {
            default: Gt(() => [
              b(D(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : et("v-if", !0)
        ], 46, ["id"]), [
          [Xn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Jg = /* @__PURE__ */ hi(qg, [["__file", "message.vue"]]);
let Qg = 1;
const Ka = (e) => {
  const t = !e || $e(e) || _n(e) || Ln(e) ? { message: e } : e, n = {
    ...Vt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if ($e(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    $i(i) || (i = document.body), n.appendTo = i;
  }
  return bo(re.grouping) && !n.grouping && (n.grouping = re.grouping), Be(re.duration) && n.duration === 3e3 && (n.duration = re.duration), Be(re.offset) && n.offset === 16 && (n.offset = re.offset), bo(re.showClose) && !n.showClose && (n.showClose = re.showClose), n;
}, tm = (e) => {
  const t = ce.indexOf(e);
  if (t === -1)
    return;
  ce.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, em = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Qg++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), tm(d);
    },
    onDestroy: () => {
      Kn(null, o);
    }
  }, r = b(Jg, a, Ln(a.message) || _n(a.message) ? {
    default: Ln(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || sn._context, Kn(r, o), e.appendChild(o.firstElementChild);
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
  if (!Ve)
    return { close: () => {
    } };
  const n = Ka(e);
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
  const i = em(n, t);
  return ce.push(i), i.handler;
};
Xa.forEach((e) => {
  sn[e] = (t = {}, n) => {
    const i = Ka(t);
    return sn({ ...i, type: e }, n);
  };
});
function nm(e) {
  for (const t of ce)
    (!e || e === t.props.type) && t.handler.close();
}
sn.closeAll = nm;
sn._context = null;
const im = Va(sn, "$message"), Za = [
  "success",
  "info",
  "warning",
  "error"
], sm = ln({
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
    type: Ga
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ne([
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
    type: ne(Function),
    default: () => {
    }
  },
  onClose: {
    type: ne(Function),
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
    values: [...Za, ""],
    default: ""
  },
  zIndex: Number
}), om = {
  destroy: () => !0
}, am = Dt({
  name: "ElNotification"
}), rm = /* @__PURE__ */ Dt({
  ...am,
  props: sm,
  emits: om,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: s } = Ha("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = Dg, l = Z(!1);
    let c;
    const d = G(() => {
      const v = n.type;
      return v && ei[n.type] ? i.m(v) : "";
    }), g = G(() => n.type && ei[n.type] || n.icon), w = G(() => n.position.endsWith("right") ? "right" : "left"), y = G(() => n.position.startsWith("top") ? "top" : "bottom"), k = G(() => {
      var v;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (v = n.zIndex) != null ? v : a.value
      };
    });
    function f() {
      n.duration > 0 && ({ stop: c } = Aa(() => {
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
    }), za(document, "keydown", _), t({
      visible: l,
      close: p
    }), (v, S) => (B(), Ft(ji, {
      name: D(i).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (O) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: Gt(() => [
        kn(I("div", {
          id: v.id,
          class: _t([D(i).b(), v.customClass, D(w)]),
          style: It(D(k)),
          role: "alert",
          onMouseenter: x,
          onMouseleave: f,
          onClick: v.onClick
        }, [
          D(g) ? (B(), Ft(D(ti), {
            key: 0,
            class: _t([D(i).e("icon"), D(d)])
          }, {
            default: Gt(() => [
              (B(), Ft(Ce(D(g))))
            ]),
            _: 1
          }, 8, ["class"])) : et("v-if", !0),
          I("div", {
            class: _t(D(i).e("group"))
          }, [
            I("h2", {
              class: _t(D(i).e("title")),
              textContent: at(v.title)
            }, null, 10, ["textContent"]),
            kn(I("div", {
              class: _t(D(i).e("content")),
              style: It(v.title ? void 0 : { margin: 0 })
            }, [
              We(v.$slots, "default", {}, () => [
                v.dangerouslyUseHTMLString ? (B(), X(Kt, { key: 1 }, [
                  et(" Caution here, message could've been compromised, never use user's input as message "),
                  I("p", { innerHTML: v.message }, null, 8, ["innerHTML"])
                ], 2112)) : (B(), X("p", { key: 0 }, at(v.message), 1))
              ])
            ], 6), [
              [Xn, v.message]
            ]),
            v.showClose ? (B(), Ft(D(ti), {
              key: 0,
              class: _t(D(i).e("closeBtn")),
              onClick: Pt(p, ["stop"])
            }, {
              default: Gt(() => [
                b(D(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : et("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Xn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var lm = /* @__PURE__ */ hi(rm, [["__file", "notification.vue"]]);
const ni = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Bi = 16;
let cm = 1;
const on = function(e = {}, t) {
  if (!Ve)
    return { close: () => {
    } };
  ($e(e) || _n(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  ni[n].forEach(({ vm: d }) => {
    var g;
    i += (((g = d.el) == null ? void 0 : g.offsetHeight) || 0) + Bi;
  }), i += Bi;
  const s = `notification_${cm++}`, o = e.onClose, a = {
    ...e,
    offset: i,
    id: s,
    onClose: () => {
      um(s, n, o);
    }
  };
  let r = document.body;
  $i(e.appendTo) ? r = e.appendTo : $e(e.appendTo) && (r = document.querySelector(e.appendTo)), $i(r) || (r = document.body);
  const l = document.createElement("div"), c = b(lm, a, Ln(a.message) ? a.message : _n(a.message) ? () => a.message : null);
  return c.appContext = Ea(t) ? on._context : t, c.props.onDestroy = () => {
    Kn(null, l);
  }, Kn(c, l), ni[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Za.forEach((e) => {
  on[e] = (t = {}, n) => (($e(t) || _n(t)) && (t = {
    message: t
  }), on({ ...t, type: e }, n));
});
function um(e, t, n) {
  const i = ni[t], s = i.findIndex(({ vm: c }) => {
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
      const { el: d, component: g } = i[c].vm, w = Number.parseInt(d.style[r], 10) - a - Bi;
      g.props.offset = w;
    }
}
function hm() {
  for (const e of Object.values(ni))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
on.closeAll = hm;
on._context = null;
const dm = Va(on, "$notify"), te = {
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
    i === "center" ? im({
      message: t,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : dm({
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
}, fm = ["disabled"], gm = {
  key: 0,
  class: "custom-button__loading"
}, mm = /* @__PURE__ */ Dt({
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
      e.loading ? (B(), X("div", gm, i[1] || (i[1] = [
        I(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            I("circle", {
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
      We(n.$slots, "default", {}, void 0, !0)
    ], 10, fm));
  }
}), ye = /* @__PURE__ */ li(mm, [["__scopeId", "data-v-9497085f"]]), pm = ["src"], wm = { class: "ocr-header" }, ym = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, vm = { "data-tauri-drag-region": "" }, xm = { class: "ocr-window-controls" }, bm = ["title"], km = ["title"], _m = ["title"], Sm = ["title"], Cm = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, Tm = ["src"], Mm = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, Lm = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Rm = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, Pm = { "data-tauri-drag-region": "" }, Em = { "data-tauri-drag-region": "" }, Am = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, Im = ["title"], Om = {
  key: 0,
  class: "ocr-original-image"
}, zm = ["src"], Dm = {
  key: 0,
  class: "ocr-state"
}, Nm = {
  key: 1,
  class: "ocr-state error"
}, Wm = {
  key: 2,
  class: "ocr-state muted"
}, $m = { class: "ocr-preview-pane" }, Fm = { class: "ocr-preview-stage" }, Bm = ["src"], Hm = {
  key: 0,
  class: "ocr-text-overlay"
}, jm = ["data-record-id"], Um = {
  key: 0,
  class: "ocr-record-pane"
}, Vm = { class: "ocr-record-main-row" }, Ym = ["onClick"], Gm = ["checked", "onChange"], Xm = { class: "ocr-record-index" }, Km = ["textContent", "onBlur"], Zm = {
  key: 0,
  class: "ocr-record-score"
}, qm = ["textContent", "onBlur"], Jm = { class: "ocr-action-bar" }, Qm = { class: "translate-btn-group relative" }, tp = {
  key: 0,
  class: "translate-menu"
}, ep = ["onClick"], np = { class: "engine-label" }, ip = { class: "ocr-engine-btn-group relative" }, sp = {
  key: 0,
  class: "ocr-engine-menu"
}, op = ["onClick"], ap = { class: "engine-label" }, rp = { class: "ocr-engine-btn-group relative" }, lp = {
  key: 2,
  class: "zoom-info"
}, cp = /* @__PURE__ */ Dt({
  __name: "index",
  setup(e) {
    const { t } = En(), n = Z(), i = Z(), s = Z(null), o = Z(""), a = Z(""), r = Z("pin"), l = Z(""), c = Z([]), d = Z(!1), g = Z(""), w = Z(""), y = Z(0), k = Z(0), f = Z({ width: 0, height: 0 }), x = Z({ width: 0, height: 0 }), p = Z(!1), _ = Z(!1), v = Z(/* @__PURE__ */ new Set()), S = Z(!1), O = Z(!1), z = Z("bing"), M = Z(!1), H = Z("auto"), Q = G(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: "离"
      }
    ]), it = G(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), rt = (u) => {
      const L = typeof u == "string" ? u.trim().toLowerCase() : "";
      return L === "auto" || L === "zh" || L === "zh-tw" || L === "en" || L === "ja" || L === "ko" ? L : "auto";
    }, ot = G(() => it.value.find((u) => u.value === H.value)?.label || t("pin.ocrLanguageAuto")), ht = G(() => H.value === "auto" ? "zh" : H.value), Tt = Z(1), dt = Z(!1), tt = Z(!1);
    let lt = null, pt = null;
    const ut = Z(!1), U = Z({ x: 0, y: 0 }), ft = Z(!0), K = Z({ width: 0, height: 0 });
    let Lt = null, Nt = 0;
    const Zt = Z(""), Rt = G(() => ({
      width: "100%",
      height: r.value === "ocr" ? "auto" : "100%",
      flex: r.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: r.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), Mt = G(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), Xt = G(() => y.value > 0 && k.value > 0 ? `${y.value} × ${k.value}` : t("pin.screenshotPreview")), se = G(() => d.value ? t("pin.recognizing") : g.value ? t("pin.recognizeFailed") : l.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Ut = G(
      () => c.value.filter((u) => u.selected)
    ), N = G(
      () => c.value.filter((u) => At(u))
    ), ct = G(() => Ut.value.length), vt = (u) => (u.translatedText || u.text).trim(), kt = (u) => u.map(vt).filter(Boolean).join(`

`), bt = () => {
      l.value = kt(c.value);
    }, At = (u) => y.value > 0 && k.value > 0 && u.bbox.width > 0 && u.bbox.height > 0, E = (u) => {
      if (!At(u))
        return {};
      const L = J(u.bbox.x / y.value * 100), R = J(u.bbox.y / k.value * 100), Y = J(u.bbox.width / y.value * 100, 6), st = J(u.bbox.height / k.value * 100, 4), Ht = h(u), Qt = m(u, Ht);
      return {
        left: `${L}%`,
        top: `${R}%`,
        width: `${Y}%`,
        height: `${st}%`,
        fontSize: `${Ht}px`,
        lineHeight: `${Qt}px`
      };
    }, h = (u) => {
      const L = P(), R = nt(
        u.blocks.map((Y) => Y.fontSize),
        u.bbox.height
      );
      return C(R * L, 7, 28);
    }, m = (u, L) => {
      const R = P(), Y = nt(
        u.blocks.map((st) => st.lineHeight || st.height),
        u.bbox.height
      );
      return Math.max(L, Y * R);
    }, P = () => y.value <= 0 || k.value <= 0 || f.value.width <= 0 || f.value.height <= 0 ? 1 : Math.min(
      f.value.width / y.value,
      f.value.height / k.value
    ), W = () => {
      const u = i.value;
      if (!u) {
        f.value = { width: 0, height: 0 };
        return;
      }
      f.value = {
        width: u.clientWidth,
        height: u.clientHeight
      };
    }, nt = (u, L) => {
      const R = u.filter(
        (Y) => typeof Y == "number" && Number.isFinite(Y) && Y > 0
      );
      return R.length === 0 ? L : R.reduce((Y, st) => Y + st, 0) / R.length;
    }, J = (u, L = 0) => Number.isFinite(u) ? Math.min(100, Math.max(L, u)) : L, C = (u, L, R) => Number.isFinite(u) ? Math.min(R, Math.max(L, u)) : L, $ = () => {
      const u = /* @__PURE__ */ new Date(), L = (R) => R.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${u.getFullYear()}-${L(u.getMonth() + 1)}-${L(u.getDate())} ${L(u.getHours())}.${L(u.getMinutes())}.${L(u.getSeconds())}.png`;
    }, mt = G(() => {
      const u = Math.min(
        K.value.width,
        K.value.height
      );
      let L = 1;
      return u < 300 && (L = Math.max(0.4, u / 300)), {
        left: `${U.value.x}px`,
        top: `${U.value.y}px`,
        transform: `scale(${L})`,
        transformOrigin: "top left"
      };
    }), gt = (u) => {
      o.value = u, y.value = 0, k.value = 0, f.value = { width: 0, height: 0 }, v.value = /* @__PURE__ */ new Set(), x.value = { width: 0, height: 0 }, r.value === "ocr" && (w.value = $(), _.value = !1), a.value && (URL.revokeObjectURL(a.value), a.value = "");
      try {
        const L = u.split(",")[1] || u, R = u.match(/data:([^;]+);/), Y = R ? R[1] : "image/png", st = atob(L), Ht = new Uint8Array(st.length);
        for (let ae = 0; ae < st.length; ae++)
          Ht[ae] = st.charCodeAt(ae);
        const Qt = new Blob([Ht], { type: Y });
        a.value = URL.createObjectURL(Qt);
      } catch (L) {
        j.error("[PIN窗口] 转换 Blob URL 失败", L), a.value = u;
      }
    }, Jt = async () => {
      await bn(), await new Promise((u) => requestAnimationFrame(() => u()));
      try {
        await s.value?.emit("pin-window-ready");
      } catch (u) {
        j.error("[PIN窗口] 发送 ready 事件失败", u);
      }
    }, Ee = (u) => {
      if (!u?.imageData)
        return j.error("[PIN窗口] 收到的事件数据格式不正确", u), !1;
      const L = u.mode === "ocr" ? "ocr" : "pin", R = `${L}:${u.imageData.length}`;
      return R === Zt.value ? !1 : (Zt.value = R, r.value = L, gt(u.imageData), oe(), r.value === "ocr" ? (cn(u.text || ""), g.value = "", u.text || ue()) : (Nt++, d.value = !1, g.value = "", l.value = "", c.value = []), !0);
    }, ue = async () => {
      if (!o.value) return;
      const u = ++Nt;
      d.value = !0, g.value = "";
      const L = Date.now();
      $t.log("[Pin OCR] recognize start", {
        requestId: u,
        imageDataLength: o.value.length,
        imageWidth: y.value,
        imageHeight: k.value,
        language: H.value,
        backendLanguage: ht.value
      });
      try {
        $t.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: u,
          language: H.value,
          backendLanguage: ht.value
        });
        const R = await A("recognize_text_from_image", {
          imageData: o.value,
          engine: "rapidocr",
          language: ht.value
        }), Y = qa(R), st = Y.length > 0 ? kt(Y) : er(R);
        if ($t.log("[Pin OCR] backend OCR success", {
          requestId: u,
          resultEngine: R?.engine,
          resultLanguage: R?.language,
          confidence: R?.confidence,
          blocks: Array.isArray(R?.blocks) ? R.blocks.length : 0,
          textLength: st.trim().length
        }), u !== Nt) return;
        Y.length > 0 ? (c.value = Y, bt()) : cn(st.trim()), $t.log("[Pin OCR] recognize success", {
          requestId: u,
          durationMs: Date.now() - L,
          textLength: l.value.length,
          textPreview: l.value.slice(0, 300)
        });
      } catch (R) {
        if (u !== Nt) return;
        j.error("[PIN窗口] OCR 识别失败", R), $t.log("[Pin OCR] recognize failed", {
          requestId: u,
          durationMs: Date.now() - L,
          error: nr(R)
        }), g.value = t("pin.recognizeFailed"), l.value = "", c.value = [], te.error(t("pin.recognizeFailed"));
      } finally {
        u === Nt && (d.value = !1);
      }
    }, cn = (u) => {
      const L = u.trim();
      l.value = L, c.value = L ? L.split(/\n{2,}|\n/).map((R, Y) => hs(R, Y)).filter((R) => R.text.trim()) : [];
    }, hs = (u, L) => ({
      id: `plain-${Date.now()}-${L}`,
      text: u.trim(),
      sourceText: u.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), qa = (u) => {
      const L = Qa(u?.blocks);
      return L.length === 0 ? [] : Uo(L).map((Y, st) => Ja(Y, st)).filter((Y) => Y.text.trim());
    }, Ja = (u, L) => {
      const R = u.text.trim(), Y = u.blocks;
      return {
        id: `ocr-${Date.now()}-${L}`,
        text: R,
        sourceText: R,
        translatedText: u.translatedText?.trim() || "",
        bbox: { ...u.bbox },
        blocks: Y,
        confidence: tr(Y),
        selected: !1
      };
    }, Qa = (u) => Array.isArray(u) ? u.map((L) => {
      if (!L || typeof L != "object")
        return null;
      const R = L, Y = typeof R.text == "string" ? R.text.trim() : "";
      if (!Y)
        return null;
      const st = {
        text: Y,
        x: Number(R.x || 0),
        y: Number(R.y || 0),
        width: Number(R.width || 0),
        height: Number(R.height || 0),
        fontSize: Number(R.fontSize || 0),
        lineHeight: Number(R.lineHeight || 0),
        angle: Number(R.angle || 0),
        isCodeBlock: !!R.isCodeBlock,
        confidence: Number(R.confidence || 0)
      };
      return typeof R.translatedText == "string" && (st.translatedText = R.translatedText), st;
    }).filter((L) => L !== null) : [], tr = (u) => {
      const L = u.map((R) => Number(R.confidence || 0)).filter((R) => Number.isFinite(R) && R > 0);
      return L.length === 0 ? 0 : L.reduce((R, Y) => R + Y, 0) / L.length;
    }, er = (u) => typeof u == "string" ? u : u?.text ? u.text : u?.full_text ? u.full_text : Array.isArray(u?.blocks) ? u.blocks.map((L) => L?.text).filter(Boolean).join(`
`) : "", nr = (u) => u instanceof Error ? `${u.name}: ${u.message}
${u.stack || ""}`.trim() : typeof u == "string" ? u : JSON.stringify(u) || String(u), ds = async () => {
      const u = sr();
      if (u)
        try {
          await navigator.clipboard.writeText(u), te.success(t("pin.copySuccess"));
        } catch (L) {
          j.error("[PIN窗口] 复制识别文本失败", L), te.error(t("pin.copyFailed"));
        } finally {
          oe();
        }
    }, ir = async () => {
      bt();
      const u = l.value.trim();
      if (u)
        try {
          await A("save_text_to_file", { text: u }), te.success(t("pin.saveSuccess"));
        } catch (L) {
          L !== "SAVE_CANCELLED" && (j.error("[PIN窗口] 保存文本失败", L), te.error(t("pin.saveFailed")));
        }
    }, sr = () => {
      const u = or();
      if (u)
        return u;
      const L = kt(Ut.value);
      return L || (bt(), l.value.trim());
    }, or = () => {
      const u = window.getSelection(), L = n.value?.querySelector(".ocr-reading-surface");
      if (!u || u.rangeCount === 0 || !L)
        return "";
      for (let R = 0; R < u.rangeCount; R += 1) {
        const st = u.getRangeAt(R).commonAncestorContainer;
        if (L.contains(st))
          return u.toString().trim();
      }
      return "";
    }, fs = (u) => {
      const L = c.value.find((R) => R.id === u);
      L && (L.selected = !L.selected);
    }, gs = (u, L, R) => {
      const Y = c.value.find((Ht) => Ht.id === u), st = R.target;
      !Y || !st || (Y[L] = st.innerText.trim(), L === "text" && !Y.sourceText.trim() && (Y.sourceText = Y.text), bt());
    }, ar = () => {
      O.value = !O.value, M.value = !1;
    }, rr = (u) => {
      z.value = u, O.value = !1, A("set_translation_engine", { engine: u }).catch((L) => {
        j.error("[PIN窗口] 保存翻译引擎设置失败", L);
      });
    }, ms = () => {
      M.value = !M.value, O.value = !1;
    }, lr = (u) => {
      H.value = u, M.value = !1, A("set_ocr_language", { language: u }).catch((L) => {
        j.error("[PIN窗口] 保存 OCR 语言设置失败", L);
      }), o.value && ue();
    }, cr = async () => {
      if (oe(), O.value = !1, M.value = !1, !l.value.trim() || S.value) return;
      const u = Ut.value.length > 0 ? Ut.value : c.value, L = u.length > 0 ? u.map((Y) => Y.text).join(`

`) : l.value, R = Oe(L);
      if (!qe(R)) {
        te.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      S.value = !0;
      try {
        if (await ur(), u.length > 0) {
          for (const Y of u) {
            const st = await ps(Y.text, R);
            st && (Y.translatedText = st.trim());
          }
          bt(), te.success(t("pin.translateSuccess"));
        } else {
          const Y = await ps(l.value, R);
          Y && cn(Y), te.success(t("pin.translateSuccess"));
        }
      } catch (Y) {
        j.error("[PIN窗口] 翻译失败", Y);
        const st = Y instanceof Error ? Y.message : String(Y);
        st !== "翻译已取消" && te.error(st || t("pin.translateFailed"));
      } finally {
        S.value = !1;
      }
    }, ur = async () => {
      if (z.value !== "offline")
        return;
      if ((await Gi()).isCached)
        await Ho();
      else
        throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
      if (!await A("get_offline_model_activated"))
        throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
    }, ps = async (u, L) => {
      const R = u.trim();
      return R ? z.value === "offline" ? Bo(R) : await A("translate_text", {
        text: R,
        from: "auto",
        to: L === "zh" ? "en" : "zh",
        engine: z.value
      }) : "";
    }, hr = () => {
      p.value = !p.value;
    }, dr = () => {
      _.value = !_.value;
    }, fr = (u) => {
      An(u);
    }, gr = async () => {
      if (!s.value) return;
      const u = s.value;
      typeof u.minimize == "function" && await u.minimize();
    }, mr = async () => {
      if (!s.value) return;
      const u = s.value;
      (typeof u.isMaximized == "function" ? await u.isMaximized() : !1) && typeof u.unmaximize == "function" ? await u.unmaximize() : typeof u.maximize == "function" && await u.maximize();
    }, ws = async (u) => {
      const L = u.target;
      if (y.value = L.naturalWidth, k.value = L.naturalHeight, s.value && x.value.width === 0)
        try {
          const R = await s.value.innerSize(), Y = await s.value.scaleFactor(), st = R.toLogical(Y);
          x.value = {
            width: st.width,
            height: st.height
          };
        } catch (R) {
          j.error("[PIN窗口] 获取窗口初始尺寸失败", R);
        }
    }, ys = async (u) => {
      if (u.ctrlKey && (u.preventDefault(), u.stopPropagation(), !tt.value && s.value)) {
        tt.value = !0;
        try {
          const R = (await s.value.innerSize()).toLogical(
            await s.value.scaleFactor()
          ), Y = u.deltaY > 0 ? 0.95 : 1.05, st = R.width, Ht = R.height, Qt = Math.round(st * Y), ae = Math.round(Ht * Y), un = 50, _e = 3e3;
          if (Qt >= un && Qt <= _e && ae >= un && ae <= _e) {
            if (await s.value.setSize(new wn(Qt, ae)), y.value > 0) {
              const Ae = Math.round(
                Qt / y.value * 100
              );
              Tt.value = Ae / 100;
            }
            dt.value = !0, di();
          }
        } catch (L) {
          j.error("[PIN窗口] 窗口缩放失败", L);
        } finally {
          setTimeout(() => {
            tt.value = !1;
          }, 100);
        }
      }
    }, pr = (u) => {
      r.value === "ocr" && u.ctrlKey && ys(u);
    }, di = () => {
      dt.value = !0, lt && clearTimeout(lt), lt = setTimeout(() => {
        dt.value = !1;
      }, 1e3);
    }, An = (u) => {
      u.preventDefault(), u.stopPropagation(), ut.value = !1, setTimeout(() => {
        const L = window.innerWidth, R = window.innerHeight;
        K.value = { width: L, height: R };
        const Y = Math.min(L, R);
        let st = 1;
        Y < 300 && (st = Math.max(0.4, Y / 300));
        const Ht = r.value === "ocr" ? 176 : 150, Qt = r.value === "ocr" && l.value.trim() ? 222 : 180, ae = Ht * st, un = Qt * st;
        let _e = u.clientX, Ae = u.clientY;
        _e + ae > L && (_e = L - ae - 5), Ae + un > R && (Ae = R - un - 5), _e = Math.max(5, _e), Ae = Math.max(5, Ae), U.value = { x: _e, y: Ae }, ut.value = !0;
      }, 10);
    }, oe = () => {
      ut.value = !1, O.value = !1, M.value = !1;
    }, vs = async () => {
      s.value && (ft.value = !ft.value, await s.value.setAlwaysOnTop(ft.value), oe());
    }, xs = async (u) => {
      if (s.value && !tt.value) {
        tt.value = !0;
        try {
          const R = (await s.value.innerSize()).toLogical(
            await s.value.scaleFactor()
          ), Y = Math.round(R.width * u), st = Math.round(R.height * u), Ht = 50, Qt = 3e3;
          Y >= Ht && Y <= Qt && st >= Ht && st <= Qt && (await s.value.setSize(new wn(Y, st)), y.value > 0 && (Tt.value = Y / y.value), di());
        } catch (L) {
          j.error("[PIN窗口] 键盘缩放失败", L);
        } finally {
          setTimeout(() => {
            tt.value = !1;
          }, 100);
        }
      }
    }, bs = async () => {
      if (s.value && x.value.width > 0 && x.value.height > 0)
        try {
          await s.value.setSize(
            new wn(
              x.value.width,
              x.value.height
            )
          ), Tt.value = 1, di();
        } catch (u) {
          j.error("[PIN窗口] 重置缩放失败", u);
        }
      oe();
    }, wr = async () => {
      try {
        const u = o.value;
        oe(), s.value && await s.value.hide(), await A("copy_image_to_clipboard", { imageData: u }), te.success(t("pin.copySuccess")), s.value && await s.value.close();
      } catch (u) {
        j.error("[PIN窗口] 复制图片失败", u), te.error(t("pin.copyFailed")), s.value && await s.value.close();
      }
    }, yr = async () => {
      const u = o.value;
      oe(), s.value && await s.value.hide();
      try {
        await A("save_pin_image", { imageData: u }), te.success(t("pin.saveSuccess")), s.value && await s.value.close();
      } catch (L) {
        L === "SAVE_CANCELLED" ? (j.info("[PIN窗口] 用户取消保存，恢复窗口显示"), s.value && await s.value.show()) : (j.error("[PIN窗口] 保存图片失败", L), te.error(t("pin.saveFailed")), s.value && await s.value.close());
      }
    }, fi = async () => {
      s.value && await s.value.close();
    }, ks = (u) => {
      u.preventDefault();
    }, gi = async (u) => {
      if (u.button === 0 && s.value) {
        const L = u.target;
        if (L.hasAttribute("data-tauri-drag-region") || L.closest("[data-tauri-drag-region]")) {
          if (L.closest("button") || L.closest(".ocr-view-original"))
            return;
          try {
            await s.value.startDragging();
          } catch (R) {
            j.error("[PIN窗口] 拖拽窗口失败", R);
          }
        }
      }
    }, _s = (u) => {
      const L = u.target;
      !L.closest(".context-menu") && !L.closest(".ocr-engine-btn-group") && oe();
    }, Ss = () => {
      if (r.value !== "ocr") {
        v.value = /* @__PURE__ */ new Set();
        return;
      }
      const u = window.getSelection();
      if (!u || u.rangeCount === 0 || u.isCollapsed) {
        v.value = /* @__PURE__ */ new Set();
        return;
      }
      const L = u.getRangeAt(0), R = n.value?.querySelector(".ocr-reading-surface");
      if (!R || !R.contains(L.commonAncestorContainer)) {
        v.value = /* @__PURE__ */ new Set();
        return;
      }
      const Y = /* @__PURE__ */ new Set();
      R.querySelectorAll(".ocr-overlay-block[data-record-id]").forEach((st) => {
        if (L.intersectsNode(st)) {
          const Ht = st.dataset.recordId;
          Ht && Y.add(Ht);
        }
      }), v.value = Y;
    }, Cs = (u) => {
      if (u.altKey && u.code === "Space") {
        u.preventDefault(), u.stopPropagation();
        return;
      }
      u.key === "Escape" ? ut.value ? oe() : fi() : (u.ctrlKey || u.metaKey) && (u.key === "0" ? (u.preventDefault(), bs()) : u.key === "=" || u.key === "+" ? (u.preventDefault(), xs(1.05)) : u.key === "-" && (u.preventDefault(), xs(0.95)));
    }, vr = async () => {
      if (s.value)
        try {
          const u = await A(
            "get_pin_window_data",
            { label: s.value.label }
          );
          u && Ee(u) && await Jt();
        } catch (u) {
          j.error("[PIN窗口] 主动获取窗口数据失败", u);
        }
    };
    return Le(
      i,
      (u) => {
        if (pt?.disconnect(), pt = null, !u) {
          f.value = { width: 0, height: 0 };
          return;
        }
        W(), pt = new ResizeObserver(W), pt.observe(u);
      },
      { flush: "post" }
    ), an(async () => {
      if (n.value) {
        try {
          const [u, L] = await Promise.all([
            A("get_translation_engine"),
            A("get_ocr_language")
          ]);
          (u === "google" || u === "bing" || u === "offline") && (z.value = u), H.value = rt(L);
        } catch (u) {
          j.error("[PIN窗口] 读取默认 OCR/翻译设置失败", u);
        }
        try {
          s.value = Pn.getCurrent();
          try {
            Lt = await s.value.listen(
              "pin-window-data",
              (u) => {
                Ee(u.payload) && Jt();
              }
            ), await vr();
          } catch (u) {
            j.error("[PIN窗口] 设置事件监听失败", u);
          }
        } catch (u) {
          if (j.error("[PIN窗口] 初始化错误", u), s.value)
            try {
              await s.value.show();
            } catch (L) {
              j.error("[PIN窗口] 显示窗口失败", L);
            }
        }
        document.addEventListener("click", _s), document.addEventListener("keydown", Cs, !0), document.addEventListener("contextmenu", ks, !0), document.addEventListener("selectionchange", Ss), window.addEventListener("blur", oe), document.body && (document.body.oncontextmenu = (u) => (u.preventDefault(), !1));
      }
    }), Hi(() => {
      a.value && URL.revokeObjectURL(a.value), Lt && Lt(), document.removeEventListener("click", _s), document.removeEventListener("keydown", Cs, !0), document.removeEventListener("contextmenu", ks, !0), document.removeEventListener("selectionchange", Ss), window.removeEventListener("blur", oe), pt?.disconnect(), pt = null, document.body && (document.body.oncontextmenu = null), lt && clearTimeout(lt);
    }), (u, L) => (B(), X(
      "div",
      {
        class: _t(["pin-container", { "ocr-mode": r.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: Pt(An, ["prevent"]),
        onWheelCapture: pr
      },
      [
        et(" 图片容器 "),
        a.value && r.value === "pin" ? (B(), X(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: It(Rt.value),
            onWheelCapture: ys,
            onContextmenu: Pt(An, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: gi
          },
          [
            I("img", {
              src: a.value,
              alt: "贴图",
              style: It(Mt.value),
              onLoad: ws,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, pm)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : et("v-if", !0),
        r.value === "ocr" ? (B(), X(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: Pt(An, ["prevent"])
          },
          [
            I("header", wm, [
              I(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: gi
                },
                [
                  I("div", ym, [
                    b(D(pn), {
                      theme: "outline",
                      size: "18"
                    }),
                    I(
                      "span",
                      vm,
                      at(u.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  I("div", xm, [
                    I("button", {
                      class: "ocr-window-btn",
                      title: ft.value ? u.$t("pin.togglePin") : u.$t("pin.pinWindow"),
                      onClick: Pt(vs, ["stop"])
                    }, [
                      (B(), Ft(Ce(ft.value ? D(Ri) : D(Fs)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, bm),
                    L[2] || (L[2] = I(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    I("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.minimize"),
                      onClick: Pt(gr, ["stop"])
                    }, [
                      b(D(qo), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, km),
                    I("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.maximize"),
                      onClick: Pt(mr, ["stop"])
                    }, [
                      b(D(Fc), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, _m),
                    I("button", {
                      class: "ocr-window-btn",
                      title: u.$t("pin.close"),
                      onClick: Pt(fi, ["stop"])
                    }, [
                      b(D(Li), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, Sm)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              I(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: gi
                },
                [
                  I("div", Cm, [
                    a.value ? (B(), X("img", {
                      key: 0,
                      src: a.value,
                      alt: "OCR preview",
                      onLoad: ws,
                      draggable: "false"
                    }, null, 40, Tm)) : et("v-if", !0)
                  ]),
                  I("div", Mm, [
                    I(
                      "div",
                      Lm,
                      at(w.value),
                      1
                      /* TEXT */
                    ),
                    I("div", Rm, [
                      I(
                        "span",
                        Pm,
                        at(Xt.value),
                        1
                        /* TEXT */
                      ),
                      L[3] || (L[3] = I(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      I(
                        "span",
                        Em,
                        at(se.value),
                        1
                        /* TEXT */
                      ),
                      !d.value && !g.value && l.value.trim() ? (B(), X("span", Am, " ✓ ")) : et("v-if", !0)
                    ])
                  ]),
                  I("button", {
                    class: "ocr-view-original",
                    title: p.value ? u.$t("pin.viewResult") : u.$t("pin.viewOriginal"),
                    onClick: Pt(hr, ["stop"])
                  }, [
                    (B(), Ft(Ce(p.value ? D(pn) : D(Oc)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    I(
                      "span",
                      null,
                      at(p.value ? u.$t("pin.viewResult") : u.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, Im)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            I(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: L[1] || (L[1] = Pt(() => {
                }, ["stop"]))
              },
              [
                p.value ? (B(), X("div", Om, [
                  I("img", {
                    src: a.value || o.value,
                    alt: "original"
                  }, null, 8, zm)
                ])) : (B(), X(
                  Kt,
                  { key: 1 },
                  [
                    d.value ? (B(), X("div", Dm, [
                      b(D($s), {
                        class: "ocr-loading-icon",
                        size: "20",
                        theme: "outline",
                        strokeWidth: 3
                      }),
                      I(
                        "span",
                        null,
                        at(u.$t("pin.recognizing")),
                        1
                        /* TEXT */
                      )
                    ])) : g.value ? (B(), X(
                      "div",
                      Nm,
                      at(g.value),
                      1
                      /* TEXT */
                    )) : l.value.trim() ? (B(), X(
                      "div",
                      {
                        key: 3,
                        class: _t(["ocr-result-layout", { "records-open": _.value }])
                      },
                      [
                        I("section", $m, [
                          I("div", Fm, [
                            I("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: i,
                              src: a.value || o.value,
                              alt: "OCR source",
                              onLoad: W
                            }, null, 40, Bm),
                            N.value.length > 0 ? (B(), X("div", Hm, [
                              (B(!0), X(
                                Kt,
                                null,
                                me(N.value, (R) => (B(), X("span", {
                                  key: R.id,
                                  class: _t(["ocr-overlay-block", {
                                    selected: R.selected,
                                    "range-selected": v.value.has(R.id)
                                  }]),
                                  "data-record-id": R.id,
                                  style: It(E(R))
                                }, at(R.text.trim()), 15, jm))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : et("v-if", !0)
                          ])
                        ]),
                        _.value ? (B(), X("section", Um, [
                          (B(!0), X(
                            Kt,
                            null,
                            me(c.value, (R, Y) => (B(), X(
                              "article",
                              {
                                key: R.id,
                                class: _t(["ocr-record-item", { selected: R.selected }])
                              },
                              [
                                I("div", Vm, [
                                  I("header", {
                                    class: "ocr-record-header",
                                    onClick: Pt((st) => fs(R.id), ["stop"])
                                  }, [
                                    I("input", {
                                      class: "ocr-record-checkbox",
                                      type: "checkbox",
                                      checked: R.selected,
                                      onChange: Pt((st) => fs(R.id), ["stop"]),
                                      onClick: L[0] || (L[0] = Pt(() => {
                                      }, ["stop"]))
                                    }, null, 40, Gm),
                                    I(
                                      "span",
                                      Xm,
                                      "#" + at(Y + 1),
                                      1
                                      /* TEXT */
                                    )
                                  ], 8, Ym),
                                  I("div", {
                                    class: "ocr-record-editor",
                                    contenteditable: "plaintext-only",
                                    spellcheck: "false",
                                    textContent: at(R.text),
                                    onBlur: (st) => gs(R.id, "text", st)
                                  }, null, 40, Km),
                                  R.confidence > 0 ? (B(), X(
                                    "span",
                                    Zm,
                                    at(Math.round(R.confidence)) + "% ",
                                    1
                                    /* TEXT */
                                  )) : et("v-if", !0)
                                ]),
                                R.translatedText ? (B(), X("div", {
                                  key: 0,
                                  class: "ocr-record-editor translated",
                                  contenteditable: "plaintext-only",
                                  spellcheck: "false",
                                  textContent: at(R.translatedText),
                                  onBlur: (st) => gs(R.id, "translatedText", st)
                                }, null, 40, qm)) : et("v-if", !0)
                              ],
                              2
                              /* CLASS */
                            ))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : et("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )) : (B(), X(
                      "div",
                      Wm,
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
            I("footer", Jm, [
              b(ye, {
                class: "ocr-action-btn",
                type: "text",
                title: u.$t("pin.copyText"),
                disabled: !l.value.trim(),
                onClick: Pt(ds, ["stop"])
              }, {
                default: Gt(() => [
                  b(D(yi), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  I(
                    "span",
                    null,
                    at(ct.value > 0 ? `${u.$t("pin.copyText")} (${ct.value})` : u.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              b(ye, {
                class: "ocr-action-btn",
                type: "text",
                title: _.value ? u.$t("pin.hideRecords") : u.$t("pin.showRecords"),
                disabled: c.value.length === 0,
                onClick: Pt(dr, ["stop"])
              }, {
                default: Gt(() => [
                  b(D(pn), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  I(
                    "span",
                    null,
                    at(_.value ? u.$t("pin.hideRecords") : u.$t("pin.showRecords")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              I("div", Qm, [
                b(ye, {
                  class: "ocr-action-btn translate-main",
                  type: "text",
                  title: u.$t("pin.translate"),
                  disabled: !l.value.trim() || S.value,
                  onClick: Pt(cr, ["stop"])
                }, {
                  default: Gt(() => [
                    S.value ? (B(), Ft(D($s), {
                      key: 1,
                      class: "ocr-loading-icon",
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })) : (B(), Ft(D(Jo), {
                      key: 0,
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })),
                    I(
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
                b(ye, {
                  class: "ocr-action-btn translate-arrow",
                  type: "text",
                  disabled: !l.value.trim() || S.value,
                  onClick: Pt(ar, ["stop"])
                }, {
                  default: Gt(() => [
                    b(D(Ws), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.8
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                et(" 翻译引擎菜单 "),
                O.value ? (B(), X("div", tp, [
                  (B(!0), X(
                    Kt,
                    null,
                    me(Q.value, (R) => (B(), X("div", {
                      key: R.value,
                      class: _t(["menu-item", { active: z.value === R.value }]),
                      onClick: (Y) => rr(R.value)
                    }, [
                      I(
                        "span",
                        np,
                        at(R.label),
                        1
                        /* TEXT */
                      ),
                      z.value === R.value ? (B(), Ft(Ce(D(Mi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : et("v-if", !0)
                    ], 10, ep))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : et("v-if", !0)
              ]),
              I("div", ip, [
                b(ye, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: u.$t("pin.ocrLanguage"),
                  disabled: d.value,
                  onClick: Pt(ms, ["stop"])
                }, {
                  default: Gt(() => [
                    b(D(pn), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    I(
                      "span",
                      null,
                      at(ot.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                b(ye, {
                  class: "ocr-action-btn ocr-engine-arrow",
                  type: "text",
                  disabled: d.value,
                  onClick: Pt(ms, ["stop"])
                }, {
                  default: Gt(() => [
                    b(D(Ws), {
                      size: "14",
                      theme: "outline",
                      strokeWidth: 3
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                M.value ? (B(), X("div", sp, [
                  (B(!0), X(
                    Kt,
                    null,
                    me(it.value, (R) => (B(), X("div", {
                      key: R.value,
                      class: _t(["menu-item", { active: H.value === R.value }]),
                      onClick: (Y) => lr(R.value)
                    }, [
                      I(
                        "span",
                        ap,
                        at(R.label),
                        1
                        /* TEXT */
                      ),
                      H.value === R.value ? (B(), Ft(Ce(D(Mi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : et("v-if", !0)
                    ], 10, op))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : et("v-if", !0)
              ]),
              I("div", rp, [
                b(ye, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: u.$t("pin.recognizeAgain"),
                  disabled: d.value || !o.value,
                  onClick: Pt(ue, ["stop"])
                }, {
                  default: Gt(() => [
                    b(D(Nc), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    I(
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
              b(ye, {
                class: "ocr-action-btn",
                type: "text",
                title: u.$t("pin.saveAsText"),
                disabled: !l.value.trim(),
                onClick: Pt(ir, ["stop"])
              }, {
                default: Gt(() => [
                  b(D(Hs), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  I(
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
              L[4] || (L[4] = I(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              b(ye, {
                class: "ocr-action-btn more",
                type: "text",
                title: u.$t("pin.more"),
                onClick: Pt(fr, ["stop"])
              }, {
                default: Gt(() => [
                  b(D(Ec), {
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
        dt.value ? (B(), X(
          "div",
          lp,
          at(Math.round(Tt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : et("v-if", !0),
        et(" 右键菜单 "),
        ut.value ? (B(), X(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: It(mt.value)
          },
          [
            I("div", {
              class: "menu-item",
              onClick: vs
            }, [
              (B(), Ft(Ce(ft.value ? D(Fs) : D(Ri)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              I(
                "span",
                null,
                at(ft.value ? u.$t("pin.togglePin") : u.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            I("div", {
              class: "menu-item",
              onClick: bs
            }, [
              b(D(Dc), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
                "span",
                null,
                at(u.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            I("div", {
              class: "menu-item",
              onClick: wr
            }, [
              b(D(yi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
                "span",
                null,
                at(u.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            I("div", {
              class: "menu-item",
              onClick: yr
            }, [
              b(D(Hs), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
                "span",
                null,
                at(u.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            r.value === "ocr" && l.value.trim() ? (B(), X("div", {
              key: 0,
              class: "menu-item",
              onClick: ds
            }, [
              b(D(yi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
                "span",
                null,
                at(u.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : et("v-if", !0),
            L[5] || (L[5] = I(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            I("div", {
              class: "menu-item danger",
              onClick: fi
            }, [
              b(D(Li), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
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
}), up = /* @__PURE__ */ li(cp, [["__scopeId", "data-v-948da06c"]]), hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: up
}, Symbol.toStringTag, { value: "Module" }));
async function dp(e) {
  return e.toDataURL("image/png");
}
function fp(e) {
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
async function gp(e) {
  const t = Date.now(), n = await dp(e);
  $t.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await A("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr",
      language: "zh"
    }), s = fp(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || jo(o),
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
    throw j.error("[OCR] RapidOCR recognizeFromCanvas failed", i), $t.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function mp() {
  return Promise.resolve();
}
async function pp() {
  return Promise.resolve();
}
const wp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: gp,
  terminateOcr: pp,
  warmupOcr: mp
}, Symbol.toStringTag, { value: "Module" }));
export {
  xp as activate
};
