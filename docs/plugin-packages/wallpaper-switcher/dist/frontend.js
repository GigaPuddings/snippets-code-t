import { getCurrentInstance as me, inject as se, ref as C, computed as m, unref as s, readonly as lo, getCurrentScope as ao, onScopeDispose as ro, onMounted as $e, nextTick as gn, watch as lt, isRef as wn, warn as uo, provide as co, defineComponent as A, createElementBlock as z, openBlock as b, mergeProps as ho, renderSlot as be, createElementVNode as a, normalizeClass as W, createVNode as c, Transition as St, withCtx as ie, withDirectives as J, normalizeStyle as Qe, createTextVNode as M, toDisplayString as N, vShow as Ye, shallowReactive as fo, createBlock as Y, createCommentVNode as V, resolveDynamicComponent as yn, Fragment as xt, withModifiers as ye, isVNode as Te, render as Xe, onUnmounted as mn, withKeys as pt, vModelText as Be, vModelCheckbox as At, renderList as po } from "vue";
const ur = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => ar)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function vo(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function go(e, t, n, o, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ke;
const G = "__TAURI_TO_IPC_KEY__";
function wo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function yo(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class mo {
  get rid() {
    return vo(this, Ke, "f");
  }
  constructor(t) {
    Ke.set(this, void 0), go(this, Ke, t);
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
Ke = /* @__PURE__ */ new WeakMap();
class bn {
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
    return new Pe(this.width * t, this.height * t);
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
class Pe {
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
    return new bn(this.width / t, this.height / t);
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
class we {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof bn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Pe ? this.size : this.size.toPhysical(t);
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
class _n {
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
    return new ne(this.x * t, this.y * t);
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
class ne {
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
    return new _n(this.x / t, this.y / t);
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
    return this.position instanceof _n ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof ne ? this.position : this.position.toPhysical(t);
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
var H;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(H || (H = {}));
async function kn(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function et(e, t, n) {
  var o;
  const i = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: i,
    handler: wo(t)
  }).then((d) => async () => kn(e, d));
}
async function bo(e, t, n) {
  return et(e, (o) => {
    kn(e, o.id), t(o);
  }, n);
}
async function _o(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function ko(e, t, n) {
  await r("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Ie extends mo {
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
      rgba: tt(t),
      width: n,
      height: o
    }).then((i) => new Ie(i));
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
      bytes: tt(t)
    }).then((n) => new Ie(n));
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
    return r("plugin:image|from_path", { path: t }).then((n) => new Ie(n));
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
function tt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Ie ? e.rid : e;
}
var mt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(mt || (mt = {}));
class Co {
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
var Dt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Dt || (Dt = {}));
function Cn() {
  return new Ln(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function vt() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new Ln(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const gt = ["tauri://created", "tauri://error"];
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
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || r("plugin:window|create", {
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
    return (n = (await vt()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Cn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return vt();
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
    for (const t of await vt())
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : bo(t, n, {
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
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return _o(t, n);
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
    if (gt.includes(n)) {
      for (const i of this.listeners[n] || [])
        i({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return ko(t, n, o);
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
    }).then((t) => new ne(t));
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
    }).then((t) => new ne(t));
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
    }).then((t) => new Pe(t));
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
    }).then((t) => new Pe(t));
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
    return t && (t === mt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), r("plugin:window|request_user_attention", {
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
      value: t instanceof we ? t : new we(t)
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
      value: t instanceof we ? t : t ? new we(t) : null
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
      value: t instanceof we ? t : t ? new we(t) : null
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
    return this.listen(H.WINDOW_RESIZED, (n) => {
      n.payload = new Pe(n.payload), t(n);
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
      n.payload = new ne(n.payload), t(n);
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
      const o = new Co(n);
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
    const n = await this.listen(H.DRAG_ENTER, (u) => {
      t({
        ...u,
        payload: {
          type: "enter",
          paths: u.payload.paths,
          position: new ne(u.payload.position)
        }
      });
    }), o = await this.listen(H.DRAG_OVER, (u) => {
      t({
        ...u,
        payload: {
          type: "over",
          position: new ne(u.payload.position)
        }
      });
    }), i = await this.listen(H.DRAG_DROP, (u) => {
      t({
        ...u,
        payload: {
          type: "drop",
          paths: u.payload.paths,
          position: new ne(u.payload.position)
        }
      });
    }), d = await this.listen(H.DRAG_LEAVE, (u) => {
      t({ ...u, payload: { type: "leave" } });
    });
    return () => {
      n(), i(), o(), d();
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
    const n = await this.listen(H.WINDOW_FOCUS, (i) => {
      t({ ...i, payload: !0 });
    }), o = await this.listen(H.WINDOW_BLUR, (i) => {
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
var Rt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Rt || (Rt = {}));
var Ht;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ht || (Ht = {}));
var Vt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Vt || (Vt = {}));
async function Ut(e = {}) {
  return typeof e == "object" && Object.freeze(e), await r("plugin:dialog|open", { options: e });
}
const Sn = Symbol(), qe = "el", Lo = "is-", oe = (e, t, n, o, i) => {
  let d = `${e}-${t}`;
  return n && (d += `-${n}`), o && (d += `__${o}`), i && (d += `--${i}`), d;
}, xn = Symbol("namespaceContextKey"), So = (e) => {
  const t = e || (me() ? se(xn, C(qe)) : C(qe));
  return m(() => s(t) || qe);
}, Wt = (e, t) => {
  const n = So(t);
  return {
    namespace: n,
    b: (p = "") => oe(n.value, e, p, "", ""),
    e: (p) => p ? oe(n.value, e, "", p, "") : "",
    m: (p) => p ? oe(n.value, e, "", "", p) : "",
    be: (p, _) => p && _ ? oe(n.value, e, p, _, "") : "",
    em: (p, _) => p && _ ? oe(n.value, e, "", p, _) : "",
    bm: (p, _) => p && _ ? oe(n.value, e, p, "", _) : "",
    bem: (p, _, S) => p && _ && S ? oe(n.value, e, p, _, S) : "",
    is: (p, ..._) => {
      const S = _.length >= 1 ? _[0] : !0;
      return p && S ? `${Lo}${p}` : "";
    },
    cssVar: (p) => {
      const _ = {};
      for (const S in p)
        p[S] && (_[`--${n.value}-${S}`] = p[S]);
      return _;
    },
    cssVarName: (p) => `--${n.value}-${p}`,
    cssVarBlock: (p) => {
      const _ = {};
      for (const S in p)
        p[S] && (_[`--${n.value}-${e}-${S}`] = p[S]);
      return _;
    },
    cssVarBlockName: (p) => `--${n.value}-${e}-${p}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const xo = Object.prototype.hasOwnProperty, Bt = (e, t) => xo.call(e, t), je = (e) => typeof e == "function", le = (e) => typeof e == "string", Wn = (e) => e !== null && typeof e == "object";
var Wo = typeof global == "object" && global && global.Object === Object && global, zo = typeof self == "object" && self && self.Object === Object && self, zt = Wo || zo || Function("return this")(), _e = zt.Symbol, zn = Object.prototype, Oo = zn.hasOwnProperty, Po = zn.toString, Oe = _e ? _e.toStringTag : void 0;
function Io(e) {
  var t = Oo.call(e, Oe), n = e[Oe];
  try {
    e[Oe] = void 0;
    var o = !0;
  } catch {
  }
  var i = Po.call(e);
  return o && (t ? e[Oe] = n : delete e[Oe]), i;
}
var To = Object.prototype, jo = To.toString;
function No(e) {
  return jo.call(e);
}
var $o = "[object Null]", Mo = "[object Undefined]", Gt = _e ? _e.toStringTag : void 0;
function On(e) {
  return e == null ? e === void 0 ? Mo : $o : Gt && Gt in Object(e) ? Io(e) : No(e);
}
function Eo(e) {
  return e != null && typeof e == "object";
}
var Fo = "[object Symbol]";
function Ot(e) {
  return typeof e == "symbol" || Eo(e) && On(e) == Fo;
}
function Ao(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, i = Array(o); ++n < o; )
    i[n] = t(e[n], n, e);
  return i;
}
var Pt = Array.isArray, Zt = _e ? _e.prototype : void 0, Kt = Zt ? Zt.toString : void 0;
function Pn(e) {
  if (typeof e == "string")
    return e;
  if (Pt(e))
    return Ao(e, Pn) + "";
  if (Ot(e))
    return Kt ? Kt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function In(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Do = "[object AsyncFunction]", Ro = "[object Function]", Ho = "[object GeneratorFunction]", Vo = "[object Proxy]";
function Uo(e) {
  if (!In(e))
    return !1;
  var t = On(e);
  return t == Ro || t == Ho || t == Do || t == Vo;
}
var wt = zt["__core-js_shared__"], qt = function() {
  var e = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Bo(e) {
  return !!qt && qt in e;
}
var Go = Function.prototype, Zo = Go.toString;
function Ko(e) {
  if (e != null) {
    try {
      return Zo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qo = /[\\^$.*+?()[\]{}|]/g, Jo = /^\[object .+?Constructor\]$/, Qo = Function.prototype, Yo = Object.prototype, Xo = Qo.toString, es = Yo.hasOwnProperty, ts = RegExp(
  "^" + Xo.call(es).replace(qo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ns(e) {
  if (!In(e) || Bo(e))
    return !1;
  var t = Uo(e) ? ts : Jo;
  return t.test(Ko(e));
}
function os(e, t) {
  return e?.[t];
}
function Tn(e, t) {
  var n = os(e, t);
  return ns(n) ? n : void 0;
}
function ss(e, t) {
  return e === t || e !== e && t !== t;
}
var is = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ls = /^\w*$/;
function as(e, t) {
  if (Pt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ot(e) ? !0 : ls.test(e) || !is.test(e) || t != null && e in Object(t);
}
var Ne = Tn(Object, "create");
function rs() {
  this.__data__ = Ne ? Ne(null) : {}, this.size = 0;
}
function us(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cs = "__lodash_hash_undefined__", ds = Object.prototype, hs = ds.hasOwnProperty;
function fs(e) {
  var t = this.__data__;
  if (Ne) {
    var n = t[e];
    return n === cs ? void 0 : n;
  }
  return hs.call(t, e) ? t[e] : void 0;
}
var ps = Object.prototype, vs = ps.hasOwnProperty;
function gs(e) {
  var t = this.__data__;
  return Ne ? t[e] !== void 0 : vs.call(t, e);
}
var ws = "__lodash_hash_undefined__";
function ys(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ne && t === void 0 ? ws : t, this;
}
function ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ae.prototype.clear = rs;
ae.prototype.delete = us;
ae.prototype.get = fs;
ae.prototype.has = gs;
ae.prototype.set = ys;
function ms() {
  this.__data__ = [], this.size = 0;
}
function at(e, t) {
  for (var n = e.length; n--; )
    if (ss(e[n][0], t))
      return n;
  return -1;
}
var bs = Array.prototype, _s = bs.splice;
function ks(e) {
  var t = this.__data__, n = at(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : _s.call(t, n, 1), --this.size, !0;
}
function Cs(e) {
  var t = this.__data__, n = at(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ls(e) {
  return at(this.__data__, e) > -1;
}
function Ss(e, t) {
  var n = this.__data__, o = at(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Le(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Le.prototype.clear = ms;
Le.prototype.delete = ks;
Le.prototype.get = Cs;
Le.prototype.has = Ls;
Le.prototype.set = Ss;
var xs = Tn(zt, "Map");
function Ws() {
  this.size = 0, this.__data__ = {
    hash: new ae(),
    map: new (xs || Le)(),
    string: new ae()
  };
}
function zs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function rt(e, t) {
  var n = e.__data__;
  return zs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Os(e) {
  var t = rt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ps(e) {
  return rt(this, e).get(e);
}
function Is(e) {
  return rt(this, e).has(e);
}
function Ts(e, t) {
  var n = rt(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ue.prototype.clear = Ws;
ue.prototype.delete = Os;
ue.prototype.get = Ps;
ue.prototype.has = Is;
ue.prototype.set = Ts;
var js = "Expected a function";
function It(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(js);
  var n = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], d = n.cache;
    if (d.has(i))
      return d.get(i);
    var u = e.apply(this, o);
    return n.cache = d.set(i, u) || d, u;
  };
  return n.cache = new (It.Cache || ue)(), n;
}
It.Cache = ue;
var Ns = 500;
function $s(e) {
  var t = It(e, function(o) {
    return n.size === Ns && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Ms = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Es = /\\(\\)?/g, Fs = $s(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ms, function(n, o, i, d) {
    t.push(i ? d.replace(Es, "$1") : o || n);
  }), t;
});
function As(e) {
  return e == null ? "" : Pn(e);
}
function Ds(e, t) {
  return Pt(e) ? e : as(e, t) ? [e] : Fs(As(e));
}
function Rs(e) {
  if (typeof e == "string" || Ot(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Hs(e, t) {
  t = Ds(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Rs(t[n++])];
  return n && n == o ? e : void 0;
}
function Vs(e, t, n) {
  var o = e == null ? void 0 : Hs(e, t);
  return o === void 0 ? n : o;
}
function Us(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var i = e[t];
    o[i[0]] = i[1];
  }
  return o;
}
const jn = (e) => e === void 0, Jt = (e) => typeof e == "boolean", re = (e) => typeof e == "number", bt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Bs = (e) => le(e) ? !Number.isNaN(Number(e)) : !1;
var Qt;
const ce = typeof window < "u", Gs = (e) => typeof e == "string", Zs = () => {
};
ce && ((Qt = window?.navigator) != null && Qt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Tt(e) {
  return typeof e == "function" ? e() : s(e);
}
function Ks(e) {
  return e;
}
function jt(e) {
  return ao() ? (ro(e), !0) : !1;
}
function qs(e, t = !0) {
  me() ? $e(e) : t ? e() : gn(e);
}
function Nn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, i = C(!1);
  let d = null;
  function u() {
    d && (clearTimeout(d), d = null);
  }
  function h() {
    i.value = !1, u();
  }
  function v(...g) {
    u(), i.value = !0, d = setTimeout(() => {
      i.value = !1, d = null, e(...g);
    }, Tt(t));
  }
  return o && (i.value = !0, ce && v()), jt(h), {
    isPending: lo(i),
    start: v,
    stop: h
  };
}
function $n(e) {
  var t;
  const n = Tt(e);
  return (t = n?.$el) != null ? t : n;
}
const Mn = ce ? window : void 0;
function En(...e) {
  let t, n, o, i;
  if (Gs(e[0]) || Array.isArray(e[0]) ? ([n, o, i] = e, t = Mn) : [t, n, o, i] = e, !t)
    return Zs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const d = [], u = () => {
    d.forEach((w) => w()), d.length = 0;
  }, h = (w, L, T, j) => (w.addEventListener(L, T, j), () => w.removeEventListener(L, T, j)), v = lt(() => [$n(t), Tt(i)], ([w, L]) => {
    u(), w && d.push(...n.flatMap((T) => o.map((j) => h(w, T, j, L))));
  }, { immediate: !0, flush: "post" }), g = () => {
    v(), u();
  };
  return jt(g), g;
}
function Js(e, t = !1) {
  const n = C(), o = () => n.value = !!e();
  return o(), qs(o, t), n;
}
const Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xt = "__vueuse_ssr_handlers__";
Yt[Xt] = Yt[Xt] || {};
var en = Object.getOwnPropertySymbols, Qs = Object.prototype.hasOwnProperty, Ys = Object.prototype.propertyIsEnumerable, Xs = (e, t) => {
  var n = {};
  for (var o in e)
    Qs.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && en)
    for (var o of en(e))
      t.indexOf(o) < 0 && Ys.call(e, o) && (n[o] = e[o]);
  return n;
};
function ei(e, t, n = {}) {
  const o = n, { window: i = Mn } = o, d = Xs(o, ["window"]);
  let u;
  const h = Js(() => i && "ResizeObserver" in i), v = () => {
    u && (u.disconnect(), u = void 0);
  }, g = lt(() => $n(e), (L) => {
    v(), h.value && i && L && (u = new ResizeObserver(t), u.observe(L, d));
  }, { immediate: !0, flush: "post" }), w = () => {
    v(), g();
  };
  return jt(w), {
    isSupported: h,
    stop: w
  };
}
var tn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(tn || (tn = {}));
var ti = Object.defineProperty, nn = Object.getOwnPropertySymbols, ni = Object.prototype.hasOwnProperty, oi = Object.prototype.propertyIsEnumerable, on = (e, t, n) => t in e ? ti(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, si = (e, t) => {
  for (var n in t || (t = {}))
    ni.call(t, n) && on(e, n, t[n]);
  if (nn)
    for (var n of nn(t))
      oi.call(t, n) && on(e, n, t[n]);
  return e;
};
const ii = {
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
si({
  linear: Ks
}, ii);
const sn = {
  current: 0
}, ln = C(0), Fn = 2e3, an = Symbol("elZIndexContextKey"), An = Symbol("zIndexContextKey"), li = (e) => {
  const t = me() ? se(an, sn) : sn, n = e || (me() ? se(An, void 0) : void 0), o = m(() => {
    const u = s(n);
    return re(u) ? u : Fn;
  }), i = m(() => o.value + ln.value), d = () => (t.current++, ln.value = t.current, i.value);
  return !ce && se(an), {
    initialZIndex: o,
    currentZIndex: i,
    nextZIndex: d
  };
};
var ai = {
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
const ri = (e) => (t, n) => ui(t, n, s(e)), ui = (e, t, n) => Vs(n, e, e).replace(/\{(\w+)\}/g, (o, i) => {
  var d;
  return `${(d = t?.[i]) != null ? d : `{${i}}`}`;
}), ci = (e) => {
  const t = m(() => s(e).name), n = wn(e) ? e : C(e);
  return {
    lang: t,
    locale: n,
    t: ri(e)
  };
}, Dn = Symbol("localeContextKey"), di = (e) => {
  const t = e || se(Dn, C());
  return ci(m(() => t.value || ai));
}, Rn = "__epPropKey", U = (e) => e, hi = (e) => Wn(e) && !!e[Rn], Hn = (e, t) => {
  if (!Wn(e) || hi(e))
    return e;
  const { values: n, required: o, default: i, type: d, validator: u } = e, v = {
    type: d,
    required: !!o,
    validator: n || u ? (g) => {
      let w = !1, L = [];
      if (n && (L = Array.from(n), Bt(e, "default") && L.push(i), w || (w = L.includes(g))), u && (w || (w = u(g))), !w && L.length > 0) {
        const T = [...new Set(L)].map((j) => JSON.stringify(j)).join(", ");
        uo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${T}], got value ${JSON.stringify(g)}.`);
      }
      return w;
    } : void 0,
    [Rn]: !0
  };
  return Bt(e, "default") && (v.default = i), v;
}, Se = (e) => Us(Object.entries(e).map(([t, n]) => [
  t,
  Hn(n, t)
])), fi = ["", "default", "small", "large"], pi = Hn({
  type: String,
  values: fi,
  required: !1
}), vi = Symbol("size"), gi = Symbol("emptyValuesContextKey"), wi = Se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => je(e) ? !e() : !e
  }
}), rn = (e) => Object.keys(e), nt = C();
function Vn(e, t = void 0) {
  return me() ? se(Sn, nt) : nt;
}
function Un(e, t) {
  const n = Vn(), o = Wt(e, m(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || qe;
  })), i = di(m(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), d = li(m(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || Fn;
  })), u = m(() => {
    var h;
    return s(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return Bn(m(() => s(n) || {})), {
    ns: o,
    locale: i,
    zIndex: d,
    size: u
  };
}
const Bn = (e, t, n = !1) => {
  var o;
  const i = !!me(), d = i ? Vn() : void 0, u = (o = void 0) != null ? o : i ? co : void 0;
  if (!u)
    return;
  const h = m(() => {
    const v = s(e);
    return d?.value ? yi(d.value, v) : v;
  });
  return u(Sn, h), u(Dn, m(() => h.value.locale)), u(xn, m(() => h.value.namespace)), u(An, m(() => h.value.zIndex)), u(vi, {
    size: m(() => h.value.size || "")
  }), u(gi, m(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !nt.value) && (nt.value = h.value), h;
}, yi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...rn(e), ...rn(t)])], o = {};
  for (const i of n)
    o[i] = t[i] !== void 0 ? t[i] : e[i];
  return o;
};
var ut = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
};
function _t(e, t = "px") {
  if (!e)
    return "";
  if (re(e) || Bs(e))
    return `${e}${t}`;
  if (le(e))
    return e;
}
const Gn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Zn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), mi = Se({
  size: {
    type: U([Number, String])
  },
  color: {
    type: String
  }
}), bi = A({
  name: "ElIcon",
  inheritAttrs: !1
}), _i = /* @__PURE__ */ A({
  ...bi,
  props: mi,
  setup(e) {
    const t = e, n = Wt("icon"), o = m(() => {
      const { size: i, color: d } = t;
      return !i && !d ? {} : {
        fontSize: jn(i) ? void 0 : _t(i),
        "--color": d
      };
    });
    return (i, d) => (b(), z("i", ho({
      class: s(n).b(),
      style: s(o)
    }, i.$attrs), [
      be(i.$slots, "default")
    ], 16));
  }
});
var ki = /* @__PURE__ */ ut(_i, [["__file", "icon.vue"]]);
const ot = Gn(ki);
/*! Element Plus Icons Vue v2.3.1 */
var Ci = /* @__PURE__ */ A({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (b(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Li = Ci, Si = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (b(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Kn = Si, xi = /* @__PURE__ */ A({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (b(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Wi = xi, zi = /* @__PURE__ */ A({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (b(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Oi = zi, Pi = /* @__PURE__ */ A({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (b(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ii = Pi;
const qn = U([
  String,
  Object,
  Function
]), Ti = {
  Close: Kn
}, ji = {
  Close: Kn
}, st = {
  success: Oi,
  warning: Ii,
  error: Li,
  info: Wi
}, Ni = (e) => e, Je = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, $i = Se({
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
    type: U([String, Object, Array])
  },
  offset: {
    type: U(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Mi = A({
  name: "ElBadge"
}), Ei = /* @__PURE__ */ A({
  ...Mi,
  props: $i,
  setup(e, { expose: t }) {
    const n = e, o = Wt("badge"), i = m(() => n.isDot ? "" : re(n.value) && re(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), d = m(() => {
      var u, h, v, g, w;
      return [
        {
          backgroundColor: n.color,
          marginRight: _t(-((h = (u = n.offset) == null ? void 0 : u[0]) != null ? h : 0)),
          marginTop: _t((g = (v = n.offset) == null ? void 0 : v[1]) != null ? g : 0)
        },
        (w = n.badgeStyle) != null ? w : {}
      ];
    });
    return t({
      content: i
    }), (u, h) => (b(), z("div", {
      class: W(s(o).b())
    }, [
      be(u.$slots, "default"),
      c(St, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ie(() => [
          J(a("sup", {
            class: W([
              s(o).e("content"),
              s(o).em("content", u.type),
              s(o).is("fixed", !!u.$slots.default),
              s(o).is("dot", u.isDot),
              s(o).is("hide-zero", !u.showZero && n.value === 0),
              u.badgeClass
            ]),
            style: Qe(s(d))
          }, [
            be(u.$slots, "content", { value: s(i) }, () => [
              M(N(s(i)), 1)
            ])
          ], 6), [
            [Ye, !u.hidden && (s(i) || u.isDot || u.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Fi = /* @__PURE__ */ ut(Ei, [["__file", "badge.vue"]]);
const Ai = Gn(Fi), Di = Se({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: U(Object)
  },
  size: pi,
  button: {
    type: U(Object)
  },
  experimentalFeatures: {
    type: U(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: U(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...wi
}), Z = {};
A({
  name: "ElConfigProvider",
  props: Di,
  setup(e, { slots: t }) {
    lt(() => e.message, (o) => {
      Object.assign(Z, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Bn(e);
    return () => be(t, "default", { config: n?.value });
  }
});
const Jn = ["success", "info", "warning", "error"], F = Ni({
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
  appendTo: ce ? document.body : void 0
}), Ri = Se({
  customClass: {
    type: String,
    default: F.customClass
  },
  center: {
    type: Boolean,
    default: F.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: F.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: F.duration
  },
  icon: {
    type: qn,
    default: F.icon
  },
  id: {
    type: String,
    default: F.id
  },
  message: {
    type: U([
      String,
      Object,
      Function
    ]),
    default: F.message
  },
  onClose: {
    type: U(Function),
    default: F.onClose
  },
  showClose: {
    type: Boolean,
    default: F.showClose
  },
  type: {
    type: String,
    values: Jn,
    default: F.type
  },
  plain: {
    type: Boolean,
    default: F.plain
  },
  offset: {
    type: Number,
    default: F.offset
  },
  zIndex: {
    type: Number,
    default: F.zIndex
  },
  grouping: {
    type: Boolean,
    default: F.grouping
  },
  repeatNum: {
    type: Number,
    default: F.repeatNum
  }
}), Hi = {
  destroy: () => !0
}, K = fo([]), Vi = (e) => {
  const t = K.findIndex((i) => i.id === e), n = K[t];
  let o;
  return t > 0 && (o = K[t - 1]), { current: n, prev: o };
}, Ui = (e) => {
  const { prev: t } = Vi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Bi = (e, t) => K.findIndex((o) => o.id === e) > 0 ? 16 : t, Gi = A({
  name: "ElMessage"
}), Zi = /* @__PURE__ */ A({
  ...Gi,
  props: Ri,
  emits: Hi,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = ji, { ns: i, zIndex: d } = Un("message"), { currentZIndex: u, nextZIndex: h } = d, v = C(), g = C(!1), w = C(0);
    let L;
    const T = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), j = m(() => {
      const O = n.type;
      return { [i.bm("icon", O)]: O && st[O] };
    }), R = m(() => n.icon || st[n.type] || ""), p = m(() => Ui(n.id)), _ = m(() => Bi(n.id, n.offset) + p.value), S = m(() => w.value + _.value), B = m(() => ({
      top: `${_.value}px`,
      zIndex: u.value
    }));
    function x() {
      n.duration !== 0 && ({ stop: L } = Nn(() => {
        q();
      }, n.duration));
    }
    function $() {
      L?.();
    }
    function q() {
      g.value = !1;
    }
    function de({ code: O }) {
      O === Je.esc && q();
    }
    return $e(() => {
      x(), h(), g.value = !0;
    }), lt(() => n.repeatNum, () => {
      $(), x();
    }), En(document, "keydown", de), ei(v, () => {
      w.value = v.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: S,
      close: q
    }), (O, Me) => (b(), Y(St, {
      name: s(i).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (Ee) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: ie(() => [
        J(a("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: v,
          class: W([
            s(i).b(),
            { [s(i).m(O.type)]: O.type },
            s(i).is("center", O.center),
            s(i).is("closable", O.showClose),
            s(i).is("plain", O.plain),
            O.customClass
          ]),
          style: Qe(s(B)),
          role: "alert",
          onMouseenter: $,
          onMouseleave: x
        }, [
          O.repeatNum > 1 ? (b(), Y(s(Ai), {
            key: 0,
            value: O.repeatNum,
            type: s(T),
            class: W(s(i).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          s(R) ? (b(), Y(s(ot), {
            key: 1,
            class: W([s(i).e("icon"), s(j)])
          }, {
            default: ie(() => [
              (b(), Y(yn(s(R))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          be(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (b(), z(xt, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: W(s(i).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (b(), z("p", {
              key: 0,
              class: W(s(i).e("content"))
            }, N(O.message), 3))
          ]),
          O.showClose ? (b(), Y(s(ot), {
            key: 2,
            class: W(s(i).e("closeBtn")),
            onClick: ye(q, ["stop"])
          }, {
            default: ie(() => [
              c(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [Ye, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ki = /* @__PURE__ */ ut(Zi, [["__file", "message.vue"]]);
let qi = 1;
const Qn = (e) => {
  const t = !e || le(e) || Te(e) || je(e) ? { message: e } : e, n = {
    ...F,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (le(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    bt(o) || (o = document.body), n.appendTo = o;
  }
  return Jt(Z.grouping) && !n.grouping && (n.grouping = Z.grouping), re(Z.duration) && n.duration === 3e3 && (n.duration = Z.duration), re(Z.offset) && n.offset === 16 && (n.offset = Z.offset), Jt(Z.showClose) && !n.showClose && (n.showClose = Z.showClose), n;
}, Ji = (e) => {
  const t = K.indexOf(e);
  if (t === -1)
    return;
  K.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Qi = ({ appendTo: e, ...t }, n) => {
  const o = `message_${qi++}`, i = t.onClose, d = document.createElement("div"), u = {
    ...t,
    id: o,
    onClose: () => {
      i?.(), Ji(w);
    },
    onDestroy: () => {
      Xe(null, d);
    }
  }, h = c(Ki, u, je(u.message) || Te(u.message) ? {
    default: je(u.message) ? u.message : () => u.message
  } : null);
  h.appContext = n || ke._context, Xe(h, d), e.appendChild(d.firstElementChild);
  const v = h.component, w = {
    id: o,
    vnode: h,
    vm: v,
    handler: {
      close: () => {
        v.exposed.visible.value = !1;
      }
    },
    props: h.component.props
  };
  return w;
}, ke = (e = {}, t) => {
  if (!ce)
    return { close: () => {
    } };
  const n = Qn(e);
  if (n.grouping && K.length) {
    const i = K.find(({ vnode: d }) => {
      var u;
      return ((u = d.props) == null ? void 0 : u.message) === n.message;
    });
    if (i)
      return i.props.repeatNum += 1, i.props.type = n.type, i.handler;
  }
  if (re(Z.max) && K.length >= Z.max)
    return { close: () => {
    } };
  const o = Qi(n, t);
  return K.push(o), o.handler;
};
Jn.forEach((e) => {
  ke[e] = (t = {}, n) => {
    const o = Qn(t);
    return ke({ ...o, type: e }, n);
  };
});
function Yi(e) {
  for (const t of K)
    (!e || e === t.props.type) && t.handler.close();
}
ke.closeAll = Yi;
ke._context = null;
const Xi = Zn(ke, "$message"), Yn = [
  "success",
  "info",
  "warning",
  "error"
], el = Se({
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
    type: qn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: U([
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
    type: U(Function),
    default: () => {
    }
  },
  onClose: {
    type: U(Function),
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
    values: [...Yn, ""],
    default: ""
  },
  zIndex: Number
}), tl = {
  destroy: () => !0
}, nl = A({
  name: "ElNotification"
}), ol = /* @__PURE__ */ A({
  ...nl,
  props: el,
  emits: tl,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: i } = Un("notification"), { nextZIndex: d, currentZIndex: u } = i, { Close: h } = Ti, v = C(!1);
    let g;
    const w = m(() => {
      const x = n.type;
      return x && st[n.type] ? o.m(x) : "";
    }), L = m(() => n.type && st[n.type] || n.icon), T = m(() => n.position.endsWith("right") ? "right" : "left"), j = m(() => n.position.startsWith("top") ? "top" : "bottom"), R = m(() => {
      var x;
      return {
        [j.value]: `${n.offset}px`,
        zIndex: (x = n.zIndex) != null ? x : u.value
      };
    });
    function p() {
      n.duration > 0 && ({ stop: g } = Nn(() => {
        v.value && S();
      }, n.duration));
    }
    function _() {
      g?.();
    }
    function S() {
      v.value = !1;
    }
    function B({ code: x }) {
      x === Je.delete || x === Je.backspace ? _() : x === Je.esc ? v.value && S() : p();
    }
    return $e(() => {
      p(), d(), v.value = !0;
    }), En(document, "keydown", B), t({
      visible: v,
      close: S
    }), (x, $) => (b(), Y(St, {
      name: s(o).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (q) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: ie(() => [
        J(a("div", {
          id: x.id,
          class: W([s(o).b(), x.customClass, s(T)]),
          style: Qe(s(R)),
          role: "alert",
          onMouseenter: _,
          onMouseleave: p,
          onClick: x.onClick
        }, [
          s(L) ? (b(), Y(s(ot), {
            key: 0,
            class: W([s(o).e("icon"), s(w)])
          }, {
            default: ie(() => [
              (b(), Y(yn(s(L))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          a("div", {
            class: W(s(o).e("group"))
          }, [
            a("h2", {
              class: W(s(o).e("title")),
              textContent: N(x.title)
            }, null, 10, ["textContent"]),
            J(a("div", {
              class: W(s(o).e("content")),
              style: Qe(x.title ? void 0 : { margin: 0 })
            }, [
              be(x.$slots, "default", {}, () => [
                x.dangerouslyUseHTMLString ? (b(), z(xt, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: x.message }, null, 8, ["innerHTML"])
                ], 2112)) : (b(), z("p", { key: 0 }, N(x.message), 1))
              ])
            ], 6), [
              [Ye, x.message]
            ]),
            x.showClose ? (b(), Y(s(ot), {
              key: 0,
              class: W(s(o).e("closeBtn")),
              onClick: ye(S, ["stop"])
            }, {
              default: ie(() => [
                c(s(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ye, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var sl = /* @__PURE__ */ ut(ol, [["__file", "notification.vue"]]);
const it = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, kt = 16;
let il = 1;
const Ce = function(e = {}, t) {
  if (!ce)
    return { close: () => {
    } };
  (le(e) || Te(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  it[n].forEach(({ vm: w }) => {
    var L;
    o += (((L = w.el) == null ? void 0 : L.offsetHeight) || 0) + kt;
  }), o += kt;
  const i = `notification_${il++}`, d = e.onClose, u = {
    ...e,
    offset: o,
    id: i,
    onClose: () => {
      ll(i, n, d);
    }
  };
  let h = document.body;
  bt(e.appendTo) ? h = e.appendTo : le(e.appendTo) && (h = document.querySelector(e.appendTo)), bt(h) || (h = document.body);
  const v = document.createElement("div"), g = c(sl, u, je(u.message) ? u.message : Te(u.message) ? () => u.message : null);
  return g.appContext = jn(t) ? Ce._context : t, g.props.onDestroy = () => {
    Xe(null, v);
  }, Xe(g, v), it[n].push({ vm: g }), h.appendChild(v.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
Yn.forEach((e) => {
  Ce[e] = (t = {}, n) => ((le(t) || Te(t)) && (t = {
    message: t
  }), Ce({ ...t, type: e }, n));
});
function ll(e, t, n) {
  const o = it[t], i = o.findIndex(({ vm: g }) => {
    var w;
    return ((w = g.component) == null ? void 0 : w.props.id) === e;
  });
  if (i === -1)
    return;
  const { vm: d } = o[i];
  if (!d)
    return;
  n?.(d);
  const u = d.el.offsetHeight, h = t.split("-")[0];
  o.splice(i, 1);
  const v = o.length;
  if (!(v < 1))
    for (let g = i; g < v; g++) {
      const { el: w, component: L } = o[g].vm, T = Number.parseInt(w.style[h], 10) - u - kt;
      L.props.offset = T;
    }
}
function al() {
  for (const e of Object.values(it))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ce.closeAll = al;
Ce._context = null;
const rl = Zn(Ce, "$notify"), I = {
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
      showClose: d = !1
    } = e;
    o === "center" ? Xi({
      message: t,
      type: n,
      duration: i,
      showClose: d,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : rl({
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
};
var Ct;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(Ct || (Ct = {}));
async function ul() {
  return r("plugin:path|resolve_directory", {
    directory: Ct.AppCache
  });
}
async function cl(...e) {
  return r("plugin:path|join", { paths: e });
}
async function un(e, t) {
  await r("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const dl = () => ({
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
  lastFolderIndex: 0,
  lastAppliedPath: null
}), hl = (e) => e ? /^https?:\/\//i.test(e) ? e : yo(e) : "", cn = () => r("wallpaper_get_config"), Lt = (e) => r("wallpaper_save_config", { config: e }), dn = () => r("wallpaper_get_status"), hn = (e) => r("wallpaper_scan_folder", { path: e }), fl = (e) => r("wallpaper_set_fixed_image", { path: e }), pl = () => r("wallpaper_switch_now"), vl = (e) => r("wallpaper_apply_current_fit", { fitMode: e }), gl = (e) => r("wallpaper_fetch_wallhaven", { params: e }), wl = (e) => r("wallpaper_set_wallhaven_image", { wallpaper: e }), yl = (e) => r("wallpaper_download_wallhaven_image", { wallpaper: e }), ml = () => r("wallpaper_clear_cache"), bl = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), _l = async () => {
  try {
    await r("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!bl(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await ul(), t = await cl(e, "wallpaper-switcher");
  try {
    await un(t);
  } catch {
    await un(e);
  }
};
function kl({ config: e, refreshStatus: t }) {
  const n = C("switcher"), o = C([]), i = C(1), d = C(1), u = C(!1), h = C(""), v = C(""), g = C("general"), w = C("hot"), L = C(null), T = C(!1), j = C(!1), R = C(/* @__PURE__ */ new Set()), p = C(/* @__PURE__ */ new Set()), _ = /* @__PURE__ */ new Map();
  let S = null, B = null, x = null, $ = 0;
  const q = m(() => w.value === "hot" ? "Hot" : "Toplist"), de = m(() => o.value.slice(0, 8)), O = m(() => {
    const k = v.value.trim();
    return g.value === "nature" ? k ? `${k} nature` : "nature" : k || null;
  }), Me = m(() => g.value), Ee = (k) => {
    const P = String(k).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(P) ? "Wallhaven 网络连接失败，请稍后重试或检查代理/网络。" : P.length > 120 ? `${P.slice(0, 120)}...` : P;
  }, X = (k, P) => {
    const E = new Set(R.value);
    P ? E.add(k) : E.delete(k), R.value = E;
  }, he = (k) => {
    const P = new Set(p.value);
    P.add(k), p.value = P;
  }, Fe = (k, P) => {
    if (!(P instanceof HTMLImageElement)) {
      _.delete(k.id);
      return;
    }
    if (_.set(k.id, P), !S) {
      P.src = k.thumbs.large;
      return;
    }
    P.dataset.src = k.thumbs.large, S.observe(P);
  }, Ae = () => {
    p.value = /* @__PURE__ */ new Set(), _.clear();
  }, fe = async () => {
    e.value.wallhavenQuery = v.value.trim() || null, e.value.wallhavenCategory = g.value, e.value.wallhavenSource = w.value, e.value.mode = "wallhaven", await Lt(e.value);
  }, Q = async (k = i.value) => {
    const P = ++$;
    u.value = !0, h.value = "", o.value = [], Ae();
    try {
      await fe();
      const E = await gl({
        source: w.value,
        page: k,
        query: O.value,
        category: Me.value
      });
      if (P !== $) return;
      o.value = E.data, i.value = E.page, d.value = Math.max(1, E.lastPage), await gn();
      for (const te of _.values())
        S && S.observe(te);
    } catch (E) {
      if (P !== $) return;
      o.value = [], h.value = Ee(E), I.msg(h.value, "error");
    } finally {
      P === $ && (u.value = !1);
    }
  }, De = () => Q(1), ct = async (k) => {
    w.value = k, await Q(1);
  }, dt = async (k) => {
    g.value = k, await Q(1);
  }, ee = async () => {
    v.value = "", g.value = e.value.wallhavenCategory || "general", w.value = e.value.wallhavenSource, i.value = 1, h.value = "", o.value = [], n.value = "wallhaven", await Q(1);
  }, pe = async () => {
    n.value = "switcher", xe(), await t();
  }, ve = (k) => {
    L.value = k, T.value = !0, j.value = !1;
  }, xe = () => {
    L.value = null, T.value = !1, j.value = !1;
  }, Re = () => {
    T.value = !1;
  }, He = () => {
    T.value = !1, j.value = !0;
  }, Ve = async (k) => {
    X(k.id, !0);
    try {
      I.msg("正在设置壁纸...", "info"), await wl(k), await t(), I.msg("壁纸已设置", "success");
    } catch (P) {
      I.msg(String(P), "error");
    } finally {
      X(k.id, !1);
    }
  }, ht = async (k) => {
    X(k.id, !0);
    try {
      I.msg("正在下载壁纸...", "info"), await yl(k), await t(), I.msg("壁纸已下载到缓存", "success");
    } catch (P) {
      I.msg(String(P), "error");
    } finally {
      X(k.id, !1);
    }
  }, Ue = async () => {
    i.value > 1 && await Q(i.value - 1);
  }, We = async () => {
    i.value < d.value && await Q(i.value + 1);
  };
  return $e(() => {
    S = new IntersectionObserver((k) => {
      for (const P of k) {
        if (!P.isIntersecting) continue;
        const E = P.target, te = E.dataset.src;
        te && E.src !== te && (E.src = te), S?.unobserve(E);
      }
    }, { root: null, rootMargin: "120px" }), B = null, x = null;
  }), mn(() => {
    S?.disconnect(), S = null, B?.(), x?.();
  }), {
    activeView: n,
    wallpapers: o,
    wallhavenPage: i,
    wallhavenLastPage: d,
    wallhavenLoading: u,
    wallhavenError: h,
    wallhavenKeyword: v,
    wallhavenCategory: g,
    wallhavenSource: w,
    previewWallpaper: L,
    previewLoading: T,
    previewLoadFailed: j,
    workingIds: R,
    loadedThumbIds: p,
    wallhavenSourceLabel: q,
    visibleWallpapers: de,
    openWallhavenGrid: ee,
    backToSwitcher: pe,
    openPreview: ve,
    closePreview: xe,
    markPreviewLoaded: Re,
    markPreviewFailed: He,
    markThumbLoaded: he,
    setThumbRef: Fe,
    refreshWallhaven: De,
    setWallhavenSource: ct,
    setWallhavenCategory: dt,
    setWallpaperFromWallhaven: Ve,
    downloadWallpaperFromWallhaven: ht,
    prevWallhavenPage: Ue,
    nextWallhavenPage: We,
    setupListeners: async () => {
      B = await et("wallpaper-switcher-changed", t), x = await et("wallpaper-switcher-error", (k) => {
        I.msg(k.payload?.message || "定时切换失败", "error");
      });
    }
  };
}
var Cl = {
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
function Ll() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Sl(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], i = [], d = t.theme || n.theme;
  switch (d) {
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
var xl = Symbol("icon-context");
function D(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(d) {
      var u = Ll(), h = se(xl, Cl);
      return function() {
        var v = d.size, g = d.strokeWidth, w = d.strokeLinecap, L = d.strokeLinejoin, T = d.theme, j = d.fill, R = d.spin, p = Sl(u, {
          size: v,
          strokeWidth: g,
          strokeLinecap: w,
          strokeLinejoin: L,
          theme: T,
          fill: j
        }, h), _ = [h.prefix + "-icon"];
        return _.push(h.prefix + "-icon-" + e), t && h.rtl && _.push(h.prefix + "-icon-rtl"), R && _.push(h.prefix + "-icon-spin"), c("span", {
          class: _.join(" ")
        }, [n(p)]);
      };
    }
  };
  return o;
}
const Wl = D("back", !0, function(e) {
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
}), zl = D("computer", !1, function(e) {
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
}), Ol = D("delete", !1, function(e) {
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
}), Pl = D("download", !1, function(e) {
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
}), fn = D("folder-open", !0, function(e) {
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
}), Il = D("lightning", !0, function(e) {
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
}), yt = D("picture", !0, function(e) {
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
}), Tl = D("picture-album", !0, function(e) {
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
}), jl = D("pin", !0, function(e) {
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
}), Nl = D("preview-open", !1, function(e) {
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
}), pn = D("refresh", !0, function(e) {
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
}), $l = D("save", !0, function(e) {
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
}), vn = D("search", !0, function(e) {
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
}), Ml = { class: "wallpaper-window" }, El = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Fl = {
  key: 0,
  class: "title"
}, Al = {
  key: 1,
  class: "title"
}, Dl = {
  key: 2,
  class: "window-actions"
}, Rl = {
  key: 3,
  class: "window-actions"
}, Hl = {
  class: "source-toggle",
  role: "tablist",
  "aria-label": "壁纸来源切换"
}, Vl = {
  key: 0,
  class: "unsupported"
}, Ul = { class: "top-panel" }, Bl = { class: "preview" }, Gl = ["src"], Zl = {
  key: 1,
  class: "preview-empty"
}, Kl = { class: "status-panel" }, ql = { class: "status-row" }, Jl = { class: "status-row" }, Ql = { class: "status-row" }, Yl = { class: "status-actions" }, Xl = ["disabled"], ea = { class: "card settings-card" }, ta = { class: "form-row mode-row" }, na = { class: "segmented three" }, oa = { class: "form-row fixed-row" }, sa = { class: "form-row folder-row" }, ia = { class: "hint-row" }, la = { class: "form-row wallhaven-row" }, aa = { class: "segmented source" }, ra = { class: "hint-row" }, ua = { class: "card rules-card" }, ca = { class: "rules-line" }, da = { class: "switch-label" }, ha = { class: "number-label" }, fa = { class: "segmented mini" }, pa = { class: "rules-line" }, va = { class: "segmented fit" }, ga = ["disabled"], wa = ["disabled"], ya = ["disabled"], ma = { class: "checkbox-label" }, ba = { class: "footer-card" }, _a = { class: "cache-info" }, ka = { class: "footer-actions" }, Ca = ["disabled"], La = ["disabled"], Sa = ["disabled"], xa = {
  key: 2,
  class: "wallhaven-view"
}, Wa = { class: "filters filters--preview-style" }, za = { class: "search-box wallhaven-search" }, Oa = {
  class: "wallhaven-tabs",
  role: "tablist",
  "aria-label": "壁纸分类切换"
}, Pa = ["disabled"], Ia = ["disabled"], Ta = ["disabled"], ja = ["disabled"], Na = { class: "wallhaven-meta" }, $a = { class: "grid-wrap" }, Ma = {
  key: 0,
  class: "empty-state"
}, Ea = {
  key: 1,
  class: "empty-state error-state"
}, Fa = {
  key: 2,
  class: "empty-state"
}, Aa = {
  key: 3,
  class: "wallpaper-grid"
}, Da = ["onClick"], Ra = {
  key: 0,
  class: "thumb-skeleton"
}, Ha = ["alt", "onLoad"], Va = ["onClick"], Ua = ["disabled", "onClick"], Ba = ["disabled", "onClick"], Ga = { class: "pager" }, Za = { class: "source-note" }, Ka = { class: "pager-actions" }, qa = ["disabled"], Ja = ["disabled"], Qa = { class: "preview-dialog" }, Ya = { class: "preview-image-wrap" }, Xa = {
  key: 0,
  class: "preview-skeleton"
}, er = {
  key: 1,
  class: "preview-error"
}, tr = ["src"], nr = ["disabled"], or = ["disabled"], sr = /* @__PURE__ */ A({
  __name: "index",
  setup(e) {
    const t = Cn(), n = C(dl()), o = C(null), i = C(null), d = C(!1), u = C(!1), h = C(!1), v = C(!1), g = C(!1), w = C(!1), L = kl({
      config: n,
      refreshStatus: async () => {
        await ze();
      }
    }), {
      activeView: T,
      wallhavenPage: j,
      wallhavenLastPage: R,
      wallhavenLoading: p,
      wallhavenError: _,
      wallhavenKeyword: S,
      wallhavenCategory: B,
      wallhavenSource: x,
      previewWallpaper: $,
      previewLoading: q,
      previewLoadFailed: de,
      workingIds: O,
      loadedThumbIds: Me,
      wallhavenSourceLabel: Ee,
      visibleWallpapers: X,
      openWallhavenGrid: he,
      backToSwitcher: Fe,
      openPreview: Ae,
      closePreview: fe,
      markPreviewLoaded: Q,
      markPreviewFailed: De,
      markThumbLoaded: ct,
      setThumbRef: dt,
      refreshWallhaven: ee,
      setWallhavenSource: pe,
      setWallhavenCategory: ve,
      setWallpaperFromWallhaven: xe,
      downloadWallpaperFromWallhaven: Re,
      prevWallhavenPage: He,
      nextWallhavenPage: Ve,
      setupListeners: ht
    } = L, Ue = m(() => hl(o.value?.currentPath || n.value.lastAppliedPath)), We = m(() => {
      const y = o.value?.screenWidth || 2560, l = o.value?.screenHeight || 1440;
      return `${y} × ${l}`;
    }), Nt = m(() => o.value?.currentResolution || We.value), k = m(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), P = m(() => {
      const y = o.value?.nextSwitchAt;
      if (!y) return "18 分钟后";
      const l = Math.max(0, y - Math.floor(Date.now() / 1e3));
      return l < 60 ? `${l} 秒后` : `${Math.ceil(l / 60)} 分钟后`;
    }), E = m(() => {
      const y = o.value?.cacheSizeBytes ?? 0;
      return io(y);
    }), te = m(() => i.value ? `检测到 ${i.value.count} 张可用图片` : n.value.folderPath ? "尚未扫描文件夹" : "请选择本地壁纸文件夹"), $t = async () => {
      d.value = !0;
      try {
        const [y, l] = await Promise.all([
          cn(),
          dn()
        ]);
        if (n.value = y, o.value = l, y.folderPath)
          try {
            i.value = await hn(y.folderPath);
          } catch {
            i.value = null;
          }
      } catch (y) {
        I.msg(String(y), "error");
      } finally {
        d.value = !1;
      }
    }, ze = async () => {
      try {
        o.value = await dn();
      } catch (y) {
        I.msg(String(y), "error");
      }
    }, Mt = async () => {
      u.value = !0;
      try {
        await Lt(n.value), await ze(), I.msg("壁纸设置已保存", "success");
      } catch (y) {
        I.msg(String(y), "error");
      } finally {
        u.value = !1;
      }
    }, Xn = async () => {
      const y = await Ut({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof y == "string") {
        n.value.fixedImagePath = y, n.value.mode = "fixed";
        try {
          await fl(y), await $t(), I.msg("已设置固定壁纸", "success");
        } catch (l) {
          I.msg(String(l), "error");
        }
      }
    }, eo = async () => {
      const y = await Ut({ multiple: !1, directory: !0 });
      typeof y == "string" && (n.value.folderPath = y, n.value.mode = "folder", await Et());
    }, Et = async () => {
      if (!n.value.folderPath) {
        I.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        i.value = await hn(n.value.folderPath), i.value.count === 0 ? I.msg("文件夹中没有可用图片", "warning") : I.msg(te.value, "success");
      } catch (y) {
        I.msg(String(y), "error");
      }
    }, to = async () => {
      h.value = !0;
      try {
        await Lt(n.value), await pl(), await ze(), I.msg("壁纸已切换", "success");
      } catch (y) {
        I.msg(String(y), "error");
      } finally {
        h.value = !1;
      }
    }, ft = async (y) => {
      n.value.fitMode = y, v.value = !0;
      try {
        await vl(y), await ze(), n.value = await cn(), I.msg("适配模式已应用", "success");
      } catch (l) {
        I.msg(String(l), "error");
      } finally {
        v.value = !1;
      }
    }, no = async () => {
      if (!o.value?.currentPath) {
        I.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await Mt();
    }, oo = async () => {
      g.value = !0;
      try {
        await ml(), await ze(), I.msg("缓存已清理", "success");
      } catch (y) {
        I.msg(String(y), "error");
      } finally {
        g.value = !1;
      }
    }, so = async () => {
      w.value = !0;
      try {
        await _l();
      } catch (y) {
        I.msg(String(y), "error");
      } finally {
        w.value = !1;
      }
    }, Ft = async () => {
      await t.close();
    }, io = (y) => y < 1024 ? `${y} B` : y < 1024 * 1024 ? `${(y / 1024).toFixed(1)} KB` : y < 1024 * 1024 * 1024 ? `${(y / 1024 / 1024).toFixed(1)} MB` : `${(y / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return $e(async () => {
      await $t(), await ht();
    }), mn(() => {
    }), (y, l) => (b(), z("main", Ml, [
      a("header", El, [
        s(T) === "switcher" ? (b(), z("div", Fl, [
          c(s(yt), { size: 18 }),
          l[40] || (l[40] = a(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ])) : (b(), z("div", Al, [
          a("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: l[0] || (l[0] = //@ts-ignore
            (...f) => s(Fe) && s(Fe)(...f))
          }, [
            c(s(Wl), { size: 20 })
          ]),
          l[41] || (l[41] = a(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ])),
        s(T) === "switcher" ? (b(), z("div", Dl, [
          a("button", {
            type: "button",
            class: "icon-btn online-entry-btn",
            title: "打开 Wallhaven 壁纸",
            onClick: l[1] || (l[1] = //@ts-ignore
            (...f) => s(he) && s(he)(...f))
          }, [
            c(s(Tl), { size: 18 })
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: Ft
          }, [
            c(s(Ze), { size: 20 })
          ])
        ])) : (b(), z("div", Rl, [
          a("div", Hl, [
            a(
              "div",
              {
                class: W(["seg-tab", { active: s(x) === "hot", disabled: s(p) }]),
                role: "tab",
                tabindex: "0",
                onClick: l[2] || (l[2] = (f) => !s(p) && s(pe)("hot")),
                onKeydown: l[3] || (l[3] = pt(ye((f) => !s(p) && s(pe)("hot"), ["prevent"]), ["enter"]))
              },
              " 热门 ",
              34
              /* CLASS, NEED_HYDRATION */
            ),
            a(
              "div",
              {
                class: W(["seg-tab", { active: s(x) === "toplist", disabled: s(p) }]),
                role: "tab",
                tabindex: "0",
                onClick: l[4] || (l[4] = (f) => !s(p) && s(pe)("toplist")),
                onKeydown: l[5] || (l[5] = pt(ye((f) => !s(p) && s(pe)("toplist"), ["prevent"]), ["enter"]))
              },
              " 排行榜 ",
              34
              /* CLASS, NEED_HYDRATION */
            )
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: Ft
          }, [
            c(s(Ze), { size: 20 })
          ])
        ]))
      ]),
      s(o) && !s(o).supported ? (b(), z("section", Vl, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : V("v-if", !0),
      s(T) === "switcher" ? (b(), z(
        "div",
        {
          key: 1,
          class: W(["content", { dimmed: s(d) }])
        },
        [
          a("section", Ul, [
            a("div", Bl, [
              s(Ue) ? (b(), z("img", {
                key: 0,
                src: s(Ue),
                alt: "当前壁纸预览"
              }, null, 8, Gl)) : (b(), z("div", Zl, [
                c(s(yt), { size: 42 }),
                l[42] || (l[42] = a(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            a("div", Kl, [
              a("div", ql, [
                l[43] || (l[43] = a(
                  "span",
                  null,
                  "来源：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  N(s(k)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Jl, [
                l[44] || (l[44] = a(
                  "span",
                  null,
                  "分辨率：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  N(s(Nt)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Ql, [
                l[45] || (l[45] = a(
                  "span",
                  null,
                  "下次切换：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  N(s(P)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Yl, [
                a("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(h),
                  onClick: to
                }, [
                  c(s(Il), {
                    theme: "outline",
                    size: 14
                  }),
                  M(
                    " " + N(s(h) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, Xl),
                a("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: no
                }, [
                  c(s(jl), {
                    theme: "outline",
                    size: 14
                  }),
                  l[46] || (l[46] = M(" 设为固定 "))
                ])
              ])
            ])
          ]),
          a("section", ea, [
            a("div", ta, [
              l[47] || (l[47] = a(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              a("div", na, [
                a(
                  "button",
                  {
                    type: "button",
                    class: W({ active: s(n).mode === "fixed" }),
                    onClick: l[6] || (l[6] = (f) => s(n).mode = "fixed")
                  },
                  " 固定图片 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: W({ active: s(n).mode === "folder" }),
                    onClick: l[7] || (l[7] = (f) => s(n).mode = "folder")
                  },
                  " 本地文件夹 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: W({ active: s(n).mode === "wallhaven" }),
                    onClick: l[8] || (l[8] = (f) => s(n).mode = "wallhaven")
                  },
                  " Wallhaven 在线 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", oa, [
              l[49] || (l[49] = a(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              J(a(
                "input",
                {
                  "onUpdate:modelValue": l[9] || (l[9] = (f) => s(n).fixedImagePath = f),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers\\city.png",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Be, s(n).fixedImagePath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Xn
              }, [
                c(s(yt), { size: 16 }),
                l[48] || (l[48] = M(" 选择图片 "))
              ])
            ]),
            a("div", sa, [
              l[52] || (l[52] = a(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              J(a(
                "input",
                {
                  "onUpdate:modelValue": l[10] || (l[10] = (f) => s(n).folderPath = f),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Be, s(n).folderPath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: eo
              }, [
                c(s(fn), { size: 16 }),
                l[50] || (l[50] = M(" 选择 "))
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Et
              }, [
                c(s(pn), { size: 16 }),
                l[51] || (l[51] = M(" 扫描 "))
              ])
            ]),
            a(
              "div",
              ia,
              N(s(te)),
              1
              /* TEXT */
            ),
            a("div", la, [
              l[54] || (l[54] = a(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              l[55] || (l[55] = a(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              a("div", aa, [
                a(
                  "button",
                  {
                    type: "button",
                    class: W({ active: s(n).wallhavenSource === "hot" }),
                    onClick: l[11] || (l[11] = (f) => s(n).wallhavenSource = "hot")
                  },
                  " 热门 Hot ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: W({ active: s(n).wallhavenSource === "toplist" }),
                    onClick: l[12] || (l[12] = (f) => s(n).wallhavenSource = "toplist")
                  },
                  " 排行榜 Toplist ",
                  2
                  /* CLASS */
                )
              ]),
              a("button", {
                type: "button",
                class: "tool-btn grid-open",
                onClick: l[13] || (l[13] = //@ts-ignore
                (...f) => s(he) && s(he)(...f))
              }, [
                c(s(vn), { size: 16 }),
                l[53] || (l[53] = M(" 打开在线网格 "))
              ])
            ]),
            a("div", ra, [
              l[56] || (l[56] = a(
                "span",
                null,
                "屏幕匹配",
                -1
                /* HOISTED */
              )),
              a(
                "strong",
                null,
                N(s(We)),
                1
                /* TEXT */
              )
            ])
          ]),
          a("section", ua, [
            a("div", ca, [
              l[61] || (l[61] = a(
                "span",
                { class: "row-label" },
                "切换规则",
                -1
                /* HOISTED */
              )),
              a("label", da, [
                l[57] || (l[57] = M(" 启用定时切换 ")),
                J(a(
                  "input",
                  {
                    "onUpdate:modelValue": l[14] || (l[14] = (f) => s(n).scheduleEnabled = f),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [At, s(n).scheduleEnabled]
                ]),
                l[58] || (l[58] = a(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                ))
              ]),
              a("label", ha, [
                l[59] || (l[59] = M(" 每 ")),
                J(a(
                  "input",
                  {
                    "onUpdate:modelValue": l[15] || (l[15] = (f) => s(n).intervalMinutes = f),
                    type: "number",
                    min: "1",
                    max: "1440"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [
                    Be,
                    s(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                l[60] || (l[60] = M(" 分钟 "))
              ]),
              l[62] || (l[62] = a(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              a("div", fa, [
                a(
                  "button",
                  {
                    type: "button",
                    class: W({ active: s(n).order === "random" }),
                    onClick: l[16] || (l[16] = (f) => s(n).order = "random")
                  },
                  " 随机 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: W({ active: s(n).order === "sequential" }),
                    onClick: l[17] || (l[17] = (f) => s(n).order = "sequential")
                  },
                  " 顺序 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", pa, [
              l[64] || (l[64] = a(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              a("div", va, [
                a("button", {
                  type: "button",
                  class: W({ active: s(n).fitMode === "fillCrop" }),
                  disabled: s(v),
                  onClick: l[18] || (l[18] = (f) => ft("fillCrop"))
                }, " 填充裁切 ", 10, ga),
                a("button", {
                  type: "button",
                  class: W({ active: s(n).fitMode === "fit" }),
                  disabled: s(v),
                  onClick: l[19] || (l[19] = (f) => ft("fit"))
                }, " 适应 ", 10, wa),
                a("button", {
                  type: "button",
                  class: W({ active: s(n).fitMode === "center" }),
                  disabled: s(v),
                  onClick: l[20] || (l[20] = (f) => ft("center"))
                }, " 居中 ", 10, ya)
              ]),
              a("label", ma, [
                J(a(
                  "input",
                  {
                    "onUpdate:modelValue": l[21] || (l[21] = (f) => s(n).autoRestore = f),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [At, s(n).autoRestore]
                ]),
                l[63] || (l[63] = M(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          a("footer", ba, [
            a("div", _a, [
              l[65] || (l[65] = a(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              l[66] || (l[66] = a(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              a(
                "span",
                null,
                N(s(E)),
                1
                /* TEXT */
              )
            ]),
            a("div", ka, [
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(g),
                onClick: oo
              }, [
                c(s(Ol), { size: 16 }),
                M(
                  " " + N(s(g) ? "清理中" : "清理缓存"),
                  1
                  /* TEXT */
                )
              ], 8, Ca),
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(w),
                onClick: so
              }, [
                c(s(fn), { size: 16 }),
                M(
                  " " + N(s(w) ? "打开中" : "打开缓存"),
                  1
                  /* TEXT */
                )
              ], 8, La),
              a("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(u),
                onClick: Mt
              }, [
                c(s($l), { size: 17 }),
                M(
                  " " + N(s(u) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, Sa)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (b(), z("div", xa, [
        a("section", Wa, [
          a("div", za, [
            J(a(
              "input",
              {
                "onUpdate:modelValue": l[22] || (l[22] = (f) => wn(S) ? S.value = f : null),
                type: "text",
                placeholder: "搜索关键词",
                onKeydown: l[23] || (l[23] = pt(
                  //@ts-ignore
                  (...f) => s(ee) && s(ee)(...f),
                  ["enter"]
                ))
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [Be, s(S)]
            ]),
            c(s(vn), {
              size: 16,
              class: "search-icon"
            }),
            s(S) ? (b(), z("button", {
              key: 0,
              type: "button",
              class: "clear-btn",
              title: "清空",
              onClick: l[24] || (l[24] = (f) => S.value = "")
            }, [
              c(s(Ze), { size: 18 })
            ])) : V("v-if", !0)
          ]),
          a("div", Oa, [
            a("button", {
              type: "button",
              class: W({ active: s(B) === "general" }),
              disabled: s(p),
              onClick: l[25] || (l[25] = (f) => s(ve)("general"))
            }, " 通用 ", 10, Pa),
            a("button", {
              type: "button",
              class: W({ active: s(B) === "anime" }),
              disabled: s(p),
              onClick: l[26] || (l[26] = (f) => s(ve)("anime"))
            }, " 动漫 ", 10, Ia),
            a("button", {
              type: "button",
              class: W({ active: s(B) === "people" }),
              disabled: s(p),
              onClick: l[27] || (l[27] = (f) => s(ve)("people"))
            }, " 人物 ", 10, Ta),
            a("button", {
              type: "button",
              class: W({ active: s(B) === "nature" }),
              disabled: s(p),
              onClick: l[28] || (l[28] = (f) => s(ve)("nature"))
            }, " 自然 ", 10, ja)
          ]),
          a("div", Na, [
            a(
              "span",
              null,
              "自动匹配 " + N(s(We)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "refresh-btn wallhaven-refresh",
              title: "刷新",
              onClick: l[29] || (l[29] = //@ts-ignore
              (...f) => s(ee) && s(ee)(...f))
            }, [
              c(s(pn), {
                size: 14,
                class: W({ spinning: s(p) })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        a("section", $a, [
          s(p) && s(X).length === 0 ? (b(), z("div", Ma, "正在加载 Wallhaven 壁纸...")) : s(_) ? (b(), z("div", Ea, [
            a(
              "span",
              null,
              N(s(_)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              onClick: l[30] || (l[30] = //@ts-ignore
              (...f) => s(ee) && s(ee)(...f))
            }, "重试")
          ])) : s(X).length === 0 ? (b(), z("div", Fa, "暂无可用壁纸")) : (b(), z("div", Aa, [
            (b(!0), z(
              xt,
              null,
              po(s(X), (f) => (b(), z("article", {
                key: f.id,
                class: "wallpaper-card"
              }, [
                a("button", {
                  type: "button",
                  class: "thumb",
                  onClick: (ge) => s(Ae)(f)
                }, [
                  s(Me).has(f.id) ? V("v-if", !0) : (b(), z("div", Ra)),
                  a("img", {
                    ref_for: !0,
                    ref: (ge) => s(dt)(f, ge),
                    alt: f.resolution,
                    loading: "lazy",
                    onLoad: (ge) => s(ct)(f.id)
                  }, null, 40, Ha),
                  a(
                    "span",
                    null,
                    N(f.resolution),
                    1
                    /* TEXT */
                  )
                ], 8, Da),
                a("div", {
                  class: "card-actions",
                  onClick: l[31] || (l[31] = ye(() => {
                  }, ["stop"]))
                }, [
                  a("button", {
                    type: "button",
                    title: "预览",
                    onClick: (ge) => s(Ae)(f)
                  }, [
                    c(s(Nl), { size: 16 }),
                    l[67] || (l[67] = M(" 预览 "))
                  ], 8, Va),
                  a("button", {
                    type: "button",
                    title: "设为壁纸",
                    disabled: s(O).has(f.id),
                    onClick: (ge) => s(xe)(f)
                  }, [
                    c(s(zl), { size: 16 }),
                    M(
                      " " + N(s(O).has(f.id) ? "设置中" : "设为"),
                      1
                      /* TEXT */
                    )
                  ], 8, Ua),
                  a("button", {
                    type: "button",
                    title: "下载",
                    disabled: s(O).has(f.id),
                    onClick: (ge) => s(Re)(f)
                  }, [
                    c(s(Pl), { size: 16 }),
                    l[68] || (l[68] = M(" 下载 "))
                  ], 8, Ba)
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        a("footer", Ga, [
          a(
            "span",
            null,
            "第 " + N(s(j)) + " 页",
            1
            /* TEXT */
          ),
          a(
            "span",
            Za,
            "来源：" + N(s(Ee)) + " · SFW",
            1
            /* TEXT */
          ),
          a("div", Ka, [
            a("button", {
              type: "button",
              disabled: s(j) <= 1 || s(p),
              onClick: l[32] || (l[32] = //@ts-ignore
              (...f) => s(He) && s(He)(...f))
            }, "上一页", 8, qa),
            a("button", {
              type: "button",
              disabled: s(j) >= s(R) || s(p),
              onClick: l[33] || (l[33] = //@ts-ignore
              (...f) => s(Ve) && s(Ve)(...f))
            }, "下一页", 8, Ja)
          ])
        ])
      ])),
      s($) ? (b(), z("div", {
        key: 3,
        class: "preview-modal",
        onClick: l[39] || (l[39] = ye(
          //@ts-ignore
          (...f) => s(fe) && s(fe)(...f),
          ["self"]
        ))
      }, [
        a("div", Qa, [
          a("header", null, [
            a(
              "strong",
              null,
              N(s($).resolution),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "flat-icon",
              onClick: l[34] || (l[34] = //@ts-ignore
              (...f) => s(fe) && s(fe)(...f))
            }, [
              c(s(Ze), { size: 23 })
            ])
          ]),
          a("div", Ya, [
            s(q) ? (b(), z("div", Xa, l[69] || (l[69] = [
              a(
                "span",
                null,
                "加载预览...",
                -1
                /* HOISTED */
              )
            ]))) : V("v-if", !0),
            s(de) ? (b(), z("div", er, "预览加载失败")) : V("v-if", !0),
            a("img", {
              class: W({ ready: !s(q) && !s(de) }),
              src: s($).path,
              alt: "壁纸预览",
              onLoad: l[35] || (l[35] = //@ts-ignore
              (...f) => s(Q) && s(Q)(...f)),
              onError: l[36] || (l[36] = //@ts-ignore
              (...f) => s(De) && s(De)(...f))
            }, null, 42, tr)
          ]),
          a("footer", null, [
            a("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(O).has(s($).id),
              onClick: l[37] || (l[37] = (f) => s(Re)(s($)))
            }, " 下载缓存 ", 8, nr),
            a("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(O).has(s($).id),
              onClick: l[38] || (l[38] = (f) => s(xe)(s($)))
            }, N(s(O).has(s($).id) ? "设置中" : "设为壁纸"), 9, or)
          ])
        ])
      ])) : V("v-if", !0)
    ]));
  }
}), ir = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, lr = /* @__PURE__ */ ir(sr, [["__scopeId", "data-v-630b172b"]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr
}, Symbol.toStringTag, { value: "Module" }));
export {
  ur as activate
};
