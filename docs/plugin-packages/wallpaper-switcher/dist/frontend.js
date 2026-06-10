import { getCurrentInstance as fe, inject as oe, ref as C, computed as y, unref as s, readonly as wo, getCurrentScope as mo, onScopeDispose as yo, onMounted as Ke, nextTick as rn, watch as Ge, isRef as un, warn as bo, provide as _o, defineComponent as N, createElementBlock as O, openBlock as k, mergeProps as ko, renderSlot as pe, createElementVNode as a, normalizeClass as x, createVNode as h, Transition as ct, withCtx as se, withDirectives as Z, normalizeStyle as Ee, createTextVNode as T, toDisplayString as I, vShow as Ae, shallowReactive as Co, createBlock as J, createCommentVNode as V, resolveDynamicComponent as cn, Fragment as dt, withModifiers as G, isVNode as xe, render as Fe, onUnmounted as Lo, withKeys as te, vModelText as je, vModelCheckbox as jt, renderList as xo } from "vue";
const pr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => hr)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function So(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Oo(e, t, n, o, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var $e;
const B = "__TAURI_TO_IPC_KEY__";
function zo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Wo(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Po {
  get rid() {
    return So(this, $e, "f");
  }
  constructor(t) {
    $e.set(this, void 0), Oo(this, $e, t);
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
$e = /* @__PURE__ */ new WeakMap();
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
async function De(e, t, n) {
  var o;
  const l = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: l,
    handler: zo(t)
  }).then((d) => async () => dn(e, d));
}
async function Io(e, t, n) {
  return De(e, (o) => {
    dn(e, o.id), t(o);
  }, n);
}
async function jo(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function To(e, t, n) {
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
    return new Ce(this.width * t, this.height * t);
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
class he {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof hn ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ce ? this.size : this.size.toPhysical(t);
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
    return new X(this.x * t, this.y * t);
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
class Te {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof fn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof X ? this.position : this.position.toPhysical(t);
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
class Le extends Po {
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
      rgba: Re(t),
      width: n,
      height: o
    }).then((l) => new Le(l));
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
      bytes: Re(t)
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
    return r("plugin:image|from_path", { path: t }).then((n) => new Le(n));
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
function Re(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Le ? e.rid : e;
}
var it;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(it || (it = {}));
class $o {
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
async function Xe() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new vn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const et = ["tauri://created", "tauri://error"];
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
    return (n = (await Xe()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
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
    return Xe();
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
    for (const t of await Xe())
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
    } : Io(t, n, {
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
    if (et.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return jo(t, n);
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
    if (et.includes(n)) {
      for (const l of this.listeners[n] || [])
        l({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return To(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return et.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return r("plugin:window|outer_position", {
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
    return r("plugin:window|inner_size", {
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
    return r("plugin:window|outer_size", {
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
      value: t instanceof he ? t : new he(t)
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
      value: t instanceof he ? t : t ? new he(t) : null
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
      value: t instanceof he ? t : t ? new he(t) : null
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
      value: t instanceof Te ? t : new Te(t)
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
      value: Re(t)
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
      value: t instanceof Te ? t : new Te(t)
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
      value: t ? Re(t) : void 0
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
      const o = new $o(n);
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
          position: new X(u.payload.position)
        }
      });
    }), o = await this.listen(D.DRAG_OVER, (u) => {
      t({
        ...u,
        payload: {
          type: "over",
          position: new X(u.payload.position)
        }
      });
    }), l = await this.listen(D.DRAG_DROP, (u) => {
      t({
        ...u,
        payload: {
          type: "drop",
          paths: u.payload.paths,
          position: new X(u.payload.position)
        }
      });
    }), d = await this.listen(D.DRAG_LEAVE, (u) => {
      t({ ...u, payload: { type: "leave" } });
    });
    return () => {
      n(), l(), o(), d();
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
var $t;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})($t || ($t = {}));
var Mt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Mt || (Mt = {}));
var Nt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Nt || (Nt = {}));
async function Et(e = {}) {
  return typeof e == "object" && Object.freeze(e), await r("plugin:dialog|open", { options: e });
}
const gn = Symbol(), Me = "el", Mo = "is-", ne = (e, t, n, o, l) => {
  let d = `${e}-${t}`;
  return n && (d += `-${n}`), o && (d += `__${o}`), l && (d += `--${l}`), d;
}, wn = Symbol("namespaceContextKey"), No = (e) => {
  const t = e || (fe() ? oe(wn, C(Me)) : C(Me));
  return y(() => s(t) || Me);
}, ht = (e, t) => {
  const n = No(t);
  return {
    namespace: n,
    b: (g = "") => ne(n.value, e, g, "", ""),
    e: (g) => g ? ne(n.value, e, "", g, "") : "",
    m: (g) => g ? ne(n.value, e, "", "", g) : "",
    be: (g, b) => g && b ? ne(n.value, e, g, b, "") : "",
    em: (g, b) => g && b ? ne(n.value, e, "", g, b) : "",
    bm: (g, b) => g && b ? ne(n.value, e, g, "", b) : "",
    bem: (g, b, z) => g && b && z ? ne(n.value, e, g, b, z) : "",
    is: (g, ...b) => {
      const z = b.length >= 1 ? b[0] : !0;
      return g && z ? `${Mo}${g}` : "";
    },
    cssVar: (g) => {
      const b = {};
      for (const z in g)
        g[z] && (b[`--${n.value}-${z}`] = g[z]);
      return b;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const b = {};
      for (const z in g)
        g[z] && (b[`--${n.value}-${e}-${z}`] = g[z]);
      return b;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Eo = Object.prototype.hasOwnProperty, At = (e, t) => Eo.call(e, t), Se = (e) => typeof e == "function", ie = (e) => typeof e == "string", mn = (e) => e !== null && typeof e == "object";
var Ao = typeof global == "object" && global && global.Object === Object && global, Fo = typeof self == "object" && self && self.Object === Object && self, ft = Ao || Fo || Function("return this")(), ve = ft.Symbol, yn = Object.prototype, Do = yn.hasOwnProperty, Ro = yn.toString, ke = ve ? ve.toStringTag : void 0;
function Ho(e) {
  var t = Do.call(e, ke), n = e[ke];
  try {
    e[ke] = void 0;
    var o = !0;
  } catch {
  }
  var l = Ro.call(e);
  return o && (t ? e[ke] = n : delete e[ke]), l;
}
var Vo = Object.prototype, Bo = Vo.toString;
function Uo(e) {
  return Bo.call(e);
}
var Ko = "[object Null]", Go = "[object Undefined]", Ft = ve ? ve.toStringTag : void 0;
function bn(e) {
  return e == null ? e === void 0 ? Go : Ko : Ft && Ft in Object(e) ? Ho(e) : Uo(e);
}
function Zo(e) {
  return e != null && typeof e == "object";
}
var qo = "[object Symbol]";
function pt(e) {
  return typeof e == "symbol" || Zo(e) && bn(e) == qo;
}
function Jo(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = Array(o); ++n < o; )
    l[n] = t(e[n], n, e);
  return l;
}
var vt = Array.isArray, Dt = ve ? ve.prototype : void 0, Rt = Dt ? Dt.toString : void 0;
function _n(e) {
  if (typeof e == "string")
    return e;
  if (vt(e))
    return Jo(e, _n) + "";
  if (pt(e))
    return Rt ? Rt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function kn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qo = "[object AsyncFunction]", Yo = "[object Function]", Xo = "[object GeneratorFunction]", es = "[object Proxy]";
function ts(e) {
  if (!kn(e))
    return !1;
  var t = bn(e);
  return t == Yo || t == Xo || t == Qo || t == es;
}
var tt = ft["__core-js_shared__"], Ht = function() {
  var e = /[^.]+$/.exec(tt && tt.keys && tt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ns(e) {
  return !!Ht && Ht in e;
}
var os = Function.prototype, ss = os.toString;
function is(e) {
  if (e != null) {
    try {
      return ss.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ls = /[\\^$.*+?()[\]{}|]/g, as = /^\[object .+?Constructor\]$/, rs = Function.prototype, us = Object.prototype, cs = rs.toString, ds = us.hasOwnProperty, hs = RegExp(
  "^" + cs.call(ds).replace(ls, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fs(e) {
  if (!kn(e) || ns(e))
    return !1;
  var t = ts(e) ? hs : as;
  return t.test(is(e));
}
function ps(e, t) {
  return e?.[t];
}
function Cn(e, t) {
  var n = ps(e, t);
  return fs(n) ? n : void 0;
}
function vs(e, t) {
  return e === t || e !== e && t !== t;
}
var gs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ws = /^\w*$/;
function ms(e, t) {
  if (vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || pt(e) ? !0 : ws.test(e) || !gs.test(e) || t != null && e in Object(t);
}
var Oe = Cn(Object, "create");
function ys() {
  this.__data__ = Oe ? Oe(null) : {}, this.size = 0;
}
function bs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _s = "__lodash_hash_undefined__", ks = Object.prototype, Cs = ks.hasOwnProperty;
function Ls(e) {
  var t = this.__data__;
  if (Oe) {
    var n = t[e];
    return n === _s ? void 0 : n;
  }
  return Cs.call(t, e) ? t[e] : void 0;
}
var xs = Object.prototype, Ss = xs.hasOwnProperty;
function Os(e) {
  var t = this.__data__;
  return Oe ? t[e] !== void 0 : Ss.call(t, e);
}
var zs = "__lodash_hash_undefined__";
function Ws(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Oe && t === void 0 ? zs : t, this;
}
function le(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
le.prototype.clear = ys;
le.prototype.delete = bs;
le.prototype.get = Ls;
le.prototype.has = Os;
le.prototype.set = Ws;
function Ps() {
  this.__data__ = [], this.size = 0;
}
function Ze(e, t) {
  for (var n = e.length; n--; )
    if (vs(e[n][0], t))
      return n;
  return -1;
}
var Is = Array.prototype, js = Is.splice;
function Ts(e) {
  var t = this.__data__, n = Ze(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : js.call(t, n, 1), --this.size, !0;
}
function $s(e) {
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
function me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
me.prototype.clear = Ps;
me.prototype.delete = Ts;
me.prototype.get = $s;
me.prototype.has = Ms;
me.prototype.set = Ns;
var Es = Cn(ft, "Map");
function As() {
  this.size = 0, this.__data__ = {
    hash: new le(),
    map: new (Es || me)(),
    string: new le()
  };
}
function Fs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function qe(e, t) {
  var n = e.__data__;
  return Fs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ds(e) {
  var t = qe(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Rs(e) {
  return qe(this, e).get(e);
}
function Hs(e) {
  return qe(this, e).has(e);
}
function Vs(e, t) {
  var n = qe(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
re.prototype.clear = As;
re.prototype.delete = Ds;
re.prototype.get = Rs;
re.prototype.has = Hs;
re.prototype.set = Vs;
var Bs = "Expected a function";
function gt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Bs);
  var n = function() {
    var o = arguments, l = t ? t.apply(this, o) : o[0], d = n.cache;
    if (d.has(l))
      return d.get(l);
    var u = e.apply(this, o);
    return n.cache = d.set(l, u) || d, u;
  };
  return n.cache = new (gt.Cache || re)(), n;
}
gt.Cache = re;
var Us = 500;
function Ks(e) {
  var t = gt(e, function(o) {
    return n.size === Us && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Gs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zs = /\\(\\)?/g, qs = Ks(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Gs, function(n, o, l, d) {
    t.push(l ? d.replace(Zs, "$1") : o || n);
  }), t;
});
function Js(e) {
  return e == null ? "" : _n(e);
}
function Qs(e, t) {
  return vt(e) ? e : ms(e, t) ? [e] : qs(Js(e));
}
function Ys(e) {
  if (typeof e == "string" || pt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Xs(e, t) {
  t = Qs(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Ys(t[n++])];
  return n && n == o ? e : void 0;
}
function ei(e, t, n) {
  var o = e == null ? void 0 : Xs(e, t);
  return o === void 0 ? n : o;
}
function ti(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
const Ln = (e) => e === void 0, Vt = (e) => typeof e == "boolean", ae = (e) => typeof e == "number", lt = (e) => typeof Element > "u" ? !1 : e instanceof Element, ni = (e) => ie(e) ? !Number.isNaN(Number(e)) : !1;
var Bt;
const ue = typeof window < "u", oi = (e) => typeof e == "string", si = () => {
};
ue && ((Bt = window?.navigator) != null && Bt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wt(e) {
  return typeof e == "function" ? e() : s(e);
}
function ii(e) {
  return e;
}
function mt(e) {
  return mo() ? (yo(e), !0) : !1;
}
function li(e, t = !0) {
  fe() ? Ke(e) : t ? e() : rn(e);
}
function xn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, l = C(!1);
  let d = null;
  function u() {
    d && (clearTimeout(d), d = null);
  }
  function p() {
    l.value = !1, u();
  }
  function w(...m) {
    u(), l.value = !0, d = setTimeout(() => {
      l.value = !1, d = null, e(...m);
    }, wt(t));
  }
  return o && (l.value = !0, ue && w()), mt(p), {
    isPending: wo(l),
    start: w,
    stop: p
  };
}
function Sn(e) {
  var t;
  const n = wt(e);
  return (t = n?.$el) != null ? t : n;
}
const On = ue ? window : void 0;
function zn(...e) {
  let t, n, o, l;
  if (oi(e[0]) || Array.isArray(e[0]) ? ([n, o, l] = e, t = On) : [t, n, o, l] = e, !t)
    return si;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const d = [], u = () => {
    d.forEach((v) => v()), d.length = 0;
  }, p = (v, S, _, j) => (v.addEventListener(S, _, j), () => v.removeEventListener(S, _, j)), w = Ge(() => [Sn(t), wt(l)], ([v, S]) => {
    u(), v && d.push(...n.flatMap((_) => o.map((j) => p(v, _, j, S))));
  }, { immediate: !0, flush: "post" }), m = () => {
    w(), u();
  };
  return mt(m), m;
}
function ai(e, t = !1) {
  const n = C(), o = () => n.value = !!e();
  return o(), li(o, t), n;
}
const Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Kt = "__vueuse_ssr_handlers__";
Ut[Kt] = Ut[Kt] || {};
var Gt = Object.getOwnPropertySymbols, ri = Object.prototype.hasOwnProperty, ui = Object.prototype.propertyIsEnumerable, ci = (e, t) => {
  var n = {};
  for (var o in e)
    ri.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Gt)
    for (var o of Gt(e))
      t.indexOf(o) < 0 && ui.call(e, o) && (n[o] = e[o]);
  return n;
};
function di(e, t, n = {}) {
  const o = n, { window: l = On } = o, d = ci(o, ["window"]);
  let u;
  const p = ai(() => l && "ResizeObserver" in l), w = () => {
    u && (u.disconnect(), u = void 0);
  }, m = Ge(() => Sn(e), (S) => {
    w(), p.value && l && S && (u = new ResizeObserver(t), u.observe(S, d));
  }, { immediate: !0, flush: "post" }), v = () => {
    w(), m();
  };
  return mt(v), {
    isSupported: p,
    stop: v
  };
}
var Zt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Zt || (Zt = {}));
var hi = Object.defineProperty, qt = Object.getOwnPropertySymbols, fi = Object.prototype.hasOwnProperty, pi = Object.prototype.propertyIsEnumerable, Jt = (e, t, n) => t in e ? hi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vi = (e, t) => {
  for (var n in t || (t = {}))
    fi.call(t, n) && Jt(e, n, t[n]);
  if (qt)
    for (var n of qt(t))
      pi.call(t, n) && Jt(e, n, t[n]);
  return e;
};
const gi = {
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
vi({
  linear: ii
}, gi);
const Qt = {
  current: 0
}, Yt = C(0), Wn = 2e3, Xt = Symbol("elZIndexContextKey"), Pn = Symbol("zIndexContextKey"), wi = (e) => {
  const t = fe() ? oe(Xt, Qt) : Qt, n = e || (fe() ? oe(Pn, void 0) : void 0), o = y(() => {
    const u = s(n);
    return ae(u) ? u : Wn;
  }), l = y(() => o.value + Yt.value), d = () => (t.current++, Yt.value = t.current, l.value);
  return !ue && oe(Xt), {
    initialZIndex: o,
    currentZIndex: l,
    nextZIndex: d
  };
};
var mi = {
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
const yi = (e) => (t, n) => bi(t, n, s(e)), bi = (e, t, n) => ei(n, e, e).replace(/\{(\w+)\}/g, (o, l) => {
  var d;
  return `${(d = t?.[l]) != null ? d : `{${l}}`}`;
}), _i = (e) => {
  const t = y(() => s(e).name), n = un(e) ? e : C(e);
  return {
    lang: t,
    locale: n,
    t: yi(e)
  };
}, In = Symbol("localeContextKey"), ki = (e) => {
  const t = e || oe(In, C());
  return _i(y(() => t.value || mi));
}, jn = "__epPropKey", R = (e) => e, Ci = (e) => mn(e) && !!e[jn], Tn = (e, t) => {
  if (!mn(e) || Ci(e))
    return e;
  const { values: n, required: o, default: l, type: d, validator: u } = e, w = {
    type: d,
    required: !!o,
    validator: n || u ? (m) => {
      let v = !1, S = [];
      if (n && (S = Array.from(n), At(e, "default") && S.push(l), v || (v = S.includes(m))), u && (v || (v = u(m))), !v && S.length > 0) {
        const _ = [...new Set(S)].map((j) => JSON.stringify(j)).join(", ");
        bo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${_}], got value ${JSON.stringify(m)}.`);
      }
      return v;
    } : void 0,
    [jn]: !0
  };
  return At(e, "default") && (w.default = l), w;
}, ye = (e) => ti(Object.entries(e).map(([t, n]) => [
  t,
  Tn(n, t)
])), Li = ["", "default", "small", "large"], xi = Tn({
  type: String,
  values: Li,
  required: !1
}), Si = Symbol("size"), Oi = Symbol("emptyValuesContextKey"), zi = ye({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Se(e) ? !e() : !e
  }
}), en = (e) => Object.keys(e), He = C();
function $n(e, t = void 0) {
  return fe() ? oe(gn, He) : He;
}
function Mn(e, t) {
  const n = $n(), o = ht(e, y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || Me;
  })), l = ki(y(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), d = wi(y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || Wn;
  })), u = y(() => {
    var p;
    return s(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return Nn(y(() => s(n) || {})), {
    ns: o,
    locale: l,
    zIndex: d,
    size: u
  };
}
const Nn = (e, t, n = !1) => {
  var o;
  const l = !!fe(), d = l ? $n() : void 0, u = (o = void 0) != null ? o : l ? _o : void 0;
  if (!u)
    return;
  const p = y(() => {
    const w = s(e);
    return d?.value ? Wi(d.value, w) : w;
  });
  return u(gn, p), u(In, y(() => p.value.locale)), u(wn, y(() => p.value.namespace)), u(Pn, y(() => p.value.zIndex)), u(Si, {
    size: y(() => p.value.size || "")
  }), u(Oi, y(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !He.value) && (He.value = p.value), p;
}, Wi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...en(e), ...en(t)])], o = {};
  for (const l of n)
    o[l] = t[l] !== void 0 ? t[l] : e[l];
  return o;
};
var Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function at(e, t = "px") {
  if (!e)
    return "";
  if (ae(e) || ni(e))
    return `${e}${t}`;
  if (ie(e))
    return e;
}
const En = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), An = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Pi = ye({
  size: {
    type: R([Number, String])
  },
  color: {
    type: String
  }
}), Ii = N({
  name: "ElIcon",
  inheritAttrs: !1
}), ji = /* @__PURE__ */ N({
  ...Ii,
  props: Pi,
  setup(e) {
    const t = e, n = ht("icon"), o = y(() => {
      const { size: l, color: d } = t;
      return !l && !d ? {} : {
        fontSize: Ln(l) ? void 0 : at(l),
        "--color": d
      };
    });
    return (l, d) => (k(), O("i", ko({
      class: s(n).b(),
      style: s(o)
    }, l.$attrs), [
      pe(l.$slots, "default")
    ], 16));
  }
});
var Ti = /* @__PURE__ */ Je(ji, [["__file", "icon.vue"]]);
const Ve = En(Ti);
/*! Element Plus Icons Vue v2.3.1 */
var $i = /* @__PURE__ */ N({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Mi = $i, Ni = /* @__PURE__ */ N({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Fn = Ni, Ei = /* @__PURE__ */ N({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ai = Ei, Fi = /* @__PURE__ */ N({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Di = Fi, Ri = /* @__PURE__ */ N({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      a("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Hi = Ri;
const Dn = R([
  String,
  Object,
  Function
]), Vi = {
  Close: Fn
}, Bi = {
  Close: Fn
}, Be = {
  success: Di,
  warning: Hi,
  error: Mi,
  info: Ai
}, Ui = (e) => e, Ne = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ki = ye({
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
    type: R([String, Object, Array])
  },
  offset: {
    type: R(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Gi = N({
  name: "ElBadge"
}), Zi = /* @__PURE__ */ N({
  ...Gi,
  props: Ki,
  setup(e, { expose: t }) {
    const n = e, o = ht("badge"), l = y(() => n.isDot ? "" : ae(n.value) && ae(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), d = y(() => {
      var u, p, w, m, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: at(-((p = (u = n.offset) == null ? void 0 : u[0]) != null ? p : 0)),
          marginTop: at((m = (w = n.offset) == null ? void 0 : w[1]) != null ? m : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: l
    }), (u, p) => (k(), O("div", {
      class: x(s(o).b())
    }, [
      pe(u.$slots, "default"),
      h(ct, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: se(() => [
          Z(a("sup", {
            class: x([
              s(o).e("content"),
              s(o).em("content", u.type),
              s(o).is("fixed", !!u.$slots.default),
              s(o).is("dot", u.isDot),
              s(o).is("hide-zero", !u.showZero && n.value === 0),
              u.badgeClass
            ]),
            style: Ee(s(d))
          }, [
            pe(u.$slots, "content", { value: s(l) }, () => [
              T(I(s(l)), 1)
            ])
          ], 6), [
            [Ae, !u.hidden && (s(l) || u.isDot || u.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var qi = /* @__PURE__ */ Je(Zi, [["__file", "badge.vue"]]);
const Ji = En(qi), Qi = ye({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: R(Object)
  },
  size: xi,
  button: {
    type: R(Object)
  },
  experimentalFeatures: {
    type: R(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: R(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...zi
}), U = {};
N({
  name: "ElConfigProvider",
  props: Qi,
  setup(e, { slots: t }) {
    Ge(() => e.message, (o) => {
      Object.assign(U, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Nn(e);
    return () => pe(t, "default", { config: n?.value });
  }
});
const Rn = ["success", "info", "warning", "error"], $ = Ui({
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
  appendTo: ue ? document.body : void 0
}), Yi = ye({
  customClass: {
    type: String,
    default: $.customClass
  },
  center: {
    type: Boolean,
    default: $.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: $.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: $.duration
  },
  icon: {
    type: Dn,
    default: $.icon
  },
  id: {
    type: String,
    default: $.id
  },
  message: {
    type: R([
      String,
      Object,
      Function
    ]),
    default: $.message
  },
  onClose: {
    type: R(Function),
    default: $.onClose
  },
  showClose: {
    type: Boolean,
    default: $.showClose
  },
  type: {
    type: String,
    values: Rn,
    default: $.type
  },
  plain: {
    type: Boolean,
    default: $.plain
  },
  offset: {
    type: Number,
    default: $.offset
  },
  zIndex: {
    type: Number,
    default: $.zIndex
  },
  grouping: {
    type: Boolean,
    default: $.grouping
  },
  repeatNum: {
    type: Number,
    default: $.repeatNum
  }
}), Xi = {
  destroy: () => !0
}, K = Co([]), el = (e) => {
  const t = K.findIndex((l) => l.id === e), n = K[t];
  let o;
  return t > 0 && (o = K[t - 1]), { current: n, prev: o };
}, tl = (e) => {
  const { prev: t } = el(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, nl = (e, t) => K.findIndex((o) => o.id === e) > 0 ? 16 : t, ol = N({
  name: "ElMessage"
}), sl = /* @__PURE__ */ N({
  ...ol,
  props: Yi,
  emits: Xi,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Bi, { ns: l, zIndex: d } = Mn("message"), { currentZIndex: u, nextZIndex: p } = d, w = C(), m = C(!1), v = C(0);
    let S;
    const _ = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), j = y(() => {
      const W = n.type;
      return { [l.bm("icon", W)]: W && Be[W] };
    }), E = y(() => n.icon || Be[n.type] || ""), g = y(() => tl(n.id)), b = y(() => nl(n.id, n.offset) + g.value), z = y(() => v.value + b.value), A = y(() => ({
      top: `${b.value}px`,
      zIndex: u.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: S } = xn(() => {
        F();
      }, n.duration));
    }
    function q() {
      S?.();
    }
    function F() {
      m.value = !1;
    }
    function ce({ code: W }) {
      W === Ne.esc && F();
    }
    return Ke(() => {
      L(), p(), m.value = !0;
    }), Ge(() => n.repeatNum, () => {
      q(), L();
    }), zn(document, "keydown", ce), di(w, () => {
      v.value = w.value.getBoundingClientRect().height;
    }), t({
      visible: m,
      bottom: z,
      close: F
    }), (W, be) => (k(), J(ct, {
      name: s(l).b("fade"),
      onBeforeLeave: W.onClose,
      onAfterLeave: (_e) => W.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        Z(a("div", {
          id: W.id,
          ref_key: "messageRef",
          ref: w,
          class: x([
            s(l).b(),
            { [s(l).m(W.type)]: W.type },
            s(l).is("center", W.center),
            s(l).is("closable", W.showClose),
            s(l).is("plain", W.plain),
            W.customClass
          ]),
          style: Ee(s(A)),
          role: "alert",
          onMouseenter: q,
          onMouseleave: L
        }, [
          W.repeatNum > 1 ? (k(), J(s(Ji), {
            key: 0,
            value: W.repeatNum,
            type: s(_),
            class: x(s(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          s(E) ? (k(), J(s(Ve), {
            key: 1,
            class: x([s(l).e("icon"), s(j)])
          }, {
            default: se(() => [
              (k(), J(cn(s(E))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          pe(W.$slots, "default", {}, () => [
            W.dangerouslyUseHTMLString ? (k(), O(dt, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: x(s(l).e("content")),
                innerHTML: W.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), O("p", {
              key: 0,
              class: x(s(l).e("content"))
            }, I(W.message), 3))
          ]),
          W.showClose ? (k(), J(s(Ve), {
            key: 2,
            class: x(s(l).e("closeBtn")),
            onClick: G(F, ["stop"])
          }, {
            default: se(() => [
              h(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [Ae, m.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var il = /* @__PURE__ */ Je(sl, [["__file", "message.vue"]]);
let ll = 1;
const Hn = (e) => {
  const t = !e || ie(e) || xe(e) || Se(e) ? { message: e } : e, n = {
    ...$,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ie(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    lt(o) || (o = document.body), n.appendTo = o;
  }
  return Vt(U.grouping) && !n.grouping && (n.grouping = U.grouping), ae(U.duration) && n.duration === 3e3 && (n.duration = U.duration), ae(U.offset) && n.offset === 16 && (n.offset = U.offset), Vt(U.showClose) && !n.showClose && (n.showClose = U.showClose), n;
}, al = (e) => {
  const t = K.indexOf(e);
  if (t === -1)
    return;
  K.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, rl = ({ appendTo: e, ...t }, n) => {
  const o = `message_${ll++}`, l = t.onClose, d = document.createElement("div"), u = {
    ...t,
    id: o,
    onClose: () => {
      l?.(), al(v);
    },
    onDestroy: () => {
      Fe(null, d);
    }
  }, p = h(il, u, Se(u.message) || xe(u.message) ? {
    default: Se(u.message) ? u.message : () => u.message
  } : null);
  p.appContext = n || ge._context, Fe(p, d), e.appendChild(d.firstElementChild);
  const w = p.component, v = {
    id: o,
    vnode: p,
    vm: w,
    handler: {
      close: () => {
        w.exposed.visible.value = !1;
      }
    },
    props: p.component.props
  };
  return v;
}, ge = (e = {}, t) => {
  if (!ue)
    return { close: () => {
    } };
  const n = Hn(e);
  if (n.grouping && K.length) {
    const l = K.find(({ vnode: d }) => {
      var u;
      return ((u = d.props) == null ? void 0 : u.message) === n.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = n.type, l.handler;
  }
  if (ae(U.max) && K.length >= U.max)
    return { close: () => {
    } };
  const o = rl(n, t);
  return K.push(o), o.handler;
};
Rn.forEach((e) => {
  ge[e] = (t = {}, n) => {
    const o = Hn(t);
    return ge({ ...o, type: e }, n);
  };
});
function ul(e) {
  for (const t of K)
    (!e || e === t.props.type) && t.handler.close();
}
ge.closeAll = ul;
ge._context = null;
const cl = An(ge, "$message"), Vn = [
  "success",
  "info",
  "warning",
  "error"
], dl = ye({
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
    type: R([
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
    type: R(Function),
    default: () => {
    }
  },
  onClose: {
    type: R(Function),
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
}), hl = {
  destroy: () => !0
}, fl = N({
  name: "ElNotification"
}), pl = /* @__PURE__ */ N({
  ...fl,
  props: dl,
  emits: hl,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: l } = Mn("notification"), { nextZIndex: d, currentZIndex: u } = l, { Close: p } = Vi, w = C(!1);
    let m;
    const v = y(() => {
      const L = n.type;
      return L && Be[n.type] ? o.m(L) : "";
    }), S = y(() => n.type && Be[n.type] || n.icon), _ = y(() => n.position.endsWith("right") ? "right" : "left"), j = y(() => n.position.startsWith("top") ? "top" : "bottom"), E = y(() => {
      var L;
      return {
        [j.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : u.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: m } = xn(() => {
        w.value && z();
      }, n.duration));
    }
    function b() {
      m?.();
    }
    function z() {
      w.value = !1;
    }
    function A({ code: L }) {
      L === Ne.delete || L === Ne.backspace ? b() : L === Ne.esc ? w.value && z() : g();
    }
    return Ke(() => {
      g(), d(), w.value = !0;
    }), zn(document, "keydown", A), t({
      visible: w,
      close: z
    }), (L, q) => (k(), J(ct, {
      name: s(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (F) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        Z(a("div", {
          id: L.id,
          class: x([s(o).b(), L.customClass, s(_)]),
          style: Ee(s(E)),
          role: "alert",
          onMouseenter: b,
          onMouseleave: g,
          onClick: L.onClick
        }, [
          s(S) ? (k(), J(s(Ve), {
            key: 0,
            class: x([s(o).e("icon"), s(v)])
          }, {
            default: se(() => [
              (k(), J(cn(s(S))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          a("div", {
            class: x(s(o).e("group"))
          }, [
            a("h2", {
              class: x(s(o).e("title")),
              textContent: I(L.title)
            }, null, 10, ["textContent"]),
            Z(a("div", {
              class: x(s(o).e("content")),
              style: Ee(L.title ? void 0 : { margin: 0 })
            }, [
              pe(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (k(), O(dt, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), O("p", { key: 0 }, I(L.message), 1))
              ])
            ], 6), [
              [Ae, L.message]
            ]),
            L.showClose ? (k(), J(s(Ve), {
              key: 0,
              class: x(s(o).e("closeBtn")),
              onClick: G(z, ["stop"])
            }, {
              default: se(() => [
                h(s(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ae, w.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var vl = /* @__PURE__ */ Je(pl, [["__file", "notification.vue"]]);
const Ue = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, rt = 16;
let gl = 1;
const we = function(e = {}, t) {
  if (!ue)
    return { close: () => {
    } };
  (ie(e) || xe(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Ue[n].forEach(({ vm: v }) => {
    var S;
    o += (((S = v.el) == null ? void 0 : S.offsetHeight) || 0) + rt;
  }), o += rt;
  const l = `notification_${gl++}`, d = e.onClose, u = {
    ...e,
    offset: o,
    id: l,
    onClose: () => {
      wl(l, n, d);
    }
  };
  let p = document.body;
  lt(e.appendTo) ? p = e.appendTo : ie(e.appendTo) && (p = document.querySelector(e.appendTo)), lt(p) || (p = document.body);
  const w = document.createElement("div"), m = h(vl, u, Se(u.message) ? u.message : xe(u.message) ? () => u.message : null);
  return m.appContext = Ln(t) ? we._context : t, m.props.onDestroy = () => {
    Fe(null, w);
  }, Fe(m, w), Ue[n].push({ vm: m }), p.appendChild(w.firstElementChild), {
    close: () => {
      m.component.exposed.visible.value = !1;
    }
  };
};
Vn.forEach((e) => {
  we[e] = (t = {}, n) => ((ie(t) || xe(t)) && (t = {
    message: t
  }), we({ ...t, type: e }, n));
});
function wl(e, t, n) {
  const o = Ue[t], l = o.findIndex(({ vm: m }) => {
    var v;
    return ((v = m.component) == null ? void 0 : v.props.id) === e;
  });
  if (l === -1)
    return;
  const { vm: d } = o[l];
  if (!d)
    return;
  n?.(d);
  const u = d.el.offsetHeight, p = t.split("-")[0];
  o.splice(l, 1);
  const w = o.length;
  if (!(w < 1))
    for (let m = l; m < w; m++) {
      const { el: v, component: S } = o[m].vm, _ = Number.parseInt(v.style[p], 10) - u - rt;
      S.props.offset = _;
    }
}
function ml() {
  for (const e of Object.values(Ue))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
we.closeAll = ml;
we._context = null;
const yl = An(we, "$notify"), P = {
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
      showClose: d = !1
    } = e;
    o === "center" ? cl({
      message: t,
      type: n,
      duration: l,
      showClose: d,
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
async function bl() {
  return r("plugin:path|resolve_directory", {
    directory: ut.AppCache
  });
}
async function _l(...e) {
  return r("plugin:path|join", { paths: e });
}
async function tn(e, t) {
  await r("plugin:opener|open_path", {
    path: e,
    with: t
  });
}
const kl = () => ({
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
}), Cl = (e) => e ? /^https?:\/\//i.test(e) ? e : Wo(e) : "", Ll = () => r("wallpaper_get_config"), nt = (e) => r("wallpaper_save_config", { config: e }), nn = () => r("wallpaper_get_status"), on = (e) => r("wallpaper_scan_folder", { path: e }), xl = (e) => r("wallpaper_set_fixed_image", { path: e }), Sl = () => r("wallpaper_switch_now"), Ol = (e) => r("wallpaper_fetch_wallhaven", { params: e }), zl = (e) => r("wallpaper_set_wallhaven_image", { wallpaper: e }), Wl = (e) => r("wallpaper_download_wallhaven_image", { wallpaper: e }), Pl = () => r("wallpaper_clear_cache"), Il = (e, t) => new RegExp(`Command\\s+${t}\\s+not\\s+found`, "i").test(String(e)), jl = async () => {
  try {
    await r("wallpaper_open_cache_dir");
    return;
  } catch (n) {
    if (!Il(n, "wallpaper_open_cache_dir"))
      throw n;
  }
  const e = await bl(), t = await _l(e, "wallpaper-switcher");
  try {
    await tn(t);
  } catch {
    await tn(e);
  }
};
var Tl = {
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
function $l() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ml(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], l = [], d = t.theme || n.theme;
  switch (d) {
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
function H(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(d) {
      var u = $l(), p = oe(Nl, Tl);
      return function() {
        var w = d.size, m = d.strokeWidth, v = d.strokeLinecap, S = d.strokeLinejoin, _ = d.theme, j = d.fill, E = d.spin, g = Ml(u, {
          size: w,
          strokeWidth: m,
          strokeLinecap: v,
          strokeLinejoin: S,
          theme: _,
          fill: j
        }, p), b = [p.prefix + "-icon"];
        return b.push(p.prefix + "-icon-" + e), t && p.rtl && b.push(p.prefix + "-icon-rtl"), E && b.push(p.prefix + "-icon-spin"), h("span", {
          class: b.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const El = H("back", !0, function(e) {
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
}), ot = H("close-small", !1, function(e) {
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
}), Al = H("computer", !1, function(e) {
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
}), Fl = H("delete", !1, function(e) {
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
}), Dl = H("download", !1, function(e) {
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
}), sn = H("folder-open", !0, function(e) {
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
}), Rl = H("lightning", !0, function(e) {
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
}), st = H("picture", !0, function(e) {
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
}), Hl = H("picture-album", !0, function(e) {
  return h("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [h("rect", {
    x: "6",
    y: "6",
    width: "30",
    height: "30",
    rx: "2",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M42 12V39C42 40.6569 40.6569 42 39 42H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M6 19L6 27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), h("path", {
    d: "M36 19V27",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Vl = H("preview-open", !1, function(e) {
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
}), ln = H("refresh", !0, function(e) {
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
}), Bl = H("save", !0, function(e) {
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
}), an = H("search", !0, function(e) {
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
}), Ul = { class: "wallpaper-window" }, Kl = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, Gl = {
  key: 0,
  class: "title"
}, Zl = {
  key: 1,
  class: "title"
}, ql = {
  key: 2,
  class: "window-actions"
}, Jl = {
  key: 3,
  class: "window-actions"
}, Ql = {
  class: "source-toggle",
  role: "tablist",
  "aria-label": "壁纸来源切换"
}, Yl = {
  key: 0,
  class: "unsupported"
}, Xl = { class: "top-panel" }, ea = { class: "preview" }, ta = ["src"], na = {
  key: 1,
  class: "preview-empty"
}, oa = { class: "status-panel" }, sa = { class: "status-row" }, ia = { class: "status-row" }, la = { class: "status-row" }, aa = { class: "status-actions" }, ra = ["disabled"], ua = { class: "card settings-card" }, ca = { class: "form-row mode-row" }, da = { class: "segmented three" }, ha = { class: "form-row fixed-row" }, fa = { class: "form-row folder-row" }, pa = { class: "hint-row" }, va = { class: "form-row wallhaven-row" }, ga = { class: "segmented source" }, wa = { class: "hint-row" }, ma = { class: "card rules-card" }, ya = { class: "rules-line" }, ba = { class: "switch-label" }, _a = { class: "number-label" }, ka = { class: "segmented mini" }, Ca = { class: "rules-line" }, La = { class: "segmented fit" }, xa = { class: "checkbox-label" }, Sa = { class: "footer-card" }, Oa = { class: "cache-info" }, za = { class: "footer-actions" }, Wa = ["disabled"], Pa = ["disabled"], Ia = ["disabled"], ja = {
  key: 2,
  class: "wallhaven-view"
}, Ta = { class: "filters" }, $a = { class: "filter-row filter-main" }, Ma = { class: "search-box" }, Na = { class: "resolution" }, Ea = { class: "filter-row filter-meta" }, Aa = {
  class: "chips",
  role: "tablist",
  "aria-label": "壁纸分类切换"
}, Fa = { class: "grid-wrap" }, Da = {
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
}, Ba = ["onClick"], Ua = { class: "thumb" }, Ka = {
  key: 0,
  class: "thumb-skeleton"
}, Ga = ["alt", "onLoad"], Za = ["onClick"], qa = ["disabled", "onClick"], Ja = ["disabled", "onClick"], Qa = { class: "pager" }, Ya = { class: "source-note" }, Xa = { class: "pager-actions" }, er = ["disabled"], tr = ["disabled"], nr = { class: "preview-dialog" }, or = { class: "preview-image-wrap" }, sr = {
  key: 0,
  class: "preview-skeleton"
}, ir = {
  key: 1,
  class: "preview-error"
}, lr = ["src"], ar = ["disabled"], rr = ["disabled"], ur = /* @__PURE__ */ N({
  __name: "index",
  setup(e) {
    const t = pn(), n = C(kl()), o = C(null), l = C(null), d = C(!1), u = C(!1), p = C(!1), w = C("switcher"), m = C([]), v = C(1), S = C(1), _ = C(!1), j = C(!1), E = C(""), g = C(""), b = C("general"), z = C("hot"), A = C(null), L = C(!1), q = C(!1), F = C(/* @__PURE__ */ new Set()), ce = C(/* @__PURE__ */ new Set()), W = C(!1), be = C(!1), _e = /* @__PURE__ */ new Map();
    let Q = null, yt = null, bt = null, ze = 0;
    const _t = y(() => Cl(o.value?.currentPath)), kt = y(() => "2560 × 1440"), Bn = y(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), Un = y(() => {
      const c = o.value?.nextSwitchAt;
      if (!c) return "18 分钟后";
      const i = Math.max(0, c - Math.floor(Date.now() / 1e3));
      return i < 60 ? `${i} 秒后` : `${Math.ceil(i / 60)} 分钟后`;
    }), Kn = y(() => {
      const c = o.value?.cacheSizeBytes ?? 0;
      return c > 0 ? go(c) : "320 MB";
    }), Ct = y(() => l.value ? `检测到 ${l.value.count} 张可用图片` : "检测到 128 张可用图片"), Gn = y(() => "2560×1440"), Zn = y(() => z.value === "hot" ? "Hot" : "Toplist"), Qe = y(() => m.value.slice(0, 8)), qn = (c) => {
      const i = c.trim(), f = i.toLocaleLowerCase(), M = {
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
      return M[f] ? M[f] : i;
    }, Jn = (c, i) => c.toLocaleLowerCase().split(/\s+/).filter(Boolean).includes(i) ? c : `${c} ${i}`, Qn = (c) => {
      const i = String(c).replace(/^Error:\s*/, "");
      return /unexpected EOF|handshake|timed out|error sending request|client error|Connect/i.test(i) ? "Wallhaven 网络连接失败，请稍后重试或检查代理/网络。" : i.length > 120 ? `${i.slice(0, 120)}...` : i;
    }, Yn = y(() => {
      const c = qn(g.value);
      return b.value === "nature" ? c ? Jn(c, "nature") : "nature" : c || null;
    }), Xn = y(() => b.value), Lt = async () => {
      d.value = !0;
      try {
        const [c, i] = await Promise.all([
          Ll(),
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
        d.value = !1;
      }
    }, ee = async () => {
      try {
        o.value = await nn();
      } catch (c) {
        P.msg(String(c), "error");
      }
    }, xt = async () => {
      u.value = !0;
      try {
        await nt(n.value), await ee(), P.msg("壁纸设置已保存", "success");
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        u.value = !1;
      }
    }, eo = async () => {
      const c = await Et({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof c == "string") {
        n.value.fixedImagePath = c, n.value.mode = "fixed";
        try {
          await xl(c), await Lt(), P.msg("已设置固定壁纸", "success");
        } catch (i) {
          P.msg(String(i), "error");
        }
      }
    }, to = async () => {
      const c = await Et({ multiple: !1, directory: !0 });
      typeof c == "string" && (n.value.folderPath = c, n.value.mode = "folder", await St());
    }, St = async () => {
      if (!n.value.folderPath) {
        P.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        l.value = await on(n.value.folderPath), l.value.count === 0 ? P.msg("文件夹中没有可用图片", "warning") : P.msg(Ct.value, "success");
      } catch (c) {
        P.msg(String(c), "error");
      }
    }, no = async () => {
      p.value = !0;
      try {
        await nt(n.value), await Sl(), await ee(), P.msg("壁纸已切换", "success");
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        p.value = !1;
      }
    }, oo = async () => {
      if (!o.value?.currentPath) {
        P.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await xt();
    }, Ot = async () => {
      g.value = "", b.value = n.value.wallhavenCategory || "general", z.value = n.value.wallhavenSource, v.value = 1, E.value = "", m.value = [], j.value = !1, w.value = "wallhaven", await de(1);
    }, so = async () => {
      w.value = "switcher", Ye(), await ee();
    }, zt = (c) => {
      A.value = c, L.value = !0, q.value = !1;
    }, Ye = () => {
      A.value = null, L.value = !1, q.value = !1;
    }, io = () => {
      L.value = !1;
    }, lo = () => {
      L.value = !1, q.value = !0;
    }, We = (c, i) => {
      const f = new Set(F.value);
      i ? f.add(c) : f.delete(c), F.value = f;
    }, ao = (c) => {
      const i = new Set(ce.value);
      i.add(c), ce.value = i;
    }, ro = (c, i) => {
      if (!(i instanceof HTMLImageElement)) {
        _e.delete(c.id);
        return;
      }
      if (_e.set(c.id, i), !Q) {
        i.src = c.thumbs.large;
        return;
      }
      i.dataset.src = c.thumbs.large, Q.observe(i);
    }, uo = () => {
      ce.value = /* @__PURE__ */ new Set(), _e.clear();
    }, co = async () => {
      n.value.wallhavenQuery = g.value.trim() || null, n.value.wallhavenCategory = b.value, n.value.wallhavenSource = z.value, n.value.mode = "wallhaven", await nt(n.value);
    }, de = async (c = v.value) => {
      const i = ++ze;
      _.value = !0, E.value = "", m.value = [], uo();
      try {
        await co();
        const f = await Ol({
          source: z.value,
          page: c,
          query: Yn.value,
          category: Xn.value
        });
        if (i !== ze) return;
        m.value = f.data, v.value = f.page, S.value = Math.max(1, f.lastPage), j.value = !0, await rn();
        for (const M of _e.values())
          Q && Q.observe(M);
      } catch (f) {
        if (i !== ze) return;
        m.value = [], E.value = Qn(f), P.msg(E.value, "error");
      } finally {
        i === ze && (_.value = !1);
      }
    }, Pe = () => de(1), Ie = async (c) => {
      z.value = c, await de(1);
    }, Y = async (c) => {
      b.value = c, await de(1);
    }, Wt = async (c) => {
      We(c.id, !0);
      try {
        P.msg("正在设置壁纸...", "info"), await zl(c), await ee(), P.msg("壁纸已设置", "success");
      } catch (i) {
        P.msg(String(i), "error");
      } finally {
        We(c.id, !1);
      }
    }, Pt = async (c) => {
      We(c.id, !0);
      try {
        P.msg("正在下载壁纸...", "info"), await Wl(c), await ee(), P.msg("壁纸已下载到缓存", "success");
      } catch (i) {
        P.msg(String(i), "error");
      } finally {
        We(c.id, !1);
      }
    }, ho = async () => {
      v.value <= 1 || await de(v.value - 1);
    }, fo = async () => {
      v.value >= S.value || await de(v.value + 1);
    }, po = async () => {
      W.value = !0;
      try {
        await Pl(), await ee(), P.msg("缓存已清理", "success");
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        W.value = !1;
      }
    }, vo = async () => {
      be.value = !0;
      try {
        await jl();
      } catch (c) {
        P.msg(String(c), "error");
      } finally {
        be.value = !1;
      }
    }, It = async () => {
      await t.close();
    }, go = (c) => c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / 1024 / 1024).toFixed(1)} MB` : `${(c / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return Ke(async () => {
      Q = new IntersectionObserver(
        (c) => {
          for (const i of c) {
            if (!i.isIntersecting) continue;
            const f = i.target, M = f.dataset.src;
            M && f.src !== M && (f.src = M), Q?.unobserve(f);
          }
        },
        { root: null, rootMargin: "120px" }
      ), await Lt(), yt = await De("wallpaper-switcher-changed", ee), bt = await De("wallpaper-switcher-error", (c) => {
        P.msg(c.payload?.message || "定时切换失败", "error");
      });
    }), Lo(() => {
      Q?.disconnect(), Q = null, yt?.(), bt?.();
    }), (c, i) => (k(), O("main", Ul, [
      a("header", Kl, [
        s(w) === "switcher" ? (k(), O("div", Gl, [
          h(s(st), { size: 20 }),
          i[31] || (i[31] = a(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ])) : (k(), O("div", Zl, [
          a("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: so
          }, [
            h(s(El), { size: 22 })
          ]),
          i[32] || (i[32] = a(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ])),
        s(w) === "switcher" ? (k(), O("div", ql, [
          a("button", {
            type: "button",
            class: "icon-btn online-entry-btn",
            title: "打开 Wallhaven 壁纸",
            onClick: Ot
          }, [
            h(s(Hl), { size: 20 })
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: It
          }, [
            h(s(ot), { size: 22 })
          ])
        ])) : (k(), O("div", Jl, [
          a("div", Ql, [
            a(
              "div",
              {
                class: x(["seg-tab", { active: s(z) === "hot", disabled: s(_) }]),
                role: "tab",
                tabindex: "0",
                onClick: i[0] || (i[0] = (f) => !s(_) && Ie("hot")),
                onKeydown: i[1] || (i[1] = te(G((f) => !s(_) && Ie("hot"), ["prevent"]), ["enter"]))
              },
              " 热门 ",
              34
              /* CLASS, NEED_HYDRATION */
            ),
            a(
              "div",
              {
                class: x(["seg-tab", { active: s(z) === "toplist", disabled: s(_) }]),
                role: "tab",
                tabindex: "0",
                onClick: i[2] || (i[2] = (f) => !s(_) && Ie("toplist")),
                onKeydown: i[3] || (i[3] = te(G((f) => !s(_) && Ie("toplist"), ["prevent"]), ["enter"]))
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
            h(s(ot), { size: 22 })
          ])
        ]))
      ]),
      s(o) && !s(o).supported ? (k(), O("section", Yl, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : V("v-if", !0),
      s(w) === "switcher" ? (k(), O(
        "div",
        {
          key: 1,
          class: x(["content", { dimmed: s(d) }])
        },
        [
          a("section", Xl, [
            a("div", ea, [
              s(_t) ? (k(), O("img", {
                key: 0,
                src: s(_t),
                alt: "当前壁纸预览"
              }, null, 8, ta)) : (k(), O("div", na, [
                h(s(st), { size: 42 }),
                i[33] || (i[33] = a(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            a("div", oa, [
              i[37] || (i[37] = a(
                "h2",
                null,
                "当前状态",
                -1
                /* HOISTED */
              )),
              a("div", sa, [
                i[34] || (i[34] = a(
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
              a("div", ia, [
                i[35] || (i[35] = a(
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
              a("div", la, [
                i[36] || (i[36] = a(
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
              a("div", aa, [
                a("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(p),
                  onClick: no
                }, [
                  h(s(Rl), { size: 17 }),
                  T(
                    " " + I(s(p) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, ra),
                a("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: oo
                }, " 设为固定 ")
              ])
            ])
          ]),
          a("section", ua, [
            a("div", ca, [
              i[38] || (i[38] = a(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              a("div", da, [
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).mode === "fixed" }),
                    onClick: i[4] || (i[4] = (f) => s(n).mode = "fixed")
                  },
                  " 固定图片 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).mode === "folder" }),
                    onClick: i[5] || (i[5] = (f) => s(n).mode = "folder")
                  },
                  " 本地文件夹 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).mode === "wallhaven" }),
                    onClick: i[6] || (i[6] = (f) => s(n).mode = "wallhaven")
                  },
                  " Wallhaven 在线 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", ha, [
              i[40] || (i[40] = a(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              Z(a(
                "input",
                {
                  "onUpdate:modelValue": i[7] || (i[7] = (f) => s(n).fixedImagePath = f),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers\\city.png",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [je, s(n).fixedImagePath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: eo
              }, [
                h(s(st), { size: 16 }),
                i[39] || (i[39] = T(" 选择图片 "))
              ])
            ]),
            a("div", fa, [
              i[43] || (i[43] = a(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              Z(a(
                "input",
                {
                  "onUpdate:modelValue": i[8] || (i[8] = (f) => s(n).folderPath = f),
                  class: "path-input",
                  placeholder: "E:\\Wallpapers",
                  spellcheck: "false"
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [je, s(n).folderPath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: to
              }, [
                h(s(sn), { size: 16 }),
                i[41] || (i[41] = T(" 选择 "))
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: St
              }, [
                h(s(ln), { size: 16 }),
                i[42] || (i[42] = T(" 扫描 "))
              ])
            ]),
            a(
              "div",
              pa,
              I(s(Ct)),
              1
              /* TEXT */
            ),
            a("div", va, [
              i[45] || (i[45] = a(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              i[46] || (i[46] = a(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              a("div", ga, [
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).wallhavenSource === "hot" }),
                    onClick: i[9] || (i[9] = (f) => s(n).wallhavenSource = "hot")
                  },
                  " 热门 Hot ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).wallhavenSource === "toplist" }),
                    onClick: i[10] || (i[10] = (f) => s(n).wallhavenSource = "toplist")
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
                h(s(an), { size: 16 }),
                i[44] || (i[44] = T(" 打开在线网格 "))
              ])
            ]),
            a("div", wa, [
              i[47] || (i[47] = a(
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
          a("section", ma, [
            i[55] || (i[55] = a(
              "h2",
              null,
              "切换规则",
              -1
              /* HOISTED */
            )),
            a("div", ya, [
              a("label", ba, [
                Z(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[11] || (i[11] = (f) => s(n).scheduleEnabled = f),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [jt, s(n).scheduleEnabled]
                ]),
                i[48] || (i[48] = a(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                )),
                i[49] || (i[49] = T(" 启用定时切换 "))
              ]),
              a("label", _a, [
                i[50] || (i[50] = T(" 每 ")),
                Z(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[12] || (i[12] = (f) => s(n).intervalMinutes = f),
                    type: "number",
                    min: "1",
                    max: "1440"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [
                    je,
                    s(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                i[51] || (i[51] = T(" 分钟 "))
              ]),
              i[52] || (i[52] = a(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              a("div", ka, [
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).order === "random" }),
                    onClick: i[13] || (i[13] = (f) => s(n).order = "random")
                  },
                  " 随机 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).order === "sequential" }),
                    onClick: i[14] || (i[14] = (f) => s(n).order = "sequential")
                  },
                  " 顺序 ",
                  2
                  /* CLASS */
                )
              ])
            ]),
            a("div", Ca, [
              i[54] || (i[54] = a(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              a("div", La, [
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).fitMode === "fillCrop" }),
                    onClick: i[15] || (i[15] = (f) => s(n).fitMode = "fillCrop")
                  },
                  " 填充裁切 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).fitMode === "fit" }),
                    onClick: i[16] || (i[16] = (f) => s(n).fitMode = "fit")
                  },
                  " 适应 ",
                  2
                  /* CLASS */
                ),
                a(
                  "button",
                  {
                    type: "button",
                    class: x({ active: s(n).fitMode === "center" }),
                    onClick: i[17] || (i[17] = (f) => s(n).fitMode = "center")
                  },
                  " 居中 ",
                  2
                  /* CLASS */
                )
              ]),
              a("label", xa, [
                Z(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[18] || (i[18] = (f) => s(n).autoRestore = f),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [jt, s(n).autoRestore]
                ]),
                i[53] || (i[53] = T(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          a("footer", Sa, [
            a("div", Oa, [
              i[56] || (i[56] = a(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              i[57] || (i[57] = a(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              a(
                "span",
                null,
                I(s(Kn)),
                1
                /* TEXT */
              )
            ]),
            a("div", za, [
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(W),
                onClick: po
              }, [
                h(s(Fl), { size: 16 }),
                T(
                  " " + I(s(W) ? "清理中" : "清理缓存"),
                  1
                  /* TEXT */
                )
              ], 8, Wa),
              a("button", {
                type: "button",
                class: "secondary-btn",
                disabled: s(be),
                onClick: vo
              }, [
                h(s(sn), { size: 16 }),
                T(
                  " " + I(s(be) ? "打开中" : "打开缓存"),
                  1
                  /* TEXT */
                )
              ], 8, Pa),
              a("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(u),
                onClick: xt
              }, [
                h(s(Bl), { size: 17 }),
                T(
                  " " + I(s(u) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, Ia)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (k(), O("div", ja, [
        a("section", Ta, [
          a("div", $a, [
            a("div", Ma, [
              Z(a(
                "input",
                {
                  "onUpdate:modelValue": i[19] || (i[19] = (f) => un(g) ? g.value = f : null),
                  type: "search",
                  placeholder: "搜索关键词",
                  onKeydown: te(Pe, ["enter"])
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              ), [
                [je, s(g)]
              ]),
              a("button", {
                type: "button",
                title: "搜索",
                onClick: Pe
              }, [
                h(s(an), { size: 18 })
              ])
            ]),
            a("label", Na, [
              i[58] || (i[58] = a(
                "span",
                null,
                "分辨率",
                -1
                /* HOISTED */
              )),
              a(
                "strong",
                null,
                "自动匹配 " + I(s(Gn)),
                1
                /* TEXT */
              )
            ]),
            a("button", {
              type: "button",
              class: "refresh-btn",
              title: "刷新",
              onClick: Pe
            }, [
              h(s(ln), {
                size: 18,
                class: x({ spinning: s(_) })
              }, null, 8, ["class"])
            ])
          ]),
          a("div", Ea, [
            a("div", Aa, [
              a(
                "div",
                {
                  class: x(["chip-tab", { active: s(b) === "general", disabled: s(_) }]),
                  role: "tab",
                  tabindex: "0",
                  onClick: i[20] || (i[20] = (f) => !s(_) && Y("general")),
                  onKeydown: i[21] || (i[21] = te(G((f) => !s(_) && Y("general"), ["prevent"]), ["enter"]))
                },
                " 通用 ",
                34
                /* CLASS, NEED_HYDRATION */
              ),
              a(
                "div",
                {
                  class: x(["chip-tab", { active: s(b) === "anime", disabled: s(_) }]),
                  role: "tab",
                  tabindex: "0",
                  onClick: i[22] || (i[22] = (f) => !s(_) && Y("anime")),
                  onKeydown: i[23] || (i[23] = te(G((f) => !s(_) && Y("anime"), ["prevent"]), ["enter"]))
                },
                " 动漫 ",
                34
                /* CLASS, NEED_HYDRATION */
              ),
              a(
                "div",
                {
                  class: x(["chip-tab", { active: s(b) === "people", disabled: s(_) }]),
                  role: "tab",
                  tabindex: "0",
                  onClick: i[24] || (i[24] = (f) => !s(_) && Y("people")),
                  onKeydown: i[25] || (i[25] = te(G((f) => !s(_) && Y("people"), ["prevent"]), ["enter"]))
                },
                " 人物 ",
                34
                /* CLASS, NEED_HYDRATION */
              ),
              a(
                "div",
                {
                  class: x(["chip-tab", { active: s(b) === "nature", disabled: s(_) }]),
                  role: "tab",
                  tabindex: "0",
                  onClick: i[26] || (i[26] = (f) => !s(_) && Y("nature")),
                  onKeydown: i[27] || (i[27] = te(G((f) => !s(_) && Y("nature"), ["prevent"]), ["enter"]))
                },
                " 自然 ",
                34
                /* CLASS, NEED_HYDRATION */
              )
            ])
          ])
        ]),
        a("section", Fa, [
          s(_) && s(Qe).length === 0 ? (k(), O("div", Da, "正在加载 Wallhaven 壁纸...")) : s(E) ? (k(), O("div", Ra, [
            a(
              "span",
              null,
              I(s(E)),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              onClick: Pe
            }, "重试")
          ])) : s(Qe).length === 0 ? (k(), O("div", Ha, "暂无可用壁纸")) : (k(), O("div", Va, [
            (k(!0), O(
              dt,
              null,
              xo(s(Qe), (f) => (k(), O("article", {
                key: f.id,
                class: "wallpaper-card",
                onClick: (M) => zt(f)
              }, [
                a("div", Ua, [
                  s(ce).has(f.id) ? V("v-if", !0) : (k(), O("div", Ka)),
                  a("img", {
                    ref_for: !0,
                    ref: (M) => ro(f, M),
                    alt: f.resolution,
                    loading: "lazy",
                    onLoad: (M) => ao(f.id)
                  }, null, 40, Ga),
                  a(
                    "span",
                    null,
                    I(f.resolution),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", {
                  class: "card-actions",
                  onClick: i[28] || (i[28] = G(() => {
                  }, ["stop"]))
                }, [
                  a("button", {
                    type: "button",
                    title: "预览",
                    onClick: (M) => zt(f)
                  }, [
                    h(s(Vl), { size: 16 }),
                    i[59] || (i[59] = T(" 预览 "))
                  ], 8, Za),
                  a("button", {
                    type: "button",
                    title: "设为壁纸",
                    disabled: s(F).has(f.id),
                    onClick: (M) => Wt(f)
                  }, [
                    h(s(Al), { size: 16 }),
                    T(
                      " " + I(s(F).has(f.id) ? "设置中" : "设为"),
                      1
                      /* TEXT */
                    )
                  ], 8, qa),
                  a("button", {
                    type: "button",
                    title: "下载",
                    disabled: s(F).has(f.id),
                    onClick: (M) => Pt(f)
                  }, [
                    h(s(Dl), { size: 16 }),
                    i[60] || (i[60] = T(" 下载 "))
                  ], 8, Ja)
                ])
              ], 8, Ba))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        a("footer", Qa, [
          a(
            "span",
            null,
            "第 " + I(s(v)) + " 页",
            1
            /* TEXT */
          ),
          a(
            "span",
            Ya,
            "来源：" + I(s(Zn)) + " · SFW",
            1
            /* TEXT */
          ),
          a("div", Xa, [
            a("button", {
              type: "button",
              disabled: s(v) <= 1 || s(_),
              onClick: ho
            }, "上一页", 8, er),
            a("button", {
              type: "button",
              disabled: s(v) >= s(S) || s(_),
              onClick: fo
            }, "下一页", 8, tr)
          ])
        ])
      ])),
      s(A) ? (k(), O("div", {
        key: 3,
        class: "preview-modal",
        onClick: G(Ye, ["self"])
      }, [
        a("div", nr, [
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
              onClick: Ye
            }, [
              h(s(ot), { size: 23 })
            ])
          ]),
          a("div", or, [
            s(L) ? (k(), O("div", sr, i[61] || (i[61] = [
              a(
                "span",
                null,
                "加载预览...",
                -1
                /* HOISTED */
              )
            ]))) : V("v-if", !0),
            s(q) ? (k(), O("div", ir, "预览加载失败")) : V("v-if", !0),
            a("img", {
              class: x({ ready: !s(L) && !s(q) }),
              src: s(A).path,
              alt: "壁纸预览",
              onLoad: io,
              onError: lo
            }, null, 42, lr)
          ]),
          a("footer", null, [
            a("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(F).has(s(A).id),
              onClick: i[29] || (i[29] = (f) => Pt(s(A)))
            }, " 下载缓存 ", 8, ar),
            a("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(F).has(s(A).id),
              onClick: i[30] || (i[30] = (f) => Wt(s(A)))
            }, I(s(F).has(s(A).id) ? "设置中" : "设为壁纸"), 9, rr)
          ])
        ])
      ])) : V("v-if", !0)
    ]));
  }
}), cr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, dr = /* @__PURE__ */ cr(ur, [["__scopeId", "data-v-11624cef"]]), hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" }));
export {
  pr as activate
};
