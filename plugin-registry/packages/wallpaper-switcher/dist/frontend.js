import { getCurrentInstance as he, inject as ne, ref as W, computed as C, unref as o, readonly as hl, getCurrentScope as pl, onScopeDispose as wl, onMounted as je, nextTick as gn, watch as Ye, isRef as fn, warn as gl, provide as fl, defineComponent as x, createElementBlock as _, openBlock as y, mergeProps as vl, renderSlot as pe, createElementVNode as s, normalizeClass as O, createVNode as u, Transition as Ot, withCtx as le, withDirectives as De, normalizeStyle as He, createTextVNode as H, toDisplayString as g, vShow as Ve, shallowReactive as ml, createBlock as j, createCommentVNode as M, resolveDynamicComponent as vn, Fragment as q, withModifiers as xe, isVNode as ze, render as Be, onUnmounted as mn, renderList as Oe, withKeys as yn } from "vue";
import { useI18n as ie } from "vue-i18n";
const Qr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => Zr)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function yl(e, t, n, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? l : n === "a" ? l.call(e) : l ? l.value : t.get(e);
}
function bl(e, t, n, l, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ee;
const G = "__TAURI_TO_IPC_KEY__";
function kl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function h(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function _l(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Cl {
  get rid() {
    return yl(this, Ee, "f");
  }
  constructor(t) {
    Ee.set(this, void 0), bl(this, Ee, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return h("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ee = /* @__PURE__ */ new WeakMap();
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
    return new We(this.width * t, this.height * t);
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
class de {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof bn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof We ? this.size : this.size.toPhysical(t);
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
class kn {
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
    return new X(this.x * t, this.y * t);
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
class X {
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
    return new kn(this.x / t, this.y / t);
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
class Fe {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof kn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof X ? this.position : this.position.toPhysical(t);
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
var D;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(D || (D = {}));
async function _n(e, t) {
  await h("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Pe(e, t, n) {
  var l;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (l = n?.target) !== null && l !== void 0 ? l : { kind: "Any" };
  return h("plugin:event|listen", {
    event: e,
    target: a,
    handler: kl(t)
  }).then((i) => async () => _n(e, i));
}
async function Sl(e, t, n) {
  return Pe(e, (l) => {
    _n(e, l.id), t(l);
  }, n);
}
async function Ll(e, t) {
  await h("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Wl(e, t, n) {
  await h("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class $e extends Cl {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, l) {
    return h("plugin:image|new", {
      rgba: Ke(t),
      width: n,
      height: l
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
    return h("plugin:image|from_bytes", {
      bytes: Ke(t)
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
    return h("plugin:image|from_path", { path: t }).then((n) => new $e(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return h("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return h("plugin:image|size", { rid: this.rid });
  }
}
function Ke(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof $e ? e.rid : e;
}
var Ct;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ct || (Ct = {}));
class Pl {
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
var Rt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Rt || (Rt = {}));
function Cn() {
  return new Sn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function yt() {
  return h("plugin:window|get_all_windows").then((e) => e.map((t) => new Sn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const bt = ["tauri://created", "tauri://error"];
class Sn {
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
    var l;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || h("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (l = n.parent) === null || l === void 0 ? void 0 : l.label,
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
    return (n = (await yt()).find((l) => l.label === t)) !== null && n !== void 0 ? n : null;
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
      const l = this.listeners[t];
      l.splice(l.indexOf(n), 1);
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
      const l = this.listeners[t];
      l.splice(l.indexOf(n), 1);
    } : Sl(t, n, {
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
    if (bt.includes(t)) {
      for (const l of this.listeners[t] || [])
        l({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Ll(t, n);
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
  async emitTo(t, n, l) {
    if (bt.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: l
        });
      return;
    }
    return Wl(t, n, l);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return bt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return h("plugin:window|scale_factor", {
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
    return h("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new X(t));
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
    return h("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new X(t));
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
    return h("plugin:window|inner_size", {
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
    return h("plugin:window|outer_size", {
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
    return h("plugin:window|is_fullscreen", {
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
    return h("plugin:window|is_minimized", {
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
    return h("plugin:window|is_maximized", {
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
    return h("plugin:window|is_focused", {
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
    return h("plugin:window|is_decorated", {
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
    return h("plugin:window|is_resizable", {
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
    return h("plugin:window|is_maximizable", {
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
    return h("plugin:window|is_minimizable", {
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
    return h("plugin:window|is_closable", {
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
    return h("plugin:window|is_visible", {
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
    return h("plugin:window|title", {
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
    return h("plugin:window|theme", {
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
    return h("plugin:window|is_always_on_top", {
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
    return h("plugin:window|center", {
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
    return t && (t === Ct.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), h("plugin:window|request_user_attention", {
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
    return h("plugin:window|set_resizable", {
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
    return h("plugin:window|set_enabled", {
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
    return h("plugin:window|is_enabled", {
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
    return h("plugin:window|set_maximizable", {
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
    return h("plugin:window|set_minimizable", {
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
    return h("plugin:window|set_closable", {
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
    return h("plugin:window|set_title", {
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
    return h("plugin:window|maximize", {
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
    return h("plugin:window|unmaximize", {
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
    return h("plugin:window|toggle_maximize", {
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
    return h("plugin:window|minimize", {
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
    return h("plugin:window|unminimize", {
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
    return h("plugin:window|show", {
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
    return h("plugin:window|hide", {
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
    return h("plugin:window|close", {
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
    return h("plugin:window|destroy", {
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
    return h("plugin:window|set_decorations", {
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
    return h("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return h("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return h("plugin:window|set_effects", {
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
    return h("plugin:window|set_always_on_top", {
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
    return h("plugin:window|set_always_on_bottom", {
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
    return h("plugin:window|set_content_protected", {
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
    return h("plugin:window|set_size", {
      label: this.label,
      value: t instanceof de ? t : new de(t)
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
    return h("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof de ? t : t ? new de(t) : null
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
    return h("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof de ? t : t ? new de(t) : null
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
    function n(l) {
      return l ? { Logical: l } : null;
    }
    return h("plugin:window|set_size_constraints", {
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
    return h("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Fe ? t : new Fe(t)
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
    return h("plugin:window|set_fullscreen", {
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
    return h("plugin:window|set_focus", {
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
    return h("plugin:window|set_icon", {
      label: this.label,
      value: Ke(t)
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
    return h("plugin:window|set_skip_taskbar", {
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
    return h("plugin:window|set_cursor_grab", {
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
    return h("plugin:window|set_cursor_visible", {
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
    return h("plugin:window|set_cursor_icon", {
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
    return h("plugin:window|set_background_color", { color: t });
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
    return h("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Fe ? t : new Fe(t)
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
    return h("plugin:window|set_ignore_cursor_events", {
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
    return h("plugin:window|start_dragging", {
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
    return h("plugin:window|start_resize_dragging", {
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
    return h("plugin:window|set_badge_count", {
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
    return h("plugin:window|set_badge_label", {
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
    return h("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Ke(t) : void 0
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
    return h("plugin:window|set_progress_bar", {
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
    return h("plugin:window|set_visible_on_all_workspaces", {
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
    return h("plugin:window|set_title_bar_style", {
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
    return h("plugin:window|set_theme", {
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
    return this.listen(D.WINDOW_MOVED, (n) => {
      n.payload = new X(n.payload), t(n);
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
      const l = new Pl(n);
      await t(l), l.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(D.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new X(r.payload.position)
        }
      });
    }), l = await this.listen(D.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new X(r.payload.position)
        }
      });
    }), a = await this.listen(D.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new X(r.payload.position)
        }
      });
    }), i = await this.listen(D.DRAG_LEAVE, (r) => {
      t({ ...r, payload: { type: "leave" } });
    });
    return () => {
      n(), a(), l(), i();
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
    const n = await this.listen(D.WINDOW_FOCUS, (a) => {
      t({ ...a, payload: !0 });
    }), l = await this.listen(D.WINDOW_BLUR, (a) => {
      t({ ...a, payload: !1 });
    });
    return () => {
      n(), l();
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
var Dt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Dt || (Dt = {}));
var Ht;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ht || (Ht = {}));
var Vt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Vt || (Vt = {}));
async function Bt(e = {}) {
  return typeof e == "object" && Object.freeze(e), await h("plugin:dialog|open", { options: e });
}
const Ln = Symbol(), Ae = "el", $l = "is-", te = (e, t, n, l, a) => {
  let i = `${e}-${t}`;
  return n && (i += `-${n}`), l && (i += `__${l}`), a && (i += `--${a}`), i;
}, Wn = Symbol("namespaceContextKey"), zl = (e) => {
  const t = e || (he() ? ne(Wn, W(Ae)) : W(Ae));
  return C(() => o(t) || Ae);
}, Tt = (e, t) => {
  const n = zl(t);
  return {
    namespace: n,
    b: (d = "") => te(n.value, e, d, "", ""),
    e: (d) => d ? te(n.value, e, "", d, "") : "",
    m: (d) => d ? te(n.value, e, "", "", d) : "",
    be: (d, m) => d && m ? te(n.value, e, d, m, "") : "",
    em: (d, m) => d && m ? te(n.value, e, "", d, m) : "",
    bm: (d, m) => d && m ? te(n.value, e, d, "", m) : "",
    bem: (d, m, b) => d && m && b ? te(n.value, e, d, m, b) : "",
    is: (d, ...m) => {
      const b = m.length >= 1 ? m[0] : !0;
      return d && b ? `${$l}${d}` : "";
    },
    cssVar: (d) => {
      const m = {};
      for (const b in d)
        d[b] && (m[`--${n.value}-${b}`] = d[b]);
      return m;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const m = {};
      for (const b in d)
        d[b] && (m[`--${n.value}-${e}-${b}`] = d[b]);
      return m;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ol = Object.prototype.hasOwnProperty, Kt = (e, t) => Ol.call(e, t), Te = (e) => typeof e == "function", ae = (e) => typeof e == "string", Pn = (e) => e !== null && typeof e == "object";
var Tl = typeof global == "object" && global && global.Object === Object && global, Il = typeof self == "object" && self && self.Object === Object && self, It = Tl || Il || Function("return this")(), we = It.Symbol, $n = Object.prototype, jl = $n.hasOwnProperty, xl = $n.toString, Se = we ? we.toStringTag : void 0;
function Nl(e) {
  var t = jl.call(e, Se), n = e[Se];
  try {
    e[Se] = void 0;
    var l = !0;
  } catch {
  }
  var a = xl.call(e);
  return l && (t ? e[Se] = n : delete e[Se]), a;
}
var Ml = Object.prototype, Fl = Ml.toString;
function El(e) {
  return Fl.call(e);
}
var Al = "[object Null]", Rl = "[object Undefined]", Gt = we ? we.toStringTag : void 0;
function zn(e) {
  return e == null ? e === void 0 ? Rl : Al : Gt && Gt in Object(e) ? Nl(e) : El(e);
}
function Dl(e) {
  return e != null && typeof e == "object";
}
var Hl = "[object Symbol]";
function jt(e) {
  return typeof e == "symbol" || Dl(e) && zn(e) == Hl;
}
function Vl(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length, a = Array(l); ++n < l; )
    a[n] = t(e[n], n, e);
  return a;
}
var xt = Array.isArray, Ut = we ? we.prototype : void 0, Zt = Ut ? Ut.toString : void 0;
function On(e) {
  if (typeof e == "string")
    return e;
  if (xt(e))
    return Vl(e, On) + "";
  if (jt(e))
    return Zt ? Zt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Tn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Bl = "[object AsyncFunction]", Kl = "[object Function]", Gl = "[object GeneratorFunction]", Ul = "[object Proxy]";
function Zl(e) {
  if (!Tn(e))
    return !1;
  var t = zn(e);
  return t == Kl || t == Gl || t == Bl || t == Ul;
}
var kt = It["__core-js_shared__"], qt = function() {
  var e = /[^.]+$/.exec(kt && kt.keys && kt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ql(e) {
  return !!qt && qt in e;
}
var Jl = Function.prototype, Ql = Jl.toString;
function Yl(e) {
  if (e != null) {
    try {
      return Ql.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xl = /[\\^$.*+?()[\]{}|]/g, ea = /^\[object .+?Constructor\]$/, ta = Function.prototype, na = Object.prototype, la = ta.toString, aa = na.hasOwnProperty, oa = RegExp(
  "^" + la.call(aa).replace(Xl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sa(e) {
  if (!Tn(e) || ql(e))
    return !1;
  var t = Zl(e) ? oa : ea;
  return t.test(Yl(e));
}
function ia(e, t) {
  return e?.[t];
}
function In(e, t) {
  var n = ia(e, t);
  return sa(n) ? n : void 0;
}
function ra(e, t) {
  return e === t || e !== e && t !== t;
}
var ca = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ua = /^\w*$/;
function da(e, t) {
  if (xt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || jt(e) ? !0 : ua.test(e) || !ca.test(e) || t != null && e in Object(t);
}
var Ie = In(Object, "create");
function ha() {
  this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
}
function pa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wa = "__lodash_hash_undefined__", ga = Object.prototype, fa = ga.hasOwnProperty;
function va(e) {
  var t = this.__data__;
  if (Ie) {
    var n = t[e];
    return n === wa ? void 0 : n;
  }
  return fa.call(t, e) ? t[e] : void 0;
}
var ma = Object.prototype, ya = ma.hasOwnProperty;
function ba(e) {
  var t = this.__data__;
  return Ie ? t[e] !== void 0 : ya.call(t, e);
}
var ka = "__lodash_hash_undefined__";
function _a(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ie && t === void 0 ? ka : t, this;
}
function oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
oe.prototype.clear = ha;
oe.prototype.delete = pa;
oe.prototype.get = va;
oe.prototype.has = ba;
oe.prototype.set = _a;
function Ca() {
  this.__data__ = [], this.size = 0;
}
function Xe(e, t) {
  for (var n = e.length; n--; )
    if (ra(e[n][0], t))
      return n;
  return -1;
}
var Sa = Array.prototype, La = Sa.splice;
function Wa(e) {
  var t = this.__data__, n = Xe(t, e);
  if (n < 0)
    return !1;
  var l = t.length - 1;
  return n == l ? t.pop() : La.call(t, n, 1), --this.size, !0;
}
function Pa(e) {
  var t = this.__data__, n = Xe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function $a(e) {
  return Xe(this.__data__, e) > -1;
}
function za(e, t) {
  var n = this.__data__, l = Xe(n, e);
  return l < 0 ? (++this.size, n.push([e, t])) : n[l][1] = t, this;
}
function ve(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
ve.prototype.clear = Ca;
ve.prototype.delete = Wa;
ve.prototype.get = Pa;
ve.prototype.has = $a;
ve.prototype.set = za;
var Oa = In(It, "Map");
function Ta() {
  this.size = 0, this.__data__ = {
    hash: new oe(),
    map: new (Oa || ve)(),
    string: new oe()
  };
}
function Ia(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function et(e, t) {
  var n = e.__data__;
  return Ia(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ja(e) {
  var t = et(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xa(e) {
  return et(this, e).get(e);
}
function Na(e) {
  return et(this, e).has(e);
}
function Ma(e, t) {
  var n = et(this, e), l = n.size;
  return n.set(e, t), this.size += n.size == l ? 0 : 1, this;
}
function re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
re.prototype.clear = Ta;
re.prototype.delete = ja;
re.prototype.get = xa;
re.prototype.has = Na;
re.prototype.set = Ma;
var Fa = "Expected a function";
function Nt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fa);
  var n = function() {
    var l = arguments, a = t ? t.apply(this, l) : l[0], i = n.cache;
    if (i.has(a))
      return i.get(a);
    var r = e.apply(this, l);
    return n.cache = i.set(a, r) || i, r;
  };
  return n.cache = new (Nt.Cache || re)(), n;
}
Nt.Cache = re;
var Ea = 500;
function Aa(e) {
  var t = Nt(e, function(l) {
    return n.size === Ea && n.clear(), l;
  }), n = t.cache;
  return t;
}
var Ra = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Da = /\\(\\)?/g, Ha = Aa(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ra, function(n, l, a, i) {
    t.push(a ? i.replace(Da, "$1") : l || n);
  }), t;
});
function Va(e) {
  return e == null ? "" : On(e);
}
function Ba(e, t) {
  return xt(e) ? e : da(e, t) ? [e] : Ha(Va(e));
}
function Ka(e) {
  if (typeof e == "string" || jt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ga(e, t) {
  t = Ba(t, e);
  for (var n = 0, l = t.length; e != null && n < l; )
    e = e[Ka(t[n++])];
  return n && n == l ? e : void 0;
}
function Ua(e, t, n) {
  var l = e == null ? void 0 : Ga(e, t);
  return l === void 0 ? n : l;
}
function Za(e) {
  for (var t = -1, n = e == null ? 0 : e.length, l = {}; ++t < n; ) {
    var a = e[t];
    l[a[0]] = a[1];
  }
  return l;
}
const jn = (e) => e === void 0, Jt = (e) => typeof e == "boolean", se = (e) => typeof e == "number", St = (e) => typeof Element > "u" ? !1 : e instanceof Element, qa = (e) => ae(e) ? !Number.isNaN(Number(e)) : !1;
var Qt;
const ce = typeof window < "u", Ja = (e) => typeof e == "string", Qa = () => {
};
ce && ((Qt = window?.navigator) != null && Qt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Mt(e) {
  return typeof e == "function" ? e() : o(e);
}
function Ya(e) {
  return e;
}
function Ft(e) {
  return pl() ? (wl(e), !0) : !1;
}
function Xa(e, t = !0) {
  he() ? je(e) : t ? e() : gn(e);
}
function xn(e, t, n = {}) {
  const {
    immediate: l = !0
  } = n, a = W(!1);
  let i = null;
  function r() {
    i && (clearTimeout(i), i = null);
  }
  function c() {
    a.value = !1, r();
  }
  function p(...w) {
    r(), a.value = !0, i = setTimeout(() => {
      a.value = !1, i = null, e(...w);
    }, Mt(t));
  }
  return l && (a.value = !0, ce && p()), Ft(c), {
    isPending: hl(a),
    start: p,
    stop: c
  };
}
function Nn(e) {
  var t;
  const n = Mt(e);
  return (t = n?.$el) != null ? t : n;
}
const Mn = ce ? window : void 0;
function Fn(...e) {
  let t, n, l, a;
  if (Ja(e[0]) || Array.isArray(e[0]) ? ([n, l, a] = e, t = Mn) : [t, n, l, a] = e, !t)
    return Qa;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const i = [], r = () => {
    i.forEach((v) => v()), i.length = 0;
  }, c = (v, f, $, I) => (v.addEventListener(f, $, I), () => v.removeEventListener(f, $, I)), p = Ye(() => [Nn(t), Mt(a)], ([v, f]) => {
    r(), v && i.push(...n.flatMap(($) => l.map((I) => c(v, $, I, f))));
  }, { immediate: !0, flush: "post" }), w = () => {
    p(), r();
  };
  return Ft(w), w;
}
function eo(e, t = !1) {
  const n = W(), l = () => n.value = !!e();
  return l(), Xa(l, t), n;
}
const Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xt = "__vueuse_ssr_handlers__";
Yt[Xt] = Yt[Xt] || {};
var en = Object.getOwnPropertySymbols, to = Object.prototype.hasOwnProperty, no = Object.prototype.propertyIsEnumerable, lo = (e, t) => {
  var n = {};
  for (var l in e)
    to.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && en)
    for (var l of en(e))
      t.indexOf(l) < 0 && no.call(e, l) && (n[l] = e[l]);
  return n;
};
function ao(e, t, n = {}) {
  const l = n, { window: a = Mn } = l, i = lo(l, ["window"]);
  let r;
  const c = eo(() => a && "ResizeObserver" in a), p = () => {
    r && (r.disconnect(), r = void 0);
  }, w = Ye(() => Nn(e), (f) => {
    p(), c.value && a && f && (r = new ResizeObserver(t), r.observe(f, i));
  }, { immediate: !0, flush: "post" }), v = () => {
    p(), w();
  };
  return Ft(v), {
    isSupported: c,
    stop: v
  };
}
var tn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(tn || (tn = {}));
var oo = Object.defineProperty, nn = Object.getOwnPropertySymbols, so = Object.prototype.hasOwnProperty, io = Object.prototype.propertyIsEnumerable, ln = (e, t, n) => t in e ? oo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ro = (e, t) => {
  for (var n in t || (t = {}))
    so.call(t, n) && ln(e, n, t[n]);
  if (nn)
    for (var n of nn(t))
      io.call(t, n) && ln(e, n, t[n]);
  return e;
};
const co = {
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
ro({
  linear: Ya
}, co);
const an = {
  current: 0
}, on = W(0), En = 2e3, sn = Symbol("elZIndexContextKey"), An = Symbol("zIndexContextKey"), uo = (e) => {
  const t = he() ? ne(sn, an) : an, n = e || (he() ? ne(An, void 0) : void 0), l = C(() => {
    const r = o(n);
    return se(r) ? r : En;
  }), a = C(() => l.value + on.value), i = () => (t.current++, on.value = t.current, a.value);
  return !ce && ne(sn), {
    initialZIndex: l,
    currentZIndex: a,
    nextZIndex: i
  };
};
var ho = {
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
const po = (e) => (t, n) => wo(t, n, o(e)), wo = (e, t, n) => Ua(n, e, e).replace(/\{(\w+)\}/g, (l, a) => {
  var i;
  return `${(i = t?.[a]) != null ? i : `{${a}}`}`;
}), go = (e) => {
  const t = C(() => o(e).name), n = fn(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: po(e)
  };
}, Rn = Symbol("localeContextKey"), fo = (e) => {
  const t = e || ne(Rn, W());
  return go(C(() => t.value || ho));
}, Dn = "__epPropKey", V = (e) => e, vo = (e) => Pn(e) && !!e[Dn], Hn = (e, t) => {
  if (!Pn(e) || vo(e))
    return e;
  const { values: n, required: l, default: a, type: i, validator: r } = e, p = {
    type: i,
    required: !!l,
    validator: n || r ? (w) => {
      let v = !1, f = [];
      if (n && (f = Array.from(n), Kt(e, "default") && f.push(a), v || (v = f.includes(w))), r && (v || (v = r(w))), !v && f.length > 0) {
        const $ = [...new Set(f)].map((I) => JSON.stringify(I)).join(", ");
        gl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${$}], got value ${JSON.stringify(w)}.`);
      }
      return v;
    } : void 0,
    [Dn]: !0
  };
  return Kt(e, "default") && (p.default = a), p;
}, me = (e) => Za(Object.entries(e).map(([t, n]) => [
  t,
  Hn(n, t)
])), mo = ["", "default", "small", "large"], yo = Hn({
  type: String,
  values: mo,
  required: !1
}), bo = Symbol("size"), ko = Symbol("emptyValuesContextKey"), _o = me({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Te(e) ? !e() : !e
  }
}), rn = (e) => Object.keys(e), Ge = W();
function Vn(e, t = void 0) {
  return he() ? ne(Ln, Ge) : Ge;
}
function Bn(e, t) {
  const n = Vn(), l = Tt(e, C(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || Ae;
  })), a = fo(C(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), i = uo(C(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || En;
  })), r = C(() => {
    var c;
    return o(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return Kn(C(() => o(n) || {})), {
    ns: l,
    locale: a,
    zIndex: i,
    size: r
  };
}
const Kn = (e, t, n = !1) => {
  var l;
  const a = !!he(), i = a ? Vn() : void 0, r = (l = void 0) != null ? l : a ? fl : void 0;
  if (!r)
    return;
  const c = C(() => {
    const p = o(e);
    return i?.value ? Co(i.value, p) : p;
  });
  return r(Ln, c), r(Rn, C(() => c.value.locale)), r(Wn, C(() => c.value.namespace)), r(An, C(() => c.value.zIndex)), r(bo, {
    size: C(() => c.value.size || "")
  }), r(ko, C(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !Ge.value) && (Ge.value = c.value), c;
}, Co = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...rn(e), ...rn(t)])], l = {};
  for (const a of n)
    l[a] = t[a] !== void 0 ? t[a] : e[a];
  return l;
};
var tt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t)
    n[l] = a;
  return n;
};
function Lt(e, t = "px") {
  if (!e)
    return "";
  if (se(e) || qa(e))
    return `${e}${t}`;
  if (ae(e))
    return e;
}
const Gn = (e, t) => (e.install = (n) => {
  for (const l of [e, ...Object.values({})])
    n.component(l.name, l);
}, e), Un = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), So = me({
  size: {
    type: V([Number, String])
  },
  color: {
    type: String
  }
}), Lo = x({
  name: "ElIcon",
  inheritAttrs: !1
}), Wo = /* @__PURE__ */ x({
  ...Lo,
  props: So,
  setup(e) {
    const t = e, n = Tt("icon"), l = C(() => {
      const { size: a, color: i } = t;
      return !a && !i ? {} : {
        fontSize: jn(a) ? void 0 : Lt(a),
        "--color": i
      };
    });
    return (a, i) => (y(), _("i", vl({
      class: o(n).b(),
      style: o(l)
    }, a.$attrs), [
      pe(a.$slots, "default")
    ], 16));
  }
});
var Po = /* @__PURE__ */ tt(Wo, [["__file", "icon.vue"]]);
const Ue = Gn(Po);
/*! Element Plus Icons Vue v2.3.1 */
var $o = /* @__PURE__ */ x({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (y(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), zo = $o, Oo = /* @__PURE__ */ x({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (y(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Zn = Oo, To = /* @__PURE__ */ x({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (y(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Io = To, jo = /* @__PURE__ */ x({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (y(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), xo = jo, No = /* @__PURE__ */ x({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (y(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Mo = No;
const qn = V([
  String,
  Object,
  Function
]), Fo = {
  Close: Zn
}, Eo = {
  Close: Zn
}, Ze = {
  success: xo,
  warning: Mo,
  error: zo,
  info: Io
}, Ao = (e) => e, Re = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ro = me({
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
}), Do = x({
  name: "ElBadge"
}), Ho = /* @__PURE__ */ x({
  ...Do,
  props: Ro,
  setup(e, { expose: t }) {
    const n = e, l = Tt("badge"), a = C(() => n.isDot ? "" : se(n.value) && se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), i = C(() => {
      var r, c, p, w, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: Lt(-((c = (r = n.offset) == null ? void 0 : r[0]) != null ? c : 0)),
          marginTop: Lt((w = (p = n.offset) == null ? void 0 : p[1]) != null ? w : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: a
    }), (r, c) => (y(), _("div", {
      class: O(o(l).b())
    }, [
      pe(r.$slots, "default"),
      u(Ot, {
        name: `${o(l).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: le(() => [
          De(s("sup", {
            class: O([
              o(l).e("content"),
              o(l).em("content", r.type),
              o(l).is("fixed", !!r.$slots.default),
              o(l).is("dot", r.isDot),
              o(l).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: He(o(i))
          }, [
            pe(r.$slots, "content", { value: o(a) }, () => [
              H(g(o(a)), 1)
            ])
          ], 6), [
            [Ve, !r.hidden && (o(a) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Vo = /* @__PURE__ */ tt(Ho, [["__file", "badge.vue"]]);
const Bo = Gn(Vo), Ko = me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: V(Object)
  },
  size: yo,
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
  ..._o
}), Z = {};
x({
  name: "ElConfigProvider",
  props: Ko,
  setup(e, { slots: t }) {
    Ye(() => e.message, (l) => {
      Object.assign(Z, l ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Kn(e);
    return () => pe(t, "default", { config: n?.value });
  }
});
const Jn = ["success", "info", "warning", "error"], A = Ao({
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
}), Go = me({
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
    type: qn,
    default: A.icon
  },
  id: {
    type: String,
    default: A.id
  },
  message: {
    type: V([
      String,
      Object,
      Function
    ]),
    default: A.message
  },
  onClose: {
    type: V(Function),
    default: A.onClose
  },
  showClose: {
    type: Boolean,
    default: A.showClose
  },
  type: {
    type: String,
    values: Jn,
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
}), Uo = {
  destroy: () => !0
}, J = ml([]), Zo = (e) => {
  const t = J.findIndex((a) => a.id === e), n = J[t];
  let l;
  return t > 0 && (l = J[t - 1]), { current: n, prev: l };
}, qo = (e) => {
  const { prev: t } = Zo(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Jo = (e, t) => J.findIndex((l) => l.id === e) > 0 ? 16 : t, Qo = x({
  name: "ElMessage"
}), Yo = /* @__PURE__ */ x({
  ...Qo,
  props: Go,
  emits: Uo,
  setup(e, { expose: t }) {
    const n = e, { Close: l } = Eo, { ns: a, zIndex: i } = Bn("message"), { currentZIndex: r, nextZIndex: c } = i, p = W(), w = W(!1), v = W(0);
    let f;
    const $ = C(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), I = C(() => {
      const z = n.type;
      return { [a.bm("icon", z)]: z && Ze[z] };
    }), E = C(() => n.icon || Ze[n.type] || ""), d = C(() => qo(n.id)), m = C(() => Jo(n.id, n.offset) + d.value), b = C(() => v.value + m.value), R = C(() => ({
      top: `${m.value}px`,
      zIndex: r.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: f } = xn(() => {
        U();
      }, n.duration));
    }
    function Q() {
      f?.();
    }
    function U() {
      w.value = !1;
    }
    function ue({ code: z }) {
      z === Re.esc && U();
    }
    return je(() => {
      L(), c(), w.value = !0;
    }), Ye(() => n.repeatNum, () => {
      Q(), L();
    }), Fn(document, "keydown", ue), ao(p, () => {
      v.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: w,
      bottom: b,
      close: U
    }), (z, ye) => (y(), j(Ot, {
      name: o(a).b("fade"),
      onBeforeLeave: z.onClose,
      onAfterLeave: (be) => z.$emit("destroy"),
      persisted: ""
    }, {
      default: le(() => [
        De(s("div", {
          id: z.id,
          ref_key: "messageRef",
          ref: p,
          class: O([
            o(a).b(),
            { [o(a).m(z.type)]: z.type },
            o(a).is("center", z.center),
            o(a).is("closable", z.showClose),
            o(a).is("plain", z.plain),
            z.customClass
          ]),
          style: He(o(R)),
          role: "alert",
          onMouseenter: Q,
          onMouseleave: L
        }, [
          z.repeatNum > 1 ? (y(), j(o(Bo), {
            key: 0,
            value: z.repeatNum,
            type: o($),
            class: O(o(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : M("v-if", !0),
          o(E) ? (y(), j(o(Ue), {
            key: 1,
            class: O([o(a).e("icon"), o(I)])
          }, {
            default: le(() => [
              (y(), j(vn(o(E))))
            ]),
            _: 1
          }, 8, ["class"])) : M("v-if", !0),
          pe(z.$slots, "default", {}, () => [
            z.dangerouslyUseHTMLString ? (y(), _(q, { key: 1 }, [
              M(" Caution here, message could've been compromised, never use user's input as message "),
              s("p", {
                class: O(o(a).e("content")),
                innerHTML: z.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (y(), _("p", {
              key: 0,
              class: O(o(a).e("content"))
            }, g(z.message), 3))
          ]),
          z.showClose ? (y(), j(o(Ue), {
            key: 2,
            class: O(o(a).e("closeBtn")),
            onClick: xe(U, ["stop"])
          }, {
            default: le(() => [
              u(o(l))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : M("v-if", !0)
        ], 46, ["id"]), [
          [Ve, w.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Xo = /* @__PURE__ */ tt(Yo, [["__file", "message.vue"]]);
let es = 1;
const Qn = (e) => {
  const t = !e || ae(e) || ze(e) || Te(e) ? { message: e } : e, n = {
    ...A,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ae(n.appendTo)) {
    let l = document.querySelector(n.appendTo);
    St(l) || (l = document.body), n.appendTo = l;
  }
  return Jt(Z.grouping) && !n.grouping && (n.grouping = Z.grouping), se(Z.duration) && n.duration === 3e3 && (n.duration = Z.duration), se(Z.offset) && n.offset === 16 && (n.offset = Z.offset), Jt(Z.showClose) && !n.showClose && (n.showClose = Z.showClose), n;
}, ts = (e) => {
  const t = J.indexOf(e);
  if (t === -1)
    return;
  J.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ns = ({ appendTo: e, ...t }, n) => {
  const l = `message_${es++}`, a = t.onClose, i = document.createElement("div"), r = {
    ...t,
    id: l,
    onClose: () => {
      a?.(), ts(v);
    },
    onDestroy: () => {
      Be(null, i);
    }
  }, c = u(Xo, r, Te(r.message) || ze(r.message) ? {
    default: Te(r.message) ? r.message : () => r.message
  } : null);
  c.appContext = n || ge._context, Be(c, i), e.appendChild(i.firstElementChild);
  const p = c.component, v = {
    id: l,
    vnode: c,
    vm: p,
    handler: {
      close: () => {
        p.exposed.visible.value = !1;
      }
    },
    props: c.component.props
  };
  return v;
}, ge = (e = {}, t) => {
  if (!ce)
    return { close: () => {
    } };
  const n = Qn(e);
  if (n.grouping && J.length) {
    const a = J.find(({ vnode: i }) => {
      var r;
      return ((r = i.props) == null ? void 0 : r.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (se(Z.max) && J.length >= Z.max)
    return { close: () => {
    } };
  const l = ns(n, t);
  return J.push(l), l.handler;
};
Jn.forEach((e) => {
  ge[e] = (t = {}, n) => {
    const l = Qn(t);
    return ge({ ...l, type: e }, n);
  };
});
function ls(e) {
  for (const t of J)
    (!e || e === t.props.type) && t.handler.close();
}
ge.closeAll = ls;
ge._context = null;
const as = Un(ge, "$message"), Yn = [
  "success",
  "info",
  "warning",
  "error"
], os = me({
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
    values: [...Yn, ""],
    default: ""
  },
  zIndex: Number
}), ss = {
  destroy: () => !0
}, is = x({
  name: "ElNotification"
}), rs = /* @__PURE__ */ x({
  ...is,
  props: os,
  emits: ss,
  setup(e, { expose: t }) {
    const n = e, { ns: l, zIndex: a } = Bn("notification"), { nextZIndex: i, currentZIndex: r } = a, { Close: c } = Fo, p = W(!1);
    let w;
    const v = C(() => {
      const L = n.type;
      return L && Ze[n.type] ? l.m(L) : "";
    }), f = C(() => n.type && Ze[n.type] || n.icon), $ = C(() => n.position.endsWith("right") ? "right" : "left"), I = C(() => n.position.startsWith("top") ? "top" : "bottom"), E = C(() => {
      var L;
      return {
        [I.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : r.value
      };
    });
    function d() {
      n.duration > 0 && ({ stop: w } = xn(() => {
        p.value && b();
      }, n.duration));
    }
    function m() {
      w?.();
    }
    function b() {
      p.value = !1;
    }
    function R({ code: L }) {
      L === Re.delete || L === Re.backspace ? m() : L === Re.esc ? p.value && b() : d();
    }
    return je(() => {
      d(), i(), p.value = !0;
    }), Fn(document, "keydown", R), t({
      visible: p,
      close: b
    }), (L, Q) => (y(), j(Ot, {
      name: o(l).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (U) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: le(() => [
        De(s("div", {
          id: L.id,
          class: O([o(l).b(), L.customClass, o($)]),
          style: He(o(E)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: d,
          onClick: L.onClick
        }, [
          o(f) ? (y(), j(o(Ue), {
            key: 0,
            class: O([o(l).e("icon"), o(v)])
          }, {
            default: le(() => [
              (y(), j(vn(o(f))))
            ]),
            _: 1
          }, 8, ["class"])) : M("v-if", !0),
          s("div", {
            class: O(o(l).e("group"))
          }, [
            s("h2", {
              class: O(o(l).e("title")),
              textContent: g(L.title)
            }, null, 10, ["textContent"]),
            De(s("div", {
              class: O(o(l).e("content")),
              style: He(L.title ? void 0 : { margin: 0 })
            }, [
              pe(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (y(), _(q, { key: 1 }, [
                  M(" Caution here, message could've been compromised, never use user's input as message "),
                  s("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (y(), _("p", { key: 0 }, g(L.message), 1))
              ])
            ], 6), [
              [Ve, L.message]
            ]),
            L.showClose ? (y(), j(o(Ue), {
              key: 0,
              class: O(o(l).e("closeBtn")),
              onClick: xe(b, ["stop"])
            }, {
              default: le(() => [
                u(o(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : M("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ve, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var cs = /* @__PURE__ */ tt(rs, [["__file", "notification.vue"]]);
const qe = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Wt = 16;
let us = 1;
const fe = function(e = {}, t) {
  if (!ce)
    return { close: () => {
    } };
  (ae(e) || ze(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let l = e.offset || 0;
  qe[n].forEach(({ vm: v }) => {
    var f;
    l += (((f = v.el) == null ? void 0 : f.offsetHeight) || 0) + Wt;
  }), l += Wt;
  const a = `notification_${us++}`, i = e.onClose, r = {
    ...e,
    offset: l,
    id: a,
    onClose: () => {
      ds(a, n, i);
    }
  };
  let c = document.body;
  St(e.appendTo) ? c = e.appendTo : ae(e.appendTo) && (c = document.querySelector(e.appendTo)), St(c) || (c = document.body);
  const p = document.createElement("div"), w = u(cs, r, Te(r.message) ? r.message : ze(r.message) ? () => r.message : null);
  return w.appContext = jn(t) ? fe._context : t, w.props.onDestroy = () => {
    Be(null, p);
  }, Be(w, p), qe[n].push({ vm: w }), c.appendChild(p.firstElementChild), {
    close: () => {
      w.component.exposed.visible.value = !1;
    }
  };
};
Yn.forEach((e) => {
  fe[e] = (t = {}, n) => ((ae(t) || ze(t)) && (t = {
    message: t
  }), fe({ ...t, type: e }, n));
});
function ds(e, t, n) {
  const l = qe[t], a = l.findIndex(({ vm: w }) => {
    var v;
    return ((v = w.component) == null ? void 0 : v.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: i } = l[a];
  if (!i)
    return;
  n?.(i);
  const r = i.el.offsetHeight, c = t.split("-")[0];
  l.splice(a, 1);
  const p = l.length;
  if (!(p < 1))
    for (let w = a; w < p; w++) {
      const { el: v, component: f } = l[w].vm, $ = Number.parseInt(v.style[c], 10) - r - Wt;
      f.props.offset = $;
    }
}
function hs() {
  for (const e of Object.values(qe))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
fe.closeAll = hs;
fe._context = null;
const ps = Un(fe, "$notify"), T = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", l) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: l
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
      position: l = "center",
      duration: a = 3e3,
      showClose: i = !1
    } = e;
    l === "center" ? as({
      message: t,
      type: n,
      duration: a,
      showClose: i,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : ps({
      message: t,
      type: n,
      position: l,
      duration: a,
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
var Pt;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(Pt || (Pt = {}));
async function ws() {
  return h("plugin:path|resolve_directory", {
    directory: Pt.AppCache
  });
}
async function gs(...e) {
  return h("plugin:path|join", { paths: e });
}
async function cn(e, t) {
  await h("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const fs = () => ({
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
}), vs = (e) => e ? /^https?:\/\//i.test(e) ? e : _l(e) : "", ms = () => h("wallpaper_get_config"), $t = (e) => h("wallpaper_save_config", { config: e }), un = () => h("wallpaper_get_status"), dn = (e) => h("wallpaper_scan_folder", { path: e }), hn = (e) => h("wallpaper_set_fixed_image", { path: e }), ys = () => h("wallpaper_switch_now"), bs = (e) => h("wallpaper_fetch_wallhaven", { params: e }), ks = (e) => h("wallpaper_set_wallhaven_image", { wallpaper: e }), _s = (e) => h("wallpaper_download_wallhaven_image", { wallpaper: e }), Cs = () => h("wallpaper_clear_cache"), Ss = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), Ls = async () => {
  try {
    await h("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!Ss(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await ws(), t = await gs(e, "wallpaper-switcher");
  try {
    await cn(t);
  } catch {
    await cn(e);
  }
};
function Ws({ config: e, refreshStatus: t }) {
  const { t: n } = ie(), l = W("switcher"), a = W([]), i = W(1), r = W(1), c = W(!1), p = W(""), w = W(""), v = W("general"), f = W("hot"), $ = W(null), I = W(!1), E = W(!1), d = W(/* @__PURE__ */ new Map()), m = W(/* @__PURE__ */ new Map()), b = W(/* @__PURE__ */ new Set()), R = /* @__PURE__ */ new Map();
  let L = null, Q = null, U = null, ue = null, z = 0;
  const ye = C(() => f.value === "hot" ? "Hot" : f.value === "favorites" ? "Favorites" : "Toplist"), be = C(() => a.value.slice(0, 6)), nt = C(() => {
    const S = w.value.trim();
    return v.value === "nature" ? S ? `${S} nature` : "nature" : S || null;
  }), lt = C(() => v.value), ke = (S) => {
    const P = String(S).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
      P
    ) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : P.length > 120 ? `${P.slice(0, 120)}...` : P;
  }, ee = (S, P) => {
    const N = new Map(d.value);
    if (P ? N.set(S, P) : N.delete(S), d.value = N, !P) {
      const B = new Map(m.value);
      B.delete(S), m.value = B;
    }
  }, at = (S) => {
    const P = new Set(b.value);
    P.add(S), b.value = P;
  }, ot = (S, P) => {
    if (!(P instanceof HTMLImageElement)) {
      R.delete(S.id);
      return;
    }
    if (R.set(S.id, P), !L) {
      P.src = S.thumbs.large;
      return;
    }
    P.dataset.src = S.thumbs.large, L.observe(P);
  }, st = () => {
    b.value = /* @__PURE__ */ new Set(), R.clear();
  }, it = async () => {
    e.value.wallhavenQuery = w.value.trim() || null, e.value.wallhavenCategory = v.value, e.value.wallhavenSource = f.value, e.value.mode = "wallhaven", await $t(e.value);
  }, Y = async (S = i.value) => {
    const P = ++z;
    c.value = !0, p.value = "", a.value = [], st();
    try {
      await it();
      const N = await bs({
        source: f.value,
        page: S,
        query: nt.value,
        category: lt.value
      });
      if (P !== z) return;
      a.value = N.data, i.value = N.page, r.value = Math.max(1, N.lastPage), await gn();
      for (const B of R.values())
        L && L.observe(B);
    } catch (N) {
      if (P !== z) return;
      a.value = [], p.value = ke(N), T.msg(p.value, "error");
    } finally {
      P === z && (c.value = !1);
    }
  }, rt = () => Y(1), ct = async (S) => {
    f.value = S, await Y(1);
  }, ut = async (S) => {
    v.value = S, await Y(1);
  }, dt = async () => {
    w.value = "", v.value = e.value.wallhavenCategory || "general", f.value = e.value.wallhavenSource, i.value = 1, p.value = "", a.value = [], l.value = "wallhaven", await Y(1);
  }, ht = (S) => {
    $.value = S, I.value = !0, E.value = !1;
  }, _e = () => {
    $.value = null, I.value = !1, E.value = !1;
  }, Ne = async () => {
    l.value = "switcher", _e(), await t();
  }, pt = () => {
    I.value = !1;
  }, wt = () => {
    I.value = !1, E.value = !0;
  }, gt = async (S) => {
    if (!d.value.has(S.id)) {
      ee(S.id, "setting");
      try {
        T.msg(n("wallpaperSwitcher.messages.settingWallpaper"), "info"), await ks(S), await t(), T.msg(n("wallpaperSwitcher.messages.wallpaperSet"), "success");
      } catch (P) {
        T.msg(ke(P), "error");
      } finally {
        ee(S.id, null);
      }
    }
  }, ft = async (S) => {
    if (!d.value.has(S.id)) {
      ee(S.id, "downloading");
      try {
        T.msg(n("wallpaperSwitcher.messages.downloadingWallpaper"), "info"), await _s(S), await t(), T.msg(n("wallpaperSwitcher.messages.wallpaperDownloaded"), "success");
      } catch (P) {
        T.msg(ke(P), "error");
      } finally {
        ee(S.id, null);
      }
    }
  }, vt = async () => {
    i.value > 1 && await Y(i.value - 1);
  }, Me = async () => {
    i.value < r.value && await Y(i.value + 1);
  };
  return je(() => {
    L = new IntersectionObserver(
      (S) => {
        for (const P of S) {
          if (!P.isIntersecting) continue;
          const N = P.target, B = N.dataset.src;
          B && N.src !== B && (N.src = B), L?.unobserve(N);
        }
      },
      { root: null, rootMargin: "120px" }
    ), Q = null, U = null;
  }), mn(() => {
    L?.disconnect(), L = null, Q?.(), U?.(), ue?.();
  }), {
    activeView: l,
    wallpapers: a,
    wallhavenPage: i,
    wallhavenLastPage: r,
    wallhavenLoading: c,
    wallhavenError: p,
    wallhavenKeyword: w,
    wallhavenCategory: v,
    wallhavenSource: f,
    previewWallpaper: $,
    previewLoading: I,
    previewLoadFailed: E,
    workingActions: d,
    downloadProgress: m,
    loadedThumbIds: b,
    wallhavenSourceLabel: ye,
    visibleWallpapers: be,
    openWallhavenGrid: dt,
    backToSwitcher: Ne,
    openPreview: ht,
    closePreview: _e,
    markPreviewLoaded: pt,
    markPreviewFailed: wt,
    markThumbLoaded: at,
    setThumbRef: ot,
    refreshWallhaven: rt,
    setWallhavenSource: ct,
    setWallhavenCategory: ut,
    setWallpaperFromWallhaven: gt,
    downloadWallpaperFromWallhaven: ft,
    prevWallhavenPage: vt,
    nextWallhavenPage: Me,
    setupListeners: async () => {
      Q = await Pe("wallpaper-switcher-changed", t), U = await Pe(
        "wallpaper-switcher-error",
        (S) => {
          T.msg(
            S.payload?.message || n("wallpaperSwitcher.messages.scheduleSwitchFailed"),
            "error"
          );
        }
      ), ue = await Pe(
        "wallpaper-download-progress",
        (S) => {
          const { id: P, downloaded: N, total: B } = S.payload, Ce = new Map(m.value);
          Ce.set(P, { downloaded: N, total: B ?? null }), m.value = Ce;
        }
      );
    }
  };
}
var Ps = {
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
function $s() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function zs(e, t, n) {
  var l = typeof t.fill == "string" ? [t.fill] : t.fill || [], a = [], i = t.theme || n.theme;
  switch (i) {
    case "outline":
      a.push(typeof l[0] == "string" ? l[0] : "currentColor"), a.push("none"), a.push(typeof l[0] == "string" ? l[0] : "currentColor"), a.push("none");
      break;
    case "filled":
      a.push(typeof l[0] == "string" ? l[0] : "currentColor"), a.push(typeof l[0] == "string" ? l[0] : "currentColor"), a.push("#FFF"), a.push("#FFF");
      break;
    case "two-tone":
      a.push(typeof l[0] == "string" ? l[0] : "currentColor"), a.push(typeof l[1] == "string" ? l[1] : n.colors.twoTone.twoTone), a.push(typeof l[0] == "string" ? l[0] : "currentColor"), a.push(typeof l[1] == "string" ? l[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      a.push(typeof l[0] == "string" ? l[0] : "currentColor"), a.push(typeof l[1] == "string" ? l[1] : n.colors.multiColor.outFillColor), a.push(typeof l[2] == "string" ? l[2] : n.colors.multiColor.innerStrokeColor), a.push(typeof l[3] == "string" ? l[3] : n.colors.multiColor.innerFillColor);
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
var Os = Symbol("icon-context");
function F(e, t, n) {
  var l = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(i) {
      var r = $s(), c = ne(Os, Ps);
      return function() {
        var p = i.size, w = i.strokeWidth, v = i.strokeLinecap, f = i.strokeLinejoin, $ = i.theme, I = i.fill, E = i.spin, d = zs(r, {
          size: p,
          strokeWidth: w,
          strokeLinecap: v,
          strokeLinejoin: f,
          theme: $,
          fill: I
        }, c), m = [c.prefix + "-icon"];
        return m.push(c.prefix + "-icon-" + e), t && c.rtl && m.push(c.prefix + "-icon-rtl"), E && m.push(c.prefix + "-icon-spin"), u("span", {
          class: m.join(" ")
        }, [n(d)]);
      };
    }
  };
  return l;
}
const Ts = F("back", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Is = F("check-small", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M10 24L20 34L40 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Je = F("close-small", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xn = F("computer", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("rect", {
    x: "19",
    y: "32",
    width: "10",
    height: "9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("rect", {
    x: "5",
    y: "8",
    width: "38",
    height: "24",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), u("path", {
    d: "M22 27H26",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M14 41L34 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), js = F("delete", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xs = F("download", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _t = F("folder-open", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pn = F("lightning", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M19 4H37L26 18H41L17 44L22 25H8L19 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Qe = F("loading", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Le = F("picture", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ns = F("picture-album", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ms = F("pin", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [u("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), u("defs", null, [u("clipPath", {
    id: e.id + "1c742167"
  }, [u("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Fs = F("preview-open", !1, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), zt = F("refresh", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Es = F("save", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), u("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), el = F("search", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wn = F("time", !0, function(e) {
  return u("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [u("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), u("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), As = ["disabled", "onClick"], Rs = ["onClick", "onKeydown"], tl = /* @__PURE__ */ x({
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
    const n = t, { t: l } = ie(), a = [
      { value: "hot", labelKey: "wallpaperSwitcher.hot" },
      { value: "toplist", labelKey: "wallpaperSwitcher.toplist" },
      { value: "favorites", labelKey: "wallpaperSwitcher.favorites" }
    ], i = (r, c) => {
      c || n("update:modelValue", r);
    };
    return (r, c) => (y(), _(
      q,
      null,
      Oe(a, (p) => (y(), _(
        q,
        {
          key: p.value
        },
        [
          r.tabClass === "button" ? (y(), _("button", {
            key: 0,
            type: "button",
            class: O({ [r.activeClass || "active"]: r.modelValue === p.value }),
            disabled: r.disabled,
            onClick: (w) => i(p.value, r.disabled)
          }, g(o(l)(p.labelKey)), 11, As)) : (y(), _("div", {
            key: 1,
            class: O(["seg-tab", {
              [r.activeClass || "active"]: r.modelValue === p.value,
              [r.disabledClass || "disabled"]: r.disabled
            }]),
            role: "tab",
            tabindex: "0",
            onClick: (w) => i(p.value, r.disabled),
            onKeydown: yn(xe((w) => i(p.value, r.disabled), ["prevent"]), ["enter"])
          }, g(o(l)(p.labelKey)), 43, Rs))
        ],
        64
        /* STABLE_FRAGMENT */
      ))),
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), Ds = { class: "workspace-grid" }, Hs = { class: "wallpaper-stage" }, Vs = { class: "stage-media" }, Bs = ["src", "alt"], Ks = {
  key: 1,
  class: "stage-empty"
}, Gs = { class: "stage-topline" }, Us = { class: "eyebrow-pill" }, Zs = { class: "source-pill" }, qs = { class: "stage-content" }, Js = { class: "stage-copy" }, Qs = ["title"], Ys = { class: "stage-meta" }, Xs = { class: "stage-actions" }, ei = ["disabled"], ti = { class: "source-workspace" }, ni = { class: "section-heading" }, li = { class: "section-kicker" }, ai = { class: "ready-state" }, oi = {
  class: "mode-picker",
  role: "tablist"
}, si = ["aria-selected", "onClick"], ii = { class: "source-detail" }, ri = { class: "detail-title" }, ci = {
  key: 0,
  class: "folder-sort-picker"
}, ui = ["value"], di = ["value"], hi = ["title"], pi = { class: "path-icon" }, wi = { class: "path-copy" }, gi = { class: "path-cta" }, fi = { class: "detail-title" }, vi = {
  class: "online-source-tabs",
  role: "tablist"
}, mi = { class: "detail-title" }, yi = ["title"], bi = { class: "path-icon" }, ki = { class: "path-copy" }, _i = { class: "path-cta" }, Ci = { class: "automation-card" }, Si = { class: "automation-intro" }, Li = { class: "automation-icon" }, Wi = { class: "section-kicker" }, Pi = { class: "schedule-toggle" }, $i = ["checked"], zi = { class: "compact-control" }, Oi = { class: "number-input" }, Ti = ["value"], Ii = { class: "compact-control order-control" }, ji = { class: "mini-segmented" }, xi = { class: "restore-check" }, Ni = ["checked"], Mi = { class: "utility-bar" }, Fi = { class: "tray-callout" }, Ei = { class: "cache-summary" }, Ai = { class: "utility-actions" }, Ri = ["disabled", "title"], Di = ["disabled", "title"], Hi = ["disabled"], Vi = /* @__PURE__ */ x({
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
    const n = e, l = t, { t: a } = ie(), i = [
      {
        value: "folder",
        labelKey: "wallpaperSwitcher.localFolder",
        captionKey: "wallpaperSwitcher.localFolderCaption"
      },
      {
        value: "wallhaven",
        labelKey: "wallpaperSwitcher.wallhavenOnline",
        captionKey: "wallpaperSwitcher.wallhavenCaption"
      },
      {
        value: "fixed",
        labelKey: "wallpaperSwitcher.fixedImage",
        captionKey: "wallpaperSwitcher.fixedImageCaption"
      }
    ], r = [
      {
        value: "createdAscending",
        labelKey: "wallpaperSwitcher.folderSort.createdAscending"
      },
      {
        value: "fileNameAscending",
        labelKey: "wallpaperSwitcher.folderSort.fileNameAscending"
      },
      {
        value: "modifiedDescending",
        labelKey: "wallpaperSwitcher.folderSort.modifiedDescending"
      }
    ], c = (d) => {
      l("updateConfig", { ...n.config, ...d });
    }, p = (d) => c({ mode: d }), w = (d) => c({ wallhavenSource: d }), v = (d) => c({ order: d }), f = (d) => c({
      folderSort: d.target.value
    }), $ = (d) => c({ scheduleEnabled: d.target.checked }), I = (d) => c({
      intervalMinutes: Math.min(
        1440,
        Math.max(1, Number(d.target.value) || 1)
      )
    }), E = (d) => c({ autoRestore: d.target.checked });
    return (d, m) => (y(), _(
      "div",
      {
        class: O(["switcher-home", { "is-loading": d.loading }])
      },
      [
        s("section", Ds, [
          s("article", Hs, [
            s("div", Vs, [
              d.previewSrc ? (y(), _("img", {
                key: 0,
                src: d.previewSrc,
                alt: o(a)("wallpaperSwitcher.currentPreviewAlt")
              }, null, 8, Bs)) : (y(), _("div", Ks, [
                u(o(Le), { size: 40 }),
                s(
                  "span",
                  null,
                  g(o(a)("wallpaperSwitcher.noCurrentWallpaper")),
                  1
                  /* TEXT */
                )
              ]))
            ]),
            m[12] || (m[12] = s(
              "div",
              { class: "stage-overlay" },
              null,
              -1
              /* HOISTED */
            )),
            s("div", Gs, [
              s("span", Us, [
                m[11] || (m[11] = s(
                  "span",
                  { class: "live-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                H(
                  " " + g(o(a)("wallpaperSwitcher.currentDesktop")),
                  1
                  /* TEXT */
                )
              ]),
              s(
                "span",
                Zs,
                g(d.sourceLabel),
                1
                /* TEXT */
              )
            ]),
            s("div", qs, [
              s("div", Js, [
                s(
                  "p",
                  null,
                  g(o(a)("wallpaperSwitcher.currentWallpaper")),
                  1
                  /* TEXT */
                ),
                s("h1", { title: d.currentWallpaperName }, g(d.currentWallpaperName), 9, Qs),
                s("div", Ys, [
                  s("span", null, [
                    u(o(Xn), { size: 15 }),
                    H(
                      " " + g(d.resolutionLabel),
                      1
                      /* TEXT */
                    )
                  ]),
                  s("span", null, [
                    u(o(wn), { size: 15 }),
                    H(
                      " " + g(d.nextSwitchLabel),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              s("div", Xs, [
                s("button", {
                  type: "button",
                  class: "stage-btn stage-btn-primary",
                  disabled: d.switching,
                  onClick: m[0] || (m[0] = (b) => l("switchNow"))
                }, [
                  d.switching ? (y(), j(o(zt), {
                    key: 0,
                    size: 16,
                    class: "spinning"
                  })) : (y(), j(o(pn), {
                    key: 1,
                    size: 16
                  })),
                  H(
                    " " + g(d.switching ? o(a)("wallpaperSwitcher.switching") : o(a)("wallpaperSwitcher.switchNow")),
                    1
                    /* TEXT */
                  )
                ], 8, ei),
                s("button", {
                  type: "button",
                  class: "stage-btn stage-btn-ghost",
                  onClick: m[1] || (m[1] = (b) => l("setCurrentAsFixed"))
                }, [
                  u(o(Ms), { size: 16 }),
                  H(
                    " " + g(o(a)("wallpaperSwitcher.setFixed")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          s("aside", ti, [
            s("header", ni, [
              s("div", null, [
                s(
                  "span",
                  li,
                  g(o(a)("wallpaperSwitcher.stepOne")),
                  1
                  /* TEXT */
                ),
                s(
                  "h2",
                  null,
                  g(o(a)("wallpaperSwitcher.chooseSource")),
                  1
                  /* TEXT */
                )
              ]),
              s("span", ai, [
                u(o(Is), { size: 14 }),
                H(
                  " " + g(o(a)("wallpaperSwitcher.ready")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            s("div", oi, [
              (y(), _(
                q,
                null,
                Oe(i, (b) => s("button", {
                  key: b.value,
                  type: "button",
                  class: O({ active: d.config.mode === b.value }),
                  role: "tab",
                  "aria-selected": d.config.mode === b.value,
                  onClick: (R) => p(b.value)
                }, [
                  b.value === "folder" ? (y(), j(o(_t), {
                    key: 0,
                    size: 18
                  })) : b.value === "wallhaven" ? (y(), j(o(el), {
                    key: 1,
                    size: 18
                  })) : (y(), j(o(Le), {
                    key: 2,
                    size: 18
                  })),
                  s("span", null, [
                    s(
                      "strong",
                      null,
                      g(o(a)(b.labelKey)),
                      1
                      /* TEXT */
                    ),
                    s(
                      "small",
                      null,
                      g(o(a)(b.captionKey)),
                      1
                      /* TEXT */
                    )
                  ])
                ], 10, si)),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            s("div", ii, [
              d.config.mode === "folder" ? (y(), _(
                q,
                { key: 0 },
                [
                  s("div", ri, [
                    s("div", null, [
                      s(
                        "span",
                        null,
                        g(o(a)("wallpaperSwitcher.localLibrary")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "strong",
                        null,
                        g(d.folderCountLabel),
                        1
                        /* TEXT */
                      )
                    ]),
                    s("button", {
                      type: "button",
                      class: "text-action",
                      onClick: m[2] || (m[2] = (b) => l("scanFolder"))
                    }, [
                      u(o(zt), { size: 14 }),
                      H(
                        " " + g(o(a)("wallpaperSwitcher.scan")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  d.config.order === "sequential" ? (y(), _("label", ci, [
                    s(
                      "span",
                      null,
                      g(o(a)("wallpaperSwitcher.folderSortLabel")),
                      1
                      /* TEXT */
                    ),
                    s("select", {
                      value: d.config.folderSort,
                      onChange: f
                    }, [
                      (y(), _(
                        q,
                        null,
                        Oe(r, (b) => s("option", {
                          key: b.value,
                          value: b.value
                        }, g(o(a)(b.labelKey)), 9, di)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ], 40, ui)
                  ])) : M("v-if", !0),
                  s("button", {
                    type: "button",
                    class: "path-picker",
                    title: d.config.folderPath || "",
                    onClick: m[3] || (m[3] = (b) => l("chooseFolder"))
                  }, [
                    s("span", pi, [
                      u(o(_t), { size: 18 })
                    ]),
                    s("span", wi, [
                      s(
                        "small",
                        null,
                        g(o(a)("wallpaperSwitcher.folderPath")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "strong",
                        null,
                        g(d.config.folderPath || o(a)("wallpaperSwitcher.placeholders.selectFolder")),
                        1
                        /* TEXT */
                      )
                    ]),
                    s(
                      "span",
                      gi,
                      g(o(a)("wallpaperSwitcher.change")),
                      1
                      /* TEXT */
                    )
                  ], 8, hi)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : d.config.mode === "wallhaven" ? (y(), _(
                q,
                { key: 1 },
                [
                  s("div", fi, [
                    s("div", null, [
                      m[13] || (m[13] = s(
                        "span",
                        null,
                        "Wallhaven",
                        -1
                        /* HOISTED */
                      )),
                      s(
                        "strong",
                        null,
                        g(o(a)("wallpaperSwitcher.onlineSourceHint")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  s("div", vi, [
                    u(tl, {
                      "tab-class": "button",
                      "model-value": d.config.wallhavenSource,
                      "onUpdate:modelValue": w
                    }, null, 8, ["model-value"])
                  ]),
                  s("button", {
                    type: "button",
                    class: "browse-online-btn",
                    onClick: m[4] || (m[4] = (b) => l("openWallhavenGrid"))
                  }, [
                    u(o(Le), { size: 18 }),
                    s("span", null, [
                      s(
                        "strong",
                        null,
                        g(o(a)("wallpaperSwitcher.browseOnline")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "small",
                        null,
                        g(o(a)("wallpaperSwitcher.browseOnlineHint")),
                        1
                        /* TEXT */
                      )
                    ]),
                    m[14] || (m[14] = s(
                      "span",
                      { "aria-hidden": "true" },
                      "→",
                      -1
                      /* HOISTED */
                    ))
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (y(), _(
                q,
                { key: 2 },
                [
                  s("div", mi, [
                    s("div", null, [
                      s(
                        "span",
                        null,
                        g(o(a)("wallpaperSwitcher.fixedImage")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "strong",
                        null,
                        g(o(a)("wallpaperSwitcher.fixedModeHint")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  s("button", {
                    type: "button",
                    class: "path-picker",
                    title: d.config.fixedImagePath || "",
                    onClick: m[5] || (m[5] = (b) => l("chooseImage"))
                  }, [
                    s("span", bi, [
                      u(o(Le), { size: 18 })
                    ]),
                    s("span", ki, [
                      s(
                        "small",
                        null,
                        g(o(a)("wallpaperSwitcher.imagePath")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "strong",
                        null,
                        g(d.config.fixedImagePath || o(a)("wallpaperSwitcher.placeholders.selectImage")),
                        1
                        /* TEXT */
                      )
                    ]),
                    s(
                      "span",
                      _i,
                      g(o(a)("wallpaperSwitcher.change")),
                      1
                      /* TEXT */
                    )
                  ], 8, yi)
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ]),
        s("section", Ci, [
          s("div", Si, [
            s("span", Li, [
              u(o(wn), { size: 20 })
            ]),
            s("div", null, [
              s(
                "span",
                Wi,
                g(o(a)("wallpaperSwitcher.stepTwo")),
                1
                /* TEXT */
              ),
              s(
                "h2",
                null,
                g(o(a)("wallpaperSwitcher.automationTitle")),
                1
                /* TEXT */
              ),
              s(
                "p",
                null,
                g(o(a)("wallpaperSwitcher.automationHint")),
                1
                /* TEXT */
              )
            ])
          ]),
          s("label", Pi, [
            s("span", null, [
              s(
                "strong",
                null,
                g(o(a)("wallpaperSwitcher.enableSchedule")),
                1
                /* TEXT */
              )
            ]),
            s("input", {
              checked: d.config.scheduleEnabled,
              type: "checkbox",
              onChange: $
            }, null, 40, $i),
            m[15] || (m[15] = s(
              "span",
              {
                class: "switch-control",
                "aria-hidden": "true"
              },
              null,
              -1
              /* HOISTED */
            ))
          ]),
          s("label", zi, [
            s(
              "span",
              null,
              g(o(a)("wallpaperSwitcher.interval")),
              1
              /* TEXT */
            ),
            s("span", Oi, [
              s("input", {
                value: d.config.intervalMinutes,
                type: "number",
                min: "1",
                max: "1440",
                onInput: I
              }, null, 40, Ti),
              s(
                "small",
                null,
                g(o(a)("wallpaperSwitcher.minutes")),
                1
                /* TEXT */
              )
            ])
          ]),
          s("div", Ii, [
            s(
              "span",
              null,
              g(o(a)("wallpaperSwitcher.rotationOrder")),
              1
              /* TEXT */
            ),
            s("div", ji, [
              s(
                "button",
                {
                  type: "button",
                  class: O({ active: d.config.order === "sequential" }),
                  onClick: m[6] || (m[6] = (b) => v("sequential"))
                },
                g(o(a)("wallpaperSwitcher.sequential")),
                3
                /* TEXT, CLASS */
              ),
              s(
                "button",
                {
                  type: "button",
                  class: O({ active: d.config.order === "random" }),
                  onClick: m[7] || (m[7] = (b) => v("random"))
                },
                g(o(a)("wallpaperSwitcher.random")),
                3
                /* TEXT, CLASS */
              )
            ])
          ]),
          s("label", xi, [
            s("input", {
              checked: d.config.autoRestore,
              type: "checkbox",
              onChange: E
            }, null, 40, Ni),
            s("span", null, [
              s(
                "strong",
                null,
                g(o(a)("wallpaperSwitcher.autoRestoreShort")),
                1
                /* TEXT */
              ),
              s(
                "small",
                null,
                g(o(a)("wallpaperSwitcher.autoRestoreHint")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        s("footer", Mi, [
          s("div", Fi, [
            u(o(pn), { size: 17 }),
            s("span", null, [
              s(
                "strong",
                null,
                g(o(a)("wallpaperSwitcher.trayQuickSwitch")),
                1
                /* TEXT */
              ),
              s(
                "small",
                null,
                g(o(a)("wallpaperSwitcher.trayQuickSwitchHint")),
                1
                /* TEXT */
              )
            ])
          ]),
          s("div", Ei, [
            s(
              "span",
              null,
              g(o(a)("wallpaperSwitcher.cache")),
              1
              /* TEXT */
            ),
            s(
              "strong",
              null,
              g(d.cacheSizeLabel),
              1
              /* TEXT */
            )
          ]),
          s("div", Ai, [
            s("button", {
              type: "button",
              class: "utility-btn",
              disabled: d.clearingCache,
              title: o(a)("wallpaperSwitcher.clearCache"),
              onClick: m[8] || (m[8] = (b) => l("clearCache"))
            }, [
              u(o(js), { size: 16 })
            ], 8, Ri),
            s("button", {
              type: "button",
              class: "utility-btn",
              disabled: d.openingCache,
              title: o(a)("wallpaperSwitcher.openCache"),
              onClick: m[9] || (m[9] = (b) => l("openCacheDir"))
            }, [
              u(o(_t), { size: 16 })
            ], 8, Di),
            s("button", {
              type: "button",
              class: "save-btn",
              disabled: d.saving,
              onClick: m[10] || (m[10] = (b) => l("persistConfig"))
            }, [
              u(o(Es), { size: 17 }),
              H(
                " " + g(d.saving ? o(a)("wallpaperSwitcher.saving") : o(a)("wallpaperSwitcher.saveSettings")),
                1
                /* TEXT */
              )
            ], 8, Hi)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Bi = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Ki = {
  key: 0,
  class: "title"
}, Gi = { class: "title-icon" }, Ui = { class: "title-copy" }, Zi = {
  key: 1,
  class: "title"
}, qi = ["title"], Ji = {
  key: 2,
  class: "window-actions"
}, Qi = ["title"], Yi = ["title"], Xi = {
  key: 3,
  class: "window-actions"
}, er = ["aria-label"], tr = ["title"], nr = /* @__PURE__ */ x({
  __name: "SwitcherTitlebar",
  props: {
    activeView: {},
    wallhavenSource: {},
    wallhavenLoading: { type: Boolean },
    scheduleEnabled: { type: Boolean },
    schedulerRunning: { type: Boolean }
  },
  emits: ["back", "close", "openWallhaven", "setWallhavenSource"],
  setup(e, { emit: t }) {
    const n = t, { t: l } = ie();
    return (a, i) => (y(), _("header", Bi, [
      a.activeView === "switcher" ? (y(), _("div", Ki, [
        s("span", Gi, [
          u(o(Le), { size: 18 })
        ]),
        s("span", Ui, [
          s(
            "strong",
            null,
            g(o(l)("wallpaperSwitcher.title")),
            1
            /* TEXT */
          ),
          s(
            "small",
            null,
            g(o(l)("wallpaperSwitcher.titleSubtitle")),
            1
            /* TEXT */
          )
        ]),
        s(
          "span",
          {
            class: O(["title-status", { active: a.scheduleEnabled && a.schedulerRunning }])
          },
          [
            i[5] || (i[5] = s(
              "span",
              null,
              null,
              -1
              /* HOISTED */
            )),
            H(
              " " + g(a.scheduleEnabled && a.schedulerRunning ? o(l)("wallpaperSwitcher.scheduleRunning") : o(l)("wallpaperSwitcher.schedulePaused")),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        )
      ])) : (y(), _("div", Zi, [
        s("button", {
          type: "button",
          class: "flat-icon",
          title: o(l)("wallpaperSwitcher.back"),
          onClick: i[0] || (i[0] = (r) => n("back"))
        }, [
          u(o(Ts), { size: 20 })
        ], 8, qi),
        s(
          "span",
          null,
          g(o(l)("wallpaperSwitcher.wallhavenTitle")),
          1
          /* TEXT */
        )
      ])),
      a.activeView === "switcher" ? (y(), _("div", Ji, [
        s("button", {
          type: "button",
          class: "online-entry-btn",
          title: o(l)("wallpaperSwitcher.openWallhaven"),
          onClick: i[1] || (i[1] = (r) => n("openWallhaven"))
        }, [
          u(o(Ns), { size: 18 }),
          s(
            "span",
            null,
            g(o(l)("wallpaperSwitcher.browseOnline")),
            1
            /* TEXT */
          )
        ], 8, Qi),
        s("button", {
          type: "button",
          class: "icon-btn",
          title: o(l)("wallpaperSwitcher.close"),
          onClick: i[2] || (i[2] = (r) => n("close"))
        }, [
          u(o(Je), { size: 20 })
        ], 8, Yi)
      ])) : (y(), _("div", Xi, [
        s("div", {
          class: "source-toggle",
          role: "tablist",
          "aria-label": o(l)("wallpaperSwitcher.sourceToggle")
        }, [
          u(tl, {
            "model-value": a.wallhavenSource,
            disabled: a.wallhavenLoading,
            "onUpdate:modelValue": i[3] || (i[3] = (r) => n("setWallhavenSource", r))
          }, null, 8, ["model-value", "disabled"])
        ], 8, er),
        s("button", {
          type: "button",
          class: "icon-btn",
          title: o(l)("wallpaperSwitcher.close"),
          onClick: i[4] || (i[4] = (r) => n("close"))
        }, [
          u(o(Je), { size: 20 })
        ], 8, tr)
      ]))
    ]));
  }
}), lr = { class: "wallhaven-view" }, ar = { class: "filters filters--preview-style" }, or = { class: "search-box wallhaven-search" }, sr = ["value", "placeholder"], ir = ["title"], rr = ["aria-label"], cr = ["disabled", "onClick"], ur = { class: "wallhaven-meta" }, dr = ["title"], hr = { class: "grid-wrap" }, pr = {
  key: 0,
  class: "empty-state"
}, wr = {
  key: 1,
  class: "empty-state error-state"
}, gr = {
  key: 2,
  class: "empty-state"
}, fr = {
  key: 3,
  class: "wallpaper-grid"
}, vr = ["onClick"], mr = {
  key: 0,
  class: "thumb-skeleton"
}, yr = ["alt", "onLoad"], br = {
  key: 1,
  class: "download-ring"
}, kr = {
  viewBox: "0 0 48 48",
  class: "ring-svg"
}, _r = ["stroke-dashoffset"], Cr = { class: "ring-text" }, Sr = ["title", "onClick"], Lr = ["title", "disabled", "aria-busy", "onClick"], Wr = ["title", "disabled", "aria-busy", "onClick"], Pr = { class: "pager" }, $r = { class: "source-note" }, zr = { class: "pager-actions" }, Or = ["disabled"], Tr = ["disabled"], Ir = /* @__PURE__ */ x({
  __name: "WallhavenView",
  props: {
    keyword: {},
    category: {},
    loading: { type: Boolean },
    error: {},
    wallpapers: {},
    loadedThumbIds: {},
    workingActions: {},
    downloadProgress: {},
    page: {},
    lastPage: {},
    sourceLabel: {},
    screenLabel: {},
    setThumbRef: { type: Function }
  },
  emits: ["update:keyword", "refresh", "setCategory", "openPreview", "markThumbLoaded", "setWallpaper", "downloadWallpaper", "prevPage", "nextPage"],
  setup(e, { emit: t }) {
    const n = e, l = t, { t: a } = ie(), i = [
      { value: "general", labelKey: "wallpaperSwitcher.categories.general" },
      { value: "anime", labelKey: "wallpaperSwitcher.categories.anime" },
      { value: "people", labelKey: "wallpaperSwitcher.categories.people" },
      { value: "nature", labelKey: "wallpaperSwitcher.categories.nature" }
    ], r = (w) => l("update:keyword", w.target.value), c = (w) => n.workingActions.get(w), p = (w) => {
      const v = n.downloadProgress.get(w);
      return !v || !v.total || v.total <= 0 ? null : Math.min(100, Math.round(v.downloaded / v.total * 100));
    };
    return (w, v) => (y(), _("div", lr, [
      s("section", ar, [
        s("div", or, [
          s("input", {
            value: w.keyword,
            type: "text",
            placeholder: o(a)("wallpaperSwitcher.searchPlaceholder"),
            onInput: r,
            onKeydown: v[0] || (v[0] = yn((f) => l("refresh"), ["enter"]))
          }, null, 40, sr),
          u(o(el), {
            size: 16,
            class: "search-icon"
          }),
          w.keyword ? (y(), _("button", {
            key: 0,
            type: "button",
            class: "clear-btn",
            title: o(a)("wallpaperSwitcher.clear"),
            onClick: v[1] || (v[1] = (f) => l("update:keyword", ""))
          }, [
            u(o(Je), { size: 18 })
          ], 8, ir)) : M("v-if", !0)
        ]),
        s("div", {
          class: "wallhaven-tabs",
          role: "tablist",
          "aria-label": o(a)("wallpaperSwitcher.categoryToggle")
        }, [
          (y(), _(
            q,
            null,
            Oe(i, (f) => s("button", {
              key: f.value,
              type: "button",
              class: O({ active: w.category === f.value }),
              disabled: w.loading,
              onClick: ($) => l("setCategory", f.value)
            }, g(o(a)(f.labelKey)), 11, cr)),
            64
            /* STABLE_FRAGMENT */
          ))
        ], 8, rr),
        s("div", ur, [
          s(
            "span",
            null,
            g(o(a)("wallpaperSwitcher.autoMatch", { resolution: w.screenLabel })),
            1
            /* TEXT */
          ),
          s("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: o(a)("wallpaperSwitcher.refresh"),
            onClick: v[2] || (v[2] = (f) => l("refresh"))
          }, [
            u(o(zt), {
              size: 14,
              class: O({ spinning: w.loading })
            }, null, 8, ["class"])
          ], 8, dr)
        ])
      ]),
      s("section", hr, [
        w.loading && w.wallpapers.length === 0 ? (y(), _(
          "div",
          pr,
          g(o(a)("wallpaperSwitcher.loadingWallhaven")),
          1
          /* TEXT */
        )) : w.error ? (y(), _("div", wr, [
          s(
            "span",
            null,
            g(w.error),
            1
            /* TEXT */
          ),
          s(
            "button",
            {
              type: "button",
              onClick: v[3] || (v[3] = (f) => l("refresh"))
            },
            g(o(a)("wallpaperSwitcher.retry")),
            1
            /* TEXT */
          )
        ])) : w.wallpapers.length === 0 ? (y(), _(
          "div",
          gr,
          g(o(a)("wallpaperSwitcher.noWallpapers")),
          1
          /* TEXT */
        )) : (y(), _("div", fr, [
          (y(!0), _(
            q,
            null,
            Oe(w.wallpapers, (f) => (y(), _("article", {
              key: f.id,
              class: "wallpaper-card"
            }, [
              s("button", {
                type: "button",
                class: "thumb",
                onClick: ($) => l("openPreview", f)
              }, [
                w.loadedThumbIds.has(f.id) ? M("v-if", !0) : (y(), _("div", mr)),
                s("img", {
                  ref_for: !0,
                  ref: ($) => w.setThumbRef(f, $),
                  alt: f.resolution,
                  loading: "lazy",
                  onLoad: ($) => l("markThumbLoaded", f.id)
                }, null, 40, yr),
                s(
                  "span",
                  null,
                  g(f.resolution),
                  1
                  /* TEXT */
                ),
                p(f.id) !== null ? (y(), _("div", br, [
                  (y(), _("svg", kr, [
                    v[7] || (v[7] = s(
                      "circle",
                      {
                        class: "ring-track",
                        cx: "24",
                        cy: "24",
                        r: "20",
                        fill: "none",
                        "stroke-width": "4"
                      },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    s("circle", {
                      class: "ring-fill",
                      cx: "24",
                      cy: "24",
                      r: "20",
                      fill: "none",
                      "stroke-width": "4",
                      "stroke-linecap": "round",
                      "stroke-dasharray": 125.66,
                      "stroke-dashoffset": 125.66 * (1 - (p(f.id) ?? 0) / 100),
                      transform: "rotate(-90 24 24)"
                    }, null, 8, _r)
                  ])),
                  s(
                    "span",
                    Cr,
                    g(p(f.id)) + "%",
                    1
                    /* TEXT */
                  )
                ])) : M("v-if", !0)
              ], 8, vr),
              s("div", {
                class: "card-actions",
                onClick: v[4] || (v[4] = xe(() => {
                }, ["stop"]))
              }, [
                s("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.preview"),
                  onClick: ($) => l("openPreview", f)
                }, [
                  u(o(Fs), { size: 16 }),
                  H(
                    " " + g(o(a)("wallpaperSwitcher.preview")),
                    1
                    /* TEXT */
                  )
                ], 8, Sr),
                s("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.setWallpaper"),
                  class: O({
                    "is-working": c(f.id) === "setting"
                  }),
                  disabled: !!c(f.id),
                  "aria-busy": c(f.id) === "setting",
                  onClick: ($) => l("setWallpaper", f)
                }, [
                  c(f.id) === "setting" ? (y(), j(o(Qe), {
                    key: 0,
                    size: 16,
                    spin: ""
                  })) : (y(), j(o(Xn), {
                    key: 1,
                    size: 16
                  })),
                  s(
                    "span",
                    null,
                    g(c(f.id) === "setting" ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.set")),
                    1
                    /* TEXT */
                  )
                ], 10, Lr),
                s("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.download"),
                  class: O({
                    "is-working": c(f.id) === "downloading"
                  }),
                  disabled: !!c(f.id),
                  "aria-busy": c(f.id) === "downloading",
                  onClick: ($) => l("downloadWallpaper", f)
                }, [
                  c(f.id) === "downloading" ? (y(), j(o(Qe), {
                    key: 0,
                    size: 16,
                    spin: ""
                  })) : (y(), j(o(xs), {
                    key: 1,
                    size: 16
                  })),
                  s(
                    "span",
                    null,
                    g(c(f.id) === "downloading" ? o(a)("wallpaperSwitcher.downloading") : o(a)("wallpaperSwitcher.download")),
                    1
                    /* TEXT */
                  )
                ], 10, Wr)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      s("footer", Pr, [
        s(
          "span",
          null,
          g(o(a)("wallpaperSwitcher.page", { page: w.page })),
          1
          /* TEXT */
        ),
        s(
          "span",
          $r,
          g(o(a)("wallpaperSwitcher.sourceNote", { source: w.sourceLabel })),
          1
          /* TEXT */
        ),
        s("div", zr, [
          s("button", {
            type: "button",
            disabled: w.page <= 1 || w.loading,
            onClick: v[5] || (v[5] = (f) => l("prevPage"))
          }, g(o(a)("wallpaperSwitcher.prevPage")), 9, Or),
          s("button", {
            type: "button",
            disabled: w.page >= w.lastPage || w.loading,
            onClick: v[6] || (v[6] = (f) => l("nextPage"))
          }, g(o(a)("wallpaperSwitcher.nextPage")), 9, Tr)
        ])
      ])
    ]));
  }
}), jr = { class: "preview-dialog" }, xr = { class: "preview-image-wrap" }, Nr = {
  key: 0,
  class: "preview-skeleton"
}, Mr = {
  key: 1,
  class: "preview-error"
}, Fr = ["src", "alt"], Er = {
  key: 2,
  class: "download-ring preview-download-ring"
}, Ar = {
  viewBox: "0 0 48 48",
  class: "ring-svg"
}, Rr = ["stroke-dashoffset"], Dr = { class: "ring-text" }, Hr = ["disabled", "aria-busy"], Vr = ["disabled", "aria-busy"], Br = /* @__PURE__ */ x({
  __name: "WallpaperPreviewModal",
  props: {
    wallpaper: {},
    loading: { type: Boolean },
    loadFailed: { type: Boolean },
    workingActions: {},
    downloadProgress: {}
  },
  emits: ["close", "loaded", "failed", "download", "setWallpaper"],
  setup(e, { emit: t }) {
    const n = e, l = t, { t: a } = ie(), i = (c) => n.workingActions.get(c), r = (c) => {
      const p = n.downloadProgress.get(c);
      return !p || !p.total || p.total <= 0 ? null : Math.min(100, Math.round(p.downloaded / p.total * 100));
    };
    return (c, p) => c.wallpaper ? (y(), _("div", {
      key: 0,
      class: "preview-modal",
      onClick: p[5] || (p[5] = xe((w) => l("close"), ["self"]))
    }, [
      s("div", jr, [
        s("header", null, [
          s(
            "strong",
            null,
            g(c.wallpaper.resolution),
            1
            /* TEXT */
          ),
          s("button", {
            type: "button",
            class: "flat-icon",
            onClick: p[0] || (p[0] = (w) => l("close"))
          }, [
            u(o(Je), { size: 23 })
          ])
        ]),
        s("div", xr, [
          c.loading ? (y(), _("div", Nr, [
            s(
              "span",
              null,
              g(o(a)("wallpaperSwitcher.loadingPreview")),
              1
              /* TEXT */
            )
          ])) : M("v-if", !0),
          c.loadFailed ? (y(), _(
            "div",
            Mr,
            g(o(a)("wallpaperSwitcher.previewLoadFailed")),
            1
            /* TEXT */
          )) : M("v-if", !0),
          s("img", {
            class: O({ ready: !c.loading && !c.loadFailed }),
            src: c.wallpaper.path,
            alt: o(a)("wallpaperSwitcher.wallpaperPreviewAlt"),
            onLoad: p[1] || (p[1] = (w) => l("loaded")),
            onError: p[2] || (p[2] = (w) => l("failed"))
          }, null, 42, Fr),
          c.wallpaper && r(c.wallpaper.id) !== null ? (y(), _("div", Er, [
            (y(), _("svg", Ar, [
              p[6] || (p[6] = s(
                "circle",
                {
                  class: "ring-track",
                  cx: "24",
                  cy: "24",
                  r: "20",
                  fill: "none",
                  "stroke-width": "4"
                },
                null,
                -1
                /* HOISTED */
              )),
              s("circle", {
                class: "ring-fill",
                cx: "24",
                cy: "24",
                r: "20",
                fill: "none",
                "stroke-width": "4",
                "stroke-linecap": "round",
                "stroke-dasharray": 125.66,
                "stroke-dashoffset": 125.66 * (1 - (r(c.wallpaper.id) ?? 0) / 100),
                transform: "rotate(-90 24 24)"
              }, null, 8, Rr)
            ])),
            s(
              "span",
              Dr,
              g(r(c.wallpaper.id)) + "%",
              1
              /* TEXT */
            )
          ])) : M("v-if", !0)
        ]),
        s("footer", null, [
          s("button", {
            type: "button",
            class: O(["secondary-btn", {
              "is-working": i(c.wallpaper.id) === "downloading"
            }]),
            disabled: !!i(c.wallpaper.id),
            "aria-busy": i(c.wallpaper.id) === "downloading",
            onClick: p[3] || (p[3] = (w) => l("download", c.wallpaper))
          }, [
            i(c.wallpaper.id) === "downloading" ? (y(), j(o(Qe), {
              key: 0,
              size: 16,
              spin: ""
            })) : M("v-if", !0),
            H(
              " " + g(i(c.wallpaper.id) === "downloading" ? o(a)("wallpaperSwitcher.downloading") : o(a)("wallpaperSwitcher.downloadCache")),
              1
              /* TEXT */
            )
          ], 10, Hr),
          s("button", {
            type: "button",
            class: O(["primary-btn", {
              "is-working": i(c.wallpaper.id) === "setting"
            }]),
            disabled: !!i(c.wallpaper.id),
            "aria-busy": i(c.wallpaper.id) === "setting",
            onClick: p[4] || (p[4] = (w) => l("setWallpaper", c.wallpaper))
          }, [
            i(c.wallpaper.id) === "setting" ? (y(), j(o(Qe), {
              key: 0,
              size: 16,
              spin: ""
            })) : M("v-if", !0),
            H(
              " " + g(i(c.wallpaper.id) === "setting" ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.setWallpaper")),
              1
              /* TEXT */
            )
          ], 10, Vr)
        ])
      ])
    ])) : M("v-if", !0);
  }
}), Kr = { class: "wallpaper-window wallpaper-window--redesigned" }, Gr = {
  key: 0,
  class: "unsupported"
}, Ur = /* @__PURE__ */ x({
  __name: "index",
  setup(e) {
    const t = Cn(), { t: n } = ie(), l = W(fs()), a = W(null), i = W(null), r = W(!1), c = W(!1), p = W(!1), w = W(!1), v = W(!1), f = async () => {
      try {
        a.value = await un();
      } catch (k) {
        T.msg(String(k), "error");
      }
    }, $ = Ws({
      config: l,
      refreshStatus: async () => {
        await f();
      }
    }), {
      activeView: I,
      wallhavenPage: E,
      wallhavenLastPage: d,
      wallhavenLoading: m,
      wallhavenError: b,
      wallhavenKeyword: R,
      wallhavenCategory: L,
      wallhavenSource: Q,
      previewWallpaper: U,
      previewLoading: ue,
      previewLoadFailed: z,
      workingActions: ye,
      downloadProgress: be,
      loadedThumbIds: nt,
      wallhavenSourceLabel: lt,
      visibleWallpapers: ke,
      openWallhavenGrid: ee,
      backToSwitcher: at,
      openPreview: ot,
      closePreview: st,
      markPreviewLoaded: it,
      markPreviewFailed: Y,
      markThumbLoaded: rt,
      setThumbRef: ct,
      refreshWallhaven: ut,
      setWallhavenSource: dt,
      setWallhavenCategory: ht,
      setWallpaperFromWallhaven: _e,
      downloadWallpaperFromWallhaven: Ne,
      prevWallhavenPage: pt,
      nextWallhavenPage: wt,
      setupListeners: gt
    } = $, ft = C(
      () => vs(a.value?.currentPath || l.value.lastAppliedPath)
    ), vt = C(() => {
      const k = a.value?.currentPath || l.value.lastAppliedPath;
      return k ? k.split(/[\\/]/).pop() || k : n("wallpaperSwitcher.noCurrentWallpaper");
    }), Me = C(() => {
      const k = a.value?.screenWidth || 2560, K = a.value?.screenHeight || 1440;
      return `${k} × ${K}`;
    }), Et = C(
      () => a.value?.currentResolution || Me.value
    ), S = (k) => k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / 1024 / 1024).toFixed(1)} MB` : `${(k / 1024 / 1024 / 1024).toFixed(1)} GB`, P = C(() => l.value.mode === "fixed" ? n("wallpaperSwitcher.fixedImage") : l.value.mode === "wallhaven" ? "Wallhaven" : n("wallpaperSwitcher.localFolder")), N = C(() => {
      if (l.value.mode === "fixed" || !l.value.scheduleEnabled || !a.value?.schedulerRunning)
        return "—";
      const k = a.value?.nextSwitchAt;
      if (!k) return "—";
      const K = Math.max(0, k - Math.floor(Date.now() / 1e3));
      return K < 60 ? n("wallpaperSwitcher.time.secondsLater", { count: K }) : n("wallpaperSwitcher.time.minutesLater", {
        count: Math.ceil(K / 60)
      });
    }), B = C(() => {
      const k = a.value?.cacheSizeBytes ?? 0;
      return S(k);
    }), Ce = C(() => i.value ? n("wallpaperSwitcher.folderStatus.detected", {
      count: i.value.count
    }) : l.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), mt = async () => {
      r.value = !0;
      try {
        const [k, K] = await Promise.all([
          ms(),
          un()
        ]);
        if (l.value = k, a.value = K, k.folderPath)
          try {
            i.value = await dn(k.folderPath);
          } catch {
            i.value = null;
          }
      } catch (k) {
        T.msg(String(k), "error");
      } finally {
        r.value = !1;
      }
    }, nl = async () => {
      c.value = !0;
      try {
        await $t(l.value), await f(), T.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (k) {
        T.msg(String(k), "error");
      } finally {
        c.value = !1;
      }
    }, ll = async () => {
      const k = await Bt({
        multiple: !1,
        directory: !1,
        filters: [
          { name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }
        ]
      });
      if (typeof k == "string") {
        l.value.fixedImagePath = k, l.value.mode = "fixed";
        try {
          await hn(k), await mt(), T.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
        } catch (K) {
          T.msg(String(K), "error");
        }
      }
    }, At = async () => {
      if (!l.value.folderPath) {
        T.msg(n("wallpaperSwitcher.messages.selectFolderFirst"), "warning");
        return;
      }
      try {
        i.value = await dn(l.value.folderPath), i.value.count === 0 ? T.msg(n("wallpaperSwitcher.messages.noImagesInFolder"), "warning") : T.msg(Ce.value, "success");
      } catch (k) {
        T.msg(String(k), "error");
      }
    }, al = async () => {
      const k = await Bt({ multiple: !1, directory: !0 });
      typeof k == "string" && (l.value.folderPath = k, l.value.mode = "folder", await At());
    }, ol = async () => {
      p.value = !0;
      try {
        await $t(l.value), await ys(), await f(), T.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (k) {
        T.msg(String(k), "error");
      } finally {
        p.value = !1;
      }
    }, sl = async () => {
      if (!a.value?.currentPath) {
        T.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      l.value.mode = "fixed", l.value.fixedImagePath = a.value.currentPath, l.value.scheduleEnabled = !1;
      try {
        await hn(a.value.currentPath), await mt(), T.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
      } catch (k) {
        T.msg(String(k), "error");
      }
    }, il = async () => {
      w.value = !0;
      try {
        await Cs(), await f(), T.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (k) {
        T.msg(String(k), "error");
      } finally {
        w.value = !1;
      }
    }, rl = async () => {
      v.value = !0;
      try {
        await Ls();
      } catch (k) {
        T.msg(String(k), "error");
      } finally {
        v.value = !1;
      }
    }, cl = (k) => {
      l.value = k;
    }, ul = async () => {
      await t.close();
    };
    return je(async () => {
      await mt(), await gt();
    }), mn(() => {
    }), (k, K) => (y(), _("main", Kr, [
      u(nr, {
        "active-view": o(I),
        "wallhaven-source": o(Q),
        "wallhaven-loading": o(m),
        "schedule-enabled": o(l).scheduleEnabled,
        "scheduler-running": !!o(a)?.schedulerRunning,
        onBack: o(at),
        onClose: ul,
        onOpenWallhaven: o(ee),
        onSetWallhavenSource: o(dt)
      }, null, 8, ["active-view", "wallhaven-source", "wallhaven-loading", "schedule-enabled", "scheduler-running", "onBack", "onOpenWallhaven", "onSetWallhavenSource"]),
      o(a) && !o(a).supported ? (y(), _(
        "section",
        Gr,
        g(o(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : M("v-if", !0),
      o(I) === "switcher" ? (y(), j(Vi, {
        key: 1,
        config: o(l),
        loading: o(r),
        "preview-src": o(ft),
        "current-wallpaper-name": o(vt),
        "source-label": o(P),
        "resolution-label": o(Et),
        "next-switch-label": o(N),
        "folder-count-label": o(Ce),
        "cache-size-label": o(B),
        switching: o(p),
        "clearing-cache": o(w),
        "opening-cache": o(v),
        saving: o(c),
        onUpdateConfig: cl,
        onChooseImage: ll,
        onChooseFolder: al,
        onScanFolder: At,
        onOpenWallhavenGrid: o(ee),
        onSwitchNow: ol,
        onSetCurrentAsFixed: sl,
        onClearCache: il,
        onOpenCacheDir: rl,
        onPersistConfig: nl
      }, null, 8, ["config", "loading", "preview-src", "current-wallpaper-name", "source-label", "resolution-label", "next-switch-label", "folder-count-label", "cache-size-label", "switching", "clearing-cache", "opening-cache", "saving", "onOpenWallhavenGrid"])) : (y(), j(Ir, {
        key: 2,
        keyword: o(R),
        "onUpdate:keyword": K[0] || (K[0] = (dl) => fn(R) ? R.value = dl : null),
        category: o(L),
        loading: o(m),
        error: o(b),
        wallpapers: o(ke),
        "loaded-thumb-ids": o(nt),
        "working-actions": o(ye),
        "download-progress": o(be),
        page: o(E),
        "last-page": o(d),
        "source-label": o(lt),
        "screen-label": o(Me),
        "set-thumb-ref": o(ct),
        onRefresh: o(ut),
        onSetCategory: o(ht),
        onOpenPreview: o(ot),
        onMarkThumbLoaded: o(rt),
        onSetWallpaper: o(_e),
        onDownloadWallpaper: o(Ne),
        onPrevPage: o(pt),
        onNextPage: o(wt)
      }, null, 8, ["keyword", "category", "loading", "error", "wallpapers", "loaded-thumb-ids", "working-actions", "download-progress", "page", "last-page", "source-label", "screen-label", "set-thumb-ref", "onRefresh", "onSetCategory", "onOpenPreview", "onMarkThumbLoaded", "onSetWallpaper", "onDownloadWallpaper", "onPrevPage", "onNextPage"])),
      u(Br, {
        wallpaper: o(U),
        loading: o(ue),
        "load-failed": o(z),
        "working-actions": o(ye),
        "download-progress": o(be),
        onClose: o(st),
        onLoaded: o(it),
        onFailed: o(Y),
        onDownload: o(Ne),
        onSetWallpaper: o(_e)
      }, null, 8, ["wallpaper", "loading", "load-failed", "working-actions", "download-progress", "onClose", "onLoaded", "onFailed", "onDownload", "onSetWallpaper"])
    ]));
  }
}), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ur
}, Symbol.toStringTag, { value: "Module" }));
export {
  Qr as activate
};
