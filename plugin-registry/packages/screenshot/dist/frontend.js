var qo = Object.defineProperty;
var Jo = (n, t, e) => t in n ? qo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var z = (n, t, e) => Jo(n, typeof t != "symbol" ? t + "" : t, e);
import { inject as ye, createVNode as m, defineComponent as Ct, ref as O, computed as I, watch as Ge, nextTick as ee, createElementBlock as $, openBlock as P, createCommentVNode as H, createElementVNode as x, Fragment as jt, renderList as Jt, normalizeClass as at, createBlock as Mt, resolveDynamicComponent as pe, unref as M, toDisplayString as F, normalizeStyle as ct, onMounted as Ke, onUnmounted as Qn, withDirectives as Ve, withKeys as Oi, vModelText as Qo, getCurrentInstance as Re, readonly as ta, getCurrentScope as ea, onScopeDispose as na, isRef as ia, warn as sa, provide as oa, mergeProps as aa, renderSlot as se, Transition as ti, withCtx as zt, createTextVNode as ra, vShow as pn, shallowReactive as la, withModifiers as xt, isVNode as Ue, render as yn } from "vue";
import { useI18n as ws } from "vue-i18n";
const Xg = (n) => {
  n.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => Ic)
  }), n.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => Fg)
  });
};
function ca(n, t, e, i) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? i : e === "a" ? i.call(n) : i ? i.value : t.get(n);
}
function ha(n, t, e, i, s) {
  if (typeof t == "function" ? n !== t || !0 : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(n, e), e;
}
var hn;
const Ft = "__TAURI_TO_IPC_KEY__";
function ua(n, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(n, t);
}
async function S(n, t = {}, e) {
  return window.__TAURI_INTERNALS__.invoke(n, t, e);
}
function da(n, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(n, t);
}
class ga {
  get rid() {
    return ca(this, hn, "f");
  }
  constructor(t) {
    hn.set(this, void 0), ha(this, hn, t);
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
class He {
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
    return new je(this.width * t, this.height * t);
  }
  [Ft]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ft]();
  }
}
class je {
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
    return new He(this.width / t, this.height / t);
  }
  [Ft]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ft]();
  }
}
class Me {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof He ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof je ? this.size : this.size.toPhysical(t);
  }
  [Ft]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Ft]();
  }
}
class vs {
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
    return new re(this.x * t, this.y * t);
  }
  [Ft]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ft]();
  }
}
class re {
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
    return new vs(this.x / t, this.y / t);
  }
  [Ft]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ft]();
  }
}
class en {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof vs ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof re ? this.position : this.position.toPhysical(t);
  }
  [Ft]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Ft]();
  }
}
var Bt;
(function(n) {
  n.WINDOW_RESIZED = "tauri://resize", n.WINDOW_MOVED = "tauri://move", n.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", n.WINDOW_DESTROYED = "tauri://destroyed", n.WINDOW_FOCUS = "tauri://focus", n.WINDOW_BLUR = "tauri://blur", n.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", n.WINDOW_THEME_CHANGED = "tauri://theme-changed", n.WINDOW_CREATED = "tauri://window-created", n.WEBVIEW_CREATED = "tauri://webview-created", n.DRAG_ENTER = "tauri://drag-enter", n.DRAG_OVER = "tauri://drag-over", n.DRAG_DROP = "tauri://drag-drop", n.DRAG_LEAVE = "tauri://drag-leave";
})(Bt || (Bt = {}));
async function xs(n, t) {
  await S("plugin:event|unlisten", {
    event: n,
    eventId: t
  });
}
async function wn(n, t, e) {
  var i;
  const s = typeof e?.target == "string" ? { kind: "AnyLabel", label: e.target } : (i = e?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return S("plugin:event|listen", {
    event: n,
    target: s,
    handler: ua(t)
  }).then((o) => async () => xs(n, o));
}
async function fa(n, t, e) {
  return wn(n, (i) => {
    xs(n, i.id), t(i);
  }, e);
}
async function ma(n, t) {
  await S("plugin:event|emit", {
    event: n,
    payload: t
  });
}
async function pa(n, t, e) {
  await S("plugin:event|emit_to", {
    target: typeof n == "string" ? { kind: "AnyLabel", label: n } : n,
    event: t,
    payload: e
  });
}
let ya = class un extends ga {
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
      rgba: vn(t),
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
      bytes: vn(t)
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
function vn(n) {
  return n == null ? null : typeof n == "string" ? n : n instanceof ya ? n.rid : n;
}
var Wn;
(function(n) {
  n[n.Critical = 1] = "Critical", n[n.Informational = 2] = "Informational";
})(Wn || (Wn = {}));
class wa {
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
var Ei;
(function(n) {
  n.None = "none", n.Normal = "normal", n.Indeterminate = "indeterminate", n.Paused = "paused", n.Error = "error";
})(Ei || (Ei = {}));
function va() {
  return new qe(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function In() {
  return S("plugin:window|get_all_windows").then((n) => n.map((t) => new qe(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const On = ["tauri://created", "tauri://error"];
class qe {
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
    return (e = (await In()).find((i) => i.label === t)) !== null && e !== void 0 ? e : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return va();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return In();
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
    for (const t of await In())
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
    } : wn(t, e, {
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
    } : fa(t, e, {
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
    if (On.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: e
        });
      return;
    }
    return ma(t, e);
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
    if (On.includes(e)) {
      for (const s of this.listeners[e] || [])
        s({
          event: e,
          id: -1,
          payload: i
        });
      return;
    }
    return pa(t, e, i);
  }
  /** @ignore */
  _handleTauriEvent(t, e) {
    return On.includes(t) ? (t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e], !0) : !1;
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
    }).then((t) => new re(t));
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
    }).then((t) => new re(t));
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
    }).then((t) => new je(t));
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
    }).then((t) => new je(t));
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
    return t && (t === Wn.Critical ? e = { type: "Critical" } : e = { type: "Informational" }), S("plugin:window|request_user_attention", {
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
      value: t instanceof Me ? t : new Me(t)
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
      value: t instanceof Me ? t : t ? new Me(t) : null
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
      value: t instanceof Me ? t : t ? new Me(t) : null
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
      value: t instanceof en ? t : new en(t)
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
      value: vn(t)
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
      value: t instanceof en ? t : new en(t)
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
      value: t ? vn(t) : void 0
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
    return this.listen(Bt.WINDOW_RESIZED, (e) => {
      e.payload = new je(e.payload), t(e);
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
    return this.listen(Bt.WINDOW_MOVED, (e) => {
      e.payload = new re(e.payload), t(e);
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
    return this.listen(Bt.WINDOW_CLOSE_REQUESTED, async (e) => {
      const i = new wa(e);
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
    const e = await this.listen(Bt.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new re(a.payload.position)
        }
      });
    }), i = await this.listen(Bt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new re(a.payload.position)
        }
      });
    }), s = await this.listen(Bt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new re(a.payload.position)
        }
      });
    }), o = await this.listen(Bt.DRAG_LEAVE, (a) => {
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
    const e = await this.listen(Bt.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), i = await this.listen(Bt.WINDOW_BLUR, (s) => {
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
    return this.listen(Bt.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Bt.WINDOW_THEME_CHANGED, t);
  }
}
var $i;
(function(n) {
  n.Disabled = "disabled", n.Throttle = "throttle", n.Suspend = "suspend";
})($i || ($i = {}));
var Wi;
(function(n) {
  n.AppearanceBased = "appearanceBased", n.Light = "light", n.Dark = "dark", n.MediumLight = "mediumLight", n.UltraDark = "ultraDark", n.Titlebar = "titlebar", n.Selection = "selection", n.Menu = "menu", n.Popover = "popover", n.Sidebar = "sidebar", n.HeaderView = "headerView", n.Sheet = "sheet", n.WindowBackground = "windowBackground", n.HudWindow = "hudWindow", n.FullScreenUI = "fullScreenUI", n.Tooltip = "tooltip", n.ContentBackground = "contentBackground", n.UnderWindowBackground = "underWindowBackground", n.UnderPageBackground = "underPageBackground", n.Mica = "mica", n.Blur = "blur", n.Acrylic = "acrylic", n.Tabbed = "tabbed", n.TabbedDark = "tabbedDark", n.TabbedLight = "tabbedLight";
})(Wi || (Wi = {}));
var Bi;
(function(n) {
  n.FollowsWindowActiveState = "followsWindowActiveState", n.Active = "active", n.Inactive = "inactive";
})(Bi || (Bi = {}));
var R = /* @__PURE__ */ ((n) => (n.None = "none", n.Drawing = "drawing", n.Moving = "moving", n.ResizingNW = "resizing-nw", n.ResizingNE = "resizing-ne", n.ResizingSW = "resizing-sw", n.ResizingSE = "resizing-se", n.ResizingN = "resizing-n", n.ResizingS = "resizing-s", n.ResizingW = "resizing-w", n.ResizingE = "resizing-e", n.DrawingRect = "drawing-rect", n.DrawingEllipse = "drawing-ellipse", n.DrawingLine = "drawing-line", n.DrawingArrow = "drawing-arrow", n.DrawingPen = "drawing-pen", n.EditingAnnotation = "editing-annotation", n.MovingAnnotation = "moving-annotation", n.ResizingAnnotationNW = "resizing-annotation-nw", n.ResizingAnnotationSE = "resizing-annotation-se", n.DrawingText = "drawing-text", n.DrawingMarker = "drawing-marker", n.DrawingMosaic = "drawing-mosaic", n.ColorPicking = "color-picking", n.Pinning = "pinning", n))(R || {}), f = /* @__PURE__ */ ((n) => (n.Select = "select", n.Rectangle = "rectangle", n.Ellipse = "ellipse", n.Line = "line", n.Arrow = "arrow", n.Pen = "pen", n.Mosaic = "mosaic", n.Text = "text", n.Marker = "marker", n.ColorPicker = "color-picker", n.Ocr = "ocr", n.Pin = "pin", n.Translate = "translate", n))(f || {});
function Bn(n, t, e) {
  return !Number.isFinite(n) || n <= 0 ? 0 : Math.min(n, Math.max(0, t) / 2, Math.max(0, e) / 2);
}
function xa(n, t, e, i) {
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
function bt(n, t) {
  const e = t.x - n.x, i = t.y - n.y;
  return Math.sqrt(e * e + i * i);
}
function Ni(n, t) {
  return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
}
function ks(n) {
  return {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
}
function ka(n, t) {
  return {
    x: Math.max(t.x, Math.min(n.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(n.y, t.y + t.height))
  };
}
function Kt(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && !isNaN(n.x) && !isNaN(n.y) && isFinite(n.x) && isFinite(n.y);
}
function Ce(n) {
  return n != null && typeof n.x == "number" && typeof n.y == "number" && typeof n.width == "number" && typeof n.height == "number" && !isNaN(n.x) && !isNaN(n.y) && !isNaN(n.width) && !isNaN(n.height) && isFinite(n.x) && isFinite(n.y) && isFinite(n.width) && isFinite(n.height) && n.width > 0 && n.height > 0;
}
class ba {
  constructor(t, e) {
    z(this, "canvas");
    z(this, "ctx");
    z(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = e;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t, e = 0) {
    if (!Ce(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const i = this.canvas.width / (window.devicePixelRatio || 1), s = this.canvas.height / (window.devicePixelRatio || 1), o = Math.round(t.x), a = Math.round(t.y), r = Math.round(t.width), l = Math.round(t.height), c = Bn(e, r, l);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, i, s), this.ctx.roundRect(o, a, r, l, c), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, e = !0, i = 0) {
    const { x: s, y: o, width: a, height: r } = t;
    this.ctx.save();
    const l = Math.round(s) + 0.5, c = Math.round(o) + 0.5, u = Math.max(0, Math.round(a) - 1), d = Math.max(0, Math.round(r) - 1), y = Bn(i, u, d);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.beginPath(), this.ctx.roundRect(
      l + 1,
      c + 1,
      u,
      d,
      y
    ), this.ctx.stroke(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.beginPath(), this.ctx.roundRect(l, c, u, d, y), this.ctx.stroke(), e && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: e, y: i, width: s, height: o } = t, a = ks(t);
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
      const c = Math.round(l.x) - l.width / 2, u = Math.round(l.y) - l.height / 2, d = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(c + 1, u + 1, l.width, l.height, d), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(c, u, l.width, l.height, d), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
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
    const { mousePosition: i, colorInfo: s, showFormat: o, previewImage: a, zoomFactor: r, isCopied: l } = t, c = 156, u = 188, d = 18;
    let y = i.x + d, v = i.y + d;
    y + c > e.x + e.width && (y = i.x - c - d), v + u > e.y + e.height && (v = i.y - u - d), y < e.x && (y = e.x + d), v < e.y && (v = e.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(y, v, c, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const b = 108, g = y + (c - b) / 2, w = v + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(g, w, b, b), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(g, w, b, b);
    const L = a ? a.width : r, D = b / L;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      g,
      w,
      b,
      b
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let Y = 1; Y < L; Y++) {
      const K = g + Y * D;
      this.ctx.moveTo(K, w), this.ctx.lineTo(K, w + b);
      const q = w + Y * D;
      this.ctx.moveTo(g, q), this.ctx.lineTo(g + b, q);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let Y = 1; Y < L; Y++) {
      const K = g + Y * D + 0.5;
      this.ctx.moveTo(K, w), this.ctx.lineTo(K, w + b);
      const q = w + Y * D + 0.5;
      this.ctx.moveTo(g, q), this.ctx.lineTo(g + b, q);
    }
    this.ctx.stroke();
    const T = Math.floor(L / 2), W = g + T * D, U = w + T * D;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(W, U, D, D), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      W - 1,
      U - 1,
      D + 2,
      D + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      W,
      U,
      D,
      D
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let X = w + b + 22;
    if (s) {
      this.ctx.fillStyle = s.hex, this.ctx.fillRect(y + 16, X - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(y + 16, X - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const Y = o === "hex" ? s.hex : `${s.rgb.r}, ${s.rgb.g}, ${s.rgb.b}`;
      this.ctx.fillText(Y, y + 44, X), X += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, y + 16, X), X += 17, this.ctx.font = "12px Arial";
    const V = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(V, y + 16, X), this.ctx.restore();
  }
}
class Sa {
  // 物理尺寸
  constructor(t) {
    z(this, "scale");
    z(this, "canvasRect");
    z(this, "canvasSize");
    // 逻辑尺寸
    z(this, "physicalSize");
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
    return Kt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return Kt(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, e) {
    return !Kt(t) || !Ce(e) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - e.x,
      y: t.y - e.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, e) {
    return !Kt(t) || !Ce(e) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + e.x,
      y: t.y + e.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Ce(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale,
      width: t.width * this.scale,
      height: t.height * this.scale
    } : (console.warn("Invalid rect in rectLogicalToPhysical:", t), { x: 0, y: 0, width: 0, height: 0 });
  }
  // 限制点在画布范围内
  clampToCanvas(t) {
    if (!Kt(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const e = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return ka(t, e);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Ce(t))
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
    return bt(t, e);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, e, i = 0) {
    if (!Kt(t) || !Ce(e))
      return !1;
    if (i === 0)
      return Ni(t, e);
    const s = {
      x: e.x - i,
      y: e.y - i,
      width: e.width + i * 2,
      height: e.height + i * 2
    };
    return Ni(t, s);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, e, i, s = 8) {
    if (!Kt(t) || !Kt(e) || !Kt(i))
      return !1;
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return bt(t, e) <= s;
    const d = c / u;
    let y;
    return d < 0 ? y = e : d > 1 ? y = i : y = {
      x: e.x + d * r,
      y: e.y + d * l
    }, bt(t, y) <= s;
  }
}
class Ma {
  constructor(t, e) {
    z(this, "coordinateSystem");
    z(this, "canvas");
    z(this, "isDrawing", !1);
    z(this, "currentOperation", R.None);
    z(this, "startPoint", { x: 0, y: 0 });
    z(this, "lastMousePos", { x: 0, y: 0 });
    z(this, "preventDefault", (t) => {
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
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(e) : R.None : R.Drawing;
    if (o) {
      if (o.getData().type === f.Mosaic)
        return R.None;
      const a = this.getAnnotationControlPointOperation(t, o);
      return a !== R.None ? a : R.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, s.length > 0) : R.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [f.Rectangle]: R.DrawingRect,
      [f.Ellipse]: R.DrawingEllipse,
      [f.Line]: R.DrawingLine,
      [f.Arrow]: R.DrawingArrow,
      [f.Pen]: R.DrawingPen,
      [f.Text]: R.DrawingText,
      [f.Marker]: R.DrawingMarker,
      [f.Mosaic]: R.DrawingMosaic,
      [f.ColorPicker]: R.ColorPicking,
      [f.Ocr]: R.None,
      [f.Pin]: R.Pinning,
      [f.Translate]: R.None,
      [f.Select]: R.None
    }[t] || R.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, e, i) {
    const { x: s, y: o, width: a, height: r } = e, l = 12;
    if (i)
      return R.None;
    const c = ks(e);
    return this.isInHandle(t, { x: s, y: o }, l) ? R.ResizingNW : this.isInHandle(t, { x: s + a, y: o }, l) ? R.ResizingNE : this.isInHandle(t, { x: s, y: o + r }, l) ? R.ResizingSW : this.isInHandle(t, { x: s + a, y: o + r }, l) ? R.ResizingSE : this.isInHandle(t, { x: c.x, y: o }, l) ? R.ResizingN : this.isInHandle(t, { x: c.x, y: o + r }, l) ? R.ResizingS : this.isInHandle(t, { x: s, y: c.y }, l) ? R.ResizingW : this.isInHandle(t, { x: s + a, y: c.y }, l) ? R.ResizingE : this.coordinateSystem.isPointInRect(t, e) ? R.Moving : R.Drawing;
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
    if (!Kt(t))
      return R.None;
    const i = e.getData();
    if (i.type === f.Mosaic || i.type === f.Text || i.type === f.Marker)
      return R.None;
    if ([
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const s = i.points[0], o = i.points[i.points.length - 1], a = 8, r = 6, l = bt(t, s), c = bt(t, o);
      if (l <= a + r)
        return R.ResizingAnnotationNW;
      if (c <= a + r)
        return R.ResizingAnnotationSE;
    }
    return R.None;
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
    this.isDrawing = !1, this.currentOperation = R.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class he {
  constructor(t) {
    z(this, "data");
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
class Ca extends he {
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
    }, l = (a.x - o.x) * i, c = (a.y - o.y) * i;
    e.save(), this.applyOpacity(e), e.strokeStyle = this.data.style.color, e.lineWidth = this.data.style.lineWidth * i, e.lineCap = "round", e.lineJoin = "round", e.setLineDash([]), e.strokeRect(r.x, r.y, l, c), e.restore();
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
      if (bt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class _a extends he {
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
class Ta extends he {
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
      return bt(t, e) <= s;
    const l = Math.max(0, Math.min(1, ((t.x - e.x) * o + (t.y - e.y) * a) / r)), c = {
      x: e.x + l * o,
      y: e.y + l * a
    };
    return bt(t, c) <= s;
  }
}
class za extends he {
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
    const l = Math.atan2(o.y - s.y, o.x - s.x), c = 15 * e, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l - u),
      r.y - c * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l + u),
      r.y - c * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, s, e);
  }
  isPointNearLine(t, e, i, s) {
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return bt(t, e) <= s;
    const d = c / u;
    let y;
    return d < 0 ? y = e : d > 1 ? y = i : y = {
      x: e.x + d * r,
      y: e.y + d * l
    }, bt(t, y) <= s;
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
      if (bt(t, s) <= e)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, e) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = e);
  }
}
class Ra extends he {
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
      const e = this.data.points[this.data.points.length - 1], i = bt(t, e);
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
      const l = this.data.points[r], c = l.x * e - i.x, u = l.y * e - i.y;
      t.lineTo(c, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, e = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? bt(t, this.data.points[0]) <= e : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const s = this.data.points[i], o = this.data.points[i + 1];
      if (this.isPointNearLine(t, s, o, e))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, e, i, s) {
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    if (u === 0)
      return bt(t, e) <= s;
    const d = c / u;
    let y;
    return d < 0 ? y = e : d > 1 ? y = i : y = {
      x: e.x + d * r,
      y: e.y + d * l
    }, bt(t, y) <= s;
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
const ne = "sans-serif", _e = (n) => ({
  x: n.x + 4,
  y: n.y - 8
});
class La extends he {
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
    t.save(), this.applyOpacity(t), t.font = `${o}px ${ne}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = _e(a), l = r.x * e - i.x, c = r.y * e - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, e = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], s = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${s}px ${ne}`;
    const l = a.measureText(this.data.text).width, { x: c, y: u } = _e(i);
    return t.x >= c - e && t.x <= c + l + e && t.y >= u - e && t.y <= u + s + e;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], e = this.data.fontSize || 16, s = document.createElement("canvas").getContext("2d");
    if (!s) return null;
    s.font = `${e}px ${ne}`;
    const a = s.measureText(this.data.text).width, { x: r, y: l } = _e(t);
    return {
      x: r,
      y: l,
      width: a,
      height: e
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = _e(o), l = r.x * i - s.x, c = r.y * i - s.y;
    e.save(), e.font = `${a}px ${ne}`;
    const d = e.measureText(this.data.text).width;
    e.setLineDash([2, 2]), e.strokeStyle = "#3b82f6", e.lineWidth = 1, e.strokeRect(l, c, d, a), e.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: e, scale: i, offset: s } = t, o = this.data.points[0], a = (this.data.fontSize || 16) * i, r = _e(o), l = r.x * i - s.x, c = r.y * i - s.y;
    e.save(), e.font = `${a}px ${ne}`;
    const d = e.measureText(this.data.text).width;
    e.strokeStyle = "#3b82f6", e.lineWidth = 2, e.setLineDash([4, 4]), e.strokeRect(l, c, d, a), e.restore();
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
const qt = class qt extends he {
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
      const e = this.data.points[this.data.points.length - 1], i = bt(t, e);
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
    qt.helperCanvas || (qt.helperCanvas = document.createElement("canvas"), qt.helperCtx = qt.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const o = qt.helperCanvas, a = qt.helperCtx, r = e || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const y = u, v = Math.floor(d.x - y), b = Math.floor(d.y - y), g = Math.ceil(d.width + y * 2), w = Math.ceil(d.height + y * 2);
    if (g <= 0 || w <= 0) return;
    const L = Math.floor(v * r - i.x), D = Math.floor(b * r - i.y), T = Math.ceil(g * r), W = Math.ceil(w * r), U = t.canvas.width, X = t.canvas.height, V = Math.max(0, L), Y = Math.max(0, D), K = Math.min(T, U - V), q = Math.min(W, X - Y);
    if (K <= 0 || q <= 0) return;
    let J;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), J = t.getImageData(V, Y, K, q), t.restore();
    } catch {
      return;
    }
    const tt = J.data, ot = V % c, vt = Y % c;
    for (let it = -vt; it < q; it += c)
      for (let j = -ot; j < K; j += c) {
        const nt = Math.max(0, j), pt = Math.max(0, it), rt = Math.min(K, j + c), dt = Math.min(q, it + c);
        if (nt >= rt || pt >= dt) continue;
        let kt = 0, E = 0, Rt = 0, N = 0;
        for (let _t = pt; _t < dt; _t++)
          for (let gt = nt; gt < rt; gt++) {
            const Lt = (_t * K + gt) * 4;
            kt += tt[Lt], E += tt[Lt + 1], Rt += tt[Lt + 2], N++;
          }
        if (N > 0) {
          kt = Math.round(kt / N / 8) * 8, E = Math.round(E / N / 8) * 8, Rt = Math.round(Rt / N / 8) * 8;
          for (let gt = pt; gt < dt; gt++)
            for (let Lt = nt; Lt < rt; Lt++) {
              const Wt = (gt * K + Lt) * 4;
              tt[Wt] = kt, tt[Wt + 1] = E, tt[Wt + 2] = Rt;
            }
        }
      }
    o.width = K, o.height = q, a.putImageData(J, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, V, Y), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), s && (t.beginPath(), t.rect(
      s.x * r - i.x,
      s.y * r - i.y,
      s.width * r,
      s.height * r
    ), t.clip()), t.drawImage(o, V, Y), t.restore();
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
        const d = this.data.points[u], y = this.data.points[u + 1], v = (a(d) + a(y)) / 2, b = (r(d) + r(y)) / 2;
        t.quadraticCurveTo(a(d), r(d), v, b);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, e = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return bt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + e;
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
    const o = t.x - e.x, a = t.y - e.y, r = i.x - e.x, l = i.y - e.y, c = o * r + a * l, u = r * r + l * l;
    let d = -1;
    u !== 0 && (d = c / u);
    let y, v;
    d < 0 ? (y = e.x, v = e.y) : d > 1 ? (y = i.x, v = i.y) : (y = e.x + d * r, v = e.y + d * l);
    const b = t.x - y, g = t.y - v;
    return b * b + g * g <= s * s;
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
z(qt, "helperCanvas", null), z(qt, "helperCtx", null);
let Nn = qt;
const le = 16, dn = (n = le) => Math.max(12, Math.round(n * 0.75)), Hn = (n, t = le) => {
  const e = dn(t);
  return {
    x: n.x + e + 12,
    y: n.y - t / 2
  };
};
class Pa extends he {
  constructor(t, e, i, s, o = le) {
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
    const o = (this.data.fontSize || le) * e, a = dn(this.data.fontSize || le) * e, r = s.x * e - i.x, l = s.y * e - i.y, c = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, o, e), c) {
      const u = Hn(
        s,
        this.data.fontSize || le
      ), d = u.x * e - i.x, y = u.y * e - i.y, v = y + o + 3 * e;
      t.font = `${o}px ${ne}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(c, d, y);
      const b = t.measureText(c).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * e * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * e, v), t.lineTo(d + b + 3 * e, v), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, e, i, s, o, a) {
    t.beginPath(), t.arc(e, i, s, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${o}px ${ne}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(String(this.data.markerNumber || 1), e, i + a * 0.5);
  }
  hitTest(t, e = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const s = dn(this.data.fontSize || le);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= s + e) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - e && t.x <= a.x + a.width + e && t.y >= a.y - e && t.y <= a.y + a.height + e;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const e = this.data.fontSize || le, i = dn(e), s = this.data.text?.trim() || "";
    let o = t.x + i;
    if (s) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${e}px ${ne}`, o = Hn(t, e).x + r.measureText(s).width + 4);
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
class nn {
  static createAnnotation(t, e, i, s = {}) {
    switch (t) {
      case f.Rectangle:
        return new Ca(e, i);
      case f.Ellipse:
        return new _a(e, i);
      case f.Line:
        return new Ta(e, i);
      case f.Arrow:
        return new za(e, i);
      case f.Pen:
        return new Ra(e, i);
      case f.Text:
        return new La(
          e,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case f.Marker:
        return new Pa(
          e,
          s.markerNumber || 1,
          s.text || "",
          i,
          s.fontSize || 16
        );
      case f.Mosaic:
        return new Nn(
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
const me = class me {
  constructor() {
    z(this, "pool", []);
    z(this, "maxPoolSize", 5);
    // 最大池大小
    z(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return me.instance || (me.instance = new me()), me.instance;
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
z(me, "instance");
let jn = me;
async function Aa(n, t) {
  return await S("get_local_plugin_resource_path", {
    pluginId: n,
    relativePath: t
  });
}
const Da = "snippets-code:developer-mode", bs = "snippets-code:frontend-diagnostics", Ia = 240, $e = "[REDACTED]", gn = (n) => n.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${$e}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${$e}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  $e
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${$e}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${$e}`
), ei = (n) => {
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
}, Oa = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Ea = () => {
  if (typeof localStorage > "u") return [];
  try {
    const n = JSON.parse(localStorage.getItem(bs) || "[]");
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}, ni = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Da) === "true";
  } catch {
    return !1;
  }
}, $a = (n, t, e) => {
  if (!ni() || typeof localStorage > "u") return;
  const i = Ea();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: n,
    windowLabel: Oa(),
    message: gn(t),
    data: ei(e)
  });
  try {
    localStorage.setItem(
      bs,
      JSON.stringify(i.slice(-Ia))
    );
  } catch {
  }
}, Wa = () => ni(), Ba = (n) => n === "error" || ni(), sn = (n, t, e) => {
  $a(n, t, e), Ba(n) && S("frontend_log", {
    level: n,
    message: t,
    data: e === void 0 ? null : ei(e)
  }).catch(() => {
  });
}, A = {
  info: (n, t, ...e) => {
    sn("info", n, t);
  },
  error: (n, t) => {
    sn("error", n, t);
  },
  warn: (n, t) => {
    sn("warn", n, t);
  },
  debug: (n, t) => {
    Wa() && sn("debug", n, t);
  }
}, wt = {
  log: (n, t) => {
    S("append_ocr_diagnostic_log", {
      message: n,
      data: t === void 0 ? null : ei(t)
    }).catch(() => {
    });
  }
}, Na = "resources/transformers/transformers.min.js", Ha = ["translation-offline-runtime", "translation"], ja = "https://huggingface.co/", Fa = "{model}/resolve/{revision}/", Va = "/__snippets_code_disabled_transformers_local_models__/", Ua = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let We = null;
const Ya = (n) => {
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
}, Ss = (n) => {
  const t = n.search(/[?#]/), e = t >= 0 ? n.slice(0, t) : n, i = Ya(e);
  return i.index >= 0 ? e.slice(0, i.index + i.length) : e;
}, Ms = (n) => {
  const t = Ss(n);
  return Object.fromEntries(
    Ua.map((e) => [e, `${t}${e}`])
  );
}, Xa = (n, t) => {
  var e, i;
  n.useBrowserCache = !0, n.allowRemoteModels = !0, n.remoteHost = ja, n.remotePathTemplate = Fa, n.allowLocalModels = !1, n.localModelPath = Va, t && (n.backends ?? (n.backends = {}), (e = n.backends).onnx ?? (e.onnx = {}), (i = n.backends.onnx).wasm ?? (i.wasm = {}), n.backends.onnx.wasm.wasmPaths = Ms(t), n.backends.onnx.wasm.numThreads = 1);
};
async function Za() {
  return We || (We = (async () => {
    for (const n of Ha) {
      const t = await Aa(n, Na);
      if (!t) continue;
      const e = da(t), i = await import(
        /* @vite-ignore */
        e
      );
      return Xa(i.env, e), A.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
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
    throw We = null, n;
  }), We);
}
let ie = null, Fe = !1, Te = null, we = null, Fn = null;
const Ga = "Xenova/opus-mt-en-zh", Ka = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], qa = 3e5;
function Ja(n) {
  Fn = n;
}
function Qa() {
  return Ka;
}
function tr(n, t, e) {
  return Promise.race([
    n,
    new Promise(
      (i, s) => setTimeout(() => s(new Error(e)), t)
    )
  ]);
}
async function Cs() {
  return ie || Te || (Fe = !0, A.info("[离线翻译] 正在加载翻译模型..."), Te = (async () => {
    try {
      const { pipeline: n } = await Za();
      let t = "";
      const e = n("translation", Ga, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (s) => {
          s.status === "done" && s.file && s.file !== t && (t = s.file, A.info(`[离线翻译] 已加载: ${s.file}`)), Fn && Fn({
            status: s.status,
            progress: s.progress,
            file: s.file
          });
        }
      });
      return ie = await tr(
        e,
        qa,
        "模型加载超时，请检查网络连接后重试"
      ), A.info("[离线翻译] 翻译模型加载完成"), Fe = !1, ie;
    } catch (n) {
      throw Fe = !1, Te = null, A.error("[离线翻译] 模型加载失败:", n), n;
    }
  })(), Te);
}
async function _s(n) {
  if (!n?.trim()) return n;
  we = new AbortController();
  const t = we.signal;
  try {
    const e = await Cs();
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
function er() {
  we && (we.abort(), we = null, A.info("[离线翻译] 已发送取消信号"));
}
function nr() {
  return we !== null;
}
async function Ts() {
  await Cs();
}
function ir() {
  return ie !== null;
}
function sr() {
  return Fe;
}
async function ii() {
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
async function or() {
  return (await ii()).isCached;
}
function ar() {
  return ie !== null;
}
async function rr() {
  if (ie)
    try {
      await ie.dispose?.();
    } catch {
    }
  ie = null, Te = null, Fe = !1, A.info("[离线翻译] 翻译器已释放");
}
async function lr() {
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
const cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: ar,
  cancelOfflineTranslation: er,
  clearModelCache: lr,
  disposeOfflineTranslator: rr,
  getModelCacheInfo: ii,
  getModelFiles: Qa,
  getRuntimeBaseUrl: Ss,
  getRuntimeWasmPaths: Ms,
  isModelCached: or,
  isOfflineTranslatorInitializing: sr,
  isOfflineTranslatorReady: ir,
  isTranslationInProgress: nr,
  setProgressCallback: Ja,
  translateOffline: _s,
  warmupOfflineTranslator: Ts
}, Symbol.toStringTag, { value: "Module" }));
class fe {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const e = Promise.resolve().then(() => Wd).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
    const e = Promise.resolve(cr).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
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
z(fe, "loadedModules", /* @__PURE__ */ new Map()), z(fe, "loadingPromises", /* @__PURE__ */ new Map());
async function hr() {
  return await S("local_ai_get_config");
}
async function ur(n) {
  return await S("local_ai_scan_models", {
    config: n ?? null
  });
}
async function zs() {
  return await S("local_ai_get_status");
}
async function dr(n) {
  return await S("local_ai_start_service", {
    config: null
  });
}
async function Rs(n) {
  return await S("local_ai_chat", { request: n });
}
function si(n) {
  if (!n) return "unknown";
  const t = n.match(/[\u4e00-\u9fa5]/g), e = t ? t.length : 0, i = n.match(/[\u3040-\u30ff]/g), s = i ? i.length : 0, o = n.match(/[\uac00-\ud7af]/g), a = o ? o.length : 0, r = n.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = e + s + a + l;
  return u === 0 ? "unknown" : s >= 3 && s > l && s / u >= 0.2 ? "ja" : a >= 3 && a > e && a > l && a / u >= 0.2 ? "ko" : e > l ? "zh" : l > e ? "en" : "unknown";
}
function ze(n) {
  return n === "zh" || n === "en";
}
function ge(n) {
  return si(n);
}
const gr = /[.!?。！？；;：:][)"'”’】）\]]*$/, Hi = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, on = /[A-Za-z0-9]/, fr = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, ji = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function mr(n, t = {}) {
  const e = tl(n), i = zr(n, e);
  return i.length === 0 ? [] : Cr(i, e) ? Mr(i, e) : (t.mode === "single_para" ? [Ne(i, e)] : yr(i, e)).flatMap((o) => pr(o, e));
}
function pr(n, t) {
  const e = ai(n, t), i = [];
  for (const s of e) {
    const o = i[i.length - 1], a = o ? Ir(o, s, t) : !1;
    if (!o || !a) {
      i.push(Er(s));
      continue;
    }
    o.text = Wr(o.text, s.text), o.blocks = [...o.blocks, ...s.blocks], o.bbox = Os(o.bbox, s.bbox), o.fontSize = Ui(
      o.fontSize || s.fontSize,
      o.blocks.length - s.blocks.length,
      s.fontSize,
      s.blocks.length
    ), o.lineHeight = Ui(
      o.lineHeight || s.lineHeight,
      o.blocks.length - s.blocks.length,
      s.lineHeight,
      s.blocks.length
    ), o.isCodeBlock = !!(o.isCodeBlock || s.isCodeLike || s.hasTableColumns), o.isStructuredBlock = !!(o.isStructuredBlock || s.hasTableColumns);
  }
  return Br(i, t);
}
function yr(n, t) {
  if (n.length <= 1)
    return [n];
  const e = n.map((l) => ({
    bbox: _r(l),
    block: l
  })).filter((l) => Tr(l.bbox)).sort(oi);
  if (e.length <= 1)
    return [Ne(n, t)];
  if (wr(e, t))
    return [Ne(n, t)];
  const { cuts: i, rows: s } = vr(e);
  if (i.length < 2 || s.length <= 1)
    return [Ne(n, t)];
  const o = br(i, s), r = Sr(o).filter((l) => l.units.length > 0).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Ne(n, t)];
}
function wr(n, t) {
  if (n.length < 2)
    return !0;
  const e = [...n].sort(oi);
  let i = 0, s = 0;
  for (let o = 1; o < e.length; o += 1) {
    const a = e[o - 1].bbox, r = e[o].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const c = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), d = c / u >= 0.45, y = Math.abs(a.left - r.left) <= t * 1.5;
    (d || y) && (s += 1);
  }
  return i > 0 && s / i >= 0.72;
}
function vr(n) {
  const t = Math.min(...n.map((l) => l.bbox.left)) - 1, e = Math.max(...n.map((l) => l.bbox.right)) + 1, i = [], s = [];
  let o = [], a = 0;
  for (; a < n.length; ) {
    const c = n[a].bbox.bottom, u = [];
    for (; a < n.length && n[a].bbox.top <= c; )
      u.push(n[a]), a += 1;
    u.sort((g, w) => g.bbox.left - w.bbox.left || g.bbox.right - w.bbox.right);
    const d = xr(u, t, e, i.length), { gaps: y, removedGaps: v } = kr(o, d), b = i.length - 1;
    for (const g of v)
      s.push({
        left: g.left,
        right: g.right,
        startRow: g.startRow,
        endRow: b
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
  return s.sort((l, c) => l.left - c.left || l.right - c.right), { cuts: s, rows: i };
}
function xr(n, t, e, i) {
  const s = [];
  let o = t;
  for (const a of n)
    a.bbox.left > o && s.push({ left: o, right: a.bbox.left, startRow: i }), a.bbox.right > o && (o = a.bbox.right);
  return s.push({ left: o, right: e, startRow: i }), s;
}
function kr(n, t) {
  const e = n.map(() => !1), i = t.map(() => !1), s = [];
  for (let o = 0; o < n.length; o += 1) {
    const a = n[o];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], c = Math.max(a.left, l.left), u = Math.min(a.right, l.right);
      c <= u && (s.push({ left: c, right: u, startRow: a.startRow }), e[o] = !0, i[r] = !0);
    }
  }
  for (let o = 0; o < t.length; o += 1)
    i[o] || s.push(t[o]);
  return {
    gaps: s,
    removedGaps: n.filter((o, a) => !e[a])
  };
}
function br(n, t) {
  const e = t.map(() => []);
  for (const r of n)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      e[l]?.push({ left: r.left, right: r.right });
  for (const r of e)
    r.sort((l, c) => l.left - c.left || l.right - c.right);
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
    const l = r.xRight - 2, c = s.filter((v) => l >= v.xLeft && l <= v.xRight + 1e-4 && v.rowBottom < r.rowTop), u = Math.max(...c.map((v) => v.rowBottom), i.rowBottom), d = c.filter((v) => v.rowBottom === u);
    (d.length > 0 ? d.reduce((v, b) => b.xRight > v.xRight ? b : v) : i).children.push(r), s.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = e[r], c = [];
    for (const v of o) {
      let b = !1, g = !1, w = !1;
      for (const L of l)
        if (an(L.right, v.xLeft) && (b = !0), an(L.left, v.xRight) && (g = !0), v.xLeft < L.left && L.left < v.xRight || v.xLeft < L.right && L.right < v.xRight) {
          w = !0;
          break;
        }
      !b || !g || w ? a(v) : (v.rowBottom = r, c.push(v));
    }
    o = c;
    let u = 0, d = 0;
    const y = t[r];
    for (; u < y.length && l.length >= 2; ) {
      const v = y[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const b = l[d].right, g = l[d + 1].left;
      if (v.bbox.left + 1e-4 > g && d < l.length - 2) {
        d += 1;
        continue;
      }
      let w = o.find((L) => an(L.xLeft, b) && an(L.xRight, g));
      w || (w = {
        xLeft: b,
        xRight: g,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, o.push(w)), w.units.push(v), u += 1;
    }
  }
  for (const r of o)
    a(r);
  for (const r of s)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(oi);
  return i;
}
function Sr(n) {
  const t = [n], e = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (e.push(i), t.push(...[...i.children].reverse()));
  }
  return e;
}
function Ne(n, t) {
  return [...n].sort((e, i) => {
    const s = e.y - i.y;
    return Math.abs(s) > t * 0.45 ? s : e.x - i.x;
  });
}
function Mr(n, t) {
  const e = ce($t(n.map((a) => a.width)), t * 0.5), i = Math.max(e * 1.4, t * 0.28), s = [...n].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), o = [];
  for (const a of s) {
    const r = a.x + a.width / 2, l = o[o.length - 1], c = l ? $t(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : o.push([a]);
  }
  return o.map((a) => {
    const r = [...a].sort((y, v) => y.y - v.y), l = r.reduce((y, v, b) => {
      const g = v.text.trim();
      return b === 0 ? g : ri(y, g);
    }, ""), c = Is(r), u = $t(r.map((y) => ce(y.fontSize, t))), d = $t(r.map((y) => Cn(y)));
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: d,
      angle: $t(r.map((y) => y.angle || 0))
    };
  });
}
function Cr(n, t) {
  return n.length < 2 ? !1 : n.filter((i) => {
    const s = Math.max(i.width, 1);
    return i.height > s * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(n.length * 0.56));
}
function _r(n) {
  return {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function Tr(n) {
  return Number.isFinite(n.left) && Number.isFinite(n.top) && Number.isFinite(n.right) && Number.isFinite(n.bottom) && n.right >= n.left && n.bottom >= n.top;
}
function oi(n, t) {
  return n.bbox.top - t.bbox.top || n.bbox.left - t.bbox.left;
}
function an(n, t) {
  return Math.abs(n - t) <= 1e-4;
}
function zr(n, t) {
  return n.map((e) => {
    const i = e.text.trim();
    if (!i || Rr(e, t) || Pr(i))
      return null;
    const s = Ar(Lr(i, e, t));
    return s === e.text ? e : { ...e, text: s };
  }).filter((e) => !!e);
}
function Rr(n, t) {
  const e = n.text.trim();
  if (!/^[cC]$/.test(e))
    return !1;
  const i = t * 1.25;
  return n.width <= i && n.height <= i;
}
function Lr(n, t, e) {
  return /^xC$/i.test(n) && t.width <= e * 2.4 ? "X" : n;
}
function Pr(n) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(n.trim());
}
function Ar(n) {
  return n.replace(/^:\s+(?=[A-Z])/, "- ");
}
function ai(n, t) {
  const e = [...n].sort((o, a) => {
    const r = o.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : o.x - a.x;
  }), i = [], s = t * 0.45;
  for (const o of e) {
    const a = i[i.length - 1];
    a && Math.abs(o.y - a.y) < s && !Gr(a.blocks, o, t) ? (a.blocks.push(o), a.y = $t(a.blocks.map((r) => r.y))) : i.push({ y: o.y, blocks: [o] });
  }
  return i.map((o) => Dr(o.blocks, t));
}
function Dr(n, t) {
  const e = [...n].sort((r, l) => r.x - l.x), i = Is(e), s = e.reduce((r, l, c) => {
    const u = l.text.trim();
    return c === 0 ? u : $r(r, u);
  }, ""), o = $t(e.map((r) => ce(r.fontSize, t))), a = $t(e.map((r) => Cn(r)));
  return {
    text: s,
    blocks: e,
    bbox: i,
    fontSize: o,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: Kr(e, t),
    isCodeLike: As(s)
  };
}
function Ir(n, t, e) {
  const i = ai(n.blocks, e), s = i[i.length - 1];
  if (!s) return !1;
  const o = Ye(s.text);
  if (Mn(s.text) || Ye(t.text) || o && !Or(s, t, e) || t.isCodeLike || s.isCodeLike || t.hasTableColumns || s.hasTableColumns) return !1;
  const a = t.bbox.y - (s.bbox.y + s.bbox.height);
  if (a < -e * 0.25 || a >= e * 1.8 || Vr(i, a, e) || Ur(s, t, a, e) || Yr(s, t, a, e) || Xr(s, t, a, e) || Zr(s, t, a, e))
    return !1;
  if (o)
    return !0;
  const r = Math.max(e * 1.2, s.lineHeight * 0.9);
  return Math.abs(t.bbox.x - s.bbox.x) <= r;
}
function Or(n, t, e) {
  if (Ps(t.text))
    return !1;
  const i = t.bbox.x - n.bbox.x, s = Math.max(e * 0.8, n.lineHeight * 0.65);
  return i >= s;
}
function Er(n) {
  return {
    text: n.text,
    blocks: [...n.blocks],
    bbox: { ...n.bbox },
    isCodeBlock: n.isCodeLike || n.hasTableColumns,
    isStructuredBlock: n.hasTableColumns,
    fontSize: n.fontSize,
    lineHeight: n.lineHeight,
    angle: $t(n.blocks.map((t) => t.angle || 0))
  };
}
function $r(n, t) {
  return ri(n, t);
}
function Wr(n, t) {
  return ri(n, t);
}
function ri(n, t) {
  const e = n.trimEnd(), i = t.trimStart();
  if (!e) return i;
  if (!i) return e;
  const s = e.charAt(e.length - 1), o = i.charAt(0), a = e.charAt(e.length - 2);
  return s === "-" && on.test(a) && on.test(o) ? `${e.slice(0, -1)}${i}` : el(o) || nl(s) ? `${e}${i}` : Hi.test(s) || Hi.test(o) || Yi(s) || Yi(o) ? `${e}${i}` : on.test(s) && on.test(o) ? `${e} ${i}` : `${e} ${i}`.replace(/\s+/g, " ");
}
function Mn(n) {
  return gr.test(n.trim());
}
function Ye(n) {
  return fr.test(n);
}
function Br(n, t) {
  return n.flatMap((e) => Nr(e, t));
}
function Nr(n, t) {
  const e = Ls(n.text);
  if (e.length <= 1)
    return [n];
  const i = ai(n.blocks, t), s = i.length === e.length;
  return e.map((o, a) => {
    const r = s ? i[a] : null, l = r?.bbox || jr(n.bbox, a, e.length), c = r?.blocks || [Fr(n, o, l, a)];
    return {
      ...n,
      text: o,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((u) => As(u.text)),
      isStructuredBlock: n.isStructuredBlock,
      fontSize: $t(c.map((u) => ce(u.fontSize, n.fontSize || t))),
      lineHeight: $t(c.map((u) => Cn(u))),
      angle: $t(c.map((u) => u.angle || 0))
    };
  });
}
function Ls(n) {
  const t = n.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(Ls);
  const e = Hr(n);
  return e.length > 1 ? e.flatMap(Fi) : Fi(n);
}
function Hr(n) {
  const t = n.trim(), e = [];
  ji.lastIndex = 0;
  for (const i of t.matchAll(ji)) {
    const s = i[0], o = i.index ?? 0;
    e.push(o + (s.startsWith(" ") ? 1 : 0));
  }
  return e.length <= 1 ? [t] : e.map((i, s) => {
    const o = e[s + 1] ?? t.length;
    return t.slice(i, o).trim();
  }).filter(Boolean);
}
function Fi(n) {
  const t = n.trim();
  if (!Ye(t))
    return [t];
  const e = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !e || !Ps(e[2]) ? [t] : [e[1].trim(), e[2].trim()];
}
function jr(n, t, e) {
  const i = n.height / Math.max(e, 1);
  return {
    x: n.x,
    y: n.y + i * t,
    width: n.width,
    height: i
  };
}
function Fr(n, t, e, i) {
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
function Ps(n) {
  const t = n.trim();
  return !t || Mn(t) || Ye(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Vr(n, t, e) {
  if (n.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < n.length; a++) {
    const r = n[a - 1], c = n[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const s = i.length > 0 ? $t(i) : 0, o = Math.max(s * 2.2, e * 1.15);
  return t > o;
}
function Ur(n, t, e, i) {
  const s = n.text.trim();
  if (!s || Mn(s) || Ye(s) || n.isCodeLike || s.endsWith("-"))
    return !1;
  const o = s.split(/\s+/).filter(Boolean).length, a = n.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(s) && o <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(s) && s.length <= 12 && a, c = r || l;
  return n.fontSize >= t.fontSize * 1.18 && c ? !0 : e > i * 0.7 && c;
}
function Yr(n, t, e, i) {
  if (e <= 0)
    return !1;
  const s = Math.max(n.fontSize, t.fontSize), o = Math.max(Math.min(n.fontSize, t.fontSize), 1), a = s / o, r = e / Math.max(o, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = n.fontSize >= i * 1.08 && n.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= n.fontSize * 0.78 && e >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Xr(n, t, e, i) {
  if (e < i * 0.45)
    return !1;
  const o = n.text.split(/\s+/).filter(Boolean).length <= 3 && n.bbox.width < t.bbox.width * 0.35, a = Math.abs(n.bbox.x - t.bbox.x) <= i * 0.6;
  return o && a;
}
function Zr(n, t, e, i) {
  return e < i * 0.25 || !(Math.abs(n.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Vi(n.text) && Vi(t.text);
}
function Vi(n) {
  const t = n.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Mn(t);
}
function As(n) {
  const t = n.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Gr(n, t, e) {
  const i = [...n].sort((a, r) => a.x - r.x), s = i[i.length - 1], o = t.x - (s.x + s.width);
  return o > e * 0.9 && Qr(s.text) && Ds(t.text) ? !1 : o > e * 3.2;
}
function Kr(n, t) {
  if (n.length < 2)
    return n.some((s) => qr(s.text));
  const e = [...n].sort((s, o) => s.x - o.x);
  let i = 0;
  for (let s = 1; s < e.length; s++) {
    const o = e[s - 1], a = e[s], r = e[s].x - (o.x + o.width);
    (r > t * 1.8 || r > t * 0.9 && Jr(o.text) && Ds(a.text)) && (i += 1);
  }
  return i >= 1;
}
function qr(n) {
  const t = n.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Jr(n) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(n.trim());
}
function Qr(n) {
  const t = n.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Ds(n) {
  const t = n.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Is(n) {
  const t = n.map((e) => ({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }));
  return t.reduce((e, i) => Os(e, i), t[0]);
}
function Os(n, t) {
  const e = Math.min(n.x, t.x), i = Math.min(n.y, t.y), s = Math.max(n.x + n.width, t.x + t.width), o = Math.max(n.y + n.height, t.y + t.height);
  return {
    x: e,
    y: i,
    width: s - e,
    height: o - i
  };
}
function tl(n) {
  return ce($t(n.map((t) => Cn(t))), 16);
}
function Cn(n) {
  return ce(n.lineHeight, ce(n.height, ce(n.fontSize, 16) * 1.2));
}
function Ui(n, t, e, i) {
  const s = t + i;
  return s <= 0 ? e : (n * t + e * i) / s;
}
function ce(n, t) {
  return Number.isFinite(n) && n > 0 ? n : t;
}
function $t(n) {
  return n.length === 0 ? 0 : n.reduce((t, e) => t + e, 0) / n.length;
}
function el(n) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(n);
}
function nl(n) {
  return /^[(\[{<"'“‘]$/.test(n);
}
function Yi(n) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(n);
}
const Xi = 34;
class il {
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
    const { left: s, top: o, right: a, bottom: r, width: l, height: c } = e, u = new Uint8Array(l * c), d = new Int32Array(l * c), y = new Int32Array(l * c);
    let v = 0, b = 1, g = t.x, w = t.x, L = t.y, D = t.y;
    for (d[0] = t.x, y[0] = t.y, u[(t.y - o) * l + t.x - s] = 1; v < b; ) {
      const X = d[v], V = y[v];
      if (v += 1, g = Math.min(g, X), w = Math.max(w, X), L = Math.min(L, V), D = Math.max(D, V), b = this.enqueueNeighbors(
        X,
        V,
        s,
        o,
        a,
        r,
        l,
        i,
        u,
        d,
        y,
        b
      ), b > l * c * 0.94) return null;
    }
    const T = w - g + 1, W = D - L + 1;
    return b / Math.max(1, T * W) >= 0.24 ? { x: g, y: L, width: T, height: W } : null;
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
  enqueueNeighbors(t, e, i, s, o, a, r, l, c, u, d, y) {
    let v = y;
    const b = [
      { x: t - 1, y: e },
      { x: t + 1, y: e },
      { x: t, y: e - 1 },
      { x: t, y: e + 1 }
    ];
    for (const g of b) {
      if (g.x < i || g.x >= o || g.y < s || g.y >= a)
        continue;
      const w = (g.y - s) * r + g.x - i;
      c[w] || (c[w] = 1, this.isColorNear(this.getColor(g.x, g.y), l) && (u[v] = g.x, d[v] = g.y, v += 1));
    }
    return v;
  }
  getDominantNearbyColor(t, e) {
    const i = /* @__PURE__ */ new Map();
    for (let o = -4; o <= 4; o += 2)
      for (let a = -4; a <= 4; a += 2) {
        const r = Math.round(t.x + a), l = Math.round(t.y + o);
        if (!this.contains(e, { x: r, y: l })) continue;
        const c = this.getColor(r, l), u = `${c.r >> 4},${c.g >> 4},${c.b >> 4}`, d = i.get(u) || { count: 0, r: 0, g: 0, b: 0 };
        d.count += 1, d.r += c.r, d.g += c.g, d.b += c.b, i.set(u, d);
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
    return i * i + s * s + o * o <= Xi * Xi;
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
const sl = 960, ol = 640;
class li {
  constructor(t, e, i, s, o) {
    z(this, "regionDetector");
    z(this, "lastDetection", null);
    this.sampleWidth = e, this.sampleHeight = i, this.logicalWidth = s, this.logicalHeight = o, this.regionDetector = new il(
      t,
      e,
      i
    );
  }
  static fromImage(t, e, i) {
    if (e <= 0 || i <= 0) return null;
    const s = Math.min(
      1,
      sl / e,
      ol / i
    ), o = Math.max(1, Math.round(e * s)), a = Math.max(1, Math.round(i * s)), r = document.createElement("canvas");
    r.width = o, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, o, a);
    const c = l.getImageData(0, 0, o, a);
    return new li(
      c.data,
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
function Zi(n, t) {
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
class al {
  constructor() {
    z(this, "currentRect", null);
    z(this, "isFinalized", !1);
  }
  preview(t) {
    return t ? this.isFinalized && Zi(this.currentRect, t) ? {
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
    const e = !Zi(this.currentRect, t);
    return this.currentRect = this.cloneRect(t), {
      rect: this.cloneRect(this.currentRect),
      changed: e
    };
  }
  cloneRect(t) {
    return t ? { ...t } : null;
  }
}
function rl(n, t, e) {
  return Math.hypot(t.x - n.x, t.y - n.y) >= e;
}
function ll(n, t, e) {
  const i = n.map((s) => {
    const o = Math.max(
      s.x - t.x,
      0,
      t.x - (s.x + s.width)
    ), a = Math.max(
      s.y - t.y,
      0,
      t.y - (s.y + s.height)
    );
    return {
      window: s,
      distance: Math.hypot(o, a),
      containsPointer: o === 0 && a === 0
    };
  }).filter(({ distance: s }) => s <= e);
  return i.length === 0 ? null : (i.sort((s, o) => {
    const a = Number(o.containsPointer) - Number(s.containsPointer);
    if (a !== 0) return a;
    if (s.containsPointer)
      return s.window.display_order - o.window.display_order;
    const r = s.distance - o.distance;
    if (r !== 0) return r;
    const l = s.window.display_order - o.window.display_order;
    return l !== 0 ? l : Number(o.window.is_fullscreen) - Number(s.window.is_fullscreen);
  }), i[0].window);
}
class cl {
  constructor(t, e, i, s) {
    z(this, "canvas");
    z(this, "coordinateSystem");
    z(this, "drawingEngine");
    z(this, "eventHandler");
    // 状态管理
    z(this, "selectionRect", null);
    z(this, "annotations", []);
    z(this, "currentAnnotation", null);
    z(this, "selectedAnnotation", null);
    z(this, "hoveredAnnotation", null);
    // 拖拽状态
    z(this, "draggedAnnotation", null);
    z(this, "dragStartPoint", null);
    z(this, "resizingAnnotation", null);
    z(this, "resizeStartBounds", null);
    z(this, "resizeOperation", null);
    // 编辑状态
    z(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    z(this, "annotationUndoStack", []);
    z(this, "annotationRedoStack", []);
    z(this, "pendingDragSnapshot", null);
    z(this, "pendingResizeSnapshot", null);
    // 工具设置
    z(this, "currentTool", f.Select);
    z(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    z(this, "textSize", 16);
    z(this, "mosaicSize", 8);
    z(this, "selectionCornerRadius", 0);
    z(this, "showGuides", !0);
    // 取色器状态
    z(this, "colorPickerState", {
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
    z(this, "allWindows", []);
    z(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    z(this, "snappedWindow", null);
    z(this, "snappedElement", null);
    z(this, "elementCandidateStabilizer", new al());
    z(this, "showSnapPreview", !1);
    z(this, "captureMonitor", { x: 0, y: 0, scale: 1 });
    z(this, "lastPointerPosition", null);
    z(this, "elementSelectionPointerOrigin", null);
    z(this, "elementSelectionActivated", !1);
    z(this, "elementSelectionMoveThreshold", 12);
    z(this, "smartDetectionSequence", 0);
    z(this, "smartDetectionTimer", null);
    z(this, "accessibilityDetectionTimer", null);
    z(this, "pendingSmartDetection", null);
    // 点击拖拽区分
    z(this, "pendingSnapCandidate", null);
    z(this, "dragStartPosition", null);
    z(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    z(this, "throttleTimer", null);
    z(this, "lastThrottledTimestamp", 0);
    z(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    z(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    z(this, "backgroundImage", null);
    z(this, "visualElementDetector", null);
    // 是否正在加载完整背景图
    z(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    z(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    z(this, "offlineModelActivated", !1);
    // Canvas 池
    z(this, "canvasPool", jn.getInstance());
    // 回调函数
    z(this, "onStateChange");
    z(this, "onTextInputRequest");
    z(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    z(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    z(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    z(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    z(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    z(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    z(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    z(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = e, this.onTextInputRequest = i, this.onColorPicked = s, this.coordinateSystem = new Sa(t), this.drawingEngine = new ba(t, this.coordinateSystem), this.eventHandler = new Ma(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), fe.preloadModules();
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
    if (this.annotations = t.annotations.map((e) => nn.fromData(this.cloneAnnotationData(e))).filter((e) => e !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
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
              const c = window.devicePixelRatio || 1;
              this.visualElementDetector = li.fromImage(
                o,
                this.canvas.width / c,
                this.canvas.height / c
              ), this.elementSelectionActivated && this.lastPointerPosition && this.snappedWindow && this.scheduleUiElementDetection(
                this.lastPointerPosition,
                this.snappedWindow
              ), this.draw(), a();
            }, o.onerror = (c) => {
              clearTimeout(l), r(c);
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
          const [c, u] = await Promise.all([
            S("get_cached_monitor_info"),
            S("get_cached_window_list")
          ]);
          t = {
            x: c.x,
            y: c.y,
            scale: c.scale,
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
      this.lastPointerPosition = o, this.elementSelectionPointerOrigin || (this.elementSelectionPointerOrigin = { ...o }), a ? (this.snappedWindow = a, this.showSnapPreview = !0, this.draw()) : (this.showSnapPreview = !0, this.draw());
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
    return ll(this.allWindows, t, this.snapThreshold);
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
  updateElementSelectionIntent(t) {
    if (!this.elementSelectionActivated) {
      if (!this.elementSelectionPointerOrigin) {
        this.elementSelectionPointerOrigin = { ...t };
        return;
      }
      rl(
        this.elementSelectionPointerOrigin,
        t,
        this.elementSelectionMoveThreshold
      ) && (this.elementSelectionActivated = !0);
    }
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
      }, c = l.x >= e.x - 2 && l.y >= e.y - 2 && l.x + l.width <= e.x + e.width + 2 && l.y + l.height <= e.y + e.height + 2, u = t.x >= l.x && t.x <= l.x + l.width && t.y >= l.y && t.y <= l.y + l.height;
      if (l.width < 8 || l.height < 8 || !c || !u) {
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
    if (s !== R.None)
      switch (this.eventHandler.setCurrentOperation(s), this.eventHandler.startDrawing(e), s) {
        case R.Drawing:
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
        case R.DrawingRect:
        case R.DrawingEllipse:
        case R.DrawingLine:
        case R.DrawingArrow:
        case R.DrawingPen:
        case R.DrawingMosaic:
        case R.DrawingMarker:
          this.startAnnotation(e);
          break;
        case R.DrawingText:
          this.startTextInput(e), this.eventHandler.stopDrawing();
          break;
        case R.ColorPicking:
          this.handleColorPicking(e), this.eventHandler.stopDrawing();
          break;
        case R.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case R.EditingAnnotation:
          this.selectAnnotationAtPoint(e), this.selectedAnnotation && this.selectedAnnotation.getData().type === f.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case R.MovingAnnotation:
          this.startAnnotationDrag(e);
          break;
        case R.ResizingAnnotationNW:
        case R.ResizingAnnotationSE:
          this.startAnnotationResize(e, s);
          break;
        case R.Moving:
        case R.ResizingNW:
        case R.ResizingNE:
        case R.ResizingSW:
        case R.ResizingSE:
        case R.ResizingN:
        case R.ResizingS:
        case R.ResizingW:
        case R.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const e = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = e;
    const i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(e), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && bt(e, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(e) : this.draggedAnnotation ? this.updateAnnotationDrag(e) : this.resizingAnnotation ? this.updateAnnotationResize(e) : this.selectionRect && this.currentTool === f.Select && this.updateSelectionRect(e, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === f.Select && !this.selectionRect) {
        this.updateElementSelectionIntent(e);
        const s = this.detectNearbyWindow(e);
        s !== this.snappedWindow && (this.cancelSmartDetection(), this.snappedWindow = s, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !0, this.draw()), this.showSnapPreview || (this.showSnapPreview = !0, this.draw()), s && this.elementSelectionActivated && this.scheduleUiElementDetection(e, s);
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
      case R.Drawing:
        this.selectionRect.width = t.x - e.startPoint.x, this.selectionRect.height = t.y - e.startPoint.y;
        break;
      case R.Moving:
        this.selectionRect.x += s, this.selectionRect.y += o;
        break;
      case R.ResizingNW:
        this.selectionRect.x += s, this.selectionRect.y += o, this.selectionRect.width -= s, this.selectionRect.height -= o;
        break;
      case R.ResizingNE:
        this.selectionRect.y += o, this.selectionRect.width += s, this.selectionRect.height -= o;
        break;
      case R.ResizingSW:
        this.selectionRect.x += s, this.selectionRect.width -= s, this.selectionRect.height += o;
        break;
      case R.ResizingSE:
        this.selectionRect.width += s, this.selectionRect.height += o;
        break;
      case R.ResizingN:
        this.selectionRect.y += o, this.selectionRect.height -= o;
        break;
      case R.ResizingS:
        this.selectionRect.height += o;
        break;
      case R.ResizingW:
        this.selectionRect.x += s, this.selectionRect.width -= s;
        break;
      case R.ResizingE:
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
      case R.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, e.points[1]]
        });
        break;
      case R.ResizingAnnotationSE:
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
      [R.Moving]: "move",
      [R.ResizingNW]: "nw-resize",
      [R.ResizingNE]: "ne-resize",
      [R.ResizingSW]: "sw-resize",
      [R.ResizingSE]: "se-resize",
      [R.ResizingN]: "n-resize",
      [R.ResizingS]: "s-resize",
      [R.ResizingW]: "w-resize",
      [R.ResizingE]: "e-resize",
      [R.EditingAnnotation]: "pointer",
      [R.MovingAnnotation]: "move",
      [R.ResizingAnnotationNW]: "nw-resize",
      [R.ResizingAnnotationSE]: "se-resize",
      [R.Drawing]: "crosshair"
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
      const g = e + s / 2, w = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let L = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? L = "正在启动 AI 模型服务..." : L = "正在由 AI 识图翻译..."), t.fillText(L, g, w), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const g = e + s / 2, w = i + o / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(e, i, s, o), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, g, w), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: e, y: i, width: s, height: o }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let u, d;
    if (c) {
      const g = Math.max(0, Math.round(l.r * 0.1)), w = Math.max(0, Math.round(l.g * 0.1)), L = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${g}, ${w}, ${L}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const g = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), w = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), L = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${g}, ${w}, ${L}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(e, i, s, o), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const y = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((g) => ({
      text: g.text,
      translatedText: g.translatedText,
      blocks: [g],
      bbox: {
        x: g.x,
        y: g.y,
        width: g.width,
        height: g.height
      },
      isCodeBlock: g.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: g.fontSize,
      lineHeight: g.lineHeight,
      angle: g.angle
    })), v = y.filter((g) => g.isStructuredBlock), b = y.filter((g) => !g.isStructuredBlock);
    b.length > 0 && this.drawFlowedTranslationBlocks(t, b, e, i, a, s, o);
    for (const g of v)
      this.drawStructuredTranslationBlock(t, g, e, i, a, s, o);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, e, i, s, o, a, r) {
    const l = [...e].filter((T) => (T.translatedText || T.text).trim()).sort((T, W) => {
      const U = T.bbox.y - W.bbox.y;
      return Math.abs(U) > 4 ? U : T.bbox.x - W.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - o * 2), u = o, d = (T, W, U) => l.map((X) => {
      const V = (X.translatedText || X.text).trim(), Y = Math.max(12, Math.min(X.fontSize || 16, 48)), K = Math.max(8, Math.round(Y * T)), q = X.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', J = Math.max(
        o,
        Math.min(X.bbox.x + o, a * 0.38)
      ), tt = W ? o : J, ot = Math.max(48, a - tt - u), vt = X.lineHeight || K * 1.35, it = Math.max(
        K * (U ? 1.04 : 1.14),
        Math.min(vt * T, K * (U ? 1.18 : 1.42))
      );
      return t.font = `${K}px ${q}`, {
        text: V,
        fontSize: K,
        fontFamily: q,
        lineHeight: it,
        paragraphGap: U ? Math.max(1, it * 0.16) : Math.max(3, it * 0.35),
        x: i + tt,
        lines: this.wrapTextToLines(t, V, ot)
      };
    }), y = (T) => T.reduce((W, U, X) => {
      const V = X === T.length - 1 ? 0 : U.paragraphGap;
      return W + U.lines.length * U.lineHeight + V;
    }, 0);
    let v = d(1, !1, !1), b = y(v);
    if (b > c) {
      const T = Math.max(0.56, c / b);
      v = d(T, !1, !1), b = y(v);
    }
    if (b > c && (v = d(1, !0, !1), b = y(v)), b > c) {
      const T = Math.max(0.38, c / b * 0.96);
      v = d(T, !0, !0), b = y(v);
    }
    if (b > c) {
      const T = Math.max(0.3, c / b * 0.94);
      v = d(T, !0, !0), b = y(v);
    }
    const g = Math.min(...l.map((T) => T.bbox.y)), w = s + Math.max(o, Math.min(g, r - o)), L = s + r - o;
    let D = w + b > L ? s + o : w;
    for (const T of v) {
      t.font = `${T.fontSize}px ${T.fontFamily}`;
      for (const W of T.lines)
        t.fillText(W, T.x, D), D += T.lineHeight;
      D += T.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, e, i, s, o, a, r) {
    const l = [...e.blocks].sort((d, y) => d.x - y.x), c = Math.max(12, Math.min(e.fontSize || 14, 32)), u = e.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const y = d.translatedText || d.text;
      if (!y.trim()) continue;
      const v = i + d.x + Math.min(4, o), b = s + d.y, g = l.find((T) => T.x > d.x), w = g ? Math.max(d.width, g.x - d.x - 8) : Math.max(d.width, a - d.x - o), L = this.wrapTextToLines(t, y.trim(), w);
      let D = b;
      for (const T of L) {
        if (D + c > s + r) break;
        t.fillText(T, v, D), D += u;
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
    const o = [], a = /\s/.test(s) ? s.split(/(\s+)/).filter((c) => c.length > 0) : Array.from(s);
    let r = "";
    const l = (c) => {
      let u = "";
      for (const d of Array.from(c)) {
        const y = u + d;
        t.measureText(y).width > i && u !== "" ? (o.push(u), u = d) : u = y;
      }
      r = u;
    };
    for (const c of a) {
      const u = /^\s+$/.test(c), d = u ? " " : c, y = r + d;
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
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, y = this.canvas.height / s, v = c / d, b = u / y, g = t.x * v, w = t.y * b, L = t.width * v, D = t.height * b;
    try {
      l.drawImage(
        this.backgroundImage,
        g,
        w,
        L,
        D,
        0,
        0,
        o,
        a
      );
    } catch (j) {
      return A.error("[截图] 采样区域绘制失败", j), this.canvasPool.release(r), i;
    }
    let T;
    try {
      T = l.getImageData(0, 0, o, a);
    } catch (j) {
      return A.error("[截图] 获取像素数据失败", j), this.canvasPool.release(r), i;
    }
    const W = T.data, U = Math.ceil(Math.sqrt(e)), X = o / (U + 1), V = a / (U + 1);
    let Y = 0, K = 0, q = 0, J = 0;
    for (let j = 1; j <= U; j++)
      for (let nt = 1; nt <= U && !(J >= e); nt++) {
        const pt = Math.floor(nt * X), rt = Math.floor(j * V);
        if (pt >= 0 && pt < o && rt >= 0 && rt < a) {
          const dt = (rt * o + pt) * 4;
          dt >= 0 && dt + 2 < W.length && (Y += W[dt], K += W[dt + 1], q += W[dt + 2], J++);
        }
      }
    if (this.canvasPool.release(r), J === 0)
      return i;
    const tt = Math.round(Y / J), ot = Math.round(K / J), vt = Math.round(q / J), it = this.getBrightness(tt, ot, vt);
    return {
      r: tt,
      g: ot,
      b: vt,
      brightness: it
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
      const c = Math.max(0, Math.round(t.r * 0.2)), u = Math.max(0, Math.round(t.g * 0.2)), d = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${c}, ${u}, ${d}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const c = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), u = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), d = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${c}, ${u}, ${d}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
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
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / s, y = this.canvas.height / s, v = c / d, b = u / y, g = t.x * v, w = t.y * b, L = t.width * v, D = t.height * b;
    try {
      l.drawImage(
        this.backgroundImage,
        g,
        w,
        L,
        D,
        0,
        0,
        o,
        a
      );
    } catch (j) {
      return A.error("[截图] isUniformColor: 采样区域绘制失败", j), this.canvasPool.release(r), !1;
    }
    let T;
    try {
      T = l.getImageData(0, 0, o, a);
    } catch (j) {
      return A.error("[截图] isUniformColor: 获取像素数据失败", j), this.canvasPool.release(r), !1;
    }
    const W = T.data, U = Math.ceil(Math.sqrt(i)), X = o / (U + 1), V = a / (U + 1), Y = [];
    for (let j = 1; j <= U; j++)
      for (let nt = 1; nt <= U && !(Y.length >= i); nt++) {
        const pt = Math.floor(nt * X), rt = Math.floor(j * V);
        if (pt >= 0 && pt < o && rt >= 0 && rt < a) {
          const dt = (rt * o + pt) * 4;
          dt >= 0 && dt + 2 < W.length && Y.push({
            r: W[dt],
            g: W[dt + 1],
            b: W[dt + 2]
          });
        }
      }
    if (this.canvasPool.release(r), Y.length < 2)
      return !1;
    const K = Y.reduce((j, nt) => j + nt.r, 0) / Y.length, q = Y.reduce((j, nt) => j + nt.g, 0) / Y.length, J = Y.reduce((j, nt) => j + nt.b, 0) / Y.length, tt = Y.reduce((j, nt) => j + Math.pow(nt.r - K, 2), 0) / Y.length, ot = Y.reduce((j, nt) => j + Math.pow(nt.g - q, 2), 0) / Y.length, vt = Y.reduce((j, nt) => j + Math.pow(nt.b - J, 2), 0) / Y.length;
    return (tt + ot + vt) / 3 < e;
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
    const c = s.font;
    for (; l > 12 && (s.font = `${l}px sans-serif`, !(s.measureText(t).width <= r)); )
      l -= 1;
    return s.font = c, Math.max(l, 12);
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
    this.currentTool = t, this.clearSelection(), this.showGuides = t === f.Select, this.colorPickerState.isActive = t === f.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== f.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== f.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.elementSelectionPointerOrigin = null, this.elementSelectionActivated = !1, this.showSnapPreview = !1, this.pendingSnapCandidate = null, this.cancelSmartDetection(), this.dragStartPosition = null, t !== f.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === f.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (nn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === f.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = nn.createAnnotation(
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
        t = xa(
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
    e.forEach((v) => {
      i = Math.min(i, v.x), s = Math.max(s, v.x), o = Math.min(o, v.y), a = Math.max(a, v.y);
    });
    const r = s - i, l = a - o;
    let c = 0;
    for (let v = 1; v < e.length; v++)
      c += bt(e[v - 1], e[v]);
    const d = bt(e[0], e[e.length - 1]) / c, y = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || y > 5) {
      const v = e[0], b = e[e.length - 1];
      this.currentAnnotation.updateData({ points: [v, b] });
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
    const i = nn.createAnnotation(
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
      const c = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await S("copy_to_clipboard", { image: c }) : await S("save_screenshot_to_file", { image: c });
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
          let kt = 0;
          for (; !this.backgroundImage && kt < 3e3; )
            await new Promise((E) => setTimeout(E, 100)), kt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, u = Math.max(0, o.padding || 0), d = this.canvas.width / c, y = this.canvas.height / c, v = t - u, b = e - u, g = i + u * 2, w = s + u * 2, L = Math.max(1, Math.round(g * c)), D = Math.max(1, Math.round(w * c)), T = Math.max(0, v), W = Math.max(0, b), U = Math.min(d, v + g), X = Math.min(y, b + w), V = Math.max(0, U - T), Y = Math.max(0, X - W), K = Math.round(T * c), q = Math.round(W * c), J = Math.min(
          this.canvas.width - K,
          Math.round(V * c)
        ), tt = Math.min(
          this.canvas.height - q,
          Math.round(Y * c)
        ), ot = Math.round((T - v) * c), vt = Math.round((W - b) * c), it = document.createElement("canvas");
        it.width = L, it.height = D;
        const j = it.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!j)
          throw new Error("无法获取2D绘图上下文");
        j.imageSmoothingEnabled = !1, o.fillColor && (j.fillStyle = o.fillColor, j.fillRect(0, 0, L, D)), J > 0 && tt > 0 && j.drawImage(
          this.backgroundImage,
          K,
          q,
          J,
          tt,
          ot,
          vt,
          J,
          tt
        );
        const pt = it.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: pt,
          adjusted_width: L,
          adjusted_height: D,
          logical_x: v,
          logical_y: b,
          logical_width: g,
          logical_height: w
        });
      } catch (c) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${c.message || c}`));
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
      const c = new Image();
      c.onload = () => {
        try {
          if (l.drawImage(c, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const y = t.logical_width > 0 ? t.adjusted_width / t.logical_width : e, v = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, b = this.drawingEngine.createScreenshotContext(
              l,
              y,
              v
            );
            this.annotations.forEach((g, w) => {
              try {
                g.drawToScreenshot(b);
              } catch (L) {
                A.error(`[截图] 绘制标注 ${w} 失败`, L);
              }
            });
          }
          const u = Bn(
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
      }, c.onerror = (u) => {
        A.error("[截图] 图像加载失败", u), clearTimeout(a), o(new Error("图像加载失败"));
      }, c.src = `data:image/png;base64,${t.image}`;
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
        const { x: e, y: i, width: s, height: o } = this.selectionRect, a = await S("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + e * r), c = Math.round(a.y + i * r), u = Math.round(s * r), d = Math.round(o * r), y = Math.round(a.x + window.innerWidth * r), v = Math.round(a.y + window.innerHeight * r), b = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, y - a.x)) : u, g = t === "ocr" ? Math.min(Math.max(d, 520), Math.max(260, v - a.y)) : d, w = t === "ocr" ? Math.round(l - Math.max(0, b - u) / 2) : l, L = t === "ocr" ? Math.max(a.x, Math.min(w, y - b)) : l, D = t === "ocr" ? Math.max(a.y, Math.min(c, v - g)) : c, T = {}, W = await this.cropFromBackground(e, i, s, o, T);
        if (!W?.image)
          throw new Error("Failed to crop from background image");
        const U = await this.renderWithAnnotations(W, r, "save");
        await S("create_pin_window", {
          mode: t,
          imageData: U,
          x: L,
          y: D,
          width: b,
          height: g
        }), this.onStateChange?.(), setTimeout(() => {
          new qe("screenshot").close();
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
        }), c = new Image();
        c.src = `data:image/png;base64,${l.image}`, await c.decode();
        const u = await createImageBitmap(c);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const y = new OffscreenCanvas(s, s).getContext("2d");
        if (y) {
          y.drawImage(u, 0, 0, s, s);
          const v = y.getImageData(o, o, 1, 1).data, b = { r: v[0], g: v[1], b: v[2] }, g = this.rgbToHex(b.r, b.g, b.b);
          this.colorPickerState.colorInfo = { rgb: b, hex: g, position: t };
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
        const { x: r, y: l, width: c, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, y = c * d, v = u * d, b = this.canvasPool.acquire(y, v), g = b.getContext("2d");
        if (!g)
          throw this.canvasPool.release(b), new Error("无法创建临时canvas");
        const w = r * d, L = l * d, D = performance.now();
        g.drawImage(
          this.backgroundImage,
          w,
          L,
          y,
          v,
          0,
          0,
          y,
          v
        ), e = Math.round(performance.now() - D);
        const T = performance.now(), { recognizeFromCanvas: W } = await fe.loadOCR();
        i = Math.round(performance.now() - T);
        const U = performance.now(), X = await W(b);
        s = Math.round(performance.now() - U), this.canvasPool.release(b);
        const V = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          confidence: X.confidence,
          rawLineCount: X.blocks.length,
          textLength: X.full_text.trim().length
        };
        A.info("[OCR] 识别耗时统计", V), wt.log("[OCR] recognition timing", V);
        const Y = X.blocks, K = performance.now(), q = mr(Y);
        o = Math.round(performance.now() - K);
        const J = q.map((C) => C.text).join(`

`), tt = {
          rawLineCount: Y.length,
          paragraphCount: q.length,
          durationMs: o,
          paragraphs: q.map((C, et) => ({
            index: et,
            text: C.text,
            blockCount: C.blocks.length,
            isCodeBlock: !!C.isCodeBlock,
            isStructuredBlock: !!C.isStructuredBlock,
            bbox: C.bbox,
            sourceBlocks: C.blocks.map((ht) => ({
              text: ht.text,
              x: ht.x,
              y: ht.y,
              width: ht.width,
              height: ht.height
            }))
          }))
        };
        if (A.info("[OCR] 版面重组完成", tt), wt.log("[OCR] layout reflow complete", tt), !J || !J.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const ot = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(ge(J));
        const vt = (C) => {
          const et = C.trim();
          return !!(et.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !et.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let it = "";
        const j = ge(J), nt = {
          detectedLanguage: j,
          textLength: J.trim().length,
          textPreview: J.trim().slice(0, 500)
        };
        A.info("[OCR] 翻译语言检测完成", nt), wt.log("[OCR] translation language detected", nt), ze(j) && (this.translationOverlay.sourceLanguage = j, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(j));
        const pt = ot === "offline" ? fe.loadOfflineTranslator() : null, rt = (C) => C.includes("插件") && C.includes("未启用") ? C.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : C : ot === "offline" ? C.includes("未激活") || C.includes("未下载") || C.includes("运行时未安装") ? C : C.includes("超时") ? "模型加载超时，请重试" : C.includes("离线翻译暂仅支持") ? C : "离线翻译失败: " + C.substring(0, 50) : C.includes("timeout") || C.includes("超时") ? "翻译超时，请检查网络连接" : C.includes("network") || C.includes("网络") || C.includes("请求") || C.includes("令牌") ? "翻译失败，请检查网络连接" : C.trim() ? C.slice(0, 80) : "翻译失败，请检查网络连接", dt = async () => {
          if (!pt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: C,
            canUseOfflineTranslation: et,
            warmupOfflineTranslator: ht,
            getModelCacheInfo: lt
          } = await pt, Tt = et();
          if (this.offlineModelActivated && !Tt)
            if ((await lt()).isCached)
              await ht();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return C;
        }, kt = async (C, et, ht) => {
          if (!C.trim())
            return C;
          if (ot === "offline") {
            if (et !== "en" || ht !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await dt())(C);
          }
          return await S("translate_text", {
            text: C,
            from: et,
            to: ht,
            engine: ot
          });
        }, E = (C) => {
          const et = C.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(et) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(et);
        }, Rt = async (C, et, ht) => {
          const lt = C.trim();
          if (!lt || vt(lt))
            return C;
          const Tt = C.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Tt) {
            const [, ut, ft, Q, St, Pt] = Tt, It = ge(ft), Qt = E(ft) || !ze(It) ? ft : await kt(ft, It, this.getAutoTargetLanguage(It)), oe = ge(St), Gt = ze(oe) && !vt(St) ? await kt(St, oe, this.getAutoTargetLanguage(oe)) : St;
            return `${ut}${Qt}${Q}${Gt}${Pt}`;
          }
          if (E(lt))
            return C;
          const yt = ge(lt);
          if (!ze(yt))
            return C;
          const Vt = this.getAutoTargetLanguage(yt), k = await kt(lt, yt, Vt), B = {
            paragraphIndex: et,
            blockIndex: ht,
            sourceLanguage: yt,
            targetLanguage: Vt,
            sourceText: lt,
            translatedText: k.slice(0, 200)
          };
          return A.info("[OCR] 结构化块翻译完成", B), wt.log("[OCR] structured block translation complete", B), k;
        }, N = async (C, et) => {
          const ht = performance.now(), lt = (k) => ({
            index: et,
            durationMs: Math.round(performance.now() - ht),
            ...k
          }), Tt = ge(C.text), yt = this.getAutoTargetLanguage(Tt), Vt = {
            index: et,
            text: C.text,
            sourceLanguage: Tt,
            targetLanguage: yt,
            engine: ot,
            structured: !!C.isStructuredBlock
          };
          if (A.info("[OCR] 段落翻译方向", Vt), wt.log("[OCR] paragraph translation direction", Vt), !ze(Tt)) {
            C.translatedText = C.text;
            const k = lt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), B = {
              index: et,
              detectedLanguage: Tt,
              durationMs: k.durationMs,
              text: C.text
            };
            return A.warn("[OCR] 跳过不支持的段落语言", B), wt.log("[OCR] skip unsupported paragraph language", B), k;
          }
          try {
            if (C.isStructuredBlock && C.blocks.length > 0) {
              const ut = async (Q, St) => {
                const Pt = await Rt(Q.text, et, St);
                return Q.translatedText = Pt, Pt;
              }, ft = [];
              if (ot === "offline")
                for (let Q = 0; Q < C.blocks.length; Q += 1)
                  ft.push(await ut(C.blocks[Q], Q));
              else
                ft.push(
                  ...await Promise.all(
                    C.blocks.map((Q, St) => ut(Q, St))
                  )
                );
              C.translatedText = ft.join(" ");
            } else if (vt(C.text) || C.isCodeBlock) {
              C.translatedText = C.text;
              const ut = C.isCodeBlock ? "code_block" : "command_like_text", ft = lt({ skipped: !0, cancelled: !1 }), Q = {
                index: et,
                reason: ut,
                durationMs: ft.durationMs,
                text: C.text
              };
              return A.info("[OCR] 跳过代码段翻译", Q), wt.log("[OCR] skip code paragraph translation", Q), ft;
            } else
              C.translatedText = await kt(
                C.text,
                Tt,
                yt
              );
            const k = lt({ skipped: !1, cancelled: !1 }), B = {
              index: et,
              durationMs: k.durationMs,
              sourceLanguage: Tt,
              targetLanguage: yt,
              engine: ot,
              structured: !!C.isStructuredBlock,
              sourceLength: C.text.length,
              translatedLength: (C.translatedText || "").length,
              translatedPreview: (C.translatedText || "").slice(0, 300)
            };
            return A.info("[OCR] 段落翻译完成", B), wt.log("[OCR] paragraph translation complete", B), k;
          } catch (k) {
            const B = k instanceof Error ? k.message : String(k);
            if (B === "翻译已取消")
              return lt({ skipped: !1, cancelled: !0 });
            C.translatedText = C.text;
            const ut = rt(B), ft = lt({
              skipped: !1,
              cancelled: !1,
              errorMessage: ut
            }), Q = {
              index: et,
              durationMs: ft.durationMs,
              sourceLanguage: Tt,
              targetLanguage: yt,
              engine: ot,
              error: B,
              structured: !!C.isStructuredBlock,
              text: C.text
            };
            return A.error("[OCR] 段落翻译失败", Q), wt.log("[OCR] paragraph translation failed", Q), ft;
          }
        }, _t = performance.now();
        let gt = [];
        if (ot === "offline")
          for (let C = 0; C < q.length; C += 1) {
            const et = await N(q[C], C);
            if (gt.push(et), et.cancelled)
              return;
            if (et.errorMessage) {
              it = et.errorMessage;
              break;
            }
          }
        else {
          if (gt = await Promise.all(
            q.map((C, et) => N(C, et))
          ), gt.some((C) => C.cancelled))
            return;
          it = gt.find((C) => C.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - _t);
        const Lt = {
          durationMs: a,
          engine: ot,
          paragraphCount: q.length,
          translatedParagraphCount: gt.filter((C) => !C.skipped && !C.errorMessage).length,
          skippedParagraphCount: gt.filter((C) => C.skipped).length,
          failedParagraphCount: gt.filter((C) => !!C.errorMessage).length
        };
        A.info("[OCR] 翻译耗时统计", Lt), wt.log("[OCR] translation timing", Lt);
        const Wt = q.map((C) => this.toDisplayParagraph(C, d)), Zt = Wt.map((C) => this.toLegacyOverlayBlock(C));
        this.translationOverlay.blocks = Zt, this.translationOverlay.paragraphBlocks = Wt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = it || void 0;
        const Ht = {
          cropDurationMs: e,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: s,
          reflowDurationMs: o,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: Y.length,
          paragraphCount: q.length,
          engine: ot
        };
        A.info("[OCR] 截图翻译总耗时统计", Ht), wt.log("[OCR] pipeline timing", Ht), this.draw(), this.onStateChange?.();
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
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await zs()).running || (A.info("[截图] AI 服务未运行，正在启动..."), await dr(), A.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, e, i, s);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((w) => setTimeout(w, 100));
        const l = (await Rs({
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
        const c = Math.max(14, Math.min(20, Math.round(s / 18))), u = Math.max(18, Math.min(28, Math.round(s / 12))), d = l.split(/\n\n+/).filter((w) => w.trim()), y = Math.max(d.length, 1), v = (s - 16) / y, b = d.map((w, L) => {
          const D = L * v + 8, T = L === y - 1 ? s - D - 8 : v, W = {
            text: "",
            translatedText: w.trim(),
            x: 0,
            y: D,
            width: i,
            height: T,
            fontSize: c,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: w.trim(),
            blocks: [W],
            bbox: { x: 0, y: D, width: i, height: T },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: c,
            lineHeight: u,
            angle: 0
          };
        }), g = b.length > 0 ? b : [{
          text: "",
          translatedText: l,
          blocks: [{
            text: "",
            translatedText: l,
            x: 0,
            y: 0,
            width: i,
            height: s,
            fontSize: c,
            lineHeight: u,
            angle: 0
          }],
          bbox: { x: 0, y: 0, width: i, height: s },
          isCodeBlock: !1,
          isStructuredBlock: !1,
          fontSize: c,
          lineHeight: u,
          angle: 0
        }];
        this.translationOverlay.blocks = g.map((w) => w.blocks[0]), this.translationOverlay.paragraphBlocks = g, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await fe.loadOfflineTranslator();
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
    fe.loadOfflineTranslator().then(({ cancelOfflineTranslation: e }) => e()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.cancelSmartDetection(), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null, this.visualElementDetector = null), this.annotations.forEach((e) => {
      typeof e.destroy == "function" && e.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var hl = {
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
function ul() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function dl(n, t, e) {
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
var gl = Symbol("icon-context");
function st(n, t, e) {
  var i = {
    name: "icon-" + n,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(o) {
      var a = ul(), r = ye(gl, hl);
      return function() {
        var l = o.size, c = o.strokeWidth, u = o.strokeLinecap, d = o.strokeLinejoin, y = o.theme, v = o.fill, b = o.spin, g = dl(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: y,
          fill: v
        }, r), w = [r.prefix + "-icon"];
        return w.push(r.prefix + "-icon-" + n), t && r.rtl && w.push(r.prefix + "-icon-rtl"), b && w.push(r.prefix + "-icon-spin"), m("span", {
          class: w.join(" ")
        }, [e(g)]);
      };
    }
  };
  return i;
}
const fl = st("arrow-right-up", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M19 11H37V29",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Vn = st("check", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Un = st("close", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 8L40 40",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M8 40L40 8",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), rn = st("copy", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), ml = st("delete-four", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 11L40 11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M18 5L30 5",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Gi = st("down", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36 18L24 30L12 18",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), pl = st("download", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 24.0083V42H42V24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M33 23L24 32L15 23",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M23.9917 6V32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), yl = st("font-size", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M24 6V42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M16 42H32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), wl = st("go-on", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), vl = st("left", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M31 36L19 24L31 12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), xl = st("list-numbers", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M20 9H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M20 19H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M20 29H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M20 39H42",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M6 29H12V32L6 38V39H12",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M7 11L9 9V19M9 19H7M9 19H11",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ki = st("loading", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), En = st("magic", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M29.5856 18.4143L5.54395 42.4559",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Es = st("minus", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M10.5 24L38.5 24",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), kl = st("more", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), m("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null), m("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: n.colors[0]
  }, null)]);
}), bl = st("mosaic", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M44 36H36V44H44V36Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M28 36H20V44H28V36Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M12 36H4V44H12V36Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M44 20H36V28H44V20Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M28 20H20V28H28V20Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M12 20H4V28H12V20Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M44 4H36V12H44V4Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M28 4H20V12H28V4Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M12 4H4V12H12V4Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M20 12H12V20H20V12Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M20 28H12V36H20V28Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M36 12H28V20H36V12Z",
    fill: n.colors[0]
  }, null), m("path", {
    d: "M36 28H28V36H36V28Z",
    fill: n.colors[0]
  }, null)]);
}), Sl = st("move-one", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), qi = st("pin", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("g", {
    "clip-path": "url(#" + n.id + "1c742167)"
  }, [m("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]), m("defs", null, [m("clipPath", {
    id: n.id + "1c742167"
  }, [m("rect", {
    width: "48",
    height: "48",
    fill: n.colors[2]
  }, null)])])]);
}), Ji = st("platte", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: n.colors[3],
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Yn = st("pushpin", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ml = st("rectangle-one", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Cl = st("redo", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M42 8V17H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), _l = st("return", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Tl = st("right", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M19 12L31 24L19 36",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), zl = st("round", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Qi = st("save", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: n.colors[3]
  }, null), m("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M9 6H34.2814",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M14 26H34",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M14 34H24.0083",
    stroke: n.colors[2],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Rl = st("square", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth
  }, null)]);
}), Xn = st("text-recognition", !1, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M24 15V35",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M17 15H24H31",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), $s = st("translate", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M16 6L17 9",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M6 11H28",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Ll = st("write", !0, function(n) {
  return m("svg", {
    width: n.size,
    height: n.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: n.colors[1],
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linejoin": n.strokeLinejoin
  }, null), m("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: n.colors[0],
    "stroke-width": n.strokeWidth,
    "stroke-linecap": n.strokeLinecap,
    "stroke-linejoin": n.strokeLinejoin
  }, null)]);
}), Pl = { class: "toolbar-panel first-panel" }, Al = { class: "tool-section" }, Dl = ["onClick", "title", "aria-pressed"], Il = { class: "action-section" }, Ol = ["disabled", "title"], El = ["disabled", "title"], $l = ["disabled", "title"], Wl = ["title"], Bl = ["title"], Nl = ["title"], Hl = {
  key: 0,
  class: "toolbar-panel second-panel"
}, jl = { class: "style-section" }, Fl = {
  key: 0,
  class: "style-group opacity-group"
}, Vl = { class: "style-label" }, Ul = ["value", "title", "aria-label"], Yl = { class: "style-value" }, Xl = {
  key: 1,
  class: "style-group"
}, Zl = { class: "style-label" }, Gl = { class: "line-width-selector" }, Kl = ["onClick", "title", "aria-pressed"], ql = { class: "style-value" }, Jl = {
  key: 2,
  class: "style-divider"
}, Ql = {
  key: 3,
  class: "style-group opacity-group"
}, tc = { class: "style-label" }, ec = ["value", "title", "aria-label"], nc = { class: "style-value" }, ic = {
  key: 4,
  class: "style-divider"
}, sc = {
  key: 5,
  class: "style-group color-picker-group"
}, oc = { class: "style-label" }, ac = { class: "color-row" }, rc = ["onClick", "title", "aria-pressed"], lc = { class: "custom-color-wrapper" }, cc = ["title"], hc = ["value", "title", "aria-label"], uc = {
  key: 6,
  class: "style-group"
}, dc = { class: "style-label" }, gc = { class: "text-size-selector" }, fc = ["onClick", "title", "aria-pressed"], mc = { class: "style-value" }, pc = {
  key: 7,
  class: "style-group"
}, yc = { class: "style-label" }, wc = { class: "mosaic-size-selector" }, vc = ["onClick", "title", "aria-pressed"], xc = { class: "style-value" }, kc = {
  key: 8,
  class: "style-group"
}, bc = { class: "style-label" }, Sc = { class: "translate-engine-selector" }, Mc = ["onClick", "title", "aria-pressed"], Cc = /* @__PURE__ */ Ct({
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
    const i = O(null), { t: s } = ws(), o = n, a = e, r = I(() => [
      { type: f.Select, icon: Sl, title: s("screenshot.select") },
      { type: f.Rectangle, icon: Ml, title: s("screenshot.rectangle") },
      { type: f.Ellipse, icon: zl, title: s("screenshot.ellipse") },
      { type: f.Line, icon: Es, title: s("screenshot.line") },
      { type: f.Arrow, icon: fl, title: s("screenshot.arrow") },
      { type: f.Pen, icon: Ll, title: s("screenshot.pen") },
      { type: f.Mosaic, icon: bl, title: s("screenshot.mosaic") },
      { type: f.Text, icon: yl, title: s("screenshot.text") },
      { type: f.Marker, icon: xl, title: s("screenshot.marker") },
      { type: f.ColorPicker, icon: Ji, title: s("screenshot.colorPicker") },
      { type: f.Ocr, icon: Xn, title: s("screenshot.ocr") },
      { type: f.Translate, icon: $s, title: s("screenshot.translate") },
      { type: f.Pin, icon: Yn, title: s("screenshot.pin") }
    ]), l = I(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: s("translate.bingTranslate"), short: "B" },
      { value: "offline", label: s("translate.offlineTranslate"), short: s("translate.offlineMark") },
      { value: "local-ai", label: s("translate.localAiTranslate"), short: "AI" }
    ]), c = [2, 3, 5, 8], u = [
      "#ff4444",
      "#f79009",
      "#fdb022",
      "#12b76a",
      "#06b6d4",
      "#2e90fa",
      "#7a5af8",
      "#d444f1",
      "#111827"
    ], d = [12, 14, 16, 18, 20, 24], y = [8, 12, 16, 20], v = I(() => ![f.ColorPicker, f.Ocr, f.Pin].includes(o.currentTool)), b = I(
      () => o.currentTool === f.Select
    ), g = I(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen].includes(o.currentTool)
    ), w = I(
      () => [f.Rectangle, f.Ellipse, f.Line, f.Arrow, f.Pen, f.Text, f.Marker].includes(o.currentTool)
    ), L = I(
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
    ), D = I(
      () => o.currentTool === f.Text || o.currentTool === f.Marker
    ), T = I(() => o.currentTool === f.Mosaic), W = I(() => o.currentTool === f.Translate), U = (E) => a("tool-select", E), X = (E) => a("color-change", E), V = (E) => a("line-width-change", E), Y = (E) => {
      a("opacity-change", Number(E.target.value) / 100);
    }, K = (E) => a("text-size-change", E), q = (E) => a("mosaic-size-change", E), J = (E) => {
      a(
        "selection-corner-radius-change",
        Number(E.target.value)
      );
    }, tt = () => a("undo"), ot = () => a("redo"), vt = () => a("delete"), it = () => a("save"), j = () => a("confirm"), nt = () => a("cancel"), pt = (E) => {
      a("translate-engine-change", E);
    }, rt = (E) => {
      X(E);
    }, dt = (E) => {
      const Rt = E.target;
      Rt.value && X(Rt.value);
    }, kt = () => {
      const E = i.value?.getBoundingClientRect();
      return {
        width: E?.width ?? 590,
        height: E?.height ?? 50
      };
    };
    return Ge(() => o.currentTool, () => {
      ee(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: kt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: kt
    }), (E, Rt) => (P(), $(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        H(" 第一个面板：工具选择 + 操作按钮 "),
        x("div", Pl, [
          H(" 工具选择区域 "),
          x("div", Al, [
            (P(!0), $(
              jt,
              null,
              Jt(r.value, (N) => (P(), $("button", {
                key: N.type,
                onClick: (_t) => U(N.type),
                class: at(["tool-btn", { active: E.currentTool === N.type }]),
                title: N.title,
                "aria-pressed": E.currentTool === N.type
              }, [
                (P(), Mt(pe(N.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, Dl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          H(" 分隔线 "),
          Rt[0] || (Rt[0] = x(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          H(" 操作按钮区域 "),
          x("div", Il, [
            x("button", {
              onClick: tt,
              disabled: !E.canUndo,
              class: "action-btn undo",
              title: M(s)("screenshot.undo")
            }, [
              m(M(_l), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ol),
            x("button", {
              onClick: ot,
              disabled: !E.canRedo,
              class: "action-btn redo",
              title: M(s)("screenshot.redo")
            }, [
              m(M(wl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, El),
            x("button", {
              onClick: vt,
              disabled: !E.canDelete,
              class: "action-btn delete",
              title: M(s)("screenshot.delete")
            }, [
              m(M(ml), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, $l),
            x("button", {
              onClick: nt,
              class: "action-btn cancel",
              title: M(s)("screenshot.cancel")
            }, [
              m(M(Un), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Wl),
            x("button", {
              onClick: it,
              class: "action-btn save",
              title: M(s)("screenshot.save")
            }, [
              m(M(pl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Bl),
            x("button", {
              onClick: j,
              class: "action-btn confirm",
              title: M(s)("screenshot.confirm")
            }, [
              m(M(Vn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Nl)
          ])
        ]),
        H(" 第二个面板：样式设置区域 "),
        v.value ? (P(), $("div", Hl, [
          x("div", jl, [
            b.value ? (P(), $("div", Fl, [
              x(
                "span",
                Vl,
                F(M(s)("screenshot.cornerRadius")),
                1
                /* TEXT */
              ),
              x("input", {
                class: "opacity-slider",
                type: "range",
                min: "0",
                max: "80",
                step: "2",
                value: E.currentSelectionCornerRadius,
                style: ct({
                  "--opacity-color": "#2e90fa",
                  "--opacity-progress": `${E.currentSelectionCornerRadius / 80 * 100}%`
                }),
                title: `${E.currentSelectionCornerRadius}px`,
                "aria-label": M(s)("screenshot.cornerRadius"),
                onInput: J
              }, null, 44, Ul),
              x(
                "span",
                Yl,
                F(E.currentSelectionCornerRadius) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 线宽设置 "),
            g.value ? (P(), $("div", Xl, [
              x(
                "span",
                Zl,
                F(M(s)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              x("div", Gl, [
                (P(), $(
                  jt,
                  null,
                  Jt(c, (N) => x("button", {
                    key: N,
                    onClick: (_t) => V(N),
                    class: at(["width-btn", { active: E.currentLineWidth === N }]),
                    title: `${N}px`,
                    "aria-pressed": E.currentLineWidth === N
                  }, [
                    x(
                      "span",
                      {
                        class: "line-preview",
                        style: ct({ height: `${N}px`, backgroundColor: E.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Kl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                ql,
                F(E.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            g.value && w.value ? (P(), $("div", Jl)) : H("v-if", !0),
            H(" 不透明度设置 "),
            L.value ? (P(), $("div", Ql, [
              x(
                "span",
                tc,
                F(M(s)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              x("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(E.currentOpacity * 100),
                style: ct({
                  "--opacity-color": E.currentColor,
                  "--opacity-progress": `${Math.round(E.currentOpacity * 100)}%`
                }),
                title: `${Math.round(E.currentOpacity * 100)}%`,
                "aria-label": M(s)("screenshot.opacity"),
                onInput: Y
              }, null, 44, ec),
              x(
                "span",
                nc,
                F(Math.round(E.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            L.value && w.value ? (P(), $("div", ic)) : H("v-if", !0),
            H(" 颜色设置 "),
            w.value ? (P(), $("div", sc, [
              x(
                "span",
                oc,
                F(M(s)("screenshot.color")),
                1
                /* TEXT */
              ),
              x("div", ac, [
                (P(), $(
                  jt,
                  null,
                  Jt(u, (N) => x("button", {
                    key: N,
                    onClick: (_t) => rt(N),
                    class: at(["color-btn", { active: E.currentColor === N }]),
                    style: ct({ backgroundColor: N }),
                    title: N,
                    "aria-pressed": E.currentColor === N
                  }, null, 14, rc)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                x("div", lc, [
                  x("button", {
                    class: at(["color-btn custom-color-btn", { active: !u.includes(E.currentColor) }]),
                    title: M(s)("screenshot.customColor")
                  }, [
                    m(M(Ji), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, cc),
                  x("input", {
                    type: "color",
                    onChange: dt,
                    value: E.currentColor,
                    class: "color-input-hidden",
                    title: M(s)("screenshot.customColor"),
                    "aria-label": M(s)("screenshot.customColor")
                  }, null, 40, hc)
                ])
              ])
            ])) : H("v-if", !0),
            H(" 文字大小设置 "),
            D.value ? (P(), $("div", uc, [
              x(
                "span",
                dc,
                F(M(s)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              x("div", gc, [
                (P(), $(
                  jt,
                  null,
                  Jt(d, (N) => x("button", {
                    key: N,
                    onClick: (_t) => K(N),
                    class: at(["size-btn", { active: E.currentTextSize === N }]),
                    title: `${N}px`,
                    "aria-pressed": E.currentTextSize === N
                  }, [
                    x(
                      "span",
                      {
                        class: "size-text",
                        style: ct({ fontSize: `${Math.min(N, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, fc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                mc,
                F(E.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 马赛克大小设置 "),
            T.value ? (P(), $("div", pc, [
              x(
                "span",
                yc,
                F(M(s)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              x("div", wc, [
                (P(), $(
                  jt,
                  null,
                  Jt(y, (N) => x("button", {
                    key: N,
                    onClick: (_t) => q(N),
                    class: at(["size-btn", { active: E.currentMosaicSize === N }]),
                    title: `${M(s)("screenshot.brush")} ${N * 3}px`,
                    "aria-pressed": E.currentMosaicSize === N
                  }, [
                    x(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: ct({
                          width: `${Math.min(N * 1.25, 18)}px`,
                          height: `${Math.min(N * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, vc)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                xc,
                F(E.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 翻译引擎选择 "),
            W.value ? (P(), $("div", kc, [
              x(
                "span",
                bc,
                F(M(s)("screenshot.engine")),
                1
                /* TEXT */
              ),
              x("div", Sc, [
                (P(!0), $(
                  jt,
                  null,
                  Jt(l.value, (N) => (P(), $("button", {
                    key: N.value,
                    onClick: (_t) => pt(N.value),
                    class: at(["engine-btn", { active: E.currentTranslateEngine === N.value }]),
                    title: N.label,
                    "aria-pressed": E.currentTranslateEngine === N.value
                  }, F(N.short), 11, Mc))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : H("v-if", !0)
          ])
        ])) : H("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Je = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, _c = /* @__PURE__ */ Je(Cc, [["__scopeId", "data-v-afb70887"]]), Tc = {
  class: "screenshot-container",
  ref: "containerRef"
}, zc = {
  key: 0,
  class: "mask-layers"
}, Rc = {
  key: 1,
  class: "mask-full"
}, Lc = { class: "size-text" }, Pc = {
  key: 4,
  class: "loading-overlay"
}, Ac = /* @__PURE__ */ Ct({
  __name: "index",
  setup(n) {
    const t = O(), e = O(), i = O(null), s = O(null);
    let o = null;
    const a = O(!0), r = O(!1), l = O(""), c = O({ x: 0, y: 0 }), u = O(16), d = O(!1), y = O("bing"), v = O({ width: 590, height: 50 });
    let b = !1, g = null;
    const w = O({
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
    }), L = O(), D = O(), T = I(() => w.value.isDrawing), W = I(() => {
      if (!w.value.selectionRect) return {};
      const { y: k } = w.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${k}px`
      };
    }), U = I(() => {
      if (!w.value.selectionRect) return {};
      const { y: k, height: B } = w.value.selectionRect;
      return {
        top: `${k + B}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), X = I(() => {
      if (!w.value.selectionRect) return {};
      const { x: k, y: B, height: ut } = w.value.selectionRect;
      return {
        top: `${B}px`,
        left: "0",
        width: `${k}px`,
        height: `${ut}px`
      };
    }), V = I(() => {
      if (!w.value.selectionRect) return {};
      const { x: k, y: B, width: ut, height: ft } = w.value.selectionRect;
      return {
        top: `${B}px`,
        left: `${k + ut}px`,
        right: "0",
        height: `${ft}px`
      };
    }), Y = I(() => {
      if (!w.value.selectionRect) return {};
      const { x: k, y: B, width: ut, height: ft } = w.value.selectionRect, Q = 10, St = 12, Pt = Math.min(v.value.width, Math.max(0, window.innerWidth - Q * 2)), It = Math.min(v.value.height, Math.max(0, window.innerHeight - Q * 2)), Qt = Math.max(Q, window.innerHeight - It - Q), oe = Math.max(Q, window.innerWidth - Pt - Q);
      let Gt;
      return B + ft + It + St <= window.innerHeight - Q ? Gt = B + ft + St : B - It - St >= Q ? Gt = B - It - St : Gt = B + ft - It - Q, Gt = Math.min(Math.max(Gt, Q), Qt), {
        left: `${Math.min(Math.max(k + (ut - Pt) / 2, Q), oe)}px`,
        top: `${Gt}px`
      };
    }), K = I(() => {
      if (!w.value.selectionRect) return {};
      const { x: k, y: B, width: ut, height: ft } = w.value.selectionRect, Q = 10;
      let St = k - Q, Pt = B - Q, It = "translateY(-100%)";
      return St < 10 && (St = k + ut + Q, It = "translateY(-100%)"), Pt < 30 && (Pt = B + ft + Q, It = "translateY(0)"), {
        left: `${St}px`,
        top: `${Pt}px`,
        transform: It
      };
    }), q = I(() => {
      if (!w.value.selectionRect) return "";
      const { width: k, height: B } = w.value.selectionRect;
      return `${Math.round(k)} × ${Math.round(B)}`;
    }), J = I(
      () => g?.getData().style.color || w.value.currentStyle.color
    ), tt = I(() => {
      const k = g?.getData().type === f.Marker ? Hn(c.value, u.value) : _e(c.value);
      return {
        "--text-accent-color": J.value,
        left: `${k.x}px`,
        top: `${k.y}px`
      };
    }), ot = (k) => {
      if (k === f.Pin && w.value.selectionRect) {
        vt();
        return;
      }
      if (k === f.Ocr && w.value.selectionRect) {
        it();
        return;
      }
      o?.setTool(k);
    }, vt = async () => {
      try {
        await o?.createPinWindow();
      } catch (k) {
        A.error("[截图] 创建贴图失败", k);
      }
    }, it = async () => {
      try {
        await o?.createOcrPinWindow();
      } catch (k) {
        A.error("[截图] 创建文字识别贴图失败", k);
      }
    }, j = (k) => {
      o?.updateStyle({ color: k });
    }, nt = (k) => {
      o?.updateStyle({ lineWidth: k });
    }, pt = (k) => {
      o?.updateStyle({ opacity: k });
    }, rt = (k) => {
      o?.updateTextSize(k);
    }, dt = (k) => {
      o?.updateMosaicSize(k);
    }, kt = (k) => {
      o?.updateSelectionCornerRadius(k);
    }, E = (k) => {
      y.value = k, o?.setTranslationEngine(k), o?.executeTranslation();
    }, Rt = () => {
      o?.undoAnnotation();
    }, N = () => {
      o?.redoAnnotation();
    }, _t = () => {
      o?.deleteSelectedAnnotation();
    }, gt = async () => {
      try {
        await o?.processScreenshot("save"), lt();
      } catch (k) {
        const B = k?.message || k?.toString() || "保存失败";
        if (B.includes("保存已取消") || B.includes("cancelled"))
          return;
        A.error("保存截图时发生错误", B);
      }
    }, Lt = async () => {
      try {
        await o?.processScreenshot("copy"), lt();
      } catch {
      }
    }, Wt = () => {
      lt();
    }, Zt = (k, B) => {
      if (B && [f.Text, f.Marker].includes(B.getData().type)) {
        const ut = B.getData();
        c.value = {
          x: ut.points[0].x,
          y: ut.points[0].y
        }, u.value = ut.fontSize || w.value.textSize;
      } else
        c.value = k, u.value = w.value.textSize;
      r.value = !0, g = B || null, B && o?.setEditingAnnotation(B), B && B.getData().text ? l.value = B.getData().text || "" : l.value = "", ee(() => {
        e.value?.focus(), g && e.value?.select();
      });
    }, Ht = () => {
      const k = g?.getData().type === f.Marker;
      l.value.trim() || k ? g ? o?.updateTextAnnotation(g, l.value.trim()) : o?.createTextAnnotation(c.value, l.value) : g && o?.deleteAnnotation(g), C();
    }, C = () => {
      r.value = !1, l.value = "", g && o?.clearEditingAnnotation(), g = null;
    }, et = (k) => {
      navigator.clipboard && navigator.clipboard.writeText(k.hex).catch((B) => {
        A.error("[截图] 复制颜色到剪贴板失败", B);
      });
    }, ht = (k) => {
      if (k.key === "Meta" || k.key === "Win" || k.altKey && k.key === "Tab" || k.altKey && k.key === "F4") {
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === e.value) {
        if (k.key === "Escape") {
          C(), k.preventDefault();
          return;
        }
        if (k.key === "Enter") {
          Ht(), k.preventDefault();
          return;
        }
        if (k.key === "Tab") {
          k.preventDefault();
          return;
        }
        return;
      }
      if (!w.value.selectionRect) {
        if (k.key === "Escape") {
          lt();
          return;
        }
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (o?.handleKeyDown(k)) {
        k.preventDefault();
        return;
      }
      const B = navigator.platform.toLowerCase().includes("mac");
      if ((B ? k.metaKey : k.ctrlKey) && k.key.toLowerCase() === "z") {
        k.shiftKey ? N() : Rt(), k.preventDefault();
        return;
      }
      if (!B && k.ctrlKey && k.key.toLowerCase() === "y") {
        N(), k.preventDefault();
        return;
      }
      if (k.key === "Escape") {
        lt();
        return;
      } else if (k.key === "Delete" || k.key === "Backspace") {
        _t(), k.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(k.key) || k.preventDefault();
    }, lt = async () => {
      if (!b) {
        b = !0, o?.destroy(), o = null;
        try {
          await S("cleanup_screenshot_resources");
        } catch {
          try {
            await S("clear_screenshot_background");
          } catch (B) {
            A.error("[截图] 清理后台缓存失败", B);
          }
        }
        w.value = {
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
        }, r.value = !1, l.value = "", g = null, d.value = !1, a.value = !0;
        try {
          await S("close_and_destroy_screenshot_window");
        } catch (k) {
          A.error("[截图] 销毁截图窗口失败，回退到 close()", k), await s.value?.close();
        } finally {
          b = !1;
        }
      }
    }, Tt = () => {
      const k = o?.getState();
      k && (w.value = k);
    }, yt = () => {
      const k = i.value?.getToolbarSize?.();
      k && (v.value = k);
    }, Vt = (k) => {
      const B = k.detail;
      B && (v.value = B);
    };
    return Ke(async () => {
      if (t.value) {
        s.value = new qe("screenshot"), o = new cl(
          t.value,
          Tt,
          Zt,
          et
        ), document.addEventListener("keydown", ht), window.addEventListener("resize", yt), window.addEventListener("screenshot-toolbar-resize", Vt), D.value = await wn("screenshot-close-requested", () => {
          lt();
        }), L.value = await wn("tauri://blur", () => {
          if (r.value && document.activeElement === e.value)
            return;
          const k = o?.getTranslationState();
          k?.isLoading || k?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== e.value) {
              const B = o?.getTranslationState();
              if (B?.isLoading || B?.isVisible)
                return;
              lt();
            }
          }, 100);
        }), await ee(), yt(), await s.value.emit("screenshot_ready");
        try {
          const k = await S("get_translation_engine");
          k && ["google", "bing", "offline", "local-ai"].includes(k) && (y.value = k, o?.setTranslationEngine(k));
        } catch (k) {
          A.error("[截图] 获取翻译引擎设置失败", k);
        }
        try {
          const k = await S("get_offline_model_activated");
          o?.setOfflineModelActivated(k);
        } catch (k) {
          A.error("[截图] 获取离线模型激活状态失败", k);
        }
      }
    }), Qn(() => {
      o?.destroy(), o = null, document.removeEventListener("keydown", ht), window.removeEventListener("resize", yt), window.removeEventListener("screenshot-toolbar-resize", Vt), L.value?.(), D.value?.(), L.value = void 0, D.value = void 0, s.value = null;
    }), (k, B) => (P(), $(
      "div",
      Tc,
      [
        H(" 遮罩层 "),
        w.value.selectionRect ? (P(), $("div", zc, [
          x(
            "div",
            {
              class: "mask-top",
              style: ct(W.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-bottom",
              style: ct(U.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-left",
              style: ct(X.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-right",
              style: ct(V.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (P(), $("div", Rc)),
        H(" 画布 "),
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
        H(" 尺寸信息 "),
        w.value.selectionRect && a.value ? (P(), $(
          "div",
          {
            key: 2,
            class: "size-info",
            style: ct(K.value)
          },
          [
            x(
              "span",
              Lc,
              F(q.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : H("v-if", !0),
        H(" 工具栏 "),
        w.value.selectionRect && !T.value ? (P(), Mt(_c, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: ct(Y.value),
          class: "toolbar",
          "current-tool": w.value.currentTool,
          "current-color": w.value.currentStyle.color,
          "current-line-width": w.value.currentStyle.lineWidth,
          "current-opacity": w.value.currentStyle.opacity,
          "current-text-size": w.value.textSize,
          "current-mosaic-size": w.value.mosaicSize,
          "current-selection-corner-radius": w.value.selectionCornerRadius,
          "can-undo": w.value.hasAnnotations,
          "can-redo": w.value.canRedo,
          "can-delete": !!w.value.selectedAnnotation,
          "current-translate-engine": y.value,
          onToolSelect: ot,
          onColorChange: j,
          onLineWidthChange: nt,
          onOpacityChange: pt,
          onTextSizeChange: rt,
          onMosaicSizeChange: dt,
          onSelectionCornerRadiusChange: kt,
          onTranslateEngineChange: E,
          onUndo: Rt,
          onRedo: N,
          onDelete: _t,
          onSave: gt,
          onConfirm: Lt,
          onCancel: Wt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "current-selection-corner-radius", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : H("v-if", !0),
        H(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (P(), $("div", Pc, [
          B[1] || (B[1] = x(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          x(
            "p",
            null,
            F(k.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : H("v-if", !0),
        H(" 文字输入框 "),
        r.value ? (P(), $(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: ct(tt.value)
          },
          [
            Ve(x(
              "input",
              {
                ref_key: "textInputRef",
                ref: e,
                "onUpdate:modelValue": B[0] || (B[0] = (ut) => l.value = ut),
                type: "text",
                class: "text-input",
                style: ct({
                  color: J.value,
                  fontFamily: M(ne),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  Oi(Ht, ["enter"]),
                  Oi(C, ["escape"])
                ],
                onBlur: Ht,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [Qo, l.value]
            ])
          ],
          4
          /* STYLE */
        )) : H("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Dc = /* @__PURE__ */ Je(Ac, [["__scopeId", "data-v-a3b3737e"]]), Ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dc
}, Symbol.toStringTag, { value: "Module" })), Ws = Symbol(), fn = "el", Oc = "is-", de = (n, t, e, i, s) => {
  let o = `${n}-${t}`;
  return e && (o += `-${e}`), i && (o += `__${i}`), s && (o += `--${s}`), o;
}, Bs = Symbol("namespaceContextKey"), Ec = (n) => {
  const t = n || (Re() ? ye(Bs, O(fn)) : O(fn));
  return I(() => M(t) || fn);
}, ci = (n, t) => {
  const e = Ec(t);
  return {
    namespace: e,
    b: (g = "") => de(e.value, n, g, "", ""),
    e: (g) => g ? de(e.value, n, "", g, "") : "",
    m: (g) => g ? de(e.value, n, "", "", g) : "",
    be: (g, w) => g && w ? de(e.value, n, g, w, "") : "",
    em: (g, w) => g && w ? de(e.value, n, "", g, w) : "",
    bm: (g, w) => g && w ? de(e.value, n, g, "", w) : "",
    bem: (g, w, L) => g && w && L ? de(e.value, n, g, w, L) : "",
    is: (g, ...w) => {
      const L = w.length >= 1 ? w[0] : !0;
      return g && L ? `${Oc}${g}` : "";
    },
    cssVar: (g) => {
      const w = {};
      for (const L in g)
        g[L] && (w[`--${e.value}-${L}`] = g[L]);
      return w;
    },
    cssVarName: (g) => `--${e.value}-${g}`,
    cssVarBlock: (g) => {
      const w = {};
      for (const L in g)
        g[L] && (w[`--${e.value}-${n}-${L}`] = g[L]);
      return w;
    },
    cssVarBlockName: (g) => `--${e.value}-${n}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const $c = Object.prototype.hasOwnProperty, ts = (n, t) => $c.call(n, t), Xe = (n) => typeof n == "function", ve = (n) => typeof n == "string", Ns = (n) => n !== null && typeof n == "object";
var Wc = typeof global == "object" && global && global.Object === Object && global, Bc = typeof self == "object" && self && self.Object === Object && self, hi = Wc || Bc || Function("return this")(), Le = hi.Symbol, Hs = Object.prototype, Nc = Hs.hasOwnProperty, Hc = Hs.toString, Be = Le ? Le.toStringTag : void 0;
function jc(n) {
  var t = Nc.call(n, Be), e = n[Be];
  try {
    n[Be] = void 0;
    var i = !0;
  } catch {
  }
  var s = Hc.call(n);
  return i && (t ? n[Be] = e : delete n[Be]), s;
}
var Fc = Object.prototype, Vc = Fc.toString;
function Uc(n) {
  return Vc.call(n);
}
var Yc = "[object Null]", Xc = "[object Undefined]", es = Le ? Le.toStringTag : void 0;
function js(n) {
  return n == null ? n === void 0 ? Xc : Yc : es && es in Object(n) ? jc(n) : Uc(n);
}
function Zc(n) {
  return n != null && typeof n == "object";
}
var Gc = "[object Symbol]";
function ui(n) {
  return typeof n == "symbol" || Zc(n) && js(n) == Gc;
}
function Kc(n, t) {
  for (var e = -1, i = n == null ? 0 : n.length, s = Array(i); ++e < i; )
    s[e] = t(n[e], e, n);
  return s;
}
var di = Array.isArray, ns = Le ? Le.prototype : void 0, is = ns ? ns.toString : void 0;
function Fs(n) {
  if (typeof n == "string")
    return n;
  if (di(n))
    return Kc(n, Fs) + "";
  if (ui(n))
    return is ? is.call(n) : "";
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Vs(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
var qc = "[object AsyncFunction]", Jc = "[object Function]", Qc = "[object GeneratorFunction]", th = "[object Proxy]";
function eh(n) {
  if (!Vs(n))
    return !1;
  var t = js(n);
  return t == Jc || t == Qc || t == qc || t == th;
}
var $n = hi["__core-js_shared__"], ss = function() {
  var n = /[^.]+$/.exec($n && $n.keys && $n.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function nh(n) {
  return !!ss && ss in n;
}
var ih = Function.prototype, sh = ih.toString;
function oh(n) {
  if (n != null) {
    try {
      return sh.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var ah = /[\\^$.*+?()[\]{}|]/g, rh = /^\[object .+?Constructor\]$/, lh = Function.prototype, ch = Object.prototype, hh = lh.toString, uh = ch.hasOwnProperty, dh = RegExp(
  "^" + hh.call(uh).replace(ah, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gh(n) {
  if (!Vs(n) || nh(n))
    return !1;
  var t = eh(n) ? dh : rh;
  return t.test(oh(n));
}
function fh(n, t) {
  return n?.[t];
}
function Us(n, t) {
  var e = fh(n, t);
  return gh(e) ? e : void 0;
}
function mh(n, t) {
  return n === t || n !== n && t !== t;
}
var ph = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yh = /^\w*$/;
function wh(n, t) {
  if (di(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || ui(n) ? !0 : yh.test(n) || !ph.test(n) || t != null && n in Object(t);
}
var Ze = Us(Object, "create");
function vh() {
  this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
}
function xh(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var kh = "__lodash_hash_undefined__", bh = Object.prototype, Sh = bh.hasOwnProperty;
function Mh(n) {
  var t = this.__data__;
  if (Ze) {
    var e = t[n];
    return e === kh ? void 0 : e;
  }
  return Sh.call(t, n) ? t[n] : void 0;
}
var Ch = Object.prototype, _h = Ch.hasOwnProperty;
function Th(n) {
  var t = this.__data__;
  return Ze ? t[n] !== void 0 : _h.call(t, n);
}
var zh = "__lodash_hash_undefined__";
function Rh(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Ze && t === void 0 ? zh : t, this;
}
function xe(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
xe.prototype.clear = vh;
xe.prototype.delete = xh;
xe.prototype.get = Mh;
xe.prototype.has = Th;
xe.prototype.set = Rh;
function Lh() {
  this.__data__ = [], this.size = 0;
}
function _n(n, t) {
  for (var e = n.length; e--; )
    if (mh(n[e][0], t))
      return e;
  return -1;
}
var Ph = Array.prototype, Ah = Ph.splice;
function Dh(n) {
  var t = this.__data__, e = _n(t, n);
  if (e < 0)
    return !1;
  var i = t.length - 1;
  return e == i ? t.pop() : Ah.call(t, e, 1), --this.size, !0;
}
function Ih(n) {
  var t = this.__data__, e = _n(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function Oh(n) {
  return _n(this.__data__, n) > -1;
}
function Eh(n, t) {
  var e = this.__data__, i = _n(e, n);
  return i < 0 ? (++this.size, e.push([n, t])) : e[i][1] = t, this;
}
function De(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
De.prototype.clear = Lh;
De.prototype.delete = Dh;
De.prototype.get = Ih;
De.prototype.has = Oh;
De.prototype.set = Eh;
var $h = Us(hi, "Map");
function Wh() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new ($h || De)(),
    string: new xe()
  };
}
function Bh(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function Tn(n, t) {
  var e = n.__data__;
  return Bh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function Nh(n) {
  var t = Tn(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function Hh(n) {
  return Tn(this, n).get(n);
}
function jh(n) {
  return Tn(this, n).has(n);
}
function Fh(n, t) {
  var e = Tn(this, n), i = e.size;
  return e.set(n, t), this.size += e.size == i ? 0 : 1, this;
}
function be(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var i = n[t];
    this.set(i[0], i[1]);
  }
}
be.prototype.clear = Wh;
be.prototype.delete = Nh;
be.prototype.get = Hh;
be.prototype.has = jh;
be.prototype.set = Fh;
var Vh = "Expected a function";
function gi(n, t) {
  if (typeof n != "function" || t != null && typeof t != "function")
    throw new TypeError(Vh);
  var e = function() {
    var i = arguments, s = t ? t.apply(this, i) : i[0], o = e.cache;
    if (o.has(s))
      return o.get(s);
    var a = n.apply(this, i);
    return e.cache = o.set(s, a) || o, a;
  };
  return e.cache = new (gi.Cache || be)(), e;
}
gi.Cache = be;
var Uh = 500;
function Yh(n) {
  var t = gi(n, function(i) {
    return e.size === Uh && e.clear(), i;
  }), e = t.cache;
  return t;
}
var Xh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zh = /\\(\\)?/g, Gh = Yh(function(n) {
  var t = [];
  return n.charCodeAt(0) === 46 && t.push(""), n.replace(Xh, function(e, i, s, o) {
    t.push(s ? o.replace(Zh, "$1") : i || e);
  }), t;
});
function Kh(n) {
  return n == null ? "" : Fs(n);
}
function qh(n, t) {
  return di(n) ? n : wh(n, t) ? [n] : Gh(Kh(n));
}
function Jh(n) {
  if (typeof n == "string" || ui(n))
    return n;
  var t = n + "";
  return t == "0" && 1 / n == -1 / 0 ? "-0" : t;
}
function Qh(n, t) {
  t = qh(t, n);
  for (var e = 0, i = t.length; n != null && e < i; )
    n = n[Jh(t[e++])];
  return e && e == i ? n : void 0;
}
function tu(n, t, e) {
  var i = n == null ? void 0 : Qh(n, t);
  return i === void 0 ? e : i;
}
function eu(n) {
  for (var t = -1, e = n == null ? 0 : n.length, i = {}; ++t < e; ) {
    var s = n[t];
    i[s[0]] = s[1];
  }
  return i;
}
const Ys = (n) => n === void 0, os = (n) => typeof n == "boolean", ke = (n) => typeof n == "number", Zn = (n) => typeof Element > "u" ? !1 : n instanceof Element, nu = (n) => ve(n) ? !Number.isNaN(Number(n)) : !1;
var as;
const Se = typeof window < "u", iu = (n) => typeof n == "string", su = () => {
};
Se && ((as = window?.navigator) != null && as.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function fi(n) {
  return typeof n == "function" ? n() : M(n);
}
function ou(n) {
  return n;
}
function mi(n) {
  return ea() ? (na(n), !0) : !1;
}
function au(n, t = !0) {
  Re() ? Ke(n) : t ? n() : ee(n);
}
function Xs(n, t, e = {}) {
  const {
    immediate: i = !0
  } = e, s = O(!1);
  let o = null;
  function a() {
    o && (clearTimeout(o), o = null);
  }
  function r() {
    s.value = !1, a();
  }
  function l(...c) {
    a(), s.value = !0, o = setTimeout(() => {
      s.value = !1, o = null, n(...c);
    }, fi(t));
  }
  return i && (s.value = !0, Se && l()), mi(r), {
    isPending: ta(s),
    start: l,
    stop: r
  };
}
function Zs(n) {
  var t;
  const e = fi(n);
  return (t = e?.$el) != null ? t : e;
}
const Gs = Se ? window : void 0;
function Ks(...n) {
  let t, e, i, s;
  if (iu(n[0]) || Array.isArray(n[0]) ? ([e, i, s] = n, t = Gs) : [t, e, i, s] = n, !t)
    return su;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const o = [], a = () => {
    o.forEach((u) => u()), o.length = 0;
  }, r = (u, d, y, v) => (u.addEventListener(d, y, v), () => u.removeEventListener(d, y, v)), l = Ge(() => [Zs(t), fi(s)], ([u, d]) => {
    a(), u && o.push(...e.flatMap((y) => i.map((v) => r(u, y, v, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return mi(c), c;
}
function ru(n, t = !1) {
  const e = O(), i = () => e.value = !!n();
  return i(), au(i, t), e;
}
const rs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ls = "__vueuse_ssr_handlers__";
rs[ls] = rs[ls] || {};
var cs = Object.getOwnPropertySymbols, lu = Object.prototype.hasOwnProperty, cu = Object.prototype.propertyIsEnumerable, hu = (n, t) => {
  var e = {};
  for (var i in n)
    lu.call(n, i) && t.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && cs)
    for (var i of cs(n))
      t.indexOf(i) < 0 && cu.call(n, i) && (e[i] = n[i]);
  return e;
};
function uu(n, t, e = {}) {
  const i = e, { window: s = Gs } = i, o = hu(i, ["window"]);
  let a;
  const r = ru(() => s && "ResizeObserver" in s), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Ge(() => Zs(n), (d) => {
    l(), r.value && s && d && (a = new ResizeObserver(t), a.observe(d, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), c();
  };
  return mi(u), {
    isSupported: r,
    stop: u
  };
}
var hs;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(hs || (hs = {}));
var du = Object.defineProperty, us = Object.getOwnPropertySymbols, gu = Object.prototype.hasOwnProperty, fu = Object.prototype.propertyIsEnumerable, ds = (n, t, e) => t in n ? du(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, mu = (n, t) => {
  for (var e in t || (t = {}))
    gu.call(t, e) && ds(n, e, t[e]);
  if (us)
    for (var e of us(t))
      fu.call(t, e) && ds(n, e, t[e]);
  return n;
};
const pu = {
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
mu({
  linear: ou
}, pu);
const gs = {
  current: 0
}, fs = O(0), qs = 2e3, ms = Symbol("elZIndexContextKey"), Js = Symbol("zIndexContextKey"), yu = (n) => {
  const t = Re() ? ye(ms, gs) : gs, e = n || (Re() ? ye(Js, void 0) : void 0), i = I(() => {
    const a = M(e);
    return ke(a) ? a : qs;
  }), s = I(() => i.value + fs.value), o = () => (t.current++, fs.value = t.current, s.value);
  return !Se && ye(ms), {
    initialZIndex: i,
    currentZIndex: s,
    nextZIndex: o
  };
};
var wu = {
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
const vu = (n) => (t, e) => xu(t, e, M(n)), xu = (n, t, e) => tu(e, n, n).replace(/\{(\w+)\}/g, (i, s) => {
  var o;
  return `${(o = t?.[s]) != null ? o : `{${s}}`}`;
}), ku = (n) => {
  const t = I(() => M(n).name), e = ia(n) ? n : O(n);
  return {
    lang: t,
    locale: e,
    t: vu(n)
  };
}, Qs = Symbol("localeContextKey"), bu = (n) => {
  const t = n || ye(Qs, O());
  return ku(I(() => t.value || wu));
}, to = "__epPropKey", Nt = (n) => n, Su = (n) => Ns(n) && !!n[to], eo = (n, t) => {
  if (!Ns(n) || Su(n))
    return n;
  const { values: e, required: i, default: s, type: o, validator: a } = n, l = {
    type: o,
    required: !!i,
    validator: e || a ? (c) => {
      let u = !1, d = [];
      if (e && (d = Array.from(e), ts(n, "default") && d.push(s), u || (u = d.includes(c))), a && (u || (u = a(c))), !u && d.length > 0) {
        const y = [...new Set(d)].map((v) => JSON.stringify(v)).join(", ");
        sa(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [to]: !0
  };
  return ts(n, "default") && (l.default = s), l;
}, Ie = (n) => eu(Object.entries(n).map(([t, e]) => [
  t,
  eo(e, t)
])), Mu = ["", "default", "small", "large"], Cu = eo({
  type: String,
  values: Mu,
  required: !1
}), _u = Symbol("size"), Tu = Symbol("emptyValuesContextKey"), zu = Ie({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (n) => Xe(n) ? !n() : !n
  }
}), ps = (n) => Object.keys(n), xn = O();
function no(n, t = void 0) {
  return Re() ? ye(Ws, xn) : xn;
}
function io(n, t) {
  const e = no(), i = ci(n, I(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.namespace) || fn;
  })), s = bu(I(() => {
    var r;
    return (r = e.value) == null ? void 0 : r.locale;
  })), o = yu(I(() => {
    var r;
    return ((r = e.value) == null ? void 0 : r.zIndex) || qs;
  })), a = I(() => {
    var r;
    return M(t) || ((r = e.value) == null ? void 0 : r.size) || "";
  });
  return so(I(() => M(e) || {})), {
    ns: i,
    locale: s,
    zIndex: o,
    size: a
  };
}
const so = (n, t, e = !1) => {
  var i;
  const s = !!Re(), o = s ? no() : void 0, a = (i = void 0) != null ? i : s ? oa : void 0;
  if (!a)
    return;
  const r = I(() => {
    const l = M(n);
    return o?.value ? Ru(o.value, l) : l;
  });
  return a(Ws, r), a(Qs, I(() => r.value.locale)), a(Bs, I(() => r.value.namespace)), a(Js, I(() => r.value.zIndex)), a(_u, {
    size: I(() => r.value.size || "")
  }), a(Tu, I(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (e || !xn.value) && (xn.value = r.value), r;
}, Ru = (n, t) => {
  const e = [.../* @__PURE__ */ new Set([...ps(n), ...ps(t)])], i = {};
  for (const s of e)
    i[s] = t[s] !== void 0 ? t[s] : n[s];
  return i;
};
var zn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
};
function Gn(n, t = "px") {
  if (!n)
    return "";
  if (ke(n) || nu(n))
    return `${n}${t}`;
  if (ve(n))
    return n;
}
const oo = (n, t) => (n.install = (e) => {
  for (const i of [n, ...Object.values({})])
    e.component(i.name, i);
}, n), ao = (n, t) => (n.install = (e) => {
  n._context = e._context, e.config.globalProperties[t] = n;
}, n), Lu = Ie({
  size: {
    type: Nt([Number, String])
  },
  color: {
    type: String
  }
}), Pu = Ct({
  name: "ElIcon",
  inheritAttrs: !1
}), Au = /* @__PURE__ */ Ct({
  ...Pu,
  props: Lu,
  setup(n) {
    const t = n, e = ci("icon"), i = I(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: Ys(s) ? void 0 : Gn(s),
        "--color": o
      };
    });
    return (s, o) => (P(), $("i", aa({
      class: M(e).b(),
      style: M(i)
    }, s.$attrs), [
      se(s.$slots, "default")
    ], 16));
  }
});
var Du = /* @__PURE__ */ zn(Au, [["__file", "icon.vue"]]);
const kn = oo(Du);
/*! Element Plus Icons Vue v2.3.1 */
var Iu = /* @__PURE__ */ Ct({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(n) {
    return (t, e) => (P(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ou = Iu, Eu = /* @__PURE__ */ Ct({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (P(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ro = Eu, $u = /* @__PURE__ */ Ct({
  name: "InfoFilled",
  __name: "info-filled",
  setup(n) {
    return (t, e) => (P(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Wu = $u, Bu = /* @__PURE__ */ Ct({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(n) {
    return (t, e) => (P(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Nu = Bu, Hu = /* @__PURE__ */ Ct({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(n) {
    return (t, e) => (P(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ju = Hu;
const lo = Nt([
  String,
  Object,
  Function
]), Fu = {
  Close: ro
}, Vu = {
  Close: ro
}, bn = {
  success: Nu,
  warning: ju,
  error: Ou,
  info: Wu
}, Uu = (n) => n, mn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Yu = Ie({
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
    type: Nt([String, Object, Array])
  },
  offset: {
    type: Nt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Xu = Ct({
  name: "ElBadge"
}), Zu = /* @__PURE__ */ Ct({
  ...Xu,
  props: Yu,
  setup(n, { expose: t }) {
    const e = n, i = ci("badge"), s = I(() => e.isDot ? "" : ke(e.value) && ke(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`), o = I(() => {
      var a, r, l, c, u;
      return [
        {
          backgroundColor: e.color,
          marginRight: Gn(-((r = (a = e.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: Gn((c = (l = e.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (u = e.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: s
    }), (a, r) => (P(), $("div", {
      class: at(M(i).b())
    }, [
      se(a.$slots, "default"),
      m(ti, {
        name: `${M(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: zt(() => [
          Ve(x("sup", {
            class: at([
              M(i).e("content"),
              M(i).em("content", a.type),
              M(i).is("fixed", !!a.$slots.default),
              M(i).is("dot", a.isDot),
              M(i).is("hide-zero", !a.showZero && e.value === 0),
              a.badgeClass
            ]),
            style: ct(M(o))
          }, [
            se(a.$slots, "content", { value: M(s) }, () => [
              ra(F(M(s)), 1)
            ])
          ], 6), [
            [pn, !a.hidden && (M(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Gu = /* @__PURE__ */ zn(Zu, [["__file", "badge.vue"]]);
const Ku = oo(Gu), qu = Ie({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Nt(Object)
  },
  size: Cu,
  button: {
    type: Nt(Object)
  },
  experimentalFeatures: {
    type: Nt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Nt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...zu
}), Yt = {};
Ct({
  name: "ElConfigProvider",
  props: qu,
  setup(n, { slots: t }) {
    Ge(() => n.message, (i) => {
      Object.assign(Yt, i ?? {});
    }, { immediate: !0, deep: !0 });
    const e = so(n);
    return () => se(t, "default", { config: e?.value });
  }
});
const co = ["success", "info", "warning", "error"], Dt = Uu({
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
  appendTo: Se ? document.body : void 0
}), Ju = Ie({
  customClass: {
    type: String,
    default: Dt.customClass
  },
  center: {
    type: Boolean,
    default: Dt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Dt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Dt.duration
  },
  icon: {
    type: lo,
    default: Dt.icon
  },
  id: {
    type: String,
    default: Dt.id
  },
  message: {
    type: Nt([
      String,
      Object,
      Function
    ]),
    default: Dt.message
  },
  onClose: {
    type: Nt(Function),
    default: Dt.onClose
  },
  showClose: {
    type: Boolean,
    default: Dt.showClose
  },
  type: {
    type: String,
    values: co,
    default: Dt.type
  },
  plain: {
    type: Boolean,
    default: Dt.plain
  },
  offset: {
    type: Number,
    default: Dt.offset
  },
  zIndex: {
    type: Number,
    default: Dt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Dt.grouping
  },
  repeatNum: {
    type: Number,
    default: Dt.repeatNum
  }
}), Qu = {
  destroy: () => !0
}, Xt = la([]), td = (n) => {
  const t = Xt.findIndex((s) => s.id === n), e = Xt[t];
  let i;
  return t > 0 && (i = Xt[t - 1]), { current: e, prev: i };
}, ed = (n) => {
  const { prev: t } = td(n);
  return t ? t.vm.exposed.bottom.value : 0;
}, nd = (n, t) => Xt.findIndex((i) => i.id === n) > 0 ? 16 : t, id = Ct({
  name: "ElMessage"
}), sd = /* @__PURE__ */ Ct({
  ...id,
  props: Ju,
  emits: Qu,
  setup(n, { expose: t }) {
    const e = n, { Close: i } = Vu, { ns: s, zIndex: o } = io("message"), { currentZIndex: a, nextZIndex: r } = o, l = O(), c = O(!1), u = O(0);
    let d;
    const y = I(() => e.type ? e.type === "error" ? "danger" : e.type : "info"), v = I(() => {
      const V = e.type;
      return { [s.bm("icon", V)]: V && bn[V] };
    }), b = I(() => e.icon || bn[e.type] || ""), g = I(() => ed(e.id)), w = I(() => nd(e.id, e.offset) + g.value), L = I(() => u.value + w.value), D = I(() => ({
      top: `${w.value}px`,
      zIndex: a.value
    }));
    function T() {
      e.duration !== 0 && ({ stop: d } = Xs(() => {
        U();
      }, e.duration));
    }
    function W() {
      d?.();
    }
    function U() {
      c.value = !1;
    }
    function X({ code: V }) {
      V === mn.esc && U();
    }
    return Ke(() => {
      T(), r(), c.value = !0;
    }), Ge(() => e.repeatNum, () => {
      W(), T();
    }), Ks(document, "keydown", X), uu(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: L,
      close: U
    }), (V, Y) => (P(), Mt(ti, {
      name: M(s).b("fade"),
      onBeforeLeave: V.onClose,
      onAfterLeave: (K) => V.$emit("destroy"),
      persisted: ""
    }, {
      default: zt(() => [
        Ve(x("div", {
          id: V.id,
          ref_key: "messageRef",
          ref: l,
          class: at([
            M(s).b(),
            { [M(s).m(V.type)]: V.type },
            M(s).is("center", V.center),
            M(s).is("closable", V.showClose),
            M(s).is("plain", V.plain),
            V.customClass
          ]),
          style: ct(M(D)),
          role: "alert",
          onMouseenter: W,
          onMouseleave: T
        }, [
          V.repeatNum > 1 ? (P(), Mt(M(Ku), {
            key: 0,
            value: V.repeatNum,
            type: M(y),
            class: at(M(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          M(b) ? (P(), Mt(M(kn), {
            key: 1,
            class: at([M(s).e("icon"), M(v)])
          }, {
            default: zt(() => [
              (P(), Mt(pe(M(b))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          se(V.$slots, "default", {}, () => [
            V.dangerouslyUseHTMLString ? (P(), $(jt, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              x("p", {
                class: at(M(s).e("content")),
                innerHTML: V.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), $("p", {
              key: 0,
              class: at(M(s).e("content"))
            }, F(V.message), 3))
          ]),
          V.showClose ? (P(), Mt(M(kn), {
            key: 2,
            class: at(M(s).e("closeBtn")),
            onClick: xt(U, ["stop"])
          }, {
            default: zt(() => [
              m(M(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [pn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var od = /* @__PURE__ */ zn(sd, [["__file", "message.vue"]]);
let ad = 1;
const ho = (n) => {
  const t = !n || ve(n) || Ue(n) || Xe(n) ? { message: n } : n, e = {
    ...Dt,
    ...t
  };
  if (!e.appendTo)
    e.appendTo = document.body;
  else if (ve(e.appendTo)) {
    let i = document.querySelector(e.appendTo);
    Zn(i) || (i = document.body), e.appendTo = i;
  }
  return os(Yt.grouping) && !e.grouping && (e.grouping = Yt.grouping), ke(Yt.duration) && e.duration === 3e3 && (e.duration = Yt.duration), ke(Yt.offset) && e.offset === 16 && (e.offset = Yt.offset), os(Yt.showClose) && !e.showClose && (e.showClose = Yt.showClose), e;
}, rd = (n) => {
  const t = Xt.indexOf(n);
  if (t === -1)
    return;
  Xt.splice(t, 1);
  const { handler: e } = n;
  e.close();
}, ld = ({ appendTo: n, ...t }, e) => {
  const i = `message_${ad++}`, s = t.onClose, o = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      s?.(), rd(u);
    },
    onDestroy: () => {
      yn(null, o);
    }
  }, r = m(od, a, Xe(a.message) || Ue(a.message) ? {
    default: Xe(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = e || Pe._context, yn(r, o), n.appendChild(o.firstElementChild);
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
}, Pe = (n = {}, t) => {
  if (!Se)
    return { close: () => {
    } };
  const e = ho(n);
  if (e.grouping && Xt.length) {
    const s = Xt.find(({ vnode: o }) => {
      var a;
      return ((a = o.props) == null ? void 0 : a.message) === e.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = e.type, s.handler;
  }
  if (ke(Yt.max) && Xt.length >= Yt.max)
    return { close: () => {
    } };
  const i = ld(e, t);
  return Xt.push(i), i.handler;
};
co.forEach((n) => {
  Pe[n] = (t = {}, e) => {
    const i = ho(t);
    return Pe({ ...i, type: n }, e);
  };
});
function cd(n) {
  for (const t of Xt)
    (!n || n === t.props.type) && t.handler.close();
}
Pe.closeAll = cd;
Pe._context = null;
const hd = ao(Pe, "$message"), uo = [
  "success",
  "info",
  "warning",
  "error"
], ud = Ie({
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
    type: lo
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Nt([
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
    type: Nt(Function),
    default: () => {
    }
  },
  onClose: {
    type: Nt(Function),
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
    values: [...uo, ""],
    default: ""
  },
  zIndex: Number
}), dd = {
  destroy: () => !0
}, gd = Ct({
  name: "ElNotification"
}), fd = /* @__PURE__ */ Ct({
  ...gd,
  props: ud,
  emits: dd,
  setup(n, { expose: t }) {
    const e = n, { ns: i, zIndex: s } = io("notification"), { nextZIndex: o, currentZIndex: a } = s, { Close: r } = Fu, l = O(!1);
    let c;
    const u = I(() => {
      const T = e.type;
      return T && bn[e.type] ? i.m(T) : "";
    }), d = I(() => e.type && bn[e.type] || e.icon), y = I(() => e.position.endsWith("right") ? "right" : "left"), v = I(() => e.position.startsWith("top") ? "top" : "bottom"), b = I(() => {
      var T;
      return {
        [v.value]: `${e.offset}px`,
        zIndex: (T = e.zIndex) != null ? T : a.value
      };
    });
    function g() {
      e.duration > 0 && ({ stop: c } = Xs(() => {
        l.value && L();
      }, e.duration));
    }
    function w() {
      c?.();
    }
    function L() {
      l.value = !1;
    }
    function D({ code: T }) {
      T === mn.delete || T === mn.backspace ? w() : T === mn.esc ? l.value && L() : g();
    }
    return Ke(() => {
      g(), o(), l.value = !0;
    }), Ks(document, "keydown", D), t({
      visible: l,
      close: L
    }), (T, W) => (P(), Mt(ti, {
      name: M(i).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (U) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: zt(() => [
        Ve(x("div", {
          id: T.id,
          class: at([M(i).b(), T.customClass, M(y)]),
          style: ct(M(b)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: g,
          onClick: T.onClick
        }, [
          M(d) ? (P(), Mt(M(kn), {
            key: 0,
            class: at([M(i).e("icon"), M(u)])
          }, {
            default: zt(() => [
              (P(), Mt(pe(M(d))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          x("div", {
            class: at(M(i).e("group"))
          }, [
            x("h2", {
              class: at(M(i).e("title")),
              textContent: F(T.title)
            }, null, 10, ["textContent"]),
            Ve(x("div", {
              class: at(M(i).e("content")),
              style: ct(T.title ? void 0 : { margin: 0 })
            }, [
              se(T.$slots, "default", {}, () => [
                T.dangerouslyUseHTMLString ? (P(), $(jt, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  x("p", { innerHTML: T.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), $("p", { key: 0 }, F(T.message), 1))
              ])
            ], 6), [
              [pn, T.message]
            ]),
            T.showClose ? (P(), Mt(M(kn), {
              key: 0,
              class: at(M(i).e("closeBtn")),
              onClick: xt(L, ["stop"])
            }, {
              default: zt(() => [
                m(M(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [pn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var md = /* @__PURE__ */ zn(fd, [["__file", "notification.vue"]]);
const Sn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Kn = 16;
let pd = 1;
const Ae = function(n = {}, t) {
  if (!Se)
    return { close: () => {
    } };
  (ve(n) || Ue(n)) && (n = { message: n });
  const e = n.position || "top-right";
  let i = n.offset || 0;
  Sn[e].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + Kn;
  }), i += Kn;
  const s = `notification_${pd++}`, o = n.onClose, a = {
    ...n,
    offset: i,
    id: s,
    onClose: () => {
      yd(s, e, o);
    }
  };
  let r = document.body;
  Zn(n.appendTo) ? r = n.appendTo : ve(n.appendTo) && (r = document.querySelector(n.appendTo)), Zn(r) || (r = document.body);
  const l = document.createElement("div"), c = m(md, a, Xe(a.message) ? a.message : Ue(a.message) ? () => a.message : null);
  return c.appContext = Ys(t) ? Ae._context : t, c.props.onDestroy = () => {
    yn(null, l);
  }, yn(c, l), Sn[e].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
uo.forEach((n) => {
  Ae[n] = (t = {}, e) => ((ve(t) || Ue(t)) && (t = {
    message: t
  }), Ae({ ...t, type: n }, e));
});
function yd(n, t, e) {
  const i = Sn[t], s = i.findIndex(({ vm: c }) => {
    var u;
    return ((u = c.component) == null ? void 0 : u.props.id) === n;
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
    for (let c = s; c < l; c++) {
      const { el: u, component: d } = i[c].vm, y = Number.parseInt(u.style[r], 10) - a - Kn;
      d.props.offset = y;
    }
}
function wd() {
  for (const n of Object.values(Sn))
    n.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ae.closeAll = wd;
Ae._context = null;
const vd = ao(Ae, "$notify"), Et = {
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
    i === "center" ? hd({
      message: t,
      type: e,
      duration: s,
      showClose: o,
      grouping: !0,
      customClass: `app-toast app-toast--${e}`
    }) : vd({
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
}, xd = ["disabled"], kd = {
  key: 0,
  class: "custom-button__loading"
}, bd = /* @__PURE__ */ Ct({
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
    return (e, i) => (P(), $("button", {
      class: at([
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
      n.loading ? (P(), $("div", kd, i[1] || (i[1] = [
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
      ]))) : H("v-if", !0),
      se(e.$slots, "default", {}, void 0, !0)
    ], 10, xd));
  }
}), te = /* @__PURE__ */ Je(bd, [["__scopeId", "data-v-5d7f8015"]]), Sd = {
  key: 1,
  class: "splitter-panel second-panel"
}, Md = /* @__PURE__ */ Ct({
  name: "Splitter",
  __name: "index",
  props: {
    defaultSize: { default: "0%" },
    minSize: { default: "0%" },
    maxSize: { default: "100%" },
    firstCollapsed: { type: Boolean, default: !1 },
    secondCollapsed: { type: Boolean, default: !1 }
  },
  setup(n) {
    const t = n, e = O(null), i = (D) => typeof D == "string" && D.includes("%"), s = (D) => typeof D == "string" ? parseFloat(D.replace("%", "")) : D, o = O(s(t.defaultSize)), a = I(() => i(t.defaultSize)), r = I(() => a.value ? `${o.value}%` : `${o.value}px`), l = I(() => t.firstCollapsed ? "0px" : t.secondCollapsed ? "100%" : r.value);
    let c = !1, u = 0, d = 0;
    const y = () => e.value?.offsetWidth || 0, v = (D) => {
      const T = y();
      return D / T * 100;
    }, b = (D) => {
      const T = y();
      return D * T / 100;
    }, g = (D) => {
      D.preventDefault(), D.stopPropagation(), !(!e.value || t.firstCollapsed || t.secondCollapsed) && (c = !0, u = D.clientX, d = a.value ? b(o.value) : o.value, document.addEventListener("mousemove", w), document.addEventListener("mouseup", L));
    }, w = (D) => {
      if (D.preventDefault(), D.stopPropagation(), !c || !e.value) return;
      const T = D.clientX - u;
      let W = d + T;
      const U = a.value ? b(s(t.minSize)) : s(t.minSize), X = a.value ? b(s(t.maxSize)) : s(t.maxSize);
      W = Math.max(U, Math.min(X, W)), o.value = a.value ? v(W) : W;
    }, L = () => {
      c = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", L);
    };
    return Qn(() => {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", L);
    }), (D, T) => (P(), $(
      "main",
      {
        ref_key: "splitterRef",
        ref: e,
        class: "splitter-container"
      },
      [
        x(
          "div",
          {
            class: "splitter-panel first-panel",
            style: ct({ width: M(l), minWidth: M(l) })
          },
          [
            se(D.$slots, "first", {}, void 0, !0)
          ],
          4
          /* STYLE */
        ),
        !D.firstCollapsed && !D.secondCollapsed ? (P(), $(
          "div",
          {
            key: 0,
            class: "splitter-divider",
            style: ct({ left: M(l) }),
            role: "separator",
            "aria-orientation": "vertical",
            onMousedown: g
          },
          T[0] || (T[0] = [
            x(
              "div",
              { class: "splitter-divider-line" },
              null,
              -1
              /* HOISTED */
            )
          ]),
          36
          /* STYLE, NEED_HYDRATION */
        )) : H("v-if", !0),
        D.secondCollapsed ? H("v-if", !0) : (P(), $("div", Sd, [
          se(D.$slots, "second", {}, void 0, !0)
        ]))
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), Cd = /* @__PURE__ */ Je(Md, [["__scopeId", "data-v-79af4cc0"]]), _d = `你正在执行图片原文转写。像在 AI 聊天中直接阅读图片一样，按视觉阅读顺序从上到下完整读取所有可见文字。
要求：
1. 忠实保留原语言、标点、数字、大小写、标题、段落、列表、代码和表格内容，不翻译、不概括、不解释；
2. 标题、说明文字、每个独立段落和每个列表项之间各空一行，保持图片本身的语义分段；
3. 只输出纯文本原文，不输出 JSON，不添加 Markdown 标题、加粗、代码围栏或“识别结果”等额外说明；
4. 输出前重新检查图片的左、右、上、下区域，确保没有只读取标题、漏掉小字、列表项或末尾内容。`, ln = {
  auto: "自动判断图片文字语言",
  zh: "优先按简体中文识别",
  "zh-tw": "优先按繁体中文识别",
  en: "优先按英文识别",
  ja: "优先按日文识别",
  ko: "优先按韩文识别"
}, Td = /* @__PURE__ */ new Set([
  "title",
  "paragraph",
  "list",
  "code",
  "table"
]), qn = (n, t, e) => typeof n == "string" && Td.has(n) ? n : e === 0 && t.length <= 80 && !/[。！？.!?]\s*$/.test(t) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/m.test(t) ? "list" : "paragraph", zd = /^\s*(?:[-*+•·]|\d+[.)、）])\s+/, cn = (n) => n.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s*>\s?/, "").replace(/(\*\*|__|~~)(.*?)\1/g, "$2").trim(), Rd = (n) => {
  const e = n.trim().replace(/^```(?:text|plaintext|markdown)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").split(/\n{2,}/).map((s) => s.trim()).filter(Boolean), i = [];
  for (const s of e) {
    const o = s.split(/\n/).map((c) => c.trim()).filter(Boolean);
    if (o.length === 0) continue;
    if (o.every((c) => zd.test(c))) {
      for (const c of o)
        i.push({
          type: "list",
          text: cn(c)
        });
      continue;
    }
    const a = cn(o[0]);
    if (i.length === 0 && o.length > 1 && a.length <= 100 && !/[。！？.!?]\s*$/.test(a)) {
      i.push({ type: "title", text: a });
      const c = o.slice(1).map(cn).join(" ").trim();
      c && i.push({
        type: qn(void 0, c, i.length),
        text: c
      });
      continue;
    }
    const l = o.map(cn).join(" ").trim();
    l && i.push({
      type: qn(void 0, l, i.length),
      text: l
    });
  }
  return i;
}, Ld = (n) => {
  const t = n.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (t?.startsWith("{") && t.endsWith("}") || t?.startsWith("[") && t.endsWith("]"))
    return t;
  const e = n.indexOf("{"), i = n.lastIndexOf("}"), s = n.indexOf("["), o = n.lastIndexOf("]");
  return s >= 0 && o > s && (e < 0 || s < e) ? n.slice(s, o + 1) : e >= 0 && i > e ? n.slice(e, i + 1) : null;
}, Pd = (n) => {
  const t = n.trim();
  if (!t)
    throw new Error("AI_OCR_EMPTY_RESPONSE");
  const e = Ld(t);
  let i = null;
  if (e)
    try {
      i = JSON.parse(e);
    } catch {
      i = null;
    }
  const s = typeof i?.text == "string" ? i.text.trim() : "", a = (Array.isArray(i?.sections) ? i.sections : []).map((c, u) => {
    if (!c || typeof c != "object") return null;
    const d = c, y = typeof d.text == "string" ? d.text.trim() : "";
    return y ? {
      type: qn(d.type, y, u),
      text: y
    } : null;
  }).filter((c) => !!c), r = a.length > 0 ? a : Rd(s || t);
  return {
    text: r.map((c) => c.text).join(`

`) || s || t,
    sections: r
  };
}, Jn = (n) => n.replace(/[\s\p{P}\p{S}]/gu, "").length, Ad = (n) => Jn(n.text) < 180 && n.sections.length <= 2, ys = (n) => n && n.split(/[\\/]/).filter(Boolean).pop() || "", Dd = async (n, t) => {
  const e = await hr(), i = await ur(e);
  if (!i.selectedMmprojPath)
    throw new Error("AI_OCR_VISION_MODEL_UNAVAILABLE");
  const s = async (u) => {
    const d = await Rs({
      messages: [
        { role: "system", content: _d },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: u ? `${ln[t] || ln.auto}。上一次转写可能不完整，请重新独立阅读整张图片，尤其检查标题之后、列表和底部的所有文字。只输出完整原文。` : `${ln[t] || ln.auto}。请完整转写这张图片中的全部文字，只输出原文。`
            },
            {
              type: "image_url",
              image_url: { url: n }
            }
          ]
        }
      ],
      enableThinking: !1
    });
    return Pd(d.content);
  }, o = await s(!1), a = Ad(o) ? await s(!0) : null, r = a && Jn(a.text) > Jn(o.text) ? a : o, l = await zs().catch(() => null), c = ys(l?.modelPath) || ys(i.selectedModelPath) || "Local Vision";
  return {
    text: r.text,
    sections: r.sections,
    modelName: c
  };
};
function go(n) {
  if (n.length <= 1) return [...n];
  const t = n.map((a) => Math.max(a.height, a.lineHeight, a.fontSize, 1)).sort((a, r) => a - r), e = t[Math.floor(t.length / 2)], i = Math.max(4, e * 0.6), s = [], o = [...n].sort((a, r) => {
    const l = a.y + Math.max(a.height, 1) / 2, c = r.y + Math.max(r.height, 1) / 2;
    return l - c || a.x - r.x;
  });
  for (const a of o) {
    const r = a.y + Math.max(a.height, 1) / 2, l = s[s.length - 1];
    if (l && Math.abs(l.centerY - r) <= i) {
      const c = l.blocks.length;
      l.blocks.push(a), l.centerY = (l.centerY * c + r) / (c + 1);
      continue;
    }
    s.push({ centerY: r, blocks: [a] });
  }
  return s.flatMap(
    (a) => a.blocks.sort((r, l) => r.x - l.x || r.y - l.y)
  );
}
async function Id(n) {
  return n.toDataURL("image/png");
}
async function fo(n, t = "auto") {
  const e = Date.now();
  wt.log("[RapidOCR] recognizeFromImageData start", {
    imageDataLength: n.length,
    language: t
  });
  try {
    const i = await S(
      "recognize_text_from_image",
      {
        imageData: n,
        engine: "rapidocr",
        language: t
      }
    ), s = mo(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || si(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return wt.log("[RapidOCR] recognizeFromImageData success", {
      durationMs: Date.now() - e,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw A.error("[OCR] RapidOCR recognizeFromImageData failed", i), wt.log("[RapidOCR] recognizeFromImageData failed", {
      durationMs: Date.now() - e,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
function mo(n) {
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
async function Od(n) {
  const t = Date.now(), e = await Id(n);
  wt.log("[RapidOCR] recognizeFromCanvas start", {
    width: n.width,
    height: n.height
  });
  try {
    const i = await S("recognize_text_from_image", {
      imageData: e,
      engine: "rapidocr",
      language: "auto"
    }), s = mo(i.blocks), o = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || s.map((r) => r.text).join(`
`), a = {
      blocks: s,
      full_text: o,
      text: o,
      language: typeof i.language == "string" && i.language || si(o),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return wt.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw A.error("[OCR] RapidOCR recognizeFromCanvas failed", i), wt.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function Ed() {
  return Promise.resolve();
}
async function $d() {
  return Promise.resolve();
}
const Wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: Od,
  recognizeFromImageData: fo,
  sortOcrTextBlocksByReadingOrder: go,
  terminateOcr: $d,
  warmupOcr: Ed
}, Symbol.toStringTag, { value: "Module" })), Bd = ["src", "alt"], Nd = { class: "ocr-header" }, Hd = {
  class: "ocr-title-copy",
  "data-tauri-drag-region": ""
}, jd = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, Fd = { "data-tauri-drag-region": "" }, Vd = {
  class: "ocr-source-inline",
  "data-tauri-drag-region": ""
}, Ud = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Yd = { "data-tauri-drag-region": "" }, Xd = { class: "ocr-title-actions" }, Zd = ["title"], Gd = { class: "ocr-window-controls" }, Kd = ["title"], qd = ["title"], Jd = ["title"], Qd = ["title"], tg = { class: "ocr-preview-pane" }, eg = { class: "ocr-pane-header" }, ng = { class: "ocr-pane-heading" }, ig = { class: "ocr-pane-header-actions" }, sg = ["title"], og = { class: "ocr-preview-canvas" }, ag = ["src", "alt"], rg = ["aria-label"], lg = ["onClick"], cg = { class: "ocr-record-pane" }, hg = { class: "ocr-pane-header result-header" }, ug = { class: "ocr-pane-heading" }, dg = { key: 0 }, gg = { key: 1 }, fg = { class: "ocr-pane-header-actions" }, mg = ["title"], pg = {
  key: 0,
  class: "ocr-state"
}, yg = { class: "ocr-ai-orbit" }, wg = {
  key: 1,
  class: "ocr-state error"
}, vg = {
  key: 2,
  class: "ocr-state muted"
}, xg = {
  key: 0,
  class: "ocr-selection-translation"
}, kg = { class: "ocr-translation-section" }, bg = { class: "ocr-translation-label" }, Sg = { class: "ocr-translation-source" }, Mg = { class: "ocr-translation-section result" }, Cg = { class: "ocr-translation-label" }, _g = ["textContent"], Tg = ["onClick"], zg = ["textContent"], Rg = {
  key: 0,
  class: "ocr-record-translation"
}, Lg = { class: "ocr-translation-label" }, Pg = ["textContent"], Ag = { class: "ocr-action-bar" }, Dg = ["onClick"], Ig = { class: "engine-label" }, Og = ["onClick"], Eg = { class: "engine-label" }, $g = { class: "ocr-engine-btn-group relative" }, Wg = {
  key: 2,
  class: "zoom-info"
}, Bg = 14, Ng = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', Hg = /* @__PURE__ */ Ct({
  __name: "index",
  setup(n) {
    const { t } = ws(), e = O(), i = O(null), s = O(), o = O(), a = O(), r = /* @__PURE__ */ new Map(), l = O(""), c = O(""), u = O("pin"), d = O(""), y = O([]), v = O([]), b = O(null), g = O(!1), w = O(""), L = O("pending"), D = O(""), T = O(""), W = O(0), U = O(0), X = O({ width: 0, height: 0 }), V = O(1);
    let Y = null;
    const K = O(null), q = O(!1), J = O(!1), tt = O(!1), ot = O(), vt = O({}), it = O("bing"), j = O(!1), nt = O(), pt = O({}), rt = O("auto"), dt = I(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: t("translate.offlineMark")
      },
      {
        value: "local-ai",
        label: t("translate.localAiTranslate"),
        short: "AI"
      }
    ]), kt = I(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), E = (h) => {
      const p = typeof h == "string" ? h.trim().toLowerCase() : "";
      return p === "auto" || p === "zh" || p === "zh-tw" || p === "en" || p === "ja" || p === "ko" ? p : "auto";
    }, Rt = I(() => kt.value.find((h) => h.value === rt.value)?.label || t("pin.ocrLanguageAuto")), N = I(() => t("pin.translationResult")), _t = (h, p) => {
      if (!h) {
        p.value = {};
        return;
      }
      const _ = h.getBoundingClientRect(), G = 180, Z = 8, mt = Math.min(
        Math.max(
          _.left + _.width / 2,
          Z + G / 2
        ),
        window.innerWidth - Z - G / 2
      );
      p.value = {
        left: `${mt}px`,
        bottom: `${Math.max(8, window.innerHeight - _.top + 8)}px`
      };
    }, gt = () => {
      tt.value && _t(ot.value, vt), j.value && _t(
        nt.value,
        pt
      );
    }, Lt = O(1), Wt = O(!1), Zt = O(!1);
    let Ht = null;
    const C = O(!1), et = O({ x: 0, y: 0 }), ht = O(!0), lt = O({ width: 0, height: 0 });
    let Tt = null, yt = 0;
    const Vt = O(""), k = I(() => ({
      width: "100%",
      height: u.value === "ocr" ? "auto" : "100%",
      flex: u.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: u.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), B = I(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), ut = I(() => W.value > 0 && U.value > 0 ? `${W.value} × ${U.value}` : t("pin.screenshotPreview")), ft = I(() => g.value ? t("pin.recognizing") : w.value ? t("pin.recognizeFailed") : d.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Q = I(() => g.value ? t("pin.aiRecognizing") : (L.value === "ai", t("pin.aiVision"))), St = I(() => {
      const h = Q.value;
      return D.value ? `${h} · ${D.value}` : h;
    }), Pt = I(
      () => y.value.filter((h) => h.selected)
    ), It = I(() => g.value && !d.value.trim() && v.value.length === 0 ? t("pin.selectableTextPreparing") : v.value.length > 0 || d.value.trim() ? t("pin.nativeTextSelectionHint") : "");
    let Qt;
    const oe = /* @__PURE__ */ new Map(), Gt = (h) => {
      const p = oe.get(h);
      if (p !== void 0) return p;
      if (Qt === void 0 && (Qt = document.createElement("canvas").getContext("2d")), !Qt) return 0;
      Qt.font = `${Bg}px ${Ng}`;
      const _ = Qt.measureText(h).width;
      return oe.set(h, _), _;
    }, Oe = () => {
      const h = o.value, p = h?.naturalWidth || W.value, _ = h?.getBoundingClientRect().width || 0;
      if (p <= 0 || _ <= 0) return;
      const G = _ / p;
      Math.abs(V.value - G) > 1e-3 && (V.value = G);
    }, po = () => {
      Y?.disconnect(), s.value && (Y = new ResizeObserver(Oe), Y.observe(s.value), Oe());
    }, yo = (h) => W.value <= 0 || U.value <= 0 ? { display: "none" } : {
      position: "absolute",
      left: `${h.x / W.value * 100}%`,
      top: `${h.y / U.value * 100}%`,
      width: `${h.width / W.value * 100}%`,
      height: `${h.height / U.value * 100}%`
    }, wo = (h) => {
      const p = Gt(h.text), _ = h.width * V.value;
      return {
        transform: `scaleX(${p > 0 && _ > 0 ? _ / p : 1})`
      };
    }, pi = (h) => h.replace(/[\s\p{P}\p{S}]/gu, "").toLowerCase(), vo = I(
      () => y.value.map((h) => ({
        id: h.id,
        normalized: pi(h.text)
      }))
    ), yi = I(() => {
      const h = /* @__PURE__ */ new Map(), p = vo.value;
      for (let _ = 0; _ < v.value.length; _++) {
        const G = pi(v.value[_].text);
        let Z = null;
        if (G.length >= 2) {
          for (const mt of p)
            if (mt.normalized.includes(G)) {
              Z = mt.id;
              break;
            }
        }
        h.set(_, Z);
      }
      return h;
    }), xo = I(() => {
      const h = /* @__PURE__ */ new Set();
      if (!b.value) return h;
      for (const [p, _] of yi.value)
        _ === b.value && h.add(p);
      return h;
    }), ko = (h, p) => {
      p instanceof HTMLElement ? r.set(h, p) : r.delete(h);
    }, bo = (h) => {
      ee(() => {
        const p = a.value, _ = r.get(h);
        if (!p || !_) return;
        const G = p.getBoundingClientRect(), Z = _.getBoundingClientRect(), mt = 8, At = G.top + mt, Ot = G.bottom - mt;
        Z.top < At ? p.scrollBy({
          top: Z.top - At,
          behavior: "smooth"
        }) : Z.bottom > Ot && p.scrollBy({
          top: Z.bottom - Ot,
          behavior: "smooth"
        });
      });
    }, So = (h) => {
      const p = yi.value.get(h);
      p && b.value === p ? b.value = null : (b.value = p ?? null, p && bo(p));
    }, Mo = (h) => {
      b.value = b.value === h ? null : h;
    }, wi = I(() => Pt.value.length), Co = (h) => (h.translatedText || h.text).trim(), vi = (h) => h.map(Co).filter(Boolean).join(`

`), Qe = () => {
      d.value = vi(y.value);
    }, _o = () => {
      const h = /* @__PURE__ */ new Date(), p = (_) => _.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${h.getFullYear()}-${p(h.getMonth() + 1)}-${p(h.getDate())} ${p(h.getHours())}.${p(h.getMinutes())}.${p(h.getSeconds())}.png`;
    }, To = I(() => {
      const h = Math.min(
        lt.value.width,
        lt.value.height
      );
      let p = 1;
      return h < 300 && (p = Math.max(0.4, h / 300)), {
        left: `${et.value.x}px`,
        top: `${et.value.y}px`,
        transform: `scale(${p})`,
        transformOrigin: "top left"
      };
    }), zo = (h) => {
      l.value = h, W.value = 0, U.value = 0, X.value = { width: 0, height: 0 }, u.value === "ocr" && (T.value = _o()), c.value && (URL.revokeObjectURL(c.value), c.value = "");
      try {
        const p = h.split(",")[1] || h, _ = h.match(/data:([^;]+);/), G = _ ? _[1] : "image/png", Z = atob(p), mt = new Uint8Array(Z.length);
        for (let Ot = 0; Ot < Z.length; Ot++)
          mt[Ot] = Z.charCodeAt(Ot);
        const At = new Blob([mt], { type: G });
        c.value = URL.createObjectURL(At);
      } catch (p) {
        A.error("[PIN窗口] 转换 Blob URL 失败", p), c.value = h;
      }
    }, xi = async () => {
      await ee(), await new Promise((h) => requestAnimationFrame(() => h()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (h) {
        A.error("[PIN窗口] 发送 ready 事件失败", h);
      }
    }, ki = (h) => {
      if (!h?.imageData)
        return A.error("[PIN窗口] 收到的事件数据格式不正确", h), !1;
      const p = h.mode === "ocr" ? "ocr" : "pin", _ = `${p}:${h.imageData.length}`;
      return _ === Vt.value ? !1 : (Vt.value = _, u.value = p, zo(h.imageData), Ut(), u.value === "ocr" ? (bi(h.text || ""), w.value = "", Rn()) : (yt++, g.value = !1, w.value = "", d.value = "", y.value = [], v.value = [], b.value = null), !0);
    }, Ro = (h) => {
      const p = Do(h);
      p.length === 0 && !h.text.trim() || (y.value = p.length > 0 ? p : Si(h.text), Qe(), L.value = "ai", D.value = h.modelName);
    }, Lo = async (h) => {
      try {
        const p = await fo(
          l.value,
          rt.value === "auto" ? "auto" : rt.value
        );
        if (h !== yt) return;
        v.value = go(
          p.blocks.filter((_) => _.text.trim())
        ), wt.log("[Pin RapidOCR] text blocks ready", {
          requestId: h,
          blocks: v.value.length,
          confidence: p.confidence
        });
      } catch (p) {
        if (h !== yt) return;
        v.value = [], wt.log("[Pin RapidOCR] text blocks failed (fallback)", {
          requestId: h,
          error: p instanceof Error ? `${p.name}: ${p.message}` : String(p)
        });
      }
    }, Rn = async () => {
      if (!l.value) return;
      const h = ++yt;
      K.value = null, g.value = !0, w.value = "", L.value = "pending", D.value = "", v.value = [], b.value = null;
      const p = Date.now();
      wt.log("[Pin OCR] recognize start", {
        requestId: h,
        imageDataLength: l.value.length,
        imageWidth: W.value,
        imageHeight: U.value,
        language: rt.value
      }), Lo(h);
      try {
        const _ = await Dd(
          l.value,
          rt.value
        );
        if (h !== yt) return;
        if (!_.text.trim())
          throw new Error("AI_OCR_EMPTY_RESPONSE");
        Ro(_), wt.log("[Pin AI OCR] recognize success", {
          requestId: h,
          durationMs: Date.now() - p,
          engine: L.value,
          textLength: d.value.length,
          textPreview: d.value.slice(0, 300)
        });
      } catch (_) {
        if (h !== yt) return;
        if (A.error("[PIN窗口] AI OCR 识别失败", _), wt.log("[Pin AI OCR] recognize failed", {
          requestId: h,
          durationMs: Date.now() - p,
          error: Io(_)
        }), d.value.trim()) {
          w.value = "";
          return;
        }
        w.value = t("pin.recognizeFailed"), d.value = "", y.value = [], b.value = null, Et.error(t("pin.recognizeFailed"));
      } finally {
        h === yt && (g.value = !1);
      }
    }, bi = (h) => {
      const p = h.trim();
      d.value = p, y.value = Si(p), v.value = [], b.value = null;
    }, Si = (h) => h.split(/\n{2,}|\n/).map((p, _) => Ao(p, _)).filter((p) => p.text.trim()), Po = (h, p) => p === 0 && h.length <= 80 && !/[。！？.!?]\s*$/.test(h) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/.test(h) ? "list" : "paragraph", Ao = (h, p) => ({
      id: `plain-${Date.now()}-${p}`,
      kind: Po(h, p),
      text: h.trim(),
      sourceText: h.trim(),
      translatedText: "",
      confidence: 0,
      selected: !1
    }), Do = (h) => {
      const p = Date.now();
      return h.sections.map((_, G) => ({
        id: `ai-${p}-${G}`,
        kind: _.type,
        text: _.text.trim(),
        sourceText: _.text.trim(),
        translatedText: "",
        confidence: 0,
        selected: !1
      })).filter((_) => _.text);
    }, Io = (h) => h instanceof Error ? `${h.name}: ${h.message}
${h.stack || ""}`.trim() : typeof h == "string" ? h : JSON.stringify(h) || String(h), Ln = async () => {
      const h = $o();
      h && await Oo(h);
    }, Oo = async (h) => {
      try {
        await navigator.clipboard.writeText(h), Et.success(t("pin.copySuccess"));
      } catch (p) {
        A.error("[PIN窗口] 复制识别文本失败", p), Et.error(t("pin.copyFailed"));
      } finally {
        Ut();
      }
    }, Eo = async () => {
      Qe();
      const h = d.value.trim();
      if (h)
        try {
          await S("save_text_to_file", { text: h }), Et.success(t("pin.saveSuccess"));
        } catch (p) {
          p !== "SAVE_CANCELLED" && (A.error("[PIN窗口] 保存文本失败", p), Et.error(t("pin.saveFailed")));
        }
    }, $o = () => {
      const h = Mi();
      if (h)
        return h;
      const p = vi(
        Pt.value
      );
      return p || (Qe(), d.value.trim());
    }, Mi = () => {
      const h = window.getSelection(), p = e.value?.querySelector(".ocr-reading-surface");
      if (!h || h.rangeCount === 0 || !p)
        return "";
      for (let _ = 0; _ < h.rangeCount; _ += 1) {
        const Z = h.getRangeAt(_).commonAncestorContainer;
        if (p.contains(Z))
          return h.toString().trim();
      }
      return "";
    }, Wo = (h) => {
      const p = h.target;
      !p || !K.value || (K.value.translatedText = p.innerText.trim());
    }, Bo = async () => {
      tt.value = !tt.value, j.value = !1, tt.value && (await ee(), gt());
    }, No = (h) => {
      it.value = h, tt.value = !1, S("set_translation_engine", { engine: h }).catch((p) => {
        A.error("[PIN窗口] 保存翻译引擎设置失败", p);
      });
    }, Ci = async () => {
      j.value = !j.value, tt.value = !1, j.value && (await ee(), gt());
    }, Ho = (h) => {
      rt.value = h, j.value = !1, S("set_ocr_language", { language: h }).catch((p) => {
        A.error("[PIN窗口] 保存 OCR 语言设置失败", p);
      }), l.value && Rn();
    }, jo = async () => {
      if (Ut(), tt.value = !1, j.value = !1, !d.value.trim() || J.value) return;
      const h = Mi(), p = h ? [] : Pt.value.length > 0 ? Pt.value : y.value, _ = h || (p.length > 0 ? p.map((Z) => Z.text).join(`

`) : d.value), G = ge(_);
      if (!ze(G)) {
        Et.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      J.value = !0;
      try {
        if (await Fo(), h) {
          const Z = await Pn(
            h,
            G
          );
          Z && (K.value = {
            sourceText: h,
            translatedText: Z.trim()
          }), Et.success(t("pin.translateSuccess"));
        } else if (p.length > 0) {
          for (const Z of p) {
            const mt = await Pn(
              Z.text,
              G
            );
            mt && (Z.translatedText = mt.trim());
          }
          Qe(), Et.success(t("pin.translateSuccess"));
        } else {
          const Z = await Pn(
            d.value,
            G
          );
          Z && bi(Z), Et.success(t("pin.translateSuccess"));
        }
      } catch (Z) {
        A.error("[PIN窗口] 翻译失败", Z);
        const mt = Z instanceof Error ? Z.message : String(Z);
        if (mt !== "翻译已取消") {
          const At = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          Et.error(
            At.includes(mt) ? mt : t("pin.translateFailed")
          );
        }
      } finally {
        J.value = !1;
      }
    }, Fo = async () => {
      if (it.value !== "offline")
        return;
      if ((await ii()).isCached)
        await Ts();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await S("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, Pn = async (h, p) => {
      const _ = h.trim();
      return _ ? it.value === "offline" ? _s(_) : await S("translate_text", {
        text: _,
        from: "auto",
        to: p === "zh" ? "en" : "zh",
        engine: it.value
      }) : "";
    }, Vo = (h) => {
      tn(h);
    }, Uo = async () => {
      if (!i.value) return;
      const h = i.value;
      typeof h.minimize == "function" && await h.minimize();
    }, Yo = async () => {
      if (!i.value) return;
      const h = i.value;
      (typeof h.isMaximized == "function" ? await h.isMaximized() : !1) && typeof h.unmaximize == "function" ? await h.unmaximize() : typeof h.maximize == "function" && await h.maximize();
    }, _i = async (h) => {
      const p = h.target;
      if (W.value = p.naturalWidth, U.value = p.naturalHeight, u.value === "ocr" && (await ee(), po()), i.value && X.value.width === 0)
        try {
          const _ = await i.value.innerSize(), G = await i.value.scaleFactor(), Z = _.toLogical(G);
          X.value = {
            width: Z.width,
            height: Z.height
          };
        } catch (_) {
          A.error("[PIN窗口] 获取窗口初始尺寸失败", _);
        }
    }, Ti = async (h) => {
      if (h.ctrlKey && (h.preventDefault(), h.stopPropagation(), !Zt.value && i.value)) {
        Zt.value = !0;
        try {
          const _ = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), G = h.deltaY > 0 ? 0.95 : 1.05, Z = _.width, mt = _.height, At = Math.round(Z * G), Ot = Math.round(mt * G), Ee = 50, ae = 3e3;
          if (At >= Ee && At <= ae && Ot >= Ee && Ot <= ae) {
            if (await i.value.setSize(new He(At, Ot)), W.value > 0) {
              const ue = Math.round(
                At / W.value * 100
              );
              Lt.value = ue / 100;
            }
            Wt.value = !0, An();
          }
        } catch (p) {
          A.error("[PIN窗口] 窗口缩放失败", p);
        } finally {
          setTimeout(() => {
            Zt.value = !1;
          }, 100);
        }
      }
    }, Xo = (h) => {
      u.value === "ocr" && h.ctrlKey && Ti(h);
    }, An = () => {
      Wt.value = !0, Ht && clearTimeout(Ht), Ht = setTimeout(() => {
        Wt.value = !1;
      }, 1e3);
    }, tn = (h) => {
      h.preventDefault(), h.stopPropagation(), C.value = !1, setTimeout(() => {
        const p = window.innerWidth, _ = window.innerHeight;
        lt.value = { width: p, height: _ };
        const G = Math.min(p, _);
        let Z = 1;
        G < 300 && (Z = Math.max(0.4, G / 300));
        const mt = u.value === "ocr" ? 176 : 150, At = u.value === "ocr" && d.value.trim() ? 222 : 180, Ot = mt * Z, Ee = At * Z;
        let ae = h.clientX, ue = h.clientY;
        ae + Ot > p && (ae = p - Ot - 5), ue + Ee > _ && (ue = _ - Ee - 5), ae = Math.max(5, ae), ue = Math.max(5, ue), et.value = { x: ae, y: ue }, C.value = !0;
      }, 10);
    }, Ut = () => {
      C.value = !1, tt.value = !1, j.value = !1;
    }, zi = async () => {
      i.value && (ht.value = !ht.value, await i.value.setAlwaysOnTop(ht.value), Ut());
    }, Ri = async (h) => {
      if (i.value && !Zt.value) {
        Zt.value = !0;
        try {
          const _ = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), G = Math.round(_.width * h), Z = Math.round(_.height * h), mt = 50, At = 3e3;
          G >= mt && G <= At && Z >= mt && Z <= At && (await i.value.setSize(new He(G, Z)), W.value > 0 && (Lt.value = G / W.value), An());
        } catch (p) {
          A.error("[PIN窗口] 键盘缩放失败", p);
        } finally {
          setTimeout(() => {
            Zt.value = !1;
          }, 100);
        }
      }
    }, Li = async () => {
      if (i.value && X.value.width > 0 && X.value.height > 0)
        try {
          await i.value.setSize(
            new He(
              X.value.width,
              X.value.height
            )
          ), Lt.value = 1, An();
        } catch (h) {
          A.error("[PIN窗口] 重置缩放失败", h);
        }
      Ut();
    }, Zo = async () => {
      try {
        const h = l.value;
        Ut(), i.value && await i.value.hide(), await S("copy_image_to_clipboard", { imageData: h }), Et.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (h) {
        A.error("[PIN窗口] 复制图片失败", h), Et.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, Go = async () => {
      const h = l.value;
      Ut(), i.value && await i.value.hide();
      try {
        await S("save_pin_image", { imageData: h }), Et.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (p) {
        p === "SAVE_CANCELLED" ? (A.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (A.error("[PIN窗口] 保存图片失败", p), Et.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, Dn = async () => {
      i.value && await i.value.close();
    }, Pi = (h) => {
      h.preventDefault();
    }, Ai = async (h) => {
      if (h.button === 0 && i.value) {
        const p = h.target;
        if (p.hasAttribute("data-tauri-drag-region") || p.closest("[data-tauri-drag-region]")) {
          if (p.closest("button") || p.closest(".ocr-view-original"))
            return;
          try {
            await i.value.startDragging();
          } catch (_) {
            A.error("[PIN窗口] 拖拽窗口失败", _);
          }
        }
      }
    }, Di = (h) => {
      const p = h.target;
      !p.closest(".context-menu") && !p.closest(".ocr-engine-btn-group") && !p.closest(".translate-btn-group") && !p.closest(".ocr-floating-menu") && Ut();
    }, Ii = (h) => {
      if (h.altKey && h.code === "Space") {
        h.preventDefault(), h.stopPropagation();
        return;
      }
      h.key === "Escape" ? C.value ? Ut() : Dn() : (h.ctrlKey || h.metaKey) && (h.key === "0" ? (h.preventDefault(), Li()) : h.key === "=" || h.key === "+" ? (h.preventDefault(), Ri(1.05)) : h.key === "-" && (h.preventDefault(), Ri(0.95)));
    }, Ko = async () => {
      if (i.value)
        try {
          const h = await S(
            "get_pin_window_data",
            { label: i.value.label }
          );
          h && ki(h) && await xi();
        } catch (h) {
          A.error("[PIN窗口] 主动获取窗口数据失败", h);
        }
    };
    return Ke(async () => {
      if (e.value) {
        try {
          const [h, p] = await Promise.all([
            S("get_translation_engine"),
            S("get_ocr_language")
          ]);
          (h === "google" || h === "bing" || h === "offline" || h === "local-ai") && (it.value = h), rt.value = E(p);
        } catch (h) {
          A.error("[PIN窗口] 读取默认 OCR/翻译设置失败", h);
        }
        try {
          i.value = qe.getCurrent();
          try {
            Tt = await i.value.listen(
              "pin-window-data",
              (h) => {
                ki(h.payload) && xi();
              }
            ), await Ko();
          } catch (h) {
            A.error("[PIN窗口] 设置事件监听失败", h);
          }
        } catch (h) {
          if (A.error("[PIN窗口] 初始化错误", h), i.value)
            try {
              await i.value.show();
            } catch (p) {
              A.error("[PIN窗口] 显示窗口失败", p);
            }
        }
        document.addEventListener("click", Di), document.addEventListener("keydown", Ii, !0), document.addEventListener("contextmenu", Pi, !0), window.addEventListener("resize", gt), window.addEventListener("resize", Oe), window.addEventListener("scroll", gt, !0), window.addEventListener("blur", Ut), document.body && (document.body.oncontextmenu = (h) => (h.preventDefault(), !1));
      }
    }), Qn(() => {
      c.value && URL.revokeObjectURL(c.value), Tt && Tt(), document.removeEventListener("click", Di), document.removeEventListener("keydown", Ii, !0), document.removeEventListener("contextmenu", Pi, !0), window.removeEventListener("resize", gt), window.removeEventListener("resize", Oe), window.removeEventListener("scroll", gt, !0), window.removeEventListener("blur", Ut), Y?.disconnect(), document.body && (document.body.oncontextmenu = null), Ht && clearTimeout(Ht);
    }), (h, p) => (P(), $(
      "div",
      {
        class: at(["pin-container", { "ocr-mode": u.value === "ocr" }]),
        ref_key: "containerRef",
        ref: e,
        onContextmenu: xt(tn, ["prevent"]),
        onWheelCapture: Xo
      },
      [
        H(" 图片容器 "),
        c.value && u.value === "pin" ? (P(), $(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: ct(k.value),
            onWheelCapture: Ti,
            onContextmenu: xt(tn, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Ai
          },
          [
            x("img", {
              src: c.value,
              alt: h.$t("screenshot.pin"),
              style: ct(B.value),
              onLoad: _i,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Bd)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : H("v-if", !0),
        u.value === "ocr" ? (P(), $(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: xt(tn, ["prevent"])
          },
          [
            x("header", Nd, [
              x(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Ai
                },
                [
                  x("div", Hd, [
                    x("div", jd, [
                      m(M(Xn), {
                        theme: "outline",
                        size: "18"
                      }),
                      x(
                        "span",
                        Fd,
                        F(h.$t("pin.ocrResult")),
                        1
                        /* TEXT */
                      )
                    ]),
                    x("div", Vd, [
                      x(
                        "span",
                        Ud,
                        F(T.value),
                        1
                        /* TEXT */
                      ),
                      p[3] || (p[3] = x(
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
                        Yd,
                        F(ut.value),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  x("div", Xd, [
                    x("div", {
                      class: at(["ocr-engine-status", `is-${L.value}`]),
                      title: St.value
                    }, [
                      g.value ? (P(), Mt(M(Ki), {
                        key: 0,
                        class: "ocr-loading-icon",
                        size: "14",
                        theme: "outline"
                      })) : (P(), Mt(M(En), {
                        key: 1,
                        size: "14",
                        theme: "outline"
                      })),
                      x(
                        "span",
                        null,
                        F(Q.value),
                        1
                        /* TEXT */
                      )
                    ], 10, Zd),
                    x("div", Gd, [
                      x("button", {
                        class: "ocr-window-btn",
                        title: ht.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow"),
                        onClick: xt(zi, ["stop"])
                      }, [
                        (P(), Mt(pe(ht.value ? M(Yn) : M(qi)), {
                          size: "18",
                          theme: "outline"
                        }))
                      ], 8, Kd),
                      p[4] || (p[4] = x(
                        "span",
                        { class: "ocr-window-divider" },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      x("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.minimize"),
                        onClick: xt(Uo, ["stop"])
                      }, [
                        m(M(Es), {
                          size: "18",
                          theme: "outline"
                        })
                      ], 8, qd),
                      x("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.maximize"),
                        onClick: xt(Yo, ["stop"])
                      }, [
                        m(M(Rl), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 5
                        })
                      ], 8, Jd),
                      x("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.close"),
                        onClick: xt(Dn, ["stop"])
                      }, [
                        m(M(Un), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 6
                        })
                      ], 8, Qd)
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
                onMousedown: p[2] || (p[2] = xt(() => {
                }, ["stop"]))
              },
              [
                m(Cd, {
                  class: "ocr-result-layout",
                  "default-size": "44%",
                  "min-size": "26%",
                  "max-size": "72%",
                  "second-collapsed": q.value
                }, {
                  first: zt(() => [
                    x("section", tg, [
                      x("header", eg, [
                        x("div", ng, [
                          x(
                            "strong",
                            null,
                            F(h.$t("pin.sourceImage")),
                            1
                            /* TEXT */
                          ),
                          x(
                            "span",
                            null,
                            F(It.value),
                            1
                            /* TEXT */
                          )
                        ]),
                        x("div", ig, [
                          q.value ? (P(), $("button", {
                            key: 0,
                            type: "button",
                            class: "ocr-panel-toggle",
                            title: h.$t("pin.showAiPanel"),
                            onClick: p[0] || (p[0] = xt((_) => q.value = !1, ["stop"]))
                          }, [
                            m(M(vl), {
                              size: "14",
                              theme: "outline"
                            }),
                            x(
                              "span",
                              null,
                              F(h.$t("pin.showAiPanel")),
                              1
                              /* TEXT */
                            )
                          ], 8, sg)) : H("v-if", !0)
                        ])
                      ]),
                      x("div", og, [
                        x(
                          "div",
                          {
                            ref_key: "ocrPreviewStageRef",
                            ref: s,
                            class: at(["ocr-preview-stage", { "has-text-overlay": v.value.length > 0 }])
                          },
                          [
                            x("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: o,
                              src: c.value || l.value,
                              alt: h.$t("pin.ocrSourceAlt"),
                              onLoad: _i
                            }, null, 40, ag),
                            H(` 透明可选文字层：每个 RapidOCR 文字块按真实 bbox 坐标定位在图片上，
                       文字透明不可见但可选，参考 Umi-OCR 的实现 `),
                            v.value.length > 0 ? (P(), $("div", {
                              key: 0,
                              class: "ocr-text-block-layer",
                              "aria-label": h.$t("pin.selectableTextView")
                            }, [
                              (P(!0), $(
                                jt,
                                null,
                                Jt(v.value, (_, G) => (P(), $("span", {
                                  key: `ocr-block-${G}`,
                                  class: at(["ocr-text-block-item", { "is-linked": xo.value.has(G) }]),
                                  style: ct(yo(_)),
                                  onClick: (Z) => So(G)
                                }, [
                                  x(
                                    "span",
                                    {
                                      class: "ocr-text-block-text",
                                      style: ct(wo(_))
                                    },
                                    F(_.text),
                                    5
                                    /* TEXT, STYLE */
                                  )
                                ], 14, lg))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ], 8, rg)) : H("v-if", !0)
                          ],
                          2
                          /* CLASS */
                        )
                      ])
                    ])
                  ]),
                  second: zt(() => [
                    x("section", cg, [
                      x("header", hg, [
                        x("div", ug, [
                          x(
                            "strong",
                            null,
                            F(h.$t("pin.aiRecognizedText")),
                            1
                            /* TEXT */
                          ),
                          d.value.trim() ? (P(), $(
                            "span",
                            dg,
                            F(h.$t("pin.resultStats", {
                              sections: y.value.length,
                              characters: d.value.length
                            })),
                            1
                            /* TEXT */
                          )) : (P(), $(
                            "span",
                            gg,
                            F(ft.value),
                            1
                            /* TEXT */
                          ))
                        ]),
                        x("div", fg, [
                          m(te, {
                            class: "ocr-inline-copy",
                            type: "text",
                            title: h.$t("pin.copyText"),
                            disabled: !d.value.trim(),
                            onClick: xt(Ln, ["stop"])
                          }, {
                            default: zt(() => [
                              m(M(rn), {
                                size: "15",
                                theme: "outline"
                              }),
                              x(
                                "span",
                                null,
                                F(h.$t("pin.copyAll")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["title", "disabled"]),
                          x("button", {
                            type: "button",
                            class: "ocr-panel-toggle icon-only",
                            title: h.$t("pin.hideAiPanel"),
                            onClick: p[1] || (p[1] = xt((_) => q.value = !0, ["stop"]))
                          }, [
                            m(M(Tl), {
                              size: "14",
                              theme: "outline"
                            })
                          ], 8, mg)
                        ])
                      ]),
                      g.value && !d.value.trim() ? (P(), $("div", pg, [
                        x("div", yg, [
                          m(M(En), {
                            size: "22",
                            theme: "outline"
                          })
                        ]),
                        x(
                          "strong",
                          null,
                          F(h.$t("pin.aiReadingImage")),
                          1
                          /* TEXT */
                        ),
                        x(
                          "span",
                          null,
                          F(h.$t("pin.aiReadingHint")),
                          1
                          /* TEXT */
                        )
                      ])) : w.value && !d.value.trim() ? (P(), $("div", wg, [
                        x(
                          "strong",
                          null,
                          F(w.value),
                          1
                          /* TEXT */
                        ),
                        x(
                          "span",
                          null,
                          F(h.$t("pin.aiOcrRetryHint")),
                          1
                          /* TEXT */
                        )
                      ])) : d.value.trim() ? (P(), $(
                        "div",
                        {
                          key: 3,
                          ref_key: "ocrResultScrollRef",
                          ref: a,
                          class: "ocr-result-scroll"
                        },
                        [
                          K.value ? (P(), $("section", xg, [
                            x("div", kg, [
                              x(
                                "span",
                                bg,
                                F(h.$t("pin.selectedText")),
                                1
                                /* TEXT */
                              ),
                              x(
                                "div",
                                Sg,
                                F(K.value.sourceText),
                                1
                                /* TEXT */
                              )
                            ]),
                            x("div", Mg, [
                              x(
                                "span",
                                Cg,
                                F(N.value),
                                1
                                /* TEXT */
                              ),
                              x("div", {
                                class: "ocr-selection-translation-editor",
                                contenteditable: "plaintext-only",
                                spellcheck: "false",
                                textContent: F(K.value.translatedText),
                                onBlur: Wo
                              }, null, 40, _g)
                            ])
                          ])) : H("v-if", !0),
                          (P(!0), $(
                            jt,
                            null,
                            Jt(y.value, (_) => (P(), $("article", {
                              key: _.id,
                              ref_for: !0,
                              ref: (G) => ko(_.id, G),
                              class: at(["ocr-record-item", [`is-${_.kind}`, { selected: _.selected, "is-linked": b.value === _.id }]]),
                              onClick: (G) => Mo(_.id)
                            }, [
                              x("div", {
                                class: "ocr-record-text",
                                textContent: F(_.text)
                              }, null, 8, zg),
                              _.translatedText ? (P(), $("div", Rg, [
                                x(
                                  "span",
                                  Lg,
                                  F(N.value),
                                  1
                                  /* TEXT */
                                ),
                                x("div", {
                                  class: "ocr-record-text translated",
                                  textContent: F(_.translatedText)
                                }, null, 8, Pg)
                              ])) : H("v-if", !0)
                            ], 10, Tg))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ],
                        512
                        /* NEED_PATCH */
                      )) : (P(), $(
                        "div",
                        vg,
                        F(h.$t("pin.noTextRecognized")),
                        1
                        /* TEXT */
                      ))
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["second-collapsed"])
              ],
              32
              /* NEED_HYDRATION */
            ),
            x("footer", Ag, [
              m(te, {
                class: "ocr-action-btn primary",
                type: "text",
                title: h.$t("pin.copyText"),
                disabled: !d.value.trim(),
                onClick: xt(Ln, ["stop"])
              }, {
                default: zt(() => [
                  m(M(rn), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  x(
                    "span",
                    null,
                    F(wi.value > 0 ? `${h.$t("pin.copyText")} (${wi.value})` : h.$t("pin.copyText")),
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
                  ref: ot,
                  class: "translate-btn-group relative"
                },
                [
                  m(te, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: h.$t("pin.translate"),
                    disabled: !d.value.trim() || J.value,
                    onClick: xt(jo, ["stop"])
                  }, {
                    default: zt(() => [
                      J.value ? (P(), Mt(M(Ki), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })) : (P(), Mt(M($s), {
                        key: 0,
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })),
                      x(
                        "span",
                        null,
                        F(h.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  m(te, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !d.value.trim() || J.value,
                    onClick: xt(Bo, ["stop"])
                  }, {
                    default: zt(() => [
                      m(M(Gi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 2.7
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  H(" 翻译引擎菜单 "),
                  tt.value ? (P(), $(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: ct(vt.value)
                    },
                    [
                      (P(!0), $(
                        jt,
                        null,
                        Jt(dt.value, (_) => (P(), $("div", {
                          key: _.value,
                          class: at(["menu-item", { active: it.value === _.value }]),
                          onClick: (G) => No(_.value)
                        }, [
                          x(
                            "span",
                            Ig,
                            F(_.label),
                            1
                            /* TEXT */
                          ),
                          it.value === _.value ? (P(), Mt(pe(M(Vn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : H("v-if", !0)
                        ], 10, Dg))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : H("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              x(
                "div",
                {
                  ref_key: "ocrLanguageMenuAnchorRef",
                  ref: nt,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  m(te, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: h.$t("pin.ocrLanguage"),
                    disabled: g.value,
                    onClick: xt(Ci, ["stop"])
                  }, {
                    default: zt(() => [
                      m(M(Xn), {
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      }),
                      x(
                        "span",
                        null,
                        F(Rt.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  m(te, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: g.value,
                    onClick: xt(Ci, ["stop"])
                  }, {
                    default: zt(() => [
                      m(M(Gi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  j.value ? (P(), $(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: ct(pt.value)
                    },
                    [
                      (P(!0), $(
                        jt,
                        null,
                        Jt(kt.value, (_) => (P(), $("div", {
                          key: _.value,
                          class: at(["menu-item", { active: rt.value === _.value }]),
                          onClick: (G) => Ho(_.value)
                        }, [
                          x(
                            "span",
                            Eg,
                            F(_.label),
                            1
                            /* TEXT */
                          ),
                          rt.value === _.value ? (P(), Mt(pe(M(Vn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : H("v-if", !0)
                        ], 10, Og))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ],
                    4
                    /* STYLE */
                  )) : H("v-if", !0)
                ],
                512
                /* NEED_PATCH */
              ),
              x("div", $g, [
                m(te, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: h.$t("pin.recognizeAgain"),
                  disabled: g.value || !l.value,
                  onClick: xt(Rn, ["stop"])
                }, {
                  default: zt(() => [
                    m(M(En), {
                      size: "17",
                      theme: "outline",
                      strokeWidth: 2.5
                    }),
                    x(
                      "span",
                      null,
                      F(h.$t("pin.aiRecognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              m(te, {
                class: "ocr-action-btn",
                type: "text",
                title: h.$t("pin.saveAsText"),
                disabled: !d.value.trim(),
                onClick: xt(Eo, ["stop"])
              }, {
                default: zt(() => [
                  m(M(Qi), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  x(
                    "span",
                    null,
                    F(h.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              p[5] || (p[5] = x(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              m(te, {
                class: "ocr-action-btn more",
                type: "text",
                title: h.$t("pin.more"),
                onClick: xt(Vo, ["stop"])
              }, {
                default: zt(() => [
                  m(M(kl), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.7
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title"])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : H("v-if", !0),
        Wt.value ? (P(), $(
          "div",
          Wg,
          F(Math.round(Lt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : H("v-if", !0),
        H(" 右键菜单 "),
        C.value ? (P(), $(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: ct(To.value)
          },
          [
            x("div", {
              class: "menu-item",
              onClick: zi
            }, [
              (P(), Mt(pe(ht.value ? M(qi) : M(Yn)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              x(
                "span",
                null,
                F(ht.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Li
            }, [
              m(M(Cl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                F(h.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Zo
            }, [
              m(M(rn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                F(h.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Go
            }, [
              m(M(Qi), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                F(h.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            u.value === "ocr" && d.value.trim() ? (P(), $("div", {
              key: 0,
              class: "menu-item",
              onClick: Ln
            }, [
              m(M(rn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                F(h.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            p[6] || (p[6] = x(
              "div",
              { class: "menu-divider" },
              null,
              -1
              /* HOISTED */
            )),
            x("div", {
              class: "menu-item danger",
              onClick: Dn
            }, [
              m(M(Un), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                F(h.$t("pin.closePin")),
                1
                /* TEXT */
              )
            ])
          ],
          4
          /* STYLE */
        )) : H("v-if", !0)
      ],
      34
      /* CLASS, NEED_HYDRATION */
    ));
  }
}), jg = /* @__PURE__ */ Je(Hg, [["__scopeId", "data-v-8a33e4f0"]]), Fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jg
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xg as activate
};
