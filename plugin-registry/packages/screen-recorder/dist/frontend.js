import { inject as De, createVNode as A, getCurrentInstance as Qe, ref as M, computed as y, unref as r, readonly as Va, getCurrentScope as Ya, onScopeDispose as Xa, onMounted as jt, nextTick as _e, watch as ke, isRef as qa, warn as Ka, provide as Za, defineComponent as K, createElementBlock as O, openBlock as C, mergeProps as Ja, renderSlot as et, createElementVNode as l, normalizeClass as B, Transition as bn, withCtx as We, withDirectives as Ae, normalizeStyle as ce, createTextVNode as Qa, toDisplayString as x, vShow as Nt, shallowReactive as eo, createBlock as Me, createCommentVNode as se, resolveDynamicComponent as Es, Fragment as be, withModifiers as Te, isVNode as yt, render as Lt, onUnmounted as Cn, renderList as Ps, vModelSelect as hn } from "vue";
import { useI18n as to } from "vue-i18n";
const uu = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => ru)
  });
};
function no(e, t, n, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? a : n === "a" ? a.call(e) : a ? a.value : t.get(e);
}
function so(e, t, n, a, i) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Et;
const ue = "__TAURI_TO_IPC_KEY__";
function ao(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function h(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function oo(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class io {
  get rid() {
    return no(this, Et, "f");
  }
  constructor(t) {
    Et.set(this, void 0), so(this, Et, t);
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
Et = /* @__PURE__ */ new WeakMap();
class le {
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
    return new Fe(this.width * t, this.height * t);
  }
  [ue]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ue]();
  }
}
class Fe {
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
    return new le(this.width / t, this.height / t);
  }
  [ue]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ue]();
  }
}
class Ze {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof le ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Fe ? this.size : this.size.toPhysical(t);
  }
  [ue]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ue]();
  }
}
class Is {
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
    return new Ce(this.x * t, this.y * t);
  }
  [ue]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ue]();
  }
}
class Ce {
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
    return new Is(this.x / t, this.y / t);
  }
  [ue]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ue]();
  }
}
class Tt {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Is ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Ce ? this.position : this.position.toPhysical(t);
  }
  [ue]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ue]();
  }
}
var oe;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(oe || (oe = {}));
async function $s(e, t) {
  await h("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function zt(e, t, n) {
  var a;
  const i = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (a = n?.target) !== null && a !== void 0 ? a : { kind: "Any" };
  return h("plugin:event|listen", {
    event: e,
    target: i,
    handler: ao(t)
  }).then((u) => async () => $s(e, u));
}
async function ro(e, t, n) {
  return zt(e, (a) => {
    $s(e, a.id), t(a);
  }, n);
}
async function lo(e, t) {
  await h("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function co(e, t, n) {
  await h("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class wt extends io {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, a) {
    return h("plugin:image|new", {
      rgba: Dt(t),
      width: n,
      height: a
    }).then((i) => new wt(i));
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
      bytes: Dt(t)
    }).then((n) => new wt(n));
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
    return h("plugin:image|from_path", { path: t }).then((n) => new wt(n));
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
function Dt(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof wt ? e.rid : e;
}
var wn;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(wn || (wn = {}));
class uo {
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
var ss;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ss || (ss = {}));
function Ns() {
  return new Ls(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function pn() {
  return h("plugin:window|get_all_windows").then((e) => e.map((t) => new Ls(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const fn = ["tauri://created", "tauri://error"];
class Ls {
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
    var a;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || h("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (a = n.parent) === null || a === void 0 ? void 0 : a.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (i) => this.emit("tauri://error", i));
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
    return (n = (await pn()).find((a) => a.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ns();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return pn();
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
    for (const t of await pn())
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
      const a = this.listeners[t];
      a.splice(a.indexOf(n), 1);
    } : zt(t, n, {
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
      const a = this.listeners[t];
      a.splice(a.indexOf(n), 1);
    } : ro(t, n, {
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
    if (fn.includes(t)) {
      for (const a of this.listeners[t] || [])
        a({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return lo(t, n);
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
  async emitTo(t, n, a) {
    if (fn.includes(n)) {
      for (const i of this.listeners[n] || [])
        i({
          event: n,
          id: -1,
          payload: a
        });
      return;
    }
    return co(t, n, a);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return fn.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new Ce(t));
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
    }).then((t) => new Ce(t));
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
    }).then((t) => new Fe(t));
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
    }).then((t) => new Fe(t));
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
    return t && (t === wn.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), h("plugin:window|request_user_attention", {
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
      value: t instanceof Ze ? t : new Ze(t)
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
      value: t instanceof Ze ? t : t ? new Ze(t) : null
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
      value: t instanceof Ze ? t : t ? new Ze(t) : null
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
    function n(a) {
      return a ? { Logical: a } : null;
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
      value: t instanceof Tt ? t : new Tt(t)
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
      value: Dt(t)
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
      value: t instanceof Tt ? t : new Tt(t)
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
      value: t ? Dt(t) : void 0
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
    return this.listen(oe.WINDOW_RESIZED, (n) => {
      n.payload = new Fe(n.payload), t(n);
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
    return this.listen(oe.WINDOW_MOVED, (n) => {
      n.payload = new Ce(n.payload), t(n);
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
    return this.listen(oe.WINDOW_CLOSE_REQUESTED, async (n) => {
      const a = new uo(n);
      await t(a), a.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(oe.DRAG_ENTER, (c) => {
      t({
        ...c,
        payload: {
          type: "enter",
          paths: c.payload.paths,
          position: new Ce(c.payload.position)
        }
      });
    }), a = await this.listen(oe.DRAG_OVER, (c) => {
      t({
        ...c,
        payload: {
          type: "over",
          position: new Ce(c.payload.position)
        }
      });
    }), i = await this.listen(oe.DRAG_DROP, (c) => {
      t({
        ...c,
        payload: {
          type: "drop",
          paths: c.payload.paths,
          position: new Ce(c.payload.position)
        }
      });
    }), u = await this.listen(oe.DRAG_LEAVE, (c) => {
      t({ ...c, payload: { type: "leave" } });
    });
    return () => {
      n(), i(), a(), u();
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
    const n = await this.listen(oe.WINDOW_FOCUS, (i) => {
      t({ ...i, payload: !0 });
    }), a = await this.listen(oe.WINDOW_BLUR, (i) => {
      t({ ...i, payload: !1 });
    });
    return () => {
      n(), a();
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
    return this.listen(oe.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(oe.WINDOW_THEME_CHANGED, t);
  }
}
var as;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(as || (as = {}));
var os;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(os || (os = {}));
var is;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(is || (is = {}));
function ho(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Ce(e.position),
    size: new Fe(e.size)
  };
}
async function Le(e, t) {
  return h("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(ho);
}
var po = {
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
function fo() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function vo(e, t, n) {
  var a = typeof t.fill == "string" ? [t.fill] : t.fill || [], i = [], u = t.theme || n.theme;
  switch (u) {
    case "outline":
      i.push(typeof a[0] == "string" ? a[0] : "currentColor"), i.push("none"), i.push(typeof a[0] == "string" ? a[0] : "currentColor"), i.push("none");
      break;
    case "filled":
      i.push(typeof a[0] == "string" ? a[0] : "currentColor"), i.push(typeof a[0] == "string" ? a[0] : "currentColor"), i.push("#FFF"), i.push("#FFF");
      break;
    case "two-tone":
      i.push(typeof a[0] == "string" ? a[0] : "currentColor"), i.push(typeof a[1] == "string" ? a[1] : n.colors.twoTone.twoTone), i.push(typeof a[0] == "string" ? a[0] : "currentColor"), i.push(typeof a[1] == "string" ? a[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      i.push(typeof a[0] == "string" ? a[0] : "currentColor"), i.push(typeof a[1] == "string" ? a[1] : n.colors.multiColor.outFillColor), i.push(typeof a[2] == "string" ? a[2] : n.colors.multiColor.innerStrokeColor), i.push(typeof a[3] == "string" ? a[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: i,
    id: e
  };
}
var go = Symbol("icon-context");
function Ht(e, t, n) {
  var a = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(u) {
      var c = fo(), d = De(go, po);
      return function() {
        var w = u.size, g = u.strokeWidth, v = u.strokeLinecap, m = u.strokeLinejoin, I = u.theme, P = u.fill, L = u.spin, _ = vo(c, {
          size: w,
          strokeWidth: g,
          strokeLinecap: v,
          strokeLinejoin: m,
          theme: I,
          fill: P
        }, d), R = [d.prefix + "-icon"];
        return R.push(d.prefix + "-icon-" + e), t && d.rtl && R.push(d.prefix + "-icon-rtl"), L && R.push(d.prefix + "-icon-spin"), A("span", {
          class: R.join(" ")
        }, [n(_)]);
      };
    }
  };
  return a;
}
const wo = Ht("close-small", !1, function(e) {
  return A("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [A("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), A("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yo = Ht("minus", !1, function(e) {
  return A("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [A("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), mo = Ht("mouse", !0, function(e) {
  return A("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [A("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), A("path", {
    d: "M36 16C36 9.37258 30.6274 4 24 4V16H36Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), A("path", {
    d: "M24 4C17.3726 4 12 9.37258 12 16H24V4Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _o = Ht("radar", !1, function(e) {
  return A("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [A("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), A("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), A("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), A("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), A("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), zs = Symbol(), Pt = "el", bo = "is-", ze = (e, t, n, a, i) => {
  let u = `${e}-${t}`;
  return n && (u += `-${n}`), a && (u += `__${a}`), i && (u += `--${i}`), u;
}, Ds = Symbol("namespaceContextKey"), Co = (e) => {
  const t = e || (Qe() ? De(Ds, M(Pt)) : M(Pt));
  return y(() => r(t) || Pt);
}, Mn = (e, t) => {
  const n = Co(t);
  return {
    namespace: n,
    b: (_ = "") => ze(n.value, e, _, "", ""),
    e: (_) => _ ? ze(n.value, e, "", _, "") : "",
    m: (_) => _ ? ze(n.value, e, "", "", _) : "",
    be: (_, R) => _ && R ? ze(n.value, e, _, R, "") : "",
    em: (_, R) => _ && R ? ze(n.value, e, "", _, R) : "",
    bm: (_, R) => _ && R ? ze(n.value, e, _, "", R) : "",
    bem: (_, R, D) => _ && R && D ? ze(n.value, e, _, R, D) : "",
    is: (_, ...R) => {
      const D = R.length >= 1 ? R[0] : !0;
      return _ && D ? `${bo}${_}` : "";
    },
    cssVar: (_) => {
      const R = {};
      for (const D in _)
        _[D] && (R[`--${n.value}-${D}`] = _[D]);
      return R;
    },
    cssVarName: (_) => `--${n.value}-${_}`,
    cssVarBlock: (_) => {
      const R = {};
      for (const D in _)
        _[D] && (R[`--${n.value}-${e}-${D}`] = _[D]);
      return R;
    },
    cssVarBlockName: (_) => `--${n.value}-${e}-${_}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Mo = Object.prototype.hasOwnProperty, rs = (e, t) => Mo.call(e, t), mt = (e) => typeof e == "function", Be = (e) => typeof e == "string", Ws = (e) => e !== null && typeof e == "object";
var ko = typeof global == "object" && global && global.Object === Object && global, Ro = typeof self == "object" && self && self.Object === Object && self, kn = ko || Ro || Function("return this")(), tt = kn.Symbol, As = Object.prototype, So = As.hasOwnProperty, To = As.toString, ht = tt ? tt.toStringTag : void 0;
function xo(e) {
  var t = So.call(e, ht), n = e[ht];
  try {
    e[ht] = void 0;
    var a = !0;
  } catch {
  }
  var i = To.call(e);
  return a && (t ? e[ht] = n : delete e[ht]), i;
}
var Oo = Object.prototype, Eo = Oo.toString;
function Po(e) {
  return Eo.call(e);
}
var Io = "[object Null]", $o = "[object Undefined]", ls = tt ? tt.toStringTag : void 0;
function Fs(e) {
  return e == null ? e === void 0 ? $o : Io : ls && ls in Object(e) ? xo(e) : Po(e);
}
function No(e) {
  return e != null && typeof e == "object";
}
var Lo = "[object Symbol]";
function Rn(e) {
  return typeof e == "symbol" || No(e) && Fs(e) == Lo;
}
function zo(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, i = Array(a); ++n < a; )
    i[n] = t(e[n], n, e);
  return i;
}
var Sn = Array.isArray, cs = tt ? tt.prototype : void 0, us = cs ? cs.toString : void 0;
function Bs(e) {
  if (typeof e == "string")
    return e;
  if (Sn(e))
    return zo(e, Bs) + "";
  if (Rn(e))
    return us ? us.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function js(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Do = "[object AsyncFunction]", Wo = "[object Function]", Ao = "[object GeneratorFunction]", Fo = "[object Proxy]";
function Bo(e) {
  if (!js(e))
    return !1;
  var t = Fs(e);
  return t == Wo || t == Ao || t == Do || t == Fo;
}
var vn = kn["__core-js_shared__"], ds = function() {
  var e = /[^.]+$/.exec(vn && vn.keys && vn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function jo(e) {
  return !!ds && ds in e;
}
var Ho = Function.prototype, Uo = Ho.toString;
function Go(e) {
  if (e != null) {
    try {
      return Uo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vo = /[\\^$.*+?()[\]{}|]/g, Yo = /^\[object .+?Constructor\]$/, Xo = Function.prototype, qo = Object.prototype, Ko = Xo.toString, Zo = qo.hasOwnProperty, Jo = RegExp(
  "^" + Ko.call(Zo).replace(Vo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qo(e) {
  if (!js(e) || jo(e))
    return !1;
  var t = Bo(e) ? Jo : Yo;
  return t.test(Go(e));
}
function ei(e, t) {
  return e?.[t];
}
function Hs(e, t) {
  var n = ei(e, t);
  return Qo(n) ? n : void 0;
}
function ti(e, t) {
  return e === t || e !== e && t !== t;
}
var ni = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, si = /^\w*$/;
function ai(e, t) {
  if (Sn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Rn(e) ? !0 : si.test(e) || !ni.test(e) || t != null && e in Object(t);
}
var _t = Hs(Object, "create");
function oi() {
  this.__data__ = _t ? _t(null) : {}, this.size = 0;
}
function ii(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ri = "__lodash_hash_undefined__", li = Object.prototype, ci = li.hasOwnProperty;
function ui(e) {
  var t = this.__data__;
  if (_t) {
    var n = t[e];
    return n === ri ? void 0 : n;
  }
  return ci.call(t, e) ? t[e] : void 0;
}
var di = Object.prototype, hi = di.hasOwnProperty;
function pi(e) {
  var t = this.__data__;
  return _t ? t[e] !== void 0 : hi.call(t, e);
}
var fi = "__lodash_hash_undefined__";
function vi(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = _t && t === void 0 ? fi : t, this;
}
function je(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
je.prototype.clear = oi;
je.prototype.delete = ii;
je.prototype.get = ui;
je.prototype.has = pi;
je.prototype.set = vi;
function gi() {
  this.__data__ = [], this.size = 0;
}
function Ut(e, t) {
  for (var n = e.length; n--; )
    if (ti(e[n][0], t))
      return n;
  return -1;
}
var wi = Array.prototype, yi = wi.splice;
function mi(e) {
  var t = this.__data__, n = Ut(t, e);
  if (n < 0)
    return !1;
  var a = t.length - 1;
  return n == a ? t.pop() : yi.call(t, n, 1), --this.size, !0;
}
function _i(e) {
  var t = this.__data__, n = Ut(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bi(e) {
  return Ut(this.__data__, e) > -1;
}
function Ci(e, t) {
  var n = this.__data__, a = Ut(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function at(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
at.prototype.clear = gi;
at.prototype.delete = mi;
at.prototype.get = _i;
at.prototype.has = bi;
at.prototype.set = Ci;
var Mi = Hs(kn, "Map");
function ki() {
  this.size = 0, this.__data__ = {
    hash: new je(),
    map: new (Mi || at)(),
    string: new je()
  };
}
function Ri(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Gt(e, t) {
  var n = e.__data__;
  return Ri(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Si(e) {
  var t = Gt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ti(e) {
  return Gt(this, e).get(e);
}
function xi(e) {
  return Gt(this, e).has(e);
}
function Oi(e, t) {
  var n = Gt(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function Ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Ue.prototype.clear = ki;
Ue.prototype.delete = Si;
Ue.prototype.get = Ti;
Ue.prototype.has = xi;
Ue.prototype.set = Oi;
var Ei = "Expected a function";
function Tn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ei);
  var n = function() {
    var a = arguments, i = t ? t.apply(this, a) : a[0], u = n.cache;
    if (u.has(i))
      return u.get(i);
    var c = e.apply(this, a);
    return n.cache = u.set(i, c) || u, c;
  };
  return n.cache = new (Tn.Cache || Ue)(), n;
}
Tn.Cache = Ue;
var Pi = 500;
function Ii(e) {
  var t = Tn(e, function(a) {
    return n.size === Pi && n.clear(), a;
  }), n = t.cache;
  return t;
}
var $i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ni = /\\(\\)?/g, Li = Ii(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($i, function(n, a, i, u) {
    t.push(i ? u.replace(Ni, "$1") : a || n);
  }), t;
});
function zi(e) {
  return e == null ? "" : Bs(e);
}
function Di(e, t) {
  return Sn(e) ? e : ai(e, t) ? [e] : Li(zi(e));
}
function Wi(e) {
  if (typeof e == "string" || Rn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ai(e, t) {
  t = Di(t, e);
  for (var n = 0, a = t.length; e != null && n < a; )
    e = e[Wi(t[n++])];
  return n && n == a ? e : void 0;
}
function Fi(e, t, n) {
  var a = e == null ? void 0 : Ai(e, t);
  return a === void 0 ? n : a;
}
function Bi(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var i = e[t];
    a[i[0]] = i[1];
  }
  return a;
}
const Us = (e) => e === void 0, hs = (e) => typeof e == "boolean", He = (e) => typeof e == "number", yn = (e) => typeof Element > "u" ? !1 : e instanceof Element, ji = (e) => Be(e) ? !Number.isNaN(Number(e)) : !1;
var ps;
const Ge = typeof window < "u", Hi = (e) => typeof e == "string", Ui = () => {
};
Ge && ((ps = window?.navigator) != null && ps.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function xn(e) {
  return typeof e == "function" ? e() : r(e);
}
function Gi(e) {
  return e;
}
function On(e) {
  return Ya() ? (Xa(e), !0) : !1;
}
function Vi(e, t = !0) {
  Qe() ? jt(e) : t ? e() : _e(e);
}
function Gs(e, t, n = {}) {
  const {
    immediate: a = !0
  } = n, i = M(!1);
  let u = null;
  function c() {
    u && (clearTimeout(u), u = null);
  }
  function d() {
    i.value = !1, c();
  }
  function w(...g) {
    c(), i.value = !0, u = setTimeout(() => {
      i.value = !1, u = null, e(...g);
    }, xn(t));
  }
  return a && (i.value = !0, Ge && w()), On(d), {
    isPending: Va(i),
    start: w,
    stop: d
  };
}
function Vs(e) {
  var t;
  const n = xn(e);
  return (t = n?.$el) != null ? t : n;
}
const Ys = Ge ? window : void 0;
function Xs(...e) {
  let t, n, a, i;
  if (Hi(e[0]) || Array.isArray(e[0]) ? ([n, a, i] = e, t = Ys) : [t, n, a, i] = e, !t)
    return Ui;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const u = [], c = () => {
    u.forEach((v) => v()), u.length = 0;
  }, d = (v, m, I, P) => (v.addEventListener(m, I, P), () => v.removeEventListener(m, I, P)), w = ke(() => [Vs(t), xn(i)], ([v, m]) => {
    c(), v && u.push(...n.flatMap((I) => a.map((P) => d(v, I, P, m))));
  }, { immediate: !0, flush: "post" }), g = () => {
    w(), c();
  };
  return On(g), g;
}
function Yi(e, t = !1) {
  const n = M(), a = () => n.value = !!e();
  return a(), Vi(a, t), n;
}
const fs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vs = "__vueuse_ssr_handlers__";
fs[vs] = fs[vs] || {};
var gs = Object.getOwnPropertySymbols, Xi = Object.prototype.hasOwnProperty, qi = Object.prototype.propertyIsEnumerable, Ki = (e, t) => {
  var n = {};
  for (var a in e)
    Xi.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && gs)
    for (var a of gs(e))
      t.indexOf(a) < 0 && qi.call(e, a) && (n[a] = e[a]);
  return n;
};
function Zi(e, t, n = {}) {
  const a = n, { window: i = Ys } = a, u = Ki(a, ["window"]);
  let c;
  const d = Yi(() => i && "ResizeObserver" in i), w = () => {
    c && (c.disconnect(), c = void 0);
  }, g = ke(() => Vs(e), (m) => {
    w(), d.value && i && m && (c = new ResizeObserver(t), c.observe(m, u));
  }, { immediate: !0, flush: "post" }), v = () => {
    w(), g();
  };
  return On(v), {
    isSupported: d,
    stop: v
  };
}
var ws;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ws || (ws = {}));
var Ji = Object.defineProperty, ys = Object.getOwnPropertySymbols, Qi = Object.prototype.hasOwnProperty, er = Object.prototype.propertyIsEnumerable, ms = (e, t, n) => t in e ? Ji(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, tr = (e, t) => {
  for (var n in t || (t = {}))
    Qi.call(t, n) && ms(e, n, t[n]);
  if (ys)
    for (var n of ys(t))
      er.call(t, n) && ms(e, n, t[n]);
  return e;
};
const nr = {
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
tr({
  linear: Gi
}, nr);
const _s = {
  current: 0
}, bs = M(0), qs = 2e3, Cs = Symbol("elZIndexContextKey"), Ks = Symbol("zIndexContextKey"), sr = (e) => {
  const t = Qe() ? De(Cs, _s) : _s, n = e || (Qe() ? De(Ks, void 0) : void 0), a = y(() => {
    const c = r(n);
    return He(c) ? c : qs;
  }), i = y(() => a.value + bs.value), u = () => (t.current++, bs.value = t.current, i.value);
  return !Ge && De(Cs), {
    initialZIndex: a,
    currentZIndex: i,
    nextZIndex: u
  };
};
var ar = {
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
const or = (e) => (t, n) => ir(t, n, r(e)), ir = (e, t, n) => Fi(n, e, e).replace(/\{(\w+)\}/g, (a, i) => {
  var u;
  return `${(u = t?.[i]) != null ? u : `{${i}}`}`;
}), rr = (e) => {
  const t = y(() => r(e).name), n = qa(e) ? e : M(e);
  return {
    lang: t,
    locale: n,
    t: or(e)
  };
}, Zs = Symbol("localeContextKey"), lr = (e) => {
  const t = e || De(Zs, M());
  return rr(y(() => t.value || ar));
}, Js = "__epPropKey", ie = (e) => e, cr = (e) => Ws(e) && !!e[Js], Qs = (e, t) => {
  if (!Ws(e) || cr(e))
    return e;
  const { values: n, required: a, default: i, type: u, validator: c } = e, w = {
    type: u,
    required: !!a,
    validator: n || c ? (g) => {
      let v = !1, m = [];
      if (n && (m = Array.from(n), rs(e, "default") && m.push(i), v || (v = m.includes(g))), c && (v || (v = c(g))), !v && m.length > 0) {
        const I = [...new Set(m)].map((P) => JSON.stringify(P)).join(", ");
        Ka(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${I}], got value ${JSON.stringify(g)}.`);
      }
      return v;
    } : void 0,
    [Js]: !0
  };
  return rs(e, "default") && (w.default = i), w;
}, ot = (e) => Bi(Object.entries(e).map(([t, n]) => [
  t,
  Qs(n, t)
])), ur = ["", "default", "small", "large"], dr = Qs({
  type: String,
  values: ur,
  required: !1
}), hr = Symbol("size"), pr = Symbol("emptyValuesContextKey"), fr = ot({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => mt(e) ? !e() : !e
  }
}), Ms = (e) => Object.keys(e), Wt = M();
function ea(e, t = void 0) {
  return Qe() ? De(zs, Wt) : Wt;
}
function ta(e, t) {
  const n = ea(), a = Mn(e, y(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.namespace) || Pt;
  })), i = lr(y(() => {
    var d;
    return (d = n.value) == null ? void 0 : d.locale;
  })), u = sr(y(() => {
    var d;
    return ((d = n.value) == null ? void 0 : d.zIndex) || qs;
  })), c = y(() => {
    var d;
    return r(t) || ((d = n.value) == null ? void 0 : d.size) || "";
  });
  return na(y(() => r(n) || {})), {
    ns: a,
    locale: i,
    zIndex: u,
    size: c
  };
}
const na = (e, t, n = !1) => {
  var a;
  const i = !!Qe(), u = i ? ea() : void 0, c = (a = void 0) != null ? a : i ? Za : void 0;
  if (!c)
    return;
  const d = y(() => {
    const w = r(e);
    return u?.value ? vr(u.value, w) : w;
  });
  return c(zs, d), c(Zs, y(() => d.value.locale)), c(Ds, y(() => d.value.namespace)), c(Ks, y(() => d.value.zIndex)), c(hr, {
    size: y(() => d.value.size || "")
  }), c(pr, y(() => ({
    emptyValues: d.value.emptyValues,
    valueOnClear: d.value.valueOnClear
  }))), (n || !Wt.value) && (Wt.value = d.value), d;
}, vr = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ms(e), ...Ms(t)])], a = {};
  for (const i of n)
    a[i] = t[i] !== void 0 ? t[i] : e[i];
  return a;
};
var Vt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, i] of t)
    n[a] = i;
  return n;
};
function mn(e, t = "px") {
  if (!e)
    return "";
  if (He(e) || ji(e))
    return `${e}${t}`;
  if (Be(e))
    return e;
}
const sa = (e, t) => (e.install = (n) => {
  for (const a of [e, ...Object.values({})])
    n.component(a.name, a);
}, e), aa = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), gr = ot({
  size: {
    type: ie([Number, String])
  },
  color: {
    type: String
  }
}), wr = K({
  name: "ElIcon",
  inheritAttrs: !1
}), yr = /* @__PURE__ */ K({
  ...wr,
  props: gr,
  setup(e) {
    const t = e, n = Mn("icon"), a = y(() => {
      const { size: i, color: u } = t;
      return !i && !u ? {} : {
        fontSize: Us(i) ? void 0 : mn(i),
        "--color": u
      };
    });
    return (i, u) => (C(), O("i", Ja({
      class: r(n).b(),
      style: r(a)
    }, i.$attrs), [
      et(i.$slots, "default")
    ], 16));
  }
});
var mr = /* @__PURE__ */ Vt(yr, [["__file", "icon.vue"]]);
const At = sa(mr);
/*! Element Plus Icons Vue v2.3.1 */
var _r = /* @__PURE__ */ K({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (C(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), br = _r, Cr = /* @__PURE__ */ K({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (C(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), oa = Cr, Mr = /* @__PURE__ */ K({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (C(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), kr = Mr, Rr = /* @__PURE__ */ K({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (C(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Sr = Rr, Tr = /* @__PURE__ */ K({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (C(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), xr = Tr;
const ia = ie([
  String,
  Object,
  Function
]), Or = {
  Close: oa
}, Er = {
  Close: oa
}, Ft = {
  success: Sr,
  warning: xr,
  error: br,
  info: kr
}, Pr = (e) => e, It = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ir = ot({
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
    type: ie([String, Object, Array])
  },
  offset: {
    type: ie(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), $r = K({
  name: "ElBadge"
}), Nr = /* @__PURE__ */ K({
  ...$r,
  props: Ir,
  setup(e, { expose: t }) {
    const n = e, a = Mn("badge"), i = y(() => n.isDot ? "" : He(n.value) && He(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), u = y(() => {
      var c, d, w, g, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: mn(-((d = (c = n.offset) == null ? void 0 : c[0]) != null ? d : 0)),
          marginTop: mn((g = (w = n.offset) == null ? void 0 : w[1]) != null ? g : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: i
    }), (c, d) => (C(), O("div", {
      class: B(r(a).b())
    }, [
      et(c.$slots, "default"),
      A(bn, {
        name: `${r(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: We(() => [
          Ae(l("sup", {
            class: B([
              r(a).e("content"),
              r(a).em("content", c.type),
              r(a).is("fixed", !!c.$slots.default),
              r(a).is("dot", c.isDot),
              r(a).is("hide-zero", !c.showZero && n.value === 0),
              c.badgeClass
            ]),
            style: ce(r(u))
          }, [
            et(c.$slots, "content", { value: r(i) }, () => [
              Qa(x(r(i)), 1)
            ])
          ], 6), [
            [Nt, !c.hidden && (r(i) || c.isDot || c.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Lr = /* @__PURE__ */ Vt(Nr, [["__file", "badge.vue"]]);
const zr = sa(Lr), Dr = ot({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ie(Object)
  },
  size: dr,
  button: {
    type: ie(Object)
  },
  experimentalFeatures: {
    type: ie(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ie(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...fr
}), fe = {};
K({
  name: "ElConfigProvider",
  props: Dr,
  setup(e, { slots: t }) {
    ke(() => e.message, (a) => {
      Object.assign(fe, a ?? {});
    }, { immediate: !0, deep: !0 });
    const n = na(e);
    return () => et(t, "default", { config: n?.value });
  }
});
const ra = ["success", "info", "warning", "error"], q = Pr({
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
  appendTo: Ge ? document.body : void 0
}), Wr = ot({
  customClass: {
    type: String,
    default: q.customClass
  },
  center: {
    type: Boolean,
    default: q.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: q.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: q.duration
  },
  icon: {
    type: ia,
    default: q.icon
  },
  id: {
    type: String,
    default: q.id
  },
  message: {
    type: ie([
      String,
      Object,
      Function
    ]),
    default: q.message
  },
  onClose: {
    type: ie(Function),
    default: q.onClose
  },
  showClose: {
    type: Boolean,
    default: q.showClose
  },
  type: {
    type: String,
    values: ra,
    default: q.type
  },
  plain: {
    type: Boolean,
    default: q.plain
  },
  offset: {
    type: Number,
    default: q.offset
  },
  zIndex: {
    type: Number,
    default: q.zIndex
  },
  grouping: {
    type: Boolean,
    default: q.grouping
  },
  repeatNum: {
    type: Number,
    default: q.repeatNum
  }
}), Ar = {
  destroy: () => !0
}, ve = eo([]), Fr = (e) => {
  const t = ve.findIndex((i) => i.id === e), n = ve[t];
  let a;
  return t > 0 && (a = ve[t - 1]), { current: n, prev: a };
}, Br = (e) => {
  const { prev: t } = Fr(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, jr = (e, t) => ve.findIndex((a) => a.id === e) > 0 ? 16 : t, Hr = K({
  name: "ElMessage"
}), Ur = /* @__PURE__ */ K({
  ...Hr,
  props: Wr,
  emits: Ar,
  setup(e, { expose: t }) {
    const n = e, { Close: a } = Er, { ns: i, zIndex: u } = ta("message"), { currentZIndex: c, nextZIndex: d } = u, w = M(), g = M(!1), v = M(0);
    let m;
    const I = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), P = y(() => {
      const $ = n.type;
      return { [i.bm("icon", $)]: $ && Ft[$] };
    }), L = y(() => n.icon || Ft[n.type] || ""), _ = y(() => Br(n.id)), R = y(() => jr(n.id, n.offset) + _.value), D = y(() => v.value + R.value), Q = y(() => ({
      top: `${R.value}px`,
      zIndex: c.value
    }));
    function S() {
      n.duration !== 0 && ({ stop: m } = Gs(() => {
        G();
      }, n.duration));
    }
    function re() {
      m?.();
    }
    function G() {
      g.value = !1;
    }
    function j({ code: $ }) {
      $ === It.esc && G();
    }
    return jt(() => {
      S(), d(), g.value = !0;
    }), ke(() => n.repeatNum, () => {
      re(), S();
    }), Xs(document, "keydown", j), Zi(w, () => {
      v.value = w.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: D,
      close: G
    }), ($, Re) => (C(), Me(bn, {
      name: r(i).b("fade"),
      onBeforeLeave: $.onClose,
      onAfterLeave: (H) => $.$emit("destroy"),
      persisted: ""
    }, {
      default: We(() => [
        Ae(l("div", {
          id: $.id,
          ref_key: "messageRef",
          ref: w,
          class: B([
            r(i).b(),
            { [r(i).m($.type)]: $.type },
            r(i).is("center", $.center),
            r(i).is("closable", $.showClose),
            r(i).is("plain", $.plain),
            $.customClass
          ]),
          style: ce(r(Q)),
          role: "alert",
          onMouseenter: re,
          onMouseleave: S
        }, [
          $.repeatNum > 1 ? (C(), Me(r(zr), {
            key: 0,
            value: $.repeatNum,
            type: r(I),
            class: B(r(i).e("badge"))
          }, null, 8, ["value", "type", "class"])) : se("v-if", !0),
          r(L) ? (C(), Me(r(At), {
            key: 1,
            class: B([r(i).e("icon"), r(P)])
          }, {
            default: We(() => [
              (C(), Me(Es(r(L))))
            ]),
            _: 1
          }, 8, ["class"])) : se("v-if", !0),
          et($.$slots, "default", {}, () => [
            $.dangerouslyUseHTMLString ? (C(), O(be, { key: 1 }, [
              se(" Caution here, message could've been compromised, never use user's input as message "),
              l("p", {
                class: B(r(i).e("content")),
                innerHTML: $.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (C(), O("p", {
              key: 0,
              class: B(r(i).e("content"))
            }, x($.message), 3))
          ]),
          $.showClose ? (C(), Me(r(At), {
            key: 2,
            class: B(r(i).e("closeBtn")),
            onClick: Te(G, ["stop"])
          }, {
            default: We(() => [
              A(r(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : se("v-if", !0)
        ], 46, ["id"]), [
          [Nt, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Gr = /* @__PURE__ */ Vt(Ur, [["__file", "message.vue"]]);
let Vr = 1;
const la = (e) => {
  const t = !e || Be(e) || yt(e) || mt(e) ? { message: e } : e, n = {
    ...q,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Be(n.appendTo)) {
    let a = document.querySelector(n.appendTo);
    yn(a) || (a = document.body), n.appendTo = a;
  }
  return hs(fe.grouping) && !n.grouping && (n.grouping = fe.grouping), He(fe.duration) && n.duration === 3e3 && (n.duration = fe.duration), He(fe.offset) && n.offset === 16 && (n.offset = fe.offset), hs(fe.showClose) && !n.showClose && (n.showClose = fe.showClose), n;
}, Yr = (e) => {
  const t = ve.indexOf(e);
  if (t === -1)
    return;
  ve.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Xr = ({ appendTo: e, ...t }, n) => {
  const a = `message_${Vr++}`, i = t.onClose, u = document.createElement("div"), c = {
    ...t,
    id: a,
    onClose: () => {
      i?.(), Yr(v);
    },
    onDestroy: () => {
      Lt(null, u);
    }
  }, d = A(Gr, c, mt(c.message) || yt(c.message) ? {
    default: mt(c.message) ? c.message : () => c.message
  } : null);
  d.appContext = n || nt._context, Lt(d, u), e.appendChild(u.firstElementChild);
  const w = d.component, v = {
    id: a,
    vnode: d,
    vm: w,
    handler: {
      close: () => {
        w.exposed.visible.value = !1;
      }
    },
    props: d.component.props
  };
  return v;
}, nt = (e = {}, t) => {
  if (!Ge)
    return { close: () => {
    } };
  const n = la(e);
  if (n.grouping && ve.length) {
    const i = ve.find(({ vnode: u }) => {
      var c;
      return ((c = u.props) == null ? void 0 : c.message) === n.message;
    });
    if (i)
      return i.props.repeatNum += 1, i.props.type = n.type, i.handler;
  }
  if (He(fe.max) && ve.length >= fe.max)
    return { close: () => {
    } };
  const a = Xr(n, t);
  return ve.push(a), a.handler;
};
ra.forEach((e) => {
  nt[e] = (t = {}, n) => {
    const a = la(t);
    return nt({ ...a, type: e }, n);
  };
});
function qr(e) {
  for (const t of ve)
    (!e || e === t.props.type) && t.handler.close();
}
nt.closeAll = qr;
nt._context = null;
const Kr = aa(nt, "$message"), ca = [
  "success",
  "info",
  "warning",
  "error"
], Zr = ot({
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
    type: ia
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: ie([
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
    type: ie(Function),
    default: () => {
    }
  },
  onClose: {
    type: ie(Function),
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
    values: [...ca, ""],
    default: ""
  },
  zIndex: Number
}), Jr = {
  destroy: () => !0
}, Qr = K({
  name: "ElNotification"
}), el = /* @__PURE__ */ K({
  ...Qr,
  props: Zr,
  emits: Jr,
  setup(e, { expose: t }) {
    const n = e, { ns: a, zIndex: i } = ta("notification"), { nextZIndex: u, currentZIndex: c } = i, { Close: d } = Or, w = M(!1);
    let g;
    const v = y(() => {
      const S = n.type;
      return S && Ft[n.type] ? a.m(S) : "";
    }), m = y(() => n.type && Ft[n.type] || n.icon), I = y(() => n.position.endsWith("right") ? "right" : "left"), P = y(() => n.position.startsWith("top") ? "top" : "bottom"), L = y(() => {
      var S;
      return {
        [P.value]: `${n.offset}px`,
        zIndex: (S = n.zIndex) != null ? S : c.value
      };
    });
    function _() {
      n.duration > 0 && ({ stop: g } = Gs(() => {
        w.value && D();
      }, n.duration));
    }
    function R() {
      g?.();
    }
    function D() {
      w.value = !1;
    }
    function Q({ code: S }) {
      S === It.delete || S === It.backspace ? R() : S === It.esc ? w.value && D() : _();
    }
    return jt(() => {
      _(), u(), w.value = !0;
    }), Xs(document, "keydown", Q), t({
      visible: w,
      close: D
    }), (S, re) => (C(), Me(bn, {
      name: r(a).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (G) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: We(() => [
        Ae(l("div", {
          id: S.id,
          class: B([r(a).b(), S.customClass, r(I)]),
          style: ce(r(L)),
          role: "alert",
          onMouseenter: R,
          onMouseleave: _,
          onClick: S.onClick
        }, [
          r(m) ? (C(), Me(r(At), {
            key: 0,
            class: B([r(a).e("icon"), r(v)])
          }, {
            default: We(() => [
              (C(), Me(Es(r(m))))
            ]),
            _: 1
          }, 8, ["class"])) : se("v-if", !0),
          l("div", {
            class: B(r(a).e("group"))
          }, [
            l("h2", {
              class: B(r(a).e("title")),
              textContent: x(S.title)
            }, null, 10, ["textContent"]),
            Ae(l("div", {
              class: B(r(a).e("content")),
              style: ce(S.title ? void 0 : { margin: 0 })
            }, [
              et(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (C(), O(be, { key: 1 }, [
                  se(" Caution here, message could've been compromised, never use user's input as message "),
                  l("p", { innerHTML: S.message }, null, 8, ["innerHTML"])
                ], 2112)) : (C(), O("p", { key: 0 }, x(S.message), 1))
              ])
            ], 6), [
              [Nt, S.message]
            ]),
            S.showClose ? (C(), Me(r(At), {
              key: 0,
              class: B(r(a).e("closeBtn")),
              onClick: Te(D, ["stop"])
            }, {
              default: We(() => [
                A(r(d))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : se("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Nt, w.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var tl = /* @__PURE__ */ Vt(el, [["__file", "notification.vue"]]);
const Bt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, _n = 16;
let nl = 1;
const st = function(e = {}, t) {
  if (!Ge)
    return { close: () => {
    } };
  (Be(e) || yt(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let a = e.offset || 0;
  Bt[n].forEach(({ vm: v }) => {
    var m;
    a += (((m = v.el) == null ? void 0 : m.offsetHeight) || 0) + _n;
  }), a += _n;
  const i = `notification_${nl++}`, u = e.onClose, c = {
    ...e,
    offset: a,
    id: i,
    onClose: () => {
      sl(i, n, u);
    }
  };
  let d = document.body;
  yn(e.appendTo) ? d = e.appendTo : Be(e.appendTo) && (d = document.querySelector(e.appendTo)), yn(d) || (d = document.body);
  const w = document.createElement("div"), g = A(tl, c, mt(c.message) ? c.message : yt(c.message) ? () => c.message : null);
  return g.appContext = Us(t) ? st._context : t, g.props.onDestroy = () => {
    Lt(null, w);
  }, Lt(g, w), Bt[n].push({ vm: g }), d.appendChild(w.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
ca.forEach((e) => {
  st[e] = (t = {}, n) => ((Be(t) || yt(t)) && (t = {
    message: t
  }), st({ ...t, type: e }, n));
});
function sl(e, t, n) {
  const a = Bt[t], i = a.findIndex(({ vm: g }) => {
    var v;
    return ((v = g.component) == null ? void 0 : v.props.id) === e;
  });
  if (i === -1)
    return;
  const { vm: u } = a[i];
  if (!u)
    return;
  n?.(u);
  const c = u.el.offsetHeight, d = t.split("-")[0];
  a.splice(i, 1);
  const w = a.length;
  if (!(w < 1))
    for (let g = i; g < w; g++) {
      const { el: v, component: m } = a[g].vm, I = Number.parseInt(v.style[d], 10) - c - _n;
      m.props.offset = I;
    }
}
function al() {
  for (const e of Object.values(Bt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
st.closeAll = al;
st._context = null;
const ol = aa(st, "$notify"), xt = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", a) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: a
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
      position: a = "center",
      duration: i = 3e3,
      showClose: u = !1
    } = e;
    a === "center" ? Kr({
      message: t,
      type: n,
      duration: i,
      showClose: u,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : ol({
      message: t,
      type: n,
      position: a,
      duration: i,
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
}, il = "snippets-code:developer-mode", ua = "snippets-code:frontend-diagnostics", rl = 240, pt = "[REDACTED]", $t = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${pt}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${pt}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  pt
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${pt}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${pt}`
), da = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return $t(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return $t(
      JSON.stringify(
        e,
        (n, a) => {
          if (a instanceof Error)
            return {
              name: a.name,
              message: a.message,
              stack: a.stack,
              cause: a.cause
            };
          if (typeof a == "bigint") return a.toString();
          if (typeof a == "object" && a !== null) {
            if (t.has(a)) return "[Circular]";
            t.add(a);
          }
          return a;
        },
        2
      )
    );
  } catch {
    return $t(String(e));
  }
}, ll = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, cl = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(ua) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, En = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(il) === "true";
  } catch {
    return !1;
  }
}, ul = (e, t, n) => {
  if (!En() || typeof localStorage > "u") return;
  const a = cl();
  a.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: ll(),
    message: $t(t),
    data: da(n)
  });
  try {
    localStorage.setItem(
      ua,
      JSON.stringify(a.slice(-rl))
    );
  } catch {
  }
}, dl = () => En(), hl = (e) => e === "error" || En(), Ot = (e, t, n) => {
  ul(e, t, n), hl(e) && h("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : da(n)
  }).catch(() => {
  });
}, ft = {
  info: (e, t, ...n) => {
    Ot("info", e, t);
  },
  error: (e, t) => {
    Ot("error", e, t);
  },
  warn: (e, t) => {
    Ot("warn", e, t);
  },
  debug: (e, t) => {
    dl() && Ot("debug", e, t);
  }
}, pl = "[screen-recorder]", J = async (e, t) => {
  const n = performance.now();
  try {
    return await h(e, t);
  } catch (a) {
    throw console.error(`${pl} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: a
    }), a;
  }
}, fl = () => J("screen_recorder_get_ffmpeg_status"), Oe = (e) => J("screen_recorder_set_capture_excluded", { excluded: e }), Je = (e) => J("screen_recorder_set_passthrough_region", { region: e }), vt = (e) => J("screen_recorder_set_overlay_window_region", { region: e }), vl = () => J("screen_recorder_pick_target_window"), gl = () => J("screen_recorder_close_window"), wl = (e) => J("screen_recorder_copy_file_to_clipboard", { path: e }), yl = (e, t) => J("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), ml = () => J("screen_recorder_pause_recording"), _l = (e, t) => J("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.audio && t.format === "mp4",
  showCursor: t.showCursor
}), bl = () => J("screen_recorder_stop_recording"), Cl = (e, t = 8) => J("screen_recorder_get_clip_preview", {
  durationMs: e,
  maxThumbnails: t
}), Ml = () => J("screen_recorder_cancel_recording"), kl = () => J("screen_recorder_cancel_export"), ks = (e, t, n, a) => J("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t,
  trimStartMs: n,
  trimEndMs: a
}), Rs = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0,
  showCursor: !0
});
function Rl() {
  const e = M("selecting"), t = M(Rs()), n = M(null), a = M(null), i = M(null), u = M(!1), c = M(0), d = M(0), w = M(""), g = M(null), v = M(0), m = M(0), I = M(null), P = () => {
    m.value = e.value === "recording" && g.value !== null ? v.value + Date.now() - g.value : v.value;
  }, L = () => {
    I.value !== null && (window.clearInterval(I.value), I.value = null);
  }, _ = () => {
    L(), P(), I.value = window.setInterval(() => {
      P();
    }, 250);
  }, R = async () => (n.value = await fl(), n.value), D = async (H) => {
    w.value = "", a.value = null, i.value = null;
    const ee = n.value ?? await R();
    if (!ee.available)
      throw new Error(ee.message || "FFmpeg unavailable");
    await yl(H, t.value), e.value = "recording", v.value = 0, m.value = 0, g.value = Date.now(), _();
  }, Q = async () => {
    e.value === "recording" && (P(), v.value = m.value, g.value = null, L(), await ml(), e.value = "paused");
  }, S = async (H) => {
    e.value === "paused" && (await _l(H, t.value), e.value = "recording", g.value = Date.now(), _());
  }, re = async () => {
    if (!(e.value !== "recording" && e.value !== "paused")) {
      if (P(), v.value = m.value, g.value = null, L(), await bl(), c.value = 0, d.value = Math.max(1, Math.round(m.value)), t.value.format === "mp4") {
        e.value = "exporting";
        try {
          a.value = await ks(t.value), e.value = "completed";
        } catch (H) {
          throw e.value = "ready", a.value = null, H;
        }
        return;
      }
      e.value = "editing", u.value = !0;
      try {
        i.value = await Cl(d.value);
      } catch (H) {
        i.value = null, w.value = String(H);
      } finally {
        u.value = !1;
      }
    }
  }, G = async () => {
    e.value = "exporting";
    try {
      return a.value = await ks(
        t.value,
        Math.round(m.value),
        Math.round(c.value),
        Math.round(d.value)
      ), e.value = "completed", a.value;
    } catch (H) {
      throw e.value = "editing", a.value = null, H;
    }
  }, j = async () => {
    await kl(), e.value = "ready", a.value = null, i.value = null, c.value = 0, d.value = 0;
  }, $ = async () => {
    L(), await Ml(), e.value = "selecting", g.value = null, v.value = 0, m.value = 0, a.value = null, i.value = null, u.value = !1, c.value = 0, d.value = 0;
  }, Re = () => {
    e.value = "selecting", g.value = null, v.value = 0, m.value = 0, a.value = null, i.value = null, u.value = !1, c.value = 0, d.value = 0, w.value = "", t.value = Rs();
  };
  return Cn(() => {
    L();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: a,
    clipPreview: i,
    clipPreviewLoading: u,
    trimStartMs: c,
    trimEndMs: d,
    errorMessage: w,
    elapsedMs: m,
    refreshFfmpegStatus: R,
    begin: D,
    pause: Q,
    resume: S,
    stop: re,
    exportFile: G,
    cancelExport: j,
    cancel: $,
    reset: Re
  };
}
const Sl = ["aria-label"], Tl = ["src", "poster"], xl = ["src", "alt"], Ol = { class: "timeline-row" }, El = ["disabled", "title", "aria-label"], Pl = { class: "timeline-thumbnails" }, Il = ["src"], $l = ["aria-label"], Nl = ["aria-label"], Ll = /* @__PURE__ */ K({
  __name: "RecordingClipEditor",
  props: {
    preview: {},
    loading: { type: Boolean },
    durationMs: {},
    startMs: {},
    endMs: {}
  },
  emits: ["update:startMs", "update:endMs", "preview-time-change"],
  setup(e, { emit: t }) {
    const n = e, a = t, i = M(null), u = M(null), c = M(null), d = M(!1), w = M(!1), g = M(!1), v = M(0);
    let m = null, I = -1;
    const P = y(() => Math.max(1, n.durationMs)), L = y(() => Math.min(100, P.value)), _ = y(() => n.startMs / P.value * 100), R = y(() => n.endMs / P.value * 100), D = y(
      () => v.value / P.value * 100
    ), Q = y(() => {
      const k = n.preview?.thumbnails || [];
      return k.length ? k.reduce(
        (E, F) => Math.abs(F.timeMs - v.value) < Math.abs(E.timeMs - v.value) ? F : E
      ) : null;
    }), S = y(() => {
      const k = n.preview?.videoPath;
      return k ? oo(k) : "";
    }), re = y(
      () => !!S.value && w.value && !g.value
    ), G = (k) => {
      const E = u.value;
      if (!E || !Number.isFinite(E.duration)) return;
      const F = E.duration * 1e3;
      E.currentTime = Math.max(0, Math.min(F, k)) / 1e3;
    }, j = (k, E = !1, F = !1) => {
      v.value = Math.max(
        n.startMs,
        Math.min(n.endMs, Math.round(k))
      ), F && G(v.value);
      const de = Math.round(v.value / 100);
      (E || de !== I) && (I = de, a("preview-time-change", v.value));
    }, $ = (k) => {
      const E = i.value?.getBoundingClientRect();
      if (!E || !c.value) return;
      const F = Math.max(0, Math.min(1, (k - E.left) / E.width)), de = Math.round(F * P.value);
      if (c.value === "start") {
        const Mt = Math.max(
          0,
          Math.min(de, n.endMs - L.value)
        );
        a("update:startMs", Mt), j(Mt, !0, !0);
        return;
      }
      const $e = Math.min(
        P.value,
        Math.max(de, n.startMs + L.value)
      );
      a("update:endMs", $e), v.value > $e && j($e, !0, !0);
    }, Re = (k) => $(k.clientX), H = () => {
      c.value = null, window.removeEventListener("pointermove", Re), window.removeEventListener("pointerup", H);
    }, ee = (k, E) => {
      Y(), c.value = k, window.addEventListener("pointermove", Re), window.addEventListener("pointerup", H, { once: !0 }), $(E.clientX);
    }, Ve = (k) => {
      const E = i.value?.getBoundingClientRect();
      if (!E) return;
      const F = (k.clientX - E.left) / E.width * P.value, de = Math.abs(F - n.startMs), $e = Math.abs(F - n.endMs);
      ee(de <= $e ? "start" : "end", k);
    };
    function Y(k = !0) {
      d.value = !1, m !== null && (cancelAnimationFrame(m), m = null), k && u.value && !u.value.paused && u.value.pause();
    }
    const bt = () => {
      const k = u.value;
      if (!d.value || !k) return;
      const E = k.currentTime * 1e3;
      E >= n.endMs - 12 ? (G(n.startMs), j(n.startMs)) : j(E), m = requestAnimationFrame(bt);
    }, b = async () => {
      if (d.value) {
        Y();
        return;
      }
      const k = u.value;
      if (!(!k || !re.value)) {
        (v.value < n.startMs || v.value >= n.endMs) && j(n.startMs, !0, !0);
        try {
          await k.play();
        } catch {
          Y(!1);
        }
      }
    }, N = () => {
      w.value = !0, g.value = !1, j(n.startMs, !0, !0);
    }, ge = () => {
      d.value = !0, m === null && (m = requestAnimationFrame(bt));
    }, X = () => {
      Y(!1);
    }, Ct = () => {
      Y(!1), j(n.startMs, !0, !0);
    }, Yt = () => {
      g.value = !0, w.value = !1, Y(!1);
    };
    return ke(
      () => [n.startMs, n.endMs],
      ([k, E]) => {
        if (v.value < k || v.value > E) {
          j(k, !0, !0);
          return;
        }
        j(v.value, !0, !0);
      },
      { immediate: !0 }
    ), ke(S, async () => {
      Y(), w.value = !1, g.value = !1, v.value = n.startMs, await _e(), u.value?.load();
    }), Cn(() => {
      H(), Y();
    }), (k, E) => (C(), O("section", {
      class: "clip-editor",
      "aria-label": k.$t("screenRecorder.trimHint"),
      onMousedown: E[2] || (E[2] = Te(() => {
      }, ["stop"]))
    }, [
      S.value && !g.value ? (C(), O("video", {
        key: 0,
        ref_key: "videoRef",
        ref: u,
        class: "clip-preview-surface",
        src: S.value,
        poster: Q.value?.image,
        preload: "auto",
        muted: "",
        playsinline: "",
        onLoadedmetadata: N,
        onPlay: ge,
        onPause: X,
        onEnded: Ct,
        onError: Yt
      }, null, 40, Tl)) : Q.value ? (C(), O("img", {
        key: 1,
        class: "clip-preview-surface",
        src: Q.value.image,
        alt: k.$t("screenRecorder.trimPreview"),
        draggable: "false"
      }, null, 8, xl)) : se("v-if", !0),
      l("div", Ol, [
        l("button", {
          class: "preview-toggle",
          type: "button",
          disabled: !re.value,
          title: d.value ? k.$t("screenRecorder.pausePreview") : k.$t("screenRecorder.playPreview"),
          "aria-label": d.value ? k.$t("screenRecorder.pausePreview") : k.$t("screenRecorder.playPreview"),
          onClick: b
        }, x(d.value ? "Ⅱ" : "▶"), 9, El),
        l(
          "div",
          {
            ref_key: "timelineRef",
            ref: i,
            class: "timeline",
            onPointerdown: Ve
          },
          [
            l("div", Pl, [
              (C(!0), O(
                be,
                null,
                Ps(k.preview?.thumbnails || [], (F, de) => (C(), O("img", {
                  key: `${F.timeMs}-${de}`,
                  src: F.image,
                  alt: "",
                  draggable: "false"
                }, null, 8, Il))),
                128
                /* KEYED_FRAGMENT */
              )),
              k.preview?.thumbnails.length ? se("v-if", !0) : (C(), O(
                "span",
                {
                  key: 0,
                  class: B(["timeline-placeholder", { loading: k.loading }])
                },
                null,
                2
                /* CLASS */
              ))
            ]),
            l(
              "span",
              {
                class: "timeline-shade left",
                style: ce({ width: `${_.value}%` })
              },
              null,
              4
              /* STYLE */
            ),
            l(
              "span",
              {
                class: "timeline-shade right",
                style: ce({ width: `${100 - R.value}%` })
              },
              null,
              4
              /* STYLE */
            ),
            l(
              "span",
              {
                class: "timeline-selection",
                style: ce({ left: `${_.value}%`, right: `${100 - R.value}%` })
              },
              null,
              4
              /* STYLE */
            ),
            l("button", {
              class: "trim-handle start",
              type: "button",
              style: ce({ left: `${_.value}%` }),
              "aria-label": k.$t("screenRecorder.trimStart"),
              onPointerdown: E[0] || (E[0] = Te((F) => ee("start", F), ["stop", "prevent"]))
            }, null, 44, $l),
            l("button", {
              class: "trim-handle end",
              type: "button",
              style: ce({ left: `${R.value}%` }),
              "aria-label": k.$t("screenRecorder.trimEnd"),
              onPointerdown: E[1] || (E[1] = Te((F) => ee("end", F), ["stop", "prevent"]))
            }, null, 44, Nl),
            l(
              "span",
              {
                class: "timeline-playhead",
                style: ce({ left: `${D.value}%` })
              },
              null,
              4
              /* STYLE */
            )
          ],
          544
          /* NEED_HYDRATION, NEED_PATCH */
        )
      ])
    ], 40, Sl));
  }
}), ha = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, i] of t)
    n[a] = i;
  return n;
}, zl = /* @__PURE__ */ ha(Ll, [["__scopeId", "data-v-8f6a0f8c"]]), Dl = { class: "screen-recorder" }, Wl = ["onMousedown"], Al = { class: "window-title" }, Fl = {
  key: 0,
  class: "time"
}, Bl = {
  key: 1,
  class: "save-status"
}, jl = {
  key: 2,
  class: "save-status"
}, Hl = {
  key: 3,
  class: "save-status"
}, Ul = ["title"], Gl = { class: "button-label" }, Vl = ["title"], Yl = { class: "button-label" }, Xl = ["title"], ql = { class: "button-label" }, Kl = ["title"], Zl = { class: "button-label" }, Jl = ["title"], Ql = { class: "button-label" }, ec = ["disabled", "title"], tc = { class: "record-label" }, nc = ["title"], sc = ["title"], ac = { class: "capture-viewport" }, oc = { class: "capture-frame" }, ic = {
  key: 0,
  class: "control-group control-group--tools"
}, rc = { class: "tool-pill" }, lc = ["title", "aria-label"], cc = ["title", "aria-label", "aria-pressed", "disabled"], uc = ["title", "aria-label", "aria-pressed", "disabled"], dc = { class: "select-field" }, hc = ["disabled"], pc = ["disabled"], fc = ["disabled"], vc = { value: "high" }, gc = { value: "standard" }, wc = { value: "small" }, yc = { class: "dimension-group optional-size" }, mc = { class: "dimension" }, _c = ["value"], bc = { class: "dimension" }, Cc = ["value"], Mc = { class: "control-group control-group--actions" }, kc = { class: "time" }, Rc = ["title"], Sc = { class: "button-label" }, Tc = ["title"], xc = { class: "button-label" }, Oc = { class: "button-label" }, Ec = ["title"], Pc = { class: "clip-output-actions" }, Ic = { class: "button-label" }, $c = { class: "record-label" }, Nc = ["title"], Lc = { class: "export-progress__meta" }, zc = { class: "export-progress__track" }, Dc = ["title"], Wc = { class: "button-label" }, Ac = ["title"], Fc = ["title"], Bc = { class: "button-label" }, jc = ["title"], Hc = { class: "button-label" }, Uc = ["title"], Gc = { class: "button-label" }, Vc = ["disabled", "title"], Yc = { class: "record-label" }, Xc = {
  key: 0,
  class: "warning"
}, Ee = "[screen-recorder]", me = 80, Pe = 400, Ie = 240, gn = 360, qc = 720, Kc = 480, Zc = 24, gt = 260, Ss = 140, Jc = 720, Ts = 56, Qc = 12, eu = 3, xs = 2, Os = 0, tu = 15, nu = 10, su = 2, au = 8, ou = /* @__PURE__ */ K({
  __name: "index",
  setup(e) {
    const t = {
      start: "R",
      pause: "P",
      stop: "S"
    }, { t: n } = to(), a = Ns(), i = M(null), u = M(null), c = M(null), d = M({ width: 0, height: 0 }), w = M(!1), g = M(!1), v = M(!1), m = M(null), I = M(0), P = M(!1), L = M(null);
    let _ = null, R = null, D = null, Q = null, S = null, re = null, G = null, j = null, $ = null, Re = null, H = null, ee = null, Ve = null, Y = null;
    const bt = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: b,
      settings: N,
      ffmpegStatus: ge,
      result: X,
      clipPreview: Ct,
      clipPreviewLoading: Yt,
      trimStartMs: k,
      trimEndMs: E,
      elapsedMs: F,
      refreshFfmpegStatus: de,
      begin: $e,
      pause: Mt,
      resume: pa,
      stop: fa,
      exportFile: Pn,
      cancelExport: In,
      cancel: $n,
      reset: va
    } = Rl(), Nn = M(!1), Ln = M(0), Se = y(
      () => b.value === "recording" || b.value === "paused" || b.value === "editing" || b.value === "exporting"
    ), it = y(
      () => N.value.audio && N.value.format === "mp4"
    ), kt = y(
      () => it.value && b.value === "recording"
    ), ga = y(() => {
      const s = kt.value && !P.value ? I.value : 0, o = (p, f) => Math.max(0.18, Math.min(1, p + s * f)).toFixed(3);
      return {
        "--bar-1": o(0.28, 0.64),
        "--bar-2": o(0.42, 0.78),
        "--bar-3": o(0.34, 0.94),
        "--bar-4": o(0.22, 0.72)
      };
    }), wa = y(() => {
      if (N.value.format === "gif")
        return n("screenRecorder.gifAudioUnsupported");
      if (P.value && N.value.audio)
        return n("screenRecorder.audioMeterUnavailable");
      if (X.value?.audioDevice)
        return n("screenRecorder.audioRecorded", {
          device: X.value.audioDevice
        });
      if (X.value && !X.value.hasAudio)
        return n("screenRecorder.audioDeviceMissing");
      if (ge.value?.available && !ge.value.systemAudioAvailable) {
        const s = ge.value.audioDevices?.join(", ") || n("screenRecorder.none");
        return N.value.audio ? n("screenRecorder.systemAudioUnavailable", { devices: s }) : n("screenRecorder.audioDisabled");
      }
      return N.value.audio ? n("screenRecorder.audioEnabled") : n("screenRecorder.audioDisabled");
    }), ya = y(
      () => N.value.showCursor ? String(n("screenRecorder.showCursorOn")) : String(n("screenRecorder.showCursorOff"))
    ), zn = y(
      () => `${n("screenRecorder.start")} (${t.start})`
    ), Dn = y(
      () => `${n("screenRecorder.pause")} (${t.pause})`
    ), Wn = y(
      () => `${n("screenRecorder.resume")} (${t.pause})`
    ), An = y(
      () => `${n("screenRecorder.stop")} (${t.stop})`
    ), Fn = y(
      () => v.value && !g.value
    ), Xt = y(() => {
      const s = L.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(s * 100)));
    }), qt = y(() => {
      const s = L.value;
      return s ? s.totalFrames && s.stage === "frames" ? `${s.message}` : s.message || n("screenRecorder.exporting") : n("screenRecorder.exporting");
    }), ma = y(() => {
      const s = L.value;
      return s?.totalFrames ? `${qt.value} (${s.currentFrame}/${s.totalFrames})` : qt.value;
    }), Bn = y(() => {
      const s = Math.floor(F.value / 1e3), o = Math.floor(s / 60).toString().padStart(2, "0"), p = (s % 60).toString().padStart(2, "0");
      return `${o}:${p}`;
    }), _a = y(() => {
      const s = Math.max(0, Math.round(Ln.value / 100)), o = Math.floor(s / 600), p = Math.floor(s % 600 / 10), f = s % 10;
      return `${o}:${String(p).padStart(2, "0")}.${f}`;
    }), Kt = (s) => s instanceof Error ? s.message : String(s), we = async (s) => {
      try {
        await s();
      } catch (o) {
        console.error(`${Ee} action failed`, o), ft.error(`${Ee} action failed`, o), Nn.value || xt.msg(Kt(o), "error");
      }
    }, Ye = (s) => Math.max(2, Math.floor(Math.round(s) / 2) * 2), jn = (s) => Math.max(1, Math.round(s)), Hn = (s, o, p, f, T) => ({
      ...s,
      x: s.x + (o - s.screenX) / s.scale,
      y: s.y + (p - s.screenY) / s.scale,
      width: f / s.scale,
      height: T / s.scale,
      screenX: o,
      screenY: p,
      physicalWidth: f,
      physicalHeight: T
    }), ba = async (s) => {
      const o = s.screenX + Math.round(s.physicalWidth / 2), p = s.screenY + Math.round(s.physicalHeight / 2), f = await Le(s.screenX, s.screenY) || await Le(o, p);
      if (!f)
        return Hn(
          s,
          s.screenX,
          s.screenY,
          Ye(s.physicalWidth),
          Ye(s.physicalHeight)
        );
      const T = f.position.x, z = f.position.y, W = T + f.size.width, V = z + f.size.height, te = s.screenX + s.physicalWidth, Z = s.screenY + s.physicalHeight, ye = Math.max(s.screenX, T), he = Math.max(s.screenY, z), ae = Math.min(te, W), pe = Math.min(Z, V), ne = Ye(ae - ye), xe = Ye(pe - he);
      if (ne < me || xe < me)
        throw new Error(n("screenRecorder.recordingAreaOutOfBounds"));
      return Hn(
        s,
        ye,
        he,
        ne,
        xe
      );
    }, Xe = (s, o) => Math.abs(s - o) <= su, Ca = (s, o) => s === o ? !0 : !s || !o ? !1 : Xe(s.x, o.x) && Xe(s.y, o.y) && Xe(s.width, o.width) && Xe(s.height, o.height), rt = async (s) => {
      Ca(Re, s) || (Re = s ? { ...s } : null, await Je(s).catch(() => {
      }));
    }, Zt = async () => {
      if (g.value && m.value)
        return { ...m.value };
      const s = i.value;
      if (!s)
        throw new Error(n("screenRecorder.viewportNotReady"));
      const o = s.getBoundingClientRect(), p = await a.scaleFactor(), f = await a.innerPosition(), T = jn(o.width * p), z = jn(o.height * p);
      if (T < me || z < me)
        throw new Error(n("screenRecorder.recordingAreaTooSmall"));
      return {
        x: o.left,
        y: o.top,
        width: T / p,
        height: z / p,
        screenX: Math.round(f.x + o.left * p),
        screenY: Math.round(f.y + o.top * p),
        physicalWidth: T,
        physicalHeight: z,
        scale: p
      };
    }, Un = async () => {
      const s = await Zt();
      return ba(s);
    }, Ma = async () => {
      try {
        const s = await Zt();
        if ((!Xe(
          d.value.width,
          s.physicalWidth
        ) || !Xe(
          d.value.height,
          s.physicalHeight
        )) && (d.value = {
          width: s.physicalWidth,
          height: s.physicalHeight
        }), b.value === "editing") {
          await rt(null);
          return;
        }
        if (g.value) {
          await rt(null);
          return;
        }
        await rt({
          x: Math.round(s.x * s.scale),
          y: Math.round(s.y * s.scale),
          width: s.physicalWidth,
          height: s.physicalHeight
        });
      } catch {
        (d.value.width !== 0 || d.value.height !== 0) && (d.value = { width: 0, height: 0 }), await rt(null);
      }
    }, U = async () => j || (j = Ma().finally(() => {
      if (j = null, $) {
        const s = $;
        $ = null, rt(s);
      }
    }), j), ka = () => {
      re === null && (re = requestAnimationFrame(() => {
        re = null, U();
      }));
    }, Rt = () => {
      w.value || ka();
    }, Jt = () => {
      $ = null, Re = null;
    }, qe = async () => {
      Jt(), await Je(null).catch(() => {
      }), await vt(null).catch(() => {
      });
    }, Qt = () => {
      w.value = !1, g.value = !1, v.value = !1, m.value = null;
    }, Gn = () => {
      window.setTimeout(() => {
        U();
      }, 120);
    }, Ne = () => new Promise((s) => {
      requestAnimationFrame(() => requestAnimationFrame(() => s()));
    }), lt = async () => {
      document.documentElement.classList.add("screen-recorder-repaint"), await Ne(), document.documentElement.classList.remove("screen-recorder-repaint"), await Ne();
    }, Ra = async () => {
      await a.setIgnoreCursorEvents(!0).catch(() => {
      }), await Ne(), await a.setIgnoreCursorEvents(!1).catch(() => {
      }), await U();
    }, St = async () => {
      const [s, o] = await Promise.all([
        a.outerPosition(),
        a.outerSize()
      ]);
      return {
        x: s.x,
        y: s.y,
        width: o.width,
        height: o.height
      };
    }, Vn = (s) => s ? {
      x: s.position.x,
      y: s.position.y,
      width: s.size.width,
      height: s.size.height
    } : null, Yn = (s) => {
      const o = c.value?.getBoundingClientRect().height ?? 42;
      return Math.max(
        8,
        Math.round((o + au) * s)
      );
    }, Sa = (s, o, p) => o ? s.y + s.height >= o.y + o.height - Yn(p) : !1, en = async () => {
      try {
        const s = await St(), o = s.x + Math.round(s.width / 2), p = s.y + Math.round(s.height / 2), f = await Le(o, p) || await Le(s.x, s.y), T = f?.scaleFactor || await a.scaleFactor();
        v.value = Sa(
          s,
          Vn(f),
          T
        );
      } catch {
        v.value = !1;
      }
    }, ct = () => {
      G === null && (G = requestAnimationFrame(() => {
        G = null, en();
      }));
    }, Xn = () => {
      ct(), Rt();
    }, tn = async () => {
      await vt(null).catch(() => {
      });
    }, qn = (s, o) => {
      const p = Math.min(s.width, o.width), f = Math.min(s.height, o.height), T = o.x + o.width - p, z = o.y + o.height - f;
      return {
        x: Math.min(Math.max(s.x, o.x), T),
        y: Math.min(Math.max(s.y, o.y), z),
        width: p,
        height: f
      };
    }, Kn = (s, o, p) => {
      if (!o) return !1;
      const f = Math.max(8, Math.round(8 * p)), T = o.x + o.width, z = o.y + o.height, W = s.screenX + s.physicalWidth, V = s.screenY + s.physicalHeight;
      return s.screenX <= o.x + f && s.screenY <= o.y + f && W >= T - f && V >= z - f;
    }, Ta = (s, o, p) => {
      if (!o) return !1;
      if (Kn(s, o, p)) return !0;
      const f = Math.max(8, Math.round(12 * p)), T = s.screenX + s.physicalWidth, z = s.screenY + s.physicalHeight, W = o.x + o.width, V = o.y + o.height, te = s.screenX <= o.x + f, Z = s.screenY <= o.y + f, ye = T >= W - f, he = z >= V - f, ae = s.physicalWidth / o.width, pe = s.physicalHeight / o.height;
      return te && Z && ye && (he || pe >= 0.88) && ae >= 0.94;
    }, xa = (s, o, p) => {
      if (!o) return !1;
      const f = Math.max(8, Math.round(8 * p));
      return s.screenX <= o.x + f || s.screenY <= o.y + f || s.screenX + s.physicalWidth >= o.x + o.width - f || s.screenY + s.physicalHeight >= o.y + o.height - f;
    }, Oa = (s, o, p) => o ? s.screenY + s.physicalHeight >= o.y + o.height - Yn(p) : !1, Ea = (s, o, p) => {
      if (!p) return s;
      const f = Math.round(tu * o), T = Math.round(nu * o);
      return {
        ...s,
        physicalWidth: Math.max(me, s.physicalWidth - f),
        physicalHeight: Math.max(
          me,
          s.physicalHeight - T
        )
      };
    }, Ke = async (s) => {
      await a.setSize(
        new Fe(Math.round(s.width), Math.round(s.height))
      ), await a.setPosition(
        new Ce(Math.round(s.x), Math.round(s.y))
      ), await Ne();
    }, Pa = async (s) => {
      if (Y) {
        await Y;
        return;
      }
      Y = (async () => {
        if (ee ? await ee : (g.value || m.value) && await sn(), b.value !== "editing") return;
        const o = await St();
        Ve || (Ve = o);
        const p = o.x + Math.round(o.width / 2), f = o.y + Math.round(o.height / 2), T = await Le(p, f) || await Le(o.x, o.y), z = T?.scaleFactor || await a.scaleFactor(), W = Vn(T);
        if (!W) return;
        const V = Math.round(Zc * z), te = Math.max(
          Pe,
          (W.width - V * 2) / z
        ), Z = Math.max(
          gn,
          (W.height - V * 2) / z
        ), ye = Math.min(qc, te), he = Math.max(
          0.5,
          Math.min(3.2, s.width / Math.max(1, s.height))
        ), ae = ye / he, pe = Math.min(
          Z,
          Math.max(
            gn,
            Math.min(Kc, ae + 74)
          )
        ), ne = Math.round(ye * z), xe = Math.round(pe * z);
        await a.setMinSize(new le(Pe, gn)).catch(() => {
        }), await Ke({
          x: W.x + Math.round((W.width - ne) / 2),
          y: W.y + Math.round((W.height - xe) / 2),
          width: ne,
          height: xe
        }), await ut(), await lt(), await U(), await a.setFocus().catch(() => {
        });
      })().finally(() => {
        Y = null;
      }), await Y;
    }, nn = async () => {
      Y && await Y;
      const s = Ve;
      Ve = null, await a.setMinSize(new le(Pe, Ie)).catch(() => {
      }), s && await Ke(s), await lt(), await U();
    }, Ia = (s, o, p) => {
      const f = Math.max(s.screenX, o.x), T = Math.max(s.screenY, o.y), z = Math.min(
        s.screenX + s.physicalWidth,
        o.x + o.width
      ), W = Math.min(
        s.screenY + s.physicalHeight,
        o.y + o.height
      ), V = Ye(z - f), te = Ye(W - T);
      return {
        x: f / p,
        y: T / p,
        width: V / p,
        height: te / p,
        screenX: f,
        screenY: T,
        physicalWidth: V,
        physicalHeight: te,
        scale: p
      };
    }, $a = async (s, o, p) => {
      H || (H = await St()), m.value = Ia(
        s,
        o,
        p
      ), w.value = !0, g.value = !0, v.value = !1, Jt(), await vt(null).catch(() => {
      }), await Je(null).catch(() => {
      }), await a.setMinSize(
        new le(gt, Ts)
      ).catch(() => {
      }), await _e(), await Ne();
      const f = Math.round(Qc * p), T = Math.min(
        Math.max(
          Math.round(gt * p),
          Math.round(Jc * p)
        ),
        Math.max(1, o.width - f * 2)
      ), z = Math.min(
        Math.round(Ts * p),
        o.height
      );
      await Ke({
        x: o.x + Math.round((o.width - T) / 2),
        y: o.y + o.height - z - f,
        width: T,
        height: z
      }), await ut(), await lt(), await U(), await a.setFocus().catch(() => {
      });
    }, sn = async () => {
      if (!(!g.value && !m.value)) {
        if (ee) {
          await ee;
          return;
        }
        ee = (async () => {
          const s = H;
          H = null, Qt(), await Oe(!1).catch(() => {
          }), await vt(null).catch(() => {
          }), await Je(null).catch(() => {
          }), await a.setMinSize(new le(Pe, Ie)).catch(() => {
          }), await _e(), await Ne(), s && await Ke(s), await ut(), await lt(), await U(), await a.setFocus().catch(() => {
          });
        })().finally(() => {
          ee = null;
        }), await ee;
      }
    }, ut = async () => {
      await a.setAlwaysOnTop(!0).catch(() => {
      });
    }, Zn = async () => {
      const [s, o] = await Promise.all([
        Zt(),
        St()
      ]);
      return { actualRegion: s, currentFrame: o };
    }, Na = async (s, o, p) => {
      const { actualRegion: f, currentFrame: T } = await Zn(), z = f.screenX - T.x, W = f.screenY - T.y, V = Math.max(
        0,
        T.width - f.physicalWidth
      ), te = Math.max(
        0,
        T.height - f.physicalHeight
      );
      return {
        x: s.screenX - z,
        y: s.screenY - W,
        width: Math.max(o, s.physicalWidth + V),
        height: Math.max(p, s.physicalHeight + te)
      };
    }, Jn = async () => {
      Q?.(), Q = null, I.value = 0;
    }, dt = async () => {
      if (!(!it.value || Q))
        try {
          Q = await zt(
            "screen_recorder_audio_level",
            (s) => {
              if (!kt.value) {
                I.value = 0;
                return;
              }
              const o = Math.max(
                0,
                Math.min(1, Number(s.payload?.level ?? 0))
              );
              I.value = I.value * 0.38 + o * 0.62;
            }
          ), P.value = !1;
        } catch (s) {
          console.error(`${Ee} audio meter failed`, s), ft.warn(`${Ee} audio meter failed`, s), P.value = !0;
        }
    }, an = () => {
      a.setFocus().catch(() => {
      });
    }, La = async (s) => {
      s.button !== 0 || Se.value || (Qt(), await a.setMinSize(new le(Pe, Ie)).catch(() => {
      }), await qe(), await a.startDragging().catch((o) => {
        xt.msg(Kt(o), "error");
      }), Gn(), ct());
    }, za = async (s) => {
      Se.value || (Qt(), await a.setMinSize(new le(Pe, Ie)).catch(() => {
      }), await qe(), await a.startResizeDragging(s).catch((o) => {
        xt.msg(Kt(o), "error");
      }), Gn(), ct());
    }, on = () => we(async () => {
      L.value = null, await dt(), await Oe(!0).catch(() => {
      }), await U(), await $e(await Un());
    }), rn = () => we(async () => {
      await Mt();
    }), ln = () => we(async () => {
      await pa(await Un());
    }), cn = () => we(async () => {
      L.value = N.value.format === "mp4" ? {
        stage: "encode",
        message: n("screenRecorder.preparingMp4"),
        progress: 0.01,
        currentFrame: 0
      } : null, await fa(), I.value = 0, await Oe(!1).catch(() => {
      }), await qe(), await U();
    }), Da = () => we(async () => {
      L.value = {
        stage: "encode",
        message: N.value.format === "gif" ? n("screenRecorder.preparingGif") : n("screenRecorder.preparingMp4"),
        progress: 0.01,
        currentFrame: 0
      }, await Pn(), await U();
    }), Wa = () => we(async () => {
      L.value = {
        stage: "encode",
        message: n("screenRecorder.preparingGif"),
        progress: 0.01,
        currentFrame: 0
      };
      const s = await Pn();
      await wl(s.path), xt.msg(n("screenRecorder.copiedClip"), "success"), await U();
    }), Aa = () => we(async () => {
      const s = { ...N.value };
      await $n(), N.value = s, b.value = "ready", L.value = null, await a.setMinSize(new le(Pe, Ie)).catch(() => {
      }), await nn(), await U(), await dt();
    }), Qn = () => we(async () => {
      await In(), L.value = null, await Oe(!1).catch(() => {
      }), await nn(), await U();
    }), un = () => we(async () => {
      const s = { ...N.value };
      await qe(), va(), N.value = s, b.value = "ready", X.value = null, L.value = null, await Oe(!1).catch(() => {
      }), await nn(), await _e(), await U(), await dt();
    }), dn = (s) => {
      if (b.value !== "exporting") {
        if (s === "start") {
          b.value === "ready" ? on() : b.value === "completed" && un();
          return;
        }
        if (s === "pause") {
          b.value === "recording" ? rn() : b.value === "paused" && ln();
          return;
        }
        s === "stop" && (b.value === "recording" || b.value === "paused") && cn();
      }
    }, Fa = async (s) => {
      const o = await Le(s.screenX, s.screenY), p = o?.scaleFactor || await a.scaleFactor(), f = o ? {
        x: o.position.x,
        y: o.position.y,
        width: o.size.width,
        height: o.size.height
      } : null, T = Kn(
        s,
        f,
        p
      ), z = Ta(s, f, p), W = xa(
        s,
        f,
        p
      );
      if (z && f) {
        await $a(s, f, p);
        return;
      }
      (g.value || m.value) && await sn(), v.value = Oa(
        s,
        f,
        p
      ), w.value = !0, g.value = !1, await _e(), await Ne(), await a.setMinSize(
        W ? new le(gt, Ss) : new le(gt, Ie)
      ).catch(() => {
      });
      const V = Math.round(gt * p), te = Math.round(
        (W ? Ss : Ie) * p
      ), Z = Ea(s, p, !T), ye = W && f ? {
        x: Math.max(f.x, Z.screenX),
        y: Math.max(f.y, Z.screenY),
        width: Math.max(
          V,
          Math.min(Z.physicalWidth, f.width)
        ),
        height: Math.max(
          te,
          Math.min(Z.physicalHeight, f.height)
        )
      } : await Na(
        Z,
        V,
        te
      );
      try {
        if (await Ke(
          f && W ? qn(ye, f) : ye
        ), await ut(), await _e(), await tn(), W)
          return;
        const he = async () => {
          const { actualRegion: ae, currentFrame: pe } = await Zn(), ne = {
            x: Z.screenX - ae.screenX,
            y: Z.screenY - ae.screenY,
            width: Z.physicalWidth - ae.physicalWidth,
            height: Z.physicalHeight - ae.physicalHeight
          };
          if (Math.abs(ne.x) <= Os && Math.abs(ne.y) <= Os && Math.abs(ne.width) <= xs && Math.abs(ne.height) <= xs)
            return !0;
          const xe = {
            x: pe.x + ne.x,
            y: pe.y + ne.y,
            width: Math.max(V, pe.width + ne.width),
            height: Math.max(
              te,
              pe.height + ne.height
            )
          };
          return await Ke(
            f && W ? qn(xe, f) : xe
          ), !1;
        };
        for (let ae = 0; ae < eu && !await he(); ae += 1)
          ;
      } catch (he) {
        console.error(`${Ee} snap correction failed`, he), ft.warn(`${Ee} snap correction failed`, he);
      } finally {
        await ut(), await Ra(), await en(), await U(), await tn(), await lt(), await a.setFocus().catch(() => {
        });
      }
    }, Ba = () => we(async () => {
      await qe();
      const s = await vl();
      await Fa(s);
    }), ja = () => {
      Se.value || N.value.format === "gif" || (N.value.audio = !N.value.audio);
    }, Ha = () => {
      Se.value || (N.value.showCursor = !N.value.showCursor);
    }, Ua = async () => {
      await a.minimize();
    }, es = async () => {
      Nn.value = !0;
      try {
        b.value === "exporting" ? await In().catch(() => {
        }) : await $n(), await Je(null).catch(() => {
        }), await Oe(!1).catch(() => {
        });
      } catch {
      }
      await gl();
    }, ts = async () => {
      X.value && (await U(), await h("open_file_with_default_app", { filePath: X.value.path }));
    }, Ga = async () => {
      X.value && (await U(), await h("show_file_in_folder", { filePath: X.value.path }));
    }, ns = (s) => {
      if (s.repeat || s.ctrlKey || s.metaKey || s.altKey) return;
      const o = s.key.toLowerCase();
      if (o === "r") {
        s.preventDefault(), s.stopPropagation(), dn("start");
        return;
      }
      if (o === "p") {
        s.preventDefault(), s.stopPropagation(), dn("pause");
        return;
      }
      if (o === "s") {
        s.preventDefault(), s.stopPropagation(), dn("stop");
        return;
      }
      s.key === "Escape" && (s.preventDefault(), es());
    };
    return jt(async () => {
      ft.info(`${Ee} frontend mounted`), b.value = "ready", await a.setMinSize(new le(Pe, Ie)).catch(() => {
      }), await Oe(!1).catch(() => {
      }), await de().catch(() => {
      }), await _e(), await U(), await en(), await dt(), await _e(), S = await zt(
        "screen_recorder_export_progress",
        (s) => {
          L.value = s.payload;
        }
      ).catch(() => null), await a.emit("screen_recorder_ready"), ft.info(`${Ee} frontend ready emitted`), i.value && (_ = new ResizeObserver(() => {
        Rt();
      }), _.observe(i.value)), R = await a.onMoved(() => {
        ct(), Rt();
      }).catch(() => null), D = await a.onResized(() => {
        ct(), Rt();
      }).catch(() => null), window.addEventListener("resize", Xn), window.addEventListener("keydown", ns);
    }), ke(it, (s) => {
      s ? dt() : Jn();
    }), ke(b, (s) => {
      s !== "recording" && (I.value = 0), s !== "exporting" && (L.value = null), s === "editing" && qe(), g.value && (s === "editing" || s === "exporting" || s === "completed") && sn();
    }), ke(Ct, (s) => {
      s && b.value === "editing" && Pa(s);
    }), ke(Fn, async () => {
      await _e(), await U(), await tn();
    }), Cn(() => {
      _?.disconnect(), R?.(), D?.(), S?.(), window.removeEventListener(
        "resize",
        Xn
      ), window.removeEventListener("keydown", ns), Jt(), G !== null && (cancelAnimationFrame(G), G = null), Je(null).catch(() => {
      }), vt(null).catch(() => {
      }), Oe(!1).catch(() => {
      }), Jn();
    }), (s, o) => (C(), O("div", Dl, [
      l(
        "div",
        {
          class: B(["recorder-shell", {
            recording: r(b) === "recording",
            paused: r(b) === "paused",
            editing: r(b) === "editing",
            "snap-aligned": w.value,
            "snap-fullscreen": g.value
          }])
        },
        [
          (C(), O(
            be,
            null,
            Ps(bt, (p) => l("span", {
              key: p.className,
              class: B(["resize-zone", p.className]),
              onMousedown: Te((f) => za(p.direction), ["prevent"])
            }, null, 42, Wl)),
            64
            /* STABLE_FRAGMENT */
          )),
          l(
            "header",
            {
              ref_key: "titleBarRef",
              ref: u,
              class: "title-bar",
              onMouseenter: an,
              onMousedown: La
            },
            [
              l(
                "span",
                Al,
                x(s.$t("screenRecorder.title")),
                1
                /* TEXT */
              ),
              Fn.value && r(b) !== "editing" ? (C(), O(
                "div",
                {
                  key: 0,
                  class: "top-control-strip",
                  onMouseenter: an,
                  onMousedown: o[1] || (o[1] = Te(() => {
                  }, ["stop"]))
                },
                [
                  r(b) === "recording" || r(b) === "paused" ? (C(), O(
                    "span",
                    Fl,
                    x(Bn.value),
                    1
                    /* TEXT */
                  )) : r(b) === "exporting" ? (C(), O(
                    "span",
                    Bl,
                    x(Xt.value) + "% ",
                    1
                    /* TEXT */
                  )) : r(b) === "completed" ? (C(), O(
                    "span",
                    jl,
                    x(r(X)?.hasAudio ? s.$t("screenRecorder.savedWithAudio") : s.$t("screenRecorder.savedWithoutAudio")),
                    1
                    /* TEXT */
                  )) : (C(), O(
                    "span",
                    Hl,
                    x(d.value.width) + "×" + x(d.value.height),
                    1
                    /* TEXT */
                  )),
                  r(b) === "recording" || r(b) === "paused" ? (C(), O(
                    be,
                    { key: 4 },
                    [
                      l("button", {
                        class: "control-button",
                        title: r(b) === "paused" ? Wn.value : Dn.value,
                        onClick: o[0] || (o[0] = (p) => r(b) === "paused" ? ln() : rn())
                      }, [
                        l(
                          "span",
                          Gl,
                          x(r(b) === "paused" ? s.$t("screenRecorder.resume") : s.$t("screenRecorder.pause")),
                          1
                          /* TEXT */
                        )
                      ], 8, Ul),
                      l("button", {
                        class: "control-button danger",
                        title: An.value,
                        onClick: cn
                      }, [
                        l(
                          "span",
                          Yl,
                          x(s.$t("screenRecorder.stop")),
                          1
                          /* TEXT */
                        )
                      ], 8, Vl)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : r(b) === "exporting" ? (C(), O("button", {
                    key: 5,
                    class: "control-button danger",
                    title: s.$t("screenRecorder.cancelExport"),
                    onClick: Qn
                  }, [
                    l(
                      "span",
                      ql,
                      x(s.$t("screenRecorder.cancel")),
                      1
                      /* TEXT */
                    )
                  ], 8, Xl)) : r(b) === "completed" && r(X) ? (C(), O(
                    be,
                    { key: 6 },
                    [
                      l("button", {
                        class: "control-button",
                        title: s.$t("screenRecorder.openFile"),
                        onClick: ts
                      }, [
                        l(
                          "span",
                          Zl,
                          x(s.$t("screenRecorder.open")),
                          1
                          /* TEXT */
                        )
                      ], 8, Kl),
                      l("button", {
                        class: "control-button",
                        title: s.$t("screenRecorder.recordAgain"),
                        onClick: un
                      }, [
                        l(
                          "span",
                          Ql,
                          x(s.$t("screenRecorder.again")),
                          1
                          /* TEXT */
                        )
                      ], 8, Jl)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : (C(), O("button", {
                    key: 7,
                    class: "record-button",
                    disabled: r(ge)?.available === !1 || d.value.width < me || d.value.height < me,
                    title: zn.value,
                    onClick: on
                  }, [
                    o[10] || (o[10] = l(
                      "span",
                      { class: "record-dot" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    l(
                      "span",
                      tc,
                      x(s.$t("screenRecorder.start")),
                      1
                      /* TEXT */
                    )
                  ], 8, ec))
                ],
                32
                /* NEED_HYDRATION */
              )) : se("v-if", !0),
              l(
                "div",
                {
                  class: "window-actions",
                  onMousedown: o[2] || (o[2] = Te(() => {
                  }, ["stop"]))
                },
                [
                  l("button", {
                    class: "title-button title-button--window",
                    title: s.$t("screenRecorder.minimize"),
                    onClick: Ua
                  }, [
                    A(r(yo), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 8, nc),
                  l("button", {
                    class: "title-button title-button--close",
                    title: s.$t("common.close"),
                    onClick: es
                  }, [
                    A(r(wo), {
                      class: "title-icon",
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 8, sc)
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          l("main", ac, [
            o[15] || (o[15] = l(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            o[16] || (o[16] = l(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            o[17] || (o[17] = l(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            o[18] || (o[18] = l(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            l("div", oc, [
              l(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: i,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              o[11] || (o[11] = l(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              o[12] || (o[12] = l(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              o[13] || (o[13] = l(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              o[14] || (o[14] = l(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          l(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: c,
              class: B(["control-strip", { editing: r(b) === "editing" }]),
              onMouseenter: an
            },
            [
              r(b) !== "editing" ? (C(), O("div", ic, [
                l("div", rc, [
                  r(b) === "ready" || r(b) === "completed" ? (C(), O("button", {
                    key: 0,
                    class: "icon-control snap-control",
                    title: s.$t("screenRecorder.snapToWindow"),
                    "aria-label": s.$t("screenRecorder.snapToWindow"),
                    onMousedown: Te(Ba, ["prevent"])
                  }, [
                    A(r(_o), {
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 40, lc)) : se("v-if", !0),
                  l("button", {
                    class: B(["audio-meter", {
                      active: kt.value && I.value > 0.03,
                      "audio-on": it.value,
                      metering: kt.value && !P.value,
                      muted: !it.value || P.value
                    }]),
                    title: wa.value,
                    "aria-label": s.$t("screenRecorder.audioStatus"),
                    "aria-pressed": r(N).audio && r(N).format === "mp4",
                    disabled: Se.value || r(N).format === "gif",
                    onClick: ja
                  }, [
                    l(
                      "span",
                      {
                        class: "audio-bars",
                        style: ce(ga.value)
                      },
                      o[19] || (o[19] = [
                        l(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        l(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        l(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        l(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        )
                      ]),
                      4
                      /* STYLE */
                    )
                  ], 10, cc),
                  l("button", {
                    class: B(["icon-control cursor-control", { active: r(N).showCursor }]),
                    title: ya.value,
                    "aria-label": s.$t("screenRecorder.showCursor"),
                    "aria-pressed": r(N).showCursor,
                    disabled: Se.value,
                    onClick: Ha
                  }, [
                    A(r(mo), {
                      theme: "outline",
                      size: "17",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ], 10, uc)
                ]),
                l("label", dc, [
                  Ae(l("select", {
                    "onUpdate:modelValue": o[3] || (o[3] = (p) => r(N).fps = p),
                    disabled: Se.value
                  }, o[20] || (o[20] = [
                    l(
                      "option",
                      { value: 15 },
                      "15",
                      -1
                      /* HOISTED */
                    ),
                    l(
                      "option",
                      { value: 24 },
                      "24",
                      -1
                      /* HOISTED */
                    ),
                    l(
                      "option",
                      { value: 30 },
                      "30",
                      -1
                      /* HOISTED */
                    ),
                    l(
                      "option",
                      { value: 60 },
                      "60",
                      -1
                      /* HOISTED */
                    )
                  ]), 8, hc), [
                    [hn, r(N).fps]
                  ]),
                  o[21] || (o[21] = l(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                Ae(l("select", {
                  "onUpdate:modelValue": o[4] || (o[4] = (p) => r(N).format = p),
                  class: "format-select optional-format",
                  disabled: Se.value
                }, o[22] || (o[22] = [
                  l(
                    "option",
                    { value: "mp4" },
                    "MP4",
                    -1
                    /* HOISTED */
                  ),
                  l(
                    "option",
                    { value: "gif" },
                    "GIF",
                    -1
                    /* HOISTED */
                  )
                ]), 8, pc), [
                  [hn, r(N).format]
                ]),
                Ae(l("select", {
                  "onUpdate:modelValue": o[5] || (o[5] = (p) => r(N).quality = p),
                  class: "quality-select optional-quality",
                  disabled: Se.value
                }, [
                  l(
                    "option",
                    vc,
                    x(s.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  l(
                    "option",
                    gc,
                    x(s.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  l(
                    "option",
                    wc,
                    x(s.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, fc), [
                  [hn, r(N).quality]
                ]),
                l("div", yc, [
                  l("label", mc, [
                    l("input", {
                      value: d.value.width,
                      readonly: ""
                    }, null, 8, _c)
                  ]),
                  o[23] || (o[23] = l(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  l("label", bc, [
                    l("input", {
                      value: d.value.height,
                      readonly: ""
                    }, null, 8, Cc)
                  ]),
                  o[24] || (o[24] = l(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ])) : se("v-if", !0),
              l("div", Mc, [
                r(b) === "recording" || r(b) === "paused" ? (C(), O(
                  be,
                  { key: 0 },
                  [
                    l(
                      "span",
                      kc,
                      x(Bn.value),
                      1
                      /* TEXT */
                    ),
                    l("button", {
                      class: "control-button",
                      title: r(b) === "paused" ? Wn.value : Dn.value,
                      onClick: o[6] || (o[6] = (p) => r(b) === "paused" ? ln() : rn())
                    }, [
                      l(
                        "span",
                        Sc,
                        x(r(b) === "paused" ? s.$t("screenRecorder.resume") : s.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ], 8, Rc),
                    l("button", {
                      class: "control-button danger",
                      title: An.value,
                      onClick: cn
                    }, [
                      l(
                        "span",
                        xc,
                        x(s.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ], 8, Tc)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : r(b) === "editing" ? (C(), O(
                  be,
                  { key: 1 },
                  [
                    l("button", {
                      class: "control-button",
                      type: "button",
                      onClick: Aa
                    }, [
                      l(
                        "span",
                        Oc,
                        x(s.$t("screenRecorder.discardClip")),
                        1
                        /* TEXT */
                      )
                    ]),
                    l("span", {
                      class: "clip-current-time",
                      title: s.$t("screenRecorder.previewCurrentTime")
                    }, x(_a.value), 9, Ec),
                    l("div", Pc, [
                      l("button", {
                        class: "control-button clip-copy-button",
                        type: "button",
                        onClick: Wa
                      }, [
                        l(
                          "span",
                          Ic,
                          x(s.$t("screenRecorder.copyClip")),
                          1
                          /* TEXT */
                        )
                      ]),
                      l("button", {
                        class: "record-button clip-export-button",
                        type: "button",
                        onClick: Da
                      }, [
                        l(
                          "span",
                          $c,
                          x(s.$t("screenRecorder.exportClip")),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : r(b) === "exporting" ? (C(), O(
                  be,
                  { key: 2 },
                  [
                    l("div", {
                      class: "export-progress",
                      title: ma.value
                    }, [
                      l("div", Lc, [
                        l(
                          "span",
                          null,
                          x(qt.value),
                          1
                          /* TEXT */
                        ),
                        l(
                          "strong",
                          null,
                          x(Xt.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      l("div", zc, [
                        l(
                          "span",
                          {
                            style: ce({ width: `${Xt.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, Nc),
                    l("button", {
                      class: "control-button danger",
                      title: s.$t("screenRecorder.cancelExport"),
                      onClick: Qn
                    }, [
                      l(
                        "span",
                        Wc,
                        x(s.$t("screenRecorder.cancel")),
                        1
                        /* TEXT */
                      )
                    ], 8, Dc)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : r(b) === "completed" && r(X) ? (C(), O(
                  be,
                  { key: 3 },
                  [
                    l("span", {
                      class: "save-status optional-save-status",
                      title: r(X).path
                    }, x(r(X).hasAudio ? s.$t("screenRecorder.savedWithAudio") : s.$t("screenRecorder.savedWithoutAudio")), 9, Ac),
                    l("button", {
                      class: "control-button",
                      title: s.$t("screenRecorder.openFile"),
                      onClick: ts
                    }, [
                      l(
                        "span",
                        Bc,
                        x(s.$t("screenRecorder.open")),
                        1
                        /* TEXT */
                      )
                    ], 8, Fc),
                    l("button", {
                      class: "control-button",
                      title: s.$t("screenRecorder.openFolder"),
                      onClick: Ga
                    }, [
                      l(
                        "span",
                        Hc,
                        x(s.$t("screenRecorder.folder")),
                        1
                        /* TEXT */
                      )
                    ], 8, jc),
                    l("button", {
                      class: "control-button",
                      title: s.$t("screenRecorder.recordAgain"),
                      onClick: un
                    }, [
                      l(
                        "span",
                        Gc,
                        x(s.$t("screenRecorder.again")),
                        1
                        /* TEXT */
                      )
                    ], 8, Uc)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (C(), O("button", {
                  key: 4,
                  class: "record-button",
                  disabled: r(ge)?.available === !1 || d.value.width < me || d.value.height < me,
                  title: zn.value,
                  onClick: on
                }, [
                  o[25] || (o[25] = l(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  l(
                    "span",
                    Yc,
                    x(s.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, Vc))
              ])
            ],
            34
            /* CLASS, NEED_HYDRATION */
          ),
          r(b) === "editing" ? (C(), Me(zl, {
            key: 0,
            preview: r(Ct),
            loading: r(Yt),
            "duration-ms": r(F),
            "start-ms": r(k),
            "end-ms": r(E),
            "onUpdate:startMs": o[7] || (o[7] = (p) => k.value = p),
            "onUpdate:endMs": o[8] || (o[8] = (p) => E.value = p),
            onPreviewTimeChange: o[9] || (o[9] = (p) => Ln.value = p)
          }, null, 8, ["preview", "loading", "duration-ms", "start-ms", "end-ms"])) : se("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      r(ge) && !r(ge).available ? (C(), O(
        "p",
        Xc,
        x(r(ge).message || s.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : se("v-if", !0)
    ]));
  }
}), iu = /* @__PURE__ */ ha(ou, [["__scopeId", "data-v-f4e93616"]]), ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: iu
}, Symbol.toStringTag, { value: "Module" }));
export {
  uu as activate
};
