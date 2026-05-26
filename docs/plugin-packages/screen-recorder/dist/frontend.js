import { inject as ie, createVNode as N, getCurrentInstance as Ce, ref as x, computed as w, unref as c, readonly as Ss, getCurrentScope as ks, onScopeDispose as Os, onMounted as st, nextTick as _e, watch as xe, isRef as Ms, warn as Is, provide as Ts, defineComponent as D, createElementBlock as P, openBlock as S, mergeProps as Ns, renderSlot as Se, createElementVNode as u, normalizeClass as $, Transition as xt, withCtx as re, withDirectives as le, normalizeStyle as se, createTextVNode as Ps, toDisplayString as R, vShow as Ze, shallowReactive as zs, createBlock as ee, createCommentVNode as te, resolveDynamicComponent as _n, Fragment as be, withModifiers as Re, isVNode as De, render as Ye, onUnmounted as bn, renderList as $s, vModelSelect as pt } from "vue";
const Nr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Ir)
  });
};
function Ls(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Es(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ue;
const K = "__TAURI_TO_IPC_KEY__";
function Rs(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Ws {
  get rid() {
    return Ls(this, Ue, "f");
  }
  constructor(t) {
    Ue.set(this, void 0), Es(this, Ue, t);
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
class St {
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
  [K]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[K]();
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
    return new St(this.width / t, this.height / t);
  }
  [K]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[K]();
  }
}
class me {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof St ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ue ? this.size : this.size.toPhysical(t);
  }
  [K]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[K]();
  }
}
class Cn {
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
    return new Q(this.x * t, this.y * t);
  }
  [K]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[K]();
  }
}
class Q {
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
    return new Cn(this.x / t, this.y / t);
  }
  [K]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[K]();
  }
}
class He {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Cn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Q ? this.position : this.position.toPhysical(t);
  }
  [K]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[K]();
  }
}
var V;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(V || (V = {}));
async function xn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Je(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: o,
    handler: Rs(t)
  }).then((l) => async () => xn(e, l));
}
async function Ds(e, t, n) {
  return Je(e, (s) => {
    xn(e, s.id), t(s);
  }, n);
}
async function Fs(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function As(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class We extends Ws {
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
    }).then((o) => new We(o));
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
    }).then((n) => new We(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new We(n));
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
  return e == null ? null : typeof e == "string" ? e : e instanceof We ? e.rid : e;
}
var wt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(wt || (wt = {}));
class js {
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
var Zt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Zt || (Zt = {}));
function Sn() {
  return new kn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ht() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new kn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ft = ["tauri://created", "tauri://error"];
class kn {
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
    return (n = (await ht()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Sn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return ht();
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
    for (const t of await ht())
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
    } : Je(t, n, {
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
    } : Ds(t, n, {
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
    if (ft.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Fs(t, n);
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
    if (ft.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return As(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ft.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new Q(t));
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
    }).then((t) => new Q(t));
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
    return d("plugin:window|outer_size", {
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
    return t && (t === wt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
    return d("plugin:window|set_min_size", {
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
    return d("plugin:window|set_max_size", {
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
      value: t instanceof He ? t : new He(t)
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
      value: t instanceof He ? t : new He(t)
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
    return this.listen(V.WINDOW_RESIZED, (n) => {
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
    return this.listen(V.WINDOW_MOVED, (n) => {
      n.payload = new Q(n.payload), t(n);
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
    return this.listen(V.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new js(n);
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
    const n = await this.listen(V.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new Q(i.payload.position)
        }
      });
    }), s = await this.listen(V.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new Q(i.payload.position)
        }
      });
    }), o = await this.listen(V.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new Q(i.payload.position)
        }
      });
    }), l = await this.listen(V.DRAG_LEAVE, (i) => {
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
    const n = await this.listen(V.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(V.WINDOW_BLUR, (o) => {
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
    return this.listen(V.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(V.WINDOW_THEME_CHANGED, t);
  }
}
var Yt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Yt || (Yt = {}));
var Jt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Jt || (Jt = {}));
var Xt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Xt || (Xt = {}));
function Bs(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Q(e.position),
    size: new ue(e.size)
  };
}
async function Hs(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Bs);
}
var Vs = {
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
function Gs() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Us(e, t, n) {
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
var qs = Symbol("icon-context");
function kt(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var i = Gs(), p = ie(qs, Vs);
      return function() {
        var h = l.size, v = l.strokeWidth, f = l.strokeLinecap, C = l.strokeLinejoin, M = l.theme, T = l.fill, U = l.spin, y = Us(i, {
          size: h,
          strokeWidth: v,
          strokeLinecap: f,
          strokeLinejoin: C,
          theme: M,
          fill: T
        }, p), g = [p.prefix + "-icon"];
        return g.push(p.prefix + "-icon-" + e), U && g.push(p.prefix + "-icon-spin"), N("span", {
          class: g.join(" ")
        }, [n(y)]);
      };
    }
  };
  return s;
}
const Ks = kt("close-small", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zs = kt("minus", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ys = kt("radar", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), N("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), On = Symbol(), qe = "el", Js = "is-", ae = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, Mn = Symbol("namespaceContextKey"), Xs = (e) => {
  const t = e || (Ce() ? ie(Mn, x(qe)) : x(qe));
  return w(() => c(t) || qe);
}, Ot = (e, t) => {
  const n = Xs(t);
  return {
    namespace: n,
    b: (y = "") => ae(n.value, e, y, "", ""),
    e: (y) => y ? ae(n.value, e, "", y, "") : "",
    m: (y) => y ? ae(n.value, e, "", "", y) : "",
    be: (y, g) => y && g ? ae(n.value, e, y, g, "") : "",
    em: (y, g) => y && g ? ae(n.value, e, "", y, g) : "",
    bm: (y, g) => y && g ? ae(n.value, e, y, "", g) : "",
    bem: (y, g, _) => y && g && _ ? ae(n.value, e, y, g, _) : "",
    is: (y, ...g) => {
      const _ = g.length >= 1 ? g[0] : !0;
      return y && _ ? `${Js}${y}` : "";
    },
    cssVar: (y) => {
      const g = {};
      for (const _ in y)
        y[_] && (g[`--${n.value}-${_}`] = y[_]);
      return g;
    },
    cssVarName: (y) => `--${n.value}-${y}`,
    cssVarBlock: (y) => {
      const g = {};
      for (const _ in y)
        y[_] && (g[`--${n.value}-${e}-${_}`] = y[_]);
      return g;
    },
    cssVarBlockName: (y) => `--${n.value}-${e}-${y}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Qs = Object.prototype.hasOwnProperty, Qt = (e, t) => Qs.call(e, t), Fe = (e) => typeof e == "function", ce = (e) => typeof e == "string", In = (e) => e !== null && typeof e == "object";
var eo = typeof global == "object" && global && global.Object === Object && global, to = typeof self == "object" && self && self.Object === Object && self, Mt = eo || to || Function("return this")(), ke = Mt.Symbol, Tn = Object.prototype, no = Tn.hasOwnProperty, so = Tn.toString, Le = ke ? ke.toStringTag : void 0;
function oo(e) {
  var t = no.call(e, Le), n = e[Le];
  try {
    e[Le] = void 0;
    var s = !0;
  } catch {
  }
  var o = so.call(e);
  return s && (t ? e[Le] = n : delete e[Le]), o;
}
var ao = Object.prototype, io = ao.toString;
function ro(e) {
  return io.call(e);
}
var lo = "[object Null]", uo = "[object Undefined]", en = ke ? ke.toStringTag : void 0;
function Nn(e) {
  return e == null ? e === void 0 ? uo : lo : en && en in Object(e) ? oo(e) : ro(e);
}
function co(e) {
  return e != null && typeof e == "object";
}
var po = "[object Symbol]";
function It(e) {
  return typeof e == "symbol" || co(e) && Nn(e) == po;
}
function ho(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tt = Array.isArray, tn = ke ? ke.prototype : void 0, nn = tn ? tn.toString : void 0;
function Pn(e) {
  if (typeof e == "string")
    return e;
  if (Tt(e))
    return ho(e, Pn) + "";
  if (It(e))
    return nn ? nn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function zn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var fo = "[object AsyncFunction]", go = "[object Function]", vo = "[object GeneratorFunction]", yo = "[object Proxy]";
function mo(e) {
  if (!zn(e))
    return !1;
  var t = Nn(e);
  return t == go || t == vo || t == fo || t == yo;
}
var gt = Mt["__core-js_shared__"], sn = function() {
  var e = /[^.]+$/.exec(gt && gt.keys && gt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function wo(e) {
  return !!sn && sn in e;
}
var _o = Function.prototype, bo = _o.toString;
function Co(e) {
  if (e != null) {
    try {
      return bo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xo = /[\\^$.*+?()[\]{}|]/g, So = /^\[object .+?Constructor\]$/, ko = Function.prototype, Oo = Object.prototype, Mo = ko.toString, Io = Oo.hasOwnProperty, To = RegExp(
  "^" + Mo.call(Io).replace(xo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function No(e) {
  if (!zn(e) || wo(e))
    return !1;
  var t = mo(e) ? To : So;
  return t.test(Co(e));
}
function Po(e, t) {
  return e?.[t];
}
function $n(e, t) {
  var n = Po(e, t);
  return No(n) ? n : void 0;
}
function zo(e, t) {
  return e === t || e !== e && t !== t;
}
var $o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lo = /^\w*$/;
function Eo(e, t) {
  if (Tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || It(e) ? !0 : Lo.test(e) || !$o.test(e) || t != null && e in Object(t);
}
var Ae = $n(Object, "create");
function Ro() {
  this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
}
function Wo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Do = "__lodash_hash_undefined__", Fo = Object.prototype, Ao = Fo.hasOwnProperty;
function jo(e) {
  var t = this.__data__;
  if (Ae) {
    var n = t[e];
    return n === Do ? void 0 : n;
  }
  return Ao.call(t, e) ? t[e] : void 0;
}
var Bo = Object.prototype, Ho = Bo.hasOwnProperty;
function Vo(e) {
  var t = this.__data__;
  return Ae ? t[e] !== void 0 : Ho.call(t, e);
}
var Go = "__lodash_hash_undefined__";
function Uo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ae && t === void 0 ? Go : t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
de.prototype.clear = Ro;
de.prototype.delete = Wo;
de.prototype.get = jo;
de.prototype.has = Vo;
de.prototype.set = Uo;
function qo() {
  this.__data__ = [], this.size = 0;
}
function ot(e, t) {
  for (var n = e.length; n--; )
    if (zo(e[n][0], t))
      return n;
  return -1;
}
var Ko = Array.prototype, Zo = Ko.splice;
function Yo(e) {
  var t = this.__data__, n = ot(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Zo.call(t, n, 1), --this.size, !0;
}
function Jo(e) {
  var t = this.__data__, n = ot(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Xo(e) {
  return ot(this.__data__, e) > -1;
}
function Qo(e, t) {
  var n = this.__data__, s = ot(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Ie.prototype.clear = qo;
Ie.prototype.delete = Yo;
Ie.prototype.get = Jo;
Ie.prototype.has = Xo;
Ie.prototype.set = Qo;
var ea = $n(Mt, "Map");
function ta() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (ea || Ie)(),
    string: new de()
  };
}
function na(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function at(e, t) {
  var n = e.__data__;
  return na(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function sa(e) {
  var t = at(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function oa(e) {
  return at(this, e).get(e);
}
function aa(e) {
  return at(this, e).has(e);
}
function ia(e, t) {
  var n = at(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function he(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
he.prototype.clear = ta;
he.prototype.delete = sa;
he.prototype.get = oa;
he.prototype.has = aa;
he.prototype.set = ia;
var ra = "Expected a function";
function Nt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ra);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, s);
    return n.cache = l.set(o, i) || l, i;
  };
  return n.cache = new (Nt.Cache || he)(), n;
}
Nt.Cache = he;
var la = 500;
function ua(e) {
  var t = Nt(e, function(s) {
    return n.size === la && n.clear(), s;
  }), n = t.cache;
  return t;
}
var ca = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, da = /\\(\\)?/g, pa = ua(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ca, function(n, s, o, l) {
    t.push(o ? l.replace(da, "$1") : s || n);
  }), t;
});
function ha(e) {
  return e == null ? "" : Pn(e);
}
function fa(e, t) {
  return Tt(e) ? e : Eo(e, t) ? [e] : pa(ha(e));
}
function ga(e) {
  if (typeof e == "string" || It(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function va(e, t) {
  t = fa(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[ga(t[n++])];
  return n && n == s ? e : void 0;
}
function ya(e, t, n) {
  var s = e == null ? void 0 : va(e, t);
  return s === void 0 ? n : s;
}
function ma(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Ln = (e) => e === void 0, on = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", _t = (e) => typeof Element > "u" ? !1 : e instanceof Element, wa = (e) => ce(e) ? !Number.isNaN(Number(e)) : !1;
var an;
const fe = typeof window < "u", _a = (e) => typeof e == "string", ba = () => {
};
fe && ((an = window?.navigator) != null && an.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pt(e) {
  return typeof e == "function" ? e() : c(e);
}
function Ca(e) {
  return e;
}
function zt(e) {
  return ks() ? (Os(e), !0) : !1;
}
function xa(e, t = !0) {
  Ce() ? st(e) : t ? e() : _e(e);
}
function En(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = x(!1);
  let l = null;
  function i() {
    l && (clearTimeout(l), l = null);
  }
  function p() {
    o.value = !1, i();
  }
  function h(...v) {
    i(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...v);
    }, Pt(t));
  }
  return s && (o.value = !0, fe && h()), zt(p), {
    isPending: Ss(o),
    start: h,
    stop: p
  };
}
function Rn(e) {
  var t;
  const n = Pt(e);
  return (t = n?.$el) != null ? t : n;
}
const Wn = fe ? window : void 0;
function Dn(...e) {
  let t, n, s, o;
  if (_a(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Wn) : [t, n, s, o] = e, !t)
    return ba;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], i = () => {
    l.forEach((f) => f()), l.length = 0;
  }, p = (f, C, M, T) => (f.addEventListener(C, M, T), () => f.removeEventListener(C, M, T)), h = xe(() => [Rn(t), Pt(o)], ([f, C]) => {
    i(), f && l.push(...n.flatMap((M) => s.map((T) => p(f, M, T, C))));
  }, { immediate: !0, flush: "post" }), v = () => {
    h(), i();
  };
  return zt(v), v;
}
function Sa(e, t = !1) {
  const n = x(), s = () => n.value = !!e();
  return s(), xa(s, t), n;
}
const rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ln = "__vueuse_ssr_handlers__";
rn[ln] = rn[ln] || {};
var un = Object.getOwnPropertySymbols, ka = Object.prototype.hasOwnProperty, Oa = Object.prototype.propertyIsEnumerable, Ma = (e, t) => {
  var n = {};
  for (var s in e)
    ka.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && un)
    for (var s of un(e))
      t.indexOf(s) < 0 && Oa.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ia(e, t, n = {}) {
  const s = n, { window: o = Wn } = s, l = Ma(s, ["window"]);
  let i;
  const p = Sa(() => o && "ResizeObserver" in o), h = () => {
    i && (i.disconnect(), i = void 0);
  }, v = xe(() => Rn(e), (C) => {
    h(), p.value && o && C && (i = new ResizeObserver(t), i.observe(C, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    h(), v();
  };
  return zt(f), {
    isSupported: p,
    stop: f
  };
}
var cn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(cn || (cn = {}));
var Ta = Object.defineProperty, dn = Object.getOwnPropertySymbols, Na = Object.prototype.hasOwnProperty, Pa = Object.prototype.propertyIsEnumerable, pn = (e, t, n) => t in e ? Ta(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, za = (e, t) => {
  for (var n in t || (t = {}))
    Na.call(t, n) && pn(e, n, t[n]);
  if (dn)
    for (var n of dn(t))
      Pa.call(t, n) && pn(e, n, t[n]);
  return e;
};
const $a = {
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
za({
  linear: Ca
}, $a);
const hn = {
  current: 0
}, fn = x(0), Fn = 2e3, gn = Symbol("elZIndexContextKey"), An = Symbol("zIndexContextKey"), La = (e) => {
  const t = Ce() ? ie(gn, hn) : hn, n = e || (Ce() ? ie(An, void 0) : void 0), s = w(() => {
    const i = c(n);
    return pe(i) ? i : Fn;
  }), o = w(() => s.value + fn.value), l = () => (t.current++, fn.value = t.current, o.value);
  return !fe && ie(gn), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var Ea = {
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
const Ra = (e) => (t, n) => Wa(t, n, c(e)), Wa = (e, t, n) => ya(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), Da = (e) => {
  const t = w(() => c(e).name), n = Ms(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Ra(e)
  };
}, jn = Symbol("localeContextKey"), Fa = (e) => {
  const t = e || ie(jn, x());
  return Da(w(() => t.value || Ea));
}, Bn = "__epPropKey", G = (e) => e, Aa = (e) => In(e) && !!e[Bn], Hn = (e, t) => {
  if (!In(e) || Aa(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: i } = e, h = {
    type: l,
    required: !!s,
    validator: n || i ? (v) => {
      let f = !1, C = [];
      if (n && (C = Array.from(n), Qt(e, "default") && C.push(o), f || (f = C.includes(v))), i && (f || (f = i(v))), !f && C.length > 0) {
        const M = [...new Set(C)].map((T) => JSON.stringify(T)).join(", ");
        Is(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${M}], got value ${JSON.stringify(v)}.`);
      }
      return f;
    } : void 0,
    [Bn]: !0
  };
  return Qt(e, "default") && (h.default = o), h;
}, Te = (e) => ma(Object.entries(e).map(([t, n]) => [
  t,
  Hn(n, t)
])), ja = ["", "default", "small", "large"], Ba = Hn({
  type: String,
  values: ja,
  required: !1
}), Ha = Symbol("size"), Va = Symbol("emptyValuesContextKey"), Ga = Te({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Fe(e) ? !e() : !e
  }
}), vn = (e) => Object.keys(e), Qe = x();
function Vn(e, t = void 0) {
  return Ce() ? ie(On, Qe) : Qe;
}
function Gn(e, t) {
  const n = Vn(), s = Ot(e, w(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || qe;
  })), o = Fa(w(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = La(w(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || Fn;
  })), i = w(() => {
    var p;
    return c(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return Un(w(() => c(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: i
  };
}
const Un = (e, t, n = !1) => {
  var s;
  const o = !!Ce(), l = o ? Vn() : void 0, i = (s = void 0) != null ? s : o ? Ts : void 0;
  if (!i)
    return;
  const p = w(() => {
    const h = c(e);
    return l?.value ? Ua(l.value, h) : h;
  });
  return i(On, p), i(jn, w(() => p.value.locale)), i(Mn, w(() => p.value.namespace)), i(An, w(() => p.value.zIndex)), i(Ha, {
    size: w(() => p.value.size || "")
  }), i(Va, w(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Qe.value) && (Qe.value = p.value), p;
}, Ua = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...vn(e), ...vn(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var it = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function bt(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || wa(e))
    return `${e}${t}`;
  if (ce(e))
    return e;
}
const qn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Kn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), qa = Te({
  size: {
    type: G([Number, String])
  },
  color: {
    type: String
  }
}), Ka = D({
  name: "ElIcon",
  inheritAttrs: !1
}), Za = /* @__PURE__ */ D({
  ...Ka,
  props: qa,
  setup(e) {
    const t = e, n = Ot("icon"), s = w(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: Ln(o) ? void 0 : bt(o),
        "--color": l
      };
    });
    return (o, l) => (S(), P("i", Ns({
      class: c(n).b(),
      style: c(s)
    }, o.$attrs), [
      Se(o.$slots, "default")
    ], 16));
  }
});
var Ya = /* @__PURE__ */ it(Za, [["__file", "icon.vue"]]);
const et = qn(Ya);
/*! Element Plus Icons Vue v2.3.1 */
var Ja = /* @__PURE__ */ D({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Xa = Ja, Qa = /* @__PURE__ */ D({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Zn = Qa, ei = /* @__PURE__ */ D({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ti = ei, ni = /* @__PURE__ */ D({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), si = ni, oi = /* @__PURE__ */ D({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ai = oi;
const Yn = G([
  String,
  Object,
  Function
]), ii = {
  Close: Zn
}, ri = {
  Close: Zn
}, tt = {
  success: si,
  warning: ai,
  error: Xa,
  info: ti
}, li = (e) => e, Ke = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ui = Te({
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
    type: G([String, Object, Array])
  },
  offset: {
    type: G(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), ci = D({
  name: "ElBadge"
}), di = /* @__PURE__ */ D({
  ...ci,
  props: ui,
  setup(e, { expose: t }) {
    const n = e, s = Ot("badge"), o = w(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = w(() => {
      var i, p, h, v, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: bt(-((p = (i = n.offset) == null ? void 0 : i[0]) != null ? p : 0)),
          marginTop: bt((v = (h = n.offset) == null ? void 0 : h[1]) != null ? v : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (i, p) => (S(), P("div", {
      class: $(c(s).b())
    }, [
      Se(i.$slots, "default"),
      N(xt, {
        name: `${c(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          le(u("sup", {
            class: $([
              c(s).e("content"),
              c(s).em("content", i.type),
              c(s).is("fixed", !!i.$slots.default),
              c(s).is("dot", i.isDot),
              c(s).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: se(c(l))
          }, [
            Se(i.$slots, "content", { value: c(o) }, () => [
              Ps(R(c(o)), 1)
            ])
          ], 6), [
            [Ze, !i.hidden && (c(o) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var pi = /* @__PURE__ */ it(di, [["__file", "badge.vue"]]);
const hi = qn(pi), fi = Te({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: G(Object)
  },
  size: Ba,
  button: {
    type: G(Object)
  },
  experimentalFeatures: {
    type: G(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: G(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ga
}), J = {};
D({
  name: "ElConfigProvider",
  props: fi,
  setup(e, { slots: t }) {
    xe(() => e.message, (s) => {
      Object.assign(J, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Un(e);
    return () => Se(t, "default", { config: n?.value });
  }
});
const Jn = ["success", "info", "warning", "error"], E = li({
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
}), gi = Te({
  customClass: {
    type: String,
    default: E.customClass
  },
  center: {
    type: Boolean,
    default: E.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: E.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: E.duration
  },
  icon: {
    type: Yn,
    default: E.icon
  },
  id: {
    type: String,
    default: E.id
  },
  message: {
    type: G([
      String,
      Object,
      Function
    ]),
    default: E.message
  },
  onClose: {
    type: G(Function),
    default: E.onClose
  },
  showClose: {
    type: Boolean,
    default: E.showClose
  },
  type: {
    type: String,
    values: Jn,
    default: E.type
  },
  plain: {
    type: Boolean,
    default: E.plain
  },
  offset: {
    type: Number,
    default: E.offset
  },
  zIndex: {
    type: Number,
    default: E.zIndex
  },
  grouping: {
    type: Boolean,
    default: E.grouping
  },
  repeatNum: {
    type: Number,
    default: E.repeatNum
  }
}), vi = {
  destroy: () => !0
}, X = zs([]), yi = (e) => {
  const t = X.findIndex((o) => o.id === e), n = X[t];
  let s;
  return t > 0 && (s = X[t - 1]), { current: n, prev: s };
}, mi = (e) => {
  const { prev: t } = yi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, wi = (e, t) => X.findIndex((s) => s.id === e) > 0 ? 16 : t, _i = D({
  name: "ElMessage"
}), bi = /* @__PURE__ */ D({
  ..._i,
  props: gi,
  emits: vi,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ri, { ns: o, zIndex: l } = Gn("message"), { currentZIndex: i, nextZIndex: p } = l, h = x(), v = x(!1), f = x(0);
    let C;
    const M = w(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), T = w(() => {
      const k = n.type;
      return { [o.bm("icon", k)]: k && tt[k] };
    }), U = w(() => n.icon || tt[n.type] || ""), y = w(() => mi(n.id)), g = w(() => wi(n.id, n.offset) + y.value), _ = w(() => f.value + g.value), F = w(() => ({
      top: `${g.value}px`,
      zIndex: i.value
    }));
    function m() {
      n.duration !== 0 && ({ stop: C } = En(() => {
        W();
      }, n.duration));
    }
    function oe() {
      C?.();
    }
    function W() {
      v.value = !1;
    }
    function ge({ code: k }) {
      k === Ke.esc && W();
    }
    return st(() => {
      m(), p(), v.value = !0;
    }), xe(() => n.repeatNum, () => {
      oe(), m();
    }), Dn(document, "keydown", ge), Ia(h, () => {
      f.value = h.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: _,
      close: W
    }), (k, $t) => (S(), ee(xt, {
      name: c(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (Lt) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(u("div", {
          id: k.id,
          ref_key: "messageRef",
          ref: h,
          class: $([
            c(o).b(),
            { [c(o).m(k.type)]: k.type },
            c(o).is("center", k.center),
            c(o).is("closable", k.showClose),
            c(o).is("plain", k.plain),
            k.customClass
          ]),
          style: se(c(F)),
          role: "alert",
          onMouseenter: oe,
          onMouseleave: m
        }, [
          k.repeatNum > 1 ? (S(), ee(c(hi), {
            key: 0,
            value: k.repeatNum,
            type: c(M),
            class: $(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : te("v-if", !0),
          c(U) ? (S(), ee(c(et), {
            key: 1,
            class: $([c(o).e("icon"), c(T)])
          }, {
            default: re(() => [
              (S(), ee(_n(c(U))))
            ]),
            _: 1
          }, 8, ["class"])) : te("v-if", !0),
          Se(k.$slots, "default", {}, () => [
            k.dangerouslyUseHTMLString ? (S(), P(be, { key: 1 }, [
              te(" Caution here, message could've been compromised, never use user's input as message "),
              u("p", {
                class: $(c(o).e("content")),
                innerHTML: k.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), P("p", {
              key: 0,
              class: $(c(o).e("content"))
            }, R(k.message), 3))
          ]),
          k.showClose ? (S(), ee(c(et), {
            key: 2,
            class: $(c(o).e("closeBtn")),
            onClick: Re(W, ["stop"])
          }, {
            default: re(() => [
              N(c(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : te("v-if", !0)
        ], 46, ["id"]), [
          [Ze, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ci = /* @__PURE__ */ it(bi, [["__file", "message.vue"]]);
let xi = 1;
const Xn = (e) => {
  const t = !e || ce(e) || De(e) || Fe(e) ? { message: e } : e, n = {
    ...E,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ce(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    _t(s) || (s = document.body), n.appendTo = s;
  }
  return on(J.grouping) && !n.grouping && (n.grouping = J.grouping), pe(J.duration) && n.duration === 3e3 && (n.duration = J.duration), pe(J.offset) && n.offset === 16 && (n.offset = J.offset), on(J.showClose) && !n.showClose && (n.showClose = J.showClose), n;
}, Si = (e) => {
  const t = X.indexOf(e);
  if (t === -1)
    return;
  X.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ki = ({ appendTo: e, ...t }, n) => {
  const s = `message_${xi++}`, o = t.onClose, l = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), Si(f);
    },
    onDestroy: () => {
      Ye(null, l);
    }
  }, p = N(Ci, i, Fe(i.message) || De(i.message) ? {
    default: Fe(i.message) ? i.message : () => i.message
  } : null);
  p.appContext = n || Oe._context, Ye(p, l), e.appendChild(l.firstElementChild);
  const h = p.component, f = {
    id: s,
    vnode: p,
    vm: h,
    handler: {
      close: () => {
        h.exposed.visible.value = !1;
      }
    },
    props: p.component.props
  };
  return f;
}, Oe = (e = {}, t) => {
  if (!fe)
    return { close: () => {
    } };
  const n = Xn(e);
  if (n.grouping && X.length) {
    const o = X.find(({ vnode: l }) => {
      var i;
      return ((i = l.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (pe(J.max) && X.length >= J.max)
    return { close: () => {
    } };
  const s = ki(n, t);
  return X.push(s), s.handler;
};
Jn.forEach((e) => {
  Oe[e] = (t = {}, n) => {
    const s = Xn(t);
    return Oe({ ...s, type: e }, n);
  };
});
function Oi(e) {
  for (const t of X)
    (!e || e === t.props.type) && t.handler.close();
}
Oe.closeAll = Oi;
Oe._context = null;
const Mi = Kn(Oe, "$message"), Qn = [
  "success",
  "info",
  "warning",
  "error"
], Ii = Te({
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
    type: Yn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: G([
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
    type: G(Function),
    default: () => {
    }
  },
  onClose: {
    type: G(Function),
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
    values: [...Qn, ""],
    default: ""
  },
  zIndex: Number
}), Ti = {
  destroy: () => !0
}, Ni = D({
  name: "ElNotification"
}), Pi = /* @__PURE__ */ D({
  ...Ni,
  props: Ii,
  emits: Ti,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Gn("notification"), { nextZIndex: l, currentZIndex: i } = o, { Close: p } = ii, h = x(!1);
    let v;
    const f = w(() => {
      const m = n.type;
      return m && tt[n.type] ? s.m(m) : "";
    }), C = w(() => n.type && tt[n.type] || n.icon), M = w(() => n.position.endsWith("right") ? "right" : "left"), T = w(() => n.position.startsWith("top") ? "top" : "bottom"), U = w(() => {
      var m;
      return {
        [T.value]: `${n.offset}px`,
        zIndex: (m = n.zIndex) != null ? m : i.value
      };
    });
    function y() {
      n.duration > 0 && ({ stop: v } = En(() => {
        h.value && _();
      }, n.duration));
    }
    function g() {
      v?.();
    }
    function _() {
      h.value = !1;
    }
    function F({ code: m }) {
      m === Ke.delete || m === Ke.backspace ? g() : m === Ke.esc ? h.value && _() : y();
    }
    return st(() => {
      y(), l(), h.value = !0;
    }), Dn(document, "keydown", F), t({
      visible: h,
      close: _
    }), (m, oe) => (S(), ee(xt, {
      name: c(s).b("fade"),
      onBeforeLeave: m.onClose,
      onAfterLeave: (W) => m.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(u("div", {
          id: m.id,
          class: $([c(s).b(), m.customClass, c(M)]),
          style: se(c(U)),
          role: "alert",
          onMouseenter: g,
          onMouseleave: y,
          onClick: m.onClick
        }, [
          c(C) ? (S(), ee(c(et), {
            key: 0,
            class: $([c(s).e("icon"), c(f)])
          }, {
            default: re(() => [
              (S(), ee(_n(c(C))))
            ]),
            _: 1
          }, 8, ["class"])) : te("v-if", !0),
          u("div", {
            class: $(c(s).e("group"))
          }, [
            u("h2", {
              class: $(c(s).e("title")),
              textContent: R(m.title)
            }, null, 10, ["textContent"]),
            le(u("div", {
              class: $(c(s).e("content")),
              style: se(m.title ? void 0 : { margin: 0 })
            }, [
              Se(m.$slots, "default", {}, () => [
                m.dangerouslyUseHTMLString ? (S(), P(be, { key: 1 }, [
                  te(" Caution here, message could've been compromised, never use user's input as message "),
                  u("p", { innerHTML: m.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), P("p", { key: 0 }, R(m.message), 1))
              ])
            ], 6), [
              [Ze, m.message]
            ]),
            m.showClose ? (S(), ee(c(et), {
              key: 0,
              class: $(c(s).e("closeBtn")),
              onClick: Re(_, ["stop"])
            }, {
              default: re(() => [
                N(c(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : te("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ze, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var zi = /* @__PURE__ */ it(Pi, [["__file", "notification.vue"]]);
const nt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ct = 16;
let $i = 1;
const Me = function(e = {}, t) {
  if (!fe)
    return { close: () => {
    } };
  (ce(e) || De(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  nt[n].forEach(({ vm: f }) => {
    var C;
    s += (((C = f.el) == null ? void 0 : C.offsetHeight) || 0) + Ct;
  }), s += Ct;
  const o = `notification_${$i++}`, l = e.onClose, i = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Li(o, n, l);
    }
  };
  let p = document.body;
  _t(e.appendTo) ? p = e.appendTo : ce(e.appendTo) && (p = document.querySelector(e.appendTo)), _t(p) || (p = document.body);
  const h = document.createElement("div"), v = N(zi, i, Fe(i.message) ? i.message : De(i.message) ? () => i.message : null);
  return v.appContext = Ln(t) ? Me._context : t, v.props.onDestroy = () => {
    Ye(null, h);
  }, Ye(v, h), nt[n].push({ vm: v }), p.appendChild(h.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Qn.forEach((e) => {
  Me[e] = (t = {}, n) => ((ce(t) || De(t)) && (t = {
    message: t
  }), Me({ ...t, type: e }, n));
});
function Li(e, t, n) {
  const s = nt[t], o = s.findIndex(({ vm: v }) => {
    var f;
    return ((f = v.component) == null ? void 0 : f.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const i = l.el.offsetHeight, p = t.split("-")[0];
  s.splice(o, 1);
  const h = s.length;
  if (!(h < 1))
    for (let v = o; v < h; v++) {
      const { el: f, component: C } = s[v].vm, M = Number.parseInt(f.style[p], 10) - i - Ct;
      C.props.offset = M;
    }
}
function Ei() {
  for (const e of Object.values(nt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Me.closeAll = Ei;
Me._context = null;
const Ri = Kn(Me, "$notify"), vt = {
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
    s === "center" ? Mi({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : Ri({
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
}, yt = "[screen-recorder]", Wi = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, Z = async (e, t) => {
  const n = performance.now(), s = Wi(t);
  console.info(`${yt} invoke:start ${e}`, s ?? "");
  try {
    const o = await d(e, t);
    return console.info(`${yt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: o
    }), o;
  } catch (o) {
    throw console.error(`${yt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: o
    }), o;
  }
}, Di = () => Z("screen_recorder_get_ffmpeg_status"), we = (e) => Z("screen_recorder_set_capture_excluded", { excluded: e }), Ee = (e) => Z("screen_recorder_set_passthrough_region", { region: e }), Fi = () => Z("screen_recorder_pick_target_window"), Ai = () => Z("screen_recorder_close_window"), ji = (e, t) => Z("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Bi = () => Z("screen_recorder_pause_recording"), Hi = (e, t) => Z("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Vi = () => Z("screen_recorder_stop_recording"), Gi = () => Z("screen_recorder_cancel_recording"), Ui = () => Z("screen_recorder_cancel_export"), qi = (e, t) => Z("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), yn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), L = "[screen-recorder]";
function Ki() {
  const e = x("selecting"), t = x(yn()), n = x(null), s = x(null), o = x(""), l = x(null), i = x(0), p = x(0), h = x(null), v = () => {
    p.value = e.value === "recording" && l.value !== null ? i.value + Date.now() - l.value : i.value;
  }, f = () => {
    h.value !== null && (window.clearInterval(h.value), h.value = null);
  }, C = () => {
    f(), v(), h.value = window.setInterval(() => {
      v();
    }, 250);
  }, M = async () => (console.info(`${L} refresh ffmpeg status`), n.value = await Di(), console.info(`${L} ffmpeg status`, n.value), n.value), T = async (W) => {
    o.value = "", s.value = null, console.info(`${L} begin requested`, { region: W, settings: t.value });
    const ge = n.value ?? await M();
    if (!ge.available)
      throw new Error(ge.message || "FFmpeg unavailable");
    await ji(W, t.value), e.value = "recording", i.value = 0, p.value = 0, l.value = Date.now(), C(), console.info(`${L} recording started`, { status: e.value });
  }, U = async () => {
    e.value === "recording" && (console.info(`${L} pause requested`, { elapsedMs: p.value }), v(), i.value = p.value, l.value = null, f(), await Bi(), e.value = "paused", console.info(`${L} recording paused`, { accumulatedMs: i.value }));
  }, y = async (W) => {
    e.value === "paused" && (console.info(`${L} resume requested`, { region: W, settings: t.value }), await Hi(W, t.value), e.value = "recording", l.value = Date.now(), C(), console.info(`${L} recording resumed`));
  }, g = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${L} stop requested`, { status: e.value, elapsedMs: p.value }), v(), i.value = p.value, l.value = null, f(), await Vi(), e.value = "exporting", console.info(`${L} recording stopped`, { accumulatedMs: i.value }));
  }, _ = async () => {
    console.info(`${L} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await qi(t.value, Math.round(p.value)), e.value = "completed", console.info(`${L} export completed`, s.value), s.value;
    } catch (W) {
      throw e.value = "ready", s.value = null, W;
    }
  }, F = async () => {
    console.info(`${L} cancel export requested`, { status: e.value }), await Ui(), e.value = "ready", s.value = null;
  }, m = async () => {
    console.info(`${L} cancel requested`, { status: e.value, elapsedMs: p.value }), f(), await Gi(), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, s.value = null, console.info(`${L} canceled`);
  }, oe = () => {
    console.info(`${L} reset session`), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, s.value = null, o.value = "", t.value = yn();
  };
  return bn(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: p,
    refreshFfmpegStatus: M,
    begin: T,
    pause: U,
    resume: y,
    stop: g,
    exportFile: _,
    cancelExport: F,
    cancel: m,
    reset: oe
  };
}
const Zi = { class: "screen-recorder" }, Yi = ["onMousedown"], Ji = { class: "window-title" }, Xi = { class: "control-group control-group--tools" }, Qi = { class: "tool-pill" }, er = ["title", "disabled"], tr = { class: "select-field" }, nr = ["disabled"], sr = ["disabled"], or = ["disabled"], ar = { value: "high" }, ir = { value: "standard" }, rr = { value: "small" }, lr = { class: "dimension-group optional-size" }, ur = { class: "dimension" }, cr = ["value"], dr = { class: "dimension" }, pr = ["value"], hr = { class: "control-group control-group--actions" }, fr = { class: "time" }, gr = { class: "button-label" }, vr = { class: "button-label" }, yr = ["title"], mr = { class: "export-progress__meta" }, wr = { class: "export-progress__track" }, _r = ["title"], br = ["disabled"], Cr = { class: "record-label" }, xr = {
  key: 0,
  class: "warning"
}, Y = "[screen-recorder]", Ve = 80, mn = 420, wn = 260, Sr = 8, Ge = 1, mt = 8, ne = 1, kr = /* @__PURE__ */ D({
  __name: "index",
  setup(e) {
    const t = Sn(), n = x(null), s = x(null), o = x(null), l = x({ width: 0, height: 0 }), i = x(null), p = x(!1), h = x(0), v = x(!1), f = x(null);
    let C = null, M = null, T = null, U = null;
    const y = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: g,
      settings: _,
      ffmpegStatus: F,
      result: m,
      elapsedMs: oe,
      refreshFfmpegStatus: W,
      begin: ge,
      pause: k,
      resume: $t,
      stop: Lt,
      exportFile: es,
      cancelExport: Et,
      cancel: ts,
      reset: ns
    } = Ki(), Rt = x(!1), Ne = w(() => g.value === "recording" || g.value === "paused" || g.value === "exporting"), rt = w(() => _.value.audio && _.value.format === "mp4"), Pe = w(() => rt.value && g.value === "recording"), ss = w(() => {
      if (!i.value) return;
      const a = i.value.width / i.value.scale + ne * 2, r = i.value.height / i.value.scale + ne * 2;
      return {
        width: `${a}px`,
        height: `${r}px`,
        left: "50%",
        top: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)"
      };
    }), os = w(() => {
      if (!i.value) return;
      const a = i.value.width / i.value.scale + ne * 2, r = i.value.height / i.value.scale + ne * 2;
      return {
        "--snap-frame-width": `${a}px`,
        "--snap-frame-height": `${r}px`
      };
    }), as = w(() => {
      const a = Pe.value && !v.value ? h.value : 0, r = (b, j) => Math.max(0.18, Math.min(1, b + a * j)).toFixed(3);
      return {
        "--bar-1": r(0.28, 0.64),
        "--bar-2": r(0.42, 0.78),
        "--bar-3": r(0.34, 0.94),
        "--bar-4": r(0.22, 0.72)
      };
    }), is = w(() => {
      if (_.value.format === "gif")
        return "GIF 不支持音频";
      if (v.value && _.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (m.value?.audioDevice)
        return `已录制音频：${m.value.audioDevice}`;
      if (m.value && !m.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (F.value?.available && !F.value.systemAudioAvailable) {
        const a = F.value.audioDevices?.join("、") || "无";
        return _.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return _.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Wt = w(() => {
      const a = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), lt = w(() => {
      const a = f.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), rs = w(() => {
      const a = f.value;
      return a?.totalFrames ? `${lt.value} (${a.currentFrame}/${a.totalFrames})` : lt.value;
    }), ls = w(() => {
      const a = Math.floor(oe.value / 1e3), r = Math.floor(a / 60).toString().padStart(2, "0"), b = (a % 60).toString().padStart(2, "0");
      return `${r}:${b}`;
    }), ve = async (a) => {
      try {
        await a();
      } catch (r) {
        console.error(`${Y} action failed`, r), Rt.value || vt.msg(r?.message || String(r), "error");
      }
    }, Dt = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), Ft = (a) => Math.max(1, Math.round(a)), ut = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const r = a.getBoundingClientRect(), b = await t.scaleFactor(), j = await t.innerPosition(), z = Ft(r.width * b), I = Ft(r.height * b);
      if (z < Ve || I < Ve)
        throw new Error("录制区域太小，请放大录制窗口");
      const B = {
        x: r.left,
        y: r.top,
        width: z / b,
        height: I / b,
        screenX: Math.round(j.x + r.left * b),
        screenY: Math.round(j.y + r.top * b),
        physicalWidth: z,
        physicalHeight: I,
        scale: b
      };
      return console.info(`${Y} capture region`, {
        ...B,
        logicalSize: `${B.width}x${B.height}`,
        physicalSize: `${B.physicalWidth}x${B.physicalHeight}`
      }), B;
    }, At = async () => {
      const a = await ut(), r = Dt(a.physicalWidth), b = Dt(a.physicalHeight);
      return {
        ...a,
        width: r / a.scale,
        height: b / a.scale,
        physicalWidth: r,
        physicalHeight: b
      };
    }, A = async () => {
      try {
        const a = await ut();
        l.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }, await Ee({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        l.value = { width: 0, height: 0 }, await Ee(null).catch(() => {
        });
      }
    }, je = async () => {
      await Ee(null).catch(() => {
      });
    }, jt = () => {
      p.value = !1, i.value = null;
    }, Bt = () => {
      window.setTimeout(() => {
        A();
      }, 120);
    }, Ht = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), us = async () => {
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
    }, Vt = (a, r) => {
      const b = Math.min(a.width, r.width), j = Math.min(a.height, r.height), z = r.x + r.width - b, I = r.y + r.height - j;
      return {
        x: Math.min(Math.max(a.x, r.x), z),
        y: Math.min(Math.max(a.y, r.y), I),
        width: b,
        height: j
      };
    }, Gt = async (a) => {
      await t.setSize(new ue(Math.round(a.width), Math.round(a.height))), await t.setPosition(new Q(Math.round(a.x), Math.round(a.y))), await Ht();
    }, ct = async () => {
      const [a, r] = await Promise.all([
        ut(),
        us()
      ]);
      return { actualRegion: a, currentFrame: r };
    }, cs = async (a, r, b) => {
      const { actualRegion: j } = await ct(), z = j.scale, I = s.value?.getBoundingClientRect().height || 38, B = o.value?.getBoundingClientRect().height || 46, ze = a.physicalWidth / z + ne * 2, $e = a.physicalHeight / z + ne * 2, O = Math.max(
        r / z,
        ze + mt * 2
      ), q = Math.max(
        b / z,
        I + B + $e + mt * 2
      ), H = Math.max(
        $e + mt * 2,
        q - I - B
      ), ye = ((O - ze) / 2 + ne) * z, dt = (I + (H - $e) / 2 + ne) * z;
      return {
        x: a.screenX - ye,
        y: a.screenY - dt,
        width: Math.max(r, Math.round(O * z)),
        height: Math.max(b, Math.round(q * z))
      };
    }, Ut = async () => {
      T?.(), T = null, h.value = 0;
    }, Be = async () => {
      if (!(!rt.value || T))
        try {
          console.info(`${Y} backend audio meter listening`), T = await Je("screen_recorder_audio_level", (a) => {
            if (!Pe.value) {
              h.value = 0;
              return;
            }
            const r = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            h.value = h.value * 0.38 + r * 0.62;
          }), v.value = !1;
        } catch (a) {
          console.error(`${Y} audio meter failed`, a), v.value = !0;
        }
    }, ds = async (a) => {
      a.button !== 0 || Ne.value || (jt(), await je(), await t.startDragging().catch((r) => {
        vt.msg(r?.message || String(r), "error");
      }), Bt());
    }, ps = async (a) => {
      Ne.value || (jt(), await je(), await t.startResizeDragging(a).catch((r) => {
        vt.msg(r?.message || String(r), "error");
      }), Bt());
    }, hs = () => ve(async () => {
      console.info(`${Y} handle start`), f.value = null, await Be(), await we(!0).catch(() => {
      }), await A(), await ge(await At());
    }), fs = () => ve(async () => {
      console.info(`${Y} handle pause`), await k();
    }), gs = () => ve(async () => {
      console.info(`${Y} handle resume`), await $t(await At());
    }), vs = () => ve(async () => {
      console.info(`${Y} handle stop/export`), f.value = {
        stage: "encode",
        message: _.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await Lt(), h.value = 0, await es(), await A(), await we(!1).catch(() => {
      });
    }), ys = () => ve(async () => {
      console.info(`${Y} handle cancel export`), await Et(), f.value = null, await A();
    }), ms = () => {
      const a = { ..._.value };
      je(), ns(), _.value = a, g.value = "ready", m.value = null, f.value = null, we(!0).catch(() => {
      }), _e(A), Be();
    }, ws = async (a) => {
      const r = await Hs(a.screenX, a.screenY), b = r?.scaleFactor || await t.scaleFactor();
      p.value = !0, i.value = {
        width: a.physicalWidth,
        height: a.physicalHeight,
        scale: b
      }, await _e(), await Ht();
      const j = Math.round(mn * b), z = Math.round(wn * b), I = r ? {
        x: r.position.x,
        y: r.position.y,
        width: r.size.width,
        height: r.size.height
      } : null, B = (() => {
        if (!I) return !1;
        const O = Math.max(8, Math.round(8 * b)), q = I.x + I.width, H = I.y + I.height, ye = a.screenX + a.physicalWidth, dt = a.screenY + a.physicalHeight;
        return a.screenX <= I.x + O && a.screenY <= I.y + O && ye >= q - O && dt >= H - O;
      })(), ze = await cs(
        a,
        j,
        z
      );
      await Gt(
        I && B ? Vt(ze, I) : ze
      ), await _e();
      const $e = async () => {
        const { actualRegion: O, currentFrame: q } = await ct(), H = {
          x: a.screenX - O.screenX,
          y: a.screenY - O.screenY,
          width: a.physicalWidth - O.physicalWidth,
          height: a.physicalHeight - O.physicalHeight
        };
        if (Math.abs(H.x) <= Ge && Math.abs(H.y) <= Ge && Math.abs(H.width) <= Ge && Math.abs(H.height) <= Ge)
          return !0;
        const ye = {
          x: q.x + H.x,
          y: q.y + H.y,
          width: Math.max(j, q.width + H.width),
          height: Math.max(z, q.height + H.height)
        };
        return await Gt(
          I && B ? Vt(ye, I) : ye
        ), !1;
      };
      try {
        for (let q = 0; q < Sr && !await $e(); q += 1)
          ;
        const { actualRegion: O } = await ct();
        console.info(`${Y} snap result`, {
          target: a,
          actualRegion: O,
          residual: {
            left: O.screenX - a.screenX,
            top: O.screenY - a.screenY,
            right: O.screenX + O.physicalWidth - (a.screenX + a.physicalWidth),
            bottom: O.screenY + O.physicalHeight - (a.screenY + a.physicalHeight)
          },
          monitorCovering: B
        });
      } catch (O) {
        console.warn(`${Y} snap correction skipped`, O);
      }
      await A();
    }, _s = () => ve(async () => {
      await je();
      const a = await Fi();
      await ws(a);
    }), bs = async () => {
      await t.minimize();
    }, qt = async () => {
      Rt.value = !0;
      try {
        g.value === "exporting" ? await Et().catch(() => {
        }) : await ts(), await Ee(null).catch(() => {
        }), await we(!1).catch(() => {
        });
      } catch {
      }
      await Ai();
    }, Cs = async () => {
      m.value && (await A(), await d("open_file_with_default_app", { filePath: m.value.path }));
    }, xs = async () => {
      m.value && (await A(), await d("show_file_in_folder", { filePath: m.value.path }));
    }, Kt = (a) => {
      a.key === "Escape" && (a.preventDefault(), qt());
    };
    return st(async () => {
      g.value = "ready", await t.setMinSize(new St(mn, wn)).catch(() => {
      }), await we(!0).catch(() => {
      }), await W().catch(() => {
      }), await _e(), await A(), await Be(), await _e(), await t.emit("screen_recorder_ready"), U = await Je("screen_recorder_export_progress", (a) => {
        f.value = a.payload;
      }).catch(() => null), n.value && (C = new ResizeObserver(() => {
        A();
      }), C.observe(n.value)), M = await t.onMoved(() => {
        A();
      }).catch(() => null), window.addEventListener("resize", A), window.addEventListener("keydown", Kt);
    }), xe(rt, (a) => {
      a ? Be() : Ut();
    }), xe(g, (a) => {
      a !== "recording" && (h.value = 0), a !== "exporting" && (f.value = null);
    }), bn(() => {
      C?.disconnect(), M?.(), U?.(), window.removeEventListener("resize", A), window.removeEventListener("keydown", Kt), Ee(null).catch(() => {
      }), we(!1).catch(() => {
      }), Ut();
    }), (a, r) => (S(), P("div", Zi, [
      u(
        "div",
        {
          class: $(["recorder-shell", { recording: c(g) === "recording", paused: c(g) === "paused", "snap-aligned": p.value }])
        },
        [
          (S(), P(
            be,
            null,
            $s(y, (b) => u("span", {
              key: b.className,
              class: $(["resize-zone", b.className]),
              onMousedown: Re((j) => ps(b.direction), ["prevent"])
            }, null, 42, Yi)),
            64
            /* STABLE_FRAGMENT */
          )),
          u(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: ds
            },
            [
              u(
                "span",
                Ji,
                R(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              u(
                "div",
                {
                  class: "window-actions",
                  onMousedown: r[0] || (r[0] = Re(() => {
                  }, ["stop"]))
                },
                [
                  u("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: bs
                  }, [
                    N(c(Zs), {
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
                    onClick: qt
                  }, [
                    N(c(Ks), {
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
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          u(
            "main",
            {
              class: "capture-viewport",
              style: se(os.value)
            },
            [
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
              u(
                "div",
                {
                  class: "capture-frame",
                  style: se(ss.value)
                },
                [
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
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          ),
          u(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip"
            },
            [
              u("div", Xi, [
                u("div", Qi, [
                  c(g) === "ready" || c(g) === "completed" ? (S(), P(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Re(_s, ["prevent"])
                    },
                    [
                      N(c(Ys), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : te("v-if", !0),
                  u("button", {
                    class: $(["audio-meter", { active: Pe.value && h.value > 0.03, metering: Pe.value && !v.value, muted: !Pe.value || v.value }]),
                    title: is.value,
                    "aria-label": "系统声音录制状态",
                    disabled: c(g) === "exporting" || c(_).format === "gif"
                  }, [
                    u(
                      "span",
                      {
                        class: "audio-bars",
                        style: se(as.value)
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
                  ], 10, er)
                ]),
                u("label", tr, [
                  le(u("select", {
                    "onUpdate:modelValue": r[1] || (r[1] = (b) => c(_).fps = b),
                    disabled: Ne.value
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
                  ]), 8, nr), [
                    [pt, c(_).fps]
                  ]),
                  r[15] || (r[15] = u(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                le(u("select", {
                  "onUpdate:modelValue": r[2] || (r[2] = (b) => c(_).format = b),
                  class: "format-select optional-format",
                  disabled: Ne.value
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
                ]), 8, sr), [
                  [pt, c(_).format]
                ]),
                le(u("select", {
                  "onUpdate:modelValue": r[3] || (r[3] = (b) => c(_).quality = b),
                  class: "quality-select optional-quality",
                  disabled: Ne.value
                }, [
                  u(
                    "option",
                    ar,
                    R(a.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  u(
                    "option",
                    ir,
                    R(a.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  u(
                    "option",
                    rr,
                    R(a.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, or), [
                  [pt, c(_).quality]
                ]),
                u("div", lr, [
                  u("label", ur, [
                    u("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, cr)
                  ]),
                  r[17] || (r[17] = u(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  u("label", dr, [
                    u("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, pr)
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
              u("div", hr, [
                c(g) === "recording" || c(g) === "paused" ? (S(), P(
                  be,
                  { key: 0 },
                  [
                    u(
                      "span",
                      fr,
                      R(ls.value),
                      1
                      /* TEXT */
                    ),
                    u("button", {
                      class: "control-button",
                      onClick: r[4] || (r[4] = (b) => c(g) === "paused" ? gs() : fs())
                    }, [
                      u(
                        "span",
                        gr,
                        R(c(g) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    u("button", {
                      class: "control-button danger",
                      onClick: vs
                    }, [
                      u(
                        "span",
                        vr,
                        R(a.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : c(g) === "exporting" ? (S(), P(
                  be,
                  { key: 1 },
                  [
                    u("div", {
                      class: "export-progress",
                      title: rs.value
                    }, [
                      u("div", mr, [
                        u(
                          "span",
                          null,
                          R(lt.value),
                          1
                          /* TEXT */
                        ),
                        u(
                          "strong",
                          null,
                          R(Wt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      u("div", wr, [
                        u(
                          "span",
                          {
                            style: se({ width: `${Wt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, yr),
                    u("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: ys
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
                )) : c(g) === "completed" && c(m) ? (S(), P(
                  be,
                  { key: 2 },
                  [
                    u("span", {
                      class: "save-status optional-save-status",
                      title: c(m).path
                    }, R(c(m).hasAudio ? "已保存·有声" : "已保存·无声"), 9, _r),
                    u("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Cs
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
                      onClick: xs
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
                      onClick: ms
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
                )) : (S(), P("button", {
                  key: 3,
                  class: "record-button",
                  disabled: c(F)?.available === !1 || l.value.width < Ve || l.value.height < Ve,
                  onClick: hs
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
                    Cr,
                    R(a.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, br))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      c(F) && !c(F).available ? (S(), P(
        "p",
        xr,
        R(c(F).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : te("v-if", !0)
    ]));
  }
}), Or = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Mr = /* @__PURE__ */ Or(kr, [["__scopeId", "data-v-229f3e4e"]]), Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Nr as activate
};
