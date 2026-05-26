var ka = Object.defineProperty;
var ba = (e, t, n) => t in e ? ka(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var H = (e, t, n) => ba(e, typeof t != "symbol" ? t + "" : t, n);
import * as ii from "vue";
import { defineAsyncComponent as Qi, inject as Se, createVNode as _, ref as J, shallowRef as xa, computed as V, watch as Ce, onMounted as tn, onUnmounted as Ri, defineComponent as Ot, h as so, Text as _a, Fragment as Kt, nextTick as fn, createElementBlock as q, openBlock as j, createCommentVNode as nt, createElementVNode as O, renderList as me, normalizeClass as Ct, createBlock as $t, resolveDynamicComponent as _e, unref as z, normalizeStyle as Dt, toDisplayString as wt, withDirectives as gn, withKeys as ts, vModelText as Sa, getCurrentInstance as Ge, readonly as Ca, getCurrentScope as Ta, onScopeDispose as La, isRef as Ma, warn as Pa, provide as Ra, mergeProps as Ea, renderSlot as ze, Transition as Ei, withCtx as Gt, createTextVNode as Aa, vShow as $n, shallowReactive as Ia, withModifiers as Wt, isVNode as mn, render as Fn } from "vue";
const Tg = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: Qi(() => Promise.resolve().then(() => ju))
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: Qi(() => Promise.resolve().then(() => wg))
  });
};
function Oa(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function za(e, t, n, i, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var En;
const te = "__TAURI_TO_IPC_KEY__";
function Da(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function P(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Na(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Wa {
  get rid() {
    return Oa(this, En, "f");
  }
  constructor(t) {
    En.set(this, void 0), za(this, En, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return P("plugin:resources|close", {
      rid: this.rid
    });
  }
}
En = /* @__PURE__ */ new WeakMap();
class ln {
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
    return new cn(this.width * t, this.height * t);
  }
  [te]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[te]();
  }
}
class cn {
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
    return new ln(this.width / t, this.height / t);
  }
  [te]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[te]();
  }
}
class He {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof ln ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof cn ? this.size : this.size.toPhysical(t);
  }
  [te]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[te]();
  }
}
class oo {
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
  [te]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[te]();
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
    return new oo(this.x / t, this.y / t);
  }
  [te]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[te]();
  }
}
class Cn {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof oo ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof xe ? this.position : this.position.toPhysical(t);
  }
  [te]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[te]();
  }
}
var Zt;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Zt || (Zt = {}));
async function ao(e, t) {
  await P("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function un(e, t, n) {
  var i;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return P("plugin:event|listen", {
    event: e,
    target: s,
    handler: Da(t)
  }).then((o) => async () => ao(e, o));
}
async function $a(e, t, n) {
  return un(e, (i) => {
    ao(e, i.id), t(i);
  }, n);
}
async function Fa(e, t) {
  await P("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ba(e, t, n) {
  await P("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let Ha = class An extends Wa {
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
    return P("plugin:image|new", {
      rgba: Bn(t),
      width: n,
      height: i
    }).then((s) => new An(s));
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
    return P("plugin:image|from_bytes", {
      bytes: Bn(t)
    }).then((n) => new An(n));
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
    return P("plugin:image|from_path", { path: t }).then((n) => new An(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return P("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return P("plugin:image|size", { rid: this.rid });
  }
};
function Bn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ha ? e.rid : e;
}
var hi;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(hi || (hi = {}));
class ja {
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
var es;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(es || (es = {}));
function Ua() {
  return new bn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function si() {
  return P("plugin:window|get_all_windows").then((e) => e.map((t) => new bn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const oi = ["tauri://created", "tauri://error"];
class bn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || P("plugin:window|create", {
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
    return (n = (await si()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ua();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return si();
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
    for (const t of await si())
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
    } : un(t, n, {
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
    } : $a(t, n, {
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
    if (oi.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Fa(t, n);
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
    if (oi.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return Ba(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return oi.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return P("plugin:window|scale_factor", {
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
    return P("plugin:window|inner_position", {
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
    return P("plugin:window|outer_position", {
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
    return P("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new cn(t));
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
    return P("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new cn(t));
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
    return P("plugin:window|is_fullscreen", {
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
    return P("plugin:window|is_minimized", {
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
    return P("plugin:window|is_maximized", {
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
    return P("plugin:window|is_focused", {
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
    return P("plugin:window|is_decorated", {
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
    return P("plugin:window|is_resizable", {
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
    return P("plugin:window|is_maximizable", {
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
    return P("plugin:window|is_minimizable", {
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
    return P("plugin:window|is_closable", {
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
    return P("plugin:window|is_visible", {
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
    return P("plugin:window|title", {
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
    return P("plugin:window|theme", {
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
    return P("plugin:window|is_always_on_top", {
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
    return P("plugin:window|center", {
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
    return t && (t === hi.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), P("plugin:window|request_user_attention", {
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
    return P("plugin:window|set_resizable", {
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
    return P("plugin:window|set_enabled", {
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
    return P("plugin:window|is_enabled", {
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
    return P("plugin:window|set_maximizable", {
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
    return P("plugin:window|set_minimizable", {
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
    return P("plugin:window|set_closable", {
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
    return P("plugin:window|set_title", {
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
    return P("plugin:window|maximize", {
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
    return P("plugin:window|unmaximize", {
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
    return P("plugin:window|toggle_maximize", {
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
    return P("plugin:window|minimize", {
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
    return P("plugin:window|unminimize", {
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
    return P("plugin:window|show", {
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
    return P("plugin:window|hide", {
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
    return P("plugin:window|close", {
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
    return P("plugin:window|destroy", {
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
    return P("plugin:window|set_decorations", {
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
    return P("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return P("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return P("plugin:window|set_effects", {
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
    return P("plugin:window|set_always_on_top", {
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
    return P("plugin:window|set_always_on_bottom", {
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
    return P("plugin:window|set_content_protected", {
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
    return P("plugin:window|set_size", {
      label: this.label,
      value: t instanceof He ? t : new He(t)
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
    return P("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof He ? t : t ? new He(t) : null
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
    return P("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof He ? t : t ? new He(t) : null
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
    return P("plugin:window|set_size_constraints", {
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
    return P("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Cn ? t : new Cn(t)
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
    return P("plugin:window|set_fullscreen", {
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
    return P("plugin:window|set_focus", {
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
    return P("plugin:window|set_icon", {
      label: this.label,
      value: Bn(t)
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
    return P("plugin:window|set_skip_taskbar", {
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
    return P("plugin:window|set_cursor_grab", {
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
    return P("plugin:window|set_cursor_visible", {
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
    return P("plugin:window|set_cursor_icon", {
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
    return P("plugin:window|set_background_color", { color: t });
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
    return P("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Cn ? t : new Cn(t)
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
    return P("plugin:window|set_ignore_cursor_events", {
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
    return P("plugin:window|start_dragging", {
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
    return P("plugin:window|start_resize_dragging", {
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
    return P("plugin:window|set_badge_count", {
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
    return P("plugin:window|set_badge_label", {
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
    return P("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Bn(t) : void 0
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
    return P("plugin:window|set_progress_bar", {
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
    return P("plugin:window|set_visible_on_all_workspaces", {
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
    return P("plugin:window|set_title_bar_style", {
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
    return P("plugin:window|set_theme", {
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
    return this.listen(Zt.WINDOW_RESIZED, (n) => {
      n.payload = new cn(n.payload), t(n);
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
    return this.listen(Zt.WINDOW_MOVED, (n) => {
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
    return this.listen(Zt.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new ja(n);
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
    const n = await this.listen(Zt.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new xe(a.payload.position)
        }
      });
    }), i = await this.listen(Zt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new xe(a.payload.position)
        }
      });
    }), s = await this.listen(Zt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new xe(a.payload.position)
        }
      });
    }), o = await this.listen(Zt.DRAG_LEAVE, (a) => {
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
    const n = await this.listen(Zt.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(Zt.WINDOW_BLUR, (s) => {
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
    return this.listen(Zt.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Zt.WINDOW_THEME_CHANGED, t);
  }
}
var ns;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ns || (ns = {}));
var is;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(is || (is = {}));
var ss;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ss || (ss = {}));
function Bt(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function os(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function Ai(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function Va(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function ce(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function je(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class Ya {
  constructor(t, n) {
    H(this, "canvas");
    H(this, "ctx");
    H(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = n;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t) {
    if (!je(t)) {
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
    this.ctx.lineWidth = 1, this.ctx.setLineDash([4, 3]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.55)", this.ctx.strokeRect(r + 1, l + 1, c, h), this.ctx.strokeStyle = "#ffffff", this.ctx.strokeRect(r, l, c, h), n && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: n, y: i, width: s, height: o } = t, a = Ai(t);
    this.ctx.setLineDash([]);
    const r = 5;
    [
      { x: n, y: i },
      // 左上
      { x: n + s, y: i },
      // 右上
      { x: n, y: i + o },
      // 左下
      { x: n + s, y: i + o },
      // 右下
      { x: a.x, y: i },
      // 上中
      { x: a.x, y: i + o },
      // 下中
      { x: n, y: a.y },
      // 左中
      { x: n + s, y: a.y }
      // 右中
    ].forEach((c) => {
      const h = Math.round(c.x) - r / 2, f = Math.round(c.y) - r / 2;
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.42)", this.ctx.fillRect(h + 1, f + 1, r, r), this.ctx.fillStyle = "#ffffff", this.ctx.fillRect(h, f, r, r);
    });
  }
  // 绘制标注列表
  drawAnnotations(t, n) {
    const i = this.createDrawingContext(n);
    t.forEach((s) => {
      const o = s.getData();
      o.hovered && s.drawHover(i), s.draw(i), o.selected && (s.drawSelection(i), (o.type === "rectangle" || o.type === "arrow") && this.drawAnnotationHandles(s));
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
    if (n.type !== "mosaic" && n.type !== "text" && (n.type === "rectangle" || n.type === "arrow") && n.points.length >= 2) {
      const i = n.points[0], s = n.points[n.points.length - 1], o = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(i.x, i.y, o, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(s.x, s.y, o, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, n) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: i, colorInfo: s, showFormat: o, previewImage: a, zoomFactor: r, isCopied: l } = t, c = 156, h = 188, f = 18;
    let p = i.x + f, k = i.y + f;
    p + c > n.x + n.width && (p = i.x - c - f), k + h > n.y + n.height && (k = i.y - h - f), p < n.x && (p = n.x + f), k < n.y && (k = n.y + f), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(p, k, c, h, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const v = 108, w = p + (c - v) / 2, b = k + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(w, b, v, v), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(w, b, v, v);
    const g = a ? a.width : r, x = v / g;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      w,
      b,
      v,
      v
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let B = 1; B < g; B++) {
      const Y = w + B * x;
      this.ctx.moveTo(Y, b), this.ctx.lineTo(Y, b + v);
      const K = b + B * x;
      this.ctx.moveTo(w, K), this.ctx.lineTo(w + v, K);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let B = 1; B < g; B++) {
      const Y = w + B * x + 0.5;
      this.ctx.moveTo(Y, b), this.ctx.lineTo(Y, b + v);
      const K = b + B * x + 0.5;
      this.ctx.moveTo(w, K), this.ctx.lineTo(w + v, K);
    }
    this.ctx.stroke();
    const y = Math.floor(g / 2), S = w + y * x, E = b + y * x;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(S, E, x, x), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      S - 1,
      E - 1,
      x + 2,
      x + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      S,
      E,
      x,
      x
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let I = b + v + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(p + 16, I - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(p + 16, I - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const B = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(B, p + 44, I), I += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, p + 16, I), I += 17, this.ctx.font = "12px Arial";
    const T = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(T, p + 16, I), this.ctx.restore();
  }
}
class Ga {
  // 物理尺寸
  constructor(t) {
    H(this, "scale");
    H(this, "canvasRect");
    H(this, "canvasSize");
    // 逻辑尺寸
    H(this, "physicalSize");
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
    return !ce(t) || !je(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !ce(t) || !je(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + n.x,
      y: t.y + n.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return je(t) ? {
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
    return Va(t, n);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!je(t))
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
    return Bt(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!ce(t) || !je(n))
      return !1;
    if (i === 0)
      return os(t, n);
    const s = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return os(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, s = 8) {
    if (!ce(t) || !ce(n) || !ce(i))
      return !1;
    const o = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = o * r + a * l, h = r * r + l * l;
    if (h === 0)
      return Bt(t, n) <= s;
    const f = c / h;
    let p;
    return f < 0 ? p = n : f > 1 ? p = i : p = {
      x: n.x + f * r,
      y: n.y + f * l
    }, Bt(t, p) <= s;
  }
}
var W = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(W || {}), A = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(A || {});
class Xa {
  constructor(t, n) {
    H(this, "coordinateSystem");
    H(this, "canvas");
    H(this, "isDrawing", !1);
    H(this, "currentOperation", W.None);
    H(this, "startPoint", { x: 0, y: 0 });
    H(this, "lastMousePos", { x: 0, y: 0 });
    H(this, "preventDefault", (t) => {
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
    if (n !== A.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(n) : W.None : W.Drawing;
    if (o) {
      if (o.getData().type === A.Mosaic)
        return W.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== W.None ? a : W.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : W.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [A.Rectangle]: W.DrawingRect,
      [A.Arrow]: W.DrawingArrow,
      [A.Pen]: W.DrawingPen,
      [A.Text]: W.DrawingText,
      [A.Mosaic]: W.DrawingMosaic,
      [A.ColorPicker]: W.ColorPicking,
      [A.Ocr]: W.None,
      [A.Pin]: W.Pinning,
      [A.Translate]: W.None,
      [A.Select]: W.None
    }[t] || W.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, n, i) {
    const { x: s, y: o, width: a, height: r } = n, l = 12;
    if (i)
      return W.None;
    const c = Ai(n);
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
    if (i.type === A.Mosaic || i.type === A.Text)
      return W.None;
    if ((i.type === A.Rectangle || i.type === A.Arrow) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = Bt(t, s), c = Bt(t, o);
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
class xn {
  constructor(t) {
    H(this, "data");
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
  // 生成唯一ID
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
class Ka extends xn {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: A.Rectangle,
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
    n.save(), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(i.x, i.y, o, a), n.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: o.x * i - s.x,
      y: o.y * i - s.y
    }, l = (a.x - o.x) * i, c = (a.y - o.y) * i;
    n.save(), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth * i, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(r.x, r.y, l, c), n.restore();
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
      if (Bt(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Za extends xn {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: A.Arrow,
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
    t.save(), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
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
      return Bt(t, n) <= s;
    const f = c / h;
    let p;
    return f < 0 ? p = n : f > 1 ? p = i : p = {
      x: n.x + f * r,
      y: n.y + f * l
    }, Bt(t, p) <= s;
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
      if (Bt(t, s) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class qa extends xn {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: A.Pen,
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
      const n = this.data.points[this.data.points.length - 1], i = Bt(t, n);
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
    t.save(), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
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
      return this.data.points.length === 1 ? Bt(t, this.data.points[0]) <= n : !1;
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
      return Bt(t, n) <= s;
    const f = c / h;
    let p;
    return f < 0 ? p = n : f > 1 ? p = i : p = {
      x: n.x + f * r,
      y: n.y + f * l
    }, Bt(t, p) <= s;
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
class Ja extends xn {
  constructor(t, n, i, s = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: A.Text,
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
    t.save(), t.font = `${o}px sans-serif`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = (a.x + 4) * n - i.x, l = (a.y - 8) * n - i.y;
    t.fillText(this.data.text, r, l), t.restore();
  }
  hitTest(t, n = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px sans-serif`;
    const l = a.measureText(this.data.text).width, c = i.x + 4, h = i.y - 8;
    return t.x >= c - n && t.x <= c + l + n && t.y >= h - n && t.y <= h + s + n;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], n = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${n}px sans-serif`;
    const a = s.measureText(this.data.text).width, r = t.x + 4, l = t.y - 8;
    return {
      x: r,
      y: l,
      width: a,
      height: n
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = (o.x + 4) * i - s.x, l = (o.y - 8) * i - s.y;
    n.save(), n.font = `${a}px sans-serif`;
    const h = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(r, l, h, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = (o.x + 4) * i - s.x, l = (o.y - 8) * i - s.y;
    n.save(), n.font = `${a}px sans-serif`;
    const h = n.measureText(this.data.text).width;
    n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(r, l, h, a), n.restore();
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
const ue = class ue extends xn {
  constructor(t, n, i = 5) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: A.Mosaic,
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
      const n = this.data.points[this.data.points.length - 1], i = Bt(t, n);
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
    const o = ue.helperCanvas, a = ue.helperCtx, r = n || 1, l = this.data.mosaicSize || 5, c = Math.max(Math.round(l * r), 2), h = l * 3, f = this.getBounds();
    if (!f) return;
    const p = h, k = Math.floor(f.x - p), v = Math.floor(f.y - p), w = Math.ceil(f.width + p * 2), b = Math.ceil(f.height + p * 2);
    if (w <= 0 || b <= 0) return;
    const g = Math.floor(k * r - i.x), x = Math.floor(v * r - i.y), y = Math.ceil(w * r), S = Math.ceil(b * r), E = t.canvas.width, I = t.canvas.height, T = Math.max(0, g), B = Math.max(0, x), Y = Math.min(y, E - T), K = Math.min(S, I - B);
    if (Y <= 0 || K <= 0) return;
    let ot;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), ot = t.getImageData(T, B, Y, K), t.restore();
    } catch {
      return;
    }
    const it = ot.data, lt = T % c, gt = B % c;
    for (let ct = -gt; ct < K; ct += c)
      for (let Q = -lt; Q < Y; Q += c) {
        const at = Math.max(0, Q), kt = Math.max(0, ct), ht = Math.min(Y, Q + c), X = Math.min(K, ct + c);
        if (at >= ht || kt >= X) continue;
        let mt = 0, tt = 0, zt = 0, jt = 0;
        for (let Tt = kt; Tt < X; Tt++)
          for (let Lt = at; Lt < ht; Lt++) {
            const Rt = (Tt * Y + Lt) * 4;
            mt += it[Rt], tt += it[Rt + 1], zt += it[Rt + 2], jt++;
          }
        if (jt > 0) {
          mt = Math.round(mt / jt), tt = Math.round(tt / jt), zt = Math.round(zt / jt);
          for (let Tt = kt; Tt < X; Tt++)
            for (let Lt = at; Lt < ht; Lt++) {
              const Rt = (Tt * Y + Lt) * 4;
              it[Rt] = mt, it[Rt + 1] = tt, it[Rt + 2] = zt;
            }
        }
      }
    o.width = Y, o.height = K, a.putImageData(ot, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = h * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, T, B), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, T, B), t.restore();
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
        const f = this.data.points[h], p = this.data.points[h + 1], k = (a(f) + a(p)) / 2, v = (r(f) + r(p)) / 2;
        t.quadraticCurveTo(a(f), r(f), k, v);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Bt(t, this.data.points[0]) <= (this.data.mosaicSize || 5) / 2 + n;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const s = this.data.points[i], o = this.data.points[i + 1];
      if (this.isPointNearLine(t, s, o, (this.data.mosaicSize || 5) / 2 + n))
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
    let f = -1;
    h !== 0 && (f = c / h);
    let p, k;
    f < 0 ? (p = n.x, k = n.y) : f > 1 ? (p = i.x, k = i.y) : (p = n.x + f * r, k = n.y + f * l);
    const v = t.x - p, w = t.y - k;
    return v * v + w * w <= s * s;
  }
  drawSelection(t) {
  }
  drawHover(t) {
  }
  updateMosaicSize(t) {
    this.data.mosaicSize = t;
  }
  getMosaicSize() {
    return this.data.mosaicSize || 5;
  }
};
// 缓存离屏 Canvas 以减少 GC 压力（静态复用）
H(ue, "helperCanvas", null), H(ue, "helperCtx", null);
let di = ue;
class Tn {
  static createAnnotation(t, n, i, s = {}) {
    switch (t) {
      case A.Rectangle:
        return new Ka(n, i);
      case A.Arrow:
        return new Za(n, i);
      case A.Pen:
        return new qa(n, i);
      case A.Text:
        return new Ja(
          n,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case A.Mosaic:
        return new di(
          n,
          i,
          s.mosaicSize || 5
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
      [A.Rectangle]: "drawing-rect",
      [A.Arrow]: "drawing-arrow",
      [A.Pen]: "drawing-pen",
      [A.Text]: "drawing-text",
      [A.Mosaic]: "drawing-mosaic",
      [A.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== A.Select && t !== A.ColorPicker && t !== A.Ocr && t !== A.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== A.Select && t !== A.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      A.Rectangle,
      A.Arrow,
      A.Pen,
      A.Text
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      A.Rectangle,
      A.Arrow,
      A.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === A.Text;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === A.Mosaic;
  }
}
const Ie = class Ie {
  constructor() {
    H(this, "pool", []);
    H(this, "maxPoolSize", 5);
    // 最大池大小
    H(this, "inUse", /* @__PURE__ */ new Set());
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
H(Ie, "instance");
let fi = Ie;
async function Qa(e, t) {
  return await P("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const F = {
  info: (e, t, ...n) => {
    P("frontend_log", {
      level: "info",
      message: e,
      data: t === void 0 ? null : In(t)
    }).catch(() => {
    });
  },
  error: (e, t) => {
    P("frontend_log", {
      level: "error",
      message: e,
      data: t === void 0 ? null : In(t)
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    P("frontend_log", {
      level: "warn",
      message: e,
      data: t === void 0 ? null : In(t)
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
}, Nt = {
  log: (e, t) => {
    P("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : In(t)
    }).catch(() => {
    });
  }
};
function In(e) {
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
const tr = "resources/transformers/transformers.min.js", er = ["translation-offline-runtime", "translation"], nr = "https://huggingface.co/", ir = "{model}/resolve/{revision}/", sr = "/__snippets_code_disabled_transformers_local_models__/", or = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let on = null;
const ar = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e;
  return n.slice(0, n.lastIndexOf("/") + 1);
}, rr = (e) => {
  const t = ar(e);
  return Object.fromEntries(
    or.map((n) => [n, `${t}${n}`])
  );
}, ro = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = nr, e.remotePathTemplate = ir, e.allowLocalModels = !1, e.localModelPath = sr, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = rr(t), e.backends.onnx.wasm.numThreads = 1);
};
async function lr() {
  return on || (on = (async () => {
    for (const e of er) {
      const t = await Qa(e, tr);
      if (!t) continue;
      const n = Na(t), i = await import(
        /* @vite-ignore */
        n
      );
      return ro(i.env, n), F.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw on = null, e;
  }), on);
}
let pe = null, hn = !1, Ue = null, Oe = null, gi = null;
const cr = "Xenova/opus-mt-en-zh", ur = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], hr = 3e5;
function dr(e) {
  gi = e;
}
function fr() {
  return ur;
}
function gr(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(n)), t)
    )
  ]);
}
async function lo() {
  return pe || Ue || (hn = !0, F.info("[离线翻译] 正在加载翻译模型..."), Ue = (async () => {
    try {
      const { pipeline: e, env: t } = await lr();
      ro(t);
      let n = "";
      const i = e("translation", cr, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== n && (n = o.file, F.info(`[离线翻译] 已加载: ${o.file}`)), gi && gi({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return pe = await gr(
        i,
        hr,
        "模型加载超时，请检查网络连接后重试"
      ), F.info("[离线翻译] 翻译模型加载完成"), hn = !1, pe;
    } catch (e) {
      throw hn = !1, Ue = null, F.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Ue);
}
async function co(e) {
  if (!e?.trim()) return e;
  Oe = new AbortController();
  const t = Oe.signal;
  try {
    const n = await lo();
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
    Oe = null;
  }
}
function mr() {
  Oe && (Oe.abort(), Oe = null, F.info("[离线翻译] 已发送取消信号"));
}
function pr() {
  return Oe !== null;
}
async function uo() {
  await lo();
}
function wr() {
  return pe !== null;
}
function yr() {
  return hn;
}
async function Ii() {
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
async function vr() {
  return (await Ii()).isCached;
}
function kr() {
  return pe !== null;
}
async function br() {
  if (pe)
    try {
      await pe.dispose?.();
    } catch {
    }
  pe = null, Ue = null, hn = !1, F.info("[离线翻译] 翻译器已释放");
}
async function xr() {
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
const _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: kr,
  cancelOfflineTranslation: mr,
  clearModelCache: xr,
  disposeOfflineTranslator: br,
  getModelCacheInfo: Ii,
  getModelFiles: fr,
  isModelCached: vr,
  isOfflineTranslatorInitializing: yr,
  isOfflineTranslatorReady: wr,
  isTranslationInProgress: pr,
  setProgressCallback: dr,
  translateOffline: co,
  warmupOfflineTranslator: uo
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
    const n = Promise.resolve().then(() => _g).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const n = Promise.resolve(_r).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
H(Ae, "loadedModules", /* @__PURE__ */ new Map()), H(Ae, "loadingPromises", /* @__PURE__ */ new Map());
function ho(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = e.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, h = n + s + a + l;
  return h === 0 ? "unknown" : s >= 3 && s > l && s / h >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / h >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function Ve(e) {
  return e === "zh" || e === "en";
}
function Ee(e) {
  return ho(e);
}
const Sr = /[.!?。！？；;：:][)"'”’】）\]]*$/, as = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, Ln = /[A-Za-z0-9]/, Cr = /^\s*(?:[-*+•·]\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/;
function Tr(e) {
  const t = Kr(e), n = Lr(e, t);
  if (n.length === 0)
    return [];
  const i = fo(n, t), s = [];
  for (const o of i) {
    const a = s[s.length - 1], r = a ? Ir(a, o, t) : !1;
    if (!a || !r) {
      s.push(Or(o));
      continue;
    }
    a.text = Dr(a.text, o.text), a.blocks = [...a.blocks, ...o.blocks], a.bbox = wo(a.bbox, o.bbox), a.fontSize = ls(
      a.fontSize || o.fontSize,
      a.blocks.length - o.blocks.length,
      o.fontSize,
      o.blocks.length
    ), a.lineHeight = ls(
      a.lineHeight || o.lineHeight,
      a.blocks.length - o.blocks.length,
      o.lineHeight,
      o.blocks.length
    ), a.isCodeBlock = !!(a.isCodeBlock || o.isCodeLike || o.hasTableColumns), a.isStructuredBlock = !!(a.isStructuredBlock || o.hasTableColumns);
  }
  return s;
}
function Lr(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || Mr(n, t) || Rr(i))
      return null;
    const s = Er(Pr(i, n, t));
    return s === n.text ? n : { ...n, text: s };
  }).filter((n) => !!n);
}
function Mr(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function Pr(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function Rr(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function Er(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function fo(e, t) {
  const n = [...e].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of n) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !jr(a.blocks, o, t) ? (a.blocks.push(o), a.y = Xe(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => Ar(o.blocks, t));
}
function Ar(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = Xr(n), s = n.reduce((r, l, c) => {
    const h = l.text.trim();
    return c === 0 ? h : zr(r, h);
  }, ""), o = Xe(n.map((r) => dn(r.fontSize, t))), a = Xe(n.map((r) => yo(r)));
  return {
    text: s,
    blocks: n,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: Ur(n, t),
    isCodeLike: Hr(s)
  };
}
function Ir(e, t, n) {
  const i = fo(e.blocks, n), s = i[i.length - 1];
  if (!s || Oi(s.text) || mo(t.text) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const o = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (o < -n * 0.25 || o >= n * 1.8 || Nr(i, o, n) || Wr(s, t, o, n) || $r(s, t, o, n) || Fr(s, t, o, n) || Br(s, t, o, n))
    return !1;
  const a = Math.max(n * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= a;
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
    angle: Xe(e.blocks.map((t) => t.angle || 0))
  };
}
function zr(e, t) {
  return go(e, t);
}
function Dr(e, t) {
  return go(e, t);
}
function go(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const s = n.charAt(n.length - 1), o = i.charAt(0), a = n.charAt(n.length - 2);
  return s === "-" && Ln.test(a) && Ln.test(o) ? `${n.slice(0, -1)}${i}` : Zr(o) || qr(s) ? `${n}${i}` : as.test(s) || as.test(o) || cs(s) || cs(o) ? `${n}${i}` : Ln.test(s) && Ln.test(o) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function Oi(e) {
  return Sr.test(e.trim());
}
function mo(e) {
  return Cr.test(e);
}
function Nr(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? Xe(i) : 0, o = Math.max(s * 2.2, n * 1.15);
  return t > o;
}
function Wr(e, t, n, i) {
  const s = e.text.trim();
  if (!s || Oi(s) || mo(s) || e.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function $r(e, t, n, i) {
  if (n <= 0)
    return !1;
  const s = Math.max(e.fontSize, t.fontSize), o = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = s / o, r = n / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Fr(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const o = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Br(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : rs(e.text) && rs(t.text);
}
function rs(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Oi(t);
}
function Hr(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function jr(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > n * 0.9 && Gr(s.text) && po(t.text) ? !1 : o > n * 3.2;
}
function Ur(e, t) {
  if (e.length < 2)
    return e.some((s) => Vr(s.text));
  const n = [...e].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < n.length; s++) {
    const o = n[s - 1], a = n[s], r = n[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && Yr(o.text) && po(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Vr(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Yr(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function Gr(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function po(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Xr(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => wo(n, i), t[0]);
}
function wo(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), s = Math.max(e.x + e.width, t.x + t.width), o = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: s - n,
    height: o - i
  };
}
function Kr(e) {
  return dn(Xe(e.map((t) => yo(t))), 16);
}
function yo(e) {
  return dn(e.lineHeight, dn(e.height, dn(e.fontSize, 16) * 1.2));
}
function ls(e, t, n, i) {
  const s = t + i;
  return s <= 0 ? n : (e * t + n * i) / s;
}
function dn(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function Xe(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function Zr(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function qr(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function cs(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class Jr {
  constructor(t, n, i, s) {
    H(this, "canvas");
    H(this, "coordinateSystem");
    H(this, "drawingEngine");
    H(this, "eventHandler");
    // 状态管理
    H(this, "selectionRect", null);
    H(this, "annotations", []);
    H(this, "currentAnnotation", null);
    H(this, "selectedAnnotation", null);
    H(this, "hoveredAnnotation", null);
    // 拖拽状态
    H(this, "draggedAnnotation", null);
    H(this, "dragStartPoint", null);
    H(this, "resizingAnnotation", null);
    H(this, "resizeStartBounds", null);
    H(this, "resizeOperation", null);
    // 编辑状态
    H(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    H(this, "annotationUndoStack", []);
    H(this, "annotationRedoStack", []);
    H(this, "pendingDragSnapshot", null);
    H(this, "pendingResizeSnapshot", null);
    // 工具设置
    H(this, "currentTool", A.Select);
    H(this, "currentStyle", { color: "#ff4444", lineWidth: 3 });
    H(this, "textSize", 16);
    H(this, "mosaicSize", 5);
    H(this, "showGuides", !0);
    // 取色器状态
    H(this, "colorPickerState", {
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
    H(this, "allWindows", []);
    H(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    H(this, "snappedWindow", null);
    H(this, "showSnapPreview", !1);
    // 点击拖拽区分
    H(this, "pendingSnapWindow", null);
    H(this, "dragStartPosition", null);
    H(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    H(this, "throttleTimer", null);
    H(this, "lastThrottledTimestamp", 0);
    H(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    H(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    H(this, "backgroundImage", null);
    // 是否正在加载完整背景图
    H(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    H(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    H(this, "offlineModelActivated", !1);
    // Canvas 池
    H(this, "canvasPool", fi.getInstance());
    // 回调函数
    H(this, "onStateChange");
    H(this, "onTextInputRequest");
    H(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    H(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    H(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    H(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    H(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    H(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    H(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    H(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Ga(t), this.drawingEngine = new Ya(t, this.coordinateSystem), this.eventHandler = new Xa(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
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
    if (this.annotations = t.annotations.map((n) => Tn.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
        const s = await P("get_screenshot_preview");
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
        const s = await P("get_screenshot_background");
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
          const [c, h] = await Promise.all([
            P("get_cached_monitor_info"),
            P("get_cached_window_list")
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
            await new Promise((f) => setTimeout(f, s));
            continue;
          }
          const h = await Promise.all([
            P("get_window_info"),
            P("get_all_windows")
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
        const r = await P("get_cached_monitor_info");
        s = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        s = await P("get_window_info");
      }
      let o;
      try {
        const r = await P("get_mouse_position"), l = s?.scale || 1;
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
          !this.selectionRect && this.currentTool === A.Select && (this.dragStartPosition = { ...n }, this.snappedWindow ? this.pendingSnapWindow = this.snappedWindow : (this.selectionRect = {
            x: n.x,
            y: n.y,
            width: 0,
            height: 0
          }, this.onStateChange?.()));
          break;
        case W.DrawingRect:
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
          this.selectAnnotationAtPoint(n), this.selectedAnnotation && this.selectedAnnotation.getData().type === A.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
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
      this.eventHandler.updateMousePosition(n), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && Bt(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapWindow = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(n) : this.draggedAnnotation ? this.updateAnnotationDrag(n) : this.resizingAnnotation ? this.updateAnnotationResize(n) : this.selectionRect && this.currentTool === A.Select && this.updateSelectionRect(n, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === A.Select && !this.selectionRect) {
        const s = this.detectNearbyWindow(n);
        s !== this.snappedWindow && (this.snappedWindow = s, this.showSnapPreview = !!s, this.draw());
      }
      this.updateHoverState(n), this.currentTool === A.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(n, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = n, this.draw(), this.throttledUpdateColorPreview(n)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
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
    i?.getData().type === A.Text && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(n, i));
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
    n && n !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === A.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
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
    if (this.currentTool !== A.Select) {
      this.updateToolCursor();
      return;
    }
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = n && n.getData().type !== A.Mosaic ? n : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== A.Select) {
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
      case A.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case A.Mosaic:
        this.updateCursor(this.createCircleCursor(this.mosaicSize * 3, "#666"));
        break;
      case A.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case A.Rectangle:
      case A.Arrow:
      case A.Text:
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
      const w = n + s / 2, b = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(n, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle", t.fillText("正在识别翻译...", w, b), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const w = n + s / 2, b = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(n, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, w, b), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: n, y: i, width: s, height: o }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let h, f;
    if (c) {
      const w = Math.max(0, Math.round(l.r * 0.1)), b = Math.max(0, Math.round(l.g * 0.1)), g = Math.max(0, Math.round(l.b * 0.1));
      h = `rgba(${w}, ${b}, ${g}, 0.95)`, f = "rgba(255, 255, 255, 0.9)";
    } else {
      const w = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), b = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), g = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      h = `rgba(${w}, ${b}, ${g}, 0.95)`, f = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = h, t.fillRect(n, i, s, o), t.fillStyle = f, t.textAlign = "left", t.textBaseline = "top";
    const p = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((w) => ({
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
    })), k = p.filter((w) => w.isStructuredBlock), v = p.filter((w) => !w.isStructuredBlock);
    v.length > 0 && this.drawFlowedTranslationBlocks(t, v, n, i, a, s, o);
    for (const w of k)
      this.drawStructuredTranslationBlock(t, w, n, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, s, o, a, r) {
    const l = [...n].filter((y) => (y.translatedText || y.text).trim()).sort((y, S) => {
      const E = y.bbox.y - S.bbox.y;
      return Math.abs(E) > 4 ? E : y.bbox.x - S.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), h = o, f = (y, S, E) => l.map((I) => {
      const T = (I.translatedText || I.text).trim(), B = Math.max(12, Math.min(I.fontSize || 16, 48)), Y = Math.max(8, Math.round(B * y)), K = I.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', ot = Math.max(
        o,
        Math.min(I.bbox.x + o, a * 0.38)
      ), it = S ? o : ot, lt = Math.max(48, a - it - h), gt = I.lineHeight || Y * 1.35, ct = Math.max(
        Y * (E ? 1.04 : 1.14),
        Math.min(gt * y, Y * (E ? 1.18 : 1.42))
      );
      return t.font = `${Y}px ${K}`, {
        text: T,
        fontSize: Y,
        fontFamily: K,
        lineHeight: ct,
        paragraphGap: E ? Math.max(1, ct * 0.16) : Math.max(3, ct * 0.35),
        x: i + it,
        lines: this.wrapTextToLines(t, T, lt)
      };
    }), p = (y) => y.reduce((S, E, I) => {
      const T = I === y.length - 1 ? 0 : E.paragraphGap;
      return S + E.lines.length * E.lineHeight + T;
    }, 0);
    let k = f(1, !1, !1), v = p(k);
    if (v > c) {
      const y = Math.max(0.56, c / v);
      k = f(y, !1, !1), v = p(k);
    }
    if (v > c && (k = f(1, !0, !1), v = p(k)), v > c) {
      const y = Math.max(0.38, c / v * 0.96);
      k = f(y, !0, !0), v = p(k);
    }
    if (v > c) {
      const y = Math.max(0.3, c / v * 0.94);
      k = f(y, !0, !0), v = p(k);
    }
    const w = Math.min(...l.map((y) => y.bbox.y)), b = s + Math.max(o, Math.min(w, r - o)), g = s + r - o;
    let x = b + v > g ? s + o : b;
    for (const y of k) {
      t.font = `${y.fontSize}px ${y.fontFamily}`;
      for (const S of y.lines)
        t.fillText(S, y.x, x), x += y.lineHeight;
      x += y.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, s, o, a, r) {
    const l = [...n.blocks].sort((f, p) => f.x - p.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), h = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const f of l) {
      const p = f.translatedText || f.text;
      if (!p.trim()) continue;
      const k = i + f.x + Math.min(4, o), v = s + f.y, w = l.find((y) => y.x > f.x), b = w ? Math.max(f.width, w.x - f.x - 8) : Math.max(f.width, a - f.x - o), g = this.wrapTextToLines(t, p.trim(), b);
      let x = v;
      for (const y of g) {
        if (x + c > s + r) break;
        t.fillText(y, k, x), x += h;
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
      for (const f of Array.from(c)) {
        const p = h + f;
        t.measureText(p).width > i && h !== "" ? (o.push(h), h = f) : h = p;
      }
      r = h;
    };
    for (const c of a) {
      const h = /^\s+$/.test(c), f = h ? " " : c, p = r + f;
      if (t.measureText(p).width <= i) {
        r = p;
        continue;
      }
      r.trim() && (o.push(r.trimEnd()), r = ""), !h && (t.measureText(f).width > i ? l(f) : r = f);
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
    const c = this.backgroundImage.width, h = this.backgroundImage.height, f = this.canvas.width / s, p = this.canvas.height / s, k = c / f, v = h / p, w = t.x * k, b = t.y * v, g = t.width * k, x = t.height * v;
    try {
      l.drawImage(
        this.backgroundImage,
        w,
        b,
        g,
        x,
        0,
        0,
        o,
        a
      );
    } catch (Q) {
      return F.error("[截图] 采样区域绘制失败", Q), this.canvasPool.release(r), i;
    }
    let y;
    try {
      y = l.getImageData(0, 0, o, a);
    } catch (Q) {
      return F.error("[截图] 获取像素数据失败", Q), this.canvasPool.release(r), i;
    }
    const S = y.data, E = Math.ceil(Math.sqrt(n)), I = o / (E + 1), T = a / (E + 1);
    let B = 0, Y = 0, K = 0, ot = 0;
    for (let Q = 1; Q <= E; Q++)
      for (let at = 1; at <= E && !(ot >= n); at++) {
        const kt = Math.floor(at * I), ht = Math.floor(Q * T);
        if (kt >= 0 && kt < o && ht >= 0 && ht < a) {
          const X = (ht * o + kt) * 4;
          X >= 0 && X + 2 < S.length && (B += S[X], Y += S[X + 1], K += S[X + 2], ot++);
        }
      }
    if (this.canvasPool.release(r), ot === 0)
      return i;
    const it = Math.round(B / ot), lt = Math.round(Y / ot), gt = Math.round(K / ot), ct = this.getBrightness(it, lt, gt);
    return {
      r: it,
      g: lt,
      b: gt,
      brightness: ct
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
      const c = Math.max(0, Math.round(t.r * 0.2)), h = Math.max(0, Math.round(t.g * 0.2)), f = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${c}, ${h}, ${f}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const c = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), h = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), f = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${c}, ${h}, ${f}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
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
    const c = this.backgroundImage.width, h = this.backgroundImage.height, f = this.canvas.width / s, p = this.canvas.height / s, k = c / f, v = h / p, w = t.x * k, b = t.y * v, g = t.width * k, x = t.height * v;
    try {
      l.drawImage(
        this.backgroundImage,
        w,
        b,
        g,
        x,
        0,
        0,
        o,
        a
      );
    } catch (Q) {
      return F.error("[截图] isUniformColor: 采样区域绘制失败", Q), this.canvasPool.release(r), !1;
    }
    let y;
    try {
      y = l.getImageData(0, 0, o, a);
    } catch (Q) {
      return F.error("[截图] isUniformColor: 获取像素数据失败", Q), this.canvasPool.release(r), !1;
    }
    const S = y.data, E = Math.ceil(Math.sqrt(i)), I = o / (E + 1), T = a / (E + 1), B = [];
    for (let Q = 1; Q <= E; Q++)
      for (let at = 1; at <= E && !(B.length >= i); at++) {
        const kt = Math.floor(at * I), ht = Math.floor(Q * T);
        if (kt >= 0 && kt < o && ht >= 0 && ht < a) {
          const X = (ht * o + kt) * 4;
          X >= 0 && X + 2 < S.length && B.push({
            r: S[X],
            g: S[X + 1],
            b: S[X + 2]
          });
        }
      }
    if (this.canvasPool.release(r), B.length < 2)
      return !1;
    const Y = B.reduce((Q, at) => Q + at.r, 0) / B.length, K = B.reduce((Q, at) => Q + at.g, 0) / B.length, ot = B.reduce((Q, at) => Q + at.b, 0) / B.length, it = B.reduce((Q, at) => Q + Math.pow(at.r - Y, 2), 0) / B.length, lt = B.reduce((Q, at) => Q + Math.pow(at.g - K, 2), 0) / B.length, gt = B.reduce((Q, at) => Q + Math.pow(at.b - ot, 2), 0) / B.length;
    return (it + lt + gt) / 3 < n;
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
        const i = Ai(this.snappedWindow).x, s = this.snappedWindow.y - 5, o = t.measureText(this.snappedWindow.title), a = 4;
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
    this.currentTool = t, this.clearSelection(), this.showGuides = t === A.Select, this.colorPickerState.isActive = t === A.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== A.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== A.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.showSnapPreview = !1, this.pendingSnapWindow = null, this.dragStartPosition = null, t !== A.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === A.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (Tn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === A.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = Tn.createAnnotation(
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
      case A.Rectangle:
      case A.Arrow:
        n.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case A.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case A.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === A.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
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
      c += Bt(n[k - 1], n[k]);
    const f = Bt(n[0], n[n.length - 1]) / c, p = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (f > 0.85 || p > 5) {
      const k = n[0], v = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [k, v] });
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
    const i = Tn.createAnnotation(
      A.Text,
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
      const { x: n, y: i, width: s, height: o } = this.selectionRect, r = (await P("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, s, o);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await P("copy_to_clipboard", { image: c }) : await P("save_screenshot_to_file", { image: c });
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
          let mt = 0;
          for (; !this.backgroundImage && mt < 3e3; )
            await new Promise((tt) => setTimeout(tt, 100)), mt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, h = Math.max(0, o.padding || 0), f = this.canvas.width / c, p = this.canvas.height / c, k = t - h, v = n - h, w = i + h * 2, b = s + h * 2, g = Math.max(1, Math.round(w * c)), x = Math.max(1, Math.round(b * c)), y = Math.max(0, k), S = Math.max(0, v), E = Math.min(f, k + w), I = Math.min(p, v + b), T = Math.max(0, E - y), B = Math.max(0, I - S), Y = Math.round(y * c), K = Math.round(S * c), ot = Math.min(
          this.canvas.width - Y,
          Math.round(T * c)
        ), it = Math.min(
          this.canvas.height - K,
          Math.round(B * c)
        ), lt = Math.round((y - k) * c), gt = Math.round((S - v) * c), ct = document.createElement("canvas");
        ct.width = g, ct.height = x;
        const Q = ct.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!Q)
          throw new Error("无法获取2D绘图上下文");
        Q.imageSmoothingEnabled = !1, o.fillColor && (Q.fillStyle = o.fillColor, Q.fillRect(0, 0, g, x)), ot > 0 && it > 0 && Q.drawImage(
          this.backgroundImage,
          Y,
          K,
          ot,
          it,
          lt,
          gt,
          ot,
          it
        );
        const kt = ct.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: kt,
          adjusted_width: g,
          adjusted_height: x,
          logical_x: k,
          logical_y: v,
          logical_width: w,
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
            const f = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, p = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, k = this.drawingEngine.createScreenshotContext(
              l,
              f,
              p
            );
            this.annotations.forEach((v, w) => {
              try {
                v.drawToScreenshot(k);
              } catch (b) {
                F.error(`[截图] 绘制标注 ${w} 失败`, b);
              }
            });
          }
          let h;
          h = r.toDataURL("image/png"), clearTimeout(a), s(h);
        } catch (h) {
          F.error("[截图] 绘制过程出错", h);
          try {
            const f = r.toDataURL("image/png");
            clearTimeout(a), s(f);
          } catch {
            clearTimeout(a), o(new Error(`渲染失败: ${h.message || h}`));
          }
        }
      }, c.onerror = (h) => {
        F.error("[截图] 图像加载失败", h), clearTimeout(a), o(new Error("图像加载失败"));
      }, c.src = `data:image/png;base64,${t.image}`;
    });
  }
  // 获取当前状态
  getState() {
    return {
      selectionRect: this.selectionRect,
      annotations: this.annotations.map((t) => t.getData()),
      currentTool: this.currentTool,
      currentStyle: this.currentStyle,
      textSize: this.textSize,
      mosaicSize: this.mosaicSize,
      hasSelection: !!this.selectionRect,
      // 有标注或有翻译覆盖层时都可以撤销
      hasAnnotations: this.annotations.length > 0 || this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0,
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === A.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === A.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const n = this.annotations.findIndex((i) => i === t);
    n !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(n, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字标注内容
  updateTextAnnotation(t, n) {
    if (t.getData().type === A.Text) {
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
        const { x: n, y: i, width: s, height: o } = this.selectionRect, a = await P("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), h = Math.round(s * r), f = Math.round(o * r), p = Math.round(a.x + window.innerWidth * r), k = t === "ocr" ? Math.round(l - Math.max(0, h - h) / 2) : l, v = t === "ocr" ? Math.max(a.x, Math.min(k, p - h)) : l, w = {}, b = await this.cropFromBackground(n, i, s, o, w);
        if (!b?.image)
          throw new Error("Failed to crop from background image");
        const g = await this.renderWithAnnotations(b, r, "save");
        await P("create_pin_window", {
          mode: t,
          imageData: g,
          x: v,
          y: c,
          width: h,
          height: f
        }), this.onStateChange?.(), setTimeout(() => {
          new bn("screenshot").close();
        }, 100);
      } catch (n) {
        throw F.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, n), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await P("get_window_info"), i = n?.scale || 1, s = Math.round(n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), o = Math.round(n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await P("get_pixel_color", {
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
        const n = await P("get_window_info"), i = n?.scale || 1, s = this.colorPickerState.zoomFactor, o = Math.floor(s / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await P("get_screen_preview", {
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
          const k = p.getImageData(o, o, 1, 1).data, v = { r: k[0], g: k[1], b: k[2] }, w = this.rgbToHex(v.r, v.g, v.b);
          this.colorPickerState.colorInfo = { rgb: v, hex: w, position: t };
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
        const { x: r, y: l, width: c, height: h } = this.selectionRect, f = window.devicePixelRatio || 1, p = c * f, k = h * f, v = this.canvasPool.acquire(p, k), w = v.getContext("2d");
        if (!w)
          throw this.canvasPool.release(v), new Error("无法创建临时canvas");
        const b = r * f, g = l * f, x = performance.now();
        w.drawImage(
          this.backgroundImage,
          b,
          g,
          p,
          k,
          0,
          0,
          p,
          k
        ), n = Math.round(performance.now() - x);
        const y = performance.now(), { recognizeFromCanvas: S } = await Ae.loadOCR();
        i = Math.round(performance.now() - y);
        const E = performance.now(), I = await S(v);
        s = Math.round(performance.now() - E), this.canvasPool.release(v);
        const T = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: I.confidence,
          rawLineCount: I.blocks.length,
          textLength: I.full_text.trim().length
        };
        F.info("[OCR] 识别耗时统计", T), Nt.log("[OCR] recognition timing", T);
        const B = I.blocks, Y = performance.now(), K = Tr(B);
        o = Math.round(performance.now() - Y);
        const ot = K.map((R) => R.text).join(`

`), it = {
          rawLineCount: B.length,
          paragraphCount: K.length,
          durationMs: o,
          paragraphs: K.map((R, rt) => ({
            index: rt,
            text: R.text,
            blockCount: R.blocks.length,
            isCodeBlock: !!R.isCodeBlock,
            isStructuredBlock: !!R.isStructuredBlock,
            bbox: R.bbox,
            sourceBlocks: R.blocks.map((_t) => ({
              text: _t.text,
              x: _t.x,
              y: _t.y,
              width: _t.width,
              height: _t.height
            }))
          }))
        };
        if (F.info("[OCR] 版面重组完成", it), Nt.log("[OCR] layout reflow complete", it), !ot || !ot.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const lt = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Ee(ot));
        const gt = (R) => {
          const rt = R.trim();
          return !!(rt.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !rt.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let ct = "";
        const Q = Ee(ot), at = {
          detectedLanguage: Q,
          textLength: ot.trim().length,
          textPreview: ot.trim().slice(0, 500)
        };
        F.info("[OCR] 翻译语言检测完成", at), Nt.log("[OCR] translation language detected", at), Ve(Q) && (this.translationOverlay.sourceLanguage = Q, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(Q));
        const kt = lt === "offline" ? Ae.loadOfflineTranslator() : null, ht = (R) => R.includes("插件") && R.includes("未启用") ? R.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : R : lt === "offline" ? R.includes("未激活") || R.includes("未下载") || R.includes("运行时未安装") ? R : R.includes("超时") ? "模型加载超时，请重试" : R.includes("离线翻译暂仅支持") ? R : "离线翻译失败: " + R.substring(0, 50) : R.includes("timeout") || R.includes("超时") ? "翻译超时，请检查网络连接" : R.includes("network") || R.includes("网络") || R.includes("请求") || R.includes("令牌") ? "翻译失败，请检查网络连接" : R.trim() ? R.slice(0, 80) : "翻译失败，请检查网络连接", X = async () => {
          if (!kt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: R,
            canUseOfflineTranslation: rt,
            warmupOfflineTranslator: _t,
            getModelCacheInfo: bt
          } = await kt, L = rt();
          if (this.offlineModelActivated && !L)
            if ((await bt()).isCached)
              await _t();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return R;
        }, mt = async (R, rt, _t) => {
          if (!R.trim())
            return R;
          if (lt === "offline") {
            if (rt !== "en" || _t !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await X())(R);
          }
          return await P("translate_text", {
            text: R,
            from: rt,
            to: _t,
            engine: lt
          });
        }, tt = (R) => {
          const rt = R.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(rt) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(rt);
        }, zt = async (R, rt, _t) => {
          const bt = R.trim();
          if (!bt || gt(bt))
            return R;
          const L = R.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (L) {
            const [, M, $, st, Z, C] = L, D = Ee($), ut = tt($) || !Ve(D) ? $ : await mt($, D, this.getAutoTargetLanguage(D)), pt = Ee(Z), Et = Ve(pt) && !gt(Z) ? await mt(Z, pt, this.getAutoTargetLanguage(pt)) : Z;
            return `${M}${ut}${st}${Et}${C}`;
          }
          if (tt(bt))
            return R;
          const U = Ee(bt);
          if (!Ve(U))
            return R;
          const xt = this.getAutoTargetLanguage(U), u = await mt(bt, U, xt), d = {
            paragraphIndex: rt,
            blockIndex: _t,
            sourceLanguage: U,
            targetLanguage: xt,
            sourceText: bt,
            translatedText: u.slice(0, 200)
          };
          return F.info("[OCR] 结构化块翻译完成", d), Nt.log("[OCR] structured block translation complete", d), u;
        }, jt = async (R, rt) => {
          const _t = performance.now(), bt = (u) => ({
            index: rt,
            durationMs: Math.round(performance.now() - _t),
            ...u
          }), L = Ee(R.text), U = this.getAutoTargetLanguage(L), xt = {
            index: rt,
            text: R.text,
            sourceLanguage: L,
            targetLanguage: U,
            engine: lt,
            structured: !!R.isStructuredBlock
          };
          if (F.info("[OCR] 段落翻译方向", xt), Nt.log("[OCR] paragraph translation direction", xt), !Ve(L)) {
            R.translatedText = R.text;
            const u = bt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), d = {
              index: rt,
              detectedLanguage: L,
              durationMs: u.durationMs,
              text: R.text
            };
            return F.warn("[OCR] 跳过不支持的段落语言", d), Nt.log("[OCR] skip unsupported paragraph language", d), u;
          }
          try {
            if (R.isStructuredBlock && R.blocks.length > 0) {
              const M = async (st, Z) => {
                const C = await zt(st.text, rt, Z);
                return st.translatedText = C, C;
              }, $ = [];
              if (lt === "offline")
                for (let st = 0; st < R.blocks.length; st += 1)
                  $.push(await M(R.blocks[st], st));
              else
                $.push(
                  ...await Promise.all(
                    R.blocks.map((st, Z) => M(st, Z))
                  )
                );
              R.translatedText = $.join(" ");
            } else if (gt(R.text) || R.isCodeBlock) {
              R.translatedText = R.text;
              const M = R.isCodeBlock ? "code_block" : "command_like_text", $ = bt({ skipped: !0, cancelled: !1 }), st = {
                index: rt,
                reason: M,
                durationMs: $.durationMs,
                text: R.text
              };
              return F.info("[OCR] 跳过代码段翻译", st), Nt.log("[OCR] skip code paragraph translation", st), $;
            } else
              R.translatedText = await mt(
                R.text,
                L,
                U
              );
            const u = bt({ skipped: !1, cancelled: !1 }), d = {
              index: rt,
              durationMs: u.durationMs,
              sourceLanguage: L,
              targetLanguage: U,
              engine: lt,
              structured: !!R.isStructuredBlock,
              sourceLength: R.text.length,
              translatedLength: (R.translatedText || "").length,
              translatedPreview: (R.translatedText || "").slice(0, 300)
            };
            return F.info("[OCR] 段落翻译完成", d), Nt.log("[OCR] paragraph translation complete", d), u;
          } catch (u) {
            const d = u instanceof Error ? u.message : String(u);
            if (d === "翻译已取消")
              return bt({ skipped: !1, cancelled: !0 });
            R.translatedText = R.text;
            const M = ht(d), $ = bt({
              skipped: !1,
              cancelled: !1,
              errorMessage: M
            }), st = {
              index: rt,
              durationMs: $.durationMs,
              sourceLanguage: L,
              targetLanguage: U,
              engine: lt,
              error: d,
              structured: !!R.isStructuredBlock,
              text: R.text
            };
            return F.error("[OCR] 段落翻译失败", st), Nt.log("[OCR] paragraph translation failed", st), $;
          }
        }, Tt = performance.now();
        let Lt = [];
        if (lt === "offline")
          for (let R = 0; R < K.length; R += 1) {
            const rt = await jt(K[R], R);
            if (Lt.push(rt), rt.cancelled)
              return;
            if (rt.errorMessage) {
              ct = rt.errorMessage;
              break;
            }
          }
        else {
          if (Lt = await Promise.all(
            K.map((R, rt) => jt(R, rt))
          ), Lt.some((R) => R.cancelled))
            return;
          ct = Lt.find((R) => R.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - Tt);
        const Rt = {
          durationMs: a,
          engine: lt,
          paragraphCount: K.length,
          translatedParagraphCount: Lt.filter((R) => !R.skipped && !R.errorMessage).length,
          skippedParagraphCount: Lt.filter((R) => R.skipped).length,
          failedParagraphCount: Lt.filter((R) => !!R.errorMessage).length
        };
        F.info("[OCR] 翻译耗时统计", Rt), Nt.log("[OCR] translation timing", Rt);
        const Xt = K.map((R) => this.toDisplayParagraph(R, f)), ee = Xt.map((R) => this.toLegacyOverlayBlock(R));
        this.translationOverlay.blocks = ee, this.translationOverlay.paragraphBlocks = Xt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = ct || void 0;
        const Jt = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: B.length,
          paragraphCount: K.length,
          engine: lt
        };
        F.info("[OCR] 截图翻译总耗时统计", Jt), Nt.log("[OCR] pipeline timing", Jt), this.draw(), this.onStateChange?.();
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
var Qr = {
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
function tl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function el(e, t, n) {
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
var nl = Symbol("icon-context");
function St(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = tl(), r = Se(nl, Qr);
      return function() {
        var l = o.size, c = o.strokeWidth, h = o.strokeLinecap, f = o.strokeLinejoin, p = o.theme, k = o.fill, v = o.spin, w = el(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: h,
          strokeLinejoin: f,
          theme: p,
          fill: k
        }, r), b = [r.prefix + "-icon"];
        return b.push(r.prefix + "-icon-" + e), t && r.rtl && b.push(r.prefix + "-icon-rtl"), v && b.push(r.prefix + "-icon-spin"), _("span", {
          class: b.join(" ")
        }, [n(w)]);
      };
    }
  };
  return i;
}
const il = St("arrow-left-up", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M11 11L36.4559 36.4558",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M29 11H11V29",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), mi = St("check", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pi = St("close", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ai = St("copy", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), sl = St("delete-four", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M8 11L40 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M18 5L30 5",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), us = St("down", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ol = St("download", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), al = St("font-size", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 6V42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M16 42H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hs = St("loading", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rl = St("minus", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ll = St("more", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), _("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), _("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), cl = St("mosaic", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M44 36H36V44H44V36Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M28 36H20V44H28V36Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M12 36H4V44H12V36Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M44 20H36V28H44V20Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M28 20H20V28H28V20Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M12 20H4V28H12V20Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M44 4H36V12H44V4Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M28 4H20V12H28V4Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M12 4H4V12H12V4Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M20 12H12V20H20V12Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M20 28H12V36H20V28Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M36 12H28V20H36V12Z",
    fill: e.colors[0]
  }, null), _("path", {
    d: "M36 28H28V36H36V28Z",
    fill: e.colors[0]
  }, null)]);
}), ul = St("move-one", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hl = St("picture", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ds = St("pin", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [_("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), _("defs", null, [_("clipPath", {
    id: e.id + "1c742167"
  }, [_("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), fs = St("platte", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wi = St("pushpin", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dl = St("rectangle-one", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), fl = St("redo", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M42 8V17H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gl = St("refresh", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ml = St("return", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gs = St("save", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), _("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pl = St("square", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), On = St("text-recognition", !1, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), vo = St("translate", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wl = St("write", !0, function(e) {
  return _("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [_("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), _("path", {
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
function yl(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ms = typeof window < "u", $e = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), vl = (e, t, n) => kl({ l: e, k: t, s: n }), kl = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ft = (e) => typeof e == "number" && isFinite(e), bl = (e) => zi(e) === "[object Date]", Hn = (e) => zi(e) === "[object RegExp]", Xn = (e) => dt(e) && Object.keys(e).length === 0, Ht = Object.assign, xl = Object.create, vt = (e = null) => xl(e);
let ps;
const zn = () => ps || (ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : vt());
function ws(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ys(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _l(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, s, o) => `${s}="${ys(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, s, o) => `${s}='${ys(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    e = e.replace(i, "$1javascript&#58;");
  }), e;
}
const Sl = Object.prototype.hasOwnProperty;
function oe(e, t) {
  return Sl.call(e, t);
}
const It = Array.isArray, Mt = (e) => typeof e == "function", G = (e) => typeof e == "string", At = (e) => typeof e == "boolean", ft = (e) => e !== null && typeof e == "object", Cl = (e) => ft(e) && Mt(e.then) && Mt(e.catch), ko = Object.prototype.toString, zi = (e) => ko.call(e), dt = (e) => zi(e) === "[object Object]", Tl = (e) => e == null ? "" : It(e) || dt(e) && e.toString === ko ? JSON.stringify(e, null, 2) : String(e);
function Di(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Mn = (e) => !ft(e) || It(e);
function Dn(e, t) {
  if (Mn(e) || Mn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      o !== "__proto__" && (ft(i[o]) && !ft(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : vt()), Mn(s[o]) || Mn(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ll(e, t, n) {
  return { line: e, column: t, offset: n };
}
function yi(e, t, n) {
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
}, Ml = 17;
function Kn(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function Pl(e) {
  throw e;
}
const re = " ", Rl = "\r", Yt = `
`, El = "\u2028", Al = "\u2029";
function Il(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (T) => t[T] === Rl && t[T + 1] === Yt, r = (T) => t[T] === Yt, l = (T) => t[T] === Al, c = (T) => t[T] === El, h = (T) => a(T) || r(T) || l(T) || c(T), f = () => n, p = () => i, k = () => s, v = () => o, w = (T) => a(T) || l(T) || c(T) ? Yt : t[T], b = () => w(n), g = () => w(n + o);
  function x() {
    return o = 0, h(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function y() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function S() {
    n = 0, i = 1, s = 1, o = 0;
  }
  function E(T = 0) {
    o = T;
  }
  function I() {
    const T = n + o;
    for (; T !== n; )
      x();
    o = 0;
  }
  return {
    index: f,
    line: p,
    column: k,
    peekOffset: v,
    charAt: w,
    currentChar: b,
    currentPeek: g,
    next: x,
    peek: y,
    reset: S,
    resetPeek: E,
    skipToPeek: I
  };
}
const ge = void 0, Ol = ".", vs = "'", zl = "tokenizer";
function Dl(e, t = {}) {
  const n = t.location !== !1, i = Il(e), s = () => i.index(), o = () => Ll(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
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
  function f(u, d, M, ...$) {
    const st = c();
    if (d.column += M, d.offset += M, h) {
      const Z = n ? yi(st.startLoc, d) : null, C = Kn(u, Z, {
        domain: zl,
        args: $
      });
      h(C);
    }
  }
  function p(u, d, M) {
    u.endLoc = o(), u.currentType = d;
    const $ = { type: d };
    return n && ($.loc = yi(u.startLoc, u.endLoc)), M != null && ($.value = M), $;
  }
  const k = (u) => p(
    u,
    13
    /* TokenTypes.EOF */
  );
  function v(u, d) {
    return u.currentChar() === d ? (u.next(), d) : (f(yt.EXPECTED_TOKEN, o(), 0, d), "");
  }
  function w(u) {
    let d = "";
    for (; u.currentPeek() === re || u.currentPeek() === Yt; )
      d += u.currentPeek(), u.peek();
    return d;
  }
  function b(u) {
    const d = w(u);
    return u.skipToPeek(), d;
  }
  function g(u) {
    if (u === ge)
      return !1;
    const d = u.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d === 95;
  }
  function x(u) {
    if (u === ge)
      return !1;
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function y(u, d) {
    const { currentType: M } = d;
    if (M !== 2)
      return !1;
    w(u);
    const $ = g(u.currentPeek());
    return u.resetPeek(), $;
  }
  function S(u, d) {
    const { currentType: M } = d;
    if (M !== 2)
      return !1;
    w(u);
    const $ = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), st = x($);
    return u.resetPeek(), st;
  }
  function E(u, d) {
    const { currentType: M } = d;
    if (M !== 2)
      return !1;
    w(u);
    const $ = u.currentPeek() === vs;
    return u.resetPeek(), $;
  }
  function I(u, d) {
    const { currentType: M } = d;
    if (M !== 7)
      return !1;
    w(u);
    const $ = u.currentPeek() === ".";
    return u.resetPeek(), $;
  }
  function T(u, d) {
    const { currentType: M } = d;
    if (M !== 8)
      return !1;
    w(u);
    const $ = g(u.currentPeek());
    return u.resetPeek(), $;
  }
  function B(u, d) {
    const { currentType: M } = d;
    if (!(M === 7 || M === 11))
      return !1;
    w(u);
    const $ = u.currentPeek() === ":";
    return u.resetPeek(), $;
  }
  function Y(u, d) {
    const { currentType: M } = d;
    if (M !== 9)
      return !1;
    const $ = () => {
      const Z = u.currentPeek();
      return Z === "{" ? g(u.peek()) : Z === "@" || Z === "|" || Z === ":" || Z === "." || Z === re || !Z ? !1 : Z === Yt ? (u.peek(), $()) : ot(u, !1);
    }, st = $();
    return u.resetPeek(), st;
  }
  function K(u) {
    w(u);
    const d = u.currentPeek() === "|";
    return u.resetPeek(), d;
  }
  function ot(u, d = !0) {
    const M = (st = !1, Z = "") => {
      const C = u.currentPeek();
      return C === "{" || C === "@" || !C ? st : C === "|" ? !(Z === re || Z === Yt) : C === re ? (u.peek(), M(!0, re)) : C === Yt ? (u.peek(), M(!0, Yt)) : !0;
    }, $ = M();
    return d && u.resetPeek(), $;
  }
  function it(u, d) {
    const M = u.currentChar();
    return M === ge ? ge : d(M) ? (u.next(), M) : null;
  }
  function lt(u) {
    const d = u.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36;
  }
  function gt(u) {
    return it(u, lt);
  }
  function ct(u) {
    const d = u.charCodeAt(0);
    return d >= 97 && d <= 122 || // a-z
    d >= 65 && d <= 90 || // A-Z
    d >= 48 && d <= 57 || // 0-9
    d === 95 || // _
    d === 36 || // $
    d === 45;
  }
  function Q(u) {
    return it(u, ct);
  }
  function at(u) {
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57;
  }
  function kt(u) {
    return it(u, at);
  }
  function ht(u) {
    const d = u.charCodeAt(0);
    return d >= 48 && d <= 57 || // 0-9
    d >= 65 && d <= 70 || // A-F
    d >= 97 && d <= 102;
  }
  function X(u) {
    return it(u, ht);
  }
  function mt(u) {
    let d = "", M = "";
    for (; d = kt(u); )
      M += d;
    return M;
  }
  function tt(u) {
    let d = "";
    for (; ; ) {
      const M = u.currentChar();
      if (M === "{" || M === "}" || M === "@" || M === "|" || !M)
        break;
      if (M === re || M === Yt)
        if (ot(u))
          d += M, u.next();
        else {
          if (K(u))
            break;
          d += M, u.next();
        }
      else
        d += M, u.next();
    }
    return d;
  }
  function zt(u) {
    b(u);
    let d = "", M = "";
    for (; d = Q(u); )
      M += d;
    const $ = u.currentChar();
    if ($ && $ !== "}" && $ !== ge && $ !== re && $ !== Yt && $ !== "　") {
      const st = Jt(u);
      return f(yt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, M + st), M + st;
    }
    return u.currentChar() === ge && f(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), M;
  }
  function jt(u) {
    b(u);
    let d = "";
    return u.currentChar() === "-" ? (u.next(), d += `-${mt(u)}`) : d += mt(u), u.currentChar() === ge && f(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), d;
  }
  function Tt(u) {
    return u !== vs && u !== Yt;
  }
  function Lt(u) {
    b(u), v(u, "'");
    let d = "", M = "";
    for (; d = it(u, Tt); )
      d === "\\" ? M += Rt(u) : M += d;
    const $ = u.currentChar();
    return $ === Yt || $ === ge ? (f(yt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), $ === Yt && (u.next(), v(u, "'")), M) : (v(u, "'"), M);
  }
  function Rt(u) {
    const d = u.currentChar();
    switch (d) {
      case "\\":
      case "'":
        return u.next(), `\\${d}`;
      case "u":
        return Xt(u, d, 4);
      case "U":
        return Xt(u, d, 6);
      default:
        return f(yt.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, d), "";
    }
  }
  function Xt(u, d, M) {
    v(u, d);
    let $ = "";
    for (let st = 0; st < M; st++) {
      const Z = X(u);
      if (!Z) {
        f(yt.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${d}${$}${u.currentChar()}`);
        break;
      }
      $ += Z;
    }
    return `\\${d}${$}`;
  }
  function ee(u) {
    return u !== "{" && u !== "}" && u !== re && u !== Yt;
  }
  function Jt(u) {
    b(u);
    let d = "", M = "";
    for (; d = it(u, ee); )
      M += d;
    return M;
  }
  function R(u) {
    let d = "", M = "";
    for (; d = gt(u); )
      M += d;
    return M;
  }
  function rt(u) {
    const d = (M) => {
      const $ = u.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === re ? M : (M += $, u.next(), d(M));
    };
    return d("");
  }
  function _t(u) {
    b(u);
    const d = v(
      u,
      "|"
      /* TokenChars.Pipe */
    );
    return b(u), d;
  }
  function bt(u, d) {
    let M = null;
    switch (u.currentChar()) {
      case "{":
        return d.braceNest >= 1 && f(yt.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), u.next(), M = p(
          d,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), b(u), d.braceNest++, M;
      case "}":
        return d.braceNest > 0 && d.currentType === 2 && f(yt.EMPTY_PLACEHOLDER, o(), 0), u.next(), M = p(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), d.braceNest--, d.braceNest > 0 && b(u), d.inLinked && d.braceNest === 0 && (d.inLinked = !1), M;
      case "@":
        return d.braceNest > 0 && f(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), M = L(u, d) || k(d), d.braceNest = 0, M;
      default: {
        let st = !0, Z = !0, C = !0;
        if (K(u))
          return d.braceNest > 0 && f(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), M = p(d, 1, _t(u)), d.braceNest = 0, d.inLinked = !1, M;
        if (d.braceNest > 0 && (d.currentType === 4 || d.currentType === 5 || d.currentType === 6))
          return f(yt.UNTERMINATED_CLOSING_BRACE, o(), 0), d.braceNest = 0, U(u, d);
        if (st = y(u, d))
          return M = p(d, 4, zt(u)), b(u), M;
        if (Z = S(u, d))
          return M = p(d, 5, jt(u)), b(u), M;
        if (C = E(u, d))
          return M = p(d, 6, Lt(u)), b(u), M;
        if (!st && !Z && !C)
          return M = p(d, 12, Jt(u)), f(yt.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, M.value), b(u), M;
        break;
      }
    }
    return M;
  }
  function L(u, d) {
    const { currentType: M } = d;
    let $ = null;
    const st = u.currentChar();
    switch ((M === 7 || M === 8 || M === 11 || M === 9) && (st === Yt || st === re) && f(yt.INVALID_LINKED_FORMAT, o(), 0), st) {
      case "@":
        return u.next(), $ = p(
          d,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), d.inLinked = !0, $;
      case ".":
        return b(u), u.next(), p(
          d,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return b(u), u.next(), p(
          d,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return K(u) ? ($ = p(d, 1, _t(u)), d.braceNest = 0, d.inLinked = !1, $) : I(u, d) || B(u, d) ? (b(u), L(u, d)) : T(u, d) ? (b(u), p(d, 11, R(u))) : Y(u, d) ? (b(u), st === "{" ? bt(u, d) || $ : p(d, 10, rt(u))) : (M === 7 && f(yt.INVALID_LINKED_FORMAT, o(), 0), d.braceNest = 0, d.inLinked = !1, U(u, d));
    }
  }
  function U(u, d) {
    let M = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (d.braceNest > 0)
      return bt(u, d) || k(d);
    if (d.inLinked)
      return L(u, d) || k(d);
    switch (u.currentChar()) {
      case "{":
        return bt(u, d) || k(d);
      case "}":
        return f(yt.UNBALANCED_CLOSING_BRACE, o(), 0), u.next(), p(
          d,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return L(u, d) || k(d);
      default: {
        if (K(u))
          return M = p(d, 1, _t(u)), d.braceNest = 0, d.inLinked = !1, M;
        if (ot(u))
          return p(d, 0, tt(u));
        break;
      }
    }
    return M;
  }
  function xt() {
    const { currentType: u, offset: d, startLoc: M, endLoc: $ } = l;
    return l.lastType = u, l.lastOffset = d, l.lastStartLoc = M, l.lastEndLoc = $, l.offset = s(), l.startLoc = o(), i.currentChar() === ge ? p(
      l,
      13
      /* TokenTypes.EOF */
    ) : U(i, l);
  }
  return {
    nextToken: xt,
    currentOffset: s,
    currentPosition: o,
    context: c
  };
}
const Nl = "parser", Wl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function $l(e, t, n) {
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
function Fl(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(g, x, y, S, ...E) {
    const I = g.currentPosition();
    if (I.offset += S, I.column += S, n) {
      const T = t ? yi(y, I) : null, B = Kn(x, T, {
        domain: Nl,
        args: E
      });
      n(B);
    }
  }
  function s(g, x, y) {
    const S = { type: g };
    return t && (S.start = x, S.end = x, S.loc = { start: y, end: y }), S;
  }
  function o(g, x, y, S) {
    t && (g.end = x, g.loc && (g.loc.end = y));
  }
  function a(g, x) {
    const y = g.context(), S = s(3, y.offset, y.startLoc);
    return S.value = x, o(S, g.currentOffset(), g.currentPosition()), S;
  }
  function r(g, x) {
    const y = g.context(), { lastOffset: S, lastStartLoc: E } = y, I = s(5, S, E);
    return I.index = parseInt(x, 10), g.nextToken(), o(I, g.currentOffset(), g.currentPosition()), I;
  }
  function l(g, x) {
    const y = g.context(), { lastOffset: S, lastStartLoc: E } = y, I = s(4, S, E);
    return I.key = x, g.nextToken(), o(I, g.currentOffset(), g.currentPosition()), I;
  }
  function c(g, x) {
    const y = g.context(), { lastOffset: S, lastStartLoc: E } = y, I = s(9, S, E);
    return I.value = x.replace(Wl, $l), g.nextToken(), o(I, g.currentOffset(), g.currentPosition()), I;
  }
  function h(g) {
    const x = g.nextToken(), y = g.context(), { lastOffset: S, lastStartLoc: E } = y, I = s(8, S, E);
    return x.type !== 11 ? (i(g, yt.UNEXPECTED_EMPTY_LINKED_MODIFIER, y.lastStartLoc, 0), I.value = "", o(I, S, E), {
      nextConsumeToken: x,
      node: I
    }) : (x.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, le(x)), I.value = x.value || "", o(I, g.currentOffset(), g.currentPosition()), {
      node: I
    });
  }
  function f(g, x) {
    const y = g.context(), S = s(7, y.offset, y.startLoc);
    return S.value = x, o(S, g.currentOffset(), g.currentPosition()), S;
  }
  function p(g) {
    const x = g.context(), y = s(6, x.offset, x.startLoc);
    let S = g.nextToken();
    if (S.type === 8) {
      const E = h(g);
      y.modifier = E.node, S = E.nextConsumeToken || g.nextToken();
    }
    switch (S.type !== 9 && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(S)), S = g.nextToken(), S.type === 2 && (S = g.nextToken()), S.type) {
      case 10:
        S.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(S)), y.key = f(g, S.value || "");
        break;
      case 4:
        S.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(S)), y.key = l(g, S.value || "");
        break;
      case 5:
        S.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(S)), y.key = r(g, S.value || "");
        break;
      case 6:
        S.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(S)), y.key = c(g, S.value || "");
        break;
      default: {
        i(g, yt.UNEXPECTED_EMPTY_LINKED_KEY, x.lastStartLoc, 0);
        const E = g.context(), I = s(7, E.offset, E.startLoc);
        return I.value = "", o(I, E.offset, E.startLoc), y.key = I, o(y, E.offset, E.startLoc), {
          nextConsumeToken: S,
          node: y
        };
      }
    }
    return o(y, g.currentOffset(), g.currentPosition()), {
      node: y
    };
  }
  function k(g) {
    const x = g.context(), y = x.currentType === 1 ? g.currentOffset() : x.offset, S = x.currentType === 1 ? x.endLoc : x.startLoc, E = s(2, y, S);
    E.items = [];
    let I = null;
    do {
      const Y = I || g.nextToken();
      switch (I = null, Y.type) {
        case 0:
          Y.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(Y)), E.items.push(a(g, Y.value || ""));
          break;
        case 5:
          Y.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(Y)), E.items.push(r(g, Y.value || ""));
          break;
        case 4:
          Y.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(Y)), E.items.push(l(g, Y.value || ""));
          break;
        case 6:
          Y.value == null && i(g, yt.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, le(Y)), E.items.push(c(g, Y.value || ""));
          break;
        case 7: {
          const K = p(g);
          E.items.push(K.node), I = K.nextConsumeToken || null;
          break;
        }
      }
    } while (x.currentType !== 13 && x.currentType !== 1);
    const T = x.currentType === 1 ? x.lastOffset : g.currentOffset(), B = x.currentType === 1 ? x.lastEndLoc : g.currentPosition();
    return o(E, T, B), E;
  }
  function v(g, x, y, S) {
    const E = g.context();
    let I = S.items.length === 0;
    const T = s(1, x, y);
    T.cases = [], T.cases.push(S);
    do {
      const B = k(g);
      I || (I = B.items.length === 0), T.cases.push(B);
    } while (E.currentType !== 13);
    return I && i(g, yt.MUST_HAVE_MESSAGES_IN_PLURAL, y, 0), o(T, g.currentOffset(), g.currentPosition()), T;
  }
  function w(g) {
    const x = g.context(), { offset: y, startLoc: S } = x, E = k(g);
    return x.currentType === 13 ? E : v(g, y, S, E);
  }
  function b(g) {
    const x = Dl(g, Ht({}, e)), y = x.context(), S = s(0, y.offset, y.startLoc);
    return t && S.loc && (S.loc.source = g), S.body = w(x), e.onCacheKey && (S.cacheKey = e.onCacheKey(g)), y.currentType !== 13 && i(x, yt.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, g[y.offset] || ""), o(S, x.currentOffset(), x.currentPosition()), S;
  }
  return { parse: b };
}
function le(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Bl(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function ks(e, t) {
  for (let n = 0; n < e.length; n++)
    Ni(e[n], t);
}
function Ni(e, t) {
  switch (e.type) {
    case 1:
      ks(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ks(e.items, t);
      break;
    case 6: {
      Ni(e.key, t), t.helper(
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
function Hl(e, t = {}) {
  const n = Bl(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ni(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function jl(e) {
  const t = e.body;
  return t.type === 2 ? bs(t) : t.cases.forEach((n) => bs(n)), e;
}
function bs(e) {
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
      e.static = Di(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
function Ye(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ye(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let i = 0; i < n.length; i++)
        Ye(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        Ye(n[i]);
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
      Ye(t.key), t.k = t.key, delete t.key, t.modifier && (Ye(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Ul(e, t) {
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
  function l(w, b) {
    a.code += w;
  }
  function c(w, b = !0) {
    const g = b ? i : "";
    l(s ? g + "  ".repeat(w) : g);
  }
  function h(w = !0) {
    const b = ++a.indentLevel;
    w && c(b);
  }
  function f(w = !0) {
    const b = --a.indentLevel;
    w && c(b);
  }
  function p() {
    c(a.indentLevel);
  }
  return {
    context: r,
    push: l,
    indent: h,
    deindent: f,
    newline: p,
    helper: (w) => `_${w}`,
    needIndent: () => a.needIndent
  };
}
function Vl(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Ke(e, t.key), t.modifier ? (e.push(", "), Ke(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Yl(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let o = 0; o < s && (Ke(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function Gl(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let o = 0; o < s && (Ke(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function Xl(e, t) {
  t.body ? Ke(e, t.body) : e.push("null");
}
function Ke(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Xl(e, t);
      break;
    case 1:
      Gl(e, t);
      break;
    case 2:
      Yl(e, t);
      break;
    case 6:
      Vl(e, t);
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
const Kl = (e, t = {}) => {
  const n = G(t.mode) ? t.mode : "normal", i = G(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], r = Ul(e, {
    filename: i,
    breakLineCode: s,
    needIndent: o
  });
  r.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), r.indent(o), a.length > 0 && (r.push(`const { ${Di(a.map((h) => `${h}: _${h}`), ", ")} } = ctx`), r.newline()), r.push("return "), Ke(r, e), r.deindent(o), r.push("}"), delete e.helpers;
  const { code: l, map: c } = r.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Zl(e, t = {}) {
  const n = Ht({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = Fl(n).parse(e);
  return i ? (o && jl(r), s && Ye(r), { ast: r, code: "" }) : (Hl(r, n), Kl(r, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ql() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function he(e) {
  return ft(e) && Wi(e) === 0 && (oe(e, "b") || oe(e, "body"));
}
const bo = ["b", "body"];
function Jl(e) {
  return Te(e, bo);
}
const xo = ["c", "cases"];
function Ql(e) {
  return Te(e, xo, []);
}
const _o = ["s", "static"];
function tc(e) {
  return Te(e, _o);
}
const So = ["i", "items"];
function ec(e) {
  return Te(e, So, []);
}
const Co = ["t", "type"];
function Wi(e) {
  return Te(e, Co);
}
const To = ["v", "value"];
function Pn(e, t) {
  const n = Te(e, To);
  if (n != null)
    return n;
  throw pn(t);
}
const Lo = ["m", "modifier"];
function nc(e) {
  return Te(e, Lo);
}
const Mo = ["k", "key"];
function ic(e) {
  const t = Te(e, Mo);
  if (t)
    return t;
  throw pn(
    6
    /* NodeTypes.Linked */
  );
}
function Te(e, t, n) {
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (oe(e, s) && e[s] != null)
      return e[s];
  }
  return n;
}
const Po = [
  ...bo,
  ...xo,
  ..._o,
  ...So,
  ...Mo,
  ...Lo,
  ...To,
  ...Co
];
function pn(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ri(e) {
  return (n) => sc(n, e);
}
function sc(e, t) {
  const n = Jl(t);
  if (n == null)
    throw pn(
      0
      /* NodeTypes.Resource */
    );
  if (Wi(n) === 1) {
    const o = Ql(n);
    return e.plural(o.reduce((a, r) => [
      ...a,
      xs(e, r)
    ], []));
  } else
    return xs(e, n);
}
function xs(e, t) {
  const n = tc(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = ec(t).reduce((s, o) => [...s, vi(e, o)], []);
    return e.normalize(i);
  }
}
function vi(e, t) {
  const n = Wi(t);
  switch (n) {
    case 3:
      return Pn(t, n);
    case 9:
      return Pn(t, n);
    case 4: {
      const i = t;
      if (oe(i, "k") && i.k)
        return e.interpolate(e.named(i.k));
      if (oe(i, "key") && i.key)
        return e.interpolate(e.named(i.key));
      throw pn(n);
    }
    case 5: {
      const i = t;
      if (oe(i, "i") && Ft(i.i))
        return e.interpolate(e.list(i.i));
      if (oe(i, "index") && Ft(i.index))
        return e.interpolate(e.list(i.index));
      throw pn(n);
    }
    case 6: {
      const i = t, s = nc(i), o = ic(i);
      return e.linked(vi(e, o), s ? vi(e, s) : void 0, e.type);
    }
    case 7:
      return Pn(t, n);
    case 8:
      return Pn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const oc = (e) => e;
let Rn = vt();
function ac(e, t = {}) {
  let n = !1;
  const i = t.onError || Pl;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...Zl(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function rc(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && G(e)) {
    At(t.warnHtmlMessage) && t.warnHtmlMessage;
    const i = (t.onCacheKey || oc)(e), s = Rn[i];
    if (s)
      return s;
    const { ast: o, detectError: a } = ac(e, {
      ...t,
      location: !1,
      jit: !0
    }), r = ri(o);
    return a ? r : Rn[i] = r;
  } else {
    const n = e.cacheKey;
    if (n) {
      const i = Rn[n];
      return i || (Rn[n] = ri(e));
    } else
      return ri(e);
  }
}
const we = {
  INVALID_ARGUMENT: Ml,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, lc = 24;
function ye(e) {
  return Kn(e, null, void 0);
}
function $i(e, t) {
  return t.locale != null ? _s(t.locale) : _s(e.locale);
}
let li;
function _s(e) {
  if (G(e))
    return e;
  if (Mt(e)) {
    if (e.resolvedOnce && li != null)
      return li;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Cl(t))
        throw ye(we.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return li = t;
    } else
      throw ye(we.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ye(we.NOT_SUPPORT_LOCALE_TYPE);
}
function cc(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...It(t) ? t : ft(t) ? Object.keys(t) : G(t) ? [t] : [n]
  ])];
}
function Ro(e, t, n) {
  const i = G(n) ? n : jn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; It(a); )
      a = Ss(o, a, t);
    const r = It(t) || !dt(t) ? t : t.default ? t.default : null;
    a = G(r) ? [r] : r, It(a) && Ss(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function Ss(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && At(i); s++) {
    const o = t[s];
    G(o) && (i = uc(e, t[s], n));
  }
  return i;
}
function uc(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = hc(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function hc(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (It(n) || dt(n)) && n[s] && (i = n[s]);
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
const dc = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function fc(e) {
  return dc.test(e);
}
function gc(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function mc(e) {
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
function pc(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : fc(t) ? gc(t) : "*" + t;
}
function wc(e) {
  const t = [];
  let n = -1, i = 0, s = 0, o, a, r, l, c, h, f;
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
      if (s = 0, a === void 0 || (a = pc(a), a === !1))
        return !1;
      p[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function k() {
    const v = e[n + 1];
    if (i === 5 && v === "'" || i === 6 && v === '"')
      return n++, r = "\\" + v, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, o = e[n], !(o === "\\" && k())) {
      if (l = mc(o), f = Le[i], c = f[l] || f.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (h = p[c[1]], h && (r = o, h() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const Cs = /* @__PURE__ */ new Map();
function yc(e, t) {
  return ft(e) ? e[t] : null;
}
function vc(e, t) {
  if (!ft(e))
    return null;
  let n = Cs.get(t);
  if (n || (n = wc(t), n && Cs.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = n[o];
    if (Po.includes(a) && he(s))
      return null;
    const r = s[a];
    if (r === void 0 || Mt(s))
      return null;
    s = r, o++;
  }
  return s;
}
const kc = "11.2.2", Zn = -1, jn = "en-US", Ts = "", Ls = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function bc() {
  return {
    upper: (e, t) => t === "text" && G(e) ? e.toUpperCase() : t === "vnode" && ft(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && G(e) ? e.toLowerCase() : t === "vnode" && ft(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && G(e) ? Ls(e) : t === "vnode" && ft(e) && "__v_isVNode" in e ? Ls(e.children) : e
  };
}
let Eo;
function xc(e) {
  Eo = e;
}
let Ao;
function _c(e) {
  Ao = e;
}
let Io;
function Sc(e) {
  Io = e;
}
let Oo = null;
const Ms = (e) => {
  Oo = e;
}, Cc = () => Oo;
let Ps = 0;
function Tc(e = {}) {
  const t = Mt(e.onWarn) ? e.onWarn : yl, n = G(e.version) ? e.version : kc, i = G(e.locale) || Mt(e.locale) ? e.locale : jn, s = Mt(i) ? jn : i, o = It(e.fallbackLocale) || dt(e.fallbackLocale) || G(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = dt(e.messages) ? e.messages : ci(s), r = dt(e.datetimeFormats) ? e.datetimeFormats : ci(s), l = dt(e.numberFormats) ? e.numberFormats : ci(s), c = Ht(vt(), e.modifiers, bc()), h = e.pluralRules || vt(), f = Mt(e.missing) ? e.missing : null, p = At(e.missingWarn) || Hn(e.missingWarn) ? e.missingWarn : !0, k = At(e.fallbackWarn) || Hn(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, w = !!e.unresolving, b = Mt(e.postTranslation) ? e.postTranslation : null, g = dt(e.processor) ? e.processor : null, x = At(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, S = Mt(e.messageCompiler) ? e.messageCompiler : Eo, E = Mt(e.messageResolver) ? e.messageResolver : Ao || yc, I = Mt(e.localeFallbacker) ? e.localeFallbacker : Io || cc, T = ft(e.fallbackContext) ? e.fallbackContext : void 0, B = e, Y = ft(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), K = ft(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), ot = ft(B.__meta) ? B.__meta : {};
  Ps++;
  const it = {
    version: n,
    cid: Ps,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: h,
    missing: f,
    missingWarn: p,
    fallbackWarn: k,
    fallbackFormat: v,
    unresolving: w,
    postTranslation: b,
    processor: g,
    warnHtmlMessage: x,
    escapeParameter: y,
    messageCompiler: S,
    messageResolver: E,
    localeFallbacker: I,
    fallbackContext: T,
    onWarn: t,
    __meta: ot
  };
  return it.datetimeFormats = r, it.numberFormats = l, it.__datetimeFormatters = Y, it.__numberFormatters = K, it;
}
const ci = (e) => ({ [e]: vt() });
function Fi(e, t, n, i, s) {
  const { missing: o, onWarn: a } = e;
  if (o !== null) {
    const r = o(e, n, t, s);
    return G(r) ? r : t;
  } else
    return t;
}
function an(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Lc(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Mc(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (Lc(e, t[i]))
      return !0;
  return !1;
}
function Rs(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e, [l, c, h, f] = ki(...t), p = At(h.missingWarn) ? h.missingWarn : e.missingWarn;
  At(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn;
  const k = !!h.part, v = $i(e, h), w = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    v
  );
  if (!G(l) || l === "")
    return new Intl.DateTimeFormat(v, f).format(c);
  let b = {}, g, x = null;
  const y = "datetime format";
  for (let I = 0; I < w.length && (g = w[I], b = n[g] || {}, x = b[l], !dt(x)); I++)
    Fi(e, l, g, p, y);
  if (!dt(x) || !G(g))
    return i ? Zn : l;
  let S = `${g}__${l}`;
  Xn(f) || (S = `${S}__${JSON.stringify(f)}`);
  let E = r.get(S);
  return E || (E = new Intl.DateTimeFormat(g, Ht({}, x, f)), r.set(S, E)), k ? E.formatToParts(c) : E.format(c);
}
const zo = [
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
function ki(...e) {
  const [t, n, i, s] = e, o = vt();
  let a = vt(), r;
  if (G(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw ye(we.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    r = new Date(c);
    try {
      r.toISOString();
    } catch {
      throw ye(we.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (bl(t)) {
    if (isNaN(t.getTime()))
      throw ye(we.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (Ft(t))
    r = t;
  else
    throw ye(we.INVALID_ARGUMENT);
  return G(n) ? o.key = n : dt(n) && Object.keys(n).forEach((l) => {
    zo.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), G(i) ? o.locale = i : dt(i) && (a = i), dt(s) && (a = s), [o.key || "", r, o, a];
}
function Es(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function As(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e, [l, c, h, f] = bi(...t), p = At(h.missingWarn) ? h.missingWarn : e.missingWarn;
  At(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn;
  const k = !!h.part, v = $i(e, h), w = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    v
  );
  if (!G(l) || l === "")
    return new Intl.NumberFormat(v, f).format(c);
  let b = {}, g, x = null;
  const y = "number format";
  for (let I = 0; I < w.length && (g = w[I], b = n[g] || {}, x = b[l], !dt(x)); I++)
    Fi(e, l, g, p, y);
  if (!dt(x) || !G(g))
    return i ? Zn : l;
  let S = `${g}__${l}`;
  Xn(f) || (S = `${S}__${JSON.stringify(f)}`);
  let E = r.get(S);
  return E || (E = new Intl.NumberFormat(g, Ht({}, x, f)), r.set(S, E)), k ? E.formatToParts(c) : E.format(c);
}
const Do = [
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
function bi(...e) {
  const [t, n, i, s] = e, o = vt();
  let a = vt();
  if (!Ft(t))
    throw ye(we.INVALID_ARGUMENT);
  const r = t;
  return G(n) ? o.key = n : dt(n) && Object.keys(n).forEach((l) => {
    Do.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), G(i) ? o.locale = i : dt(i) && (a = i), dt(s) && (a = s), [o.key || "", r, o, a];
}
function Is(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const Pc = (e) => e, Rc = (e) => "", Ec = "text", Ac = (e) => e.length === 0 ? "" : Di(e), Ic = Tl;
function Os(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Oc(e) {
  const t = Ft(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ft(e.named.count) || Ft(e.named.n)) ? Ft(e.named.count) ? e.named.count : Ft(e.named.n) ? e.named.n : t : t;
}
function zc(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Dc(e = {}) {
  const t = e.locale, n = Oc(e), i = ft(e.pluralRules) && G(t) && Mt(e.pluralRules[t]) ? e.pluralRules[t] : Os, s = ft(e.pluralRules) && G(t) && Mt(e.pluralRules[t]) ? Os : void 0, o = (g) => g[i(n, g.length, s)], a = e.list || [], r = (g) => a[g], l = e.named || vt();
  Ft(e.pluralIndex) && zc(n, l);
  const c = (g) => l[g];
  function h(g, x) {
    const y = Mt(e.messages) ? e.messages(g, !!x) : ft(e.messages) ? e.messages[g] : !1;
    return y || (e.parent ? e.parent.message(g) : Rc);
  }
  const f = (g) => e.modifiers ? e.modifiers[g] : Pc, p = dt(e.processor) && Mt(e.processor.normalize) ? e.processor.normalize : Ac, k = dt(e.processor) && Mt(e.processor.interpolate) ? e.processor.interpolate : Ic, v = dt(e.processor) && G(e.processor.type) ? e.processor.type : Ec, b = {
    list: r,
    named: c,
    plural: o,
    linked: (g, ...x) => {
      const [y, S] = x;
      let E = "text", I = "";
      x.length === 1 ? ft(y) ? (I = y.modifier || I, E = y.type || E) : G(y) && (I = y || I) : x.length === 2 && (G(y) && (I = y || I), G(S) && (E = S || E));
      const T = h(g, !0)(b), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        E === "vnode" && It(T) && I ? T[0] : T
      );
      return I ? f(I)(B, E) : B;
    },
    message: h,
    type: v,
    interpolate: k,
    normalize: p,
    values: Ht(vt(), a, l)
  };
  return b;
}
const zs = () => "", ve = (e) => Mt(e);
function Ds(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = xi(...t), h = At(c.missingWarn) ? c.missingWarn : e.missingWarn, f = At(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, p = At(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, k = !!c.resolvedMessage, v = G(c.default) || At(c.default) ? At(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, w = n || v != null && (G(v) || Mt(v)), b = $i(e, c);
  p && Nc(c);
  let [g, x, y] = k ? [
    l,
    b,
    r[b] || vt()
  ] : No(e, l, b, a, f, h), S = g, E = l;
  if (!k && !(G(S) || he(S) || ve(S)) && w && (S = v, E = S), !k && (!(G(S) || he(S) || ve(S)) || !G(x)))
    return s ? Zn : l;
  let I = !1;
  const T = () => {
    I = !0;
  }, B = ve(S) ? S : Wo(e, l, x, S, E, T);
  if (I)
    return S;
  const Y = Fc(e, x, y, c), K = Dc(Y), ot = Wc(e, B, K);
  let it = i ? i(ot, l) : ot;
  return p && G(it) && (it = _l(it)), it;
}
function Nc(e) {
  It(e.list) ? e.list = e.list.map((t) => G(t) ? ws(t) : t) : ft(e.named) && Object.keys(e.named).forEach((t) => {
    G(e.named[t]) && (e.named[t] = ws(e.named[t]));
  });
}
function No(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, h = c(e, i, n);
  let f = vt(), p, k = null;
  const v = "translate";
  for (let w = 0; w < h.length && (p = h[w], f = a[p] || vt(), (k = l(f, t)) === null && (k = f[t]), !(G(k) || he(k) || ve(k))); w++)
    if (!Mc(p, h)) {
      const b = Fi(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        o,
        v
      );
      b !== t && (k = b);
    }
  return [k, p, f];
}
function Wo(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (ve(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (a == null) {
    const c = () => i;
    return c.locale = n, c.key = t, c;
  }
  const l = a(i, $c(e, n, s, i, r, o));
  return l.locale = n, l.key = t, l.source = i, l;
}
function Wc(e, t, n) {
  return t(n);
}
function xi(...e) {
  const [t, n, i] = e, s = vt();
  if (!G(t) && !Ft(t) && !ve(t) && !he(t))
    throw ye(we.INVALID_ARGUMENT);
  const o = Ft(t) ? String(t) : (ve(t), t);
  return Ft(n) ? s.plural = n : G(n) ? s.default = n : dt(n) && !Xn(n) ? s.named = n : It(n) && (s.list = n), Ft(i) ? s.plural = i : G(i) ? s.default = i : dt(i) && Ht(s, i), [o, s];
}
function $c(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      throw o && o(a), a;
    },
    onCacheKey: (a) => vl(t, n, a)
  };
}
function Fc(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: h } = e, p = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (k, v) => {
      let w = a(n, k);
      if (w == null && (h || v)) {
        const [, , b] = No(
          h || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          k,
          t,
          r,
          l,
          c
        );
        w = a(b, k);
      }
      if (G(w) || he(w)) {
        let b = !1;
        const x = Wo(e, k, t, w, k, () => {
          b = !0;
        });
        return b ? zs : x;
      } else return ve(w) ? w : zs;
    }
  };
  return e.processor && (p.processor = e.processor), i.list && (p.list = i.list), i.named && (p.named = i.named), Ft(i.plural) && (p.pluralIndex = i.plural), p;
}
ql();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Bc = "11.2.2";
function Hc() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (zn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (zn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Ze = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: lc,
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
function wn(e, ...t) {
  return Kn(e, null, void 0);
}
const _i = /* @__PURE__ */ $e("__translateVNode"), Si = /* @__PURE__ */ $e("__datetimeParts"), Ci = /* @__PURE__ */ $e("__numberParts"), jc = $e("__setPluralRules"), $o = /* @__PURE__ */ $e("__injectWithOption"), Ti = /* @__PURE__ */ $e("__dispose");
function yn(e) {
  if (!ft(e) || he(e))
    return e;
  for (const t in e)
    if (oe(e, t))
      if (!t.includes("."))
        ft(e[t]) && yn(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in s || (s[n[a]] = vt()), !ft(s[n[a]])) {
            o = !0;
            break;
          }
          s = s[n[a]];
        }
        if (o || (he(s) ? Po.includes(n[i]) || delete e[t] : (s[n[i]] = e[t], delete e[t])), !he(s)) {
          const a = s[n[i]];
          ft(a) && yn(a);
        }
      }
  return e;
}
function Fo(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = dt(n) ? n : It(i) ? vt() : { [e]: vt() };
  if (It(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || vt(), Dn(c, a[l])) : Dn(c, a);
    } else
      G(r) && Dn(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      oe(a, r) && yn(a[r]);
  return a;
}
function Uc(e) {
  return e.type;
}
function Vc(e, t, n) {
  let i = ft(t.messages) ? t.messages : vt();
  "__i18nGlobal" in n && (i = Fo(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, i[o]);
  });
  {
    if (ft(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (ft(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Ns(e) {
  return _(_a, null, e, 0);
}
function Bo() {
  return "currentInstance" in ii ? ii["currentInstance"] : ii.getCurrentInstance();
}
const Ws = () => [], Yc = () => !1;
let $s = 0;
function Fs(e) {
  return (t, n, i, s) => e(n, i, Bo() || void 0, s);
}
function Gc(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = ms ? J : xa;
  let a = At(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : G(e.locale) ? e.locale : jn
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : G(e.fallbackLocale) || It(e.fallbackLocale) || dt(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(Fo(r.value, e)), h = o(dt(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), f = o(dt(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let p = t ? t.missingWarn : At(e.missingWarn) || Hn(e.missingWarn) ? e.missingWarn : !0, k = t ? t.fallbackWarn : At(e.fallbackWarn) || Hn(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : At(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, b = Mt(e.missing) ? e.missing : null, g = Mt(e.missing) ? Fs(e.missing) : null, x = Mt(e.postTranslation) ? e.postTranslation : null, y = t ? t.warnHtmlMessage : At(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const E = t ? t.modifiers : dt(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, T;
  T = (() => {
    i && Ms(null);
    const C = {
      version: Bc,
      locale: r.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: E,
      pluralRules: I,
      missing: g === null ? void 0 : g,
      missingWarn: p,
      fallbackWarn: k,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: x === null ? void 0 : x,
      warnHtmlMessage: y,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = h.value, C.numberFormats = f.value, C.__datetimeFormatters = dt(T) ? T.__datetimeFormatters : void 0, C.__numberFormatters = dt(T) ? T.__numberFormatters : void 0;
    const D = Tc(C);
    return i && Ms(D), D;
  })(), an(T, r.value, l.value);
  function Y() {
    return [
      r.value,
      l.value,
      c.value,
      h.value,
      f.value
    ];
  }
  const K = V({
    get: () => r.value,
    set: (C) => {
      T.locale = C, r.value = C;
    }
  }), ot = V({
    get: () => l.value,
    set: (C) => {
      T.fallbackLocale = C, l.value = C, an(T, r.value, C);
    }
  }), it = V(() => c.value), lt = /* @__PURE__ */ V(() => h.value), gt = /* @__PURE__ */ V(() => f.value);
  function ct() {
    return Mt(x) ? x : null;
  }
  function Q(C) {
    x = C, T.postTranslation = C;
  }
  function at() {
    return b;
  }
  function kt(C) {
    C !== null && (g = Fs(C)), b = C, T.missing = g;
  }
  const ht = (C, D, ut, pt, Et, Me) => {
    Y();
    let de;
    try {
      i || (T.fallbackContext = t ? Cc() : void 0), de = C(T);
    } finally {
      i || (T.fallbackContext = void 0);
    }
    if (ut !== "translate exists" && // for not `te` (e.g `t`)
    Ft(de) && de === Zn || ut === "translate exists" && !de) {
      const [Sn, Ki] = D();
      return t && v ? pt(t) : Et(Sn);
    } else {
      if (Me(de))
        return de;
      throw wn(Ze.UNEXPECTED_RETURN_TYPE);
    }
  };
  function X(...C) {
    return ht((D) => Reflect.apply(Ds, null, [D, ...C]), () => xi(...C), "translate", (D) => Reflect.apply(D.t, D, [...C]), (D) => D, (D) => G(D));
  }
  function mt(...C) {
    const [D, ut, pt] = C;
    if (pt && !ft(pt))
      throw wn(Ze.INVALID_ARGUMENT);
    return X(D, ut, Ht({ resolvedMessage: !0 }, pt || {}));
  }
  function tt(...C) {
    return ht((D) => Reflect.apply(Rs, null, [D, ...C]), () => ki(...C), "datetime format", (D) => Reflect.apply(D.d, D, [...C]), () => Ts, (D) => G(D) || It(D));
  }
  function zt(...C) {
    return ht((D) => Reflect.apply(As, null, [D, ...C]), () => bi(...C), "number format", (D) => Reflect.apply(D.n, D, [...C]), () => Ts, (D) => G(D) || It(D));
  }
  function jt(C) {
    return C.map((D) => G(D) || Ft(D) || At(D) ? Ns(String(D)) : D);
  }
  const Lt = {
    normalize: jt,
    interpolate: (C) => C,
    type: "vnode"
  };
  function Rt(...C) {
    return ht((D) => {
      let ut;
      const pt = D;
      try {
        pt.processor = Lt, ut = Reflect.apply(Ds, null, [pt, ...C]);
      } finally {
        pt.processor = null;
      }
      return ut;
    }, () => xi(...C), "translate", (D) => D[_i](...C), (D) => [Ns(D)], (D) => It(D));
  }
  function Xt(...C) {
    return ht((D) => Reflect.apply(As, null, [D, ...C]), () => bi(...C), "number format", (D) => D[Ci](...C), Ws, (D) => G(D) || It(D));
  }
  function ee(...C) {
    return ht((D) => Reflect.apply(Rs, null, [D, ...C]), () => ki(...C), "datetime format", (D) => D[Si](...C), Ws, (D) => G(D) || It(D));
  }
  function Jt(C) {
    I = C, T.pluralRules = I;
  }
  function R(C, D) {
    return ht(() => {
      if (!C)
        return !1;
      const ut = G(D) ? D : r.value, pt = bt(ut), Et = T.messageResolver(pt, C);
      return he(Et) || ve(Et) || G(Et);
    }, () => [C], "translate exists", (ut) => Reflect.apply(ut.te, ut, [C, D]), Yc, (ut) => At(ut));
  }
  function rt(C) {
    let D = null;
    const ut = Ro(T, l.value, r.value);
    for (let pt = 0; pt < ut.length; pt++) {
      const Et = c.value[ut[pt]] || {}, Me = T.messageResolver(Et, C);
      if (Me != null) {
        D = Me;
        break;
      }
    }
    return D;
  }
  function _t(C) {
    const D = rt(C);
    return D ?? (t ? t.tm(C) || {} : {});
  }
  function bt(C) {
    return c.value[C] || {};
  }
  function L(C, D) {
    if (s) {
      const ut = { [C]: D };
      for (const pt in ut)
        oe(ut, pt) && yn(ut[pt]);
      D = ut[C];
    }
    c.value[C] = D, T.messages = c.value;
  }
  function U(C, D) {
    c.value[C] = c.value[C] || {};
    const ut = { [C]: D };
    if (s)
      for (const pt in ut)
        oe(ut, pt) && yn(ut[pt]);
    D = ut[C], Dn(D, c.value[C]), T.messages = c.value;
  }
  function xt(C) {
    return h.value[C] || {};
  }
  function u(C, D) {
    h.value[C] = D, T.datetimeFormats = h.value, Es(T, C, D);
  }
  function d(C, D) {
    h.value[C] = Ht(h.value[C] || {}, D), T.datetimeFormats = h.value, Es(T, C, D);
  }
  function M(C) {
    return f.value[C] || {};
  }
  function $(C, D) {
    f.value[C] = D, T.numberFormats = f.value, Is(T, C, D);
  }
  function st(C, D) {
    f.value[C] = Ht(f.value[C] || {}, D), T.numberFormats = f.value, Is(T, C, D);
  }
  $s++, t && ms && (Ce(t.locale, (C) => {
    a && (r.value = C, T.locale = C, an(T, r.value, l.value));
  }), Ce(t.fallbackLocale, (C) => {
    a && (l.value = C, T.fallbackLocale = C, an(T, r.value, l.value));
  }));
  const Z = {
    id: $s,
    locale: K,
    fallbackLocale: ot,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(C) {
      a = C, C && t && (r.value = t.locale.value, l.value = t.fallbackLocale.value, an(T, r.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: it,
    get modifiers() {
      return E;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return i;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(C) {
      p = C, T.missingWarn = p;
    },
    get fallbackWarn() {
      return k;
    },
    set fallbackWarn(C) {
      k = C, T.fallbackWarn = k;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(C) {
      v = C;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(C) {
      w = C, T.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(C) {
      y = C, T.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(C) {
      S = C, T.escapeParameter = C;
    },
    t: X,
    getLocaleMessage: bt,
    setLocaleMessage: L,
    mergeLocaleMessage: U,
    getPostTranslationHandler: ct,
    setPostTranslationHandler: Q,
    getMissingHandler: at,
    setMissingHandler: kt,
    [jc]: Jt
  };
  return Z.datetimeFormats = lt, Z.numberFormats = gt, Z.rt = mt, Z.te = R, Z.tm = _t, Z.d = tt, Z.n = zt, Z.getDateTimeFormat = xt, Z.setDateTimeFormat = u, Z.mergeDateTimeFormat = d, Z.getNumberFormat = M, Z.setNumberFormat = $, Z.mergeNumberFormat = st, Z[$o] = n, Z[_i] = Rt, Z[Si] = ee, Z[Ci] = Xt, Z;
}
const Bi = {
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
function Xc({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Kt ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, vt());
}
function Ho() {
  return Kt;
}
Ht({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ft(e) || !isNaN(e)
  }
}, Bi);
function Kc(e) {
  return It(e) && !G(e[0]);
}
function jo(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = vt();
    e.locale && (a.locale = e.locale), G(e.format) ? a.key = e.format : ft(e.format) && (G(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((p, k) => n.includes(k) ? Ht(vt(), p, { [k]: e.format[k] }) : p, vt()));
    const l = i(e.value, a, r);
    let c = [a.key];
    It(l) ? c = l.map((p, k) => {
      const v = s[p.type], w = v ? v({ [p.type]: p.value, index: k, parts: l }) : [p.value];
      return Kc(w) && (w[0].key = `${p.type}-${k}`), w;
    }) : G(l) && (c = [l]);
    const h = Ht(vt(), o), f = G(e.tag) || ft(e.tag) ? e.tag : Ho();
    return so(f, h, c);
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
}, Bi);
const Zc = /* @__PURE__ */ $e("global-vue-i18n");
function _n(e = {}) {
  const t = Bo();
  if (t == null)
    throw wn(Ze.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw wn(Ze.NOT_INSTALLED);
  const n = qc(t), i = Qc(n), s = Uc(t), o = Jc(e, s);
  if (o === "global")
    return Vc(i, e, s), i;
  if (o === "parent") {
    let l = tu(n, t, e.__useComponent);
    return l == null && (l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = Ht({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = Gc(l), a.__composerExtend && (r[Ti] = a.__composerExtend(r)), nu(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function qc(e) {
  const t = Se(e.isCE ? Zc : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw wn(e.isCE ? Ze.NOT_INSTALLED_WITH_PROVIDE : Ze.UNEXPECTED_ERROR);
  return t;
}
function Jc(e, t) {
  return Xn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Qc(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function tu(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = eu(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[$o] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function eu(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function nu(e, t, n) {
  tn(() => {
  }, t), Ri(() => {
    const i = n;
    e.__deleteInstance(t);
    const s = i[Ti];
    s && (s(), delete i[Ti]);
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
}, Bi);
Hc();
xc(rc);
_c(vc);
Sc(Ro);
const iu = { class: "toolbar-panel first-panel" }, su = { class: "tool-section" }, ou = ["onClick", "title"], au = { class: "action-section" }, ru = ["disabled", "title"], lu = ["disabled", "title"], cu = ["title"], uu = ["title"], hu = ["title"], du = {
  key: 0,
  class: "toolbar-panel second-panel"
}, fu = { class: "style-section" }, gu = {
  key: 0,
  class: "style-group"
}, mu = { class: "line-width-selector" }, pu = ["onClick", "title"], wu = {
  key: 1,
  class: "style-group color-picker-group"
}, yu = ["title"], vu = {
  key: 0,
  class: "color-picker-panel"
}, ku = { class: "color-row" }, bu = ["onClick", "title"], xu = { class: "custom-color-wrapper" }, _u = ["title"], Su = ["value"], Cu = {
  key: 2,
  class: "style-group"
}, Tu = { class: "text-size-selector" }, Lu = ["onClick", "title"], Mu = {
  key: 3,
  class: "style-group"
}, Pu = { class: "mosaic-size-selector" }, Ru = ["onClick", "title"], Eu = {
  key: 4,
  class: "style-group"
}, Au = { class: "translate-engine-selector" }, Iu = ["onClick", "title"], Ou = /* @__PURE__ */ Ot({
  __name: "ToolbarSection",
  props: {
    currentTool: {},
    currentColor: {},
    currentLineWidth: {},
    currentTextSize: {},
    currentMosaicSize: {},
    canUndo: { type: Boolean },
    canDelete: { type: Boolean },
    currentTranslateEngine: { default: "bing" }
  },
  emits: ["tool-select", "color-change", "line-width-change", "text-size-change", "mosaic-size-change", "translate-engine-change", "undo", "delete", "save", "confirm", "cancel"],
  setup(e, { expose: t, emit: n }) {
    const i = J(!1), s = J(null), { t: o } = _n(), a = e, r = n, l = V(() => [
      { type: A.Select, icon: ul, title: o("screenshot.select") },
      { type: A.Rectangle, icon: dl, title: o("screenshot.rectangle") },
      { type: A.Arrow, icon: il, title: o("screenshot.arrow") },
      { type: A.Pen, icon: wl, title: o("screenshot.pen") },
      { type: A.Mosaic, icon: cl, title: o("screenshot.mosaic") },
      { type: A.Text, icon: al, title: o("screenshot.text") },
      { type: A.ColorPicker, icon: fs, title: o("screenshot.colorPicker") },
      { type: A.Ocr, icon: On, title: o("screenshot.ocr") },
      { type: A.Translate, icon: vo, title: o("screenshot.translate") },
      { type: A.Pin, icon: wi, title: o("screenshot.pin") }
    ]), c = V(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: o("translate.bingTranslate"), short: "B" },
      { value: "offline", label: o("translate.offlineTranslate"), short: "离" }
    ]), h = [2, 3, 5, 8], f = ["#ff4444", "#44ff44", "#4444ff"], p = [12, 14, 16, 18, 20, 24], k = [5, 8, 10, 15], v = V(() => ![A.Select, A.ColorPicker, A.Ocr, A.Pin].includes(a.currentTool)), w = V(
      () => [A.Rectangle, A.Arrow, A.Pen].includes(a.currentTool)
    ), b = V(
      () => [A.Rectangle, A.Arrow, A.Pen, A.Text].includes(a.currentTool)
    ), g = V(() => a.currentTool === A.Text), x = V(() => a.currentTool === A.Mosaic), y = V(() => a.currentTool === A.Translate), S = (X) => r("tool-select", X), E = (X) => r("color-change", X), I = (X) => r("line-width-change", X), T = (X) => r("text-size-change", X), B = (X) => r("mosaic-size-change", X), Y = () => r("undo"), K = () => r("delete"), ot = () => r("save"), it = () => r("confirm"), lt = () => r("cancel"), gt = (X) => {
      r("translate-engine-change", X);
    }, ct = () => {
      i.value = !i.value;
    }, Q = (X) => {
      E(X), i.value = !1;
    }, at = () => {
    }, kt = (X) => {
      const mt = X.target;
      mt.value && E(mt.value);
    };
    Ce(() => a.currentTool, () => {
      i.value && (i.value = !1);
    });
    const ht = () => {
      const X = s.value?.getBoundingClientRect();
      return {
        width: X?.width ?? 510,
        height: X?.height ?? 48
      };
    };
    return Ce([
      () => a.currentTool,
      () => i.value
    ], () => {
      fn(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: ht()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: ht
    }), (X, mt) => (j(), q(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: s,
        class: "toolbar-container"
      },
      [
        nt(" 第一个面板：工具选择 + 操作按钮 "),
        O("div", iu, [
          nt(" 工具选择区域 "),
          O("div", su, [
            (j(!0), q(
              Kt,
              null,
              me(l.value, (tt) => (j(), q("button", {
                key: tt.type,
                onClick: (zt) => S(tt.type),
                class: Ct(["tool-btn", { active: X.currentTool === tt.type }]),
                title: tt.title
              }, [
                (j(), $t(_e(tt.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 3
                }))
              ], 10, ou))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          nt(" 分隔线 "),
          mt[0] || (mt[0] = O(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          nt(" 操作按钮区域 "),
          O("div", au, [
            O("button", {
              onClick: Y,
              disabled: !X.canUndo,
              class: "action-btn undo",
              title: z(o)("screenshot.undo")
            }, [
              _(z(ml), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, ru),
            O("button", {
              onClick: K,
              disabled: !X.canDelete,
              class: "action-btn delete",
              title: z(o)("screenshot.delete")
            }, [
              _(z(sl), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, lu),
            O("button", {
              onClick: ot,
              class: "action-btn save",
              title: z(o)("screenshot.save")
            }, [
              _(z(ol), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, cu),
            O("button", {
              onClick: it,
              class: "action-btn confirm",
              title: z(o)("screenshot.confirm")
            }, [
              _(z(mi), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, uu),
            O("button", {
              onClick: lt,
              class: "action-btn cancel",
              title: z(o)("screenshot.cancel")
            }, [
              _(z(pi), {
                theme: "outline",
                size: "18",
                strokeWidth: 3
              })
            ], 8, hu)
          ])
        ]),
        nt(" 第二个面板：样式设置区域 "),
        v.value ? (j(), q("div", du, [
          O("div", fu, [
            nt(" 线宽设置 "),
            w.value ? (j(), q("div", gu, [
              O("div", mu, [
                (j(), q(
                  Kt,
                  null,
                  me(h, (tt) => O("button", {
                    key: tt,
                    onClick: (zt) => I(tt),
                    class: Ct(["width-btn", { active: X.currentLineWidth === tt }]),
                    title: `${tt}px`
                  }, [
                    O(
                      "div",
                      {
                        class: "line-preview",
                        style: Dt({ height: `${tt}px`, backgroundColor: X.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, pu)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])) : nt("v-if", !0),
            nt(" 颜色设置 "),
            b.value ? (j(), q("div", wu, [
              O("button", {
                onClick: ct,
                class: "color-trigger-btn",
                style: Dt({ backgroundColor: X.currentColor }),
                title: z(o)("screenshot.colorPicker")
              }, mt[1] || (mt[1] = [
                O(
                  "div",
                  { class: "color-trigger-inner" },
                  null,
                  -1
                  /* HOISTED */
                )
              ]), 12, yu),
              nt(" 颜色选择器面板 "),
              i.value ? (j(), q("div", vu, [
                O("div", ku, [
                  nt(" 预设颜色：红、绿、蓝 "),
                  (j(), q(
                    Kt,
                    null,
                    me(f, (tt) => O("button", {
                      key: tt,
                      onClick: (zt) => Q(tt),
                      class: Ct(["color-btn", { active: X.currentColor === tt }]),
                      style: Dt({ backgroundColor: tt }),
                      title: tt
                    }, null, 14, bu)),
                    64
                    /* STABLE_FRAGMENT */
                  )),
                  nt(" 自定义颜色选择器 "),
                  O("div", xu, [
                    O("button", {
                      onClick: at,
                      class: Ct(["color-btn custom-color-btn", { active: !f.includes(X.currentColor) }]),
                      title: z(o)("screenshot.customColor")
                    }, [
                      _(z(fs), {
                        theme: "outline",
                        size: "14",
                        strokeWidth: 3
                      })
                    ], 10, _u),
                    O("input", {
                      ref: "colorInputRef",
                      type: "color",
                      onChange: kt,
                      value: X.currentColor,
                      class: "color-input-hidden"
                    }, null, 40, Su)
                  ])
                ])
              ])) : nt("v-if", !0)
            ])) : nt("v-if", !0),
            nt(" 文字大小设置 "),
            g.value ? (j(), q("div", Cu, [
              O("div", Tu, [
                (j(), q(
                  Kt,
                  null,
                  me(p, (tt) => O("button", {
                    key: tt,
                    onClick: (zt) => T(tt),
                    class: Ct(["size-btn", { active: X.currentTextSize === tt }]),
                    title: `${tt}px`
                  }, [
                    O(
                      "span",
                      {
                        class: "size-text",
                        style: Dt({ fontSize: `${tt}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Lu)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])) : nt("v-if", !0),
            nt(" 马赛克大小设置 "),
            x.value ? (j(), q("div", Mu, [
              O("div", Pu, [
                (j(), q(
                  Kt,
                  null,
                  me(k, (tt) => O("button", {
                    key: tt,
                    onClick: (zt) => B(tt),
                    class: Ct(["size-btn", { active: X.currentMosaicSize === tt }]),
                    title: `${z(o)("screenshot.brush")} ${tt * 3}px`
                  }, [
                    O(
                      "div",
                      {
                        class: "mosaic-preview",
                        style: Dt({
                          width: `${Math.min(tt * 1.5, 24)}px`,
                          height: `${Math.min(tt * 1.5, 24)}px`,
                          backgroundColor: "rgba(100, 100, 100, 0.5)",
                          borderRadius: "50%"
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Ru)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])) : nt("v-if", !0),
            nt(" 翻译引擎选择 "),
            y.value ? (j(), q("div", Eu, [
              O("div", Au, [
                (j(!0), q(
                  Kt,
                  null,
                  me(c.value, (tt) => (j(), q("button", {
                    key: tt.value,
                    onClick: (zt) => gt(tt.value),
                    class: Ct(["engine-btn", { active: X.currentTranslateEngine === tt.value }]),
                    title: tt.label
                  }, wt(tt.short), 11, Iu))),
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
}), qn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, zu = /* @__PURE__ */ qn(Ou, [["__scopeId", "data-v-52aabc4b"]]), Du = {
  class: "screenshot-container",
  ref: "containerRef"
}, Nu = {
  key: 0,
  class: "mask-layers"
}, Wu = {
  key: 1,
  class: "mask-full"
}, $u = { class: "size-text" }, Fu = {
  key: 4,
  class: "loading-overlay"
}, Bu = /* @__PURE__ */ Ot({
  __name: "index",
  setup(e) {
    const t = J(), n = J(), i = J(null), s = J(null);
    let o = null;
    const a = J(!0), r = J(!1), l = J(""), c = J({ x: 0, y: 0 }), h = J(!1), f = J("bing"), p = J({ width: 510, height: 48 });
    let k = !1;
    const v = J({
      selectionRect: null,
      annotations: [],
      currentTool: A.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3 },
      textSize: 16,
      mosaicSize: 5,
      hasSelection: !1,
      hasAnnotations: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), w = J(), b = J(), g = J(), x = V(() => v.value.isDrawing), y = V(() => {
      if (!v.value.selectionRect) return {};
      const { y: L } = v.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${L}px`
      };
    }), S = V(() => {
      if (!v.value.selectionRect) return {};
      const { y: L, height: U } = v.value.selectionRect;
      return {
        top: `${L + U}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), E = V(() => {
      if (!v.value.selectionRect) return {};
      const { x: L, y: U, height: xt } = v.value.selectionRect;
      return {
        top: `${U}px`,
        left: "0",
        width: `${L}px`,
        height: `${xt}px`
      };
    }), I = V(() => {
      if (!v.value.selectionRect) return {};
      const { x: L, y: U, width: xt, height: u } = v.value.selectionRect;
      return {
        top: `${U}px`,
        left: `${L + xt}px`,
        right: "0",
        height: `${u}px`
      };
    }), T = V(() => {
      if (!v.value.selectionRect) return {};
      const { x: L, y: U, height: xt } = v.value.selectionRect, u = 8, d = Math.min(p.value.width, Math.max(0, window.innerWidth - u * 2)), M = Math.min(p.value.height, Math.max(0, window.innerHeight - u * 2)), $ = Math.max(u, window.innerHeight - M - u), st = Math.max(u, window.innerWidth - d - u);
      let Z;
      return U + xt + M + u <= window.innerHeight ? Z = U + xt + u : U - M - u >= u ? Z = U - M - u : Z = U + xt - M - u, Z = Math.min(Math.max(Z, u), $), {
        left: `${Math.min(Math.max(L, u), st)}px`,
        top: `${Z}px`
      };
    }), B = V(() => {
      if (!v.value.selectionRect) return {};
      const { x: L, y: U, width: xt, height: u } = v.value.selectionRect, d = 10;
      let M = L - d, $ = U - d, st = "translateY(-100%)";
      return M < 10 && (M = L + xt + d, st = "translateY(-100%)"), $ < 30 && ($ = U + u + d, st = "translateY(0)"), {
        left: `${M}px`,
        top: `${$}px`,
        transform: st
      };
    }), Y = V(() => {
      if (!v.value.selectionRect) return "";
      const { width: L, height: U } = v.value.selectionRect;
      return `${Math.round(L)} × ${Math.round(U)}`;
    }), K = V(() => {
      const L = v.value.textSize + 20;
      return {
        left: `${c.value.x}px`,
        top: `${c.value.y - L / 2}px`
      };
    }), ot = (L) => {
      if (L === A.Pin && v.value.selectionRect) {
        it();
        return;
      }
      if (L === A.Ocr && v.value.selectionRect) {
        lt();
        return;
      }
      o?.setTool(L);
    }, it = async () => {
      try {
        await o?.createPinWindow();
      } catch (L) {
        F.error("[截图] 创建贴图失败", L);
      }
    }, lt = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (L) {
        F.error("[截图] 创建文字识别贴图失败", L);
      }
    }, gt = (L) => {
      o?.updateStyle({ color: L });
    }, ct = (L) => {
      o?.updateStyle({ lineWidth: L });
    }, Q = (L) => {
      o?.updateTextSize(L);
    }, at = (L) => {
      o?.updateMosaicSize(L);
    }, kt = (L) => {
      f.value = L, o?.setTranslationEngine(L), o?.executeTranslation();
    }, ht = () => {
      o?.undoAnnotation();
    }, X = () => {
      o?.redoAnnotation();
    }, mt = () => {
      o?.deleteSelectedAnnotation();
    }, tt = async () => {
      try {
        await o?.processScreenshot("save"), R();
      } catch (L) {
        const U = L?.message || L?.toString() || "保存失败";
        if (U.includes("保存已取消") || U.includes("cancelled"))
          return;
        F.error("保存截图时发生错误", U);
      }
    }, zt = async () => {
      try {
        await o?.processScreenshot("copy"), R();
      } catch {
      }
    }, jt = () => {
      R();
    };
    let Tt = null;
    const Lt = (L, U) => {
      if (U && U.getData().type === "text") {
        const xt = U.getData();
        c.value = {
          x: xt.points[0].x,
          y: xt.points[0].y
        };
      } else
        c.value = L;
      r.value = !0, Tt = U || null, U && o?.setEditingAnnotation(U), U && U.getData().text ? l.value = U.getData().text : l.value = "", fn(() => {
        n.value?.focus(), Tt && n.value?.select();
      });
    }, Rt = () => {
      l.value.trim() ? Tt ? o?.updateTextAnnotation(Tt, l.value) : o?.createTextAnnotation(c.value, l.value) : Tt && o?.deleteAnnotation(Tt), Xt();
    }, Xt = () => {
      r.value = !1, l.value = "", Tt && o?.clearEditingAnnotation(), Tt = null;
    }, ee = (L) => {
      navigator.clipboard && navigator.clipboard.writeText(L.hex).catch((U) => {
        F.error("[截图] 复制颜色到剪贴板失败", U);
      });
    }, Jt = (L) => {
      if (L.key === "Meta" || L.key === "Win" || L.altKey && L.key === "Tab" || L.altKey && L.key === "F4") {
        L.preventDefault(), L.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (L.key === "Escape") {
          Xt(), L.preventDefault();
          return;
        }
        if (L.key === "Enter") {
          Rt(), L.preventDefault();
          return;
        }
        if (L.key === "Tab") {
          L.preventDefault();
          return;
        }
        return;
      }
      if (!v.value.selectionRect) {
        if (L.key === "Escape") {
          R();
          return;
        }
        L.preventDefault(), L.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(L)) {
        L.preventDefault();
        return;
      }
      const U = navigator.platform.toLowerCase().includes("mac");
      if ((U ? L.metaKey : L.ctrlKey) && L.key.toLowerCase() === "z") {
        L.shiftKey ? X() : ht(), L.preventDefault();
        return;
      }
      if (!U && L.ctrlKey && L.key.toLowerCase() === "y") {
        X(), L.preventDefault();
        return;
      }
      if (L.key === "Escape") {
        R();
        return;
      } else if (L.key === "Delete" || L.key === "Backspace") {
        mt(), L.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(L.key) || L.preventDefault();
    }, R = async () => {
      if (!k) {
        k = !0, o?.destroy(), o = null;
        try {
          await P("cleanup_screenshot_resources");
        } catch {
          try {
            await P("clear_screenshot_background");
          } catch (U) {
            F.error("[截图] 清理后台缓存失败", U);
          }
        }
        v.value = {
          selectionRect: null,
          annotations: [],
          currentTool: A.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3 },
          textSize: 16,
          mosaicSize: 5,
          hasSelection: !1,
          hasAnnotations: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", Tt = null, h.value = !1, a.value = !0;
        try {
          await P("close_and_destroy_screenshot_window");
        } catch (L) {
          F.error("[截图] 销毁截图窗口失败，回退到 close()", L), await s.value?.close();
        } finally {
          k = !1;
        }
      }
    }, rt = () => {
      const L = o?.getState();
      L && (v.value = L);
    }, _t = () => {
      const L = i.value?.getToolbarSize?.();
      L && (p.value = L);
    }, bt = (L) => {
      const U = L.detail;
      U && (p.value = U);
    };
    return tn(async () => {
      if (t.value) {
        s.value = new bn("screenshot"), await s.value.emit("screenshot_ready"), o = new Jr(
          t.value,
          rt,
          Lt,
          ee
        );
        try {
          const L = await P("get_translation_engine");
          L && ["google", "bing", "offline"].includes(L) && (f.value = L, o?.setTranslationEngine(L));
        } catch (L) {
          F.error("[截图] 获取翻译引擎设置失败", L);
        }
        try {
          const L = await P("get_offline_model_activated");
          o?.setOfflineModelActivated(L);
        } catch (L) {
          F.error("[截图] 获取离线模型激活状态失败", L);
        }
        document.addEventListener("keydown", Jt), window.addEventListener("resize", _t), window.addEventListener("screenshot-toolbar-resize", bt), b.value = await un("background-ready", () => {
          o?.triggerBackgroundReload();
        }), g.value = await un("screenshot-close-requested", () => {
          R();
        }), w.value = await un("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const L = o?.getTranslationState();
          L?.isLoading || L?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const U = o?.getTranslationState();
              if (U?.isLoading || U?.isVisible)
                return;
              R();
            }
          }, 100);
        }), fn(_t);
      }
    }), Ri(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", Jt), window.removeEventListener("resize", _t), window.removeEventListener("screenshot-toolbar-resize", bt), w.value?.(), b.value?.(), g.value?.(), w.value = void 0, b.value = void 0, g.value = void 0, s.value = null;
    }), (L, U) => (j(), q(
      "div",
      Du,
      [
        nt(" 遮罩层 "),
        v.value.selectionRect ? (j(), q("div", Nu, [
          O(
            "div",
            {
              class: "mask-top",
              style: Dt(y.value)
            },
            null,
            4
            /* STYLE */
          ),
          O(
            "div",
            {
              class: "mask-bottom",
              style: Dt(S.value)
            },
            null,
            4
            /* STYLE */
          ),
          O(
            "div",
            {
              class: "mask-left",
              style: Dt(E.value)
            },
            null,
            4
            /* STYLE */
          ),
          O(
            "div",
            {
              class: "mask-right",
              style: Dt(I.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (j(), q("div", Wu)),
        nt(" 画布 "),
        O(
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
        v.value.selectionRect && a.value ? (j(), q(
          "div",
          {
            key: 2,
            class: "size-info",
            style: Dt(B.value)
          },
          [
            O(
              "span",
              $u,
              wt(Y.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : nt("v-if", !0),
        nt(" 工具栏 "),
        v.value.selectionRect && !x.value ? (j(), $t(zu, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: Dt(T.value),
          class: "toolbar",
          "current-tool": v.value.currentTool,
          "current-color": v.value.currentStyle.color,
          "current-line-width": v.value.currentStyle.lineWidth,
          "current-text-size": v.value.textSize,
          "current-mosaic-size": v.value.mosaicSize,
          "can-undo": v.value.hasAnnotations,
          "can-delete": !!v.value.selectedAnnotation,
          "current-translate-engine": f.value,
          onToolSelect: ot,
          onColorChange: gt,
          onLineWidthChange: ct,
          onTextSizeChange: Q,
          onMosaicSizeChange: at,
          onTranslateEngineChange: kt,
          onUndo: ht,
          onDelete: mt,
          onSave: tt,
          onConfirm: zt,
          onCancel: jt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-text-size", "current-mosaic-size", "can-undo", "can-delete", "current-translate-engine"])) : nt("v-if", !0),
        nt(" 加载提示 - 仅在初始化时显示 "),
        h.value ? (j(), q("div", Fu, [
          U[1] || (U[1] = O(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          O(
            "p",
            null,
            wt(L.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : nt("v-if", !0),
        nt(" 文字输入框 "),
        r.value ? (j(), q(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: Dt(K.value)
          },
          [
            gn(O(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": U[0] || (U[0] = (xt) => l.value = xt),
                type: "text",
                class: "text-input",
                style: Dt({
                  color: v.value.currentStyle.color,
                  fontSize: v.value.textSize + "px",
                  borderColor: v.value.currentStyle.color
                }),
                onKeydown: [
                  ts(Rt, ["enter"]),
                  ts(Xt, ["escape"])
                ],
                onBlur: Rt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [Sa, l.value]
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
}), Hu = /* @__PURE__ */ qn(Bu, [["__scopeId", "data-v-77c8952b"]]), ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hu
}, Symbol.toStringTag, { value: "Module" })), Uo = Symbol(), Nn = "el", Uu = "is-", Re = (e, t, n, i, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Vo = Symbol("namespaceContextKey"), Vu = (e) => {
  const t = e || (Ge() ? Se(Vo, J(Nn)) : J(Nn));
  return V(() => z(t) || Nn);
}, Hi = (e, t) => {
  const n = Vu(t);
  return {
    namespace: n,
    b: (w = "") => Re(n.value, e, w, "", ""),
    e: (w) => w ? Re(n.value, e, "", w, "") : "",
    m: (w) => w ? Re(n.value, e, "", "", w) : "",
    be: (w, b) => w && b ? Re(n.value, e, w, b, "") : "",
    em: (w, b) => w && b ? Re(n.value, e, "", w, b) : "",
    bm: (w, b) => w && b ? Re(n.value, e, w, "", b) : "",
    bem: (w, b, g) => w && b && g ? Re(n.value, e, w, b, g) : "",
    is: (w, ...b) => {
      const g = b.length >= 1 ? b[0] : !0;
      return w && g ? `${Uu}${w}` : "";
    },
    cssVar: (w) => {
      const b = {};
      for (const g in w)
        w[g] && (b[`--${n.value}-${g}`] = w[g]);
      return b;
    },
    cssVarName: (w) => `--${n.value}-${w}`,
    cssVarBlock: (w) => {
      const b = {};
      for (const g in w)
        w[g] && (b[`--${n.value}-${e}-${g}`] = w[g]);
      return b;
    },
    cssVarBlockName: (w) => `--${n.value}-${e}-${w}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Yu = Object.prototype.hasOwnProperty, Bs = (e, t) => Yu.call(e, t), vn = (e) => typeof e == "function", De = (e) => typeof e == "string", Yo = (e) => e !== null && typeof e == "object";
var Gu = typeof global == "object" && global && global.Object === Object && global, Xu = typeof self == "object" && self && self.Object === Object && self, ji = Gu || Xu || Function("return this")(), qe = ji.Symbol, Go = Object.prototype, Ku = Go.hasOwnProperty, Zu = Go.toString, rn = qe ? qe.toStringTag : void 0;
function qu(e) {
  var t = Ku.call(e, rn), n = e[rn];
  try {
    e[rn] = void 0;
    var i = !0;
  } catch {
  }
  var s = Zu.call(e);
  return i && (t ? e[rn] = n : delete e[rn]), s;
}
var Ju = Object.prototype, Qu = Ju.toString;
function th(e) {
  return Qu.call(e);
}
var eh = "[object Null]", nh = "[object Undefined]", Hs = qe ? qe.toStringTag : void 0;
function Xo(e) {
  return e == null ? e === void 0 ? nh : eh : Hs && Hs in Object(e) ? qu(e) : th(e);
}
function ih(e) {
  return e != null && typeof e == "object";
}
var sh = "[object Symbol]";
function Ui(e) {
  return typeof e == "symbol" || ih(e) && Xo(e) == sh;
}
function oh(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i; )
    s[n] = t(e[n], n, e);
  return s;
}
var Vi = Array.isArray, js = qe ? qe.prototype : void 0, Us = js ? js.toString : void 0;
function Ko(e) {
  if (typeof e == "string")
    return e;
  if (Vi(e))
    return oh(e, Ko) + "";
  if (Ui(e))
    return Us ? Us.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Zo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ah = "[object AsyncFunction]", rh = "[object Function]", lh = "[object GeneratorFunction]", ch = "[object Proxy]";
function uh(e) {
  if (!Zo(e))
    return !1;
  var t = Xo(e);
  return t == rh || t == lh || t == ah || t == ch;
}
var ui = ji["__core-js_shared__"], Vs = function() {
  var e = /[^.]+$/.exec(ui && ui.keys && ui.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hh(e) {
  return !!Vs && Vs in e;
}
var dh = Function.prototype, fh = dh.toString;
function gh(e) {
  if (e != null) {
    try {
      return fh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var mh = /[\\^$.*+?()[\]{}|]/g, ph = /^\[object .+?Constructor\]$/, wh = Function.prototype, yh = Object.prototype, vh = wh.toString, kh = yh.hasOwnProperty, bh = RegExp(
  "^" + vh.call(kh).replace(mh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xh(e) {
  if (!Zo(e) || hh(e))
    return !1;
  var t = uh(e) ? bh : ph;
  return t.test(gh(e));
}
function _h(e, t) {
  return e?.[t];
}
function qo(e, t) {
  var n = _h(e, t);
  return xh(n) ? n : void 0;
}
function Sh(e, t) {
  return e === t || e !== e && t !== t;
}
var Ch = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Th = /^\w*$/;
function Lh(e, t) {
  if (Vi(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ui(e) ? !0 : Th.test(e) || !Ch.test(e) || t != null && e in Object(t);
}
var kn = qo(Object, "create");
function Mh() {
  this.__data__ = kn ? kn(null) : {}, this.size = 0;
}
function Ph(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Rh = "__lodash_hash_undefined__", Eh = Object.prototype, Ah = Eh.hasOwnProperty;
function Ih(e) {
  var t = this.__data__;
  if (kn) {
    var n = t[e];
    return n === Rh ? void 0 : n;
  }
  return Ah.call(t, e) ? t[e] : void 0;
}
var Oh = Object.prototype, zh = Oh.hasOwnProperty;
function Dh(e) {
  var t = this.__data__;
  return kn ? t[e] !== void 0 : zh.call(t, e);
}
var Nh = "__lodash_hash_undefined__";
function Wh(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = kn && t === void 0 ? Nh : t, this;
}
function Ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ne.prototype.clear = Mh;
Ne.prototype.delete = Ph;
Ne.prototype.get = Ih;
Ne.prototype.has = Dh;
Ne.prototype.set = Wh;
function $h() {
  this.__data__ = [], this.size = 0;
}
function Jn(e, t) {
  for (var n = e.length; n--; )
    if (Sh(e[n][0], t))
      return n;
  return -1;
}
var Fh = Array.prototype, Bh = Fh.splice;
function Hh(e) {
  var t = this.__data__, n = Jn(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : Bh.call(t, n, 1), --this.size, !0;
}
function jh(e) {
  var t = this.__data__, n = Jn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Uh(e) {
  return Jn(this.__data__, e) > -1;
}
function Vh(e, t) {
  var n = this.__data__, i = Jn(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function en(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
en.prototype.clear = $h;
en.prototype.delete = Hh;
en.prototype.get = jh;
en.prototype.has = Uh;
en.prototype.set = Vh;
var Yh = qo(ji, "Map");
function Gh() {
  this.size = 0, this.__data__ = {
    hash: new Ne(),
    map: new (Yh || en)(),
    string: new Ne()
  };
}
function Xh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Qn(e, t) {
  var n = e.__data__;
  return Xh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Kh(e) {
  var t = Qn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Zh(e) {
  return Qn(this, e).get(e);
}
function qh(e) {
  return Qn(this, e).has(e);
}
function Jh(e, t) {
  var n = Qn(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Fe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Fe.prototype.clear = Gh;
Fe.prototype.delete = Kh;
Fe.prototype.get = Zh;
Fe.prototype.has = qh;
Fe.prototype.set = Jh;
var Qh = "Expected a function";
function Yi(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Qh);
  var n = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var a = e.apply(this, i);
    return n.cache = o.set(s, a) || o, a;
  };
  return n.cache = new (Yi.Cache || Fe)(), n;
}
Yi.Cache = Fe;
var td = 500;
function ed(e) {
  var t = Yi(e, function(i) {
    return n.size === td && n.clear(), i;
  }), n = t.cache;
  return t;
}
var nd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, id = /\\(\\)?/g, sd = ed(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(nd, function(n, i, s, o) {
    t.push(s ? o.replace(id, "$1") : i || n);
  }), t;
});
function od(e) {
  return e == null ? "" : Ko(e);
}
function ad(e, t) {
  return Vi(e) ? e : Lh(e, t) ? [e] : sd(od(e));
}
function rd(e) {
  if (typeof e == "string" || Ui(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ld(e, t) {
  t = ad(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[rd(t[n++])];
  return n && n == i ? e : void 0;
}
function cd(e, t, n) {
  var i = e == null ? void 0 : ld(e, t);
  return i === void 0 ? n : i;
}
function ud(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var s = e[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Jo = (e) => e === void 0, Ys = (e) => typeof e == "boolean", We = (e) => typeof e == "number", Li = (e) => typeof Element > "u" ? !1 : e instanceof Element, hd = (e) => De(e) ? !Number.isNaN(Number(e)) : !1;
var Gs;
const Be = typeof window < "u", dd = (e) => typeof e == "string", fd = () => {
};
Be && ((Gs = window?.navigator) != null && Gs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Gi(e) {
  return typeof e == "function" ? e() : z(e);
}
function gd(e) {
  return e;
}
function Xi(e) {
  return Ta() ? (La(e), !0) : !1;
}
function md(e, t = !0) {
  Ge() ? tn(e) : t ? e() : fn(e);
}
function Qo(e, t, n = {}) {
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
    }, Gi(t));
  }
  return i && (s.value = !0, Be && l()), Xi(r), {
    isPending: Ca(s),
    start: l,
    stop: r
  };
}
function ta(e) {
  var t;
  const n = Gi(e);
  return (t = n?.$el) != null ? t : n;
}
const ea = Be ? window : void 0;
function na(...e) {
  let t, n, i, s;
  if (dd(e[0]) || Array.isArray(e[0]) ? ([n, i, s] = e, t = ea) : [t, n, i, s] = e, !t)
    return fd;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((h) => h()), o.length = 0;
  }, r = (h, f, p, k) => (h.addEventListener(f, p, k), () => h.removeEventListener(f, p, k)), l = Ce(() => [ta(t), Gi(s)], ([h, f]) => {
    a(), h && o.push(...n.flatMap((p) => i.map((k) => r(h, p, k, f))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return Xi(c), c;
}
function pd(e, t = !1) {
  const n = J(), i = () => n.value = !!e();
  return i(), md(i, t), n;
}
const Xs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ks = "__vueuse_ssr_handlers__";
Xs[Ks] = Xs[Ks] || {};
var Zs = Object.getOwnPropertySymbols, wd = Object.prototype.hasOwnProperty, yd = Object.prototype.propertyIsEnumerable, vd = (e, t) => {
  var n = {};
  for (var i in e)
    wd.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Zs)
    for (var i of Zs(e))
      t.indexOf(i) < 0 && yd.call(e, i) && (n[i] = e[i]);
  return n;
};
function kd(e, t, n = {}) {
  const i = n, { window: s = ea } = i, o = vd(i, ["window"]);
  let a;
  const r = pd(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Ce(() => ta(e), (f) => {
    l(), r.value && s && f && (a = new ResizeObserver(t), a.observe(f, o));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), c();
  };
  return Xi(h), {
    isSupported: r,
    stop: h
  };
}
var qs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(qs || (qs = {}));
var bd = Object.defineProperty, Js = Object.getOwnPropertySymbols, xd = Object.prototype.hasOwnProperty, _d = Object.prototype.propertyIsEnumerable, Qs = (e, t, n) => t in e ? bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sd = (e, t) => {
  for (var n in t || (t = {}))
    xd.call(t, n) && Qs(e, n, t[n]);
  if (Js)
    for (var n of Js(t))
      _d.call(t, n) && Qs(e, n, t[n]);
  return e;
};
const Cd = {
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
Sd({
  linear: gd
}, Cd);
const to = {
  current: 0
}, eo = J(0), ia = 2e3, no = Symbol("elZIndexContextKey"), sa = Symbol("zIndexContextKey"), Td = (e) => {
  const t = Ge() ? Se(no, to) : to, n = e || (Ge() ? Se(sa, void 0) : void 0), i = V(() => {
    const a = z(n);
    return We(a) ? a : ia;
  }), s = V(() => i.value + eo.value), o = () => (t.current++, eo.value = t.current, s.value);
  return !Be && Se(no), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Ld = {
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
const Md = (e) => (t, n) => Pd(t, n, z(e)), Pd = (e, t, n) => cd(n, e, e).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), Rd = (e) => {
  const t = V(() => z(e).name), n = Ma(e) ? e : J(e);
  return {
    lang: t,
    locale: n,
    t: Md(e)
  };
}, oa = Symbol("localeContextKey"), Ed = (e) => {
  const t = e || Se(oa, J());
  return Rd(V(() => t.value || Ld));
}, aa = "__epPropKey", qt = (e) => e, Ad = (e) => Yo(e) && !!e[aa], ra = (e, t) => {
  if (!Yo(e) || Ad(e))
    return e;
  const { values: n, required: i, default: s, type: o, validator: a } = e, l = {
    type: o,
    required: !!i,
    validator: n || a ? (c) => {
      let h = !1, f = [];
      if (n && (f = Array.from(n), Bs(e, "default") && f.push(s), h || (h = f.includes(c))), a && (h || (h = a(c))), !h && f.length > 0) {
        const p = [...new Set(f)].map((k) => JSON.stringify(k)).join(", ");
        Pa(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`);
      }
      return h;
    } : void 0,
    [aa]: !0
  };
  return Bs(e, "default") && (l.default = s), l;
}, nn = (e) => ud(Object.entries(e).map(([t, n]) => [
  t,
  ra(n, t)
])), Id = ["", "default", "small", "large"], Od = ra({
  type: String,
  values: Id,
  required: !1
}), zd = Symbol("size"), Dd = Symbol("emptyValuesContextKey"), Nd = nn({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => vn(e) ? !e() : !e
  }
}), io = (e) => Object.keys(e), Un = J();
function la(e, t = void 0) {
  return Ge() ? Se(Uo, Un) : Un;
}
function ca(e, t) {
  const n = la(), i = Hi(e, V(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || Nn;
  })), s = Ed(V(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), o = Td(V(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || ia;
  })), a = V(() => {
    var r;
    return z(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return ua(V(() => z(n) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const ua = (e, t, n = !1) => {
  var i;
  const s = !!Ge(), o = s ? la() : void 0, a = (i = void 0) != null ? i : s ? Ra : void 0;
  if (!a)
    return;
  const r = V(() => {
    const l = z(e);
    return o?.value ? Wd(o.value, l) : l;
  });
  return a(Uo, r), a(oa, V(() => r.value.locale)), a(Vo, V(() => r.value.namespace)), a(sa, V(() => r.value.zIndex)), a(zd, {
    size: V(() => r.value.size || "")
  }), a(Dd, V(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !Un.value) && (Un.value = r.value), r;
}, Wd = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...io(e), ...io(t)])], i = {};
  for (const s of n)
    i[s] = t[s] !== void 0 ? t[s] : e[s];
  return i;
};
var ti = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
function Mi(e, t = "px") {
  if (!e)
    return "";
  if (We(e) || hd(e))
    return `${e}${t}`;
  if (De(e))
    return e;
}
const ha = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), da = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), $d = nn({
  size: {
    type: qt([Number, String])
  },
  color: {
    type: String
  }
}), Fd = Ot({
  name: "ElIcon",
  inheritAttrs: !1
}), Bd = /* @__PURE__ */ Ot({
  ...Fd,
  props: $d,
  setup(e) {
    const t = e, n = Hi("icon"), i = V(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Jo(s) ? void 0 : Mi(s),
        "--color": o
      };
    });
    return (s, o) => (j(), q("i", Ea({
      class: z(n).b(),
      style: z(i)
    }, s.$attrs), [
      ze(s.$slots, "default")
    ], 16));
  }
});
var Hd = /* @__PURE__ */ ti(Bd, [["__file", "icon.vue"]]);
const Vn = ha(Hd);
/*! Element Plus Icons Vue v2.3.1 */
var jd = /* @__PURE__ */ Ot({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ud = jd, Vd = /* @__PURE__ */ Ot({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), fa = Vd, Yd = /* @__PURE__ */ Ot({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Gd = Yd, Xd = /* @__PURE__ */ Ot({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Kd = Xd, Zd = /* @__PURE__ */ Ot({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      O("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), qd = Zd;
const ga = qt([
  String,
  Object,
  Function
]), Jd = {
  Close: fa
}, Qd = {
  Close: fa
}, Yn = {
  success: Kd,
  warning: qd,
  error: Ud,
  info: Gd
}, tf = (e) => e, Wn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ef = nn({
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
    type: qt([String, Object, Array])
  },
  offset: {
    type: qt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), nf = Ot({
  name: "ElBadge"
}), sf = /* @__PURE__ */ Ot({
  ...nf,
  props: ef,
  setup(e, { expose: t }) {
    const n = e, i = Hi("badge"), s = V(() => n.isDot ? "" : We(n.value) && We(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), o = V(() => {
      var a, r, l, c, h;
      return [
        {
          backgroundColor: n.color,
          marginRight: Mi(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Mi((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (h = n.badgeStyle) != null ? h : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (j(), q("div", {
      class: Ct(z(i).b())
    }, [
      ze(a.$slots, "default"),
      _(Ei, {
        name: `${z(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Gt(() => [
          gn(O("sup", {
            class: Ct([
              z(i).e("content"),
              z(i).em("content", a.type),
              z(i).is("fixed", !!a.$slots.default),
              z(i).is("dot", a.isDot),
              z(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Dt(z(o))
          }, [
            ze(a.$slots, "content", { value: z(s) }, () => [
              Aa(wt(z(s)), 1)
            ])
          ], 6), [
            [$n, !a.hidden && (z(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var of = /* @__PURE__ */ ti(sf, [["__file", "badge.vue"]]);
const af = ha(of), rf = nn({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: qt(Object)
  },
  size: Od,
  button: {
    type: qt(Object)
  },
  experimentalFeatures: {
    type: qt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: qt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Nd
}), se = {};
Ot({
  name: "ElConfigProvider",
  props: rf,
  setup(e, { slots: t }) {
    Ce(() => e.message, (i) => {
      Object.assign(se, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ua(e);
    return () => ze(t, "default", { config: n?.value });
  }
});
const ma = ["success", "info", "warning", "error"], Vt = tf({
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
  appendTo: Be ? document.body : void 0
}), lf = nn({
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
    type: ga,
    default: Vt.icon
  },
  id: {
    type: String,
    default: Vt.id
  },
  message: {
    type: qt([
      String,
      Object,
      Function
    ]),
    default: Vt.message
  },
  onClose: {
    type: qt(Function),
    default: Vt.onClose
  },
  showClose: {
    type: Boolean,
    default: Vt.showClose
  },
  type: {
    type: String,
    values: ma,
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
}), cf = {
  destroy: () => !0
}, ae = Ia([]), uf = (e) => {
  const t = ae.findIndex((s) => s.id === e), n = ae[t];
  let i;
  return t > 0 && (i = ae[t - 1]), { current: n, prev: i };
}, hf = (e) => {
  const { prev: t } = uf(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, df = (e, t) => ae.findIndex((i) => i.id === e) > 0 ? 16 : t, ff = Ot({
  name: "ElMessage"
}), gf = /* @__PURE__ */ Ot({
  ...ff,
  props: lf,
  emits: cf,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = Qd, { ns: s, zIndex: o } = ca("message"), { currentZIndex: a, nextZIndex: r } = o, l = J(), c = J(!1), h = J(0);
    let f;
    const p = V(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), k = V(() => {
      const T = n.type;
      return { [s.bm("icon", T)]: T && Yn[T] };
    }), v = V(() => n.icon || Yn[n.type] || ""), w = V(() => hf(n.id)), b = V(() => df(n.id, n.offset) + w.value), g = V(() => h.value + b.value), x = V(() => ({
      top: `${b.value}px`,
      zIndex: a.value
    }));
    function y() {
      n.duration !== 0 && ({ stop: f } = Qo(() => {
        E();
      }, n.duration));
    }
    function S() {
      f?.();
    }
    function E() {
      c.value = !1;
    }
    function I({ code: T }) {
      T === Wn.esc && E();
    }
    return tn(() => {
      y(), r(), c.value = !0;
    }), Ce(() => n.repeatNum, () => {
      S(), y();
    }), na(document, "keydown", I), kd(l, () => {
      h.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: g,
      close: E
    }), (T, B) => (j(), $t(Ei, {
      name: z(s).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (Y) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: Gt(() => [
        gn(O("div", {
          id: T.id,
          ref_key: "messageRef",
          ref: l,
          class: Ct([
            z(s).b(),
            { [z(s).m(T.type)]: T.type },
            z(s).is("center", T.center),
            z(s).is("closable", T.showClose),
            z(s).is("plain", T.plain),
            T.customClass
          ]),
          style: Dt(z(x)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: y
        }, [
          T.repeatNum > 1 ? (j(), $t(z(af), {
            key: 0,
            value: T.repeatNum,
            type: z(p),
            class: Ct(z(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : nt("v-if", !0),
          z(v) ? (j(), $t(z(Vn), {
            key: 1,
            class: Ct([z(s).e("icon"), z(k)])
          }, {
            default: Gt(() => [
              (j(), $t(_e(z(v))))
            ]),
            _: 1
          }, 8, ["class"])) : nt("v-if", !0),
          ze(T.$slots, "default", {}, () => [
            T.dangerouslyUseHTMLString ? (j(), q(Kt, { key: 1 }, [
              nt(" Caution here, message could've been compromised, never use user's input as message "),
              O("p", {
                class: Ct(z(s).e("content")),
                innerHTML: T.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (j(), q("p", {
              key: 0,
              class: Ct(z(s).e("content"))
            }, wt(T.message), 3))
          ]),
          T.showClose ? (j(), $t(z(Vn), {
            key: 2,
            class: Ct(z(s).e("closeBtn")),
            onClick: Wt(E, ["stop"])
          }, {
            default: Gt(() => [
              _(z(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : nt("v-if", !0)
        ], 46, ["id"]), [
          [$n, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var mf = /* @__PURE__ */ ti(gf, [["__file", "message.vue"]]);
let pf = 1;
const pa = (e) => {
  const t = !e || De(e) || mn(e) || vn(e) ? { message: e } : e, n = {
    ...Vt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (De(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    Li(i) || (i = document.body), n.appendTo = i;
  }
  return Ys(se.grouping) && !n.grouping && (n.grouping = se.grouping), We(se.duration) && n.duration === 3e3 && (n.duration = se.duration), We(se.offset) && n.offset === 16 && (n.offset = se.offset), Ys(se.showClose) && !n.showClose && (n.showClose = se.showClose), n;
}, wf = (e) => {
  const t = ae.indexOf(e);
  if (t === -1)
    return;
  ae.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, yf = ({ appendTo: e, ...t }, n) => {
  const i = `message_${pf++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), wf(h);
    },
    onDestroy: () => {
      Fn(null, o);
    }
  }, r = _(mf, a, vn(a.message) || mn(a.message) ? {
    default: vn(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || Je._context, Fn(r, o), e.appendChild(o.firstElementChild);
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
}, Je = (e = {}, t) => {
  if (!Be)
    return { close: () => {
    } };
  const n = pa(e);
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
  const i = yf(n, t);
  return ae.push(i), i.handler;
};
ma.forEach((e) => {
  Je[e] = (t = {}, n) => {
    const i = pa(t);
    return Je({ ...i, type: e }, n);
  };
});
function vf(e) {
  for (const t of ae)
    (!e || e === t.props.type) && t.handler.close();
}
Je.closeAll = vf;
Je._context = null;
const kf = da(Je, "$message"), wa = [
  "success",
  "info",
  "warning",
  "error"
], bf = nn({
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
    type: ga
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: qt([
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
    type: qt(Function),
    default: () => {
    }
  },
  onClose: {
    type: qt(Function),
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
    values: [...wa, ""],
    default: ""
  },
  zIndex: Number
}), xf = {
  destroy: () => !0
}, _f = Ot({
  name: "ElNotification"
}), Sf = /* @__PURE__ */ Ot({
  ..._f,
  props: bf,
  emits: xf,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: s } = ca("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = Jd, l = J(!1);
    let c;
    const h = V(() => {
      const y = n.type;
      return y && Yn[n.type] ? i.m(y) : "";
    }), f = V(() => n.type && Yn[n.type] || n.icon), p = V(() => n.position.endsWith("right") ? "right" : "left"), k = V(() => n.position.startsWith("top") ? "top" : "bottom"), v = V(() => {
      var y;
      return {
        [k.value]: `${n.offset}px`,
        zIndex: (y = n.zIndex) != null ? y : a.value
      };
    });
    function w() {
      n.duration > 0 && ({ stop: c } = Qo(() => {
        l.value && g();
      }, n.duration));
    }
    function b() {
      c?.();
    }
    function g() {
      l.value = !1;
    }
    function x({ code: y }) {
      y === Wn.delete || y === Wn.backspace ? b() : y === Wn.esc ? l.value && g() : w();
    }
    return tn(() => {
      w(), o(), l.value = !0;
    }), na(document, "keydown", x), t({
      visible: l,
      close: g
    }), (y, S) => (j(), $t(Ei, {
      name: z(i).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (E) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: Gt(() => [
        gn(O("div", {
          id: y.id,
          class: Ct([z(i).b(), y.customClass, z(p)]),
          style: Dt(z(v)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: w,
          onClick: y.onClick
        }, [
          z(f) ? (j(), $t(z(Vn), {
            key: 0,
            class: Ct([z(i).e("icon"), z(h)])
          }, {
            default: Gt(() => [
              (j(), $t(_e(z(f))))
            ]),
            _: 1
          }, 8, ["class"])) : nt("v-if", !0),
          O("div", {
            class: Ct(z(i).e("group"))
          }, [
            O("h2", {
              class: Ct(z(i).e("title")),
              textContent: wt(y.title)
            }, null, 10, ["textContent"]),
            gn(O("div", {
              class: Ct(z(i).e("content")),
              style: Dt(y.title ? void 0 : { margin: 0 })
            }, [
              ze(y.$slots, "default", {}, () => [
                y.dangerouslyUseHTMLString ? (j(), q(Kt, { key: 1 }, [
                  nt(" Caution here, message could've been compromised, never use user's input as message "),
                  O("p", { innerHTML: y.message }, null, 8, ["innerHTML"])
                ], 2112)) : (j(), q("p", { key: 0 }, wt(y.message), 1))
              ])
            ], 6), [
              [$n, y.message]
            ]),
            y.showClose ? (j(), $t(z(Vn), {
              key: 0,
              class: Ct(z(i).e("closeBtn")),
              onClick: Wt(g, ["stop"])
            }, {
              default: Gt(() => [
                _(z(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : nt("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [$n, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Cf = /* @__PURE__ */ ti(Sf, [["__file", "notification.vue"]]);
const Gn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Pi = 16;
let Tf = 1;
const Qe = function(e = {}, t) {
  if (!Be)
    return { close: () => {
    } };
  (De(e) || mn(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  Gn[n].forEach(({ vm: h }) => {
    var f;
    i += (((f = h.el) == null ? void 0 : f.offsetHeight) || 0) + Pi;
  }), i += Pi;
  const s = `notification_${Tf++}`, o = e.onClose, a = {
    ...e,
    offset: i,
    id: s,
    onClose: () => {
      Lf(s, n, o);
    }
  };
  let r = document.body;
  Li(e.appendTo) ? r = e.appendTo : De(e.appendTo) && (r = document.querySelector(e.appendTo)), Li(r) || (r = document.body);
  const l = document.createElement("div"), c = _(Cf, a, vn(a.message) ? a.message : mn(a.message) ? () => a.message : null);
  return c.appContext = Jo(t) ? Qe._context : t, c.props.onDestroy = () => {
    Fn(null, l);
  }, Fn(c, l), Gn[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
wa.forEach((e) => {
  Qe[e] = (t = {}, n) => ((De(t) || mn(t)) && (t = {
    message: t
  }), Qe({ ...t, type: e }, n));
});
function Lf(e, t, n) {
  const i = Gn[t], s = i.findIndex(({ vm: c }) => {
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
      const { el: h, component: f } = i[c].vm, p = Number.parseInt(h.style[r], 10) - a - Pi;
      f.props.offset = p;
    }
}
function Mf() {
  for (const e of Object.values(Gn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Qe.closeAll = Mf;
Qe._context = null;
const Pf = da(Qe, "$notify"), Qt = {
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
    i === "center" ? kf({
      message: t,
      type: n,
      duration: s,
      showClose: o,
      grouping: !0
    }) : Pf({
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
}, Rf = ["disabled"], Ef = {
  key: 0,
  class: "custom-button__loading"
}, Af = /* @__PURE__ */ Ot({
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
    return (n, i) => (j(), q("button", {
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
      e.loading ? (j(), q("div", Ef, i[1] || (i[1] = [
        O(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            O("circle", {
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
    ], 10, Rf));
  }
}), be = /* @__PURE__ */ qn(Af, [["__scopeId", "data-v-9497085f"]]), If = ["src"], Of = { class: "ocr-header" }, zf = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, Df = { "data-tauri-drag-region": "" }, Nf = { class: "ocr-window-controls" }, Wf = ["title"], $f = ["title"], Ff = ["title"], Bf = ["title"], Hf = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, jf = ["src"], Uf = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, Vf = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Yf = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, Gf = { "data-tauri-drag-region": "" }, Xf = { "data-tauri-drag-region": "" }, Kf = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, Zf = ["title"], qf = { class: "ocr-reading-surface" }, Jf = {
  key: 0,
  class: "ocr-original-image"
}, Qf = ["src"], tg = {
  key: 0,
  class: "ocr-state"
}, eg = {
  key: 1,
  class: "ocr-state error"
}, ng = {
  key: 2,
  class: "ocr-state muted"
}, ig = {
  key: 3,
  class: "ocr-text-content"
}, sg = { class: "ocr-action-bar" }, og = { class: "translate-btn-group relative" }, ag = {
  key: 0,
  class: "translate-menu"
}, rg = ["onClick"], lg = { class: "engine-label" }, cg = { class: "ocr-engine-btn-group relative" }, ug = {
  key: 0,
  class: "ocr-engine-menu"
}, hg = ["onClick"], dg = { class: "engine-label" }, fg = { class: "ocr-engine-btn-group relative" }, gg = {
  key: 2,
  class: "zoom-info"
}, mg = /* @__PURE__ */ Ot({
  __name: "index",
  setup(e) {
    const { t } = _n(), n = J(), i = J(null), s = J(""), o = J(""), a = J("pin"), r = J(""), l = J(!1), c = J(""), h = J(""), f = J(0), p = J(0), k = J({ width: 0, height: 0 }), v = J(!1), w = J(!1), b = J(!1), g = J("bing"), x = J(!1), y = J("auto"), S = V(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: "离"
      }
    ]), E = V(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), I = (m) => {
      const N = typeof m == "string" ? m.trim().toLowerCase() : "";
      return N === "auto" || N === "zh" || N === "zh-tw" || N === "en" || N === "ja" || N === "ko" ? N : "auto";
    }, T = V(() => E.value.find((m) => m.value === y.value)?.label || t("pin.ocrLanguageAuto")), B = J(1), Y = J(!1), K = J(!1);
    let ot = null;
    const it = J(!1), lt = J({ x: 0, y: 0 }), gt = J(!0), ct = J({ width: 0, height: 0 });
    let Q = null, at = 0;
    const kt = J(""), ht = V(() => ({
      width: "100%",
      height: a.value === "ocr" ? "auto" : "100%",
      flex: a.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: a.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), X = V(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), mt = V(() => f.value > 0 && p.value > 0 ? `${f.value} × ${p.value}` : t("pin.screenshotPreview")), tt = V(() => l.value ? t("pin.recognizing") : c.value ? t("pin.recognizeFailed") : r.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), zt = V(() => r.value.split(/\n{2,}/).map((m) => m.trim()).filter(Boolean)), jt = () => {
      const m = /* @__PURE__ */ new Date(), N = (et) => et.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${m.getFullYear()}-${N(m.getMonth() + 1)}-${N(m.getDate())} ${N(m.getHours())}.${N(m.getMinutes())}.${N(m.getSeconds())}.png`;
    }, Tt = V(() => {
      const m = Math.min(
        ct.value.width,
        ct.value.height
      );
      let N = 1;
      return m < 300 && (N = Math.max(0.4, m / 300)), {
        left: `${lt.value.x}px`,
        top: `${lt.value.y}px`,
        transform: `scale(${N})`,
        transformOrigin: "top left"
      };
    }), Lt = (m) => {
      s.value = m, f.value = 0, p.value = 0, k.value = { width: 0, height: 0 }, a.value === "ocr" && (h.value = jt()), o.value && (URL.revokeObjectURL(o.value), o.value = "");
      try {
        const N = m.split(",")[1] || m, et = m.match(/data:([^;]+);/), Pt = et ? et[1] : "image/png", Ut = atob(N), fe = new Uint8Array(Ut.length);
        for (let ie = 0; ie < Ut.length; ie++)
          fe[ie] = Ut.charCodeAt(ie);
        const ne = new Blob([fe], { type: Pt });
        o.value = URL.createObjectURL(ne);
      } catch (N) {
        F.error("[PIN窗口] 转换 Blob URL 失败", N), o.value = m;
      }
    }, Rt = async () => {
      await fn(), await new Promise((m) => requestAnimationFrame(() => m()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (m) {
        F.error("[PIN窗口] 发送 ready 事件失败", m);
      }
    }, Xt = (m) => {
      if (!m?.imageData)
        return F.error("[PIN窗口] 收到的事件数据格式不正确", m), !1;
      const N = m.mode === "ocr" ? "ocr" : "pin", et = `${N}:${m.imageData.length}`;
      return et === kt.value ? !1 : (kt.value = et, a.value = N, Lt(m.imageData), Et(), a.value === "ocr" ? (r.value = m.text || "", c.value = "", m.text || ee()) : (at++, l.value = !1, c.value = "", r.value = ""), !0);
    }, ee = async () => {
      if (!s.value) return;
      const m = ++at;
      l.value = !0, c.value = "";
      const N = Date.now();
      Nt.log("[Pin OCR] recognize start", {
        requestId: m,
        imageDataLength: s.value.length,
        imageWidth: f.value,
        imageHeight: p.value,
        language: y.value
      });
      try {
        Nt.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: m,
          language: y.value
        });
        const et = await P("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: y.value
        }), Pt = Jt(et);
        if (Nt.log("[Pin OCR] backend OCR success", {
          requestId: m,
          resultEngine: et?.engine,
          resultLanguage: et?.language,
          confidence: et?.confidence,
          blocks: Array.isArray(et?.blocks) ? et.blocks.length : 0,
          textLength: Pt.trim().length
        }), m !== at) return;
        r.value = Pt.trim(), Nt.log("[Pin OCR] recognize success", {
          requestId: m,
          durationMs: Date.now() - N,
          textLength: r.value.length,
          textPreview: r.value.slice(0, 300)
        });
      } catch (et) {
        if (m !== at) return;
        F.error("[PIN窗口] OCR 识别失败", et), Nt.log("[Pin OCR] recognize failed", {
          requestId: m,
          durationMs: Date.now() - N,
          error: R(et)
        }), c.value = t("pin.recognizeFailed"), r.value = "", Qt.error(t("pin.recognizeFailed"));
      } finally {
        m === at && (l.value = !1);
      }
    }, Jt = (m) => typeof m == "string" ? m : m?.text ? m.text : m?.full_text ? m.full_text : Array.isArray(m?.blocks) ? m.blocks.map((N) => N?.text).filter(Boolean).join(`
`) : "", R = (m) => m instanceof Error ? `${m.name}: ${m.message}
${m.stack || ""}`.trim() : typeof m == "string" ? m : JSON.stringify(m) || String(m), rt = async () => {
      const m = r.value.trim();
      if (m)
        try {
          await navigator.clipboard.writeText(m), Qt.success(t("pin.copySuccess"));
        } catch (N) {
          F.error("[PIN窗口] 复制识别文本失败", N), Qt.error(t("pin.copyFailed"));
        } finally {
          Et();
        }
    }, _t = async () => {
      const m = r.value.trim();
      if (m)
        try {
          await P("save_text_to_file", { text: m }), Qt.success(t("pin.saveSuccess"));
        } catch (N) {
          N !== "SAVE_CANCELLED" && (F.error("[PIN窗口] 保存文本失败", N), Qt.error(t("pin.saveFailed")));
        }
    }, bt = () => {
      b.value = !b.value, x.value = !1;
    }, L = (m) => {
      g.value = m, b.value = !1, P("set_translation_engine", { engine: m }).catch((N) => {
        F.error("[PIN窗口] 保存翻译引擎设置失败", N);
      });
    }, U = () => {
      x.value = !x.value, b.value = !1;
    }, xt = (m) => {
      y.value = m, x.value = !1, P("set_ocr_language", { language: m }).catch((N) => {
        F.error("[PIN窗口] 保存 OCR 语言设置失败", N);
      }), s.value && ee();
    }, u = async () => {
      if (Et(), b.value = !1, x.value = !1, !r.value.trim() || w.value) return;
      const m = Ee(r.value);
      if (!Ve(m)) {
        Qt.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      w.value = !0;
      try {
        let N = "";
        if (g.value === "offline") {
          if ((await Ii()).isCached)
            await uo();
          else
            throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          if (!await P(
            "get_offline_model_activated"
          ))
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          N = await co(r.value);
        } else
          N = await P("translate_text", {
            text: r.value,
            from: "auto",
            to: "zh",
            engine: g.value
          });
        N && (r.value = N, Qt.success(t("pin.translateSuccess")));
      } catch (N) {
        F.error("[PIN窗口] 翻译失败", N);
        const et = N instanceof Error ? N.message : String(N);
        et !== "翻译已取消" && Qt.error(et || t("pin.translateFailed"));
      } finally {
        w.value = !1;
      }
    }, d = () => {
      v.value = !v.value;
    }, M = (m) => {
      pt(m);
    }, $ = async () => {
      if (!i.value) return;
      const m = i.value;
      typeof m.minimize == "function" && await m.minimize();
    }, st = async () => {
      if (!i.value) return;
      const m = i.value;
      (typeof m.isMaximized == "function" ? await m.isMaximized() : !1) && typeof m.unmaximize == "function" ? await m.unmaximize() : typeof m.maximize == "function" && await m.maximize();
    }, Z = async (m) => {
      const N = m.target;
      if (f.value = N.naturalWidth, p.value = N.naturalHeight, i.value && k.value.width === 0)
        try {
          const et = await i.value.innerSize(), Pt = await i.value.scaleFactor(), Ut = et.toLogical(Pt);
          k.value = {
            width: Ut.width,
            height: Ut.height
          };
        } catch (et) {
          F.error("[PIN窗口] 获取窗口初始尺寸失败", et);
        }
    }, C = async (m) => {
      if (m.ctrlKey && (m.preventDefault(), m.stopPropagation(), !K.value && i.value)) {
        K.value = !0;
        try {
          const et = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Pt = m.deltaY > 0 ? 0.95 : 1.05, Ut = et.width, fe = et.height, ne = Math.round(Ut * Pt), ie = Math.round(fe * Pt), sn = 50, ke = 3e3;
          if (ne >= sn && ne <= ke && ie >= sn && ie <= ke) {
            if (await i.value.setSize(new ln(ne, ie)), f.value > 0) {
              const Pe = Math.round(
                ne / f.value * 100
              );
              B.value = Pe / 100;
            }
            Y.value = !0, ut();
          }
        } catch (N) {
          F.error("[PIN窗口] 窗口缩放失败", N);
        } finally {
          setTimeout(() => {
            K.value = !1;
          }, 100);
        }
      }
    }, D = (m) => {
      a.value === "ocr" && m.ctrlKey && C(m);
    }, ut = () => {
      Y.value = !0, ot && clearTimeout(ot), ot = setTimeout(() => {
        Y.value = !1;
      }, 1e3);
    }, pt = (m) => {
      m.preventDefault(), m.stopPropagation(), it.value = !1, setTimeout(() => {
        const N = window.innerWidth, et = window.innerHeight;
        ct.value = { width: N, height: et };
        const Pt = Math.min(N, et);
        let Ut = 1;
        Pt < 300 && (Ut = Math.max(0.4, Pt / 300));
        const fe = a.value === "ocr" ? 176 : 150, ne = a.value === "ocr" && r.value.trim() ? 222 : 180, ie = fe * Ut, sn = ne * Ut;
        let ke = m.clientX, Pe = m.clientY;
        ke + ie > N && (ke = N - ie - 5), Pe + sn > et && (Pe = et - sn - 5), ke = Math.max(5, ke), Pe = Math.max(5, Pe), lt.value = { x: ke, y: Pe }, it.value = !0;
      }, 10);
    }, Et = () => {
      it.value = !1, b.value = !1, x.value = !1;
    }, Me = async () => {
      i.value && (gt.value = !gt.value, await i.value.setAlwaysOnTop(gt.value), Et());
    }, de = async (m) => {
      if (i.value && !K.value) {
        K.value = !0;
        try {
          const et = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Pt = Math.round(et.width * m), Ut = Math.round(et.height * m), fe = 50, ne = 3e3;
          Pt >= fe && Pt <= ne && Ut >= fe && Ut <= ne && (await i.value.setSize(new ln(Pt, Ut)), f.value > 0 && (B.value = Pt / f.value), ut());
        } catch (N) {
          F.error("[PIN窗口] 键盘缩放失败", N);
        } finally {
          setTimeout(() => {
            K.value = !1;
          }, 100);
        }
      }
    }, Sn = async () => {
      if (i.value && k.value.width > 0 && k.value.height > 0)
        try {
          await i.value.setSize(
            new ln(
              k.value.width,
              k.value.height
            )
          ), B.value = 1, ut();
        } catch (m) {
          F.error("[PIN窗口] 重置缩放失败", m);
        }
      Et();
    }, Ki = async () => {
      try {
        const m = s.value;
        Et(), i.value && await i.value.hide(), await P("copy_image_to_clipboard", { imageData: m }), Qt.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (m) {
        F.error("[PIN窗口] 复制图片失败", m), Qt.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, ya = async () => {
      const m = s.value;
      Et(), i.value && await i.value.hide();
      try {
        await P("save_pin_image", { imageData: m }), Qt.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (N) {
        N === "SAVE_CANCELLED" ? (F.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (F.error("[PIN窗口] 保存图片失败", N), Qt.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, ei = async () => {
      i.value && await i.value.close();
    }, Zi = (m) => {
      m.preventDefault();
    }, ni = async (m) => {
      if (m.button === 0 && i.value) {
        const N = m.target;
        if (N.hasAttribute("data-tauri-drag-region") || N.closest("[data-tauri-drag-region]")) {
          if (N.closest("button") || N.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (et) {
            F.error("[PIN窗口] 拖拽窗口失败", et);
          }
        }
      }
    }, qi = (m) => {
      const N = m.target;
      !N.closest(".context-menu") && !N.closest(".ocr-engine-btn-group") && Et();
    }, Ji = (m) => {
      if (m.altKey && m.code === "Space") {
        m.preventDefault(), m.stopPropagation();
        return;
      }
      m.key === "Escape" ? it.value ? Et() : ei() : (m.ctrlKey || m.metaKey) && (m.key === "0" ? (m.preventDefault(), Sn()) : m.key === "=" || m.key === "+" ? (m.preventDefault(), de(1.05)) : m.key === "-" && (m.preventDefault(), de(0.95)));
    }, va = async () => {
      if (i.value)
        try {
          const m = await P(
            "get_pin_window_data",
            { label: i.value.label }
          );
          m && Xt(m) && await Rt();
        } catch (m) {
          F.error("[PIN窗口] 主动获取窗口数据失败", m);
        }
    };
    return tn(async () => {
      if (n.value) {
        try {
          const [m, N] = await Promise.all([
            P("get_translation_engine"),
            P("get_ocr_language")
          ]);
          (m === "google" || m === "bing" || m === "offline") && (g.value = m), y.value = I(N);
        } catch (m) {
          F.error("[PIN窗口] 读取默认 OCR/翻译设置失败", m);
        }
        try {
          i.value = bn.getCurrent();
          try {
            Q = await i.value.listen(
              "pin-window-data",
              (m) => {
                Xt(m.payload) && Rt();
              }
            ), await va();
          } catch (m) {
            F.error("[PIN窗口] 设置事件监听失败", m);
          }
        } catch (m) {
          if (F.error("[PIN窗口] 初始化错误", m), i.value)
            try {
              await i.value.show();
            } catch (N) {
              F.error("[PIN窗口] 显示窗口失败", N);
            }
        }
        document.addEventListener("click", qi), document.addEventListener("keydown", Ji, !0), document.addEventListener("contextmenu", Zi, !0), window.addEventListener("blur", Et), document.body && (document.body.oncontextmenu = (m) => (m.preventDefault(), !1));
      }
    }), Ri(() => {
      o.value && URL.revokeObjectURL(o.value), Q && Q(), document.removeEventListener("click", qi), document.removeEventListener("keydown", Ji, !0), document.removeEventListener("contextmenu", Zi, !0), window.removeEventListener("blur", Et), document.body && (document.body.oncontextmenu = null), ot && clearTimeout(ot);
    }), (m, N) => (j(), q(
      "div",
      {
        class: Ct(["pin-container", { "ocr-mode": a.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: Wt(pt, ["prevent"]),
        onWheelCapture: D
      },
      [
        nt(" 图片容器 "),
        o.value && a.value === "pin" ? (j(), q(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: Dt(ht.value),
            onWheelCapture: C,
            onContextmenu: Wt(pt, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: ni
          },
          [
            O("img", {
              src: o.value,
              alt: "贴图",
              style: Dt(X.value),
              onLoad: Z,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, If)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : nt("v-if", !0),
        a.value === "ocr" ? (j(), q(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: Wt(pt, ["prevent"])
          },
          [
            O("header", Of, [
              O(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: ni
                },
                [
                  O("div", zf, [
                    _(z(On), {
                      theme: "outline",
                      size: "18"
                    }),
                    O(
                      "span",
                      Df,
                      wt(m.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  O("div", Nf, [
                    O("button", {
                      class: "ocr-window-btn",
                      title: gt.value ? m.$t("pin.togglePin") : m.$t("pin.pinWindow"),
                      onClick: Wt(Me, ["stop"])
                    }, [
                      (j(), $t(_e(gt.value ? z(wi) : z(ds)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, Wf),
                    N[0] || (N[0] = O(
                      "span",
                      { class: "ocr-window-divider" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    O("button", {
                      class: "ocr-window-btn",
                      title: m.$t("pin.minimize"),
                      onClick: Wt($, ["stop"])
                    }, [
                      _(z(rl), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, $f),
                    O("button", {
                      class: "ocr-window-btn",
                      title: m.$t("pin.maximize"),
                      onClick: Wt(st, ["stop"])
                    }, [
                      _(z(pl), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, Ff),
                    O("button", {
                      class: "ocr-window-btn",
                      title: m.$t("pin.close"),
                      onClick: Wt(ei, ["stop"])
                    }, [
                      _(z(pi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, Bf)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              O(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: ni
                },
                [
                  O("div", Hf, [
                    o.value ? (j(), q("img", {
                      key: 0,
                      src: o.value,
                      alt: "OCR preview",
                      onLoad: Z,
                      draggable: "false"
                    }, null, 40, jf)) : nt("v-if", !0)
                  ]),
                  O("div", Uf, [
                    O(
                      "div",
                      Vf,
                      wt(h.value),
                      1
                      /* TEXT */
                    ),
                    O("div", Yf, [
                      O(
                        "span",
                        Gf,
                        wt(mt.value),
                        1
                        /* TEXT */
                      ),
                      N[1] || (N[1] = O(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      O(
                        "span",
                        Xf,
                        wt(tt.value),
                        1
                        /* TEXT */
                      ),
                      !l.value && !c.value && r.value.trim() ? (j(), q("span", Kf, " ✓ ")) : nt("v-if", !0)
                    ])
                  ]),
                  O("button", {
                    class: "ocr-view-original",
                    title: v.value ? m.$t("pin.viewResult") : m.$t("pin.viewOriginal"),
                    onClick: Wt(d, ["stop"])
                  }, [
                    (j(), $t(_e(v.value ? z(On) : z(hl)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    O(
                      "span",
                      null,
                      wt(v.value ? m.$t("pin.viewResult") : m.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, Zf)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            O("main", qf, [
              v.value ? (j(), q("div", Jf, [
                O("img", {
                  src: o.value || s.value,
                  alt: "original"
                }, null, 8, Qf)
              ])) : (j(), q(
                Kt,
                { key: 1 },
                [
                  l.value ? (j(), q("div", tg, [
                    _(z(hs), {
                      class: "ocr-loading-icon",
                      size: "20",
                      theme: "outline",
                      strokeWidth: 3
                    }),
                    O(
                      "span",
                      null,
                      wt(m.$t("pin.recognizing")),
                      1
                      /* TEXT */
                    )
                  ])) : c.value ? (j(), q(
                    "div",
                    eg,
                    wt(c.value),
                    1
                    /* TEXT */
                  )) : r.value.trim() ? (j(), q("div", ig, [
                    (j(!0), q(
                      Kt,
                      null,
                      me(zt.value, (et, Pt) => (j(), q(
                        "p",
                        { key: Pt },
                        wt(et),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : (j(), q(
                    "div",
                    ng,
                    wt(m.$t("pin.noTextRecognized")),
                    1
                    /* TEXT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            O("footer", sg, [
              _(be, {
                class: "ocr-action-btn",
                type: "text",
                title: m.$t("pin.copyText"),
                disabled: !r.value.trim(),
                onClick: Wt(rt, ["stop"])
              }, {
                default: Gt(() => [
                  _(z(ai), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  O(
                    "span",
                    null,
                    wt(m.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              O("div", og, [
                _(be, {
                  class: "ocr-action-btn translate-main",
                  type: "text",
                  title: m.$t("pin.translate"),
                  disabled: !r.value.trim() || w.value,
                  onClick: Wt(u, ["stop"])
                }, {
                  default: Gt(() => [
                    w.value ? (j(), $t(z(hs), {
                      key: 1,
                      class: "ocr-loading-icon",
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })) : (j(), $t(z(vo), {
                      key: 0,
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    })),
                    O(
                      "span",
                      null,
                      wt(m.$t("pin.translate")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                _(be, {
                  class: "ocr-action-btn translate-arrow",
                  type: "text",
                  disabled: !r.value.trim() || w.value,
                  onClick: Wt(bt, ["stop"])
                }, {
                  default: Gt(() => [
                    _(z(us), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.8
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                nt(" 翻译引擎菜单 "),
                b.value ? (j(), q("div", ag, [
                  (j(!0), q(
                    Kt,
                    null,
                    me(S.value, (et) => (j(), q("div", {
                      key: et.value,
                      class: Ct(["menu-item", { active: g.value === et.value }]),
                      onClick: (Pt) => L(et.value)
                    }, [
                      O(
                        "span",
                        lg,
                        wt(et.label),
                        1
                        /* TEXT */
                      ),
                      g.value === et.value ? (j(), $t(_e(z(mi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : nt("v-if", !0)
                    ], 10, rg))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : nt("v-if", !0)
              ]),
              O("div", cg, [
                _(be, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: m.$t("pin.ocrLanguage"),
                  disabled: l.value,
                  onClick: Wt(U, ["stop"])
                }, {
                  default: Gt(() => [
                    _(z(On), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    O(
                      "span",
                      null,
                      wt(T.value),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"]),
                _(be, {
                  class: "ocr-action-btn ocr-engine-arrow",
                  type: "text",
                  disabled: l.value,
                  onClick: Wt(U, ["stop"])
                }, {
                  default: Gt(() => [
                    _(z(us), {
                      size: "14",
                      theme: "outline",
                      strokeWidth: 3
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled"]),
                x.value ? (j(), q("div", ug, [
                  (j(!0), q(
                    Kt,
                    null,
                    me(E.value, (et) => (j(), q("div", {
                      key: et.value,
                      class: Ct(["menu-item", { active: y.value === et.value }]),
                      onClick: (Pt) => xt(et.value)
                    }, [
                      O(
                        "span",
                        dg,
                        wt(et.label),
                        1
                        /* TEXT */
                      ),
                      y.value === et.value ? (j(), $t(_e(z(mi)), {
                        key: 0,
                        class: "menu-item-icon",
                        size: "16"
                      })) : nt("v-if", !0)
                    ], 10, hg))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : nt("v-if", !0)
              ]),
              O("div", fg, [
                _(be, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: m.$t("pin.recognizeAgain"),
                  disabled: l.value || !s.value,
                  onClick: Wt(ee, ["stop"])
                }, {
                  default: Gt(() => [
                    _(z(gl), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    O(
                      "span",
                      null,
                      wt(m.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              _(be, {
                class: "ocr-action-btn",
                type: "text",
                title: m.$t("pin.saveAsText"),
                disabled: !r.value.trim(),
                onClick: Wt(_t, ["stop"])
              }, {
                default: Gt(() => [
                  _(z(gs), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  O(
                    "span",
                    null,
                    wt(m.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              N[2] || (N[2] = O(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              _(be, {
                class: "ocr-action-btn more",
                type: "text",
                title: m.$t("pin.more"),
                onClick: Wt(M, ["stop"])
              }, {
                default: Gt(() => [
                  _(z(ll), {
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
        Y.value ? (j(), q(
          "div",
          gg,
          wt(Math.round(B.value * 100)) + "% ",
          1
          /* TEXT */
        )) : nt("v-if", !0),
        nt(" 右键菜单 "),
        it.value ? (j(), q(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: Dt(Tt.value)
          },
          [
            O("div", {
              class: "menu-item",
              onClick: Me
            }, [
              (j(), $t(_e(gt.value ? z(ds) : z(wi)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              O(
                "span",
                null,
                wt(gt.value ? m.$t("pin.togglePin") : m.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            O("div", {
              class: "menu-item",
              onClick: Sn
            }, [
              _(z(fl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              O(
                "span",
                null,
                wt(m.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            O("div", {
              class: "menu-item",
              onClick: Ki
            }, [
              _(z(ai), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              O(
                "span",
                null,
                wt(m.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            O("div", {
              class: "menu-item",
              onClick: ya
            }, [
              _(z(gs), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              O(
                "span",
                null,
                wt(m.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            a.value === "ocr" && r.value.trim() ? (j(), q("div", {
              key: 0,
              class: "menu-item",
              onClick: rt
            }, [
              _(z(ai), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              O(
                "span",
                null,
                wt(m.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : nt("v-if", !0),
            N[3] || (N[3] = O(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            O("div", {
              class: "menu-item danger",
              onClick: ei
            }, [
              _(z(pi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              O(
                "span",
                null,
                wt(m.$t("pin.closePin")),
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
}), pg = /* @__PURE__ */ qn(mg, [["__scopeId", "data-v-332110e5"]]), wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
async function kg(e) {
  const t = Date.now(), n = await yg(e);
  Nt.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await P("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr"
    }), s = vg(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || ho(o),
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
async function bg() {
  return Promise.resolve();
}
async function xg() {
  return Promise.resolve();
}
const _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: kg,
  terminateOcr: xg,
  warmupOcr: bg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Tg as activate
};
