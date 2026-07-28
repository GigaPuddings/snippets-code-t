import { getCurrentInstance as ue, inject as ee, ref as W, computed as _, unref as o, readonly as ca, getCurrentScope as ua, onScopeDispose as da, onMounted as Pe, nextTick as un, watch as Je, isRef as dn, warn as ha, provide as pa, defineComponent as x, createElementBlock as L, openBlock as m, mergeProps as wa, renderSlot as de, createElementVNode as r, normalizeClass as $, createVNode as c, Transition as Pt, withCtx as te, withDirectives as Ee, normalizeStyle as Ae, createTextVNode as N, toDisplayString as g, vShow as De, shallowReactive as fa, createBlock as F, createCommentVNode as R, resolveDynamicComponent as hn, Fragment as he, withModifiers as ze, isVNode as Se, render as Re, onUnmounted as pn, renderList as yt, withKeys as wn } from "vue";
import { useI18n as oe } from "vue-i18n";
const Lr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => _r)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function ga(e, t, n, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? a : n === "a" ? a.call(e) : a ? a.value : t.get(e);
}
function va(e, t, n, a, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ne;
const G = "__TAURI_TO_IPC_KEY__";
function ma(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function ya(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class ba {
  get rid() {
    return ga(this, Ne, "f");
  }
  constructor(t) {
    Ne.set(this, void 0), va(this, Ne, t);
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
Ne = /* @__PURE__ */ new WeakMap();
class fn {
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
    return new _e(this.width * t, this.height * t);
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
class _e {
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
    return new fn(this.width / t, this.height / t);
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
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof fn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof _e ? this.size : this.size.toPhysical(t);
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
class gn {
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
    return new gn(this.x / t, this.y / t);
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
class xe {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof gn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Q ? this.position : this.position.toPhysical(t);
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
var V;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(V || (V = {}));
async function vn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ve(e, t, n) {
  var a;
  const l = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (a = n?.target) !== null && a !== void 0 ? a : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: l,
    handler: ma(t)
  }).then((s) => async () => vn(e, s));
}
async function ka(e, t, n) {
  return Ve(e, (a) => {
    vn(e, a.id), t(a);
  }, n);
}
async function _a(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ca(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Ce extends ba {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, a) {
    return d("plugin:image|new", {
      rgba: He(t),
      width: n,
      height: a
    }).then((l) => new Ce(l));
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
      bytes: He(t)
    }).then((n) => new Ce(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new Ce(n));
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
function He(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ce ? e.rid : e;
}
var bt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(bt || (bt = {}));
class Sa {
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
var Mt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Mt || (Mt = {}));
function mn() {
  return new yn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ft() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new yn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const gt = ["tauri://created", "tauri://error"];
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
    var a;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || d("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (a = n.parent) === null || a === void 0 ? void 0 : a.label,
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
    return (n = (await ft()).find((a) => a.label === t)) !== null && n !== void 0 ? n : null;
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
    return ft();
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
    for (const t of await ft())
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
      const a = this.listeners[t];
      a.splice(a.indexOf(n), 1);
    } : Ve(t, n, {
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
      const a = this.listeners[t];
      a.splice(a.indexOf(n), 1);
    } : ka(t, n, {
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
    if (gt.includes(t)) {
      for (const a of this.listeners[t] || [])
        a({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return _a(t, n);
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
  async emitTo(t, n, a) {
    if (gt.includes(n)) {
      for (const l of this.listeners[n] || [])
        l({
          event: n,
          id: -1,
          payload: a
        });
      return;
    }
    return Ca(t, n, a);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return gt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new _e(t));
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
    }).then((t) => new _e(t));
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
    return t && (t === bt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
      value: t instanceof ce ? t : new ce(t)
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
      value: t instanceof ce ? t : t ? new ce(t) : null
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
      value: t instanceof ce ? t : t ? new ce(t) : null
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
    function n(a) {
      return a ? { Logical: a } : null;
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
      value: t instanceof xe ? t : new xe(t)
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
      value: He(t)
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
      value: t instanceof xe ? t : new xe(t)
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
      value: t ? He(t) : void 0
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
      n.payload = new _e(n.payload), t(n);
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
      const a = new Sa(n);
      await t(a), a.isPreventDefault() || await this.destroy();
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
    }), a = await this.listen(V.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new Q(i.payload.position)
        }
      });
    }), l = await this.listen(V.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new Q(i.payload.position)
        }
      });
    }), s = await this.listen(V.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), l(), a(), s();
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
    const n = await this.listen(V.WINDOW_FOCUS, (l) => {
      t({ ...l, payload: !0 });
    }), a = await this.listen(V.WINDOW_BLUR, (l) => {
      t({ ...l, payload: !1 });
    });
    return () => {
      n(), a();
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
var Et;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Et || (Et = {}));
var At;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(At || (At = {}));
var Dt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Dt || (Dt = {}));
async function Rt(e = {}) {
  return typeof e == "object" && Object.freeze(e), await d("plugin:dialog|open", { options: e });
}
const bn = Symbol(), Fe = "el", La = "is-", X = (e, t, n, a, l) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), a && (s += `__${a}`), l && (s += `--${l}`), s;
}, kn = Symbol("namespaceContextKey"), Wa = (e) => {
  const t = e || (ue() ? ee(kn, W(Fe)) : W(Fe));
  return _(() => o(t) || Fe);
}, zt = (e, t) => {
  const n = Wa(t);
  return {
    namespace: n,
    b: (v = "") => X(n.value, e, v, "", ""),
    e: (v) => v ? X(n.value, e, "", v, "") : "",
    m: (v) => v ? X(n.value, e, "", "", v) : "",
    be: (v, C) => v && C ? X(n.value, e, v, C, "") : "",
    em: (v, C) => v && C ? X(n.value, e, "", v, C) : "",
    bm: (v, C) => v && C ? X(n.value, e, v, "", C) : "",
    bem: (v, C, O) => v && C && O ? X(n.value, e, v, C, O) : "",
    is: (v, ...C) => {
      const O = C.length >= 1 ? C[0] : !0;
      return v && O ? `${La}${v}` : "";
    },
    cssVar: (v) => {
      const C = {};
      for (const O in v)
        v[O] && (C[`--${n.value}-${O}`] = v[O]);
      return C;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const C = {};
      for (const O in v)
        v[O] && (C[`--${n.value}-${e}-${O}`] = v[O]);
      return C;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Pa = Object.prototype.hasOwnProperty, Vt = (e, t) => Pa.call(e, t), Le = (e) => typeof e == "function", ne = (e) => typeof e == "string", _n = (e) => e !== null && typeof e == "object";
var za = typeof global == "object" && global && global.Object === Object && global, $a = typeof self == "object" && self && self.Object === Object && self, $t = za || $a || Function("return this")(), pe = $t.Symbol, Cn = Object.prototype, Oa = Cn.hasOwnProperty, Ia = Cn.toString, ke = pe ? pe.toStringTag : void 0;
function Ta(e) {
  var t = Oa.call(e, ke), n = e[ke];
  try {
    e[ke] = void 0;
    var a = !0;
  } catch {
  }
  var l = Ia.call(e);
  return a && (t ? e[ke] = n : delete e[ke]), l;
}
var ja = Object.prototype, xa = ja.toString;
function Na(e) {
  return xa.call(e);
}
var Fa = "[object Null]", Ma = "[object Undefined]", Ht = pe ? pe.toStringTag : void 0;
function Sn(e) {
  return e == null ? e === void 0 ? Ma : Fa : Ht && Ht in Object(e) ? Ta(e) : Na(e);
}
function Ea(e) {
  return e != null && typeof e == "object";
}
var Aa = "[object Symbol]";
function Ot(e) {
  return typeof e == "symbol" || Ea(e) && Sn(e) == Aa;
}
function Da(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, l = Array(a); ++n < a; )
    l[n] = t(e[n], n, e);
  return l;
}
var It = Array.isArray, Bt = pe ? pe.prototype : void 0, Kt = Bt ? Bt.toString : void 0;
function Ln(e) {
  if (typeof e == "string")
    return e;
  if (It(e))
    return Da(e, Ln) + "";
  if (Ot(e))
    return Kt ? Kt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Wn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ra = "[object AsyncFunction]", Va = "[object Function]", Ha = "[object GeneratorFunction]", Ba = "[object Proxy]";
function Ka(e) {
  if (!Wn(e))
    return !1;
  var t = Sn(e);
  return t == Va || t == Ha || t == Ra || t == Ba;
}
var vt = $t["__core-js_shared__"], Gt = function() {
  var e = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ga(e) {
  return !!Gt && Gt in e;
}
var Ua = Function.prototype, Za = Ua.toString;
function qa(e) {
  if (e != null) {
    try {
      return Za.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ja = /[\\^$.*+?()[\]{}|]/g, Qa = /^\[object .+?Constructor\]$/, Ya = Function.prototype, Xa = Object.prototype, el = Ya.toString, tl = Xa.hasOwnProperty, nl = RegExp(
  "^" + el.call(tl).replace(Ja, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function al(e) {
  if (!Wn(e) || Ga(e))
    return !1;
  var t = Ka(e) ? nl : Qa;
  return t.test(qa(e));
}
function ll(e, t) {
  return e?.[t];
}
function Pn(e, t) {
  var n = ll(e, t);
  return al(n) ? n : void 0;
}
function ol(e, t) {
  return e === t || e !== e && t !== t;
}
var il = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sl = /^\w*$/;
function rl(e, t) {
  if (It(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ot(e) ? !0 : sl.test(e) || !il.test(e) || t != null && e in Object(t);
}
var We = Pn(Object, "create");
function cl() {
  this.__data__ = We ? We(null) : {}, this.size = 0;
}
function ul(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var dl = "__lodash_hash_undefined__", hl = Object.prototype, pl = hl.hasOwnProperty;
function wl(e) {
  var t = this.__data__;
  if (We) {
    var n = t[e];
    return n === dl ? void 0 : n;
  }
  return pl.call(t, e) ? t[e] : void 0;
}
var fl = Object.prototype, gl = fl.hasOwnProperty;
function vl(e) {
  var t = this.__data__;
  return We ? t[e] !== void 0 : gl.call(t, e);
}
var ml = "__lodash_hash_undefined__";
function yl(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = We && t === void 0 ? ml : t, this;
}
function ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ae.prototype.clear = cl;
ae.prototype.delete = ul;
ae.prototype.get = wl;
ae.prototype.has = vl;
ae.prototype.set = yl;
function bl() {
  this.__data__ = [], this.size = 0;
}
function Qe(e, t) {
  for (var n = e.length; n--; )
    if (ol(e[n][0], t))
      return n;
  return -1;
}
var kl = Array.prototype, _l = kl.splice;
function Cl(e) {
  var t = this.__data__, n = Qe(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : _l.call(t, n, 1), --this.size, !0;
}
function Sl(e) {
  var t = this.__data__, n = Qe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ll(e) {
  return Qe(this.__data__, e) > -1;
}
function Wl(e, t) {
  var n = this.__data__, a = Qe(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ge.prototype.clear = bl;
ge.prototype.delete = Cl;
ge.prototype.get = Sl;
ge.prototype.has = Ll;
ge.prototype.set = Wl;
var Pl = Pn($t, "Map");
function zl() {
  this.size = 0, this.__data__ = {
    hash: new ae(),
    map: new (Pl || ge)(),
    string: new ae()
  };
}
function $l(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ye(e, t) {
  var n = e.__data__;
  return $l(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ol(e) {
  var t = Ye(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Il(e) {
  return Ye(this, e).get(e);
}
function Tl(e) {
  return Ye(this, e).has(e);
}
function jl(e, t) {
  var n = Ye(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
ie.prototype.clear = zl;
ie.prototype.delete = Ol;
ie.prototype.get = Il;
ie.prototype.has = Tl;
ie.prototype.set = jl;
var xl = "Expected a function";
function Tt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(xl);
  var n = function() {
    var a = arguments, l = t ? t.apply(this, a) : a[0], s = n.cache;
    if (s.has(l))
      return s.get(l);
    var i = e.apply(this, a);
    return n.cache = s.set(l, i) || s, i;
  };
  return n.cache = new (Tt.Cache || ie)(), n;
}
Tt.Cache = ie;
var Nl = 500;
function Fl(e) {
  var t = Tt(e, function(a) {
    return n.size === Nl && n.clear(), a;
  }), n = t.cache;
  return t;
}
var Ml = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, El = /\\(\\)?/g, Al = Fl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ml, function(n, a, l, s) {
    t.push(l ? s.replace(El, "$1") : a || n);
  }), t;
});
function Dl(e) {
  return e == null ? "" : Ln(e);
}
function Rl(e, t) {
  return It(e) ? e : rl(e, t) ? [e] : Al(Dl(e));
}
function Vl(e) {
  if (typeof e == "string" || Ot(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Hl(e, t) {
  t = Rl(t, e);
  for (var n = 0, a = t.length; e != null && n < a; )
    e = e[Vl(t[n++])];
  return n && n == a ? e : void 0;
}
function Bl(e, t, n) {
  var a = e == null ? void 0 : Hl(e, t);
  return a === void 0 ? n : a;
}
function Kl(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var l = e[t];
    a[l[0]] = l[1];
  }
  return a;
}
const zn = (e) => e === void 0, Ut = (e) => typeof e == "boolean", le = (e) => typeof e == "number", kt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Gl = (e) => ne(e) ? !Number.isNaN(Number(e)) : !1;
var Zt;
const se = typeof window < "u", Ul = (e) => typeof e == "string", Zl = () => {
};
se && ((Zt = window?.navigator) != null && Zt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function jt(e) {
  return typeof e == "function" ? e() : o(e);
}
function ql(e) {
  return e;
}
function xt(e) {
  return ua() ? (da(e), !0) : !1;
}
function Jl(e, t = !0) {
  ue() ? Pe(e) : t ? e() : un(e);
}
function $n(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, l = W(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), s = null);
  }
  function u() {
    l.value = !1, i();
  }
  function h(...w) {
    i(), l.value = !0, s = setTimeout(() => {
      l.value = !1, s = null, e(...w);
    }, jt(t));
  }
  return a && (l.value = !0, se && h()), xt(u), {
    isPending: ca(l),
    start: h,
    stop: u
  };
}
function On(e) {
  var t;
  const n = jt(e);
  return (t = n?.$el) != null ? t : n;
}
const In = se ? window : void 0;
function Tn(...e) {
  let t, n, a, l;
  if (Ul(e[0]) || Array.isArray(e[0]) ? ([n, a, l] = e, t = In) : [t, n, a, l] = e, !t)
    return Zl;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const s = [], i = () => {
    s.forEach((p) => p()), s.length = 0;
  }, u = (p, y, j, f) => (p.addEventListener(y, j, f), () => p.removeEventListener(y, j, f)), h = Je(() => [On(t), jt(l)], ([p, y]) => {
    i(), p && s.push(...n.flatMap((j) => a.map((f) => u(p, j, f, y))));
  }, { immediate: !0, flush: "post" }), w = () => {
    h(), i();
  };
  return xt(w), w;
}
function Ql(e, t = !1) {
  const n = W(), a = () => n.value = !!e();
  return a(), Jl(a, t), n;
}
const qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Jt = "__vueuse_ssr_handlers__";
qt[Jt] = qt[Jt] || {};
var Qt = Object.getOwnPropertySymbols, Yl = Object.prototype.hasOwnProperty, Xl = Object.prototype.propertyIsEnumerable, eo = (e, t) => {
  var n = {};
  for (var a in e)
    Yl.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && Qt)
    for (var a of Qt(e))
      t.indexOf(a) < 0 && Xl.call(e, a) && (n[a] = e[a]);
  return n;
};
function to(e, t, n = {}) {
  const a = n, { window: l = In } = a, s = eo(a, ["window"]);
  let i;
  const u = Ql(() => l && "ResizeObserver" in l), h = () => {
    i && (i.disconnect(), i = void 0);
  }, w = Je(() => On(e), (y) => {
    h(), u.value && l && y && (i = new ResizeObserver(t), i.observe(y, s));
  }, { immediate: !0, flush: "post" }), p = () => {
    h(), w();
  };
  return xt(p), {
    isSupported: u,
    stop: p
  };
}
var Yt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Yt || (Yt = {}));
var no = Object.defineProperty, Xt = Object.getOwnPropertySymbols, ao = Object.prototype.hasOwnProperty, lo = Object.prototype.propertyIsEnumerable, en = (e, t, n) => t in e ? no(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oo = (e, t) => {
  for (var n in t || (t = {}))
    ao.call(t, n) && en(e, n, t[n]);
  if (Xt)
    for (var n of Xt(t))
      lo.call(t, n) && en(e, n, t[n]);
  return e;
};
const io = {
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
oo({
  linear: ql
}, io);
const tn = {
  current: 0
}, nn = W(0), jn = 2e3, an = Symbol("elZIndexContextKey"), xn = Symbol("zIndexContextKey"), so = (e) => {
  const t = ue() ? ee(an, tn) : tn, n = e || (ue() ? ee(xn, void 0) : void 0), a = _(() => {
    const i = o(n);
    return le(i) ? i : jn;
  }), l = _(() => a.value + nn.value), s = () => (t.current++, nn.value = t.current, l.value);
  return !se && ee(an), {
    initialZIndex: a,
    currentZIndex: l,
    nextZIndex: s
  };
};
var ro = {
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
const co = (e) => (t, n) => uo(t, n, o(e)), uo = (e, t, n) => Bl(n, e, e).replace(/\{(\w+)\}/g, (a, l) => {
  var s;
  return `${(s = t?.[l]) != null ? s : `{${l}}`}`;
}), ho = (e) => {
  const t = _(() => o(e).name), n = dn(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: co(e)
  };
}, Nn = Symbol("localeContextKey"), po = (e) => {
  const t = e || ee(Nn, W());
  return ho(_(() => t.value || ro));
}, Fn = "__epPropKey", H = (e) => e, wo = (e) => _n(e) && !!e[Fn], Mn = (e, t) => {
  if (!_n(e) || wo(e))
    return e;
  const { values: n, required: a, default: l, type: s, validator: i } = e, h = {
    type: s,
    required: !!a,
    validator: n || i ? (w) => {
      let p = !1, y = [];
      if (n && (y = Array.from(n), Vt(e, "default") && y.push(l), p || (p = y.includes(w))), i && (p || (p = i(w))), !p && y.length > 0) {
        const j = [...new Set(y)].map((f) => JSON.stringify(f)).join(", ");
        ha(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${j}], got value ${JSON.stringify(w)}.`);
      }
      return p;
    } : void 0,
    [Fn]: !0
  };
  return Vt(e, "default") && (h.default = l), h;
}, ve = (e) => Kl(Object.entries(e).map(([t, n]) => [
  t,
  Mn(n, t)
])), fo = ["", "default", "small", "large"], go = Mn({
  type: String,
  values: fo,
  required: !1
}), vo = Symbol("size"), mo = Symbol("emptyValuesContextKey"), yo = ve({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Le(e) ? !e() : !e
  }
}), ln = (e) => Object.keys(e), Be = W();
function En(e, t = void 0) {
  return ue() ? ee(bn, Be) : Be;
}
function An(e, t) {
  const n = En(), a = zt(e, _(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.namespace) || Fe;
  })), l = po(_(() => {
    var u;
    return (u = n.value) == null ? void 0 : u.locale;
  })), s = so(_(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.zIndex) || jn;
  })), i = _(() => {
    var u;
    return o(t) || ((u = n.value) == null ? void 0 : u.size) || "";
  });
  return Dn(_(() => o(n) || {})), {
    ns: a,
    locale: l,
    zIndex: s,
    size: i
  };
}
const Dn = (e, t, n = !1) => {
  var a;
  const l = !!ue(), s = l ? En() : void 0, i = (a = void 0) != null ? a : l ? pa : void 0;
  if (!i)
    return;
  const u = _(() => {
    const h = o(e);
    return s?.value ? bo(s.value, h) : h;
  });
  return i(bn, u), i(Nn, _(() => u.value.locale)), i(kn, _(() => u.value.namespace)), i(xn, _(() => u.value.zIndex)), i(vo, {
    size: _(() => u.value.size || "")
  }), i(mo, _(() => ({
    emptyValues: u.value.emptyValues,
    valueOnClear: u.value.valueOnClear
  }))), (n || !Be.value) && (Be.value = u.value), u;
}, bo = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...ln(e), ...ln(t)])], a = {};
  for (const l of n)
    a[l] = t[l] !== void 0 ? t[l] : e[l];
  return a;
};
var Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
};
function _t(e, t = "px") {
  if (!e)
    return "";
  if (le(e) || Gl(e))
    return `${e}${t}`;
  if (ne(e))
    return e;
}
const Rn = (e, t) => (e.install = (n) => {
  for (const a of [e, ...Object.values({})])
    n.component(a.name, a);
}, e), Vn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ko = ve({
  size: {
    type: H([Number, String])
  },
  color: {
    type: String
  }
}), _o = x({
  name: "ElIcon",
  inheritAttrs: !1
}), Co = /* @__PURE__ */ x({
  ..._o,
  props: ko,
  setup(e) {
    const t = e, n = zt("icon"), a = _(() => {
      const { size: l, color: s } = t;
      return !l && !s ? {} : {
        fontSize: zn(l) ? void 0 : _t(l),
        "--color": s
      };
    });
    return (l, s) => (m(), L("i", wa({
      class: o(n).b(),
      style: o(a)
    }, l.$attrs), [
      de(l.$slots, "default")
    ], 16));
  }
});
var So = /* @__PURE__ */ Xe(Co, [["__file", "icon.vue"]]);
const Ke = Rn(So);
/*! Element Plus Icons Vue v2.3.1 */
var Lo = /* @__PURE__ */ x({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (m(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Wo = Lo, Po = /* @__PURE__ */ x({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (m(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Hn = Po, zo = /* @__PURE__ */ x({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (m(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), $o = zo, Oo = /* @__PURE__ */ x({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (m(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Io = Oo, To = /* @__PURE__ */ x({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (m(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), jo = To;
const Bn = H([
  String,
  Object,
  Function
]), xo = {
  Close: Hn
}, No = {
  Close: Hn
}, Ge = {
  success: Io,
  warning: jo,
  error: Wo,
  info: $o
}, Fo = (e) => e, Me = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Mo = ve({
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
}), Eo = x({
  name: "ElBadge"
}), Ao = /* @__PURE__ */ x({
  ...Eo,
  props: Mo,
  setup(e, { expose: t }) {
    const n = e, a = zt("badge"), l = _(() => n.isDot ? "" : le(n.value) && le(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = _(() => {
      var i, u, h, w, p;
      return [
        {
          backgroundColor: n.color,
          marginRight: _t(-((u = (i = n.offset) == null ? void 0 : i[0]) != null ? u : 0)),
          marginTop: _t((w = (h = n.offset) == null ? void 0 : h[1]) != null ? w : 0)
        },
        (p = n.badgeStyle) != null ? p : {}
      ];
    });
    return t({
      content: l
    }), (i, u) => (m(), L("div", {
      class: $(o(a).b())
    }, [
      de(i.$slots, "default"),
      c(Pt, {
        name: `${o(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: te(() => [
          Ee(r("sup", {
            class: $([
              o(a).e("content"),
              o(a).em("content", i.type),
              o(a).is("fixed", !!i.$slots.default),
              o(a).is("dot", i.isDot),
              o(a).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: Ae(o(s))
          }, [
            de(i.$slots, "content", { value: o(l) }, () => [
              N(g(o(l)), 1)
            ])
          ], 6), [
            [De, !i.hidden && (o(l) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Do = /* @__PURE__ */ Xe(Ao, [["__file", "badge.vue"]]);
const Ro = Rn(Do), Vo = ve({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: H(Object)
  },
  size: go,
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
  ...yo
}), U = {};
x({
  name: "ElConfigProvider",
  props: Vo,
  setup(e, { slots: t }) {
    Je(() => e.message, (a) => {
      Object.assign(U, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Dn(e);
    return () => de(t, "default", { config: n?.value });
  }
});
const Kn = ["success", "info", "warning", "error"], A = Fo({
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
}), Ho = ve({
  customClass: {
    type: String,
    default: A.customClass
  },
  center: {
    type: Boolean,
    default: A.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: A.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: A.duration
  },
  icon: {
    type: Bn,
    default: A.icon
  },
  id: {
    type: String,
    default: A.id
  },
  message: {
    type: H([
      String,
      Object,
      Function
    ]),
    default: A.message
  },
  onClose: {
    type: H(Function),
    default: A.onClose
  },
  showClose: {
    type: Boolean,
    default: A.showClose
  },
  type: {
    type: String,
    values: Kn,
    default: A.type
  },
  plain: {
    type: Boolean,
    default: A.plain
  },
  offset: {
    type: Number,
    default: A.offset
  },
  zIndex: {
    type: Number,
    default: A.zIndex
  },
  grouping: {
    type: Boolean,
    default: A.grouping
  },
  repeatNum: {
    type: Number,
    default: A.repeatNum
  }
}), Bo = {
  destroy: () => !0
}, Z = fa([]), Ko = (e) => {
  const t = Z.findIndex((l) => l.id === e), n = Z[t];
  let a;
  return t > 0 && (a = Z[t - 1]), { current: n, prev: a };
}, Go = (e) => {
  const { prev: t } = Ko(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Uo = (e, t) => Z.findIndex((a) => a.id === e) > 0 ? 16 : t, Zo = x({
  name: "ElMessage"
}), qo = /* @__PURE__ */ x({
  ...Zo,
  props: Ho,
  emits: Bo,
  setup(e, { expose: t }) {
    const n = e, { Close: a } = No, { ns: l, zIndex: s } = An("message"), { currentZIndex: i, nextZIndex: u } = s, h = W(), w = W(!1), p = W(0);
    let y;
    const j = _(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), f = _(() => {
      const I = n.type;
      return { [l.bm("icon", I)]: I && Ge[I] };
    }), k = _(() => n.icon || Ge[n.type] || ""), v = _(() => Go(n.id)), C = _(() => Uo(n.id, n.offset) + v.value), O = _(() => p.value + C.value), M = _(() => ({
      top: `${C.value}px`,
      zIndex: i.value
    }));
    function P() {
      n.duration !== 0 && ({ stop: y } = $n(() => {
        B();
      }, n.duration));
    }
    function q() {
      y?.();
    }
    function B() {
      w.value = !1;
    }
    function me({ code: I }) {
      I === Me.esc && B();
    }
    return Pe(() => {
      P(), u(), w.value = !0;
    }), Je(() => n.repeatNum, () => {
      q(), P();
    }), Tn(document, "keydown", me), to(h, () => {
      p.value = h.value.getBoundingClientRect().height;
    }), t({
      visible: w,
      bottom: O,
      close: B
    }), (I, ye) => (m(), F(Pt, {
      name: o(l).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: ($e) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        Ee(r("div", {
          id: I.id,
          ref_key: "messageRef",
          ref: h,
          class: $([
            o(l).b(),
            { [o(l).m(I.type)]: I.type },
            o(l).is("center", I.center),
            o(l).is("closable", I.showClose),
            o(l).is("plain", I.plain),
            I.customClass
          ]),
          style: Ae(o(M)),
          role: "alert",
          onMouseenter: q,
          onMouseleave: P
        }, [
          I.repeatNum > 1 ? (m(), F(o(Ro), {
            key: 0,
            value: I.repeatNum,
            type: o(j),
            class: $(o(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : R("v-if", !0),
          o(k) ? (m(), F(o(Ke), {
            key: 1,
            class: $([o(l).e("icon"), o(f)])
          }, {
            default: te(() => [
              (m(), F(hn(o(k))))
            ]),
            _: 1
          }, 8, ["class"])) : R("v-if", !0),
          de(I.$slots, "default", {}, () => [
            I.dangerouslyUseHTMLString ? (m(), L(he, { key: 1 }, [
              R(" Caution here, message could've been compromised, never use user's input as message "),
              r("p", {
                class: $(o(l).e("content")),
                innerHTML: I.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (m(), L("p", {
              key: 0,
              class: $(o(l).e("content"))
            }, g(I.message), 3))
          ]),
          I.showClose ? (m(), F(o(Ke), {
            key: 2,
            class: $(o(l).e("closeBtn")),
            onClick: ze(B, ["stop"])
          }, {
            default: te(() => [
              c(o(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : R("v-if", !0)
        ], 46, ["id"]), [
          [De, w.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Jo = /* @__PURE__ */ Xe(qo, [["__file", "message.vue"]]);
let Qo = 1;
const Gn = (e) => {
  const t = !e || ne(e) || Se(e) || Le(e) ? { message: e } : e, n = {
    ...A,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ne(n.appendTo)) {
    let a = document.querySelector(n.appendTo);
    kt(a) || (a = document.body), n.appendTo = a;
  }
  return Ut(U.grouping) && !n.grouping && (n.grouping = U.grouping), le(U.duration) && n.duration === 3e3 && (n.duration = U.duration), le(U.offset) && n.offset === 16 && (n.offset = U.offset), Ut(U.showClose) && !n.showClose && (n.showClose = U.showClose), n;
}, Yo = (e) => {
  const t = Z.indexOf(e);
  if (t === -1)
    return;
  Z.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Xo = ({ appendTo: e, ...t }, n) => {
  const a = `message_${Qo++}`, l = t.onClose, s = document.createElement("div"), i = {
    ...t,
    id: a,
    onClose: () => {
      l?.(), Yo(p);
    },
    onDestroy: () => {
      Re(null, s);
    }
  }, u = c(Jo, i, Le(i.message) || Se(i.message) ? {
    default: Le(i.message) ? i.message : () => i.message
  } : null);
  u.appContext = n || we._context, Re(u, s), e.appendChild(s.firstElementChild);
  const h = u.component, p = {
    id: a,
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
}, we = (e = {}, t) => {
  if (!se)
    return { close: () => {
    } };
  const n = Gn(e);
  if (n.grouping && Z.length) {
    const l = Z.find(({ vnode: s }) => {
      var i;
      return ((i = s.props) == null ? void 0 : i.message) === n.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = n.type, l.handler;
  }
  if (le(U.max) && Z.length >= U.max)
    return { close: () => {
    } };
  const a = Xo(n, t);
  return Z.push(a), a.handler;
};
Kn.forEach((e) => {
  we[e] = (t = {}, n) => {
    const a = Gn(t);
    return we({ ...a, type: e }, n);
  };
});
function ei(e) {
  for (const t of Z)
    (!e || e === t.props.type) && t.handler.close();
}
we.closeAll = ei;
we._context = null;
const ti = Vn(we, "$message"), Un = [
  "success",
  "info",
  "warning",
  "error"
], ni = ve({
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
}), ai = {
  destroy: () => !0
}, li = x({
  name: "ElNotification"
}), oi = /* @__PURE__ */ x({
  ...li,
  props: ni,
  emits: ai,
  setup(e, { expose: t }) {
    const n = e, { ns: a, zIndex: l } = An("notification"), { nextZIndex: s, currentZIndex: i } = l, { Close: u } = xo, h = W(!1);
    let w;
    const p = _(() => {
      const P = n.type;
      return P && Ge[n.type] ? a.m(P) : "";
    }), y = _(() => n.type && Ge[n.type] || n.icon), j = _(() => n.position.endsWith("right") ? "right" : "left"), f = _(() => n.position.startsWith("top") ? "top" : "bottom"), k = _(() => {
      var P;
      return {
        [f.value]: `${n.offset}px`,
        zIndex: (P = n.zIndex) != null ? P : i.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: w } = $n(() => {
        h.value && O();
      }, n.duration));
    }
    function C() {
      w?.();
    }
    function O() {
      h.value = !1;
    }
    function M({ code: P }) {
      P === Me.delete || P === Me.backspace ? C() : P === Me.esc ? h.value && O() : v();
    }
    return Pe(() => {
      v(), s(), h.value = !0;
    }), Tn(document, "keydown", M), t({
      visible: h,
      close: O
    }), (P, q) => (m(), F(Pt, {
      name: o(a).b("fade"),
      onBeforeLeave: P.onClose,
      onAfterLeave: (B) => P.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        Ee(r("div", {
          id: P.id,
          class: $([o(a).b(), P.customClass, o(j)]),
          style: Ae(o(k)),
          role: "alert",
          onMouseenter: C,
          onMouseleave: v,
          onClick: P.onClick
        }, [
          o(y) ? (m(), F(o(Ke), {
            key: 0,
            class: $([o(a).e("icon"), o(p)])
          }, {
            default: te(() => [
              (m(), F(hn(o(y))))
            ]),
            _: 1
          }, 8, ["class"])) : R("v-if", !0),
          r("div", {
            class: $(o(a).e("group"))
          }, [
            r("h2", {
              class: $(o(a).e("title")),
              textContent: g(P.title)
            }, null, 10, ["textContent"]),
            Ee(r("div", {
              class: $(o(a).e("content")),
              style: Ae(P.title ? void 0 : { margin: 0 })
            }, [
              de(P.$slots, "default", {}, () => [
                P.dangerouslyUseHTMLString ? (m(), L(he, { key: 1 }, [
                  R(" Caution here, message could've been compromised, never use user's input as message "),
                  r("p", { innerHTML: P.message }, null, 8, ["innerHTML"])
                ], 2112)) : (m(), L("p", { key: 0 }, g(P.message), 1))
              ])
            ], 6), [
              [De, P.message]
            ]),
            P.showClose ? (m(), F(o(Ke), {
              key: 0,
              class: $(o(a).e("closeBtn")),
              onClick: ze(O, ["stop"])
            }, {
              default: te(() => [
                c(o(u))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : R("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [De, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ii = /* @__PURE__ */ Xe(oi, [["__file", "notification.vue"]]);
const Ue = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ct = 16;
let si = 1;
const fe = function(e = {}, t) {
  if (!se)
    return { close: () => {
    } };
  (ne(e) || Se(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let a = e.offset || 0;
  Ue[n].forEach(({ vm: p }) => {
    var y;
    a += (((y = p.el) == null ? void 0 : y.offsetHeight) || 0) + Ct;
  }), a += Ct;
  const l = `notification_${si++}`, s = e.onClose, i = {
    ...e,
    offset: a,
    id: l,
    onClose: () => {
      ri(l, n, s);
    }
  };
  let u = document.body;
  kt(e.appendTo) ? u = e.appendTo : ne(e.appendTo) && (u = document.querySelector(e.appendTo)), kt(u) || (u = document.body);
  const h = document.createElement("div"), w = c(ii, i, Le(i.message) ? i.message : Se(i.message) ? () => i.message : null);
  return w.appContext = zn(t) ? fe._context : t, w.props.onDestroy = () => {
    Re(null, h);
  }, Re(w, h), Ue[n].push({ vm: w }), u.appendChild(h.firstElementChild), {
    close: () => {
      w.component.exposed.visible.value = !1;
    }
  };
};
Un.forEach((e) => {
  fe[e] = (t = {}, n) => ((ne(t) || Se(t)) && (t = {
    message: t
  }), fe({ ...t, type: e }, n));
});
function ri(e, t, n) {
  const a = Ue[t], l = a.findIndex(({ vm: w }) => {
    var p;
    return ((p = w.component) == null ? void 0 : p.props.id) === e;
  });
  if (l === -1)
    return;
  const { vm: s } = a[l];
  if (!s)
    return;
  n?.(s);
  const i = s.el.offsetHeight, u = t.split("-")[0];
  a.splice(l, 1);
  const h = a.length;
  if (!(h < 1))
    for (let w = l; w < h; w++) {
      const { el: p, component: y } = a[w].vm, j = Number.parseInt(p.style[u], 10) - i - Ct;
      y.props.offset = j;
    }
}
function ci() {
  for (const e of Object.values(Ue))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
fe.closeAll = ci;
fe._context = null;
const ui = Vn(fe, "$notify"), T = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", a) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: a
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
      position: a = "center",
      duration: l = 3e3,
      showClose: s = !1
    } = e;
    a === "center" ? ti({
      message: t,
      type: n,
      duration: l,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : ui({
      message: t,
      type: n,
      position: a,
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
};
var St;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(St || (St = {}));
async function di() {
  return d("plugin:path|resolve_directory", {
    directory: St.AppCache
  });
}
async function hi(...e) {
  return d("plugin:path|join", { paths: e });
}
async function on(e, t) {
  await d("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const pi = () => ({
  mode: "folder",
  fixedImagePath: null,
  folderPath: null,
  scheduleEnabled: !1,
  intervalMinutes: 30,
  order: "sequential",
  folderSort: "createdAscending",
  autoRestore: !0,
  wallhavenSource: "hot",
  wallhavenCategory: "general",
  wallhavenQuery: null,
  folderSeenPaths: [],
  wallhavenSeenIds: [],
  wallhavenHistoryScope: null,
  lastFolderIndex: 0,
  lastAppliedPath: null
}), wi = (e) => e ? /^https?:\/\//i.test(e) ? e : ya(e) : "", fi = () => d("wallpaper_get_config"), Lt = (e) => d("wallpaper_save_config", { config: e }), sn = () => d("wallpaper_get_status"), rn = (e) => d("wallpaper_scan_folder", { path: e }), cn = (e) => d("wallpaper_set_fixed_image", { path: e }), gi = () => d("wallpaper_switch_now"), vi = (e) => d("wallpaper_fetch_wallhaven", { params: e }), mi = (e) => d("wallpaper_set_wallhaven_image", { wallpaper: e }), yi = (e) => d("wallpaper_download_wallhaven_image", { wallpaper: e }), bi = () => d("wallpaper_clear_cache"), ki = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), _i = async () => {
  try {
    await d("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!ki(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await di(), t = await hi(e, "wallpaper-switcher");
  try {
    await on(t);
  } catch {
    await on(e);
  }
};
function Ci({ config: e, refreshStatus: t }) {
  const { t: n } = oe(), a = W("switcher"), l = W([]), s = W(1), i = W(1), u = W(!1), h = W(""), w = W(""), p = W("general"), y = W("hot"), j = W(null), f = W(!1), k = W(!1), v = W(/* @__PURE__ */ new Map()), C = W(/* @__PURE__ */ new Set()), O = /* @__PURE__ */ new Map();
  let M = null, P = null, q = null, B = 0;
  const me = _(() => y.value === "hot" ? "Hot" : y.value === "favorites" ? "Favorites" : "Toplist"), I = _(() => l.value.slice(0, 6)), ye = _(() => {
    const S = w.value.trim();
    return p.value === "nature" ? S ? `${S} nature` : "nature" : S || null;
  }), $e = _(() => p.value), be = (S) => {
    const z = String(S).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
      z
    ) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : z.length > 120 ? `${z.slice(0, 120)}...` : z;
  }, re = (S, z) => {
    const E = new Map(v.value);
    z ? E.set(S, z) : E.delete(S), v.value = E;
  }, Oe = (S) => {
    const z = new Set(C.value);
    z.add(S), C.value = z;
  }, et = (S, z) => {
    if (!(z instanceof HTMLImageElement)) {
      O.delete(S.id);
      return;
    }
    if (O.set(S.id, z), !M) {
      z.src = S.thumbs.large;
      return;
    }
    z.dataset.src = S.thumbs.large, M.observe(z);
  }, tt = () => {
    C.value = /* @__PURE__ */ new Set(), O.clear();
  }, nt = async () => {
    e.value.wallhavenQuery = w.value.trim() || null, e.value.wallhavenCategory = p.value, e.value.wallhavenSource = y.value, e.value.mode = "wallhaven", await Lt(e.value);
  }, J = async (S = s.value) => {
    const z = ++B;
    u.value = !0, h.value = "", l.value = [], tt();
    try {
      await nt();
      const E = await vi({
        source: y.value,
        page: S,
        query: ye.value,
        category: $e.value
      });
      if (z !== B) return;
      l.value = E.data, s.value = E.page, i.value = Math.max(1, E.lastPage), await un();
      for (const Y of O.values())
        M && M.observe(Y);
    } catch (E) {
      if (z !== B) return;
      l.value = [], h.value = be(E), T.msg(h.value, "error");
    } finally {
      z === B && (u.value = !1);
    }
  }, at = () => J(1), lt = async (S) => {
    y.value = S, await J(1);
  }, ot = async (S) => {
    p.value = S, await J(1);
  }, it = async () => {
    w.value = "", p.value = e.value.wallhavenCategory || "general", y.value = e.value.wallhavenSource, s.value = 1, h.value = "", l.value = [], a.value = "wallhaven", await J(1);
  }, st = (S) => {
    j.value = S, f.value = !0, k.value = !1;
  }, Ie = () => {
    j.value = null, f.value = !1, k.value = !1;
  }, Te = async () => {
    a.value = "switcher", Ie(), await t();
  }, je = () => {
    f.value = !1;
  }, rt = () => {
    f.value = !1, k.value = !0;
  }, ct = async (S) => {
    if (!v.value.has(S.id)) {
      re(S.id, "setting");
      try {
        T.msg(n("wallpaperSwitcher.messages.settingWallpaper"), "info"), await mi(S), await t(), T.msg(n("wallpaperSwitcher.messages.wallpaperSet"), "success");
      } catch (z) {
        T.msg(be(z), "error");
      } finally {
        re(S.id, null);
      }
    }
  }, ut = async (S) => {
    if (!v.value.has(S.id)) {
      re(S.id, "downloading");
      try {
        T.msg(n("wallpaperSwitcher.messages.downloadingWallpaper"), "info"), await yi(S), await t(), T.msg(n("wallpaperSwitcher.messages.wallpaperDownloaded"), "success");
      } catch (z) {
        T.msg(be(z), "error");
      } finally {
        re(S.id, null);
      }
    }
  }, dt = async () => {
    s.value > 1 && await J(s.value - 1);
  }, ht = async () => {
    s.value < i.value && await J(s.value + 1);
  };
  return Pe(() => {
    M = new IntersectionObserver(
      (S) => {
        for (const z of S) {
          if (!z.isIntersecting) continue;
          const E = z.target, Y = E.dataset.src;
          Y && E.src !== Y && (E.src = Y), M?.unobserve(E);
        }
      },
      { root: null, rootMargin: "120px" }
    ), P = null, q = null;
  }), pn(() => {
    M?.disconnect(), M = null, P?.(), q?.();
  }), {
    activeView: a,
    wallpapers: l,
    wallhavenPage: s,
    wallhavenLastPage: i,
    wallhavenLoading: u,
    wallhavenError: h,
    wallhavenKeyword: w,
    wallhavenCategory: p,
    wallhavenSource: y,
    previewWallpaper: j,
    previewLoading: f,
    previewLoadFailed: k,
    workingActions: v,
    loadedThumbIds: C,
    wallhavenSourceLabel: me,
    visibleWallpapers: I,
    openWallhavenGrid: it,
    backToSwitcher: Te,
    openPreview: st,
    closePreview: Ie,
    markPreviewLoaded: je,
    markPreviewFailed: rt,
    markThumbLoaded: Oe,
    setThumbRef: et,
    refreshWallhaven: at,
    setWallhavenSource: lt,
    setWallhavenCategory: ot,
    setWallpaperFromWallhaven: ct,
    downloadWallpaperFromWallhaven: ut,
    prevWallhavenPage: dt,
    nextWallhavenPage: ht,
    setupListeners: async () => {
      P = await Ve("wallpaper-switcher-changed", t), q = await Ve(
        "wallpaper-switcher-error",
        (S) => {
          T.msg(
            S.payload?.message || n("wallpaperSwitcher.messages.scheduleSwitchFailed"),
            "error"
          );
        }
      );
    }
  };
}
var Si = {
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
function Li() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Wi(e, t, n) {
  var a = typeof t.fill == "string" ? [t.fill] : t.fill || [], l = [], s = t.theme || n.theme;
  switch (s) {
    case "outline":
      l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push("none"), l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push("none");
      break;
    case "filled":
      l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push("#FFF"), l.push("#FFF");
      break;
    case "two-tone":
      l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push(typeof a[1] == "string" ? a[1] : n.colors.twoTone.twoTone), l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push(typeof a[1] == "string" ? a[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      l.push(typeof a[0] == "string" ? a[0] : "currentColor"), l.push(typeof a[1] == "string" ? a[1] : n.colors.multiColor.outFillColor), l.push(typeof a[2] == "string" ? a[2] : n.colors.multiColor.innerStrokeColor), l.push(typeof a[3] == "string" ? a[3] : n.colors.multiColor.innerFillColor);
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
var Pi = Symbol("icon-context");
function D(e, t, n) {
  var a = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var i = Li(), u = ee(Pi, Si);
      return function() {
        var h = s.size, w = s.strokeWidth, p = s.strokeLinecap, y = s.strokeLinejoin, j = s.theme, f = s.fill, k = s.spin, v = Wi(i, {
          size: h,
          strokeWidth: w,
          strokeLinecap: p,
          strokeLinejoin: y,
          theme: j,
          fill: f
        }, u), C = [u.prefix + "-icon"];
        return C.push(u.prefix + "-icon-" + e), t && u.rtl && C.push(u.prefix + "-icon-rtl"), k && C.push(u.prefix + "-icon-spin"), c("span", {
          class: C.join(" ")
        }, [n(v)]);
      };
    }
  };
  return a;
}
const zi = D("back", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ze = D("close-small", !1, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zn = D("computer", !1, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), c("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $i = D("delete", !1, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Oi = D("download", !1, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), mt = D("folder-open", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ii = D("lightning", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qe = D("loading", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wt = D("picture", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ti = D("picture-album", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ji = D("pin", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [c("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), c("defs", null, [c("clipPath", {
    id: e.id + "1c742167"
  }, [c("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), xi = D("preview-open", !1, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qn = D("refresh", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ni = D("save", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), c("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jn = D("search", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Fi = D("time", !0, function(e) {
  return c("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [c("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), c("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Mi = ["disabled", "onClick"], Ei = ["onClick", "onKeydown"], Qn = /* @__PURE__ */ x({
  __name: "WallhavenSourceTabs",
  props: {
    modelValue: {},
    disabled: { type: Boolean },
    tabClass: {},
    activeClass: {},
    disabledClass: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = oe(), l = [
      { value: "hot", labelKey: "wallpaperSwitcher.hot" },
      { value: "toplist", labelKey: "wallpaperSwitcher.toplist" },
      { value: "favorites", labelKey: "wallpaperSwitcher.favorites" }
    ], s = (i, u) => {
      u || n("update:modelValue", i);
    };
    return (i, u) => (m(), L(
      he,
      null,
      yt(l, (h) => (m(), L(
        he,
        {
          key: h.value
        },
        [
          i.tabClass === "button" ? (m(), L("button", {
            key: 0,
            type: "button",
            class: $({ [i.activeClass || "active"]: i.modelValue === h.value }),
            disabled: i.disabled,
            onClick: (w) => s(h.value, i.disabled)
          }, g(o(a)(h.labelKey)), 11, Mi)) : (m(), L("div", {
            key: 1,
            class: $(["seg-tab", {
              [i.activeClass || "active"]: i.modelValue === h.value,
              [i.disabledClass || "disabled"]: i.disabled
            }]),
            role: "tab",
            tabindex: "0",
            onClick: (w) => s(h.value, i.disabled),
            onKeydown: wn(ze((w) => s(h.value, i.disabled), ["prevent"]), ["enter"])
          }, g(o(a)(h.labelKey)), 43, Ei))
        ],
        64
        /* STABLE_FRAGMENT */
      ))),
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), Ai = { class: "top-panel" }, Di = { class: "preview" }, Ri = ["src", "alt"], Vi = {
  key: 1,
  class: "preview-empty"
}, Hi = { class: "status-panel" }, Bi = { class: "status-copy" }, Ki = { class: "wallpaper-name" }, Gi = { class: "status-list" }, Ui = { class: "status-row" }, Zi = { class: "status-row" }, qi = { class: "status-row" }, Ji = { class: "status-actions" }, Qi = ["disabled"], Yi = { class: "card settings-card" }, Xi = { class: "form-row mode-row" }, es = { class: "row-label" }, ts = { class: "segmented three" }, ns = { class: "form-row fixed-row" }, as = { class: "row-label" }, ls = ["value", "placeholder"], os = { class: "form-row folder-row" }, is = { class: "row-label" }, ss = ["value", "placeholder"], rs = { class: "hint-row folder-hint-row" }, cs = { class: "form-row wallhaven-row" }, us = { class: "sub-label" }, ds = { class: "segmented source" }, hs = { class: "card rules-card" }, ps = { class: "rules-line" }, ws = { class: "row-label" }, fs = { class: "switch-label" }, gs = ["checked"], vs = { class: "number-label" }, ms = ["value"], ys = { class: "checkbox-label" }, bs = ["checked"], ks = { class: "footer-card" }, _s = { class: "cache-info" }, Cs = { class: "footer-actions" }, Ss = ["disabled"], Ls = ["disabled"], Ws = ["disabled"], Ps = /* @__PURE__ */ x({
  __name: "SwitcherHome",
  props: {
    config: {},
    loading: { type: Boolean },
    previewSrc: {},
    currentWallpaperName: {},
    sourceLabel: {},
    resolutionLabel: {},
    nextSwitchLabel: {},
    folderCountLabel: {},
    cacheSizeLabel: {},
    switching: { type: Boolean },
    clearingCache: { type: Boolean },
    openingCache: { type: Boolean },
    saving: { type: Boolean }
  },
  emits: ["updateConfig", "chooseImage", "chooseFolder", "scanFolder", "openWallhavenGrid", "switchNow", "setCurrentAsFixed", "clearCache", "openCacheDir", "persistConfig"],
  setup(e, { emit: t }) {
    const n = e, a = t, { t: l } = oe(), s = (f) => {
      a("updateConfig", { ...n.config, ...f });
    }, i = (f) => s({ mode: f }), u = (f) => s({ wallhavenSource: f }), h = (f) => s({ fixedImagePath: f.target.value }), w = (f) => s({ folderPath: f.target.value }), p = (f) => s({ scheduleEnabled: f.target.checked }), y = (f) => s({
      intervalMinutes: Number(f.target.value)
    }), j = (f) => s({ autoRestore: f.target.checked });
    return (f, k) => (m(), L(
      "div",
      {
        class: $(["content", { dimmed: f.loading }])
      },
      [
        r("section", Ai, [
          r("div", Di, [
            f.previewSrc ? (m(), L("img", {
              key: 0,
              src: f.previewSrc,
              alt: o(l)("wallpaperSwitcher.currentPreviewAlt")
            }, null, 8, Ri)) : (m(), L("div", Vi, [
              c(o(Wt), { size: 42 }),
              r(
                "span",
                null,
                g(o(l)("wallpaperSwitcher.noCurrentWallpaper")),
                1
                /* TEXT */
              )
            ]))
          ]),
          r("div", Hi, [
            r("div", Bi, [
              r("div", Ki, [
                r(
                  "span",
                  null,
                  g(o(l)("wallpaperSwitcher.currentWallpaper")),
                  1
                  /* TEXT */
                ),
                r(
                  "strong",
                  null,
                  g(f.currentWallpaperName),
                  1
                  /* TEXT */
                )
              ]),
              r("div", Gi, [
                r("div", Ui, [
                  c(o(mt), { size: 16 }),
                  r(
                    "span",
                    null,
                    g(o(l)("wallpaperSwitcher.source")),
                    1
                    /* TEXT */
                  ),
                  r(
                    "strong",
                    null,
                    g(f.sourceLabel),
                    1
                    /* TEXT */
                  )
                ]),
                r("div", Zi, [
                  c(o(Zn), { size: 16 }),
                  r(
                    "span",
                    null,
                    g(o(l)("wallpaperSwitcher.resolution")),
                    1
                    /* TEXT */
                  ),
                  r(
                    "strong",
                    null,
                    g(f.resolutionLabel),
                    1
                    /* TEXT */
                  )
                ]),
                r("div", qi, [
                  c(o(Fi), { size: 16 }),
                  r(
                    "span",
                    null,
                    g(o(l)("wallpaperSwitcher.nextSwitch")),
                    1
                    /* TEXT */
                  ),
                  r(
                    "strong",
                    null,
                    g(f.nextSwitchLabel),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            r("div", Ji, [
              r("button", {
                type: "button",
                class: "primary-btn",
                disabled: f.switching,
                onClick: k[0] || (k[0] = (v) => a("switchNow"))
              }, [
                c(o(Ii), {
                  theme: "outline",
                  size: 14
                }),
                N(
                  " " + g(f.switching ? o(l)("wallpaperSwitcher.switching") : o(l)("wallpaperSwitcher.switchNow")),
                  1
                  /* TEXT */
                )
              ], 8, Qi),
              r("button", {
                type: "button",
                class: "secondary-btn",
                onClick: k[1] || (k[1] = (v) => a("setCurrentAsFixed"))
              }, [
                c(o(ji), {
                  theme: "outline",
                  size: 14
                }),
                N(
                  " " + g(o(l)("wallpaperSwitcher.setFixed")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ]),
        r("section", Yi, [
          r("div", Xi, [
            r(
              "span",
              es,
              g(o(l)("wallpaperSwitcher.mode")),
              1
              /* TEXT */
            ),
            r("div", ts, [
              r(
                "button",
                {
                  type: "button",
                  class: $({ active: f.config.mode === "fixed" }),
                  onClick: k[2] || (k[2] = (v) => i("fixed"))
                },
                g(o(l)("wallpaperSwitcher.fixedImage")),
                3
                /* TEXT, CLASS */
              ),
              r(
                "button",
                {
                  type: "button",
                  class: $({ active: f.config.mode === "folder" }),
                  onClick: k[3] || (k[3] = (v) => i("folder"))
                },
                g(o(l)("wallpaperSwitcher.localFolder")),
                3
                /* TEXT, CLASS */
              ),
              r(
                "button",
                {
                  type: "button",
                  class: $({ active: f.config.mode === "wallhaven" }),
                  onClick: k[4] || (k[4] = (v) => i("wallhaven"))
                },
                g(o(l)("wallpaperSwitcher.wallhavenOnline")),
                3
                /* TEXT, CLASS */
              )
            ])
          ]),
          r("div", ns, [
            r(
              "span",
              as,
              g(o(l)("wallpaperSwitcher.fixedImage")),
              1
              /* TEXT */
            ),
            r("input", {
              value: f.config.fixedImagePath,
              class: "path-input",
              placeholder: o(l)("wallpaperSwitcher.placeholders.fixedImage"),
              spellcheck: "false",
              onInput: h
            }, null, 40, ls),
            r("button", {
              type: "button",
              class: "tool-btn",
              onClick: k[5] || (k[5] = (v) => a("chooseImage"))
            }, [
              c(o(Wt), { size: 16 }),
              N(
                " " + g(o(l)("wallpaperSwitcher.selectImage")),
                1
                /* TEXT */
              )
            ])
          ]),
          r("div", os, [
            r(
              "span",
              is,
              g(o(l)("wallpaperSwitcher.localFolder")),
              1
              /* TEXT */
            ),
            r("input", {
              value: f.config.folderPath,
              class: "path-input",
              placeholder: o(l)("wallpaperSwitcher.placeholders.folder"),
              spellcheck: "false",
              onInput: w
            }, null, 40, ss),
            r("button", {
              type: "button",
              class: "tool-btn",
              onClick: k[6] || (k[6] = (v) => a("chooseFolder"))
            }, [
              c(o(mt), { size: 16 }),
              N(
                " " + g(o(l)("wallpaperSwitcher.select")),
                1
                /* TEXT */
              )
            ]),
            r("button", {
              type: "button",
              class: "tool-btn",
              onClick: k[7] || (k[7] = (v) => a("scanFolder"))
            }, [
              c(o(qn), { size: 16 }),
              N(
                " " + g(o(l)("wallpaperSwitcher.scan")),
                1
                /* TEXT */
              )
            ])
          ]),
          r("div", rs, [
            r(
              "span",
              null,
              g(f.folderCountLabel),
              1
              /* TEXT */
            ),
            r(
              "span",
              null,
              g(o(l)("wallpaperSwitcher.folderCreateTimeHint")),
              1
              /* TEXT */
            )
          ]),
          r("div", cs, [
            k[12] || (k[12] = r(
              "span",
              { class: "row-label" },
              "Wallhaven",
              -1
              /* HOISTED */
            )),
            r(
              "span",
              us,
              g(o(l)("wallpaperSwitcher.sourceShort")),
              1
              /* TEXT */
            ),
            r("div", ds, [
              c(Qn, {
                "tab-class": "button",
                "model-value": f.config.wallhavenSource,
                "onUpdate:modelValue": u
              }, null, 8, ["model-value"])
            ]),
            r("button", {
              type: "button",
              class: "tool-btn grid-open",
              onClick: k[8] || (k[8] = (v) => a("openWallhavenGrid"))
            }, [
              c(o(Jn), { size: 16 }),
              N(
                " " + g(o(l)("wallpaperSwitcher.openOnlineGrid")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        r("section", hs, [
          r("div", ps, [
            r(
              "span",
              ws,
              g(o(l)("wallpaperSwitcher.switchRules")),
              1
              /* TEXT */
            ),
            r("label", fs, [
              N(
                g(o(l)("wallpaperSwitcher.enableSchedule")) + " ",
                1
                /* TEXT */
              ),
              r("input", {
                checked: f.config.scheduleEnabled,
                type: "checkbox",
                onChange: p
              }, null, 40, gs),
              k[13] || (k[13] = r(
                "span",
                { class: "switch-control" },
                null,
                -1
                /* HOISTED */
              ))
            ]),
            r("label", vs, [
              N(
                g(o(l)("wallpaperSwitcher.every")) + " ",
                1
                /* TEXT */
              ),
              r("input", {
                value: f.config.intervalMinutes,
                type: "number",
                min: "1",
                max: "1440",
                onInput: y
              }, null, 40, ms),
              N(
                " " + g(o(l)("wallpaperSwitcher.minutes")),
                1
                /* TEXT */
              )
            ]),
            r("label", ys, [
              r("input", {
                checked: f.config.autoRestore,
                type: "checkbox",
                onChange: j
              }, null, 40, bs),
              N(
                " " + g(o(l)("wallpaperSwitcher.autoRestore")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        r("footer", ks, [
          r("div", _s, [
            r(
              "strong",
              null,
              g(o(l)("wallpaperSwitcher.cache")),
              1
              /* TEXT */
            ),
            r(
              "span",
              null,
              g(o(l)("wallpaperSwitcher.wallhavenCache")),
              1
              /* TEXT */
            ),
            r(
              "span",
              null,
              g(f.cacheSizeLabel),
              1
              /* TEXT */
            )
          ]),
          r("div", Cs, [
            r("button", {
              type: "button",
              class: "secondary-btn",
              disabled: f.clearingCache,
              onClick: k[9] || (k[9] = (v) => a("clearCache"))
            }, [
              c(o($i), { size: 16 }),
              N(
                " " + g(f.clearingCache ? o(l)("wallpaperSwitcher.clearing") : o(l)("wallpaperSwitcher.clearCache")),
                1
                /* TEXT */
              )
            ], 8, Ss),
            r("button", {
              type: "button",
              class: "secondary-btn",
              disabled: f.openingCache,
              onClick: k[10] || (k[10] = (v) => a("openCacheDir"))
            }, [
              c(o(mt), { size: 16 }),
              N(
                " " + g(f.openingCache ? o(l)("wallpaperSwitcher.opening") : o(l)("wallpaperSwitcher.openCache")),
                1
                /* TEXT */
              )
            ], 8, Ls),
            r("button", {
              type: "button",
              class: "primary-btn",
              disabled: f.saving,
              onClick: k[11] || (k[11] = (v) => a("persistConfig"))
            }, [
              c(o(Ni), { size: 17 }),
              N(
                " " + g(f.saving ? o(l)("wallpaperSwitcher.saving") : o(l)("wallpaperSwitcher.saveSettings")),
                1
                /* TEXT */
              )
            ], 8, Ws)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), zs = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, $s = {
  key: 0,
  class: "title"
}, Os = {
  key: 1,
  class: "title"
}, Is = ["title"], Ts = {
  key: 2,
  class: "window-actions"
}, js = ["title"], xs = ["title"], Ns = {
  key: 3,
  class: "window-actions"
}, Fs = ["aria-label"], Ms = ["title"], Es = /* @__PURE__ */ x({
  __name: "SwitcherTitlebar",
  props: {
    activeView: {},
    wallhavenSource: {},
    wallhavenLoading: { type: Boolean }
  },
  emits: ["back", "close", "openWallhaven", "setWallhavenSource"],
  setup(e, { emit: t }) {
    const n = t, { t: a } = oe();
    return (l, s) => (m(), L("header", zs, [
      l.activeView === "switcher" ? (m(), L("div", $s, [
        c(o(Wt), { size: 18 }),
        r(
          "span",
          null,
          g(o(a)("wallpaperSwitcher.title")),
          1
          /* TEXT */
        )
      ])) : (m(), L("div", Os, [
        r("button", {
          type: "button",
          class: "flat-icon",
          title: o(a)("wallpaperSwitcher.back"),
          onClick: s[0] || (s[0] = (i) => n("back"))
        }, [
          c(o(zi), { size: 20 })
        ], 8, Is),
        r(
          "span",
          null,
          g(o(a)("wallpaperSwitcher.wallhavenTitle")),
          1
          /* TEXT */
        )
      ])),
      l.activeView === "switcher" ? (m(), L("div", Ts, [
        r("button", {
          type: "button",
          class: "icon-btn online-entry-btn",
          title: o(a)("wallpaperSwitcher.openWallhaven"),
          onClick: s[1] || (s[1] = (i) => n("openWallhaven"))
        }, [
          c(o(Ti), { size: 18 })
        ], 8, js),
        r("button", {
          type: "button",
          class: "icon-btn",
          title: o(a)("wallpaperSwitcher.close"),
          onClick: s[2] || (s[2] = (i) => n("close"))
        }, [
          c(o(Ze), { size: 20 })
        ], 8, xs)
      ])) : (m(), L("div", Ns, [
        r("div", {
          class: "source-toggle",
          role: "tablist",
          "aria-label": o(a)("wallpaperSwitcher.sourceToggle")
        }, [
          c(Qn, {
            "model-value": l.wallhavenSource,
            disabled: l.wallhavenLoading,
            "onUpdate:modelValue": s[3] || (s[3] = (i) => n("setWallhavenSource", i))
          }, null, 8, ["model-value", "disabled"])
        ], 8, Fs),
        r("button", {
          type: "button",
          class: "icon-btn",
          title: o(a)("wallpaperSwitcher.close"),
          onClick: s[4] || (s[4] = (i) => n("close"))
        }, [
          c(o(Ze), { size: 20 })
        ], 8, Ms)
      ]))
    ]));
  }
}), As = { class: "wallhaven-view" }, Ds = { class: "filters filters--preview-style" }, Rs = { class: "search-box wallhaven-search" }, Vs = ["value", "placeholder"], Hs = ["title"], Bs = ["aria-label"], Ks = ["disabled", "onClick"], Gs = { class: "wallhaven-meta" }, Us = ["title"], Zs = { class: "grid-wrap" }, qs = {
  key: 0,
  class: "empty-state"
}, Js = {
  key: 1,
  class: "empty-state error-state"
}, Qs = {
  key: 2,
  class: "empty-state"
}, Ys = {
  key: 3,
  class: "wallpaper-grid"
}, Xs = ["onClick"], er = {
  key: 0,
  class: "thumb-skeleton"
}, tr = ["alt", "onLoad"], nr = ["title", "onClick"], ar = ["title", "disabled", "aria-busy", "onClick"], lr = ["title", "disabled", "aria-busy", "onClick"], or = { class: "pager" }, ir = { class: "source-note" }, sr = { class: "pager-actions" }, rr = ["disabled"], cr = ["disabled"], ur = /* @__PURE__ */ x({
  __name: "WallhavenView",
  props: {
    keyword: {},
    category: {},
    loading: { type: Boolean },
    error: {},
    wallpapers: {},
    loadedThumbIds: {},
    workingActions: {},
    page: {},
    lastPage: {},
    sourceLabel: {},
    screenLabel: {},
    setThumbRef: { type: Function }
  },
  emits: ["update:keyword", "refresh", "setCategory", "openPreview", "markThumbLoaded", "setWallpaper", "downloadWallpaper", "prevPage", "nextPage"],
  setup(e, { emit: t }) {
    const n = e, a = t, { t: l } = oe(), s = [
      { value: "general", labelKey: "wallpaperSwitcher.categories.general" },
      { value: "anime", labelKey: "wallpaperSwitcher.categories.anime" },
      { value: "people", labelKey: "wallpaperSwitcher.categories.people" },
      { value: "nature", labelKey: "wallpaperSwitcher.categories.nature" }
    ], i = (h) => a("update:keyword", h.target.value), u = (h) => n.workingActions.get(h);
    return (h, w) => (m(), L("div", As, [
      r("section", Ds, [
        r("div", Rs, [
          r("input", {
            value: h.keyword,
            type: "text",
            placeholder: o(l)("wallpaperSwitcher.searchPlaceholder"),
            onInput: i,
            onKeydown: w[0] || (w[0] = wn((p) => a("refresh"), ["enter"]))
          }, null, 40, Vs),
          c(o(Jn), {
            size: 16,
            class: "search-icon"
          }),
          h.keyword ? (m(), L("button", {
            key: 0,
            type: "button",
            class: "clear-btn",
            title: o(l)("wallpaperSwitcher.clear"),
            onClick: w[1] || (w[1] = (p) => a("update:keyword", ""))
          }, [
            c(o(Ze), { size: 18 })
          ], 8, Hs)) : R("v-if", !0)
        ]),
        r("div", {
          class: "wallhaven-tabs",
          role: "tablist",
          "aria-label": o(l)("wallpaperSwitcher.categoryToggle")
        }, [
          (m(), L(
            he,
            null,
            yt(s, (p) => r("button", {
              key: p.value,
              type: "button",
              class: $({ active: h.category === p.value }),
              disabled: h.loading,
              onClick: (y) => a("setCategory", p.value)
            }, g(o(l)(p.labelKey)), 11, Ks)),
            64
            /* STABLE_FRAGMENT */
          ))
        ], 8, Bs),
        r("div", Gs, [
          r(
            "span",
            null,
            g(o(l)("wallpaperSwitcher.autoMatch", { resolution: h.screenLabel })),
            1
            /* TEXT */
          ),
          r("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: o(l)("wallpaperSwitcher.refresh"),
            onClick: w[2] || (w[2] = (p) => a("refresh"))
          }, [
            c(o(qn), {
              size: 14,
              class: $({ spinning: h.loading })
            }, null, 8, ["class"])
          ], 8, Us)
        ])
      ]),
      r("section", Zs, [
        h.loading && h.wallpapers.length === 0 ? (m(), L(
          "div",
          qs,
          g(o(l)("wallpaperSwitcher.loadingWallhaven")),
          1
          /* TEXT */
        )) : h.error ? (m(), L("div", Js, [
          r(
            "span",
            null,
            g(h.error),
            1
            /* TEXT */
          ),
          r(
            "button",
            {
              type: "button",
              onClick: w[3] || (w[3] = (p) => a("refresh"))
            },
            g(o(l)("wallpaperSwitcher.retry")),
            1
            /* TEXT */
          )
        ])) : h.wallpapers.length === 0 ? (m(), L(
          "div",
          Qs,
          g(o(l)("wallpaperSwitcher.noWallpapers")),
          1
          /* TEXT */
        )) : (m(), L("div", Ys, [
          (m(!0), L(
            he,
            null,
            yt(h.wallpapers, (p) => (m(), L("article", {
              key: p.id,
              class: "wallpaper-card"
            }, [
              r("button", {
                type: "button",
                class: "thumb",
                onClick: (y) => a("openPreview", p)
              }, [
                h.loadedThumbIds.has(p.id) ? R("v-if", !0) : (m(), L("div", er)),
                r("img", {
                  ref_for: !0,
                  ref: (y) => h.setThumbRef(p, y),
                  alt: p.resolution,
                  loading: "lazy",
                  onLoad: (y) => a("markThumbLoaded", p.id)
                }, null, 40, tr),
                r(
                  "span",
                  null,
                  g(p.resolution),
                  1
                  /* TEXT */
                )
              ], 8, Xs),
              r("div", {
                class: "card-actions",
                onClick: w[4] || (w[4] = ze(() => {
                }, ["stop"]))
              }, [
                r("button", {
                  type: "button",
                  title: o(l)("wallpaperSwitcher.preview"),
                  onClick: (y) => a("openPreview", p)
                }, [
                  c(o(xi), { size: 16 }),
                  N(
                    " " + g(o(l)("wallpaperSwitcher.preview")),
                    1
                    /* TEXT */
                  )
                ], 8, nr),
                r("button", {
                  type: "button",
                  title: o(l)("wallpaperSwitcher.setWallpaper"),
                  class: $({
                    "is-working": u(p.id) === "setting"
                  }),
                  disabled: !!u(p.id),
                  "aria-busy": u(p.id) === "setting",
                  onClick: (y) => a("setWallpaper", p)
                }, [
                  u(p.id) === "setting" ? (m(), F(o(qe), {
                    key: 0,
                    size: 16,
                    spin: ""
                  })) : (m(), F(o(Zn), {
                    key: 1,
                    size: 16
                  })),
                  r(
                    "span",
                    null,
                    g(u(p.id) === "setting" ? o(l)("wallpaperSwitcher.setting") : o(l)("wallpaperSwitcher.set")),
                    1
                    /* TEXT */
                  )
                ], 10, ar),
                r("button", {
                  type: "button",
                  title: o(l)("wallpaperSwitcher.download"),
                  class: $({
                    "is-working": u(p.id) === "downloading"
                  }),
                  disabled: !!u(p.id),
                  "aria-busy": u(p.id) === "downloading",
                  onClick: (y) => a("downloadWallpaper", p)
                }, [
                  u(p.id) === "downloading" ? (m(), F(o(qe), {
                    key: 0,
                    size: 16,
                    spin: ""
                  })) : (m(), F(o(Oi), {
                    key: 1,
                    size: 16
                  })),
                  r(
                    "span",
                    null,
                    g(u(p.id) === "downloading" ? o(l)("wallpaperSwitcher.downloading") : o(l)("wallpaperSwitcher.download")),
                    1
                    /* TEXT */
                  )
                ], 10, lr)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      r("footer", or, [
        r(
          "span",
          null,
          g(o(l)("wallpaperSwitcher.page", { page: h.page })),
          1
          /* TEXT */
        ),
        r(
          "span",
          ir,
          g(o(l)("wallpaperSwitcher.sourceNote", { source: h.sourceLabel })),
          1
          /* TEXT */
        ),
        r("div", sr, [
          r("button", {
            type: "button",
            disabled: h.page <= 1 || h.loading,
            onClick: w[5] || (w[5] = (p) => a("prevPage"))
          }, g(o(l)("wallpaperSwitcher.prevPage")), 9, rr),
          r("button", {
            type: "button",
            disabled: h.page >= h.lastPage || h.loading,
            onClick: w[6] || (w[6] = (p) => a("nextPage"))
          }, g(o(l)("wallpaperSwitcher.nextPage")), 9, cr)
        ])
      ])
    ]));
  }
}), dr = { class: "preview-dialog" }, hr = { class: "preview-image-wrap" }, pr = {
  key: 0,
  class: "preview-skeleton"
}, wr = {
  key: 1,
  class: "preview-error"
}, fr = ["src", "alt"], gr = ["disabled", "aria-busy"], vr = ["disabled", "aria-busy"], mr = /* @__PURE__ */ x({
  __name: "WallpaperPreviewModal",
  props: {
    wallpaper: {},
    loading: { type: Boolean },
    loadFailed: { type: Boolean },
    workingActions: {}
  },
  emits: ["close", "loaded", "failed", "download", "setWallpaper"],
  setup(e, { emit: t }) {
    const n = e, a = t, { t: l } = oe(), s = (i) => n.workingActions.get(i);
    return (i, u) => i.wallpaper ? (m(), L("div", {
      key: 0,
      class: "preview-modal",
      onClick: u[5] || (u[5] = ze((h) => a("close"), ["self"]))
    }, [
      r("div", dr, [
        r("header", null, [
          r(
            "strong",
            null,
            g(i.wallpaper.resolution),
            1
            /* TEXT */
          ),
          r("button", {
            type: "button",
            class: "flat-icon",
            onClick: u[0] || (u[0] = (h) => a("close"))
          }, [
            c(o(Ze), { size: 23 })
          ])
        ]),
        r("div", hr, [
          i.loading ? (m(), L("div", pr, [
            r(
              "span",
              null,
              g(o(l)("wallpaperSwitcher.loadingPreview")),
              1
              /* TEXT */
            )
          ])) : R("v-if", !0),
          i.loadFailed ? (m(), L(
            "div",
            wr,
            g(o(l)("wallpaperSwitcher.previewLoadFailed")),
            1
            /* TEXT */
          )) : R("v-if", !0),
          r("img", {
            class: $({ ready: !i.loading && !i.loadFailed }),
            src: i.wallpaper.path,
            alt: o(l)("wallpaperSwitcher.wallpaperPreviewAlt"),
            onLoad: u[1] || (u[1] = (h) => a("loaded")),
            onError: u[2] || (u[2] = (h) => a("failed"))
          }, null, 42, fr)
        ]),
        r("footer", null, [
          r("button", {
            type: "button",
            class: $(["secondary-btn", {
              "is-working": s(i.wallpaper.id) === "downloading"
            }]),
            disabled: !!s(i.wallpaper.id),
            "aria-busy": s(i.wallpaper.id) === "downloading",
            onClick: u[3] || (u[3] = (h) => a("download", i.wallpaper))
          }, [
            s(i.wallpaper.id) === "downloading" ? (m(), F(o(qe), {
              key: 0,
              size: 16,
              spin: ""
            })) : R("v-if", !0),
            N(
              " " + g(s(i.wallpaper.id) === "downloading" ? o(l)("wallpaperSwitcher.downloading") : o(l)("wallpaperSwitcher.downloadCache")),
              1
              /* TEXT */
            )
          ], 10, gr),
          r("button", {
            type: "button",
            class: $(["primary-btn", {
              "is-working": s(i.wallpaper.id) === "setting"
            }]),
            disabled: !!s(i.wallpaper.id),
            "aria-busy": s(i.wallpaper.id) === "setting",
            onClick: u[4] || (u[4] = (h) => a("setWallpaper", i.wallpaper))
          }, [
            s(i.wallpaper.id) === "setting" ? (m(), F(o(qe), {
              key: 0,
              size: 16,
              spin: ""
            })) : R("v-if", !0),
            N(
              " " + g(s(i.wallpaper.id) === "setting" ? o(l)("wallpaperSwitcher.setting") : o(l)("wallpaperSwitcher.setWallpaper")),
              1
              /* TEXT */
            )
          ], 10, vr)
        ])
      ])
    ])) : R("v-if", !0);
  }
}), yr = { class: "wallpaper-window" }, br = {
  key: 0,
  class: "unsupported"
}, kr = /* @__PURE__ */ x({
  __name: "index",
  setup(e) {
    const t = mn(), { t: n } = oe(), a = W(pi()), l = W(null), s = W(null), i = W(!1), u = W(!1), h = W(!1), w = W(!1), p = W(!1), y = async () => {
      try {
        l.value = await sn();
      } catch (b) {
        T.msg(String(b), "error");
      }
    }, j = Ci({
      config: a,
      refreshStatus: async () => {
        await y();
      }
    }), {
      activeView: f,
      wallhavenPage: k,
      wallhavenLastPage: v,
      wallhavenLoading: C,
      wallhavenError: O,
      wallhavenKeyword: M,
      wallhavenCategory: P,
      wallhavenSource: q,
      previewWallpaper: B,
      previewLoading: me,
      previewLoadFailed: I,
      workingActions: ye,
      loadedThumbIds: $e,
      wallhavenSourceLabel: be,
      visibleWallpapers: re,
      openWallhavenGrid: Oe,
      backToSwitcher: et,
      openPreview: tt,
      closePreview: nt,
      markPreviewLoaded: J,
      markPreviewFailed: at,
      markThumbLoaded: lt,
      setThumbRef: ot,
      refreshWallhaven: it,
      setWallhavenSource: st,
      setWallhavenCategory: Ie,
      setWallpaperFromWallhaven: Te,
      downloadWallpaperFromWallhaven: je,
      prevWallhavenPage: rt,
      nextWallhavenPage: ct,
      setupListeners: ut
    } = j, dt = _(
      () => wi(l.value?.currentPath || a.value.lastAppliedPath)
    ), ht = _(() => {
      const b = l.value?.currentPath || a.value.lastAppliedPath;
      return b ? b.split(/[\\/]/).pop() || b : n("wallpaperSwitcher.noCurrentWallpaper");
    }), pt = _(() => {
      const b = l.value?.screenWidth || 2560, K = l.value?.screenHeight || 1440;
      return `${b} × ${K}`;
    }), S = _(
      () => l.value?.currentResolution || pt.value
    ), z = (b) => b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1)} MB` : `${(b / 1024 / 1024 / 1024).toFixed(1)} GB`, E = _(() => a.value.mode === "fixed" ? n("wallpaperSwitcher.fixedImage") : a.value.mode === "wallhaven" ? "Wallhaven" : n("wallpaperSwitcher.localFolder")), Y = _(() => {
      if (a.value.mode === "fixed" || !a.value.scheduleEnabled || !l.value?.schedulerRunning)
        return "—";
      const b = l.value?.nextSwitchAt;
      if (!b) return "—";
      const K = Math.max(0, b - Math.floor(Date.now() / 1e3));
      return K < 60 ? n("wallpaperSwitcher.time.secondsLater", { count: K }) : n("wallpaperSwitcher.time.minutesLater", {
        count: Math.ceil(K / 60)
      });
    }), Yn = _(() => {
      const b = l.value?.cacheSizeBytes ?? 0;
      return z(b);
    }), Nt = _(() => s.value ? n("wallpaperSwitcher.folderStatus.detected", {
      count: s.value.count
    }) : a.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), wt = async () => {
      i.value = !0;
      try {
        const [b, K] = await Promise.all([
          fi(),
          sn()
        ]);
        if (a.value = b, l.value = K, b.folderPath)
          try {
            s.value = await rn(b.folderPath);
          } catch {
            s.value = null;
          }
      } catch (b) {
        T.msg(String(b), "error");
      } finally {
        i.value = !1;
      }
    }, Xn = async () => {
      u.value = !0;
      try {
        await Lt(a.value), await y(), T.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (b) {
        T.msg(String(b), "error");
      } finally {
        u.value = !1;
      }
    }, ea = async () => {
      const b = await Rt({
        multiple: !1,
        directory: !1,
        filters: [
          { name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }
        ]
      });
      if (typeof b == "string") {
        a.value.fixedImagePath = b, a.value.mode = "fixed";
        try {
          await cn(b), await wt(), T.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
        } catch (K) {
          T.msg(String(K), "error");
        }
      }
    }, Ft = async () => {
      if (!a.value.folderPath) {
        T.msg(n("wallpaperSwitcher.messages.selectFolderFirst"), "warning");
        return;
      }
      try {
        s.value = await rn(a.value.folderPath), s.value.count === 0 ? T.msg(n("wallpaperSwitcher.messages.noImagesInFolder"), "warning") : T.msg(Nt.value, "success");
      } catch (b) {
        T.msg(String(b), "error");
      }
    }, ta = async () => {
      const b = await Rt({ multiple: !1, directory: !0 });
      typeof b == "string" && (a.value.folderPath = b, a.value.mode = "folder", await Ft());
    }, na = async () => {
      h.value = !0;
      try {
        await Lt(a.value), await gi(), await y(), T.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (b) {
        T.msg(String(b), "error");
      } finally {
        h.value = !1;
      }
    }, aa = async () => {
      if (!l.value?.currentPath) {
        T.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      a.value.mode = "fixed", a.value.fixedImagePath = l.value.currentPath, a.value.scheduleEnabled = !1;
      try {
        await cn(l.value.currentPath), await wt(), T.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
      } catch (b) {
        T.msg(String(b), "error");
      }
    }, la = async () => {
      w.value = !0;
      try {
        await bi(), await y(), T.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (b) {
        T.msg(String(b), "error");
      } finally {
        w.value = !1;
      }
    }, oa = async () => {
      p.value = !0;
      try {
        await _i();
      } catch (b) {
        T.msg(String(b), "error");
      } finally {
        p.value = !1;
      }
    }, ia = (b) => {
      a.value = b;
    }, sa = async () => {
      await t.close();
    };
    return Pe(async () => {
      await wt(), await ut();
    }), pn(() => {
    }), (b, K) => (m(), L("main", yr, [
      c(Es, {
        "active-view": o(f),
        "wallhaven-source": o(q),
        "wallhaven-loading": o(C),
        onBack: o(et),
        onClose: sa,
        onOpenWallhaven: o(Oe),
        onSetWallhavenSource: o(st)
      }, null, 8, ["active-view", "wallhaven-source", "wallhaven-loading", "onBack", "onOpenWallhaven", "onSetWallhavenSource"]),
      o(l) && !o(l).supported ? (m(), L(
        "section",
        br,
        g(o(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : R("v-if", !0),
      o(f) === "switcher" ? (m(), F(Ps, {
        key: 1,
        config: o(a),
        loading: o(i),
        "preview-src": o(dt),
        "current-wallpaper-name": o(ht),
        "source-label": o(E),
        "resolution-label": o(S),
        "next-switch-label": o(Y),
        "folder-count-label": o(Nt),
        "cache-size-label": o(Yn),
        switching: o(h),
        "clearing-cache": o(w),
        "opening-cache": o(p),
        saving: o(u),
        onUpdateConfig: ia,
        onChooseImage: ea,
        onChooseFolder: ta,
        onScanFolder: Ft,
        onOpenWallhavenGrid: o(Oe),
        onSwitchNow: na,
        onSetCurrentAsFixed: aa,
        onClearCache: la,
        onOpenCacheDir: oa,
        onPersistConfig: Xn
      }, null, 8, ["config", "loading", "preview-src", "current-wallpaper-name", "source-label", "resolution-label", "next-switch-label", "folder-count-label", "cache-size-label", "switching", "clearing-cache", "opening-cache", "saving", "onOpenWallhavenGrid"])) : (m(), F(ur, {
        key: 2,
        keyword: o(M),
        "onUpdate:keyword": K[0] || (K[0] = (ra) => dn(M) ? M.value = ra : null),
        category: o(P),
        loading: o(C),
        error: o(O),
        wallpapers: o(re),
        "loaded-thumb-ids": o($e),
        "working-actions": o(ye),
        page: o(k),
        "last-page": o(v),
        "source-label": o(be),
        "screen-label": o(pt),
        "set-thumb-ref": o(ot),
        onRefresh: o(it),
        onSetCategory: o(Ie),
        onOpenPreview: o(tt),
        onMarkThumbLoaded: o(lt),
        onSetWallpaper: o(Te),
        onDownloadWallpaper: o(je),
        onPrevPage: o(rt),
        onNextPage: o(ct)
      }, null, 8, ["keyword", "category", "loading", "error", "wallpapers", "loaded-thumb-ids", "working-actions", "page", "last-page", "source-label", "screen-label", "set-thumb-ref", "onRefresh", "onSetCategory", "onOpenPreview", "onMarkThumbLoaded", "onSetWallpaper", "onDownloadWallpaper", "onPrevPage", "onNextPage"])),
      c(mr, {
        wallpaper: o(B),
        loading: o(me),
        "load-failed": o(I),
        "working-actions": o(ye),
        onClose: o(nt),
        onLoaded: o(J),
        onFailed: o(at),
        onDownload: o(je),
        onSetWallpaper: o(Te)
      }, null, 8, ["wallpaper", "loading", "load-failed", "working-actions", "onClose", "onLoaded", "onFailed", "onDownload", "onSetWallpaper"])
    ]));
  }
}), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Lr as activate
};
