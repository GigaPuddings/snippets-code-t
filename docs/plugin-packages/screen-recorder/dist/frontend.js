import { inject as le, createVNode as I, getCurrentInstance as Se, ref as S, computed as _, unref as u, readonly as zs, getCurrentScope as Es, onScopeDispose as $s, onMounted as it, nextTick as Ce, watch as ke, isRef as Ls, warn as Rs, provide as Ws, defineComponent as A, createElementBlock as N, openBlock as k, mergeProps as Ds, renderSlot as Me, createElementVNode as c, normalizeClass as $, Transition as Mt, withCtx as ce, withDirectives as ue, normalizeStyle as Oe, createTextVNode as As, toDisplayString as W, vShow as Je, shallowReactive as Fs, createBlock as Q, createCommentVNode as ee, resolveDynamicComponent as Mn, Fragment as xe, withModifiers as Ae, isVNode as je, render as Qe, onUnmounted as On, renderList as js, vModelSelect as ft } from "vue";
const Br = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Fr)
  });
};
function Bs(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Hs(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ye;
const K = "__TAURI_TO_IPC_KEY__";
function Gs(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Us {
  get rid() {
    return Bs(this, Ye, "f");
  }
  constructor(t) {
    Ye.set(this, void 0), Hs(this, Ye, t);
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
Ye = /* @__PURE__ */ new WeakMap();
class re {
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
    return new de(this.width * t, this.height * t);
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
class de {
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
    return new re(this.width / t, this.height / t);
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
    return this.size instanceof re ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof de ? this.size : this.size.toPhysical(t);
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
class Tn {
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
    return new Tn(this.x / t, this.y / t);
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
class qe {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Tn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Z ? this.position : this.position.toPhysical(t);
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
var H;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(H || (H = {}));
async function In(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function et(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: o,
    handler: Gs(t)
  }).then((l) => async () => In(e, l));
}
async function Vs(e, t, n) {
  return et(e, (s) => {
    In(e, s.id), t(s);
  }, n);
}
async function qs(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ks(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Fe extends Us {
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
      rgba: tt(t),
      width: n,
      height: s
    }).then((o) => new Fe(o));
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
      bytes: tt(t)
    }).then((n) => new Fe(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new Fe(n));
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
function tt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Fe ? e.rid : e;
}
var Ct;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ct || (Ct = {}));
class Ys {
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
var en;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(en || (en = {}));
function Pn() {
  return new Nn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function gt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new Nn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const vt = ["tauri://created", "tauri://error"];
class Nn {
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
    return (n = (await gt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Pn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return gt();
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
    for (const t of await gt())
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
    } : et(t, n, {
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
    } : Vs(t, n, {
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
    if (vt.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return qs(t, n);
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
    if (vt.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Ks(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return vt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new de(t));
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
    }).then((t) => new de(t));
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
    return t && (t === Ct.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
      value: t instanceof qe ? t : new qe(t)
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
      value: tt(t)
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
      value: t instanceof qe ? t : new qe(t)
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
      value: t ? tt(t) : void 0
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
    return this.listen(H.WINDOW_RESIZED, (n) => {
      n.payload = new de(n.payload), t(n);
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
    return this.listen(H.WINDOW_MOVED, (n) => {
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
    return this.listen(H.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new Ys(n);
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
    const n = await this.listen(H.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new Z(r.payload.position)
        }
      });
    }), s = await this.listen(H.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new Z(r.payload.position)
        }
      });
    }), o = await this.listen(H.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new Z(r.payload.position)
        }
      });
    }), l = await this.listen(H.DRAG_LEAVE, (r) => {
      t({ ...r, payload: { type: "leave" } });
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
    const n = await this.listen(H.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(H.WINDOW_BLUR, (o) => {
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
    return this.listen(H.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(H.WINDOW_THEME_CHANGED, t);
  }
}
var tn;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(tn || (tn = {}));
var nn;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(nn || (nn = {}));
var sn;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(sn || (sn = {}));
function Xs(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Z(e.position),
    size: new de(e.size)
  };
}
async function Zs(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Xs);
}
var Js = {
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
function Qs() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function eo(e, t, n) {
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
var to = Symbol("icon-context");
function Ot(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var r = Qs(), h = le(to, Js);
      return function() {
        var p = l.size, v = l.strokeWidth, f = l.strokeLinecap, x = l.strokeLinejoin, O = l.theme, T = l.fill, V = l.spin, y = eo(r, {
          size: p,
          strokeWidth: v,
          strokeLinecap: f,
          strokeLinejoin: x,
          theme: O,
          fill: T
        }, h), g = [h.prefix + "-icon"];
        return g.push(h.prefix + "-icon-" + e), V && g.push(h.prefix + "-icon-spin"), I("span", {
          class: g.join(" ")
        }, [n(y)]);
      };
    }
  };
  return s;
}
const no = Ot("close-small", !1, function(e) {
  return I("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [I("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), I("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), so = Ot("minus", !1, function(e) {
  return I("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [I("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oo = Ot("radar", !1, function(e) {
  return I("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [I("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), I("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), I("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), I("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), I("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), zn = Symbol(), Xe = "el", ao = "is-", ae = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, En = Symbol("namespaceContextKey"), io = (e) => {
  const t = e || (Se() ? le(En, S(Xe)) : S(Xe));
  return _(() => u(t) || Xe);
}, Tt = (e, t) => {
  const n = io(t);
  return {
    namespace: n,
    b: (y = "") => ae(n.value, e, y, "", ""),
    e: (y) => y ? ae(n.value, e, "", y, "") : "",
    m: (y) => y ? ae(n.value, e, "", "", y) : "",
    be: (y, g) => y && g ? ae(n.value, e, y, g, "") : "",
    em: (y, g) => y && g ? ae(n.value, e, "", y, g) : "",
    bm: (y, g) => y && g ? ae(n.value, e, y, "", g) : "",
    bem: (y, g, C) => y && g && C ? ae(n.value, e, y, g, C) : "",
    is: (y, ...g) => {
      const C = g.length >= 1 ? g[0] : !0;
      return y && C ? `${ao}${y}` : "";
    },
    cssVar: (y) => {
      const g = {};
      for (const C in y)
        y[C] && (g[`--${n.value}-${C}`] = y[C]);
      return g;
    },
    cssVarName: (y) => `--${n.value}-${y}`,
    cssVarBlock: (y) => {
      const g = {};
      for (const C in y)
        y[C] && (g[`--${n.value}-${e}-${C}`] = y[C]);
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
const ro = Object.prototype.hasOwnProperty, on = (e, t) => ro.call(e, t), Be = (e) => typeof e == "function", he = (e) => typeof e == "string", $n = (e) => e !== null && typeof e == "object";
var lo = typeof global == "object" && global && global.Object === Object && global, co = typeof self == "object" && self && self.Object === Object && self, It = lo || co || Function("return this")(), Te = It.Symbol, Ln = Object.prototype, uo = Ln.hasOwnProperty, ho = Ln.toString, We = Te ? Te.toStringTag : void 0;
function po(e) {
  var t = uo.call(e, We), n = e[We];
  try {
    e[We] = void 0;
    var s = !0;
  } catch {
  }
  var o = ho.call(e);
  return s && (t ? e[We] = n : delete e[We]), o;
}
var fo = Object.prototype, go = fo.toString;
function vo(e) {
  return go.call(e);
}
var yo = "[object Null]", wo = "[object Undefined]", an = Te ? Te.toStringTag : void 0;
function Rn(e) {
  return e == null ? e === void 0 ? wo : yo : an && an in Object(e) ? po(e) : vo(e);
}
function mo(e) {
  return e != null && typeof e == "object";
}
var _o = "[object Symbol]";
function Pt(e) {
  return typeof e == "symbol" || mo(e) && Rn(e) == _o;
}
function bo(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Nt = Array.isArray, rn = Te ? Te.prototype : void 0, ln = rn ? rn.toString : void 0;
function Wn(e) {
  if (typeof e == "string")
    return e;
  if (Nt(e))
    return bo(e, Wn) + "";
  if (Pt(e))
    return ln ? ln.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Dn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Co = "[object AsyncFunction]", xo = "[object Function]", So = "[object GeneratorFunction]", ko = "[object Proxy]";
function Mo(e) {
  if (!Dn(e))
    return !1;
  var t = Rn(e);
  return t == xo || t == So || t == Co || t == ko;
}
var yt = It["__core-js_shared__"], cn = function() {
  var e = /[^.]+$/.exec(yt && yt.keys && yt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Oo(e) {
  return !!cn && cn in e;
}
var To = Function.prototype, Io = To.toString;
function Po(e) {
  if (e != null) {
    try {
      return Io.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var No = /[\\^$.*+?()[\]{}|]/g, zo = /^\[object .+?Constructor\]$/, Eo = Function.prototype, $o = Object.prototype, Lo = Eo.toString, Ro = $o.hasOwnProperty, Wo = RegExp(
  "^" + Lo.call(Ro).replace(No, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Do(e) {
  if (!Dn(e) || Oo(e))
    return !1;
  var t = Mo(e) ? Wo : zo;
  return t.test(Po(e));
}
function Ao(e, t) {
  return e?.[t];
}
function An(e, t) {
  var n = Ao(e, t);
  return Do(n) ? n : void 0;
}
function Fo(e, t) {
  return e === t || e !== e && t !== t;
}
var jo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bo = /^\w*$/;
function Ho(e, t) {
  if (Nt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pt(e) ? !0 : Bo.test(e) || !jo.test(e) || t != null && e in Object(t);
}
var He = An(Object, "create");
function Go() {
  this.__data__ = He ? He(null) : {}, this.size = 0;
}
function Uo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Vo = "__lodash_hash_undefined__", qo = Object.prototype, Ko = qo.hasOwnProperty;
function Yo(e) {
  var t = this.__data__;
  if (He) {
    var n = t[e];
    return n === Vo ? void 0 : n;
  }
  return Ko.call(t, e) ? t[e] : void 0;
}
var Xo = Object.prototype, Zo = Xo.hasOwnProperty;
function Jo(e) {
  var t = this.__data__;
  return He ? t[e] !== void 0 : Zo.call(t, e);
}
var Qo = "__lodash_hash_undefined__";
function ea(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = He && t === void 0 ? Qo : t, this;
}
function pe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
pe.prototype.clear = Go;
pe.prototype.delete = Uo;
pe.prototype.get = Yo;
pe.prototype.has = Jo;
pe.prototype.set = ea;
function ta() {
  this.__data__ = [], this.size = 0;
}
function rt(e, t) {
  for (var n = e.length; n--; )
    if (Fo(e[n][0], t))
      return n;
  return -1;
}
var na = Array.prototype, sa = na.splice;
function oa(e) {
  var t = this.__data__, n = rt(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : sa.call(t, n, 1), --this.size, !0;
}
function aa(e) {
  var t = this.__data__, n = rt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ia(e) {
  return rt(this.__data__, e) > -1;
}
function ra(e, t) {
  var n = this.__data__, s = rt(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Ne.prototype.clear = ta;
Ne.prototype.delete = oa;
Ne.prototype.get = aa;
Ne.prototype.has = ia;
Ne.prototype.set = ra;
var la = An(It, "Map");
function ca() {
  this.size = 0, this.__data__ = {
    hash: new pe(),
    map: new (la || Ne)(),
    string: new pe()
  };
}
function ua(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function lt(e, t) {
  var n = e.__data__;
  return ua(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function da(e) {
  var t = lt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ha(e) {
  return lt(this, e).get(e);
}
function pa(e) {
  return lt(this, e).has(e);
}
function fa(e, t) {
  var n = lt(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ge.prototype.clear = ca;
ge.prototype.delete = da;
ge.prototype.get = ha;
ge.prototype.has = pa;
ge.prototype.set = fa;
var ga = "Expected a function";
function zt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ga);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var r = e.apply(this, s);
    return n.cache = l.set(o, r) || l, r;
  };
  return n.cache = new (zt.Cache || ge)(), n;
}
zt.Cache = ge;
var va = 500;
function ya(e) {
  var t = zt(e, function(s) {
    return n.size === va && n.clear(), s;
  }), n = t.cache;
  return t;
}
var wa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ma = /\\(\\)?/g, _a = ya(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(wa, function(n, s, o, l) {
    t.push(o ? l.replace(ma, "$1") : s || n);
  }), t;
});
function ba(e) {
  return e == null ? "" : Wn(e);
}
function Ca(e, t) {
  return Nt(e) ? e : Ho(e, t) ? [e] : _a(ba(e));
}
function xa(e) {
  if (typeof e == "string" || Pt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Sa(e, t) {
  t = Ca(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[xa(t[n++])];
  return n && n == s ? e : void 0;
}
function ka(e, t, n) {
  var s = e == null ? void 0 : Sa(e, t);
  return s === void 0 ? n : s;
}
function Ma(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Fn = (e) => e === void 0, un = (e) => typeof e == "boolean", fe = (e) => typeof e == "number", xt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Oa = (e) => he(e) ? !Number.isNaN(Number(e)) : !1;
var dn;
const ve = typeof window < "u", Ta = (e) => typeof e == "string", Ia = () => {
};
ve && ((dn = window?.navigator) != null && dn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Et(e) {
  return typeof e == "function" ? e() : u(e);
}
function Pa(e) {
  return e;
}
function $t(e) {
  return Es() ? ($s(e), !0) : !1;
}
function Na(e, t = !0) {
  Se() ? it(e) : t ? e() : Ce(e);
}
function jn(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = S(!1);
  let l = null;
  function r() {
    l && (clearTimeout(l), l = null);
  }
  function h() {
    o.value = !1, r();
  }
  function p(...v) {
    r(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...v);
    }, Et(t));
  }
  return s && (o.value = !0, ve && p()), $t(h), {
    isPending: zs(o),
    start: p,
    stop: h
  };
}
function Bn(e) {
  var t;
  const n = Et(e);
  return (t = n?.$el) != null ? t : n;
}
const Hn = ve ? window : void 0;
function Gn(...e) {
  let t, n, s, o;
  if (Ta(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Hn) : [t, n, s, o] = e, !t)
    return Ia;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], r = () => {
    l.forEach((f) => f()), l.length = 0;
  }, h = (f, x, O, T) => (f.addEventListener(x, O, T), () => f.removeEventListener(x, O, T)), p = ke(() => [Bn(t), Et(o)], ([f, x]) => {
    r(), f && l.push(...n.flatMap((O) => s.map((T) => h(f, O, T, x))));
  }, { immediate: !0, flush: "post" }), v = () => {
    p(), r();
  };
  return $t(v), v;
}
function za(e, t = !1) {
  const n = S(), s = () => n.value = !!e();
  return s(), Na(s, t), n;
}
const hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pn = "__vueuse_ssr_handlers__";
hn[pn] = hn[pn] || {};
var fn = Object.getOwnPropertySymbols, Ea = Object.prototype.hasOwnProperty, $a = Object.prototype.propertyIsEnumerable, La = (e, t) => {
  var n = {};
  for (var s in e)
    Ea.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && fn)
    for (var s of fn(e))
      t.indexOf(s) < 0 && $a.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ra(e, t, n = {}) {
  const s = n, { window: o = Hn } = s, l = La(s, ["window"]);
  let r;
  const h = za(() => o && "ResizeObserver" in o), p = () => {
    r && (r.disconnect(), r = void 0);
  }, v = ke(() => Bn(e), (x) => {
    p(), h.value && o && x && (r = new ResizeObserver(t), r.observe(x, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    p(), v();
  };
  return $t(f), {
    isSupported: h,
    stop: f
  };
}
var gn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(gn || (gn = {}));
var Wa = Object.defineProperty, vn = Object.getOwnPropertySymbols, Da = Object.prototype.hasOwnProperty, Aa = Object.prototype.propertyIsEnumerable, yn = (e, t, n) => t in e ? Wa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fa = (e, t) => {
  for (var n in t || (t = {}))
    Da.call(t, n) && yn(e, n, t[n]);
  if (vn)
    for (var n of vn(t))
      Aa.call(t, n) && yn(e, n, t[n]);
  return e;
};
const ja = {
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
Fa({
  linear: Pa
}, ja);
const wn = {
  current: 0
}, mn = S(0), Un = 2e3, _n = Symbol("elZIndexContextKey"), Vn = Symbol("zIndexContextKey"), Ba = (e) => {
  const t = Se() ? le(_n, wn) : wn, n = e || (Se() ? le(Vn, void 0) : void 0), s = _(() => {
    const r = u(n);
    return fe(r) ? r : Un;
  }), o = _(() => s.value + mn.value), l = () => (t.current++, mn.value = t.current, o.value);
  return !ve && le(_n), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var Ha = {
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
const Ga = (e) => (t, n) => Ua(t, n, u(e)), Ua = (e, t, n) => ka(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), Va = (e) => {
  const t = _(() => u(e).name), n = Ls(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Ga(e)
  };
}, qn = Symbol("localeContextKey"), qa = (e) => {
  const t = e || le(qn, S());
  return Va(_(() => t.value || Ha));
}, Kn = "__epPropKey", G = (e) => e, Ka = (e) => $n(e) && !!e[Kn], Yn = (e, t) => {
  if (!$n(e) || Ka(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: r } = e, p = {
    type: l,
    required: !!s,
    validator: n || r ? (v) => {
      let f = !1, x = [];
      if (n && (x = Array.from(n), on(e, "default") && x.push(o), f || (f = x.includes(v))), r && (f || (f = r(v))), !f && x.length > 0) {
        const O = [...new Set(x)].map((T) => JSON.stringify(T)).join(", ");
        Rs(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${O}], got value ${JSON.stringify(v)}.`);
      }
      return f;
    } : void 0,
    [Kn]: !0
  };
  return on(e, "default") && (p.default = o), p;
}, ze = (e) => Ma(Object.entries(e).map(([t, n]) => [
  t,
  Yn(n, t)
])), Ya = ["", "default", "small", "large"], Xa = Yn({
  type: String,
  values: Ya,
  required: !1
}), Za = Symbol("size"), Ja = Symbol("emptyValuesContextKey"), Qa = ze({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Be(e) ? !e() : !e
  }
}), bn = (e) => Object.keys(e), nt = S();
function Xn(e, t = void 0) {
  return Se() ? le(zn, nt) : nt;
}
function Zn(e, t) {
  const n = Xn(), s = Tt(e, _(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || Xe;
  })), o = qa(_(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), l = Ba(_(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || Un;
  })), r = _(() => {
    var h;
    return u(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return Jn(_(() => u(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: r
  };
}
const Jn = (e, t, n = !1) => {
  var s;
  const o = !!Se(), l = o ? Xn() : void 0, r = (s = void 0) != null ? s : o ? Ws : void 0;
  if (!r)
    return;
  const h = _(() => {
    const p = u(e);
    return l?.value ? ei(l.value, p) : p;
  });
  return r(zn, h), r(qn, _(() => h.value.locale)), r(En, _(() => h.value.namespace)), r(Vn, _(() => h.value.zIndex)), r(Za, {
    size: _(() => h.value.size || "")
  }), r(Ja, _(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !nt.value) && (nt.value = h.value), h;
}, ei = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...bn(e), ...bn(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var ct = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function St(e, t = "px") {
  if (!e)
    return "";
  if (fe(e) || Oa(e))
    return `${e}${t}`;
  if (he(e))
    return e;
}
const Qn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), es = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ti = ze({
  size: {
    type: G([Number, String])
  },
  color: {
    type: String
  }
}), ni = A({
  name: "ElIcon",
  inheritAttrs: !1
}), si = /* @__PURE__ */ A({
  ...ni,
  props: ti,
  setup(e) {
    const t = e, n = Tt("icon"), s = _(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: Fn(o) ? void 0 : St(o),
        "--color": l
      };
    });
    return (o, l) => (k(), N("i", Ds({
      class: u(n).b(),
      style: u(s)
    }, o.$attrs), [
      Me(o.$slots, "default")
    ], 16));
  }
});
var oi = /* @__PURE__ */ ct(si, [["__file", "icon.vue"]]);
const st = Qn(oi);
/*! Element Plus Icons Vue v2.3.1 */
var ai = /* @__PURE__ */ A({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), ii = ai, ri = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ts = ri, li = /* @__PURE__ */ A({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ci = li, ui = /* @__PURE__ */ A({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), di = ui, hi = /* @__PURE__ */ A({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), pi = hi;
const ns = G([
  String,
  Object,
  Function
]), fi = {
  Close: ts
}, gi = {
  Close: ts
}, ot = {
  success: di,
  warning: pi,
  error: ii,
  info: ci
}, vi = (e) => e, Ze = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, yi = ze({
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
}), wi = A({
  name: "ElBadge"
}), mi = /* @__PURE__ */ A({
  ...wi,
  props: yi,
  setup(e, { expose: t }) {
    const n = e, s = Tt("badge"), o = _(() => n.isDot ? "" : fe(n.value) && fe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = _(() => {
      var r, h, p, v, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: St(-((h = (r = n.offset) == null ? void 0 : r[0]) != null ? h : 0)),
          marginTop: St((v = (p = n.offset) == null ? void 0 : p[1]) != null ? v : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (r, h) => (k(), N("div", {
      class: $(u(s).b())
    }, [
      Me(r.$slots, "default"),
      I(Mt, {
        name: `${u(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ce(() => [
          ue(c("sup", {
            class: $([
              u(s).e("content"),
              u(s).em("content", r.type),
              u(s).is("fixed", !!r.$slots.default),
              u(s).is("dot", r.isDot),
              u(s).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: Oe(u(l))
          }, [
            Me(r.$slots, "content", { value: u(o) }, () => [
              As(W(u(o)), 1)
            ])
          ], 6), [
            [Je, !r.hidden && (u(o) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var _i = /* @__PURE__ */ ct(mi, [["__file", "badge.vue"]]);
const bi = Qn(_i), Ci = ze({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: G(Object)
  },
  size: Xa,
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
  ...Qa
}), Y = {};
A({
  name: "ElConfigProvider",
  props: Ci,
  setup(e, { slots: t }) {
    ke(() => e.message, (s) => {
      Object.assign(Y, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Jn(e);
    return () => Me(t, "default", { config: n?.value });
  }
});
const ss = ["success", "info", "warning", "error"], R = vi({
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
  appendTo: ve ? document.body : void 0
}), xi = ze({
  customClass: {
    type: String,
    default: R.customClass
  },
  center: {
    type: Boolean,
    default: R.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: R.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: R.duration
  },
  icon: {
    type: ns,
    default: R.icon
  },
  id: {
    type: String,
    default: R.id
  },
  message: {
    type: G([
      String,
      Object,
      Function
    ]),
    default: R.message
  },
  onClose: {
    type: G(Function),
    default: R.onClose
  },
  showClose: {
    type: Boolean,
    default: R.showClose
  },
  type: {
    type: String,
    values: ss,
    default: R.type
  },
  plain: {
    type: Boolean,
    default: R.plain
  },
  offset: {
    type: Number,
    default: R.offset
  },
  zIndex: {
    type: Number,
    default: R.zIndex
  },
  grouping: {
    type: Boolean,
    default: R.grouping
  },
  repeatNum: {
    type: Number,
    default: R.repeatNum
  }
}), Si = {
  destroy: () => !0
}, X = Fs([]), ki = (e) => {
  const t = X.findIndex((o) => o.id === e), n = X[t];
  let s;
  return t > 0 && (s = X[t - 1]), { current: n, prev: s };
}, Mi = (e) => {
  const { prev: t } = ki(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Oi = (e, t) => X.findIndex((s) => s.id === e) > 0 ? 16 : t, Ti = A({
  name: "ElMessage"
}), Ii = /* @__PURE__ */ A({
  ...Ti,
  props: xi,
  emits: Si,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = gi, { ns: o, zIndex: l } = Zn("message"), { currentZIndex: r, nextZIndex: h } = l, p = S(), v = S(!1), f = S(0);
    let x;
    const O = _(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), T = _(() => {
      const M = n.type;
      return { [o.bm("icon", M)]: M && ot[M] };
    }), V = _(() => n.icon || ot[n.type] || ""), y = _(() => Mi(n.id)), g = _(() => Oi(n.id, n.offset) + y.value), C = _(() => f.value + g.value), B = _(() => ({
      top: `${g.value}px`,
      zIndex: r.value
    }));
    function m() {
      n.duration !== 0 && ({ stop: x } = jn(() => {
        D();
      }, n.duration));
    }
    function ne() {
      x?.();
    }
    function D() {
      v.value = !1;
    }
    function ye({ code: M }) {
      M === Ze.esc && D();
    }
    return it(() => {
      m(), h(), v.value = !0;
    }), ke(() => n.repeatNum, () => {
      ne(), m();
    }), Gn(document, "keydown", ye), Ra(p, () => {
      f.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: C,
      close: D
    }), (M, Lt) => (k(), Q(Mt, {
      name: u(o).b("fade"),
      onBeforeLeave: M.onClose,
      onAfterLeave: (Rt) => M.$emit("destroy"),
      persisted: ""
    }, {
      default: ce(() => [
        ue(c("div", {
          id: M.id,
          ref_key: "messageRef",
          ref: p,
          class: $([
            u(o).b(),
            { [u(o).m(M.type)]: M.type },
            u(o).is("center", M.center),
            u(o).is("closable", M.showClose),
            u(o).is("plain", M.plain),
            M.customClass
          ]),
          style: Oe(u(B)),
          role: "alert",
          onMouseenter: ne,
          onMouseleave: m
        }, [
          M.repeatNum > 1 ? (k(), Q(u(bi), {
            key: 0,
            value: M.repeatNum,
            type: u(O),
            class: $(u(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          u(V) ? (k(), Q(u(st), {
            key: 1,
            class: $([u(o).e("icon"), u(T)])
          }, {
            default: ce(() => [
              (k(), Q(Mn(u(V))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          Me(M.$slots, "default", {}, () => [
            M.dangerouslyUseHTMLString ? (k(), N(xe, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: $(u(o).e("content")),
                innerHTML: M.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), N("p", {
              key: 0,
              class: $(u(o).e("content"))
            }, W(M.message), 3))
          ]),
          M.showClose ? (k(), Q(u(st), {
            key: 2,
            class: $(u(o).e("closeBtn")),
            onClick: Ae(D, ["stop"])
          }, {
            default: ce(() => [
              I(u(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [Je, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Pi = /* @__PURE__ */ ct(Ii, [["__file", "message.vue"]]);
let Ni = 1;
const os = (e) => {
  const t = !e || he(e) || je(e) || Be(e) ? { message: e } : e, n = {
    ...R,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (he(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    xt(s) || (s = document.body), n.appendTo = s;
  }
  return un(Y.grouping) && !n.grouping && (n.grouping = Y.grouping), fe(Y.duration) && n.duration === 3e3 && (n.duration = Y.duration), fe(Y.offset) && n.offset === 16 && (n.offset = Y.offset), un(Y.showClose) && !n.showClose && (n.showClose = Y.showClose), n;
}, zi = (e) => {
  const t = X.indexOf(e);
  if (t === -1)
    return;
  X.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ei = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Ni++}`, o = t.onClose, l = document.createElement("div"), r = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), zi(f);
    },
    onDestroy: () => {
      Qe(null, l);
    }
  }, h = I(Pi, r, Be(r.message) || je(r.message) ? {
    default: Be(r.message) ? r.message : () => r.message
  } : null);
  h.appContext = n || Ie._context, Qe(h, l), e.appendChild(l.firstElementChild);
  const p = h.component, f = {
    id: s,
    vnode: h,
    vm: p,
    handler: {
      close: () => {
        p.exposed.visible.value = !1;
      }
    },
    props: h.component.props
  };
  return f;
}, Ie = (e = {}, t) => {
  if (!ve)
    return { close: () => {
    } };
  const n = os(e);
  if (n.grouping && X.length) {
    const o = X.find(({ vnode: l }) => {
      var r;
      return ((r = l.props) == null ? void 0 : r.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (fe(Y.max) && X.length >= Y.max)
    return { close: () => {
    } };
  const s = Ei(n, t);
  return X.push(s), s.handler;
};
ss.forEach((e) => {
  Ie[e] = (t = {}, n) => {
    const s = os(t);
    return Ie({ ...s, type: e }, n);
  };
});
function $i(e) {
  for (const t of X)
    (!e || e === t.props.type) && t.handler.close();
}
Ie.closeAll = $i;
Ie._context = null;
const Li = es(Ie, "$message"), as = [
  "success",
  "info",
  "warning",
  "error"
], Ri = ze({
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
    type: ns
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
    values: [...as, ""],
    default: ""
  },
  zIndex: Number
}), Wi = {
  destroy: () => !0
}, Di = A({
  name: "ElNotification"
}), Ai = /* @__PURE__ */ A({
  ...Di,
  props: Ri,
  emits: Wi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Zn("notification"), { nextZIndex: l, currentZIndex: r } = o, { Close: h } = fi, p = S(!1);
    let v;
    const f = _(() => {
      const m = n.type;
      return m && ot[n.type] ? s.m(m) : "";
    }), x = _(() => n.type && ot[n.type] || n.icon), O = _(() => n.position.endsWith("right") ? "right" : "left"), T = _(() => n.position.startsWith("top") ? "top" : "bottom"), V = _(() => {
      var m;
      return {
        [T.value]: `${n.offset}px`,
        zIndex: (m = n.zIndex) != null ? m : r.value
      };
    });
    function y() {
      n.duration > 0 && ({ stop: v } = jn(() => {
        p.value && C();
      }, n.duration));
    }
    function g() {
      v?.();
    }
    function C() {
      p.value = !1;
    }
    function B({ code: m }) {
      m === Ze.delete || m === Ze.backspace ? g() : m === Ze.esc ? p.value && C() : y();
    }
    return it(() => {
      y(), l(), p.value = !0;
    }), Gn(document, "keydown", B), t({
      visible: p,
      close: C
    }), (m, ne) => (k(), Q(Mt, {
      name: u(s).b("fade"),
      onBeforeLeave: m.onClose,
      onAfterLeave: (D) => m.$emit("destroy"),
      persisted: ""
    }, {
      default: ce(() => [
        ue(c("div", {
          id: m.id,
          class: $([u(s).b(), m.customClass, u(O)]),
          style: Oe(u(V)),
          role: "alert",
          onMouseenter: g,
          onMouseleave: y,
          onClick: m.onClick
        }, [
          u(x) ? (k(), Q(u(st), {
            key: 0,
            class: $([u(s).e("icon"), u(f)])
          }, {
            default: ce(() => [
              (k(), Q(Mn(u(x))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          c("div", {
            class: $(u(s).e("group"))
          }, [
            c("h2", {
              class: $(u(s).e("title")),
              textContent: W(m.title)
            }, null, 10, ["textContent"]),
            ue(c("div", {
              class: $(u(s).e("content")),
              style: Oe(m.title ? void 0 : { margin: 0 })
            }, [
              Me(m.$slots, "default", {}, () => [
                m.dangerouslyUseHTMLString ? (k(), N(xe, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: m.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), N("p", { key: 0 }, W(m.message), 1))
              ])
            ], 6), [
              [Je, m.message]
            ]),
            m.showClose ? (k(), Q(u(st), {
              key: 0,
              class: $(u(s).e("closeBtn")),
              onClick: Ae(C, ["stop"])
            }, {
              default: ce(() => [
                I(u(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Je, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Fi = /* @__PURE__ */ ct(Ai, [["__file", "notification.vue"]]);
const at = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, kt = 16;
let ji = 1;
const Pe = function(e = {}, t) {
  if (!ve)
    return { close: () => {
    } };
  (he(e) || je(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  at[n].forEach(({ vm: f }) => {
    var x;
    s += (((x = f.el) == null ? void 0 : x.offsetHeight) || 0) + kt;
  }), s += kt;
  const o = `notification_${ji++}`, l = e.onClose, r = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Bi(o, n, l);
    }
  };
  let h = document.body;
  xt(e.appendTo) ? h = e.appendTo : he(e.appendTo) && (h = document.querySelector(e.appendTo)), xt(h) || (h = document.body);
  const p = document.createElement("div"), v = I(Fi, r, Be(r.message) ? r.message : je(r.message) ? () => r.message : null);
  return v.appContext = Fn(t) ? Pe._context : t, v.props.onDestroy = () => {
    Qe(null, p);
  }, Qe(v, p), at[n].push({ vm: v }), h.appendChild(p.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
as.forEach((e) => {
  Pe[e] = (t = {}, n) => ((he(t) || je(t)) && (t = {
    message: t
  }), Pe({ ...t, type: e }, n));
});
function Bi(e, t, n) {
  const s = at[t], o = s.findIndex(({ vm: v }) => {
    var f;
    return ((f = v.component) == null ? void 0 : f.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const r = l.el.offsetHeight, h = t.split("-")[0];
  s.splice(o, 1);
  const p = s.length;
  if (!(p < 1))
    for (let v = o; v < p; v++) {
      const { el: f, component: x } = s[v].vm, O = Number.parseInt(f.style[h], 10) - r - kt;
      x.props.offset = O;
    }
}
function Hi() {
  for (const e of Object.values(at))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Pe.closeAll = Hi;
Pe._context = null;
const Gi = es(Pe, "$notify"), wt = {
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
    s === "center" ? Li({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : Gi({
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
}, mt = "[screen-recorder]", Ui = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, U = async (e, t) => {
  const n = performance.now(), s = Ui(t);
  console.info(`${mt} invoke:start ${e}`, s ?? "");
  try {
    const o = await d(e, t);
    return console.info(`${mt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: o
    }), o;
  } catch (o) {
    throw console.error(`${mt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: o
    }), o;
  }
}, Vi = () => U("screen_recorder_get_ffmpeg_status"), _e = (e) => U("screen_recorder_set_capture_excluded", { excluded: e }), ie = (e) => U("screen_recorder_set_passthrough_region", { region: e }), Ke = (e) => U("screen_recorder_set_overlay_window_region", { region: e }), qi = () => U("screen_recorder_pick_target_window"), Ki = () => U("screen_recorder_close_window"), Yi = (e, t) => U("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Xi = () => U("screen_recorder_pause_recording"), Zi = (e, t) => U("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ji = () => U("screen_recorder_stop_recording"), Qi = () => U("screen_recorder_cancel_recording"), er = () => U("screen_recorder_cancel_export"), tr = (e, t) => U("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), Cn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), L = "[screen-recorder]";
function nr() {
  const e = S("selecting"), t = S(Cn()), n = S(null), s = S(null), o = S(""), l = S(null), r = S(0), h = S(0), p = S(null), v = () => {
    h.value = e.value === "recording" && l.value !== null ? r.value + Date.now() - l.value : r.value;
  }, f = () => {
    p.value !== null && (window.clearInterval(p.value), p.value = null);
  }, x = () => {
    f(), v(), p.value = window.setInterval(() => {
      v();
    }, 250);
  }, O = async () => (console.info(`${L} refresh ffmpeg status`), n.value = await Vi(), console.info(`${L} ffmpeg status`, n.value), n.value), T = async (D) => {
    o.value = "", s.value = null, console.info(`${L} begin requested`, { region: D, settings: t.value });
    const ye = n.value ?? await O();
    if (!ye.available)
      throw new Error(ye.message || "FFmpeg unavailable");
    await Yi(D, t.value), e.value = "recording", r.value = 0, h.value = 0, l.value = Date.now(), x(), console.info(`${L} recording started`, { status: e.value });
  }, V = async () => {
    e.value === "recording" && (console.info(`${L} pause requested`, { elapsedMs: h.value }), v(), r.value = h.value, l.value = null, f(), await Xi(), e.value = "paused", console.info(`${L} recording paused`, { accumulatedMs: r.value }));
  }, y = async (D) => {
    e.value === "paused" && (console.info(`${L} resume requested`, { region: D, settings: t.value }), await Zi(D, t.value), e.value = "recording", l.value = Date.now(), x(), console.info(`${L} recording resumed`));
  }, g = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${L} stop requested`, { status: e.value, elapsedMs: h.value }), v(), r.value = h.value, l.value = null, f(), await Ji(), e.value = "exporting", console.info(`${L} recording stopped`, { accumulatedMs: r.value }));
  }, C = async () => {
    console.info(`${L} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await tr(t.value, Math.round(h.value)), e.value = "completed", console.info(`${L} export completed`, s.value), s.value;
    } catch (D) {
      throw e.value = "ready", s.value = null, D;
    }
  }, B = async () => {
    console.info(`${L} cancel export requested`, { status: e.value }), await er(), e.value = "ready", s.value = null;
  }, m = async () => {
    console.info(`${L} cancel requested`, { status: e.value, elapsedMs: h.value }), f(), await Qi(), e.value = "selecting", l.value = null, r.value = 0, h.value = 0, s.value = null, console.info(`${L} canceled`);
  }, ne = () => {
    console.info(`${L} reset session`), e.value = "selecting", l.value = null, r.value = 0, h.value = 0, s.value = null, o.value = "", t.value = Cn();
  };
  return On(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: h,
    refreshFfmpegStatus: O,
    begin: T,
    pause: V,
    resume: y,
    stop: g,
    exportFile: C,
    cancelExport: B,
    cancel: m,
    reset: ne
  };
}
const sr = { class: "screen-recorder" }, or = ["onMousedown"], ar = { class: "window-title" }, ir = { class: "capture-viewport" }, rr = { class: "capture-frame" }, lr = { class: "control-group control-group--tools" }, cr = { class: "tool-pill" }, ur = ["title", "disabled"], dr = { class: "select-field" }, hr = ["disabled"], pr = ["disabled"], fr = ["disabled"], gr = { value: "high" }, vr = { value: "standard" }, yr = { value: "small" }, wr = { class: "dimension-group optional-size" }, mr = { class: "dimension" }, _r = ["value"], br = { class: "dimension" }, Cr = ["value"], xr = { class: "control-group control-group--actions" }, Sr = { class: "time" }, kr = { class: "button-label" }, Mr = { class: "button-label" }, Or = ["title"], Tr = { class: "export-progress__meta" }, Ir = { class: "export-progress__track" }, Pr = ["title"], Nr = ["disabled"], zr = { class: "record-label" }, Er = {
  key: 0,
  class: "warning"
}, q = "[screen-recorder]", be = 80, _t = 420, De = 260, bt = 260, xn = 140, $r = 8, Sn = 1, kn = 0, Lr = 15, Rr = 10, Wr = /* @__PURE__ */ A({
  __name: "index",
  setup(e) {
    const t = Pn(), n = S(null), s = S(null), o = S(null), l = S({ width: 0, height: 0 }), r = S(!1), h = S(!1), p = S(0), v = S(!1), f = S(null);
    let x = null, O = null, T = null, V = null;
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
      settings: C,
      ffmpegStatus: B,
      result: m,
      elapsedMs: ne,
      refreshFfmpegStatus: D,
      begin: ye,
      pause: M,
      resume: Lt,
      stop: Rt,
      exportFile: is,
      cancelExport: Wt,
      cancel: rs,
      reset: ls
    } = nr(), Dt = S(!1), Ee = _(() => g.value === "recording" || g.value === "paused" || g.value === "exporting"), ut = _(() => C.value.audio && C.value.format === "mp4"), $e = _(() => ut.value && g.value === "recording"), cs = _(() => {
      const a = $e.value && !v.value ? p.value : 0, i = (w, b) => Math.max(0.18, Math.min(1, w + a * b)).toFixed(3);
      return {
        "--bar-1": i(0.28, 0.64),
        "--bar-2": i(0.42, 0.78),
        "--bar-3": i(0.34, 0.94),
        "--bar-4": i(0.22, 0.72)
      };
    }), us = _(() => {
      if (C.value.format === "gif")
        return "GIF 不支持音频";
      if (v.value && C.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (m.value?.audioDevice)
        return `已录制音频：${m.value.audioDevice}`;
      if (m.value && !m.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (B.value?.available && !B.value.systemAudioAvailable) {
        const a = B.value.audioDevices?.join("、") || "无";
        return C.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return C.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), At = _(() => {
      const a = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), dt = _(() => {
      const a = f.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), ds = _(() => {
      const a = f.value;
      return a?.totalFrames ? `${dt.value} (${a.currentFrame}/${a.totalFrames})` : dt.value;
    }), hs = _(() => {
      const a = Math.floor(ne.value / 1e3), i = Math.floor(a / 60).toString().padStart(2, "0"), w = (a % 60).toString().padStart(2, "0");
      return `${i}:${w}`;
    }), we = async (a) => {
      try {
        await a();
      } catch (i) {
        console.error(`${q} action failed`, i), Dt.value || wt.msg(i?.message || String(i), "error");
      }
    }, Ft = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), jt = (a) => Math.max(1, Math.round(a)), ht = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const i = a.getBoundingClientRect(), w = await t.scaleFactor(), b = await t.innerPosition(), z = jt(i.width * w), E = jt(i.height * w);
      if (z < be || E < be)
        throw new Error("录制区域太小，请放大录制窗口");
      const j = {
        x: i.left,
        y: i.top,
        width: z / w,
        height: E / w,
        screenX: Math.round(b.x + i.left * w),
        screenY: Math.round(b.y + i.top * w),
        physicalWidth: z,
        physicalHeight: E,
        scale: w
      };
      return console.info(`${q} capture region`, {
        ...j,
        logicalSize: `${j.width}x${j.height}`,
        physicalSize: `${j.physicalWidth}x${j.physicalHeight}`
      }), j;
    }, Bt = async () => {
      const a = await ht(), i = Ft(a.physicalWidth), w = Ft(a.physicalHeight);
      return {
        ...a,
        width: i / a.scale,
        height: w / a.scale,
        physicalWidth: i,
        physicalHeight: w
      };
    }, F = async () => {
      try {
        const a = await ht();
        if (l.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }, h.value) {
          const i = s.value?.getBoundingClientRect().height ?? 0, w = o.value?.getBoundingClientRect().height ?? 0;
          await ie({
            x: Math.round(a.x * a.scale),
            y: Math.round((a.y + i) * a.scale),
            width: a.physicalWidth,
            height: Math.max(
              1,
              a.physicalHeight - Math.round((i + w) * a.scale)
            )
          }).catch(() => {
          });
          return;
        }
        await ie({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        l.value = { width: 0, height: 0 }, await ie(null).catch(() => {
        });
      }
    }, Ge = async () => {
      await ie(null).catch(() => {
      }), await Ke(null).catch(() => {
      });
    }, Ht = () => {
      r.value = !1, h.value = !1;
    }, Gt = () => {
      window.setTimeout(() => {
        F();
      }, 120);
    }, Le = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), ps = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await Le(), document.documentElement.classList.remove("screen-recorder-repaint"), await Le();
    }, fs = async () => {
      await ie(null).catch(() => {
      }), await t.setIgnoreCursorEvents(!0).catch(() => {
      }), await Le(), await t.setIgnoreCursorEvents(!1).catch(() => {
      }), await F();
    }, Ut = async () => {
      const [a, i] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: a.x,
        y: a.y,
        width: i.width,
        height: i.height
      };
    }, Vt = async () => {
      if (!h.value) {
        await Ke(null).catch(() => {
        });
        return;
      }
      const a = await Ut(), i = await t.scaleFactor(), w = s.value?.getBoundingClientRect().height ?? 0, b = o.value?.getBoundingClientRect().height ?? 0;
      await Ke({
        width: a.width,
        height: a.height,
        topHeight: Math.round(w * i),
        bottomHeight: Math.round(b * i)
      }).catch(() => {
      });
    }, qt = (a, i) => {
      const w = Math.min(a.width, i.width), b = Math.min(a.height, i.height), z = i.x + i.width - w, E = i.y + i.height - b;
      return {
        x: Math.min(Math.max(a.x, i.x), z),
        y: Math.min(Math.max(a.y, i.y), E),
        width: w,
        height: b
      };
    }, gs = (a, i, w) => {
      if (!i) return !1;
      const b = Math.max(8, Math.round(8 * w)), z = i.x + i.width, E = i.y + i.height, j = a.screenX + a.physicalWidth, se = a.screenY + a.physicalHeight;
      return a.screenX <= i.x + b && a.screenY <= i.y + b && j >= z - b && se >= E - b;
    }, vs = (a, i, w) => {
      if (!i) return !1;
      const b = Math.max(8, Math.round(8 * w));
      return a.screenX <= i.x + b || a.screenY <= i.y + b || a.screenX + a.physicalWidth >= i.x + i.width - b || a.screenY + a.physicalHeight >= i.y + i.height - b;
    }, ys = (a, i, w) => {
      if (!w) return a;
      const b = Math.round(Lr * i), z = Math.round(Rr * i);
      return {
        ...a,
        physicalWidth: Math.max(be, a.physicalWidth - b),
        physicalHeight: Math.max(be, a.physicalHeight - z)
      };
    }, Kt = async (a) => {
      await t.setSize(new de(Math.round(a.width), Math.round(a.height))), await t.setPosition(new Z(Math.round(a.x), Math.round(a.y))), await Le();
    }, Ue = async () => {
      const [a, i] = await Promise.all([
        ht(),
        Ut()
      ]);
      return { actualRegion: a, currentFrame: i };
    }, ws = async (a, i, w) => {
      const { actualRegion: b, currentFrame: z } = await Ue(), E = b.screenX - z.x, j = b.screenY - z.y, se = Math.max(0, z.width - b.physicalWidth), P = Math.max(0, z.height - b.physicalHeight);
      return {
        x: a.screenX - E,
        y: a.screenY - j,
        width: Math.max(i, a.physicalWidth + se),
        height: Math.max(w, a.physicalHeight + P)
      };
    }, Yt = async () => {
      T?.(), T = null, p.value = 0;
    }, Ve = async () => {
      if (!(!ut.value || T))
        try {
          console.info(`${q} backend audio meter listening`), T = await et("screen_recorder_audio_level", (a) => {
            if (!$e.value) {
              p.value = 0;
              return;
            }
            const i = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            p.value = p.value * 0.38 + i * 0.62;
          }), v.value = !1;
        } catch (a) {
          console.error(`${q} audio meter failed`, a), v.value = !0;
        }
    }, ms = async (a) => {
      a.button !== 0 || Ee.value || (Ht(), await t.setMinSize(new re(_t, De)).catch(() => {
      }), await Ge(), await t.startDragging().catch((i) => {
        wt.msg(i?.message || String(i), "error");
      }), Gt());
    }, _s = async (a) => {
      Ee.value || (Ht(), await t.setMinSize(new re(_t, De)).catch(() => {
      }), await Ge(), await t.startResizeDragging(a).catch((i) => {
        wt.msg(i?.message || String(i), "error");
      }), Gt());
    }, bs = () => we(async () => {
      console.info(`${q} handle start`), f.value = null, await Ve(), await _e(!0).catch(() => {
      }), await F(), await ye(await Bt());
    }), Cs = () => we(async () => {
      console.info(`${q} handle pause`), await M();
    }), xs = () => we(async () => {
      console.info(`${q} handle resume`), await Lt(await Bt());
    }), Ss = () => we(async () => {
      console.info(`${q} handle stop/export`), f.value = {
        stage: "encode",
        message: C.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await Rt(), p.value = 0, await is(), await F(), await _e(!1).catch(() => {
      });
    }), ks = () => we(async () => {
      console.info(`${q} handle cancel export`), await Wt(), f.value = null, await F();
    }), Ms = () => {
      const a = { ...C.value };
      Ge(), ls(), C.value = a, g.value = "ready", m.value = null, f.value = null, _e(!0).catch(() => {
      }), Ce(F), Ve();
    }, Os = async (a) => {
      const i = await Zs(a.screenX, a.screenY), w = i?.scaleFactor || await t.scaleFactor(), b = i ? {
        x: i.position.x,
        y: i.position.y,
        width: i.size.width,
        height: i.size.height
      } : null, z = gs(a, b, w), E = vs(a, b, w);
      r.value = !0, h.value = E, await Ce(), await Le(), await t.setMinSize(
        E ? new re(bt, xn) : new re(bt, De)
      ).catch(() => {
      });
      const j = Math.round(bt * w), se = Math.round(
        (E ? xn : De) * w
      ), P = ys(a, w, !z), Jt = E && b ? {
        x: Math.max(b.x, P.screenX),
        y: Math.max(b.y, P.screenY),
        width: Math.max(j, Math.min(P.physicalWidth, b.width)),
        height: Math.max(se, Math.min(P.physicalHeight, b.height))
      } : await ws(
        P,
        j,
        se
      );
      try {
        if (await Kt(
          b && E ? qt(Jt, b) : Jt
        ), await Ce(), await Vt(), E) {
          const { actualRegion: J } = await Ue();
          console.info(`${q} snap edge result`, {
            target: a,
            snapTarget: P,
            actualRegion: J,
            monitorCovering: z,
            monitorEdge: E
          });
          return;
        }
        const pt = async () => {
          const { actualRegion: J, currentFrame: Re } = await Ue(), te = {
            x: P.screenX - J.screenX,
            y: P.screenY - J.screenY,
            width: P.physicalWidth - J.physicalWidth,
            height: P.physicalHeight - J.physicalHeight
          };
          if (Math.abs(te.x) <= kn && Math.abs(te.y) <= kn && Math.abs(te.width) <= Sn && Math.abs(te.height) <= Sn)
            return !0;
          const Qt = {
            x: Re.x + te.x,
            y: Re.y + te.y,
            width: Math.max(j, Re.width + te.width),
            height: Math.max(se, Re.height + te.height)
          };
          return await Kt(
            b && E ? qt(Qt, b) : Qt
          ), !1;
        };
        for (let J = 0; J < $r && !await pt(); J += 1)
          ;
        const { actualRegion: oe } = await Ue();
        console.info(`${q} snap result`, {
          target: a,
          snapTarget: P,
          actualRegion: oe,
          residual: {
            left: oe.screenX - P.screenX,
            top: oe.screenY - P.screenY,
            right: oe.screenX + oe.physicalWidth - (P.screenX + P.physicalWidth),
            bottom: oe.screenY + oe.physicalHeight - (P.screenY + P.physicalHeight)
          },
          monitorCovering: z
        });
      } catch (pt) {
        console.warn(`${q} snap correction skipped`, pt);
      } finally {
        await fs(), await F(), await Vt(), await ps(), await t.setFocus().catch(() => {
        });
      }
    }, Ts = () => we(async () => {
      await Ge();
      const a = await qi();
      await Os(a);
    }), Is = async () => {
      await t.minimize();
    }, Xt = async () => {
      Dt.value = !0;
      try {
        g.value === "exporting" ? await Wt().catch(() => {
        }) : await rs(), await ie(null).catch(() => {
        }), await _e(!1).catch(() => {
        });
      } catch {
      }
      await Ki();
    }, Ps = async () => {
      m.value && (await F(), await d("open_file_with_default_app", { filePath: m.value.path }));
    }, Ns = async () => {
      m.value && (await F(), await d("show_file_in_folder", { filePath: m.value.path }));
    }, Zt = (a) => {
      a.key === "Escape" && (a.preventDefault(), Xt());
    };
    return it(async () => {
      g.value = "ready", await t.setMinSize(new re(_t, De)).catch(() => {
      }), await _e(!0).catch(() => {
      }), await D().catch(() => {
      }), await Ce(), await F(), await Ve(), await Ce(), await t.emit("screen_recorder_ready"), V = await et("screen_recorder_export_progress", (a) => {
        f.value = a.payload;
      }).catch(() => null), n.value && (x = new ResizeObserver(() => {
        F();
      }), x.observe(n.value)), O = await t.onMoved(() => {
        F();
      }).catch(() => null), window.addEventListener("resize", F), window.addEventListener("keydown", Zt);
    }), ke(ut, (a) => {
      a ? Ve() : Yt();
    }), ke(g, (a) => {
      a !== "recording" && (p.value = 0), a !== "exporting" && (f.value = null);
    }), On(() => {
      x?.disconnect(), O?.(), V?.(), window.removeEventListener("resize", F), window.removeEventListener("keydown", Zt), ie(null).catch(() => {
      }), Ke(null).catch(() => {
      }), _e(!1).catch(() => {
      }), Yt();
    }), (a, i) => (k(), N("div", sr, [
      c(
        "div",
        {
          class: $(["recorder-shell", {
            recording: u(g) === "recording",
            paused: u(g) === "paused",
            "snap-aligned": r.value,
            "snap-fullscreen": h.value
          }])
        },
        [
          (k(), N(
            xe,
            null,
            js(y, (w) => c("span", {
              key: w.className,
              class: $(["resize-zone", w.className]),
              onMousedown: Ae((b) => _s(w.direction), ["prevent"])
            }, null, 42, or)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: ms
            },
            [
              c(
                "span",
                ar,
                W(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: i[0] || (i[0] = Ae(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Is
                  }, [
                    I(u(so), {
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
                    onClick: Xt
                  }, [
                    I(u(no), {
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
          c("main", ir, [
            i[9] || (i[9] = c(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            i[10] || (i[10] = c(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            i[11] || (i[11] = c(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            i[12] || (i[12] = c(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            c("div", rr, [
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
              i[5] || (i[5] = c(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              i[6] || (i[6] = c(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              i[7] || (i[7] = c(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              i[8] || (i[8] = c(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          c(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip"
            },
            [
              c("div", lr, [
                c("div", cr, [
                  u(g) === "ready" || u(g) === "completed" ? (k(), N(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Ae(Ts, ["prevent"])
                    },
                    [
                      I(u(oo), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : ee("v-if", !0),
                  c("button", {
                    class: $(["audio-meter", { active: $e.value && p.value > 0.03, metering: $e.value && !v.value, muted: !$e.value || v.value }]),
                    title: us.value,
                    "aria-label": "系统声音录制状态",
                    disabled: u(g) === "exporting" || u(C).format === "gif"
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: Oe(cs.value)
                      },
                      i[13] || (i[13] = [
                        c(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        c(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        c(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        c(
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
                  ], 10, ur)
                ]),
                c("label", dr, [
                  ue(c("select", {
                    "onUpdate:modelValue": i[1] || (i[1] = (w) => u(C).fps = w),
                    disabled: Ee.value
                  }, i[14] || (i[14] = [
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
                  ]), 8, hr), [
                    [ft, u(C).fps]
                  ]),
                  i[15] || (i[15] = c(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                ue(c("select", {
                  "onUpdate:modelValue": i[2] || (i[2] = (w) => u(C).format = w),
                  class: "format-select optional-format",
                  disabled: Ee.value
                }, i[16] || (i[16] = [
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
                ]), 8, pr), [
                  [ft, u(C).format]
                ]),
                ue(c("select", {
                  "onUpdate:modelValue": i[3] || (i[3] = (w) => u(C).quality = w),
                  class: "quality-select optional-quality",
                  disabled: Ee.value
                }, [
                  c(
                    "option",
                    gr,
                    W(a.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    vr,
                    W(a.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    yr,
                    W(a.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, fr), [
                  [ft, u(C).quality]
                ]),
                c("div", wr, [
                  c("label", mr, [
                    c("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, _r)
                  ]),
                  i[17] || (i[17] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", br, [
                    c("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, Cr)
                  ]),
                  i[18] || (i[18] = c(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              c("div", xr, [
                u(g) === "recording" || u(g) === "paused" ? (k(), N(
                  xe,
                  { key: 0 },
                  [
                    c(
                      "span",
                      Sr,
                      W(hs.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      onClick: i[4] || (i[4] = (w) => u(g) === "paused" ? xs() : Cs())
                    }, [
                      c(
                        "span",
                        kr,
                        W(u(g) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    c("button", {
                      class: "control-button danger",
                      onClick: Ss
                    }, [
                      c(
                        "span",
                        Mr,
                        W(a.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : u(g) === "exporting" ? (k(), N(
                  xe,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: ds.value
                    }, [
                      c("div", Tr, [
                        c(
                          "span",
                          null,
                          W(dt.value),
                          1
                          /* TEXT */
                        ),
                        c(
                          "strong",
                          null,
                          W(At.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      c("div", Ir, [
                        c(
                          "span",
                          {
                            style: Oe({ width: `${At.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Or),
                    c("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: ks
                    }, i[19] || (i[19] = [
                      c(
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
                )) : u(g) === "completed" && u(m) ? (k(), N(
                  xe,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: u(m).path
                    }, W(u(m).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Pr),
                    c("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Ps
                    }, i[20] || (i[20] = [
                      c(
                        "span",
                        { class: "button-label" },
                        "打开",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    c("button", {
                      class: "control-button",
                      title: "打开所在文件夹",
                      onClick: Ns
                    }, i[21] || (i[21] = [
                      c(
                        "span",
                        { class: "button-label" },
                        "文件夹",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    c("button", {
                      class: "control-button",
                      title: "重新录制",
                      onClick: Ms
                    }, i[22] || (i[22] = [
                      c(
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
                  disabled: u(B)?.available === !1 || l.value.width < be || l.value.height < be,
                  onClick: bs
                }, [
                  i[23] || (i[23] = c(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  c(
                    "span",
                    zr,
                    W(a.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Nr))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      u(B) && !u(B).available ? (k(), N(
        "p",
        Er,
        W(u(B).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : ee("v-if", !0)
    ]));
  }
}), Dr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Ar = /* @__PURE__ */ Dr(Wr, [["__scopeId", "data-v-d52e08e6"]]), Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ar
}, Symbol.toStringTag, { value: "Module" }));
export {
  Br as activate
};
