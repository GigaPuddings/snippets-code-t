import { inject as Z, createVNode as M, getCurrentInstance as oe, ref as k, computed as y, unref as u, readonly as Fn, getCurrentScope as Wn, onScopeDispose as An, onMounted as je, nextTick as Ne, watch as Be, isRef as jn, warn as Bn, provide as Hn, defineComponent as P, createElementBlock as I, openBlock as b, mergeProps as Un, renderSlot as ie, createElementVNode as c, normalizeClass as N, Transition as ot, withCtx as q, withDirectives as ae, normalizeStyle as De, createTextVNode as jt, toDisplayString as $, vShow as Le, shallowReactive as Vn, createBlock as U, createCommentVNode as V, resolveDynamicComponent as Bt, Fragment as ve, withModifiers as ye, isVNode as _e, render as Me, onUnmounted as Ht, renderList as Gn, vModelSelect as gt } from "vue";
const Ma = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Da)
  });
};
function Kn(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Zn(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var ze;
const R = "__TAURI_TO_IPC_KEY__";
function qn(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function a(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Jn {
  get rid() {
    return Kn(this, ze, "f");
  }
  constructor(t) {
    ze.set(this, void 0), Zn(this, ze, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return a("plugin:resources|close", {
      rid: this.rid
    });
  }
}
ze = /* @__PURE__ */ new WeakMap();
class me {
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
    return new se(this.width * t, this.height * t);
  }
  [R]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[R]();
  }
}
class se {
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
    return new me(this.width / t, this.height / t);
  }
  [R]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[R]();
  }
}
class ne {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof me ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof se ? this.size : this.size.toPhysical(t);
  }
  [R]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[R]();
  }
}
class Ut {
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
    return new B(this.x * t, this.y * t);
  }
  [R]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[R]();
  }
}
class B {
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
    return new Ut(this.x / t, this.y / t);
  }
  [R]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[R]();
  }
}
class Oe {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Ut ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof B ? this.position : this.position.toPhysical(t);
  }
  [R]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[R]();
  }
}
var D;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(D || (D = {}));
async function Vt(e, t) {
  await a("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Gt(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return a("plugin:event|listen", {
    event: e,
    target: o,
    handler: qn(t)
  }).then((r) => async () => Vt(e, r));
}
async function Yn(e, t, n) {
  return Gt(e, (s) => {
    Vt(e, s.id), t(s);
  }, n);
}
async function Qn(e, t) {
  await a("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Xn(e, t, n) {
  await a("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class we extends Jn {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, s) {
    return a("plugin:image|new", {
      rgba: $e(t),
      width: n,
      height: s
    }).then((o) => new we(o));
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
    return a("plugin:image|from_bytes", {
      bytes: $e(t)
    }).then((n) => new we(n));
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
    return a("plugin:image|from_path", { path: t }).then((n) => new we(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return a("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return a("plugin:image|size", { rid: this.rid });
  }
}
function $e(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof we ? e.rid : e;
}
var et;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(et || (et = {}));
class es {
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
var vt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(vt || (vt = {}));
function Kt() {
  return new Zt(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Je() {
  return a("plugin:window|get_all_windows").then((e) => e.map((t) => new Zt(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ye = ["tauri://created", "tauri://error"];
class Zt {
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
    var s;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || a("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (s = n.parent) === null || s === void 0 ? void 0 : s.label,
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
    return (n = (await Je()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Kt();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Je();
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
    for (const t of await Je())
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : Gt(t, n, {
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : Yn(t, n, {
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
    if (Ye.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Qn(t, n);
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
  async emitTo(t, n, s) {
    if (Ye.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Xn(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Ye.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return a("plugin:window|scale_factor", {
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
    return a("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new B(t));
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
    return a("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new B(t));
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
    return a("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new se(t));
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
    return a("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new se(t));
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
    return a("plugin:window|is_fullscreen", {
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
    return a("plugin:window|is_minimized", {
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
    return a("plugin:window|is_maximized", {
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
    return a("plugin:window|is_focused", {
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
    return a("plugin:window|is_decorated", {
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
    return a("plugin:window|is_resizable", {
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
    return a("plugin:window|is_maximizable", {
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
    return a("plugin:window|is_minimizable", {
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
    return a("plugin:window|is_closable", {
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
    return a("plugin:window|is_visible", {
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
    return a("plugin:window|title", {
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
    return a("plugin:window|theme", {
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
    return a("plugin:window|is_always_on_top", {
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
    return a("plugin:window|center", {
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
    return t && (t === et.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), a("plugin:window|request_user_attention", {
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
    return a("plugin:window|set_resizable", {
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
    return a("plugin:window|set_enabled", {
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
    return a("plugin:window|is_enabled", {
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
    return a("plugin:window|set_maximizable", {
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
    return a("plugin:window|set_minimizable", {
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
    return a("plugin:window|set_closable", {
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
    return a("plugin:window|set_title", {
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
    return a("plugin:window|maximize", {
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
    return a("plugin:window|unmaximize", {
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
    return a("plugin:window|toggle_maximize", {
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
    return a("plugin:window|minimize", {
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
    return a("plugin:window|unminimize", {
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
    return a("plugin:window|show", {
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
    return a("plugin:window|hide", {
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
    return a("plugin:window|close", {
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
    return a("plugin:window|destroy", {
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
    return a("plugin:window|set_decorations", {
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
    return a("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return a("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return a("plugin:window|set_effects", {
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
    return a("plugin:window|set_always_on_top", {
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
    return a("plugin:window|set_always_on_bottom", {
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
    return a("plugin:window|set_content_protected", {
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
    return a("plugin:window|set_size", {
      label: this.label,
      value: t instanceof ne ? t : new ne(t)
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
    return a("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof ne ? t : t ? new ne(t) : null
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
    return a("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof ne ? t : t ? new ne(t) : null
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
    function n(s) {
      return s ? { Logical: s } : null;
    }
    return a("plugin:window|set_size_constraints", {
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
    return a("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Oe ? t : new Oe(t)
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
    return a("plugin:window|set_fullscreen", {
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
    return a("plugin:window|set_focus", {
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
    return a("plugin:window|set_icon", {
      label: this.label,
      value: $e(t)
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
    return a("plugin:window|set_skip_taskbar", {
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
    return a("plugin:window|set_cursor_grab", {
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
    return a("plugin:window|set_cursor_visible", {
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
    return a("plugin:window|set_cursor_icon", {
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
    return a("plugin:window|set_background_color", { color: t });
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
    return a("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Oe ? t : new Oe(t)
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
    return a("plugin:window|set_ignore_cursor_events", {
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
    return a("plugin:window|start_dragging", {
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
    return a("plugin:window|start_resize_dragging", {
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
    return a("plugin:window|set_badge_count", {
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
    return a("plugin:window|set_badge_label", {
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
    return a("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? $e(t) : void 0
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
    return a("plugin:window|set_progress_bar", {
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
    return a("plugin:window|set_visible_on_all_workspaces", {
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
    return a("plugin:window|set_title_bar_style", {
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
    return a("plugin:window|set_theme", {
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
    return this.listen(D.WINDOW_RESIZED, (n) => {
      n.payload = new se(n.payload), t(n);
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
    return this.listen(D.WINDOW_MOVED, (n) => {
      n.payload = new B(n.payload), t(n);
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
    return this.listen(D.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new es(n);
      await t(s), s.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(D.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new B(i.payload.position)
        }
      });
    }), s = await this.listen(D.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new B(i.payload.position)
        }
      });
    }), o = await this.listen(D.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new B(i.payload.position)
        }
      });
    }), r = await this.listen(D.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), o(), s(), r();
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
    const n = await this.listen(D.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(D.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
    });
    return () => {
      n(), s();
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
    return this.listen(D.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(D.WINDOW_THEME_CHANGED, t);
  }
}
var yt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(yt || (yt = {}));
var mt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(mt || (mt = {}));
var wt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(wt || (wt = {}));
function ts(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new B(e.position),
    size: new se(e.size)
  };
}
async function ns(e, t) {
  return a("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(ts);
}
var ss = {
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
function os() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function is(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], r = t.theme || n.theme;
  switch (r) {
    case "outline":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("none"), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.multiColor.outFillColor), o.push(typeof s[2] == "string" ? s[2] : n.colors.multiColor.innerStrokeColor), o.push(typeof s[3] == "string" ? s[3] : n.colors.multiColor.innerFillColor);
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
var as = Symbol("icon-context");
function qt(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var i = os(), l = Z(as, ss);
      return function() {
        var d = r.size, f = r.strokeWidth, p = r.strokeLinecap, w = r.strokeLinejoin, x = r.theme, T = r.fill, F = r.spin, g = is(i, {
          size: d,
          strokeWidth: f,
          strokeLinecap: p,
          strokeLinejoin: w,
          theme: x,
          fill: T
        }, l), m = [l.prefix + "-icon"];
        return m.push(l.prefix + "-icon-" + e), F && m.push(l.prefix + "-icon-spin"), M("span", {
          class: m.join(" ")
        }, [n(g)]);
      };
    }
  };
  return s;
}
const rs = qt("close-small", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ls = qt("minus", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jt = Symbol(), Pe = "el", us = "is-", K = (e, t, n, s, o) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), o && (r += `--${o}`), r;
}, Yt = Symbol("namespaceContextKey"), cs = (e) => {
  const t = e || (oe() ? Z(Yt, k(Pe)) : k(Pe));
  return y(() => u(t) || Pe);
}, it = (e, t) => {
  const n = cs(t);
  return {
    namespace: n,
    b: (g = "") => K(n.value, e, g, "", ""),
    e: (g) => g ? K(n.value, e, "", g, "") : "",
    m: (g) => g ? K(n.value, e, "", "", g) : "",
    be: (g, m) => g && m ? K(n.value, e, g, m, "") : "",
    em: (g, m) => g && m ? K(n.value, e, "", g, m) : "",
    bm: (g, m) => g && m ? K(n.value, e, g, "", m) : "",
    bem: (g, m, S) => g && m && S ? K(n.value, e, g, m, S) : "",
    is: (g, ...m) => {
      const S = m.length >= 1 ? m[0] : !0;
      return g && S ? `${us}${g}` : "";
    },
    cssVar: (g) => {
      const m = {};
      for (const S in g)
        g[S] && (m[`--${n.value}-${S}`] = g[S]);
      return m;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const m = {};
      for (const S in g)
        g[S] && (m[`--${n.value}-${e}-${S}`] = g[S]);
      return m;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ds = Object.prototype.hasOwnProperty, _t = (e, t) => ds.call(e, t), be = (e) => typeof e == "function", J = (e) => typeof e == "string", Qt = (e) => e !== null && typeof e == "object";
var ps = typeof global == "object" && global && global.Object === Object && global, hs = typeof self == "object" && self && self.Object === Object && self, at = ps || hs || Function("return this")(), re = at.Symbol, Xt = Object.prototype, fs = Xt.hasOwnProperty, gs = Xt.toString, fe = re ? re.toStringTag : void 0;
function vs(e) {
  var t = fs.call(e, fe), n = e[fe];
  try {
    e[fe] = void 0;
    var s = !0;
  } catch {
  }
  var o = gs.call(e);
  return s && (t ? e[fe] = n : delete e[fe]), o;
}
var ys = Object.prototype, ms = ys.toString;
function ws(e) {
  return ms.call(e);
}
var _s = "[object Null]", bs = "[object Undefined]", bt = re ? re.toStringTag : void 0;
function en(e) {
  return e == null ? e === void 0 ? bs : _s : bt && bt in Object(e) ? vs(e) : ws(e);
}
function Cs(e) {
  return e != null && typeof e == "object";
}
var Ss = "[object Symbol]";
function rt(e) {
  return typeof e == "symbol" || Cs(e) && en(e) == Ss;
}
function Os(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var lt = Array.isArray, Ct = re ? re.prototype : void 0, St = Ct ? Ct.toString : void 0;
function tn(e) {
  if (typeof e == "string")
    return e;
  if (lt(e))
    return Os(e, tn) + "";
  if (rt(e))
    return St ? St.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function nn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ks = "[object AsyncFunction]", xs = "[object Function]", Is = "[object GeneratorFunction]", Ts = "[object Proxy]";
function Ns(e) {
  if (!nn(e))
    return !1;
  var t = en(e);
  return t == xs || t == Is || t == ks || t == Ts;
}
var Qe = at["__core-js_shared__"], Ot = function() {
  var e = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zs(e) {
  return !!Ot && Ot in e;
}
var Ps = Function.prototype, Es = Ps.toString;
function Ds(e) {
  if (e != null) {
    try {
      return Es.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ls = /[\\^$.*+?()[\]{}|]/g, Ms = /^\[object .+?Constructor\]$/, $s = Function.prototype, Rs = Object.prototype, Fs = $s.toString, Ws = Rs.hasOwnProperty, As = RegExp(
  "^" + Fs.call(Ws).replace(Ls, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function js(e) {
  if (!nn(e) || zs(e))
    return !1;
  var t = Ns(e) ? As : Ms;
  return t.test(Ds(e));
}
function Bs(e, t) {
  return e?.[t];
}
function sn(e, t) {
  var n = Bs(e, t);
  return js(n) ? n : void 0;
}
function Hs(e, t) {
  return e === t || e !== e && t !== t;
}
var Us = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vs = /^\w*$/;
function Gs(e, t) {
  if (lt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || rt(e) ? !0 : Vs.test(e) || !Us.test(e) || t != null && e in Object(t);
}
var Ce = sn(Object, "create");
function Ks() {
  this.__data__ = Ce ? Ce(null) : {}, this.size = 0;
}
function Zs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qs = "__lodash_hash_undefined__", Js = Object.prototype, Ys = Js.hasOwnProperty;
function Qs(e) {
  var t = this.__data__;
  if (Ce) {
    var n = t[e];
    return n === qs ? void 0 : n;
  }
  return Ys.call(t, e) ? t[e] : void 0;
}
var Xs = Object.prototype, eo = Xs.hasOwnProperty;
function to(e) {
  var t = this.__data__;
  return Ce ? t[e] !== void 0 : eo.call(t, e);
}
var no = "__lodash_hash_undefined__";
function so(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ce && t === void 0 ? no : t, this;
}
function Y(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Y.prototype.clear = Ks;
Y.prototype.delete = Zs;
Y.prototype.get = Qs;
Y.prototype.has = to;
Y.prototype.set = so;
function oo() {
  this.__data__ = [], this.size = 0;
}
function He(e, t) {
  for (var n = e.length; n--; )
    if (Hs(e[n][0], t))
      return n;
  return -1;
}
var io = Array.prototype, ao = io.splice;
function ro(e) {
  var t = this.__data__, n = He(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : ao.call(t, n, 1), --this.size, !0;
}
function lo(e) {
  var t = this.__data__, n = He(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function uo(e) {
  return He(this.__data__, e) > -1;
}
function co(e, t) {
  var n = this.__data__, s = He(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ce.prototype.clear = oo;
ce.prototype.delete = ro;
ce.prototype.get = lo;
ce.prototype.has = uo;
ce.prototype.set = co;
var po = sn(at, "Map");
function ho() {
  this.size = 0, this.__data__ = {
    hash: new Y(),
    map: new (po || ce)(),
    string: new Y()
  };
}
function fo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ue(e, t) {
  var n = e.__data__;
  return fo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function go(e) {
  var t = Ue(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function vo(e) {
  return Ue(this, e).get(e);
}
function yo(e) {
  return Ue(this, e).has(e);
}
function mo(e, t) {
  var n = Ue(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function X(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
X.prototype.clear = ho;
X.prototype.delete = go;
X.prototype.get = vo;
X.prototype.has = yo;
X.prototype.set = mo;
var wo = "Expected a function";
function ut(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(wo);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], r = n.cache;
    if (r.has(o))
      return r.get(o);
    var i = e.apply(this, s);
    return n.cache = r.set(o, i) || r, i;
  };
  return n.cache = new (ut.Cache || X)(), n;
}
ut.Cache = X;
var _o = 500;
function bo(e) {
  var t = ut(e, function(s) {
    return n.size === _o && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Co = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, So = /\\(\\)?/g, Oo = bo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Co, function(n, s, o, r) {
    t.push(o ? r.replace(So, "$1") : s || n);
  }), t;
});
function ko(e) {
  return e == null ? "" : tn(e);
}
function xo(e, t) {
  return lt(e) ? e : Gs(e, t) ? [e] : Oo(ko(e));
}
function Io(e) {
  if (typeof e == "string" || rt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function To(e, t) {
  t = xo(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Io(t[n++])];
  return n && n == s ? e : void 0;
}
function No(e, t, n) {
  var s = e == null ? void 0 : To(e, t);
  return s === void 0 ? n : s;
}
function zo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const on = (e) => e === void 0, kt = (e) => typeof e == "boolean", Q = (e) => typeof e == "number", tt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Po = (e) => J(e) ? !Number.isNaN(Number(e)) : !1;
var xt;
const ee = typeof window < "u", Eo = (e) => typeof e == "string", Do = () => {
};
ee && ((xt = window?.navigator) != null && xt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ct(e) {
  return typeof e == "function" ? e() : u(e);
}
function Lo(e) {
  return e;
}
function dt(e) {
  return Wn() ? (An(e), !0) : !1;
}
function Mo(e, t = !0) {
  oe() ? je(e) : t ? e() : Ne(e);
}
function an(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = k(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), r = null);
  }
  function l() {
    o.value = !1, i();
  }
  function d(...f) {
    i(), o.value = !0, r = setTimeout(() => {
      o.value = !1, r = null, e(...f);
    }, ct(t));
  }
  return s && (o.value = !0, ee && d()), dt(l), {
    isPending: Fn(o),
    start: d,
    stop: l
  };
}
function rn(e) {
  var t;
  const n = ct(e);
  return (t = n?.$el) != null ? t : n;
}
const ln = ee ? window : void 0;
function un(...e) {
  let t, n, s, o;
  if (Eo(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = ln) : [t, n, s, o] = e, !t)
    return Do;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((p) => p()), r.length = 0;
  }, l = (p, w, x, T) => (p.addEventListener(w, x, T), () => p.removeEventListener(w, x, T)), d = Be(() => [rn(t), ct(o)], ([p, w]) => {
    i(), p && r.push(...n.flatMap((x) => s.map((T) => l(p, x, T, w))));
  }, { immediate: !0, flush: "post" }), f = () => {
    d(), i();
  };
  return dt(f), f;
}
function $o(e, t = !1) {
  const n = k(), s = () => n.value = !!e();
  return s(), Mo(s, t), n;
}
const It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Tt = "__vueuse_ssr_handlers__";
It[Tt] = It[Tt] || {};
var Nt = Object.getOwnPropertySymbols, Ro = Object.prototype.hasOwnProperty, Fo = Object.prototype.propertyIsEnumerable, Wo = (e, t) => {
  var n = {};
  for (var s in e)
    Ro.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && Nt)
    for (var s of Nt(e))
      t.indexOf(s) < 0 && Fo.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ao(e, t, n = {}) {
  const s = n, { window: o = ln } = s, r = Wo(s, ["window"]);
  let i;
  const l = $o(() => o && "ResizeObserver" in o), d = () => {
    i && (i.disconnect(), i = void 0);
  }, f = Be(() => rn(e), (w) => {
    d(), l.value && o && w && (i = new ResizeObserver(t), i.observe(w, r));
  }, { immediate: !0, flush: "post" }), p = () => {
    d(), f();
  };
  return dt(p), {
    isSupported: l,
    stop: p
  };
}
var zt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(zt || (zt = {}));
var jo = Object.defineProperty, Pt = Object.getOwnPropertySymbols, Bo = Object.prototype.hasOwnProperty, Ho = Object.prototype.propertyIsEnumerable, Et = (e, t, n) => t in e ? jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Uo = (e, t) => {
  for (var n in t || (t = {}))
    Bo.call(t, n) && Et(e, n, t[n]);
  if (Pt)
    for (var n of Pt(t))
      Ho.call(t, n) && Et(e, n, t[n]);
  return e;
};
const Vo = {
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
Uo({
  linear: Lo
}, Vo);
const Dt = {
  current: 0
}, Lt = k(0), cn = 2e3, Mt = Symbol("elZIndexContextKey"), dn = Symbol("zIndexContextKey"), Go = (e) => {
  const t = oe() ? Z(Mt, Dt) : Dt, n = e || (oe() ? Z(dn, void 0) : void 0), s = y(() => {
    const i = u(n);
    return Q(i) ? i : cn;
  }), o = y(() => s.value + Lt.value), r = () => (t.current++, Lt.value = t.current, o.value);
  return !ee && Z(Mt), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: r
  };
};
var Ko = {
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
const Zo = (e) => (t, n) => qo(t, n, u(e)), qo = (e, t, n) => No(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var r;
  return `${(r = t?.[o]) != null ? r : `{${o}}`}`;
}), Jo = (e) => {
  const t = y(() => u(e).name), n = jn(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: Zo(e)
  };
}, pn = Symbol("localeContextKey"), Yo = (e) => {
  const t = e || Z(pn, k());
  return Jo(y(() => t.value || Ko));
}, hn = "__epPropKey", L = (e) => e, Qo = (e) => Qt(e) && !!e[hn], fn = (e, t) => {
  if (!Qt(e) || Qo(e))
    return e;
  const { values: n, required: s, default: o, type: r, validator: i } = e, d = {
    type: r,
    required: !!s,
    validator: n || i ? (f) => {
      let p = !1, w = [];
      if (n && (w = Array.from(n), _t(e, "default") && w.push(o), p || (p = w.includes(f))), i && (p || (p = i(f))), !p && w.length > 0) {
        const x = [...new Set(w)].map((T) => JSON.stringify(T)).join(", ");
        Bn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${x}], got value ${JSON.stringify(f)}.`);
      }
      return p;
    } : void 0,
    [hn]: !0
  };
  return _t(e, "default") && (d.default = o), d;
}, de = (e) => zo(Object.entries(e).map(([t, n]) => [
  t,
  fn(n, t)
])), Xo = ["", "default", "small", "large"], ei = fn({
  type: String,
  values: Xo,
  required: !1
}), ti = Symbol("size"), ni = Symbol("emptyValuesContextKey"), si = de({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => be(e) ? !e() : !e
  }
}), $t = (e) => Object.keys(e), Re = k();
function gn(e, t = void 0) {
  return oe() ? Z(Jt, Re) : Re;
}
function vn(e, t) {
  const n = gn(), s = it(e, y(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Pe;
  })), o = Yo(y(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), r = Go(y(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || cn;
  })), i = y(() => {
    var l;
    return u(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return yn(y(() => u(n) || {})), {
    ns: s,
    locale: o,
    zIndex: r,
    size: i
  };
}
const yn = (e, t, n = !1) => {
  var s;
  const o = !!oe(), r = o ? gn() : void 0, i = (s = void 0) != null ? s : o ? Hn : void 0;
  if (!i)
    return;
  const l = y(() => {
    const d = u(e);
    return r?.value ? oi(r.value, d) : d;
  });
  return i(Jt, l), i(pn, y(() => l.value.locale)), i(Yt, y(() => l.value.namespace)), i(dn, y(() => l.value.zIndex)), i(ti, {
    size: y(() => l.value.size || "")
  }), i(ni, y(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !Re.value) && (Re.value = l.value), l;
}, oi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...$t(e), ...$t(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var Ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function nt(e, t = "px") {
  if (!e)
    return "";
  if (Q(e) || Po(e))
    return `${e}${t}`;
  if (J(e))
    return e;
}
const mn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), wn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ii = de({
  size: {
    type: L([Number, String])
  },
  color: {
    type: String
  }
}), ai = P({
  name: "ElIcon",
  inheritAttrs: !1
}), ri = /* @__PURE__ */ P({
  ...ai,
  props: ii,
  setup(e) {
    const t = e, n = it("icon"), s = y(() => {
      const { size: o, color: r } = t;
      return !o && !r ? {} : {
        fontSize: on(o) ? void 0 : nt(o),
        "--color": r
      };
    });
    return (o, r) => (b(), I("i", Un({
      class: u(n).b(),
      style: u(s)
    }, o.$attrs), [
      ie(o.$slots, "default")
    ], 16));
  }
});
var li = /* @__PURE__ */ Ve(ri, [["__file", "icon.vue"]]);
const Fe = mn(li);
/*! Element Plus Icons Vue v2.3.1 */
var ui = /* @__PURE__ */ P({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), ci = ui, di = /* @__PURE__ */ P({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), _n = di, pi = /* @__PURE__ */ P({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), hi = pi, fi = /* @__PURE__ */ P({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), gi = fi, vi = /* @__PURE__ */ P({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (b(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), yi = vi;
const bn = L([
  String,
  Object,
  Function
]), mi = {
  Close: _n
}, wi = {
  Close: _n
}, We = {
  success: gi,
  warning: yi,
  error: ci,
  info: hi
}, _i = (e) => e, Ee = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, bi = de({
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
    type: L([String, Object, Array])
  },
  offset: {
    type: L(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ci = P({
  name: "ElBadge"
}), Si = /* @__PURE__ */ P({
  ...Ci,
  props: bi,
  setup(e, { expose: t }) {
    const n = e, s = it("badge"), o = y(() => n.isDot ? "" : Q(n.value) && Q(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = y(() => {
      var i, l, d, f, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: nt(-((l = (i = n.offset) == null ? void 0 : i[0]) != null ? l : 0)),
          marginTop: nt((f = (d = n.offset) == null ? void 0 : d[1]) != null ? f : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: o
    }), (i, l) => (b(), I("div", {
      class: N(u(s).b())
    }, [
      ie(i.$slots, "default"),
      M(ot, {
        name: `${u(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: q(() => [
          ae(c("sup", {
            class: N([
              u(s).e("content"),
              u(s).em("content", i.type),
              u(s).is("fixed", !!i.$slots.default),
              u(s).is("dot", i.isDot),
              u(s).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: De(u(r))
          }, [
            ie(i.$slots, "content", { value: u(o) }, () => [
              jt($(u(o)), 1)
            ])
          ], 6), [
            [Le, !i.hidden && (u(o) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Oi = /* @__PURE__ */ Ve(Si, [["__file", "badge.vue"]]);
const ki = mn(Oi), xi = de({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: L(Object)
  },
  size: ei,
  button: {
    type: L(Object)
  },
  experimentalFeatures: {
    type: L(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: L(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...si
}), A = {};
P({
  name: "ElConfigProvider",
  props: xi,
  setup(e, { slots: t }) {
    Be(() => e.message, (s) => {
      Object.assign(A, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = yn(e);
    return () => ie(t, "default", { config: n?.value });
  }
});
const Cn = ["success", "info", "warning", "error"], z = _i({
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
  appendTo: ee ? document.body : void 0
}), Ii = de({
  customClass: {
    type: String,
    default: z.customClass
  },
  center: {
    type: Boolean,
    default: z.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: z.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: z.duration
  },
  icon: {
    type: bn,
    default: z.icon
  },
  id: {
    type: String,
    default: z.id
  },
  message: {
    type: L([
      String,
      Object,
      Function
    ]),
    default: z.message
  },
  onClose: {
    type: L(Function),
    default: z.onClose
  },
  showClose: {
    type: Boolean,
    default: z.showClose
  },
  type: {
    type: String,
    values: Cn,
    default: z.type
  },
  plain: {
    type: Boolean,
    default: z.plain
  },
  offset: {
    type: Number,
    default: z.offset
  },
  zIndex: {
    type: Number,
    default: z.zIndex
  },
  grouping: {
    type: Boolean,
    default: z.grouping
  },
  repeatNum: {
    type: Number,
    default: z.repeatNum
  }
}), Ti = {
  destroy: () => !0
}, j = Vn([]), Ni = (e) => {
  const t = j.findIndex((o) => o.id === e), n = j[t];
  let s;
  return t > 0 && (s = j[t - 1]), { current: n, prev: s };
}, zi = (e) => {
  const { prev: t } = Ni(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Pi = (e, t) => j.findIndex((s) => s.id === e) > 0 ? 16 : t, Ei = P({
  name: "ElMessage"
}), Di = /* @__PURE__ */ P({
  ...Ei,
  props: Ii,
  emits: Ti,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = wi, { ns: o, zIndex: r } = vn("message"), { currentZIndex: i, nextZIndex: l } = r, d = k(), f = k(!1), p = k(0);
    let w;
    const x = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), T = y(() => {
      const C = n.type;
      return { [o.bm("icon", C)]: C && We[C] };
    }), F = y(() => n.icon || We[n.type] || ""), g = y(() => zi(n.id)), m = y(() => Pi(n.id, n.offset) + g.value), S = y(() => p.value + m.value), G = y(() => ({
      top: `${m.value}px`,
      zIndex: i.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: w } = an(() => {
        W();
      }, n.duration));
    }
    function E() {
      w?.();
    }
    function W() {
      f.value = !1;
    }
    function Ge({ code: C }) {
      C === Ee.esc && W();
    }
    return je(() => {
      _(), l(), f.value = !0;
    }), Be(() => n.repeatNum, () => {
      E(), _();
    }), un(document, "keydown", Ge), Ao(d, () => {
      p.value = d.value.getBoundingClientRect().height;
    }), t({
      visible: f,
      bottom: S,
      close: W
    }), (C, te) => (b(), U(ot, {
      name: u(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (Ke) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        ae(c("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: d,
          class: N([
            u(o).b(),
            { [u(o).m(C.type)]: C.type },
            u(o).is("center", C.center),
            u(o).is("closable", C.showClose),
            u(o).is("plain", C.plain),
            C.customClass
          ]),
          style: De(u(G)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: _
        }, [
          C.repeatNum > 1 ? (b(), U(u(ki), {
            key: 0,
            value: C.repeatNum,
            type: u(x),
            class: N(u(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          u(F) ? (b(), U(u(Fe), {
            key: 1,
            class: N([u(o).e("icon"), u(T)])
          }, {
            default: q(() => [
              (b(), U(Bt(u(F))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          ie(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (b(), I(ve, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: N(u(o).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (b(), I("p", {
              key: 0,
              class: N(u(o).e("content"))
            }, $(C.message), 3))
          ]),
          C.showClose ? (b(), U(u(Fe), {
            key: 2,
            class: N(u(o).e("closeBtn")),
            onClick: ye(W, ["stop"])
          }, {
            default: q(() => [
              M(u(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [Le, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Li = /* @__PURE__ */ Ve(Di, [["__file", "message.vue"]]);
let Mi = 1;
const Sn = (e) => {
  const t = !e || J(e) || _e(e) || be(e) ? { message: e } : e, n = {
    ...z,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (J(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    tt(s) || (s = document.body), n.appendTo = s;
  }
  return kt(A.grouping) && !n.grouping && (n.grouping = A.grouping), Q(A.duration) && n.duration === 3e3 && (n.duration = A.duration), Q(A.offset) && n.offset === 16 && (n.offset = A.offset), kt(A.showClose) && !n.showClose && (n.showClose = A.showClose), n;
}, $i = (e) => {
  const t = j.indexOf(e);
  if (t === -1)
    return;
  j.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ri = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Mi++}`, o = t.onClose, r = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), $i(p);
    },
    onDestroy: () => {
      Me(null, r);
    }
  }, l = M(Li, i, be(i.message) || _e(i.message) ? {
    default: be(i.message) ? i.message : () => i.message
  } : null);
  l.appContext = n || le._context, Me(l, r), e.appendChild(r.firstElementChild);
  const d = l.component, p = {
    id: s,
    vnode: l,
    vm: d,
    handler: {
      close: () => {
        d.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return p;
}, le = (e = {}, t) => {
  if (!ee)
    return { close: () => {
    } };
  const n = Sn(e);
  if (n.grouping && j.length) {
    const o = j.find(({ vnode: r }) => {
      var i;
      return ((i = r.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Q(A.max) && j.length >= A.max)
    return { close: () => {
    } };
  const s = Ri(n, t);
  return j.push(s), s.handler;
};
Cn.forEach((e) => {
  le[e] = (t = {}, n) => {
    const s = Sn(t);
    return le({ ...s, type: e }, n);
  };
});
function Fi(e) {
  for (const t of j)
    (!e || e === t.props.type) && t.handler.close();
}
le.closeAll = Fi;
le._context = null;
const Wi = wn(le, "$message"), On = [
  "success",
  "info",
  "warning",
  "error"
], Ai = de({
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
    type: bn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: L([
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
    type: L(Function),
    default: () => {
    }
  },
  onClose: {
    type: L(Function),
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
    values: [...On, ""],
    default: ""
  },
  zIndex: Number
}), ji = {
  destroy: () => !0
}, Bi = P({
  name: "ElNotification"
}), Hi = /* @__PURE__ */ P({
  ...Bi,
  props: Ai,
  emits: ji,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = vn("notification"), { nextZIndex: r, currentZIndex: i } = o, { Close: l } = mi, d = k(!1);
    let f;
    const p = y(() => {
      const _ = n.type;
      return _ && We[n.type] ? s.m(_) : "";
    }), w = y(() => n.type && We[n.type] || n.icon), x = y(() => n.position.endsWith("right") ? "right" : "left"), T = y(() => n.position.startsWith("top") ? "top" : "bottom"), F = y(() => {
      var _;
      return {
        [T.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : i.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: f } = an(() => {
        d.value && S();
      }, n.duration));
    }
    function m() {
      f?.();
    }
    function S() {
      d.value = !1;
    }
    function G({ code: _ }) {
      _ === Ee.delete || _ === Ee.backspace ? m() : _ === Ee.esc ? d.value && S() : g();
    }
    return je(() => {
      g(), r(), d.value = !0;
    }), un(document, "keydown", G), t({
      visible: d,
      close: S
    }), (_, E) => (b(), U(ot, {
      name: u(s).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (W) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        ae(c("div", {
          id: _.id,
          class: N([u(s).b(), _.customClass, u(x)]),
          style: De(u(F)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: g,
          onClick: _.onClick
        }, [
          u(w) ? (b(), U(u(Fe), {
            key: 0,
            class: N([u(s).e("icon"), u(p)])
          }, {
            default: q(() => [
              (b(), U(Bt(u(w))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          c("div", {
            class: N(u(s).e("group"))
          }, [
            c("h2", {
              class: N(u(s).e("title")),
              textContent: $(_.title)
            }, null, 10, ["textContent"]),
            ae(c("div", {
              class: N(u(s).e("content")),
              style: De(_.title ? void 0 : { margin: 0 })
            }, [
              ie(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (b(), I(ve, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (b(), I("p", { key: 0 }, $(_.message), 1))
              ])
            ], 6), [
              [Le, _.message]
            ]),
            _.showClose ? (b(), U(u(Fe), {
              key: 0,
              class: N(u(s).e("closeBtn")),
              onClick: ye(S, ["stop"])
            }, {
              default: q(() => [
                M(u(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Le, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ui = /* @__PURE__ */ Ve(Hi, [["__file", "notification.vue"]]);
const Ae = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, st = 16;
let Vi = 1;
const ue = function(e = {}, t) {
  if (!ee)
    return { close: () => {
    } };
  (J(e) || _e(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  Ae[n].forEach(({ vm: p }) => {
    var w;
    s += (((w = p.el) == null ? void 0 : w.offsetHeight) || 0) + st;
  }), s += st;
  const o = `notification_${Vi++}`, r = e.onClose, i = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Gi(o, n, r);
    }
  };
  let l = document.body;
  tt(e.appendTo) ? l = e.appendTo : J(e.appendTo) && (l = document.querySelector(e.appendTo)), tt(l) || (l = document.body);
  const d = document.createElement("div"), f = M(Ui, i, be(i.message) ? i.message : _e(i.message) ? () => i.message : null);
  return f.appContext = on(t) ? ue._context : t, f.props.onDestroy = () => {
    Me(null, d);
  }, Me(f, d), Ae[n].push({ vm: f }), l.appendChild(d.firstElementChild), {
    close: () => {
      f.component.exposed.visible.value = !1;
    }
  };
};
On.forEach((e) => {
  ue[e] = (t = {}, n) => ((J(t) || _e(t)) && (t = {
    message: t
  }), ue({ ...t, type: e }, n));
});
function Gi(e, t, n) {
  const s = Ae[t], o = s.findIndex(({ vm: f }) => {
    var p;
    return ((p = f.component) == null ? void 0 : p.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: r } = s[o];
  if (!r)
    return;
  n?.(r);
  const i = r.el.offsetHeight, l = t.split("-")[0];
  s.splice(o, 1);
  const d = s.length;
  if (!(d < 1))
    for (let f = o; f < d; f++) {
      const { el: p, component: w } = s[f].vm, x = Number.parseInt(p.style[l], 10) - i - st;
      w.props.offset = x;
    }
}
function Ki() {
  for (const e of Object.values(Ae))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ue.closeAll = Ki;
ue._context = null;
const Zi = wn(ue, "$notify"), Xe = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", s) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: s
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
      position: s = "center",
      duration: o = 3e3,
      showClose: r = !1
    } = e;
    s === "center" ? Wi({
      message: t,
      type: n,
      duration: o,
      showClose: r,
      grouping: !0
    }) : Zi({
      message: t,
      type: n,
      position: s,
      duration: o,
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
}, qi = () => a("screen_recorder_get_ffmpeg_status"), ke = (e) => a("screen_recorder_set_capture_excluded", { excluded: e }), ge = (e) => a("screen_recorder_set_passthrough_region", { region: e }), Ji = () => a("screen_recorder_pick_target_window"), Yi = () => a("screen_recorder_close_window"), Qi = (e, t) => a("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), Xi = () => a("screen_recorder_pause_recording"), ea = (e, t) => a("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio
}), ta = () => a("screen_recorder_stop_recording"), na = () => a("screen_recorder_cancel_recording"), sa = (e) => a("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), Rt = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
});
function oa() {
  const e = k("selecting"), t = k(Rt()), n = k(null), s = k(null), o = k(""), r = k(null), i = k(0), l = k(0), d = k(null), f = () => {
    l.value = e.value === "recording" && r.value !== null ? i.value + Date.now() - r.value : i.value;
  }, p = () => {
    d.value !== null && (window.clearInterval(d.value), d.value = null);
  }, w = () => {
    p(), f(), d.value = window.setInterval(() => {
      f();
    }, 250);
  }, x = async () => (n.value = await qi(), n.value), T = async (E) => {
    o.value = "", s.value = null;
    const W = n.value ?? await x();
    if (!W.available)
      throw new Error(W.message || "FFmpeg unavailable");
    await Qi(E, t.value), e.value = "recording", i.value = 0, l.value = 0, r.value = Date.now(), w();
  }, F = async () => {
    e.value === "recording" && (f(), i.value = l.value, r.value = null, p(), await Xi(), e.value = "paused");
  }, g = async (E) => {
    e.value === "paused" && (await ea(E, t.value), e.value = "recording", r.value = Date.now(), w());
  }, m = async () => {
    e.value !== "recording" && e.value !== "paused" || (f(), i.value = l.value, r.value = null, p(), await ta(), e.value = "exporting");
  }, S = async () => (e.value = "exporting", s.value = await sa(t.value), e.value = "completed", s.value), G = async () => {
    p(), await na(), e.value = "selecting", r.value = null, i.value = 0, l.value = 0, s.value = null;
  }, _ = () => {
    e.value = "selecting", r.value = null, i.value = 0, l.value = 0, s.value = null, o.value = "", t.value = Rt();
  };
  return Ht(() => {
    p();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: l,
    refreshFfmpegStatus: x,
    begin: T,
    pause: F,
    resume: g,
    stop: m,
    exportFile: S,
    cancel: G,
    reset: _
  };
}
const ia = { class: "screen-recorder" }, aa = ["onMousedown"], ra = { class: "window-title" }, la = { class: "capture-viewport" }, ua = { class: "capture-frame" }, ca = { class: "control-strip" }, da = { class: "control-group control-group--tools" }, pa = ["title", "disabled"], ha = { class: "select-field" }, fa = ["disabled"], ga = ["disabled"], va = { class: "dimension-group optional-size" }, ya = { class: "dimension" }, ma = ["value"], wa = { class: "dimension" }, _a = ["value"], ba = { class: "control-group control-group--actions" }, Ca = { class: "time" }, Sa = {
  key: 1,
  class: "save-status"
}, Oa = ["title"], ka = ["disabled"], xa = {
  key: 0,
  class: "warning"
}, xe = 80, Ia = 468, Ta = 300, Ft = 420, Wt = 260, At = 40, Na = 58, Ie = 8, Te = 1, za = /* @__PURE__ */ P({
  __name: "index",
  setup(e) {
    const t = Kt(), n = k(null), s = k({ width: 0, height: 0 });
    let o = null, r = null;
    const i = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: l,
      settings: d,
      ffmpegStatus: f,
      result: p,
      elapsedMs: w,
      refreshFfmpegStatus: x,
      begin: T,
      pause: F,
      resume: g,
      stop: m,
      exportFile: S,
      cancel: G,
      reset: _
    } = oa(), E = y(() => l.value === "recording" || l.value === "paused" || l.value === "exporting"), W = y(() => d.value.audio && d.value.format === "mp4"), Ge = y(() => {
      if (d.value.format === "gif")
        return "GIF 不支持音频";
      if (p.value?.audioDevice)
        return `已录制音频：${p.value.audioDevice}`;
      if (p.value && !p.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (f.value?.available && !f.value.systemAudioAvailable) {
        const v = f.value.audioDevices?.join("、") || "无";
        return d.value.audio ? `未发现系统声音/立体声混音设备；当前可用音频设备：${v}` : "录制音频已关闭";
      }
      return d.value.audio ? "录制音频已开启。系统声音需要启用“立体声混音/Loopback”等设备" : "录制音频已关闭";
    }), C = y(() => {
      const v = Math.floor(w.value / 1e3), h = Math.floor(v / 60).toString().padStart(2, "0"), O = (v % 60).toString().padStart(2, "0");
      return `${h}:${O}`;
    }), te = async (v) => {
      try {
        await v();
      } catch (h) {
        Xe.msg(h?.message || String(h), "error");
      }
    }, Ke = (v) => Math.max(2, Math.floor(Math.round(v) / 2) * 2), Ze = async () => {
      const v = n.value;
      if (!v)
        throw new Error("录制视口尚未准备好");
      const h = v.getBoundingClientRect(), O = await t.scaleFactor(), pe = await t.innerPosition(), he = Ke(h.width * O), qe = Ke(h.height * O);
      if (he < xe || qe < xe)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: h.left,
        y: h.top,
        width: he / O,
        height: qe / O,
        screenX: Math.round(pe.x + h.left * O),
        screenY: Math.round(pe.y + h.top * O),
        physicalWidth: he,
        physicalHeight: qe,
        scale: O
      };
    }, H = async () => {
      try {
        const v = await Ze();
        s.value = {
          width: v.physicalWidth,
          height: v.physicalHeight
        }, await ge({
          x: Math.round(v.x * v.scale),
          y: Math.round(v.y * v.scale),
          width: v.physicalWidth,
          height: v.physicalHeight
        }).catch(() => {
        });
      } catch {
        s.value = { width: 0, height: 0 }, await ge(null).catch(() => {
        });
      }
    }, Se = async () => {
      await ge(null).catch(() => {
      });
    }, pt = () => {
      window.setTimeout(() => {
        H();
      }, 120);
    }, kn = async (v) => {
      v.button !== 0 || E.value || (await Se(), await t.startDragging().catch((h) => {
        Xe.msg(h?.message || String(h), "error");
      }), pt());
    }, xn = async (v) => {
      E.value || (await Se(), await t.startResizeDragging(v).catch((h) => {
        Xe.msg(h?.message || String(h), "error");
      }), pt());
    }, In = () => te(async () => {
      await ke(!0).catch(() => {
      }), await H(), await T(await Ze());
    }), Tn = () => te(F), Nn = () => te(async () => {
      await g(await Ze());
    }), zn = () => te(async () => {
      await m(), await S();
    }), Pn = () => {
      Se(), _(), l.value = "ready", p.value = null, t.setSize(new me(Ia, Ta)), Ne(H);
    }, En = () => {
      E.value || d.value.format === "gif" || (d.value.audio = !d.value.audio);
    }, Dn = async (v) => {
      const O = (await ns(v.screenX, v.screenY))?.scaleFactor || await t.scaleFactor(), pe = Math.max(
        Ft,
        v.physicalWidth / O + Ie * 2 + Te * 2
      ), he = Math.max(
        Wt,
        v.physicalHeight / O + At + Na + Ie * 2 + Te * 2
      );
      await t.setPosition(new B(
        Math.round(v.screenX - (Ie + Te) * O),
        Math.round(v.screenY - (At + Ie + Te) * O)
      )), await t.setSize(new me(Math.round(pe), Math.round(he))), await Ne(), await H();
    }, Ln = () => te(async () => {
      await Se();
      const v = await Ji();
      await Dn(v);
    }), Mn = async () => {
      await t.minimize();
    }, ht = async () => {
      try {
        await G(), await ge(null).catch(() => {
        }), await ke(!1).catch(() => {
        });
      } catch {
      }
      await Yi();
    }, $n = async () => {
      p.value && await a("open_file_with_default_app", { filePath: p.value.path });
    }, Rn = async () => {
      p.value && await a("show_file_in_folder", { filePath: p.value.path });
    }, ft = (v) => {
      v.key === "Escape" && (v.preventDefault(), ht());
    };
    return je(async () => {
      l.value = "ready", await t.setMinSize(new me(Ft, Wt)).catch(() => {
      }), await ke(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await x().catch(() => {
      }), await Ne(), await H(), n.value && (o = new ResizeObserver(() => {
        H();
      }), o.observe(n.value)), r = await t.onMoved(() => {
        H();
      }).catch(() => null), window.addEventListener("resize", H), window.addEventListener("keydown", ft);
    }), Ht(() => {
      o?.disconnect(), r?.(), window.removeEventListener("resize", H), window.removeEventListener("keydown", ft), ge(null).catch(() => {
      }), ke(!1).catch(() => {
      });
    }), (v, h) => (b(), I("div", ia, [
      c(
        "div",
        {
          class: N(["recorder-shell", { recording: u(l) === "recording", paused: u(l) === "paused" }])
        },
        [
          (b(), I(
            ve,
            null,
            Gn(i, (O) => c("span", {
              key: O.className,
              class: N(["resize-zone", O.className]),
              onMousedown: ye((pe) => xn(O.direction), ["prevent"])
            }, null, 42, aa)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              class: "title-bar",
              onMousedown: kn
            },
            [
              c(
                "span",
                ra,
                $(v.$t("screenRecorder.title") || "自定义录屏"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: h[0] || (h[0] = ye(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Mn
                  }, [
                    M(u(ls), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  c("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: ht
                  }, [
                    M(u(rs), {
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
          c("main", la, [
            h[8] || (h[8] = c(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            h[9] || (h[9] = c(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            h[10] || (h[10] = c(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            h[11] || (h[11] = c(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            c("div", ua, [
              c(
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
              h[4] || (h[4] = c(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              h[5] || (h[5] = c(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              h[6] || (h[6] = c(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              h[7] || (h[7] = c(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          c("footer", ca, [
            c("div", da, [
              u(l) === "ready" || u(l) === "completed" ? (b(), I(
                "button",
                {
                  key: 0,
                  class: "icon-control snap-control",
                  title: "拖到目标窗口并松开以对齐",
                  onMousedown: ye(Ln, ["prevent"])
                },
                " ◎ ",
                32
                /* NEED_HYDRATION */
              )) : V("v-if", !0),
              c("button", {
                class: N(["audio-meter", { active: W.value && u(l) === "recording", muted: !W.value }]),
                title: Ge.value,
                disabled: u(l) === "exporting" || u(d).format === "gif",
                onClick: En
              }, h[12] || (h[12] = [
                c(
                  "span",
                  { class: "audio-bars" },
                  [
                    c("i"),
                    c("i"),
                    c("i")
                  ],
                  -1
                  /* HOISTED */
                )
              ]), 10, pa),
              c("label", ha, [
                ae(c("select", {
                  "onUpdate:modelValue": h[1] || (h[1] = (O) => u(d).fps = O),
                  disabled: E.value
                }, h[13] || (h[13] = [
                  c(
                    "option",
                    { value: 15 },
                    "15",
                    -1
                    /* HOISTED */
                  ),
                  c(
                    "option",
                    { value: 24 },
                    "24",
                    -1
                    /* HOISTED */
                  ),
                  c(
                    "option",
                    { value: 30 },
                    "30",
                    -1
                    /* HOISTED */
                  ),
                  c(
                    "option",
                    { value: 60 },
                    "60",
                    -1
                    /* HOISTED */
                  )
                ]), 8, fa), [
                  [gt, u(d).fps]
                ]),
                h[14] || (h[14] = c(
                  "span",
                  { class: "unit" },
                  "fps",
                  -1
                  /* HOISTED */
                ))
              ]),
              ae(c("select", {
                "onUpdate:modelValue": h[2] || (h[2] = (O) => u(d).format = O),
                class: "format-select optional-format",
                disabled: E.value
              }, h[15] || (h[15] = [
                c(
                  "option",
                  { value: "mp4" },
                  "MP4",
                  -1
                  /* HOISTED */
                ),
                c(
                  "option",
                  { value: "gif" },
                  "GIF",
                  -1
                  /* HOISTED */
                )
              ]), 8, ga), [
                [gt, u(d).format]
              ]),
              c("div", va, [
                c("label", ya, [
                  c("input", {
                    value: s.value.width,
                    readonly: ""
                  }, null, 8, ma)
                ]),
                h[16] || (h[16] = c(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                c("label", wa, [
                  c("input", {
                    value: s.value.height,
                    readonly: ""
                  }, null, 8, _a)
                ]),
                h[17] || (h[17] = c(
                  "span",
                  { class: "unit" },
                  "px",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            c("div", ba, [
              u(l) === "recording" || u(l) === "paused" ? (b(), I(
                ve,
                { key: 0 },
                [
                  c(
                    "span",
                    Ca,
                    $(C.value),
                    1
                    /* TEXT */
                  ),
                  c(
                    "button",
                    {
                      class: "control-button",
                      onClick: h[3] || (h[3] = (O) => u(l) === "paused" ? Nn() : Tn())
                    },
                    $(u(l) === "paused" ? v.$t("screenRecorder.resume") : v.$t("screenRecorder.pause")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "button",
                    {
                      class: "control-button danger",
                      onClick: zn
                    },
                    $(v.$t("screenRecorder.stop")),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : u(l) === "exporting" ? (b(), I(
                "span",
                Sa,
                $(v.$t("screenRecorder.exporting") || "正在导出..."),
                1
                /* TEXT */
              )) : u(l) === "completed" && u(p) ? (b(), I(
                ve,
                { key: 2 },
                [
                  c("span", {
                    class: "save-status optional-save-status",
                    title: u(p).path
                  }, $(u(p).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Oa),
                  c("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: $n
                  }, "打开"),
                  c("button", {
                    class: "control-button",
                    title: "打开所在文件夹",
                    onClick: Rn
                  }, "文件夹"),
                  c("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: Pn
                  }, "重录")
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (b(), I("button", {
                key: 3,
                class: "record-button",
                disabled: u(f)?.available === !1 || s.value.width < xe || s.value.height < xe,
                onClick: In
              }, [
                h[18] || (h[18] = c(
                  "span",
                  null,
                  null,
                  -1
                  /* HOISTED */
                )),
                jt(
                  " " + $(v.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, ka))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      u(f) && !u(f).available ? (b(), I(
        "p",
        xa,
        $(u(f).message || v.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : V("v-if", !0)
    ]));
  }
}), Pa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Ea = /* @__PURE__ */ Pa(za, [["__scopeId", "data-v-7a3dc80a"]]), Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ea
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ma as activate
};
