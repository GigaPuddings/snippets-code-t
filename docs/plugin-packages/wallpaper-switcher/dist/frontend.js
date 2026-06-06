import { getCurrentInstance as ce, inject as ee, ref as k, computed as m, unref as s, readonly as fo, getCurrentScope as po, onScopeDispose as vo, onMounted as Ve, nextTick as ln, watch as Ue, isRef as ot, warn as go, provide as yo, defineComponent as $, createElementBlock as x, openBlock as _, mergeProps as wo, renderSlot as de, createElementVNode as a, normalizeClass as L, createVNode as d, Transition as rt, withCtx as te, withDirectives as G, normalizeStyle as Me, createTextVNode as T, toDisplayString as j, vShow as Ne, shallowReactive as mo, createBlock as q, createCommentVNode as H, resolveDynamicComponent as an, Fragment as ut, withModifiers as $e, isVNode as Ce, render as Ee, onUnmounted as bo, vModelText as We, vModelCheckbox as jt, withKeys as _o, vModelSelect as ko, renderList as Co } from "vue";
const cr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => rr)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function Lo(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function So(e, t, n, o, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var je;
const V = "__TAURI_TO_IPC_KEY__";
function xo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Oo(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class zo {
  get rid() {
    return Lo(this, je, "f");
  }
  constructor(t) {
    je.set(this, void 0), So(this, je, t);
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
je = /* @__PURE__ */ new WeakMap();
var F;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(F || (F = {}));
async function rn(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function De(e, t, n) {
  var o;
  const l = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: l,
    handler: xo(t)
  }).then((c) => async () => rn(e, c));
}
async function Wo(e, t, n) {
  return De(e, (o) => {
    rn(e, o.id), t(o);
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
class un {
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
  [V]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[V]();
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
    return new un(this.width / t, this.height / t);
  }
  [V]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[V]();
  }
}
class ue {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof un ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof _e ? this.size : this.size.toPhysical(t);
  }
  [V]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[V]();
  }
}
class cn {
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
  [V]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[V]();
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
    return new cn(this.x / t, this.y / t);
  }
  [V]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[V]();
  }
}
class Ie {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof cn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Q ? this.position : this.position.toPhysical(t);
  }
  [V]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[V]();
  }
}
class ke extends zo {
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
      rgba: Fe(t),
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
      bytes: Fe(t)
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
function Fe(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ke ? e.rid : e;
}
var st;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(st || (st = {}));
class Po {
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
var Pt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Pt || (Pt = {}));
function dn() {
  return new hn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Qe() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new hn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ye = ["tauri://created", "tauri://error"];
class hn {
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
    return (n = (await Qe()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return dn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Qe();
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
    for (const t of await Qe())
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
    } : De(t, n, {
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
    } : Wo(t, n, {
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
    if (Ye.includes(t)) {
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
    if (Ye.includes(n)) {
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
    return Ye.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return t && (t === st.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), r("plugin:window|request_user_attention", {
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
      value: Fe(t)
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
      value: t ? Fe(t) : void 0
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
    return this.listen(F.WINDOW_RESIZED, (n) => {
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
    return this.listen(F.WINDOW_MOVED, (n) => {
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
    return this.listen(F.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Po(n);
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
    const n = await this.listen(F.DRAG_ENTER, (u) => {
      t({
        ...u,
        payload: {
          type: "enter",
          paths: u.payload.paths,
          position: new Q(u.payload.position)
        }
      });
    }), o = await this.listen(F.DRAG_OVER, (u) => {
      t({
        ...u,
        payload: {
          type: "over",
          position: new Q(u.payload.position)
        }
      });
    }), l = await this.listen(F.DRAG_DROP, (u) => {
      t({
        ...u,
        payload: {
          type: "drop",
          paths: u.payload.paths,
          position: new Q(u.payload.position)
        }
      });
    }), c = await this.listen(F.DRAG_LEAVE, (u) => {
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
    const n = await this.listen(F.WINDOW_FOCUS, (l) => {
      t({ ...l, payload: !0 });
    }), o = await this.listen(F.WINDOW_BLUR, (l) => {
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
    return this.listen(F.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(F.WINDOW_THEME_CHANGED, t);
  }
}
var Tt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Tt || (Tt = {}));
var Mt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Mt || (Mt = {}));
var Nt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Nt || (Nt = {}));
async function $t(e = {}) {
  return typeof e == "object" && Object.freeze(e), await r("plugin:dialog|open", { options: e });
}
const fn = Symbol(), Pe = "el", To = "is-", X = (e, t, n, o, l) => {
  let c = `${e}-${t}`;
  return n && (c += `-${n}`), o && (c += `__${o}`), l && (c += `--${l}`), c;
}, pn = Symbol("namespaceContextKey"), Mo = (e) => {
  const t = e || (ce() ? ee(pn, k(Pe)) : k(Pe));
  return m(() => s(t) || Pe);
}, ct = (e, t) => {
  const n = Mo(t);
  return {
    namespace: n,
    b: (v = "") => X(n.value, e, v, "", ""),
    e: (v) => v ? X(n.value, e, "", v, "") : "",
    m: (v) => v ? X(n.value, e, "", "", v) : "",
    be: (v, b) => v && b ? X(n.value, e, v, b, "") : "",
    em: (v, b) => v && b ? X(n.value, e, "", v, b) : "",
    bm: (v, b) => v && b ? X(n.value, e, v, "", b) : "",
    bem: (v, b, O) => v && b && O ? X(n.value, e, v, b, O) : "",
    is: (v, ...b) => {
      const O = b.length >= 1 ? b[0] : !0;
      return v && O ? `${To}${v}` : "";
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
const No = Object.prototype.hasOwnProperty, Et = (e, t) => No.call(e, t), Le = (e) => typeof e == "function", ne = (e) => typeof e == "string", vn = (e) => e !== null && typeof e == "object";
var $o = typeof global == "object" && global && global.Object === Object && global, Eo = typeof self == "object" && self && self.Object === Object && self, dt = $o || Eo || Function("return this")(), he = dt.Symbol, gn = Object.prototype, Do = gn.hasOwnProperty, Fo = gn.toString, be = he ? he.toStringTag : void 0;
function Ao(e) {
  var t = Do.call(e, be), n = e[be];
  try {
    e[be] = void 0;
    var o = !0;
  } catch {
  }
  var l = Fo.call(e);
  return o && (t ? e[be] = n : delete e[be]), l;
}
var Bo = Object.prototype, Ro = Bo.toString;
function Ho(e) {
  return Ro.call(e);
}
var Vo = "[object Null]", Uo = "[object Undefined]", Dt = he ? he.toStringTag : void 0;
function yn(e) {
  return e == null ? e === void 0 ? Uo : Vo : Dt && Dt in Object(e) ? Ao(e) : Ho(e);
}
function Go(e) {
  return e != null && typeof e == "object";
}
var Zo = "[object Symbol]";
function ht(e) {
  return typeof e == "symbol" || Go(e) && yn(e) == Zo;
}
function Ko(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = Array(o); ++n < o; )
    l[n] = t(e[n], n, e);
  return l;
}
var ft = Array.isArray, Ft = he ? he.prototype : void 0, At = Ft ? Ft.toString : void 0;
function wn(e) {
  if (typeof e == "string")
    return e;
  if (ft(e))
    return Ko(e, wn) + "";
  if (ht(e))
    return At ? At.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qo = "[object AsyncFunction]", Jo = "[object Function]", Qo = "[object GeneratorFunction]", Yo = "[object Proxy]";
function Xo(e) {
  if (!mn(e))
    return !1;
  var t = yn(e);
  return t == Jo || t == Qo || t == qo || t == Yo;
}
var Xe = dt["__core-js_shared__"], Bt = function() {
  var e = /[^.]+$/.exec(Xe && Xe.keys && Xe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function es(e) {
  return !!Bt && Bt in e;
}
var ts = Function.prototype, ns = ts.toString;
function os(e) {
  if (e != null) {
    try {
      return ns.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ss = /[\\^$.*+?()[\]{}|]/g, is = /^\[object .+?Constructor\]$/, ls = Function.prototype, as = Object.prototype, rs = ls.toString, us = as.hasOwnProperty, cs = RegExp(
  "^" + rs.call(us).replace(ss, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ds(e) {
  if (!mn(e) || es(e))
    return !1;
  var t = Xo(e) ? cs : is;
  return t.test(os(e));
}
function hs(e, t) {
  return e?.[t];
}
function bn(e, t) {
  var n = hs(e, t);
  return ds(n) ? n : void 0;
}
function fs(e, t) {
  return e === t || e !== e && t !== t;
}
var ps = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vs = /^\w*$/;
function gs(e, t) {
  if (ft(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ht(e) ? !0 : vs.test(e) || !ps.test(e) || t != null && e in Object(t);
}
var Se = bn(Object, "create");
function ys() {
  this.__data__ = Se ? Se(null) : {}, this.size = 0;
}
function ws(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ms = "__lodash_hash_undefined__", bs = Object.prototype, _s = bs.hasOwnProperty;
function ks(e) {
  var t = this.__data__;
  if (Se) {
    var n = t[e];
    return n === ms ? void 0 : n;
  }
  return _s.call(t, e) ? t[e] : void 0;
}
var Cs = Object.prototype, Ls = Cs.hasOwnProperty;
function Ss(e) {
  var t = this.__data__;
  return Se ? t[e] !== void 0 : Ls.call(t, e);
}
var xs = "__lodash_hash_undefined__";
function Os(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Se && t === void 0 ? xs : t, this;
}
function oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oe.prototype.clear = ys;
oe.prototype.delete = ws;
oe.prototype.get = ks;
oe.prototype.has = Ss;
oe.prototype.set = Os;
function zs() {
  this.__data__ = [], this.size = 0;
}
function Ge(e, t) {
  for (var n = e.length; n--; )
    if (fs(e[n][0], t))
      return n;
  return -1;
}
var Ws = Array.prototype, Is = Ws.splice;
function js(e) {
  var t = this.__data__, n = Ge(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Is.call(t, n, 1), --this.size, !0;
}
function Ps(e) {
  var t = this.__data__, n = Ge(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ts(e) {
  return Ge(this.__data__, e) > -1;
}
function Ms(e, t) {
  var n = this.__data__, o = Ge(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function ve(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ve.prototype.clear = zs;
ve.prototype.delete = js;
ve.prototype.get = Ps;
ve.prototype.has = Ts;
ve.prototype.set = Ms;
var Ns = bn(dt, "Map");
function $s() {
  this.size = 0, this.__data__ = {
    hash: new oe(),
    map: new (Ns || ve)(),
    string: new oe()
  };
}
function Es(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ze(e, t) {
  var n = e.__data__;
  return Es(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ds(e) {
  var t = Ze(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Fs(e) {
  return Ze(this, e).get(e);
}
function As(e) {
  return Ze(this, e).has(e);
}
function Bs(e, t) {
  var n = Ze(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ie(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ie.prototype.clear = $s;
ie.prototype.delete = Ds;
ie.prototype.get = Fs;
ie.prototype.has = As;
ie.prototype.set = Bs;
var Rs = "Expected a function";
function pt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Rs);
  var n = function() {
    var o = arguments, l = t ? t.apply(this, o) : o[0], c = n.cache;
    if (c.has(l))
      return c.get(l);
    var u = e.apply(this, o);
    return n.cache = c.set(l, u) || c, u;
  };
  return n.cache = new (pt.Cache || ie)(), n;
}
pt.Cache = ie;
var Hs = 500;
function Vs(e) {
  var t = pt(e, function(o) {
    return n.size === Hs && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Us = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Gs = /\\(\\)?/g, Zs = Vs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Us, function(n, o, l, c) {
    t.push(l ? c.replace(Gs, "$1") : o || n);
  }), t;
});
function Ks(e) {
  return e == null ? "" : wn(e);
}
function qs(e, t) {
  return ft(e) ? e : gs(e, t) ? [e] : Zs(Ks(e));
}
function Js(e) {
  if (typeof e == "string" || ht(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Qs(e, t) {
  t = qs(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Js(t[n++])];
  return n && n == o ? e : void 0;
}
function Ys(e, t, n) {
  var o = e == null ? void 0 : Qs(e, t);
  return o === void 0 ? n : o;
}
function Xs(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
const _n = (e) => e === void 0, Rt = (e) => typeof e == "boolean", se = (e) => typeof e == "number", it = (e) => typeof Element > "u" ? !1 : e instanceof Element, ei = (e) => ne(e) ? !Number.isNaN(Number(e)) : !1;
var Ht;
const le = typeof window < "u", ti = (e) => typeof e == "string", ni = () => {
};
le && ((Ht = window?.navigator) != null && Ht.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function vt(e) {
  return typeof e == "function" ? e() : s(e);
}
function oi(e) {
  return e;
}
function gt(e) {
  return po() ? (vo(e), !0) : !1;
}
function si(e, t = !0) {
  ce() ? Ve(e) : t ? e() : ln(e);
}
function kn(e, t, n = {}) {
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
  function y(...w) {
    u(), l.value = !0, c = setTimeout(() => {
      l.value = !1, c = null, e(...w);
    }, vt(t));
  }
  return o && (l.value = !0, le && y()), gt(f), {
    isPending: fo(l),
    start: y,
    stop: f
  };
}
function Cn(e) {
  var t;
  const n = vt(e);
  return (t = n?.$el) != null ? t : n;
}
const Ln = le ? window : void 0;
function Sn(...e) {
  let t, n, o, l;
  if (ti(e[0]) || Array.isArray(e[0]) ? ([n, o, l] = e, t = Ln) : [t, n, o, l] = e, !t)
    return ni;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const c = [], u = () => {
    c.forEach((g) => g()), c.length = 0;
  }, f = (g, S, I, P) => (g.addEventListener(S, I, P), () => g.removeEventListener(S, I, P)), y = Ue(() => [Cn(t), vt(l)], ([g, S]) => {
    u(), g && c.push(...n.flatMap((I) => o.map((P) => f(g, I, P, S))));
  }, { immediate: !0, flush: "post" }), w = () => {
    y(), u();
  };
  return gt(w), w;
}
function ii(e, t = !1) {
  const n = k(), o = () => n.value = !!e();
  return o(), si(o, t), n;
}
const Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ut = "__vueuse_ssr_handlers__";
Vt[Ut] = Vt[Ut] || {};
var Gt = Object.getOwnPropertySymbols, li = Object.prototype.hasOwnProperty, ai = Object.prototype.propertyIsEnumerable, ri = (e, t) => {
  var n = {};
  for (var o in e)
    li.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Gt)
    for (var o of Gt(e))
      t.indexOf(o) < 0 && ai.call(e, o) && (n[o] = e[o]);
  return n;
};
function ui(e, t, n = {}) {
  const o = n, { window: l = Ln } = o, c = ri(o, ["window"]);
  let u;
  const f = ii(() => l && "ResizeObserver" in l), y = () => {
    u && (u.disconnect(), u = void 0);
  }, w = Ue(() => Cn(e), (S) => {
    y(), f.value && l && S && (u = new ResizeObserver(t), u.observe(S, c));
  }, { immediate: !0, flush: "post" }), g = () => {
    y(), w();
  };
  return gt(g), {
    isSupported: f,
    stop: g
  };
}
var Zt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Zt || (Zt = {}));
var ci = Object.defineProperty, Kt = Object.getOwnPropertySymbols, di = Object.prototype.hasOwnProperty, hi = Object.prototype.propertyIsEnumerable, qt = (e, t, n) => t in e ? ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, fi = (e, t) => {
  for (var n in t || (t = {}))
    di.call(t, n) && qt(e, n, t[n]);
  if (Kt)
    for (var n of Kt(t))
      hi.call(t, n) && qt(e, n, t[n]);
  return e;
};
const pi = {
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
fi({
  linear: oi
}, pi);
const Jt = {
  current: 0
}, Qt = k(0), xn = 2e3, Yt = Symbol("elZIndexContextKey"), On = Symbol("zIndexContextKey"), vi = (e) => {
  const t = ce() ? ee(Yt, Jt) : Jt, n = e || (ce() ? ee(On, void 0) : void 0), o = m(() => {
    const u = s(n);
    return se(u) ? u : xn;
  }), l = m(() => o.value + Qt.value), c = () => (t.current++, Qt.value = t.current, l.value);
  return !le && ee(Yt), {
    initialZIndex: o,
    currentZIndex: l,
    nextZIndex: c
  };
};
var gi = {
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
const yi = (e) => (t, n) => wi(t, n, s(e)), wi = (e, t, n) => Ys(n, e, e).replace(/\{(\w+)\}/g, (o, l) => {
  var c;
  return `${(c = t?.[l]) != null ? c : `{${l}}`}`;
}), mi = (e) => {
  const t = m(() => s(e).name), n = ot(e) ? e : k(e);
  return {
    lang: t,
    locale: n,
    t: yi(e)
  };
}, zn = Symbol("localeContextKey"), bi = (e) => {
  const t = e || ee(zn, k());
  return mi(m(() => t.value || gi));
}, Wn = "__epPropKey", A = (e) => e, _i = (e) => vn(e) && !!e[Wn], In = (e, t) => {
  if (!vn(e) || _i(e))
    return e;
  const { values: n, required: o, default: l, type: c, validator: u } = e, y = {
    type: c,
    required: !!o,
    validator: n || u ? (w) => {
      let g = !1, S = [];
      if (n && (S = Array.from(n), Et(e, "default") && S.push(l), g || (g = S.includes(w))), u && (g || (g = u(w))), !g && S.length > 0) {
        const I = [...new Set(S)].map((P) => JSON.stringify(P)).join(", ");
        go(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(w)}.`);
      }
      return g;
    } : void 0,
    [Wn]: !0
  };
  return Et(e, "default") && (y.default = l), y;
}, ge = (e) => Xs(Object.entries(e).map(([t, n]) => [
  t,
  In(n, t)
])), ki = ["", "default", "small", "large"], Ci = In({
  type: String,
  values: ki,
  required: !1
}), Li = Symbol("size"), Si = Symbol("emptyValuesContextKey"), xi = ge({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Le(e) ? !e() : !e
  }
}), Xt = (e) => Object.keys(e), Ae = k();
function jn(e, t = void 0) {
  return ce() ? ee(fn, Ae) : Ae;
}
function Pn(e, t) {
  const n = jn(), o = ct(e, m(() => {
    var f;
    return ((f = n.value) == null ? void 0 : f.namespace) || Pe;
  })), l = bi(m(() => {
    var f;
    return (f = n.value) == null ? void 0 : f.locale;
  })), c = vi(m(() => {
    var f;
    return ((f = n.value) == null ? void 0 : f.zIndex) || xn;
  })), u = m(() => {
    var f;
    return s(t) || ((f = n.value) == null ? void 0 : f.size) || "";
  });
  return Tn(m(() => s(n) || {})), {
    ns: o,
    locale: l,
    zIndex: c,
    size: u
  };
}
const Tn = (e, t, n = !1) => {
  var o;
  const l = !!ce(), c = l ? jn() : void 0, u = (o = void 0) != null ? o : l ? yo : void 0;
  if (!u)
    return;
  const f = m(() => {
    const y = s(e);
    return c?.value ? Oi(c.value, y) : y;
  });
  return u(fn, f), u(zn, m(() => f.value.locale)), u(pn, m(() => f.value.namespace)), u(On, m(() => f.value.zIndex)), u(Li, {
    size: m(() => f.value.size || "")
  }), u(Si, m(() => ({
    emptyValues: f.value.emptyValues,
    valueOnClear: f.value.valueOnClear
  }))), (n || !Ae.value) && (Ae.value = f.value), f;
}, Oi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Xt(e), ...Xt(t)])], o = {};
  for (const l of n)
    o[l] = t[l] !== void 0 ? t[l] : e[l];
  return o;
};
var Ke = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function lt(e, t = "px") {
  if (!e)
    return "";
  if (se(e) || ei(e))
    return `${e}${t}`;
  if (ne(e))
    return e;
}
const Mn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Nn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), zi = ge({
  size: {
    type: A([Number, String])
  },
  color: {
    type: String
  }
}), Wi = $({
  name: "ElIcon",
  inheritAttrs: !1
}), Ii = /* @__PURE__ */ $({
  ...Wi,
  props: zi,
  setup(e) {
    const t = e, n = ct("icon"), o = m(() => {
      const { size: l, color: c } = t;
      return !l && !c ? {} : {
        fontSize: _n(l) ? void 0 : lt(l),
        "--color": c
      };
    });
    return (l, c) => (_(), x("i", wo({
      class: s(n).b(),
      style: s(o)
    }, l.$attrs), [
      de(l.$slots, "default")
    ], 16));
  }
});
var ji = /* @__PURE__ */ Ke(Ii, [["__file", "icon.vue"]]);
const Be = Mn(ji);
/*! Element Plus Icons Vue v2.3.1 */
var Pi = /* @__PURE__ */ $({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ti = Pi, Mi = /* @__PURE__ */ $({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), $n = Mi, Ni = /* @__PURE__ */ $({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), $i = Ni, Ei = /* @__PURE__ */ $({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Di = Ei, Fi = /* @__PURE__ */ $({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ai = Fi;
const En = A([
  String,
  Object,
  Function
]), Bi = {
  Close: $n
}, Ri = {
  Close: $n
}, Re = {
  success: Di,
  warning: Ai,
  error: Ti,
  info: $i
}, Hi = (e) => e, Te = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Vi = ge({
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
    type: A([String, Object, Array])
  },
  offset: {
    type: A(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ui = $({
  name: "ElBadge"
}), Gi = /* @__PURE__ */ $({
  ...Ui,
  props: Vi,
  setup(e, { expose: t }) {
    const n = e, o = ct("badge"), l = m(() => n.isDot ? "" : se(n.value) && se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), c = m(() => {
      var u, f, y, w, g;
      return [
        {
          backgroundColor: n.color,
          marginRight: lt(-((f = (u = n.offset) == null ? void 0 : u[0]) != null ? f : 0)),
          marginTop: lt((w = (y = n.offset) == null ? void 0 : y[1]) != null ? w : 0)
        },
        (g = n.badgeStyle) != null ? g : {}
      ];
    });
    return t({
      content: l
    }), (u, f) => (_(), x("div", {
      class: L(s(o).b())
    }, [
      de(u.$slots, "default"),
      d(rt, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: te(() => [
          G(a("sup", {
            class: L([
              s(o).e("content"),
              s(o).em("content", u.type),
              s(o).is("fixed", !!u.$slots.default),
              s(o).is("dot", u.isDot),
              s(o).is("hide-zero", !u.showZero && n.value === 0),
              u.badgeClass
            ]),
            style: Me(s(c))
          }, [
            de(u.$slots, "content", { value: s(l) }, () => [
              T(j(s(l)), 1)
            ])
          ], 6), [
            [Ne, !u.hidden && (s(l) || u.isDot || u.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Zi = /* @__PURE__ */ Ke(Gi, [["__file", "badge.vue"]]);
const Ki = Mn(Zi), qi = ge({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: A(Object)
  },
  size: Ci,
  button: {
    type: A(Object)
  },
  experimentalFeatures: {
    type: A(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: A(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...xi
}), U = {};
$({
  name: "ElConfigProvider",
  props: qi,
  setup(e, { slots: t }) {
    Ue(() => e.message, (o) => {
      Object.assign(U, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Tn(e);
    return () => de(t, "default", { config: n?.value });
  }
});
const Dn = ["success", "info", "warning", "error"], M = Hi({
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
}), Ji = ge({
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
    type: En,
    default: M.icon
  },
  id: {
    type: String,
    default: M.id
  },
  message: {
    type: A([
      String,
      Object,
      Function
    ]),
    default: M.message
  },
  onClose: {
    type: A(Function),
    default: M.onClose
  },
  showClose: {
    type: Boolean,
    default: M.showClose
  },
  type: {
    type: String,
    values: Dn,
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
}), Qi = {
  destroy: () => !0
}, Z = mo([]), Yi = (e) => {
  const t = Z.findIndex((l) => l.id === e), n = Z[t];
  let o;
  return t > 0 && (o = Z[t - 1]), { current: n, prev: o };
}, Xi = (e) => {
  const { prev: t } = Yi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, el = (e, t) => Z.findIndex((o) => o.id === e) > 0 ? 16 : t, tl = $({
  name: "ElMessage"
}), nl = /* @__PURE__ */ $({
  ...tl,
  props: Ji,
  emits: Qi,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Ri, { ns: l, zIndex: c } = Pn("message"), { currentZIndex: u, nextZIndex: f } = c, y = k(), w = k(!1), g = k(0);
    let S;
    const I = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = m(() => {
      const z = n.type;
      return { [l.bm("icon", z)]: z && Re[z] };
    }), R = m(() => n.icon || Re[n.type] || ""), v = m(() => Xi(n.id)), b = m(() => el(n.id, n.offset) + v.value), O = m(() => g.value + b.value), E = m(() => ({
      top: `${b.value}px`,
      zIndex: u.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: S } = kn(() => {
        D();
      }, n.duration));
    }
    function K() {
      S?.();
    }
    function D() {
      w.value = !1;
    }
    function ae({ code: z }) {
      z === Te.esc && D();
    }
    return Ve(() => {
      C(), f(), w.value = !0;
    }), Ue(() => n.repeatNum, () => {
      K(), C();
    }), Sn(document, "keydown", ae), ui(y, () => {
      g.value = y.value.getBoundingClientRect().height;
    }), t({
      visible: w,
      bottom: O,
      close: D
    }), (z, ye) => (_(), q(rt, {
      name: s(l).b("fade"),
      onBeforeLeave: z.onClose,
      onAfterLeave: (we) => z.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        G(a("div", {
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
          style: Me(s(E)),
          role: "alert",
          onMouseenter: K,
          onMouseleave: C
        }, [
          z.repeatNum > 1 ? (_(), q(s(Ki), {
            key: 0,
            value: z.repeatNum,
            type: s(I),
            class: L(s(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          s(R) ? (_(), q(s(Be), {
            key: 1,
            class: L([s(l).e("icon"), s(P)])
          }, {
            default: te(() => [
              (_(), q(an(s(R))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          de(z.$slots, "default", {}, () => [
            z.dangerouslyUseHTMLString ? (_(), x(ut, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: L(s(l).e("content")),
                innerHTML: z.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), x("p", {
              key: 0,
              class: L(s(l).e("content"))
            }, j(z.message), 3))
          ]),
          z.showClose ? (_(), q(s(Be), {
            key: 2,
            class: L(s(l).e("closeBtn")),
            onClick: $e(D, ["stop"])
          }, {
            default: te(() => [
              d(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [Ne, w.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ol = /* @__PURE__ */ Ke(nl, [["__file", "message.vue"]]);
let sl = 1;
const Fn = (e) => {
  const t = !e || ne(e) || Ce(e) || Le(e) ? { message: e } : e, n = {
    ...M,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ne(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    it(o) || (o = document.body), n.appendTo = o;
  }
  return Rt(U.grouping) && !n.grouping && (n.grouping = U.grouping), se(U.duration) && n.duration === 3e3 && (n.duration = U.duration), se(U.offset) && n.offset === 16 && (n.offset = U.offset), Rt(U.showClose) && !n.showClose && (n.showClose = U.showClose), n;
}, il = (e) => {
  const t = Z.indexOf(e);
  if (t === -1)
    return;
  Z.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ll = ({ appendTo: e, ...t }, n) => {
  const o = `message_${sl++}`, l = t.onClose, c = document.createElement("div"), u = {
    ...t,
    id: o,
    onClose: () => {
      l?.(), il(g);
    },
    onDestroy: () => {
      Ee(null, c);
    }
  }, f = d(ol, u, Le(u.message) || Ce(u.message) ? {
    default: Le(u.message) ? u.message : () => u.message
  } : null);
  f.appContext = n || fe._context, Ee(f, c), e.appendChild(c.firstElementChild);
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
  const n = Fn(e);
  if (n.grouping && Z.length) {
    const l = Z.find(({ vnode: c }) => {
      var u;
      return ((u = c.props) == null ? void 0 : u.message) === n.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = n.type, l.handler;
  }
  if (se(U.max) && Z.length >= U.max)
    return { close: () => {
    } };
  const o = ll(n, t);
  return Z.push(o), o.handler;
};
Dn.forEach((e) => {
  fe[e] = (t = {}, n) => {
    const o = Fn(t);
    return fe({ ...o, type: e }, n);
  };
});
function al(e) {
  for (const t of Z)
    (!e || e === t.props.type) && t.handler.close();
}
fe.closeAll = al;
fe._context = null;
const rl = Nn(fe, "$message"), An = [
  "success",
  "info",
  "warning",
  "error"
], ul = ge({
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
    type: En
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: A([
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
    type: A(Function),
    default: () => {
    }
  },
  onClose: {
    type: A(Function),
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
    values: [...An, ""],
    default: ""
  },
  zIndex: Number
}), cl = {
  destroy: () => !0
}, dl = $({
  name: "ElNotification"
}), hl = /* @__PURE__ */ $({
  ...dl,
  props: ul,
  emits: cl,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: l } = Pn("notification"), { nextZIndex: c, currentZIndex: u } = l, { Close: f } = Bi, y = k(!1);
    let w;
    const g = m(() => {
      const C = n.type;
      return C && Re[n.type] ? o.m(C) : "";
    }), S = m(() => n.type && Re[n.type] || n.icon), I = m(() => n.position.endsWith("right") ? "right" : "left"), P = m(() => n.position.startsWith("top") ? "top" : "bottom"), R = m(() => {
      var C;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : u.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: w } = kn(() => {
        y.value && O();
      }, n.duration));
    }
    function b() {
      w?.();
    }
    function O() {
      y.value = !1;
    }
    function E({ code: C }) {
      C === Te.delete || C === Te.backspace ? b() : C === Te.esc ? y.value && O() : v();
    }
    return Ve(() => {
      v(), c(), y.value = !0;
    }), Sn(document, "keydown", E), t({
      visible: y,
      close: O
    }), (C, K) => (_(), q(rt, {
      name: s(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (D) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: te(() => [
        G(a("div", {
          id: C.id,
          class: L([s(o).b(), C.customClass, s(I)]),
          style: Me(s(R)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: v,
          onClick: C.onClick
        }, [
          s(S) ? (_(), q(s(Be), {
            key: 0,
            class: L([s(o).e("icon"), s(g)])
          }, {
            default: te(() => [
              (_(), q(an(s(S))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          a("div", {
            class: L(s(o).e("group"))
          }, [
            a("h2", {
              class: L(s(o).e("title")),
              textContent: j(C.title)
            }, null, 10, ["textContent"]),
            G(a("div", {
              class: L(s(o).e("content")),
              style: Me(C.title ? void 0 : { margin: 0 })
            }, [
              de(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (_(), x(ut, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), x("p", { key: 0 }, j(C.message), 1))
              ])
            ], 6), [
              [Ne, C.message]
            ]),
            C.showClose ? (_(), q(s(Be), {
              key: 0,
              class: L(s(o).e("closeBtn")),
              onClick: $e(O, ["stop"])
            }, {
              default: te(() => [
                d(s(f))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ne, y.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var fl = /* @__PURE__ */ Ke(hl, [["__file", "notification.vue"]]);
const He = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, at = 16;
let pl = 1;
const pe = function(e = {}, t) {
  if (!le)
    return { close: () => {
    } };
  (ne(e) || Ce(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  He[n].forEach(({ vm: g }) => {
    var S;
    o += (((S = g.el) == null ? void 0 : S.offsetHeight) || 0) + at;
  }), o += at;
  const l = `notification_${pl++}`, c = e.onClose, u = {
    ...e,
    offset: o,
    id: l,
    onClose: () => {
      vl(l, n, c);
    }
  };
  let f = document.body;
  it(e.appendTo) ? f = e.appendTo : ne(e.appendTo) && (f = document.querySelector(e.appendTo)), it(f) || (f = document.body);
  const y = document.createElement("div"), w = d(fl, u, Le(u.message) ? u.message : Ce(u.message) ? () => u.message : null);
  return w.appContext = _n(t) ? pe._context : t, w.props.onDestroy = () => {
    Ee(null, y);
  }, Ee(w, y), He[n].push({ vm: w }), f.appendChild(y.firstElementChild), {
    close: () => {
      w.component.exposed.visible.value = !1;
    }
  };
};
An.forEach((e) => {
  pe[e] = (t = {}, n) => ((ne(t) || Ce(t)) && (t = {
    message: t
  }), pe({ ...t, type: e }, n));
});
function vl(e, t, n) {
  const o = He[t], l = o.findIndex(({ vm: w }) => {
    var g;
    return ((g = w.component) == null ? void 0 : g.props.id) === e;
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
    for (let w = l; w < y; w++) {
      const { el: g, component: S } = o[w].vm, I = Number.parseInt(g.style[f], 10) - u - at;
      S.props.offset = I;
    }
}
function gl() {
  for (const e of Object.values(He))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
pe.closeAll = gl;
pe._context = null;
const yl = Nn(pe, "$notify"), W = {
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
    o === "center" ? rl({
      message: t,
      type: n,
      duration: l,
      showClose: c,
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
}, wl = () => ({
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
}), ml = (e) => e ? /^https?:\/\//i.test(e) ? e : Oo(e) : "", bl = () => r("wallpaper_get_config"), et = (e) => r("wallpaper_save_config", { config: e }), en = () => r("wallpaper_get_status"), tn = (e) => r("wallpaper_scan_folder", { path: e }), _l = (e) => r("wallpaper_set_fixed_image", { path: e }), kl = () => r("wallpaper_switch_now"), Cl = (e) => r("wallpaper_fetch_wallhaven", { params: e }), Ll = (e) => r("wallpaper_set_wallhaven_image", { wallpaper: e }), Sl = (e) => r("wallpaper_download_wallhaven_image", { wallpaper: e }), xl = () => r("wallpaper_clear_cache"), Ol = () => r("wallpaper_open_cache_dir");
var zl = {
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
function Wl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Il(e, t, n) {
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
var jl = Symbol("icon-context");
function B(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(c) {
      var u = Wl(), f = ee(jl, zl);
      return function() {
        var y = c.size, w = c.strokeWidth, g = c.strokeLinecap, S = c.strokeLinejoin, I = c.theme, P = c.fill, R = c.spin, v = Il(u, {
          size: y,
          strokeWidth: w,
          strokeLinecap: g,
          strokeLinejoin: S,
          theme: I,
          fill: P
        }, f), b = [f.prefix + "-icon"];
        return b.push(f.prefix + "-icon-" + e), t && f.rtl && b.push(f.prefix + "-icon-rtl"), R && b.push(f.prefix + "-icon-spin"), d("span", {
          class: b.join(" ")
        }, [n(v)]);
      };
    }
  };
  return o;
}
const Pl = B("back", !0, function(e) {
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
}), tt = B("close-small", !1, function(e) {
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
}), Tl = B("computer", !1, function(e) {
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
}), Ml = B("delete", !1, function(e) {
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
}), Nl = B("download", !1, function(e) {
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
}), nn = B("folder-open", !0, function(e) {
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
}), $l = B("lightning", !0, function(e) {
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
}), nt = B("picture", !0, function(e) {
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
}), El = B("picture-album", !0, function(e) {
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
}), Dl = B("preview-open", !1, function(e) {
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
}), on = B("refresh", !0, function(e) {
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
}), Fl = B("save", !0, function(e) {
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
}), sn = B("search", !0, function(e) {
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
}), Al = { class: "wallpaper-window" }, Bl = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Rl = {
  key: 0,
  class: "title"
}, Hl = {
  key: 1,
  class: "title"
}, Vl = {
  key: 2,
  class: "window-actions"
}, Ul = {
  key: 3,
  class: "window-actions"
}, Gl = { class: "source-toggle" }, Zl = {
  key: 0,
  class: "unsupported"
}, Kl = { class: "top-panel" }, ql = { class: "preview" }, Jl = ["src"], Ql = {
  key: 1,
  class: "preview-empty"
}, Yl = { class: "status-panel" }, Xl = { class: "status-row" }, ea = { class: "status-row" }, ta = { class: "status-row" }, na = { class: "status-actions" }, oa = ["disabled"], sa = { class: "card settings-card" }, ia = { class: "form-row mode-row" }, la = { class: "segmented three" }, aa = { class: "form-row fixed-row" }, ra = { class: "form-row folder-row" }, ua = { class: "hint-row" }, ca = { class: "form-row wallhaven-row" }, da = { class: "segmented source" }, ha = { class: "hint-row" }, fa = { class: "card rules-card" }, pa = { class: "rules-line" }, va = { class: "switch-label" }, ga = { class: "number-label" }, ya = { class: "segmented mini" }, wa = { class: "rules-line" }, ma = { class: "segmented fit" }, ba = { class: "checkbox-label" }, _a = { class: "footer-card" }, ka = { class: "cache-info" }, Ca = { class: "footer-actions" }, La = ["disabled"], Sa = ["disabled"], xa = ["disabled"], Oa = {
  key: 2,
  class: "wallhaven-view"
}, za = { class: "filters" }, Wa = { class: "filter-row filter-main" }, Ia = { class: "search-box" }, ja = { class: "resolution" }, Pa = { class: "filter-row filter-meta" }, Ta = { class: "chips" }, Ma = { class: "source-select" }, Na = { class: "grid-wrap" }, $a = {
  key: 0,
  class: "empty-state"
}, Ea = {
  key: 1,
  class: "empty-state error-state"
}, Da = {
  key: 2,
  class: "empty-state"
}, Fa = {
  key: 3,
  class: "wallpaper-grid"
}, Aa = ["onClick"], Ba = { class: "thumb" }, Ra = {
  key: 0,
  class: "thumb-skeleton"
}, Ha = ["alt", "onLoad"], Va = ["onClick"], Ua = ["disabled", "onClick"], Ga = ["disabled", "onClick"], Za = { class: "pager" }, Ka = { class: "source-note" }, qa = { class: "pager-actions" }, Ja = ["disabled"], Qa = ["disabled"], Ya = { class: "preview-dialog" }, Xa = { class: "preview-image-wrap" }, er = {
  key: 0,
  class: "preview-skeleton"
}, tr = {
  key: 1,
  class: "preview-error"
}, nr = ["src"], or = ["disabled"], sr = ["disabled"], ir = /* @__PURE__ */ $({
  __name: "index",
  setup(e) {
    const t = dn(), n = k(wl()), o = k(null), l = k(null), c = k(!1), u = k(!1), f = k(!1), y = k("switcher"), w = k([]), g = k(1), S = k(1), I = k(!1), P = k(!1), R = k(""), v = k(""), b = k("general"), O = k("hot"), E = k(null), C = k(!1), K = k(!1), D = k(/* @__PURE__ */ new Set()), ae = k(/* @__PURE__ */ new Set()), z = k(!1), ye = k(!1), we = /* @__PURE__ */ new Map();
    let J = null, yt = null, wt = null, xe = 0;
    const mt = m(() => ml(o.value?.currentPath)), bt = m(() => "2560 × 1440"), Bn = m(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), Rn = m(() => {
      const h = o.value?.nextSwitchAt;
      if (!h) return "18 分钟后";
      const i = Math.max(0, h - Math.floor(Date.now() / 1e3));
      return i < 60 ? `${i} 秒后` : `${Math.ceil(i / 60)} 分钟后`;
    }), Hn = m(() => {
      const h = o.value?.cacheSizeBytes ?? 0;
      return h > 0 ? ho(h) : "320 MB";
    }), _t = m(() => l.value ? `检测到 ${l.value.count} 张可用图片` : "检测到 128 张可用图片"), Vn = m(() => "2560×1440"), Un = m(() => O.value === "hot" ? "Hot" : "Toplist"), qe = m(() => w.value.slice(0, 8)), Gn = (h) => {
      const i = h.trim(), p = i.toLocaleLowerCase(), N = {
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
    }, Zn = (h, i) => h.toLocaleLowerCase().split(/\s+/).filter(Boolean).includes(i) ? h : `${h} ${i}`, Kn = m(() => {
      const h = Gn(v.value);
      return b.value === "nature" ? h ? Zn(h, "nature") : "nature" : h || null;
    }), qn = m(() => b.value), kt = async () => {
      c.value = !0;
      try {
        const [h, i] = await Promise.all([
          bl(),
          en()
        ]);
        if (n.value = h, o.value = i, h.folderPath)
          try {
            l.value = await tn(h.folderPath);
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
        o.value = await en();
      } catch (h) {
        W.msg(String(h), "error");
      }
    }, Ct = async () => {
      u.value = !0;
      try {
        await et(n.value), await Y(), W.msg("壁纸设置已保存", "success");
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        u.value = !1;
      }
    }, Jn = async () => {
      const h = await $t({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof h == "string") {
        n.value.fixedImagePath = h, n.value.mode = "fixed";
        try {
          await _l(h), await kt(), W.msg("已设置固定壁纸", "success");
        } catch (i) {
          W.msg(String(i), "error");
        }
      }
    }, Qn = async () => {
      const h = await $t({ multiple: !1, directory: !0 });
      typeof h == "string" && (n.value.folderPath = h, n.value.mode = "folder", await Lt());
    }, Lt = async () => {
      if (!n.value.folderPath) {
        W.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        l.value = await tn(n.value.folderPath), l.value.count === 0 ? W.msg("文件夹中没有可用图片", "warning") : W.msg(_t.value, "success");
      } catch (h) {
        W.msg(String(h), "error");
      }
    }, Yn = async () => {
      f.value = !0;
      try {
        await et(n.value), await kl(), await Y(), W.msg("壁纸已切换", "success");
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        f.value = !1;
      }
    }, Xn = async () => {
      if (!o.value?.currentPath) {
        W.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await Ct();
    }, St = async () => {
      v.value = n.value.wallhavenQuery ?? "", b.value = n.value.wallhavenCategory || "general", O.value = n.value.wallhavenSource, y.value = "wallhaven", P.value || await re(1);
    }, eo = async () => {
      y.value = "switcher", Je(), await Y();
    }, xt = (h) => {
      E.value = h, C.value = !0, K.value = !1;
    }, Je = () => {
      E.value = null, C.value = !1, K.value = !1;
    }, to = () => {
      C.value = !1;
    }, no = () => {
      C.value = !1, K.value = !0;
    }, Oe = (h, i) => {
      const p = new Set(D.value);
      i ? p.add(h) : p.delete(h), D.value = p;
    }, oo = (h) => {
      const i = new Set(ae.value);
      i.add(h), ae.value = i;
    }, so = (h, i) => {
      if (!(i instanceof HTMLImageElement)) {
        we.delete(h.id);
        return;
      }
      if (we.set(h.id, i), !J) {
        i.src = h.thumbs.large;
        return;
      }
      i.dataset.src = h.thumbs.large, J.observe(i);
    }, io = () => {
      ae.value = /* @__PURE__ */ new Set(), we.clear();
    }, lo = async () => {
      n.value.wallhavenQuery = v.value.trim() || null, n.value.wallhavenCategory = b.value, n.value.wallhavenSource = O.value, n.value.mode = "wallhaven", await et(n.value);
    }, re = async (h = g.value) => {
      const i = ++xe;
      I.value = !0, R.value = "", w.value = [], io();
      try {
        await lo();
        const p = await Cl({
          source: O.value,
          page: h,
          query: Kn.value,
          category: qn.value
        });
        if (i !== xe) return;
        w.value = p.data, g.value = p.page, S.value = Math.max(1, p.lastPage), P.value = !0, await ln();
        for (const N of we.values())
          J && J.observe(N);
      } catch (p) {
        if (i !== xe) return;
        w.value = [], R.value = String(p).replace(/^Error:\s*/, ""), W.msg(String(p), "error");
      } finally {
        i === xe && (I.value = !1);
      }
    }, me = () => re(1), Ot = async (h) => {
      O.value = h, await re(1);
    }, ze = async (h) => {
      b.value = h, await re(1);
    }, zt = async (h) => {
      Oe(h.id, !0);
      try {
        W.msg("正在设置壁纸...", "info"), await Ll(h), await Y(), W.msg("壁纸已设置", "success");
      } catch (i) {
        W.msg(String(i), "error");
      } finally {
        Oe(h.id, !1);
      }
    }, Wt = async (h) => {
      Oe(h.id, !0);
      try {
        W.msg("正在下载壁纸...", "info"), await Sl(h), await Y(), W.msg("壁纸已下载到缓存", "success");
      } catch (i) {
        W.msg(String(i), "error");
      } finally {
        Oe(h.id, !1);
      }
    }, ao = async () => {
      g.value <= 1 || await re(g.value - 1);
    }, ro = async () => {
      g.value >= S.value || await re(g.value + 1);
    }, uo = async () => {
      z.value = !0;
      try {
        await xl(), await Y(), W.msg("缓存已清理", "success");
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        z.value = !1;
      }
    }, co = async () => {
      ye.value = !0;
      try {
        await Ol();
      } catch (h) {
        W.msg(String(h), "error");
      } finally {
        ye.value = !1;
      }
    }, It = async () => {
      await t.close();
    }, ho = (h) => h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / 1024 / 1024).toFixed(1)} MB` : `${(h / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return Ve(async () => {
      J = new IntersectionObserver(
        (h) => {
          for (const i of h) {
            if (!i.isIntersecting) continue;
            const p = i.target, N = p.dataset.src;
            N && p.src !== N && (p.src = N), J?.unobserve(p);
          }
        },
        { root: null, rootMargin: "120px" }
      ), await kt(), yt = await De("wallpaper-switcher-changed", Y), wt = await De("wallpaper-switcher-error", (h) => {
        W.msg(h.payload?.message || "定时切换失败", "error");
      });
    }), bo(() => {
      J?.disconnect(), J = null, yt?.(), wt?.();
    }), (h, i) => (_(), x("main", Al, [
      a("header", Bl, [
        s(y) === "switcher" ? (_(), x("div", Rl, [
          d(s(nt), { size: 20 }),
          i[26] || (i[26] = a(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ])) : (_(), x("div", Hl, [
          a("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: eo
          }, [
            d(s(Pl), { size: 22 })
          ]),
          i[27] || (i[27] = a(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ])),
        s(y) === "switcher" ? (_(), x("div", Vl, [
          a("button", {
            type: "button",
            class: "icon-btn online-entry-btn",
            title: "打开 Wallhaven 壁纸",
            onClick: St
          }, [
            d(s(El), { size: 20 })
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: It
          }, [
            d(s(tt), { size: 22 })
          ])
        ])) : (_(), x("div", Ul, [
          a("div", Gl, [
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(O) === "hot" }),
                onClick: i[0] || (i[0] = (p) => Ot("hot"))
              },
              "热门",
              2
              /* CLASS */
            ),
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(O) === "toplist" }),
                onClick: i[1] || (i[1] = (p) => Ot("toplist"))
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
            onClick: It
          }, [
            d(s(tt), { size: 22 })
          ])
        ]))
      ]),
      s(o) && !s(o).supported ? (_(), x("section", Zl, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : H("v-if", !0),
      s(y) === "switcher" ? (_(), x(
        "div",
        {
          key: 1,
          class: L(["content", { dimmed: s(c) }])
        },
        [
          a("section", Kl, [
            a("div", ql, [
              s(mt) ? (_(), x("img", {
                key: 0,
                src: s(mt),
                alt: "当前壁纸预览"
              }, null, 8, Jl)) : (_(), x("div", Ql, [
                d(s(nt), { size: 42 }),
                i[28] || (i[28] = a(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            a("div", Yl, [
              i[32] || (i[32] = a(
                "h2",
                null,
                "当前状态",
                -1
                /* HOISTED */
              )),
              a("div", Xl, [
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
                  j(s(Bn)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", ea, [
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
                  j(s(bt)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", ta, [
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
                  j(s(Rn)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", na, [
                a("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(f),
                  onClick: Yn
                }, [
                  d(s($l), { size: 17 }),
                  T(
                    " " + j(s(f) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, oa),
                a("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: Xn
                }, " 设为固定 ")
              ])
            ])
          ]),
          a("section", sa, [
            a("div", ia, [
              i[33] || (i[33] = a(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              a("div", la, [
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
            a("div", aa, [
              i[35] || (i[35] = a(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              G(a(
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
                [We, s(n).fixedImagePath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Jn
              }, [
                d(s(nt), { size: 16 }),
                i[34] || (i[34] = T(" 选择图片 "))
              ])
            ]),
            a("div", ra, [
              i[38] || (i[38] = a(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              G(a(
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
                [We, s(n).folderPath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Qn
              }, [
                d(s(nn), { size: 16 }),
                i[36] || (i[36] = T(" 选择 "))
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Lt
              }, [
                d(s(on), { size: 16 }),
                i[37] || (i[37] = T(" 扫描 "))
              ])
            ]),
            a(
              "div",
              ua,
              j(s(_t)),
              1
              /* TEXT */
            ),
            a("div", ca, [
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
              a("div", da, [
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
                onClick: St
              }, [
                d(s(sn), { size: 16 }),
                i[39] || (i[39] = T(" 打开在线网格 "))
              ])
            ]),
            a("div", ha, [
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
                j(s(bt)),
                1
                /* TEXT */
              )
            ])
          ]),
          a("section", fa, [
            i[50] || (i[50] = a(
              "h2",
              null,
              "切换规则",
              -1
              /* HOISTED */
            )),
            a("div", pa, [
              a("label", va, [
                G(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[9] || (i[9] = (p) => s(n).scheduleEnabled = p),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [jt, s(n).scheduleEnabled]
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
              a("label", ga, [
                i[45] || (i[45] = T(" 每 ")),
                G(a(
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
                    We,
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
              a("div", ya, [
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
            a("div", wa, [
              i[49] || (i[49] = a(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              a("div", ma, [
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
              a("label", ba, [
                G(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[16] || (i[16] = (p) => s(n).autoRestore = p),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [jt, s(n).autoRestore]
                ]),
                i[48] || (i[48] = T(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          a("footer", _a, [
            a("div", ka, [
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
                j(s(Hn)),
                1
                /* TEXT */
              )
            ]),
            a("div", Ca, [
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(z),
                onClick: uo
              }, [
                d(s(Ml), { size: 16 }),
                T(
                  " " + j(s(z) ? "清理中" : "清理缓存"),
                  1
                  /* TEXT */
                )
              ], 8, La),
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(ye),
                onClick: co
              }, [
                d(s(nn), { size: 16 }),
                T(
                  " " + j(s(ye) ? "打开中" : "打开缓存"),
                  1
                  /* TEXT */
                )
              ], 8, Sa),
              a("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(u),
                onClick: Ct
              }, [
                d(s(Fl), { size: 17 }),
                T(
                  " " + j(s(u) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, xa)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (_(), x("div", Oa, [
        a("section", za, [
          a("div", Wa, [
            a("div", Ia, [
              G(a(
                "input",
                {
                  "onUpdate:modelValue": i[17] || (i[17] = (p) => ot(v) ? v.value = p : null),
                  type: "search",
                  placeholder: "搜索关键词",
                  onKeydown: _o(me, ["enter"])
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ), [
                [We, s(v)]
              ]),
              a("button", {
                type: "button",
                title: "搜索",
                onClick: me
              }, [
                d(s(sn), { size: 18 })
              ])
            ]),
            a("label", ja, [
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
                "自动匹配 " + j(s(Vn)),
                1
                /* TEXT */
              )
            ]),
            a("button", {
              type: "button",
              class: "refresh-btn",
              title: "刷新",
              onClick: me
            }, [
              d(s(on), {
                size: 18,
                class: L({ spinning: s(I) })
              }, null, 8, ["class"])
            ])
          ]),
          a("div", Pa, [
            a("div", Ta, [
              a(
                "button",
                {
                  type: "button",
                  class: L({ active: s(b) === "general" }),
                  onClick: i[18] || (i[18] = (p) => ze("general"))
                },
                "通用",
                2
                /* CLASS */
              ),
              a(
                "button",
                {
                  type: "button",
                  class: L({ active: s(b) === "anime" }),
                  onClick: i[19] || (i[19] = (p) => ze("anime"))
                },
                "动漫",
                2
                /* CLASS */
              ),
              a(
                "button",
                {
                  type: "button",
                  class: L({ active: s(b) === "people" }),
                  onClick: i[20] || (i[20] = (p) => ze("people"))
                },
                "人物",
                2
                /* CLASS */
              ),
              a(
                "button",
                {
                  type: "button",
                  class: L({ active: s(b) === "nature" }),
                  onClick: i[21] || (i[21] = (p) => ze("nature"))
                },
                "自然",
                2
                /* CLASS */
              )
            ]),
            a("label", Ma, [
              i[55] || (i[55] = a(
                "span",
                null,
                "源",
                -1
                /* HOISTED */
              )),
              G(a(
                "select",
                {
                  "onUpdate:modelValue": i[22] || (i[22] = (p) => ot(O) ? O.value = p : null),
                  onChange: me
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
                [ko, s(O)]
              ])
            ])
          ])
        ]),
        a("section", Na, [
          s(I) && s(qe).length === 0 ? (_(), x("div", $a, "正在加载 Wallhaven 壁纸...")) : s(R) ? (_(), x("div", Ea, [
            a(
              "span",
              null,
              j(s(R)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              onClick: me
            }, "重试")
          ])) : s(qe).length === 0 ? (_(), x("div", Da, "暂无可用壁纸")) : (_(), x("div", Fa, [
            (_(!0), x(
              ut,
              null,
              Co(s(qe), (p) => (_(), x("article", {
                key: p.id,
                class: "wallpaper-card",
                onClick: (N) => xt(p)
              }, [
                a("div", Ba, [
                  s(ae).has(p.id) ? H("v-if", !0) : (_(), x("div", Ra)),
                  a("img", {
                    ref_for: !0,
                    ref: (N) => so(p, N),
                    alt: p.resolution,
                    loading: "lazy",
                    onLoad: (N) => oo(p.id)
                  }, null, 40, Ha),
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
                  onClick: i[23] || (i[23] = $e(() => {
                  }, ["stop"]))
                }, [
                  a("button", {
                    type: "button",
                    title: "预览",
                    onClick: (N) => xt(p)
                  }, [
                    d(s(Dl), { size: 16 }),
                    i[56] || (i[56] = T(" 预览 "))
                  ], 8, Va),
                  a("button", {
                    type: "button",
                    title: "设为壁纸",
                    disabled: s(D).has(p.id),
                    onClick: (N) => zt(p)
                  }, [
                    d(s(Tl), { size: 16 }),
                    T(
                      " " + j(s(D).has(p.id) ? "设置中" : "设为"),
                      1
                      /* TEXT */
                    )
                  ], 8, Ua),
                  a("button", {
                    type: "button",
                    title: "下载",
                    disabled: s(D).has(p.id),
                    onClick: (N) => Wt(p)
                  }, [
                    d(s(Nl), { size: 16 }),
                    i[57] || (i[57] = T(" 下载 "))
                  ], 8, Ga)
                ])
              ], 8, Aa))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        a("footer", Za, [
          a(
            "span",
            null,
            "第 " + j(s(g)) + " 页",
            1
            /* TEXT */
          ),
          a(
            "span",
            Ka,
            "来源：" + j(s(Un)) + " · SFW",
            1
            /* TEXT */
          ),
          a("div", qa, [
            a("button", {
              type: "button",
              disabled: s(g) <= 1 || s(I),
              onClick: ao
            }, "上一页", 8, Ja),
            a("button", {
              type: "button",
              disabled: s(g) >= s(S) || s(I),
              onClick: ro
            }, "下一页", 8, Qa)
          ])
        ])
      ])),
      s(E) ? (_(), x("div", {
        key: 3,
        class: "preview-modal",
        onClick: $e(Je, ["self"])
      }, [
        a("div", Ya, [
          a("header", null, [
            a(
              "strong",
              null,
              j(s(E).resolution),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "flat-icon",
              onClick: Je
            }, [
              d(s(tt), { size: 23 })
            ])
          ]),
          a("div", Xa, [
            s(C) ? (_(), x("div", er, i[58] || (i[58] = [
              a(
                "span",
                null,
                "加载预览...",
                -1
                /* HOISTED */
              )
            ]))) : H("v-if", !0),
            s(K) ? (_(), x("div", tr, "预览加载失败")) : H("v-if", !0),
            a("img", {
              class: L({ ready: !s(C) && !s(K) }),
              src: s(E).path,
              alt: "壁纸预览",
              onLoad: to,
              onError: no
            }, null, 42, nr)
          ]),
          a("footer", null, [
            a("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(D).has(s(E).id),
              onClick: i[24] || (i[24] = (p) => Wt(s(E)))
            }, " 下载缓存 ", 8, or),
            a("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(D).has(s(E).id),
              onClick: i[25] || (i[25] = (p) => zt(s(E)))
            }, j(s(D).has(s(E).id) ? "设置中" : "设为壁纸"), 9, sr)
          ])
        ])
      ])) : H("v-if", !0)
    ]));
  }
}), lr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, ar = /* @__PURE__ */ lr(ir, [["__scopeId", "data-v-c871270d"]]), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" }));
export {
  cr as activate
};
