import { getCurrentInstance as de, inject as ee, ref as k, computed as m, unref as s, readonly as go, getCurrentScope as wo, onScopeDispose as yo, onMounted as Ue, nextTick as rn, watch as Ge, isRef as un, warn as mo, provide as bo, defineComponent as $, createElementBlock as O, openBlock as _, mergeProps as _o, renderSlot as he, createElementVNode as a, normalizeClass as L, createVNode as d, Transition as ct, withCtx as te, withDirectives as Z, normalizeStyle as $e, createTextVNode as T, toDisplayString as I, vShow as Ee, shallowReactive as ko, createBlock as q, createCommentVNode as R, resolveDynamicComponent as cn, Fragment as dt, withModifiers as ce, isVNode as Ce, render as Ae, onUnmounted as Co, withKeys as Xe, vModelText as Pe, vModelCheckbox as jt, renderList as Lo } from "vue";
const fr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => dr)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function So(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function xo(e, t, n, o, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Te;
const B = "__TAURI_TO_IPC_KEY__";
function Oo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function zo(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Wo {
  get rid() {
    return So(this, Te, "f");
  }
  constructor(t) {
    Te.set(this, void 0), xo(this, Te, t);
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
Te = /* @__PURE__ */ new WeakMap();
var D;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(D || (D = {}));
async function dn(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Fe(e, t, n) {
  var o;
  const l = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: l,
    handler: Oo(t)
  }).then((h) => async () => dn(e, h));
}
async function Po(e, t, n) {
  return Fe(e, (o) => {
    dn(e, o.id), t(o);
  }, n);
}
async function Io(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function jo(e, t, n) {
  await r("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class hn {
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
    return new hn(this.width / t, this.height / t);
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
class ue {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof hn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof _e ? this.size : this.size.toPhysical(t);
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
class fn {
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
    return new fn(this.x / t, this.y / t);
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
class Ie {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof fn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Q ? this.position : this.position.toPhysical(t);
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
class ke extends Wo {
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
      rgba: De(t),
      width: n,
      height: o
    }).then((l) => new ke(l));
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
      bytes: De(t)
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
function De(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ke ? e.rid : e;
}
var it;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(it || (it = {}));
class To {
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
var Tt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Tt || (Tt = {}));
function pn() {
  return new vn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function et() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new vn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const tt = ["tauri://created", "tauri://error"];
class vn {
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
    return (n = (await et()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return pn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return et();
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
    for (const t of await et())
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
    } : Fe(t, n, {
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
    } : Po(t, n, {
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
    if (tt.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Io(t, n);
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
    if (tt.includes(n)) {
      for (const l of this.listeners[n] || [])
        l({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return jo(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return tt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return r("plugin:window|outer_size", {
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
      value: t instanceof Ie ? t : new Ie(t)
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
      value: De(t)
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
      value: t instanceof Ie ? t : new Ie(t)
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
      value: t ? De(t) : void 0
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
    return this.listen(D.WINDOW_RESIZED, (n) => {
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
    return this.listen(D.WINDOW_MOVED, (n) => {
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
    return this.listen(D.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new To(n);
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
    const n = await this.listen(D.DRAG_ENTER, (u) => {
      t({
        ...u,
        payload: {
          type: "enter",
          paths: u.payload.paths,
          position: new Q(u.payload.position)
        }
      });
    }), o = await this.listen(D.DRAG_OVER, (u) => {
      t({
        ...u,
        payload: {
          type: "over",
          position: new Q(u.payload.position)
        }
      });
    }), l = await this.listen(D.DRAG_DROP, (u) => {
      t({
        ...u,
        payload: {
          type: "drop",
          paths: u.payload.paths,
          position: new Q(u.payload.position)
        }
      });
    }), h = await this.listen(D.DRAG_LEAVE, (u) => {
      t({ ...u, payload: { type: "leave" } });
    });
    return () => {
      n(), l(), o(), h();
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
    const n = await this.listen(D.WINDOW_FOCUS, (l) => {
      t({ ...l, payload: !0 });
    }), o = await this.listen(D.WINDOW_BLUR, (l) => {
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
var Mt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Mt || (Mt = {}));
var Nt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Nt || (Nt = {}));
var $t;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})($t || ($t = {}));
async function Et(e = {}) {
  return typeof e == "object" && Object.freeze(e), await r("plugin:dialog|open", { options: e });
}
const gn = Symbol(), Me = "el", Mo = "is-", X = (e, t, n, o, l) => {
  let h = `${e}-${t}`;
  return n && (h += `-${n}`), o && (h += `__${o}`), l && (h += `--${l}`), h;
}, wn = Symbol("namespaceContextKey"), No = (e) => {
  const t = e || (de() ? ee(wn, k(Me)) : k(Me));
  return m(() => s(t) || Me);
}, ht = (e, t) => {
  const n = No(t);
  return {
    namespace: n,
    b: (v = "") => X(n.value, e, v, "", ""),
    e: (v) => v ? X(n.value, e, "", v, "") : "",
    m: (v) => v ? X(n.value, e, "", "", v) : "",
    be: (v, b) => v && b ? X(n.value, e, v, b, "") : "",
    em: (v, b) => v && b ? X(n.value, e, "", v, b) : "",
    bm: (v, b) => v && b ? X(n.value, e, v, "", b) : "",
    bem: (v, b, z) => v && b && z ? X(n.value, e, v, b, z) : "",
    is: (v, ...b) => {
      const z = b.length >= 1 ? b[0] : !0;
      return v && z ? `${Mo}${v}` : "";
    },
    cssVar: (v) => {
      const b = {};
      for (const z in v)
        v[z] && (b[`--${n.value}-${z}`] = v[z]);
      return b;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const b = {};
      for (const z in v)
        v[z] && (b[`--${n.value}-${e}-${z}`] = v[z]);
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
const $o = Object.prototype.hasOwnProperty, At = (e, t) => $o.call(e, t), Le = (e) => typeof e == "function", ne = (e) => typeof e == "string", yn = (e) => e !== null && typeof e == "object";
var Eo = typeof global == "object" && global && global.Object === Object && global, Ao = typeof self == "object" && self && self.Object === Object && self, ft = Eo || Ao || Function("return this")(), fe = ft.Symbol, mn = Object.prototype, Fo = mn.hasOwnProperty, Do = mn.toString, be = fe ? fe.toStringTag : void 0;
function Ro(e) {
  var t = Fo.call(e, be), n = e[be];
  try {
    e[be] = void 0;
    var o = !0;
  } catch {
  }
  var l = Do.call(e);
  return o && (t ? e[be] = n : delete e[be]), l;
}
var Ho = Object.prototype, Vo = Ho.toString;
function Bo(e) {
  return Vo.call(e);
}
var Uo = "[object Null]", Go = "[object Undefined]", Ft = fe ? fe.toStringTag : void 0;
function bn(e) {
  return e == null ? e === void 0 ? Go : Uo : Ft && Ft in Object(e) ? Ro(e) : Bo(e);
}
function Zo(e) {
  return e != null && typeof e == "object";
}
var Ko = "[object Symbol]";
function pt(e) {
  return typeof e == "symbol" || Zo(e) && bn(e) == Ko;
}
function qo(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = Array(o); ++n < o; )
    l[n] = t(e[n], n, e);
  return l;
}
var vt = Array.isArray, Dt = fe ? fe.prototype : void 0, Rt = Dt ? Dt.toString : void 0;
function _n(e) {
  if (typeof e == "string")
    return e;
  if (vt(e))
    return qo(e, _n) + "";
  if (pt(e))
    return Rt ? Rt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function kn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Jo = "[object AsyncFunction]", Qo = "[object Function]", Yo = "[object GeneratorFunction]", Xo = "[object Proxy]";
function es(e) {
  if (!kn(e))
    return !1;
  var t = bn(e);
  return t == Qo || t == Yo || t == Jo || t == Xo;
}
var nt = ft["__core-js_shared__"], Ht = function() {
  var e = /[^.]+$/.exec(nt && nt.keys && nt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ts(e) {
  return !!Ht && Ht in e;
}
var ns = Function.prototype, os = ns.toString;
function ss(e) {
  if (e != null) {
    try {
      return os.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var is = /[\\^$.*+?()[\]{}|]/g, ls = /^\[object .+?Constructor\]$/, as = Function.prototype, rs = Object.prototype, us = as.toString, cs = rs.hasOwnProperty, ds = RegExp(
  "^" + us.call(cs).replace(is, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function hs(e) {
  if (!kn(e) || ts(e))
    return !1;
  var t = es(e) ? ds : ls;
  return t.test(ss(e));
}
function fs(e, t) {
  return e?.[t];
}
function Cn(e, t) {
  var n = fs(e, t);
  return hs(n) ? n : void 0;
}
function ps(e, t) {
  return e === t || e !== e && t !== t;
}
var vs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gs = /^\w*$/;
function ws(e, t) {
  if (vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || pt(e) ? !0 : gs.test(e) || !vs.test(e) || t != null && e in Object(t);
}
var Se = Cn(Object, "create");
function ys() {
  this.__data__ = Se ? Se(null) : {}, this.size = 0;
}
function ms(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var bs = "__lodash_hash_undefined__", _s = Object.prototype, ks = _s.hasOwnProperty;
function Cs(e) {
  var t = this.__data__;
  if (Se) {
    var n = t[e];
    return n === bs ? void 0 : n;
  }
  return ks.call(t, e) ? t[e] : void 0;
}
var Ls = Object.prototype, Ss = Ls.hasOwnProperty;
function xs(e) {
  var t = this.__data__;
  return Se ? t[e] !== void 0 : Ss.call(t, e);
}
var Os = "__lodash_hash_undefined__";
function zs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Se && t === void 0 ? Os : t, this;
}
function oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oe.prototype.clear = ys;
oe.prototype.delete = ms;
oe.prototype.get = Cs;
oe.prototype.has = xs;
oe.prototype.set = zs;
function Ws() {
  this.__data__ = [], this.size = 0;
}
function Ze(e, t) {
  for (var n = e.length; n--; )
    if (ps(e[n][0], t))
      return n;
  return -1;
}
var Ps = Array.prototype, Is = Ps.splice;
function js(e) {
  var t = this.__data__, n = Ze(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Is.call(t, n, 1), --this.size, !0;
}
function Ts(e) {
  var t = this.__data__, n = Ze(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ms(e) {
  return Ze(this.__data__, e) > -1;
}
function Ns(e, t) {
  var n = this.__data__, o = Ze(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ge.prototype.clear = Ws;
ge.prototype.delete = js;
ge.prototype.get = Ts;
ge.prototype.has = Ms;
ge.prototype.set = Ns;
var $s = Cn(ft, "Map");
function Es() {
  this.size = 0, this.__data__ = {
    hash: new oe(),
    map: new ($s || ge)(),
    string: new oe()
  };
}
function As(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ke(e, t) {
  var n = e.__data__;
  return As(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Fs(e) {
  var t = Ke(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ds(e) {
  return Ke(this, e).get(e);
}
function Rs(e) {
  return Ke(this, e).has(e);
}
function Hs(e, t) {
  var n = Ke(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ie.prototype.clear = Es;
ie.prototype.delete = Fs;
ie.prototype.get = Ds;
ie.prototype.has = Rs;
ie.prototype.set = Hs;
var Vs = "Expected a function";
function gt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Vs);
  var n = function() {
    var o = arguments, l = t ? t.apply(this, o) : o[0], h = n.cache;
    if (h.has(l))
      return h.get(l);
    var u = e.apply(this, o);
    return n.cache = h.set(l, u) || h, u;
  };
  return n.cache = new (gt.Cache || ie)(), n;
}
gt.Cache = ie;
var Bs = 500;
function Us(e) {
  var t = gt(e, function(o) {
    return n.size === Bs && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Gs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zs = /\\(\\)?/g, Ks = Us(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gs, function(n, o, l, h) {
    t.push(l ? h.replace(Zs, "$1") : o || n);
  }), t;
});
function qs(e) {
  return e == null ? "" : _n(e);
}
function Js(e, t) {
  return vt(e) ? e : ws(e, t) ? [e] : Ks(qs(e));
}
function Qs(e) {
  if (typeof e == "string" || pt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ys(e, t) {
  t = Js(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Qs(t[n++])];
  return n && n == o ? e : void 0;
}
function Xs(e, t, n) {
  var o = e == null ? void 0 : Ys(e, t);
  return o === void 0 ? n : o;
}
function ei(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
const Ln = (e) => e === void 0, Vt = (e) => typeof e == "boolean", se = (e) => typeof e == "number", lt = (e) => typeof Element > "u" ? !1 : e instanceof Element, ti = (e) => ne(e) ? !Number.isNaN(Number(e)) : !1;
var Bt;
const le = typeof window < "u", ni = (e) => typeof e == "string", oi = () => {
};
le && ((Bt = window?.navigator) != null && Bt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wt(e) {
  return typeof e == "function" ? e() : s(e);
}
function si(e) {
  return e;
}
function yt(e) {
  return wo() ? (yo(e), !0) : !1;
}
function ii(e, t = !0) {
  de() ? Ue(e) : t ? e() : rn(e);
}
function Sn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, l = k(!1);
  let h = null;
  function u() {
    h && (clearTimeout(h), h = null);
  }
  function f() {
    l.value = !1, u();
  }
  function w(...y) {
    u(), l.value = !0, h = setTimeout(() => {
      l.value = !1, h = null, e(...y);
    }, wt(t));
  }
  return o && (l.value = !0, le && w()), yt(f), {
    isPending: go(l),
    start: w,
    stop: f
  };
}
function xn(e) {
  var t;
  const n = wt(e);
  return (t = n?.$el) != null ? t : n;
}
const On = le ? window : void 0;
function zn(...e) {
  let t, n, o, l;
  if (ni(e[0]) || Array.isArray(e[0]) ? ([n, o, l] = e, t = On) : [t, n, o, l] = e, !t)
    return oi;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const h = [], u = () => {
    h.forEach((g) => g()), h.length = 0;
  }, f = (g, S, x, j) => (g.addEventListener(S, x, j), () => g.removeEventListener(S, x, j)), w = Ge(() => [xn(t), wt(l)], ([g, S]) => {
    u(), g && h.push(...n.flatMap((x) => o.map((j) => f(g, x, j, S))));
  }, { immediate: !0, flush: "post" }), y = () => {
    w(), u();
  };
  return yt(y), y;
}
function li(e, t = !1) {
  const n = k(), o = () => n.value = !!e();
  return o(), ii(o, t), n;
}
const Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gt = "__vueuse_ssr_handlers__";
Ut[Gt] = Ut[Gt] || {};
var Zt = Object.getOwnPropertySymbols, ai = Object.prototype.hasOwnProperty, ri = Object.prototype.propertyIsEnumerable, ui = (e, t) => {
  var n = {};
  for (var o in e)
    ai.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Zt)
    for (var o of Zt(e))
      t.indexOf(o) < 0 && ri.call(e, o) && (n[o] = e[o]);
  return n;
};
function ci(e, t, n = {}) {
  const o = n, { window: l = On } = o, h = ui(o, ["window"]);
  let u;
  const f = li(() => l && "ResizeObserver" in l), w = () => {
    u && (u.disconnect(), u = void 0);
  }, y = Ge(() => xn(e), (S) => {
    w(), f.value && l && S && (u = new ResizeObserver(t), u.observe(S, h));
  }, { immediate: !0, flush: "post" }), g = () => {
    w(), y();
  };
  return yt(g), {
    isSupported: f,
    stop: g
  };
}
var Kt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Kt || (Kt = {}));
var di = Object.defineProperty, qt = Object.getOwnPropertySymbols, hi = Object.prototype.hasOwnProperty, fi = Object.prototype.propertyIsEnumerable, Jt = (e, t, n) => t in e ? di(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pi = (e, t) => {
  for (var n in t || (t = {}))
    hi.call(t, n) && Jt(e, n, t[n]);
  if (qt)
    for (var n of qt(t))
      fi.call(t, n) && Jt(e, n, t[n]);
  return e;
};
const vi = {
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
pi({
  linear: si
}, vi);
const Qt = {
  current: 0
}, Yt = k(0), Wn = 2e3, Xt = Symbol("elZIndexContextKey"), Pn = Symbol("zIndexContextKey"), gi = (e) => {
  const t = de() ? ee(Xt, Qt) : Qt, n = e || (de() ? ee(Pn, void 0) : void 0), o = m(() => {
    const u = s(n);
    return se(u) ? u : Wn;
  }), l = m(() => o.value + Yt.value), h = () => (t.current++, Yt.value = t.current, l.value);
  return !le && ee(Xt), {
    initialZIndex: o,
    currentZIndex: l,
    nextZIndex: h
  };
};
var wi = {
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
const yi = (e) => (t, n) => mi(t, n, s(e)), mi = (e, t, n) => Xs(n, e, e).replace(/\{(\w+)\}/g, (o, l) => {
  var h;
  return `${(h = t?.[l]) != null ? h : `{${l}}`}`;
}), bi = (e) => {
  const t = m(() => s(e).name), n = un(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: yi(e)
  };
}, In = Symbol("localeContextKey"), _i = (e) => {
  const t = e || ee(In, k());
  return bi(m(() => t.value || wi));
}, jn = "__epPropKey", H = (e) => e, ki = (e) => yn(e) && !!e[jn], Tn = (e, t) => {
  if (!yn(e) || ki(e))
    return e;
  const { values: n, required: o, default: l, type: h, validator: u } = e, w = {
    type: h,
    required: !!o,
    validator: n || u ? (y) => {
      let g = !1, S = [];
      if (n && (S = Array.from(n), At(e, "default") && S.push(l), g || (g = S.includes(y))), u && (g || (g = u(y))), !g && S.length > 0) {
        const x = [...new Set(S)].map((j) => JSON.stringify(j)).join(", ");
        mo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${x}], got value ${JSON.stringify(y)}.`);
      }
      return g;
    } : void 0,
    [jn]: !0
  };
  return At(e, "default") && (w.default = l), w;
}, we = (e) => ei(Object.entries(e).map(([t, n]) => [
  t,
  Tn(n, t)
])), Ci = ["", "default", "small", "large"], Li = Tn({
  type: String,
  values: Ci,
  required: !1
}), Si = Symbol("size"), xi = Symbol("emptyValuesContextKey"), Oi = we({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Le(e) ? !e() : !e
  }
}), en = (e) => Object.keys(e), Re = k();
function Mn(e, t = void 0) {
  return de() ? ee(gn, Re) : Re;
}
function Nn(e, t) {
  const n = Mn(), o = ht(e, m(() => {
    var f;
    return ((f = n.value) == null ? void 0 : f.namespace) || Me;
  })), l = _i(m(() => {
    var f;
    return (f = n.value) == null ? void 0 : f.locale;
  })), h = gi(m(() => {
    var f;
    return ((f = n.value) == null ? void 0 : f.zIndex) || Wn;
  })), u = m(() => {
    var f;
    return s(t) || ((f = n.value) == null ? void 0 : f.size) || "";
  });
  return $n(m(() => s(n) || {})), {
    ns: o,
    locale: l,
    zIndex: h,
    size: u
  };
}
const $n = (e, t, n = !1) => {
  var o;
  const l = !!de(), h = l ? Mn() : void 0, u = (o = void 0) != null ? o : l ? bo : void 0;
  if (!u)
    return;
  const f = m(() => {
    const w = s(e);
    return h?.value ? zi(h.value, w) : w;
  });
  return u(gn, f), u(In, m(() => f.value.locale)), u(wn, m(() => f.value.namespace)), u(Pn, m(() => f.value.zIndex)), u(Si, {
    size: m(() => f.value.size || "")
  }), u(xi, m(() => ({
    emptyValues: f.value.emptyValues,
    valueOnClear: f.value.valueOnClear
  }))), (n || !Re.value) && (Re.value = f.value), f;
}, zi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...en(e), ...en(t)])], o = {};
  for (const l of n)
    o[l] = t[l] !== void 0 ? t[l] : e[l];
  return o;
};
var qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function at(e, t = "px") {
  if (!e)
    return "";
  if (se(e) || ti(e))
    return `${e}${t}`;
  if (ne(e))
    return e;
}
const En = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), An = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Wi = we({
  size: {
    type: H([Number, String])
  },
  color: {
    type: String
  }
}), Pi = $({
  name: "ElIcon",
  inheritAttrs: !1
}), Ii = /* @__PURE__ */ $({
  ...Pi,
  props: Wi,
  setup(e) {
    const t = e, n = ht("icon"), o = m(() => {
      const { size: l, color: h } = t;
      return !l && !h ? {} : {
        fontSize: Ln(l) ? void 0 : at(l),
        "--color": h
      };
    });
    return (l, h) => (_(), O("i", _o({
      class: s(n).b(),
      style: s(o)
    }, l.$attrs), [
      he(l.$slots, "default")
    ], 16));
  }
});
var ji = /* @__PURE__ */ qe(Ii, [["__file", "icon.vue"]]);
const He = En(ji);
/*! Element Plus Icons Vue v2.3.1 */
var Ti = /* @__PURE__ */ $({
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
}), Mi = Ti, Ni = /* @__PURE__ */ $({
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
}), Fn = Ni, $i = /* @__PURE__ */ $({
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
}), Ei = $i, Ai = /* @__PURE__ */ $({
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
}), Fi = Ai, Di = /* @__PURE__ */ $({
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
}), Ri = Di;
const Dn = H([
  String,
  Object,
  Function
]), Hi = {
  Close: Fn
}, Vi = {
  Close: Fn
}, Ve = {
  success: Fi,
  warning: Ri,
  error: Mi,
  info: Ei
}, Bi = (e) => e, Ne = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ui = we({
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
}), Gi = $({
  name: "ElBadge"
}), Zi = /* @__PURE__ */ $({
  ...Gi,
  props: Ui,
  setup(e, { expose: t }) {
    const n = e, o = ht("badge"), l = m(() => n.isDot ? "" : se(n.value) && se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), h = m(() => {
      var u, f, w, y, g;
      return [
        {
          backgroundColor: n.color,
          marginRight: at(-((f = (u = n.offset) == null ? void 0 : u[0]) != null ? f : 0)),
          marginTop: at((y = (w = n.offset) == null ? void 0 : w[1]) != null ? y : 0)
        },
        (g = n.badgeStyle) != null ? g : {}
      ];
    });
    return t({
      content: l
    }), (u, f) => (_(), O("div", {
      class: L(s(o).b())
    }, [
      he(u.$slots, "default"),
      d(ct, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: te(() => [
          Z(a("sup", {
            class: L([
              s(o).e("content"),
              s(o).em("content", u.type),
              s(o).is("fixed", !!u.$slots.default),
              s(o).is("dot", u.isDot),
              s(o).is("hide-zero", !u.showZero && n.value === 0),
              u.badgeClass
            ]),
            style: $e(s(h))
          }, [
            he(u.$slots, "content", { value: s(l) }, () => [
              T(I(s(l)), 1)
            ])
          ], 6), [
            [Ee, !u.hidden && (s(l) || u.isDot || u.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ki = /* @__PURE__ */ qe(Zi, [["__file", "badge.vue"]]);
const qi = En(Ki), Ji = we({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: H(Object)
  },
  size: Li,
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
  ...Oi
}), U = {};
$({
  name: "ElConfigProvider",
  props: Ji,
  setup(e, { slots: t }) {
    Ge(() => e.message, (o) => {
      Object.assign(U, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = $n(e);
    return () => he(t, "default", { config: n?.value });
  }
});
const Rn = ["success", "info", "warning", "error"], M = Bi({
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
}), Qi = we({
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
    type: Dn,
    default: M.icon
  },
  id: {
    type: String,
    default: M.id
  },
  message: {
    type: H([
      String,
      Object,
      Function
    ]),
    default: M.message
  },
  onClose: {
    type: H(Function),
    default: M.onClose
  },
  showClose: {
    type: Boolean,
    default: M.showClose
  },
  type: {
    type: String,
    values: Rn,
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
}), Yi = {
  destroy: () => !0
}, G = ko([]), Xi = (e) => {
  const t = G.findIndex((l) => l.id === e), n = G[t];
  let o;
  return t > 0 && (o = G[t - 1]), { current: n, prev: o };
}, el = (e) => {
  const { prev: t } = Xi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, tl = (e, t) => G.findIndex((o) => o.id === e) > 0 ? 16 : t, nl = $({
  name: "ElMessage"
}), ol = /* @__PURE__ */ $({
  ...nl,
  props: Qi,
  emits: Yi,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Vi, { ns: l, zIndex: h } = Nn("message"), { currentZIndex: u, nextZIndex: f } = h, w = k(), y = k(!1), g = k(0);
    let S;
    const x = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), j = m(() => {
      const W = n.type;
      return { [l.bm("icon", W)]: W && Ve[W] };
    }), E = m(() => n.icon || Ve[n.type] || ""), v = m(() => el(n.id)), b = m(() => tl(n.id, n.offset) + v.value), z = m(() => g.value + b.value), A = m(() => ({
      top: `${b.value}px`,
      zIndex: u.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: S } = Sn(() => {
        F();
      }, n.duration));
    }
    function K() {
      S?.();
    }
    function F() {
      y.value = !1;
    }
    function ae({ code: W }) {
      W === Ne.esc && F();
    }
    return Ue(() => {
      C(), f(), y.value = !0;
    }), Ge(() => n.repeatNum, () => {
      K(), C();
    }), zn(document, "keydown", ae), ci(w, () => {
      g.value = w.value.getBoundingClientRect().height;
    }), t({
      visible: y,
      bottom: z,
      close: F
    }), (W, ye) => (_(), q(ct, {
      name: s(l).b("fade"),
      onBeforeLeave: W.onClose,
      onAfterLeave: (me) => W.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        Z(a("div", {
          id: W.id,
          ref_key: "messageRef",
          ref: w,
          class: L([
            s(l).b(),
            { [s(l).m(W.type)]: W.type },
            s(l).is("center", W.center),
            s(l).is("closable", W.showClose),
            s(l).is("plain", W.plain),
            W.customClass
          ]),
          style: $e(s(A)),
          role: "alert",
          onMouseenter: K,
          onMouseleave: C
        }, [
          W.repeatNum > 1 ? (_(), q(s(qi), {
            key: 0,
            value: W.repeatNum,
            type: s(x),
            class: L(s(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : R("v-if", !0),
          s(E) ? (_(), q(s(He), {
            key: 1,
            class: L([s(l).e("icon"), s(j)])
          }, {
            default: te(() => [
              (_(), q(cn(s(E))))
            ]),
            _: 1
          }, 8, ["class"])) : R("v-if", !0),
          he(W.$slots, "default", {}, () => [
            W.dangerouslyUseHTMLString ? (_(), O(dt, { key: 1 }, [
              R(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: L(s(l).e("content")),
                innerHTML: W.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), O("p", {
              key: 0,
              class: L(s(l).e("content"))
            }, I(W.message), 3))
          ]),
          W.showClose ? (_(), q(s(He), {
            key: 2,
            class: L(s(l).e("closeBtn")),
            onClick: ce(F, ["stop"])
          }, {
            default: te(() => [
              d(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : R("v-if", !0)
        ], 46, ["id"]), [
          [Ee, y.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var sl = /* @__PURE__ */ qe(ol, [["__file", "message.vue"]]);
let il = 1;
const Hn = (e) => {
  const t = !e || ne(e) || Ce(e) || Le(e) ? { message: e } : e, n = {
    ...M,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ne(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    lt(o) || (o = document.body), n.appendTo = o;
  }
  return Vt(U.grouping) && !n.grouping && (n.grouping = U.grouping), se(U.duration) && n.duration === 3e3 && (n.duration = U.duration), se(U.offset) && n.offset === 16 && (n.offset = U.offset), Vt(U.showClose) && !n.showClose && (n.showClose = U.showClose), n;
}, ll = (e) => {
  const t = G.indexOf(e);
  if (t === -1)
    return;
  G.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, al = ({ appendTo: e, ...t }, n) => {
  const o = `message_${il++}`, l = t.onClose, h = document.createElement("div"), u = {
    ...t,
    id: o,
    onClose: () => {
      l?.(), ll(g);
    },
    onDestroy: () => {
      Ae(null, h);
    }
  }, f = d(sl, u, Le(u.message) || Ce(u.message) ? {
    default: Le(u.message) ? u.message : () => u.message
  } : null);
  f.appContext = n || pe._context, Ae(f, h), e.appendChild(h.firstElementChild);
  const w = f.component, g = {
    id: o,
    vnode: f,
    vm: w,
    handler: {
      close: () => {
        w.exposed.visible.value = !1;
      }
    },
    props: f.component.props
  };
  return g;
}, pe = (e = {}, t) => {
  if (!le)
    return { close: () => {
    } };
  const n = Hn(e);
  if (n.grouping && G.length) {
    const l = G.find(({ vnode: h }) => {
      var u;
      return ((u = h.props) == null ? void 0 : u.message) === n.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = n.type, l.handler;
  }
  if (se(U.max) && G.length >= U.max)
    return { close: () => {
    } };
  const o = al(n, t);
  return G.push(o), o.handler;
};
Rn.forEach((e) => {
  pe[e] = (t = {}, n) => {
    const o = Hn(t);
    return pe({ ...o, type: e }, n);
  };
});
function rl(e) {
  for (const t of G)
    (!e || e === t.props.type) && t.handler.close();
}
pe.closeAll = rl;
pe._context = null;
const ul = An(pe, "$message"), Vn = [
  "success",
  "info",
  "warning",
  "error"
], cl = we({
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
    type: Dn
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
    values: [...Vn, ""],
    default: ""
  },
  zIndex: Number
}), dl = {
  destroy: () => !0
}, hl = $({
  name: "ElNotification"
}), fl = /* @__PURE__ */ $({
  ...hl,
  props: cl,
  emits: dl,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: l } = Nn("notification"), { nextZIndex: h, currentZIndex: u } = l, { Close: f } = Hi, w = k(!1);
    let y;
    const g = m(() => {
      const C = n.type;
      return C && Ve[n.type] ? o.m(C) : "";
    }), S = m(() => n.type && Ve[n.type] || n.icon), x = m(() => n.position.endsWith("right") ? "right" : "left"), j = m(() => n.position.startsWith("top") ? "top" : "bottom"), E = m(() => {
      var C;
      return {
        [j.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : u.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: y } = Sn(() => {
        w.value && z();
      }, n.duration));
    }
    function b() {
      y?.();
    }
    function z() {
      w.value = !1;
    }
    function A({ code: C }) {
      C === Ne.delete || C === Ne.backspace ? b() : C === Ne.esc ? w.value && z() : v();
    }
    return Ue(() => {
      v(), h(), w.value = !0;
    }), zn(document, "keydown", A), t({
      visible: w,
      close: z
    }), (C, K) => (_(), q(ct, {
      name: s(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (F) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        Z(a("div", {
          id: C.id,
          class: L([s(o).b(), C.customClass, s(x)]),
          style: $e(s(E)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: v,
          onClick: C.onClick
        }, [
          s(S) ? (_(), q(s(He), {
            key: 0,
            class: L([s(o).e("icon"), s(g)])
          }, {
            default: te(() => [
              (_(), q(cn(s(S))))
            ]),
            _: 1
          }, 8, ["class"])) : R("v-if", !0),
          a("div", {
            class: L(s(o).e("group"))
          }, [
            a("h2", {
              class: L(s(o).e("title")),
              textContent: I(C.title)
            }, null, 10, ["textContent"]),
            Z(a("div", {
              class: L(s(o).e("content")),
              style: $e(C.title ? void 0 : { margin: 0 })
            }, [
              he(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (_(), O(dt, { key: 1 }, [
                  R(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), O("p", { key: 0 }, I(C.message), 1))
              ])
            ], 6), [
              [Ee, C.message]
            ]),
            C.showClose ? (_(), q(s(He), {
              key: 0,
              class: L(s(o).e("closeBtn")),
              onClick: ce(z, ["stop"])
            }, {
              default: te(() => [
                d(s(f))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : R("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ee, w.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var pl = /* @__PURE__ */ qe(fl, [["__file", "notification.vue"]]);
const Be = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, rt = 16;
let vl = 1;
const ve = function(e = {}, t) {
  if (!le)
    return { close: () => {
    } };
  (ne(e) || Ce(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Be[n].forEach(({ vm: g }) => {
    var S;
    o += (((S = g.el) == null ? void 0 : S.offsetHeight) || 0) + rt;
  }), o += rt;
  const l = `notification_${vl++}`, h = e.onClose, u = {
    ...e,
    offset: o,
    id: l,
    onClose: () => {
      gl(l, n, h);
    }
  };
  let f = document.body;
  lt(e.appendTo) ? f = e.appendTo : ne(e.appendTo) && (f = document.querySelector(e.appendTo)), lt(f) || (f = document.body);
  const w = document.createElement("div"), y = d(pl, u, Le(u.message) ? u.message : Ce(u.message) ? () => u.message : null);
  return y.appContext = Ln(t) ? ve._context : t, y.props.onDestroy = () => {
    Ae(null, w);
  }, Ae(y, w), Be[n].push({ vm: y }), f.appendChild(w.firstElementChild), {
    close: () => {
      y.component.exposed.visible.value = !1;
    }
  };
};
Vn.forEach((e) => {
  ve[e] = (t = {}, n) => ((ne(t) || Ce(t)) && (t = {
    message: t
  }), ve({ ...t, type: e }, n));
});
function gl(e, t, n) {
  const o = Be[t], l = o.findIndex(({ vm: y }) => {
    var g;
    return ((g = y.component) == null ? void 0 : g.props.id) === e;
  });
  if (l === -1)
    return;
  const { vm: h } = o[l];
  if (!h)
    return;
  n?.(h);
  const u = h.el.offsetHeight, f = t.split("-")[0];
  o.splice(l, 1);
  const w = o.length;
  if (!(w < 1))
    for (let y = l; y < w; y++) {
      const { el: g, component: S } = o[y].vm, x = Number.parseInt(g.style[f], 10) - u - rt;
      S.props.offset = x;
    }
}
function wl() {
  for (const e of Object.values(Be))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ve.closeAll = wl;
ve._context = null;
const yl = An(ve, "$notify"), P = {
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
      showClose: h = !1
    } = e;
    o === "center" ? ul({
      message: t,
      type: n,
      duration: l,
      showClose: h,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : yl({
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
};
var ut;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(ut || (ut = {}));
async function ml() {
  return r("plugin:path|resolve_directory", {
    directory: ut.AppCache
  });
}
async function bl(...e) {
  return r("plugin:path|join", { paths: e });
}
async function tn(e, t) {
  await r("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const _l = () => ({
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
}), kl = (e) => e ? /^https?:\/\//i.test(e) ? e : zo(e) : "", Cl = () => r("wallpaper_get_config"), ot = (e) => r("wallpaper_save_config", { config: e }), nn = () => r("wallpaper_get_status"), on = (e) => r("wallpaper_scan_folder", { path: e }), Ll = (e) => r("wallpaper_set_fixed_image", { path: e }), Sl = () => r("wallpaper_switch_now"), xl = (e) => r("wallpaper_fetch_wallhaven", { params: e }), Ol = (e) => r("wallpaper_set_wallhaven_image", { wallpaper: e }), zl = (e) => r("wallpaper_download_wallhaven_image", { wallpaper: e }), Wl = () => r("wallpaper_clear_cache"), Pl = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), Il = async () => {
  try {
    await r("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!Pl(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await ml(), t = await bl(e, "wallpaper-switcher");
  try {
    await tn(t);
  } catch {
    await tn(e);
  }
};
var jl = {
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
function Tl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ml(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], l = [], h = t.theme || n.theme;
  switch (h) {
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
var Nl = Symbol("icon-context");
function V(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(h) {
      var u = Tl(), f = ee(Nl, jl);
      return function() {
        var w = h.size, y = h.strokeWidth, g = h.strokeLinecap, S = h.strokeLinejoin, x = h.theme, j = h.fill, E = h.spin, v = Ml(u, {
          size: w,
          strokeWidth: y,
          strokeLinecap: g,
          strokeLinejoin: S,
          theme: x,
          fill: j
        }, f), b = [f.prefix + "-icon"];
        return b.push(f.prefix + "-icon-" + e), t && f.rtl && b.push(f.prefix + "-icon-rtl"), E && b.push(f.prefix + "-icon-spin"), d("span", {
          class: b.join(" ")
        }, [n(v)]);
      };
    }
  };
  return o;
}
const $l = V("back", !0, function(e) {
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
}), je = V("close-small", !1, function(e) {
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
}), El = V("computer", !1, function(e) {
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
}), Al = V("delete", !1, function(e) {
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
}), Fl = V("download", !1, function(e) {
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
}), sn = V("folder-open", !0, function(e) {
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
}), Dl = V("lightning", !0, function(e) {
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
}), st = V("picture", !0, function(e) {
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
}), Rl = V("picture-album", !0, function(e) {
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
}), Hl = V("preview-open", !1, function(e) {
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
}), ln = V("refresh", !0, function(e) {
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
}), Vl = V("save", !0, function(e) {
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
}), an = V("search", !0, function(e) {
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
}), Bl = { class: "wallpaper-window" }, Ul = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Gl = {
  key: 0,
  class: "title"
}, Zl = {
  key: 1,
  class: "title"
}, Kl = {
  key: 2,
  class: "window-actions"
}, ql = {
  key: 3,
  class: "window-actions"
}, Jl = {
  class: "source-toggle",
  role: "tablist",
  "aria-label": "壁纸来源切换"
}, Ql = {
  key: 0,
  class: "unsupported"
}, Yl = { class: "top-panel" }, Xl = { class: "preview" }, ea = ["src"], ta = {
  key: 1,
  class: "preview-empty"
}, na = { class: "status-panel" }, oa = { class: "status-row" }, sa = { class: "status-row" }, ia = { class: "status-row" }, la = { class: "status-actions" }, aa = ["disabled"], ra = { class: "card settings-card" }, ua = { class: "form-row mode-row" }, ca = { class: "segmented three" }, da = { class: "form-row fixed-row" }, ha = { class: "form-row folder-row" }, fa = { class: "hint-row" }, pa = { class: "form-row wallhaven-row" }, va = { class: "segmented source" }, ga = { class: "hint-row" }, wa = { class: "card rules-card" }, ya = { class: "rules-line" }, ma = { class: "switch-label" }, ba = { class: "number-label" }, _a = { class: "segmented mini" }, ka = { class: "rules-line" }, Ca = { class: "segmented fit" }, La = { class: "checkbox-label" }, Sa = { class: "footer-card" }, xa = { class: "cache-info" }, Oa = { class: "footer-actions" }, za = ["disabled"], Wa = ["disabled"], Pa = ["disabled"], Ia = {
  key: 2,
  class: "wallhaven-view"
}, ja = { class: "filters filters--preview-style" }, Ta = { class: "search-box wallhaven-search" }, Ma = {
  class: "wallhaven-tabs",
  role: "tablist",
  "aria-label": "壁纸分类切换"
}, Na = ["disabled"], $a = ["disabled"], Ea = ["disabled"], Aa = ["disabled"], Fa = { class: "grid-wrap" }, Da = {
  key: 0,
  class: "empty-state"
}, Ra = {
  key: 1,
  class: "empty-state error-state"
}, Ha = {
  key: 2,
  class: "empty-state"
}, Va = {
  key: 3,
  class: "wallpaper-grid"
}, Ba = ["onClick"], Ua = {
  key: 0,
  class: "thumb-skeleton"
}, Ga = ["alt", "onLoad"], Za = ["onClick"], Ka = ["disabled", "onClick"], qa = ["disabled", "onClick"], Ja = { class: "pager" }, Qa = { class: "source-note" }, Ya = { class: "pager-actions" }, Xa = ["disabled"], er = ["disabled"], tr = { class: "preview-dialog" }, nr = { class: "preview-image-wrap" }, or = {
  key: 0,
  class: "preview-skeleton"
}, sr = {
  key: 1,
  class: "preview-error"
}, ir = ["src"], lr = ["disabled"], ar = ["disabled"], rr = /* @__PURE__ */ $({
  __name: "index",
  setup(e) {
    const t = pn(), n = k(_l()), o = k(null), l = k(null), h = k(!1), u = k(!1), f = k(!1), w = k("switcher"), y = k([]), g = k(1), S = k(1), x = k(!1), j = k(!1), E = k(""), v = k(""), b = k("general"), z = k("hot"), A = k(null), C = k(!1), K = k(!1), F = k(/* @__PURE__ */ new Set()), ae = k(/* @__PURE__ */ new Set()), W = k(!1), ye = k(!1), me = /* @__PURE__ */ new Map();
    let J = null, mt = null, bt = null, xe = 0;
    const _t = m(() => kl(o.value?.currentPath || n.value.lastAppliedPath)), kt = m(() => "2560 × 1440"), Bn = m(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), Un = m(() => {
      const c = o.value?.nextSwitchAt;
      if (!c) return "18 分钟后";
      const i = Math.max(0, c - Math.floor(Date.now() / 1e3));
      return i < 60 ? `${i} 秒后` : `${Math.ceil(i / 60)} 分钟后`;
    }), Gn = m(() => {
      const c = o.value?.cacheSizeBytes ?? 0;
      return c > 0 ? vo(c) : "320 MB";
    }), Ct = m(() => l.value ? `检测到 ${l.value.count} 张可用图片` : "检测到 128 张可用图片");
    m(() => "2560×1440");
    const Zn = m(() => z.value === "hot" ? "Hot" : "Toplist"), Je = m(() => y.value.slice(0, 8)), Kn = (c) => {
      const i = c.trim(), p = i.toLocaleLowerCase(), N = {
        natural: "nature",
        naturally: "nature",
        nature: "nature",
        landscape: "nature landscape",
        scenery: "nature landscape",
        自然: "nature",
        风景: "nature landscape",
        山: "mountain",
        山脉: "mountain",
        雪山: "snow mountain",
        湖: "lake",
        森林: "forest",
        树林: "forest",
        海: "ocean",
        海边: "beach",
        天空: "sky",
        云: "clouds",
        日落: "sunset",
        日出: "sunrise",
        城市: "city",
        建筑: "architecture",
        星空: "stars",
        宇宙: "space",
        动漫: "anime",
        人物: "portrait",
        女孩: "girl"
      };
      return N[p] ? N[p] : i;
    }, qn = (c, i) => c.toLocaleLowerCase().split(/\s+/).filter(Boolean).includes(i) ? c : `${c} ${i}`, Jn = (c) => {
      const i = String(c).replace(/^Error:\s*/, "");
      return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(i) ? "Wallhaven 网络连接失败，请稍后重试或检查代理/网络。" : i.length > 120 ? `${i.slice(0, 120)}...` : i;
    }, Qn = m(() => {
      const c = Kn(v.value);
      return b.value === "nature" ? c ? qn(c, "nature") : "nature" : c || null;
    }), Yn = m(() => b.value), Lt = async () => {
      h.value = !0;
      try {
        const [c, i] = await Promise.all([
          Cl(),
          nn()
        ]);
        if (n.value = c, o.value = i, c.folderPath)
          try {
            l.value = await on(c.folderPath);
          } catch {
            l.value = null;
          }
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        h.value = !1;
      }
    }, Y = async () => {
      try {
        o.value = await nn();
      } catch (c) {
        P.msg(String(c), "error");
      }
    }, St = async () => {
      u.value = !0;
      try {
        await ot(n.value), await Y(), P.msg("壁纸设置已保存", "success");
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        u.value = !1;
      }
    }, Xn = async () => {
      const c = await Et({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof c == "string") {
        n.value.fixedImagePath = c, n.value.mode = "fixed";
        try {
          await Ll(c), await Lt(), P.msg("已设置固定壁纸", "success");
        } catch (i) {
          P.msg(String(i), "error");
        }
      }
    }, eo = async () => {
      const c = await Et({ multiple: !1, directory: !0 });
      typeof c == "string" && (n.value.folderPath = c, n.value.mode = "folder", await xt());
    }, xt = async () => {
      if (!n.value.folderPath) {
        P.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        l.value = await on(n.value.folderPath), l.value.count === 0 ? P.msg("文件夹中没有可用图片", "warning") : P.msg(Ct.value, "success");
      } catch (c) {
        P.msg(String(c), "error");
      }
    }, to = async () => {
      f.value = !0;
      try {
        await ot(n.value), await Sl(), await Y(), P.msg("壁纸已切换", "success");
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        f.value = !1;
      }
    }, no = async () => {
      if (!o.value?.currentPath) {
        P.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await St();
    }, Ot = async () => {
      v.value = "", b.value = n.value.wallhavenCategory || "general", z.value = n.value.wallhavenSource, g.value = 1, E.value = "", y.value = [], j.value = !1, w.value = "wallhaven", await re(1);
    }, oo = async () => {
      w.value = "switcher", Qe(), await Y();
    }, zt = (c) => {
      A.value = c, C.value = !0, K.value = !1;
    }, Qe = () => {
      A.value = null, C.value = !1, K.value = !1;
    }, so = () => {
      C.value = !1;
    }, io = () => {
      C.value = !1, K.value = !0;
    }, Oe = (c, i) => {
      const p = new Set(F.value);
      i ? p.add(c) : p.delete(c), F.value = p;
    }, lo = (c) => {
      const i = new Set(ae.value);
      i.add(c), ae.value = i;
    }, ao = (c, i) => {
      if (!(i instanceof HTMLImageElement)) {
        me.delete(c.id);
        return;
      }
      if (me.set(c.id, i), !J) {
        i.src = c.thumbs.large;
        return;
      }
      i.dataset.src = c.thumbs.large, J.observe(i);
    }, ro = () => {
      ae.value = /* @__PURE__ */ new Set(), me.clear();
    }, uo = async () => {
      n.value.wallhavenQuery = v.value.trim() || null, n.value.wallhavenCategory = b.value, n.value.wallhavenSource = z.value, n.value.mode = "wallhaven", await ot(n.value);
    }, re = async (c = g.value) => {
      const i = ++xe;
      x.value = !0, E.value = "", y.value = [], ro();
      try {
        await uo();
        const p = await xl({
          source: z.value,
          page: c,
          query: Qn.value,
          category: Yn.value
        });
        if (i !== xe) return;
        y.value = p.data, g.value = p.page, S.value = Math.max(1, p.lastPage), j.value = !0, await rn();
        for (const N of me.values())
          J && J.observe(N);
      } catch (p) {
        if (i !== xe) return;
        y.value = [], E.value = Jn(p), P.msg(E.value, "error");
      } finally {
        i === xe && (x.value = !1);
      }
    }, Ye = () => re(1), ze = async (c) => {
      z.value = c, await re(1);
    }, We = async (c) => {
      b.value = c, await re(1);
    }, Wt = async (c) => {
      Oe(c.id, !0);
      try {
        P.msg("正在设置壁纸...", "info"), await Ol(c), await Y(), P.msg("壁纸已设置", "success");
      } catch (i) {
        P.msg(String(i), "error");
      } finally {
        Oe(c.id, !1);
      }
    }, Pt = async (c) => {
      Oe(c.id, !0);
      try {
        P.msg("正在下载壁纸...", "info"), await zl(c), await Y(), P.msg("壁纸已下载到缓存", "success");
      } catch (i) {
        P.msg(String(i), "error");
      } finally {
        Oe(c.id, !1);
      }
    }, co = async () => {
      g.value <= 1 || await re(g.value - 1);
    }, ho = async () => {
      g.value >= S.value || await re(g.value + 1);
    }, fo = async () => {
      W.value = !0;
      try {
        await Wl(), await Y(), P.msg("缓存已清理", "success");
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        W.value = !1;
      }
    }, po = async () => {
      ye.value = !0;
      try {
        await Il();
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        ye.value = !1;
      }
    }, It = async () => {
      await t.close();
    }, vo = (c) => c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / 1024 / 1024).toFixed(1)} MB` : `${(c / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return Ue(async () => {
      J = new IntersectionObserver(
        (c) => {
          for (const i of c) {
            if (!i.isIntersecting) continue;
            const p = i.target, N = p.dataset.src;
            N && p.src !== N && (p.src = N), J?.unobserve(p);
          }
        },
        { root: null, rootMargin: "120px" }
      ), await Lt(), mt = await Fe("wallpaper-switcher-changed", Y), bt = await Fe("wallpaper-switcher-error", (c) => {
        P.msg(c.payload?.message || "定时切换失败", "error");
      });
    }), Co(() => {
      J?.disconnect(), J = null, mt?.(), bt?.();
    }), (c, i) => (_(), O("main", Bl, [
      a("header", Ul, [
        s(w) === "switcher" ? (_(), O("div", Gl, [
          d(s(st), { size: 20 }),
          i[28] || (i[28] = a(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ])) : (_(), O("div", Zl, [
          a("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: oo
          }, [
            d(s($l), { size: 22 })
          ]),
          i[29] || (i[29] = a(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ])),
        s(w) === "switcher" ? (_(), O("div", Kl, [
          a("button", {
            type: "button",
            class: "icon-btn online-entry-btn",
            title: "打开 Wallhaven 壁纸",
            onClick: Ot
          }, [
            d(s(Rl), { size: 20 })
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: It
          }, [
            d(s(je), { size: 22 })
          ])
        ])) : (_(), O("div", ql, [
          a("div", Jl, [
            a(
              "div",
              {
                class: L(["seg-tab", { active: s(z) === "hot", disabled: s(x) }]),
                role: "tab",
                tabindex: "0",
                onClick: i[0] || (i[0] = (p) => !s(x) && ze("hot")),
                onKeydown: i[1] || (i[1] = Xe(ce((p) => !s(x) && ze("hot"), ["prevent"]), ["enter"]))
              },
              " 热门 ",
              34
              /* CLASS, NEED_HYDRATION */
            ),
            a(
              "div",
              {
                class: L(["seg-tab", { active: s(z) === "toplist", disabled: s(x) }]),
                role: "tab",
                tabindex: "0",
                onClick: i[2] || (i[2] = (p) => !s(x) && ze("toplist")),
                onKeydown: i[3] || (i[3] = Xe(ce((p) => !s(x) && ze("toplist"), ["prevent"]), ["enter"]))
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
            onClick: It
          }, [
            d(s(je), { size: 22 })
          ])
        ]))
      ]),
      s(o) && !s(o).supported ? (_(), O("section", Ql, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : R("v-if", !0),
      s(w) === "switcher" ? (_(), O(
        "div",
        {
          key: 1,
          class: L(["content", { dimmed: s(h) }])
        },
        [
          a("section", Yl, [
            a("div", Xl, [
              s(_t) ? (_(), O("img", {
                key: 0,
                src: s(_t),
                alt: "当前壁纸预览"
              }, null, 8, ea)) : (_(), O("div", ta, [
                d(s(st), { size: 42 }),
                i[30] || (i[30] = a(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            a("div", na, [
              i[34] || (i[34] = a(
                "h2",
                null,
                "当前状态",
                -1
                /* HOISTED */
              )),
              a("div", oa, [
                i[31] || (i[31] = a(
                  "span",
                  null,
                  "来源：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  I(s(Bn)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", sa, [
                i[32] || (i[32] = a(
                  "span",
                  null,
                  "分辨率：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  I(s(kt)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", ia, [
                i[33] || (i[33] = a(
                  "span",
                  null,
                  "下次切换：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  I(s(Un)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", la, [
                a("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(f),
                  onClick: to
                }, [
                  d(s(Dl), { size: 17 }),
                  T(
                    " " + I(s(f) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, aa),
                a("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: no
                }, " 设为固定 ")
              ])
            ])
          ]),
          a("section", ra, [
            a("div", ua, [
              i[35] || (i[35] = a(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              a("div", ca, [
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).mode === "fixed" }),
                    onClick: i[4] || (i[4] = (p) => s(n).mode = "fixed")
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
                    onClick: i[5] || (i[5] = (p) => s(n).mode = "folder")
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
                    onClick: i[6] || (i[6] = (p) => s(n).mode = "wallhaven")
                  },
                  " Wallhaven 在线 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", da, [
              i[37] || (i[37] = a(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              Z(a(
                "input",
                {
                  "onUpdate:modelValue": i[7] || (i[7] = (p) => s(n).fixedImagePath = p),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers\\city.png",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Pe, s(n).fixedImagePath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Xn
              }, [
                d(s(st), { size: 16 }),
                i[36] || (i[36] = T(" 选择图片 "))
              ])
            ]),
            a("div", ha, [
              i[40] || (i[40] = a(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              Z(a(
                "input",
                {
                  "onUpdate:modelValue": i[8] || (i[8] = (p) => s(n).folderPath = p),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [Pe, s(n).folderPath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: eo
              }, [
                d(s(sn), { size: 16 }),
                i[38] || (i[38] = T(" 选择 "))
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: xt
              }, [
                d(s(ln), { size: 16 }),
                i[39] || (i[39] = T(" 扫描 "))
              ])
            ]),
            a(
              "div",
              fa,
              I(s(Ct)),
              1
              /* TEXT */
            ),
            a("div", pa, [
              i[42] || (i[42] = a(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              i[43] || (i[43] = a(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              a("div", va, [
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).wallhavenSource === "hot" }),
                    onClick: i[9] || (i[9] = (p) => s(n).wallhavenSource = "hot")
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
                    onClick: i[10] || (i[10] = (p) => s(n).wallhavenSource = "toplist")
                  },
                  " 排行榜 Toplist ",
                  2
                  /* CLASS */
                )
              ]),
              a("button", {
                type: "button",
                class: "tool-btn grid-open",
                onClick: Ot
              }, [
                d(s(an), { size: 16 }),
                i[41] || (i[41] = T(" 打开在线网格 "))
              ])
            ]),
            a("div", ga, [
              i[44] || (i[44] = a(
                "span",
                null,
                "屏幕匹配",
                -1
                /* HOISTED */
              )),
              a(
                "strong",
                null,
                I(s(kt)),
                1
                /* TEXT */
              )
            ])
          ]),
          a("section", wa, [
            i[52] || (i[52] = a(
              "h2",
              null,
              "切换规则",
              -1
              /* HOISTED */
            )),
            a("div", ya, [
              a("label", ma, [
                Z(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[11] || (i[11] = (p) => s(n).scheduleEnabled = p),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [jt, s(n).scheduleEnabled]
                ]),
                i[45] || (i[45] = a(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                )),
                i[46] || (i[46] = T(" 启用定时切换 "))
              ]),
              a("label", ba, [
                i[47] || (i[47] = T(" 每 ")),
                Z(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[12] || (i[12] = (p) => s(n).intervalMinutes = p),
                    type: "number",
                    min: "1",
                    max: "1440"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [
                    Pe,
                    s(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                i[48] || (i[48] = T(" 分钟 "))
              ]),
              i[49] || (i[49] = a(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              a("div", _a, [
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).order === "random" }),
                    onClick: i[13] || (i[13] = (p) => s(n).order = "random")
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
                    onClick: i[14] || (i[14] = (p) => s(n).order = "sequential")
                  },
                  " 顺序 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", ka, [
              i[51] || (i[51] = a(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              a("div", Ca, [
                a(
                  "button",
                  {
                    type: "button",
                    class: L({ active: s(n).fitMode === "fillCrop" }),
                    onClick: i[15] || (i[15] = (p) => s(n).fitMode = "fillCrop")
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
                    onClick: i[16] || (i[16] = (p) => s(n).fitMode = "fit")
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
                    onClick: i[17] || (i[17] = (p) => s(n).fitMode = "center")
                  },
                  " 居中 ",
                  2
                  /* CLASS */
                )
              ]),
              a("label", La, [
                Z(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[18] || (i[18] = (p) => s(n).autoRestore = p),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [jt, s(n).autoRestore]
                ]),
                i[50] || (i[50] = T(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          a("footer", Sa, [
            a("div", xa, [
              i[53] || (i[53] = a(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              i[54] || (i[54] = a(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              a(
                "span",
                null,
                I(s(Gn)),
                1
                /* TEXT */
              )
            ]),
            a("div", Oa, [
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(W),
                onClick: fo
              }, [
                d(s(Al), { size: 16 }),
                T(
                  " " + I(s(W) ? "清理中" : "清理缓存"),
                  1
                  /* TEXT */
                )
              ], 8, za),
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(ye),
                onClick: po
              }, [
                d(s(sn), { size: 16 }),
                T(
                  " " + I(s(ye) ? "打开中" : "打开缓存"),
                  1
                  /* TEXT */
                )
              ], 8, Wa),
              a("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(u),
                onClick: St
              }, [
                d(s(Vl), { size: 17 }),
                T(
                  " " + I(s(u) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, Pa)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (_(), O("div", Ia, [
        a("section", ja, [
          a("div", Ta, [
            d(s(an), {
              size: 22,
              class: "search-icon"
            }),
            Z(a(
              "input",
              {
                "onUpdate:modelValue": i[19] || (i[19] = (p) => un(v) ? v.value = p : null),
                type: "text",
                placeholder: "搜索关键词",
                onKeydown: Xe(Ye, ["enter"])
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [Pe, s(v)]
            ]),
            s(v) ? (_(), O("button", {
              key: 0,
              type: "button",
              class: "clear-btn",
              title: "清空",
              onClick: i[20] || (i[20] = (p) => v.value = "")
            }, [
              d(s(je), { size: 18 })
            ])) : R("v-if", !0)
          ]),
          a("div", Ma, [
            a("button", {
              type: "button",
              class: L({ active: s(b) === "general" }),
              disabled: s(x),
              onClick: i[21] || (i[21] = (p) => We("general"))
            }, " 通用 ", 10, Na),
            a("button", {
              type: "button",
              class: L({ active: s(b) === "anime" }),
              disabled: s(x),
              onClick: i[22] || (i[22] = (p) => We("anime"))
            }, " 动漫 ", 10, $a),
            a("button", {
              type: "button",
              class: L({ active: s(b) === "people" }),
              disabled: s(x),
              onClick: i[23] || (i[23] = (p) => We("people"))
            }, " 人物 ", 10, Ea),
            a("button", {
              type: "button",
              class: L({ active: s(b) === "nature" }),
              disabled: s(x),
              onClick: i[24] || (i[24] = (p) => We("nature"))
            }, " 自然 ", 10, Aa)
          ]),
          a("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: "刷新",
            onClick: Ye
          }, [
            d(s(ln), {
              size: 20,
              class: L({ spinning: s(x) })
            }, null, 8, ["class"])
          ])
        ]),
        a("section", Fa, [
          s(x) && s(Je).length === 0 ? (_(), O("div", Da, "正在加载 Wallhaven 壁纸...")) : s(E) ? (_(), O("div", Ra, [
            a(
              "span",
              null,
              I(s(E)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              onClick: Ye
            }, "重试")
          ])) : s(Je).length === 0 ? (_(), O("div", Ha, "暂无可用壁纸")) : (_(), O("div", Va, [
            (_(!0), O(
              dt,
              null,
              Lo(s(Je), (p) => (_(), O("article", {
                key: p.id,
                class: "wallpaper-card"
              }, [
                a("button", {
                  type: "button",
                  class: "thumb",
                  onClick: (N) => zt(p)
                }, [
                  s(ae).has(p.id) ? R("v-if", !0) : (_(), O("div", Ua)),
                  a("img", {
                    ref_for: !0,
                    ref: (N) => ao(p, N),
                    alt: p.resolution,
                    loading: "lazy",
                    onLoad: (N) => lo(p.id)
                  }, null, 40, Ga),
                  a(
                    "span",
                    null,
                    I(p.resolution),
                    1
                    /* TEXT */
                  )
                ], 8, Ba),
                a("div", {
                  class: "card-actions",
                  onClick: i[25] || (i[25] = ce(() => {
                  }, ["stop"]))
                }, [
                  a("button", {
                    type: "button",
                    title: "预览",
                    onClick: (N) => zt(p)
                  }, [
                    d(s(Hl), { size: 16 }),
                    i[55] || (i[55] = T(" 预览 "))
                  ], 8, Za),
                  a("button", {
                    type: "button",
                    title: "设为壁纸",
                    disabled: s(F).has(p.id),
                    onClick: (N) => Wt(p)
                  }, [
                    d(s(El), { size: 16 }),
                    T(
                      " " + I(s(F).has(p.id) ? "设置中" : "设为"),
                      1
                      /* TEXT */
                    )
                  ], 8, Ka),
                  a("button", {
                    type: "button",
                    title: "下载",
                    disabled: s(F).has(p.id),
                    onClick: (N) => Pt(p)
                  }, [
                    d(s(Fl), { size: 16 }),
                    i[56] || (i[56] = T(" 下载 "))
                  ], 8, qa)
                ])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        a("footer", Ja, [
          a(
            "span",
            null,
            "第 " + I(s(g)) + " 页",
            1
            /* TEXT */
          ),
          a(
            "span",
            Qa,
            "来源：" + I(s(Zn)) + " · SFW",
            1
            /* TEXT */
          ),
          a("div", Ya, [
            a("button", {
              type: "button",
              disabled: s(g) <= 1 || s(x),
              onClick: co
            }, "上一页", 8, Xa),
            a("button", {
              type: "button",
              disabled: s(g) >= s(S) || s(x),
              onClick: ho
            }, "下一页", 8, er)
          ])
        ])
      ])),
      s(A) ? (_(), O("div", {
        key: 3,
        class: "preview-modal",
        onClick: ce(Qe, ["self"])
      }, [
        a("div", tr, [
          a("header", null, [
            a(
              "strong",
              null,
              I(s(A).resolution),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "flat-icon",
              onClick: Qe
            }, [
              d(s(je), { size: 23 })
            ])
          ]),
          a("div", nr, [
            s(C) ? (_(), O("div", or, i[57] || (i[57] = [
              a(
                "span",
                null,
                "加载预览...",
                -1
                /* HOISTED */
              )
            ]))) : R("v-if", !0),
            s(K) ? (_(), O("div", sr, "预览加载失败")) : R("v-if", !0),
            a("img", {
              class: L({ ready: !s(C) && !s(K) }),
              src: s(A).path,
              alt: "壁纸预览",
              onLoad: so,
              onError: io
            }, null, 42, ir)
          ]),
          a("footer", null, [
            a("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(F).has(s(A).id),
              onClick: i[26] || (i[26] = (p) => Pt(s(A)))
            }, " 下载缓存 ", 8, lr),
            a("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(F).has(s(A).id),
              onClick: i[27] || (i[27] = (p) => Wt(s(A)))
            }, I(s(F).has(s(A).id) ? "设置中" : "设为壁纸"), 9, ar)
          ])
        ])
      ])) : R("v-if", !0)
    ]));
  }
}), ur = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, cr = /* @__PURE__ */ ur(rr, [["__scopeId", "data-v-bec04c77"]]), dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" }));
export {
  fr as activate
};
