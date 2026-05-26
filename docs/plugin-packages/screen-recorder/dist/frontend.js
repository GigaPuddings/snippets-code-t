import { inject as oe, createVNode as T, getCurrentInstance as me, ref as S, computed as y, unref as c, readonly as hs, getCurrentScope as fs, onScopeDispose as gs, onMounted as nt, nextTick as Ne, watch as we, isRef as vs, warn as ys, provide as ms, defineComponent as A, createElementBlock as N, openBlock as k, mergeProps as ws, renderSlot as _e, createElementVNode as u, normalizeClass as L, Transition as _t, withCtx as ae, withDirectives as ie, normalizeStyle as be, createTextVNode as _s, toDisplayString as F, vShow as Ke, shallowReactive as bs, createBlock as Q, createCommentVNode as ee, resolveDynamicComponent as pn, Fragment as ye, withModifiers as ze, isVNode as Le, render as Ye, onUnmounted as hn, renderList as Cs, vModelSelect as ct } from "vue";
const Cr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => _r)
  });
};
function xs(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function ks(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ue;
const V = "__TAURI_TO_IPC_KEY__";
function Ss(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Os {
  get rid() {
    return xs(this, Ue, "f");
  }
  constructor(t) {
    Ue.set(this, void 0), ks(this, Ue, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return d("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ue = /* @__PURE__ */ new WeakMap();
class bt {
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
    return new re(this.width * t, this.height * t);
  }
  [V]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[V]();
  }
}
class re {
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
    return new bt(this.width / t, this.height / t);
  }
  [V]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[V]();
  }
}
class ge {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof bt ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof re ? this.size : this.size.toPhysical(t);
  }
  [V]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[V]();
  }
}
class fn {
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
  [V]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[V]();
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
    return new fn(this.x / t, this.y / t);
  }
  [V]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[V]();
  }
}
class Be {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof fn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Z ? this.position : this.position.toPhysical(t);
  }
  [V]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[V]();
  }
}
var B;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(B || (B = {}));
async function gn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ze(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: o,
    handler: Ss(t)
  }).then((l) => async () => gn(e, l));
}
async function Ms(e, t, n) {
  return Ze(e, (s) => {
    gn(e, s.id), t(s);
  }, n);
}
async function Is(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ts(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class $e extends Os {
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
    return d("plugin:image|new", {
      rgba: Xe(t),
      width: n,
      height: s
    }).then((o) => new $e(o));
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
    return d("plugin:image|from_bytes", {
      bytes: Xe(t)
    }).then((n) => new $e(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new $e(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return d("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return d("plugin:image|size", { rid: this.rid });
  }
}
function Xe(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof $e ? e.rid : e;
}
var vt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(vt || (vt = {}));
class Ps {
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
var jt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(jt || (jt = {}));
function vn() {
  return new yn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function dt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new yn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const pt = ["tauri://created", "tauri://error"];
class yn {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || d("plugin:window|create", {
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
    return (n = (await dt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return vn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return dt();
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
    for (const t of await dt())
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
    } : Ze(t, n, {
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
    } : Ms(t, n, {
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
    if (pt.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Is(t, n);
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
    if (pt.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Ts(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return pt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return d("plugin:window|scale_factor", {
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
    return d("plugin:window|inner_position", {
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
    return d("plugin:window|outer_position", {
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
    return d("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new re(t));
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
    return d("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new re(t));
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
    return d("plugin:window|is_fullscreen", {
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
    return d("plugin:window|is_minimized", {
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
    return d("plugin:window|is_maximized", {
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
    return d("plugin:window|is_focused", {
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
    return d("plugin:window|is_decorated", {
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
    return d("plugin:window|is_resizable", {
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
    return d("plugin:window|is_maximizable", {
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
    return d("plugin:window|is_minimizable", {
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
    return d("plugin:window|is_closable", {
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
    return d("plugin:window|is_visible", {
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
    return d("plugin:window|title", {
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
    return d("plugin:window|theme", {
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
    return d("plugin:window|is_always_on_top", {
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
    return d("plugin:window|center", {
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
    return t && (t === vt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
    return d("plugin:window|set_resizable", {
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
    return d("plugin:window|set_enabled", {
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
    return d("plugin:window|is_enabled", {
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
    return d("plugin:window|set_maximizable", {
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
    return d("plugin:window|set_minimizable", {
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
    return d("plugin:window|set_closable", {
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
    return d("plugin:window|set_title", {
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
    return d("plugin:window|maximize", {
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
    return d("plugin:window|unmaximize", {
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
    return d("plugin:window|toggle_maximize", {
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
    return d("plugin:window|minimize", {
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
    return d("plugin:window|unminimize", {
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
    return d("plugin:window|show", {
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
    return d("plugin:window|hide", {
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
    return d("plugin:window|close", {
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
    return d("plugin:window|destroy", {
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
    return d("plugin:window|set_decorations", {
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
    return d("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return d("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return d("plugin:window|set_effects", {
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
    return d("plugin:window|set_always_on_top", {
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
    return d("plugin:window|set_always_on_bottom", {
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
    return d("plugin:window|set_content_protected", {
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
    return d("plugin:window|set_size", {
      label: this.label,
      value: t instanceof ge ? t : new ge(t)
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
    return d("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof ge ? t : t ? new ge(t) : null
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
    return d("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof ge ? t : t ? new ge(t) : null
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
    return d("plugin:window|set_size_constraints", {
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
    return d("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Be ? t : new Be(t)
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
    return d("plugin:window|set_fullscreen", {
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
    return d("plugin:window|set_focus", {
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
    return d("plugin:window|set_icon", {
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
    return d("plugin:window|set_skip_taskbar", {
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
    return d("plugin:window|set_cursor_grab", {
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
    return d("plugin:window|set_cursor_visible", {
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
    return d("plugin:window|set_cursor_icon", {
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
    return d("plugin:window|set_background_color", { color: t });
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
    return d("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Be ? t : new Be(t)
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
    return d("plugin:window|set_ignore_cursor_events", {
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
    return d("plugin:window|start_dragging", {
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
    return d("plugin:window|start_resize_dragging", {
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
    return d("plugin:window|set_badge_count", {
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
    return d("plugin:window|set_badge_label", {
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
    return d("plugin:window|set_overlay_icon", {
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
    return d("plugin:window|set_progress_bar", {
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
    return d("plugin:window|set_visible_on_all_workspaces", {
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
    return d("plugin:window|set_title_bar_style", {
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
    return d("plugin:window|set_theme", {
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
    return this.listen(B.WINDOW_RESIZED, (n) => {
      n.payload = new re(n.payload), t(n);
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
    return this.listen(B.WINDOW_MOVED, (n) => {
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
    return this.listen(B.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new Ps(n);
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
    const n = await this.listen(B.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), s = await this.listen(B.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new Z(i.payload.position)
        }
      });
    }), o = await this.listen(B.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), l = await this.listen(B.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), o(), s(), l();
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
    const n = await this.listen(B.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(B.WINDOW_BLUR, (o) => {
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
    return this.listen(B.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(B.WINDOW_THEME_CHANGED, t);
  }
}
var Bt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Bt || (Bt = {}));
var Ht;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ht || (Ht = {}));
var Vt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Vt || (Vt = {}));
function Ns(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Z(e.position),
    size: new re(e.size)
  };
}
async function zs(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Ns);
}
var $s = {
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
function Ls() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Es(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], l = t.theme || n.theme;
  switch (l) {
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
var Ds = Symbol("icon-context");
function Ct(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var i = Ls(), p = oe(Ds, $s);
      return function() {
        var f = l.size, g = l.strokeWidth, v = l.strokeLinecap, _ = l.strokeLinejoin, m = l.theme, b = l.fill, $ = l.spin, h = Es(i, {
          size: f,
          strokeWidth: g,
          strokeLinecap: v,
          strokeLinejoin: _,
          theme: m,
          fill: b
        }, p), w = [p.prefix + "-icon"];
        return w.push(p.prefix + "-icon-" + e), $ && w.push(p.prefix + "-icon-spin"), T("span", {
          class: w.join(" ")
        }, [n(h)]);
      };
    }
  };
  return s;
}
const Fs = Ct("close-small", !1, function(e) {
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
}), Rs = Ct("minus", !1, function(e) {
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
}), Ws = Ct("radar", !1, function(e) {
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
}), mn = Symbol(), Ge = "el", As = "is-", se = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, wn = Symbol("namespaceContextKey"), js = (e) => {
  const t = e || (me() ? oe(wn, S(Ge)) : S(Ge));
  return y(() => c(t) || Ge);
}, xt = (e, t) => {
  const n = js(t);
  return {
    namespace: n,
    b: (h = "") => se(n.value, e, h, "", ""),
    e: (h) => h ? se(n.value, e, "", h, "") : "",
    m: (h) => h ? se(n.value, e, "", "", h) : "",
    be: (h, w) => h && w ? se(n.value, e, h, w, "") : "",
    em: (h, w) => h && w ? se(n.value, e, "", h, w) : "",
    bm: (h, w) => h && w ? se(n.value, e, h, "", w) : "",
    bem: (h, w, M) => h && w && M ? se(n.value, e, h, w, M) : "",
    is: (h, ...w) => {
      const M = w.length >= 1 ? w[0] : !0;
      return h && M ? `${As}${h}` : "";
    },
    cssVar: (h) => {
      const w = {};
      for (const M in h)
        h[M] && (w[`--${n.value}-${M}`] = h[M]);
      return w;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const w = {};
      for (const M in h)
        h[M] && (w[`--${n.value}-${e}-${M}`] = h[M]);
      return w;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Bs = Object.prototype.hasOwnProperty, Ut = (e, t) => Bs.call(e, t), Ee = (e) => typeof e == "function", le = (e) => typeof e == "string", _n = (e) => e !== null && typeof e == "object";
var Hs = typeof global == "object" && global && global.Object === Object && global, Vs = typeof self == "object" && self && self.Object === Object && self, kt = Hs || Vs || Function("return this")(), Ce = kt.Symbol, bn = Object.prototype, Us = bn.hasOwnProperty, Gs = bn.toString, Te = Ce ? Ce.toStringTag : void 0;
function qs(e) {
  var t = Us.call(e, Te), n = e[Te];
  try {
    e[Te] = void 0;
    var s = !0;
  } catch {
  }
  var o = Gs.call(e);
  return s && (t ? e[Te] = n : delete e[Te]), o;
}
var Ks = Object.prototype, Ys = Ks.toString;
function Zs(e) {
  return Ys.call(e);
}
var Xs = "[object Null]", Js = "[object Undefined]", Gt = Ce ? Ce.toStringTag : void 0;
function Cn(e) {
  return e == null ? e === void 0 ? Js : Xs : Gt && Gt in Object(e) ? qs(e) : Zs(e);
}
function Qs(e) {
  return e != null && typeof e == "object";
}
var eo = "[object Symbol]";
function St(e) {
  return typeof e == "symbol" || Qs(e) && Cn(e) == eo;
}
function to(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Ot = Array.isArray, qt = Ce ? Ce.prototype : void 0, Kt = qt ? qt.toString : void 0;
function xn(e) {
  if (typeof e == "string")
    return e;
  if (Ot(e))
    return to(e, xn) + "";
  if (St(e))
    return Kt ? Kt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function kn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var no = "[object AsyncFunction]", so = "[object Function]", oo = "[object GeneratorFunction]", ao = "[object Proxy]";
function io(e) {
  if (!kn(e))
    return !1;
  var t = Cn(e);
  return t == so || t == oo || t == no || t == ao;
}
var ht = kt["__core-js_shared__"], Yt = function() {
  var e = /[^.]+$/.exec(ht && ht.keys && ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ro(e) {
  return !!Yt && Yt in e;
}
var lo = Function.prototype, uo = lo.toString;
function co(e) {
  if (e != null) {
    try {
      return uo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var po = /[\\^$.*+?()[\]{}|]/g, ho = /^\[object .+?Constructor\]$/, fo = Function.prototype, go = Object.prototype, vo = fo.toString, yo = go.hasOwnProperty, mo = RegExp(
  "^" + vo.call(yo).replace(po, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wo(e) {
  if (!kn(e) || ro(e))
    return !1;
  var t = io(e) ? mo : ho;
  return t.test(co(e));
}
function _o(e, t) {
  return e?.[t];
}
function Sn(e, t) {
  var n = _o(e, t);
  return wo(n) ? n : void 0;
}
function bo(e, t) {
  return e === t || e !== e && t !== t;
}
var Co = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xo = /^\w*$/;
function ko(e, t) {
  if (Ot(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || St(e) ? !0 : xo.test(e) || !Co.test(e) || t != null && e in Object(t);
}
var De = Sn(Object, "create");
function So() {
  this.__data__ = De ? De(null) : {}, this.size = 0;
}
function Oo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mo = "__lodash_hash_undefined__", Io = Object.prototype, To = Io.hasOwnProperty;
function Po(e) {
  var t = this.__data__;
  if (De) {
    var n = t[e];
    return n === Mo ? void 0 : n;
  }
  return To.call(t, e) ? t[e] : void 0;
}
var No = Object.prototype, zo = No.hasOwnProperty;
function $o(e) {
  var t = this.__data__;
  return De ? t[e] !== void 0 : zo.call(t, e);
}
var Lo = "__lodash_hash_undefined__";
function Eo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = De && t === void 0 ? Lo : t, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ue.prototype.clear = So;
ue.prototype.delete = Oo;
ue.prototype.get = Po;
ue.prototype.has = $o;
ue.prototype.set = Eo;
function Do() {
  this.__data__ = [], this.size = 0;
}
function st(e, t) {
  for (var n = e.length; n--; )
    if (bo(e[n][0], t))
      return n;
  return -1;
}
var Fo = Array.prototype, Ro = Fo.splice;
function Wo(e) {
  var t = this.__data__, n = st(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Ro.call(t, n, 1), --this.size, !0;
}
function Ao(e) {
  var t = this.__data__, n = st(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function jo(e) {
  return st(this.__data__, e) > -1;
}
function Bo(e, t) {
  var n = this.__data__, s = st(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Se(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Se.prototype.clear = Do;
Se.prototype.delete = Wo;
Se.prototype.get = Ao;
Se.prototype.has = jo;
Se.prototype.set = Bo;
var Ho = Sn(kt, "Map");
function Vo() {
  this.size = 0, this.__data__ = {
    hash: new ue(),
    map: new (Ho || Se)(),
    string: new ue()
  };
}
function Uo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ot(e, t) {
  var n = e.__data__;
  return Uo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Go(e) {
  var t = ot(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function qo(e) {
  return ot(this, e).get(e);
}
function Ko(e) {
  return ot(this, e).has(e);
}
function Yo(e, t) {
  var n = ot(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
de.prototype.clear = Vo;
de.prototype.delete = Go;
de.prototype.get = qo;
de.prototype.has = Ko;
de.prototype.set = Yo;
var Zo = "Expected a function";
function Mt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Zo);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, s);
    return n.cache = l.set(o, i) || l, i;
  };
  return n.cache = new (Mt.Cache || de)(), n;
}
Mt.Cache = de;
var Xo = 500;
function Jo(e) {
  var t = Mt(e, function(s) {
    return n.size === Xo && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Qo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ea = /\\(\\)?/g, ta = Jo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Qo, function(n, s, o, l) {
    t.push(o ? l.replace(ea, "$1") : s || n);
  }), t;
});
function na(e) {
  return e == null ? "" : xn(e);
}
function sa(e, t) {
  return Ot(e) ? e : ko(e, t) ? [e] : ta(na(e));
}
function oa(e) {
  if (typeof e == "string" || St(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function aa(e, t) {
  t = sa(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[oa(t[n++])];
  return n && n == s ? e : void 0;
}
function ia(e, t, n) {
  var s = e == null ? void 0 : aa(e, t);
  return s === void 0 ? n : s;
}
function ra(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const On = (e) => e === void 0, Zt = (e) => typeof e == "boolean", ce = (e) => typeof e == "number", yt = (e) => typeof Element > "u" ? !1 : e instanceof Element, la = (e) => le(e) ? !Number.isNaN(Number(e)) : !1;
var Xt;
const pe = typeof window < "u", ua = (e) => typeof e == "string", ca = () => {
};
pe && ((Xt = window?.navigator) != null && Xt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function It(e) {
  return typeof e == "function" ? e() : c(e);
}
function da(e) {
  return e;
}
function Tt(e) {
  return fs() ? (gs(e), !0) : !1;
}
function pa(e, t = !0) {
  me() ? nt(e) : t ? e() : Ne(e);
}
function Mn(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = S(!1);
  let l = null;
  function i() {
    l && (clearTimeout(l), l = null);
  }
  function p() {
    o.value = !1, i();
  }
  function f(...g) {
    i(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...g);
    }, It(t));
  }
  return s && (o.value = !0, pe && f()), Tt(p), {
    isPending: hs(o),
    start: f,
    stop: p
  };
}
function In(e) {
  var t;
  const n = It(e);
  return (t = n?.$el) != null ? t : n;
}
const Tn = pe ? window : void 0;
function Pn(...e) {
  let t, n, s, o;
  if (ua(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Tn) : [t, n, s, o] = e, !t)
    return ca;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], i = () => {
    l.forEach((v) => v()), l.length = 0;
  }, p = (v, _, m, b) => (v.addEventListener(_, m, b), () => v.removeEventListener(_, m, b)), f = we(() => [In(t), It(o)], ([v, _]) => {
    i(), v && l.push(...n.flatMap((m) => s.map((b) => p(v, m, b, _))));
  }, { immediate: !0, flush: "post" }), g = () => {
    f(), i();
  };
  return Tt(g), g;
}
function ha(e, t = !1) {
  const n = S(), s = () => n.value = !!e();
  return s(), pa(s, t), n;
}
const Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qt = "__vueuse_ssr_handlers__";
Jt[Qt] = Jt[Qt] || {};
var en = Object.getOwnPropertySymbols, fa = Object.prototype.hasOwnProperty, ga = Object.prototype.propertyIsEnumerable, va = (e, t) => {
  var n = {};
  for (var s in e)
    fa.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && en)
    for (var s of en(e))
      t.indexOf(s) < 0 && ga.call(e, s) && (n[s] = e[s]);
  return n;
};
function ya(e, t, n = {}) {
  const s = n, { window: o = Tn } = s, l = va(s, ["window"]);
  let i;
  const p = ha(() => o && "ResizeObserver" in o), f = () => {
    i && (i.disconnect(), i = void 0);
  }, g = we(() => In(e), (_) => {
    f(), p.value && o && _ && (i = new ResizeObserver(t), i.observe(_, l));
  }, { immediate: !0, flush: "post" }), v = () => {
    f(), g();
  };
  return Tt(v), {
    isSupported: p,
    stop: v
  };
}
var tn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(tn || (tn = {}));
var ma = Object.defineProperty, nn = Object.getOwnPropertySymbols, wa = Object.prototype.hasOwnProperty, _a = Object.prototype.propertyIsEnumerable, sn = (e, t, n) => t in e ? ma(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ba = (e, t) => {
  for (var n in t || (t = {}))
    wa.call(t, n) && sn(e, n, t[n]);
  if (nn)
    for (var n of nn(t))
      _a.call(t, n) && sn(e, n, t[n]);
  return e;
};
const Ca = {
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
ba({
  linear: da
}, Ca);
const on = {
  current: 0
}, an = S(0), Nn = 2e3, rn = Symbol("elZIndexContextKey"), zn = Symbol("zIndexContextKey"), xa = (e) => {
  const t = me() ? oe(rn, on) : on, n = e || (me() ? oe(zn, void 0) : void 0), s = y(() => {
    const i = c(n);
    return ce(i) ? i : Nn;
  }), o = y(() => s.value + an.value), l = () => (t.current++, an.value = t.current, o.value);
  return !pe && oe(rn), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var ka = {
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
const Sa = (e) => (t, n) => Oa(t, n, c(e)), Oa = (e, t, n) => ia(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), Ma = (e) => {
  const t = y(() => c(e).name), n = vs(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Sa(e)
  };
}, $n = Symbol("localeContextKey"), Ia = (e) => {
  const t = e || oe($n, S());
  return Ma(y(() => t.value || ka));
}, Ln = "__epPropKey", H = (e) => e, Ta = (e) => _n(e) && !!e[Ln], En = (e, t) => {
  if (!_n(e) || Ta(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: i } = e, f = {
    type: l,
    required: !!s,
    validator: n || i ? (g) => {
      let v = !1, _ = [];
      if (n && (_ = Array.from(n), Ut(e, "default") && _.push(o), v || (v = _.includes(g))), i && (v || (v = i(g))), !v && _.length > 0) {
        const m = [...new Set(_)].map((b) => JSON.stringify(b)).join(", ");
        ys(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(g)}.`);
      }
      return v;
    } : void 0,
    [Ln]: !0
  };
  return Ut(e, "default") && (f.default = o), f;
}, Oe = (e) => ra(Object.entries(e).map(([t, n]) => [
  t,
  En(n, t)
])), Pa = ["", "default", "small", "large"], Na = En({
  type: String,
  values: Pa,
  required: !1
}), za = Symbol("size"), $a = Symbol("emptyValuesContextKey"), La = Oe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ee(e) ? !e() : !e
  }
}), ln = (e) => Object.keys(e), Je = S();
function Dn(e, t = void 0) {
  return me() ? oe(mn, Je) : Je;
}
function Fn(e, t) {
  const n = Dn(), s = xt(e, y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || Ge;
  })), o = Ia(y(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = xa(y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || Nn;
  })), i = y(() => {
    var p;
    return c(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return Rn(y(() => c(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: i
  };
}
const Rn = (e, t, n = !1) => {
  var s;
  const o = !!me(), l = o ? Dn() : void 0, i = (s = void 0) != null ? s : o ? ms : void 0;
  if (!i)
    return;
  const p = y(() => {
    const f = c(e);
    return l?.value ? Ea(l.value, f) : f;
  });
  return i(mn, p), i($n, y(() => p.value.locale)), i(wn, y(() => p.value.namespace)), i(zn, y(() => p.value.zIndex)), i(za, {
    size: y(() => p.value.size || "")
  }), i($a, y(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Je.value) && (Je.value = p.value), p;
}, Ea = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ln(e), ...ln(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var at = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function mt(e, t = "px") {
  if (!e)
    return "";
  if (ce(e) || la(e))
    return `${e}${t}`;
  if (le(e))
    return e;
}
const Wn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), An = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Da = Oe({
  size: {
    type: H([Number, String])
  },
  color: {
    type: String
  }
}), Fa = A({
  name: "ElIcon",
  inheritAttrs: !1
}), Ra = /* @__PURE__ */ A({
  ...Fa,
  props: Da,
  setup(e) {
    const t = e, n = xt("icon"), s = y(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: On(o) ? void 0 : mt(o),
        "--color": l
      };
    });
    return (o, l) => (k(), N("i", ws({
      class: c(n).b(),
      style: c(s)
    }, o.$attrs), [
      _e(o.$slots, "default")
    ], 16));
  }
});
var Wa = /* @__PURE__ */ at(Ra, [["__file", "icon.vue"]]);
const Qe = Wn(Wa);
/*! Element Plus Icons Vue v2.3.1 */
var Aa = /* @__PURE__ */ A({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), ja = Aa, Ba = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), jn = Ba, Ha = /* @__PURE__ */ A({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Va = Ha, Ua = /* @__PURE__ */ A({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ga = Ua, qa = /* @__PURE__ */ A({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ka = qa;
const Bn = H([
  String,
  Object,
  Function
]), Ya = {
  Close: jn
}, Za = {
  Close: jn
}, et = {
  success: Ga,
  warning: Ka,
  error: ja,
  info: Va
}, Xa = (e) => e, qe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ja = Oe({
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
    type: H([String, Object, Array])
  },
  offset: {
    type: H(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Qa = A({
  name: "ElBadge"
}), ei = /* @__PURE__ */ A({
  ...Qa,
  props: Ja,
  setup(e, { expose: t }) {
    const n = e, s = xt("badge"), o = y(() => n.isDot ? "" : ce(n.value) && ce(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = y(() => {
      var i, p, f, g, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: mt(-((p = (i = n.offset) == null ? void 0 : i[0]) != null ? p : 0)),
          marginTop: mt((g = (f = n.offset) == null ? void 0 : f[1]) != null ? g : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: o
    }), (i, p) => (k(), N("div", {
      class: L(c(s).b())
    }, [
      _e(i.$slots, "default"),
      T(_t, {
        name: `${c(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ae(() => [
          ie(u("sup", {
            class: L([
              c(s).e("content"),
              c(s).em("content", i.type),
              c(s).is("fixed", !!i.$slots.default),
              c(s).is("dot", i.isDot),
              c(s).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: be(c(l))
          }, [
            _e(i.$slots, "content", { value: c(o) }, () => [
              _s(F(c(o)), 1)
            ])
          ], 6), [
            [Ke, !i.hidden && (c(o) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ti = /* @__PURE__ */ at(ei, [["__file", "badge.vue"]]);
const ni = Wn(ti), si = Oe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: H(Object)
  },
  size: Na,
  button: {
    type: H(Object)
  },
  experimentalFeatures: {
    type: H(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: H(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...La
}), K = {};
A({
  name: "ElConfigProvider",
  props: si,
  setup(e, { slots: t }) {
    we(() => e.message, (s) => {
      Object.assign(K, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Rn(e);
    return () => _e(t, "default", { config: n?.value });
  }
});
const Hn = ["success", "info", "warning", "error"], D = Xa({
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
  appendTo: pe ? document.body : void 0
}), oi = Oe({
  customClass: {
    type: String,
    default: D.customClass
  },
  center: {
    type: Boolean,
    default: D.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: D.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: D.duration
  },
  icon: {
    type: Bn,
    default: D.icon
  },
  id: {
    type: String,
    default: D.id
  },
  message: {
    type: H([
      String,
      Object,
      Function
    ]),
    default: D.message
  },
  onClose: {
    type: H(Function),
    default: D.onClose
  },
  showClose: {
    type: Boolean,
    default: D.showClose
  },
  type: {
    type: String,
    values: Hn,
    default: D.type
  },
  plain: {
    type: Boolean,
    default: D.plain
  },
  offset: {
    type: Number,
    default: D.offset
  },
  zIndex: {
    type: Number,
    default: D.zIndex
  },
  grouping: {
    type: Boolean,
    default: D.grouping
  },
  repeatNum: {
    type: Number,
    default: D.repeatNum
  }
}), ai = {
  destroy: () => !0
}, Y = bs([]), ii = (e) => {
  const t = Y.findIndex((o) => o.id === e), n = Y[t];
  let s;
  return t > 0 && (s = Y[t - 1]), { current: n, prev: s };
}, ri = (e) => {
  const { prev: t } = ii(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, li = (e, t) => Y.findIndex((s) => s.id === e) > 0 ? 16 : t, ui = A({
  name: "ElMessage"
}), ci = /* @__PURE__ */ A({
  ...ui,
  props: oi,
  emits: ai,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Za, { ns: o, zIndex: l } = Fn("message"), { currentZIndex: i, nextZIndex: p } = l, f = S(), g = S(!1), v = S(0);
    let _;
    const m = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), b = y(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && et[O] };
    }), $ = y(() => n.icon || et[n.type] || ""), h = y(() => ri(n.id)), w = y(() => li(n.id, n.offset) + h.value), M = y(() => v.value + w.value), te = y(() => ({
      top: `${w.value}px`,
      zIndex: i.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: _ } = Mn(() => {
        R();
      }, n.duration));
    }
    function ne() {
      _?.();
    }
    function R() {
      g.value = !1;
    }
    function he({ code: O }) {
      O === qe.esc && R();
    }
    return nt(() => {
      C(), p(), g.value = !0;
    }), we(() => n.repeatNum, () => {
      ne(), C();
    }), Pn(document, "keydown", he), ya(f, () => {
      v.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: M,
      close: R
    }), (O, Pt) => (k(), Q(_t, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (Nt) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        ie(u("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: f,
          class: L([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: be(c(te)),
          role: "alert",
          onMouseenter: ne,
          onMouseleave: C
        }, [
          O.repeatNum > 1 ? (k(), Q(c(ni), {
            key: 0,
            value: O.repeatNum,
            type: c(m),
            class: L(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c($) ? (k(), Q(c(Qe), {
            key: 1,
            class: L([c(o).e("icon"), c(b)])
          }, {
            default: ae(() => [
              (k(), Q(pn(c($))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          _e(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (k(), N(ye, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              u("p", {
                class: L(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), N("p", {
              key: 0,
              class: L(c(o).e("content"))
            }, F(O.message), 3))
          ]),
          O.showClose ? (k(), Q(c(Qe), {
            key: 2,
            class: L(c(o).e("closeBtn")),
            onClick: ze(R, ["stop"])
          }, {
            default: ae(() => [
              T(c(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [Ke, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var di = /* @__PURE__ */ at(ci, [["__file", "message.vue"]]);
let pi = 1;
const Vn = (e) => {
  const t = !e || le(e) || Le(e) || Ee(e) ? { message: e } : e, n = {
    ...D,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (le(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    yt(s) || (s = document.body), n.appendTo = s;
  }
  return Zt(K.grouping) && !n.grouping && (n.grouping = K.grouping), ce(K.duration) && n.duration === 3e3 && (n.duration = K.duration), ce(K.offset) && n.offset === 16 && (n.offset = K.offset), Zt(K.showClose) && !n.showClose && (n.showClose = K.showClose), n;
}, hi = (e) => {
  const t = Y.indexOf(e);
  if (t === -1)
    return;
  Y.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, fi = ({ appendTo: e, ...t }, n) => {
  const s = `message_${pi++}`, o = t.onClose, l = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), hi(v);
    },
    onDestroy: () => {
      Ye(null, l);
    }
  }, p = T(di, i, Ee(i.message) || Le(i.message) ? {
    default: Ee(i.message) ? i.message : () => i.message
  } : null);
  p.appContext = n || xe._context, Ye(p, l), e.appendChild(l.firstElementChild);
  const f = p.component, v = {
    id: s,
    vnode: p,
    vm: f,
    handler: {
      close: () => {
        f.exposed.visible.value = !1;
      }
    },
    props: p.component.props
  };
  return v;
}, xe = (e = {}, t) => {
  if (!pe)
    return { close: () => {
    } };
  const n = Vn(e);
  if (n.grouping && Y.length) {
    const o = Y.find(({ vnode: l }) => {
      var i;
      return ((i = l.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ce(K.max) && Y.length >= K.max)
    return { close: () => {
    } };
  const s = fi(n, t);
  return Y.push(s), s.handler;
};
Hn.forEach((e) => {
  xe[e] = (t = {}, n) => {
    const s = Vn(t);
    return xe({ ...s, type: e }, n);
  };
});
function gi(e) {
  for (const t of Y)
    (!e || e === t.props.type) && t.handler.close();
}
xe.closeAll = gi;
xe._context = null;
const vi = An(xe, "$message"), Un = [
  "success",
  "info",
  "warning",
  "error"
], yi = Oe({
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
    type: Bn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: H([
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
    type: H(Function),
    default: () => {
    }
  },
  onClose: {
    type: H(Function),
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
    values: [...Un, ""],
    default: ""
  },
  zIndex: Number
}), mi = {
  destroy: () => !0
}, wi = A({
  name: "ElNotification"
}), _i = /* @__PURE__ */ A({
  ...wi,
  props: yi,
  emits: mi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Fn("notification"), { nextZIndex: l, currentZIndex: i } = o, { Close: p } = Ya, f = S(!1);
    let g;
    const v = y(() => {
      const C = n.type;
      return C && et[n.type] ? s.m(C) : "";
    }), _ = y(() => n.type && et[n.type] || n.icon), m = y(() => n.position.endsWith("right") ? "right" : "left"), b = y(() => n.position.startsWith("top") ? "top" : "bottom"), $ = y(() => {
      var C;
      return {
        [b.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : i.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: g } = Mn(() => {
        f.value && M();
      }, n.duration));
    }
    function w() {
      g?.();
    }
    function M() {
      f.value = !1;
    }
    function te({ code: C }) {
      C === qe.delete || C === qe.backspace ? w() : C === qe.esc ? f.value && M() : h();
    }
    return nt(() => {
      h(), l(), f.value = !0;
    }), Pn(document, "keydown", te), t({
      visible: f,
      close: M
    }), (C, ne) => (k(), Q(_t, {
      name: c(s).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (R) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        ie(u("div", {
          id: C.id,
          class: L([c(s).b(), C.customClass, c(m)]),
          style: be(c($)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: h,
          onClick: C.onClick
        }, [
          c(_) ? (k(), Q(c(Qe), {
            key: 0,
            class: L([c(s).e("icon"), c(v)])
          }, {
            default: ae(() => [
              (k(), Q(pn(c(_))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          u("div", {
            class: L(c(s).e("group"))
          }, [
            u("h2", {
              class: L(c(s).e("title")),
              textContent: F(C.title)
            }, null, 10, ["textContent"]),
            ie(u("div", {
              class: L(c(s).e("content")),
              style: be(C.title ? void 0 : { margin: 0 })
            }, [
              _e(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (k(), N(ye, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  u("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), N("p", { key: 0 }, F(C.message), 1))
              ])
            ], 6), [
              [Ke, C.message]
            ]),
            C.showClose ? (k(), Q(c(Qe), {
              key: 0,
              class: L(c(s).e("closeBtn")),
              onClick: ze(M, ["stop"])
            }, {
              default: ae(() => [
                T(c(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ke, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var bi = /* @__PURE__ */ at(_i, [["__file", "notification.vue"]]);
const tt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, wt = 16;
let Ci = 1;
const ke = function(e = {}, t) {
  if (!pe)
    return { close: () => {
    } };
  (le(e) || Le(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  tt[n].forEach(({ vm: v }) => {
    var _;
    s += (((_ = v.el) == null ? void 0 : _.offsetHeight) || 0) + wt;
  }), s += wt;
  const o = `notification_${Ci++}`, l = e.onClose, i = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      xi(o, n, l);
    }
  };
  let p = document.body;
  yt(e.appendTo) ? p = e.appendTo : le(e.appendTo) && (p = document.querySelector(e.appendTo)), yt(p) || (p = document.body);
  const f = document.createElement("div"), g = T(bi, i, Ee(i.message) ? i.message : Le(i.message) ? () => i.message : null);
  return g.appContext = On(t) ? ke._context : t, g.props.onDestroy = () => {
    Ye(null, f);
  }, Ye(g, f), tt[n].push({ vm: g }), p.appendChild(f.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
Un.forEach((e) => {
  ke[e] = (t = {}, n) => ((le(t) || Le(t)) && (t = {
    message: t
  }), ke({ ...t, type: e }, n));
});
function xi(e, t, n) {
  const s = tt[t], o = s.findIndex(({ vm: g }) => {
    var v;
    return ((v = g.component) == null ? void 0 : v.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const i = l.el.offsetHeight, p = t.split("-")[0];
  s.splice(o, 1);
  const f = s.length;
  if (!(f < 1))
    for (let g = o; g < f; g++) {
      const { el: v, component: _ } = s[g].vm, m = Number.parseInt(v.style[p], 10) - i - wt;
      _.props.offset = m;
    }
}
function ki() {
  for (const e of Object.values(tt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ke.closeAll = ki;
ke._context = null;
const Si = An(ke, "$notify"), ft = {
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
      showClose: l = !1
    } = e;
    s === "center" ? vi({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : Si({
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
}, gt = "[screen-recorder]", Oi = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, U = async (e, t) => {
  const n = performance.now(), s = Oi(t);
  console.info(`${gt} invoke:start ${e}`, s ?? "");
  try {
    const o = await d(e, t);
    return console.info(`${gt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: o
    }), o;
  } catch (o) {
    throw console.error(`${gt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: o
    }), o;
  }
}, Mi = () => U("screen_recorder_get_ffmpeg_status"), ve = (e) => U("screen_recorder_set_capture_excluded", { excluded: e }), Pe = (e) => U("screen_recorder_set_passthrough_region", { region: e }), Ii = () => U("screen_recorder_pick_target_window"), Ti = () => U("screen_recorder_close_window"), Pi = (e, t) => U("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ni = () => U("screen_recorder_pause_recording"), zi = (e, t) => U("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), $i = () => U("screen_recorder_stop_recording"), Li = () => U("screen_recorder_cancel_recording"), Ei = () => U("screen_recorder_cancel_export"), Di = (e, t) => U("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), un = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), E = "[screen-recorder]";
function Fi() {
  const e = S("selecting"), t = S(un()), n = S(null), s = S(null), o = S(""), l = S(null), i = S(0), p = S(0), f = S(null), g = () => {
    p.value = e.value === "recording" && l.value !== null ? i.value + Date.now() - l.value : i.value;
  }, v = () => {
    f.value !== null && (window.clearInterval(f.value), f.value = null);
  }, _ = () => {
    v(), g(), f.value = window.setInterval(() => {
      g();
    }, 250);
  }, m = async () => (console.info(`${E} refresh ffmpeg status`), n.value = await Mi(), console.info(`${E} ffmpeg status`, n.value), n.value), b = async (R) => {
    o.value = "", s.value = null, console.info(`${E} begin requested`, { region: R, settings: t.value });
    const he = n.value ?? await m();
    if (!he.available)
      throw new Error(he.message || "FFmpeg unavailable");
    await Pi(R, t.value), e.value = "recording", i.value = 0, p.value = 0, l.value = Date.now(), _(), console.info(`${E} recording started`, { status: e.value });
  }, $ = async () => {
    e.value === "recording" && (console.info(`${E} pause requested`, { elapsedMs: p.value }), g(), i.value = p.value, l.value = null, v(), await Ni(), e.value = "paused", console.info(`${E} recording paused`, { accumulatedMs: i.value }));
  }, h = async (R) => {
    e.value === "paused" && (console.info(`${E} resume requested`, { region: R, settings: t.value }), await zi(R, t.value), e.value = "recording", l.value = Date.now(), _(), console.info(`${E} recording resumed`));
  }, w = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${E} stop requested`, { status: e.value, elapsedMs: p.value }), g(), i.value = p.value, l.value = null, v(), await $i(), e.value = "exporting", console.info(`${E} recording stopped`, { accumulatedMs: i.value }));
  }, M = async () => {
    console.info(`${E} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await Di(t.value, Math.round(p.value)), e.value = "completed", console.info(`${E} export completed`, s.value), s.value;
    } catch (R) {
      throw e.value = "ready", s.value = null, R;
    }
  }, te = async () => {
    console.info(`${E} cancel export requested`, { status: e.value }), await Ei(), e.value = "ready", s.value = null;
  }, C = async () => {
    console.info(`${E} cancel requested`, { status: e.value, elapsedMs: p.value }), v(), await Li(), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, s.value = null, console.info(`${E} canceled`);
  }, ne = () => {
    console.info(`${E} reset session`), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, s.value = null, o.value = "", t.value = un();
  };
  return hn(() => {
    v();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: p,
    refreshFfmpegStatus: m,
    begin: b,
    pause: $,
    resume: h,
    stop: w,
    exportFile: M,
    cancelExport: te,
    cancel: C,
    reset: ne
  };
}
const Ri = { class: "screen-recorder" }, Wi = ["onMousedown"], Ai = { class: "window-title" }, ji = { class: "capture-viewport" }, Bi = { class: "capture-frame" }, Hi = { class: "control-strip" }, Vi = { class: "control-group control-group--tools" }, Ui = { class: "tool-pill" }, Gi = ["title", "disabled"], qi = { class: "select-field" }, Ki = ["disabled"], Yi = ["disabled"], Zi = ["disabled"], Xi = { value: "high" }, Ji = { value: "standard" }, Qi = { value: "small" }, er = { class: "dimension-group optional-size" }, tr = { class: "dimension" }, nr = ["value"], sr = { class: "dimension" }, or = ["value"], ar = { class: "control-group control-group--actions" }, ir = { class: "time" }, rr = { class: "button-label" }, lr = { class: "button-label" }, ur = ["title"], cr = { class: "export-progress__meta" }, dr = { class: "export-progress__track" }, pr = ["title"], hr = ["disabled"], fr = { class: "record-label" }, gr = {
  key: 0,
  class: "warning"
}, q = "[screen-recorder]", He = 80, cn = 420, dn = 260, vr = 8, Ve = 1, yr = /* @__PURE__ */ A({
  __name: "index",
  setup(e) {
    const t = vn(), n = S(null), s = S({ width: 0, height: 0 }), o = S(0), l = S(!1), i = S(null);
    let p = null, f = null, g = null, v = null;
    const _ = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: m,
      settings: b,
      ffmpegStatus: $,
      result: h,
      elapsedMs: w,
      refreshFfmpegStatus: M,
      begin: te,
      pause: C,
      resume: ne,
      stop: R,
      exportFile: he,
      cancelExport: O,
      cancel: Pt,
      reset: Nt
    } = Fi(), zt = S(!1), Me = y(() => m.value === "recording" || m.value === "paused" || m.value === "exporting"), it = y(() => b.value.audio && b.value.format === "mp4"), Ie = y(() => it.value && m.value === "recording"), Gn = y(() => {
      const a = Ie.value && !l.value ? o.value : 0, r = (x, z) => Math.max(0.18, Math.min(1, x + a * z)).toFixed(3);
      return {
        "--bar-1": r(0.28, 0.64),
        "--bar-2": r(0.42, 0.78),
        "--bar-3": r(0.34, 0.94),
        "--bar-4": r(0.22, 0.72)
      };
    }), qn = y(() => {
      if (b.value.format === "gif")
        return "GIF 不支持音频";
      if (l.value && b.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (h.value?.audioDevice)
        return `已录制音频：${h.value.audioDevice}`;
      if (h.value && !h.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if ($.value?.available && !$.value.systemAudioAvailable) {
        const a = $.value.audioDevices?.join("、") || "无";
        return b.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return b.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), $t = y(() => {
      const a = i.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), rt = y(() => {
      const a = i.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), Kn = y(() => {
      const a = i.value;
      return a?.totalFrames ? `${rt.value} (${a.currentFrame}/${a.totalFrames})` : rt.value;
    }), Yn = y(() => {
      const a = Math.floor(w.value / 1e3), r = Math.floor(a / 60).toString().padStart(2, "0"), x = (a % 60).toString().padStart(2, "0");
      return `${r}:${x}`;
    }), fe = async (a) => {
      try {
        await a();
      } catch (r) {
        console.error(`${q} action failed`, r), zt.value || ft.msg(r?.message || String(r), "error");
      }
    }, Lt = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), Fe = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const r = a.getBoundingClientRect(), x = await t.scaleFactor(), z = await t.innerPosition(), W = Lt(r.width * x), I = Lt(r.height * x);
      if (W < He || I < He)
        throw new Error("录制区域太小，请放大录制窗口");
      const X = {
        x: r.left,
        y: r.top,
        width: W / x,
        height: I / x,
        screenX: Math.round(z.x + r.left * x),
        screenY: Math.round(z.y + r.top * x),
        physicalWidth: W,
        physicalHeight: I,
        scale: x
      };
      return console.info(`${q} capture region`, X), X;
    }, j = async () => {
      try {
        const a = await Fe();
        s.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }, await Pe({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        s.value = { width: 0, height: 0 }, await Pe(null).catch(() => {
        });
      }
    }, Re = async () => {
      await Pe(null).catch(() => {
      });
    }, Et = () => {
      window.setTimeout(() => {
        j();
      }, 120);
    }, Zn = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), Xn = async () => {
      const [a, r] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: a.x,
        y: a.y,
        width: r.width,
        height: r.height
      };
    }, Dt = (a, r) => {
      const x = Math.min(a.width, r.width), z = Math.min(a.height, r.height), W = r.x + r.width - x, I = r.y + r.height - z;
      return {
        x: Math.min(Math.max(a.x, r.x), W),
        y: Math.min(Math.max(a.y, r.y), I),
        width: x,
        height: z
      };
    }, Ft = async (a) => {
      await t.setSize(new re(Math.round(a.width), Math.round(a.height))), await t.setPosition(new Z(Math.round(a.x), Math.round(a.y))), await Zn();
    }, lt = async () => {
      const [a, r] = await Promise.all([
        Fe(),
        Xn()
      ]);
      return { actualRegion: a, currentFrame: r };
    }, Jn = async (a, r, x) => {
      const { actualRegion: z, currentFrame: W } = await lt(), I = z.screenX - W.x, X = z.screenY - W.y, Ae = W.x + W.width - (z.screenX + z.physicalWidth), ut = W.y + W.height - (z.screenY + z.physicalHeight);
      return {
        x: a.screenX - I,
        y: a.screenY - X,
        width: Math.max(r, a.physicalWidth + I + Ae),
        height: Math.max(x, a.physicalHeight + X + ut)
      };
    }, Rt = async () => {
      g?.(), g = null, o.value = 0;
    }, We = async () => {
      if (!(!it.value || g))
        try {
          console.info(`${q} backend audio meter listening`), g = await Ze("screen_recorder_audio_level", (a) => {
            if (!Ie.value) {
              o.value = 0;
              return;
            }
            const r = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            o.value = o.value * 0.38 + r * 0.62;
          }), l.value = !1;
        } catch (a) {
          console.error(`${q} audio meter failed`, a), l.value = !0;
        }
    }, Qn = async (a) => {
      a.button !== 0 || Me.value || (await Re(), await t.startDragging().catch((r) => {
        ft.msg(r?.message || String(r), "error");
      }), Et());
    }, es = async (a) => {
      Me.value || (await Re(), await t.startResizeDragging(a).catch((r) => {
        ft.msg(r?.message || String(r), "error");
      }), Et());
    }, ts = () => fe(async () => {
      console.info(`${q} handle start`), i.value = null, await We(), await ve(!0).catch(() => {
      }), await j(), await te(await Fe());
    }), ns = () => fe(async () => {
      console.info(`${q} handle pause`), await C();
    }), ss = () => fe(async () => {
      console.info(`${q} handle resume`), await ne(await Fe());
    }), os = () => fe(async () => {
      console.info(`${q} handle stop/export`), i.value = {
        stage: "encode",
        message: b.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await R(), o.value = 0, await he(), await j(), await ve(!1).catch(() => {
      });
    }), as = () => fe(async () => {
      console.info(`${q} handle cancel export`), await O(), i.value = null, await j();
    }), is = () => {
      const a = { ...b.value };
      Re(), Nt(), b.value = a, m.value = "ready", h.value = null, i.value = null, ve(!0).catch(() => {
      }), Ne(j), We();
    }, rs = async (a) => {
      const r = await zs(a.screenX, a.screenY), x = r?.scaleFactor || await t.scaleFactor(), z = Math.round(cn * x), W = Math.round(dn * x), I = r ? {
        x: r.position.x,
        y: r.position.y,
        width: r.size.width,
        height: r.size.height
      } : null, X = (() => {
        if (!I) return !1;
        const P = Math.max(8, Math.round(8 * x)), J = I.x + I.width, G = I.y + I.height, je = a.screenX + a.physicalWidth, ps = a.screenY + a.physicalHeight;
        return a.screenX <= I.x + P && a.screenY <= I.y + P && je >= J - P && ps >= G - P;
      })(), Ae = await Jn(
        a,
        z,
        W
      );
      await Ft(
        I && X ? Dt(Ae, I) : Ae
      ), await Ne();
      const ut = async () => {
        const { actualRegion: P, currentFrame: J } = await lt(), G = {
          x: a.screenX - P.screenX,
          y: a.screenY - P.screenY,
          width: a.physicalWidth - P.physicalWidth,
          height: a.physicalHeight - P.physicalHeight
        };
        if (Math.abs(G.x) <= Ve && Math.abs(G.y) <= Ve && Math.abs(G.width) <= Ve && Math.abs(G.height) <= Ve)
          return !0;
        const je = {
          x: J.x + G.x,
          y: J.y + G.y,
          width: Math.max(z, J.width + G.width),
          height: Math.max(W, J.height + G.height)
        };
        return await Ft(
          I && X ? Dt(je, I) : je
        ), !1;
      };
      try {
        for (let J = 0; J < vr && !await ut(); J += 1)
          ;
        const { actualRegion: P } = await lt();
        console.info(`${q} snap result`, {
          target: a,
          actualRegion: P,
          residual: {
            left: P.screenX - a.screenX,
            top: P.screenY - a.screenY,
            right: P.screenX + P.physicalWidth - (a.screenX + a.physicalWidth),
            bottom: P.screenY + P.physicalHeight - (a.screenY + a.physicalHeight)
          },
          monitorCovering: X
        });
      } catch (P) {
        console.warn(`${q} snap correction skipped`, P);
      }
      await j();
    }, ls = () => fe(async () => {
      await Re();
      const a = await Ii();
      await rs(a);
    }), us = async () => {
      await t.minimize();
    }, Wt = async () => {
      zt.value = !0;
      try {
        m.value === "exporting" ? await O().catch(() => {
        }) : await Pt(), await Pe(null).catch(() => {
        }), await ve(!1).catch(() => {
        });
      } catch {
      }
      await Ti();
    }, cs = async () => {
      h.value && (await j(), await d("open_file_with_default_app", { filePath: h.value.path }));
    }, ds = async () => {
      h.value && (await j(), await d("show_file_in_folder", { filePath: h.value.path }));
    }, At = (a) => {
      a.key === "Escape" && (a.preventDefault(), Wt());
    };
    return nt(async () => {
      m.value = "ready", await t.setMinSize(new bt(cn, dn)).catch(() => {
      }), await ve(!0).catch(() => {
      }), await M().catch(() => {
      }), await Ne(), await j(), await We(), await Ne(), await t.emit("screen_recorder_ready"), v = await Ze("screen_recorder_export_progress", (a) => {
        i.value = a.payload;
      }).catch(() => null), n.value && (p = new ResizeObserver(() => {
        j();
      }), p.observe(n.value)), f = await t.onMoved(() => {
        j();
      }).catch(() => null), window.addEventListener("resize", j), window.addEventListener("keydown", At);
    }), we(it, (a) => {
      a ? We() : Rt();
    }), we(m, (a) => {
      a !== "recording" && (o.value = 0), a !== "exporting" && (i.value = null);
    }), hn(() => {
      p?.disconnect(), f?.(), v?.(), window.removeEventListener("resize", j), window.removeEventListener("keydown", At), Pe(null).catch(() => {
      }), ve(!1).catch(() => {
      }), Rt();
    }), (a, r) => (k(), N("div", Ri, [
      u(
        "div",
        {
          class: L(["recorder-shell", { recording: c(m) === "recording", paused: c(m) === "paused" }])
        },
        [
          (k(), N(
            ye,
            null,
            Cs(_, (x) => u("span", {
              key: x.className,
              class: L(["resize-zone", x.className]),
              onMousedown: ze((z) => es(x.direction), ["prevent"])
            }, null, 42, Wi)),
            64
            /* STABLE_FRAGMENT */
          )),
          u(
            "header",
            {
              class: "title-bar",
              onMousedown: Qn
            },
            [
              u(
                "span",
                Ai,
                F(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              u(
                "div",
                {
                  class: "window-actions",
                  onMousedown: r[0] || (r[0] = ze(() => {
                  }, ["stop"]))
                },
                [
                  u("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: us
                  }, [
                    T(c(Rs), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  u("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: Wt
                  }, [
                    T(c(Fs), {
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
          u("main", ji, [
            r[9] || (r[9] = u(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            r[10] || (r[10] = u(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            r[11] || (r[11] = u(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            r[12] || (r[12] = u(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            u("div", Bi, [
              u(
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
              r[5] || (r[5] = u(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              r[6] || (r[6] = u(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              r[7] || (r[7] = u(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              r[8] || (r[8] = u(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          u("footer", Hi, [
            u("div", Vi, [
              u("div", Ui, [
                c(m) === "ready" || c(m) === "completed" ? (k(), N(
                  "button",
                  {
                    key: 0,
                    class: "icon-control snap-control",
                    title: "拖到目标窗口并松开以对齐",
                    "aria-label": "对齐目标窗口",
                    onMousedown: ze(ls, ["prevent"])
                  },
                  [
                    T(c(Ws), {
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ],
                  32
                  /* NEED_HYDRATION */
                )) : ee("v-if", !0),
                u("button", {
                  class: L(["audio-meter", { active: Ie.value && o.value > 0.03, metering: Ie.value && !l.value, muted: !Ie.value || l.value }]),
                  title: qn.value,
                  "aria-label": "系统声音录制状态",
                  disabled: c(m) === "exporting" || c(b).format === "gif"
                }, [
                  u(
                    "span",
                    {
                      class: "audio-bars",
                      style: be(Gn.value)
                    },
                    r[13] || (r[13] = [
                      u(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      u(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      u(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      u(
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
                ], 10, Gi)
              ]),
              u("label", qi, [
                ie(u("select", {
                  "onUpdate:modelValue": r[1] || (r[1] = (x) => c(b).fps = x),
                  disabled: Me.value
                }, r[14] || (r[14] = [
                  u(
                    "option",
                    { value: 15 },
                    "15",
                    -1
                    /* HOISTED */
                  ),
                  u(
                    "option",
                    { value: 24 },
                    "24",
                    -1
                    /* HOISTED */
                  ),
                  u(
                    "option",
                    { value: 30 },
                    "30",
                    -1
                    /* HOISTED */
                  ),
                  u(
                    "option",
                    { value: 60 },
                    "60",
                    -1
                    /* HOISTED */
                  )
                ]), 8, Ki), [
                  [ct, c(b).fps]
                ]),
                r[15] || (r[15] = u(
                  "span",
                  { class: "unit" },
                  "fps",
                  -1
                  /* HOISTED */
                ))
              ]),
              ie(u("select", {
                "onUpdate:modelValue": r[2] || (r[2] = (x) => c(b).format = x),
                class: "format-select optional-format",
                disabled: Me.value
              }, r[16] || (r[16] = [
                u(
                  "option",
                  { value: "mp4" },
                  "MP4",
                  -1
                  /* HOISTED */
                ),
                u(
                  "option",
                  { value: "gif" },
                  "GIF",
                  -1
                  /* HOISTED */
                )
              ]), 8, Yi), [
                [ct, c(b).format]
              ]),
              ie(u("select", {
                "onUpdate:modelValue": r[3] || (r[3] = (x) => c(b).quality = x),
                class: "quality-select optional-quality",
                disabled: Me.value
              }, [
                u(
                  "option",
                  Xi,
                  F(a.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                u(
                  "option",
                  Ji,
                  F(a.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                u(
                  "option",
                  Qi,
                  F(a.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, Zi), [
                [ct, c(b).quality]
              ]),
              u("div", er, [
                u("label", tr, [
                  u("input", {
                    value: s.value.width,
                    readonly: ""
                  }, null, 8, nr)
                ]),
                r[17] || (r[17] = u(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                u("label", sr, [
                  u("input", {
                    value: s.value.height,
                    readonly: ""
                  }, null, 8, or)
                ]),
                r[18] || (r[18] = u(
                  "span",
                  { class: "unit" },
                  "px",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            u("div", ar, [
              c(m) === "recording" || c(m) === "paused" ? (k(), N(
                ye,
                { key: 0 },
                [
                  u(
                    "span",
                    ir,
                    F(Yn.value),
                    1
                    /* TEXT */
                  ),
                  u("button", {
                    class: "control-button",
                    onClick: r[4] || (r[4] = (x) => c(m) === "paused" ? ss() : ns())
                  }, [
                    u(
                      "span",
                      rr,
                      F(c(m) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                      1
                      /* TEXT */
                    )
                  ]),
                  u("button", {
                    class: "control-button danger",
                    onClick: os
                  }, [
                    u(
                      "span",
                      lr,
                      F(a.$t("screenRecorder.stop")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : c(m) === "exporting" ? (k(), N(
                ye,
                { key: 1 },
                [
                  u("div", {
                    class: "export-progress",
                    title: Kn.value
                  }, [
                    u("div", cr, [
                      u(
                        "span",
                        null,
                        F(rt.value),
                        1
                        /* TEXT */
                      ),
                      u(
                        "strong",
                        null,
                        F($t.value) + "%",
                        1
                        /* TEXT */
                      )
                    ]),
                    u("div", dr, [
                      u(
                        "span",
                        {
                          style: be({ width: `${$t.value}%` })
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ])
                  ], 8, ur),
                  u("button", {
                    class: "control-button danger",
                    title: "取消导出",
                    onClick: as
                  }, r[19] || (r[19] = [
                    u(
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
              )) : c(m) === "completed" && c(h) ? (k(), N(
                ye,
                { key: 2 },
                [
                  u("span", {
                    class: "save-status optional-save-status",
                    title: c(h).path
                  }, F(c(h).hasAudio ? "已保存·有声" : "已保存·无声"), 9, pr),
                  u("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: cs
                  }, r[20] || (r[20] = [
                    u(
                      "span",
                      { class: "button-label" },
                      "打开",
                      -1
                      /* HOISTED */
                    )
                  ])),
                  u("button", {
                    class: "control-button",
                    title: "打开所在文件夹",
                    onClick: ds
                  }, r[21] || (r[21] = [
                    u(
                      "span",
                      { class: "button-label" },
                      "文件夹",
                      -1
                      /* HOISTED */
                    )
                  ])),
                  u("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: is
                  }, r[22] || (r[22] = [
                    u(
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
              )) : (k(), N("button", {
                key: 3,
                class: "record-button",
                disabled: c($)?.available === !1 || s.value.width < He || s.value.height < He,
                onClick: ts
              }, [
                r[23] || (r[23] = u(
                  "span",
                  { class: "record-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                u(
                  "span",
                  fr,
                  F(a.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, hr))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      c($) && !c($).available ? (k(), N(
        "p",
        gr,
        F(c($).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : ee("v-if", !0)
    ]));
  }
}), mr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, wr = /* @__PURE__ */ mr(yr, [["__scopeId", "data-v-045d5ad2"]]), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Cr as activate
};
