import { inject as ae, createVNode as T, getCurrentInstance as _e, ref as O, computed as y, unref as c, readonly as mo, getCurrentScope as wo, onScopeDispose as _o, onMounted as st, nextTick as $e, watch as be, isRef as bo, warn as Co, provide as xo, defineComponent as R, createElementBlock as N, openBlock as k, mergeProps as ko, renderSlot as Ce, createElementVNode as u, normalizeClass as $, Transition as Ct, withCtx as re, withDirectives as le, normalizeStyle as xe, createTextVNode as So, toDisplayString as D, vShow as Ze, shallowReactive as Oo, createBlock as Y, createCommentVNode as X, resolveDynamicComponent as fn, Fragment as we, withModifiers as Ee, isVNode as De, render as Je, onUnmounted as gn, renderList as Mo, vModelSelect as ct } from "vue";
const Tr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Mr)
  });
};
function Io(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function To(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ve;
const G = "__TAURI_TO_IPC_KEY__";
function No(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Po {
  get rid() {
    return Io(this, Ve, "f");
  }
  constructor(t) {
    Ve.set(this, void 0), To(this, Ve, t);
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
    return new Ye(this.width / t, this.height / t);
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
    return this.size instanceof Ye ? this.size : this.size.toLogical(t);
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
class vn {
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
    return new vn(this.x / t, this.y / t);
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
    return this.position instanceof vn ? this.position : this.position.toLogical(t);
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
async function yn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Xe(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: s,
    handler: No(t)
  }).then((l) => async () => yn(e, l));
}
async function zo(e, t, n) {
  return Xe(e, (o) => {
    yn(e, o.id), t(o);
  }, n);
}
async function $o(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Eo(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Le extends Po {
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
      rgba: Qe(t),
      width: n,
      height: o
    }).then((s) => new Le(s));
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
      bytes: Qe(t)
    }).then((n) => new Le(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new Le(n));
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
function Qe(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Le ? e.rid : e;
}
var mt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(mt || (mt = {}));
class Lo {
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
var Ht;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ht || (Ht = {}));
function mn() {
  return new wn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function dt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new wn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const pt = ["tauri://created", "tauri://error"];
class wn {
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
    return mn();
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
    } : Xe(t, n, {
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
    } : zo(t, n, {
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
    return Eo(t, n, o);
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
      value: Qe(t)
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
      value: t ? Qe(t) : void 0
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
      const o = new Lo(n);
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
    const n = await this.listen(j.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), o = await this.listen(j.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new Z(i.payload.position)
        }
      });
    }), s = await this.listen(j.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), l = await this.listen(j.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
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
var Gt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Gt || (Gt = {}));
var Ut;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ut || (Ut = {}));
var Vt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Vt || (Vt = {}));
function Do(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Z(e.position),
    size: new ue(e.size)
  };
}
async function Fo(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Do);
}
var Ro = {
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
function xt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var i = Wo(), p = ae(jo, Ro);
      return function() {
        var f = l.size, g = l.strokeWidth, v = l.strokeLinecap, _ = l.strokeLinejoin, m = l.theme, x = l.fill, z = l.spin, h = Ao(i, {
          size: f,
          strokeWidth: g,
          strokeLinecap: v,
          strokeLinejoin: _,
          theme: m,
          fill: x
        }, p), w = [p.prefix + "-icon"];
        return w.push(p.prefix + "-icon-" + e), z && w.push(p.prefix + "-icon-spin"), T("span", {
          class: w.join(" ")
        }, [n(h)]);
      };
    }
  };
  return o;
}
const Bo = xt("close-small", !1, function(e) {
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
}), Ho = xt("minus", !1, function(e) {
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
}), Go = xt("radar", !1, function(e) {
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
}), _n = Symbol(), qe = "el", Uo = "is-", ie = (e, t, n, o, s) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), o && (l += `__${o}`), s && (l += `--${s}`), l;
}, bn = Symbol("namespaceContextKey"), Vo = (e) => {
  const t = e || (_e() ? ae(bn, O(qe)) : O(qe));
  return y(() => c(t) || qe);
}, kt = (e, t) => {
  const n = Vo(t);
  return {
    namespace: n,
    b: (h = "") => ie(n.value, e, h, "", ""),
    e: (h) => h ? ie(n.value, e, "", h, "") : "",
    m: (h) => h ? ie(n.value, e, "", "", h) : "",
    be: (h, w) => h && w ? ie(n.value, e, h, w, "") : "",
    em: (h, w) => h && w ? ie(n.value, e, "", h, w) : "",
    bm: (h, w) => h && w ? ie(n.value, e, h, "", w) : "",
    bem: (h, w, I) => h && w && I ? ie(n.value, e, h, w, I) : "",
    is: (h, ...w) => {
      const I = w.length >= 1 ? w[0] : !0;
      return h && I ? `${Uo}${h}` : "";
    },
    cssVar: (h) => {
      const w = {};
      for (const I in h)
        h[I] && (w[`--${n.value}-${I}`] = h[I]);
      return w;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const w = {};
      for (const I in h)
        h[I] && (w[`--${n.value}-${e}-${I}`] = h[I]);
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
const qo = Object.prototype.hasOwnProperty, qt = (e, t) => qo.call(e, t), Fe = (e) => typeof e == "function", ce = (e) => typeof e == "string", Cn = (e) => e !== null && typeof e == "object";
var Ko = typeof global == "object" && global && global.Object === Object && global, Zo = typeof self == "object" && self && self.Object === Object && self, St = Ko || Zo || Function("return this")(), ke = St.Symbol, xn = Object.prototype, Jo = xn.hasOwnProperty, Yo = xn.toString, Pe = ke ? ke.toStringTag : void 0;
function Xo(e) {
  var t = Jo.call(e, Pe), n = e[Pe];
  try {
    e[Pe] = void 0;
    var o = !0;
  } catch {
  }
  var s = Yo.call(e);
  return o && (t ? e[Pe] = n : delete e[Pe]), s;
}
var Qo = Object.prototype, es = Qo.toString;
function ts(e) {
  return es.call(e);
}
var ns = "[object Null]", os = "[object Undefined]", Kt = ke ? ke.toStringTag : void 0;
function kn(e) {
  return e == null ? e === void 0 ? os : ns : Kt && Kt in Object(e) ? Xo(e) : ts(e);
}
function ss(e) {
  return e != null && typeof e == "object";
}
var is = "[object Symbol]";
function Ot(e) {
  return typeof e == "symbol" || ss(e) && kn(e) == is;
}
function as(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var Mt = Array.isArray, Zt = ke ? ke.prototype : void 0, Jt = Zt ? Zt.toString : void 0;
function Sn(e) {
  if (typeof e == "string")
    return e;
  if (Mt(e))
    return as(e, Sn) + "";
  if (Ot(e))
    return Jt ? Jt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function On(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var rs = "[object AsyncFunction]", ls = "[object Function]", us = "[object GeneratorFunction]", cs = "[object Proxy]";
function ds(e) {
  if (!On(e))
    return !1;
  var t = kn(e);
  return t == ls || t == us || t == rs || t == cs;
}
var ht = St["__core-js_shared__"], Yt = function() {
  var e = /[^.]+$/.exec(ht && ht.keys && ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ps(e) {
  return !!Yt && Yt in e;
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
  if (!On(e) || ps(e))
    return !1;
  var t = ds(e) ? Cs : ys;
  return t.test(gs(e));
}
function ks(e, t) {
  return e?.[t];
}
function Mn(e, t) {
  var n = ks(e, t);
  return xs(n) ? n : void 0;
}
function Ss(e, t) {
  return e === t || e !== e && t !== t;
}
var Os = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ms = /^\w*$/;
function Is(e, t) {
  if (Mt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ot(e) ? !0 : Ms.test(e) || !Os.test(e) || t != null && e in Object(t);
}
var Re = Mn(Object, "create");
function Ts() {
  this.__data__ = Re ? Re(null) : {}, this.size = 0;
}
function Ns(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ps = "__lodash_hash_undefined__", zs = Object.prototype, $s = zs.hasOwnProperty;
function Es(e) {
  var t = this.__data__;
  if (Re) {
    var n = t[e];
    return n === Ps ? void 0 : n;
  }
  return $s.call(t, e) ? t[e] : void 0;
}
var Ls = Object.prototype, Ds = Ls.hasOwnProperty;
function Fs(e) {
  var t = this.__data__;
  return Re ? t[e] !== void 0 : Ds.call(t, e);
}
var Rs = "__lodash_hash_undefined__";
function Ws(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Re && t === void 0 ? Rs : t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = Ts;
de.prototype.delete = Ns;
de.prototype.get = Es;
de.prototype.has = Fs;
de.prototype.set = Ws;
function As() {
  this.__data__ = [], this.size = 0;
}
function it(e, t) {
  for (var n = e.length; n--; )
    if (Ss(e[n][0], t))
      return n;
  return -1;
}
var js = Array.prototype, Bs = js.splice;
function Hs(e) {
  var t = this.__data__, n = it(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Bs.call(t, n, 1), --this.size, !0;
}
function Gs(e) {
  var t = this.__data__, n = it(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Us(e) {
  return it(this.__data__, e) > -1;
}
function Vs(e, t) {
  var n = this.__data__, o = it(n, e);
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
Me.prototype.has = Us;
Me.prototype.set = Vs;
var qs = Mn(St, "Map");
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
var ei = "Expected a function";
function It(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ei);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], l = n.cache;
    if (l.has(s))
      return l.get(s);
    var i = e.apply(this, o);
    return n.cache = l.set(s, i) || l, i;
  };
  return n.cache = new (It.Cache || he)(), n;
}
It.Cache = he;
var ti = 500;
function ni(e) {
  var t = It(e, function(o) {
    return n.size === ti && n.clear(), o;
  }), n = t.cache;
  return t;
}
var oi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, si = /\\(\\)?/g, ii = ni(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(oi, function(n, o, s, l) {
    t.push(s ? l.replace(si, "$1") : o || n);
  }), t;
});
function ai(e) {
  return e == null ? "" : Sn(e);
}
function ri(e, t) {
  return Mt(e) ? e : Is(e, t) ? [e] : ii(ai(e));
}
function li(e) {
  if (typeof e == "string" || Ot(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ui(e, t) {
  t = ri(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[li(t[n++])];
  return n && n == o ? e : void 0;
}
function ci(e, t, n) {
  var o = e == null ? void 0 : ui(e, t);
  return o === void 0 ? n : o;
}
function di(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const In = (e) => e === void 0, Xt = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", wt = (e) => typeof Element > "u" ? !1 : e instanceof Element, pi = (e) => ce(e) ? !Number.isNaN(Number(e)) : !1;
var Qt;
const fe = typeof window < "u", hi = (e) => typeof e == "string", fi = () => {
};
fe && ((Qt = window?.navigator) != null && Qt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Tt(e) {
  return typeof e == "function" ? e() : c(e);
}
function gi(e) {
  return e;
}
function Nt(e) {
  return wo() ? (_o(e), !0) : !1;
}
function vi(e, t = !0) {
  _e() ? st(e) : t ? e() : $e(e);
}
function Tn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = O(!1);
  let l = null;
  function i() {
    l && (clearTimeout(l), l = null);
  }
  function p() {
    s.value = !1, i();
  }
  function f(...g) {
    i(), s.value = !0, l = setTimeout(() => {
      s.value = !1, l = null, e(...g);
    }, Tt(t));
  }
  return o && (s.value = !0, fe && f()), Nt(p), {
    isPending: mo(s),
    start: f,
    stop: p
  };
}
function Nn(e) {
  var t;
  const n = Tt(e);
  return (t = n?.$el) != null ? t : n;
}
const Pn = fe ? window : void 0;
function zn(...e) {
  let t, n, o, s;
  if (hi(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = Pn) : [t, n, o, s] = e, !t)
    return fi;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], i = () => {
    l.forEach((v) => v()), l.length = 0;
  }, p = (v, _, m, x) => (v.addEventListener(_, m, x), () => v.removeEventListener(_, m, x)), f = be(() => [Nn(t), Tt(s)], ([v, _]) => {
    i(), v && l.push(...n.flatMap((m) => o.map((x) => p(v, m, x, _))));
  }, { immediate: !0, flush: "post" }), g = () => {
    f(), i();
  };
  return Nt(g), g;
}
function yi(e, t = !1) {
  const n = O(), o = () => n.value = !!e();
  return o(), vi(o, t), n;
}
const en = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tn = "__vueuse_ssr_handlers__";
en[tn] = en[tn] || {};
var nn = Object.getOwnPropertySymbols, mi = Object.prototype.hasOwnProperty, wi = Object.prototype.propertyIsEnumerable, _i = (e, t) => {
  var n = {};
  for (var o in e)
    mi.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && nn)
    for (var o of nn(e))
      t.indexOf(o) < 0 && wi.call(e, o) && (n[o] = e[o]);
  return n;
};
function bi(e, t, n = {}) {
  const o = n, { window: s = Pn } = o, l = _i(o, ["window"]);
  let i;
  const p = yi(() => s && "ResizeObserver" in s), f = () => {
    i && (i.disconnect(), i = void 0);
  }, g = be(() => Nn(e), (_) => {
    f(), p.value && s && _ && (i = new ResizeObserver(t), i.observe(_, l));
  }, { immediate: !0, flush: "post" }), v = () => {
    f(), g();
  };
  return Nt(v), {
    isSupported: p,
    stop: v
  };
}
var on;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(on || (on = {}));
var Ci = Object.defineProperty, sn = Object.getOwnPropertySymbols, xi = Object.prototype.hasOwnProperty, ki = Object.prototype.propertyIsEnumerable, an = (e, t, n) => t in e ? Ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Si = (e, t) => {
  for (var n in t || (t = {}))
    xi.call(t, n) && an(e, n, t[n]);
  if (sn)
    for (var n of sn(t))
      ki.call(t, n) && an(e, n, t[n]);
  return e;
};
const Oi = {
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
Si({
  linear: gi
}, Oi);
const rn = {
  current: 0
}, ln = O(0), $n = 2e3, un = Symbol("elZIndexContextKey"), En = Symbol("zIndexContextKey"), Mi = (e) => {
  const t = _e() ? ae(un, rn) : rn, n = e || (_e() ? ae(En, void 0) : void 0), o = y(() => {
    const i = c(n);
    return pe(i) ? i : $n;
  }), s = y(() => o.value + ln.value), l = () => (t.current++, ln.value = t.current, s.value);
  return !fe && ae(un), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: l
  };
};
var Ii = {
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
const Ti = (e) => (t, n) => Ni(t, n, c(e)), Ni = (e, t, n) => ci(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var l;
  return `${(l = t?.[s]) != null ? l : `{${s}}`}`;
}), Pi = (e) => {
  const t = y(() => c(e).name), n = bo(e) ? e : O(e);
  return {
    lang: t,
    locale: n,
    t: Ti(e)
  };
}, Ln = Symbol("localeContextKey"), zi = (e) => {
  const t = e || ae(Ln, O());
  return Pi(y(() => t.value || Ii));
}, Dn = "__epPropKey", B = (e) => e, $i = (e) => Cn(e) && !!e[Dn], Fn = (e, t) => {
  if (!Cn(e) || $i(e))
    return e;
  const { values: n, required: o, default: s, type: l, validator: i } = e, f = {
    type: l,
    required: !!o,
    validator: n || i ? (g) => {
      let v = !1, _ = [];
      if (n && (_ = Array.from(n), qt(e, "default") && _.push(s), v || (v = _.includes(g))), i && (v || (v = i(g))), !v && _.length > 0) {
        const m = [...new Set(_)].map((x) => JSON.stringify(x)).join(", ");
        Co(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(g)}.`);
      }
      return v;
    } : void 0,
    [Dn]: !0
  };
  return qt(e, "default") && (f.default = s), f;
}, Ie = (e) => di(Object.entries(e).map(([t, n]) => [
  t,
  Fn(n, t)
])), Ei = ["", "default", "small", "large"], Li = Fn({
  type: String,
  values: Ei,
  required: !1
}), Di = Symbol("size"), Fi = Symbol("emptyValuesContextKey"), Ri = Ie({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Fe(e) ? !e() : !e
  }
}), cn = (e) => Object.keys(e), et = O();
function Rn(e, t = void 0) {
  return _e() ? ae(_n, et) : et;
}
function Wn(e, t) {
  const n = Rn(), o = kt(e, y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || qe;
  })), s = zi(y(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = Mi(y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || $n;
  })), i = y(() => {
    var p;
    return c(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return An(y(() => c(n) || {})), {
    ns: o,
    locale: s,
    zIndex: l,
    size: i
  };
}
const An = (e, t, n = !1) => {
  var o;
  const s = !!_e(), l = s ? Rn() : void 0, i = (o = void 0) != null ? o : s ? xo : void 0;
  if (!i)
    return;
  const p = y(() => {
    const f = c(e);
    return l?.value ? Wi(l.value, f) : f;
  });
  return i(_n, p), i(Ln, y(() => p.value.locale)), i(bn, y(() => p.value.namespace)), i(En, y(() => p.value.zIndex)), i(Di, {
    size: y(() => p.value.size || "")
  }), i(Fi, y(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !et.value) && (et.value = p.value), p;
}, Wi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...cn(e), ...cn(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var rt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function _t(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || pi(e))
    return `${e}${t}`;
  if (ce(e))
    return e;
}
const jn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Bn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ai = Ie({
  size: {
    type: B([Number, String])
  },
  color: {
    type: String
  }
}), ji = R({
  name: "ElIcon",
  inheritAttrs: !1
}), Bi = /* @__PURE__ */ R({
  ...ji,
  props: Ai,
  setup(e) {
    const t = e, n = kt("icon"), o = y(() => {
      const { size: s, color: l } = t;
      return !s && !l ? {} : {
        fontSize: In(s) ? void 0 : _t(s),
        "--color": l
      };
    });
    return (s, l) => (k(), N("i", ko({
      class: c(n).b(),
      style: c(o)
    }, s.$attrs), [
      Ce(s.$slots, "default")
    ], 16));
  }
});
var Hi = /* @__PURE__ */ rt(Bi, [["__file", "icon.vue"]]);
const tt = jn(Hi);
/*! Element Plus Icons Vue v2.3.1 */
var Gi = /* @__PURE__ */ R({
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
}), Ui = Gi, Vi = /* @__PURE__ */ R({
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
}), Hn = Vi, qi = /* @__PURE__ */ R({
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
}), Ki = qi, Zi = /* @__PURE__ */ R({
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
}), Ji = Zi, Yi = /* @__PURE__ */ R({
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
}), Xi = Yi;
const Gn = B([
  String,
  Object,
  Function
]), Qi = {
  Close: Hn
}, ea = {
  Close: Hn
}, nt = {
  success: Ji,
  warning: Xi,
  error: Ui,
  info: Ki
}, ta = (e) => e, Ke = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, na = Ie({
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
}), oa = R({
  name: "ElBadge"
}), sa = /* @__PURE__ */ R({
  ...oa,
  props: na,
  setup(e, { expose: t }) {
    const n = e, o = kt("badge"), s = y(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = y(() => {
      var i, p, f, g, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: _t(-((p = (i = n.offset) == null ? void 0 : i[0]) != null ? p : 0)),
          marginTop: _t((g = (f = n.offset) == null ? void 0 : f[1]) != null ? g : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: s
    }), (i, p) => (k(), N("div", {
      class: $(c(o).b())
    }, [
      Ce(i.$slots, "default"),
      T(Ct, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          le(u("sup", {
            class: $([
              c(o).e("content"),
              c(o).em("content", i.type),
              c(o).is("fixed", !!i.$slots.default),
              c(o).is("dot", i.isDot),
              c(o).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: xe(c(l))
          }, [
            Ce(i.$slots, "content", { value: c(s) }, () => [
              So(D(c(s)), 1)
            ])
          ], 6), [
            [Ze, !i.hidden && (c(s) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ia = /* @__PURE__ */ rt(sa, [["__file", "badge.vue"]]);
const aa = jn(ia), ra = Ie({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: B(Object)
  },
  size: Li,
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
  ...Ri
}), V = {};
R({
  name: "ElConfigProvider",
  props: ra,
  setup(e, { slots: t }) {
    be(() => e.message, (o) => {
      Object.assign(V, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = An(e);
    return () => Ce(t, "default", { config: n?.value });
  }
});
const Un = ["success", "info", "warning", "error"], L = ta({
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
}), la = Ie({
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
    type: Gn,
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
    values: Un,
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
}), ua = {
  destroy: () => !0
}, q = Oo([]), ca = (e) => {
  const t = q.findIndex((s) => s.id === e), n = q[t];
  let o;
  return t > 0 && (o = q[t - 1]), { current: n, prev: o };
}, da = (e) => {
  const { prev: t } = ca(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, pa = (e, t) => q.findIndex((o) => o.id === e) > 0 ? 16 : t, ha = R({
  name: "ElMessage"
}), fa = /* @__PURE__ */ R({
  ...ha,
  props: la,
  emits: ua,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = ea, { ns: s, zIndex: l } = Wn("message"), { currentZIndex: i, nextZIndex: p } = l, f = O(), g = O(!1), v = O(0);
    let _;
    const m = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), x = y(() => {
      const M = n.type;
      return { [s.bm("icon", M)]: M && nt[M] };
    }), z = y(() => n.icon || nt[n.type] || ""), h = y(() => da(n.id)), w = y(() => pa(n.id, n.offset) + h.value), I = y(() => v.value + w.value), ee = y(() => ({
      top: `${w.value}px`,
      zIndex: i.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: _ } = Tn(() => {
        F();
      }, n.duration));
    }
    function te() {
      _?.();
    }
    function F() {
      g.value = !1;
    }
    function ge({ code: M }) {
      M === Ke.esc && F();
    }
    return st(() => {
      C(), p(), g.value = !0;
    }), be(() => n.repeatNum, () => {
      te(), C();
    }), zn(document, "keydown", ge), bi(f, () => {
      v.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: I,
      close: F
    }), (M, Pt) => (k(), Y(Ct, {
      name: c(s).b("fade"),
      onBeforeLeave: M.onClose,
      onAfterLeave: (zt) => M.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(u("div", {
          id: M.id,
          ref_key: "messageRef",
          ref: f,
          class: $([
            c(s).b(),
            { [c(s).m(M.type)]: M.type },
            c(s).is("center", M.center),
            c(s).is("closable", M.showClose),
            c(s).is("plain", M.plain),
            M.customClass
          ]),
          style: xe(c(ee)),
          role: "alert",
          onMouseenter: te,
          onMouseleave: C
        }, [
          M.repeatNum > 1 ? (k(), Y(c(aa), {
            key: 0,
            value: M.repeatNum,
            type: c(m),
            class: $(c(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : X("v-if", !0),
          c(z) ? (k(), Y(c(tt), {
            key: 1,
            class: $([c(s).e("icon"), c(x)])
          }, {
            default: re(() => [
              (k(), Y(fn(c(z))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          Ce(M.$slots, "default", {}, () => [
            M.dangerouslyUseHTMLString ? (k(), N(we, { key: 1 }, [
              X(" Caution here, message could've been compromised, never use user's input as message "),
              u("p", {
                class: $(c(s).e("content")),
                innerHTML: M.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), N("p", {
              key: 0,
              class: $(c(s).e("content"))
            }, D(M.message), 3))
          ]),
          M.showClose ? (k(), Y(c(tt), {
            key: 2,
            class: $(c(s).e("closeBtn")),
            onClick: Ee(F, ["stop"])
          }, {
            default: re(() => [
              T(c(o))
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
var ga = /* @__PURE__ */ rt(fa, [["__file", "message.vue"]]);
let va = 1;
const Vn = (e) => {
  const t = !e || ce(e) || De(e) || Fe(e) ? { message: e } : e, n = {
    ...L,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ce(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    wt(o) || (o = document.body), n.appendTo = o;
  }
  return Xt(V.grouping) && !n.grouping && (n.grouping = V.grouping), pe(V.duration) && n.duration === 3e3 && (n.duration = V.duration), pe(V.offset) && n.offset === 16 && (n.offset = V.offset), Xt(V.showClose) && !n.showClose && (n.showClose = V.showClose), n;
}, ya = (e) => {
  const t = q.indexOf(e);
  if (t === -1)
    return;
  q.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ma = ({ appendTo: e, ...t }, n) => {
  const o = `message_${va++}`, s = t.onClose, l = document.createElement("div"), i = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), ya(v);
    },
    onDestroy: () => {
      Je(null, l);
    }
  }, p = T(ga, i, Fe(i.message) || De(i.message) ? {
    default: Fe(i.message) ? i.message : () => i.message
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
  const n = Vn(e);
  if (n.grouping && q.length) {
    const s = q.find(({ vnode: l }) => {
      var i;
      return ((i = l.props) == null ? void 0 : i.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (pe(V.max) && q.length >= V.max)
    return { close: () => {
    } };
  const o = ma(n, t);
  return q.push(o), o.handler;
};
Un.forEach((e) => {
  Se[e] = (t = {}, n) => {
    const o = Vn(t);
    return Se({ ...o, type: e }, n);
  };
});
function wa(e) {
  for (const t of q)
    (!e || e === t.props.type) && t.handler.close();
}
Se.closeAll = wa;
Se._context = null;
const _a = Bn(Se, "$message"), qn = [
  "success",
  "info",
  "warning",
  "error"
], ba = Ie({
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
    type: Gn
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
    values: [...qn, ""],
    default: ""
  },
  zIndex: Number
}), Ca = {
  destroy: () => !0
}, xa = R({
  name: "ElNotification"
}), ka = /* @__PURE__ */ R({
  ...xa,
  props: ba,
  emits: Ca,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = Wn("notification"), { nextZIndex: l, currentZIndex: i } = s, { Close: p } = Qi, f = O(!1);
    let g;
    const v = y(() => {
      const C = n.type;
      return C && nt[n.type] ? o.m(C) : "";
    }), _ = y(() => n.type && nt[n.type] || n.icon), m = y(() => n.position.endsWith("right") ? "right" : "left"), x = y(() => n.position.startsWith("top") ? "top" : "bottom"), z = y(() => {
      var C;
      return {
        [x.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : i.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: g } = Tn(() => {
        f.value && I();
      }, n.duration));
    }
    function w() {
      g?.();
    }
    function I() {
      f.value = !1;
    }
    function ee({ code: C }) {
      C === Ke.delete || C === Ke.backspace ? w() : C === Ke.esc ? f.value && I() : h();
    }
    return st(() => {
      h(), l(), f.value = !0;
    }), zn(document, "keydown", ee), t({
      visible: f,
      close: I
    }), (C, te) => (k(), Y(Ct, {
      name: c(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (F) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(u("div", {
          id: C.id,
          class: $([c(o).b(), C.customClass, c(m)]),
          style: xe(c(z)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: h,
          onClick: C.onClick
        }, [
          c(_) ? (k(), Y(c(tt), {
            key: 0,
            class: $([c(o).e("icon"), c(v)])
          }, {
            default: re(() => [
              (k(), Y(fn(c(_))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          u("div", {
            class: $(c(o).e("group"))
          }, [
            u("h2", {
              class: $(c(o).e("title")),
              textContent: D(C.title)
            }, null, 10, ["textContent"]),
            le(u("div", {
              class: $(c(o).e("content")),
              style: xe(C.title ? void 0 : { margin: 0 })
            }, [
              Ce(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (k(), N(we, { key: 1 }, [
                  X(" Caution here, message could've been compromised, never use user's input as message "),
                  u("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), N("p", { key: 0 }, D(C.message), 1))
              ])
            ], 6), [
              [Ze, C.message]
            ]),
            C.showClose ? (k(), Y(c(tt), {
              key: 0,
              class: $(c(o).e("closeBtn")),
              onClick: Ee(I, ["stop"])
            }, {
              default: re(() => [
                T(c(p))
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
var Sa = /* @__PURE__ */ rt(ka, [["__file", "notification.vue"]]);
const ot = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, bt = 16;
let Oa = 1;
const Oe = function(e = {}, t) {
  if (!fe)
    return { close: () => {
    } };
  (ce(e) || De(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  ot[n].forEach(({ vm: v }) => {
    var _;
    o += (((_ = v.el) == null ? void 0 : _.offsetHeight) || 0) + bt;
  }), o += bt;
  const s = `notification_${Oa++}`, l = e.onClose, i = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      Ma(s, n, l);
    }
  };
  let p = document.body;
  wt(e.appendTo) ? p = e.appendTo : ce(e.appendTo) && (p = document.querySelector(e.appendTo)), wt(p) || (p = document.body);
  const f = document.createElement("div"), g = T(Sa, i, Fe(i.message) ? i.message : De(i.message) ? () => i.message : null);
  return g.appContext = In(t) ? Oe._context : t, g.props.onDestroy = () => {
    Je(null, f);
  }, Je(g, f), ot[n].push({ vm: g }), p.appendChild(f.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
qn.forEach((e) => {
  Oe[e] = (t = {}, n) => ((ce(t) || De(t)) && (t = {
    message: t
  }), Oe({ ...t, type: e }, n));
});
function Ma(e, t, n) {
  const o = ot[t], s = o.findIndex(({ vm: g }) => {
    var v;
    return ((v = g.component) == null ? void 0 : v.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: l } = o[s];
  if (!l)
    return;
  n?.(l);
  const i = l.el.offsetHeight, p = t.split("-")[0];
  o.splice(s, 1);
  const f = o.length;
  if (!(f < 1))
    for (let g = s; g < f; g++) {
      const { el: v, component: _ } = o[g].vm, m = Number.parseInt(v.style[p], 10) - i - bt;
      _.props.offset = m;
    }
}
function Ia() {
  for (const e of Object.values(ot))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Oe.closeAll = Ia;
Oe._context = null;
const Ta = Bn(Oe, "$notify"), ft = {
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
    o === "center" ? _a({
      message: t,
      type: n,
      duration: s,
      showClose: l,
      grouping: !0
    }) : Ta({
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
}, gt = "[screen-recorder]", Na = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, U = async (e, t) => {
  const n = performance.now(), o = Na(t);
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
}, Pa = () => U("screen_recorder_get_ffmpeg_status"), me = (e) => U("screen_recorder_set_capture_excluded", { excluded: e }), ze = (e) => U("screen_recorder_set_passthrough_region", { region: e }), za = () => U("screen_recorder_pick_target_window"), $a = () => U("screen_recorder_close_window"), Ea = (e, t) => U("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), La = () => U("screen_recorder_pause_recording"), Da = (e, t) => U("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Fa = () => U("screen_recorder_stop_recording"), Ra = () => U("screen_recorder_cancel_recording"), Wa = () => U("screen_recorder_cancel_export"), Aa = (e, t) => U("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), dn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), E = "[screen-recorder]";
function ja() {
  const e = O("selecting"), t = O(dn()), n = O(null), o = O(null), s = O(""), l = O(null), i = O(0), p = O(0), f = O(null), g = () => {
    p.value = e.value === "recording" && l.value !== null ? i.value + Date.now() - l.value : i.value;
  }, v = () => {
    f.value !== null && (window.clearInterval(f.value), f.value = null);
  }, _ = () => {
    v(), g(), f.value = window.setInterval(() => {
      g();
    }, 250);
  }, m = async () => (console.info(`${E} refresh ffmpeg status`), n.value = await Pa(), console.info(`${E} ffmpeg status`, n.value), n.value), x = async (F) => {
    s.value = "", o.value = null, console.info(`${E} begin requested`, { region: F, settings: t.value });
    const ge = n.value ?? await m();
    if (!ge.available)
      throw new Error(ge.message || "FFmpeg unavailable");
    await Ea(F, t.value), e.value = "recording", i.value = 0, p.value = 0, l.value = Date.now(), _(), console.info(`${E} recording started`, { status: e.value });
  }, z = async () => {
    e.value === "recording" && (console.info(`${E} pause requested`, { elapsedMs: p.value }), g(), i.value = p.value, l.value = null, v(), await La(), e.value = "paused", console.info(`${E} recording paused`, { accumulatedMs: i.value }));
  }, h = async (F) => {
    e.value === "paused" && (console.info(`${E} resume requested`, { region: F, settings: t.value }), await Da(F, t.value), e.value = "recording", l.value = Date.now(), _(), console.info(`${E} recording resumed`));
  }, w = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${E} stop requested`, { status: e.value, elapsedMs: p.value }), g(), i.value = p.value, l.value = null, v(), await Fa(), e.value = "exporting", console.info(`${E} recording stopped`, { accumulatedMs: i.value }));
  }, I = async () => {
    console.info(`${E} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return o.value = await Aa(t.value, Math.round(p.value)), e.value = "completed", console.info(`${E} export completed`, o.value), o.value;
    } catch (F) {
      throw e.value = "ready", o.value = null, F;
    }
  }, ee = async () => {
    console.info(`${E} cancel export requested`, { status: e.value }), await Wa(), e.value = "ready", o.value = null;
  }, C = async () => {
    console.info(`${E} cancel requested`, { status: e.value, elapsedMs: p.value }), v(), await Ra(), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, o.value = null, console.info(`${E} canceled`);
  }, te = () => {
    console.info(`${E} reset session`), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, o.value = null, s.value = "", t.value = dn();
  };
  return gn(() => {
    v();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: s,
    elapsedMs: p,
    refreshFfmpegStatus: m,
    begin: x,
    pause: z,
    resume: h,
    stop: w,
    exportFile: I,
    cancelExport: ee,
    cancel: C,
    reset: te
  };
}
const Ba = { class: "screen-recorder" }, Ha = ["onMousedown"], Ga = { class: "window-title" }, Ua = { class: "capture-viewport" }, Va = { class: "capture-frame" }, qa = { class: "control-strip" }, Ka = { class: "control-group control-group--tools" }, Za = { class: "tool-pill" }, Ja = ["title", "disabled"], Ya = { class: "select-field" }, Xa = ["disabled"], Qa = ["disabled"], er = ["disabled"], tr = { value: "high" }, nr = { value: "standard" }, or = { value: "small" }, sr = { class: "dimension-group optional-size" }, ir = { class: "dimension" }, ar = ["value"], rr = { class: "dimension" }, lr = ["value"], ur = { class: "control-group control-group--actions" }, cr = { class: "time" }, dr = { class: "button-label" }, pr = { class: "button-label" }, hr = ["title"], fr = { class: "export-progress__meta" }, gr = { class: "export-progress__track" }, vr = ["title"], yr = ["disabled"], mr = { class: "record-label" }, wr = {
  key: 0,
  class: "warning"
}, K = "[screen-recorder]", Ue = 80, _r = 468, br = 300, pn = 420, hn = 260, Cr = 38, xr = 60, vt = 8, yt = 1, kr = /* @__PURE__ */ R({
  __name: "index",
  setup(e) {
    const t = mn(), n = O(null), o = O({ width: 0, height: 0 }), s = O(0), l = O(!1), i = O(null);
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
      settings: x,
      ffmpegStatus: z,
      result: h,
      elapsedMs: w,
      refreshFfmpegStatus: I,
      begin: ee,
      pause: C,
      resume: te,
      stop: F,
      exportFile: ge,
      cancelExport: M,
      cancel: Pt,
      reset: zt
    } = ja(), $t = O(!1), Te = y(() => m.value === "recording" || m.value === "paused" || m.value === "exporting"), lt = y(() => x.value.audio && x.value.format === "mp4"), Ne = y(() => lt.value && m.value === "recording"), Kn = y(() => {
      const a = Ne.value && !l.value ? s.value : 0, r = (b, H) => Math.max(0.18, Math.min(1, b + a * H)).toFixed(3);
      return {
        "--bar-1": r(0.28, 0.64),
        "--bar-2": r(0.42, 0.78),
        "--bar-3": r(0.34, 0.94),
        "--bar-4": r(0.22, 0.72)
      };
    }), Zn = y(() => {
      if (x.value.format === "gif")
        return "GIF 不支持音频";
      if (l.value && x.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (h.value?.audioDevice)
        return `已录制音频：${h.value.audioDevice}`;
      if (h.value && !h.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (z.value?.available && !z.value.systemAudioAvailable) {
        const a = z.value.audioDevices?.join("、") || "无";
        return x.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return x.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Et = y(() => {
      const a = i.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), ut = y(() => {
      const a = i.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), Jn = y(() => {
      const a = i.value;
      return a?.totalFrames ? `${ut.value} (${a.currentFrame}/${a.totalFrames})` : ut.value;
    }), Yn = y(() => {
      const a = Math.floor(w.value / 1e3), r = Math.floor(a / 60).toString().padStart(2, "0"), b = (a % 60).toString().padStart(2, "0");
      return `${r}:${b}`;
    }), ve = async (a) => {
      try {
        await a();
      } catch (r) {
        console.error(`${K} action failed`, r), $t.value || ft.msg(r?.message || String(r), "error");
      }
    }, Lt = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), We = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const r = a.getBoundingClientRect(), b = await t.scaleFactor(), H = await t.innerPosition(), ne = Lt(r.width * b), Q = Lt(r.height * b);
      if (ne < Ue || Q < Ue)
        throw new Error("录制区域太小，请放大录制窗口");
      const Be = {
        x: r.left,
        y: r.top,
        width: ne / b,
        height: Q / b,
        screenX: Math.round(H.x + r.left * b),
        screenY: Math.round(H.y + r.top * b),
        physicalWidth: ne,
        physicalHeight: Q,
        scale: b
      };
      return console.info(`${K} capture region`, Be), Be;
    }, A = async () => {
      try {
        const a = await We();
        o.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }, await ze({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        o.value = { width: 0, height: 0 }, await ze(null).catch(() => {
        });
      }
    }, Ae = async () => {
      await ze(null).catch(() => {
      });
    }, Dt = () => {
      window.setTimeout(() => {
        A();
      }, 120);
    }, Xn = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), Qn = async () => {
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
    }, eo = (a, r) => {
      const b = Math.min(a.width, r.width), H = Math.min(a.height, r.height), ne = r.x + r.width - b, Q = r.y + r.height - H;
      return {
        x: Math.min(Math.max(a.x, r.x), ne),
        y: Math.min(Math.max(a.y, r.y), Q),
        width: b,
        height: H
      };
    }, Ft = async (a) => {
      await t.setSize(new ue(Math.round(a.width), Math.round(a.height))), await t.setPosition(new Z(Math.round(a.x), Math.round(a.y))), await Xn();
    }, Rt = async () => {
      g?.(), g = null, s.value = 0;
    }, je = async () => {
      if (!(!lt.value || g))
        try {
          console.info(`${K} backend audio meter listening`), g = await Xe("screen_recorder_audio_level", (a) => {
            if (!Ne.value) {
              s.value = 0;
              return;
            }
            const r = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            s.value = s.value * 0.38 + r * 0.62;
          }), l.value = !1;
        } catch (a) {
          console.error(`${K} audio meter failed`, a), l.value = !0;
        }
    }, to = async (a) => {
      a.button !== 0 || Te.value || (await Ae(), await t.startDragging().catch((r) => {
        ft.msg(r?.message || String(r), "error");
      }), Dt());
    }, no = async (a) => {
      Te.value || (await Ae(), await t.startResizeDragging(a).catch((r) => {
        ft.msg(r?.message || String(r), "error");
      }), Dt());
    }, oo = () => ve(async () => {
      console.info(`${K} handle start`), i.value = null, await je(), await me(!0).catch(() => {
      }), await A(), await ee(await We());
    }), so = () => ve(async () => {
      console.info(`${K} handle pause`), await C();
    }), io = () => ve(async () => {
      console.info(`${K} handle resume`), await te(await We());
    }), ao = () => ve(async () => {
      console.info(`${K} handle stop/export`), i.value = {
        stage: "encode",
        message: x.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await F(), s.value = 0, await ge(), await A(), await me(!1).catch(() => {
      });
    }), ro = () => ve(async () => {
      console.info(`${K} handle cancel export`), await M(), i.value = null, await A();
    }), lo = () => {
      Ae(), zt(), m.value = "ready", h.value = null, i.value = null, me(!0).catch(() => {
      }), t.setSize(new Ye(_r, br)), $e(A), je();
    }, uo = async (a) => {
      const r = await Fo(a.screenX, a.screenY), b = r?.scaleFactor || await t.scaleFactor(), H = Math.round((vt + yt) * b), ne = H, Q = Math.round((Cr + vt + yt) * b), Be = Math.round((xr + vt + yt) * b), jt = Math.round(pn * b), Bt = Math.round(hn * b), P = {
        x: a.screenX - H,
        y: a.screenY - Q,
        width: Math.max(jt, a.physicalWidth + H + ne),
        height: Math.max(Bt, a.physicalHeight + Q + Be)
      }, S = r ? {
        x: r.position.x,
        y: r.position.y,
        width: r.size.width,
        height: r.size.height
      } : null, go = (() => {
        if (!S) return P;
        const W = S.x + S.width, J = S.y + S.height;
        if (P.x >= S.x && P.y >= S.y && P.x + P.width <= W && P.y + P.height <= J) return P;
        const se = Math.min(P.width, S.width), He = Math.min(P.height, S.height);
        return {
          x: Math.min(Math.max(P.x, S.x), W - se),
          y: Math.min(Math.max(P.y, S.y), J - He),
          width: se,
          height: He
        };
      })(), vo = S ? P.x >= S.x && P.y >= S.y && P.x + P.width <= S.x + S.width && P.y + P.height <= S.y + S.height : !0;
      await Ft(go), await $e();
      const yo = (() => {
        if (!S) return !1;
        const W = Math.max(4, Math.round(4 * b)), J = S.x + S.width, oe = S.y + S.height, se = a.screenX + a.physicalWidth, He = a.screenY + a.physicalHeight;
        return !vo || a.screenX <= S.x + W || a.screenY <= S.y + W || se >= J - W || He >= oe - W;
      })();
      try {
        const [W, J] = await Promise.all([
          We(),
          Qn()
        ]), oe = {
          x: a.screenX - W.screenX,
          y: a.screenY - W.screenY,
          width: a.physicalWidth - W.physicalWidth,
          height: a.physicalHeight - W.physicalHeight
        }, se = {
          x: J.x + oe.x,
          y: J.y + oe.y,
          width: Math.max(jt, J.width + oe.width),
          height: Math.max(Bt, J.height + oe.height)
        };
        await Ft(
          S && yo ? eo(se, S) : se
        );
      } catch (W) {
        console.warn(`${K} snap correction skipped`, W);
      }
      await A();
    }, co = () => ve(async () => {
      await Ae();
      const a = await za();
      await uo(a);
    }), po = async () => {
      await t.minimize();
    }, Wt = async () => {
      $t.value = !0;
      try {
        m.value === "exporting" ? await M().catch(() => {
        }) : await Pt(), await ze(null).catch(() => {
        }), await me(!1).catch(() => {
        });
      } catch {
      }
      await $a();
    }, ho = async () => {
      h.value && (await A(), await d("open_file_with_default_app", { filePath: h.value.path }));
    }, fo = async () => {
      h.value && (await A(), await d("show_file_in_folder", { filePath: h.value.path }));
    }, At = (a) => {
      a.key === "Escape" && (a.preventDefault(), Wt());
    };
    return st(async () => {
      m.value = "ready", await t.setMinSize(new Ye(pn, hn)).catch(() => {
      }), await me(!0).catch(() => {
      }), await I().catch(() => {
      }), await $e(), await A(), await je(), await $e(), await t.emit("screen_recorder_ready"), v = await Xe("screen_recorder_export_progress", (a) => {
        i.value = a.payload;
      }).catch(() => null), n.value && (p = new ResizeObserver(() => {
        A();
      }), p.observe(n.value)), f = await t.onMoved(() => {
        A();
      }).catch(() => null), window.addEventListener("resize", A), window.addEventListener("keydown", At);
    }), be(lt, (a) => {
      a ? je() : Rt();
    }), be(m, (a) => {
      a !== "recording" && (s.value = 0), a !== "exporting" && (i.value = null);
    }), gn(() => {
      p?.disconnect(), f?.(), v?.(), window.removeEventListener("resize", A), window.removeEventListener("keydown", At), ze(null).catch(() => {
      }), me(!1).catch(() => {
      }), Rt();
    }), (a, r) => (k(), N("div", Ba, [
      u(
        "div",
        {
          class: $(["recorder-shell", { recording: c(m) === "recording", paused: c(m) === "paused" }])
        },
        [
          (k(), N(
            we,
            null,
            Mo(_, (b) => u("span", {
              key: b.className,
              class: $(["resize-zone", b.className]),
              onMousedown: Ee((H) => no(b.direction), ["prevent"])
            }, null, 42, Ha)),
            64
            /* STABLE_FRAGMENT */
          )),
          u(
            "header",
            {
              class: "title-bar",
              onMousedown: to
            },
            [
              u(
                "span",
                Ga,
                D(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              u(
                "div",
                {
                  class: "window-actions",
                  onMousedown: r[0] || (r[0] = Ee(() => {
                  }, ["stop"]))
                },
                [
                  u("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: po
                  }, [
                    T(c(Ho), {
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
                    T(c(Bo), {
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
          u("main", Ua, [
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
            u("div", Va, [
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
          u("footer", qa, [
            u("div", Ka, [
              u("div", Za, [
                c(m) === "ready" || c(m) === "completed" ? (k(), N(
                  "button",
                  {
                    key: 0,
                    class: "icon-control snap-control",
                    title: "拖到目标窗口并松开以对齐",
                    "aria-label": "对齐目标窗口",
                    onMousedown: Ee(co, ["prevent"])
                  },
                  [
                    T(c(Go), {
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
                  class: $(["audio-meter", { active: Ne.value && s.value > 0.03, metering: Ne.value && !l.value, muted: !Ne.value || l.value }]),
                  title: Zn.value,
                  "aria-label": "系统声音录制状态",
                  disabled: c(m) === "exporting" || c(x).format === "gif"
                }, [
                  u(
                    "span",
                    {
                      class: "audio-bars",
                      style: xe(Kn.value)
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
                ], 10, Ja)
              ]),
              u("label", Ya, [
                le(u("select", {
                  "onUpdate:modelValue": r[1] || (r[1] = (b) => c(x).fps = b),
                  disabled: Te.value
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
                ]), 8, Xa), [
                  [ct, c(x).fps]
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
                "onUpdate:modelValue": r[2] || (r[2] = (b) => c(x).format = b),
                class: "format-select optional-format",
                disabled: Te.value
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
              ]), 8, Qa), [
                [ct, c(x).format]
              ]),
              le(u("select", {
                "onUpdate:modelValue": r[3] || (r[3] = (b) => c(x).quality = b),
                class: "quality-select optional-quality",
                disabled: Te.value
              }, [
                u(
                  "option",
                  tr,
                  D(a.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                u(
                  "option",
                  nr,
                  D(a.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                u(
                  "option",
                  or,
                  D(a.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, er), [
                [ct, c(x).quality]
              ]),
              u("div", sr, [
                u("label", ir, [
                  u("input", {
                    value: o.value.width,
                    readonly: ""
                  }, null, 8, ar)
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
              c(m) === "recording" || c(m) === "paused" ? (k(), N(
                we,
                { key: 0 },
                [
                  u(
                    "span",
                    cr,
                    D(Yn.value),
                    1
                    /* TEXT */
                  ),
                  u("button", {
                    class: "control-button",
                    onClick: r[4] || (r[4] = (b) => c(m) === "paused" ? io() : so())
                  }, [
                    u(
                      "span",
                      dr,
                      D(c(m) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                      1
                      /* TEXT */
                    )
                  ]),
                  u("button", {
                    class: "control-button danger",
                    onClick: ao
                  }, [
                    u(
                      "span",
                      pr,
                      D(a.$t("screenRecorder.stop")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : c(m) === "exporting" ? (k(), N(
                we,
                { key: 1 },
                [
                  u("div", {
                    class: "export-progress",
                    title: Jn.value
                  }, [
                    u("div", fr, [
                      u(
                        "span",
                        null,
                        D(ut.value),
                        1
                        /* TEXT */
                      ),
                      u(
                        "strong",
                        null,
                        D(Et.value) + "%",
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
                    onClick: ro
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
                we,
                { key: 2 },
                [
                  u("span", {
                    class: "save-status optional-save-status",
                    title: c(h).path
                  }, D(c(h).hasAudio ? "已保存·有声" : "已保存·无声"), 9, vr),
                  u("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: ho
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
                    onClick: fo
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
                    onClick: lo
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
                disabled: c(z)?.available === !1 || o.value.width < Ue || o.value.height < Ue,
                onClick: oo
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
                  D(a.$t("screenRecorder.start")),
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
      c(z) && !c(z).available ? (k(), N(
        "p",
        wr,
        D(c(z).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : X("v-if", !0)
    ]));
  }
}), Sr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Or = /* @__PURE__ */ Sr(kr, [["__scopeId", "data-v-bdb9957c"]]), Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Or
}, Symbol.toStringTag, { value: "Module" }));
export {
  Tr as activate
};
