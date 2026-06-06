import { getCurrentInstance as re, inject as X, ref as x, computed as b, unref as s, readonly as qn, getCurrentScope as Qn, onScopeDispose as Yn, onMounted as Fe, nextTick as qt, watch as Ae, isRef as et, warn as Xn, provide as eo, defineComponent as M, createElementBlock as O, openBlock as _, mergeProps as to, renderSlot as ue, createElementVNode as a, normalizeClass as L, createVNode as d, Transition as it, withCtx as ee, withDirectives as V, normalizeStyle as Ie, createTextVNode as N, toDisplayString as T, vShow as We, shallowReactive as no, createBlock as K, createCommentVNode as Z, resolveDynamicComponent as Qt, Fragment as lt, withModifiers as Te, isVNode as we, render as je, onUnmounted as oo, vModelText as Se, vModelCheckbox as Ct, withKeys as so, vModelSelect as io, renderList as lo } from "vue";
const Aa = (e) => {
  e.registerRoute({
    target: "window",
    path: "/wallpaper-switcher",
    name: "WallpaperSwitcher",
    component: () => Promise.resolve().then(() => Da)
  }), e.registerWindowShortcut({
    label: "wallpaper_switcher"
  });
};
function ao(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function ro(e, t, n, o, l) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var xe;
const R = "__TAURI_TO_IPC_KEY__";
function uo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function co(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class ho {
  get rid() {
    return ao(this, xe, "f");
  }
  constructor(t) {
    xe.set(this, void 0), ro(this, xe, t);
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
xe = /* @__PURE__ */ new WeakMap();
var D;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(D || (D = {}));
async function Yt(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Pe(e, t, n) {
  var o;
  const l = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: l,
    handler: uo(t)
  }).then((c) => async () => Yt(e, c));
}
async function fo(e, t, n) {
  return Pe(e, (o) => {
    Yt(e, o.id), t(o);
  }, n);
}
async function po(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function go(e, t, n) {
  await r("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Xt {
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
    return new Xt(this.width / t, this.height / t);
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
class ae {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Xt ? this.size : this.size.toLogical(t);
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
class en {
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
    return new en(this.x / t, this.y / t);
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
class Le {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof en ? this.position : this.position.toLogical(t);
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
class ye extends ho {
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
      rgba: Ne(t),
      width: n,
      height: o
    }).then((l) => new ye(l));
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
      bytes: Ne(t)
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
    return r("plugin:image|from_path", { path: t }).then((n) => new ye(n));
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
function Ne(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ye ? e.rid : e;
}
var tt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(tt || (tt = {}));
class vo {
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
var St;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(St || (St = {}));
function tn() {
  return new nn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Ke() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new nn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Je = ["tauri://created", "tauri://error"];
class nn {
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
    return (n = (await Ke()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return tn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Ke();
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
    for (const t of await Ke())
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
    } : fo(t, n, {
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
    if (Je.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return po(t, n);
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
    if (Je.includes(n)) {
      for (const l of this.listeners[n] || [])
        l({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return go(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Je.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return r("plugin:window|outer_position", {
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
    return r("plugin:window|inner_size", {
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
    return r("plugin:window|outer_size", {
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
    return t && (t === tt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), r("plugin:window|request_user_attention", {
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
      value: t instanceof ae ? t : new ae(t)
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
      value: t instanceof ae ? t : t ? new ae(t) : null
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
      value: t instanceof ae ? t : t ? new ae(t) : null
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
      value: t instanceof Le ? t : new Le(t)
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
      value: Ne(t)
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
      value: t instanceof Le ? t : new Le(t)
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
      value: t ? Ne(t) : void 0
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
      const o = new vo(n);
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
          position: new q(u.payload.position)
        }
      });
    }), o = await this.listen(D.DRAG_OVER, (u) => {
      t({
        ...u,
        payload: {
          type: "over",
          position: new q(u.payload.position)
        }
      });
    }), l = await this.listen(D.DRAG_DROP, (u) => {
      t({
        ...u,
        payload: {
          type: "drop",
          paths: u.payload.paths,
          position: new q(u.payload.position)
        }
      });
    }), c = await this.listen(D.DRAG_LEAVE, (u) => {
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
var Lt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Lt || (Lt = {}));
var xt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(xt || (xt = {}));
var Ot;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ot || (Ot = {}));
async function zt(e = {}) {
  return typeof e == "object" && Object.freeze(e), await r("plugin:dialog|open", { options: e });
}
const on = Symbol(), Oe = "el", yo = "is-", Y = (e, t, n, o, l) => {
  let c = `${e}-${t}`;
  return n && (c += `-${n}`), o && (c += `__${o}`), l && (c += `--${l}`), c;
}, sn = Symbol("namespaceContextKey"), wo = (e) => {
  const t = e || (re() ? X(sn, x(Oe)) : x(Oe));
  return b(() => s(t) || Oe);
}, at = (e, t) => {
  const n = wo(t);
  return {
    namespace: n,
    b: (g = "") => Y(n.value, e, g, "", ""),
    e: (g) => g ? Y(n.value, e, "", g, "") : "",
    m: (g) => g ? Y(n.value, e, "", "", g) : "",
    be: (g, w) => g && w ? Y(n.value, e, g, w, "") : "",
    em: (g, w) => g && w ? Y(n.value, e, "", g, w) : "",
    bm: (g, w) => g && w ? Y(n.value, e, g, "", w) : "",
    bem: (g, w, k) => g && w && k ? Y(n.value, e, g, w, k) : "",
    is: (g, ...w) => {
      const k = w.length >= 1 ? w[0] : !0;
      return g && k ? `${yo}${g}` : "";
    },
    cssVar: (g) => {
      const w = {};
      for (const k in g)
        g[k] && (w[`--${n.value}-${k}`] = g[k]);
      return w;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const w = {};
      for (const k in g)
        g[k] && (w[`--${n.value}-${e}-${k}`] = g[k]);
      return w;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const mo = Object.prototype.hasOwnProperty, It = (e, t) => mo.call(e, t), me = (e) => typeof e == "function", te = (e) => typeof e == "string", ln = (e) => e !== null && typeof e == "object";
var bo = typeof global == "object" && global && global.Object === Object && global, _o = typeof self == "object" && self && self.Object === Object && self, rt = bo || _o || Function("return this")(), ce = rt.Symbol, an = Object.prototype, ko = an.hasOwnProperty, Co = an.toString, ge = ce ? ce.toStringTag : void 0;
function So(e) {
  var t = ko.call(e, ge), n = e[ge];
  try {
    e[ge] = void 0;
    var o = !0;
  } catch {
  }
  var l = Co.call(e);
  return o && (t ? e[ge] = n : delete e[ge]), l;
}
var Lo = Object.prototype, xo = Lo.toString;
function Oo(e) {
  return xo.call(e);
}
var zo = "[object Null]", Io = "[object Undefined]", Wt = ce ? ce.toStringTag : void 0;
function rn(e) {
  return e == null ? e === void 0 ? Io : zo : Wt && Wt in Object(e) ? So(e) : Oo(e);
}
function Wo(e) {
  return e != null && typeof e == "object";
}
var To = "[object Symbol]";
function ut(e) {
  return typeof e == "symbol" || Wo(e) && rn(e) == To;
}
function jo(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = Array(o); ++n < o; )
    l[n] = t(e[n], n, e);
  return l;
}
var ct = Array.isArray, Tt = ce ? ce.prototype : void 0, jt = Tt ? Tt.toString : void 0;
function un(e) {
  if (typeof e == "string")
    return e;
  if (ct(e))
    return jo(e, un) + "";
  if (ut(e))
    return jt ? jt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function cn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Po = "[object AsyncFunction]", No = "[object Function]", Mo = "[object GeneratorFunction]", $o = "[object Proxy]";
function Eo(e) {
  if (!cn(e))
    return !1;
  var t = rn(e);
  return t == No || t == Mo || t == Po || t == $o;
}
var qe = rt["__core-js_shared__"], Pt = function() {
  var e = /[^.]+$/.exec(qe && qe.keys && qe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Do(e) {
  return !!Pt && Pt in e;
}
var Fo = Function.prototype, Ao = Fo.toString;
function Bo(e) {
  if (e != null) {
    try {
      return Ao.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ro = /[\\^$.*+?()[\]{}|]/g, Ho = /^\[object .+?Constructor\]$/, Vo = Function.prototype, Uo = Object.prototype, Go = Vo.toString, Zo = Uo.hasOwnProperty, Ko = RegExp(
  "^" + Go.call(Zo).replace(Ro, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jo(e) {
  if (!cn(e) || Do(e))
    return !1;
  var t = Eo(e) ? Ko : Ho;
  return t.test(Bo(e));
}
function qo(e, t) {
  return e?.[t];
}
function dn(e, t) {
  var n = qo(e, t);
  return Jo(n) ? n : void 0;
}
function Qo(e, t) {
  return e === t || e !== e && t !== t;
}
var Yo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xo = /^\w*$/;
function es(e, t) {
  if (ct(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ut(e) ? !0 : Xo.test(e) || !Yo.test(e) || t != null && e in Object(t);
}
var be = dn(Object, "create");
function ts() {
  this.__data__ = be ? be(null) : {}, this.size = 0;
}
function ns(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var os = "__lodash_hash_undefined__", ss = Object.prototype, is = ss.hasOwnProperty;
function ls(e) {
  var t = this.__data__;
  if (be) {
    var n = t[e];
    return n === os ? void 0 : n;
  }
  return is.call(t, e) ? t[e] : void 0;
}
var as = Object.prototype, rs = as.hasOwnProperty;
function us(e) {
  var t = this.__data__;
  return be ? t[e] !== void 0 : rs.call(t, e);
}
var cs = "__lodash_hash_undefined__";
function ds(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = be && t === void 0 ? cs : t, this;
}
function ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ne.prototype.clear = ts;
ne.prototype.delete = ns;
ne.prototype.get = ls;
ne.prototype.has = us;
ne.prototype.set = ds;
function hs() {
  this.__data__ = [], this.size = 0;
}
function Be(e, t) {
  for (var n = e.length; n--; )
    if (Qo(e[n][0], t))
      return n;
  return -1;
}
var fs = Array.prototype, ps = fs.splice;
function gs(e) {
  var t = this.__data__, n = Be(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : ps.call(t, n, 1), --this.size, !0;
}
function vs(e) {
  var t = this.__data__, n = Be(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ys(e) {
  return Be(this.__data__, e) > -1;
}
function ws(e, t) {
  var n = this.__data__, o = Be(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function fe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
fe.prototype.clear = hs;
fe.prototype.delete = gs;
fe.prototype.get = vs;
fe.prototype.has = ys;
fe.prototype.set = ws;
var ms = dn(rt, "Map");
function bs() {
  this.size = 0, this.__data__ = {
    hash: new ne(),
    map: new (ms || fe)(),
    string: new ne()
  };
}
function _s(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Re(e, t) {
  var n = e.__data__;
  return _s(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ks(e) {
  var t = Re(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Cs(e) {
  return Re(this, e).get(e);
}
function Ss(e) {
  return Re(this, e).has(e);
}
function Ls(e, t) {
  var n = Re(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function se(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
se.prototype.clear = bs;
se.prototype.delete = ks;
se.prototype.get = Cs;
se.prototype.has = Ss;
se.prototype.set = Ls;
var xs = "Expected a function";
function dt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(xs);
  var n = function() {
    var o = arguments, l = t ? t.apply(this, o) : o[0], c = n.cache;
    if (c.has(l))
      return c.get(l);
    var u = e.apply(this, o);
    return n.cache = c.set(l, u) || c, u;
  };
  return n.cache = new (dt.Cache || se)(), n;
}
dt.Cache = se;
var Os = 500;
function zs(e) {
  var t = dt(e, function(o) {
    return n.size === Os && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Is = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ws = /\\(\\)?/g, Ts = zs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Is, function(n, o, l, c) {
    t.push(l ? c.replace(Ws, "$1") : o || n);
  }), t;
});
function js(e) {
  return e == null ? "" : un(e);
}
function Ps(e, t) {
  return ct(e) ? e : es(e, t) ? [e] : Ts(js(e));
}
function Ns(e) {
  if (typeof e == "string" || ut(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ms(e, t) {
  t = Ps(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Ns(t[n++])];
  return n && n == o ? e : void 0;
}
function $s(e, t, n) {
  var o = e == null ? void 0 : Ms(e, t);
  return o === void 0 ? n : o;
}
function Es(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
const hn = (e) => e === void 0, Nt = (e) => typeof e == "boolean", oe = (e) => typeof e == "number", nt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ds = (e) => te(e) ? !Number.isNaN(Number(e)) : !1;
var Mt;
const ie = typeof window < "u", Fs = (e) => typeof e == "string", As = () => {
};
ie && ((Mt = window?.navigator) != null && Mt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ht(e) {
  return typeof e == "function" ? e() : s(e);
}
function Bs(e) {
  return e;
}
function ft(e) {
  return Qn() ? (Yn(e), !0) : !1;
}
function Rs(e, t = !0) {
  re() ? Fe(e) : t ? e() : qt(e);
}
function fn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, l = x(!1);
  let c = null;
  function u() {
    c && (clearTimeout(c), c = null);
  }
  function h() {
    l.value = !1, u();
  }
  function y(...m) {
    u(), l.value = !0, c = setTimeout(() => {
      l.value = !1, c = null, e(...m);
    }, ht(t));
  }
  return o && (l.value = !0, ie && y()), ft(h), {
    isPending: qn(l),
    start: y,
    stop: h
  };
}
function pn(e) {
  var t;
  const n = ht(e);
  return (t = n?.$el) != null ? t : n;
}
const gn = ie ? window : void 0;
function vn(...e) {
  let t, n, o, l;
  if (Fs(e[0]) || Array.isArray(e[0]) ? ([n, o, l] = e, t = gn) : [t, n, o, l] = e, !t)
    return As;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const c = [], u = () => {
    c.forEach((v) => v()), c.length = 0;
  }, h = (v, C, W, j) => (v.addEventListener(C, W, j), () => v.removeEventListener(C, W, j)), y = Ae(() => [pn(t), ht(l)], ([v, C]) => {
    u(), v && c.push(...n.flatMap((W) => o.map((j) => h(v, W, j, C))));
  }, { immediate: !0, flush: "post" }), m = () => {
    y(), u();
  };
  return ft(m), m;
}
function Hs(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), Rs(o, t), n;
}
const $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Et = "__vueuse_ssr_handlers__";
$t[Et] = $t[Et] || {};
var Dt = Object.getOwnPropertySymbols, Vs = Object.prototype.hasOwnProperty, Us = Object.prototype.propertyIsEnumerable, Gs = (e, t) => {
  var n = {};
  for (var o in e)
    Vs.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Dt)
    for (var o of Dt(e))
      t.indexOf(o) < 0 && Us.call(e, o) && (n[o] = e[o]);
  return n;
};
function Zs(e, t, n = {}) {
  const o = n, { window: l = gn } = o, c = Gs(o, ["window"]);
  let u;
  const h = Hs(() => l && "ResizeObserver" in l), y = () => {
    u && (u.disconnect(), u = void 0);
  }, m = Ae(() => pn(e), (C) => {
    y(), h.value && l && C && (u = new ResizeObserver(t), u.observe(C, c));
  }, { immediate: !0, flush: "post" }), v = () => {
    y(), m();
  };
  return ft(v), {
    isSupported: h,
    stop: v
  };
}
var Ft;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ft || (Ft = {}));
var Ks = Object.defineProperty, At = Object.getOwnPropertySymbols, Js = Object.prototype.hasOwnProperty, qs = Object.prototype.propertyIsEnumerable, Bt = (e, t, n) => t in e ? Ks(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qs = (e, t) => {
  for (var n in t || (t = {}))
    Js.call(t, n) && Bt(e, n, t[n]);
  if (At)
    for (var n of At(t))
      qs.call(t, n) && Bt(e, n, t[n]);
  return e;
};
const Ys = {
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
Qs({
  linear: Bs
}, Ys);
const Rt = {
  current: 0
}, Ht = x(0), yn = 2e3, Vt = Symbol("elZIndexContextKey"), wn = Symbol("zIndexContextKey"), Xs = (e) => {
  const t = re() ? X(Vt, Rt) : Rt, n = e || (re() ? X(wn, void 0) : void 0), o = b(() => {
    const u = s(n);
    return oe(u) ? u : yn;
  }), l = b(() => o.value + Ht.value), c = () => (t.current++, Ht.value = t.current, l.value);
  return !ie && X(Vt), {
    initialZIndex: o,
    currentZIndex: l,
    nextZIndex: c
  };
};
var ei = {
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
const ti = (e) => (t, n) => ni(t, n, s(e)), ni = (e, t, n) => $s(n, e, e).replace(/\{(\w+)\}/g, (o, l) => {
  var c;
  return `${(c = t?.[l]) != null ? c : `{${l}}`}`;
}), oi = (e) => {
  const t = b(() => s(e).name), n = et(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: ti(e)
  };
}, mn = Symbol("localeContextKey"), si = (e) => {
  const t = e || X(mn, x());
  return oi(b(() => t.value || ei));
}, bn = "__epPropKey", F = (e) => e, ii = (e) => ln(e) && !!e[bn], _n = (e, t) => {
  if (!ln(e) || ii(e))
    return e;
  const { values: n, required: o, default: l, type: c, validator: u } = e, y = {
    type: c,
    required: !!o,
    validator: n || u ? (m) => {
      let v = !1, C = [];
      if (n && (C = Array.from(n), It(e, "default") && C.push(l), v || (v = C.includes(m))), u && (v || (v = u(m))), !v && C.length > 0) {
        const W = [...new Set(C)].map((j) => JSON.stringify(j)).join(", ");
        Xn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${W}], got value ${JSON.stringify(m)}.`);
      }
      return v;
    } : void 0,
    [bn]: !0
  };
  return It(e, "default") && (y.default = l), y;
}, pe = (e) => Es(Object.entries(e).map(([t, n]) => [
  t,
  _n(n, t)
])), li = ["", "default", "small", "large"], ai = _n({
  type: String,
  values: li,
  required: !1
}), ri = Symbol("size"), ui = Symbol("emptyValuesContextKey"), ci = pe({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => me(e) ? !e() : !e
  }
}), Ut = (e) => Object.keys(e), Me = x();
function kn(e, t = void 0) {
  return re() ? X(on, Me) : Me;
}
function Cn(e, t) {
  const n = kn(), o = at(e, b(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.namespace) || Oe;
  })), l = si(b(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.locale;
  })), c = Xs(b(() => {
    var h;
    return ((h = n.value) == null ? void 0 : h.zIndex) || yn;
  })), u = b(() => {
    var h;
    return s(t) || ((h = n.value) == null ? void 0 : h.size) || "";
  });
  return Sn(b(() => s(n) || {})), {
    ns: o,
    locale: l,
    zIndex: c,
    size: u
  };
}
const Sn = (e, t, n = !1) => {
  var o;
  const l = !!re(), c = l ? kn() : void 0, u = (o = void 0) != null ? o : l ? eo : void 0;
  if (!u)
    return;
  const h = b(() => {
    const y = s(e);
    return c?.value ? di(c.value, y) : y;
  });
  return u(on, h), u(mn, b(() => h.value.locale)), u(sn, b(() => h.value.namespace)), u(wn, b(() => h.value.zIndex)), u(ri, {
    size: b(() => h.value.size || "")
  }), u(ui, b(() => ({
    emptyValues: h.value.emptyValues,
    valueOnClear: h.value.valueOnClear
  }))), (n || !Me.value) && (Me.value = h.value), h;
}, di = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ut(e), ...Ut(t)])], o = {};
  for (const l of n)
    o[l] = t[l] !== void 0 ? t[l] : e[l];
  return o;
};
var He = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
function ot(e, t = "px") {
  if (!e)
    return "";
  if (oe(e) || Ds(e))
    return `${e}${t}`;
  if (te(e))
    return e;
}
const Ln = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), xn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), hi = pe({
  size: {
    type: F([Number, String])
  },
  color: {
    type: String
  }
}), fi = M({
  name: "ElIcon",
  inheritAttrs: !1
}), pi = /* @__PURE__ */ M({
  ...fi,
  props: hi,
  setup(e) {
    const t = e, n = at("icon"), o = b(() => {
      const { size: l, color: c } = t;
      return !l && !c ? {} : {
        fontSize: hn(l) ? void 0 : ot(l),
        "--color": c
      };
    });
    return (l, c) => (_(), O("i", to({
      class: s(n).b(),
      style: s(o)
    }, l.$attrs), [
      ue(l.$slots, "default")
    ], 16));
  }
});
var gi = /* @__PURE__ */ He(pi, [["__file", "icon.vue"]]);
const $e = Ln(gi);
/*! Element Plus Icons Vue v2.3.1 */
var vi = /* @__PURE__ */ M({
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
}), yi = vi, wi = /* @__PURE__ */ M({
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
}), On = wi, mi = /* @__PURE__ */ M({
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
}), bi = mi, _i = /* @__PURE__ */ M({
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
}), ki = _i, Ci = /* @__PURE__ */ M({
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
}), Si = Ci;
const zn = F([
  String,
  Object,
  Function
]), Li = {
  Close: On
}, xi = {
  Close: On
}, Ee = {
  success: ki,
  warning: Si,
  error: yi,
  info: bi
}, Oi = (e) => e, ze = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, zi = pe({
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
}), Ii = M({
  name: "ElBadge"
}), Wi = /* @__PURE__ */ M({
  ...Ii,
  props: zi,
  setup(e, { expose: t }) {
    const n = e, o = at("badge"), l = b(() => n.isDot ? "" : oe(n.value) && oe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), c = b(() => {
      var u, h, y, m, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: ot(-((h = (u = n.offset) == null ? void 0 : u[0]) != null ? h : 0)),
          marginTop: ot((m = (y = n.offset) == null ? void 0 : y[1]) != null ? m : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: l
    }), (u, h) => (_(), O("div", {
      class: L(s(o).b())
    }, [
      ue(u.$slots, "default"),
      d(it, {
        name: `${s(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ee(() => [
          V(a("sup", {
            class: L([
              s(o).e("content"),
              s(o).em("content", u.type),
              s(o).is("fixed", !!u.$slots.default),
              s(o).is("dot", u.isDot),
              s(o).is("hide-zero", !u.showZero && n.value === 0),
              u.badgeClass
            ]),
            style: Ie(s(c))
          }, [
            ue(u.$slots, "content", { value: s(l) }, () => [
              N(T(s(l)), 1)
            ])
          ], 6), [
            [We, !u.hidden && (s(l) || u.isDot || u.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ti = /* @__PURE__ */ He(Wi, [["__file", "badge.vue"]]);
const ji = Ln(Ti), Pi = pe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: F(Object)
  },
  size: ai,
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
  ...ci
}), H = {};
M({
  name: "ElConfigProvider",
  props: Pi,
  setup(e, { slots: t }) {
    Ae(() => e.message, (o) => {
      Object.assign(H, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Sn(e);
    return () => ue(t, "default", { config: n?.value });
  }
});
const In = ["success", "info", "warning", "error"], P = Oi({
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
  appendTo: ie ? document.body : void 0
}), Ni = pe({
  customClass: {
    type: String,
    default: P.customClass
  },
  center: {
    type: Boolean,
    default: P.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: P.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: P.duration
  },
  icon: {
    type: zn,
    default: P.icon
  },
  id: {
    type: String,
    default: P.id
  },
  message: {
    type: F([
      String,
      Object,
      Function
    ]),
    default: P.message
  },
  onClose: {
    type: F(Function),
    default: P.onClose
  },
  showClose: {
    type: Boolean,
    default: P.showClose
  },
  type: {
    type: String,
    values: In,
    default: P.type
  },
  plain: {
    type: Boolean,
    default: P.plain
  },
  offset: {
    type: Number,
    default: P.offset
  },
  zIndex: {
    type: Number,
    default: P.zIndex
  },
  grouping: {
    type: Boolean,
    default: P.grouping
  },
  repeatNum: {
    type: Number,
    default: P.repeatNum
  }
}), Mi = {
  destroy: () => !0
}, U = no([]), $i = (e) => {
  const t = U.findIndex((l) => l.id === e), n = U[t];
  let o;
  return t > 0 && (o = U[t - 1]), { current: n, prev: o };
}, Ei = (e) => {
  const { prev: t } = $i(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Di = (e, t) => U.findIndex((o) => o.id === e) > 0 ? 16 : t, Fi = M({
  name: "ElMessage"
}), Ai = /* @__PURE__ */ M({
  ...Fi,
  props: Ni,
  emits: Mi,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = xi, { ns: l, zIndex: c } = Cn("message"), { currentZIndex: u, nextZIndex: h } = c, y = x(), m = x(!1), v = x(0);
    let C;
    const W = b(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), j = b(() => {
      const z = n.type;
      return { [l.bm("icon", z)]: z && Ee[z] };
    }), $ = b(() => n.icon || Ee[n.type] || ""), g = b(() => Ei(n.id)), w = b(() => Di(n.id, n.offset) + g.value), k = b(() => v.value + w.value), B = b(() => ({
      top: `${w.value}px`,
      zIndex: u.value
    }));
    function S() {
      n.duration !== 0 && ({ stop: C } = fn(() => {
        E();
      }, n.duration));
    }
    function J() {
      C?.();
    }
    function E() {
      m.value = !1;
    }
    function _e({ code: z }) {
      z === ze.esc && E();
    }
    return Fe(() => {
      S(), h(), m.value = !0;
    }), Ae(() => n.repeatNum, () => {
      J(), S();
    }), vn(document, "keydown", _e), Zs(y, () => {
      v.value = y.value.getBoundingClientRect().height;
    }), t({
      visible: m,
      bottom: k,
      close: E
    }), (z, Ve) => (_(), K(it, {
      name: s(l).b("fade"),
      onBeforeLeave: z.onClose,
      onAfterLeave: (Ue) => z.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        V(a("div", {
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
          style: Ie(s(B)),
          role: "alert",
          onMouseenter: J,
          onMouseleave: S
        }, [
          z.repeatNum > 1 ? (_(), K(s(ji), {
            key: 0,
            value: z.repeatNum,
            type: s(W),
            class: L(s(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Z("v-if", !0),
          s($) ? (_(), K(s($e), {
            key: 1,
            class: L([s(l).e("icon"), s(j)])
          }, {
            default: ee(() => [
              (_(), K(Qt(s($))))
            ]),
            _: 1
          }, 8, ["class"])) : Z("v-if", !0),
          ue(z.$slots, "default", {}, () => [
            z.dangerouslyUseHTMLString ? (_(), O(lt, { key: 1 }, [
              Z(" Caution here, message could've been compromised, never use user's input as message "),
              a("p", {
                class: L(s(l).e("content")),
                innerHTML: z.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), O("p", {
              key: 0,
              class: L(s(l).e("content"))
            }, T(z.message), 3))
          ]),
          z.showClose ? (_(), K(s($e), {
            key: 2,
            class: L(s(l).e("closeBtn")),
            onClick: Te(E, ["stop"])
          }, {
            default: ee(() => [
              d(s(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Z("v-if", !0)
        ], 46, ["id"]), [
          [We, m.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Bi = /* @__PURE__ */ He(Ai, [["__file", "message.vue"]]);
let Ri = 1;
const Wn = (e) => {
  const t = !e || te(e) || we(e) || me(e) ? { message: e } : e, n = {
    ...P,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (te(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    nt(o) || (o = document.body), n.appendTo = o;
  }
  return Nt(H.grouping) && !n.grouping && (n.grouping = H.grouping), oe(H.duration) && n.duration === 3e3 && (n.duration = H.duration), oe(H.offset) && n.offset === 16 && (n.offset = H.offset), Nt(H.showClose) && !n.showClose && (n.showClose = H.showClose), n;
}, Hi = (e) => {
  const t = U.indexOf(e);
  if (t === -1)
    return;
  U.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Vi = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Ri++}`, l = t.onClose, c = document.createElement("div"), u = {
    ...t,
    id: o,
    onClose: () => {
      l?.(), Hi(v);
    },
    onDestroy: () => {
      je(null, c);
    }
  }, h = d(Bi, u, me(u.message) || we(u.message) ? {
    default: me(u.message) ? u.message : () => u.message
  } : null);
  h.appContext = n || de._context, je(h, c), e.appendChild(c.firstElementChild);
  const y = h.component, v = {
    id: o,
    vnode: h,
    vm: y,
    handler: {
      close: () => {
        y.exposed.visible.value = !1;
      }
    },
    props: h.component.props
  };
  return v;
}, de = (e = {}, t) => {
  if (!ie)
    return { close: () => {
    } };
  const n = Wn(e);
  if (n.grouping && U.length) {
    const l = U.find(({ vnode: c }) => {
      var u;
      return ((u = c.props) == null ? void 0 : u.message) === n.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = n.type, l.handler;
  }
  if (oe(H.max) && U.length >= H.max)
    return { close: () => {
    } };
  const o = Vi(n, t);
  return U.push(o), o.handler;
};
In.forEach((e) => {
  de[e] = (t = {}, n) => {
    const o = Wn(t);
    return de({ ...o, type: e }, n);
  };
});
function Ui(e) {
  for (const t of U)
    (!e || e === t.props.type) && t.handler.close();
}
de.closeAll = Ui;
de._context = null;
const Gi = xn(de, "$message"), Tn = [
  "success",
  "info",
  "warning",
  "error"
], Zi = pe({
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
    type: zn
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
    values: [...Tn, ""],
    default: ""
  },
  zIndex: Number
}), Ki = {
  destroy: () => !0
}, Ji = M({
  name: "ElNotification"
}), qi = /* @__PURE__ */ M({
  ...Ji,
  props: Zi,
  emits: Ki,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: l } = Cn("notification"), { nextZIndex: c, currentZIndex: u } = l, { Close: h } = Li, y = x(!1);
    let m;
    const v = b(() => {
      const S = n.type;
      return S && Ee[n.type] ? o.m(S) : "";
    }), C = b(() => n.type && Ee[n.type] || n.icon), W = b(() => n.position.endsWith("right") ? "right" : "left"), j = b(() => n.position.startsWith("top") ? "top" : "bottom"), $ = b(() => {
      var S;
      return {
        [j.value]: `${n.offset}px`,
        zIndex: (S = n.zIndex) != null ? S : u.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: m } = fn(() => {
        y.value && k();
      }, n.duration));
    }
    function w() {
      m?.();
    }
    function k() {
      y.value = !1;
    }
    function B({ code: S }) {
      S === ze.delete || S === ze.backspace ? w() : S === ze.esc ? y.value && k() : g();
    }
    return Fe(() => {
      g(), c(), y.value = !0;
    }), vn(document, "keydown", B), t({
      visible: y,
      close: k
    }), (S, J) => (_(), K(it, {
      name: s(o).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (E) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        V(a("div", {
          id: S.id,
          class: L([s(o).b(), S.customClass, s(W)]),
          style: Ie(s($)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: g,
          onClick: S.onClick
        }, [
          s(C) ? (_(), K(s($e), {
            key: 0,
            class: L([s(o).e("icon"), s(v)])
          }, {
            default: ee(() => [
              (_(), K(Qt(s(C))))
            ]),
            _: 1
          }, 8, ["class"])) : Z("v-if", !0),
          a("div", {
            class: L(s(o).e("group"))
          }, [
            a("h2", {
              class: L(s(o).e("title")),
              textContent: T(S.title)
            }, null, 10, ["textContent"]),
            V(a("div", {
              class: L(s(o).e("content")),
              style: Ie(S.title ? void 0 : { margin: 0 })
            }, [
              ue(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (_(), O(lt, { key: 1 }, [
                  Z(" Caution here, message could've been compromised, never use user's input as message "),
                  a("p", { innerHTML: S.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), O("p", { key: 0 }, T(S.message), 1))
              ])
            ], 6), [
              [We, S.message]
            ]),
            S.showClose ? (_(), K(s($e), {
              key: 0,
              class: L(s(o).e("closeBtn")),
              onClick: Te(k, ["stop"])
            }, {
              default: ee(() => [
                d(s(h))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Z("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [We, y.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Qi = /* @__PURE__ */ He(qi, [["__file", "notification.vue"]]);
const De = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, st = 16;
let Yi = 1;
const he = function(e = {}, t) {
  if (!ie)
    return { close: () => {
    } };
  (te(e) || we(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  De[n].forEach(({ vm: v }) => {
    var C;
    o += (((C = v.el) == null ? void 0 : C.offsetHeight) || 0) + st;
  }), o += st;
  const l = `notification_${Yi++}`, c = e.onClose, u = {
    ...e,
    offset: o,
    id: l,
    onClose: () => {
      Xi(l, n, c);
    }
  };
  let h = document.body;
  nt(e.appendTo) ? h = e.appendTo : te(e.appendTo) && (h = document.querySelector(e.appendTo)), nt(h) || (h = document.body);
  const y = document.createElement("div"), m = d(Qi, u, me(u.message) ? u.message : we(u.message) ? () => u.message : null);
  return m.appContext = hn(t) ? he._context : t, m.props.onDestroy = () => {
    je(null, y);
  }, je(m, y), De[n].push({ vm: m }), h.appendChild(y.firstElementChild), {
    close: () => {
      m.component.exposed.visible.value = !1;
    }
  };
};
Tn.forEach((e) => {
  he[e] = (t = {}, n) => ((te(t) || we(t)) && (t = {
    message: t
  }), he({ ...t, type: e }, n));
});
function Xi(e, t, n) {
  const o = De[t], l = o.findIndex(({ vm: m }) => {
    var v;
    return ((v = m.component) == null ? void 0 : v.props.id) === e;
  });
  if (l === -1)
    return;
  const { vm: c } = o[l];
  if (!c)
    return;
  n?.(c);
  const u = c.el.offsetHeight, h = t.split("-")[0];
  o.splice(l, 1);
  const y = o.length;
  if (!(y < 1))
    for (let m = l; m < y; m++) {
      const { el: v, component: C } = o[m].vm, W = Number.parseInt(v.style[h], 10) - u - st;
      C.props.offset = W;
    }
}
function el() {
  for (const e of Object.values(De))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
he.closeAll = el;
he._context = null;
const tl = xn(he, "$notify"), I = {
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
    o === "center" ? Gi({
      message: t,
      type: n,
      duration: l,
      showClose: c,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : tl({
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
}, nl = () => ({
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
}), ol = (e) => e ? /^https?:\/\//i.test(e) ? e : co(e) : "", sl = () => r("wallpaper_get_config"), Qe = (e) => r("wallpaper_save_config", { config: e }), Gt = () => r("wallpaper_get_status"), Zt = (e) => r("wallpaper_scan_folder", { path: e }), il = (e) => r("wallpaper_set_fixed_image", { path: e }), ll = () => r("wallpaper_switch_now"), al = (e) => r("wallpaper_fetch_wallhaven", { params: e }), rl = (e) => r("wallpaper_set_wallhaven_image", { wallpaper: e }), ul = (e) => r("wallpaper_download_wallhaven_image", { wallpaper: e }), cl = () => r("wallpaper_clear_cache");
var dl = {
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
function hl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function fl(e, t, n) {
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
var pl = Symbol("icon-context");
function A(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(c) {
      var u = hl(), h = X(pl, dl);
      return function() {
        var y = c.size, m = c.strokeWidth, v = c.strokeLinecap, C = c.strokeLinejoin, W = c.theme, j = c.fill, $ = c.spin, g = fl(u, {
          size: y,
          strokeWidth: m,
          strokeLinecap: v,
          strokeLinejoin: C,
          theme: W,
          fill: j
        }, h), w = [h.prefix + "-icon"];
        return w.push(h.prefix + "-icon-" + e), t && h.rtl && w.push(h.prefix + "-icon-rtl"), $ && w.push(h.prefix + "-icon-spin"), d("span", {
          class: w.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const gl = A("back", !0, function(e) {
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
}), vl = A("computer", !1, function(e) {
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
}), yl = A("delete", !1, function(e) {
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
}), wl = A("download", !1, function(e) {
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
}), ml = A("folder-open", !0, function(e) {
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
}), bl = A("grid-four", !1, function(e) {
  return d("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [d("rect", {
    x: "5",
    y: "5",
    width: "38",
    height: "38",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M24 5V43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), d("path", {
    d: "M5 24H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _l = A("lightning", !0, function(e) {
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
}), Xe = A("picture", !0, function(e) {
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
}), kl = A("preview-open", !1, function(e) {
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
}), Kt = A("refresh", !0, function(e) {
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
}), Cl = A("save", !0, function(e) {
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
}), Jt = A("search", !0, function(e) {
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
}), Sl = { class: "wallpaper-window" }, Ll = {
  class: "titlebar",
  "data-tauri-drag-region": ""
}, xl = {
  key: 0,
  class: "title"
}, Ol = {
  key: 1,
  class: "title"
}, zl = {
  key: 2,
  class: "window-actions"
}, Il = {
  key: 3,
  class: "window-actions"
}, Wl = { class: "source-toggle" }, Tl = {
  key: 0,
  class: "unsupported"
}, jl = { class: "top-panel" }, Pl = { class: "preview" }, Nl = ["src"], Ml = {
  key: 1,
  class: "preview-empty"
}, $l = { class: "status-panel" }, El = { class: "status-row" }, Dl = { class: "status-row" }, Fl = { class: "status-row" }, Al = { class: "status-actions" }, Bl = ["disabled"], Rl = { class: "card settings-card" }, Hl = { class: "form-row mode-row" }, Vl = { class: "segmented three" }, Ul = { class: "form-row" }, Gl = { class: "form-row" }, Zl = { class: "hint-row" }, Kl = { class: "form-row wallhaven-row" }, Jl = { class: "segmented source" }, ql = { class: "hint-row" }, Ql = { class: "card rules-card" }, Yl = { class: "rules-line" }, Xl = { class: "switch-label" }, ea = { class: "number-label" }, ta = { class: "segmented mini" }, na = { class: "rules-line" }, oa = { class: "segmented fit" }, sa = { class: "checkbox-label" }, ia = { class: "footer-card" }, la = { class: "cache-info" }, aa = { class: "footer-actions" }, ra = ["disabled"], ua = {
  key: 2,
  class: "wallhaven-view"
}, ca = { class: "filters" }, da = { class: "search-box" }, ha = { class: "resolution" }, fa = { class: "chips" }, pa = { class: "source-select" }, ga = { class: "grid-wrap" }, va = {
  key: 0,
  class: "empty-state"
}, ya = {
  key: 1,
  class: "empty-state"
}, wa = {
  key: 2,
  class: "wallpaper-grid"
}, ma = ["onClick"], ba = { class: "thumb" }, _a = {
  key: 0,
  class: "thumb-skeleton"
}, ka = ["alt", "onLoad"], Ca = ["onClick"], Sa = ["disabled", "onClick"], La = ["disabled", "onClick"], xa = { class: "pager" }, Oa = { class: "source-note" }, za = { class: "pager-actions" }, Ia = ["disabled"], Wa = ["disabled"], Ta = { class: "preview-dialog" }, ja = ["src"], Pa = ["disabled"], Na = ["disabled"], Ma = /* @__PURE__ */ M({
  __name: "index",
  setup(e) {
    const t = tn(), n = x(nl()), o = x(null), l = x(null), c = x(!1), u = x(!1), h = x(!1), y = x("switcher"), m = x([]), v = x(1), C = x(1), W = x(!1), j = x(!1), $ = x(""), g = x("general"), w = x("hot"), k = x(null), B = x(/* @__PURE__ */ new Set()), S = x(/* @__PURE__ */ new Set()), J = /* @__PURE__ */ new Map();
    let E = null, _e = null, z = null;
    const Ve = b(() => ol(o.value?.currentPath)), Ue = b(() => "2560 × 1440"), jn = b(() => n.value.mode === "fixed" ? "固定图片" : n.value.mode === "wallhaven" ? "Wallhaven" : "本地文件夹"), Pn = b(() => {
      const f = o.value?.nextSwitchAt;
      if (!f) return "18 分钟后";
      const i = Math.max(0, f - Math.floor(Date.now() / 1e3));
      return i < 60 ? `${i} 秒后` : `${Math.ceil(i / 60)} 分钟后`;
    }), Nn = b(() => {
      const f = o.value?.cacheSizeBytes ?? 0;
      return f > 0 ? Jn(f) : "320 MB";
    }), pt = b(() => l.value ? `检测到 ${l.value.count} 张可用图片` : "检测到 128 张可用图片"), Mn = b(() => "2560×1440"), $n = b(() => w.value === "hot" ? "Hot" : "Toplist"), Ge = b(() => m.value.slice(0, 8)), gt = async () => {
      c.value = !0;
      try {
        const [f, i] = await Promise.all([
          sl(),
          Gt()
        ]);
        if (n.value = f, o.value = i, f.folderPath)
          try {
            l.value = await Zt(f.folderPath);
          } catch {
            l.value = null;
          }
      } catch (f) {
        I.msg(String(f), "error");
      } finally {
        c.value = !1;
      }
    }, Q = async () => {
      try {
        o.value = await Gt();
      } catch (f) {
        I.msg(String(f), "error");
      }
    }, vt = async () => {
      u.value = !0;
      try {
        await Qe(n.value), await Q(), I.msg("壁纸设置已保存", "success");
      } catch (f) {
        I.msg(String(f), "error");
      } finally {
        u.value = !1;
      }
    }, En = async () => {
      const f = await zt({
        multiple: !1,
        directory: !1,
        filters: [{ name: "Images", extensions: ["jpg", "jpeg", "png", "webp", "bmp"] }]
      });
      if (typeof f == "string") {
        n.value.fixedImagePath = f, n.value.mode = "fixed";
        try {
          await il(f), await gt(), I.msg("已设置固定壁纸", "success");
        } catch (i) {
          I.msg(String(i), "error");
        }
      }
    }, Dn = async () => {
      const f = await zt({ multiple: !1, directory: !0 });
      typeof f == "string" && (n.value.folderPath = f, n.value.mode = "folder", await yt());
    }, yt = async () => {
      if (!n.value.folderPath) {
        I.msg("请先选择壁纸文件夹", "warning");
        return;
      }
      try {
        l.value = await Zt(n.value.folderPath), l.value.count === 0 ? I.msg("文件夹中没有可用图片", "warning") : I.msg(pt.value, "success");
      } catch (f) {
        I.msg(String(f), "error");
      }
    }, Fn = async () => {
      h.value = !0;
      try {
        await Qe(n.value), await ll(), await Q(), I.msg("壁纸已切换", "success");
      } catch (f) {
        I.msg(String(f), "error");
      } finally {
        h.value = !1;
      }
    }, An = async () => {
      if (!o.value?.currentPath) {
        I.msg("当前没有可固定的壁纸", "warning");
        return;
      }
      n.value.mode = "fixed", n.value.fixedImagePath = o.value.currentPath, await vt();
    }, wt = async () => {
      $.value = n.value.wallhavenQuery ?? "", g.value = n.value.wallhavenCategory || "general", w.value = n.value.wallhavenSource, y.value = "wallhaven", j.value || await le(1);
    }, Bn = async () => {
      y.value = "switcher", k.value = null, await Q();
    }, ke = (f, i) => {
      const p = new Set(B.value);
      i ? p.add(f) : p.delete(f), B.value = p;
    }, Rn = (f) => {
      const i = new Set(S.value);
      i.add(f), S.value = i;
    }, Hn = (f, i) => {
      if (!(i instanceof HTMLImageElement)) {
        J.delete(f.id);
        return;
      }
      if (J.set(f.id, i), !E) {
        i.src = f.thumbs.large;
        return;
      }
      i.dataset.src = f.thumbs.large, E.observe(i);
    }, Vn = () => {
      S.value = /* @__PURE__ */ new Set(), J.clear();
    }, Un = async () => {
      n.value.wallhavenQuery = $.value.trim() || null, n.value.wallhavenCategory = g.value, n.value.wallhavenSource = w.value, n.value.mode = "wallhaven", await Qe(n.value);
    }, le = async (f = v.value) => {
      W.value = !0;
      try {
        await Un();
        const i = await al({
          source: w.value,
          page: f,
          query: $.value.trim() || null,
          category: g.value
        });
        Vn(), m.value = i.data, v.value = i.page, C.value = Math.max(1, i.lastPage), j.value = !0, await qt();
        for (const p of J.values())
          E && E.observe(p);
      } catch (i) {
        I.msg(String(i), "error");
      } finally {
        W.value = !1;
      }
    }, Ce = () => le(1), mt = async (f) => {
      w.value = f, await le(1);
    }, Ze = async (f) => {
      g.value = f, await le(1);
    }, bt = async (f) => {
      ke(f.id, !0);
      try {
        I.msg("正在设置壁纸...", "info"), await rl(f), await Q(), I.msg("壁纸已设置", "success");
      } catch (i) {
        I.msg(String(i), "error");
      } finally {
        ke(f.id, !1);
      }
    }, _t = async (f) => {
      ke(f.id, !0);
      try {
        I.msg("正在下载壁纸...", "info"), await ul(f), await Q(), I.msg("壁纸已下载到缓存", "success");
      } catch (i) {
        I.msg(String(i), "error");
      } finally {
        ke(f.id, !1);
      }
    }, Gn = async () => {
      v.value <= 1 || await le(v.value - 1);
    }, Zn = async () => {
      v.value >= C.value || await le(v.value + 1);
    }, Kn = async () => {
      try {
        await cl(), await Q(), I.msg("缓存已清理", "success");
      } catch (f) {
        I.msg(String(f), "error");
      }
    }, kt = async () => {
      await t.close();
    }, Jn = (f) => f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / 1024 / 1024).toFixed(1)} MB` : `${(f / 1024 / 1024 / 1024).toFixed(1)} GB`;
    return Fe(async () => {
      E = new IntersectionObserver(
        (f) => {
          for (const i of f) {
            if (!i.isIntersecting) continue;
            const p = i.target, G = p.dataset.src;
            G && p.src !== G && (p.src = G), E?.unobserve(p);
          }
        },
        { root: null, rootMargin: "120px" }
      ), await gt(), _e = await Pe("wallpaper-switcher-changed", Q), z = await Pe("wallpaper-switcher-error", (f) => {
        I.msg(f.payload?.message || "定时切换失败", "error");
      });
    }), oo(() => {
      E?.disconnect(), E = null, _e?.(), z?.();
    }), (f, i) => (_(), O("main", Sl, [
      a("header", Ll, [
        s(y) === "switcher" ? (_(), O("div", xl, [
          d(s(Xe), { size: 20 }),
          i[27] || (i[27] = a(
            "span",
            null,
            "壁纸切换",
            -1
            /* HOISTED */
          ))
        ])) : (_(), O("div", Ol, [
          a("button", {
            type: "button",
            class: "flat-icon",
            title: "返回",
            onClick: Bn
          }, [
            d(s(gl), { size: 22 })
          ]),
          i[28] || (i[28] = a(
            "span",
            null,
            "Wallhaven 壁纸",
            -1
            /* HOISTED */
          ))
        ])),
        s(y) === "switcher" ? (_(), O("div", zl, [
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "打开在线网格",
            onClick: wt
          }, [
            d(s(bl), { size: 19 })
          ]),
          a("button", {
            type: "button",
            class: "icon-btn",
            title: "关闭",
            onClick: kt
          }, [
            d(s(Ye), { size: 22 })
          ])
        ])) : (_(), O("div", Il, [
          a("div", Wl, [
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(w) === "hot" }),
                onClick: i[0] || (i[0] = (p) => mt("hot"))
              },
              "热门",
              2
              /* CLASS */
            ),
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(w) === "toplist" }),
                onClick: i[1] || (i[1] = (p) => mt("toplist"))
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
            onClick: kt
          }, [
            d(s(Ye), { size: 22 })
          ])
        ]))
      ]),
      s(o) && !s(o).supported ? (_(), O("section", Tl, " 当前系统暂不支持桌面壁纸切换。此插件当前仅支持 Windows。 ")) : Z("v-if", !0),
      s(y) === "switcher" ? (_(), O(
        "div",
        {
          key: 1,
          class: L(["content", { dimmed: s(c) }])
        },
        [
          a("section", jl, [
            a("div", Pl, [
              s(Ve) ? (_(), O("img", {
                key: 0,
                src: s(Ve),
                alt: "当前壁纸预览"
              }, null, 8, Nl)) : (_(), O("div", Ml, [
                d(s(Xe), { size: 42 }),
                i[29] || (i[29] = a(
                  "span",
                  null,
                  "暂无当前壁纸",
                  -1
                  /* HOISTED */
                ))
              ]))
            ]),
            a("div", $l, [
              i[33] || (i[33] = a(
                "h2",
                null,
                "当前状态",
                -1
                /* HOISTED */
              )),
              a("div", El, [
                i[30] || (i[30] = a(
                  "span",
                  null,
                  "来源：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  T(s(jn)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Dl, [
                i[31] || (i[31] = a(
                  "span",
                  null,
                  "分辨率：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  T(s(Ue)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Fl, [
                i[32] || (i[32] = a(
                  "span",
                  null,
                  "下次切换：",
                  -1
                  /* HOISTED */
                )),
                a(
                  "strong",
                  null,
                  T(s(Pn)),
                  1
                  /* TEXT */
                )
              ]),
              a("div", Al, [
                a("button", {
                  type: "button",
                  class: "primary-btn",
                  disabled: s(h),
                  onClick: Fn
                }, [
                  d(s(_l), { size: 17 }),
                  N(
                    " " + T(s(h) ? "切换中" : "立即切换"),
                    1
                    /* TEXT */
                  )
                ], 8, Bl),
                a("button", {
                  type: "button",
                  class: "secondary-btn",
                  onClick: An
                }, " 设为固定 ")
              ])
            ])
          ]),
          a("section", Rl, [
            a("div", Hl, [
              i[34] || (i[34] = a(
                "span",
                { class: "row-label" },
                "模式",
                -1
                /* HOISTED */
              )),
              a("div", Vl, [
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
            a("div", Ul, [
              i[36] || (i[36] = a(
                "span",
                { class: "row-label" },
                "固定图片",
                -1
                /* HOISTED */
              )),
              V(a(
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
                [Se, s(n).fixedImagePath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: En
              }, [
                d(s(Xe), { size: 16 }),
                i[35] || (i[35] = N(" 选择图片 "))
              ])
            ]),
            a("div", Gl, [
              i[39] || (i[39] = a(
                "span",
                { class: "row-label" },
                "本地文件夹",
                -1
                /* HOISTED */
              )),
              V(a(
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
                [Se, s(n).folderPath]
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: Dn
              }, [
                d(s(ml), { size: 16 }),
                i[37] || (i[37] = N(" 选择 "))
              ]),
              a("button", {
                type: "button",
                class: "tool-btn",
                onClick: yt
              }, [
                d(s(Kt), { size: 16 }),
                i[38] || (i[38] = N(" 扫描 "))
              ])
            ]),
            a(
              "div",
              Zl,
              T(s(pt)),
              1
              /* TEXT */
            ),
            a("div", Kl, [
              i[41] || (i[41] = a(
                "span",
                { class: "row-label" },
                "Wallhaven",
                -1
                /* HOISTED */
              )),
              i[42] || (i[42] = a(
                "span",
                { class: "sub-label" },
                "来源",
                -1
                /* HOISTED */
              )),
              a("div", Jl, [
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
                onClick: wt
              }, [
                d(s(Jt), { size: 16 }),
                i[40] || (i[40] = N(" 打开在线网格 "))
              ])
            ]),
            a("div", ql, [
              i[43] || (i[43] = a(
                "span",
                null,
                "屏幕匹配",
                -1
                /* HOISTED */
              )),
              a(
                "strong",
                null,
                T(s(Ue)),
                1
                /* TEXT */
              )
            ])
          ]),
          a("section", Ql, [
            i[51] || (i[51] = a(
              "h2",
              null,
              "切换规则",
              -1
              /* HOISTED */
            )),
            a("div", Yl, [
              a("label", Xl, [
                V(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[9] || (i[9] = (p) => s(n).scheduleEnabled = p),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [Ct, s(n).scheduleEnabled]
                ]),
                i[44] || (i[44] = a(
                  "span",
                  { class: "switch-control" },
                  null,
                  -1
                  /* HOISTED */
                )),
                i[45] || (i[45] = N(" 启用定时切换 "))
              ]),
              a("label", ea, [
                i[46] || (i[46] = N(" 每 ")),
                V(a(
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
                    Se,
                    s(n).intervalMinutes,
                    void 0,
                    { number: !0 }
                  ]
                ]),
                i[47] || (i[47] = N(" 分钟 "))
              ]),
              i[48] || (i[48] = a(
                "span",
                { class: "sub-label" },
                "顺序",
                -1
                /* HOISTED */
              )),
              a("div", ta, [
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
            a("div", na, [
              i[50] || (i[50] = a(
                "span",
                { class: "row-label compact" },
                "适配模式",
                -1
                /* HOISTED */
              )),
              a("div", oa, [
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
              a("label", sa, [
                V(a(
                  "input",
                  {
                    "onUpdate:modelValue": i[16] || (i[16] = (p) => s(n).autoRestore = p),
                    type: "checkbox"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [Ct, s(n).autoRestore]
                ]),
                i[49] || (i[49] = N(" 启动后自动恢复定时任务 "))
              ])
            ])
          ]),
          a("footer", ia, [
            a("div", la, [
              i[52] || (i[52] = a(
                "strong",
                null,
                "缓存",
                -1
                /* HOISTED */
              )),
              i[53] || (i[53] = a(
                "span",
                null,
                "Wallhaven 缓存",
                -1
                /* HOISTED */
              )),
              a(
                "span",
                null,
                T(s(Nn)),
                1
                /* TEXT */
              )
            ]),
            a("div", aa, [
              a("button", {
                type: "button",
                class: "secondary-btn",
                onClick: Kn
              }, [
                d(s(yl), { size: 16 }),
                i[54] || (i[54] = N(" 清理缓存 "))
              ]),
              a("button", {
                type: "button",
                class: "primary-btn",
                disabled: s(u),
                onClick: vt
              }, [
                d(s(Cl), { size: 17 }),
                N(
                  " " + T(s(u) ? "保存中" : "保存设置"),
                  1
                  /* TEXT */
                )
              ], 8, ra)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : (_(), O("div", ua, [
        a("section", ca, [
          a("div", da, [
            V(a(
              "input",
              {
                "onUpdate:modelValue": i[17] || (i[17] = (p) => et($) ? $.value = p : null),
                type: "search",
                placeholder: "搜索关键词",
                onKeydown: so(Ce, ["enter"])
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [Se, s($)]
            ]),
            a("button", {
              type: "button",
              title: "搜索",
              onClick: Ce
            }, [
              d(s(Jt), { size: 18 })
            ])
          ]),
          a("label", ha, [
            i[55] || (i[55] = a(
              "span",
              null,
              "分辨率",
              -1
              /* HOISTED */
            )),
            a(
              "strong",
              null,
              "自动匹配 " + T(s(Mn)),
              1
              /* TEXT */
            )
          ]),
          a("div", fa, [
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(g) === "general" }),
                onClick: i[18] || (i[18] = (p) => Ze("general"))
              },
              "通用",
              2
              /* CLASS */
            ),
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(g) === "anime" }),
                onClick: i[19] || (i[19] = (p) => Ze("anime"))
              },
              "动漫",
              2
              /* CLASS */
            ),
            a(
              "button",
              {
                type: "button",
                class: L({ active: s(g) === "people" }),
                onClick: i[20] || (i[20] = (p) => Ze("people"))
              },
              "人物",
              2
              /* CLASS */
            )
          ]),
          a("label", pa, [
            i[57] || (i[57] = a(
              "span",
              null,
              "源",
              -1
              /* HOISTED */
            )),
            V(a(
              "select",
              {
                "onUpdate:modelValue": i[21] || (i[21] = (p) => et(w) ? w.value = p : null),
                onChange: Ce
              },
              i[56] || (i[56] = [
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
              [io, s(w)]
            ])
          ]),
          a("button", {
            type: "button",
            class: "refresh-btn",
            title: "刷新",
            onClick: Ce
          }, [
            d(s(Kt), {
              size: 18,
              class: L({ spinning: s(W) })
            }, null, 8, ["class"])
          ])
        ]),
        a("section", ga, [
          s(W) && s(Ge).length === 0 ? (_(), O("div", va, "正在加载 Wallhaven 壁纸...")) : s(Ge).length === 0 ? (_(), O("div", ya, "暂无可用壁纸")) : (_(), O("div", wa, [
            (_(!0), O(
              lt,
              null,
              lo(s(Ge), (p) => (_(), O("article", {
                key: p.id,
                class: "wallpaper-card",
                onClick: (G) => k.value = p
              }, [
                a("div", ba, [
                  s(S).has(p.id) ? Z("v-if", !0) : (_(), O("div", _a)),
                  a("img", {
                    ref_for: !0,
                    ref: (G) => Hn(p, G),
                    alt: p.resolution,
                    loading: "lazy",
                    onLoad: (G) => Rn(p.id)
                  }, null, 40, ka),
                  a(
                    "span",
                    null,
                    T(p.resolution),
                    1
                    /* TEXT */
                  )
                ]),
                a("div", {
                  class: "card-actions",
                  onClick: i[22] || (i[22] = Te(() => {
                  }, ["stop"]))
                }, [
                  a("button", {
                    type: "button",
                    title: "预览",
                    onClick: (G) => k.value = p
                  }, [
                    d(s(kl), { size: 16 }),
                    i[58] || (i[58] = N(" 预览 "))
                  ], 8, Ca),
                  a("button", {
                    type: "button",
                    title: "设为壁纸",
                    disabled: s(B).has(p.id),
                    onClick: (G) => bt(p)
                  }, [
                    d(s(vl), { size: 16 }),
                    N(
                      " " + T(s(B).has(p.id) ? "设置中" : "设为"),
                      1
                      /* TEXT */
                    )
                  ], 8, Sa),
                  a("button", {
                    type: "button",
                    title: "下载",
                    disabled: s(B).has(p.id),
                    onClick: (G) => _t(p)
                  }, [
                    d(s(wl), { size: 16 }),
                    i[59] || (i[59] = N(" 下载 "))
                  ], 8, La)
                ])
              ], 8, ma))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))
        ]),
        a("footer", xa, [
          a(
            "span",
            null,
            "第 " + T(s(v)) + " 页",
            1
            /* TEXT */
          ),
          a(
            "span",
            Oa,
            "来源：" + T(s($n)) + " · SFW",
            1
            /* TEXT */
          ),
          a("div", za, [
            a("button", {
              type: "button",
              disabled: s(v) <= 1 || s(W),
              onClick: Gn
            }, "上一页", 8, Ia),
            a("button", {
              type: "button",
              disabled: s(v) >= s(C) || s(W),
              onClick: Zn
            }, "下一页", 8, Wa)
          ])
        ])
      ])),
      s(k) ? (_(), O("div", {
        key: 3,
        class: "preview-modal",
        onClick: i[26] || (i[26] = Te((p) => k.value = null, ["self"]))
      }, [
        a("div", Ta, [
          a("header", null, [
            a(
              "strong",
              null,
              T(s(k).resolution),
              1
              /* TEXT */
            ),
            a("button", {
              type: "button",
              class: "flat-icon",
              onClick: i[23] || (i[23] = (p) => k.value = null)
            }, [
              d(s(Ye), { size: 23 })
            ])
          ]),
          a("img", {
            src: s(k).path,
            alt: "壁纸预览"
          }, null, 8, ja),
          a("footer", null, [
            a("button", {
              type: "button",
              class: "secondary-btn",
              disabled: s(B).has(s(k).id),
              onClick: i[24] || (i[24] = (p) => _t(s(k)))
            }, " 下载缓存 ", 8, Pa),
            a("button", {
              type: "button",
              class: "primary-btn",
              disabled: s(B).has(s(k).id),
              onClick: i[25] || (i[25] = (p) => bt(s(k)))
            }, T(s(B).has(s(k).id) ? "设置中" : "设为壁纸"), 9, Na)
          ])
        ])
      ])) : Z("v-if", !0)
    ]));
  }
}), $a = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, Ea = /* @__PURE__ */ $a(Ma, [["__scopeId", "data-v-1fdee1bf"]]), Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ea
}, Symbol.toStringTag, { value: "Module" }));
export {
  Aa as activate
};
