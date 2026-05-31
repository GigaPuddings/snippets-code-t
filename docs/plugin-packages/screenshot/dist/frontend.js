var Ca = Object.defineProperty;
var Ta = (e, t, n) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var U = (e, t, n) => Ta(e, typeof t != "symbol" ? t + "" : t, n);
import * as oi from "vue";
import { defineAsyncComponent as es, inject as Se, createVNode as v, ref as J, shallowRef as La, computed as V, watch as Oe, onMounted as sn, onUnmounted as Ai, defineComponent as Ot, h as ao, Text as Ma, Fragment as Xt, nextTick as pn, createElementBlock as K, openBlock as B, createCommentVNode as nt, createElementVNode as A, renderList as me, normalizeClass as Ct, createBlock as $t, resolveDynamicComponent as _e, unref as I, toDisplayString as at, normalizeStyle as zt, withDirectives as yn, withKeys as ns, vModelText as Pa, getCurrentInstance as Ze, readonly as Ea, getCurrentScope as Ra, onScopeDispose as Aa, isRef as Ia, warn as Oa, provide as za, mergeProps as Da, renderSlot as ze, Transition as Ii, withCtx as Gt, createTextVNode as Na, vShow as Bn, shallowReactive as Wa, withModifiers as Wt, isVNode as wn, render as Hn } from "vue";
const Yg = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: es(() => Promise.resolve().then(() => ch))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: es(() => Promise.resolve().then(() => Ng))
  });
};
function $a(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function Fa(e, t, n, i, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var In;
const ee = "__TAURI_TO_IPC_KEY__";
function Ba(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function M(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Ha(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class ja {
  get rid() {
    return $a(this, In, "f");
  }
  constructor(t) {
    In.set(this, void 0), Fa(this, In, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return M("plugin:resources|close", {
      rid: this.rid
    });
  }
}
In = /* @__PURE__ */ new WeakMap();
class hn {
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
    return new dn(this.width * t, this.height * t);
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
class dn {
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
    return new hn(this.width / t, this.height / t);
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
class je {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof hn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof dn ? this.size : this.size.toPhysical(t);
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
class ro {
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
    return new xe(this.x * t, this.y * t);
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
class xe {
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
    return new ro(this.x / t, this.y / t);
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
class Ln {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof ro ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof xe ? this.position : this.position.toPhysical(t);
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
async function lo(e, t) {
  await M("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function fn(e, t, n) {
  var i;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return M("plugin:event|listen", {
    event: e,
    target: s,
    handler: Ba(t)
  }).then((o) => async () => lo(e, o));
}
async function Ua(e, t, n) {
  return fn(e, (i) => {
    lo(e, i.id), t(i);
  }, n);
}
async function Va(e, t) {
  await M("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ya(e, t, n) {
  await M("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let Ga = class On extends ja {
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
    return M("plugin:image|new", {
      rgba: jn(t),
      width: n,
      height: i
    }).then((s) => new On(s));
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
    return M("plugin:image|from_bytes", {
      bytes: jn(t)
    }).then((n) => new On(n));
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
    return M("plugin:image|from_path", { path: t }).then((n) => new On(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return M("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return M("plugin:image|size", { rid: this.rid });
  }
};
function jn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ga ? e.rid : e;
}
var fi;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(fi || (fi = {}));
class Xa {
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
var is;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(is || (is = {}));
function Ka() {
  return new Sn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ai() {
  return M("plugin:window|get_all_windows").then((e) => e.map((t) => new Sn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ri = ["tauri://created", "tauri://error"];
class Sn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || M("plugin:window|create", {
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
    return (n = (await ai()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ka();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return ai();
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
    for (const t of await ai())
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
    } : fn(t, n, {
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
    } : Ua(t, n, {
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
    if (ri.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Va(t, n);
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
    if (ri.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return Ya(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ri.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return M("plugin:window|scale_factor", {
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
    return M("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new xe(t));
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
    return M("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new xe(t));
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
    return M("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new dn(t));
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
    return M("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new dn(t));
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
    return M("plugin:window|is_fullscreen", {
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
    return M("plugin:window|is_minimized", {
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
    return M("plugin:window|is_maximized", {
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
    return M("plugin:window|is_focused", {
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
    return M("plugin:window|is_decorated", {
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
    return M("plugin:window|is_resizable", {
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
    return M("plugin:window|is_maximizable", {
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
    return M("plugin:window|is_minimizable", {
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
    return M("plugin:window|is_closable", {
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
    return M("plugin:window|is_visible", {
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
    return M("plugin:window|title", {
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
    return M("plugin:window|theme", {
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
    return M("plugin:window|is_always_on_top", {
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
    return M("plugin:window|center", {
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
    return t && (t === fi.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), M("plugin:window|request_user_attention", {
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
    return M("plugin:window|set_resizable", {
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
    return M("plugin:window|set_enabled", {
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
    return M("plugin:window|is_enabled", {
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
    return M("plugin:window|set_maximizable", {
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
    return M("plugin:window|set_minimizable", {
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
    return M("plugin:window|set_closable", {
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
    return M("plugin:window|set_title", {
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
    return M("plugin:window|maximize", {
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
    return M("plugin:window|unmaximize", {
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
    return M("plugin:window|toggle_maximize", {
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
    return M("plugin:window|minimize", {
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
    return M("plugin:window|unminimize", {
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
    return M("plugin:window|show", {
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
    return M("plugin:window|hide", {
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
    return M("plugin:window|close", {
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
    return M("plugin:window|destroy", {
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
    return M("plugin:window|set_decorations", {
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
    return M("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return M("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return M("plugin:window|set_effects", {
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
    return M("plugin:window|set_always_on_top", {
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
    return M("plugin:window|set_always_on_bottom", {
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
    return M("plugin:window|set_content_protected", {
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
    return M("plugin:window|set_size", {
      label: this.label,
      value: t instanceof je ? t : new je(t)
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
    return M("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof je ? t : t ? new je(t) : null
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
    return M("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof je ? t : t ? new je(t) : null
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
    return M("plugin:window|set_size_constraints", {
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
    return M("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Ln ? t : new Ln(t)
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
    return M("plugin:window|set_fullscreen", {
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
    return M("plugin:window|set_focus", {
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
    return M("plugin:window|set_icon", {
      label: this.label,
      value: jn(t)
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
    return M("plugin:window|set_skip_taskbar", {
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
    return M("plugin:window|set_cursor_grab", {
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
    return M("plugin:window|set_cursor_visible", {
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
    return M("plugin:window|set_cursor_icon", {
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
    return M("plugin:window|set_background_color", { color: t });
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
    return M("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Ln ? t : new Ln(t)
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
    return M("plugin:window|set_ignore_cursor_events", {
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
    return M("plugin:window|start_dragging", {
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
    return M("plugin:window|start_resize_dragging", {
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
    return M("plugin:window|set_badge_count", {
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
    return M("plugin:window|set_badge_label", {
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
    return M("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? jn(t) : void 0
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
    return M("plugin:window|set_progress_bar", {
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
    return M("plugin:window|set_visible_on_all_workspaces", {
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
    return M("plugin:window|set_title_bar_style", {
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
    return M("plugin:window|set_theme", {
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
      n.payload = new dn(n.payload), t(n);
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
      n.payload = new xe(n.payload), t(n);
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
      const i = new Xa(n);
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
          position: new xe(a.payload.position)
        }
      });
    }), i = await this.listen(Jt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new xe(a.payload.position)
        }
      });
    }), s = await this.listen(Jt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new xe(a.payload.position)
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
var ss;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ss || (ss = {}));
var os;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(os || (os = {}));
var as;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(as || (as = {}));
function Dt(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function rs(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function Oi(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function Za(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function ce(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function Ue(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class qa {
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
    if (!Ue(t)) {
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
    const { x: n, y: i, width: s, height: o } = t, a = Oi(t);
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
    let y = i.x + g, k = i.y + g;
    y + c > n.x + n.width && (y = i.x - c - g), k + d > n.y + n.height && (k = i.y - d - g), y < n.x && (y = n.x + g), k < n.y && (k = n.y + g), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(y, k, c, d, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const L = 108, f = y + (c - L) / 2, _ = k + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(f, _, L, L), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(f, _, L, L);
    const m = a ? a.width : r, x = L / m;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      f,
      _,
      L,
      L
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let H = 1; H < m; H++) {
      const G = f + H * x;
      this.ctx.moveTo(G, _), this.ctx.lineTo(G, _ + L);
      const Z = _ + H * x;
      this.ctx.moveTo(f, Z), this.ctx.lineTo(f + L, Z);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let H = 1; H < m; H++) {
      const G = f + H * x + 0.5;
      this.ctx.moveTo(G, _), this.ctx.lineTo(G, _ + L);
      const Z = _ + H * x + 0.5;
      this.ctx.moveTo(f, Z), this.ctx.lineTo(f + L, Z);
    }
    this.ctx.stroke();
    const w = Math.floor(m / 2), C = f + w * x, R = _ + w * x;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(C, R, x, x), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      C - 1,
      R - 1,
      x + 2,
      x + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      C,
      R,
      x,
      x
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let z = _ + L + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(y + 16, z - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(y + 16, z - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const H = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(H, y + 44, z), z += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, y + 16, z), z += 17, this.ctx.font = "12px Arial";
    const T = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(T, y + 16, z), this.ctx.restore();
  }
}
class Ja {
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
    return ce(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return ce(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, n) {
    return !ce(t) || !Ue(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !ce(t) || !Ue(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + n.x,
      y: t.y + n.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Ue(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!ce(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const n = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Za(t, n);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Ue(t))
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
    return Dt(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!ce(t) || !Ue(n))
      return !1;
    if (i === 0)
      return rs(t, n);
    const s = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return rs(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, s = 8) {
    if (!ce(t) || !ce(n) || !ce(i))
      return !1;
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, d = r * r + l * l;
    if (d === 0)
      return Dt(t, n) <= s;
    const g = c / d;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Dt(t, y) <= s;
  }
}
var W = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(W || {}), S = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(S || {});
class Qa {
  constructor(t, n) {
    U(this, "coordinateSystem");
    U(this, "canvas");
    U(this, "isDrawing", !1);
    U(this, "currentOperation", W.None);
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
    if (n !== S.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(n) : W.None : W.Drawing;
    if (o) {
      if (o.getData().type === S.Mosaic)
        return W.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== W.None ? a : W.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : W.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [S.Rectangle]: W.DrawingRect,
      [S.Ellipse]: W.DrawingEllipse,
      [S.Line]: W.DrawingLine,
      [S.Arrow]: W.DrawingArrow,
      [S.Pen]: W.DrawingPen,
      [S.Text]: W.DrawingText,
      [S.Mosaic]: W.DrawingMosaic,
      [S.ColorPicker]: W.ColorPicking,
      [S.Ocr]: W.None,
      [S.Pin]: W.Pinning,
      [S.Translate]: W.None,
      [S.Select]: W.None
    }[t] || W.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, n, i) {
    const { x: s, y: o, width: a, height: r } = n, l = 12;
    if (i)
      return W.None;
    const c = Oi(n);
    return this.isInHandle(t, { x: s, y: o }, l) ? W.ResizingNW : this.isInHandle(t, { x: s + a, y: o }, l) ? W.ResizingNE : this.isInHandle(t, { x: s, y: o + r }, l) ? W.ResizingSW : this.isInHandle(t, { x: s + a, y: o + r }, l) ? W.ResizingSE : this.isInHandle(t, { x: c.x, y: o }, l) ? W.ResizingN : this.isInHandle(t, { x: c.x, y: o + r }, l) ? W.ResizingS : this.isInHandle(t, { x: s, y: c.y }, l) ? W.ResizingW : this.isInHandle(t, { x: s + a, y: c.y }, l) ? W.ResizingE : this.coordinateSystem.isPointInRect(t, n) ? W.Moving : W.Drawing;
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
    if (!ce(t))
      return W.None;
    const i = n.getData();
    if (i.type === S.Mosaic || i.type === S.Text)
      return W.None;
    if ([
      S.Rectangle,
      S.Ellipse,
      S.Line,
      S.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = Dt(t, s), c = Dt(t, o);
      if (l <= a + r)
        return W.ResizingAnnotationNW;
      if (c <= a + r)
        return W.ResizingAnnotationSE;
    }
    return W.None;
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
    this.isDrawing = !1, this.currentOperation = W.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class $e {
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
class tr extends $e {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: S.Rectangle,
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
      if (Dt(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class er extends $e {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: S.Ellipse,
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
class nr extends $e {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: S.Line,
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
      return Dt(t, n) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - n.x) * o + (t.y - n.y) * a) / r)), c = {
      x: n.x + l * o,
      y: n.y + l * a
    };
    return Dt(t, c) <= s;
  }
}
class ir extends $e {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: S.Arrow,
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
      return Dt(t, n) <= s;
    const g = c / d;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Dt(t, y) <= s;
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
      if (Dt(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class sr extends $e {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: S.Pen,
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
      const n = this.data.points[this.data.points.length - 1], i = Dt(t, n);
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
      return this.data.points.length === 1 ? Dt(t, this.data.points[0]) <= n : !1;
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
      return Dt(t, n) <= s;
    const g = c / d;
    let y;
    return g < 0 ? y = n : g > 1 ? y = i : y = {
      x: n.x + g * r,
      y: n.y + g * l
    }, Dt(t, y) <= s;
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
const Ve = "sans-serif", Ye = (e) => ({
  x: e.x + 4,
  y: e.y - 8
});
class or extends $e {
  constructor(t, n, i, s = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: S.Text,
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
    t.save(), this.applyOpacity(t), t.font = `${o}px ${Ve}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Ye(a), l = r.x * n - i.x, c = r.y * n - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, n = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${Ve}`;
    const l = a.measureText(this.data.text).width, { x: c, y: d } = Ye(i);
    return t.x >= c - n && t.x <= c + l + n && t.y >= d - n && t.y <= d + s + n;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], n = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${n}px ${Ve}`;
    const a = s.measureText(this.data.text).width, { x: r, y: l } = Ye(t);
    return {
      x: r,
      y: l,
      width: a,
      height: n
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Ye(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Ve}`;
    const g = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(l, c, g, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Ye(o), l = r.x * i - s.x, c = r.y * i - s.y;
    n.save(), n.font = `${a}px ${Ve}`;
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
const ue = class ue extends $e {
  constructor(t, n, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: S.Mosaic,
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
      const n = this.data.points[this.data.points.length - 1], i = Dt(t, n);
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
    ue.helperCanvas || (ue.helperCanvas = document.createElement("canvas"), ue.helperCtx = ue.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const o = ue.helperCanvas, a = ue.helperCtx, r = n || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), d = Math.max(l * 3, 24), g = this.getBounds();
    if (!g) return;
    const y = d, k = Math.floor(g.x - y), L = Math.floor(g.y - y), f = Math.ceil(g.width + y * 2), _ = Math.ceil(g.height + y * 2);
    if (f <= 0 || _ <= 0) return;
    const m = Math.floor(k * r - i.x), x = Math.floor(L * r - i.y), w = Math.ceil(f * r), C = Math.ceil(_ * r), R = t.canvas.width, z = t.canvas.height, T = Math.max(0, m), H = Math.max(0, x), G = Math.min(w, R - T), Z = Math.min(C, z - H);
    if (G <= 0 || Z <= 0) return;
    let st;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), st = t.getImageData(T, H, G, Z), t.restore();
    } catch {
      return;
    }
    const it = st.data, ut = T % c, mt = H % c;
    for (let ht = -mt; ht < Z; ht += c)
      for (let Q = -ut; Q < G; Q += c) {
        const ot = Math.max(0, Q), bt = Math.max(0, ht), dt = Math.min(G, Q + c), j = Math.min(Z, ht + c);
        if (ot >= dt || bt >= j) continue;
        let wt = 0, Y = 0, Rt = 0, Ht = 0;
        for (let Kt = bt; Kt < j; Kt++)
          for (let Tt = ot; Tt < dt; Tt++) {
            const xt = (Kt * G + Tt) * 4;
            wt += it[xt], Y += it[xt + 1], Rt += it[xt + 2], Ht++;
          }
        if (Ht > 0) {
          wt = Math.round(wt / Ht / 8) * 8, Y = Math.round(Y / Ht / 8) * 8, Rt = Math.round(Rt / Ht / 8) * 8;
          for (let Tt = bt; Tt < j; Tt++)
            for (let xt = ot; xt < dt; xt++) {
              const jt = (Tt * G + xt) * 4;
              it[jt] = wt, it[jt + 1] = Y, it[jt + 2] = Rt;
            }
        }
      }
    o.width = G, o.height = Z, a.putImageData(st, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = d * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, T, H), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, T, H), t.restore();
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
        const g = this.data.points[d], y = this.data.points[d + 1], k = (a(g) + a(y)) / 2, L = (r(g) + r(y)) / 2;
        t.quadraticCurveTo(a(g), r(g), k, L);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Dt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + n;
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
    let y, k;
    g < 0 ? (y = n.x, k = n.y) : g > 1 ? (y = i.x, k = i.y) : (y = n.x + g * r, k = n.y + g * l);
    const L = t.x - y, f = t.y - k;
    return L * L + f * f <= s * s;
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
U(ue, "helperCanvas", null), U(ue, "helperCtx", null);
let gi = ue;
class Mn {
  static createAnnotation(t, n, i, s = {}) {
    switch (t) {
      case S.Rectangle:
        return new tr(n, i);
      case S.Ellipse:
        return new er(n, i);
      case S.Line:
        return new nr(n, i);
      case S.Arrow:
        return new ir(n, i);
      case S.Pen:
        return new sr(n, i);
      case S.Text:
        return new or(
          n,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case S.Mosaic:
        return new gi(
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
      [S.Rectangle]: "drawing-rect",
      [S.Ellipse]: "drawing-ellipse",
      [S.Line]: "drawing-line",
      [S.Arrow]: "drawing-arrow",
      [S.Pen]: "drawing-pen",
      [S.Text]: "drawing-text",
      [S.Mosaic]: "drawing-mosaic",
      [S.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== S.Select && t !== S.ColorPicker && t !== S.Ocr && t !== S.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== S.Select && t !== S.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      S.Rectangle,
      S.Ellipse,
      S.Line,
      S.Arrow,
      S.Pen,
      S.Text
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      S.Rectangle,
      S.Ellipse,
      S.Line,
      S.Arrow,
      S.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === S.Text;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === S.Mosaic;
  }
}
const Ae = class Ae {
  constructor() {
    U(this, "pool", []);
    U(this, "maxPoolSize", 5);
    // 最大池大小
    U(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return Ae.instance || (Ae.instance = new Ae()), Ae.instance;
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
U(Ae, "instance");
let mi = Ae;
async function ar(e, t) {
  return await M("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const F = {
  info: (e, t, ...n) => {
    M("frontend_log", {
      level: "info",
      message: e,
      data: t === void 0 ? null : zn(t)
    }).catch(() => {
    });
  },
  error: (e, t) => {
    M("frontend_log", {
      level: "error",
      message: e,
      data: t === void 0 ? null : zn(t)
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    M("frontend_log", {
      level: "warn",
      message: e,
      data: t === void 0 ? null : zn(t)
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
}, Nt = {
  log: (e, t) => {
    M("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : zn(t)
    }).catch(() => {
    });
  }
};
function zn(e) {
  if (e instanceof Error)
    return `${e.name}: ${e.message}
${e.stack || ""}`.trim();
  if (typeof e == "string")
    return e;
  try {
    return JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
}
const rr = "resources/transformers/transformers.min.js", lr = ["translation-offline-runtime", "translation"], cr = "https://huggingface.co/", ur = "{model}/resolve/{revision}/", hr = "/__snippets_code_disabled_transformers_local_models__/", dr = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let ln = null;
const fr = (e) => {
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
}, co = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = fr(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, uo = (e) => {
  const t = co(e);
  return Object.fromEntries(
    dr.map((n) => [n, `${t}${n}`])
  );
}, ho = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = cr, e.remotePathTemplate = ur, e.allowLocalModels = !1, e.localModelPath = hr, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = uo(t), e.backends.onnx.wasm.numThreads = 1);
};
async function gr() {
  return ln || (ln = (async () => {
    for (const e of lr) {
      const t = await ar(e, rr);
      if (!t) continue;
      const n = Ha(t), i = await import(
        /* @vite-ignore */
        n
      );
      return ho(i.env, n), F.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw ln = null, e;
  }), ln);
}
let pe = null, gn = !1, Ge = null, Ie = null, pi = null;
const mr = "Xenova/opus-mt-en-zh", pr = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], yr = 3e5;
function wr(e) {
  pi = e;
}
function vr() {
  return pr;
}
function kr(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function fo() {
  return pe || Ge || (gn = !0, F.info("[离线翻译] 正在加载翻译模型..."), Ge = (async () => {
    try {
      const { pipeline: e, env: t } = await gr();
      ho(t);
      let n = "";
      const i = e("translation", mr, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== n && (n = o.file, F.info(`[离线翻译] 已加载: ${o.file}`)), pi && pi({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return pe = await kr(
        i,
        yr,
        "模型加载超时，请检查网络连接后重试"
      ), F.info("[离线翻译] 翻译模型加载完成"), gn = !1, pe;
    } catch (e) {
      throw gn = !1, Ge = null, F.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Ge);
}
async function go(e) {
  if (!e?.trim()) return e;
  Ie = new AbortController();
  const t = Ie.signal;
  try {
    const n = await fo();
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
    throw n instanceof Error && n.message === "翻译已取消" ? (F.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (F.warn("[离线翻译] 运行时资源未安装"), n) : (F.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    Ie = null;
  }
}
function br() {
  Ie && (Ie.abort(), Ie = null, F.info("[离线翻译] 已发送取消信号"));
}
function xr() {
  return Ie !== null;
}
async function mo() {
  await fo();
}
function _r() {
  return pe !== null;
}
function Sr() {
  return gn;
}
async function zi() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      F.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const s = await (await caches.open(n)).keys();
          if (F.info(`[离线翻译] Cache "${n}" 包含 ${s.length} 个文件`), s.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = s.some((r) => r.url.includes(".onnx"));
            if (F.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
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
    F.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return F.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return F.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return F.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function Cr() {
  return (await zi()).isCached;
}
function Tr() {
  return pe !== null;
}
async function Lr() {
  if (pe)
    try {
      await pe.dispose?.();
    } catch {
    }
  pe = null, Ge = null, gn = !1, F.info("[离线翻译] 翻译器已释放");
}
async function Mr() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), F.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), F.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    F.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw F.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Tr,
  cancelOfflineTranslation: br,
  clearModelCache: Mr,
  disposeOfflineTranslator: Lr,
  getModelCacheInfo: zi,
  getModelFiles: vr,
  getRuntimeBaseUrl: co,
  getRuntimeWasmPaths: uo,
  isModelCached: Cr,
  isOfflineTranslatorInitializing: Sr,
  isOfflineTranslatorReady: _r,
  isTranslationInProgress: xr,
  setProgressCallback: wr,
  translateOffline: go,
  warmupOfflineTranslator: mo
}, Symbol.toStringTag, { value: "Module" }));
class Re {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => jg).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const n = Promise.resolve(Pr).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
U(Re, "loadedModules", /* @__PURE__ */ new Map()), U(Re, "loadingPromises", /* @__PURE__ */ new Map());
function po(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = e.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, d = n + s + a + l;
  return d === 0 ? "unknown" : s >= 3 && s > l && s / d >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / d >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function Xe(e) {
  return e === "zh" || e === "en";
}
function Ee(e) {
  return po(e);
}
const Er = /[.!?。！？；;：:][)"'”’】）\]]*$/, ls = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, Pn = /[A-Za-z0-9]/, Rr = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/;
function Ar(e) {
  const t = el(e), n = Ir(e, t);
  if (n.length === 0)
    return [];
  const i = yo(n, t), s = [];
  for (const o of i) {
    const a = s[s.length - 1], r = a ? $r(a, o, t) : !1;
    if (!a || !r) {
      s.push(Fr(o));
      continue;
    }
    a.text = Hr(a.text, o.text), a.blocks = [...a.blocks, ...o.blocks], a.bbox = bo(a.bbox, o.bbox), a.fontSize = us(
      a.fontSize || o.fontSize,
      a.blocks.length - o.blocks.length,
      o.fontSize,
      o.blocks.length
    ), a.lineHeight = us(
      a.lineHeight || o.lineHeight,
      a.blocks.length - o.blocks.length,
      o.lineHeight,
      o.blocks.length
    ), a.isCodeBlock = !!(a.isCodeBlock || o.isCodeLike || o.hasTableColumns), a.isStructuredBlock = !!(a.isStructuredBlock || o.hasTableColumns);
  }
  return s;
}
function Ir(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || Or(n, t) || Dr(i))
      return null;
    const s = Nr(zr(i, n, t));
    return s === n.text ? n : { ...n, text: s };
  }).filter((n) => !!n);
}
function Or(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function zr(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function Dr(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function Nr(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function yo(e, t) {
  const n = [...e].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of n) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !Kr(a.blocks, o, t) ? (a.blocks.push(o), a.y = qe(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => Wr(o.blocks, t));
}
function Wr(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = tl(n), s = n.reduce((r, l, c) => {
    const d = l.text.trim();
    return c === 0 ? d : Br(r, d);
  }, ""), o = qe(n.map((r) => mn(r.fontSize, t))), a = qe(n.map((r) => xo(r)));
  return {
    text: s,
    blocks: n,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: Zr(n, t),
    isCodeLike: Xr(s)
  };
}
function $r(e, t, n) {
  const i = yo(e.blocks, n), s = i[i.length - 1];
  if (!s || Di(s.text) || vo(t.text) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const o = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (o < -n * 0.25 || o >= n * 1.8 || jr(i, o, n) || Ur(s, t, o, n) || Vr(s, t, o, n) || Yr(s, t, o, n) || Gr(s, t, o, n))
    return !1;
  const a = Math.max(n * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= a;
}
function Fr(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: qe(e.blocks.map((t) => t.angle || 0))
  };
}
function Br(e, t) {
  return wo(e, t);
}
function Hr(e, t) {
  return wo(e, t);
}
function wo(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const s = n.charAt(n.length - 1), o = i.charAt(0), a = n.charAt(n.length - 2);
  return s === "-" && Pn.test(a) && Pn.test(o) ? `${n.slice(0, -1)}${i}` : nl(o) || il(s) ? `${n}${i}` : ls.test(s) || ls.test(o) || hs(s) || hs(o) ? `${n}${i}` : Pn.test(s) && Pn.test(o) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function Di(e) {
  return Er.test(e.trim());
}
function vo(e) {
  return Rr.test(e);
}
function jr(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? qe(i) : 0, o = Math.max(s * 2.2, n * 1.15);
  return t > o;
}
function Ur(e, t, n, i) {
  const s = e.text.trim();
  if (!s || Di(s) || vo(s) || e.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function Vr(e, t, n, i) {
  if (n <= 0)
    return !1;
  const s = Math.max(e.fontSize, t.fontSize), o = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = s / o, r = n / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Yr(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const o = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Gr(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : cs(e.text) && cs(t.text);
}
function cs(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Di(t);
}
function Xr(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Kr(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > n * 0.9 && Qr(s.text) && ko(t.text) ? !1 : o > n * 3.2;
}
function Zr(e, t) {
  if (e.length < 2)
    return e.some((s) => qr(s.text));
  const n = [...e].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < n.length; s++) {
    const o = n[s - 1], a = n[s], r = n[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && Jr(o.text) && ko(a.text)) && (i += 1);
  }
  return i >= 1;
}
function qr(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Jr(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function Qr(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function ko(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function tl(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => bo(n, i), t[0]);
}
function bo(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), s = Math.max(e.x + e.width, t.x + t.width), o = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: s - n,
    height: o - i
  };
}
function el(e) {
  return mn(qe(e.map((t) => xo(t))), 16);
}
function xo(e) {
  return mn(e.lineHeight, mn(e.height, mn(e.fontSize, 16) * 1.2));
}
function us(e, t, n, i) {
  const s = t + i;
  return s <= 0 ? n : (e * t + n * i) / s;
}
function mn(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function qe(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function nl(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function il(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function hs(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class sl {
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
    U(this, "currentTool", S.Select);
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
    U(this, "canvasPool", mi.getInstance());
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
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Ja(t), this.drawingEngine = new qa(t, this.coordinateSystem), this.eventHandler = new Qa(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), Re.preloadModules();
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
    if (this.annotations = t.annotations.map((n) => Mn.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
        F.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
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
        const s = await M("get_screenshot_preview");
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
        const s = await M("get_screenshot_background");
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
      F.error("[截图] 创建后备背景失败", t);
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
            M("get_cached_monitor_info"),
            M("get_cached_window_list")
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
            M("get_window_info"),
            M("get_all_windows")
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
      F.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
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
        const r = await M("get_cached_monitor_info");
        s = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        s = await M("get_window_info");
      }
      let o;
      try {
        const r = await M("get_mouse_position"), l = s?.scale || 1;
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
      F.error("[截图] 初始窗口吸附检测失败", t);
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
    if (i !== W.None)
      switch (this.eventHandler.setCurrentOperation(i), this.eventHandler.startDrawing(n), i) {
        case W.Drawing:
          !this.selectionRect && this.currentTool === S.Select && (this.dragStartPosition = { ...n }, this.snappedWindow ? this.pendingSnapWindow = this.snappedWindow : (this.selectionRect = {
            x: n.x,
            y: n.y,
            width: 0,
            height: 0
          }, this.onStateChange?.()));
          break;
        case W.DrawingRect:
        case W.DrawingEllipse:
        case W.DrawingLine:
        case W.DrawingArrow:
        case W.DrawingPen:
        case W.DrawingMosaic:
          this.startAnnotation(n);
          break;
        case W.DrawingText:
          this.startTextInput(n), this.eventHandler.stopDrawing();
          break;
        case W.ColorPicking:
          this.handleColorPicking(n), this.eventHandler.stopDrawing();
          break;
        case W.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case W.EditingAnnotation:
          this.selectAnnotationAtPoint(n), this.selectedAnnotation && this.selectedAnnotation.getData().type === S.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case W.MovingAnnotation:
          this.startAnnotationDrag(n);
          break;
        case W.ResizingAnnotationNW:
        case W.ResizingAnnotationSE:
          this.startAnnotationResize(n, i);
          break;
        case W.Moving:
        case W.ResizingNW:
        case W.ResizingNE:
        case W.ResizingSW:
        case W.ResizingSE:
        case W.ResizingN:
        case W.ResizingS:
        case W.ResizingW:
        case W.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(n), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && Dt(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapWindow = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(n) : this.draggedAnnotation ? this.updateAnnotationDrag(n) : this.resizingAnnotation ? this.updateAnnotationResize(n) : this.selectionRect && this.currentTool === S.Select && this.updateSelectionRect(n, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === S.Select && !this.selectionRect) {
        const s = this.detectNearbyWindow(n);
        s !== this.snappedWindow && (this.snappedWindow = s, this.showSnapPreview = !!s, this.draw());
      }
      this.updateHoverState(n), this.currentTool === S.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(n, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = n, this.draw(), this.throttledUpdateColorPreview(n)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
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
    i?.getData().type === S.Text && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(n, i));
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
      case W.Drawing:
        this.selectionRect.width = t.x - n.startPoint.x, this.selectionRect.height = t.y - n.startPoint.y;
        break;
      case W.Moving:
        this.selectionRect.x += s, this.selectionRect.y += o;
        break;
      case W.ResizingNW:
        this.selectionRect.x += s, this.selectionRect.y += o, this.selectionRect.width -= s, this.selectionRect.height -= o;
        break;
      case W.ResizingNE:
        this.selectionRect.y += o, this.selectionRect.width += s, this.selectionRect.height -= o;
        break;
      case W.ResizingSW:
        this.selectionRect.x += s, this.selectionRect.width -= s, this.selectionRect.height += o;
        break;
      case W.ResizingSE:
        this.selectionRect.width += s, this.selectionRect.height += o;
        break;
      case W.ResizingN:
        this.selectionRect.y += o, this.selectionRect.height -= o;
        break;
      case W.ResizingS:
        this.selectionRect.height += o;
        break;
      case W.ResizingW:
        this.selectionRect.x += s, this.selectionRect.width -= s;
        break;
      case W.ResizingE:
        this.selectionRect.width += s;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n && n !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === S.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
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
      case W.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, n.points[1]]
        });
        break;
      case W.ResizingAnnotationSE:
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
    if (this.currentTool !== S.Select) {
      this.updateToolCursor();
      return;
    }
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = n && n.getData().type !== S.Mosaic ? n : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== S.Select) {
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
      [W.Moving]: "move",
      [W.ResizingNW]: "nw-resize",
      [W.ResizingNE]: "ne-resize",
      [W.ResizingSW]: "sw-resize",
      [W.ResizingSE]: "se-resize",
      [W.ResizingN]: "n-resize",
      [W.ResizingS]: "s-resize",
      [W.ResizingW]: "w-resize",
      [W.ResizingE]: "e-resize",
      [W.EditingAnnotation]: "pointer",
      [W.MovingAnnotation]: "move",
      [W.ResizingAnnotationNW]: "nw-resize",
      [W.ResizingAnnotationSE]: "se-resize",
      [W.Drawing]: "crosshair"
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
      case S.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case S.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case S.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case S.Rectangle:
      case S.Ellipse:
      case S.Line:
      case S.Arrow:
      case S.Text:
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
      const f = n + s / 2, _ = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(n, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle", t.fillText("正在识别翻译...", f, _), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const f = n + s / 2, _ = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(n, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, f, _), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: n, y: i, width: s, height: o }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let d, g;
    if (c) {
      const f = Math.max(0, Math.round(l.r * 0.1)), _ = Math.max(0, Math.round(l.g * 0.1)), m = Math.max(0, Math.round(l.b * 0.1));
      d = `rgba(${f}, ${_}, ${m}, 0.95)`, g = "rgba(255, 255, 255, 0.9)";
    } else {
      const f = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), _ = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), m = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      d = `rgba(${f}, ${_}, ${m}, 0.95)`, g = "rgba(0, 0, 0, 0.85)";
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
    })), k = y.filter((f) => f.isStructuredBlock), L = y.filter((f) => !f.isStructuredBlock);
    L.length > 0 && this.drawFlowedTranslationBlocks(t, L, n, i, a, s, o);
    for (const f of k)
      this.drawStructuredTranslationBlock(t, f, n, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, s, o, a, r) {
    const l = [...n].filter((w) => (w.translatedText || w.text).trim()).sort((w, C) => {
      const R = w.bbox.y - C.bbox.y;
      return Math.abs(R) > 4 ? R : w.bbox.x - C.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), d = o, g = (w, C, R) => l.map((z) => {
      const T = (z.translatedText || z.text).trim(), H = Math.max(12, Math.min(z.fontSize || 16, 48)), G = Math.max(8, Math.round(H * w)), Z = z.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', st = Math.max(
        o,
        Math.min(z.bbox.x + o, a * 0.38)
      ), it = C ? o : st, ut = Math.max(48, a - it - d), mt = z.lineHeight || G * 1.35, ht = Math.max(
        G * (R ? 1.04 : 1.14),
        Math.min(mt * w, G * (R ? 1.18 : 1.42))
      );
      return t.font = `${G}px ${Z}`, {
        text: T,
        fontSize: G,
        fontFamily: Z,
        lineHeight: ht,
        paragraphGap: R ? Math.max(1, ht * 0.16) : Math.max(3, ht * 0.35),
        x: i + it,
        lines: this.wrapTextToLines(t, T, ut)
      };
    }), y = (w) => w.reduce((C, R, z) => {
      const T = z === w.length - 1 ? 0 : R.paragraphGap;
      return C + R.lines.length * R.lineHeight + T;
    }, 0);
    let k = g(1, !1, !1), L = y(k);
    if (L > c) {
      const w = Math.max(0.56, c / L);
      k = g(w, !1, !1), L = y(k);
    }
    if (L > c && (k = g(1, !0, !1), L = y(k)), L > c) {
      const w = Math.max(0.38, c / L * 0.96);
      k = g(w, !0, !0), L = y(k);
    }
    if (L > c) {
      const w = Math.max(0.3, c / L * 0.94);
      k = g(w, !0, !0), L = y(k);
    }
    const f = Math.min(...l.map((w) => w.bbox.y)), _ = s + Math.max(o, Math.min(f, r - o)), m = s + r - o;
    let x = _ + L > m ? s + o : _;
    for (const w of k) {
      t.font = `${w.fontSize}px ${w.fontFamily}`;
      for (const C of w.lines)
        t.fillText(C, w.x, x), x += w.lineHeight;
      x += w.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, s, o, a, r) {
    const l = [...n.blocks].sort((g, y) => g.x - y.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), d = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const g of l) {
      const y = g.translatedText || g.text;
      if (!y.trim()) continue;
      const k = i + g.x + Math.min(4, o), L = s + g.y, f = l.find((w) => w.x > g.x), _ = f ? Math.max(g.width, f.x - g.x - 8) : Math.max(g.width, a - g.x - o), m = this.wrapTextToLines(t, y.trim(), _);
      let x = L;
      for (const w of m) {
        if (x + c > s + r) break;
        t.fillText(w, k, x), x += d;
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
    const c = this.backgroundImage.width, d = this.backgroundImage.height, g = this.canvas.width / s, y = this.canvas.height / s, k = c / g, L = d / y, f = t.x * k, _ = t.y * L, m = t.width * k, x = t.height * L;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        _,
        m,
        x,
        0,
        0,
        o,
        a
      );
    } catch (Q) {
      return F.error("[截图] 采样区域绘制失败", Q), this.canvasPool.release(r), i;
    }
    let w;
    try {
      w = l.getImageData(0, 0, o, a);
    } catch (Q) {
      return F.error("[截图] 获取像素数据失败", Q), this.canvasPool.release(r), i;
    }
    const C = w.data, R = Math.ceil(Math.sqrt(n)), z = o / (R + 1), T = a / (R + 1);
    let H = 0, G = 0, Z = 0, st = 0;
    for (let Q = 1; Q <= R; Q++)
      for (let ot = 1; ot <= R && !(st >= n); ot++) {
        const bt = Math.floor(ot * z), dt = Math.floor(Q * T);
        if (bt >= 0 && bt < o && dt >= 0 && dt < a) {
          const j = (dt * o + bt) * 4;
          j >= 0 && j + 2 < C.length && (H += C[j], G += C[j + 1], Z += C[j + 2], st++);
        }
      }
    if (this.canvasPool.release(r), st === 0)
      return i;
    const it = Math.round(H / st), ut = Math.round(G / st), mt = Math.round(Z / st), ht = this.getBrightness(it, ut, mt);
    return {
      r: it,
      g: ut,
      b: mt,
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
    const c = this.backgroundImage.width, d = this.backgroundImage.height, g = this.canvas.width / s, y = this.canvas.height / s, k = c / g, L = d / y, f = t.x * k, _ = t.y * L, m = t.width * k, x = t.height * L;
    try {
      l.drawImage(
        this.backgroundImage,
        f,
        _,
        m,
        x,
        0,
        0,
        o,
        a
      );
    } catch (Q) {
      return F.error("[截图] isUniformColor: 采样区域绘制失败", Q), this.canvasPool.release(r), !1;
    }
    let w;
    try {
      w = l.getImageData(0, 0, o, a);
    } catch (Q) {
      return F.error("[截图] isUniformColor: 获取像素数据失败", Q), this.canvasPool.release(r), !1;
    }
    const C = w.data, R = Math.ceil(Math.sqrt(i)), z = o / (R + 1), T = a / (R + 1), H = [];
    for (let Q = 1; Q <= R; Q++)
      for (let ot = 1; ot <= R && !(H.length >= i); ot++) {
        const bt = Math.floor(ot * z), dt = Math.floor(Q * T);
        if (bt >= 0 && bt < o && dt >= 0 && dt < a) {
          const j = (dt * o + bt) * 4;
          j >= 0 && j + 2 < C.length && H.push({
            r: C[j],
            g: C[j + 1],
            b: C[j + 2]
          });
        }
      }
    if (this.canvasPool.release(r), H.length < 2)
      return !1;
    const G = H.reduce((Q, ot) => Q + ot.r, 0) / H.length, Z = H.reduce((Q, ot) => Q + ot.g, 0) / H.length, st = H.reduce((Q, ot) => Q + ot.b, 0) / H.length, it = H.reduce((Q, ot) => Q + Math.pow(ot.r - G, 2), 0) / H.length, ut = H.reduce((Q, ot) => Q + Math.pow(ot.g - Z, 2), 0) / H.length, mt = H.reduce((Q, ot) => Q + Math.pow(ot.b - st, 2), 0) / H.length;
    return (it + ut + mt) / 3 < n;
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
        const i = Oi(this.snappedWindow).x, s = this.snappedWindow.y - 5, o = t.measureText(this.snappedWindow.title), a = 4;
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
    this.currentTool = t, this.clearSelection(), this.showGuides = t === S.Select, this.colorPickerState.isActive = t === S.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== S.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== S.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.showSnapPreview = !1, this.pendingSnapWindow = null, this.dragStartPosition = null, t !== S.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === S.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (Mn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === S.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = Mn.createAnnotation(
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
      case S.Rectangle:
      case S.Ellipse:
      case S.Line:
      case S.Arrow:
        t = this.getConstrainedShapeEndPoint(n.type, n.points[0], t), n.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case S.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case S.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  getConstrainedShapeEndPoint(t, n, i) {
    if (!this.isShiftPressed) return i;
    const s = i.x - n.x, o = i.y - n.y;
    if (t === S.Ellipse || t === S.Rectangle) {
      const a = Math.max(Math.abs(s), Math.abs(o));
      return {
        x: n.x + Math.sign(s || 1) * a,
        y: n.y + Math.sign(o || 1) * a
      };
    }
    if (t === S.Line || t === S.Arrow) {
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
      t.type === S.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const n = this.currentAnnotation.getData().points;
    if (n.length < 3) return;
    let i = n[0].x, s = n[0].x, o = n[0].y, a = n[0].y;
    n.forEach((k) => {
      i = Math.min(i, k.x), s = Math.max(s, k.x), o = Math.min(o, k.y), a = Math.max(a, k.y);
    });
    const r = s - i, l = a - o;
    let c = 0;
    for (let k = 1; k < n.length; k++)
      c += Dt(n[k - 1], n[k]);
    const g = Dt(n[0], n[n.length - 1]) / c, y = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (g > 0.85 || y > 5) {
      const k = n[0], L = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [k, L] });
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
    const i = Mn.createAnnotation(
      S.Text,
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
      const { x: n, y: i, width: s, height: o } = this.selectionRect, r = (await M("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, s, o);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await M("copy_to_clipboard", { image: c }) : await M("save_screenshot_to_file", { image: c });
    } catch (n) {
      const i = t === "save" ? "保存" : "复制";
      throw F.error(`[截图] ${i}截图失败`, n), new Error(`${i}截图失败: ${n?.message || n?.toString() || "未知错误"}`);
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
          let wt = 0;
          for (; !this.backgroundImage && wt < 3e3; )
            await new Promise((Y) => setTimeout(Y, 100)), wt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, d = Math.max(0, o.padding || 0), g = this.canvas.width / c, y = this.canvas.height / c, k = t - d, L = n - d, f = i + d * 2, _ = s + d * 2, m = Math.max(1, Math.round(f * c)), x = Math.max(1, Math.round(_ * c)), w = Math.max(0, k), C = Math.max(0, L), R = Math.min(g, k + f), z = Math.min(y, L + _), T = Math.max(0, R - w), H = Math.max(0, z - C), G = Math.round(w * c), Z = Math.round(C * c), st = Math.min(
          this.canvas.width - G,
          Math.round(T * c)
        ), it = Math.min(
          this.canvas.height - Z,
          Math.round(H * c)
        ), ut = Math.round((w - k) * c), mt = Math.round((C - L) * c), ht = document.createElement("canvas");
        ht.width = m, ht.height = x;
        const Q = ht.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!Q)
          throw new Error("无法获取2D绘图上下文");
        Q.imageSmoothingEnabled = !1, o.fillColor && (Q.fillStyle = o.fillColor, Q.fillRect(0, 0, m, x)), st > 0 && it > 0 && Q.drawImage(
          this.backgroundImage,
          G,
          Z,
          st,
          it,
          ut,
          mt,
          st,
          it
        );
        const bt = ht.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: bt,
          adjusted_width: m,
          adjusted_height: x,
          logical_x: k,
          logical_y: L,
          logical_width: f,
          logical_height: _
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
            }, k = this.drawingEngine.createScreenshotContext(
              l,
              g,
              y
            );
            this.annotations.forEach((L, f) => {
              try {
                L.drawToScreenshot(k);
              } catch (_) {
                F.error(`[截图] 绘制标注 ${f} 失败`, _);
              }
            });
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), s(d);
        } catch (d) {
          F.error("[截图] 绘制过程出错", d);
          try {
            const g = r.toDataURL("image/png");
            clearTimeout(a), s(g);
          } catch {
            clearTimeout(a), o(new Error(`渲染失败: ${d.message || d}`));
          }
        }
      }, c.onerror = (d) => {
        F.error("[截图] 图像加载失败", d), clearTimeout(a), o(new Error("图像加载失败"));
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === S.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === S.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const n = this.annotations.findIndex((i) => i === t);
    n !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(n, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字标注内容
  updateTextAnnotation(t, n) {
    if (t.getData().type === S.Text) {
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
        const { x: n, y: i, width: s, height: o } = this.selectionRect, a = await M("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), d = Math.round(s * r), g = Math.round(o * r), y = Math.round(a.x + window.innerWidth * r), k = t === "ocr" ? Math.round(l - Math.max(0, d - d) / 2) : l, L = t === "ocr" ? Math.max(a.x, Math.min(k, y - d)) : l, f = {}, _ = await this.cropFromBackground(n, i, s, o, f);
        if (!_?.image)
          throw new Error("Failed to crop from background image");
        const m = await this.renderWithAnnotations(_, r, "save");
        await M("create_pin_window", {
          mode: t,
          imageData: m,
          x: L,
          y: c,
          width: d,
          height: g
        }), this.onStateChange?.(), setTimeout(() => {
          new Sn("screenshot").close();
        }, 100);
      } catch (n) {
        throw F.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, n), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await M("get_window_info"), i = n?.scale || 1, s = Math.round(n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), o = Math.round(n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await M("get_pixel_color", {
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
        F.error("[截图] 获取像素颜色失败", n);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const n = await M("get_window_info"), i = n?.scale || 1, s = this.colorPickerState.zoomFactor, o = Math.floor(s / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await M("get_screen_preview", {
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
          const k = y.getImageData(o, o, 1, 1).data, L = { r: k[0], g: k[1], b: k[2] }, f = this.rgbToHex(L.r, L.g, L.b);
          this.colorPickerState.colorInfo = { rgb: L, hex: f, position: t };
        }
        this.draw();
      } catch (n) {
        F.error("[截图] 更新颜色预览失败", n);
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
        const { x: r, y: l, width: c, height: d } = this.selectionRect, g = window.devicePixelRatio || 1, y = c * g, k = d * g, L = this.canvasPool.acquire(y, k), f = L.getContext("2d");
        if (!f)
          throw this.canvasPool.release(L), new Error("无法创建临时canvas");
        const _ = r * g, m = l * g, x = performance.now();
        f.drawImage(
          this.backgroundImage,
          _,
          m,
          y,
          k,
          0,
          0,
          y,
          k
        ), n = Math.round(performance.now() - x);
        const w = performance.now(), { recognizeFromCanvas: C } = await Re.loadOCR();
        i = Math.round(performance.now() - w);
        const R = performance.now(), z = await C(L);
        s = Math.round(performance.now() - R), this.canvasPool.release(L);
        const T = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: z.confidence,
          rawLineCount: z.blocks.length,
          textLength: z.full_text.trim().length
        };
        F.info("[OCR] 识别耗时统计", T), Nt.log("[OCR] recognition timing", T);
        const H = z.blocks, G = performance.now(), Z = Ar(H);
        o = Math.round(performance.now() - G);
        const st = Z.map((O) => O.text).join(`

`), it = {
          rawLineCount: H.length,
          paragraphCount: Z.length,
          durationMs: o,
          paragraphs: Z.map((O, rt) => ({
            index: rt,
            text: O.text,
            blockCount: O.blocks.length,
            isCodeBlock: !!O.isCodeBlock,
            isStructuredBlock: !!O.isStructuredBlock,
            bbox: O.bbox,
            sourceBlocks: O.blocks.map((pt) => ({
              text: pt.text,
              x: pt.x,
              y: pt.y,
              width: pt.width,
              height: pt.height
            }))
          }))
        };
        if (F.info("[OCR] 版面重组完成", it), Nt.log("[OCR] layout reflow complete", it), !st || !st.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ut = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Ee(st));
        const mt = (O) => {
          const rt = O.trim();
          return !!(rt.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !rt.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let ht = "";
        const Q = Ee(st), ot = {
          detectedLanguage: Q,
          textLength: st.trim().length,
          textPreview: st.trim().slice(0, 500)
        };
        F.info("[OCR] 翻译语言检测完成", ot), Nt.log("[OCR] translation language detected", ot), Xe(Q) && (this.translationOverlay.sourceLanguage = Q, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Q));
        const bt = ut === "offline" ? Re.loadOfflineTranslator() : null, dt = (O) => O.includes("插件") && O.includes("未启用") ? O.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : O : ut === "offline" ? O.includes("未激活") || O.includes("未下载") || O.includes("运行时未安装") ? O : O.includes("超时") ? "模型加载超时，请重试" : O.includes("离线翻译暂仅支持") ? O : "离线翻译失败: " + O.substring(0, 50) : O.includes("timeout") || O.includes("超时") ? "翻译超时，请检查网络连接" : O.includes("network") || O.includes("网络") || O.includes("请求") || O.includes("令牌") ? "翻译失败，请检查网络连接" : O.trim() ? O.slice(0, 80) : "翻译失败，请检查网络连接", j = async () => {
          if (!bt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: O,
            canUseOfflineTranslation: rt,
            warmupOfflineTranslator: pt,
            getModelCacheInfo: _t
          } = await bt, St = rt();
          if (this.offlineModelActivated && !St)
            if ((await _t()).isCached)
              await pt();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return O;
        }, wt = async (O, rt, pt) => {
          if (!O.trim())
            return O;
          if (ut === "offline") {
            if (rt !== "en" || pt !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await j())(O);
          }
          return await M("translate_text", {
            text: O,
            from: rt,
            to: pt,
            engine: ut
          });
        }, Y = (O) => {
          const rt = O.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(rt) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(rt);
        }, Rt = async (O, rt, pt) => {
          const _t = O.trim();
          if (!_t || mt(_t))
            return O;
          const St = O.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (St) {
            const [, E, N, tt, q, b] = St, D = Ee(N), ct = Y(N) || !Xe(D) ? N : await wt(N, D, this.getAutoTargetLanguage(D)), lt = Ee(q), Pt = Xe(lt) && !mt(q) ? await wt(q, lt, this.getAutoTargetLanguage(lt)) : q;
            return `${E}${ct}${tt}${Pt}${b}`;
          }
          if (Y(_t))
            return O;
          const Mt = Ee(_t);
          if (!Xe(Mt))
            return O;
          const P = this.getAutoTargetLanguage(Mt), u = await wt(_t, Mt, P), h = {
            paragraphIndex: rt,
            blockIndex: pt,
            sourceLanguage: Mt,
            targetLanguage: P,
            sourceText: _t,
            translatedText: u.slice(0, 200)
          };
          return F.info("[OCR] 结构化块翻译完成", h), Nt.log("[OCR] structured block translation complete", h), u;
        }, Ht = async (O, rt) => {
          const pt = performance.now(), _t = (u) => ({
            index: rt,
            durationMs: Math.round(performance.now() - pt),
            ...u
          }), St = Ee(O.text), Mt = this.getAutoTargetLanguage(St), P = {
            index: rt,
            text: O.text,
            sourceLanguage: St,
            targetLanguage: Mt,
            engine: ut,
            structured: !!O.isStructuredBlock
          };
          if (F.info("[OCR] 段落翻译方向", P), Nt.log("[OCR] paragraph translation direction", P), !Xe(St)) {
            O.translatedText = O.text;
            const u = _t({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), h = {
              index: rt,
              detectedLanguage: St,
              durationMs: u.durationMs,
              text: O.text
            };
            return F.warn("[OCR] 跳过不支持的段落语言", h), Nt.log("[OCR] skip unsupported paragraph language", h), u;
          }
          try {
            if (O.isStructuredBlock && O.blocks.length > 0) {
              const E = async (tt, q) => {
                const b = await Rt(tt.text, rt, q);
                return tt.translatedText = b, b;
              }, N = [];
              if (ut === "offline")
                for (let tt = 0; tt < O.blocks.length; tt += 1)
                  N.push(await E(O.blocks[tt], tt));
              else
                N.push(
                  ...await Promise.all(
                    O.blocks.map((tt, q) => E(tt, q))
                  )
                );
              O.translatedText = N.join(" ");
            } else if (mt(O.text) || O.isCodeBlock) {
              O.translatedText = O.text;
              const E = O.isCodeBlock ? "code_block" : "command_like_text", N = _t({ skipped: !0, cancelled: !1 }), tt = {
                index: rt,
                reason: E,
                durationMs: N.durationMs,
                text: O.text
              };
              return F.info("[OCR] 跳过代码段翻译", tt), Nt.log("[OCR] skip code paragraph translation", tt), N;
            } else
              O.translatedText = await wt(
                O.text,
                St,
                Mt
              );
            const u = _t({ skipped: !1, cancelled: !1 }), h = {
              index: rt,
              durationMs: u.durationMs,
              sourceLanguage: St,
              targetLanguage: Mt,
              engine: ut,
              structured: !!O.isStructuredBlock,
              sourceLength: O.text.length,
              translatedLength: (O.translatedText || "").length,
              translatedPreview: (O.translatedText || "").slice(0, 300)
            };
            return F.info("[OCR] 段落翻译完成", h), Nt.log("[OCR] paragraph translation complete", h), u;
          } catch (u) {
            const h = u instanceof Error ? u.message : String(u);
            if (h === "翻译已取消")
              return _t({ skipped: !1, cancelled: !0 });
            O.translatedText = O.text;
            const E = dt(h), N = _t({
              skipped: !1,
              cancelled: !1,
              errorMessage: E
            }), tt = {
              index: rt,
              durationMs: N.durationMs,
              sourceLanguage: St,
              targetLanguage: Mt,
              engine: ut,
              error: h,
              structured: !!O.isStructuredBlock,
              text: O.text
            };
            return F.error("[OCR] 段落翻译失败", tt), Nt.log("[OCR] paragraph translation failed", tt), N;
          }
        }, Kt = performance.now();
        let Tt = [];
        if (ut === "offline")
          for (let O = 0; O < Z.length; O += 1) {
            const rt = await Ht(Z[O], O);
            if (Tt.push(rt), rt.cancelled)
              return;
            if (rt.errorMessage) {
              ht = rt.errorMessage;
              break;
            }
          }
        else {
          if (Tt = await Promise.all(
            Z.map((O, rt) => Ht(O, rt))
          ), Tt.some((O) => O.cancelled))
            return;
          ht = Tt.find((O) => O.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Kt);
        const xt = {
          durationMs: a,
          engine: ut,
          paragraphCount: Z.length,
          translatedParagraphCount: Tt.filter((O) => !O.skipped && !O.errorMessage).length,
          skippedParagraphCount: Tt.filter((O) => O.skipped).length,
          failedParagraphCount: Tt.filter((O) => !!O.errorMessage).length
        };
        F.info("[OCR] 翻译耗时统计", xt), Nt.log("[OCR] translation timing", xt);
        const jt = Z.map((O) => this.toDisplayParagraph(O, g)), Zt = jt.map((O) => this.toLegacyOverlayBlock(O));
        this.translationOverlay.blocks = Zt, this.translationOverlay.paragraphBlocks = jt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = ht || void 0;
        const qt = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: H.length,
          paragraphCount: Z.length,
          engine: ut
        };
        F.info("[OCR] 截图翻译总耗时统计", qt), Nt.log("[OCR] pipeline timing", qt), this.draw(), this.onStateChange?.();
      } catch (t) {
        F.error("[OCR] OCR翻译失败:", t);
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
      const { cancelOfflineTranslation: t } = await Re.loadOfflineTranslator();
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
    Re.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var ol = {
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
function al() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function rl(e, t, n) {
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
var ll = Symbol("icon-context");
function kt(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = al(), r = Se(ll, ol);
      return function() {
        var l = o.size, c = o.strokeWidth, d = o.strokeLinecap, g = o.strokeLinejoin, y = o.theme, k = o.fill, L = o.spin, f = rl(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: g,
          theme: y,
          fill: k
        }, r), _ = [r.prefix + "-icon"];
        return _.push(r.prefix + "-icon-" + e), t && r.rtl && _.push(r.prefix + "-icon-rtl"), L && _.push(r.prefix + "-icon-spin"), v("span", {
          class: _.join(" ")
        }, [n(f)]);
      };
    }
  };
  return i;
}
const cl = kt("arrow-left-up", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M11 11L36.4559 36.4558",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M29 11H11V29",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yi = kt("check", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wi = kt("close", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), li = kt("copy", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ul = kt("delete-four", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M8 11L40 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M18 5L30 5",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ds = kt("down", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hl = kt("download", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dl = kt("font-size", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M24 6V42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M16 42H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fl = kt("go-on", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fs = kt("loading", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _o = kt("minus", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gl = kt("more", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), v("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), v("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), ml = kt("mosaic", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M44 36H36V44H44V36Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M28 36H20V44H28V36Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M12 36H4V44H12V36Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M44 20H36V28H44V20Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M28 20H20V28H28V20Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M12 20H4V28H12V20Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M44 4H36V12H44V4Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M28 4H20V12H28V4Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M12 4H4V12H12V4Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M20 12H12V20H20V12Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M20 28H12V36H20V28Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M36 12H28V20H36V12Z",
    fill: e.colors[0]
  }, null), v("path", {
    d: "M36 28H28V36H36V28Z",
    fill: e.colors[0]
  }, null)]);
}), pl = kt("move-one", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yl = kt("picture", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gs = kt("pin", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [v("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), v("defs", null, [v("clipPath", {
    id: e.id + "1c742167"
  }, [v("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), ms = kt("platte", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), vi = kt("pushpin", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wl = kt("rectangle-one", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), vl = kt("redo", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M42 8V17H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), kl = kt("refresh", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), bl = kt("return", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = kt("round", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), ps = kt("save", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), v("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _l = kt("square", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Dn = kt("text-recognition", !1, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), So = kt("translate", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sl = kt("write", !0, function(e) {
  return v("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [v("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), v("path", {
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
function Cl(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ys = typeof window < "u", Fe = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Tl = (e, t, n) => Ll({ l: e, k: t, s: n }), Ll = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ft = (e) => typeof e == "number" && isFinite(e), Ml = (e) => Ni(e) === "[object Date]", Un = (e) => Ni(e) === "[object RegExp]", Zn = (e) => ft(e) && Object.keys(e).length === 0, Bt = Object.assign, Pl = Object.create, vt = (e = null) => Pl(e);
let ws;
const Nn = () => ws || (ws = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : vt());
function vs(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ks(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function El(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, s, o) => `${s}="${ks(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, s, o) => `${s}='${ks(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    e = e.replace(i, "$1javascript&#58;");
  }), e;
}
const Rl = Object.prototype.hasOwnProperty;
function oe(e, t) {
  return Rl.call(e, t);
}
const It = Array.isArray, Lt = (e) => typeof e == "function", X = (e) => typeof e == "string", At = (e) => typeof e == "boolean", gt = (e) => e !== null && typeof e == "object", Al = (e) => gt(e) && Lt(e.then) && Lt(e.catch), Co = Object.prototype.toString, Ni = (e) => Co.call(e), ft = (e) => Ni(e) === "[object Object]", Il = (e) => e == null ? "" : It(e) || ft(e) && e.toString === Co ? JSON.stringify(e, null, 2) : String(e);
function Wi(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const En = (e) => !gt(e) || It(e);
function Wn(e, t) {
  if (En(e) || En(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      o !== "__proto__" && (gt(i[o]) && !gt(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : vt()), En(s[o]) || En(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ol(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ki(e, t, n) {
  return { start: e, end: t };
}
const yt = {
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
}, zl = 17;
function qn(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function Dl(e) {
  throw e;
}
const re = " ", Nl = "\r", Yt = `
`, Wl = "\u2028", $l = "\u2029";
function Fl(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (T) => t[T] === Nl && t[T + 1] === Yt, r = (T) => t[T] === Yt, l = (T) => t[T] === $l, c = (T) => t[T] === Wl, d = (T) => a(T) || r(T) || l(T) || c(T), g = () => n, y = () => i, k = () => s, L = () => o, f = (T) => a(T) || l(T) || c(T) ? Yt : t[T], _ = () => f(n), m = () => f(n + o);
  function x() {
    return o = 0, d(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function w() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function C() {
    n = 0, i = 1, s = 1, o = 0;
  }
  function R(T = 0) {
    o = T;
  }
  function z() {
    const T = n + o;
    for (; T !== n; )
      x();
    o = 0;
  }
  return {
    index: g,
    line: y,
    column: k,
    peekOffset: L,
    charAt: f,
    currentChar: _,
    currentPeek: m,
    next: x,
    peek: w,
    reset: C,
    resetPeek: R,
    skipToPeek: z
  };
}
const ge = void 0, Bl = ".", bs = "'", Hl = "tokenizer";
function jl(e, t = {}) {
  const n = t.location !== !1, i = Fl(e), s = () => i.index(), o = () => Ol(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
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
  function g(u, h, E, ...N) {
    const tt = c();
    if (h.column += E, h.offset += E, d) {
      const q = n ? ki(tt.startLoc, h) : null, b = qn(u, q, {
        domain: Hl,
        args: N
      });
      d(b);
    }
  }
  function y(u, h, E) {
    u.endLoc = o(), u.currentType = h;
    const N = { type: h };
    return n && (N.loc = ki(u.startLoc, u.endLoc)), E != null && (N.value = E), N;
  }
  const k = (u) => y(
    u,
    13
    /* TokenTypes.EOF */
  );
  function L(u, h) {
    return u.currentChar() === h ? (u.next(), h) : (g(yt.EXPECTED_TOKEN, o(), 0, h), "");
  }
  function f(u) {
    let h = "";
    for (; u.currentPeek() === re || u.currentPeek() === Yt; )
      h += u.currentPeek(), u.peek();
    return h;
  }
  function _(u) {
    const h = f(u);
    return u.skipToPeek(), h;
  }
  function m(u) {
    if (u === ge)
      return !1;
    const h = u.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h === 95;
  }
  function x(u) {
    if (u === ge)
      return !1;
    const h = u.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function w(u, h) {
    const { currentType: E } = h;
    if (E !== 2)
      return !1;
    f(u);
    const N = m(u.currentPeek());
    return u.resetPeek(), N;
  }
  function C(u, h) {
    const { currentType: E } = h;
    if (E !== 2)
      return !1;
    f(u);
    const N = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), tt = x(N);
    return u.resetPeek(), tt;
  }
  function R(u, h) {
    const { currentType: E } = h;
    if (E !== 2)
      return !1;
    f(u);
    const N = u.currentPeek() === bs;
    return u.resetPeek(), N;
  }
  function z(u, h) {
    const { currentType: E } = h;
    if (E !== 7)
      return !1;
    f(u);
    const N = u.currentPeek() === ".";
    return u.resetPeek(), N;
  }
  function T(u, h) {
    const { currentType: E } = h;
    if (E !== 8)
      return !1;
    f(u);
    const N = m(u.currentPeek());
    return u.resetPeek(), N;
  }
  function H(u, h) {
    const { currentType: E } = h;
    if (!(E === 7 || E === 11))
      return !1;
    f(u);
    const N = u.currentPeek() === ":";
    return u.resetPeek(), N;
  }
  function G(u, h) {
    const { currentType: E } = h;
    if (E !== 9)
      return !1;
    const N = () => {
      const q = u.currentPeek();
      return q === "{" ? m(u.peek()) : q === "@" || q === "|" || q === ":" || q === "." || q === re || !q ? !1 : q === Yt ? (u.peek(), N()) : st(u, !1);
    }, tt = N();
    return u.resetPeek(), tt;
  }
  function Z(u) {
    f(u);
    const h = u.currentPeek() === "|";
    return u.resetPeek(), h;
  }
  function st(u, h = !0) {
    const E = (tt = !1, q = "") => {
      const b = u.currentPeek();
      return b === "{" || b === "@" || !b ? tt : b === "|" ? !(q === re || q === Yt) : b === re ? (u.peek(), E(!0, re)) : b === Yt ? (u.peek(), E(!0, Yt)) : !0;
    }, N = E();
    return h && u.resetPeek(), N;
  }
  function it(u, h) {
    const E = u.currentChar();
    return E === ge ? ge : h(E) ? (u.next(), E) : null;
  }
  function ut(u) {
    const h = u.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36;
  }
  function mt(u) {
    return it(u, ut);
  }
  function ht(u) {
    const h = u.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36 || // $
    h === 45;
  }
  function Q(u) {
    return it(u, ht);
  }
  function ot(u) {
    const h = u.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function bt(u) {
    return it(u, ot);
  }
  function dt(u) {
    const h = u.charCodeAt(0);
    return h >= 48 && h <= 57 || // 0-9
    h >= 65 && h <= 70 || // A-F
    h >= 97 && h <= 102;
  }
  function j(u) {
    return it(u, dt);
  }
  function wt(u) {
    let h = "", E = "";
    for (; h = bt(u); )
      E += h;
    return E;
  }
  function Y(u) {
    let h = "";
    for (; ; ) {
      const E = u.currentChar();
      if (E === "{" || E === "}" || E === "@" || E === "|" || !E)
        break;
      if (E === re || E === Yt)
        if (st(u))
          h += E, u.next();
        else {
          if (Z(u))
            break;
          h += E, u.next();
        }
      else
        h += E, u.next();
    }
    return h;
  }
  function Rt(u) {
    _(u);
    let h = "", E = "";
    for (; h = Q(u); )
      E += h;
    const N = u.currentChar();
    if (N && N !== "}" && N !== ge && N !== re && N !== Yt && N !== "　") {
      const tt = qt(u);
      return g(yt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, E + tt), E + tt;
    }
    return u.currentChar() === ge && g(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), E;
  }
  function Ht(u) {
    _(u);
    let h = "";
    return u.currentChar() === "-" ? (u.next(), h += `-${wt(u)}`) : h += wt(u), u.currentChar() === ge && g(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), h;
  }
  function Kt(u) {
    return u !== bs && u !== Yt;
  }
  function Tt(u) {
    _(u), L(u, "'");
    let h = "", E = "";
    for (; h = it(u, Kt); )
      h === "\\" ? E += xt(u) : E += h;
    const N = u.currentChar();
    return N === Yt || N === ge ? (g(yt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), N === Yt && (u.next(), L(u, "'")), E) : (L(u, "'"), E);
  }
  function xt(u) {
    const h = u.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return u.next(), `\\${h}`;
      case "u":
        return jt(u, h, 4);
      case "U":
        return jt(u, h, 6);
      default:
        return g(yt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, h), "";
    }
  }
  function jt(u, h, E) {
    L(u, h);
    let N = "";
    for (let tt = 0; tt < E; tt++) {
      const q = j(u);
      if (!q) {
        g(yt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${h}${N}${u.currentChar()}`);
        break;
      }
      N += q;
    }
    return `\\${h}${N}`;
  }
  function Zt(u) {
    return u !== "{" && u !== "}" && u !== re && u !== Yt;
  }
  function qt(u) {
    _(u);
    let h = "", E = "";
    for (; h = it(u, Zt); )
      E += h;
    return E;
  }
  function O(u) {
    let h = "", E = "";
    for (; h = mt(u); )
      E += h;
    return E;
  }
  function rt(u) {
    const h = (E) => {
      const N = u.currentChar();
      return N === "{" || N === "@" || N === "|" || N === "(" || N === ")" || !N || N === re ? E : (E += N, u.next(), h(E));
    };
    return h("");
  }
  function pt(u) {
    _(u);
    const h = L(
      u,
      "|"
      /* TokenChars.Pipe */
    );
    return _(u), h;
  }
  function _t(u, h) {
    let E = null;
    switch (u.currentChar()) {
      case "{":
        return h.braceNest >= 1 && g(yt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), u.next(), E = y(
          h,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), _(u), h.braceNest++, E;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && g(yt.EMPTY_PLACEHOLDER, o(), 0), u.next(), E = y(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), h.braceNest--, h.braceNest > 0 && _(u), h.inLinked && h.braceNest === 0 && (h.inLinked = !1), E;
      case "@":
        return h.braceNest > 0 && g(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), E = St(u, h) || k(h), h.braceNest = 0, E;
      default: {
        let tt = !0, q = !0, b = !0;
        if (Z(u))
          return h.braceNest > 0 && g(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), E = y(h, 1, pt(u)), h.braceNest = 0, h.inLinked = !1, E;
        if (h.braceNest > 0 && (h.currentType === 4 || h.currentType === 5 || h.currentType === 6))
          return g(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), h.braceNest = 0, Mt(u, h);
        if (tt = w(u, h))
          return E = y(h, 4, Rt(u)), _(u), E;
        if (q = C(u, h))
          return E = y(h, 5, Ht(u)), _(u), E;
        if (b = R(u, h))
          return E = y(h, 6, Tt(u)), _(u), E;
        if (!tt && !q && !b)
          return E = y(h, 12, qt(u)), g(yt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, E.value), _(u), E;
        break;
      }
    }
    return E;
  }
  function St(u, h) {
    const { currentType: E } = h;
    let N = null;
    const tt = u.currentChar();
    switch ((E === 7 || E === 8 || E === 11 || E === 9) && (tt === Yt || tt === re) && g(yt.INVALID_LINKED_FORMAT, o(), 0), tt) {
      case "@":
        return u.next(), N = y(
          h,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), h.inLinked = !0, N;
      case ".":
        return _(u), u.next(), y(
          h,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return _(u), u.next(), y(
          h,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Z(u) ? (N = y(h, 1, pt(u)), h.braceNest = 0, h.inLinked = !1, N) : z(u, h) || H(u, h) ? (_(u), St(u, h)) : T(u, h) ? (_(u), y(h, 11, O(u))) : G(u, h) ? (_(u), tt === "{" ? _t(u, h) || N : y(h, 10, rt(u))) : (E === 7 && g(yt.INVALID_LINKED_FORMAT, o(), 0), h.braceNest = 0, h.inLinked = !1, Mt(u, h));
    }
  }
  function Mt(u, h) {
    let E = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (h.braceNest > 0)
      return _t(u, h) || k(h);
    if (h.inLinked)
      return St(u, h) || k(h);
    switch (u.currentChar()) {
      case "{":
        return _t(u, h) || k(h);
      case "}":
        return g(yt.UNBALANCED_CLOSING_BRACE, o(), 0), u.next(), y(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return St(u, h) || k(h);
      default: {
        if (Z(u))
          return E = y(h, 1, pt(u)), h.braceNest = 0, h.inLinked = !1, E;
        if (st(u))
          return y(h, 0, Y(u));
        break;
      }
    }
    return E;
  }
  function P() {
    const { currentType: u, offset: h, startLoc: E, endLoc: N } = l;
    return l.lastType = u, l.lastOffset = h, l.lastStartLoc = E, l.lastEndLoc = N, l.offset = s(), l.startLoc = o(), i.currentChar() === ge ? y(
      l,
      13
      /* TokenTypes.EOF */
    ) : Mt(i, l);
  }
  return {
    nextToken: P,
    currentOffset: s,
    currentPosition: o,
    context: c
  };
}
const Ul = "parser", Vl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Yl(e, t, n) {
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
function Gl(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(m, x, w, C, ...R) {
    const z = m.currentPosition();
    if (z.offset += C, z.column += C, n) {
      const T = t ? ki(w, z) : null, H = qn(x, T, {
        domain: Ul,
        args: R
      });
      n(H);
    }
  }
  function s(m, x, w) {
    const C = { type: m };
    return t && (C.start = x, C.end = x, C.loc = { start: w, end: w }), C;
  }
  function o(m, x, w, C) {
    t && (m.end = x, m.loc && (m.loc.end = w));
  }
  function a(m, x) {
    const w = m.context(), C = s(3, w.offset, w.startLoc);
    return C.value = x, o(C, m.currentOffset(), m.currentPosition()), C;
  }
  function r(m, x) {
    const w = m.context(), { lastOffset: C, lastStartLoc: R } = w, z = s(5, C, R);
    return z.index = parseInt(x, 10), m.nextToken(), o(z, m.currentOffset(), m.currentPosition()), z;
  }
  function l(m, x) {
    const w = m.context(), { lastOffset: C, lastStartLoc: R } = w, z = s(4, C, R);
    return z.key = x, m.nextToken(), o(z, m.currentOffset(), m.currentPosition()), z;
  }
  function c(m, x) {
    const w = m.context(), { lastOffset: C, lastStartLoc: R } = w, z = s(9, C, R);
    return z.value = x.replace(Vl, Yl), m.nextToken(), o(z, m.currentOffset(), m.currentPosition()), z;
  }
  function d(m) {
    const x = m.nextToken(), w = m.context(), { lastOffset: C, lastStartLoc: R } = w, z = s(8, C, R);
    return x.type !== 11 ? (i(m, yt.UNEXPECTED_EMPTY_LINKED_MODIFIER, w.lastStartLoc, 0), z.value = "", o(z, C, R), {
      nextConsumeToken: x,
      node: z
    }) : (x.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, le(x)), z.value = x.value || "", o(z, m.currentOffset(), m.currentPosition()), {
      node: z
    });
  }
  function g(m, x) {
    const w = m.context(), C = s(7, w.offset, w.startLoc);
    return C.value = x, o(C, m.currentOffset(), m.currentPosition()), C;
  }
  function y(m) {
    const x = m.context(), w = s(6, x.offset, x.startLoc);
    let C = m.nextToken();
    if (C.type === 8) {
      const R = d(m);
      w.modifier = R.node, C = R.nextConsumeToken || m.nextToken();
    }
    switch (C.type !== 9 && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(C)), C = m.nextToken(), C.type === 2 && (C = m.nextToken()), C.type) {
      case 10:
        C.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(C)), w.key = g(m, C.value || "");
        break;
      case 4:
        C.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(C)), w.key = l(m, C.value || "");
        break;
      case 5:
        C.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(C)), w.key = r(m, C.value || "");
        break;
      case 6:
        C.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(C)), w.key = c(m, C.value || "");
        break;
      default: {
        i(m, yt.UNEXPECTED_EMPTY_LINKED_KEY, x.lastStartLoc, 0);
        const R = m.context(), z = s(7, R.offset, R.startLoc);
        return z.value = "", o(z, R.offset, R.startLoc), w.key = z, o(w, R.offset, R.startLoc), {
          nextConsumeToken: C,
          node: w
        };
      }
    }
    return o(w, m.currentOffset(), m.currentPosition()), {
      node: w
    };
  }
  function k(m) {
    const x = m.context(), w = x.currentType === 1 ? m.currentOffset() : x.offset, C = x.currentType === 1 ? x.endLoc : x.startLoc, R = s(2, w, C);
    R.items = [];
    let z = null;
    do {
      const G = z || m.nextToken();
      switch (z = null, G.type) {
        case 0:
          G.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(G)), R.items.push(a(m, G.value || ""));
          break;
        case 5:
          G.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(G)), R.items.push(r(m, G.value || ""));
          break;
        case 4:
          G.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(G)), R.items.push(l(m, G.value || ""));
          break;
        case 6:
          G.value == null && i(m, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(G)), R.items.push(c(m, G.value || ""));
          break;
        case 7: {
          const Z = y(m);
          R.items.push(Z.node), z = Z.nextConsumeToken || null;
          break;
        }
      }
    } while (x.currentType !== 13 && x.currentType !== 1);
    const T = x.currentType === 1 ? x.lastOffset : m.currentOffset(), H = x.currentType === 1 ? x.lastEndLoc : m.currentPosition();
    return o(R, T, H), R;
  }
  function L(m, x, w, C) {
    const R = m.context();
    let z = C.items.length === 0;
    const T = s(1, x, w);
    T.cases = [], T.cases.push(C);
    do {
      const H = k(m);
      z || (z = H.items.length === 0), T.cases.push(H);
    } while (R.currentType !== 13);
    return z && i(m, yt.MUST_HAVE_MESSAGES_IN_PLURAL, w, 0), o(T, m.currentOffset(), m.currentPosition()), T;
  }
  function f(m) {
    const x = m.context(), { offset: w, startLoc: C } = x, R = k(m);
    return x.currentType === 13 ? R : L(m, w, C, R);
  }
  function _(m) {
    const x = jl(m, Bt({}, e)), w = x.context(), C = s(0, w.offset, w.startLoc);
    return t && C.loc && (C.loc.source = m), C.body = f(x), e.onCacheKey && (C.cacheKey = e.onCacheKey(m)), w.currentType !== 13 && i(x, yt.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, m[w.offset] || ""), o(C, x.currentOffset(), x.currentPosition()), C;
  }
  return { parse: _ };
}
function le(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Xl(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function xs(e, t) {
  for (let n = 0; n < e.length; n++)
    $i(e[n], t);
}
function $i(e, t) {
  switch (e.type) {
    case 1:
      xs(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      xs(e.items, t);
      break;
    case 6: {
      $i(e.key, t), t.helper(
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
function Kl(e, t = {}) {
  const n = Xl(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && $i(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function Zl(e) {
  const t = e.body;
  return t.type === 2 ? _s(t) : t.cases.forEach((n) => _s(n)), e;
}
function _s(e) {
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
      e.static = Wi(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
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
      for (let i = 0; i < n.length; i++)
        Ke(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        Ke(n[i]);
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
function ql(e, t) {
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
  function l(f, _) {
    a.code += f;
  }
  function c(f, _ = !0) {
    const m = _ ? i : "";
    l(s ? m + "  ".repeat(f) : m);
  }
  function d(f = !0) {
    const _ = ++a.indentLevel;
    f && c(_);
  }
  function g(f = !0) {
    const _ = --a.indentLevel;
    f && c(_);
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
function Jl(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Je(e, t.key), t.modifier ? (e.push(", "), Je(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ql(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let o = 0; o < s && (Je(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function tc(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let o = 0; o < s && (Je(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function ec(e, t) {
  t.body ? Je(e, t.body) : e.push("null");
}
function Je(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ec(e, t);
      break;
    case 1:
      tc(e, t);
      break;
    case 2:
      Ql(e, t);
      break;
    case 6:
      Jl(e, t);
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
const nc = (e, t = {}) => {
  const n = X(t.mode) ? t.mode : "normal", i = X(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], r = ql(e, {
    filename: i,
    breakLineCode: s,
    needIndent: o
  });
  r.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), r.indent(o), a.length > 0 && (r.push(`const { ${Wi(a.map((d) => `${d}: _${d}`), ", ")} } = ctx`), r.newline()), r.push("return "), Je(r, e), r.deindent(o), r.push("}"), delete e.helpers;
  const { code: l, map: c } = r.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function ic(e, t = {}) {
  const n = Bt({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = Gl(n).parse(e);
  return i ? (o && Zl(r), s && Ke(r), { ast: r, code: "" }) : (Kl(r, n), nc(r, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function sc() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Nn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function he(e) {
  return gt(e) && Fi(e) === 0 && (oe(e, "b") || oe(e, "body"));
}
const To = ["b", "body"];
function oc(e) {
  return Ce(e, To);
}
const Lo = ["c", "cases"];
function ac(e) {
  return Ce(e, Lo, []);
}
const Mo = ["s", "static"];
function rc(e) {
  return Ce(e, Mo);
}
const Po = ["i", "items"];
function lc(e) {
  return Ce(e, Po, []);
}
const Eo = ["t", "type"];
function Fi(e) {
  return Ce(e, Eo);
}
const Ro = ["v", "value"];
function Rn(e, t) {
  const n = Ce(e, Ro);
  if (n != null)
    return n;
  throw vn(t);
}
const Ao = ["m", "modifier"];
function cc(e) {
  return Ce(e, Ao);
}
const Io = ["k", "key"];
function uc(e) {
  const t = Ce(e, Io);
  if (t)
    return t;
  throw vn(
    6
    /* NodeTypes.Linked */
  );
}
function Ce(e, t, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (oe(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const Oo = [
  ...To,
  ...Lo,
  ...Mo,
  ...Po,
  ...Io,
  ...Ao,
  ...Ro,
  ...Eo
];
function vn(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ci(e) {
  return (n) => hc(n, e);
}
function hc(e, t) {
  const n = oc(t);
  if (n == null)
    throw vn(
      0
      /* NodeTypes.Resource */
    );
  if (Fi(n) === 1) {
    const o = ac(n);
    return e.plural(o.reduce((a, r) => [
      ...a,
      Ss(e, r)
    ], []));
  } else
    return Ss(e, n);
}
function Ss(e, t) {
  const n = rc(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = lc(t).reduce((s, o) => [...s, bi(e, o)], []);
    return e.normalize(i);
  }
}
function bi(e, t) {
  const n = Fi(t);
  switch (n) {
    case 3:
      return Rn(t, n);
    case 9:
      return Rn(t, n);
    case 4: {
      const i = t;
      if (oe(i, "k") && i.k)
        return e.interpolate(e.named(i.k));
      if (oe(i, "key") && i.key)
        return e.interpolate(e.named(i.key));
      throw vn(n);
    }
    case 5: {
      const i = t;
      if (oe(i, "i") && Ft(i.i))
        return e.interpolate(e.list(i.i));
      if (oe(i, "index") && Ft(i.index))
        return e.interpolate(e.list(i.index));
      throw vn(n);
    }
    case 6: {
      const i = t, s = cc(i), o = uc(i);
      return e.linked(bi(e, o), s ? bi(e, s) : void 0, e.type);
    }
    case 7:
      return Rn(t, n);
    case 8:
      return Rn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const dc = (e) => e;
let An = vt();
function fc(e, t = {}) {
  let n = !1;
  const i = t.onError || Dl;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...ic(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function gc(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && X(e)) {
    At(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || dc)(e), s = An[i];
    if (s)
      return s;
    const { ast: o, detectError: a } = fc(e, {
      ...t,
      location: !1,
      jit: !0
    }), r = ci(o);
    return a ? r : An[i] = r;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = An[n];
      return i || (An[n] = ci(e));
    } else
      return ci(e);
  }
}
const ye = {
  INVALID_ARGUMENT: zl,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, mc = 24;
function we(e) {
  return qn(e, null, void 0);
}
function Bi(e, t) {
  return t.locale != null ? Cs(t.locale) : Cs(e.locale);
}
let ui;
function Cs(e) {
  if (X(e))
    return e;
  if (Lt(e)) {
    if (e.resolvedOnce && ui != null)
      return ui;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Al(t))
        throw we(ye.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ui = t;
    } else
      throw we(ye.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw we(ye.NOT_SUPPORT_LOCALE_TYPE);
}
function pc(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...It(t) ? t : gt(t) ? Object.keys(t) : X(t) ? [t] : [n]
  ])];
}
function zo(e, t, n) {
  const i = X(n) ? n : Vn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; It(a); )
      a = Ts(o, a, t);
    const r = It(t) || !ft(t) ? t : t.default ? t.default : null;
    a = X(r) ? [r] : r, It(a) && Ts(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function Ts(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && At(i); s++) {
    const o = t[s];
    X(o) && (i = yc(e, t[s], n));
  }
  return i;
}
function yc(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = wc(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function wc(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (It(n) || ft(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const Te = [];
Te[
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
Te[
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
Te[
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
Te[
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
Te[
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
Te[
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
Te[
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
const vc = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function kc(e) {
  return vc.test(e);
}
function bc(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function xc(e) {
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
function _c(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : kc(t) ? bc(t) : "*" + t;
}
function Sc(e) {
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
      if (s = 0, a === void 0 || (a = _c(a), a === !1))
        return !1;
      y[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function k() {
    const L = e[n + 1];
    if (i === 5 && L === "'" || i === 6 && L === '"')
      return n++, r = "\\" + L, y[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, o = e[n], !(o === "\\" && k())) {
      if (l = xc(o), g = Te[i], c = g[l] || g.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (d = y[c[1]], d && (r = o, d() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const Ls = /* @__PURE__ */ new Map();
function Cc(e, t) {
  return gt(e) ? e[t] : null;
}
function Tc(e, t) {
  if (!gt(e))
    return null;
  let n = Ls.get(t);
  if (n || (n = Sc(t), n && Ls.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = n[o];
    if (Oo.includes(a) && he(s))
      return null;
    const r = s[a];
    if (r === void 0 || Lt(s))
      return null;
    s = r, o++;
  }
  return s;
}
const Lc = "11.2.2", Jn = -1, Vn = "en-US", Ms = "", Ps = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Mc() {
  return {
    upper: (e, t) => t === "text" && X(e) ? e.toUpperCase() : t === "vnode" && gt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && X(e) ? e.toLowerCase() : t === "vnode" && gt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && X(e) ? Ps(e) : t === "vnode" && gt(e) && "__v_isVNode" in e ? Ps(e.children) : e
  };
}
let Do;
function Pc(e) {
  Do = e;
}
let No;
function Ec(e) {
  No = e;
}
let Wo;
function Rc(e) {
  Wo = e;
}
let $o = null;
const Es = (e) => {
  $o = e;
}, Ac = () => $o;
let Rs = 0;
function Ic(e = {}) {
  const t = Lt(e.onWarn) ? e.onWarn : Cl, n = X(e.version) ? e.version : Lc, i = X(e.locale) || Lt(e.locale) ? e.locale : Vn, s = Lt(i) ? Vn : i, o = It(e.fallbackLocale) || ft(e.fallbackLocale) || X(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = ft(e.messages) ? e.messages : hi(s), r = ft(e.datetimeFormats) ? e.datetimeFormats : hi(s), l = ft(e.numberFormats) ? e.numberFormats : hi(s), c = Bt(vt(), e.modifiers, Mc()), d = e.pluralRules || vt(), g = Lt(e.missing) ? e.missing : null, y = At(e.missingWarn) || Un(e.missingWarn) ? e.missingWarn : !0, k = At(e.fallbackWarn) || Un(e.fallbackWarn) ? e.fallbackWarn : !0, L = !!e.fallbackFormat, f = !!e.unresolving, _ = Lt(e.postTranslation) ? e.postTranslation : null, m = ft(e.processor) ? e.processor : null, x = At(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter, C = Lt(e.messageCompiler) ? e.messageCompiler : Do, R = Lt(e.messageResolver) ? e.messageResolver : No || Cc, z = Lt(e.localeFallbacker) ? e.localeFallbacker : Wo || pc, T = gt(e.fallbackContext) ? e.fallbackContext : void 0, H = e, G = gt(H.__datetimeFormatters) ? H.__datetimeFormatters : /* @__PURE__ */ new Map(), Z = gt(H.__numberFormatters) ? H.__numberFormatters : /* @__PURE__ */ new Map(), st = gt(H.__meta) ? H.__meta : {};
  Rs++;
  const it = {
    version: n,
    cid: Rs,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: d,
    missing: g,
    missingWarn: y,
    fallbackWarn: k,
    fallbackFormat: L,
    unresolving: f,
    postTranslation: _,
    processor: m,
    warnHtmlMessage: x,
    escapeParameter: w,
    messageCompiler: C,
    messageResolver: R,
    localeFallbacker: z,
    fallbackContext: T,
    onWarn: t,
    __meta: st
  };
  return it.datetimeFormats = r, it.numberFormats = l, it.__datetimeFormatters = G, it.__numberFormatters = Z, it;
}
const hi = (e) => ({ [e]: vt() });
function Hi(e, t, n, i, s) {
  const { missing: o, onWarn: a } = e;
  if (o !== null) {
    const r = o(e, n, t, s);
    return X(r) ? r : t;
  } else
    return t;
}
function cn(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Oc(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function zc(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (Oc(e, t[i]))
      return !0;
  return !1;
}
function As(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e, [l, c, d, g] = xi(...t), y = At(d.missingWarn) ? d.missingWarn : e.missingWarn;
  At(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const k = !!d.part, L = Bi(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    L
  );
  if (!X(l) || l === "")
    return new Intl.DateTimeFormat(L, g).format(c);
  let _ = {}, m, x = null;
  const w = "datetime format";
  for (let z = 0; z < f.length && (m = f[z], _ = n[m] || {}, x = _[l], !ft(x)); z++)
    Hi(e, l, m, y, w);
  if (!ft(x) || !X(m))
    return i ? Jn : l;
  let C = `${m}__${l}`;
  Zn(g) || (C = `${C}__${JSON.stringify(g)}`);
  let R = r.get(C);
  return R || (R = new Intl.DateTimeFormat(m, Bt({}, x, g)), r.set(C, R)), k ? R.formatToParts(c) : R.format(c);
}
const Fo = [
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
function xi(...e) {
  const [t, n, i, s] = e, o = vt();
  let a = vt(), r;
  if (X(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw we(ye.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    r = new Date(c);
    try {
      r.toISOString();
    } catch {
      throw we(ye.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ml(t)) {
    if (isNaN(t.getTime()))
      throw we(ye.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (Ft(t))
    r = t;
  else
    throw we(ye.INVALID_ARGUMENT);
  return X(n) ? o.key = n : ft(n) && Object.keys(n).forEach((l) => {
    Fo.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), X(i) ? o.locale = i : ft(i) && (a = i), ft(s) && (a = s), [o.key || "", r, o, a];
}
function Is(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function Os(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e, [l, c, d, g] = _i(...t), y = At(d.missingWarn) ? d.missingWarn : e.missingWarn;
  At(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const k = !!d.part, L = Bi(e, d), f = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    L
  );
  if (!X(l) || l === "")
    return new Intl.NumberFormat(L, g).format(c);
  let _ = {}, m, x = null;
  const w = "number format";
  for (let z = 0; z < f.length && (m = f[z], _ = n[m] || {}, x = _[l], !ft(x)); z++)
    Hi(e, l, m, y, w);
  if (!ft(x) || !X(m))
    return i ? Jn : l;
  let C = `${m}__${l}`;
  Zn(g) || (C = `${C}__${JSON.stringify(g)}`);
  let R = r.get(C);
  return R || (R = new Intl.NumberFormat(m, Bt({}, x, g)), r.set(C, R)), k ? R.formatToParts(c) : R.format(c);
}
const Bo = [
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
function _i(...e) {
  const [t, n, i, s] = e, o = vt();
  let a = vt();
  if (!Ft(t))
    throw we(ye.INVALID_ARGUMENT);
  const r = t;
  return X(n) ? o.key = n : ft(n) && Object.keys(n).forEach((l) => {
    Bo.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), X(i) ? o.locale = i : ft(i) && (a = i), ft(s) && (a = s), [o.key || "", r, o, a];
}
function zs(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const Dc = (e) => e, Nc = (e) => "", Wc = "text", $c = (e) => e.length === 0 ? "" : Wi(e), Fc = Il;
function Ds(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Bc(e) {
  const t = Ft(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ft(e.named.count) || Ft(e.named.n)) ? Ft(e.named.count) ? e.named.count : Ft(e.named.n) ? e.named.n : t : t;
}
function Hc(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function jc(e = {}) {
  const t = e.locale, n = Bc(e), i = gt(e.pluralRules) && X(t) && Lt(e.pluralRules[t]) ? e.pluralRules[t] : Ds, s = gt(e.pluralRules) && X(t) && Lt(e.pluralRules[t]) ? Ds : void 0, o = (m) => m[i(n, m.length, s)], a = e.list || [], r = (m) => a[m], l = e.named || vt();
  Ft(e.pluralIndex) && Hc(n, l);
  const c = (m) => l[m];
  function d(m, x) {
    const w = Lt(e.messages) ? e.messages(m, !!x) : gt(e.messages) ? e.messages[m] : !1;
    return w || (e.parent ? e.parent.message(m) : Nc);
  }
  const g = (m) => e.modifiers ? e.modifiers[m] : Dc, y = ft(e.processor) && Lt(e.processor.normalize) ? e.processor.normalize : $c, k = ft(e.processor) && Lt(e.processor.interpolate) ? e.processor.interpolate : Fc, L = ft(e.processor) && X(e.processor.type) ? e.processor.type : Wc, _ = {
    list: r,
    named: c,
    plural: o,
    linked: (m, ...x) => {
      const [w, C] = x;
      let R = "text", z = "";
      x.length === 1 ? gt(w) ? (z = w.modifier || z, R = w.type || R) : X(w) && (z = w || z) : x.length === 2 && (X(w) && (z = w || z), X(C) && (R = C || R));
      const T = d(m, !0)(_), H = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        R === "vnode" && It(T) && z ? T[0] : T
      );
      return z ? g(z)(H, R) : H;
    },
    message: d,
    type: L,
    interpolate: k,
    normalize: y,
    values: Bt(vt(), a, l)
  };
  return _;
}
const Ns = () => "", ve = (e) => Lt(e);
function Ws(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = Si(...t), d = At(c.missingWarn) ? c.missingWarn : e.missingWarn, g = At(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, y = At(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, k = !!c.resolvedMessage, L = X(c.default) || At(c.default) ? At(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, f = n || L != null && (X(L) || Lt(L)), _ = Bi(e, c);
  y && Uc(c);
  let [m, x, w] = k ? [
    l,
    _,
    r[_] || vt()
  ] : Ho(e, l, _, a, g, d), C = m, R = l;
  if (!k && !(X(C) || he(C) || ve(C)) && f && (C = L, R = C), !k && (!(X(C) || he(C) || ve(C)) || !X(x)))
    return s ? Jn : l;
  let z = !1;
  const T = () => {
    z = !0;
  }, H = ve(C) ? C : jo(e, l, x, C, R, T);
  if (z)
    return C;
  const G = Gc(e, x, w, c), Z = jc(G), st = Vc(e, H, Z);
  let it = i ? i(st, l) : st;
  return y && X(it) && (it = El(it)), it;
}
function Uc(e) {
  It(e.list) ? e.list = e.list.map((t) => X(t) ? vs(t) : t) : gt(e.named) && Object.keys(e.named).forEach((t) => {
    X(e.named[t]) && (e.named[t] = vs(e.named[t]));
  });
}
function Ho(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, d = c(e, i, n);
  let g = vt(), y, k = null;
  const L = "translate";
  for (let f = 0; f < d.length && (y = d[f], g = a[y] || vt(), (k = l(g, t)) === null && (k = g[t]), !(X(k) || he(k) || ve(k))); f++)
    if (!zc(y, d)) {
      const _ = Hi(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        y,
        o,
        L
      );
      _ !== t && (k = _);
    }
  return [k, y, g];
}
function jo(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (ve(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => i;
    return c.locale = n, c.key = t, c;
  }
  const l = a(i, Yc(e, n, s, i, r, o));
  return l.locale = n, l.key = t, l.source = i, l;
}
function Vc(e, t, n) {
  return t(n);
}
function Si(...e) {
  const [t, n, i] = e, s = vt();
  if (!X(t) && !Ft(t) && !ve(t) && !he(t))
    throw we(ye.INVALID_ARGUMENT);
  const o = Ft(t) ? String(t) : (ve(t), t);
  return Ft(n) ? s.plural = n : X(n) ? s.default = n : ft(n) && !Zn(n) ? s.named = n : It(n) && (s.list = n), Ft(i) ? s.plural = i : X(i) ? s.default = i : ft(i) && Bt(s, i), [o, s];
}
function Yc(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => Tl(t, n, a)
  };
}
function Gc(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: d } = e, y = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (k, L) => {
      let f = a(n, k);
      if (f == null && (d || L)) {
        const [, , _] = Ho(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          k,
          t,
          r,
          l,
          c
        );
        f = a(_, k);
      }
      if (X(f) || he(f)) {
        let _ = !1;
        const x = jo(e, k, t, f, k, () => {
          _ = !0;
        });
        return _ ? Ns : x;
      } else return ve(f) ? f : Ns;
    }
  };
  return e.processor && (y.processor = e.processor), i.list && (y.list = i.list), i.named && (y.named = i.named), Ft(i.plural) && (y.pluralIndex = i.plural), y;
}
sc();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Xc = "11.2.2";
function Kc() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Nn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Nn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Nn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Qe = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: mc,
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
function kn(e, ...t) {
  return qn(e, null, void 0);
}
const Ci = /* @__PURE__ */ Fe("__translateVNode"), Ti = /* @__PURE__ */ Fe("__datetimeParts"), Li = /* @__PURE__ */ Fe("__numberParts"), Zc = Fe("__setPluralRules"), Uo = /* @__PURE__ */ Fe("__injectWithOption"), Mi = /* @__PURE__ */ Fe("__dispose");
function bn(e) {
  if (!gt(e) || he(e))
    return e;
  for (const t in e)
    if (oe(e, t))
      if (!t.includes("."))
        gt(e[t]) && bn(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = vt()), !gt(s[n[a]])) {
            o = !0;
            break;
          }
          s = s[n[a]];
        }
        if (o || (he(s) ? Oo.includes(n[i]) || delete e[t] : (s[n[i]] = e[t], delete e[t])), !he(s)) {
          const a = s[n[i]];
          gt(a) && bn(a);
        }
      }
  return e;
}
function Vo(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = ft(n) ? n : It(i) ? vt() : { [e]: vt() };
  if (It(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || vt(), Wn(c, a[l])) : Wn(c, a);
    } else
      X(r) && Wn(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      oe(a, r) && bn(a[r]);
  return a;
}
function qc(e) {
  return e.type;
}
function Jc(e, t, n) {
  let i = gt(t.messages) ? t.messages : vt();
  "__i18nGlobal" in n && (i = Vo(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, i[o]);
  });
  {
    if (gt(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (gt(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function $s(e) {
  return v(Ma, null, e, 0);
}
function Yo() {
  return "currentInstance" in oi ? oi["currentInstance"] : oi.getCurrentInstance();
}
const Fs = () => [], Qc = () => !1;
let Bs = 0;
function Hs(e) {
  return (t, n, i, s) => e(n, i, Yo() || void 0, s);
}
function tu(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = ys ? J : La;
  let a = At(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : X(e.locale) ? e.locale : Vn
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : X(e.fallbackLocale) || It(e.fallbackLocale) || ft(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(Vo(r.value, e)), d = o(ft(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), g = o(ft(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let y = t ? t.missingWarn : At(e.missingWarn) || Un(e.missingWarn) ? e.missingWarn : !0, k = t ? t.fallbackWarn : At(e.fallbackWarn) || Un(e.fallbackWarn) ? e.fallbackWarn : !0, L = t ? t.fallbackRoot : At(e.fallbackRoot) ? e.fallbackRoot : !0, f = !!e.fallbackFormat, _ = Lt(e.missing) ? e.missing : null, m = Lt(e.missing) ? Hs(e.missing) : null, x = Lt(e.postTranslation) ? e.postTranslation : null, w = t ? t.warnHtmlMessage : At(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter;
  const R = t ? t.modifiers : ft(e.modifiers) ? e.modifiers : {};
  let z = e.pluralRules || t && t.pluralRules, T;
  T = (() => {
    i && Es(null);
    const b = {
      version: Xc,
      locale: r.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: R,
      pluralRules: z,
      missing: m === null ? void 0 : m,
      missingWarn: y,
      fallbackWarn: k,
      fallbackFormat: f,
      unresolving: !0,
      postTranslation: x === null ? void 0 : x,
      warnHtmlMessage: w,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    b.datetimeFormats = d.value, b.numberFormats = g.value, b.__datetimeFormatters = ft(T) ? T.__datetimeFormatters : void 0, b.__numberFormatters = ft(T) ? T.__numberFormatters : void 0;
    const D = Ic(b);
    return i && Es(D), D;
  })(), cn(T, r.value, l.value);
  function G() {
    return [
      r.value,
      l.value,
      c.value,
      d.value,
      g.value
    ];
  }
  const Z = V({
    get: () => r.value,
    set: (b) => {
      T.locale = b, r.value = b;
    }
  }), st = V({
    get: () => l.value,
    set: (b) => {
      T.fallbackLocale = b, l.value = b, cn(T, r.value, b);
    }
  }), it = V(() => c.value), ut = /* @__PURE__ */ V(() => d.value), mt = /* @__PURE__ */ V(() => g.value);
  function ht() {
    return Lt(x) ? x : null;
  }
  function Q(b) {
    x = b, T.postTranslation = b;
  }
  function ot() {
    return _;
  }
  function bt(b) {
    b !== null && (m = Hs(b)), _ = b, T.missing = m;
  }
  const dt = (b, D, ct, lt, Pt, Le) => {
    G();
    let de;
    try {
      i || (T.fallbackContext = t ? Ac() : void 0), de = b(T);
    } finally {
      i || (T.fallbackContext = void 0);
    }
    if (ct !== "translate exists" && // for not `te` (e.g `t`)
    Ft(de) && de === Jn || ct === "translate exists" && !de) {
      const [Tn, qi] = D();
      return t && L ? lt(t) : Pt(Tn);
    } else {
      if (Le(de))
        return de;
      throw kn(Qe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function j(...b) {
    return dt((D) => Reflect.apply(Ws, null, [D, ...b]), () => Si(...b), "translate", (D) => Reflect.apply(D.t, D, [...b]), (D) => D, (D) => X(D));
  }
  function wt(...b) {
    const [D, ct, lt] = b;
    if (lt && !gt(lt))
      throw kn(Qe.INVALID_ARGUMENT);
    return j(D, ct, Bt({ resolvedMessage: !0 }, lt || {}));
  }
  function Y(...b) {
    return dt((D) => Reflect.apply(As, null, [D, ...b]), () => xi(...b), "datetime format", (D) => Reflect.apply(D.d, D, [...b]), () => Ms, (D) => X(D) || It(D));
  }
  function Rt(...b) {
    return dt((D) => Reflect.apply(Os, null, [D, ...b]), () => _i(...b), "number format", (D) => Reflect.apply(D.n, D, [...b]), () => Ms, (D) => X(D) || It(D));
  }
  function Ht(b) {
    return b.map((D) => X(D) || Ft(D) || At(D) ? $s(String(D)) : D);
  }
  const Tt = {
    normalize: Ht,
    interpolate: (b) => b,
    type: "vnode"
  };
  function xt(...b) {
    return dt((D) => {
      let ct;
      const lt = D;
      try {
        lt.processor = Tt, ct = Reflect.apply(Ws, null, [lt, ...b]);
      } finally {
        lt.processor = null;
      }
      return ct;
    }, () => Si(...b), "translate", (D) => D[Ci](...b), (D) => [$s(D)], (D) => It(D));
  }
  function jt(...b) {
    return dt((D) => Reflect.apply(Os, null, [D, ...b]), () => _i(...b), "number format", (D) => D[Li](...b), Fs, (D) => X(D) || It(D));
  }
  function Zt(...b) {
    return dt((D) => Reflect.apply(As, null, [D, ...b]), () => xi(...b), "datetime format", (D) => D[Ti](...b), Fs, (D) => X(D) || It(D));
  }
  function qt(b) {
    z = b, T.pluralRules = z;
  }
  function O(b, D) {
    return dt(() => {
      if (!b)
        return !1;
      const ct = X(D) ? D : r.value, lt = _t(ct), Pt = T.messageResolver(lt, b);
      return he(Pt) || ve(Pt) || X(Pt);
    }, () => [b], "translate exists", (ct) => Reflect.apply(ct.te, ct, [b, D]), Qc, (ct) => At(ct));
  }
  function rt(b) {
    let D = null;
    const ct = zo(T, l.value, r.value);
    for (let lt = 0; lt < ct.length; lt++) {
      const Pt = c.value[ct[lt]] || {}, Le = T.messageResolver(Pt, b);
      if (Le != null) {
        D = Le;
        break;
      }
    }
    return D;
  }
  function pt(b) {
    const D = rt(b);
    return D ?? (t ? t.tm(b) || {} : {});
  }
  function _t(b) {
    return c.value[b] || {};
  }
  function St(b, D) {
    if (s) {
      const ct = { [b]: D };
      for (const lt in ct)
        oe(ct, lt) && bn(ct[lt]);
      D = ct[b];
    }
    c.value[b] = D, T.messages = c.value;
  }
  function Mt(b, D) {
    c.value[b] = c.value[b] || {};
    const ct = { [b]: D };
    if (s)
      for (const lt in ct)
        oe(ct, lt) && bn(ct[lt]);
    D = ct[b], Wn(D, c.value[b]), T.messages = c.value;
  }
  function P(b) {
    return d.value[b] || {};
  }
  function u(b, D) {
    d.value[b] = D, T.datetimeFormats = d.value, Is(T, b, D);
  }
  function h(b, D) {
    d.value[b] = Bt(d.value[b] || {}, D), T.datetimeFormats = d.value, Is(T, b, D);
  }
  function E(b) {
    return g.value[b] || {};
  }
  function N(b, D) {
    g.value[b] = D, T.numberFormats = g.value, zs(T, b, D);
  }
  function tt(b, D) {
    g.value[b] = Bt(g.value[b] || {}, D), T.numberFormats = g.value, zs(T, b, D);
  }
  Bs++, t && ys && (Oe(t.locale, (b) => {
    a && (r.value = b, T.locale = b, cn(T, r.value, l.value));
  }), Oe(t.fallbackLocale, (b) => {
    a && (l.value = b, T.fallbackLocale = b, cn(T, r.value, l.value));
  }));
  const q = {
    id: Bs,
    locale: Z,
    fallbackLocale: st,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(b) {
      a = b, b && t && (r.value = t.locale.value, l.value = t.fallbackLocale.value, cn(T, r.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: it,
    get modifiers() {
      return R;
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
    set missingWarn(b) {
      y = b, T.missingWarn = y;
    },
    get fallbackWarn() {
      return k;
    },
    set fallbackWarn(b) {
      k = b, T.fallbackWarn = k;
    },
    get fallbackRoot() {
      return L;
    },
    set fallbackRoot(b) {
      L = b;
    },
    get fallbackFormat() {
      return f;
    },
    set fallbackFormat(b) {
      f = b, T.fallbackFormat = f;
    },
    get warnHtmlMessage() {
      return w;
    },
    set warnHtmlMessage(b) {
      w = b, T.warnHtmlMessage = b;
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(b) {
      C = b, T.escapeParameter = b;
    },
    t: j,
    getLocaleMessage: _t,
    setLocaleMessage: St,
    mergeLocaleMessage: Mt,
    getPostTranslationHandler: ht,
    setPostTranslationHandler: Q,
    getMissingHandler: ot,
    setMissingHandler: bt,
    [Zc]: qt
  };
  return q.datetimeFormats = ut, q.numberFormats = mt, q.rt = wt, q.te = O, q.tm = pt, q.d = Y, q.n = Rt, q.getDateTimeFormat = P, q.setDateTimeFormat = u, q.mergeDateTimeFormat = h, q.getNumberFormat = E, q.setNumberFormat = N, q.mergeNumberFormat = tt, q[Uo] = n, q[Ci] = xt, q[Ti] = Zt, q[Li] = jt, q;
}
const ji = {
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
function eu({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Xt ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, vt());
}
function Go() {
  return Xt;
}
Bt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ft(e) || !isNaN(e)
  }
}, ji);
function nu(e) {
  return It(e) && !X(e[0]);
}
function Xo(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = vt();
    e.locale && (a.locale = e.locale), X(e.format) ? a.key = e.format : gt(e.format) && (X(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((y, k) => n.includes(k) ? Bt(vt(), y, { [k]: e.format[k] }) : y, vt()));
    const l = i(e.value, a, r);
    let c = [a.key];
    It(l) ? c = l.map((y, k) => {
      const L = s[y.type], f = L ? L({ [y.type]: y.value, index: k, parts: l }) : [y.value];
      return nu(f) && (f[0].key = `${y.type}-${k}`), f;
    }) : X(l) && (c = [l]);
    const d = Bt(vt(), o), g = X(e.tag) || gt(e.tag) ? e.tag : Go();
    return ao(g, d, c);
  };
}
Bt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ji);
const iu = /* @__PURE__ */ Fe("global-vue-i18n");
function Cn(e = {}) {
  const t = Yo();
  if (t == null)
    throw kn(Qe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw kn(Qe.NOT_INSTALLED);
  const n = su(t), i = au(n), s = qc(t), o = ou(e, s);
  if (o === "global")
    return Jc(i, e, s), i;
  if (o === "parent") {
    let l = ru(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = Bt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = tu(l), a.__composerExtend && (r[Mi] = a.__composerExtend(r)), cu(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function su(e) {
  const t = Se(e.isCE ? iu : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw kn(e.isCE ? Qe.NOT_INSTALLED_WITH_PROVIDE : Qe.UNEXPECTED_ERROR);
  return t;
}
function ou(e, t) {
  return Zn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function au(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function ru(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = lu(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[Uo] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function lu(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function cu(e, t, n) {
  sn(() => {
  }, t), Ai(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Mi];
    s && (s(), delete i[Mi]);
  }, t);
}
Bt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ji);
Kc();
Pc(gc);
Ec(Tc);
Rc(zo);
const uu = { class: "toolbar-panel first-panel" }, hu = { class: "tool-section" }, du = ["onClick", "title", "aria-pressed"], fu = { class: "action-section" }, gu = ["disabled", "title"], mu = ["disabled", "title"], pu = ["disabled", "title"], yu = ["title"], wu = ["title"], vu = ["title"], ku = {
  key: 0,
  class: "toolbar-panel second-panel"
}, bu = { class: "style-section" }, xu = {
  key: 0,
  class: "style-group"
}, _u = { class: "style-label" }, Su = { class: "line-width-selector" }, Cu = ["onClick", "title", "aria-pressed"], Tu = { class: "style-value" }, Lu = {
  key: 1,
  class: "style-divider"
}, Mu = {
  key: 2,
  class: "style-group opacity-group"
}, Pu = { class: "style-label" }, Eu = ["value", "title", "aria-label"], Ru = { class: "style-value" }, Au = {
  key: 3,
  class: "style-divider"
}, Iu = {
  key: 4,
  class: "style-group color-picker-group"
}, Ou = { class: "style-label" }, zu = { class: "color-row" }, Du = ["onClick", "title", "aria-pressed"], Nu = { class: "custom-color-wrapper" }, Wu = ["title"], $u = ["value", "title", "aria-label"], Fu = {
  key: 5,
  class: "style-group"
}, Bu = { class: "style-label" }, Hu = { class: "text-size-selector" }, ju = ["onClick", "title", "aria-pressed"], Uu = { class: "style-value" }, Vu = {
  key: 6,
  class: "style-group"
}, Yu = { class: "style-label" }, Gu = { class: "mosaic-size-selector" }, Xu = ["onClick", "title", "aria-pressed"], Ku = { class: "style-value" }, Zu = {
  key: 7,
  class: "style-group"
}, qu = { class: "style-label" }, Ju = { class: "translate-engine-selector" }, Qu = ["onClick", "title", "aria-pressed"], th = /* @__PURE__ */ Ot({
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
    const i = J(null), { t: s } = Cn(), o = e, a = n, r = V(() => [
      { type: S.Select, icon: pl, title: s("screenshot.select") },
      { type: S.Rectangle, icon: wl, title: s("screenshot.rectangle") },
      { type: S.Ellipse, icon: xl, title: s("screenshot.ellipse") },
      { type: S.Line, icon: _o, title: s("screenshot.line") },
      { type: S.Arrow, icon: cl, title: s("screenshot.arrow") },
      { type: S.Pen, icon: Sl, title: s("screenshot.pen") },
      { type: S.Mosaic, icon: ml, title: s("screenshot.mosaic") },
      { type: S.Text, icon: dl, title: s("screenshot.text") },
      { type: S.ColorPicker, icon: ms, title: s("screenshot.colorPicker") },
      { type: S.Ocr, icon: Dn, title: s("screenshot.ocr") },
      { type: S.Translate, icon: So, title: s("screenshot.translate") },
      { type: S.Pin, icon: vi, title: s("screenshot.pin") }
    ]), l = V(() => [
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
    ], g = [12, 14, 16, 18, 20, 24], y = [8, 12, 16, 20], k = V(() => ![S.Select, S.ColorPicker, S.Ocr, S.Pin].includes(o.currentTool)), L = V(
      () => [S.Rectangle, S.Ellipse, S.Line, S.Arrow, S.Pen].includes(o.currentTool)
    ), f = V(
      () => [S.Rectangle, S.Ellipse, S.Line, S.Arrow, S.Pen, S.Text].includes(o.currentTool)
    ), _ = V(
      () => [
        S.Rectangle,
        S.Ellipse,
        S.Line,
        S.Arrow,
        S.Pen,
        S.Mosaic,
        S.Text
      ].includes(o.currentTool)
    ), m = V(() => o.currentTool === S.Text), x = V(() => o.currentTool === S.Mosaic), w = V(() => o.currentTool === S.Translate), C = (j) => a("tool-select", j), R = (j) => a("color-change", j), z = (j) => a("line-width-change", j), T = (j) => {
      a("opacity-change", Number(j.target.value) / 100);
    }, H = (j) => a("text-size-change", j), G = (j) => a("mosaic-size-change", j), Z = () => a("undo"), st = () => a("redo"), it = () => a("delete"), ut = () => a("save"), mt = () => a("confirm"), ht = () => a("cancel"), Q = (j) => {
      a("translate-engine-change", j);
    }, ot = (j) => {
      R(j);
    }, bt = (j) => {
      const wt = j.target;
      wt.value && R(wt.value);
    }, dt = () => {
      const j = i.value?.getBoundingClientRect();
      return {
        width: j?.width ?? 590,
        height: j?.height ?? 50
      };
    };
    return Oe(() => o.currentTool, () => {
      pn(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: dt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: dt
    }), (j, wt) => (B(), K(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        nt(" 第一个面板：工具选择 + 操作按钮 "),
        A("div", uu, [
          nt(" 工具选择区域 "),
          A("div", hu, [
            (B(!0), K(
              Xt,
              null,
              me(r.value, (Y) => (B(), K("button", {
                key: Y.type,
                onClick: (Rt) => C(Y.type),
                class: Ct(["tool-btn", { active: j.currentTool === Y.type }]),
                title: Y.title,
                "aria-pressed": j.currentTool === Y.type
              }, [
                (B(), $t(_e(Y.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, du))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          nt(" 分隔线 "),
          wt[0] || (wt[0] = A(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          nt(" 操作按钮区域 "),
          A("div", fu, [
            A("button", {
              onClick: Z,
              disabled: !j.canUndo,
              class: "action-btn undo",
              title: I(s)("screenshot.undo")
            }, [
              v(I(bl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, gu),
            A("button", {
              onClick: st,
              disabled: !j.canRedo,
              class: "action-btn redo",
              title: I(s)("screenshot.redo")
            }, [
              v(I(fl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, mu),
            A("button", {
              onClick: it,
              disabled: !j.canDelete,
              class: "action-btn delete",
              title: I(s)("screenshot.delete")
            }, [
              v(I(ul), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, pu),
            A("button", {
              onClick: ht,
              class: "action-btn cancel",
              title: I(s)("screenshot.cancel")
            }, [
              v(I(wi), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, yu),
            A("button", {
              onClick: ut,
              class: "action-btn save",
              title: I(s)("screenshot.save")
            }, [
              v(I(hl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, wu),
            A("button", {
              onClick: mt,
              class: "action-btn confirm",
              title: I(s)("screenshot.confirm")
            }, [
              v(I(yi), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, vu)
          ])
        ]),
        nt(" 第二个面板：样式设置区域 "),
        k.value ? (B(), K("div", ku, [
          A("div", bu, [
            nt(" 线宽设置 "),
            L.value ? (B(), K("div", xu, [
              A(
                "span",
                _u,
                at(I(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              A("div", Su, [
                (B(), K(
                  Xt,
                  null,
                  me(c, (Y) => A("button", {
                    key: Y,
                    onClick: (Rt) => z(Y),
                    class: Ct(["width-btn", { active: j.currentLineWidth === Y }]),
                    title: `${Y}px`,
                    "aria-pressed": j.currentLineWidth === Y
                  }, [
                    A(
                      "span",
                      {
                        class: "line-preview",
                        style: zt({ height: `${Y}px`, backgroundColor: j.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Cu)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Tu,
                at(j.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            L.value && f.value ? (B(), K("div", Lu)) : nt("v-if", !0),
            nt(" 不透明度设置 "),
            _.value ? (B(), K("div", Mu, [
              A(
                "span",
                Pu,
                at(I(s)("screenshot.opacity")),
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
                style: zt({
                  "--opacity-color": j.currentColor,
                  "--opacity-progress": `${Math.round(j.currentOpacity * 100)}%`
                }),
                title: `${Math.round(j.currentOpacity * 100)}%`,
                "aria-label": I(s)("screenshot.opacity"),
                onInput: T
              }, null, 44, Eu),
              A(
                "span",
                Ru,
                at(Math.round(j.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            _.value && f.value ? (B(), K("div", Au)) : nt("v-if", !0),
            nt(" 颜色设置 "),
            f.value ? (B(), K("div", Iu, [
              A(
                "span",
                Ou,
                at(I(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              A("div", zu, [
                (B(), K(
                  Xt,
                  null,
                  me(d, (Y) => A("button", {
                    key: Y,
                    onClick: (Rt) => ot(Y),
                    class: Ct(["color-btn", { active: j.currentColor === Y }]),
                    style: zt({ backgroundColor: Y }),
                    title: Y,
                    "aria-pressed": j.currentColor === Y
                  }, null, 14, Du)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                A("div", Nu, [
                  A("button", {
                    class: Ct(["color-btn custom-color-btn", { active: !d.includes(j.currentColor) }]),
                    title: I(s)("screenshot.customColor")
                  }, [
                    v(I(ms), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Wu),
                  A("input", {
                    type: "color",
                    onChange: bt,
                    value: j.currentColor,
                    class: "color-input-hidden",
                    title: I(s)("screenshot.customColor"),
                    "aria-label": I(s)("screenshot.customColor")
                  }, null, 40, $u)
                ])
              ])
            ])) : nt("v-if", !0),
            nt(" 文字大小设置 "),
            m.value ? (B(), K("div", Fu, [
              A(
                "span",
                Bu,
                at(I(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              A("div", Hu, [
                (B(), K(
                  Xt,
                  null,
                  me(g, (Y) => A("button", {
                    key: Y,
                    onClick: (Rt) => H(Y),
                    class: Ct(["size-btn", { active: j.currentTextSize === Y }]),
                    title: `${Y}px`,
                    "aria-pressed": j.currentTextSize === Y
                  }, [
                    A(
                      "span",
                      {
                        class: "size-text",
                        style: zt({ fontSize: `${Math.min(Y, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, ju)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Uu,
                at(j.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            nt(" 马赛克大小设置 "),
            x.value ? (B(), K("div", Vu, [
              A(
                "span",
                Yu,
                at(I(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              A("div", Gu, [
                (B(), K(
                  Xt,
                  null,
                  me(y, (Y) => A("button", {
                    key: Y,
                    onClick: (Rt) => G(Y),
                    class: Ct(["size-btn", { active: j.currentMosaicSize === Y }]),
                    title: `${I(s)("screenshot.brush")} ${Y * 3}px`,
                    "aria-pressed": j.currentMosaicSize === Y
                  }, [
                    A(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: zt({
                          width: `${Math.min(Y * 1.25, 18)}px`,
                          height: `${Math.min(Y * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Xu)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              A(
                "span",
                Ku,
                at(j.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            nt(" 翻译引擎选择 "),
            w.value ? (B(), K("div", Zu, [
              A(
                "span",
                qu,
                at(I(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              A("div", Ju, [
                (B(!0), K(
                  Xt,
                  null,
                  me(l.value, (Y) => (B(), K("button", {
                    key: Y.value,
                    onClick: (Rt) => Q(Y.value),
                    class: Ct(["engine-btn", { active: j.currentTranslateEngine === Y.value }]),
                    title: Y.label,
                    "aria-pressed": j.currentTranslateEngine === Y.value
                  }, at(Y.short), 11, Qu))),
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
}), Qn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, eh = /* @__PURE__ */ Qn(th, [["__scopeId", "data-v-ff4668e9"]]), nh = {
  class: "screenshot-container",
  ref: "containerRef"
}, ih = {
  key: 0,
  class: "mask-layers"
}, sh = {
  key: 1,
  class: "mask-full"
}, oh = { class: "size-text" }, ah = {
  key: 4,
  class: "loading-overlay"
}, rh = /* @__PURE__ */ Ot({
  __name: "index",
  setup(e) {
    const t = J(), n = J(), i = J(null), s = J(null);
    let o = null;
    const a = J(!0), r = J(!1), l = J(""), c = J({ x: 0, y: 0 }), d = J(16), g = J(!1), y = J("bing"), k = J({ width: 590, height: 50 });
    let L = !1;
    const f = J({
      selectionRect: null,
      annotations: [],
      currentTool: S.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
      textSize: 16,
      mosaicSize: 8,
      hasSelection: !1,
      hasAnnotations: !1,
      canRedo: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), _ = J(), m = J(), x = J(), w = V(() => f.value.isDrawing), C = V(() => {
      if (!f.value.selectionRect) return {};
      const { y: P } = f.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${P}px`
      };
    }), R = V(() => {
      if (!f.value.selectionRect) return {};
      const { y: P, height: u } = f.value.selectionRect;
      return {
        top: `${P + u}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), z = V(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: u, height: h } = f.value.selectionRect;
      return {
        top: `${u}px`,
        left: "0",
        width: `${P}px`,
        height: `${h}px`
      };
    }), T = V(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: u, width: h, height: E } = f.value.selectionRect;
      return {
        top: `${u}px`,
        left: `${P + h}px`,
        right: "0",
        height: `${E}px`
      };
    }), H = V(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: u, width: h, height: E } = f.value.selectionRect, N = 10, tt = 12, q = Math.min(k.value.width, Math.max(0, window.innerWidth - N * 2)), b = Math.min(k.value.height, Math.max(0, window.innerHeight - N * 2)), D = Math.max(N, window.innerHeight - b - N), ct = Math.max(N, window.innerWidth - q - N);
      let lt;
      return u + E + b + tt <= window.innerHeight - N ? lt = u + E + tt : u - b - tt >= N ? lt = u - b - tt : lt = u + E - b - N, lt = Math.min(Math.max(lt, N), D), {
        left: `${Math.min(Math.max(P + (h - q) / 2, N), ct)}px`,
        top: `${lt}px`
      };
    }), G = V(() => {
      if (!f.value.selectionRect) return {};
      const { x: P, y: u, width: h, height: E } = f.value.selectionRect, N = 10;
      let tt = P - N, q = u - N, b = "translateY(-100%)";
      return tt < 10 && (tt = P + h + N, b = "translateY(-100%)"), q < 30 && (q = u + E + N, b = "translateY(0)"), {
        left: `${tt}px`,
        top: `${q}px`,
        transform: b
      };
    }), Z = V(() => {
      if (!f.value.selectionRect) return "";
      const { width: P, height: u } = f.value.selectionRect;
      return `${Math.round(P)} × ${Math.round(u)}`;
    }), st = V(() => {
      const P = Ye(c.value);
      return {
        "--text-accent-color": f.value.currentStyle.color,
        left: `${P.x}px`,
        top: `${P.y}px`
      };
    }), it = (P) => {
      if (P === S.Pin && f.value.selectionRect) {
        ut();
        return;
      }
      if (P === S.Ocr && f.value.selectionRect) {
        mt();
        return;
      }
      o?.setTool(P);
    }, ut = async () => {
      try {
        await o?.createPinWindow();
      } catch (P) {
        F.error("[截图] 创建贴图失败", P);
      }
    }, mt = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (P) {
        F.error("[截图] 创建文字识别贴图失败", P);
      }
    }, ht = (P) => {
      o?.updateStyle({ color: P });
    }, Q = (P) => {
      o?.updateStyle({ lineWidth: P });
    }, ot = (P) => {
      o?.updateStyle({ opacity: P });
    }, bt = (P) => {
      o?.updateTextSize(P);
    }, dt = (P) => {
      o?.updateMosaicSize(P);
    }, j = (P) => {
      y.value = P, o?.setTranslationEngine(P), o?.executeTranslation();
    }, wt = () => {
      o?.undoAnnotation();
    }, Y = () => {
      o?.redoAnnotation();
    }, Rt = () => {
      o?.deleteSelectedAnnotation();
    }, Ht = async () => {
      try {
        await o?.processScreenshot("save"), pt();
      } catch (P) {
        const u = P?.message || P?.toString() || "保存失败";
        if (u.includes("保存已取消") || u.includes("cancelled"))
          return;
        F.error("保存截图时发生错误", u);
      }
    }, Kt = async () => {
      try {
        await o?.processScreenshot("copy"), pt();
      } catch {
      }
    }, Tt = () => {
      pt();
    };
    let xt = null;
    const jt = (P, u) => {
      if (u && u.getData().type === "text") {
        const h = u.getData();
        c.value = {
          x: h.points[0].x,
          y: h.points[0].y
        }, d.value = h.fontSize || f.value.textSize;
      } else
        c.value = P, d.value = f.value.textSize;
      r.value = !0, xt = u || null, u && o?.setEditingAnnotation(u), u && u.getData().text ? l.value = u.getData().text : l.value = "", pn(() => {
        n.value?.focus(), xt && n.value?.select();
      });
    }, Zt = () => {
      l.value.trim() ? xt ? o?.updateTextAnnotation(xt, l.value) : o?.createTextAnnotation(c.value, l.value) : xt && o?.deleteAnnotation(xt), qt();
    }, qt = () => {
      r.value = !1, l.value = "", xt && o?.clearEditingAnnotation(), xt = null;
    }, O = (P) => {
      navigator.clipboard && navigator.clipboard.writeText(P.hex).catch((u) => {
        F.error("[截图] 复制颜色到剪贴板失败", u);
      });
    }, rt = (P) => {
      if (P.key === "Meta" || P.key === "Win" || P.altKey && P.key === "Tab" || P.altKey && P.key === "F4") {
        P.preventDefault(), P.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (P.key === "Escape") {
          qt(), P.preventDefault();
          return;
        }
        if (P.key === "Enter") {
          Zt(), P.preventDefault();
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
          pt();
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
        P.shiftKey ? Y() : wt(), P.preventDefault();
        return;
      }
      if (!u && P.ctrlKey && P.key.toLowerCase() === "y") {
        Y(), P.preventDefault();
        return;
      }
      if (P.key === "Escape") {
        pt();
        return;
      } else if (P.key === "Delete" || P.key === "Backspace") {
        Rt(), P.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(P.key) || P.preventDefault();
    }, pt = async () => {
      if (!L) {
        L = !0, o?.destroy(), o = null;
        try {
          await M("cleanup_screenshot_resources");
        } catch {
          try {
            await M("clear_screenshot_background");
          } catch (u) {
            F.error("[截图] 清理后台缓存失败", u);
          }
        }
        f.value = {
          selectionRect: null,
          annotations: [],
          currentTool: S.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", xt = null, g.value = !1, a.value = !0;
        try {
          await M("close_and_destroy_screenshot_window");
        } catch (P) {
          F.error("[截图] 销毁截图窗口失败，回退到 close()", P), await s.value?.close();
        } finally {
          L = !1;
        }
      }
    }, _t = () => {
      const P = o?.getState();
      P && (f.value = P);
    }, St = () => {
      const P = i.value?.getToolbarSize?.();
      P && (k.value = P);
    }, Mt = (P) => {
      const u = P.detail;
      u && (k.value = u);
    };
    return sn(async () => {
      if (t.value) {
        s.value = new Sn("screenshot"), await s.value.emit("screenshot_ready"), o = new sl(
          t.value,
          _t,
          jt,
          O
        );
        try {
          const P = await M("get_translation_engine");
          P && ["google", "bing", "offline"].includes(P) && (y.value = P, o?.setTranslationEngine(P));
        } catch (P) {
          F.error("[截图] 获取翻译引擎设置失败", P);
        }
        try {
          const P = await M("get_offline_model_activated");
          o?.setOfflineModelActivated(P);
        } catch (P) {
          F.error("[截图] 获取离线模型激活状态失败", P);
        }
        document.addEventListener("keydown", rt), window.addEventListener("resize", St), window.addEventListener("screenshot-toolbar-resize", Mt), m.value = await fn("background-ready", () => {
          o?.triggerBackgroundReload();
        }), x.value = await fn("screenshot-close-requested", () => {
          pt();
        }), _.value = await fn("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const P = o?.getTranslationState();
          P?.isLoading || P?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const u = o?.getTranslationState();
              if (u?.isLoading || u?.isVisible)
                return;
              pt();
            }
          }, 100);
        }), pn(St);
      }
    }), Ai(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", rt), window.removeEventListener("resize", St), window.removeEventListener("screenshot-toolbar-resize", Mt), _.value?.(), m.value?.(), x.value?.(), _.value = void 0, m.value = void 0, x.value = void 0, s.value = null;
    }), (P, u) => (B(), K(
      "div",
      nh,
      [
        nt(" 遮罩层 "),
        f.value.selectionRect ? (B(), K("div", ih, [
          A(
            "div",
            {
              class: "mask-top",
              style: zt(C.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-bottom",
              style: zt(R.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-left",
              style: zt(z.value)
            },
            null,
            4
            /* STYLE */
          ),
          A(
            "div",
            {
              class: "mask-right",
              style: zt(T.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (B(), K("div", sh)),
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
        f.value.selectionRect && a.value ? (B(), K(
          "div",
          {
            key: 2,
            class: "size-info",
            style: zt(G.value)
          },
          [
            A(
              "span",
              oh,
              at(Z.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : nt("v-if", !0),
        nt(" 工具栏 "),
        f.value.selectionRect && !w.value ? (B(), $t(eh, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: zt(H.value),
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
          onToolSelect: it,
          onColorChange: ht,
          onLineWidthChange: Q,
          onOpacityChange: ot,
          onTextSizeChange: bt,
          onMosaicSizeChange: dt,
          onTranslateEngineChange: j,
          onUndo: wt,
          onRedo: Y,
          onDelete: Rt,
          onSave: Ht,
          onConfirm: Kt,
          onCancel: Tt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : nt("v-if", !0),
        nt(" 加载提示 - 仅在初始化时显示 "),
        g.value ? (B(), K("div", ah, [
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
        r.value ? (B(), K(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: zt(st.value)
          },
          [
            yn(A(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": u[0] || (u[0] = (h) => l.value = h),
                type: "text",
                class: "text-input",
                style: zt({
                  color: f.value.currentStyle.color,
                  fontFamily: I(Ve),
                  fontSize: d.value + "px",
                  height: d.value + "px",
                  lineHeight: d.value + "px"
                }),
                onKeydown: [
                  ns(Zt, ["enter"]),
                  ns(qt, ["escape"])
                ],
                onBlur: Zt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [Pa, l.value]
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
}), lh = /* @__PURE__ */ Qn(rh, [["__scopeId", "data-v-fd4bfc80"]]), ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lh
}, Symbol.toStringTag, { value: "Module" })), Ko = Symbol(), $n = "el", uh = "is-", Pe = (e, t, n, i, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Zo = Symbol("namespaceContextKey"), hh = (e) => {
  const t = e || (Ze() ? Se(Zo, J($n)) : J($n));
  return V(() => I(t) || $n);
}, Ui = (e, t) => {
  const n = hh(t);
  return {
    namespace: n,
    b: (f = "") => Pe(n.value, e, f, "", ""),
    e: (f) => f ? Pe(n.value, e, "", f, "") : "",
    m: (f) => f ? Pe(n.value, e, "", "", f) : "",
    be: (f, _) => f && _ ? Pe(n.value, e, f, _, "") : "",
    em: (f, _) => f && _ ? Pe(n.value, e, "", f, _) : "",
    bm: (f, _) => f && _ ? Pe(n.value, e, f, "", _) : "",
    bem: (f, _, m) => f && _ && m ? Pe(n.value, e, f, _, m) : "",
    is: (f, ..._) => {
      const m = _.length >= 1 ? _[0] : !0;
      return f && m ? `${uh}${f}` : "";
    },
    cssVar: (f) => {
      const _ = {};
      for (const m in f)
        f[m] && (_[`--${n.value}-${m}`] = f[m]);
      return _;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const _ = {};
      for (const m in f)
        f[m] && (_[`--${n.value}-${e}-${m}`] = f[m]);
      return _;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const dh = Object.prototype.hasOwnProperty, js = (e, t) => dh.call(e, t), xn = (e) => typeof e == "function", De = (e) => typeof e == "string", qo = (e) => e !== null && typeof e == "object";
var fh = typeof global == "object" && global && global.Object === Object && global, gh = typeof self == "object" && self && self.Object === Object && self, Vi = fh || gh || Function("return this")(), tn = Vi.Symbol, Jo = Object.prototype, mh = Jo.hasOwnProperty, ph = Jo.toString, un = tn ? tn.toStringTag : void 0;
function yh(e) {
  var t = mh.call(e, un), n = e[un];
  try {
    e[un] = void 0;
    var i = !0;
  } catch {
  }
  var s = ph.call(e);
  return i && (t ? e[un] = n : delete e[un]), s;
}
var wh = Object.prototype, vh = wh.toString;
function kh(e) {
  return vh.call(e);
}
var bh = "[object Null]", xh = "[object Undefined]", Us = tn ? tn.toStringTag : void 0;
function Qo(e) {
  return e == null ? e === void 0 ? xh : bh : Us && Us in Object(e) ? yh(e) : kh(e);
}
function _h(e) {
  return e != null && typeof e == "object";
}
var Sh = "[object Symbol]";
function Yi(e) {
  return typeof e == "symbol" || _h(e) && Qo(e) == Sh;
}
function Ch(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var Gi = Array.isArray, Vs = tn ? tn.prototype : void 0, Ys = Vs ? Vs.toString : void 0;
function ta(e) {
  if (typeof e == "string")
    return e;
  if (Gi(e))
    return Ch(e, ta) + "";
  if (Yi(e))
    return Ys ? Ys.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ea(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Th = "[object AsyncFunction]", Lh = "[object Function]", Mh = "[object GeneratorFunction]", Ph = "[object Proxy]";
function Eh(e) {
  if (!ea(e))
    return !1;
  var t = Qo(e);
  return t == Lh || t == Mh || t == Th || t == Ph;
}
var di = Vi["__core-js_shared__"], Gs = function() {
  var e = /[^.]+$/.exec(di && di.keys && di.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rh(e) {
  return !!Gs && Gs in e;
}
var Ah = Function.prototype, Ih = Ah.toString;
function Oh(e) {
  if (e != null) {
    try {
      return Ih.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zh = /[\\^$.*+?()[\]{}|]/g, Dh = /^\[object .+?Constructor\]$/, Nh = Function.prototype, Wh = Object.prototype, $h = Nh.toString, Fh = Wh.hasOwnProperty, Bh = RegExp(
  "^" + $h.call(Fh).replace(zh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hh(e) {
  if (!ea(e) || Rh(e))
    return !1;
  var t = Eh(e) ? Bh : Dh;
  return t.test(Oh(e));
}
function jh(e, t) {
  return e?.[t];
}
function na(e, t) {
  var n = jh(e, t);
  return Hh(n) ? n : void 0;
}
function Uh(e, t) {
  return e === t || e !== e && t !== t;
}
var Vh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Yh = /^\w*$/;
function Gh(e, t) {
  if (Gi(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Yi(e) ? !0 : Yh.test(e) || !Vh.test(e) || t != null && e in Object(t);
}
var _n = na(Object, "create");
function Xh() {
  this.__data__ = _n ? _n(null) : {}, this.size = 0;
}
function Kh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Zh = "__lodash_hash_undefined__", qh = Object.prototype, Jh = qh.hasOwnProperty;
function Qh(e) {
  var t = this.__data__;
  if (_n) {
    var n = t[e];
    return n === Zh ? void 0 : n;
  }
  return Jh.call(t, e) ? t[e] : void 0;
}
var td = Object.prototype, ed = td.hasOwnProperty;
function nd(e) {
  var t = this.__data__;
  return _n ? t[e] !== void 0 : ed.call(t, e);
}
var id = "__lodash_hash_undefined__";
function sd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = _n && t === void 0 ? id : t, this;
}
function Ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ne.prototype.clear = Xh;
Ne.prototype.delete = Kh;
Ne.prototype.get = Qh;
Ne.prototype.has = nd;
Ne.prototype.set = sd;
function od() {
  this.__data__ = [], this.size = 0;
}
function ti(e, t) {
  for (var n = e.length; n--; )
    if (Uh(e[n][0], t))
      return n;
  return -1;
}
var ad = Array.prototype, rd = ad.splice;
function ld(e) {
  var t = this.__data__, n = ti(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : rd.call(t, n, 1), --this.size, !0;
}
function cd(e) {
  var t = this.__data__, n = ti(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ud(e) {
  return ti(this.__data__, e) > -1;
}
function hd(e, t) {
  var n = this.__data__, i = ti(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function on(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
on.prototype.clear = od;
on.prototype.delete = ld;
on.prototype.get = cd;
on.prototype.has = ud;
on.prototype.set = hd;
var dd = na(Vi, "Map");
function fd() {
  this.size = 0, this.__data__ = {
    hash: new Ne(),
    map: new (dd || on)(),
    string: new Ne()
  };
}
function gd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ei(e, t) {
  var n = e.__data__;
  return gd(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function md(e) {
  var t = ei(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function pd(e) {
  return ei(this, e).get(e);
}
function yd(e) {
  return ei(this, e).has(e);
}
function wd(e, t) {
  var n = ei(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Be.prototype.clear = fd;
Be.prototype.delete = md;
Be.prototype.get = pd;
Be.prototype.has = yd;
Be.prototype.set = wd;
var vd = "Expected a function";
function Xi(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(vd);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, i);
    return n.cache = o.set(s, a) || o, a;
  };
  return n.cache = new (Xi.Cache || Be)(), n;
}
Xi.Cache = Be;
var kd = 500;
function bd(e) {
  var t = Xi(e, function(i) {
    return n.size === kd && n.clear(), i;
  }), n = t.cache;
  return t;
}
var xd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _d = /\\(\\)?/g, Sd = bd(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xd, function(n, i, s, o) {
    t.push(s ? o.replace(_d, "$1") : i || n);
  }), t;
});
function Cd(e) {
  return e == null ? "" : ta(e);
}
function Td(e, t) {
  return Gi(e) ? e : Gh(e, t) ? [e] : Sd(Cd(e));
}
function Ld(e) {
  if (typeof e == "string" || Yi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Md(e, t) {
  t = Td(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Ld(t[n++])];
  return n && n == i ? e : void 0;
}
function Pd(e, t, n) {
  var i = e == null ? void 0 : Md(e, t);
  return i === void 0 ? n : i;
}
function Ed(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var s = e[t];
    i[s[0]] = s[1];
  }
  return i;
}
const ia = (e) => e === void 0, Xs = (e) => typeof e == "boolean", We = (e) => typeof e == "number", Pi = (e) => typeof Element > "u" ? !1 : e instanceof Element, Rd = (e) => De(e) ? !Number.isNaN(Number(e)) : !1;
var Ks;
const He = typeof window < "u", Ad = (e) => typeof e == "string", Id = () => {
};
He && ((Ks = window?.navigator) != null && Ks.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ki(e) {
  return typeof e == "function" ? e() : I(e);
}
function Od(e) {
  return e;
}
function Zi(e) {
  return Ra() ? (Aa(e), !0) : !1;
}
function zd(e, t = !0) {
  Ze() ? sn(e) : t ? e() : pn(e);
}
function sa(e, t, n = {}) {
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
    }, Ki(t));
  }
  return i && (s.value = !0, He && l()), Zi(r), {
    isPending: Ea(s),
    start: l,
    stop: r
  };
}
function oa(e) {
  var t;
  const n = Ki(e);
  return (t = n?.$el) != null ? t : n;
}
const aa = He ? window : void 0;
function ra(...e) {
  let t, n, i, s;
  if (Ad(e[0]) || Array.isArray(e[0]) ? ([n, i, s] = e, t = aa) : [t, n, i, s] = e, !t)
    return Id;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((d) => d()), o.length = 0;
  }, r = (d, g, y, k) => (d.addEventListener(g, y, k), () => d.removeEventListener(g, y, k)), l = Oe(() => [oa(t), Ki(s)], ([d, g]) => {
    a(), d && o.push(...n.flatMap((y) => i.map((k) => r(d, y, k, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return Zi(c), c;
}
function Dd(e, t = !1) {
  const n = J(), i = () => n.value = !!e();
  return i(), zd(i, t), n;
}
const Zs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qs = "__vueuse_ssr_handlers__";
Zs[qs] = Zs[qs] || {};
var Js = Object.getOwnPropertySymbols, Nd = Object.prototype.hasOwnProperty, Wd = Object.prototype.propertyIsEnumerable, $d = (e, t) => {
  var n = {};
  for (var i in e)
    Nd.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Js)
    for (var i of Js(e))
      t.indexOf(i) < 0 && Wd.call(e, i) && (n[i] = e[i]);
  return n;
};
function Fd(e, t, n = {}) {
  const i = n, { window: s = aa } = i, o = $d(i, ["window"]);
  let a;
  const r = Dd(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Oe(() => oa(e), (g) => {
    l(), r.value && s && g && (a = new ResizeObserver(t), a.observe(g, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), c();
  };
  return Zi(d), {
    isSupported: r,
    stop: d
  };
}
var Qs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Qs || (Qs = {}));
var Bd = Object.defineProperty, to = Object.getOwnPropertySymbols, Hd = Object.prototype.hasOwnProperty, jd = Object.prototype.propertyIsEnumerable, eo = (e, t, n) => t in e ? Bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ud = (e, t) => {
  for (var n in t || (t = {}))
    Hd.call(t, n) && eo(e, n, t[n]);
  if (to)
    for (var n of to(t))
      jd.call(t, n) && eo(e, n, t[n]);
  return e;
};
const Vd = {
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
Ud({
  linear: Od
}, Vd);
const no = {
  current: 0
}, io = J(0), la = 2e3, so = Symbol("elZIndexContextKey"), ca = Symbol("zIndexContextKey"), Yd = (e) => {
  const t = Ze() ? Se(so, no) : no, n = e || (Ze() ? Se(ca, void 0) : void 0), i = V(() => {
    const a = I(n);
    return We(a) ? a : la;
  }), s = V(() => i.value + io.value), o = () => (t.current++, io.value = t.current, s.value);
  return !He && Se(so), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Gd = {
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
const Xd = (e) => (t, n) => Kd(t, n, I(e)), Kd = (e, t, n) => Pd(n, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), Zd = (e) => {
  const t = V(() => I(e).name), n = Ia(e) ? e : J(e);
  return {
    lang: t,
    locale: n,
    t: Xd(e)
  };
}, ua = Symbol("localeContextKey"), qd = (e) => {
  const t = e || Se(ua, J());
  return Zd(V(() => t.value || Gd));
}, ha = "__epPropKey", Qt = (e) => e, Jd = (e) => qo(e) && !!e[ha], da = (e, t) => {
  if (!qo(e) || Jd(e))
    return e;
  const { values: n, required: i, default: s, type: o, validator: a } = e, l = {
    type: o,
    required: !!i,
    validator: n || a ? (c) => {
      let d = !1, g = [];
      if (n && (g = Array.from(n), js(e, "default") && g.push(s), d || (d = g.includes(c))), a && (d || (d = a(c))), !d && g.length > 0) {
        const y = [...new Set(g)].map((k) => JSON.stringify(k)).join(", ");
        Oa(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [ha]: !0
  };
  return js(e, "default") && (l.default = s), l;
}, an = (e) => Ed(Object.entries(e).map(([t, n]) => [
  t,
  da(n, t)
])), Qd = ["", "default", "small", "large"], tf = da({
  type: String,
  values: Qd,
  required: !1
}), ef = Symbol("size"), nf = Symbol("emptyValuesContextKey"), sf = an({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => xn(e) ? !e() : !e
  }
}), oo = (e) => Object.keys(e), Yn = J();
function fa(e, t = void 0) {
  return Ze() ? Se(Ko, Yn) : Yn;
}
function ga(e, t) {
  const n = fa(), i = Ui(e, V(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || $n;
  })), s = qd(V(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), o = Yd(V(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || la;
  })), a = V(() => {
    var r;
    return I(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return ma(V(() => I(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const ma = (e, t, n = !1) => {
  var i;
  const s = !!Ze(), o = s ? fa() : void 0, a = (i = void 0) != null ? i : s ? za : void 0;
  if (!a)
    return;
  const r = V(() => {
    const l = I(e);
    return o?.value ? of(o.value, l) : l;
  });
  return a(Ko, r), a(ua, V(() => r.value.locale)), a(Zo, V(() => r.value.namespace)), a(ca, V(() => r.value.zIndex)), a(ef, {
    size: V(() => r.value.size || "")
  }), a(nf, V(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !Yn.value) && (Yn.value = r.value), r;
}, of = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...oo(e), ...oo(t)])], i = {};
  for (const s of n)
    i[s] = t[s] !== void 0 ? t[s] : e[s];
  return i;
};
var ni = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
function Ei(e, t = "px") {
  if (!e)
    return "";
  if (We(e) || Rd(e))
    return `${e}${t}`;
  if (De(e))
    return e;
}
const pa = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), ya = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), af = an({
  size: {
    type: Qt([Number, String])
  },
  color: {
    type: String
  }
}), rf = Ot({
  name: "ElIcon",
  inheritAttrs: !1
}), lf = /* @__PURE__ */ Ot({
  ...rf,
  props: af,
  setup(e) {
    const t = e, n = Ui("icon"), i = V(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: ia(s) ? void 0 : Ei(s),
        "--color": o
      };
    });
    return (s, o) => (B(), K("i", Da({
      class: I(n).b(),
      style: I(i)
    }, s.$attrs), [
      ze(s.$slots, "default")
    ], 16));
  }
});
var cf = /* @__PURE__ */ ni(lf, [["__file", "icon.vue"]]);
const Gn = pa(cf);
/*! Element Plus Icons Vue v2.3.1 */
var uf = /* @__PURE__ */ Ot({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (B(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), hf = uf, df = /* @__PURE__ */ Ot({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (B(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), wa = df, ff = /* @__PURE__ */ Ot({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (B(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), gf = ff, mf = /* @__PURE__ */ Ot({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (B(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), pf = mf, yf = /* @__PURE__ */ Ot({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (B(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      A("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), wf = yf;
const va = Qt([
  String,
  Object,
  Function
]), vf = {
  Close: wa
}, kf = {
  Close: wa
}, Xn = {
  success: pf,
  warning: wf,
  error: hf,
  info: gf
}, bf = (e) => e, Fn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, xf = an({
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
}), _f = Ot({
  name: "ElBadge"
}), Sf = /* @__PURE__ */ Ot({
  ..._f,
  props: xf,
  setup(e, { expose: t }) {
    const n = e, i = Ui("badge"), s = V(() => n.isDot ? "" : We(n.value) && We(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = V(() => {
      var a, r, l, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ei(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Ei((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (B(), K("div", {
      class: Ct(I(i).b())
    }, [
      ze(a.$slots, "default"),
      v(Ii, {
        name: `${I(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Gt(() => [
          yn(A("sup", {
            class: Ct([
              I(i).e("content"),
              I(i).em("content", a.type),
              I(i).is("fixed", !!a.$slots.default),
              I(i).is("dot", a.isDot),
              I(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: zt(I(o))
          }, [
            ze(a.$slots, "content", { value: I(s) }, () => [
              Na(at(I(s)), 1)
            ])
          ], 6), [
            [Bn, !a.hidden && (I(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Cf = /* @__PURE__ */ ni(Sf, [["__file", "badge.vue"]]);
const Tf = pa(Cf), Lf = an({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Qt(Object)
  },
  size: tf,
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
  ...sf
}), se = {};
Ot({
  name: "ElConfigProvider",
  props: Lf,
  setup(e, { slots: t }) {
    Oe(() => e.message, (i) => {
      Object.assign(se, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ma(e);
    return () => ze(t, "default", { config: n?.value });
  }
});
const ka = ["success", "info", "warning", "error"], Vt = bf({
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
  appendTo: He ? document.body : void 0
}), Mf = an({
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
    type: va,
    default: Vt.icon
  },
  id: {
    type: String,
    default: Vt.id
  },
  message: {
    type: Qt([
      String,
      Object,
      Function
    ]),
    default: Vt.message
  },
  onClose: {
    type: Qt(Function),
    default: Vt.onClose
  },
  showClose: {
    type: Boolean,
    default: Vt.showClose
  },
  type: {
    type: String,
    values: ka,
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
}), Pf = {
  destroy: () => !0
}, ae = Wa([]), Ef = (e) => {
  const t = ae.findIndex((s) => s.id === e), n = ae[t];
  let i;
  return t > 0 && (i = ae[t - 1]), { current: n, prev: i };
}, Rf = (e) => {
  const { prev: t } = Ef(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Af = (e, t) => ae.findIndex((i) => i.id === e) > 0 ? 16 : t, If = Ot({
  name: "ElMessage"
}), Of = /* @__PURE__ */ Ot({
  ...If,
  props: Mf,
  emits: Pf,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = kf, { ns: s, zIndex: o } = ga("message"), { currentZIndex: a, nextZIndex: r } = o, l = J(), c = J(!1), d = J(0);
    let g;
    const y = V(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), k = V(() => {
      const T = n.type;
      return { [s.bm("icon", T)]: T && Xn[T] };
    }), L = V(() => n.icon || Xn[n.type] || ""), f = V(() => Rf(n.id)), _ = V(() => Af(n.id, n.offset) + f.value), m = V(() => d.value + _.value), x = V(() => ({
      top: `${_.value}px`,
      zIndex: a.value
    }));
    function w() {
      n.duration !== 0 && ({ stop: g } = sa(() => {
        R();
      }, n.duration));
    }
    function C() {
      g?.();
    }
    function R() {
      c.value = !1;
    }
    function z({ code: T }) {
      T === Fn.esc && R();
    }
    return sn(() => {
      w(), r(), c.value = !0;
    }), Oe(() => n.repeatNum, () => {
      C(), w();
    }), ra(document, "keydown", z), Fd(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: m,
      close: R
    }), (T, H) => (B(), $t(Ii, {
      name: I(s).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (G) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: Gt(() => [
        yn(A("div", {
          id: T.id,
          ref_key: "messageRef",
          ref: l,
          class: Ct([
            I(s).b(),
            { [I(s).m(T.type)]: T.type },
            I(s).is("center", T.center),
            I(s).is("closable", T.showClose),
            I(s).is("plain", T.plain),
            T.customClass
          ]),
          style: zt(I(x)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: w
        }, [
          T.repeatNum > 1 ? (B(), $t(I(Tf), {
            key: 0,
            value: T.repeatNum,
            type: I(y),
            class: Ct(I(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : nt("v-if", !0),
          I(L) ? (B(), $t(I(Gn), {
            key: 1,
            class: Ct([I(s).e("icon"), I(k)])
          }, {
            default: Gt(() => [
              (B(), $t(_e(I(L))))
            ]),
            _: 1
          }, 8, ["class"])) : nt("v-if", !0),
          ze(T.$slots, "default", {}, () => [
            T.dangerouslyUseHTMLString ? (B(), K(Xt, { key: 1 }, [
              nt(" Caution here, message could've been compromised, never use user's input as message "),
              A("p", {
                class: Ct(I(s).e("content")),
                innerHTML: T.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (B(), K("p", {
              key: 0,
              class: Ct(I(s).e("content"))
            }, at(T.message), 3))
          ]),
          T.showClose ? (B(), $t(I(Gn), {
            key: 2,
            class: Ct(I(s).e("closeBtn")),
            onClick: Wt(R, ["stop"])
          }, {
            default: Gt(() => [
              v(I(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : nt("v-if", !0)
        ], 46, ["id"]), [
          [Bn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var zf = /* @__PURE__ */ ni(Of, [["__file", "message.vue"]]);
let Df = 1;
const ba = (e) => {
  const t = !e || De(e) || wn(e) || xn(e) ? { message: e } : e, n = {
    ...Vt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (De(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    Pi(i) || (i = document.body), n.appendTo = i;
  }
  return Xs(se.grouping) && !n.grouping && (n.grouping = se.grouping), We(se.duration) && n.duration === 3e3 && (n.duration = se.duration), We(se.offset) && n.offset === 16 && (n.offset = se.offset), Xs(se.showClose) && !n.showClose && (n.showClose = se.showClose), n;
}, Nf = (e) => {
  const t = ae.indexOf(e);
  if (t === -1)
    return;
  ae.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Wf = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Df++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), Nf(d);
    },
    onDestroy: () => {
      Hn(null, o);
    }
  }, r = v(zf, a, xn(a.message) || wn(a.message) ? {
    default: xn(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || en._context, Hn(r, o), e.appendChild(o.firstElementChild);
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
}, en = (e = {}, t) => {
  if (!He)
    return { close: () => {
    } };
  const n = ba(e);
  if (n.grouping && ae.length) {
    const s = ae.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (We(se.max) && ae.length >= se.max)
    return { close: () => {
    } };
  const i = Wf(n, t);
  return ae.push(i), i.handler;
};
ka.forEach((e) => {
  en[e] = (t = {}, n) => {
    const i = ba(t);
    return en({ ...i, type: e }, n);
  };
});
function $f(e) {
  for (const t of ae)
    (!e || e === t.props.type) && t.handler.close();
}
en.closeAll = $f;
en._context = null;
const Ff = ya(en, "$message"), xa = [
  "success",
  "info",
  "warning",
  "error"
], Bf = an({
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
    type: va
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
    values: [...xa, ""],
    default: ""
  },
  zIndex: Number
}), Hf = {
  destroy: () => !0
}, jf = Ot({
  name: "ElNotification"
}), Uf = /* @__PURE__ */ Ot({
  ...jf,
  props: Bf,
  emits: Hf,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: s } = ga("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = vf, l = J(!1);
    let c;
    const d = V(() => {
      const w = n.type;
      return w && Xn[n.type] ? i.m(w) : "";
    }), g = V(() => n.type && Xn[n.type] || n.icon), y = V(() => n.position.endsWith("right") ? "right" : "left"), k = V(() => n.position.startsWith("top") ? "top" : "bottom"), L = V(() => {
      var w;
      return {
        [k.value]: `${n.offset}px`,
        zIndex: (w = n.zIndex) != null ? w : a.value
      };
    });
    function f() {
      n.duration > 0 && ({ stop: c } = sa(() => {
        l.value && m();
      }, n.duration));
    }
    function _() {
      c?.();
    }
    function m() {
      l.value = !1;
    }
    function x({ code: w }) {
      w === Fn.delete || w === Fn.backspace ? _() : w === Fn.esc ? l.value && m() : f();
    }
    return sn(() => {
      f(), o(), l.value = !0;
    }), ra(document, "keydown", x), t({
      visible: l,
      close: m
    }), (w, C) => (B(), $t(Ii, {
      name: I(i).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: (R) => w.$emit("destroy"),
      persisted: ""
    }, {
      default: Gt(() => [
        yn(A("div", {
          id: w.id,
          class: Ct([I(i).b(), w.customClass, I(y)]),
          style: zt(I(L)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: f,
          onClick: w.onClick
        }, [
          I(g) ? (B(), $t(I(Gn), {
            key: 0,
            class: Ct([I(i).e("icon"), I(d)])
          }, {
            default: Gt(() => [
              (B(), $t(_e(I(g))))
            ]),
            _: 1
          }, 8, ["class"])) : nt("v-if", !0),
          A("div", {
            class: Ct(I(i).e("group"))
          }, [
            A("h2", {
              class: Ct(I(i).e("title")),
              textContent: at(w.title)
            }, null, 10, ["textContent"]),
            yn(A("div", {
              class: Ct(I(i).e("content")),
              style: zt(w.title ? void 0 : { margin: 0 })
            }, [
              ze(w.$slots, "default", {}, () => [
                w.dangerouslyUseHTMLString ? (B(), K(Xt, { key: 1 }, [
                  nt(" Caution here, message could've been compromised, never use user's input as message "),
                  A("p", { innerHTML: w.message }, null, 8, ["innerHTML"])
                ], 2112)) : (B(), K("p", { key: 0 }, at(w.message), 1))
              ])
            ], 6), [
              [Bn, w.message]
            ]),
            w.showClose ? (B(), $t(I(Gn), {
              key: 0,
              class: Ct(I(i).e("closeBtn")),
              onClick: Wt(m, ["stop"])
            }, {
              default: Gt(() => [
                v(I(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : nt("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Bn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Vf = /* @__PURE__ */ ni(Uf, [["__file", "notification.vue"]]);
const Kn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ri = 16;
let Yf = 1;
const nn = function(e = {}, t) {
  if (!He)
    return { close: () => {
    } };
  (De(e) || wn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  Kn[n].forEach(({ vm: d }) => {
    var g;
    i += (((g = d.el) == null ? void 0 : g.offsetHeight) || 0) + Ri;
  }), i += Ri;
  const s = `notification_${Yf++}`, o = e.onClose, a = {
    ...e,
    offset: i,
    id: s,
    onClose: () => {
      Gf(s, n, o);
    }
  };
  let r = document.body;
  Pi(e.appendTo) ? r = e.appendTo : De(e.appendTo) && (r = document.querySelector(e.appendTo)), Pi(r) || (r = document.body);
  const l = document.createElement("div"), c = v(Vf, a, xn(a.message) ? a.message : wn(a.message) ? () => a.message : null);
  return c.appContext = ia(t) ? nn._context : t, c.props.onDestroy = () => {
    Hn(null, l);
  }, Hn(c, l), Kn[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
xa.forEach((e) => {
  nn[e] = (t = {}, n) => ((De(t) || wn(t)) && (t = {
    message: t
  }), nn({ ...t, type: e }, n));
});
function Gf(e, t, n) {
  const i = Kn[t], s = i.findIndex(({ vm: c }) => {
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
      const { el: d, component: g } = i[c].vm, y = Number.parseInt(d.style[r], 10) - a - Ri;
      g.props.offset = y;
    }
}
function Xf() {
  for (const e of Object.values(Kn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
nn.closeAll = Xf;
nn._context = null;
const Kf = ya(nn, "$notify"), te = {
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
    i === "center" ? Ff({
      message: t,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0
    }) : Kf({
      message: t,
      type: n,
      position: i,
      duration: s,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: "custom-notification"
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
}, Zf = ["disabled"], qf = {
  key: 0,
  class: "custom-button__loading"
}, Jf = /* @__PURE__ */ Ot({
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
    return (n, i) => (B(), K("button", {
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
      e.loading ? (B(), K("div", qf, i[1] || (i[1] = [
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
      ze(n.$slots, "default", {}, void 0, !0)
    ], 10, Zf));
  }
}), be = /* @__PURE__ */ Qn(Jf, [["__scopeId", "data-v-9497085f"]]), Qf = ["src"], tg = { class: "ocr-header" }, eg = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, ng = { "data-tauri-drag-region": "" }, ig = { class: "ocr-window-controls" }, sg = ["title"], og = ["title"], ag = ["title"], rg = ["title"], lg = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, cg = ["src"], ug = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, hg = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, dg = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, fg = { "data-tauri-drag-region": "" }, gg = { "data-tauri-drag-region": "" }, mg = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, pg = ["title"], yg = { class: "ocr-reading-surface" }, wg = {
  key: 0,
  class: "ocr-original-image"
}, vg = ["src"], kg = {
  key: 0,
  class: "ocr-state"
}, bg = {
  key: 1,
  class: "ocr-state error"
}, xg = {
  key: 2,
  class: "ocr-state muted"
}, _g = {
  key: 3,
  class: "ocr-text-content"
}, Sg = { class: "ocr-action-bar" }, Cg = { class: "translate-btn-group relative" }, Tg = {
  key: 0,
  class: "translate-menu"
}, Lg = ["onClick"], Mg = { class: "engine-label" }, Pg = { class: "ocr-engine-btn-group relative" }, Eg = {
  key: 0,
  class: "ocr-engine-menu"
}, Rg = ["onClick"], Ag = { class: "engine-label" }, Ig = { class: "ocr-engine-btn-group relative" }, Og = {
  key: 2,
  class: "zoom-info"
}, zg = /* @__PURE__ */ Ot({
  __name: "index",
  setup(e) {
    const { t } = Cn(), n = J(), i = J(null), s = J(""), o = J(""), a = J("pin"), r = J(""), l = J(!1), c = J(""), d = J(""), g = J(0), y = J(0), k = J({ width: 0, height: 0 }), L = J(!1), f = J(!1), _ = J(!1), m = J("bing"), x = J(!1), w = J("auto"), C = V(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: "离"
      }
    ]), R = V(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), z = (p) => {
      const $ = typeof p == "string" ? p.trim().toLowerCase() : "";
      return $ === "auto" || $ === "zh" || $ === "zh-tw" || $ === "en" || $ === "ja" || $ === "ko" ? $ : "auto";
    }, T = V(() => R.value.find((p) => p.value === w.value)?.label || t("pin.ocrLanguageAuto")), H = J(1), G = J(!1), Z = J(!1);
    let st = null;
    const it = J(!1), ut = J({ x: 0, y: 0 }), mt = J(!0), ht = J({ width: 0, height: 0 });
    let Q = null, ot = 0;
    const bt = J(""), dt = V(() => ({
      width: "100%",
      height: a.value === "ocr" ? "auto" : "100%",
      flex: a.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: a.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), j = V(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), wt = V(() => g.value > 0 && y.value > 0 ? `${g.value} × ${y.value}` : t("pin.screenshotPreview")), Y = V(() => l.value ? t("pin.recognizing") : c.value ? t("pin.recognizeFailed") : r.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Rt = V(() => r.value.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)), Ht = () => {
      const p = /* @__PURE__ */ new Date(), $ = (et) => et.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${p.getFullYear()}-${$(p.getMonth() + 1)}-${$(p.getDate())} ${$(p.getHours())}.${$(p.getMinutes())}.${$(p.getSeconds())}.png`;
    }, Kt = V(() => {
      const p = Math.min(
        ht.value.width,
        ht.value.height
      );
      let $ = 1;
      return p < 300 && ($ = Math.max(0.4, p / 300)), {
        left: `${ut.value.x}px`,
        top: `${ut.value.y}px`,
        transform: `scale(${$})`,
        transformOrigin: "top left"
      };
    }), Tt = (p) => {
      s.value = p, g.value = 0, y.value = 0, k.value = { width: 0, height: 0 }, a.value === "ocr" && (d.value = Ht()), o.value && (URL.revokeObjectURL(o.value), o.value = "");
      try {
        const $ = p.split(",")[1] || p, et = p.match(/data:([^;]+);/), Et = et ? et[1] : "image/png", Ut = atob($), fe = new Uint8Array(Ut.length);
        for (let ie = 0; ie < Ut.length; ie++)
          fe[ie] = Ut.charCodeAt(ie);
        const ne = new Blob([fe], { type: Et });
        o.value = URL.createObjectURL(ne);
      } catch ($) {
        F.error("[PIN窗口] 转换 Blob URL 失败", $), o.value = p;
      }
    }, xt = async () => {
      await pn(), await new Promise((p) => requestAnimationFrame(() => p()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (p) {
        F.error("[PIN窗口] 发送 ready 事件失败", p);
      }
    }, jt = (p) => {
      if (!p?.imageData)
        return F.error("[PIN窗口] 收到的事件数据格式不正确", p), !1;
      const $ = p.mode === "ocr" ? "ocr" : "pin", et = `${$}:${p.imageData.length}`;
      return et === bt.value ? !1 : (bt.value = et, a.value = $, Tt(p.imageData), Pt(), a.value === "ocr" ? (r.value = p.text || "", c.value = "", p.text || Zt()) : (ot++, l.value = !1, c.value = "", r.value = ""), !0);
    }, Zt = async () => {
      if (!s.value) return;
      const p = ++ot;
      l.value = !0, c.value = "";
      const $ = Date.now();
      Nt.log("[Pin OCR] recognize start", {
        requestId: p,
        imageDataLength: s.value.length,
        imageWidth: g.value,
        imageHeight: y.value,
        language: w.value
      });
      try {
        Nt.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: p,
          language: w.value
        });
        const et = await M("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: w.value
        }), Et = qt(et);
        if (Nt.log("[Pin OCR] backend OCR success", {
          requestId: p,
          resultEngine: et?.engine,
          resultLanguage: et?.language,
          confidence: et?.confidence,
          blocks: Array.isArray(et?.blocks) ? et.blocks.length : 0,
          textLength: Et.trim().length
        }), p !== ot) return;
        r.value = Et.trim(), Nt.log("[Pin OCR] recognize success", {
          requestId: p,
          durationMs: Date.now() - $,
          textLength: r.value.length,
          textPreview: r.value.slice(0, 300)
        });
      } catch (et) {
        if (p !== ot) return;
        F.error("[PIN窗口] OCR 识别失败", et), Nt.log("[Pin OCR] recognize failed", {
          requestId: p,
          durationMs: Date.now() - $,
          error: O(et)
        }), c.value = t("pin.recognizeFailed"), r.value = "", te.error(t("pin.recognizeFailed"));
      } finally {
        p === ot && (l.value = !1);
      }
    }, qt = (p) => typeof p == "string" ? p : p?.text ? p.text : p?.full_text ? p.full_text : Array.isArray(p?.blocks) ? p.blocks.map(($) => $?.text).filter(Boolean).join(`
`) : "", O = (p) => p instanceof Error ? `${p.name}: ${p.message}
${p.stack || ""}`.trim() : typeof p == "string" ? p : JSON.stringify(p) || String(p), rt = async () => {
      const p = r.value.trim();
      if (p)
        try {
          await navigator.clipboard.writeText(p), te.success(t("pin.copySuccess"));
        } catch ($) {
          F.error("[PIN窗口] 复制识别文本失败", $), te.error(t("pin.copyFailed"));
        } finally {
          Pt();
        }
    }, pt = async () => {
      const p = r.value.trim();
      if (p)
        try {
          await M("save_text_to_file", { text: p }), te.success(t("pin.saveSuccess"));
        } catch ($) {
          $ !== "SAVE_CANCELLED" && (F.error("[PIN窗口] 保存文本失败", $), te.error(t("pin.saveFailed")));
        }
    }, _t = () => {
      _.value = !_.value, x.value = !1;
    }, St = (p) => {
      m.value = p, _.value = !1, M("set_translation_engine", { engine: p }).catch(($) => {
        F.error("[PIN窗口] 保存翻译引擎设置失败", $);
      });
    }, Mt = () => {
      x.value = !x.value, _.value = !1;
    }, P = (p) => {
      w.value = p, x.value = !1, M("set_ocr_language", { language: p }).catch(($) => {
        F.error("[PIN窗口] 保存 OCR 语言设置失败", $);
      }), s.value && Zt();
    }, u = async () => {
      if (Pt(), _.value = !1, x.value = !1, !r.value.trim() || f.value) return;
      const p = Ee(r.value);
      if (!Xe(p)) {
        te.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      f.value = !0;
      try {
        let $ = "";
        if (m.value === "offline") {
          if ((await zi()).isCached)
            await mo();
          else
            throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          if (!await M(
            "get_offline_model_activated"
          ))
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          $ = await go(r.value);
        } else
          $ = await M("translate_text", {
            text: r.value,
            from: "auto",
            to: "zh",
            engine: m.value
          });
        $ && (r.value = $, te.success(t("pin.translateSuccess")));
      } catch ($) {
        F.error("[PIN窗口] 翻译失败", $);
        const et = $ instanceof Error ? $.message : String($);
        et !== "翻译已取消" && te.error(et || t("pin.translateFailed"));
      } finally {
        f.value = !1;
      }
    }, h = () => {
      L.value = !L.value;
    }, E = (p) => {
      lt(p);
    }, N = async () => {
      if (!i.value) return;
      const p = i.value;
      typeof p.minimize == "function" && await p.minimize();
    }, tt = async () => {
      if (!i.value) return;
      const p = i.value;
      (typeof p.isMaximized == "function" ? await p.isMaximized() : !1) && typeof p.unmaximize == "function" ? await p.unmaximize() : typeof p.maximize == "function" && await p.maximize();
    }, q = async (p) => {
      const $ = p.target;
      if (g.value = $.naturalWidth, y.value = $.naturalHeight, i.value && k.value.width === 0)
        try {
          const et = await i.value.innerSize(), Et = await i.value.scaleFactor(), Ut = et.toLogical(Et);
          k.value = {
            width: Ut.width,
            height: Ut.height
          };
        } catch (et) {
          F.error("[PIN窗口] 获取窗口初始尺寸失败", et);
        }
    }, b = async (p) => {
      if (p.ctrlKey && (p.preventDefault(), p.stopPropagation(), !Z.value && i.value)) {
        Z.value = !0;
        try {
          const et = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Et = p.deltaY > 0 ? 0.95 : 1.05, Ut = et.width, fe = et.height, ne = Math.round(Ut * Et), ie = Math.round(fe * Et), rn = 50, ke = 3e3;
          if (ne >= rn && ne <= ke && ie >= rn && ie <= ke) {
            if (await i.value.setSize(new hn(ne, ie)), g.value > 0) {
              const Me = Math.round(
                ne / g.value * 100
              );
              H.value = Me / 100;
            }
            G.value = !0, ct();
          }
        } catch ($) {
          F.error("[PIN窗口] 窗口缩放失败", $);
        } finally {
          setTimeout(() => {
            Z.value = !1;
          }, 100);
        }
      }
    }, D = (p) => {
      a.value === "ocr" && p.ctrlKey && b(p);
    }, ct = () => {
      G.value = !0, st && clearTimeout(st), st = setTimeout(() => {
        G.value = !1;
      }, 1e3);
    }, lt = (p) => {
      p.preventDefault(), p.stopPropagation(), it.value = !1, setTimeout(() => {
        const $ = window.innerWidth, et = window.innerHeight;
        ht.value = { width: $, height: et };
        const Et = Math.min($, et);
        let Ut = 1;
        Et < 300 && (Ut = Math.max(0.4, Et / 300));
        const fe = a.value === "ocr" ? 176 : 150, ne = a.value === "ocr" && r.value.trim() ? 222 : 180, ie = fe * Ut, rn = ne * Ut;
        let ke = p.clientX, Me = p.clientY;
        ke + ie > $ && (ke = $ - ie - 5), Me + rn > et && (Me = et - rn - 5), ke = Math.max(5, ke), Me = Math.max(5, Me), ut.value = { x: ke, y: Me }, it.value = !0;
      }, 10);
    }, Pt = () => {
      it.value = !1, _.value = !1, x.value = !1;
    }, Le = async () => {
      i.value && (mt.value = !mt.value, await i.value.setAlwaysOnTop(mt.value), Pt());
    }, de = async (p) => {
      if (i.value && !Z.value) {
        Z.value = !0;
        try {
          const et = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Et = Math.round(et.width * p), Ut = Math.round(et.height * p), fe = 50, ne = 3e3;
          Et >= fe && Et <= ne && Ut >= fe && Ut <= ne && (await i.value.setSize(new hn(Et, Ut)), g.value > 0 && (H.value = Et / g.value), ct());
        } catch ($) {
          F.error("[PIN窗口] 键盘缩放失败", $);
        } finally {
          setTimeout(() => {
            Z.value = !1;
          }, 100);
        }
      }
    }, Tn = async () => {
      if (i.value && k.value.width > 0 && k.value.height > 0)
        try {
          await i.value.setSize(
            new hn(
              k.value.width,
              k.value.height
            )
          ), H.value = 1, ct();
        } catch (p) {
          F.error("[PIN窗口] 重置缩放失败", p);
        }
      Pt();
    }, qi = async () => {
      try {
        const p = s.value;
        Pt(), i.value && await i.value.hide(), await M("copy_image_to_clipboard", { imageData: p }), te.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (p) {
        F.error("[PIN窗口] 复制图片失败", p), te.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, _a = async () => {
      const p = s.value;
      Pt(), i.value && await i.value.hide();
      try {
        await M("save_pin_image", { imageData: p }), te.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch ($) {
        $ === "SAVE_CANCELLED" ? (F.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (F.error("[PIN窗口] 保存图片失败", $), te.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, ii = async () => {
      i.value && await i.value.close();
    }, Ji = (p) => {
      p.preventDefault();
    }, si = async (p) => {
      if (p.button === 0 && i.value) {
        const $ = p.target;
        if ($.hasAttribute("data-tauri-drag-region") || $.closest("[data-tauri-drag-region]")) {
          if ($.closest("button") || $.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (et) {
            F.error("[PIN窗口] 拖拽窗口失败", et);
          }
        }
      }
    }, Qi = (p) => {
      const $ = p.target;
      !$.closest(".context-menu") && !$.closest(".ocr-engine-btn-group") && Pt();
    }, ts = (p) => {
      if (p.altKey && p.code === "Space") {
        p.preventDefault(), p.stopPropagation();
        return;
      }
      p.key === "Escape" ? it.value ? Pt() : ii() : (p.ctrlKey || p.metaKey) && (p.key === "0" ? (p.preventDefault(), Tn()) : p.key === "=" || p.key === "+" ? (p.preventDefault(), de(1.05)) : p.key === "-" && (p.preventDefault(), de(0.95)));
    }, Sa = async () => {
      if (i.value)
        try {
          const p = await M(
            "get_pin_window_data",
            { label: i.value.label }
          );
          p && jt(p) && await xt();
        } catch (p) {
          F.error("[PIN窗口] 主动获取窗口数据失败", p);
        }
    };
    return sn(async () => {
      if (n.value) {
        try {
          const [p, $] = await Promise.all([
            M("get_translation_engine"),
            M("get_ocr_language")
          ]);
          (p === "google" || p === "bing" || p === "offline") && (m.value = p), w.value = z($);
        } catch (p) {
          F.error("[PIN窗口] 读取默认 OCR/翻译设置失败", p);
        }
        try {
          i.value = Sn.getCurrent();
          try {
            Q = await i.value.listen(
              "pin-window-data",
              (p) => {
                jt(p.payload) && xt();
              }
            ), await Sa();
          } catch (p) {
            F.error("[PIN窗口] 设置事件监听失败", p);
          }
        } catch (p) {
          if (F.error("[PIN窗口] 初始化错误", p), i.value)
            try {
              await i.value.show();
            } catch ($) {
              F.error("[PIN窗口] 显示窗口失败", $);
            }
        }
        document.addEventListener("click", Qi), document.addEventListener("keydown", ts, !0), document.addEventListener("contextmenu", Ji, !0), window.addEventListener("blur", Pt), document.body && (document.body.oncontextmenu = (p) => (p.preventDefault(), !1));
      }
    }), Ai(() => {
      o.value && URL.revokeObjectURL(o.value), Q && Q(), document.removeEventListener("click", Qi), document.removeEventListener("keydown", ts, !0), document.removeEventListener("contextmenu", Ji, !0), window.removeEventListener("blur", Pt), document.body && (document.body.oncontextmenu = null), st && clearTimeout(st);
    }), (p, $) => (B(), K(
      "div",
      {
        class: Ct(["pin-container", { "ocr-mode": a.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: Wt(lt, ["prevent"]),
        onWheelCapture: D
      },
      [
        nt(" 图片容器 "),
        o.value && a.value === "pin" ? (B(), K(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: zt(dt.value),
            onWheelCapture: b,
            onContextmenu: Wt(lt, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: si
          },
          [
            A("img", {
              src: o.value,
              alt: "贴图",
              style: zt(j.value),
              onLoad: q,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Qf)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : nt("v-if", !0),
        a.value === "ocr" ? (B(), K(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: Wt(lt, ["prevent"])
          },
          [
            A("header", tg, [
              A(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: si
                },
                [
                  A("div", eg, [
                    v(I(Dn), {
                      theme: "outline",
                      size: "18"
                    }),
                    A(
                      "span",
                      ng,
                      at(p.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  A("div", ig, [
                    A("button", {
                      class: "ocr-window-btn",
                      title: mt.value ? p.$t("pin.togglePin") : p.$t("pin.pinWindow"),
                      onClick: Wt(Le, ["stop"])
                    }, [
                      (B(), $t(_e(mt.value ? I(vi) : I(gs)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, sg),
                    $[0] || ($[0] = A(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    A("button", {
                      class: "ocr-window-btn",
                      title: p.$t("pin.minimize"),
                      onClick: Wt(N, ["stop"])
                    }, [
                      v(I(_o), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, og),
                    A("button", {
                      class: "ocr-window-btn",
                      title: p.$t("pin.maximize"),
                      onClick: Wt(tt, ["stop"])
                    }, [
                      v(I(_l), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, ag),
                    A("button", {
                      class: "ocr-window-btn",
                      title: p.$t("pin.close"),
                      onClick: Wt(ii, ["stop"])
                    }, [
                      v(I(wi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, rg)
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
                  onMousedown: si
                },
                [
                  A("div", lg, [
                    o.value ? (B(), K("img", {
                      key: 0,
                      src: o.value,
                      alt: "OCR preview",
                      onLoad: q,
                      draggable: "false"
                    }, null, 40, cg)) : nt("v-if", !0)
                  ]),
                  A("div", ug, [
                    A(
                      "div",
                      hg,
                      at(d.value),
                      1
                      /* TEXT */
                    ),
                    A("div", dg, [
                      A(
                        "span",
                        fg,
                        at(wt.value),
                        1
                        /* TEXT */
                      ),
                      $[1] || ($[1] = A(
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
                        gg,
                        at(Y.value),
                        1
                        /* TEXT */
                      ),
                      !l.value && !c.value && r.value.trim() ? (B(), K("span", mg, " ✓ ")) : nt("v-if", !0)
                    ])
                  ]),
                  A("button", {
                    class: "ocr-view-original",
                    title: L.value ? p.$t("pin.viewResult") : p.$t("pin.viewOriginal"),
                    onClick: Wt(h, ["stop"])
                  }, [
                    (B(), $t(_e(L.value ? I(Dn) : I(yl)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    A(
                      "span",
                      null,
                      at(L.value ? p.$t("pin.viewResult") : p.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, pg)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            A("main", yg, [
              L.value ? (B(), K("div", wg, [
                A("img", {
                  src: o.value || s.value,
                  alt: "original"
                }, null, 8, vg)
              ])) : (B(), K(
                Xt,
                { key: 1 },
                [
                  l.value ? (B(), K("div", kg, [
                    v(I(fs), {
                      class: "ocr-loading-icon",
                      size: "20",
                      theme: "outline",
                      strokeWidth: 3
                    }),
                    A(
                      "span",
                      null,
                      at(p.$t("pin.recognizing")),
                      1
                      /* TEXT */
                    )
                  ])) : c.value ? (B(), K(
                    "div",
                    bg,
                    at(c.value),
                    1
                    /* TEXT */
                  )) : r.value.trim() ? (B(), K("div", _g, [
                    (B(!0), K(
                      Xt,
                      null,
                      me(Rt.value, (et, Et) => (B(), K(
                        "p",
                        { key: Et },
                        at(et),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : (B(), K(
                    "div",
                    xg,
                    at(p.$t("pin.noTextRecognized")),
                    1
                    /* TEXT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            A("footer", Sg, [
              v(be, {
                class: "ocr-action-btn",
                type: "text",
                title: p.$t("pin.copyText"),
                disabled: !r.value.trim(),
                onClick: Wt(rt, ["stop"])
              }, {
                default: Gt(() => [
                  v(I(li), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    at(p.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              A("div", Cg, [
                v(be, {
                  class: "ocr-action-btn translate-main",
                  type: "text",
                  title: p.$t("pin.translate"),
                  disabled: !r.value.trim() || f.value,
                  onClick: Wt(u, ["stop"])
                }, {
                  default: Gt(() => [
                    f.value ? (B(), $t(I(fs), {
                      key: 1,
                      class: "ocr-loading-icon",
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })) : (B(), $t(I(So), {
                      key: 0,
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })),
                    A(
                      "span",
                      null,
                      at(p.$t("pin.translate")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                v(be, {
                  class: "ocr-action-btn translate-arrow",
                  type: "text",
                  disabled: !r.value.trim() || f.value,
                  onClick: Wt(_t, ["stop"])
                }, {
                  default: Gt(() => [
                    v(I(ds), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.8
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                nt(" 翻译引擎菜单 "),
                _.value ? (B(), K("div", Tg, [
                  (B(!0), K(
                    Xt,
                    null,
                    me(C.value, (et) => (B(), K("div", {
                      key: et.value,
                      class: Ct(["menu-item", { active: m.value === et.value }]),
                      onClick: (Et) => St(et.value)
                    }, [
                      A(
                        "span",
                        Mg,
                        at(et.label),
                        1
                        /* TEXT */
                      ),
                      m.value === et.value ? (B(), $t(_e(I(yi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : nt("v-if", !0)
                    ], 10, Lg))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : nt("v-if", !0)
              ]),
              A("div", Pg, [
                v(be, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: p.$t("pin.ocrLanguage"),
                  disabled: l.value,
                  onClick: Wt(Mt, ["stop"])
                }, {
                  default: Gt(() => [
                    v(I(Dn), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    A(
                      "span",
                      null,
                      at(T.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                v(be, {
                  class: "ocr-action-btn ocr-engine-arrow",
                  type: "text",
                  disabled: l.value,
                  onClick: Wt(Mt, ["stop"])
                }, {
                  default: Gt(() => [
                    v(I(ds), {
                      size: "14",
                      theme: "outline",
                      strokeWidth: 3
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                x.value ? (B(), K("div", Eg, [
                  (B(!0), K(
                    Xt,
                    null,
                    me(R.value, (et) => (B(), K("div", {
                      key: et.value,
                      class: Ct(["menu-item", { active: w.value === et.value }]),
                      onClick: (Et) => P(et.value)
                    }, [
                      A(
                        "span",
                        Ag,
                        at(et.label),
                        1
                        /* TEXT */
                      ),
                      w.value === et.value ? (B(), $t(_e(I(yi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : nt("v-if", !0)
                    ], 10, Rg))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : nt("v-if", !0)
              ]),
              A("div", Ig, [
                v(be, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: p.$t("pin.recognizeAgain"),
                  disabled: l.value || !s.value,
                  onClick: Wt(Zt, ["stop"])
                }, {
                  default: Gt(() => [
                    v(I(kl), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    A(
                      "span",
                      null,
                      at(p.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              v(be, {
                class: "ocr-action-btn",
                type: "text",
                title: p.$t("pin.saveAsText"),
                disabled: !r.value.trim(),
                onClick: Wt(pt, ["stop"])
              }, {
                default: Gt(() => [
                  v(I(ps), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  A(
                    "span",
                    null,
                    at(p.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              $[2] || ($[2] = A(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              v(be, {
                class: "ocr-action-btn more",
                type: "text",
                title: p.$t("pin.more"),
                onClick: Wt(E, ["stop"])
              }, {
                default: Gt(() => [
                  v(I(gl), {
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
        G.value ? (B(), K(
          "div",
          Og,
          at(Math.round(H.value * 100)) + "% ",
          1
          /* TEXT */
        )) : nt("v-if", !0),
        nt(" 右键菜单 "),
        it.value ? (B(), K(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: zt(Kt.value)
          },
          [
            A("div", {
              class: "menu-item",
              onClick: Le
            }, [
              (B(), $t(_e(mt.value ? I(gs) : I(vi)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              A(
                "span",
                null,
                at(mt.value ? p.$t("pin.togglePin") : p.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: Tn
            }, [
              v(I(vl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(p.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: qi
            }, [
              v(I(li), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(p.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            A("div", {
              class: "menu-item",
              onClick: _a
            }, [
              v(I(ps), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(p.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            a.value === "ocr" && r.value.trim() ? (B(), K("div", {
              key: 0,
              class: "menu-item",
              onClick: rt
            }, [
              v(I(li), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(p.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            $[3] || ($[3] = A(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            A("div", {
              class: "menu-item danger",
              onClick: ii
            }, [
              v(I(wi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              A(
                "span",
                null,
                at(p.$t("pin.closePin")),
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
}), Dg = /* @__PURE__ */ Qn(zg, [["__scopeId", "data-v-332110e5"]]), Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dg
}, Symbol.toStringTag, { value: "Module" }));
async function Wg(e) {
  return e.toDataURL("image/png");
}
function $g(e) {
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
async function Fg(e) {
  const t = Date.now(), n = await Wg(e);
  Nt.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await M("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr"
    }), s = $g(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || po(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return Nt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw F.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Nt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function Bg() {
  return Promise.resolve();
}
async function Hg() {
  return Promise.resolve();
}
const jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: Fg,
  terminateOcr: Hg,
  warmupOcr: Bg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Yg as activate
};
