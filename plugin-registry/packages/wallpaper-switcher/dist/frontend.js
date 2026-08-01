import { getCurrentInstance as de, inject as te, ref as L, computed as C, unref as o, readonly as dl, getCurrentScope as hl, onScopeDispose as pl, onMounted as $e, nextTick as pn, watch as Ye, isRef as wn, warn as wl, provide as gl, defineComponent as N, createElementBlock as _, openBlock as m, mergeProps as fl, renderSlot as he, createElementVNode as i, normalizeClass as z, createVNode as u, Transition as zt, withCtx as ne, withDirectives as Re, normalizeStyle as De, createTextVNode as H, toDisplayString as g, vShow as He, shallowReactive as vl, createBlock as j, createCommentVNode as R, resolveDynamicComponent as gn, Fragment as Z, withModifiers as Oe, isVNode as Le, render as Ve, onUnmounted as fn, renderList as We, withKeys as vn } from "vue";
import { useI18n as ie } from "vue-i18n";
const Hr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => Ar)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function ml(e, t, n, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? l : n === "a" ? l.call(e) : l ? l.value : t.get(e);
}
function yl(e, t, n, l, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Fe;
const G = "__TAURI_TO_IPC_KEY__";
function bl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function h(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function kl(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class _l {
  get rid() {
    return ml(this, Fe, "f");
  }
  constructor(t) {
    Fe.set(this, void 0), yl(this, Fe, t);
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
Fe = /* @__PURE__ */ new WeakMap();
class mn {
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
    return new Ce(this.width * t, this.height * t);
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
class Ce {
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
    return new mn(this.width / t, this.height / t);
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
class ue {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof mn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ce ? this.size : this.size.toPhysical(t);
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
class yn {
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
    return new yn(this.x / t, this.y / t);
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
class Me {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof yn ? this.position : this.position.toLogical(t);
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
var D;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(D || (D = {}));
async function bn(e, t) {
  await h("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Be(e, t, n) {
  var l;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (l = n?.target) !== null && l !== void 0 ? l : { kind: "Any" };
  return h("plugin:event|listen", {
    event: e,
    target: a,
    handler: bl(t)
  }).then((r) => async () => bn(e, r));
}
async function Cl(e, t, n) {
  return Be(e, (l) => {
    bn(e, l.id), t(l);
  }, n);
}
async function Sl(e, t) {
  await h("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Ll(e, t, n) {
  await h("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Se extends _l {
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
    }).then((a) => new Se(a));
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
    }).then((n) => new Se(n));
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
    return h("plugin:image|from_path", { path: t }).then((n) => new Se(n));
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
  return e == null ? null : typeof e == "string" ? e : e instanceof Se ? e.rid : e;
}
var kt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(kt || (kt = {}));
class Wl {
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
function kn() {
  return new _n(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function vt() {
  return h("plugin:window|get_all_windows").then((e) => e.map((t) => new _n(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const mt = ["tauri://created", "tauri://error"];
class _n {
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
    return (n = (await vt()).find((l) => l.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return kn();
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
      const l = this.listeners[t];
      l.splice(l.indexOf(n), 1);
    } : Be(t, n, {
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
    } : Cl(t, n, {
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
    if (mt.includes(t)) {
      for (const l of this.listeners[t] || [])
        l({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Sl(t, n);
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
    if (mt.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: l
        });
      return;
    }
    return Ll(t, n, l);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return mt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return h("plugin:window|outer_position", {
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
    return h("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ce(t));
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
    }).then((t) => new Ce(t));
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
    return t && (t === kt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), h("plugin:window|request_user_attention", {
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
    return h("plugin:window|set_min_size", {
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
    return h("plugin:window|set_max_size", {
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
      value: t instanceof Me ? t : new Me(t)
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
      value: t instanceof Me ? t : new Me(t)
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
      n.payload = new Ce(n.payload), t(n);
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
    return this.listen(D.WINDOW_CLOSE_REQUESTED, async (n) => {
      const l = new Wl(n);
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
    const n = await this.listen(D.DRAG_ENTER, (s) => {
      t({
        ...s,
        payload: {
          type: "enter",
          paths: s.payload.paths,
          position: new Y(s.payload.position)
        }
      });
    }), l = await this.listen(D.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new Y(s.payload.position)
        }
      });
    }), a = await this.listen(D.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new Y(s.payload.position)
        }
      });
    }), r = await this.listen(D.DRAG_LEAVE, (s) => {
      t({ ...s, payload: { type: "leave" } });
    });
    return () => {
      n(), a(), l(), r();
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
var At;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(At || (At = {}));
var Rt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Rt || (Rt = {}));
var Dt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Dt || (Dt = {}));
async function Ht(e = {}) {
  return typeof e == "object" && Object.freeze(e), await h("plugin:dialog|open", { options: e });
}
const Cn = Symbol(), Ee = "el", Pl = "is-", ee = (e, t, n, l, a) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), l && (r += `__${l}`), a && (r += `--${a}`), r;
}, Sn = Symbol("namespaceContextKey"), zl = (e) => {
  const t = e || (de() ? te(Sn, L(Ee)) : L(Ee));
  return C(() => o(t) || Ee);
}, $t = (e, t) => {
  const n = zl(t);
  return {
    namespace: n,
    b: (d = "") => ee(n.value, e, d, "", ""),
    e: (d) => d ? ee(n.value, e, "", d, "") : "",
    m: (d) => d ? ee(n.value, e, "", "", d) : "",
    be: (d, f) => d && f ? ee(n.value, e, d, f, "") : "",
    em: (d, f) => d && f ? ee(n.value, e, "", d, f) : "",
    bm: (d, f) => d && f ? ee(n.value, e, d, "", f) : "",
    bem: (d, f, b) => d && f && b ? ee(n.value, e, d, f, b) : "",
    is: (d, ...f) => {
      const b = f.length >= 1 ? f[0] : !0;
      return d && b ? `${Pl}${d}` : "";
    },
    cssVar: (d) => {
      const f = {};
      for (const b in d)
        d[b] && (f[`--${n.value}-${b}`] = d[b]);
      return f;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const f = {};
      for (const b in d)
        d[b] && (f[`--${n.value}-${e}-${b}`] = d[b]);
      return f;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const $l = Object.prototype.hasOwnProperty, Vt = (e, t) => $l.call(e, t), Pe = (e) => typeof e == "function", le = (e) => typeof e == "string", Ln = (e) => e !== null && typeof e == "object";
var Ol = typeof global == "object" && global && global.Object === Object && global, Tl = typeof self == "object" && self && self.Object === Object && self, Ot = Ol || Tl || Function("return this")(), pe = Ot.Symbol, Wn = Object.prototype, Il = Wn.hasOwnProperty, jl = Wn.toString, ke = pe ? pe.toStringTag : void 0;
function Nl(e) {
  var t = Il.call(e, ke), n = e[ke];
  try {
    e[ke] = void 0;
    var l = !0;
  } catch {
  }
  var a = jl.call(e);
  return l && (t ? e[ke] = n : delete e[ke]), a;
}
var xl = Object.prototype, Ml = xl.toString;
function Fl(e) {
  return Ml.call(e);
}
var El = "[object Null]", Al = "[object Undefined]", Bt = pe ? pe.toStringTag : void 0;
function Pn(e) {
  return e == null ? e === void 0 ? Al : El : Bt && Bt in Object(e) ? Nl(e) : Fl(e);
}
function Rl(e) {
  return e != null && typeof e == "object";
}
var Dl = "[object Symbol]";
function Tt(e) {
  return typeof e == "symbol" || Rl(e) && Pn(e) == Dl;
}
function Hl(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length, a = Array(l); ++n < l; )
    a[n] = t(e[n], n, e);
  return a;
}
var It = Array.isArray, Kt = pe ? pe.prototype : void 0, Gt = Kt ? Kt.toString : void 0;
function zn(e) {
  if (typeof e == "string")
    return e;
  if (It(e))
    return Hl(e, zn) + "";
  if (Tt(e))
    return Gt ? Gt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $n(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vl = "[object AsyncFunction]", Bl = "[object Function]", Kl = "[object GeneratorFunction]", Gl = "[object Proxy]";
function Ul(e) {
  if (!$n(e))
    return !1;
  var t = Pn(e);
  return t == Bl || t == Kl || t == Vl || t == Gl;
}
var yt = Ot["__core-js_shared__"], Ut = function() {
  var e = /[^.]+$/.exec(yt && yt.keys && yt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zl(e) {
  return !!Ut && Ut in e;
}
var ql = Function.prototype, Jl = ql.toString;
function Ql(e) {
  if (e != null) {
    try {
      return Jl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yl = /[\\^$.*+?()[\]{}|]/g, Xl = /^\[object .+?Constructor\]$/, ea = Function.prototype, ta = Object.prototype, na = ea.toString, la = ta.hasOwnProperty, aa = RegExp(
  "^" + na.call(la).replace(Yl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oa(e) {
  if (!$n(e) || Zl(e))
    return !1;
  var t = Ul(e) ? aa : Xl;
  return t.test(Ql(e));
}
function ia(e, t) {
  return e?.[t];
}
function On(e, t) {
  var n = ia(e, t);
  return oa(n) ? n : void 0;
}
function sa(e, t) {
  return e === t || e !== e && t !== t;
}
var ra = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ca = /^\w*$/;
function ua(e, t) {
  if (It(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Tt(e) ? !0 : ca.test(e) || !ra.test(e) || t != null && e in Object(t);
}
var ze = On(Object, "create");
function da() {
  this.__data__ = ze ? ze(null) : {}, this.size = 0;
}
function ha(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var pa = "__lodash_hash_undefined__", wa = Object.prototype, ga = wa.hasOwnProperty;
function fa(e) {
  var t = this.__data__;
  if (ze) {
    var n = t[e];
    return n === pa ? void 0 : n;
  }
  return ga.call(t, e) ? t[e] : void 0;
}
var va = Object.prototype, ma = va.hasOwnProperty;
function ya(e) {
  var t = this.__data__;
  return ze ? t[e] !== void 0 : ma.call(t, e);
}
var ba = "__lodash_hash_undefined__";
function ka(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ze && t === void 0 ? ba : t, this;
}
function ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
ae.prototype.clear = da;
ae.prototype.delete = ha;
ae.prototype.get = fa;
ae.prototype.has = ya;
ae.prototype.set = ka;
function _a() {
  this.__data__ = [], this.size = 0;
}
function Xe(e, t) {
  for (var n = e.length; n--; )
    if (sa(e[n][0], t))
      return n;
  return -1;
}
var Ca = Array.prototype, Sa = Ca.splice;
function La(e) {
  var t = this.__data__, n = Xe(t, e);
  if (n < 0)
    return !1;
  var l = t.length - 1;
  return n == l ? t.pop() : Sa.call(t, n, 1), --this.size, !0;
}
function Wa(e) {
  var t = this.__data__, n = Xe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Pa(e) {
  return Xe(this.__data__, e) > -1;
}
function za(e, t) {
  var n = this.__data__, l = Xe(n, e);
  return l < 0 ? (++this.size, n.push([e, t])) : n[l][1] = t, this;
}
function fe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
fe.prototype.clear = _a;
fe.prototype.delete = La;
fe.prototype.get = Wa;
fe.prototype.has = Pa;
fe.prototype.set = za;
var $a = On(Ot, "Map");
function Oa() {
  this.size = 0, this.__data__ = {
    hash: new ae(),
    map: new ($a || fe)(),
    string: new ae()
  };
}
function Ta(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function et(e, t) {
  var n = e.__data__;
  return Ta(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ia(e) {
  var t = et(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ja(e) {
  return et(this, e).get(e);
}
function Na(e) {
  return et(this, e).has(e);
}
function xa(e, t) {
  var n = et(this, e), l = n.size;
  return n.set(e, t), this.size += n.size == l ? 0 : 1, this;
}
function se(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
se.prototype.clear = Oa;
se.prototype.delete = Ia;
se.prototype.get = ja;
se.prototype.has = Na;
se.prototype.set = xa;
var Ma = "Expected a function";
function jt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ma);
  var n = function() {
    var l = arguments, a = t ? t.apply(this, l) : l[0], r = n.cache;
    if (r.has(a))
      return r.get(a);
    var s = e.apply(this, l);
    return n.cache = r.set(a, s) || r, s;
  };
  return n.cache = new (jt.Cache || se)(), n;
}
jt.Cache = se;
var Fa = 500;
function Ea(e) {
  var t = jt(e, function(l) {
    return n.size === Fa && n.clear(), l;
  }), n = t.cache;
  return t;
}
var Aa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ra = /\\(\\)?/g, Da = Ea(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Aa, function(n, l, a, r) {
    t.push(a ? r.replace(Ra, "$1") : l || n);
  }), t;
});
function Ha(e) {
  return e == null ? "" : zn(e);
}
function Va(e, t) {
  return It(e) ? e : ua(e, t) ? [e] : Da(Ha(e));
}
function Ba(e) {
  if (typeof e == "string" || Tt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ka(e, t) {
  t = Va(t, e);
  for (var n = 0, l = t.length; e != null && n < l; )
    e = e[Ba(t[n++])];
  return n && n == l ? e : void 0;
}
function Ga(e, t, n) {
  var l = e == null ? void 0 : Ka(e, t);
  return l === void 0 ? n : l;
}
function Ua(e) {
  for (var t = -1, n = e == null ? 0 : e.length, l = {}; ++t < n; ) {
    var a = e[t];
    l[a[0]] = a[1];
  }
  return l;
}
const Tn = (e) => e === void 0, Zt = (e) => typeof e == "boolean", oe = (e) => typeof e == "number", _t = (e) => typeof Element > "u" ? !1 : e instanceof Element, Za = (e) => le(e) ? !Number.isNaN(Number(e)) : !1;
var qt;
const re = typeof window < "u", qa = (e) => typeof e == "string", Ja = () => {
};
re && ((qt = window?.navigator) != null && qt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Nt(e) {
  return typeof e == "function" ? e() : o(e);
}
function Qa(e) {
  return e;
}
function xt(e) {
  return hl() ? (pl(e), !0) : !1;
}
function Ya(e, t = !0) {
  de() ? $e(e) : t ? e() : pn(e);
}
function In(e, t, n = {}) {
  const {
    immediate: l = !0
  } = n, a = L(!1);
  let r = null;
  function s() {
    r && (clearTimeout(r), r = null);
  }
  function c() {
    a.value = !1, s();
  }
  function p(...v) {
    s(), a.value = !0, r = setTimeout(() => {
      a.value = !1, r = null, e(...v);
    }, Nt(t));
  }
  return l && (a.value = !0, re && p()), xt(c), {
    isPending: dl(a),
    start: p,
    stop: c
  };
}
function jn(e) {
  var t;
  const n = Nt(e);
  return (t = n?.$el) != null ? t : n;
}
const Nn = re ? window : void 0;
function xn(...e) {
  let t, n, l, a;
  if (qa(e[0]) || Array.isArray(e[0]) ? ([n, l, a] = e, t = Nn) : [t, n, l, a] = e, !t)
    return Ja;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const r = [], s = () => {
    r.forEach((w) => w()), r.length = 0;
  }, c = (w, y, I, T) => (w.addEventListener(y, I, T), () => w.removeEventListener(y, I, T)), p = Ye(() => [jn(t), Nt(a)], ([w, y]) => {
    s(), w && r.push(...n.flatMap((I) => l.map((T) => c(w, I, T, y))));
  }, { immediate: !0, flush: "post" }), v = () => {
    p(), s();
  };
  return xt(v), v;
}
function Xa(e, t = !1) {
  const n = L(), l = () => n.value = !!e();
  return l(), Ya(l, t), n;
}
const Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qt = "__vueuse_ssr_handlers__";
Jt[Qt] = Jt[Qt] || {};
var Yt = Object.getOwnPropertySymbols, eo = Object.prototype.hasOwnProperty, to = Object.prototype.propertyIsEnumerable, no = (e, t) => {
  var n = {};
  for (var l in e)
    eo.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && Yt)
    for (var l of Yt(e))
      t.indexOf(l) < 0 && to.call(e, l) && (n[l] = e[l]);
  return n;
};
function lo(e, t, n = {}) {
  const l = n, { window: a = Nn } = l, r = no(l, ["window"]);
  let s;
  const c = Xa(() => a && "ResizeObserver" in a), p = () => {
    s && (s.disconnect(), s = void 0);
  }, v = Ye(() => jn(e), (y) => {
    p(), c.value && a && y && (s = new ResizeObserver(t), s.observe(y, r));
  }, { immediate: !0, flush: "post" }), w = () => {
    p(), v();
  };
  return xt(w), {
    isSupported: c,
    stop: w
  };
}
var Xt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Xt || (Xt = {}));
var ao = Object.defineProperty, en = Object.getOwnPropertySymbols, oo = Object.prototype.hasOwnProperty, io = Object.prototype.propertyIsEnumerable, tn = (e, t, n) => t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, so = (e, t) => {
  for (var n in t || (t = {}))
    oo.call(t, n) && tn(e, n, t[n]);
  if (en)
    for (var n of en(t))
      io.call(t, n) && tn(e, n, t[n]);
  return e;
};
const ro = {
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
so({
  linear: Qa
}, ro);
const nn = {
  current: 0
}, ln = L(0), Mn = 2e3, an = Symbol("elZIndexContextKey"), Fn = Symbol("zIndexContextKey"), co = (e) => {
  const t = de() ? te(an, nn) : nn, n = e || (de() ? te(Fn, void 0) : void 0), l = C(() => {
    const s = o(n);
    return oe(s) ? s : Mn;
  }), a = C(() => l.value + ln.value), r = () => (t.current++, ln.value = t.current, a.value);
  return !re && te(an), {
    initialZIndex: l,
    currentZIndex: a,
    nextZIndex: r
  };
};
var uo = {
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
const ho = (e) => (t, n) => po(t, n, o(e)), po = (e, t, n) => Ga(n, e, e).replace(/\{(\w+)\}/g, (l, a) => {
  var r;
  return `${(r = t?.[a]) != null ? r : `{${a}}`}`;
}), wo = (e) => {
  const t = C(() => o(e).name), n = wn(e) ? e : L(e);
  return {
    lang: t,
    locale: n,
    t: ho(e)
  };
}, En = Symbol("localeContextKey"), go = (e) => {
  const t = e || te(En, L());
  return wo(C(() => t.value || uo));
}, An = "__epPropKey", V = (e) => e, fo = (e) => Ln(e) && !!e[An], Rn = (e, t) => {
  if (!Ln(e) || fo(e))
    return e;
  const { values: n, required: l, default: a, type: r, validator: s } = e, p = {
    type: r,
    required: !!l,
    validator: n || s ? (v) => {
      let w = !1, y = [];
      if (n && (y = Array.from(n), Vt(e, "default") && y.push(a), w || (w = y.includes(v))), s && (w || (w = s(v))), !w && y.length > 0) {
        const I = [...new Set(y)].map((T) => JSON.stringify(T)).join(", ");
        wl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(v)}.`);
      }
      return w;
    } : void 0,
    [An]: !0
  };
  return Vt(e, "default") && (p.default = a), p;
}, ve = (e) => Ua(Object.entries(e).map(([t, n]) => [
  t,
  Rn(n, t)
])), vo = ["", "default", "small", "large"], mo = Rn({
  type: String,
  values: vo,
  required: !1
}), yo = Symbol("size"), bo = Symbol("emptyValuesContextKey"), ko = ve({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Pe(e) ? !e() : !e
  }
}), on = (e) => Object.keys(e), Ge = L();
function Dn(e, t = void 0) {
  return de() ? te(Cn, Ge) : Ge;
}
function Hn(e, t) {
  const n = Dn(), l = $t(e, C(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || Ee;
  })), a = go(C(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), r = co(C(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || Mn;
  })), s = C(() => {
    var c;
    return o(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return Vn(C(() => o(n) || {})), {
    ns: l,
    locale: a,
    zIndex: r,
    size: s
  };
}
const Vn = (e, t, n = !1) => {
  var l;
  const a = !!de(), r = a ? Dn() : void 0, s = (l = void 0) != null ? l : a ? gl : void 0;
  if (!s)
    return;
  const c = C(() => {
    const p = o(e);
    return r?.value ? _o(r.value, p) : p;
  });
  return s(Cn, c), s(En, C(() => c.value.locale)), s(Sn, C(() => c.value.namespace)), s(Fn, C(() => c.value.zIndex)), s(yo, {
    size: C(() => c.value.size || "")
  }), s(bo, C(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !Ge.value) && (Ge.value = c.value), c;
}, _o = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...on(e), ...on(t)])], l = {};
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
function Ct(e, t = "px") {
  if (!e)
    return "";
  if (oe(e) || Za(e))
    return `${e}${t}`;
  if (le(e))
    return e;
}
const Bn = (e, t) => (e.install = (n) => {
  for (const l of [e, ...Object.values({})])
    n.component(l.name, l);
}, e), Kn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Co = ve({
  size: {
    type: V([Number, String])
  },
  color: {
    type: String
  }
}), So = N({
  name: "ElIcon",
  inheritAttrs: !1
}), Lo = /* @__PURE__ */ N({
  ...So,
  props: Co,
  setup(e) {
    const t = e, n = $t("icon"), l = C(() => {
      const { size: a, color: r } = t;
      return !a && !r ? {} : {
        fontSize: Tn(a) ? void 0 : Ct(a),
        "--color": r
      };
    });
    return (a, r) => (m(), _("i", fl({
      class: o(n).b(),
      style: o(l)
    }, a.$attrs), [
      he(a.$slots, "default")
    ], 16));
  }
});
var Wo = /* @__PURE__ */ tt(Lo, [["__file", "icon.vue"]]);
const Ue = Bn(Wo);
/*! Element Plus Icons Vue v2.3.1 */
var Po = /* @__PURE__ */ N({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (m(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), zo = Po, $o = /* @__PURE__ */ N({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (m(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Gn = $o, Oo = /* @__PURE__ */ N({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (m(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), To = Oo, Io = /* @__PURE__ */ N({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (m(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), jo = Io, No = /* @__PURE__ */ N({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (m(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), xo = No;
const Un = V([
  String,
  Object,
  Function
]), Mo = {
  Close: Gn
}, Fo = {
  Close: Gn
}, Ze = {
  success: jo,
  warning: xo,
  error: zo,
  info: To
}, Eo = (e) => e, Ae = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ao = ve({
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
}), Ro = N({
  name: "ElBadge"
}), Do = /* @__PURE__ */ N({
  ...Ro,
  props: Ao,
  setup(e, { expose: t }) {
    const n = e, l = $t("badge"), a = C(() => n.isDot ? "" : oe(n.value) && oe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = C(() => {
      var s, c, p, v, w;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ct(-((c = (s = n.offset) == null ? void 0 : s[0]) != null ? c : 0)),
          marginTop: Ct((v = (p = n.offset) == null ? void 0 : p[1]) != null ? v : 0)
        },
        (w = n.badgeStyle) != null ? w : {}
      ];
    });
    return t({
      content: a
    }), (s, c) => (m(), _("div", {
      class: z(o(l).b())
    }, [
      he(s.$slots, "default"),
      u(zt, {
        name: `${o(l).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ne(() => [
          Re(i("sup", {
            class: z([
              o(l).e("content"),
              o(l).em("content", s.type),
              o(l).is("fixed", !!s.$slots.default),
              o(l).is("dot", s.isDot),
              o(l).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: De(o(r))
          }, [
            he(s.$slots, "content", { value: o(a) }, () => [
              H(g(o(a)), 1)
            ])
          ], 6), [
            [He, !s.hidden && (o(a) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ho = /* @__PURE__ */ tt(Do, [["__file", "badge.vue"]]);
const Vo = Bn(Ho), Bo = ve({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: V(Object)
  },
  size: mo,
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
  ...ko
}), U = {};
N({
  name: "ElConfigProvider",
  props: Bo,
  setup(e, { slots: t }) {
    Ye(() => e.message, (l) => {
      Object.assign(U, l ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Vn(e);
    return () => he(t, "default", { config: n?.value });
  }
});
const Zn = ["success", "info", "warning", "error"], A = Eo({
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
  appendTo: re ? document.body : void 0
}), Ko = ve({
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
    type: Un,
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
    values: Zn,
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
}), Go = {
  destroy: () => !0
}, q = vl([]), Uo = (e) => {
  const t = q.findIndex((a) => a.id === e), n = q[t];
  let l;
  return t > 0 && (l = q[t - 1]), { current: n, prev: l };
}, Zo = (e) => {
  const { prev: t } = Uo(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, qo = (e, t) => q.findIndex((l) => l.id === e) > 0 ? 16 : t, Jo = N({
  name: "ElMessage"
}), Qo = /* @__PURE__ */ N({
  ...Jo,
  props: Ko,
  emits: Go,
  setup(e, { expose: t }) {
    const n = e, { Close: l } = Fo, { ns: a, zIndex: r } = Hn("message"), { currentZIndex: s, nextZIndex: c } = r, p = L(), v = L(!1), w = L(0);
    let y;
    const I = C(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), T = C(() => {
      const $ = n.type;
      return { [a.bm("icon", $)]: $ && Ze[$] };
    }), F = C(() => n.icon || Ze[n.type] || ""), d = C(() => Zo(n.id)), f = C(() => qo(n.id, n.offset) + d.value), b = C(() => w.value + f.value), x = C(() => ({
      top: `${f.value}px`,
      zIndex: s.value
    }));
    function W() {
      n.duration !== 0 && ({ stop: y } = In(() => {
        B();
      }, n.duration));
    }
    function J() {
      y?.();
    }
    function B() {
      v.value = !1;
    }
    function me({ code: $ }) {
      $ === Ae.esc && B();
    }
    return $e(() => {
      W(), c(), v.value = !0;
    }), Ye(() => n.repeatNum, () => {
      J(), W();
    }), xn(document, "keydown", me), lo(p, () => {
      w.value = p.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: b,
      close: B
    }), ($, ye) => (m(), j(zt, {
      name: o(a).b("fade"),
      onBeforeLeave: $.onClose,
      onAfterLeave: (Te) => $.$emit("destroy"),
      persisted: ""
    }, {
      default: ne(() => [
        Re(i("div", {
          id: $.id,
          ref_key: "messageRef",
          ref: p,
          class: z([
            o(a).b(),
            { [o(a).m($.type)]: $.type },
            o(a).is("center", $.center),
            o(a).is("closable", $.showClose),
            o(a).is("plain", $.plain),
            $.customClass
          ]),
          style: De(o(x)),
          role: "alert",
          onMouseenter: J,
          onMouseleave: W
        }, [
          $.repeatNum > 1 ? (m(), j(o(Vo), {
            key: 0,
            value: $.repeatNum,
            type: o(I),
            class: z(o(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : R("v-if", !0),
          o(F) ? (m(), j(o(Ue), {
            key: 1,
            class: z([o(a).e("icon"), o(T)])
          }, {
            default: ne(() => [
              (m(), j(gn(o(F))))
            ]),
            _: 1
          }, 8, ["class"])) : R("v-if", !0),
          he($.$slots, "default", {}, () => [
            $.dangerouslyUseHTMLString ? (m(), _(Z, { key: 1 }, [
              R(" Caution here, message could've been compromised, never use user's input as message "),
              i("p", {
                class: z(o(a).e("content")),
                innerHTML: $.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (m(), _("p", {
              key: 0,
              class: z(o(a).e("content"))
            }, g($.message), 3))
          ]),
          $.showClose ? (m(), j(o(Ue), {
            key: 2,
            class: z(o(a).e("closeBtn")),
            onClick: Oe(B, ["stop"])
          }, {
            default: ne(() => [
              u(o(l))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : R("v-if", !0)
        ], 46, ["id"]), [
          [He, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Yo = /* @__PURE__ */ tt(Qo, [["__file", "message.vue"]]);
let Xo = 1;
const qn = (e) => {
  const t = !e || le(e) || Le(e) || Pe(e) ? { message: e } : e, n = {
    ...A,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (le(n.appendTo)) {
    let l = document.querySelector(n.appendTo);
    _t(l) || (l = document.body), n.appendTo = l;
  }
  return Zt(U.grouping) && !n.grouping && (n.grouping = U.grouping), oe(U.duration) && n.duration === 3e3 && (n.duration = U.duration), oe(U.offset) && n.offset === 16 && (n.offset = U.offset), Zt(U.showClose) && !n.showClose && (n.showClose = U.showClose), n;
}, ei = (e) => {
  const t = q.indexOf(e);
  if (t === -1)
    return;
  q.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ti = ({ appendTo: e, ...t }, n) => {
  const l = `message_${Xo++}`, a = t.onClose, r = document.createElement("div"), s = {
    ...t,
    id: l,
    onClose: () => {
      a?.(), ei(w);
    },
    onDestroy: () => {
      Ve(null, r);
    }
  }, c = u(Yo, s, Pe(s.message) || Le(s.message) ? {
    default: Pe(s.message) ? s.message : () => s.message
  } : null);
  c.appContext = n || we._context, Ve(c, r), e.appendChild(r.firstElementChild);
  const p = c.component, w = {
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
  return w;
}, we = (e = {}, t) => {
  if (!re)
    return { close: () => {
    } };
  const n = qn(e);
  if (n.grouping && q.length) {
    const a = q.find(({ vnode: r }) => {
      var s;
      return ((s = r.props) == null ? void 0 : s.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (oe(U.max) && q.length >= U.max)
    return { close: () => {
    } };
  const l = ti(n, t);
  return q.push(l), l.handler;
};
Zn.forEach((e) => {
  we[e] = (t = {}, n) => {
    const l = qn(t);
    return we({ ...l, type: e }, n);
  };
});
function ni(e) {
  for (const t of q)
    (!e || e === t.props.type) && t.handler.close();
}
we.closeAll = ni;
we._context = null;
const li = Kn(we, "$message"), Jn = [
  "success",
  "info",
  "warning",
  "error"
], ai = ve({
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
    values: [...Jn, ""],
    default: ""
  },
  zIndex: Number
}), oi = {
  destroy: () => !0
}, ii = N({
  name: "ElNotification"
}), si = /* @__PURE__ */ N({
  ...ii,
  props: ai,
  emits: oi,
  setup(e, { expose: t }) {
    const n = e, { ns: l, zIndex: a } = Hn("notification"), { nextZIndex: r, currentZIndex: s } = a, { Close: c } = Mo, p = L(!1);
    let v;
    const w = C(() => {
      const W = n.type;
      return W && Ze[n.type] ? l.m(W) : "";
    }), y = C(() => n.type && Ze[n.type] || n.icon), I = C(() => n.position.endsWith("right") ? "right" : "left"), T = C(() => n.position.startsWith("top") ? "top" : "bottom"), F = C(() => {
      var W;
      return {
        [T.value]: `${n.offset}px`,
        zIndex: (W = n.zIndex) != null ? W : s.value
      };
    });
    function d() {
      n.duration > 0 && ({ stop: v } = In(() => {
        p.value && b();
      }, n.duration));
    }
    function f() {
      v?.();
    }
    function b() {
      p.value = !1;
    }
    function x({ code: W }) {
      W === Ae.delete || W === Ae.backspace ? f() : W === Ae.esc ? p.value && b() : d();
    }
    return $e(() => {
      d(), r(), p.value = !0;
    }), xn(document, "keydown", x), t({
      visible: p,
      close: b
    }), (W, J) => (m(), j(zt, {
      name: o(l).b("fade"),
      onBeforeLeave: W.onClose,
      onAfterLeave: (B) => W.$emit("destroy"),
      persisted: ""
    }, {
      default: ne(() => [
        Re(i("div", {
          id: W.id,
          class: z([o(l).b(), W.customClass, o(I)]),
          style: De(o(F)),
          role: "alert",
          onMouseenter: f,
          onMouseleave: d,
          onClick: W.onClick
        }, [
          o(y) ? (m(), j(o(Ue), {
            key: 0,
            class: z([o(l).e("icon"), o(w)])
          }, {
            default: ne(() => [
              (m(), j(gn(o(y))))
            ]),
            _: 1
          }, 8, ["class"])) : R("v-if", !0),
          i("div", {
            class: z(o(l).e("group"))
          }, [
            i("h2", {
              class: z(o(l).e("title")),
              textContent: g(W.title)
            }, null, 10, ["textContent"]),
            Re(i("div", {
              class: z(o(l).e("content")),
              style: De(W.title ? void 0 : { margin: 0 })
            }, [
              he(W.$slots, "default", {}, () => [
                W.dangerouslyUseHTMLString ? (m(), _(Z, { key: 1 }, [
                  R(" Caution here, message could've been compromised, never use user's input as message "),
                  i("p", { innerHTML: W.message }, null, 8, ["innerHTML"])
                ], 2112)) : (m(), _("p", { key: 0 }, g(W.message), 1))
              ])
            ], 6), [
              [He, W.message]
            ]),
            W.showClose ? (m(), j(o(Ue), {
              key: 0,
              class: z(o(l).e("closeBtn")),
              onClick: Oe(b, ["stop"])
            }, {
              default: ne(() => [
                u(o(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : R("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [He, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ri = /* @__PURE__ */ tt(si, [["__file", "notification.vue"]]);
const qe = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, St = 16;
let ci = 1;
const ge = function(e = {}, t) {
  if (!re)
    return { close: () => {
    } };
  (le(e) || Le(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let l = e.offset || 0;
  qe[n].forEach(({ vm: w }) => {
    var y;
    l += (((y = w.el) == null ? void 0 : y.offsetHeight) || 0) + St;
  }), l += St;
  const a = `notification_${ci++}`, r = e.onClose, s = {
    ...e,
    offset: l,
    id: a,
    onClose: () => {
      ui(a, n, r);
    }
  };
  let c = document.body;
  _t(e.appendTo) ? c = e.appendTo : le(e.appendTo) && (c = document.querySelector(e.appendTo)), _t(c) || (c = document.body);
  const p = document.createElement("div"), v = u(ri, s, Pe(s.message) ? s.message : Le(s.message) ? () => s.message : null);
  return v.appContext = Tn(t) ? ge._context : t, v.props.onDestroy = () => {
    Ve(null, p);
  }, Ve(v, p), qe[n].push({ vm: v }), c.appendChild(p.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Jn.forEach((e) => {
  ge[e] = (t = {}, n) => ((le(t) || Le(t)) && (t = {
    message: t
  }), ge({ ...t, type: e }, n));
});
function ui(e, t, n) {
  const l = qe[t], a = l.findIndex(({ vm: v }) => {
    var w;
    return ((w = v.component) == null ? void 0 : w.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: r } = l[a];
  if (!r)
    return;
  n?.(r);
  const s = r.el.offsetHeight, c = t.split("-")[0];
  l.splice(a, 1);
  const p = l.length;
  if (!(p < 1))
    for (let v = a; v < p; v++) {
      const { el: w, component: y } = l[v].vm, I = Number.parseInt(w.style[c], 10) - s - St;
      y.props.offset = I;
    }
}
function di() {
  for (const e of Object.values(qe))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ge.closeAll = di;
ge._context = null;
const hi = Kn(ge, "$notify"), O = {
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
      showClose: r = !1
    } = e;
    l === "center" ? li({
      message: t,
      type: n,
      duration: a,
      showClose: r,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : hi({
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
var Lt;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(Lt || (Lt = {}));
async function pi() {
  return h("plugin:path|resolve_directory", {
    directory: Lt.AppCache
  });
}
async function wi(...e) {
  return h("plugin:path|join", { paths: e });
}
async function sn(e, t) {
  await h("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const gi = () => ({
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
}), fi = (e) => e ? /^https?:\/\//i.test(e) ? e : kl(e) : "", vi = () => h("wallpaper_get_config"), Wt = (e) => h("wallpaper_save_config", { config: e }), rn = () => h("wallpaper_get_status"), cn = (e) => h("wallpaper_scan_folder", { path: e }), un = (e) => h("wallpaper_set_fixed_image", { path: e }), mi = () => h("wallpaper_switch_now"), yi = (e) => h("wallpaper_fetch_wallhaven", { params: e }), bi = (e) => h("wallpaper_set_wallhaven_image", { wallpaper: e }), ki = (e) => h("wallpaper_download_wallhaven_image", { wallpaper: e }), _i = () => h("wallpaper_clear_cache"), Ci = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), Si = async () => {
  try {
    await h("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!Ci(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await pi(), t = await wi(e, "wallpaper-switcher");
  try {
    await sn(t);
  } catch {
    await sn(e);
  }
};
function Li({ config: e, refreshStatus: t }) {
  const { t: n } = ie(), l = L("switcher"), a = L([]), r = L(1), s = L(1), c = L(!1), p = L(""), v = L(""), w = L("general"), y = L("hot"), I = L(null), T = L(!1), F = L(!1), d = L(/* @__PURE__ */ new Map()), f = L(/* @__PURE__ */ new Set()), b = /* @__PURE__ */ new Map();
  let x = null, W = null, J = null, B = 0;
  const me = C(() => y.value === "hot" ? "Hot" : y.value === "favorites" ? "Favorites" : "Toplist"), $ = C(() => a.value.slice(0, 6)), ye = C(() => {
    const S = v.value.trim();
    return w.value === "nature" ? S ? `${S} nature` : "nature" : S || null;
  }), Te = C(() => w.value), be = (S) => {
    const P = String(S).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
      P
    ) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : P.length > 120 ? `${P.slice(0, 120)}...` : P;
  }, ce = (S, P) => {
    const E = new Map(d.value);
    P ? E.set(S, P) : E.delete(S), d.value = E;
  }, Ie = (S) => {
    const P = new Set(f.value);
    P.add(S), f.value = P;
  }, nt = (S, P) => {
    if (!(P instanceof HTMLImageElement)) {
      b.delete(S.id);
      return;
    }
    if (b.set(S.id, P), !x) {
      P.src = S.thumbs.large;
      return;
    }
    P.dataset.src = S.thumbs.large, x.observe(P);
  }, lt = () => {
    f.value = /* @__PURE__ */ new Set(), b.clear();
  }, at = async () => {
    e.value.wallhavenQuery = v.value.trim() || null, e.value.wallhavenCategory = w.value, e.value.wallhavenSource = y.value, e.value.mode = "wallhaven", await Wt(e.value);
  }, Q = async (S = r.value) => {
    const P = ++B;
    c.value = !0, p.value = "", a.value = [], lt();
    try {
      await at();
      const E = await yi({
        source: y.value,
        page: S,
        query: ye.value,
        category: Te.value
      });
      if (P !== B) return;
      a.value = E.data, r.value = E.page, s.value = Math.max(1, E.lastPage), await pn();
      for (const X of b.values())
        x && x.observe(X);
    } catch (E) {
      if (P !== B) return;
      a.value = [], p.value = be(E), O.msg(p.value, "error");
    } finally {
      P === B && (c.value = !1);
    }
  }, ot = () => Q(1), it = async (S) => {
    y.value = S, await Q(1);
  }, st = async (S) => {
    w.value = S, await Q(1);
  }, rt = async () => {
    v.value = "", w.value = e.value.wallhavenCategory || "general", y.value = e.value.wallhavenSource, r.value = 1, p.value = "", a.value = [], l.value = "wallhaven", await Q(1);
  }, ct = (S) => {
    I.value = S, T.value = !0, F.value = !1;
  }, je = () => {
    I.value = null, T.value = !1, F.value = !1;
  }, Ne = async () => {
    l.value = "switcher", je(), await t();
  }, xe = () => {
    T.value = !1;
  }, ut = () => {
    T.value = !1, F.value = !0;
  }, dt = async (S) => {
    if (!d.value.has(S.id)) {
      ce(S.id, "setting");
      try {
        O.msg(n("wallpaperSwitcher.messages.settingWallpaper"), "info"), await bi(S), await t(), O.msg(n("wallpaperSwitcher.messages.wallpaperSet"), "success");
      } catch (P) {
        O.msg(be(P), "error");
      } finally {
        ce(S.id, null);
      }
    }
  }, ht = async (S) => {
    if (!d.value.has(S.id)) {
      ce(S.id, "downloading");
      try {
        O.msg(n("wallpaperSwitcher.messages.downloadingWallpaper"), "info"), await ki(S), await t(), O.msg(n("wallpaperSwitcher.messages.wallpaperDownloaded"), "success");
      } catch (P) {
        O.msg(be(P), "error");
      } finally {
        ce(S.id, null);
      }
    }
  }, pt = async () => {
    r.value > 1 && await Q(r.value - 1);
  }, wt = async () => {
    r.value < s.value && await Q(r.value + 1);
  };
  return $e(() => {
    x = new IntersectionObserver(
      (S) => {
        for (const P of S) {
          if (!P.isIntersecting) continue;
          const E = P.target, X = E.dataset.src;
          X && E.src !== X && (E.src = X), x?.unobserve(E);
        }
      },
      { root: null, rootMargin: "120px" }
    ), W = null, J = null;
  }), fn(() => {
    x?.disconnect(), x = null, W?.(), J?.();
  }), {
    activeView: l,
    wallpapers: a,
    wallhavenPage: r,
    wallhavenLastPage: s,
    wallhavenLoading: c,
    wallhavenError: p,
    wallhavenKeyword: v,
    wallhavenCategory: w,
    wallhavenSource: y,
    previewWallpaper: I,
    previewLoading: T,
    previewLoadFailed: F,
    workingActions: d,
    loadedThumbIds: f,
    wallhavenSourceLabel: me,
    visibleWallpapers: $,
    openWallhavenGrid: rt,
    backToSwitcher: Ne,
    openPreview: ct,
    closePreview: je,
    markPreviewLoaded: xe,
    markPreviewFailed: ut,
    markThumbLoaded: Ie,
    setThumbRef: nt,
    refreshWallhaven: ot,
    setWallhavenSource: it,
    setWallhavenCategory: st,
    setWallpaperFromWallhaven: dt,
    downloadWallpaperFromWallhaven: ht,
    prevWallhavenPage: pt,
    nextWallhavenPage: wt,
    setupListeners: async () => {
      W = await Be("wallpaper-switcher-changed", t), J = await Be(
        "wallpaper-switcher-error",
        (S) => {
          O.msg(
            S.payload?.message || n("wallpaperSwitcher.messages.scheduleSwitchFailed"),
            "error"
          );
        }
      );
    }
  };
}
var Wi = {
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
function Pi() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function zi(e, t, n) {
  var l = typeof t.fill == "string" ? [t.fill] : t.fill || [], a = [], r = t.theme || n.theme;
  switch (r) {
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
var $i = Symbol("icon-context");
function M(e, t, n) {
  var l = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var s = Pi(), c = te($i, Wi);
      return function() {
        var p = r.size, v = r.strokeWidth, w = r.strokeLinecap, y = r.strokeLinejoin, I = r.theme, T = r.fill, F = r.spin, d = zi(s, {
          size: p,
          strokeWidth: v,
          strokeLinecap: w,
          strokeLinejoin: y,
          theme: I,
          fill: T
        }, c), f = [c.prefix + "-icon"];
        return f.push(c.prefix + "-icon-" + e), t && c.rtl && f.push(c.prefix + "-icon-rtl"), F && f.push(c.prefix + "-icon-spin"), u("span", {
          class: f.join(" ")
        }, [n(d)]);
      };
    }
  };
  return l;
}
const Oi = M("back", !0, function(e) {
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
}), Ti = M("check-small", !0, function(e) {
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
}), Je = M("close-small", !1, function(e) {
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
}), Qn = M("computer", !1, function(e) {
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
}), Ii = M("delete", !1, function(e) {
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
}), ji = M("download", !1, function(e) {
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
}), bt = M("folder-open", !0, function(e) {
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
}), dn = M("lightning", !0, function(e) {
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
}), Qe = M("loading", !0, function(e) {
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
}), _e = M("picture", !0, function(e) {
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
}), Ni = M("picture-album", !0, function(e) {
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
}), xi = M("pin", !0, function(e) {
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
}), Mi = M("preview-open", !1, function(e) {
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
}), Pt = M("refresh", !0, function(e) {
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
}), Fi = M("save", !0, function(e) {
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
}), Yn = M("search", !0, function(e) {
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
}), hn = M("time", !0, function(e) {
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
}), Ei = ["disabled", "onClick"], Ai = ["onClick", "onKeydown"], Xn = /* @__PURE__ */ N({
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
    ], r = (s, c) => {
      c || n("update:modelValue", s);
    };
    return (s, c) => (m(), _(
      Z,
      null,
      We(a, (p) => (m(), _(
        Z,
        {
          key: p.value
        },
        [
          s.tabClass === "button" ? (m(), _("button", {
            key: 0,
            type: "button",
            class: z({ [s.activeClass || "active"]: s.modelValue === p.value }),
            disabled: s.disabled,
            onClick: (v) => r(p.value, s.disabled)
          }, g(o(l)(p.labelKey)), 11, Ei)) : (m(), _("div", {
            key: 1,
            class: z(["seg-tab", {
              [s.activeClass || "active"]: s.modelValue === p.value,
              [s.disabledClass || "disabled"]: s.disabled
            }]),
            role: "tab",
            tabindex: "0",
            onClick: (v) => r(p.value, s.disabled),
            onKeydown: vn(Oe((v) => r(p.value, s.disabled), ["prevent"]), ["enter"])
          }, g(o(l)(p.labelKey)), 43, Ai))
        ],
        64
        /* STABLE_FRAGMENT */
      ))),
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), Ri = { class: "workspace-grid" }, Di = { class: "wallpaper-stage" }, Hi = { class: "stage-media" }, Vi = ["src", "alt"], Bi = {
  key: 1,
  class: "stage-empty"
}, Ki = { class: "stage-topline" }, Gi = { class: "eyebrow-pill" }, Ui = { class: "source-pill" }, Zi = { class: "stage-content" }, qi = { class: "stage-copy" }, Ji = ["title"], Qi = { class: "stage-meta" }, Yi = { class: "stage-actions" }, Xi = ["disabled"], es = { class: "source-workspace" }, ts = { class: "section-heading" }, ns = { class: "section-kicker" }, ls = { class: "ready-state" }, as = {
  class: "mode-picker",
  role: "tablist"
}, os = ["aria-selected", "onClick"], is = { class: "source-detail" }, ss = { class: "detail-title" }, rs = {
  key: 0,
  class: "folder-sort-picker"
}, cs = ["value"], us = ["value"], ds = ["title"], hs = { class: "path-icon" }, ps = { class: "path-copy" }, ws = { class: "path-cta" }, gs = { class: "detail-title" }, fs = {
  class: "online-source-tabs",
  role: "tablist"
}, vs = { class: "detail-title" }, ms = ["title"], ys = { class: "path-icon" }, bs = { class: "path-copy" }, ks = { class: "path-cta" }, _s = { class: "automation-card" }, Cs = { class: "automation-intro" }, Ss = { class: "automation-icon" }, Ls = { class: "section-kicker" }, Ws = { class: "schedule-toggle" }, Ps = ["checked"], zs = { class: "compact-control" }, $s = { class: "number-input" }, Os = ["value"], Ts = { class: "compact-control order-control" }, Is = { class: "mini-segmented" }, js = { class: "restore-check" }, Ns = ["checked"], xs = { class: "utility-bar" }, Ms = { class: "tray-callout" }, Fs = { class: "cache-summary" }, Es = { class: "utility-actions" }, As = ["disabled", "title"], Rs = ["disabled", "title"], Ds = ["disabled"], Hs = /* @__PURE__ */ N({
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
    const n = e, l = t, { t: a } = ie(), r = [
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
    ], s = [
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
    }, p = (d) => c({ mode: d }), v = (d) => c({ wallhavenSource: d }), w = (d) => c({ order: d }), y = (d) => c({
      folderSort: d.target.value
    }), I = (d) => c({ scheduleEnabled: d.target.checked }), T = (d) => c({
      intervalMinutes: Math.min(
        1440,
        Math.max(1, Number(d.target.value) || 1)
      )
    }), F = (d) => c({ autoRestore: d.target.checked });
    return (d, f) => (m(), _(
      "div",
      {
        class: z(["switcher-home", { "is-loading": d.loading }])
      },
      [
        i("section", Ri, [
          i("article", Di, [
            i("div", Hi, [
              d.previewSrc ? (m(), _("img", {
                key: 0,
                src: d.previewSrc,
                alt: o(a)("wallpaperSwitcher.currentPreviewAlt")
              }, null, 8, Vi)) : (m(), _("div", Bi, [
                u(o(_e), { size: 40 }),
                i(
                  "span",
                  null,
                  g(o(a)("wallpaperSwitcher.noCurrentWallpaper")),
                  1
                  /* TEXT */
                )
              ]))
            ]),
            f[12] || (f[12] = i(
              "div",
              { class: "stage-overlay" },
              null,
              -1
              /* HOISTED */
            )),
            i("div", Ki, [
              i("span", Gi, [
                f[11] || (f[11] = i(
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
              i(
                "span",
                Ui,
                g(d.sourceLabel),
                1
                /* TEXT */
              )
            ]),
            i("div", Zi, [
              i("div", qi, [
                i(
                  "p",
                  null,
                  g(o(a)("wallpaperSwitcher.currentWallpaper")),
                  1
                  /* TEXT */
                ),
                i("h1", { title: d.currentWallpaperName }, g(d.currentWallpaperName), 9, Ji),
                i("div", Qi, [
                  i("span", null, [
                    u(o(Qn), { size: 15 }),
                    H(
                      " " + g(d.resolutionLabel),
                      1
                      /* TEXT */
                    )
                  ]),
                  i("span", null, [
                    u(o(hn), { size: 15 }),
                    H(
                      " " + g(d.nextSwitchLabel),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              i("div", Yi, [
                i("button", {
                  type: "button",
                  class: "stage-btn stage-btn-primary",
                  disabled: d.switching,
                  onClick: f[0] || (f[0] = (b) => l("switchNow"))
                }, [
                  d.switching ? (m(), j(o(Pt), {
                    key: 0,
                    size: 16,
                    class: "spinning"
                  })) : (m(), j(o(dn), {
                    key: 1,
                    size: 16
                  })),
                  H(
                    " " + g(d.switching ? o(a)("wallpaperSwitcher.switching") : o(a)("wallpaperSwitcher.switchNow")),
                    1
                    /* TEXT */
                  )
                ], 8, Xi),
                i("button", {
                  type: "button",
                  class: "stage-btn stage-btn-ghost",
                  onClick: f[1] || (f[1] = (b) => l("setCurrentAsFixed"))
                }, [
                  u(o(xi), { size: 16 }),
                  H(
                    " " + g(o(a)("wallpaperSwitcher.setFixed")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          i("aside", es, [
            i("header", ts, [
              i("div", null, [
                i(
                  "span",
                  ns,
                  g(o(a)("wallpaperSwitcher.stepOne")),
                  1
                  /* TEXT */
                ),
                i(
                  "h2",
                  null,
                  g(o(a)("wallpaperSwitcher.chooseSource")),
                  1
                  /* TEXT */
                )
              ]),
              i("span", ls, [
                u(o(Ti), { size: 14 }),
                H(
                  " " + g(o(a)("wallpaperSwitcher.ready")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            i("div", as, [
              (m(), _(
                Z,
                null,
                We(r, (b) => i("button", {
                  key: b.value,
                  type: "button",
                  class: z({ active: d.config.mode === b.value }),
                  role: "tab",
                  "aria-selected": d.config.mode === b.value,
                  onClick: (x) => p(b.value)
                }, [
                  b.value === "folder" ? (m(), j(o(bt), {
                    key: 0,
                    size: 18
                  })) : b.value === "wallhaven" ? (m(), j(o(Yn), {
                    key: 1,
                    size: 18
                  })) : (m(), j(o(_e), {
                    key: 2,
                    size: 18
                  })),
                  i("span", null, [
                    i(
                      "strong",
                      null,
                      g(o(a)(b.labelKey)),
                      1
                      /* TEXT */
                    ),
                    i(
                      "small",
                      null,
                      g(o(a)(b.captionKey)),
                      1
                      /* TEXT */
                    )
                  ])
                ], 10, os)),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            i("div", is, [
              d.config.mode === "folder" ? (m(), _(
                Z,
                { key: 0 },
                [
                  i("div", ss, [
                    i("div", null, [
                      i(
                        "span",
                        null,
                        g(o(a)("wallpaperSwitcher.localLibrary")),
                        1
                        /* TEXT */
                      ),
                      i(
                        "strong",
                        null,
                        g(d.folderCountLabel),
                        1
                        /* TEXT */
                      )
                    ]),
                    i("button", {
                      type: "button",
                      class: "text-action",
                      onClick: f[2] || (f[2] = (b) => l("scanFolder"))
                    }, [
                      u(o(Pt), { size: 14 }),
                      H(
                        " " + g(o(a)("wallpaperSwitcher.scan")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  d.config.order === "sequential" ? (m(), _("label", rs, [
                    i(
                      "span",
                      null,
                      g(o(a)("wallpaperSwitcher.folderSortLabel")),
                      1
                      /* TEXT */
                    ),
                    i("select", {
                      value: d.config.folderSort,
                      onChange: y
                    }, [
                      (m(), _(
                        Z,
                        null,
                        We(s, (b) => i("option", {
                          key: b.value,
                          value: b.value
                        }, g(o(a)(b.labelKey)), 9, us)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ], 40, cs)
                  ])) : R("v-if", !0),
                  i("button", {
                    type: "button",
                    class: "path-picker",
                    title: d.config.folderPath || "",
                    onClick: f[3] || (f[3] = (b) => l("chooseFolder"))
                  }, [
                    i("span", hs, [
                      u(o(bt), { size: 18 })
                    ]),
                    i("span", ps, [
                      i(
                        "small",
                        null,
                        g(o(a)("wallpaperSwitcher.folderPath")),
                        1
                        /* TEXT */
                      ),
                      i(
                        "strong",
                        null,
                        g(d.config.folderPath || o(a)("wallpaperSwitcher.placeholders.selectFolder")),
                        1
                        /* TEXT */
                      )
                    ]),
                    i(
                      "span",
                      ws,
                      g(o(a)("wallpaperSwitcher.change")),
                      1
                      /* TEXT */
                    )
                  ], 8, ds)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : d.config.mode === "wallhaven" ? (m(), _(
                Z,
                { key: 1 },
                [
                  i("div", gs, [
                    i("div", null, [
                      f[13] || (f[13] = i(
                        "span",
                        null,
                        "Wallhaven",
                        -1
                        /* HOISTED */
                      )),
                      i(
                        "strong",
                        null,
                        g(o(a)("wallpaperSwitcher.onlineSourceHint")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  i("div", fs, [
                    u(Xn, {
                      "tab-class": "button",
                      "model-value": d.config.wallhavenSource,
                      "onUpdate:modelValue": v
                    }, null, 8, ["model-value"])
                  ]),
                  i("button", {
                    type: "button",
                    class: "browse-online-btn",
                    onClick: f[4] || (f[4] = (b) => l("openWallhavenGrid"))
                  }, [
                    u(o(_e), { size: 18 }),
                    i("span", null, [
                      i(
                        "strong",
                        null,
                        g(o(a)("wallpaperSwitcher.browseOnline")),
                        1
                        /* TEXT */
                      ),
                      i(
                        "small",
                        null,
                        g(o(a)("wallpaperSwitcher.browseOnlineHint")),
                        1
                        /* TEXT */
                      )
                    ]),
                    f[14] || (f[14] = i(
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
              )) : (m(), _(
                Z,
                { key: 2 },
                [
                  i("div", vs, [
                    i("div", null, [
                      i(
                        "span",
                        null,
                        g(o(a)("wallpaperSwitcher.fixedImage")),
                        1
                        /* TEXT */
                      ),
                      i(
                        "strong",
                        null,
                        g(o(a)("wallpaperSwitcher.fixedModeHint")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  i("button", {
                    type: "button",
                    class: "path-picker",
                    title: d.config.fixedImagePath || "",
                    onClick: f[5] || (f[5] = (b) => l("chooseImage"))
                  }, [
                    i("span", ys, [
                      u(o(_e), { size: 18 })
                    ]),
                    i("span", bs, [
                      i(
                        "small",
                        null,
                        g(o(a)("wallpaperSwitcher.imagePath")),
                        1
                        /* TEXT */
                      ),
                      i(
                        "strong",
                        null,
                        g(d.config.fixedImagePath || o(a)("wallpaperSwitcher.placeholders.selectImage")),
                        1
                        /* TEXT */
                      )
                    ]),
                    i(
                      "span",
                      ks,
                      g(o(a)("wallpaperSwitcher.change")),
                      1
                      /* TEXT */
                    )
                  ], 8, ms)
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ]),
        i("section", _s, [
          i("div", Cs, [
            i("span", Ss, [
              u(o(hn), { size: 20 })
            ]),
            i("div", null, [
              i(
                "span",
                Ls,
                g(o(a)("wallpaperSwitcher.stepTwo")),
                1
                /* TEXT */
              ),
              i(
                "h2",
                null,
                g(o(a)("wallpaperSwitcher.automationTitle")),
                1
                /* TEXT */
              ),
              i(
                "p",
                null,
                g(o(a)("wallpaperSwitcher.automationHint")),
                1
                /* TEXT */
              )
            ])
          ]),
          i("label", Ws, [
            i("span", null, [
              i(
                "strong",
                null,
                g(o(a)("wallpaperSwitcher.enableSchedule")),
                1
                /* TEXT */
              )
            ]),
            i("input", {
              checked: d.config.scheduleEnabled,
              type: "checkbox",
              onChange: I
            }, null, 40, Ps),
            f[15] || (f[15] = i(
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
          i("label", zs, [
            i(
              "span",
              null,
              g(o(a)("wallpaperSwitcher.interval")),
              1
              /* TEXT */
            ),
            i("span", $s, [
              i("input", {
                value: d.config.intervalMinutes,
                type: "number",
                min: "1",
                max: "1440",
                onInput: T
              }, null, 40, Os),
              i(
                "small",
                null,
                g(o(a)("wallpaperSwitcher.minutes")),
                1
                /* TEXT */
              )
            ])
          ]),
          i("div", Ts, [
            i(
              "span",
              null,
              g(o(a)("wallpaperSwitcher.rotationOrder")),
              1
              /* TEXT */
            ),
            i("div", Is, [
              i(
                "button",
                {
                  type: "button",
                  class: z({ active: d.config.order === "sequential" }),
                  onClick: f[6] || (f[6] = (b) => w("sequential"))
                },
                g(o(a)("wallpaperSwitcher.sequential")),
                3
                /* TEXT, CLASS */
              ),
              i(
                "button",
                {
                  type: "button",
                  class: z({ active: d.config.order === "random" }),
                  onClick: f[7] || (f[7] = (b) => w("random"))
                },
                g(o(a)("wallpaperSwitcher.random")),
                3
                /* TEXT, CLASS */
              )
            ])
          ]),
          i("label", js, [
            i("input", {
              checked: d.config.autoRestore,
              type: "checkbox",
              onChange: F
            }, null, 40, Ns),
            i("span", null, [
              i(
                "strong",
                null,
                g(o(a)("wallpaperSwitcher.autoRestoreShort")),
                1
                /* TEXT */
              ),
              i(
                "small",
                null,
                g(o(a)("wallpaperSwitcher.autoRestoreHint")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        i("footer", xs, [
          i("div", Ms, [
            u(o(dn), { size: 17 }),
            i("span", null, [
              i(
                "strong",
                null,
                g(o(a)("wallpaperSwitcher.trayQuickSwitch")),
                1
                /* TEXT */
              ),
              i(
                "small",
                null,
                g(o(a)("wallpaperSwitcher.trayQuickSwitchHint")),
                1
                /* TEXT */
              )
            ])
          ]),
          i("div", Fs, [
            i(
              "span",
              null,
              g(o(a)("wallpaperSwitcher.cache")),
              1
              /* TEXT */
            ),
            i(
              "strong",
              null,
              g(d.cacheSizeLabel),
              1
              /* TEXT */
            )
          ]),
          i("div", Es, [
            i("button", {
              type: "button",
              class: "utility-btn",
              disabled: d.clearingCache,
              title: o(a)("wallpaperSwitcher.clearCache"),
              onClick: f[8] || (f[8] = (b) => l("clearCache"))
            }, [
              u(o(Ii), { size: 16 })
            ], 8, As),
            i("button", {
              type: "button",
              class: "utility-btn",
              disabled: d.openingCache,
              title: o(a)("wallpaperSwitcher.openCache"),
              onClick: f[9] || (f[9] = (b) => l("openCacheDir"))
            }, [
              u(o(bt), { size: 16 })
            ], 8, Rs),
            i("button", {
              type: "button",
              class: "save-btn",
              disabled: d.saving,
              onClick: f[10] || (f[10] = (b) => l("persistConfig"))
            }, [
              u(o(Fi), { size: 17 }),
              H(
                " " + g(d.saving ? o(a)("wallpaperSwitcher.saving") : o(a)("wallpaperSwitcher.saveSettings")),
                1
                /* TEXT */
              )
            ], 8, Ds)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Vs = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Bs = {
  key: 0,
  class: "title"
}, Ks = { class: "title-icon" }, Gs = { class: "title-copy" }, Us = {
  key: 1,
  class: "title"
}, Zs = ["title"], qs = {
  key: 2,
  class: "window-actions"
}, Js = ["title"], Qs = ["title"], Ys = {
  key: 3,
  class: "window-actions"
}, Xs = ["aria-label"], er = ["title"], tr = /* @__PURE__ */ N({
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
    return (a, r) => (m(), _("header", Vs, [
      a.activeView === "switcher" ? (m(), _("div", Bs, [
        i("span", Ks, [
          u(o(_e), { size: 18 })
        ]),
        i("span", Gs, [
          i(
            "strong",
            null,
            g(o(l)("wallpaperSwitcher.title")),
            1
            /* TEXT */
          ),
          i(
            "small",
            null,
            g(o(l)("wallpaperSwitcher.titleSubtitle")),
            1
            /* TEXT */
          )
        ]),
        i(
          "span",
          {
            class: z(["title-status", { active: a.scheduleEnabled && a.schedulerRunning }])
          },
          [
            r[5] || (r[5] = i(
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
      ])) : (m(), _("div", Us, [
        i("button", {
          type: "button",
          class: "flat-icon",
          title: o(l)("wallpaperSwitcher.back"),
          onClick: r[0] || (r[0] = (s) => n("back"))
        }, [
          u(o(Oi), { size: 20 })
        ], 8, Zs),
        i(
          "span",
          null,
          g(o(l)("wallpaperSwitcher.wallhavenTitle")),
          1
          /* TEXT */
        )
      ])),
      a.activeView === "switcher" ? (m(), _("div", qs, [
        i("button", {
          type: "button",
          class: "online-entry-btn",
          title: o(l)("wallpaperSwitcher.openWallhaven"),
          onClick: r[1] || (r[1] = (s) => n("openWallhaven"))
        }, [
          u(o(Ni), { size: 18 }),
          i(
            "span",
            null,
            g(o(l)("wallpaperSwitcher.browseOnline")),
            1
            /* TEXT */
          )
        ], 8, Js),
        i("button", {
          type: "button",
          class: "icon-btn",
          title: o(l)("wallpaperSwitcher.close"),
          onClick: r[2] || (r[2] = (s) => n("close"))
        }, [
          u(o(Je), { size: 20 })
        ], 8, Qs)
      ])) : (m(), _("div", Ys, [
        i("div", {
          class: "source-toggle",
          role: "tablist",
          "aria-label": o(l)("wallpaperSwitcher.sourceToggle")
        }, [
          u(Xn, {
            "model-value": a.wallhavenSource,
            disabled: a.wallhavenLoading,
            "onUpdate:modelValue": r[3] || (r[3] = (s) => n("setWallhavenSource", s))
          }, null, 8, ["model-value", "disabled"])
        ], 8, Xs),
        i("button", {
          type: "button",
          class: "icon-btn",
          title: o(l)("wallpaperSwitcher.close"),
          onClick: r[4] || (r[4] = (s) => n("close"))
        }, [
          u(o(Je), { size: 20 })
        ], 8, er)
      ]))
    ]));
  }
}), nr = { class: "wallhaven-view" }, lr = { class: "filters filters--preview-style" }, ar = { class: "search-box wallhaven-search" }, or = ["value", "placeholder"], ir = ["title"], sr = ["aria-label"], rr = ["disabled", "onClick"], cr = { class: "wallhaven-meta" }, ur = ["title"], dr = { class: "grid-wrap" }, hr = {
  key: 0,
  class: "empty-state"
}, pr = {
  key: 1,
  class: "empty-state error-state"
}, wr = {
  key: 2,
  class: "empty-state"
}, gr = {
  key: 3,
  class: "wallpaper-grid"
}, fr = ["onClick"], vr = {
  key: 0,
  class: "thumb-skeleton"
}, mr = ["alt", "onLoad"], yr = ["title", "onClick"], br = ["title", "disabled", "aria-busy", "onClick"], kr = ["title", "disabled", "aria-busy", "onClick"], _r = { class: "pager" }, Cr = { class: "source-note" }, Sr = { class: "pager-actions" }, Lr = ["disabled"], Wr = ["disabled"], Pr = /* @__PURE__ */ N({
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
    const n = e, l = t, { t: a } = ie(), r = [
      { value: "general", labelKey: "wallpaperSwitcher.categories.general" },
      { value: "anime", labelKey: "wallpaperSwitcher.categories.anime" },
      { value: "people", labelKey: "wallpaperSwitcher.categories.people" },
      { value: "nature", labelKey: "wallpaperSwitcher.categories.nature" }
    ], s = (p) => l("update:keyword", p.target.value), c = (p) => n.workingActions.get(p);
    return (p, v) => (m(), _("div", nr, [
      i("section", lr, [
        i("div", ar, [
          i("input", {
            value: p.keyword,
            type: "text",
            placeholder: o(a)("wallpaperSwitcher.searchPlaceholder"),
            onInput: s,
            onKeydown: v[0] || (v[0] = vn((w) => l("refresh"), ["enter"]))
          }, null, 40, or),
          u(o(Yn), {
            size: 16,
            class: "search-icon"
          }),
          p.keyword ? (m(), _("button", {
            key: 0,
            type: "button",
            class: "clear-btn",
            title: o(a)("wallpaperSwitcher.clear"),
            onClick: v[1] || (v[1] = (w) => l("update:keyword", ""))
          }, [
            u(o(Je), { size: 18 })
          ], 8, ir)) : R("v-if", !0)
        ]),
        i("div", {
          class: "wallhaven-tabs",
          role: "tablist",
          "aria-label": o(a)("wallpaperSwitcher.categoryToggle")
        }, [
          (m(), _(
            Z,
            null,
            We(r, (w) => i("button", {
              key: w.value,
              type: "button",
              class: z({ active: p.category === w.value }),
              disabled: p.loading,
              onClick: (y) => l("setCategory", w.value)
            }, g(o(a)(w.labelKey)), 11, rr)),
            64
            /* STABLE_FRAGMENT */
          ))
        ], 8, sr),
        i("div", cr, [
          i(
            "span",
            null,
            g(o(a)("wallpaperSwitcher.autoMatch", { resolution: p.screenLabel })),
            1
            /* TEXT */
          ),
          i("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: o(a)("wallpaperSwitcher.refresh"),
            onClick: v[2] || (v[2] = (w) => l("refresh"))
          }, [
            u(o(Pt), {
              size: 14,
              class: z({ spinning: p.loading })
            }, null, 8, ["class"])
          ], 8, ur)
        ])
      ]),
      i("section", dr, [
        p.loading && p.wallpapers.length === 0 ? (m(), _(
          "div",
          hr,
          g(o(a)("wallpaperSwitcher.loadingWallhaven")),
          1
          /* TEXT */
        )) : p.error ? (m(), _("div", pr, [
          i(
            "span",
            null,
            g(p.error),
            1
            /* TEXT */
          ),
          i(
            "button",
            {
              type: "button",
              onClick: v[3] || (v[3] = (w) => l("refresh"))
            },
            g(o(a)("wallpaperSwitcher.retry")),
            1
            /* TEXT */
          )
        ])) : p.wallpapers.length === 0 ? (m(), _(
          "div",
          wr,
          g(o(a)("wallpaperSwitcher.noWallpapers")),
          1
          /* TEXT */
        )) : (m(), _("div", gr, [
          (m(!0), _(
            Z,
            null,
            We(p.wallpapers, (w) => (m(), _("article", {
              key: w.id,
              class: "wallpaper-card"
            }, [
              i("button", {
                type: "button",
                class: "thumb",
                onClick: (y) => l("openPreview", w)
              }, [
                p.loadedThumbIds.has(w.id) ? R("v-if", !0) : (m(), _("div", vr)),
                i("img", {
                  ref_for: !0,
                  ref: (y) => p.setThumbRef(w, y),
                  alt: w.resolution,
                  loading: "lazy",
                  onLoad: (y) => l("markThumbLoaded", w.id)
                }, null, 40, mr),
                i(
                  "span",
                  null,
                  g(w.resolution),
                  1
                  /* TEXT */
                )
              ], 8, fr),
              i("div", {
                class: "card-actions",
                onClick: v[4] || (v[4] = Oe(() => {
                }, ["stop"]))
              }, [
                i("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.preview"),
                  onClick: (y) => l("openPreview", w)
                }, [
                  u(o(Mi), { size: 16 }),
                  H(
                    " " + g(o(a)("wallpaperSwitcher.preview")),
                    1
                    /* TEXT */
                  )
                ], 8, yr),
                i("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.setWallpaper"),
                  class: z({
                    "is-working": c(w.id) === "setting"
                  }),
                  disabled: !!c(w.id),
                  "aria-busy": c(w.id) === "setting",
                  onClick: (y) => l("setWallpaper", w)
                }, [
                  c(w.id) === "setting" ? (m(), j(o(Qe), {
                    key: 0,
                    size: 16,
                    spin: ""
                  })) : (m(), j(o(Qn), {
                    key: 1,
                    size: 16
                  })),
                  i(
                    "span",
                    null,
                    g(c(w.id) === "setting" ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.set")),
                    1
                    /* TEXT */
                  )
                ], 10, br),
                i("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.download"),
                  class: z({
                    "is-working": c(w.id) === "downloading"
                  }),
                  disabled: !!c(w.id),
                  "aria-busy": c(w.id) === "downloading",
                  onClick: (y) => l("downloadWallpaper", w)
                }, [
                  c(w.id) === "downloading" ? (m(), j(o(Qe), {
                    key: 0,
                    size: 16,
                    spin: ""
                  })) : (m(), j(o(ji), {
                    key: 1,
                    size: 16
                  })),
                  i(
                    "span",
                    null,
                    g(c(w.id) === "downloading" ? o(a)("wallpaperSwitcher.downloading") : o(a)("wallpaperSwitcher.download")),
                    1
                    /* TEXT */
                  )
                ], 10, kr)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      i("footer", _r, [
        i(
          "span",
          null,
          g(o(a)("wallpaperSwitcher.page", { page: p.page })),
          1
          /* TEXT */
        ),
        i(
          "span",
          Cr,
          g(o(a)("wallpaperSwitcher.sourceNote", { source: p.sourceLabel })),
          1
          /* TEXT */
        ),
        i("div", Sr, [
          i("button", {
            type: "button",
            disabled: p.page <= 1 || p.loading,
            onClick: v[5] || (v[5] = (w) => l("prevPage"))
          }, g(o(a)("wallpaperSwitcher.prevPage")), 9, Lr),
          i("button", {
            type: "button",
            disabled: p.page >= p.lastPage || p.loading,
            onClick: v[6] || (v[6] = (w) => l("nextPage"))
          }, g(o(a)("wallpaperSwitcher.nextPage")), 9, Wr)
        ])
      ])
    ]));
  }
}), zr = { class: "preview-dialog" }, $r = { class: "preview-image-wrap" }, Or = {
  key: 0,
  class: "preview-skeleton"
}, Tr = {
  key: 1,
  class: "preview-error"
}, Ir = ["src", "alt"], jr = ["disabled", "aria-busy"], Nr = ["disabled", "aria-busy"], xr = /* @__PURE__ */ N({
  __name: "WallpaperPreviewModal",
  props: {
    wallpaper: {},
    loading: { type: Boolean },
    loadFailed: { type: Boolean },
    workingActions: {}
  },
  emits: ["close", "loaded", "failed", "download", "setWallpaper"],
  setup(e, { emit: t }) {
    const n = e, l = t, { t: a } = ie(), r = (s) => n.workingActions.get(s);
    return (s, c) => s.wallpaper ? (m(), _("div", {
      key: 0,
      class: "preview-modal",
      onClick: c[5] || (c[5] = Oe((p) => l("close"), ["self"]))
    }, [
      i("div", zr, [
        i("header", null, [
          i(
            "strong",
            null,
            g(s.wallpaper.resolution),
            1
            /* TEXT */
          ),
          i("button", {
            type: "button",
            class: "flat-icon",
            onClick: c[0] || (c[0] = (p) => l("close"))
          }, [
            u(o(Je), { size: 23 })
          ])
        ]),
        i("div", $r, [
          s.loading ? (m(), _("div", Or, [
            i(
              "span",
              null,
              g(o(a)("wallpaperSwitcher.loadingPreview")),
              1
              /* TEXT */
            )
          ])) : R("v-if", !0),
          s.loadFailed ? (m(), _(
            "div",
            Tr,
            g(o(a)("wallpaperSwitcher.previewLoadFailed")),
            1
            /* TEXT */
          )) : R("v-if", !0),
          i("img", {
            class: z({ ready: !s.loading && !s.loadFailed }),
            src: s.wallpaper.path,
            alt: o(a)("wallpaperSwitcher.wallpaperPreviewAlt"),
            onLoad: c[1] || (c[1] = (p) => l("loaded")),
            onError: c[2] || (c[2] = (p) => l("failed"))
          }, null, 42, Ir)
        ]),
        i("footer", null, [
          i("button", {
            type: "button",
            class: z(["secondary-btn", {
              "is-working": r(s.wallpaper.id) === "downloading"
            }]),
            disabled: !!r(s.wallpaper.id),
            "aria-busy": r(s.wallpaper.id) === "downloading",
            onClick: c[3] || (c[3] = (p) => l("download", s.wallpaper))
          }, [
            r(s.wallpaper.id) === "downloading" ? (m(), j(o(Qe), {
              key: 0,
              size: 16,
              spin: ""
            })) : R("v-if", !0),
            H(
              " " + g(r(s.wallpaper.id) === "downloading" ? o(a)("wallpaperSwitcher.downloading") : o(a)("wallpaperSwitcher.downloadCache")),
              1
              /* TEXT */
            )
          ], 10, jr),
          i("button", {
            type: "button",
            class: z(["primary-btn", {
              "is-working": r(s.wallpaper.id) === "setting"
            }]),
            disabled: !!r(s.wallpaper.id),
            "aria-busy": r(s.wallpaper.id) === "setting",
            onClick: c[4] || (c[4] = (p) => l("setWallpaper", s.wallpaper))
          }, [
            r(s.wallpaper.id) === "setting" ? (m(), j(o(Qe), {
              key: 0,
              size: 16,
              spin: ""
            })) : R("v-if", !0),
            H(
              " " + g(r(s.wallpaper.id) === "setting" ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.setWallpaper")),
              1
              /* TEXT */
            )
          ], 10, Nr)
        ])
      ])
    ])) : R("v-if", !0);
  }
}), Mr = { class: "wallpaper-window wallpaper-window--redesigned" }, Fr = {
  key: 0,
  class: "unsupported"
}, Er = /* @__PURE__ */ N({
  __name: "index",
  setup(e) {
    const t = kn(), { t: n } = ie(), l = L(gi()), a = L(null), r = L(null), s = L(!1), c = L(!1), p = L(!1), v = L(!1), w = L(!1), y = async () => {
      try {
        a.value = await rn();
      } catch (k) {
        O.msg(String(k), "error");
      }
    }, I = Li({
      config: l,
      refreshStatus: async () => {
        await y();
      }
    }), {
      activeView: T,
      wallhavenPage: F,
      wallhavenLastPage: d,
      wallhavenLoading: f,
      wallhavenError: b,
      wallhavenKeyword: x,
      wallhavenCategory: W,
      wallhavenSource: J,
      previewWallpaper: B,
      previewLoading: me,
      previewLoadFailed: $,
      workingActions: ye,
      loadedThumbIds: Te,
      wallhavenSourceLabel: be,
      visibleWallpapers: ce,
      openWallhavenGrid: Ie,
      backToSwitcher: nt,
      openPreview: lt,
      closePreview: at,
      markPreviewLoaded: Q,
      markPreviewFailed: ot,
      markThumbLoaded: it,
      setThumbRef: st,
      refreshWallhaven: rt,
      setWallhavenSource: ct,
      setWallhavenCategory: je,
      setWallpaperFromWallhaven: Ne,
      downloadWallpaperFromWallhaven: xe,
      prevWallhavenPage: ut,
      nextWallhavenPage: dt,
      setupListeners: ht
    } = I, pt = C(
      () => fi(a.value?.currentPath || l.value.lastAppliedPath)
    ), wt = C(() => {
      const k = a.value?.currentPath || l.value.lastAppliedPath;
      return k ? k.split(/[\\/]/).pop() || k : n("wallpaperSwitcher.noCurrentWallpaper");
    }), gt = C(() => {
      const k = a.value?.screenWidth || 2560, K = a.value?.screenHeight || 1440;
      return `${k} × ${K}`;
    }), S = C(
      () => a.value?.currentResolution || gt.value
    ), P = (k) => k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / 1024 / 1024).toFixed(1)} MB` : `${(k / 1024 / 1024 / 1024).toFixed(1)} GB`, E = C(() => l.value.mode === "fixed" ? n("wallpaperSwitcher.fixedImage") : l.value.mode === "wallhaven" ? "Wallhaven" : n("wallpaperSwitcher.localFolder")), X = C(() => {
      if (l.value.mode === "fixed" || !l.value.scheduleEnabled || !a.value?.schedulerRunning)
        return "—";
      const k = a.value?.nextSwitchAt;
      if (!k) return "—";
      const K = Math.max(0, k - Math.floor(Date.now() / 1e3));
      return K < 60 ? n("wallpaperSwitcher.time.secondsLater", { count: K }) : n("wallpaperSwitcher.time.minutesLater", {
        count: Math.ceil(K / 60)
      });
    }), el = C(() => {
      const k = a.value?.cacheSizeBytes ?? 0;
      return P(k);
    }), Mt = C(() => r.value ? n("wallpaperSwitcher.folderStatus.detected", {
      count: r.value.count
    }) : l.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), ft = async () => {
      s.value = !0;
      try {
        const [k, K] = await Promise.all([
          vi(),
          rn()
        ]);
        if (l.value = k, a.value = K, k.folderPath)
          try {
            r.value = await cn(k.folderPath);
          } catch {
            r.value = null;
          }
      } catch (k) {
        O.msg(String(k), "error");
      } finally {
        s.value = !1;
      }
    }, tl = async () => {
      c.value = !0;
      try {
        await Wt(l.value), await y(), O.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (k) {
        O.msg(String(k), "error");
      } finally {
        c.value = !1;
      }
    }, nl = async () => {
      const k = await Ht({
        multiple: !1,
        directory: !1,
        filters: [
          { name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }
        ]
      });
      if (typeof k == "string") {
        l.value.fixedImagePath = k, l.value.mode = "fixed";
        try {
          await un(k), await ft(), O.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
        } catch (K) {
          O.msg(String(K), "error");
        }
      }
    }, Ft = async () => {
      if (!l.value.folderPath) {
        O.msg(n("wallpaperSwitcher.messages.selectFolderFirst"), "warning");
        return;
      }
      try {
        r.value = await cn(l.value.folderPath), r.value.count === 0 ? O.msg(n("wallpaperSwitcher.messages.noImagesInFolder"), "warning") : O.msg(Mt.value, "success");
      } catch (k) {
        O.msg(String(k), "error");
      }
    }, ll = async () => {
      const k = await Ht({ multiple: !1, directory: !0 });
      typeof k == "string" && (l.value.folderPath = k, l.value.mode = "folder", await Ft());
    }, al = async () => {
      p.value = !0;
      try {
        await Wt(l.value), await mi(), await y(), O.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (k) {
        O.msg(String(k), "error");
      } finally {
        p.value = !1;
      }
    }, ol = async () => {
      if (!a.value?.currentPath) {
        O.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      l.value.mode = "fixed", l.value.fixedImagePath = a.value.currentPath, l.value.scheduleEnabled = !1;
      try {
        await un(a.value.currentPath), await ft(), O.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
      } catch (k) {
        O.msg(String(k), "error");
      }
    }, il = async () => {
      v.value = !0;
      try {
        await _i(), await y(), O.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (k) {
        O.msg(String(k), "error");
      } finally {
        v.value = !1;
      }
    }, sl = async () => {
      w.value = !0;
      try {
        await Si();
      } catch (k) {
        O.msg(String(k), "error");
      } finally {
        w.value = !1;
      }
    }, rl = (k) => {
      l.value = k;
    }, cl = async () => {
      await t.close();
    };
    return $e(async () => {
      await ft(), await ht();
    }), fn(() => {
    }), (k, K) => (m(), _("main", Mr, [
      u(tr, {
        "active-view": o(T),
        "wallhaven-source": o(J),
        "wallhaven-loading": o(f),
        "schedule-enabled": o(l).scheduleEnabled,
        "scheduler-running": !!o(a)?.schedulerRunning,
        onBack: o(nt),
        onClose: cl,
        onOpenWallhaven: o(Ie),
        onSetWallhavenSource: o(ct)
      }, null, 8, ["active-view", "wallhaven-source", "wallhaven-loading", "schedule-enabled", "scheduler-running", "onBack", "onOpenWallhaven", "onSetWallhavenSource"]),
      o(a) && !o(a).supported ? (m(), _(
        "section",
        Fr,
        g(o(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : R("v-if", !0),
      o(T) === "switcher" ? (m(), j(Hs, {
        key: 1,
        config: o(l),
        loading: o(s),
        "preview-src": o(pt),
        "current-wallpaper-name": o(wt),
        "source-label": o(E),
        "resolution-label": o(S),
        "next-switch-label": o(X),
        "folder-count-label": o(Mt),
        "cache-size-label": o(el),
        switching: o(p),
        "clearing-cache": o(v),
        "opening-cache": o(w),
        saving: o(c),
        onUpdateConfig: rl,
        onChooseImage: nl,
        onChooseFolder: ll,
        onScanFolder: Ft,
        onOpenWallhavenGrid: o(Ie),
        onSwitchNow: al,
        onSetCurrentAsFixed: ol,
        onClearCache: il,
        onOpenCacheDir: sl,
        onPersistConfig: tl
      }, null, 8, ["config", "loading", "preview-src", "current-wallpaper-name", "source-label", "resolution-label", "next-switch-label", "folder-count-label", "cache-size-label", "switching", "clearing-cache", "opening-cache", "saving", "onOpenWallhavenGrid"])) : (m(), j(Pr, {
        key: 2,
        keyword: o(x),
        "onUpdate:keyword": K[0] || (K[0] = (ul) => wn(x) ? x.value = ul : null),
        category: o(W),
        loading: o(f),
        error: o(b),
        wallpapers: o(ce),
        "loaded-thumb-ids": o(Te),
        "working-actions": o(ye),
        page: o(F),
        "last-page": o(d),
        "source-label": o(be),
        "screen-label": o(gt),
        "set-thumb-ref": o(st),
        onRefresh: o(rt),
        onSetCategory: o(je),
        onOpenPreview: o(lt),
        onMarkThumbLoaded: o(it),
        onSetWallpaper: o(Ne),
        onDownloadWallpaper: o(xe),
        onPrevPage: o(ut),
        onNextPage: o(dt)
      }, null, 8, ["keyword", "category", "loading", "error", "wallpapers", "loaded-thumb-ids", "working-actions", "page", "last-page", "source-label", "screen-label", "set-thumb-ref", "onRefresh", "onSetCategory", "onOpenPreview", "onMarkThumbLoaded", "onSetWallpaper", "onDownloadWallpaper", "onPrevPage", "onNextPage"])),
      u(xr, {
        wallpaper: o(B),
        loading: o(me),
        "load-failed": o($),
        "working-actions": o(ye),
        onClose: o(at),
        onLoaded: o(Q),
        onFailed: o(ot),
        onDownload: o(xe),
        onSetWallpaper: o(Ne)
      }, null, 8, ["wallpaper", "loading", "load-failed", "working-actions", "onClose", "onLoaded", "onFailed", "onDownload", "onSetWallpaper"])
    ]));
  }
}), Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hr as activate
};
