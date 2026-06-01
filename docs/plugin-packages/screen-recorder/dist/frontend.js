import { inject as ie, createVNode as E, getCurrentInstance as Ce, ref as x, computed as w, unref as d, readonly as Us, getCurrentScope as Vs, onScopeDispose as qs, onMounted as ct, nextTick as _e, watch as Se, isRef as Ks, warn as Ys, provide as Zs, defineComponent as A, createElementBlock as P, openBlock as O, mergeProps as Js, renderSlot as xe, createElementVNode as c, normalizeClass as L, Transition as Mt, withCtx as re, withDirectives as le, normalizeStyle as ke, createTextVNode as Xs, toDisplayString as W, vShow as tt, shallowReactive as Qs, createBlock as J, createCommentVNode as X, resolveDynamicComponent as In, Fragment as be, withModifiers as Ae, isVNode as Fe, render as nt, onUnmounted as Nn, renderList as eo, vModelSelect as vt } from "vue";
const ll = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => il)
  });
};
function to(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function no(e, t, n, s, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Xe;
const G = "__TAURI_TO_IPC_KEY__";
function so(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function u(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class oo {
  get rid() {
    return to(this, Xe, "f");
  }
  constructor(t) {
    Xe.set(this, void 0), no(this, Xe, t);
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
Xe = /* @__PURE__ */ new WeakMap();
class ae {
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
    return new ce(this.width * t, this.height * t);
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
class ce {
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
    return new ae(this.width / t, this.height / t);
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
    return this.size instanceof ae ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ce ? this.size : this.size.toPhysical(t);
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
class En {
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
    return new Y(this.x * t, this.y * t);
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
class Y {
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
    return new En(this.x / t, this.y / t);
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
class Ke {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof En ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Y ? this.position : this.position.toPhysical(t);
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
var $;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})($ || ($ = {}));
async function Pn(e, t) {
  await u("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function st(e, t, n) {
  var s;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return u("plugin:event|listen", {
    event: e,
    target: a,
    handler: so(t)
  }).then((r) => async () => Pn(e, r));
}
async function ao(e, t, n) {
  return st(e, (s) => {
    Pn(e, s.id), t(s);
  }, n);
}
async function io(e, t) {
  await u("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function ro(e, t, n) {
  await u("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class $e extends oo {
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
    return u("plugin:image|new", {
      rgba: ot(t),
      width: n,
      height: s
    }).then((a) => new $e(a));
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
      bytes: ot(t)
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
    return u("plugin:image|from_path", { path: t }).then((n) => new $e(n));
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
function ot(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof $e ? e.rid : e;
}
var St;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(St || (St = {}));
class lo {
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
var sn;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(sn || (sn = {}));
function zn() {
  return new Ln(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function yt() {
  return u("plugin:window|get_all_windows").then((e) => e.map((t) => new Ln(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const wt = ["tauri://created", "tauri://error"];
class Ln {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || u("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (s = n.parent) === null || s === void 0 ? void 0 : s.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (a) => this.emit("tauri://error", a));
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
    return (n = (await yt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return zn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return yt();
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
    for (const t of await yt())
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
    } : st(t, n, {
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
    } : ao(t, n, {
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
    if (wt.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return io(t, n);
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
    if (wt.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return ro(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return wt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new Y(t));
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
    }).then((t) => new Y(t));
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
    }).then((t) => new ce(t));
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
    }).then((t) => new ce(t));
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
    return t && (t === St.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), u("plugin:window|request_user_attention", {
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
    return u("plugin:window|set_min_size", {
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
    return u("plugin:window|set_max_size", {
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
    function n(s) {
      return s ? { Logical: s } : null;
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
      value: t instanceof Ke ? t : new Ke(t)
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
      value: ot(t)
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
      value: t instanceof Ke ? t : new Ke(t)
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
      value: t ? ot(t) : void 0
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
    return this.listen($.WINDOW_RESIZED, (n) => {
      n.payload = new ce(n.payload), t(n);
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
    return this.listen($.WINDOW_MOVED, (n) => {
      n.payload = new Y(n.payload), t(n);
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
    return this.listen($.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new lo(n);
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
    const n = await this.listen($.DRAG_ENTER, (l) => {
      t({
        ...l,
        payload: {
          type: "enter",
          paths: l.payload.paths,
          position: new Y(l.payload.position)
        }
      });
    }), s = await this.listen($.DRAG_OVER, (l) => {
      t({
        ...l,
        payload: {
          type: "over",
          position: new Y(l.payload.position)
        }
      });
    }), a = await this.listen($.DRAG_DROP, (l) => {
      t({
        ...l,
        payload: {
          type: "drop",
          paths: l.payload.paths,
          position: new Y(l.payload.position)
        }
      });
    }), r = await this.listen($.DRAG_LEAVE, (l) => {
      t({ ...l, payload: { type: "leave" } });
    });
    return () => {
      n(), a(), s(), r();
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
    const n = await this.listen($.WINDOW_FOCUS, (a) => {
      t({ ...a, payload: !0 });
    }), s = await this.listen($.WINDOW_BLUR, (a) => {
      t({ ...a, payload: !1 });
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
    return this.listen($.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen($.WINDOW_THEME_CHANGED, t);
  }
}
var on;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(on || (on = {}));
var an;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(an || (an = {}));
var rn;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(rn || (rn = {}));
function co(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Y(e.position),
    size: new ce(e.size)
  };
}
async function uo(e, t) {
  return u("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(co);
}
var ho = {
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
function po() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function fo(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], a = [], r = t.theme || n.theme;
  switch (r) {
    case "outline":
      a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push("none"), a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push("none");
      break;
    case "filled":
      a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push("#FFF"), a.push("#FFF");
      break;
    case "two-tone":
      a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone), a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      a.push(typeof s[0] == "string" ? s[0] : "currentColor"), a.push(typeof s[1] == "string" ? s[1] : n.colors.multiColor.outFillColor), a.push(typeof s[2] == "string" ? s[2] : n.colors.multiColor.innerStrokeColor), a.push(typeof s[3] == "string" ? s[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: a,
    id: e
  };
}
var go = Symbol("icon-context");
function Tt(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var l = po(), h = ie(go, ho);
      return function() {
        var p = r.size, g = r.strokeWidth, f = r.strokeLinecap, b = r.strokeLinejoin, I = r.theme, N = r.fill, B = r.spin, v = fo(l, {
          size: p,
          strokeWidth: g,
          strokeLinecap: f,
          strokeLinejoin: b,
          theme: I,
          fill: N
        }, h), _ = [h.prefix + "-icon"];
        return _.push(h.prefix + "-icon-" + e), B && _.push(h.prefix + "-icon-spin"), E("span", {
          class: _.join(" ")
        }, [n(v)]);
      };
    }
  };
  return s;
}
const vo = Tt("close-small", !1, function(e) {
  return E("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [E("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), E("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yo = Tt("minus", !1, function(e) {
  return E("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [E("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wo = Tt("radar", !1, function(e) {
  return E("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [E("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), E("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), E("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), E("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), E("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rn = Symbol(), Qe = "el", mo = "is-", oe = (e, t, n, s, a) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), s && (r += `__${s}`), a && (r += `--${a}`), r;
}, Dn = Symbol("namespaceContextKey"), _o = (e) => {
  const t = e || (Ce() ? ie(Dn, x(Qe)) : x(Qe));
  return w(() => d(t) || Qe);
}, It = (e, t) => {
  const n = _o(t);
  return {
    namespace: n,
    b: (v = "") => oe(n.value, e, v, "", ""),
    e: (v) => v ? oe(n.value, e, "", v, "") : "",
    m: (v) => v ? oe(n.value, e, "", "", v) : "",
    be: (v, _) => v && _ ? oe(n.value, e, v, _, "") : "",
    em: (v, _) => v && _ ? oe(n.value, e, "", v, _) : "",
    bm: (v, _) => v && _ ? oe(n.value, e, v, "", _) : "",
    bem: (v, _, M) => v && _ && M ? oe(n.value, e, v, _, M) : "",
    is: (v, ..._) => {
      const M = _.length >= 1 ? _[0] : !0;
      return v && M ? `${mo}${v}` : "";
    },
    cssVar: (v) => {
      const _ = {};
      for (const M in v)
        v[M] && (_[`--${n.value}-${M}`] = v[M]);
      return _;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const _ = {};
      for (const M in v)
        v[M] && (_[`--${n.value}-${e}-${M}`] = v[M]);
      return _;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const bo = Object.prototype.hasOwnProperty, ln = (e, t) => bo.call(e, t), je = (e) => typeof e == "function", ue = (e) => typeof e == "string", Wn = (e) => e !== null && typeof e == "object";
var Co = typeof global == "object" && global && global.Object === Object && global, So = typeof self == "object" && self && self.Object === Object && self, Nt = Co || So || Function("return this")(), Oe = Nt.Symbol, An = Object.prototype, xo = An.hasOwnProperty, ko = An.toString, Re = Oe ? Oe.toStringTag : void 0;
function Oo(e) {
  var t = xo.call(e, Re), n = e[Re];
  try {
    e[Re] = void 0;
    var s = !0;
  } catch {
  }
  var a = ko.call(e);
  return s && (t ? e[Re] = n : delete e[Re]), a;
}
var Mo = Object.prototype, To = Mo.toString;
function Io(e) {
  return To.call(e);
}
var No = "[object Null]", Eo = "[object Undefined]", cn = Oe ? Oe.toStringTag : void 0;
function $n(e) {
  return e == null ? e === void 0 ? Eo : No : cn && cn in Object(e) ? Oo(e) : Io(e);
}
function Po(e) {
  return e != null && typeof e == "object";
}
var zo = "[object Symbol]";
function Et(e) {
  return typeof e == "symbol" || Po(e) && $n(e) == zo;
}
function Lo(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, a = Array(s); ++n < s; )
    a[n] = t(e[n], n, e);
  return a;
}
var Pt = Array.isArray, un = Oe ? Oe.prototype : void 0, dn = un ? un.toString : void 0;
function Fn(e) {
  if (typeof e == "string")
    return e;
  if (Pt(e))
    return Lo(e, Fn) + "";
  if (Et(e))
    return dn ? dn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function jn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ro = "[object AsyncFunction]", Do = "[object Function]", Wo = "[object GeneratorFunction]", Ao = "[object Proxy]";
function $o(e) {
  if (!jn(e))
    return !1;
  var t = $n(e);
  return t == Do || t == Wo || t == Ro || t == Ao;
}
var mt = Nt["__core-js_shared__"], hn = function() {
  var e = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fo(e) {
  return !!hn && hn in e;
}
var jo = Function.prototype, Bo = jo.toString;
function Ho(e) {
  if (e != null) {
    try {
      return Bo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Go = /[\\^$.*+?()[\]{}|]/g, Uo = /^\[object .+?Constructor\]$/, Vo = Function.prototype, qo = Object.prototype, Ko = Vo.toString, Yo = qo.hasOwnProperty, Zo = RegExp(
  "^" + Ko.call(Yo).replace(Go, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jo(e) {
  if (!jn(e) || Fo(e))
    return !1;
  var t = $o(e) ? Zo : Uo;
  return t.test(Ho(e));
}
function Xo(e, t) {
  return e?.[t];
}
function Bn(e, t) {
  var n = Xo(e, t);
  return Jo(n) ? n : void 0;
}
function Qo(e, t) {
  return e === t || e !== e && t !== t;
}
var ea = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ta = /^\w*$/;
function na(e, t) {
  if (Pt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Et(e) ? !0 : ta.test(e) || !ea.test(e) || t != null && e in Object(t);
}
var Be = Bn(Object, "create");
function sa() {
  this.__data__ = Be ? Be(null) : {}, this.size = 0;
}
function oa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var aa = "__lodash_hash_undefined__", ia = Object.prototype, ra = ia.hasOwnProperty;
function la(e) {
  var t = this.__data__;
  if (Be) {
    var n = t[e];
    return n === aa ? void 0 : n;
  }
  return ra.call(t, e) ? t[e] : void 0;
}
var ca = Object.prototype, ua = ca.hasOwnProperty;
function da(e) {
  var t = this.__data__;
  return Be ? t[e] !== void 0 : ua.call(t, e);
}
var ha = "__lodash_hash_undefined__";
function pa(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Be && t === void 0 ? ha : t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
de.prototype.clear = sa;
de.prototype.delete = oa;
de.prototype.get = la;
de.prototype.has = da;
de.prototype.set = pa;
function fa() {
  this.__data__ = [], this.size = 0;
}
function ut(e, t) {
  for (var n = e.length; n--; )
    if (Qo(e[n][0], t))
      return n;
  return -1;
}
var ga = Array.prototype, va = ga.splice;
function ya(e) {
  var t = this.__data__, n = ut(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : va.call(t, n, 1), --this.size, !0;
}
function wa(e) {
  var t = this.__data__, n = ut(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ma(e) {
  return ut(this.__data__, e) > -1;
}
function _a(e, t) {
  var n = this.__data__, s = ut(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Ie.prototype.clear = fa;
Ie.prototype.delete = ya;
Ie.prototype.get = wa;
Ie.prototype.has = ma;
Ie.prototype.set = _a;
var ba = Bn(Nt, "Map");
function Ca() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (ba || Ie)(),
    string: new de()
  };
}
function Sa(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function dt(e, t) {
  var n = e.__data__;
  return Sa(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function xa(e) {
  var t = dt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ka(e) {
  return dt(this, e).get(e);
}
function Oa(e) {
  return dt(this, e).has(e);
}
function Ma(e, t) {
  var n = dt(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function pe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
pe.prototype.clear = Ca;
pe.prototype.delete = xa;
pe.prototype.get = ka;
pe.prototype.has = Oa;
pe.prototype.set = Ma;
var Ta = "Expected a function";
function zt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ta);
  var n = function() {
    var s = arguments, a = t ? t.apply(this, s) : s[0], r = n.cache;
    if (r.has(a))
      return r.get(a);
    var l = e.apply(this, s);
    return n.cache = r.set(a, l) || r, l;
  };
  return n.cache = new (zt.Cache || pe)(), n;
}
zt.Cache = pe;
var Ia = 500;
function Na(e) {
  var t = zt(e, function(s) {
    return n.size === Ia && n.clear(), s;
  }), n = t.cache;
  return t;
}
var Ea = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pa = /\\(\\)?/g, za = Na(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ea, function(n, s, a, r) {
    t.push(a ? r.replace(Pa, "$1") : s || n);
  }), t;
});
function La(e) {
  return e == null ? "" : Fn(e);
}
function Ra(e, t) {
  return Pt(e) ? e : na(e, t) ? [e] : za(La(e));
}
function Da(e) {
  if (typeof e == "string" || Et(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Wa(e, t) {
  t = Ra(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[Da(t[n++])];
  return n && n == s ? e : void 0;
}
function Aa(e, t, n) {
  var s = e == null ? void 0 : Wa(e, t);
  return s === void 0 ? n : s;
}
function $a(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var a = e[t];
    s[a[0]] = a[1];
  }
  return s;
}
const Hn = (e) => e === void 0, pn = (e) => typeof e == "boolean", he = (e) => typeof e == "number", xt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Fa = (e) => ue(e) ? !Number.isNaN(Number(e)) : !1;
var fn;
const fe = typeof window < "u", ja = (e) => typeof e == "string", Ba = () => {
};
fe && ((fn = window?.navigator) != null && fn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Lt(e) {
  return typeof e == "function" ? e() : d(e);
}
function Ha(e) {
  return e;
}
function Rt(e) {
  return Vs() ? (qs(e), !0) : !1;
}
function Ga(e, t = !0) {
  Ce() ? ct(e) : t ? e() : _e(e);
}
function Gn(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, a = x(!1);
  let r = null;
  function l() {
    r && (clearTimeout(r), r = null);
  }
  function h() {
    a.value = !1, l();
  }
  function p(...g) {
    l(), a.value = !0, r = setTimeout(() => {
      a.value = !1, r = null, e(...g);
    }, Lt(t));
  }
  return s && (a.value = !0, fe && p()), Rt(h), {
    isPending: Us(a),
    start: p,
    stop: h
  };
}
function Un(e) {
  var t;
  const n = Lt(e);
  return (t = n?.$el) != null ? t : n;
}
const Vn = fe ? window : void 0;
function qn(...e) {
  let t, n, s, a;
  if (ja(e[0]) || Array.isArray(e[0]) ? ([n, s, a] = e, t = Vn) : [t, n, s, a] = e, !t)
    return Ba;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], l = () => {
    r.forEach((f) => f()), r.length = 0;
  }, h = (f, b, I, N) => (f.addEventListener(b, I, N), () => f.removeEventListener(b, I, N)), p = Se(() => [Un(t), Lt(a)], ([f, b]) => {
    l(), f && r.push(...n.flatMap((I) => s.map((N) => h(f, I, N, b))));
  }, { immediate: !0, flush: "post" }), g = () => {
    p(), l();
  };
  return Rt(g), g;
}
function Ua(e, t = !1) {
  const n = x(), s = () => n.value = !!e();
  return s(), Ga(s, t), n;
}
const gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vn = "__vueuse_ssr_handlers__";
gn[vn] = gn[vn] || {};
var yn = Object.getOwnPropertySymbols, Va = Object.prototype.hasOwnProperty, qa = Object.prototype.propertyIsEnumerable, Ka = (e, t) => {
  var n = {};
  for (var s in e)
    Va.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && yn)
    for (var s of yn(e))
      t.indexOf(s) < 0 && qa.call(e, s) && (n[s] = e[s]);
  return n;
};
function Ya(e, t, n = {}) {
  const s = n, { window: a = Vn } = s, r = Ka(s, ["window"]);
  let l;
  const h = Ua(() => a && "ResizeObserver" in a), p = () => {
    l && (l.disconnect(), l = void 0);
  }, g = Se(() => Un(e), (b) => {
    p(), h.value && a && b && (l = new ResizeObserver(t), l.observe(b, r));
  }, { immediate: !0, flush: "post" }), f = () => {
    p(), g();
  };
  return Rt(f), {
    isSupported: h,
    stop: f
  };
}
var wn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(wn || (wn = {}));
var Za = Object.defineProperty, mn = Object.getOwnPropertySymbols, Ja = Object.prototype.hasOwnProperty, Xa = Object.prototype.propertyIsEnumerable, _n = (e, t, n) => t in e ? Za(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qa = (e, t) => {
  for (var n in t || (t = {}))
    Ja.call(t, n) && _n(e, n, t[n]);
  if (mn)
    for (var n of mn(t))
      Xa.call(t, n) && _n(e, n, t[n]);
  return e;
};
const ei = {
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
Qa({
  linear: Ha
}, ei);
const bn = {
  current: 0
}, Cn = x(0), Kn = 2e3, Sn = Symbol("elZIndexContextKey"), Yn = Symbol("zIndexContextKey"), ti = (e) => {
  const t = Ce() ? ie(Sn, bn) : bn, n = e || (Ce() ? ie(Yn, void 0) : void 0), s = w(() => {
    const l = d(n);
    return he(l) ? l : Kn;
  }), a = w(() => s.value + Cn.value), r = () => (t.current++, Cn.value = t.current, a.value);
  return !fe && ie(Sn), {
    initialZIndex: s,
    currentZIndex: a,
    nextZIndex: r
  };
};
var ni = {
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
const si = (e) => (t, n) => oi(t, n, d(e)), oi = (e, t, n) => Aa(n, e, e).replace(/\{(\w+)\}/g, (s, a) => {
  var r;
  return `${(r = t?.[a]) != null ? r : `{${a}}`}`;
}), ai = (e) => {
  const t = w(() => d(e).name), n = Ks(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: si(e)
  };
}, Zn = Symbol("localeContextKey"), ii = (e) => {
  const t = e || ie(Zn, x());
  return ai(w(() => t.value || ni));
}, Jn = "__epPropKey", F = (e) => e, ri = (e) => Wn(e) && !!e[Jn], Xn = (e, t) => {
  if (!Wn(e) || ri(e))
    return e;
  const { values: n, required: s, default: a, type: r, validator: l } = e, p = {
    type: r,
    required: !!s,
    validator: n || l ? (g) => {
      let f = !1, b = [];
      if (n && (b = Array.from(n), ln(e, "default") && b.push(a), f || (f = b.includes(g))), l && (f || (f = l(g))), !f && b.length > 0) {
        const I = [...new Set(b)].map((N) => JSON.stringify(N)).join(", ");
        Ys(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(g)}.`);
      }
      return f;
    } : void 0,
    [Jn]: !0
  };
  return ln(e, "default") && (p.default = a), p;
}, Ne = (e) => $a(Object.entries(e).map(([t, n]) => [
  t,
  Xn(n, t)
])), li = ["", "default", "small", "large"], ci = Xn({
  type: String,
  values: li,
  required: !1
}), ui = Symbol("size"), di = Symbol("emptyValuesContextKey"), hi = Ne({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => je(e) ? !e() : !e
  }
}), xn = (e) => Object.keys(e), at = x();
function Qn(e, t = void 0) {
  return Ce() ? ie(Rn, at) : at;
}
function es(e, t) {
  const n = Qn(), s = It(e, w(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || Qe;
  })), a = ii(w(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), r = ti(w(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || Kn;
  })), l = w(() => {
    var h;
    return d(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return ts(w(() => d(n) || {})), {
    ns: s,
    locale: a,
    zIndex: r,
    size: l
  };
}
const ts = (e, t, n = !1) => {
  var s;
  const a = !!Ce(), r = a ? Qn() : void 0, l = (s = void 0) != null ? s : a ? Zs : void 0;
  if (!l)
    return;
  const h = w(() => {
    const p = d(e);
    return r?.value ? pi(r.value, p) : p;
  });
  return l(Rn, h), l(Zn, w(() => h.value.locale)), l(Dn, w(() => h.value.namespace)), l(Yn, w(() => h.value.zIndex)), l(ui, {
    size: w(() => h.value.size || "")
  }), l(di, w(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !at.value) && (at.value = h.value), h;
}, pi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...xn(e), ...xn(t)])], s = {};
  for (const a of n)
    s[a] = t[a] !== void 0 ? t[a] : e[a];
  return s;
};
var ht = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
};
function kt(e, t = "px") {
  if (!e)
    return "";
  if (he(e) || Fa(e))
    return `${e}${t}`;
  if (ue(e))
    return e;
}
const ns = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), ss = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), fi = Ne({
  size: {
    type: F([Number, String])
  },
  color: {
    type: String
  }
}), gi = A({
  name: "ElIcon",
  inheritAttrs: !1
}), vi = /* @__PURE__ */ A({
  ...gi,
  props: fi,
  setup(e) {
    const t = e, n = It("icon"), s = w(() => {
      const { size: a, color: r } = t;
      return !a && !r ? {} : {
        fontSize: Hn(a) ? void 0 : kt(a),
        "--color": r
      };
    });
    return (a, r) => (O(), P("i", Js({
      class: d(n).b(),
      style: d(s)
    }, a.$attrs), [
      xe(a.$slots, "default")
    ], 16));
  }
});
var yi = /* @__PURE__ */ ht(vi, [["__file", "icon.vue"]]);
const it = ns(yi);
/*! Element Plus Icons Vue v2.3.1 */
var wi = /* @__PURE__ */ A({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), mi = wi, _i = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), os = _i, bi = /* @__PURE__ */ A({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ci = bi, Si = /* @__PURE__ */ A({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), xi = Si, ki = /* @__PURE__ */ A({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (O(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Oi = ki;
const as = F([
  String,
  Object,
  Function
]), Mi = {
  Close: os
}, Ti = {
  Close: os
}, rt = {
  success: xi,
  warning: Oi,
  error: mi,
  info: Ci
}, Ii = (e) => e, et = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ni = Ne({
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
    type: F([String, Object, Array])
  },
  offset: {
    type: F(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ei = A({
  name: "ElBadge"
}), Pi = /* @__PURE__ */ A({
  ...Ei,
  props: Ni,
  setup(e, { expose: t }) {
    const n = e, s = It("badge"), a = w(() => n.isDot ? "" : he(n.value) && he(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = w(() => {
      var l, h, p, g, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: kt(-((h = (l = n.offset) == null ? void 0 : l[0]) != null ? h : 0)),
          marginTop: kt((g = (p = n.offset) == null ? void 0 : p[1]) != null ? g : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: a
    }), (l, h) => (O(), P("div", {
      class: L(d(s).b())
    }, [
      xe(l.$slots, "default"),
      E(Mt, {
        name: `${d(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          le(c("sup", {
            class: L([
              d(s).e("content"),
              d(s).em("content", l.type),
              d(s).is("fixed", !!l.$slots.default),
              d(s).is("dot", l.isDot),
              d(s).is("hide-zero", !l.showZero && n.value === 0),
              l.badgeClass
            ]),
            style: ke(d(r))
          }, [
            xe(l.$slots, "content", { value: d(a) }, () => [
              Xs(W(d(a)), 1)
            ])
          ], 6), [
            [tt, !l.hidden && (d(a) || l.isDot || l.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var zi = /* @__PURE__ */ ht(Pi, [["__file", "badge.vue"]]);
const Li = ns(zi), Ri = Ne({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: F(Object)
  },
  size: ci,
  button: {
    type: F(Object)
  },
  experimentalFeatures: {
    type: F(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: F(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...hi
}), q = {};
A({
  name: "ElConfigProvider",
  props: Ri,
  setup(e, { slots: t }) {
    Se(() => e.message, (s) => {
      Object.assign(q, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ts(e);
    return () => xe(t, "default", { config: n?.value });
  }
});
const is = ["success", "info", "warning", "error"], D = Ii({
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
}), Di = Ne({
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
    type: as,
    default: D.icon
  },
  id: {
    type: String,
    default: D.id
  },
  message: {
    type: F([
      String,
      Object,
      Function
    ]),
    default: D.message
  },
  onClose: {
    type: F(Function),
    default: D.onClose
  },
  showClose: {
    type: Boolean,
    default: D.showClose
  },
  type: {
    type: String,
    values: is,
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
}), Wi = {
  destroy: () => !0
}, K = Qs([]), Ai = (e) => {
  const t = K.findIndex((a) => a.id === e), n = K[t];
  let s;
  return t > 0 && (s = K[t - 1]), { current: n, prev: s };
}, $i = (e) => {
  const { prev: t } = Ai(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Fi = (e, t) => K.findIndex((s) => s.id === e) > 0 ? 16 : t, ji = A({
  name: "ElMessage"
}), Bi = /* @__PURE__ */ A({
  ...ji,
  props: Di,
  emits: Wi,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = Ti, { ns: a, zIndex: r } = es("message"), { currentZIndex: l, nextZIndex: h } = r, p = x(), g = x(!1), f = x(0);
    let b;
    const I = w(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), N = w(() => {
      const C = n.type;
      return { [a.bm("icon", C)]: C && rt[C] };
    }), B = w(() => n.icon || rt[n.type] || ""), v = w(() => $i(n.id)), _ = w(() => Fi(n.id, n.offset) + v.value), M = w(() => f.value + _.value), Z = w(() => ({
      top: `${_.value}px`,
      zIndex: l.value
    }));
    function S() {
      n.duration !== 0 && ({ stop: b } = Gn(() => {
        k();
      }, n.duration));
    }
    function T() {
      b?.();
    }
    function k() {
      g.value = !1;
    }
    function H({ code: C }) {
      C === et.esc && k();
    }
    return ct(() => {
      S(), h(), g.value = !0;
    }), Se(() => n.repeatNum, () => {
      T(), S();
    }), qn(document, "keydown", H), Ya(p, () => {
      f.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: M,
      close: k
    }), (C, Dt) => (O(), J(Mt, {
      name: d(a).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (Wt) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(c("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: p,
          class: L([
            d(a).b(),
            { [d(a).m(C.type)]: C.type },
            d(a).is("center", C.center),
            d(a).is("closable", C.showClose),
            d(a).is("plain", C.plain),
            C.customClass
          ]),
          style: ke(d(Z)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: S
        }, [
          C.repeatNum > 1 ? (O(), J(d(Li), {
            key: 0,
            value: C.repeatNum,
            type: d(I),
            class: L(d(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : X("v-if", !0),
          d(B) ? (O(), J(d(it), {
            key: 1,
            class: L([d(a).e("icon"), d(N)])
          }, {
            default: re(() => [
              (O(), J(In(d(B))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          xe(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (O(), P(be, { key: 1 }, [
              X(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: L(d(a).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (O(), P("p", {
              key: 0,
              class: L(d(a).e("content"))
            }, W(C.message), 3))
          ]),
          C.showClose ? (O(), J(d(it), {
            key: 2,
            class: L(d(a).e("closeBtn")),
            onClick: Ae(k, ["stop"])
          }, {
            default: re(() => [
              E(d(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 46, ["id"]), [
          [tt, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Hi = /* @__PURE__ */ ht(Bi, [["__file", "message.vue"]]);
let Gi = 1;
const rs = (e) => {
  const t = !e || ue(e) || Fe(e) || je(e) ? { message: e } : e, n = {
    ...D,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ue(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    xt(s) || (s = document.body), n.appendTo = s;
  }
  return pn(q.grouping) && !n.grouping && (n.grouping = q.grouping), he(q.duration) && n.duration === 3e3 && (n.duration = q.duration), he(q.offset) && n.offset === 16 && (n.offset = q.offset), pn(q.showClose) && !n.showClose && (n.showClose = q.showClose), n;
}, Ui = (e) => {
  const t = K.indexOf(e);
  if (t === -1)
    return;
  K.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Vi = ({ appendTo: e, ...t }, n) => {
  const s = `message_${Gi++}`, a = t.onClose, r = document.createElement("div"), l = {
    ...t,
    id: s,
    onClose: () => {
      a?.(), Ui(f);
    },
    onDestroy: () => {
      nt(null, r);
    }
  }, h = E(Hi, l, je(l.message) || Fe(l.message) ? {
    default: je(l.message) ? l.message : () => l.message
  } : null);
  h.appContext = n || Me._context, nt(h, r), e.appendChild(r.firstElementChild);
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
}, Me = (e = {}, t) => {
  if (!fe)
    return { close: () => {
    } };
  const n = rs(e);
  if (n.grouping && K.length) {
    const a = K.find(({ vnode: r }) => {
      var l;
      return ((l = r.props) == null ? void 0 : l.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (he(q.max) && K.length >= q.max)
    return { close: () => {
    } };
  const s = Vi(n, t);
  return K.push(s), s.handler;
};
is.forEach((e) => {
  Me[e] = (t = {}, n) => {
    const s = rs(t);
    return Me({ ...s, type: e }, n);
  };
});
function qi(e) {
  for (const t of K)
    (!e || e === t.props.type) && t.handler.close();
}
Me.closeAll = qi;
Me._context = null;
const Ki = ss(Me, "$message"), ls = [
  "success",
  "info",
  "warning",
  "error"
], Yi = Ne({
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
    type: as
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: F([
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
    type: F(Function),
    default: () => {
    }
  },
  onClose: {
    type: F(Function),
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
    values: [...ls, ""],
    default: ""
  },
  zIndex: Number
}), Zi = {
  destroy: () => !0
}, Ji = A({
  name: "ElNotification"
}), Xi = /* @__PURE__ */ A({
  ...Ji,
  props: Yi,
  emits: Zi,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: a } = es("notification"), { nextZIndex: r, currentZIndex: l } = a, { Close: h } = Mi, p = x(!1);
    let g;
    const f = w(() => {
      const S = n.type;
      return S && rt[n.type] ? s.m(S) : "";
    }), b = w(() => n.type && rt[n.type] || n.icon), I = w(() => n.position.endsWith("right") ? "right" : "left"), N = w(() => n.position.startsWith("top") ? "top" : "bottom"), B = w(() => {
      var S;
      return {
        [N.value]: `${n.offset}px`,
        zIndex: (S = n.zIndex) != null ? S : l.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: g } = Gn(() => {
        p.value && M();
      }, n.duration));
    }
    function _() {
      g?.();
    }
    function M() {
      p.value = !1;
    }
    function Z({ code: S }) {
      S === et.delete || S === et.backspace ? _() : S === et.esc ? p.value && M() : v();
    }
    return ct(() => {
      v(), r(), p.value = !0;
    }), qn(document, "keydown", Z), t({
      visible: p,
      close: M
    }), (S, T) => (O(), J(Mt, {
      name: d(s).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (k) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(c("div", {
          id: S.id,
          class: L([d(s).b(), S.customClass, d(I)]),
          style: ke(d(B)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: v,
          onClick: S.onClick
        }, [
          d(b) ? (O(), J(d(it), {
            key: 0,
            class: L([d(s).e("icon"), d(f)])
          }, {
            default: re(() => [
              (O(), J(In(d(b))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          c("div", {
            class: L(d(s).e("group"))
          }, [
            c("h2", {
              class: L(d(s).e("title")),
              textContent: W(S.title)
            }, null, 10, ["textContent"]),
            le(c("div", {
              class: L(d(s).e("content")),
              style: ke(S.title ? void 0 : { margin: 0 })
            }, [
              xe(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (O(), P(be, { key: 1 }, [
                  X(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: S.message }, null, 8, ["innerHTML"])
                ], 2112)) : (O(), P("p", { key: 0 }, W(S.message), 1))
              ])
            ], 6), [
              [tt, S.message]
            ]),
            S.showClose ? (O(), J(d(it), {
              key: 0,
              class: L(d(s).e("closeBtn")),
              onClick: Ae(M, ["stop"])
            }, {
              default: re(() => [
                E(d(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : X("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tt, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Qi = /* @__PURE__ */ ht(Xi, [["__file", "notification.vue"]]);
const lt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ot = 16;
let er = 1;
const Te = function(e = {}, t) {
  if (!fe)
    return { close: () => {
    } };
  (ue(e) || Fe(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  lt[n].forEach(({ vm: f }) => {
    var b;
    s += (((b = f.el) == null ? void 0 : b.offsetHeight) || 0) + Ot;
  }), s += Ot;
  const a = `notification_${er++}`, r = e.onClose, l = {
    ...e,
    offset: s,
    id: a,
    onClose: () => {
      tr(a, n, r);
    }
  };
  let h = document.body;
  xt(e.appendTo) ? h = e.appendTo : ue(e.appendTo) && (h = document.querySelector(e.appendTo)), xt(h) || (h = document.body);
  const p = document.createElement("div"), g = E(Qi, l, je(l.message) ? l.message : Fe(l.message) ? () => l.message : null);
  return g.appContext = Hn(t) ? Te._context : t, g.props.onDestroy = () => {
    nt(null, p);
  }, nt(g, p), lt[n].push({ vm: g }), h.appendChild(p.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
ls.forEach((e) => {
  Te[e] = (t = {}, n) => ((ue(t) || Fe(t)) && (t = {
    message: t
  }), Te({ ...t, type: e }, n));
});
function tr(e, t, n) {
  const s = lt[t], a = s.findIndex(({ vm: g }) => {
    var f;
    return ((f = g.component) == null ? void 0 : f.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: r } = s[a];
  if (!r)
    return;
  n?.(r);
  const l = r.el.offsetHeight, h = t.split("-")[0];
  s.splice(a, 1);
  const p = s.length;
  if (!(p < 1))
    for (let g = a; g < p; g++) {
      const { el: f, component: b } = s[g].vm, I = Number.parseInt(f.style[h], 10) - l - Ot;
      b.props.offset = I;
    }
}
function nr() {
  for (const e of Object.values(lt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Te.closeAll = nr;
Te._context = null;
const sr = ss(Te, "$notify"), _t = {
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
      duration: a = 3e3,
      showClose: r = !1
    } = e;
    s === "center" ? Ki({
      message: t,
      type: n,
      duration: a,
      showClose: r,
      grouping: !0
    }) : sr({
      message: t,
      type: n,
      position: s,
      duration: a,
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
}, or = "snippets-code:developer-mode", cs = "snippets-code:frontend-diagnostics", ar = 240, us = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return e;
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return JSON.stringify(
      e,
      (n, s) => {
        if (s instanceof Error)
          return {
            name: s.name,
            message: s.message,
            stack: s.stack,
            cause: s.cause
          };
        if (typeof s == "bigint") return s.toString();
        if (typeof s == "object" && s !== null) {
          if (t.has(s)) return "[Circular]";
          t.add(s);
        }
        return s;
      },
      2
    );
  } catch {
    return String(e);
  }
}, ir = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, rr = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(cs) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, ds = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(or) === "true";
  } catch {
    return !1;
  }
}, lr = (e, t, n) => {
  if (!ds() && e !== "warn" && e !== "error" || typeof localStorage > "u") return;
  const s = rr();
  s.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: ir(),
    message: t,
    data: us(n)
  });
  try {
    localStorage.setItem(
      cs,
      JSON.stringify(s.slice(-ar))
    );
  } catch {
  }
}, cr = () => ds(), Ye = (e, t, n) => {
  lr(e, t, n), u("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : us(n)
  }).catch(() => {
  });
}, De = {
  info: (e, t, ...n) => {
    Ye("info", e, t);
  },
  error: (e, t) => {
    Ye("error", e, t);
  },
  warn: (e, t) => {
    Ye("warn", e, t);
  },
  debug: (e, t) => {
    cr() && Ye("debug", e, t);
  }
}, ur = "[screen-recorder]", j = async (e, t) => {
  const n = performance.now();
  try {
    return await u(e, t);
  } catch (s) {
    throw console.error(`${ur} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, dr = () => j("screen_recorder_get_ffmpeg_status"), we = (e) => j("screen_recorder_set_capture_excluded", { excluded: e }), Ze = (e) => j("screen_recorder_set_passthrough_region", { region: e }), Je = (e) => j("screen_recorder_set_overlay_window_region", { region: e }), hr = () => j("screen_recorder_pick_target_window"), pr = () => j("screen_recorder_close_window"), fr = (e, t) => j("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), gr = () => j("screen_recorder_pause_recording"), vr = (e, t) => j("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), yr = () => j("screen_recorder_stop_recording"), wr = () => j("screen_recorder_cancel_recording"), mr = () => j("screen_recorder_cancel_export"), _r = (e, t) => j("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), kn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
});
function br() {
  const e = x("selecting"), t = x(kn()), n = x(null), s = x(null), a = x(""), r = x(null), l = x(0), h = x(0), p = x(null), g = () => {
    h.value = e.value === "recording" && r.value !== null ? l.value + Date.now() - r.value : l.value;
  }, f = () => {
    p.value !== null && (window.clearInterval(p.value), p.value = null);
  }, b = () => {
    f(), g(), p.value = window.setInterval(() => {
      g();
    }, 250);
  }, I = async () => (n.value = await dr(), n.value), N = async (k) => {
    a.value = "", s.value = null;
    const H = n.value ?? await I();
    if (!H.available)
      throw new Error(H.message || "FFmpeg unavailable");
    await fr(k, t.value), e.value = "recording", l.value = 0, h.value = 0, r.value = Date.now(), b();
  }, B = async () => {
    e.value === "recording" && (g(), l.value = h.value, r.value = null, f(), await gr(), e.value = "paused");
  }, v = async (k) => {
    e.value === "paused" && (await vr(k, t.value), e.value = "recording", r.value = Date.now(), b());
  }, _ = async () => {
    e.value !== "recording" && e.value !== "paused" || (g(), l.value = h.value, r.value = null, f(), await yr(), e.value = "exporting");
  }, M = async () => {
    e.value = "exporting";
    try {
      return s.value = await _r(t.value, Math.round(h.value)), e.value = "completed", s.value;
    } catch (k) {
      throw e.value = "ready", s.value = null, k;
    }
  }, Z = async () => {
    await mr(), e.value = "ready", s.value = null;
  }, S = async () => {
    f(), await wr(), e.value = "selecting", r.value = null, l.value = 0, h.value = 0, s.value = null;
  }, T = () => {
    e.value = "selecting", r.value = null, l.value = 0, h.value = 0, s.value = null, a.value = "", t.value = kn();
  };
  return Nn(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: a,
    elapsedMs: h,
    refreshFfmpegStatus: I,
    begin: N,
    pause: B,
    resume: v,
    stop: _,
    exportFile: M,
    cancelExport: Z,
    cancel: S,
    reset: T
  };
}
const Cr = { class: "screen-recorder" }, Sr = ["onMousedown"], xr = { class: "window-title" }, kr = { class: "capture-viewport" }, Or = { class: "capture-frame" }, Mr = { class: "control-group control-group--tools" }, Tr = { class: "tool-pill" }, Ir = ["title", "disabled"], Nr = { class: "select-field" }, Er = ["disabled"], Pr = ["disabled"], zr = ["disabled"], Lr = { value: "high" }, Rr = { value: "standard" }, Dr = { value: "small" }, Wr = { class: "dimension-group optional-size" }, Ar = { class: "dimension" }, $r = ["value"], Fr = { class: "dimension" }, jr = ["value"], Br = { class: "control-group control-group--actions" }, Hr = { class: "time" }, Gr = { class: "button-label" }, Ur = { class: "button-label" }, Vr = ["title"], qr = { class: "export-progress__meta" }, Kr = { class: "export-progress__track" }, Yr = ["title"], Zr = ["disabled"], Jr = { class: "record-label" }, Xr = {
  key: 0,
  class: "warning"
}, te = "[screen-recorder]", me = 80, bt = 420, We = 260, Ct = 260, On = 140, Qr = 3, Mn = 2, Tn = 0, el = 15, tl = 10, nl = 2, sl = /* @__PURE__ */ A({
  __name: "index",
  setup(e) {
    const t = zn(), n = x(null), s = x(null), a = x(null), r = x({ width: 0, height: 0 }), l = x(!1), h = x(!1), p = x(0), g = x(!1), f = x(null);
    let b = null, I = null, N = null, B = null, v = null, _ = null, M = null, Z = null;
    const S = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: T,
      settings: k,
      ffmpegStatus: H,
      result: C,
      elapsedMs: Dt,
      refreshFfmpegStatus: Wt,
      begin: hs,
      pause: ps,
      resume: fs,
      stop: gs,
      exportFile: vs,
      cancelExport: At,
      cancel: ys,
      reset: ws
    } = br(), $t = x(!1), Ee = w(() => T.value === "recording" || T.value === "paused" || T.value === "exporting"), pt = w(() => k.value.audio && k.value.format === "mp4"), Pe = w(() => pt.value && T.value === "recording"), ms = w(() => {
      const o = Pe.value && !g.value ? p.value : 0, i = (y, m) => Math.max(0.18, Math.min(1, y + o * m)).toFixed(3);
      return {
        "--bar-1": i(0.28, 0.64),
        "--bar-2": i(0.42, 0.78),
        "--bar-3": i(0.34, 0.94),
        "--bar-4": i(0.22, 0.72)
      };
    }), _s = w(() => {
      if (k.value.format === "gif")
        return "GIF 不支持音频";
      if (g.value && k.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (C.value?.audioDevice)
        return `已录制音频：${C.value.audioDevice}`;
      if (C.value && !C.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (H.value?.available && !H.value.systemAudioAvailable) {
        const o = H.value.audioDevices?.join("、") || "无";
        return k.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${o}` : "录制音频已关闭";
      }
      return k.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Ft = w(() => {
      const o = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(o * 100)));
    }), ft = w(() => {
      const o = f.value;
      return o ? o.totalFrames && o.stage === "frames" ? `${o.message}` : o.message || "正在导出..." : "正在导出...";
    }), bs = w(() => {
      const o = f.value;
      return o?.totalFrames ? `${ft.value} (${o.currentFrame}/${o.totalFrames})` : ft.value;
    }), Cs = w(() => {
      const o = Math.floor(Dt.value / 1e3), i = Math.floor(o / 60).toString().padStart(2, "0"), y = (o % 60).toString().padStart(2, "0");
      return `${i}:${y}`;
    }), ge = async (o) => {
      try {
        await o();
      } catch (i) {
        console.error(`${te} action failed`, i), De.error(`${te} action failed`, i), $t.value || _t.msg(i?.message || String(i), "error");
      }
    }, jt = (o) => Math.max(2, Math.floor(Math.round(o) / 2) * 2), Bt = (o) => Math.max(1, Math.round(o)), ve = (o, i) => Math.abs(o - i) <= nl, Ss = (o, i) => o === i ? !0 : !o || !i ? !1 : ve(o.x, i.x) && ve(o.y, i.y) && ve(o.width, i.width) && ve(o.height, i.height), He = async (o) => {
      Ss(Z, o) || (Z = o ? { ...o } : null, await Ze(o).catch(() => {
      }));
    }, gt = async () => {
      const o = n.value;
      if (!o)
        throw new Error("录制视口尚未准备好");
      const i = o.getBoundingClientRect(), y = await t.scaleFactor(), m = await t.innerPosition(), R = Bt(i.width * y), z = Bt(i.height * y);
      if (R < me || z < me)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: i.left,
        y: i.top,
        width: R / y,
        height: z / y,
        screenX: Math.round(m.x + i.left * y),
        screenY: Math.round(m.y + i.top * y),
        physicalWidth: R,
        physicalHeight: z,
        scale: y
      };
    }, Ht = async () => {
      const o = await gt(), i = jt(o.physicalWidth), y = jt(o.physicalHeight);
      return {
        ...o,
        width: i / o.scale,
        height: y / o.scale,
        physicalWidth: i,
        physicalHeight: y
      };
    }, xs = async () => {
      try {
        const o = await gt();
        if ((!ve(r.value.width, o.physicalWidth) || !ve(r.value.height, o.physicalHeight)) && (r.value = {
          width: o.physicalWidth,
          height: o.physicalHeight
        }), h.value) {
          const i = s.value?.getBoundingClientRect().height ?? 0, y = a.value?.getBoundingClientRect().height ?? 0;
          await He({
            x: Math.round(o.x * o.scale),
            y: Math.round((o.y + i) * o.scale),
            width: o.physicalWidth,
            height: Math.max(
              1,
              o.physicalHeight - Math.round((i + y) * o.scale)
            )
          });
          return;
        }
        await He({
          x: Math.round(o.x * o.scale),
          y: Math.round(o.y * o.scale),
          width: o.physicalWidth,
          height: o.physicalHeight
        });
      } catch {
        (r.value.width !== 0 || r.value.height !== 0) && (r.value = { width: 0, height: 0 }), await He(null);
      }
    }, U = async () => _ || (_ = xs().finally(() => {
      if (_ = null, M) {
        const o = M;
        M = null, He(o);
      }
    }), _), ks = () => {
      v === null && (v = requestAnimationFrame(() => {
        v = null, U();
      }));
    }, Ge = () => {
      l.value || ks();
    }, Gt = () => {
      M = null, Z = null;
    }, Ue = async () => {
      Gt(), await Ze(null).catch(() => {
      }), await Je(null).catch(() => {
      });
    }, Ut = () => {
      l.value = !1, h.value = !1;
    }, Vt = () => {
      window.setTimeout(() => {
        U();
      }, 120);
    }, ze = () => new Promise((o) => {
      requestAnimationFrame(() => requestAnimationFrame(() => o()));
    }), Os = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await ze(), document.documentElement.classList.remove("screen-recorder-repaint"), await ze();
    }, Ms = async () => {
      await t.setIgnoreCursorEvents(!0).catch(() => {
      }), await ze(), await t.setIgnoreCursorEvents(!1).catch(() => {
      }), await U();
    }, qt = async () => {
      const [o, i] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: o.x,
        y: o.y,
        width: i.width,
        height: i.height
      };
    }, Kt = async () => {
      if (!h.value) {
        await Je(null).catch(() => {
        });
        return;
      }
      const o = await qt(), i = await t.scaleFactor(), y = s.value?.getBoundingClientRect().height ?? 0, m = a.value?.getBoundingClientRect().height ?? 0;
      await Je({
        width: o.width,
        height: o.height,
        topHeight: Math.round(y * i),
        bottomHeight: Math.round(m * i)
      }).catch(() => {
      });
    }, Yt = (o, i) => {
      const y = Math.min(o.width, i.width), m = Math.min(o.height, i.height), R = i.x + i.width - y, z = i.y + i.height - m;
      return {
        x: Math.min(Math.max(o.x, i.x), R),
        y: Math.min(Math.max(o.y, i.y), z),
        width: y,
        height: m
      };
    }, Ts = (o, i, y) => {
      if (!i) return !1;
      const m = Math.max(8, Math.round(8 * y)), R = i.x + i.width, z = i.y + i.height, Q = o.screenX + o.physicalWidth, ne = o.screenY + o.physicalHeight;
      return o.screenX <= i.x + m && o.screenY <= i.y + m && Q >= R - m && ne >= z - m;
    }, Is = (o, i, y) => {
      if (!i) return !1;
      const m = Math.max(8, Math.round(8 * y));
      return o.screenX <= i.x + m || o.screenY <= i.y + m || o.screenX + o.physicalWidth >= i.x + i.width - m || o.screenY + o.physicalHeight >= i.y + i.height - m;
    }, Ns = (o, i, y) => {
      if (!y) return o;
      const m = Math.round(el * i), R = Math.round(tl * i);
      return {
        ...o,
        physicalWidth: Math.max(me, o.physicalWidth - m),
        physicalHeight: Math.max(me, o.physicalHeight - R)
      };
    }, Zt = async (o) => {
      await t.setSize(new ce(Math.round(o.width), Math.round(o.height))), await t.setPosition(new Y(Math.round(o.x), Math.round(o.y))), await ze();
    }, Jt = async () => {
      const [o, i] = await Promise.all([
        gt(),
        qt()
      ]);
      return { actualRegion: o, currentFrame: i };
    }, Es = async (o, i, y) => {
      const { actualRegion: m, currentFrame: R } = await Jt(), z = m.screenX - R.x, Q = m.screenY - R.y, ne = Math.max(0, R.width - m.physicalWidth), V = Math.max(0, R.height - m.physicalHeight);
      return {
        x: o.screenX - z,
        y: o.screenY - Q,
        width: Math.max(i, o.physicalWidth + ne),
        height: Math.max(y, o.physicalHeight + V)
      };
    }, Xt = async () => {
      N?.(), N = null, p.value = 0;
    }, Ve = async () => {
      if (!(!pt.value || N))
        try {
          N = await st("screen_recorder_audio_level", (o) => {
            if (!Pe.value) {
              p.value = 0;
              return;
            }
            const i = Math.max(0, Math.min(1, Number(o.payload?.level ?? 0)));
            p.value = p.value * 0.38 + i * 0.62;
          }), g.value = !1;
        } catch (o) {
          console.error(`${te} audio meter failed`, o), De.warn(`${te} audio meter failed`, o), g.value = !0;
        }
    }, Ps = async (o) => {
      o.button !== 0 || Ee.value || (Ut(), await t.setMinSize(new ae(bt, We)).catch(() => {
      }), await Ue(), await t.startDragging().catch((i) => {
        _t.msg(i?.message || String(i), "error");
      }), Vt());
    }, zs = async (o) => {
      Ee.value || (Ut(), await t.setMinSize(new ae(bt, We)).catch(() => {
      }), await Ue(), await t.startResizeDragging(o).catch((i) => {
        _t.msg(i?.message || String(i), "error");
      }), Vt());
    }, Ls = () => ge(async () => {
      f.value = null, await Ve(), await we(!0).catch(() => {
      }), await U(), await hs(await Ht());
    }), Rs = () => ge(async () => {
      await ps();
    }), Ds = () => ge(async () => {
      await fs(await Ht());
    }), Ws = () => ge(async () => {
      f.value = {
        stage: "encode",
        message: k.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await gs(), p.value = 0, await vs(), await U(), await we(!1).catch(() => {
      });
    }), As = () => ge(async () => {
      await At(), f.value = null, await U();
    }), $s = () => {
      const o = { ...k.value };
      Ue(), ws(), k.value = o, T.value = "ready", C.value = null, f.value = null, we(!0).catch(() => {
      }), _e(U), Ve();
    }, Fs = async (o) => {
      const i = await uo(o.screenX, o.screenY), y = i?.scaleFactor || await t.scaleFactor(), m = i ? {
        x: i.position.x,
        y: i.position.y,
        width: i.size.width,
        height: i.size.height
      } : null, R = Ts(o, m, y), z = Is(o, m, y);
      l.value = !0, h.value = z, await _e(), await ze(), await t.setMinSize(
        z ? new ae(Ct, On) : new ae(Ct, We)
      ).catch(() => {
      });
      const Q = Math.round(Ct * y), ne = Math.round(
        (z ? On : We) * y
      ), V = Ns(o, y, !R), tn = z && m ? {
        x: Math.max(m.x, V.screenX),
        y: Math.max(m.y, V.screenY),
        width: Math.max(Q, Math.min(V.physicalWidth, m.width)),
        height: Math.max(ne, Math.min(V.physicalHeight, m.height))
      } : await Es(
        V,
        Q,
        ne
      );
      try {
        if (await Zt(
          m && z ? Yt(tn, m) : tn
        ), await _e(), await Kt(), z)
          return;
        const qe = async () => {
          const { actualRegion: se, currentFrame: Le } = await Jt(), ee = {
            x: V.screenX - se.screenX,
            y: V.screenY - se.screenY,
            width: V.physicalWidth - se.physicalWidth,
            height: V.physicalHeight - se.physicalHeight
          };
          if (Math.abs(ee.x) <= Tn && Math.abs(ee.y) <= Tn && Math.abs(ee.width) <= Mn && Math.abs(ee.height) <= Mn)
            return !0;
          const nn = {
            x: Le.x + ee.x,
            y: Le.y + ee.y,
            width: Math.max(Q, Le.width + ee.width),
            height: Math.max(ne, Le.height + ee.height)
          };
          return await Zt(
            m && z ? Yt(nn, m) : nn
          ), !1;
        };
        for (let se = 0; se < Qr && !await qe(); se += 1)
          ;
      } catch (qe) {
        console.error(`${te} snap correction failed`, qe), De.warn(`${te} snap correction failed`, qe);
      } finally {
        await Ms(), await U(), await Kt(), await Os(), await t.setFocus().catch(() => {
        });
      }
    }, js = () => ge(async () => {
      await Ue();
      const o = await hr();
      await Fs(o);
    }), Bs = async () => {
      await t.minimize();
    }, Qt = async () => {
      $t.value = !0;
      try {
        T.value === "exporting" ? await At().catch(() => {
        }) : await ys(), await Ze(null).catch(() => {
        }), await we(!1).catch(() => {
        });
      } catch {
      }
      await pr();
    }, Hs = async () => {
      C.value && (await U(), await u("open_file_with_default_app", { filePath: C.value.path }));
    }, Gs = async () => {
      C.value && (await U(), await u("show_file_in_folder", { filePath: C.value.path }));
    }, en = (o) => {
      o.key === "Escape" && (o.preventDefault(), Qt());
    };
    return ct(async () => {
      De.info(`${te} frontend mounted`), T.value = "ready", await t.setMinSize(new ae(bt, We)).catch(() => {
      }), await we(!0).catch(() => {
      }), await Wt().catch(() => {
      }), await _e(), await U(), await Ve(), await _e(), await t.emit("screen_recorder_ready"), De.info(`${te} frontend ready emitted`), B = await st("screen_recorder_export_progress", (o) => {
        f.value = o.payload;
      }).catch(() => null), n.value && (b = new ResizeObserver(() => {
        Ge();
      }), b.observe(n.value)), I = await t.onMoved(() => {
        Ge();
      }).catch(() => null), window.addEventListener("resize", Ge), window.addEventListener("keydown", en);
    }), Se(pt, (o) => {
      o ? Ve() : Xt();
    }), Se(T, (o) => {
      o !== "recording" && (p.value = 0), o !== "exporting" && (f.value = null);
    }), Nn(() => {
      b?.disconnect(), I?.(), B?.(), window.removeEventListener("resize", Ge), window.removeEventListener("keydown", en), Gt(), Ze(null).catch(() => {
      }), Je(null).catch(() => {
      }), we(!1).catch(() => {
      }), Xt();
    }), (o, i) => (O(), P("div", Cr, [
      c(
        "div",
        {
          class: L(["recorder-shell", {
            recording: d(T) === "recording",
            paused: d(T) === "paused",
            "snap-aligned": l.value,
            "snap-fullscreen": h.value
          }])
        },
        [
          (O(), P(
            be,
            null,
            eo(S, (y) => c("span", {
              key: y.className,
              class: L(["resize-zone", y.className]),
              onMousedown: Ae((m) => zs(y.direction), ["prevent"])
            }, null, 42, Sr)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: Ps
            },
            [
              c(
                "span",
                xr,
                W(o.$t("screenRecorder.title") || "区域录制"),
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
                    onClick: Bs
                  }, [
                    E(d(yo), {
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
                    onClick: Qt
                  }, [
                    E(d(vo), {
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
          c("main", kr, [
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
            c("div", Or, [
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
              ref: a,
              class: "control-strip"
            },
            [
              c("div", Mr, [
                c("div", Tr, [
                  d(T) === "ready" || d(T) === "completed" ? (O(), P(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: Ae(js, ["prevent"])
                    },
                    [
                      E(d(wo), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : X("v-if", !0),
                  c("button", {
                    class: L(["audio-meter", { active: Pe.value && p.value > 0.03, metering: Pe.value && !g.value, muted: !Pe.value || g.value }]),
                    title: _s.value,
                    "aria-label": "系统声音录制状态",
                    disabled: d(T) === "exporting" || d(k).format === "gif"
                  }, [
                    c(
                      "span",
                      {
                        class: "audio-bars",
                        style: ke(ms.value)
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
                  ], 10, Ir)
                ]),
                c("label", Nr, [
                  le(c("select", {
                    "onUpdate:modelValue": i[1] || (i[1] = (y) => d(k).fps = y),
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
                  ]), 8, Er), [
                    [vt, d(k).fps]
                  ]),
                  i[15] || (i[15] = c(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                le(c("select", {
                  "onUpdate:modelValue": i[2] || (i[2] = (y) => d(k).format = y),
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
                ]), 8, Pr), [
                  [vt, d(k).format]
                ]),
                le(c("select", {
                  "onUpdate:modelValue": i[3] || (i[3] = (y) => d(k).quality = y),
                  class: "quality-select optional-quality",
                  disabled: Ee.value
                }, [
                  c(
                    "option",
                    Lr,
                    W(o.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Rr,
                    W(o.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "option",
                    Dr,
                    W(o.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, zr), [
                  [vt, d(k).quality]
                ]),
                c("div", Wr, [
                  c("label", Ar, [
                    c("input", {
                      value: r.value.width,
                      readonly: ""
                    }, null, 8, $r)
                  ]),
                  i[17] || (i[17] = c(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  c("label", Fr, [
                    c("input", {
                      value: r.value.height,
                      readonly: ""
                    }, null, 8, jr)
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
              c("div", Br, [
                d(T) === "recording" || d(T) === "paused" ? (O(), P(
                  be,
                  { key: 0 },
                  [
                    c(
                      "span",
                      Hr,
                      W(Cs.value),
                      1
                      /* TEXT */
                    ),
                    c("button", {
                      class: "control-button",
                      onClick: i[4] || (i[4] = (y) => d(T) === "paused" ? Ds() : Rs())
                    }, [
                      c(
                        "span",
                        Gr,
                        W(d(T) === "paused" ? o.$t("screenRecorder.resume") : o.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    c("button", {
                      class: "control-button danger",
                      onClick: Ws
                    }, [
                      c(
                        "span",
                        Ur,
                        W(o.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : d(T) === "exporting" ? (O(), P(
                  be,
                  { key: 1 },
                  [
                    c("div", {
                      class: "export-progress",
                      title: bs.value
                    }, [
                      c("div", qr, [
                        c(
                          "span",
                          null,
                          W(ft.value),
                          1
                          /* TEXT */
                        ),
                        c(
                          "strong",
                          null,
                          W(Ft.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      c("div", Kr, [
                        c(
                          "span",
                          {
                            style: ke({ width: `${Ft.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Vr),
                    c("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: As
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
                )) : d(T) === "completed" && d(C) ? (O(), P(
                  be,
                  { key: 2 },
                  [
                    c("span", {
                      class: "save-status optional-save-status",
                      title: d(C).path
                    }, W(d(C).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Yr),
                    c("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: Hs
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
                      onClick: Gs
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
                      onClick: $s
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
                )) : (O(), P("button", {
                  key: 3,
                  class: "record-button",
                  disabled: d(H)?.available === !1 || r.value.width < me || r.value.height < me,
                  onClick: Ls
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
                    Jr,
                    W(o.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Zr))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      d(H) && !d(H).available ? (O(), P(
        "p",
        Xr,
        W(d(H).message || o.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : X("v-if", !0)
    ]));
  }
}), ol = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, a] of t)
    n[s] = a;
  return n;
}, al = /* @__PURE__ */ ol(sl, [["__scopeId", "data-v-752948af"]]), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: al
}, Symbol.toStringTag, { value: "Module" }));
export {
  ll as activate
};
