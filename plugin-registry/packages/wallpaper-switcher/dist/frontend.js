import { getCurrentInstance as we, inject as oe, ref as P, computed as _, unref as o, readonly as vl, getCurrentScope as ml, onScopeDispose as yl, onMounted as Oe, nextTick as mn, watch as et, isRef as yn, warn as bl, provide as kl, defineComponent as N, createElementBlock as C, openBlock as y, mergeProps as _l, renderSlot as ge, createElementVNode as s, normalizeClass as z, createVNode as d, Transition as Tt, withCtx as se, withDirectives as Ve, normalizeStyle as Be, createTextVNode as V, toDisplayString as f, vShow as Ke, shallowReactive as Cl, createBlock as j, createCommentVNode as F, resolveDynamicComponent as bn, Fragment as q, withModifiers as Ie, isVNode as Pe, render as Ge, onUnmounted as kn, renderList as We, withKeys as _n, useId as Sl } from "vue";
import { useI18n as te } from "vue-i18n";
const Xr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => Jr)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function Ll(e, t, n, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? l : n === "a" ? l.call(e) : l ? l.value : t.get(e);
}
function Pl(e, t, n, l, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Re;
const K = "__TAURI_TO_IPC_KEY__";
function Wl(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function h(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function $l(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class zl {
  get rid() {
    return Ll(this, Re, "f");
  }
  constructor(t) {
    Re.set(this, void 0), Pl(this, Re, t);
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
Re = /* @__PURE__ */ new WeakMap();
class Cn {
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
  [K]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[K]();
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
    return new Cn(this.width / t, this.height / t);
  }
  [K]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[K]();
  }
}
class pe {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Cn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ce ? this.size : this.size.toPhysical(t);
  }
  [K]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[K]();
  }
}
class Sn {
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
    return new ee(this.x * t, this.y * t);
  }
  [K]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[K]();
  }
}
class ee {
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
    return new Sn(this.x / t, this.y / t);
  }
  [K]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[K]();
  }
}
class Ae {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Sn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof ee ? this.position : this.position.toPhysical(t);
  }
  [K]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[K]();
  }
}
var H;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(H || (H = {}));
async function Ln(e, t) {
  await h("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Se(e, t, n) {
  var l;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (l = n?.target) !== null && l !== void 0 ? l : { kind: "Any" };
  return h("plugin:event|listen", {
    event: e,
    target: a,
    handler: Wl(t)
  }).then((i) => async () => Ln(e, i));
}
async function Ol(e, t, n) {
  return Se(e, (l) => {
    Ln(e, l.id), t(l);
  }, n);
}
async function Il(e, t) {
  await h("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Tl(e, t, n) {
  await h("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Le extends zl {
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
      rgba: Ue(t),
      width: n,
      height: l
    }).then((a) => new Le(a));
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
      bytes: Ue(t)
    }).then((n) => new Le(n));
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
    return h("plugin:image|from_path", { path: t }).then((n) => new Le(n));
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
function Ue(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Le ? e.rid : e;
}
var Lt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Lt || (Lt = {}));
class jl {
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
var Vt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Vt || (Vt = {}));
function Pn() {
  return new Wn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function kt() {
  return h("plugin:window|get_all_windows").then((e) => e.map((t) => new Wn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const _t = ["tauri://created", "tauri://error"];
class Wn {
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
    return (n = (await kt()).find((l) => l.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Pn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return kt();
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
    for (const t of await kt())
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
    } : Se(t, n, {
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
    } : Ol(t, n, {
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
    if (_t.includes(t)) {
      for (const l of this.listeners[t] || [])
        l({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Il(t, n);
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
    if (_t.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: l
        });
      return;
    }
    return Tl(t, n, l);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return _t.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new ee(t));
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
    }).then((t) => new ee(t));
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
    return t && (t === Lt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), h("plugin:window|request_user_attention", {
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
      value: t instanceof pe ? t : new pe(t)
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
      value: t instanceof pe ? t : t ? new pe(t) : null
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
      value: t instanceof pe ? t : t ? new pe(t) : null
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
      value: t instanceof Ae ? t : new Ae(t)
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
      value: Ue(t)
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
      value: t instanceof Ae ? t : new Ae(t)
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
      value: t ? Ue(t) : void 0
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
    return this.listen(H.WINDOW_RESIZED, (n) => {
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
    return this.listen(H.WINDOW_MOVED, (n) => {
      n.payload = new ee(n.payload), t(n);
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
      const l = new jl(n);
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
    const n = await this.listen(H.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new ee(r.payload.position)
        }
      });
    }), l = await this.listen(H.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new ee(r.payload.position)
        }
      });
    }), a = await this.listen(H.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new ee(r.payload.position)
        }
      });
    }), i = await this.listen(H.DRAG_LEAVE, (r) => {
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
    const n = await this.listen(H.WINDOW_FOCUS, (a) => {
      t({ ...a, payload: !0 });
    }), l = await this.listen(H.WINDOW_BLUR, (a) => {
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
var Bt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Bt || (Bt = {}));
var Kt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Kt || (Kt = {}));
var Gt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Gt || (Gt = {}));
async function Ut(e = {}) {
  return typeof e == "object" && Object.freeze(e), await h("plugin:dialog|open", { options: e });
}
const $n = Symbol(), De = "el", xl = "is-", ae = (e, t, n, l, a) => {
  let i = `${e}-${t}`;
  return n && (i += `-${n}`), l && (i += `__${l}`), a && (i += `--${a}`), i;
}, zn = Symbol("namespaceContextKey"), Nl = (e) => {
  const t = e || (we() ? oe(zn, P(De)) : P(De));
  return _(() => o(t) || De);
}, jt = (e, t) => {
  const n = Nl(t);
  return {
    namespace: n,
    b: (u = "") => ae(n.value, e, u, "", ""),
    e: (u) => u ? ae(n.value, e, "", u, "") : "",
    m: (u) => u ? ae(n.value, e, "", "", u) : "",
    be: (u, m) => u && m ? ae(n.value, e, u, m, "") : "",
    em: (u, m) => u && m ? ae(n.value, e, "", u, m) : "",
    bm: (u, m) => u && m ? ae(n.value, e, u, "", m) : "",
    bem: (u, m, k) => u && m && k ? ae(n.value, e, u, m, k) : "",
    is: (u, ...m) => {
      const k = m.length >= 1 ? m[0] : !0;
      return u && k ? `${xl}${u}` : "";
    },
    cssVar: (u) => {
      const m = {};
      for (const k in u)
        u[k] && (m[`--${n.value}-${k}`] = u[k]);
      return m;
    },
    cssVarName: (u) => `--${n.value}-${u}`,
    cssVarBlock: (u) => {
      const m = {};
      for (const k in u)
        u[k] && (m[`--${n.value}-${e}-${k}`] = u[k]);
      return m;
    },
    cssVarBlockName: (u) => `--${n.value}-${e}-${u}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ml = Object.prototype.hasOwnProperty, Zt = (e, t) => Ml.call(e, t), $e = (e) => typeof e == "function", ie = (e) => typeof e == "string", On = (e) => e !== null && typeof e == "object";
var Fl = typeof global == "object" && global && global.Object === Object && global, El = typeof self == "object" && self && self.Object === Object && self, xt = Fl || El || Function("return this")(), fe = xt.Symbol, In = Object.prototype, Al = In.hasOwnProperty, Rl = In.toString, ke = fe ? fe.toStringTag : void 0;
function Dl(e) {
  var t = Al.call(e, ke), n = e[ke];
  try {
    e[ke] = void 0;
    var l = !0;
  } catch {
  }
  var a = Rl.call(e);
  return l && (t ? e[ke] = n : delete e[ke]), a;
}
var Hl = Object.prototype, Vl = Hl.toString;
function Bl(e) {
  return Vl.call(e);
}
var Kl = "[object Null]", Gl = "[object Undefined]", qt = fe ? fe.toStringTag : void 0;
function Tn(e) {
  return e == null ? e === void 0 ? Gl : Kl : qt && qt in Object(e) ? Dl(e) : Bl(e);
}
function Ul(e) {
  return e != null && typeof e == "object";
}
var Zl = "[object Symbol]";
function Nt(e) {
  return typeof e == "symbol" || Ul(e) && Tn(e) == Zl;
}
function ql(e, t) {
  for (var n = -1, l = e == null ? 0 : e.length, a = Array(l); ++n < l; )
    a[n] = t(e[n], n, e);
  return a;
}
var Mt = Array.isArray, Jt = fe ? fe.prototype : void 0, Qt = Jt ? Jt.toString : void 0;
function jn(e) {
  if (typeof e == "string")
    return e;
  if (Mt(e))
    return ql(e, jn) + "";
  if (Nt(e))
    return Qt ? Qt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function xn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Jl = "[object AsyncFunction]", Ql = "[object Function]", Yl = "[object GeneratorFunction]", Xl = "[object Proxy]";
function ea(e) {
  if (!xn(e))
    return !1;
  var t = Tn(e);
  return t == Ql || t == Yl || t == Jl || t == Xl;
}
var Ct = xt["__core-js_shared__"], Yt = function() {
  var e = /[^.]+$/.exec(Ct && Ct.keys && Ct.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ta(e) {
  return !!Yt && Yt in e;
}
var na = Function.prototype, la = na.toString;
function aa(e) {
  if (e != null) {
    try {
      return la.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var oa = /[\\^$.*+?()[\]{}|]/g, sa = /^\[object .+?Constructor\]$/, ia = Function.prototype, ra = Object.prototype, ca = ia.toString, ua = ra.hasOwnProperty, da = RegExp(
  "^" + ca.call(ua).replace(oa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ha(e) {
  if (!xn(e) || ta(e))
    return !1;
  var t = ea(e) ? da : sa;
  return t.test(aa(e));
}
function pa(e, t) {
  return e?.[t];
}
function Nn(e, t) {
  var n = pa(e, t);
  return ha(n) ? n : void 0;
}
function wa(e, t) {
  return e === t || e !== e && t !== t;
}
var ga = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fa = /^\w*$/;
function va(e, t) {
  if (Mt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Nt(e) ? !0 : fa.test(e) || !ga.test(e) || t != null && e in Object(t);
}
var ze = Nn(Object, "create");
function ma() {
  this.__data__ = ze ? ze(null) : {}, this.size = 0;
}
function ya(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ba = "__lodash_hash_undefined__", ka = Object.prototype, _a = ka.hasOwnProperty;
function Ca(e) {
  var t = this.__data__;
  if (ze) {
    var n = t[e];
    return n === ba ? void 0 : n;
  }
  return _a.call(t, e) ? t[e] : void 0;
}
var Sa = Object.prototype, La = Sa.hasOwnProperty;
function Pa(e) {
  var t = this.__data__;
  return ze ? t[e] !== void 0 : La.call(t, e);
}
var Wa = "__lodash_hash_undefined__";
function $a(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ze && t === void 0 ? Wa : t, this;
}
function re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
re.prototype.clear = ma;
re.prototype.delete = ya;
re.prototype.get = Ca;
re.prototype.has = Pa;
re.prototype.set = $a;
function za() {
  this.__data__ = [], this.size = 0;
}
function tt(e, t) {
  for (var n = e.length; n--; )
    if (wa(e[n][0], t))
      return n;
  return -1;
}
var Oa = Array.prototype, Ia = Oa.splice;
function Ta(e) {
  var t = this.__data__, n = tt(t, e);
  if (n < 0)
    return !1;
  var l = t.length - 1;
  return n == l ? t.pop() : Ia.call(t, n, 1), --this.size, !0;
}
function ja(e) {
  var t = this.__data__, n = tt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xa(e) {
  return tt(this.__data__, e) > -1;
}
function Na(e, t) {
  var n = this.__data__, l = tt(n, e);
  return l < 0 ? (++this.size, n.push([e, t])) : n[l][1] = t, this;
}
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
ye.prototype.clear = za;
ye.prototype.delete = Ta;
ye.prototype.get = ja;
ye.prototype.has = xa;
ye.prototype.set = Na;
var Ma = Nn(xt, "Map");
function Fa() {
  this.size = 0, this.__data__ = {
    hash: new re(),
    map: new (Ma || ye)(),
    string: new re()
  };
}
function Ea(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function nt(e, t) {
  var n = e.__data__;
  return Ea(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Aa(e) {
  var t = nt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ra(e) {
  return nt(this, e).get(e);
}
function Da(e) {
  return nt(this, e).has(e);
}
function Ha(e, t) {
  var n = nt(this, e), l = n.size;
  return n.set(e, t), this.size += n.size == l ? 0 : 1, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var l = e[t];
    this.set(l[0], l[1]);
  }
}
ue.prototype.clear = Fa;
ue.prototype.delete = Aa;
ue.prototype.get = Ra;
ue.prototype.has = Da;
ue.prototype.set = Ha;
var Va = "Expected a function";
function Ft(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Va);
  var n = function() {
    var l = arguments, a = t ? t.apply(this, l) : l[0], i = n.cache;
    if (i.has(a))
      return i.get(a);
    var r = e.apply(this, l);
    return n.cache = i.set(a, r) || i, r;
  };
  return n.cache = new (Ft.Cache || ue)(), n;
}
Ft.Cache = ue;
var Ba = 500;
function Ka(e) {
  var t = Ft(e, function(l) {
    return n.size === Ba && n.clear(), l;
  }), n = t.cache;
  return t;
}
var Ga = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ua = /\\(\\)?/g, Za = Ka(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ga, function(n, l, a, i) {
    t.push(a ? i.replace(Ua, "$1") : l || n);
  }), t;
});
function qa(e) {
  return e == null ? "" : jn(e);
}
function Ja(e, t) {
  return Mt(e) ? e : va(e, t) ? [e] : Za(qa(e));
}
function Qa(e) {
  if (typeof e == "string" || Nt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ya(e, t) {
  t = Ja(t, e);
  for (var n = 0, l = t.length; e != null && n < l; )
    e = e[Qa(t[n++])];
  return n && n == l ? e : void 0;
}
function Xa(e, t, n) {
  var l = e == null ? void 0 : Ya(e, t);
  return l === void 0 ? n : l;
}
function eo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, l = {}; ++t < n; ) {
    var a = e[t];
    l[a[0]] = a[1];
  }
  return l;
}
const Mn = (e) => e === void 0, Xt = (e) => typeof e == "boolean", ce = (e) => typeof e == "number", Pt = (e) => typeof Element > "u" ? !1 : e instanceof Element, to = (e) => ie(e) ? !Number.isNaN(Number(e)) : !1;
var en;
const de = typeof window < "u", no = (e) => typeof e == "string", lo = () => {
};
de && ((en = window?.navigator) != null && en.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Et(e) {
  return typeof e == "function" ? e() : o(e);
}
function ao(e) {
  return e;
}
function At(e) {
  return ml() ? (yl(e), !0) : !1;
}
function oo(e, t = !0) {
  we() ? Oe(e) : t ? e() : mn(e);
}
function Fn(e, t, n = {}) {
  const {
    immediate: l = !0
  } = n, a = P(!1);
  let i = null;
  function r() {
    i && (clearTimeout(i), i = null);
  }
  function c() {
    a.value = !1, r();
  }
  function g(...p) {
    r(), a.value = !0, i = setTimeout(() => {
      a.value = !1, i = null, e(...p);
    }, Et(t));
  }
  return l && (a.value = !0, de && g()), At(c), {
    isPending: vl(a),
    start: g,
    stop: c
  };
}
function En(e) {
  var t;
  const n = Et(e);
  return (t = n?.$el) != null ? t : n;
}
const An = de ? window : void 0;
function Rn(...e) {
  let t, n, l, a;
  if (no(e[0]) || Array.isArray(e[0]) ? ([n, l, a] = e, t = An) : [t, n, l, a] = e, !t)
    return lo;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const i = [], r = () => {
    i.forEach((v) => v()), i.length = 0;
  }, c = (v, w, W, T) => (v.addEventListener(w, W, T), () => v.removeEventListener(w, W, T)), g = et(() => [En(t), Et(a)], ([v, w]) => {
    r(), v && i.push(...n.flatMap((W) => l.map((T) => c(v, W, T, w))));
  }, { immediate: !0, flush: "post" }), p = () => {
    g(), r();
  };
  return At(p), p;
}
function so(e, t = !1) {
  const n = P(), l = () => n.value = !!e();
  return l(), oo(l, t), n;
}
const tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nn = "__vueuse_ssr_handlers__";
tn[nn] = tn[nn] || {};
var ln = Object.getOwnPropertySymbols, io = Object.prototype.hasOwnProperty, ro = Object.prototype.propertyIsEnumerable, co = (e, t) => {
  var n = {};
  for (var l in e)
    io.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
  if (e != null && ln)
    for (var l of ln(e))
      t.indexOf(l) < 0 && ro.call(e, l) && (n[l] = e[l]);
  return n;
};
function uo(e, t, n = {}) {
  const l = n, { window: a = An } = l, i = co(l, ["window"]);
  let r;
  const c = so(() => a && "ResizeObserver" in a), g = () => {
    r && (r.disconnect(), r = void 0);
  }, p = et(() => En(e), (w) => {
    g(), c.value && a && w && (r = new ResizeObserver(t), r.observe(w, i));
  }, { immediate: !0, flush: "post" }), v = () => {
    g(), p();
  };
  return At(v), {
    isSupported: c,
    stop: v
  };
}
var an;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(an || (an = {}));
var ho = Object.defineProperty, on = Object.getOwnPropertySymbols, po = Object.prototype.hasOwnProperty, wo = Object.prototype.propertyIsEnumerable, sn = (e, t, n) => t in e ? ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, go = (e, t) => {
  for (var n in t || (t = {}))
    po.call(t, n) && sn(e, n, t[n]);
  if (on)
    for (var n of on(t))
      wo.call(t, n) && sn(e, n, t[n]);
  return e;
};
const fo = {
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
go({
  linear: ao
}, fo);
const rn = {
  current: 0
}, cn = P(0), Dn = 2e3, un = Symbol("elZIndexContextKey"), Hn = Symbol("zIndexContextKey"), vo = (e) => {
  const t = we() ? oe(un, rn) : rn, n = e || (we() ? oe(Hn, void 0) : void 0), l = _(() => {
    const r = o(n);
    return ce(r) ? r : Dn;
  }), a = _(() => l.value + cn.value), i = () => (t.current++, cn.value = t.current, a.value);
  return !de && oe(un), {
    initialZIndex: l,
    currentZIndex: a,
    nextZIndex: i
  };
};
var mo = {
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
const yo = (e) => (t, n) => bo(t, n, o(e)), bo = (e, t, n) => Xa(n, e, e).replace(/\{(\w+)\}/g, (l, a) => {
  var i;
  return `${(i = t?.[a]) != null ? i : `{${a}}`}`;
}), ko = (e) => {
  const t = _(() => o(e).name), n = yn(e) ? e : P(e);
  return {
    lang: t,
    locale: n,
    t: yo(e)
  };
}, Vn = Symbol("localeContextKey"), _o = (e) => {
  const t = e || oe(Vn, P());
  return ko(_(() => t.value || mo));
}, Bn = "__epPropKey", B = (e) => e, Co = (e) => On(e) && !!e[Bn], Kn = (e, t) => {
  if (!On(e) || Co(e))
    return e;
  const { values: n, required: l, default: a, type: i, validator: r } = e, g = {
    type: i,
    required: !!l,
    validator: n || r ? (p) => {
      let v = !1, w = [];
      if (n && (w = Array.from(n), Zt(e, "default") && w.push(a), v || (v = w.includes(p))), r && (v || (v = r(p))), !v && w.length > 0) {
        const W = [...new Set(w)].map((T) => JSON.stringify(T)).join(", ");
        bl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${W}], got value ${JSON.stringify(p)}.`);
      }
      return v;
    } : void 0,
    [Bn]: !0
  };
  return Zt(e, "default") && (g.default = a), g;
}, be = (e) => eo(Object.entries(e).map(([t, n]) => [
  t,
  Kn(n, t)
])), So = ["", "default", "small", "large"], Lo = Kn({
  type: String,
  values: So,
  required: !1
}), Po = Symbol("size"), Wo = Symbol("emptyValuesContextKey"), $o = be({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => $e(e) ? !e() : !e
  }
}), dn = (e) => Object.keys(e), Ze = P();
function Gn(e, t = void 0) {
  return we() ? oe($n, Ze) : Ze;
}
function Un(e, t) {
  const n = Gn(), l = jt(e, _(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.namespace) || De;
  })), a = _o(_(() => {
    var c;
    return (c = n.value) == null ? void 0 : c.locale;
  })), i = vo(_(() => {
    var c;
    return ((c = n.value) == null ? void 0 : c.zIndex) || Dn;
  })), r = _(() => {
    var c;
    return o(t) || ((c = n.value) == null ? void 0 : c.size) || "";
  });
  return Zn(_(() => o(n) || {})), {
    ns: l,
    locale: a,
    zIndex: i,
    size: r
  };
}
const Zn = (e, t, n = !1) => {
  var l;
  const a = !!we(), i = a ? Gn() : void 0, r = (l = void 0) != null ? l : a ? kl : void 0;
  if (!r)
    return;
  const c = _(() => {
    const g = o(e);
    return i?.value ? zo(i.value, g) : g;
  });
  return r($n, c), r(Vn, _(() => c.value.locale)), r(zn, _(() => c.value.namespace)), r(Hn, _(() => c.value.zIndex)), r(Po, {
    size: _(() => c.value.size || "")
  }), r(Wo, _(() => ({
    emptyValues: c.value.emptyValues,
    valueOnClear: c.value.valueOnClear
  }))), (n || !Ze.value) && (Ze.value = c.value), c;
}, zo = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...dn(e), ...dn(t)])], l = {};
  for (const a of n)
    l[a] = t[a] !== void 0 ? t[a] : e[a];
  return l;
};
var lt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of t)
    n[l] = a;
  return n;
};
function Wt(e, t = "px") {
  if (!e)
    return "";
  if (ce(e) || to(e))
    return `${e}${t}`;
  if (ie(e))
    return e;
}
const qn = (e, t) => (e.install = (n) => {
  for (const l of [e, ...Object.values({})])
    n.component(l.name, l);
}, e), Jn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Oo = be({
  size: {
    type: B([Number, String])
  },
  color: {
    type: String
  }
}), Io = N({
  name: "ElIcon",
  inheritAttrs: !1
}), To = /* @__PURE__ */ N({
  ...Io,
  props: Oo,
  setup(e) {
    const t = e, n = jt("icon"), l = _(() => {
      const { size: a, color: i } = t;
      return !a && !i ? {} : {
        fontSize: Mn(a) ? void 0 : Wt(a),
        "--color": i
      };
    });
    return (a, i) => (y(), C("i", _l({
      class: o(n).b(),
      style: o(l)
    }, a.$attrs), [
      ge(a.$slots, "default")
    ], 16));
  }
});
var jo = /* @__PURE__ */ lt(To, [["__file", "icon.vue"]]);
const qe = qn(jo);
/*! Element Plus Icons Vue v2.3.1 */
var xo = /* @__PURE__ */ N({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (y(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), No = xo, Mo = /* @__PURE__ */ N({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (y(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Qn = Mo, Fo = /* @__PURE__ */ N({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (y(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Eo = Fo, Ao = /* @__PURE__ */ N({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (y(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ro = Ao, Do = /* @__PURE__ */ N({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (y(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ho = Do;
const Yn = B([
  String,
  Object,
  Function
]), Vo = {
  Close: Qn
}, Bo = {
  Close: Qn
}, Je = {
  success: Ro,
  warning: Ho,
  error: No,
  info: Eo
}, Ko = (e) => e, He = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Go = be({
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
    type: B([String, Object, Array])
  },
  offset: {
    type: B(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Uo = N({
  name: "ElBadge"
}), Zo = /* @__PURE__ */ N({
  ...Uo,
  props: Go,
  setup(e, { expose: t }) {
    const n = e, l = jt("badge"), a = _(() => n.isDot ? "" : ce(n.value) && ce(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), i = _(() => {
      var r, c, g, p, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: Wt(-((c = (r = n.offset) == null ? void 0 : r[0]) != null ? c : 0)),
          marginTop: Wt((p = (g = n.offset) == null ? void 0 : g[1]) != null ? p : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: a
    }), (r, c) => (y(), C("div", {
      class: z(o(l).b())
    }, [
      ge(r.$slots, "default"),
      d(Tt, {
        name: `${o(l).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: se(() => [
          Ve(s("sup", {
            class: z([
              o(l).e("content"),
              o(l).em("content", r.type),
              o(l).is("fixed", !!r.$slots.default),
              o(l).is("dot", r.isDot),
              o(l).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: Be(o(i))
          }, [
            ge(r.$slots, "content", { value: o(a) }, () => [
              V(f(o(a)), 1)
            ])
          ], 6), [
            [Ke, !r.hidden && (o(a) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var qo = /* @__PURE__ */ lt(Zo, [["__file", "badge.vue"]]);
const Jo = qn(qo), Qo = be({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: B(Object)
  },
  size: Lo,
  button: {
    type: B(Object)
  },
  experimentalFeatures: {
    type: B(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: B(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...$o
}), Z = {};
N({
  name: "ElConfigProvider",
  props: Qo,
  setup(e, { slots: t }) {
    et(() => e.message, (l) => {
      Object.assign(Z, l ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Zn(e);
    return () => ge(t, "default", { config: n?.value });
  }
});
const Xn = ["success", "info", "warning", "error"], R = Ko({
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
}), Yo = be({
  customClass: {
    type: String,
    default: R.customClass
  },
  center: {
    type: Boolean,
    default: R.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: R.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: R.duration
  },
  icon: {
    type: Yn,
    default: R.icon
  },
  id: {
    type: String,
    default: R.id
  },
  message: {
    type: B([
      String,
      Object,
      Function
    ]),
    default: R.message
  },
  onClose: {
    type: B(Function),
    default: R.onClose
  },
  showClose: {
    type: Boolean,
    default: R.showClose
  },
  type: {
    type: String,
    values: Xn,
    default: R.type
  },
  plain: {
    type: Boolean,
    default: R.plain
  },
  offset: {
    type: Number,
    default: R.offset
  },
  zIndex: {
    type: Number,
    default: R.zIndex
  },
  grouping: {
    type: Boolean,
    default: R.grouping
  },
  repeatNum: {
    type: Number,
    default: R.repeatNum
  }
}), Xo = {
  destroy: () => !0
}, J = Cl([]), es = (e) => {
  const t = J.findIndex((a) => a.id === e), n = J[t];
  let l;
  return t > 0 && (l = J[t - 1]), { current: n, prev: l };
}, ts = (e) => {
  const { prev: t } = es(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ns = (e, t) => J.findIndex((l) => l.id === e) > 0 ? 16 : t, ls = N({
  name: "ElMessage"
}), as = /* @__PURE__ */ N({
  ...ls,
  props: Yo,
  emits: Xo,
  setup(e, { expose: t }) {
    const n = e, { Close: l } = Bo, { ns: a, zIndex: i } = Un("message"), { currentZIndex: r, nextZIndex: c } = i, g = P(), p = P(!1), v = P(0);
    let w;
    const W = _(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), T = _(() => {
      const O = n.type;
      return { [a.bm("icon", O)]: O && Je[O] };
    }), E = _(() => n.icon || Je[n.type] || ""), u = _(() => ts(n.id)), m = _(() => ns(n.id, n.offset) + u.value), k = _(() => v.value + m.value), G = _(() => ({
      top: `${m.value}px`,
      zIndex: r.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: w } = Fn(() => {
        U();
      }, n.duration));
    }
    function Q() {
      w?.();
    }
    function U() {
      p.value = !1;
    }
    function Y({ code: O }) {
      O === He.esc && U();
    }
    return Oe(() => {
      L(), c(), p.value = !0;
    }), et(() => n.repeatNum, () => {
      Q(), L();
    }), Rn(document, "keydown", Y), uo(g, () => {
      v.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: p,
      bottom: k,
      close: U
    }), (O, Te) => (y(), j(Tt, {
      name: o(a).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (je) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        Ve(s("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: g,
          class: z([
            o(a).b(),
            { [o(a).m(O.type)]: O.type },
            o(a).is("center", O.center),
            o(a).is("closable", O.showClose),
            o(a).is("plain", O.plain),
            O.customClass
          ]),
          style: Be(o(G)),
          role: "alert",
          onMouseenter: Q,
          onMouseleave: L
        }, [
          O.repeatNum > 1 ? (y(), j(o(Jo), {
            key: 0,
            value: O.repeatNum,
            type: o(W),
            class: z(o(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : F("v-if", !0),
          o(E) ? (y(), j(o(qe), {
            key: 1,
            class: z([o(a).e("icon"), o(T)])
          }, {
            default: se(() => [
              (y(), j(bn(o(E))))
            ]),
            _: 1
          }, 8, ["class"])) : F("v-if", !0),
          ge(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (y(), C(q, { key: 1 }, [
              F(" Caution here, message could've been compromised, never use user's input as message "),
              s("p", {
                class: z(o(a).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (y(), C("p", {
              key: 0,
              class: z(o(a).e("content"))
            }, f(O.message), 3))
          ]),
          O.showClose ? (y(), j(o(qe), {
            key: 2,
            class: z(o(a).e("closeBtn")),
            onClick: Ie(U, ["stop"])
          }, {
            default: se(() => [
              d(o(l))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : F("v-if", !0)
        ], 46, ["id"]), [
          [Ke, p.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var os = /* @__PURE__ */ lt(as, [["__file", "message.vue"]]);
let ss = 1;
const el = (e) => {
  const t = !e || ie(e) || Pe(e) || $e(e) ? { message: e } : e, n = {
    ...R,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ie(n.appendTo)) {
    let l = document.querySelector(n.appendTo);
    Pt(l) || (l = document.body), n.appendTo = l;
  }
  return Xt(Z.grouping) && !n.grouping && (n.grouping = Z.grouping), ce(Z.duration) && n.duration === 3e3 && (n.duration = Z.duration), ce(Z.offset) && n.offset === 16 && (n.offset = Z.offset), Xt(Z.showClose) && !n.showClose && (n.showClose = Z.showClose), n;
}, is = (e) => {
  const t = J.indexOf(e);
  if (t === -1)
    return;
  J.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, rs = ({ appendTo: e, ...t }, n) => {
  const l = `message_${ss++}`, a = t.onClose, i = document.createElement("div"), r = {
    ...t,
    id: l,
    onClose: () => {
      a?.(), is(v);
    },
    onDestroy: () => {
      Ge(null, i);
    }
  }, c = d(os, r, $e(r.message) || Pe(r.message) ? {
    default: $e(r.message) ? r.message : () => r.message
  } : null);
  c.appContext = n || ve._context, Ge(c, i), e.appendChild(i.firstElementChild);
  const g = c.component, v = {
    id: l,
    vnode: c,
    vm: g,
    handler: {
      close: () => {
        g.exposed.visible.value = !1;
      }
    },
    props: c.component.props
  };
  return v;
}, ve = (e = {}, t) => {
  if (!de)
    return { close: () => {
    } };
  const n = el(e);
  if (n.grouping && J.length) {
    const a = J.find(({ vnode: i }) => {
      var r;
      return ((r = i.props) == null ? void 0 : r.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (ce(Z.max) && J.length >= Z.max)
    return { close: () => {
    } };
  const l = rs(n, t);
  return J.push(l), l.handler;
};
Xn.forEach((e) => {
  ve[e] = (t = {}, n) => {
    const l = el(t);
    return ve({ ...l, type: e }, n);
  };
});
function cs(e) {
  for (const t of J)
    (!e || e === t.props.type) && t.handler.close();
}
ve.closeAll = cs;
ve._context = null;
const us = Jn(ve, "$message"), tl = [
  "success",
  "info",
  "warning",
  "error"
], ds = be({
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
    type: Yn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: B([
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
    type: B(Function),
    default: () => {
    }
  },
  onClose: {
    type: B(Function),
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
    values: [...tl, ""],
    default: ""
  },
  zIndex: Number
}), hs = {
  destroy: () => !0
}, ps = N({
  name: "ElNotification"
}), ws = /* @__PURE__ */ N({
  ...ps,
  props: ds,
  emits: hs,
  setup(e, { expose: t }) {
    const n = e, { ns: l, zIndex: a } = Un("notification"), { nextZIndex: i, currentZIndex: r } = a, { Close: c } = Vo, g = P(!1);
    let p;
    const v = _(() => {
      const L = n.type;
      return L && Je[n.type] ? l.m(L) : "";
    }), w = _(() => n.type && Je[n.type] || n.icon), W = _(() => n.position.endsWith("right") ? "right" : "left"), T = _(() => n.position.startsWith("top") ? "top" : "bottom"), E = _(() => {
      var L;
      return {
        [T.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : r.value
      };
    });
    function u() {
      n.duration > 0 && ({ stop: p } = Fn(() => {
        g.value && k();
      }, n.duration));
    }
    function m() {
      p?.();
    }
    function k() {
      g.value = !1;
    }
    function G({ code: L }) {
      L === He.delete || L === He.backspace ? m() : L === He.esc ? g.value && k() : u();
    }
    return Oe(() => {
      u(), i(), g.value = !0;
    }), Rn(document, "keydown", G), t({
      visible: g,
      close: k
    }), (L, Q) => (y(), j(Tt, {
      name: o(l).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (U) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        Ve(s("div", {
          id: L.id,
          class: z([o(l).b(), L.customClass, o(W)]),
          style: Be(o(E)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: u,
          onClick: L.onClick
        }, [
          o(w) ? (y(), j(o(qe), {
            key: 0,
            class: z([o(l).e("icon"), o(v)])
          }, {
            default: se(() => [
              (y(), j(bn(o(w))))
            ]),
            _: 1
          }, 8, ["class"])) : F("v-if", !0),
          s("div", {
            class: z(o(l).e("group"))
          }, [
            s("h2", {
              class: z(o(l).e("title")),
              textContent: f(L.title)
            }, null, 10, ["textContent"]),
            Ve(s("div", {
              class: z(o(l).e("content")),
              style: Be(L.title ? void 0 : { margin: 0 })
            }, [
              ge(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (y(), C(q, { key: 1 }, [
                  F(" Caution here, message could've been compromised, never use user's input as message "),
                  s("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (y(), C("p", { key: 0 }, f(L.message), 1))
              ])
            ], 6), [
              [Ke, L.message]
            ]),
            L.showClose ? (y(), j(o(qe), {
              key: 0,
              class: z(o(l).e("closeBtn")),
              onClick: Ie(k, ["stop"])
            }, {
              default: se(() => [
                d(o(c))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : F("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ke, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var gs = /* @__PURE__ */ lt(ws, [["__file", "notification.vue"]]);
const Qe = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, $t = 16;
let fs = 1;
const me = function(e = {}, t) {
  if (!de)
    return { close: () => {
    } };
  (ie(e) || Pe(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let l = e.offset || 0;
  Qe[n].forEach(({ vm: v }) => {
    var w;
    l += (((w = v.el) == null ? void 0 : w.offsetHeight) || 0) + $t;
  }), l += $t;
  const a = `notification_${fs++}`, i = e.onClose, r = {
    ...e,
    offset: l,
    id: a,
    onClose: () => {
      vs(a, n, i);
    }
  };
  let c = document.body;
  Pt(e.appendTo) ? c = e.appendTo : ie(e.appendTo) && (c = document.querySelector(e.appendTo)), Pt(c) || (c = document.body);
  const g = document.createElement("div"), p = d(gs, r, $e(r.message) ? r.message : Pe(r.message) ? () => r.message : null);
  return p.appContext = Mn(t) ? me._context : t, p.props.onDestroy = () => {
    Ge(null, g);
  }, Ge(p, g), Qe[n].push({ vm: p }), c.appendChild(g.firstElementChild), {
    close: () => {
      p.component.exposed.visible.value = !1;
    }
  };
};
tl.forEach((e) => {
  me[e] = (t = {}, n) => ((ie(t) || Pe(t)) && (t = {
    message: t
  }), me({ ...t, type: e }, n));
});
function vs(e, t, n) {
  const l = Qe[t], a = l.findIndex(({ vm: p }) => {
    var v;
    return ((v = p.component) == null ? void 0 : v.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: i } = l[a];
  if (!i)
    return;
  n?.(i);
  const r = i.el.offsetHeight, c = t.split("-")[0];
  l.splice(a, 1);
  const g = l.length;
  if (!(g < 1))
    for (let p = a; p < g; p++) {
      const { el: v, component: w } = l[p].vm, W = Number.parseInt(v.style[c], 10) - r - $t;
      w.props.offset = W;
    }
}
function ms() {
  for (const e of Object.values(Qe))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
me.closeAll = ms;
me._context = null;
const ys = Jn(me, "$notify"), I = {
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
    l === "center" ? us({
      message: t,
      type: n,
      duration: a,
      showClose: i,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : ys({
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
var zt;
(function(e) {
  e[e.Audio = 1] = "Audio", e[e.Cache = 2] = "Cache", e[e.Config = 3] = "Config", e[e.Data = 4] = "Data", e[e.LocalData = 5] = "LocalData", e[e.Document = 6] = "Document", e[e.Download = 7] = "Download", e[e.Picture = 8] = "Picture", e[e.Public = 9] = "Public", e[e.Video = 10] = "Video", e[e.Resource = 11] = "Resource", e[e.Temp = 12] = "Temp", e[e.AppConfig = 13] = "AppConfig", e[e.AppData = 14] = "AppData", e[e.AppLocalData = 15] = "AppLocalData", e[e.AppCache = 16] = "AppCache", e[e.AppLog = 17] = "AppLog", e[e.Desktop = 18] = "Desktop", e[e.Executable = 19] = "Executable", e[e.Font = 20] = "Font", e[e.Home = 21] = "Home", e[e.Runtime = 22] = "Runtime", e[e.Template = 23] = "Template";
})(zt || (zt = {}));
async function bs() {
  return h("plugin:path|resolve_directory", {
    directory: zt.AppCache
  });
}
async function ks(...e) {
  return h("plugin:path|join", { paths: e });
}
async function hn(e, t) {
  await h("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const _s = () => ({
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
}), Cs = (e) => e ? /^https?:\/\//i.test(e) ? e : $l(e) : "", Ss = () => h("wallpaper_get_config"), Ot = (e) => h("wallpaper_save_config", { config: e }), pn = () => h("wallpaper_get_status"), wn = (e) => h("wallpaper_scan_folder", { path: e }), gn = (e) => h("wallpaper_set_fixed_image", { path: e }), Ls = () => h("wallpaper_switch_now"), Ps = (e) => h("wallpaper_fetch_wallhaven", { params: e }), Ws = (e) => h("wallpaper_set_wallhaven_image", { wallpaper: e }), $s = (e) => h("wallpaper_download_wallhaven_image", { wallpaper: e }), zs = () => h("wallpaper_clear_cache"), Os = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), Is = async () => {
  try {
    await h("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!Os(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await bs(), t = await ks(e, "wallpaper-switcher");
  try {
    await hn(t);
  } catch {
    await hn(e);
  }
};
function Ts({ config: e, refreshStatus: t }) {
  const { t: n } = te(), l = P("switcher"), a = P([]), i = P(1), r = P(1), c = P(!1), g = P(""), p = P(""), v = P("general"), w = P("hot"), W = P(null), T = P(!1), E = P(!1), u = P(/* @__PURE__ */ new Map()), m = P(/* @__PURE__ */ new Map()), k = P(/* @__PURE__ */ new Set()), G = /* @__PURE__ */ new Map();
  let L = null, Q = null, U = null, Y = null, O = 0;
  const Te = _(() => w.value === "hot" ? "Hot" : w.value === "favorites" ? "Favorites" : "Toplist"), je = _(() => a.value.slice(0, 6)), at = _(() => {
    const S = p.value.trim();
    return v.value === "nature" ? S ? `${S} nature` : "nature" : S || null;
  }), ot = _(() => v.value), he = (S) => {
    const $ = String(S).replace(/^Error:\s*/, "");
    return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(
      $
    ) ? n("wallpaperSwitcher.messages.wallhavenNetworkError") : $.length > 120 ? `${$.slice(0, 120)}...` : $;
  }, ne = (S, $) => {
    const { id: M } = S, D = new Map(u.value);
    $ ? D.set(M, $) : D.delete(M), u.value = D;
    const le = new Map(m.value);
    $ ? le.set(M, {
      downloaded: 0,
      total: S.fileSize ?? null,
      phase: "preparing"
    }) : le.delete(M), m.value = le;
  }, st = (S) => {
    const $ = new Set(k.value);
    $.add(S), k.value = $;
  }, it = (S, $) => {
    if (!($ instanceof HTMLImageElement)) {
      G.delete(S.id);
      return;
    }
    if (G.set(S.id, $), !L) {
      $.src = S.thumbs.large;
      return;
    }
    $.dataset.src = S.thumbs.large, L.observe($);
  }, rt = () => {
    k.value = /* @__PURE__ */ new Set(), G.clear();
  }, xe = async () => {
    e.value.wallhavenQuery = p.value.trim() || null, e.value.wallhavenCategory = v.value, e.value.wallhavenSource = w.value, e.value.mode = "wallhaven", await Ot(e.value);
  }, X = async (S = i.value) => {
    const $ = ++O;
    c.value = !0, g.value = "", a.value = [], rt();
    try {
      await xe();
      const M = await Ps({
        source: w.value,
        page: S,
        query: at.value,
        category: ot.value
      });
      if ($ !== O) return;
      a.value = M.data, i.value = M.page, r.value = Math.max(1, M.lastPage), await mn();
      for (const D of G.values())
        L && L.observe(D);
    } catch (M) {
      if ($ !== O) return;
      a.value = [], g.value = he(M), I.msg(g.value, "error");
    } finally {
      $ === O && (c.value = !1);
    }
  }, ct = () => X(1), ut = async (S) => {
    w.value = S, await X(1);
  }, dt = async (S) => {
    v.value = S, await X(1);
  }, ht = async () => {
    p.value = "", v.value = e.value.wallhavenCategory || "general", w.value = e.value.wallhavenSource, i.value = 1, g.value = "", a.value = [], l.value = "wallhaven", await X(1);
  }, pt = (S) => {
    W.value = S, T.value = !0, E.value = !1;
  }, Ne = () => {
    W.value = null, T.value = !1, E.value = !1;
  }, wt = async () => {
    l.value = "switcher", Ne(), await t();
  }, gt = () => {
    T.value = !1;
  }, ft = () => {
    T.value = !1, E.value = !0;
  }, Me = async (S) => {
    if (!u.value.has(S.id)) {
      ne(S, "setting");
      try {
        I.msg(n("wallpaperSwitcher.messages.settingWallpaper"), "info"), await Ws(S), await t(), I.msg(n("wallpaperSwitcher.messages.wallpaperSet"), "success");
      } catch ($) {
        I.msg(he($), "error");
      } finally {
        ne(S, null);
      }
    }
  }, Fe = async (S) => {
    if (!u.value.has(S.id)) {
      ne(S, "downloading");
      try {
        I.msg(n("wallpaperSwitcher.messages.downloadingWallpaper"), "info"), await $s(S), await t(), I.msg(n("wallpaperSwitcher.messages.wallpaperDownloaded"), "success");
      } catch ($) {
        I.msg(he($), "error");
      } finally {
        ne(S, null);
      }
    }
  }, vt = async () => {
    i.value > 1 && await X(i.value - 1);
  }, mt = async () => {
    i.value < r.value && await X(i.value + 1);
  };
  return Oe(() => {
    L = new IntersectionObserver(
      (S) => {
        for (const $ of S) {
          if (!$.isIntersecting) continue;
          const M = $.target, D = M.dataset.src;
          D && M.src !== D && (M.src = D), L?.unobserve(M);
        }
      },
      { root: null, rootMargin: "120px" }
    ), Q = null, U = null;
  }), kn(() => {
    L?.disconnect(), L = null, Q?.(), U?.(), Y?.();
  }), {
    activeView: l,
    wallpapers: a,
    wallhavenPage: i,
    wallhavenLastPage: r,
    wallhavenLoading: c,
    wallhavenError: g,
    wallhavenKeyword: p,
    wallhavenCategory: v,
    wallhavenSource: w,
    previewWallpaper: W,
    previewLoading: T,
    previewLoadFailed: E,
    workingActions: u,
    downloadProgress: m,
    loadedThumbIds: k,
    wallhavenSourceLabel: Te,
    visibleWallpapers: je,
    openWallhavenGrid: ht,
    backToSwitcher: wt,
    openPreview: pt,
    closePreview: Ne,
    markPreviewLoaded: gt,
    markPreviewFailed: ft,
    markThumbLoaded: st,
    setThumbRef: it,
    refreshWallhaven: ct,
    setWallhavenSource: ut,
    setWallhavenCategory: dt,
    setWallpaperFromWallhaven: Me,
    downloadWallpaperFromWallhaven: Fe,
    prevWallhavenPage: vt,
    nextWallhavenPage: mt,
    setupListeners: async () => {
      Q = await Se("wallpaper-switcher-changed", t), U = await Se(
        "wallpaper-switcher-error",
        (S) => {
          I.msg(
            S.payload?.message || n("wallpaperSwitcher.messages.scheduleSwitchFailed"),
            "error"
          );
        }
      ), Y = await Se("wallpaper-download-progress", (S) => {
        const { id: $, downloaded: M, total: D, phase: le } = S.payload;
        if (!u.value.has($)) return;
        const Ee = new Map(m.value);
        Ee.set($, {
          downloaded: M,
          total: D ?? null,
          phase: le ?? "downloading"
        }), m.value = Ee;
      });
    }
  };
}
var js = {
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
function xs() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ns(e, t, n) {
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
var Ms = Symbol("icon-context");
function A(e, t, n) {
  var l = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(i) {
      var r = xs(), c = oe(Ms, js);
      return function() {
        var g = i.size, p = i.strokeWidth, v = i.strokeLinecap, w = i.strokeLinejoin, W = i.theme, T = i.fill, E = i.spin, u = Ns(r, {
          size: g,
          strokeWidth: p,
          strokeLinecap: v,
          strokeLinejoin: w,
          theme: W,
          fill: T
        }, c), m = [c.prefix + "-icon"];
        return m.push(c.prefix + "-icon-" + e), t && c.rtl && m.push(c.prefix + "-icon-rtl"), E && m.push(c.prefix + "-icon-spin"), d("span", {
          class: m.join(" ")
        }, [n(u)]);
      };
    }
  };
  return l;
}
const Fs = A("back", !0, function(e) {
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
}), Es = A("check-small", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M10 24L20 34L40 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ye = A("close-small", !1, function(e) {
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
}), nl = A("computer", !1, function(e) {
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
}), As = A("delete", !1, function(e) {
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
}), Rs = A("download", !1, function(e) {
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
}), St = A("folder-open", !0, function(e) {
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
}), fn = A("lightning", !0, function(e) {
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
}), Xe = A("loading", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _e = A("picture", !0, function(e) {
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
}), Ds = A("picture-album", !0, function(e) {
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
}), Hs = A("pin", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [d("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), d("defs", null, [d("clipPath", {
    id: e.id + "1c742167"
  }, [d("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Vs = A("preview-open", !1, function(e) {
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
}), It = A("refresh", !0, function(e) {
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
}), Bs = A("save", !0, function(e) {
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
}), ll = A("search", !0, function(e) {
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
}), vn = A("time", !0, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("path", {
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ks = ["disabled", "onClick"], Gs = ["onClick", "onKeydown"], al = /* @__PURE__ */ N({
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
    const n = t, { t: l } = te(), a = [
      { value: "hot", labelKey: "wallpaperSwitcher.hot" },
      { value: "toplist", labelKey: "wallpaperSwitcher.toplist" },
      { value: "favorites", labelKey: "wallpaperSwitcher.favorites" }
    ], i = (r, c) => {
      c || n("update:modelValue", r);
    };
    return (r, c) => (y(), C(
      q,
      null,
      We(a, (g) => (y(), C(
        q,
        {
          key: g.value
        },
        [
          r.tabClass === "button" ? (y(), C("button", {
            key: 0,
            type: "button",
            class: z({ [r.activeClass || "active"]: r.modelValue === g.value }),
            disabled: r.disabled,
            onClick: (p) => i(g.value, r.disabled)
          }, f(o(l)(g.labelKey)), 11, Ks)) : (y(), C("div", {
            key: 1,
            class: z(["seg-tab", {
              [r.activeClass || "active"]: r.modelValue === g.value,
              [r.disabledClass || "disabled"]: r.disabled
            }]),
            role: "tab",
            tabindex: "0",
            onClick: (p) => i(g.value, r.disabled),
            onKeydown: _n(Ie((p) => i(g.value, r.disabled), ["prevent"]), ["enter"])
          }, f(o(l)(g.labelKey)), 43, Gs))
        ],
        64
        /* STABLE_FRAGMENT */
      ))),
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), Us = { class: "workspace-grid" }, Zs = { class: "wallpaper-stage" }, qs = { class: "stage-media" }, Js = ["src", "alt"], Qs = {
  key: 1,
  class: "stage-empty"
}, Ys = { class: "stage-topline" }, Xs = { class: "eyebrow-pill" }, ei = { class: "source-pill" }, ti = { class: "stage-content" }, ni = { class: "stage-copy" }, li = ["title"], ai = { class: "stage-meta" }, oi = { class: "stage-actions" }, si = ["disabled"], ii = { class: "source-workspace" }, ri = { class: "section-heading" }, ci = { class: "section-kicker" }, ui = { class: "ready-state" }, di = {
  class: "mode-picker",
  role: "tablist"
}, hi = ["aria-selected", "onClick"], pi = { class: "source-detail" }, wi = { class: "detail-title" }, gi = {
  key: 0,
  class: "folder-sort-picker"
}, fi = ["value"], vi = ["value"], mi = ["title"], yi = { class: "path-icon" }, bi = { class: "path-copy" }, ki = { class: "path-cta" }, _i = { class: "detail-title" }, Ci = {
  class: "online-source-tabs",
  role: "tablist"
}, Si = { class: "detail-title" }, Li = ["title"], Pi = { class: "path-icon" }, Wi = { class: "path-copy" }, $i = { class: "path-cta" }, zi = { class: "automation-card" }, Oi = { class: "automation-intro" }, Ii = { class: "automation-icon" }, Ti = { class: "section-kicker" }, ji = { class: "schedule-toggle" }, xi = ["checked"], Ni = { class: "compact-control" }, Mi = { class: "number-input" }, Fi = ["value"], Ei = { class: "compact-control order-control" }, Ai = { class: "mini-segmented" }, Ri = { class: "restore-check" }, Di = ["checked"], Hi = { class: "utility-bar" }, Vi = { class: "tray-callout" }, Bi = { class: "cache-summary" }, Ki = { class: "utility-actions" }, Gi = ["disabled", "title"], Ui = ["disabled", "title"], Zi = ["disabled"], qi = /* @__PURE__ */ N({
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
    const n = e, l = t, { t: a } = te(), i = [
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
    ], c = (u) => {
      l("updateConfig", { ...n.config, ...u });
    }, g = (u) => c({ mode: u }), p = (u) => c({ wallhavenSource: u }), v = (u) => c({ order: u }), w = (u) => c({
      folderSort: u.target.value
    }), W = (u) => c({ scheduleEnabled: u.target.checked }), T = (u) => c({
      intervalMinutes: Math.min(
        1440,
        Math.max(1, Number(u.target.value) || 1)
      )
    }), E = (u) => c({ autoRestore: u.target.checked });
    return (u, m) => (y(), C(
      "div",
      {
        class: z(["switcher-home", { "is-loading": u.loading }])
      },
      [
        s("section", Us, [
          s("article", Zs, [
            s("div", qs, [
              u.previewSrc ? (y(), C("img", {
                key: 0,
                src: u.previewSrc,
                alt: o(a)("wallpaperSwitcher.currentPreviewAlt")
              }, null, 8, Js)) : (y(), C("div", Qs, [
                d(o(_e), { size: 40 }),
                s(
                  "span",
                  null,
                  f(o(a)("wallpaperSwitcher.noCurrentWallpaper")),
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
            s("div", Ys, [
              s("span", Xs, [
                m[11] || (m[11] = s(
                  "span",
                  { class: "live-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                V(
                  " " + f(o(a)("wallpaperSwitcher.currentDesktop")),
                  1
                  /* TEXT */
                )
              ]),
              s(
                "span",
                ei,
                f(u.sourceLabel),
                1
                /* TEXT */
              )
            ]),
            s("div", ti, [
              s("div", ni, [
                s(
                  "p",
                  null,
                  f(o(a)("wallpaperSwitcher.currentWallpaper")),
                  1
                  /* TEXT */
                ),
                s("h1", { title: u.currentWallpaperName }, f(u.currentWallpaperName), 9, li),
                s("div", ai, [
                  s("span", null, [
                    d(o(nl), { size: 15 }),
                    V(
                      " " + f(u.resolutionLabel),
                      1
                      /* TEXT */
                    )
                  ]),
                  s("span", null, [
                    d(o(vn), { size: 15 }),
                    V(
                      " " + f(u.nextSwitchLabel),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              s("div", oi, [
                s("button", {
                  type: "button",
                  class: "stage-btn stage-btn-primary",
                  disabled: u.switching,
                  onClick: m[0] || (m[0] = (k) => l("switchNow"))
                }, [
                  u.switching ? (y(), j(o(It), {
                    key: 0,
                    size: 16,
                    class: "spinning"
                  })) : (y(), j(o(fn), {
                    key: 1,
                    size: 16
                  })),
                  V(
                    " " + f(u.switching ? o(a)("wallpaperSwitcher.switching") : o(a)("wallpaperSwitcher.switchNow")),
                    1
                    /* TEXT */
                  )
                ], 8, si),
                s("button", {
                  type: "button",
                  class: "stage-btn stage-btn-ghost",
                  onClick: m[1] || (m[1] = (k) => l("setCurrentAsFixed"))
                }, [
                  d(o(Hs), { size: 16 }),
                  V(
                    " " + f(o(a)("wallpaperSwitcher.setFixed")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          s("aside", ii, [
            s("header", ri, [
              s("div", null, [
                s(
                  "span",
                  ci,
                  f(o(a)("wallpaperSwitcher.stepOne")),
                  1
                  /* TEXT */
                ),
                s(
                  "h2",
                  null,
                  f(o(a)("wallpaperSwitcher.chooseSource")),
                  1
                  /* TEXT */
                )
              ]),
              s("span", ui, [
                d(o(Es), { size: 14 }),
                V(
                  " " + f(o(a)("wallpaperSwitcher.ready")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            s("div", di, [
              (y(), C(
                q,
                null,
                We(i, (k) => s("button", {
                  key: k.value,
                  type: "button",
                  class: z({ active: u.config.mode === k.value }),
                  role: "tab",
                  "aria-selected": u.config.mode === k.value,
                  onClick: (G) => g(k.value)
                }, [
                  k.value === "folder" ? (y(), j(o(St), {
                    key: 0,
                    size: 18
                  })) : k.value === "wallhaven" ? (y(), j(o(ll), {
                    key: 1,
                    size: 18
                  })) : (y(), j(o(_e), {
                    key: 2,
                    size: 18
                  })),
                  s("span", null, [
                    s(
                      "strong",
                      null,
                      f(o(a)(k.labelKey)),
                      1
                      /* TEXT */
                    ),
                    s(
                      "small",
                      null,
                      f(o(a)(k.captionKey)),
                      1
                      /* TEXT */
                    )
                  ])
                ], 10, hi)),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            s("div", pi, [
              u.config.mode === "folder" ? (y(), C(
                q,
                { key: 0 },
                [
                  s("div", wi, [
                    s("div", null, [
                      s(
                        "span",
                        null,
                        f(o(a)("wallpaperSwitcher.localLibrary")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "strong",
                        null,
                        f(u.folderCountLabel),
                        1
                        /* TEXT */
                      )
                    ]),
                    s("button", {
                      type: "button",
                      class: "text-action",
                      onClick: m[2] || (m[2] = (k) => l("scanFolder"))
                    }, [
                      d(o(It), { size: 14 }),
                      V(
                        " " + f(o(a)("wallpaperSwitcher.scan")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  u.config.order === "sequential" ? (y(), C("label", gi, [
                    s(
                      "span",
                      null,
                      f(o(a)("wallpaperSwitcher.folderSortLabel")),
                      1
                      /* TEXT */
                    ),
                    s("select", {
                      value: u.config.folderSort,
                      onChange: w
                    }, [
                      (y(), C(
                        q,
                        null,
                        We(r, (k) => s("option", {
                          key: k.value,
                          value: k.value
                        }, f(o(a)(k.labelKey)), 9, vi)),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ], 40, fi)
                  ])) : F("v-if", !0),
                  s("button", {
                    type: "button",
                    class: "path-picker",
                    title: u.config.folderPath || "",
                    onClick: m[3] || (m[3] = (k) => l("chooseFolder"))
                  }, [
                    s("span", yi, [
                      d(o(St), { size: 18 })
                    ]),
                    s("span", bi, [
                      s(
                        "small",
                        null,
                        f(o(a)("wallpaperSwitcher.folderPath")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "strong",
                        null,
                        f(u.config.folderPath || o(a)("wallpaperSwitcher.placeholders.selectFolder")),
                        1
                        /* TEXT */
                      )
                    ]),
                    s(
                      "span",
                      ki,
                      f(o(a)("wallpaperSwitcher.change")),
                      1
                      /* TEXT */
                    )
                  ], 8, mi)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : u.config.mode === "wallhaven" ? (y(), C(
                q,
                { key: 1 },
                [
                  s("div", _i, [
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
                        f(o(a)("wallpaperSwitcher.onlineSourceHint")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  s("div", Ci, [
                    d(al, {
                      "tab-class": "button",
                      "model-value": u.config.wallhavenSource,
                      "onUpdate:modelValue": p
                    }, null, 8, ["model-value"])
                  ]),
                  s("button", {
                    type: "button",
                    class: "browse-online-btn",
                    onClick: m[4] || (m[4] = (k) => l("openWallhavenGrid"))
                  }, [
                    d(o(_e), { size: 18 }),
                    s("span", null, [
                      s(
                        "strong",
                        null,
                        f(o(a)("wallpaperSwitcher.browseOnline")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "small",
                        null,
                        f(o(a)("wallpaperSwitcher.browseOnlineHint")),
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
              )) : (y(), C(
                q,
                { key: 2 },
                [
                  s("div", Si, [
                    s("div", null, [
                      s(
                        "span",
                        null,
                        f(o(a)("wallpaperSwitcher.fixedImage")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "strong",
                        null,
                        f(o(a)("wallpaperSwitcher.fixedModeHint")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  s("button", {
                    type: "button",
                    class: "path-picker",
                    title: u.config.fixedImagePath || "",
                    onClick: m[5] || (m[5] = (k) => l("chooseImage"))
                  }, [
                    s("span", Pi, [
                      d(o(_e), { size: 18 })
                    ]),
                    s("span", Wi, [
                      s(
                        "small",
                        null,
                        f(o(a)("wallpaperSwitcher.imagePath")),
                        1
                        /* TEXT */
                      ),
                      s(
                        "strong",
                        null,
                        f(u.config.fixedImagePath || o(a)("wallpaperSwitcher.placeholders.selectImage")),
                        1
                        /* TEXT */
                      )
                    ]),
                    s(
                      "span",
                      $i,
                      f(o(a)("wallpaperSwitcher.change")),
                      1
                      /* TEXT */
                    )
                  ], 8, Li)
                ],
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ]),
        s("section", zi, [
          s("div", Oi, [
            s("span", Ii, [
              d(o(vn), { size: 20 })
            ]),
            s("div", null, [
              s(
                "span",
                Ti,
                f(o(a)("wallpaperSwitcher.stepTwo")),
                1
                /* TEXT */
              ),
              s(
                "h2",
                null,
                f(o(a)("wallpaperSwitcher.automationTitle")),
                1
                /* TEXT */
              ),
              s(
                "p",
                null,
                f(o(a)("wallpaperSwitcher.automationHint")),
                1
                /* TEXT */
              )
            ])
          ]),
          s("label", ji, [
            s("span", null, [
              s(
                "strong",
                null,
                f(o(a)("wallpaperSwitcher.enableSchedule")),
                1
                /* TEXT */
              )
            ]),
            s("input", {
              checked: u.config.scheduleEnabled,
              type: "checkbox",
              onChange: W
            }, null, 40, xi),
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
          s("label", Ni, [
            s(
              "span",
              null,
              f(o(a)("wallpaperSwitcher.interval")),
              1
              /* TEXT */
            ),
            s("span", Mi, [
              s("input", {
                value: u.config.intervalMinutes,
                type: "number",
                min: "1",
                max: "1440",
                onInput: T
              }, null, 40, Fi),
              s(
                "small",
                null,
                f(o(a)("wallpaperSwitcher.minutes")),
                1
                /* TEXT */
              )
            ])
          ]),
          s("div", Ei, [
            s(
              "span",
              null,
              f(o(a)("wallpaperSwitcher.rotationOrder")),
              1
              /* TEXT */
            ),
            s("div", Ai, [
              s(
                "button",
                {
                  type: "button",
                  class: z({ active: u.config.order === "sequential" }),
                  onClick: m[6] || (m[6] = (k) => v("sequential"))
                },
                f(o(a)("wallpaperSwitcher.sequential")),
                3
                /* TEXT, CLASS */
              ),
              s(
                "button",
                {
                  type: "button",
                  class: z({ active: u.config.order === "random" }),
                  onClick: m[7] || (m[7] = (k) => v("random"))
                },
                f(o(a)("wallpaperSwitcher.random")),
                3
                /* TEXT, CLASS */
              )
            ])
          ]),
          s("label", Ri, [
            s("input", {
              checked: u.config.autoRestore,
              type: "checkbox",
              onChange: E
            }, null, 40, Di),
            s("span", null, [
              s(
                "strong",
                null,
                f(o(a)("wallpaperSwitcher.autoRestoreShort")),
                1
                /* TEXT */
              ),
              s(
                "small",
                null,
                f(o(a)("wallpaperSwitcher.autoRestoreHint")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        s("footer", Hi, [
          s("div", Vi, [
            d(o(fn), { size: 17 }),
            s("span", null, [
              s(
                "strong",
                null,
                f(o(a)("wallpaperSwitcher.trayQuickSwitch")),
                1
                /* TEXT */
              ),
              s(
                "small",
                null,
                f(o(a)("wallpaperSwitcher.trayQuickSwitchHint")),
                1
                /* TEXT */
              )
            ])
          ]),
          s("div", Bi, [
            s(
              "span",
              null,
              f(o(a)("wallpaperSwitcher.cache")),
              1
              /* TEXT */
            ),
            s(
              "strong",
              null,
              f(u.cacheSizeLabel),
              1
              /* TEXT */
            )
          ]),
          s("div", Ki, [
            s("button", {
              type: "button",
              class: "utility-btn",
              disabled: u.clearingCache,
              title: o(a)("wallpaperSwitcher.clearCache"),
              onClick: m[8] || (m[8] = (k) => l("clearCache"))
            }, [
              d(o(As), { size: 16 })
            ], 8, Gi),
            s("button", {
              type: "button",
              class: "utility-btn",
              disabled: u.openingCache,
              title: o(a)("wallpaperSwitcher.openCache"),
              onClick: m[9] || (m[9] = (k) => l("openCacheDir"))
            }, [
              d(o(St), { size: 16 })
            ], 8, Ui),
            s("button", {
              type: "button",
              class: "save-btn",
              disabled: u.saving,
              onClick: m[10] || (m[10] = (k) => l("persistConfig"))
            }, [
              d(o(Bs), { size: 17 }),
              V(
                " " + f(u.saving ? o(a)("wallpaperSwitcher.saving") : o(a)("wallpaperSwitcher.saveSettings")),
                1
                /* TEXT */
              )
            ], 8, Zi)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Ji = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Qi = {
  key: 0,
  class: "title"
}, Yi = { class: "title-icon" }, Xi = { class: "title-copy" }, er = {
  key: 1,
  class: "title"
}, tr = ["title"], nr = {
  key: 2,
  class: "window-actions"
}, lr = ["title"], ar = ["title"], or = {
  key: 3,
  class: "window-actions"
}, sr = ["aria-label"], ir = ["title"], rr = /* @__PURE__ */ N({
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
    const n = t, { t: l } = te();
    return (a, i) => (y(), C("header", Ji, [
      a.activeView === "switcher" ? (y(), C("div", Qi, [
        s("span", Yi, [
          d(o(_e), { size: 18 })
        ]),
        s("span", Xi, [
          s(
            "strong",
            null,
            f(o(l)("wallpaperSwitcher.title")),
            1
            /* TEXT */
          ),
          s(
            "small",
            null,
            f(o(l)("wallpaperSwitcher.titleSubtitle")),
            1
            /* TEXT */
          )
        ]),
        s(
          "span",
          {
            class: z(["title-status", { active: a.scheduleEnabled && a.schedulerRunning }])
          },
          [
            i[5] || (i[5] = s(
              "span",
              null,
              null,
              -1
              /* HOISTED */
            )),
            V(
              " " + f(a.scheduleEnabled && a.schedulerRunning ? o(l)("wallpaperSwitcher.scheduleRunning") : o(l)("wallpaperSwitcher.schedulePaused")),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        )
      ])) : (y(), C("div", er, [
        s("button", {
          type: "button",
          class: "flat-icon",
          title: o(l)("wallpaperSwitcher.back"),
          onClick: i[0] || (i[0] = (r) => n("back"))
        }, [
          d(o(Fs), { size: 20 })
        ], 8, tr),
        s(
          "span",
          null,
          f(o(l)("wallpaperSwitcher.wallhavenTitle")),
          1
          /* TEXT */
        )
      ])),
      a.activeView === "switcher" ? (y(), C("div", nr, [
        s("button", {
          type: "button",
          class: "online-entry-btn",
          title: o(l)("wallpaperSwitcher.openWallhaven"),
          onClick: i[1] || (i[1] = (r) => n("openWallhaven"))
        }, [
          d(o(Ds), { size: 18 }),
          s(
            "span",
            null,
            f(o(l)("wallpaperSwitcher.browseOnline")),
            1
            /* TEXT */
          )
        ], 8, lr),
        s("button", {
          type: "button",
          class: "icon-btn",
          title: o(l)("wallpaperSwitcher.close"),
          onClick: i[2] || (i[2] = (r) => n("close"))
        }, [
          d(o(Ye), { size: 20 })
        ], 8, ar)
      ])) : (y(), C("div", or, [
        s("div", {
          class: "source-toggle",
          role: "tablist",
          "aria-label": o(l)("wallpaperSwitcher.sourceToggle")
        }, [
          d(al, {
            "model-value": a.wallhavenSource,
            disabled: a.wallhavenLoading,
            "onUpdate:modelValue": i[3] || (i[3] = (r) => n("setWallhavenSource", r))
          }, null, 8, ["model-value", "disabled"])
        ], 8, sr),
        s("button", {
          type: "button",
          class: "icon-btn",
          title: o(l)("wallpaperSwitcher.close"),
          onClick: i[4] || (i[4] = (r) => n("close"))
        }, [
          d(o(Ye), { size: 20 })
        ], 8, ir)
      ]))
    ]));
  }
}), cr = { class: "download-progress-panel" }, ur = {
  viewBox: "0 0 52 52",
  "aria-hidden": "true"
}, dr = ["stroke", "stroke-dashoffset"], hr = { class: "download-progress-copy" }, ol = /* @__PURE__ */ N({
  __name: "DownloadProgressIndicator",
  props: {
    progress: {},
    variant: { default: "card" }
  },
  setup(e) {
    const t = e, { t: n } = te(), l = `wallpaper-progress-${Sl().replaceAll(":", "")}`, a = 2 * Math.PI * 22, i = _(() => t.progress.phase === "complete" ? 100 : !t.progress.total || t.progress.total <= 0 ? null : Math.min(
      100,
      Math.max(
        0,
        Math.round(t.progress.downloaded / t.progress.total * 100)
      )
    )), r = (v) => v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : `${(v / 1024 / 1024).toFixed(1)} MB`, c = _(() => t.progress.phase === "preparing" ? n("wallpaperSwitcher.preparingDownload") : t.progress.phase === "complete" ? n("wallpaperSwitcher.downloadReady") : i.value !== null ? `${i.value}%` : n("wallpaperSwitcher.downloading")), g = _(() => t.progress.total && t.progress.total > 0 ? `${r(t.progress.downloaded)} / ${r(t.progress.total)}` : t.progress.downloaded > 0 ? n("wallpaperSwitcher.downloadedSize", {
      size: r(t.progress.downloaded)
    }) : n("wallpaperSwitcher.waitingForSize")), p = _(
      () => i.value === null ? a * 0.76 : a * (1 - i.value / 100)
    );
    return (v, w) => (y(), C(
      "div",
      {
        class: z(["download-progress-overlay", `is-${v.variant}`])
      },
      [
        s("div", cr, [
          s(
            "div",
            {
              class: z(["download-progress-visual", { "is-indeterminate": i.value === null }])
            },
            [
              (y(), C("svg", ur, [
                s("defs", null, [
                  s("linearGradient", {
                    id: l,
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1"
                  }, w[0] || (w[0] = [
                    s(
                      "stop",
                      {
                        offset: "0",
                        "stop-color": "var(--wallpaper-progress-start, #93c5fd)"
                      },
                      null,
                      -1
                      /* HOISTED */
                    ),
                    s(
                      "stop",
                      {
                        offset: "0.52",
                        "stop-color": "var(--wallpaper-primary, #818cf8)"
                      },
                      null,
                      -1
                      /* HOISTED */
                    ),
                    s(
                      "stop",
                      {
                        offset: "1",
                        "stop-color": "var(--wallpaper-progress-end, #c084fc)"
                      },
                      null,
                      -1
                      /* HOISTED */
                    )
                  ]))
                ]),
                w[1] || (w[1] = s(
                  "circle",
                  {
                    class: "download-progress-track",
                    cx: "26",
                    cy: "26",
                    r: "22"
                  },
                  null,
                  -1
                  /* HOISTED */
                )),
                s("circle", {
                  class: "download-progress-value",
                  cx: "26",
                  cy: "26",
                  r: "22",
                  stroke: `url(#${l})`,
                  "stroke-dasharray": a,
                  "stroke-dashoffset": p.value
                }, null, 8, dr)
              ])),
              w[2] || (w[2] = s(
                "span",
                { class: "download-progress-pulse" },
                null,
                -1
                /* HOISTED */
              ))
            ],
            2
            /* CLASS */
          ),
          s("div", hr, [
            s(
              "strong",
              null,
              f(c.value),
              1
              /* TEXT */
            ),
            s(
              "span",
              null,
              f(g.value),
              1
              /* TEXT */
            )
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), pr = { class: "wallhaven-view" }, wr = { class: "filters filters--preview-style" }, gr = { class: "search-box wallhaven-search" }, fr = ["value", "placeholder"], vr = ["title"], mr = ["aria-label"], yr = ["disabled", "onClick"], br = { class: "wallhaven-meta" }, kr = ["title"], _r = { class: "grid-wrap" }, Cr = {
  key: 0,
  class: "empty-state"
}, Sr = {
  key: 1,
  class: "empty-state error-state"
}, Lr = {
  key: 2,
  class: "empty-state"
}, Pr = {
  key: 3,
  class: "wallpaper-grid"
}, Wr = ["onClick"], $r = {
  key: 0,
  class: "thumb-skeleton"
}, zr = ["alt", "onLoad"], Or = ["title", "onClick"], Ir = ["title", "disabled", "aria-busy", "onClick"], Tr = ["title", "disabled", "aria-busy", "onClick"], jr = { class: "pager" }, xr = { class: "source-note" }, Nr = { class: "pager-actions" }, Mr = ["disabled"], Fr = ["disabled"], Er = /* @__PURE__ */ N({
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
    const n = e, l = t, { t: a } = te(), i = [
      { value: "general", labelKey: "wallpaperSwitcher.categories.general" },
      { value: "anime", labelKey: "wallpaperSwitcher.categories.anime" },
      { value: "people", labelKey: "wallpaperSwitcher.categories.people" },
      { value: "nature", labelKey: "wallpaperSwitcher.categories.nature" }
    ], r = (p) => l("update:keyword", p.target.value), c = (p) => n.workingActions.get(p), g = (p) => n.downloadProgress.get(p);
    return (p, v) => (y(), C("div", pr, [
      s("section", wr, [
        s("div", gr, [
          s("input", {
            value: p.keyword,
            type: "text",
            placeholder: o(a)("wallpaperSwitcher.searchPlaceholder"),
            onInput: r,
            onKeydown: v[0] || (v[0] = _n((w) => l("refresh"), ["enter"]))
          }, null, 40, fr),
          d(o(ll), {
            size: 16,
            class: "search-icon"
          }),
          p.keyword ? (y(), C("button", {
            key: 0,
            type: "button",
            class: "clear-btn",
            title: o(a)("wallpaperSwitcher.clear"),
            onClick: v[1] || (v[1] = (w) => l("update:keyword", ""))
          }, [
            d(o(Ye), { size: 18 })
          ], 8, vr)) : F("v-if", !0)
        ]),
        s("div", {
          class: "wallhaven-tabs",
          role: "tablist",
          "aria-label": o(a)("wallpaperSwitcher.categoryToggle")
        }, [
          (y(), C(
            q,
            null,
            We(i, (w) => s("button", {
              key: w.value,
              type: "button",
              class: z({ active: p.category === w.value }),
              disabled: p.loading,
              onClick: (W) => l("setCategory", w.value)
            }, f(o(a)(w.labelKey)), 11, yr)),
            64
            /* STABLE_FRAGMENT */
          ))
        ], 8, mr),
        s("div", br, [
          s(
            "span",
            null,
            f(o(a)("wallpaperSwitcher.autoMatch", { resolution: p.screenLabel })),
            1
            /* TEXT */
          ),
          s("button", {
            type: "button",
            class: "refresh-btn wallhaven-refresh",
            title: o(a)("wallpaperSwitcher.refresh"),
            onClick: v[2] || (v[2] = (w) => l("refresh"))
          }, [
            d(o(It), {
              size: 14,
              class: z({ spinning: p.loading })
            }, null, 8, ["class"])
          ], 8, kr)
        ])
      ]),
      s("section", _r, [
        p.loading && p.wallpapers.length === 0 ? (y(), C(
          "div",
          Cr,
          f(o(a)("wallpaperSwitcher.loadingWallhaven")),
          1
          /* TEXT */
        )) : p.error ? (y(), C("div", Sr, [
          s(
            "span",
            null,
            f(p.error),
            1
            /* TEXT */
          ),
          s(
            "button",
            {
              type: "button",
              onClick: v[3] || (v[3] = (w) => l("refresh"))
            },
            f(o(a)("wallpaperSwitcher.retry")),
            1
            /* TEXT */
          )
        ])) : p.wallpapers.length === 0 ? (y(), C(
          "div",
          Lr,
          f(o(a)("wallpaperSwitcher.noWallpapers")),
          1
          /* TEXT */
        )) : (y(), C("div", Pr, [
          (y(!0), C(
            q,
            null,
            We(p.wallpapers, (w) => (y(), C("article", {
              key: w.id,
              class: "wallpaper-card"
            }, [
              s("button", {
                type: "button",
                class: "thumb",
                onClick: (W) => l("openPreview", w)
              }, [
                p.loadedThumbIds.has(w.id) ? F("v-if", !0) : (y(), C("div", $r)),
                s("img", {
                  ref_for: !0,
                  ref: (W) => p.setThumbRef(w, W),
                  alt: w.resolution,
                  loading: "lazy",
                  onLoad: (W) => l("markThumbLoaded", w.id)
                }, null, 40, zr),
                s(
                  "span",
                  null,
                  f(w.resolution),
                  1
                  /* TEXT */
                ),
                g(w.id) ? (y(), j(ol, {
                  key: 1,
                  progress: g(w.id)
                }, null, 8, ["progress"])) : F("v-if", !0)
              ], 8, Wr),
              s("div", {
                class: "card-actions",
                onClick: v[4] || (v[4] = Ie(() => {
                }, ["stop"]))
              }, [
                s("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.preview"),
                  onClick: (W) => l("openPreview", w)
                }, [
                  d(o(Vs), { size: 16 }),
                  V(
                    " " + f(o(a)("wallpaperSwitcher.preview")),
                    1
                    /* TEXT */
                  )
                ], 8, Or),
                s("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.setWallpaper"),
                  class: z({
                    "is-working": c(w.id) === "setting"
                  }),
                  disabled: !!c(w.id),
                  "aria-busy": c(w.id) === "setting",
                  onClick: (W) => l("setWallpaper", w)
                }, [
                  c(w.id) === "setting" ? (y(), j(o(Xe), {
                    key: 0,
                    size: 16,
                    spin: ""
                  })) : (y(), j(o(nl), {
                    key: 1,
                    size: 16
                  })),
                  s(
                    "span",
                    null,
                    f(c(w.id) === "setting" ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.set")),
                    1
                    /* TEXT */
                  )
                ], 10, Ir),
                s("button", {
                  type: "button",
                  title: o(a)("wallpaperSwitcher.download"),
                  class: z({
                    "is-working": c(w.id) === "downloading"
                  }),
                  disabled: !!c(w.id),
                  "aria-busy": c(w.id) === "downloading",
                  onClick: (W) => l("downloadWallpaper", w)
                }, [
                  c(w.id) === "downloading" ? (y(), j(o(Xe), {
                    key: 0,
                    size: 16,
                    spin: ""
                  })) : (y(), j(o(Rs), {
                    key: 1,
                    size: 16
                  })),
                  s(
                    "span",
                    null,
                    f(c(w.id) === "downloading" ? o(a)("wallpaperSwitcher.downloading") : o(a)("wallpaperSwitcher.download")),
                    1
                    /* TEXT */
                  )
                ], 10, Tr)
              ])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      s("footer", jr, [
        s(
          "span",
          null,
          f(o(a)("wallpaperSwitcher.page", { page: p.page })),
          1
          /* TEXT */
        ),
        s(
          "span",
          xr,
          f(o(a)("wallpaperSwitcher.sourceNote", { source: p.sourceLabel })),
          1
          /* TEXT */
        ),
        s("div", Nr, [
          s("button", {
            type: "button",
            disabled: p.page <= 1 || p.loading,
            onClick: v[5] || (v[5] = (w) => l("prevPage"))
          }, f(o(a)("wallpaperSwitcher.prevPage")), 9, Mr),
          s("button", {
            type: "button",
            disabled: p.page >= p.lastPage || p.loading,
            onClick: v[6] || (v[6] = (w) => l("nextPage"))
          }, f(o(a)("wallpaperSwitcher.nextPage")), 9, Fr)
        ])
      ])
    ]));
  }
}), Ar = { class: "preview-dialog" }, Rr = { class: "preview-image-wrap" }, Dr = {
  key: 0,
  class: "preview-skeleton"
}, Hr = {
  key: 1,
  class: "preview-error"
}, Vr = ["src", "alt"], Br = ["disabled", "aria-busy"], Kr = ["disabled", "aria-busy"], Gr = /* @__PURE__ */ N({
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
    const n = e, l = t, { t: a } = te(), i = (c) => n.workingActions.get(c), r = (c) => n.downloadProgress.get(c);
    return (c, g) => c.wallpaper ? (y(), C("div", {
      key: 0,
      class: "preview-modal",
      onClick: g[5] || (g[5] = Ie((p) => l("close"), ["self"]))
    }, [
      s("div", Ar, [
        s("header", null, [
          s(
            "strong",
            null,
            f(c.wallpaper.resolution),
            1
            /* TEXT */
          ),
          s("button", {
            type: "button",
            class: "flat-icon",
            onClick: g[0] || (g[0] = (p) => l("close"))
          }, [
            d(o(Ye), { size: 23 })
          ])
        ]),
        s("div", Rr, [
          c.loading ? (y(), C("div", Dr, [
            s(
              "span",
              null,
              f(o(a)("wallpaperSwitcher.loadingPreview")),
              1
              /* TEXT */
            )
          ])) : F("v-if", !0),
          c.loadFailed ? (y(), C(
            "div",
            Hr,
            f(o(a)("wallpaperSwitcher.previewLoadFailed")),
            1
            /* TEXT */
          )) : F("v-if", !0),
          s("img", {
            class: z({ ready: !c.loading && !c.loadFailed }),
            src: c.wallpaper.path,
            alt: o(a)("wallpaperSwitcher.wallpaperPreviewAlt"),
            onLoad: g[1] || (g[1] = (p) => l("loaded")),
            onError: g[2] || (g[2] = (p) => l("failed"))
          }, null, 42, Vr),
          r(c.wallpaper.id) ? (y(), j(ol, {
            key: 2,
            progress: r(c.wallpaper.id),
            variant: "preview"
          }, null, 8, ["progress"])) : F("v-if", !0)
        ]),
        s("footer", null, [
          s("button", {
            type: "button",
            class: z(["secondary-btn", {
              "is-working": i(c.wallpaper.id) === "downloading"
            }]),
            disabled: !!i(c.wallpaper.id),
            "aria-busy": i(c.wallpaper.id) === "downloading",
            onClick: g[3] || (g[3] = (p) => l("download", c.wallpaper))
          }, [
            i(c.wallpaper.id) === "downloading" ? (y(), j(o(Xe), {
              key: 0,
              size: 16,
              spin: ""
            })) : F("v-if", !0),
            V(
              " " + f(i(c.wallpaper.id) === "downloading" ? o(a)("wallpaperSwitcher.downloading") : o(a)("wallpaperSwitcher.downloadCache")),
              1
              /* TEXT */
            )
          ], 10, Br),
          s("button", {
            type: "button",
            class: z(["primary-btn", {
              "is-working": i(c.wallpaper.id) === "setting"
            }]),
            disabled: !!i(c.wallpaper.id),
            "aria-busy": i(c.wallpaper.id) === "setting",
            onClick: g[4] || (g[4] = (p) => l("setWallpaper", c.wallpaper))
          }, [
            i(c.wallpaper.id) === "setting" ? (y(), j(o(Xe), {
              key: 0,
              size: 16,
              spin: ""
            })) : F("v-if", !0),
            V(
              " " + f(i(c.wallpaper.id) === "setting" ? o(a)("wallpaperSwitcher.setting") : o(a)("wallpaperSwitcher.setWallpaper")),
              1
              /* TEXT */
            )
          ], 10, Kr)
        ])
      ])
    ])) : F("v-if", !0);
  }
}), Ur = { class: "wallpaper-window wallpaper-window--redesigned" }, Zr = {
  key: 0,
  class: "unsupported"
}, qr = /* @__PURE__ */ N({
  __name: "index",
  setup(e) {
    const t = Pn(), { t: n } = te(), l = P(_s()), a = P(null), i = P(null), r = P(!1), c = P(!1), g = P(!1), p = P(!1), v = P(!1), w = P(0);
    let W = !1, T = null, E = null;
    const u = async (b = !1) => {
      if (!W) {
        W = !0;
        try {
          const x = await pn();
          (x.currentPath !== a.value?.currentPath || x.lastSwitchedAt !== a.value?.lastSwitchedAt) && (w.value += 1), a.value = x;
        } catch (x) {
          b || I.msg(String(x), "error");
        } finally {
          W = !1;
        }
      }
    }, m = Ts({
      config: l,
      refreshStatus: async () => {
        await u();
      }
    }), {
      activeView: k,
      wallhavenPage: G,
      wallhavenLastPage: L,
      wallhavenLoading: Q,
      wallhavenError: U,
      wallhavenKeyword: Y,
      wallhavenCategory: O,
      wallhavenSource: Te,
      previewWallpaper: je,
      previewLoading: at,
      previewLoadFailed: ot,
      workingActions: he,
      downloadProgress: ne,
      loadedThumbIds: st,
      wallhavenSourceLabel: it,
      visibleWallpapers: rt,
      openWallhavenGrid: xe,
      backToSwitcher: X,
      openPreview: ct,
      closePreview: ut,
      markPreviewLoaded: dt,
      markPreviewFailed: ht,
      markThumbLoaded: pt,
      setThumbRef: Ne,
      refreshWallhaven: wt,
      setWallhavenSource: gt,
      setWallhavenCategory: ft,
      setWallpaperFromWallhaven: Me,
      downloadWallpaperFromWallhaven: Fe,
      prevWallhavenPage: vt,
      nextWallhavenPage: mt,
      setupListeners: Rt
    } = m, S = _(() => {
      const b = a.value?.currentPath || l.value.lastAppliedPath, x = Cs(b);
      if (!x) return "";
      const bt = x.includes("?") ? "&" : "?";
      return `${x}${bt}wallpaperRevision=${w.value}`;
    }), $ = _(() => {
      const b = a.value?.currentPath || l.value.lastAppliedPath;
      return b ? b.split(/[\\/]/).pop() || b : n("wallpaperSwitcher.noCurrentWallpaper");
    }), M = _(() => {
      const b = a.value?.screenWidth || 2560, x = a.value?.screenHeight || 1440;
      return `${b} × ${x}`;
    }), D = _(
      () => a.value?.currentResolution || M.value
    ), le = (b) => b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1)} MB` : `${(b / 1024 / 1024 / 1024).toFixed(1)} GB`, Ee = _(() => a.value?.currentSource === "System" ? n("wallpaperSwitcher.systemSettings") : l.value.mode === "fixed" ? n("wallpaperSwitcher.fixedImage") : l.value.mode === "wallhaven" ? "Wallhaven" : n("wallpaperSwitcher.localFolder")), sl = _(() => {
      if (l.value.mode === "fixed" || !l.value.scheduleEnabled || !a.value?.schedulerRunning)
        return "—";
      const b = a.value?.nextSwitchAt;
      if (!b) return "—";
      const x = Math.max(0, b - Math.floor(Date.now() / 1e3));
      return x < 60 ? n("wallpaperSwitcher.time.secondsLater", { count: x }) : n("wallpaperSwitcher.time.minutesLater", {
        count: Math.ceil(x / 60)
      });
    }), il = _(() => {
      const b = a.value?.cacheSizeBytes ?? 0;
      return le(b);
    }), Dt = _(() => i.value ? n("wallpaperSwitcher.folderStatus.detected", {
      count: i.value.count
    }) : l.value.folderPath ? n("wallpaperSwitcher.folderStatus.notScanned") : n("wallpaperSwitcher.folderStatus.selectFirst")), yt = async () => {
      r.value = !0;
      try {
        const [b, x] = await Promise.all([
          Ss(),
          pn()
        ]);
        if (l.value = b, a.value = x, b.folderPath)
          try {
            i.value = await wn(b.folderPath);
          } catch {
            i.value = null;
          }
      } catch (b) {
        I.msg(String(b), "error");
      } finally {
        r.value = !1;
      }
    }, rl = async () => {
      c.value = !0;
      try {
        await Ot(l.value), await u(), I.msg(n("wallpaperSwitcher.messages.settingsSaved"), "success");
      } catch (b) {
        I.msg(String(b), "error");
      } finally {
        c.value = !1;
      }
    }, cl = async () => {
      const b = await Ut({
        multiple: !1,
        directory: !1,
        filters: [
          { name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }
        ]
      });
      if (typeof b == "string") {
        l.value.fixedImagePath = b, l.value.mode = "fixed";
        try {
          await gn(b), await yt(), I.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
        } catch (x) {
          I.msg(String(x), "error");
        }
      }
    }, Ht = async () => {
      if (!l.value.folderPath) {
        I.msg(n("wallpaperSwitcher.messages.selectFolderFirst"), "warning");
        return;
      }
      try {
        i.value = await wn(l.value.folderPath), i.value.count === 0 ? I.msg(n("wallpaperSwitcher.messages.noImagesInFolder"), "warning") : I.msg(Dt.value, "success");
      } catch (b) {
        I.msg(String(b), "error");
      }
    }, ul = async () => {
      const b = await Ut({ multiple: !1, directory: !0 });
      typeof b == "string" && (l.value.folderPath = b, l.value.mode = "folder", await Ht());
    }, dl = async () => {
      g.value = !0;
      try {
        await Ot(l.value), await Ls(), await u(), I.msg(n("wallpaperSwitcher.messages.wallpaperSwitched"), "success");
      } catch (b) {
        I.msg(String(b), "error");
      } finally {
        g.value = !1;
      }
    }, hl = async () => {
      if (!a.value?.currentPath) {
        I.msg(n("wallpaperSwitcher.messages.noCurrentToFix"), "warning");
        return;
      }
      l.value.mode = "fixed", l.value.fixedImagePath = a.value.currentPath, l.value.scheduleEnabled = !1;
      try {
        await gn(a.value.currentPath), await yt(), I.msg(n("wallpaperSwitcher.messages.fixedSet"), "success");
      } catch (b) {
        I.msg(String(b), "error");
      }
    }, pl = async () => {
      p.value = !0;
      try {
        await zs(), await u(), I.msg(n("wallpaperSwitcher.messages.cacheCleared"), "success");
      } catch (b) {
        I.msg(String(b), "error");
      } finally {
        p.value = !1;
      }
    }, wl = async () => {
      v.value = !0;
      try {
        await Is();
      } catch (b) {
        I.msg(String(b), "error");
      } finally {
        v.value = !1;
      }
    }, gl = (b) => {
      l.value = b;
    }, fl = async () => {
      await t.close();
    };
    return Oe(async () => {
      await yt(), await Rt(), E = await t.onFocusChanged(({ payload: b }) => {
        b && u(!0);
      }), T = window.setInterval(() => {
        document.visibilityState === "visible" && u(!0);
      }, 2500);
    }), kn(() => {
      T !== null && window.clearInterval(T), E?.();
    }), (b, x) => (y(), C("main", Ur, [
      d(rr, {
        "active-view": o(k),
        "wallhaven-source": o(Te),
        "wallhaven-loading": o(Q),
        "schedule-enabled": o(l).scheduleEnabled,
        "scheduler-running": !!o(a)?.schedulerRunning,
        onBack: o(X),
        onClose: fl,
        onOpenWallhaven: o(xe),
        onSetWallhavenSource: o(gt)
      }, null, 8, ["active-view", "wallhaven-source", "wallhaven-loading", "schedule-enabled", "scheduler-running", "onBack", "onOpenWallhaven", "onSetWallhavenSource"]),
      o(a) && !o(a).supported ? (y(), C(
        "section",
        Zr,
        f(o(n)("wallpaperSwitcher.unsupported")),
        1
        /* TEXT */
      )) : F("v-if", !0),
      o(k) === "switcher" ? (y(), j(qi, {
        key: 1,
        config: o(l),
        loading: o(r),
        "preview-src": o(S),
        "current-wallpaper-name": o($),
        "source-label": o(Ee),
        "resolution-label": o(D),
        "next-switch-label": o(sl),
        "folder-count-label": o(Dt),
        "cache-size-label": o(il),
        switching: o(g),
        "clearing-cache": o(p),
        "opening-cache": o(v),
        saving: o(c),
        onUpdateConfig: gl,
        onChooseImage: cl,
        onChooseFolder: ul,
        onScanFolder: Ht,
        onOpenWallhavenGrid: o(xe),
        onSwitchNow: dl,
        onSetCurrentAsFixed: hl,
        onClearCache: pl,
        onOpenCacheDir: wl,
        onPersistConfig: rl
      }, null, 8, ["config", "loading", "preview-src", "current-wallpaper-name", "source-label", "resolution-label", "next-switch-label", "folder-count-label", "cache-size-label", "switching", "clearing-cache", "opening-cache", "saving", "onOpenWallhavenGrid"])) : (y(), j(Er, {
        key: 2,
        keyword: o(Y),
        "onUpdate:keyword": x[0] || (x[0] = (bt) => yn(Y) ? Y.value = bt : null),
        category: o(O),
        loading: o(Q),
        error: o(U),
        wallpapers: o(rt),
        "loaded-thumb-ids": o(st),
        "working-actions": o(he),
        "download-progress": o(ne),
        page: o(G),
        "last-page": o(L),
        "source-label": o(it),
        "screen-label": o(M),
        "set-thumb-ref": o(Ne),
        onRefresh: o(wt),
        onSetCategory: o(ft),
        onOpenPreview: o(ct),
        onMarkThumbLoaded: o(pt),
        onSetWallpaper: o(Me),
        onDownloadWallpaper: o(Fe),
        onPrevPage: o(vt),
        onNextPage: o(mt)
      }, null, 8, ["keyword", "category", "loading", "error", "wallpapers", "loaded-thumb-ids", "working-actions", "download-progress", "page", "last-page", "source-label", "screen-label", "set-thumb-ref", "onRefresh", "onSetCategory", "onOpenPreview", "onMarkThumbLoaded", "onSetWallpaper", "onDownloadWallpaper", "onPrevPage", "onNextPage"])),
      d(Gr, {
        wallpaper: o(je),
        loading: o(at),
        "load-failed": o(ot),
        "working-actions": o(he),
        "download-progress": o(ne),
        onClose: o(ut),
        onLoaded: o(dt),
        onFailed: o(ht),
        onDownload: o(Fe),
        onSetWallpaper: o(Me)
      }, null, 8, ["wallpaper", "loading", "load-failed", "working-actions", "download-progress", "onClose", "onLoaded", "onFailed", "onDownload", "onSetWallpaper"])
    ]));
  }
}), Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xr as activate
};
