import { getCurrentInstance as ye, inject as ie, ref as S, computed as b, unref as s, readonly as no, getCurrentScope as oo, onScopeDispose as so, onMounted as Me, nextTick as hn, watch as st, isRef as fn, warn as io, provide as lo, defineComponent as A, createElementBlock as O, openBlock as y, mergeProps as ao, renderSlot as be, createElementVNode as a, normalizeClass as z, createVNode as c, Transition as Ct, withCtx as le, withDirectives as Y, normalizeStyle as qe, createTextVNode as E, toDisplayString as M, vShow as Je, shallowReactive as ro, createBlock as te, createCommentVNode as H, resolveDynamicComponent as pn, Fragment as Lt, withModifiers as me, isVNode as Ie, render as Qe, onUnmounted as vn, withKeys as ht, vModelText as Ve, vModelCheckbox as $t, renderList as uo } from "vue";
const nr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => er)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function co(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function ho(e, t, n, o, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ge;
const B = "__TAURI_TO_IPC_KEY__";
function fo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function po(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class vo {
  get rid() {
    return co(this, Ge, "f");
  }
  constructor(t) {
    Ge.set(this, void 0), ho(this, Ge, t);
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
Ge = /* @__PURE__ */ new WeakMap();
class gn {
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
    return new We(this.width * t, this.height * t);
  }
  [B]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[B]();
  }
}
class We {
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
    return new gn(this.width / t, this.height / t);
  }
  [B]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[B]();
  }
}
class we {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof gn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof We ? this.size : this.size.toPhysical(t);
  }
  [B]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[B]();
  }
}
class wn {
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
    return new oe(this.x * t, this.y * t);
  }
  [B]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[B]();
  }
}
class oe {
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
    return new wn(this.x / t, this.y / t);
  }
  [B]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[B]();
  }
}
class Be {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof wn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof oe ? this.position : this.position.toPhysical(t);
  }
  [B]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[B]();
  }
}
var R;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(R || (R = {}));
async function mn(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ye(e, t, n) {
  var o;
  const i = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: i,
    handler: fo(t)
  }).then((d) => async () => mn(e, d));
}
async function go(e, t, n) {
  return Ye(e, (o) => {
    mn(e, o.id), t(o);
  }, n);
}
async function wo(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function mo(e, t, n) {
  await r("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Pe extends vo {
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
      rgba: Xe(t),
      width: n,
      height: o
    }).then((i) => new Pe(i));
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
      bytes: Xe(t)
    }).then((n) => new Pe(n));
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
    return r("plugin:image|from_path", { path: t }).then((n) => new Pe(n));
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
function Xe(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Pe ? e.rid : e;
}
var wt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(wt || (wt = {}));
class yo {
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
var Et;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Et || (Et = {}));
function yn() {
  return new bn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function ft() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new bn(t, {
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
    return (n = (await ft()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return yn();
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
    } : go(t, n, {
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
    return wo(t, n);
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
      for (const i of this.listeners[n] || [])
        i({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return mo(t, n, o);
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
    }).then((t) => new oe(t));
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
    }).then((t) => new oe(t));
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
    }).then((t) => new We(t));
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
    }).then((t) => new We(t));
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
    return t && (t === wt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), r("plugin:window|request_user_attention", {
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
      value: t instanceof Be ? t : new Be(t)
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
      value: t instanceof Be ? t : new Be(t)
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
    return this.listen(R.WINDOW_RESIZED, (n) => {
      n.payload = new We(n.payload), t(n);
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
    return this.listen(R.WINDOW_MOVED, (n) => {
      n.payload = new oe(n.payload), t(n);
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
    return this.listen(R.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new yo(n);
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
    const n = await this.listen(R.DRAG_ENTER, (u) => {
      t({
        ...u,
        payload: {
          type: "enter",
          paths: u.payload.paths,
          position: new oe(u.payload.position)
        }
      });
    }), o = await this.listen(R.DRAG_OVER, (u) => {
      t({
        ...u,
        payload: {
          type: "over",
          position: new oe(u.payload.position)
        }
      });
    }), i = await this.listen(R.DRAG_DROP, (u) => {
      t({
        ...u,
        payload: {
          type: "drop",
          paths: u.payload.paths,
          position: new oe(u.payload.position)
        }
      });
    }), d = await this.listen(R.DRAG_LEAVE, (u) => {
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
    const n = await this.listen(R.WINDOW_FOCUS, (i) => {
      t({ ...i, payload: !0 });
    }), o = await this.listen(R.WINDOW_BLUR, (i) => {
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
    return this.listen(R.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(R.WINDOW_THEME_CHANGED, t);
  }
}
var Ft;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ft || (Ft = {}));
var At;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(At || (At = {}));
var Dt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Dt || (Dt = {}));
async function Rt(e = {}) {
  return typeof e == "object" && Object.freeze(e), await r("plugin:dialog|open", { options: e });
}
const _n = Symbol(), Ze = "el", bo = "is-", se = (e, t, n, o, i) => {
  let d = `${e}-${t}`;
  return n && (d += `-${n}`), o && (d += `__${o}`), i && (d += `--${i}`), d;
}, kn = Symbol("namespaceContextKey"), _o = (e) => {
  const t = e || (ye() ? ie(kn, S(Ze)) : S(Ze));
  return b(() => s(t) || Ze);
}, St = (e, t) => {
  const n = _o(t);
  return {
    namespace: n,
    b: (g = "") => se(n.value, e, g, "", ""),
    e: (g) => g ? se(n.value, e, "", g, "") : "",
    m: (g) => g ? se(n.value, e, "", "", g) : "",
    be: (g, m) => g && m ? se(n.value, e, g, m, "") : "",
    em: (g, m) => g && m ? se(n.value, e, "", g, m) : "",
    bm: (g, m) => g && m ? se(n.value, e, g, "", m) : "",
    bem: (g, m, x) => g && m && x ? se(n.value, e, g, m, x) : "",
    is: (g, ...m) => {
      const x = m.length >= 1 ? m[0] : !0;
      return g && x ? `${bo}${g}` : "";
    },
    cssVar: (g) => {
      const m = {};
      for (const x in g)
        g[x] && (m[`--${n.value}-${x}`] = g[x]);
      return m;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const m = {};
      for (const x in g)
        g[x] && (m[`--${n.value}-${e}-${x}`] = g[x]);
      return m;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ko = Object.prototype.hasOwnProperty, Ht = (e, t) => ko.call(e, t), Te = (e) => typeof e == "function", ae = (e) => typeof e == "string", Cn = (e) => e !== null && typeof e == "object";
var Co = typeof global == "object" && global && global.Object === Object && global, Lo = typeof self == "object" && self && self.Object === Object && self, xt = Co || Lo || Function("return this")(), _e = xt.Symbol, Ln = Object.prototype, So = Ln.hasOwnProperty, xo = Ln.toString, Oe = _e ? _e.toStringTag : void 0;
function zo(e) {
  var t = So.call(e, Oe), n = e[Oe];
  try {
    e[Oe] = void 0;
    var o = !0;
  } catch {
  }
  var i = xo.call(e);
  return o && (t ? e[Oe] = n : delete e[Oe]), i;
}
var Oo = Object.prototype, Wo = Oo.toString;
function Po(e) {
  return Wo.call(e);
}
var Io = "[object Null]", To = "[object Undefined]", Vt = _e ? _e.toStringTag : void 0;
function Sn(e) {
  return e == null ? e === void 0 ? To : Io : Vt && Vt in Object(e) ? zo(e) : Po(e);
}
function jo(e) {
  return e != null && typeof e == "object";
}
var Mo = "[object Symbol]";
function zt(e) {
  return typeof e == "symbol" || jo(e) && Sn(e) == Mo;
}
function No(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, i = Array(o); ++n < o; )
    i[n] = t(e[n], n, e);
  return i;
}
var Ot = Array.isArray, Bt = _e ? _e.prototype : void 0, Ut = Bt ? Bt.toString : void 0;
function xn(e) {
  if (typeof e == "string")
    return e;
  if (Ot(e))
    return No(e, xn) + "";
  if (zt(e))
    return Ut ? Ut.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function zn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $o = "[object AsyncFunction]", Eo = "[object Function]", Fo = "[object GeneratorFunction]", Ao = "[object Proxy]";
function Do(e) {
  if (!zn(e))
    return !1;
  var t = Sn(e);
  return t == Eo || t == Fo || t == $o || t == Ao;
}
var vt = xt["__core-js_shared__"], Gt = function() {
  var e = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ro(e) {
  return !!Gt && Gt in e;
}
var Ho = Function.prototype, Vo = Ho.toString;
function Bo(e) {
  if (e != null) {
    try {
      return Vo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Uo = /[\\^$.*+?()[\]{}|]/g, Go = /^\[object .+?Constructor\]$/, Zo = Function.prototype, Ko = Object.prototype, qo = Zo.toString, Jo = Ko.hasOwnProperty, Qo = RegExp(
  "^" + qo.call(Jo).replace(Uo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yo(e) {
  if (!zn(e) || Ro(e))
    return !1;
  var t = Do(e) ? Qo : Go;
  return t.test(Bo(e));
}
function Xo(e, t) {
  return e?.[t];
}
function On(e, t) {
  var n = Xo(e, t);
  return Yo(n) ? n : void 0;
}
function es(e, t) {
  return e === t || e !== e && t !== t;
}
var ts = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ns = /^\w*$/;
function os(e, t) {
  if (Ot(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || zt(e) ? !0 : ns.test(e) || !ts.test(e) || t != null && e in Object(t);
}
var je = On(Object, "create");
function ss() {
  this.__data__ = je ? je(null) : {}, this.size = 0;
}
function is(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ls = "__lodash_hash_undefined__", as = Object.prototype, rs = as.hasOwnProperty;
function us(e) {
  var t = this.__data__;
  if (je) {
    var n = t[e];
    return n === ls ? void 0 : n;
  }
  return rs.call(t, e) ? t[e] : void 0;
}
var cs = Object.prototype, ds = cs.hasOwnProperty;
function hs(e) {
  var t = this.__data__;
  return je ? t[e] !== void 0 : ds.call(t, e);
}
var fs = "__lodash_hash_undefined__";
function ps(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = je && t === void 0 ? fs : t, this;
}
function re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
re.prototype.clear = ss;
re.prototype.delete = is;
re.prototype.get = us;
re.prototype.has = hs;
re.prototype.set = ps;
function vs() {
  this.__data__ = [], this.size = 0;
}
function it(e, t) {
  for (var n = e.length; n--; )
    if (es(e[n][0], t))
      return n;
  return -1;
}
var gs = Array.prototype, ws = gs.splice;
function ms(e) {
  var t = this.__data__, n = it(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : ws.call(t, n, 1), --this.size, !0;
}
function ys(e) {
  var t = this.__data__, n = it(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bs(e) {
  return it(this.__data__, e) > -1;
}
function _s(e, t) {
  var n = this.__data__, o = it(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Le(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Le.prototype.clear = vs;
Le.prototype.delete = ms;
Le.prototype.get = ys;
Le.prototype.has = bs;
Le.prototype.set = _s;
var ks = On(xt, "Map");
function Cs() {
  this.size = 0, this.__data__ = {
    hash: new re(),
    map: new (ks || Le)(),
    string: new re()
  };
}
function Ls(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function lt(e, t) {
  var n = e.__data__;
  return Ls(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ss(e) {
  var t = lt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xs(e) {
  return lt(this, e).get(e);
}
function zs(e) {
  return lt(this, e).has(e);
}
function Os(e, t) {
  var n = lt(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ce.prototype.clear = Cs;
ce.prototype.delete = Ss;
ce.prototype.get = xs;
ce.prototype.has = zs;
ce.prototype.set = Os;
var Ws = "Expected a function";
function Wt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ws);
  var n = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], d = n.cache;
    if (d.has(i))
      return d.get(i);
    var u = e.apply(this, o);
    return n.cache = d.set(i, u) || d, u;
  };
  return n.cache = new (Wt.Cache || ce)(), n;
}
Wt.Cache = ce;
var Ps = 500;
function Is(e) {
  var t = Wt(e, function(o) {
    return n.size === Ps && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Ts = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, js = /\\(\\)?/g, Ms = Is(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ts, function(n, o, i, d) {
    t.push(i ? d.replace(js, "$1") : o || n);
  }), t;
});
function Ns(e) {
  return e == null ? "" : xn(e);
}
function $s(e, t) {
  return Ot(e) ? e : os(e, t) ? [e] : Ms(Ns(e));
}
function Es(e) {
  if (typeof e == "string" || zt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Fs(e, t) {
  t = $s(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Es(t[n++])];
  return n && n == o ? e : void 0;
}
function As(e, t, n) {
  var o = e == null ? void 0 : Fs(e, t);
  return o === void 0 ? n : o;
}
function Ds(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var i = e[t];
    o[i[0]] = i[1];
  }
  return o;
}
const Wn = (e) => e === void 0, Zt = (e) => typeof e == "boolean", ue = (e) => typeof e == "number", mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Rs = (e) => ae(e) ? !Number.isNaN(Number(e)) : !1;
var Kt;
const de = typeof window < "u", Hs = (e) => typeof e == "string", Vs = () => {
};
de && ((Kt = window?.navigator) != null && Kt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Pt(e) {
  return typeof e == "function" ? e() : s(e);
}
function Bs(e) {
  return e;
}
function It(e) {
  return oo() ? (so(e), !0) : !1;
}
function Us(e, t = !0) {
  ye() ? Me(e) : t ? e() : hn(e);
}
function Pn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, i = S(!1);
  let d = null;
  function u() {
    d && (clearTimeout(d), d = null);
  }
  function h() {
    i.value = !1, u();
  }
  function p(...v) {
    u(), i.value = !0, d = setTimeout(() => {
      i.value = !1, d = null, e(...v);
    }, Pt(t));
  }
  return o && (i.value = !0, de && p()), It(h), {
    isPending: no(i),
    start: p,
    stop: h
  };
}
function In(e) {
  var t;
  const n = Pt(e);
  return (t = n?.$el) != null ? t : n;
}
const Tn = de ? window : void 0;
function jn(...e) {
  let t, n, o, i;
  if (Hs(e[0]) || Array.isArray(e[0]) ? ([n, o, i] = e, t = Tn) : [t, n, o, i] = e, !t)
    return Vs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const d = [], u = () => {
    d.forEach((w) => w()), d.length = 0;
  }, h = (w, L, T, N) => (w.addEventListener(L, T, N), () => w.removeEventListener(L, T, N)), p = st(() => [In(t), Pt(i)], ([w, L]) => {
    u(), w && d.push(...n.flatMap((T) => o.map((N) => h(w, T, N, L))));
  }, { immediate: !0, flush: "post" }), v = () => {
    p(), u();
  };
  return It(v), v;
}
function Gs(e, t = !1) {
  const n = S(), o = () => n.value = !!e();
  return o(), Us(o, t), n;
}
const qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Jt = "__vueuse_ssr_handlers__";
qt[Jt] = qt[Jt] || {};
var Qt = Object.getOwnPropertySymbols, Zs = Object.prototype.hasOwnProperty, Ks = Object.prototype.propertyIsEnumerable, qs = (e, t) => {
  var n = {};
  for (var o in e)
    Zs.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Qt)
    for (var o of Qt(e))
      t.indexOf(o) < 0 && Ks.call(e, o) && (n[o] = e[o]);
  return n;
};
function Js(e, t, n = {}) {
  const o = n, { window: i = Tn } = o, d = qs(o, ["window"]);
  let u;
  const h = Gs(() => i && "ResizeObserver" in i), p = () => {
    u && (u.disconnect(), u = void 0);
  }, v = st(() => In(e), (L) => {
    p(), h.value && i && L && (u = new ResizeObserver(t), u.observe(L, d));
  }, { immediate: !0, flush: "post" }), w = () => {
    p(), v();
  };
  return It(w), {
    isSupported: h,
    stop: w
  };
}
var Yt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Yt || (Yt = {}));
var Qs = Object.defineProperty, Xt = Object.getOwnPropertySymbols, Ys = Object.prototype.hasOwnProperty, Xs = Object.prototype.propertyIsEnumerable, en = (e, t, n) => t in e ? Qs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ei = (e, t) => {
  for (var n in t || (t = {}))
    Ys.call(t, n) && en(e, n, t[n]);
  if (Xt)
    for (var n of Xt(t))
      Xs.call(t, n) && en(e, n, t[n]);
  return e;
};
const ti = {
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
ei({
  linear: Bs
}, ti);
const tn = {
  current: 0
}, nn = S(0), Mn = 2e3, on = Symbol("elZIndexContextKey"), Nn = Symbol("zIndexContextKey"), ni = (e) => {
  const t = ye() ? ie(on, tn) : tn, n = e || (ye() ? ie(Nn, void 0) : void 0), o = b(() => {
    const u = s(n);
    return ue(u) ? u : Mn;
  }), i = b(() => o.value + nn.value), d = () => (t.current++, nn.value = t.current, i.value);
  return !de && ie(on), {
    initialZIndex: o,
    currentZIndex: i,
    nextZIndex: d
  };
};
var oi = {
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
const si = (e) => (t, n) => ii(t, n, s(e)), ii = (e, t, n) => As(n, e, e).replace(/\{(\w+)\}/g, (o, i) => {
  var d;
  return `${(d = t?.[i]) != null ? d : `{${i}}`}`;
}), li = (e) => {
  const t = b(() => s(e).name), n = fn(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: si(e)
  };
}, $n = Symbol("localeContextKey"), ai = (e) => {
  const t = e || ie($n, S());
  return li(b(() => t.value || oi));
}, En = "__epPropKey", V = (e) => e, ri = (e) => Cn(e) && !!e[En], Fn = (e, t) => {
  if (!Cn(e) || ri(e))
    return e;
  const { values: n, required: o, default: i, type: d, validator: u } = e, p = {
    type: d,
    required: !!o,
    validator: n || u ? (v) => {
      let w = !1, L = [];
      if (n && (L = Array.from(n), Ht(e, "default") && L.push(i), w || (w = L.includes(v))), u && (w || (w = u(v))), !w && L.length > 0) {
        const T = [...new Set(L)].map((N) => JSON.stringify(N)).join(", ");
        io(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${T}], got value ${JSON.stringify(v)}.`);
      }
      return w;
    } : void 0,
    [En]: !0
  };
  return Ht(e, "default") && (p.default = i), p;
}, Se = (e) => Ds(Object.entries(e).map(([t, n]) => [
  t,
  Fn(n, t)
])), ui = ["", "default", "small", "large"], ci = Fn({
  type: String,
  values: ui,
  required: !1
}), di = Symbol("size"), hi = Symbol("emptyValuesContextKey"), fi = Se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Te(e) ? !e() : !e
  }
}), sn = (e) => Object.keys(e), et = S();
function An(e, t = void 0) {
  return ye() ? ie(_n, et) : et;
}
function Dn(e, t) {
  const n = An(), o = St(e, b(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || Ze;
  })), i = ai(b(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), d = ni(b(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || Mn;
  })), u = b(() => {
    var h;
    return s(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return Rn(b(() => s(n) || {})), {
    ns: o,
    locale: i,
    zIndex: d,
    size: u
  };
}
const Rn = (e, t, n = !1) => {
  var o;
  const i = !!ye(), d = i ? An() : void 0, u = (o = void 0) != null ? o : i ? lo : void 0;
  if (!u)
    return;
  const h = b(() => {
    const p = s(e);
    return d?.value ? pi(d.value, p) : p;
  });
  return u(_n, h), u($n, b(() => h.value.locale)), u(kn, b(() => h.value.namespace)), u(Nn, b(() => h.value.zIndex)), u(di, {
    size: b(() => h.value.size || "")
  }), u(hi, b(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !et.value) && (et.value = h.value), h;
}, pi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...sn(e), ...sn(t)])], o = {};
  for (const i of n)
    o[i] = t[i] !== void 0 ? t[i] : e[i];
  return o;
};
var at = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
};
function yt(e, t = "px") {
  if (!e)
    return "";
  if (ue(e) || Rs(e))
    return `${e}${t}`;
  if (ae(e))
    return e;
}
const Hn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Vn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), vi = Se({
  size: {
    type: V([Number, String])
  },
  color: {
    type: String
  }
}), gi = A({
  name: "ElIcon",
  inheritAttrs: !1
}), wi = /* @__PURE__ */ A({
  ...gi,
  props: vi,
  setup(e) {
    const t = e, n = St("icon"), o = b(() => {
      const { size: i, color: d } = t;
      return !i && !d ? {} : {
        fontSize: Wn(i) ? void 0 : yt(i),
        "--color": d
      };
    });
    return (i, d) => (y(), O("i", ao({
      class: s(n).b(),
      style: s(o)
    }, i.$attrs), [
      be(i.$slots, "default")
    ], 16));
  }
});
var mi = /* @__PURE__ */ at(wi, [["__file", "icon.vue"]]);
const tt = Hn(mi);
/*! Element Plus Icons Vue v2.3.1 */
var yi = /* @__PURE__ */ A({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (y(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), bi = yi, _i = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (y(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Bn = _i, ki = /* @__PURE__ */ A({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (y(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ci = ki, Li = /* @__PURE__ */ A({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (y(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Si = Li, xi = /* @__PURE__ */ A({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (y(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), zi = xi;
const Un = V([
  String,
  Object,
  Function
]), Oi = {
  Close: Bn
}, Wi = {
  Close: Bn
}, nt = {
  success: Si,
  warning: zi,
  error: bi,
  info: Ci
}, Pi = (e) => e, Ke = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ii = Se({
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
    type: V([String, Object, Array])
  },
  offset: {
    type: V(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ti = A({
  name: "ElBadge"
}), ji = /* @__PURE__ */ A({
  ...Ti,
  props: Ii,
  setup(e, { expose: t }) {
    const n = e, o = St("badge"), i = b(() => n.isDot ? "" : ue(n.value) && ue(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), d = b(() => {
      var u, h, p, v, w;
      return [
        {
          backgroundColor: n.color,
          marginRight: yt(-((h = (u = n.offset) == null ? void 0 : u[0]) != null ? h : 0)),
          marginTop: yt((v = (p = n.offset) == null ? void 0 : p[1]) != null ? v : 0)
        },
        (w = n.badgeStyle) != null ? w : {}
      ];
    });
    return t({
      content: i
    }), (u, h) => (y(), O("div", {
      class: z(s(o).b())
    }, [
      be(u.$slots, "default"),
      c(Ct, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: le(() => [
          Y(a("sup", {
            class: z([
              s(o).e("content"),
              s(o).em("content", u.type),
              s(o).is("fixed", !!u.$slots.default),
              s(o).is("dot", u.isDot),
              s(o).is("hide-zero", !u.showZero && n.value === 0),
              u.badgeClass
            ]),
            style: qe(s(d))
          }, [
            be(u.$slots, "content", { value: s(i) }, () => [
              E(M(s(i)), 1)
            ])
          ], 6), [
            [Je, !u.hidden && (s(i) || u.isDot || u.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Mi = /* @__PURE__ */ at(ji, [["__file", "badge.vue"]]);
const Ni = Hn(Mi), $i = Se({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: V(Object)
  },
  size: ci,
  button: {
    type: V(Object)
  },
  experimentalFeatures: {
    type: V(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: V(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...fi
}), G = {};
A({
  name: "ElConfigProvider",
  props: $i,
  setup(e, { slots: t }) {
    st(() => e.message, (o) => {
      Object.assign(G, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Rn(e);
    return () => be(t, "default", { config: n?.value });
  }
});
const Gn = ["success", "info", "warning", "error"], F = Pi({
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
  appendTo: de ? document.body : void 0
}), Ei = Se({
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
    type: Un,
    default: F.icon
  },
  id: {
    type: String,
    default: F.id
  },
  message: {
    type: V([
      String,
      Object,
      Function
    ]),
    default: F.message
  },
  onClose: {
    type: V(Function),
    default: F.onClose
  },
  showClose: {
    type: Boolean,
    default: F.showClose
  },
  type: {
    type: String,
    values: Gn,
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
}), Fi = {
  destroy: () => !0
}, Z = ro([]), Ai = (e) => {
  const t = Z.findIndex((i) => i.id === e), n = Z[t];
  let o;
  return t > 0 && (o = Z[t - 1]), { current: n, prev: o };
}, Di = (e) => {
  const { prev: t } = Ai(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Ri = (e, t) => Z.findIndex((o) => o.id === e) > 0 ? 16 : t, Hi = A({
  name: "ElMessage"
}), Vi = /* @__PURE__ */ A({
  ...Hi,
  props: Ei,
  emits: Fi,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Wi, { ns: i, zIndex: d } = Dn("message"), { currentZIndex: u, nextZIndex: h } = d, p = S(), v = S(!1), w = S(0);
    let L;
    const T = b(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), N = b(() => {
      const I = n.type;
      return { [i.bm("icon", I)]: I && nt[I] };
    }), P = b(() => n.icon || nt[n.type] || ""), g = b(() => Di(n.id)), m = b(() => Ri(n.id, n.offset) + g.value), x = b(() => w.value + m.value), K = b(() => ({
      top: `${m.value}px`,
      zIndex: u.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: L } = Pn(() => {
        q();
      }, n.duration));
    }
    function U() {
      L?.();
    }
    function q() {
      v.value = !1;
    }
    function J({ code: I }) {
      I === Ke.esc && q();
    }
    return Me(() => {
      _(), h(), v.value = !0;
    }), st(() => n.repeatNum, () => {
      U(), _();
    }), jn(document, "keydown", J), Js(p, () => {
      w.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: x,
      close: q
    }), (I, Ne) => (y(), te(Ct, {
      name: s(i).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (he) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: le(() => [
        Y(a("div", {
          id: I.id,
          ref_key: "messageRef",
          ref: p,
          class: z([
            s(i).b(),
            { [s(i).m(I.type)]: I.type },
            s(i).is("center", I.center),
            s(i).is("closable", I.showClose),
            s(i).is("plain", I.plain),
            I.customClass
          ]),
          style: qe(s(K)),
          role: "alert",
          onMouseenter: U,
          onMouseleave: _
        }, [
          I.repeatNum > 1 ? (y(), te(s(Ni), {
            key: 0,
            value: I.repeatNum,
            type: s(T),
            class: z(s(i).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          s(P) ? (y(), te(s(tt), {
            key: 1,
            class: z([s(i).e("icon"), s(N)])
          }, {
            default: le(() => [
              (y(), te(pn(s(P))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          be(I.$slots, "default", {}, () => [
            I.dangerouslyUseHTMLString ? (y(), O(Lt, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: z(s(i).e("content")),
                innerHTML: I.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (y(), O("p", {
              key: 0,
              class: z(s(i).e("content"))
            }, M(I.message), 3))
          ]),
          I.showClose ? (y(), te(s(tt), {
            key: 2,
            class: z(s(i).e("closeBtn")),
            onClick: me(q, ["stop"])
          }, {
            default: le(() => [
              c(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [Je, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Bi = /* @__PURE__ */ at(Vi, [["__file", "message.vue"]]);
let Ui = 1;
const Zn = (e) => {
  const t = !e || ae(e) || Ie(e) || Te(e) ? { message: e } : e, n = {
    ...F,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ae(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    mt(o) || (o = document.body), n.appendTo = o;
  }
  return Zt(G.grouping) && !n.grouping && (n.grouping = G.grouping), ue(G.duration) && n.duration === 3e3 && (n.duration = G.duration), ue(G.offset) && n.offset === 16 && (n.offset = G.offset), Zt(G.showClose) && !n.showClose && (n.showClose = G.showClose), n;
}, Gi = (e) => {
  const t = Z.indexOf(e);
  if (t === -1)
    return;
  Z.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Zi = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Ui++}`, i = t.onClose, d = document.createElement("div"), u = {
    ...t,
    id: o,
    onClose: () => {
      i?.(), Gi(w);
    },
    onDestroy: () => {
      Qe(null, d);
    }
  }, h = c(Bi, u, Te(u.message) || Ie(u.message) ? {
    default: Te(u.message) ? u.message : () => u.message
  } : null);
  h.appContext = n || ke._context, Qe(h, d), e.appendChild(d.firstElementChild);
  const p = h.component, w = {
    id: o,
    vnode: h,
    vm: p,
    handler: {
      close: () => {
        p.exposed.visible.value = !1;
      }
    },
    props: h.component.props
  };
  return w;
}, ke = (e = {}, t) => {
  if (!de)
    return { close: () => {
    } };
  const n = Zn(e);
  if (n.grouping && Z.length) {
    const i = Z.find(({ vnode: d }) => {
      var u;
      return ((u = d.props) == null ? void 0 : u.message) === n.message;
    });
    if (i)
      return i.props.repeatNum += 1, i.props.type = n.type, i.handler;
  }
  if (ue(G.max) && Z.length >= G.max)
    return { close: () => {
    } };
  const o = Zi(n, t);
  return Z.push(o), o.handler;
};
Gn.forEach((e) => {
  ke[e] = (t = {}, n) => {
    const o = Zn(t);
    return ke({ ...o, type: e }, n);
  };
});
function Ki(e) {
  for (const t of Z)
    (!e || e === t.props.type) && t.handler.close();
}
ke.closeAll = Ki;
ke._context = null;
const qi = Vn(ke, "$message"), Kn = [
  "success",
  "info",
  "warning",
  "error"
], Ji = Se({
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
    type: V([
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
    type: V(Function),
    default: () => {
    }
  },
  onClose: {
    type: V(Function),
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
    values: [...Kn, ""],
    default: ""
  },
  zIndex: Number
}), Qi = {
  destroy: () => !0
}, Yi = A({
  name: "ElNotification"
}), Xi = /* @__PURE__ */ A({
  ...Yi,
  props: Ji,
  emits: Qi,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: i } = Dn("notification"), { nextZIndex: d, currentZIndex: u } = i, { Close: h } = Oi, p = S(!1);
    let v;
    const w = b(() => {
      const _ = n.type;
      return _ && nt[n.type] ? o.m(_) : "";
    }), L = b(() => n.type && nt[n.type] || n.icon), T = b(() => n.position.endsWith("right") ? "right" : "left"), N = b(() => n.position.startsWith("top") ? "top" : "bottom"), P = b(() => {
      var _;
      return {
        [N.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : u.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: v } = Pn(() => {
        p.value && x();
      }, n.duration));
    }
    function m() {
      v?.();
    }
    function x() {
      p.value = !1;
    }
    function K({ code: _ }) {
      _ === Ke.delete || _ === Ke.backspace ? m() : _ === Ke.esc ? p.value && x() : g();
    }
    return Me(() => {
      g(), d(), p.value = !0;
    }), jn(document, "keydown", K), t({
      visible: p,
      close: x
    }), (_, U) => (y(), te(Ct, {
      name: s(o).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (q) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: le(() => [
        Y(a("div", {
          id: _.id,
          class: z([s(o).b(), _.customClass, s(T)]),
          style: qe(s(P)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: g,
          onClick: _.onClick
        }, [
          s(L) ? (y(), te(s(tt), {
            key: 0,
            class: z([s(o).e("icon"), s(w)])
          }, {
            default: le(() => [
              (y(), te(pn(s(L))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          a("div", {
            class: z(s(o).e("group"))
          }, [
            a("h2", {
              class: z(s(o).e("title")),
              textContent: M(_.title)
            }, null, 10, ["textContent"]),
            Y(a("div", {
              class: z(s(o).e("content")),
              style: qe(_.title ? void 0 : { margin: 0 })
            }, [
              be(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (y(), O(Lt, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (y(), O("p", { key: 0 }, M(_.message), 1))
              ])
            ], 6), [
              [Je, _.message]
            ]),
            _.showClose ? (y(), te(s(tt), {
              key: 0,
              class: z(s(o).e("closeBtn")),
              onClick: me(x, ["stop"])
            }, {
              default: le(() => [
                c(s(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Je, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var el = /* @__PURE__ */ at(Xi, [["__file", "notification.vue"]]);
const ot = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, bt = 16;
let tl = 1;
const Ce = function(e = {}, t) {
  if (!de)
    return { close: () => {
    } };
  (ae(e) || Ie(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  ot[n].forEach(({ vm: w }) => {
    var L;
    o += (((L = w.el) == null ? void 0 : L.offsetHeight) || 0) + bt;
  }), o += bt;
  const i = `notification_${tl++}`, d = e.onClose, u = {
    ...e,
    offset: o,
    id: i,
    onClose: () => {
      nl(i, n, d);
    }
  };
  let h = document.body;
  mt(e.appendTo) ? h = e.appendTo : ae(e.appendTo) && (h = document.querySelector(e.appendTo)), mt(h) || (h = document.body);
  const p = document.createElement("div"), v = c(el, u, Te(u.message) ? u.message : Ie(u.message) ? () => u.message : null);
  return v.appContext = Wn(t) ? Ce._context : t, v.props.onDestroy = () => {
    Qe(null, p);
  }, Qe(v, p), ot[n].push({ vm: v }), h.appendChild(p.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Kn.forEach((e) => {
  Ce[e] = (t = {}, n) => ((ae(t) || Ie(t)) && (t = {
    message: t
  }), Ce({ ...t, type: e }, n));
});
function nl(e, t, n) {
  const o = ot[t], i = o.findIndex(({ vm: v }) => {
    var w;
    return ((w = v.component) == null ? void 0 : w.props.id) === e;
  });
  if (i === -1)
    return;
  const { vm: d } = o[i];
  if (!d)
    return;
  n?.(d);
  const u = d.el.offsetHeight, h = t.split("-")[0];
  o.splice(i, 1);
  const p = o.length;
  if (!(p < 1))
    for (let v = i; v < p; v++) {
      const { el: w, component: L } = o[v].vm, T = Number.parseInt(w.style[h], 10) - u - bt;
      L.props.offset = T;
    }
}
function ol() {
  for (const e of Object.values(ot))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ce.closeAll = ol;
Ce._context = null;
const sl = Vn(Ce, "$notify"), j = {
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
    o === "center" ? qi({
      message: t,
      type: n,
      duration: i,
      showClose: d,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : sl({
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
var _t;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(_t || (_t = {}));
async function il() {
  return r("plugin:path|resolve_directory", {
    directory: _t.AppCache
  });
}
async function ll(...e) {
  return r("plugin:path|join", { paths: e });
}
async function ln(e, t) {
  await r("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const al = () => ({
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
}), rl = (e) => e ? /^https?:\/\//i.test(e) ? e : po(e) : "", ul = () => r("wallpaper_get_config"), kt = (e) => r("wallpaper_save_config", { config: e }), an = () => r("wallpaper_get_status"), rn = (e) => r("wallpaper_scan_folder", { path: e }), cl = (e) => r("wallpaper_set_fixed_image", { path: e }), dl = () => r("wallpaper_switch_now"), hl = (e) => r("wallpaper_fetch_wallhaven", { params: e }), fl = (e) => r("wallpaper_set_wallhaven_image", { wallpaper: e }), pl = (e) => r("wallpaper_download_wallhaven_image", { wallpaper: e }), vl = () => r("wallpaper_clear_cache"), gl = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), wl = async () => {
  try {
    await r("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!gl(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await il(), t = await ll(e, "wallpaper-switcher");
  try {
    await ln(t);
  } catch {
    await ln(e);
  }
};
function ml({ config: e, refreshStatus: t }) {
  const n = S("switcher"), o = S([]), i = S(1), d = S(1), u = S(!1), h = S(""), p = S(""), v = S("general"), w = S("hot"), L = S(null), T = S(!1), N = S(!1), P = S(/* @__PURE__ */ new Set()), g = S(/* @__PURE__ */ new Set()), m = /* @__PURE__ */ new Map();
  let x = null, K = null, _ = null, U = 0;
  const q = b(() => w.value === "hot" ? "Hot" : "Toplist"), J = b(() => o.value.slice(0, 8)), I = b(() => {
    const C = p.value.trim();
    return v.value === "nature" ? C ? `${C} nature` : "nature" : C || null;
  }), Ne = b(() => v.value), he = (C) => {
    const W = String(C).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(W) ? "Wallhaven 网络连接失败，请稍后重试或检查代理/网络。" : W.length > 120 ? `${W.slice(0, 120)}...` : W;
  }, X = (C, W) => {
    const $ = new Set(P.value);
    W ? $.add(C) : $.delete(C), P.value = $;
  }, $e = (C) => {
    const W = new Set(g.value);
    W.add(C), g.value = W;
  }, Ee = (C, W) => {
    if (!(W instanceof HTMLImageElement)) {
      m.delete(C.id);
      return;
    }
    if (m.set(C.id, W), !x) {
      W.src = C.thumbs.large;
      return;
    }
    W.dataset.src = C.thumbs.large, x.observe(W);
  }, fe = () => {
    g.value = /* @__PURE__ */ new Set(), m.clear();
  }, Fe = async () => {
    e.value.wallhavenQuery = p.value.trim() || null, e.value.wallhavenCategory = v.value, e.value.wallhavenSource = w.value, e.value.mode = "wallhaven", await kt(e.value);
  }, ee = async (C = i.value) => {
    const W = ++U;
    u.value = !0, h.value = "", o.value = [], fe();
    try {
      await Fe();
      const $ = await hl({
        source: w.value,
        page: C,
        query: I.value,
        category: Ne.value
      });
      if (W !== U) return;
      o.value = $.data, i.value = $.page, d.value = Math.max(1, $.lastPage), await hn();
      for (const Q of m.values())
        x && x.observe(Q);
    } catch ($) {
      if (W !== U) return;
      o.value = [], h.value = he($), j.msg(h.value, "error");
    } finally {
      W === U && (u.value = !1);
    }
  }, rt = () => ee(1), ut = async (C) => {
    w.value = C, await ee(1);
  }, ne = async (C) => {
    v.value = C, await ee(1);
  }, pe = async () => {
    p.value = "", v.value = e.value.wallhavenCategory || "general", w.value = e.value.wallhavenSource, i.value = 1, h.value = "", o.value = [], n.value = "wallhaven", await ee(1);
  }, ve = async () => {
    n.value = "switcher", xe(), await t();
  }, Ae = (C) => {
    L.value = C, T.value = !0, N.value = !1;
  }, xe = () => {
    L.value = null, T.value = !1, N.value = !1;
  }, De = () => {
    T.value = !1;
  }, Re = () => {
    T.value = !1, N.value = !0;
  }, ct = async (C) => {
    X(C.id, !0);
    try {
      j.msg("正在设置壁纸...", "info"), await fl(C), await t(), j.msg("壁纸已设置", "success");
    } catch (W) {
      j.msg(String(W), "error");
    } finally {
      X(C.id, !1);
    }
  }, He = async (C) => {
    X(C.id, !0);
    try {
      j.msg("正在下载壁纸...", "info"), await pl(C), await t(), j.msg("壁纸已下载到缓存", "success");
    } catch (W) {
      j.msg(String(W), "error");
    } finally {
      X(C.id, !1);
    }
  }, ze = async () => {
    i.value > 1 && await ee(i.value - 1);
  }, dt = async () => {
    i.value < d.value && await ee(i.value + 1);
  };
  return Me(() => {
    x = new IntersectionObserver((C) => {
      for (const W of C) {
        if (!W.isIntersecting) continue;
        const $ = W.target, Q = $.dataset.src;
        Q && $.src !== Q && ($.src = Q), x?.unobserve($);
      }
    }, { root: null, rootMargin: "120px" }), K = null, _ = null;
  }), vn(() => {
    x?.disconnect(), x = null, K?.(), _?.();
  }), {
    activeView: n,
    wallpapers: o,
    wallhavenPage: i,
    wallhavenLastPage: d,
    wallhavenLoading: u,
    wallhavenError: h,
    wallhavenKeyword: p,
    wallhavenCategory: v,
    wallhavenSource: w,
    previewWallpaper: L,
    previewLoading: T,
    previewLoadFailed: N,
    workingIds: P,
    loadedThumbIds: g,
    wallhavenSourceLabel: q,
    visibleWallpapers: J,
    openWallhavenGrid: pe,
    backToSwitcher: ve,
    openPreview: Ae,
    closePreview: xe,
    markPreviewLoaded: De,
    markPreviewFailed: Re,
    markThumbLoaded: $e,
    setThumbRef: Ee,
    refreshWallhaven: rt,
    setWallhavenSource: ut,
    setWallhavenCategory: ne,
    setWallpaperFromWallhaven: ct,
    downloadWallpaperFromWallhaven: He,
    prevWallhavenPage: ze,
    nextWallhavenPage: dt,
    setupListeners: async () => {
      K = await Ye("wallpaper-switcher-changed", t), _ = await Ye("wallpaper-switcher-error", (C) => {
        j.msg(C.payload?.message || "定时切换失败", "error");
      });
    }
  };
}
var yl = {
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
function bl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function _l(e, t, n) {
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
var kl = Symbol("icon-context");
function D(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(d) {
      var u = bl(), h = ie(kl, yl);
      return function() {
        var p = d.size, v = d.strokeWidth, w = d.strokeLinecap, L = d.strokeLinejoin, T = d.theme, N = d.fill, P = d.spin, g = _l(u, {
          size: p,
          strokeWidth: v,
          strokeLinecap: w,
          strokeLinejoin: L,
          theme: T,
          fill: N
        }, h), m = [h.prefix + "-icon"];
        return m.push(h.prefix + "-icon-" + e), t && h.rtl && m.push(h.prefix + "-icon-rtl"), P && m.push(h.prefix + "-icon-spin"), c("span", {
          class: m.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const Cl = D("back", !0, function(e) {
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
}), Ue = D("close-small", !1, function(e) {
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
}), Ll = D("computer", !1, function(e) {
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
}), Sl = D("delete", !1, function(e) {
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
}), xl = D("download", !1, function(e) {
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
}), un = D("folder-open", !0, function(e) {
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
}), zl = D("lightning", !0, function(e) {
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
}), gt = D("picture", !0, function(e) {
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
}), Ol = D("picture-album", !0, function(e) {
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
}), Wl = D("pin", !0, function(e) {
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
}), Pl = D("preview-open", !1, function(e) {
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
}), cn = D("refresh", !0, function(e) {
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
}), Il = D("save", !0, function(e) {
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
}), dn = D("search", !0, function(e) {
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
}), Tl = { class: "wallpaper-window" }, jl = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Ml = {
  key: 0,
  class: "title"
}, Nl = {
  key: 1,
  class: "title"
}, $l = {
  key: 2,
  class: "window-actions"
}, El = {
  key: 3,
  class: "window-actions"
}, Fl = {
  class: "source-toggle",
  role: "tablist",
  "aria-label": "壁纸来源切换"
}, Al = {
  key: 0,
  class: "unsupported"
}, Dl = { class: "top-panel" }, Rl = { class: "preview" }, Hl = ["src"], Vl = {
  key: 1,
  class: "preview-empty"
}, Bl = { class: "status-panel" }, Ul = { class: "status-row" }, Gl = { class: "status-row" }, Zl = { class: "status-row" }, Kl = { class: "status-actions" }, ql = ["disabled"], Jl = { class: "card settings-card" }, Ql = { class: "form-row mode-row" }, Yl = { class: "segmented three" }, Xl = { class: "form-row fixed-row" }, ea = { class: "form-row folder-row" }, ta = { class: "hint-row" }, na = { class: "form-row wallhaven-row" }, oa = { class: "segmented source" }, sa = { class: "hint-row" }, ia = { class: "card rules-card" }, la = { class: "rules-line" }, aa = { class: "switch-label" }, ra = { class: "number-label" }, ua = { class: "segmented mini" }, ca = { class: "rules-line" }, da = { class: "segmented fit" }, ha = { class: "checkbox-label" }, fa = { class: "footer-card" }, pa = { class: "cache-info" }, va = { class: "footer-actions" }, ga = ["disabled"], wa = ["disabled"], ma = ["disabled"], ya = {
  key: 2,
  class: "wallhaven-view"
}, ba = { class: "filters filters--preview-style" }, _a = { class: "search-box wallhaven-search" }, ka = {
  class: "wallhaven-tabs",
  role: "tablist",
  "aria-label": "壁纸分类切换"
}, Ca = ["disabled"], La = ["disabled"], Sa = ["disabled"], xa = ["disabled"], za = { class: "wallhaven-meta" }, Oa = { class: "grid-wrap" }, Wa = {
  key: 0,
  class: "empty-state"
}, Pa = {
  key: 1,
  class: "empty-state error-state"
}, Ia = {
  key: 2,
  class: "empty-state"
}, Ta = {
  key: 3,
  class: "wallpaper-grid"
}, ja = ["onClick"], Ma = {
  key: 0,
  class: "thumb-skeleton"
}, Na = ["alt", "onLoad"], $a = ["onClick"], Ea = ["disabled", "onClick"], Fa = ["disabled", "onClick"], Aa = { class: "pager" }, Da = { class: "source-note" }, Ra = { class: "pager-actions" }, Ha = ["disabled"], Va = ["disabled"], Ba = { class: "preview-dialog" }, Ua = { class: "preview-image-wrap" }, Ga = {
  key: 0,
  class: "preview-skeleton"
}, Za = {
  key: 1,
  class: "preview-error"
}, Ka = ["src"], qa = ["disabled"], Ja = ["disabled"], Qa = /* @__PURE__ */ A({
  __name: "index",
  setup(e) {
    const t = yn(), n = S(al()), o = S(null), i = S(null), d = S(!1), u = S(!1), h = S(!1), p = S(!1), v = S(!1), w = ml({
      config: n,
      refreshStatus: async () => {
        await Q();
      }
    }), {
      activeView: L,
      wallhavenPage: T,
      wallhavenLastPage: N,
      wallhavenLoading: P,
      wallhavenError: g,
      wallhavenKeyword: m,
      wallhavenCategory: x,
      wallhavenSource: K,
      previewWallpaper: _,
      previewLoading: U,
      previewLoadFailed: q,
      workingIds: J,
      loadedThumbIds: I,
      wallhavenSourceLabel: Ne,
      visibleWallpapers: he,
      openWallhavenGrid: X,
      backToSwitcher: $e,
      openPreview: Ee,
      closePreview: fe,
      markPreviewLoaded: Fe,
      markPreviewFailed: ee,
      markThumbLoaded: rt,
      setThumbRef: ut,
      refreshWallhaven: ne,
      setWallhavenSource: pe,
      setWallhavenCategory: ve,
      setWallpaperFromWallhaven: Ae,
      downloadWallpaperFromWallhaven: xe,
      prevWallhavenPage: De,
      nextWallhavenPage: Re,
      setupListeners: ct
    } = w, He = b(() => rl(o.value?.currentPath || n.value.lastAppliedPath)), ze = b(() => "2560 × 1440"), dt = b(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), Tt = b(() => {
      const k = o.value?.nextSwitchAt;
      if (!k) return "18 分钟后";
      const l = Math.max(0, k - Math.floor(Date.now() / 1e3));
      return l < 60 ? `${l} 秒后` : `${Math.ceil(l / 60)} 分钟后`;
    }), C = b(() => {
      const k = o.value?.cacheSizeBytes ?? 0;
      return k > 0 ? to(k) : "320 MB";
    }), W = b(() => i.value ? `检测到 ${i.value.count} 张可用图片` : "检测到 128 张可用图片"), $ = async () => {
      d.value = !0;
      try {
        const [k, l] = await Promise.all([
          ul(),
          an()
        ]);
        if (n.value = k, o.value = l, k.folderPath)
          try {
            i.value = await rn(k.folderPath);
          } catch {
            i.value = null;
          }
      } catch (k) {
        j.msg(String(k), "error");
      } finally {
        d.value = !1;
      }
    }, Q = async () => {
      try {
        o.value = await an();
      } catch (k) {
        j.msg(String(k), "error");
      }
    }, jt = async () => {
      u.value = !0;
      try {
        await kt(n.value), await Q(), j.msg("壁纸设置已保存", "success");
      } catch (k) {
        j.msg(String(k), "error");
      } finally {
        u.value = !1;
      }
    }, qn = async () => {
      const k = await Rt({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof k == "string") {
        n.value.fixedImagePath = k, n.value.mode = "fixed";
        try {
          await cl(k), await $(), j.msg("已设置固定壁纸", "success");
        } catch (l) {
          j.msg(String(l), "error");
        }
      }
    }, Jn = async () => {
      const k = await Rt({ multiple: !1, directory: !0 });
      typeof k == "string" && (n.value.folderPath = k, n.value.mode = "folder", await Mt());
    }, Mt = async () => {
      if (!n.value.folderPath) {
        j.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        i.value = await rn(n.value.folderPath), i.value.count === 0 ? j.msg("文件夹中没有可用图片", "warning") : j.msg(W.value, "success");
      } catch (k) {
        j.msg(String(k), "error");
      }
    }, Qn = async () => {
      h.value = !0;
      try {
        await kt(n.value), await dl(), await Q(), j.msg("壁纸已切换", "success");
      } catch (k) {
        j.msg(String(k), "error");
      } finally {
        h.value = !1;
      }
    }, Yn = async () => {
      if (!o.value?.currentPath) {
        j.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await jt();
    }, Xn = async () => {
      p.value = !0;
      try {
        await vl(), await Q(), j.msg("缓存已清理", "success");
      } catch (k) {
        j.msg(String(k), "error");
      } finally {
        p.value = !1;
      }
    }, eo = async () => {
      v.value = !0;
      try {
        await wl();
      } catch (k) {
        j.msg(String(k), "error");
      } finally {
        v.value = !1;
      }
    }, Nt = async () => {
      await t.close();
    }, to = (k) => k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / 1024 / 1024).toFixed(1)} MB` : `${(k / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return Me(async () => {
      await $(), await ct();
    }), vn(() => {
    }), (k, l) => (y(), O("main", Tl, [
      a("header", jl, [
        s(L) === "switcher" ? (y(), O("div", Ml, [
          c(s(gt), { size: 18 }),
          l[40] || (l[40] = a(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ])) : (y(), O("div", Nl, [
          a("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: l[0] || (l[0] = //@ts-ignore
            (...f) => s($e) && s($e)(...f))
          }, [
            c(s(Cl), { size: 20 })
          ]),
          l[41] || (l[41] = a(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ])),
        s(L) === "switcher" ? (y(), O("div", $l, [
          a("button", {
            type: "button",
            class: "icon-btn online-entry-btn",
            title: "打开 Wallhaven 壁纸",
            onClick: l[1] || (l[1] = //@ts-ignore
            (...f) => s(X) && s(X)(...f))
          }, [
            c(s(Ol), { size: 18 })
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: Nt
          }, [
            c(s(Ue), { size: 20 })
          ])
        ])) : (y(), O("div", El, [
          a("div", Fl, [
            a(
              "div",
              {
                class: z(["seg-tab", { active: s(K) === "hot", disabled: s(P) }]),
                role: "tab",
                tabindex: "0",
                onClick: l[2] || (l[2] = (f) => !s(P) && s(pe)("hot")),
                onKeydown: l[3] || (l[3] = ht(me((f) => !s(P) && s(pe)("hot"), ["prevent"]), ["enter"]))
              },
              " 热门 ",
              34
              /* CLASS, NEED_HYDRATION */
            ),
            a(
              "div",
              {
                class: z(["seg-tab", { active: s(K) === "toplist", disabled: s(P) }]),
                role: "tab",
                tabindex: "0",
                onClick: l[4] || (l[4] = (f) => !s(P) && s(pe)("toplist")),
                onKeydown: l[5] || (l[5] = ht(me((f) => !s(P) && s(pe)("toplist"), ["prevent"]), ["enter"]))
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
            onClick: Nt
          }, [
            c(s(Ue), { size: 20 })
          ])
        ]))
      ]),
      s(o) && !s(o).supported ? (y(), O("section", Al, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : H("v-if", !0),
      s(L) === "switcher" ? (y(), O(
        "div",
        {
          key: 1,
          class: z(["content", { dimmed: s(d) }])
        },
        [
          a("section", Dl, [
            a("div", Rl, [
              s(He) ? (y(), O("img", {
                key: 0,
                src: s(He),
                alt: "当前壁纸预览"
              }, null, 8, Hl)) : (y(), O("div", Vl, [
                c(s(gt), { size: 42 }),
                l[42] || (l[42] = a(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            a("div", Bl, [
              l[47] || (l[47] = a(
                "h2",
                null,
                "当前状态",
                -1
                /* HOISTED */
              )),
              a("div", Ul, [
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
                  M(s(dt)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Gl, [
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
                  M(s(ze)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Zl, [
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
                  M(s(Tt)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Kl, [
                a("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(h),
                  onClick: Qn
                }, [
                  c(s(zl), {
                    theme: "outline",
                    size: 14
                  }),
                  E(
                    " " + M(s(h) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, ql),
                a("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: Yn
                }, [
                  c(s(Wl), {
                    theme: "outline",
                    size: 14
                  }),
                  l[46] || (l[46] = E(" 设为固定 "))
                ])
              ])
            ])
          ]),
          a("section", Jl, [
            a("div", Ql, [
              l[48] || (l[48] = a(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              a("div", Yl, [
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).mode === "fixed" }),
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
                    class: z({ active: s(n).mode === "folder" }),
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
                    class: z({ active: s(n).mode === "wallhaven" }),
                    onClick: l[8] || (l[8] = (f) => s(n).mode = "wallhaven")
                  },
                  " Wallhaven 在线 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", Xl, [
              l[50] || (l[50] = a(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              Y(a(
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
                [Ve, s(n).fixedImagePath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: qn
              }, [
                c(s(gt), { size: 16 }),
                l[49] || (l[49] = E(" 选择图片 "))
              ])
            ]),
            a("div", ea, [
              l[53] || (l[53] = a(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              Y(a(
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
                [Ve, s(n).folderPath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Jn
              }, [
                c(s(un), { size: 16 }),
                l[51] || (l[51] = E(" 选择 "))
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Mt
              }, [
                c(s(cn), { size: 16 }),
                l[52] || (l[52] = E(" 扫描 "))
              ])
            ]),
            a(
              "div",
              ta,
              M(s(W)),
              1
              /* TEXT */
            ),
            a("div", na, [
              l[55] || (l[55] = a(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              l[56] || (l[56] = a(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              a("div", oa, [
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).wallhavenSource === "hot" }),
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
                    class: z({ active: s(n).wallhavenSource === "toplist" }),
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
                (...f) => s(X) && s(X)(...f))
              }, [
                c(s(dn), { size: 16 }),
                l[54] || (l[54] = E(" 打开在线网格 "))
              ])
            ]),
            a("div", sa, [
              l[57] || (l[57] = a(
                "span",
                null,
                "屏幕匹配",
                -1
                /* HOISTED */
              )),
              a(
                "strong",
                null,
                M(s(ze)),
                1
                /* TEXT */
              )
            ])
          ]),
          a("section", ia, [
            a("div", la, [
              l[62] || (l[62] = a(
                "span",
                { class: "row-label" },
                "切换规则",
                -1
                /* HOISTED */
              )),
              a("label", aa, [
                l[58] || (l[58] = E(" 启用定时切换 ")),
                Y(a(
                  "input",
                  {
                    "onUpdate:modelValue": l[14] || (l[14] = (f) => s(n).scheduleEnabled = f),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [$t, s(n).scheduleEnabled]
                ]),
                l[59] || (l[59] = a(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                ))
              ]),
              a("label", ra, [
                l[60] || (l[60] = E(" 每 ")),
                Y(a(
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
                    Ve,
                    s(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                l[61] || (l[61] = E(" 分钟 "))
              ]),
              l[63] || (l[63] = a(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              a("div", ua, [
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).order === "random" }),
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
                    class: z({ active: s(n).order === "sequential" }),
                    onClick: l[17] || (l[17] = (f) => s(n).order = "sequential")
                  },
                  " 顺序 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", ca, [
              l[65] || (l[65] = a(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              a("div", da, [
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).fitMode === "fillCrop" }),
                    onClick: l[18] || (l[18] = (f) => s(n).fitMode = "fillCrop")
                  },
                  " 填充裁切 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).fitMode === "fit" }),
                    onClick: l[19] || (l[19] = (f) => s(n).fitMode = "fit")
                  },
                  " 适应 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: z({ active: s(n).fitMode === "center" }),
                    onClick: l[20] || (l[20] = (f) => s(n).fitMode = "center")
                  },
                  " 居中 ",
                  2
                  /* CLASS */
                )
              ]),
              a("label", ha, [
                Y(a(
                  "input",
                  {
                    "onUpdate:modelValue": l[21] || (l[21] = (f) => s(n).autoRestore = f),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [$t, s(n).autoRestore]
                ]),
                l[64] || (l[64] = E(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          a("footer", fa, [
            a("div", pa, [
              l[66] || (l[66] = a(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              l[67] || (l[67] = a(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              a(
                "span",
                null,
                M(s(C)),
                1
                /* TEXT */
              )
            ]),
            a("div", va, [
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(p),
                onClick: Xn
              }, [
                c(s(Sl), { size: 16 }),
                E(
                  " " + M(s(p) ? "清理中" : "清理缓存"),
                  1
                  /* TEXT */
                )
              ], 8, ga),
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(v),
                onClick: eo
              }, [
                c(s(un), { size: 16 }),
                E(
                  " " + M(s(v) ? "打开中" : "打开缓存"),
                  1
                  /* TEXT */
                )
              ], 8, wa),
              a("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(u),
                onClick: jt
              }, [
                c(s(Il), { size: 17 }),
                E(
                  " " + M(s(u) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, ma)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (y(), O("div", ya, [
        a("section", ba, [
          a("div", _a, [
            Y(a(
              "input",
              {
                "onUpdate:modelValue": l[22] || (l[22] = (f) => fn(m) ? m.value = f : null),
                type: "text",
                placeholder: "搜索关键词",
                onKeydown: l[23] || (l[23] = ht(
                  //@ts-ignore
                  (...f) => s(ne) && s(ne)(...f),
                  ["enter"]
                ))
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [Ve, s(m)]
            ]),
            c(s(dn), {
              size: 16,
              class: "search-icon"
            }),
            s(m) ? (y(), O("button", {
              key: 0,
              type: "button",
              class: "clear-btn",
              title: "清空",
              onClick: l[24] || (l[24] = (f) => m.value = "")
            }, [
              c(s(Ue), { size: 18 })
            ])) : H("v-if", !0)
          ]),
          a("div", ka, [
            a("button", {
              type: "button",
              class: z({ active: s(x) === "general" }),
              disabled: s(P),
              onClick: l[25] || (l[25] = (f) => s(ve)("general"))
            }, " 通用 ", 10, Ca),
            a("button", {
              type: "button",
              class: z({ active: s(x) === "anime" }),
              disabled: s(P),
              onClick: l[26] || (l[26] = (f) => s(ve)("anime"))
            }, " 动漫 ", 10, La),
            a("button", {
              type: "button",
              class: z({ active: s(x) === "people" }),
              disabled: s(P),
              onClick: l[27] || (l[27] = (f) => s(ve)("people"))
            }, " 人物 ", 10, Sa),
            a("button", {
              type: "button",
              class: z({ active: s(x) === "nature" }),
              disabled: s(P),
              onClick: l[28] || (l[28] = (f) => s(ve)("nature"))
            }, " 自然 ", 10, xa)
          ]),
          a("div", za, [
            a(
              "span",
              null,
              "自动匹配 " + M(s(ze)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "refresh-btn wallhaven-refresh",
              title: "刷新",
              onClick: l[29] || (l[29] = //@ts-ignore
              (...f) => s(ne) && s(ne)(...f))
            }, [
              c(s(cn), {
                size: 14,
                class: z({ spinning: s(P) })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        a("section", Oa, [
          s(P) && s(he).length === 0 ? (y(), O("div", Wa, "正在加载 Wallhaven 壁纸...")) : s(g) ? (y(), O("div", Pa, [
            a(
              "span",
              null,
              M(s(g)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              onClick: l[30] || (l[30] = //@ts-ignore
              (...f) => s(ne) && s(ne)(...f))
            }, "重试")
          ])) : s(he).length === 0 ? (y(), O("div", Ia, "暂无可用壁纸")) : (y(), O("div", Ta, [
            (y(!0), O(
              Lt,
              null,
              uo(s(he), (f) => (y(), O("article", {
                key: f.id,
                class: "wallpaper-card"
              }, [
                a("button", {
                  type: "button",
                  class: "thumb",
                  onClick: (ge) => s(Ee)(f)
                }, [
                  s(I).has(f.id) ? H("v-if", !0) : (y(), O("div", Ma)),
                  a("img", {
                    ref_for: !0,
                    ref: (ge) => s(ut)(f, ge),
                    alt: f.resolution,
                    loading: "lazy",
                    onLoad: (ge) => s(rt)(f.id)
                  }, null, 40, Na),
                  a(
                    "span",
                    null,
                    M(f.resolution),
                    1
                    /* TEXT */
                  )
                ], 8, ja),
                a("div", {
                  class: "card-actions",
                  onClick: l[31] || (l[31] = me(() => {
                  }, ["stop"]))
                }, [
                  a("button", {
                    type: "button",
                    title: "预览",
                    onClick: (ge) => s(Ee)(f)
                  }, [
                    c(s(Pl), { size: 16 }),
                    l[68] || (l[68] = E(" 预览 "))
                  ], 8, $a),
                  a("button", {
                    type: "button",
                    title: "设为壁纸",
                    disabled: s(J).has(f.id),
                    onClick: (ge) => s(Ae)(f)
                  }, [
                    c(s(Ll), { size: 16 }),
                    E(
                      " " + M(s(J).has(f.id) ? "设置中" : "设为"),
                      1
                      /* TEXT */
                    )
                  ], 8, Ea),
                  a("button", {
                    type: "button",
                    title: "下载",
                    disabled: s(J).has(f.id),
                    onClick: (ge) => s(xe)(f)
                  }, [
                    c(s(xl), { size: 16 }),
                    l[69] || (l[69] = E(" 下载 "))
                  ], 8, Fa)
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        a("footer", Aa, [
          a(
            "span",
            null,
            "第 " + M(s(T)) + " 页",
            1
            /* TEXT */
          ),
          a(
            "span",
            Da,
            "来源：" + M(s(Ne)) + " · SFW",
            1
            /* TEXT */
          ),
          a("div", Ra, [
            a("button", {
              type: "button",
              disabled: s(T) <= 1 || s(P),
              onClick: l[32] || (l[32] = //@ts-ignore
              (...f) => s(De) && s(De)(...f))
            }, "上一页", 8, Ha),
            a("button", {
              type: "button",
              disabled: s(T) >= s(N) || s(P),
              onClick: l[33] || (l[33] = //@ts-ignore
              (...f) => s(Re) && s(Re)(...f))
            }, "下一页", 8, Va)
          ])
        ])
      ])),
      s(_) ? (y(), O("div", {
        key: 3,
        class: "preview-modal",
        onClick: l[39] || (l[39] = me(
          //@ts-ignore
          (...f) => s(fe) && s(fe)(...f),
          ["self"]
        ))
      }, [
        a("div", Ba, [
          a("header", null, [
            a(
              "strong",
              null,
              M(s(_).resolution),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "flat-icon",
              onClick: l[34] || (l[34] = //@ts-ignore
              (...f) => s(fe) && s(fe)(...f))
            }, [
              c(s(Ue), { size: 23 })
            ])
          ]),
          a("div", Ua, [
            s(U) ? (y(), O("div", Ga, l[70] || (l[70] = [
              a(
                "span",
                null,
                "加载预览...",
                -1
                /* HOISTED */
              )
            ]))) : H("v-if", !0),
            s(q) ? (y(), O("div", Za, "预览加载失败")) : H("v-if", !0),
            a("img", {
              class: z({ ready: !s(U) && !s(q) }),
              src: s(_).path,
              alt: "壁纸预览",
              onLoad: l[35] || (l[35] = //@ts-ignore
              (...f) => s(Fe) && s(Fe)(...f)),
              onError: l[36] || (l[36] = //@ts-ignore
              (...f) => s(ee) && s(ee)(...f))
            }, null, 42, Ka)
          ]),
          a("footer", null, [
            a("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(J).has(s(_).id),
              onClick: l[37] || (l[37] = (f) => s(xe)(s(_)))
            }, " 下载缓存 ", 8, qa),
            a("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(J).has(s(_).id),
              onClick: l[38] || (l[38] = (f) => s(Ae)(s(_)))
            }, M(s(J).has(s(_).id) ? "设置中" : "设为壁纸"), 9, Ja)
          ])
        ])
      ])) : H("v-if", !0)
    ]));
  }
}), Ya = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, Xa = /* @__PURE__ */ Ya(Qa, [["__scopeId", "data-v-f4116a24"]]), er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xa
}, Symbol.toStringTag, { value: "Module" }));
export {
  nr as activate
};
