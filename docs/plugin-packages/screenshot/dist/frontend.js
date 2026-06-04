var cr = Object.defineProperty;
var ur = (e, t, n) => t in e ? cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var U = (e, t, n) => ur(e, typeof t != "symbol" ? t + "" : t, n);
import * as mi from "vue";
import { inject as Te, createVNode as b, ref as J, shallowRef as hr, computed as Y, watch as Ne, onMounted as an, onUnmounted as Hi, defineComponent as Dt, h as Eo, Text as dr, Fragment as Xt, nextTick as xn, createElementBlock as G, openBlock as F, createCommentVNode as tt, createElementVNode as I, renderList as ge, normalizeClass as _t, createBlock as $t, resolveDynamicComponent as Ce, unref as D, toDisplayString as at, normalizeStyle as It, withDirectives as bn, withKeys as Ss, vModelText as fr, getCurrentInstance as Qe, readonly as gr, getCurrentScope as mr, onScopeDispose as pr, isRef as yr, warn as wr, provide as vr, mergeProps as xr, renderSlot as We, Transition as ji, withCtx as Yt, createTextVNode as br, vShow as Gn, shallowReactive as kr, withModifiers as Rt, isVNode as kn, render as Xn } from "vue";
const lp = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => md)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => Qm)
  });
};
function _r(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function Sr(e, t, n, i, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Bn;
const ee = "__TAURI_TO_IPC_KEY__";
function Cr(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function A(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Tr(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Mr {
  get rid() {
    return _r(this, Bn, "f");
  }
  constructor(t) {
    Bn.set(this, void 0), Sr(this, Bn, t);
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
class pn {
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
    return new pn(this.width / t, this.height / t);
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
    return this.size instanceof pn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof yn ? this.size : this.size.toPhysical(t);
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
class Ao {
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
    return new Ao(this.x / t, this.y / t);
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
class An {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Ao ? this.position : this.position.toLogical(t);
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
async function Io(e, t) {
  await A("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function wn(e, t, n) {
  var i;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return A("plugin:event|listen", {
    event: e,
    target: s,
    handler: Cr(t)
  }).then((o) => async () => Io(e, o));
}
async function Lr(e, t, n) {
  return wn(e, (i) => {
    Io(e, i.id), t(i);
  }, n);
}
async function Rr(e, t) {
  await A("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Pr(e, t, n) {
  await A("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let Er = class Fn extends Mr {
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
      rgba: Kn(t),
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
    return A("plugin:image|from_bytes", {
      bytes: Kn(t)
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
    return A("plugin:image|from_path", { path: t }).then((n) => new Fn(n));
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
function Kn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Er ? e.rid : e;
}
var _i;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(_i || (_i = {}));
class Ar {
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
var Cs;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Cs || (Cs = {}));
function Ir() {
  return new Rn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function pi() {
  return A("plugin:window|get_all_windows").then((e) => e.map((t) => new Rn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const yi = ["tauri://created", "tauri://error"];
class Rn {
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
    return Ir();
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
    } : wn(t, n, {
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
    } : Lr(t, n, {
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
    if (yi.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Rr(t, n);
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
    if (yi.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return Pr(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return yi.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return this.listen(Jt.WINDOW_RESIZED, (n) => {
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
      const i = new Ar(n);
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
var Ts;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ts || (Ts = {}));
var Ms;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ms || (Ms = {}));
var Ls;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ls || (Ls = {}));
function Nt(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Rs(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function Ui(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function Or(e, t) {
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
class zr {
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
    let p = i.x + g, w = i.y + g;
    p + c > n.x + n.width && (p = i.x - c - g), w + h > n.y + n.height && (w = i.y - h - g), p < n.x && (p = n.x + g), w < n.y && (w = n.y + g), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(p, w, c, h, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const C = 108, f = p + (c - C) / 2, x = w + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(f, x, C, C), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(f, x, C, C);
    const y = a ? a.width : r, _ = C / y;
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
    for (let V = 1; V < y; V++) {
      const q = f + V * _;
      this.ctx.moveTo(q, x), this.ctx.lineTo(q, x + C);
      const nt = x + V * _;
      this.ctx.moveTo(f, nt), this.ctx.lineTo(f + C, nt);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let V = 1; V < y; V++) {
      const q = f + V * _ + 0.5;
      this.ctx.moveTo(q, x), this.ctx.lineTo(q, x + C);
      const nt = x + V * _ + 0.5;
      this.ctx.moveTo(f, nt), this.ctx.lineTo(f + C, nt);
    }
    this.ctx.stroke();
    const v = Math.floor(y / 2), k = f + v * _, P = x + v * _;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(k, P, _, _), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      k - 1,
      P - 1,
      _ + 2,
      _ + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      k,
      P,
      _,
      _
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let N = x + C + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(p + 16, N - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(p + 16, N - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const V = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(V, p + 44, N), N += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, p + 16, N), N += 17, this.ctx.font = "12px Arial";
    const M = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(M, p + 16, N), this.ctx.restore();
  }
}
class Dr {
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
    return Or(t, n);
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
      return Rs(t, n);
    const s = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Rs(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, s = 8) {
    if (!de(t) || !de(n) || !de(i))
      return !1;
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, h = r * r + l * l;
    if (h === 0)
      return Nt(t, n) <= s;
    const g = c / h;
    let p;
    return g < 0 ? p = n : g > 1 ? p = i : p = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Nt(t, p) <= s;
  }
}
var B = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(B || {}), T = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(T || {});
class Nr {
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
    const c = Ui(n);
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
class He {
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
class Wr extends He {
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
class $r extends He {
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
class Br extends He {
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
class Fr extends He {
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
    let p;
    return g < 0 ? p = n : g > 1 ? p = i : p = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Nt(t, p) <= s;
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
class Hr extends He {
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
    let p;
    return g < 0 ? p = n : g > 1 ? p = i : p = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Nt(t, p) <= s;
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
class jr extends He {
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
const fe = class fe extends He {
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
    const p = h, w = Math.floor(g.x - p), C = Math.floor(g.y - p), f = Math.ceil(g.width + p * 2), x = Math.ceil(g.height + p * 2);
    if (f <= 0 || x <= 0) return;
    const y = Math.floor(w * r - i.x), _ = Math.floor(C * r - i.y), v = Math.ceil(f * r), k = Math.ceil(x * r), P = t.canvas.width, N = t.canvas.height, M = Math.max(0, y), V = Math.max(0, _), q = Math.min(v, P - M), nt = Math.min(k, N - V);
    if (q <= 0 || nt <= 0) return;
    let ot;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), ot = t.getImageData(M, V, q, nt), t.restore();
    } catch {
      return;
    }
    const st = ot.data, ut = M % c, bt = V % c;
    for (let ht = -bt; ht < nt; ht += c)
      for (let et = -ut; et < q; et += c) {
        const rt = Math.max(0, et), kt = Math.max(0, ht), ft = Math.min(q, et + c), H = Math.min(nt, ht + c);
        if (rt >= ft || kt >= H) continue;
        let vt = 0, X = 0, Et = 0, Ht = 0;
        for (let Zt = kt; Zt < H; Zt++)
          for (let Mt = rt; Mt < ft; Mt++) {
            const Tt = (Zt * q + Mt) * 4;
            vt += st[Tt], X += st[Tt + 1], Et += st[Tt + 2], Ht++;
          }
        if (Ht > 0) {
          vt = Math.round(vt / Ht / 8) * 8, X = Math.round(X / Ht / 8) * 8, Et = Math.round(Et / Ht / 8) * 8;
          for (let Mt = kt; Mt < H; Mt++)
            for (let Tt = rt; Tt < ft; Tt++) {
              const jt = (Mt * q + Tt) * 4;
              st[jt] = vt, st[jt + 1] = X, st[jt + 2] = Et;
            }
        }
      }
    o.width = q, o.height = nt, a.putImageData(ot, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = h * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, M, V), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
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
        const g = this.data.points[h], p = this.data.points[h + 1], w = (a(g) + a(p)) / 2, C = (r(g) + r(p)) / 2;
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
    let p, w;
    g < 0 ? (p = n.x, w = n.y) : g > 1 ? (p = i.x, w = i.y) : (p = n.x + g * r, w = n.y + g * l);
    const C = t.x - p, f = t.y - w;
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
let Si = fe;
class In {
  static createAnnotation(t, n, i, s = {}) {
    switch (t) {
      case T.Rectangle:
        return new Wr(n, i);
      case T.Ellipse:
        return new $r(n, i);
      case T.Line:
        return new Br(n, i);
      case T.Arrow:
        return new Fr(n, i);
      case T.Pen:
        return new Hr(n, i);
      case T.Text:
        return new jr(
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
const ze = class ze {
  constructor() {
    U(this, "pool", []);
    U(this, "maxPoolSize", 5);
    // 最大池大小
    U(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return ze.instance || (ze.instance = new ze()), ze.instance;
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
U(ze, "instance");
let Ci = ze;
async function Ur(e, t) {
  return await A("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const Vr = "snippets-code:developer-mode", Oo = "snippets-code:frontend-diagnostics", Yr = 240, un = "[REDACTED]", Hn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${un}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${un}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  un
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${un}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${un}`
), Vi = (e) => {
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
}, Gr = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Xr = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Oo) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Yi = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Vr) === "true";
  } catch {
    return !1;
  }
}, Kr = (e, t, n) => {
  if (!Yi() || typeof localStorage > "u") return;
  const i = Xr();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Gr(),
    message: Hn(t),
    data: Vi(n)
  });
  try {
    localStorage.setItem(
      Oo,
      JSON.stringify(i.slice(-Yr))
    );
  } catch {
  }
}, Zr = () => Yi(), qr = (e) => e === "warn" || e === "error" || !1 || !1 || Yi(), On = (e, t, n) => {
  Kr(e, t, n), qr(e) && A("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Vi(n)
  }).catch(() => {
  });
}, j = {
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
    Zr() && On("debug", e, t);
  }
}, Wt = {
  log: (e, t) => {
    A("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : Vi(t)
    }).catch(() => {
    });
  }
}, Jr = "resources/transformers/transformers.min.js", Qr = ["translation-offline-runtime", "translation"], tl = "https://huggingface.co/", el = "{model}/resolve/{revision}/", nl = "/__snippets_code_disabled_transformers_local_models__/", il = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let hn = null;
const sl = (e) => {
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
}, zo = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = sl(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, Do = (e) => {
  const t = zo(e);
  return Object.fromEntries(
    il.map((n) => [n, `${t}${n}`])
  );
}, No = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = tl, e.remotePathTemplate = el, e.allowLocalModels = !1, e.localModelPath = nl, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = Do(t), e.backends.onnx.wasm.numThreads = 1);
};
async function ol() {
  return hn || (hn = (async () => {
    for (const e of Qr) {
      const t = await Ur(e, Jr);
      if (!t) continue;
      const n = Tr(t), i = await import(
        /* @vite-ignore */
        n
      );
      return No(i.env, n), j.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
let we = null, vn = !1, Ze = null, De = null, Ti = null;
const al = "Xenova/opus-mt-en-zh", rl = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], ll = 3e5;
function cl(e) {
  Ti = e;
}
function ul() {
  return rl;
}
function hl(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function Wo() {
  return we || Ze || (vn = !0, j.info("[离线翻译] 正在加载翻译模型..."), Ze = (async () => {
    try {
      const { pipeline: e, env: t } = await ol();
      No(t);
      let n = "";
      const i = e("translation", al, {
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
      return we = await hl(
        i,
        ll,
        "模型加载超时，请检查网络连接后重试"
      ), j.info("[离线翻译] 翻译模型加载完成"), vn = !1, we;
    } catch (e) {
      throw vn = !1, Ze = null, j.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Ze);
}
async function $o(e) {
  if (!e?.trim()) return e;
  De = new AbortController();
  const t = De.signal;
  try {
    const n = await Wo();
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
    De = null;
  }
}
function dl() {
  De && (De.abort(), De = null, j.info("[离线翻译] 已发送取消信号"));
}
function fl() {
  return De !== null;
}
async function Bo() {
  await Wo();
}
function gl() {
  return we !== null;
}
function ml() {
  return vn;
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
async function pl() {
  return (await Gi()).isCached;
}
function yl() {
  return we !== null;
}
async function wl() {
  if (we)
    try {
      await we.dispose?.();
    } catch {
    }
  we = null, Ze = null, vn = !1, j.info("[离线翻译] 翻译器已释放");
}
async function vl() {
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
const xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: yl,
  cancelOfflineTranslation: dl,
  clearModelCache: vl,
  disposeOfflineTranslator: wl,
  getModelCacheInfo: Gi,
  getModelFiles: ul,
  getRuntimeBaseUrl: zo,
  getRuntimeWasmPaths: Do,
  isModelCached: pl,
  isOfflineTranslatorInitializing: ml,
  isOfflineTranslatorReady: gl,
  isTranslationInProgress: fl,
  setProgressCallback: cl,
  translateOffline: $o,
  warmupOfflineTranslator: Bo
}, Symbol.toStringTag, { value: "Module" }));
class Oe {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => op).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const n = Promise.resolve(xl).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
U(Oe, "loadedModules", /* @__PURE__ */ new Map()), U(Oe, "loadingPromises", /* @__PURE__ */ new Map());
function Fo(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = e.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, h = n + s + a + l;
  return h === 0 ? "unknown" : s >= 3 && s > l && s / h >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / h >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function qe(e) {
  return e === "zh" || e === "en";
}
function Ie(e) {
  return Fo(e);
}
const bl = /[.!?。！？；;：:][)"'”’】）\]]*$/, Ps = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, zn = /[A-Za-z0-9]/, kl = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Es = /(?:^|\s)(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function Ho(e, t = {}) {
  const n = rc(e), i = zl(e, n);
  return i.length === 0 ? [] : Al(i, n) ? El(i, n) : (t.mode === "single_para" ? [gn(i, n)] : Sl(i, n)).flatMap((o) => _l(o, n));
}
function _l(e, t) {
  const n = Ki(e, t), i = [];
  for (const s of n) {
    const o = i[i.length - 1], a = o ? Fl(o, s, t) : !1;
    if (!o || !a) {
      i.push(jl(s));
      continue;
    }
    o.text = Vl(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = Xo(o.bbox, s.bbox), o.fontSize = Os(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Os(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return Yl(i, t);
}
function Sl(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: Il(l),
    block: l
  })).filter((l) => Ol(l.bbox)).sort(Xi);
  if (n.length <= 1)
    return [gn(e, t)];
  if (Cl(n, t))
    return [gn(e, t)];
  const { cuts: i, rows: s } = Tl(n);
  if (i.length < 2 || s.length <= 1)
    return [gn(e, t)];
  const o = Rl(i, s), r = Pl(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [gn(e, t)];
}
function Cl(e, t) {
  if (e.length < 2)
    return !0;
  const n = [...e].sort(Xi);
  let i = 0, s = 0;
  for (let o = 1; o < n.length; o += 1) {
    const a = n[o - 1].bbox, r = n[o].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const c = Math.min(a.right, r.right) - Math.max(a.left, r.left), h = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), g = c / h >= 0.45, p = Math.abs(a.left - r.left) <= t * 1.5;
    (g || p) && (s += 1);
  }
  return i > 0 && s / i >= 0.72;
}
function Tl(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < e.length; ) {
    const c = e[a].bbox.bottom, h = [];
    for (; a < e.length && e[a].bbox.top <= c; )
      h.push(e[a]), a += 1;
    h.sort((f, x) => f.bbox.left - x.bbox.left || f.bbox.right - x.bbox.right);
    const g = Ml(h, t, n, i.length), { gaps: p, removedGaps: w } = Ll(o, g), C = i.length - 1;
    for (const f of w)
      s.push({
        left: f.left,
        right: f.right,
        startRow: f.startRow,
        endRow: C
      });
    o = p, i.push(h);
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
function Ml(e, t, n, i) {
  const s = [];
  let o = t;
  for (const a of e)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: n, startRow: i }), s;
}
function Ll(e, t) {
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
function Rl(e, t) {
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
      for (const y of l)
        if (Dn(y.right, w.xLeft) && (C = !0), Dn(y.left, w.xRight) && (f = !0), w.xLeft < y.left && y.left < w.xRight || w.xLeft < y.right && y.right < w.xRight) {
          x = !0;
          break;
        }
      !C || !f || x ? a(w) : (w.rowBottom = r, c.push(w));
    }
    o = c;
    let h = 0, g = 0;
    const p = t[r];
    for (; h < p.length && l.length >= 2; ) {
      const w = p[h];
      g + 1 >= l.length && (g = Math.max(0, l.length - 2));
      const C = l[g].right, f = l[g + 1].left;
      if (w.bbox.left + 1e-4 > f && g < l.length - 2) {
        g += 1;
        continue;
      }
      let x = o.find((y) => Dn(y.xLeft, C) && Dn(y.xRight, f));
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
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(Xi);
  return i;
}
function Pl(e) {
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
function El(e, t) {
  const n = Me(Kt(e.map((a) => a.width)), t * 0.5), i = Math.max(n * 1.4, t * 0.28), s = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? Kt(l.map((h) => h.x + h.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((p, w) => p.y - w.y), l = r.reduce((p, w, C) => {
      const f = w.text.trim();
      return C === 0 ? f : Zi(p, f);
    }, ""), c = Go(r), h = Kt(r.map((p) => Me(p.fontSize, t))), g = Kt(r.map((p) => ii(p)));
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: h,
      lineHeight: g,
      angle: Kt(r.map((p) => p.angle || 0))
    };
  });
}
function Al(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function Il(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Ol(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function Xi(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function Dn(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function zl(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || Dl(n, t) || Wl(i))
      return null;
    const s = $l(Nl(i, n, t));
    return s === n.text ? n : { ...n, text: s };
  }).filter((n) => !!n);
}
function Dl(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function Nl(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function Wl(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function $l(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function Ki(e, t) {
  const n = [...e].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of n) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !nc(a.blocks, o, t) ? (a.blocks.push(o), a.y = Kt(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => Bl(o.blocks, t));
}
function Bl(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = Go(n), s = n.reduce((r, l, c) => {
    const h = l.text.trim();
    return c === 0 ? h : Ul(r, h);
  }, ""), o = Kt(n.map((r) => Me(r.fontSize, t))), a = Kt(n.map((r) => ii(r)));
  return {
    text: s,
    blocks: n,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: ic(n, t),
    isCodeLike: Vo(s)
  };
}
function Fl(e, t, n) {
  const i = Ki(e.blocks, n), s = i[i.length - 1];
  if (!s) return !1;
  const o = _n(s.text);
  if (ni(s.text) || _n(t.text) || o && !Hl(s, t, n) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -n * 0.25 || a >= n * 1.8 || ql(i, a, n) || Jl(s, t, a, n) || Ql(s, t, a, n) || tc(s, t, a, n) || ec(s, t, a, n))
    return !1;
  if (o)
    return !0;
  const r = Math.max(n * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function Hl(e, t, n) {
  if (Uo(t.text))
    return !1;
  const i = t.bbox.x - e.bbox.x, s = Math.max(n * 0.8, e.lineHeight * 0.65);
  return i >= s;
}
function jl(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: Kt(e.blocks.map((t) => t.angle || 0))
  };
}
function Ul(e, t) {
  return Zi(e, t);
}
function Vl(e, t) {
  return Zi(e, t);
}
function Zi(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const s = n.charAt(n.length - 1), o = i.charAt(0), a = n.charAt(n.length - 2);
  return s === "-" && zn.test(a) && zn.test(o) ? `${n.slice(0, -1)}${i}` : lc(o) || cc(s) ? `${n}${i}` : Ps.test(s) || Ps.test(o) || zs(s) || zs(o) ? `${n}${i}` : zn.test(s) && zn.test(o) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function ni(e) {
  return bl.test(e.trim());
}
function _n(e) {
  return kl.test(e);
}
function Yl(e, t) {
  return e.flatMap((n) => Gl(n, t));
}
function Gl(e, t) {
  const n = jo(e.text);
  if (n.length <= 1)
    return [e];
  const i = Ki(e.blocks, t), s = i.length === n.length;
  return n.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || Kl(e.bbox, a, n.length), c = r?.blocks || [Zl(e, o, l, a)];
    return {
      ...e,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((h) => Vo(h.text)),
      isStructuredBlock: e.isStructuredBlock,
      fontSize: Kt(c.map((h) => Me(h.fontSize, e.fontSize || t))),
      lineHeight: Kt(c.map((h) => ii(h))),
      angle: Kt(c.map((h) => h.angle || 0))
    };
  });
}
function jo(e) {
  const t = e.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(jo);
  const n = Xl(e);
  return n.length > 1 ? n.flatMap(As) : As(e);
}
function Xl(e) {
  const t = e.trim(), n = [];
  Es.lastIndex = 0;
  for (const i of t.matchAll(Es)) {
    const s = i[0], o = i.index ?? 0;
    n.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return n.length <= 1 ? [t] : n.map((i, s) => {
    const o = n[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function As(e) {
  const t = e.trim();
  if (!_n(t))
    return [t];
  const n = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !n || !Uo(n[2]) ? [t] : [n[1].trim(), n[2].trim()];
}
function Kl(e, t, n) {
  const i = e.height / Math.max(n, 1);
  return {
    x: e.x,
    y: e.y + i * t,
    width: e.width,
    height: i
  };
}
function Zl(e, t, n, i) {
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
function Uo(e) {
  const t = e.trim();
  return !t || ni(t) || _n(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function ql(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? Kt(i) : 0, o = Math.max(s * 2.2, n * 1.15);
  return t > o;
}
function Jl(e, t, n, i) {
  const s = e.text.trim();
  if (!s || ni(s) || _n(s) || e.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function Ql(e, t, n, i) {
  if (n <= 0)
    return !1;
  const s = Math.max(e.fontSize, t.fontSize), o = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = s / o, r = n / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function tc(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const o = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function ec(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Is(e.text) && Is(t.text);
}
function Is(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !ni(t);
}
function Vo(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function nc(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > n * 0.9 && ac(s.text) && Yo(t.text) ? !1 : o > n * 3.2;
}
function ic(e, t) {
  if (e.length < 2)
    return e.some((s) => sc(s.text));
  const n = [...e].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < n.length; s++) {
    const o = n[s - 1], a = n[s], r = n[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && oc(o.text) && Yo(a.text)) && (i += 1);
  }
  return i >= 1;
}
function sc(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function oc(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function ac(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Yo(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Go(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => Xo(n, i), t[0]);
}
function Xo(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), s = Math.max(e.x + e.width, t.x + t.width), o = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: s - n,
    height: o - i
  };
}
function rc(e) {
  return Me(Kt(e.map((t) => ii(t))), 16);
}
function ii(e) {
  return Me(e.lineHeight, Me(e.height, Me(e.fontSize, 16) * 1.2));
}
function Os(e, t, n, i) {
  const s = t + i;
  return s <= 0 ? n : (e * t + n * i) / s;
}
function Me(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function Kt(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function lc(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function cc(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function zs(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class uc {
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
    U(this, "canvasPool", Ci.getInstance());
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
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Dr(t), this.drawingEngine = new zr(t, this.coordinateSystem), this.eventHandler = new Nr(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), Oe.preloadModules();
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
          const [c, h] = await Promise.all([
            A("get_cached_monitor_info"),
            A("get_cached_window_list")
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
            A("get_window_info"),
            A("get_all_windows")
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
      const f = Math.max(0, Math.round(l.r * 0.1)), x = Math.max(0, Math.round(l.g * 0.1)), y = Math.max(0, Math.round(l.b * 0.1));
      h = `rgba(${f}, ${x}, ${y}, 0.95)`, g = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), x = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), y = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      h = `rgba(${f}, ${x}, ${y}, 0.95)`, g = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = h, t.fillRect(n, i, s, o), t.fillStyle = g, t.textAlign = "left", t.textBaseline = "top";
    const p = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((f) => ({
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
    })), w = p.filter((f) => f.isStructuredBlock), C = p.filter((f) => !f.isStructuredBlock);
    C.length > 0 && this.drawFlowedTranslationBlocks(t, C, n, i, a, s, o);
    for (const f of w)
      this.drawStructuredTranslationBlock(t, f, n, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, s, o, a, r) {
    const l = [...n].filter((v) => (v.translatedText || v.text).trim()).sort((v, k) => {
      const P = v.bbox.y - k.bbox.y;
      return Math.abs(P) > 4 ? P : v.bbox.x - k.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), h = o, g = (v, k, P) => l.map((N) => {
      const M = (N.translatedText || N.text).trim(), V = Math.max(12, Math.min(N.fontSize || 16, 48)), q = Math.max(8, Math.round(V * v)), nt = N.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', ot = Math.max(
        o,
        Math.min(N.bbox.x + o, a * 0.38)
      ), st = k ? o : ot, ut = Math.max(48, a - st - h), bt = N.lineHeight || q * 1.35, ht = Math.max(
        q * (P ? 1.04 : 1.14),
        Math.min(bt * v, q * (P ? 1.18 : 1.42))
      );
      return t.font = `${q}px ${nt}`, {
        text: M,
        fontSize: q,
        fontFamily: nt,
        lineHeight: ht,
        paragraphGap: P ? Math.max(1, ht * 0.16) : Math.max(3, ht * 0.35),
        x: i + st,
        lines: this.wrapTextToLines(t, M, ut)
      };
    }), p = (v) => v.reduce((k, P, N) => {
      const M = N === v.length - 1 ? 0 : P.paragraphGap;
      return k + P.lines.length * P.lineHeight + M;
    }, 0);
    let w = g(1, !1, !1), C = p(w);
    if (C > c) {
      const v = Math.max(0.56, c / C);
      w = g(v, !1, !1), C = p(w);
    }
    if (C > c && (w = g(1, !0, !1), C = p(w)), C > c) {
      const v = Math.max(0.38, c / C * 0.96);
      w = g(v, !0, !0), C = p(w);
    }
    if (C > c) {
      const v = Math.max(0.3, c / C * 0.94);
      w = g(v, !0, !0), C = p(w);
    }
    const f = Math.min(...l.map((v) => v.bbox.y)), x = s + Math.max(o, Math.min(f, r - o)), y = s + r - o;
    let _ = x + C > y ? s + o : x;
    for (const v of w) {
      t.font = `${v.fontSize}px ${v.fontFamily}`;
      for (const k of v.lines)
        t.fillText(k, v.x, _), _ += v.lineHeight;
      _ += v.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, s, o, a, r) {
    const l = [...n.blocks].sort((g, p) => g.x - p.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), h = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const g of l) {
      const p = g.translatedText || g.text;
      if (!p.trim()) continue;
      const w = i + g.x + Math.min(4, o), C = s + g.y, f = l.find((v) => v.x > g.x), x = f ? Math.max(g.width, f.x - g.x - 8) : Math.max(g.width, a - g.x - o), y = this.wrapTextToLines(t, p.trim(), x);
      let _ = C;
      for (const v of y) {
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
        const p = h + g;
        t.measureText(p).width > i && h !== "" ? (o.push(h), h = g) : h = p;
      }
      r = h;
    };
    for (const c of a) {
      const h = /^\s+$/.test(c), g = h ? " " : c, p = r + g;
      if (t.measureText(p).width <= i) {
        r = p;
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
    const c = this.backgroundImage.width, h = this.backgroundImage.height, g = this.canvas.width / s, p = this.canvas.height / s, w = c / g, C = h / p, f = t.x * w, x = t.y * C, y = t.width * w, _ = t.height * C;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        x,
        y,
        _,
        0,
        0,
        o,
        a
      );
    } catch (et) {
      return j.error("[截图] 采样区域绘制失败", et), this.canvasPool.release(r), i;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (et) {
      return j.error("[截图] 获取像素数据失败", et), this.canvasPool.release(r), i;
    }
    const k = v.data, P = Math.ceil(Math.sqrt(n)), N = o / (P + 1), M = a / (P + 1);
    let V = 0, q = 0, nt = 0, ot = 0;
    for (let et = 1; et <= P; et++)
      for (let rt = 1; rt <= P && !(ot >= n); rt++) {
        const kt = Math.floor(rt * N), ft = Math.floor(et * M);
        if (kt >= 0 && kt < o && ft >= 0 && ft < a) {
          const H = (ft * o + kt) * 4;
          H >= 0 && H + 2 < k.length && (V += k[H], q += k[H + 1], nt += k[H + 2], ot++);
        }
      }
    if (this.canvasPool.release(r), ot === 0)
      return i;
    const st = Math.round(V / ot), ut = Math.round(q / ot), bt = Math.round(nt / ot), ht = this.getBrightness(st, ut, bt);
    return {
      r: st,
      g: ut,
      b: bt,
      brightness: ht
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
    const c = this.backgroundImage.width, h = this.backgroundImage.height, g = this.canvas.width / s, p = this.canvas.height / s, w = c / g, C = h / p, f = t.x * w, x = t.y * C, y = t.width * w, _ = t.height * C;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        x,
        y,
        _,
        0,
        0,
        o,
        a
      );
    } catch (et) {
      return j.error("[截图] isUniformColor: 采样区域绘制失败", et), this.canvasPool.release(r), !1;
    }
    let v;
    try {
      v = l.getImageData(0, 0, o, a);
    } catch (et) {
      return j.error("[截图] isUniformColor: 获取像素数据失败", et), this.canvasPool.release(r), !1;
    }
    const k = v.data, P = Math.ceil(Math.sqrt(i)), N = o / (P + 1), M = a / (P + 1), V = [];
    for (let et = 1; et <= P; et++)
      for (let rt = 1; rt <= P && !(V.length >= i); rt++) {
        const kt = Math.floor(rt * N), ft = Math.floor(et * M);
        if (kt >= 0 && kt < o && ft >= 0 && ft < a) {
          const H = (ft * o + kt) * 4;
          H >= 0 && H + 2 < k.length && V.push({
            r: k[H],
            g: k[H + 1],
            b: k[H + 2]
          });
        }
      }
    if (this.canvasPool.release(r), V.length < 2)
      return !1;
    const q = V.reduce((et, rt) => et + rt.r, 0) / V.length, nt = V.reduce((et, rt) => et + rt.g, 0) / V.length, ot = V.reduce((et, rt) => et + rt.b, 0) / V.length, st = V.reduce((et, rt) => et + Math.pow(rt.r - q, 2), 0) / V.length, ut = V.reduce((et, rt) => et + Math.pow(rt.g - nt, 2), 0) / V.length, bt = V.reduce((et, rt) => et + Math.pow(rt.b - ot, 2), 0) / V.length;
    return (st + ut + bt) / 3 < n;
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
    const g = Nt(n[0], n[n.length - 1]) / c, p = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (g > 0.85 || p > 5) {
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
          let vt = 0;
          for (; !this.backgroundImage && vt < 3e3; )
            await new Promise((X) => setTimeout(X, 100)), vt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, h = Math.max(0, o.padding || 0), g = this.canvas.width / c, p = this.canvas.height / c, w = t - h, C = n - h, f = i + h * 2, x = s + h * 2, y = Math.max(1, Math.round(f * c)), _ = Math.max(1, Math.round(x * c)), v = Math.max(0, w), k = Math.max(0, C), P = Math.min(g, w + f), N = Math.min(p, C + x), M = Math.max(0, P - v), V = Math.max(0, N - k), q = Math.round(v * c), nt = Math.round(k * c), ot = Math.min(
          this.canvas.width - q,
          Math.round(M * c)
        ), st = Math.min(
          this.canvas.height - nt,
          Math.round(V * c)
        ), ut = Math.round((v - w) * c), bt = Math.round((k - C) * c), ht = document.createElement("canvas");
        ht.width = y, ht.height = _;
        const et = ht.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!et)
          throw new Error("无法获取2D绘图上下文");
        et.imageSmoothingEnabled = !1, o.fillColor && (et.fillStyle = o.fillColor, et.fillRect(0, 0, y, _)), ot > 0 && st > 0 && et.drawImage(
          this.backgroundImage,
          q,
          nt,
          ot,
          st,
          ut,
          bt,
          ot,
          st
        );
        const kt = ht.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: kt,
          adjusted_width: y,
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
            const g = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, p = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, w = this.drawingEngine.createScreenshotContext(
              l,
              g,
              p
            );
            this.annotations.forEach((C, f) => {
              try {
                C.drawToScreenshot(w);
              } catch (x) {
                j.error(`[截图] 绘制标注 ${f} 失败`, x);
              }
            });
          }
          let h;
          h = r.toDataURL("image/png"), clearTimeout(a), s(h);
        } catch (h) {
          j.error("[截图] 绘制过程出错", h);
          try {
            const g = r.toDataURL("image/png");
            clearTimeout(a), s(g);
          } catch {
            clearTimeout(a), o(new Error(`渲染失败: ${h.message || h}`));
          }
        }
      }, c.onerror = (h) => {
        j.error("[截图] 图像加载失败", h), clearTimeout(a), o(new Error("图像加载失败"));
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
        const { x: n, y: i, width: s, height: o } = this.selectionRect, a = await A("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), h = Math.round(s * r), g = Math.round(o * r), p = Math.round(a.x + window.innerWidth * r), w = Math.round(a.y + window.innerHeight * r), C = t === "ocr" ? Math.min(Math.max(h, 760), Math.max(360, p - a.x)) : h, f = t === "ocr" ? Math.min(Math.max(g, 520), Math.max(260, w - a.y)) : g, x = t === "ocr" ? Math.round(l - Math.max(0, C - h) / 2) : l, y = t === "ocr" ? Math.max(a.x, Math.min(x, p - C)) : l, _ = t === "ocr" ? Math.max(a.y, Math.min(c, w - f)) : c, v = {}, k = await this.cropFromBackground(n, i, s, o, v);
        if (!k?.image)
          throw new Error("Failed to crop from background image");
        const P = await this.renderWithAnnotations(k, r, "save");
        await A("create_pin_window", {
          mode: t,
          imageData: P,
          x: y,
          y: _,
          width: C,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new Rn("screenshot").close();
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
        const h = await createImageBitmap(c);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = h;
        const p = new OffscreenCanvas(s, s).getContext("2d");
        if (p) {
          p.drawImage(h, 0, 0, s, s);
          const w = p.getImageData(o, o, 1, 1).data, C = { r: w[0], g: w[1], b: w[2] }, f = this.rgbToHex(C.r, C.g, C.b);
          this.colorPickerState.colorInfo = { rgb: C, hex: f, position: t };
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
        const { x: r, y: l, width: c, height: h } = this.selectionRect, g = window.devicePixelRatio || 1, p = c * g, w = h * g, C = this.canvasPool.acquire(p, w), f = C.getContext("2d");
        if (!f)
          throw this.canvasPool.release(C), new Error("无法创建临时canvas");
        const x = r * g, y = l * g, _ = performance.now();
        f.drawImage(
          this.backgroundImage,
          x,
          y,
          p,
          w,
          0,
          0,
          p,
          w
        ), n = Math.round(performance.now() - _);
        const v = performance.now(), { recognizeFromCanvas: k } = await Oe.loadOCR();
        i = Math.round(performance.now() - v);
        const P = performance.now(), N = await k(C);
        s = Math.round(performance.now() - P), this.canvasPool.release(C);
        const M = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: N.confidence,
          rawLineCount: N.blocks.length,
          textLength: N.full_text.trim().length
        };
        j.info("[OCR] 识别耗时统计", M), Wt.log("[OCR] recognition timing", M);
        const V = N.blocks, q = performance.now(), nt = Ho(V);
        o = Math.round(performance.now() - q);
        const ot = nt.map((z) => z.text).join(`

`), st = {
          rawLineCount: V.length,
          paragraphCount: nt.length,
          durationMs: o,
          paragraphs: nt.map((z, ct) => ({
            index: ct,
            text: z.text,
            blockCount: z.blocks.length,
            isCodeBlock: !!z.isCodeBlock,
            isStructuredBlock: !!z.isStructuredBlock,
            bbox: z.bbox,
            sourceBlocks: z.blocks.map((yt) => ({
              text: yt.text,
              x: yt.x,
              y: yt.y,
              width: yt.width,
              height: yt.height
            }))
          }))
        };
        if (j.info("[OCR] 版面重组完成", st), Wt.log("[OCR] layout reflow complete", st), !ot || !ot.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ut = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Ie(ot));
        const bt = (z) => {
          const ct = z.trim();
          return !!(ct.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !ct.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let ht = "";
        const et = Ie(ot), rt = {
          detectedLanguage: et,
          textLength: ot.trim().length,
          textPreview: ot.trim().slice(0, 500)
        };
        j.info("[OCR] 翻译语言检测完成", rt), Wt.log("[OCR] translation language detected", rt), qe(et) && (this.translationOverlay.sourceLanguage = et, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(et));
        const kt = ut === "offline" ? Oe.loadOfflineTranslator() : null, ft = (z) => z.includes("插件") && z.includes("未启用") ? z.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : z : ut === "offline" ? z.includes("未激活") || z.includes("未下载") || z.includes("运行时未安装") ? z : z.includes("超时") ? "模型加载超时，请重试" : z.includes("离线翻译暂仅支持") ? z : "离线翻译失败: " + z.substring(0, 50) : z.includes("timeout") || z.includes("超时") ? "翻译超时，请检查网络连接" : z.includes("network") || z.includes("网络") || z.includes("请求") || z.includes("令牌") ? "翻译失败，请检查网络连接" : z.trim() ? z.slice(0, 80) : "翻译失败，请检查网络连接", H = async () => {
          if (!kt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: z,
            canUseOfflineTranslation: ct,
            warmupOfflineTranslator: yt,
            getModelCacheInfo: xt
          } = await kt, Lt = ct();
          if (this.offlineModelActivated && !Lt)
            if ((await xt()).isCached)
              await yt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return z;
        }, vt = async (z, ct, yt) => {
          if (!z.trim())
            return z;
          if (ut === "offline") {
            if (ct !== "en" || yt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await H())(z);
          }
          return await A("translate_text", {
            text: z,
            from: ct,
            to: yt,
            engine: ut
          });
        }, X = (z) => {
          const ct = z.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(ct) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(ct);
        }, Et = async (z, ct, yt) => {
          const xt = z.trim();
          if (!xt || bt(xt))
            return z;
          const Lt = z.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Lt) {
            const [, R, W, it, Q, S] = Lt, $ = Ie(W), gt = X(W) || !qe($) ? W : await vt(W, $, this.getAutoTargetLanguage($)), dt = Ie(Q), te = qe(dt) && !bt(Q) ? await vt(Q, dt, this.getAutoTargetLanguage(dt)) : Q;
            return `${R}${gt}${it}${te}${S}`;
          }
          if (X(xt))
            return z;
          const At = Ie(xt);
          if (!qe(At))
            return z;
          const E = this.getAutoTargetLanguage(At), u = await vt(xt, At, E), m = {
            paragraphIndex: ct,
            blockIndex: yt,
            sourceLanguage: At,
            targetLanguage: E,
            sourceText: xt,
            translatedText: u.slice(0, 200)
          };
          return j.info("[OCR] 结构化块翻译完成", m), Wt.log("[OCR] structured block translation complete", m), u;
        }, Ht = async (z, ct) => {
          const yt = performance.now(), xt = (u) => ({
            index: ct,
            durationMs: Math.round(performance.now() - yt),
            ...u
          }), Lt = Ie(z.text), At = this.getAutoTargetLanguage(Lt), E = {
            index: ct,
            text: z.text,
            sourceLanguage: Lt,
            targetLanguage: At,
            engine: ut,
            structured: !!z.isStructuredBlock
          };
          if (j.info("[OCR] 段落翻译方向", E), Wt.log("[OCR] paragraph translation direction", E), !qe(Lt)) {
            z.translatedText = z.text;
            const u = xt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), m = {
              index: ct,
              detectedLanguage: Lt,
              durationMs: u.durationMs,
              text: z.text
            };
            return j.warn("[OCR] 跳过不支持的段落语言", m), Wt.log("[OCR] skip unsupported paragraph language", m), u;
          }
          try {
            if (z.isStructuredBlock && z.blocks.length > 0) {
              const R = async (it, Q) => {
                const S = await Et(it.text, ct, Q);
                return it.translatedText = S, S;
              }, W = [];
              if (ut === "offline")
                for (let it = 0; it < z.blocks.length; it += 1)
                  W.push(await R(z.blocks[it], it));
              else
                W.push(
                  ...await Promise.all(
                    z.blocks.map((it, Q) => R(it, Q))
                  )
                );
              z.translatedText = W.join(" ");
            } else if (bt(z.text) || z.isCodeBlock) {
              z.translatedText = z.text;
              const R = z.isCodeBlock ? "code_block" : "command_like_text", W = xt({ skipped: !0, cancelled: !1 }), it = {
                index: ct,
                reason: R,
                durationMs: W.durationMs,
                text: z.text
              };
              return j.info("[OCR] 跳过代码段翻译", it), Wt.log("[OCR] skip code paragraph translation", it), W;
            } else
              z.translatedText = await vt(
                z.text,
                Lt,
                At
              );
            const u = xt({ skipped: !1, cancelled: !1 }), m = {
              index: ct,
              durationMs: u.durationMs,
              sourceLanguage: Lt,
              targetLanguage: At,
              engine: ut,
              structured: !!z.isStructuredBlock,
              sourceLength: z.text.length,
              translatedLength: (z.translatedText || "").length,
              translatedPreview: (z.translatedText || "").slice(0, 300)
            };
            return j.info("[OCR] 段落翻译完成", m), Wt.log("[OCR] paragraph translation complete", m), u;
          } catch (u) {
            const m = u instanceof Error ? u.message : String(u);
            if (m === "翻译已取消")
              return xt({ skipped: !1, cancelled: !0 });
            z.translatedText = z.text;
            const R = ft(m), W = xt({
              skipped: !1,
              cancelled: !1,
              errorMessage: R
            }), it = {
              index: ct,
              durationMs: W.durationMs,
              sourceLanguage: Lt,
              targetLanguage: At,
              engine: ut,
              error: m,
              structured: !!z.isStructuredBlock,
              text: z.text
            };
            return j.error("[OCR] 段落翻译失败", it), Wt.log("[OCR] paragraph translation failed", it), W;
          }
        }, Zt = performance.now();
        let Mt = [];
        if (ut === "offline")
          for (let z = 0; z < nt.length; z += 1) {
            const ct = await Ht(nt[z], z);
            if (Mt.push(ct), ct.cancelled)
              return;
            if (ct.errorMessage) {
              ht = ct.errorMessage;
              break;
            }
          }
        else {
          if (Mt = await Promise.all(
            nt.map((z, ct) => Ht(z, ct))
          ), Mt.some((z) => z.cancelled))
            return;
          ht = Mt.find((z) => z.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Zt);
        const Tt = {
          durationMs: a,
          engine: ut,
          paragraphCount: nt.length,
          translatedParagraphCount: Mt.filter((z) => !z.skipped && !z.errorMessage).length,
          skippedParagraphCount: Mt.filter((z) => z.skipped).length,
          failedParagraphCount: Mt.filter((z) => !!z.errorMessage).length
        };
        j.info("[OCR] 翻译耗时统计", Tt), Wt.log("[OCR] translation timing", Tt);
        const jt = nt.map((z) => this.toDisplayParagraph(z, g)), ne = jt.map((z) => this.toLegacyOverlayBlock(z));
        this.translationOverlay.blocks = ne, this.translationOverlay.paragraphBlocks = jt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = ht || void 0;
        const Gt = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: V.length,
          paragraphCount: nt.length,
          engine: ut
        };
        j.info("[OCR] 截图翻译总耗时统计", Gt), Wt.log("[OCR] pipeline timing", Gt), this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await Oe.loadOfflineTranslator();
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
    Oe.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var hc = {
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
function dc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function fc(e, t, n) {
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
var gc = Symbol("icon-context");
function Ct(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = dc(), r = Te(gc, hc);
      return function() {
        var l = o.size, c = o.strokeWidth, h = o.strokeLinecap, g = o.strokeLinejoin, p = o.theme, w = o.fill, C = o.spin, f = fc(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: h,
          strokeLinejoin: g,
          theme: p,
          fill: w
        }, r), x = [r.prefix + "-icon"];
        return x.push(r.prefix + "-icon-" + e), t && r.rtl && x.push(r.prefix + "-icon-rtl"), C && x.push(r.prefix + "-icon-spin"), b("span", {
          class: x.join(" ")
        }, [n(f)]);
      };
    }
  };
  return i;
}
const mc = Ct("arrow-right-up", !0, function(e) {
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
}), wi = Ct("copy", !0, function(e) {
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
}), pc = Ct("delete-four", !1, function(e) {
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
}), Ds = Ct("down", !1, function(e) {
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
}), yc = Ct("download", !1, function(e) {
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
}), wc = Ct("font-size", !0, function(e) {
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
}), vc = Ct("go-on", !0, function(e) {
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
}), Ns = Ct("loading", !0, function(e) {
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
}), Ko = Ct("minus", !1, function(e) {
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
}), xc = Ct("more", !1, function(e) {
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
}), bc = Ct("mosaic", !0, function(e) {
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
}), kc = Ct("move-one", !0, function(e) {
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
}), _c = Ct("picture", !0, function(e) {
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
}), Ws = Ct("pin", !0, function(e) {
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
}), $s = Ct("platte", !0, function(e) {
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
}), Sc = Ct("rectangle-one", !1, function(e) {
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
}), Cc = Ct("redo", !0, function(e) {
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
}), Tc = Ct("refresh", !0, function(e) {
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
}), Mc = Ct("return", !0, function(e) {
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
}), Lc = Ct("round", !1, function(e) {
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
}), Bs = Ct("save", !0, function(e) {
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
}), Rc = Ct("square", !1, function(e) {
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
}), mn = Ct("text-recognition", !1, function(e) {
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
}), Zo = Ct("translate", !0, function(e) {
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
}), Pc = Ct("write", !0, function(e) {
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
function Ec(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Fs = typeof window < "u", je = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ac = (e, t, n) => Ic({ l: e, k: t, s: n }), Ic = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Bt = (e) => typeof e == "number" && isFinite(e), Oc = (e) => qi(e) === "[object Date]", Zn = (e) => qi(e) === "[object RegExp]", si = (e) => mt(e) && Object.keys(e).length === 0, Ft = Object.assign, zc = Object.create, St = (e = null) => zc(e);
let Hs;
const jn = () => Hs || (Hs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : St());
function js(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Us(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Dc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, s, o) => `${s}="${Us(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, s, o) => `${s}='${Us(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    e = e.replace(i, "$1javascript&#58;");
  }), e;
}
const Nc = Object.prototype.hasOwnProperty;
function le(e, t) {
  return Nc.call(e, t);
}
const zt = Array.isArray, Pt = (e) => typeof e == "function", K = (e) => typeof e == "string", Ot = (e) => typeof e == "boolean", pt = (e) => e !== null && typeof e == "object", Wc = (e) => pt(e) && Pt(e.then) && Pt(e.catch), qo = Object.prototype.toString, qi = (e) => qo.call(e), mt = (e) => qi(e) === "[object Object]", $c = (e) => e == null ? "" : zt(e) || mt(e) && e.toString === qo ? JSON.stringify(e, null, 2) : String(e);
function Ji(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Nn = (e) => !pt(e) || zt(e);
function Un(e, t) {
  if (Nn(e) || Nn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      o !== "__proto__" && (pt(i[o]) && !pt(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : St()), Nn(s[o]) || Nn(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Bc(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Pi(e, t, n) {
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
}, Fc = 17;
function oi(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function Hc(e) {
  throw e;
}
const ue = " ", jc = "\r", Vt = `
`, Uc = "\u2028", Vc = "\u2029";
function Yc(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (M) => t[M] === jc && t[M + 1] === Vt, r = (M) => t[M] === Vt, l = (M) => t[M] === Vc, c = (M) => t[M] === Uc, h = (M) => a(M) || r(M) || l(M) || c(M), g = () => n, p = () => i, w = () => s, C = () => o, f = (M) => a(M) || l(M) || c(M) ? Vt : t[M], x = () => f(n), y = () => f(n + o);
  function _() {
    return o = 0, h(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function v() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function k() {
    n = 0, i = 1, s = 1, o = 0;
  }
  function P(M = 0) {
    o = M;
  }
  function N() {
    const M = n + o;
    for (; M !== n; )
      _();
    o = 0;
  }
  return {
    index: g,
    line: p,
    column: w,
    peekOffset: C,
    charAt: f,
    currentChar: x,
    currentPeek: y,
    next: _,
    peek: v,
    reset: k,
    resetPeek: P,
    skipToPeek: N
  };
}
const pe = void 0, Gc = ".", Vs = "'", Xc = "tokenizer";
function Kc(e, t = {}) {
  const n = t.location !== !1, i = Yc(e), s = () => i.index(), o = () => Bc(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
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
  function g(u, m, R, ...W) {
    const it = c();
    if (m.column += R, m.offset += R, h) {
      const Q = n ? Pi(it.startLoc, m) : null, S = oi(u, Q, {
        domain: Xc,
        args: W
      });
      h(S);
    }
  }
  function p(u, m, R) {
    u.endLoc = o(), u.currentType = m;
    const W = { type: m };
    return n && (W.loc = Pi(u.startLoc, u.endLoc)), R != null && (W.value = R), W;
  }
  const w = (u) => p(
    u,
    13
    /* TokenTypes.EOF */
  );
  function C(u, m) {
    return u.currentChar() === m ? (u.next(), m) : (g(wt.EXPECTED_TOKEN, o(), 0, m), "");
  }
  function f(u) {
    let m = "";
    for (; u.currentPeek() === ue || u.currentPeek() === Vt; )
      m += u.currentPeek(), u.peek();
    return m;
  }
  function x(u) {
    const m = f(u);
    return u.skipToPeek(), m;
  }
  function y(u) {
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
    const W = y(u.currentPeek());
    return u.resetPeek(), W;
  }
  function k(u, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    f(u);
    const W = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), it = _(W);
    return u.resetPeek(), it;
  }
  function P(u, m) {
    const { currentType: R } = m;
    if (R !== 2)
      return !1;
    f(u);
    const W = u.currentPeek() === Vs;
    return u.resetPeek(), W;
  }
  function N(u, m) {
    const { currentType: R } = m;
    if (R !== 7)
      return !1;
    f(u);
    const W = u.currentPeek() === ".";
    return u.resetPeek(), W;
  }
  function M(u, m) {
    const { currentType: R } = m;
    if (R !== 8)
      return !1;
    f(u);
    const W = y(u.currentPeek());
    return u.resetPeek(), W;
  }
  function V(u, m) {
    const { currentType: R } = m;
    if (!(R === 7 || R === 11))
      return !1;
    f(u);
    const W = u.currentPeek() === ":";
    return u.resetPeek(), W;
  }
  function q(u, m) {
    const { currentType: R } = m;
    if (R !== 9)
      return !1;
    const W = () => {
      const Q = u.currentPeek();
      return Q === "{" ? y(u.peek()) : Q === "@" || Q === "|" || Q === ":" || Q === "." || Q === ue || !Q ? !1 : Q === Vt ? (u.peek(), W()) : ot(u, !1);
    }, it = W();
    return u.resetPeek(), it;
  }
  function nt(u) {
    f(u);
    const m = u.currentPeek() === "|";
    return u.resetPeek(), m;
  }
  function ot(u, m = !0) {
    const R = (it = !1, Q = "") => {
      const S = u.currentPeek();
      return S === "{" || S === "@" || !S ? it : S === "|" ? !(Q === ue || Q === Vt) : S === ue ? (u.peek(), R(!0, ue)) : S === Vt ? (u.peek(), R(!0, Vt)) : !0;
    }, W = R();
    return m && u.resetPeek(), W;
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
  function bt(u) {
    return st(u, ut);
  }
  function ht(u) {
    const m = u.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function et(u) {
    return st(u, ht);
  }
  function rt(u) {
    const m = u.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function kt(u) {
    return st(u, rt);
  }
  function ft(u) {
    const m = u.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function H(u) {
    return st(u, ft);
  }
  function vt(u) {
    let m = "", R = "";
    for (; m = kt(u); )
      R += m;
    return R;
  }
  function X(u) {
    let m = "";
    for (; ; ) {
      const R = u.currentChar();
      if (R === "{" || R === "}" || R === "@" || R === "|" || !R)
        break;
      if (R === ue || R === Vt)
        if (ot(u))
          m += R, u.next();
        else {
          if (nt(u))
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
    for (; m = et(u); )
      R += m;
    const W = u.currentChar();
    if (W && W !== "}" && W !== pe && W !== ue && W !== Vt && W !== "　") {
      const it = Gt(u);
      return g(wt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, R + it), R + it;
    }
    return u.currentChar() === pe && g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), R;
  }
  function Ht(u) {
    x(u);
    let m = "";
    return u.currentChar() === "-" ? (u.next(), m += `-${vt(u)}`) : m += vt(u), u.currentChar() === pe && g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), m;
  }
  function Zt(u) {
    return u !== Vs && u !== Vt;
  }
  function Mt(u) {
    x(u), C(u, "'");
    let m = "", R = "";
    for (; m = st(u, Zt); )
      m === "\\" ? R += Tt(u) : R += m;
    const W = u.currentChar();
    return W === Vt || W === pe ? (g(wt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), W === Vt && (u.next(), C(u, "'")), R) : (C(u, "'"), R);
  }
  function Tt(u) {
    const m = u.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return u.next(), `\\${m}`;
      case "u":
        return jt(u, m, 4);
      case "U":
        return jt(u, m, 6);
      default:
        return g(wt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, m), "";
    }
  }
  function jt(u, m, R) {
    C(u, m);
    let W = "";
    for (let it = 0; it < R; it++) {
      const Q = H(u);
      if (!Q) {
        g(wt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${m}${W}${u.currentChar()}`);
        break;
      }
      W += Q;
    }
    return `\\${m}${W}`;
  }
  function ne(u) {
    return u !== "{" && u !== "}" && u !== ue && u !== Vt;
  }
  function Gt(u) {
    x(u);
    let m = "", R = "";
    for (; m = st(u, ne); )
      R += m;
    return R;
  }
  function z(u) {
    let m = "", R = "";
    for (; m = bt(u); )
      R += m;
    return R;
  }
  function ct(u) {
    const m = (R) => {
      const W = u.currentChar();
      return W === "{" || W === "@" || W === "|" || W === "(" || W === ")" || !W || W === ue ? R : (R += W, u.next(), m(R));
    };
    return m("");
  }
  function yt(u) {
    x(u);
    const m = C(
      u,
      "|"
      /* TokenChars.Pipe */
    );
    return x(u), m;
  }
  function xt(u, m) {
    let R = null;
    switch (u.currentChar()) {
      case "{":
        return m.braceNest >= 1 && g(wt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), u.next(), R = p(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), x(u), m.braceNest++, R;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && g(wt.EMPTY_PLACEHOLDER, o(), 0), u.next(), R = p(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && x(u), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), R;
      case "@":
        return m.braceNest > 0 && g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), R = Lt(u, m) || w(m), m.braceNest = 0, R;
      default: {
        let it = !0, Q = !0, S = !0;
        if (nt(u))
          return m.braceNest > 0 && g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), R = p(m, 1, yt(u)), m.braceNest = 0, m.inLinked = !1, R;
        if (m.braceNest > 0 && (m.currentType === 4 || m.currentType === 5 || m.currentType === 6))
          return g(wt.UNTERMINATED_CLOSING_BRACE, o(), 0), m.braceNest = 0, At(u, m);
        if (it = v(u, m))
          return R = p(m, 4, Et(u)), x(u), R;
        if (Q = k(u, m))
          return R = p(m, 5, Ht(u)), x(u), R;
        if (S = P(u, m))
          return R = p(m, 6, Mt(u)), x(u), R;
        if (!it && !Q && !S)
          return R = p(m, 12, Gt(u)), g(wt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, R.value), x(u), R;
        break;
      }
    }
    return R;
  }
  function Lt(u, m) {
    const { currentType: R } = m;
    let W = null;
    const it = u.currentChar();
    switch ((R === 7 || R === 8 || R === 11 || R === 9) && (it === Vt || it === ue) && g(wt.INVALID_LINKED_FORMAT, o(), 0), it) {
      case "@":
        return u.next(), W = p(
          m,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, W;
      case ".":
        return x(u), u.next(), p(
          m,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return x(u), u.next(), p(
          m,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return nt(u) ? (W = p(m, 1, yt(u)), m.braceNest = 0, m.inLinked = !1, W) : N(u, m) || V(u, m) ? (x(u), Lt(u, m)) : M(u, m) ? (x(u), p(m, 11, z(u))) : q(u, m) ? (x(u), it === "{" ? xt(u, m) || W : p(m, 10, ct(u))) : (R === 7 && g(wt.INVALID_LINKED_FORMAT, o(), 0), m.braceNest = 0, m.inLinked = !1, At(u, m));
    }
  }
  function At(u, m) {
    let R = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return xt(u, m) || w(m);
    if (m.inLinked)
      return Lt(u, m) || w(m);
    switch (u.currentChar()) {
      case "{":
        return xt(u, m) || w(m);
      case "}":
        return g(wt.UNBALANCED_CLOSING_BRACE, o(), 0), u.next(), p(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Lt(u, m) || w(m);
      default: {
        if (nt(u))
          return R = p(m, 1, yt(u)), m.braceNest = 0, m.inLinked = !1, R;
        if (ot(u))
          return p(m, 0, X(u));
        break;
      }
    }
    return R;
  }
  function E() {
    const { currentType: u, offset: m, startLoc: R, endLoc: W } = l;
    return l.lastType = u, l.lastOffset = m, l.lastStartLoc = R, l.lastEndLoc = W, l.offset = s(), l.startLoc = o(), i.currentChar() === pe ? p(
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
const Zc = "parser", qc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Jc(e, t, n) {
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
function Qc(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(y, _, v, k, ...P) {
    const N = y.currentPosition();
    if (N.offset += k, N.column += k, n) {
      const M = t ? Pi(v, N) : null, V = oi(_, M, {
        domain: Zc,
        args: P
      });
      n(V);
    }
  }
  function s(y, _, v) {
    const k = { type: y };
    return t && (k.start = _, k.end = _, k.loc = { start: v, end: v }), k;
  }
  function o(y, _, v, k) {
    t && (y.end = _, y.loc && (y.loc.end = v));
  }
  function a(y, _) {
    const v = y.context(), k = s(3, v.offset, v.startLoc);
    return k.value = _, o(k, y.currentOffset(), y.currentPosition()), k;
  }
  function r(y, _) {
    const v = y.context(), { lastOffset: k, lastStartLoc: P } = v, N = s(5, k, P);
    return N.index = parseInt(_, 10), y.nextToken(), o(N, y.currentOffset(), y.currentPosition()), N;
  }
  function l(y, _) {
    const v = y.context(), { lastOffset: k, lastStartLoc: P } = v, N = s(4, k, P);
    return N.key = _, y.nextToken(), o(N, y.currentOffset(), y.currentPosition()), N;
  }
  function c(y, _) {
    const v = y.context(), { lastOffset: k, lastStartLoc: P } = v, N = s(9, k, P);
    return N.value = _.replace(qc, Jc), y.nextToken(), o(N, y.currentOffset(), y.currentPosition()), N;
  }
  function h(y) {
    const _ = y.nextToken(), v = y.context(), { lastOffset: k, lastStartLoc: P } = v, N = s(8, k, P);
    return _.type !== 11 ? (i(y, wt.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), N.value = "", o(N, k, P), {
      nextConsumeToken: _,
      node: N
    }) : (_.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, he(_)), N.value = _.value || "", o(N, y.currentOffset(), y.currentPosition()), {
      node: N
    });
  }
  function g(y, _) {
    const v = y.context(), k = s(7, v.offset, v.startLoc);
    return k.value = _, o(k, y.currentOffset(), y.currentPosition()), k;
  }
  function p(y) {
    const _ = y.context(), v = s(6, _.offset, _.startLoc);
    let k = y.nextToken();
    if (k.type === 8) {
      const P = h(y);
      v.modifier = P.node, k = P.nextConsumeToken || y.nextToken();
    }
    switch (k.type !== 9 && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(k)), k = y.nextToken(), k.type === 2 && (k = y.nextToken()), k.type) {
      case 10:
        k.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(k)), v.key = g(y, k.value || "");
        break;
      case 4:
        k.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(k)), v.key = l(y, k.value || "");
        break;
      case 5:
        k.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(k)), v.key = r(y, k.value || "");
        break;
      case 6:
        k.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(k)), v.key = c(y, k.value || "");
        break;
      default: {
        i(y, wt.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const P = y.context(), N = s(7, P.offset, P.startLoc);
        return N.value = "", o(N, P.offset, P.startLoc), v.key = N, o(v, P.offset, P.startLoc), {
          nextConsumeToken: k,
          node: v
        };
      }
    }
    return o(v, y.currentOffset(), y.currentPosition()), {
      node: v
    };
  }
  function w(y) {
    const _ = y.context(), v = _.currentType === 1 ? y.currentOffset() : _.offset, k = _.currentType === 1 ? _.endLoc : _.startLoc, P = s(2, v, k);
    P.items = [];
    let N = null;
    do {
      const q = N || y.nextToken();
      switch (N = null, q.type) {
        case 0:
          q.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(q)), P.items.push(a(y, q.value || ""));
          break;
        case 5:
          q.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(q)), P.items.push(r(y, q.value || ""));
          break;
        case 4:
          q.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(q)), P.items.push(l(y, q.value || ""));
          break;
        case 6:
          q.value == null && i(y, wt.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, he(q)), P.items.push(c(y, q.value || ""));
          break;
        case 7: {
          const nt = p(y);
          P.items.push(nt.node), N = nt.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 13 && _.currentType !== 1);
    const M = _.currentType === 1 ? _.lastOffset : y.currentOffset(), V = _.currentType === 1 ? _.lastEndLoc : y.currentPosition();
    return o(P, M, V), P;
  }
  function C(y, _, v, k) {
    const P = y.context();
    let N = k.items.length === 0;
    const M = s(1, _, v);
    M.cases = [], M.cases.push(k);
    do {
      const V = w(y);
      N || (N = V.items.length === 0), M.cases.push(V);
    } while (P.currentType !== 13);
    return N && i(y, wt.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), o(M, y.currentOffset(), y.currentPosition()), M;
  }
  function f(y) {
    const _ = y.context(), { offset: v, startLoc: k } = _, P = w(y);
    return _.currentType === 13 ? P : C(y, v, k, P);
  }
  function x(y) {
    const _ = Kc(y, Ft({}, e)), v = _.context(), k = s(0, v.offset, v.startLoc);
    return t && k.loc && (k.loc.source = y), k.body = f(_), e.onCacheKey && (k.cacheKey = e.onCacheKey(y)), v.currentType !== 13 && i(_, wt.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, y[v.offset] || ""), o(k, _.currentOffset(), _.currentPosition()), k;
  }
  return { parse: x };
}
function he(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function tu(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function Ys(e, t) {
  for (let n = 0; n < e.length; n++)
    Qi(e[n], t);
}
function Qi(e, t) {
  switch (e.type) {
    case 1:
      Ys(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ys(e.items, t);
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
function eu(e, t = {}) {
  const n = tu(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Qi(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function nu(e) {
  const t = e.body;
  return t.type === 2 ? Gs(t) : t.cases.forEach((n) => Gs(n)), e;
}
function Gs(e) {
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
function iu(e, t) {
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
    const y = x ? i : "";
    l(s ? y + "  ".repeat(f) : y);
  }
  function h(f = !0) {
    const x = ++a.indentLevel;
    f && c(x);
  }
  function g(f = !0) {
    const x = --a.indentLevel;
    f && c(x);
  }
  function p() {
    c(a.indentLevel);
  }
  return {
    context: r,
    push: l,
    indent: h,
    deindent: g,
    newline: p,
    helper: (f) => `_${f}`,
    needIndent: () => a.needIndent
  };
}
function su(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tn(e, t.key), t.modifier ? (e.push(", "), tn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ou(e, t) {
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
function au(e, t) {
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
function ru(e, t) {
  t.body ? tn(e, t.body) : e.push("null");
}
function tn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ru(e, t);
      break;
    case 1:
      au(e, t);
      break;
    case 2:
      ou(e, t);
      break;
    case 6:
      su(e, t);
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
const lu = (e, t = {}) => {
  const n = K(t.mode) ? t.mode : "normal", i = K(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], r = iu(e, {
    filename: i,
    breakLineCode: s,
    needIndent: o
  });
  r.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), r.indent(o), a.length > 0 && (r.push(`const { ${Ji(a.map((h) => `${h}: _${h}`), ", ")} } = ctx`), r.newline()), r.push("return "), tn(r, e), r.deindent(o), r.push("}"), delete e.helpers;
  const { code: l, map: c } = r.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function cu(e, t = {}) {
  const n = Ft({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = Qc(n).parse(e);
  return i ? (o && nu(r), s && Je(r), { ast: r, code: "" }) : (eu(r, n), lu(r, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function uu() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function me(e) {
  return pt(e) && ts(e) === 0 && (le(e, "b") || le(e, "body"));
}
const Jo = ["b", "body"];
function hu(e) {
  return Le(e, Jo);
}
const Qo = ["c", "cases"];
function du(e) {
  return Le(e, Qo, []);
}
const ta = ["s", "static"];
function fu(e) {
  return Le(e, ta);
}
const ea = ["i", "items"];
function gu(e) {
  return Le(e, ea, []);
}
const na = ["t", "type"];
function ts(e) {
  return Le(e, na);
}
const ia = ["v", "value"];
function Wn(e, t) {
  const n = Le(e, ia);
  if (n != null)
    return n;
  throw Sn(t);
}
const sa = ["m", "modifier"];
function mu(e) {
  return Le(e, sa);
}
const oa = ["k", "key"];
function pu(e) {
  const t = Le(e, oa);
  if (t)
    return t;
  throw Sn(
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
const aa = [
  ...Jo,
  ...Qo,
  ...ta,
  ...ea,
  ...oa,
  ...sa,
  ...ia,
  ...na
];
function Sn(e) {
  return new Error(`unhandled node type: ${e}`);
}
function vi(e) {
  return (n) => yu(n, e);
}
function yu(e, t) {
  const n = hu(t);
  if (n == null)
    throw Sn(
      0
      /* NodeTypes.Resource */
    );
  if (ts(n) === 1) {
    const o = du(n);
    return e.plural(o.reduce((a, r) => [
      ...a,
      Xs(e, r)
    ], []));
  } else
    return Xs(e, n);
}
function Xs(e, t) {
  const n = fu(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = gu(t).reduce((s, o) => [...s, Ei(e, o)], []);
    return e.normalize(i);
  }
}
function Ei(e, t) {
  const n = ts(t);
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
      throw Sn(n);
    }
    case 5: {
      const i = t;
      if (le(i, "i") && Bt(i.i))
        return e.interpolate(e.list(i.i));
      if (le(i, "index") && Bt(i.index))
        return e.interpolate(e.list(i.index));
      throw Sn(n);
    }
    case 6: {
      const i = t, s = mu(i), o = pu(i);
      return e.linked(Ei(e, o), s ? Ei(e, s) : void 0, e.type);
    }
    case 7:
      return Wn(t, n);
    case 8:
      return Wn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const wu = (e) => e;
let $n = St();
function vu(e, t = {}) {
  let n = !1;
  const i = t.onError || Hc;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...cu(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function xu(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && K(e)) {
    Ot(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || wu)(e), s = $n[i];
    if (s)
      return s;
    const { ast: o, detectError: a } = vu(e, {
      ...t,
      location: !1,
      jit: !0
    }), r = vi(o);
    return a ? r : $n[i] = r;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = $n[n];
      return i || ($n[n] = vi(e));
    } else
      return vi(e);
  }
}
const ve = {
  INVALID_ARGUMENT: Fc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, bu = 24;
function xe(e) {
  return oi(e, null, void 0);
}
function es(e, t) {
  return t.locale != null ? Ks(t.locale) : Ks(e.locale);
}
let xi;
function Ks(e) {
  if (K(e))
    return e;
  if (Pt(e)) {
    if (e.resolvedOnce && xi != null)
      return xi;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Wc(t))
        throw xe(ve.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return xi = t;
    } else
      throw xe(ve.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw xe(ve.NOT_SUPPORT_LOCALE_TYPE);
}
function ku(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...zt(t) ? t : pt(t) ? Object.keys(t) : K(t) ? [t] : [n]
  ])];
}
function ra(e, t, n) {
  const i = K(n) ? n : qn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; zt(a); )
      a = Zs(o, a, t);
    const r = zt(t) || !mt(t) ? t : t.default ? t.default : null;
    a = K(r) ? [r] : r, zt(a) && Zs(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function Zs(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && Ot(i); s++) {
    const o = t[s];
    K(o) && (i = _u(e, t[s], n));
  }
  return i;
}
function _u(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = Su(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function Su(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (zt(n) || mt(n)) && n[s] && (i = n[s]);
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
const Cu = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Tu(e) {
  return Cu.test(e);
}
function Mu(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Lu(e) {
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
function Ru(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Tu(t) ? Mu(t) : "*" + t;
}
function Pu(e) {
  const t = [];
  let n = -1, i = 0, s = 0, o, a, r, l, c, h, g;
  const p = [];
  p[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = r : a += r;
  }, p[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, p[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    p[
      0
      /* Actions.APPEND */
    ](), s++;
  }, p[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, i = 4, p[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, a === void 0 || (a = Ru(a), a === !1))
        return !1;
      p[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function w() {
    const C = e[n + 1];
    if (i === 5 && C === "'" || i === 6 && C === '"')
      return n++, r = "\\" + C, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, o = e[n], !(o === "\\" && w())) {
      if (l = Lu(o), g = Re[i], c = g[l] || g.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (h = p[c[1]], h && (r = o, h() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const qs = /* @__PURE__ */ new Map();
function Eu(e, t) {
  return pt(e) ? e[t] : null;
}
function Au(e, t) {
  if (!pt(e))
    return null;
  let n = qs.get(t);
  if (n || (n = Pu(t), n && qs.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = n[o];
    if (aa.includes(a) && me(s))
      return null;
    const r = s[a];
    if (r === void 0 || Pt(s))
      return null;
    s = r, o++;
  }
  return s;
}
const Iu = "11.2.2", ai = -1, qn = "en-US", Js = "", Qs = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ou() {
  return {
    upper: (e, t) => t === "text" && K(e) ? e.toUpperCase() : t === "vnode" && pt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && K(e) ? e.toLowerCase() : t === "vnode" && pt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && K(e) ? Qs(e) : t === "vnode" && pt(e) && "__v_isVNode" in e ? Qs(e.children) : e
  };
}
let la;
function zu(e) {
  la = e;
}
let ca;
function Du(e) {
  ca = e;
}
let ua;
function Nu(e) {
  ua = e;
}
let ha = null;
const to = (e) => {
  ha = e;
}, Wu = () => ha;
let eo = 0;
function $u(e = {}) {
  const t = Pt(e.onWarn) ? e.onWarn : Ec, n = K(e.version) ? e.version : Iu, i = K(e.locale) || Pt(e.locale) ? e.locale : qn, s = Pt(i) ? qn : i, o = zt(e.fallbackLocale) || mt(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = mt(e.messages) ? e.messages : bi(s), r = mt(e.datetimeFormats) ? e.datetimeFormats : bi(s), l = mt(e.numberFormats) ? e.numberFormats : bi(s), c = Ft(St(), e.modifiers, Ou()), h = e.pluralRules || St(), g = Pt(e.missing) ? e.missing : null, p = Ot(e.missingWarn) || Zn(e.missingWarn) ? e.missingWarn : !0, w = Ot(e.fallbackWarn) || Zn(e.fallbackWarn) ? e.fallbackWarn : !0, C = !!e.fallbackFormat, f = !!e.unresolving, x = Pt(e.postTranslation) ? e.postTranslation : null, y = mt(e.processor) ? e.processor : null, _ = Ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, v = !!e.escapeParameter, k = Pt(e.messageCompiler) ? e.messageCompiler : la, P = Pt(e.messageResolver) ? e.messageResolver : ca || Eu, N = Pt(e.localeFallbacker) ? e.localeFallbacker : ua || ku, M = pt(e.fallbackContext) ? e.fallbackContext : void 0, V = e, q = pt(V.__datetimeFormatters) ? V.__datetimeFormatters : /* @__PURE__ */ new Map(), nt = pt(V.__numberFormatters) ? V.__numberFormatters : /* @__PURE__ */ new Map(), ot = pt(V.__meta) ? V.__meta : {};
  eo++;
  const st = {
    version: n,
    cid: eo,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: h,
    missing: g,
    missingWarn: p,
    fallbackWarn: w,
    fallbackFormat: C,
    unresolving: f,
    postTranslation: x,
    processor: y,
    warnHtmlMessage: _,
    escapeParameter: v,
    messageCompiler: k,
    messageResolver: P,
    localeFallbacker: N,
    fallbackContext: M,
    onWarn: t,
    __meta: ot
  };
  return st.datetimeFormats = r, st.numberFormats = l, st.__datetimeFormatters = q, st.__numberFormatters = nt, st;
}
const bi = (e) => ({ [e]: St() });
function ns(e, t, n, i, s) {
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
function Bu(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Fu(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (Bu(e, t[i]))
      return !0;
  return !1;
}
function no(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e, [l, c, h, g] = Ai(...t), p = Ot(h.missingWarn) ? h.missingWarn : e.missingWarn;
  Ot(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn;
  const w = !!h.part, C = es(e, h), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!K(l) || l === "")
    return new Intl.DateTimeFormat(C, g).format(c);
  let x = {}, y, _ = null;
  const v = "datetime format";
  for (let N = 0; N < f.length && (y = f[N], x = n[y] || {}, _ = x[l], !mt(_)); N++)
    ns(e, l, y, p, v);
  if (!mt(_) || !K(y))
    return i ? ai : l;
  let k = `${y}__${l}`;
  si(g) || (k = `${k}__${JSON.stringify(g)}`);
  let P = r.get(k);
  return P || (P = new Intl.DateTimeFormat(y, Ft({}, _, g)), r.set(k, P)), w ? P.formatToParts(c) : P.format(c);
}
const da = [
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
  if (K(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw xe(ve.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    r = new Date(c);
    try {
      r.toISOString();
    } catch {
      throw xe(ve.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Oc(t)) {
    if (isNaN(t.getTime()))
      throw xe(ve.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (Bt(t))
    r = t;
  else
    throw xe(ve.INVALID_ARGUMENT);
  return K(n) ? o.key = n : mt(n) && Object.keys(n).forEach((l) => {
    da.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), K(i) ? o.locale = i : mt(i) && (a = i), mt(s) && (a = s), [o.key || "", r, o, a];
}
function io(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function so(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e, [l, c, h, g] = Ii(...t), p = Ot(h.missingWarn) ? h.missingWarn : e.missingWarn;
  Ot(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn;
  const w = !!h.part, C = es(e, h), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    C
  );
  if (!K(l) || l === "")
    return new Intl.NumberFormat(C, g).format(c);
  let x = {}, y, _ = null;
  const v = "number format";
  for (let N = 0; N < f.length && (y = f[N], x = n[y] || {}, _ = x[l], !mt(_)); N++)
    ns(e, l, y, p, v);
  if (!mt(_) || !K(y))
    return i ? ai : l;
  let k = `${y}__${l}`;
  si(g) || (k = `${k}__${JSON.stringify(g)}`);
  let P = r.get(k);
  return P || (P = new Intl.NumberFormat(y, Ft({}, _, g)), r.set(k, P)), w ? P.formatToParts(c) : P.format(c);
}
const fa = [
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
    throw xe(ve.INVALID_ARGUMENT);
  const r = t;
  return K(n) ? o.key = n : mt(n) && Object.keys(n).forEach((l) => {
    fa.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), K(i) ? o.locale = i : mt(i) && (a = i), mt(s) && (a = s), [o.key || "", r, o, a];
}
function oo(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const Hu = (e) => e, ju = (e) => "", Uu = "text", Vu = (e) => e.length === 0 ? "" : Ji(e), Yu = $c;
function ao(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Gu(e) {
  const t = Bt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Bt(e.named.count) || Bt(e.named.n)) ? Bt(e.named.count) ? e.named.count : Bt(e.named.n) ? e.named.n : t : t;
}
function Xu(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Ku(e = {}) {
  const t = e.locale, n = Gu(e), i = pt(e.pluralRules) && K(t) && Pt(e.pluralRules[t]) ? e.pluralRules[t] : ao, s = pt(e.pluralRules) && K(t) && Pt(e.pluralRules[t]) ? ao : void 0, o = (y) => y[i(n, y.length, s)], a = e.list || [], r = (y) => a[y], l = e.named || St();
  Bt(e.pluralIndex) && Xu(n, l);
  const c = (y) => l[y];
  function h(y, _) {
    const v = Pt(e.messages) ? e.messages(y, !!_) : pt(e.messages) ? e.messages[y] : !1;
    return v || (e.parent ? e.parent.message(y) : ju);
  }
  const g = (y) => e.modifiers ? e.modifiers[y] : Hu, p = mt(e.processor) && Pt(e.processor.normalize) ? e.processor.normalize : Vu, w = mt(e.processor) && Pt(e.processor.interpolate) ? e.processor.interpolate : Yu, C = mt(e.processor) && K(e.processor.type) ? e.processor.type : Uu, x = {
    list: r,
    named: c,
    plural: o,
    linked: (y, ..._) => {
      const [v, k] = _;
      let P = "text", N = "";
      _.length === 1 ? pt(v) ? (N = v.modifier || N, P = v.type || P) : K(v) && (N = v || N) : _.length === 2 && (K(v) && (N = v || N), K(k) && (P = k || P));
      const M = h(y, !0)(x), V = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && zt(M) && N ? M[0] : M
      );
      return N ? g(N)(V, P) : V;
    },
    message: h,
    type: C,
    interpolate: w,
    normalize: p,
    values: Ft(St(), a, l)
  };
  return x;
}
const ro = () => "", be = (e) => Pt(e);
function lo(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = Oi(...t), h = Ot(c.missingWarn) ? c.missingWarn : e.missingWarn, g = Ot(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, p = Ot(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, w = !!c.resolvedMessage, C = K(c.default) || Ot(c.default) ? Ot(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, f = n || C != null && (K(C) || Pt(C)), x = es(e, c);
  p && Zu(c);
  let [y, _, v] = w ? [
    l,
    x,
    r[x] || St()
  ] : ga(e, l, x, a, g, h), k = y, P = l;
  if (!w && !(K(k) || me(k) || be(k)) && f && (k = C, P = k), !w && (!(K(k) || me(k) || be(k)) || !K(_)))
    return s ? ai : l;
  let N = !1;
  const M = () => {
    N = !0;
  }, V = be(k) ? k : ma(e, l, _, k, P, M);
  if (N)
    return k;
  const q = Qu(e, _, v, c), nt = Ku(q), ot = qu(e, V, nt);
  let st = i ? i(ot, l) : ot;
  return p && K(st) && (st = Dc(st)), st;
}
function Zu(e) {
  zt(e.list) ? e.list = e.list.map((t) => K(t) ? js(t) : t) : pt(e.named) && Object.keys(e.named).forEach((t) => {
    K(e.named[t]) && (e.named[t] = js(e.named[t]));
  });
}
function ga(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, h = c(e, i, n);
  let g = St(), p, w = null;
  const C = "translate";
  for (let f = 0; f < h.length && (p = h[f], g = a[p] || St(), (w = l(g, t)) === null && (w = g[t]), !(K(w) || me(w) || be(w))); f++)
    if (!Fu(p, h)) {
      const x = ns(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        o,
        C
      );
      x !== t && (w = x);
    }
  return [w, p, g];
}
function ma(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (be(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => i;
    return c.locale = n, c.key = t, c;
  }
  const l = a(i, Ju(e, n, s, i, r, o));
  return l.locale = n, l.key = t, l.source = i, l;
}
function qu(e, t, n) {
  return t(n);
}
function Oi(...e) {
  const [t, n, i] = e, s = St();
  if (!K(t) && !Bt(t) && !be(t) && !me(t))
    throw xe(ve.INVALID_ARGUMENT);
  const o = Bt(t) ? String(t) : (be(t), t);
  return Bt(n) ? s.plural = n : K(n) ? s.default = n : mt(n) && !si(n) ? s.named = n : zt(n) && (s.list = n), Bt(i) ? s.plural = i : K(i) ? s.default = i : mt(i) && Ft(s, i), [o, s];
}
function Ju(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => Ac(t, n, a)
  };
}
function Qu(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: h } = e, p = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (w, C) => {
      let f = a(n, w);
      if (f == null && (h || C)) {
        const [, , x] = ga(
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
        const _ = ma(e, w, t, f, w, () => {
          x = !0;
        });
        return x ? ro : _;
      } else return be(f) ? f : ro;
    }
  };
  return e.processor && (p.processor = e.processor), i.list && (p.list = i.list), i.named && (p.named = i.named), Bt(i.plural) && (p.pluralIndex = i.plural), p;
}
uu();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const th = "11.2.2";
function eh() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (jn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (jn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const en = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: bu,
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
function Cn(e, ...t) {
  return oi(e, null, void 0);
}
const zi = /* @__PURE__ */ je("__translateVNode"), Di = /* @__PURE__ */ je("__datetimeParts"), Ni = /* @__PURE__ */ je("__numberParts"), nh = je("__setPluralRules"), pa = /* @__PURE__ */ je("__injectWithOption"), Wi = /* @__PURE__ */ je("__dispose");
function Tn(e) {
  if (!pt(e) || me(e))
    return e;
  for (const t in e)
    if (le(e, t))
      if (!t.includes("."))
        pt(e[t]) && Tn(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = St()), !pt(s[n[a]])) {
            o = !0;
            break;
          }
          s = s[n[a]];
        }
        if (o || (me(s) ? aa.includes(n[i]) || delete e[t] : (s[n[i]] = e[t], delete e[t])), !me(s)) {
          const a = s[n[i]];
          pt(a) && Tn(a);
        }
      }
  return e;
}
function ya(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = mt(n) ? n : zt(i) ? St() : { [e]: St() };
  if (zt(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || St(), Un(c, a[l])) : Un(c, a);
    } else
      K(r) && Un(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      le(a, r) && Tn(a[r]);
  return a;
}
function ih(e) {
  return e.type;
}
function sh(e, t, n) {
  let i = pt(t.messages) ? t.messages : St();
  "__i18nGlobal" in n && (i = ya(e.locale.value, {
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
function co(e) {
  return b(dr, null, e, 0);
}
function wa() {
  return "currentInstance" in mi ? mi["currentInstance"] : mi.getCurrentInstance();
}
const uo = () => [], oh = () => !1;
let ho = 0;
function fo(e) {
  return (t, n, i, s) => e(n, i, wa() || void 0, s);
}
function ah(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = Fs ? J : hr;
  let a = Ot(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : K(e.locale) ? e.locale : qn
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : K(e.fallbackLocale) || zt(e.fallbackLocale) || mt(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(ya(r.value, e)), h = o(mt(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), g = o(mt(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let p = t ? t.missingWarn : Ot(e.missingWarn) || Zn(e.missingWarn) ? e.missingWarn : !0, w = t ? t.fallbackWarn : Ot(e.fallbackWarn) || Zn(e.fallbackWarn) ? e.fallbackWarn : !0, C = t ? t.fallbackRoot : Ot(e.fallbackRoot) ? e.fallbackRoot : !0, f = !!e.fallbackFormat, x = Pt(e.missing) ? e.missing : null, y = Pt(e.missing) ? fo(e.missing) : null, _ = Pt(e.postTranslation) ? e.postTranslation : null, v = t ? t.warnHtmlMessage : Ot(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const P = t ? t.modifiers : mt(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || t && t.pluralRules, M;
  M = (() => {
    i && to(null);
    const S = {
      version: th,
      locale: r.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: P,
      pluralRules: N,
      missing: y === null ? void 0 : y,
      missingWarn: p,
      fallbackWarn: w,
      fallbackFormat: f,
      unresolving: !0,
      postTranslation: _ === null ? void 0 : _,
      warnHtmlMessage: v,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    S.datetimeFormats = h.value, S.numberFormats = g.value, S.__datetimeFormatters = mt(M) ? M.__datetimeFormatters : void 0, S.__numberFormatters = mt(M) ? M.__numberFormatters : void 0;
    const $ = $u(S);
    return i && to($), $;
  })(), dn(M, r.value, l.value);
  function q() {
    return [
      r.value,
      l.value,
      c.value,
      h.value,
      g.value
    ];
  }
  const nt = Y({
    get: () => r.value,
    set: (S) => {
      M.locale = S, r.value = S;
    }
  }), ot = Y({
    get: () => l.value,
    set: (S) => {
      M.fallbackLocale = S, l.value = S, dn(M, r.value, S);
    }
  }), st = Y(() => c.value), ut = /* @__PURE__ */ Y(() => h.value), bt = /* @__PURE__ */ Y(() => g.value);
  function ht() {
    return Pt(_) ? _ : null;
  }
  function et(S) {
    _ = S, M.postTranslation = S;
  }
  function rt() {
    return x;
  }
  function kt(S) {
    S !== null && (y = fo(S)), x = S, M.missing = y;
  }
  const ft = (S, $, gt, dt, te, Pe) => {
    q();
    let ke;
    try {
      i || (M.fallbackContext = t ? Wu() : void 0), ke = S(M);
    } finally {
      i || (M.fallbackContext = void 0);
    }
    if (gt !== "translate exists" && // for not `te` (e.g `t`)
    Bt(ke) && ke === ai || gt === "translate exists" && !ke) {
      const [hi, hs] = $();
      return t && C ? dt(t) : te(hi);
    } else {
      if (Pe(ke))
        return ke;
      throw Cn(en.UNEXPECTED_RETURN_TYPE);
    }
  };
  function H(...S) {
    return ft(($) => Reflect.apply(lo, null, [$, ...S]), () => Oi(...S), "translate", ($) => Reflect.apply($.t, $, [...S]), ($) => $, ($) => K($));
  }
  function vt(...S) {
    const [$, gt, dt] = S;
    if (dt && !pt(dt))
      throw Cn(en.INVALID_ARGUMENT);
    return H($, gt, Ft({ resolvedMessage: !0 }, dt || {}));
  }
  function X(...S) {
    return ft(($) => Reflect.apply(no, null, [$, ...S]), () => Ai(...S), "datetime format", ($) => Reflect.apply($.d, $, [...S]), () => Js, ($) => K($) || zt($));
  }
  function Et(...S) {
    return ft(($) => Reflect.apply(so, null, [$, ...S]), () => Ii(...S), "number format", ($) => Reflect.apply($.n, $, [...S]), () => Js, ($) => K($) || zt($));
  }
  function Ht(S) {
    return S.map(($) => K($) || Bt($) || Ot($) ? co(String($)) : $);
  }
  const Mt = {
    normalize: Ht,
    interpolate: (S) => S,
    type: "vnode"
  };
  function Tt(...S) {
    return ft(($) => {
      let gt;
      const dt = $;
      try {
        dt.processor = Mt, gt = Reflect.apply(lo, null, [dt, ...S]);
      } finally {
        dt.processor = null;
      }
      return gt;
    }, () => Oi(...S), "translate", ($) => $[zi](...S), ($) => [co($)], ($) => zt($));
  }
  function jt(...S) {
    return ft(($) => Reflect.apply(so, null, [$, ...S]), () => Ii(...S), "number format", ($) => $[Ni](...S), uo, ($) => K($) || zt($));
  }
  function ne(...S) {
    return ft(($) => Reflect.apply(no, null, [$, ...S]), () => Ai(...S), "datetime format", ($) => $[Di](...S), uo, ($) => K($) || zt($));
  }
  function Gt(S) {
    N = S, M.pluralRules = N;
  }
  function z(S, $) {
    return ft(() => {
      if (!S)
        return !1;
      const gt = K($) ? $ : r.value, dt = xt(gt), te = M.messageResolver(dt, S);
      return me(te) || be(te) || K(te);
    }, () => [S], "translate exists", (gt) => Reflect.apply(gt.te, gt, [S, $]), oh, (gt) => Ot(gt));
  }
  function ct(S) {
    let $ = null;
    const gt = ra(M, l.value, r.value);
    for (let dt = 0; dt < gt.length; dt++) {
      const te = c.value[gt[dt]] || {}, Pe = M.messageResolver(te, S);
      if (Pe != null) {
        $ = Pe;
        break;
      }
    }
    return $;
  }
  function yt(S) {
    const $ = ct(S);
    return $ ?? (t ? t.tm(S) || {} : {});
  }
  function xt(S) {
    return c.value[S] || {};
  }
  function Lt(S, $) {
    if (s) {
      const gt = { [S]: $ };
      for (const dt in gt)
        le(gt, dt) && Tn(gt[dt]);
      $ = gt[S];
    }
    c.value[S] = $, M.messages = c.value;
  }
  function At(S, $) {
    c.value[S] = c.value[S] || {};
    const gt = { [S]: $ };
    if (s)
      for (const dt in gt)
        le(gt, dt) && Tn(gt[dt]);
    $ = gt[S], Un($, c.value[S]), M.messages = c.value;
  }
  function E(S) {
    return h.value[S] || {};
  }
  function u(S, $) {
    h.value[S] = $, M.datetimeFormats = h.value, io(M, S, $);
  }
  function m(S, $) {
    h.value[S] = Ft(h.value[S] || {}, $), M.datetimeFormats = h.value, io(M, S, $);
  }
  function R(S) {
    return g.value[S] || {};
  }
  function W(S, $) {
    g.value[S] = $, M.numberFormats = g.value, oo(M, S, $);
  }
  function it(S, $) {
    g.value[S] = Ft(g.value[S] || {}, $), M.numberFormats = g.value, oo(M, S, $);
  }
  ho++, t && Fs && (Ne(t.locale, (S) => {
    a && (r.value = S, M.locale = S, dn(M, r.value, l.value));
  }), Ne(t.fallbackLocale, (S) => {
    a && (l.value = S, M.fallbackLocale = S, dn(M, r.value, l.value));
  }));
  const Q = {
    id: ho,
    locale: nt,
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
      return P;
    },
    get pluralRules() {
      return N || {};
    },
    get isGlobal() {
      return i;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(S) {
      p = S, M.missingWarn = p;
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
      return k;
    },
    set escapeParameter(S) {
      k = S, M.escapeParameter = S;
    },
    t: H,
    getLocaleMessage: xt,
    setLocaleMessage: Lt,
    mergeLocaleMessage: At,
    getPostTranslationHandler: ht,
    setPostTranslationHandler: et,
    getMissingHandler: rt,
    setMissingHandler: kt,
    [nh]: Gt
  };
  return Q.datetimeFormats = ut, Q.numberFormats = bt, Q.rt = vt, Q.te = z, Q.tm = yt, Q.d = X, Q.n = Et, Q.getDateTimeFormat = E, Q.setDateTimeFormat = u, Q.mergeDateTimeFormat = m, Q.getNumberFormat = R, Q.setNumberFormat = W, Q.mergeNumberFormat = it, Q[pa] = n, Q[zi] = Tt, Q[Di] = ne, Q[Ni] = jt, Q;
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
function rh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Xt ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, St());
}
function va() {
  return Xt;
}
Ft({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Bt(e) || !isNaN(e)
  }
}, is);
function lh(e) {
  return zt(e) && !K(e[0]);
}
function xa(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = St();
    e.locale && (a.locale = e.locale), K(e.format) ? a.key = e.format : pt(e.format) && (K(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((p, w) => n.includes(w) ? Ft(St(), p, { [w]: e.format[w] }) : p, St()));
    const l = i(e.value, a, r);
    let c = [a.key];
    zt(l) ? c = l.map((p, w) => {
      const C = s[p.type], f = C ? C({ [p.type]: p.value, index: w, parts: l }) : [p.value];
      return lh(f) && (f[0].key = `${p.type}-${w}`), f;
    }) : K(l) && (c = [l]);
    const h = Ft(St(), o), g = K(e.tag) || pt(e.tag) ? e.tag : va();
    return Eo(g, h, c);
  };
}
Ft({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, is);
const ch = /* @__PURE__ */ je("global-vue-i18n");
function Pn(e = {}) {
  const t = wa();
  if (t == null)
    throw Cn(en.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Cn(en.NOT_INSTALLED);
  const n = uh(t), i = dh(n), s = ih(t), o = hh(e, s);
  if (o === "global")
    return sh(i, e, s), i;
  if (o === "parent") {
    let l = fh(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = Ft({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = ah(l), a.__composerExtend && (r[Wi] = a.__composerExtend(r)), mh(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function uh(e) {
  const t = Te(e.isCE ? ch : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Cn(e.isCE ? en.NOT_INSTALLED_WITH_PROVIDE : en.UNEXPECTED_ERROR);
  return t;
}
function hh(e, t) {
  return si(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function dh(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function fh(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = gh(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[pa] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function gh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function mh(e, t, n) {
  an(() => {
  }, t), Hi(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Wi];
    s && (s(), delete i[Wi]);
  }, t);
}
Ft({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, is);
eh();
zu(xu);
Du(Au);
Nu(ra);
const ph = { class: "toolbar-panel first-panel" }, yh = { class: "tool-section" }, wh = ["onClick", "title", "aria-pressed"], vh = { class: "action-section" }, xh = ["disabled", "title"], bh = ["disabled", "title"], kh = ["disabled", "title"], _h = ["title"], Sh = ["title"], Ch = ["title"], Th = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Mh = { class: "style-section" }, Lh = {
  key: 0,
  class: "style-group"
}, Rh = { class: "style-label" }, Ph = { class: "line-width-selector" }, Eh = ["onClick", "title", "aria-pressed"], Ah = { class: "style-value" }, Ih = {
  key: 1,
  class: "style-divider"
}, Oh = {
  key: 2,
  class: "style-group opacity-group"
}, zh = { class: "style-label" }, Dh = ["value", "title", "aria-label"], Nh = { class: "style-value" }, Wh = {
  key: 3,
  class: "style-divider"
}, $h = {
  key: 4,
  class: "style-group color-picker-group"
}, Bh = { class: "style-label" }, Fh = { class: "color-row" }, Hh = ["onClick", "title", "aria-pressed"], jh = { class: "custom-color-wrapper" }, Uh = ["title"], Vh = ["value", "title", "aria-label"], Yh = {
  key: 5,
  class: "style-group"
}, Gh = { class: "style-label" }, Xh = { class: "text-size-selector" }, Kh = ["onClick", "title", "aria-pressed"], Zh = { class: "style-value" }, qh = {
  key: 6,
  class: "style-group"
}, Jh = { class: "style-label" }, Qh = { class: "mosaic-size-selector" }, td = ["onClick", "title", "aria-pressed"], ed = { class: "style-value" }, nd = {
  key: 7,
  class: "style-group"
}, id = { class: "style-label" }, sd = { class: "translate-engine-selector" }, od = ["onClick", "title", "aria-pressed"], ad = /* @__PURE__ */ Dt({
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
    const i = J(null), { t: s } = Pn(), o = e, a = n, r = Y(() => [
      { type: T.Select, icon: kc, title: s("screenshot.select") },
      { type: T.Rectangle, icon: Sc, title: s("screenshot.rectangle") },
      { type: T.Ellipse, icon: Lc, title: s("screenshot.ellipse") },
      { type: T.Line, icon: Ko, title: s("screenshot.line") },
      { type: T.Arrow, icon: mc, title: s("screenshot.arrow") },
      { type: T.Pen, icon: Pc, title: s("screenshot.pen") },
      { type: T.Mosaic, icon: bc, title: s("screenshot.mosaic") },
      { type: T.Text, icon: wc, title: s("screenshot.text") },
      { type: T.ColorPicker, icon: $s, title: s("screenshot.colorPicker") },
      { type: T.Ocr, icon: mn, title: s("screenshot.ocr") },
      { type: T.Translate, icon: Zo, title: s("screenshot.translate") },
      { type: T.Pin, icon: Ri, title: s("screenshot.pin") }
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
    ], g = [12, 14, 16, 18, 20, 24], p = [8, 12, 16, 20], w = Y(() => ![T.Select, T.ColorPicker, T.Ocr, T.Pin].includes(o.currentTool)), C = Y(
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
    ), y = Y(() => o.currentTool === T.Text), _ = Y(() => o.currentTool === T.Mosaic), v = Y(() => o.currentTool === T.Translate), k = (H) => a("tool-select", H), P = (H) => a("color-change", H), N = (H) => a("line-width-change", H), M = (H) => {
      a("opacity-change", Number(H.target.value) / 100);
    }, V = (H) => a("text-size-change", H), q = (H) => a("mosaic-size-change", H), nt = () => a("undo"), ot = () => a("redo"), st = () => a("delete"), ut = () => a("save"), bt = () => a("confirm"), ht = () => a("cancel"), et = (H) => {
      a("translate-engine-change", H);
    }, rt = (H) => {
      P(H);
    }, kt = (H) => {
      const vt = H.target;
      vt.value && P(vt.value);
    }, ft = () => {
      const H = i.value?.getBoundingClientRect();
      return {
        width: H?.width ?? 590,
        height: H?.height ?? 50
      };
    };
    return Ne(() => o.currentTool, () => {
      xn(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: ft()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: ft
    }), (H, vt) => (F(), G(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        tt(" 第一个面板：工具选择 + 操作按钮 "),
        I("div", ph, [
          tt(" 工具选择区域 "),
          I("div", yh, [
            (F(!0), G(
              Xt,
              null,
              ge(r.value, (X) => (F(), G("button", {
                key: X.type,
                onClick: (Et) => k(X.type),
                class: _t(["tool-btn", { active: H.currentTool === X.type }]),
                title: X.title,
                "aria-pressed": H.currentTool === X.type
              }, [
                (F(), $t(Ce(X.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, wh))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          tt(" 分隔线 "),
          vt[0] || (vt[0] = I(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          tt(" 操作按钮区域 "),
          I("div", vh, [
            I("button", {
              onClick: nt,
              disabled: !H.canUndo,
              class: "action-btn undo",
              title: D(s)("screenshot.undo")
            }, [
              b(D(Mc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, xh),
            I("button", {
              onClick: ot,
              disabled: !H.canRedo,
              class: "action-btn redo",
              title: D(s)("screenshot.redo")
            }, [
              b(D(vc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, bh),
            I("button", {
              onClick: st,
              disabled: !H.canDelete,
              class: "action-btn delete",
              title: D(s)("screenshot.delete")
            }, [
              b(D(pc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, kh),
            I("button", {
              onClick: ht,
              class: "action-btn cancel",
              title: D(s)("screenshot.cancel")
            }, [
              b(D(Li), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, _h),
            I("button", {
              onClick: ut,
              class: "action-btn save",
              title: D(s)("screenshot.save")
            }, [
              b(D(yc), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Sh),
            I("button", {
              onClick: bt,
              class: "action-btn confirm",
              title: D(s)("screenshot.confirm")
            }, [
              b(D(Mi), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ch)
          ])
        ]),
        tt(" 第二个面板：样式设置区域 "),
        w.value ? (F(), G("div", Th, [
          I("div", Mh, [
            tt(" 线宽设置 "),
            C.value ? (F(), G("div", Lh, [
              I(
                "span",
                Rh,
                at(D(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              I("div", Ph, [
                (F(), G(
                  Xt,
                  null,
                  ge(c, (X) => I("button", {
                    key: X,
                    onClick: (Et) => N(X),
                    class: _t(["width-btn", { active: H.currentLineWidth === X }]),
                    title: `${X}px`,
                    "aria-pressed": H.currentLineWidth === X
                  }, [
                    I(
                      "span",
                      {
                        class: "line-preview",
                        style: It({ height: `${X}px`, backgroundColor: H.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Eh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              I(
                "span",
                Ah,
                at(H.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : tt("v-if", !0),
            C.value && f.value ? (F(), G("div", Ih)) : tt("v-if", !0),
            tt(" 不透明度设置 "),
            x.value ? (F(), G("div", Oh, [
              I(
                "span",
                zh,
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
                value: Math.round(H.currentOpacity * 100),
                style: It({
                  "--opacity-color": H.currentColor,
                  "--opacity-progress": `${Math.round(H.currentOpacity * 100)}%`
                }),
                title: `${Math.round(H.currentOpacity * 100)}%`,
                "aria-label": D(s)("screenshot.opacity"),
                onInput: M
              }, null, 44, Dh),
              I(
                "span",
                Nh,
                at(Math.round(H.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : tt("v-if", !0),
            x.value && f.value ? (F(), G("div", Wh)) : tt("v-if", !0),
            tt(" 颜色设置 "),
            f.value ? (F(), G("div", $h, [
              I(
                "span",
                Bh,
                at(D(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              I("div", Fh, [
                (F(), G(
                  Xt,
                  null,
                  ge(h, (X) => I("button", {
                    key: X,
                    onClick: (Et) => rt(X),
                    class: _t(["color-btn", { active: H.currentColor === X }]),
                    style: It({ backgroundColor: X }),
                    title: X,
                    "aria-pressed": H.currentColor === X
                  }, null, 14, Hh)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                I("div", jh, [
                  I("button", {
                    class: _t(["color-btn custom-color-btn", { active: !h.includes(H.currentColor) }]),
                    title: D(s)("screenshot.customColor")
                  }, [
                    b(D($s), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Uh),
                  I("input", {
                    type: "color",
                    onChange: kt,
                    value: H.currentColor,
                    class: "color-input-hidden",
                    title: D(s)("screenshot.customColor"),
                    "aria-label": D(s)("screenshot.customColor")
                  }, null, 40, Vh)
                ])
              ])
            ])) : tt("v-if", !0),
            tt(" 文字大小设置 "),
            y.value ? (F(), G("div", Yh, [
              I(
                "span",
                Gh,
                at(D(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              I("div", Xh, [
                (F(), G(
                  Xt,
                  null,
                  ge(g, (X) => I("button", {
                    key: X,
                    onClick: (Et) => V(X),
                    class: _t(["size-btn", { active: H.currentTextSize === X }]),
                    title: `${X}px`,
                    "aria-pressed": H.currentTextSize === X
                  }, [
                    I(
                      "span",
                      {
                        class: "size-text",
                        style: It({ fontSize: `${Math.min(X, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Kh)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              I(
                "span",
                Zh,
                at(H.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : tt("v-if", !0),
            tt(" 马赛克大小设置 "),
            _.value ? (F(), G("div", qh, [
              I(
                "span",
                Jh,
                at(D(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              I("div", Qh, [
                (F(), G(
                  Xt,
                  null,
                  ge(p, (X) => I("button", {
                    key: X,
                    onClick: (Et) => q(X),
                    class: _t(["size-btn", { active: H.currentMosaicSize === X }]),
                    title: `${D(s)("screenshot.brush")} ${X * 3}px`,
                    "aria-pressed": H.currentMosaicSize === X
                  }, [
                    I(
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
                  ], 10, td)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              I(
                "span",
                ed,
                at(H.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : tt("v-if", !0),
            tt(" 翻译引擎选择 "),
            v.value ? (F(), G("div", nd, [
              I(
                "span",
                id,
                at(D(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              I("div", sd, [
                (F(!0), G(
                  Xt,
                  null,
                  ge(l.value, (X) => (F(), G("button", {
                    key: X.value,
                    onClick: (Et) => et(X.value),
                    class: _t(["engine-btn", { active: H.currentTranslateEngine === X.value }]),
                    title: X.label,
                    "aria-pressed": H.currentTranslateEngine === X.value
                  }, at(X.short), 11, od))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : tt("v-if", !0)
          ])
        ])) : tt("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), ri = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, rd = /* @__PURE__ */ ri(ad, [["__scopeId", "data-v-dc3e37ec"]]), ld = {
  class: "screenshot-container",
  ref: "containerRef"
}, cd = {
  key: 0,
  class: "mask-layers"
}, ud = {
  key: 1,
  class: "mask-full"
}, hd = { class: "size-text" }, dd = {
  key: 4,
  class: "loading-overlay"
}, fd = /* @__PURE__ */ Dt({
  __name: "index",
  setup(e) {
    const t = J(), n = J(), i = J(null), s = J(null);
    let o = null;
    const a = J(!0), r = J(!1), l = J(""), c = J({ x: 0, y: 0 }), h = J(16), g = J(!1), p = J("bing"), w = J({ width: 590, height: 50 });
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
    }), x = J(), y = J(), _ = J(), v = Y(() => f.value.isDrawing), k = Y(() => {
      if (!f.value.selectionRect) return {};
      const { y: E } = f.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${E}px`
      };
    }), P = Y(() => {
      if (!f.value.selectionRect) return {};
      const { y: E, height: u } = f.value.selectionRect;
      return {
        top: `${E + u}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), N = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: u, height: m } = f.value.selectionRect;
      return {
        top: `${u}px`,
        left: "0",
        width: `${E}px`,
        height: `${m}px`
      };
    }), M = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: u, width: m, height: R } = f.value.selectionRect;
      return {
        top: `${u}px`,
        left: `${E + m}px`,
        right: "0",
        height: `${R}px`
      };
    }), V = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: u, width: m, height: R } = f.value.selectionRect, W = 10, it = 12, Q = Math.min(w.value.width, Math.max(0, window.innerWidth - W * 2)), S = Math.min(w.value.height, Math.max(0, window.innerHeight - W * 2)), $ = Math.max(W, window.innerHeight - S - W), gt = Math.max(W, window.innerWidth - Q - W);
      let dt;
      return u + R + S + it <= window.innerHeight - W ? dt = u + R + it : u - S - it >= W ? dt = u - S - it : dt = u + R - S - W, dt = Math.min(Math.max(dt, W), $), {
        left: `${Math.min(Math.max(E + (m - Q) / 2, W), gt)}px`,
        top: `${dt}px`
      };
    }), q = Y(() => {
      if (!f.value.selectionRect) return {};
      const { x: E, y: u, width: m, height: R } = f.value.selectionRect, W = 10;
      let it = E - W, Q = u - W, S = "translateY(-100%)";
      return it < 10 && (it = E + m + W, S = "translateY(-100%)"), Q < 30 && (Q = u + R + W, S = "translateY(0)"), {
        left: `${it}px`,
        top: `${Q}px`,
        transform: S
      };
    }), nt = Y(() => {
      if (!f.value.selectionRect) return "";
      const { width: E, height: u } = f.value.selectionRect;
      return `${Math.round(E)} × ${Math.round(u)}`;
    }), ot = Y(() => {
      const E = Ke(c.value);
      return {
        "--text-accent-color": f.value.currentStyle.color,
        left: `${E.x}px`,
        top: `${E.y}px`
      };
    }), st = (E) => {
      if (E === T.Pin && f.value.selectionRect) {
        ut();
        return;
      }
      if (E === T.Ocr && f.value.selectionRect) {
        bt();
        return;
      }
      o?.setTool(E);
    }, ut = async () => {
      try {
        await o?.createPinWindow();
      } catch (E) {
        j.error("[截图] 创建贴图失败", E);
      }
    }, bt = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (E) {
        j.error("[截图] 创建文字识别贴图失败", E);
      }
    }, ht = (E) => {
      o?.updateStyle({ color: E });
    }, et = (E) => {
      o?.updateStyle({ lineWidth: E });
    }, rt = (E) => {
      o?.updateStyle({ opacity: E });
    }, kt = (E) => {
      o?.updateTextSize(E);
    }, ft = (E) => {
      o?.updateMosaicSize(E);
    }, H = (E) => {
      p.value = E, o?.setTranslationEngine(E), o?.executeTranslation();
    }, vt = () => {
      o?.undoAnnotation();
    }, X = () => {
      o?.redoAnnotation();
    }, Et = () => {
      o?.deleteSelectedAnnotation();
    }, Ht = async () => {
      try {
        await o?.processScreenshot("save"), yt();
      } catch (E) {
        const u = E?.message || E?.toString() || "保存失败";
        if (u.includes("保存已取消") || u.includes("cancelled"))
          return;
        j.error("保存截图时发生错误", u);
      }
    }, Zt = async () => {
      try {
        await o?.processScreenshot("copy"), yt();
      } catch {
      }
    }, Mt = () => {
      yt();
    };
    let Tt = null;
    const jt = (E, u) => {
      if (u && u.getData().type === "text") {
        const m = u.getData();
        c.value = {
          x: m.points[0].x,
          y: m.points[0].y
        }, h.value = m.fontSize || f.value.textSize;
      } else
        c.value = E, h.value = f.value.textSize;
      r.value = !0, Tt = u || null, u && o?.setEditingAnnotation(u), u && u.getData().text ? l.value = u.getData().text : l.value = "", xn(() => {
        n.value?.focus(), Tt && n.value?.select();
      });
    }, ne = () => {
      l.value.trim() ? Tt ? o?.updateTextAnnotation(Tt, l.value) : o?.createTextAnnotation(c.value, l.value) : Tt && o?.deleteAnnotation(Tt), Gt();
    }, Gt = () => {
      r.value = !1, l.value = "", Tt && o?.clearEditingAnnotation(), Tt = null;
    }, z = (E) => {
      navigator.clipboard && navigator.clipboard.writeText(E.hex).catch((u) => {
        j.error("[截图] 复制颜色到剪贴板失败", u);
      });
    }, ct = (E) => {
      if (E.key === "Meta" || E.key === "Win" || E.altKey && E.key === "Tab" || E.altKey && E.key === "F4") {
        E.preventDefault(), E.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (E.key === "Escape") {
          Gt(), E.preventDefault();
          return;
        }
        if (E.key === "Enter") {
          ne(), E.preventDefault();
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
          yt();
          return;
        }
        E.preventDefault(), E.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(E)) {
        E.preventDefault();
        return;
      }
      const u = navigator.platform.toLowerCase().includes("mac");
      if ((u ? E.metaKey : E.ctrlKey) && E.key.toLowerCase() === "z") {
        E.shiftKey ? X() : vt(), E.preventDefault();
        return;
      }
      if (!u && E.ctrlKey && E.key.toLowerCase() === "y") {
        X(), E.preventDefault();
        return;
      }
      if (E.key === "Escape") {
        yt();
        return;
      } else if (E.key === "Delete" || E.key === "Backspace") {
        Et(), E.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(E.key) || E.preventDefault();
    }, yt = async () => {
      if (!C) {
        C = !0, o?.destroy(), o = null;
        try {
          await A("cleanup_screenshot_resources");
        } catch {
          try {
            await A("clear_screenshot_background");
          } catch (u) {
            j.error("[截图] 清理后台缓存失败", u);
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
        }, r.value = !1, l.value = "", Tt = null, g.value = !1, a.value = !0;
        try {
          await A("close_and_destroy_screenshot_window");
        } catch (E) {
          j.error("[截图] 销毁截图窗口失败，回退到 close()", E), await s.value?.close();
        } finally {
          C = !1;
        }
      }
    }, xt = () => {
      const E = o?.getState();
      E && (f.value = E);
    }, Lt = () => {
      const E = i.value?.getToolbarSize?.();
      E && (w.value = E);
    }, At = (E) => {
      const u = E.detail;
      u && (w.value = u);
    };
    return an(async () => {
      if (t.value) {
        s.value = new Rn("screenshot"), await s.value.emit("screenshot_ready"), o = new uc(
          t.value,
          xt,
          jt,
          z
        );
        try {
          const E = await A("get_translation_engine");
          E && ["google", "bing", "offline"].includes(E) && (p.value = E, o?.setTranslationEngine(E));
        } catch (E) {
          j.error("[截图] 获取翻译引擎设置失败", E);
        }
        try {
          const E = await A("get_offline_model_activated");
          o?.setOfflineModelActivated(E);
        } catch (E) {
          j.error("[截图] 获取离线模型激活状态失败", E);
        }
        document.addEventListener("keydown", ct), window.addEventListener("resize", Lt), window.addEventListener("screenshot-toolbar-resize", At), y.value = await wn("background-ready", () => {
          o?.triggerBackgroundReload();
        }), _.value = await wn("screenshot-close-requested", () => {
          yt();
        }), x.value = await wn("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const E = o?.getTranslationState();
          E?.isLoading || E?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const u = o?.getTranslationState();
              if (u?.isLoading || u?.isVisible)
                return;
              yt();
            }
          }, 100);
        }), xn(Lt);
      }
    }), Hi(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", ct), window.removeEventListener("resize", Lt), window.removeEventListener("screenshot-toolbar-resize", At), x.value?.(), y.value?.(), _.value?.(), x.value = void 0, y.value = void 0, _.value = void 0, s.value = null;
    }), (E, u) => (F(), G(
      "div",
      ld,
      [
        tt(" 遮罩层 "),
        f.value.selectionRect ? (F(), G("div", cd, [
          I(
            "div",
            {
              class: "mask-top",
              style: It(k.value)
            },
            null,
            4
            /* STYLE */
          ),
          I(
            "div",
            {
              class: "mask-bottom",
              style: It(P.value)
            },
            null,
            4
            /* STYLE */
          ),
          I(
            "div",
            {
              class: "mask-left",
              style: It(N.value)
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
        ])) : (F(), G("div", ud)),
        tt(" 画布 "),
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
        tt(" 尺寸信息 "),
        f.value.selectionRect && a.value ? (F(), G(
          "div",
          {
            key: 2,
            class: "size-info",
            style: It(q.value)
          },
          [
            I(
              "span",
              hd,
              at(nt.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : tt("v-if", !0),
        tt(" 工具栏 "),
        f.value.selectionRect && !v.value ? (F(), $t(rd, {
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
          "current-translate-engine": p.value,
          onToolSelect: st,
          onColorChange: ht,
          onLineWidthChange: et,
          onOpacityChange: rt,
          onTextSizeChange: kt,
          onMosaicSizeChange: ft,
          onTranslateEngineChange: H,
          onUndo: vt,
          onRedo: X,
          onDelete: Et,
          onSave: Ht,
          onConfirm: Zt,
          onCancel: Mt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : tt("v-if", !0),
        tt(" 加载提示 - 仅在初始化时显示 "),
        g.value ? (F(), G("div", dd, [
          u[1] || (u[1] = I(
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
        ])) : tt("v-if", !0),
        tt(" 文字输入框 "),
        r.value ? (F(), G(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: It(ot.value)
          },
          [
            bn(I(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": u[0] || (u[0] = (m) => l.value = m),
                type: "text",
                class: "text-input",
                style: It({
                  color: f.value.currentStyle.color,
                  fontFamily: D(Xe),
                  fontSize: h.value + "px",
                  height: h.value + "px",
                  lineHeight: h.value + "px"
                }),
                onKeydown: [
                  Ss(ne, ["enter"]),
                  Ss(Gt, ["escape"])
                ],
                onBlur: ne,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [fr, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : tt("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), gd = /* @__PURE__ */ ri(fd, [["__scopeId", "data-v-fd4bfc80"]]), md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gd
}, Symbol.toStringTag, { value: "Module" })), ba = Symbol(), Vn = "el", pd = "is-", Ae = (e, t, n, i, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, ka = Symbol("namespaceContextKey"), yd = (e) => {
  const t = e || (Qe() ? Te(ka, J(Vn)) : J(Vn));
  return Y(() => D(t) || Vn);
}, ss = (e, t) => {
  const n = yd(t);
  return {
    namespace: n,
    b: (f = "") => Ae(n.value, e, f, "", ""),
    e: (f) => f ? Ae(n.value, e, "", f, "") : "",
    m: (f) => f ? Ae(n.value, e, "", "", f) : "",
    be: (f, x) => f && x ? Ae(n.value, e, f, x, "") : "",
    em: (f, x) => f && x ? Ae(n.value, e, "", f, x) : "",
    bm: (f, x) => f && x ? Ae(n.value, e, f, "", x) : "",
    bem: (f, x, y) => f && x && y ? Ae(n.value, e, f, x, y) : "",
    is: (f, ...x) => {
      const y = x.length >= 1 ? x[0] : !0;
      return f && y ? `${pd}${f}` : "";
    },
    cssVar: (f) => {
      const x = {};
      for (const y in f)
        f[y] && (x[`--${n.value}-${y}`] = f[y]);
      return x;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const x = {};
      for (const y in f)
        f[y] && (x[`--${n.value}-${e}-${y}`] = f[y]);
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
const wd = Object.prototype.hasOwnProperty, go = (e, t) => wd.call(e, t), Mn = (e) => typeof e == "function", $e = (e) => typeof e == "string", _a = (e) => e !== null && typeof e == "object";
var vd = typeof global == "object" && global && global.Object === Object && global, xd = typeof self == "object" && self && self.Object === Object && self, os = vd || xd || Function("return this")(), nn = os.Symbol, Sa = Object.prototype, bd = Sa.hasOwnProperty, kd = Sa.toString, fn = nn ? nn.toStringTag : void 0;
function _d(e) {
  var t = bd.call(e, fn), n = e[fn];
  try {
    e[fn] = void 0;
    var i = !0;
  } catch {
  }
  var s = kd.call(e);
  return i && (t ? e[fn] = n : delete e[fn]), s;
}
var Sd = Object.prototype, Cd = Sd.toString;
function Td(e) {
  return Cd.call(e);
}
var Md = "[object Null]", Ld = "[object Undefined]", mo = nn ? nn.toStringTag : void 0;
function Ca(e) {
  return e == null ? e === void 0 ? Ld : Md : mo && mo in Object(e) ? _d(e) : Td(e);
}
function Rd(e) {
  return e != null && typeof e == "object";
}
var Pd = "[object Symbol]";
function as(e) {
  return typeof e == "symbol" || Rd(e) && Ca(e) == Pd;
}
function Ed(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var rs = Array.isArray, po = nn ? nn.prototype : void 0, yo = po ? po.toString : void 0;
function Ta(e) {
  if (typeof e == "string")
    return e;
  if (rs(e))
    return Ed(e, Ta) + "";
  if (as(e))
    return yo ? yo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ma(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ad = "[object AsyncFunction]", Id = "[object Function]", Od = "[object GeneratorFunction]", zd = "[object Proxy]";
function Dd(e) {
  if (!Ma(e))
    return !1;
  var t = Ca(e);
  return t == Id || t == Od || t == Ad || t == zd;
}
var ki = os["__core-js_shared__"], wo = function() {
  var e = /[^.]+$/.exec(ki && ki.keys && ki.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nd(e) {
  return !!wo && wo in e;
}
var Wd = Function.prototype, $d = Wd.toString;
function Bd(e) {
  if (e != null) {
    try {
      return $d.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fd = /[\\^$.*+?()[\]{}|]/g, Hd = /^\[object .+?Constructor\]$/, jd = Function.prototype, Ud = Object.prototype, Vd = jd.toString, Yd = Ud.hasOwnProperty, Gd = RegExp(
  "^" + Vd.call(Yd).replace(Fd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xd(e) {
  if (!Ma(e) || Nd(e))
    return !1;
  var t = Dd(e) ? Gd : Hd;
  return t.test(Bd(e));
}
function Kd(e, t) {
  return e?.[t];
}
function La(e, t) {
  var n = Kd(e, t);
  return Xd(n) ? n : void 0;
}
function Zd(e, t) {
  return e === t || e !== e && t !== t;
}
var qd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jd = /^\w*$/;
function Qd(e, t) {
  if (rs(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || as(e) ? !0 : Jd.test(e) || !qd.test(e) || t != null && e in Object(t);
}
var Ln = La(Object, "create");
function tf() {
  this.__data__ = Ln ? Ln(null) : {}, this.size = 0;
}
function ef(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nf = "__lodash_hash_undefined__", sf = Object.prototype, of = sf.hasOwnProperty;
function af(e) {
  var t = this.__data__;
  if (Ln) {
    var n = t[e];
    return n === nf ? void 0 : n;
  }
  return of.call(t, e) ? t[e] : void 0;
}
var rf = Object.prototype, lf = rf.hasOwnProperty;
function cf(e) {
  var t = this.__data__;
  return Ln ? t[e] !== void 0 : lf.call(t, e);
}
var uf = "__lodash_hash_undefined__";
function hf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ln && t === void 0 ? uf : t, this;
}
function Be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Be.prototype.clear = tf;
Be.prototype.delete = ef;
Be.prototype.get = af;
Be.prototype.has = cf;
Be.prototype.set = hf;
function df() {
  this.__data__ = [], this.size = 0;
}
function li(e, t) {
  for (var n = e.length; n--; )
    if (Zd(e[n][0], t))
      return n;
  return -1;
}
var ff = Array.prototype, gf = ff.splice;
function mf(e) {
  var t = this.__data__, n = li(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : gf.call(t, n, 1), --this.size, !0;
}
function pf(e) {
  var t = this.__data__, n = li(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function yf(e) {
  return li(this.__data__, e) > -1;
}
function wf(e, t) {
  var n = this.__data__, i = li(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
rn.prototype.clear = df;
rn.prototype.delete = mf;
rn.prototype.get = pf;
rn.prototype.has = yf;
rn.prototype.set = wf;
var vf = La(os, "Map");
function xf() {
  this.size = 0, this.__data__ = {
    hash: new Be(),
    map: new (vf || rn)(),
    string: new Be()
  };
}
function bf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ci(e, t) {
  var n = e.__data__;
  return bf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function kf(e) {
  var t = ci(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _f(e) {
  return ci(this, e).get(e);
}
function Sf(e) {
  return ci(this, e).has(e);
}
function Cf(e, t) {
  var n = ci(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ue.prototype.clear = xf;
Ue.prototype.delete = kf;
Ue.prototype.get = _f;
Ue.prototype.has = Sf;
Ue.prototype.set = Cf;
var Tf = "Expected a function";
function ls(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Tf);
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
var Mf = 500;
function Lf(e) {
  var t = ls(e, function(i) {
    return n.size === Mf && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Rf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pf = /\\(\\)?/g, Ef = Lf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Rf, function(n, i, s, o) {
    t.push(s ? o.replace(Pf, "$1") : i || n);
  }), t;
});
function Af(e) {
  return e == null ? "" : Ta(e);
}
function If(e, t) {
  return rs(e) ? e : Qd(e, t) ? [e] : Ef(Af(e));
}
function Of(e) {
  if (typeof e == "string" || as(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function zf(e, t) {
  t = If(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Of(t[n++])];
  return n && n == i ? e : void 0;
}
function Df(e, t, n) {
  var i = e == null ? void 0 : zf(e, t);
  return i === void 0 ? n : i;
}
function Nf(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var s = e[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Ra = (e) => e === void 0, vo = (e) => typeof e == "boolean", Fe = (e) => typeof e == "number", $i = (e) => typeof Element > "u" ? !1 : e instanceof Element, Wf = (e) => $e(e) ? !Number.isNaN(Number(e)) : !1;
var xo;
const Ve = typeof window < "u", $f = (e) => typeof e == "string", Bf = () => {
};
Ve && ((xo = window?.navigator) != null && xo.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cs(e) {
  return typeof e == "function" ? e() : D(e);
}
function Ff(e) {
  return e;
}
function us(e) {
  return mr() ? (pr(e), !0) : !1;
}
function Hf(e, t = !0) {
  Qe() ? an(e) : t ? e() : xn(e);
}
function Pa(e, t, n = {}) {
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
    }, cs(t));
  }
  return i && (s.value = !0, Ve && l()), us(r), {
    isPending: gr(s),
    start: l,
    stop: r
  };
}
function Ea(e) {
  var t;
  const n = cs(e);
  return (t = n?.$el) != null ? t : n;
}
const Aa = Ve ? window : void 0;
function Ia(...e) {
  let t, n, i, s;
  if ($f(e[0]) || Array.isArray(e[0]) ? ([n, i, s] = e, t = Aa) : [t, n, i, s] = e, !t)
    return Bf;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((h) => h()), o.length = 0;
  }, r = (h, g, p, w) => (h.addEventListener(g, p, w), () => h.removeEventListener(g, p, w)), l = Ne(() => [Ea(t), cs(s)], ([h, g]) => {
    a(), h && o.push(...n.flatMap((p) => i.map((w) => r(h, p, w, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return us(c), c;
}
function jf(e, t = !1) {
  const n = J(), i = () => n.value = !!e();
  return i(), Hf(i, t), n;
}
const bo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ko = "__vueuse_ssr_handlers__";
bo[ko] = bo[ko] || {};
var _o = Object.getOwnPropertySymbols, Uf = Object.prototype.hasOwnProperty, Vf = Object.prototype.propertyIsEnumerable, Yf = (e, t) => {
  var n = {};
  for (var i in e)
    Uf.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && _o)
    for (var i of _o(e))
      t.indexOf(i) < 0 && Vf.call(e, i) && (n[i] = e[i]);
  return n;
};
function Gf(e, t, n = {}) {
  const i = n, { window: s = Aa } = i, o = Yf(i, ["window"]);
  let a;
  const r = jf(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Ne(() => Ea(e), (g) => {
    l(), r.value && s && g && (a = new ResizeObserver(t), a.observe(g, o));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), c();
  };
  return us(h), {
    isSupported: r,
    stop: h
  };
}
var So;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(So || (So = {}));
var Xf = Object.defineProperty, Co = Object.getOwnPropertySymbols, Kf = Object.prototype.hasOwnProperty, Zf = Object.prototype.propertyIsEnumerable, To = (e, t, n) => t in e ? Xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qf = (e, t) => {
  for (var n in t || (t = {}))
    Kf.call(t, n) && To(e, n, t[n]);
  if (Co)
    for (var n of Co(t))
      Zf.call(t, n) && To(e, n, t[n]);
  return e;
};
const Jf = {
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
qf({
  linear: Ff
}, Jf);
const Mo = {
  current: 0
}, Lo = J(0), Oa = 2e3, Ro = Symbol("elZIndexContextKey"), za = Symbol("zIndexContextKey"), Qf = (e) => {
  const t = Qe() ? Te(Ro, Mo) : Mo, n = e || (Qe() ? Te(za, void 0) : void 0), i = Y(() => {
    const a = D(n);
    return Fe(a) ? a : Oa;
  }), s = Y(() => i.value + Lo.value), o = () => (t.current++, Lo.value = t.current, s.value);
  return !Ve && Te(Ro), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var tg = {
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
const eg = (e) => (t, n) => ng(t, n, D(e)), ng = (e, t, n) => Df(n, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), ig = (e) => {
  const t = Y(() => D(e).name), n = yr(e) ? e : J(e);
  return {
    lang: t,
    locale: n,
    t: eg(e)
  };
}, Da = Symbol("localeContextKey"), sg = (e) => {
  const t = e || Te(Da, J());
  return ig(Y(() => t.value || tg));
}, Na = "__epPropKey", Qt = (e) => e, og = (e) => _a(e) && !!e[Na], Wa = (e, t) => {
  if (!_a(e) || og(e))
    return e;
  const { values: n, required: i, default: s, type: o, validator: a } = e, l = {
    type: o,
    required: !!i,
    validator: n || a ? (c) => {
      let h = !1, g = [];
      if (n && (g = Array.from(n), go(e, "default") && g.push(s), h || (h = g.includes(c))), a && (h || (h = a(c))), !h && g.length > 0) {
        const p = [...new Set(g)].map((w) => JSON.stringify(w)).join(", ");
        wr(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`);
      }
      return h;
    } : void 0,
    [Na]: !0
  };
  return go(e, "default") && (l.default = s), l;
}, ln = (e) => Nf(Object.entries(e).map(([t, n]) => [
  t,
  Wa(n, t)
])), ag = ["", "default", "small", "large"], rg = Wa({
  type: String,
  values: ag,
  required: !1
}), lg = Symbol("size"), cg = Symbol("emptyValuesContextKey"), ug = ln({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Mn(e) ? !e() : !e
  }
}), Po = (e) => Object.keys(e), Jn = J();
function $a(e, t = void 0) {
  return Qe() ? Te(ba, Jn) : Jn;
}
function Ba(e, t) {
  const n = $a(), i = ss(e, Y(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || Vn;
  })), s = sg(Y(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), o = Qf(Y(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || Oa;
  })), a = Y(() => {
    var r;
    return D(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return Fa(Y(() => D(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const Fa = (e, t, n = !1) => {
  var i;
  const s = !!Qe(), o = s ? $a() : void 0, a = (i = void 0) != null ? i : s ? vr : void 0;
  if (!a)
    return;
  const r = Y(() => {
    const l = D(e);
    return o?.value ? hg(o.value, l) : l;
  });
  return a(ba, r), a(Da, Y(() => r.value.locale)), a(ka, Y(() => r.value.namespace)), a(za, Y(() => r.value.zIndex)), a(lg, {
    size: Y(() => r.value.size || "")
  }), a(cg, Y(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !Jn.value) && (Jn.value = r.value), r;
}, hg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Po(e), ...Po(t)])], i = {};
  for (const s of n)
    i[s] = t[s] !== void 0 ? t[s] : e[s];
  return i;
};
var ui = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
function Bi(e, t = "px") {
  if (!e)
    return "";
  if (Fe(e) || Wf(e))
    return `${e}${t}`;
  if ($e(e))
    return e;
}
const Ha = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), ja = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), dg = ln({
  size: {
    type: Qt([Number, String])
  },
  color: {
    type: String
  }
}), fg = Dt({
  name: "ElIcon",
  inheritAttrs: !1
}), gg = /* @__PURE__ */ Dt({
  ...fg,
  props: dg,
  setup(e) {
    const t = e, n = ss("icon"), i = Y(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Ra(s) ? void 0 : Bi(s),
        "--color": o
      };
    });
    return (s, o) => (F(), G("i", xr({
      class: D(n).b(),
      style: D(i)
    }, s.$attrs), [
      We(s.$slots, "default")
    ], 16));
  }
});
var mg = /* @__PURE__ */ ui(gg, [["__file", "icon.vue"]]);
const Qn = Ha(mg);
/*! Element Plus Icons Vue v2.3.1 */
var pg = /* @__PURE__ */ Dt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), yg = pg, wg = /* @__PURE__ */ Dt({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ua = wg, vg = /* @__PURE__ */ Dt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), xg = vg, bg = /* @__PURE__ */ Dt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), kg = bg, _g = /* @__PURE__ */ Dt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (F(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Sg = _g;
const Va = Qt([
  String,
  Object,
  Function
]), Cg = {
  Close: Ua
}, Tg = {
  Close: Ua
}, ti = {
  success: kg,
  warning: Sg,
  error: yg,
  info: xg
}, Mg = (e) => e, Yn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Lg = ln({
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
}), Rg = Dt({
  name: "ElBadge"
}), Pg = /* @__PURE__ */ Dt({
  ...Rg,
  props: Lg,
  setup(e, { expose: t }) {
    const n = e, i = ss("badge"), s = Y(() => n.isDot ? "" : Fe(n.value) && Fe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = Y(() => {
      var a, r, l, c, h;
      return [
        {
          backgroundColor: n.color,
          marginRight: Bi(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Bi((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (h = n.badgeStyle) != null ? h : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (F(), G("div", {
      class: _t(D(i).b())
    }, [
      We(a.$slots, "default"),
      b(ji, {
        name: `${D(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Yt(() => [
          bn(I("sup", {
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
              br(at(D(s)), 1)
            ])
          ], 6), [
            [Gn, !a.hidden && (D(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Eg = /* @__PURE__ */ ui(Pg, [["__file", "badge.vue"]]);
const Ag = Ha(Eg), Ig = ln({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Qt(Object)
  },
  size: rg,
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
  ...ug
}), re = {};
Dt({
  name: "ElConfigProvider",
  props: Ig,
  setup(e, { slots: t }) {
    Ne(() => e.message, (i) => {
      Object.assign(re, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Fa(e);
    return () => We(t, "default", { config: n?.value });
  }
});
const Ya = ["success", "info", "warning", "error"], Ut = Mg({
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
}), Og = ln({
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
    type: Va,
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
    values: Ya,
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
}), zg = {
  destroy: () => !0
}, ce = kr([]), Dg = (e) => {
  const t = ce.findIndex((s) => s.id === e), n = ce[t];
  let i;
  return t > 0 && (i = ce[t - 1]), { current: n, prev: i };
}, Ng = (e) => {
  const { prev: t } = Dg(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Wg = (e, t) => ce.findIndex((i) => i.id === e) > 0 ? 16 : t, $g = Dt({
  name: "ElMessage"
}), Bg = /* @__PURE__ */ Dt({
  ...$g,
  props: Og,
  emits: zg,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = Tg, { ns: s, zIndex: o } = Ba("message"), { currentZIndex: a, nextZIndex: r } = o, l = J(), c = J(!1), h = J(0);
    let g;
    const p = Y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), w = Y(() => {
      const M = n.type;
      return { [s.bm("icon", M)]: M && ti[M] };
    }), C = Y(() => n.icon || ti[n.type] || ""), f = Y(() => Ng(n.id)), x = Y(() => Wg(n.id, n.offset) + f.value), y = Y(() => h.value + x.value), _ = Y(() => ({
      top: `${x.value}px`,
      zIndex: a.value
    }));
    function v() {
      n.duration !== 0 && ({ stop: g } = Pa(() => {
        P();
      }, n.duration));
    }
    function k() {
      g?.();
    }
    function P() {
      c.value = !1;
    }
    function N({ code: M }) {
      M === Yn.esc && P();
    }
    return an(() => {
      v(), r(), c.value = !0;
    }), Ne(() => n.repeatNum, () => {
      k(), v();
    }), Ia(document, "keydown", N), Gf(l, () => {
      h.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: y,
      close: P
    }), (M, V) => (F(), $t(ji, {
      name: D(s).b("fade"),
      onBeforeLeave: M.onClose,
      onAfterLeave: (q) => M.$emit("destroy"),
      persisted: ""
    }, {
      default: Yt(() => [
        bn(I("div", {
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
          onMouseenter: k,
          onMouseleave: v
        }, [
          M.repeatNum > 1 ? (F(), $t(D(Ag), {
            key: 0,
            value: M.repeatNum,
            type: D(p),
            class: _t(D(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : tt("v-if", !0),
          D(C) ? (F(), $t(D(Qn), {
            key: 1,
            class: _t([D(s).e("icon"), D(w)])
          }, {
            default: Yt(() => [
              (F(), $t(Ce(D(C))))
            ]),
            _: 1
          }, 8, ["class"])) : tt("v-if", !0),
          We(M.$slots, "default", {}, () => [
            M.dangerouslyUseHTMLString ? (F(), G(Xt, { key: 1 }, [
              tt(" Caution here, message could've been compromised, never use user's input as message "),
              I("p", {
                class: _t(D(s).e("content")),
                innerHTML: M.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (F(), G("p", {
              key: 0,
              class: _t(D(s).e("content"))
            }, at(M.message), 3))
          ]),
          M.showClose ? (F(), $t(D(Qn), {
            key: 2,
            class: _t(D(s).e("closeBtn")),
            onClick: Rt(P, ["stop"])
          }, {
            default: Yt(() => [
              b(D(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : tt("v-if", !0)
        ], 46, ["id"]), [
          [Gn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Fg = /* @__PURE__ */ ui(Bg, [["__file", "message.vue"]]);
let Hg = 1;
const Ga = (e) => {
  const t = !e || $e(e) || kn(e) || Mn(e) ? { message: e } : e, n = {
    ...Ut,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if ($e(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    $i(i) || (i = document.body), n.appendTo = i;
  }
  return vo(re.grouping) && !n.grouping && (n.grouping = re.grouping), Fe(re.duration) && n.duration === 3e3 && (n.duration = re.duration), Fe(re.offset) && n.offset === 16 && (n.offset = re.offset), vo(re.showClose) && !n.showClose && (n.showClose = re.showClose), n;
}, jg = (e) => {
  const t = ce.indexOf(e);
  if (t === -1)
    return;
  ce.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ug = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Hg++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), jg(h);
    },
    onDestroy: () => {
      Xn(null, o);
    }
  }, r = b(Fg, a, Mn(a.message) || kn(a.message) ? {
    default: Mn(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || sn._context, Xn(r, o), e.appendChild(o.firstElementChild);
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
  if (!Ve)
    return { close: () => {
    } };
  const n = Ga(e);
  if (n.grouping && ce.length) {
    const s = ce.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (Fe(re.max) && ce.length >= re.max)
    return { close: () => {
    } };
  const i = Ug(n, t);
  return ce.push(i), i.handler;
};
Ya.forEach((e) => {
  sn[e] = (t = {}, n) => {
    const i = Ga(t);
    return sn({ ...i, type: e }, n);
  };
});
function Vg(e) {
  for (const t of ce)
    (!e || e === t.props.type) && t.handler.close();
}
sn.closeAll = Vg;
sn._context = null;
const Yg = ja(sn, "$message"), Xa = [
  "success",
  "info",
  "warning",
  "error"
], Gg = ln({
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
    type: Va
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
    values: [...Xa, ""],
    default: ""
  },
  zIndex: Number
}), Xg = {
  destroy: () => !0
}, Kg = Dt({
  name: "ElNotification"
}), Zg = /* @__PURE__ */ Dt({
  ...Kg,
  props: Gg,
  emits: Xg,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: s } = Ba("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = Cg, l = J(!1);
    let c;
    const h = Y(() => {
      const v = n.type;
      return v && ti[n.type] ? i.m(v) : "";
    }), g = Y(() => n.type && ti[n.type] || n.icon), p = Y(() => n.position.endsWith("right") ? "right" : "left"), w = Y(() => n.position.startsWith("top") ? "top" : "bottom"), C = Y(() => {
      var v;
      return {
        [w.value]: `${n.offset}px`,
        zIndex: (v = n.zIndex) != null ? v : a.value
      };
    });
    function f() {
      n.duration > 0 && ({ stop: c } = Pa(() => {
        l.value && y();
      }, n.duration));
    }
    function x() {
      c?.();
    }
    function y() {
      l.value = !1;
    }
    function _({ code: v }) {
      v === Yn.delete || v === Yn.backspace ? x() : v === Yn.esc ? l.value && y() : f();
    }
    return an(() => {
      f(), o(), l.value = !0;
    }), Ia(document, "keydown", _), t({
      visible: l,
      close: y
    }), (v, k) => (F(), $t(ji, {
      name: D(i).b("fade"),
      onBeforeLeave: v.onClose,
      onAfterLeave: (P) => v.$emit("destroy"),
      persisted: ""
    }, {
      default: Yt(() => [
        bn(I("div", {
          id: v.id,
          class: _t([D(i).b(), v.customClass, D(p)]),
          style: It(D(C)),
          role: "alert",
          onMouseenter: x,
          onMouseleave: f,
          onClick: v.onClick
        }, [
          D(g) ? (F(), $t(D(Qn), {
            key: 0,
            class: _t([D(i).e("icon"), D(h)])
          }, {
            default: Yt(() => [
              (F(), $t(Ce(D(g))))
            ]),
            _: 1
          }, 8, ["class"])) : tt("v-if", !0),
          I("div", {
            class: _t(D(i).e("group"))
          }, [
            I("h2", {
              class: _t(D(i).e("title")),
              textContent: at(v.title)
            }, null, 10, ["textContent"]),
            bn(I("div", {
              class: _t(D(i).e("content")),
              style: It(v.title ? void 0 : { margin: 0 })
            }, [
              We(v.$slots, "default", {}, () => [
                v.dangerouslyUseHTMLString ? (F(), G(Xt, { key: 1 }, [
                  tt(" Caution here, message could've been compromised, never use user's input as message "),
                  I("p", { innerHTML: v.message }, null, 8, ["innerHTML"])
                ], 2112)) : (F(), G("p", { key: 0 }, at(v.message), 1))
              ])
            ], 6), [
              [Gn, v.message]
            ]),
            v.showClose ? (F(), $t(D(Qn), {
              key: 0,
              class: _t(D(i).e("closeBtn")),
              onClick: Rt(y, ["stop"])
            }, {
              default: Yt(() => [
                b(D(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : tt("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Gn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var qg = /* @__PURE__ */ ui(Zg, [["__file", "notification.vue"]]);
const ei = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Fi = 16;
let Jg = 1;
const on = function(e = {}, t) {
  if (!Ve)
    return { close: () => {
    } };
  ($e(e) || kn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  ei[n].forEach(({ vm: h }) => {
    var g;
    i += (((g = h.el) == null ? void 0 : g.offsetHeight) || 0) + Fi;
  }), i += Fi;
  const s = `notification_${Jg++}`, o = e.onClose, a = {
    ...e,
    offset: i,
    id: s,
    onClose: () => {
      Qg(s, n, o);
    }
  };
  let r = document.body;
  $i(e.appendTo) ? r = e.appendTo : $e(e.appendTo) && (r = document.querySelector(e.appendTo)), $i(r) || (r = document.body);
  const l = document.createElement("div"), c = b(qg, a, Mn(a.message) ? a.message : kn(a.message) ? () => a.message : null);
  return c.appContext = Ra(t) ? on._context : t, c.props.onDestroy = () => {
    Xn(null, l);
  }, Xn(c, l), ei[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Xa.forEach((e) => {
  on[e] = (t = {}, n) => (($e(t) || kn(t)) && (t = {
    message: t
  }), on({ ...t, type: e }, n));
});
function Qg(e, t, n) {
  const i = ei[t], s = i.findIndex(({ vm: c }) => {
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
      const { el: h, component: g } = i[c].vm, p = Number.parseInt(h.style[r], 10) - a - Fi;
      g.props.offset = p;
    }
}
function tm() {
  for (const e of Object.values(ei))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
on.closeAll = tm;
on._context = null;
const em = ja(on, "$notify"), qt = {
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
    i === "center" ? Yg({
      message: t,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : em({
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
}, nm = ["disabled"], im = {
  key: 0,
  class: "custom-button__loading"
}, sm = /* @__PURE__ */ Dt({
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
      e.loading ? (F(), G("div", im, i[1] || (i[1] = [
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
      ]))) : tt("v-if", !0),
      We(n.$slots, "default", {}, void 0, !0)
    ], 10, nm));
  }
}), ye = /* @__PURE__ */ ri(sm, [["__scopeId", "data-v-9497085f"]]), om = ["src"], am = { class: "ocr-header" }, rm = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, lm = { "data-tauri-drag-region": "" }, cm = { class: "ocr-window-controls" }, um = ["title"], hm = ["title"], dm = ["title"], fm = ["title"], gm = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, mm = ["src"], pm = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, ym = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, wm = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, vm = { "data-tauri-drag-region": "" }, xm = { "data-tauri-drag-region": "" }, bm = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, km = ["title"], _m = {
  key: 0,
  class: "ocr-original-image"
}, Sm = ["src"], Cm = {
  key: 0,
  class: "ocr-state"
}, Tm = {
  key: 1,
  class: "ocr-state error"
}, Mm = {
  key: 2,
  class: "ocr-state muted"
}, Lm = { class: "ocr-preview-pane" }, Rm = { class: "ocr-preview-stage" }, Pm = ["src"], Em = {
  key: 0,
  class: "ocr-text-overlay"
}, Am = {
  key: 0,
  class: "ocr-record-pane"
}, Im = { class: "ocr-record-main-row" }, Om = ["onClick"], zm = ["checked", "onChange"], Dm = { class: "ocr-record-index" }, Nm = ["textContent", "onBlur"], Wm = {
  key: 0,
  class: "ocr-record-score"
}, $m = ["textContent", "onBlur"], Bm = { class: "ocr-action-bar" }, Fm = { class: "translate-btn-group relative" }, Hm = {
  key: 0,
  class: "translate-menu"
}, jm = ["onClick"], Um = { class: "engine-label" }, Vm = { class: "ocr-engine-btn-group relative" }, Ym = {
  key: 0,
  class: "ocr-engine-menu"
}, Gm = ["onClick"], Xm = { class: "engine-label" }, Km = { class: "ocr-engine-btn-group relative" }, Zm = {
  key: 2,
  class: "zoom-info"
}, qm = /* @__PURE__ */ Dt({
  __name: "index",
  setup(e) {
    const { t } = Pn(), n = J(), i = J(null), s = J(""), o = J(""), a = J("pin"), r = J(""), l = J([]), c = J(!1), h = J(""), g = J(""), p = J(0), w = J(0), C = J({ width: 0, height: 0 }), f = J(!1), x = J(!1), y = J(!1), _ = J(!1), v = J("bing"), k = J(!1), P = J("auto"), N = Y(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: "离"
      }
    ]), M = Y(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), V = (d) => {
      const L = typeof d == "string" ? d.trim().toLowerCase() : "";
      return L === "auto" || L === "zh" || L === "zh-tw" || L === "en" || L === "ja" || L === "ko" ? L : "auto";
    }, q = Y(() => M.value.find((d) => d.value === P.value)?.label || t("pin.ocrLanguageAuto")), nt = Y(() => P.value === "auto" ? "zh" : P.value), ot = J(1), st = J(!1), ut = J(!1);
    let bt = null;
    const ht = J(!1), et = J({ x: 0, y: 0 }), rt = J(!0), kt = J({ width: 0, height: 0 });
    let ft = null, H = 0;
    const vt = J(""), X = Y(() => ({
      width: "100%",
      height: a.value === "ocr" ? "auto" : "100%",
      flex: a.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: a.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), Et = Y(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), Ht = Y(() => p.value > 0 && w.value > 0 ? `${p.value} × ${w.value}` : t("pin.screenshotPreview")), Zt = Y(() => c.value ? t("pin.recognizing") : h.value ? t("pin.recognizeFailed") : r.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Mt = Y(
      () => l.value.filter((d) => d.selected)
    ), Tt = Y(
      () => l.value.filter((d) => ct(d))
    ), jt = Y(() => Mt.value.length), ne = (d) => (d.translatedText || d.text).trim(), Gt = (d) => d.map(ne).filter(Boolean).join(`

`), z = () => {
      r.value = Gt(l.value);
    }, ct = (d) => p.value > 0 && w.value > 0 && d.bbox.width > 0 && d.bbox.height > 0, yt = (d) => {
      if (!ct(d))
        return {};
      const L = xt(d.bbox.x / p.value * 100), O = xt(d.bbox.y / w.value * 100), Z = xt(d.bbox.width / p.value * 100, 6), lt = xt(d.bbox.height / w.value * 100, 4);
      return {
        left: `${L}%`,
        top: `${O}%`,
        width: `${Z}%`,
        height: `${lt}%`
      };
    }, xt = (d, L = 0) => Number.isFinite(d) ? Math.min(100, Math.max(L, d)) : L, Lt = () => {
      const d = /* @__PURE__ */ new Date(), L = (O) => O.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${d.getFullYear()}-${L(d.getMonth() + 1)}-${L(d.getDate())} ${L(d.getHours())}.${L(d.getMinutes())}.${L(d.getSeconds())}.png`;
    }, At = Y(() => {
      const d = Math.min(
        kt.value.width,
        kt.value.height
      );
      let L = 1;
      return d < 300 && (L = Math.max(0.4, d / 300)), {
        left: `${et.value.x}px`,
        top: `${et.value.y}px`,
        transform: `scale(${L})`,
        transformOrigin: "top left"
      };
    }), E = (d) => {
      s.value = d, p.value = 0, w.value = 0, C.value = { width: 0, height: 0 }, a.value === "ocr" && (g.value = Lt(), x.value = !1), o.value && (URL.revokeObjectURL(o.value), o.value = "");
      try {
        const L = d.split(",")[1] || d, O = d.match(/data:([^;]+);/), Z = O ? O[1] : "image/png", lt = atob(L), se = new Uint8Array(lt.length);
        for (let ae = 0; ae < lt.length; ae++)
          se[ae] = lt.charCodeAt(ae);
        const oe = new Blob([se], { type: Z });
        o.value = URL.createObjectURL(oe);
      } catch (L) {
        j.error("[PIN窗口] 转换 Blob URL 失败", L), o.value = d;
      }
    }, u = async () => {
      await xn(), await new Promise((d) => requestAnimationFrame(() => d()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (d) {
        j.error("[PIN窗口] 发送 ready 事件失败", d);
      }
    }, m = (d) => {
      if (!d?.imageData)
        return j.error("[PIN窗口] 收到的事件数据格式不正确", d), !1;
      const L = d.mode === "ocr" ? "ocr" : "pin", O = `${L}:${d.imageData.length}`;
      return O === vt.value ? !1 : (vt.value = O, a.value = L, E(d.imageData), ie(), a.value === "ocr" ? (W(d.text || ""), h.value = "", d.text || R()) : (H++, c.value = !1, h.value = "", r.value = "", l.value = []), !0);
    }, R = async () => {
      if (!s.value) return;
      const d = ++H;
      c.value = !0, h.value = "";
      const L = Date.now();
      Wt.log("[Pin OCR] recognize start", {
        requestId: d,
        imageDataLength: s.value.length,
        imageWidth: p.value,
        imageHeight: w.value,
        language: P.value,
        backendLanguage: nt.value
      });
      try {
        Wt.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: d,
          language: P.value,
          backendLanguage: nt.value
        });
        const O = await A("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: nt.value
        }), Z = Q(O), lt = Z.length > 0 ? Gt(Z) : dt(O);
        if (Wt.log("[Pin OCR] backend OCR success", {
          requestId: d,
          resultEngine: O?.engine,
          resultLanguage: O?.language,
          confidence: O?.confidence,
          blocks: Array.isArray(O?.blocks) ? O.blocks.length : 0,
          textLength: lt.trim().length
        }), d !== H) return;
        Z.length > 0 ? (l.value = Z, z()) : W(lt.trim()), Wt.log("[Pin OCR] recognize success", {
          requestId: d,
          durationMs: Date.now() - L,
          textLength: r.value.length,
          textPreview: r.value.slice(0, 300)
        });
      } catch (O) {
        if (d !== H) return;
        j.error("[PIN窗口] OCR 识别失败", O), Wt.log("[Pin OCR] recognize failed", {
          requestId: d,
          durationMs: Date.now() - L,
          error: te(O)
        }), h.value = t("pin.recognizeFailed"), r.value = "", l.value = [], qt.error(t("pin.recognizeFailed"));
      } finally {
        d === H && (c.value = !1);
      }
    }, W = (d) => {
      const L = d.trim();
      r.value = L, l.value = L ? L.split(/\n{2,}|\n/).map((O, Z) => it(O, Z)).filter((O) => O.text.trim()) : [];
    }, it = (d, L) => ({
      id: `plain-${Date.now()}-${L}`,
      text: d.trim(),
      sourceText: d.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), Q = (d) => {
      const L = $(d?.blocks);
      return L.length === 0 ? [] : Ho(L).map((Z, lt) => S(Z, lt)).filter((Z) => Z.text.trim());
    }, S = (d, L) => {
      const O = d.text.trim(), Z = d.blocks;
      return {
        id: `ocr-${Date.now()}-${L}`,
        text: O,
        sourceText: O,
        translatedText: d.translatedText?.trim() || "",
        bbox: { ...d.bbox },
        blocks: Z,
        confidence: gt(Z),
        selected: !1
      };
    }, $ = (d) => Array.isArray(d) ? d.map((L) => {
      if (!L || typeof L != "object")
        return null;
      const O = L, Z = typeof O.text == "string" ? O.text.trim() : "";
      if (!Z)
        return null;
      const lt = {
        text: Z,
        x: Number(O.x || 0),
        y: Number(O.y || 0),
        width: Number(O.width || 0),
        height: Number(O.height || 0),
        fontSize: Number(O.fontSize || 0),
        lineHeight: Number(O.lineHeight || 0),
        angle: Number(O.angle || 0),
        isCodeBlock: !!O.isCodeBlock,
        confidence: Number(O.confidence || 0)
      };
      return typeof O.translatedText == "string" && (lt.translatedText = O.translatedText), lt;
    }).filter((L) => L !== null) : [], gt = (d) => {
      const L = d.map((O) => Number(O.confidence || 0)).filter((O) => Number.isFinite(O) && O > 0);
      return L.length === 0 ? 0 : L.reduce((O, Z) => O + Z, 0) / L.length;
    }, dt = (d) => typeof d == "string" ? d : d?.text ? d.text : d?.full_text ? d.full_text : Array.isArray(d?.blocks) ? d.blocks.map((L) => L?.text).filter(Boolean).join(`
`) : "", te = (d) => d instanceof Error ? `${d.name}: ${d.message}
${d.stack || ""}`.trim() : typeof d == "string" ? d : JSON.stringify(d) || String(d), Pe = async () => {
      const d = hi();
      if (d)
        try {
          await navigator.clipboard.writeText(d), qt.success(t("pin.copySuccess"));
        } catch (L) {
          j.error("[PIN窗口] 复制识别文本失败", L), qt.error(t("pin.copyFailed"));
        } finally {
          ie();
        }
    }, ke = async () => {
      z();
      const d = r.value.trim();
      if (d)
        try {
          await A("save_text_to_file", { text: d }), qt.success(t("pin.saveSuccess"));
        } catch (L) {
          L !== "SAVE_CANCELLED" && (j.error("[PIN窗口] 保存文本失败", L), qt.error(t("pin.saveFailed")));
        }
    }, hi = () => {
      const d = hs();
      if (d)
        return d;
      const L = Gt(Mt.value);
      return L || (z(), r.value.trim());
    }, hs = () => {
      const d = window.getSelection(), L = n.value?.querySelector(".ocr-reading-surface");
      if (!d || d.rangeCount === 0 || !L)
        return "";
      for (let O = 0; O < d.rangeCount; O += 1) {
        const lt = d.getRangeAt(O).commonAncestorContainer;
        if (L.contains(lt))
          return d.toString().trim();
      }
      return "";
    }, ds = (d) => {
      const L = l.value.find((O) => O.id === d);
      L && (L.selected = !L.selected);
    }, fs = (d, L, O) => {
      const Z = l.value.find((se) => se.id === d), lt = O.target;
      !Z || !lt || (Z[L] = lt.innerText.trim(), L === "text" && !Z.sourceText.trim() && (Z.sourceText = Z.text), z());
    }, Ka = () => {
      _.value = !_.value, k.value = !1;
    }, Za = (d) => {
      v.value = d, _.value = !1, A("set_translation_engine", { engine: d }).catch((L) => {
        j.error("[PIN窗口] 保存翻译引擎设置失败", L);
      });
    }, gs = () => {
      k.value = !k.value, _.value = !1;
    }, qa = (d) => {
      P.value = d, k.value = !1, A("set_ocr_language", { language: d }).catch((L) => {
        j.error("[PIN窗口] 保存 OCR 语言设置失败", L);
      }), s.value && R();
    }, Ja = async () => {
      if (ie(), _.value = !1, k.value = !1, !r.value.trim() || y.value) return;
      const d = Mt.value.length > 0 ? Mt.value : l.value, L = d.length > 0 ? d.map((Z) => Z.text).join(`

`) : r.value, O = Ie(L);
      if (!qe(O)) {
        qt.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      y.value = !0;
      try {
        if (await Qa(), d.length > 0) {
          for (const Z of d) {
            const lt = await ms(Z.text, O);
            lt && (Z.translatedText = lt.trim());
          }
          z(), qt.success(t("pin.translateSuccess"));
        } else {
          const Z = await ms(r.value, O);
          Z && W(Z), qt.success(t("pin.translateSuccess"));
        }
      } catch (Z) {
        j.error("[PIN窗口] 翻译失败", Z);
        const lt = Z instanceof Error ? Z.message : String(Z);
        lt !== "翻译已取消" && qt.error(lt || t("pin.translateFailed"));
      } finally {
        y.value = !1;
      }
    }, Qa = async () => {
      if (v.value !== "offline")
        return;
      if ((await Gi()).isCached)
        await Bo();
      else
        throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
      if (!await A("get_offline_model_activated"))
        throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
    }, ms = async (d, L) => {
      const O = d.trim();
      return O ? v.value === "offline" ? $o(O) : await A("translate_text", {
        text: O,
        from: "auto",
        to: L === "zh" ? "en" : "zh",
        engine: v.value
      }) : "";
    }, tr = () => {
      f.value = !f.value;
    }, er = () => {
      x.value = !x.value;
    }, nr = (d) => {
      En(d);
    }, ir = async () => {
      if (!i.value) return;
      const d = i.value;
      typeof d.minimize == "function" && await d.minimize();
    }, sr = async () => {
      if (!i.value) return;
      const d = i.value;
      (typeof d.isMaximized == "function" ? await d.isMaximized() : !1) && typeof d.unmaximize == "function" ? await d.unmaximize() : typeof d.maximize == "function" && await d.maximize();
    }, ps = async (d) => {
      const L = d.target;
      if (p.value = L.naturalWidth, w.value = L.naturalHeight, i.value && C.value.width === 0)
        try {
          const O = await i.value.innerSize(), Z = await i.value.scaleFactor(), lt = O.toLogical(Z);
          C.value = {
            width: lt.width,
            height: lt.height
          };
        } catch (O) {
          j.error("[PIN窗口] 获取窗口初始尺寸失败", O);
        }
    }, ys = async (d) => {
      if (d.ctrlKey && (d.preventDefault(), d.stopPropagation(), !ut.value && i.value)) {
        ut.value = !0;
        try {
          const O = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Z = d.deltaY > 0 ? 0.95 : 1.05, lt = O.width, se = O.height, oe = Math.round(lt * Z), ae = Math.round(se * Z), cn = 50, _e = 3e3;
          if (oe >= cn && oe <= _e && ae >= cn && ae <= _e) {
            if (await i.value.setSize(new pn(oe, ae)), p.value > 0) {
              const Ee = Math.round(
                oe / p.value * 100
              );
              ot.value = Ee / 100;
            }
            st.value = !0, di();
          }
        } catch (L) {
          j.error("[PIN窗口] 窗口缩放失败", L);
        } finally {
          setTimeout(() => {
            ut.value = !1;
          }, 100);
        }
      }
    }, or = (d) => {
      a.value === "ocr" && d.ctrlKey && ys(d);
    }, di = () => {
      st.value = !0, bt && clearTimeout(bt), bt = setTimeout(() => {
        st.value = !1;
      }, 1e3);
    }, En = (d) => {
      d.preventDefault(), d.stopPropagation(), ht.value = !1, setTimeout(() => {
        const L = window.innerWidth, O = window.innerHeight;
        kt.value = { width: L, height: O };
        const Z = Math.min(L, O);
        let lt = 1;
        Z < 300 && (lt = Math.max(0.4, Z / 300));
        const se = a.value === "ocr" ? 176 : 150, oe = a.value === "ocr" && r.value.trim() ? 222 : 180, ae = se * lt, cn = oe * lt;
        let _e = d.clientX, Ee = d.clientY;
        _e + ae > L && (_e = L - ae - 5), Ee + cn > O && (Ee = O - cn - 5), _e = Math.max(5, _e), Ee = Math.max(5, Ee), et.value = { x: _e, y: Ee }, ht.value = !0;
      }, 10);
    }, ie = () => {
      ht.value = !1, _.value = !1, k.value = !1;
    }, ws = async () => {
      i.value && (rt.value = !rt.value, await i.value.setAlwaysOnTop(rt.value), ie());
    }, vs = async (d) => {
      if (i.value && !ut.value) {
        ut.value = !0;
        try {
          const O = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Z = Math.round(O.width * d), lt = Math.round(O.height * d), se = 50, oe = 3e3;
          Z >= se && Z <= oe && lt >= se && lt <= oe && (await i.value.setSize(new pn(Z, lt)), p.value > 0 && (ot.value = Z / p.value), di());
        } catch (L) {
          j.error("[PIN窗口] 键盘缩放失败", L);
        } finally {
          setTimeout(() => {
            ut.value = !1;
          }, 100);
        }
      }
    }, xs = async () => {
      if (i.value && C.value.width > 0 && C.value.height > 0)
        try {
          await i.value.setSize(
            new pn(
              C.value.width,
              C.value.height
            )
          ), ot.value = 1, di();
        } catch (d) {
          j.error("[PIN窗口] 重置缩放失败", d);
        }
      ie();
    }, ar = async () => {
      try {
        const d = s.value;
        ie(), i.value && await i.value.hide(), await A("copy_image_to_clipboard", { imageData: d }), qt.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (d) {
        j.error("[PIN窗口] 复制图片失败", d), qt.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, rr = async () => {
      const d = s.value;
      ie(), i.value && await i.value.hide();
      try {
        await A("save_pin_image", { imageData: d }), qt.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (L) {
        L === "SAVE_CANCELLED" ? (j.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (j.error("[PIN窗口] 保存图片失败", L), qt.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, fi = async () => {
      i.value && await i.value.close();
    }, bs = (d) => {
      d.preventDefault();
    }, gi = async (d) => {
      if (d.button === 0 && i.value) {
        const L = d.target;
        if (L.hasAttribute("data-tauri-drag-region") || L.closest("[data-tauri-drag-region]")) {
          if (L.closest("button") || L.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (O) {
            j.error("[PIN窗口] 拖拽窗口失败", O);
          }
        }
      }
    }, ks = (d) => {
      const L = d.target;
      !L.closest(".context-menu") && !L.closest(".ocr-engine-btn-group") && ie();
    }, _s = (d) => {
      if (d.altKey && d.code === "Space") {
        d.preventDefault(), d.stopPropagation();
        return;
      }
      d.key === "Escape" ? ht.value ? ie() : fi() : (d.ctrlKey || d.metaKey) && (d.key === "0" ? (d.preventDefault(), xs()) : d.key === "=" || d.key === "+" ? (d.preventDefault(), vs(1.05)) : d.key === "-" && (d.preventDefault(), vs(0.95)));
    }, lr = async () => {
      if (i.value)
        try {
          const d = await A(
            "get_pin_window_data",
            { label: i.value.label }
          );
          d && m(d) && await u();
        } catch (d) {
          j.error("[PIN窗口] 主动获取窗口数据失败", d);
        }
    };
    return an(async () => {
      if (n.value) {
        try {
          const [d, L] = await Promise.all([
            A("get_translation_engine"),
            A("get_ocr_language")
          ]);
          (d === "google" || d === "bing" || d === "offline") && (v.value = d), P.value = V(L);
        } catch (d) {
          j.error("[PIN窗口] 读取默认 OCR/翻译设置失败", d);
        }
        try {
          i.value = Rn.getCurrent();
          try {
            ft = await i.value.listen(
              "pin-window-data",
              (d) => {
                m(d.payload) && u();
              }
            ), await lr();
          } catch (d) {
            j.error("[PIN窗口] 设置事件监听失败", d);
          }
        } catch (d) {
          if (j.error("[PIN窗口] 初始化错误", d), i.value)
            try {
              await i.value.show();
            } catch (L) {
              j.error("[PIN窗口] 显示窗口失败", L);
            }
        }
        document.addEventListener("click", ks), document.addEventListener("keydown", _s, !0), document.addEventListener("contextmenu", bs, !0), window.addEventListener("blur", ie), document.body && (document.body.oncontextmenu = (d) => (d.preventDefault(), !1));
      }
    }), Hi(() => {
      o.value && URL.revokeObjectURL(o.value), ft && ft(), document.removeEventListener("click", ks), document.removeEventListener("keydown", _s, !0), document.removeEventListener("contextmenu", bs, !0), window.removeEventListener("blur", ie), document.body && (document.body.oncontextmenu = null), bt && clearTimeout(bt);
    }), (d, L) => (F(), G(
      "div",
      {
        class: _t(["pin-container", { "ocr-mode": a.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: Rt(En, ["prevent"]),
        onWheelCapture: or
      },
      [
        tt(" 图片容器 "),
        o.value && a.value === "pin" ? (F(), G(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: It(X.value),
            onWheelCapture: ys,
            onContextmenu: Rt(En, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: gi
          },
          [
            I("img", {
              src: o.value,
              alt: "贴图",
              style: It(Et.value),
              onLoad: ps,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, om)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : tt("v-if", !0),
        a.value === "ocr" ? (F(), G(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: Rt(En, ["prevent"])
          },
          [
            I("header", am, [
              I(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: gi
                },
                [
                  I("div", rm, [
                    b(D(mn), {
                      theme: "outline",
                      size: "18"
                    }),
                    I(
                      "span",
                      lm,
                      at(d.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  I("div", cm, [
                    I("button", {
                      class: "ocr-window-btn",
                      title: rt.value ? d.$t("pin.togglePin") : d.$t("pin.pinWindow"),
                      onClick: Rt(ws, ["stop"])
                    }, [
                      (F(), $t(Ce(rt.value ? D(Ri) : D(Ws)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, um),
                    L[2] || (L[2] = I(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    I("button", {
                      class: "ocr-window-btn",
                      title: d.$t("pin.minimize"),
                      onClick: Rt(ir, ["stop"])
                    }, [
                      b(D(Ko), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, hm),
                    I("button", {
                      class: "ocr-window-btn",
                      title: d.$t("pin.maximize"),
                      onClick: Rt(sr, ["stop"])
                    }, [
                      b(D(Rc), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, dm),
                    I("button", {
                      class: "ocr-window-btn",
                      title: d.$t("pin.close"),
                      onClick: Rt(fi, ["stop"])
                    }, [
                      b(D(Li), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, fm)
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
                  I("div", gm, [
                    o.value ? (F(), G("img", {
                      key: 0,
                      src: o.value,
                      alt: "OCR preview",
                      onLoad: ps,
                      draggable: "false"
                    }, null, 40, mm)) : tt("v-if", !0)
                  ]),
                  I("div", pm, [
                    I(
                      "div",
                      ym,
                      at(g.value),
                      1
                      /* TEXT */
                    ),
                    I("div", wm, [
                      I(
                        "span",
                        vm,
                        at(Ht.value),
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
                        xm,
                        at(Zt.value),
                        1
                        /* TEXT */
                      ),
                      !c.value && !h.value && r.value.trim() ? (F(), G("span", bm, " ✓ ")) : tt("v-if", !0)
                    ])
                  ]),
                  I("button", {
                    class: "ocr-view-original",
                    title: f.value ? d.$t("pin.viewResult") : d.$t("pin.viewOriginal"),
                    onClick: Rt(tr, ["stop"])
                  }, [
                    (F(), $t(Ce(f.value ? D(mn) : D(_c)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    I(
                      "span",
                      null,
                      at(f.value ? d.$t("pin.viewResult") : d.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, km)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            I(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: L[1] || (L[1] = Rt(() => {
                }, ["stop"]))
              },
              [
                f.value ? (F(), G("div", _m, [
                  I("img", {
                    src: o.value || s.value,
                    alt: "original"
                  }, null, 8, Sm)
                ])) : (F(), G(
                  Xt,
                  { key: 1 },
                  [
                    c.value ? (F(), G("div", Cm, [
                      b(D(Ns), {
                        class: "ocr-loading-icon",
                        size: "20",
                        theme: "outline",
                        strokeWidth: 3
                      }),
                      I(
                        "span",
                        null,
                        at(d.$t("pin.recognizing")),
                        1
                        /* TEXT */
                      )
                    ])) : h.value ? (F(), G(
                      "div",
                      Tm,
                      at(h.value),
                      1
                      /* TEXT */
                    )) : r.value.trim() ? (F(), G(
                      "div",
                      {
                        key: 3,
                        class: _t(["ocr-result-layout", { "records-open": x.value }])
                      },
                      [
                        I("section", Lm, [
                          I("div", Rm, [
                            I("img", {
                              src: o.value || s.value,
                              alt: "OCR source"
                            }, null, 8, Pm),
                            Tt.value.length > 0 ? (F(), G("div", Em, [
                              (F(!0), G(
                                Xt,
                                null,
                                ge(Tt.value, (O) => (F(), G(
                                  "span",
                                  {
                                    key: O.id,
                                    class: _t(["ocr-overlay-block", { selected: O.selected }]),
                                    style: It(yt(O))
                                  },
                                  at(O.text.trim()),
                                  7
                                  /* TEXT, CLASS, STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : tt("v-if", !0)
                          ])
                        ]),
                        x.value ? (F(), G("section", Am, [
                          (F(!0), G(
                            Xt,
                            null,
                            ge(l.value, (O, Z) => (F(), G(
                              "article",
                              {
                                key: O.id,
                                class: _t(["ocr-record-item", { selected: O.selected }])
                              },
                              [
                                I("div", Im, [
                                  I("header", {
                                    class: "ocr-record-header",
                                    onClick: Rt((lt) => ds(O.id), ["stop"])
                                  }, [
                                    I("input", {
                                      class: "ocr-record-checkbox",
                                      type: "checkbox",
                                      checked: O.selected,
                                      onChange: Rt((lt) => ds(O.id), ["stop"]),
                                      onClick: L[0] || (L[0] = Rt(() => {
                                      }, ["stop"]))
                                    }, null, 40, zm),
                                    I(
                                      "span",
                                      Dm,
                                      "#" + at(Z + 1),
                                      1
                                      /* TEXT */
                                    )
                                  ], 8, Om),
                                  I("div", {
                                    class: "ocr-record-editor",
                                    contenteditable: "plaintext-only",
                                    spellcheck: "false",
                                    textContent: at(O.text),
                                    onBlur: (lt) => fs(O.id, "text", lt)
                                  }, null, 40, Nm),
                                  O.confidence > 0 ? (F(), G(
                                    "span",
                                    Wm,
                                    at(Math.round(O.confidence)) + "% ",
                                    1
                                    /* TEXT */
                                  )) : tt("v-if", !0)
                                ]),
                                O.translatedText ? (F(), G("div", {
                                  key: 0,
                                  class: "ocr-record-editor translated",
                                  contenteditable: "plaintext-only",
                                  spellcheck: "false",
                                  textContent: at(O.translatedText),
                                  onBlur: (lt) => fs(O.id, "translatedText", lt)
                                }, null, 40, $m)) : tt("v-if", !0)
                              ],
                              2
                              /* CLASS */
                            ))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : tt("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )) : (F(), G(
                      "div",
                      Mm,
                      at(d.$t("pin.noTextRecognized")),
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
            I("footer", Bm, [
              b(ye, {
                class: "ocr-action-btn",
                type: "text",
                title: d.$t("pin.copyText"),
                disabled: !r.value.trim(),
                onClick: Rt(Pe, ["stop"])
              }, {
                default: Yt(() => [
                  b(D(wi), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  I(
                    "span",
                    null,
                    at(jt.value > 0 ? `${d.$t("pin.copyText")} (${jt.value})` : d.$t("pin.copyText")),
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
                title: x.value ? d.$t("pin.hideRecords") : d.$t("pin.showRecords"),
                disabled: l.value.length === 0,
                onClick: Rt(er, ["stop"])
              }, {
                default: Yt(() => [
                  b(D(mn), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  I(
                    "span",
                    null,
                    at(x.value ? d.$t("pin.hideRecords") : d.$t("pin.showRecords")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              I("div", Fm, [
                b(ye, {
                  class: "ocr-action-btn translate-main",
                  type: "text",
                  title: d.$t("pin.translate"),
                  disabled: !r.value.trim() || y.value,
                  onClick: Rt(Ja, ["stop"])
                }, {
                  default: Yt(() => [
                    y.value ? (F(), $t(D(Ns), {
                      key: 1,
                      class: "ocr-loading-icon",
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })) : (F(), $t(D(Zo), {
                      key: 0,
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })),
                    I(
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
                b(ye, {
                  class: "ocr-action-btn translate-arrow",
                  type: "text",
                  disabled: !r.value.trim() || y.value,
                  onClick: Rt(Ka, ["stop"])
                }, {
                  default: Yt(() => [
                    b(D(Ds), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.8
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                tt(" 翻译引擎菜单 "),
                _.value ? (F(), G("div", Hm, [
                  (F(!0), G(
                    Xt,
                    null,
                    ge(N.value, (O) => (F(), G("div", {
                      key: O.value,
                      class: _t(["menu-item", { active: v.value === O.value }]),
                      onClick: (Z) => Za(O.value)
                    }, [
                      I(
                        "span",
                        Um,
                        at(O.label),
                        1
                        /* TEXT */
                      ),
                      v.value === O.value ? (F(), $t(Ce(D(Mi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : tt("v-if", !0)
                    ], 10, jm))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : tt("v-if", !0)
              ]),
              I("div", Vm, [
                b(ye, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: d.$t("pin.ocrLanguage"),
                  disabled: c.value,
                  onClick: Rt(gs, ["stop"])
                }, {
                  default: Yt(() => [
                    b(D(mn), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    I(
                      "span",
                      null,
                      at(q.value),
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
                  disabled: c.value,
                  onClick: Rt(gs, ["stop"])
                }, {
                  default: Yt(() => [
                    b(D(Ds), {
                      size: "14",
                      theme: "outline",
                      strokeWidth: 3
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                k.value ? (F(), G("div", Ym, [
                  (F(!0), G(
                    Xt,
                    null,
                    ge(M.value, (O) => (F(), G("div", {
                      key: O.value,
                      class: _t(["menu-item", { active: P.value === O.value }]),
                      onClick: (Z) => qa(O.value)
                    }, [
                      I(
                        "span",
                        Xm,
                        at(O.label),
                        1
                        /* TEXT */
                      ),
                      P.value === O.value ? (F(), $t(Ce(D(Mi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : tt("v-if", !0)
                    ], 10, Gm))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : tt("v-if", !0)
              ]),
              I("div", Km, [
                b(ye, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: d.$t("pin.recognizeAgain"),
                  disabled: c.value || !s.value,
                  onClick: Rt(R, ["stop"])
                }, {
                  default: Yt(() => [
                    b(D(Tc), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    I(
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
              b(ye, {
                class: "ocr-action-btn",
                type: "text",
                title: d.$t("pin.saveAsText"),
                disabled: !r.value.trim(),
                onClick: Rt(ke, ["stop"])
              }, {
                default: Yt(() => [
                  b(D(Bs), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  I(
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
                title: d.$t("pin.more"),
                onClick: Rt(nr, ["stop"])
              }, {
                default: Yt(() => [
                  b(D(xc), {
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
        )) : tt("v-if", !0),
        st.value ? (F(), G(
          "div",
          Zm,
          at(Math.round(ot.value * 100)) + "% ",
          1
          /* TEXT */
        )) : tt("v-if", !0),
        tt(" 右键菜单 "),
        ht.value ? (F(), G(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: It(At.value)
          },
          [
            I("div", {
              class: "menu-item",
              onClick: ws
            }, [
              (F(), $t(Ce(rt.value ? D(Ws) : D(Ri)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              I(
                "span",
                null,
                at(rt.value ? d.$t("pin.togglePin") : d.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            I("div", {
              class: "menu-item",
              onClick: xs
            }, [
              b(D(Cc), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
                "span",
                null,
                at(d.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            I("div", {
              class: "menu-item",
              onClick: ar
            }, [
              b(D(wi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
                "span",
                null,
                at(d.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            I("div", {
              class: "menu-item",
              onClick: rr
            }, [
              b(D(Bs), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
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
              onClick: Pe
            }, [
              b(D(wi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              I(
                "span",
                null,
                at(d.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : tt("v-if", !0),
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
                at(d.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : tt("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), Jm = /* @__PURE__ */ ri(qm, [["__scopeId", "data-v-3cec7e23"]]), Qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jm
}, Symbol.toStringTag, { value: "Module" }));
async function tp(e) {
  return e.toDataURL("image/png");
}
function ep(e) {
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
async function np(e) {
  const t = Date.now(), n = await tp(e);
  Wt.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await A("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr",
      language: "zh"
    }), s = ep(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || Fo(o),
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
    throw j.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Wt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function ip() {
  return Promise.resolve();
}
async function sp() {
  return Promise.resolve();
}
const op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: np,
  terminateOcr: sp,
  warmupOcr: ip
}, Symbol.toStringTag, { value: "Module" }));
export {
  lp as activate
};
