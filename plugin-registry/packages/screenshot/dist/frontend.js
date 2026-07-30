var pa = Object.defineProperty;
var ya = (n, t, e) => t in n ? pa(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var P = (n, t, e) => ya(n, typeof t != "symbol" ? t + "" : t, e);
import { inject as pe, createVNode as w, defineComponent as Pt, ref as E, computed as I, watch as Oe, nextTick as ye, createElementBlock as D, openBlock as T, createCommentVNode as F, createElementVNode as x, Fragment as $t, renderList as Ut, normalizeClass as rt, createBlock as St, resolveDynamicComponent as me, unref as C, toDisplayString as B, normalizeStyle as gt, onMounted as Qe, onUnmounted as zs, withDirectives as Xe, withKeys as ji, vModelText as wa, getCurrentInstance as Pe, readonly as va, getCurrentScope as xa, onScopeDispose as ka, isRef as ba, warn as Sa, provide as Ma, mergeProps as Ca, renderSlot as ve, Transition as oi, withCtx as Et, createTextVNode as Rs, vShow as yn, shallowReactive as _a, withModifiers as kt, isVNode as Ge, render as wn } from "vue";
import { useI18n as Ls } from "vue-i18n";
const mf = (n) => {
  n.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => Zc)
  }), n.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => sf)
  });
};
function Ta(n, t, e, i) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(n) : i ? i.value : t.get(n);
}
function za(n, t, e, i, s) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(n, e), e;
}
var hn;
const Xt = "__TAURI_TO_IPC_KEY__";
function Ra(n, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(n, t);
}
async function S(n, t = {}, e) {
  return window.__TAURI_INTERNALS__.invoke(n, t, e);
}
function La(n, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(n, t);
}
class Pa {
  get rid() {
    return Ta(this, hn, "f");
  }
  constructor(t) {
    hn.set(this, void 0), za(this, hn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return S("plugin:resources|close", {
      rid: this.rid
    });
  }
}
hn = /* @__PURE__ */ new WeakMap();
class Ue {
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
    return new Ye(this.width * t, this.height * t);
  }
  [Xt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class Ye {
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
    return new Ue(this.width / t, this.height / t);
  }
  [Xt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class _e {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ue ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ye ? this.size : this.size.toPhysical(t);
  }
  [Xt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class Ps {
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
    return new ae(this.x * t, this.y * t);
  }
  [Xt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class ae {
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
    return new Ps(this.x / t, this.y / t);
  }
  [Xt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
class on {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Ps ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof ae ? this.position : this.position.toPhysical(t);
  }
  [Xt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Xt]();
  }
}
var Vt;
(function(n) {
  n.WINDOW_RESIZED = "tauri://resize", n.WINDOW_MOVED = "tauri://move", n.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", n.WINDOW_DESTROYED = "tauri://destroyed", n.WINDOW_FOCUS = "tauri://focus", n.WINDOW_BLUR = "tauri://blur", n.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", n.WINDOW_THEME_CHANGED = "tauri://theme-changed", n.WINDOW_CREATED = "tauri://window-created", n.WEBVIEW_CREATED = "tauri://webview-created", n.DRAG_ENTER = "tauri://drag-enter", n.DRAG_OVER = "tauri://drag-over", n.DRAG_DROP = "tauri://drag-drop", n.DRAG_LEAVE = "tauri://drag-leave";
})(Vt || (Vt = {}));
async function As(n, t) {
  await S("plugin:event|unlisten", {
    event: n,
    eventId: t
  });
}
async function vn(n, t, e) {
  var i;
  const s = typeof e?.target == "string" ? { kind: "AnyLabel", label: e.target } : (i = e?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return S("plugin:event|listen", {
    event: n,
    target: s,
    handler: Ra(t)
  }).then((o) => async () => As(n, o));
}
async function Aa(n, t, e) {
  return vn(n, (i) => {
    As(n, i.id), t(i);
  }, e);
}
async function Da(n, t) {
  await S("plugin:event|emit", {
    event: n,
    payload: t
  });
}
async function Ia(n, t, e) {
  await S("plugin:event|emit_to", {
    target: typeof n == "string" ? { kind: "AnyLabel", label: n } : n,
    event: t,
    payload: e
  });
}
let Oa = class un extends Pa {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, e, i) {
    return S("plugin:image|new", {
      rgba: xn(t),
      width: e,
      height: i
    }).then((s) => new un(s));
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
    return S("plugin:image|from_bytes", {
      bytes: xn(t)
    }).then((e) => new un(e));
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
    return S("plugin:image|from_path", { path: t }).then((e) => new un(e));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return S("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return S("plugin:image|size", { rid: this.rid });
  }
};
function xn(n) {
  return n == null ? null : typeof n == "string" ? n : n instanceof Oa ? n.rid : n;
}
var Zn;
(function(n) {
  n[n.Critical = 1] = "Critical", n[n.Informational = 2] = "Informational";
})(Zn || (Zn = {}));
class Ea {
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
var Vi;
(function(n) {
  n.None = "none", n.Normal = "normal", n.Indeterminate = "indeterminate", n.Paused = "paused", n.Error = "error";
})(Vi || (Vi = {}));
function $a() {
  return new tn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Fn() {
  return S("plugin:window|get_all_windows").then((n) => n.map((t) => new tn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const jn = ["tauri://created", "tauri://error"];
class tn {
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
  constructor(t, e = {}) {
    var i;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), e?.skip || S("plugin:window|create", {
      options: {
        ...e,
        parent: typeof e.parent == "string" ? e.parent : (i = e.parent) === null || i === void 0 ? void 0 : i.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (s) => this.emit("tauri://error", s));
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
    var e;
    return (e = (await Fn()).find((i) => i.label === t)) !== null && e !== void 0 ? e : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return $a();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Fn();
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
    for (const t of await Fn())
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
  async listen(t, e) {
    return this._handleTauriEvent(t, e) ? () => {
      const i = this.listeners[t];
      i.splice(i.indexOf(e), 1);
    } : vn(t, e, {
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
  async once(t, e) {
    return this._handleTauriEvent(t, e) ? () => {
      const i = this.listeners[t];
      i.splice(i.indexOf(e), 1);
    } : Aa(t, e, {
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
  async emit(t, e) {
    if (jn.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: e
        });
      return;
    }
    return Da(t, e);
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
  async emitTo(t, e, i) {
    if (jn.includes(e)) {
      for (const s of this.listeners[e] || [])
        s({
          event: e,
          id: -1,
          payload: i
        });
      return;
    }
    return Ia(t, e, i);
  }
  /** @ignore */
  _handleTauriEvent(t, e) {
    return jn.includes(t) ? (t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e], !0) : !1;
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
    return S("plugin:window|scale_factor", {
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
    return S("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new ae(t));
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
    return S("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new ae(t));
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
    return S("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ye(t));
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
    return S("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Ye(t));
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
    return S("plugin:window|is_fullscreen", {
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
    return S("plugin:window|is_minimized", {
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
    return S("plugin:window|is_maximized", {
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
    return S("plugin:window|is_focused", {
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
    return S("plugin:window|is_decorated", {
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
    return S("plugin:window|is_resizable", {
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
    return S("plugin:window|is_maximizable", {
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
    return S("plugin:window|is_minimizable", {
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
    return S("plugin:window|is_closable", {
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
    return S("plugin:window|is_visible", {
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
    return S("plugin:window|title", {
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
    return S("plugin:window|theme", {
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
    return S("plugin:window|is_always_on_top", {
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
    return S("plugin:window|center", {
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
    let e = null;
    return t && (t === Zn.Critical ? e = { type: "Critical" } : e = { type: "Informational" }), S("plugin:window|request_user_attention", {
      label: this.label,
      value: e
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
    return S("plugin:window|set_resizable", {
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
    return S("plugin:window|set_enabled", {
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
    return S("plugin:window|is_enabled", {
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
    return S("plugin:window|set_maximizable", {
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
    return S("plugin:window|set_minimizable", {
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
    return S("plugin:window|set_closable", {
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
    return S("plugin:window|set_title", {
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
    return S("plugin:window|maximize", {
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
    return S("plugin:window|unmaximize", {
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
    return S("plugin:window|toggle_maximize", {
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
    return S("plugin:window|minimize", {
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
    return S("plugin:window|unminimize", {
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
    return S("plugin:window|show", {
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
    return S("plugin:window|hide", {
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
    return S("plugin:window|close", {
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
    return S("plugin:window|destroy", {
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
    return S("plugin:window|set_decorations", {
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
    return S("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return S("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return S("plugin:window|set_effects", {
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
    return S("plugin:window|set_always_on_top", {
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
    return S("plugin:window|set_always_on_bottom", {
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
    return S("plugin:window|set_content_protected", {
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
    return S("plugin:window|set_size", {
      label: this.label,
      value: t instanceof _e ? t : new _e(t)
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
    return S("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof _e ? t : t ? new _e(t) : null
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
    return S("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof _e ? t : t ? new _e(t) : null
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
    function e(i) {
      return i ? { Logical: i } : null;
    }
    return S("plugin:window|set_size_constraints", {
      label: this.label,
      value: {
        minWidth: e(t?.minWidth),
        minHeight: e(t?.minHeight),
        maxWidth: e(t?.maxWidth),
        maxHeight: e(t?.maxHeight)
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
    return S("plugin:window|set_position", {
      label: this.label,
      value: t instanceof on ? t : new on(t)
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
    return S("plugin:window|set_fullscreen", {
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
    return S("plugin:window|set_focus", {
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
    return S("plugin:window|set_icon", {
      label: this.label,
      value: xn(t)
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
    return S("plugin:window|set_skip_taskbar", {
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
    return S("plugin:window|set_cursor_grab", {
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
    return S("plugin:window|set_cursor_visible", {
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
    return S("plugin:window|set_cursor_icon", {
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
    return S("plugin:window|set_background_color", { color: t });
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
    return S("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof on ? t : new on(t)
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
    return S("plugin:window|set_ignore_cursor_events", {
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
    return S("plugin:window|start_dragging", {
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
    return S("plugin:window|start_resize_dragging", {
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
    return S("plugin:window|set_badge_count", {
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
    return S("plugin:window|set_badge_label", {
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
    return S("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? xn(t) : void 0
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
    return S("plugin:window|set_progress_bar", {
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
    return S("plugin:window|set_visible_on_all_workspaces", {
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
    return S("plugin:window|set_title_bar_style", {
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
    return S("plugin:window|set_theme", {
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
    return this.listen(Vt.WINDOW_RESIZED, (e) => {
      e.payload = new Ye(e.payload), t(e);
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
    return this.listen(Vt.WINDOW_MOVED, (e) => {
      e.payload = new ae(e.payload), t(e);
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
    return this.listen(Vt.WINDOW_CLOSE_REQUESTED, async (e) => {
      const i = new Ea(e);
      await t(i), i.isPreventDefault() || await this.destroy();
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
    const e = await this.listen(Vt.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new ae(a.payload.position)
        }
      });
    }), i = await this.listen(Vt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new ae(a.payload.position)
        }
      });
    }), s = await this.listen(Vt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new ae(a.payload.position)
        }
      });
    }), o = await this.listen(Vt.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      e(), s(), i(), o();
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
    const e = await this.listen(Vt.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(Vt.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
    });
    return () => {
      e(), i();
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
    return this.listen(Vt.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Vt.WINDOW_THEME_CHANGED, t);
  }
}
var Ui;
(function(n) {
  n.Disabled = "disabled", n.Throttle = "throttle", n.Suspend = "suspend";
})(Ui || (Ui = {}));
var Yi;
(function(n) {
  n.AppearanceBased = "appearanceBased", n.Light = "light", n.Dark = "dark", n.MediumLight = "mediumLight", n.UltraDark = "ultraDark", n.Titlebar = "titlebar", n.Selection = "selection", n.Menu = "menu", n.Popover = "popover", n.Sidebar = "sidebar", n.HeaderView = "headerView", n.Sheet = "sheet", n.WindowBackground = "windowBackground", n.HudWindow = "hudWindow", n.FullScreenUI = "fullScreenUI", n.Tooltip = "tooltip", n.ContentBackground = "contentBackground", n.UnderWindowBackground = "underWindowBackground", n.UnderPageBackground = "underPageBackground", n.Mica = "mica", n.Blur = "blur", n.Acrylic = "acrylic", n.Tabbed = "tabbed", n.TabbedDark = "tabbedDark", n.TabbedLight = "tabbedLight";
})(Yi || (Yi = {}));
var Zi;
(function(n) {
  n.FollowsWindowActiveState = "followsWindowActiveState", n.Active = "active", n.Inactive = "inactive";
})(Zi || (Zi = {}));
var L = /* @__PURE__ */ ((n) => (n.None = "none", n.Drawing = "drawing", n.Moving = "moving", n.ResizingNW = "resizing-nw", n.ResizingNE = "resizing-ne", n.ResizingSW = "resizing-sw", n.ResizingSE = "resizing-se", n.ResizingN = "resizing-n", n.ResizingS = "resizing-s", n.ResizingW = "resizing-w", n.ResizingE = "resizing-e", n.DrawingRect = "drawing-rect", n.DrawingEllipse = "drawing-ellipse", n.DrawingLine = "drawing-line", n.DrawingArrow = "drawing-arrow", n.DrawingPen = "drawing-pen", n.EditingAnnotation = "editing-annotation", n.MovingAnnotation = "moving-annotation", n.ResizingAnnotationNW = "resizing-annotation-nw", n.ResizingAnnotationSE = "resizing-annotation-se", n.DrawingText = "drawing-text", n.DrawingMarker = "drawing-marker", n.DrawingMosaic = "drawing-mosaic", n.ColorPicking = "color-picking", n.Pinning = "pinning", n))(L || {}), f = /* @__PURE__ */ ((n) => (n.Select = "select", n.Rectangle = "rectangle", n.Ellipse = "ellipse", n.Line = "line", n.Arrow = "arrow", n.Pen = "pen", n.Mosaic = "mosaic", n.Text = "text", n.Marker = "marker", n.ColorPicker = "color-picker", n.Ocr = "ocr", n.Pin = "pin", n.Translate = "translate", n))(f || {});
function Xn(n, t, e) {
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.min(n, Math.max(0, t) / 2, Math.max(0, e) / 2);
}
function Wa(n, t, e, i) {
  if (!i) return e;
  const s = e.x - t.x, o = e.y - t.y;
  if (n === f.Ellipse || n === f.Rectangle) {
    const a = Math.max(Math.abs(s), Math.abs(o));
    return {
      x: t.x + Math.sign(s || 1) * a,
      y: t.y + Math.sign(o || 1) * a
    };
  }
  if (n === f.Line || n === f.Arrow) {
    const a = Math.hypot(s, o), r = Math.PI / 4, l = Math.round(Math.atan2(o, s) / r) * r;
    return {
      x: t.x + Math.cos(l) * a,
      y: t.y + Math.sin(l) * a
    };
  }
  return e;
}
function Mt(n, t) {
  const e = t.x - n.x, i = t.y - n.y;
  return Math.sqrt(e * e + i * i);
}
function Xi(n, t) {
  return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
}
function Ds(n) {
  return {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
}
function Ba(n, t) {
  return {
    x: Math.max(t.x, Math.min(n.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(n.y, t.y + t.height))
  };
}
function Qt(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && !isNaN(n.x) && !isNaN(n.y) && isFinite(n.x) && isFinite(n.y);
}
function Te(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && typeof n.width == "number" && typeof n.height == "number" && !isNaN(n.x) && !isNaN(n.y) && !isNaN(n.width) && !isNaN(n.height) && isFinite(n.x) && isFinite(n.y) && isFinite(n.width) && isFinite(n.height) && n.width > 0 && n.height > 0;
}
class Na {
  constructor(t, e) {
    P(this, "canvas");
    P(this, "ctx");
    P(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = e;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t, e = 0) {
    if (!Te(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const i = this.canvas.width / (window.devicePixelRatio || 1), s = this.canvas.height / (window.devicePixelRatio || 1), o = Math.round(t.x), a = Math.round(t.y), r = Math.round(t.width), l = Math.round(t.height), h = Xn(e, r, l);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, i, s), this.ctx.roundRect(o, a, r, l, h), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, e = !0, i = 0) {
    const { x: s, y: o, width: a, height: r } = t;
    this.ctx.save();
    const l = Math.round(s) + 0.5, h = Math.round(o) + 0.5, u = Math.max(0, Math.round(a) - 1), d = Math.max(0, Math.round(r) - 1), y = Xn(i, u, d);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.beginPath(), this.ctx.roundRect(
      l + 1,
      h + 1,
      u,
      d,
      y
    ), this.ctx.stroke(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.beginPath(), this.ctx.roundRect(l, h, u, d, y), this.ctx.stroke(), e && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: e, y: i, width: s, height: o } = t, a = Ds(t);
    this.ctx.setLineDash([]), [
      { x: e, y: i, width: 10, height: 10 },
      // 左上
      { x: e + s, y: i, width: 10, height: 10 },
      // 右上
      { x: e, y: i + o, width: 10, height: 10 },
      // 左下
      { x: e + s, y: i + o, width: 10, height: 10 },
      // 右下
      { x: a.x, y: i, width: 16, height: 6 },
      // 上中
      { x: a.x, y: i + o, width: 16, height: 6 },
      // 下中
      { x: e, y: a.y, width: 6, height: 16 },
      // 左中
      { x: e + s, y: a.y, width: 6, height: 16 }
      // 右中
    ].forEach((l) => {
      const h = Math.round(l.x) - l.width / 2, u = Math.round(l.y) - l.height / 2, d = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(h + 1, u + 1, l.width, l.height, d), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(h, u, l.width, l.height, d), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
    });
  }
  // 绘制标注列表
  drawAnnotations(t, e) {
    const i = this.createDrawingContext(e);
    t.forEach((s) => {
      const o = s.getData();
      o.hovered && s.drawHover(i), s.draw(i), o.selected && (s.drawSelection(i), ["rectangle", "ellipse", "line", "arrow"].includes(o.type) && this.drawAnnotationHandles(s));
    });
  }
  // 绘制当前正在创建的标注
  drawCurrentAnnotation(t, e) {
    const i = this.createDrawingContext(e);
    t.draw(i);
  }
  // 创建绘制上下文
  createDrawingContext(t) {
    return {
      ctx: this.ctx,
      scale: 1,
      offset: { x: 0, y: 0 },
      bounds: t || { x: 0, y: 0, width: this.canvas.width, height: this.canvas.height }
    };
  }
  // 为截图创建绘制上下文
  createScreenshotContext(t, e, i) {
    return {
      ctx: t,
      scale: e,
      offset: { x: i.x * e, y: i.y * e },
      bounds: i
    };
  }
  // 获取坐标转换器
  getCoordinateTransform() {
    return this.coordinateTransform;
  }
  // 获取画布
  getCanvas() {
    return this.canvas;
  }
  // 获取上下文
  getContext() {
    return this.ctx;
  }
  // 绘制标注控制点
  drawAnnotationHandles(t) {
    const e = t.getData();
    if (e.type !== "mosaic" && e.type !== "text" && ["rectangle", "ellipse", "line", "arrow"].includes(e.type) && e.points.length >= 2) {
      const i = e.points[0], s = e.points[e.points.length - 1], o = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(i.x, i.y, o, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(s.x, s.y, o, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, e) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: i, colorInfo: s, showFormat: o, previewImage: a, zoomFactor: r, isCopied: l } = t, h = 156, u = 188, d = 18;
    let y = i.x + d, k = i.y + d;
    y + h > e.x + e.width && (y = i.x - h - d), k + u > e.y + e.height && (k = i.y - u - d), y < e.x && (y = e.x + d), k < e.y && (k = e.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(y, k, h, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const M = 108, m = y + (h - M) / 2, v = k + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(m, v, M, M), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(m, v, M, M);
    const R = a ? a.width : r, $ = M / R;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      m,
      v,
      M,
      M
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let U = 1; U < R; U++) {
      const J = m + U * $;
      this.ctx.moveTo(J, v), this.ctx.lineTo(J, v + M);
      const K = v + U * $;
      this.ctx.moveTo(m, K), this.ctx.lineTo(m + M, K);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let U = 1; U < R; U++) {
      const J = m + U * $ + 0.5;
      this.ctx.moveTo(J, v), this.ctx.lineTo(J, v + M);
      const K = v + U * $ + 0.5;
      this.ctx.moveTo(m, K), this.ctx.lineTo(m + M, K);
    }
    this.ctx.stroke();
    const z = Math.floor(R / 2), Y = m + z * $, Z = v + z * $;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(Y, Z, $, $), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      Y - 1,
      Z - 1,
      $ + 2,
      $ + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      Y,
      Z,
      $,
      $
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let X = v + M + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(y + 16, X - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(y + 16, X - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const U = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(U, y + 44, X), X += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, y + 16, X), X += 17, this.ctx.font = "12px Arial";
    const j = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(j, y + 16, X), this.ctx.restore();
  }
}
class Ha {
  // 物理尺寸
  constructor(t) {
    P(this, "scale");
    P(this, "canvasRect");
    P(this, "canvasSize");
    // 逻辑尺寸
    P(this, "physicalSize");
    this.canvasRect = t.getBoundingClientRect(), this.canvasSize = {
      width: this.canvasRect.width,
      height: this.canvasRect.height
    }, this.physicalSize = {
      width: t.width,
      height: t.height
    }, this.scale = this.calculateScale();
  }
  // 更新画布矩形信息
  updateCanvasRect(t) {
    this.canvasRect = t.getBoundingClientRect(), this.canvasSize = {
      width: this.canvasRect.width,
      height: this.canvasRect.height
    }, this.physicalSize = {
      width: t.width,
      height: t.height
    }, this.scale = this.calculateScale();
  }
  // 计算缩放比例（DPI）
  calculateScale() {
    return this.physicalSize.width / this.canvasRect.width;
  }
  // 从鼠标事件获取画布坐标
  getCanvasPosition(t) {
    return {
      x: t.clientX - this.canvasRect.left,
      y: t.clientY - this.canvasRect.top
    };
  }
  // 逻辑像素转物理像素
  logicalToPhysical(t) {
    return Qt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return Qt(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !Qt(t) || !Te(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !Qt(t) || !Te(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Te(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!Qt(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Ba(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Te(t))
      return console.warn("Invalid rect in clampRectToCanvas:", t), { x: 0, y: 0, width: 0, height: 0 };
    const e = Math.max(0, t.x), i = Math.max(0, t.y), s = Math.min(this.canvasSize.width - e, t.width), o = Math.min(this.canvasSize.height - i, t.height);
    return { x: e, y: i, width: s, height: o };
  }
  // 获取画布尺寸
  getCanvasSize() {
    return { ...this.canvasSize };
  }
  // 获取缩放比例
  getScale() {
    return this.scale;
  }
  // 计算两点间距离（使用工具函数）
  distance(t, e) {
    return Mt(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, i = 0) {
    if (!Qt(t) || !Te(e))
      return !1;
    if (i === 0)
      return Xi(t, e);
    const s = {
      x: e.x - i,
      y: e.y - i,
      width: e.width + i * 2,
      height: e.height + i * 2
    };
    return Xi(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, i, s = 8) {
    if (!Qt(t) || !Qt(e) || !Qt(i))
      return !1;
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Mt(t, e) <= s;
    const d = h / u;
    let y;
    return d < 0 ? y = e : d > 1 ? y = i : y = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, y) <= s;
  }
}
class Fa {
  constructor(t, e) {
    P(this, "coordinateSystem");
    P(this, "canvas");
    P(this, "isDrawing", !1);
    P(this, "currentOperation", L.None);
    P(this, "startPoint", { x: 0, y: 0 });
    P(this, "lastMousePos", { x: 0, y: 0 });
    P(this, "preventDefault", (t) => {
      t.preventDefault();
    });
    this.canvas = t, this.coordinateSystem = e, this.bindEvents();
  }
  bindEvents() {
    this.canvas.addEventListener("contextmenu", this.preventDefault), this.canvas.addEventListener("dragstart", this.preventDefault), this.canvas.addEventListener("selectstart", this.preventDefault);
  }
  unbind() {
    this.canvas.removeEventListener("contextmenu", this.preventDefault), this.canvas.removeEventListener("dragstart", this.preventDefault), this.canvas.removeEventListener("selectstart", this.preventDefault);
  }
  getOperationType(t, e, i, s) {
    const o = this.getAnnotationAtPoint(t, s);
    if (e !== f.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(e) : L.None : L.Drawing;
    if (o) {
      if (o.getData().type === f.Mosaic)
        return L.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== L.None ? a : L.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : L.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [f.Rectangle]: L.DrawingRect,
      [f.Ellipse]: L.DrawingEllipse,
      [f.Line]: L.DrawingLine,
      [f.Arrow]: L.DrawingArrow,
      [f.Pen]: L.DrawingPen,
      [f.Text]: L.DrawingText,
      [f.Marker]: L.DrawingMarker,
      [f.Mosaic]: L.DrawingMosaic,
      [f.ColorPicker]: L.ColorPicking,
      [f.Ocr]: L.None,
      [f.Pin]: L.Pinning,
      [f.Translate]: L.None,
      [f.Select]: L.None
    }[t] || L.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, i) {
    const { x: s, y: o, width: a, height: r } = e, l = 12;
    if (i)
      return L.None;
    const h = Ds(e);
    return this.isInHandle(t, { x: s, y: o }, l) ? L.ResizingNW : this.isInHandle(t, { x: s + a, y: o }, l) ? L.ResizingNE : this.isInHandle(t, { x: s, y: o + r }, l) ? L.ResizingSW : this.isInHandle(t, { x: s + a, y: o + r }, l) ? L.ResizingSE : this.isInHandle(t, { x: h.x, y: o }, l) ? L.ResizingN : this.isInHandle(t, { x: h.x, y: o + r }, l) ? L.ResizingS : this.isInHandle(t, { x: s, y: h.y }, l) ? L.ResizingW : this.isInHandle(t, { x: s + a, y: h.y }, l) ? L.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? L.Moving : L.Drawing;
  }
  // 检查是否在控制点范围内
  isInHandle(t, e, i) {
    return Math.abs(t.x - e.x) <= i && Math.abs(t.y - e.y) <= i;
  }
  // 获取指定位置的标注
  getAnnotationAtPoint(t, e) {
    for (let i = e.length - 1; i >= 0; i--) {
      const s = e[i];
      if (s.hitTest(t))
        return s;
    }
    return null;
  }
  // 获取标注控制点操作类型
  getAnnotationControlPointOperation(t, e) {
    if (!Qt(t))
      return L.None;
    const i = e.getData();
    if (i.type === f.Mosaic || i.type === f.Text || i.type === f.Marker)
      return L.None;
    if ([
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = Mt(t, s), h = Mt(t, o);
      if (l <= a + r)
        return L.ResizingAnnotationNW;
      if (h <= a + r)
        return L.ResizingAnnotationSE;
    }
    return L.None;
  }
  // 获取绘制状态
  getDrawingState() {
    return {
      isDrawing: this.isDrawing,
      currentOperation: this.currentOperation,
      startPoint: this.startPoint,
      lastMousePos: this.lastMousePos
    };
  }
  // 设置操作类型
  setCurrentOperation(t) {
    this.currentOperation = t;
  }
  // 开始绘制操作
  startDrawing(t) {
    this.isDrawing = !0, this.startPoint = t, this.lastMousePos = t;
  }
  // 结束绘制操作
  stopDrawing() {
    this.isDrawing = !1, this.currentOperation = L.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class ce {
  constructor(t) {
    P(this, "data");
    this.data = t;
  }
  // 获取标注数据
  getData() {
    return this.data;
  }
  // 更新标注数据
  updateData(t) {
    this.data = { ...this.data, ...t };
  }
  // 添加点
  addPoint(t) {
    this.data.points.push(t);
  }
  // 更新最后一个点
  updateLastPoint(t) {
    this.data.points.length > 0 && (this.data.points[this.data.points.length - 1] = t);
  }
  // 移动标注
  move(t, e) {
    this.data.points.forEach((i) => {
      i.x += t, i.y += e;
    });
  }
  // 检查是否有效
  isValid() {
    return this.data.points.length >= this.getMinPoints();
  }
  applyOpacity(t) {
    t.globalAlpha *= this.data.style.opacity ?? 1;
  }
  // 生成唯一ID
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
class ja extends ce {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Rectangle,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = s.x - i.x, a = s.y - i.y;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(i.x, i.y, o, a), e.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: o.x * i - s.x,
      y: o.y * i - s.y
    }, l = (a.x - o.x) * i, h = (a.y - o.y) * i;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth * i, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(r.x, r.y, l, h), e.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = Math.min(i.x, s.x), a = Math.max(i.x, s.x), r = Math.min(i.y, s.y), l = Math.max(i.y, s.y);
    return t.x >= o - e && t.x <= a + e && t.y >= r - e && t.y <= l + e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), o = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((s) => {
      e.fillRect(s.x - i / 2, s.y - i / 2, i, i), e.strokeRect(s.x - i / 2, s.y - i / 2, i, i);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1], o = s.x - i.x, a = s.y - i.y;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(i.x, i.y, o, a), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const s = this.data.points[i];
      if (Mt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Va extends ce {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Ellipse,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    this.data.points.length < 2 || this.drawEllipse(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.data.points.length < 2 || this.drawEllipse(t.ctx, t.scale, t.offset);
  }
  drawEllipse(t, e, i) {
    const s = this.getBounds();
    if (!s) return;
    const o = (s.x + s.width / 2) * e - i.x, a = (s.y + s.height / 2) * e - i.y, r = Math.max(s.width * e / 2, 0.5), l = Math.max(s.height * e / 2, 0.5);
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.ellipse(o, a, r, l, 0, 0, Math.PI * 2), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    const i = this.getBounds();
    if (!i) return !1;
    const s = i.width / 2, o = i.height / 2;
    if (s < 1 || o < 1)
      return t.x >= i.x - e && t.x <= i.x + i.width + e && t.y >= i.y - e && t.y <= i.y + i.height + e;
    const a = i.x + s, r = i.y + o, l = Math.sqrt(
      (t.x - a) ** 2 / s ** 2 + (t.y - r) ** 2 / o ** 2
    );
    return Math.abs(l - 1) * Math.min(s, o) <= e;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), o = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = this.getBounds();
    i && (e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.setLineDash([3, 3]), e.strokeRect(i.x, i.y, i.width, i.height), e.restore());
  }
  drawHover(t) {
    const { ctx: e } = t, i = this.getBounds();
    i && (e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.ellipse(
      i.x + i.width / 2,
      i.y + i.height / 2,
      Math.max(i.width / 2, 0.5),
      Math.max(i.height / 2, 0.5),
      0,
      0,
      Math.PI * 2
    ), e.stroke(), e.restore());
  }
}
class Ua extends ce {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Line,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    this.data.points.length < 2 || this.drawLine(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.data.points.length < 2 || this.drawLine(t.ctx, t.scale, t.offset);
  }
  drawLine(t, e, i) {
    const s = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(s.x * e - i.x, s.y * e - i.y), t.lineTo(o.x * e - i.x, o.y * e - i.y), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, s, e);
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), o = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    this.drawEndpoints(t.ctx);
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(s.x, s.y), e.stroke(), e.restore();
  }
  drawEndpoints(t) {
    t.save(), t.fillStyle = "#3b82f6", t.strokeStyle = "#ffffff", t.lineWidth = 1, this.data.points.forEach((i) => {
      t.fillRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6), t.strokeRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6);
    }), t.restore();
  }
  isPointNearLine(t, e, i, s) {
    const o = i.x - e.x, a = i.y - e.y, r = o * o + a * a;
    if (r === 0)
      return Mt(t, e) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - e.x) * o + (t.y - e.y) * a) / r)), h = {
      x: e.x + l * o,
      y: e.y + l * a
    };
    return Mt(t, h) <= s;
  }
}
class Ya extends ce {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Arrow,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    this.drawArrow(e, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: s } = t;
    this.drawArrow(e, i, s);
  }
  drawArrow(t, e, i) {
    const s = this.data.points[0], o = this.data.points[this.data.points.length - 1], a = {
      x: s.x * e - i.x,
      y: s.y * e - i.y
    }, r = {
      x: o.x * e - i.x,
      y: o.y * e - i.y
    };
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
    const l = Math.atan2(o.y - s.y, o.x - s.x), h = 15 * e, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l - u),
      r.y - h * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l + u),
      r.y - h * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, s, e);
  }
  isPointNearLine(t, e, i, s) {
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Mt(t, e) <= s;
    const d = h / u;
    let y;
    return d < 0 ? y = e : d > 1 ? y = i : y = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, y) <= s;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], e = this.data.points[this.data.points.length - 1], i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), o = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
    return {
      x: i,
      y: o,
      width: s - i,
      height: a - o
    };
  }
  drawSelection(t) {
    const { ctx: e } = t, i = 6;
    e.save(), e.fillStyle = "#3b82f6", e.strokeStyle = "#ffffff", e.lineWidth = 1, this.data.points.forEach((s) => {
      e.fillRect(s.x - i / 2, s.y - i / 2, i, i), e.strokeRect(s.x - i / 2, s.y - i / 2, i, i);
    }), e.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t, i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(s.x, s.y), e.stroke(), e.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, e = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const s = this.data.points[i];
      if (Mt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Za extends ce {
  constructor(t, e) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Pen,
      points: [t],
      style: e
    });
  }
  getMinPoints() {
    return 2;
  }
  // 智能添加点（带插值）
  addPoint(t) {
    if (this.data.points.length > 0) {
      const e = this.data.points[this.data.points.length - 1], i = Mt(t, e);
      if (i > 5) {
        const s = Math.ceil(i / 3);
        for (let o = 1; o < s; o++) {
          const a = o / s, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    this.drawPath(e, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e, scale: i, offset: s } = t;
    this.drawPath(e, i, s);
  }
  drawPath(t, e, i) {
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * e, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
    const s = this.data.points[0], o = s.x * e - i.x, a = s.y * e - i.y;
    t.moveTo(o, a);
    for (let r = 1; r < this.data.points.length; r++) {
      const l = this.data.points[r], h = l.x * e - i.x, u = l.y * e - i.y;
      t.lineTo(h, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? Mt(t, this.data.points[0]) <= e : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const s = this.data.points[i], o = this.data.points[i + 1];
      if (this.isPointNearLine(t, s, o, e))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, e, i, s) {
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Mt(t, e) <= s;
    const d = h / u;
    let y;
    return d < 0 ? y = e : d > 1 ? y = i : y = {
      x: e.x + d * r,
      y: e.y + d * l
    }, Mt(t, y) <= s;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, i = this.data.points[0].y, s = this.data.points[0].y;
    return this.data.points.forEach((o) => {
      t = Math.min(t, o.x), e = Math.max(e, o.x), i = Math.min(i, o.y), s = Math.max(s, o.y);
    }), {
      x: t,
      y: i,
      width: e - t,
      height: s - i
    };
  }
  drawSelection(t) {
    const e = this.getBounds();
    if (!e) return;
    const { ctx: i } = t;
    i.save(), i.setLineDash([2, 2]), i.strokeStyle = "#3b82f6", i.lineWidth = 1, i.strokeRect(e.x, e.y, e.width, e.height), i.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: e } = t;
    e.save(), e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.lineCap = "round", e.lineJoin = "round", e.beginPath(), e.moveTo(this.data.points[0].x, this.data.points[0].y);
    for (let i = 1; i < this.data.points.length; i++)
      e.lineTo(this.data.points[i].x, this.data.points[i].y);
    e.stroke(), e.restore();
  }
}
const ie = "sans-serif", ze = (n) => ({
  x: n.x + 4,
  y: n.y - 8
});
class Xa extends ce {
  constructor(t, e, i, s = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Text,
      points: [t],
      style: i,
      text: e,
      fontSize: s
    });
  }
  getMinPoints() {
    return 1;
  }
  // 更新文字内容
  updateText(t) {
    this.data.text = t;
  }
  // 更新字体大小
  updateFontSize(t) {
    this.data.fontSize = t;
  }
  draw(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e } = t;
    this.drawText(e, 1, { x: 0, y: 0 }, t.bounds);
  }
  drawToScreenshot(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s, bounds: o } = t;
    this.drawText(e, i, s, o);
  }
  drawText(t, e, i, s) {
    const o = (this.data.fontSize || 16) * e, a = this.data.points[0];
    t.save(), this.applyOpacity(t), t.font = `${o}px ${ie}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = ze(a), l = r.x * e - i.x, h = r.y * e - i.y;
    t.fillText(this.data.text, l, h), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${ie}`;
    const l = a.measureText(this.data.text).width, { x: h, y: u } = ze(i);
    return t.x >= h - e && t.x <= h + l + e && t.y >= u - e && t.y <= u + s + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${e}px ${ie}`;
    const a = s.measureText(this.data.text).width, { x: r, y: l } = ze(t);
    return {
      x: r,
      y: l,
      width: a,
      height: e
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = ze(o), l = r.x * i - s.x, h = r.y * i - s.y;
    e.save(), e.font = `${a}px ${ie}`;
    const d = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(l, h, d, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = ze(o), l = r.x * i - s.x, h = r.y * i - s.y;
    e.save(), e.font = `${a}px ${ie}`;
    const d = e.measureText(this.data.text).width;
    e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(l, h, d, a), e.restore();
  }
  // 获取文字内容
  getText() {
    return this.data.text || "";
  }
  // 获取字体大小
  getFontSize() {
    return this.data.fontSize || 16;
  }
  // 检查是否为空文字
  isEmpty() {
    return !this.data.text || this.data.text.trim().length === 0;
  }
  // 重写isValid方法
  isValid() {
    return this.data.points.length >= this.getMinPoints() && !this.isEmpty();
  }
}
const te = class te extends ce {
  constructor(t, e, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Mosaic,
      points: [t],
      style: e,
      mosaicSize: i,
      mosaicColor: "transparent"
      // 真实马赛克不需要颜色，颜色源自底图
    });
  }
  getMinPoints() {
    return 1;
  }
  addPoint(t) {
    if (this.data.points.length > 0) {
      const e = this.data.points[this.data.points.length - 1], i = Mt(t, e);
      if (i > 2) {
        const s = Math.ceil(i / 2);
        for (let o = 1; o < s; o++) {
          const a = o / s, r = e.x + (t.x - e.x) * a, l = e.y + (t.y - e.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length === 0) return;
    const { ctx: e, bounds: i } = t;
    this.renderRealMosaic(e, window.devicePixelRatio || 1, { x: 0, y: 0 }, i);
  }
  drawToScreenshot(t) {
    if (this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s, bounds: o } = t;
    this.renderRealMosaic(e, i, s, o);
  }
  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  renderRealMosaic(t, e, i, s) {
    te.helperCanvas || (te.helperCanvas = document.createElement("canvas"), te.helperCtx = te.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const o = te.helperCanvas, a = te.helperCtx, r = e || 1, l = this.data.mosaicSize || 8, h = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const y = u, k = Math.floor(d.x - y), M = Math.floor(d.y - y), m = Math.ceil(d.width + y * 2), v = Math.ceil(d.height + y * 2);
    if (m <= 0 || v <= 0) return;
    const R = Math.floor(k * r - i.x), $ = Math.floor(M * r - i.y), z = Math.ceil(m * r), Y = Math.ceil(v * r), Z = t.canvas.width, X = t.canvas.height, j = Math.max(0, R), U = Math.max(0, $), J = Math.min(z, Z - j), K = Math.min(Y, X - U);
    if (J <= 0 || K <= 0) return;
    let it;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), it = t.getImageData(j, U, J, K), t.restore();
    } catch {
      return;
    }
    const st = it.data, nt = j % h, ot = U % h;
    for (let at = -ot; at < K; at += h)
      for (let G = -nt; G < J; G += h) {
        const Q = Math.max(0, G), pt = Math.max(0, at), wt = Math.min(J, G + h), ft = Math.min(K, at + h);
        if (Q >= wt || pt >= ft) continue;
        let Ct = 0, O = 0, Tt = 0, H = 0;
        for (let zt = pt; zt < ft; zt++)
          for (let yt = Q; yt < wt; yt++) {
            const At = (zt * J + yt) * 4;
            Ct += st[At], O += st[At + 1], Tt += st[At + 2], H++;
          }
        if (H > 0) {
          Ct = Math.round(Ct / H / 8) * 8, O = Math.round(O / H / 8) * 8, Tt = Math.round(Tt / H / 8) * 8;
          for (let yt = pt; yt < ft; yt++)
            for (let At = Q; At < wt; At++) {
              const Wt = (yt * J + At) * 4;
              st[Wt] = Ct, st[Wt + 1] = O, st[Wt + 2] = Tt;
            }
        }
      }
    o.width = J, o.height = K, a.putImageData(it, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, j, U), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, j, U), t.restore();
  }
  // 在物理坐标系中绘制路径
  drawPathPhysical(t, e, i, s, o) {
    if (this.data.points.length < 1) return;
    t.beginPath();
    const a = (l) => l.x * e - i.x - s, r = (l) => l.y * e - i.y - o;
    if (this.data.points.length === 1) {
      const l = this.data.points[0];
      t.arc(a(l), r(l), t.lineWidth / 2, 0, Math.PI * 2), t.fill();
    } else {
      const l = this.data.points[0];
      t.moveTo(a(l), r(l));
      for (let u = 1; u < this.data.points.length - 1; u++) {
        const d = this.data.points[u], y = this.data.points[u + 1], k = (a(d) + a(y)) / 2, M = (r(d) + r(y)) / 2;
        t.quadraticCurveTo(a(d), r(d), k, M);
      }
      const h = this.data.points[this.data.points.length - 1];
      t.lineTo(a(h), r(h)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Mt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + e;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const s = this.data.points[i], o = this.data.points[i + 1];
      if (this.isPointNearLine(t, s, o, (this.data.mosaicSize || 8) * 1.5 + e))
        return !0;
    }
    return !1;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, e = this.data.points[0].x, i = this.data.points[0].y, s = this.data.points[0].y;
    for (const o of this.data.points)
      t = Math.min(t, o.x), e = Math.max(e, o.x), i = Math.min(i, o.y), s = Math.max(s, o.y);
    return {
      x: t,
      y: i,
      width: e - t,
      height: s - i
    };
  }
  isPointNearLine(t, e, i, s) {
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, h = o * r + a * l, u = r * r + l * l;
    let d = -1;
    u !== 0 && (d = h / u);
    let y, k;
    d < 0 ? (y = e.x, k = e.y) : d > 1 ? (y = i.x, k = i.y) : (y = e.x + d * r, k = e.y + d * l);
    const M = t.x - y, m = t.y - k;
    return M * M + m * m <= s * s;
  }
  drawSelection(t) {
  }
  drawHover(t) {
  }
  updateMosaicSize(t) {
    this.data.mosaicSize = t;
  }
  getMosaicSize() {
    return this.data.mosaicSize || 8;
  }
};
// 缓存离屏 Canvas 以减少 GC 压力（静态复用）
P(te, "helperCanvas", null), P(te, "helperCtx", null);
let Gn = te;
const re = 16, dn = (n = re) => Math.max(12, Math.round(n * 0.75)), Kn = (n, t = re) => {
  const e = dn(t);
  return {
    x: n.x + e + 12,
    y: n.y - t / 2
  };
};
class Ga extends ce {
  constructor(t, e, i, s, o = re) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Marker,
      points: [t],
      style: s,
      text: i,
      fontSize: o,
      markerNumber: e
    });
  }
  getMinPoints() {
    return 1;
  }
  draw(t) {
    this.drawMarker(t.ctx, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    this.drawMarker(t.ctx, t.scale, t.offset);
  }
  drawMarker(t, e, i) {
    const s = this.data.points[0];
    if (!s) return;
    const o = (this.data.fontSize || re) * e, a = dn(this.data.fontSize || re) * e, r = s.x * e - i.x, l = s.y * e - i.y, h = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, o, e), h) {
      const u = Kn(
        s,
        this.data.fontSize || re
      ), d = u.x * e - i.x, y = u.y * e - i.y, k = y + o + 3 * e;
      t.font = `${o}px ${ie}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(h, d, y);
      const M = t.measureText(h).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * e * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * e, k), t.lineTo(d + M + 3 * e, k), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, e, i, s, o, a) {
    t.beginPath(), t.arc(e, i, s, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${o}px ${ie}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), e, i + a * 0.5);
  }
  hitTest(t, e = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const s = dn(this.data.fontSize || re);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= s + e) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - e && t.x <= a.x + a.width + e && t.y >= a.y - e && t.y <= a.y + a.height + e;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const e = this.data.fontSize || re, i = dn(e), s = this.data.text?.trim() || "";
    let o = t.x + i;
    if (s) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${e}px ${ie}`, o = Kn(t, e).x + r.measureText(s).width + 4);
    }
    return {
      x: t.x - i,
      y: t.y - i,
      width: o - (t.x - i),
      height: Math.max(i * 2, e + i)
    };
  }
  drawSelection(t) {
    this.drawStateOutline(t, "#3b82f6", [3, 3], 1);
  }
  drawHover(t) {
    this.drawStateOutline(t, "#3b82f6", [4, 4], 2);
  }
  drawStateOutline(t, e, i, s) {
    const o = this.getBounds();
    o && (t.ctx.save(), t.ctx.strokeStyle = e, t.ctx.lineWidth = s, t.ctx.setLineDash(i), t.ctx.strokeRect(o.x, o.y, o.width, o.height), t.ctx.restore());
  }
}
class an {
  static createAnnotation(t, e, i, s = {}) {
    switch (t) {
      case f.Rectangle:
        return new ja(e, i);
      case f.Ellipse:
        return new Va(e, i);
      case f.Line:
        return new Ua(e, i);
      case f.Arrow:
        return new Ya(e, i);
      case f.Pen:
        return new Za(e, i);
      case f.Text:
        return new Xa(
          e,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case f.Marker:
        return new Ga(
          e,
          s.markerNumber || 1,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case f.Mosaic:
        return new Gn(
          e,
          i,
          s.mosaicSize || 8
        );
      default:
        return null;
    }
  }
  // 从数据恢复标注
  static fromData(t) {
    const { type: e, points: i, style: s } = t;
    if (!i || i.length === 0) return null;
    const o = i[0], a = this.createAnnotation(e, o, s, {
      text: t.text,
      fontSize: t.fontSize,
      markerNumber: t.markerNumber,
      mosaicSize: t.mosaicSize
    });
    if (a) {
      for (let r = 1; r < i.length; r++)
        a.addPoint(i[r]);
      a.updateData({
        id: t.id,
        selected: t.selected,
        hovered: t.hovered
      });
    }
    return a;
  }
  // 获取工具对应的操作类型
  static getOperationType(t) {
    return {
      [f.Rectangle]: "drawing-rect",
      [f.Ellipse]: "drawing-ellipse",
      [f.Line]: "drawing-line",
      [f.Arrow]: "drawing-arrow",
      [f.Pen]: "drawing-pen",
      [f.Text]: "drawing-text",
      [f.Marker]: "drawing-marker",
      [f.Mosaic]: "drawing-mosaic",
      [f.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== f.Select && t !== f.ColorPicker && t !== f.Ocr && t !== f.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== f.Select && t !== f.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow,
      f.Pen,
      f.Text,
      f.Marker
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow,
      f.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === f.Text || t === f.Marker;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === f.Mosaic;
  }
}
const fe = class fe {
  constructor() {
    P(this, "pool", []);
    P(this, "maxPoolSize", 5);
    // 最大池大小
    P(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return fe.instance || (fe.instance = new fe()), fe.instance;
  }
  /**
   * 获取一个 canvas 对象
   * @param width 宽度
   * @param height 高度
   * @returns canvas 对象
   */
  acquire(t, e) {
    const i = this.pool.findIndex(
      (a) => a.width >= t && a.height >= e && !this.inUse.has(a)
    );
    let s;
    i !== -1 ? (s = this.pool[i], this.pool.splice(i, 1)) : s = document.createElement("canvas"), s.width = t, s.height = e;
    const o = s.getContext("2d");
    return o && o.clearRect(0, 0, t, e), this.inUse.add(s), s;
  }
  /**
   * 释放 canvas 对象回池中
   * @param canvas 要释放的 canvas
   */
  release(t) {
    if (this.inUse.has(t) && (this.inUse.delete(t), this.pool.length < this.maxPoolSize)) {
      const e = t.getContext("2d");
      e && e.clearRect(0, 0, t.width, t.height), this.pool.push(t);
    }
  }
  /**
   * 清空池
   */
  clear() {
    this.pool = [], this.inUse.clear();
  }
  /**
   * 获取池状态
   */
  getStats() {
    return {
      poolSize: this.pool.length,
      inUse: this.inUse.size
    };
  }
};
P(fe, "instance");
let qn = fe;
async function Ka(n, t) {
  return await S("get_local_plugin_resource_path", {
    pluginId: n,
    relativePath: t
  });
}
const qa = "snippets-code:developer-mode", Is = "snippets-code:frontend-diagnostics", Ja = 240, Ne = "[REDACTED]", gn = (n) => n.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Ne}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Ne}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Ne
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Ne}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Ne}`
), ai = (n) => {
  if (n === void 0) return;
  if (typeof n == "string") return gn(n);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return gn(
      JSON.stringify(
        n,
        (e, i) => {
          if (i instanceof Error)
            return {
              name: i.name,
              message: i.message,
              stack: i.stack,
              cause: i.cause
            };
          if (typeof i == "bigint") return i.toString();
          if (typeof i == "object" && i !== null) {
            if (t.has(i)) return "[Circular]";
            t.add(i);
          }
          return i;
        },
        2
      )
    );
  } catch {
    return gn(String(n));
  }
}, Qa = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, tr = () => {
  if (typeof localStorage > "u") return [];
  try {
    const n = JSON.parse(localStorage.getItem(Is) || "[]");
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}, ri = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(qa) === "true";
  } catch {
    return !1;
  }
}, er = (n, t, e) => {
  if (!ri() || typeof localStorage > "u") return;
  const i = tr();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: n,
    windowLabel: Qa(),
    message: gn(t),
    data: ai(e)
  });
  try {
    localStorage.setItem(
      Is,
      JSON.stringify(i.slice(-Ja))
    );
  } catch {
  }
}, nr = () => ri(), ir = (n) => n === "error" || ri(), rn = (n, t, e) => {
  er(n, t, e), ir(n) && S("frontend_log", {
    level: n,
    message: t,
    data: e === void 0 ? null : ai(e)
  }).catch(() => {
  });
}, A = {
  info: (n, t, ...e) => {
    rn("info", n, t);
  },
  error: (n, t) => {
    rn("error", n, t);
  },
  warn: (n, t) => {
    rn("warn", n, t);
  },
  debug: (n, t) => {
    nr() && rn("debug", n, t);
  }
}, Lt = {
  log: (n, t) => {
    S("append_ocr_diagnostic_log", {
      message: n,
      data: t === void 0 ? null : ai(t)
    }).catch(() => {
    });
  }
}, sr = "resources/transformers/transformers.min.js", or = ["translation-offline-runtime", "translation"], ar = "https://huggingface.co/", rr = "{model}/resolve/{revision}/", lr = "/__snippets_code_disabled_transformers_local_models__/", cr = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let He = null;
const hr = (n) => {
  const t = n.toLowerCase();
  return [
    { index: n.lastIndexOf("/"), length: 1 },
    { index: n.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (i, s) => s.index > i.index ? s : i,
    { index: -1, length: 0 }
  );
}, Os = (n) => {
  const t = n.search(/[?#]/), e = t >= 0 ? n.slice(0, t) : n, i = hr(e);
  return i.index >= 0 ? e.slice(0, i.index + i.length) : e;
}, Es = (n) => {
  const t = Os(n);
  return Object.fromEntries(
    cr.map((e) => [e, `${t}${e}`])
  );
}, ur = (n, t) => {
  var e, i;
  n.useBrowserCache = !0, n.allowRemoteModels = !0, n.remoteHost = ar, n.remotePathTemplate = rr, n.allowLocalModels = !1, n.localModelPath = lr, t && (n.backends ?? (n.backends = {}), (e = n.backends).onnx ?? (e.onnx = {}), (i = n.backends.onnx).wasm ?? (i.wasm = {}), n.backends.onnx.wasm.wasmPaths = Es(t), n.backends.onnx.wasm.numThreads = 1);
};
async function dr() {
  return He || (He = (async () => {
    for (const n of or) {
      const t = await Ka(n, sr);
      if (!t) continue;
      const e = La(t), i = await import(
        /* @vite-ignore */
        e
      );
      return ur(i.env, e), A.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
        wasmPaths: i.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: i.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: i.env.remoteHost,
        remotePathTemplate: i.env.remotePathTemplate,
        allowLocalModels: i.env.allowLocalModels,
        localModelPath: i.env.localModelPath
      }), i;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((n) => {
    throw He = null, n;
  }), He);
}
let se = null, Ze = !1, Re = null, we = null, Jn = null;
const gr = "Xenova/opus-mt-en-zh", fr = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], mr = 3e5;
function pr(n) {
  Jn = n;
}
function yr() {
  return fr;
}
function wr(n, t, e) {
  return Promise.race([
    n,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(e)), t)
    )
  ]);
}
async function $s() {
  return se || Re || (Ze = !0, A.info("[离线翻译] 正在加载翻译模型..."), Re = (async () => {
    try {
      const { pipeline: n } = await dr();
      let t = "";
      const e = n("translation", gr, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (s) => {
          s.status === "done" && s.file && s.file !== t && (t = s.file, A.info(`[离线翻译] 已加载: ${s.file}`)), Jn && Jn({
            status: s.status,
            progress: s.progress,
            file: s.file
          });
        }
      });
      return se = await wr(
        e,
        mr,
        "模型加载超时，请检查网络连接后重试"
      ), A.info("[离线翻译] 翻译模型加载完成"), Ze = !1, se;
    } catch (n) {
      throw Ze = !1, Re = null, A.error("[离线翻译] 模型加载失败:", n), n;
    }
  })(), Re);
}
async function Ws(n) {
  if (!n?.trim()) return n;
  we = new AbortController();
  const t = we.signal;
  try {
    const e = await $s();
    if (t.aborted)
      throw new Error("翻译已取消");
    const i = n.split(`
`), s = [];
    for (const o of i) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const a = o.trim();
      if (!a) {
        s.push("");
        continue;
      }
      const r = await e(a);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(r) && r.length > 0) {
        const l = r[0].translation_text || a;
        s.push(l);
      } else
        s.push(a);
    }
    return s.join(`
`);
  } catch (e) {
    throw e instanceof Error && e.message === "翻译已取消" ? (A.info("[离线翻译] 翻译已取消"), e) : e instanceof Error && e.message.includes("离线翻译运行时未安装") ? (A.warn("[离线翻译] 运行时资源未安装"), e) : (A.error("[离线翻译] 翻译失败:", e), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    we = null;
  }
}
function vr() {
  we && (we.abort(), we = null, A.info("[离线翻译] 已发送取消信号"));
}
function xr() {
  return we !== null;
}
async function Bs() {
  await $s();
}
function kr() {
  return se !== null;
}
function br() {
  return Ze;
}
async function li() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      A.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const e of t)
        if (e.includes("transformers") || e.includes("huggingface")) {
          const s = await (await caches.open(e)).keys();
          if (A.info(`[离线翻译] Cache "${e}" 包含 ${s.length} 个文件`), s.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = s.some((r) => r.url.includes(".onnx"));
            if (A.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: e,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const n = await indexedDB.databases();
    A.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(n.map((t) => t.name))}`);
    for (const t of n)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return A.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return A.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (n) {
    return A.warn("[离线翻译] 检查缓存失败:", n), { isCached: !1, cacheType: "none" };
  }
}
async function Sr() {
  return (await li()).isCached;
}
function Mr() {
  return se !== null;
}
async function Cr() {
  if (se)
    try {
      await se.dispose?.();
    } catch {
    }
  se = null, Re = null, Ze = !1, A.info("[离线翻译] 翻译器已释放");
}
async function _r() {
  try {
    const n = await indexedDB.databases();
    for (const t of n)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), A.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const e of t)
        (e.includes("transformers") || e.includes("onnx")) && (await caches.delete(e), A.info(`[离线翻译] 已删除 Cache: ${e}`));
    }
    A.info("[离线翻译] 模型缓存已清除");
  } catch (n) {
    throw A.error("[离线翻译] 清除缓存失败:", n), n;
  }
}
const Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Mr,
  cancelOfflineTranslation: vr,
  clearModelCache: _r,
  disposeOfflineTranslator: Cr,
  getModelCacheInfo: li,
  getModelFiles: yr,
  getRuntimeBaseUrl: Os,
  getRuntimeWasmPaths: Es,
  isModelCached: Sr,
  isOfflineTranslatorInitializing: br,
  isOfflineTranslatorReady: kr,
  isTranslationInProgress: xr,
  setProgressCallback: pr,
  translateOffline: Ws,
  warmupOfflineTranslator: Bs
}, Symbol.toStringTag, { value: "Module" }));
class ge {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve().then(() => hf).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, e), e;
  }
  /**
   * 懒加载离线翻译模块
   */
  static async loadOfflineTranslator() {
    const t = "offlineTranslator";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve(Tr).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, e), e;
  }
  /**
   * 预加载模块（在空闲时）
   */
  static preloadModules() {
    "requestIdleCallback" in window ? requestIdleCallback(() => {
      this.loadOCR().catch(() => {
      }), this.loadOfflineTranslator().catch(() => {
      });
    }, { timeout: 2e3 }) : setTimeout(() => {
      this.loadOCR().catch(() => {
      }), this.loadOfflineTranslator().catch(() => {
      });
    }, 1e3);
  }
  /**
   * 清除已加载的模块
   */
  static clear() {
    this.loadedModules.clear(), this.loadingPromises.clear();
  }
  /**
   * 获取加载状态
   */
  static getLoadStatus() {
    return {
      loaded: Array.from(this.loadedModules.keys()),
      loading: Array.from(this.loadingPromises.keys())
    };
  }
}
P(ge, "loadedModules", /* @__PURE__ */ new Map()), P(ge, "loadingPromises", /* @__PURE__ */ new Map());
async function zr() {
  return await S("local_ai_get_config");
}
async function Rr(n) {
  return await S("local_ai_scan_models", {
    config: n ?? null
  });
}
async function Ns() {
  return await S("local_ai_get_status");
}
async function Lr(n) {
  return await S("local_ai_start_service", {
    config: null
  });
}
async function Hs(n) {
  return await S("local_ai_chat", { request: n });
}
function Fs(n) {
  if (!n) return "unknown";
  const t = n.match(/[\u4e00-\u9fa5]/g), e = t ? t.length : 0, i = n.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = n.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = n.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = e + s + a + l;
  return u === 0 ? "unknown" : s >= 3 && s > l && s / u >= 0.2 ? "ja" : a >= 3 && a > e && a > l && a / u >= 0.2 ? "ko" : e > l ? "zh" : l > e ? "en" : "unknown";
}
function Le(n) {
  return n === "zh" || n === "en";
}
function de(n) {
  return Fs(n);
}
const Pr = /[.!?。！？；;：:][)"'”’】）\]]*$/, Gi = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, ln = /[A-Za-z0-9]/, Ar = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Ki = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function js(n, t = {}) {
  const e = yl(n), i = Ur(n, e);
  return i.length === 0 ? [] : Fr(i, e) ? Hr(i, e) : (t.mode === "single_para" ? [Ve(i, e)] : Ir(i, e)).flatMap((o) => Dr(o, e));
}
function Dr(n, t) {
  const e = hi(n, t), i = [];
  for (const s of e) {
    const o = i[i.length - 1], a = o ? qr(o, s, t) : !1;
    if (!o || !a) {
      i.push(Qr(s));
      continue;
    }
    o.text = el(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = Gs(o.bbox, s.bbox), o.fontSize = Qi(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Qi(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return nl(i, t);
}
function Ir(n, t) {
  if (n.length <= 1)
    return [n];
  const e = n.map((l) => ({
    bbox: jr(l),
    block: l
  })).filter((l) => Vr(l.bbox)).sort(ci);
  if (e.length <= 1)
    return [Ve(n, t)];
  if (Or(e, t))
    return [Ve(n, t)];
  const { cuts: i, rows: s } = Er(e);
  if (i.length < 2 || s.length <= 1)
    return [Ve(n, t)];
  const o = Br(i, s), r = Nr(o).filter((l) => l.units.length > 0).map((l) => l.units.map((h) => h.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Ve(n, t)];
}
function Or(n, t) {
  if (n.length < 2)
    return !0;
  const e = [...n].sort(ci);
  let i = 0, s = 0;
  for (let o = 1; o < e.length; o += 1) {
    const a = e[o - 1].bbox, r = e[o].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const h = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), d = h / u >= 0.45, y = Math.abs(a.left - r.left) <= t * 1.5;
    (d || y) && (s += 1);
  }
  return i > 0 && s / i >= 0.72;
}
function Er(n) {
  const t = Math.min(...n.map((l) => l.bbox.left)) - 1, e = Math.max(...n.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < n.length; ) {
    const h = n[a].bbox.bottom, u = [];
    for (; a < n.length && n[a].bbox.top <= h; )
      u.push(n[a]), a += 1;
    u.sort((m, v) => m.bbox.left - v.bbox.left || m.bbox.right - v.bbox.right);
    const d = $r(u, t, e, i.length), { gaps: y, removedGaps: k } = Wr(o, d), M = i.length - 1;
    for (const m of k)
      s.push({
        left: m.left,
        right: m.right,
        startRow: m.startRow,
        endRow: M
      });
    o = y, i.push(u);
  }
  const r = i.length - 1;
  for (const l of o)
    s.push({
      left: l.left,
      right: l.right,
      startRow: l.startRow,
      endRow: r
    });
  return s.sort((l, h) => l.left - h.left || l.right - h.right), { cuts: s, rows: i };
}
function $r(n, t, e, i) {
  const s = [];
  let o = t;
  for (const a of n)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: e, startRow: i }), s;
}
function Wr(n, t) {
  const e = n.map(() => !1), i = t.map(() => !1), s = [];
  for (let o = 0; o < n.length; o += 1) {
    const a = n[o];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], h = Math.max(a.left, l.left), u = Math.min(a.right, l.right);
      h <= u && (s.push({ left: h, right: u, startRow: a.startRow }), e[o] = !0, i[r] = !0);
    }
  }
  for (let o = 0; o < t.length; o += 1)
    i[o] || s.push(t[o]);
  return {
    gaps: s,
    removedGaps: n.filter((o, a) => !e[a])
  };
}
function Br(n, t) {
  const e = t.map(() => []);
  for (const r of n)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      e[l]?.push({ left: r.left, right: r.right });
  for (const r of e)
    r.sort((l, h) => l.left - h.left || l.right - h.right);
  const i = {
    xLeft: n[0].left - 1,
    xRight: n[n.length - 1].right + 1,
    rowTop: -1,
    rowBottom: -1,
    units: [],
    children: []
  }, s = [i];
  let o = [];
  const a = (r) => {
    const l = r.xRight - 2, h = s.filter((k) => l >= k.xLeft && l <= k.xRight + 1e-4 && k.rowBottom < r.rowTop), u = Math.max(...h.map((k) => k.rowBottom), i.rowBottom), d = h.filter((k) => k.rowBottom === u);
    (d.length > 0 ? d.reduce((k, M) => M.xRight > k.xRight ? M : k) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = e[r], h = [];
    for (const k of o) {
      let M = !1, m = !1, v = !1;
      for (const R of l)
        if (cn(R.right, k.xLeft) && (M = !0), cn(R.left, k.xRight) && (m = !0), k.xLeft < R.left && R.left < k.xRight || k.xLeft < R.right && R.right < k.xRight) {
          v = !0;
          break;
        }
      !M || !m || v ? a(k) : (k.rowBottom = r, h.push(k));
    }
    o = h;
    let u = 0, d = 0;
    const y = t[r];
    for (; u < y.length && l.length >= 2; ) {
      const k = y[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const M = l[d].right, m = l[d + 1].left;
      if (k.bbox.left + 1e-4 > m && d < l.length - 2) {
        d += 1;
        continue;
      }
      let v = o.find((R) => cn(R.xLeft, M) && cn(R.xRight, m));
      v || (v = {
        xLeft: M,
        xRight: m,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(v)), v.units.push(k), u += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, h) => l.xLeft - h.xLeft || l.rowTop - h.rowTop), r.units.sort(ci);
  return i;
}
function Nr(n) {
  const t = [n], e = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (e.push(i), t.push(...[...i.children].reverse()));
  }
  return e;
}
function Ve(n, t) {
  return [...n].sort((e, i) => {
    const s = e.y - i.y;
    return Math.abs(s) > t * 0.45 ? s : e.x - i.x;
  });
}
function Hr(n, t) {
  const e = le(Ft(n.map((a) => a.width)), t * 0.5), i = Math.max(e * 1.4, t * 0.28), s = [...n].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], h = l ? Ft(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - h) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((y, k) => y.y - k.y), l = r.reduce((y, k, M) => {
      const m = k.text.trim();
      return M === 0 ? m : ui(y, m);
    }, ""), h = Xs(r), u = Ft(r.map((y) => le(y.fontSize, t))), d = Ft(r.map((y) => _n(y)));
    return {
      text: l,
      blocks: r,
      bbox: h,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: d,
      angle: Ft(r.map((y) => y.angle || 0))
    };
  });
}
function Fr(n, t) {
  return n.length < 2 ? !1 : n.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(n.length * 0.56));
}
function jr(n) {
  return {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function Vr(n) {
  return Number.isFinite(n.left) && Number.isFinite(n.top) && Number.isFinite(n.right) && Number.isFinite(n.bottom) && n.right >= n.left && n.bottom >= n.top;
}
function ci(n, t) {
  return n.bbox.top - t.bbox.top || n.bbox.left - t.bbox.left;
}
function cn(n, t) {
  return Math.abs(n - t) <= 1e-4;
}
function Ur(n, t) {
  return n.map((e) => {
    const i = e.text.trim();
    if (!i || Yr(e, t) || Xr(i))
      return null;
    const s = Gr(Zr(i, e, t));
    return s === e.text ? e : { ...e, text: s };
  }).filter((e) => !!e);
}
function Yr(n, t) {
  const e = n.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const i = t * 1.25;
  return n.width <= i && n.height <= i;
}
function Zr(n, t, e) {
  return /^xC$/i.test(n) && t.width <= e * 2.4 ? "X" : n;
}
function Xr(n) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(n.trim());
}
function Gr(n) {
  return n.replace(/^:\s+(?=[A-Z])/, "- ");
}
function hi(n, t) {
  const e = [...n].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of e) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !dl(a.blocks, o, t) ? (a.blocks.push(o), a.y = Ft(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => Kr(o.blocks, t));
}
function Kr(n, t) {
  const e = [...n].sort((r, l) => r.x - l.x), i = Xs(e), s = e.reduce((r, l, h) => {
    const u = l.text.trim();
    return h === 0 ? u : tl(r, u);
  }, ""), o = Ft(e.map((r) => le(r.fontSize, t))), a = Ft(e.map((r) => _n(r)));
  return {
    text: s,
    blocks: e,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: gl(e, t),
    isCodeLike: Ys(s)
  };
}
function qr(n, t, e) {
  const i = hi(n.blocks, e), s = i[i.length - 1];
  if (!s) return !1;
  const o = Ke(s.text);
  if (Cn(s.text) || Ke(t.text) || o && !Jr(s, t, e) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -e * 0.25 || a >= e * 1.8 || rl(i, a, e) || ll(s, t, a, e) || cl(s, t, a, e) || hl(s, t, a, e) || ul(s, t, a, e))
    return !1;
  if (o)
    return !0;
  const r = Math.max(e * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function Jr(n, t, e) {
  if (Us(t.text))
    return !1;
  const i = t.bbox.x - n.bbox.x, s = Math.max(e * 0.8, n.lineHeight * 0.65);
  return i >= s;
}
function Qr(n) {
  return {
    text: n.text,
    blocks: [...n.blocks],
    bbox: { ...n.bbox },
    isCodeBlock: n.isCodeLike || n.hasTableColumns,
    isStructuredBlock: n.hasTableColumns,
    fontSize: n.fontSize,
    lineHeight: n.lineHeight,
    angle: Ft(n.blocks.map((t) => t.angle || 0))
  };
}
function tl(n, t) {
  return ui(n, t);
}
function el(n, t) {
  return ui(n, t);
}
function ui(n, t) {
  const e = n.trimEnd(), i = t.trimStart();
  if (!e) return i;
  if (!i) return e;
  const s = e.charAt(e.length - 1), o = i.charAt(0), a = e.charAt(e.length - 2);
  return s === "-" && ln.test(a) && ln.test(o) ? `${e.slice(0, -1)}${i}` : wl(o) || vl(s) ? `${e}${i}` : Gi.test(s) || Gi.test(o) || ts(s) || ts(o) ? `${e}${i}` : ln.test(s) && ln.test(o) ? `${e} ${i}` : `${e} ${i}`.replace(/\s+/g, " ");
}
function Cn(n) {
  return Pr.test(n.trim());
}
function Ke(n) {
  return Ar.test(n);
}
function nl(n, t) {
  return n.flatMap((e) => il(e, t));
}
function il(n, t) {
  const e = Vs(n.text);
  if (e.length <= 1)
    return [n];
  const i = hi(n.blocks, t), s = i.length === e.length;
  return e.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || ol(n.bbox, a, e.length), h = r?.blocks || [al(n, o, l, a)];
    return {
      ...n,
      text: o,
      blocks: h,
      bbox: l,
      isCodeBlock: !!h.some((u) => Ys(u.text)),
      isStructuredBlock: n.isStructuredBlock,
      fontSize: Ft(h.map((u) => le(u.fontSize, n.fontSize || t))),
      lineHeight: Ft(h.map((u) => _n(u))),
      angle: Ft(h.map((u) => u.angle || 0))
    };
  });
}
function Vs(n) {
  const t = n.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Vs);
  const e = sl(n);
  return e.length > 1 ? e.flatMap(qi) : qi(n);
}
function sl(n) {
  const t = n.trim(), e = [];
  Ki.lastIndex = 0;
  for (const i of t.matchAll(Ki)) {
    const s = i[0], o = i.index ?? 0;
    e.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return e.length <= 1 ? [t] : e.map((i, s) => {
    const o = e[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function qi(n) {
  const t = n.trim();
  if (!Ke(t))
    return [t];
  const e = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !e || !Us(e[2]) ? [t] : [e[1].trim(), e[2].trim()];
}
function ol(n, t, e) {
  const i = n.height / Math.max(e, 1);
  return {
    x: n.x,
    y: n.y + i * t,
    width: n.width,
    height: i
  };
}
function al(n, t, e, i) {
  const s = n.blocks[Math.min(i, Math.max(n.blocks.length - 1, 0))];
  return {
    ...s || {
      fontSize: n.fontSize || e.height,
      lineHeight: n.lineHeight || e.height,
      angle: n.angle || 0
    },
    text: t,
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    fontSize: s?.fontSize || n.fontSize || e.height,
    lineHeight: s?.lineHeight || n.lineHeight || e.height,
    angle: s?.angle || n.angle || 0
  };
}
function Us(n) {
  const t = n.trim();
  return !t || Cn(t) || Ke(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function rl(n, t, e) {
  if (n.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < n.length; a++) {
    const r = n[a - 1], h = n[a].bbox.y - (r.bbox.y + r.bbox.height);
    h > 0 && i.push(h);
  }
  const s = i.length > 0 ? Ft(i) : 0, o = Math.max(s * 2.2, e * 1.15);
  return t > o;
}
function ll(n, t, e, i) {
  const s = n.text.trim();
  if (!s || Cn(s) || Ke(s) || n.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = n.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, h = r || l;
  return n.fontSize >= t.fontSize * 1.18 && h ? !0 : e > i * 0.7 && h;
}
function cl(n, t, e, i) {
  if (e <= 0)
    return !1;
  const s = Math.max(n.fontSize, t.fontSize), o = Math.max(Math.min(n.fontSize, t.fontSize), 1), a = s / o, r = e / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = n.fontSize >= i * 1.08 && n.bbox.width >= t.bbox.width * 0.82, h = t.fontSize <= n.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && h;
}
function hl(n, t, e, i) {
  if (e < i * 0.45)
    return !1;
  const o = n.text.split(/\s+/).filter(Boolean).length <= 3 && n.bbox.width < t.bbox.width * 0.35, a = Math.abs(n.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function ul(n, t, e, i) {
  return e < i * 0.25 || !(Math.abs(n.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Ji(n.text) && Ji(t.text);
}
function Ji(n) {
  const t = n.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Cn(t);
}
function Ys(n) {
  const t = n.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function dl(n, t, e) {
  const i = [...n].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > e * 0.9 && pl(s.text) && Zs(t.text) ? !1 : o > e * 3.2;
}
function gl(n, t) {
  if (n.length < 2)
    return n.some((s) => fl(s.text));
  const e = [...n].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < e.length; s++) {
    const o = e[s - 1], a = e[s], r = e[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && ml(o.text) && Zs(a.text)) && (i += 1);
  }
  return i >= 1;
}
function fl(n) {
  const t = n.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function ml(n) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(n.trim());
}
function pl(n) {
  const t = n.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Zs(n) {
  const t = n.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Xs(n) {
  const t = n.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, i) => Gs(e, i), t[0]);
}
function Gs(n, t) {
  const e = Math.min(n.x, t.x), i = Math.min(n.y, t.y), s = Math.max(n.x + n.width, t.x + t.width), o = Math.max(n.y + n.height, t.y + t.height);
  return {
    x: e,
    y: i,
    width: s - e,
    height: o - i
  };
}
function yl(n) {
  return le(Ft(n.map((t) => _n(t))), 16);
}
function _n(n) {
  return le(n.lineHeight, le(n.height, le(n.fontSize, 16) * 1.2));
}
function Qi(n, t, e, i) {
  const s = t + i;
  return s <= 0 ? e : (n * t + e * i) / s;
}
function le(n, t) {
  return Number.isFinite(n) && n > 0 ? n : t;
}
function Ft(n) {
  return n.length === 0 ? 0 : n.reduce((t, e) => t + e, 0) / n.length;
}
function wl(n) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(n);
}
function vl(n) {
  return /^[(\[{<"'“‘]$/.test(n);
}
function ts(n) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(n);
}
const es = 34;
class xl {
  constructor(t, e, i) {
    this.pixels = t, this.sampleWidth = e, this.sampleHeight = i;
  }
  detect(t, e) {
    const i = this.getDominantNearbyColor(t, e), s = this.findMatchingStart(t, e, i);
    if (!s) return null;
    const o = this.getPixelBounds(e);
    return o ? this.floodFillRegion(s, o, i) : null;
  }
  floodFillRegion(t, e, i) {
    const { left: s, top: o, right: a, bottom: r, width: l, height: h } = e, u = new Uint8Array(l * h), d = new Int32Array(l * h), y = new Int32Array(l * h);
    let k = 0, M = 1, m = t.x, v = t.x, R = t.y, $ = t.y;
    for (d[0] = t.x, y[0] = t.y, u[(t.y - o) * l + t.x - s] = 1; k < M; ) {
      const X = d[k], j = y[k];
      if (k += 1, m = Math.min(m, X), v = Math.max(v, X), R = Math.min(R, j), $ = Math.max($, j), M = this.enqueueNeighbors(
        X,
        j,
        s,
        o,
        a,
        r,
        l,
        i,
        u,
        d,
        y,
        M
      ), M > l * h * 0.94) return null;
    }
    const z = v - m + 1, Y = $ - R + 1;
    return M / Math.max(1, z * Y) >= 0.24 ? { x: m, y: R, width: z, height: Y } : null;
  }
  getPixelBounds(t) {
    const e = Math.max(0, Math.floor(t.x)), i = Math.max(0, Math.floor(t.y)), s = Math.min(
      this.sampleWidth,
      Math.ceil(t.x + t.width)
    ), o = Math.min(
      this.sampleHeight,
      Math.ceil(t.y + t.height)
    ), a = s - e, r = o - i;
    return a > 0 && r > 0 ? { left: e, top: i, right: s, bottom: o, width: a, height: r } : null;
  }
  enqueueNeighbors(t, e, i, s, o, a, r, l, h, u, d, y) {
    let k = y;
    const M = [
      { x: t - 1, y: e },
      { x: t + 1, y: e },
      { x: t, y: e - 1 },
      { x: t, y: e + 1 }
    ];
    for (const m of M) {
      if (m.x < i || m.x >= o || m.y < s || m.y >= a)
        continue;
      const v = (m.y - s) * r + m.x - i;
      h[v] || (h[v] = 1, this.isColorNear(this.getColor(m.x, m.y), l) && (u[k] = m.x, d[k] = m.y, k += 1));
    }
    return k;
  }
  getDominantNearbyColor(t, e) {
    const i = /* @__PURE__ */ new Map();
    for (let o = -4; o <= 4; o += 2)
      for (let a = -4; a <= 4; a += 2) {
        const r = Math.round(t.x + a), l = Math.round(t.y + o);
        if (!this.contains(e, { x: r, y: l })) continue;
        const h = this.getColor(r, l), u = `${h.r >> 4},${h.g >> 4},${h.b >> 4}`, d = i.get(u) || { count: 0, r: 0, g: 0, b: 0 };
        d.count += 1, d.r += h.r, d.g += h.g, d.b += h.b, i.set(u, d);
      }
    const s = [...i.values()].reduce(
      (o, a) => a.count > o.count ? a : o,
      { count: 1, r: 255, g: 255, b: 255 }
    );
    return {
      r: s.r / s.count,
      g: s.g / s.count,
      b: s.b / s.count
    };
  }
  findMatchingStart(t, e, i) {
    for (let s = 0; s <= 6; s += 1)
      for (let o = t.y - s; o <= t.y + s; o += 1)
        for (let a = t.x - s; a <= t.x + s; a += 1) {
          const r = { x: Math.round(a), y: Math.round(o) };
          if (this.contains(e, r) && this.isColorNear(this.getColor(r.x, r.y), i))
            return r;
        }
    return null;
  }
  isColorNear(t, e) {
    const i = t.r - e.r, s = t.g - e.g, o = t.b - e.b;
    return i * i + s * s + o * o <= es * es;
  }
  getColor(t, e) {
    const i = Math.max(0, Math.min(this.sampleWidth - 1, t)), o = (Math.max(0, Math.min(this.sampleHeight - 1, e)) * this.sampleWidth + i) * 4;
    return {
      r: this.pixels[o],
      g: this.pixels[o + 1],
      b: this.pixels[o + 2]
    };
  }
  contains(t, e) {
    return e.x >= t.x && e.x < t.x + t.width && e.y >= t.y && e.y < t.y + t.height;
  }
}
const kl = 960, bl = 640;
class di {
  constructor(t, e, i, s, o) {
    P(this, "regionDetector");
    P(this, "lastDetection", null);
    this.sampleWidth = e, this.sampleHeight = i, this.logicalWidth = s, this.logicalHeight = o, this.regionDetector = new xl(
      t,
      e,
      i
    );
  }
  static fromImage(t, e, i) {
    if (e <= 0 || i <= 0) return null;
    const s = Math.min(
      1,
      kl / e,
      bl / i
    ), o = Math.max(1, Math.round(e * s)), a = Math.max(1, Math.round(i * s)), r = document.createElement("canvas");
    r.width = o, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, o, a);
    const h = l.getImageData(0, 0, o, a);
    return new di(
      h.data,
      o,
      a,
      e,
      i
    );
  }
  detect(t, e) {
    const i = this.getCachedDetection(t, e);
    if (i !== void 0) return i;
    const s = this.toSampleRect(e), o = this.toSamplePoint(t);
    if (!this.containsSamplePoint(s, o))
      return this.cacheDetection(t, e, null), null;
    const a = this.regionDetector.detect(o, s);
    if (!a)
      return this.cacheDetection(t, e, null), null;
    const r = this.toLogicalRect(a), l = this.isUsefulCandidate(r, e, t) ? r : null;
    return this.cacheDetection(t, e, l), l;
  }
  getCachedDetection(t, e) {
    const i = this.lastDetection;
    if (!(!i || !this.isSameRect(i.bounds, e))) {
      if (i.result && this.containsLogicalPoint(i.result, t))
        return { ...i.result };
      if (!i.result && Math.hypot(t.x - i.point.x, t.y - i.point.y) < 14)
        return null;
    }
  }
  cacheDetection(t, e, i) {
    this.lastDetection = {
      point: { ...t },
      bounds: { ...e },
      result: i ? { ...i } : null
    };
  }
  isSameRect(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
  }
  containsLogicalPoint(t, e) {
    return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
  }
  containsSamplePoint(t, e) {
    return e.x >= t.x && e.x < t.x + t.width && e.y >= t.y && e.y < t.y + t.height;
  }
  isUsefulCandidate(t, e, i) {
    const s = t.width * t.height, o = e.width * e.height;
    return t.width >= 18 && t.height >= 14 && s >= 320 && s < o * 0.45 && this.containsLogicalPoint(t, i);
  }
  toSamplePoint(t) {
    return {
      x: Math.round(t.x * this.sampleWidth / this.logicalWidth),
      y: Math.round(t.y * this.sampleHeight / this.logicalHeight)
    };
  }
  toSampleRect(t) {
    return {
      x: Math.floor(t.x * this.sampleWidth / this.logicalWidth),
      y: Math.floor(t.y * this.sampleHeight / this.logicalHeight),
      width: Math.ceil(t.width * this.sampleWidth / this.logicalWidth),
      height: Math.ceil(t.height * this.sampleHeight / this.logicalHeight)
    };
  }
  toLogicalRect(t) {
    const e = this.logicalWidth / this.sampleWidth, i = this.logicalHeight / this.sampleHeight;
    return {
      x: Math.round(t.x * e),
      y: Math.round(t.y * i),
      width: Math.round(t.width * e),
      height: Math.round(t.height * i)
    };
  }
}
function ns(n, t) {
  if (!n || !t) return n === t;
  if (Math.abs(n.x - t.x) <= 3 && Math.abs(n.y - t.y) <= 3 && Math.abs(n.width - t.width) <= 6 && Math.abs(n.height - t.height) <= 6) return !0;
  const i = Math.max(
    0,
    Math.min(n.x + n.width, t.x + t.width) - Math.max(n.x, t.x)
  ), s = Math.max(
    0,
    Math.min(n.y + n.height, t.y + t.height) - Math.max(n.y, t.y)
  ), o = i * s, a = n.width * n.height + t.width * t.height - o;
  return a > 0 && o / a >= 0.86;
}
class Sl {
  constructor() {
    P(this, "currentRect", null);
    P(this, "isFinalized", !1);
  }
  preview(t) {
    return t ? this.isFinalized && ns(this.currentRect, t) ? {
      rect: this.cloneRect(this.currentRect),
      changed: !1
    } : this.currentRect && t.width * t.height > this.currentRect.width * this.currentRect.height * 2.5 ? {
      rect: this.cloneRect(this.currentRect),
      changed: !1
    } : (this.isFinalized = !1, this.commit(t)) : {
      rect: this.cloneRect(this.currentRect),
      changed: !1
    };
  }
  finalize(t) {
    const e = this.commit(t);
    return this.isFinalized = t !== null, e;
  }
  reset() {
    this.currentRect = null, this.isFinalized = !1;
  }
  commit(t) {
    const e = !ns(this.currentRect, t);
    return this.currentRect = this.cloneRect(t), {
      rect: this.cloneRect(this.currentRect),
      changed: e
    };
  }
  cloneRect(t) {
    return t ? { ...t } : null;
  }
}
class Ml {
  constructor(t, e, i, s) {
    P(this, "canvas");
    P(this, "coordinateSystem");
    P(this, "drawingEngine");
    P(this, "eventHandler");
    // 状态管理
    P(this, "selectionRect", null);
    P(this, "annotations", []);
    P(this, "currentAnnotation", null);
    P(this, "selectedAnnotation", null);
    P(this, "hoveredAnnotation", null);
    // 拖拽状态
    P(this, "draggedAnnotation", null);
    P(this, "dragStartPoint", null);
    P(this, "resizingAnnotation", null);
    P(this, "resizeStartBounds", null);
    P(this, "resizeOperation", null);
    // 编辑状态
    P(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    P(this, "annotationUndoStack", []);
    P(this, "annotationRedoStack", []);
    P(this, "pendingDragSnapshot", null);
    P(this, "pendingResizeSnapshot", null);
    // 工具设置
    P(this, "currentTool", f.Select);
    P(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    P(this, "textSize", 16);
    P(this, "mosaicSize", 8);
    P(this, "selectionCornerRadius", 0);
    P(this, "showGuides", !0);
    // 取色器状态
    P(this, "colorPickerState", {
      isActive: !1,
      isVisible: !1,
      // 默认不可见
      mousePosition: { x: 0, y: 0 },
      showFormat: "hex",
      zoomFactor: 9,
      // 使用紧凑奇数采样，让中心像素醒目且面板不挤压底部信息
      isCopied: !1
    });
    // 窗口吸附相关
    P(this, "allWindows", []);
    P(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    P(this, "snappedWindow", null);
    P(this, "snappedElement", null);
    P(this, "elementCandidateStabilizer", new Sl());
    P(this, "showSnapPreview", !1);
    P(this, "captureMonitor", { x: 0, y: 0, scale: 1 });
    P(this, "lastPointerPosition", null);
    P(this, "smartDetectionSequence", 0);
    P(this, "smartDetectionTimer", null);
    P(this, "accessibilityDetectionTimer", null);
    P(this, "pendingSmartDetection", null);
    // 点击拖拽区分
    P(this, "pendingSnapCandidate", null);
    P(this, "dragStartPosition", null);
    P(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    P(this, "throttleTimer", null);
    P(this, "lastThrottledTimestamp", 0);
    P(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    P(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    P(this, "backgroundImage", null);
    P(this, "visualElementDetector", null);
    // 是否正在加载完整背景图
    P(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    P(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    P(this, "offlineModelActivated", !1);
    // Canvas 池
    P(this, "canvasPool", qn.getInstance());
    // 回调函数
    P(this, "onStateChange");
    P(this, "onTextInputRequest");
    P(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    P(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    P(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    P(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    P(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    P(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    P(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    P(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Ha(t), this.drawingEngine = new Na(t, this.coordinateSystem), this.eventHandler = new Fa(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), ge.preloadModules();
  }
  // 公开方法：触发背景图重新加载（响应 preview-ready 事件）
  triggerBackgroundReload() {
    this.backgroundReloadPending || (this.backgroundReloadPending = !0, this.isLoadingBackground = !1, this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null, this.visualElementDetector = null), this.loadScreenBackground().finally(() => {
      this.backgroundReloadPending = !1;
    }));
  }
  cloneAnnotationData(t) {
    return {
      ...t,
      points: t.points.map((e) => ({ ...e })),
      style: { ...t.style },
      selected: !1,
      hovered: !1
    };
  }
  createHistorySnapshot() {
    return {
      annotations: this.annotations.map((t) => this.cloneAnnotationData(t.getData())),
      selectedAnnotationId: this.selectedAnnotation?.getData().id || null
    };
  }
  pushAnnotationHistory() {
    this.annotationUndoStack.push(this.createHistorySnapshot()), this.annotationRedoStack = [];
  }
  restoreHistorySnapshot(t) {
    if (this.annotations = t.annotations.map((e) => an.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const e = this.annotations.find((i) => i.getData().id === t.selectedAnnotationId);
      e && (e.updateData({ selected: !0 }), this.selectedAnnotation = e);
    }
    this.draw(), this.onStateChange?.();
  }
  // 初始化画布
  initCanvas() {
    const t = this.canvas.parentElement;
    if (!t) return;
    const e = t.clientWidth, i = t.clientHeight, s = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(e * s), this.canvas.height = Math.round(i * s), this.canvas.style.width = e + "px", this.canvas.style.height = i + "px";
    const o = this.canvas.getContext("2d");
    o && o.scale(s, s), this.drawPendingState(), this.coordinateSystem.updateCanvasRect(this.canvas);
  }
  // 绘制等待状态（背景图加载前的中间状态）
  drawPendingState() {
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0.6)", t.fillRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
  // 加载预捕获的屏幕背景图像
  async loadScreenBackground() {
    if (!this.isLoadingBackground) {
      this.isLoadingBackground = !0;
      try {
        this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null, this.visualElementDetector = null), await this.loadFullBackgroundImage();
      } catch (t) {
        A.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
      } finally {
        this.isLoadingBackground = !1;
      }
    }
  }
  // 加载完整背景图（高质量PNG）
  async loadFullBackgroundImage() {
    let i = 0;
    for (; i < 5e3; )
      try {
        const s = await S("get_screenshot_background");
        if (s) {
          const o = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              o.onload = null, o.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            o.onload = () => {
              clearTimeout(l), this.backgroundImage = o;
              const h = window.devicePixelRatio || 1;
              this.visualElementDetector = di.fromImage(
                o,
                this.canvas.width / h,
                this.canvas.height / h
              ), this.lastPointerPosition && this.snappedWindow && this.scheduleUiElementDetection(
                this.lastPointerPosition,
                this.snappedWindow
              ), this.draw(), a();
            }, o.onerror = (h) => {
              clearTimeout(l), r(h);
            }, o.src = `data:${this.detectImageMime(s)};base64,${s}`;
          });
          return;
        }
      } catch (s) {
        if (s?.toString().includes("No screenshot background available") || s?.toString().includes("being captured")) {
          await new Promise((o) => setTimeout(o, 100)), i += 100;
          continue;
        }
        throw s;
      }
    this.createFallbackBackground();
  }
  detectImageMime(t) {
    return t.trim().startsWith("/9j/") ? "image/jpeg" : "image/png";
  }
  // 创建后备背景（当背景图加载失败时使用）
  createFallbackBackground() {
    try {
      const t = new Image();
      t.width = 1, t.height = 1;
      const e = document.createElement("canvas");
      e.width = 1, e.height = 1;
      const i = e.getContext("2d");
      i && (i.fillStyle = "rgba(0, 0, 0, 0.3)", i.fillRect(0, 0, 1, 1), t.src = e.toDataURL()), t.onload = () => {
        this.backgroundImage = t, this.draw();
      };
    } catch (t) {
      A.error("[截图] 创建后备背景失败", t);
    }
  }
  // 绘制背景图像（支持预览图和完整图）
  drawBackground() {
    const t = this.canvas.getContext("2d");
    t && this.backgroundImage && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.imageSmoothingEnabled = !1, t.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
  // 加载所有窗口信息（使用预缓存数据 + 重试机制）
  async loadAllWindows() {
    try {
      let t = { x: 0, y: 0, scale: 1, isFullscreen: !1 }, e = [];
      const i = 10, s = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < i; l++)
        try {
          const [h, u] = await Promise.all([
            S("get_cached_monitor_info"),
            S("get_cached_window_list")
          ]);
          t = {
            x: h.x,
            y: h.y,
            scale: h.scale,
            isFullscreen: !1
          }, e = u;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((d) => setTimeout(d, s));
            continue;
          }
          const u = await Promise.all([
            S("get_window_info"),
            S("get_all_windows")
          ]);
          t = u[0], e = u[1];
        }
      const o = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.captureMonitor = {
        x: t?.x || 0,
        y: t?.y || 0,
        scale: o
      }, this.allWindows = e.filter((l) => this.isValidWindow(l)).map((l) => ({
        ...l,
        x: Math.round((l.x - this.captureMonitor.x) / o),
        y: Math.round((l.y - this.captureMonitor.y) / o),
        width: Math.round(l.width / o),
        height: Math.round(l.height / o)
      })).filter(
        (l) => l.x >= -l.width && l.y >= -l.height && l.x < a + l.width && l.y < r + l.height
      );
    } catch (t) {
      A.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
    }
  }
  // 检测初始窗口吸附（在窗口打开时立即调用）
  async detectInitialWindowSnap() {
    try {
      let i = 0;
      for (; this.allWindows.length === 0 && i < 500; )
        await new Promise((r) => setTimeout(r, 50)), i += 50;
      if (this.allWindows.length === 0)
        return;
      let s;
      try {
        const r = await S("get_cached_monitor_info");
        s = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        s = await S("get_window_info");
      }
      let o;
      try {
        const r = await S("get_mouse_position"), l = s?.scale || 1;
        o = {
          x: Math.round((r.x - s.x) / l),
          y: Math.round((r.y - s.y) / l)
        };
      } catch {
        o = {
          x: Math.round(this.canvas.width / (window.devicePixelRatio || 1) / 2),
          y: Math.round(this.canvas.height / (window.devicePixelRatio || 1) / 2)
        };
      }
      const a = this.detectNearbyWindow(o);
      this.lastPointerPosition = o, a ? (this.snappedWindow = a, this.showSnapPreview = !0, this.draw(), this.scheduleUiElementDetection(o, a)) : (this.showSnapPreview = !0, this.draw());
    } catch (t) {
      A.error("[截图] 初始窗口吸附检测失败", t);
    }
  }
  // 检查窗口是否有效
  isValidWindow(t) {
    if (!t.title || t.width < 100 || t.height < 100 || t.title.includes("screenshot") || t.title.includes("截图") || t.title.includes("Screenshot"))
      return !1;
    const e = [
      "Program Manager",
      "Desktop Window Manager",
      "Windows Security",
      "Task Manager",
      "Settings",
      "Microsoft Store",
      "Calculator",
      "Windows Input Experience",
      "Microsoft Text Input Application",
      "Windows Shell Experience Host",
      "Action Center",
      "Volume Control",
      "Network Connections",
      "Cortana",
      "Search",
      "Start",
      "Taskbar",
      "System Tray",
      "Notification Area",
      "Clock",
      "Volume",
      "Network",
      "Battery",
      "Power",
      "Language Bar",
      "Input Method Editor",
      "Windows PowerShell",
      "Command Prompt",
      "cmd.exe",
      "powershell.exe"
    ];
    for (const s of e)
      if (t.title === s || t.title.startsWith(s))
        return !1;
    return !(t.title.startsWith("NVIDIA") || t.title.startsWith("Intel") || t.title.startsWith("AMD") || t.title.startsWith("Realtek") || t.title.includes("Driver") || t.title.includes("Graphics") || t.title.includes("Background Task Host") || t.title.includes("Runtime Broker") || t.title.includes("Service Host") || t.title.includes("Windows Modules Installer") || t.title.includes("System Interrupts") || t.title.includes("Registry") || t.title.includes("dwm.exe") || t.title.includes("explorer.exe") || t.title.includes("winlogon.exe") || t.title.trim().replace(/[^\w\s\u4e00-\u9fa5]/g, "").length < 2);
  }
  detectNearbyWindow(t) {
    if (this.allWindows.length === 0) return null;
    const e = [];
    for (const i of this.allWindows) {
      if (t.x >= i.x && t.x <= i.x + i.width && t.y >= i.y && t.y <= i.y + i.height) {
        e.push({ window: i, distance: 0 });
        continue;
      }
      const o = Math.abs(t.x - i.x), a = Math.abs(t.x - (i.x + i.width)), r = Math.abs(t.y - i.y), l = Math.abs(t.y - (i.y + i.height)), h = Math.min(o, a, r, l);
      h <= this.snapThreshold && e.push({ window: i, distance: h });
    }
    return e.length === 0 ? null : e.reduce((i, s) => s.window.display_order < i.window.display_order ? s : s.window.display_order > i.window.display_order ? i : s.distance < i.distance ? s : s.distance > i.distance ? i : s.window.is_fullscreen && !i.window.is_fullscreen ? s : i).window;
  }
  getFullscreenCandidate() {
    const t = window.devicePixelRatio || 1;
    return {
      rect: {
        x: 0,
        y: 0,
        width: this.canvas.width / t,
        height: this.canvas.height / t
      },
      kind: "fullscreen"
    };
  }
  getActiveSelectionCandidate() {
    return this.snappedElement ? this.snappedElement : this.getFallbackSelectionCandidate();
  }
  getSelectableCandidate(t) {
    if (this.snappedElement) {
      const { rect: e } = this.snappedElement;
      if (t.x >= e.x && t.x <= e.x + e.width && t.y >= e.y && t.y <= e.y + e.height) return this.snappedElement;
    }
    return this.getFallbackSelectionCandidate();
  }
  getFallbackSelectionCandidate() {
    return this.snappedWindow ? {
      rect: {
        x: this.snappedWindow.x,
        y: this.snappedWindow.y,
        width: this.snappedWindow.width,
        height: this.snappedWindow.height
      },
      kind: "window"
    } : this.lastPointerPosition ? this.getFullscreenCandidate() : null;
  }
  scheduleUiElementDetection(t, e) {
    const i = ++this.smartDetectionSequence;
    this.pendingSmartDetection = {
      mousePos: { ...t },
      targetWindow: e,
      sequence: i
    }, this.smartDetectionTimer === null && (this.smartDetectionTimer = window.setTimeout(() => {
      this.smartDetectionTimer = null;
      const s = this.pendingSmartDetection;
      s && this.applyVisualElementCandidate(
        s.mousePos,
        s.targetWindow,
        s.sequence
      );
    }, 24)), this.accessibilityDetectionTimer !== null && window.clearTimeout(this.accessibilityDetectionTimer), this.accessibilityDetectionTimer = window.setTimeout(() => {
      this.accessibilityDetectionTimer = null;
      const s = this.pendingSmartDetection;
      this.pendingSmartDetection = null, s && this.detectUiElement(
        s.mousePos,
        s.targetWindow,
        s.sequence
      );
    }, 50);
  }
  async detectUiElement(t, e, i) {
    if (!e.handle) {
      this.finalizeVisualElementCandidate(t, e, i);
      return;
    }
    const s = this.captureMonitor.scale || 1, o = Math.round(this.captureMonitor.x + t.x * s), a = Math.round(this.captureMonitor.y + t.y * s);
    try {
      const r = await S("get_ui_element_at_point", {
        windowHandle: e.handle,
        x: o,
        y: a
      });
      if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
        return;
      if (!r) {
        this.finalizeVisualElementCandidate(t, e, i);
        return;
      }
      const l = {
        x: Math.round((r.x - this.captureMonitor.x) / s),
        y: Math.round((r.y - this.captureMonitor.y) / s),
        width: Math.round(r.width / s),
        height: Math.round(r.height / s)
      }, h = l.x >= e.x - 2 && l.y >= e.y - 2 && l.x + l.width <= e.x + e.width + 2 && l.y + l.height <= e.y + e.height + 2, u = t.x >= l.x && t.x <= l.x + l.width && t.y >= l.y && t.y <= l.y + l.height;
      if (l.width < 8 || l.height < 8 || !h || !u) {
        this.finalizeVisualElementCandidate(t, e, i);
        return;
      } else
        this.updateElementCandidate(l, !0);
    } catch {
      this.finalizeVisualElementCandidate(t, e, i);
    }
  }
  applyVisualElementCandidate(t, e, i) {
    if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
      return;
    const s = this.visualElementDetector?.detect(t, e) || null;
    this.updateElementCandidate(s, !1);
  }
  finalizeVisualElementCandidate(t, e, i) {
    if (i !== this.smartDetectionSequence || this.snappedWindow !== e)
      return;
    const s = this.visualElementDetector?.detect(t, e) || null;
    this.updateElementCandidate(s, !0);
  }
  updateElementCandidate(t, e) {
    const i = e ? this.elementCandidateStabilizer.finalize(t) : this.elementCandidateStabilizer.preview(t);
    this.snappedElement = i.rect ? { rect: i.rect, kind: "element" } : null, i.changed && this.draw();
  }
  cancelSmartDetection() {
    this.smartDetectionSequence += 1, this.smartDetectionTimer !== null && (window.clearTimeout(this.smartDetectionTimer), this.smartDetectionTimer = null), this.accessibilityDetectionTimer !== null && (window.clearTimeout(this.accessibilityDetectionTimer), this.accessibilityDetectionTimer = null), this.pendingSmartDetection = null;
  }
  // 绑定鼠标事件
  bindMouseEvents() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler), this.canvas.addEventListener("mousemove", this.mouseMoveHandler), this.canvas.addEventListener("mouseup", this.mouseUpHandler), this.canvas.addEventListener("dblclick", this.doubleClickHandler), window.addEventListener("keydown", this.keyDownHandler), window.addEventListener("keyup", this.keyUpHandler);
  }
  // 鼠标按下处理
  handleMouseDown(t) {
    t.preventDefault(), t.stopPropagation();
    const e = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = e;
    const i = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    if ((this.currentTool === f.Select || this.currentTool === f.Marker) && i?.getData().type === f.Marker) {
      this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(i.getData().points[0], i), this.draw(), this.onStateChange?.();
      return;
    }
    const s = this.eventHandler.getOperationType(
      e,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (s !== L.None)
      switch (this.eventHandler.setCurrentOperation(s), this.eventHandler.startDrawing(e), s) {
        case L.Drawing:
          if (!this.selectionRect && this.currentTool === f.Select) {
            this.dragStartPosition = { ...e };
            const o = this.getSelectableCandidate(e);
            o ? this.pendingSnapCandidate = o : (this.selectionRect = {
              x: e.x,
              y: e.y,
              width: 0,
              height: 0
            }, this.onStateChange?.());
          }
          break;
        case L.DrawingRect:
        case L.DrawingEllipse:
        case L.DrawingLine:
        case L.DrawingArrow:
        case L.DrawingPen:
        case L.DrawingMosaic:
        case L.DrawingMarker:
          this.startAnnotation(e);
          break;
        case L.DrawingText:
          this.startTextInput(e), this.eventHandler.stopDrawing();
          break;
        case L.ColorPicking:
          this.handleColorPicking(e), this.eventHandler.stopDrawing();
          break;
        case L.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case L.EditingAnnotation:
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === f.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case L.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case L.ResizingAnnotationNW:
        case L.ResizingAnnotationSE:
          this.startAnnotationResize(e, s);
          break;
        case L.Moving:
        case L.ResizingNW:
        case L.ResizingNE:
        case L.ResizingSW:
        case L.ResizingSE:
        case L.ResizingN:
        case L.ResizingS:
        case L.ResizingW:
        case L.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const e = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = e;
    const i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(e), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && Mt(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === f.Select && this.updateSelectionRect(e, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === f.Select && !this.selectionRect) {
        const s = this.detectNearbyWindow(e);
        s !== this.snappedWindow && (this.cancelSmartDetection(), this.snappedWindow = s, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !0, this.draw()), this.showSnapPreview || (this.showSnapPreview = !0, this.draw()), s && this.scheduleUiElementDetection(e, s);
      }
      this.updateHoverState(e), this.currentTool === f.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(e, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = e, this.draw(), this.throttledUpdateColorPreview(e)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapCandidate && !this.selectionRect && (this.selectionRect = { ...this.pendingSnapCandidate.rect }), this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.cancelSmartDetection(), this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const e = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(e, this.annotations);
    (i?.getData().type === f.Text || i?.getData().type === f.Marker) && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(e, i));
  }
  // 键盘按下处理（内部）
  handleKeyDownInternal(t) {
    t.key === "Shift" && (this.isShiftPressed = !0);
  }
  // 键盘抬起处理
  handleKeyUp(t) {
    t.key === "Shift" && (this.isShiftPressed = !1);
  }
  // 更新选择框
  updateSelectionRect(t, e) {
    if (!this.selectionRect) return;
    const i = e.currentOperation, s = t.x - e.lastMousePos.x, o = t.y - e.lastMousePos.y;
    switch (i) {
      case L.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case L.Moving:
        this.selectionRect.x += s, this.selectionRect.y += o;
        break;
      case L.ResizingNW:
        this.selectionRect.x += s, this.selectionRect.y += o, this.selectionRect.width -= s, this.selectionRect.height -= o;
        break;
      case L.ResizingNE:
        this.selectionRect.y += o, this.selectionRect.width += s, this.selectionRect.height -= o;
        break;
      case L.ResizingSW:
        this.selectionRect.x += s, this.selectionRect.width -= s, this.selectionRect.height += o;
        break;
      case L.ResizingSE:
        this.selectionRect.width += s, this.selectionRect.height += o;
        break;
      case L.ResizingN:
        this.selectionRect.y += o, this.selectionRect.height -= o;
        break;
      case L.ResizingS:
        this.selectionRect.height += o;
        break;
      case L.ResizingW:
        this.selectionRect.x += s, this.selectionRect.width -= s;
        break;
      case L.ResizingE:
        this.selectionRect.width += s;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && e !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === f.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
  }
  // 开始标注拖拽
  startAnnotationDrag(t) {
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e && (this.draggedAnnotation = e, this.dragStartPoint = t, this.pendingDragSnapshot = this.createHistorySnapshot(), this.selectedAnnotation !== e && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = e, this.selectedAnnotation.updateData({ selected: !0 })));
  }
  // 更新标注拖拽
  updateAnnotationDrag(t) {
    if (!this.draggedAnnotation || !this.dragStartPoint) return;
    const e = t.x - this.dragStartPoint.x, i = t.y - this.dragStartPoint.y;
    this.draggedAnnotation.move(e, i), this.constrainAnnotationToBounds(this.draggedAnnotation), this.dragStartPoint = t;
  }
  // 完成标注拖拽
  finishAnnotationDrag() {
    if (this.draggedAnnotation) {
      if (this.pendingDragSnapshot) {
        const t = this.draggedAnnotation.getData(), e = this.pendingDragSnapshot.annotations.find((s) => s.id === t.id);
        (e ? JSON.stringify(e.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingDragSnapshot), this.annotationRedoStack = []), this.pendingDragSnapshot = null;
      }
      this.draggedAnnotation = null, this.dragStartPoint = null;
    }
  }
  // 开始标注缩放
  startAnnotationResize(t, e) {
    const i = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    if (i) {
      this.resizingAnnotation = i, this.resizeOperation = e, this.pendingResizeSnapshot = this.createHistorySnapshot();
      const s = i.getBounds();
      s && (this.resizeStartBounds = { ...s }), this.selectedAnnotation !== i && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = i, this.selectedAnnotation.updateData({ selected: !0 }));
    }
  }
  // 更新标注缩放
  updateAnnotationResize(t) {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation) return;
    const e = this.resizingAnnotation.getData();
    if (e.points.length < 2) return;
    const i = e.points[0];
    switch (this.resizeOperation) {
      case L.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, e.points[1]]
        });
        break;
      case L.ResizingAnnotationSE:
        this.resizingAnnotation.updateData({
          points: [i, t]
        });
        break;
    }
    this.constrainAnnotationToBounds(this.resizingAnnotation);
  }
  // 完成标注缩放
  finishAnnotationResize() {
    if (this.resizingAnnotation) {
      if (this.pendingResizeSnapshot) {
        const t = this.resizingAnnotation.getData(), e = this.pendingResizeSnapshot.annotations.find((s) => s.id === t.id);
        (e ? JSON.stringify(e.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingResizeSnapshot), this.annotationRedoStack = []), this.pendingResizeSnapshot = null;
      }
      this.resizingAnnotation = null, this.resizeStartBounds = null, this.resizeOperation = null;
    }
  }
  // 边界约束：确保标注不超出选择框
  constrainAnnotationToBounds(t) {
    if (!this.selectionRect || !t.getBounds()) return;
    const i = t.getData();
    if (i.points.length < 1) return;
    const s = this.selectionRect;
    let o = !1, a = [...i.points];
    if (i.points.length >= 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        l.x < s.x ? (a[r] = { ...l, x: s.x }, o = !0) : l.x > s.x + s.width && (a[r] = { ...l, x: s.x + s.width }, o = !0), l.y < s.y ? (a[r] = { ...l, y: s.y }, o = !0) : l.y > s.y + s.height && (a[r] = { ...l, y: s.y + s.height }, o = !0);
      }
    if (i.points.length > 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        (l.x < s.x || l.x > s.x + s.width || l.y < s.y || l.y > s.y + s.height) && (a.splice(r, 1), r--, o = !0);
      }
    o && t.updateData({ points: a });
  }
  // 更新悬停状态
  updateHoverState(t) {
    if (this.currentTool !== f.Select) {
      this.updateToolCursor();
      return;
    }
    const e = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    e !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = e && e.getData().type !== f.Mosaic ? e : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== f.Select) {
      this.updateToolCursor();
      return;
    }
    if (!this.selectionRect) {
      this.updateCursor("crosshair");
      return;
    }
    const e = this.eventHandler.getOperationType(
      t,
      this.currentTool,
      this.selectionRect,
      this.annotations
    ), s = {
      [L.Moving]: "move",
      [L.ResizingNW]: "nw-resize",
      [L.ResizingNE]: "ne-resize",
      [L.ResizingSW]: "sw-resize",
      [L.ResizingSE]: "se-resize",
      [L.ResizingN]: "n-resize",
      [L.ResizingS]: "s-resize",
      [L.ResizingW]: "w-resize",
      [L.ResizingE]: "e-resize",
      [L.EditingAnnotation]: "pointer",
      [L.MovingAnnotation]: "move",
      [L.ResizingAnnotationNW]: "nw-resize",
      [L.ResizingAnnotationSE]: "se-resize",
      [L.Drawing]: "crosshair"
    }[e] || "default";
    this.updateCursor(s);
  }
  // 更新画布cursor样式
  updateCursor(t) {
    this.canvas.style.cursor !== t && (this.canvas.style.cursor = t);
  }
  // 根据当前工具更新光标样式
  updateToolCursor() {
    switch (this.currentTool) {
      case f.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case f.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case f.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case f.Rectangle:
      case f.Ellipse:
      case f.Line:
      case f.Arrow:
      case f.Text:
      case f.Marker:
        this.updateCursor("crosshair");
        break;
      default:
        this.updateCursor("default");
    }
  }
  // 创建圆形光标（用于画笔和马赛克）
  createCircleCursor(t, e = "#666") {
    const i = Math.max(t / 2, 2), s = i * 2 + 4, o = s / 2, a = `
      <svg width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${o}" cy="${o}" r="${i}"
                fill="none" stroke="${e}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${o}" cy="${o}" r="1" fill="${e}" opacity="0.9"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(a)}') ${o} ${o}, crosshair`;
  }
  createPenCursor(t = "#ff4444") {
    const e = `
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20l4.8-1.1L20.2 7.5a2.2 2.2 0 0 0 0-3.1l-.6-.6a2.2 2.2 0 0 0-3.1 0L5.1 15.2 4 20z"
              fill="white" stroke="#111827" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M14.8 5.5l3.7 3.7" stroke="#111827" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M5.1 15.2L8.8 18.9" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(e)}') 4 20, crosshair`;
  }
  createColorPickerCursor() {
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 3.8a2.4 2.4 0 0 1 3.4 0l1.3 1.3a2.4 2.4 0 0 1 0 3.4l-9.4 9.4H7.4v-3.4l9.4-9.4z"
              fill="white" stroke="#111827" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M13.7 6.3l4 4" stroke="#111827" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M4 20h6" stroke="#4f46e5" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `)}') 4 20, crosshair`;
  }
  // 绘制所有内容
  draw() {
    if (this.drawingEngine.clear(), this.backgroundImage ? this.drawBackground() : this.drawPendingState(), this.selectionRect && this.drawingEngine.drawMask(
      this.selectionRect,
      this.selectionCornerRadius
    ), this.showSnapPreview && this.getActiveSelectionCandidate() && !this.selectionRect && this.drawSnapPreview(), this.annotations.length > 0) {
      const t = this.editingAnnotation?.getData().type === f.Text ? this.annotations.filter((e) => e.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
      this.drawingEngine.drawAnnotations(t, this.selectionRect || void 0);
    }
    this.currentAnnotation && this.drawingEngine.drawCurrentAnnotation(this.currentAnnotation, this.selectionRect || void 0), this.selectionRect && this.drawingEngine.drawSelectionBox(
      this.selectionRect,
      this.showGuides,
      this.selectionCornerRadius
    ), this.colorPickerState.isActive && this.selectionRect && this.drawingEngine.drawColorPicker(this.colorPickerState, this.selectionRect), this.translationOverlay.isVisible && this.selectionRect && this.drawTranslationOverlay();
  }
  // 绘制翻译覆盖层（智能排版）
  drawTranslationOverlay() {
    if (!this.selectionRect) return;
    const t = this.canvas.getContext("2d");
    if (!t) return;
    t.save();
    const { x: e, y: i, width: s, height: o } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const m = e + s / 2, v = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let R = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? R = "正在启动 AI 模型服务..." : R = "正在由 AI 识图翻译..."), t.fillText(R, m, v), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const m = e + s / 2, v = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, m, v), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: i, width: s, height: o }, l = this.sampleRegionColor(r), h = l.brightness < 128;
    let u, d;
    if (h) {
      const m = Math.max(0, Math.round(l.r * 0.1)), v = Math.max(0, Math.round(l.g * 0.1)), R = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${m}, ${v}, ${R}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const m = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), v = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), R = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${m}, ${v}, ${R}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(e, i, s, o), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const y = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((m) => ({
      text: m.text,
      translatedText: m.translatedText,
      blocks: [m],
      bbox: {
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height
      },
      isCodeBlock: m.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: m.fontSize,
      lineHeight: m.lineHeight,
      angle: m.angle
    })), k = y.filter((m) => m.isStructuredBlock), M = y.filter((m) => !m.isStructuredBlock);
    M.length > 0 && this.drawFlowedTranslationBlocks(t, M, e, i, a, s, o);
    for (const m of k)
      this.drawStructuredTranslationBlock(t, m, e, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, i, s, o, a, r) {
    const l = [...e].filter((z) => (z.translatedText || z.text).trim()).sort((z, Y) => {
      const Z = z.bbox.y - Y.bbox.y;
      return Math.abs(Z) > 4 ? Z : z.bbox.x - Y.bbox.x;
    });
    if (l.length === 0)
      return;
    const h = Math.max(24, r - o * 2), u = o, d = (z, Y, Z) => l.map((X) => {
      const j = (X.translatedText || X.text).trim(), U = Math.max(12, Math.min(X.fontSize || 16, 48)), J = Math.max(8, Math.round(U * z)), K = X.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', it = Math.max(
        o,
        Math.min(X.bbox.x + o, a * 0.38)
      ), st = Y ? o : it, nt = Math.max(48, a - st - u), ot = X.lineHeight || J * 1.35, at = Math.max(
        J * (Z ? 1.04 : 1.14),
        Math.min(ot * z, J * (Z ? 1.18 : 1.42))
      );
      return t.font = `${J}px ${K}`, {
        text: j,
        fontSize: J,
        fontFamily: K,
        lineHeight: at,
        paragraphGap: Z ? Math.max(1, at * 0.16) : Math.max(3, at * 0.35),
        x: i + st,
        lines: this.wrapTextToLines(t, j, nt)
      };
    }), y = (z) => z.reduce((Y, Z, X) => {
      const j = X === z.length - 1 ? 0 : Z.paragraphGap;
      return Y + Z.lines.length * Z.lineHeight + j;
    }, 0);
    let k = d(1, !1, !1), M = y(k);
    if (M > h) {
      const z = Math.max(0.56, h / M);
      k = d(z, !1, !1), M = y(k);
    }
    if (M > h && (k = d(1, !0, !1), M = y(k)), M > h) {
      const z = Math.max(0.38, h / M * 0.96);
      k = d(z, !0, !0), M = y(k);
    }
    if (M > h) {
      const z = Math.max(0.3, h / M * 0.94);
      k = d(z, !0, !0), M = y(k);
    }
    const m = Math.min(...l.map((z) => z.bbox.y)), v = s + Math.max(o, Math.min(m, r - o)), R = s + r - o;
    let $ = v + M > R ? s + o : v;
    for (const z of k) {
      t.font = `${z.fontSize}px ${z.fontFamily}`;
      for (const Y of z.lines)
        t.fillText(Y, z.x, $), $ += z.lineHeight;
      $ += z.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, i, s, o, a, r) {
    const l = [...e.blocks].sort((d, y) => d.x - y.x), h = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || h * 1.35;
    t.font = `${h}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const y = d.translatedText || d.text;
      if (!y.trim()) continue;
      const k = i + d.x + Math.min(4, o), M = s + d.y, m = l.find((z) => z.x > d.x), v = m ? Math.max(d.width, m.x - d.x - 8) : Math.max(d.width, a - d.x - o), R = this.wrapTextToLines(t, y.trim(), v);
      let $ = M;
      for (const z of R) {
        if ($ + h > s + r) break;
        t.fillText(z, k, $), $ += u;
      }
    }
  }
  /**
   * 将文字按宽度换行，返回行数组
   */
  wrapTextToLines(t, e, i) {
    const s = e.replace(/\s+/g, " ").trim();
    if (!s)
      return [];
    const o = [], a = /\s/.test(s) ? s.split(/(\s+)/).filter((h) => h.length > 0) : Array.from(s);
    let r = "";
    const l = (h) => {
      let u = "";
      for (const d of Array.from(h)) {
        const y = u + d;
        t.measureText(y).width > i && u !== "" ? (o.push(u), u = d) : u = y;
      }
      r = u;
    };
    for (const h of a) {
      const u = /^\s+$/.test(h), d = u ? " " : h, y = r + d;
      if (t.measureText(y).width <= i) {
        r = y;
        continue;
      }
      r.trim() && (o.push(r.trimEnd()), r = ""), !u && (t.measureText(d).width > i ? l(d) : r = d);
    }
    return r.trim() && o.push(r.trimEnd()), o;
  }
  /**
   * 从背景图像采样指定区域的平均颜色
   * @param rect 采样区域（相对于canvas的坐标）
   * @param sampleSize 采样点数量（默认16）
   * @returns 采样得到的颜色信息，包含RGB值和亮度值
   */
  sampleRegionColor(t, e = 16) {
    const i = { r: 255, g: 255, b: 255, brightness: 255 };
    if (!this.backgroundImage)
      return i;
    const s = window.devicePixelRatio || 1, o = Math.round(t.width * s), a = Math.round(t.height * s), r = this.canvasPool.acquire(o, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), i;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, y = this.canvas.height / s, k = h / d, M = u / y, m = t.x * k, v = t.y * M, R = t.width * k, $ = t.height * M;
    try {
      l.drawImage(
        this.backgroundImage,
        m,
        v,
        R,
        $,
        0,
        0,
        o,
        a
      );
    } catch (G) {
      return A.error("[截图] 采样区域绘制失败", G), this.canvasPool.release(r), i;
    }
    let z;
    try {
      z = l.getImageData(0, 0, o, a);
    } catch (G) {
      return A.error("[截图] 获取像素数据失败", G), this.canvasPool.release(r), i;
    }
    const Y = z.data, Z = Math.ceil(Math.sqrt(e)), X = o / (Z + 1), j = a / (Z + 1);
    let U = 0, J = 0, K = 0, it = 0;
    for (let G = 1; G <= Z; G++)
      for (let Q = 1; Q <= Z && !(it >= e); Q++) {
        const pt = Math.floor(Q * X), wt = Math.floor(G * j);
        if (pt >= 0 && pt < o && wt >= 0 && wt < a) {
          const ft = (wt * o + pt) * 4;
          ft >= 0 && ft + 2 < Y.length && (U += Y[ft], J += Y[ft + 1], K += Y[ft + 2], it++);
        }
      }
    if (this.canvasPool.release(r), it === 0)
      return i;
    const st = Math.round(U / it), nt = Math.round(J / it), ot = Math.round(K / it), at = this.getBrightness(st, nt, ot);
    return {
      r: st,
      g: nt,
      b: ot,
      brightness: at
    };
  }
  /**
   * 计算颜色的亮度值
   * 使用标准公式: brightness = 0.299*R + 0.587*G + 0.114*B
   * @param r 红色分量 (0-255)
   * @param g 绿色分量 (0-255)
   * @param b 蓝色分量 (0-255)
   * @returns 亮度值 (0-255)
   */
  getBrightness(t, e, i) {
    const s = Math.max(0, Math.min(255, t)), o = Math.max(0, Math.min(255, e)), a = Math.max(0, Math.min(255, i));
    return Math.round(0.299 * s + 0.587 * o + 0.114 * a);
  }
  /**
   * 根据采样颜色计算覆盖层样式
   * 深色背景（亮度 < 128）：使用深色半透明背景 + 浅色文字
   * 浅色背景（亮度 >= 128）：使用浅色半透明背景 + 深色文字
   * @param sampledColor 采样得到的背景颜色
   * @returns 覆盖层样式
   */
  calculateOverlayStyle(t) {
    const { brightness: e } = t, i = e < 128, s = e / 255, a = 0.85 + Math.abs(s - 0.5) * 2 * 0.1;
    let r, l;
    if (i) {
      const h = Math.max(0, Math.round(t.r * 0.2)), u = Math.max(0, Math.round(t.g * 0.2)), d = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${h}, ${u}, ${d}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const h = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), u = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), d = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${h}, ${u}, ${d}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
    }
    return {
      backgroundColor: r,
      textColor: l,
      borderRadius: 3,
      // 轻微圆角（2-4px范围内）
      padding: 4
      // 内边距
    };
  }
  /**
   * 检测指定区域是否为纯色（颜色方差小于阈值）
   * 通过计算采样点的颜色方差来判断区域是否为纯色
   * @param rect 检测区域（相对于canvas的坐标）
   * @param threshold 方差阈值，默认100，方差小于此值认为是纯色
   * @param sampleSize 采样点数量，默认16
   * @returns 是否为纯色区域
   */
  isUniformColor(t, e = 100, i = 16) {
    if (!this.backgroundImage)
      return !1;
    const s = window.devicePixelRatio || 1, o = Math.round(t.width * s), a = Math.round(t.height * s), r = this.canvasPool.acquire(o, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, y = this.canvas.height / s, k = h / d, M = u / y, m = t.x * k, v = t.y * M, R = t.width * k, $ = t.height * M;
    try {
      l.drawImage(
        this.backgroundImage,
        m,
        v,
        R,
        $,
        0,
        0,
        o,
        a
      );
    } catch (G) {
      return A.error("[截图] isUniformColor: 采样区域绘制失败", G), this.canvasPool.release(r), !1;
    }
    let z;
    try {
      z = l.getImageData(0, 0, o, a);
    } catch (G) {
      return A.error("[截图] isUniformColor: 获取像素数据失败", G), this.canvasPool.release(r), !1;
    }
    const Y = z.data, Z = Math.ceil(Math.sqrt(i)), X = o / (Z + 1), j = a / (Z + 1), U = [];
    for (let G = 1; G <= Z; G++)
      for (let Q = 1; Q <= Z && !(U.length >= i); Q++) {
        const pt = Math.floor(Q * X), wt = Math.floor(G * j);
        if (pt >= 0 && pt < o && wt >= 0 && wt < a) {
          const ft = (wt * o + pt) * 4;
          ft >= 0 && ft + 2 < Y.length && U.push({
            r: Y[ft],
            g: Y[ft + 1],
            b: Y[ft + 2]
          });
        }
      }
    if (this.canvasPool.release(r), U.length < 2)
      return !1;
    const J = U.reduce((G, Q) => G + Q.r, 0) / U.length, K = U.reduce((G, Q) => G + Q.g, 0) / U.length, it = U.reduce((G, Q) => G + Q.b, 0) / U.length, st = U.reduce((G, Q) => G + Math.pow(Q.r - J, 2), 0) / U.length, nt = U.reduce((G, Q) => G + Math.pow(Q.g - K, 2), 0) / U.length, ot = U.reduce((G, Q) => G + Math.pow(Q.b - it, 2), 0) / U.length;
    return (st + nt + ot) / 3 < e;
  }
  /**
   * 根据OCR块高度估算合适的字体大小
   * 基础公式: fontSize = blockHeight * 0.8
   * 边界约束: fontSize = clamp(fontSize, 12, blockHeight * 0.85)
   * @param blockHeight OCR块的高度
   * @returns 估算的字体大小
   */
  estimateFontSize(t) {
    if (t <= 0)
      return 12;
    const e = t * 0.8, i = t * 0.85, o = Math.max(12, Math.min(e, i));
    return Math.round(o);
  }
  /**
   * 根据文字内容和块宽度调整字体大小
   * 测量文字宽度，如果超出块宽度则缩小字体
   * 最小字体不低于12px
   * @param text 文字内容
   * @param blockWidth 块宽度
   * @param initialFontSize 初始字体大小
   * @param ctx Canvas上下文（用于测量文字宽度）
   * @returns 调整后的字体大小
   */
  fitTextToWidth(t, e, i, s) {
    if (!t || t.length === 0)
      return i;
    if (e <= 0 || i <= 12)
      return 12;
    const r = e - 4 * 2;
    if (r <= 0)
      return 12;
    let l = i;
    const h = s.font;
    for (; l > 12 && (s.font = `${l}px sans-serif`, !(s.measureText(t).width <= r)); )
      l -= 1;
    return s.font = h, Math.max(l, 12);
  }
  // 绘制窗口吸附预览
  drawSnapPreview() {
    const t = this.getActiveSelectionCandidate();
    if (!t) return;
    const { rect: e } = t, i = this.canvas.getContext("2d");
    i && (i.save(), i.strokeStyle = "#00a8ff", i.lineWidth = 2, i.setLineDash([5, 5]), i.fillStyle = "rgba(0, 168, 255, 0.1)", i.fillRect(
      e.x,
      e.y,
      e.width,
      e.height
    ), i.strokeRect(
      e.x,
      e.y,
      e.width,
      e.height
    ), i.restore());
  }
  // 设置工具
  setTool(t) {
    this.currentTool = t, this.clearSelection(), this.showGuides = t === f.Select, this.colorPickerState.isActive = t === f.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== f.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== f.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.pendingSnapCandidate = null, this.cancelSmartDetection(), this.dragStartPosition = null, t !== f.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === f.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (an.isDrawingTool(this.currentTool)) {
      if (this.currentTool === f.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = an.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          markerNumber: this.currentTool === f.Marker ? this.getNextMarkerNumber() : void 0,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  getNextMarkerNumber() {
    return this.annotations.reduce((t, e) => e.getData().type !== f.Marker ? t : Math.max(t, e.getData().markerNumber || 0), 0) + 1;
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const e = this.currentAnnotation.getData();
    switch (e.type) {
      case f.Rectangle:
      case f.Ellipse:
      case f.Line:
      case f.Arrow:
        t = Wa(
          e.type,
          e.points[0],
          t,
          this.isShiftPressed
        ), e.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case f.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case f.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === f.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const e = this.currentAnnotation.getData().points;
    if (e.length < 3) return;
    let i = e[0].x, s = e[0].x, o = e[0].y, a = e[0].y;
    e.forEach((k) => {
      i = Math.min(i, k.x), s = Math.max(s, k.x), o = Math.min(o, k.y), a = Math.max(a, k.y);
    });
    const r = s - i, l = a - o;
    let h = 0;
    for (let k = 1; k < e.length; k++)
      h += Mt(e[k - 1], e[k]);
    const d = Mt(e[0], e[e.length - 1]) / h, y = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || y > 5) {
      const k = e[0], M = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [k, M] });
      return;
    }
  }
  // 撤销最后一个操作（标注或翻译）
  undoAnnotation() {
    if (this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0) {
      this.clearTranslationOverlay();
      return;
    }
    if (this.annotationUndoStack.length === 0)
      return;
    this.annotationRedoStack.push(this.createHistorySnapshot());
    const t = this.annotationUndoStack.pop();
    t && this.restoreHistorySnapshot(t);
  }
  // 恢复最后一次撤销的操作
  redoAnnotation() {
    if (this.annotationRedoStack.length === 0)
      return;
    this.annotationUndoStack.push(this.createHistorySnapshot());
    const t = this.annotationRedoStack.pop();
    t && this.restoreHistorySnapshot(t);
  }
  // 删除选中的标注
  deleteSelectedAnnotation() {
    if (this.selectedAnnotation) {
      const t = this.annotations.findIndex((e) => e.getData().id === this.selectedAnnotation.getData().id);
      t !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(t, 1), this.selectedAnnotation = null, this.draw(), this.onStateChange?.());
    }
  }
  // 清除所有选中状态
  clearSelection() {
    this.annotations.forEach((t) => {
      t.updateData({ selected: !1, hovered: !1 });
    }), this.selectedAnnotation = null, this.hoveredAnnotation = null;
  }
  // 创建文字标注
  createTextAnnotation(t, e) {
    if (!e.trim()) return;
    const i = an.createAnnotation(
      f.Text,
      t,
      this.currentStyle,
      {
        text: e.trim(),
        fontSize: this.textSize
      }
    );
    i && i.isValid() && (this.pushAnnotationHistory(), this.annotations.push(i), this.draw(), this.onStateChange?.());
  }
  // 开始文字输入
  startTextInput(t, e) {
    this.onTextInputRequest?.(t, e);
  }
  // 截图并处理标注
  async processScreenshot(t) {
    if (!this.selectionRect)
      throw new Error("没有选择区域");
    try {
      const { x: e, y: i, width: s, height: o } = this.selectionRect, r = (await S("get_window_info"))?.scale || 1, l = await this.cropFromBackground(e, i, s, o);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const h = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await S("copy_to_clipboard", { image: h }) : await S("save_screenshot_to_file", { image: h });
    } catch (e) {
      const i = t === "save" ? "保存" : "复制";
      throw A.error(`[截图] ${i}截图失败`, e), new Error(`${i}截图失败: ${e?.message || e?.toString() || "未知错误"}`);
    }
  }
  // 从背景图像裁剪指定区域
  async cropFromBackground(t, e, i, s, o = {}) {
    return new Promise(async (a, r) => {
      const l = setTimeout(() => {
        r(new Error("裁剪背景图像超时"));
      }, 1e4);
      try {
        if (!this.backgroundImage) {
          let Ct = 0;
          for (; !this.backgroundImage && Ct < 3e3; )
            await new Promise((O) => setTimeout(O, 100)), Ct += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const h = window.devicePixelRatio || 1, u = Math.max(0, o.padding || 0), d = this.canvas.width / h, y = this.canvas.height / h, k = t - u, M = e - u, m = i + u * 2, v = s + u * 2, R = Math.max(1, Math.round(m * h)), $ = Math.max(1, Math.round(v * h)), z = Math.max(0, k), Y = Math.max(0, M), Z = Math.min(d, k + m), X = Math.min(y, M + v), j = Math.max(0, Z - z), U = Math.max(0, X - Y), J = Math.round(z * h), K = Math.round(Y * h), it = Math.min(
          this.canvas.width - J,
          Math.round(j * h)
        ), st = Math.min(
          this.canvas.height - K,
          Math.round(U * h)
        ), nt = Math.round((z - k) * h), ot = Math.round((Y - M) * h), at = document.createElement("canvas");
        at.width = R, at.height = $;
        const G = at.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!G)
          throw new Error("无法获取2D绘图上下文");
        G.imageSmoothingEnabled = !1, o.fillColor && (G.fillStyle = o.fillColor, G.fillRect(0, 0, R, $)), it > 0 && st > 0 && G.drawImage(
          this.backgroundImage,
          J,
          K,
          it,
          st,
          nt,
          ot,
          it,
          st
        );
        const pt = at.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: pt,
          adjusted_width: R,
          adjusted_height: $,
          logical_x: k,
          logical_y: M,
          logical_width: m,
          logical_height: v
        });
      } catch (h) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${h.message || h}`));
      }
    });
  }
  // 渲染带标注的图像
  async renderWithAnnotations(t, e, i) {
    return new Promise((s, o) => {
      const a = setTimeout(() => {
        o(new Error("渲染标注超时"));
      }, 15e3), r = document.createElement("canvas");
      r.width = t.adjusted_width, r.height = t.adjusted_height;
      const l = r.getContext("2d", {
        alpha: !0,
        desynchronized: !1,
        willReadFrequently: !1
      });
      if (!l) {
        clearTimeout(a), o(new Error("无法获取2D绘图上下文"));
        return;
      }
      l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high";
      const h = new Image();
      h.onload = () => {
        try {
          if (l.drawImage(h, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const y = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, k = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, M = this.drawingEngine.createScreenshotContext(
              l,
              y,
              k
            );
            this.annotations.forEach((m, v) => {
              try {
                m.drawToScreenshot(M);
              } catch (R) {
                A.error(`[截图] 绘制标注 ${v} 失败`, R);
              }
            });
          }
          const u = Xn(
            this.selectionCornerRadius,
            t.logical_width,
            t.logical_height
          );
          if (u > 0) {
            const y = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e;
            l.save(), l.globalCompositeOperation = "destination-in", l.fillStyle = "#000", l.beginPath(), l.roundRect(
              0,
              0,
              r.width,
              r.height,
              u * y
            ), l.fill(), l.restore();
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), s(d);
        } catch (u) {
          A.error("[截图] 绘制过程出错", u);
          try {
            const d = r.toDataURL("image/png");
            clearTimeout(a), s(d);
          } catch {
            clearTimeout(a), o(new Error(`渲染失败: ${u.message || u}`));
          }
        }
      }, h.onerror = (u) => {
        A.error("[截图] 图像加载失败", u), clearTimeout(a), o(new Error("图像加载失败"));
      }, h.src = `data:image/png;base64,${t.image}`;
    });
  }
  // 获取当前状态
  getState() {
    return {
      selectionRect: this.selectionRect,
      annotations: this.annotations.map((t) => t.getData()),
      currentTool: this.currentTool,
      currentStyle: {
        ...this.currentStyle,
        opacity: this.currentStyle.opacity ?? 1
      },
      textSize: this.textSize,
      mosaicSize: this.mosaicSize,
      selectionCornerRadius: this.selectionCornerRadius,
      hasSelection: !!this.selectionRect,
      // 有标注或有翻译覆盖层时都可以撤销
      hasAnnotations: this.annotations.length > 0 || this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0,
      canRedo: this.annotationRedoStack.length > 0,
      selectedAnnotation: this.selectedAnnotation?.getData() || null,
      isDrawing: this.eventHandler.getDrawingState().isDrawing
    };
  }
  // 获取绘制状态
  getDrawingState() {
    return this.eventHandler.getDrawingState().isDrawing;
  }
  // 更新样式
  updateStyle(t) {
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === f.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === f.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  updateSelectionCornerRadius(t) {
    Number.isFinite(t) && (this.selectionCornerRadius = Math.max(0, Math.min(120, t)), this.draw(), this.onStateChange?.());
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const e = this.annotations.findIndex((i) => i === t);
    e !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(e, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字或序号标记的说明内容
  updateTextAnnotation(t, e) {
    if (t.getData().type === f.Text || t.getData().type === f.Marker) {
      if (t.getData().text === e) {
        this.clearEditingAnnotation();
        return;
      }
      this.pushAnnotationHistory(), t.updateData({ text: e }), this.clearEditingAnnotation(), this.draw(), this.onStateChange?.();
    }
  }
  // 设置正在编辑的文字注释
  setEditingAnnotation(t) {
    this.editingAnnotation = t, this.draw();
  }
  // 清除编辑状态
  clearEditingAnnotation() {
    this.editingAnnotation = null, this.draw();
  }
  async createPinWindow() {
    return this.createPinLikeWindow("pin");
  }
  async createOcrPinWindow() {
    return this.createPinLikeWindow("ocr");
  }
  // 创建贴图/文字识别复用窗口
  async createPinLikeWindow(t) {
    if (this.selectionRect)
      try {
        const { x: e, y: i, width: s, height: o } = this.selectionRect, a = await S("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), h = Math.round(a.y + i * r), u = Math.round(s * r), d = Math.round(o * r), y = Math.round(a.x + window.innerWidth * r), k = Math.round(a.y + window.innerHeight * r), M = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, y - a.x)) : u, m = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, k - a.y)) : d, v = t === "ocr" ? Math.round(l - Math.max(0, M - u) / 2) : l, R = t === "ocr" ? Math.max(a.x, Math.min(v, y - M)) : l, $ = t === "ocr" ? Math.max(a.y, Math.min(h, k - m)) : h, z = {}, Y = await this.cropFromBackground(e, i, s, o, z);
        if (!Y?.image)
          throw new Error("Failed to crop from background image");
        const Z = await this.renderWithAnnotations(Y, r, "save");
        await S("create_pin_window", {
          mode: t,
          imageData: Z,
          x: R,
          y: $,
          width: M,
          height: m
        }), this.onStateChange?.(), setTimeout(() => {
          new tn("screenshot").close();
        }, 100);
      } catch (e) {
        throw A.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, e), e;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const e = await S("get_window_info"), i = e?.scale || 1, s = Math.round(e.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), o = Math.round(e.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await S("get_pixel_color", {
          x: s,
          y: o
        }), r = this.rgbToHex(a.r, a.g, a.b), l = {
          rgb: a,
          hex: r,
          position: t
        };
        this.onColorPicked?.(l), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3);
      } catch (e) {
        A.error("[截图] 获取像素颜色失败", e);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const e = await S("get_window_info"), i = e?.scale || 1, s = this.colorPickerState.zoomFactor, o = Math.floor(s / 2), a = Math.round(e.x + t.x * i), r = Math.round(e.y + t.y * i), l = await S("get_screen_preview", {
          x: a - o,
          y: r - o,
          width: s,
          height: s
        }), h = new Image();
        h.src = `data:image/png;base64,${l.image}`, await h.decode();
        const u = await createImageBitmap(h);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const y = new OffscreenCanvas(s, s).getContext("2d");
        if (y) {
          y.drawImage(u, 0, 0, s, s);
          const k = y.getImageData(o, o, 1, 1).data, M = { r: k[0], g: k[1], b: k[2] }, m = this.rgbToHex(M.r, M.g, M.b);
          this.colorPickerState.colorInfo = { rgb: M, hex: m, position: t };
        }
        this.draw();
      } catch (e) {
        A.error("[截图] 更新颜色预览失败", e);
      }
  }
  // 节流版本的颜色预览更新
  throttledUpdateColorPreview(t) {
    const e = Date.now();
    e - this.lastThrottledTimestamp < this.throttleInterval || (this.lastThrottledTimestamp = e, this.throttleTimer && cancelAnimationFrame(this.throttleTimer), this.throttleTimer = requestAnimationFrame(() => {
      this.updateColorPreview(t), this.throttleTimer = null;
    }));
  }
  // RGB 转 HEX
  rgbToHex(t, e, i) {
    const s = (o) => {
      const a = Math.max(0, Math.min(255, Math.round(o))).toString(16);
      return a.length === 1 ? "0" + a : a;
    };
    return `#${s(t)}${s(e)}${s(i)}`.toUpperCase();
  }
  // ==================== OCR翻译功能 ====================
  // 执行OCR识别和翻译
  async performOcrTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage)) {
      if (this.translationOverlay.engine === "local-ai") {
        await this.performVisionTranslation();
        return;
      }
      try {
        const t = performance.now();
        let e = 0, i = 0, s = 0, o = 0, a = 0;
        const { x: r, y: l, width: h, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, y = h * d, k = u * d, M = this.canvasPool.acquire(y, k), m = M.getContext("2d");
        if (!m)
          throw this.canvasPool.release(M), new Error("无法创建临时canvas");
        const v = r * d, R = l * d, $ = performance.now();
        m.drawImage(
          this.backgroundImage,
          v,
          R,
          y,
          k,
          0,
          0,
          y,
          k
        ), e = Math.round(performance.now() - $);
        const z = performance.now(), { recognizeFromCanvas: Y } = await ge.loadOCR();
        i = Math.round(performance.now() - z);
        const Z = performance.now(), X = await Y(M);
        s = Math.round(performance.now() - Z), this.canvasPool.release(M);
        const j = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: X.confidence,
          rawLineCount: X.blocks.length,
          textLength: X.full_text.trim().length
        };
        A.info("[OCR] 识别耗时统计", j), Lt.log("[OCR] recognition timing", j);
        const U = X.blocks, J = performance.now(), K = js(U);
        o = Math.round(performance.now() - J);
        const it = K.map((_) => _.text).join(`

`), st = {
          rawLineCount: U.length,
          paragraphCount: K.length,
          durationMs: o,
          paragraphs: K.map((_, et) => ({
            index: et,
            text: _.text,
            blockCount: _.blocks.length,
            isCodeBlock: !!_.isCodeBlock,
            isStructuredBlock: !!_.isStructuredBlock,
            bbox: _.bbox,
            sourceBlocks: _.blocks.map((ut) => ({
              text: ut.text,
              x: ut.x,
              y: ut.y,
              width: ut.width,
              height: ut.height
            }))
          }))
        };
        if (A.info("[OCR] 版面重组完成", st), Lt.log("[OCR] layout reflow complete", st), !it || !it.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const nt = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(de(it));
        const ot = (_) => {
          const et = _.trim();
          return !!(et.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !et.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let at = "";
        const G = de(it), Q = {
          detectedLanguage: G,
          textLength: it.trim().length,
          textPreview: it.trim().slice(0, 500)
        };
        A.info("[OCR] 翻译语言检测完成", Q), Lt.log("[OCR] translation language detected", Q), Le(G) && (this.translationOverlay.sourceLanguage = G, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(G));
        const pt = nt === "offline" ? ge.loadOfflineTranslator() : null, wt = (_) => _.includes("插件") && _.includes("未启用") ? _.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : _ : nt === "offline" ? _.includes("未激活") || _.includes("未下载") || _.includes("运行时未安装") ? _ : _.includes("超时") ? "模型加载超时，请重试" : _.includes("离线翻译暂仅支持") ? _ : "离线翻译失败: " + _.substring(0, 50) : _.includes("timeout") || _.includes("超时") ? "翻译超时，请检查网络连接" : _.includes("network") || _.includes("网络") || _.includes("请求") || _.includes("令牌") ? "翻译失败，请检查网络连接" : _.trim() ? _.slice(0, 80) : "翻译失败，请检查网络连接", ft = async () => {
          if (!pt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: _,
            canUseOfflineTranslation: et,
            warmupOfflineTranslator: ut,
            getModelCacheInfo: ct
          } = await pt, Rt = et();
          if (this.offlineModelActivated && !Rt)
            if ((await ct()).isCached)
              await ut();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return _;
        }, Ct = async (_, et, ut) => {
          if (!_.trim())
            return _;
          if (nt === "offline") {
            if (et !== "en" || ut !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await ft())(_);
          }
          return await S("translate_text", {
            text: _,
            from: et,
            to: ut,
            engine: nt
          });
        }, O = (_) => {
          const et = _.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(et) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(et);
        }, Tt = async (_, et, ut) => {
          const ct = _.trim();
          if (!ct || ot(ct))
            return _;
          const Rt = _.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Rt) {
            const [, dt, mt, tt, _t, Dt] = Rt, ht = de(mt), We = O(mt) || !Le(ht) ? mt : await Ct(mt, ht, this.getAutoTargetLanguage(ht)), he = de(_t), It = Le(he) && !ot(_t) ? await Ct(_t, he, this.getAutoTargetLanguage(he)) : _t;
            return `${dt}${We}${tt}${It}${Dt}`;
          }
          if (O(ct))
            return _;
          const bt = de(ct);
          if (!Le(bt))
            return _;
          const Gt = this.getAutoTargetLanguage(bt), b = await Ct(ct, bt, Gt), N = {
            paragraphIndex: et,
            blockIndex: ut,
            sourceLanguage: bt,
            targetLanguage: Gt,
            sourceText: ct,
            translatedText: b.slice(0, 200)
          };
          return A.info("[OCR] 结构化块翻译完成", N), Lt.log("[OCR] structured block translation complete", N), b;
        }, H = async (_, et) => {
          const ut = performance.now(), ct = (b) => ({
            index: et,
            durationMs: Math.round(performance.now() - ut),
            ...b
          }), Rt = de(_.text), bt = this.getAutoTargetLanguage(Rt), Gt = {
            index: et,
            text: _.text,
            sourceLanguage: Rt,
            targetLanguage: bt,
            engine: nt,
            structured: !!_.isStructuredBlock
          };
          if (A.info("[OCR] 段落翻译方向", Gt), Lt.log("[OCR] paragraph translation direction", Gt), !Le(Rt)) {
            _.translatedText = _.text;
            const b = ct({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), N = {
              index: et,
              detectedLanguage: Rt,
              durationMs: b.durationMs,
              text: _.text
            };
            return A.warn("[OCR] 跳过不支持的段落语言", N), Lt.log("[OCR] skip unsupported paragraph language", N), b;
          }
          try {
            if (_.isStructuredBlock && _.blocks.length > 0) {
              const dt = async (tt, _t) => {
                const Dt = await Tt(tt.text, et, _t);
                return tt.translatedText = Dt, Dt;
              }, mt = [];
              if (nt === "offline")
                for (let tt = 0; tt < _.blocks.length; tt += 1)
                  mt.push(await dt(_.blocks[tt], tt));
              else
                mt.push(
                  ...await Promise.all(
                    _.blocks.map((tt, _t) => dt(tt, _t))
                  )
                );
              _.translatedText = mt.join(" ");
            } else if (ot(_.text) || _.isCodeBlock) {
              _.translatedText = _.text;
              const dt = _.isCodeBlock ? "code_block" : "command_like_text", mt = ct({ skipped: !0, cancelled: !1 }), tt = {
                index: et,
                reason: dt,
                durationMs: mt.durationMs,
                text: _.text
              };
              return A.info("[OCR] 跳过代码段翻译", tt), Lt.log("[OCR] skip code paragraph translation", tt), mt;
            } else
              _.translatedText = await Ct(
                _.text,
                Rt,
                bt
              );
            const b = ct({ skipped: !1, cancelled: !1 }), N = {
              index: et,
              durationMs: b.durationMs,
              sourceLanguage: Rt,
              targetLanguage: bt,
              engine: nt,
              structured: !!_.isStructuredBlock,
              sourceLength: _.text.length,
              translatedLength: (_.translatedText || "").length,
              translatedPreview: (_.translatedText || "").slice(0, 300)
            };
            return A.info("[OCR] 段落翻译完成", N), Lt.log("[OCR] paragraph translation complete", N), b;
          } catch (b) {
            const N = b instanceof Error ? b.message : String(b);
            if (N === "翻译已取消")
              return ct({ skipped: !1, cancelled: !0 });
            _.translatedText = _.text;
            const dt = wt(N), mt = ct({
              skipped: !1,
              cancelled: !1,
              errorMessage: dt
            }), tt = {
              index: et,
              durationMs: mt.durationMs,
              sourceLanguage: Rt,
              targetLanguage: bt,
              engine: nt,
              error: N,
              structured: !!_.isStructuredBlock,
              text: _.text
            };
            return A.error("[OCR] 段落翻译失败", tt), Lt.log("[OCR] paragraph translation failed", tt), mt;
          }
        }, zt = performance.now();
        let yt = [];
        if (nt === "offline")
          for (let _ = 0; _ < K.length; _ += 1) {
            const et = await H(K[_], _);
            if (yt.push(et), et.cancelled)
              return;
            if (et.errorMessage) {
              at = et.errorMessage;
              break;
            }
          }
        else {
          if (yt = await Promise.all(
            K.map((_, et) => H(_, et))
          ), yt.some((_) => _.cancelled))
            return;
          at = yt.find((_) => _.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - zt);
        const At = {
          durationMs: a,
          engine: nt,
          paragraphCount: K.length,
          translatedParagraphCount: yt.filter((_) => !_.skipped && !_.errorMessage).length,
          skippedParagraphCount: yt.filter((_) => _.skipped).length,
          failedParagraphCount: yt.filter((_) => !!_.errorMessage).length
        };
        A.info("[OCR] 翻译耗时统计", At), Lt.log("[OCR] translation timing", At);
        const Wt = K.map((_) => this.toDisplayParagraph(_, d)), ee = Wt.map((_) => this.toLegacyOverlayBlock(_));
        this.translationOverlay.blocks = ee, this.translationOverlay.paragraphBlocks = Wt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = at || void 0;
        const jt = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: U.length,
          paragraphCount: K.length,
          engine: nt
        };
        A.info("[OCR] 截图翻译总耗时统计", jt), Lt.log("[OCR] pipeline timing", jt), this.draw(), this.onStateChange?.();
      } catch (t) {
        A.error("[OCR] OCR翻译失败:", t);
        const e = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(e), this.draw(), this.onStateChange?.();
      }
    }
  }
  async performVisionTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const { x: t, y: e, width: i, height: s } = this.selectionRect;
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await Ns()).running || (A.info("[截图] AI 服务未运行，正在启动..."), await Lr(), A.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, e, i, s);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((v) => setTimeout(v, 100));
        const l = (await Hs({
          temperature: 0.2,
          maxTokens: 4096,
          messages: [
            {
              role: "system",
              content: [
                "You are a visual translation engine.",
                "Read the text in the supplied screenshot directly; do not describe the image and do not copy source text.",
                "The target language is always Simplified Chinese. Translate every readable non-Chinese fragment (including English, Japanese, Korean, and other languages) into Simplified Chinese.",
                "For mixed-language screenshots, retain existing Simplified Chinese and translate only the non-Chinese fragments, preserving their original reading order.",
                "Preserve headings, paragraphs, lists, tables, code, numbers, URLs, labels, and the reading order as faithfully as possible.",
                "Do not use English as the target language. Return only the final translated text, with no source-language label, explanation, or Markdown fence."
              ].join(" ")
            },
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Translate all readable text in this screenshot."
                },
                {
                  type: "image_url",
                  image_url: {
                    url: `data:image/png;base64,${a.image}`
                  }
                }
              ]
            }
          ]
        })).content.trim();
        if (!l)
          throw new Error("AI 未返回可显示的翻译结果");
        const h = Math.max(14, Math.min(20, Math.round(s / 18))), u = Math.max(18, Math.min(28, Math.round(s / 12))), d = l.split(/\n\n+/).filter((v) => v.trim()), y = Math.max(d.length, 1), k = (s - 16) / y, M = d.map((v, R) => {
          const $ = R * k + 8, z = R === y - 1 ? s - $ - 8 : k, Y = {
            text: "",
            translatedText: v.trim(),
            x: 0,
            y: $,
            width: i,
            height: z,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: v.trim(),
            blocks: [Y],
            bbox: { x: 0, y: $, width: i, height: z },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
        }), m = M.length > 0 ? M : [{
          text: "",
          translatedText: l,
          blocks: [{
            text: "",
            translatedText: l,
            x: 0,
            y: 0,
            width: i,
            height: s,
            fontSize: h,
            lineHeight: u,
            angle: 0
          }],
          bbox: { x: 0, y: 0, width: i, height: s },
          isCodeBlock: !1,
          isStructuredBlock: !1,
          fontSize: h,
          lineHeight: u,
          angle: 0
        }];
        this.translationOverlay.blocks = m.map((v) => v.blocks[0]), this.translationOverlay.paragraphBlocks = m, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
      } catch (t) {
        const e = t instanceof Error ? t.message : String(t);
        A.error("[截图] AI 识图翻译失败", t), this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.errorMessage = e.includes("mmproj") || e.includes("vision") ? "AI 翻译需要在“本地 AI”中配置视觉模型（mmproj）" : `AI 识图翻译失败：${e.slice(0, 80)}`, this.draw(), this.onStateChange?.();
      }
  }
  getOcrTranslationErrorMessage(t) {
    return t.includes("OCR_RECOGNITION_LOW_QUALITY") ? "OCR识别质量过低，请重新选择更清晰或方向正确的文本区域" : t.includes("RAPIDOCR_UNAVAILABLE") ? "RapidOCR 未配置，无法识别截图文字" : t ? t.slice(0, 80) : "OCR翻译失败";
  }
  getAutoTargetLanguage(t) {
    return t === "zh" ? "en" : "zh";
  }
  toDisplayParagraph(t, e) {
    return {
      ...t,
      blocks: t.blocks.map((i) => ({
        ...i,
        x: i.x / e,
        y: i.y / e,
        width: i.width / e,
        height: i.height / e,
        fontSize: i.fontSize / e,
        lineHeight: i.lineHeight / e
      })),
      bbox: {
        x: t.bbox.x / e,
        y: t.bbox.y / e,
        width: t.bbox.width / e,
        height: t.bbox.height / e
      },
      fontSize: t.fontSize ? t.fontSize / e : void 0,
      lineHeight: t.lineHeight ? t.lineHeight / e : void 0
    };
  }
  toLegacyOverlayBlock(t) {
    return {
      text: t.text,
      x: t.bbox.x,
      y: t.bbox.y,
      width: t.bbox.width,
      height: t.bbox.height,
      fontSize: t.fontSize || 16,
      lineHeight: t.lineHeight || (t.fontSize || 16) * 1.4,
      angle: t.angle || 0,
      translatedText: t.translatedText || t.text,
      isCodeBlock: t.isCodeBlock
    };
  }
  // 清除翻译覆盖层
  async clearTranslationOverlay() {
    try {
      const { cancelOfflineTranslation: t } = await ge.loadOfflineTranslator();
      t();
    } catch {
    }
    this.translationOverlay = {
      blocks: [],
      paragraphBlocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: this.translationOverlay.engine
      // 保留用户选择的引擎
    }, this.draw(), this.onStateChange?.();
  }
  // 获取翻译状态
  getTranslationState() {
    return this.translationOverlay;
  }
  // 设置翻译引擎
  setTranslationEngine(t) {
    this.translationOverlay.engine = t, this.onStateChange?.();
  }
  // 设置离线模型激活状态
  setOfflineModelActivated(t) {
    this.offlineModelActivated = t;
  }
  // 处理键盘事件
  handleKeyDown(t) {
    if (!this.colorPickerState.isActive) return !1;
    switch (t.key.toLowerCase()) {
      case "q":
        return this.colorPickerState.colorInfo && (this.onColorPicked?.(this.colorPickerState.colorInfo), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3)), !0;
      case "shift":
        return this.colorPickerState.showFormat = this.colorPickerState.showFormat === "hex" ? "rgb" : "hex", this.draw(), !0;
      default:
        return !1;
    }
  }
  // 销毁
  destroy() {
    ge.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.cancelSmartDetection(), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null, this.visualElementDetector = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
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
function _l() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Tl(n, t, e) {
  var i = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], o = t.theme || e.theme;
  switch (o) {
    case "outline":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("none"), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : e.colors.twoTone.twoTone), s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : e.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof i[0] == "string" ? i[0] : "currentColor"), s.push(typeof i[1] == "string" ? i[1] : e.colors.multiColor.outFillColor), s.push(typeof i[2] == "string" ? i[2] : e.colors.multiColor.innerStrokeColor), s.push(typeof i[3] == "string" ? i[3] : e.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || e.size,
    strokeWidth: t.strokeWidth || e.strokeWidth,
    strokeLinecap: t.strokeLinecap || e.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || e.strokeLinejoin,
    colors: s,
    id: n
  };
}
var zl = Symbol("icon-context");
function lt(n, t, e) {
  var i = {
    name: "icon-" + n,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = _l(), r = pe(zl, Cl);
      return function() {
        var l = o.size, h = o.strokeWidth, u = o.strokeLinecap, d = o.strokeLinejoin, y = o.theme, k = o.fill, M = o.spin, m = Tl(a, {
          size: l,
          strokeWidth: h,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: y,
          fill: k
        }, r), v = [r.prefix + "-icon"];
        return v.push(r.prefix + "-icon-" + n), t && r.rtl && v.push(r.prefix + "-icon-rtl"), M && v.push(r.prefix + "-icon-spin"), w("span", {
          class: v.join(" ")
        }, [e(m)]);
      };
    }
  };
  return i;
}
const Rl = lt("arrow-right-up", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M19 11H37V29",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), fn = lt("check", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Qn = lt("close", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M8 8L40 40",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M8 40L40 8",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Fe = lt("copy", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ll = lt("delete-four", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M8 11L40 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M18 5L30 5",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), is = lt("down", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M36 18L24 30L12 18",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Pl = lt("download", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M6 24.0083V42H42V24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M33 23L24 32L15 23",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M23.9917 6V32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Al = lt("font-size", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M24 6V42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M16 42H32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Dl = lt("go-on", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Il = lt("list-numbers", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M20 9H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M20 19H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M20 29H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M20 39H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M6 29H12V32L6 38V39H12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M7 11L9 9V19M9 19H7M9 19H11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ss = lt("loading", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Vn = lt("magic", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M29.5856 18.4143L5.54395 42.4559",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ks = lt("minus", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M10.5 24L38.5 24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ol = lt("more", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), w("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), w("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null)]);
}), El = lt("mosaic", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M44 36H36V44H44V36Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M28 36H20V44H28V36Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M12 36H4V44H12V36Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M44 20H36V28H44V20Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M28 20H20V28H28V20Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M12 20H4V28H12V20Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M44 4H36V12H44V4Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M28 4H20V12H28V4Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M12 4H4V12H12V4Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M20 12H12V20H20V12Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M20 28H12V36H20V28Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M36 12H28V20H36V12Z",
    fill: n.colors[0]
  }, null), w("path", {
    d: "M36 28H28V36H36V28Z",
    fill: n.colors[0]
  }, null)]);
}), $l = lt("move-one", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), os = lt("pin", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("g", {
    "clip-path": "url(#" + n.id + "1c742167)"
  }, [w("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]), w("defs", null, [w("clipPath", {
    id: n.id + "1c742167"
  }, [w("rect", {
    width: "48",
    height: "48",
    fill: n.colors[2]
  }, null)])])]);
}), as = lt("platte", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ti = lt("pushpin", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Wl = lt("rectangle-one", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Bl = lt("redo", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M42 8V17H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Nl = lt("return", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Hl = lt("round", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), rs = lt("save", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: n.colors[3]
  }, null), w("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M9 6H34.2814",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M14 26H34",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M14 34H24.0083",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Fl = lt("square", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), ei = lt("text-recognition", !1, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M24 15V35",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M17 15H24H31",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), qs = lt("translate", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M16 6L17 9",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M6 11H28",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), jl = lt("write", !0, function(n) {
  return w("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [w("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), w("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Vl = { class: "toolbar-panel first-panel" }, Ul = { class: "tool-section" }, Yl = ["onClick", "title", "aria-pressed"], Zl = { class: "action-section" }, Xl = ["disabled", "title"], Gl = ["disabled", "title"], Kl = ["disabled", "title"], ql = ["title"], Jl = ["title"], Ql = ["title"], tc = {
  key: 0,
  class: "toolbar-panel second-panel"
}, ec = { class: "style-section" }, nc = {
  key: 0,
  class: "style-group opacity-group"
}, ic = { class: "style-label" }, sc = ["value", "title", "aria-label"], oc = { class: "style-value" }, ac = {
  key: 1,
  class: "style-group"
}, rc = { class: "style-label" }, lc = { class: "line-width-selector" }, cc = ["onClick", "title", "aria-pressed"], hc = { class: "style-value" }, uc = {
  key: 2,
  class: "style-divider"
}, dc = {
  key: 3,
  class: "style-group opacity-group"
}, gc = { class: "style-label" }, fc = ["value", "title", "aria-label"], mc = { class: "style-value" }, pc = {
  key: 4,
  class: "style-divider"
}, yc = {
  key: 5,
  class: "style-group color-picker-group"
}, wc = { class: "style-label" }, vc = { class: "color-row" }, xc = ["onClick", "title", "aria-pressed"], kc = { class: "custom-color-wrapper" }, bc = ["title"], Sc = ["value", "title", "aria-label"], Mc = {
  key: 6,
  class: "style-group"
}, Cc = { class: "style-label" }, _c = { class: "text-size-selector" }, Tc = ["onClick", "title", "aria-pressed"], zc = { class: "style-value" }, Rc = {
  key: 7,
  class: "style-group"
}, Lc = { class: "style-label" }, Pc = { class: "mosaic-size-selector" }, Ac = ["onClick", "title", "aria-pressed"], Dc = { class: "style-value" }, Ic = {
  key: 8,
  class: "style-group"
}, Oc = { class: "style-label" }, Ec = { class: "translate-engine-selector" }, $c = ["onClick", "title", "aria-pressed"], Wc = /* @__PURE__ */ Pt({
  __name: "ToolbarSection",
  props: {
    currentTool: {},
    currentColor: {},
    currentLineWidth: {},
    currentOpacity: {},
    currentTextSize: {},
    currentMosaicSize: {},
    currentSelectionCornerRadius: { default: 0 },
    canUndo: { type: Boolean },
    canRedo: { type: Boolean },
    canDelete: { type: Boolean },
    currentTranslateEngine: { default: "bing" }
  },
  emits: ["tool-select", "color-change", "line-width-change", "opacity-change", "text-size-change", "mosaic-size-change", "selection-corner-radius-change", "translate-engine-change", "undo", "redo", "delete", "save", "confirm", "cancel"],
  setup(n, { expose: t, emit: e }) {
    const i = E(null), { t: s } = Ls(), o = n, a = e, r = I(() => [
      { type: f.Select, icon: $l, title: s("screenshot.select") },
      { type: f.Rectangle, icon: Wl, title: s("screenshot.rectangle") },
      { type: f.Ellipse, icon: Hl, title: s("screenshot.ellipse") },
      { type: f.Line, icon: Ks, title: s("screenshot.line") },
      { type: f.Arrow, icon: Rl, title: s("screenshot.arrow") },
      { type: f.Pen, icon: jl, title: s("screenshot.pen") },
      { type: f.Mosaic, icon: El, title: s("screenshot.mosaic") },
      { type: f.Text, icon: Al, title: s("screenshot.text") },
      { type: f.Marker, icon: Il, title: s("screenshot.marker") },
      { type: f.ColorPicker, icon: as, title: s("screenshot.colorPicker") },
      { type: f.Ocr, icon: ei, title: s("screenshot.ocr") },
      { type: f.Translate, icon: qs, title: s("screenshot.translate") },
      { type: f.Pin, icon: ti, title: s("screenshot.pin") }
    ]), l = I(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: s("translate.bingTranslate"), short: "B" },
      { value: "offline", label: s("translate.offlineTranslate"), short: s("translate.offlineMark") },
      { value: "local-ai", label: s("translate.localAiTranslate"), short: "AI" }
    ]), h = [2, 3, 5, 8], u = [
      "#ff4444",
      "#f79009",
      "#fdb022",
      "#12b76a",
      "#06b6d4",
      "#2e90fa",
      "#7a5af8",
      "#d444f1",
      "#111827"
    ], d = [12, 14, 16, 18, 20, 24], y = [8, 12, 16, 20], k = I(() => ![f.ColorPicker, f.Ocr, f.Pin].includes(o.currentTool)), M = I(
      () => o.currentTool === f.Select
    ), m = I(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen].includes(o.currentTool)
    ), v = I(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen, f.Text, f.Marker].includes(o.currentTool)
    ), R = I(
      () => [
        f.Rectangle,
        f.Ellipse,
        f.Line,
        f.Arrow,
        f.Pen,
        f.Mosaic,
        f.Text,
        f.Marker
      ].includes(o.currentTool)
    ), $ = I(
      () => o.currentTool === f.Text || o.currentTool === f.Marker
    ), z = I(() => o.currentTool === f.Mosaic), Y = I(() => o.currentTool === f.Translate), Z = (O) => a("tool-select", O), X = (O) => a("color-change", O), j = (O) => a("line-width-change", O), U = (O) => {
      a("opacity-change", Number(O.target.value) / 100);
    }, J = (O) => a("text-size-change", O), K = (O) => a("mosaic-size-change", O), it = (O) => {
      a(
        "selection-corner-radius-change",
        Number(O.target.value)
      );
    }, st = () => a("undo"), nt = () => a("redo"), ot = () => a("delete"), at = () => a("save"), G = () => a("confirm"), Q = () => a("cancel"), pt = (O) => {
      a("translate-engine-change", O);
    }, wt = (O) => {
      X(O);
    }, ft = (O) => {
      const Tt = O.target;
      Tt.value && X(Tt.value);
    }, Ct = () => {
      const O = i.value?.getBoundingClientRect();
      return {
        width: O?.width ?? 590,
        height: O?.height ?? 50
      };
    };
    return Oe(() => o.currentTool, () => {
      ye(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: Ct()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: Ct
    }), (O, Tt) => (T(), D(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        F(" 第一个面板：工具选择 + 操作按钮 "),
        x("div", Vl, [
          F(" 工具选择区域 "),
          x("div", Ul, [
            (T(!0), D(
              $t,
              null,
              Ut(r.value, (H) => (T(), D("button", {
                key: H.type,
                onClick: (zt) => Z(H.type),
                class: rt(["tool-btn", { active: O.currentTool === H.type }]),
                title: H.title,
                "aria-pressed": O.currentTool === H.type
              }, [
                (T(), St(me(H.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, Yl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          F(" 分隔线 "),
          Tt[0] || (Tt[0] = x(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          F(" 操作按钮区域 "),
          x("div", Zl, [
            x("button", {
              onClick: st,
              disabled: !O.canUndo,
              class: "action-btn undo",
              title: C(s)("screenshot.undo")
            }, [
              w(C(Nl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Xl),
            x("button", {
              onClick: nt,
              disabled: !O.canRedo,
              class: "action-btn redo",
              title: C(s)("screenshot.redo")
            }, [
              w(C(Dl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Gl),
            x("button", {
              onClick: ot,
              disabled: !O.canDelete,
              class: "action-btn delete",
              title: C(s)("screenshot.delete")
            }, [
              w(C(Ll), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Kl),
            x("button", {
              onClick: Q,
              class: "action-btn cancel",
              title: C(s)("screenshot.cancel")
            }, [
              w(C(Qn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, ql),
            x("button", {
              onClick: at,
              class: "action-btn save",
              title: C(s)("screenshot.save")
            }, [
              w(C(Pl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Jl),
            x("button", {
              onClick: G,
              class: "action-btn confirm",
              title: C(s)("screenshot.confirm")
            }, [
              w(C(fn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ql)
          ])
        ]),
        F(" 第二个面板：样式设置区域 "),
        k.value ? (T(), D("div", tc, [
          x("div", ec, [
            M.value ? (T(), D("div", nc, [
              x(
                "span",
                ic,
                B(C(s)("screenshot.cornerRadius")),
                1
                /* TEXT */
              ),
              x("input", {
                class: "opacity-slider",
                type: "range",
                min: "0",
                max: "80",
                step: "2",
                value: O.currentSelectionCornerRadius,
                style: gt({
                  "--opacity-color": "#2e90fa",
                  "--opacity-progress": `${O.currentSelectionCornerRadius / 80 * 100}%`
                }),
                title: `${O.currentSelectionCornerRadius}px`,
                "aria-label": C(s)("screenshot.cornerRadius"),
                onInput: it
              }, null, 44, sc),
              x(
                "span",
                oc,
                B(O.currentSelectionCornerRadius) + " px",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            F(" 线宽设置 "),
            m.value ? (T(), D("div", ac, [
              x(
                "span",
                rc,
                B(C(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              x("div", lc, [
                (T(), D(
                  $t,
                  null,
                  Ut(h, (H) => x("button", {
                    key: H,
                    onClick: (zt) => j(H),
                    class: rt(["width-btn", { active: O.currentLineWidth === H }]),
                    title: `${H}px`,
                    "aria-pressed": O.currentLineWidth === H
                  }, [
                    x(
                      "span",
                      {
                        class: "line-preview",
                        style: gt({ height: `${H}px`, backgroundColor: O.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, cc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                hc,
                B(O.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            m.value && v.value ? (T(), D("div", uc)) : F("v-if", !0),
            F(" 不透明度设置 "),
            R.value ? (T(), D("div", dc, [
              x(
                "span",
                gc,
                B(C(s)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              x("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(O.currentOpacity * 100),
                style: gt({
                  "--opacity-color": O.currentColor,
                  "--opacity-progress": `${Math.round(O.currentOpacity * 100)}%`
                }),
                title: `${Math.round(O.currentOpacity * 100)}%`,
                "aria-label": C(s)("screenshot.opacity"),
                onInput: U
              }, null, 44, fc),
              x(
                "span",
                mc,
                B(Math.round(O.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            R.value && v.value ? (T(), D("div", pc)) : F("v-if", !0),
            F(" 颜色设置 "),
            v.value ? (T(), D("div", yc, [
              x(
                "span",
                wc,
                B(C(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              x("div", vc, [
                (T(), D(
                  $t,
                  null,
                  Ut(u, (H) => x("button", {
                    key: H,
                    onClick: (zt) => wt(H),
                    class: rt(["color-btn", { active: O.currentColor === H }]),
                    style: gt({ backgroundColor: H }),
                    title: H,
                    "aria-pressed": O.currentColor === H
                  }, null, 14, xc)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                x("div", kc, [
                  x("button", {
                    class: rt(["color-btn custom-color-btn", { active: !u.includes(O.currentColor) }]),
                    title: C(s)("screenshot.customColor")
                  }, [
                    w(C(as), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, bc),
                  x("input", {
                    type: "color",
                    onChange: ft,
                    value: O.currentColor,
                    class: "color-input-hidden",
                    title: C(s)("screenshot.customColor"),
                    "aria-label": C(s)("screenshot.customColor")
                  }, null, 40, Sc)
                ])
              ])
            ])) : F("v-if", !0),
            F(" 文字大小设置 "),
            $.value ? (T(), D("div", Mc, [
              x(
                "span",
                Cc,
                B(C(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              x("div", _c, [
                (T(), D(
                  $t,
                  null,
                  Ut(d, (H) => x("button", {
                    key: H,
                    onClick: (zt) => J(H),
                    class: rt(["size-btn", { active: O.currentTextSize === H }]),
                    title: `${H}px`,
                    "aria-pressed": O.currentTextSize === H
                  }, [
                    x(
                      "span",
                      {
                        class: "size-text",
                        style: gt({ fontSize: `${Math.min(H, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Tc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                zc,
                B(O.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            F(" 马赛克大小设置 "),
            z.value ? (T(), D("div", Rc, [
              x(
                "span",
                Lc,
                B(C(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              x("div", Pc, [
                (T(), D(
                  $t,
                  null,
                  Ut(y, (H) => x("button", {
                    key: H,
                    onClick: (zt) => K(H),
                    class: rt(["size-btn", { active: O.currentMosaicSize === H }]),
                    title: `${C(s)("screenshot.brush")} ${H * 3}px`,
                    "aria-pressed": O.currentMosaicSize === H
                  }, [
                    x(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: gt({
                          width: `${Math.min(H * 1.25, 18)}px`,
                          height: `${Math.min(H * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Ac)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                Dc,
                B(O.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            F(" 翻译引擎选择 "),
            Y.value ? (T(), D("div", Ic, [
              x(
                "span",
                Oc,
                B(C(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              x("div", Ec, [
                (T(!0), D(
                  $t,
                  null,
                  Ut(l.value, (H) => (T(), D("button", {
                    key: H.value,
                    onClick: (zt) => pt(H.value),
                    class: rt(["engine-btn", { active: O.currentTranslateEngine === H.value }]),
                    title: H.label,
                    "aria-pressed": O.currentTranslateEngine === H.value
                  }, B(H.short), 11, $c))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : F("v-if", !0)
          ])
        ])) : F("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Tn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, Bc = /* @__PURE__ */ Tn(Wc, [["__scopeId", "data-v-afb70887"]]), Nc = {
  class: "screenshot-container",
  ref: "containerRef"
}, Hc = {
  key: 0,
  class: "mask-layers"
}, Fc = {
  key: 1,
  class: "mask-full"
}, jc = { class: "size-text" }, Vc = {
  key: 4,
  class: "loading-overlay"
}, Uc = /* @__PURE__ */ Pt({
  __name: "index",
  setup(n) {
    const t = E(), e = E(), i = E(null), s = E(null);
    let o = null;
    const a = E(!0), r = E(!1), l = E(""), h = E({ x: 0, y: 0 }), u = E(16), d = E(!1), y = E("bing"), k = E({ width: 590, height: 50 });
    let M = !1, m = null;
    const v = E({
      selectionRect: null,
      annotations: [],
      currentTool: f.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
      textSize: 16,
      mosaicSize: 8,
      selectionCornerRadius: 0,
      hasSelection: !1,
      hasAnnotations: !1,
      canRedo: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), R = E(), $ = E(), z = I(() => v.value.isDrawing), Y = I(() => {
      if (!v.value.selectionRect) return {};
      const { y: b } = v.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${b}px`
      };
    }), Z = I(() => {
      if (!v.value.selectionRect) return {};
      const { y: b, height: N } = v.value.selectionRect;
      return {
        top: `${b + N}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), X = I(() => {
      if (!v.value.selectionRect) return {};
      const { x: b, y: N, height: dt } = v.value.selectionRect;
      return {
        top: `${N}px`,
        left: "0",
        width: `${b}px`,
        height: `${dt}px`
      };
    }), j = I(() => {
      if (!v.value.selectionRect) return {};
      const { x: b, y: N, width: dt, height: mt } = v.value.selectionRect;
      return {
        top: `${N}px`,
        left: `${b + dt}px`,
        right: "0",
        height: `${mt}px`
      };
    }), U = I(() => {
      if (!v.value.selectionRect) return {};
      const { x: b, y: N, width: dt, height: mt } = v.value.selectionRect, tt = 10, _t = 12, Dt = Math.min(k.value.width, Math.max(0, window.innerWidth - tt * 2)), ht = Math.min(k.value.height, Math.max(0, window.innerHeight - tt * 2)), We = Math.max(tt, window.innerHeight - ht - tt), he = Math.max(tt, window.innerWidth - Dt - tt);
      let It;
      return N + mt + ht + _t <= window.innerHeight - tt ? It = N + mt + _t : N - ht - _t >= tt ? It = N - ht - _t : It = N + mt - ht - tt, It = Math.min(Math.max(It, tt), We), {
        left: `${Math.min(Math.max(b + (dt - Dt) / 2, tt), he)}px`,
        top: `${It}px`
      };
    }), J = I(() => {
      if (!v.value.selectionRect) return {};
      const { x: b, y: N, width: dt, height: mt } = v.value.selectionRect, tt = 10;
      let _t = b - tt, Dt = N - tt, ht = "translateY(-100%)";
      return _t < 10 && (_t = b + dt + tt, ht = "translateY(-100%)"), Dt < 30 && (Dt = N + mt + tt, ht = "translateY(0)"), {
        left: `${_t}px`,
        top: `${Dt}px`,
        transform: ht
      };
    }), K = I(() => {
      if (!v.value.selectionRect) return "";
      const { width: b, height: N } = v.value.selectionRect;
      return `${Math.round(b)} × ${Math.round(N)}`;
    }), it = I(
      () => m?.getData().style.color || v.value.currentStyle.color
    ), st = I(() => {
      const b = m?.getData().type === f.Marker ? Kn(h.value, u.value) : ze(h.value);
      return {
        "--text-accent-color": it.value,
        left: `${b.x}px`,
        top: `${b.y}px`
      };
    }), nt = (b) => {
      if (b === f.Pin && v.value.selectionRect) {
        ot();
        return;
      }
      if (b === f.Ocr && v.value.selectionRect) {
        at();
        return;
      }
      o?.setTool(b);
    }, ot = async () => {
      try {
        await o?.createPinWindow();
      } catch (b) {
        A.error("[截图] 创建贴图失败", b);
      }
    }, at = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (b) {
        A.error("[截图] 创建文字识别贴图失败", b);
      }
    }, G = (b) => {
      o?.updateStyle({ color: b });
    }, Q = (b) => {
      o?.updateStyle({ lineWidth: b });
    }, pt = (b) => {
      o?.updateStyle({ opacity: b });
    }, wt = (b) => {
      o?.updateTextSize(b);
    }, ft = (b) => {
      o?.updateMosaicSize(b);
    }, Ct = (b) => {
      o?.updateSelectionCornerRadius(b);
    }, O = (b) => {
      y.value = b, o?.setTranslationEngine(b), o?.executeTranslation();
    }, Tt = () => {
      o?.undoAnnotation();
    }, H = () => {
      o?.redoAnnotation();
    }, zt = () => {
      o?.deleteSelectedAnnotation();
    }, yt = async () => {
      try {
        await o?.processScreenshot("save"), ct();
      } catch (b) {
        const N = b?.message || b?.toString() || "保存失败";
        if (N.includes("保存已取消") || N.includes("cancelled"))
          return;
        A.error("保存截图时发生错误", N);
      }
    }, At = async () => {
      try {
        await o?.processScreenshot("copy"), ct();
      } catch {
      }
    }, Wt = () => {
      ct();
    }, ee = (b, N) => {
      if (N && [f.Text, f.Marker].includes(N.getData().type)) {
        const dt = N.getData();
        h.value = {
          x: dt.points[0].x,
          y: dt.points[0].y
        }, u.value = dt.fontSize || v.value.textSize;
      } else
        h.value = b, u.value = v.value.textSize;
      r.value = !0, m = N || null, N && o?.setEditingAnnotation(N), N && N.getData().text ? l.value = N.getData().text || "" : l.value = "", ye(() => {
        e.value?.focus(), m && e.value?.select();
      });
    }, jt = () => {
      const b = m?.getData().type === f.Marker;
      l.value.trim() || b ? m ? o?.updateTextAnnotation(m, l.value.trim()) : o?.createTextAnnotation(h.value, l.value) : m && o?.deleteAnnotation(m), _();
    }, _ = () => {
      r.value = !1, l.value = "", m && o?.clearEditingAnnotation(), m = null;
    }, et = (b) => {
      navigator.clipboard && navigator.clipboard.writeText(b.hex).catch((N) => {
        A.error("[截图] 复制颜色到剪贴板失败", N);
      });
    }, ut = (b) => {
      if (b.key === "Meta" || b.key === "Win" || b.altKey && b.key === "Tab" || b.altKey && b.key === "F4") {
        b.preventDefault(), b.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === e.value) {
        if (b.key === "Escape") {
          _(), b.preventDefault();
          return;
        }
        if (b.key === "Enter") {
          jt(), b.preventDefault();
          return;
        }
        if (b.key === "Tab") {
          b.preventDefault();
          return;
        }
        return;
      }
      if (!v.value.selectionRect) {
        if (b.key === "Escape") {
          ct();
          return;
        }
        b.preventDefault(), b.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(b)) {
        b.preventDefault();
        return;
      }
      const N = navigator.platform.toLowerCase().includes("mac");
      if ((N ? b.metaKey : b.ctrlKey) && b.key.toLowerCase() === "z") {
        b.shiftKey ? H() : Tt(), b.preventDefault();
        return;
      }
      if (!N && b.ctrlKey && b.key.toLowerCase() === "y") {
        H(), b.preventDefault();
        return;
      }
      if (b.key === "Escape") {
        ct();
        return;
      } else if (b.key === "Delete" || b.key === "Backspace") {
        zt(), b.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(b.key) || b.preventDefault();
    }, ct = async () => {
      if (!M) {
        M = !0, o?.destroy(), o = null;
        try {
          await S("cleanup_screenshot_resources");
        } catch {
          try {
            await S("clear_screenshot_background");
          } catch (N) {
            A.error("[截图] 清理后台缓存失败", N);
          }
        }
        v.value = {
          selectionRect: null,
          annotations: [],
          currentTool: f.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          selectionCornerRadius: 0,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", m = null, d.value = !1, a.value = !0;
        try {
          await S("close_and_destroy_screenshot_window");
        } catch (b) {
          A.error("[截图] 销毁截图窗口失败，回退到 close()", b), await s.value?.close();
        } finally {
          M = !1;
        }
      }
    }, Rt = () => {
      const b = o?.getState();
      b && (v.value = b);
    }, bt = () => {
      const b = i.value?.getToolbarSize?.();
      b && (k.value = b);
    }, Gt = (b) => {
      const N = b.detail;
      N && (k.value = N);
    };
    return Qe(async () => {
      if (t.value) {
        s.value = new tn("screenshot"), o = new Ml(
          t.value,
          Rt,
          ee,
          et
        ), document.addEventListener("keydown", ut), window.addEventListener("resize", bt), window.addEventListener("screenshot-toolbar-resize", Gt), $.value = await vn("screenshot-close-requested", () => {
          ct();
        }), R.value = await vn("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const b = o?.getTranslationState();
          b?.isLoading || b?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const N = o?.getTranslationState();
              if (N?.isLoading || N?.isVisible)
                return;
              ct();
            }
          }, 100);
        }), await ye(), bt(), await s.value.emit("screenshot_ready");
        try {
          const b = await S("get_translation_engine");
          b && ["google", "bing", "offline", "local-ai"].includes(b) && (y.value = b, o?.setTranslationEngine(b));
        } catch (b) {
          A.error("[截图] 获取翻译引擎设置失败", b);
        }
        try {
          const b = await S("get_offline_model_activated");
          o?.setOfflineModelActivated(b);
        } catch (b) {
          A.error("[截图] 获取离线模型激活状态失败", b);
        }
      }
    }), zs(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", ut), window.removeEventListener("resize", bt), window.removeEventListener("screenshot-toolbar-resize", Gt), R.value?.(), $.value?.(), R.value = void 0, $.value = void 0, s.value = null;
    }), (b, N) => (T(), D(
      "div",
      Nc,
      [
        F(" 遮罩层 "),
        v.value.selectionRect ? (T(), D("div", Hc, [
          x(
            "div",
            {
              class: "mask-top",
              style: gt(Y.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-bottom",
              style: gt(Z.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-left",
              style: gt(X.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-right",
              style: gt(j.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (T(), D("div", Fc)),
        F(" 画布 "),
        x(
          "canvas",
          {
            ref_key: "canvasRef",
            ref: t,
            class: "drawing-canvas"
          },
          null,
          512
          /* NEED_PATCH */
        ),
        F(" 尺寸信息 "),
        v.value.selectionRect && a.value ? (T(), D(
          "div",
          {
            key: 2,
            class: "size-info",
            style: gt(J.value)
          },
          [
            x(
              "span",
              jc,
              B(K.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : F("v-if", !0),
        F(" 工具栏 "),
        v.value.selectionRect && !z.value ? (T(), St(Bc, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: gt(U.value),
          class: "toolbar",
          "current-tool": v.value.currentTool,
          "current-color": v.value.currentStyle.color,
          "current-line-width": v.value.currentStyle.lineWidth,
          "current-opacity": v.value.currentStyle.opacity,
          "current-text-size": v.value.textSize,
          "current-mosaic-size": v.value.mosaicSize,
          "current-selection-corner-radius": v.value.selectionCornerRadius,
          "can-undo": v.value.hasAnnotations,
          "can-redo": v.value.canRedo,
          "can-delete": !!v.value.selectedAnnotation,
          "current-translate-engine": y.value,
          onToolSelect: nt,
          onColorChange: G,
          onLineWidthChange: Q,
          onOpacityChange: pt,
          onTextSizeChange: wt,
          onMosaicSizeChange: ft,
          onSelectionCornerRadiusChange: Ct,
          onTranslateEngineChange: O,
          onUndo: Tt,
          onRedo: H,
          onDelete: zt,
          onSave: yt,
          onConfirm: At,
          onCancel: Wt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "current-selection-corner-radius", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : F("v-if", !0),
        F(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (T(), D("div", Vc, [
          N[1] || (N[1] = x(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          x(
            "p",
            null,
            B(b.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : F("v-if", !0),
        F(" 文字输入框 "),
        r.value ? (T(), D(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: gt(st.value)
          },
          [
            Xe(x(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": N[0] || (N[0] = (dt) => l.value = dt),
                type: "text",
                class: "text-input",
                style: gt({
                  color: it.value,
                  fontFamily: C(ie),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  ji(jt, ["enter"]),
                  ji(_, ["escape"])
                ],
                onBlur: jt,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [wa, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : F("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Yc = /* @__PURE__ */ Tn(Uc, [["__scopeId", "data-v-a3b3737e"]]), Zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yc
}, Symbol.toStringTag, { value: "Module" })), Js = Symbol(), mn = "el", Xc = "is-", ue = (n, t, e, i, s) => {
  let o = `${n}-${t}`;
  return e && (o += `-${e}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Qs = Symbol("namespaceContextKey"), Gc = (n) => {
  const t = n || (Pe() ? pe(Qs, E(mn)) : E(mn));
  return I(() => C(t) || mn);
}, gi = (n, t) => {
  const e = Gc(t);
  return {
    namespace: e,
    b: (m = "") => ue(e.value, n, m, "", ""),
    e: (m) => m ? ue(e.value, n, "", m, "") : "",
    m: (m) => m ? ue(e.value, n, "", "", m) : "",
    be: (m, v) => m && v ? ue(e.value, n, m, v, "") : "",
    em: (m, v) => m && v ? ue(e.value, n, "", m, v) : "",
    bm: (m, v) => m && v ? ue(e.value, n, m, "", v) : "",
    bem: (m, v, R) => m && v && R ? ue(e.value, n, m, v, R) : "",
    is: (m, ...v) => {
      const R = v.length >= 1 ? v[0] : !0;
      return m && R ? `${Xc}${m}` : "";
    },
    cssVar: (m) => {
      const v = {};
      for (const R in m)
        m[R] && (v[`--${e.value}-${R}`] = m[R]);
      return v;
    },
    cssVarName: (m) => `--${e.value}-${m}`,
    cssVarBlock: (m) => {
      const v = {};
      for (const R in m)
        m[R] && (v[`--${e.value}-${n}-${R}`] = m[R]);
      return v;
    },
    cssVarBlockName: (m) => `--${e.value}-${n}-${m}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Kc = Object.prototype.hasOwnProperty, ls = (n, t) => Kc.call(n, t), qe = (n) => typeof n == "function", xe = (n) => typeof n == "string", to = (n) => n !== null && typeof n == "object";
var qc = typeof global == "object" && global && global.Object === Object && global, Jc = typeof self == "object" && self && self.Object === Object && self, fi = qc || Jc || Function("return this")(), Ae = fi.Symbol, eo = Object.prototype, Qc = eo.hasOwnProperty, th = eo.toString, je = Ae ? Ae.toStringTag : void 0;
function eh(n) {
  var t = Qc.call(n, je), e = n[je];
  try {
    n[je] = void 0;
    var i = !0;
  } catch {
  }
  var s = th.call(n);
  return i && (t ? n[je] = e : delete n[je]), s;
}
var nh = Object.prototype, ih = nh.toString;
function sh(n) {
  return ih.call(n);
}
var oh = "[object Null]", ah = "[object Undefined]", cs = Ae ? Ae.toStringTag : void 0;
function no(n) {
  return n == null ? n === void 0 ? ah : oh : cs && cs in Object(n) ? eh(n) : sh(n);
}
function rh(n) {
  return n != null && typeof n == "object";
}
var lh = "[object Symbol]";
function mi(n) {
  return typeof n == "symbol" || rh(n) && no(n) == lh;
}
function ch(n, t) {
  for (var e = -1, i = n == null ? 0 : n.length, s = Array(i); ++e < i; )
    s[e] = t(n[e], e, n);
  return s;
}
var pi = Array.isArray, hs = Ae ? Ae.prototype : void 0, us = hs ? hs.toString : void 0;
function io(n) {
  if (typeof n == "string")
    return n;
  if (pi(n))
    return ch(n, io) + "";
  if (mi(n))
    return us ? us.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function so(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
var hh = "[object AsyncFunction]", uh = "[object Function]", dh = "[object GeneratorFunction]", gh = "[object Proxy]";
function fh(n) {
  if (!so(n))
    return !1;
  var t = no(n);
  return t == uh || t == dh || t == hh || t == gh;
}
var Un = fi["__core-js_shared__"], ds = function() {
  var n = /[^.]+$/.exec(Un && Un.keys && Un.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function mh(n) {
  return !!ds && ds in n;
}
var ph = Function.prototype, yh = ph.toString;
function wh(n) {
  if (n != null) {
    try {
      return yh.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var vh = /[\\^$.*+?()[\]{}|]/g, xh = /^\[object .+?Constructor\]$/, kh = Function.prototype, bh = Object.prototype, Sh = kh.toString, Mh = bh.hasOwnProperty, Ch = RegExp(
  "^" + Sh.call(Mh).replace(vh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _h(n) {
  if (!so(n) || mh(n))
    return !1;
  var t = fh(n) ? Ch : xh;
  return t.test(wh(n));
}
function Th(n, t) {
  return n?.[t];
}
function oo(n, t) {
  var e = Th(n, t);
  return _h(e) ? e : void 0;
}
function zh(n, t) {
  return n === t || n !== n && t !== t;
}
var Rh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lh = /^\w*$/;
function Ph(n, t) {
  if (pi(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || mi(n) ? !0 : Lh.test(n) || !Rh.test(n) || t != null && n in Object(t);
}
var Je = oo(Object, "create");
function Ah() {
  this.__data__ = Je ? Je(null) : {}, this.size = 0;
}
function Dh(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var Ih = "__lodash_hash_undefined__", Oh = Object.prototype, Eh = Oh.hasOwnProperty;
function $h(n) {
  var t = this.__data__;
  if (Je) {
    var e = t[n];
    return e === Ih ? void 0 : e;
  }
  return Eh.call(t, n) ? t[n] : void 0;
}
var Wh = Object.prototype, Bh = Wh.hasOwnProperty;
function Nh(n) {
  var t = this.__data__;
  return Je ? t[n] !== void 0 : Bh.call(t, n);
}
var Hh = "__lodash_hash_undefined__";
function Fh(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Je && t === void 0 ? Hh : t, this;
}
function ke(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
ke.prototype.clear = Ah;
ke.prototype.delete = Dh;
ke.prototype.get = $h;
ke.prototype.has = Nh;
ke.prototype.set = Fh;
function jh() {
  this.__data__ = [], this.size = 0;
}
function zn(n, t) {
  for (var e = n.length; e--; )
    if (zh(n[e][0], t))
      return e;
  return -1;
}
var Vh = Array.prototype, Uh = Vh.splice;
function Yh(n) {
  var t = this.__data__, e = zn(t, n);
  if (e < 0)
    return !1;
  var i = t.length - 1;
  return e == i ? t.pop() : Uh.call(t, e, 1), --this.size, !0;
}
function Zh(n) {
  var t = this.__data__, e = zn(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function Xh(n) {
  return zn(this.__data__, n) > -1;
}
function Gh(n, t) {
  var e = this.__data__, i = zn(e, n);
  return i < 0 ? (++this.size, e.push([n, t])) : e[i][1] = t, this;
}
function Ee(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
Ee.prototype.clear = jh;
Ee.prototype.delete = Yh;
Ee.prototype.get = Zh;
Ee.prototype.has = Xh;
Ee.prototype.set = Gh;
var Kh = oo(fi, "Map");
function qh() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (Kh || Ee)(),
    string: new ke()
  };
}
function Jh(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function Rn(n, t) {
  var e = n.__data__;
  return Jh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function Qh(n) {
  var t = Rn(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function tu(n) {
  return Rn(this, n).get(n);
}
function eu(n) {
  return Rn(this, n).has(n);
}
function nu(n, t) {
  var e = Rn(this, n), i = e.size;
  return e.set(n, t), this.size += e.size == i ? 0 : 1, this;
}
function Se(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
Se.prototype.clear = qh;
Se.prototype.delete = Qh;
Se.prototype.get = tu;
Se.prototype.has = eu;
Se.prototype.set = nu;
var iu = "Expected a function";
function yi(n, t) {
  if (typeof n != "function" || t != null && typeof t != "function")
    throw new TypeError(iu);
  var e = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = e.cache;
    if (o.has(s))
      return o.get(s);
    var a = n.apply(this, i);
    return e.cache = o.set(s, a) || o, a;
  };
  return e.cache = new (yi.Cache || Se)(), e;
}
yi.Cache = Se;
var su = 500;
function ou(n) {
  var t = yi(n, function(i) {
    return e.size === su && e.clear(), i;
  }), e = t.cache;
  return t;
}
var au = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ru = /\\(\\)?/g, lu = ou(function(n) {
  var t = [];
  return n.charCodeAt(0) === 46 && t.push(""), n.replace(au, function(e, i, s, o) {
    t.push(s ? o.replace(ru, "$1") : i || e);
  }), t;
});
function cu(n) {
  return n == null ? "" : io(n);
}
function hu(n, t) {
  return pi(n) ? n : Ph(n, t) ? [n] : lu(cu(n));
}
function uu(n) {
  if (typeof n == "string" || mi(n))
    return n;
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function du(n, t) {
  t = hu(t, n);
  for (var e = 0, i = t.length; n != null && e < i; )
    n = n[uu(t[e++])];
  return e && e == i ? n : void 0;
}
function gu(n, t, e) {
  var i = n == null ? void 0 : du(n, t);
  return i === void 0 ? e : i;
}
function fu(n) {
  for (var t = -1, e = n == null ? 0 : n.length, i = {}; ++t < e; ) {
    var s = n[t];
    i[s[0]] = s[1];
  }
  return i;
}
const ao = (n) => n === void 0, gs = (n) => typeof n == "boolean", be = (n) => typeof n == "number", ni = (n) => typeof Element > "u" ? !1 : n instanceof Element, mu = (n) => xe(n) ? !Number.isNaN(Number(n)) : !1;
var fs;
const Me = typeof window < "u", pu = (n) => typeof n == "string", yu = () => {
};
Me && ((fs = window?.navigator) != null && fs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wi(n) {
  return typeof n == "function" ? n() : C(n);
}
function wu(n) {
  return n;
}
function vi(n) {
  return xa() ? (ka(n), !0) : !1;
}
function vu(n, t = !0) {
  Pe() ? Qe(n) : t ? n() : ye(n);
}
function ro(n, t, e = {}) {
  const {
    immediate: i = !0
  } = e, s = E(!1);
  let o = null;
  function a() {
    o && (clearTimeout(o), o = null);
  }
  function r() {
    s.value = !1, a();
  }
  function l(...h) {
    a(), s.value = !0, o = setTimeout(() => {
      s.value = !1, o = null, n(...h);
    }, wi(t));
  }
  return i && (s.value = !0, Me && l()), vi(r), {
    isPending: va(s),
    start: l,
    stop: r
  };
}
function lo(n) {
  var t;
  const e = wi(n);
  return (t = e?.$el) != null ? t : e;
}
const co = Me ? window : void 0;
function ho(...n) {
  let t, e, i, s;
  if (pu(n[0]) || Array.isArray(n[0]) ? ([e, i, s] = n, t = co) : [t, e, i, s] = n, !t)
    return yu;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((u) => u()), o.length = 0;
  }, r = (u, d, y, k) => (u.addEventListener(d, y, k), () => u.removeEventListener(d, y, k)), l = Oe(() => [lo(t), wi(s)], ([u, d]) => {
    a(), u && o.push(...e.flatMap((y) => i.map((k) => r(u, y, k, d))));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), a();
  };
  return vi(h), h;
}
function xu(n, t = !1) {
  const e = E(), i = () => e.value = !!n();
  return i(), vu(i, t), e;
}
const ms = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ps = "__vueuse_ssr_handlers__";
ms[ps] = ms[ps] || {};
var ys = Object.getOwnPropertySymbols, ku = Object.prototype.hasOwnProperty, bu = Object.prototype.propertyIsEnumerable, Su = (n, t) => {
  var e = {};
  for (var i in n)
    ku.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && ys)
    for (var i of ys(n))
      t.indexOf(i) < 0 && bu.call(n, i) && (e[i] = n[i]);
  return e;
};
function Mu(n, t, e = {}) {
  const i = e, { window: s = co } = i, o = Su(i, ["window"]);
  let a;
  const r = xu(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, h = Oe(() => lo(n), (d) => {
    l(), r.value && s && d && (a = new ResizeObserver(t), a.observe(d, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), h();
  };
  return vi(u), {
    isSupported: r,
    stop: u
  };
}
var ws;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(ws || (ws = {}));
var Cu = Object.defineProperty, vs = Object.getOwnPropertySymbols, _u = Object.prototype.hasOwnProperty, Tu = Object.prototype.propertyIsEnumerable, xs = (n, t, e) => t in n ? Cu(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, zu = (n, t) => {
  for (var e in t || (t = {}))
    _u.call(t, e) && xs(n, e, t[e]);
  if (vs)
    for (var e of vs(t))
      Tu.call(t, e) && xs(n, e, t[e]);
  return n;
};
const Ru = {
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
zu({
  linear: wu
}, Ru);
const ks = {
  current: 0
}, bs = E(0), uo = 2e3, Ss = Symbol("elZIndexContextKey"), go = Symbol("zIndexContextKey"), Lu = (n) => {
  const t = Pe() ? pe(Ss, ks) : ks, e = n || (Pe() ? pe(go, void 0) : void 0), i = I(() => {
    const a = C(e);
    return be(a) ? a : uo;
  }), s = I(() => i.value + bs.value), o = () => (t.current++, bs.value = t.current, s.value);
  return !Me && pe(Ss), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var Pu = {
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
const Au = (n) => (t, e) => Du(t, e, C(n)), Du = (n, t, e) => gu(e, n, n).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), Iu = (n) => {
  const t = I(() => C(n).name), e = ba(n) ? n : E(n);
  return {
    lang: t,
    locale: e,
    t: Au(n)
  };
}, fo = Symbol("localeContextKey"), Ou = (n) => {
  const t = n || pe(fo, E());
  return Iu(I(() => t.value || Pu));
}, mo = "__epPropKey", Yt = (n) => n, Eu = (n) => to(n) && !!n[mo], po = (n, t) => {
  if (!to(n) || Eu(n))
    return n;
  const { values: e, required: i, default: s, type: o, validator: a } = n, l = {
    type: o,
    required: !!i,
    validator: e || a ? (h) => {
      let u = !1, d = [];
      if (e && (d = Array.from(e), ls(n, "default") && d.push(s), u || (u = d.includes(h))), a && (u || (u = a(h))), !u && d.length > 0) {
        const y = [...new Set(d)].map((k) => JSON.stringify(k)).join(", ");
        Sa(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(h)}.`);
      }
      return u;
    } : void 0,
    [mo]: !0
  };
  return ls(n, "default") && (l.default = s), l;
}, $e = (n) => fu(Object.entries(n).map(([t, e]) => [
  t,
  po(e, t)
])), $u = ["", "default", "small", "large"], Wu = po({
  type: String,
  values: $u,
  required: !1
}), Bu = Symbol("size"), Nu = Symbol("emptyValuesContextKey"), Hu = $e({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (n) => qe(n) ? !n() : !n
  }
}), Ms = (n) => Object.keys(n), kn = E();
function yo(n, t = void 0) {
  return Pe() ? pe(Js, kn) : kn;
}
function wo(n, t) {
  const e = yo(), i = gi(n, I(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.namespace) || mn;
  })), s = Ou(I(() => {
    var r;
    return (r = e.value) == null ? void 0 : r.locale;
  })), o = Lu(I(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.zIndex) || uo;
  })), a = I(() => {
    var r;
    return C(t) || ((r = e.value) == null ? void 0 : r.size) || "";
  });
  return vo(I(() => C(e) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const vo = (n, t, e = !1) => {
  var i;
  const s = !!Pe(), o = s ? yo() : void 0, a = (i = void 0) != null ? i : s ? Ma : void 0;
  if (!a)
    return;
  const r = I(() => {
    const l = C(n);
    return o?.value ? Fu(o.value, l) : l;
  });
  return a(Js, r), a(fo, I(() => r.value.locale)), a(Qs, I(() => r.value.namespace)), a(go, I(() => r.value.zIndex)), a(Bu, {
    size: I(() => r.value.size || "")
  }), a(Nu, I(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (e || !kn.value) && (kn.value = r.value), r;
}, Fu = (n, t) => {
  const e = [.../* @__PURE__ */ new Set([...Ms(n), ...Ms(t)])], i = {};
  for (const s of e)
    i[s] = t[s] !== void 0 ? t[s] : n[s];
  return i;
};
var Ln = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
};
function ii(n, t = "px") {
  if (!n)
    return "";
  if (be(n) || mu(n))
    return `${n}${t}`;
  if (xe(n))
    return n;
}
const xo = (n, t) => (n.install = (e) => {
  for (const i of [n, ...Object.values({})])
    e.component(i.name, i);
}, n), ko = (n, t) => (n.install = (e) => {
  n._context = e._context, e.config.globalProperties[t] = n;
}, n), ju = $e({
  size: {
    type: Yt([Number, String])
  },
  color: {
    type: String
  }
}), Vu = Pt({
  name: "ElIcon",
  inheritAttrs: !1
}), Uu = /* @__PURE__ */ Pt({
  ...Vu,
  props: ju,
  setup(n) {
    const t = n, e = gi("icon"), i = I(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: ao(s) ? void 0 : ii(s),
        "--color": o
      };
    });
    return (s, o) => (T(), D("i", Ca({
      class: C(e).b(),
      style: C(i)
    }, s.$attrs), [
      ve(s.$slots, "default")
    ], 16));
  }
});
var Yu = /* @__PURE__ */ Ln(Uu, [["__file", "icon.vue"]]);
const bn = xo(Yu);
/*! Element Plus Icons Vue v2.3.1 */
var Zu = /* @__PURE__ */ Pt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(n) {
    return (t, e) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Xu = Zu, Gu = /* @__PURE__ */ Pt({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), bo = Gu, Ku = /* @__PURE__ */ Pt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(n) {
    return (t, e) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), qu = Ku, Ju = /* @__PURE__ */ Pt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(n) {
    return (t, e) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Qu = Ju, td = /* @__PURE__ */ Pt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(n) {
    return (t, e) => (T(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ed = td;
const So = Yt([
  String,
  Object,
  Function
]), nd = {
  Close: bo
}, id = {
  Close: bo
}, Sn = {
  success: Qu,
  warning: ed,
  error: Xu,
  info: qu
}, sd = (n) => n, pn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, od = $e({
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
    type: Yt([String, Object, Array])
  },
  offset: {
    type: Yt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), ad = Pt({
  name: "ElBadge"
}), rd = /* @__PURE__ */ Pt({
  ...ad,
  props: od,
  setup(n, { expose: t }) {
    const e = n, i = gi("badge"), s = I(() => e.isDot ? "" : be(e.value) && be(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`), o = I(() => {
      var a, r, l, h, u;
      return [
        {
          backgroundColor: e.color,
          marginRight: ii(-((r = (a = e.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: ii((h = (l = e.offset) == null ? void 0 : l[1]) != null ? h : 0)
        },
        (u = e.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (T(), D("div", {
      class: rt(C(i).b())
    }, [
      ve(a.$slots, "default"),
      w(oi, {
        name: `${C(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Et(() => [
          Xe(x("sup", {
            class: rt([
              C(i).e("content"),
              C(i).em("content", a.type),
              C(i).is("fixed", !!a.$slots.default),
              C(i).is("dot", a.isDot),
              C(i).is("hide-zero", !a.showZero && e.value === 0),
              a.badgeClass
            ]),
            style: gt(C(o))
          }, [
            ve(a.$slots, "content", { value: C(s) }, () => [
              Rs(B(C(s)), 1)
            ])
          ], 6), [
            [yn, !a.hidden && (C(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ld = /* @__PURE__ */ Ln(rd, [["__file", "badge.vue"]]);
const cd = xo(ld), hd = $e({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Yt(Object)
  },
  size: Wu,
  button: {
    type: Yt(Object)
  },
  experimentalFeatures: {
    type: Yt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Yt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Hu
}), qt = {};
Pt({
  name: "ElConfigProvider",
  props: hd,
  setup(n, { slots: t }) {
    Oe(() => n.message, (i) => {
      Object.assign(qt, i ?? {});
    }, { immediate: !0, deep: !0 });
    const e = vo(n);
    return () => ve(t, "default", { config: e?.value });
  }
});
const Mo = ["success", "info", "warning", "error"], Ot = sd({
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
  appendTo: Me ? document.body : void 0
}), ud = $e({
  customClass: {
    type: String,
    default: Ot.customClass
  },
  center: {
    type: Boolean,
    default: Ot.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ot.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ot.duration
  },
  icon: {
    type: So,
    default: Ot.icon
  },
  id: {
    type: String,
    default: Ot.id
  },
  message: {
    type: Yt([
      String,
      Object,
      Function
    ]),
    default: Ot.message
  },
  onClose: {
    type: Yt(Function),
    default: Ot.onClose
  },
  showClose: {
    type: Boolean,
    default: Ot.showClose
  },
  type: {
    type: String,
    values: Mo,
    default: Ot.type
  },
  plain: {
    type: Boolean,
    default: Ot.plain
  },
  offset: {
    type: Number,
    default: Ot.offset
  },
  zIndex: {
    type: Number,
    default: Ot.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ot.grouping
  },
  repeatNum: {
    type: Number,
    default: Ot.repeatNum
  }
}), dd = {
  destroy: () => !0
}, Jt = _a([]), gd = (n) => {
  const t = Jt.findIndex((s) => s.id === n), e = Jt[t];
  let i;
  return t > 0 && (i = Jt[t - 1]), { current: e, prev: i };
}, fd = (n) => {
  const { prev: t } = gd(n);
  return t ? t.vm.exposed.bottom.value : 0;
}, md = (n, t) => Jt.findIndex((i) => i.id === n) > 0 ? 16 : t, pd = Pt({
  name: "ElMessage"
}), yd = /* @__PURE__ */ Pt({
  ...pd,
  props: ud,
  emits: dd,
  setup(n, { expose: t }) {
    const e = n, { Close: i } = id, { ns: s, zIndex: o } = wo("message"), { currentZIndex: a, nextZIndex: r } = o, l = E(), h = E(!1), u = E(0);
    let d;
    const y = I(() => e.type ? e.type === "error" ? "danger" : e.type : "info"), k = I(() => {
      const j = e.type;
      return { [s.bm("icon", j)]: j && Sn[j] };
    }), M = I(() => e.icon || Sn[e.type] || ""), m = I(() => fd(e.id)), v = I(() => md(e.id, e.offset) + m.value), R = I(() => u.value + v.value), $ = I(() => ({
      top: `${v.value}px`,
      zIndex: a.value
    }));
    function z() {
      e.duration !== 0 && ({ stop: d } = ro(() => {
        Z();
      }, e.duration));
    }
    function Y() {
      d?.();
    }
    function Z() {
      h.value = !1;
    }
    function X({ code: j }) {
      j === pn.esc && Z();
    }
    return Qe(() => {
      z(), r(), h.value = !0;
    }), Oe(() => e.repeatNum, () => {
      Y(), z();
    }), ho(document, "keydown", X), Mu(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: R,
      close: Z
    }), (j, U) => (T(), St(oi, {
      name: C(s).b("fade"),
      onBeforeLeave: j.onClose,
      onAfterLeave: (J) => j.$emit("destroy"),
      persisted: ""
    }, {
      default: Et(() => [
        Xe(x("div", {
          id: j.id,
          ref_key: "messageRef",
          ref: l,
          class: rt([
            C(s).b(),
            { [C(s).m(j.type)]: j.type },
            C(s).is("center", j.center),
            C(s).is("closable", j.showClose),
            C(s).is("plain", j.plain),
            j.customClass
          ]),
          style: gt(C($)),
          role: "alert",
          onMouseenter: Y,
          onMouseleave: z
        }, [
          j.repeatNum > 1 ? (T(), St(C(cd), {
            key: 0,
            value: j.repeatNum,
            type: C(y),
            class: rt(C(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : F("v-if", !0),
          C(M) ? (T(), St(C(bn), {
            key: 1,
            class: rt([C(s).e("icon"), C(k)])
          }, {
            default: Et(() => [
              (T(), St(me(C(M))))
            ]),
            _: 1
          }, 8, ["class"])) : F("v-if", !0),
          ve(j.$slots, "default", {}, () => [
            j.dangerouslyUseHTMLString ? (T(), D($t, { key: 1 }, [
              F(" Caution here, message could've been compromised, never use user's input as message "),
              x("p", {
                class: rt(C(s).e("content")),
                innerHTML: j.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (T(), D("p", {
              key: 0,
              class: rt(C(s).e("content"))
            }, B(j.message), 3))
          ]),
          j.showClose ? (T(), St(C(bn), {
            key: 2,
            class: rt(C(s).e("closeBtn")),
            onClick: kt(Z, ["stop"])
          }, {
            default: Et(() => [
              w(C(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : F("v-if", !0)
        ], 46, ["id"]), [
          [yn, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var wd = /* @__PURE__ */ Ln(yd, [["__file", "message.vue"]]);
let vd = 1;
const Co = (n) => {
  const t = !n || xe(n) || Ge(n) || qe(n) ? { message: n } : n, e = {
    ...Ot,
    ...t
  };
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (xe(e.appendTo)) {
    let i = document.querySelector(e.appendTo);
    ni(i) || (i = document.body), e.appendTo = i;
  }
  return gs(qt.grouping) && !e.grouping && (e.grouping = qt.grouping), be(qt.duration) && e.duration === 3e3 && (e.duration = qt.duration), be(qt.offset) && e.offset === 16 && (e.offset = qt.offset), gs(qt.showClose) && !e.showClose && (e.showClose = qt.showClose), e;
}, xd = (n) => {
  const t = Jt.indexOf(n);
  if (t === -1)
    return;
  Jt.splice(t, 1);
  const { handler: e } = n;
  e.close();
}, kd = ({ appendTo: n, ...t }, e) => {
  const i = `message_${vd++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), xd(u);
    },
    onDestroy: () => {
      wn(null, o);
    }
  }, r = w(wd, a, qe(a.message) || Ge(a.message) ? {
    default: qe(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = e || De._context, wn(r, o), n.appendChild(o.firstElementChild);
  const l = r.component, u = {
    id: i,
    vnode: r,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: r.component.props
  };
  return u;
}, De = (n = {}, t) => {
  if (!Me)
    return { close: () => {
    } };
  const e = Co(n);
  if (e.grouping && Jt.length) {
    const s = Jt.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === e.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = e.type, s.handler;
  }
  if (be(qt.max) && Jt.length >= qt.max)
    return { close: () => {
    } };
  const i = kd(e, t);
  return Jt.push(i), i.handler;
};
Mo.forEach((n) => {
  De[n] = (t = {}, e) => {
    const i = Co(t);
    return De({ ...i, type: n }, e);
  };
});
function bd(n) {
  for (const t of Jt)
    (!n || n === t.props.type) && t.handler.close();
}
De.closeAll = bd;
De._context = null;
const Sd = ko(De, "$message"), _o = [
  "success",
  "info",
  "warning",
  "error"
], Md = $e({
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
    type: So
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Yt([
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
    type: Yt(Function),
    default: () => {
    }
  },
  onClose: {
    type: Yt(Function),
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
    values: [..._o, ""],
    default: ""
  },
  zIndex: Number
}), Cd = {
  destroy: () => !0
}, _d = Pt({
  name: "ElNotification"
}), Td = /* @__PURE__ */ Pt({
  ..._d,
  props: Md,
  emits: Cd,
  setup(n, { expose: t }) {
    const e = n, { ns: i, zIndex: s } = wo("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = nd, l = E(!1);
    let h;
    const u = I(() => {
      const z = e.type;
      return z && Sn[e.type] ? i.m(z) : "";
    }), d = I(() => e.type && Sn[e.type] || e.icon), y = I(() => e.position.endsWith("right") ? "right" : "left"), k = I(() => e.position.startsWith("top") ? "top" : "bottom"), M = I(() => {
      var z;
      return {
        [k.value]: `${e.offset}px`,
        zIndex: (z = e.zIndex) != null ? z : a.value
      };
    });
    function m() {
      e.duration > 0 && ({ stop: h } = ro(() => {
        l.value && R();
      }, e.duration));
    }
    function v() {
      h?.();
    }
    function R() {
      l.value = !1;
    }
    function $({ code: z }) {
      z === pn.delete || z === pn.backspace ? v() : z === pn.esc ? l.value && R() : m();
    }
    return Qe(() => {
      m(), o(), l.value = !0;
    }), ho(document, "keydown", $), t({
      visible: l,
      close: R
    }), (z, Y) => (T(), St(oi, {
      name: C(i).b("fade"),
      onBeforeLeave: z.onClose,
      onAfterLeave: (Z) => z.$emit("destroy"),
      persisted: ""
    }, {
      default: Et(() => [
        Xe(x("div", {
          id: z.id,
          class: rt([C(i).b(), z.customClass, C(y)]),
          style: gt(C(M)),
          role: "alert",
          onMouseenter: v,
          onMouseleave: m,
          onClick: z.onClick
        }, [
          C(d) ? (T(), St(C(bn), {
            key: 0,
            class: rt([C(i).e("icon"), C(u)])
          }, {
            default: Et(() => [
              (T(), St(me(C(d))))
            ]),
            _: 1
          }, 8, ["class"])) : F("v-if", !0),
          x("div", {
            class: rt(C(i).e("group"))
          }, [
            x("h2", {
              class: rt(C(i).e("title")),
              textContent: B(z.title)
            }, null, 10, ["textContent"]),
            Xe(x("div", {
              class: rt(C(i).e("content")),
              style: gt(z.title ? void 0 : { margin: 0 })
            }, [
              ve(z.$slots, "default", {}, () => [
                z.dangerouslyUseHTMLString ? (T(), D($t, { key: 1 }, [
                  F(" Caution here, message could've been compromised, never use user's input as message "),
                  x("p", { innerHTML: z.message }, null, 8, ["innerHTML"])
                ], 2112)) : (T(), D("p", { key: 0 }, B(z.message), 1))
              ])
            ], 6), [
              [yn, z.message]
            ]),
            z.showClose ? (T(), St(C(bn), {
              key: 0,
              class: rt(C(i).e("closeBtn")),
              onClick: kt(R, ["stop"])
            }, {
              default: Et(() => [
                w(C(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : F("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [yn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var zd = /* @__PURE__ */ Ln(Td, [["__file", "notification.vue"]]);
const Mn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, si = 16;
let Rd = 1;
const Ie = function(n = {}, t) {
  if (!Me)
    return { close: () => {
    } };
  (xe(n) || Ge(n)) && (n = { message: n });
  const e = n.position || "top-right";
  let i = n.offset || 0;
  Mn[e].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + si;
  }), i += si;
  const s = `notification_${Rd++}`, o = n.onClose, a = {
    ...n,
    offset: i,
    id: s,
    onClose: () => {
      Ld(s, e, o);
    }
  };
  let r = document.body;
  ni(n.appendTo) ? r = n.appendTo : xe(n.appendTo) && (r = document.querySelector(n.appendTo)), ni(r) || (r = document.body);
  const l = document.createElement("div"), h = w(zd, a, qe(a.message) ? a.message : Ge(a.message) ? () => a.message : null);
  return h.appContext = ao(t) ? Ie._context : t, h.props.onDestroy = () => {
    wn(null, l);
  }, wn(h, l), Mn[e].push({ vm: h }), r.appendChild(l.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
_o.forEach((n) => {
  Ie[n] = (t = {}, e) => ((xe(t) || Ge(t)) && (t = {
    message: t
  }), Ie({ ...t, type: n }, e));
});
function Ld(n, t, e) {
  const i = Mn[t], s = i.findIndex(({ vm: h }) => {
    var u;
    return ((u = h.component) == null ? void 0 : u.props.id) === n;
  });
  if (s === -1)
    return;
  const { vm: o } = i[s];
  if (!o)
    return;
  e?.(o);
  const a = o.el.offsetHeight, r = t.split("-")[0];
  i.splice(s, 1);
  const l = i.length;
  if (!(l < 1))
    for (let h = s; h < l; h++) {
      const { el: u, component: d } = i[h].vm, y = Number.parseInt(u.style[r], 10) - a - si;
      d.props.offset = y;
    }
}
function Pd() {
  for (const n of Object.values(Mn))
    n.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ie.closeAll = Pd;
Ie._context = null;
const Ad = ko(Ie, "$notify"), Ht = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(n, t = "success", e = "center", i) {
    this.message({
      message: n,
      type: t,
      position: e,
      duration: i
    });
  },
  /**
   * 显示消息提示（完整版）
   * @param options 消息选项
   */
  message(n) {
    const {
      message: t,
      type: e = "success",
      position: i = "center",
      duration: s = 3e3,
      showClose: o = !1
    } = n;
    i === "center" ? Sd({
      message: t,
      type: e,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${e}`
    }) : Ad({
      message: t,
      type: e,
      position: i,
      duration: s,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: `app-toast app-toast--corner app-toast--${e}`
      // 自定义样式类
    });
  },
  /**
   * 显示成功消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  success(n, t = "center", e) {
    this.msg(n, "success", t, e);
  },
  /**
   * 显示警告消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  warning(n, t = "center", e) {
    this.msg(n, "warning", t, e);
  },
  /**
   * 显示信息消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  info(n, t = "center", e) {
    this.msg(n, "info", t, e);
  },
  /**
   * 显示错误消息
   * @param message 消息内容
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  error(n, t = "center", e) {
    this.msg(n, "error", t, e);
  }
}, Dd = ["disabled"], Id = {
  key: 0,
  class: "custom-button__loading"
}, Od = /* @__PURE__ */ Pt({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (n) => ["default", "primary", "success", "danger", "warning", "text"].includes(n)
    },
    size: {
      type: String,
      default: "",
      validator: (n) => ["", "small", "large"].includes(n)
    },
    circle: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    plain: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(n) {
    const t = n;
    return (e, i) => (T(), D("button", {
      class: rt([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: n.loading || n.disabled,
      onClick: i[0] || (i[0] = (s) => e.$emit("click", s))
    }, [
      n.loading ? (T(), D("div", Id, i[1] || (i[1] = [
        x(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            x("circle", {
              class: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              "stroke-width": "5"
            })
          ],
          -1
          /* HOISTED */
        )
      ]))) : F("v-if", !0),
      ve(e.$slots, "default", {}, void 0, !0)
    ], 10, Dd));
  }
}), ne = /* @__PURE__ */ Tn(Od, [["__scopeId", "data-v-9497085f"]]);
function Ed(n) {
  return Bd(n.anchor, n.focus) <= 0 ? { start: n.anchor, end: n.focus } : { start: n.focus, end: n.anchor };
}
function To(n, t) {
  if (!t || n.length === 0)
    return [];
  const { start: e, end: i } = Ed(t);
  if (e.blockIndex < 0 || i.blockIndex >= n.length)
    return [];
  const s = [];
  for (let o = e.blockIndex; o <= i.blockIndex; o += 1) {
    const a = n[o].text.length, r = o === e.blockIndex ? Cs(e.offset, a) : 0, l = o === i.blockIndex ? Cs(i.offset, a) : a;
    l > r && s.push({ blockIndex: o, start: r, end: l });
  }
  return s;
}
function $d(n, t) {
  const e = To(n, t);
  return e.map((i, s) => {
    const o = n[i.blockIndex], a = o.text.slice(i.start, i.end), r = i.end === o.text.length, l = s < e.length - 1;
    return a + (r && l ? o.separator : "");
  }).join("");
}
function Wd(n, t) {
  let e = 0, i = Number.POSITIVE_INFINITY;
  for (let s = 0; s < n.length; s += 1) {
    const o = Math.abs(n[s] - t);
    o < i && (e = s, i = o);
  }
  return e;
}
function Bd(n, t) {
  return n.blockIndex - t.blockIndex || n.offset - t.offset;
}
function Cs(n, t) {
  return Number.isFinite(n) ? Math.max(0, Math.min(t, Math.round(n))) : 0;
}
const Nd = `你是高精度图片文字识别引擎。逐字读取图片，保留原语言、标点、数字、换行、列表和代码，不要翻译、总结或解释。
仅返回合法 JSON，结构必须为：
{"text":"完整文字","sections":[{"type":"title|paragraph|list|code|table","text":"原文分块"}],"keywords":["值得突出显示的原文关键词"]}
sections 必须覆盖完整文字；keywords 最多 8 个，只能取自图片原文。`, _s = {
  auto: "自动判断图片文字语言",
  zh: "优先按简体中文识别",
  "zh-tw": "优先按繁体中文识别",
  en: "优先按英文识别",
  ja: "优先按日文识别",
  ko: "优先按韩文识别"
}, Hd = /* @__PURE__ */ new Set([
  "title",
  "paragraph",
  "list",
  "code",
  "table"
]), zo = (n, t, e) => typeof n == "string" && Hd.has(n) ? n : e === 0 && t.length <= 80 && !/[。！？.!?]\s*$/.test(t) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/m.test(t) ? "list" : "paragraph", Fd = (n) => n.split(/\n{2,}/).map((t) => t.trim()).filter(Boolean).map((t, e) => ({
  type: zo(void 0, t, e),
  text: t
})), jd = (n) => {
  const t = n.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (t?.startsWith("{") && t.endsWith("}"))
    return t;
  const e = n.indexOf("{"), i = n.lastIndexOf("}");
  return e >= 0 && i > e ? n.slice(e, i + 1) : null;
}, Vd = (n, t) => {
  if (!Array.isArray(n)) return [];
  const e = t.toLocaleLowerCase(), i = /* @__PURE__ */ new Set();
  return n.map((s) => typeof s == "string" ? s.trim() : "").filter((s) => {
    const o = s.toLocaleLowerCase();
    return !s || s.length > 32 || i.has(o) || !e.includes(o) ? !1 : (i.add(o), !0);
  }).slice(0, 8);
}, Ud = (n) => {
  const t = n.trim();
  if (!t)
    throw new Error("AI_OCR_EMPTY_RESPONSE");
  const e = jd(t);
  let i = null;
  if (e)
    try {
      i = JSON.parse(e);
    } catch {
      i = null;
    }
  const s = typeof i?.text == "string" ? i.text.trim() : "", a = (Array.isArray(i?.sections) ? i.sections : []).map((h, u) => {
    if (!h || typeof h != "object") return null;
    const d = h, y = typeof d.text == "string" ? d.text.trim() : "";
    return y ? {
      type: zo(d.type, y, u),
      text: y
    } : null;
  }).filter((h) => !!h), r = s || a.map((h) => h.text).join(`

`) || t, l = a.length > 0 ? a : Fd(r);
  return {
    text: r,
    sections: l,
    keywords: Vd(i?.keywords, r)
  };
}, Ts = (n) => n && n.split(/[\\/]/).filter(Boolean).pop() || "", Yd = async (n, t) => {
  const e = await zr(), i = await Rr(e);
  if (!i.selectedMmprojPath)
    throw new Error("AI_OCR_VISION_MODEL_UNAVAILABLE");
  const s = await Hs({
    messages: [
      { role: "system", content: Nd },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `${_s[t] || _s.auto}。现在识别这张图片。`
          },
          {
            type: "image_url",
            image_url: { url: n }
          }
        ]
      }
    ],
    temperature: 0,
    enableThinking: !1,
    maxTokens: 4096
  }), o = Ud(s.content), a = await Ns().catch(() => null);
  return {
    ...o,
    modelName: Ts(a?.modelPath) || Ts(i.selectedModelPath) || "Local Vision"
  };
}, Zd = (n, t) => {
  const e = [...new Set(t.map((o) => o.trim()))].filter(Boolean).sort((o, a) => a.length - o.length);
  if (!n || e.length === 0)
    return [{ text: n, highlighted: !1 }];
  const i = e.map((o) => o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), s = new RegExp(`(${i})`, "giu");
  return n.split(s).filter(Boolean).map((o) => ({
    text: o,
    highlighted: e.some(
      (a) => a.toLocaleLowerCase() === o.toLocaleLowerCase()
    )
  }));
}, Xd = ["src", "alt"], Gd = { class: "ocr-header" }, Kd = {
  class: "ocr-title-copy",
  "data-tauri-drag-region": ""
}, qd = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, Jd = { "data-tauri-drag-region": "" }, Qd = {
  class: "ocr-source-inline",
  "data-tauri-drag-region": ""
}, tg = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, eg = { "data-tauri-drag-region": "" }, ng = { class: "ocr-title-actions" }, ig = ["title"], sg = { class: "ocr-window-controls" }, og = ["title"], ag = ["title"], rg = ["title"], lg = ["title"], cg = { class: "ocr-result-layout" }, hg = { class: "ocr-preview-pane" }, ug = { class: "ocr-pane-header" }, dg = {
  key: 0,
  class: "ocr-ready-badge"
}, gg = { class: "ocr-preview-canvas" }, fg = { class: "ocr-preview-stage" }, mg = ["src", "alt"], pg = {
  key: 0,
  class: "ocr-selection-highlight-layer",
  "aria-hidden": "true"
}, yg = ["data-selection-index", "textContent"], wg = {
  key: 0,
  class: "ocr-selection-copy"
}, vg = { class: "ocr-record-pane" }, xg = { class: "ocr-pane-header result-header" }, kg = { key: 0 }, bg = { key: 1 }, Sg = {
  key: 0,
  class: "ocr-state"
}, Mg = { class: "ocr-ai-orbit" }, Cg = {
  key: 1,
  class: "ocr-state error"
}, _g = {
  key: 2,
  class: "ocr-state muted"
}, Tg = {
  key: 3,
  class: "ocr-result-scroll"
}, zg = {
  key: 0,
  class: "ocr-keywords"
}, Rg = { class: "ocr-keywords-label" }, Lg = {
  key: 1,
  class: "ocr-selection-translation"
}, Pg = { class: "ocr-translation-section" }, Ag = { class: "ocr-translation-label" }, Dg = { class: "ocr-translation-source" }, Ig = { class: "ocr-translation-section result" }, Og = { class: "ocr-translation-label" }, Eg = ["textContent"], $g = { class: "ocr-record-header" }, Wg = ["aria-pressed", "title", "onClick"], Bg = { key: 1 }, Ng = { class: "ocr-record-kind" }, Hg = {
  key: 0,
  class: "ocr-record-score"
}, Fg = { class: "ocr-record-text" }, jg = { key: 0 }, Vg = { key: 1 }, Ug = {
  key: 0,
  class: "ocr-record-translation"
}, Yg = { class: "ocr-translation-label" }, Zg = ["textContent"], Xg = { class: "ocr-action-bar" }, Gg = ["onClick"], Kg = { class: "engine-label" }, qg = ["onClick"], Jg = { class: "engine-label" }, Qg = { class: "ocr-engine-btn-group relative" }, tf = {
  key: 2,
  class: "zoom-info"
}, Yn = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', ef = /* @__PURE__ */ Pt({
  __name: "index",
  setup(n) {
    const { t } = Ls(), e = E(), i = E(), s = E(null), o = E(""), a = E(""), r = E("pin"), l = E(""), h = E([]), u = E([]), d = E([]), y = E(!1), k = E(""), M = E("pending"), m = E(""), v = E(""), R = E(0), $ = E(0), z = E({ width: 0, height: 0 }), Y = E({ width: 0, height: 0 }), Z = E(null), X = E(null), j = E(!1);
    let U = null;
    const J = E(!1), K = E(!1), it = E(), st = E({}), nt = E("bing"), ot = E(!1), at = E(), G = E({}), Q = E("auto"), pt = I(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: t("translate.offlineMark")
      }
    ]), wt = I(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), ft = (c) => {
      const g = typeof c == "string" ? c.trim().toLowerCase() : "";
      return g === "auto" || g === "zh" || g === "zh-tw" || g === "en" || g === "ja" || g === "ko" ? g : "auto";
    }, Ct = I(() => wt.value.find((c) => c.value === Q.value)?.label || t("pin.ocrLanguageAuto")), O = I(() => t("pin.translationResult")), Tt = (c, g) => {
      if (!c) {
        g.value = {};
        return;
      }
      const p = c.getBoundingClientRect(), V = 180, W = 8, q = Math.min(
        Math.max(
          p.left + p.width / 2,
          W + V / 2
        ),
        window.innerWidth - W - V / 2
      );
      g.value = {
        left: `${q}px`,
        bottom: `${Math.max(8, window.innerHeight - p.top + 8)}px`
      };
    }, H = () => {
      K.value && Tt(it.value, st), ot.value && Tt(
        at.value,
        G
      );
    }, zt = I(() => Q.value), yt = E(1), At = E(!1), Wt = E(!1);
    let ee = null, jt = null;
    const _ = E(!1), et = E({ x: 0, y: 0 }), ut = E(!0), ct = E({ width: 0, height: 0 });
    let Rt = null, bt = 0;
    const Gt = E(""), b = I(() => ({
      width: "100%",
      height: r.value === "ocr" ? "auto" : "100%",
      flex: r.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: r.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), N = I(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), dt = I(() => R.value > 0 && $.value > 0 ? `${R.value} × ${$.value}` : t("pin.screenshotPreview")), mt = I(() => y.value ? t("pin.recognizing") : k.value ? t("pin.recognizeFailed") : l.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), tt = I(() => y.value ? t("pin.aiRecognizing") : M.value === "ai" ? t("pin.aiVision") : M.value === "rapidocr" ? t("pin.rapidOcrFallback") : t("pin.aiVision")), _t = I(() => {
      const c = tt.value;
      return m.value ? `${c} · ${m.value}` : c;
    }), Dt = I(
      () => h.value.filter((c) => c.selected)
    ), ht = I(
      () => u.value.flatMap(
        (c) => c.blocks.filter(ki).map((g, p) => ({
          ...g,
          id: `${c.id}-block-${p}`,
          recordId: c.id,
          separator: Ao(g, c.blocks[p + 1])
        }))
      )
    ), We = I(
      () => ht.value.length > 0 ? t("pin.dragToSelectText") : y.value ? t("pin.imageSelectionPreparing") : t("pin.imageSelectionUnavailable")
    ), he = I(
      () => To(
        ht.value,
        X.value
      )
    ), It = I(
      () => $d(ht.value, X.value)
    ), Pn = I(
      () => he.value.map((c) => {
        const g = ht.value[c.blockIndex], p = Dn(g), V = p.boundaries[c.start] || 0, W = p.boundaries[c.end] || p.renderedWidth, q = V / p.renderedWidth, vt = W / p.renderedWidth;
        return {
          id: `${g.id}-${c.start}-${c.end}`,
          left: g.x + g.width * q,
          top: g.y,
          width: g.width * Math.max(0, vt - q),
          height: g.height
        };
      })
    ), xi = I(() => Dt.value.length), Ro = (c) => Zd(c, d.value), Lo = (c) => t(`pin.sectionKinds.${c}`), Po = (c) => (c.translatedText || c.text).trim(), An = (c) => c.map(Po).filter(Boolean).join(`

`), Be = () => {
      l.value = An(h.value);
    }, ki = (c) => R.value > 0 && $.value > 0 && c.width > 0 && c.height > 0, Ao = (c, g) => {
      if (!g)
        return `

`;
      const p = c.text.trim().slice(-1), V = g.text.trim().slice(0, 1), W = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
      return W.test(p) || W.test(V) ? "" : " ";
    }, Do = (c) => {
      if (!ki(c))
        return {};
      const g = oe(c.x / R.value * 100), p = oe(c.y / $.value * 100), V = oe(c.width / R.value * 100, 1), W = oe(c.height / $.value * 100, 1), q = Dn(c);
      return {
        left: `${g}%`,
        top: `${p}%`,
        width: `${V}%`,
        height: `${W}%`,
        fontSize: `${q.fontSize}px`,
        lineHeight: `${q.lineHeight}px`,
        letterSpacing: `${q.letterSpacing}px`
      };
    }, Io = (c) => R.value <= 0 || $.value <= 0 ? {} : {
      left: `${oe(c.left / R.value * 100)}%`,
      top: `${oe(c.top / $.value * 100)}%`,
      width: `${oe(c.width / R.value * 100)}%`,
      height: `${oe(c.height / $.value * 100)}%`
    }, Ce = /* @__PURE__ */ new Map();
    let bi = null;
    const Dn = (c) => {
      const g = Eo(), p = c.text.trim(), V = `${c.id}:${p}:${g.toFixed(4)}`, W = Ce.get(V);
      if (W)
        return W;
      const q = Math.max(c.width * g, 1), vt = Math.max(c.height * g, 1);
      let xt = Si(
        Math.min(
          (c.fontSize || c.height * 0.8) * g,
          vt * 0.86
        ),
        5,
        28
      );
      const Bt = Oo();
      Bt.font = `${xt}px ${Yn}`;
      let Nt = Math.max(Bt.measureText(p).width, 1);
      Nt > q && (xt = Math.max(5, xt * (q / Nt)), Bt.font = `${xt}px ${Yn}`, Nt = Math.max(Bt.measureText(p).width, 1));
      const Zt = p.length > 0 ? Math.max(0, (q - Nt) / p.length) : 0, Hi = Array.from({ length: p.length + 1 }, (uf, Hn) => Hn === 0 ? 0 : (Bt.font = `${xt}px ${Yn}`, Bt.measureText(p.slice(0, Hn)).width + Zt * Hn)), ma = Math.max(Hi[p.length] || Nt, 1), Fi = {
        fontSize: xt,
        lineHeight: vt,
        letterSpacing: Zt,
        boundaries: Hi,
        renderedWidth: ma
      };
      return Ce.set(V, Fi), Fi;
    }, Oo = () => {
      bi || (bi = document.createElement("canvas"));
      const c = bi.getContext("2d");
      if (!c)
        throw new Error(t("pin.ocrMeasureFailed"));
      return c;
    }, Eo = () => R.value <= 0 || $.value <= 0 || z.value.width <= 0 || z.value.height <= 0 ? 1 : Math.min(
      z.value.width / R.value,
      z.value.height / $.value
    ), In = () => {
      const c = i.value;
      if (Ce.clear(), !c) {
        z.value = { width: 0, height: 0 };
        return;
      }
      z.value = {
        width: c.clientWidth,
        height: c.clientHeight
      };
    }, oe = (c, g = 0) => Number.isFinite(c) ? Math.min(100, Math.max(g, c)) : g, Si = (c, g, p) => Number.isFinite(c) ? Math.min(p, Math.max(g, c)) : g, $o = () => {
      const c = /* @__PURE__ */ new Date(), g = (p) => p.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${c.getFullYear()}-${g(c.getMonth() + 1)}-${g(c.getDate())} ${g(c.getHours())}.${g(c.getMinutes())}.${g(c.getSeconds())}.png`;
    }, Wo = I(() => {
      const c = Math.min(
        ct.value.width,
        ct.value.height
      );
      let g = 1;
      return c < 300 && (g = Math.max(0.4, c / 300)), {
        left: `${et.value.x}px`,
        top: `${et.value.y}px`,
        transform: `scale(${g})`,
        transformOrigin: "top left"
      };
    }), Bo = (c) => {
      o.value = c, R.value = 0, $.value = 0, z.value = { width: 0, height: 0 }, Nn(), Ce.clear(), Y.value = { width: 0, height: 0 }, r.value === "ocr" && (v.value = $o()), a.value && (URL.revokeObjectURL(a.value), a.value = "");
      try {
        const g = c.split(",")[1] || c, p = c.match(/data:([^;]+);/), V = p ? p[1] : "image/png", W = atob(g), q = new Uint8Array(W.length);
        for (let xt = 0; xt < W.length; xt++)
          q[xt] = W.charCodeAt(xt);
        const vt = new Blob([q], { type: V });
        a.value = URL.createObjectURL(vt);
      } catch (g) {
        A.error("[PIN窗口] 转换 Blob URL 失败", g), a.value = c;
      }
    }, Mi = async () => {
      await ye(), await new Promise((c) => requestAnimationFrame(() => c()));
      try {
        await s.value?.emit("pin-window-ready");
      } catch (c) {
        A.error("[PIN窗口] 发送 ready 事件失败", c);
      }
    }, Ci = (c) => {
      if (!c?.imageData)
        return A.error("[PIN窗口] 收到的事件数据格式不正确", c), !1;
      const g = c.mode === "ocr" ? "ocr" : "pin", p = `${g}:${c.imageData.length}`;
      return p === Gt.value ? !1 : (Gt.value = p, r.value = g, Bo(c.imageData), Kt(), r.value === "ocr" ? (_i(c.text || ""), k.value = "", On()) : (bt++, y.value = !1, k.value = "", l.value = "", h.value = [], u.value = [], d.value = []), !0);
    }, On = async () => {
      if (!o.value) return;
      const c = ++bt;
      Nn(), Z.value = null, Ce.clear(), y.value = !0, k.value = "", M.value = "pending", m.value = "", d.value = [];
      const g = Date.now();
      Lt.log("[Pin AI OCR] recognize start", {
        requestId: c,
        imageDataLength: o.value.length,
        imageWidth: R.value,
        imageHeight: $.value,
        language: Q.value,
        backendLanguage: zt.value
      });
      try {
        const [p, V] = await Promise.allSettled([
          Yd(o.value, Q.value),
          S("recognize_text_from_image", {
            imageData: o.value,
            engine: "rapidocr",
            language: zt.value
          })
        ]);
        if (c !== bt) return;
        const W = V.status === "fulfilled" ? Fo(V.value) : [];
        if (u.value = W, p.status === "fulfilled") {
          const q = Ho(p.value);
          if (q.length === 0 && !p.value.text.trim())
            throw new Error("AI_OCR_EMPTY_RESPONSE");
          h.value = q.length > 0 ? q : En(p.value.text), d.value = p.value.keywords, Be(), M.value = "ai", m.value = p.value.modelName;
        } else if (V.status === "fulfilled") {
          const q = W.length > 0 ? An(W) : Yo(V.value);
          h.value = W.length > 0 ? W : En(q), Be(), M.value = "rapidocr", Lt.log("[Pin AI OCR] vision fallback", {
            requestId: c,
            error: en(p.reason)
          }), Ht.warning(t("pin.aiOcrFallbackNotice"));
        } else
          throw new Error(
            [
              en(p.reason),
              en(V.reason)
            ].join(`
`)
          );
        Ce.clear(), Lt.log("[Pin AI OCR] recognize success", {
          requestId: c,
          durationMs: Date.now() - g,
          engine: M.value,
          geometryBlocks: ht.value.length,
          textLength: l.value.length,
          textPreview: l.value.slice(0, 300)
        });
      } catch (p) {
        if (c !== bt) return;
        A.error("[PIN窗口] AI OCR 识别失败", p), Lt.log("[Pin AI OCR] recognize failed", {
          requestId: c,
          durationMs: Date.now() - g,
          error: en(p)
        }), k.value = t("pin.recognizeFailed"), l.value = "", h.value = [], u.value = [], Ht.error(t("pin.recognizeFailed"));
      } finally {
        c === bt && (y.value = !1);
      }
    }, _i = (c) => {
      const g = c.trim();
      l.value = g, h.value = En(g);
    }, En = (c) => c.split(/\n{2,}|\n/).map((g, p) => No(g, p)).filter((g) => g.text.trim()), Ti = (c, g) => g === 0 && c.length <= 80 && !/[。！？.!?]\s*$/.test(c) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/.test(c) ? "list" : "paragraph", No = (c, g) => ({
      id: `plain-${Date.now()}-${g}`,
      kind: Ti(c, g),
      text: c.trim(),
      sourceText: c.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), Ho = (c) => c.sections.map((g, p) => ({
      id: `ai-${Date.now()}-${p}`,
      kind: g.type,
      text: g.text.trim(),
      sourceText: g.text.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    })).filter((g) => g.text), Fo = (c) => {
      const g = Vo(c?.blocks);
      return g.length === 0 ? [] : js(g).map((V, W) => jo(V, W)).filter((V) => V.text.trim());
    }, jo = (c, g) => {
      const p = c.text.trim(), V = c.blocks;
      return {
        id: `ocr-${Date.now()}-${g}`,
        kind: Ti(p, g),
        text: p,
        sourceText: p,
        translatedText: c.translatedText?.trim() || "",
        bbox: { ...c.bbox },
        blocks: V,
        confidence: Uo(V),
        selected: !1
      };
    }, Vo = (c) => Array.isArray(c) ? c.map((g) => {
      if (!g || typeof g != "object")
        return null;
      const p = g, V = typeof p.text == "string" ? p.text.trim() : "";
      if (!V)
        return null;
      const W = {
        text: V,
        x: Number(p.x || 0),
        y: Number(p.y || 0),
        width: Number(p.width || 0),
        height: Number(p.height || 0),
        fontSize: Number(p.fontSize || 0),
        lineHeight: Number(p.lineHeight || 0),
        angle: Number(p.angle || 0),
        isCodeBlock: !!p.isCodeBlock,
        confidence: Number(p.confidence || 0)
      };
      return typeof p.translatedText == "string" && (W.translatedText = p.translatedText), W;
    }).filter((g) => g !== null) : [], Uo = (c) => {
      const g = c.map((p) => Number(p.confidence || 0)).filter((p) => Number.isFinite(p) && p > 0);
      return g.length === 0 ? 0 : g.reduce((p, V) => p + V, 0) / g.length;
    }, Yo = (c) => typeof c == "string" ? c : c?.text ? c.text : c?.full_text ? c.full_text : Array.isArray(c?.blocks) ? c.blocks.map((g) => g?.text).filter(Boolean).join(`
`) : "", en = (c) => c instanceof Error ? `${c.name}: ${c.message}
${c.stack || ""}`.trim() : typeof c == "string" ? c : JSON.stringify(c) || String(c), nn = async () => {
      const c = Go();
      c && await zi(c);
    }, Zo = async () => {
      const c = It.value.trim();
      c && await zi(c);
    }, zi = async (c) => {
      try {
        await navigator.clipboard.writeText(c), Ht.success(t("pin.copySuccess"));
      } catch (g) {
        A.error("[PIN窗口] 复制识别文本失败", g), Ht.error(t("pin.copyFailed"));
      } finally {
        Kt();
      }
    }, Xo = async () => {
      Be();
      const c = l.value.trim();
      if (c)
        try {
          await S("save_text_to_file", { text: c }), Ht.success(t("pin.saveSuccess"));
        } catch (g) {
          g !== "SAVE_CANCELLED" && (A.error("[PIN窗口] 保存文本失败", g), Ht.error(t("pin.saveFailed")));
        }
    }, Go = () => {
      const c = Ko();
      if (c)
        return c;
      if (It.value)
        return It.value;
      const g = An(
        Dt.value
      );
      return g || (Be(), l.value.trim());
    }, Ko = () => {
      const c = window.getSelection(), g = e.value?.querySelector(".ocr-reading-surface");
      if (!c || c.rangeCount === 0 || !g)
        return "";
      for (let p = 0; p < c.rangeCount; p += 1) {
        const W = c.getRangeAt(p).commonAncestorContainer;
        if (g.contains(W))
          return c.toString().trim();
      }
      return "";
    }, qo = (c) => {
      const g = h.value.find((p) => p.id === c);
      g && (g.selected = !g.selected);
    }, Jo = (c) => {
      const g = c.target;
      !g || !Z.value || (Z.value.translatedText = g.innerText.trim());
    }, Qo = async () => {
      K.value = !K.value, ot.value = !1, K.value && (await ye(), H());
    }, ta = (c) => {
      nt.value = c, K.value = !1, S("set_translation_engine", { engine: c }).catch((g) => {
        A.error("[PIN窗口] 保存翻译引擎设置失败", g);
      });
    }, Ri = async () => {
      ot.value = !ot.value, K.value = !1, ot.value && (await ye(), H());
    }, ea = (c) => {
      Q.value = c, ot.value = !1, S("set_ocr_language", { language: c }).catch((g) => {
        A.error("[PIN窗口] 保存 OCR 语言设置失败", g);
      }), o.value && On();
    }, na = async () => {
      if (Kt(), K.value = !1, ot.value = !1, !l.value.trim() || J.value) return;
      const c = It.value.trim(), g = c ? [] : Dt.value.length > 0 ? Dt.value : h.value, p = c || (g.length > 0 ? g.map((W) => W.text).join(`

`) : l.value), V = de(p);
      if (!Le(V)) {
        Ht.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      J.value = !0;
      try {
        if (await ia(), c) {
          const W = await $n(
            c,
            V
          );
          W && (Z.value = {
            sourceText: c,
            translatedText: W.trim()
          }), Ht.success(t("pin.translateSuccess"));
        } else if (g.length > 0) {
          for (const W of g) {
            const q = await $n(
              W.text,
              V
            );
            q && (W.translatedText = q.trim());
          }
          Be(), Ht.success(t("pin.translateSuccess"));
        } else {
          const W = await $n(
            l.value,
            V
          );
          W && _i(W), Ht.success(t("pin.translateSuccess"));
        }
      } catch (W) {
        A.error("[PIN窗口] 翻译失败", W);
        const q = W instanceof Error ? W.message : String(W);
        if (q !== "翻译已取消") {
          const vt = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          Ht.error(
            vt.includes(q) ? q : t("pin.translateFailed")
          );
        }
      } finally {
        J.value = !1;
      }
    }, ia = async () => {
      if (nt.value !== "offline")
        return;
      if ((await li()).isCached)
        await Bs();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await S("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, $n = async (c, g) => {
      const p = c.trim();
      return p ? nt.value === "offline" ? Ws(p) : await S("translate_text", {
        text: p,
        from: "auto",
        to: g === "zh" ? "en" : "zh",
        engine: nt.value
      }) : "";
    }, sa = (c) => {
      sn(c);
    }, oa = async () => {
      if (!s.value) return;
      const c = s.value;
      typeof c.minimize == "function" && await c.minimize();
    }, aa = async () => {
      if (!s.value) return;
      const c = s.value;
      (typeof c.isMaximized == "function" ? await c.isMaximized() : !1) && typeof c.unmaximize == "function" ? await c.unmaximize() : typeof c.maximize == "function" && await c.maximize();
    }, Li = async (c) => {
      const g = c.target;
      if (R.value = g.naturalWidth, $.value = g.naturalHeight, g === i.value && In(), s.value && Y.value.width === 0)
        try {
          const p = await s.value.innerSize(), V = await s.value.scaleFactor(), W = p.toLogical(V);
          Y.value = {
            width: W.width,
            height: W.height
          };
        } catch (p) {
          A.error("[PIN窗口] 获取窗口初始尺寸失败", p);
        }
    }, Pi = async (c) => {
      if (c.ctrlKey && (c.preventDefault(), c.stopPropagation(), !Wt.value && s.value)) {
        Wt.value = !0;
        try {
          const p = (await s.value.innerSize()).toLogical(
            await s.value.scaleFactor()
          ), V = c.deltaY > 0 ? 0.95 : 1.05, W = p.width, q = p.height, vt = Math.round(W * V), xt = Math.round(q * V), Bt = 50, Nt = 3e3;
          if (vt >= Bt && vt <= Nt && xt >= Bt && xt <= Nt) {
            if (await s.value.setSize(new Ue(vt, xt)), R.value > 0) {
              const Zt = Math.round(
                vt / R.value * 100
              );
              yt.value = Zt / 100;
            }
            At.value = !0, Wn();
          }
        } catch (g) {
          A.error("[PIN窗口] 窗口缩放失败", g);
        } finally {
          setTimeout(() => {
            Wt.value = !1;
          }, 100);
        }
      }
    }, ra = (c) => {
      r.value === "ocr" && c.ctrlKey && Pi(c);
    }, Wn = () => {
      At.value = !0, ee && clearTimeout(ee), ee = setTimeout(() => {
        At.value = !1;
      }, 1e3);
    }, sn = (c) => {
      c.preventDefault(), c.stopPropagation(), _.value = !1, setTimeout(() => {
        const g = window.innerWidth, p = window.innerHeight;
        ct.value = { width: g, height: p };
        const V = Math.min(g, p);
        let W = 1;
        V < 300 && (W = Math.max(0.4, V / 300));
        const q = r.value === "ocr" ? 176 : 150, vt = r.value === "ocr" && l.value.trim() ? 222 : 180, xt = q * W, Bt = vt * W;
        let Nt = c.clientX, Zt = c.clientY;
        Nt + xt > g && (Nt = g - xt - 5), Zt + Bt > p && (Zt = p - Bt - 5), Nt = Math.max(5, Nt), Zt = Math.max(5, Zt), et.value = { x: Nt, y: Zt }, _.value = !0;
      }, 10);
    }, Kt = () => {
      _.value = !1, K.value = !1, ot.value = !1;
    }, Ai = async () => {
      s.value && (ut.value = !ut.value, await s.value.setAlwaysOnTop(ut.value), Kt());
    }, Di = async (c) => {
      if (s.value && !Wt.value) {
        Wt.value = !0;
        try {
          const p = (await s.value.innerSize()).toLogical(
            await s.value.scaleFactor()
          ), V = Math.round(p.width * c), W = Math.round(p.height * c), q = 50, vt = 3e3;
          V >= q && V <= vt && W >= q && W <= vt && (await s.value.setSize(new Ue(V, W)), R.value > 0 && (yt.value = V / R.value), Wn());
        } catch (g) {
          A.error("[PIN窗口] 键盘缩放失败", g);
        } finally {
          setTimeout(() => {
            Wt.value = !1;
          }, 100);
        }
      }
    }, Ii = async () => {
      if (s.value && Y.value.width > 0 && Y.value.height > 0)
        try {
          await s.value.setSize(
            new Ue(
              Y.value.width,
              Y.value.height
            )
          ), yt.value = 1, Wn();
        } catch (c) {
          A.error("[PIN窗口] 重置缩放失败", c);
        }
      Kt();
    }, la = async () => {
      try {
        const c = o.value;
        Kt(), s.value && await s.value.hide(), await S("copy_image_to_clipboard", { imageData: c }), Ht.success(t("pin.copySuccess")), s.value && await s.value.close();
      } catch (c) {
        A.error("[PIN窗口] 复制图片失败", c), Ht.error(t("pin.copyFailed")), s.value && await s.value.close();
      }
    }, ca = async () => {
      const c = o.value;
      Kt(), s.value && await s.value.hide();
      try {
        await S("save_pin_image", { imageData: c }), Ht.success(t("pin.saveSuccess")), s.value && await s.value.close();
      } catch (g) {
        g === "SAVE_CANCELLED" ? (A.info("[PIN窗口] 用户取消保存，恢复窗口显示"), s.value && await s.value.show()) : (A.error("[PIN窗口] 保存图片失败", g), Ht.error(t("pin.saveFailed")), s.value && await s.value.close());
      }
    }, Bn = async () => {
      s.value && await s.value.close();
    }, Oi = (c) => {
      c.preventDefault();
    }, Ei = async (c) => {
      if (c.button === 0 && s.value) {
        const g = c.target;
        if (g.hasAttribute("data-tauri-drag-region") || g.closest("[data-tauri-drag-region]")) {
          if (g.closest("button") || g.closest(".ocr-view-original"))
            return;
          try {
            await s.value.startDragging();
          } catch (p) {
            A.error("[PIN窗口] 拖拽窗口失败", p);
          }
        }
      }
    }, $i = (c) => {
      const g = c.target;
      !g.closest(".context-menu") && !g.closest(".ocr-engine-btn-group") && !g.closest(".translate-btn-group") && !g.closest(".ocr-floating-menu") && Kt();
    }, ha = (c) => {
      if (c.button !== 0)
        return;
      const g = c.currentTarget, p = Bi(
        g,
        c.clientX,
        c.clientY
      );
      if (window.getSelection()?.removeAllRanges(), !p) {
        Nn();
        return;
      }
      c.preventDefault(), g.setPointerCapture(c.pointerId), U = c.pointerId, j.value = !0, X.value = {
        anchor: p,
        focus: p
      };
    }, Wi = (c) => {
      if (!j.value || c.pointerId !== U)
        return;
      const g = c.currentTarget, p = Bi(
        g,
        c.clientX,
        c.clientY
      );
      !p || !X.value || (c.preventDefault(), X.value = {
        anchor: X.value.anchor,
        focus: p
      });
    }, ua = (c) => {
      if (c.pointerId !== U)
        return;
      Wi(c);
      const g = c.currentTarget;
      g.hasPointerCapture(c.pointerId) && g.releasePointerCapture(c.pointerId), j.value = !1, U = null;
    }, da = (c) => {
      c.pointerId === U && (j.value = !1, U = null);
    }, Nn = () => {
      X.value = null, j.value = !1, U = null;
    }, ga = () => {
      const c = ht.value.length - 1;
      c < 0 || (window.getSelection()?.removeAllRanges(), X.value = {
        anchor: { blockIndex: 0, offset: 0 },
        focus: {
          blockIndex: c,
          offset: ht.value[c].text.length
        }
      });
    }, Bi = (c, g, p) => {
      const V = c.querySelectorAll(
        ".ocr-overlay-block[data-selection-index]"
      );
      for (const W of V) {
        const q = W.getBoundingClientRect();
        if (g < q.left || g > q.right || p < q.top || p > q.bottom)
          continue;
        const vt = Number(W.dataset.selectionIndex), xt = ht.value[vt];
        if (!xt)
          return null;
        const Bt = Dn(xt), Zt = Si(
          (g - q.left) / Math.max(q.width, 1),
          0,
          1
        ) * Bt.renderedWidth;
        return {
          blockIndex: vt,
          offset: Wd(Bt.boundaries, Zt)
        };
      }
      return null;
    }, Ni = (c) => {
      if (c.altKey && c.code === "Space") {
        c.preventDefault(), c.stopPropagation();
        return;
      }
      if (c.key === "Escape")
        _.value ? Kt() : Bn();
      else if (c.ctrlKey || c.metaKey) {
        const p = !!c.target?.closest(
          'input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]'
        );
        c.key.toLowerCase() === "c" && r.value === "ocr" && It.value && !p ? (c.preventDefault(), nn()) : c.key.toLowerCase() === "a" && r.value === "ocr" && ht.value.length > 0 && !p ? (c.preventDefault(), ga()) : c.key === "0" ? (c.preventDefault(), Ii()) : c.key === "=" || c.key === "+" ? (c.preventDefault(), Di(1.05)) : c.key === "-" && (c.preventDefault(), Di(0.95));
      }
    }, fa = async () => {
      if (s.value)
        try {
          const c = await S(
            "get_pin_window_data",
            { label: s.value.label }
          );
          c && Ci(c) && await Mi();
        } catch (c) {
          A.error("[PIN窗口] 主动获取窗口数据失败", c);
        }
    };
    return Oe(
      i,
      (c) => {
        if (jt?.disconnect(), jt = null, !c) {
          z.value = { width: 0, height: 0 };
          return;
        }
        In(), jt = new ResizeObserver(In), jt.observe(c);
      },
      { flush: "post" }
    ), Qe(async () => {
      if (e.value) {
        try {
          const [c, g] = await Promise.all([
            S("get_translation_engine"),
            S("get_ocr_language")
          ]);
          (c === "google" || c === "bing" || c === "offline") && (nt.value = c), Q.value = ft(g);
        } catch (c) {
          A.error("[PIN窗口] 读取默认 OCR/翻译设置失败", c);
        }
        try {
          s.value = tn.getCurrent();
          try {
            Rt = await s.value.listen(
              "pin-window-data",
              (c) => {
                Ci(c.payload) && Mi();
              }
            ), await fa();
          } catch (c) {
            A.error("[PIN窗口] 设置事件监听失败", c);
          }
        } catch (c) {
          if (A.error("[PIN窗口] 初始化错误", c), s.value)
            try {
              await s.value.show();
            } catch (g) {
              A.error("[PIN窗口] 显示窗口失败", g);
            }
        }
        document.addEventListener("click", $i), document.addEventListener("keydown", Ni, !0), document.addEventListener("contextmenu", Oi, !0), window.addEventListener("resize", H), window.addEventListener("scroll", H, !0), window.addEventListener("blur", Kt), document.body && (document.body.oncontextmenu = (c) => (c.preventDefault(), !1));
      }
    }), zs(() => {
      a.value && URL.revokeObjectURL(a.value), Rt && Rt(), document.removeEventListener("click", $i), document.removeEventListener("keydown", Ni, !0), document.removeEventListener("contextmenu", Oi, !0), window.removeEventListener("resize", H), window.removeEventListener("scroll", H, !0), window.removeEventListener("blur", Kt), jt?.disconnect(), jt = null, document.body && (document.body.oncontextmenu = null), ee && clearTimeout(ee);
    }), (c, g) => (T(), D(
      "div",
      {
        class: rt(["pin-container", { "ocr-mode": r.value === "ocr" }]),
        ref_key: "containerRef",
        ref: e,
        onContextmenu: kt(sn, ["prevent"]),
        onWheelCapture: ra
      },
      [
        F(" 图片容器 "),
        a.value && r.value === "pin" ? (T(), D(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: gt(b.value),
            onWheelCapture: Pi,
            onContextmenu: kt(sn, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Ei
          },
          [
            x("img", {
              src: a.value,
              alt: c.$t("screenshot.pin"),
              style: gt(N.value),
              onLoad: Li,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Xd)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : F("v-if", !0),
        r.value === "ocr" ? (T(), D(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: kt(sn, ["prevent"])
          },
          [
            x("header", Gd, [
              x(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Ei
                },
                [
                  x("div", Kd, [
                    x("div", qd, [
                      w(C(ei), {
                        theme: "outline",
                        size: "18"
                      }),
                      x(
                        "span",
                        Jd,
                        B(c.$t("pin.ocrResult")),
                        1
                        /* TEXT */
                      )
                    ]),
                    x("div", Qd, [
                      x(
                        "span",
                        tg,
                        B(v.value),
                        1
                        /* TEXT */
                      ),
                      g[1] || (g[1] = x(
                        "span",
                        {
                          class: "ocr-meta-dot",
                          "data-tauri-drag-region": ""
                        },
                        "·",
                        -1
                        /* HOISTED */
                      )),
                      x(
                        "span",
                        eg,
                        B(dt.value),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  x("div", ng, [
                    x("div", {
                      class: rt(["ocr-engine-status", `is-${M.value}`]),
                      title: _t.value
                    }, [
                      y.value ? (T(), St(C(ss), {
                        key: 0,
                        class: "ocr-loading-icon",
                        size: "14",
                        theme: "outline"
                      })) : (T(), St(C(Vn), {
                        key: 1,
                        size: "14",
                        theme: "outline"
                      })),
                      x(
                        "span",
                        null,
                        B(tt.value),
                        1
                        /* TEXT */
                      )
                    ], 10, ig),
                    x("div", sg, [
                      x("button", {
                        class: "ocr-window-btn",
                        title: ut.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow"),
                        onClick: kt(Ai, ["stop"])
                      }, [
                        (T(), St(me(ut.value ? C(ti) : C(os)), {
                          size: "18",
                          theme: "outline"
                        }))
                      ], 8, og),
                      g[2] || (g[2] = x(
                        "span",
                        { class: "ocr-window-divider" },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      x("button", {
                        class: "ocr-window-btn",
                        title: c.$t("pin.minimize"),
                        onClick: kt(oa, ["stop"])
                      }, [
                        w(C(Ks), {
                          size: "18",
                          theme: "outline"
                        })
                      ], 8, ag),
                      x("button", {
                        class: "ocr-window-btn",
                        title: c.$t("pin.maximize"),
                        onClick: kt(aa, ["stop"])
                      }, [
                        w(C(Fl), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 5
                        })
                      ], 8, rg),
                      x("button", {
                        class: "ocr-window-btn",
                        title: c.$t("pin.close"),
                        onClick: kt(Bn, ["stop"])
                      }, [
                        w(C(Qn), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 6
                        })
                      ], 8, lg)
                    ])
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            x(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: g[0] || (g[0] = kt(() => {
                }, ["stop"]))
              },
              [
                x("div", cg, [
                  x("section", hg, [
                    x("header", ug, [
                      x("div", null, [
                        x(
                          "strong",
                          null,
                          B(c.$t("pin.sourceImage")),
                          1
                          /* TEXT */
                        ),
                        x(
                          "span",
                          null,
                          B(We.value),
                          1
                          /* TEXT */
                        )
                      ]),
                      ht.value.length > 0 ? (T(), D(
                        "span",
                        dg,
                        B(c.$t("pin.imageTextSelectable")),
                        1
                        /* TEXT */
                      )) : F("v-if", !0)
                    ]),
                    x("div", gg, [
                      x("div", fg, [
                        x("img", {
                          ref_key: "ocrPreviewImageRef",
                          ref: i,
                          src: a.value || o.value,
                          alt: c.$t("pin.ocrSourceAlt"),
                          onLoad: Li
                        }, null, 40, mg),
                        Pn.value.length > 0 ? (T(), D("div", pg, [
                          (T(!0), D(
                            $t,
                            null,
                            Ut(Pn.value, (p) => (T(), D(
                              "span",
                              {
                                key: p.id,
                                class: "ocr-selection-highlight",
                                style: gt(Io(p))
                              },
                              null,
                              4
                              /* STYLE */
                            ))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : F("v-if", !0),
                        ht.value.length > 0 ? (T(), D(
                          "div",
                          {
                            key: 1,
                            class: "ocr-text-overlay",
                            onPointerdown: ha,
                            onPointermove: Wi,
                            onPointerup: ua,
                            onPointercancel: da
                          },
                          [
                            (T(!0), D(
                              $t,
                              null,
                              Ut(ht.value, (p, V) => (T(), D("span", {
                                key: p.id,
                                class: "ocr-overlay-block",
                                "data-selection-index": V,
                                style: gt(Do(p)),
                                textContent: B(p.text.trim())
                              }, null, 12, yg))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ],
                          32
                          /* NEED_HYDRATION */
                        )) : F("v-if", !0)
                      ])
                    ]),
                    It.value ? (T(), D("div", wg, [
                      x("div", null, [
                        x(
                          "span",
                          null,
                          B(c.$t("pin.selectedText")),
                          1
                          /* TEXT */
                        ),
                        x(
                          "strong",
                          null,
                          B(c.$t("pin.selectedCharacters", {
                            count: It.value.length
                          })),
                          1
                          /* TEXT */
                        )
                      ]),
                      x("button", {
                        type: "button",
                        onClick: kt(Zo, ["stop"])
                      }, [
                        w(C(Fe), {
                          size: "15",
                          theme: "outline"
                        }),
                        Rs(
                          " " + B(c.$t("pin.copySelection")),
                          1
                          /* TEXT */
                        )
                      ])
                    ])) : F("v-if", !0)
                  ]),
                  x("section", vg, [
                    x("header", xg, [
                      x("div", null, [
                        x(
                          "strong",
                          null,
                          B(c.$t("pin.aiRecognizedText")),
                          1
                          /* TEXT */
                        ),
                        l.value.trim() ? (T(), D(
                          "span",
                          kg,
                          B(c.$t("pin.resultStats", {
                            sections: h.value.length,
                            characters: l.value.length
                          })),
                          1
                          /* TEXT */
                        )) : (T(), D(
                          "span",
                          bg,
                          B(mt.value),
                          1
                          /* TEXT */
                        ))
                      ]),
                      w(ne, {
                        class: "ocr-inline-copy",
                        type: "text",
                        title: c.$t("pin.copyText"),
                        disabled: !l.value.trim(),
                        onClick: kt(nn, ["stop"])
                      }, {
                        default: Et(() => [
                          w(C(Fe), {
                            size: "16",
                            theme: "outline"
                          }),
                          x(
                            "span",
                            null,
                            B(c.$t("pin.copyAll")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["title", "disabled"])
                    ]),
                    y.value && !l.value.trim() ? (T(), D("div", Sg, [
                      x("div", Mg, [
                        w(C(Vn), {
                          size: "22",
                          theme: "outline"
                        })
                      ]),
                      x(
                        "strong",
                        null,
                        B(c.$t("pin.aiReadingImage")),
                        1
                        /* TEXT */
                      ),
                      x(
                        "span",
                        null,
                        B(c.$t("pin.aiReadingHint")),
                        1
                        /* TEXT */
                      )
                    ])) : k.value && !l.value.trim() ? (T(), D("div", Cg, [
                      x(
                        "strong",
                        null,
                        B(k.value),
                        1
                        /* TEXT */
                      ),
                      x(
                        "span",
                        null,
                        B(c.$t("pin.aiOcrRetryHint")),
                        1
                        /* TEXT */
                      )
                    ])) : l.value.trim() ? (T(), D("div", Tg, [
                      d.value.length > 0 ? (T(), D("div", zg, [
                        x(
                          "span",
                          Rg,
                          B(c.$t("pin.keywords")),
                          1
                          /* TEXT */
                        ),
                        (T(!0), D(
                          $t,
                          null,
                          Ut(d.value, (p) => (T(), D(
                            "span",
                            {
                              key: p,
                              class: "ocr-keyword"
                            },
                            B(p),
                            1
                            /* TEXT */
                          ))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])) : F("v-if", !0),
                      Z.value ? (T(), D("section", Lg, [
                        x("div", Pg, [
                          x(
                            "span",
                            Ag,
                            B(c.$t("pin.selectedText")),
                            1
                            /* TEXT */
                          ),
                          x(
                            "div",
                            Dg,
                            B(Z.value.sourceText),
                            1
                            /* TEXT */
                          )
                        ]),
                        x("div", Ig, [
                          x(
                            "span",
                            Og,
                            B(O.value),
                            1
                            /* TEXT */
                          ),
                          x("div", {
                            class: "ocr-selection-translation-editor",
                            contenteditable: "plaintext-only",
                            spellcheck: "false",
                            textContent: B(Z.value.translatedText),
                            onBlur: Jo
                          }, null, 40, Eg)
                        ])
                      ])) : F("v-if", !0),
                      (T(!0), D(
                        $t,
                        null,
                        Ut(h.value, (p, V) => (T(), D(
                          "article",
                          {
                            key: p.id,
                            class: rt(["ocr-record-item", [`is-${p.kind}`, { selected: p.selected }]])
                          },
                          [
                            x("header", $g, [
                              x("button", {
                                type: "button",
                                class: rt(["ocr-record-select", { selected: p.selected }]),
                                "aria-pressed": p.selected,
                                title: c.$t("pin.selectSection"),
                                onClick: kt((W) => qo(p.id), ["stop"])
                              }, [
                                p.selected ? (T(), St(C(fn), {
                                  key: 0,
                                  size: "11",
                                  theme: "outline"
                                })) : (T(), D(
                                  "span",
                                  Bg,
                                  B(V + 1),
                                  1
                                  /* TEXT */
                                ))
                              ], 10, Wg),
                              x(
                                "span",
                                Ng,
                                B(Lo(p.kind)),
                                1
                                /* TEXT */
                              ),
                              p.confidence > 0 ? (T(), D(
                                "span",
                                Hg,
                                B(Math.round(p.confidence)) + "% ",
                                1
                                /* TEXT */
                              )) : F("v-if", !0)
                            ]),
                            x("div", Fg, [
                              (T(!0), D(
                                $t,
                                null,
                                Ut(Ro(p.text), (W, q) => (T(), D(
                                  $t,
                                  {
                                    key: `${p.id}-${q}`
                                  },
                                  [
                                    W.highlighted ? (T(), D(
                                      "mark",
                                      jg,
                                      B(W.text),
                                      1
                                      /* TEXT */
                                    )) : (T(), D(
                                      "span",
                                      Vg,
                                      B(W.text),
                                      1
                                      /* TEXT */
                                    ))
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ]),
                            p.translatedText ? (T(), D("div", Ug, [
                              x(
                                "span",
                                Yg,
                                B(O.value),
                                1
                                /* TEXT */
                              ),
                              x("div", {
                                class: "ocr-record-text translated",
                                textContent: B(p.translatedText)
                              }, null, 8, Zg)
                            ])) : F("v-if", !0)
                          ],
                          2
                          /* CLASS */
                        ))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])) : (T(), D(
                      "div",
                      _g,
                      B(c.$t("pin.noTextRecognized")),
                      1
                      /* TEXT */
                    ))
                  ])
                ])
              ],
              32
              /* NEED_HYDRATION */
            ),
            x("footer", Xg, [
              w(ne, {
                class: "ocr-action-btn primary",
                type: "text",
                title: c.$t("pin.copyText"),
                disabled: !l.value.trim(),
                onClick: kt(nn, ["stop"])
              }, {
                default: Et(() => [
                  w(C(Fe), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  x(
                    "span",
                    null,
                    B(xi.value > 0 ? `${c.$t("pin.copyText")} (${xi.value})` : c.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              x(
                "div",
                {
                  ref_key: "translateMenuAnchorRef",
                  ref: it,
                  class: "translate-btn-group relative"
                },
                [
                  w(ne, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: c.$t("pin.translate"),
                    disabled: !l.value.trim() || J.value,
                    onClick: kt(na, ["stop"])
                  }, {
                    default: Et(() => [
                      J.value ? (T(), St(C(ss), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })) : (T(), St(C(qs), {
                        key: 0,
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })),
                      x(
                        "span",
                        null,
                        B(c.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  w(ne, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !l.value.trim() || J.value,
                    onClick: kt(Qo, ["stop"])
                  }, {
                    default: Et(() => [
                      w(C(is), {
                        size: "17",
                        theme: "outline",
                        strokeWidth: 2.8
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  F(" 翻译引擎菜单 "),
                  K.value ? (T(), D(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: gt(st.value)
                    },
                    [
                      (T(!0), D(
                        $t,
                        null,
                        Ut(pt.value, (p) => (T(), D("div", {
                          key: p.value,
                          class: rt(["menu-item", { active: nt.value === p.value }]),
                          onClick: (V) => ta(p.value)
                        }, [
                          x(
                            "span",
                            Kg,
                            B(p.label),
                            1
                            /* TEXT */
                          ),
                          nt.value === p.value ? (T(), St(me(C(fn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : F("v-if", !0)
                        ], 10, Gg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : F("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              x(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: at,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  w(ne, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: c.$t("pin.ocrLanguage"),
                    disabled: y.value,
                    onClick: kt(Ri, ["stop"])
                  }, {
                    default: Et(() => [
                      w(C(ei), {
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      }),
                      x(
                        "span",
                        null,
                        B(Ct.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  w(ne, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: y.value,
                    onClick: kt(Ri, ["stop"])
                  }, {
                    default: Et(() => [
                      w(C(is), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  ot.value ? (T(), D(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: gt(G.value)
                    },
                    [
                      (T(!0), D(
                        $t,
                        null,
                        Ut(wt.value, (p) => (T(), D("div", {
                          key: p.value,
                          class: rt(["menu-item", { active: Q.value === p.value }]),
                          onClick: (V) => ea(p.value)
                        }, [
                          x(
                            "span",
                            Jg,
                            B(p.label),
                            1
                            /* TEXT */
                          ),
                          Q.value === p.value ? (T(), St(me(C(fn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : F("v-if", !0)
                        ], 10, qg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : F("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              x("div", Qg, [
                w(ne, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: c.$t("pin.recognizeAgain"),
                  disabled: y.value || !o.value,
                  onClick: kt(On, ["stop"])
                }, {
                  default: Et(() => [
                    w(C(Vn), {
                      size: "21",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    x(
                      "span",
                      null,
                      B(c.$t("pin.aiRecognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              w(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.saveAsText"),
                disabled: !l.value.trim(),
                onClick: kt(Xo, ["stop"])
              }, {
                default: Et(() => [
                  w(C(rs), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  x(
                    "span",
                    null,
                    B(c.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              g[3] || (g[3] = x(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              w(ne, {
                class: "ocr-action-btn more",
                type: "text",
                title: c.$t("pin.more"),
                onClick: kt(sa, ["stop"])
              }, {
                default: Et(() => [
                  w(C(Ol), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.8
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : F("v-if", !0),
        At.value ? (T(), D(
          "div",
          tf,
          B(Math.round(yt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : F("v-if", !0),
        F(" 右键菜单 "),
        _.value ? (T(), D(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: gt(Wo.value)
          },
          [
            x("div", {
              class: "menu-item",
              onClick: Ai
            }, [
              (T(), St(me(ut.value ? C(os) : C(ti)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              x(
                "span",
                null,
                B(ut.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Ii
            }, [
              w(C(Bl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                B(c.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: la
            }, [
              w(C(Fe), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                B(c.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: ca
            }, [
              w(C(rs), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                B(c.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            r.value === "ocr" && l.value.trim() ? (T(), D("div", {
              key: 0,
              class: "menu-item",
              onClick: nn
            }, [
              w(C(Fe), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                B(c.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : F("v-if", !0),
            g[4] || (g[4] = x(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            x("div", {
              class: "menu-item danger",
              onClick: Bn
            }, [
              w(C(Qn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                B(c.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : F("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), nf = /* @__PURE__ */ Tn(ef, [["__scopeId", "data-v-0a6296c6"]]), sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nf
}, Symbol.toStringTag, { value: "Module" }));
async function of(n) {
  return n.toDataURL("image/png");
}
function af(n) {
  return Array.isArray(n) ? n.map((t) => {
    if (!t || typeof t != "object")
      return null;
    const e = t, i = typeof e.text == "string" ? e.text : "";
    return i.trim() ? {
      text: i,
      x: Number(e.x || 0),
      y: Number(e.y || 0),
      width: Number(e.width || 0),
      height: Number(e.height || 0),
      fontSize: Number(e.fontSize || 0),
      lineHeight: Number(e.lineHeight || 0),
      angle: Number(e.angle || 0),
      confidence: Number(e.confidence || 0)
    } : null;
  }).filter((t) => !!t) : [];
}
async function rf(n) {
  const t = Date.now(), e = await of(n);
  Lt.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const i = await S("recognize_text_from_image", {
      imageData: e,
      engine: "rapidocr",
      language: "auto"
    }), s = af(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || Fs(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return Lt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw A.error("[OCR] RapidOCR recognizeFromCanvas failed", i), Lt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function lf() {
  return Promise.resolve();
}
async function cf() {
  return Promise.resolve();
}
const hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: rf,
  terminateOcr: cf,
  warmupOcr: lf
}, Symbol.toStringTag, { value: "Module" }));
export {
  mf as activate
};
