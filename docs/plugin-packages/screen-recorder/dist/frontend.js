import { inject as ae, createVNode as T, getCurrentInstance as be, ref as O, computed as m, unref as l, readonly as ho, getCurrentScope as fo, onScopeDispose as go, onMounted as ot, nextTick as Pe, watch as Ce, isRef as vo, warn as yo, provide as mo, defineComponent as R, createElementBlock as N, openBlock as x, mergeProps as wo, renderSlot as xe, createElementVNode as d, normalizeClass as P, Transition as bt, withCtx as re, withDirectives as le, normalizeStyle as $e, createTextVNode as _o, toDisplayString as D, vShow as Ze, shallowReactive as bo, createBlock as Y, createCommentVNode as X, resolveDynamicComponent as cn, Fragment as _e, withModifiers as Le, isVNode as De, render as Je, onUnmounted as dn, renderList as Co, vModelSelect as ut } from "vue";
const Cr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => _r)
  });
};
function xo(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function ko(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ve;
const H = "__TAURI_TO_IPC_KEY__";
function So(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function u(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Oo {
  get rid() {
    return xo(this, Ve, "f");
  }
  constructor(t) {
    Ve.set(this, void 0), ko(this, Ve, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return u("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ve = /* @__PURE__ */ new WeakMap();
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
    return new ue(this.width * t, this.height * t);
  }
  [H]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[H]();
  }
}
class ue {
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
  [H]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[H]();
  }
}
class me {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ye ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ue ? this.size : this.size.toPhysical(t);
  }
  [H]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[H]();
  }
}
class pn {
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
    return new Z(this.x * t, this.y * t);
  }
  [H]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[H]();
  }
}
class Z {
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
    return new pn(this.x / t, this.y / t);
  }
  [H]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[H]();
  }
}
class Ge {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof pn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Z ? this.position : this.position.toPhysical(t);
  }
  [H]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[H]();
  }
}
var A;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(A || (A = {}));
async function hn(e, t) {
  await u("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ct(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return u("plugin:event|listen", {
    event: e,
    target: s,
    handler: So(t)
  }).then((r) => async () => hn(e, r));
}
async function Io(e, t, n) {
  return Ct(e, (o) => {
    hn(e, o.id), t(o);
  }, n);
}
async function Mo(e, t) {
  await u("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function To(e, t, n) {
  await u("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Ee extends Oo {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, o) {
    return u("plugin:image|new", {
      rgba: Xe(t),
      width: n,
      height: o
    }).then((s) => new Ee(s));
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
    return u("plugin:image|from_bytes", {
      bytes: Xe(t)
    }).then((n) => new Ee(n));
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
    return u("plugin:image|from_path", { path: t }).then((n) => new Ee(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return u("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return u("plugin:image|size", { rid: this.rid });
  }
}
function Xe(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ee ? e.rid : e;
}
var yt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(yt || (yt = {}));
class No {
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
var Ft;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ft || (Ft = {}));
function fn() {
  return new gn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ct() {
  return u("plugin:window|get_all_windows").then((e) => e.map((t) => new gn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const dt = ["tauri://created", "tauri://error"];
class gn {
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
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || u("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
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
    return (n = (await ct()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return fn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return ct();
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
    for (const t of await ct())
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Ct(t, n, {
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Io(t, n, {
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
    if (dt.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Mo(t, n);
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
  async emitTo(t, n, o) {
    if (dt.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return To(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return dt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return u("plugin:window|scale_factor", {
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
    return u("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Z(t));
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
    return u("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Z(t));
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
    return u("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new ue(t));
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
    return u("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new ue(t));
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
    return u("plugin:window|is_fullscreen", {
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
    return u("plugin:window|is_minimized", {
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
    return u("plugin:window|is_maximized", {
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
    return u("plugin:window|is_focused", {
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
    return u("plugin:window|is_decorated", {
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
    return u("plugin:window|is_resizable", {
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
    return u("plugin:window|is_maximizable", {
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
    return u("plugin:window|is_minimizable", {
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
    return u("plugin:window|is_closable", {
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
    return u("plugin:window|is_visible", {
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
    return u("plugin:window|title", {
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
    return u("plugin:window|theme", {
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
    return u("plugin:window|is_always_on_top", {
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
    return u("plugin:window|center", {
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
    return t && (t === yt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), u("plugin:window|request_user_attention", {
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
    return u("plugin:window|set_resizable", {
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
    return u("plugin:window|set_enabled", {
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
    return u("plugin:window|is_enabled", {
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
    return u("plugin:window|set_maximizable", {
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
    return u("plugin:window|set_minimizable", {
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
    return u("plugin:window|set_closable", {
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
    return u("plugin:window|set_title", {
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
    return u("plugin:window|maximize", {
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
    return u("plugin:window|unmaximize", {
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
    return u("plugin:window|toggle_maximize", {
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
    return u("plugin:window|minimize", {
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
    return u("plugin:window|unminimize", {
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
    return u("plugin:window|show", {
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
    return u("plugin:window|hide", {
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
    return u("plugin:window|close", {
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
    return u("plugin:window|destroy", {
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
    return u("plugin:window|set_decorations", {
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
    return u("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return u("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return u("plugin:window|set_effects", {
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
    return u("plugin:window|set_always_on_top", {
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
    return u("plugin:window|set_always_on_bottom", {
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
    return u("plugin:window|set_content_protected", {
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
    return u("plugin:window|set_size", {
      label: this.label,
      value: t instanceof me ? t : new me(t)
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
    return u("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof me ? t : t ? new me(t) : null
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
    return u("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof me ? t : t ? new me(t) : null
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
    function n(o) {
      return o ? { Logical: o } : null;
    }
    return u("plugin:window|set_size_constraints", {
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
    return u("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Ge ? t : new Ge(t)
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
    return u("plugin:window|set_fullscreen", {
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
    return u("plugin:window|set_focus", {
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
    return u("plugin:window|set_icon", {
      label: this.label,
      value: Xe(t)
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
    return u("plugin:window|set_skip_taskbar", {
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
    return u("plugin:window|set_cursor_grab", {
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
    return u("plugin:window|set_cursor_visible", {
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
    return u("plugin:window|set_cursor_icon", {
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
    return u("plugin:window|set_background_color", { color: t });
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
    return u("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Ge ? t : new Ge(t)
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
    return u("plugin:window|set_ignore_cursor_events", {
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
    return u("plugin:window|start_dragging", {
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
    return u("plugin:window|start_resize_dragging", {
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
    return u("plugin:window|set_badge_count", {
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
    return u("plugin:window|set_badge_label", {
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
    return u("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Xe(t) : void 0
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
    return u("plugin:window|set_progress_bar", {
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
    return u("plugin:window|set_visible_on_all_workspaces", {
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
    return u("plugin:window|set_title_bar_style", {
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
    return u("plugin:window|set_theme", {
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
    return this.listen(A.WINDOW_RESIZED, (n) => {
      n.payload = new ue(n.payload), t(n);
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
    return this.listen(A.WINDOW_MOVED, (n) => {
      n.payload = new Z(n.payload), t(n);
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
    return this.listen(A.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new No(n);
      await t(o), o.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(A.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), o = await this.listen(A.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new Z(i.payload.position)
        }
      });
    }), s = await this.listen(A.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), r = await this.listen(A.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), r();
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
    const n = await this.listen(A.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(A.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
    });
    return () => {
      n(), o();
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
    return this.listen(A.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(A.WINDOW_THEME_CHANGED, t);
  }
}
var At;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(At || (At = {}));
var jt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(jt || (jt = {}));
var Bt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Bt || (Bt = {}));
function zo(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Z(e.position),
    size: new ue(e.size)
  };
}
async function Po(e, t) {
  return u("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(zo);
}
var Lo = {
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
function Eo() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function $o(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], r = t.theme || n.theme;
  switch (r) {
    case "outline":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), s.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
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
var Do = Symbol("icon-context");
function xt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var i = Eo(), p = ae(Do, Lo);
      return function() {
        var f = r.size, v = r.strokeWidth, h = r.strokeLinecap, y = r.strokeLinejoin, S = r.theme, C = r.fill, U = r.spin, g = $o(i, {
          size: f,
          strokeWidth: v,
          strokeLinecap: h,
          strokeLinejoin: y,
          theme: S,
          fill: C
        }, p), w = [p.prefix + "-icon"];
        return w.push(p.prefix + "-icon-" + e), U && w.push(p.prefix + "-icon-spin"), T("span", {
          class: w.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const Ro = xt("close-small", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wo = xt("minus", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fo = xt("radar", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), T("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), vn = Symbol(), qe = "el", Ao = "is-", ie = (e, t, n, o, s) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), o && (r += `__${o}`), s && (r += `--${s}`), r;
}, yn = Symbol("namespaceContextKey"), jo = (e) => {
  const t = e || (be() ? ae(yn, O(qe)) : O(qe));
  return m(() => l(t) || qe);
}, kt = (e, t) => {
  const n = jo(t);
  return {
    namespace: n,
    b: (g = "") => ie(n.value, e, g, "", ""),
    e: (g) => g ? ie(n.value, e, "", g, "") : "",
    m: (g) => g ? ie(n.value, e, "", "", g) : "",
    be: (g, w) => g && w ? ie(n.value, e, g, w, "") : "",
    em: (g, w) => g && w ? ie(n.value, e, "", g, w) : "",
    bm: (g, w) => g && w ? ie(n.value, e, g, "", w) : "",
    bem: (g, w, M) => g && w && M ? ie(n.value, e, g, w, M) : "",
    is: (g, ...w) => {
      const M = w.length >= 1 ? w[0] : !0;
      return g && M ? `${Ao}${g}` : "";
    },
    cssVar: (g) => {
      const w = {};
      for (const M in g)
        g[M] && (w[`--${n.value}-${M}`] = g[M]);
      return w;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const w = {};
      for (const M in g)
        g[M] && (w[`--${n.value}-${e}-${M}`] = g[M]);
      return w;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Bo = Object.prototype.hasOwnProperty, Ht = (e, t) => Bo.call(e, t), Re = (e) => typeof e == "function", ce = (e) => typeof e == "string", mn = (e) => e !== null && typeof e == "object";
var Ho = typeof global == "object" && global && global.Object === Object && global, Go = typeof self == "object" && self && self.Object === Object && self, St = Ho || Go || Function("return this")(), ke = St.Symbol, wn = Object.prototype, Uo = wn.hasOwnProperty, Vo = wn.toString, Ne = ke ? ke.toStringTag : void 0;
function qo(e) {
  var t = Uo.call(e, Ne), n = e[Ne];
  try {
    e[Ne] = void 0;
    var o = !0;
  } catch {
  }
  var s = Vo.call(e);
  return o && (t ? e[Ne] = n : delete e[Ne]), s;
}
var Ko = Object.prototype, Zo = Ko.toString;
function Jo(e) {
  return Zo.call(e);
}
var Yo = "[object Null]", Xo = "[object Undefined]", Gt = ke ? ke.toStringTag : void 0;
function _n(e) {
  return e == null ? e === void 0 ? Xo : Yo : Gt && Gt in Object(e) ? qo(e) : Jo(e);
}
function Qo(e) {
  return e != null && typeof e == "object";
}
var es = "[object Symbol]";
function Ot(e) {
  return typeof e == "symbol" || Qo(e) && _n(e) == es;
}
function ts(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var It = Array.isArray, Ut = ke ? ke.prototype : void 0, Vt = Ut ? Ut.toString : void 0;
function bn(e) {
  if (typeof e == "string")
    return e;
  if (It(e))
    return ts(e, bn) + "";
  if (Ot(e))
    return Vt ? Vt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Cn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ns = "[object AsyncFunction]", os = "[object Function]", ss = "[object GeneratorFunction]", is = "[object Proxy]";
function as(e) {
  if (!Cn(e))
    return !1;
  var t = _n(e);
  return t == os || t == ss || t == ns || t == is;
}
var pt = St["__core-js_shared__"], qt = function() {
  var e = /[^.]+$/.exec(pt && pt.keys && pt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function rs(e) {
  return !!qt && qt in e;
}
var ls = Function.prototype, us = ls.toString;
function cs(e) {
  if (e != null) {
    try {
      return us.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ds = /[\\^$.*+?()[\]{}|]/g, ps = /^\[object .+?Constructor\]$/, hs = Function.prototype, fs = Object.prototype, gs = hs.toString, vs = fs.hasOwnProperty, ys = RegExp(
  "^" + gs.call(vs).replace(ds, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ms(e) {
  if (!Cn(e) || rs(e))
    return !1;
  var t = as(e) ? ys : ps;
  return t.test(cs(e));
}
function ws(e, t) {
  return e?.[t];
}
function xn(e, t) {
  var n = ws(e, t);
  return ms(n) ? n : void 0;
}
function _s(e, t) {
  return e === t || e !== e && t !== t;
}
var bs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cs = /^\w*$/;
function xs(e, t) {
  if (It(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ot(e) ? !0 : Cs.test(e) || !bs.test(e) || t != null && e in Object(t);
}
var We = xn(Object, "create");
function ks() {
  this.__data__ = We ? We(null) : {}, this.size = 0;
}
function Ss(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Os = "__lodash_hash_undefined__", Is = Object.prototype, Ms = Is.hasOwnProperty;
function Ts(e) {
  var t = this.__data__;
  if (We) {
    var n = t[e];
    return n === Os ? void 0 : n;
  }
  return Ms.call(t, e) ? t[e] : void 0;
}
var Ns = Object.prototype, zs = Ns.hasOwnProperty;
function Ps(e) {
  var t = this.__data__;
  return We ? t[e] !== void 0 : zs.call(t, e);
}
var Ls = "__lodash_hash_undefined__";
function Es(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = We && t === void 0 ? Ls : t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = ks;
de.prototype.delete = Ss;
de.prototype.get = Ts;
de.prototype.has = Ps;
de.prototype.set = Es;
function $s() {
  this.__data__ = [], this.size = 0;
}
function st(e, t) {
  for (var n = e.length; n--; )
    if (_s(e[n][0], t))
      return n;
  return -1;
}
var Ds = Array.prototype, Rs = Ds.splice;
function Ws(e) {
  var t = this.__data__, n = st(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Rs.call(t, n, 1), --this.size, !0;
}
function Fs(e) {
  var t = this.__data__, n = st(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function As(e) {
  return st(this.__data__, e) > -1;
}
function js(e, t) {
  var n = this.__data__, o = st(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ie.prototype.clear = $s;
Ie.prototype.delete = Ws;
Ie.prototype.get = Fs;
Ie.prototype.has = As;
Ie.prototype.set = js;
var Bs = xn(St, "Map");
function Hs() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (Bs || Ie)(),
    string: new de()
  };
}
function Gs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function it(e, t) {
  var n = e.__data__;
  return Gs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Us(e) {
  var t = it(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Vs(e) {
  return it(this, e).get(e);
}
function qs(e) {
  return it(this, e).has(e);
}
function Ks(e, t) {
  var n = it(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function he(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
he.prototype.clear = Hs;
he.prototype.delete = Us;
he.prototype.get = Vs;
he.prototype.has = qs;
he.prototype.set = Ks;
var Zs = "Expected a function";
function Mt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Zs);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], r = n.cache;
    if (r.has(s))
      return r.get(s);
    var i = e.apply(this, o);
    return n.cache = r.set(s, i) || r, i;
  };
  return n.cache = new (Mt.Cache || he)(), n;
}
Mt.Cache = he;
var Js = 500;
function Ys(e) {
  var t = Mt(e, function(o) {
    return n.size === Js && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Xs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qs = /\\(\\)?/g, ei = Ys(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xs, function(n, o, s, r) {
    t.push(s ? r.replace(Qs, "$1") : o || n);
  }), t;
});
function ti(e) {
  return e == null ? "" : bn(e);
}
function ni(e, t) {
  return It(e) ? e : xs(e, t) ? [e] : ei(ti(e));
}
function oi(e) {
  if (typeof e == "string" || Ot(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function si(e, t) {
  t = ni(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[oi(t[n++])];
  return n && n == o ? e : void 0;
}
function ii(e, t, n) {
  var o = e == null ? void 0 : si(e, t);
  return o === void 0 ? n : o;
}
function ai(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const kn = (e) => e === void 0, Kt = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, ri = (e) => ce(e) ? !Number.isNaN(Number(e)) : !1;
var Zt;
const fe = typeof window < "u", li = (e) => typeof e == "string", ui = () => {
};
fe && ((Zt = window?.navigator) != null && Zt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Tt(e) {
  return typeof e == "function" ? e() : l(e);
}
function ci(e) {
  return e;
}
function Nt(e) {
  return fo() ? (go(e), !0) : !1;
}
function di(e, t = !0) {
  be() ? ot(e) : t ? e() : Pe(e);
}
function Sn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = O(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), r = null);
  }
  function p() {
    s.value = !1, i();
  }
  function f(...v) {
    i(), s.value = !0, r = setTimeout(() => {
      s.value = !1, r = null, e(...v);
    }, Tt(t));
  }
  return o && (s.value = !0, fe && f()), Nt(p), {
    isPending: ho(s),
    start: f,
    stop: p
  };
}
function On(e) {
  var t;
  const n = Tt(e);
  return (t = n?.$el) != null ? t : n;
}
const In = fe ? window : void 0;
function Mn(...e) {
  let t, n, o, s;
  if (li(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = In) : [t, n, o, s] = e, !t)
    return ui;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], i = () => {
    r.forEach((h) => h()), r.length = 0;
  }, p = (h, y, S, C) => (h.addEventListener(y, S, C), () => h.removeEventListener(y, S, C)), f = Ce(() => [On(t), Tt(s)], ([h, y]) => {
    i(), h && r.push(...n.flatMap((S) => o.map((C) => p(h, S, C, y))));
  }, { immediate: !0, flush: "post" }), v = () => {
    f(), i();
  };
  return Nt(v), v;
}
function pi(e, t = !1) {
  const n = O(), o = () => n.value = !!e();
  return o(), di(o, t), n;
}
const Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yt = "__vueuse_ssr_handlers__";
Jt[Yt] = Jt[Yt] || {};
var Xt = Object.getOwnPropertySymbols, hi = Object.prototype.hasOwnProperty, fi = Object.prototype.propertyIsEnumerable, gi = (e, t) => {
  var n = {};
  for (var o in e)
    hi.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Xt)
    for (var o of Xt(e))
      t.indexOf(o) < 0 && fi.call(e, o) && (n[o] = e[o]);
  return n;
};
function vi(e, t, n = {}) {
  const o = n, { window: s = In } = o, r = gi(o, ["window"]);
  let i;
  const p = pi(() => s && "ResizeObserver" in s), f = () => {
    i && (i.disconnect(), i = void 0);
  }, v = Ce(() => On(e), (y) => {
    f(), p.value && s && y && (i = new ResizeObserver(t), i.observe(y, r));
  }, { immediate: !0, flush: "post" }), h = () => {
    f(), v();
  };
  return Nt(h), {
    isSupported: p,
    stop: h
  };
}
var Qt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Qt || (Qt = {}));
var yi = Object.defineProperty, en = Object.getOwnPropertySymbols, mi = Object.prototype.hasOwnProperty, wi = Object.prototype.propertyIsEnumerable, tn = (e, t, n) => t in e ? yi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _i = (e, t) => {
  for (var n in t || (t = {}))
    mi.call(t, n) && tn(e, n, t[n]);
  if (en)
    for (var n of en(t))
      wi.call(t, n) && tn(e, n, t[n]);
  return e;
};
const bi = {
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
_i({
  linear: ci
}, bi);
const nn = {
  current: 0
}, on = O(0), Tn = 2e3, sn = Symbol("elZIndexContextKey"), Nn = Symbol("zIndexContextKey"), Ci = (e) => {
  const t = be() ? ae(sn, nn) : nn, n = e || (be() ? ae(Nn, void 0) : void 0), o = m(() => {
    const i = l(n);
    return pe(i) ? i : Tn;
  }), s = m(() => o.value + on.value), r = () => (t.current++, on.value = t.current, s.value);
  return !fe && ae(sn), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: r
  };
};
var xi = {
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
const ki = (e) => (t, n) => Si(t, n, l(e)), Si = (e, t, n) => ii(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var r;
  return `${(r = t?.[s]) != null ? r : `{${s}}`}`;
}), Oi = (e) => {
  const t = m(() => l(e).name), n = vo(e) ? e : O(e);
  return {
    lang: t,
    locale: n,
    t: ki(e)
  };
}, zn = Symbol("localeContextKey"), Ii = (e) => {
  const t = e || ae(zn, O());
  return Oi(m(() => t.value || xi));
}, Pn = "__epPropKey", j = (e) => e, Mi = (e) => mn(e) && !!e[Pn], Ln = (e, t) => {
  if (!mn(e) || Mi(e))
    return e;
  const { values: n, required: o, default: s, type: r, validator: i } = e, f = {
    type: r,
    required: !!o,
    validator: n || i ? (v) => {
      let h = !1, y = [];
      if (n && (y = Array.from(n), Ht(e, "default") && y.push(s), h || (h = y.includes(v))), i && (h || (h = i(v))), !h && y.length > 0) {
        const S = [...new Set(y)].map((C) => JSON.stringify(C)).join(", ");
        yo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${S}], got value ${JSON.stringify(v)}.`);
      }
      return h;
    } : void 0,
    [Pn]: !0
  };
  return Ht(e, "default") && (f.default = s), f;
}, Me = (e) => ai(Object.entries(e).map(([t, n]) => [
  t,
  Ln(n, t)
])), Ti = ["", "default", "small", "large"], Ni = Ln({
  type: String,
  values: Ti,
  required: !1
}), zi = Symbol("size"), Pi = Symbol("emptyValuesContextKey"), Li = Me({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Re(e) ? !e() : !e
  }
}), an = (e) => Object.keys(e), Qe = O();
function En(e, t = void 0) {
  return be() ? ae(vn, Qe) : Qe;
}
function $n(e, t) {
  const n = En(), o = kt(e, m(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || qe;
  })), s = Ii(m(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), r = Ci(m(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || Tn;
  })), i = m(() => {
    var p;
    return l(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return Dn(m(() => l(n) || {})), {
    ns: o,
    locale: s,
    zIndex: r,
    size: i
  };
}
const Dn = (e, t, n = !1) => {
  var o;
  const s = !!be(), r = s ? En() : void 0, i = (o = void 0) != null ? o : s ? mo : void 0;
  if (!i)
    return;
  const p = m(() => {
    const f = l(e);
    return r?.value ? Ei(r.value, f) : f;
  });
  return i(vn, p), i(zn, m(() => p.value.locale)), i(yn, m(() => p.value.namespace)), i(Nn, m(() => p.value.zIndex)), i(zi, {
    size: m(() => p.value.size || "")
  }), i(Pi, m(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Qe.value) && (Qe.value = p.value), p;
}, Ei = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...an(e), ...an(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var at = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function wt(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || ri(e))
    return `${e}${t}`;
  if (ce(e))
    return e;
}
const Rn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Wn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), $i = Me({
  size: {
    type: j([Number, String])
  },
  color: {
    type: String
  }
}), Di = R({
  name: "ElIcon",
  inheritAttrs: !1
}), Ri = /* @__PURE__ */ R({
  ...Di,
  props: $i,
  setup(e) {
    const t = e, n = kt("icon"), o = m(() => {
      const { size: s, color: r } = t;
      return !s && !r ? {} : {
        fontSize: kn(s) ? void 0 : wt(s),
        "--color": r
      };
    });
    return (s, r) => (x(), N("i", wo({
      class: l(n).b(),
      style: l(o)
    }, s.$attrs), [
      xe(s.$slots, "default")
    ], 16));
  }
});
var Wi = /* @__PURE__ */ at(Ri, [["__file", "icon.vue"]]);
const et = Rn(Wi);
/*! Element Plus Icons Vue v2.3.1 */
var Fi = /* @__PURE__ */ R({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (x(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ai = Fi, ji = /* @__PURE__ */ R({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (x(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Fn = ji, Bi = /* @__PURE__ */ R({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (x(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Hi = Bi, Gi = /* @__PURE__ */ R({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (x(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ui = Gi, Vi = /* @__PURE__ */ R({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (x(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), qi = Vi;
const An = j([
  String,
  Object,
  Function
]), Ki = {
  Close: Fn
}, Zi = {
  Close: Fn
}, tt = {
  success: Ui,
  warning: qi,
  error: Ai,
  info: Hi
}, Ji = (e) => e, Ke = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Yi = Me({
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
    type: j([String, Object, Array])
  },
  offset: {
    type: j(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Xi = R({
  name: "ElBadge"
}), Qi = /* @__PURE__ */ R({
  ...Xi,
  props: Yi,
  setup(e, { expose: t }) {
    const n = e, o = kt("badge"), s = m(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = m(() => {
      var i, p, f, v, h;
      return [
        {
          backgroundColor: n.color,
          marginRight: wt(-((p = (i = n.offset) == null ? void 0 : i[0]) != null ? p : 0)),
          marginTop: wt((v = (f = n.offset) == null ? void 0 : f[1]) != null ? v : 0)
        },
        (h = n.badgeStyle) != null ? h : {}
      ];
    });
    return t({
      content: s
    }), (i, p) => (x(), N("div", {
      class: P(l(o).b())
    }, [
      xe(i.$slots, "default"),
      T(bt, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          le(d("sup", {
            class: P([
              l(o).e("content"),
              l(o).em("content", i.type),
              l(o).is("fixed", !!i.$slots.default),
              l(o).is("dot", i.isDot),
              l(o).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: $e(l(r))
          }, [
            xe(i.$slots, "content", { value: l(s) }, () => [
              _o(D(l(s)), 1)
            ])
          ], 6), [
            [Ze, !i.hidden && (l(s) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ea = /* @__PURE__ */ at(Qi, [["__file", "badge.vue"]]);
const ta = Rn(ea), na = Me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: j(Object)
  },
  size: Ni,
  button: {
    type: j(Object)
  },
  experimentalFeatures: {
    type: j(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: j(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Li
}), V = {};
R({
  name: "ElConfigProvider",
  props: na,
  setup(e, { slots: t }) {
    Ce(() => e.message, (o) => {
      Object.assign(V, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Dn(e);
    return () => xe(t, "default", { config: n?.value });
  }
});
const jn = ["success", "info", "warning", "error"], $ = Ji({
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
  appendTo: fe ? document.body : void 0
}), oa = Me({
  customClass: {
    type: String,
    default: $.customClass
  },
  center: {
    type: Boolean,
    default: $.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: $.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: $.duration
  },
  icon: {
    type: An,
    default: $.icon
  },
  id: {
    type: String,
    default: $.id
  },
  message: {
    type: j([
      String,
      Object,
      Function
    ]),
    default: $.message
  },
  onClose: {
    type: j(Function),
    default: $.onClose
  },
  showClose: {
    type: Boolean,
    default: $.showClose
  },
  type: {
    type: String,
    values: jn,
    default: $.type
  },
  plain: {
    type: Boolean,
    default: $.plain
  },
  offset: {
    type: Number,
    default: $.offset
  },
  zIndex: {
    type: Number,
    default: $.zIndex
  },
  grouping: {
    type: Boolean,
    default: $.grouping
  },
  repeatNum: {
    type: Number,
    default: $.repeatNum
  }
}), sa = {
  destroy: () => !0
}, q = bo([]), ia = (e) => {
  const t = q.findIndex((s) => s.id === e), n = q[t];
  let o;
  return t > 0 && (o = q[t - 1]), { current: n, prev: o };
}, aa = (e) => {
  const { prev: t } = ia(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ra = (e, t) => q.findIndex((o) => o.id === e) > 0 ? 16 : t, la = R({
  name: "ElMessage"
}), ua = /* @__PURE__ */ R({
  ...la,
  props: oa,
  emits: sa,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Zi, { ns: s, zIndex: r } = $n("message"), { currentZIndex: i, nextZIndex: p } = r, f = O(), v = O(!1), h = O(0);
    let y;
    const S = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), C = m(() => {
      const I = n.type;
      return { [s.bm("icon", I)]: I && tt[I] };
    }), U = m(() => n.icon || tt[n.type] || ""), g = m(() => aa(n.id)), w = m(() => ra(n.id, n.offset) + g.value), M = m(() => h.value + w.value), ee = m(() => ({
      top: `${w.value}px`,
      zIndex: i.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: y } = Sn(() => {
        L();
      }, n.duration));
    }
    function te() {
      y?.();
    }
    function L() {
      v.value = !1;
    }
    function ge({ code: I }) {
      I === Ke.esc && L();
    }
    return ot(() => {
      b(), p(), v.value = !0;
    }), Ce(() => n.repeatNum, () => {
      te(), b();
    }), Mn(document, "keydown", ge), vi(f, () => {
      h.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: M,
      close: L
    }), (I, rt) => (x(), Y(bt, {
      name: l(s).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (ve) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(d("div", {
          id: I.id,
          ref_key: "messageRef",
          ref: f,
          class: P([
            l(s).b(),
            { [l(s).m(I.type)]: I.type },
            l(s).is("center", I.center),
            l(s).is("closable", I.showClose),
            l(s).is("plain", I.plain),
            I.customClass
          ]),
          style: $e(l(ee)),
          role: "alert",
          onMouseenter: te,
          onMouseleave: b
        }, [
          I.repeatNum > 1 ? (x(), Y(l(ta), {
            key: 0,
            value: I.repeatNum,
            type: l(S),
            class: P(l(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : X("v-if", !0),
          l(U) ? (x(), Y(l(et), {
            key: 1,
            class: P([l(s).e("icon"), l(C)])
          }, {
            default: re(() => [
              (x(), Y(cn(l(U))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          xe(I.$slots, "default", {}, () => [
            I.dangerouslyUseHTMLString ? (x(), N(_e, { key: 1 }, [
              X(" Caution here, message could've been compromised, never use user's input as message "),
              d("p", {
                class: P(l(s).e("content")),
                innerHTML: I.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (x(), N("p", {
              key: 0,
              class: P(l(s).e("content"))
            }, D(I.message), 3))
          ]),
          I.showClose ? (x(), Y(l(et), {
            key: 2,
            class: P(l(s).e("closeBtn")),
            onClick: Le(L, ["stop"])
          }, {
            default: re(() => [
              T(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 46, ["id"]), [
          [Ze, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ca = /* @__PURE__ */ at(ua, [["__file", "message.vue"]]);
let da = 1;
const Bn = (e) => {
  const t = !e || ce(e) || De(e) || Re(e) ? { message: e } : e, n = {
    ...$,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ce(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    mt(o) || (o = document.body), n.appendTo = o;
  }
  return Kt(V.grouping) && !n.grouping && (n.grouping = V.grouping), pe(V.duration) && n.duration === 3e3 && (n.duration = V.duration), pe(V.offset) && n.offset === 16 && (n.offset = V.offset), Kt(V.showClose) && !n.showClose && (n.showClose = V.showClose), n;
}, pa = (e) => {
  const t = q.indexOf(e);
  if (t === -1)
    return;
  q.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ha = ({ appendTo: e, ...t }, n) => {
  const o = `message_${da++}`, s = t.onClose, r = document.createElement("div"), i = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), pa(h);
    },
    onDestroy: () => {
      Je(null, r);
    }
  }, p = T(ca, i, Re(i.message) || De(i.message) ? {
    default: Re(i.message) ? i.message : () => i.message
  } : null);
  p.appContext = n || Se._context, Je(p, r), e.appendChild(r.firstElementChild);
  const f = p.component, h = {
    id: o,
    vnode: p,
    vm: f,
    handler: {
      close: () => {
        f.exposed.visible.value = !1;
      }
    },
    props: p.component.props
  };
  return h;
}, Se = (e = {}, t) => {
  if (!fe)
    return { close: () => {
    } };
  const n = Bn(e);
  if (n.grouping && q.length) {
    const s = q.find(({ vnode: r }) => {
      var i;
      return ((i = r.props) == null ? void 0 : i.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (pe(V.max) && q.length >= V.max)
    return { close: () => {
    } };
  const o = ha(n, t);
  return q.push(o), o.handler;
};
jn.forEach((e) => {
  Se[e] = (t = {}, n) => {
    const o = Bn(t);
    return Se({ ...o, type: e }, n);
  };
});
function fa(e) {
  for (const t of q)
    (!e || e === t.props.type) && t.handler.close();
}
Se.closeAll = fa;
Se._context = null;
const ga = Wn(Se, "$message"), Hn = [
  "success",
  "info",
  "warning",
  "error"
], va = Me({
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
    type: An
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: j([
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
    type: j(Function),
    default: () => {
    }
  },
  onClose: {
    type: j(Function),
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
    values: [...Hn, ""],
    default: ""
  },
  zIndex: Number
}), ya = {
  destroy: () => !0
}, ma = R({
  name: "ElNotification"
}), wa = /* @__PURE__ */ R({
  ...ma,
  props: va,
  emits: ya,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = $n("notification"), { nextZIndex: r, currentZIndex: i } = s, { Close: p } = Ki, f = O(!1);
    let v;
    const h = m(() => {
      const b = n.type;
      return b && tt[n.type] ? o.m(b) : "";
    }), y = m(() => n.type && tt[n.type] || n.icon), S = m(() => n.position.endsWith("right") ? "right" : "left"), C = m(() => n.position.startsWith("top") ? "top" : "bottom"), U = m(() => {
      var b;
      return {
        [C.value]: `${n.offset}px`,
        zIndex: (b = n.zIndex) != null ? b : i.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: v } = Sn(() => {
        f.value && M();
      }, n.duration));
    }
    function w() {
      v?.();
    }
    function M() {
      f.value = !1;
    }
    function ee({ code: b }) {
      b === Ke.delete || b === Ke.backspace ? w() : b === Ke.esc ? f.value && M() : g();
    }
    return ot(() => {
      g(), r(), f.value = !0;
    }), Mn(document, "keydown", ee), t({
      visible: f,
      close: M
    }), (b, te) => (x(), Y(bt, {
      name: l(o).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (L) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(d("div", {
          id: b.id,
          class: P([l(o).b(), b.customClass, l(S)]),
          style: $e(l(U)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: g,
          onClick: b.onClick
        }, [
          l(y) ? (x(), Y(l(et), {
            key: 0,
            class: P([l(o).e("icon"), l(h)])
          }, {
            default: re(() => [
              (x(), Y(cn(l(y))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          d("div", {
            class: P(l(o).e("group"))
          }, [
            d("h2", {
              class: P(l(o).e("title")),
              textContent: D(b.title)
            }, null, 10, ["textContent"]),
            le(d("div", {
              class: P(l(o).e("content")),
              style: $e(b.title ? void 0 : { margin: 0 })
            }, [
              xe(b.$slots, "default", {}, () => [
                b.dangerouslyUseHTMLString ? (x(), N(_e, { key: 1 }, [
                  X(" Caution here, message could've been compromised, never use user's input as message "),
                  d("p", { innerHTML: b.message }, null, 8, ["innerHTML"])
                ], 2112)) : (x(), N("p", { key: 0 }, D(b.message), 1))
              ])
            ], 6), [
              [Ze, b.message]
            ]),
            b.showClose ? (x(), Y(l(et), {
              key: 0,
              class: P(l(o).e("closeBtn")),
              onClick: Le(M, ["stop"])
            }, {
              default: re(() => [
                T(l(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : X("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ze, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var _a = /* @__PURE__ */ at(wa, [["__file", "notification.vue"]]);
const nt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, _t = 16;
let ba = 1;
const Oe = function(e = {}, t) {
  if (!fe)
    return { close: () => {
    } };
  (ce(e) || De(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  nt[n].forEach(({ vm: h }) => {
    var y;
    o += (((y = h.el) == null ? void 0 : y.offsetHeight) || 0) + _t;
  }), o += _t;
  const s = `notification_${ba++}`, r = e.onClose, i = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      Ca(s, n, r);
    }
  };
  let p = document.body;
  mt(e.appendTo) ? p = e.appendTo : ce(e.appendTo) && (p = document.querySelector(e.appendTo)), mt(p) || (p = document.body);
  const f = document.createElement("div"), v = T(_a, i, Re(i.message) ? i.message : De(i.message) ? () => i.message : null);
  return v.appContext = kn(t) ? Oe._context : t, v.props.onDestroy = () => {
    Je(null, f);
  }, Je(v, f), nt[n].push({ vm: v }), p.appendChild(f.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Hn.forEach((e) => {
  Oe[e] = (t = {}, n) => ((ce(t) || De(t)) && (t = {
    message: t
  }), Oe({ ...t, type: e }, n));
});
function Ca(e, t, n) {
  const o = nt[t], s = o.findIndex(({ vm: v }) => {
    var h;
    return ((h = v.component) == null ? void 0 : h.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: r } = o[s];
  if (!r)
    return;
  n?.(r);
  const i = r.el.offsetHeight, p = t.split("-")[0];
  o.splice(s, 1);
  const f = o.length;
  if (!(f < 1))
    for (let v = s; v < f; v++) {
      const { el: h, component: y } = o[v].vm, S = Number.parseInt(h.style[p], 10) - i - _t;
      y.props.offset = S;
    }
}
function xa() {
  for (const e of Object.values(nt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Oe.closeAll = xa;
Oe._context = null;
const ka = Wn(Oe, "$notify"), ht = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", o) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: o
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
      position: o = "center",
      duration: s = 3e3,
      showClose: r = !1
    } = e;
    o === "center" ? ga({
      message: t,
      type: n,
      duration: s,
      showClose: r,
      grouping: !0
    }) : ka({
      message: t,
      type: n,
      position: o,
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
}, ft = "[screen-recorder]", Sa = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, G = async (e, t) => {
  const n = performance.now(), o = Sa(t);
  console.info(`${ft} invoke:start ${e}`, o ?? "");
  try {
    const s = await u(e, t);
    return console.info(`${ft} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: s
    }), s;
  } catch (s) {
    throw console.error(`${ft} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, Oa = () => G("screen_recorder_get_ffmpeg_status"), we = (e) => G("screen_recorder_set_capture_excluded", { excluded: e }), ze = (e) => G("screen_recorder_set_passthrough_region", { region: e }), Ia = () => G("screen_recorder_pick_target_window"), Ma = () => G("screen_recorder_close_window"), Ta = (e, t) => G("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Na = () => G("screen_recorder_pause_recording"), za = (e, t) => G("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Pa = () => G("screen_recorder_stop_recording"), La = () => G("screen_recorder_cancel_recording"), Ea = () => G("screen_recorder_cancel_export"), $a = (e) => G("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), rn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), E = "[screen-recorder]";
function Da() {
  const e = O("selecting"), t = O(rn()), n = O(null), o = O(null), s = O(""), r = O(null), i = O(0), p = O(0), f = O(null), v = () => {
    p.value = e.value === "recording" && r.value !== null ? i.value + Date.now() - r.value : i.value;
  }, h = () => {
    f.value !== null && (window.clearInterval(f.value), f.value = null);
  }, y = () => {
    h(), v(), f.value = window.setInterval(() => {
      v();
    }, 250);
  }, S = async () => (console.info(`${E} refresh ffmpeg status`), n.value = await Oa(), console.info(`${E} ffmpeg status`, n.value), n.value), C = async (L) => {
    s.value = "", o.value = null, console.info(`${E} begin requested`, { region: L, settings: t.value });
    const ge = n.value ?? await S();
    if (!ge.available)
      throw new Error(ge.message || "FFmpeg unavailable");
    await Ta(L, t.value), e.value = "recording", i.value = 0, p.value = 0, r.value = Date.now(), y(), console.info(`${E} recording started`, { status: e.value });
  }, U = async () => {
    e.value === "recording" && (console.info(`${E} pause requested`, { elapsedMs: p.value }), v(), i.value = p.value, r.value = null, h(), await Na(), e.value = "paused", console.info(`${E} recording paused`, { accumulatedMs: i.value }));
  }, g = async (L) => {
    e.value === "paused" && (console.info(`${E} resume requested`, { region: L, settings: t.value }), await za(L, t.value), e.value = "recording", r.value = Date.now(), y(), console.info(`${E} recording resumed`));
  }, w = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${E} stop requested`, { status: e.value, elapsedMs: p.value }), v(), i.value = p.value, r.value = null, h(), await Pa(), e.value = "exporting", console.info(`${E} recording stopped`, { accumulatedMs: i.value }));
  }, M = async () => {
    console.info(`${E} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return o.value = await $a(t.value), e.value = "completed", console.info(`${E} export completed`, o.value), o.value;
    } catch (L) {
      throw e.value = "ready", o.value = null, L;
    }
  }, ee = async () => {
    console.info(`${E} cancel export requested`, { status: e.value }), await Ea(), e.value = "ready", o.value = null;
  }, b = async () => {
    console.info(`${E} cancel requested`, { status: e.value, elapsedMs: p.value }), h(), await La(), e.value = "selecting", r.value = null, i.value = 0, p.value = 0, o.value = null, console.info(`${E} canceled`);
  }, te = () => {
    console.info(`${E} reset session`), e.value = "selecting", r.value = null, i.value = 0, p.value = 0, o.value = null, s.value = "", t.value = rn();
  };
  return dn(() => {
    h();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: s,
    elapsedMs: p,
    refreshFfmpegStatus: S,
    begin: C,
    pause: U,
    resume: g,
    stop: w,
    exportFile: M,
    cancelExport: ee,
    cancel: b,
    reset: te
  };
}
const Ra = { class: "screen-recorder" }, Wa = ["onMousedown"], Fa = { class: "window-title" }, Aa = { class: "capture-viewport" }, ja = { class: "capture-frame" }, Ba = { class: "control-strip" }, Ha = { class: "control-group control-group--tools" }, Ga = { class: "tool-pill" }, Ua = ["title", "disabled"], Va = { class: "select-field" }, qa = ["disabled"], Ka = ["disabled"], Za = ["disabled"], Ja = { value: "high" }, Ya = { value: "standard" }, Xa = { value: "small" }, Qa = { class: "dimension-group optional-size" }, er = { class: "dimension" }, tr = ["value"], nr = { class: "dimension" }, or = ["value"], sr = { class: "control-group control-group--actions" }, ir = { class: "time" }, ar = { class: "button-label" }, rr = { class: "button-label" }, lr = { class: "save-status" }, ur = ["title"], cr = ["disabled"], dr = { class: "record-label" }, pr = {
  key: 0,
  class: "warning"
}, K = "[screen-recorder]", Ue = 80, hr = 468, fr = 300, ln = 420, un = 260, gr = 38, vr = 60, gt = 8, vt = 1, yr = /* @__PURE__ */ R({
  __name: "index",
  setup(e) {
    const t = fn(), n = O(null), o = O({ width: 0, height: 0 }), s = O(0), r = O(!1);
    let i = null, p = null, f = null;
    const v = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: h,
      settings: y,
      ffmpegStatus: S,
      result: C,
      elapsedMs: U,
      refreshFfmpegStatus: g,
      begin: w,
      pause: M,
      resume: ee,
      stop: b,
      exportFile: te,
      cancelExport: L,
      cancel: ge,
      reset: I
    } = Da(), rt = O(!1), ve = m(() => h.value === "recording" || h.value === "paused" || h.value === "exporting"), lt = m(() => y.value.audio && y.value.format === "mp4"), Te = m(() => lt.value && h.value === "recording"), Gn = m(() => {
      const c = Te.value && !r.value ? s.value : 0, a = (_, B) => Math.max(0.18, Math.min(1, _ + c * B)).toFixed(3);
      return {
        "--bar-1": a(0.28, 0.64),
        "--bar-2": a(0.42, 0.78),
        "--bar-3": a(0.34, 0.94),
        "--bar-4": a(0.22, 0.72)
      };
    }), Un = m(() => {
      if (y.value.format === "gif")
        return "GIF 不支持音频";
      if (r.value && y.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (C.value?.audioDevice)
        return `已录制音频：${C.value.audioDevice}`;
      if (C.value && !C.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (S.value?.available && !S.value.systemAudioAvailable) {
        const c = S.value.audioDevices?.join("、") || "无";
        return y.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${c}` : "录制音频已关闭";
      }
      return y.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Vn = m(() => {
      const c = Math.floor(U.value / 1e3), a = Math.floor(c / 60).toString().padStart(2, "0"), _ = (c % 60).toString().padStart(2, "0");
      return `${a}:${_}`;
    }), ye = async (c) => {
      try {
        await c();
      } catch (a) {
        console.error(`${K} action failed`, a), rt.value || ht.msg(a?.message || String(a), "error");
      }
    }, zt = (c) => Math.max(2, Math.floor(Math.round(c) / 2) * 2), Fe = async () => {
      const c = n.value;
      if (!c)
        throw new Error("录制视口尚未准备好");
      const a = c.getBoundingClientRect(), _ = await t.scaleFactor(), B = await t.innerPosition(), ne = zt(a.width * _), Q = zt(a.height * _);
      if (ne < Ue || Q < Ue)
        throw new Error("录制区域太小，请放大录制窗口");
      const Be = {
        x: a.left,
        y: a.top,
        width: ne / _,
        height: Q / _,
        screenX: Math.round(B.x + a.left * _),
        screenY: Math.round(B.y + a.top * _),
        physicalWidth: ne,
        physicalHeight: Q,
        scale: _
      };
      return console.info(`${K} capture region`, Be), Be;
    }, F = async () => {
      try {
        const c = await Fe();
        o.value = {
          width: c.physicalWidth,
          height: c.physicalHeight
        }, await ze({
          x: Math.round(c.x * c.scale),
          y: Math.round(c.y * c.scale),
          width: c.physicalWidth,
          height: c.physicalHeight
        }).catch(() => {
        });
      } catch {
        o.value = { width: 0, height: 0 }, await ze(null).catch(() => {
        });
      }
    }, Ae = async () => {
      await ze(null).catch(() => {
      });
    }, Pt = () => {
      window.setTimeout(() => {
        F();
      }, 120);
    }, qn = () => new Promise((c) => {
      requestAnimationFrame(() => requestAnimationFrame(() => c()));
    }), Kn = async () => {
      const [c, a] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: c.x,
        y: c.y,
        width: a.width,
        height: a.height
      };
    }, Zn = (c, a) => {
      const _ = Math.min(c.width, a.width), B = Math.min(c.height, a.height), ne = a.x + a.width - _, Q = a.y + a.height - B;
      return {
        x: Math.min(Math.max(c.x, a.x), ne),
        y: Math.min(Math.max(c.y, a.y), Q),
        width: _,
        height: B
      };
    }, Lt = async (c) => {
      await t.setSize(new ue(Math.round(c.width), Math.round(c.height))), await t.setPosition(new Z(Math.round(c.x), Math.round(c.y))), await qn();
    }, Et = async () => {
      f?.(), f = null, s.value = 0;
    }, je = async () => {
      if (!(!lt.value || f))
        try {
          console.info(`${K} backend audio meter listening`), f = await Ct("screen_recorder_audio_level", (c) => {
            if (!Te.value) {
              s.value = 0;
              return;
            }
            const a = Math.max(0, Math.min(1, Number(c.payload?.level ?? 0)));
            s.value = s.value * 0.38 + a * 0.62;
          }), r.value = !1;
        } catch (c) {
          console.error(`${K} audio meter failed`, c), r.value = !0;
        }
    }, Jn = async (c) => {
      c.button !== 0 || ve.value || (await Ae(), await t.startDragging().catch((a) => {
        ht.msg(a?.message || String(a), "error");
      }), Pt());
    }, Yn = async (c) => {
      ve.value || (await Ae(), await t.startResizeDragging(c).catch((a) => {
        ht.msg(a?.message || String(a), "error");
      }), Pt());
    }, Xn = () => ye(async () => {
      console.info(`${K} handle start`), await je(), await we(!0).catch(() => {
      }), await F(), await w(await Fe());
    }), Qn = () => ye(async () => {
      console.info(`${K} handle pause`), await M();
    }), eo = () => ye(async () => {
      console.info(`${K} handle resume`), await ee(await Fe());
    }), to = () => ye(async () => {
      console.info(`${K} handle stop/export`), await b(), s.value = 0, await te(), await F(), await we(!1).catch(() => {
      });
    }), no = () => ye(async () => {
      console.info(`${K} handle cancel export`), await L(), await F();
    }), oo = () => {
      Ae(), I(), h.value = "ready", C.value = null, we(!0).catch(() => {
      }), t.setSize(new Ye(hr, fr)), Pe(F), je();
    }, so = async (c) => {
      const a = await Po(c.screenX, c.screenY), _ = a?.scaleFactor || await t.scaleFactor(), B = Math.round((gt + vt) * _), ne = B, Q = Math.round((gr + gt + vt) * _), Be = Math.round((vr + gt + vt) * _), Rt = Math.round(ln * _), Wt = Math.round(un * _), z = {
        x: c.screenX - B,
        y: c.screenY - Q,
        width: Math.max(Rt, c.physicalWidth + B + ne),
        height: Math.max(Wt, c.physicalHeight + Q + Be)
      }, k = a ? {
        x: a.position.x,
        y: a.position.y,
        width: a.size.width,
        height: a.size.height
      } : null, uo = (() => {
        if (!k) return z;
        const W = k.x + k.width, J = k.y + k.height;
        if (z.x >= k.x && z.y >= k.y && z.x + z.width <= W && z.y + z.height <= J) return z;
        const se = Math.min(z.width, k.width), He = Math.min(z.height, k.height);
        return {
          x: Math.min(Math.max(z.x, k.x), W - se),
          y: Math.min(Math.max(z.y, k.y), J - He),
          width: se,
          height: He
        };
      })(), co = k ? z.x >= k.x && z.y >= k.y && z.x + z.width <= k.x + k.width && z.y + z.height <= k.y + k.height : !0;
      await Lt(uo), await Pe();
      const po = (() => {
        if (!k) return !1;
        const W = Math.max(4, Math.round(4 * _)), J = k.x + k.width, oe = k.y + k.height, se = c.screenX + c.physicalWidth, He = c.screenY + c.physicalHeight;
        return !co || c.screenX <= k.x + W || c.screenY <= k.y + W || se >= J - W || He >= oe - W;
      })();
      try {
        const [W, J] = await Promise.all([
          Fe(),
          Kn()
        ]), oe = {
          x: c.screenX - W.screenX,
          y: c.screenY - W.screenY,
          width: c.physicalWidth - W.physicalWidth,
          height: c.physicalHeight - W.physicalHeight
        }, se = {
          x: J.x + oe.x,
          y: J.y + oe.y,
          width: Math.max(Rt, J.width + oe.width),
          height: Math.max(Wt, J.height + oe.height)
        };
        await Lt(
          k && po ? Zn(se, k) : se
        );
      } catch (W) {
        console.warn(`${K} snap correction skipped`, W);
      }
      await F();
    }, io = () => ye(async () => {
      await Ae();
      const c = await Ia();
      await so(c);
    }), ao = async () => {
      await t.minimize();
    }, $t = async () => {
      rt.value = !0;
      try {
        h.value === "exporting" ? await L().catch(() => {
        }) : await ge(), await ze(null).catch(() => {
        }), await we(!1).catch(() => {
        });
      } catch {
      }
      await Ma();
    }, ro = async () => {
      C.value && (await F(), await u("open_file_with_default_app", { filePath: C.value.path }));
    }, lo = async () => {
      C.value && (await F(), await u("show_file_in_folder", { filePath: C.value.path }));
    }, Dt = (c) => {
      c.key === "Escape" && (c.preventDefault(), $t());
    };
    return ot(async () => {
      h.value = "ready", await t.setMinSize(new Ye(ln, un)).catch(() => {
      }), await we(!0).catch(() => {
      }), await g().catch(() => {
      }), await Pe(), await F(), await je(), await Pe(), await t.emit("screen_recorder_ready"), n.value && (i = new ResizeObserver(() => {
        F();
      }), i.observe(n.value)), p = await t.onMoved(() => {
        F();
      }).catch(() => null), window.addEventListener("resize", F), window.addEventListener("keydown", Dt);
    }), Ce(lt, (c) => {
      c ? je() : Et();
    }), Ce(h, (c) => {
      c !== "recording" && (s.value = 0);
    }), dn(() => {
      i?.disconnect(), p?.(), window.removeEventListener("resize", F), window.removeEventListener("keydown", Dt), ze(null).catch(() => {
      }), we(!1).catch(() => {
      }), Et();
    }), (c, a) => (x(), N("div", Ra, [
      d(
        "div",
        {
          class: P(["recorder-shell", { recording: l(h) === "recording", paused: l(h) === "paused" }])
        },
        [
          (x(), N(
            _e,
            null,
            Co(v, (_) => d("span", {
              key: _.className,
              class: P(["resize-zone", _.className]),
              onMousedown: Le((B) => Yn(_.direction), ["prevent"])
            }, null, 42, Wa)),
            64
            /* STABLE_FRAGMENT */
          )),
          d(
            "header",
            {
              class: "title-bar",
              onMousedown: Jn
            },
            [
              d(
                "span",
                Fa,
                D(c.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              d(
                "div",
                {
                  class: "window-actions",
                  onMousedown: a[0] || (a[0] = Le(() => {
                  }, ["stop"]))
                },
                [
                  d("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: ao
                  }, [
                    T(l(Wo), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  d("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: $t
                  }, [
                    T(l(Ro), {
                      class: "title-icon",
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            32
            /* NEED_HYDRATION */
          ),
          d("main", Aa, [
            a[9] || (a[9] = d(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            a[10] || (a[10] = d(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            a[11] || (a[11] = d(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            a[12] || (a[12] = d(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            d("div", ja, [
              d(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: n,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              a[5] || (a[5] = d(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              a[6] || (a[6] = d(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              a[7] || (a[7] = d(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              a[8] || (a[8] = d(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          d("footer", Ba, [
            d("div", Ha, [
              d("div", Ga, [
                l(h) === "ready" || l(h) === "completed" ? (x(), N(
                  "button",
                  {
                    key: 0,
                    class: "icon-control snap-control",
                    title: "拖到目标窗口并松开以对齐",
                    "aria-label": "对齐目标窗口",
                    onMousedown: Le(io, ["prevent"])
                  },
                  [
                    T(l(Fo), {
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ],
                  32
                  /* NEED_HYDRATION */
                )) : X("v-if", !0),
                d("button", {
                  class: P(["audio-meter", { active: Te.value && s.value > 0.03, metering: Te.value && !r.value, muted: !Te.value || r.value }]),
                  title: Un.value,
                  "aria-label": "系统声音录制状态",
                  disabled: l(h) === "exporting" || l(y).format === "gif"
                }, [
                  d(
                    "span",
                    {
                      class: "audio-bars",
                      style: $e(Gn.value)
                    },
                    a[13] || (a[13] = [
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      )
                    ]),
                    4
                    /* STYLE */
                  )
                ], 10, Ua)
              ]),
              d("label", Va, [
                le(d("select", {
                  "onUpdate:modelValue": a[1] || (a[1] = (_) => l(y).fps = _),
                  disabled: ve.value
                }, a[14] || (a[14] = [
                  d(
                    "option",
                    { value: 15 },
                    "15",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 24 },
                    "24",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 30 },
                    "30",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 60 },
                    "60",
                    -1
                    /* HOISTED */
                  )
                ]), 8, qa), [
                  [ut, l(y).fps]
                ]),
                a[15] || (a[15] = d(
                  "span",
                  { class: "unit" },
                  "fps",
                  -1
                  /* HOISTED */
                ))
              ]),
              le(d("select", {
                "onUpdate:modelValue": a[2] || (a[2] = (_) => l(y).format = _),
                class: "format-select optional-format",
                disabled: ve.value
              }, a[16] || (a[16] = [
                d(
                  "option",
                  { value: "mp4" },
                  "MP4",
                  -1
                  /* HOISTED */
                ),
                d(
                  "option",
                  { value: "gif" },
                  "GIF",
                  -1
                  /* HOISTED */
                )
              ]), 8, Ka), [
                [ut, l(y).format]
              ]),
              le(d("select", {
                "onUpdate:modelValue": a[3] || (a[3] = (_) => l(y).quality = _),
                class: "quality-select optional-quality",
                disabled: ve.value
              }, [
                d(
                  "option",
                  Ja,
                  D(c.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                d(
                  "option",
                  Ya,
                  D(c.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                d(
                  "option",
                  Xa,
                  D(c.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, Za), [
                [ut, l(y).quality]
              ]),
              d("div", Qa, [
                d("label", er, [
                  d("input", {
                    value: o.value.width,
                    readonly: ""
                  }, null, 8, tr)
                ]),
                a[17] || (a[17] = d(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                d("label", nr, [
                  d("input", {
                    value: o.value.height,
                    readonly: ""
                  }, null, 8, or)
                ]),
                a[18] || (a[18] = d(
                  "span",
                  { class: "unit" },
                  "px",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            d("div", sr, [
              l(h) === "recording" || l(h) === "paused" ? (x(), N(
                _e,
                { key: 0 },
                [
                  d(
                    "span",
                    ir,
                    D(Vn.value),
                    1
                    /* TEXT */
                  ),
                  d("button", {
                    class: "control-button",
                    onClick: a[4] || (a[4] = (_) => l(h) === "paused" ? eo() : Qn())
                  }, [
                    d(
                      "span",
                      ar,
                      D(l(h) === "paused" ? c.$t("screenRecorder.resume") : c.$t("screenRecorder.pause")),
                      1
                      /* TEXT */
                    )
                  ]),
                  d("button", {
                    class: "control-button danger",
                    onClick: to
                  }, [
                    d(
                      "span",
                      rr,
                      D(c.$t("screenRecorder.stop")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : l(h) === "exporting" ? (x(), N(
                _e,
                { key: 1 },
                [
                  d(
                    "span",
                    lr,
                    D(c.$t("screenRecorder.exporting") || "正在导出..."),
                    1
                    /* TEXT */
                  ),
                  d("button", {
                    class: "control-button danger",
                    title: "取消导出",
                    onClick: no
                  }, a[19] || (a[19] = [
                    d(
                      "span",
                      { class: "button-label" },
                      "取消",
                      -1
                      /* HOISTED */
                    )
                  ]))
                ],
                64
                /* STABLE_FRAGMENT */
              )) : l(h) === "completed" && l(C) ? (x(), N(
                _e,
                { key: 2 },
                [
                  d("span", {
                    class: "save-status optional-save-status",
                    title: l(C).path
                  }, D(l(C).hasAudio ? "已保存·有声" : "已保存·无声"), 9, ur),
                  d("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: ro
                  }, a[20] || (a[20] = [
                    d(
                      "span",
                      { class: "button-label" },
                      "打开",
                      -1
                      /* HOISTED */
                    )
                  ])),
                  d("button", {
                    class: "control-button",
                    title: "打开所在文件夹",
                    onClick: lo
                  }, a[21] || (a[21] = [
                    d(
                      "span",
                      { class: "button-label" },
                      "文件夹",
                      -1
                      /* HOISTED */
                    )
                  ])),
                  d("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: oo
                  }, a[22] || (a[22] = [
                    d(
                      "span",
                      { class: "button-label" },
                      "重录",
                      -1
                      /* HOISTED */
                    )
                  ]))
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (x(), N("button", {
                key: 3,
                class: "record-button",
                disabled: l(S)?.available === !1 || o.value.width < Ue || o.value.height < Ue,
                onClick: Xn
              }, [
                a[23] || (a[23] = d(
                  "span",
                  { class: "record-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                d(
                  "span",
                  dr,
                  D(c.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, cr))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      l(S) && !l(S).available ? (x(), N(
        "p",
        pr,
        D(l(S).message || c.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : X("v-if", !0)
    ]));
  }
}), mr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, wr = /* @__PURE__ */ mr(yr, [["__scopeId", "data-v-270c4d50"]]), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Cr as activate
};
