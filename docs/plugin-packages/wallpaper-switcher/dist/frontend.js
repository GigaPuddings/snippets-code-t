import { getCurrentInstance as re, inject as Y, ref as S, computed as b, unref as s, readonly as _n, getCurrentScope as kn, onScopeDispose as Cn, onMounted as be, nextTick as xn, watch as De, isRef as Ke, warn as Sn, provide as Ln, defineComponent as T, createElementBlock as I, openBlock as x, mergeProps as On, renderSlot as ae, createElementVNode as r, normalizeClass as C, createVNode as d, Transition as tt, withCtx as X, withDirectives as H, normalizeStyle as $e, createTextVNode as N, toDisplayString as j, vShow as Ie, shallowReactive as zn, createBlock as G, createCommentVNode as Z, resolveDynamicComponent as Mt, Fragment as nt, withModifiers as ot, isVNode as ye, render as We, onUnmounted as $n, vModelText as xe, vModelCheckbox as ht, withKeys as In, vModelSelect as Wn, renderList as jn } from "vue";
const cr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => jl)
  }), e.registerRoute({
    target: "window",
    path: "/wallpaper-wallhaven",
    name: "WallpaperWallhaven",
    component: () => Promise.resolve().then(() => ar)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function Pn(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Tn(e, t, n, o, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Se;
const F = "__TAURI_TO_IPC_KEY__";
function Nn(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function u(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Mn(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class En {
  get rid() {
    return Pn(this, Se, "f");
  }
  constructor(t) {
    Se.set(this, void 0), Tn(this, Se, t);
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
Se = /* @__PURE__ */ new WeakMap();
var M;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(M || (M = {}));
async function Et(e, t) {
  await u("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function je(e, t, n) {
  var o;
  const i = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return u("plugin:event|listen", {
    event: e,
    target: i,
    handler: Nn(t)
  }).then((c) => async () => Et(e, c));
}
async function Dn(e, t, n) {
  return je(e, (o) => {
    Et(e, o.id), t(o);
  }, n);
}
async function Fn(e, t) {
  await u("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function An(e, t, n) {
  await u("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Dt {
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
    return new ge(this.width * t, this.height * t);
  }
  [F]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[F]();
  }
}
class ge {
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
    return new Dt(this.width / t, this.height / t);
  }
  [F]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[F]();
  }
}
class le {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Dt ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ge ? this.size : this.size.toPhysical(t);
  }
  [F]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[F]();
  }
}
class Ft {
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
    return new J(this.x * t, this.y * t);
  }
  [F]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[F]();
  }
}
class J {
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
    return new Ft(this.x / t, this.y / t);
  }
  [F]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[F]();
  }
}
class Ce {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Ft ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof J ? this.position : this.position.toPhysical(t);
  }
  [F]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[F]();
  }
}
class ve extends En {
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
      rgba: Pe(t),
      width: n,
      height: o
    }).then((i) => new ve(i));
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
      bytes: Pe(t)
    }).then((n) => new ve(n));
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
    return u("plugin:image|from_path", { path: t }).then((n) => new ve(n));
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
function Pe(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ve ? e.rid : e;
}
var Je;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Je || (Je = {}));
class Bn {
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
var ft;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ft || (ft = {}));
function st() {
  return new At(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Ve() {
  return u("plugin:window|get_all_windows").then((e) => e.map((t) => new At(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ue = ["tauri://created", "tauri://error"];
class At {
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
    }).then(async () => this.emit("tauri://created")).catch(async (i) => this.emit("tauri://error", i));
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
    return (n = (await Ve()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return st();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Ve();
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
    for (const t of await Ve())
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
    } : je(t, n, {
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
    } : Dn(t, n, {
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
    if (Ue.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Fn(t, n);
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
    if (Ue.includes(n)) {
      for (const i of this.listeners[n] || [])
        i({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return An(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Ue.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new J(t));
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
    }).then((t) => new J(t));
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
    }).then((t) => new ge(t));
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
    }).then((t) => new ge(t));
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
    return t && (t === Je.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), u("plugin:window|request_user_attention", {
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
      value: t instanceof le ? t : new le(t)
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
      value: t instanceof le ? t : t ? new le(t) : null
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
      value: t instanceof le ? t : t ? new le(t) : null
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
      value: t instanceof Ce ? t : new Ce(t)
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
      value: Pe(t)
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
      value: t instanceof Ce ? t : new Ce(t)
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
      value: t ? Pe(t) : void 0
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
    return this.listen(M.WINDOW_RESIZED, (n) => {
      n.payload = new ge(n.payload), t(n);
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
      n.payload = new J(n.payload), t(n);
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
      const o = new Bn(n);
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
          position: new J(a.payload.position)
        }
      });
    }), o = await this.listen(M.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new J(a.payload.position)
        }
      });
    }), i = await this.listen(M.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new J(a.payload.position)
        }
      });
    }), c = await this.listen(M.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), i(), o(), c();
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
    const n = await this.listen(M.WINDOW_FOCUS, (i) => {
      t({ ...i, payload: !0 });
    }), o = await this.listen(M.WINDOW_BLUR, (i) => {
      t({ ...i, payload: !1 });
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
var pt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(pt || (pt = {}));
var gt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(gt || (gt = {}));
var vt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(vt || (vt = {}));
async function yt(e = {}) {
  return typeof e == "object" && Object.freeze(e), await u("plugin:dialog|open", { options: e });
}
const Bt = Symbol(), Le = "el", Rn = "is-", Q = (e, t, n, o, i) => {
  let c = `${e}-${t}`;
  return n && (c += `-${n}`), o && (c += `__${o}`), i && (c += `--${i}`), c;
}, Rt = Symbol("namespaceContextKey"), Hn = (e) => {
  const t = e || (re() ? Y(Rt, S(Le)) : S(Le));
  return b(() => s(t) || Le);
}, it = (e, t) => {
  const n = Hn(t);
  return {
    namespace: n,
    b: (y = "") => Q(n.value, e, y, "", ""),
    e: (y) => y ? Q(n.value, e, "", y, "") : "",
    m: (y) => y ? Q(n.value, e, "", "", y) : "",
    be: (y, _) => y && _ ? Q(n.value, e, y, _, "") : "",
    em: (y, _) => y && _ ? Q(n.value, e, "", y, _) : "",
    bm: (y, _) => y && _ ? Q(n.value, e, y, "", _) : "",
    bem: (y, _, O) => y && _ && O ? Q(n.value, e, y, _, O) : "",
    is: (y, ..._) => {
      const O = _.length >= 1 ? _[0] : !0;
      return y && O ? `${Rn}${y}` : "";
    },
    cssVar: (y) => {
      const _ = {};
      for (const O in y)
        y[O] && (_[`--${n.value}-${O}`] = y[O]);
      return _;
    },
    cssVarName: (y) => `--${n.value}-${y}`,
    cssVarBlock: (y) => {
      const _ = {};
      for (const O in y)
        y[O] && (_[`--${n.value}-${e}-${O}`] = y[O]);
      return _;
    },
    cssVarBlockName: (y) => `--${n.value}-${e}-${y}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Vn = Object.prototype.hasOwnProperty, wt = (e, t) => Vn.call(e, t), we = (e) => typeof e == "function", ee = (e) => typeof e == "string", Ht = (e) => e !== null && typeof e == "object";
var Un = typeof global == "object" && global && global.Object === Object && global, Gn = typeof self == "object" && self && self.Object === Object && self, lt = Un || Gn || Function("return this")(), ue = lt.Symbol, Vt = Object.prototype, Zn = Vt.hasOwnProperty, Kn = Vt.toString, pe = ue ? ue.toStringTag : void 0;
function Jn(e) {
  var t = Zn.call(e, pe), n = e[pe];
  try {
    e[pe] = void 0;
    var o = !0;
  } catch {
  }
  var i = Kn.call(e);
  return o && (t ? e[pe] = n : delete e[pe]), i;
}
var qn = Object.prototype, Qn = qn.toString;
function Yn(e) {
  return Qn.call(e);
}
var Xn = "[object Null]", eo = "[object Undefined]", mt = ue ? ue.toStringTag : void 0;
function Ut(e) {
  return e == null ? e === void 0 ? eo : Xn : mt && mt in Object(e) ? Jn(e) : Yn(e);
}
function to(e) {
  return e != null && typeof e == "object";
}
var no = "[object Symbol]";
function rt(e) {
  return typeof e == "symbol" || to(e) && Ut(e) == no;
}
function oo(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, i = Array(o); ++n < o; )
    i[n] = t(e[n], n, e);
  return i;
}
var at = Array.isArray, bt = ue ? ue.prototype : void 0, _t = bt ? bt.toString : void 0;
function Gt(e) {
  if (typeof e == "string")
    return e;
  if (at(e))
    return oo(e, Gt) + "";
  if (rt(e))
    return _t ? _t.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Zt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var so = "[object AsyncFunction]", io = "[object Function]", lo = "[object GeneratorFunction]", ro = "[object Proxy]";
function ao(e) {
  if (!Zt(e))
    return !1;
  var t = Ut(e);
  return t == io || t == lo || t == so || t == ro;
}
var Ge = lt["__core-js_shared__"], kt = function() {
  var e = /[^.]+$/.exec(Ge && Ge.keys && Ge.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function uo(e) {
  return !!kt && kt in e;
}
var co = Function.prototype, ho = co.toString;
function fo(e) {
  if (e != null) {
    try {
      return ho.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var po = /[\\^$.*+?()[\]{}|]/g, go = /^\[object .+?Constructor\]$/, vo = Function.prototype, yo = Object.prototype, wo = vo.toString, mo = yo.hasOwnProperty, bo = RegExp(
  "^" + wo.call(mo).replace(po, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _o(e) {
  if (!Zt(e) || uo(e))
    return !1;
  var t = ao(e) ? bo : go;
  return t.test(fo(e));
}
function ko(e, t) {
  return e?.[t];
}
function Kt(e, t) {
  var n = ko(e, t);
  return _o(n) ? n : void 0;
}
function Co(e, t) {
  return e === t || e !== e && t !== t;
}
var xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, So = /^\w*$/;
function Lo(e, t) {
  if (at(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || rt(e) ? !0 : So.test(e) || !xo.test(e) || t != null && e in Object(t);
}
var me = Kt(Object, "create");
function Oo() {
  this.__data__ = me ? me(null) : {}, this.size = 0;
}
function zo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $o = "__lodash_hash_undefined__", Io = Object.prototype, Wo = Io.hasOwnProperty;
function jo(e) {
  var t = this.__data__;
  if (me) {
    var n = t[e];
    return n === $o ? void 0 : n;
  }
  return Wo.call(t, e) ? t[e] : void 0;
}
var Po = Object.prototype, To = Po.hasOwnProperty;
function No(e) {
  var t = this.__data__;
  return me ? t[e] !== void 0 : To.call(t, e);
}
var Mo = "__lodash_hash_undefined__";
function Eo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = me && t === void 0 ? Mo : t, this;
}
function te(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
te.prototype.clear = Oo;
te.prototype.delete = zo;
te.prototype.get = jo;
te.prototype.has = No;
te.prototype.set = Eo;
function Do() {
  this.__data__ = [], this.size = 0;
}
function Fe(e, t) {
  for (var n = e.length; n--; )
    if (Co(e[n][0], t))
      return n;
  return -1;
}
var Fo = Array.prototype, Ao = Fo.splice;
function Bo(e) {
  var t = this.__data__, n = Fe(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Ao.call(t, n, 1), --this.size, !0;
}
function Ro(e) {
  var t = this.__data__, n = Fe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ho(e) {
  return Fe(this.__data__, e) > -1;
}
function Vo(e, t) {
  var n = this.__data__, o = Fe(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function he(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
he.prototype.clear = Do;
he.prototype.delete = Bo;
he.prototype.get = Ro;
he.prototype.has = Ho;
he.prototype.set = Vo;
var Uo = Kt(lt, "Map");
function Go() {
  this.size = 0, this.__data__ = {
    hash: new te(),
    map: new (Uo || he)(),
    string: new te()
  };
}
function Zo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ae(e, t) {
  var n = e.__data__;
  return Zo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ko(e) {
  var t = Ae(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Jo(e) {
  return Ae(this, e).get(e);
}
function qo(e) {
  return Ae(this, e).has(e);
}
function Qo(e, t) {
  var n = Ae(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oe.prototype.clear = Go;
oe.prototype.delete = Ko;
oe.prototype.get = Jo;
oe.prototype.has = qo;
oe.prototype.set = Qo;
var Yo = "Expected a function";
function ut(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Yo);
  var n = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], c = n.cache;
    if (c.has(i))
      return c.get(i);
    var a = e.apply(this, o);
    return n.cache = c.set(i, a) || c, a;
  };
  return n.cache = new (ut.Cache || oe)(), n;
}
ut.Cache = oe;
var Xo = 500;
function es(e) {
  var t = ut(e, function(o) {
    return n.size === Xo && n.clear(), o;
  }), n = t.cache;
  return t;
}
var ts = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ns = /\\(\\)?/g, os = es(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ts, function(n, o, i, c) {
    t.push(i ? c.replace(ns, "$1") : o || n);
  }), t;
});
function ss(e) {
  return e == null ? "" : Gt(e);
}
function is(e, t) {
  return at(e) ? e : Lo(e, t) ? [e] : os(ss(e));
}
function ls(e) {
  if (typeof e == "string" || rt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function rs(e, t) {
  t = is(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ls(t[n++])];
  return n && n == o ? e : void 0;
}
function as(e, t, n) {
  var o = e == null ? void 0 : rs(e, t);
  return o === void 0 ? n : o;
}
function us(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var i = e[t];
    o[i[0]] = i[1];
  }
  return o;
}
const Jt = (e) => e === void 0, Ct = (e) => typeof e == "boolean", ne = (e) => typeof e == "number", qe = (e) => typeof Element > "u" ? !1 : e instanceof Element, cs = (e) => ee(e) ? !Number.isNaN(Number(e)) : !1;
var xt;
const se = typeof window < "u", ds = (e) => typeof e == "string", hs = () => {
};
se && ((xt = window?.navigator) != null && xt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ct(e) {
  return typeof e == "function" ? e() : s(e);
}
function fs(e) {
  return e;
}
function dt(e) {
  return kn() ? (Cn(e), !0) : !1;
}
function ps(e, t = !0) {
  re() ? be(e) : t ? e() : xn(e);
}
function qt(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, i = S(!1);
  let c = null;
  function a() {
    c && (clearTimeout(c), c = null);
  }
  function h() {
    i.value = !1, a();
  }
  function g(...v) {
    a(), i.value = !0, c = setTimeout(() => {
      i.value = !1, c = null, e(...v);
    }, ct(t));
  }
  return o && (i.value = !0, se && g()), dt(h), {
    isPending: _n(i),
    start: g,
    stop: h
  };
}
function Qt(e) {
  var t;
  const n = ct(e);
  return (t = n?.$el) != null ? t : n;
}
const Yt = se ? window : void 0;
function Xt(...e) {
  let t, n, o, i;
  if (ds(e[0]) || Array.isArray(e[0]) ? ([n, o, i] = e, t = Yt) : [t, n, o, i] = e, !t)
    return hs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const c = [], a = () => {
    c.forEach((p) => p()), c.length = 0;
  }, h = (p, m, z, W) => (p.addEventListener(m, z, W), () => p.removeEventListener(m, z, W)), g = De(() => [Qt(t), ct(i)], ([p, m]) => {
    a(), p && c.push(...n.flatMap((z) => o.map((W) => h(p, z, W, m))));
  }, { immediate: !0, flush: "post" }), v = () => {
    g(), a();
  };
  return dt(v), v;
}
function gs(e, t = !1) {
  const n = S(), o = () => n.value = !!e();
  return o(), ps(o, t), n;
}
const St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Lt = "__vueuse_ssr_handlers__";
St[Lt] = St[Lt] || {};
var Ot = Object.getOwnPropertySymbols, vs = Object.prototype.hasOwnProperty, ys = Object.prototype.propertyIsEnumerable, ws = (e, t) => {
  var n = {};
  for (var o in e)
    vs.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ot)
    for (var o of Ot(e))
      t.indexOf(o) < 0 && ys.call(e, o) && (n[o] = e[o]);
  return n;
};
function ms(e, t, n = {}) {
  const o = n, { window: i = Yt } = o, c = ws(o, ["window"]);
  let a;
  const h = gs(() => i && "ResizeObserver" in i), g = () => {
    a && (a.disconnect(), a = void 0);
  }, v = De(() => Qt(e), (m) => {
    g(), h.value && i && m && (a = new ResizeObserver(t), a.observe(m, c));
  }, { immediate: !0, flush: "post" }), p = () => {
    g(), v();
  };
  return dt(p), {
    isSupported: h,
    stop: p
  };
}
var zt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(zt || (zt = {}));
var bs = Object.defineProperty, $t = Object.getOwnPropertySymbols, _s = Object.prototype.hasOwnProperty, ks = Object.prototype.propertyIsEnumerable, It = (e, t, n) => t in e ? bs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cs = (e, t) => {
  for (var n in t || (t = {}))
    _s.call(t, n) && It(e, n, t[n]);
  if ($t)
    for (var n of $t(t))
      ks.call(t, n) && It(e, n, t[n]);
  return e;
};
const xs = {
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
Cs({
  linear: fs
}, xs);
const Wt = {
  current: 0
}, jt = S(0), en = 2e3, Pt = Symbol("elZIndexContextKey"), tn = Symbol("zIndexContextKey"), Ss = (e) => {
  const t = re() ? Y(Pt, Wt) : Wt, n = e || (re() ? Y(tn, void 0) : void 0), o = b(() => {
    const a = s(n);
    return ne(a) ? a : en;
  }), i = b(() => o.value + jt.value), c = () => (t.current++, jt.value = t.current, i.value);
  return !se && Y(Pt), {
    initialZIndex: o,
    currentZIndex: i,
    nextZIndex: c
  };
};
var Ls = {
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
const Os = (e) => (t, n) => zs(t, n, s(e)), zs = (e, t, n) => as(n, e, e).replace(/\{(\w+)\}/g, (o, i) => {
  var c;
  return `${(c = t?.[i]) != null ? c : `{${i}}`}`;
}), $s = (e) => {
  const t = b(() => s(e).name), n = Ke(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Os(e)
  };
}, nn = Symbol("localeContextKey"), Is = (e) => {
  const t = e || Y(nn, S());
  return $s(b(() => t.value || Ls));
}, on = "__epPropKey", E = (e) => e, Ws = (e) => Ht(e) && !!e[on], sn = (e, t) => {
  if (!Ht(e) || Ws(e))
    return e;
  const { values: n, required: o, default: i, type: c, validator: a } = e, g = {
    type: c,
    required: !!o,
    validator: n || a ? (v) => {
      let p = !1, m = [];
      if (n && (m = Array.from(n), wt(e, "default") && m.push(i), p || (p = m.includes(v))), a && (p || (p = a(v))), !p && m.length > 0) {
        const z = [...new Set(m)].map((W) => JSON.stringify(W)).join(", ");
        Sn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${z}], got value ${JSON.stringify(v)}.`);
      }
      return p;
    } : void 0,
    [on]: !0
  };
  return wt(e, "default") && (g.default = i), g;
}, fe = (e) => us(Object.entries(e).map(([t, n]) => [
  t,
  sn(n, t)
])), js = ["", "default", "small", "large"], Ps = sn({
  type: String,
  values: js,
  required: !1
}), Ts = Symbol("size"), Ns = Symbol("emptyValuesContextKey"), Ms = fe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => we(e) ? !e() : !e
  }
}), Tt = (e) => Object.keys(e), Te = S();
function ln(e, t = void 0) {
  return re() ? Y(Bt, Te) : Te;
}
function rn(e, t) {
  const n = ln(), o = it(e, b(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || Le;
  })), i = Is(b(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), c = Ss(b(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || en;
  })), a = b(() => {
    var h;
    return s(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return an(b(() => s(n) || {})), {
    ns: o,
    locale: i,
    zIndex: c,
    size: a
  };
}
const an = (e, t, n = !1) => {
  var o;
  const i = !!re(), c = i ? ln() : void 0, a = (o = void 0) != null ? o : i ? Ln : void 0;
  if (!a)
    return;
  const h = b(() => {
    const g = s(e);
    return c?.value ? Es(c.value, g) : g;
  });
  return a(Bt, h), a(nn, b(() => h.value.locale)), a(Rt, b(() => h.value.namespace)), a(tn, b(() => h.value.zIndex)), a(Ts, {
    size: b(() => h.value.size || "")
  }), a(Ns, b(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !Te.value) && (Te.value = h.value), h;
}, Es = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Tt(e), ...Tt(t)])], o = {};
  for (const i of n)
    o[i] = t[i] !== void 0 ? t[i] : e[i];
  return o;
};
var Be = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
};
function Qe(e, t = "px") {
  if (!e)
    return "";
  if (ne(e) || cs(e))
    return `${e}${t}`;
  if (ee(e))
    return e;
}
const un = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), cn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ds = fe({
  size: {
    type: E([Number, String])
  },
  color: {
    type: String
  }
}), Fs = T({
  name: "ElIcon",
  inheritAttrs: !1
}), As = /* @__PURE__ */ T({
  ...Fs,
  props: Ds,
  setup(e) {
    const t = e, n = it("icon"), o = b(() => {
      const { size: i, color: c } = t;
      return !i && !c ? {} : {
        fontSize: Jt(i) ? void 0 : Qe(i),
        "--color": c
      };
    });
    return (i, c) => (x(), I("i", On({
      class: s(n).b(),
      style: s(o)
    }, i.$attrs), [
      ae(i.$slots, "default")
    ], 16));
  }
});
var Bs = /* @__PURE__ */ Be(As, [["__file", "icon.vue"]]);
const Ne = un(Bs);
/*! Element Plus Icons Vue v2.3.1 */
var Rs = /* @__PURE__ */ T({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (x(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Hs = Rs, Vs = /* @__PURE__ */ T({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (x(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), dn = Vs, Us = /* @__PURE__ */ T({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (x(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Gs = Us, Zs = /* @__PURE__ */ T({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (x(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ks = Zs, Js = /* @__PURE__ */ T({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (x(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), qs = Js;
const hn = E([
  String,
  Object,
  Function
]), Qs = {
  Close: dn
}, Ys = {
  Close: dn
}, Me = {
  success: Ks,
  warning: qs,
  error: Hs,
  info: Gs
}, Xs = (e) => e, Oe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ei = fe({
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
    type: E([String, Object, Array])
  },
  offset: {
    type: E(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), ti = T({
  name: "ElBadge"
}), ni = /* @__PURE__ */ T({
  ...ti,
  props: ei,
  setup(e, { expose: t }) {
    const n = e, o = it("badge"), i = b(() => n.isDot ? "" : ne(n.value) && ne(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), c = b(() => {
      var a, h, g, v, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: Qe(-((h = (a = n.offset) == null ? void 0 : a[0]) != null ? h : 0)),
          marginTop: Qe((v = (g = n.offset) == null ? void 0 : g[1]) != null ? v : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: i
    }), (a, h) => (x(), I("div", {
      class: C(s(o).b())
    }, [
      ae(a.$slots, "default"),
      d(tt, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: X(() => [
          H(r("sup", {
            class: C([
              s(o).e("content"),
              s(o).em("content", a.type),
              s(o).is("fixed", !!a.$slots.default),
              s(o).is("dot", a.isDot),
              s(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: $e(s(c))
          }, [
            ae(a.$slots, "content", { value: s(i) }, () => [
              N(j(s(i)), 1)
            ])
          ], 6), [
            [Ie, !a.hidden && (s(i) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var oi = /* @__PURE__ */ Be(ni, [["__file", "badge.vue"]]);
const si = un(oi), ii = fe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: E(Object)
  },
  size: Ps,
  button: {
    type: E(Object)
  },
  experimentalFeatures: {
    type: E(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: E(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ms
}), R = {};
T({
  name: "ElConfigProvider",
  props: ii,
  setup(e, { slots: t }) {
    De(() => e.message, (o) => {
      Object.assign(R, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = an(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
const fn = ["success", "info", "warning", "error"], P = Xs({
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
  appendTo: se ? document.body : void 0
}), li = fe({
  customClass: {
    type: String,
    default: P.customClass
  },
  center: {
    type: Boolean,
    default: P.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: P.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: P.duration
  },
  icon: {
    type: hn,
    default: P.icon
  },
  id: {
    type: String,
    default: P.id
  },
  message: {
    type: E([
      String,
      Object,
      Function
    ]),
    default: P.message
  },
  onClose: {
    type: E(Function),
    default: P.onClose
  },
  showClose: {
    type: Boolean,
    default: P.showClose
  },
  type: {
    type: String,
    values: fn,
    default: P.type
  },
  plain: {
    type: Boolean,
    default: P.plain
  },
  offset: {
    type: Number,
    default: P.offset
  },
  zIndex: {
    type: Number,
    default: P.zIndex
  },
  grouping: {
    type: Boolean,
    default: P.grouping
  },
  repeatNum: {
    type: Number,
    default: P.repeatNum
  }
}), ri = {
  destroy: () => !0
}, V = zn([]), ai = (e) => {
  const t = V.findIndex((i) => i.id === e), n = V[t];
  let o;
  return t > 0 && (o = V[t - 1]), { current: n, prev: o };
}, ui = (e) => {
  const { prev: t } = ai(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ci = (e, t) => V.findIndex((o) => o.id === e) > 0 ? 16 : t, di = T({
  name: "ElMessage"
}), hi = /* @__PURE__ */ T({
  ...di,
  props: li,
  emits: ri,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Ys, { ns: i, zIndex: c } = rn("message"), { currentZIndex: a, nextZIndex: h } = c, g = S(), v = S(!1), p = S(0);
    let m;
    const z = b(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), W = b(() => {
      const L = n.type;
      return { [i.bm("icon", L)]: L && Me[L] };
    }), A = b(() => n.icon || Me[n.type] || ""), y = b(() => ui(n.id)), _ = b(() => ci(n.id, n.offset) + y.value), O = b(() => p.value + _.value), K = b(() => ({
      top: `${_.value}px`,
      zIndex: a.value
    }));
    function k() {
      n.duration !== 0 && ({ stop: m } = qt(() => {
        B();
      }, n.duration));
    }
    function U() {
      m?.();
    }
    function B() {
      v.value = !1;
    }
    function q({ code: L }) {
      L === Oe.esc && B();
    }
    return be(() => {
      k(), h(), v.value = !0;
    }), De(() => n.repeatNum, () => {
      U(), k();
    }), Xt(document, "keydown", q), ms(g, () => {
      p.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: O,
      close: B
    }), (L, ie) => (x(), G(tt, {
      name: s(i).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (_e) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        H(r("div", {
          id: L.id,
          ref_key: "messageRef",
          ref: g,
          class: C([
            s(i).b(),
            { [s(i).m(L.type)]: L.type },
            s(i).is("center", L.center),
            s(i).is("closable", L.showClose),
            s(i).is("plain", L.plain),
            L.customClass
          ]),
          style: $e(s(K)),
          role: "alert",
          onMouseenter: U,
          onMouseleave: k
        }, [
          L.repeatNum > 1 ? (x(), G(s(si), {
            key: 0,
            value: L.repeatNum,
            type: s(z),
            class: C(s(i).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Z("v-if", !0),
          s(A) ? (x(), G(s(Ne), {
            key: 1,
            class: C([s(i).e("icon"), s(W)])
          }, {
            default: X(() => [
              (x(), G(Mt(s(A))))
            ]),
            _: 1
          }, 8, ["class"])) : Z("v-if", !0),
          ae(L.$slots, "default", {}, () => [
            L.dangerouslyUseHTMLString ? (x(), I(nt, { key: 1 }, [
              Z(" Caution here, message could've been compromised, never use user's input as message "),
              r("p", {
                class: C(s(i).e("content")),
                innerHTML: L.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (x(), I("p", {
              key: 0,
              class: C(s(i).e("content"))
            }, j(L.message), 3))
          ]),
          L.showClose ? (x(), G(s(Ne), {
            key: 2,
            class: C(s(i).e("closeBtn")),
            onClick: ot(B, ["stop"])
          }, {
            default: X(() => [
              d(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Z("v-if", !0)
        ], 46, ["id"]), [
          [Ie, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var fi = /* @__PURE__ */ Be(hi, [["__file", "message.vue"]]);
let pi = 1;
const pn = (e) => {
  const t = !e || ee(e) || ye(e) || we(e) ? { message: e } : e, n = {
    ...P,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ee(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    qe(o) || (o = document.body), n.appendTo = o;
  }
  return Ct(R.grouping) && !n.grouping && (n.grouping = R.grouping), ne(R.duration) && n.duration === 3e3 && (n.duration = R.duration), ne(R.offset) && n.offset === 16 && (n.offset = R.offset), Ct(R.showClose) && !n.showClose && (n.showClose = R.showClose), n;
}, gi = (e) => {
  const t = V.indexOf(e);
  if (t === -1)
    return;
  V.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, vi = ({ appendTo: e, ...t }, n) => {
  const o = `message_${pi++}`, i = t.onClose, c = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      i?.(), gi(p);
    },
    onDestroy: () => {
      We(null, c);
    }
  }, h = d(fi, a, we(a.message) || ye(a.message) ? {
    default: we(a.message) ? a.message : () => a.message
  } : null);
  h.appContext = n || ce._context, We(h, c), e.appendChild(c.firstElementChild);
  const g = h.component, p = {
    id: o,
    vnode: h,
    vm: g,
    handler: {
      close: () => {
        g.exposed.visible.value = !1;
      }
    },
    props: h.component.props
  };
  return p;
}, ce = (e = {}, t) => {
  if (!se)
    return { close: () => {
    } };
  const n = pn(e);
  if (n.grouping && V.length) {
    const i = V.find(({ vnode: c }) => {
      var a;
      return ((a = c.props) == null ? void 0 : a.message) === n.message;
    });
    if (i)
      return i.props.repeatNum += 1, i.props.type = n.type, i.handler;
  }
  if (ne(R.max) && V.length >= R.max)
    return { close: () => {
    } };
  const o = vi(n, t);
  return V.push(o), o.handler;
};
fn.forEach((e) => {
  ce[e] = (t = {}, n) => {
    const o = pn(t);
    return ce({ ...o, type: e }, n);
  };
});
function yi(e) {
  for (const t of V)
    (!e || e === t.props.type) && t.handler.close();
}
ce.closeAll = yi;
ce._context = null;
const wi = cn(ce, "$message"), gn = [
  "success",
  "info",
  "warning",
  "error"
], mi = fe({
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
    type: hn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: E([
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
    type: E(Function),
    default: () => {
    }
  },
  onClose: {
    type: E(Function),
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
    values: [...gn, ""],
    default: ""
  },
  zIndex: Number
}), bi = {
  destroy: () => !0
}, _i = T({
  name: "ElNotification"
}), ki = /* @__PURE__ */ T({
  ..._i,
  props: mi,
  emits: bi,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: i } = rn("notification"), { nextZIndex: c, currentZIndex: a } = i, { Close: h } = Qs, g = S(!1);
    let v;
    const p = b(() => {
      const k = n.type;
      return k && Me[n.type] ? o.m(k) : "";
    }), m = b(() => n.type && Me[n.type] || n.icon), z = b(() => n.position.endsWith("right") ? "right" : "left"), W = b(() => n.position.startsWith("top") ? "top" : "bottom"), A = b(() => {
      var k;
      return {
        [W.value]: `${n.offset}px`,
        zIndex: (k = n.zIndex) != null ? k : a.value
      };
    });
    function y() {
      n.duration > 0 && ({ stop: v } = qt(() => {
        g.value && O();
      }, n.duration));
    }
    function _() {
      v?.();
    }
    function O() {
      g.value = !1;
    }
    function K({ code: k }) {
      k === Oe.delete || k === Oe.backspace ? _() : k === Oe.esc ? g.value && O() : y();
    }
    return be(() => {
      y(), c(), g.value = !0;
    }), Xt(document, "keydown", K), t({
      visible: g,
      close: O
    }), (k, U) => (x(), G(tt, {
      name: s(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (B) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        H(r("div", {
          id: k.id,
          class: C([s(o).b(), k.customClass, s(z)]),
          style: $e(s(A)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: y,
          onClick: k.onClick
        }, [
          s(m) ? (x(), G(s(Ne), {
            key: 0,
            class: C([s(o).e("icon"), s(p)])
          }, {
            default: X(() => [
              (x(), G(Mt(s(m))))
            ]),
            _: 1
          }, 8, ["class"])) : Z("v-if", !0),
          r("div", {
            class: C(s(o).e("group"))
          }, [
            r("h2", {
              class: C(s(o).e("title")),
              textContent: j(k.title)
            }, null, 10, ["textContent"]),
            H(r("div", {
              class: C(s(o).e("content")),
              style: $e(k.title ? void 0 : { margin: 0 })
            }, [
              ae(k.$slots, "default", {}, () => [
                k.dangerouslyUseHTMLString ? (x(), I(nt, { key: 1 }, [
                  Z(" Caution here, message could've been compromised, never use user's input as message "),
                  r("p", { innerHTML: k.message }, null, 8, ["innerHTML"])
                ], 2112)) : (x(), I("p", { key: 0 }, j(k.message), 1))
              ])
            ], 6), [
              [Ie, k.message]
            ]),
            k.showClose ? (x(), G(s(Ne), {
              key: 0,
              class: C(s(o).e("closeBtn")),
              onClick: ot(O, ["stop"])
            }, {
              default: X(() => [
                d(s(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Z("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ie, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ci = /* @__PURE__ */ Be(ki, [["__file", "notification.vue"]]);
const Ee = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ye = 16;
let xi = 1;
const de = function(e = {}, t) {
  if (!se)
    return { close: () => {
    } };
  (ee(e) || ye(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Ee[n].forEach(({ vm: p }) => {
    var m;
    o += (((m = p.el) == null ? void 0 : m.offsetHeight) || 0) + Ye;
  }), o += Ye;
  const i = `notification_${xi++}`, c = e.onClose, a = {
    ...e,
    offset: o,
    id: i,
    onClose: () => {
      Si(i, n, c);
    }
  };
  let h = document.body;
  qe(e.appendTo) ? h = e.appendTo : ee(e.appendTo) && (h = document.querySelector(e.appendTo)), qe(h) || (h = document.body);
  const g = document.createElement("div"), v = d(Ci, a, we(a.message) ? a.message : ye(a.message) ? () => a.message : null);
  return v.appContext = Jt(t) ? de._context : t, v.props.onDestroy = () => {
    We(null, g);
  }, We(v, g), Ee[n].push({ vm: v }), h.appendChild(g.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
gn.forEach((e) => {
  de[e] = (t = {}, n) => ((ee(t) || ye(t)) && (t = {
    message: t
  }), de({ ...t, type: e }, n));
});
function Si(e, t, n) {
  const o = Ee[t], i = o.findIndex(({ vm: v }) => {
    var p;
    return ((p = v.component) == null ? void 0 : p.props.id) === e;
  });
  if (i === -1)
    return;
  const { vm: c } = o[i];
  if (!c)
    return;
  n?.(c);
  const a = c.el.offsetHeight, h = t.split("-")[0];
  o.splice(i, 1);
  const g = o.length;
  if (!(g < 1))
    for (let v = i; v < g; v++) {
      const { el: p, component: m } = o[v].vm, z = Number.parseInt(p.style[h], 10) - a - Ye;
      m.props.offset = z;
    }
}
function Li() {
  for (const e of Object.values(Ee))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
de.closeAll = Li;
de._context = null;
const Oi = cn(de, "$notify"), $ = {
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
      duration: i = 3e3,
      showClose: c = !1
    } = e;
    o === "center" ? wi({
      message: t,
      type: n,
      duration: i,
      showClose: c,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Oi({
      message: t,
      type: n,
      position: o,
      duration: i,
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
}, vn = () => ({
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
}), zi = (e) => e ? /^https?:\/\//i.test(e) ? e : Mn(e) : "", yn = () => u("wallpaper_get_config"), ze = (e) => u("wallpaper_save_config", { config: e }), Xe = () => u("wallpaper_get_status"), Nt = (e) => u("wallpaper_scan_folder", { path: e }), $i = (e) => u("wallpaper_set_fixed_image", { path: e }), Ii = () => u("wallpaper_switch_now"), Wi = (e) => u("wallpaper_fetch_wallhaven", { params: e }), ji = (e) => u("wallpaper_set_wallhaven_image", { wallpaper: e }), Pi = (e) => u("wallpaper_download_wallhaven_image", { wallpaper: e }), Ti = () => u("wallpaper_clear_cache");
var Ni = {
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
function Mi() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ei(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], i = [], c = t.theme || n.theme;
  switch (c) {
    case "outline":
      i.push(typeof o[0] == "string" ? o[0] : "currentColor"), i.push("none"), i.push(typeof o[0] == "string" ? o[0] : "currentColor"), i.push("none");
      break;
    case "filled":
      i.push(typeof o[0] == "string" ? o[0] : "currentColor"), i.push(typeof o[0] == "string" ? o[0] : "currentColor"), i.push("#FFF"), i.push("#FFF");
      break;
    case "two-tone":
      i.push(typeof o[0] == "string" ? o[0] : "currentColor"), i.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), i.push(typeof o[0] == "string" ? o[0] : "currentColor"), i.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      i.push(typeof o[0] == "string" ? o[0] : "currentColor"), i.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), i.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), i.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: i,
    id: e
  };
}
var Di = Symbol("icon-context");
function D(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(c) {
      var a = Mi(), h = Y(Di, Ni);
      return function() {
        var g = c.size, v = c.strokeWidth, p = c.strokeLinecap, m = c.strokeLinejoin, z = c.theme, W = c.fill, A = c.spin, y = Ei(a, {
          size: g,
          strokeWidth: v,
          strokeLinecap: p,
          strokeLinejoin: m,
          theme: z,
          fill: W
        }, h), _ = [h.prefix + "-icon"];
        return _.push(h.prefix + "-icon-" + e), t && h.rtl && _.push(h.prefix + "-icon-rtl"), A && _.push(h.prefix + "-icon-spin"), d("span", {
          class: _.join(" ")
        }, [n(y)]);
      };
    }
  };
  return o;
}
const Fi = D("back", !0, function(e) {
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
}), et = D("close-small", !1, function(e) {
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
}), Ai = D("computer", !1, function(e) {
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
}), Bi = D("delete", !1, function(e) {
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
}), Ri = D("download", !1, function(e) {
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
}), Hi = D("folder-open", !0, function(e) {
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
}), Vi = D("grid-four", !1, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("rect", {
    x: "5",
    y: "5",
    width: "38",
    height: "38",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M24 5V43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M5 24H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ui = D("lightning", !0, function(e) {
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
}), Ze = D("picture", !0, function(e) {
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
}), Gi = D("preview-open", !1, function(e) {
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
}), wn = D("refresh", !0, function(e) {
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
}), Zi = D("save", !0, function(e) {
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
}), mn = D("search", !0, function(e) {
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
}), Ki = { class: "wallpaper-window" }, Ji = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, qi = { class: "title" }, Qi = { class: "window-actions" }, Yi = {
  key: 0,
  class: "unsupported"
}, Xi = { class: "top-panel" }, el = { class: "preview" }, tl = ["src"], nl = {
  key: 1,
  class: "preview-empty"
}, ol = { class: "status-panel" }, sl = { class: "status-row" }, il = { class: "status-row" }, ll = { class: "status-row" }, rl = { class: "status-actions" }, al = ["disabled"], ul = { class: "card settings-card" }, cl = { class: "form-row mode-row" }, dl = { class: "segmented three" }, hl = { class: "form-row" }, fl = { class: "form-row" }, pl = { class: "hint-row" }, gl = { class: "form-row wallhaven-row" }, vl = { class: "segmented source" }, yl = { class: "hint-row" }, wl = { class: "card rules-card" }, ml = { class: "rules-line" }, bl = { class: "switch-label" }, _l = { class: "number-label" }, kl = { class: "segmented mini" }, Cl = { class: "rules-line" }, xl = { class: "segmented fit" }, Sl = { class: "checkbox-label" }, Ll = { class: "footer-card" }, Ol = { class: "cache-info" }, zl = { class: "footer-actions" }, $l = ["disabled"], Il = /* @__PURE__ */ T({
  __name: "index",
  setup(e) {
    const t = st(), n = S(vn()), o = S(null), i = S(null), c = S(!1), a = S(!1), h = S(!1);
    let g = null, v = null;
    const p = b(() => zi(o.value?.currentPath)), m = b(() => "2560 × 1440"), z = b(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), W = b(() => {
      const f = o.value?.nextSwitchAt;
      if (!f) return "18 分钟后";
      const l = Math.max(0, f - Math.floor(Date.now() / 1e3));
      return l < 60 ? `${l} 秒后` : `${Math.ceil(l / 60)} 分钟后`;
    }), A = b(() => {
      const f = o.value?.cacheSizeBytes ?? 0;
      return f > 0 ? ke(f) : "320 MB";
    }), y = b(() => i.value ? `检测到 ${i.value.count} 张可用图片` : "检测到 128 张可用图片"), _ = async () => {
      c.value = !0;
      try {
        const [f, l] = await Promise.all([
          yn(),
          Xe()
        ]);
        if (n.value = f, o.value = l, f.folderPath)
          try {
            i.value = await Nt(f.folderPath);
          } catch {
            i.value = null;
          }
      } catch (f) {
        $.msg(String(f), "error");
      } finally {
        c.value = !1;
      }
    }, O = async () => {
      try {
        o.value = await Xe();
      } catch (f) {
        $.msg(String(f), "error");
      }
    }, K = async () => {
      a.value = !0;
      try {
        await ze(n.value), await O(), $.msg("壁纸设置已保存", "success");
      } catch (f) {
        $.msg(String(f), "error");
      } finally {
        a.value = !1;
      }
    }, k = async () => {
      const f = await yt({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof f == "string") {
        n.value.fixedImagePath = f, n.value.mode = "fixed";
        try {
          await $i(f), await _(), $.msg("已设置固定壁纸", "success");
        } catch (l) {
          $.msg(String(l), "error");
        }
      }
    }, U = async () => {
      const f = await yt({ multiple: !1, directory: !0 });
      typeof f == "string" && (n.value.folderPath = f, n.value.mode = "folder", await B());
    }, B = async () => {
      if (!n.value.folderPath) {
        $.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        i.value = await Nt(n.value.folderPath), i.value.count === 0 ? $.msg("文件夹中没有可用图片", "warning") : $.msg(y.value, "success");
      } catch (f) {
        $.msg(String(f), "error");
      }
    }, q = async () => {
      h.value = !0;
      try {
        await ze(n.value), await Ii(), await O(), $.msg("壁纸已切换", "success");
      } catch (f) {
        $.msg(String(f), "error");
      } finally {
        h.value = !1;
      }
    }, L = async () => {
      if (!o.value?.currentPath) {
        $.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await K();
    }, ie = async () => {
      await ze(n.value), await u("show_hide_window_command", {
        label: "wallpaper_wallhaven",
        context: null
      });
    }, _e = async () => {
      try {
        await Ti(), await O(), $.msg("缓存已清理", "success");
      } catch (f) {
        $.msg(String(f), "error");
      }
    }, Re = async () => {
      await t.close();
    }, ke = (f) => f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / 1024 / 1024).toFixed(1)} MB` : `${(f / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return be(async () => {
      await _(), g = await je("wallpaper-switcher-changed", O), v = await je("wallpaper-switcher-error", (f) => {
        $.msg(f.payload?.message || "定时切换失败", "error");
      });
    }), $n(() => {
      g?.(), v?.();
    }), (f, l) => (x(), I("main", Ki, [
      r("header", Ji, [
        r("div", qi, [
          d(s(Ze), { size: 20 }),
          l[15] || (l[15] = r(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ]),
        r("div", Qi, [
          r("button", {
            type: "button",
            class: "icon-btn",
            title: "打开在线网格",
            onClick: ie
          }, [
            d(s(Vi), { size: 19 })
          ]),
          r("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: Re
          }, [
            d(s(et), { size: 22 })
          ])
        ])
      ]),
      s(o) && !s(o).supported ? (x(), I("section", Yi, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : Z("v-if", !0),
      r(
        "div",
        {
          class: C(["content", { dimmed: s(c) }])
        },
        [
          r("section", Xi, [
            r("div", el, [
              s(p) ? (x(), I("img", {
                key: 0,
                src: s(p),
                alt: "当前壁纸预览"
              }, null, 8, tl)) : (x(), I("div", nl, [
                d(s(Ze), { size: 42 }),
                l[16] || (l[16] = r(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            r("div", ol, [
              l[20] || (l[20] = r(
                "h2",
                null,
                "当前状态",
                -1
                /* HOISTED */
              )),
              r("div", sl, [
                l[17] || (l[17] = r(
                  "span",
                  null,
                  "来源：",
                  -1
                  /* HOISTED */
                )),
                r(
                  "strong",
                  null,
                  j(s(z)),
                  1
                  /* TEXT */
                )
              ]),
              r("div", il, [
                l[18] || (l[18] = r(
                  "span",
                  null,
                  "分辨率：",
                  -1
                  /* HOISTED */
                )),
                r(
                  "strong",
                  null,
                  j(s(m)),
                  1
                  /* TEXT */
                )
              ]),
              r("div", ll, [
                l[19] || (l[19] = r(
                  "span",
                  null,
                  "下次切换：",
                  -1
                  /* HOISTED */
                )),
                r(
                  "strong",
                  null,
                  j(s(W)),
                  1
                  /* TEXT */
                )
              ]),
              r("div", rl, [
                r("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(h),
                  onClick: q
                }, [
                  d(s(Ui), { size: 17 }),
                  N(
                    " " + j(s(h) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, al),
                r("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: L
                }, " 设为固定 ")
              ])
            ])
          ]),
          r("section", ul, [
            r("div", cl, [
              l[21] || (l[21] = r(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              r("div", dl, [
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).mode === "fixed" }),
                    onClick: l[0] || (l[0] = (w) => s(n).mode = "fixed")
                  },
                  " 固定图片 ",
                  2
                  /* CLASS */
                ),
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).mode === "folder" }),
                    onClick: l[1] || (l[1] = (w) => s(n).mode = "folder")
                  },
                  " 本地文件夹 ",
                  2
                  /* CLASS */
                ),
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).mode === "wallhaven" }),
                    onClick: l[2] || (l[2] = (w) => s(n).mode = "wallhaven")
                  },
                  " Wallhaven 在线 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            r("div", hl, [
              l[23] || (l[23] = r(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              H(r(
                "input",
                {
                  "onUpdate:modelValue": l[3] || (l[3] = (w) => s(n).fixedImagePath = w),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers\\city.png",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [xe, s(n).fixedImagePath]
              ]),
              r("button", {
                type: "button",
                class: "tool-btn",
                onClick: k
              }, [
                d(s(Ze), { size: 16 }),
                l[22] || (l[22] = N(" 选择图片 "))
              ])
            ]),
            r("div", fl, [
              l[26] || (l[26] = r(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              H(r(
                "input",
                {
                  "onUpdate:modelValue": l[4] || (l[4] = (w) => s(n).folderPath = w),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [xe, s(n).folderPath]
              ]),
              r("button", {
                type: "button",
                class: "tool-btn",
                onClick: U
              }, [
                d(s(Hi), { size: 16 }),
                l[24] || (l[24] = N(" 选择 "))
              ]),
              r("button", {
                type: "button",
                class: "tool-btn",
                onClick: B
              }, [
                d(s(wn), { size: 16 }),
                l[25] || (l[25] = N(" 扫描 "))
              ])
            ]),
            r(
              "div",
              pl,
              j(s(y)),
              1
              /* TEXT */
            ),
            r("div", gl, [
              l[28] || (l[28] = r(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              l[29] || (l[29] = r(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              r("div", vl, [
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).wallhavenSource === "hot" }),
                    onClick: l[5] || (l[5] = (w) => s(n).wallhavenSource = "hot")
                  },
                  " 热门 Hot ",
                  2
                  /* CLASS */
                ),
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).wallhavenSource === "toplist" }),
                    onClick: l[6] || (l[6] = (w) => s(n).wallhavenSource = "toplist")
                  },
                  " 排行榜 Toplist ",
                  2
                  /* CLASS */
                )
              ]),
              r("button", {
                type: "button",
                class: "tool-btn grid-open",
                onClick: ie
              }, [
                d(s(mn), { size: 16 }),
                l[27] || (l[27] = N(" 打开在线网格 "))
              ])
            ]),
            r("div", yl, [
              l[30] || (l[30] = r(
                "span",
                null,
                "屏幕匹配",
                -1
                /* HOISTED */
              )),
              r(
                "strong",
                null,
                j(s(m)),
                1
                /* TEXT */
              )
            ])
          ]),
          r("section", wl, [
            l[38] || (l[38] = r(
              "h2",
              null,
              "切换规则",
              -1
              /* HOISTED */
            )),
            r("div", ml, [
              r("label", bl, [
                H(r(
                  "input",
                  {
                    "onUpdate:modelValue": l[7] || (l[7] = (w) => s(n).scheduleEnabled = w),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [ht, s(n).scheduleEnabled]
                ]),
                l[31] || (l[31] = r(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                )),
                l[32] || (l[32] = N(" 启用定时切换 "))
              ]),
              r("label", _l, [
                l[33] || (l[33] = N(" 每 ")),
                H(r(
                  "input",
                  {
                    "onUpdate:modelValue": l[8] || (l[8] = (w) => s(n).intervalMinutes = w),
                    type: "number",
                    min: "1",
                    max: "1440"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [
                    xe,
                    s(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                l[34] || (l[34] = N(" 分钟 "))
              ]),
              l[35] || (l[35] = r(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              r("div", kl, [
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).order === "random" }),
                    onClick: l[9] || (l[9] = (w) => s(n).order = "random")
                  },
                  " 随机 ",
                  2
                  /* CLASS */
                ),
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).order === "sequential" }),
                    onClick: l[10] || (l[10] = (w) => s(n).order = "sequential")
                  },
                  " 顺序 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            r("div", Cl, [
              l[37] || (l[37] = r(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              r("div", xl, [
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).fitMode === "fillCrop" }),
                    onClick: l[11] || (l[11] = (w) => s(n).fitMode = "fillCrop")
                  },
                  " 填充裁切 ",
                  2
                  /* CLASS */
                ),
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).fitMode === "fit" }),
                    onClick: l[12] || (l[12] = (w) => s(n).fitMode = "fit")
                  },
                  " 适应 ",
                  2
                  /* CLASS */
                ),
                r(
                  "button",
                  {
                    type: "button",
                    class: C({ active: s(n).fitMode === "center" }),
                    onClick: l[13] || (l[13] = (w) => s(n).fitMode = "center")
                  },
                  " 居中 ",
                  2
                  /* CLASS */
                )
              ]),
              r("label", Sl, [
                H(r(
                  "input",
                  {
                    "onUpdate:modelValue": l[14] || (l[14] = (w) => s(n).autoRestore = w),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [ht, s(n).autoRestore]
                ]),
                l[36] || (l[36] = N(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          r("footer", Ll, [
            r("div", Ol, [
              l[39] || (l[39] = r(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              l[40] || (l[40] = r(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              r(
                "span",
                null,
                j(s(A)),
                1
                /* TEXT */
              )
            ]),
            r("div", zl, [
              r("button", {
                type: "button",
                class: "secondary-btn",
                onClick: _e
              }, [
                d(s(Bi), { size: 16 }),
                l[41] || (l[41] = N(" 清理缓存 "))
              ]),
              r("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(a),
                onClick: K
              }, [
                d(s(Zi), { size: 17 }),
                N(
                  " " + j(s(a) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, $l)
            ])
          ])
        ],
        2
        /* CLASS */
      )
    ]));
  }
}), bn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, Wl = /* @__PURE__ */ bn(Il, [["__scopeId", "data-v-e168738a"]]), jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wl
}, Symbol.toStringTag, { value: "Module" })), Pl = { class: "wallhaven-window" }, Tl = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Nl = { class: "title" }, Ml = { class: "top-actions" }, El = { class: "source-toggle" }, Dl = { class: "filters" }, Fl = { class: "search-box" }, Al = { class: "resolution" }, Bl = { class: "chips" }, Rl = { class: "source-select" }, Hl = { class: "grid-wrap" }, Vl = {
  key: 0,
  class: "empty-state"
}, Ul = {
  key: 1,
  class: "empty-state"
}, Gl = {
  key: 2,
  class: "wallpaper-grid"
}, Zl = ["onClick"], Kl = ["src", "alt"], Jl = { class: "card-actions" }, ql = ["onClick"], Ql = ["disabled", "onClick"], Yl = ["disabled", "onClick"], Xl = { class: "pager" }, er = { class: "source-note" }, tr = { class: "pager-actions" }, nr = ["disabled"], or = ["disabled"], sr = { class: "preview-dialog" }, ir = ["src"], lr = /* @__PURE__ */ T({
  __name: "index",
  setup(e) {
    const t = st(), n = S(vn()), o = S(null), i = S([]), c = S(1), a = S(1), h = S(!1), g = S(""), v = S("general"), p = S("hot"), m = S(null), z = S(/* @__PURE__ */ new Set()), W = b(() => "2560×1440"), A = b(() => p.value === "hot" ? "Hot" : "Toplist"), y = b(() => i.value.slice(0, 8)), _ = (f, l) => {
      const w = new Set(z.value);
      l ? w.add(f) : w.delete(f), z.value = w;
    }, O = async () => {
      const [f, l] = await Promise.all([
        yn(),
        Xe()
      ]);
      n.value = f, o.value = l, g.value = f.wallhavenQuery ?? "", v.value = f.wallhavenCategory || "general", p.value = f.wallhavenSource;
    }, K = async () => {
      n.value.wallhavenQuery = g.value.trim() || null, n.value.wallhavenCategory = v.value, n.value.wallhavenSource = p.value, n.value.mode = "wallhaven", await ze(n.value);
    }, k = async (f = c.value) => {
      h.value = !0;
      try {
        await K();
        const l = await Wi({
          source: p.value,
          page: f,
          query: g.value.trim() || null,
          category: v.value
        });
        i.value = l.data, c.value = l.page, a.value = Math.max(1, l.lastPage);
      } catch (l) {
        $.msg(String(l), "error");
      } finally {
        h.value = !1;
      }
    }, U = () => k(1), B = async (f) => {
      p.value = f, await k(1);
    }, q = async (f) => {
      v.value = f, await k(1);
    }, L = async (f) => {
      _(f.id, !0);
      try {
        await ji(f), $.msg("壁纸已设置", "success");
      } catch (l) {
        $.msg(String(l), "error");
      } finally {
        _(f.id, !1);
      }
    }, ie = async (f) => {
      _(f.id, !0);
      try {
        await Pi(f), $.msg("壁纸已下载到缓存", "success");
      } catch (l) {
        $.msg(String(l), "error");
      } finally {
        _(f.id, !1);
      }
    }, _e = async () => {
      c.value <= 1 || await k(c.value - 1);
    }, Re = async () => {
      c.value >= a.value || await k(c.value + 1);
    }, ke = async () => {
      await t.close();
    };
    return be(async () => {
      try {
        await O(), await k(1);
      } catch (f) {
        $.msg(String(f), "error");
      }
    }), (f, l) => (x(), I("main", Pl, [
      r("header", Tl, [
        r("div", Nl, [
          r("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: ke
          }, [
            d(s(Fi), { size: 22 })
          ]),
          l[11] || (l[11] = r(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ]),
        r("div", Ml, [
          r("div", El, [
            r(
              "button",
              {
                type: "button",
                class: C({ active: s(p) === "hot" }),
                onClick: l[0] || (l[0] = (w) => B("hot"))
              },
              "热门",
              2
              /* CLASS */
            ),
            r(
              "button",
              {
                type: "button",
                class: C({ active: s(p) === "toplist" }),
                onClick: l[1] || (l[1] = (w) => B("toplist"))
              },
              "排行榜",
              2
              /* CLASS */
            )
          ]),
          r("button", {
            type: "button",
            class: "flat-icon",
            title: "关闭",
            onClick: ke
          }, [
            d(s(et), { size: 23 })
          ])
        ])
      ]),
      r("section", Dl, [
        r("div", Fl, [
          H(r(
            "input",
            {
              "onUpdate:modelValue": l[2] || (l[2] = (w) => Ke(g) ? g.value = w : null),
              type: "search",
              placeholder: "搜索关键词",
              onKeydown: In(U, ["enter"])
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [xe, s(g)]
          ]),
          r("button", {
            type: "button",
            title: "搜索",
            onClick: U
          }, [
            d(s(mn), { size: 18 })
          ])
        ]),
        r("label", Al, [
          l[12] || (l[12] = r(
            "span",
            null,
            "分辨率",
            -1
            /* HOISTED */
          )),
          r(
            "strong",
            null,
            "自动匹配 " + j(s(W)),
            1
            /* TEXT */
          )
        ]),
        r("div", Bl, [
          r(
            "button",
            {
              type: "button",
              class: C({ active: s(v) === "general" }),
              onClick: l[3] || (l[3] = (w) => q("general"))
            },
            "通用",
            2
            /* CLASS */
          ),
          r(
            "button",
            {
              type: "button",
              class: C({ active: s(v) === "anime" }),
              onClick: l[4] || (l[4] = (w) => q("anime"))
            },
            "动漫",
            2
            /* CLASS */
          ),
          r(
            "button",
            {
              type: "button",
              class: C({ active: s(v) === "people" }),
              onClick: l[5] || (l[5] = (w) => q("people"))
            },
            "人物",
            2
            /* CLASS */
          )
        ]),
        r("label", Rl, [
          l[14] || (l[14] = r(
            "span",
            null,
            "源",
            -1
            /* HOISTED */
          )),
          H(r(
            "select",
            {
              "onUpdate:modelValue": l[6] || (l[6] = (w) => Ke(p) ? p.value = w : null),
              onChange: U
            },
            l[13] || (l[13] = [
              r(
                "option",
                { value: "hot" },
                "Hot",
                -1
                /* HOISTED */
              ),
              r(
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
            [Wn, s(p)]
          ])
        ]),
        r("button", {
          type: "button",
          class: "refresh-btn",
          title: "刷新",
          onClick: U
        }, [
          d(s(wn), {
            size: 18,
            class: C({ spinning: s(h) })
          }, null, 8, ["class"])
        ])
      ]),
      r("section", Hl, [
        s(h) && s(y).length === 0 ? (x(), I("div", Vl, "正在加载 Wallhaven 壁纸...")) : s(y).length === 0 ? (x(), I("div", Ul, "暂无可用壁纸")) : (x(), I("div", Gl, [
          (x(!0), I(
            nt,
            null,
            jn(s(y), (w) => (x(), I("article", {
              key: w.id,
              class: "wallpaper-card"
            }, [
              r("button", {
                type: "button",
                class: "thumb",
                onClick: (He) => m.value = w
              }, [
                r("img", {
                  src: w.thumbs.large,
                  alt: w.resolution,
                  loading: "lazy"
                }, null, 8, Kl),
                r(
                  "span",
                  null,
                  j(w.resolution),
                  1
                  /* TEXT */
                )
              ], 8, Zl),
              r("div", Jl, [
                r("button", {
                  type: "button",
                  title: "预览",
                  onClick: (He) => m.value = w
                }, [
                  d(s(Gi), { size: 16 }),
                  l[15] || (l[15] = N(" 预览 "))
                ], 8, ql),
                r("button", {
                  type: "button",
                  title: "设为壁纸",
                  disabled: s(z).has(w.id),
                  onClick: (He) => L(w)
                }, [
                  d(s(Ai), { size: 16 }),
                  l[16] || (l[16] = N(" 设为 "))
                ], 8, Ql),
                r("button", {
                  type: "button",
                  title: "下载",
                  disabled: s(z).has(w.id),
                  onClick: (He) => ie(w)
                }, [
                  d(s(Ri), { size: 16 }),
                  l[17] || (l[17] = N(" 下载 "))
                ], 8, Yl)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      r("footer", Xl, [
        r(
          "span",
          null,
          "第 " + j(s(c)) + " 页",
          1
          /* TEXT */
        ),
        r(
          "span",
          er,
          "来源：" + j(s(A)) + " · SFW",
          1
          /* TEXT */
        ),
        r("div", tr, [
          r("button", {
            type: "button",
            disabled: s(c) <= 1 || s(h),
            onClick: _e
          }, "上一页", 8, nr),
          r("button", {
            type: "button",
            disabled: s(c) >= s(a) || s(h),
            onClick: Re
          }, "下一页", 8, or)
        ])
      ]),
      s(m) ? (x(), I("div", {
        key: 0,
        class: "preview-modal",
        onClick: l[10] || (l[10] = ot((w) => m.value = null, ["self"]))
      }, [
        r("div", sr, [
          r("header", null, [
            r(
              "strong",
              null,
              j(s(m).resolution),
              1
              /* TEXT */
            ),
            r("button", {
              type: "button",
              class: "flat-icon",
              onClick: l[7] || (l[7] = (w) => m.value = null)
            }, [
              d(s(et), { size: 23 })
            ])
          ]),
          r("img", {
            src: s(m).thumbs.original || s(m).thumbs.large,
            alt: "壁纸预览"
          }, null, 8, ir),
          r("footer", null, [
            r("button", {
              type: "button",
              class: "secondary-btn",
              onClick: l[8] || (l[8] = (w) => ie(s(m)))
            }, "下载缓存"),
            r("button", {
              type: "button",
              class: "primary-btn",
              onClick: l[9] || (l[9] = (w) => L(s(m)))
            }, "设为壁纸")
          ])
        ])
      ])) : Z("v-if", !0)
    ]));
  }
}), rr = /* @__PURE__ */ bn(lr, [["__scopeId", "data-v-36902895"]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" }));
export {
  cr as activate
};
