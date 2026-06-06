import { getCurrentInstance as ce, inject as ee, ref as k, computed as m, unref as s, readonly as uo, getCurrentScope as co, onScopeDispose as ho, onMounted as Re, nextTick as on, watch as He, isRef as tt, warn as fo, provide as po, defineComponent as N, createElementBlock as O, openBlock as _, mergeProps as vo, renderSlot as de, createElementVNode as a, normalizeClass as L, createVNode as d, Transition as lt, withCtx as te, withDirectives as V, normalizeStyle as Pe, createTextVNode as T, toDisplayString as j, vShow as Te, shallowReactive as go, createBlock as J, createCommentVNode as B, resolveDynamicComponent as sn, Fragment as at, withModifiers as Me, isVNode as _e, render as Ne, onUnmounted as yo, vModelText as Oe, vModelCheckbox as Wt, withKeys as wo, vModelSelect as mo, renderList as bo } from "vue";
const sr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => nr)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function _o(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function ko(e, t, n, o, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var We;
const R = "__TAURI_TO_IPC_KEY__";
function Co(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Lo(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class So {
  get rid() {
    return _o(this, We, "f");
  }
  constructor(t) {
    We.set(this, void 0), ko(this, We, t);
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
We = /* @__PURE__ */ new WeakMap();
var E;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(E || (E = {}));
async function ln(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function $e(e, t, n) {
  var o;
  const l = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: l,
    handler: Co(t)
  }).then((c) => async () => ln(e, c));
}
async function xo(e, t, n) {
  return $e(e, (o) => {
    ln(e, o.id), t(o);
  }, n);
}
async function Oo(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function zo(e, t, n) {
  await r("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class an {
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
    return new me(this.width * t, this.height * t);
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
class me {
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
    return new an(this.width / t, this.height / t);
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
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof an ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof me ? this.size : this.size.toPhysical(t);
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
class rn {
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
    return new rn(this.x / t, this.y / t);
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
class ze {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof rn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Q ? this.position : this.position.toPhysical(t);
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
class be extends So {
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
      rgba: Ee(t),
      width: n,
      height: o
    }).then((l) => new be(l));
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
      bytes: Ee(t)
    }).then((n) => new be(n));
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
    return r("plugin:image|from_path", { path: t }).then((n) => new be(n));
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
function Ee(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof be ? e.rid : e;
}
var nt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(nt || (nt = {}));
class Wo {
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
var It;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(It || (It = {}));
function un() {
  return new cn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function qe() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new cn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Je = ["tauri://created", "tauri://error"];
class cn {
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
    }).then(async () => this.emit("tauri://created")).catch(async (l) => this.emit("tauri://error", l));
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
    return (n = (await qe()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return un();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return qe();
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
    for (const t of await qe())
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
    } : $e(t, n, {
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
    } : xo(t, n, {
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
    if (Je.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Oo(t, n);
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
    if (Je.includes(n)) {
      for (const l of this.listeners[n] || [])
        l({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return zo(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Je.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return r("plugin:window|outer_position", {
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
    return r("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new me(t));
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
    }).then((t) => new me(t));
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
    return t && (t === nt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), r("plugin:window|request_user_attention", {
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
      value: t instanceof ue ? t : new ue(t)
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
      value: t instanceof ue ? t : t ? new ue(t) : null
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
      value: t instanceof ue ? t : t ? new ue(t) : null
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
      value: t instanceof ze ? t : new ze(t)
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
      value: Ee(t)
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
      value: t instanceof ze ? t : new ze(t)
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
      value: t ? Ee(t) : void 0
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
    return this.listen(E.WINDOW_RESIZED, (n) => {
      n.payload = new me(n.payload), t(n);
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
    return this.listen(E.WINDOW_MOVED, (n) => {
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
    return this.listen(E.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Wo(n);
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
    const n = await this.listen(E.DRAG_ENTER, (u) => {
      t({
        ...u,
        payload: {
          type: "enter",
          paths: u.payload.paths,
          position: new Q(u.payload.position)
        }
      });
    }), o = await this.listen(E.DRAG_OVER, (u) => {
      t({
        ...u,
        payload: {
          type: "over",
          position: new Q(u.payload.position)
        }
      });
    }), l = await this.listen(E.DRAG_DROP, (u) => {
      t({
        ...u,
        payload: {
          type: "drop",
          paths: u.payload.paths,
          position: new Q(u.payload.position)
        }
      });
    }), c = await this.listen(E.DRAG_LEAVE, (u) => {
      t({ ...u, payload: { type: "leave" } });
    });
    return () => {
      n(), l(), o(), c();
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
    const n = await this.listen(E.WINDOW_FOCUS, (l) => {
      t({ ...l, payload: !0 });
    }), o = await this.listen(E.WINDOW_BLUR, (l) => {
      t({ ...l, payload: !1 });
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
    return this.listen(E.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(E.WINDOW_THEME_CHANGED, t);
  }
}
var jt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(jt || (jt = {}));
var Pt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Pt || (Pt = {}));
var Tt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Tt || (Tt = {}));
async function Mt(e = {}) {
  return typeof e == "object" && Object.freeze(e), await r("plugin:dialog|open", { options: e });
}
const dn = Symbol(), Ie = "el", Io = "is-", X = (e, t, n, o, l) => {
  let c = `${e}-${t}`;
  return n && (c += `-${n}`), o && (c += `__${o}`), l && (c += `--${l}`), c;
}, hn = Symbol("namespaceContextKey"), jo = (e) => {
  const t = e || (ce() ? ee(hn, k(Ie)) : k(Ie));
  return m(() => s(t) || Ie);
}, rt = (e, t) => {
  const n = jo(t);
  return {
    namespace: n,
    b: (v = "") => X(n.value, e, v, "", ""),
    e: (v) => v ? X(n.value, e, "", v, "") : "",
    m: (v) => v ? X(n.value, e, "", "", v) : "",
    be: (v, w) => v && w ? X(n.value, e, v, w, "") : "",
    em: (v, w) => v && w ? X(n.value, e, "", v, w) : "",
    bm: (v, w) => v && w ? X(n.value, e, v, "", w) : "",
    bem: (v, w, x) => v && w && x ? X(n.value, e, v, w, x) : "",
    is: (v, ...w) => {
      const x = w.length >= 1 ? w[0] : !0;
      return v && x ? `${Io}${v}` : "";
    },
    cssVar: (v) => {
      const w = {};
      for (const x in v)
        v[x] && (w[`--${n.value}-${x}`] = v[x]);
      return w;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const w = {};
      for (const x in v)
        v[x] && (w[`--${n.value}-${e}-${x}`] = v[x]);
      return w;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Po = Object.prototype.hasOwnProperty, Nt = (e, t) => Po.call(e, t), ke = (e) => typeof e == "function", ne = (e) => typeof e == "string", fn = (e) => e !== null && typeof e == "object";
var To = typeof global == "object" && global && global.Object === Object && global, Mo = typeof self == "object" && self && self.Object === Object && self, ut = To || Mo || Function("return this")(), he = ut.Symbol, pn = Object.prototype, No = pn.hasOwnProperty, $o = pn.toString, we = he ? he.toStringTag : void 0;
function Eo(e) {
  var t = No.call(e, we), n = e[we];
  try {
    e[we] = void 0;
    var o = !0;
  } catch {
  }
  var l = $o.call(e);
  return o && (t ? e[we] = n : delete e[we]), l;
}
var Do = Object.prototype, Fo = Do.toString;
function Ao(e) {
  return Fo.call(e);
}
var Bo = "[object Null]", Ro = "[object Undefined]", $t = he ? he.toStringTag : void 0;
function vn(e) {
  return e == null ? e === void 0 ? Ro : Bo : $t && $t in Object(e) ? Eo(e) : Ao(e);
}
function Ho(e) {
  return e != null && typeof e == "object";
}
var Vo = "[object Symbol]";
function ct(e) {
  return typeof e == "symbol" || Ho(e) && vn(e) == Vo;
}
function Uo(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = Array(o); ++n < o; )
    l[n] = t(e[n], n, e);
  return l;
}
var dt = Array.isArray, Et = he ? he.prototype : void 0, Dt = Et ? Et.toString : void 0;
function gn(e) {
  if (typeof e == "string")
    return e;
  if (dt(e))
    return Uo(e, gn) + "";
  if (ct(e))
    return Dt ? Dt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function yn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Go = "[object AsyncFunction]", Zo = "[object Function]", Ko = "[object GeneratorFunction]", qo = "[object Proxy]";
function Jo(e) {
  if (!yn(e))
    return !1;
  var t = vn(e);
  return t == Zo || t == Ko || t == Go || t == qo;
}
var Qe = ut["__core-js_shared__"], Ft = function() {
  var e = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qo(e) {
  return !!Ft && Ft in e;
}
var Yo = Function.prototype, Xo = Yo.toString;
function es(e) {
  if (e != null) {
    try {
      return Xo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ts = /[\\^$.*+?()[\]{}|]/g, ns = /^\[object .+?Constructor\]$/, os = Function.prototype, ss = Object.prototype, is = os.toString, ls = ss.hasOwnProperty, as = RegExp(
  "^" + is.call(ls).replace(ts, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rs(e) {
  if (!yn(e) || Qo(e))
    return !1;
  var t = Jo(e) ? as : ns;
  return t.test(es(e));
}
function us(e, t) {
  return e?.[t];
}
function wn(e, t) {
  var n = us(e, t);
  return rs(n) ? n : void 0;
}
function cs(e, t) {
  return e === t || e !== e && t !== t;
}
var ds = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hs = /^\w*$/;
function fs(e, t) {
  if (dt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ct(e) ? !0 : hs.test(e) || !ds.test(e) || t != null && e in Object(t);
}
var Ce = wn(Object, "create");
function ps() {
  this.__data__ = Ce ? Ce(null) : {}, this.size = 0;
}
function vs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var gs = "__lodash_hash_undefined__", ys = Object.prototype, ws = ys.hasOwnProperty;
function ms(e) {
  var t = this.__data__;
  if (Ce) {
    var n = t[e];
    return n === gs ? void 0 : n;
  }
  return ws.call(t, e) ? t[e] : void 0;
}
var bs = Object.prototype, _s = bs.hasOwnProperty;
function ks(e) {
  var t = this.__data__;
  return Ce ? t[e] !== void 0 : _s.call(t, e);
}
var Cs = "__lodash_hash_undefined__";
function Ls(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ce && t === void 0 ? Cs : t, this;
}
function oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oe.prototype.clear = ps;
oe.prototype.delete = vs;
oe.prototype.get = ms;
oe.prototype.has = ks;
oe.prototype.set = Ls;
function Ss() {
  this.__data__ = [], this.size = 0;
}
function Ve(e, t) {
  for (var n = e.length; n--; )
    if (cs(e[n][0], t))
      return n;
  return -1;
}
var xs = Array.prototype, Os = xs.splice;
function zs(e) {
  var t = this.__data__, n = Ve(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Os.call(t, n, 1), --this.size, !0;
}
function Ws(e) {
  var t = this.__data__, n = Ve(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Is(e) {
  return Ve(this.__data__, e) > -1;
}
function js(e, t) {
  var n = this.__data__, o = Ve(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function ve(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ve.prototype.clear = Ss;
ve.prototype.delete = zs;
ve.prototype.get = Ws;
ve.prototype.has = Is;
ve.prototype.set = js;
var Ps = wn(ut, "Map");
function Ts() {
  this.size = 0, this.__data__ = {
    hash: new oe(),
    map: new (Ps || ve)(),
    string: new oe()
  };
}
function Ms(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ue(e, t) {
  var n = e.__data__;
  return Ms(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ns(e) {
  var t = Ue(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function $s(e) {
  return Ue(this, e).get(e);
}
function Es(e) {
  return Ue(this, e).has(e);
}
function Ds(e, t) {
  var n = Ue(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ie.prototype.clear = Ts;
ie.prototype.delete = Ns;
ie.prototype.get = $s;
ie.prototype.has = Es;
ie.prototype.set = Ds;
var Fs = "Expected a function";
function ht(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fs);
  var n = function() {
    var o = arguments, l = t ? t.apply(this, o) : o[0], c = n.cache;
    if (c.has(l))
      return c.get(l);
    var u = e.apply(this, o);
    return n.cache = c.set(l, u) || c, u;
  };
  return n.cache = new (ht.Cache || ie)(), n;
}
ht.Cache = ie;
var As = 500;
function Bs(e) {
  var t = ht(e, function(o) {
    return n.size === As && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Rs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hs = /\\(\\)?/g, Vs = Bs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Rs, function(n, o, l, c) {
    t.push(l ? c.replace(Hs, "$1") : o || n);
  }), t;
});
function Us(e) {
  return e == null ? "" : gn(e);
}
function Gs(e, t) {
  return dt(e) ? e : fs(e, t) ? [e] : Vs(Us(e));
}
function Zs(e) {
  if (typeof e == "string" || ct(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ks(e, t) {
  t = Gs(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Zs(t[n++])];
  return n && n == o ? e : void 0;
}
function qs(e, t, n) {
  var o = e == null ? void 0 : Ks(e, t);
  return o === void 0 ? n : o;
}
function Js(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
const mn = (e) => e === void 0, At = (e) => typeof e == "boolean", se = (e) => typeof e == "number", ot = (e) => typeof Element > "u" ? !1 : e instanceof Element, Qs = (e) => ne(e) ? !Number.isNaN(Number(e)) : !1;
var Bt;
const le = typeof window < "u", Ys = (e) => typeof e == "string", Xs = () => {
};
le && ((Bt = window?.navigator) != null && Bt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ft(e) {
  return typeof e == "function" ? e() : s(e);
}
function ei(e) {
  return e;
}
function pt(e) {
  return co() ? (ho(e), !0) : !1;
}
function ti(e, t = !0) {
  ce() ? Re(e) : t ? e() : on(e);
}
function bn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, l = k(!1);
  let c = null;
  function u() {
    c && (clearTimeout(c), c = null);
  }
  function f() {
    l.value = !1, u();
  }
  function y(...b) {
    u(), l.value = !0, c = setTimeout(() => {
      l.value = !1, c = null, e(...b);
    }, ft(t));
  }
  return o && (l.value = !0, le && y()), pt(f), {
    isPending: uo(l),
    start: y,
    stop: f
  };
}
function _n(e) {
  var t;
  const n = ft(e);
  return (t = n?.$el) != null ? t : n;
}
const kn = le ? window : void 0;
function Cn(...e) {
  let t, n, o, l;
  if (Ys(e[0]) || Array.isArray(e[0]) ? ([n, o, l] = e, t = kn) : [t, n, o, l] = e, !t)
    return Xs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const c = [], u = () => {
    c.forEach((g) => g()), c.length = 0;
  }, f = (g, S, I, P) => (g.addEventListener(S, I, P), () => g.removeEventListener(S, I, P)), y = He(() => [_n(t), ft(l)], ([g, S]) => {
    u(), g && c.push(...n.flatMap((I) => o.map((P) => f(g, I, P, S))));
  }, { immediate: !0, flush: "post" }), b = () => {
    y(), u();
  };
  return pt(b), b;
}
function ni(e, t = !1) {
  const n = k(), o = () => n.value = !!e();
  return o(), ti(o, t), n;
}
const Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ht = "__vueuse_ssr_handlers__";
Rt[Ht] = Rt[Ht] || {};
var Vt = Object.getOwnPropertySymbols, oi = Object.prototype.hasOwnProperty, si = Object.prototype.propertyIsEnumerable, ii = (e, t) => {
  var n = {};
  for (var o in e)
    oi.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Vt)
    for (var o of Vt(e))
      t.indexOf(o) < 0 && si.call(e, o) && (n[o] = e[o]);
  return n;
};
function li(e, t, n = {}) {
  const o = n, { window: l = kn } = o, c = ii(o, ["window"]);
  let u;
  const f = ni(() => l && "ResizeObserver" in l), y = () => {
    u && (u.disconnect(), u = void 0);
  }, b = He(() => _n(e), (S) => {
    y(), f.value && l && S && (u = new ResizeObserver(t), u.observe(S, c));
  }, { immediate: !0, flush: "post" }), g = () => {
    y(), b();
  };
  return pt(g), {
    isSupported: f,
    stop: g
  };
}
var Ut;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ut || (Ut = {}));
var ai = Object.defineProperty, Gt = Object.getOwnPropertySymbols, ri = Object.prototype.hasOwnProperty, ui = Object.prototype.propertyIsEnumerable, Zt = (e, t, n) => t in e ? ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ci = (e, t) => {
  for (var n in t || (t = {}))
    ri.call(t, n) && Zt(e, n, t[n]);
  if (Gt)
    for (var n of Gt(t))
      ui.call(t, n) && Zt(e, n, t[n]);
  return e;
};
const di = {
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
ci({
  linear: ei
}, di);
const Kt = {
  current: 0
}, qt = k(0), Ln = 2e3, Jt = Symbol("elZIndexContextKey"), Sn = Symbol("zIndexContextKey"), hi = (e) => {
  const t = ce() ? ee(Jt, Kt) : Kt, n = e || (ce() ? ee(Sn, void 0) : void 0), o = m(() => {
    const u = s(n);
    return se(u) ? u : Ln;
  }), l = m(() => o.value + qt.value), c = () => (t.current++, qt.value = t.current, l.value);
  return !le && ee(Jt), {
    initialZIndex: o,
    currentZIndex: l,
    nextZIndex: c
  };
};
var fi = {
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
const pi = (e) => (t, n) => vi(t, n, s(e)), vi = (e, t, n) => qs(n, e, e).replace(/\{(\w+)\}/g, (o, l) => {
  var c;
  return `${(c = t?.[l]) != null ? c : `{${l}}`}`;
}), gi = (e) => {
  const t = m(() => s(e).name), n = tt(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: pi(e)
  };
}, xn = Symbol("localeContextKey"), yi = (e) => {
  const t = e || ee(xn, k());
  return gi(m(() => t.value || fi));
}, On = "__epPropKey", D = (e) => e, wi = (e) => fn(e) && !!e[On], zn = (e, t) => {
  if (!fn(e) || wi(e))
    return e;
  const { values: n, required: o, default: l, type: c, validator: u } = e, y = {
    type: c,
    required: !!o,
    validator: n || u ? (b) => {
      let g = !1, S = [];
      if (n && (S = Array.from(n), Nt(e, "default") && S.push(l), g || (g = S.includes(b))), u && (g || (g = u(b))), !g && S.length > 0) {
        const I = [...new Set(S)].map((P) => JSON.stringify(P)).join(", ");
        fo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(b)}.`);
      }
      return g;
    } : void 0,
    [On]: !0
  };
  return Nt(e, "default") && (y.default = l), y;
}, ge = (e) => Js(Object.entries(e).map(([t, n]) => [
  t,
  zn(n, t)
])), mi = ["", "default", "small", "large"], bi = zn({
  type: String,
  values: mi,
  required: !1
}), _i = Symbol("size"), ki = Symbol("emptyValuesContextKey"), Ci = ge({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => ke(e) ? !e() : !e
  }
}), Qt = (e) => Object.keys(e), De = k();
function Wn(e, t = void 0) {
  return ce() ? ee(dn, De) : De;
}
function In(e, t) {
  const n = Wn(), o = rt(e, m(() => {
    var f;
    return ((f = n.value) == null ? void 0 : f.namespace) || Ie;
  })), l = yi(m(() => {
    var f;
    return (f = n.value) == null ? void 0 : f.locale;
  })), c = hi(m(() => {
    var f;
    return ((f = n.value) == null ? void 0 : f.zIndex) || Ln;
  })), u = m(() => {
    var f;
    return s(t) || ((f = n.value) == null ? void 0 : f.size) || "";
  });
  return jn(m(() => s(n) || {})), {
    ns: o,
    locale: l,
    zIndex: c,
    size: u
  };
}
const jn = (e, t, n = !1) => {
  var o;
  const l = !!ce(), c = l ? Wn() : void 0, u = (o = void 0) != null ? o : l ? po : void 0;
  if (!u)
    return;
  const f = m(() => {
    const y = s(e);
    return c?.value ? Li(c.value, y) : y;
  });
  return u(dn, f), u(xn, m(() => f.value.locale)), u(hn, m(() => f.value.namespace)), u(Sn, m(() => f.value.zIndex)), u(_i, {
    size: m(() => f.value.size || "")
  }), u(ki, m(() => ({
    emptyValues: f.value.emptyValues,
    valueOnClear: f.value.valueOnClear
  }))), (n || !De.value) && (De.value = f.value), f;
}, Li = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Qt(e), ...Qt(t)])], o = {};
  for (const l of n)
    o[l] = t[l] !== void 0 ? t[l] : e[l];
  return o;
};
var Ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function st(e, t = "px") {
  if (!e)
    return "";
  if (se(e) || Qs(e))
    return `${e}${t}`;
  if (ne(e))
    return e;
}
const Pn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Tn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Si = ge({
  size: {
    type: D([Number, String])
  },
  color: {
    type: String
  }
}), xi = N({
  name: "ElIcon",
  inheritAttrs: !1
}), Oi = /* @__PURE__ */ N({
  ...xi,
  props: Si,
  setup(e) {
    const t = e, n = rt("icon"), o = m(() => {
      const { size: l, color: c } = t;
      return !l && !c ? {} : {
        fontSize: mn(l) ? void 0 : st(l),
        "--color": c
      };
    });
    return (l, c) => (_(), O("i", vo({
      class: s(n).b(),
      style: s(o)
    }, l.$attrs), [
      de(l.$slots, "default")
    ], 16));
  }
});
var zi = /* @__PURE__ */ Ge(Oi, [["__file", "icon.vue"]]);
const Fe = Pn(zi);
/*! Element Plus Icons Vue v2.3.1 */
var Wi = /* @__PURE__ */ N({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ii = Wi, ji = /* @__PURE__ */ N({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Mn = ji, Pi = /* @__PURE__ */ N({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ti = Pi, Mi = /* @__PURE__ */ N({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ni = Mi, $i = /* @__PURE__ */ N({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ei = $i;
const Nn = D([
  String,
  Object,
  Function
]), Di = {
  Close: Mn
}, Fi = {
  Close: Mn
}, Ae = {
  success: Ni,
  warning: Ei,
  error: Ii,
  info: Ti
}, Ai = (e) => e, je = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Bi = ge({
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
    type: D([String, Object, Array])
  },
  offset: {
    type: D(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ri = N({
  name: "ElBadge"
}), Hi = /* @__PURE__ */ N({
  ...Ri,
  props: Bi,
  setup(e, { expose: t }) {
    const n = e, o = rt("badge"), l = m(() => n.isDot ? "" : se(n.value) && se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), c = m(() => {
      var u, f, y, b, g;
      return [
        {
          backgroundColor: n.color,
          marginRight: st(-((f = (u = n.offset) == null ? void 0 : u[0]) != null ? f : 0)),
          marginTop: st((b = (y = n.offset) == null ? void 0 : y[1]) != null ? b : 0)
        },
        (g = n.badgeStyle) != null ? g : {}
      ];
    });
    return t({
      content: l
    }), (u, f) => (_(), O("div", {
      class: L(s(o).b())
    }, [
      de(u.$slots, "default"),
      d(lt, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: te(() => [
          V(a("sup", {
            class: L([
              s(o).e("content"),
              s(o).em("content", u.type),
              s(o).is("fixed", !!u.$slots.default),
              s(o).is("dot", u.isDot),
              s(o).is("hide-zero", !u.showZero && n.value === 0),
              u.badgeClass
            ]),
            style: Pe(s(c))
          }, [
            de(u.$slots, "content", { value: s(l) }, () => [
              T(j(s(l)), 1)
            ])
          ], 6), [
            [Te, !u.hidden && (s(l) || u.isDot || u.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Vi = /* @__PURE__ */ Ge(Hi, [["__file", "badge.vue"]]);
const Ui = Pn(Vi), Gi = ge({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: D(Object)
  },
  size: bi,
  button: {
    type: D(Object)
  },
  experimentalFeatures: {
    type: D(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: D(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ci
}), H = {};
N({
  name: "ElConfigProvider",
  props: Gi,
  setup(e, { slots: t }) {
    He(() => e.message, (o) => {
      Object.assign(H, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = jn(e);
    return () => de(t, "default", { config: n?.value });
  }
});
const $n = ["success", "info", "warning", "error"], M = Ai({
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
  appendTo: le ? document.body : void 0
}), Zi = ge({
  customClass: {
    type: String,
    default: M.customClass
  },
  center: {
    type: Boolean,
    default: M.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: M.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: M.duration
  },
  icon: {
    type: Nn,
    default: M.icon
  },
  id: {
    type: String,
    default: M.id
  },
  message: {
    type: D([
      String,
      Object,
      Function
    ]),
    default: M.message
  },
  onClose: {
    type: D(Function),
    default: M.onClose
  },
  showClose: {
    type: Boolean,
    default: M.showClose
  },
  type: {
    type: String,
    values: $n,
    default: M.type
  },
  plain: {
    type: Boolean,
    default: M.plain
  },
  offset: {
    type: Number,
    default: M.offset
  },
  zIndex: {
    type: Number,
    default: M.zIndex
  },
  grouping: {
    type: Boolean,
    default: M.grouping
  },
  repeatNum: {
    type: Number,
    default: M.repeatNum
  }
}), Ki = {
  destroy: () => !0
}, U = go([]), qi = (e) => {
  const t = U.findIndex((l) => l.id === e), n = U[t];
  let o;
  return t > 0 && (o = U[t - 1]), { current: n, prev: o };
}, Ji = (e) => {
  const { prev: t } = qi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Qi = (e, t) => U.findIndex((o) => o.id === e) > 0 ? 16 : t, Yi = N({
  name: "ElMessage"
}), Xi = /* @__PURE__ */ N({
  ...Yi,
  props: Zi,
  emits: Ki,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Fi, { ns: l, zIndex: c } = In("message"), { currentZIndex: u, nextZIndex: f } = c, y = k(), b = k(!1), g = k(0);
    let S;
    const I = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = m(() => {
      const z = n.type;
      return { [l.bm("icon", z)]: z && Ae[z] };
    }), $ = m(() => n.icon || Ae[n.type] || ""), v = m(() => Ji(n.id)), w = m(() => Qi(n.id, n.offset) + v.value), x = m(() => g.value + w.value), G = m(() => ({
      top: `${w.value}px`,
      zIndex: u.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: S } = bn(() => {
        Z();
      }, n.duration));
    }
    function A() {
      S?.();
    }
    function Z() {
      b.value = !1;
    }
    function ae({ code: z }) {
      z === je.esc && Z();
    }
    return Re(() => {
      C(), f(), b.value = !0;
    }), He(() => n.repeatNum, () => {
      A(), C();
    }), Cn(document, "keydown", ae), li(y, () => {
      g.value = y.value.getBoundingClientRect().height;
    }), t({
      visible: b,
      bottom: x,
      close: Z
    }), (z, ye) => (_(), J(lt, {
      name: s(l).b("fade"),
      onBeforeLeave: z.onClose,
      onAfterLeave: (q) => z.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        V(a("div", {
          id: z.id,
          ref_key: "messageRef",
          ref: y,
          class: L([
            s(l).b(),
            { [s(l).m(z.type)]: z.type },
            s(l).is("center", z.center),
            s(l).is("closable", z.showClose),
            s(l).is("plain", z.plain),
            z.customClass
          ]),
          style: Pe(s(G)),
          role: "alert",
          onMouseenter: A,
          onMouseleave: C
        }, [
          z.repeatNum > 1 ? (_(), J(s(Ui), {
            key: 0,
            value: z.repeatNum,
            type: s(I),
            class: L(s(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : B("v-if", !0),
          s($) ? (_(), J(s(Fe), {
            key: 1,
            class: L([s(l).e("icon"), s(P)])
          }, {
            default: te(() => [
              (_(), J(sn(s($))))
            ]),
            _: 1
          }, 8, ["class"])) : B("v-if", !0),
          de(z.$slots, "default", {}, () => [
            z.dangerouslyUseHTMLString ? (_(), O(at, { key: 1 }, [
              B(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: L(s(l).e("content")),
                innerHTML: z.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), O("p", {
              key: 0,
              class: L(s(l).e("content"))
            }, j(z.message), 3))
          ]),
          z.showClose ? (_(), J(s(Fe), {
            key: 2,
            class: L(s(l).e("closeBtn")),
            onClick: Me(Z, ["stop"])
          }, {
            default: te(() => [
              d(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : B("v-if", !0)
        ], 46, ["id"]), [
          [Te, b.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var el = /* @__PURE__ */ Ge(Xi, [["__file", "message.vue"]]);
let tl = 1;
const En = (e) => {
  const t = !e || ne(e) || _e(e) || ke(e) ? { message: e } : e, n = {
    ...M,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ne(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    ot(o) || (o = document.body), n.appendTo = o;
  }
  return At(H.grouping) && !n.grouping && (n.grouping = H.grouping), se(H.duration) && n.duration === 3e3 && (n.duration = H.duration), se(H.offset) && n.offset === 16 && (n.offset = H.offset), At(H.showClose) && !n.showClose && (n.showClose = H.showClose), n;
}, nl = (e) => {
  const t = U.indexOf(e);
  if (t === -1)
    return;
  U.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ol = ({ appendTo: e, ...t }, n) => {
  const o = `message_${tl++}`, l = t.onClose, c = document.createElement("div"), u = {
    ...t,
    id: o,
    onClose: () => {
      l?.(), nl(g);
    },
    onDestroy: () => {
      Ne(null, c);
    }
  }, f = d(el, u, ke(u.message) || _e(u.message) ? {
    default: ke(u.message) ? u.message : () => u.message
  } : null);
  f.appContext = n || fe._context, Ne(f, c), e.appendChild(c.firstElementChild);
  const y = f.component, g = {
    id: o,
    vnode: f,
    vm: y,
    handler: {
      close: () => {
        y.exposed.visible.value = !1;
      }
    },
    props: f.component.props
  };
  return g;
}, fe = (e = {}, t) => {
  if (!le)
    return { close: () => {
    } };
  const n = En(e);
  if (n.grouping && U.length) {
    const l = U.find(({ vnode: c }) => {
      var u;
      return ((u = c.props) == null ? void 0 : u.message) === n.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = n.type, l.handler;
  }
  if (se(H.max) && U.length >= H.max)
    return { close: () => {
    } };
  const o = ol(n, t);
  return U.push(o), o.handler;
};
$n.forEach((e) => {
  fe[e] = (t = {}, n) => {
    const o = En(t);
    return fe({ ...o, type: e }, n);
  };
});
function sl(e) {
  for (const t of U)
    (!e || e === t.props.type) && t.handler.close();
}
fe.closeAll = sl;
fe._context = null;
const il = Tn(fe, "$message"), Dn = [
  "success",
  "info",
  "warning",
  "error"
], ll = ge({
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
    type: Nn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: D([
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
    type: D(Function),
    default: () => {
    }
  },
  onClose: {
    type: D(Function),
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
    values: [...Dn, ""],
    default: ""
  },
  zIndex: Number
}), al = {
  destroy: () => !0
}, rl = N({
  name: "ElNotification"
}), ul = /* @__PURE__ */ N({
  ...rl,
  props: ll,
  emits: al,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: l } = In("notification"), { nextZIndex: c, currentZIndex: u } = l, { Close: f } = Di, y = k(!1);
    let b;
    const g = m(() => {
      const C = n.type;
      return C && Ae[n.type] ? o.m(C) : "";
    }), S = m(() => n.type && Ae[n.type] || n.icon), I = m(() => n.position.endsWith("right") ? "right" : "left"), P = m(() => n.position.startsWith("top") ? "top" : "bottom"), $ = m(() => {
      var C;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : u.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: b } = bn(() => {
        y.value && x();
      }, n.duration));
    }
    function w() {
      b?.();
    }
    function x() {
      y.value = !1;
    }
    function G({ code: C }) {
      C === je.delete || C === je.backspace ? w() : C === je.esc ? y.value && x() : v();
    }
    return Re(() => {
      v(), c(), y.value = !0;
    }), Cn(document, "keydown", G), t({
      visible: y,
      close: x
    }), (C, A) => (_(), J(lt, {
      name: s(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (Z) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        V(a("div", {
          id: C.id,
          class: L([s(o).b(), C.customClass, s(I)]),
          style: Pe(s($)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: v,
          onClick: C.onClick
        }, [
          s(S) ? (_(), J(s(Fe), {
            key: 0,
            class: L([s(o).e("icon"), s(g)])
          }, {
            default: te(() => [
              (_(), J(sn(s(S))))
            ]),
            _: 1
          }, 8, ["class"])) : B("v-if", !0),
          a("div", {
            class: L(s(o).e("group"))
          }, [
            a("h2", {
              class: L(s(o).e("title")),
              textContent: j(C.title)
            }, null, 10, ["textContent"]),
            V(a("div", {
              class: L(s(o).e("content")),
              style: Pe(C.title ? void 0 : { margin: 0 })
            }, [
              de(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (_(), O(at, { key: 1 }, [
                  B(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), O("p", { key: 0 }, j(C.message), 1))
              ])
            ], 6), [
              [Te, C.message]
            ]),
            C.showClose ? (_(), J(s(Fe), {
              key: 0,
              class: L(s(o).e("closeBtn")),
              onClick: Me(x, ["stop"])
            }, {
              default: te(() => [
                d(s(f))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : B("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Te, y.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var cl = /* @__PURE__ */ Ge(ul, [["__file", "notification.vue"]]);
const Be = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, it = 16;
let dl = 1;
const pe = function(e = {}, t) {
  if (!le)
    return { close: () => {
    } };
  (ne(e) || _e(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Be[n].forEach(({ vm: g }) => {
    var S;
    o += (((S = g.el) == null ? void 0 : S.offsetHeight) || 0) + it;
  }), o += it;
  const l = `notification_${dl++}`, c = e.onClose, u = {
    ...e,
    offset: o,
    id: l,
    onClose: () => {
      hl(l, n, c);
    }
  };
  let f = document.body;
  ot(e.appendTo) ? f = e.appendTo : ne(e.appendTo) && (f = document.querySelector(e.appendTo)), ot(f) || (f = document.body);
  const y = document.createElement("div"), b = d(cl, u, ke(u.message) ? u.message : _e(u.message) ? () => u.message : null);
  return b.appContext = mn(t) ? pe._context : t, b.props.onDestroy = () => {
    Ne(null, y);
  }, Ne(b, y), Be[n].push({ vm: b }), f.appendChild(y.firstElementChild), {
    close: () => {
      b.component.exposed.visible.value = !1;
    }
  };
};
Dn.forEach((e) => {
  pe[e] = (t = {}, n) => ((ne(t) || _e(t)) && (t = {
    message: t
  }), pe({ ...t, type: e }, n));
});
function hl(e, t, n) {
  const o = Be[t], l = o.findIndex(({ vm: b }) => {
    var g;
    return ((g = b.component) == null ? void 0 : g.props.id) === e;
  });
  if (l === -1)
    return;
  const { vm: c } = o[l];
  if (!c)
    return;
  n?.(c);
  const u = c.el.offsetHeight, f = t.split("-")[0];
  o.splice(l, 1);
  const y = o.length;
  if (!(y < 1))
    for (let b = l; b < y; b++) {
      const { el: g, component: S } = o[b].vm, I = Number.parseInt(g.style[f], 10) - u - it;
      S.props.offset = I;
    }
}
function fl() {
  for (const e of Object.values(Be))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
pe.closeAll = fl;
pe._context = null;
const pl = Tn(pe, "$notify"), W = {
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
      duration: l = 3e3,
      showClose: c = !1
    } = e;
    o === "center" ? il({
      message: t,
      type: n,
      duration: l,
      showClose: c,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : pl({
      message: t,
      type: n,
      position: o,
      duration: l,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: `app-toast app-toast--corner app-toast--${n}`
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
}, vl = () => ({
  mode: "folder",
  fixedImagePath: null,
  folderPath: null,
  scheduleEnabled: !1,
  intervalMinutes: 30,
  order: "random",
  fitMode: "fillCrop",
  autoRestore: !0,
  wallhavenSource: "hot",
  wallhavenCategory: "general",
  wallhavenQuery: null,
  lastFolderIndex: 0
}), gl = (e) => e ? /^https?:\/\//i.test(e) ? e : Lo(e) : "", yl = () => r("wallpaper_get_config"), Ye = (e) => r("wallpaper_save_config", { config: e }), Yt = () => r("wallpaper_get_status"), Xt = (e) => r("wallpaper_scan_folder", { path: e }), wl = (e) => r("wallpaper_set_fixed_image", { path: e }), ml = () => r("wallpaper_switch_now"), bl = (e) => r("wallpaper_fetch_wallhaven", { params: e }), _l = (e) => r("wallpaper_set_wallhaven_image", { wallpaper: e }), kl = (e) => r("wallpaper_download_wallhaven_image", { wallpaper: e }), Cl = () => r("wallpaper_clear_cache"), Ll = () => r("wallpaper_open_cache_dir");
var Sl = {
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
function xl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ol(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], l = [], c = t.theme || n.theme;
  switch (c) {
    case "outline":
      l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push("none"), l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push("none");
      break;
    case "filled":
      l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push("#FFF"), l.push("#FFF");
      break;
    case "two-tone":
      l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      l.push(typeof o[0] == "string" ? o[0] : "currentColor"), l.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), l.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), l.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: l,
    id: e
  };
}
var zl = Symbol("icon-context");
function F(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(c) {
      var u = xl(), f = ee(zl, Sl);
      return function() {
        var y = c.size, b = c.strokeWidth, g = c.strokeLinecap, S = c.strokeLinejoin, I = c.theme, P = c.fill, $ = c.spin, v = Ol(u, {
          size: y,
          strokeWidth: b,
          strokeLinecap: g,
          strokeLinejoin: S,
          theme: I,
          fill: P
        }, f), w = [f.prefix + "-icon"];
        return w.push(f.prefix + "-icon-" + e), t && f.rtl && w.push(f.prefix + "-icon-rtl"), $ && w.push(f.prefix + "-icon-spin"), d("span", {
          class: w.join(" ")
        }, [n(v)]);
      };
    }
  };
  return o;
}
const Wl = F("back", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xe = F("close-small", !1, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Il = F("computer", !1, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), d("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jl = F("delete", !1, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pl = F("download", !1, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), en = F("folder-open", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Tl = F("lightning", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), et = F("picture", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ml = F("picture-album", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nl = F("preview-open", !1, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), tn = F("refresh", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $l = F("save", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), d("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), nn = F("search", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), El = { class: "wallpaper-window" }, Dl = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Fl = {
  key: 0,
  class: "title"
}, Al = {
  key: 1,
  class: "title"
}, Bl = {
  key: 2,
  class: "window-actions"
}, Rl = {
  key: 3,
  class: "window-actions"
}, Hl = { class: "source-toggle" }, Vl = {
  key: 0,
  class: "unsupported"
}, Ul = { class: "top-panel" }, Gl = { class: "preview" }, Zl = ["src"], Kl = {
  key: 1,
  class: "preview-empty"
}, ql = { class: "status-panel" }, Jl = { class: "status-row" }, Ql = { class: "status-row" }, Yl = { class: "status-row" }, Xl = { class: "status-actions" }, ea = ["disabled"], ta = { class: "card settings-card" }, na = { class: "form-row mode-row" }, oa = { class: "segmented three" }, sa = { class: "form-row fixed-row" }, ia = { class: "form-row folder-row" }, la = { class: "hint-row" }, aa = { class: "form-row wallhaven-row" }, ra = { class: "segmented source" }, ua = { class: "hint-row" }, ca = { class: "card rules-card" }, da = { class: "rules-line" }, ha = { class: "switch-label" }, fa = { class: "number-label" }, pa = { class: "segmented mini" }, va = { class: "rules-line" }, ga = { class: "segmented fit" }, ya = { class: "checkbox-label" }, wa = { class: "footer-card" }, ma = { class: "cache-info" }, ba = { class: "footer-actions" }, _a = ["disabled"], ka = ["disabled"], Ca = ["disabled"], La = {
  key: 2,
  class: "wallhaven-view"
}, Sa = { class: "filters" }, xa = { class: "search-box" }, Oa = { class: "resolution" }, za = { class: "chips" }, Wa = { class: "source-select" }, Ia = { class: "grid-wrap" }, ja = {
  key: 0,
  class: "empty-state"
}, Pa = {
  key: 1,
  class: "empty-state"
}, Ta = {
  key: 2,
  class: "wallpaper-grid"
}, Ma = ["onClick"], Na = { class: "thumb" }, $a = {
  key: 0,
  class: "thumb-skeleton"
}, Ea = ["alt", "onLoad"], Da = ["onClick"], Fa = ["disabled", "onClick"], Aa = ["disabled", "onClick"], Ba = { class: "pager" }, Ra = { class: "source-note" }, Ha = { class: "pager-actions" }, Va = ["disabled"], Ua = ["disabled"], Ga = { class: "preview-dialog" }, Za = { class: "preview-image-wrap" }, Ka = {
  key: 0,
  class: "preview-skeleton"
}, qa = {
  key: 1,
  class: "preview-error"
}, Ja = ["src"], Qa = ["disabled"], Ya = ["disabled"], Xa = /* @__PURE__ */ N({
  __name: "index",
  setup(e) {
    const t = un(), n = k(vl()), o = k(null), l = k(null), c = k(!1), u = k(!1), f = k(!1), y = k("switcher"), b = k([]), g = k(1), S = k(1), I = k(!1), P = k(!1), $ = k(""), v = k("general"), w = k("hot"), x = k(null), G = k(!1), C = k(!1), A = k(/* @__PURE__ */ new Set()), Z = k(/* @__PURE__ */ new Set()), ae = k(!1), z = k(!1), ye = /* @__PURE__ */ new Map();
    let q = null, vt = null, gt = null;
    const yt = m(() => gl(o.value?.currentPath)), wt = m(() => "2560 × 1440"), Fn = m(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), An = m(() => {
      const h = o.value?.nextSwitchAt;
      if (!h) return "18 分钟后";
      const i = Math.max(0, h - Math.floor(Date.now() / 1e3));
      return i < 60 ? `${i} 秒后` : `${Math.ceil(i / 60)} 分钟后`;
    }), Bn = m(() => {
      const h = o.value?.cacheSizeBytes ?? 0;
      return h > 0 ? ro(h) : "320 MB";
    }), mt = m(() => l.value ? `检测到 ${l.value.count} 张可用图片` : "检测到 128 张可用图片"), Rn = m(() => "2560×1440"), Hn = m(() => w.value === "hot" ? "Hot" : "Toplist"), Ze = m(() => b.value.slice(0, 8)), Vn = (h) => {
      const i = h.trim(), p = i.toLocaleLowerCase();
      return ["natural", "naturally", "nature", "自然", "风景"].includes(p) ? "nature" : ["landscape", "scenery"].includes(p) ? "nature landscape" : i;
    }, Un = m(() => {
      const h = Vn($.value);
      return v.value === "nature" ? h ? `${h} nature` : "nature" : h || null;
    }), Gn = m(() => v.value === "nature" ? "general" : v.value), bt = async () => {
      c.value = !0;
      try {
        const [h, i] = await Promise.all([
          yl(),
          Yt()
        ]);
        if (n.value = h, o.value = i, h.folderPath)
          try {
            l.value = await Xt(h.folderPath);
          } catch {
            l.value = null;
          }
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        c.value = !1;
      }
    }, Y = async () => {
      try {
        o.value = await Yt();
      } catch (h) {
        W.msg(String(h), "error");
      }
    }, _t = async () => {
      u.value = !0;
      try {
        await Ye(n.value), await Y(), W.msg("壁纸设置已保存", "success");
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        u.value = !1;
      }
    }, Zn = async () => {
      const h = await Mt({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof h == "string") {
        n.value.fixedImagePath = h, n.value.mode = "fixed";
        try {
          await wl(h), await bt(), W.msg("已设置固定壁纸", "success");
        } catch (i) {
          W.msg(String(i), "error");
        }
      }
    }, Kn = async () => {
      const h = await Mt({ multiple: !1, directory: !0 });
      typeof h == "string" && (n.value.folderPath = h, n.value.mode = "folder", await kt());
    }, kt = async () => {
      if (!n.value.folderPath) {
        W.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        l.value = await Xt(n.value.folderPath), l.value.count === 0 ? W.msg("文件夹中没有可用图片", "warning") : W.msg(mt.value, "success");
      } catch (h) {
        W.msg(String(h), "error");
      }
    }, qn = async () => {
      f.value = !0;
      try {
        await Ye(n.value), await ml(), await Y(), W.msg("壁纸已切换", "success");
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        f.value = !1;
      }
    }, Jn = async () => {
      if (!o.value?.currentPath) {
        W.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await _t();
    }, Ct = async () => {
      $.value = n.value.wallhavenQuery ?? "", v.value = n.value.wallhavenCategory || "general", w.value = n.value.wallhavenSource, y.value = "wallhaven", P.value || await re(1);
    }, Qn = async () => {
      y.value = "switcher", Ke(), await Y();
    }, Lt = (h) => {
      x.value = h, G.value = !0, C.value = !1;
    }, Ke = () => {
      x.value = null, G.value = !1, C.value = !1;
    }, Yn = () => {
      G.value = !1;
    }, Xn = () => {
      G.value = !1, C.value = !0;
    }, Le = (h, i) => {
      const p = new Set(A.value);
      i ? p.add(h) : p.delete(h), A.value = p;
    }, eo = (h) => {
      const i = new Set(Z.value);
      i.add(h), Z.value = i;
    }, to = (h, i) => {
      if (!(i instanceof HTMLImageElement)) {
        ye.delete(h.id);
        return;
      }
      if (ye.set(h.id, i), !q) {
        i.src = h.thumbs.large;
        return;
      }
      i.dataset.src = h.thumbs.large, q.observe(i);
    }, no = () => {
      Z.value = /* @__PURE__ */ new Set(), ye.clear();
    }, oo = async () => {
      n.value.wallhavenQuery = $.value.trim() || null, n.value.wallhavenCategory = v.value, n.value.wallhavenSource = w.value, n.value.mode = "wallhaven", await Ye(n.value);
    }, re = async (h = g.value) => {
      I.value = !0;
      try {
        await oo();
        const i = await bl({
          source: w.value,
          page: h,
          query: Un.value,
          category: Gn.value
        });
        no(), b.value = i.data, g.value = i.page, S.value = Math.max(1, i.lastPage), P.value = !0, await on();
        for (const p of ye.values())
          q && q.observe(p);
      } catch (i) {
        W.msg(String(i), "error");
      } finally {
        I.value = !1;
      }
    }, Se = () => re(1), St = async (h) => {
      w.value = h, await re(1);
    }, xe = async (h) => {
      v.value = h, await re(1);
    }, xt = async (h) => {
      Le(h.id, !0);
      try {
        W.msg("正在设置壁纸...", "info"), await _l(h), await Y(), W.msg("壁纸已设置", "success");
      } catch (i) {
        W.msg(String(i), "error");
      } finally {
        Le(h.id, !1);
      }
    }, Ot = async (h) => {
      Le(h.id, !0);
      try {
        W.msg("正在下载壁纸...", "info"), await kl(h), await Y(), W.msg("壁纸已下载到缓存", "success");
      } catch (i) {
        W.msg(String(i), "error");
      } finally {
        Le(h.id, !1);
      }
    }, so = async () => {
      g.value <= 1 || await re(g.value - 1);
    }, io = async () => {
      g.value >= S.value || await re(g.value + 1);
    }, lo = async () => {
      ae.value = !0;
      try {
        await Cl(), await Y(), W.msg("缓存已清理", "success");
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        ae.value = !1;
      }
    }, ao = async () => {
      z.value = !0;
      try {
        await Ll();
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        z.value = !1;
      }
    }, zt = async () => {
      await t.close();
    }, ro = (h) => h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / 1024 / 1024).toFixed(1)} MB` : `${(h / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return Re(async () => {
      q = new IntersectionObserver(
        (h) => {
          for (const i of h) {
            if (!i.isIntersecting) continue;
            const p = i.target, K = p.dataset.src;
            K && p.src !== K && (p.src = K), q?.unobserve(p);
          }
        },
        { root: null, rootMargin: "120px" }
      ), await bt(), vt = await $e("wallpaper-switcher-changed", Y), gt = await $e("wallpaper-switcher-error", (h) => {
        W.msg(h.payload?.message || "定时切换失败", "error");
      });
    }), yo(() => {
      q?.disconnect(), q = null, vt?.(), gt?.();
    }), (h, i) => (_(), O("main", El, [
      a("header", Dl, [
        s(y) === "switcher" ? (_(), O("div", Fl, [
          d(s(et), { size: 20 }),
          i[26] || (i[26] = a(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ])) : (_(), O("div", Al, [
          a("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: Qn
          }, [
            d(s(Wl), { size: 22 })
          ]),
          i[27] || (i[27] = a(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ])),
        s(y) === "switcher" ? (_(), O("div", Bl, [
          a("button", {
            type: "button",
            class: "icon-btn online-entry-btn",
            title: "打开 Wallhaven 壁纸",
            onClick: Ct
          }, [
            d(s(Ml), { size: 20 })
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: zt
          }, [
            d(s(Xe), { size: 22 })
          ])
        ])) : (_(), O("div", Rl, [
          a("div", Hl, [
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(w) === "hot" }),
                onClick: i[0] || (i[0] = (p) => St("hot"))
              },
              "热门",
              2
              /* CLASS */
            ),
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(w) === "toplist" }),
                onClick: i[1] || (i[1] = (p) => St("toplist"))
              },
              "排行榜",
              2
              /* CLASS */
            )
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: zt
          }, [
            d(s(Xe), { size: 22 })
          ])
        ]))
      ]),
      s(o) && !s(o).supported ? (_(), O("section", Vl, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : B("v-if", !0),
      s(y) === "switcher" ? (_(), O(
        "div",
        {
          key: 1,
          class: L(["content", { dimmed: s(c) }])
        },
        [
          a("section", Ul, [
            a("div", Gl, [
              s(yt) ? (_(), O("img", {
                key: 0,
                src: s(yt),
                alt: "当前壁纸预览"
              }, null, 8, Zl)) : (_(), O("div", Kl, [
                d(s(et), { size: 42 }),
                i[28] || (i[28] = a(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            a("div", ql, [
              i[32] || (i[32] = a(
                "h2",
                null,
                "当前状态",
                -1
                /* HOISTED */
              )),
              a("div", Jl, [
                i[29] || (i[29] = a(
                  "span",
                  null,
                  "来源：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  j(s(Fn)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Ql, [
                i[30] || (i[30] = a(
                  "span",
                  null,
                  "分辨率：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  j(s(wt)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Yl, [
                i[31] || (i[31] = a(
                  "span",
                  null,
                  "下次切换：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  j(s(An)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Xl, [
                a("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(f),
                  onClick: qn
                }, [
                  d(s(Tl), { size: 17 }),
                  T(
                    " " + j(s(f) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, ea),
                a("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: Jn
                }, " 设为固定 ")
              ])
            ])
          ]),
          a("section", ta, [
            a("div", na, [
              i[33] || (i[33] = a(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              a("div", oa, [
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).mode === "fixed" }),
                    onClick: i[2] || (i[2] = (p) => s(n).mode = "fixed")
                  },
                  " 固定图片 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).mode === "folder" }),
                    onClick: i[3] || (i[3] = (p) => s(n).mode = "folder")
                  },
                  " 本地文件夹 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).mode === "wallhaven" }),
                    onClick: i[4] || (i[4] = (p) => s(n).mode = "wallhaven")
                  },
                  " Wallhaven 在线 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", sa, [
              i[35] || (i[35] = a(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              V(a(
                "input",
                {
                  "onUpdate:modelValue": i[5] || (i[5] = (p) => s(n).fixedImagePath = p),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers\\city.png",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Oe, s(n).fixedImagePath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Zn
              }, [
                d(s(et), { size: 16 }),
                i[34] || (i[34] = T(" 选择图片 "))
              ])
            ]),
            a("div", ia, [
              i[38] || (i[38] = a(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              V(a(
                "input",
                {
                  "onUpdate:modelValue": i[6] || (i[6] = (p) => s(n).folderPath = p),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Oe, s(n).folderPath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Kn
              }, [
                d(s(en), { size: 16 }),
                i[36] || (i[36] = T(" 选择 "))
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: kt
              }, [
                d(s(tn), { size: 16 }),
                i[37] || (i[37] = T(" 扫描 "))
              ])
            ]),
            a(
              "div",
              la,
              j(s(mt)),
              1
              /* TEXT */
            ),
            a("div", aa, [
              i[40] || (i[40] = a(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              i[41] || (i[41] = a(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              a("div", ra, [
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).wallhavenSource === "hot" }),
                    onClick: i[7] || (i[7] = (p) => s(n).wallhavenSource = "hot")
                  },
                  " 热门 Hot ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).wallhavenSource === "toplist" }),
                    onClick: i[8] || (i[8] = (p) => s(n).wallhavenSource = "toplist")
                  },
                  " 排行榜 Toplist ",
                  2
                  /* CLASS */
                )
              ]),
              a("button", {
                type: "button",
                class: "tool-btn grid-open",
                onClick: Ct
              }, [
                d(s(nn), { size: 16 }),
                i[39] || (i[39] = T(" 打开在线网格 "))
              ])
            ]),
            a("div", ua, [
              i[42] || (i[42] = a(
                "span",
                null,
                "屏幕匹配",
                -1
                /* HOISTED */
              )),
              a(
                "strong",
                null,
                j(s(wt)),
                1
                /* TEXT */
              )
            ])
          ]),
          a("section", ca, [
            i[50] || (i[50] = a(
              "h2",
              null,
              "切换规则",
              -1
              /* HOISTED */
            )),
            a("div", da, [
              a("label", ha, [
                V(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[9] || (i[9] = (p) => s(n).scheduleEnabled = p),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [Wt, s(n).scheduleEnabled]
                ]),
                i[43] || (i[43] = a(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                )),
                i[44] || (i[44] = T(" 启用定时切换 "))
              ]),
              a("label", fa, [
                i[45] || (i[45] = T(" 每 ")),
                V(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[10] || (i[10] = (p) => s(n).intervalMinutes = p),
                    type: "number",
                    min: "1",
                    max: "1440"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [
                    Oe,
                    s(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                i[46] || (i[46] = T(" 分钟 "))
              ]),
              i[47] || (i[47] = a(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              a("div", pa, [
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).order === "random" }),
                    onClick: i[11] || (i[11] = (p) => s(n).order = "random")
                  },
                  " 随机 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).order === "sequential" }),
                    onClick: i[12] || (i[12] = (p) => s(n).order = "sequential")
                  },
                  " 顺序 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", va, [
              i[49] || (i[49] = a(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              a("div", ga, [
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).fitMode === "fillCrop" }),
                    onClick: i[13] || (i[13] = (p) => s(n).fitMode = "fillCrop")
                  },
                  " 填充裁切 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).fitMode === "fit" }),
                    onClick: i[14] || (i[14] = (p) => s(n).fitMode = "fit")
                  },
                  " 适应 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).fitMode === "center" }),
                    onClick: i[15] || (i[15] = (p) => s(n).fitMode = "center")
                  },
                  " 居中 ",
                  2
                  /* CLASS */
                )
              ]),
              a("label", ya, [
                V(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[16] || (i[16] = (p) => s(n).autoRestore = p),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [Wt, s(n).autoRestore]
                ]),
                i[48] || (i[48] = T(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          a("footer", wa, [
            a("div", ma, [
              i[51] || (i[51] = a(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              i[52] || (i[52] = a(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              a(
                "span",
                null,
                j(s(Bn)),
                1
                /* TEXT */
              )
            ]),
            a("div", ba, [
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(ae),
                onClick: lo
              }, [
                d(s(jl), { size: 16 }),
                T(
                  " " + j(s(ae) ? "清理中" : "清理缓存"),
                  1
                  /* TEXT */
                )
              ], 8, _a),
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(z),
                onClick: ao
              }, [
                d(s(en), { size: 16 }),
                T(
                  " " + j(s(z) ? "打开中" : "打开缓存"),
                  1
                  /* TEXT */
                )
              ], 8, ka),
              a("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(u),
                onClick: _t
              }, [
                d(s($l), { size: 17 }),
                T(
                  " " + j(s(u) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, Ca)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (_(), O("div", La, [
        a("section", Sa, [
          a("div", xa, [
            V(a(
              "input",
              {
                "onUpdate:modelValue": i[17] || (i[17] = (p) => tt($) ? $.value = p : null),
                type: "search",
                placeholder: "搜索关键词",
                onKeydown: wo(Se, ["enter"])
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [Oe, s($)]
            ]),
            a("button", {
              type: "button",
              title: "搜索",
              onClick: Se
            }, [
              d(s(nn), { size: 18 })
            ])
          ]),
          a("label", Oa, [
            i[53] || (i[53] = a(
              "span",
              null,
              "分辨率",
              -1
              /* HOISTED */
            )),
            a(
              "strong",
              null,
              "自动匹配 " + j(s(Rn)),
              1
              /* TEXT */
            )
          ]),
          a("div", za, [
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(v) === "general" }),
                onClick: i[18] || (i[18] = (p) => xe("general"))
              },
              "通用",
              2
              /* CLASS */
            ),
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(v) === "anime" }),
                onClick: i[19] || (i[19] = (p) => xe("anime"))
              },
              "动漫",
              2
              /* CLASS */
            ),
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(v) === "people" }),
                onClick: i[20] || (i[20] = (p) => xe("people"))
              },
              "人物",
              2
              /* CLASS */
            ),
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(v) === "nature" }),
                onClick: i[21] || (i[21] = (p) => xe("nature"))
              },
              "自然",
              2
              /* CLASS */
            )
          ]),
          a("label", Wa, [
            i[55] || (i[55] = a(
              "span",
              null,
              "源",
              -1
              /* HOISTED */
            )),
            V(a(
              "select",
              {
                "onUpdate:modelValue": i[22] || (i[22] = (p) => tt(w) ? w.value = p : null),
                onChange: Se
              },
              i[54] || (i[54] = [
                a(
                  "option",
                  { value: "hot" },
                  "Hot",
                  -1
                  /* HOISTED */
                ),
                a(
                  "option",
                  { value: "toplist" },
                  "Toplist",
                  -1
                  /* HOISTED */
                )
              ]),
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [mo, s(w)]
            ])
          ]),
          a("button", {
            type: "button",
            class: "refresh-btn",
            title: "刷新",
            onClick: Se
          }, [
            d(s(tn), {
              size: 18,
              class: L({ spinning: s(I) })
            }, null, 8, ["class"])
          ])
        ]),
        a("section", Ia, [
          s(I) && s(Ze).length === 0 ? (_(), O("div", ja, "正在加载 Wallhaven 壁纸...")) : s(Ze).length === 0 ? (_(), O("div", Pa, "暂无可用壁纸")) : (_(), O("div", Ta, [
            (_(!0), O(
              at,
              null,
              bo(s(Ze), (p) => (_(), O("article", {
                key: p.id,
                class: "wallpaper-card",
                onClick: (K) => Lt(p)
              }, [
                a("div", Na, [
                  s(Z).has(p.id) ? B("v-if", !0) : (_(), O("div", $a)),
                  a("img", {
                    ref_for: !0,
                    ref: (K) => to(p, K),
                    alt: p.resolution,
                    loading: "lazy",
                    onLoad: (K) => eo(p.id)
                  }, null, 40, Ea),
                  a(
                    "span",
                    null,
                    j(p.resolution),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", {
                  class: "card-actions",
                  onClick: i[23] || (i[23] = Me(() => {
                  }, ["stop"]))
                }, [
                  a("button", {
                    type: "button",
                    title: "预览",
                    onClick: (K) => Lt(p)
                  }, [
                    d(s(Nl), { size: 16 }),
                    i[56] || (i[56] = T(" 预览 "))
                  ], 8, Da),
                  a("button", {
                    type: "button",
                    title: "设为壁纸",
                    disabled: s(A).has(p.id),
                    onClick: (K) => xt(p)
                  }, [
                    d(s(Il), { size: 16 }),
                    T(
                      " " + j(s(A).has(p.id) ? "设置中" : "设为"),
                      1
                      /* TEXT */
                    )
                  ], 8, Fa),
                  a("button", {
                    type: "button",
                    title: "下载",
                    disabled: s(A).has(p.id),
                    onClick: (K) => Ot(p)
                  }, [
                    d(s(Pl), { size: 16 }),
                    i[57] || (i[57] = T(" 下载 "))
                  ], 8, Aa)
                ])
              ], 8, Ma))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        a("footer", Ba, [
          a(
            "span",
            null,
            "第 " + j(s(g)) + " 页",
            1
            /* TEXT */
          ),
          a(
            "span",
            Ra,
            "来源：" + j(s(Hn)) + " · SFW",
            1
            /* TEXT */
          ),
          a("div", Ha, [
            a("button", {
              type: "button",
              disabled: s(g) <= 1 || s(I),
              onClick: so
            }, "上一页", 8, Va),
            a("button", {
              type: "button",
              disabled: s(g) >= s(S) || s(I),
              onClick: io
            }, "下一页", 8, Ua)
          ])
        ])
      ])),
      s(x) ? (_(), O("div", {
        key: 3,
        class: "preview-modal",
        onClick: Me(Ke, ["self"])
      }, [
        a("div", Ga, [
          a("header", null, [
            a(
              "strong",
              null,
              j(s(x).resolution),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "flat-icon",
              onClick: Ke
            }, [
              d(s(Xe), { size: 23 })
            ])
          ]),
          a("div", Za, [
            s(G) ? (_(), O("div", Ka, i[58] || (i[58] = [
              a(
                "span",
                null,
                "加载预览...",
                -1
                /* HOISTED */
              )
            ]))) : B("v-if", !0),
            s(C) ? (_(), O("div", qa, "预览加载失败")) : B("v-if", !0),
            a("img", {
              class: L({ ready: !s(G) && !s(C) }),
              src: s(x).path,
              alt: "壁纸预览",
              onLoad: Yn,
              onError: Xn
            }, null, 42, Ja)
          ]),
          a("footer", null, [
            a("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(A).has(s(x).id),
              onClick: i[24] || (i[24] = (p) => Ot(s(x)))
            }, " 下载缓存 ", 8, Qa),
            a("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(A).has(s(x).id),
              onClick: i[25] || (i[25] = (p) => xt(s(x)))
            }, j(s(A).has(s(x).id) ? "设置中" : "设为壁纸"), 9, Ya)
          ])
        ])
      ])) : B("v-if", !0)
    ]));
  }
}), er = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, tr = /* @__PURE__ */ er(Xa, [["__scopeId", "data-v-ce187b3e"]]), nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr
}, Symbol.toStringTag, { value: "Module" }));
export {
  sr as activate
};
