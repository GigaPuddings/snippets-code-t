import { inject as ie, createVNode as I, getCurrentInstance as _e, ref as S, computed as y, unref as c, readonly as mo, getCurrentScope as wo, onScopeDispose as _o, onMounted as ot, nextTick as $e, watch as be, isRef as bo, warn as Co, provide as xo, defineComponent as R, createElementBlock as P, openBlock as k, mergeProps as ko, renderSlot as Ce, createElementVNode as u, normalizeClass as N, Transition as Ct, withCtx as re, withDirectives as le, normalizeStyle as xe, createTextVNode as So, toDisplayString as E, vShow as Ze, shallowReactive as Oo, createBlock as Y, createCommentVNode as X, resolveDynamicComponent as vn, Fragment as we, withModifiers as Le, isVNode as De, render as Je, onUnmounted as yn, renderList as Mo, vModelSelect as ct } from "vue";
const Mr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Sr)
  });
};
function To(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Io(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ue;
const G = "__TAURI_TO_IPC_KEY__";
function Po(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class zo {
  get rid() {
    return To(this, Ue, "f");
  }
  constructor(t) {
    Ue.set(this, void 0), Io(this, Ue, t);
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
class xt {
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
  [G]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[G]();
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
    return new xt(this.width / t, this.height / t);
  }
  [G]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[G]();
  }
}
class ye {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof xt ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ue ? this.size : this.size.toPhysical(t);
  }
  [G]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[G]();
  }
}
class mn {
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
  [G]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[G]();
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
    return new mn(this.x / t, this.y / t);
  }
  [G]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[G]();
  }
}
class Ge {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof mn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Z ? this.position : this.position.toPhysical(t);
  }
  [G]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[G]();
  }
}
var j;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(j || (j = {}));
async function wn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ye(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: s,
    handler: Po(t)
  }).then((l) => async () => wn(e, l));
}
async function No(e, t, n) {
  return Ye(e, (o) => {
    wn(e, o.id), t(o);
  }, n);
}
async function $o(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Lo(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Ee extends zo {
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
    return d("plugin:image|new", {
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
    return d("plugin:image|from_bytes", {
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
    return d("plugin:image|from_path", { path: t }).then((n) => new Ee(n));
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
  return e == null ? null : typeof e == "string" ? e : e instanceof Ee ? e.rid : e;
}
var mt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(mt || (mt = {}));
class Eo {
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
var Vt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Vt || (Vt = {}));
function _n() {
  return new bn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function dt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new bn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const pt = ["tauri://created", "tauri://error"];
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
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || d("plugin:window|create", {
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
    return (n = (await dt()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return _n();
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Ye(t, n, {
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
    } : No(t, n, {
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
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return $o(t, n);
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
    if (pt.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Lo(t, n, o);
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
    return t && (t === mt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
      value: t instanceof ye ? t : new ye(t)
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
      value: t instanceof ye ? t : t ? new ye(t) : null
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
      value: t instanceof ye ? t : t ? new ye(t) : null
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
    return this.listen(j.WINDOW_RESIZED, (n) => {
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
    return this.listen(j.WINDOW_MOVED, (n) => {
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
    return this.listen(j.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Eo(n);
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
    const n = await this.listen(j.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new Z(a.payload.position)
        }
      });
    }), o = await this.listen(j.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new Z(a.payload.position)
        }
      });
    }), s = await this.listen(j.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new Z(a.payload.position)
        }
      });
    }), l = await this.listen(j.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), l();
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
    const n = await this.listen(j.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(j.WINDOW_BLUR, (s) => {
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
    return this.listen(j.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(j.WINDOW_THEME_CHANGED, t);
  }
}
var Ut;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ut || (Ut = {}));
var qt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(qt || (qt = {}));
var Kt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Kt || (Kt = {}));
function Do(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Z(e.position),
    size: new ue(e.size)
  };
}
async function Ro(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Do);
}
var Fo = {
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
function Wo() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ao(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], l = t.theme || n.theme;
  switch (l) {
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
var jo = Symbol("icon-context");
function kt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var a = Wo(), p = ie(jo, Fo);
      return function() {
        var f = l.size, g = l.strokeWidth, v = l.strokeLinecap, _ = l.strokeLinejoin, m = l.theme, b = l.fill, z = l.spin, h = Ao(a, {
          size: f,
          strokeWidth: g,
          strokeLinecap: v,
          strokeLinejoin: _,
          theme: m,
          fill: b
        }, p), w = [p.prefix + "-icon"];
        return w.push(p.prefix + "-icon-" + e), z && w.push(p.prefix + "-icon-spin"), I("span", {
          class: w.join(" ")
        }, [n(h)]);
      };
    }
  };
  return o;
}
const Bo = kt("close-small", !1, function(e) {
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
}), Ho = kt("minus", !1, function(e) {
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
}), Go = kt("radar", !1, function(e) {
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
}), Cn = Symbol(), qe = "el", Vo = "is-", ae = (e, t, n, o, s) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), s && (l += `--${s}`), l;
}, xn = Symbol("namespaceContextKey"), Uo = (e) => {
  const t = e || (_e() ? ie(xn, S(qe)) : S(qe));
  return y(() => c(t) || qe);
}, St = (e, t) => {
  const n = Uo(t);
  return {
    namespace: n,
    b: (h = "") => ae(n.value, e, h, "", ""),
    e: (h) => h ? ae(n.value, e, "", h, "") : "",
    m: (h) => h ? ae(n.value, e, "", "", h) : "",
    be: (h, w) => h && w ? ae(n.value, e, h, w, "") : "",
    em: (h, w) => h && w ? ae(n.value, e, "", h, w) : "",
    bm: (h, w) => h && w ? ae(n.value, e, h, "", w) : "",
    bem: (h, w, M) => h && w && M ? ae(n.value, e, h, w, M) : "",
    is: (h, ...w) => {
      const M = w.length >= 1 ? w[0] : !0;
      return h && M ? `${Vo}${h}` : "";
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
const qo = Object.prototype.hasOwnProperty, Zt = (e, t) => qo.call(e, t), Re = (e) => typeof e == "function", ce = (e) => typeof e == "string", kn = (e) => e !== null && typeof e == "object";
var Ko = typeof global == "object" && global && global.Object === Object && global, Zo = typeof self == "object" && self && self.Object === Object && self, Ot = Ko || Zo || Function("return this")(), ke = Ot.Symbol, Sn = Object.prototype, Jo = Sn.hasOwnProperty, Yo = Sn.toString, ze = ke ? ke.toStringTag : void 0;
function Xo(e) {
  var t = Jo.call(e, ze), n = e[ze];
  try {
    e[ze] = void 0;
    var o = !0;
  } catch {
  }
  var s = Yo.call(e);
  return o && (t ? e[ze] = n : delete e[ze]), s;
}
var Qo = Object.prototype, es = Qo.toString;
function ts(e) {
  return es.call(e);
}
var ns = "[object Null]", os = "[object Undefined]", Jt = ke ? ke.toStringTag : void 0;
function On(e) {
  return e == null ? e === void 0 ? os : ns : Jt && Jt in Object(e) ? Xo(e) : ts(e);
}
function ss(e) {
  return e != null && typeof e == "object";
}
var as = "[object Symbol]";
function Mt(e) {
  return typeof e == "symbol" || ss(e) && On(e) == as;
}
function is(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var Tt = Array.isArray, Yt = ke ? ke.prototype : void 0, Xt = Yt ? Yt.toString : void 0;
function Mn(e) {
  if (typeof e == "string")
    return e;
  if (Tt(e))
    return is(e, Mn) + "";
  if (Mt(e))
    return Xt ? Xt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Tn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var rs = "[object AsyncFunction]", ls = "[object Function]", us = "[object GeneratorFunction]", cs = "[object Proxy]";
function ds(e) {
  if (!Tn(e))
    return !1;
  var t = On(e);
  return t == ls || t == us || t == rs || t == cs;
}
var ht = Ot["__core-js_shared__"], Qt = function() {
  var e = /[^.]+$/.exec(ht && ht.keys && ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ps(e) {
  return !!Qt && Qt in e;
}
var hs = Function.prototype, fs = hs.toString;
function gs(e) {
  if (e != null) {
    try {
      return fs.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vs = /[\\^$.*+?()[\]{}|]/g, ys = /^\[object .+?Constructor\]$/, ms = Function.prototype, ws = Object.prototype, _s = ms.toString, bs = ws.hasOwnProperty, Cs = RegExp(
  "^" + _s.call(bs).replace(vs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xs(e) {
  if (!Tn(e) || ps(e))
    return !1;
  var t = ds(e) ? Cs : ys;
  return t.test(gs(e));
}
function ks(e, t) {
  return e?.[t];
}
function In(e, t) {
  var n = ks(e, t);
  return xs(n) ? n : void 0;
}
function Ss(e, t) {
  return e === t || e !== e && t !== t;
}
var Os = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ms = /^\w*$/;
function Ts(e, t) {
  if (Tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Mt(e) ? !0 : Ms.test(e) || !Os.test(e) || t != null && e in Object(t);
}
var Fe = In(Object, "create");
function Is() {
  this.__data__ = Fe ? Fe(null) : {}, this.size = 0;
}
function Ps(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zs = "__lodash_hash_undefined__", Ns = Object.prototype, $s = Ns.hasOwnProperty;
function Ls(e) {
  var t = this.__data__;
  if (Fe) {
    var n = t[e];
    return n === zs ? void 0 : n;
  }
  return $s.call(t, e) ? t[e] : void 0;
}
var Es = Object.prototype, Ds = Es.hasOwnProperty;
function Rs(e) {
  var t = this.__data__;
  return Fe ? t[e] !== void 0 : Ds.call(t, e);
}
var Fs = "__lodash_hash_undefined__";
function Ws(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Fe && t === void 0 ? Fs : t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = Is;
de.prototype.delete = Ps;
de.prototype.get = Ls;
de.prototype.has = Rs;
de.prototype.set = Ws;
function As() {
  this.__data__ = [], this.size = 0;
}
function st(e, t) {
  for (var n = e.length; n--; )
    if (Ss(e[n][0], t))
      return n;
  return -1;
}
var js = Array.prototype, Bs = js.splice;
function Hs(e) {
  var t = this.__data__, n = st(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Bs.call(t, n, 1), --this.size, !0;
}
function Gs(e) {
  var t = this.__data__, n = st(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Vs(e) {
  return st(this.__data__, e) > -1;
}
function Us(e, t) {
  var n = this.__data__, o = st(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Me.prototype.clear = As;
Me.prototype.delete = Hs;
Me.prototype.get = Gs;
Me.prototype.has = Vs;
Me.prototype.set = Us;
var qs = In(Ot, "Map");
function Ks() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (qs || Me)(),
    string: new de()
  };
}
function Zs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function at(e, t) {
  var n = e.__data__;
  return Zs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Js(e) {
  var t = at(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ys(e) {
  return at(this, e).get(e);
}
function Xs(e) {
  return at(this, e).has(e);
}
function Qs(e, t) {
  var n = at(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function he(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
he.prototype.clear = Ks;
he.prototype.delete = Js;
he.prototype.get = Ys;
he.prototype.has = Xs;
he.prototype.set = Qs;
var ea = "Expected a function";
function It(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ea);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(s))
      return l.get(s);
    var a = e.apply(this, o);
    return n.cache = l.set(s, a) || l, a;
  };
  return n.cache = new (It.Cache || he)(), n;
}
It.Cache = he;
var ta = 500;
function na(e) {
  var t = It(e, function(o) {
    return n.size === ta && n.clear(), o;
  }), n = t.cache;
  return t;
}
var oa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sa = /\\(\\)?/g, aa = na(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(oa, function(n, o, s, l) {
    t.push(s ? l.replace(sa, "$1") : o || n);
  }), t;
});
function ia(e) {
  return e == null ? "" : Mn(e);
}
function ra(e, t) {
  return Tt(e) ? e : Ts(e, t) ? [e] : aa(ia(e));
}
function la(e) {
  if (typeof e == "string" || Mt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ua(e, t) {
  t = ra(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[la(t[n++])];
  return n && n == o ? e : void 0;
}
function ca(e, t, n) {
  var o = e == null ? void 0 : ua(e, t);
  return o === void 0 ? n : o;
}
function da(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const Pn = (e) => e === void 0, en = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", wt = (e) => typeof Element > "u" ? !1 : e instanceof Element, pa = (e) => ce(e) ? !Number.isNaN(Number(e)) : !1;
var tn;
const fe = typeof window < "u", ha = (e) => typeof e == "string", fa = () => {
};
fe && ((tn = window?.navigator) != null && tn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pt(e) {
  return typeof e == "function" ? e() : c(e);
}
function ga(e) {
  return e;
}
function zt(e) {
  return wo() ? (_o(e), !0) : !1;
}
function va(e, t = !0) {
  _e() ? ot(e) : t ? e() : $e(e);
}
function zn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = S(!1);
  let l = null;
  function a() {
    l && (clearTimeout(l), l = null);
  }
  function p() {
    s.value = !1, a();
  }
  function f(...g) {
    a(), s.value = !0, l = setTimeout(() => {
      s.value = !1, l = null, e(...g);
    }, Pt(t));
  }
  return o && (s.value = !0, fe && f()), zt(p), {
    isPending: mo(s),
    start: f,
    stop: p
  };
}
function Nn(e) {
  var t;
  const n = Pt(e);
  return (t = n?.$el) != null ? t : n;
}
const $n = fe ? window : void 0;
function Ln(...e) {
  let t, n, o, s;
  if (ha(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = $n) : [t, n, o, s] = e, !t)
    return fa;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], a = () => {
    l.forEach((v) => v()), l.length = 0;
  }, p = (v, _, m, b) => (v.addEventListener(_, m, b), () => v.removeEventListener(_, m, b)), f = be(() => [Nn(t), Pt(s)], ([v, _]) => {
    a(), v && l.push(...n.flatMap((m) => o.map((b) => p(v, m, b, _))));
  }, { immediate: !0, flush: "post" }), g = () => {
    f(), a();
  };
  return zt(g), g;
}
function ya(e, t = !1) {
  const n = S(), o = () => n.value = !!e();
  return o(), va(o, t), n;
}
const nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, on = "__vueuse_ssr_handlers__";
nn[on] = nn[on] || {};
var sn = Object.getOwnPropertySymbols, ma = Object.prototype.hasOwnProperty, wa = Object.prototype.propertyIsEnumerable, _a = (e, t) => {
  var n = {};
  for (var o in e)
    ma.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && sn)
    for (var o of sn(e))
      t.indexOf(o) < 0 && wa.call(e, o) && (n[o] = e[o]);
  return n;
};
function ba(e, t, n = {}) {
  const o = n, { window: s = $n } = o, l = _a(o, ["window"]);
  let a;
  const p = ya(() => s && "ResizeObserver" in s), f = () => {
    a && (a.disconnect(), a = void 0);
  }, g = be(() => Nn(e), (_) => {
    f(), p.value && s && _ && (a = new ResizeObserver(t), a.observe(_, l));
  }, { immediate: !0, flush: "post" }), v = () => {
    f(), g();
  };
  return zt(v), {
    isSupported: p,
    stop: v
  };
}
var an;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(an || (an = {}));
var Ca = Object.defineProperty, rn = Object.getOwnPropertySymbols, xa = Object.prototype.hasOwnProperty, ka = Object.prototype.propertyIsEnumerable, ln = (e, t, n) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sa = (e, t) => {
  for (var n in t || (t = {}))
    xa.call(t, n) && ln(e, n, t[n]);
  if (rn)
    for (var n of rn(t))
      ka.call(t, n) && ln(e, n, t[n]);
  return e;
};
const Oa = {
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
Sa({
  linear: ga
}, Oa);
const un = {
  current: 0
}, cn = S(0), En = 2e3, dn = Symbol("elZIndexContextKey"), Dn = Symbol("zIndexContextKey"), Ma = (e) => {
  const t = _e() ? ie(dn, un) : un, n = e || (_e() ? ie(Dn, void 0) : void 0), o = y(() => {
    const a = c(n);
    return pe(a) ? a : En;
  }), s = y(() => o.value + cn.value), l = () => (t.current++, cn.value = t.current, s.value);
  return !fe && ie(dn), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: l
  };
};
var Ta = {
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
const Ia = (e) => (t, n) => Pa(t, n, c(e)), Pa = (e, t, n) => ca(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var l;
  return `${(l = t?.[s]) != null ? l : `{${s}}`}`;
}), za = (e) => {
  const t = y(() => c(e).name), n = bo(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Ia(e)
  };
}, Rn = Symbol("localeContextKey"), Na = (e) => {
  const t = e || ie(Rn, S());
  return za(y(() => t.value || Ta));
}, Fn = "__epPropKey", B = (e) => e, $a = (e) => kn(e) && !!e[Fn], Wn = (e, t) => {
  if (!kn(e) || $a(e))
    return e;
  const { values: n, required: o, default: s, type: l, validator: a } = e, f = {
    type: l,
    required: !!o,
    validator: n || a ? (g) => {
      let v = !1, _ = [];
      if (n && (_ = Array.from(n), Zt(e, "default") && _.push(s), v || (v = _.includes(g))), a && (v || (v = a(g))), !v && _.length > 0) {
        const m = [...new Set(_)].map((b) => JSON.stringify(b)).join(", ");
        Co(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(g)}.`);
      }
      return v;
    } : void 0,
    [Fn]: !0
  };
  return Zt(e, "default") && (f.default = s), f;
}, Te = (e) => da(Object.entries(e).map(([t, n]) => [
  t,
  Wn(n, t)
])), La = ["", "default", "small", "large"], Ea = Wn({
  type: String,
  values: La,
  required: !1
}), Da = Symbol("size"), Ra = Symbol("emptyValuesContextKey"), Fa = Te({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Re(e) ? !e() : !e
  }
}), pn = (e) => Object.keys(e), Qe = S();
function An(e, t = void 0) {
  return _e() ? ie(Cn, Qe) : Qe;
}
function jn(e, t) {
  const n = An(), o = St(e, y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || qe;
  })), s = Na(y(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = Ma(y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || En;
  })), a = y(() => {
    var p;
    return c(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return Bn(y(() => c(n) || {})), {
    ns: o,
    locale: s,
    zIndex: l,
    size: a
  };
}
const Bn = (e, t, n = !1) => {
  var o;
  const s = !!_e(), l = s ? An() : void 0, a = (o = void 0) != null ? o : s ? xo : void 0;
  if (!a)
    return;
  const p = y(() => {
    const f = c(e);
    return l?.value ? Wa(l.value, f) : f;
  });
  return a(Cn, p), a(Rn, y(() => p.value.locale)), a(xn, y(() => p.value.namespace)), a(Dn, y(() => p.value.zIndex)), a(Da, {
    size: y(() => p.value.size || "")
  }), a(Ra, y(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Qe.value) && (Qe.value = p.value), p;
}, Wa = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...pn(e), ...pn(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var it = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function _t(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || pa(e))
    return `${e}${t}`;
  if (ce(e))
    return e;
}
const Hn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Gn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Aa = Te({
  size: {
    type: B([Number, String])
  },
  color: {
    type: String
  }
}), ja = R({
  name: "ElIcon",
  inheritAttrs: !1
}), Ba = /* @__PURE__ */ R({
  ...ja,
  props: Aa,
  setup(e) {
    const t = e, n = St("icon"), o = y(() => {
      const { size: s, color: l } = t;
      return !s && !l ? {} : {
        fontSize: Pn(s) ? void 0 : _t(s),
        "--color": l
      };
    });
    return (s, l) => (k(), P("i", ko({
      class: c(n).b(),
      style: c(o)
    }, s.$attrs), [
      Ce(s.$slots, "default")
    ], 16));
  }
});
var Ha = /* @__PURE__ */ it(Ba, [["__file", "icon.vue"]]);
const et = Hn(Ha);
/*! Element Plus Icons Vue v2.3.1 */
var Ga = /* @__PURE__ */ R({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Va = Ga, Ua = /* @__PURE__ */ R({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Vn = Ua, qa = /* @__PURE__ */ R({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ka = qa, Za = /* @__PURE__ */ R({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ja = Za, Ya = /* @__PURE__ */ R({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Xa = Ya;
const Un = B([
  String,
  Object,
  Function
]), Qa = {
  Close: Vn
}, ei = {
  Close: Vn
}, tt = {
  success: Ja,
  warning: Xa,
  error: Va,
  info: Ka
}, ti = (e) => e, Ke = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ni = Te({
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
    type: B([String, Object, Array])
  },
  offset: {
    type: B(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), oi = R({
  name: "ElBadge"
}), si = /* @__PURE__ */ R({
  ...oi,
  props: ni,
  setup(e, { expose: t }) {
    const n = e, o = St("badge"), s = y(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = y(() => {
      var a, p, f, g, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: _t(-((p = (a = n.offset) == null ? void 0 : a[0]) != null ? p : 0)),
          marginTop: _t((g = (f = n.offset) == null ? void 0 : f[1]) != null ? g : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: s
    }), (a, p) => (k(), P("div", {
      class: N(c(o).b())
    }, [
      Ce(a.$slots, "default"),
      I(Ct, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          le(u("sup", {
            class: N([
              c(o).e("content"),
              c(o).em("content", a.type),
              c(o).is("fixed", !!a.$slots.default),
              c(o).is("dot", a.isDot),
              c(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: xe(c(l))
          }, [
            Ce(a.$slots, "content", { value: c(s) }, () => [
              So(E(c(s)), 1)
            ])
          ], 6), [
            [Ze, !a.hidden && (c(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ai = /* @__PURE__ */ it(si, [["__file", "badge.vue"]]);
const ii = Hn(ai), ri = Te({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: B(Object)
  },
  size: Ea,
  button: {
    type: B(Object)
  },
  experimentalFeatures: {
    type: B(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: B(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Fa
}), U = {};
R({
  name: "ElConfigProvider",
  props: ri,
  setup(e, { slots: t }) {
    be(() => e.message, (o) => {
      Object.assign(U, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Bn(e);
    return () => Ce(t, "default", { config: n?.value });
  }
});
const qn = ["success", "info", "warning", "error"], L = ti({
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
}), li = Te({
  customClass: {
    type: String,
    default: L.customClass
  },
  center: {
    type: Boolean,
    default: L.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: L.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: L.duration
  },
  icon: {
    type: Un,
    default: L.icon
  },
  id: {
    type: String,
    default: L.id
  },
  message: {
    type: B([
      String,
      Object,
      Function
    ]),
    default: L.message
  },
  onClose: {
    type: B(Function),
    default: L.onClose
  },
  showClose: {
    type: Boolean,
    default: L.showClose
  },
  type: {
    type: String,
    values: qn,
    default: L.type
  },
  plain: {
    type: Boolean,
    default: L.plain
  },
  offset: {
    type: Number,
    default: L.offset
  },
  zIndex: {
    type: Number,
    default: L.zIndex
  },
  grouping: {
    type: Boolean,
    default: L.grouping
  },
  repeatNum: {
    type: Number,
    default: L.repeatNum
  }
}), ui = {
  destroy: () => !0
}, q = Oo([]), ci = (e) => {
  const t = q.findIndex((s) => s.id === e), n = q[t];
  let o;
  return t > 0 && (o = q[t - 1]), { current: n, prev: o };
}, di = (e) => {
  const { prev: t } = ci(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, pi = (e, t) => q.findIndex((o) => o.id === e) > 0 ? 16 : t, hi = R({
  name: "ElMessage"
}), fi = /* @__PURE__ */ R({
  ...hi,
  props: li,
  emits: ui,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = ei, { ns: s, zIndex: l } = jn("message"), { currentZIndex: a, nextZIndex: p } = l, f = S(), g = S(!1), v = S(0);
    let _;
    const m = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), b = y(() => {
      const O = n.type;
      return { [s.bm("icon", O)]: O && tt[O] };
    }), z = y(() => n.icon || tt[n.type] || ""), h = y(() => di(n.id)), w = y(() => pi(n.id, n.offset) + h.value), M = y(() => v.value + w.value), ee = y(() => ({
      top: `${w.value}px`,
      zIndex: a.value
    }));
    function x() {
      n.duration !== 0 && ({ stop: _ } = zn(() => {
        D();
      }, n.duration));
    }
    function te() {
      _?.();
    }
    function D() {
      g.value = !1;
    }
    function ge({ code: O }) {
      O === Ke.esc && D();
    }
    return ot(() => {
      x(), p(), g.value = !0;
    }), be(() => n.repeatNum, () => {
      te(), x();
    }), Ln(document, "keydown", ge), ba(f, () => {
      v.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: M,
      close: D
    }), (O, Nt) => (k(), Y(Ct, {
      name: c(s).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: ($t) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(u("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: f,
          class: N([
            c(s).b(),
            { [c(s).m(O.type)]: O.type },
            c(s).is("center", O.center),
            c(s).is("closable", O.showClose),
            c(s).is("plain", O.plain),
            O.customClass
          ]),
          style: xe(c(ee)),
          role: "alert",
          onMouseenter: te,
          onMouseleave: x
        }, [
          O.repeatNum > 1 ? (k(), Y(c(ii), {
            key: 0,
            value: O.repeatNum,
            type: c(m),
            class: N(c(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : X("v-if", !0),
          c(z) ? (k(), Y(c(et), {
            key: 1,
            class: N([c(s).e("icon"), c(b)])
          }, {
            default: re(() => [
              (k(), Y(vn(c(z))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          Ce(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (k(), P(we, { key: 1 }, [
              X(" Caution here, message could've been compromised, never use user's input as message "),
              u("p", {
                class: N(c(s).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), P("p", {
              key: 0,
              class: N(c(s).e("content"))
            }, E(O.message), 3))
          ]),
          O.showClose ? (k(), Y(c(et), {
            key: 2,
            class: N(c(s).e("closeBtn")),
            onClick: Le(D, ["stop"])
          }, {
            default: re(() => [
              I(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 46, ["id"]), [
          [Ze, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var gi = /* @__PURE__ */ it(fi, [["__file", "message.vue"]]);
let vi = 1;
const Kn = (e) => {
  const t = !e || ce(e) || De(e) || Re(e) ? { message: e } : e, n = {
    ...L,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ce(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    wt(o) || (o = document.body), n.appendTo = o;
  }
  return en(U.grouping) && !n.grouping && (n.grouping = U.grouping), pe(U.duration) && n.duration === 3e3 && (n.duration = U.duration), pe(U.offset) && n.offset === 16 && (n.offset = U.offset), en(U.showClose) && !n.showClose && (n.showClose = U.showClose), n;
}, yi = (e) => {
  const t = q.indexOf(e);
  if (t === -1)
    return;
  q.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, mi = ({ appendTo: e, ...t }, n) => {
  const o = `message_${vi++}`, s = t.onClose, l = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), yi(v);
    },
    onDestroy: () => {
      Je(null, l);
    }
  }, p = I(gi, a, Re(a.message) || De(a.message) ? {
    default: Re(a.message) ? a.message : () => a.message
  } : null);
  p.appContext = n || Se._context, Je(p, l), e.appendChild(l.firstElementChild);
  const f = p.component, v = {
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
  return v;
}, Se = (e = {}, t) => {
  if (!fe)
    return { close: () => {
    } };
  const n = Kn(e);
  if (n.grouping && q.length) {
    const s = q.find(({ vnode: l }) => {
      var a;
      return ((a = l.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (pe(U.max) && q.length >= U.max)
    return { close: () => {
    } };
  const o = mi(n, t);
  return q.push(o), o.handler;
};
qn.forEach((e) => {
  Se[e] = (t = {}, n) => {
    const o = Kn(t);
    return Se({ ...o, type: e }, n);
  };
});
function wi(e) {
  for (const t of q)
    (!e || e === t.props.type) && t.handler.close();
}
Se.closeAll = wi;
Se._context = null;
const _i = Gn(Se, "$message"), Zn = [
  "success",
  "info",
  "warning",
  "error"
], bi = Te({
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
    type: Un
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: B([
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
    type: B(Function),
    default: () => {
    }
  },
  onClose: {
    type: B(Function),
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
    values: [...Zn, ""],
    default: ""
  },
  zIndex: Number
}), Ci = {
  destroy: () => !0
}, xi = R({
  name: "ElNotification"
}), ki = /* @__PURE__ */ R({
  ...xi,
  props: bi,
  emits: Ci,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = jn("notification"), { nextZIndex: l, currentZIndex: a } = s, { Close: p } = Qa, f = S(!1);
    let g;
    const v = y(() => {
      const x = n.type;
      return x && tt[n.type] ? o.m(x) : "";
    }), _ = y(() => n.type && tt[n.type] || n.icon), m = y(() => n.position.endsWith("right") ? "right" : "left"), b = y(() => n.position.startsWith("top") ? "top" : "bottom"), z = y(() => {
      var x;
      return {
        [b.value]: `${n.offset}px`,
        zIndex: (x = n.zIndex) != null ? x : a.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: g } = zn(() => {
        f.value && M();
      }, n.duration));
    }
    function w() {
      g?.();
    }
    function M() {
      f.value = !1;
    }
    function ee({ code: x }) {
      x === Ke.delete || x === Ke.backspace ? w() : x === Ke.esc ? f.value && M() : h();
    }
    return ot(() => {
      h(), l(), f.value = !0;
    }), Ln(document, "keydown", ee), t({
      visible: f,
      close: M
    }), (x, te) => (k(), Y(Ct, {
      name: c(o).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (D) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(u("div", {
          id: x.id,
          class: N([c(o).b(), x.customClass, c(m)]),
          style: xe(c(z)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: h,
          onClick: x.onClick
        }, [
          c(_) ? (k(), Y(c(et), {
            key: 0,
            class: N([c(o).e("icon"), c(v)])
          }, {
            default: re(() => [
              (k(), Y(vn(c(_))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          u("div", {
            class: N(c(o).e("group"))
          }, [
            u("h2", {
              class: N(c(o).e("title")),
              textContent: E(x.title)
            }, null, 10, ["textContent"]),
            le(u("div", {
              class: N(c(o).e("content")),
              style: xe(x.title ? void 0 : { margin: 0 })
            }, [
              Ce(x.$slots, "default", {}, () => [
                x.dangerouslyUseHTMLString ? (k(), P(we, { key: 1 }, [
                  X(" Caution here, message could've been compromised, never use user's input as message "),
                  u("p", { innerHTML: x.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), P("p", { key: 0 }, E(x.message), 1))
              ])
            ], 6), [
              [Ze, x.message]
            ]),
            x.showClose ? (k(), Y(c(et), {
              key: 0,
              class: N(c(o).e("closeBtn")),
              onClick: Le(M, ["stop"])
            }, {
              default: re(() => [
                I(c(p))
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
var Si = /* @__PURE__ */ it(ki, [["__file", "notification.vue"]]);
const nt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, bt = 16;
let Oi = 1;
const Oe = function(e = {}, t) {
  if (!fe)
    return { close: () => {
    } };
  (ce(e) || De(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  nt[n].forEach(({ vm: v }) => {
    var _;
    o += (((_ = v.el) == null ? void 0 : _.offsetHeight) || 0) + bt;
  }), o += bt;
  const s = `notification_${Oi++}`, l = e.onClose, a = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      Mi(s, n, l);
    }
  };
  let p = document.body;
  wt(e.appendTo) ? p = e.appendTo : ce(e.appendTo) && (p = document.querySelector(e.appendTo)), wt(p) || (p = document.body);
  const f = document.createElement("div"), g = I(Si, a, Re(a.message) ? a.message : De(a.message) ? () => a.message : null);
  return g.appContext = Pn(t) ? Oe._context : t, g.props.onDestroy = () => {
    Je(null, f);
  }, Je(g, f), nt[n].push({ vm: g }), p.appendChild(f.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
Zn.forEach((e) => {
  Oe[e] = (t = {}, n) => ((ce(t) || De(t)) && (t = {
    message: t
  }), Oe({ ...t, type: e }, n));
});
function Mi(e, t, n) {
  const o = nt[t], s = o.findIndex(({ vm: g }) => {
    var v;
    return ((v = g.component) == null ? void 0 : v.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: l } = o[s];
  if (!l)
    return;
  n?.(l);
  const a = l.el.offsetHeight, p = t.split("-")[0];
  o.splice(s, 1);
  const f = o.length;
  if (!(f < 1))
    for (let g = s; g < f; g++) {
      const { el: v, component: _ } = o[g].vm, m = Number.parseInt(v.style[p], 10) - a - bt;
      _.props.offset = m;
    }
}
function Ti() {
  for (const e of Object.values(nt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Oe.closeAll = Ti;
Oe._context = null;
const Ii = Gn(Oe, "$notify"), ft = {
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
      showClose: l = !1
    } = e;
    o === "center" ? _i({
      message: t,
      type: n,
      duration: s,
      showClose: l,
      grouping: !0
    }) : Ii({
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
}, gt = "[screen-recorder]", Pi = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, V = async (e, t) => {
  const n = performance.now(), o = Pi(t);
  console.info(`${gt} invoke:start ${e}`, o ?? "");
  try {
    const s = await d(e, t);
    return console.info(`${gt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: s
    }), s;
  } catch (s) {
    throw console.error(`${gt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, zi = () => V("screen_recorder_get_ffmpeg_status"), me = (e) => V("screen_recorder_set_capture_excluded", { excluded: e }), Ne = (e) => V("screen_recorder_set_passthrough_region", { region: e }), Ni = () => V("screen_recorder_pick_target_window"), $i = () => V("screen_recorder_close_window"), Li = (e, t) => V("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ei = () => V("screen_recorder_pause_recording"), Di = (e, t) => V("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ri = () => V("screen_recorder_stop_recording"), Fi = () => V("screen_recorder_cancel_recording"), Wi = () => V("screen_recorder_cancel_export"), Ai = (e, t) => V("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), hn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), $ = "[screen-recorder]";
function ji() {
  const e = S("selecting"), t = S(hn()), n = S(null), o = S(null), s = S(""), l = S(null), a = S(0), p = S(0), f = S(null), g = () => {
    p.value = e.value === "recording" && l.value !== null ? a.value + Date.now() - l.value : a.value;
  }, v = () => {
    f.value !== null && (window.clearInterval(f.value), f.value = null);
  }, _ = () => {
    v(), g(), f.value = window.setInterval(() => {
      g();
    }, 250);
  }, m = async () => (console.info(`${$} refresh ffmpeg status`), n.value = await zi(), console.info(`${$} ffmpeg status`, n.value), n.value), b = async (D) => {
    s.value = "", o.value = null, console.info(`${$} begin requested`, { region: D, settings: t.value });
    const ge = n.value ?? await m();
    if (!ge.available)
      throw new Error(ge.message || "FFmpeg unavailable");
    await Li(D, t.value), e.value = "recording", a.value = 0, p.value = 0, l.value = Date.now(), _(), console.info(`${$} recording started`, { status: e.value });
  }, z = async () => {
    e.value === "recording" && (console.info(`${$} pause requested`, { elapsedMs: p.value }), g(), a.value = p.value, l.value = null, v(), await Ei(), e.value = "paused", console.info(`${$} recording paused`, { accumulatedMs: a.value }));
  }, h = async (D) => {
    e.value === "paused" && (console.info(`${$} resume requested`, { region: D, settings: t.value }), await Di(D, t.value), e.value = "recording", l.value = Date.now(), _(), console.info(`${$} recording resumed`));
  }, w = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${$} stop requested`, { status: e.value, elapsedMs: p.value }), g(), a.value = p.value, l.value = null, v(), await Ri(), e.value = "exporting", console.info(`${$} recording stopped`, { accumulatedMs: a.value }));
  }, M = async () => {
    console.info(`${$} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return o.value = await Ai(t.value, Math.round(p.value)), e.value = "completed", console.info(`${$} export completed`, o.value), o.value;
    } catch (D) {
      throw e.value = "ready", o.value = null, D;
    }
  }, ee = async () => {
    console.info(`${$} cancel export requested`, { status: e.value }), await Wi(), e.value = "ready", o.value = null;
  }, x = async () => {
    console.info(`${$} cancel requested`, { status: e.value, elapsedMs: p.value }), v(), await Fi(), e.value = "selecting", l.value = null, a.value = 0, p.value = 0, o.value = null, console.info(`${$} canceled`);
  }, te = () => {
    console.info(`${$} reset session`), e.value = "selecting", l.value = null, a.value = 0, p.value = 0, o.value = null, s.value = "", t.value = hn();
  };
  return yn(() => {
    v();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: s,
    elapsedMs: p,
    refreshFfmpegStatus: m,
    begin: b,
    pause: z,
    resume: h,
    stop: w,
    exportFile: M,
    cancelExport: ee,
    cancel: x,
    reset: te
  };
}
const Bi = { class: "screen-recorder" }, Hi = ["onMousedown"], Gi = { class: "window-title" }, Vi = { class: "capture-viewport" }, Ui = { class: "capture-frame" }, qi = { class: "control-strip" }, Ki = { class: "control-group control-group--tools" }, Zi = { class: "tool-pill" }, Ji = ["title", "disabled"], Yi = { class: "select-field" }, Xi = ["disabled"], Qi = ["disabled"], er = ["disabled"], tr = { value: "high" }, nr = { value: "standard" }, or = { value: "small" }, sr = { class: "dimension-group optional-size" }, ar = { class: "dimension" }, ir = ["value"], rr = { class: "dimension" }, lr = ["value"], ur = { class: "control-group control-group--actions" }, cr = { class: "time" }, dr = { class: "button-label" }, pr = { class: "button-label" }, hr = ["title"], fr = { class: "export-progress__meta" }, gr = { class: "export-progress__track" }, vr = ["title"], yr = ["disabled"], mr = { class: "record-label" }, wr = {
  key: 0,
  class: "warning"
}, K = "[screen-recorder]", Ve = 80, fn = 420, gn = 260, _r = 38, br = 60, vt = 8, yt = 1, Cr = /* @__PURE__ */ R({
  __name: "index",
  setup(e) {
    const t = _n(), n = S(null), o = S({ width: 0, height: 0 }), s = S(0), l = S(!1), a = S(null);
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
      ffmpegStatus: z,
      result: h,
      elapsedMs: w,
      refreshFfmpegStatus: M,
      begin: ee,
      pause: x,
      resume: te,
      stop: D,
      exportFile: ge,
      cancelExport: O,
      cancel: Nt,
      reset: $t
    } = ji(), Lt = S(!1), Ie = y(() => m.value === "recording" || m.value === "paused" || m.value === "exporting"), rt = y(() => b.value.audio && b.value.format === "mp4"), Pe = y(() => rt.value && m.value === "recording"), Jn = y(() => {
      const i = Pe.value && !l.value ? s.value : 0, r = (C, H) => Math.max(0.18, Math.min(1, C + i * H)).toFixed(3);
      return {
        "--bar-1": r(0.28, 0.64),
        "--bar-2": r(0.42, 0.78),
        "--bar-3": r(0.34, 0.94),
        "--bar-4": r(0.22, 0.72)
      };
    }), Yn = y(() => {
      if (b.value.format === "gif")
        return "GIF 不支持音频";
      if (l.value && b.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (h.value?.audioDevice)
        return `已录制音频：${h.value.audioDevice}`;
      if (h.value && !h.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (z.value?.available && !z.value.systemAudioAvailable) {
        const i = z.value.audioDevices?.join("、") || "无";
        return b.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${i}` : "录制音频已关闭";
      }
      return b.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Et = y(() => {
      const i = a.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(i * 100)));
    }), lt = y(() => {
      const i = a.value;
      return i ? i.totalFrames && i.stage === "frames" ? `${i.message}` : i.message || "正在导出..." : "正在导出...";
    }), Xn = y(() => {
      const i = a.value;
      return i?.totalFrames ? `${lt.value} (${i.currentFrame}/${i.totalFrames})` : lt.value;
    }), Qn = y(() => {
      const i = Math.floor(w.value / 1e3), r = Math.floor(i / 60).toString().padStart(2, "0"), C = (i % 60).toString().padStart(2, "0");
      return `${r}:${C}`;
    }), ve = async (i) => {
      try {
        await i();
      } catch (r) {
        console.error(`${K} action failed`, r), Lt.value || ft.msg(r?.message || String(r), "error");
      }
    }, Dt = (i) => Math.max(2, Math.floor(Math.round(i) / 2) * 2), We = async () => {
      const i = n.value;
      if (!i)
        throw new Error("录制视口尚未准备好");
      const r = i.getBoundingClientRect(), C = await t.scaleFactor(), H = await t.innerPosition(), ne = Dt(r.width * C), Q = Dt(r.height * C);
      if (ne < Ve || Q < Ve)
        throw new Error("录制区域太小，请放大录制窗口");
      const Be = {
        x: r.left,
        y: r.top,
        width: ne / C,
        height: Q / C,
        screenX: Math.round(H.x + r.left * C),
        screenY: Math.round(H.y + r.top * C),
        physicalWidth: ne,
        physicalHeight: Q,
        scale: C
      };
      return console.info(`${K} capture region`, Be), Be;
    }, W = async () => {
      try {
        const i = await We();
        o.value = {
          width: i.physicalWidth,
          height: i.physicalHeight
        }, await Ne({
          x: Math.round(i.x * i.scale),
          y: Math.round(i.y * i.scale),
          width: i.physicalWidth,
          height: i.physicalHeight
        }).catch(() => {
        });
      } catch {
        o.value = { width: 0, height: 0 }, await Ne(null).catch(() => {
        });
      }
    }, Ae = async () => {
      await Ne(null).catch(() => {
      });
    }, Rt = () => {
      window.setTimeout(() => {
        W();
      }, 120);
    }, eo = () => new Promise((i) => {
      requestAnimationFrame(() => requestAnimationFrame(() => i()));
    }), to = async () => {
      const [i, r] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: i.x,
        y: i.y,
        width: r.width,
        height: r.height
      };
    }, no = (i, r) => {
      const C = Math.min(i.width, r.width), H = Math.min(i.height, r.height), ne = r.x + r.width - C, Q = r.y + r.height - H;
      return {
        x: Math.min(Math.max(i.x, r.x), ne),
        y: Math.min(Math.max(i.y, r.y), Q),
        width: C,
        height: H
      };
    }, Ft = async (i) => {
      await t.setSize(new ue(Math.round(i.width), Math.round(i.height))), await t.setPosition(new Z(Math.round(i.x), Math.round(i.y))), await eo();
    }, Wt = async () => {
      g?.(), g = null, s.value = 0;
    }, je = async () => {
      if (!(!rt.value || g))
        try {
          console.info(`${K} backend audio meter listening`), g = await Ye("screen_recorder_audio_level", (i) => {
            if (!Pe.value) {
              s.value = 0;
              return;
            }
            const r = Math.max(0, Math.min(1, Number(i.payload?.level ?? 0)));
            s.value = s.value * 0.38 + r * 0.62;
          }), l.value = !1;
        } catch (i) {
          console.error(`${K} audio meter failed`, i), l.value = !0;
        }
    }, oo = async (i) => {
      i.button !== 0 || Ie.value || (await Ae(), await t.startDragging().catch((r) => {
        ft.msg(r?.message || String(r), "error");
      }), Rt());
    }, so = async (i) => {
      Ie.value || (await Ae(), await t.startResizeDragging(i).catch((r) => {
        ft.msg(r?.message || String(r), "error");
      }), Rt());
    }, ao = () => ve(async () => {
      console.info(`${K} handle start`), a.value = null, await je(), await me(!0).catch(() => {
      }), await W(), await ee(await We());
    }), io = () => ve(async () => {
      console.info(`${K} handle pause`), await x();
    }), ro = () => ve(async () => {
      console.info(`${K} handle resume`), await te(await We());
    }), lo = () => ve(async () => {
      console.info(`${K} handle stop/export`), a.value = {
        stage: "encode",
        message: b.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await D(), s.value = 0, await ge(), await W(), await me(!1).catch(() => {
      });
    }), uo = () => ve(async () => {
      console.info(`${K} handle cancel export`), await O(), a.value = null, await W();
    }), co = () => {
      const i = { ...b.value };
      Ae(), $t(), b.value = i, m.value = "ready", h.value = null, a.value = null, me(!0).catch(() => {
      }), $e(W), je();
    }, po = async (i) => {
      const r = await Ro(i.screenX, i.screenY), C = r?.scaleFactor || await t.scaleFactor(), H = Math.round((vt + yt) * C), ne = H, Q = Math.round((_r + vt + yt) * C), Be = Math.round((br + vt + yt) * C), Bt = Math.round(fn * C), Ht = Math.round(gn * C), A = {
        x: i.screenX - H,
        y: i.screenY - Q,
        width: Math.max(Bt, i.physicalWidth + H + ne),
        height: Math.max(Ht, i.physicalHeight + Q + Be)
      }, T = r ? {
        x: r.position.x,
        y: r.position.y,
        width: r.size.width,
        height: r.size.height
      } : null, ut = (() => {
        if (!T) return !1;
        const F = Math.max(8, Math.round(8 * C)), J = T.x + T.width, oe = T.y + T.height, se = i.screenX + i.physicalWidth, He = i.screenY + i.physicalHeight;
        return i.screenX <= T.x + F && i.screenY <= T.y + F && se >= J - F && He >= oe - F;
      })(), yo = (() => {
        if (!T || !ut) return A;
        const F = T.x + T.width, J = T.y + T.height;
        if (A.x >= T.x && A.y >= T.y && A.x + A.width <= F && A.y + A.height <= J) return A;
        const se = Math.min(A.width, T.width), He = Math.min(A.height, T.height);
        return {
          x: Math.min(Math.max(A.x, T.x), F - se),
          y: Math.min(Math.max(A.y, T.y), J - He),
          width: se,
          height: He
        };
      })();
      await Ft(yo), await $e();
      const Gt = async () => {
        const [F, J] = await Promise.all([
          We(),
          to()
        ]), oe = {
          x: i.screenX - F.screenX,
          y: i.screenY - F.screenY,
          width: i.physicalWidth - F.physicalWidth,
          height: i.physicalHeight - F.physicalHeight
        }, se = {
          x: J.x + oe.x,
          y: J.y + oe.y,
          width: Math.max(Bt, J.width + oe.width),
          height: Math.max(Ht, J.height + oe.height)
        };
        await Ft(
          T && ut ? no(se, T) : se
        );
      };
      try {
        await Gt(), ut || await Gt();
      } catch (F) {
        console.warn(`${K} snap correction skipped`, F);
      }
      await W();
    }, ho = () => ve(async () => {
      await Ae();
      const i = await Ni();
      await po(i);
    }), fo = async () => {
      await t.minimize();
    }, At = async () => {
      Lt.value = !0;
      try {
        m.value === "exporting" ? await O().catch(() => {
        }) : await Nt(), await Ne(null).catch(() => {
        }), await me(!1).catch(() => {
        });
      } catch {
      }
      await $i();
    }, go = async () => {
      h.value && (await W(), await d("open_file_with_default_app", { filePath: h.value.path }));
    }, vo = async () => {
      h.value && (await W(), await d("show_file_in_folder", { filePath: h.value.path }));
    }, jt = (i) => {
      i.key === "Escape" && (i.preventDefault(), At());
    };
    return ot(async () => {
      m.value = "ready", await t.setMinSize(new xt(fn, gn)).catch(() => {
      }), await me(!0).catch(() => {
      }), await M().catch(() => {
      }), await $e(), await W(), await je(), await $e(), await t.emit("screen_recorder_ready"), v = await Ye("screen_recorder_export_progress", (i) => {
        a.value = i.payload;
      }).catch(() => null), n.value && (p = new ResizeObserver(() => {
        W();
      }), p.observe(n.value)), f = await t.onMoved(() => {
        W();
      }).catch(() => null), window.addEventListener("resize", W), window.addEventListener("keydown", jt);
    }), be(rt, (i) => {
      i ? je() : Wt();
    }), be(m, (i) => {
      i !== "recording" && (s.value = 0), i !== "exporting" && (a.value = null);
    }), yn(() => {
      p?.disconnect(), f?.(), v?.(), window.removeEventListener("resize", W), window.removeEventListener("keydown", jt), Ne(null).catch(() => {
      }), me(!1).catch(() => {
      }), Wt();
    }), (i, r) => (k(), P("div", Bi, [
      u(
        "div",
        {
          class: N(["recorder-shell", { recording: c(m) === "recording", paused: c(m) === "paused" }])
        },
        [
          (k(), P(
            we,
            null,
            Mo(_, (C) => u("span", {
              key: C.className,
              class: N(["resize-zone", C.className]),
              onMousedown: Le((H) => so(C.direction), ["prevent"])
            }, null, 42, Hi)),
            64
            /* STABLE_FRAGMENT */
          )),
          u(
            "header",
            {
              class: "title-bar",
              onMousedown: oo
            },
            [
              u(
                "span",
                Gi,
                E(i.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              u(
                "div",
                {
                  class: "window-actions",
                  onMousedown: r[0] || (r[0] = Le(() => {
                  }, ["stop"]))
                },
                [
                  u("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: fo
                  }, [
                    I(c(Ho), {
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
                    onClick: At
                  }, [
                    I(c(Bo), {
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
          u("main", Vi, [
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
            u("div", Ui, [
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
          u("footer", qi, [
            u("div", Ki, [
              u("div", Zi, [
                c(m) === "ready" || c(m) === "completed" ? (k(), P(
                  "button",
                  {
                    key: 0,
                    class: "icon-control snap-control",
                    title: "拖到目标窗口并松开以对齐",
                    "aria-label": "对齐目标窗口",
                    onMousedown: Le(ho, ["prevent"])
                  },
                  [
                    I(c(Go), {
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ],
                  32
                  /* NEED_HYDRATION */
                )) : X("v-if", !0),
                u("button", {
                  class: N(["audio-meter", { active: Pe.value && s.value > 0.03, metering: Pe.value && !l.value, muted: !Pe.value || l.value }]),
                  title: Yn.value,
                  "aria-label": "系统声音录制状态",
                  disabled: c(m) === "exporting" || c(b).format === "gif"
                }, [
                  u(
                    "span",
                    {
                      class: "audio-bars",
                      style: xe(Jn.value)
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
                ], 10, Ji)
              ]),
              u("label", Yi, [
                le(u("select", {
                  "onUpdate:modelValue": r[1] || (r[1] = (C) => c(b).fps = C),
                  disabled: Ie.value
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
                ]), 8, Xi), [
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
              le(u("select", {
                "onUpdate:modelValue": r[2] || (r[2] = (C) => c(b).format = C),
                class: "format-select optional-format",
                disabled: Ie.value
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
              ]), 8, Qi), [
                [ct, c(b).format]
              ]),
              le(u("select", {
                "onUpdate:modelValue": r[3] || (r[3] = (C) => c(b).quality = C),
                class: "quality-select optional-quality",
                disabled: Ie.value
              }, [
                u(
                  "option",
                  tr,
                  E(i.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                u(
                  "option",
                  nr,
                  E(i.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                u(
                  "option",
                  or,
                  E(i.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, er), [
                [ct, c(b).quality]
              ]),
              u("div", sr, [
                u("label", ar, [
                  u("input", {
                    value: o.value.width,
                    readonly: ""
                  }, null, 8, ir)
                ]),
                r[17] || (r[17] = u(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                u("label", rr, [
                  u("input", {
                    value: o.value.height,
                    readonly: ""
                  }, null, 8, lr)
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
            u("div", ur, [
              c(m) === "recording" || c(m) === "paused" ? (k(), P(
                we,
                { key: 0 },
                [
                  u(
                    "span",
                    cr,
                    E(Qn.value),
                    1
                    /* TEXT */
                  ),
                  u("button", {
                    class: "control-button",
                    onClick: r[4] || (r[4] = (C) => c(m) === "paused" ? ro() : io())
                  }, [
                    u(
                      "span",
                      dr,
                      E(c(m) === "paused" ? i.$t("screenRecorder.resume") : i.$t("screenRecorder.pause")),
                      1
                      /* TEXT */
                    )
                  ]),
                  u("button", {
                    class: "control-button danger",
                    onClick: lo
                  }, [
                    u(
                      "span",
                      pr,
                      E(i.$t("screenRecorder.stop")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : c(m) === "exporting" ? (k(), P(
                we,
                { key: 1 },
                [
                  u("div", {
                    class: "export-progress",
                    title: Xn.value
                  }, [
                    u("div", fr, [
                      u(
                        "span",
                        null,
                        E(lt.value),
                        1
                        /* TEXT */
                      ),
                      u(
                        "strong",
                        null,
                        E(Et.value) + "%",
                        1
                        /* TEXT */
                      )
                    ]),
                    u("div", gr, [
                      u(
                        "span",
                        {
                          style: xe({ width: `${Et.value}%` })
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ])
                  ], 8, hr),
                  u("button", {
                    class: "control-button danger",
                    title: "取消导出",
                    onClick: uo
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
              )) : c(m) === "completed" && c(h) ? (k(), P(
                we,
                { key: 2 },
                [
                  u("span", {
                    class: "save-status optional-save-status",
                    title: c(h).path
                  }, E(c(h).hasAudio ? "已保存·有声" : "已保存·无声"), 9, vr),
                  u("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: go
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
                    onClick: vo
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
                    onClick: co
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
              )) : (k(), P("button", {
                key: 3,
                class: "record-button",
                disabled: c(z)?.available === !1 || o.value.width < Ve || o.value.height < Ve,
                onClick: ao
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
                  mr,
                  E(i.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, yr))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      c(z) && !c(z).available ? (k(), P(
        "p",
        wr,
        E(c(z).message || i.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : X("v-if", !0)
    ]));
  }
}), xr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, kr = /* @__PURE__ */ xr(Cr, [["__scopeId", "data-v-ca26ebd3"]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Mr as activate
};
