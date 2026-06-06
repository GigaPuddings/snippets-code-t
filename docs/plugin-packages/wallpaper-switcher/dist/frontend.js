import { getCurrentInstance as re, inject as Y, ref as x, computed as m, unref as i, readonly as bn, getCurrentScope as _n, onScopeDispose as kn, onMounted as _e, nextTick as Cn, watch as Fe, isRef as Ze, warn as Sn, provide as xn, defineComponent as N, createElementBlock as W, openBlock as C, mergeProps as Ln, renderSlot as ae, createElementVNode as l, normalizeClass as k, createVNode as h, Transition as et, withCtx as X, withDirectives as U, normalizeStyle as Ie, createTextVNode as M, toDisplayString as P, vShow as We, shallowReactive as On, createBlock as Z, createCommentVNode as K, resolveDynamicComponent as Nt, Fragment as tt, withModifiers as nt, isVNode as we, render as je, onUnmounted as zn, vModelText as xe, vModelCheckbox as dt, withKeys as $n, vModelSelect as In, renderList as Wn } from "vue";
const ur = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => Wl)
  }), e.registerRoute({
    target: "window",
    path: "/wallpaper-wallhaven",
    name: "WallpaperWallhaven",
    component: () => Promise.resolve().then(() => rr)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function jn(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Pn(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Le;
const R = "__TAURI_TO_IPC_KEY__";
function Tn(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function c(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Nn(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Mn {
  get rid() {
    return jn(this, Le, "f");
  }
  constructor(t) {
    Le.set(this, void 0), Pn(this, Le, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return c("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Le = /* @__PURE__ */ new WeakMap();
var D;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(D || (D = {}));
async function Mt(e, t) {
  await c("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Pe(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return c("plugin:event|listen", {
    event: e,
    target: s,
    handler: Tn(t)
  }).then((d) => async () => Mt(e, d));
}
async function En(e, t, n) {
  return Pe(e, (o) => {
    Mt(e, o.id), t(o);
  }, n);
}
async function Dn(e, t) {
  await c("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Fn(e, t, n) {
  await c("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Et {
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
    return new ve(this.width * t, this.height * t);
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
class ve {
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
    return new Et(this.width / t, this.height / t);
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
class le {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Et ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ve ? this.size : this.size.toPhysical(t);
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
class Dt {
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
    return new q(this.x * t, this.y * t);
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
class q {
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
    return new Dt(this.x / t, this.y / t);
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
class Se {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Dt ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof q ? this.position : this.position.toPhysical(t);
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
class ye extends Mn {
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
    return c("plugin:image|new", {
      rgba: Te(t),
      width: n,
      height: o
    }).then((s) => new ye(s));
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
    return c("plugin:image|from_bytes", {
      bytes: Te(t)
    }).then((n) => new ye(n));
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
    return c("plugin:image|from_path", { path: t }).then((n) => new ye(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return c("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return c("plugin:image|size", { rid: this.rid });
  }
}
function Te(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ye ? e.rid : e;
}
var Ke;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ke || (Ke = {}));
class An {
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
var ht;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ht || (ht = {}));
function ot() {
  return new Ft(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function He() {
  return c("plugin:window|get_all_windows").then((e) => e.map((t) => new Ft(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ve = ["tauri://created", "tauri://error"];
class Ft {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || c("plugin:window|create", {
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
    return (n = (await He()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ot();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return He();
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
    for (const t of await He())
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
    } : Pe(t, n, {
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
    } : En(t, n, {
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
    if (Ve.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Dn(t, n);
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
    if (Ve.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Fn(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Ve.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return c("plugin:window|scale_factor", {
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
    return c("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new q(t));
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
    return c("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new q(t));
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
    return c("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new ve(t));
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
    return c("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new ve(t));
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
    return c("plugin:window|is_fullscreen", {
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
    return c("plugin:window|is_minimized", {
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
    return c("plugin:window|is_maximized", {
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
    return c("plugin:window|is_focused", {
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
    return c("plugin:window|is_decorated", {
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
    return c("plugin:window|is_resizable", {
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
    return c("plugin:window|is_maximizable", {
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
    return c("plugin:window|is_minimizable", {
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
    return c("plugin:window|is_closable", {
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
    return c("plugin:window|is_visible", {
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
    return c("plugin:window|title", {
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
    return c("plugin:window|theme", {
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
    return c("plugin:window|is_always_on_top", {
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
    return c("plugin:window|center", {
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
    return t && (t === Ke.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), c("plugin:window|request_user_attention", {
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
    return c("plugin:window|set_resizable", {
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
    return c("plugin:window|set_enabled", {
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
    return c("plugin:window|is_enabled", {
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
    return c("plugin:window|set_maximizable", {
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
    return c("plugin:window|set_minimizable", {
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
    return c("plugin:window|set_closable", {
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
    return c("plugin:window|set_title", {
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
    return c("plugin:window|maximize", {
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
    return c("plugin:window|unmaximize", {
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
    return c("plugin:window|toggle_maximize", {
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
    return c("plugin:window|minimize", {
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
    return c("plugin:window|unminimize", {
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
    return c("plugin:window|show", {
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
    return c("plugin:window|hide", {
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
    return c("plugin:window|close", {
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
    return c("plugin:window|destroy", {
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
    return c("plugin:window|set_decorations", {
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
    return c("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return c("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return c("plugin:window|set_effects", {
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
    return c("plugin:window|set_always_on_top", {
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
    return c("plugin:window|set_always_on_bottom", {
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
    return c("plugin:window|set_content_protected", {
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
    return c("plugin:window|set_size", {
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
    return c("plugin:window|set_min_size", {
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
    return c("plugin:window|set_max_size", {
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
    return c("plugin:window|set_size_constraints", {
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
    return c("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Se ? t : new Se(t)
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
    return c("plugin:window|set_fullscreen", {
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
    return c("plugin:window|set_focus", {
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
    return c("plugin:window|set_icon", {
      label: this.label,
      value: Te(t)
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
    return c("plugin:window|set_skip_taskbar", {
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
    return c("plugin:window|set_cursor_grab", {
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
    return c("plugin:window|set_cursor_visible", {
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
    return c("plugin:window|set_cursor_icon", {
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
    return c("plugin:window|set_background_color", { color: t });
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
    return c("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Se ? t : new Se(t)
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
    return c("plugin:window|set_ignore_cursor_events", {
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
    return c("plugin:window|start_dragging", {
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
    return c("plugin:window|start_resize_dragging", {
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
    return c("plugin:window|set_badge_count", {
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
    return c("plugin:window|set_badge_label", {
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
    return c("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Te(t) : void 0
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
    return c("plugin:window|set_progress_bar", {
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
    return c("plugin:window|set_visible_on_all_workspaces", {
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
    return c("plugin:window|set_title_bar_style", {
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
    return c("plugin:window|set_theme", {
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
      n.payload = new ve(n.payload), t(n);
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
      n.payload = new q(n.payload), t(n);
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
      const o = new An(n);
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
    const n = await this.listen(D.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new q(a.payload.position)
        }
      });
    }), o = await this.listen(D.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new q(a.payload.position)
        }
      });
    }), s = await this.listen(D.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new q(a.payload.position)
        }
      });
    }), d = await this.listen(D.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), d();
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
    const n = await this.listen(D.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(D.WINDOW_BLUR, (s) => {
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
var ft;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ft || (ft = {}));
var pt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(pt || (pt = {}));
var gt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(gt || (gt = {}));
async function vt(e = {}) {
  return typeof e == "object" && Object.freeze(e), await c("plugin:dialog|open", { options: e });
}
const At = Symbol(), Oe = "el", Bn = "is-", Q = (e, t, n, o, s) => {
  let d = `${e}-${t}`;
  return n && (d += `-${n}`), o && (d += `__${o}`), s && (d += `--${s}`), d;
}, Bt = Symbol("namespaceContextKey"), Rn = (e) => {
  const t = e || (re() ? Y(Bt, x(Oe)) : x(Oe));
  return m(() => i(t) || Oe);
}, st = (e, t) => {
  const n = Rn(t);
  return {
    namespace: n,
    b: (v = "") => Q(n.value, e, v, "", ""),
    e: (v) => v ? Q(n.value, e, "", v, "") : "",
    m: (v) => v ? Q(n.value, e, "", "", v) : "",
    be: (v, b) => v && b ? Q(n.value, e, v, b, "") : "",
    em: (v, b) => v && b ? Q(n.value, e, "", v, b) : "",
    bm: (v, b) => v && b ? Q(n.value, e, v, "", b) : "",
    bem: (v, b, O) => v && b && O ? Q(n.value, e, v, b, O) : "",
    is: (v, ...b) => {
      const O = b.length >= 1 ? b[0] : !0;
      return v && O ? `${Bn}${v}` : "";
    },
    cssVar: (v) => {
      const b = {};
      for (const O in v)
        v[O] && (b[`--${n.value}-${O}`] = v[O]);
      return b;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const b = {};
      for (const O in v)
        v[O] && (b[`--${n.value}-${e}-${O}`] = v[O]);
      return b;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Hn = Object.prototype.hasOwnProperty, yt = (e, t) => Hn.call(e, t), me = (e) => typeof e == "function", ee = (e) => typeof e == "string", Rt = (e) => e !== null && typeof e == "object";
var Vn = typeof global == "object" && global && global.Object === Object && global, Un = typeof self == "object" && self && self.Object === Object && self, it = Vn || Un || Function("return this")(), ue = it.Symbol, Ht = Object.prototype, Gn = Ht.hasOwnProperty, Zn = Ht.toString, ge = ue ? ue.toStringTag : void 0;
function Kn(e) {
  var t = Gn.call(e, ge), n = e[ge];
  try {
    e[ge] = void 0;
    var o = !0;
  } catch {
  }
  var s = Zn.call(e);
  return o && (t ? e[ge] = n : delete e[ge]), s;
}
var Jn = Object.prototype, qn = Jn.toString;
function Qn(e) {
  return qn.call(e);
}
var Yn = "[object Null]", Xn = "[object Undefined]", wt = ue ? ue.toStringTag : void 0;
function Vt(e) {
  return e == null ? e === void 0 ? Xn : Yn : wt && wt in Object(e) ? Kn(e) : Qn(e);
}
function eo(e) {
  return e != null && typeof e == "object";
}
var to = "[object Symbol]";
function lt(e) {
  return typeof e == "symbol" || eo(e) && Vt(e) == to;
}
function no(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var rt = Array.isArray, mt = ue ? ue.prototype : void 0, bt = mt ? mt.toString : void 0;
function Ut(e) {
  if (typeof e == "string")
    return e;
  if (rt(e))
    return no(e, Ut) + "";
  if (lt(e))
    return bt ? bt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Gt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var oo = "[object AsyncFunction]", so = "[object Function]", io = "[object GeneratorFunction]", lo = "[object Proxy]";
function ro(e) {
  if (!Gt(e))
    return !1;
  var t = Vt(e);
  return t == so || t == io || t == oo || t == lo;
}
var Ue = it["__core-js_shared__"], _t = function() {
  var e = /[^.]+$/.exec(Ue && Ue.keys && Ue.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ao(e) {
  return !!_t && _t in e;
}
var uo = Function.prototype, co = uo.toString;
function ho(e) {
  if (e != null) {
    try {
      return co.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var fo = /[\\^$.*+?()[\]{}|]/g, po = /^\[object .+?Constructor\]$/, go = Function.prototype, vo = Object.prototype, yo = go.toString, wo = vo.hasOwnProperty, mo = RegExp(
  "^" + yo.call(wo).replace(fo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bo(e) {
  if (!Gt(e) || ao(e))
    return !1;
  var t = ro(e) ? mo : po;
  return t.test(ho(e));
}
function _o(e, t) {
  return e?.[t];
}
function Zt(e, t) {
  var n = _o(e, t);
  return bo(n) ? n : void 0;
}
function ko(e, t) {
  return e === t || e !== e && t !== t;
}
var Co = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, So = /^\w*$/;
function xo(e, t) {
  if (rt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || lt(e) ? !0 : So.test(e) || !Co.test(e) || t != null && e in Object(t);
}
var be = Zt(Object, "create");
function Lo() {
  this.__data__ = be ? be(null) : {}, this.size = 0;
}
function Oo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zo = "__lodash_hash_undefined__", $o = Object.prototype, Io = $o.hasOwnProperty;
function Wo(e) {
  var t = this.__data__;
  if (be) {
    var n = t[e];
    return n === zo ? void 0 : n;
  }
  return Io.call(t, e) ? t[e] : void 0;
}
var jo = Object.prototype, Po = jo.hasOwnProperty;
function To(e) {
  var t = this.__data__;
  return be ? t[e] !== void 0 : Po.call(t, e);
}
var No = "__lodash_hash_undefined__";
function Mo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = be && t === void 0 ? No : t, this;
}
function te(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
te.prototype.clear = Lo;
te.prototype.delete = Oo;
te.prototype.get = Wo;
te.prototype.has = To;
te.prototype.set = Mo;
function Eo() {
  this.__data__ = [], this.size = 0;
}
function Ae(e, t) {
  for (var n = e.length; n--; )
    if (ko(e[n][0], t))
      return n;
  return -1;
}
var Do = Array.prototype, Fo = Do.splice;
function Ao(e) {
  var t = this.__data__, n = Ae(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Fo.call(t, n, 1), --this.size, !0;
}
function Bo(e) {
  var t = this.__data__, n = Ae(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ro(e) {
  return Ae(this.__data__, e) > -1;
}
function Ho(e, t) {
  var n = this.__data__, o = Ae(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function he(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
he.prototype.clear = Eo;
he.prototype.delete = Ao;
he.prototype.get = Bo;
he.prototype.has = Ro;
he.prototype.set = Ho;
var Vo = Zt(it, "Map");
function Uo() {
  this.size = 0, this.__data__ = {
    hash: new te(),
    map: new (Vo || he)(),
    string: new te()
  };
}
function Go(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Be(e, t) {
  var n = e.__data__;
  return Go(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Zo(e) {
  var t = Be(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ko(e) {
  return Be(this, e).get(e);
}
function Jo(e) {
  return Be(this, e).has(e);
}
function qo(e, t) {
  var n = Be(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oe.prototype.clear = Uo;
oe.prototype.delete = Zo;
oe.prototype.get = Ko;
oe.prototype.has = Jo;
oe.prototype.set = qo;
var Qo = "Expected a function";
function at(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Qo);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], d = n.cache;
    if (d.has(s))
      return d.get(s);
    var a = e.apply(this, o);
    return n.cache = d.set(s, a) || d, a;
  };
  return n.cache = new (at.Cache || oe)(), n;
}
at.Cache = oe;
var Yo = 500;
function Xo(e) {
  var t = at(e, function(o) {
    return n.size === Yo && n.clear(), o;
  }), n = t.cache;
  return t;
}
var es = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ts = /\\(\\)?/g, ns = Xo(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(es, function(n, o, s, d) {
    t.push(s ? d.replace(ts, "$1") : o || n);
  }), t;
});
function os(e) {
  return e == null ? "" : Ut(e);
}
function ss(e, t) {
  return rt(e) ? e : xo(e, t) ? [e] : ns(os(e));
}
function is(e) {
  if (typeof e == "string" || lt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ls(e, t) {
  t = ss(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[is(t[n++])];
  return n && n == o ? e : void 0;
}
function rs(e, t, n) {
  var o = e == null ? void 0 : ls(e, t);
  return o === void 0 ? n : o;
}
function as(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const Kt = (e) => e === void 0, kt = (e) => typeof e == "boolean", ne = (e) => typeof e == "number", Je = (e) => typeof Element > "u" ? !1 : e instanceof Element, us = (e) => ee(e) ? !Number.isNaN(Number(e)) : !1;
var Ct;
const se = typeof window < "u", cs = (e) => typeof e == "string", ds = () => {
};
se && ((Ct = window?.navigator) != null && Ct.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ut(e) {
  return typeof e == "function" ? e() : i(e);
}
function hs(e) {
  return e;
}
function ct(e) {
  return _n() ? (kn(e), !0) : !1;
}
function fs(e, t = !0) {
  re() ? _e(e) : t ? e() : Cn(e);
}
function Jt(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = x(!1);
  let d = null;
  function a() {
    d && (clearTimeout(d), d = null);
  }
  function f() {
    s.value = !1, a();
  }
  function g(...y) {
    a(), s.value = !0, d = setTimeout(() => {
      s.value = !1, d = null, e(...y);
    }, ut(t));
  }
  return o && (s.value = !0, se && g()), ct(f), {
    isPending: bn(s),
    start: g,
    stop: f
  };
}
function qt(e) {
  var t;
  const n = ut(e);
  return (t = n?.$el) != null ? t : n;
}
const Qt = se ? window : void 0;
function Yt(...e) {
  let t, n, o, s;
  if (cs(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = Qt) : [t, n, o, s] = e, !t)
    return ds;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const d = [], a = () => {
    d.forEach((p) => p()), d.length = 0;
  }, f = (p, w, $, j) => (p.addEventListener(w, $, j), () => p.removeEventListener(w, $, j)), g = Fe(() => [qt(t), ut(s)], ([p, w]) => {
    a(), p && d.push(...n.flatMap(($) => o.map((j) => f(p, $, j, w))));
  }, { immediate: !0, flush: "post" }), y = () => {
    g(), a();
  };
  return ct(y), y;
}
function ps(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), fs(o, t), n;
}
const St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xt = "__vueuse_ssr_handlers__";
St[xt] = St[xt] || {};
var Lt = Object.getOwnPropertySymbols, gs = Object.prototype.hasOwnProperty, vs = Object.prototype.propertyIsEnumerable, ys = (e, t) => {
  var n = {};
  for (var o in e)
    gs.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Lt)
    for (var o of Lt(e))
      t.indexOf(o) < 0 && vs.call(e, o) && (n[o] = e[o]);
  return n;
};
function ws(e, t, n = {}) {
  const o = n, { window: s = Qt } = o, d = ys(o, ["window"]);
  let a;
  const f = ps(() => s && "ResizeObserver" in s), g = () => {
    a && (a.disconnect(), a = void 0);
  }, y = Fe(() => qt(e), (w) => {
    g(), f.value && s && w && (a = new ResizeObserver(t), a.observe(w, d));
  }, { immediate: !0, flush: "post" }), p = () => {
    g(), y();
  };
  return ct(p), {
    isSupported: f,
    stop: p
  };
}
var Ot;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ot || (Ot = {}));
var ms = Object.defineProperty, zt = Object.getOwnPropertySymbols, bs = Object.prototype.hasOwnProperty, _s = Object.prototype.propertyIsEnumerable, $t = (e, t, n) => t in e ? ms(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ks = (e, t) => {
  for (var n in t || (t = {}))
    bs.call(t, n) && $t(e, n, t[n]);
  if (zt)
    for (var n of zt(t))
      _s.call(t, n) && $t(e, n, t[n]);
  return e;
};
const Cs = {
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
ks({
  linear: hs
}, Cs);
const It = {
  current: 0
}, Wt = x(0), Xt = 2e3, jt = Symbol("elZIndexContextKey"), en = Symbol("zIndexContextKey"), Ss = (e) => {
  const t = re() ? Y(jt, It) : It, n = e || (re() ? Y(en, void 0) : void 0), o = m(() => {
    const a = i(n);
    return ne(a) ? a : Xt;
  }), s = m(() => o.value + Wt.value), d = () => (t.current++, Wt.value = t.current, s.value);
  return !se && Y(jt), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: d
  };
};
var xs = {
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
const Ls = (e) => (t, n) => Os(t, n, i(e)), Os = (e, t, n) => rs(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var d;
  return `${(d = t?.[s]) != null ? d : `{${s}}`}`;
}), zs = (e) => {
  const t = m(() => i(e).name), n = Ze(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Ls(e)
  };
}, tn = Symbol("localeContextKey"), $s = (e) => {
  const t = e || Y(tn, x());
  return zs(m(() => t.value || xs));
}, nn = "__epPropKey", F = (e) => e, Is = (e) => Rt(e) && !!e[nn], on = (e, t) => {
  if (!Rt(e) || Is(e))
    return e;
  const { values: n, required: o, default: s, type: d, validator: a } = e, g = {
    type: d,
    required: !!o,
    validator: n || a ? (y) => {
      let p = !1, w = [];
      if (n && (w = Array.from(n), yt(e, "default") && w.push(s), p || (p = w.includes(y))), a && (p || (p = a(y))), !p && w.length > 0) {
        const $ = [...new Set(w)].map((j) => JSON.stringify(j)).join(", ");
        Sn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${$}], got value ${JSON.stringify(y)}.`);
      }
      return p;
    } : void 0,
    [nn]: !0
  };
  return yt(e, "default") && (g.default = s), g;
}, fe = (e) => as(Object.entries(e).map(([t, n]) => [
  t,
  on(n, t)
])), Ws = ["", "default", "small", "large"], js = on({
  type: String,
  values: Ws,
  required: !1
}), Ps = Symbol("size"), Ts = Symbol("emptyValuesContextKey"), Ns = fe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => me(e) ? !e() : !e
  }
}), Pt = (e) => Object.keys(e), Ne = x();
function sn(e, t = void 0) {
  return re() ? Y(At, Ne) : Ne;
}
function ln(e, t) {
  const n = sn(), o = st(e, m(() => {
    var f;
    return ((f = n.value) == null ? void 0 : f.namespace) || Oe;
  })), s = $s(m(() => {
    var f;
    return (f = n.value) == null ? void 0 : f.locale;
  })), d = Ss(m(() => {
    var f;
    return ((f = n.value) == null ? void 0 : f.zIndex) || Xt;
  })), a = m(() => {
    var f;
    return i(t) || ((f = n.value) == null ? void 0 : f.size) || "";
  });
  return rn(m(() => i(n) || {})), {
    ns: o,
    locale: s,
    zIndex: d,
    size: a
  };
}
const rn = (e, t, n = !1) => {
  var o;
  const s = !!re(), d = s ? sn() : void 0, a = (o = void 0) != null ? o : s ? xn : void 0;
  if (!a)
    return;
  const f = m(() => {
    const g = i(e);
    return d?.value ? Ms(d.value, g) : g;
  });
  return a(At, f), a(tn, m(() => f.value.locale)), a(Bt, m(() => f.value.namespace)), a(en, m(() => f.value.zIndex)), a(Ps, {
    size: m(() => f.value.size || "")
  }), a(Ts, m(() => ({
    emptyValues: f.value.emptyValues,
    valueOnClear: f.value.valueOnClear
  }))), (n || !Ne.value) && (Ne.value = f.value), f;
}, Ms = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Pt(e), ...Pt(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var Re = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function qe(e, t = "px") {
  if (!e)
    return "";
  if (ne(e) || us(e))
    return `${e}${t}`;
  if (ee(e))
    return e;
}
const an = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), un = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Es = fe({
  size: {
    type: F([Number, String])
  },
  color: {
    type: String
  }
}), Ds = N({
  name: "ElIcon",
  inheritAttrs: !1
}), Fs = /* @__PURE__ */ N({
  ...Ds,
  props: Es,
  setup(e) {
    const t = e, n = st("icon"), o = m(() => {
      const { size: s, color: d } = t;
      return !s && !d ? {} : {
        fontSize: Kt(s) ? void 0 : qe(s),
        "--color": d
      };
    });
    return (s, d) => (C(), W("i", Ln({
      class: i(n).b(),
      style: i(o)
    }, s.$attrs), [
      ae(s.$slots, "default")
    ], 16));
  }
});
var As = /* @__PURE__ */ Re(Fs, [["__file", "icon.vue"]]);
const Me = an(As);
/*! Element Plus Icons Vue v2.3.1 */
var Bs = /* @__PURE__ */ N({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (C(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Rs = Bs, Hs = /* @__PURE__ */ N({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (C(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), cn = Hs, Vs = /* @__PURE__ */ N({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (C(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Us = Vs, Gs = /* @__PURE__ */ N({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (C(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Zs = Gs, Ks = /* @__PURE__ */ N({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (C(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Js = Ks;
const dn = F([
  String,
  Object,
  Function
]), qs = {
  Close: cn
}, Qs = {
  Close: cn
}, Ee = {
  success: Zs,
  warning: Js,
  error: Rs,
  info: Us
}, Ys = (e) => e, ze = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Xs = fe({
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
}), ei = N({
  name: "ElBadge"
}), ti = /* @__PURE__ */ N({
  ...ei,
  props: Xs,
  setup(e, { expose: t }) {
    const n = e, o = st("badge"), s = m(() => n.isDot ? "" : ne(n.value) && ne(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), d = m(() => {
      var a, f, g, y, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: qe(-((f = (a = n.offset) == null ? void 0 : a[0]) != null ? f : 0)),
          marginTop: qe((y = (g = n.offset) == null ? void 0 : g[1]) != null ? y : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: s
    }), (a, f) => (C(), W("div", {
      class: k(i(o).b())
    }, [
      ae(a.$slots, "default"),
      h(et, {
        name: `${i(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: X(() => [
          U(l("sup", {
            class: k([
              i(o).e("content"),
              i(o).em("content", a.type),
              i(o).is("fixed", !!a.$slots.default),
              i(o).is("dot", a.isDot),
              i(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Ie(i(d))
          }, [
            ae(a.$slots, "content", { value: i(s) }, () => [
              M(P(i(s)), 1)
            ])
          ], 6), [
            [We, !a.hidden && (i(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ni = /* @__PURE__ */ Re(ti, [["__file", "badge.vue"]]);
const oi = an(ni), si = fe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: F(Object)
  },
  size: js,
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
  ...Ns
}), V = {};
N({
  name: "ElConfigProvider",
  props: si,
  setup(e, { slots: t }) {
    Fe(() => e.message, (o) => {
      Object.assign(V, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = rn(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
const hn = ["success", "info", "warning", "error"], T = Ys({
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
}), ii = fe({
  customClass: {
    type: String,
    default: T.customClass
  },
  center: {
    type: Boolean,
    default: T.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: T.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: T.duration
  },
  icon: {
    type: dn,
    default: T.icon
  },
  id: {
    type: String,
    default: T.id
  },
  message: {
    type: F([
      String,
      Object,
      Function
    ]),
    default: T.message
  },
  onClose: {
    type: F(Function),
    default: T.onClose
  },
  showClose: {
    type: Boolean,
    default: T.showClose
  },
  type: {
    type: String,
    values: hn,
    default: T.type
  },
  plain: {
    type: Boolean,
    default: T.plain
  },
  offset: {
    type: Number,
    default: T.offset
  },
  zIndex: {
    type: Number,
    default: T.zIndex
  },
  grouping: {
    type: Boolean,
    default: T.grouping
  },
  repeatNum: {
    type: Number,
    default: T.repeatNum
  }
}), li = {
  destroy: () => !0
}, G = On([]), ri = (e) => {
  const t = G.findIndex((s) => s.id === e), n = G[t];
  let o;
  return t > 0 && (o = G[t - 1]), { current: n, prev: o };
}, ai = (e) => {
  const { prev: t } = ri(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ui = (e, t) => G.findIndex((o) => o.id === e) > 0 ? 16 : t, ci = N({
  name: "ElMessage"
}), di = /* @__PURE__ */ N({
  ...ci,
  props: ii,
  emits: li,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Qs, { ns: s, zIndex: d } = ln("message"), { currentZIndex: a, nextZIndex: f } = d, g = x(), y = x(!1), p = x(0);
    let w;
    const $ = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), j = m(() => {
      const L = n.type;
      return { [s.bm("icon", L)]: L && Ee[L] };
    }), H = m(() => n.icon || Ee[n.type] || ""), v = m(() => ai(n.id)), b = m(() => ui(n.id, n.offset) + v.value), O = m(() => p.value + b.value), E = m(() => ({
      top: `${b.value}px`,
      zIndex: a.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: w } = Jt(() => {
        B();
      }, n.duration));
    }
    function J() {
      w?.();
    }
    function B() {
      y.value = !1;
    }
    function ie({ code: L }) {
      L === ze.esc && B();
    }
    return _e(() => {
      _(), f(), y.value = !0;
    }), Fe(() => n.repeatNum, () => {
      J(), _();
    }), Yt(document, "keydown", ie), ws(g, () => {
      p.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: y,
      bottom: O,
      close: B
    }), (L, pe) => (C(), Z(et, {
      name: i(s).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (ke) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        U(l("div", {
          id: L.id,
          ref_key: "messageRef",
          ref: g,
          class: k([
            i(s).b(),
            { [i(s).m(L.type)]: L.type },
            i(s).is("center", L.center),
            i(s).is("closable", L.showClose),
            i(s).is("plain", L.plain),
            L.customClass
          ]),
          style: Ie(i(E)),
          role: "alert",
          onMouseenter: J,
          onMouseleave: _
        }, [
          L.repeatNum > 1 ? (C(), Z(i(oi), {
            key: 0,
            value: L.repeatNum,
            type: i($),
            class: k(i(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : K("v-if", !0),
          i(H) ? (C(), Z(i(Me), {
            key: 1,
            class: k([i(s).e("icon"), i(j)])
          }, {
            default: X(() => [
              (C(), Z(Nt(i(H))))
            ]),
            _: 1
          }, 8, ["class"])) : K("v-if", !0),
          ae(L.$slots, "default", {}, () => [
            L.dangerouslyUseHTMLString ? (C(), W(tt, { key: 1 }, [
              K(" Caution here, message could've been compromised, never use user's input as message "),
              l("p", {
                class: k(i(s).e("content")),
                innerHTML: L.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (C(), W("p", {
              key: 0,
              class: k(i(s).e("content"))
            }, P(L.message), 3))
          ]),
          L.showClose ? (C(), Z(i(Me), {
            key: 2,
            class: k(i(s).e("closeBtn")),
            onClick: nt(B, ["stop"])
          }, {
            default: X(() => [
              h(i(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : K("v-if", !0)
        ], 46, ["id"]), [
          [We, y.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var hi = /* @__PURE__ */ Re(di, [["__file", "message.vue"]]);
let fi = 1;
const fn = (e) => {
  const t = !e || ee(e) || we(e) || me(e) ? { message: e } : e, n = {
    ...T,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ee(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Je(o) || (o = document.body), n.appendTo = o;
  }
  return kt(V.grouping) && !n.grouping && (n.grouping = V.grouping), ne(V.duration) && n.duration === 3e3 && (n.duration = V.duration), ne(V.offset) && n.offset === 16 && (n.offset = V.offset), kt(V.showClose) && !n.showClose && (n.showClose = V.showClose), n;
}, pi = (e) => {
  const t = G.indexOf(e);
  if (t === -1)
    return;
  G.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, gi = ({ appendTo: e, ...t }, n) => {
  const o = `message_${fi++}`, s = t.onClose, d = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), pi(p);
    },
    onDestroy: () => {
      je(null, d);
    }
  }, f = h(hi, a, me(a.message) || we(a.message) ? {
    default: me(a.message) ? a.message : () => a.message
  } : null);
  f.appContext = n || ce._context, je(f, d), e.appendChild(d.firstElementChild);
  const g = f.component, p = {
    id: o,
    vnode: f,
    vm: g,
    handler: {
      close: () => {
        g.exposed.visible.value = !1;
      }
    },
    props: f.component.props
  };
  return p;
}, ce = (e = {}, t) => {
  if (!se)
    return { close: () => {
    } };
  const n = fn(e);
  if (n.grouping && G.length) {
    const s = G.find(({ vnode: d }) => {
      var a;
      return ((a = d.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (ne(V.max) && G.length >= V.max)
    return { close: () => {
    } };
  const o = gi(n, t);
  return G.push(o), o.handler;
};
hn.forEach((e) => {
  ce[e] = (t = {}, n) => {
    const o = fn(t);
    return ce({ ...o, type: e }, n);
  };
});
function vi(e) {
  for (const t of G)
    (!e || e === t.props.type) && t.handler.close();
}
ce.closeAll = vi;
ce._context = null;
const yi = un(ce, "$message"), pn = [
  "success",
  "info",
  "warning",
  "error"
], wi = fe({
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
    type: dn
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
    values: [...pn, ""],
    default: ""
  },
  zIndex: Number
}), mi = {
  destroy: () => !0
}, bi = N({
  name: "ElNotification"
}), _i = /* @__PURE__ */ N({
  ...bi,
  props: wi,
  emits: mi,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = ln("notification"), { nextZIndex: d, currentZIndex: a } = s, { Close: f } = qs, g = x(!1);
    let y;
    const p = m(() => {
      const _ = n.type;
      return _ && Ee[n.type] ? o.m(_) : "";
    }), w = m(() => n.type && Ee[n.type] || n.icon), $ = m(() => n.position.endsWith("right") ? "right" : "left"), j = m(() => n.position.startsWith("top") ? "top" : "bottom"), H = m(() => {
      var _;
      return {
        [j.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : a.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: y } = Jt(() => {
        g.value && O();
      }, n.duration));
    }
    function b() {
      y?.();
    }
    function O() {
      g.value = !1;
    }
    function E({ code: _ }) {
      _ === ze.delete || _ === ze.backspace ? b() : _ === ze.esc ? g.value && O() : v();
    }
    return _e(() => {
      v(), d(), g.value = !0;
    }), Yt(document, "keydown", E), t({
      visible: g,
      close: O
    }), (_, J) => (C(), Z(et, {
      name: i(o).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (B) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        U(l("div", {
          id: _.id,
          class: k([i(o).b(), _.customClass, i($)]),
          style: Ie(i(H)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: v,
          onClick: _.onClick
        }, [
          i(w) ? (C(), Z(i(Me), {
            key: 0,
            class: k([i(o).e("icon"), i(p)])
          }, {
            default: X(() => [
              (C(), Z(Nt(i(w))))
            ]),
            _: 1
          }, 8, ["class"])) : K("v-if", !0),
          l("div", {
            class: k(i(o).e("group"))
          }, [
            l("h2", {
              class: k(i(o).e("title")),
              textContent: P(_.title)
            }, null, 10, ["textContent"]),
            U(l("div", {
              class: k(i(o).e("content")),
              style: Ie(_.title ? void 0 : { margin: 0 })
            }, [
              ae(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (C(), W(tt, { key: 1 }, [
                  K(" Caution here, message could've been compromised, never use user's input as message "),
                  l("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (C(), W("p", { key: 0 }, P(_.message), 1))
              ])
            ], 6), [
              [We, _.message]
            ]),
            _.showClose ? (C(), Z(i(Me), {
              key: 0,
              class: k(i(o).e("closeBtn")),
              onClick: nt(O, ["stop"])
            }, {
              default: X(() => [
                h(i(f))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : K("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [We, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ki = /* @__PURE__ */ Re(_i, [["__file", "notification.vue"]]);
const De = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Qe = 16;
let Ci = 1;
const de = function(e = {}, t) {
  if (!se)
    return { close: () => {
    } };
  (ee(e) || we(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  De[n].forEach(({ vm: p }) => {
    var w;
    o += (((w = p.el) == null ? void 0 : w.offsetHeight) || 0) + Qe;
  }), o += Qe;
  const s = `notification_${Ci++}`, d = e.onClose, a = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      Si(s, n, d);
    }
  };
  let f = document.body;
  Je(e.appendTo) ? f = e.appendTo : ee(e.appendTo) && (f = document.querySelector(e.appendTo)), Je(f) || (f = document.body);
  const g = document.createElement("div"), y = h(ki, a, me(a.message) ? a.message : we(a.message) ? () => a.message : null);
  return y.appContext = Kt(t) ? de._context : t, y.props.onDestroy = () => {
    je(null, g);
  }, je(y, g), De[n].push({ vm: y }), f.appendChild(g.firstElementChild), {
    close: () => {
      y.component.exposed.visible.value = !1;
    }
  };
};
pn.forEach((e) => {
  de[e] = (t = {}, n) => ((ee(t) || we(t)) && (t = {
    message: t
  }), de({ ...t, type: e }, n));
});
function Si(e, t, n) {
  const o = De[t], s = o.findIndex(({ vm: y }) => {
    var p;
    return ((p = y.component) == null ? void 0 : p.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: d } = o[s];
  if (!d)
    return;
  n?.(d);
  const a = d.el.offsetHeight, f = t.split("-")[0];
  o.splice(s, 1);
  const g = o.length;
  if (!(g < 1))
    for (let y = s; y < g; y++) {
      const { el: p, component: w } = o[y].vm, $ = Number.parseInt(p.style[f], 10) - a - Qe;
      w.props.offset = $;
    }
}
function xi() {
  for (const e of Object.values(De))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
de.closeAll = xi;
de._context = null;
const Li = un(de, "$notify"), I = {
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
      showClose: d = !1
    } = e;
    o === "center" ? yi({
      message: t,
      type: n,
      duration: s,
      showClose: d,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Li({
      message: t,
      type: n,
      position: o,
      duration: s,
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
}, gn = () => ({
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
}), Oi = (e) => e ? /^https?:\/\//i.test(e) ? e : Nn(e) : "", vn = () => c("wallpaper_get_config"), $e = (e) => c("wallpaper_save_config", { config: e }), Ye = () => c("wallpaper_get_status"), Tt = (e) => c("wallpaper_scan_folder", { path: e }), zi = (e) => c("wallpaper_set_fixed_image", { path: e }), $i = () => c("wallpaper_switch_now"), Ii = (e) => c("wallpaper_fetch_wallhaven", { params: e }), Wi = (e) => c("wallpaper_set_wallhaven_image", { wallpaper: e }), ji = (e) => c("wallpaper_download_wallhaven_image", { wallpaper: e }), Pi = () => c("wallpaper_clear_cache");
var Ti = {
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
function Ni() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Mi(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], d = t.theme || n.theme;
  switch (d) {
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
var Ei = Symbol("icon-context");
function A(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(d) {
      var a = Ni(), f = Y(Ei, Ti);
      return function() {
        var g = d.size, y = d.strokeWidth, p = d.strokeLinecap, w = d.strokeLinejoin, $ = d.theme, j = d.fill, H = d.spin, v = Mi(a, {
          size: g,
          strokeWidth: y,
          strokeLinecap: p,
          strokeLinejoin: w,
          theme: $,
          fill: j
        }, f), b = [f.prefix + "-icon"];
        return b.push(f.prefix + "-icon-" + e), t && f.rtl && b.push(f.prefix + "-icon-rtl"), H && b.push(f.prefix + "-icon-spin"), h("span", {
          class: b.join(" ")
        }, [n(v)]);
      };
    }
  };
  return o;
}
const Di = A("back", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xe = A("close-small", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fi = A("computer", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), h("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ai = A("delete", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Bi = A("download", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ri = A("folder-open", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Hi = A("grid-four", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("rect", {
    x: "5",
    y: "5",
    width: "38",
    height: "38",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 5V43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M5 24H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Vi = A("lightning", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ge = A("picture", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ui = A("preview-open", !1, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yn = A("refresh", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gi = A("save", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), h("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wn = A("search", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zi = { class: "wallpaper-window" }, Ki = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Ji = { class: "title" }, qi = { class: "window-actions" }, Qi = {
  key: 0,
  class: "unsupported"
}, Yi = { class: "top-panel" }, Xi = { class: "preview" }, el = ["src"], tl = {
  key: 1,
  class: "preview-empty"
}, nl = { class: "status-panel" }, ol = { class: "status-row" }, sl = { class: "status-row" }, il = { class: "status-row" }, ll = { class: "status-actions" }, rl = ["disabled"], al = { class: "card settings-card" }, ul = { class: "form-row mode-row" }, cl = { class: "segmented three" }, dl = { class: "form-row" }, hl = { class: "form-row" }, fl = { class: "hint-row" }, pl = { class: "form-row wallhaven-row" }, gl = { class: "segmented source" }, vl = { class: "hint-row" }, yl = { class: "card rules-card" }, wl = { class: "rules-line" }, ml = { class: "switch-label" }, bl = { class: "number-label" }, _l = { class: "segmented mini" }, kl = { class: "rules-line" }, Cl = { class: "segmented fit" }, Sl = { class: "checkbox-label" }, xl = { class: "footer-card" }, Ll = { class: "cache-info" }, Ol = { class: "footer-actions" }, zl = ["disabled"], $l = /* @__PURE__ */ N({
  __name: "index",
  setup(e) {
    const t = ot(), n = x(gn()), o = x(null), s = x(null), d = x(!1), a = x(!1), f = x(!1);
    let g = null, y = null;
    const p = m(() => Oi(o.value?.currentPath)), w = m(() => {
      const u = o.value;
      return u ? `${u.screenWidth} × ${u.screenHeight}` : "-";
    }), $ = m(() => o.value?.currentSource ? o.value.currentSource : n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), j = m(() => {
      const u = o.value?.nextSwitchAt;
      if (!n.value.scheduleEnabled || !u) return "未启用";
      const r = Math.max(0, u - Math.floor(Date.now() / 1e3));
      return r < 60 ? `${r} 秒后` : `${Math.ceil(r / 60)} 分钟后`;
    }), H = m(() => S(o.value?.cacheSizeBytes ?? 0)), v = m(() => s.value ? `检测到 ${s.value.count} 张可用图片` : "尚未扫描"), b = async () => {
      d.value = !0;
      try {
        const [u, r] = await Promise.all([
          vn(),
          Ye()
        ]);
        if (n.value = u, o.value = r, u.folderPath)
          try {
            s.value = await Tt(u.folderPath);
          } catch {
            s.value = null;
          }
      } catch (u) {
        I.msg(String(u), "error");
      } finally {
        d.value = !1;
      }
    }, O = async () => {
      try {
        o.value = await Ye();
      } catch (u) {
        I.msg(String(u), "error");
      }
    }, E = async () => {
      a.value = !0;
      try {
        await $e(n.value), await O(), I.msg("壁纸设置已保存", "success");
      } catch (u) {
        I.msg(String(u), "error");
      } finally {
        a.value = !1;
      }
    }, _ = async () => {
      const u = await vt({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof u == "string") {
        n.value.fixedImagePath = u, n.value.mode = "fixed";
        try {
          await zi(u), await b(), I.msg("已设置固定壁纸", "success");
        } catch (r) {
          I.msg(String(r), "error");
        }
      }
    }, J = async () => {
      const u = await vt({ multiple: !1, directory: !0 });
      typeof u == "string" && (n.value.folderPath = u, n.value.mode = "folder", await B());
    }, B = async () => {
      if (!n.value.folderPath) {
        I.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        s.value = await Tt(n.value.folderPath), s.value.count === 0 ? I.msg("文件夹中没有可用图片", "warning") : I.msg(v.value, "success");
      } catch (u) {
        I.msg(String(u), "error");
      }
    }, ie = async () => {
      f.value = !0;
      try {
        await $e(n.value), await $i(), await O(), I.msg("壁纸已切换", "success");
      } catch (u) {
        I.msg(String(u), "error");
      } finally {
        f.value = !1;
      }
    }, L = async () => {
      if (!o.value?.currentPath) {
        I.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await E();
    }, pe = async () => {
      await $e(n.value), await c("show_hide_window_command", {
        label: "wallpaper_wallhaven",
        context: null
      });
    }, ke = async () => {
      try {
        await Pi(), await O(), I.msg("缓存已清理", "success");
      } catch (u) {
        I.msg(String(u), "error");
      }
    }, Ce = async () => {
      await t.close();
    }, S = (u) => u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / 1024 / 1024).toFixed(1)} MB` : `${(u / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return _e(async () => {
      await b(), g = await Pe("wallpaper-switcher-changed", O), y = await Pe("wallpaper-switcher-error", (u) => {
        I.msg(u.payload?.message || "定时切换失败", "error");
      });
    }), zn(() => {
      g?.(), y?.();
    }), (u, r) => (C(), W("main", Zi, [
      l("header", Ki, [
        l("div", Ji, [
          h(i(Ge), { size: 20 }),
          r[15] || (r[15] = l(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ]),
        l("div", qi, [
          l("button", {
            type: "button",
            class: "icon-btn",
            title: "打开在线网格",
            onClick: pe
          }, [
            h(i(Hi), { size: 19 })
          ]),
          l("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: Ce
          }, [
            h(i(Xe), { size: 22 })
          ])
        ])
      ]),
      i(o)?.supported ? K("v-if", !0) : (C(), W("section", Qi, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")),
      l(
        "div",
        {
          class: k(["content", { dimmed: i(d) }])
        },
        [
          l("section", Yi, [
            l("div", Xi, [
              i(p) ? (C(), W("img", {
                key: 0,
                src: i(p),
                alt: "当前壁纸预览"
              }, null, 8, el)) : (C(), W("div", tl, [
                h(i(Ge), { size: 42 }),
                r[16] || (r[16] = l(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            l("div", nl, [
              r[20] || (r[20] = l(
                "h2",
                null,
                "当前状态",
                -1
                /* HOISTED */
              )),
              l("div", ol, [
                r[17] || (r[17] = l(
                  "span",
                  null,
                  "来源：",
                  -1
                  /* HOISTED */
                )),
                l(
                  "strong",
                  null,
                  P(i($)),
                  1
                  /* TEXT */
                )
              ]),
              l("div", sl, [
                r[18] || (r[18] = l(
                  "span",
                  null,
                  "分辨率：",
                  -1
                  /* HOISTED */
                )),
                l(
                  "strong",
                  null,
                  P(i(o)?.currentResolution || i(w)),
                  1
                  /* TEXT */
                )
              ]),
              l("div", il, [
                r[19] || (r[19] = l(
                  "span",
                  null,
                  "下次切换：",
                  -1
                  /* HOISTED */
                )),
                l(
                  "strong",
                  null,
                  P(i(j)),
                  1
                  /* TEXT */
                )
              ]),
              l("div", ll, [
                l("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: i(f),
                  onClick: ie
                }, [
                  h(i(Vi), { size: 17 }),
                  M(
                    " " + P(i(f) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, rl),
                l("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: L
                }, " 设为固定 ")
              ])
            ])
          ]),
          l("section", al, [
            l("div", ul, [
              r[21] || (r[21] = l(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              l("div", cl, [
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).mode === "fixed" }),
                    onClick: r[0] || (r[0] = (z) => i(n).mode = "fixed")
                  },
                  " 固定图片 ",
                  2
                  /* CLASS */
                ),
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).mode === "folder" }),
                    onClick: r[1] || (r[1] = (z) => i(n).mode = "folder")
                  },
                  " 本地文件夹 ",
                  2
                  /* CLASS */
                ),
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).mode === "wallhaven" }),
                    onClick: r[2] || (r[2] = (z) => i(n).mode = "wallhaven")
                  },
                  " Wallhaven 在线 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            l("div", dl, [
              r[23] || (r[23] = l(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              U(l(
                "input",
                {
                  "onUpdate:modelValue": r[3] || (r[3] = (z) => i(n).fixedImagePath = z),
                  class: "path-input",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [xe, i(n).fixedImagePath]
              ]),
              l("button", {
                type: "button",
                class: "tool-btn",
                onClick: _
              }, [
                h(i(Ge), { size: 16 }),
                r[22] || (r[22] = M(" 选择图片 "))
              ])
            ]),
            l("div", hl, [
              r[26] || (r[26] = l(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              U(l(
                "input",
                {
                  "onUpdate:modelValue": r[4] || (r[4] = (z) => i(n).folderPath = z),
                  class: "path-input",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [xe, i(n).folderPath]
              ]),
              l("button", {
                type: "button",
                class: "tool-btn",
                onClick: J
              }, [
                h(i(Ri), { size: 16 }),
                r[24] || (r[24] = M(" 选择 "))
              ]),
              l("button", {
                type: "button",
                class: "tool-btn",
                onClick: B
              }, [
                h(i(yn), { size: 16 }),
                r[25] || (r[25] = M(" 扫描 "))
              ])
            ]),
            l(
              "div",
              fl,
              P(i(v)),
              1
              /* TEXT */
            ),
            l("div", pl, [
              r[28] || (r[28] = l(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              r[29] || (r[29] = l(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              l("div", gl, [
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).wallhavenSource === "hot" }),
                    onClick: r[5] || (r[5] = (z) => i(n).wallhavenSource = "hot")
                  },
                  " 热门 Hot ",
                  2
                  /* CLASS */
                ),
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).wallhavenSource === "toplist" }),
                    onClick: r[6] || (r[6] = (z) => i(n).wallhavenSource = "toplist")
                  },
                  " 排行榜 Toplist ",
                  2
                  /* CLASS */
                )
              ]),
              l("button", {
                type: "button",
                class: "tool-btn grid-open",
                onClick: pe
              }, [
                h(i(wn), { size: 16 }),
                r[27] || (r[27] = M(" 打开在线网格 "))
              ])
            ]),
            l("div", vl, [
              r[30] || (r[30] = l(
                "span",
                null,
                "屏幕匹配",
                -1
                /* HOISTED */
              )),
              l(
                "strong",
                null,
                P(i(w)),
                1
                /* TEXT */
              )
            ])
          ]),
          l("section", yl, [
            r[38] || (r[38] = l(
              "h2",
              null,
              "切换规则",
              -1
              /* HOISTED */
            )),
            l("div", wl, [
              l("label", ml, [
                U(l(
                  "input",
                  {
                    "onUpdate:modelValue": r[7] || (r[7] = (z) => i(n).scheduleEnabled = z),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [dt, i(n).scheduleEnabled]
                ]),
                r[31] || (r[31] = l(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                )),
                r[32] || (r[32] = M(" 启用定时切换 "))
              ]),
              l("label", bl, [
                r[33] || (r[33] = M(" 每 ")),
                U(l(
                  "input",
                  {
                    "onUpdate:modelValue": r[8] || (r[8] = (z) => i(n).intervalMinutes = z),
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
                    i(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                r[34] || (r[34] = M(" 分钟 "))
              ]),
              r[35] || (r[35] = l(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              l("div", _l, [
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).order === "random" }),
                    onClick: r[9] || (r[9] = (z) => i(n).order = "random")
                  },
                  " 随机 ",
                  2
                  /* CLASS */
                ),
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).order === "sequential" }),
                    onClick: r[10] || (r[10] = (z) => i(n).order = "sequential")
                  },
                  " 顺序 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            l("div", kl, [
              r[37] || (r[37] = l(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              l("div", Cl, [
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).fitMode === "fillCrop" }),
                    onClick: r[11] || (r[11] = (z) => i(n).fitMode = "fillCrop")
                  },
                  " 填充裁切 ",
                  2
                  /* CLASS */
                ),
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).fitMode === "fit" }),
                    onClick: r[12] || (r[12] = (z) => i(n).fitMode = "fit")
                  },
                  " 适应 ",
                  2
                  /* CLASS */
                ),
                l(
                  "button",
                  {
                    type: "button",
                    class: k({ active: i(n).fitMode === "center" }),
                    onClick: r[13] || (r[13] = (z) => i(n).fitMode = "center")
                  },
                  " 居中 ",
                  2
                  /* CLASS */
                )
              ]),
              l("label", Sl, [
                U(l(
                  "input",
                  {
                    "onUpdate:modelValue": r[14] || (r[14] = (z) => i(n).autoRestore = z),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [dt, i(n).autoRestore]
                ]),
                r[36] || (r[36] = M(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          l("footer", xl, [
            l("div", Ll, [
              r[39] || (r[39] = l(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              r[40] || (r[40] = l(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              l(
                "span",
                null,
                P(i(H)),
                1
                /* TEXT */
              )
            ]),
            l("div", Ol, [
              l("button", {
                type: "button",
                class: "secondary-btn",
                onClick: ke
              }, [
                h(i(Ai), { size: 16 }),
                r[41] || (r[41] = M(" 清理缓存 "))
              ]),
              l("button", {
                type: "button",
                class: "primary-btn",
                disabled: i(a),
                onClick: E
              }, [
                h(i(Gi), { size: 17 }),
                M(
                  " " + P(i(a) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, zl)
            ])
          ])
        ],
        2
        /* CLASS */
      )
    ]));
  }
}), mn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Il = /* @__PURE__ */ mn($l, [["__scopeId", "data-v-1da08d21"]]), Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Il
}, Symbol.toStringTag, { value: "Module" })), jl = { class: "wallhaven-window" }, Pl = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Tl = { class: "title" }, Nl = { class: "top-actions" }, Ml = { class: "source-toggle" }, El = { class: "filters" }, Dl = { class: "search-box" }, Fl = { class: "resolution" }, Al = { class: "chips" }, Bl = { class: "source-select" }, Rl = { class: "grid-wrap" }, Hl = {
  key: 0,
  class: "empty-state"
}, Vl = {
  key: 1,
  class: "empty-state"
}, Ul = {
  key: 2,
  class: "wallpaper-grid"
}, Gl = ["onClick"], Zl = ["src", "alt"], Kl = { class: "card-actions" }, Jl = ["onClick"], ql = ["disabled", "onClick"], Ql = ["disabled", "onClick"], Yl = { class: "pager" }, Xl = { class: "source-note" }, er = { class: "pager-actions" }, tr = ["disabled"], nr = ["disabled"], or = { class: "preview-dialog" }, sr = ["src"], ir = /* @__PURE__ */ N({
  __name: "index",
  setup(e) {
    const t = ot(), n = x(gn()), o = x(null), s = x([]), d = x(1), a = x(1), f = x(!1), g = x(""), y = x("general"), p = x("hot"), w = x(null), $ = x(/* @__PURE__ */ new Set()), j = m(() => {
      const S = o.value;
      return S ? `${S.screenWidth}×${S.screenHeight}` : "自动匹配";
    }), H = m(() => p.value === "hot" ? "Hot" : "Toplist"), v = (S, u) => {
      const r = new Set($.value);
      u ? r.add(S) : r.delete(S), $.value = r;
    }, b = async () => {
      const [S, u] = await Promise.all([
        vn(),
        Ye()
      ]);
      n.value = S, o.value = u, g.value = S.wallhavenQuery ?? "", y.value = S.wallhavenCategory || "general", p.value = S.wallhavenSource;
    }, O = async () => {
      n.value.wallhavenQuery = g.value.trim() || null, n.value.wallhavenCategory = y.value, n.value.wallhavenSource = p.value, n.value.mode = "wallhaven", await $e(n.value);
    }, E = async (S = d.value) => {
      f.value = !0;
      try {
        await O();
        const u = await Ii({
          source: p.value,
          page: S,
          query: g.value.trim() || null,
          category: y.value
        });
        s.value = u.data, d.value = u.page, a.value = Math.max(1, u.lastPage);
      } catch (u) {
        I.msg(String(u), "error");
      } finally {
        f.value = !1;
      }
    }, _ = () => E(1), J = async (S) => {
      p.value = S, await E(1);
    }, B = async (S) => {
      y.value = S, await E(1);
    }, ie = async (S) => {
      v(S.id, !0);
      try {
        await Wi(S), I.msg("壁纸已设置", "success");
      } catch (u) {
        I.msg(String(u), "error");
      } finally {
        v(S.id, !1);
      }
    }, L = async (S) => {
      v(S.id, !0);
      try {
        await ji(S), I.msg("壁纸已下载到缓存", "success");
      } catch (u) {
        I.msg(String(u), "error");
      } finally {
        v(S.id, !1);
      }
    }, pe = async () => {
      d.value <= 1 || await E(d.value - 1);
    }, ke = async () => {
      d.value >= a.value || await E(d.value + 1);
    }, Ce = async () => {
      await t.close();
    };
    return _e(async () => {
      try {
        await b(), await E(1);
      } catch (S) {
        I.msg(String(S), "error");
      }
    }), (S, u) => (C(), W("main", jl, [
      l("header", Pl, [
        l("div", Tl, [
          l("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: Ce
          }, [
            h(i(Di), { size: 22 })
          ]),
          u[11] || (u[11] = l(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ]),
        l("div", Nl, [
          l("div", Ml, [
            l(
              "button",
              {
                type: "button",
                class: k({ active: i(p) === "hot" }),
                onClick: u[0] || (u[0] = (r) => J("hot"))
              },
              "热门",
              2
              /* CLASS */
            ),
            l(
              "button",
              {
                type: "button",
                class: k({ active: i(p) === "toplist" }),
                onClick: u[1] || (u[1] = (r) => J("toplist"))
              },
              "排行榜",
              2
              /* CLASS */
            )
          ]),
          l("button", {
            type: "button",
            class: "flat-icon",
            title: "关闭",
            onClick: Ce
          }, [
            h(i(Xe), { size: 23 })
          ])
        ])
      ]),
      l("section", El, [
        l("div", Dl, [
          U(l(
            "input",
            {
              "onUpdate:modelValue": u[2] || (u[2] = (r) => Ze(g) ? g.value = r : null),
              type: "search",
              placeholder: "搜索关键词",
              onKeydown: $n(_, ["enter"])
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [xe, i(g)]
          ]),
          l("button", {
            type: "button",
            title: "搜索",
            onClick: _
          }, [
            h(i(wn), { size: 18 })
          ])
        ]),
        l("label", Fl, [
          u[12] || (u[12] = l(
            "span",
            null,
            "分辨率",
            -1
            /* HOISTED */
          )),
          l(
            "strong",
            null,
            "自动匹配 " + P(i(j)),
            1
            /* TEXT */
          )
        ]),
        l("div", Al, [
          l(
            "button",
            {
              type: "button",
              class: k({ active: i(y) === "general" }),
              onClick: u[3] || (u[3] = (r) => B("general"))
            },
            "通用",
            2
            /* CLASS */
          ),
          l(
            "button",
            {
              type: "button",
              class: k({ active: i(y) === "anime" }),
              onClick: u[4] || (u[4] = (r) => B("anime"))
            },
            "动漫",
            2
            /* CLASS */
          ),
          l(
            "button",
            {
              type: "button",
              class: k({ active: i(y) === "people" }),
              onClick: u[5] || (u[5] = (r) => B("people"))
            },
            "人物",
            2
            /* CLASS */
          )
        ]),
        l("label", Bl, [
          u[14] || (u[14] = l(
            "span",
            null,
            "源",
            -1
            /* HOISTED */
          )),
          U(l(
            "select",
            {
              "onUpdate:modelValue": u[6] || (u[6] = (r) => Ze(p) ? p.value = r : null),
              onChange: _
            },
            u[13] || (u[13] = [
              l(
                "option",
                { value: "hot" },
                "Hot",
                -1
                /* HOISTED */
              ),
              l(
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
            [In, i(p)]
          ])
        ]),
        l("button", {
          type: "button",
          class: "refresh-btn",
          title: "刷新",
          onClick: _
        }, [
          h(i(yn), {
            size: 18,
            class: k({ spinning: i(f) })
          }, null, 8, ["class"])
        ])
      ]),
      l("section", Rl, [
        i(f) && i(s).length === 0 ? (C(), W("div", Hl, "正在加载 Wallhaven 壁纸...")) : i(s).length === 0 ? (C(), W("div", Vl, "暂无可用壁纸")) : (C(), W("div", Ul, [
          (C(!0), W(
            tt,
            null,
            Wn(i(s), (r) => (C(), W("article", {
              key: r.id,
              class: "wallpaper-card"
            }, [
              l("button", {
                type: "button",
                class: "thumb",
                onClick: (z) => w.value = r
              }, [
                l("img", {
                  src: r.thumbs.large,
                  alt: r.resolution,
                  loading: "lazy"
                }, null, 8, Zl),
                l(
                  "span",
                  null,
                  P(r.resolution),
                  1
                  /* TEXT */
                )
              ], 8, Gl),
              l("div", Kl, [
                l("button", {
                  type: "button",
                  title: "预览",
                  onClick: (z) => w.value = r
                }, [
                  h(i(Ui), { size: 16 }),
                  u[15] || (u[15] = M(" 预览 "))
                ], 8, Jl),
                l("button", {
                  type: "button",
                  title: "设为壁纸",
                  disabled: i($).has(r.id),
                  onClick: (z) => ie(r)
                }, [
                  h(i(Fi), { size: 16 }),
                  u[16] || (u[16] = M(" 设为 "))
                ], 8, ql),
                l("button", {
                  type: "button",
                  title: "下载",
                  disabled: i($).has(r.id),
                  onClick: (z) => L(r)
                }, [
                  h(i(Bi), { size: 16 }),
                  u[17] || (u[17] = M(" 下载 "))
                ], 8, Ql)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      l("footer", Yl, [
        l(
          "span",
          null,
          "第 " + P(i(d)) + " 页",
          1
          /* TEXT */
        ),
        l(
          "span",
          Xl,
          "来源：" + P(i(H)) + " · SFW",
          1
          /* TEXT */
        ),
        l("div", er, [
          l("button", {
            type: "button",
            disabled: i(d) <= 1 || i(f),
            onClick: pe
          }, "上一页", 8, tr),
          l("button", {
            type: "button",
            disabled: i(d) >= i(a) || i(f),
            onClick: ke
          }, "下一页", 8, nr)
        ])
      ]),
      i(w) ? (C(), W("div", {
        key: 0,
        class: "preview-modal",
        onClick: u[10] || (u[10] = nt((r) => w.value = null, ["self"]))
      }, [
        l("div", or, [
          l("header", null, [
            l(
              "strong",
              null,
              P(i(w).resolution),
              1
              /* TEXT */
            ),
            l("button", {
              type: "button",
              class: "flat-icon",
              onClick: u[7] || (u[7] = (r) => w.value = null)
            }, [
              h(i(Xe), { size: 23 })
            ])
          ]),
          l("img", {
            src: i(w).thumbs.original || i(w).thumbs.large,
            alt: "壁纸预览"
          }, null, 8, sr),
          l("footer", null, [
            l("button", {
              type: "button",
              class: "secondary-btn",
              onClick: u[8] || (u[8] = (r) => L(i(w)))
            }, "下载缓存"),
            l("button", {
              type: "button",
              class: "primary-btn",
              onClick: u[9] || (u[9] = (r) => ie(i(w)))
            }, "设为壁纸")
          ])
        ])
      ])) : K("v-if", !0)
    ]));
  }
}), lr = /* @__PURE__ */ mn(ir, [["__scopeId", "data-v-04560b44"]]), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr
}, Symbol.toStringTag, { value: "Module" }));
export {
  ur as activate
};
