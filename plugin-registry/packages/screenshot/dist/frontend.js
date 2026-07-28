var Xs = Object.defineProperty;
var Ks = (e, t, n) => t in e ? Xs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => Ks(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as ge, createVNode as p, defineComponent as zt, ref as E, computed as W, watch as Oe, nextTick as fe, createElementBlock as O, openBlock as R, createCommentVNode as H, createElementVNode as x, Fragment as Et, renderList as Kt, normalizeClass as ut, createBlock as Tt, resolveDynamicComponent as ae, unref as C, toDisplayString as Y, normalizeStyle as mt, onMounted as qe, onUnmounted as po, withDirectives as Ye, withKeys as Oi, vModelText as qs, getCurrentInstance as Le, readonly as Js, getCurrentScope as Qs, onScopeDispose as ta, isRef as ea, warn as na, provide as ia, mergeProps as oa, renderSlot as pe, Transition as Qn, withCtx as Ot, createTextVNode as sa, vShow as dn, shallowReactive as aa, withModifiers as wt, isVNode as Ze, render as gn } from "vue";
import { useI18n as wo } from "vue-i18n";
const kg = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => yc)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => hg)
  });
};
function ra(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function la(e, t, n, i, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var rn;
const Vt = "__TAURI_TO_IPC_KEY__";
function ca(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function b(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function ha(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class ua {
  get rid() {
    return ra(this, rn, "f");
  }
  constructor(t) {
    rn.set(this, void 0), la(this, rn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return b("plugin:resources|close", {
      rid: this.rid
    });
  }
}
rn = /* @__PURE__ */ new WeakMap();
class Fe {
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
    return new Ve(this.width * t, this.height * t);
  }
  [Vt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Vt]();
  }
}
class Ve {
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
    return new Fe(this.width / t, this.height / t);
  }
  [Vt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Vt]();
  }
}
class Ce {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Fe ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ve ? this.size : this.size.toPhysical(t);
  }
  [Vt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Vt]();
  }
}
class yo {
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
    return new se(this.x * t, this.y * t);
  }
  [Vt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Vt]();
  }
}
class se {
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
    return new yo(this.x / t, this.y / t);
  }
  [Vt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Vt]();
  }
}
class en {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof yo ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof se ? this.position : this.position.toPhysical(t);
  }
  [Vt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Vt]();
  }
}
var Nt;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Nt || (Nt = {}));
async function vo(e, t) {
  await b("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function fn(e, t, n) {
  var i;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return b("plugin:event|listen", {
    event: e,
    target: o,
    handler: ca(t)
  }).then((s) => async () => vo(e, s));
}
async function da(e, t, n) {
  return fn(e, (i) => {
    vo(e, i.id), t(i);
  }, n);
}
async function ga(e, t) {
  await b("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function fa(e, t, n) {
  await b("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let ma = class ln extends ua {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, i) {
    return b("plugin:image|new", {
      rgba: mn(t),
      width: n,
      height: i
    }).then((o) => new ln(o));
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
    return b("plugin:image|from_bytes", {
      bytes: mn(t)
    }).then((n) => new ln(n));
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
    return b("plugin:image|from_path", { path: t }).then((n) => new ln(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return b("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return b("plugin:image|size", { rid: this.rid });
  }
};
function mn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof ma ? e.rid : e;
}
var Fn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Fn || (Fn = {}));
class pa {
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
var Di;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Di || (Di = {}));
function wa() {
  return new Je(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function En() {
  return b("plugin:window|get_all_windows").then((e) => e.map((t) => new Je(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Bn = ["tauri://created", "tauri://error"];
class Je {
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
    var i;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || b("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (i = n.parent) === null || i === void 0 ? void 0 : i.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (o) => this.emit("tauri://error", o));
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
    return (n = (await En()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return wa();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return En();
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
    for (const t of await En())
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
      const i = this.listeners[t];
      i.splice(i.indexOf(n), 1);
    } : fn(t, n, {
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
      const i = this.listeners[t];
      i.splice(i.indexOf(n), 1);
    } : da(t, n, {
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
    if (Bn.includes(t)) {
      for (const i of this.listeners[t] || [])
        i({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return ga(t, n);
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
  async emitTo(t, n, i) {
    if (Bn.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return fa(t, n, i);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Bn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return b("plugin:window|scale_factor", {
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
    return b("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new se(t));
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
    return b("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new se(t));
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
    return b("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ve(t));
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
    return b("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Ve(t));
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
    return b("plugin:window|is_fullscreen", {
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
    return b("plugin:window|is_minimized", {
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
    return b("plugin:window|is_maximized", {
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
    return b("plugin:window|is_focused", {
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
    return b("plugin:window|is_decorated", {
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
    return b("plugin:window|is_resizable", {
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
    return b("plugin:window|is_maximizable", {
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
    return b("plugin:window|is_minimizable", {
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
    return b("plugin:window|is_closable", {
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
    return b("plugin:window|is_visible", {
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
    return b("plugin:window|title", {
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
    return b("plugin:window|theme", {
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
    return b("plugin:window|is_always_on_top", {
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
    return b("plugin:window|center", {
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
    return t && (t === Fn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), b("plugin:window|request_user_attention", {
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
    return b("plugin:window|set_resizable", {
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
    return b("plugin:window|set_enabled", {
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
    return b("plugin:window|is_enabled", {
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
    return b("plugin:window|set_maximizable", {
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
    return b("plugin:window|set_minimizable", {
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
    return b("plugin:window|set_closable", {
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
    return b("plugin:window|set_title", {
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
    return b("plugin:window|maximize", {
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
    return b("plugin:window|unmaximize", {
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
    return b("plugin:window|toggle_maximize", {
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
    return b("plugin:window|minimize", {
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
    return b("plugin:window|unminimize", {
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
    return b("plugin:window|show", {
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
    return b("plugin:window|hide", {
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
    return b("plugin:window|close", {
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
    return b("plugin:window|destroy", {
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
    return b("plugin:window|set_decorations", {
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
    return b("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return b("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return b("plugin:window|set_effects", {
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
    return b("plugin:window|set_always_on_top", {
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
    return b("plugin:window|set_always_on_bottom", {
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
    return b("plugin:window|set_content_protected", {
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
    return b("plugin:window|set_size", {
      label: this.label,
      value: t instanceof Ce ? t : new Ce(t)
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
    return b("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof Ce ? t : t ? new Ce(t) : null
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
    return b("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof Ce ? t : t ? new Ce(t) : null
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
    function n(i) {
      return i ? { Logical: i } : null;
    }
    return b("plugin:window|set_size_constraints", {
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
    return b("plugin:window|set_position", {
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
    return b("plugin:window|set_fullscreen", {
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
    return b("plugin:window|set_focus", {
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
    return b("plugin:window|set_icon", {
      label: this.label,
      value: mn(t)
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
    return b("plugin:window|set_skip_taskbar", {
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
    return b("plugin:window|set_cursor_grab", {
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
    return b("plugin:window|set_cursor_visible", {
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
    return b("plugin:window|set_cursor_icon", {
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
    return b("plugin:window|set_background_color", { color: t });
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
    return b("plugin:window|set_cursor_position", {
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
    return b("plugin:window|set_ignore_cursor_events", {
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
    return b("plugin:window|start_dragging", {
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
    return b("plugin:window|start_resize_dragging", {
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
    return b("plugin:window|set_badge_count", {
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
    return b("plugin:window|set_badge_label", {
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
    return b("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? mn(t) : void 0
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
    return b("plugin:window|set_progress_bar", {
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
    return b("plugin:window|set_visible_on_all_workspaces", {
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
    return b("plugin:window|set_title_bar_style", {
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
    return b("plugin:window|set_theme", {
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
    return this.listen(Nt.WINDOW_RESIZED, (n) => {
      n.payload = new Ve(n.payload), t(n);
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
    return this.listen(Nt.WINDOW_MOVED, (n) => {
      n.payload = new se(n.payload), t(n);
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
    return this.listen(Nt.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new pa(n);
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
    const n = await this.listen(Nt.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new se(a.payload.position)
        }
      });
    }), i = await this.listen(Nt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new se(a.payload.position)
        }
      });
    }), o = await this.listen(Nt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new se(a.payload.position)
        }
      });
    }), s = await this.listen(Nt.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), o(), i(), s();
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
    const n = await this.listen(Nt.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), i = await this.listen(Nt.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
    });
    return () => {
      n(), i();
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
    return this.listen(Nt.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Nt.WINDOW_THEME_CHANGED, t);
  }
}
var Wi;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Wi || (Wi = {}));
var $i;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})($i || ($i = {}));
var Ei;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Ei || (Ei = {}));
function Ct(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Bi(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function ti(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function ya(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function Qt(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function Me(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class va {
  constructor(t, n) {
    A(this, "canvas");
    A(this, "ctx");
    A(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = n;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t) {
    if (!Me(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const n = this.canvas.width / (window.devicePixelRatio || 1), i = this.canvas.height / (window.devicePixelRatio || 1), o = Math.round(t.x), s = Math.round(t.y), a = Math.round(t.width), r = Math.round(t.height);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, n, i), this.ctx.moveTo(o, s), this.ctx.lineTo(o, s + r), this.ctx.lineTo(o + a, s + r), this.ctx.lineTo(o + a, s), this.ctx.closePath(), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, n = !0) {
    const { x: i, y: o, width: s, height: a } = t;
    this.ctx.save();
    const r = Math.round(i) + 0.5, l = Math.round(o) + 0.5, h = Math.max(0, Math.round(s) - 1), u = Math.max(0, Math.round(a) - 1);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.strokeRect(r + 1, l + 1, h, u), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.strokeRect(r, l, h, u), n && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: n, y: i, width: o, height: s } = t, a = ti(t);
    this.ctx.setLineDash([]), [
      { x: n, y: i, width: 10, height: 10 },
      // 左上
      { x: n + o, y: i, width: 10, height: 10 },
      // 右上
      { x: n, y: i + s, width: 10, height: 10 },
      // 左下
      { x: n + o, y: i + s, width: 10, height: 10 },
      // 右下
      { x: a.x, y: i, width: 16, height: 6 },
      // 上中
      { x: a.x, y: i + s, width: 16, height: 6 },
      // 下中
      { x: n, y: a.y, width: 6, height: 16 },
      // 左中
      { x: n + o, y: a.y, width: 6, height: 16 }
      // 右中
    ].forEach((l) => {
      const h = Math.round(l.x) - l.width / 2, u = Math.round(l.y) - l.height / 2, f = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(h + 1, u + 1, l.width, l.height, f), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(h, u, l.width, l.height, f), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
    });
  }
  // 绘制标注列表
  drawAnnotations(t, n) {
    const i = this.createDrawingContext(n);
    t.forEach((o) => {
      const s = o.getData();
      s.hovered && o.drawHover(i), o.draw(i), s.selected && (o.drawSelection(i), ["rectangle", "ellipse", "line", "arrow"].includes(s.type) && this.drawAnnotationHandles(o));
    });
  }
  // 绘制当前正在创建的标注
  drawCurrentAnnotation(t, n) {
    const i = this.createDrawingContext(n);
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
  createScreenshotContext(t, n, i) {
    return {
      ctx: t,
      scale: n,
      offset: { x: i.x * n, y: i.y * n },
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
    const n = t.getData();
    if (n.type !== "mosaic" && n.type !== "text" && ["rectangle", "ellipse", "line", "arrow"].includes(n.type) && n.points.length >= 2) {
      const i = n.points[0], o = n.points[n.points.length - 1], s = 4;
      this.ctx.save(), this.ctx.setLineDash([]), this.ctx.fillStyle = "#ffffff", this.ctx.strokeStyle = "#3b82f6", this.ctx.lineWidth = 2, this.ctx.beginPath(), this.ctx.arc(i.x, i.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.beginPath(), this.ctx.arc(o.x, o.y, s, 0, Math.PI * 2), this.ctx.fill(), this.ctx.stroke(), this.ctx.restore();
    }
  }
  // 绘制取色器
  drawColorPicker(t, n) {
    if (!t.isActive || !t.isVisible) return;
    const { mousePosition: i, colorInfo: o, showFormat: s, previewImage: a, zoomFactor: r, isCopied: l } = t, h = 156, u = 188, f = 18;
    let v = i.x + f, y = i.y + f;
    v + h > n.x + n.width && (v = i.x - h - f), y + u > n.y + n.height && (y = i.y - u - f), v < n.x && (v = n.x + f), y < n.y && (y = n.y + f), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(v, y, h, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const S = 108, d = v + (h - S) / 2, M = y + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(d, M, S, S), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(d, M, S, S);
    const P = a ? a.width : r, F = S / P;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      d,
      M,
      S,
      S
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let B = 1; B < P; B++) {
      const Q = d + B * F;
      this.ctx.moveTo(Q, M), this.ctx.lineTo(Q, M + S);
      const q = M + B * F;
      this.ctx.moveTo(d, q), this.ctx.lineTo(d + S, q);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let B = 1; B < P; B++) {
      const Q = d + B * F + 0.5;
      this.ctx.moveTo(Q, M), this.ctx.lineTo(Q, M + S);
      const q = M + B * F + 0.5;
      this.ctx.moveTo(d, q), this.ctx.lineTo(d + S, q);
    }
    this.ctx.stroke();
    const T = Math.floor(P / 2), U = d + T * F, Z = M + T * F;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(U, Z, F, F), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(
      U - 1,
      Z - 1,
      F + 2,
      F + 2
    ), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(
      U,
      Z,
      F,
      F
    ), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let X = M + S + 22;
    if (o) {
      this.ctx.fillStyle = o.hex, this.ctx.fillRect(v + 16, X - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(v + 16, X - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const B = s === "hex" ? o.hex : `${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}`;
      this.ctx.fillText(B, v + 44, X), X += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(`X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`, v + 16, X), X += 17, this.ctx.font = "12px Arial";
    const V = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(V, v + 16, X), this.ctx.restore();
  }
}
class xa {
  // 物理尺寸
  constructor(t) {
    A(this, "scale");
    A(this, "canvasRect");
    A(this, "canvasSize");
    // 逻辑尺寸
    A(this, "physicalSize");
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
  logicalToRelative(t, n) {
    return !Qt(t) || !Me(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !Qt(t) || !Me(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + n.x,
      y: t.y + n.y
    };
  }
  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(t) {
    return Me(t) ? {
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
    const n = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return ya(t, n);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Me(t))
      return console.warn("Invalid rect in clampRectToCanvas:", t), { x: 0, y: 0, width: 0, height: 0 };
    const n = Math.max(0, t.x), i = Math.max(0, t.y), o = Math.min(this.canvasSize.width - n, t.width), s = Math.min(this.canvasSize.height - i, t.height);
    return { x: n, y: i, width: o, height: s };
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
  distance(t, n) {
    return Ct(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!Qt(t) || !Me(n))
      return !1;
    if (i === 0)
      return Bi(t, n);
    const o = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Bi(t, o);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, o = 8) {
    if (!Qt(t) || !Qt(n) || !Qt(i))
      return !1;
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Ct(t, n) <= o;
    const f = h / u;
    let v;
    return f < 0 ? v = n : f > 1 ? v = i : v = {
      x: n.x + f * r,
      y: n.y + f * l
    }, Ct(t, v) <= o;
  }
}
var z = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(z || {}), w = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(w || {});
class ka {
  constructor(t, n) {
    A(this, "coordinateSystem");
    A(this, "canvas");
    A(this, "isDrawing", !1);
    A(this, "currentOperation", z.None);
    A(this, "startPoint", { x: 0, y: 0 });
    A(this, "lastMousePos", { x: 0, y: 0 });
    A(this, "preventDefault", (t) => {
      t.preventDefault();
    });
    this.canvas = t, this.coordinateSystem = n, this.bindEvents();
  }
  bindEvents() {
    this.canvas.addEventListener("contextmenu", this.preventDefault), this.canvas.addEventListener("dragstart", this.preventDefault), this.canvas.addEventListener("selectstart", this.preventDefault);
  }
  unbind() {
    this.canvas.removeEventListener("contextmenu", this.preventDefault), this.canvas.removeEventListener("dragstart", this.preventDefault), this.canvas.removeEventListener("selectstart", this.preventDefault);
  }
  getOperationType(t, n, i, o) {
    const s = this.getAnnotationAtPoint(t, o);
    if (n !== w.Select)
      return i ? this.coordinateSystem.isPointInRect(t, i) ? this.getDrawingOperationType(n) : z.None : z.Drawing;
    if (s) {
      if (s.getData().type === w.Mosaic)
        return z.None;
      const a = this.getAnnotationControlPointOperation(t, s);
      return a !== z.None ? a : z.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(t, i, o.length > 0) : z.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [w.Rectangle]: z.DrawingRect,
      [w.Ellipse]: z.DrawingEllipse,
      [w.Line]: z.DrawingLine,
      [w.Arrow]: z.DrawingArrow,
      [w.Pen]: z.DrawingPen,
      [w.Text]: z.DrawingText,
      [w.Mosaic]: z.DrawingMosaic,
      [w.ColorPicker]: z.ColorPicking,
      [w.Ocr]: z.None,
      [w.Pin]: z.Pinning,
      [w.Translate]: z.None,
      [w.Select]: z.None
    }[t] || z.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, n, i) {
    const { x: o, y: s, width: a, height: r } = n, l = 12;
    if (i)
      return z.None;
    const h = ti(n);
    return this.isInHandle(t, { x: o, y: s }, l) ? z.ResizingNW : this.isInHandle(t, { x: o + a, y: s }, l) ? z.ResizingNE : this.isInHandle(t, { x: o, y: s + r }, l) ? z.ResizingSW : this.isInHandle(t, { x: o + a, y: s + r }, l) ? z.ResizingSE : this.isInHandle(t, { x: h.x, y: s }, l) ? z.ResizingN : this.isInHandle(t, { x: h.x, y: s + r }, l) ? z.ResizingS : this.isInHandle(t, { x: o, y: h.y }, l) ? z.ResizingW : this.isInHandle(t, { x: o + a, y: h.y }, l) ? z.ResizingE : this.coordinateSystem.isPointInRect(t, n) ? z.Moving : z.Drawing;
  }
  // 检查是否在控制点范围内
  isInHandle(t, n, i) {
    return Math.abs(t.x - n.x) <= i && Math.abs(t.y - n.y) <= i;
  }
  // 获取指定位置的标注
  getAnnotationAtPoint(t, n) {
    for (let i = n.length - 1; i >= 0; i--) {
      const o = n[i];
      if (o.hitTest(t))
        return o;
    }
    return null;
  }
  // 获取标注控制点操作类型
  getAnnotationControlPointOperation(t, n) {
    if (!Qt(t))
      return z.None;
    const i = n.getData();
    if (i.type === w.Mosaic || i.type === w.Text)
      return z.None;
    if ([
      w.Rectangle,
      w.Ellipse,
      w.Line,
      w.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const o = i.points[0], s = i.points[i.points.length - 1], a = 8, r = 6, l = Ct(t, o), h = Ct(t, s);
      if (l <= a + r)
        return z.ResizingAnnotationNW;
      if (h <= a + r)
        return z.ResizingAnnotationSE;
    }
    return z.None;
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
    this.isDrawing = !1, this.currentOperation = z.None;
  }
  // 更新鼠标位置
  updateMousePosition(t) {
    this.lastMousePos = t;
  }
}
class xe {
  constructor(t) {
    A(this, "data");
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
  move(t, n) {
    this.data.points.forEach((i) => {
      i.x += t, i.y += n;
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
class ba extends xe {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: w.Rectangle,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = o.x - i.x, a = o.y - i.y;
    n.save(), this.applyOpacity(n), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(i.x, i.y, s, a), n.restore();
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n, scale: i, offset: o } = t, s = this.data.points[0], a = this.data.points[this.data.points.length - 1], r = {
      x: s.x * i - o.x,
      y: s.y * i - o.y
    }, l = (a.x - s.x) * i, h = (a.y - s.y) * i;
    n.save(), this.applyOpacity(n), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth * i, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(r.x, r.y, l, h), n.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = Math.min(i.x, o.x), a = Math.max(i.x, o.x), r = Math.min(i.y, o.y), l = Math.max(i.y, o.y);
    return t.x >= s - n && t.x <= a + n && t.y >= r - n && t.y <= l + n;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), o = Math.max(t.x, n.x), s = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: n } = t, i = 6;
    n.save(), n.fillStyle = "#3b82f6", n.strokeStyle = "#ffffff", n.lineWidth = 1, this.data.points.forEach((o) => {
      n.fillRect(o.x - i / 2, o.y - i / 2, i, i), n.strokeRect(o.x - i / 2, o.y - i / 2, i, i);
    }), n.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1], s = o.x - i.x, a = o.y - i.y;
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(i.x, i.y, s, a), n.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, n = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const o = this.data.points[i];
      if (Ct(t, o) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Sa extends xe {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: w.Ellipse,
      points: [t],
      style: n
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
  drawEllipse(t, n, i) {
    const o = this.getBounds();
    if (!o) return;
    const s = (o.x + o.width / 2) * n - i.x, a = (o.y + o.height / 2) * n - i.y, r = Math.max(o.width * n / 2, 0.5), l = Math.max(o.height * n / 2, 0.5);
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.ellipse(s, a, r, l, 0, 0, Math.PI * 2), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    const i = this.getBounds();
    if (!i) return !1;
    const o = i.width / 2, s = i.height / 2;
    if (o < 1 || s < 1)
      return t.x >= i.x - n && t.x <= i.x + i.width + n && t.y >= i.y - n && t.y <= i.y + i.height + n;
    const a = i.x + o, r = i.y + s, l = Math.sqrt(
      (t.x - a) ** 2 / o ** 2 + (t.y - r) ** 2 / s ** 2
    );
    return Math.abs(l - 1) * Math.min(o, s) <= n;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), o = Math.max(t.x, n.x), s = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: n } = t, i = this.getBounds();
    i && (n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.setLineDash([3, 3]), n.strokeRect(i.x, i.y, i.width, i.height), n.restore());
  }
  drawHover(t) {
    const { ctx: n } = t, i = this.getBounds();
    i && (n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.beginPath(), n.ellipse(
      i.x + i.width / 2,
      i.y + i.height / 2,
      Math.max(i.width / 2, 0.5),
      Math.max(i.height / 2, 0.5),
      0,
      0,
      Math.PI * 2
    ), n.stroke(), n.restore());
  }
}
class Ca extends xe {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: w.Line,
      points: [t],
      style: n
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
  drawLine(t, n, i) {
    const o = this.data.points[0], s = this.data.points[this.data.points.length - 1];
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(o.x * n - i.x, o.y * n - i.y), t.lineTo(s.x * n - i.x, s.y * n - i.y), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, n);
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), o = Math.max(t.x, n.x), s = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    this.drawEndpoints(t.ctx);
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.beginPath(), n.moveTo(i.x, i.y), n.lineTo(o.x, o.y), n.stroke(), n.restore();
  }
  drawEndpoints(t) {
    t.save(), t.fillStyle = "#3b82f6", t.strokeStyle = "#ffffff", t.lineWidth = 1, this.data.points.forEach((i) => {
      t.fillRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6), t.strokeRect(i.x - 6 / 2, i.y - 6 / 2, 6, 6);
    }), t.restore();
  }
  isPointNearLine(t, n, i, o) {
    const s = i.x - n.x, a = i.y - n.y, r = s * s + a * a;
    if (r === 0)
      return Ct(t, n) <= o;
    const l = Math.max(0, Math.min(1, ((t.x - n.x) * s + (t.y - n.y) * a) / r)), h = {
      x: n.x + l * s,
      y: n.y + l * a
    };
    return Ct(t, h) <= o;
  }
}
class Ma extends xe {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: w.Arrow,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t;
    this.drawArrow(n, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n, scale: i, offset: o } = t;
    this.drawArrow(n, i, o);
  }
  drawArrow(t, n, i) {
    const o = this.data.points[0], s = this.data.points[this.data.points.length - 1], a = {
      x: o.x * n - i.x,
      y: o.y * n - i.y
    }, r = {
      x: s.x * n - i.x,
      y: s.y * n - i.y
    };
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath(), t.moveTo(a.x, a.y), t.lineTo(r.x, r.y), t.stroke();
    const l = Math.atan2(s.y - o.y, s.x - o.x), h = 15 * n, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l - u),
      r.y - h * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - h * Math.cos(l + u),
      r.y - h * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, n);
  }
  isPointNearLine(t, n, i, o) {
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Ct(t, n) <= o;
    const f = h / u;
    let v;
    return f < 0 ? v = n : f > 1 ? v = i : v = {
      x: n.x + f * r,
      y: n.y + f * l
    }, Ct(t, v) <= o;
  }
  getBounds() {
    if (this.data.points.length < 2) return null;
    const t = this.data.points[0], n = this.data.points[this.data.points.length - 1], i = Math.min(t.x, n.x), o = Math.max(t.x, n.x), s = Math.min(t.y, n.y), a = Math.max(t.y, n.y);
    return {
      x: i,
      y: s,
      width: o - i,
      height: a - s
    };
  }
  drawSelection(t) {
    const { ctx: n } = t, i = 6;
    n.save(), n.fillStyle = "#3b82f6", n.strokeStyle = "#ffffff", n.lineWidth = 1, this.data.points.forEach((o) => {
      n.fillRect(o.x - i / 2, o.y - i / 2, i, i), n.strokeRect(o.x - i / 2, o.y - i / 2, i, i);
    }), n.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t, i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.beginPath(), n.moveTo(i.x, i.y), n.lineTo(o.x, o.y), n.stroke(), n.restore();
  }
  // 获取控制点位置检测
  getControlPointAtPosition(t, n = 12) {
    if (!this.data.selected || this.data.points.length < 2) return null;
    for (let i = 0; i < this.data.points.length; i++) {
      const o = this.data.points[i];
      if (Ct(t, o) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class _a extends xe {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: w.Pen,
      points: [t],
      style: n
    });
  }
  getMinPoints() {
    return 2;
  }
  // 智能添加点（带插值）
  addPoint(t) {
    if (this.data.points.length > 0) {
      const n = this.data.points[this.data.points.length - 1], i = Ct(t, n);
      if (i > 5) {
        const o = Math.ceil(i / 3);
        for (let s = 1; s < o; s++) {
          const a = s / o, r = n.x + (t.x - n.x) * a, l = n.y + (t.y - n.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t;
    this.drawPath(n, 1, { x: 0, y: 0 });
  }
  drawToScreenshot(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n, scale: i, offset: o } = t;
    this.drawPath(n, i, o);
  }
  drawPath(t, n, i) {
    t.save(), this.applyOpacity(t), t.strokeStyle = this.data.style.color, t.lineWidth = this.data.style.lineWidth * n, t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), t.beginPath();
    const o = this.data.points[0], s = o.x * n - i.x, a = o.y * n - i.y;
    t.moveTo(s, a);
    for (let r = 1; r < this.data.points.length; r++) {
      const l = this.data.points[r], h = l.x * n - i.x, u = l.y * n - i.y;
      t.lineTo(h, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? Ct(t, this.data.points[0]) <= n : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, n))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, n, i, o) {
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, h = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return Ct(t, n) <= o;
    const f = h / u;
    let v;
    return f < 0 ? v = n : f > 1 ? v = i : v = {
      x: n.x + f * r,
      y: n.y + f * l
    }, Ct(t, v) <= o;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, n = this.data.points[0].x, i = this.data.points[0].y, o = this.data.points[0].y;
    return this.data.points.forEach((s) => {
      t = Math.min(t, s.x), n = Math.max(n, s.x), i = Math.min(i, s.y), o = Math.max(o, s.y);
    }), {
      x: t,
      y: i,
      width: n - t,
      height: o - i
    };
  }
  drawSelection(t) {
    const n = this.getBounds();
    if (!n) return;
    const { ctx: i } = t;
    i.save(), i.setLineDash([2, 2]), i.strokeStyle = "#3b82f6", i.lineWidth = 1, i.strokeRect(n.x, n.y, n.width, n.height), i.restore();
  }
  drawHover(t) {
    if (this.data.points.length < 2) return;
    const { ctx: n } = t;
    n.save(), n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.lineCap = "round", n.lineJoin = "round", n.beginPath(), n.moveTo(this.data.points[0].x, this.data.points[0].y);
    for (let i = 1; i < this.data.points.length; i++)
      n.lineTo(this.data.points[i].x, this.data.points[i].y);
    n.stroke(), n.restore();
  }
}
const _e = "sans-serif", Te = (e) => ({
  x: e.x + 4,
  y: e.y - 8
});
class Ta extends xe {
  constructor(t, n, i, o = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: w.Text,
      points: [t],
      style: i,
      text: n,
      fontSize: o
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
    const { ctx: n } = t;
    this.drawText(n, 1, { x: 0, y: 0 }, t.bounds);
  }
  drawToScreenshot(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: o, bounds: s } = t;
    this.drawText(n, i, o, s);
  }
  drawText(t, n, i, o) {
    const s = (this.data.fontSize || 16) * n, a = this.data.points[0];
    t.save(), this.applyOpacity(t), t.font = `${s}px ${_e}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Te(a), l = r.x * n - i.x, h = r.y * n - i.y;
    t.fillText(this.data.text, l, h), t.restore();
  }
  hitTest(t, n = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], o = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${o}px ${_e}`;
    const l = a.measureText(this.data.text).width, { x: h, y: u } = Te(i);
    return t.x >= h - n && t.x <= h + l + n && t.y >= u - n && t.y <= u + o + n;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], n = this.data.fontSize || 16, o = document.createElement("canvas").getContext("2d");
    if (!o) return null;
    o.font = `${n}px ${_e}`;
    const a = o.measureText(this.data.text).width, { x: r, y: l } = Te(t);
    return {
      x: r,
      y: l,
      width: a,
      height: n
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Te(s), l = r.x * i - o.x, h = r.y * i - o.y;
    n.save(), n.font = `${a}px ${_e}`;
    const f = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(l, h, f, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Te(s), l = r.x * i - o.x, h = r.y * i - o.y;
    n.save(), n.font = `${a}px ${_e}`;
    const f = n.measureText(this.data.text).width;
    n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(l, h, f, a), n.restore();
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
const te = class te extends xe {
  constructor(t, n, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: w.Mosaic,
      points: [t],
      style: n,
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
      const n = this.data.points[this.data.points.length - 1], i = Ct(t, n);
      if (i > 2) {
        const o = Math.ceil(i / 2);
        for (let s = 1; s < o; s++) {
          const a = s / o, r = n.x + (t.x - n.x) * a, l = n.y + (t.y - n.y) * a;
          this.data.points.push({ x: r, y: l });
        }
      }
    }
    this.data.points.push(t);
  }
  draw(t) {
    if (this.data.points.length === 0) return;
    const { ctx: n, bounds: i } = t;
    this.renderRealMosaic(n, window.devicePixelRatio || 1, { x: 0, y: 0 }, i);
  }
  drawToScreenshot(t) {
    if (this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: o, bounds: s } = t;
    this.renderRealMosaic(n, i, o, s);
  }
  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  renderRealMosaic(t, n, i, o) {
    te.helperCanvas || (te.helperCanvas = document.createElement("canvas"), te.helperCtx = te.helperCanvas.getContext("2d", { willReadFrequently: !0 }));
    const s = te.helperCanvas, a = te.helperCtx, r = n || 1, l = this.data.mosaicSize || 8, h = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), f = this.getBounds();
    if (!f) return;
    const v = u, y = Math.floor(f.x - v), S = Math.floor(f.y - v), d = Math.ceil(f.width + v * 2), M = Math.ceil(f.height + v * 2);
    if (d <= 0 || M <= 0) return;
    const P = Math.floor(y * r - i.x), F = Math.floor(S * r - i.y), T = Math.ceil(d * r), U = Math.ceil(M * r), Z = t.canvas.width, X = t.canvas.height, V = Math.max(0, P), B = Math.max(0, F), Q = Math.min(T, Z - V), q = Math.min(U, X - B);
    if (Q <= 0 || q <= 0) return;
    let tt;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), tt = t.getImageData(V, B, Q, q), t.restore();
    } catch {
      return;
    }
    const et = tt.data, at = V % h, xt = B % h;
    for (let nt = -xt; nt < q; nt += h)
      for (let G = -at; G < Q; G += h) {
        const it = Math.max(0, G), yt = Math.max(0, nt), kt = Math.min(Q, G + h), I = Math.min(q, nt + h);
        if (it >= kt || yt >= I) continue;
        let dt = 0, N = 0, Rt = 0, Lt = 0;
        for (let jt = yt; jt < I; jt++)
          for (let st = it; st < kt; st++) {
            const Pt = (jt * Q + st) * 4;
            dt += et[Pt], N += et[Pt + 1], Rt += et[Pt + 2], Lt++;
          }
        if (Lt > 0) {
          dt = Math.round(dt / Lt / 8) * 8, N = Math.round(N / Lt / 8) * 8, Rt = Math.round(Rt / Lt / 8) * 8;
          for (let st = yt; st < I; st++)
            for (let Pt = it; Pt < kt; Pt++) {
              const At = (st * Q + Pt) * 4;
              et[At] = dt, et[At + 1] = N, et[At + 2] = Rt;
            }
        }
      }
    s.width = Q, s.height = q, a.putImageData(tt, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, V, B), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), o && (t.beginPath(), t.rect(
      o.x * r - i.x,
      o.y * r - i.y,
      o.width * r,
      o.height * r
    ), t.clip()), t.drawImage(s, V, B), t.restore();
  }
  // 在物理坐标系中绘制路径
  drawPathPhysical(t, n, i, o, s) {
    if (this.data.points.length < 1) return;
    t.beginPath();
    const a = (l) => l.x * n - i.x - o, r = (l) => l.y * n - i.y - s;
    if (this.data.points.length === 1) {
      const l = this.data.points[0];
      t.arc(a(l), r(l), t.lineWidth / 2, 0, Math.PI * 2), t.fill();
    } else {
      const l = this.data.points[0];
      t.moveTo(a(l), r(l));
      for (let u = 1; u < this.data.points.length - 1; u++) {
        const f = this.data.points[u], v = this.data.points[u + 1], y = (a(f) + a(v)) / 2, S = (r(f) + r(v)) / 2;
        t.quadraticCurveTo(a(f), r(f), y, S);
      }
      const h = this.data.points[this.data.points.length - 1];
      t.lineTo(a(h), r(h)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return Ct(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + n;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, (this.data.mosaicSize || 8) * 1.5 + n))
        return !0;
    }
    return !1;
  }
  getBounds() {
    if (this.data.points.length === 0) return null;
    let t = this.data.points[0].x, n = this.data.points[0].x, i = this.data.points[0].y, o = this.data.points[0].y;
    for (const s of this.data.points)
      t = Math.min(t, s.x), n = Math.max(n, s.x), i = Math.min(i, s.y), o = Math.max(o, s.y);
    return {
      x: t,
      y: i,
      width: n - t,
      height: o - i
    };
  }
  isPointNearLine(t, n, i, o) {
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, h = s * r + a * l, u = r * r + l * l;
    let f = -1;
    u !== 0 && (f = h / u);
    let v, y;
    f < 0 ? (v = n.x, y = n.y) : f > 1 ? (v = i.x, y = i.y) : (v = n.x + f * r, y = n.y + f * l);
    const S = t.x - v, d = t.y - y;
    return S * S + d * d <= o * o;
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
A(te, "helperCanvas", null), A(te, "helperCtx", null);
let Vn = te;
class nn {
  static createAnnotation(t, n, i, o = {}) {
    switch (t) {
      case w.Rectangle:
        return new ba(n, i);
      case w.Ellipse:
        return new Sa(n, i);
      case w.Line:
        return new Ca(n, i);
      case w.Arrow:
        return new Ma(n, i);
      case w.Pen:
        return new _a(n, i);
      case w.Text:
        return new Ta(
          n,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case w.Mosaic:
        return new Vn(
          n,
          i,
          o.mosaicSize || 8
        );
      default:
        return null;
    }
  }
  // 从数据恢复标注
  static fromData(t) {
    const { type: n, points: i, style: o } = t;
    if (!i || i.length === 0) return null;
    const s = i[0], a = this.createAnnotation(n, s, o, {
      text: t.text,
      fontSize: t.fontSize,
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
      [w.Rectangle]: "drawing-rect",
      [w.Ellipse]: "drawing-ellipse",
      [w.Line]: "drawing-line",
      [w.Arrow]: "drawing-arrow",
      [w.Pen]: "drawing-pen",
      [w.Text]: "drawing-text",
      [w.Mosaic]: "drawing-mosaic",
      [w.Select]: "none"
    }[t] || "none";
  }
  // 检查工具是否为绘图工具
  static isDrawingTool(t) {
    return t !== w.Select && t !== w.ColorPicker && t !== w.Ocr && t !== w.Pin;
  }
  // 检查工具是否支持样式设置
  static supportsStyleSettings(t) {
    return t !== w.Select && t !== w.Mosaic;
  }
  // 检查工具是否支持颜色设置
  static supportsColorSettings(t) {
    return [
      w.Rectangle,
      w.Ellipse,
      w.Line,
      w.Arrow,
      w.Pen,
      w.Text
    ].includes(t);
  }
  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(t) {
    return [
      w.Rectangle,
      w.Ellipse,
      w.Line,
      w.Arrow,
      w.Pen
    ].includes(t);
  }
  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(t) {
    return t === w.Text;
  }
  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(t) {
    return t === w.Mosaic;
  }
}
const de = class de {
  constructor() {
    A(this, "pool", []);
    A(this, "maxPoolSize", 5);
    // 最大池大小
    A(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return de.instance || (de.instance = new de()), de.instance;
  }
  /**
   * 获取一个 canvas 对象
   * @param width 宽度
   * @param height 高度
   * @returns canvas 对象
   */
  acquire(t, n) {
    const i = this.pool.findIndex(
      (a) => a.width >= t && a.height >= n && !this.inUse.has(a)
    );
    let o;
    i !== -1 ? (o = this.pool[i], this.pool.splice(i, 1)) : o = document.createElement("canvas"), o.width = t, o.height = n;
    const s = o.getContext("2d");
    return s && s.clearRect(0, 0, t, n), this.inUse.add(o), o;
  }
  /**
   * 释放 canvas 对象回池中
   * @param canvas 要释放的 canvas
   */
  release(t) {
    if (this.inUse.has(t) && (this.inUse.delete(t), this.pool.length < this.maxPoolSize)) {
      const n = t.getContext("2d");
      n && n.clearRect(0, 0, t.width, t.height), this.pool.push(t);
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
A(de, "instance");
let Un = de;
async function za(e, t) {
  return await b("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const Ra = "snippets-code:developer-mode", xo = "snippets-code:frontend-diagnostics", La = 240, Ee = "[REDACTED]", cn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Ee}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Ee}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Ee
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Ee}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Ee}`
), ei = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return cn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return cn(
      JSON.stringify(
        e,
        (n, i) => {
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
    return cn(String(e));
  }
}, Pa = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Aa = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(xo) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, ni = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ra) === "true";
  } catch {
    return !1;
  }
}, Ia = (e, t, n) => {
  if (!ni() || typeof localStorage > "u") return;
  const i = Aa();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Pa(),
    message: cn(t),
    data: ei(n)
  });
  try {
    localStorage.setItem(
      xo,
      JSON.stringify(i.slice(-La))
    );
  } catch {
  }
}, Oa = () => ni(), Da = (e) => e === "error" || ni(), on = (e, t, n) => {
  Ia(e, t, n), Da(e) && b("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : ei(n)
  }).catch(() => {
  });
}, L = {
  info: (e, t, ...n) => {
    on("info", e, t);
  },
  error: (e, t) => {
    on("error", e, t);
  },
  warn: (e, t) => {
    on("warn", e, t);
  },
  debug: (e, t) => {
    Oa() && on("debug", e, t);
  }
}, _t = {
  log: (e, t) => {
    b("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : ei(t)
    }).catch(() => {
    });
  }
}, Wa = "resources/transformers/transformers.min.js", $a = ["translation-offline-runtime", "translation"], Ea = "https://huggingface.co/", Ba = "{model}/resolve/{revision}/", Na = "/__snippets_code_disabled_transformers_local_models__/", Ha = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let Be = null;
const ja = (e) => {
  const t = e.toLowerCase();
  return [
    { index: e.lastIndexOf("/"), length: 1 },
    { index: e.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (i, o) => o.index > i.index ? o : i,
    { index: -1, length: 0 }
  );
}, ko = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = ja(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, bo = (e) => {
  const t = ko(e);
  return Object.fromEntries(
    Ha.map((n) => [n, `${t}${n}`])
  );
}, Fa = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Ea, e.remotePathTemplate = Ba, e.allowLocalModels = !1, e.localModelPath = Na, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = bo(t), e.backends.onnx.wasm.numThreads = 1);
};
async function Va() {
  return Be || (Be = (async () => {
    for (const e of $a) {
      const t = await za(e, Wa);
      if (!t) continue;
      const n = ha(t), i = await import(
        /* @vite-ignore */
        n
      );
      return Fa(i.env, n), L.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
        wasmPaths: i.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: i.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: i.env.remoteHost,
        remotePathTemplate: i.env.remotePathTemplate,
        allowLocalModels: i.env.allowLocalModels,
        localModelPath: i.env.localModelPath
      }), i;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw Be = null, e;
  }), Be);
}
let ne = null, Ue = !1, ze = null, me = null, Yn = null;
const Ua = "Xenova/opus-mt-en-zh", Ya = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Za = 3e5;
function Ga(e) {
  Yn = e;
}
function Xa() {
  return Ya;
}
function Ka(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function So() {
  return ne || ze || (Ue = !0, L.info("[离线翻译] 正在加载翻译模型..."), ze = (async () => {
    try {
      const { pipeline: e } = await Va();
      let t = "";
      const n = e("translation", Ua, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== t && (t = o.file, L.info(`[离线翻译] 已加载: ${o.file}`)), Yn && Yn({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return ne = await Ka(
        n,
        Za,
        "模型加载超时，请检查网络连接后重试"
      ), L.info("[离线翻译] 翻译模型加载完成"), Ue = !1, ne;
    } catch (e) {
      throw Ue = !1, ze = null, L.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), ze);
}
async function Co(e) {
  if (!e?.trim()) return e;
  me = new AbortController();
  const t = me.signal;
  try {
    const n = await So();
    if (t.aborted)
      throw new Error("翻译已取消");
    const i = e.split(`
`), o = [];
    for (const s of i) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const a = s.trim();
      if (!a) {
        o.push("");
        continue;
      }
      const r = await n(a);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(r) && r.length > 0) {
        const l = r[0].translation_text || a;
        o.push(l);
      } else
        o.push(a);
    }
    return o.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (L.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (L.warn("[离线翻译] 运行时资源未安装"), n) : (L.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    me = null;
  }
}
function qa() {
  me && (me.abort(), me = null, L.info("[离线翻译] 已发送取消信号"));
}
function Ja() {
  return me !== null;
}
async function Mo() {
  await So();
}
function Qa() {
  return ne !== null;
}
function tr() {
  return Ue;
}
async function ii() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      L.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const o = await (await caches.open(n)).keys();
          if (L.info(`[离线翻译] Cache "${n}" 包含 ${o.length} 个文件`), o.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = o.some((r) => r.url.includes(".onnx"));
            if (L.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
              return {
                isCached: !0,
                cacheType: "cache-storage",
                cacheName: n,
                estimatedSize: "~300MB"
              };
          }
        }
    }
    const e = await indexedDB.databases();
    L.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return L.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return L.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return L.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function er() {
  return (await ii()).isCached;
}
function nr() {
  return ne !== null;
}
async function ir() {
  if (ne)
    try {
      await ne.dispose?.();
    } catch {
    }
  ne = null, ze = null, Ue = !1, L.info("[离线翻译] 翻译器已释放");
}
async function or() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), L.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), L.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    L.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw L.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: nr,
  cancelOfflineTranslation: qa,
  clearModelCache: or,
  disposeOfflineTranslator: ir,
  getModelCacheInfo: ii,
  getModelFiles: Xa,
  getRuntimeBaseUrl: ko,
  getRuntimeWasmPaths: bo,
  isModelCached: er,
  isOfflineTranslatorInitializing: tr,
  isOfflineTranslatorReady: Qa,
  isTranslationInProgress: Ja,
  setProgressCallback: Ga,
  translateOffline: Co,
  warmupOfflineTranslator: Mo
}, Symbol.toStringTag, { value: "Module" }));
class ue {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => pg).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, n), n;
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
    const n = Promise.resolve(sr).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, n), n;
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
A(ue, "loadedModules", /* @__PURE__ */ new Map()), A(ue, "loadingPromises", /* @__PURE__ */ new Map());
async function ar() {
  return await b("local_ai_get_status");
}
async function rr(e) {
  return await b("local_ai_start_service", {
    config: null
  });
}
async function lr(e) {
  return await b("local_ai_chat", { request: e });
}
function _o(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), o = i ? i.length : 0, s = e.match(/[\uac00-\ud7af]/g), a = s ? s.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = n + o + a + l;
  return u === 0 ? "unknown" : o >= 3 && o > l && o / u >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / u >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function Re(e) {
  return e === "zh" || e === "en";
}
function he(e) {
  return _o(e);
}
const cr = /[.!?。！？；;：:][)"'”’】）\]]*$/, Ni = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, sn = /[A-Za-z0-9]/, hr = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, Hi = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function To(e, t = {}) {
  const n = Xr(e), i = Sr(e, n);
  return i.length === 0 ? [] : xr(i, n) ? vr(i, n) : (t.mode === "single_para" ? [He(i, n)] : dr(i, n)).flatMap((s) => ur(s, n));
}
function ur(e, t) {
  const n = si(e, t), i = [];
  for (const o of n) {
    const s = i[i.length - 1], a = s ? Rr(s, o, t) : !1;
    if (!s || !a) {
      i.push(Pr(o));
      continue;
    }
    s.text = Ir(s.text, o.text), s.blocks = [...s.blocks, ...o.blocks], s.bbox = Io(s.bbox, o.bbox), s.fontSize = Vi(
      s.fontSize || o.fontSize,
      s.blocks.length - o.blocks.length,
      o.fontSize,
      o.blocks.length
    ), s.lineHeight = Vi(
      s.lineHeight || o.lineHeight,
      s.blocks.length - o.blocks.length,
      o.lineHeight,
      o.blocks.length
    ), s.isCodeBlock = !!(s.isCodeBlock || o.isCodeLike || o.hasTableColumns), s.isStructuredBlock = !!(s.isStructuredBlock || o.hasTableColumns);
  }
  return Or(i, t);
}
function dr(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: kr(l),
    block: l
  })).filter((l) => br(l.bbox)).sort(oi);
  if (n.length <= 1)
    return [He(e, t)];
  if (gr(n, t))
    return [He(e, t)];
  const { cuts: i, rows: o } = fr(n);
  if (i.length < 2 || o.length <= 1)
    return [He(e, t)];
  const s = wr(i, o), r = yr(s).filter((l) => l.units.length > 0).map((l) => l.units.map((h) => h.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [He(e, t)];
}
function gr(e, t) {
  if (e.length < 2)
    return !0;
  const n = [...e].sort(oi);
  let i = 0, o = 0;
  for (let s = 1; s < n.length; s += 1) {
    const a = n[s - 1].bbox, r = n[s].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const h = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(Math.min(a.right - a.left, r.right - r.left), 1), f = h / u >= 0.45, v = Math.abs(a.left - r.left) <= t * 1.5;
    (f || v) && (o += 1);
  }
  return i > 0 && o / i >= 0.72;
}
function fr(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], o = [];
  let s = [], a = 0;
  for (; a < e.length; ) {
    const h = e[a].bbox.bottom, u = [];
    for (; a < e.length && e[a].bbox.top <= h; )
      u.push(e[a]), a += 1;
    u.sort((d, M) => d.bbox.left - M.bbox.left || d.bbox.right - M.bbox.right);
    const f = mr(u, t, n, i.length), { gaps: v, removedGaps: y } = pr(s, f), S = i.length - 1;
    for (const d of y)
      o.push({
        left: d.left,
        right: d.right,
        startRow: d.startRow,
        endRow: S
      });
    s = v, i.push(u);
  }
  const r = i.length - 1;
  for (const l of s)
    o.push({
      left: l.left,
      right: l.right,
      startRow: l.startRow,
      endRow: r
    });
  return o.sort((l, h) => l.left - h.left || l.right - h.right), { cuts: o, rows: i };
}
function mr(e, t, n, i) {
  const o = [];
  let s = t;
  for (const a of e)
    a.bbox.left > s && o.push({ left: s, right: a.bbox.left, startRow: i }), a.bbox.right > s && (s = a.bbox.right);
  return o.push({ left: s, right: n, startRow: i }), o;
}
function pr(e, t) {
  const n = e.map(() => !1), i = t.map(() => !1), o = [];
  for (let s = 0; s < e.length; s += 1) {
    const a = e[s];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], h = Math.max(a.left, l.left), u = Math.min(a.right, l.right);
      h <= u && (o.push({ left: h, right: u, startRow: a.startRow }), n[s] = !0, i[r] = !0);
    }
  }
  for (let s = 0; s < t.length; s += 1)
    i[s] || o.push(t[s]);
  return {
    gaps: o,
    removedGaps: e.filter((s, a) => !n[a])
  };
}
function wr(e, t) {
  const n = t.map(() => []);
  for (const r of e)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      n[l]?.push({ left: r.left, right: r.right });
  for (const r of n)
    r.sort((l, h) => l.left - h.left || l.right - h.right);
  const i = {
    xLeft: e[0].left - 1,
    xRight: e[e.length - 1].right + 1,
    rowTop: -1,
    rowBottom: -1,
    units: [],
    children: []
  }, o = [i];
  let s = [];
  const a = (r) => {
    const l = r.xRight - 2, h = o.filter((y) => l >= y.xLeft && l <= y.xRight + 1e-4 && y.rowBottom < r.rowTop), u = Math.max(...h.map((y) => y.rowBottom), i.rowBottom), f = h.filter((y) => y.rowBottom === u);
    (f.length > 0 ? f.reduce((y, S) => S.xRight > y.xRight ? S : y) : i).children.push(r), o.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = n[r], h = [];
    for (const y of s) {
      let S = !1, d = !1, M = !1;
      for (const P of l)
        if (an(P.right, y.xLeft) && (S = !0), an(P.left, y.xRight) && (d = !0), y.xLeft < P.left && P.left < y.xRight || y.xLeft < P.right && P.right < y.xRight) {
          M = !0;
          break;
        }
      !S || !d || M ? a(y) : (y.rowBottom = r, h.push(y));
    }
    s = h;
    let u = 0, f = 0;
    const v = t[r];
    for (; u < v.length && l.length >= 2; ) {
      const y = v[u];
      f + 1 >= l.length && (f = Math.max(0, l.length - 2));
      const S = l[f].right, d = l[f + 1].left;
      if (y.bbox.left + 1e-4 > d && f < l.length - 2) {
        f += 1;
        continue;
      }
      let M = s.find((P) => an(P.xLeft, S) && an(P.xRight, d));
      M || (M = {
        xLeft: S,
        xRight: d,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, s.push(M)), M.units.push(y), u += 1;
    }
  }
  for (const r of s)
    a(r);
  for (const r of o)
    r.children.sort((l, h) => l.xLeft - h.xLeft || l.rowTop - h.rowTop), r.units.sort(oi);
  return i;
}
function yr(e) {
  const t = [e], n = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (n.push(i), t.push(...[...i.children].reverse()));
  }
  return n;
}
function He(e, t) {
  return [...e].sort((n, i) => {
    const o = n.y - i.y;
    return Math.abs(o) > t * 0.45 ? o : n.x - i.x;
  });
}
function vr(e, t) {
  const n = re(Bt(e.map((a) => a.width)), t * 0.5), i = Math.max(n * 1.4, t * 0.28), o = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), s = [];
  for (const a of o) {
    const r = a.x + a.width / 2, l = s[s.length - 1], h = l ? Bt(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - h) <= i ? l.push(a) : s.push([a]);
  }
  return s.map((a) => {
    const r = [...a].sort((v, y) => v.y - y.y), l = r.reduce((v, y, S) => {
      const d = y.text.trim();
      return S === 0 ? d : ai(v, d);
    }, ""), h = Ao(r), u = Bt(r.map((v) => re(v.fontSize, t))), f = Bt(r.map((v) => kn(v)));
    return {
      text: l,
      blocks: r,
      bbox: h,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: f,
      angle: Bt(r.map((v) => v.angle || 0))
    };
  });
}
function xr(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const o = Math.max(i.width, 1);
    return i.height > o * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function kr(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function br(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function oi(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function an(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function Sr(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || Cr(n, t) || _r(i))
      return null;
    const o = Tr(Mr(i, n, t));
    return o === n.text ? n : { ...n, text: o };
  }).filter((n) => !!n);
}
function Cr(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function Mr(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function _r(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function Tr(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function si(e, t) {
  const n = [...e].sort((s, a) => {
    const r = s.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : s.x - a.x;
  }), i = [], o = t * 0.45;
  for (const s of n) {
    const a = i[i.length - 1];
    a && Math.abs(s.y - a.y) < o && !Vr(a.blocks, s, t) ? (a.blocks.push(s), a.y = Bt(a.blocks.map((r) => r.y))) : i.push({ y: s.y, blocks: [s] });
  }
  return i.map((s) => zr(s.blocks, t));
}
function zr(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = Ao(n), o = n.reduce((r, l, h) => {
    const u = l.text.trim();
    return h === 0 ? u : Ar(r, u);
  }, ""), s = Bt(n.map((r) => re(r.fontSize, t))), a = Bt(n.map((r) => kn(r)));
  return {
    text: o,
    blocks: n,
    bbox: i,
    fontSize: s,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: Ur(n, t),
    isCodeLike: Lo(o)
  };
}
function Rr(e, t, n) {
  const i = si(e.blocks, n), o = i[i.length - 1];
  if (!o) return !1;
  const s = Ge(o.text);
  if (xn(o.text) || Ge(t.text) || s && !Lr(o, t, n) || t.isCodeLike || o.isCodeLike || t.hasTableColumns || o.hasTableColumns) return !1;
  const a = t.bbox.y - (o.bbox.y + o.bbox.height);
  if (a < -n * 0.25 || a >= n * 1.8 || Br(i, a, n) || Nr(o, t, a, n) || Hr(o, t, a, n) || jr(o, t, a, n) || Fr(o, t, a, n))
    return !1;
  if (s)
    return !0;
  const r = Math.max(n * 1.2, o.lineHeight * 0.9);
  return Math.abs(t.bbox.x - o.bbox.x) <= r;
}
function Lr(e, t, n) {
  if (Ro(t.text))
    return !1;
  const i = t.bbox.x - e.bbox.x, o = Math.max(n * 0.8, e.lineHeight * 0.65);
  return i >= o;
}
function Pr(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: Bt(e.blocks.map((t) => t.angle || 0))
  };
}
function Ar(e, t) {
  return ai(e, t);
}
function Ir(e, t) {
  return ai(e, t);
}
function ai(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const o = n.charAt(n.length - 1), s = i.charAt(0), a = n.charAt(n.length - 2);
  return o === "-" && sn.test(a) && sn.test(s) ? `${n.slice(0, -1)}${i}` : Kr(s) || qr(o) ? `${n}${i}` : Ni.test(o) || Ni.test(s) || Ui(o) || Ui(s) ? `${n}${i}` : sn.test(o) && sn.test(s) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function xn(e) {
  return cr.test(e.trim());
}
function Ge(e) {
  return hr.test(e);
}
function Or(e, t) {
  return e.flatMap((n) => Dr(n, t));
}
function Dr(e, t) {
  const n = zo(e.text);
  if (n.length <= 1)
    return [e];
  const i = si(e.blocks, t), o = i.length === n.length;
  return n.map((s, a) => {
    const r = o ? i[a] : null, l = r?.bbox || $r(e.bbox, a, n.length), h = r?.blocks || [Er(e, s, l, a)];
    return {
      ...e,
      text: s,
      blocks: h,
      bbox: l,
      isCodeBlock: !!h.some((u) => Lo(u.text)),
      isStructuredBlock: e.isStructuredBlock,
      fontSize: Bt(h.map((u) => re(u.fontSize, e.fontSize || t))),
      lineHeight: Bt(h.map((u) => kn(u))),
      angle: Bt(h.map((u) => u.angle || 0))
    };
  });
}
function zo(e) {
  const t = e.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(zo);
  const n = Wr(e);
  return n.length > 1 ? n.flatMap(ji) : ji(e);
}
function Wr(e) {
  const t = e.trim(), n = [];
  Hi.lastIndex = 0;
  for (const i of t.matchAll(Hi)) {
    const o = i[0], s = i.index ?? 0;
    n.push(s + (o.startsWith(" ") ? 1 : 0));
  }
  return n.length <= 1 ? [t] : n.map((i, o) => {
    const s = n[o + 1] ?? t.length;
    return t.slice(i, s).trim();
  }).filter(Boolean);
}
function ji(e) {
  const t = e.trim();
  if (!Ge(t))
    return [t];
  const n = t.match(/^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/);
  return !n || !Ro(n[2]) ? [t] : [n[1].trim(), n[2].trim()];
}
function $r(e, t, n) {
  const i = e.height / Math.max(n, 1);
  return {
    x: e.x,
    y: e.y + i * t,
    width: e.width,
    height: i
  };
}
function Er(e, t, n, i) {
  const o = e.blocks[Math.min(i, Math.max(e.blocks.length - 1, 0))];
  return {
    ...o || {
      fontSize: e.fontSize || n.height,
      lineHeight: e.lineHeight || n.height,
      angle: e.angle || 0
    },
    text: t,
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height,
    fontSize: o?.fontSize || e.fontSize || n.height,
    lineHeight: o?.lineHeight || e.lineHeight || n.height,
    angle: o?.angle || e.angle || 0
  };
}
function Ro(e) {
  const t = e.trim();
  return !t || xn(t) || Ge(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Br(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], h = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    h > 0 && i.push(h);
  }
  const o = i.length > 0 ? Bt(i) : 0, s = Math.max(o * 2.2, n * 1.15);
  return t > s;
}
function Nr(e, t, n, i) {
  const o = e.text.trim();
  if (!o || xn(o) || Ge(o) || e.isCodeLike || o.endsWith("-"))
    return !1;
  const s = o.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(o) && s <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(o) && o.length <= 12 && a, h = r || l;
  return e.fontSize >= t.fontSize * 1.18 && h ? !0 : n > i * 0.7 && h;
}
function Hr(e, t, n, i) {
  if (n <= 0)
    return !1;
  const o = Math.max(e.fontSize, t.fontSize), s = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = o / s, r = n / Math.max(s, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, h = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && h;
}
function jr(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const s = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return s && a;
}
function Fr(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : Fi(e.text) && Fi(t.text);
}
function Fi(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !xn(t);
}
function Lo(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(t) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(t) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Vr(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), o = i[i.length - 1], s = t.x - (o.x + o.width);
  return s > n * 0.9 && Gr(o.text) && Po(t.text) ? !1 : s > n * 3.2;
}
function Ur(e, t) {
  if (e.length < 2)
    return e.some((o) => Yr(o.text));
  const n = [...e].sort((o, s) => o.x - s.x);
  let i = 0;
  for (let o = 1; o < n.length; o++) {
    const s = n[o - 1], a = n[o], r = n[o].x - (s.x + s.width);
    (r > t * 1.8 || r > t * 0.9 && Zr(s.text) && Po(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Yr(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Zr(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function Gr(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function Po(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function Ao(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => Io(n, i), t[0]);
}
function Io(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), o = Math.max(e.x + e.width, t.x + t.width), s = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: o - n,
    height: s - i
  };
}
function Xr(e) {
  return re(Bt(e.map((t) => kn(t))), 16);
}
function kn(e) {
  return re(e.lineHeight, re(e.height, re(e.fontSize, 16) * 1.2));
}
function Vi(e, t, n, i) {
  const o = t + i;
  return o <= 0 ? n : (e * t + n * i) / o;
}
function re(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function Bt(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function Kr(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function qr(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function Ui(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
class Jr {
  constructor(t, n, i, o) {
    A(this, "canvas");
    A(this, "coordinateSystem");
    A(this, "drawingEngine");
    A(this, "eventHandler");
    // 状态管理
    A(this, "selectionRect", null);
    A(this, "annotations", []);
    A(this, "currentAnnotation", null);
    A(this, "selectedAnnotation", null);
    A(this, "hoveredAnnotation", null);
    // 拖拽状态
    A(this, "draggedAnnotation", null);
    A(this, "dragStartPoint", null);
    A(this, "resizingAnnotation", null);
    A(this, "resizeStartBounds", null);
    A(this, "resizeOperation", null);
    // 编辑状态
    A(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    A(this, "annotationUndoStack", []);
    A(this, "annotationRedoStack", []);
    A(this, "pendingDragSnapshot", null);
    A(this, "pendingResizeSnapshot", null);
    // 工具设置
    A(this, "currentTool", w.Select);
    A(this, "currentStyle", { color: "#ff4444", lineWidth: 3, opacity: 1 });
    A(this, "textSize", 16);
    A(this, "mosaicSize", 8);
    A(this, "showGuides", !0);
    // 取色器状态
    A(this, "colorPickerState", {
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
    A(this, "allWindows", []);
    A(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    A(this, "snappedWindow", null);
    A(this, "showSnapPreview", !1);
    // 点击拖拽区分
    A(this, "pendingSnapWindow", null);
    A(this, "dragStartPosition", null);
    A(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    A(this, "throttleTimer", null);
    A(this, "lastThrottledTimestamp", 0);
    A(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    A(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    A(this, "backgroundImage", null);
    // 是否正在加载完整背景图
    A(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    A(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    A(this, "offlineModelActivated", !1);
    // Canvas 池
    A(this, "canvasPool", Un.getInstance());
    // 回调函数
    A(this, "onStateChange");
    A(this, "onTextInputRequest");
    A(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    A(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    A(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    A(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    A(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    A(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    A(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    A(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = o, this.coordinateSystem = new xa(t), this.drawingEngine = new va(t, this.coordinateSystem), this.eventHandler = new ka(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), ue.preloadModules();
  }
  // 公开方法：触发背景图重新加载（响应 preview-ready 事件）
  triggerBackgroundReload() {
    this.backgroundReloadPending || (this.backgroundReloadPending = !0, this.isLoadingBackground = !1, this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null), this.loadScreenBackground().finally(() => {
      this.backgroundReloadPending = !1;
    }));
  }
  cloneAnnotationData(t) {
    return {
      ...t,
      points: t.points.map((n) => ({ ...n })),
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
    if (this.annotations = t.annotations.map((n) => nn.fromData(this.cloneAnnotationData(n))).filter((n) => n !== null), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const n = this.annotations.find((i) => i.getData().id === t.selectedAnnotationId);
      n && (n.updateData({ selected: !0 }), this.selectedAnnotation = n);
    }
    this.draw(), this.onStateChange?.();
  }
  // 初始化画布
  initCanvas() {
    const t = this.canvas.parentElement;
    if (!t) return;
    const n = t.clientWidth, i = t.clientHeight, o = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(n * o), this.canvas.height = Math.round(i * o), this.canvas.style.width = n + "px", this.canvas.style.height = i + "px";
    const s = this.canvas.getContext("2d");
    s && s.scale(o, o), this.drawPendingState(), this.coordinateSystem.updateCanvasRect(this.canvas);
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
        this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage = null), await this.loadPreviewImage(), await this.loadFullBackgroundImage();
      } catch (t) {
        L.error("[截图] 加载屏幕背景失败", t), this.createFallbackBackground();
      } finally {
        this.isLoadingBackground = !1;
      }
    }
  }
  // 加载预览图（等待但不显示）
  // 注意：预览图只用于等待，不作为背景显示（避免模糊）
  async loadPreviewImage() {
    let i = 0;
    for (; i < 5e3; )
      try {
        const o = await b("get_screenshot_preview");
        if (o && o.trim().length > 0)
          return;
        await new Promise((s) => setTimeout(s, 100)), i += 100;
      } catch (o) {
        const s = o?.toString() || "";
        if (s.includes("No screenshot preview available") || s.includes("being captured") || s.includes("Preview load timeout")) {
          await new Promise((a) => setTimeout(a, 100)), i += 100;
          continue;
        }
        break;
      }
  }
  // 加载完整背景图（高质量PNG）
  async loadFullBackgroundImage() {
    let i = 0;
    for (; i < 5e3; )
      try {
        const o = await b("get_screenshot_background");
        if (o) {
          const s = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              s.onload = null, s.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            s.onload = () => {
              clearTimeout(l), this.backgroundImage = s, this.draw(), a();
            }, s.onerror = (h) => {
              clearTimeout(l), r(h);
            }, s.src = `data:${this.detectImageMime(o)};base64,${o}`;
          });
          return;
        }
      } catch (o) {
        if (o?.toString().includes("No screenshot background available") || o?.toString().includes("being captured")) {
          await new Promise((s) => setTimeout(s, 100)), i += 100;
          continue;
        }
        throw o;
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
      const n = document.createElement("canvas");
      n.width = 1, n.height = 1;
      const i = n.getContext("2d");
      i && (i.fillStyle = "rgba(0, 0, 0, 0.3)", i.fillRect(0, 0, 1, 1), t.src = n.toDataURL()), t.onload = () => {
        this.backgroundImage = t, this.draw();
      };
    } catch (t) {
      L.error("[截图] 创建后备背景失败", t);
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
      let t = { x: 0, y: 0, scale: 1, isFullscreen: !1 }, n = [];
      const i = 10, o = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < i; l++)
        try {
          const [h, u] = await Promise.all([
            b("get_cached_monitor_info"),
            b("get_cached_window_list")
          ]);
          t = {
            x: h.x,
            y: h.y,
            scale: h.scale,
            isFullscreen: !1
          }, n = u;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((f) => setTimeout(f, o));
            continue;
          }
          const u = await Promise.all([
            b("get_window_info"),
            b("get_all_windows")
          ]);
          t = u[0], n = u[1];
        }
      const s = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.allWindows = n.filter((l) => this.isValidWindow(l)).map((l) => ({
        ...l,
        x: Math.round(l.x / s),
        y: Math.round(l.y / s),
        width: Math.round(l.width / s),
        height: Math.round(l.height / s)
      })).filter(
        (l) => l.x >= -l.width && l.y >= -l.height && l.x < a + l.width && l.y < r + l.height
      );
    } catch (t) {
      L.error("[截图] 加载窗口列表失败", t), this.allWindows = [];
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
      let o;
      try {
        const r = await b("get_cached_monitor_info");
        o = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        o = await b("get_window_info");
      }
      let s;
      try {
        const r = await b("get_mouse_position"), l = o?.scale || 1;
        s = {
          x: Math.round((r.x - o.x) / l),
          y: Math.round((r.y - o.y) / l)
        };
      } catch {
        s = {
          x: Math.round(this.canvas.width / (window.devicePixelRatio || 1) / 2),
          y: Math.round(this.canvas.height / (window.devicePixelRatio || 1) / 2)
        };
      }
      const a = this.detectNearbyWindow(s);
      a && (this.snappedWindow = a, this.showSnapPreview = !0, this.draw());
    } catch (t) {
      L.error("[截图] 初始窗口吸附检测失败", t);
    }
  }
  // 检查窗口是否有效
  isValidWindow(t) {
    if (!t.title || t.width < 100 || t.height < 100 || t.title.includes("screenshot") || t.title.includes("截图") || t.title.includes("Screenshot"))
      return !1;
    const n = [
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
    for (const o of n)
      if (t.title === o || t.title.startsWith(o))
        return !1;
    return !(t.title.startsWith("NVIDIA") || t.title.startsWith("Intel") || t.title.startsWith("AMD") || t.title.startsWith("Realtek") || t.title.includes("Driver") || t.title.includes("Graphics") || t.title.includes("Background Task Host") || t.title.includes("Runtime Broker") || t.title.includes("Service Host") || t.title.includes("Windows Modules Installer") || t.title.includes("System Interrupts") || t.title.includes("Registry") || t.title.includes("dwm.exe") || t.title.includes("explorer.exe") || t.title.includes("winlogon.exe") || t.title.trim().replace(/[^\w\s\u4e00-\u9fa5]/g, "").length < 2);
  }
  detectNearbyWindow(t) {
    if (this.allWindows.length === 0) return null;
    const n = [];
    for (const i of this.allWindows) {
      if (t.x >= i.x && t.x <= i.x + i.width && t.y >= i.y && t.y <= i.y + i.height) {
        n.push({ window: i, distance: 0 });
        continue;
      }
      const s = Math.abs(t.x - i.x), a = Math.abs(t.x - (i.x + i.width)), r = Math.abs(t.y - i.y), l = Math.abs(t.y - (i.y + i.height)), h = Math.min(s, a, r, l);
      h <= this.snapThreshold && n.push({ window: i, distance: h });
    }
    return n.length === 0 ? null : n.reduce((i, o) => o.window.display_order < i.window.display_order ? o : o.window.display_order > i.window.display_order ? i : o.distance < i.distance ? o : o.distance > i.distance ? i : o.window.is_fullscreen && !i.window.is_fullscreen ? o : i).window;
  }
  // 绑定鼠标事件
  bindMouseEvents() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler), this.canvas.addEventListener("mousemove", this.mouseMoveHandler), this.canvas.addEventListener("mouseup", this.mouseUpHandler), this.canvas.addEventListener("dblclick", this.doubleClickHandler), window.addEventListener("keydown", this.keyDownHandler), window.addEventListener("keyup", this.keyUpHandler);
  }
  // 鼠标按下处理
  handleMouseDown(t) {
    t.preventDefault(), t.stopPropagation();
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getOperationType(
      n,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (i !== z.None)
      switch (this.eventHandler.setCurrentOperation(i), this.eventHandler.startDrawing(n), i) {
        case z.Drawing:
          !this.selectionRect && this.currentTool === w.Select && (this.dragStartPosition = { ...n }, this.snappedWindow ? this.pendingSnapWindow = this.snappedWindow : (this.selectionRect = {
            x: n.x,
            y: n.y,
            width: 0,
            height: 0
          }, this.onStateChange?.()));
          break;
        case z.DrawingRect:
        case z.DrawingEllipse:
        case z.DrawingLine:
        case z.DrawingArrow:
        case z.DrawingPen:
        case z.DrawingMosaic:
          this.startAnnotation(n);
          break;
        case z.DrawingText:
          this.startTextInput(n), this.eventHandler.stopDrawing();
          break;
        case z.ColorPicking:
          this.handleColorPicking(n), this.eventHandler.stopDrawing();
          break;
        case z.Pinning:
          this.selectionRect && (this.createPinWindow(), this.eventHandler.stopDrawing());
          break;
        case z.EditingAnnotation:
          this.selectAnnotationAtPoint(n), this.selectedAnnotation && this.selectedAnnotation.getData().type === w.Text && this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation);
          break;
        case z.MovingAnnotation:
          this.startAnnotationDrag(n);
          break;
        case z.ResizingAnnotationNW:
        case z.ResizingAnnotationSE:
          this.startAnnotationResize(n, i);
          break;
        case z.Moving:
        case z.ResizingNW:
        case z.ResizingNE:
        case z.ResizingSW:
        case z.ResizingSE:
        case z.ResizingN:
        case z.ResizingS:
        case z.ResizingW:
        case z.ResizingE:
          break;
      }
  }
  // 鼠标移动处理
  handleMouseMove(t) {
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(n), this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect && Ct(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapWindow = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(n) : this.draggedAnnotation ? this.updateAnnotationDrag(n) : this.resizingAnnotation ? this.updateAnnotationResize(n) : this.selectionRect && this.currentTool === w.Select && this.updateSelectionRect(n, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === w.Select && !this.selectionRect) {
        const o = this.detectNearbyWindow(n);
        o !== this.snappedWindow && (this.snappedWindow = o, this.showSnapPreview = !!o, this.draw());
      }
      this.updateHoverState(n), this.currentTool === w.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(n, this.selectionRect) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = n, this.draw(), this.throttledUpdateColorPreview(n)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapWindow && !this.selectionRect && (this.selectionRect = {
      x: this.pendingSnapWindow.x,
      y: this.pendingSnapWindow.y,
      width: this.pendingSnapWindow.width,
      height: this.pendingSnapWindow.height
    }), this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.showSnapPreview = !1, this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(n, this.annotations);
    i?.getData().type === w.Text && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(n, i));
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
  updateSelectionRect(t, n) {
    if (!this.selectionRect) return;
    const i = n.currentOperation, o = t.x - n.lastMousePos.x, s = t.y - n.lastMousePos.y;
    switch (i) {
      case z.Drawing:
        this.selectionRect.width = t.x - n.startPoint.x, this.selectionRect.height = t.y - n.startPoint.y;
        break;
      case z.Moving:
        this.selectionRect.x += o, this.selectionRect.y += s;
        break;
      case z.ResizingNW:
        this.selectionRect.x += o, this.selectionRect.y += s, this.selectionRect.width -= o, this.selectionRect.height -= s;
        break;
      case z.ResizingNE:
        this.selectionRect.y += s, this.selectionRect.width += o, this.selectionRect.height -= s;
        break;
      case z.ResizingSW:
        this.selectionRect.x += o, this.selectionRect.width -= o, this.selectionRect.height += s;
        break;
      case z.ResizingSE:
        this.selectionRect.width += o, this.selectionRect.height += s;
        break;
      case z.ResizingN:
        this.selectionRect.y += s, this.selectionRect.height -= s;
        break;
      case z.ResizingS:
        this.selectionRect.height += s;
        break;
      case z.ResizingW:
        this.selectionRect.x += o, this.selectionRect.width -= o;
        break;
      case z.ResizingE:
        this.selectionRect.width += o;
        break;
    }
    this.selectionRect.width < 10 && (this.selectionRect.width = 10), this.selectionRect.height < 10 && (this.selectionRect.height = 10);
  }
  // 选择指定位置的标注
  selectAnnotationAtPoint(t) {
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n && n !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === w.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
  }
  // 开始标注拖拽
  startAnnotationDrag(t) {
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n && (this.draggedAnnotation = n, this.dragStartPoint = t, this.pendingDragSnapshot = this.createHistorySnapshot(), this.selectedAnnotation !== n && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 })));
  }
  // 更新标注拖拽
  updateAnnotationDrag(t) {
    if (!this.draggedAnnotation || !this.dragStartPoint) return;
    const n = t.x - this.dragStartPoint.x, i = t.y - this.dragStartPoint.y;
    this.draggedAnnotation.move(n, i), this.constrainAnnotationToBounds(this.draggedAnnotation), this.dragStartPoint = t;
  }
  // 完成标注拖拽
  finishAnnotationDrag() {
    if (this.draggedAnnotation) {
      if (this.pendingDragSnapshot) {
        const t = this.draggedAnnotation.getData(), n = this.pendingDragSnapshot.annotations.find((o) => o.id === t.id);
        (n ? JSON.stringify(n.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingDragSnapshot), this.annotationRedoStack = []), this.pendingDragSnapshot = null;
      }
      this.draggedAnnotation = null, this.dragStartPoint = null;
    }
  }
  // 开始标注缩放
  startAnnotationResize(t, n) {
    const i = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    if (i) {
      this.resizingAnnotation = i, this.resizeOperation = n, this.pendingResizeSnapshot = this.createHistorySnapshot();
      const o = i.getBounds();
      o && (this.resizeStartBounds = { ...o }), this.selectedAnnotation !== i && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = i, this.selectedAnnotation.updateData({ selected: !0 }));
    }
  }
  // 更新标注缩放
  updateAnnotationResize(t) {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation) return;
    const n = this.resizingAnnotation.getData();
    if (n.points.length < 2) return;
    const i = n.points[0];
    switch (this.resizeOperation) {
      case z.ResizingAnnotationNW:
        this.resizingAnnotation.updateData({
          points: [t, n.points[1]]
        });
        break;
      case z.ResizingAnnotationSE:
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
        const t = this.resizingAnnotation.getData(), n = this.pendingResizeSnapshot.annotations.find((o) => o.id === t.id);
        (n ? JSON.stringify(n.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingResizeSnapshot), this.annotationRedoStack = []), this.pendingResizeSnapshot = null;
      }
      this.resizingAnnotation = null, this.resizeStartBounds = null, this.resizeOperation = null;
    }
  }
  // 边界约束：确保标注不超出选择框
  constrainAnnotationToBounds(t) {
    if (!this.selectionRect || !t.getBounds()) return;
    const i = t.getData();
    if (i.points.length < 1) return;
    const o = this.selectionRect;
    let s = !1, a = [...i.points];
    if (i.points.length >= 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        l.x < o.x ? (a[r] = { ...l, x: o.x }, s = !0) : l.x > o.x + o.width && (a[r] = { ...l, x: o.x + o.width }, s = !0), l.y < o.y ? (a[r] = { ...l, y: o.y }, s = !0) : l.y > o.y + o.height && (a[r] = { ...l, y: o.y + o.height }, s = !0);
      }
    if (i.points.length > 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        (l.x < o.x || l.x > o.x + o.width || l.y < o.y || l.y > o.y + o.height) && (a.splice(r, 1), r--, s = !0);
      }
    s && t.updateData({ points: a });
  }
  // 更新悬停状态
  updateHoverState(t) {
    if (this.currentTool !== w.Select) {
      this.updateToolCursor();
      return;
    }
    const n = this.eventHandler.getAnnotationAtPoint(t, this.annotations);
    n !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = n && n.getData().type !== w.Mosaic ? n : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
  }
  // 更新鼠标样式
  updateCursorForPosition(t) {
    if (this.currentTool !== w.Select) {
      this.updateToolCursor();
      return;
    }
    if (!this.selectionRect) {
      this.updateCursor("crosshair");
      return;
    }
    const n = this.eventHandler.getOperationType(
      t,
      this.currentTool,
      this.selectionRect,
      this.annotations
    ), o = {
      [z.Moving]: "move",
      [z.ResizingNW]: "nw-resize",
      [z.ResizingNE]: "ne-resize",
      [z.ResizingSW]: "sw-resize",
      [z.ResizingSE]: "se-resize",
      [z.ResizingN]: "n-resize",
      [z.ResizingS]: "s-resize",
      [z.ResizingW]: "w-resize",
      [z.ResizingE]: "e-resize",
      [z.EditingAnnotation]: "pointer",
      [z.MovingAnnotation]: "move",
      [z.ResizingAnnotationNW]: "nw-resize",
      [z.ResizingAnnotationSE]: "se-resize",
      [z.Drawing]: "crosshair"
    }[n] || "default";
    this.updateCursor(o);
  }
  // 更新画布cursor样式
  updateCursor(t) {
    this.canvas.style.cursor !== t && (this.canvas.style.cursor = t);
  }
  // 根据当前工具更新光标样式
  updateToolCursor() {
    switch (this.currentTool) {
      case w.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case w.Mosaic:
        this.updateCursor(this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666"));
        break;
      case w.ColorPicker:
        this.updateCursor(this.createColorPickerCursor());
        break;
      case w.Rectangle:
      case w.Ellipse:
      case w.Line:
      case w.Arrow:
      case w.Text:
        this.updateCursor("crosshair");
        break;
      default:
        this.updateCursor("default");
    }
  }
  // 创建圆形光标（用于画笔和马赛克）
  createCircleCursor(t, n = "#666") {
    const i = Math.max(t / 2, 2), o = i * 2 + 4, s = o / 2, a = `
      <svg width="${o}" height="${o}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${s}" cy="${s}" r="${i}"
                fill="none" stroke="${n}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${s}" cy="${s}" r="1" fill="${n}" opacity="0.9"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(a)}') ${s} ${s}, crosshair`;
  }
  createPenCursor(t = "#ff4444") {
    const n = `
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20l4.8-1.1L20.2 7.5a2.2 2.2 0 0 0 0-3.1l-.6-.6a2.2 2.2 0 0 0-3.1 0L5.1 15.2 4 20z"
              fill="white" stroke="#111827" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M14.8 5.5l3.7 3.7" stroke="#111827" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M5.1 15.2L8.8 18.9" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    return `url('data:image/svg+xml;utf8,${encodeURIComponent(n)}') 4 20, crosshair`;
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
    if (this.drawingEngine.clear(), this.backgroundImage ? this.drawBackground() : this.drawPendingState(), this.selectionRect && this.drawingEngine.drawMask(this.selectionRect), this.showSnapPreview && this.snappedWindow && !this.selectionRect && this.drawSnapPreview(), this.annotations.length > 0) {
      const t = this.editingAnnotation ? this.annotations.filter((n) => n.getData().id !== this.editingAnnotation.getData().id) : this.annotations;
      this.drawingEngine.drawAnnotations(t, this.selectionRect || void 0);
    }
    this.currentAnnotation && this.drawingEngine.drawCurrentAnnotation(this.currentAnnotation, this.selectionRect || void 0), this.selectionRect && this.drawingEngine.drawSelectionBox(this.selectionRect, this.showGuides), this.colorPickerState.isActive && this.selectionRect && this.drawingEngine.drawColorPicker(this.colorPickerState, this.selectionRect), this.translationOverlay.isVisible && this.selectionRect && this.drawTranslationOverlay();
  }
  // 绘制翻译覆盖层（智能排版）
  drawTranslationOverlay() {
    if (!this.selectionRect) return;
    const t = this.canvas.getContext("2d");
    if (!t) return;
    t.save();
    const { x: n, y: i, width: o, height: s } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const d = n + o / 2, M = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(n, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let P = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? P = "正在启动 AI 模型服务..." : P = "正在由 AI 识图翻译..."), t.fillText(P, d, M), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const d = n + o / 2, M = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(n, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, d, M), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: n, y: i, width: o, height: s }, l = this.sampleRegionColor(r), h = l.brightness < 128;
    let u, f;
    if (h) {
      const d = Math.max(0, Math.round(l.r * 0.1)), M = Math.max(0, Math.round(l.g * 0.1)), P = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${d}, ${M}, ${P}, 0.95)`, f = "rgba(255, 255, 255, 0.9)";
    } else {
      const d = Math.min(255, Math.round(l.r + (255 - l.r) * 0.95)), M = Math.min(255, Math.round(l.g + (255 - l.g) * 0.95)), P = Math.min(255, Math.round(l.b + (255 - l.b) * 0.95));
      u = `rgba(${d}, ${M}, ${P}, 0.95)`, f = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(n, i, o, s), t.fillStyle = f, t.textAlign = "left", t.textBaseline = "top";
    const v = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map((d) => ({
      text: d.text,
      translatedText: d.translatedText,
      blocks: [d],
      bbox: {
        x: d.x,
        y: d.y,
        width: d.width,
        height: d.height
      },
      isCodeBlock: d.isCodeBlock,
      isStructuredBlock: !1,
      fontSize: d.fontSize,
      lineHeight: d.lineHeight,
      angle: d.angle
    })), y = v.filter((d) => d.isStructuredBlock), S = v.filter((d) => !d.isStructuredBlock);
    S.length > 0 && this.drawFlowedTranslationBlocks(t, S, n, i, a, o, s);
    for (const d of y)
      this.drawStructuredTranslationBlock(t, d, n, i, a, o, s);
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, o, s, a, r) {
    const l = [...n].filter((T) => (T.translatedText || T.text).trim()).sort((T, U) => {
      const Z = T.bbox.y - U.bbox.y;
      return Math.abs(Z) > 4 ? Z : T.bbox.x - U.bbox.x;
    });
    if (l.length === 0)
      return;
    const h = Math.max(24, r - s * 2), u = s, f = (T, U, Z) => l.map((X) => {
      const V = (X.translatedText || X.text).trim(), B = Math.max(12, Math.min(X.fontSize || 16, 48)), Q = Math.max(8, Math.round(B * T)), q = X.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', tt = Math.max(
        s,
        Math.min(X.bbox.x + s, a * 0.38)
      ), et = U ? s : tt, at = Math.max(48, a - et - u), xt = X.lineHeight || Q * 1.35, nt = Math.max(
        Q * (Z ? 1.04 : 1.14),
        Math.min(xt * T, Q * (Z ? 1.18 : 1.42))
      );
      return t.font = `${Q}px ${q}`, {
        text: V,
        fontSize: Q,
        fontFamily: q,
        lineHeight: nt,
        paragraphGap: Z ? Math.max(1, nt * 0.16) : Math.max(3, nt * 0.35),
        x: i + et,
        lines: this.wrapTextToLines(t, V, at)
      };
    }), v = (T) => T.reduce((U, Z, X) => {
      const V = X === T.length - 1 ? 0 : Z.paragraphGap;
      return U + Z.lines.length * Z.lineHeight + V;
    }, 0);
    let y = f(1, !1, !1), S = v(y);
    if (S > h) {
      const T = Math.max(0.56, h / S);
      y = f(T, !1, !1), S = v(y);
    }
    if (S > h && (y = f(1, !0, !1), S = v(y)), S > h) {
      const T = Math.max(0.38, h / S * 0.96);
      y = f(T, !0, !0), S = v(y);
    }
    if (S > h) {
      const T = Math.max(0.3, h / S * 0.94);
      y = f(T, !0, !0), S = v(y);
    }
    const d = Math.min(...l.map((T) => T.bbox.y)), M = o + Math.max(s, Math.min(d, r - s)), P = o + r - s;
    let F = M + S > P ? o + s : M;
    for (const T of y) {
      t.font = `${T.fontSize}px ${T.fontFamily}`;
      for (const U of T.lines)
        t.fillText(U, T.x, F), F += T.lineHeight;
      F += T.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, o, s, a, r) {
    const l = [...n.blocks].sort((f, v) => f.x - v.x), h = Math.max(12, Math.min(n.fontSize || 14, 32)), u = n.lineHeight || h * 1.35;
    t.font = `${h}px "Consolas", "Monaco", monospace`;
    for (const f of l) {
      const v = f.translatedText || f.text;
      if (!v.trim()) continue;
      const y = i + f.x + Math.min(4, s), S = o + f.y, d = l.find((T) => T.x > f.x), M = d ? Math.max(f.width, d.x - f.x - 8) : Math.max(f.width, a - f.x - s), P = this.wrapTextToLines(t, v.trim(), M);
      let F = S;
      for (const T of P) {
        if (F + h > o + r) break;
        t.fillText(T, y, F), F += u;
      }
    }
  }
  /**
   * 将文字按宽度换行，返回行数组
   */
  wrapTextToLines(t, n, i) {
    const o = n.replace(/\s+/g, " ").trim();
    if (!o)
      return [];
    const s = [], a = /\s/.test(o) ? o.split(/(\s+)/).filter((h) => h.length > 0) : Array.from(o);
    let r = "";
    const l = (h) => {
      let u = "";
      for (const f of Array.from(h)) {
        const v = u + f;
        t.measureText(v).width > i && u !== "" ? (s.push(u), u = f) : u = v;
      }
      r = u;
    };
    for (const h of a) {
      const u = /^\s+$/.test(h), f = u ? " " : h, v = r + f;
      if (t.measureText(v).width <= i) {
        r = v;
        continue;
      }
      r.trim() && (s.push(r.trimEnd()), r = ""), !u && (t.measureText(f).width > i ? l(f) : r = f);
    }
    return r.trim() && s.push(r.trimEnd()), s;
  }
  /**
   * 从背景图像采样指定区域的平均颜色
   * @param rect 采样区域（相对于canvas的坐标）
   * @param sampleSize 采样点数量（默认16）
   * @returns 采样得到的颜色信息，包含RGB值和亮度值
   */
  sampleRegionColor(t, n = 16) {
    const i = { r: 255, g: 255, b: 255, brightness: 255 };
    if (!this.backgroundImage)
      return i;
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), i;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, f = this.canvas.width / o, v = this.canvas.height / o, y = h / f, S = u / v, d = t.x * y, M = t.y * S, P = t.width * y, F = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        d,
        M,
        P,
        F,
        0,
        0,
        s,
        a
      );
    } catch (G) {
      return L.error("[截图] 采样区域绘制失败", G), this.canvasPool.release(r), i;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (G) {
      return L.error("[截图] 获取像素数据失败", G), this.canvasPool.release(r), i;
    }
    const U = T.data, Z = Math.ceil(Math.sqrt(n)), X = s / (Z + 1), V = a / (Z + 1);
    let B = 0, Q = 0, q = 0, tt = 0;
    for (let G = 1; G <= Z; G++)
      for (let it = 1; it <= Z && !(tt >= n); it++) {
        const yt = Math.floor(it * X), kt = Math.floor(G * V);
        if (yt >= 0 && yt < s && kt >= 0 && kt < a) {
          const I = (kt * s + yt) * 4;
          I >= 0 && I + 2 < U.length && (B += U[I], Q += U[I + 1], q += U[I + 2], tt++);
        }
      }
    if (this.canvasPool.release(r), tt === 0)
      return i;
    const et = Math.round(B / tt), at = Math.round(Q / tt), xt = Math.round(q / tt), nt = this.getBrightness(et, at, xt);
    return {
      r: et,
      g: at,
      b: xt,
      brightness: nt
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
  getBrightness(t, n, i) {
    const o = Math.max(0, Math.min(255, t)), s = Math.max(0, Math.min(255, n)), a = Math.max(0, Math.min(255, i));
    return Math.round(0.299 * o + 0.587 * s + 0.114 * a);
  }
  /**
   * 根据采样颜色计算覆盖层样式
   * 深色背景（亮度 < 128）：使用深色半透明背景 + 浅色文字
   * 浅色背景（亮度 >= 128）：使用浅色半透明背景 + 深色文字
   * @param sampledColor 采样得到的背景颜色
   * @returns 覆盖层样式
   */
  calculateOverlayStyle(t) {
    const { brightness: n } = t, i = n < 128, o = n / 255, a = 0.85 + Math.abs(o - 0.5) * 2 * 0.1;
    let r, l;
    if (i) {
      const h = Math.max(0, Math.round(t.r * 0.2)), u = Math.max(0, Math.round(t.g * 0.2)), f = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${h}, ${u}, ${f}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const h = Math.min(255, Math.round(t.r + (255 - t.r) * 0.8)), u = Math.min(255, Math.round(t.g + (255 - t.g) * 0.8)), f = Math.min(255, Math.round(t.b + (255 - t.b) * 0.8));
      r = `rgba(${h}, ${u}, ${f}, ${a})`, l = "rgba(0, 0, 0, 0.9)";
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
  isUniformColor(t, n = 100, i = 16) {
    if (!this.backgroundImage)
      return !1;
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const h = this.backgroundImage.width, u = this.backgroundImage.height, f = this.canvas.width / o, v = this.canvas.height / o, y = h / f, S = u / v, d = t.x * y, M = t.y * S, P = t.width * y, F = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        d,
        M,
        P,
        F,
        0,
        0,
        s,
        a
      );
    } catch (G) {
      return L.error("[截图] isUniformColor: 采样区域绘制失败", G), this.canvasPool.release(r), !1;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (G) {
      return L.error("[截图] isUniformColor: 获取像素数据失败", G), this.canvasPool.release(r), !1;
    }
    const U = T.data, Z = Math.ceil(Math.sqrt(i)), X = s / (Z + 1), V = a / (Z + 1), B = [];
    for (let G = 1; G <= Z; G++)
      for (let it = 1; it <= Z && !(B.length >= i); it++) {
        const yt = Math.floor(it * X), kt = Math.floor(G * V);
        if (yt >= 0 && yt < s && kt >= 0 && kt < a) {
          const I = (kt * s + yt) * 4;
          I >= 0 && I + 2 < U.length && B.push({
            r: U[I],
            g: U[I + 1],
            b: U[I + 2]
          });
        }
      }
    if (this.canvasPool.release(r), B.length < 2)
      return !1;
    const Q = B.reduce((G, it) => G + it.r, 0) / B.length, q = B.reduce((G, it) => G + it.g, 0) / B.length, tt = B.reduce((G, it) => G + it.b, 0) / B.length, et = B.reduce((G, it) => G + Math.pow(it.r - Q, 2), 0) / B.length, at = B.reduce((G, it) => G + Math.pow(it.g - q, 2), 0) / B.length, xt = B.reduce((G, it) => G + Math.pow(it.b - tt, 2), 0) / B.length;
    return (et + at + xt) / 3 < n;
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
    const n = t * 0.8, i = t * 0.85, s = Math.max(12, Math.min(n, i));
    return Math.round(s);
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
  fitTextToWidth(t, n, i, o) {
    if (!t || t.length === 0)
      return i;
    if (n <= 0 || i <= 12)
      return 12;
    const r = n - 4 * 2;
    if (r <= 0)
      return 12;
    let l = i;
    const h = o.font;
    for (; l > 12 && (o.font = `${l}px sans-serif`, !(o.measureText(t).width <= r)); )
      l -= 1;
    return o.font = h, Math.max(l, 12);
  }
  // 绘制窗口吸附预览
  drawSnapPreview() {
    if (!this.snappedWindow) return;
    const t = this.canvas.getContext("2d");
    if (t) {
      if (t.save(), t.strokeStyle = "#00a8ff", t.lineWidth = 2, t.setLineDash([5, 5]), t.fillStyle = "rgba(0, 168, 255, 0.1)", t.fillRect(
        this.snappedWindow.x,
        this.snappedWindow.y,
        this.snappedWindow.width,
        this.snappedWindow.height
      ), t.strokeRect(
        this.snappedWindow.x,
        this.snappedWindow.y,
        this.snappedWindow.width,
        this.snappedWindow.height
      ), this.snappedWindow.title) {
        t.setLineDash([]), t.font = "12px sans-serif", t.fillStyle = "#00a8ff", t.textAlign = "center", t.textBaseline = "bottom";
        const i = ti(this.snappedWindow).x, o = this.snappedWindow.y - 5, s = t.measureText(this.snappedWindow.title), a = 4;
        t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(
          i - s.width / 2 - a,
          o - 12 - a,
          s.width + a * 2,
          16
        ), t.fillStyle = "#00a8ff", t.fillText(this.snappedWindow.title, i, o);
      }
      t.restore();
    }
  }
  // 设置工具
  setTool(t) {
    this.currentTool = t, this.clearSelection(), this.showGuides = t === w.Select, this.colorPickerState.isActive = t === w.ColorPicker, this.colorPickerState.isActive || (this.colorPickerState.isVisible = !1, this.colorPickerState.colorInfo = void 0), t !== w.Translate && this.translationOverlay.isVisible && this.clearTranslationOverlay(), t !== w.Select && this.hoveredAnnotation && (this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = null), this.snappedWindow = null, this.showSnapPreview = !1, this.pendingSnapWindow = null, this.dragStartPosition = null, t !== w.Select && this.updateToolCursor(), this.draw(), this.onStateChange?.();
  }
  // 执行翻译（供外部调用）
  executeTranslation() {
    this.currentTool === w.Translate && this.selectionRect && (this.translationOverlay.isLoading = !0, this.translationOverlay.isVisible = !0, this.draw(), this.onStateChange?.(), this.performOcrTranslation());
  }
  // 开始创建标注
  startAnnotation(t) {
    if (nn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === w.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = nn.createAnnotation(
        this.currentTool,
        t,
        this.currentStyle,
        {
          fontSize: this.textSize,
          mosaicSize: this.mosaicSize
        }
      );
    }
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const n = this.currentAnnotation.getData();
    switch (n.type) {
      case w.Rectangle:
      case w.Ellipse:
      case w.Line:
      case w.Arrow:
        t = this.getConstrainedShapeEndPoint(n.type, n.points[0], t), n.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
        break;
      case w.Pen:
        this.currentAnnotation.addPoint(t);
        break;
      case w.Mosaic:
        this.currentAnnotation.addPoint(t);
        break;
    }
  }
  getConstrainedShapeEndPoint(t, n, i) {
    if (!this.isShiftPressed) return i;
    const o = i.x - n.x, s = i.y - n.y;
    if (t === w.Ellipse || t === w.Rectangle) {
      const a = Math.max(Math.abs(o), Math.abs(s));
      return {
        x: n.x + Math.sign(o || 1) * a,
        y: n.y + Math.sign(s || 1) * a
      };
    }
    if (t === w.Line || t === w.Arrow) {
      const a = Math.sqrt(o * o + s * s), r = Math.PI / 4, l = Math.round(Math.atan2(s, o) / r) * r;
      return {
        x: n.x + Math.cos(l) * a,
        y: n.y + Math.sin(l) * a
      };
    }
    return i;
  }
  // 完成标注创建
  finishAnnotation() {
    if (this.currentAnnotation) {
      const t = this.currentAnnotation.getData();
      t.type === w.Pen && this.isShiftPressed && t.points.length >= 3 && this.smartCorrectPenAnnotation(), this.currentAnnotation.isValid() && (this.pushAnnotationHistory(), this.annotations.push(this.currentAnnotation), this.onStateChange?.());
    }
    this.currentAnnotation = null;
  }
  // 智能识别并矫正画笔标注
  smartCorrectPenAnnotation() {
    if (!this.currentAnnotation) return;
    const n = this.currentAnnotation.getData().points;
    if (n.length < 3) return;
    let i = n[0].x, o = n[0].x, s = n[0].y, a = n[0].y;
    n.forEach((y) => {
      i = Math.min(i, y.x), o = Math.max(o, y.x), s = Math.min(s, y.y), a = Math.max(a, y.y);
    });
    const r = o - i, l = a - s;
    let h = 0;
    for (let y = 1; y < n.length; y++)
      h += Ct(n[y - 1], n[y]);
    const f = Ct(n[0], n[n.length - 1]) / h, v = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (f > 0.85 || v > 5) {
      const y = n[0], S = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [y, S] });
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
      const t = this.annotations.findIndex((n) => n.getData().id === this.selectedAnnotation.getData().id);
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
  createTextAnnotation(t, n) {
    if (!n.trim()) return;
    const i = nn.createAnnotation(
      w.Text,
      t,
      this.currentStyle,
      {
        text: n.trim(),
        fontSize: this.textSize
      }
    );
    i && i.isValid() && (this.pushAnnotationHistory(), this.annotations.push(i), this.draw(), this.onStateChange?.());
  }
  // 开始文字输入
  startTextInput(t, n) {
    this.onTextInputRequest?.(t, n);
  }
  // 截图并处理标注
  async processScreenshot(t) {
    if (!this.selectionRect)
      throw new Error("没有选择区域");
    try {
      const { x: n, y: i, width: o, height: s } = this.selectionRect, r = (await b("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, o, s);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const h = await this.renderWithAnnotations(l, r, t);
      t === "copy" ? await b("copy_to_clipboard", { image: h }) : await b("save_screenshot_to_file", { image: h });
    } catch (n) {
      const i = t === "save" ? "保存" : "复制";
      throw L.error(`[截图] ${i}截图失败`, n), new Error(`${i}截图失败: ${n?.message || n?.toString() || "未知错误"}`);
    }
  }
  // 从背景图像裁剪指定区域
  async cropFromBackground(t, n, i, o, s = {}) {
    return new Promise(async (a, r) => {
      const l = setTimeout(() => {
        r(new Error("裁剪背景图像超时"));
      }, 1e4);
      try {
        if (!this.backgroundImage) {
          let dt = 0;
          for (; !this.backgroundImage && dt < 3e3; )
            await new Promise((N) => setTimeout(N, 100)), dt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const h = window.devicePixelRatio || 1, u = Math.max(0, s.padding || 0), f = this.canvas.width / h, v = this.canvas.height / h, y = t - u, S = n - u, d = i + u * 2, M = o + u * 2, P = Math.max(1, Math.round(d * h)), F = Math.max(1, Math.round(M * h)), T = Math.max(0, y), U = Math.max(0, S), Z = Math.min(f, y + d), X = Math.min(v, S + M), V = Math.max(0, Z - T), B = Math.max(0, X - U), Q = Math.round(T * h), q = Math.round(U * h), tt = Math.min(
          this.canvas.width - Q,
          Math.round(V * h)
        ), et = Math.min(
          this.canvas.height - q,
          Math.round(B * h)
        ), at = Math.round((T - y) * h), xt = Math.round((U - S) * h), nt = document.createElement("canvas");
        nt.width = P, nt.height = F;
        const G = nt.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!G)
          throw new Error("无法获取2D绘图上下文");
        G.imageSmoothingEnabled = !1, s.fillColor && (G.fillStyle = s.fillColor, G.fillRect(0, 0, P, F)), tt > 0 && et > 0 && G.drawImage(
          this.backgroundImage,
          Q,
          q,
          tt,
          et,
          at,
          xt,
          tt,
          et
        );
        const yt = nt.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: yt,
          adjusted_width: P,
          adjusted_height: F,
          logical_x: y,
          logical_y: S,
          logical_width: d,
          logical_height: M
        });
      } catch (h) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${h.message || h}`));
      }
    });
  }
  // 渲染带标注的图像
  async renderWithAnnotations(t, n, i) {
    return new Promise((o, s) => {
      const a = setTimeout(() => {
        s(new Error("渲染标注超时"));
      }, 15e3), r = document.createElement("canvas");
      r.width = t.adjusted_width, r.height = t.adjusted_height;
      const l = r.getContext("2d", {
        alpha: !0,
        desynchronized: !1,
        willReadFrequently: !1
      });
      if (!l) {
        clearTimeout(a), s(new Error("无法获取2D绘图上下文"));
        return;
      }
      l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high";
      const h = new Image();
      h.onload = () => {
        try {
          if (l.drawImage(h, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const f = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, v = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, y = this.drawingEngine.createScreenshotContext(
              l,
              f,
              v
            );
            this.annotations.forEach((S, d) => {
              try {
                S.drawToScreenshot(y);
              } catch (M) {
                L.error(`[截图] 绘制标注 ${d} 失败`, M);
              }
            });
          }
          let u;
          u = r.toDataURL("image/png"), clearTimeout(a), o(u);
        } catch (u) {
          L.error("[截图] 绘制过程出错", u);
          try {
            const f = r.toDataURL("image/png");
            clearTimeout(a), o(f);
          } catch {
            clearTimeout(a), s(new Error(`渲染失败: ${u.message || u}`));
          }
        }
      }, h.onerror = (u) => {
        L.error("[截图] 图像加载失败", u), clearTimeout(a), s(new Error("图像加载失败"));
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
    this.currentStyle = { ...this.currentStyle, ...t }, this.currentTool === w.Pen && (t.color || t.lineWidth) && this.updateToolCursor(), this.onStateChange?.();
  }
  // 更新文字大小
  updateTextSize(t) {
    this.textSize = t, this.onStateChange?.();
  }
  // 更新马赛克大小
  updateMosaicSize(t) {
    this.mosaicSize = t, this.currentTool === w.Mosaic && this.updateToolCursor(), this.onStateChange?.();
  }
  // 删除指定标注
  deleteAnnotation(t) {
    const n = this.annotations.findIndex((i) => i === t);
    n !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(n, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字标注内容
  updateTextAnnotation(t, n) {
    if (t.getData().type === w.Text) {
      if (t.getData().text === n) {
        this.clearEditingAnnotation();
        return;
      }
      this.pushAnnotationHistory(), t.updateData({ text: n }), this.clearEditingAnnotation(), this.draw(), this.onStateChange?.();
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
        const { x: n, y: i, width: o, height: s } = this.selectionRect, a = await b("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), h = Math.round(a.y + i * r), u = Math.round(o * r), f = Math.round(s * r), v = Math.round(a.x + window.innerWidth * r), y = Math.round(a.y + window.innerHeight * r), S = t === "ocr" ? Math.min(Math.max(u, 760), Math.max(360, v - a.x)) : u, d = t === "ocr" ? Math.min(Math.max(f, 520), Math.max(260, y - a.y)) : f, M = t === "ocr" ? Math.round(l - Math.max(0, S - u) / 2) : l, P = t === "ocr" ? Math.max(a.x, Math.min(M, v - S)) : l, F = t === "ocr" ? Math.max(a.y, Math.min(h, y - d)) : h, T = {}, U = await this.cropFromBackground(n, i, o, s, T);
        if (!U?.image)
          throw new Error("Failed to crop from background image");
        const Z = await this.renderWithAnnotations(U, r, "save");
        await b("create_pin_window", {
          mode: t,
          imageData: Z,
          x: P,
          y: F,
          width: S,
          height: d
        }), this.onStateChange?.(), setTimeout(() => {
          new Je("screenshot").close();
        }, 100);
      } catch (n) {
        throw L.error(`[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`, n), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await b("get_window_info"), i = n?.scale || 1, o = Math.round(n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i), s = Math.round(n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i), a = await b("get_pixel_color", {
          x: o,
          y: s
        }), r = this.rgbToHex(a.r, a.g, a.b), l = {
          rgb: a,
          hex: r,
          position: t
        };
        this.onColorPicked?.(l), this.colorPickerState.isCopied = !0, this.draw(), setTimeout(() => {
          this.colorPickerState.isCopied = !1, this.draw();
        }, 1e3);
      } catch (n) {
        L.error("[截图] 获取像素颜色失败", n);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const n = await b("get_window_info"), i = n?.scale || 1, o = this.colorPickerState.zoomFactor, s = Math.floor(o / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await b("get_screen_preview", {
          x: a - s,
          y: r - s,
          width: o,
          height: o
        }), h = new Image();
        h.src = `data:image/png;base64,${l.image}`, await h.decode();
        const u = await createImageBitmap(h);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const v = new OffscreenCanvas(o, o).getContext("2d");
        if (v) {
          v.drawImage(u, 0, 0, o, o);
          const y = v.getImageData(s, s, 1, 1).data, S = { r: y[0], g: y[1], b: y[2] }, d = this.rgbToHex(S.r, S.g, S.b);
          this.colorPickerState.colorInfo = { rgb: S, hex: d, position: t };
        }
        this.draw();
      } catch (n) {
        L.error("[截图] 更新颜色预览失败", n);
      }
  }
  // 节流版本的颜色预览更新
  throttledUpdateColorPreview(t) {
    const n = Date.now();
    n - this.lastThrottledTimestamp < this.throttleInterval || (this.lastThrottledTimestamp = n, this.throttleTimer && cancelAnimationFrame(this.throttleTimer), this.throttleTimer = requestAnimationFrame(() => {
      this.updateColorPreview(t), this.throttleTimer = null;
    }));
  }
  // RGB 转 HEX
  rgbToHex(t, n, i) {
    const o = (s) => {
      const a = Math.max(0, Math.min(255, Math.round(s))).toString(16);
      return a.length === 1 ? "0" + a : a;
    };
    return `#${o(t)}${o(n)}${o(i)}`.toUpperCase();
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
        let n = 0, i = 0, o = 0, s = 0, a = 0;
        const { x: r, y: l, width: h, height: u } = this.selectionRect, f = window.devicePixelRatio || 1, v = h * f, y = u * f, S = this.canvasPool.acquire(v, y), d = S.getContext("2d");
        if (!d)
          throw this.canvasPool.release(S), new Error("无法创建临时canvas");
        const M = r * f, P = l * f, F = performance.now();
        d.drawImage(
          this.backgroundImage,
          M,
          P,
          v,
          y,
          0,
          0,
          v,
          y
        ), n = Math.round(performance.now() - F);
        const T = performance.now(), { recognizeFromCanvas: U } = await ue.loadOCR();
        i = Math.round(performance.now() - T);
        const Z = performance.now(), X = await U(S);
        o = Math.round(performance.now() - Z), this.canvasPool.release(S);
        const V = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          confidence: X.confidence,
          rawLineCount: X.blocks.length,
          textLength: X.full_text.trim().length
        };
        L.info("[OCR] 识别耗时统计", V), _t.log("[OCR] recognition timing", V);
        const B = X.blocks, Q = performance.now(), q = To(B);
        s = Math.round(performance.now() - Q);
        const tt = q.map((_) => _.text).join(`

`), et = {
          rawLineCount: B.length,
          paragraphCount: q.length,
          durationMs: s,
          paragraphs: q.map((_, K) => ({
            index: K,
            text: _.text,
            blockCount: _.blocks.length,
            isCodeBlock: !!_.isCodeBlock,
            isStructuredBlock: !!_.isStructuredBlock,
            bbox: _.bbox,
            sourceBlocks: _.blocks.map((ft) => ({
              text: ft.text,
              x: ft.x,
              y: ft.y,
              width: ft.width,
              height: ft.height
            }))
          }))
        };
        if (L.info("[OCR] 版面重组完成", et), _t.log("[OCR] layout reflow complete", et), !tt || !tt.trim()) {
          this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !1, this.draw(), this.onStateChange?.();
          return;
        }
        const at = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(he(tt));
        const xt = (_) => {
          const K = _.trim();
          return !!(K.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && !K.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i));
        };
        let nt = "";
        const G = he(tt), it = {
          detectedLanguage: G,
          textLength: tt.trim().length,
          textPreview: tt.trim().slice(0, 500)
        };
        L.info("[OCR] 翻译语言检测完成", it), _t.log("[OCR] translation language detected", it), Re(G) && (this.translationOverlay.sourceLanguage = G, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(G));
        const yt = at === "offline" ? ue.loadOfflineTranslator() : null, kt = (_) => _.includes("插件") && _.includes("未启用") ? _.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : _ : at === "offline" ? _.includes("未激活") || _.includes("未下载") || _.includes("运行时未安装") ? _ : _.includes("超时") ? "模型加载超时，请重试" : _.includes("离线翻译暂仅支持") ? _ : "离线翻译失败: " + _.substring(0, 50) : _.includes("timeout") || _.includes("超时") ? "翻译超时，请检查网络连接" : _.includes("network") || _.includes("网络") || _.includes("请求") || _.includes("令牌") ? "翻译失败，请检查网络连接" : _.trim() ? _.slice(0, 80) : "翻译失败，请检查网络连接", I = async () => {
          if (!yt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: _,
            canUseOfflineTranslation: K,
            warmupOfflineTranslator: ft,
            getModelCacheInfo: pt
          } = await yt, Mt = K();
          if (this.offlineModelActivated && !Mt)
            if ((await pt()).isCached)
              await ft();
            else
              throw new Error("离线翻译模型未下载，请在设置-翻译配置中下载模型");
          else if (!this.offlineModelActivated)
            throw new Error("离线翻译模型未激活，请在设置-翻译配置中激活模型");
          return _;
        }, dt = async (_, K, ft) => {
          if (!_.trim())
            return _;
          if (at === "offline") {
            if (K !== "en" || ft !== "zh")
              throw new Error("离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英");
            return (await I())(_);
          }
          return await b("translate_text", {
            text: _,
            from: K,
            to: ft,
            engine: at
          });
        }, N = (_) => {
          const K = _.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(K) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(K);
        }, Rt = async (_, K, ft) => {
          const pt = _.trim();
          if (!pt || xt(pt))
            return _;
          const Mt = _.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Mt) {
            const [, ht, gt, rt, lt, ie] = Mt, Jt = he(gt), Zt = N(gt) || !Re(Jt) ? gt : await dt(gt, Jt, this.getAutoTargetLanguage(Jt)), le = he(lt), _n = Re(le) && !xt(lt) ? await dt(lt, le, this.getAutoTargetLanguage(le)) : lt;
            return `${ht}${Zt}${rt}${_n}${ie}`;
          }
          if (N(pt))
            return _;
          const k = he(pt);
          if (!Re(k))
            return _;
          const j = this.getAutoTargetLanguage(k), ot = await dt(pt, k, j), vt = {
            paragraphIndex: K,
            blockIndex: ft,
            sourceLanguage: k,
            targetLanguage: j,
            sourceText: pt,
            translatedText: ot.slice(0, 200)
          };
          return L.info("[OCR] 结构化块翻译完成", vt), _t.log("[OCR] structured block translation complete", vt), ot;
        }, Lt = async (_, K) => {
          const ft = performance.now(), pt = (ot) => ({
            index: K,
            durationMs: Math.round(performance.now() - ft),
            ...ot
          }), Mt = he(_.text), k = this.getAutoTargetLanguage(Mt), j = {
            index: K,
            text: _.text,
            sourceLanguage: Mt,
            targetLanguage: k,
            engine: at,
            structured: !!_.isStructuredBlock
          };
          if (L.info("[OCR] 段落翻译方向", j), _t.log("[OCR] paragraph translation direction", j), !Re(Mt)) {
            _.translatedText = _.text;
            const ot = pt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), vt = {
              index: K,
              detectedLanguage: Mt,
              durationMs: ot.durationMs,
              text: _.text
            };
            return L.warn("[OCR] 跳过不支持的段落语言", vt), _t.log("[OCR] skip unsupported paragraph language", vt), ot;
          }
          try {
            if (_.isStructuredBlock && _.blocks.length > 0) {
              const ht = async (rt, lt) => {
                const ie = await Rt(rt.text, K, lt);
                return rt.translatedText = ie, ie;
              }, gt = [];
              if (at === "offline")
                for (let rt = 0; rt < _.blocks.length; rt += 1)
                  gt.push(await ht(_.blocks[rt], rt));
              else
                gt.push(
                  ...await Promise.all(
                    _.blocks.map((rt, lt) => ht(rt, lt))
                  )
                );
              _.translatedText = gt.join(" ");
            } else if (xt(_.text) || _.isCodeBlock) {
              _.translatedText = _.text;
              const ht = _.isCodeBlock ? "code_block" : "command_like_text", gt = pt({ skipped: !0, cancelled: !1 }), rt = {
                index: K,
                reason: ht,
                durationMs: gt.durationMs,
                text: _.text
              };
              return L.info("[OCR] 跳过代码段翻译", rt), _t.log("[OCR] skip code paragraph translation", rt), gt;
            } else
              _.translatedText = await dt(
                _.text,
                Mt,
                k
              );
            const ot = pt({ skipped: !1, cancelled: !1 }), vt = {
              index: K,
              durationMs: ot.durationMs,
              sourceLanguage: Mt,
              targetLanguage: k,
              engine: at,
              structured: !!_.isStructuredBlock,
              sourceLength: _.text.length,
              translatedLength: (_.translatedText || "").length,
              translatedPreview: (_.translatedText || "").slice(0, 300)
            };
            return L.info("[OCR] 段落翻译完成", vt), _t.log("[OCR] paragraph translation complete", vt), ot;
          } catch (ot) {
            const vt = ot instanceof Error ? ot.message : String(ot);
            if (vt === "翻译已取消")
              return pt({ skipped: !1, cancelled: !0 });
            _.translatedText = _.text;
            const ht = kt(vt), gt = pt({
              skipped: !1,
              cancelled: !1,
              errorMessage: ht
            }), rt = {
              index: K,
              durationMs: gt.durationMs,
              sourceLanguage: Mt,
              targetLanguage: k,
              engine: at,
              error: vt,
              structured: !!_.isStructuredBlock,
              text: _.text
            };
            return L.error("[OCR] 段落翻译失败", rt), _t.log("[OCR] paragraph translation failed", rt), gt;
          }
        }, jt = performance.now();
        let st = [];
        if (at === "offline")
          for (let _ = 0; _ < q.length; _ += 1) {
            const K = await Lt(q[_], _);
            if (st.push(K), K.cancelled)
              return;
            if (K.errorMessage) {
              nt = K.errorMessage;
              break;
            }
          }
        else {
          if (st = await Promise.all(
            q.map((_, K) => Lt(_, K))
          ), st.some((_) => _.cancelled))
            return;
          nt = st.find((_) => _.errorMessage)?.errorMessage || "";
        }
        a = Math.round(performance.now() - jt);
        const Pt = {
          durationMs: a,
          engine: at,
          paragraphCount: q.length,
          translatedParagraphCount: st.filter((_) => !_.skipped && !_.errorMessage).length,
          skippedParagraphCount: st.filter((_) => _.skipped).length,
          failedParagraphCount: st.filter((_) => !!_.errorMessage).length
        };
        L.info("[OCR] 翻译耗时统计", Pt), _t.log("[OCR] translation timing", Pt);
        const At = q.map((_) => this.toDisplayParagraph(_, f)), Ut = At.map((_) => this.toLegacyOverlayBlock(_));
        this.translationOverlay.blocks = Ut, this.translationOverlay.paragraphBlocks = At, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = nt || void 0;
        const Yt = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          reflowDurationMs: s,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: B.length,
          paragraphCount: q.length,
          engine: at
        };
        L.info("[OCR] 截图翻译总耗时统计", Yt), _t.log("[OCR] pipeline timing", Yt), this.draw(), this.onStateChange?.();
      } catch (t) {
        L.error("[OCR] OCR翻译失败:", t);
        const n = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(n), this.draw(), this.onStateChange?.();
      }
    }
  }
  async performVisionTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const { x: t, y: n, width: i, height: o } = this.selectionRect;
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await ar()).running || (L.info("[截图] AI 服务未运行，正在启动..."), await rr(), L.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, n, i, o);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((M) => setTimeout(M, 100));
        const l = (await lr({
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
        const h = Math.max(14, Math.min(20, Math.round(o / 18))), u = Math.max(18, Math.min(28, Math.round(o / 12))), f = l.split(/\n\n+/).filter((M) => M.trim()), v = Math.max(f.length, 1), y = (o - 16) / v, S = f.map((M, P) => {
          const F = P * y + 8, T = P === v - 1 ? o - F - 8 : y, U = {
            text: "",
            translatedText: M.trim(),
            x: 0,
            y: F,
            width: i,
            height: T,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
          return {
            text: "",
            translatedText: M.trim(),
            blocks: [U],
            bbox: { x: 0, y: F, width: i, height: T },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: h,
            lineHeight: u,
            angle: 0
          };
        }), d = S.length > 0 ? S : [{
          text: "",
          translatedText: l,
          blocks: [{
            text: "",
            translatedText: l,
            x: 0,
            y: 0,
            width: i,
            height: o,
            fontSize: h,
            lineHeight: u,
            angle: 0
          }],
          bbox: { x: 0, y: 0, width: i, height: o },
          isCodeBlock: !1,
          isStructuredBlock: !1,
          fontSize: h,
          lineHeight: u,
          angle: 0
        }];
        this.translationOverlay.blocks = d.map((M) => M.blocks[0]), this.translationOverlay.paragraphBlocks = d, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
      } catch (t) {
        const n = t instanceof Error ? t.message : String(t);
        L.error("[截图] AI 识图翻译失败", t), this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.errorMessage = n.includes("mmproj") || n.includes("vision") ? "AI 翻译需要在“本地 AI”中配置视觉模型（mmproj）" : `AI 识图翻译失败：${n.slice(0, 80)}`, this.draw(), this.onStateChange?.();
      }
  }
  getOcrTranslationErrorMessage(t) {
    return t.includes("OCR_RECOGNITION_LOW_QUALITY") ? "OCR识别质量过低，请重新选择更清晰或方向正确的文本区域" : t.includes("RAPIDOCR_UNAVAILABLE") ? "RapidOCR 未配置，无法识别截图文字" : t ? t.slice(0, 80) : "OCR翻译失败";
  }
  getAutoTargetLanguage(t) {
    return t === "zh" ? "en" : "zh";
  }
  toDisplayParagraph(t, n) {
    return {
      ...t,
      blocks: t.blocks.map((i) => ({
        ...i,
        x: i.x / n,
        y: i.y / n,
        width: i.width / n,
        height: i.height / n,
        fontSize: i.fontSize / n,
        lineHeight: i.lineHeight / n
      })),
      bbox: {
        x: t.bbox.x / n,
        y: t.bbox.y / n,
        width: t.bbox.width / n,
        height: t.bbox.height / n
      },
      fontSize: t.fontSize ? t.fontSize / n : void 0,
      lineHeight: t.lineHeight ? t.lineHeight / n : void 0
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
      const { cancelOfflineTranslation: t } = await ue.loadOfflineTranslator();
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
    ue.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapWindow = null, this.dragStartPosition = null, this.snappedWindow = null, this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var Qr = {
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
function tl() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function el(e, t, n) {
  var i = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], s = t.theme || n.theme;
  switch (s) {
    case "outline":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("none"), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone), o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof i[0] == "string" ? i[0] : "currentColor"), o.push(typeof i[1] == "string" ? i[1] : n.colors.multiColor.outFillColor), o.push(typeof i[2] == "string" ? i[2] : n.colors.multiColor.innerStrokeColor), o.push(typeof i[3] == "string" ? i[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: o,
    id: e
  };
}
var nl = Symbol("icon-context");
function ct(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = tl(), r = ge(nl, Qr);
      return function() {
        var l = s.size, h = s.strokeWidth, u = s.strokeLinecap, f = s.strokeLinejoin, v = s.theme, y = s.fill, S = s.spin, d = el(a, {
          size: l,
          strokeWidth: h,
          strokeLinecap: u,
          strokeLinejoin: f,
          theme: v,
          fill: y
        }, r), M = [r.prefix + "-icon"];
        return M.push(r.prefix + "-icon-" + e), t && r.rtl && M.push(r.prefix + "-icon-rtl"), S && M.push(r.prefix + "-icon-spin"), p("span", {
          class: M.join(" ")
        }, [n(d)]);
      };
    }
  };
  return i;
}
const il = ct("arrow-right-up", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M19 11H37V29",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zn = ct("check", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gn = ct("close", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nn = ct("copy", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ol = ct("delete-four", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 11L40 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M18 5L30 5",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Yi = ct("down", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), sl = ct("download", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), al = ct("font-size", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M24 6V42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M16 42H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rl = ct("go-on", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zi = ct("loading", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Oo = ct("minus", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ll = ct("more", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), p("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), p("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), cl = ct("mosaic", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M44 36H36V44H44V36Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M28 36H20V44H28V36Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M12 36H4V44H12V36Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M44 20H36V28H44V20Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M28 20H20V28H28V20Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M12 20H4V28H12V20Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M44 4H36V12H44V4Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M28 4H20V12H28V4Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M12 4H4V12H12V4Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M20 12H12V20H20V12Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M20 28H12V36H20V28Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M36 12H28V20H36V12Z",
    fill: e.colors[0]
  }, null), p("path", {
    d: "M36 28H28V36H36V28Z",
    fill: e.colors[0]
  }, null)]);
}), hl = ct("move-one", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ul = ct("picture", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gi = ct("pin", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [p("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), p("defs", null, [p("clipPath", {
    id: e.id + "1c742167"
  }, [p("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), Xi = ct("platte", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xn = ct("pushpin", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dl = ct("rectangle-one", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), gl = ct("redo", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M42 8V17H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fl = ct("refresh", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ml = ct("return", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pl = ct("round", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Ki = ct("save", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), p("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wl = ct("square", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), je = ct("text-recognition", !1, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Do = ct("translate", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yl = ct("write", !0, function(e) {
  return p("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [p("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), p("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), vl = { class: "toolbar-panel first-panel" }, xl = { class: "tool-section" }, kl = ["onClick", "title", "aria-pressed"], bl = { class: "action-section" }, Sl = ["disabled", "title"], Cl = ["disabled", "title"], Ml = ["disabled", "title"], _l = ["title"], Tl = ["title"], zl = ["title"], Rl = {
  key: 0,
  class: "toolbar-panel second-panel"
}, Ll = { class: "style-section" }, Pl = {
  key: 0,
  class: "style-group"
}, Al = { class: "style-label" }, Il = { class: "line-width-selector" }, Ol = ["onClick", "title", "aria-pressed"], Dl = { class: "style-value" }, Wl = {
  key: 1,
  class: "style-divider"
}, $l = {
  key: 2,
  class: "style-group opacity-group"
}, El = { class: "style-label" }, Bl = ["value", "title", "aria-label"], Nl = { class: "style-value" }, Hl = {
  key: 3,
  class: "style-divider"
}, jl = {
  key: 4,
  class: "style-group color-picker-group"
}, Fl = { class: "style-label" }, Vl = { class: "color-row" }, Ul = ["onClick", "title", "aria-pressed"], Yl = { class: "custom-color-wrapper" }, Zl = ["title"], Gl = ["value", "title", "aria-label"], Xl = {
  key: 5,
  class: "style-group"
}, Kl = { class: "style-label" }, ql = { class: "text-size-selector" }, Jl = ["onClick", "title", "aria-pressed"], Ql = { class: "style-value" }, tc = {
  key: 6,
  class: "style-group"
}, ec = { class: "style-label" }, nc = { class: "mosaic-size-selector" }, ic = ["onClick", "title", "aria-pressed"], oc = { class: "style-value" }, sc = {
  key: 7,
  class: "style-group"
}, ac = { class: "style-label" }, rc = { class: "translate-engine-selector" }, lc = ["onClick", "title", "aria-pressed"], cc = /* @__PURE__ */ zt({
  __name: "ToolbarSection",
  props: {
    currentTool: {},
    currentColor: {},
    currentLineWidth: {},
    currentOpacity: {},
    currentTextSize: {},
    currentMosaicSize: {},
    canUndo: { type: Boolean },
    canRedo: { type: Boolean },
    canDelete: { type: Boolean },
    currentTranslateEngine: { default: "bing" }
  },
  emits: ["tool-select", "color-change", "line-width-change", "opacity-change", "text-size-change", "mosaic-size-change", "translate-engine-change", "undo", "redo", "delete", "save", "confirm", "cancel"],
  setup(e, { expose: t, emit: n }) {
    const i = E(null), { t: o } = wo(), s = e, a = n, r = W(() => [
      { type: w.Select, icon: hl, title: o("screenshot.select") },
      { type: w.Rectangle, icon: dl, title: o("screenshot.rectangle") },
      { type: w.Ellipse, icon: pl, title: o("screenshot.ellipse") },
      { type: w.Line, icon: Oo, title: o("screenshot.line") },
      { type: w.Arrow, icon: il, title: o("screenshot.arrow") },
      { type: w.Pen, icon: yl, title: o("screenshot.pen") },
      { type: w.Mosaic, icon: cl, title: o("screenshot.mosaic") },
      { type: w.Text, icon: al, title: o("screenshot.text") },
      { type: w.ColorPicker, icon: Xi, title: o("screenshot.colorPicker") },
      { type: w.Ocr, icon: je, title: o("screenshot.ocr") },
      { type: w.Translate, icon: Do, title: o("screenshot.translate") },
      { type: w.Pin, icon: Xn, title: o("screenshot.pin") }
    ]), l = W(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: o("translate.bingTranslate"), short: "B" },
      { value: "offline", label: o("translate.offlineTranslate"), short: o("translate.offlineMark") },
      { value: "local-ai", label: o("translate.localAiTranslate"), short: "AI" }
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
    ], f = [12, 14, 16, 18, 20, 24], v = [8, 12, 16, 20], y = W(() => ![w.Select, w.ColorPicker, w.Ocr, w.Pin].includes(s.currentTool)), S = W(
      () => [w.Rectangle, w.Ellipse, w.Line, w.Arrow, w.Pen].includes(s.currentTool)
    ), d = W(
      () => [w.Rectangle, w.Ellipse, w.Line, w.Arrow, w.Pen, w.Text].includes(s.currentTool)
    ), M = W(
      () => [
        w.Rectangle,
        w.Ellipse,
        w.Line,
        w.Arrow,
        w.Pen,
        w.Mosaic,
        w.Text
      ].includes(s.currentTool)
    ), P = W(() => s.currentTool === w.Text), F = W(() => s.currentTool === w.Mosaic), T = W(() => s.currentTool === w.Translate), U = (I) => a("tool-select", I), Z = (I) => a("color-change", I), X = (I) => a("line-width-change", I), V = (I) => {
      a("opacity-change", Number(I.target.value) / 100);
    }, B = (I) => a("text-size-change", I), Q = (I) => a("mosaic-size-change", I), q = () => a("undo"), tt = () => a("redo"), et = () => a("delete"), at = () => a("save"), xt = () => a("confirm"), nt = () => a("cancel"), G = (I) => {
      a("translate-engine-change", I);
    }, it = (I) => {
      Z(I);
    }, yt = (I) => {
      const dt = I.target;
      dt.value && Z(dt.value);
    }, kt = () => {
      const I = i.value?.getBoundingClientRect();
      return {
        width: I?.width ?? 590,
        height: I?.height ?? 50
      };
    };
    return Oe(() => s.currentTool, () => {
      fe(() => {
        window.dispatchEvent(new CustomEvent("screenshot-toolbar-resize", {
          detail: kt()
        }));
      });
    }, { immediate: !0 }), t({
      getToolbarSize: kt
    }), (I, dt) => (R(), O(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        H(" 第一个面板：工具选择 + 操作按钮 "),
        x("div", vl, [
          H(" 工具选择区域 "),
          x("div", xl, [
            (R(!0), O(
              Et,
              null,
              Kt(r.value, (N) => (R(), O("button", {
                key: N.type,
                onClick: (Rt) => U(N.type),
                class: ut(["tool-btn", { active: I.currentTool === N.type }]),
                title: N.title,
                "aria-pressed": I.currentTool === N.type
              }, [
                (R(), Tt(ae(N.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, kl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          H(" 分隔线 "),
          dt[0] || (dt[0] = x(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          H(" 操作按钮区域 "),
          x("div", bl, [
            x("button", {
              onClick: q,
              disabled: !I.canUndo,
              class: "action-btn undo",
              title: C(o)("screenshot.undo")
            }, [
              p(C(ml), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Sl),
            x("button", {
              onClick: tt,
              disabled: !I.canRedo,
              class: "action-btn redo",
              title: C(o)("screenshot.redo")
            }, [
              p(C(rl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Cl),
            x("button", {
              onClick: et,
              disabled: !I.canDelete,
              class: "action-btn delete",
              title: C(o)("screenshot.delete")
            }, [
              p(C(ol), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ml),
            x("button", {
              onClick: nt,
              class: "action-btn cancel",
              title: C(o)("screenshot.cancel")
            }, [
              p(C(Gn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, _l),
            x("button", {
              onClick: at,
              class: "action-btn save",
              title: C(o)("screenshot.save")
            }, [
              p(C(sl), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Tl),
            x("button", {
              onClick: xt,
              class: "action-btn confirm",
              title: C(o)("screenshot.confirm")
            }, [
              p(C(Zn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, zl)
          ])
        ]),
        H(" 第二个面板：样式设置区域 "),
        y.value ? (R(), O("div", Rl, [
          x("div", Ll, [
            H(" 线宽设置 "),
            S.value ? (R(), O("div", Pl, [
              x(
                "span",
                Al,
                Y(C(o)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              x("div", Il, [
                (R(), O(
                  Et,
                  null,
                  Kt(h, (N) => x("button", {
                    key: N,
                    onClick: (Rt) => X(N),
                    class: ut(["width-btn", { active: I.currentLineWidth === N }]),
                    title: `${N}px`,
                    "aria-pressed": I.currentLineWidth === N
                  }, [
                    x(
                      "span",
                      {
                        class: "line-preview",
                        style: mt({ height: `${N}px`, backgroundColor: I.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, Ol)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                Dl,
                Y(I.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            S.value && d.value ? (R(), O("div", Wl)) : H("v-if", !0),
            H(" 不透明度设置 "),
            M.value ? (R(), O("div", $l, [
              x(
                "span",
                El,
                Y(C(o)("screenshot.opacity")),
                1
                /* TEXT */
              ),
              x("input", {
                class: "opacity-slider",
                type: "range",
                min: "10",
                max: "100",
                step: "5",
                value: Math.round(I.currentOpacity * 100),
                style: mt({
                  "--opacity-color": I.currentColor,
                  "--opacity-progress": `${Math.round(I.currentOpacity * 100)}%`
                }),
                title: `${Math.round(I.currentOpacity * 100)}%`,
                "aria-label": C(o)("screenshot.opacity"),
                onInput: V
              }, null, 44, Bl),
              x(
                "span",
                Nl,
                Y(Math.round(I.currentOpacity * 100)) + "%",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            M.value && d.value ? (R(), O("div", Hl)) : H("v-if", !0),
            H(" 颜色设置 "),
            d.value ? (R(), O("div", jl, [
              x(
                "span",
                Fl,
                Y(C(o)("screenshot.color")),
                1
                /* TEXT */
              ),
              x("div", Vl, [
                (R(), O(
                  Et,
                  null,
                  Kt(u, (N) => x("button", {
                    key: N,
                    onClick: (Rt) => it(N),
                    class: ut(["color-btn", { active: I.currentColor === N }]),
                    style: mt({ backgroundColor: N }),
                    title: N,
                    "aria-pressed": I.currentColor === N
                  }, null, 14, Ul)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                x("div", Yl, [
                  x("button", {
                    class: ut(["color-btn custom-color-btn", { active: !u.includes(I.currentColor) }]),
                    title: C(o)("screenshot.customColor")
                  }, [
                    p(C(Xi), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Zl),
                  x("input", {
                    type: "color",
                    onChange: yt,
                    value: I.currentColor,
                    class: "color-input-hidden",
                    title: C(o)("screenshot.customColor"),
                    "aria-label": C(o)("screenshot.customColor")
                  }, null, 40, Gl)
                ])
              ])
            ])) : H("v-if", !0),
            H(" 文字大小设置 "),
            P.value ? (R(), O("div", Xl, [
              x(
                "span",
                Kl,
                Y(C(o)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              x("div", ql, [
                (R(), O(
                  Et,
                  null,
                  Kt(f, (N) => x("button", {
                    key: N,
                    onClick: (Rt) => B(N),
                    class: ut(["size-btn", { active: I.currentTextSize === N }]),
                    title: `${N}px`,
                    "aria-pressed": I.currentTextSize === N
                  }, [
                    x(
                      "span",
                      {
                        class: "size-text",
                        style: mt({ fontSize: `${Math.min(N, 18)}px` })
                      },
                      "A",
                      4
                      /* STYLE */
                    )
                  ], 10, Jl)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                Ql,
                Y(I.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 马赛克大小设置 "),
            F.value ? (R(), O("div", tc, [
              x(
                "span",
                ec,
                Y(C(o)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              x("div", nc, [
                (R(), O(
                  Et,
                  null,
                  Kt(v, (N) => x("button", {
                    key: N,
                    onClick: (Rt) => Q(N),
                    class: ut(["size-btn", { active: I.currentMosaicSize === N }]),
                    title: `${C(o)("screenshot.brush")} ${N * 3}px`,
                    "aria-pressed": I.currentMosaicSize === N
                  }, [
                    x(
                      "span",
                      {
                        class: "mosaic-preview",
                        style: mt({
                          width: `${Math.min(N * 1.25, 18)}px`,
                          height: `${Math.min(N * 1.25, 18)}px`
                        })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, ic)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                oc,
                Y(I.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 翻译引擎选择 "),
            T.value ? (R(), O("div", sc, [
              x(
                "span",
                ac,
                Y(C(o)("screenshot.engine")),
                1
                /* TEXT */
              ),
              x("div", rc, [
                (R(!0), O(
                  Et,
                  null,
                  Kt(l.value, (N) => (R(), O("button", {
                    key: N.value,
                    onClick: (Rt) => G(N.value),
                    class: ut(["engine-btn", { active: I.currentTranslateEngine === N.value }]),
                    title: N.label,
                    "aria-pressed": I.currentTranslateEngine === N.value
                  }, Y(N.short), 11, lc))),
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
}), bn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, hc = /* @__PURE__ */ bn(cc, [["__scopeId", "data-v-bf7f446d"]]), uc = {
  class: "screenshot-container",
  ref: "containerRef"
}, dc = {
  key: 0,
  class: "mask-layers"
}, gc = {
  key: 1,
  class: "mask-full"
}, fc = { class: "size-text" }, mc = {
  key: 4,
  class: "loading-overlay"
}, pc = /* @__PURE__ */ zt({
  __name: "index",
  setup(e) {
    const t = E(), n = E(), i = E(null), o = E(null);
    let s = null;
    const a = E(!0), r = E(!1), l = E(""), h = E({ x: 0, y: 0 }), u = E(16), f = E(!1), v = E("bing"), y = E({ width: 590, height: 50 });
    let S = !1;
    const d = E({
      selectionRect: null,
      annotations: [],
      currentTool: w.Select,
      currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
      textSize: 16,
      mosaicSize: 8,
      hasSelection: !1,
      hasAnnotations: !1,
      canRedo: !1,
      selectedAnnotation: null,
      isDrawing: !1
      // 将绘制状态也放到响应式状态中
    }), M = E(), P = E(), F = W(() => d.value.isDrawing), T = W(() => {
      if (!d.value.selectionRect) return {};
      const { y: k } = d.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${k}px`
      };
    }), U = W(() => {
      if (!d.value.selectionRect) return {};
      const { y: k, height: j } = d.value.selectionRect;
      return {
        top: `${k + j}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), Z = W(() => {
      if (!d.value.selectionRect) return {};
      const { x: k, y: j, height: ot } = d.value.selectionRect;
      return {
        top: `${j}px`,
        left: "0",
        width: `${k}px`,
        height: `${ot}px`
      };
    }), X = W(() => {
      if (!d.value.selectionRect) return {};
      const { x: k, y: j, width: ot, height: vt } = d.value.selectionRect;
      return {
        top: `${j}px`,
        left: `${k + ot}px`,
        right: "0",
        height: `${vt}px`
      };
    }), V = W(() => {
      if (!d.value.selectionRect) return {};
      const { x: k, y: j, width: ot, height: vt } = d.value.selectionRect, ht = 10, gt = 12, rt = Math.min(y.value.width, Math.max(0, window.innerWidth - ht * 2)), lt = Math.min(y.value.height, Math.max(0, window.innerHeight - ht * 2)), ie = Math.max(ht, window.innerHeight - lt - ht), Jt = Math.max(ht, window.innerWidth - rt - ht);
      let Zt;
      return j + vt + lt + gt <= window.innerHeight - ht ? Zt = j + vt + gt : j - lt - gt >= ht ? Zt = j - lt - gt : Zt = j + vt - lt - ht, Zt = Math.min(Math.max(Zt, ht), ie), {
        left: `${Math.min(Math.max(k + (ot - rt) / 2, ht), Jt)}px`,
        top: `${Zt}px`
      };
    }), B = W(() => {
      if (!d.value.selectionRect) return {};
      const { x: k, y: j, width: ot, height: vt } = d.value.selectionRect, ht = 10;
      let gt = k - ht, rt = j - ht, lt = "translateY(-100%)";
      return gt < 10 && (gt = k + ot + ht, lt = "translateY(-100%)"), rt < 30 && (rt = j + vt + ht, lt = "translateY(0)"), {
        left: `${gt}px`,
        top: `${rt}px`,
        transform: lt
      };
    }), Q = W(() => {
      if (!d.value.selectionRect) return "";
      const { width: k, height: j } = d.value.selectionRect;
      return `${Math.round(k)} × ${Math.round(j)}`;
    }), q = W(() => {
      const k = Te(h.value);
      return {
        "--text-accent-color": d.value.currentStyle.color,
        left: `${k.x}px`,
        top: `${k.y}px`
      };
    }), tt = (k) => {
      if (k === w.Pin && d.value.selectionRect) {
        et();
        return;
      }
      if (k === w.Ocr && d.value.selectionRect) {
        at();
        return;
      }
      s?.setTool(k);
    }, et = async () => {
      try {
        await s?.createPinWindow();
      } catch (k) {
        L.error("[截图] 创建贴图失败", k);
      }
    }, at = async () => {
      try {
        await s?.createOcrPinWindow();
      } catch (k) {
        L.error("[截图] 创建文字识别贴图失败", k);
      }
    }, xt = (k) => {
      s?.updateStyle({ color: k });
    }, nt = (k) => {
      s?.updateStyle({ lineWidth: k });
    }, G = (k) => {
      s?.updateStyle({ opacity: k });
    }, it = (k) => {
      s?.updateTextSize(k);
    }, yt = (k) => {
      s?.updateMosaicSize(k);
    }, kt = (k) => {
      v.value = k, s?.setTranslationEngine(k), s?.executeTranslation();
    }, I = () => {
      s?.undoAnnotation();
    }, dt = () => {
      s?.redoAnnotation();
    }, N = () => {
      s?.deleteSelectedAnnotation();
    }, Rt = async () => {
      try {
        await s?.processScreenshot("save"), K();
      } catch (k) {
        const j = k?.message || k?.toString() || "保存失败";
        if (j.includes("保存已取消") || j.includes("cancelled"))
          return;
        L.error("保存截图时发生错误", j);
      }
    }, Lt = async () => {
      try {
        await s?.processScreenshot("copy"), K();
      } catch {
      }
    }, jt = () => {
      K();
    };
    let st = null;
    const Pt = (k, j) => {
      if (j && j.getData().type === "text") {
        const ot = j.getData();
        h.value = {
          x: ot.points[0].x,
          y: ot.points[0].y
        }, u.value = ot.fontSize || d.value.textSize;
      } else
        h.value = k, u.value = d.value.textSize;
      r.value = !0, st = j || null, j && s?.setEditingAnnotation(j), j && j.getData().text ? l.value = j.getData().text : l.value = "", fe(() => {
        n.value?.focus(), st && n.value?.select();
      });
    }, At = () => {
      l.value.trim() ? st ? s?.updateTextAnnotation(st, l.value) : s?.createTextAnnotation(h.value, l.value) : st && s?.deleteAnnotation(st), Ut();
    }, Ut = () => {
      r.value = !1, l.value = "", st && s?.clearEditingAnnotation(), st = null;
    }, Yt = (k) => {
      navigator.clipboard && navigator.clipboard.writeText(k.hex).catch((j) => {
        L.error("[截图] 复制颜色到剪贴板失败", j);
      });
    }, _ = (k) => {
      if (k.key === "Meta" || k.key === "Win" || k.altKey && k.key === "Tab" || k.altKey && k.key === "F4") {
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (k.key === "Escape") {
          Ut(), k.preventDefault();
          return;
        }
        if (k.key === "Enter") {
          At(), k.preventDefault();
          return;
        }
        if (k.key === "Tab") {
          k.preventDefault();
          return;
        }
        return;
      }
      if (!d.value.selectionRect) {
        if (k.key === "Escape") {
          K();
          return;
        }
        k.preventDefault(), k.stopPropagation();
        return;
      }
      if (s?.handleKeyDown(k)) {
        k.preventDefault();
        return;
      }
      const j = navigator.platform.toLowerCase().includes("mac");
      if ((j ? k.metaKey : k.ctrlKey) && k.key.toLowerCase() === "z") {
        k.shiftKey ? dt() : I(), k.preventDefault();
        return;
      }
      if (!j && k.ctrlKey && k.key.toLowerCase() === "y") {
        dt(), k.preventDefault();
        return;
      }
      if (k.key === "Escape") {
        K();
        return;
      } else if (k.key === "Delete" || k.key === "Backspace") {
        N(), k.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(k.key) || k.preventDefault();
    }, K = async () => {
      if (!S) {
        S = !0, s?.destroy(), s = null;
        try {
          await b("cleanup_screenshot_resources");
        } catch {
          try {
            await b("clear_screenshot_background");
          } catch (j) {
            L.error("[截图] 清理后台缓存失败", j);
          }
        }
        d.value = {
          selectionRect: null,
          annotations: [],
          currentTool: w.Select,
          currentStyle: { color: "#ff4444", lineWidth: 3, opacity: 1 },
          textSize: 16,
          mosaicSize: 8,
          hasSelection: !1,
          hasAnnotations: !1,
          canRedo: !1,
          selectedAnnotation: null,
          isDrawing: !1
        }, r.value = !1, l.value = "", st = null, f.value = !1, a.value = !0;
        try {
          await b("close_and_destroy_screenshot_window");
        } catch (k) {
          L.error("[截图] 销毁截图窗口失败，回退到 close()", k), await o.value?.close();
        } finally {
          S = !1;
        }
      }
    }, ft = () => {
      const k = s?.getState();
      k && (d.value = k);
    }, pt = () => {
      const k = i.value?.getToolbarSize?.();
      k && (y.value = k);
    }, Mt = (k) => {
      const j = k.detail;
      j && (y.value = j);
    };
    return qe(async () => {
      if (t.value) {
        o.value = new Je("screenshot"), s = new Jr(
          t.value,
          ft,
          Pt,
          Yt
        ), document.addEventListener("keydown", _), window.addEventListener("resize", pt), window.addEventListener("screenshot-toolbar-resize", Mt), P.value = await fn("screenshot-close-requested", () => {
          K();
        }), M.value = await fn("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const k = s?.getTranslationState();
          k?.isLoading || k?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const j = s?.getTranslationState();
              if (j?.isLoading || j?.isVisible)
                return;
              K();
            }
          }, 100);
        }), await fe(), pt(), await o.value.emit("screenshot_ready");
        try {
          const k = await b("get_translation_engine");
          k && ["google", "bing", "offline", "local-ai"].includes(k) && (v.value = k, s?.setTranslationEngine(k));
        } catch (k) {
          L.error("[截图] 获取翻译引擎设置失败", k);
        }
        try {
          const k = await b("get_offline_model_activated");
          s?.setOfflineModelActivated(k);
        } catch (k) {
          L.error("[截图] 获取离线模型激活状态失败", k);
        }
      }
    }), po(() => {
      s?.destroy(), s = null, document.removeEventListener("keydown", _), window.removeEventListener("resize", pt), window.removeEventListener("screenshot-toolbar-resize", Mt), M.value?.(), P.value?.(), M.value = void 0, P.value = void 0, o.value = null;
    }), (k, j) => (R(), O(
      "div",
      uc,
      [
        H(" 遮罩层 "),
        d.value.selectionRect ? (R(), O("div", dc, [
          x(
            "div",
            {
              class: "mask-top",
              style: mt(T.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-bottom",
              style: mt(U.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-left",
              style: mt(Z.value)
            },
            null,
            4
            /* STYLE */
          ),
          x(
            "div",
            {
              class: "mask-right",
              style: mt(X.value)
            },
            null,
            4
            /* STYLE */
          )
        ])) : (R(), O("div", gc)),
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
        d.value.selectionRect && a.value ? (R(), O(
          "div",
          {
            key: 2,
            class: "size-info",
            style: mt(B.value)
          },
          [
            x(
              "span",
              fc,
              Y(Q.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : H("v-if", !0),
        H(" 工具栏 "),
        d.value.selectionRect && !F.value ? (R(), Tt(hc, {
          key: 3,
          ref_key: "toolbarRef",
          ref: i,
          style: mt(V.value),
          class: "toolbar",
          "current-tool": d.value.currentTool,
          "current-color": d.value.currentStyle.color,
          "current-line-width": d.value.currentStyle.lineWidth,
          "current-opacity": d.value.currentStyle.opacity,
          "current-text-size": d.value.textSize,
          "current-mosaic-size": d.value.mosaicSize,
          "can-undo": d.value.hasAnnotations,
          "can-redo": d.value.canRedo,
          "can-delete": !!d.value.selectedAnnotation,
          "current-translate-engine": v.value,
          onToolSelect: tt,
          onColorChange: xt,
          onLineWidthChange: nt,
          onOpacityChange: G,
          onTextSizeChange: it,
          onMosaicSizeChange: yt,
          onTranslateEngineChange: kt,
          onUndo: I,
          onRedo: dt,
          onDelete: N,
          onSave: Rt,
          onConfirm: Lt,
          onCancel: jt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : H("v-if", !0),
        H(" 加载提示 - 仅在初始化时显示 "),
        f.value ? (R(), O("div", mc, [
          j[1] || (j[1] = x(
            "div",
            { class: "loading-spinner" },
            null,
            -1
            /* HOISTED */
          )),
          x(
            "p",
            null,
            Y(k.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : H("v-if", !0),
        H(" 文字输入框 "),
        r.value ? (R(), O(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: mt(q.value)
          },
          [
            Ye(x(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": j[0] || (j[0] = (ot) => l.value = ot),
                type: "text",
                class: "text-input",
                style: mt({
                  color: d.value.currentStyle.color,
                  fontFamily: C(_e),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  Oi(At, ["enter"]),
                  Oi(Ut, ["escape"])
                ],
                onBlur: At,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [qs, l.value]
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
}), wc = /* @__PURE__ */ bn(pc, [["__scopeId", "data-v-1e540f1a"]]), yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wc
}, Symbol.toStringTag, { value: "Module" })), Wo = Symbol(), hn = "el", vc = "is-", ce = (e, t, n, i, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), i && (s += `__${i}`), o && (s += `--${o}`), s;
}, $o = Symbol("namespaceContextKey"), xc = (e) => {
  const t = e || (Le() ? ge($o, E(hn)) : E(hn));
  return W(() => C(t) || hn);
}, ri = (e, t) => {
  const n = xc(t);
  return {
    namespace: n,
    b: (d = "") => ce(n.value, e, d, "", ""),
    e: (d) => d ? ce(n.value, e, "", d, "") : "",
    m: (d) => d ? ce(n.value, e, "", "", d) : "",
    be: (d, M) => d && M ? ce(n.value, e, d, M, "") : "",
    em: (d, M) => d && M ? ce(n.value, e, "", d, M) : "",
    bm: (d, M) => d && M ? ce(n.value, e, d, "", M) : "",
    bem: (d, M, P) => d && M && P ? ce(n.value, e, d, M, P) : "",
    is: (d, ...M) => {
      const P = M.length >= 1 ? M[0] : !0;
      return d && P ? `${vc}${d}` : "";
    },
    cssVar: (d) => {
      const M = {};
      for (const P in d)
        d[P] && (M[`--${n.value}-${P}`] = d[P]);
      return M;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const M = {};
      for (const P in d)
        d[P] && (M[`--${n.value}-${e}-${P}`] = d[P]);
      return M;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const kc = Object.prototype.hasOwnProperty, qi = (e, t) => kc.call(e, t), Xe = (e) => typeof e == "function", we = (e) => typeof e == "string", Eo = (e) => e !== null && typeof e == "object";
var bc = typeof global == "object" && global && global.Object === Object && global, Sc = typeof self == "object" && self && self.Object === Object && self, li = bc || Sc || Function("return this")(), Pe = li.Symbol, Bo = Object.prototype, Cc = Bo.hasOwnProperty, Mc = Bo.toString, Ne = Pe ? Pe.toStringTag : void 0;
function _c(e) {
  var t = Cc.call(e, Ne), n = e[Ne];
  try {
    e[Ne] = void 0;
    var i = !0;
  } catch {
  }
  var o = Mc.call(e);
  return i && (t ? e[Ne] = n : delete e[Ne]), o;
}
var Tc = Object.prototype, zc = Tc.toString;
function Rc(e) {
  return zc.call(e);
}
var Lc = "[object Null]", Pc = "[object Undefined]", Ji = Pe ? Pe.toStringTag : void 0;
function No(e) {
  return e == null ? e === void 0 ? Pc : Lc : Ji && Ji in Object(e) ? _c(e) : Rc(e);
}
function Ac(e) {
  return e != null && typeof e == "object";
}
var Ic = "[object Symbol]";
function ci(e) {
  return typeof e == "symbol" || Ac(e) && No(e) == Ic;
}
function Oc(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, o = Array(i); ++n < i; )
    o[n] = t(e[n], n, e);
  return o;
}
var hi = Array.isArray, Qi = Pe ? Pe.prototype : void 0, to = Qi ? Qi.toString : void 0;
function Ho(e) {
  if (typeof e == "string")
    return e;
  if (hi(e))
    return Oc(e, Ho) + "";
  if (ci(e))
    return to ? to.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function jo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Dc = "[object AsyncFunction]", Wc = "[object Function]", $c = "[object GeneratorFunction]", Ec = "[object Proxy]";
function Bc(e) {
  if (!jo(e))
    return !1;
  var t = No(e);
  return t == Wc || t == $c || t == Dc || t == Ec;
}
var Hn = li["__core-js_shared__"], eo = function() {
  var e = /[^.]+$/.exec(Hn && Hn.keys && Hn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nc(e) {
  return !!eo && eo in e;
}
var Hc = Function.prototype, jc = Hc.toString;
function Fc(e) {
  if (e != null) {
    try {
      return jc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vc = /[\\^$.*+?()[\]{}|]/g, Uc = /^\[object .+?Constructor\]$/, Yc = Function.prototype, Zc = Object.prototype, Gc = Yc.toString, Xc = Zc.hasOwnProperty, Kc = RegExp(
  "^" + Gc.call(Xc).replace(Vc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qc(e) {
  if (!jo(e) || Nc(e))
    return !1;
  var t = Bc(e) ? Kc : Uc;
  return t.test(Fc(e));
}
function Jc(e, t) {
  return e?.[t];
}
function Fo(e, t) {
  var n = Jc(e, t);
  return qc(n) ? n : void 0;
}
function Qc(e, t) {
  return e === t || e !== e && t !== t;
}
var th = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eh = /^\w*$/;
function nh(e, t) {
  if (hi(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ci(e) ? !0 : eh.test(e) || !th.test(e) || t != null && e in Object(t);
}
var Ke = Fo(Object, "create");
function ih() {
  this.__data__ = Ke ? Ke(null) : {}, this.size = 0;
}
function oh(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sh = "__lodash_hash_undefined__", ah = Object.prototype, rh = ah.hasOwnProperty;
function lh(e) {
  var t = this.__data__;
  if (Ke) {
    var n = t[e];
    return n === sh ? void 0 : n;
  }
  return rh.call(t, e) ? t[e] : void 0;
}
var ch = Object.prototype, hh = ch.hasOwnProperty;
function uh(e) {
  var t = this.__data__;
  return Ke ? t[e] !== void 0 : hh.call(t, e);
}
var dh = "__lodash_hash_undefined__";
function gh(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ke && t === void 0 ? dh : t, this;
}
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ye.prototype.clear = ih;
ye.prototype.delete = oh;
ye.prototype.get = lh;
ye.prototype.has = uh;
ye.prototype.set = gh;
function fh() {
  this.__data__ = [], this.size = 0;
}
function Sn(e, t) {
  for (var n = e.length; n--; )
    if (Qc(e[n][0], t))
      return n;
  return -1;
}
var mh = Array.prototype, ph = mh.splice;
function wh(e) {
  var t = this.__data__, n = Sn(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : ph.call(t, n, 1), --this.size, !0;
}
function yh(e) {
  var t = this.__data__, n = Sn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function vh(e) {
  return Sn(this.__data__, e) > -1;
}
function xh(e, t) {
  var n = this.__data__, i = Sn(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function De(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
De.prototype.clear = fh;
De.prototype.delete = wh;
De.prototype.get = yh;
De.prototype.has = vh;
De.prototype.set = xh;
var kh = Fo(li, "Map");
function bh() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (kh || De)(),
    string: new ye()
  };
}
function Sh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Cn(e, t) {
  var n = e.__data__;
  return Sh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ch(e) {
  var t = Cn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Mh(e) {
  return Cn(this, e).get(e);
}
function _h(e) {
  return Cn(this, e).has(e);
}
function Th(e, t) {
  var n = Cn(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function ke(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
ke.prototype.clear = bh;
ke.prototype.delete = Ch;
ke.prototype.get = Mh;
ke.prototype.has = _h;
ke.prototype.set = Th;
var zh = "Expected a function";
function ui(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(zh);
  var n = function() {
    var i = arguments, o = t ? t.apply(this, i) : i[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var a = e.apply(this, i);
    return n.cache = s.set(o, a) || s, a;
  };
  return n.cache = new (ui.Cache || ke)(), n;
}
ui.Cache = ke;
var Rh = 500;
function Lh(e) {
  var t = ui(e, function(i) {
    return n.size === Rh && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Ph = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ah = /\\(\\)?/g, Ih = Lh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ph, function(n, i, o, s) {
    t.push(o ? s.replace(Ah, "$1") : i || n);
  }), t;
});
function Oh(e) {
  return e == null ? "" : Ho(e);
}
function Dh(e, t) {
  return hi(e) ? e : nh(e, t) ? [e] : Ih(Oh(e));
}
function Wh(e) {
  if (typeof e == "string" || ci(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function $h(e, t) {
  t = Dh(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Wh(t[n++])];
  return n && n == i ? e : void 0;
}
function Eh(e, t, n) {
  var i = e == null ? void 0 : $h(e, t);
  return i === void 0 ? n : i;
}
function Bh(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var o = e[t];
    i[o[0]] = o[1];
  }
  return i;
}
const Vo = (e) => e === void 0, no = (e) => typeof e == "boolean", ve = (e) => typeof e == "number", Kn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Nh = (e) => we(e) ? !Number.isNaN(Number(e)) : !1;
var io;
const be = typeof window < "u", Hh = (e) => typeof e == "string", jh = () => {
};
be && ((io = window?.navigator) != null && io.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function di(e) {
  return typeof e == "function" ? e() : C(e);
}
function Fh(e) {
  return e;
}
function gi(e) {
  return Qs() ? (ta(e), !0) : !1;
}
function Vh(e, t = !0) {
  Le() ? qe(e) : t ? e() : fe(e);
}
function Uo(e, t, n = {}) {
  const {
    immediate: i = !0
  } = n, o = E(!1);
  let s = null;
  function a() {
    s && (clearTimeout(s), s = null);
  }
  function r() {
    o.value = !1, a();
  }
  function l(...h) {
    a(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...h);
    }, di(t));
  }
  return i && (o.value = !0, be && l()), gi(r), {
    isPending: Js(o),
    start: l,
    stop: r
  };
}
function Yo(e) {
  var t;
  const n = di(e);
  return (t = n?.$el) != null ? t : n;
}
const Zo = be ? window : void 0;
function Go(...e) {
  let t, n, i, o;
  if (Hh(e[0]) || Array.isArray(e[0]) ? ([n, i, o] = e, t = Zo) : [t, n, i, o] = e, !t)
    return jh;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const s = [], a = () => {
    s.forEach((u) => u()), s.length = 0;
  }, r = (u, f, v, y) => (u.addEventListener(f, v, y), () => u.removeEventListener(f, v, y)), l = Oe(() => [Yo(t), di(o)], ([u, f]) => {
    a(), u && s.push(...n.flatMap((v) => i.map((y) => r(u, v, y, f))));
  }, { immediate: !0, flush: "post" }), h = () => {
    l(), a();
  };
  return gi(h), h;
}
function Uh(e, t = !1) {
  const n = E(), i = () => n.value = !!e();
  return i(), Vh(i, t), n;
}
const oo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, so = "__vueuse_ssr_handlers__";
oo[so] = oo[so] || {};
var ao = Object.getOwnPropertySymbols, Yh = Object.prototype.hasOwnProperty, Zh = Object.prototype.propertyIsEnumerable, Gh = (e, t) => {
  var n = {};
  for (var i in e)
    Yh.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && ao)
    for (var i of ao(e))
      t.indexOf(i) < 0 && Zh.call(e, i) && (n[i] = e[i]);
  return n;
};
function Xh(e, t, n = {}) {
  const i = n, { window: o = Zo } = i, s = Gh(i, ["window"]);
  let a;
  const r = Uh(() => o && "ResizeObserver" in o), l = () => {
    a && (a.disconnect(), a = void 0);
  }, h = Oe(() => Yo(e), (f) => {
    l(), r.value && o && f && (a = new ResizeObserver(t), a.observe(f, s));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), h();
  };
  return gi(u), {
    isSupported: r,
    stop: u
  };
}
var ro;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ro || (ro = {}));
var Kh = Object.defineProperty, lo = Object.getOwnPropertySymbols, qh = Object.prototype.hasOwnProperty, Jh = Object.prototype.propertyIsEnumerable, co = (e, t, n) => t in e ? Kh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qh = (e, t) => {
  for (var n in t || (t = {}))
    qh.call(t, n) && co(e, n, t[n]);
  if (lo)
    for (var n of lo(t))
      Jh.call(t, n) && co(e, n, t[n]);
  return e;
};
const tu = {
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
Qh({
  linear: Fh
}, tu);
const ho = {
  current: 0
}, uo = E(0), Xo = 2e3, go = Symbol("elZIndexContextKey"), Ko = Symbol("zIndexContextKey"), eu = (e) => {
  const t = Le() ? ge(go, ho) : ho, n = e || (Le() ? ge(Ko, void 0) : void 0), i = W(() => {
    const a = C(n);
    return ve(a) ? a : Xo;
  }), o = W(() => i.value + uo.value), s = () => (t.current++, uo.value = t.current, o.value);
  return !be && ge(go), {
    initialZIndex: i,
    currentZIndex: o,
    nextZIndex: s
  };
};
var nu = {
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
const iu = (e) => (t, n) => ou(t, n, C(e)), ou = (e, t, n) => Eh(n, e, e).replace(/\{(\w+)\}/g, (i, o) => {
  var s;
  return `${(s = t?.[o]) != null ? s : `{${o}}`}`;
}), su = (e) => {
  const t = W(() => C(e).name), n = ea(e) ? e : E(e);
  return {
    lang: t,
    locale: n,
    t: iu(e)
  };
}, qo = Symbol("localeContextKey"), au = (e) => {
  const t = e || ge(qo, E());
  return su(W(() => t.value || nu));
}, Jo = "__epPropKey", Ht = (e) => e, ru = (e) => Eo(e) && !!e[Jo], Qo = (e, t) => {
  if (!Eo(e) || ru(e))
    return e;
  const { values: n, required: i, default: o, type: s, validator: a } = e, l = {
    type: s,
    required: !!i,
    validator: n || a ? (h) => {
      let u = !1, f = [];
      if (n && (f = Array.from(n), qi(e, "default") && f.push(o), u || (u = f.includes(h))), a && (u || (u = a(h))), !u && f.length > 0) {
        const v = [...new Set(f)].map((y) => JSON.stringify(y)).join(", ");
        na(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(h)}.`);
      }
      return u;
    } : void 0,
    [Jo]: !0
  };
  return qi(e, "default") && (l.default = o), l;
}, We = (e) => Bh(Object.entries(e).map(([t, n]) => [
  t,
  Qo(n, t)
])), lu = ["", "default", "small", "large"], cu = Qo({
  type: String,
  values: lu,
  required: !1
}), hu = Symbol("size"), uu = Symbol("emptyValuesContextKey"), du = We({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Xe(e) ? !e() : !e
  }
}), fo = (e) => Object.keys(e), pn = E();
function ts(e, t = void 0) {
  return Le() ? ge(Wo, pn) : pn;
}
function es(e, t) {
  const n = ts(), i = ri(e, W(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || hn;
  })), o = au(W(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), s = eu(W(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || Xo;
  })), a = W(() => {
    var r;
    return C(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return ns(W(() => C(n) || {})), {
    ns: i,
    locale: o,
    zIndex: s,
    size: a
  };
}
const ns = (e, t, n = !1) => {
  var i;
  const o = !!Le(), s = o ? ts() : void 0, a = (i = void 0) != null ? i : o ? ia : void 0;
  if (!a)
    return;
  const r = W(() => {
    const l = C(e);
    return s?.value ? gu(s.value, l) : l;
  });
  return a(Wo, r), a(qo, W(() => r.value.locale)), a($o, W(() => r.value.namespace)), a(Ko, W(() => r.value.zIndex)), a(hu, {
    size: W(() => r.value.size || "")
  }), a(uu, W(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !pn.value) && (pn.value = r.value), r;
}, gu = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...fo(e), ...fo(t)])], i = {};
  for (const o of n)
    i[o] = t[o] !== void 0 ? t[o] : e[o];
  return i;
};
var Mn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
};
function qn(e, t = "px") {
  if (!e)
    return "";
  if (ve(e) || Nh(e))
    return `${e}${t}`;
  if (we(e))
    return e;
}
const is = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), os = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), fu = We({
  size: {
    type: Ht([Number, String])
  },
  color: {
    type: String
  }
}), mu = zt({
  name: "ElIcon",
  inheritAttrs: !1
}), pu = /* @__PURE__ */ zt({
  ...mu,
  props: fu,
  setup(e) {
    const t = e, n = ri("icon"), i = W(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: Vo(o) ? void 0 : qn(o),
        "--color": s
      };
    });
    return (o, s) => (R(), O("i", oa({
      class: C(n).b(),
      style: C(i)
    }, o.$attrs), [
      pe(o.$slots, "default")
    ], 16));
  }
});
var wu = /* @__PURE__ */ Mn(pu, [["__file", "icon.vue"]]);
const wn = is(wu);
/*! Element Plus Icons Vue v2.3.1 */
var yu = /* @__PURE__ */ zt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (R(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), vu = yu, xu = /* @__PURE__ */ zt({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (R(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ss = xu, ku = /* @__PURE__ */ zt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (R(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), bu = ku, Su = /* @__PURE__ */ zt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (R(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Cu = Su, Mu = /* @__PURE__ */ zt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (R(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), _u = Mu;
const as = Ht([
  String,
  Object,
  Function
]), Tu = {
  Close: ss
}, zu = {
  Close: ss
}, yn = {
  success: Cu,
  warning: _u,
  error: vu,
  info: bu
}, Ru = (e) => e, un = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Lu = We({
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
    type: Ht([String, Object, Array])
  },
  offset: {
    type: Ht(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Pu = zt({
  name: "ElBadge"
}), Au = /* @__PURE__ */ zt({
  ...Pu,
  props: Lu,
  setup(e, { expose: t }) {
    const n = e, i = ri("badge"), o = W(() => n.isDot ? "" : ve(n.value) && ve(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = W(() => {
      var a, r, l, h, u;
      return [
        {
          backgroundColor: n.color,
          marginRight: qn(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: qn((h = (l = n.offset) == null ? void 0 : l[1]) != null ? h : 0)
        },
        (u = n.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: o
    }), (a, r) => (R(), O("div", {
      class: ut(C(i).b())
    }, [
      pe(a.$slots, "default"),
      p(Qn, {
        name: `${C(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Ot(() => [
          Ye(x("sup", {
            class: ut([
              C(i).e("content"),
              C(i).em("content", a.type),
              C(i).is("fixed", !!a.$slots.default),
              C(i).is("dot", a.isDot),
              C(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: mt(C(s))
          }, [
            pe(a.$slots, "content", { value: C(o) }, () => [
              sa(Y(C(o)), 1)
            ])
          ], 6), [
            [dn, !a.hidden && (C(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Iu = /* @__PURE__ */ Mn(Au, [["__file", "badge.vue"]]);
const Ou = is(Iu), Du = We({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: Ht(Object)
  },
  size: cu,
  button: {
    type: Ht(Object)
  },
  experimentalFeatures: {
    type: Ht(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Ht(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...du
}), Xt = {};
zt({
  name: "ElConfigProvider",
  props: Du,
  setup(e, { slots: t }) {
    Oe(() => e.message, (i) => {
      Object.assign(Xt, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ns(e);
    return () => pe(t, "default", { config: n?.value });
  }
});
const rs = ["success", "info", "warning", "error"], It = Ru({
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
  appendTo: be ? document.body : void 0
}), Wu = We({
  customClass: {
    type: String,
    default: It.customClass
  },
  center: {
    type: Boolean,
    default: It.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: It.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: It.duration
  },
  icon: {
    type: as,
    default: It.icon
  },
  id: {
    type: String,
    default: It.id
  },
  message: {
    type: Ht([
      String,
      Object,
      Function
    ]),
    default: It.message
  },
  onClose: {
    type: Ht(Function),
    default: It.onClose
  },
  showClose: {
    type: Boolean,
    default: It.showClose
  },
  type: {
    type: String,
    values: rs,
    default: It.type
  },
  plain: {
    type: Boolean,
    default: It.plain
  },
  offset: {
    type: Number,
    default: It.offset
  },
  zIndex: {
    type: Number,
    default: It.zIndex
  },
  grouping: {
    type: Boolean,
    default: It.grouping
  },
  repeatNum: {
    type: Number,
    default: It.repeatNum
  }
}), $u = {
  destroy: () => !0
}, qt = aa([]), Eu = (e) => {
  const t = qt.findIndex((o) => o.id === e), n = qt[t];
  let i;
  return t > 0 && (i = qt[t - 1]), { current: n, prev: i };
}, Bu = (e) => {
  const { prev: t } = Eu(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Nu = (e, t) => qt.findIndex((i) => i.id === e) > 0 ? 16 : t, Hu = zt({
  name: "ElMessage"
}), ju = /* @__PURE__ */ zt({
  ...Hu,
  props: Wu,
  emits: $u,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = zu, { ns: o, zIndex: s } = es("message"), { currentZIndex: a, nextZIndex: r } = s, l = E(), h = E(!1), u = E(0);
    let f;
    const v = W(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), y = W(() => {
      const V = n.type;
      return { [o.bm("icon", V)]: V && yn[V] };
    }), S = W(() => n.icon || yn[n.type] || ""), d = W(() => Bu(n.id)), M = W(() => Nu(n.id, n.offset) + d.value), P = W(() => u.value + M.value), F = W(() => ({
      top: `${M.value}px`,
      zIndex: a.value
    }));
    function T() {
      n.duration !== 0 && ({ stop: f } = Uo(() => {
        Z();
      }, n.duration));
    }
    function U() {
      f?.();
    }
    function Z() {
      h.value = !1;
    }
    function X({ code: V }) {
      V === un.esc && Z();
    }
    return qe(() => {
      T(), r(), h.value = !0;
    }), Oe(() => n.repeatNum, () => {
      U(), T();
    }), Go(document, "keydown", X), Xh(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: h,
      bottom: P,
      close: Z
    }), (V, B) => (R(), Tt(Qn, {
      name: C(o).b("fade"),
      onBeforeLeave: V.onClose,
      onAfterLeave: (Q) => V.$emit("destroy"),
      persisted: ""
    }, {
      default: Ot(() => [
        Ye(x("div", {
          id: V.id,
          ref_key: "messageRef",
          ref: l,
          class: ut([
            C(o).b(),
            { [C(o).m(V.type)]: V.type },
            C(o).is("center", V.center),
            C(o).is("closable", V.showClose),
            C(o).is("plain", V.plain),
            V.customClass
          ]),
          style: mt(C(F)),
          role: "alert",
          onMouseenter: U,
          onMouseleave: T
        }, [
          V.repeatNum > 1 ? (R(), Tt(C(Ou), {
            key: 0,
            value: V.repeatNum,
            type: C(v),
            class: ut(C(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          C(S) ? (R(), Tt(C(wn), {
            key: 1,
            class: ut([C(o).e("icon"), C(y)])
          }, {
            default: Ot(() => [
              (R(), Tt(ae(C(S))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          pe(V.$slots, "default", {}, () => [
            V.dangerouslyUseHTMLString ? (R(), O(Et, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              x("p", {
                class: ut(C(o).e("content")),
                innerHTML: V.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (R(), O("p", {
              key: 0,
              class: ut(C(o).e("content"))
            }, Y(V.message), 3))
          ]),
          V.showClose ? (R(), Tt(C(wn), {
            key: 2,
            class: ut(C(o).e("closeBtn")),
            onClick: wt(Z, ["stop"])
          }, {
            default: Ot(() => [
              p(C(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [dn, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Fu = /* @__PURE__ */ Mn(ju, [["__file", "message.vue"]]);
let Vu = 1;
const ls = (e) => {
  const t = !e || we(e) || Ze(e) || Xe(e) ? { message: e } : e, n = {
    ...It,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (we(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    Kn(i) || (i = document.body), n.appendTo = i;
  }
  return no(Xt.grouping) && !n.grouping && (n.grouping = Xt.grouping), ve(Xt.duration) && n.duration === 3e3 && (n.duration = Xt.duration), ve(Xt.offset) && n.offset === 16 && (n.offset = Xt.offset), no(Xt.showClose) && !n.showClose && (n.showClose = Xt.showClose), n;
}, Uu = (e) => {
  const t = qt.indexOf(e);
  if (t === -1)
    return;
  qt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Yu = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Vu++}`, o = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      o?.(), Uu(u);
    },
    onDestroy: () => {
      gn(null, s);
    }
  }, r = p(Fu, a, Xe(a.message) || Ze(a.message) ? {
    default: Xe(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || Ae._context, gn(r, s), e.appendChild(s.firstElementChild);
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
}, Ae = (e = {}, t) => {
  if (!be)
    return { close: () => {
    } };
  const n = ls(e);
  if (n.grouping && qt.length) {
    const o = qt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ve(Xt.max) && qt.length >= Xt.max)
    return { close: () => {
    } };
  const i = Yu(n, t);
  return qt.push(i), i.handler;
};
rs.forEach((e) => {
  Ae[e] = (t = {}, n) => {
    const i = ls(t);
    return Ae({ ...i, type: e }, n);
  };
});
function Zu(e) {
  for (const t of qt)
    (!e || e === t.props.type) && t.handler.close();
}
Ae.closeAll = Zu;
Ae._context = null;
const Gu = os(Ae, "$message"), cs = [
  "success",
  "info",
  "warning",
  "error"
], Xu = We({
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
    type: as
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: Ht([
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
    type: Ht(Function),
    default: () => {
    }
  },
  onClose: {
    type: Ht(Function),
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
    values: [...cs, ""],
    default: ""
  },
  zIndex: Number
}), Ku = {
  destroy: () => !0
}, qu = zt({
  name: "ElNotification"
}), Ju = /* @__PURE__ */ zt({
  ...qu,
  props: Xu,
  emits: Ku,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: o } = es("notification"), { nextZIndex: s, currentZIndex: a } = o, { Close: r } = Tu, l = E(!1);
    let h;
    const u = W(() => {
      const T = n.type;
      return T && yn[n.type] ? i.m(T) : "";
    }), f = W(() => n.type && yn[n.type] || n.icon), v = W(() => n.position.endsWith("right") ? "right" : "left"), y = W(() => n.position.startsWith("top") ? "top" : "bottom"), S = W(() => {
      var T;
      return {
        [y.value]: `${n.offset}px`,
        zIndex: (T = n.zIndex) != null ? T : a.value
      };
    });
    function d() {
      n.duration > 0 && ({ stop: h } = Uo(() => {
        l.value && P();
      }, n.duration));
    }
    function M() {
      h?.();
    }
    function P() {
      l.value = !1;
    }
    function F({ code: T }) {
      T === un.delete || T === un.backspace ? M() : T === un.esc ? l.value && P() : d();
    }
    return qe(() => {
      d(), s(), l.value = !0;
    }), Go(document, "keydown", F), t({
      visible: l,
      close: P
    }), (T, U) => (R(), Tt(Qn, {
      name: C(i).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (Z) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: Ot(() => [
        Ye(x("div", {
          id: T.id,
          class: ut([C(i).b(), T.customClass, C(v)]),
          style: mt(C(S)),
          role: "alert",
          onMouseenter: M,
          onMouseleave: d,
          onClick: T.onClick
        }, [
          C(f) ? (R(), Tt(C(wn), {
            key: 0,
            class: ut([C(i).e("icon"), C(u)])
          }, {
            default: Ot(() => [
              (R(), Tt(ae(C(f))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          x("div", {
            class: ut(C(i).e("group"))
          }, [
            x("h2", {
              class: ut(C(i).e("title")),
              textContent: Y(T.title)
            }, null, 10, ["textContent"]),
            Ye(x("div", {
              class: ut(C(i).e("content")),
              style: mt(T.title ? void 0 : { margin: 0 })
            }, [
              pe(T.$slots, "default", {}, () => [
                T.dangerouslyUseHTMLString ? (R(), O(Et, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  x("p", { innerHTML: T.message }, null, 8, ["innerHTML"])
                ], 2112)) : (R(), O("p", { key: 0 }, Y(T.message), 1))
              ])
            ], 6), [
              [dn, T.message]
            ]),
            T.showClose ? (R(), Tt(C(wn), {
              key: 0,
              class: ut(C(i).e("closeBtn")),
              onClick: wt(P, ["stop"])
            }, {
              default: Ot(() => [
                p(C(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [dn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Qu = /* @__PURE__ */ Mn(Ju, [["__file", "notification.vue"]]);
const vn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Jn = 16;
let td = 1;
const Ie = function(e = {}, t) {
  if (!be)
    return { close: () => {
    } };
  (we(e) || Ze(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  vn[n].forEach(({ vm: u }) => {
    var f;
    i += (((f = u.el) == null ? void 0 : f.offsetHeight) || 0) + Jn;
  }), i += Jn;
  const o = `notification_${td++}`, s = e.onClose, a = {
    ...e,
    offset: i,
    id: o,
    onClose: () => {
      ed(o, n, s);
    }
  };
  let r = document.body;
  Kn(e.appendTo) ? r = e.appendTo : we(e.appendTo) && (r = document.querySelector(e.appendTo)), Kn(r) || (r = document.body);
  const l = document.createElement("div"), h = p(Qu, a, Xe(a.message) ? a.message : Ze(a.message) ? () => a.message : null);
  return h.appContext = Vo(t) ? Ie._context : t, h.props.onDestroy = () => {
    gn(null, l);
  }, gn(h, l), vn[n].push({ vm: h }), r.appendChild(l.firstElementChild), {
    close: () => {
      h.component.exposed.visible.value = !1;
    }
  };
};
cs.forEach((e) => {
  Ie[e] = (t = {}, n) => ((we(t) || Ze(t)) && (t = {
    message: t
  }), Ie({ ...t, type: e }, n));
});
function ed(e, t, n) {
  const i = vn[t], o = i.findIndex(({ vm: h }) => {
    var u;
    return ((u = h.component) == null ? void 0 : u.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: s } = i[o];
  if (!s)
    return;
  n?.(s);
  const a = s.el.offsetHeight, r = t.split("-")[0];
  i.splice(o, 1);
  const l = i.length;
  if (!(l < 1))
    for (let h = o; h < l; h++) {
      const { el: u, component: f } = i[h].vm, v = Number.parseInt(u.style[r], 10) - a - Jn;
      f.props.offset = v;
    }
}
function nd() {
  for (const e of Object.values(vn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ie.closeAll = nd;
Ie._context = null;
const id = os(Ie, "$notify"), $t = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", i) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: i
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
      position: i = "center",
      duration: o = 3e3,
      showClose: s = !1
    } = e;
    i === "center" ? Gu({
      message: t,
      type: n,
      duration: o,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : id({
      message: t,
      type: n,
      position: i,
      duration: o,
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
}, od = ["disabled"], sd = {
  key: 0,
  class: "custom-button__loading"
}, ad = /* @__PURE__ */ zt({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "success", "danger", "warning", "text"].includes(e)
    },
    size: {
      type: String,
      default: "",
      validator: (e) => ["", "small", "large"].includes(e)
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
  setup(e) {
    const t = e;
    return (n, i) => (R(), O("button", {
      class: ut([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: i[0] || (i[0] = (o) => n.$emit("click", o))
    }, [
      e.loading ? (R(), O("div", sd, i[1] || (i[1] = [
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
      pe(n.$slots, "default", {}, void 0, !0)
    ], 10, od));
  }
}), ee = /* @__PURE__ */ bn(ad, [["__scopeId", "data-v-9497085f"]]);
function rd(e) {
  return hd(e.anchor, e.focus) <= 0 ? { start: e.anchor, end: e.focus } : { start: e.focus, end: e.anchor };
}
function hs(e, t) {
  if (!t || e.length === 0)
    return [];
  const { start: n, end: i } = rd(t);
  if (n.blockIndex < 0 || i.blockIndex >= e.length)
    return [];
  const o = [];
  for (let s = n.blockIndex; s <= i.blockIndex; s += 1) {
    const a = e[s].text.length, r = s === n.blockIndex ? mo(n.offset, a) : 0, l = s === i.blockIndex ? mo(i.offset, a) : a;
    l > r && o.push({ blockIndex: s, start: r, end: l });
  }
  return o;
}
function ld(e, t) {
  const n = hs(e, t);
  return n.map((i, o) => {
    const s = e[i.blockIndex], a = s.text.slice(i.start, i.end), r = i.end === s.text.length, l = o < n.length - 1;
    return a + (r && l ? s.separator : "");
  }).join("");
}
function cd(e, t) {
  let n = 0, i = Number.POSITIVE_INFINITY;
  for (let o = 0; o < e.length; o += 1) {
    const s = Math.abs(e[o] - t);
    s < i && (n = o, i = s);
  }
  return n;
}
function hd(e, t) {
  return e.blockIndex - t.blockIndex || e.offset - t.offset;
}
function mo(e, t) {
  return Number.isFinite(e) ? Math.max(0, Math.min(t, Math.round(e))) : 0;
}
const ud = ["src", "alt"], dd = { class: "ocr-header" }, gd = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, fd = { "data-tauri-drag-region": "" }, md = { class: "ocr-window-controls" }, pd = ["title"], wd = ["title"], yd = ["title"], vd = ["title"], xd = {
  class: "ocr-source-thumb",
  "data-tauri-drag-region": ""
}, kd = ["src", "alt"], bd = {
  class: "ocr-source-meta",
  "data-tauri-drag-region": ""
}, Sd = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Cd = {
  class: "ocr-source-status",
  "data-tauri-drag-region": ""
}, Md = { "data-tauri-drag-region": "" }, _d = { "data-tauri-drag-region": "" }, Td = {
  key: 0,
  class: "ocr-status-check",
  "data-tauri-drag-region": ""
}, zd = ["title"], Rd = {
  key: 0,
  class: "ocr-original-image"
}, Ld = ["src", "alt"], Pd = {
  key: 0,
  class: "ocr-state"
}, Ad = {
  key: 1,
  class: "ocr-state error"
}, Id = {
  key: 2,
  class: "ocr-state muted"
}, Od = { class: "ocr-preview-pane" }, Dd = { class: "ocr-preview-stage" }, Wd = ["src", "alt"], $d = {
  key: 0,
  class: "ocr-selection-highlight-layer",
  "aria-hidden": "true"
}, Ed = ["data-selection-index", "textContent"], Bd = {
  key: 0,
  class: "ocr-selection-translation"
}, Nd = { class: "ocr-translation-section" }, Hd = { class: "ocr-translation-label" }, jd = { class: "ocr-translation-source" }, Fd = { class: "ocr-translation-section result" }, Vd = { class: "ocr-translation-label" }, Ud = ["textContent"], Yd = { class: "ocr-record-main-row" }, Zd = ["onClick"], Gd = ["checked", "onChange"], Xd = { class: "ocr-record-index" }, Kd = ["textContent", "onBlur"], qd = {
  key: 0,
  class: "ocr-record-score"
}, Jd = {
  key: 0,
  class: "ocr-record-translation"
}, Qd = { class: "ocr-translation-label" }, tg = ["textContent", "onBlur"], eg = { class: "ocr-action-bar" }, ng = ["onClick"], ig = { class: "engine-label" }, og = ["onClick"], sg = { class: "engine-label" }, ag = { class: "ocr-engine-btn-group relative" }, rg = {
  key: 2,
  class: "zoom-info"
}, jn = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', lg = /* @__PURE__ */ zt({
  __name: "index",
  setup(e) {
    const { t } = wo(), n = E(), i = E(), o = E(null), s = E(""), a = E(""), r = E("pin"), l = E(""), h = E([]), u = E(!1), f = E(""), v = E(""), y = E(0), S = E(0), d = E({ width: 0, height: 0 }), M = E({ width: 0, height: 0 }), P = E(!1), F = E(!1), T = E(null), U = E(null), Z = E(!1);
    let X = null;
    const V = E(!1), B = E(!1), Q = E(), q = E({}), tt = E("bing"), et = E(!1), at = E(), xt = E({}), nt = E("auto"), G = W(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: t("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: t("translate.offlineTranslate"),
        short: t("translate.offlineMark")
      }
    ]), it = W(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), yt = (c) => {
      const g = typeof c == "string" ? c.trim().toLowerCase() : "";
      return g === "auto" || g === "zh" || g === "zh-tw" || g === "en" || g === "ja" || g === "ko" ? g : "auto";
    }, kt = W(() => it.value.find((c) => c.value === nt.value)?.label || t("pin.ocrLanguageAuto")), I = W(() => t("pin.showRecords")), dt = W(() => t("pin.hideRecords")), N = W(() => t("pin.translationResult")), Rt = (c, g) => {
      if (!c) {
        g.value = {};
        return;
      }
      const m = c.getBoundingClientRect(), $ = 180, D = 8, J = Math.min(
        Math.max(m.left + m.width / 2, D + $ / 2),
        window.innerWidth - D - $ / 2
      );
      g.value = {
        left: `${J}px`,
        bottom: `${Math.max(8, window.innerHeight - m.top + 8)}px`
      };
    }, Lt = () => {
      B.value && Rt(Q.value, q), et.value && Rt(at.value, xt);
    }, jt = W(() => nt.value), st = E(1), Pt = E(!1), At = E(!1);
    let Ut = null, Yt = null;
    const _ = E(!1), K = E({ x: 0, y: 0 }), ft = E(!0), pt = E({ width: 0, height: 0 });
    let Mt = null, k = 0;
    const j = E(""), ot = W(() => ({
      width: "100%",
      height: r.value === "ocr" ? "auto" : "100%",
      flex: r.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: r.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), vt = W(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), ht = W(() => y.value > 0 && S.value > 0 ? `${y.value} × ${S.value}` : t("pin.screenshotPreview")), gt = W(() => u.value ? t("pin.recognizing") : f.value ? t("pin.recognizeFailed") : l.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), rt = W(
      () => h.value.filter((c) => c.selected)
    ), lt = W(
      () => h.value.flatMap(
        (c) => c.blocks.filter(fi).map((g, m) => ({
          ...g,
          id: `${c.id}-block-${m}`,
          recordId: c.id,
          separator: us(g, c.blocks[m + 1])
        }))
      )
    ), ie = W(
      () => hs(lt.value, U.value)
    ), Jt = W(
      () => ld(lt.value, U.value)
    ), Zt = W(
      () => ie.value.map((c) => {
        const g = lt.value[c.blockIndex], m = zn(g), $ = m.boundaries[c.start] || 0, D = m.boundaries[c.end] || m.renderedWidth, J = $ / m.renderedWidth, bt = D / m.renderedWidth;
        return {
          id: `${g.id}-${c.start}-${c.end}`,
          left: g.x + g.width * J,
          top: g.y,
          width: g.width * Math.max(0, bt - J),
          height: g.height
        };
      })
    ), le = W(() => rt.value.length), _n = (c) => (c.translatedText || c.text).trim(), Tn = (c) => c.map(_n).filter(Boolean).join(`

`), $e = () => {
      l.value = Tn(h.value);
    }, fi = (c) => y.value > 0 && S.value > 0 && c.width > 0 && c.height > 0, us = (c, g) => {
      if (!g)
        return `

`;
      const m = c.text.trim().slice(-1), $ = g.text.trim().slice(0, 1), D = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
      return D.test(m) || D.test($) ? "" : " ";
    }, ds = (c) => {
      if (!fi(c))
        return {};
      const g = oe(c.x / y.value * 100), m = oe(c.y / S.value * 100), $ = oe(c.width / y.value * 100, 1), D = oe(c.height / S.value * 100, 1), J = zn(c);
      return {
        left: `${g}%`,
        top: `${m}%`,
        width: `${$}%`,
        height: `${D}%`,
        fontSize: `${J.fontSize}px`,
        lineHeight: `${J.lineHeight}px`,
        letterSpacing: `${J.letterSpacing}px`
      };
    }, gs = (c) => y.value <= 0 || S.value <= 0 ? {} : {
      left: `${oe(c.left / y.value * 100)}%`,
      top: `${oe(c.top / S.value * 100)}%`,
      width: `${oe(c.width / y.value * 100)}%`,
      height: `${oe(c.height / S.value * 100)}%`
    }, Se = /* @__PURE__ */ new Map();
    let mi = null;
    const zn = (c) => {
      const g = ms(), m = c.text.trim(), $ = `${c.id}:${m}:${g.toFixed(4)}`, D = Se.get($);
      if (D)
        return D;
      const J = Math.max(c.width * g, 1), bt = Math.max(c.height * g, 1);
      let St = pi(
        Math.min((c.fontSize || c.height * 0.8) * g, bt * 0.86),
        5,
        28
      );
      const Dt = fs();
      Dt.font = `${St}px ${jn}`;
      let Wt = Math.max(Dt.measureText(m).width, 1);
      Wt > J && (St = Math.max(5, St * (J / Wt)), Dt.font = `${St}px ${jn}`, Wt = Math.max(Dt.measureText(m).width, 1));
      const Ft = m.length > 0 ? Math.max(0, (J - Wt) / m.length) : 0, Ai = Array.from({ length: m.length + 1 }, (wg, $n) => $n === 0 ? 0 : (Dt.font = `${St}px ${jn}`, Dt.measureText(m.slice(0, $n)).width + Ft * $n)), Gs = Math.max(Ai[m.length] || Wt, 1), Ii = {
        fontSize: St,
        lineHeight: bt,
        letterSpacing: Ft,
        boundaries: Ai,
        renderedWidth: Gs
      };
      return Se.set($, Ii), Ii;
    }, fs = () => {
      mi || (mi = document.createElement("canvas"));
      const c = mi.getContext("2d");
      if (!c)
        throw new Error(t("pin.ocrMeasureFailed"));
      return c;
    }, ms = () => y.value <= 0 || S.value <= 0 || d.value.width <= 0 || d.value.height <= 0 ? 1 : Math.min(
      d.value.width / y.value,
      d.value.height / S.value
    ), Rn = () => {
      const c = i.value;
      if (Se.clear(), !c) {
        d.value = { width: 0, height: 0 };
        return;
      }
      d.value = {
        width: c.clientWidth,
        height: c.clientHeight
      };
    }, oe = (c, g = 0) => Number.isFinite(c) ? Math.min(100, Math.max(g, c)) : g, pi = (c, g, m) => Number.isFinite(c) ? Math.min(m, Math.max(g, c)) : g, ps = () => {
      const c = /* @__PURE__ */ new Date(), g = (m) => m.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${c.getFullYear()}-${g(c.getMonth() + 1)}-${g(c.getDate())} ${g(c.getHours())}.${g(c.getMinutes())}.${g(c.getSeconds())}.png`;
    }, ws = W(() => {
      const c = Math.min(
        pt.value.width,
        pt.value.height
      );
      let g = 1;
      return c < 300 && (g = Math.max(0.4, c / 300)), {
        left: `${K.value.x}px`,
        top: `${K.value.y}px`,
        transform: `scale(${g})`,
        transformOrigin: "top left"
      };
    }), ys = (c) => {
      s.value = c, y.value = 0, S.value = 0, d.value = { width: 0, height: 0 }, tn(), Se.clear(), M.value = { width: 0, height: 0 }, r.value === "ocr" && (v.value = ps(), F.value = !1), a.value && (URL.revokeObjectURL(a.value), a.value = "");
      try {
        const g = c.split(",")[1] || c, m = c.match(/data:([^;]+);/), $ = m ? m[1] : "image/png", D = atob(g), J = new Uint8Array(D.length);
        for (let St = 0; St < D.length; St++)
          J[St] = D.charCodeAt(St);
        const bt = new Blob([J], { type: $ });
        a.value = URL.createObjectURL(bt);
      } catch (g) {
        L.error("[PIN窗口] 转换 Blob URL 失败", g), a.value = c;
      }
    }, wi = async () => {
      await fe(), await new Promise((c) => requestAnimationFrame(() => c()));
      try {
        await o.value?.emit("pin-window-ready");
      } catch (c) {
        L.error("[PIN窗口] 发送 ready 事件失败", c);
      }
    }, yi = (c) => {
      if (!c?.imageData)
        return L.error("[PIN窗口] 收到的事件数据格式不正确", c), !1;
      const g = c.mode === "ocr" ? "ocr" : "pin", m = `${g}:${c.imageData.length}`;
      return m === j.value ? !1 : (j.value = m, r.value = g, ys(c.imageData), Gt(), r.value === "ocr" ? (Pn(c.text || ""), f.value = "", c.text || Ln()) : (k++, u.value = !1, f.value = "", l.value = "", h.value = []), !0);
    }, Ln = async () => {
      if (!s.value) return;
      const c = ++k;
      tn(), T.value = null, Se.clear(), u.value = !0, f.value = "";
      const g = Date.now();
      _t.log("[Pin OCR] recognize start", {
        requestId: c,
        imageDataLength: s.value.length,
        imageWidth: y.value,
        imageHeight: S.value,
        language: nt.value,
        backendLanguage: jt.value
      });
      try {
        _t.log("[Pin OCR] invoking RapidOCR backend", {
          requestId: c,
          language: nt.value,
          backendLanguage: jt.value
        });
        const m = await b("recognize_text_from_image", {
          imageData: s.value,
          engine: "rapidocr",
          language: jt.value
        }), $ = xs(m), D = $.length > 0 ? Tn($) : Cs(m);
        if (_t.log("[Pin OCR] backend OCR success", {
          requestId: c,
          resultEngine: m?.engine,
          resultLanguage: m?.language,
          confidence: m?.confidence,
          blocks: Array.isArray(m?.blocks) ? m.blocks.length : 0,
          textLength: D.trim().length
        }), c !== k) return;
        $.length > 0 ? (h.value = $, $e()) : Pn(D.trim()), Se.clear(), _t.log("[Pin OCR] recognize success", {
          requestId: c,
          durationMs: Date.now() - g,
          textLength: l.value.length,
          textPreview: l.value.slice(0, 300)
        });
      } catch (m) {
        if (c !== k) return;
        L.error("[PIN窗口] OCR 识别失败", m), _t.log("[Pin OCR] recognize failed", {
          requestId: c,
          durationMs: Date.now() - g,
          error: Ms(m)
        }), f.value = t("pin.recognizeFailed"), l.value = "", h.value = [], $t.error(t("pin.recognizeFailed"));
      } finally {
        c === k && (u.value = !1);
      }
    }, Pn = (c) => {
      const g = c.trim();
      l.value = g, h.value = g ? g.split(/\n{2,}|\n/).map((m, $) => vs(m, $)).filter((m) => m.text.trim()) : [];
    }, vs = (c, g) => ({
      id: `plain-${Date.now()}-${g}`,
      text: c.trim(),
      sourceText: c.trim(),
      translatedText: "",
      bbox: { x: 0, y: 0, width: 0, height: 0 },
      blocks: [],
      confidence: 0,
      selected: !1
    }), xs = (c) => {
      const g = bs(c?.blocks);
      return g.length === 0 ? [] : To(g).map(($, D) => ks($, D)).filter(($) => $.text.trim());
    }, ks = (c, g) => {
      const m = c.text.trim(), $ = c.blocks;
      return {
        id: `ocr-${Date.now()}-${g}`,
        text: m,
        sourceText: m,
        translatedText: c.translatedText?.trim() || "",
        bbox: { ...c.bbox },
        blocks: $,
        confidence: Ss($),
        selected: !1
      };
    }, bs = (c) => Array.isArray(c) ? c.map((g) => {
      if (!g || typeof g != "object")
        return null;
      const m = g, $ = typeof m.text == "string" ? m.text.trim() : "";
      if (!$)
        return null;
      const D = {
        text: $,
        x: Number(m.x || 0),
        y: Number(m.y || 0),
        width: Number(m.width || 0),
        height: Number(m.height || 0),
        fontSize: Number(m.fontSize || 0),
        lineHeight: Number(m.lineHeight || 0),
        angle: Number(m.angle || 0),
        isCodeBlock: !!m.isCodeBlock,
        confidence: Number(m.confidence || 0)
      };
      return typeof m.translatedText == "string" && (D.translatedText = m.translatedText), D;
    }).filter((g) => g !== null) : [], Ss = (c) => {
      const g = c.map((m) => Number(m.confidence || 0)).filter((m) => Number.isFinite(m) && m > 0);
      return g.length === 0 ? 0 : g.reduce((m, $) => m + $, 0) / g.length;
    }, Cs = (c) => typeof c == "string" ? c : c?.text ? c.text : c?.full_text ? c.full_text : Array.isArray(c?.blocks) ? c.blocks.map((g) => g?.text).filter(Boolean).join(`
`) : "", Ms = (c) => c instanceof Error ? `${c.name}: ${c.message}
${c.stack || ""}`.trim() : typeof c == "string" ? c : JSON.stringify(c) || String(c), An = async () => {
      const c = Ts();
      if (c)
        try {
          await navigator.clipboard.writeText(c), $t.success(t("pin.copySuccess"));
        } catch (g) {
          L.error("[PIN窗口] 复制识别文本失败", g), $t.error(t("pin.copyFailed"));
        } finally {
          Gt();
        }
    }, _s = async () => {
      $e();
      const c = l.value.trim();
      if (c)
        try {
          await b("save_text_to_file", { text: c }), $t.success(t("pin.saveSuccess"));
        } catch (g) {
          g !== "SAVE_CANCELLED" && (L.error("[PIN窗口] 保存文本失败", g), $t.error(t("pin.saveFailed")));
        }
    }, Ts = () => {
      const c = zs();
      if (c)
        return c;
      if (Jt.value)
        return Jt.value;
      const g = Tn(rt.value);
      return g || ($e(), l.value.trim());
    }, zs = () => {
      const c = window.getSelection(), g = n.value?.querySelector(".ocr-reading-surface");
      if (!c || c.rangeCount === 0 || !g)
        return "";
      for (let m = 0; m < c.rangeCount; m += 1) {
        const D = c.getRangeAt(m).commonAncestorContainer;
        if (g.contains(D))
          return c.toString().trim();
      }
      return "";
    }, vi = (c) => {
      const g = h.value.find((m) => m.id === c);
      g && (g.selected = !g.selected);
    }, xi = (c, g, m) => {
      const $ = h.value.find((J) => J.id === c), D = m.target;
      !$ || !D || ($[g] = D.innerText.trim(), g === "text" && !$.sourceText.trim() && ($.sourceText = $.text), $e());
    }, Rs = (c) => {
      const g = c.target;
      !g || !T.value || (T.value.translatedText = g.innerText.trim());
    }, Ls = async () => {
      B.value = !B.value, et.value = !1, B.value && (await fe(), Lt());
    }, Ps = (c) => {
      tt.value = c, B.value = !1, b("set_translation_engine", { engine: c }).catch((g) => {
        L.error("[PIN窗口] 保存翻译引擎设置失败", g);
      });
    }, ki = async () => {
      et.value = !et.value, B.value = !1, et.value && (await fe(), Lt());
    }, As = (c) => {
      nt.value = c, et.value = !1, b("set_ocr_language", { language: c }).catch((g) => {
        L.error("[PIN窗口] 保存 OCR 语言设置失败", g);
      }), s.value && Ln();
    }, Is = async () => {
      if (Gt(), B.value = !1, et.value = !1, !l.value.trim() || V.value) return;
      const c = Jt.value.trim(), g = c ? [] : rt.value.length > 0 ? rt.value : h.value, m = c || (g.length > 0 ? g.map((D) => D.text).join(`

`) : l.value), $ = he(m);
      if (!Re($)) {
        $t.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      V.value = !0;
      try {
        if (await Os(), c) {
          const D = await In(c, $);
          D && (T.value = {
            sourceText: c,
            translatedText: D.trim()
          }, F.value = !0), $t.success(t("pin.translateSuccess"));
        } else if (g.length > 0) {
          for (const D of g) {
            const J = await In(D.text, $);
            J && (D.translatedText = J.trim());
          }
          $e(), F.value = !0, $t.success(t("pin.translateSuccess"));
        } else {
          const D = await In(l.value, $);
          D && Pn(D), $t.success(t("pin.translateSuccess"));
        }
      } catch (D) {
        L.error("[PIN窗口] 翻译失败", D);
        const J = D instanceof Error ? D.message : String(D);
        if (J !== "翻译已取消") {
          const bt = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          $t.error(
            bt.includes(J) ? J : t("pin.translateFailed")
          );
        }
      } finally {
        V.value = !1;
      }
    }, Os = async () => {
      if (tt.value !== "offline")
        return;
      if ((await ii()).isCached)
        await Mo();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await b("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, In = async (c, g) => {
      const m = c.trim();
      return m ? tt.value === "offline" ? Co(m) : await b("translate_text", {
        text: m,
        from: "auto",
        to: g === "zh" ? "en" : "zh",
        engine: tt.value
      }) : "";
    }, Ds = () => {
      P.value = !P.value;
    }, Ws = () => {
      F.value = !F.value;
    }, $s = (c) => {
      Qe(c);
    }, Es = async () => {
      if (!o.value) return;
      const c = o.value;
      typeof c.minimize == "function" && await c.minimize();
    }, Bs = async () => {
      if (!o.value) return;
      const c = o.value;
      (typeof c.isMaximized == "function" ? await c.isMaximized() : !1) && typeof c.unmaximize == "function" ? await c.unmaximize() : typeof c.maximize == "function" && await c.maximize();
    }, bi = async (c) => {
      const g = c.target;
      if (y.value = g.naturalWidth, S.value = g.naturalHeight, o.value && M.value.width === 0)
        try {
          const m = await o.value.innerSize(), $ = await o.value.scaleFactor(), D = m.toLogical($);
          M.value = {
            width: D.width,
            height: D.height
          };
        } catch (m) {
          L.error("[PIN窗口] 获取窗口初始尺寸失败", m);
        }
    }, Si = async (c) => {
      if (c.ctrlKey && (c.preventDefault(), c.stopPropagation(), !At.value && o.value)) {
        At.value = !0;
        try {
          const m = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), $ = c.deltaY > 0 ? 0.95 : 1.05, D = m.width, J = m.height, bt = Math.round(D * $), St = Math.round(J * $), Dt = 50, Wt = 3e3;
          if (bt >= Dt && bt <= Wt && St >= Dt && St <= Wt) {
            if (await o.value.setSize(new Fe(bt, St)), y.value > 0) {
              const Ft = Math.round(
                bt / y.value * 100
              );
              st.value = Ft / 100;
            }
            Pt.value = !0, On();
          }
        } catch (g) {
          L.error("[PIN窗口] 窗口缩放失败", g);
        } finally {
          setTimeout(() => {
            At.value = !1;
          }, 100);
        }
      }
    }, Ns = (c) => {
      r.value === "ocr" && c.ctrlKey && Si(c);
    }, On = () => {
      Pt.value = !0, Ut && clearTimeout(Ut), Ut = setTimeout(() => {
        Pt.value = !1;
      }, 1e3);
    }, Qe = (c) => {
      c.preventDefault(), c.stopPropagation(), _.value = !1, setTimeout(() => {
        const g = window.innerWidth, m = window.innerHeight;
        pt.value = { width: g, height: m };
        const $ = Math.min(g, m);
        let D = 1;
        $ < 300 && (D = Math.max(0.4, $ / 300));
        const J = r.value === "ocr" ? 176 : 150, bt = r.value === "ocr" && l.value.trim() ? 222 : 180, St = J * D, Dt = bt * D;
        let Wt = c.clientX, Ft = c.clientY;
        Wt + St > g && (Wt = g - St - 5), Ft + Dt > m && (Ft = m - Dt - 5), Wt = Math.max(5, Wt), Ft = Math.max(5, Ft), K.value = { x: Wt, y: Ft }, _.value = !0;
      }, 10);
    }, Gt = () => {
      _.value = !1, B.value = !1, et.value = !1;
    }, Ci = async () => {
      o.value && (ft.value = !ft.value, await o.value.setAlwaysOnTop(ft.value), Gt());
    }, Mi = async (c) => {
      if (o.value && !At.value) {
        At.value = !0;
        try {
          const m = (await o.value.innerSize()).toLogical(
            await o.value.scaleFactor()
          ), $ = Math.round(m.width * c), D = Math.round(m.height * c), J = 50, bt = 3e3;
          $ >= J && $ <= bt && D >= J && D <= bt && (await o.value.setSize(new Fe($, D)), y.value > 0 && (st.value = $ / y.value), On());
        } catch (g) {
          L.error("[PIN窗口] 键盘缩放失败", g);
        } finally {
          setTimeout(() => {
            At.value = !1;
          }, 100);
        }
      }
    }, _i = async () => {
      if (o.value && M.value.width > 0 && M.value.height > 0)
        try {
          await o.value.setSize(
            new Fe(
              M.value.width,
              M.value.height
            )
          ), st.value = 1, On();
        } catch (c) {
          L.error("[PIN窗口] 重置缩放失败", c);
        }
      Gt();
    }, Hs = async () => {
      try {
        const c = s.value;
        Gt(), o.value && await o.value.hide(), await b("copy_image_to_clipboard", { imageData: c }), $t.success(t("pin.copySuccess")), o.value && await o.value.close();
      } catch (c) {
        L.error("[PIN窗口] 复制图片失败", c), $t.error(t("pin.copyFailed")), o.value && await o.value.close();
      }
    }, js = async () => {
      const c = s.value;
      Gt(), o.value && await o.value.hide();
      try {
        await b("save_pin_image", { imageData: c }), $t.success(t("pin.saveSuccess")), o.value && await o.value.close();
      } catch (g) {
        g === "SAVE_CANCELLED" ? (L.info("[PIN窗口] 用户取消保存，恢复窗口显示"), o.value && await o.value.show()) : (L.error("[PIN窗口] 保存图片失败", g), $t.error(t("pin.saveFailed")), o.value && await o.value.close());
      }
    }, Dn = async () => {
      o.value && await o.value.close();
    }, Ti = (c) => {
      c.preventDefault();
    }, Wn = async (c) => {
      if (c.button === 0 && o.value) {
        const g = c.target;
        if (g.hasAttribute("data-tauri-drag-region") || g.closest("[data-tauri-drag-region]")) {
          if (g.closest("button") || g.closest(".ocr-view-original"))
            return;
          try {
            await o.value.startDragging();
          } catch (m) {
            L.error("[PIN窗口] 拖拽窗口失败", m);
          }
        }
      }
    }, zi = (c) => {
      const g = c.target;
      !g.closest(".context-menu") && !g.closest(".ocr-engine-btn-group") && !g.closest(".translate-btn-group") && !g.closest(".ocr-floating-menu") && Gt();
    }, Fs = (c) => {
      if (c.button !== 0)
        return;
      const g = c.currentTarget, m = Li(g, c.clientX, c.clientY);
      if (window.getSelection()?.removeAllRanges(), !m) {
        tn();
        return;
      }
      c.preventDefault(), g.setPointerCapture(c.pointerId), X = c.pointerId, Z.value = !0, U.value = {
        anchor: m,
        focus: m
      };
    }, Ri = (c) => {
      if (!Z.value || c.pointerId !== X)
        return;
      const g = c.currentTarget, m = Li(g, c.clientX, c.clientY);
      !m || !U.value || (c.preventDefault(), U.value = {
        anchor: U.value.anchor,
        focus: m
      });
    }, Vs = (c) => {
      if (c.pointerId !== X)
        return;
      Ri(c);
      const g = c.currentTarget;
      g.hasPointerCapture(c.pointerId) && g.releasePointerCapture(c.pointerId), Z.value = !1, X = null;
    }, Us = (c) => {
      c.pointerId === X && (Z.value = !1, X = null);
    }, tn = () => {
      U.value = null, Z.value = !1, X = null;
    }, Ys = () => {
      const c = lt.value.length - 1;
      c < 0 || (window.getSelection()?.removeAllRanges(), U.value = {
        anchor: { blockIndex: 0, offset: 0 },
        focus: {
          blockIndex: c,
          offset: lt.value[c].text.length
        }
      });
    }, Li = (c, g, m) => {
      const $ = c.querySelectorAll(
        ".ocr-overlay-block[data-selection-index]"
      );
      for (const D of $) {
        const J = D.getBoundingClientRect();
        if (g < J.left || g > J.right || m < J.top || m > J.bottom)
          continue;
        const bt = Number(D.dataset.selectionIndex), St = lt.value[bt];
        if (!St)
          return null;
        const Dt = zn(St), Ft = pi((g - J.left) / Math.max(J.width, 1), 0, 1) * Dt.renderedWidth;
        return {
          blockIndex: bt,
          offset: cd(Dt.boundaries, Ft)
        };
      }
      return null;
    }, Pi = (c) => {
      if (c.altKey && c.code === "Space") {
        c.preventDefault(), c.stopPropagation();
        return;
      }
      if (c.key === "Escape")
        _.value ? Gt() : Dn();
      else if (c.ctrlKey || c.metaKey) {
        const m = !!c.target?.closest('input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]');
        c.key.toLowerCase() === "c" && r.value === "ocr" && Jt.value && !m ? (c.preventDefault(), An()) : c.key.toLowerCase() === "a" && r.value === "ocr" && lt.value.length > 0 && !m ? (c.preventDefault(), Ys()) : c.key === "0" ? (c.preventDefault(), _i()) : c.key === "=" || c.key === "+" ? (c.preventDefault(), Mi(1.05)) : c.key === "-" && (c.preventDefault(), Mi(0.95));
      }
    }, Zs = async () => {
      if (o.value)
        try {
          const c = await b(
            "get_pin_window_data",
            { label: o.value.label }
          );
          c && yi(c) && await wi();
        } catch (c) {
          L.error("[PIN窗口] 主动获取窗口数据失败", c);
        }
    };
    return Oe(
      i,
      (c) => {
        if (Yt?.disconnect(), Yt = null, !c) {
          d.value = { width: 0, height: 0 };
          return;
        }
        Rn(), Yt = new ResizeObserver(Rn), Yt.observe(c);
      },
      { flush: "post" }
    ), qe(async () => {
      if (n.value) {
        try {
          const [c, g] = await Promise.all([
            b("get_translation_engine"),
            b("get_ocr_language")
          ]);
          (c === "google" || c === "bing" || c === "offline") && (tt.value = c), nt.value = yt(g);
        } catch (c) {
          L.error("[PIN窗口] 读取默认 OCR/翻译设置失败", c);
        }
        try {
          o.value = Je.getCurrent();
          try {
            Mt = await o.value.listen(
              "pin-window-data",
              (c) => {
                yi(c.payload) && wi();
              }
            ), await Zs();
          } catch (c) {
            L.error("[PIN窗口] 设置事件监听失败", c);
          }
        } catch (c) {
          if (L.error("[PIN窗口] 初始化错误", c), o.value)
            try {
              await o.value.show();
            } catch (g) {
              L.error("[PIN窗口] 显示窗口失败", g);
            }
        }
        document.addEventListener("click", zi), document.addEventListener("keydown", Pi, !0), document.addEventListener("contextmenu", Ti, !0), window.addEventListener("resize", Lt), window.addEventListener("scroll", Lt, !0), window.addEventListener("blur", Gt), document.body && (document.body.oncontextmenu = (c) => (c.preventDefault(), !1));
      }
    }), po(() => {
      a.value && URL.revokeObjectURL(a.value), Mt && Mt(), document.removeEventListener("click", zi), document.removeEventListener("keydown", Pi, !0), document.removeEventListener("contextmenu", Ti, !0), window.removeEventListener("resize", Lt), window.removeEventListener("scroll", Lt, !0), window.removeEventListener("blur", Gt), Yt?.disconnect(), Yt = null, document.body && (document.body.oncontextmenu = null), Ut && clearTimeout(Ut);
    }), (c, g) => (R(), O(
      "div",
      {
        class: ut(["pin-container", { "ocr-mode": r.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: wt(Qe, ["prevent"]),
        onWheelCapture: Ns
      },
      [
        H(" 图片容器 "),
        a.value && r.value === "pin" ? (R(), O(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: mt(ot.value),
            onWheelCapture: Si,
            onContextmenu: wt(Qe, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Wn
          },
          [
            x("img", {
              src: a.value,
              alt: c.$t("screenshot.pin"),
              style: mt(vt.value),
              onLoad: bi,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, ud)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : H("v-if", !0),
        r.value === "ocr" ? (R(), O(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: wt(Qe, ["prevent"])
          },
          [
            x("header", dd, [
              x(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Wn
                },
                [
                  x("div", gd, [
                    p(C(je), {
                      theme: "outline",
                      size: "18"
                    }),
                    x(
                      "span",
                      fd,
                      Y(c.$t("pin.ocrResult")),
                      1
                      /* TEXT */
                    )
                  ]),
                  x("div", md, [
                    x("button", {
                      class: "ocr-window-btn",
                      title: ft.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow"),
                      onClick: wt(Ci, ["stop"])
                    }, [
                      (R(), Tt(ae(ft.value ? C(Xn) : C(Gi)), {
                        size: "18",
                        theme: "outline"
                      }))
                    ], 8, pd),
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
                      onClick: wt(Es, ["stop"])
                    }, [
                      p(C(Oo), {
                        size: "18",
                        theme: "outline"
                      })
                    ], 8, wd),
                    x("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.maximize"),
                      onClick: wt(Bs, ["stop"])
                    }, [
                      p(C(wl), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 5
                      })
                    ], 8, yd),
                    x("button", {
                      class: "ocr-window-btn",
                      title: c.$t("pin.close"),
                      onClick: wt(Dn, ["stop"])
                    }, [
                      p(C(Gn), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 6
                      })
                    ], 8, vd)
                  ])
                ],
                32
                /* NEED_HYDRATION */
              ),
              x(
                "div",
                {
                  class: "ocr-source-card",
                  "data-tauri-drag-region": "",
                  onMousedown: Wn
                },
                [
                  x("div", xd, [
                    a.value ? (R(), O("img", {
                      key: 0,
                      src: a.value,
                      alt: c.$t("pin.ocrPreviewAlt"),
                      onLoad: bi,
                      draggable: "false"
                    }, null, 40, kd)) : H("v-if", !0)
                  ]),
                  x("div", bd, [
                    x(
                      "div",
                      Sd,
                      Y(v.value),
                      1
                      /* TEXT */
                    ),
                    x("div", Cd, [
                      x(
                        "span",
                        Md,
                        Y(ht.value),
                        1
                        /* TEXT */
                      ),
                      g[3] || (g[3] = x(
                        "span",
                        {
                          class: "ocr-status-separator",
                          "data-tauri-drag-region": ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      x(
                        "span",
                        _d,
                        Y(gt.value),
                        1
                        /* TEXT */
                      ),
                      !u.value && !f.value && l.value.trim() ? (R(), O("span", Td, " ✓ ")) : H("v-if", !0)
                    ])
                  ]),
                  x("button", {
                    class: "ocr-view-original",
                    title: P.value ? c.$t("pin.viewResult") : c.$t("pin.viewOriginal"),
                    onClick: wt(Ds, ["stop"])
                  }, [
                    (R(), Tt(ae(P.value ? C(je) : C(ul)), {
                      size: "24",
                      theme: "outline",
                      strokeWidth: 2.6
                    })),
                    x(
                      "span",
                      null,
                      Y(P.value ? c.$t("pin.viewResult") : c.$t("pin.viewOriginal")),
                      1
                      /* TEXT */
                    )
                  ], 8, zd)
                ],
                32
                /* NEED_HYDRATION */
              )
            ]),
            x(
              "main",
              {
                class: "ocr-reading-surface",
                onMousedown: g[1] || (g[1] = wt(() => {
                }, ["stop"]))
              },
              [
                P.value ? (R(), O("div", Rd, [
                  x("img", {
                    src: a.value || s.value,
                    alt: c.$t("pin.originalImageAlt")
                  }, null, 8, Ld)
                ])) : (R(), O(
                  Et,
                  { key: 1 },
                  [
                    u.value ? (R(), O("div", Pd, [
                      p(C(Zi), {
                        class: "ocr-loading-icon",
                        size: "20",
                        theme: "outline",
                        strokeWidth: 3
                      }),
                      x(
                        "span",
                        null,
                        Y(c.$t("pin.recognizing")),
                        1
                        /* TEXT */
                      )
                    ])) : f.value ? (R(), O(
                      "div",
                      Ad,
                      Y(f.value),
                      1
                      /* TEXT */
                    )) : l.value.trim() ? (R(), O(
                      "div",
                      {
                        key: 3,
                        class: ut(["ocr-result-layout", { "records-open": F.value }])
                      },
                      [
                        x("section", Od, [
                          x("div", Dd, [
                            x("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: i,
                              src: a.value || s.value,
                              alt: c.$t("pin.ocrSourceAlt"),
                              onLoad: Rn
                            }, null, 40, Wd),
                            Zt.value.length > 0 ? (R(), O("div", $d, [
                              (R(!0), O(
                                Et,
                                null,
                                Kt(Zt.value, (m) => (R(), O(
                                  "span",
                                  {
                                    key: m.id,
                                    class: "ocr-selection-highlight",
                                    style: mt(gs(m))
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                ))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])) : H("v-if", !0),
                            lt.value.length > 0 ? (R(), O(
                              "div",
                              {
                                key: 1,
                                class: "ocr-text-overlay",
                                onPointerdown: Fs,
                                onPointermove: Ri,
                                onPointerup: Vs,
                                onPointercancel: Us
                              },
                              [
                                (R(!0), O(
                                  Et,
                                  null,
                                  Kt(lt.value, (m, $) => (R(), O("span", {
                                    key: m.id,
                                    class: "ocr-overlay-block",
                                    "data-selection-index": $,
                                    style: mt(ds(m)),
                                    textContent: Y(m.text.trim())
                                  }, null, 12, Ed))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              32
                              /* NEED_HYDRATION */
                            )) : H("v-if", !0)
                          ])
                        ]),
                        F.value ? (R(), O(
                          "section",
                          {
                            key: 0,
                            class: "ocr-record-pane",
                            onPointerdown: tn
                          },
                          [
                            T.value ? (R(), O("section", Bd, [
                              x("div", Nd, [
                                x(
                                  "span",
                                  Hd,
                                  Y(c.$t("pin.selectedText")),
                                  1
                                  /* TEXT */
                                ),
                                x(
                                  "div",
                                  jd,
                                  Y(T.value.sourceText),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              x("div", Fd, [
                                x(
                                  "span",
                                  Vd,
                                  Y(N.value),
                                  1
                                  /* TEXT */
                                ),
                                x("div", {
                                  class: "ocr-selection-translation-editor",
                                  contenteditable: "plaintext-only",
                                  spellcheck: "false",
                                  textContent: Y(T.value.translatedText),
                                  onBlur: Rs
                                }, null, 40, Ud)
                              ])
                            ])) : H("v-if", !0),
                            (R(!0), O(
                              Et,
                              null,
                              Kt(h.value, (m, $) => (R(), O(
                                "article",
                                {
                                  key: m.id,
                                  class: ut(["ocr-record-item", { selected: m.selected }])
                                },
                                [
                                  x("div", Yd, [
                                    x("header", {
                                      class: "ocr-record-header",
                                      onClick: wt((D) => vi(m.id), ["stop"])
                                    }, [
                                      x("input", {
                                        class: "ocr-record-checkbox",
                                        type: "checkbox",
                                        checked: m.selected,
                                        onChange: wt((D) => vi(m.id), ["stop"]),
                                        onClick: g[0] || (g[0] = wt(() => {
                                        }, ["stop"]))
                                      }, null, 40, Gd),
                                      x(
                                        "span",
                                        Xd,
                                        "#" + Y($ + 1),
                                        1
                                        /* TEXT */
                                      )
                                    ], 8, Zd),
                                    x("div", {
                                      class: "ocr-record-editor",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: Y(m.text),
                                      onBlur: (D) => xi(m.id, "text", D)
                                    }, null, 40, Kd),
                                    m.confidence > 0 ? (R(), O(
                                      "span",
                                      qd,
                                      Y(Math.round(m.confidence)) + "% ",
                                      1
                                      /* TEXT */
                                    )) : H("v-if", !0)
                                  ]),
                                  m.translatedText ? (R(), O("div", Jd, [
                                    x(
                                      "span",
                                      Qd,
                                      Y(N.value),
                                      1
                                      /* TEXT */
                                    ),
                                    x("div", {
                                      class: "ocr-record-editor translated",
                                      contenteditable: "plaintext-only",
                                      spellcheck: "false",
                                      textContent: Y(m.translatedText),
                                      onBlur: (D) => xi(m.id, "translatedText", D)
                                    }, null, 40, tg)
                                  ])) : H("v-if", !0)
                                ],
                                2
                                /* CLASS */
                              ))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ],
                          32
                          /* NEED_HYDRATION */
                        )) : H("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )) : (R(), O(
                      "div",
                      Id,
                      Y(c.$t("pin.noTextRecognized")),
                      1
                      /* TEXT */
                    ))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ],
              32
              /* NEED_HYDRATION */
            ),
            x("footer", eg, [
              p(ee, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.copyText"),
                disabled: !l.value.trim(),
                onClick: wt(An, ["stop"])
              }, {
                default: Ot(() => [
                  p(C(Nn), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  x(
                    "span",
                    null,
                    Y(le.value > 0 ? `${c.$t("pin.copyText")} (${le.value})` : c.$t("pin.copyText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              p(ee, {
                class: "ocr-action-btn",
                type: "text",
                title: F.value ? dt.value : I.value,
                disabled: h.value.length === 0,
                onClick: wt(Ws, ["stop"])
              }, {
                default: Ot(() => [
                  p(C(je), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  x(
                    "span",
                    null,
                    Y(F.value ? dt.value : I.value),
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
                  ref: Q,
                  class: "translate-btn-group relative"
                },
                [
                  p(ee, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: c.$t("pin.translate"),
                    disabled: !l.value.trim() || V.value,
                    onClick: wt(Is, ["stop"])
                  }, {
                    default: Ot(() => [
                      V.value ? (R(), Tt(C(Zi), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })) : (R(), Tt(C(Do), {
                        key: 0,
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      })),
                      x(
                        "span",
                        null,
                        Y(c.$t("pin.translate")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(ee, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !l.value.trim() || V.value,
                    onClick: wt(Ls, ["stop"])
                  }, {
                    default: Ot(() => [
                      p(C(Yi), {
                        size: "17",
                        theme: "outline",
                        strokeWidth: 2.8
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  H(" 翻译引擎菜单 "),
                  B.value ? (R(), O(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: mt(q.value)
                    },
                    [
                      (R(!0), O(
                        Et,
                        null,
                        Kt(G.value, (m) => (R(), O("div", {
                          key: m.value,
                          class: ut(["menu-item", { active: tt.value === m.value }]),
                          onClick: ($) => Ps(m.value)
                        }, [
                          x(
                            "span",
                            ig,
                            Y(m.label),
                            1
                            /* TEXT */
                          ),
                          tt.value === m.value ? (R(), Tt(ae(C(Zn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : H("v-if", !0)
                        ], 10, ng))),
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
                  ref: at,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  p(ee, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: c.$t("pin.ocrLanguage"),
                    disabled: u.value,
                    onClick: wt(ki, ["stop"])
                  }, {
                    default: Ot(() => [
                      p(C(je), {
                        size: "22",
                        theme: "outline",
                        strokeWidth: 2.7
                      }),
                      x(
                        "span",
                        null,
                        Y(kt.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  p(ee, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: u.value,
                    onClick: wt(ki, ["stop"])
                  }, {
                    default: Ot(() => [
                      p(C(Yi), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  et.value ? (R(), O(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: mt(xt.value)
                    },
                    [
                      (R(!0), O(
                        Et,
                        null,
                        Kt(it.value, (m) => (R(), O("div", {
                          key: m.value,
                          class: ut(["menu-item", { active: nt.value === m.value }]),
                          onClick: ($) => As(m.value)
                        }, [
                          x(
                            "span",
                            sg,
                            Y(m.label),
                            1
                            /* TEXT */
                          ),
                          nt.value === m.value ? (R(), Tt(ae(C(Zn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : H("v-if", !0)
                        ], 10, og))),
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
              x("div", ag, [
                p(ee, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: c.$t("pin.recognizeAgain"),
                  disabled: u.value || !s.value,
                  onClick: wt(Ln, ["stop"])
                }, {
                  default: Ot(() => [
                    p(C(fl), {
                      size: "22",
                      theme: "outline",
                      strokeWidth: 2.7
                    }),
                    x(
                      "span",
                      null,
                      Y(c.$t("pin.recognizeAgain")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["title", "disabled"])
              ]),
              p(ee, {
                class: "ocr-action-btn",
                type: "text",
                title: c.$t("pin.saveAsText"),
                disabled: !l.value.trim(),
                onClick: wt(_s, ["stop"])
              }, {
                default: Ot(() => [
                  p(C(Ki), {
                    size: "22",
                    theme: "outline",
                    strokeWidth: 2.7
                  }),
                  x(
                    "span",
                    null,
                    Y(c.$t("pin.saveAsText")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["title", "disabled"]),
              g[4] || (g[4] = x(
                "span",
                { class: "ocr-action-divider" },
                null,
                -1
                /* HOISTED */
              )),
              p(ee, {
                class: "ocr-action-btn more",
                type: "text",
                title: c.$t("pin.more"),
                onClick: wt($s, ["stop"])
              }, {
                default: Ot(() => [
                  p(C(ll), {
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
        )) : H("v-if", !0),
        Pt.value ? (R(), O(
          "div",
          rg,
          Y(Math.round(st.value * 100)) + "% ",
          1
          /* TEXT */
        )) : H("v-if", !0),
        H(" 右键菜单 "),
        _.value ? (R(), O(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: mt(ws.value)
          },
          [
            x("div", {
              class: "menu-item",
              onClick: Ci
            }, [
              (R(), Tt(ae(ft.value ? C(Gi) : C(Xn)), {
                class: "menu-item-icon",
                size: "18",
                strokeWidth: 3
              })),
              x(
                "span",
                null,
                Y(ft.value ? c.$t("pin.togglePin") : c.$t("pin.pinWindow")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: _i
            }, [
              p(C(gl), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.resetZoom")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: Hs
            }, [
              p(C(Nn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.copyImage")),
                1
                /* TEXT */
              )
            ]),
            x("div", {
              class: "menu-item",
              onClick: js
            }, [
              p(C(Ki), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.saveImage")),
                1
                /* TEXT */
              )
            ]),
            r.value === "ocr" && l.value.trim() ? (R(), O("div", {
              key: 0,
              class: "menu-item",
              onClick: An
            }, [
              p(C(Nn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.copyText")),
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            g[5] || (g[5] = x(
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
              p(C(Gn), {
                class: "menu-item-icon",
                size: "18",
                theme: "outline",
                strokeWidth: 3
              }),
              x(
                "span",
                null,
                Y(c.$t("pin.closePin")),
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
}), cg = /* @__PURE__ */ bn(lg, [["__scopeId", "data-v-b8b84cd7"]]), hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cg
}, Symbol.toStringTag, { value: "Module" }));
async function ug(e) {
  return e.toDataURL("image/png");
}
function dg(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object")
      return null;
    const n = t, i = typeof n.text == "string" ? n.text : "";
    return i.trim() ? {
      text: i,
      x: Number(n.x || 0),
      y: Number(n.y || 0),
      width: Number(n.width || 0),
      height: Number(n.height || 0),
      fontSize: Number(n.fontSize || 0),
      lineHeight: Number(n.lineHeight || 0),
      angle: Number(n.angle || 0),
      confidence: Number(n.confidence || 0)
    } : null;
  }).filter((t) => !!t) : [];
}
async function gg(e) {
  const t = Date.now(), n = await ug(e);
  _t.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await b("recognize_text_from_image", {
      imageData: n,
      engine: "rapidocr",
      language: "auto"
    }), o = dg(i.blocks), s = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || o.map((r) => r.text).join(`
`), a = {
      blocks: o,
      full_text: s,
      text: s,
      language: typeof i.language == "string" && i.language || _o(s),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return _t.log("[RapidOCR] recognizeFromCanvas success", {
      durationMs: Date.now() - t,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw L.error("[OCR] RapidOCR recognizeFromCanvas failed", i), _t.log("[RapidOCR] recognizeFromCanvas failed", {
      durationMs: Date.now() - t,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
async function fg() {
  return Promise.resolve();
}
async function mg() {
  return Promise.resolve();
}
const pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: gg,
  terminateOcr: mg,
  warmupOcr: fg
}, Symbol.toStringTag, { value: "Module" }));
export {
  kg as activate
};
