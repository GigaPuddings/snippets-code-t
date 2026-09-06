var Sa = Object.defineProperty;
var Ca = (e, t, n) => t in e ? Sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var R = (e, t, n) => Ca(e, typeof t != "symbol" ? t + "" : t, n);
import { inject as ve, createVNode as m, defineComponent as Mt, ref as E, computed as D, watch as Qe, nextTick as ie, createElementBlock as $, openBlock as L, createCommentVNode as H, createElementVNode as x, Fragment as Vt, renderList as te, normalizeClass as at, createBlock as Ct, resolveDynamicComponent as we, unref as C, toDisplayString as F, normalizeStyle as ct, onMounted as tn, onUnmounted as si, withDirectives as Xe, withKeys as Vi, vModelText as Ma, getCurrentInstance as Le, readonly as _a, getCurrentScope as Ta, onScopeDispose as Ra, isRef as za, warn as Pa, provide as La, mergeProps as Aa, renderSlot as ae, Transition as ai, withCtx as Rt, createTextVNode as Ia, vShow as xn, shallowReactive as Da, withModifiers as xt, isVNode as Ze, render as kn } from "vue";
import { useI18n as Io } from "vue-i18n";
const Em = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screenshot",
    name: "Screenshot",
    component: () => Promise.resolve().then(() => ku)
  }), e.registerRoute({
    target: "window",
    path: "/pin",
    name: "Pin",
    component: () => Promise.resolve().then(() => Lm)
  });
};
function Ea(e, t, n, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(e) : i ? i.value : t.get(e);
}
function Oa(e, t, n, i, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var fn;
const Ut = "__TAURI_TO_IPC_KEY__";
function $a(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function k(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Wa(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Ba {
  get rid() {
    return Ea(this, fn, "f");
  }
  constructor(t) {
    fn.set(this, void 0), Oa(this, fn, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return k("plugin:resources|close", {
      rid: this.rid
    });
  }
}
fn = /* @__PURE__ */ new WeakMap();
class Ve {
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
    return new Ue(this.width * t, this.height * t);
  }
  [Ut]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ut]();
  }
}
class Ue {
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
    return new Ve(this.width / t, this.height / t);
  }
  [Ut]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ut]();
  }
}
class _e {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ve ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Ue ? this.size : this.size.toPhysical(t);
  }
  [Ut]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Ut]();
  }
}
class Do {
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
    return new ce(this.x * t, this.y * t);
  }
  [Ut]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ut]();
  }
}
class ce {
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
    return new Do(this.x / t, this.y / t);
  }
  [Ut]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ut]();
  }
}
class an {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Do ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof ce ? this.position : this.position.toPhysical(t);
  }
  [Ut]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Ut]();
  }
}
var Nt;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Nt || (Nt = {}));
async function Eo(e, t) {
  await k("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ge(e, t, n) {
  var i;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return k("plugin:event|listen", {
    event: e,
    target: o,
    handler: $a(t)
  }).then((s) => async () => Eo(e, s));
}
async function Na(e, t, n) {
  return Ge(e, (i) => {
    Eo(e, i.id), t(i);
  }, n);
}
async function Ha(e, t) {
  await k("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function ja(e, t, n) {
  await k("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
let Fa = class mn extends Ba {
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
    return k("plugin:image|new", {
      rgba: bn(t),
      width: n,
      height: i
    }).then((o) => new mn(o));
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
    return k("plugin:image|from_bytes", {
      bytes: bn(t)
    }).then((n) => new mn(n));
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
    return k("plugin:image|from_path", { path: t }).then((n) => new mn(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return k("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return k("plugin:image|size", { rid: this.rid });
  }
};
function bn(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Fa ? e.rid : e;
}
var Vn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Vn || (Vn = {}));
class Va {
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
var Ui;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ui || (Ui = {}));
function Ua() {
  return new en(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Wn() {
  return k("plugin:window|get_all_windows").then((e) => e.map((t) => new en(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Bn = ["tauri://created", "tauri://error"];
class en {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || k("plugin:window|create", {
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
    return (n = (await Wn()).find((i) => i.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ua();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Wn();
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
    for (const t of await Wn())
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
    } : Ge(t, n, {
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
    } : Na(t, n, {
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
    return Ha(t, n);
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
    return ja(t, n, i);
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
    return k("plugin:window|scale_factor", {
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
    return k("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new ce(t));
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
    return k("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new ce(t));
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
    return k("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new Ue(t));
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
    return k("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new Ue(t));
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
    return k("plugin:window|is_fullscreen", {
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
    return k("plugin:window|is_minimized", {
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
    return k("plugin:window|is_maximized", {
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
    return k("plugin:window|is_focused", {
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
    return k("plugin:window|is_decorated", {
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
    return k("plugin:window|is_resizable", {
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
    return k("plugin:window|is_maximizable", {
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
    return k("plugin:window|is_minimizable", {
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
    return k("plugin:window|is_closable", {
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
    return k("plugin:window|is_visible", {
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
    return k("plugin:window|title", {
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
    return k("plugin:window|theme", {
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
    return k("plugin:window|is_always_on_top", {
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
    return k("plugin:window|center", {
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
    return t && (t === Vn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), k("plugin:window|request_user_attention", {
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
    return k("plugin:window|set_resizable", {
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
    return k("plugin:window|set_enabled", {
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
    return k("plugin:window|is_enabled", {
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
    return k("plugin:window|set_maximizable", {
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
    return k("plugin:window|set_minimizable", {
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
    return k("plugin:window|set_closable", {
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
    return k("plugin:window|set_title", {
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
    return k("plugin:window|maximize", {
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
    return k("plugin:window|unmaximize", {
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
    return k("plugin:window|toggle_maximize", {
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
    return k("plugin:window|minimize", {
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
    return k("plugin:window|unminimize", {
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
    return k("plugin:window|show", {
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
    return k("plugin:window|hide", {
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
    return k("plugin:window|close", {
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
    return k("plugin:window|destroy", {
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
    return k("plugin:window|set_decorations", {
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
    return k("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return k("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return k("plugin:window|set_effects", {
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
    return k("plugin:window|set_always_on_top", {
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
    return k("plugin:window|set_always_on_bottom", {
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
    return k("plugin:window|set_content_protected", {
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
    return k("plugin:window|set_size", {
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
    return k("plugin:window|set_min_size", {
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
    return k("plugin:window|set_max_size", {
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
    function n(i) {
      return i ? { Logical: i } : null;
    }
    return k("plugin:window|set_size_constraints", {
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
    return k("plugin:window|set_position", {
      label: this.label,
      value: t instanceof an ? t : new an(t)
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
    return k("plugin:window|set_fullscreen", {
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
    return k("plugin:window|set_focus", {
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
    return k("plugin:window|set_icon", {
      label: this.label,
      value: bn(t)
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
    return k("plugin:window|set_skip_taskbar", {
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
    return k("plugin:window|set_cursor_grab", {
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
    return k("plugin:window|set_cursor_visible", {
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
    return k("plugin:window|set_cursor_icon", {
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
    return k("plugin:window|set_background_color", { color: t });
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
    return k("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof an ? t : new an(t)
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
    return k("plugin:window|set_ignore_cursor_events", {
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
    return k("plugin:window|start_dragging", {
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
    return k("plugin:window|start_resize_dragging", {
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
    return k("plugin:window|set_badge_count", {
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
    return k("plugin:window|set_badge_label", {
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
    return k("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? bn(t) : void 0
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
    return k("plugin:window|set_progress_bar", {
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
    return k("plugin:window|set_visible_on_all_workspaces", {
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
    return k("plugin:window|set_title_bar_style", {
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
    return k("plugin:window|set_theme", {
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
      n.payload = new Ue(n.payload), t(n);
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
      n.payload = new ce(n.payload), t(n);
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
      const i = new Va(n);
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
          position: new ce(a.payload.position)
        }
      });
    }), i = await this.listen(Nt.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new ce(a.payload.position)
        }
      });
    }), o = await this.listen(Nt.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new ce(a.payload.position)
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
var Yi;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Yi || (Yi = {}));
var Xi;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Xi || (Xi = {}));
var Zi;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Zi || (Zi = {}));
var z = /* @__PURE__ */ ((e) => (e.None = "none", e.Drawing = "drawing", e.Moving = "moving", e.ResizingNW = "resizing-nw", e.ResizingNE = "resizing-ne", e.ResizingSW = "resizing-sw", e.ResizingSE = "resizing-se", e.ResizingN = "resizing-n", e.ResizingS = "resizing-s", e.ResizingW = "resizing-w", e.ResizingE = "resizing-e", e.DrawingRect = "drawing-rect", e.DrawingEllipse = "drawing-ellipse", e.DrawingLine = "drawing-line", e.DrawingArrow = "drawing-arrow", e.DrawingPen = "drawing-pen", e.EditingAnnotation = "editing-annotation", e.MovingAnnotation = "moving-annotation", e.ResizingAnnotationNW = "resizing-annotation-nw", e.ResizingAnnotationSE = "resizing-annotation-se", e.DrawingText = "drawing-text", e.DrawingMarker = "drawing-marker", e.DrawingMosaic = "drawing-mosaic", e.ColorPicking = "color-picking", e.Pinning = "pinning", e))(z || {}), f = /* @__PURE__ */ ((e) => (e.Select = "select", e.Rectangle = "rectangle", e.Ellipse = "ellipse", e.Line = "line", e.Arrow = "arrow", e.Pen = "pen", e.Mosaic = "mosaic", e.Text = "text", e.Marker = "marker", e.ColorPicker = "color-picker", e.Ocr = "ocr", e.Pin = "pin", e.Translate = "translate", e))(f || {});
function Un(e, t, n) {
  return !Number.isFinite(e) || e <= 0 ? 0 : Math.min(e, Math.max(0, t) / 2, Math.max(0, n) / 2);
}
function Ya(e, t, n, i) {
  if (!i) return n;
  const o = n.x - t.x, s = n.y - t.y;
  if (e === f.Ellipse || e === f.Rectangle) {
    const a = Math.max(Math.abs(o), Math.abs(s));
    return {
      x: t.x + Math.sign(o || 1) * a,
      y: t.y + Math.sign(s || 1) * a
    };
  }
  if (e === f.Line || e === f.Arrow) {
    const a = Math.hypot(o, s), r = Math.PI / 4, l = Math.round(Math.atan2(s, o) / r) * r;
    return {
      x: t.x + Math.cos(l) * a,
      y: t.y + Math.sin(l) * a
    };
  }
  return n;
}
function bt(e, t) {
  const n = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(n * n + i * i);
}
function Gi(e, t) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
}
function Oo(e) {
  return {
    x: e.x + e.width / 2,
    y: e.y + e.height / 2
  };
}
function Xa(e, t) {
  return {
    x: Math.max(t.x, Math.min(e.x, t.x + t.width)),
    y: Math.max(t.y, Math.min(e.y, t.y + t.height))
  };
}
function Jt(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && !isNaN(e.x) && !isNaN(e.y) && isFinite(e.x) && isFinite(e.y);
}
function Te(e) {
  return e != null && typeof e.x == "number" && typeof e.y == "number" && typeof e.width == "number" && typeof e.height == "number" && !isNaN(e.x) && !isNaN(e.y) && !isNaN(e.width) && !isNaN(e.height) && isFinite(e.x) && isFinite(e.y) && isFinite(e.width) && isFinite(e.height) && e.width > 0 && e.height > 0;
}
class Za {
  constructor(t, n) {
    R(this, "canvas");
    R(this, "ctx");
    R(this, "coordinateTransform");
    this.canvas = t, this.ctx = t.getContext("2d"), this.coordinateTransform = n;
  }
  // 清空画布
  clear() {
    this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.restore();
  }
  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(t, n = 0) {
    if (!Te(t)) {
      console.warn("Invalid selection rect in drawMask:", t);
      return;
    }
    this.ctx.save();
    const i = this.canvas.width / (window.devicePixelRatio || 1), o = this.canvas.height / (window.devicePixelRatio || 1), s = Math.round(t.x), a = Math.round(t.y), r = Math.round(t.width), l = Math.round(t.height), c = Un(n, r, l);
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)", this.ctx.beginPath(), this.ctx.rect(0, 0, i, o), this.ctx.roundRect(s, a, r, l, c), this.ctx.fill("evenodd"), this.ctx.restore();
  }
  // 绘制选择框
  drawSelectionBox(t, n = !0, i = 0) {
    const { x: o, y: s, width: a, height: r } = t;
    this.ctx.save();
    const l = Math.round(o) + 0.5, c = Math.round(s) + 0.5, u = Math.max(0, Math.round(a) - 1), d = Math.max(0, Math.round(r) - 1), y = Un(i, u, d);
    this.ctx.lineWidth = 1, this.ctx.setLineDash([5, 4]), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.62)", this.ctx.beginPath(), this.ctx.roundRect(
      l + 1,
      c + 1,
      u,
      d,
      y
    ), this.ctx.stroke(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.beginPath(), this.ctx.roundRect(l, c, u, d, y), this.ctx.stroke(), n && this.drawHandles(t), this.ctx.restore();
  }
  // 绘制控制点
  drawHandles(t) {
    const { x: n, y: i, width: o, height: s } = t, a = Oo(t);
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
      const c = Math.round(l.x) - l.width / 2, u = Math.round(l.y) - l.height / 2, d = Math.min(l.width, l.height) / 2;
      this.ctx.beginPath(), this.ctx.roundRect(
        c + 1,
        u + 1,
        l.width,
        l.height,
        d
      ), this.ctx.fillStyle = "rgba(0, 0, 0, 0.36)", this.ctx.fill(), this.ctx.beginPath(), this.ctx.roundRect(c, u, l.width, l.height, d), this.ctx.fillStyle = "#ffffff", this.ctx.fill();
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
      bounds: t || {
        x: 0,
        y: 0,
        width: this.canvas.width,
        height: this.canvas.height
      }
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
    const {
      mousePosition: i,
      colorInfo: o,
      showFormat: s,
      previewImage: a,
      zoomFactor: r,
      isCopied: l
    } = t, c = 156, u = 188, d = 18;
    let y = i.x + d, v = i.y + d;
    y + c > n.x + n.width && (y = i.x - c - d), v + u > n.y + n.height && (v = i.y - u - d), y < n.x && (y = n.x + d), v < n.y && (v = n.y + d), this.ctx.save(), this.ctx.fillStyle = "rgba(250, 250, 250, 0.96)", this.ctx.strokeStyle = "rgba(0, 0, 0, 0.14)", this.ctx.lineWidth = 1, this.ctx.shadowColor = "rgba(0, 0, 0, 0.24)", this.ctx.shadowBlur = 18, this.ctx.shadowOffsetY = 8, this.ctx.beginPath(), this.ctx.roundRect(y, v, c, u, 10), this.ctx.fill(), this.ctx.stroke(), this.ctx.shadowColor = "transparent", this.ctx.shadowBlur = 0, this.ctx.shadowOffsetY = 0;
    const S = 108, g = y + (c - S) / 2, w = v + 16;
    this.ctx.fillStyle = "#f3f4f6", this.ctx.fillRect(g, w, S, S), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.26)", this.ctx.lineWidth = 1, this.ctx.strokeRect(g, w, S, S);
    const P = a ? a.width : r, I = S / P;
    a && (this.ctx.imageSmoothingEnabled = !1, this.ctx.drawImage(
      a,
      0,
      0,
      a.width,
      a.height,
      g,
      w,
      S,
      S
    ), this.ctx.imageSmoothingEnabled = !0), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)", this.ctx.lineWidth = 1;
    for (let Y = 1; Y < P; Y++) {
      const K = g + Y * I;
      this.ctx.moveTo(K, w), this.ctx.lineTo(K, w + S);
      const q = w + Y * I;
      this.ctx.moveTo(g, q), this.ctx.lineTo(g + S, q);
    }
    this.ctx.stroke(), this.ctx.beginPath(), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)";
    for (let Y = 1; Y < P; Y++) {
      const K = g + Y * I + 0.5;
      this.ctx.moveTo(K, w), this.ctx.lineTo(K, w + S);
      const q = w + Y * I + 0.5;
      this.ctx.moveTo(g, q), this.ctx.lineTo(g + S, q);
    }
    this.ctx.stroke();
    const T = Math.floor(P / 2), W = g + T * I, U = w + T * I;
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.18)", this.ctx.fillRect(W, U, I, I), this.ctx.setLineDash([]), this.ctx.strokeStyle = "rgba(255, 255, 255, 0.96)", this.ctx.lineWidth = 4, this.ctx.strokeRect(W - 1, U - 1, I + 2, I + 2), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.9)", this.ctx.lineWidth = 2, this.ctx.strokeRect(W, U, I, I), this.ctx.fillStyle = "#333", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
    let X = w + S + 22;
    if (o) {
      this.ctx.fillStyle = o.hex, this.ctx.fillRect(y + 16, X - 14, 20, 20), this.ctx.strokeStyle = "rgba(0, 0, 0, 0.22)", this.ctx.strokeRect(y + 16, X - 14, 20, 20), this.ctx.fillStyle = "#111827", this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace';
      const Y = s === "hex" ? o.hex : `${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}`;
      this.ctx.fillText(Y, y + 44, X), X += 19;
    }
    this.ctx.fillStyle = "#6b7280", this.ctx.font = "12px Arial", this.ctx.fillText(
      `X: ${Math.round(i.x)}, Y: ${Math.round(i.y)}`,
      y + 16,
      X
    ), X += 17, this.ctx.font = "12px Arial";
    const V = l ? "已复制!" : "Q:复制 Shift:切换";
    this.ctx.fillStyle = l ? "#059669" : "#8b8f98", this.ctx.fillText(V, y + 16, X), this.ctx.restore();
  }
}
class Ga {
  // 物理尺寸
  constructor(t) {
    R(this, "scale");
    R(this, "canvasRect");
    R(this, "canvasSize");
    // 逻辑尺寸
    R(this, "physicalSize");
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
    return Jt(t) ? {
      x: t.x * this.scale,
      y: t.y * this.scale
    } : (console.warn("Invalid point in logicalToPhysical:", t), { x: 0, y: 0 });
  }
  // 物理像素转逻辑像素
  physicalToLogical(t) {
    return Jt(t) ? {
      x: t.x / this.scale,
      y: t.y / this.scale
    } : (console.warn("Invalid point in physicalToLogical:", t), { x: 0, y: 0 });
  }
  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(t, n) {
    return !Jt(t) || !Te(n) ? (console.warn("Invalid point or bounds in logicalToRelative"), { x: 0, y: 0 }) : {
      x: t.x - n.x,
      y: t.y - n.y
    };
  }
  // 相对坐标转逻辑坐标
  relativeToLogical(t, n) {
    return !Jt(t) || !Te(n) ? (console.warn("Invalid point or bounds in relativeToLogical"), { x: 0, y: 0 }) : {
      x: t.x + n.x,
      y: t.y + n.y
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
    if (!Jt(t))
      return console.warn("Invalid point in clampToCanvas:", t), { x: 0, y: 0 };
    const n = {
      x: 0,
      y: 0,
      width: this.canvasSize.width,
      height: this.canvasSize.height
    };
    return Xa(t, n);
  }
  // 限制矩形在画布范围内
  clampRectToCanvas(t) {
    if (!Te(t))
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
    return bt(t, n);
  }
  // 检查点是否在矩形内（使用工具函数）
  isPointInRect(t, n, i = 0) {
    if (!Jt(t) || !Te(n))
      return !1;
    if (i === 0)
      return Gi(t, n);
    const o = {
      x: n.x - i,
      y: n.y - i,
      width: n.width + i * 2,
      height: n.height + i * 2
    };
    return Gi(t, o);
  }
  // 检查点是否在线段附近
  isPointNearLine(t, n, i, o = 8) {
    if (!Jt(t) || !Jt(n) || !Jt(i))
      return !1;
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return bt(t, n) <= o;
    const d = c / u;
    let y;
    return d < 0 ? y = n : d > 1 ? y = i : y = {
      x: n.x + d * r,
      y: n.y + d * l
    }, bt(t, y) <= o;
  }
}
class Ka {
  constructor(t, n) {
    R(this, "coordinateSystem");
    R(this, "canvas");
    R(this, "isDrawing", !1);
    R(this, "currentOperation", z.None);
    R(this, "startPoint", { x: 0, y: 0 });
    R(this, "lastMousePos", { x: 0, y: 0 });
    R(this, "preventDefault", (t) => {
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
    if (n !== f.Select)
      return i ? this.coordinateSystem.isPointInRect(
        t,
        i
      ) ? this.getDrawingOperationType(n) : z.None : z.Drawing;
    if (s) {
      if (s.getData().type === f.Mosaic)
        return z.None;
      const a = this.getAnnotationControlPointOperation(
        t,
        s
      );
      return a !== z.None ? a : z.MovingAnnotation;
    }
    return i ? this.getSelectionOperationType(
      t,
      i,
      o.length > 0
    ) : z.Drawing;
  }
  // 获取绘图操作类型
  getDrawingOperationType(t) {
    return {
      [f.Rectangle]: z.DrawingRect,
      [f.Ellipse]: z.DrawingEllipse,
      [f.Line]: z.DrawingLine,
      [f.Arrow]: z.DrawingArrow,
      [f.Pen]: z.DrawingPen,
      [f.Text]: z.DrawingText,
      [f.Marker]: z.DrawingMarker,
      [f.Mosaic]: z.DrawingMosaic,
      [f.ColorPicker]: z.ColorPicking,
      [f.Ocr]: z.None,
      [f.Pin]: z.Pinning,
      [f.Translate]: z.None,
      [f.Select]: z.None
    }[t] || z.Drawing;
  }
  // 获取选择框操作类型
  getSelectionOperationType(t, n, i) {
    const { x: o, y: s, width: a, height: r } = n, l = 12;
    if (i)
      return z.None;
    const c = Oo(n);
    return this.isInHandle(t, { x: o, y: s }, l) ? z.ResizingNW : this.isInHandle(t, { x: o + a, y: s }, l) ? z.ResizingNE : this.isInHandle(t, { x: o, y: s + r }, l) ? z.ResizingSW : this.isInHandle(t, { x: o + a, y: s + r }, l) ? z.ResizingSE : this.isInHandle(t, { x: c.x, y: s }, l) ? z.ResizingN : this.isInHandle(t, { x: c.x, y: s + r }, l) ? z.ResizingS : this.isInHandle(t, { x: o, y: c.y }, l) ? z.ResizingW : this.isInHandle(t, { x: o + a, y: c.y }, l) ? z.ResizingE : this.coordinateSystem.isPointInRect(t, n) ? z.Moving : z.Drawing;
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
    if (!Jt(t))
      return z.None;
    const i = n.getData();
    if (i.type === f.Mosaic || i.type === f.Text || i.type === f.Marker)
      return z.None;
    if ([
      f.Rectangle,
      f.Ellipse,
      f.Line,
      f.Arrow
    ].includes(i.type) && i.points.length >= 2) {
      const o = i.points[0], s = i.points[i.points.length - 1], a = 8, r = 6, l = bt(t, o), c = bt(t, s);
      if (l <= a + r)
        return z.ResizingAnnotationNW;
      if (c <= a + r)
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
class de {
  constructor(t) {
    R(this, "data");
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
class qa extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Rectangle,
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
    }, l = (a.x - s.x) * i, c = (a.y - s.y) * i;
    n.save(), this.applyOpacity(n), n.strokeStyle = this.data.style.color, n.lineWidth = this.data.style.lineWidth * i, n.lineCap = "round", n.lineJoin = "round", n.setLineDash([]), n.strokeRect(r.x, r.y, l, c), n.restore();
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
      n.fillRect(
        o.x - i / 2,
        o.y - i / 2,
        i,
        i
      ), n.strokeRect(
        o.x - i / 2,
        o.y - i / 2,
        i,
        i
      );
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
      if (bt(t, o) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class Ja extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Ellipse,
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
class Qa extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Line,
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
      t.fillRect(
        i.x - 6 / 2,
        i.y - 6 / 2,
        6,
        6
      ), t.strokeRect(
        i.x - 6 / 2,
        i.y - 6 / 2,
        6,
        6
      );
    }), t.restore();
  }
  isPointNearLine(t, n, i, o) {
    const s = i.x - n.x, a = i.y - n.y, r = s * s + a * a;
    if (r === 0)
      return bt(t, n) <= o;
    const l = Math.max(
      0,
      Math.min(
        1,
        ((t.x - n.x) * s + (t.y - n.y) * a) / r
      )
    ), c = {
      x: n.x + l * s,
      y: n.y + l * a
    };
    return bt(t, c) <= o;
  }
}
class tr extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Arrow,
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
    const l = Math.atan2(s.y - o.y, s.x - o.x), c = 15 * n, u = Math.PI / 6;
    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l - u),
      r.y - c * Math.sin(l - u)
    ), t.moveTo(r.x, r.y), t.lineTo(
      r.x - c * Math.cos(l + u),
      r.y - c * Math.sin(l + u)
    ), t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2) return !1;
    const i = this.data.points[0], o = this.data.points[this.data.points.length - 1];
    return this.isPointNearLine(t, i, o, n);
  }
  isPointNearLine(t, n, i, o) {
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return bt(t, n) <= o;
    const d = c / u;
    let y;
    return d < 0 ? y = n : d > 1 ? y = i : y = {
      x: n.x + d * r,
      y: n.y + d * l
    }, bt(t, y) <= o;
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
      n.fillRect(
        o.x - i / 2,
        o.y - i / 2,
        i,
        i
      ), n.strokeRect(
        o.x - i / 2,
        o.y - i / 2,
        i,
        i
      );
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
      if (bt(t, o) <= n)
        return i;
    }
    return null;
  }
  // 更新控制点
  updateControlPoint(t, n) {
    t >= 0 && t < this.data.points.length && (this.data.points[t] = n);
  }
}
class er extends de {
  constructor(t, n) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Pen,
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
      const n = this.data.points[this.data.points.length - 1], i = bt(t, n);
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
      const l = this.data.points[r], c = l.x * n - i.x, u = l.y * n - i.y;
      t.lineTo(c, u);
    }
    t.stroke(), t.restore();
  }
  hitTest(t, n = 8) {
    if (this.data.points.length < 2)
      return this.data.points.length === 1 ? bt(t, this.data.points[0]) <= n : !1;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(t, o, s, n))
        return !0;
    }
    return !1;
  }
  isPointNearLine(t, n, i, o) {
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = s * r + a * l, u = r * r + l * l;
    if (u === 0)
      return bt(t, n) <= o;
    const d = c / u;
    let y;
    return d < 0 ? y = n : d > 1 ? y = i : y = {
      x: n.x + d * r,
      y: n.y + d * l
    }, bt(t, y) <= o;
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
const oe = "sans-serif", Re = (e) => ({
  x: e.x + 4,
  y: e.y - 8
});
class nr extends de {
  constructor(t, n, i, o = 16) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Text,
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
    t.save(), this.applyOpacity(t), t.font = `${s}px ${oe}`, t.fillStyle = this.data.style.color, t.textAlign = "left", t.textBaseline = "top";
    const r = Re(a), l = r.x * n - i.x, c = r.y * n - i.y;
    t.fillText(this.data.text, l, c), t.restore();
  }
  hitTest(t, n = 8) {
    if (!this.data.text || this.data.points.length === 0) return !1;
    const i = this.data.points[0], o = this.data.fontSize || 16, a = document.createElement("canvas").getContext("2d");
    if (!a) return !1;
    a.font = `${o}px ${oe}`;
    const l = a.measureText(this.data.text).width, { x: c, y: u } = Re(i);
    return t.x >= c - n && t.x <= c + l + n && t.y >= u - n && t.y <= u + o + n;
  }
  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null;
    const t = this.data.points[0], n = this.data.fontSize || 16, o = document.createElement("canvas").getContext("2d");
    if (!o) return null;
    o.font = `${n}px ${oe}`;
    const a = o.measureText(this.data.text).width, { x: r, y: l } = Re(t);
    return {
      x: r,
      y: l,
      width: a,
      height: n
    };
  }
  drawSelection(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Re(s), l = r.x * i - o.x, c = r.y * i - o.y;
    n.save(), n.font = `${a}px ${oe}`;
    const d = n.measureText(this.data.text).width;
    n.setLineDash([2, 2]), n.strokeStyle = "#3b82f6", n.lineWidth = 1, n.strokeRect(l, c, d, a), n.restore();
  }
  drawHover(t) {
    if (!this.data.text || this.data.points.length === 0) return;
    const { ctx: n, scale: i, offset: o } = t, s = this.data.points[0], a = (this.data.fontSize || 16) * i, r = Re(s), l = r.x * i - o.x, c = r.y * i - o.y;
    n.save(), n.font = `${a}px ${oe}`;
    const d = n.measureText(this.data.text).width;
    n.strokeStyle = "#3b82f6", n.lineWidth = 2, n.setLineDash([4, 4]), n.strokeRect(l, c, d, a), n.restore();
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
const Qt = class Qt extends de {
  constructor(t, n, i = 8) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Mosaic,
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
      const n = this.data.points[this.data.points.length - 1], i = bt(t, n);
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
    this.renderRealMosaic(
      n,
      window.devicePixelRatio || 1,
      { x: 0, y: 0 },
      i
    );
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
    Qt.helperCanvas || (Qt.helperCanvas = document.createElement("canvas"), Qt.helperCtx = Qt.helperCanvas.getContext(
      "2d",
      { willReadFrequently: !0 }
    ));
    const s = Qt.helperCanvas, a = Qt.helperCtx, r = n || 1, l = this.data.mosaicSize || 8, c = Math.max(Math.round(l * r), 4), u = Math.max(l * 3, 24), d = this.getBounds();
    if (!d) return;
    const y = u, v = Math.floor(d.x - y), S = Math.floor(d.y - y), g = Math.ceil(d.width + y * 2), w = Math.ceil(d.height + y * 2);
    if (g <= 0 || w <= 0) return;
    const P = Math.floor(v * r - i.x), I = Math.floor(S * r - i.y), T = Math.ceil(g * r), W = Math.ceil(w * r), U = t.canvas.width, X = t.canvas.height, V = Math.max(0, P), Y = Math.max(0, I), K = Math.min(T, U - V), q = Math.min(W, X - Y);
    if (K <= 0 || q <= 0) return;
    let J;
    try {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), J = t.getImageData(V, Y, K, q), t.restore();
    } catch {
      return;
    }
    const tt = J.data, st = V % c, vt = Y % c;
    for (let nt = -vt; nt < q; nt += c)
      for (let j = -st; j < K; j += c) {
        const it = Math.max(0, j), pt = Math.max(0, nt), rt = Math.min(K, j + c), dt = Math.min(q, nt + c);
        if (it >= rt || pt >= dt) continue;
        let kt = 0, O = 0, zt = 0, N = 0;
        for (let _t = pt; _t < dt; _t++)
          for (let gt = it; gt < rt; gt++) {
            const Pt = (_t * K + gt) * 4;
            kt += tt[Pt], O += tt[Pt + 1], zt += tt[Pt + 2], N++;
          }
        if (N > 0) {
          kt = Math.round(kt / N / 8) * 8, O = Math.round(O / N / 8) * 8, zt = Math.round(zt / N / 8) * 8;
          for (let gt = pt; gt < dt; gt++)
            for (let Pt = it; Pt < rt; Pt++) {
              const Bt = (gt * K + Pt) * 4;
              tt[Bt] = kt, tt[Bt + 1] = O, tt[Bt + 2] = zt;
            }
        }
      }
    s.width = K, s.height = q, a.putImageData(J, 0, 0), a.globalCompositeOperation = "destination-in", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = u * r, a.fillStyle = "#000000", a.strokeStyle = "#000000", this.drawPathPhysical(a, r, i, V, Y), t.save(), this.applyOpacity(t), t.setTransform(1, 0, 0, 1, 0, 0), o && (t.beginPath(), t.rect(
      o.x * r - i.x,
      o.y * r - i.y,
      o.width * r,
      o.height * r
    ), t.clip()), t.drawImage(s, V, Y), t.restore();
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
        const d = this.data.points[u], y = this.data.points[u + 1], v = (a(d) + a(y)) / 2, S = (r(d) + r(y)) / 2;
        t.quadraticCurveTo(a(d), r(d), v, S);
      }
      const c = this.data.points[this.data.points.length - 1];
      t.lineTo(a(c), r(c)), t.stroke();
    }
  }
  hitTest(t, n = 8) {
    if (this.data.points.length === 0) return !1;
    if (this.data.points.length === 1)
      return bt(t, this.data.points[0]) <= (this.data.mosaicSize || 8) * 1.5 + n;
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const o = this.data.points[i], s = this.data.points[i + 1];
      if (this.isPointNearLine(
        t,
        o,
        s,
        (this.data.mosaicSize || 8) * 1.5 + n
      ))
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
    const s = t.x - n.x, a = t.y - n.y, r = i.x - n.x, l = i.y - n.y, c = s * r + a * l, u = r * r + l * l;
    let d = -1;
    u !== 0 && (d = c / u);
    let y, v;
    d < 0 ? (y = n.x, v = n.y) : d > 1 ? (y = i.x, v = i.y) : (y = n.x + d * r, v = n.y + d * l);
    const S = t.x - y, g = t.y - v;
    return S * S + g * g <= o * o;
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
R(Qt, "helperCanvas", null), R(Qt, "helperCtx", null);
let Yn = Qt;
const he = 16, pn = (e = he) => Math.max(12, Math.round(e * 0.75)), Xn = (e, t = he) => {
  const n = pn(t);
  return {
    x: e.x + n + 12,
    y: e.y - t / 2
  };
};
class ir extends de {
  constructor(t, n, i, o, s = he) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: f.Marker,
      points: [t],
      style: o,
      text: i,
      fontSize: s,
      markerNumber: n
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
  drawMarker(t, n, i) {
    const o = this.data.points[0];
    if (!o) return;
    const s = (this.data.fontSize || he) * n, a = pn(this.data.fontSize || he) * n, r = o.x * n - i.x, l = o.y * n - i.y, c = this.data.text?.trim() || "";
    if (t.save(), this.applyOpacity(t), t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]), this.drawMarkerFace(t, r, l, a, s, n), c) {
      const u = Xn(
        o,
        this.data.fontSize || he
      ), d = u.x * n - i.x, y = u.y * n - i.y, v = y + s + 3 * n;
      t.font = `${s}px ${oe}`, t.textAlign = "left", t.textBaseline = "top", t.fillStyle = this.data.style.color, t.fillText(c, d, y);
      const S = t.measureText(c).width;
      t.strokeStyle = this.data.style.color, t.lineWidth = Math.max(2, this.data.style.lineWidth * n * 0.75), t.beginPath(), t.moveTo(r + a * 0.72, l + a * 0.72), t.lineTo(d - 5 * n, v), t.lineTo(d + S + 3 * n, v), t.stroke();
    }
    t.restore();
  }
  drawMarkerFace(t, n, i, o, s, a) {
    t.beginPath(), t.arc(n, i, o, 0, Math.PI * 2), t.fillStyle = this.data.style.color, t.fill(), t.strokeStyle = "rgba(255, 255, 255, 0.92)", t.lineWidth = Math.max(1, a), t.stroke(), t.fillStyle = "#ffffff", t.font = `600 ${s}px ${oe}`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(
      String(this.data.markerNumber || 1),
      n,
      i + a * 0.5
    );
  }
  hitTest(t, n = 8) {
    const i = this.data.points[0];
    if (!i) return !1;
    const o = pn(this.data.fontSize || he);
    if (Math.hypot(t.x - i.x, t.y - i.y) <= o + n) return !0;
    const a = this.getBounds();
    return !!a && t.x >= a.x - n && t.x <= a.x + a.width + n && t.y >= a.y - n && t.y <= a.y + a.height + n;
  }
  getBounds() {
    const t = this.data.points[0];
    if (!t) return null;
    const n = this.data.fontSize || he, i = pn(n), o = this.data.text?.trim() || "";
    let s = t.x + i;
    if (o) {
      const r = document.createElement("canvas").getContext("2d");
      r && (r.font = `${n}px ${oe}`, s = Xn(t, n).x + r.measureText(o).width + 4);
    }
    return {
      x: t.x - i,
      y: t.y - i,
      width: s - (t.x - i),
      height: Math.max(i * 2, n + i)
    };
  }
  drawSelection(t) {
    this.drawStateOutline(t, "#3b82f6", [3, 3], 1);
  }
  drawHover(t) {
    this.drawStateOutline(t, "#3b82f6", [4, 4], 2);
  }
  drawStateOutline(t, n, i, o) {
    const s = this.getBounds();
    s && (t.ctx.save(), t.ctx.strokeStyle = n, t.ctx.lineWidth = o, t.ctx.setLineDash(i), t.ctx.strokeRect(s.x, s.y, s.width, s.height), t.ctx.restore());
  }
}
class rn {
  static createAnnotation(t, n, i, o = {}) {
    switch (t) {
      case f.Rectangle:
        return new qa(n, i);
      case f.Ellipse:
        return new Ja(n, i);
      case f.Line:
        return new Qa(n, i);
      case f.Arrow:
        return new tr(n, i);
      case f.Pen:
        return new er(n, i);
      case f.Text:
        return new nr(
          n,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case f.Marker:
        return new ir(
          n,
          o.markerNumber || 1,
          o.text || "",
          i,
          o.fontSize || 16
        );
      case f.Mosaic:
        return new Yn(n, i, o.mosaicSize || 8);
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
const ye = class ye {
  constructor() {
    R(this, "pool", []);
    R(this, "maxPoolSize", 5);
    // 最大池大小
    R(this, "inUse", /* @__PURE__ */ new Set());
  }
  static getInstance() {
    return ye.instance || (ye.instance = new ye()), ye.instance;
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
R(ye, "instance");
let Zn = ye;
async function or(e, t) {
  return await k("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
const sr = "snippets-code:developer-mode", $o = "snippets-code:frontend-diagnostics", ar = 240, Ne = "[REDACTED]", yn = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Ne}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Ne}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Ne
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Ne}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Ne}`
), ri = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return yn(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return yn(
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
    return yn(String(e));
  }
}, rr = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, lr = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem($o) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, li = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(sr) === "true";
  } catch {
    return !1;
  }
}, cr = (e, t, n) => {
  if (!li() || typeof localStorage > "u") return;
  const i = lr();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: rr(),
    message: yn(t),
    data: ri(n)
  });
  try {
    localStorage.setItem(
      $o,
      JSON.stringify(i.slice(-ar))
    );
  } catch {
  }
}, hr = () => li(), ur = (e) => e === "error" || li(), ln = (e, t, n) => {
  cr(e, t, n), ur(e) && k("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : ri(n)
  }).catch(() => {
  });
}, A = {
  info: (e, t, ...n) => {
    ln("info", e, t);
  },
  error: (e, t) => {
    ln("error", e, t);
  },
  warn: (e, t) => {
    ln("warn", e, t);
  },
  debug: (e, t) => {
    hr() && ln("debug", e, t);
  }
}, wt = {
  log: (e, t) => {
    k("append_ocr_diagnostic_log", {
      message: e,
      data: t === void 0 ? null : ri(t)
    }).catch(() => {
    });
  }
}, dr = "resources/transformers/transformers.min.js", gr = [
  "translation-offline-runtime",
  "translation"
], fr = "https://huggingface.co/", mr = "{model}/resolve/{revision}/", pr = "/__snippets_code_disabled_transformers_local_models__/", Wo = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
], yr = [
  dr,
  ...Wo.map(
    (e) => `resources/transformers/${e}`
  )
];
let He = null;
async function Bo() {
  const e = [];
  for (const t of gr) {
    const n = await Promise.all(
      yr.map(
        (i) => or(t, i)
      )
    );
    n.every(
      (i) => !!i
    ) && e.push({ pluginId: t, runtimePath: n[0] });
  }
  return e;
}
const wr = (e) => {
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
}, No = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, i = wr(n);
  return i.index >= 0 ? n.slice(0, i.index + i.length) : n;
}, Ho = (e) => {
  const t = No(e);
  return Object.fromEntries(
    Wo.map((n) => [
      n,
      `${t}${n}`
    ])
  );
}, vr = (e, t) => {
  var n, i;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = fr, e.remotePathTemplate = mr, e.allowLocalModels = !1, e.localModelPath = pr, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (i = e.backends.onnx).wasm ?? (i.wasm = {}), e.backends.onnx.wasm.wasmPaths = Ho(t), e.backends.onnx.wasm.numThreads = 1);
};
async function jo() {
  return He || (He = (async () => {
    const e = await Bo();
    let t = null;
    for (const { pluginId: n, runtimePath: i } of e) {
      const o = Wa(i);
      try {
        const s = await import(
          /* @vite-ignore */
          o
        );
        return vr(s.env, o), A.info(
          `[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`,
          {
            wasmPaths: s.env.backends?.onnx?.wasm?.wasmPaths,
            numThreads: s.env.backends?.onnx?.wasm?.numThreads,
            remoteHost: s.env.remoteHost,
            remotePathTemplate: s.env.remotePathTemplate,
            allowLocalModels: s.env.allowLocalModels,
            localModelPath: s.env.localModelPath
          }
        ), s;
      } catch (s) {
        t = s, A.warn(
          `[离线翻译] 无法加载插件运行时，尝试下一个候选包: ${n}`,
          s
        );
      }
    }
    throw t || new Error(
      "离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包"
    );
  })().catch((e) => {
    throw He = null, e;
  }), He);
}
async function xr() {
  await jo();
}
let se = null, Ye = !1, ze = null, xe = null, Gn = null;
const kr = "Xenova/opus-mt-en-zh", br = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Sr = 3e5;
function Cr(e) {
  Gn = e;
}
function Mr() {
  return br;
}
function _r(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (i, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function Fo() {
  return se || ze || (Ye = !0, A.info("[离线翻译] 正在加载翻译模型..."), ze = (async () => {
    try {
      const { pipeline: e } = await jo();
      let t = "";
      const n = e("translation", kr, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (o) => {
          o.status === "done" && o.file && o.file !== t && (t = o.file, A.info(`[离线翻译] 已加载: ${o.file}`)), Gn && Gn({
            status: o.status,
            progress: o.progress,
            file: o.file
          });
        }
      });
      return se = await _r(
        n,
        Sr,
        "模型加载超时，请检查网络连接后重试"
      ), A.info("[离线翻译] 翻译模型加载完成"), Ye = !1, se;
    } catch (e) {
      throw Ye = !1, ze = null, A.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), ze);
}
async function Vo(e) {
  if (!e?.trim()) return e;
  xe = new AbortController();
  const t = xe.signal;
  try {
    const n = await Fo();
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
    throw n instanceof Error && n.message === "翻译已取消" ? (A.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (A.warn("[离线翻译] 运行时资源未安装"), n) : (A.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    xe = null;
  }
}
function Tr() {
  xe && (xe.abort(), xe = null, A.info("[离线翻译] 已发送取消信号"));
}
function Rr() {
  return xe !== null;
}
async function Uo() {
  await Fo();
}
function zr() {
  return se !== null;
}
function Pr() {
  return Ye;
}
async function ci() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      A.info(
        `[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`
      );
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const o = await (await caches.open(n)).keys();
          if (A.info(`[离线翻译] Cache "${n}" 包含 ${o.length} 个文件`), o.some(
            (a) => a.url.includes("opus-mt-en-zh") || a.url.includes("Xenova")
          )) {
            const a = o.some((r) => r.url.includes(".onnx"));
            if (A.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${a}`), a)
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
    A.info(
      `[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`
    );
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return A.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return A.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return A.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function Lr() {
  return (await ci()).isCached;
}
function Ar() {
  return se !== null;
}
async function Ir() {
  if (se)
    try {
      await se.dispose?.();
    } catch {
    }
  se = null, ze = null, Ye = !1, A.info("[离线翻译] 翻译器已释放");
}
async function Dr() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), A.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), A.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    A.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw A.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canUseOfflineTranslation: Ar,
  cancelOfflineTranslation: Tr,
  clearModelCache: Dr,
  disposeOfflineTranslator: Ir,
  getModelCacheInfo: ci,
  getModelFiles: Mr,
  getOfflineRuntimeCandidates: Bo,
  getRuntimeBaseUrl: No,
  getRuntimeWasmPaths: Ho,
  isModelCached: Lr,
  isOfflineTranslatorInitializing: Pr,
  isOfflineTranslatorReady: zr,
  isTranslationInProgress: Rr,
  setProgressCallback: Cr,
  translateOffline: Vo,
  verifyOfflineTranslatorRuntime: xr,
  warmupOfflineTranslator: Uo
}, Symbol.toStringTag, { value: "Module" }));
class pe {
  /**
   * 懒加载 OCR 模块
   */
  static async loadOCR() {
    const t = "ocr";
    if (this.loadedModules.has(t))
      return this.loadedModules.get(t);
    if (this.loadingPromises.has(t))
      return this.loadingPromises.get(t);
    const n = Promise.resolve().then(() => _f).then(
      (i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i)
    );
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
    const n = Promise.resolve(Er).then((i) => (this.loadedModules.set(t, i), this.loadingPromises.delete(t), i));
    return this.loadingPromises.set(t, n), n;
  }
  /**
   * 预加载模块（在空闲时）
   */
  static preloadModules() {
    "requestIdleCallback" in window ? requestIdleCallback(
      () => {
        this.loadOCR().catch(() => {
        }), this.loadOfflineTranslator().catch(() => {
        });
      },
      { timeout: 2e3 }
    ) : setTimeout(() => {
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
R(pe, "loadedModules", /* @__PURE__ */ new Map()), R(pe, "loadingPromises", /* @__PURE__ */ new Map());
const Or = (e, t) => e.capabilities.includes(t);
class $r {
  constructor() {
    R(this, "providers", /* @__PURE__ */ new Map());
  }
  register(t) {
    const n = t.id.trim();
    if (!n)
      throw new Error("AI provider 缺少稳定 id");
    if (t.capabilities.length === 0)
      throw new Error(`AI provider ${n} 缺少 capability`);
    const i = this.providers.get(n);
    if (i && i.pluginId !== t.pluginId)
      throw new Error(
        `AI provider ${n} 已由 ${i.pluginId ?? "core"} 注册`
      );
    this.providers.set(n, {
      ...t,
      id: n
    });
  }
  unregister(t) {
    return this.providers.delete(t);
  }
  unregisterPlugin(t) {
    for (const [n, i] of Array.from(this.providers.entries()))
      i.pluginId === t && this.providers.delete(n);
  }
  clear() {
    this.providers.clear();
  }
  get(t) {
    return this.providers.get(t);
  }
  require(t) {
    const n = this.get(t);
    if (!n)
      throw new Error(`AI provider ${t} 未注册`);
    return n;
  }
  list(t = {}) {
    return Array.from(this.providers.values()).filter((n) => !(t.capability && !Or(n, t.capability) || n.pluginId && t.isPluginEnabled && !t.isPluginEnabled(n.pluginId))).sort((n, i) => {
      const o = (i.priority ?? 0) - (n.priority ?? 0);
      return o !== 0 ? o : n.id.localeCompare(i.id);
    });
  }
  getDefault(t = {}) {
    return this.list(t)[0];
  }
}
const Wr = () => new $r(), Ae = Wr();
async function Br() {
  return await k("local_ai_get_config");
}
async function Nr(e) {
  return await k("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Hr() {
  return await k("local_ai_get_status");
}
async function jr(e) {
  return await k("local_ai_start_service", {
    config: null
  });
}
async function Ki(e) {
  return await k("local_ai_chat", { request: e });
}
function Fr() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Vr(e, t, n = {}) {
  const i = n.requestId ?? Fr(), o = await Ge(
    "local-ai-chat-stream",
    (s) => {
      const a = s.payload;
      a.requestId === i && (a.event === "delta" && a.content ? t(a.content) : a.event === "stats" && a.stats && n.onStats?.(a.stats));
    }
  );
  try {
    return await k("local_ai_chat_stream", {
      request: e,
      requestId: i
    });
  } finally {
    o();
  }
}
async function Ur(e) {
  return await k("local_ai_cancel_chat_stream", { requestId: e });
}
async function Yr(e, t, n) {
  return await k("local_ai_translate", { text: e, from: t, to: n });
}
const Xr = 4e3, Zr = 12, Nn = (e) => e?.trim() || void 0, Gr = (e, t) => {
  if (t <= 0 || e.length <= t) return e;
  const n = `
[truncated]`;
  return t <= n.length ? e.slice(0, t) : `${e.slice(0, t - n.length).trimEnd()}${n}`;
}, Kr = (e) => e && Object.keys(e).length > 0 ? { ...e } : void 0, qr = (e, t = {}) => {
  const n = Nn(e.content);
  if (!n) return null;
  const i = t.maxItemLength ?? Xr, o = {
    kind: e.kind,
    content: Gr(n, i)
  }, s = Nn(e.title), a = Nn(e.source), r = Kr(e.metadata);
  return s && (o.title = s), a && (o.source = a), r && (o.metadata = r), o;
}, Sn = (e, t = {}) => {
  const n = t.maxItems ?? Zr, i = e.map((o) => qr(o, t)).filter((o) => !!o).slice(0, Math.max(0, n));
  return i.length > 0 ? { items: i } : void 0;
}, Yo = (e, t = {}) => Sn(e?.items ?? [], t), Xo = (e, t = {}) => Sn(
  e.flatMap((n) => n?.items ?? []),
  t
), Jr = {
  workspace: "Workspace",
  selection: "Selection",
  search: "Search"
}, Qr = (e, t) => {
  const n = e.title ? ` - ${e.title}` : "", i = e.source ? ` (${e.source})` : "";
  return `### ${t + 1}. ${Jr[e.kind]}${n}${i}`;
}, tl = (e, t = {}) => {
  const n = Yo(e, t);
  return n ? [
    "Snippets Code request context. Use these references only when relevant, and treat the user message as the source of intent.",
    ...n.items.map(
      (i, o) => [Qr(i, o), i.content].join(`
`)
    )
  ].join(`

`) : "";
}, Zo = (e, t, n = {}) => {
  const i = Xo(
    [e.context, t],
    n
  );
  if (!i) {
    const o = { ...e };
    return delete o.context, o;
  }
  return {
    ...e,
    context: i
  };
}, Dt = "local-ai", qi = {
  auto: "auto-detected language",
  zh: "Simplified Chinese",
  zh_tw: "Traditional Chinese",
  en: "English",
  ja: "Japanese",
  ko: "Korean",
  fr: "French",
  de: "German",
  ru: "Russian",
  es: "Spanish",
  pt_pt: "Portuguese (Portugal)",
  pt_br: "Portuguese (Brazil)",
  vi: "Vietnamese",
  id: "Indonesian",
  th: "Thai",
  ar: "Arabic"
}, el = (e) => e && e.split(/[\\/]/).filter(Boolean).pop() || "", Ji = (e) => ({
  providerId: Dt,
  available: e.healthy || e.running || !e.lastError,
  running: e.running,
  healthy: e.healthy,
  modelName: el(e.modelPath),
  modelPath: e.modelPath,
  runtimePath: e.runtimePath,
  baseUrl: e.baseUrl,
  lastError: e.lastError
}), Go = (e) => {
  const t = tl(e);
  return t ? { role: "system", content: t } : null;
}, Qi = (e) => {
  const t = Go(e.context), n = {
    messages: t ? [t, ...e.messages] : e.messages
  };
  return e.temperature !== void 0 && (n.temperature = e.temperature), e.enableThinking !== void 0 && (n.enableThinking = e.enableThinking), e.maxTokens !== void 0 && (n.maxTokens = e.maxTokens), n;
}, nl = (e) => [
  `Translate from ${qi[e.from] ?? e.from} to ${qi[e.to] ?? e.to}.`,
  "Preserve Markdown, code fences, inline code, URLs, numbers, and line breaks.",
  "Use the Snippets Code request context only to resolve ambiguity.",
  "Return only the translated text, with no explanations."
].join(" "), il = (e) => {
  const t = Go(e.context);
  return {
    temperature: 0.2,
    enableThinking: !1,
    messages: [
      {
        role: "system",
        content: [nl(e), t?.content].filter(Boolean).join(`

`)
      },
      {
        role: "user",
        content: e.text
      }
    ]
  };
}, ol = {
  id: Dt,
  label: "Local AI",
  pluginId: "local-ai",
  capabilities: ["chat", "vision", "translation"],
  priority: 100,
  async getStatus() {
    try {
      return Ji(await Hr());
    } catch (e) {
      return {
        providerId: Dt,
        available: !1,
        healthy: !1,
        lastError: e instanceof Error ? e.message : String(e)
      };
    }
  },
  async start() {
    return Ji(await jr());
  },
  async chat(e) {
    const t = await Ki(Qi(e));
    return {
      providerId: Dt,
      content: t.content
    };
  },
  async streamChat(e, t, n = {}) {
    const i = await Vr(
      Qi(e),
      t,
      {
        requestId: n.requestId,
        onStats: n.onStats
      }
    );
    return {
      providerId: Dt,
      content: i.content
    };
  },
  async cancelChatStream(e) {
    return await Ur(e);
  },
  async translate(e) {
    if (e.context?.items.length) {
      const t = await Ki(
        il(e)
      );
      return {
        providerId: Dt,
        text: t.content
      };
    }
    return {
      providerId: Dt,
      text: await Yr(e.text, e.from, e.to)
    };
  }
}, hi = (e = Ae) => {
  e.get(Dt) || e.register(ol);
};
async function sl(e) {
  try {
    return await k("search_markdown_files_optimized", {
      query: e
    });
  } catch (t) {
    throw new Error(`搜索失败: ${t}`);
  }
}
async function al() {
  try {
    const e = await k("get_workspace_root_path");
    return e || "";
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    if (t.includes("工作区未设置") || t.includes("工作区未配置"))
      return "";
    throw new Error(`获取工作区路径失败: ${e}`);
  }
}
const rl = /* @__PURE__ */ new Set([
  "workspace",
  "selection",
  "search"
]), ll = /* @__PURE__ */ new Set([
  "chat",
  "vision",
  "translation"
]), Hn = (e) => `${e.pluginId ?? "core"}:${e.id}`, Ko = (e) => typeof e == "string" && rl.has(e), cl = (e) => typeof e == "string" && ll.has(e), hl = (e) => typeof e == "object" && e !== null && Array.isArray(e.items), ul = (e) => typeof e == "object" && e !== null && Ko(e.kind) && "content" in e, dl = (e, t) => {
  const n = Array.from(new Set(t));
  if (!n.length || n.some((i) => !Ko(i)))
    throw new Error(`AI context provider ${e} 缺少有效 kind`);
  return n;
}, gl = (e) => {
  if (!e) return;
  const t = Array.from(new Set(e));
  if (!t.length || t.some((n) => !cl(n)))
    throw new Error("AI context provider 缺少有效 capability");
  return t;
}, fl = (e, t) => !t || e.kinds.includes(t), ml = (e, t) => !t || !e.capabilities || e.capabilities.includes(t), pl = (e, t) => !e.pluginId || !t || t(e.pluginId), yl = (e) => ({
  maxItemLength: e.maxItemLength,
  maxItems: e.maxItems
}), wl = (e) => ({
  kind: e.kind,
  capability: e.capability,
  operation: e.operation,
  providerId: e.providerId,
  input: e.input
}), vl = (e, t, n) => {
  if (t) {
    if (hl(t))
      return Yo(t, n);
    if (Array.isArray(t))
      return Sn(t, n);
    if (ul(t))
      return Sn([t], n);
    throw new Error(`AI context provider ${e.id} 返回无效上下文`);
  }
};
class xl {
  constructor() {
    R(this, "providers", /* @__PURE__ */ new Map());
  }
  register(t) {
    const n = t.id.trim();
    if (!n)
      throw new Error("AI context provider 缺少稳定 id");
    const i = t.pluginId?.trim() || void 0;
    this.providers.set(Hn({ id: n, pluginId: i }), {
      ...t,
      id: n,
      pluginId: i,
      kinds: dl(n, t.kinds),
      capabilities: gl(t.capabilities)
    });
  }
  unregisterPlugin(t) {
    for (const [n, i] of Array.from(this.providers.entries()))
      i.pluginId === t && this.providers.delete(n);
  }
  clear() {
    this.providers.clear();
  }
  list(t = {}) {
    return Array.from(this.providers.values()).filter(
      (n) => fl(n, t.kind) && ml(n, t.capability) && pl(n, t.isPluginEnabled)
    ).sort((n, i) => {
      const o = (i.priority ?? 0) - (n.priority ?? 0);
      return o !== 0 ? o : Hn(n).localeCompare(Hn(i));
    });
  }
  async collect(t = {}) {
    const n = wl(t), i = yl(t), o = await Promise.all(
      this.list(t).map(
        async (s) => vl(
          s,
          await s.collect(n),
          i
        )
      )
    );
    return Xo(o, i);
  }
}
const kl = () => new xl(), ui = kl(), bl = async (e = {}, t = ui) => t.collect(e), Sl = "workspace", Cl = "selection", Ml = "workspace-search", _l = 5, Tl = 900, Ht = (e, t) => {
  const n = e.input?.[t];
  return (typeof n == "string" ? n.trim() : "") || void 0;
}, to = (e, t) => {
  const n = e.input?.[t];
  return typeof n == "number" && Number.isFinite(n) ? n : void 0;
}, Rl = (e, t) => {
  const n = e.input?.[t];
  return n && typeof n == "object" && !Array.isArray(n) ? { ...n } : void 0;
}, di = (e) => {
  const t = Object.entries(e).filter(
    ([, n]) => n != null && n !== ""
  );
  return t.length ? Object.fromEntries(t) : void 0;
}, zl = (e) => ({
  id: Sl,
  label: "Workspace Context",
  kinds: ["workspace"],
  capabilities: ["chat", "translation"],
  priority: 100,
  async collect(t) {
    const n = [], i = Ht(t, "currentContent"), o = Ht(t, "currentTitle"), s = Ht(t, "currentFilePath");
    i && n.push({
      kind: "workspace",
      title: o ?? "Current workspace item",
      source: s ?? "workspace.current",
      content: i,
      metadata: di({
        filePath: s,
        type: Ht(t, "currentType")
      })
    });
    const r = Ht(t, "workspaceRoot") ?? await (e.getWorkspaceRoot ?? al)().catch(() => "");
    return r && n.push({
      kind: "workspace",
      title: "Workspace root",
      source: "workspace.root",
      content: `Workspace root: ${r}`
    }), n;
  }
}), Pl = () => ({
  id: Cl,
  label: "Selection Context",
  kinds: ["selection"],
  capabilities: ["chat", "translation"],
  priority: 120,
  collect(e) {
    const t = Ht(e, "selectionText") ?? Ht(e, "selectedText");
    if (t)
      return {
        kind: "selection",
        title: Ht(e, "selectionTitle") ?? "Current selection",
        source: Ht(e, "selectionSource") ?? "selection",
        content: t,
        metadata: di({
          ...Rl(e, "selectionMetadata") ?? {},
          language: Ht(e, "selectionLanguage"),
          filePath: Ht(e, "selectionFilePath"),
          startLine: to(e, "selectionStartLine"),
          endLine: to(e, "selectionEndLine")
        })
      };
  }
}), Ll = (e, t, n) => {
  const i = e.trim();
  if (i.length <= n) return i;
  const o = i.toLowerCase(), s = t.toLowerCase().split(/\s+/).find((c) => c.length >= 2), a = s ? o.indexOf(s) : -1, r = a > 0 ? Math.max(0, a - Math.floor(n / 3)) : 0, l = Math.min(i.length, r + n);
  return `${r > 0 ? "..." : ""}${i.slice(r, l)}${l < i.length ? "..." : ""}`;
}, Al = (e, t) => ({
  kind: "search",
  title: e.title || "Untitled",
  source: e.filePath || e.id,
  content: Ll(
    e.content || "",
    t,
    Tl
  ),
  metadata: di({
    filePath: e.filePath,
    category: e.categoryName,
    type: e.type,
    score: e.score
  })
}), Il = (e) => ({
  id: Ml,
  label: "Workspace Search Context",
  kinds: ["search"],
  capabilities: ["chat", "translation"],
  priority: 80,
  async collect(t) {
    const n = Ht(t, "query") ?? Ht(t, "searchQuery");
    return n ? (await (e.searchMarkdownFiles ?? sl)(n).catch(() => [])).slice(0, _l).map((o) => Al(o, n)) : void 0;
  }
}), Dl = (e, t) => e.list().some((n) => n.id === t && !n.pluginId), El = (e = ui, t = {}) => {
  const n = [
    Pl(),
    zl(t),
    Il(t)
  ];
  for (const i of n)
    Dl(e, i.id) || e.register(i);
}, Ol = (e) => e.type === "text" ? e.text : "", $l = (e) => Array.isArray(e) ? e.map(Ol).filter(Boolean).join(`
`) : e, Wl = (e) => {
  for (let t = e.messages.length - 1; t >= 0; t -= 1) {
    const n = e.messages[t];
    if (n.role !== "user") continue;
    const i = $l(n.content).trim();
    if (i) return i;
  }
}, Bl = (e) => {
  const t = Wl(e);
  return t ? { query: t } : {};
}, Nl = (e) => ({
  query: e.text,
  selectionText: e.text,
  from: e.from,
  to: e.to
}), Hl = (e) => {
  if (!(e === void 0 || e === !1))
    return e === !0 ? {} : e;
}, qo = async (e, t, n, i, o) => {
  const s = Hl(
    e.contextCollection
  );
  if (!s) return;
  const a = e.contextRegistry ?? ui;
  return e.contextRegistry || El(a), await bl(
    {
      ...s,
      capability: t,
      operation: n,
      providerId: i,
      isPluginEnabled: e.isPluginEnabled,
      input: {
        ...o,
        ...s.input ?? {}
      }
    },
    a
  );
};
async function jl() {
  try {
    return await k("get_app_config");
  } catch (e) {
    throw new Error(`获取应用配置失败: ${e}`);
  }
}
const Jo = [
  "chat",
  "vision",
  "translation"
];
new Set(
  Jo
);
const Fl = (e) => typeof e != "string" ? void 0 : e.trim() || void 0, Vl = (e) => {
  if (!e || typeof e != "object" || Array.isArray(e))
    return {};
  const t = {};
  for (const n of Jo) {
    const i = Fl(
      e[n]
    );
    i && (t[n] = i);
  }
  return t;
}, Ul = async () => {
  const e = await jl();
  return Vl(e.ai_provider_preferences);
}, Yl = (e) => e.messages.some(
  (t) => Array.isArray(t.content) && t.content.some((n) => n.type === "image_url")
), Xl = (e, t) => t ?? (Yl(e) ? "vision" : "chat"), Zl = async (e, t) => e.providerId ? e.providerId : e.providerPreferences ? e.providerPreferences[t]?.trim() || void 0 : e.registry ? void 0 : (await Ul().catch(() => ({})))[t]?.trim() || void 0, Qo = (e, t) => !e.pluginId || !t || t(e.pluginId), Gl = (e, t, n) => !!(e && Qo(e, n.isPluginEnabled) && e.capabilities.includes(t)), Kl = (e, t, n, i) => i ? t.providerId ? e.require(i) : e.get(i) : e.getDefault({
  capability: n,
  isPluginEnabled: t.isPluginEnabled
}), ql = (e, t, n) => {
  throw Qo(e, n) ? new Error(`AI provider ${e.id} 不支持 ${t}`) : new Error(`AI provider ${e.id} 当前不可用`);
}, ts = async (e, t) => {
  const n = e.registry ?? Ae;
  e.registry || hi(n);
  const i = await Zl(
    e,
    t
  ), o = Kl(
    n,
    e,
    t,
    i
  );
  if (Gl(o, t, e))
    return o;
  e.providerId && o && ql(o, t, e.isPluginEnabled);
  const s = n.getDefault({
    capability: t,
    isPluginEnabled: e.isPluginEnabled
  });
  if (s) return s;
  throw new Error(`没有可用的 ${t} AI provider`);
}, es = async (e = Dt, t = Ae) => {
  t === Ae && hi(t);
  const n = t.require(e);
  return n.getStatus ? await n.getStatus() : {
    providerId: n.id,
    available: !0,
    healthy: !0
  };
}, Jl = async (e = Dt, t = Ae) => {
  t === Ae && hi(t);
  const n = t.require(e);
  if (!n.start)
    throw new Error(`AI provider ${n.id} 不支持启动`);
  return await n.start();
}, ns = async (e, t = {}) => {
  const n = Xl(e, t.capability), i = await ts(t, n), o = await qo(
    t,
    n,
    "chat",
    i.id,
    Bl(e)
  ), s = await i.chat(Zo(e, o));
  return {
    ...s,
    providerId: s.providerId || i.id
  };
}, Ql = async (e, t = {}) => {
  const n = await ts(
    {
      ...t
    },
    "translation"
  );
  if (!n.translate)
    throw new Error(`AI provider ${n.id} 不支持 translate`);
  const i = await qo(
    t,
    "translation",
    "translation",
    n.id,
    Nl(e)
  ), o = await n.translate(
    Zo(e, i)
  );
  return {
    ...o,
    providerId: o.providerId || n.id
  };
};
function gi(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, i = e.match(/[\u3040-\u30ff]/g), o = i ? i.length : 0, s = e.match(/[\uac00-\ud7af]/g), a = s ? s.length : 0, r = e.match(/[a-zA-Z]/g), l = r ? r.length : 0, u = n + o + a + l;
  return u === 0 ? "unknown" : o >= 3 && o > l && o / u >= 0.2 ? "ja" : a >= 3 && a > n && a > l && a / u >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
function Pe(e) {
  return e === "zh" || e === "en";
}
function me(e) {
  return gi(e);
}
const tc = /[.!?。！？；;：:][)"'”’】）\]]*$/, eo = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/, cn = /[A-Za-z0-9]/, ec = /^\s*(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*(?:[·•]\s*)?)\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/, no = /(?:^|\s)(?:(?:[-*+•·●○■□▪▫◆◇]|[▶▷►▸▹→]\s*[·•])\s+|\d+[.)、）]\s*|[a-zA-Z][.)]\s+)/g;
function nc(e, t = {}) {
  const n = Hc(e), i = mc(e, n);
  return i.length === 0 ? [] : dc(i, n) ? uc(i, n) : (t.mode === "single_para" ? [Fe(i, n)] : oc(i, n)).flatMap(
    (s) => ic(s, n)
  );
}
function ic(e, t) {
  const n = mi(e, t), i = [];
  for (const o of n) {
    const s = i[i.length - 1], a = s ? kc(s, o, t) : !1;
    if (!s || !a) {
      i.push(Sc(o));
      continue;
    }
    s.text = Mc(s.text, o.text), s.blocks = [...s.blocks, ...o.blocks], s.bbox = ls(s.bbox, o.bbox), s.fontSize = so(
      s.fontSize || o.fontSize,
      s.blocks.length - o.blocks.length,
      o.fontSize,
      o.blocks.length
    ), s.lineHeight = so(
      s.lineHeight || o.lineHeight,
      s.blocks.length - o.blocks.length,
      o.lineHeight,
      o.blocks.length
    ), s.isCodeBlock = !!(s.isCodeBlock || o.isCodeLike || o.hasTableColumns), s.isStructuredBlock = !!(s.isStructuredBlock || o.hasTableColumns);
  }
  return _c(i, t);
}
function oc(e, t) {
  if (e.length <= 1)
    return [e];
  const n = e.map((l) => ({
    bbox: gc(l),
    block: l
  })).filter((l) => fc(l.bbox)).sort(fi);
  if (n.length <= 1)
    return [Fe(e, t)];
  if (sc(n, t))
    return [Fe(e, t)];
  const { cuts: i, rows: o } = ac(n);
  if (i.length < 2 || o.length <= 1)
    return [Fe(e, t)];
  const s = cc(i, o), r = hc(s).filter(
    (l) => l.units.length > 0
  ).map((l) => l.units.map((c) => c.block)).filter((l) => l.length > 0);
  return r.length > 0 ? r : [Fe(e, t)];
}
function sc(e, t) {
  if (e.length < 2)
    return !0;
  const n = [...e].sort(fi);
  let i = 0, o = 0;
  for (let s = 1; s < n.length; s += 1) {
    const a = n[s - 1].bbox, r = n[s].bbox;
    if (r.top - a.bottom > t * 2.5)
      continue;
    i += 1;
    const c = Math.min(a.right, r.right) - Math.max(a.left, r.left), u = Math.max(
      Math.min(a.right - a.left, r.right - r.left),
      1
    ), d = c / u >= 0.45, y = Math.abs(a.left - r.left) <= t * 1.5;
    (d || y) && (o += 1);
  }
  return i > 0 && o / i >= 0.72;
}
function ac(e) {
  const t = Math.min(...e.map((l) => l.bbox.left)) - 1, n = Math.max(...e.map((l) => l.bbox.right)) + 1, i = [], o = [];
  let s = [], a = 0;
  for (; a < e.length; ) {
    const c = e[a].bbox.bottom, u = [];
    for (; a < e.length && e[a].bbox.top <= c; )
      u.push(e[a]), a += 1;
    u.sort(
      (g, w) => g.bbox.left - w.bbox.left || g.bbox.right - w.bbox.right
    );
    const d = rc(u, t, n, i.length), { gaps: y, removedGaps: v } = lc(s, d), S = i.length - 1;
    for (const g of v)
      o.push({
        left: g.left,
        right: g.right,
        startRow: g.startRow,
        endRow: S
      });
    s = y, i.push(u);
  }
  const r = i.length - 1;
  for (const l of s)
    o.push({
      left: l.left,
      right: l.right,
      startRow: l.startRow,
      endRow: r
    });
  return o.sort((l, c) => l.left - c.left || l.right - c.right), { cuts: o, rows: i };
}
function rc(e, t, n, i) {
  const o = [];
  let s = t;
  for (const a of e)
    a.bbox.left > s && o.push({
      left: s,
      right: a.bbox.left,
      startRow: i
    }), a.bbox.right > s && (s = a.bbox.right);
  return o.push({ left: s, right: n, startRow: i }), o;
}
function lc(e, t) {
  const n = e.map(() => !1), i = t.map(() => !1), o = [];
  for (let s = 0; s < e.length; s += 1) {
    const a = e[s];
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r], c = Math.max(a.left, l.left), u = Math.min(a.right, l.right);
      c <= u && (o.push({ left: c, right: u, startRow: a.startRow }), n[s] = !0, i[r] = !0);
    }
  }
  for (let s = 0; s < t.length; s += 1)
    i[s] || o.push(t[s]);
  return {
    gaps: o,
    removedGaps: e.filter((s, a) => !n[a])
  };
}
function cc(e, t) {
  const n = t.map(() => []);
  for (const r of e)
    for (let l = r.startRow; l <= r.endRow; l += 1)
      n[l]?.push({ left: r.left, right: r.right });
  for (const r of n)
    r.sort((l, c) => l.left - c.left || l.right - c.right);
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
    const l = r.xRight - 2, c = o.filter((v) => l >= v.xLeft && l <= v.xRight + 1e-4 && v.rowBottom < r.rowTop), u = Math.max(
      ...c.map((v) => v.rowBottom),
      i.rowBottom
    ), d = c.filter(
      (v) => v.rowBottom === u
    );
    (d.length > 0 ? d.reduce(
      (v, S) => S.xRight > v.xRight ? S : v
    ) : i).children.push(r), o.push(r);
  };
  for (let r = 0; r < t.length; r += 1) {
    const l = n[r], c = [];
    for (const v of s) {
      let S = !1, g = !1, w = !1;
      for (const P of l)
        if (hn(P.right, v.xLeft) && (S = !0), hn(P.left, v.xRight) && (g = !0), v.xLeft < P.left && P.left < v.xRight || v.xLeft < P.right && P.right < v.xRight) {
          w = !0;
          break;
        }
      !S || !g || w ? a(v) : (v.rowBottom = r, c.push(v));
    }
    s = c;
    let u = 0, d = 0;
    const y = t[r];
    for (; u < y.length && l.length >= 2; ) {
      const v = y[u];
      d + 1 >= l.length && (d = Math.max(0, l.length - 2));
      const S = l[d].right, g = l[d + 1].left;
      if (v.bbox.left + 1e-4 > g && d < l.length - 2) {
        d += 1;
        continue;
      }
      let w = s.find(
        (P) => hn(P.xLeft, S) && hn(P.xRight, g)
      );
      w || (w = {
        xLeft: S,
        xRight: g,
        rowTop: r,
        rowBottom: r,
        units: [],
        children: []
      }, s.push(w)), w.units.push(v), u += 1;
    }
  }
  for (const r of s)
    a(r);
  for (const r of o)
    r.children.sort((l, c) => l.xLeft - c.xLeft || l.rowTop - c.rowTop), r.units.sort(fi);
  return i;
}
function hc(e) {
  const t = [e], n = [];
  for (; t.length > 0; ) {
    const i = t.pop();
    i && (n.push(i), t.push(...[...i.children].reverse()));
  }
  return n;
}
function Fe(e, t) {
  return [...e].sort((n, i) => {
    const o = n.y - i.y;
    return Math.abs(o) > t * 0.45 ? o : n.x - i.x;
  });
}
function uc(e, t) {
  const n = ue(
    Wt(e.map((a) => a.width)),
    t * 0.5
  ), i = Math.max(
    n * 1.4,
    t * 0.28
  ), o = [...e].sort((a, r) => {
    const l = r.x + r.width / 2 - (a.x + a.width / 2);
    return Math.abs(l) > t * 0.65 ? l : a.y - r.y;
  }), s = [];
  for (const a of o) {
    const r = a.x + a.width / 2, l = s[s.length - 1], c = l ? Wt(l.map((u) => u.x + u.width / 2)) : 0;
    l && Math.abs(r - c) <= i ? l.push(a) : s.push([a]);
  }
  return s.map((a) => {
    const r = [...a].sort((y, v) => y.y - v.y), l = r.reduce((y, v, S) => {
      const g = v.text.trim();
      return S === 0 ? g : pi(y, g);
    }, ""), c = rs(r), u = Wt(
      r.map(
        (y) => ue(y.fontSize, t)
      )
    ), d = Wt(
      r.map((y) => zn(y))
    );
    return {
      text: l,
      blocks: r,
      bbox: c,
      isCodeBlock: !1,
      isStructuredBlock: !1,
      fontSize: u,
      lineHeight: d,
      angle: Wt(r.map((y) => y.angle || 0))
    };
  });
}
function dc(e, t) {
  return e.length < 2 ? !1 : e.filter((i) => {
    const o = Math.max(i.width, 1);
    return i.height > o * 1.35 && i.height > Math.max(18, t * 0.35);
  }).length >= Math.max(2, Math.ceil(e.length * 0.56));
}
function gc(e) {
  return {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function fc(e) {
  return Number.isFinite(e.left) && Number.isFinite(e.top) && Number.isFinite(e.right) && Number.isFinite(e.bottom) && e.right >= e.left && e.bottom >= e.top;
}
function fi(e, t) {
  return e.bbox.top - t.bbox.top || e.bbox.left - t.bbox.left;
}
function hn(e, t) {
  return Math.abs(e - t) <= 1e-4;
}
function mc(e, t) {
  return e.map((n) => {
    const i = n.text.trim();
    if (!i || pc(n, t) || wc(i))
      return null;
    const o = vc(
      yc(i, n, t)
    );
    return o === n.text ? n : { ...n, text: o };
  }).filter((n) => !!n);
}
function pc(e, t) {
  const n = e.text.trim();
  if (!/^[cC]$/.test(n))
    return !1;
  const i = t * 1.25;
  return e.width <= i && e.height <= i;
}
function yc(e, t, n) {
  return /^xC$/i.test(e) && t.width <= n * 2.4 ? "X" : e;
}
function wc(e) {
  return /^(?:en|zh|ja|ko|de|fr|es|ru|pt|it|nl)[A-Z]{2,4}$/.test(e.trim());
}
function vc(e) {
  return e.replace(/^:\s+(?=[A-Z])/, "- ");
}
function mi(e, t) {
  const n = [...e].sort((s, a) => {
    const r = s.y - a.y;
    return Math.abs(r) > t * 0.45 ? r : s.x - a.x;
  }), i = [], o = t * 0.45;
  for (const s of n) {
    const a = i[i.length - 1];
    a && Math.abs(s.y - a.y) < o && !Oc(a.blocks, s, t) ? (a.blocks.push(s), a.y = Wt(a.blocks.map((r) => r.y))) : i.push({ y: s.y, blocks: [s] });
  }
  return i.map(
    (s) => xc(s.blocks, t)
  );
}
function xc(e, t) {
  const n = [...e].sort((r, l) => r.x - l.x), i = rs(n), o = n.reduce((r, l, c) => {
    const u = l.text.trim();
    return c === 0 ? u : Cc(r, u);
  }, ""), s = Wt(
    n.map(
      (r) => ue(r.fontSize, t)
    )
  ), a = Wt(
    n.map((r) => zn(r))
  );
  return {
    text: o,
    blocks: n,
    bbox: i,
    fontSize: s,
    lineHeight: a,
    centerY: i.y + i.height / 2,
    hasTableColumns: $c(n, t),
    isCodeLike: ss(o)
  };
}
function kc(e, t, n) {
  const i = mi(e.blocks, n), o = i[i.length - 1];
  if (!o) return !1;
  const s = Ke(o.text);
  if (Rn(o.text) || Ke(t.text) || s && !bc(o, t, n) || t.isCodeLike || o.isCodeLike || t.hasTableColumns || o.hasTableColumns) return !1;
  const a = t.bbox.y - (o.bbox.y + o.bbox.height);
  if (a < -n * 0.25 || a >= n * 1.8 || Lc(i, a, n) || Ac(o, t, a, n) || Ic(o, t, a, n) || Dc(
    o,
    t,
    a,
    n
  ) || Ec(o, t, a, n))
    return !1;
  if (s)
    return !0;
  const r = Math.max(
    n * 1.2,
    o.lineHeight * 0.9
  );
  return Math.abs(t.bbox.x - o.bbox.x) <= r;
}
function bc(e, t, n) {
  if (os(t.text))
    return !1;
  const i = t.bbox.x - e.bbox.x, o = Math.max(
    n * 0.8,
    e.lineHeight * 0.65
  );
  return i >= o;
}
function Sc(e) {
  return {
    text: e.text,
    blocks: [...e.blocks],
    bbox: { ...e.bbox },
    isCodeBlock: e.isCodeLike || e.hasTableColumns,
    isStructuredBlock: e.hasTableColumns,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    angle: Wt(e.blocks.map((t) => t.angle || 0))
  };
}
function Cc(e, t) {
  return pi(e, t);
}
function Mc(e, t) {
  return pi(e, t);
}
function pi(e, t) {
  const n = e.trimEnd(), i = t.trimStart();
  if (!n) return i;
  if (!i) return n;
  const o = n.charAt(n.length - 1), s = i.charAt(0), a = n.charAt(n.length - 2);
  return o === "-" && cn.test(a) && cn.test(s) ? `${n.slice(0, -1)}${i}` : jc(s) || Fc(o) ? `${n}${i}` : eo.test(o) || eo.test(s) || ao(o) || ao(s) ? `${n}${i}` : cn.test(o) && cn.test(s) ? `${n} ${i}` : `${n} ${i}`.replace(/\s+/g, " ");
}
function Rn(e) {
  return tc.test(e.trim());
}
function Ke(e) {
  return ec.test(e);
}
function _c(e, t) {
  return e.flatMap(
    (n) => Tc(n, t)
  );
}
function Tc(e, t) {
  const n = is(e.text);
  if (n.length <= 1)
    return [e];
  const i = mi(e.blocks, t), o = i.length === n.length;
  return n.map((s, a) => {
    const r = o ? i[a] : null, l = r?.bbox || zc(e.bbox, a, n.length), c = r?.blocks || [
      Pc(e, s, l, a)
    ];
    return {
      ...e,
      text: s,
      blocks: c,
      bbox: l,
      isCodeBlock: !!c.some((u) => ss(u.text)),
      isStructuredBlock: e.isStructuredBlock,
      fontSize: Wt(
        c.map(
          (u) => ue(
            u.fontSize,
            e.fontSize || t
          )
        )
      ),
      lineHeight: Wt(c.map((u) => zn(u))),
      angle: Wt(c.map((u) => u.angle || 0))
    };
  });
}
function is(e) {
  const t = e.split(/\r?\n+/).map((i) => i.trim()).filter(Boolean);
  if (t.length > 1)
    return t.flatMap(is);
  const n = Rc(e);
  return n.length > 1 ? n.flatMap(io) : io(e);
}
function Rc(e) {
  const t = e.trim(), n = [];
  no.lastIndex = 0;
  for (const i of t.matchAll(no)) {
    const o = i[0], s = i.index ?? 0;
    n.push(s + (o.startsWith(" ") ? 1 : 0));
  }
  return n.length <= 1 ? [t] : n.map((i, o) => {
    const s = n[o + 1] ?? t.length;
    return t.slice(i, s).trim();
  }).filter(Boolean);
}
function io(e) {
  const t = e.trim();
  if (!Ke(t))
    return [t];
  const n = t.match(
    /^(.+?\([^)]{1,80}\))\s+([A-Z][A-Za-z0-9][A-Za-z0-9\s:,'&()[\]/-]{2,40})$/
  );
  return !n || !os(n[2]) ? [t] : [n[1].trim(), n[2].trim()];
}
function zc(e, t, n) {
  const i = e.height / Math.max(n, 1);
  return {
    x: e.x,
    y: e.y + i * t,
    width: e.width,
    height: i
  };
}
function Pc(e, t, n, i) {
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
function os(e) {
  const t = e.trim();
  return !t || Rn(t) || Ke(t) ? !1 : t.split(/\s+/).filter(Boolean).length <= 5 && /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(t);
}
function Lc(e, t, n) {
  if (e.length < 2 || t <= 0)
    return !1;
  const i = [];
  for (let a = 1; a < e.length; a++) {
    const r = e[a - 1], c = e[a].bbox.y - (r.bbox.y + r.bbox.height);
    c > 0 && i.push(c);
  }
  const o = i.length > 0 ? Wt(i) : 0, s = Math.max(o * 2.2, n * 1.15);
  return t > s;
}
function Ac(e, t, n, i) {
  const o = e.text.trim();
  if (!o || Rn(o) || Ke(o) || e.isCodeLike || o.endsWith("-"))
    return !1;
  const s = o.split(/\s+/).filter(Boolean).length, a = e.bbox.width < t.bbox.width * 0.72, r = /^[A-Z][A-Za-z0-9\s:,'&()[\]/-]+$/.test(o) && s <= 8 && a, l = /[\u3400-\u4dbf\u4e00-\u9fff]/.test(o) && o.length <= 12 && a, c = r || l;
  return e.fontSize >= t.fontSize * 1.18 && c ? !0 : n > i * 0.7 && c;
}
function Ic(e, t, n, i) {
  if (n <= 0)
    return !1;
  const o = Math.max(e.fontSize, t.fontSize), s = Math.max(Math.min(e.fontSize, t.fontSize), 1), a = o / s, r = n / Math.max(s, i * 0.6, 1);
  if (a >= 1.45 && r >= 0.65)
    return !0;
  const l = e.fontSize >= i * 1.08 && e.bbox.width >= t.bbox.width * 0.82, c = t.fontSize <= e.fontSize * 0.78 && n >= Math.max(t.lineHeight * 0.75, i * 0.55);
  return l && c;
}
function Dc(e, t, n, i) {
  if (n < i * 0.45)
    return !1;
  const s = e.text.split(/\s+/).filter(Boolean).length <= 3 && e.bbox.width < t.bbox.width * 0.35, a = Math.abs(e.bbox.x - t.bbox.x) <= i * 0.6;
  return s && a;
}
function Ec(e, t, n, i) {
  return n < i * 0.25 || !(Math.abs(e.bbox.x - t.bbox.x) <= i * 0.35) ? !1 : oo(e.text) && oo(t.text);
}
function oo(e) {
  const t = e.trim();
  return t.split(/\s+/).filter(Boolean).length <= 3 && t.length <= 32 && !Rn(t);
}
function ss(e) {
  const t = e.trim();
  return t ? !!(/^(?:\$|>|PS>|C:\\|[A-Za-z]:\\|\/[\w.-]+\/)/.test(t) || /^(?:const|let|var|return|import|export|function|class|if|else|for|while|try|catch)\b/.test(
    t
  ) || /^[{}()[\];,]+$/.test(t) || /^(?:sudo|npm|yarn|pnpm|deno|bun|git|cd|ls|cat|chmod|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|pip|cargo)\s+\S+/.test(
    t
  ) || /[{};]/.test(t) && /[=()]/.test(t) || /^<\/?[A-Za-z][^>]*>$/.test(t) || /^[\w.-]+\([^)]*\)\s*[{;]?$/.test(t)) : !1;
}
function Oc(e, t, n) {
  const i = [...e].sort((a, r) => a.x - r.x), o = i[i.length - 1], s = t.x - (o.x + o.width);
  return s > n * 0.9 && Nc(o.text) && as(t.text) ? !1 : s > n * 3.2;
}
function $c(e, t) {
  if (e.length < 2)
    return e.some((o) => Wc(o.text));
  const n = [...e].sort((o, s) => o.x - s.x);
  let i = 0;
  for (let o = 1; o < n.length; o++) {
    const s = n[o - 1], a = n[o], r = n[o].x - (s.x + s.width);
    (r > t * 1.8 || r > t * 0.9 && Bc(s.text) && as(a.text)) && (i += 1);
  }
  return i >= 1;
}
function Wc(e) {
  const t = e.trim();
  return /\S\s{3,}\S/.test(t) && (/^Option\s{2,}Description\b/i.test(t) || /^[A-Za-z_][A-Za-z0-9_-]{1,24}\s{2,}[A-Z]/.test(t));
}
function Bc(e) {
  return /^[A-Za-z_][A-Za-z0-9_-]{1,24}$/.test(e.trim());
}
function Nc(e) {
  const t = e.trim();
  return /^[a-z_][A-Za-z0-9_-]{1,24}$/.test(t) || /[_-]/.test(t);
}
function as(e) {
  const t = e.trim();
  return /^[A-Z]/.test(t) && t.length > 6;
}
function rs(e) {
  const t = e.map((n) => ({
    x: n.x,
    y: n.y,
    width: n.width,
    height: n.height
  }));
  return t.reduce((n, i) => ls(n, i), t[0]);
}
function ls(e, t) {
  const n = Math.min(e.x, t.x), i = Math.min(e.y, t.y), o = Math.max(e.x + e.width, t.x + t.width), s = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: i,
    width: o - n,
    height: s - i
  };
}
function Hc(e) {
  return ue(
    Wt(e.map((t) => zn(t))),
    16
  );
}
function zn(e) {
  return ue(
    e.lineHeight,
    ue(e.height, ue(e.fontSize, 16) * 1.2)
  );
}
function so(e, t, n, i) {
  const o = t + i;
  return o <= 0 ? n : (e * t + n * i) / o;
}
function ue(e, t) {
  return Number.isFinite(e) && e > 0 ? e : t;
}
function Wt(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}
function jc(e) {
  return /^[,.;:!?，。！？；：、)\]}>"'”’]$/.test(e);
}
function Fc(e) {
  return /^[(\[{<"'“‘]$/.test(e);
}
function ao(e) {
  return /^[，。！？；：、（）【】《》“”‘’]$/.test(e);
}
const ro = 34;
class Vc {
  constructor(t, n, i) {
    this.pixels = t, this.sampleWidth = n, this.sampleHeight = i;
  }
  detect(t, n) {
    const i = this.getDominantNearbyColor(t, n), o = this.findMatchingStart(t, n, i);
    if (!o) return null;
    const s = this.getPixelBounds(n);
    return s ? this.floodFillRegion(o, s, i) : null;
  }
  floodFillRegion(t, n, i) {
    const { left: o, top: s, right: a, bottom: r, width: l, height: c } = n, u = new Uint8Array(l * c), d = new Int32Array(l * c), y = new Int32Array(l * c);
    let v = 0, S = 1, g = t.x, w = t.x, P = t.y, I = t.y;
    for (d[0] = t.x, y[0] = t.y, u[(t.y - s) * l + t.x - o] = 1; v < S; ) {
      const X = d[v], V = y[v];
      if (v += 1, g = Math.min(g, X), w = Math.max(w, X), P = Math.min(P, V), I = Math.max(I, V), S = this.enqueueNeighbors(
        X,
        V,
        o,
        s,
        a,
        r,
        l,
        i,
        u,
        d,
        y,
        S
      ), S > l * c * 0.94) return null;
    }
    const T = w - g + 1, W = I - P + 1;
    return S / Math.max(1, T * W) >= 0.24 ? { x: g, y: P, width: T, height: W } : null;
  }
  getPixelBounds(t) {
    const n = Math.max(0, Math.floor(t.x)), i = Math.max(0, Math.floor(t.y)), o = Math.min(
      this.sampleWidth,
      Math.ceil(t.x + t.width)
    ), s = Math.min(
      this.sampleHeight,
      Math.ceil(t.y + t.height)
    ), a = o - n, r = s - i;
    return a > 0 && r > 0 ? { left: n, top: i, right: o, bottom: s, width: a, height: r } : null;
  }
  enqueueNeighbors(t, n, i, o, s, a, r, l, c, u, d, y) {
    let v = y;
    const S = [
      { x: t - 1, y: n },
      { x: t + 1, y: n },
      { x: t, y: n - 1 },
      { x: t, y: n + 1 }
    ];
    for (const g of S) {
      if (g.x < i || g.x >= s || g.y < o || g.y >= a)
        continue;
      const w = (g.y - o) * r + g.x - i;
      c[w] || (c[w] = 1, this.isColorNear(this.getColor(g.x, g.y), l) && (u[v] = g.x, d[v] = g.y, v += 1));
    }
    return v;
  }
  getDominantNearbyColor(t, n) {
    const i = /* @__PURE__ */ new Map();
    for (let s = -4; s <= 4; s += 2)
      for (let a = -4; a <= 4; a += 2) {
        const r = Math.round(t.x + a), l = Math.round(t.y + s);
        if (!this.contains(n, { x: r, y: l })) continue;
        const c = this.getColor(r, l), u = `${c.r >> 4},${c.g >> 4},${c.b >> 4}`, d = i.get(u) || { count: 0, r: 0, g: 0, b: 0 };
        d.count += 1, d.r += c.r, d.g += c.g, d.b += c.b, i.set(u, d);
      }
    const o = [...i.values()].reduce(
      (s, a) => a.count > s.count ? a : s,
      { count: 1, r: 255, g: 255, b: 255 }
    );
    return {
      r: o.r / o.count,
      g: o.g / o.count,
      b: o.b / o.count
    };
  }
  findMatchingStart(t, n, i) {
    for (let o = 0; o <= 6; o += 1)
      for (let s = t.y - o; s <= t.y + o; s += 1)
        for (let a = t.x - o; a <= t.x + o; a += 1) {
          const r = { x: Math.round(a), y: Math.round(s) };
          if (this.contains(n, r) && this.isColorNear(this.getColor(r.x, r.y), i))
            return r;
        }
    return null;
  }
  isColorNear(t, n) {
    const i = t.r - n.r, o = t.g - n.g, s = t.b - n.b;
    return i * i + o * o + s * s <= ro * ro;
  }
  getColor(t, n) {
    const i = Math.max(0, Math.min(this.sampleWidth - 1, t)), s = (Math.max(0, Math.min(this.sampleHeight - 1, n)) * this.sampleWidth + i) * 4;
    return {
      r: this.pixels[s],
      g: this.pixels[s + 1],
      b: this.pixels[s + 2]
    };
  }
  contains(t, n) {
    return n.x >= t.x && n.x < t.x + t.width && n.y >= t.y && n.y < t.y + t.height;
  }
}
const Uc = 960, Yc = 640;
class yi {
  constructor(t, n, i, o, s) {
    R(this, "regionDetector");
    R(this, "lastDetection", null);
    this.sampleWidth = n, this.sampleHeight = i, this.logicalWidth = o, this.logicalHeight = s, this.regionDetector = new Vc(
      t,
      n,
      i
    );
  }
  static fromImage(t, n, i) {
    if (n <= 0 || i <= 0) return null;
    const o = Math.min(
      1,
      Uc / n,
      Yc / i
    ), s = Math.max(1, Math.round(n * o)), a = Math.max(1, Math.round(i * o)), r = document.createElement("canvas");
    r.width = s, r.height = a;
    const l = r.getContext("2d", { willReadFrequently: !0 });
    if (!l) return null;
    l.drawImage(t, 0, 0, s, a);
    const c = l.getImageData(0, 0, s, a);
    return new yi(
      c.data,
      s,
      a,
      n,
      i
    );
  }
  detect(t, n) {
    const i = this.getCachedDetection(t, n);
    if (i !== void 0) return i;
    const o = this.toSampleRect(n), s = this.toSamplePoint(t);
    if (!this.containsSamplePoint(o, s))
      return this.cacheDetection(t, n, null), null;
    const a = this.regionDetector.detect(s, o);
    if (!a)
      return this.cacheDetection(t, n, null), null;
    const r = this.toLogicalRect(a), l = this.isUsefulCandidate(r, n, t) ? r : null;
    return this.cacheDetection(t, n, l), l;
  }
  getCachedDetection(t, n) {
    const i = this.lastDetection;
    if (!(!i || !this.isSameRect(i.bounds, n))) {
      if (i.result && this.containsLogicalPoint(i.result, t))
        return { ...i.result };
      if (!i.result && Math.hypot(t.x - i.point.x, t.y - i.point.y) < 14)
        return null;
    }
  }
  cacheDetection(t, n, i) {
    this.lastDetection = {
      point: { ...t },
      bounds: { ...n },
      result: i ? { ...i } : null
    };
  }
  isSameRect(t, n) {
    return t.x === n.x && t.y === n.y && t.width === n.width && t.height === n.height;
  }
  containsLogicalPoint(t, n) {
    return n.x >= t.x && n.x <= t.x + t.width && n.y >= t.y && n.y <= t.y + t.height;
  }
  containsSamplePoint(t, n) {
    return n.x >= t.x && n.x < t.x + t.width && n.y >= t.y && n.y < t.y + t.height;
  }
  isUsefulCandidate(t, n, i) {
    const o = t.width * t.height, s = n.width * n.height;
    return t.width >= 18 && t.height >= 14 && o >= 320 && o < s * 0.45 && this.containsLogicalPoint(t, i);
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
    const n = this.logicalWidth / this.sampleWidth, i = this.logicalHeight / this.sampleHeight;
    return {
      x: Math.round(t.x * n),
      y: Math.round(t.y * i),
      width: Math.round(t.width * n),
      height: Math.round(t.height * i)
    };
  }
}
function lo(e, t) {
  if (!e || !t) return e === t;
  if (Math.abs(e.x - t.x) <= 3 && Math.abs(e.y - t.y) <= 3 && Math.abs(e.width - t.width) <= 6 && Math.abs(e.height - t.height) <= 6) return !0;
  const i = Math.max(
    0,
    Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)
  ), o = Math.max(
    0,
    Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y)
  ), s = i * o, a = e.width * e.height + t.width * t.height - s;
  return a > 0 && s / a >= 0.86;
}
class Xc {
  constructor() {
    R(this, "currentRect", null);
    R(this, "isFinalized", !1);
  }
  preview(t) {
    return t ? this.isFinalized && lo(this.currentRect, t) ? {
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
    const n = this.commit(t);
    return this.isFinalized = t !== null, n;
  }
  reset() {
    this.currentRect = null, this.isFinalized = !1;
  }
  commit(t) {
    const n = !lo(this.currentRect, t);
    return this.currentRect = this.cloneRect(t), {
      rect: this.cloneRect(this.currentRect),
      changed: n
    };
  }
  cloneRect(t) {
    return t ? { ...t } : null;
  }
}
function Zc(e, t, n) {
  return Math.hypot(t.x - e.x, t.y - e.y) >= n;
}
function Gc(e, t, n) {
  const i = e.map((o) => {
    const s = Math.max(
      o.x - t.x,
      0,
      t.x - (o.x + o.width)
    ), a = Math.max(
      o.y - t.y,
      0,
      t.y - (o.y + o.height)
    );
    return {
      window: o,
      distance: Math.hypot(s, a),
      containsPointer: s === 0 && a === 0
    };
  }).filter(({ distance: o }) => o <= n);
  return i.length === 0 ? null : (i.sort((o, s) => {
    const a = Number(s.containsPointer) - Number(o.containsPointer);
    if (a !== 0) return a;
    if (o.containsPointer)
      return o.window.display_order - s.window.display_order;
    const r = o.distance - s.distance;
    if (r !== 0) return r;
    const l = o.window.display_order - s.window.display_order;
    return l !== 0 ? l : Number(s.window.is_fullscreen) - Number(o.window.is_fullscreen);
  }), i[0].window);
}
class Kc {
  constructor(t, n, i, o) {
    R(this, "canvas");
    R(this, "coordinateSystem");
    R(this, "drawingEngine");
    R(this, "eventHandler");
    // 状态管理
    R(this, "selectionRect", null);
    R(this, "annotations", []);
    R(this, "currentAnnotation", null);
    R(this, "selectedAnnotation", null);
    R(this, "hoveredAnnotation", null);
    // 拖拽状态
    R(this, "draggedAnnotation", null);
    R(this, "dragStartPoint", null);
    R(this, "resizingAnnotation", null);
    R(this, "resizeStartBounds", null);
    R(this, "resizeOperation", null);
    // 编辑状态
    R(this, "editingAnnotation", null);
    // 标注历史记录（用于撤销/恢复）
    R(this, "annotationUndoStack", []);
    R(this, "annotationRedoStack", []);
    R(this, "pendingDragSnapshot", null);
    R(this, "pendingResizeSnapshot", null);
    // 工具设置
    R(this, "currentTool", f.Select);
    R(this, "currentStyle", {
      color: "#ff4444",
      lineWidth: 3,
      opacity: 1
    });
    R(this, "textSize", 16);
    R(this, "mosaicSize", 8);
    R(this, "selectionCornerRadius", 0);
    R(this, "showGuides", !0);
    // 取色器状态
    R(this, "colorPickerState", {
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
    R(this, "allWindows", []);
    R(this, "snapThreshold", 30);
    // 吸附阈值（像素）
    R(this, "snappedWindow", null);
    R(this, "snappedElement", null);
    R(this, "elementCandidateStabilizer", new Xc());
    R(this, "showSnapPreview", !1);
    R(this, "captureMonitor", { x: 0, y: 0, scale: 1 });
    R(this, "lastPointerPosition", null);
    R(this, "elementSelectionPointerOrigin", null);
    R(this, "elementSelectionActivated", !1);
    R(this, "elementSelectionMoveThreshold", 12);
    R(this, "smartDetectionSequence", 0);
    R(this, "smartDetectionTimer", null);
    R(this, "accessibilityDetectionTimer", null);
    R(this, "pendingSmartDetection", null);
    // 点击拖拽区分
    R(this, "pendingSnapCandidate", null);
    R(this, "dragStartPosition", null);
    R(this, "dragThreshold", 5);
    // 拖拽阈值（像素）
    // 节流相关状态
    R(this, "throttleTimer", null);
    R(this, "lastThrottledTimestamp", 0);
    R(this, "throttleInterval", 33);
    // ms, 30 FPS (优化性能)
    // 按键状态
    R(this, "isShiftPressed", !1);
    // 背景图像（预捕获的屏幕）
    R(this, "backgroundImage", null);
    R(this, "visualElementDetector", null);
    // 是否正在加载完整背景图
    R(this, "isLoadingBackground", !1);
    // 翻译覆盖层状态
    R(this, "translationOverlay", {
      blocks: [],
      isVisible: !1,
      isLoading: !1,
      sourceLanguage: "auto",
      targetLanguage: "zh",
      engine: "bing"
      // 默认值，实际值由组件初始化时从后端获取并设置
    });
    // 离线模型后端激活状态
    R(this, "offlineModelActivated", !1);
    // Canvas 池
    R(this, "canvasPool", Zn.getInstance());
    // 回调函数
    R(this, "onStateChange");
    R(this, "onTextInputRequest");
    R(this, "onColorPicked");
    // 背景重载标记（用于避免重复加载）
    R(this, "backgroundReloadPending", !1);
    // 事件处理器引用（用于清理）
    R(this, "mouseDownHandler", this.handleMouseDown.bind(this));
    R(this, "mouseMoveHandler", this.handleMouseMove.bind(this));
    R(this, "mouseUpHandler", this.handleMouseUp.bind(this));
    R(this, "doubleClickHandler", this.handleDoubleClick.bind(this));
    R(this, "keyDownHandler", this.handleKeyDownInternal.bind(this));
    R(this, "keyUpHandler", this.handleKeyUp.bind(this));
    this.canvas = t, this.onStateChange = n, this.onTextInputRequest = i, this.onColorPicked = o, this.coordinateSystem = new Ga(t), this.drawingEngine = new Za(t, this.coordinateSystem), this.eventHandler = new Ka(t, this.coordinateSystem), this.bindMouseEvents(), this.initCanvas(), Promise.all([
      this.loadAllWindows().then(() => {
        this.detectInitialWindowSnap();
      }),
      this.loadScreenBackground()
    ]), pe.preloadModules();
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
      points: t.points.map((n) => ({ ...n })),
      style: { ...t.style },
      selected: !1,
      hovered: !1
    };
  }
  createHistorySnapshot() {
    return {
      annotations: this.annotations.map(
        (t) => this.cloneAnnotationData(t.getData())
      ),
      selectedAnnotationId: this.selectedAnnotation?.getData().id || null
    };
  }
  pushAnnotationHistory() {
    this.annotationUndoStack.push(this.createHistorySnapshot()), this.annotationRedoStack = [];
  }
  restoreHistorySnapshot(t) {
    if (this.annotations = t.annotations.map((n) => rn.fromData(this.cloneAnnotationData(n))).filter(
      (n) => n !== null
    ), this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, t.selectedAnnotationId) {
      const n = this.annotations.find(
        (i) => i.getData().id === t.selectedAnnotationId
      );
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
        const o = await k(
          "get_screenshot_background"
        );
        if (o) {
          const s = new Image();
          await new Promise((a, r) => {
            const l = setTimeout(() => {
              s.onload = null, s.onerror = null, r(new Error("Image load timeout"));
            }, 5e3);
            s.onload = () => {
              clearTimeout(l), this.backgroundImage = s;
              const c = window.devicePixelRatio || 1;
              this.visualElementDetector = yi.fromImage(
                s,
                this.canvas.width / c,
                this.canvas.height / c
              ), this.elementSelectionActivated && this.lastPointerPosition && this.snappedWindow && this.scheduleUiElementDetection(
                this.lastPointerPosition,
                this.snappedWindow
              ), this.draw(), a();
            }, s.onerror = (c) => {
              clearTimeout(l), r(c);
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
      A.error("[截图] 创建后备背景失败", t);
    }
  }
  // 绘制背景图像（支持预览图和完整图）
  drawBackground() {
    const t = this.canvas.getContext("2d");
    t && this.backgroundImage && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.imageSmoothingEnabled = !1, t.drawImage(
      this.backgroundImage,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    ), t.restore());
  }
  // 加载所有窗口信息（使用预缓存数据 + 重试机制）
  async loadAllWindows() {
    try {
      let t = { x: 0, y: 0, scale: 1, isFullscreen: !1 }, n = [];
      const i = 10, o = 50;
      await new Promise((l) => setTimeout(l, 100));
      for (let l = 0; l < i; l++)
        try {
          const [c, u] = await Promise.all([
            k("get_cached_monitor_info"),
            k("get_cached_window_list")
          ]);
          t = {
            x: c.x,
            y: c.y,
            scale: c.scale,
            isFullscreen: !1
          }, n = u;
          break;
        } catch {
          if (l < i - 1) {
            await new Promise((d) => setTimeout(d, o));
            continue;
          }
          const u = await Promise.all([
            k("get_window_info"),
            k("get_all_windows")
          ]);
          t = u[0], n = u[1];
        }
      const s = t?.scale || 1, a = window.innerWidth, r = window.innerHeight;
      this.captureMonitor = {
        x: t?.x || 0,
        y: t?.y || 0,
        scale: s
      }, this.allWindows = n.filter((l) => this.isValidWindow(l)).map((l) => ({
        ...l,
        x: Math.round((l.x - this.captureMonitor.x) / s),
        y: Math.round((l.y - this.captureMonitor.y) / s),
        width: Math.round(l.width / s),
        height: Math.round(l.height / s)
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
      let o;
      try {
        const r = await k("get_cached_monitor_info");
        o = {
          x: r.x,
          y: r.y,
          scale: r.scale
        };
      } catch {
        o = await k("get_window_info");
      }
      let s;
      try {
        const r = await k("get_mouse_position"), l = o?.scale || 1;
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
      this.lastPointerPosition = s, this.elementSelectionPointerOrigin || (this.elementSelectionPointerOrigin = { ...s }), a ? (this.snappedWindow = a, this.showSnapPreview = !0, this.draw()) : (this.showSnapPreview = !0, this.draw());
    } catch (t) {
      A.error("[截图] 初始窗口吸附检测失败", t);
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
    return Gc(this.allWindows, t, this.snapThreshold);
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
      const { rect: n } = this.snappedElement;
      if (t.x >= n.x && t.x <= n.x + n.width && t.y >= n.y && t.y <= n.y + n.height) return this.snappedElement;
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
      Zc(
        this.elementSelectionPointerOrigin,
        t,
        this.elementSelectionMoveThreshold
      ) && (this.elementSelectionActivated = !0);
    }
  }
  scheduleUiElementDetection(t, n) {
    const i = ++this.smartDetectionSequence;
    this.pendingSmartDetection = {
      mousePos: { ...t },
      targetWindow: n,
      sequence: i
    }, this.smartDetectionTimer === null && (this.smartDetectionTimer = window.setTimeout(() => {
      this.smartDetectionTimer = null;
      const o = this.pendingSmartDetection;
      o && this.applyVisualElementCandidate(
        o.mousePos,
        o.targetWindow,
        o.sequence
      );
    }, 24)), this.accessibilityDetectionTimer !== null && window.clearTimeout(this.accessibilityDetectionTimer), this.accessibilityDetectionTimer = window.setTimeout(() => {
      this.accessibilityDetectionTimer = null;
      const o = this.pendingSmartDetection;
      this.pendingSmartDetection = null, o && this.detectUiElement(
        o.mousePos,
        o.targetWindow,
        o.sequence
      );
    }, 50);
  }
  async detectUiElement(t, n, i) {
    if (!n.handle) {
      this.finalizeVisualElementCandidate(t, n, i);
      return;
    }
    const o = this.captureMonitor.scale || 1, s = Math.round(this.captureMonitor.x + t.x * o), a = Math.round(this.captureMonitor.y + t.y * o);
    try {
      const r = await k(
        "get_ui_element_at_point",
        {
          windowHandle: n.handle,
          x: s,
          y: a
        }
      );
      if (i !== this.smartDetectionSequence || this.snappedWindow !== n)
        return;
      if (!r) {
        this.finalizeVisualElementCandidate(t, n, i);
        return;
      }
      const l = {
        x: Math.round((r.x - this.captureMonitor.x) / o),
        y: Math.round((r.y - this.captureMonitor.y) / o),
        width: Math.round(r.width / o),
        height: Math.round(r.height / o)
      }, c = l.x >= n.x - 2 && l.y >= n.y - 2 && l.x + l.width <= n.x + n.width + 2 && l.y + l.height <= n.y + n.height + 2, u = t.x >= l.x && t.x <= l.x + l.width && t.y >= l.y && t.y <= l.y + l.height;
      if (l.width < 8 || l.height < 8 || !c || !u) {
        this.finalizeVisualElementCandidate(t, n, i);
        return;
      } else
        this.updateElementCandidate(l, !0);
    } catch {
      this.finalizeVisualElementCandidate(t, n, i);
    }
  }
  applyVisualElementCandidate(t, n, i) {
    if (i !== this.smartDetectionSequence || this.snappedWindow !== n)
      return;
    const o = this.visualElementDetector?.detect(t, n) || null;
    this.updateElementCandidate(o, !1);
  }
  finalizeVisualElementCandidate(t, n, i) {
    if (i !== this.smartDetectionSequence || this.snappedWindow !== n)
      return;
    const o = this.visualElementDetector?.detect(t, n) || null;
    this.updateElementCandidate(o, !0);
  }
  updateElementCandidate(t, n) {
    const i = n ? this.elementCandidateStabilizer.finalize(t) : this.elementCandidateStabilizer.preview(t);
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
    const n = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = n;
    const i = this.eventHandler.getAnnotationAtPoint(
      n,
      this.annotations
    );
    if ((this.currentTool === f.Select || this.currentTool === f.Marker) && i?.getData().type === f.Marker) {
      this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(
        i.getData().points[0],
        i
      ), this.draw(), this.onStateChange?.();
      return;
    }
    const o = this.eventHandler.getOperationType(
      n,
      this.currentTool,
      this.selectionRect,
      this.annotations
    );
    if (o !== z.None)
      switch (this.eventHandler.setCurrentOperation(o), this.eventHandler.startDrawing(n), o) {
        case z.Drawing:
          if (!this.selectionRect && this.currentTool === f.Select) {
            this.dragStartPosition = { ...n };
            const s = this.getSelectableCandidate(n);
            s ? this.pendingSnapCandidate = s : (this.selectionRect = {
              x: n.x,
              y: n.y,
              width: 0,
              height: 0
            }, this.onStateChange?.());
          }
          break;
        case z.DrawingRect:
        case z.DrawingEllipse:
        case z.DrawingLine:
        case z.DrawingArrow:
        case z.DrawingPen:
        case z.DrawingMosaic:
        case z.DrawingMarker:
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
          this.selectAnnotationAtPoint(n), this.selectedAnnotation && this.selectedAnnotation.getData().type === f.Text && this.startTextInput(
            this.selectedAnnotation.getData().points[0],
            this.selectedAnnotation
          );
          break;
        case z.MovingAnnotation:
          this.startAnnotationDrag(n);
          break;
        case z.ResizingAnnotationNW:
        case z.ResizingAnnotationSE:
          this.startAnnotationResize(n, o);
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
    const n = this.coordinateSystem.getCanvasPosition(t);
    this.lastPointerPosition = n;
    const i = this.eventHandler.getDrawingState();
    if (i.isDrawing)
      this.eventHandler.updateMousePosition(n), this.pendingSnapCandidate && this.dragStartPosition && !this.selectionRect && bt(n, this.dragStartPosition) > this.dragThreshold && (this.selectionRect = {
        x: this.dragStartPosition.x,
        y: this.dragStartPosition.y,
        width: 0,
        height: 0
      }, this.pendingSnapCandidate = null, this.onStateChange?.()), this.currentAnnotation ? this.updateCurrentAnnotation(n) : this.draggedAnnotation ? this.updateAnnotationDrag(n) : this.resizingAnnotation ? this.updateAnnotationResize(n) : this.selectionRect && this.currentTool === f.Select && this.updateSelectionRect(n, i), this.draw(), this.onStateChange?.();
    else {
      if (this.currentTool === f.Select && !this.selectionRect) {
        this.updateElementSelectionIntent(n);
        const o = this.detectNearbyWindow(n);
        o !== this.snappedWindow && (this.cancelSmartDetection(), this.snappedWindow = o, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !0, this.draw()), this.showSnapPreview || (this.showSnapPreview = !0, this.draw()), o && this.elementSelectionActivated && this.scheduleUiElementDetection(n, o);
      }
      this.updateHoverState(n), this.currentTool === f.ColorPicker && this.selectionRect && (this.coordinateSystem.isPointInRect(
        n,
        this.selectionRect
      ) ? (this.colorPickerState.isVisible = !0, this.colorPickerState.mousePosition = n, this.draw(), this.throttledUpdateColorPreview(n)) : this.colorPickerState.isVisible && (this.colorPickerState.isVisible = !1, this.draw()));
    }
  }
  // 鼠标抬起处理
  handleMouseUp(t) {
    this.eventHandler.getDrawingState().isDrawing && (this.eventHandler.stopDrawing(), this.pendingSnapCandidate && !this.selectionRect && (this.selectionRect = { ...this.pendingSnapCandidate.rect }), this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.showSnapPreview = !1, this.cancelSmartDetection(), this.finishAnnotation(), this.finishAnnotationDrag(), this.finishAnnotationResize(), this.selectionRect && (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10) ? this.selectionRect = null : this.selectionRect && (this.selectionRect.width < 0 && (this.selectionRect.x += this.selectionRect.width, this.selectionRect.width = Math.abs(this.selectionRect.width)), this.selectionRect.height < 0 && (this.selectionRect.y += this.selectionRect.height, this.selectionRect.height = Math.abs(this.selectionRect.height))), this.draw(), this.onStateChange?.());
  }
  // 双击处理
  handleDoubleClick(t) {
    const n = this.coordinateSystem.getCanvasPosition(t), i = this.eventHandler.getAnnotationAtPoint(
      n,
      this.annotations
    );
    (i?.getData().type === f.Text || i?.getData().type === f.Marker) && (this.clearSelection(), i.updateData({ selected: !0 }), this.selectedAnnotation = i, this.startTextInput(n, i));
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
    const n = this.eventHandler.getAnnotationAtPoint(
      t,
      this.annotations
    );
    n && n !== this.selectedAnnotation && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = n, this.selectedAnnotation.updateData({ selected: !0 }), this.selectedAnnotation.getData().type === f.Text && this.startTextInput(t, this.selectedAnnotation), this.draw(), this.onStateChange?.());
  }
  // 开始标注拖拽
  startAnnotationDrag(t) {
    const n = this.eventHandler.getAnnotationAtPoint(
      t,
      this.annotations
    );
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
        const t = this.draggedAnnotation.getData(), n = this.pendingDragSnapshot.annotations.find(
          (o) => o.id === t.id
        );
        (n ? JSON.stringify(n.points) !== JSON.stringify(t.points) : !1) && (this.annotationUndoStack.push(this.pendingDragSnapshot), this.annotationRedoStack = []), this.pendingDragSnapshot = null;
      }
      this.draggedAnnotation = null, this.dragStartPoint = null;
    }
  }
  // 开始标注缩放
  startAnnotationResize(t, n) {
    const i = this.eventHandler.getAnnotationAtPoint(
      t,
      this.annotations
    );
    if (i) {
      this.resizingAnnotation = i, this.resizeOperation = n, this.pendingResizeSnapshot = this.createHistorySnapshot();
      const o = i.getBounds();
      o && (this.resizeStartBounds = { ...o }), this.selectedAnnotation !== i && (this.selectedAnnotation && this.selectedAnnotation.updateData({ selected: !1 }), this.selectedAnnotation = i, this.selectedAnnotation.updateData({ selected: !0 }));
    }
  }
  // 更新标注缩放
  updateAnnotationResize(t) {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation)
      return;
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
        const t = this.resizingAnnotation.getData(), n = this.pendingResizeSnapshot.annotations.find(
          (o) => o.id === t.id
        );
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
    let s = !1;
    const a = [...i.points];
    if (i.points.length >= 2)
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        l.x < o.x ? (a[r] = { ...l, x: o.x }, s = !0) : l.x > o.x + o.width && (a[r] = {
          ...l,
          x: o.x + o.width
        }, s = !0), l.y < o.y ? (a[r] = { ...l, y: o.y }, s = !0) : l.y > o.y + o.height && (a[r] = {
          ...l,
          y: o.y + o.height
        }, s = !0);
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
    if (this.currentTool !== f.Select) {
      this.updateToolCursor();
      return;
    }
    const n = this.eventHandler.getAnnotationAtPoint(
      t,
      this.annotations
    );
    n !== this.hoveredAnnotation && (this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !1 }), this.hoveredAnnotation = n && n.getData().type !== f.Mosaic ? n : null, this.hoveredAnnotation && this.hoveredAnnotation.updateData({ hovered: !0 }), this.draw()), this.updateCursorForPosition(t);
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
      case f.Pen:
        this.updateCursor(this.createPenCursor(this.currentStyle.color));
        break;
      case f.Mosaic:
        this.updateCursor(
          this.createCircleCursor(Math.max(this.mosaicSize * 3, 24), "#666")
        );
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
    if (this.drawingEngine.clear(), this.backgroundImage ? this.drawBackground() : this.drawPendingState(), this.selectionRect && this.drawingEngine.drawMask(
      this.selectionRect,
      this.selectionCornerRadius
    ), this.showSnapPreview && this.getActiveSelectionCandidate() && !this.selectionRect && this.drawSnapPreview(), this.annotations.length > 0) {
      const t = this.editingAnnotation?.getData().type === f.Text ? this.annotations.filter(
        (n) => n.getData().id !== this.editingAnnotation.getData().id
      ) : this.annotations;
      this.drawingEngine.drawAnnotations(
        t,
        this.selectionRect || void 0
      );
    }
    this.currentAnnotation && this.drawingEngine.drawCurrentAnnotation(
      this.currentAnnotation,
      this.selectionRect || void 0
    ), this.selectionRect && this.drawingEngine.drawSelectionBox(
      this.selectionRect,
      this.showGuides,
      this.selectionCornerRadius
    ), this.colorPickerState.isActive && this.selectionRect && this.drawingEngine.drawColorPicker(
      this.colorPickerState,
      this.selectionRect
    ), this.translationOverlay.isVisible && this.selectionRect && this.drawTranslationOverlay();
  }
  // 绘制翻译覆盖层（智能排版）
  drawTranslationOverlay() {
    if (!this.selectionRect) return;
    const t = this.canvas.getContext("2d");
    if (!t) return;
    t.save();
    const { x: n, y: i, width: o, height: s } = this.selectionRect, a = 8;
    if (this.translationOverlay.isLoading) {
      const g = n + o / 2, w = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.7)", t.fillRect(n, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ffffff", t.textAlign = "center", t.textBaseline = "middle";
      let P = "正在识别翻译...";
      this.translationOverlay.engine === "local-ai" && (this.translationOverlay.loadingStage === "starting-service" ? P = "正在启动 AI 模型服务..." : P = "正在由 AI 识图翻译..."), t.fillText(P, g, w), t.restore();
      return;
    }
    if (this.translationOverlay.errorMessage) {
      const g = n + o / 2, w = i + s / 2;
      t.fillStyle = "rgba(0, 0, 0, 0.8)", t.fillRect(n, i, o, s), t.font = '16px "Microsoft YaHei", sans-serif', t.fillStyle = "#ff6b6b", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.translationOverlay.errorMessage, g, w), t.restore();
      return;
    }
    if (this.translationOverlay.blocks.length === 0) {
      t.restore();
      return;
    }
    const r = { x: n, y: i, width: o, height: s }, l = this.sampleRegionColor(r), c = l.brightness < 128;
    let u, d;
    if (c) {
      const g = Math.max(0, Math.round(l.r * 0.1)), w = Math.max(0, Math.round(l.g * 0.1)), P = Math.max(0, Math.round(l.b * 0.1));
      u = `rgba(${g}, ${w}, ${P}, 0.95)`, d = "rgba(255, 255, 255, 0.9)";
    } else {
      const g = Math.min(
        255,
        Math.round(l.r + (255 - l.r) * 0.95)
      ), w = Math.min(
        255,
        Math.round(l.g + (255 - l.g) * 0.95)
      ), P = Math.min(
        255,
        Math.round(l.b + (255 - l.b) * 0.95)
      );
      u = `rgba(${g}, ${w}, ${P}, 0.95)`, d = "rgba(0, 0, 0, 0.85)";
    }
    t.fillStyle = u, t.fillRect(n, i, o, s), t.fillStyle = d, t.textAlign = "left", t.textBaseline = "top";
    const y = this.translationOverlay.paragraphBlocks?.length ? this.translationOverlay.paragraphBlocks : this.translationOverlay.blocks.map(
      (g) => ({
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
      })
    ), v = y.filter(
      (g) => g.isStructuredBlock
    ), S = y.filter(
      (g) => !g.isStructuredBlock
    );
    S.length > 0 && this.drawFlowedTranslationBlocks(
      t,
      S,
      n,
      i,
      a,
      o,
      s
    );
    for (const g of v)
      this.drawStructuredTranslationBlock(
        t,
        g,
        n,
        i,
        a,
        o,
        s
      );
    t.restore();
  }
  drawFlowedTranslationBlocks(t, n, i, o, s, a, r) {
    const l = [...n].filter(
      (T) => (T.translatedText || T.text).trim()
    ).sort((T, W) => {
      const U = T.bbox.y - W.bbox.y;
      return Math.abs(U) > 4 ? U : T.bbox.x - W.bbox.x;
    });
    if (l.length === 0)
      return;
    const c = Math.max(24, r - s * 2), u = s, d = (T, W, U) => l.map((X) => {
      const V = (X.translatedText || X.text).trim(), Y = Math.max(
        12,
        Math.min(X.fontSize || 16, 48)
      ), K = Math.max(8, Math.round(Y * T)), q = X.isCodeBlock ? '"Consolas", "Monaco", monospace' : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif', J = Math.max(
        s,
        Math.min(X.bbox.x + s, a * 0.38)
      ), tt = W ? s : J, st = Math.max(
        48,
        a - tt - u
      ), vt = X.lineHeight || K * 1.35, nt = Math.max(
        K * (U ? 1.04 : 1.14),
        Math.min(vt * T, K * (U ? 1.18 : 1.42))
      );
      return t.font = `${K}px ${q}`, {
        text: V,
        fontSize: K,
        fontFamily: q,
        lineHeight: nt,
        paragraphGap: U ? Math.max(1, nt * 0.16) : Math.max(3, nt * 0.35),
        x: i + tt,
        lines: this.wrapTextToLines(t, V, st)
      };
    }), y = (T) => T.reduce((W, U, X) => {
      const V = X === T.length - 1 ? 0 : U.paragraphGap;
      return W + U.lines.length * U.lineHeight + V;
    }, 0);
    let v = d(1, !1, !1), S = y(v);
    if (S > c) {
      const T = Math.max(0.56, c / S);
      v = d(T, !1, !1), S = y(v);
    }
    if (S > c && (v = d(1, !0, !1), S = y(v)), S > c) {
      const T = Math.max(0.38, c / S * 0.96);
      v = d(T, !0, !0), S = y(v);
    }
    if (S > c) {
      const T = Math.max(0.3, c / S * 0.94);
      v = d(T, !0, !0), S = y(v);
    }
    const g = Math.min(
      ...l.map((T) => T.bbox.y)
    ), w = o + Math.max(s, Math.min(g, r - s)), P = o + r - s;
    let I = w + S > P ? o + s : w;
    for (const T of v) {
      t.font = `${T.fontSize}px ${T.fontFamily}`;
      for (const W of T.lines)
        t.fillText(W, T.x, I), I += T.lineHeight;
      I += T.paragraphGap;
    }
  }
  drawStructuredTranslationBlock(t, n, i, o, s, a, r) {
    const l = [...n.blocks].sort((d, y) => d.x - y.x), c = Math.max(12, Math.min(n.fontSize || 14, 32)), u = n.lineHeight || c * 1.35;
    t.font = `${c}px "Consolas", "Monaco", monospace`;
    for (const d of l) {
      const y = d.translatedText || d.text;
      if (!y.trim()) continue;
      const v = i + d.x + Math.min(4, s), S = o + d.y, g = l.find((T) => T.x > d.x), w = g ? Math.max(d.width, g.x - d.x - 8) : Math.max(d.width, a - d.x - s), P = this.wrapTextToLines(t, y.trim(), w);
      let I = S;
      for (const T of P) {
        if (I + c > o + r) break;
        t.fillText(T, v, I), I += u;
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
    const s = [], a = /\s/.test(o) ? o.split(/(\s+)/).filter((c) => c.length > 0) : Array.from(o);
    let r = "";
    const l = (c) => {
      let u = "";
      for (const d of Array.from(c)) {
        const y = u + d;
        t.measureText(y).width > i && u !== "" ? (s.push(u), u = d) : u = y;
      }
      r = u;
    };
    for (const c of a) {
      const u = /^\s+$/.test(c), d = u ? " " : c, y = r + d;
      if (t.measureText(y).width <= i) {
        r = y;
        continue;
      }
      r.trim() && (s.push(r.trimEnd()), r = ""), !u && (t.measureText(d).width > i ? l(d) : r = d);
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
    const i = {
      r: 255,
      g: 255,
      b: 255,
      brightness: 255
    };
    if (!this.backgroundImage)
      return i;
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), i;
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, y = this.canvas.height / o, v = c / d, S = u / y, g = t.x * v, w = t.y * S, P = t.width * v, I = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        g,
        w,
        P,
        I,
        0,
        0,
        s,
        a
      );
    } catch (j) {
      return A.error("[截图] 采样区域绘制失败", j), this.canvasPool.release(r), i;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (j) {
      return A.error("[截图] 获取像素数据失败", j), this.canvasPool.release(r), i;
    }
    const W = T.data, U = Math.ceil(Math.sqrt(n)), X = s / (U + 1), V = a / (U + 1);
    let Y = 0, K = 0, q = 0, J = 0;
    for (let j = 1; j <= U; j++)
      for (let it = 1; it <= U && !(J >= n); it++) {
        const pt = Math.floor(it * X), rt = Math.floor(j * V);
        if (pt >= 0 && pt < s && rt >= 0 && rt < a) {
          const dt = (rt * s + pt) * 4;
          dt >= 0 && dt + 2 < W.length && (Y += W[dt], K += W[dt + 1], q += W[dt + 2], J++);
        }
      }
    if (this.canvasPool.release(r), J === 0)
      return i;
    const tt = Math.round(Y / J), st = Math.round(K / J), vt = Math.round(q / J), nt = this.getBrightness(tt, st, vt);
    return {
      r: tt,
      g: st,
      b: vt,
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
      const c = Math.max(0, Math.round(t.r * 0.2)), u = Math.max(0, Math.round(t.g * 0.2)), d = Math.max(0, Math.round(t.b * 0.2));
      r = `rgba(${c}, ${u}, ${d}, ${a})`, l = "rgba(255, 255, 255, 0.95)";
    } else {
      const c = Math.min(
        255,
        Math.round(t.r + (255 - t.r) * 0.8)
      ), u = Math.min(
        255,
        Math.round(t.g + (255 - t.g) * 0.8)
      ), d = Math.min(
        255,
        Math.round(t.b + (255 - t.b) * 0.8)
      );
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
  isUniformColor(t, n = 100, i = 16) {
    if (!this.backgroundImage)
      return !1;
    const o = window.devicePixelRatio || 1, s = Math.round(t.width * o), a = Math.round(t.height * o), r = this.canvasPool.acquire(s, a), l = r.getContext("2d");
    if (!l)
      return this.canvasPool.release(r), !1;
    const c = this.backgroundImage.width, u = this.backgroundImage.height, d = this.canvas.width / o, y = this.canvas.height / o, v = c / d, S = u / y, g = t.x * v, w = t.y * S, P = t.width * v, I = t.height * S;
    try {
      l.drawImage(
        this.backgroundImage,
        g,
        w,
        P,
        I,
        0,
        0,
        s,
        a
      );
    } catch (j) {
      return A.error("[截图] isUniformColor: 采样区域绘制失败", j), this.canvasPool.release(r), !1;
    }
    let T;
    try {
      T = l.getImageData(0, 0, s, a);
    } catch (j) {
      return A.error("[截图] isUniformColor: 获取像素数据失败", j), this.canvasPool.release(r), !1;
    }
    const W = T.data, U = Math.ceil(Math.sqrt(i)), X = s / (U + 1), V = a / (U + 1), Y = [];
    for (let j = 1; j <= U; j++)
      for (let it = 1; it <= U && !(Y.length >= i); it++) {
        const pt = Math.floor(it * X), rt = Math.floor(j * V);
        if (pt >= 0 && pt < s && rt >= 0 && rt < a) {
          const dt = (rt * s + pt) * 4;
          dt >= 0 && dt + 2 < W.length && Y.push({
            r: W[dt],
            g: W[dt + 1],
            b: W[dt + 2]
          });
        }
      }
    if (this.canvasPool.release(r), Y.length < 2)
      return !1;
    const K = Y.reduce((j, it) => j + it.r, 0) / Y.length, q = Y.reduce((j, it) => j + it.g, 0) / Y.length, J = Y.reduce((j, it) => j + it.b, 0) / Y.length, tt = Y.reduce((j, it) => j + Math.pow(it.r - K, 2), 0) / Y.length, st = Y.reduce((j, it) => j + Math.pow(it.g - q, 2), 0) / Y.length, vt = Y.reduce((j, it) => j + Math.pow(it.b - J, 2), 0) / Y.length;
    return (tt + st + vt) / 3 < n;
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
    const n = t * 0.8, i = t * 0.85, s = Math.max(
      12,
      Math.min(n, i)
    );
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
    const c = o.font;
    for (; l > 12 && (o.font = `${l}px sans-serif`, !(o.measureText(t).width <= r)); )
      l -= 1;
    return o.font = c, Math.max(l, 12);
  }
  // 绘制窗口吸附预览
  drawSnapPreview() {
    const t = this.getActiveSelectionCandidate();
    if (!t) return;
    const { rect: n } = t, i = this.canvas.getContext("2d");
    i && (i.save(), i.strokeStyle = "#00a8ff", i.lineWidth = 2, i.setLineDash([5, 5]), i.fillStyle = "rgba(0, 168, 255, 0.1)", i.fillRect(n.x, n.y, n.width, n.height), i.strokeRect(n.x, n.y, n.width, n.height), i.restore());
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
    if (rn.isDrawingTool(this.currentTool)) {
      if (this.currentTool === f.Text) {
        this.startTextInput(t);
        return;
      }
      this.currentAnnotation = rn.createAnnotation(
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
    return this.annotations.reduce((t, n) => n.getData().type !== f.Marker ? t : Math.max(t, n.getData().markerNumber || 0), 0) + 1;
  }
  // 更新当前标注
  updateCurrentAnnotation(t) {
    if (!this.currentAnnotation)
      return;
    const n = this.currentAnnotation.getData();
    switch (n.type) {
      case f.Rectangle:
      case f.Ellipse:
      case f.Line:
      case f.Arrow:
        t = Ya(
          n.type,
          n.points[0],
          t,
          this.isShiftPressed
        ), n.points.length === 1 ? this.currentAnnotation.addPoint(t) : this.currentAnnotation.updateLastPoint(t);
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
    const n = this.currentAnnotation.getData().points;
    if (n.length < 3) return;
    let i = n[0].x, o = n[0].x, s = n[0].y, a = n[0].y;
    n.forEach((v) => {
      i = Math.min(i, v.x), o = Math.max(o, v.x), s = Math.min(s, v.y), a = Math.max(a, v.y);
    });
    const r = o - i, l = a - s;
    let c = 0;
    for (let v = 1; v < n.length; v++)
      c += bt(n[v - 1], n[v]);
    const d = bt(n[0], n[n.length - 1]) / c, y = Math.max(r, l) / Math.max(Math.min(r, l), 1);
    if (d > 0.85 || y > 5) {
      const v = n[0], S = n[n.length - 1];
      this.currentAnnotation.updateData({ points: [v, S] });
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
      const t = this.annotations.findIndex(
        (n) => n.getData().id === this.selectedAnnotation.getData().id
      );
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
    const i = rn.createAnnotation(
      f.Text,
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
      const { x: n, y: i, width: o, height: s } = this.selectionRect, r = (await k("get_window_info"))?.scale || 1, l = await this.cropFromBackground(n, i, o, s);
      if (!l?.image)
        throw new Error("无法从背景图像裁剪选区");
      const c = await this.renderWithAnnotations(
        l,
        r,
        t
      );
      t === "copy" ? await k("copy_to_clipboard", { image: c }) : await k("save_screenshot_to_file", { image: c });
    } catch (n) {
      const i = t === "save" ? "保存" : "复制";
      throw A.error(`[截图] ${i}截图失败`, n), new Error(
        `${i}截图失败: ${n?.message || n?.toString() || "未知错误"}`
      );
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
          let kt = 0;
          for (; !this.backgroundImage && kt < 3e3; )
            await new Promise((O) => setTimeout(O, 100)), kt += 100;
          if (!this.backgroundImage)
            throw new Error("背景图像加载超时");
        }
        const c = window.devicePixelRatio || 1, u = Math.max(0, s.padding || 0), d = this.canvas.width / c, y = this.canvas.height / c, v = t - u, S = n - u, g = i + u * 2, w = o + u * 2, P = Math.max(1, Math.round(g * c)), I = Math.max(1, Math.round(w * c)), T = Math.max(0, v), W = Math.max(0, S), U = Math.min(
          d,
          v + g
        ), X = Math.min(
          y,
          S + w
        ), V = Math.max(
          0,
          U - T
        ), Y = Math.max(
          0,
          X - W
        ), K = Math.round(T * c), q = Math.round(W * c), J = Math.min(
          this.canvas.width - K,
          Math.round(V * c)
        ), tt = Math.min(
          this.canvas.height - q,
          Math.round(Y * c)
        ), st = Math.round((T - v) * c), vt = Math.round((W - S) * c), nt = document.createElement("canvas");
        nt.width = P, nt.height = I;
        const j = nt.getContext("2d", {
          alpha: !0,
          desynchronized: !1,
          willReadFrequently: !1
        });
        if (!j)
          throw new Error("无法获取2D绘图上下文");
        j.imageSmoothingEnabled = !1, s.fillColor && (j.fillStyle = s.fillColor, j.fillRect(0, 0, P, I)), J > 0 && tt > 0 && j.drawImage(
          this.backgroundImage,
          K,
          q,
          J,
          tt,
          st,
          vt,
          J,
          tt
        );
        const pt = nt.toDataURL("image/png", 1).replace(/^data:image\/png;base64,/, "");
        clearTimeout(l), a({
          image: pt,
          adjusted_width: P,
          adjusted_height: I,
          logical_x: v,
          logical_y: S,
          logical_width: g,
          logical_height: w
        });
      } catch (c) {
        clearTimeout(l), r(new Error(`裁剪背景图像失败: ${c.message || c}`));
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
      const c = new Image();
      c.onload = () => {
        try {
          if (l.drawImage(c, 0, 0), this.annotations.length > 0 && this.selectionRect) {
            const y = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n, v = {
              x: t.logical_x,
              y: t.logical_y,
              width: t.logical_width,
              height: t.logical_height
            }, S = this.drawingEngine.createScreenshotContext(
              l,
              y,
              v
            );
            this.annotations.forEach((g, w) => {
              try {
                g.drawToScreenshot(S);
              } catch (P) {
                A.error(`[截图] 绘制标注 ${w} 失败`, P);
              }
            });
          }
          const u = Un(
            this.selectionCornerRadius,
            t.logical_width,
            t.logical_height
          );
          if (u > 0) {
            const y = t.logical_width > 0 ? t.adjusted_width / t.logical_width : n;
            l.save(), l.globalCompositeOperation = "destination-in", l.fillStyle = "#000", l.beginPath(), l.roundRect(
              0,
              0,
              r.width,
              r.height,
              u * y
            ), l.fill(), l.restore();
          }
          let d;
          d = r.toDataURL("image/png"), clearTimeout(a), o(d);
        } catch (u) {
          A.error("[截图] 绘制过程出错", u);
          try {
            const d = r.toDataURL("image/png");
            clearTimeout(a), o(d);
          } catch {
            clearTimeout(a), s(new Error(`渲染失败: ${u.message || u}`));
          }
        }
      }, c.onerror = (u) => {
        A.error("[截图] 图像加载失败", u), clearTimeout(a), s(new Error("图像加载失败"));
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
    const n = this.annotations.findIndex((i) => i === t);
    n !== -1 && (this.pushAnnotationHistory(), this.annotations.splice(n, 1), this.selectedAnnotation === t && (this.selectedAnnotation = null), this.editingAnnotation === t && (this.editingAnnotation = null), this.draw(), this.onStateChange?.());
  }
  // 更新文字或序号标记的说明内容
  updateTextAnnotation(t, n) {
    if (t.getData().type === f.Text || t.getData().type === f.Marker) {
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
        const { x: n, y: i, width: o, height: s } = this.selectionRect, a = await k("get_window_info"), r = a?.scale || 1, l = Math.round(a.x + n * r), c = Math.round(a.y + i * r), u = Math.round(o * r), d = Math.round(s * r), y = Math.round(a.x + window.innerWidth * r), v = Math.round(
          a.y + window.innerHeight * r
        ), S = t === "ocr" ? Math.min(
          Math.max(u, 760),
          Math.max(360, y - a.x)
        ) : u, g = t === "ocr" ? Math.min(
          Math.max(d, 520),
          Math.max(260, v - a.y)
        ) : d, w = t === "ocr" ? Math.round(l - Math.max(0, S - u) / 2) : l, P = t === "ocr" ? Math.max(
          a.x,
          Math.min(w, y - S)
        ) : l, I = t === "ocr" ? Math.max(
          a.y,
          Math.min(c, v - g)
        ) : c, T = {}, W = await this.cropFromBackground(
          n,
          i,
          o,
          s,
          T
        );
        if (!W?.image)
          throw new Error("Failed to crop from background image");
        const U = await this.renderWithAnnotations(
          W,
          r,
          "save"
        );
        await k("create_pin_window", {
          mode: t,
          imageData: U,
          x: P,
          y: I,
          width: S,
          height: g
        }), this.onStateChange?.(), setTimeout(() => {
          new en("screenshot").close();
        }, 100);
      } catch (n) {
        throw A.error(
          `[截图] 创建${t === "ocr" ? "文字识别" : "贴图"}窗口失败`,
          n
        ), n;
      }
  }
  // 处理颜色取样
  async handleColorPicking(t) {
    if (this.selectionRect)
      try {
        const n = await k("get_window_info"), i = n?.scale || 1, o = Math.round(
          n.x + (this.selectionRect.x + t.x - this.selectionRect.x) * i
        ), s = Math.round(
          n.y + (this.selectionRect.y + t.y - this.selectionRect.y) * i
        ), a = await k("get_pixel_color", {
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
        A.error("[截图] 获取像素颜色失败", n);
      }
  }
  // 实时更新颜色预览（鼠标移动时调用）
  async updateColorPreview(t) {
    if (this.selectionRect)
      try {
        const n = await k("get_window_info"), i = n?.scale || 1, o = this.colorPickerState.zoomFactor, s = Math.floor(o / 2), a = Math.round(n.x + t.x * i), r = Math.round(n.y + t.y * i), l = await k("get_screen_preview", {
          x: a - s,
          y: r - s,
          width: o,
          height: o
        }), c = new Image();
        c.src = `data:image/png;base64,${l.image}`, await c.decode();
        const u = await createImageBitmap(c);
        this.colorPickerState.previewImage?.close?.(), this.colorPickerState.previewImage = u;
        const y = new OffscreenCanvas(o, o).getContext("2d");
        if (y) {
          y.drawImage(u, 0, 0, o, o);
          const v = y.getImageData(
            s,
            s,
            1,
            1
          ).data, S = { r: v[0], g: v[1], b: v[2] }, g = this.rgbToHex(S.r, S.g, S.b);
          this.colorPickerState.colorInfo = {
            rgb: S,
            hex: g,
            position: t
          };
        }
        this.draw();
      } catch (n) {
        A.error("[截图] 更新颜色预览失败", n);
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
        const { x: r, y: l, width: c, height: u } = this.selectionRect, d = window.devicePixelRatio || 1, y = c * d, v = u * d, S = this.canvasPool.acquire(y, v), g = S.getContext("2d");
        if (!g)
          throw this.canvasPool.release(S), new Error("无法创建临时canvas");
        const w = r * d, P = l * d, I = performance.now();
        g.drawImage(
          this.backgroundImage,
          w,
          P,
          y,
          v,
          0,
          0,
          y,
          v
        ), n = Math.round(performance.now() - I);
        const T = performance.now(), { recognizeFromCanvas: W } = await pe.loadOCR();
        i = Math.round(performance.now() - T);
        const U = performance.now(), X = await W(S);
        o = Math.round(performance.now() - U), this.canvasPool.release(S);
        const V = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          confidence: X.confidence,
          rawLineCount: X.blocks.length,
          textLength: X.full_text.trim().length
        };
        A.info("[OCR] 识别耗时统计", V), wt.log("[OCR] recognition timing", V);
        const Y = X.blocks, K = performance.now(), q = nc(Y);
        s = Math.round(performance.now() - K);
        const J = q.map((M) => M.text).join(`

`), tt = {
          rawLineCount: Y.length,
          paragraphCount: q.length,
          durationMs: s,
          paragraphs: q.map((M, et) => ({
            index: et,
            text: M.text,
            blockCount: M.blocks.length,
            isCodeBlock: !!M.isCodeBlock,
            isStructuredBlock: !!M.isStructuredBlock,
            bbox: M.bbox,
            sourceBlocks: M.blocks.map((ht) => ({
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
        const st = this.translationOverlay.engine;
        this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(
          me(J)
        );
        const vt = (M) => {
          const et = M.trim();
          return !!(et.match(
            /^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/
          ) && !et.match(
            /^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i
          ));
        };
        let nt = "";
        const j = me(J), it = {
          detectedLanguage: j,
          textLength: J.trim().length,
          textPreview: J.trim().slice(0, 500)
        };
        A.info("[OCR] 翻译语言检测完成", it), wt.log(
          "[OCR] translation language detected",
          it
        ), Pe(j) && (this.translationOverlay.sourceLanguage = j, this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(j));
        const pt = st === "offline" ? pe.loadOfflineTranslator() : null, rt = (M) => M.includes("插件") && M.includes("未启用") ? M.includes("translation") ? "OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件" : M : st === "offline" ? M.includes("未激活") || M.includes("未下载") || M.includes("运行时未安装") ? M : M.includes("超时") ? "模型加载超时，请重试" : M.includes("离线翻译暂仅支持") ? M : "离线翻译失败: " + M.substring(0, 50) : M.includes("timeout") || M.includes("超时") ? "翻译超时，请检查网络连接" : M.includes("network") || M.includes("网络") || M.includes("请求") || M.includes("令牌") ? "翻译失败，请检查网络连接" : M.trim() ? M.slice(0, 80) : "翻译失败，请检查网络连接", dt = async () => {
          if (!pt)
            throw new Error("离线翻译模块未加载");
          const {
            translateOffline: M,
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
          return M;
        }, kt = async (M, et, ht) => {
          if (!M.trim())
            return M;
          if (st === "offline") {
            if (et !== "en" || ht !== "zh")
              throw new Error(
                "离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英"
              );
            return (await dt())(M);
          }
          return await k("translate_text", {
            text: M,
            from: et,
            to: ht,
            engine: st
          });
        }, O = (M) => {
          const et = M.trim();
          return /^(?:option|description|name|value|type|default|example|required)$/i.test(
            et
          ) ? !1 : /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(et);
        }, zt = async (M, et, ht) => {
          const lt = M.trim();
          if (!lt || vt(lt))
            return M;
          const Tt = M.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/);
          if (Tt) {
            const [, ut, ft, Q, St, Lt] = Tt, Et = me(ft), ee = O(ft) || !Pe(Et) ? ft : await kt(
              ft,
              Et,
              this.getAutoTargetLanguage(Et)
            ), re = me(St), qt = Pe(re) && !vt(St) ? await kt(
              St,
              re,
              this.getAutoTargetLanguage(re)
            ) : St;
            return `${ut}${ee}${Q}${qt}${Lt}`;
          }
          if (O(lt))
            return M;
          const yt = me(lt);
          if (!Pe(yt))
            return M;
          const Yt = this.getAutoTargetLanguage(yt), b = await kt(
            lt,
            yt,
            Yt
          ), B = {
            paragraphIndex: et,
            blockIndex: ht,
            sourceLanguage: yt,
            targetLanguage: Yt,
            sourceText: lt,
            translatedText: b.slice(0, 200)
          };
          return A.info("[OCR] 结构化块翻译完成", B), wt.log(
            "[OCR] structured block translation complete",
            B
          ), b;
        }, N = async (M, et) => {
          const ht = performance.now(), lt = (b) => ({
            index: et,
            durationMs: Math.round(performance.now() - ht),
            ...b
          }), Tt = me(
            M.text
          ), yt = this.getAutoTargetLanguage(
            Tt
          ), Yt = {
            index: et,
            text: M.text,
            sourceLanguage: Tt,
            targetLanguage: yt,
            engine: st,
            structured: !!M.isStructuredBlock
          };
          if (A.info("[OCR] 段落翻译方向", Yt), wt.log(
            "[OCR] paragraph translation direction",
            Yt
          ), !Pe(Tt)) {
            M.translatedText = M.text;
            const b = lt({
              skipped: !0,
              cancelled: !1,
              errorMessage: "部分文本暂不支持翻译，已保留原文"
            }), B = {
              index: et,
              detectedLanguage: Tt,
              durationMs: b.durationMs,
              text: M.text
            };
            return A.warn("[OCR] 跳过不支持的段落语言", B), wt.log(
              "[OCR] skip unsupported paragraph language",
              B
            ), b;
          }
          try {
            if (M.isStructuredBlock && M.blocks.length > 0) {
              const ut = async (Q, St) => {
                const Lt = await zt(
                  Q.text,
                  et,
                  St
                );
                return Q.translatedText = Lt, Lt;
              }, ft = [];
              if (st === "offline")
                for (let Q = 0; Q < M.blocks.length; Q += 1)
                  ft.push(
                    await ut(M.blocks[Q], Q)
                  );
              else
                ft.push(
                  ...await Promise.all(
                    M.blocks.map(
                      (Q, St) => ut(Q, St)
                    )
                  )
                );
              M.translatedText = ft.join(" ");
            } else if (vt(M.text) || M.isCodeBlock) {
              M.translatedText = M.text;
              const ut = M.isCodeBlock ? "code_block" : "command_like_text", ft = lt({ skipped: !0, cancelled: !1 }), Q = {
                index: et,
                reason: ut,
                durationMs: ft.durationMs,
                text: M.text
              };
              return A.info("[OCR] 跳过代码段翻译", Q), wt.log(
                "[OCR] skip code paragraph translation",
                Q
              ), ft;
            } else
              M.translatedText = await kt(
                M.text,
                Tt,
                yt
              );
            const b = lt({ skipped: !1, cancelled: !1 }), B = {
              index: et,
              durationMs: b.durationMs,
              sourceLanguage: Tt,
              targetLanguage: yt,
              engine: st,
              structured: !!M.isStructuredBlock,
              sourceLength: M.text.length,
              translatedLength: (M.translatedText || "").length,
              translatedPreview: (M.translatedText || "").slice(0, 300)
            };
            return A.info("[OCR] 段落翻译完成", B), wt.log(
              "[OCR] paragraph translation complete",
              B
            ), b;
          } catch (b) {
            const B = b instanceof Error ? b.message : String(b);
            if (B === "翻译已取消")
              return lt({ skipped: !1, cancelled: !0 });
            M.translatedText = M.text;
            const ut = rt(B), ft = lt({
              skipped: !1,
              cancelled: !1,
              errorMessage: ut
            }), Q = {
              index: et,
              durationMs: ft.durationMs,
              sourceLanguage: Tt,
              targetLanguage: yt,
              engine: st,
              error: B,
              structured: !!M.isStructuredBlock,
              text: M.text
            };
            return A.error("[OCR] 段落翻译失败", Q), wt.log(
              "[OCR] paragraph translation failed",
              Q
            ), ft;
          }
        }, _t = performance.now();
        let gt = [];
        if (st === "offline")
          for (let M = 0; M < q.length; M += 1) {
            const et = await N(q[M], M);
            if (gt.push(et), et.cancelled)
              return;
            if (et.errorMessage) {
              nt = et.errorMessage;
              break;
            }
          }
        else {
          if (gt = await Promise.all(
            q.map(
              (M, et) => N(M, et)
            )
          ), gt.some((M) => M.cancelled))
            return;
          nt = gt.find((M) => M.errorMessage)?.errorMessage || "";
        }
        a = Math.round(
          performance.now() - _t
        );
        const Pt = {
          durationMs: a,
          engine: st,
          paragraphCount: q.length,
          translatedParagraphCount: gt.filter(
            (M) => !M.skipped && !M.errorMessage
          ).length,
          skippedParagraphCount: gt.filter(
            (M) => M.skipped
          ).length,
          failedParagraphCount: gt.filter(
            (M) => !!M.errorMessage
          ).length
        };
        A.info("[OCR] 翻译耗时统计", Pt), wt.log(
          "[OCR] translation timing",
          Pt
        );
        const Bt = q.map(
          (M) => this.toDisplayParagraph(M, d)
        ), Kt = Bt.map(
          (M) => this.toLegacyOverlayBlock(M)
        );
        this.translationOverlay.blocks = Kt, this.translationOverlay.paragraphBlocks = Bt, this.translationOverlay.isLoading = !1, this.translationOverlay.errorMessage = nt || void 0;
        const Ft = {
          cropDurationMs: n,
          ocrModuleLoadDurationMs: i,
          ocrRecognitionDurationMs: o,
          reflowDurationMs: s,
          translationDurationMs: a,
          totalDurationMs: Math.round(performance.now() - t),
          rawLineCount: Y.length,
          paragraphCount: q.length,
          engine: st
        };
        A.info("[OCR] 截图翻译总耗时统计", Ft), wt.log("[OCR] pipeline timing", Ft), this.draw(), this.onStateChange?.();
      } catch (t) {
        A.error("[OCR] OCR翻译失败:", t);
        const n = t instanceof Error ? t.message : String(t);
        this.translationOverlay.isLoading = !1, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(n), this.draw(), this.onStateChange?.();
      }
    }
  }
  async performVisionTranslation() {
    if (!(!this.selectionRect || !this.backgroundImage))
      try {
        const { x: t, y: n, width: i, height: o } = this.selectionRect;
        this.translationOverlay.loadingStage = "starting-service", this.draw(), this.onStateChange?.(), (await es(Dt)).running || (A.info("[截图] AI 服务未运行，正在启动..."), await Jl(Dt), A.info("[截图] AI 服务启动完成"));
        const a = await this.cropFromBackground(t, n, i, o);
        if (!a?.image)
          throw new Error("无法获取截图选区图像");
        this.translationOverlay.loadingStage = "translating", this.draw(), this.onStateChange?.(), await new Promise((w) => setTimeout(w, 100));
        const l = (await ns(
          {
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
          },
          {
            providerId: Dt,
            capability: "vision",
            contextCollection: {
              kind: "selection",
              input: {
                selectionText: "Selected screenshot region for visual translation",
                selectionSource: "screenshot.visual-translation",
                selectionMetadata: {
                  x: t,
                  y: n,
                  width: i,
                  height: o
                }
              }
            }
          }
        )).content.trim();
        if (!l)
          throw new Error("AI 未返回可显示的翻译结果");
        const c = Math.max(14, Math.min(20, Math.round(o / 18))), u = Math.max(
          18,
          Math.min(28, Math.round(o / 12))
        ), d = l.split(/\n\n+/).filter((w) => w.trim()), y = Math.max(d.length, 1), v = (o - 16) / y, S = d.map(
          (w, P) => {
            const I = P * v + 8, T = P === y - 1 ? o - I - 8 : v, W = {
              text: "",
              translatedText: w.trim(),
              x: 0,
              y: I,
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
              bbox: { x: 0, y: I, width: i, height: T },
              isCodeBlock: !1,
              isStructuredBlock: !1,
              fontSize: c,
              lineHeight: u,
              angle: 0
            };
          }
        ), g = S.length > 0 ? S : [
          {
            text: "",
            translatedText: l,
            blocks: [
              {
                text: "",
                translatedText: l,
                x: 0,
                y: 0,
                width: i,
                height: o,
                fontSize: c,
                lineHeight: u,
                angle: 0
              }
            ],
            bbox: { x: 0, y: 0, width: i, height: o },
            isCodeBlock: !1,
            isStructuredBlock: !1,
            fontSize: c,
            lineHeight: u,
            angle: 0
          }
        ];
        this.translationOverlay.blocks = g.map(
          (w) => w.blocks[0]
        ), this.translationOverlay.paragraphBlocks = g, this.translationOverlay.sourceLanguage = "auto", this.translationOverlay.targetLanguage = "zh", this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.errorMessage = void 0, this.draw(), this.onStateChange?.();
      } catch (t) {
        const n = t instanceof Error ? t.message : String(t);
        A.error("[截图] AI 识图翻译失败", t), this.translationOverlay.isLoading = !1, this.translationOverlay.loadingStage = void 0, this.translationOverlay.isVisible = !0, this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.errorMessage = n.includes("mmproj") || n.includes("vision") ? "AI 翻译需要在“本地 AI”中配置视觉模型（mmproj）" : `AI 识图翻译失败：${n.slice(0, 80)}`, this.draw(), this.onStateChange?.();
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
      const { cancelOfflineTranslation: t } = await pe.loadOfflineTranslator();
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
    pe.loadOfflineTranslator().then(({ cancelOfflineTranslation: n }) => n()).catch(() => {
    }), this.canvasPool.clear(), this.throttleTimer && (cancelAnimationFrame(this.throttleTimer), this.throttleTimer = null), this.cancelSmartDetection(), this.backgroundImage && (this.backgroundImage.onload = null, this.backgroundImage.onerror = null, this.backgroundImage.src = "", this.backgroundImage = null, this.visualElementDetector = null), this.annotations.forEach((n) => {
      typeof n.destroy == "function" && n.destroy();
    }), this.annotations = [], this.annotationUndoStack = [], this.annotationRedoStack = [], this.pendingDragSnapshot = null, this.pendingResizeSnapshot = null, this.currentAnnotation = null, this.selectedAnnotation = null, this.hoveredAnnotation = null, this.draggedAnnotation = null, this.resizingAnnotation = null, this.editingAnnotation = null, this.selectionRect = null, this.dragStartPoint = null, this.resizeStartBounds = null, this.resizeOperation = null, this.pendingSnapCandidate = null, this.dragStartPosition = null, this.snappedWindow = null, this.snappedElement = null, this.elementCandidateStabilizer.reset(), this.allWindows = [], this.translationOverlay.blocks = [], this.translationOverlay.paragraphBlocks = [], this.translationOverlay.isVisible = !1, this.translationOverlay.isLoading = !1, this.colorPickerState.previewImage && (this.colorPickerState.previewImage.close?.(), this.colorPickerState.previewImage = void 0), this.colorPickerState.isActive = !1, this.colorPickerState.isVisible = !1, this.colorPickerState.isCopied = !1, this.colorPickerState.colorInfo = void 0, this.eventHandler.unbind(), this.canvas.removeEventListener("mousedown", this.mouseDownHandler), this.canvas.removeEventListener("mousemove", this.mouseMoveHandler), this.canvas.removeEventListener("mouseup", this.mouseUpHandler), this.canvas.removeEventListener("dblclick", this.doubleClickHandler), window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("keyup", this.keyUpHandler), this.onStateChange = void 0, this.onTextInputRequest = void 0, this.onColorPicked = void 0;
    const t = this.canvas.getContext("2d");
    t && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.restore());
  }
}
var qc = {
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
function Jc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Qc(e, t, n) {
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
var th = Symbol("icon-context");
function ot(e, t, n) {
  var i = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = Jc(), r = ve(th, qc);
      return function() {
        var l = s.size, c = s.strokeWidth, u = s.strokeLinecap, d = s.strokeLinejoin, y = s.theme, v = s.fill, S = s.spin, g = Qc(a, {
          size: l,
          strokeWidth: c,
          strokeLinecap: u,
          strokeLinejoin: d,
          theme: y,
          fill: v
        }, r), w = [r.prefix + "-icon"];
        return w.push(r.prefix + "-icon-" + e), t && r.rtl && w.push(r.prefix + "-icon-rtl"), S && w.push(r.prefix + "-icon-spin"), m("span", {
          class: w.join(" ")
        }, [n(g)]);
      };
    }
  };
  return i;
}
const eh = ot("arrow-right-up", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M19 11H37V29",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M11.5439 36.4559L36.9997 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Kn = ot("check", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M43 11L16.875 37L5 25.1818",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qn = ot("close", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 8L40 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M8 40L40 8",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), un = ot("copy", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), nh = ot("delete-four", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 11L40 11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M18 5L30 5",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), co = ot("down", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ih = ot("download", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 24.0083V42H42V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M33 23L24 32L15 23",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M23.9917 6V32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oh = ot("font-size", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 10.9333L8 6H40V10.9333",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M24 6V42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M16 42H32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), sh = ot("go-on", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36 7L43 13.4615L36 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ah = ot("left", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M31 36L19 24L31 12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rh = ot("list-numbers", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M20 9H42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M20 19H42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M20 29H42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M20 39H42",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 29H12V32L6 38V39H12",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M7 11L9 9V19M9 19H7M9 19H11",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ho = ot("loading", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), jn = ot("magic", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M29.5856 18.4143L5.54395 42.4559",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), cs = ot("minus", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), lh = ot("more", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), m("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), m("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), ch = ot("mosaic", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M44 36H36V44H44V36Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M28 36H20V44H28V36Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M12 36H4V44H12V36Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M44 20H36V28H44V20Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M28 20H20V28H28V20Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M12 20H4V28H12V20Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M44 4H36V12H44V4Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M28 4H20V12H28V4Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M12 4H4V12H12V4Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M20 12H12V20H20V12Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M20 28H12V36H20V28Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M36 12H28V20H36V12Z",
    fill: e.colors[0]
  }, null), m("path", {
    d: "M36 28H28V36H36V28Z",
    fill: e.colors[0]
  }, null)]);
}), hh = ot("move-one", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M8 6L43 25L24 27L13.9948 44L8 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), uo = ot("pin", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("g", {
    "clip-path": "url(#" + e.id + "1c742167)"
  }, [m("path", {
    d: "M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]), m("defs", null, [m("clipPath", {
    id: e.id + "1c742167"
  }, [m("rect", {
    width: "48",
    height: "48",
    fill: e.colors[2]
  }, null)])])]);
}), go = ot("platte", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jn = ot("pushpin", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), uh = ot("rectangle-one", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), dh = ot("redo", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M42 8V17H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), gh = ot("return", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M12.9998 8L6 14L12.9998 21",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fh = ot("right", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), mh = ot("round", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), fo = ot("save", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6",
    fill: e.colors[3]
  }, null), m("path", {
    d: "M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M9 6H34.2814",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M14 26H34",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M14 34H24.0083",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ph = ot("square", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Qn = ot("text-recognition", !1, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M6 33V39C6 40.6569 7.34315 42 9 42H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M33 42H39C40.6569 42 42 40.6569 42 39V33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M42 15V9C42 7.34315 40.6569 6 39 6H33",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 15V9C6 7.34315 7.34315 6 9 6H15",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M24 15V35",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M17 15H24H31",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), hs = ot("translate", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yh = ot("write", !0, function(e) {
  return m("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [m("path", {
    d: "M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), m("path", {
    d: "M27.9521 12.3872L36.4374 20.8725",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wh = { class: "toolbar-panel first-panel" }, vh = { class: "tool-section" }, xh = ["onClick", "title", "aria-pressed"], kh = { class: "action-section" }, bh = ["disabled", "title"], Sh = ["disabled", "title"], Ch = ["disabled", "title"], Mh = ["title"], _h = ["title"], Th = ["title"], Rh = {
  key: 0,
  class: "toolbar-panel second-panel"
}, zh = { class: "style-section" }, Ph = {
  key: 0,
  class: "style-group opacity-group"
}, Lh = { class: "style-label" }, Ah = ["value", "title", "aria-label"], Ih = { class: "style-value" }, Dh = {
  key: 1,
  class: "style-group"
}, Eh = { class: "style-label" }, Oh = { class: "line-width-selector" }, $h = ["onClick", "title", "aria-pressed"], Wh = { class: "style-value" }, Bh = {
  key: 2,
  class: "style-divider"
}, Nh = {
  key: 3,
  class: "style-group opacity-group"
}, Hh = { class: "style-label" }, jh = ["value", "title", "aria-label"], Fh = { class: "style-value" }, Vh = {
  key: 4,
  class: "style-divider"
}, Uh = {
  key: 5,
  class: "style-group color-picker-group"
}, Yh = { class: "style-label" }, Xh = { class: "color-row" }, Zh = ["onClick", "title", "aria-pressed"], Gh = { class: "custom-color-wrapper" }, Kh = ["title"], qh = ["value", "title", "aria-label"], Jh = {
  key: 6,
  class: "style-group"
}, Qh = { class: "style-label" }, tu = { class: "text-size-selector" }, eu = ["onClick", "title", "aria-pressed"], nu = { class: "style-value" }, iu = {
  key: 7,
  class: "style-group"
}, ou = { class: "style-label" }, su = { class: "mosaic-size-selector" }, au = ["onClick", "title", "aria-pressed"], ru = { class: "style-value" }, lu = {
  key: 8,
  class: "style-group"
}, cu = { class: "style-label" }, hu = { class: "translate-engine-selector" }, uu = ["onClick", "title", "aria-pressed"], du = /* @__PURE__ */ Mt({
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
  setup(e, { expose: t, emit: n }) {
    const i = E(null), { t: o } = Io(), s = e, a = n, r = D(() => [
      { type: f.Select, icon: hh, title: o("screenshot.select") },
      {
        type: f.Rectangle,
        icon: uh,
        title: o("screenshot.rectangle")
      },
      { type: f.Ellipse, icon: mh, title: o("screenshot.ellipse") },
      { type: f.Line, icon: cs, title: o("screenshot.line") },
      { type: f.Arrow, icon: eh, title: o("screenshot.arrow") },
      { type: f.Pen, icon: yh, title: o("screenshot.pen") },
      { type: f.Mosaic, icon: ch, title: o("screenshot.mosaic") },
      { type: f.Text, icon: oh, title: o("screenshot.text") },
      { type: f.Marker, icon: rh, title: o("screenshot.marker") },
      {
        type: f.ColorPicker,
        icon: go,
        title: o("screenshot.colorPicker")
      },
      { type: f.Ocr, icon: Qn, title: o("screenshot.ocr") },
      {
        type: f.Translate,
        icon: hs,
        title: o("screenshot.translate")
      },
      { type: f.Pin, icon: Jn, title: o("screenshot.pin") }
    ]), l = D(() => [
      { value: "google", label: "Google", short: "G" },
      { value: "bing", label: o("translate.bingTranslate"), short: "B" },
      {
        value: "offline",
        label: o("translate.offlineTranslate"),
        short: o("translate.offlineMark")
      },
      {
        value: "local-ai",
        label: o("translate.localAiTranslate"),
        short: "AI"
      }
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
    ], d = [12, 14, 16, 18, 20, 24], y = [8, 12, 16, 20], v = D(
      () => ![f.ColorPicker, f.Ocr, f.Pin].includes(
        s.currentTool
      )
    ), S = D(
      () => s.currentTool === f.Select
    ), g = D(
      () => [
        f.Rectangle,
        f.Ellipse,
        f.Line,
        f.Arrow,
        f.Pen
      ].includes(s.currentTool)
    ), w = D(
      () => [
        f.Rectangle,
        f.Ellipse,
        f.Line,
        f.Arrow,
        f.Pen,
        f.Text,
        f.Marker
      ].includes(s.currentTool)
    ), P = D(
      () => [
        f.Rectangle,
        f.Ellipse,
        f.Line,
        f.Arrow,
        f.Pen,
        f.Mosaic,
        f.Text,
        f.Marker
      ].includes(s.currentTool)
    ), I = D(
      () => s.currentTool === f.Text || s.currentTool === f.Marker
    ), T = D(() => s.currentTool === f.Mosaic), W = D(
      () => s.currentTool === f.Translate
    ), U = (O) => a("tool-select", O), X = (O) => a("color-change", O), V = (O) => a("line-width-change", O), Y = (O) => {
      a(
        "opacity-change",
        Number(O.target.value) / 100
      );
    }, K = (O) => a("text-size-change", O), q = (O) => a("mosaic-size-change", O), J = (O) => {
      a(
        "selection-corner-radius-change",
        Number(O.target.value)
      );
    }, tt = () => a("undo"), st = () => a("redo"), vt = () => a("delete"), nt = () => a("save"), j = () => a("confirm"), it = () => a("cancel"), pt = (O) => {
      a("translate-engine-change", O);
    }, rt = (O) => {
      X(O);
    }, dt = (O) => {
      const zt = O.target;
      zt.value && X(zt.value);
    }, kt = () => {
      const O = i.value?.getBoundingClientRect();
      return {
        width: O?.width ?? 590,
        height: O?.height ?? 50
      };
    };
    return Qe(
      () => s.currentTool,
      () => {
        ie(() => {
          window.dispatchEvent(
            new CustomEvent("screenshot-toolbar-resize", {
              detail: kt()
            })
          );
        });
      },
      { immediate: !0 }
    ), t({
      getToolbarSize: kt
    }), (O, zt) => (L(), $(
      "div",
      {
        ref_key: "toolbarContainerRef",
        ref: i,
        class: "toolbar-container"
      },
      [
        H(" 第一个面板：工具选择 + 操作按钮 "),
        x("div", wh, [
          H(" 工具选择区域 "),
          x("div", vh, [
            (L(!0), $(
              Vt,
              null,
              te(r.value, (N) => (L(), $("button", {
                key: N.type,
                onClick: (_t) => U(N.type),
                class: at(["tool-btn", { active: O.currentTool === N.type }]),
                title: N.title,
                "aria-pressed": O.currentTool === N.type
              }, [
                (L(), Ct(we(N.icon), {
                  theme: "outline",
                  size: "18",
                  strokeWidth: 2.5
                }))
              ], 10, xh))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          H(" 分隔线 "),
          zt[0] || (zt[0] = x(
            "div",
            { class: "toolbar-divider" },
            null,
            -1
            /* HOISTED */
          )),
          H(" 操作按钮区域 "),
          x("div", kh, [
            x("button", {
              onClick: tt,
              disabled: !O.canUndo,
              class: "action-btn undo",
              title: C(o)("screenshot.undo")
            }, [
              m(C(gh), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, bh),
            x("button", {
              onClick: st,
              disabled: !O.canRedo,
              class: "action-btn redo",
              title: C(o)("screenshot.redo")
            }, [
              m(C(sh), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Sh),
            x("button", {
              onClick: vt,
              disabled: !O.canDelete,
              class: "action-btn delete",
              title: C(o)("screenshot.delete")
            }, [
              m(C(nh), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Ch),
            x("button", {
              onClick: it,
              class: "action-btn cancel",
              title: C(o)("screenshot.cancel")
            }, [
              m(C(qn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Mh),
            x("button", {
              onClick: nt,
              class: "action-btn save",
              title: C(o)("screenshot.save")
            }, [
              m(C(ih), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, _h),
            x("button", {
              onClick: j,
              class: "action-btn confirm",
              title: C(o)("screenshot.confirm")
            }, [
              m(C(Kn), {
                theme: "outline",
                size: "18",
                strokeWidth: 2.5
              })
            ], 8, Th)
          ])
        ]),
        H(" 第二个面板：样式设置区域 "),
        v.value ? (L(), $("div", Rh, [
          x("div", zh, [
            S.value ? (L(), $("div", Ph, [
              x(
                "span",
                Lh,
                F(C(o)("screenshot.cornerRadius")),
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
                style: ct({
                  "--opacity-color": "#2e90fa",
                  "--opacity-progress": `${O.currentSelectionCornerRadius / 80 * 100}%`
                }),
                title: `${O.currentSelectionCornerRadius}px`,
                "aria-label": C(o)("screenshot.cornerRadius"),
                onInput: J
              }, null, 44, Ah),
              x(
                "span",
                Ih,
                F(O.currentSelectionCornerRadius) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 线宽设置 "),
            g.value ? (L(), $("div", Dh, [
              x(
                "span",
                Eh,
                F(C(o)("screenshot.lineWidth")),
                1
                /* TEXT */
              ),
              x("div", Oh, [
                (L(), $(
                  Vt,
                  null,
                  te(c, (N) => x("button", {
                    key: N,
                    onClick: (_t) => V(N),
                    class: at(["width-btn", { active: O.currentLineWidth === N }]),
                    title: `${N}px`,
                    "aria-pressed": O.currentLineWidth === N
                  }, [
                    x(
                      "span",
                      {
                        class: "line-preview",
                        style: ct({ height: `${N}px`, backgroundColor: O.currentColor })
                      },
                      null,
                      4
                      /* STYLE */
                    )
                  ], 10, $h)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                Wh,
                F(O.currentLineWidth) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            g.value && w.value ? (L(), $("div", Bh)) : H("v-if", !0),
            H(" 不透明度设置 "),
            P.value ? (L(), $("div", Nh, [
              x(
                "span",
                Hh,
                F(C(o)("screenshot.opacity")),
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
                style: ct({
                  "--opacity-color": O.currentColor,
                  "--opacity-progress": `${Math.round(O.currentOpacity * 100)}%`
                }),
                title: `${Math.round(O.currentOpacity * 100)}%`,
                "aria-label": C(o)("screenshot.opacity"),
                onInput: Y
              }, null, 44, jh),
              x(
                "span",
                Fh,
                F(Math.round(O.currentOpacity * 100)) + "% ",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            P.value && w.value ? (L(), $("div", Vh)) : H("v-if", !0),
            H(" 颜色设置 "),
            w.value ? (L(), $("div", Uh, [
              x(
                "span",
                Yh,
                F(C(o)("screenshot.color")),
                1
                /* TEXT */
              ),
              x("div", Xh, [
                (L(), $(
                  Vt,
                  null,
                  te(u, (N) => x("button", {
                    key: N,
                    onClick: (_t) => rt(N),
                    class: at(["color-btn", { active: O.currentColor === N }]),
                    style: ct({ backgroundColor: N }),
                    title: N,
                    "aria-pressed": O.currentColor === N
                  }, null, 14, Zh)),
                  64
                  /* STABLE_FRAGMENT */
                )),
                x("div", Gh, [
                  x("button", {
                    class: at(["color-btn custom-color-btn", { active: !u.includes(O.currentColor) }]),
                    title: C(o)("screenshot.customColor")
                  }, [
                    m(C(go), {
                      theme: "outline",
                      size: "13",
                      strokeWidth: 2.5
                    })
                  ], 10, Kh),
                  x("input", {
                    type: "color",
                    onChange: dt,
                    value: O.currentColor,
                    class: "color-input-hidden",
                    title: C(o)("screenshot.customColor"),
                    "aria-label": C(o)("screenshot.customColor")
                  }, null, 40, qh)
                ])
              ])
            ])) : H("v-if", !0),
            H(" 文字大小设置 "),
            I.value ? (L(), $("div", Jh, [
              x(
                "span",
                Qh,
                F(C(o)("screenshot.fontSize")),
                1
                /* TEXT */
              ),
              x("div", tu, [
                (L(), $(
                  Vt,
                  null,
                  te(d, (N) => x("button", {
                    key: N,
                    onClick: (_t) => K(N),
                    class: at(["size-btn", { active: O.currentTextSize === N }]),
                    title: `${N}px`,
                    "aria-pressed": O.currentTextSize === N
                  }, [
                    x(
                      "span",
                      {
                        class: "size-text",
                        style: ct({ fontSize: `${Math.min(N, 18)}px` })
                      },
                      " A ",
                      4
                      /* STYLE */
                    )
                  ], 10, eu)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                nu,
                F(O.currentTextSize) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 马赛克大小设置 "),
            T.value ? (L(), $("div", iu, [
              x(
                "span",
                ou,
                F(C(o)("screenshot.mosaicSize")),
                1
                /* TEXT */
              ),
              x("div", su, [
                (L(), $(
                  Vt,
                  null,
                  te(y, (N) => x("button", {
                    key: N,
                    onClick: (_t) => q(N),
                    class: at(["size-btn", { active: O.currentMosaicSize === N }]),
                    title: `${C(o)("screenshot.brush")} ${N * 3}px`,
                    "aria-pressed": O.currentMosaicSize === N
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
                  ], 10, au)),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              x(
                "span",
                ru,
                F(O.currentMosaicSize * 3) + " px",
                1
                /* TEXT */
              )
            ])) : H("v-if", !0),
            H(" 翻译引擎选择 "),
            W.value ? (L(), $("div", lu, [
              x(
                "span",
                cu,
                F(C(o)("screenshot.engine")),
                1
                /* TEXT */
              ),
              x("div", hu, [
                (L(!0), $(
                  Vt,
                  null,
                  te(l.value, (N) => (L(), $("button", {
                    key: N.value,
                    onClick: (_t) => pt(N.value),
                    class: at([
                      "engine-btn",
                      { active: O.currentTranslateEngine === N.value }
                    ]),
                    title: N.label,
                    "aria-pressed": O.currentTranslateEngine === N.value
                  }, F(N.short), 11, uu))),
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
}), nn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, gu = /* @__PURE__ */ nn(du, [["__scopeId", "data-v-bcb97ff5"]]), fu = {
  class: "screenshot-container",
  ref: "containerRef"
}, mu = {
  key: 0,
  class: "mask-layers"
}, pu = {
  key: 1,
  class: "mask-full"
}, yu = { class: "size-text" }, wu = {
  key: 4,
  class: "loading-overlay"
}, vu = /* @__PURE__ */ Mt({
  __name: "index",
  setup(e) {
    const t = E(), n = E(), i = E(null), o = E(null);
    let s = null;
    const a = E(!0), r = E(!1), l = E(""), c = E({ x: 0, y: 0 }), u = E(16), d = E(!1), y = E("bing"), v = E({ width: 590, height: 50 });
    let S = !1, g = null;
    const w = E({
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
    }), P = E(), I = E(), T = D(() => w.value.isDrawing), W = D(() => {
      if (!w.value.selectionRect) return {};
      const { y: b } = w.value.selectionRect;
      return {
        top: "0",
        left: "0",
        right: "0",
        height: `${b}px`
      };
    }), U = D(() => {
      if (!w.value.selectionRect) return {};
      const { y: b, height: B } = w.value.selectionRect;
      return {
        top: `${b + B}px`,
        left: "0",
        right: "0",
        bottom: "0"
      };
    }), X = D(() => {
      if (!w.value.selectionRect) return {};
      const { x: b, y: B, height: ut } = w.value.selectionRect;
      return {
        top: `${B}px`,
        left: "0",
        width: `${b}px`,
        height: `${ut}px`
      };
    }), V = D(() => {
      if (!w.value.selectionRect) return {};
      const { x: b, y: B, width: ut, height: ft } = w.value.selectionRect;
      return {
        top: `${B}px`,
        left: `${b + ut}px`,
        right: "0",
        height: `${ft}px`
      };
    }), Y = D(() => {
      if (!w.value.selectionRect) return {};
      const { x: b, y: B, width: ut, height: ft } = w.value.selectionRect, Q = 10, St = 12, Lt = Math.min(
        v.value.width,
        Math.max(0, window.innerWidth - Q * 2)
      ), Et = Math.min(
        v.value.height,
        Math.max(0, window.innerHeight - Q * 2)
      ), ee = Math.max(
        Q,
        window.innerHeight - Et - Q
      ), re = Math.max(
        Q,
        window.innerWidth - Lt - Q
      );
      let qt;
      return B + ft + Et + St <= window.innerHeight - Q ? qt = B + ft + St : B - Et - St >= Q ? qt = B - Et - St : qt = B + ft - Et - Q, qt = Math.min(Math.max(qt, Q), ee), {
        left: `${Math.min(
          Math.max(b + (ut - Lt) / 2, Q),
          re
        )}px`,
        top: `${qt}px`
      };
    }), K = D(() => {
      if (!w.value.selectionRect) return {};
      const { x: b, y: B, width: ut, height: ft } = w.value.selectionRect, Q = 10;
      let St = b - Q, Lt = B - Q, Et = "translateY(-100%)";
      return St < 10 && (St = b + ut + Q, Et = "translateY(-100%)"), Lt < 30 && (Lt = B + ft + Q, Et = "translateY(0)"), {
        left: `${St}px`,
        top: `${Lt}px`,
        transform: Et
      };
    }), q = D(() => {
      if (!w.value.selectionRect) return "";
      const { width: b, height: B } = w.value.selectionRect;
      return `${Math.round(b)} × ${Math.round(B)}`;
    }), J = D(
      () => g?.getData().style.color || w.value.currentStyle.color
    ), tt = D(() => {
      const b = g?.getData().type === f.Marker ? Xn(c.value, u.value) : Re(c.value);
      return {
        "--text-accent-color": J.value,
        left: `${b.x}px`,
        top: `${b.y}px`
      };
    }), st = (b) => {
      if (b === f.Pin && w.value.selectionRect) {
        vt();
        return;
      }
      if (b === f.Ocr && w.value.selectionRect) {
        nt();
        return;
      }
      s?.setTool(b);
    }, vt = async () => {
      try {
        await s?.createPinWindow();
      } catch (b) {
        A.error("[截图] 创建贴图失败", b);
      }
    }, nt = async () => {
      try {
        await s?.createOcrPinWindow();
      } catch (b) {
        A.error("[截图] 创建文字识别贴图失败", b);
      }
    }, j = (b) => {
      s?.updateStyle({ color: b });
    }, it = (b) => {
      s?.updateStyle({ lineWidth: b });
    }, pt = (b) => {
      s?.updateStyle({ opacity: b });
    }, rt = (b) => {
      s?.updateTextSize(b);
    }, dt = (b) => {
      s?.updateMosaicSize(b);
    }, kt = (b) => {
      s?.updateSelectionCornerRadius(b);
    }, O = (b) => {
      y.value = b, s?.setTranslationEngine(b), s?.executeTranslation();
    }, zt = () => {
      s?.undoAnnotation();
    }, N = () => {
      s?.redoAnnotation();
    }, _t = () => {
      s?.deleteSelectedAnnotation();
    }, gt = async () => {
      try {
        await s?.processScreenshot("save"), lt();
      } catch (b) {
        const B = b?.message || b?.toString() || "保存失败";
        if (B.includes("保存已取消") || B.includes("cancelled"))
          return;
        A.error("保存截图时发生错误", B);
      }
    }, Pt = async () => {
      try {
        await s?.processScreenshot("copy"), lt();
      } catch {
      }
    }, Bt = () => {
      lt();
    }, Kt = (b, B) => {
      if (B && [f.Text, f.Marker].includes(B.getData().type)) {
        const ut = B.getData();
        c.value = {
          x: ut.points[0].x,
          y: ut.points[0].y
        }, u.value = ut.fontSize || w.value.textSize;
      } else
        c.value = b, u.value = w.value.textSize;
      r.value = !0, g = B || null, B && s?.setEditingAnnotation(B), B && B.getData().text ? l.value = B.getData().text || "" : l.value = "", ie(() => {
        n.value?.focus(), g && n.value?.select();
      });
    }, Ft = () => {
      const b = g?.getData().type === f.Marker;
      l.value.trim() || b ? g ? s?.updateTextAnnotation(
        g,
        l.value.trim()
      ) : s?.createTextAnnotation(
        c.value,
        l.value
      ) : g && s?.deleteAnnotation(g), M();
    }, M = () => {
      r.value = !1, l.value = "", g && s?.clearEditingAnnotation(), g = null;
    }, et = (b) => {
      navigator.clipboard && navigator.clipboard.writeText(b.hex).catch((B) => {
        A.error("[截图] 复制颜色到剪贴板失败", B);
      });
    }, ht = (b) => {
      if (b.key === "Meta" || b.key === "Win" || b.altKey && b.key === "Tab" || b.altKey && b.key === "F4") {
        b.preventDefault(), b.stopPropagation();
        return;
      }
      if (r.value && document.activeElement === n.value) {
        if (b.key === "Escape") {
          M(), b.preventDefault();
          return;
        }
        if (b.key === "Enter") {
          Ft(), b.preventDefault();
          return;
        }
        if (b.key === "Tab") {
          b.preventDefault();
          return;
        }
        return;
      }
      if (!w.value.selectionRect) {
        if (b.key === "Escape") {
          lt();
          return;
        }
        b.preventDefault(), b.stopPropagation();
        return;
      }
      if (s?.handleKeyDown(b)) {
        b.preventDefault();
        return;
      }
      const B = navigator.platform.toLowerCase().includes("mac");
      if ((B ? b.metaKey : b.ctrlKey) && b.key.toLowerCase() === "z") {
        b.shiftKey ? N() : zt(), b.preventDefault();
        return;
      }
      if (!B && b.ctrlKey && b.key.toLowerCase() === "y") {
        N(), b.preventDefault();
        return;
      }
      if (b.key === "Escape") {
        lt();
        return;
      } else if (b.key === "Delete" || b.key === "Backspace") {
        _t(), b.preventDefault();
        return;
      }
      ["Shift", "Control", "Alt", "Meta"].includes(b.key) || b.preventDefault();
    }, lt = async () => {
      if (!S) {
        S = !0, s?.destroy(), s = null;
        try {
          await k("cleanup_screenshot_resources");
        } catch {
          try {
            await k("clear_screenshot_background");
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
          await k("close_and_destroy_screenshot_window");
        } catch (b) {
          A.error("[截图] 销毁截图窗口失败，回退到 close()", b), await o.value?.close();
        } finally {
          S = !1;
        }
      }
    }, Tt = () => {
      const b = s?.getState();
      b && (w.value = b);
    }, yt = () => {
      const b = i.value?.getToolbarSize?.();
      b && (v.value = b);
    }, Yt = (b) => {
      const B = b.detail;
      B && (v.value = B);
    };
    return tn(async () => {
      if (t.value) {
        o.value = new en("screenshot"), s = new Kc(
          t.value,
          Tt,
          Kt,
          et
        ), document.addEventListener("keydown", ht), window.addEventListener("resize", yt), window.addEventListener("screenshot-toolbar-resize", Yt), I.value = await Ge(
          "screenshot-close-requested",
          () => {
            lt();
          }
        ), P.value = await Ge("tauri://blur", () => {
          if (r.value && document.activeElement === n.value)
            return;
          const b = s?.getTranslationState();
          b?.isLoading || b?.isVisible || setTimeout(() => {
            if (!r.value || document.activeElement !== n.value) {
              const B = s?.getTranslationState();
              if (B?.isLoading || B?.isVisible)
                return;
              lt();
            }
          }, 100);
        }), await ie(), yt(), await o.value.emit("screenshot_ready");
        try {
          const b = await k("get_translation_engine");
          b && ["google", "bing", "offline", "local-ai"].includes(b) && (y.value = b, s?.setTranslationEngine(
            b
          ));
        } catch (b) {
          A.error("[截图] 获取翻译引擎设置失败", b);
        }
        try {
          const b = await k(
            "get_offline_model_activated"
          );
          s?.setOfflineModelActivated(b);
        } catch (b) {
          A.error("[截图] 获取离线模型激活状态失败", b);
        }
      }
    }), si(() => {
      s?.destroy(), s = null, document.removeEventListener("keydown", ht), window.removeEventListener("resize", yt), window.removeEventListener("screenshot-toolbar-resize", Yt), P.value?.(), I.value?.(), P.value = void 0, I.value = void 0, o.value = null;
    }), (b, B) => (L(), $(
      "div",
      fu,
      [
        H(" 遮罩层 "),
        w.value.selectionRect ? (L(), $("div", mu, [
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
        ])) : (L(), $("div", pu)),
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
        w.value.selectionRect && a.value ? (L(), $(
          "div",
          {
            key: 2,
            class: "size-info",
            style: ct(K.value)
          },
          [
            x(
              "span",
              yu,
              F(q.value),
              1
              /* TEXT */
            )
          ],
          4
          /* STYLE */
        )) : H("v-if", !0),
        H(" 工具栏 "),
        w.value.selectionRect && !T.value ? (L(), Ct(gu, {
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
          onToolSelect: st,
          onColorChange: j,
          onLineWidthChange: it,
          onOpacityChange: pt,
          onTextSizeChange: rt,
          onMosaicSizeChange: dt,
          onSelectionCornerRadiusChange: kt,
          onTranslateEngineChange: O,
          onUndo: zt,
          onRedo: N,
          onDelete: _t,
          onSave: gt,
          onConfirm: Pt,
          onCancel: Bt
        }, null, 8, ["style", "current-tool", "current-color", "current-line-width", "current-opacity", "current-text-size", "current-mosaic-size", "current-selection-corner-radius", "can-undo", "can-redo", "can-delete", "current-translate-engine"])) : H("v-if", !0),
        H(" 加载提示 - 仅在初始化时显示 "),
        d.value ? (L(), $("div", wu, [
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
            F(b.$t("screenshotTool.loading")),
            1
            /* TEXT */
          )
        ])) : H("v-if", !0),
        H(" 文字输入框 "),
        r.value ? (L(), $(
          "div",
          {
            key: 5,
            class: "text-input-container",
            style: ct(tt.value)
          },
          [
            Xe(x(
              "input",
              {
                ref_key: "textInputRef",
                ref: n,
                "onUpdate:modelValue": B[0] || (B[0] = (ut) => l.value = ut),
                type: "text",
                class: "text-input",
                style: ct({
                  color: J.value,
                  fontFamily: C(oe),
                  fontSize: u.value + "px",
                  height: u.value + "px",
                  lineHeight: u.value + "px"
                }),
                onKeydown: [
                  Vi(Ft, ["enter"]),
                  Vi(M, ["escape"])
                ],
                onBlur: Ft,
                autofocus: ""
              },
              null,
              36
              /* STYLE, NEED_HYDRATION */
            ), [
              [Ma, l.value]
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
}), xu = /* @__PURE__ */ nn(vu, [["__scopeId", "data-v-e4c815c6"]]), ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xu
}, Symbol.toStringTag, { value: "Module" })), us = Symbol(), wn = "el", bu = "is-", fe = (e, t, n, i, o) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), i && (s += `__${i}`), o && (s += `--${o}`), s;
}, ds = Symbol("namespaceContextKey"), Su = (e) => {
  const t = e || (Le() ? ve(ds, E(wn)) : E(wn));
  return D(() => C(t) || wn);
}, wi = (e, t) => {
  const n = Su(t);
  return {
    namespace: n,
    b: (g = "") => fe(n.value, e, g, "", ""),
    e: (g) => g ? fe(n.value, e, "", g, "") : "",
    m: (g) => g ? fe(n.value, e, "", "", g) : "",
    be: (g, w) => g && w ? fe(n.value, e, g, w, "") : "",
    em: (g, w) => g && w ? fe(n.value, e, "", g, w) : "",
    bm: (g, w) => g && w ? fe(n.value, e, g, "", w) : "",
    bem: (g, w, P) => g && w && P ? fe(n.value, e, g, w, P) : "",
    is: (g, ...w) => {
      const P = w.length >= 1 ? w[0] : !0;
      return g && P ? `${bu}${g}` : "";
    },
    cssVar: (g) => {
      const w = {};
      for (const P in g)
        g[P] && (w[`--${n.value}-${P}`] = g[P]);
      return w;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const w = {};
      for (const P in g)
        g[P] && (w[`--${n.value}-${e}-${P}`] = g[P]);
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
const Cu = Object.prototype.hasOwnProperty, mo = (e, t) => Cu.call(e, t), qe = (e) => typeof e == "function", ke = (e) => typeof e == "string", gs = (e) => e !== null && typeof e == "object";
var Mu = typeof global == "object" && global && global.Object === Object && global, _u = typeof self == "object" && self && self.Object === Object && self, vi = Mu || _u || Function("return this")(), Ie = vi.Symbol, fs = Object.prototype, Tu = fs.hasOwnProperty, Ru = fs.toString, je = Ie ? Ie.toStringTag : void 0;
function zu(e) {
  var t = Tu.call(e, je), n = e[je];
  try {
    e[je] = void 0;
    var i = !0;
  } catch {
  }
  var o = Ru.call(e);
  return i && (t ? e[je] = n : delete e[je]), o;
}
var Pu = Object.prototype, Lu = Pu.toString;
function Au(e) {
  return Lu.call(e);
}
var Iu = "[object Null]", Du = "[object Undefined]", po = Ie ? Ie.toStringTag : void 0;
function ms(e) {
  return e == null ? e === void 0 ? Du : Iu : po && po in Object(e) ? zu(e) : Au(e);
}
function Eu(e) {
  return e != null && typeof e == "object";
}
var Ou = "[object Symbol]";
function xi(e) {
  return typeof e == "symbol" || Eu(e) && ms(e) == Ou;
}
function $u(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, o = Array(i); ++n < i; )
    o[n] = t(e[n], n, e);
  return o;
}
var ki = Array.isArray, yo = Ie ? Ie.prototype : void 0, wo = yo ? yo.toString : void 0;
function ps(e) {
  if (typeof e == "string")
    return e;
  if (ki(e))
    return $u(e, ps) + "";
  if (xi(e))
    return wo ? wo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ys(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Wu = "[object AsyncFunction]", Bu = "[object Function]", Nu = "[object GeneratorFunction]", Hu = "[object Proxy]";
function ju(e) {
  if (!ys(e))
    return !1;
  var t = ms(e);
  return t == Bu || t == Nu || t == Wu || t == Hu;
}
var Fn = vi["__core-js_shared__"], vo = function() {
  var e = /[^.]+$/.exec(Fn && Fn.keys && Fn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fu(e) {
  return !!vo && vo in e;
}
var Vu = Function.prototype, Uu = Vu.toString;
function Yu(e) {
  if (e != null) {
    try {
      return Uu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xu = /[\\^$.*+?()[\]{}|]/g, Zu = /^\[object .+?Constructor\]$/, Gu = Function.prototype, Ku = Object.prototype, qu = Gu.toString, Ju = Ku.hasOwnProperty, Qu = RegExp(
  "^" + qu.call(Ju).replace(Xu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function td(e) {
  if (!ys(e) || Fu(e))
    return !1;
  var t = ju(e) ? Qu : Zu;
  return t.test(Yu(e));
}
function ed(e, t) {
  return e?.[t];
}
function ws(e, t) {
  var n = ed(e, t);
  return td(n) ? n : void 0;
}
function nd(e, t) {
  return e === t || e !== e && t !== t;
}
var id = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, od = /^\w*$/;
function sd(e, t) {
  if (ki(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || xi(e) ? !0 : od.test(e) || !id.test(e) || t != null && e in Object(t);
}
var Je = ws(Object, "create");
function ad() {
  this.__data__ = Je ? Je(null) : {}, this.size = 0;
}
function rd(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ld = "__lodash_hash_undefined__", cd = Object.prototype, hd = cd.hasOwnProperty;
function ud(e) {
  var t = this.__data__;
  if (Je) {
    var n = t[e];
    return n === ld ? void 0 : n;
  }
  return hd.call(t, e) ? t[e] : void 0;
}
var dd = Object.prototype, gd = dd.hasOwnProperty;
function fd(e) {
  var t = this.__data__;
  return Je ? t[e] !== void 0 : gd.call(t, e);
}
var md = "__lodash_hash_undefined__";
function pd(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Je && t === void 0 ? md : t, this;
}
function be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
be.prototype.clear = ad;
be.prototype.delete = rd;
be.prototype.get = ud;
be.prototype.has = fd;
be.prototype.set = pd;
function yd() {
  this.__data__ = [], this.size = 0;
}
function Pn(e, t) {
  for (var n = e.length; n--; )
    if (nd(e[n][0], t))
      return n;
  return -1;
}
var wd = Array.prototype, vd = wd.splice;
function xd(e) {
  var t = this.__data__, n = Pn(t, e);
  if (n < 0)
    return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : vd.call(t, n, 1), --this.size, !0;
}
function kd(e) {
  var t = this.__data__, n = Pn(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bd(e) {
  return Pn(this.__data__, e) > -1;
}
function Sd(e, t) {
  var n = this.__data__, i = Pn(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
}
function Oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Oe.prototype.clear = yd;
Oe.prototype.delete = xd;
Oe.prototype.get = kd;
Oe.prototype.has = bd;
Oe.prototype.set = Sd;
var Cd = ws(vi, "Map");
function Md() {
  this.size = 0, this.__data__ = {
    hash: new be(),
    map: new (Cd || Oe)(),
    string: new be()
  };
}
function _d(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ln(e, t) {
  var n = e.__data__;
  return _d(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Td(e) {
  var t = Ln(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Rd(e) {
  return Ln(this, e).get(e);
}
function zd(e) {
  return Ln(this, e).has(e);
}
function Pd(e, t) {
  var n = Ln(this, e), i = n.size;
  return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
}
function Ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ce.prototype.clear = Md;
Ce.prototype.delete = Td;
Ce.prototype.get = Rd;
Ce.prototype.has = zd;
Ce.prototype.set = Pd;
var Ld = "Expected a function";
function bi(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ld);
  var n = function() {
    var i = arguments, o = t ? t.apply(this, i) : i[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var a = e.apply(this, i);
    return n.cache = s.set(o, a) || s, a;
  };
  return n.cache = new (bi.Cache || Ce)(), n;
}
bi.Cache = Ce;
var Ad = 500;
function Id(e) {
  var t = bi(e, function(i) {
    return n.size === Ad && n.clear(), i;
  }), n = t.cache;
  return t;
}
var Dd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ed = /\\(\\)?/g, Od = Id(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Dd, function(n, i, o, s) {
    t.push(o ? s.replace(Ed, "$1") : i || n);
  }), t;
});
function $d(e) {
  return e == null ? "" : ps(e);
}
function Wd(e, t) {
  return ki(e) ? e : sd(e, t) ? [e] : Od($d(e));
}
function Bd(e) {
  if (typeof e == "string" || xi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Nd(e, t) {
  t = Wd(t, e);
  for (var n = 0, i = t.length; e != null && n < i; )
    e = e[Bd(t[n++])];
  return n && n == i ? e : void 0;
}
function Hd(e, t, n) {
  var i = e == null ? void 0 : Nd(e, t);
  return i === void 0 ? n : i;
}
function jd(e) {
  for (var t = -1, n = e == null ? 0 : e.length, i = {}; ++t < n; ) {
    var o = e[t];
    i[o[0]] = o[1];
  }
  return i;
}
const vs = (e) => e === void 0, xo = (e) => typeof e == "boolean", Se = (e) => typeof e == "number", ti = (e) => typeof Element > "u" ? !1 : e instanceof Element, Fd = (e) => ke(e) ? !Number.isNaN(Number(e)) : !1;
var ko;
const Me = typeof window < "u", Vd = (e) => typeof e == "string", Ud = () => {
};
Me && ((ko = window?.navigator) != null && ko.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Si(e) {
  return typeof e == "function" ? e() : C(e);
}
function Yd(e) {
  return e;
}
function Ci(e) {
  return Ta() ? (Ra(e), !0) : !1;
}
function Xd(e, t = !0) {
  Le() ? tn(e) : t ? e() : ie(e);
}
function xs(e, t, n = {}) {
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
  function l(...c) {
    a(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...c);
    }, Si(t));
  }
  return i && (o.value = !0, Me && l()), Ci(r), {
    isPending: _a(o),
    start: l,
    stop: r
  };
}
function ks(e) {
  var t;
  const n = Si(e);
  return (t = n?.$el) != null ? t : n;
}
const bs = Me ? window : void 0;
function Ss(...e) {
  let t, n, i, o;
  if (Vd(e[0]) || Array.isArray(e[0]) ? ([n, i, o] = e, t = bs) : [t, n, i, o] = e, !t)
    return Ud;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const s = [], a = () => {
    s.forEach((u) => u()), s.length = 0;
  }, r = (u, d, y, v) => (u.addEventListener(d, y, v), () => u.removeEventListener(d, y, v)), l = Qe(() => [ks(t), Si(o)], ([u, d]) => {
    a(), u && s.push(...n.flatMap((y) => i.map((v) => r(u, y, v, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return Ci(c), c;
}
function Zd(e, t = !1) {
  const n = E(), i = () => n.value = !!e();
  return i(), Xd(i, t), n;
}
const bo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, So = "__vueuse_ssr_handlers__";
bo[So] = bo[So] || {};
var Co = Object.getOwnPropertySymbols, Gd = Object.prototype.hasOwnProperty, Kd = Object.prototype.propertyIsEnumerable, qd = (e, t) => {
  var n = {};
  for (var i in e)
    Gd.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Co)
    for (var i of Co(e))
      t.indexOf(i) < 0 && Kd.call(e, i) && (n[i] = e[i]);
  return n;
};
function Jd(e, t, n = {}) {
  const i = n, { window: o = bs } = i, s = qd(i, ["window"]);
  let a;
  const r = Zd(() => o && "ResizeObserver" in o), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = Qe(() => ks(e), (d) => {
    l(), r.value && o && d && (a = new ResizeObserver(t), a.observe(d, s));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), c();
  };
  return Ci(u), {
    isSupported: r,
    stop: u
  };
}
var Mo;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Mo || (Mo = {}));
var Qd = Object.defineProperty, _o = Object.getOwnPropertySymbols, tg = Object.prototype.hasOwnProperty, eg = Object.prototype.propertyIsEnumerable, To = (e, t, n) => t in e ? Qd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ng = (e, t) => {
  for (var n in t || (t = {}))
    tg.call(t, n) && To(e, n, t[n]);
  if (_o)
    for (var n of _o(t))
      eg.call(t, n) && To(e, n, t[n]);
  return e;
};
const ig = {
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
ng({
  linear: Yd
}, ig);
const Ro = {
  current: 0
}, zo = E(0), Cs = 2e3, Po = Symbol("elZIndexContextKey"), Ms = Symbol("zIndexContextKey"), og = (e) => {
  const t = Le() ? ve(Po, Ro) : Ro, n = e || (Le() ? ve(Ms, void 0) : void 0), i = D(() => {
    const a = C(n);
    return Se(a) ? a : Cs;
  }), o = D(() => i.value + zo.value), s = () => (t.current++, zo.value = t.current, o.value);
  return !Me && ve(Po), {
    initialZIndex: i,
    currentZIndex: o,
    nextZIndex: s
  };
};
var sg = {
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
const ag = (e) => (t, n) => rg(t, n, C(e)), rg = (e, t, n) => Hd(n, e, e).replace(/\{(\w+)\}/g, (i, o) => {
  var s;
  return `${(s = t?.[o]) != null ? s : `{${o}}`}`;
}), lg = (e) => {
  const t = D(() => C(e).name), n = za(e) ? e : E(e);
  return {
    lang: t,
    locale: n,
    t: ag(e)
  };
}, _s = Symbol("localeContextKey"), cg = (e) => {
  const t = e || ve(_s, E());
  return lg(D(() => t.value || sg));
}, Ts = "__epPropKey", jt = (e) => e, hg = (e) => gs(e) && !!e[Ts], Rs = (e, t) => {
  if (!gs(e) || hg(e))
    return e;
  const { values: n, required: i, default: o, type: s, validator: a } = e, l = {
    type: s,
    required: !!i,
    validator: n || a ? (c) => {
      let u = !1, d = [];
      if (n && (d = Array.from(n), mo(e, "default") && d.push(o), u || (u = d.includes(c))), a && (u || (u = a(c))), !u && d.length > 0) {
        const y = [...new Set(d)].map((v) => JSON.stringify(v)).join(", ");
        Pa(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${y}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [Ts]: !0
  };
  return mo(e, "default") && (l.default = o), l;
}, $e = (e) => jd(Object.entries(e).map(([t, n]) => [
  t,
  Rs(n, t)
])), ug = ["", "default", "small", "large"], dg = Rs({
  type: String,
  values: ug,
  required: !1
}), gg = Symbol("size"), fg = Symbol("emptyValuesContextKey"), mg = $e({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => qe(e) ? !e() : !e
  }
}), Lo = (e) => Object.keys(e), Cn = E();
function zs(e, t = void 0) {
  return Le() ? ve(us, Cn) : Cn;
}
function Ps(e, t) {
  const n = zs(), i = wi(e, D(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.namespace) || wn;
  })), o = cg(D(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.locale;
  })), s = og(D(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r.zIndex) || Cs;
  })), a = D(() => {
    var r;
    return C(t) || ((r = n.value) == null ? void 0 : r.size) || "";
  });
  return Ls(D(() => C(n) || {})), {
    ns: i,
    locale: o,
    zIndex: s,
    size: a
  };
}
const Ls = (e, t, n = !1) => {
  var i;
  const o = !!Le(), s = o ? zs() : void 0, a = (i = void 0) != null ? i : o ? La : void 0;
  if (!a)
    return;
  const r = D(() => {
    const l = C(e);
    return s?.value ? pg(s.value, l) : l;
  });
  return a(us, r), a(_s, D(() => r.value.locale)), a(ds, D(() => r.value.namespace)), a(Ms, D(() => r.value.zIndex)), a(gg, {
    size: D(() => r.value.size || "")
  }), a(fg, D(() => ({
    emptyValues: r.value.emptyValues,
    valueOnClear: r.value.valueOnClear
  }))), (n || !Cn.value) && (Cn.value = r.value), r;
}, pg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Lo(e), ...Lo(t)])], i = {};
  for (const o of n)
    i[o] = t[o] !== void 0 ? t[o] : e[o];
  return i;
};
var An = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
};
function ei(e, t = "px") {
  if (!e)
    return "";
  if (Se(e) || Fd(e))
    return `${e}${t}`;
  if (ke(e))
    return e;
}
const As = (e, t) => (e.install = (n) => {
  for (const i of [e, ...Object.values({})])
    n.component(i.name, i);
}, e), Is = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), yg = $e({
  size: {
    type: jt([Number, String])
  },
  color: {
    type: String
  }
}), wg = Mt({
  name: "ElIcon",
  inheritAttrs: !1
}), vg = /* @__PURE__ */ Mt({
  ...wg,
  props: yg,
  setup(e) {
    const t = e, n = wi("icon"), i = D(() => {
      const { size: o, color: s } = t;
      return !o && !s ? {} : {
        fontSize: vs(o) ? void 0 : ei(o),
        "--color": s
      };
    });
    return (o, s) => (L(), $("i", Aa({
      class: C(n).b(),
      style: C(i)
    }, o.$attrs), [
      ae(o.$slots, "default")
    ], 16));
  }
});
var xg = /* @__PURE__ */ An(vg, [["__file", "icon.vue"]]);
const Mn = As(xg);
/*! Element Plus Icons Vue v2.3.1 */
var kg = /* @__PURE__ */ Mt({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (L(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), bg = kg, Sg = /* @__PURE__ */ Mt({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (L(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ds = Sg, Cg = /* @__PURE__ */ Mt({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (L(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Mg = Cg, _g = /* @__PURE__ */ Mt({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (L(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Tg = _g, Rg = /* @__PURE__ */ Mt({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (L(), $("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), zg = Rg;
const Es = jt([
  String,
  Object,
  Function
]), Pg = {
  Close: Ds
}, Lg = {
  Close: Ds
}, _n = {
  success: Tg,
  warning: zg,
  error: bg,
  info: Mg
}, Ag = (e) => e, vn = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ig = $e({
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
    type: jt([String, Object, Array])
  },
  offset: {
    type: jt(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Dg = Mt({
  name: "ElBadge"
}), Eg = /* @__PURE__ */ Mt({
  ...Dg,
  props: Ig,
  setup(e, { expose: t }) {
    const n = e, i = wi("badge"), o = D(() => n.isDot ? "" : Se(n.value) && Se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = D(() => {
      var a, r, l, c, u;
      return [
        {
          backgroundColor: n.color,
          marginRight: ei(-((r = (a = n.offset) == null ? void 0 : a[0]) != null ? r : 0)),
          marginTop: ei((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (u = n.badgeStyle) != null ? u : {}
      ];
    });
    return t({
      content: o
    }), (a, r) => (L(), $("div", {
      class: at(C(i).b())
    }, [
      ae(a.$slots, "default"),
      m(ai, {
        name: `${C(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Rt(() => [
          Xe(x("sup", {
            class: at([
              C(i).e("content"),
              C(i).em("content", a.type),
              C(i).is("fixed", !!a.$slots.default),
              C(i).is("dot", a.isDot),
              C(i).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: ct(C(s))
          }, [
            ae(a.$slots, "content", { value: C(o) }, () => [
              Ia(F(C(o)), 1)
            ])
          ], 6), [
            [xn, !a.hidden && (C(o) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Og = /* @__PURE__ */ An(Eg, [["__file", "badge.vue"]]);
const $g = As(Og), Wg = $e({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: jt(Object)
  },
  size: dg,
  button: {
    type: jt(Object)
  },
  experimentalFeatures: {
    type: jt(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: jt(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...mg
}), Zt = {};
Mt({
  name: "ElConfigProvider",
  props: Wg,
  setup(e, { slots: t }) {
    Qe(() => e.message, (i) => {
      Object.assign(Zt, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Ls(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
const Os = ["success", "info", "warning", "error"], It = Ag({
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
}), Bg = $e({
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
    type: Es,
    default: It.icon
  },
  id: {
    type: String,
    default: It.id
  },
  message: {
    type: jt([
      String,
      Object,
      Function
    ]),
    default: It.message
  },
  onClose: {
    type: jt(Function),
    default: It.onClose
  },
  showClose: {
    type: Boolean,
    default: It.showClose
  },
  type: {
    type: String,
    values: Os,
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
}), Ng = {
  destroy: () => !0
}, Gt = Da([]), Hg = (e) => {
  const t = Gt.findIndex((o) => o.id === e), n = Gt[t];
  let i;
  return t > 0 && (i = Gt[t - 1]), { current: n, prev: i };
}, jg = (e) => {
  const { prev: t } = Hg(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Fg = (e, t) => Gt.findIndex((i) => i.id === e) > 0 ? 16 : t, Vg = Mt({
  name: "ElMessage"
}), Ug = /* @__PURE__ */ Mt({
  ...Vg,
  props: Bg,
  emits: Ng,
  setup(e, { expose: t }) {
    const n = e, { Close: i } = Lg, { ns: o, zIndex: s } = Ps("message"), { currentZIndex: a, nextZIndex: r } = s, l = E(), c = E(!1), u = E(0);
    let d;
    const y = D(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = D(() => {
      const V = n.type;
      return { [o.bm("icon", V)]: V && _n[V] };
    }), S = D(() => n.icon || _n[n.type] || ""), g = D(() => jg(n.id)), w = D(() => Fg(n.id, n.offset) + g.value), P = D(() => u.value + w.value), I = D(() => ({
      top: `${w.value}px`,
      zIndex: a.value
    }));
    function T() {
      n.duration !== 0 && ({ stop: d } = xs(() => {
        U();
      }, n.duration));
    }
    function W() {
      d?.();
    }
    function U() {
      c.value = !1;
    }
    function X({ code: V }) {
      V === vn.esc && U();
    }
    return tn(() => {
      T(), r(), c.value = !0;
    }), Qe(() => n.repeatNum, () => {
      W(), T();
    }), Ss(document, "keydown", X), Jd(l, () => {
      u.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: P,
      close: U
    }), (V, Y) => (L(), Ct(ai, {
      name: C(o).b("fade"),
      onBeforeLeave: V.onClose,
      onAfterLeave: (K) => V.$emit("destroy"),
      persisted: ""
    }, {
      default: Rt(() => [
        Xe(x("div", {
          id: V.id,
          ref_key: "messageRef",
          ref: l,
          class: at([
            C(o).b(),
            { [C(o).m(V.type)]: V.type },
            C(o).is("center", V.center),
            C(o).is("closable", V.showClose),
            C(o).is("plain", V.plain),
            V.customClass
          ]),
          style: ct(C(I)),
          role: "alert",
          onMouseenter: W,
          onMouseleave: T
        }, [
          V.repeatNum > 1 ? (L(), Ct(C($g), {
            key: 0,
            value: V.repeatNum,
            type: C(y),
            class: at(C(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          C(S) ? (L(), Ct(C(Mn), {
            key: 1,
            class: at([C(o).e("icon"), C(v)])
          }, {
            default: Rt(() => [
              (L(), Ct(we(C(S))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          ae(V.$slots, "default", {}, () => [
            V.dangerouslyUseHTMLString ? (L(), $(Vt, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              x("p", {
                class: at(C(o).e("content")),
                innerHTML: V.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (L(), $("p", {
              key: 0,
              class: at(C(o).e("content"))
            }, F(V.message), 3))
          ]),
          V.showClose ? (L(), Ct(C(Mn), {
            key: 2,
            class: at(C(o).e("closeBtn")),
            onClick: xt(U, ["stop"])
          }, {
            default: Rt(() => [
              m(C(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [xn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Yg = /* @__PURE__ */ An(Ug, [["__file", "message.vue"]]);
let Xg = 1;
const $s = (e) => {
  const t = !e || ke(e) || Ze(e) || qe(e) ? { message: e } : e, n = {
    ...It,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ke(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    ti(i) || (i = document.body), n.appendTo = i;
  }
  return xo(Zt.grouping) && !n.grouping && (n.grouping = Zt.grouping), Se(Zt.duration) && n.duration === 3e3 && (n.duration = Zt.duration), Se(Zt.offset) && n.offset === 16 && (n.offset = Zt.offset), xo(Zt.showClose) && !n.showClose && (n.showClose = Zt.showClose), n;
}, Zg = (e) => {
  const t = Gt.indexOf(e);
  if (t === -1)
    return;
  Gt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Gg = ({ appendTo: e, ...t }, n) => {
  const i = `message_${Xg++}`, o = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: i,
    onClose: () => {
      o?.(), Zg(u);
    },
    onDestroy: () => {
      kn(null, s);
    }
  }, r = m(Yg, a, qe(a.message) || Ze(a.message) ? {
    default: qe(a.message) ? a.message : () => a.message
  } : null);
  r.appContext = n || De._context, kn(r, s), e.appendChild(s.firstElementChild);
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
}, De = (e = {}, t) => {
  if (!Me)
    return { close: () => {
    } };
  const n = $s(e);
  if (n.grouping && Gt.length) {
    const o = Gt.find(({ vnode: s }) => {
      var a;
      return ((a = s.props) == null ? void 0 : a.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Se(Zt.max) && Gt.length >= Zt.max)
    return { close: () => {
    } };
  const i = Gg(n, t);
  return Gt.push(i), i.handler;
};
Os.forEach((e) => {
  De[e] = (t = {}, n) => {
    const i = $s(t);
    return De({ ...i, type: e }, n);
  };
});
function Kg(e) {
  for (const t of Gt)
    (!e || e === t.props.type) && t.handler.close();
}
De.closeAll = Kg;
De._context = null;
const qg = Is(De, "$message"), Ws = [
  "success",
  "info",
  "warning",
  "error"
], Jg = $e({
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
    type: Es
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: jt([
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
    type: jt(Function),
    default: () => {
    }
  },
  onClose: {
    type: jt(Function),
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
    values: [...Ws, ""],
    default: ""
  },
  zIndex: Number
}), Qg = {
  destroy: () => !0
}, tf = Mt({
  name: "ElNotification"
}), ef = /* @__PURE__ */ Mt({
  ...tf,
  props: Jg,
  emits: Qg,
  setup(e, { expose: t }) {
    const n = e, { ns: i, zIndex: o } = Ps("notification"), { nextZIndex: s, currentZIndex: a } = o, { Close: r } = Pg, l = E(!1);
    let c;
    const u = D(() => {
      const T = n.type;
      return T && _n[n.type] ? i.m(T) : "";
    }), d = D(() => n.type && _n[n.type] || n.icon), y = D(() => n.position.endsWith("right") ? "right" : "left"), v = D(() => n.position.startsWith("top") ? "top" : "bottom"), S = D(() => {
      var T;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (T = n.zIndex) != null ? T : a.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: c } = xs(() => {
        l.value && P();
      }, n.duration));
    }
    function w() {
      c?.();
    }
    function P() {
      l.value = !1;
    }
    function I({ code: T }) {
      T === vn.delete || T === vn.backspace ? w() : T === vn.esc ? l.value && P() : g();
    }
    return tn(() => {
      g(), s(), l.value = !0;
    }), Ss(document, "keydown", I), t({
      visible: l,
      close: P
    }), (T, W) => (L(), Ct(ai, {
      name: C(i).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (U) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: Rt(() => [
        Xe(x("div", {
          id: T.id,
          class: at([C(i).b(), T.customClass, C(y)]),
          style: ct(C(S)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: g,
          onClick: T.onClick
        }, [
          C(d) ? (L(), Ct(C(Mn), {
            key: 0,
            class: at([C(i).e("icon"), C(u)])
          }, {
            default: Rt(() => [
              (L(), Ct(we(C(d))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          x("div", {
            class: at(C(i).e("group"))
          }, [
            x("h2", {
              class: at(C(i).e("title")),
              textContent: F(T.title)
            }, null, 10, ["textContent"]),
            Xe(x("div", {
              class: at(C(i).e("content")),
              style: ct(T.title ? void 0 : { margin: 0 })
            }, [
              ae(T.$slots, "default", {}, () => [
                T.dangerouslyUseHTMLString ? (L(), $(Vt, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  x("p", { innerHTML: T.message }, null, 8, ["innerHTML"])
                ], 2112)) : (L(), $("p", { key: 0 }, F(T.message), 1))
              ])
            ], 6), [
              [xn, T.message]
            ]),
            T.showClose ? (L(), Ct(C(Mn), {
              key: 0,
              class: at(C(i).e("closeBtn")),
              onClick: xt(P, ["stop"])
            }, {
              default: Rt(() => [
                m(C(r))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [xn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var nf = /* @__PURE__ */ An(ef, [["__file", "notification.vue"]]);
const Tn = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ni = 16;
let of = 1;
const Ee = function(e = {}, t) {
  if (!Me)
    return { close: () => {
    } };
  (ke(e) || Ze(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let i = e.offset || 0;
  Tn[n].forEach(({ vm: u }) => {
    var d;
    i += (((d = u.el) == null ? void 0 : d.offsetHeight) || 0) + ni;
  }), i += ni;
  const o = `notification_${of++}`, s = e.onClose, a = {
    ...e,
    offset: i,
    id: o,
    onClose: () => {
      sf(o, n, s);
    }
  };
  let r = document.body;
  ti(e.appendTo) ? r = e.appendTo : ke(e.appendTo) && (r = document.querySelector(e.appendTo)), ti(r) || (r = document.body);
  const l = document.createElement("div"), c = m(nf, a, qe(a.message) ? a.message : Ze(a.message) ? () => a.message : null);
  return c.appContext = vs(t) ? Ee._context : t, c.props.onDestroy = () => {
    kn(null, l);
  }, kn(c, l), Tn[n].push({ vm: c }), r.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Ws.forEach((e) => {
  Ee[e] = (t = {}, n) => ((ke(t) || Ze(t)) && (t = {
    message: t
  }), Ee({ ...t, type: e }, n));
});
function sf(e, t, n) {
  const i = Tn[t], o = i.findIndex(({ vm: c }) => {
    var u;
    return ((u = c.component) == null ? void 0 : u.props.id) === e;
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
    for (let c = o; c < l; c++) {
      const { el: u, component: d } = i[c].vm, y = Number.parseInt(u.style[r], 10) - a - ni;
      d.props.offset = y;
    }
}
function af() {
  for (const e of Object.values(Tn))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ee.closeAll = af;
Ee._context = null;
const rf = Is(Ee, "$notify"), $t = {
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
    i === "center" ? qg({
      message: t,
      type: n,
      duration: o,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : rf({
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
}, lf = ["disabled"], cf = {
  key: 0,
  class: "custom-button__loading"
}, hf = /* @__PURE__ */ Mt({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "success", "danger", "warning", "text"].includes(
        e
      )
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
    return (n, i) => (L(), $("button", {
      class: at([
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
      e.loading ? (L(), $("div", cf, i[1] || (i[1] = [
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
      ae(n.$slots, "default", {}, void 0, !0)
    ], 10, lf));
  }
}), ne = /* @__PURE__ */ nn(hf, [["__scopeId", "data-v-8539c893"]]), uf = {
  key: 1,
  class: "splitter-panel second-panel"
}, df = /* @__PURE__ */ Mt({
  name: "Splitter",
  __name: "index",
  props: {
    defaultSize: { default: "0%" },
    minSize: { default: "0%" },
    maxSize: { default: "100%" },
    firstCollapsed: { type: Boolean, default: !1 },
    secondCollapsed: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = E(null), i = (I) => typeof I == "string" && I.includes("%"), o = (I) => typeof I == "string" ? parseFloat(I.replace("%", "")) : I, s = E(o(t.defaultSize)), a = D(() => i(t.defaultSize)), r = D(() => a.value ? `${s.value}%` : `${s.value}px`), l = D(() => t.firstCollapsed ? "0px" : t.secondCollapsed ? "100%" : r.value);
    let c = !1, u = 0, d = 0;
    const y = () => n.value?.offsetWidth || 0, v = (I) => {
      const T = y();
      return I / T * 100;
    }, S = (I) => {
      const T = y();
      return I * T / 100;
    }, g = (I) => {
      I.preventDefault(), I.stopPropagation(), !(!n.value || t.firstCollapsed || t.secondCollapsed) && (c = !0, u = I.clientX, d = a.value ? S(s.value) : s.value, document.addEventListener("mousemove", w), document.addEventListener("mouseup", P));
    }, w = (I) => {
      if (I.preventDefault(), I.stopPropagation(), !c || !n.value) return;
      const T = I.clientX - u;
      let W = d + T;
      const U = a.value ? S(o(t.minSize)) : o(t.minSize), X = a.value ? S(o(t.maxSize)) : o(t.maxSize);
      W = Math.max(U, Math.min(X, W)), s.value = a.value ? v(W) : W;
    }, P = () => {
      c = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", P);
    };
    return si(() => {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", P);
    }), (I, T) => (L(), $(
      "main",
      {
        ref_key: "splitterRef",
        ref: n,
        class: "splitter-container"
      },
      [
        x(
          "div",
          {
            class: "splitter-panel first-panel",
            style: ct({ width: C(l), minWidth: C(l) })
          },
          [
            ae(I.$slots, "first", {}, void 0, !0)
          ],
          4
          /* STYLE */
        ),
        !I.firstCollapsed && !I.secondCollapsed ? (L(), $(
          "div",
          {
            key: 0,
            class: "splitter-divider",
            style: ct({ left: C(l) }),
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
        I.secondCollapsed ? H("v-if", !0) : (L(), $("div", uf, [
          ae(I.$slots, "second", {}, void 0, !0)
        ]))
      ],
      512
      /* NEED_PATCH */
    ));
  }
}), gf = /* @__PURE__ */ nn(df, [["__scopeId", "data-v-79af4cc0"]]), ff = `你正在执行图片原文转写。像在 AI 聊天中直接阅读图片一样，按视觉阅读顺序从上到下完整读取所有可见文字。
要求：
1. 忠实保留原语言、标点、数字、大小写、标题、段落、列表、代码和表格内容，不翻译、不概括、不解释；
2. 标题、说明文字、每个独立段落和每个列表项之间各空一行，保持图片本身的语义分段；
3. 只输出纯文本原文，不输出 JSON，不添加 Markdown 标题、加粗、代码围栏或“识别结果”等额外说明；
4. 输出前重新检查图片的左、右、上、下区域，确保没有只读取标题、漏掉小字、列表项或末尾内容。`, dn = {
  auto: "自动判断图片文字语言",
  zh: "优先按简体中文识别",
  "zh-tw": "优先按繁体中文识别",
  en: "优先按英文识别",
  ja: "优先按日文识别",
  ko: "优先按韩文识别"
}, mf = /* @__PURE__ */ new Set([
  "title",
  "paragraph",
  "list",
  "code",
  "table"
]), ii = (e, t, n) => typeof e == "string" && mf.has(e) ? e : n === 0 && t.length <= 80 && !/[。！？.!?]\s*$/.test(t) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/m.test(t) ? "list" : "paragraph", pf = /^\s*(?:[-*+•·]|\d+[.)、）])\s+/, gn = (e) => e.replace(/^\s{0,3}#{1,6}\s+/, "").replace(/^\s*>\s?/, "").replace(/(\*\*|__|~~)(.*?)\1/g, "$2").trim(), yf = (e) => {
  const n = e.trim().replace(/^```(?:text|plaintext|markdown)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").split(/\n{2,}/).map((o) => o.trim()).filter(Boolean), i = [];
  for (const o of n) {
    const s = o.split(/\n/).map((c) => c.trim()).filter(Boolean);
    if (s.length === 0) continue;
    if (s.every((c) => pf.test(c))) {
      for (const c of s)
        i.push({
          type: "list",
          text: gn(c)
        });
      continue;
    }
    const a = gn(s[0]);
    if (i.length === 0 && s.length > 1 && a.length <= 100 && !/[。！？.!?]\s*$/.test(a)) {
      i.push({ type: "title", text: a });
      const c = s.slice(1).map(gn).join(" ").trim();
      c && i.push({
        type: ii(void 0, c, i.length),
        text: c
      });
      continue;
    }
    const l = s.map(gn).join(" ").trim();
    l && i.push({
      type: ii(void 0, l, i.length),
      text: l
    });
  }
  return i;
}, wf = (e) => {
  const t = e.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim();
  if (t?.startsWith("{") && t.endsWith("}") || t?.startsWith("[") && t.endsWith("]"))
    return t;
  const n = e.indexOf("{"), i = e.lastIndexOf("}"), o = e.indexOf("["), s = e.lastIndexOf("]");
  return o >= 0 && s > o && (n < 0 || o < n) ? e.slice(o, s + 1) : n >= 0 && i > n ? e.slice(n, i + 1) : null;
}, vf = (e) => {
  const t = e.trim();
  if (!t)
    throw new Error("AI_OCR_EMPTY_RESPONSE");
  const n = wf(t);
  let i = null;
  if (n)
    try {
      i = JSON.parse(n);
    } catch {
      i = null;
    }
  const o = typeof i?.text == "string" ? i.text.trim() : "", a = (Array.isArray(i?.sections) ? i.sections : []).map((c, u) => {
    if (!c || typeof c != "object") return null;
    const d = c, y = typeof d.text == "string" ? d.text.trim() : "";
    return y ? {
      type: ii(d.type, y, u),
      text: y
    } : null;
  }).filter((c) => !!c), r = a.length > 0 ? a : yf(o || t);
  return {
    text: r.map((c) => c.text).join(`

`) || o || t,
    sections: r
  };
}, oi = (e) => e.replace(/[\s\p{P}\p{S}]/gu, "").length, xf = (e) => oi(e.text) < 180 && e.sections.length <= 2, Ao = (e) => e && e.split(/[\\/]/).filter(Boolean).pop() || "", kf = async (e, t) => {
  const n = await Br(), i = await Nr(n);
  if (!i.selectedMmprojPath)
    throw new Error("AI_OCR_VISION_MODEL_UNAVAILABLE");
  const o = async (u) => {
    const d = await ns(
      {
        messages: [
          { role: "system", content: ff },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: u ? `${dn[t] || dn.auto}。上一次转写可能不完整，请重新独立阅读整张图片，尤其检查标题之后、列表和底部的所有文字。只输出完整原文。` : `${dn[t] || dn.auto}。请完整转写这张图片中的全部文字，只输出原文。`
              },
              {
                type: "image_url",
                image_url: { url: e }
              }
            ]
          }
        ],
        enableThinking: !1
      },
      {
        providerId: Dt,
        capability: "vision",
        contextCollection: {
          kind: "selection",
          input: {
            selectionText: "Screenshot image OCR request",
            selectionSource: "screenshot.ocr",
            selectionLanguage: t,
            selectionMetadata: {
              retry: u
            }
          }
        }
      }
    );
    return vf(d.content);
  }, s = await o(!1), a = xf(s) ? await o(!0) : null, r = a && oi(a.text) > oi(s.text) ? a : s, l = await es(Dt).catch(
    () => null
  ), c = Ao(l?.modelPath) || Ao(i.selectedModelPath) || "Local Vision";
  return {
    text: r.text,
    sections: r.sections,
    modelName: c
  };
};
function Bs(e) {
  if (e.length <= 1) return [...e];
  const t = e.map((a) => Math.max(a.height, a.lineHeight, a.fontSize, 1)).sort((a, r) => a - r), n = t[Math.floor(t.length / 2)], i = Math.max(4, n * 0.6), o = [], s = [...e].sort((a, r) => {
    const l = a.y + Math.max(a.height, 1) / 2, c = r.y + Math.max(r.height, 1) / 2;
    return l - c || a.x - r.x;
  });
  for (const a of s) {
    const r = a.y + Math.max(a.height, 1) / 2, l = o[o.length - 1];
    if (l && Math.abs(l.centerY - r) <= i) {
      const c = l.blocks.length;
      l.blocks.push(a), l.centerY = (l.centerY * c + r) / (c + 1);
      continue;
    }
    o.push({ centerY: r, blocks: [a] });
  }
  return o.flatMap(
    (a) => a.blocks.sort((r, l) => r.x - l.x || r.y - l.y)
  );
}
async function bf(e) {
  return e.toDataURL("image/png");
}
async function Ns(e, t = "auto") {
  const n = Date.now();
  wt.log("[RapidOCR] recognizeFromImageData start", {
    imageDataLength: e.length,
    language: t
  });
  try {
    const i = await k(
      "recognize_text_from_image",
      {
        imageData: e,
        engine: "rapidocr",
        language: t
      }
    ), o = Hs(i.blocks), s = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || o.map((r) => r.text).join(`
`), a = {
      blocks: o,
      full_text: s,
      text: s,
      language: typeof i.language == "string" && i.language || gi(s),
      confidence: Number(i.confidence || 0),
      engine: typeof i.engine == "string" ? i.engine : "rapidocr"
    };
    return wt.log("[RapidOCR] recognizeFromImageData success", {
      durationMs: Date.now() - n,
      confidence: a.confidence,
      blocks: a.blocks.length,
      textLength: a.full_text.trim().length,
      textPreview: a.full_text.trim().slice(0, 300)
    }), a;
  } catch (i) {
    throw A.error("[OCR] RapidOCR recognizeFromImageData failed", i), wt.log("[RapidOCR] recognizeFromImageData failed", {
      durationMs: Date.now() - n,
      error: i instanceof Error ? `${i.name}: ${i.message}` : String(i)
    }), i;
  }
}
function Hs(e) {
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
async function Sf(e) {
  const t = Date.now(), n = await bf(e);
  wt.log("[RapidOCR] recognizeFromCanvas start", {
    width: e.width,
    height: e.height
  });
  try {
    const i = await k(
      "recognize_text_from_image",
      {
        imageData: n,
        engine: "rapidocr",
        language: "auto"
      }
    ), o = Hs(i.blocks), s = typeof i.full_text == "string" && i.full_text || typeof i.text == "string" && i.text || o.map((r) => r.text).join(`
`), a = {
      blocks: o,
      full_text: s,
      text: s,
      language: typeof i.language == "string" && i.language || gi(s),
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
async function Cf() {
  return Promise.resolve();
}
async function Mf() {
  return Promise.resolve();
}
const _f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  recognizeFromCanvas: Sf,
  recognizeFromImageData: Ns,
  sortOcrTextBlocksByReadingOrder: Bs,
  terminateOcr: Mf,
  warmupOcr: Cf
}, Symbol.toStringTag, { value: "Module" })), Tf = ["src", "alt"], Rf = { class: "ocr-header" }, zf = {
  class: "ocr-title-copy",
  "data-tauri-drag-region": ""
}, Pf = {
  class: "ocr-window-title",
  "data-tauri-drag-region": ""
}, Lf = { "data-tauri-drag-region": "" }, Af = {
  class: "ocr-source-inline",
  "data-tauri-drag-region": ""
}, If = {
  class: "ocr-source-name",
  "data-tauri-drag-region": ""
}, Df = { "data-tauri-drag-region": "" }, Ef = { class: "ocr-title-actions" }, Of = ["title"], $f = { class: "ocr-window-controls" }, Wf = ["title"], Bf = ["title"], Nf = ["title"], Hf = ["title"], jf = { class: "ocr-preview-pane" }, Ff = { class: "ocr-pane-header" }, Vf = { class: "ocr-pane-heading" }, Uf = { class: "ocr-pane-header-actions" }, Yf = ["title"], Xf = { class: "ocr-preview-canvas" }, Zf = ["src", "alt"], Gf = ["aria-label"], Kf = ["onClick"], qf = { class: "ocr-record-pane" }, Jf = { class: "ocr-pane-header result-header" }, Qf = { class: "ocr-pane-heading" }, tm = { key: 0 }, em = { key: 1 }, nm = { class: "ocr-pane-header-actions" }, im = ["title"], om = {
  key: 0,
  class: "ocr-state"
}, sm = { class: "ocr-ai-orbit" }, am = {
  key: 1,
  class: "ocr-state error"
}, rm = {
  key: 2,
  class: "ocr-state muted"
}, lm = {
  key: 0,
  class: "ocr-selection-translation"
}, cm = { class: "ocr-translation-section" }, hm = { class: "ocr-translation-label" }, um = { class: "ocr-translation-source" }, dm = { class: "ocr-translation-section result" }, gm = { class: "ocr-translation-label" }, fm = ["textContent"], mm = ["onClick"], pm = ["textContent"], ym = {
  key: 0,
  class: "ocr-record-translation"
}, wm = { class: "ocr-translation-label" }, vm = ["textContent"], xm = { class: "ocr-action-bar" }, km = ["onClick"], bm = { class: "engine-label" }, Sm = ["onClick"], Cm = { class: "engine-label" }, Mm = { class: "ocr-engine-btn-group relative" }, _m = {
  key: 2,
  class: "zoom-info"
}, Tm = 14, Rm = '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif', zm = /* @__PURE__ */ Mt({
  __name: "index",
  setup(e) {
    const { t } = Io(), n = E(), i = E(null), o = E(), s = E(), a = E(), r = /* @__PURE__ */ new Map(), l = E(""), c = E(""), u = E("pin"), d = E(""), y = E([]), v = E([]), S = E(null), g = E(!1), w = E(""), P = E("pending"), I = E(""), T = E(""), W = E(0), U = E(0), X = E({ width: 0, height: 0 }), V = E(1);
    let Y = null;
    const K = E(null), q = E(!1), J = E(!1), tt = E(!1), st = E(), vt = E({}), nt = E("bing"), j = E(!1), it = E(), pt = E({}), rt = E("auto"), dt = D(() => [
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
    ]), kt = D(() => [
      { value: "auto", label: t("pin.ocrLanguageAuto") },
      { value: "zh", label: t("pin.ocrLanguageZh") },
      { value: "zh-tw", label: t("pin.ocrLanguageZhTw") },
      { value: "en", label: t("pin.ocrLanguageEn") },
      { value: "ja", label: t("pin.ocrLanguageJa") },
      { value: "ko", label: t("pin.ocrLanguageKo") }
    ]), O = (h) => {
      const p = typeof h == "string" ? h.trim().toLowerCase() : "";
      return p === "auto" || p === "zh" || p === "zh-tw" || p === "en" || p === "ja" || p === "ko" ? p : "auto";
    }, zt = D(() => kt.value.find((h) => h.value === rt.value)?.label || t("pin.ocrLanguageAuto")), N = D(() => t("pin.translationResult")), _t = (h, p) => {
      if (!h) {
        p.value = {};
        return;
      }
      const _ = h.getBoundingClientRect(), Z = 180, G = 8, mt = Math.min(
        Math.max(
          _.left + _.width / 2,
          G + Z / 2
        ),
        window.innerWidth - G - Z / 2
      );
      p.value = {
        left: `${mt}px`,
        bottom: `${Math.max(8, window.innerHeight - _.top + 8)}px`
      };
    }, gt = () => {
      tt.value && _t(st.value, vt), j.value && _t(
        it.value,
        pt
      );
    }, Pt = E(1), Bt = E(!1), Kt = E(!1);
    let Ft = null;
    const M = E(!1), et = E({ x: 0, y: 0 }), ht = E(!0), lt = E({ width: 0, height: 0 });
    let Tt = null, yt = 0;
    const Yt = E(""), b = D(() => ({
      width: "100%",
      height: u.value === "ocr" ? "auto" : "100%",
      flex: u.value === "ocr" ? "1 1 auto" : void 0,
      minHeight: u.value === "ocr" ? "120px" : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    })), B = D(() => ({
      width: "100%",
      height: "100%",
      objectFit: "contain"
    })), ut = D(() => W.value > 0 && U.value > 0 ? `${W.value} × ${U.value}` : t("pin.screenshotPreview")), ft = D(() => g.value ? t("pin.recognizing") : w.value ? t("pin.recognizeFailed") : d.value.trim() ? t("pin.recognizeSuccess") : t("pin.noTextRecognized")), Q = D(() => g.value ? t("pin.aiRecognizing") : (P.value === "ai", t("pin.aiVision"))), St = D(() => {
      const h = Q.value;
      return I.value ? `${h} · ${I.value}` : h;
    }), Lt = D(
      () => y.value.filter((h) => h.selected)
    ), Et = D(() => g.value && !d.value.trim() && v.value.length === 0 ? t("pin.selectableTextPreparing") : v.value.length > 0 || d.value.trim() ? t("pin.nativeTextSelectionHint") : "");
    let ee;
    const re = /* @__PURE__ */ new Map(), qt = (h) => {
      const p = re.get(h);
      if (p !== void 0) return p;
      if (ee === void 0 && (ee = document.createElement("canvas").getContext("2d")), !ee) return 0;
      ee.font = `${Tm}px ${Rm}`;
      const _ = ee.measureText(h).width;
      return re.set(h, _), _;
    }, We = () => {
      const h = s.value, p = h?.naturalWidth || W.value, _ = h?.getBoundingClientRect().width || 0;
      if (p <= 0 || _ <= 0) return;
      const Z = _ / p;
      Math.abs(V.value - Z) > 1e-3 && (V.value = Z);
    }, js = () => {
      Y?.disconnect(), o.value && (Y = new ResizeObserver(We), Y.observe(o.value), We());
    }, Fs = (h) => W.value <= 0 || U.value <= 0 ? { display: "none" } : {
      position: "absolute",
      left: `${h.x / W.value * 100}%`,
      top: `${h.y / U.value * 100}%`,
      width: `${h.width / W.value * 100}%`,
      height: `${h.height / U.value * 100}%`
    }, Vs = (h) => {
      const p = qt(h.text), _ = h.width * V.value;
      return {
        transform: `scaleX(${p > 0 && _ > 0 ? _ / p : 1})`
      };
    }, Mi = (h) => h.replace(/[\s\p{P}\p{S}]/gu, "").toLowerCase(), Us = D(
      () => y.value.map((h) => ({
        id: h.id,
        normalized: Mi(h.text)
      }))
    ), _i = D(() => {
      const h = /* @__PURE__ */ new Map(), p = Us.value;
      for (let _ = 0; _ < v.value.length; _++) {
        const Z = Mi(v.value[_].text);
        let G = null;
        if (Z.length >= 2) {
          for (const mt of p)
            if (mt.normalized.includes(Z)) {
              G = mt.id;
              break;
            }
        }
        h.set(_, G);
      }
      return h;
    }), Ys = D(() => {
      const h = /* @__PURE__ */ new Set();
      if (!S.value) return h;
      for (const [p, _] of _i.value)
        _ === S.value && h.add(p);
      return h;
    }), Xs = (h, p) => {
      p instanceof HTMLElement ? r.set(h, p) : r.delete(h);
    }, Zs = (h) => {
      ie(() => {
        const p = a.value, _ = r.get(h);
        if (!p || !_) return;
        const Z = p.getBoundingClientRect(), G = _.getBoundingClientRect(), mt = 8, At = Z.top + mt, Ot = Z.bottom - mt;
        G.top < At ? p.scrollBy({
          top: G.top - At,
          behavior: "smooth"
        }) : G.bottom > Ot && p.scrollBy({
          top: G.bottom - Ot,
          behavior: "smooth"
        });
      });
    }, Gs = (h) => {
      const p = _i.value.get(h);
      p && S.value === p ? S.value = null : (S.value = p ?? null, p && Zs(p));
    }, Ks = (h) => {
      S.value = S.value === h ? null : h;
    }, Ti = D(() => Lt.value.length), qs = (h) => (h.translatedText || h.text).trim(), Ri = (h) => h.map(qs).filter(Boolean).join(`

`), on = () => {
      d.value = Ri(y.value);
    }, Js = () => {
      const h = /* @__PURE__ */ new Date(), p = (_) => _.toString().padStart(2, "0");
      return `${t("pin.screenshotPrefix")} ${h.getFullYear()}-${p(h.getMonth() + 1)}-${p(h.getDate())} ${p(h.getHours())}.${p(h.getMinutes())}.${p(h.getSeconds())}.png`;
    }, Qs = D(() => {
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
    }), ta = (h) => {
      l.value = h, W.value = 0, U.value = 0, X.value = { width: 0, height: 0 }, u.value === "ocr" && (T.value = Js()), c.value && (URL.revokeObjectURL(c.value), c.value = "");
      try {
        const p = h.split(",")[1] || h, _ = h.match(/data:([^;]+);/), Z = _ ? _[1] : "image/png", G = atob(p), mt = new Uint8Array(G.length);
        for (let Ot = 0; Ot < G.length; Ot++)
          mt[Ot] = G.charCodeAt(Ot);
        const At = new Blob([mt], { type: Z });
        c.value = URL.createObjectURL(At);
      } catch (p) {
        A.error("[PIN窗口] 转换 Blob URL 失败", p), c.value = h;
      }
    }, zi = async () => {
      await ie(), await new Promise((h) => requestAnimationFrame(() => h()));
      try {
        await i.value?.emit("pin-window-ready");
      } catch (h) {
        A.error("[PIN窗口] 发送 ready 事件失败", h);
      }
    }, Pi = (h) => {
      if (!h?.imageData)
        return A.error("[PIN窗口] 收到的事件数据格式不正确", h), !1;
      const p = h.mode === "ocr" ? "ocr" : "pin", _ = `${p}:${h.imageData.length}`;
      return _ === Yt.value ? !1 : (Yt.value = _, u.value = p, ta(h.imageData), Xt(), u.value === "ocr" ? (Li(h.text || ""), w.value = "", In()) : (yt++, g.value = !1, w.value = "", d.value = "", y.value = [], v.value = [], S.value = null), !0);
    }, ea = (h) => {
      const p = sa(h);
      p.length === 0 && !h.text.trim() || (y.value = p.length > 0 ? p : Ai(h.text), on(), P.value = "ai", I.value = h.modelName);
    }, na = async (h) => {
      try {
        const p = await Ns(
          l.value,
          rt.value === "auto" ? "auto" : rt.value
        );
        if (h !== yt) return;
        v.value = Bs(
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
    }, In = async () => {
      if (!l.value) return;
      const h = ++yt;
      K.value = null, g.value = !0, w.value = "", P.value = "pending", I.value = "", v.value = [], S.value = null;
      const p = Date.now();
      wt.log("[Pin OCR] recognize start", {
        requestId: h,
        imageDataLength: l.value.length,
        imageWidth: W.value,
        imageHeight: U.value,
        language: rt.value
      }), na(h);
      try {
        const _ = await kf(
          l.value,
          rt.value
        );
        if (h !== yt) return;
        if (!_.text.trim())
          throw new Error("AI_OCR_EMPTY_RESPONSE");
        ea(_), wt.log("[Pin AI OCR] recognize success", {
          requestId: h,
          durationMs: Date.now() - p,
          engine: P.value,
          textLength: d.value.length,
          textPreview: d.value.slice(0, 300)
        });
      } catch (_) {
        if (h !== yt) return;
        if (A.error("[PIN窗口] AI OCR 识别失败", _), wt.log("[Pin AI OCR] recognize failed", {
          requestId: h,
          durationMs: Date.now() - p,
          error: aa(_)
        }), d.value.trim()) {
          w.value = "";
          return;
        }
        w.value = t("pin.recognizeFailed"), d.value = "", y.value = [], S.value = null, $t.error(t("pin.recognizeFailed"));
      } finally {
        h === yt && (g.value = !1);
      }
    }, Li = (h) => {
      const p = h.trim();
      d.value = p, y.value = Ai(p), v.value = [], S.value = null;
    }, Ai = (h) => h.split(/\n{2,}|\n/).map((p, _) => oa(p, _)).filter((p) => p.text.trim()), ia = (h, p) => p === 0 && h.length <= 80 && !/[。！？.!?]\s*$/.test(h) ? "title" : /^\s*(?:[-*+•·]|\d+[.)、）])\s+/.test(h) ? "list" : "paragraph", oa = (h, p) => ({
      id: `plain-${Date.now()}-${p}`,
      kind: ia(h, p),
      text: h.trim(),
      sourceText: h.trim(),
      translatedText: "",
      confidence: 0,
      selected: !1
    }), sa = (h) => {
      const p = Date.now();
      return h.sections.map((_, Z) => ({
        id: `ai-${p}-${Z}`,
        kind: _.type,
        text: _.text.trim(),
        sourceText: _.text.trim(),
        translatedText: "",
        confidence: 0,
        selected: !1
      })).filter((_) => _.text);
    }, aa = (h) => h instanceof Error ? `${h.name}: ${h.message}
${h.stack || ""}`.trim() : typeof h == "string" ? h : JSON.stringify(h) || String(h), Dn = async () => {
      const h = ca();
      h && await ra(h);
    }, ra = async (h) => {
      try {
        await navigator.clipboard.writeText(h), $t.success(t("pin.copySuccess"));
      } catch (p) {
        A.error("[PIN窗口] 复制识别文本失败", p), $t.error(t("pin.copyFailed"));
      } finally {
        Xt();
      }
    }, la = async () => {
      on();
      const h = d.value.trim();
      if (h)
        try {
          await k("save_text_to_file", { text: h }), $t.success(t("pin.saveSuccess"));
        } catch (p) {
          p !== "SAVE_CANCELLED" && (A.error("[PIN窗口] 保存文本失败", p), $t.error(t("pin.saveFailed")));
        }
    }, ca = () => {
      const h = Ii();
      if (h)
        return h;
      const p = Ri(
        Lt.value
      );
      return p || (on(), d.value.trim());
    }, Ii = () => {
      const h = window.getSelection(), p = n.value?.querySelector(".ocr-reading-surface");
      if (!h || h.rangeCount === 0 || !p)
        return "";
      for (let _ = 0; _ < h.rangeCount; _ += 1) {
        const G = h.getRangeAt(_).commonAncestorContainer;
        if (p.contains(G))
          return h.toString().trim();
      }
      return "";
    }, ha = (h) => {
      const p = h.target;
      !p || !K.value || (K.value.translatedText = p.innerText.trim());
    }, ua = async () => {
      tt.value = !tt.value, j.value = !1, tt.value && (await ie(), gt());
    }, da = (h) => {
      nt.value = h, tt.value = !1, k("set_translation_engine", { engine: h }).catch((p) => {
        A.error("[PIN窗口] 保存翻译引擎设置失败", p);
      });
    }, Di = async () => {
      j.value = !j.value, tt.value = !1, j.value && (await ie(), gt());
    }, ga = (h) => {
      rt.value = h, j.value = !1, k("set_ocr_language", { language: h }).catch((p) => {
        A.error("[PIN窗口] 保存 OCR 语言设置失败", p);
      }), l.value && In();
    }, fa = async () => {
      if (Xt(), tt.value = !1, j.value = !1, !d.value.trim() || J.value) return;
      const h = Ii(), p = h ? [] : Lt.value.length > 0 ? Lt.value : y.value, _ = h || (p.length > 0 ? p.map((G) => G.text).join(`

`) : d.value), Z = me(_);
      if (!Pe(Z)) {
        $t.warning(t("pin.unsupportedTranslateLanguage"));
        return;
      }
      J.value = !0;
      try {
        if (await ma(), h) {
          const G = await En(
            h,
            Z
          );
          G && (K.value = {
            sourceText: h,
            translatedText: G.trim()
          }), $t.success(t("pin.translateSuccess"));
        } else if (p.length > 0) {
          for (const G of p) {
            const mt = await En(
              G.text,
              Z
            );
            mt && (G.translatedText = mt.trim());
          }
          on(), $t.success(t("pin.translateSuccess"));
        } else {
          const G = await En(
            d.value,
            Z
          );
          G && Li(G), $t.success(t("pin.translateSuccess"));
        }
      } catch (G) {
        A.error("[PIN窗口] 翻译失败", G);
        const mt = G instanceof Error ? G.message : String(G);
        if (mt !== "翻译已取消") {
          const At = [
            t("pin.offlineModelNotDownloaded"),
            t("pin.offlineModelNotActivated")
          ];
          $t.error(
            At.includes(mt) ? mt : t("pin.translateFailed")
          );
        }
      } finally {
        J.value = !1;
      }
    }, ma = async () => {
      if (nt.value !== "offline")
        return;
      if ((await ci()).isCached)
        await Uo();
      else
        throw new Error(t("pin.offlineModelNotDownloaded"));
      if (!await k("get_offline_model_activated"))
        throw new Error(t("pin.offlineModelNotActivated"));
    }, En = async (h, p) => {
      const _ = h.trim();
      if (!_)
        return "";
      if (nt.value === "offline")
        return Vo(_);
      const Z = p === "zh" ? "en" : "zh";
      return nt.value === "local-ai" ? (await Ql(
        {
          text: _,
          from: "auto",
          to: Z
        },
        {
          providerId: Dt,
          contextCollection: {
            kind: "selection",
            input: {
              selectionText: _,
              selectionSource: "pin.ocr"
            }
          }
        }
      )).text : await k("translate_text", {
        text: _,
        from: "auto",
        to: Z,
        engine: nt.value
      });
    }, pa = (h) => {
      sn(h);
    }, ya = async () => {
      if (!i.value) return;
      const h = i.value;
      typeof h.minimize == "function" && await h.minimize();
    }, wa = async () => {
      if (!i.value) return;
      const h = i.value;
      (typeof h.isMaximized == "function" ? await h.isMaximized() : !1) && typeof h.unmaximize == "function" ? await h.unmaximize() : typeof h.maximize == "function" && await h.maximize();
    }, Ei = async (h) => {
      const p = h.target;
      if (W.value = p.naturalWidth, U.value = p.naturalHeight, u.value === "ocr" && (await ie(), js()), i.value && X.value.width === 0)
        try {
          const _ = await i.value.innerSize(), Z = await i.value.scaleFactor(), G = _.toLogical(Z);
          X.value = {
            width: G.width,
            height: G.height
          };
        } catch (_) {
          A.error("[PIN窗口] 获取窗口初始尺寸失败", _);
        }
    }, Oi = async (h) => {
      if (h.ctrlKey && (h.preventDefault(), h.stopPropagation(), !Kt.value && i.value)) {
        Kt.value = !0;
        try {
          const _ = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Z = h.deltaY > 0 ? 0.95 : 1.05, G = _.width, mt = _.height, At = Math.round(G * Z), Ot = Math.round(mt * Z), Be = 50, le = 3e3;
          if (At >= Be && At <= le && Ot >= Be && Ot <= le) {
            if (await i.value.setSize(new Ve(At, Ot)), W.value > 0) {
              const ge = Math.round(
                At / W.value * 100
              );
              Pt.value = ge / 100;
            }
            Bt.value = !0, On();
          }
        } catch (p) {
          A.error("[PIN窗口] 窗口缩放失败", p);
        } finally {
          setTimeout(() => {
            Kt.value = !1;
          }, 100);
        }
      }
    }, va = (h) => {
      u.value === "ocr" && h.ctrlKey && Oi(h);
    }, On = () => {
      Bt.value = !0, Ft && clearTimeout(Ft), Ft = setTimeout(() => {
        Bt.value = !1;
      }, 1e3);
    }, sn = (h) => {
      h.preventDefault(), h.stopPropagation(), M.value = !1, setTimeout(() => {
        const p = window.innerWidth, _ = window.innerHeight;
        lt.value = { width: p, height: _ };
        const Z = Math.min(p, _);
        let G = 1;
        Z < 300 && (G = Math.max(0.4, Z / 300));
        const mt = u.value === "ocr" ? 176 : 150, At = u.value === "ocr" && d.value.trim() ? 222 : 180, Ot = mt * G, Be = At * G;
        let le = h.clientX, ge = h.clientY;
        le + Ot > p && (le = p - Ot - 5), ge + Be > _ && (ge = _ - Be - 5), le = Math.max(5, le), ge = Math.max(5, ge), et.value = { x: le, y: ge }, M.value = !0;
      }, 10);
    }, Xt = () => {
      M.value = !1, tt.value = !1, j.value = !1;
    }, $i = async () => {
      i.value && (ht.value = !ht.value, await i.value.setAlwaysOnTop(ht.value), Xt());
    }, Wi = async (h) => {
      if (i.value && !Kt.value) {
        Kt.value = !0;
        try {
          const _ = (await i.value.innerSize()).toLogical(
            await i.value.scaleFactor()
          ), Z = Math.round(_.width * h), G = Math.round(_.height * h), mt = 50, At = 3e3;
          Z >= mt && Z <= At && G >= mt && G <= At && (await i.value.setSize(new Ve(Z, G)), W.value > 0 && (Pt.value = Z / W.value), On());
        } catch (p) {
          A.error("[PIN窗口] 键盘缩放失败", p);
        } finally {
          setTimeout(() => {
            Kt.value = !1;
          }, 100);
        }
      }
    }, Bi = async () => {
      if (i.value && X.value.width > 0 && X.value.height > 0)
        try {
          await i.value.setSize(
            new Ve(
              X.value.width,
              X.value.height
            )
          ), Pt.value = 1, On();
        } catch (h) {
          A.error("[PIN窗口] 重置缩放失败", h);
        }
      Xt();
    }, xa = async () => {
      try {
        const h = l.value;
        Xt(), i.value && await i.value.hide(), await k("copy_image_to_clipboard", { imageData: h }), $t.success(t("pin.copySuccess")), i.value && await i.value.close();
      } catch (h) {
        A.error("[PIN窗口] 复制图片失败", h), $t.error(t("pin.copyFailed")), i.value && await i.value.close();
      }
    }, ka = async () => {
      const h = l.value;
      Xt(), i.value && await i.value.hide();
      try {
        await k("save_pin_image", { imageData: h }), $t.success(t("pin.saveSuccess")), i.value && await i.value.close();
      } catch (p) {
        p === "SAVE_CANCELLED" ? (A.info("[PIN窗口] 用户取消保存，恢复窗口显示"), i.value && await i.value.show()) : (A.error("[PIN窗口] 保存图片失败", p), $t.error(t("pin.saveFailed")), i.value && await i.value.close());
      }
    }, $n = async () => {
      i.value && await i.value.close();
    }, Ni = (h) => {
      h.preventDefault();
    }, Hi = async (h) => {
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
    }, ji = (h) => {
      const p = h.target;
      !p.closest(".context-menu") && !p.closest(".ocr-engine-btn-group") && !p.closest(".translate-btn-group") && !p.closest(".ocr-floating-menu") && Xt();
    }, Fi = (h) => {
      if (h.altKey && h.code === "Space") {
        h.preventDefault(), h.stopPropagation();
        return;
      }
      h.key === "Escape" ? M.value ? Xt() : $n() : (h.ctrlKey || h.metaKey) && (h.key === "0" ? (h.preventDefault(), Bi()) : h.key === "=" || h.key === "+" ? (h.preventDefault(), Wi(1.05)) : h.key === "-" && (h.preventDefault(), Wi(0.95)));
    }, ba = async () => {
      if (i.value)
        try {
          const h = await k(
            "get_pin_window_data",
            { label: i.value.label }
          );
          h && Pi(h) && await zi();
        } catch (h) {
          A.error("[PIN窗口] 主动获取窗口数据失败", h);
        }
    };
    return tn(async () => {
      if (n.value) {
        try {
          const [h, p] = await Promise.all([
            k("get_translation_engine"),
            k("get_ocr_language")
          ]);
          (h === "google" || h === "bing" || h === "offline" || h === "local-ai") && (nt.value = h), rt.value = O(p);
        } catch (h) {
          A.error("[PIN窗口] 读取默认 OCR/翻译设置失败", h);
        }
        try {
          i.value = en.getCurrent();
          try {
            Tt = await i.value.listen(
              "pin-window-data",
              (h) => {
                Pi(h.payload) && zi();
              }
            ), await ba();
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
        document.addEventListener("click", ji), document.addEventListener("keydown", Fi, !0), document.addEventListener("contextmenu", Ni, !0), window.addEventListener("resize", gt), window.addEventListener("resize", We), window.addEventListener("scroll", gt, !0), window.addEventListener("blur", Xt), document.body && (document.body.oncontextmenu = (h) => (h.preventDefault(), !1));
      }
    }), si(() => {
      c.value && URL.revokeObjectURL(c.value), Tt && Tt(), document.removeEventListener("click", ji), document.removeEventListener("keydown", Fi, !0), document.removeEventListener("contextmenu", Ni, !0), window.removeEventListener("resize", gt), window.removeEventListener("resize", We), window.removeEventListener("scroll", gt, !0), window.removeEventListener("blur", Xt), Y?.disconnect(), document.body && (document.body.oncontextmenu = null), Ft && clearTimeout(Ft);
    }), (h, p) => (L(), $(
      "div",
      {
        class: at(["pin-container", { "ocr-mode": u.value === "ocr" }]),
        ref_key: "containerRef",
        ref: n,
        onContextmenu: xt(sn, ["prevent"]),
        onWheelCapture: va
      },
      [
        H(" 图片容器 "),
        c.value && u.value === "pin" ? (L(), $(
          "div",
          {
            key: 0,
            class: "image-wrapper",
            style: ct(b.value),
            onWheelCapture: Oi,
            onContextmenu: xt(sn, ["prevent"]),
            "data-tauri-drag-region": "",
            onMousedown: Hi
          },
          [
            x("img", {
              src: c.value,
              alt: h.$t("screenshot.pin"),
              style: ct(B.value),
              onLoad: Ei,
              draggable: "false",
              "data-tauri-drag-region": ""
            }, null, 44, Tf)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : H("v-if", !0),
        u.value === "ocr" ? (L(), $(
          "section",
          {
            key: 1,
            class: "ocr-shell",
            onContextmenu: xt(sn, ["prevent"])
          },
          [
            x("header", Rf, [
              x(
                "div",
                {
                  class: "ocr-titlebar",
                  "data-tauri-drag-region": "",
                  onMousedown: Hi
                },
                [
                  x("div", zf, [
                    x("div", Pf, [
                      m(C(Qn), {
                        theme: "outline",
                        size: "18"
                      }),
                      x(
                        "span",
                        Lf,
                        F(h.$t("pin.ocrResult")),
                        1
                        /* TEXT */
                      )
                    ]),
                    x("div", Af, [
                      x(
                        "span",
                        If,
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
                        Df,
                        F(ut.value),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  x("div", Ef, [
                    x("div", {
                      class: at(["ocr-engine-status", `is-${P.value}`]),
                      title: St.value
                    }, [
                      g.value ? (L(), Ct(C(ho), {
                        key: 0,
                        class: "ocr-loading-icon",
                        size: "14",
                        theme: "outline"
                      })) : (L(), Ct(C(jn), {
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
                    ], 10, Of),
                    x("div", $f, [
                      x("button", {
                        class: "ocr-window-btn",
                        title: ht.value ? h.$t("pin.togglePin") : h.$t("pin.pinWindow"),
                        onClick: xt($i, ["stop"])
                      }, [
                        (L(), Ct(we(ht.value ? C(Jn) : C(uo)), {
                          size: "18",
                          theme: "outline"
                        }))
                      ], 8, Wf),
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
                        onClick: xt(ya, ["stop"])
                      }, [
                        m(C(cs), {
                          size: "18",
                          theme: "outline"
                        })
                      ], 8, Bf),
                      x("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.maximize"),
                        onClick: xt(wa, ["stop"])
                      }, [
                        m(C(ph), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 5
                        })
                      ], 8, Nf),
                      x("button", {
                        class: "ocr-window-btn",
                        title: h.$t("pin.close"),
                        onClick: xt($n, ["stop"])
                      }, [
                        m(C(qn), {
                          size: "14",
                          theme: "outline",
                          strokeWidth: 6
                        })
                      ], 8, Hf)
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
                m(gf, {
                  class: "ocr-result-layout",
                  "default-size": "44%",
                  "min-size": "26%",
                  "max-size": "72%",
                  "second-collapsed": q.value
                }, {
                  first: Rt(() => [
                    x("section", jf, [
                      x("header", Ff, [
                        x("div", Vf, [
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
                            F(Et.value),
                            1
                            /* TEXT */
                          )
                        ]),
                        x("div", Uf, [
                          q.value ? (L(), $("button", {
                            key: 0,
                            type: "button",
                            class: "ocr-panel-toggle",
                            title: h.$t("pin.showAiPanel"),
                            onClick: p[0] || (p[0] = xt((_) => q.value = !1, ["stop"]))
                          }, [
                            m(C(ah), {
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
                          ], 8, Yf)) : H("v-if", !0)
                        ])
                      ]),
                      x("div", Xf, [
                        x(
                          "div",
                          {
                            ref_key: "ocrPreviewStageRef",
                            ref: o,
                            class: at(["ocr-preview-stage", { "has-text-overlay": v.value.length > 0 }])
                          },
                          [
                            x("img", {
                              ref_key: "ocrPreviewImageRef",
                              ref: s,
                              src: c.value || l.value,
                              alt: h.$t("pin.ocrSourceAlt"),
                              onLoad: Ei
                            }, null, 40, Zf),
                            H(` 透明可选文字层：每个 RapidOCR 文字块按真实 bbox 坐标定位在图片上，\r
                       文字透明不可见但可选，参考 Umi-OCR 的实现 `),
                            v.value.length > 0 ? (L(), $("div", {
                              key: 0,
                              class: "ocr-text-block-layer",
                              "aria-label": h.$t("pin.selectableTextView")
                            }, [
                              (L(!0), $(
                                Vt,
                                null,
                                te(v.value, (_, Z) => (L(), $("span", {
                                  key: `ocr-block-${Z}`,
                                  class: at(["ocr-text-block-item", { "is-linked": Ys.value.has(Z) }]),
                                  style: ct(Fs(_)),
                                  onClick: (G) => Gs(Z)
                                }, [
                                  x(
                                    "span",
                                    {
                                      class: "ocr-text-block-text",
                                      style: ct(Vs(_))
                                    },
                                    F(_.text),
                                    5
                                    /* TEXT, STYLE */
                                  )
                                ], 14, Kf))),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ], 8, Gf)) : H("v-if", !0)
                          ],
                          2
                          /* CLASS */
                        )
                      ])
                    ])
                  ]),
                  second: Rt(() => [
                    x("section", qf, [
                      x("header", Jf, [
                        x("div", Qf, [
                          x(
                            "strong",
                            null,
                            F(h.$t("pin.aiRecognizedText")),
                            1
                            /* TEXT */
                          ),
                          d.value.trim() ? (L(), $(
                            "span",
                            tm,
                            F(h.$t("pin.resultStats", {
                              sections: y.value.length,
                              characters: d.value.length
                            })),
                            1
                            /* TEXT */
                          )) : (L(), $(
                            "span",
                            em,
                            F(ft.value),
                            1
                            /* TEXT */
                          ))
                        ]),
                        x("div", nm, [
                          m(ne, {
                            class: "ocr-inline-copy",
                            type: "text",
                            title: h.$t("pin.copyText"),
                            disabled: !d.value.trim(),
                            onClick: xt(Dn, ["stop"])
                          }, {
                            default: Rt(() => [
                              m(C(un), {
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
                            m(C(fh), {
                              size: "14",
                              theme: "outline"
                            })
                          ], 8, im)
                        ])
                      ]),
                      g.value && !d.value.trim() ? (L(), $("div", om, [
                        x("div", sm, [
                          m(C(jn), {
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
                      ])) : w.value && !d.value.trim() ? (L(), $("div", am, [
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
                      ])) : d.value.trim() ? (L(), $(
                        "div",
                        {
                          key: 3,
                          ref_key: "ocrResultScrollRef",
                          ref: a,
                          class: "ocr-result-scroll"
                        },
                        [
                          K.value ? (L(), $("section", lm, [
                            x("div", cm, [
                              x(
                                "span",
                                hm,
                                F(h.$t("pin.selectedText")),
                                1
                                /* TEXT */
                              ),
                              x(
                                "div",
                                um,
                                F(K.value.sourceText),
                                1
                                /* TEXT */
                              )
                            ]),
                            x("div", dm, [
                              x(
                                "span",
                                gm,
                                F(N.value),
                                1
                                /* TEXT */
                              ),
                              x("div", {
                                class: "ocr-selection-translation-editor",
                                contenteditable: "plaintext-only",
                                spellcheck: "false",
                                textContent: F(K.value.translatedText),
                                onBlur: ha
                              }, null, 40, fm)
                            ])
                          ])) : H("v-if", !0),
                          (L(!0), $(
                            Vt,
                            null,
                            te(y.value, (_) => (L(), $("article", {
                              key: _.id,
                              ref_for: !0,
                              ref: (Z) => Xs(_.id, Z),
                              class: at(["ocr-record-item", [
                                `is-${_.kind}`,
                                {
                                  selected: _.selected,
                                  "is-linked": S.value === _.id
                                }
                              ]]),
                              onClick: (Z) => Ks(_.id)
                            }, [
                              x("div", {
                                class: "ocr-record-text",
                                textContent: F(_.text)
                              }, null, 8, pm),
                              _.translatedText ? (L(), $("div", ym, [
                                x(
                                  "span",
                                  wm,
                                  F(N.value),
                                  1
                                  /* TEXT */
                                ),
                                x("div", {
                                  class: "ocr-record-text translated",
                                  textContent: F(_.translatedText)
                                }, null, 8, vm)
                              ])) : H("v-if", !0)
                            ], 10, mm))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ],
                        512
                        /* NEED_PATCH */
                      )) : (L(), $(
                        "div",
                        rm,
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
            x("footer", xm, [
              m(ne, {
                class: "ocr-action-btn primary",
                type: "text",
                title: h.$t("pin.copyText"),
                disabled: !d.value.trim(),
                onClick: xt(Dn, ["stop"])
              }, {
                default: Rt(() => [
                  m(C(un), {
                    size: "18",
                    theme: "outline",
                    strokeWidth: 2.5
                  }),
                  x(
                    "span",
                    null,
                    F(Ti.value > 0 ? `${h.$t("pin.copyText")} (${Ti.value})` : h.$t("pin.copyText")),
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
                  ref: st,
                  class: "translate-btn-group relative"
                },
                [
                  m(ne, {
                    class: "ocr-action-btn translate-main",
                    type: "text",
                    title: h.$t("pin.translate"),
                    disabled: !d.value.trim() || J.value,
                    onClick: xt(fa, ["stop"])
                  }, {
                    default: Rt(() => [
                      J.value ? (L(), Ct(C(ho), {
                        key: 1,
                        class: "ocr-loading-icon",
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      })) : (L(), Ct(C(hs), {
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
                  m(ne, {
                    class: "ocr-action-btn translate-arrow",
                    type: "text",
                    disabled: !d.value.trim() || J.value,
                    onClick: xt(ua, ["stop"])
                  }, {
                    default: Rt(() => [
                      m(C(co), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 2.7
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  H(" 翻译引擎菜单 "),
                  tt.value ? (L(), $(
                    "div",
                    {
                      key: 0,
                      class: "translate-menu ocr-floating-menu",
                      style: ct(vt.value)
                    },
                    [
                      (L(!0), $(
                        Vt,
                        null,
                        te(dt.value, (_) => (L(), $("div", {
                          key: _.value,
                          class: at(["menu-item", { active: nt.value === _.value }]),
                          onClick: (Z) => da(_.value)
                        }, [
                          x(
                            "span",
                            bm,
                            F(_.label),
                            1
                            /* TEXT */
                          ),
                          nt.value === _.value ? (L(), Ct(we(C(Kn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : H("v-if", !0)
                        ], 10, km))),
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
                  ref: it,
                  class: "ocr-engine-btn-group relative"
                },
                [
                  m(ne, {
                    class: "ocr-action-btn ocr-engine-main",
                    type: "text",
                    title: h.$t("pin.ocrLanguage"),
                    disabled: g.value,
                    onClick: xt(Di, ["stop"])
                  }, {
                    default: Rt(() => [
                      m(C(Qn), {
                        size: "18",
                        theme: "outline",
                        strokeWidth: 2.5
                      }),
                      x(
                        "span",
                        null,
                        F(zt.value),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title", "disabled"]),
                  m(ne, {
                    class: "ocr-action-btn ocr-engine-arrow",
                    type: "text",
                    disabled: g.value,
                    onClick: xt(Di, ["stop"])
                  }, {
                    default: Rt(() => [
                      m(C(co), {
                        size: "14",
                        theme: "outline",
                        strokeWidth: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  j.value ? (L(), $(
                    "div",
                    {
                      key: 0,
                      class: "ocr-engine-menu ocr-floating-menu",
                      style: ct(pt.value)
                    },
                    [
                      (L(!0), $(
                        Vt,
                        null,
                        te(kt.value, (_) => (L(), $("div", {
                          key: _.value,
                          class: at(["menu-item", { active: rt.value === _.value }]),
                          onClick: (Z) => ga(_.value)
                        }, [
                          x(
                            "span",
                            Cm,
                            F(_.label),
                            1
                            /* TEXT */
                          ),
                          rt.value === _.value ? (L(), Ct(we(C(Kn)), {
                            key: 0,
                            class: "menu-item-icon",
                            size: "16"
                          })) : H("v-if", !0)
                        ], 10, Sm))),
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
              x("div", Mm, [
                m(ne, {
                  class: "ocr-action-btn ocr-engine-main",
                  type: "text",
                  title: h.$t("pin.recognizeAgain"),
                  disabled: g.value || !l.value,
                  onClick: xt(In, ["stop"])
                }, {
                  default: Rt(() => [
                    m(C(jn), {
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
              m(ne, {
                class: "ocr-action-btn",
                type: "text",
                title: h.$t("pin.saveAsText"),
                disabled: !d.value.trim(),
                onClick: xt(la, ["stop"])
              }, {
                default: Rt(() => [
                  m(C(fo), {
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
              m(ne, {
                class: "ocr-action-btn more",
                type: "text",
                title: h.$t("pin.more"),
                onClick: xt(pa, ["stop"])
              }, {
                default: Rt(() => [
                  m(C(lh), {
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
        Bt.value ? (L(), $(
          "div",
          _m,
          F(Math.round(Pt.value * 100)) + "% ",
          1
          /* TEXT */
        )) : H("v-if", !0),
        H(" 右键菜单 "),
        M.value ? (L(), $(
          "div",
          {
            key: 3,
            class: "context-menu",
            style: ct(Qs.value)
          },
          [
            x("div", {
              class: "menu-item",
              onClick: $i
            }, [
              (L(), Ct(we(ht.value ? C(uo) : C(Jn)), {
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
              onClick: Bi
            }, [
              m(C(dh), {
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
              onClick: xa
            }, [
              m(C(un), {
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
              onClick: ka
            }, [
              m(C(fo), {
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
            u.value === "ocr" && d.value.trim() ? (L(), $("div", {
              key: 0,
              class: "menu-item",
              onClick: Dn
            }, [
              m(C(un), {
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
              onClick: $n
            }, [
              m(C(qn), {
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
}), Pm = /* @__PURE__ */ nn(zm, [["__scopeId", "data-v-6cb5583e"]]), Lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pm
}, Symbol.toStringTag, { value: "Module" }));
export {
  Em as activate
};
