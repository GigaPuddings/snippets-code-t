import { inject as X, createVNode as D, getCurrentInstance as ce, ref as x, computed as m, unref as l, readonly as Kn, getCurrentScope as Zn, onScopeDispose as Jn, onMounted as qe, nextTick as De, watch as ze, isRef as Yn, warn as Qn, provide as Xn, defineComponent as E, createElementBlock as T, openBlock as S, mergeProps as eo, renderSlot as de, createElementVNode as c, normalizeClass as N, Transition as ct, withCtx as ee, withDirectives as te, normalizeStyle as xe, createTextVNode as Yt, toDisplayString as $, vShow as Ae, shallowReactive as to, createBlock as V, createCommentVNode as q, resolveDynamicComponent as Qt, Fragment as Ce, withModifiers as Se, isVNode as Ie, render as je, onUnmounted as Xt, renderList as no, vModelSelect as et } from "vue";
const Yi = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Zi)
  });
};
function oo(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function so(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Re;
const R = "__TAURI_TO_IPC_KEY__";
function ao(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class io {
  get rid() {
    return oo(this, Re, "f");
  }
  constructor(t) {
    Re.set(this, void 0), so(this, Re, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return r("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Re = /* @__PURE__ */ new WeakMap();
class Oe {
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
    return new Oe(this.width / t, this.height / t);
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
class re {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Oe ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ue ? this.size : this.size.toPhysical(t);
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
class en {
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
    return new G(this.x * t, this.y * t);
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
class G {
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
    return new en(this.x / t, this.y / t);
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
class $e {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof en ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof G ? this.position : this.position.toPhysical(t);
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
var M;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(M || (M = {}));
async function tn(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function dt(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: s,
    handler: ao(t)
  }).then((i) => async () => tn(e, i));
}
async function ro(e, t, n) {
  return dt(e, (o) => {
    tn(e, o.id), t(o);
  }, n);
}
async function lo(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function uo(e, t, n) {
  await r("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class ke extends io {
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
    return r("plugin:image|new", {
      rgba: Be(t),
      width: n,
      height: o
    }).then((s) => new ke(s));
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
    return r("plugin:image|from_bytes", {
      bytes: Be(t)
    }).then((n) => new ke(n));
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
    return r("plugin:image|from_path", { path: t }).then((n) => new ke(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return r("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return r("plugin:image|size", { rid: this.rid });
  }
}
function Be(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ke ? e.rid : e;
}
var it;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(it || (it = {}));
class co {
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
var xt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(xt || (xt = {}));
function nn() {
  return new on(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function tt() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new on(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const nt = ["tauri://created", "tauri://error"];
class on {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || r("plugin:window|create", {
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
    return (n = (await tt()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return nn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return tt();
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
    for (const t of await tt())
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
    } : dt(t, n, {
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
    } : ro(t, n, {
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
    if (nt.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return lo(t, n);
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
    if (nt.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return uo(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return nt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return r("plugin:window|scale_factor", {
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
    return r("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new G(t));
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
    return r("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new G(t));
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
    return r("plugin:window|inner_size", {
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
    return r("plugin:window|outer_size", {
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
    return r("plugin:window|is_fullscreen", {
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
    return r("plugin:window|is_minimized", {
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
    return r("plugin:window|is_maximized", {
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
    return r("plugin:window|is_focused", {
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
    return r("plugin:window|is_decorated", {
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
    return r("plugin:window|is_resizable", {
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
    return r("plugin:window|is_maximizable", {
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
    return r("plugin:window|is_minimizable", {
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
    return r("plugin:window|is_closable", {
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
    return r("plugin:window|is_visible", {
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
    return r("plugin:window|title", {
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
    return r("plugin:window|theme", {
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
    return r("plugin:window|is_always_on_top", {
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
    return r("plugin:window|center", {
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
    return t && (t === it.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), r("plugin:window|request_user_attention", {
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
    return r("plugin:window|set_resizable", {
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
    return r("plugin:window|set_enabled", {
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
    return r("plugin:window|is_enabled", {
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
    return r("plugin:window|set_maximizable", {
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
    return r("plugin:window|set_minimizable", {
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
    return r("plugin:window|set_closable", {
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
    return r("plugin:window|set_title", {
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
    return r("plugin:window|maximize", {
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
    return r("plugin:window|unmaximize", {
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
    return r("plugin:window|toggle_maximize", {
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
    return r("plugin:window|minimize", {
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
    return r("plugin:window|unminimize", {
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
    return r("plugin:window|show", {
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
    return r("plugin:window|hide", {
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
    return r("plugin:window|close", {
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
    return r("plugin:window|destroy", {
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
    return r("plugin:window|set_decorations", {
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
    return r("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return r("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return r("plugin:window|set_effects", {
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
    return r("plugin:window|set_always_on_top", {
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
    return r("plugin:window|set_always_on_bottom", {
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
    return r("plugin:window|set_content_protected", {
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
    return r("plugin:window|set_size", {
      label: this.label,
      value: t instanceof re ? t : new re(t)
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
    return r("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof re ? t : t ? new re(t) : null
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
    return r("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof re ? t : t ? new re(t) : null
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
    return r("plugin:window|set_size_constraints", {
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
    return r("plugin:window|set_position", {
      label: this.label,
      value: t instanceof $e ? t : new $e(t)
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
    return r("plugin:window|set_fullscreen", {
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
    return r("plugin:window|set_focus", {
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
    return r("plugin:window|set_icon", {
      label: this.label,
      value: Be(t)
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
    return r("plugin:window|set_skip_taskbar", {
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
    return r("plugin:window|set_cursor_grab", {
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
    return r("plugin:window|set_cursor_visible", {
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
    return r("plugin:window|set_cursor_icon", {
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
    return r("plugin:window|set_background_color", { color: t });
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
    return r("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof $e ? t : new $e(t)
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
    return r("plugin:window|set_ignore_cursor_events", {
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
    return r("plugin:window|start_dragging", {
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
    return r("plugin:window|start_resize_dragging", {
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
    return r("plugin:window|set_badge_count", {
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
    return r("plugin:window|set_badge_label", {
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
    return r("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Be(t) : void 0
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
    return r("plugin:window|set_progress_bar", {
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
    return r("plugin:window|set_visible_on_all_workspaces", {
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
    return r("plugin:window|set_title_bar_style", {
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
    return r("plugin:window|set_theme", {
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
    return this.listen(M.WINDOW_RESIZED, (n) => {
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
    return this.listen(M.WINDOW_MOVED, (n) => {
      n.payload = new G(n.payload), t(n);
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
    return this.listen(M.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new co(n);
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
    const n = await this.listen(M.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new G(a.payload.position)
        }
      });
    }), o = await this.listen(M.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new G(a.payload.position)
        }
      });
    }), s = await this.listen(M.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new G(a.payload.position)
        }
      });
    }), i = await this.listen(M.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), i();
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
    const n = await this.listen(M.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(M.WINDOW_BLUR, (s) => {
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
    return this.listen(M.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(M.WINDOW_THEME_CHANGED, t);
  }
}
var It;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(It || (It = {}));
var Tt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Tt || (Tt = {}));
var Nt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Nt || (Nt = {}));
function po(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new G(e.position),
    size: new ue(e.size)
  };
}
async function fo(e, t) {
  return r("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(po);
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
function go() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function vo(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], i = t.theme || n.theme;
  switch (i) {
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
var yo = Symbol("icon-context");
function sn(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(i) {
      var a = go(), u = X(yo, ho);
      return function() {
        var h = i.size, v = i.strokeWidth, p = i.strokeLinecap, y = i.strokeLinejoin, k = i.theme, b = i.fill, F = i.spin, g = vo(a, {
          size: h,
          strokeWidth: v,
          strokeLinecap: p,
          strokeLinejoin: y,
          theme: k,
          fill: b
        }, u), w = [u.prefix + "-icon"];
        return w.push(u.prefix + "-icon-" + e), F && w.push(u.prefix + "-icon-spin"), D("span", {
          class: w.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const mo = sn("close-small", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wo = sn("minus", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), an = Symbol(), Fe = "el", _o = "is-", Q = (e, t, n, o, s) => {
  let i = `${e}-${t}`;
  return n && (i += `-${n}`), o && (i += `__${o}`), s && (i += `--${s}`), i;
}, rn = Symbol("namespaceContextKey"), bo = (e) => {
  const t = e || (ce() ? X(rn, x(Fe)) : x(Fe));
  return m(() => l(t) || Fe);
}, pt = (e, t) => {
  const n = bo(t);
  return {
    namespace: n,
    b: (g = "") => Q(n.value, e, g, "", ""),
    e: (g) => g ? Q(n.value, e, "", g, "") : "",
    m: (g) => g ? Q(n.value, e, "", "", g) : "",
    be: (g, w) => g && w ? Q(n.value, e, g, w, "") : "",
    em: (g, w) => g && w ? Q(n.value, e, "", g, w) : "",
    bm: (g, w) => g && w ? Q(n.value, e, g, "", w) : "",
    bem: (g, w, I) => g && w && I ? Q(n.value, e, g, w, I) : "",
    is: (g, ...w) => {
      const I = w.length >= 1 ? w[0] : !0;
      return g && I ? `${_o}${g}` : "";
    },
    cssVar: (g) => {
      const w = {};
      for (const I in g)
        g[I] && (w[`--${n.value}-${I}`] = g[I]);
      return w;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const w = {};
      for (const I in g)
        g[I] && (w[`--${n.value}-${e}-${I}`] = g[I]);
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
const Co = Object.prototype.hasOwnProperty, zt = (e, t) => Co.call(e, t), Te = (e) => typeof e == "function", ne = (e) => typeof e == "string", ln = (e) => e !== null && typeof e == "object";
var So = typeof global == "object" && global && global.Object === Object && global, Oo = typeof self == "object" && self && self.Object === Object && self, ft = So || Oo || Function("return this")(), pe = ft.Symbol, un = Object.prototype, ko = un.hasOwnProperty, xo = un.toString, _e = pe ? pe.toStringTag : void 0;
function Io(e) {
  var t = ko.call(e, _e), n = e[_e];
  try {
    e[_e] = void 0;
    var o = !0;
  } catch {
  }
  var s = xo.call(e);
  return o && (t ? e[_e] = n : delete e[_e]), s;
}
var To = Object.prototype, No = To.toString;
function zo(e) {
  return No.call(e);
}
var Po = "[object Null]", $o = "[object Undefined]", Pt = pe ? pe.toStringTag : void 0;
function cn(e) {
  return e == null ? e === void 0 ? $o : Po : Pt && Pt in Object(e) ? Io(e) : zo(e);
}
function Eo(e) {
  return e != null && typeof e == "object";
}
var Mo = "[object Symbol]";
function ht(e) {
  return typeof e == "symbol" || Eo(e) && cn(e) == Mo;
}
function Lo(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var gt = Array.isArray, $t = pe ? pe.prototype : void 0, Et = $t ? $t.toString : void 0;
function dn(e) {
  if (typeof e == "string")
    return e;
  if (gt(e))
    return Lo(e, dn) + "";
  if (ht(e))
    return Et ? Et.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function pn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Do = "[object AsyncFunction]", Ro = "[object Function]", Fo = "[object GeneratorFunction]", Wo = "[object Proxy]";
function Ao(e) {
  if (!pn(e))
    return !1;
  var t = cn(e);
  return t == Ro || t == Fo || t == Do || t == Wo;
}
var ot = ft["__core-js_shared__"], Mt = function() {
  var e = /[^.]+$/.exec(ot && ot.keys && ot.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function jo(e) {
  return !!Mt && Mt in e;
}
var Bo = Function.prototype, Ho = Bo.toString;
function Go(e) {
  if (e != null) {
    try {
      return Ho.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Uo = /[\\^$.*+?()[\]{}|]/g, Vo = /^\[object .+?Constructor\]$/, qo = Function.prototype, Ko = Object.prototype, Zo = qo.toString, Jo = Ko.hasOwnProperty, Yo = RegExp(
  "^" + Zo.call(Jo).replace(Uo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qo(e) {
  if (!pn(e) || jo(e))
    return !1;
  var t = Ao(e) ? Yo : Vo;
  return t.test(Go(e));
}
function Xo(e, t) {
  return e?.[t];
}
function fn(e, t) {
  var n = Xo(e, t);
  return Qo(n) ? n : void 0;
}
function es(e, t) {
  return e === t || e !== e && t !== t;
}
var ts = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ns = /^\w*$/;
function os(e, t) {
  if (gt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ht(e) ? !0 : ns.test(e) || !ts.test(e) || t != null && e in Object(t);
}
var Ne = fn(Object, "create");
function ss() {
  this.__data__ = Ne ? Ne(null) : {}, this.size = 0;
}
function as(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var is = "__lodash_hash_undefined__", rs = Object.prototype, ls = rs.hasOwnProperty;
function us(e) {
  var t = this.__data__;
  if (Ne) {
    var n = t[e];
    return n === is ? void 0 : n;
  }
  return ls.call(t, e) ? t[e] : void 0;
}
var cs = Object.prototype, ds = cs.hasOwnProperty;
function ps(e) {
  var t = this.__data__;
  return Ne ? t[e] !== void 0 : ds.call(t, e);
}
var fs = "__lodash_hash_undefined__";
function hs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ne && t === void 0 ? fs : t, this;
}
function oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oe.prototype.clear = ss;
oe.prototype.delete = as;
oe.prototype.get = us;
oe.prototype.has = ps;
oe.prototype.set = hs;
function gs() {
  this.__data__ = [], this.size = 0;
}
function Ke(e, t) {
  for (var n = e.length; n--; )
    if (es(e[n][0], t))
      return n;
  return -1;
}
var vs = Array.prototype, ys = vs.splice;
function ms(e) {
  var t = this.__data__, n = Ke(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : ys.call(t, n, 1), --this.size, !0;
}
function ws(e) {
  var t = this.__data__, n = Ke(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function _s(e) {
  return Ke(this.__data__, e) > -1;
}
function bs(e, t) {
  var n = this.__data__, o = Ke(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ge.prototype.clear = gs;
ge.prototype.delete = ms;
ge.prototype.get = ws;
ge.prototype.has = _s;
ge.prototype.set = bs;
var Cs = fn(ft, "Map");
function Ss() {
  this.size = 0, this.__data__ = {
    hash: new oe(),
    map: new (Cs || ge)(),
    string: new oe()
  };
}
function Os(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ze(e, t) {
  var n = e.__data__;
  return Os(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ks(e) {
  var t = Ze(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xs(e) {
  return Ze(this, e).get(e);
}
function Is(e) {
  return Ze(this, e).has(e);
}
function Ts(e, t) {
  var n = Ze(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ae.prototype.clear = Ss;
ae.prototype.delete = ks;
ae.prototype.get = xs;
ae.prototype.has = Is;
ae.prototype.set = Ts;
var Ns = "Expected a function";
function vt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ns);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], i = n.cache;
    if (i.has(s))
      return i.get(s);
    var a = e.apply(this, o);
    return n.cache = i.set(s, a) || i, a;
  };
  return n.cache = new (vt.Cache || ae)(), n;
}
vt.Cache = ae;
var zs = 500;
function Ps(e) {
  var t = vt(e, function(o) {
    return n.size === zs && n.clear(), o;
  }), n = t.cache;
  return t;
}
var $s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Es = /\\(\\)?/g, Ms = Ps(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($s, function(n, o, s, i) {
    t.push(s ? i.replace(Es, "$1") : o || n);
  }), t;
});
function Ls(e) {
  return e == null ? "" : dn(e);
}
function Ds(e, t) {
  return gt(e) ? e : os(e, t) ? [e] : Ms(Ls(e));
}
function Rs(e) {
  if (typeof e == "string" || ht(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Fs(e, t) {
  t = Ds(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Rs(t[n++])];
  return n && n == o ? e : void 0;
}
function Ws(e, t, n) {
  var o = e == null ? void 0 : Fs(e, t);
  return o === void 0 ? n : o;
}
function As(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const hn = (e) => e === void 0, Lt = (e) => typeof e == "boolean", se = (e) => typeof e == "number", rt = (e) => typeof Element > "u" ? !1 : e instanceof Element, js = (e) => ne(e) ? !Number.isNaN(Number(e)) : !1;
var Dt;
const ie = typeof window < "u", Bs = (e) => typeof e == "string", Hs = () => {
};
ie && ((Dt = window?.navigator) != null && Dt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function yt(e) {
  return typeof e == "function" ? e() : l(e);
}
function Gs(e) {
  return e;
}
function mt(e) {
  return Zn() ? (Jn(e), !0) : !1;
}
function Us(e, t = !0) {
  ce() ? qe(e) : t ? e() : De(e);
}
function gn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = x(!1);
  let i = null;
  function a() {
    i && (clearTimeout(i), i = null);
  }
  function u() {
    s.value = !1, a();
  }
  function h(...v) {
    a(), s.value = !0, i = setTimeout(() => {
      s.value = !1, i = null, e(...v);
    }, yt(t));
  }
  return o && (s.value = !0, ie && h()), mt(u), {
    isPending: Kn(s),
    start: h,
    stop: u
  };
}
function vn(e) {
  var t;
  const n = yt(e);
  return (t = n?.$el) != null ? t : n;
}
const yn = ie ? window : void 0;
function mn(...e) {
  let t, n, o, s;
  if (Bs(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = yn) : [t, n, o, s] = e, !t)
    return Hs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const i = [], a = () => {
    i.forEach((p) => p()), i.length = 0;
  }, u = (p, y, k, b) => (p.addEventListener(y, k, b), () => p.removeEventListener(y, k, b)), h = ze(() => [vn(t), yt(s)], ([p, y]) => {
    a(), p && i.push(...n.flatMap((k) => o.map((b) => u(p, k, b, y))));
  }, { immediate: !0, flush: "post" }), v = () => {
    h(), a();
  };
  return mt(v), v;
}
function Vs(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), Us(o, t), n;
}
const Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ft = "__vueuse_ssr_handlers__";
Rt[Ft] = Rt[Ft] || {};
var Wt = Object.getOwnPropertySymbols, qs = Object.prototype.hasOwnProperty, Ks = Object.prototype.propertyIsEnumerable, Zs = (e, t) => {
  var n = {};
  for (var o in e)
    qs.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Wt)
    for (var o of Wt(e))
      t.indexOf(o) < 0 && Ks.call(e, o) && (n[o] = e[o]);
  return n;
};
function Js(e, t, n = {}) {
  const o = n, { window: s = yn } = o, i = Zs(o, ["window"]);
  let a;
  const u = Vs(() => s && "ResizeObserver" in s), h = () => {
    a && (a.disconnect(), a = void 0);
  }, v = ze(() => vn(e), (y) => {
    h(), u.value && s && y && (a = new ResizeObserver(t), a.observe(y, i));
  }, { immediate: !0, flush: "post" }), p = () => {
    h(), v();
  };
  return mt(p), {
    isSupported: u,
    stop: p
  };
}
var At;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(At || (At = {}));
var Ys = Object.defineProperty, jt = Object.getOwnPropertySymbols, Qs = Object.prototype.hasOwnProperty, Xs = Object.prototype.propertyIsEnumerable, Bt = (e, t, n) => t in e ? Ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ea = (e, t) => {
  for (var n in t || (t = {}))
    Qs.call(t, n) && Bt(e, n, t[n]);
  if (jt)
    for (var n of jt(t))
      Xs.call(t, n) && Bt(e, n, t[n]);
  return e;
};
const ta = {
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
ea({
  linear: Gs
}, ta);
const Ht = {
  current: 0
}, Gt = x(0), wn = 2e3, Ut = Symbol("elZIndexContextKey"), _n = Symbol("zIndexContextKey"), na = (e) => {
  const t = ce() ? X(Ut, Ht) : Ht, n = e || (ce() ? X(_n, void 0) : void 0), o = m(() => {
    const a = l(n);
    return se(a) ? a : wn;
  }), s = m(() => o.value + Gt.value), i = () => (t.current++, Gt.value = t.current, s.value);
  return !ie && X(Ut), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: i
  };
};
var oa = {
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
const sa = (e) => (t, n) => aa(t, n, l(e)), aa = (e, t, n) => Ws(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var i;
  return `${(i = t?.[s]) != null ? i : `{${s}}`}`;
}), ia = (e) => {
  const t = m(() => l(e).name), n = Yn(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: sa(e)
  };
}, bn = Symbol("localeContextKey"), ra = (e) => {
  const t = e || X(bn, x());
  return ia(m(() => t.value || oa));
}, Cn = "__epPropKey", L = (e) => e, la = (e) => ln(e) && !!e[Cn], Sn = (e, t) => {
  if (!ln(e) || la(e))
    return e;
  const { values: n, required: o, default: s, type: i, validator: a } = e, h = {
    type: i,
    required: !!o,
    validator: n || a ? (v) => {
      let p = !1, y = [];
      if (n && (y = Array.from(n), zt(e, "default") && y.push(s), p || (p = y.includes(v))), a && (p || (p = a(v))), !p && y.length > 0) {
        const k = [...new Set(y)].map((b) => JSON.stringify(b)).join(", ");
        Qn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${k}], got value ${JSON.stringify(v)}.`);
      }
      return p;
    } : void 0,
    [Cn]: !0
  };
  return zt(e, "default") && (h.default = s), h;
}, ve = (e) => As(Object.entries(e).map(([t, n]) => [
  t,
  Sn(n, t)
])), ua = ["", "default", "small", "large"], ca = Sn({
  type: String,
  values: ua,
  required: !1
}), da = Symbol("size"), pa = Symbol("emptyValuesContextKey"), fa = ve({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Te(e) ? !e() : !e
  }
}), Vt = (e) => Object.keys(e), He = x();
function On(e, t = void 0) {
  return ce() ? X(an, He) : He;
}
function kn(e, t) {
  const n = On(), o = pt(e, m(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.namespace) || Fe;
  })), s = ra(m(() => {
    var u;
    return (u = n.value) == null ? void 0 : u.locale;
  })), i = na(m(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.zIndex) || wn;
  })), a = m(() => {
    var u;
    return l(t) || ((u = n.value) == null ? void 0 : u.size) || "";
  });
  return xn(m(() => l(n) || {})), {
    ns: o,
    locale: s,
    zIndex: i,
    size: a
  };
}
const xn = (e, t, n = !1) => {
  var o;
  const s = !!ce(), i = s ? On() : void 0, a = (o = void 0) != null ? o : s ? Xn : void 0;
  if (!a)
    return;
  const u = m(() => {
    const h = l(e);
    return i?.value ? ha(i.value, h) : h;
  });
  return a(an, u), a(bn, m(() => u.value.locale)), a(rn, m(() => u.value.namespace)), a(_n, m(() => u.value.zIndex)), a(da, {
    size: m(() => u.value.size || "")
  }), a(pa, m(() => ({
    emptyValues: u.value.emptyValues,
    valueOnClear: u.value.valueOnClear
  }))), (n || !He.value) && (He.value = u.value), u;
}, ha = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Vt(e), ...Vt(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function lt(e, t = "px") {
  if (!e)
    return "";
  if (se(e) || js(e))
    return `${e}${t}`;
  if (ne(e))
    return e;
}
const In = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Tn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ga = ve({
  size: {
    type: L([Number, String])
  },
  color: {
    type: String
  }
}), va = E({
  name: "ElIcon",
  inheritAttrs: !1
}), ya = /* @__PURE__ */ E({
  ...va,
  props: ga,
  setup(e) {
    const t = e, n = pt("icon"), o = m(() => {
      const { size: s, color: i } = t;
      return !s && !i ? {} : {
        fontSize: hn(s) ? void 0 : lt(s),
        "--color": i
      };
    });
    return (s, i) => (S(), T("i", eo({
      class: l(n).b(),
      style: l(o)
    }, s.$attrs), [
      de(s.$slots, "default")
    ], 16));
  }
});
var ma = /* @__PURE__ */ Je(ya, [["__file", "icon.vue"]]);
const Ge = In(ma);
/*! Element Plus Icons Vue v2.3.1 */
var wa = /* @__PURE__ */ E({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), _a = wa, ba = /* @__PURE__ */ E({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Nn = ba, Ca = /* @__PURE__ */ E({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Sa = Ca, Oa = /* @__PURE__ */ E({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ka = Oa, xa = /* @__PURE__ */ E({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ia = xa;
const zn = L([
  String,
  Object,
  Function
]), Ta = {
  Close: Nn
}, Na = {
  Close: Nn
}, Ue = {
  success: ka,
  warning: Ia,
  error: _a,
  info: Sa
}, za = (e) => e, We = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Pa = ve({
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
}), $a = E({
  name: "ElBadge"
}), Ea = /* @__PURE__ */ E({
  ...$a,
  props: Pa,
  setup(e, { expose: t }) {
    const n = e, o = pt("badge"), s = m(() => n.isDot ? "" : se(n.value) && se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), i = m(() => {
      var a, u, h, v, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: lt(-((u = (a = n.offset) == null ? void 0 : a[0]) != null ? u : 0)),
          marginTop: lt((v = (h = n.offset) == null ? void 0 : h[1]) != null ? v : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: s
    }), (a, u) => (S(), T("div", {
      class: N(l(o).b())
    }, [
      de(a.$slots, "default"),
      D(ct, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ee(() => [
          te(c("sup", {
            class: N([
              l(o).e("content"),
              l(o).em("content", a.type),
              l(o).is("fixed", !!a.$slots.default),
              l(o).is("dot", a.isDot),
              l(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: xe(l(i))
          }, [
            de(a.$slots, "content", { value: l(s) }, () => [
              Yt($(l(s)), 1)
            ])
          ], 6), [
            [Ae, !a.hidden && (l(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ma = /* @__PURE__ */ Je(Ea, [["__file", "badge.vue"]]);
const La = In(Ma), Da = ve({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: L(Object)
  },
  size: ca,
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
  ...fa
}), A = {};
E({
  name: "ElConfigProvider",
  props: Da,
  setup(e, { slots: t }) {
    ze(() => e.message, (o) => {
      Object.assign(A, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = xn(e);
    return () => de(t, "default", { config: n?.value });
  }
});
const Pn = ["success", "info", "warning", "error"], z = za({
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
  appendTo: ie ? document.body : void 0
}), Ra = ve({
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
    type: zn,
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
    values: Pn,
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
}), Fa = {
  destroy: () => !0
}, j = to([]), Wa = (e) => {
  const t = j.findIndex((s) => s.id === e), n = j[t];
  let o;
  return t > 0 && (o = j[t - 1]), { current: n, prev: o };
}, Aa = (e) => {
  const { prev: t } = Wa(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ja = (e, t) => j.findIndex((o) => o.id === e) > 0 ? 16 : t, Ba = E({
  name: "ElMessage"
}), Ha = /* @__PURE__ */ E({
  ...Ba,
  props: Ra,
  emits: Fa,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Na, { ns: s, zIndex: i } = kn("message"), { currentZIndex: a, nextZIndex: u } = i, h = x(), v = x(!1), p = x(0);
    let y;
    const k = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), b = m(() => {
      const C = n.type;
      return { [s.bm("icon", C)]: C && Ue[C] };
    }), F = m(() => n.icon || Ue[n.type] || ""), g = m(() => Aa(n.id)), w = m(() => ja(n.id, n.offset) + g.value), I = m(() => p.value + w.value), Z = m(() => ({
      top: `${w.value}px`,
      zIndex: a.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: y } = gn(() => {
        H();
      }, n.duration));
    }
    function W() {
      y?.();
    }
    function H() {
      v.value = !1;
    }
    function Ye({ code: C }) {
      C === We.esc && H();
    }
    return qe(() => {
      _(), u(), v.value = !0;
    }), ze(() => n.repeatNum, () => {
      W(), _();
    }), mn(document, "keydown", Ye), Js(h, () => {
      p.value = h.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: I,
      close: H
    }), (C, J) => (S(), V(ct, {
      name: l(s).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (wt) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        te(c("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: h,
          class: N([
            l(s).b(),
            { [l(s).m(C.type)]: C.type },
            l(s).is("center", C.center),
            l(s).is("closable", C.showClose),
            l(s).is("plain", C.plain),
            C.customClass
          ]),
          style: xe(l(Z)),
          role: "alert",
          onMouseenter: W,
          onMouseleave: _
        }, [
          C.repeatNum > 1 ? (S(), V(l(La), {
            key: 0,
            value: C.repeatNum,
            type: l(k),
            class: N(l(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : q("v-if", !0),
          l(F) ? (S(), V(l(Ge), {
            key: 1,
            class: N([l(s).e("icon"), l(b)])
          }, {
            default: ee(() => [
              (S(), V(Qt(l(F))))
            ]),
            _: 1
          }, 8, ["class"])) : q("v-if", !0),
          de(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (S(), T(Ce, { key: 1 }, [
              q(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: N(l(s).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), T("p", {
              key: 0,
              class: N(l(s).e("content"))
            }, $(C.message), 3))
          ]),
          C.showClose ? (S(), V(l(Ge), {
            key: 2,
            class: N(l(s).e("closeBtn")),
            onClick: Se(H, ["stop"])
          }, {
            default: ee(() => [
              D(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : q("v-if", !0)
        ], 46, ["id"]), [
          [Ae, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ga = /* @__PURE__ */ Je(Ha, [["__file", "message.vue"]]);
let Ua = 1;
const $n = (e) => {
  const t = !e || ne(e) || Ie(e) || Te(e) ? { message: e } : e, n = {
    ...z,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ne(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    rt(o) || (o = document.body), n.appendTo = o;
  }
  return Lt(A.grouping) && !n.grouping && (n.grouping = A.grouping), se(A.duration) && n.duration === 3e3 && (n.duration = A.duration), se(A.offset) && n.offset === 16 && (n.offset = A.offset), Lt(A.showClose) && !n.showClose && (n.showClose = A.showClose), n;
}, Va = (e) => {
  const t = j.indexOf(e);
  if (t === -1)
    return;
  j.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, qa = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Ua++}`, s = t.onClose, i = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), Va(p);
    },
    onDestroy: () => {
      je(null, i);
    }
  }, u = D(Ga, a, Te(a.message) || Ie(a.message) ? {
    default: Te(a.message) ? a.message : () => a.message
  } : null);
  u.appContext = n || fe._context, je(u, i), e.appendChild(i.firstElementChild);
  const h = u.component, p = {
    id: o,
    vnode: u,
    vm: h,
    handler: {
      close: () => {
        h.exposed.visible.value = !1;
      }
    },
    props: u.component.props
  };
  return p;
}, fe = (e = {}, t) => {
  if (!ie)
    return { close: () => {
    } };
  const n = $n(e);
  if (n.grouping && j.length) {
    const s = j.find(({ vnode: i }) => {
      var a;
      return ((a = i.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (se(A.max) && j.length >= A.max)
    return { close: () => {
    } };
  const o = qa(n, t);
  return j.push(o), o.handler;
};
Pn.forEach((e) => {
  fe[e] = (t = {}, n) => {
    const o = $n(t);
    return fe({ ...o, type: e }, n);
  };
});
function Ka(e) {
  for (const t of j)
    (!e || e === t.props.type) && t.handler.close();
}
fe.closeAll = Ka;
fe._context = null;
const Za = Tn(fe, "$message"), En = [
  "success",
  "info",
  "warning",
  "error"
], Ja = ve({
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
    type: zn
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
    values: [...En, ""],
    default: ""
  },
  zIndex: Number
}), Ya = {
  destroy: () => !0
}, Qa = E({
  name: "ElNotification"
}), Xa = /* @__PURE__ */ E({
  ...Qa,
  props: Ja,
  emits: Ya,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = kn("notification"), { nextZIndex: i, currentZIndex: a } = s, { Close: u } = Ta, h = x(!1);
    let v;
    const p = m(() => {
      const _ = n.type;
      return _ && Ue[n.type] ? o.m(_) : "";
    }), y = m(() => n.type && Ue[n.type] || n.icon), k = m(() => n.position.endsWith("right") ? "right" : "left"), b = m(() => n.position.startsWith("top") ? "top" : "bottom"), F = m(() => {
      var _;
      return {
        [b.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : a.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: v } = gn(() => {
        h.value && I();
      }, n.duration));
    }
    function w() {
      v?.();
    }
    function I() {
      h.value = !1;
    }
    function Z({ code: _ }) {
      _ === We.delete || _ === We.backspace ? w() : _ === We.esc ? h.value && I() : g();
    }
    return qe(() => {
      g(), i(), h.value = !0;
    }), mn(document, "keydown", Z), t({
      visible: h,
      close: I
    }), (_, W) => (S(), V(ct, {
      name: l(o).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (H) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        te(c("div", {
          id: _.id,
          class: N([l(o).b(), _.customClass, l(k)]),
          style: xe(l(F)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: g,
          onClick: _.onClick
        }, [
          l(y) ? (S(), V(l(Ge), {
            key: 0,
            class: N([l(o).e("icon"), l(p)])
          }, {
            default: ee(() => [
              (S(), V(Qt(l(y))))
            ]),
            _: 1
          }, 8, ["class"])) : q("v-if", !0),
          c("div", {
            class: N(l(o).e("group"))
          }, [
            c("h2", {
              class: N(l(o).e("title")),
              textContent: $(_.title)
            }, null, 10, ["textContent"]),
            te(c("div", {
              class: N(l(o).e("content")),
              style: xe(_.title ? void 0 : { margin: 0 })
            }, [
              de(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (S(), T(Ce, { key: 1 }, [
                  q(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), T("p", { key: 0 }, $(_.message), 1))
              ])
            ], 6), [
              [Ae, _.message]
            ]),
            _.showClose ? (S(), V(l(Ge), {
              key: 0,
              class: N(l(o).e("closeBtn")),
              onClick: Se(I, ["stop"])
            }, {
              default: ee(() => [
                D(l(u))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : q("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ae, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ei = /* @__PURE__ */ Je(Xa, [["__file", "notification.vue"]]);
const Ve = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ut = 16;
let ti = 1;
const he = function(e = {}, t) {
  if (!ie)
    return { close: () => {
    } };
  (ne(e) || Ie(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Ve[n].forEach(({ vm: p }) => {
    var y;
    o += (((y = p.el) == null ? void 0 : y.offsetHeight) || 0) + ut;
  }), o += ut;
  const s = `notification_${ti++}`, i = e.onClose, a = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      ni(s, n, i);
    }
  };
  let u = document.body;
  rt(e.appendTo) ? u = e.appendTo : ne(e.appendTo) && (u = document.querySelector(e.appendTo)), rt(u) || (u = document.body);
  const h = document.createElement("div"), v = D(ei, a, Te(a.message) ? a.message : Ie(a.message) ? () => a.message : null);
  return v.appContext = hn(t) ? he._context : t, v.props.onDestroy = () => {
    je(null, h);
  }, je(v, h), Ve[n].push({ vm: v }), u.appendChild(h.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
En.forEach((e) => {
  he[e] = (t = {}, n) => ((ne(t) || Ie(t)) && (t = {
    message: t
  }), he({ ...t, type: e }, n));
});
function ni(e, t, n) {
  const o = Ve[t], s = o.findIndex(({ vm: v }) => {
    var p;
    return ((p = v.component) == null ? void 0 : p.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: i } = o[s];
  if (!i)
    return;
  n?.(i);
  const a = i.el.offsetHeight, u = t.split("-")[0];
  o.splice(s, 1);
  const h = o.length;
  if (!(h < 1))
    for (let v = s; v < h; v++) {
      const { el: p, component: y } = o[v].vm, k = Number.parseInt(p.style[u], 10) - a - ut;
      y.props.offset = k;
    }
}
function oi() {
  for (const e of Object.values(Ve))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
he.closeAll = oi;
he._context = null;
const si = Tn(he, "$notify"), st = {
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
      showClose: i = !1
    } = e;
    o === "center" ? Za({
      message: t,
      type: n,
      duration: s,
      showClose: i,
      grouping: !0
    }) : si({
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
}, at = "[screen-recorder]", ai = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, B = async (e, t) => {
  const n = performance.now(), o = ai(t);
  console.info(`${at} invoke:start ${e}`, o ?? "");
  try {
    const s = await r(e, t);
    return console.info(`${at} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: s
    }), s;
  } catch (s) {
    throw console.error(`${at} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, ii = () => B("screen_recorder_get_ffmpeg_status"), le = (e) => B("screen_recorder_set_capture_excluded", { excluded: e }), be = (e) => B("screen_recorder_set_passthrough_region", { region: e }), ri = () => B("screen_recorder_pick_target_window"), li = () => B("screen_recorder_close_window"), ui = (e, t) => B("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), ci = () => B("screen_recorder_pause_recording"), di = (e, t) => B("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), pi = () => B("screen_recorder_stop_recording"), fi = () => B("screen_recorder_cancel_recording"), hi = (e) => B("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), qt = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), P = "[screen-recorder]";
function gi() {
  const e = x("selecting"), t = x(qt()), n = x(null), o = x(null), s = x(""), i = x(null), a = x(0), u = x(0), h = x(null), v = () => {
    u.value = e.value === "recording" && i.value !== null ? a.value + Date.now() - i.value : a.value;
  }, p = () => {
    h.value !== null && (window.clearInterval(h.value), h.value = null);
  }, y = () => {
    p(), v(), h.value = window.setInterval(() => {
      v();
    }, 250);
  }, k = async () => (console.info(`${P} refresh ffmpeg status`), n.value = await ii(), console.info(`${P} ffmpeg status`, n.value), n.value), b = async (W) => {
    s.value = "", o.value = null, console.info(`${P} begin requested`, { region: W, settings: t.value });
    const H = n.value ?? await k();
    if (!H.available)
      throw new Error(H.message || "FFmpeg unavailable");
    await ui(W, t.value), e.value = "recording", a.value = 0, u.value = 0, i.value = Date.now(), y(), console.info(`${P} recording started`, { status: e.value });
  }, F = async () => {
    e.value === "recording" && (console.info(`${P} pause requested`, { elapsedMs: u.value }), v(), a.value = u.value, i.value = null, p(), await ci(), e.value = "paused", console.info(`${P} recording paused`, { accumulatedMs: a.value }));
  }, g = async (W) => {
    e.value === "paused" && (console.info(`${P} resume requested`, { region: W, settings: t.value }), await di(W, t.value), e.value = "recording", i.value = Date.now(), y(), console.info(`${P} recording resumed`));
  }, w = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${P} stop requested`, { status: e.value, elapsedMs: u.value }), v(), a.value = u.value, i.value = null, p(), await pi(), e.value = "exporting", console.info(`${P} recording stopped`, { accumulatedMs: a.value }));
  }, I = async () => (console.info(`${P} export requested`, { settings: t.value }), e.value = "exporting", o.value = await hi(t.value), e.value = "completed", console.info(`${P} export completed`, o.value), o.value), Z = async () => {
    console.info(`${P} cancel requested`, { status: e.value, elapsedMs: u.value }), p(), await fi(), e.value = "selecting", i.value = null, a.value = 0, u.value = 0, o.value = null, console.info(`${P} canceled`);
  }, _ = () => {
    console.info(`${P} reset session`), e.value = "selecting", i.value = null, a.value = 0, u.value = 0, o.value = null, s.value = "", t.value = qt();
  };
  return Xt(() => {
    p();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: s,
    elapsedMs: u,
    refreshFfmpegStatus: k,
    begin: b,
    pause: F,
    resume: g,
    stop: w,
    exportFile: I,
    cancel: Z,
    reset: _
  };
}
const vi = { class: "screen-recorder" }, yi = ["onMousedown"], mi = { class: "window-title" }, wi = { class: "capture-viewport" }, _i = { class: "capture-frame" }, bi = { class: "control-strip" }, Ci = { class: "control-group control-group--tools" }, Si = { class: "tool-pill" }, Oi = ["title", "disabled"], ki = { class: "select-field" }, xi = ["disabled"], Ii = ["disabled"], Ti = ["disabled"], Ni = { value: "high" }, zi = { value: "standard" }, Pi = { value: "small" }, $i = { class: "dimension-group optional-size" }, Ei = { class: "dimension" }, Mi = ["value"], Li = { class: "dimension" }, Di = ["value"], Ri = { class: "control-group control-group--actions" }, Fi = { class: "time" }, Wi = {
  key: 1,
  class: "save-status"
}, Ai = ["title"], ji = ["disabled"], Bi = {
  key: 0,
  class: "warning"
}, K = "[screen-recorder]", Ee = 80, Hi = 468, Gi = 300, Kt = 420, Zt = 260, Jt = 38, Ui = 60, Me = 8, Le = 1, Vi = /* @__PURE__ */ E({
  __name: "index",
  setup(e) {
    const t = nn(), n = x(null), o = x({ width: 0, height: 0 }), s = x(0), i = x(!1);
    let a = null, u = null, h = null;
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
      status: p,
      settings: y,
      ffmpegStatus: k,
      result: b,
      elapsedMs: F,
      refreshFfmpegStatus: g,
      begin: w,
      pause: I,
      resume: Z,
      stop: _,
      exportFile: W,
      cancel: H,
      reset: Ye
    } = gi(), C = m(() => p.value === "recording" || p.value === "paused" || p.value === "exporting"), J = m(() => y.value.audio && y.value.format === "mp4"), wt = m(() => {
      const f = J.value && !i.value ? s.value : 0, d = (O, Y) => Math.max(0.18, Math.min(1, O + f * Y)).toFixed(3);
      return {
        "--bar-1": d(0.28, 0.64),
        "--bar-2": d(0.42, 0.78),
        "--bar-3": d(0.34, 0.94),
        "--bar-4": d(0.22, 0.72)
      };
    }), Mn = m(() => {
      if (y.value.format === "gif")
        return "GIF 不支持音频";
      if (i.value && y.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (b.value?.audioDevice)
        return `已录制音频：${b.value.audioDevice}`;
      if (b.value && !b.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (k.value?.available && !k.value.systemAudioAvailable) {
        const f = k.value.audioDevices?.join("、") || "无";
        return y.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${f}` : "录制音频已关闭";
      }
      return y.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Ln = m(() => {
      const f = Math.floor(F.value / 1e3), d = Math.floor(f / 60).toString().padStart(2, "0"), O = (f % 60).toString().padStart(2, "0");
      return `${d}:${O}`;
    }), ye = async (f) => {
      try {
        await f();
      } catch (d) {
        console.error(`${K} action failed`, d), st.msg(d?.message || String(d), "error");
      }
    }, _t = (f) => Math.max(2, Math.floor(Math.round(f) / 2) * 2), Qe = async () => {
      const f = n.value;
      if (!f)
        throw new Error("录制视口尚未准备好");
      const d = f.getBoundingClientRect(), O = await t.scaleFactor(), Y = await t.innerPosition(), we = _t(d.width * O), Xe = _t(d.height * O);
      if (we < Ee || Xe < Ee)
        throw new Error("录制区域太小，请放大录制窗口");
      const kt = {
        x: d.left,
        y: d.top,
        width: we / O,
        height: Xe / O,
        screenX: Math.round(Y.x + d.left * O),
        screenY: Math.round(Y.y + d.top * O),
        physicalWidth: we,
        physicalHeight: Xe,
        scale: O
      };
      return console.info(`${K} capture region`, kt), kt;
    }, U = async () => {
      try {
        const f = await Qe();
        o.value = {
          width: f.physicalWidth,
          height: f.physicalHeight
        }, await be({
          x: Math.round(f.x * f.scale),
          y: Math.round(f.y * f.scale),
          width: f.physicalWidth,
          height: f.physicalHeight
        }).catch(() => {
        });
      } catch {
        o.value = { width: 0, height: 0 }, await be(null).catch(() => {
        });
      }
    }, me = async () => {
      await be(null).catch(() => {
      });
    }, bt = () => {
      window.setTimeout(() => {
        U();
      }, 120);
    }, Ct = async () => {
      h?.(), h = null, s.value = 0;
    }, Pe = async () => {
      if (!(!J.value || h))
        try {
          console.info(`${K} backend audio meter listening`), h = await dt("screen_recorder_audio_level", (f) => {
            const d = Math.max(0, Math.min(1, Number(f.payload?.level ?? 0)));
            s.value = s.value * 0.38 + d * 0.62;
          }), i.value = !1;
        } catch (f) {
          console.error(`${K} audio meter failed`, f), i.value = !0;
        }
    }, Dn = async (f) => {
      f.button !== 0 || C.value || (await me(), await t.startDragging().catch((d) => {
        st.msg(d?.message || String(d), "error");
      }), bt());
    }, Rn = async (f) => {
      C.value || (await me(), await t.startResizeDragging(f).catch((d) => {
        st.msg(d?.message || String(d), "error");
      }), bt());
    }, Fn = () => ye(async () => {
      console.info(`${K} handle start`), await Pe(), await le(!0).catch(() => {
      }), await U(), await w(await Qe());
    }), Wn = () => ye(async () => {
      console.info(`${K} handle pause`), await I();
    }), An = () => ye(async () => {
      console.info(`${K} handle resume`), await Z(await Qe());
    }), jn = () => ye(async () => {
      console.info(`${K} handle stop/export`), await _(), await W(), await me(), await le(!1).catch(() => {
      });
    }), Bn = () => {
      me(), Ye(), p.value = "ready", b.value = null, le(!0).catch(() => {
      }), t.setSize(new Oe(Hi, Gi)), De(U), Pe();
    }, Hn = async (f) => {
      const O = (await fo(f.screenX, f.screenY))?.scaleFactor || await t.scaleFactor(), Y = Math.max(
        Kt,
        f.physicalWidth / O + Me * 2 + Le * 2
      ), we = Math.max(
        Zt,
        f.physicalHeight / O + Jt + Ui + Me * 2 + Le * 2
      );
      await t.setPosition(new G(
        Math.round(f.screenX - (Me + Le) * O),
        Math.round(f.screenY - (Jt + Me + Le) * O)
      )), await t.setSize(new Oe(Math.round(Y), Math.round(we))), await De(), await U();
    }, Gn = () => ye(async () => {
      await me();
      const f = await ri();
      await Hn(f);
    }), Un = async () => {
      await t.minimize();
    }, St = async () => {
      try {
        await H(), await be(null).catch(() => {
        }), await le(!1).catch(() => {
        });
      } catch {
      }
      await li();
    }, Vn = async () => {
      b.value && await r("open_file_with_default_app", { filePath: b.value.path });
    }, qn = async () => {
      b.value && await r("show_file_in_folder", { filePath: b.value.path });
    }, Ot = (f) => {
      f.key === "Escape" && (f.preventDefault(), St());
    };
    return qe(async () => {
      p.value = "ready", await t.setMinSize(new Oe(Kt, Zt)).catch(() => {
      }), await le(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await g().catch(() => {
      }), await De(), await U(), await Pe(), n.value && (a = new ResizeObserver(() => {
        U();
      }), a.observe(n.value)), u = await t.onMoved(() => {
        U();
      }).catch(() => null), window.addEventListener("resize", U), window.addEventListener("keydown", Ot);
    }), ze(J, (f) => {
      f ? Pe() : Ct();
    }), Xt(() => {
      a?.disconnect(), u?.(), window.removeEventListener("resize", U), window.removeEventListener("keydown", Ot), be(null).catch(() => {
      }), le(!1).catch(() => {
      }), Ct();
    }), (f, d) => (S(), T("div", vi, [
      c(
        "div",
        {
          class: N(["recorder-shell", { recording: l(p) === "recording", paused: l(p) === "paused" }])
        },
        [
          (S(), T(
            Ce,
            null,
            no(v, (O) => c("span", {
              key: O.className,
              class: N(["resize-zone", O.className]),
              onMousedown: Se((Y) => Rn(O.direction), ["prevent"])
            }, null, 42, yi)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              class: "title-bar",
              onMousedown: Dn
            },
            [
              c(
                "span",
                mi,
                $(f.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: d[0] || (d[0] = Se(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Un
                  }, [
                    D(l(wo), {
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
                    onClick: St
                  }, [
                    D(l(mo), {
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
          c("main", wi, [
            d[9] || (d[9] = c(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            d[10] || (d[10] = c(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            d[11] || (d[11] = c(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            d[12] || (d[12] = c(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            c("div", _i, [
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
              d[5] || (d[5] = c(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              d[6] || (d[6] = c(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              d[7] || (d[7] = c(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              d[8] || (d[8] = c(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          c("footer", bi, [
            c("div", Ci, [
              c("div", Si, [
                l(p) === "ready" || l(p) === "completed" ? (S(), T(
                  "button",
                  {
                    key: 0,
                    class: "icon-control snap-control",
                    title: "拖到目标窗口并松开以对齐",
                    "aria-label": "对齐目标窗口",
                    onMousedown: Se(Gn, ["prevent"])
                  },
                  d[13] || (d[13] = [
                    c(
                      "span",
                      { class: "snap-ring" },
                      null,
                      -1
                      /* HOISTED */
                    )
                  ]),
                  32
                  /* NEED_HYDRATION */
                )) : q("v-if", !0),
                c("button", {
                  class: N(["audio-meter", { active: J.value && s.value > 0.03, metering: J.value && !i.value, muted: !J.value || i.value }]),
                  title: Mn.value,
                  "aria-label": "系统声音录制状态",
                  disabled: l(p) === "exporting" || l(y).format === "gif"
                }, [
                  c(
                    "span",
                    {
                      class: "audio-bars",
                      style: xe(wt.value)
                    },
                    d[14] || (d[14] = [
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
                ], 10, Oi)
              ]),
              c("label", ki, [
                te(c("select", {
                  "onUpdate:modelValue": d[1] || (d[1] = (O) => l(y).fps = O),
                  disabled: C.value
                }, d[15] || (d[15] = [
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
                ]), 8, xi), [
                  [et, l(y).fps]
                ]),
                d[16] || (d[16] = c(
                  "span",
                  { class: "unit" },
                  "fps",
                  -1
                  /* HOISTED */
                ))
              ]),
              te(c("select", {
                "onUpdate:modelValue": d[2] || (d[2] = (O) => l(y).format = O),
                class: "format-select optional-format",
                disabled: C.value
              }, d[17] || (d[17] = [
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
              ]), 8, Ii), [
                [et, l(y).format]
              ]),
              te(c("select", {
                "onUpdate:modelValue": d[3] || (d[3] = (O) => l(y).quality = O),
                class: "quality-select optional-quality",
                disabled: C.value
              }, [
                c(
                  "option",
                  Ni,
                  $(f.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                c(
                  "option",
                  zi,
                  $(f.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                c(
                  "option",
                  Pi,
                  $(f.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, Ti), [
                [et, l(y).quality]
              ]),
              c("div", $i, [
                c("label", Ei, [
                  c("input", {
                    value: o.value.width,
                    readonly: ""
                  }, null, 8, Mi)
                ]),
                d[18] || (d[18] = c(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                c("label", Li, [
                  c("input", {
                    value: o.value.height,
                    readonly: ""
                  }, null, 8, Di)
                ]),
                d[19] || (d[19] = c(
                  "span",
                  { class: "unit" },
                  "px",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            c("div", Ri, [
              l(p) === "recording" || l(p) === "paused" ? (S(), T(
                Ce,
                { key: 0 },
                [
                  c(
                    "span",
                    Fi,
                    $(Ln.value),
                    1
                    /* TEXT */
                  ),
                  c(
                    "button",
                    {
                      class: "control-button",
                      onClick: d[4] || (d[4] = (O) => l(p) === "paused" ? An() : Wn())
                    },
                    $(l(p) === "paused" ? f.$t("screenRecorder.resume") : f.$t("screenRecorder.pause")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "button",
                    {
                      class: "control-button danger",
                      onClick: jn
                    },
                    $(f.$t("screenRecorder.stop")),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : l(p) === "exporting" ? (S(), T(
                "span",
                Wi,
                $(f.$t("screenRecorder.exporting") || "正在导出..."),
                1
                /* TEXT */
              )) : l(p) === "completed" && l(b) ? (S(), T(
                Ce,
                { key: 2 },
                [
                  c("span", {
                    class: "save-status optional-save-status",
                    title: l(b).path
                  }, $(l(b).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Ai),
                  c("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: Vn
                  }, "打开"),
                  c("button", {
                    class: "control-button",
                    title: "打开所在文件夹",
                    onClick: qn
                  }, "文件夹"),
                  c("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: Bn
                  }, "重录")
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (S(), T("button", {
                key: 3,
                class: "record-button",
                disabled: l(k)?.available === !1 || o.value.width < Ee || o.value.height < Ee,
                onClick: Fn
              }, [
                d[20] || (d[20] = c(
                  "span",
                  null,
                  null,
                  -1
                  /* HOISTED */
                )),
                Yt(
                  " " + $(f.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, ji))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      l(k) && !l(k).available ? (S(), T(
        "p",
        Bi,
        $(l(k).message || f.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : q("v-if", !0)
    ]));
  }
}), qi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Ki = /* @__PURE__ */ qi(Vi, [["__scopeId", "data-v-9949d1fd"]]), Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ki
}, Symbol.toStringTag, { value: "Module" }));
export {
  Yi as activate
};
