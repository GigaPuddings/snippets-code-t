import { inject as ae, createVNode as T, getCurrentInstance as me, ref as I, computed as m, unref as l, readonly as uo, getCurrentScope as co, onScopeDispose as po, onMounted as nt, nextTick as Te, watch as we, isRef as ho, warn as fo, provide as go, defineComponent as D, createElementBlock as N, openBlock as k, mergeProps as vo, renderSlot as _e, createElementVNode as d, normalizeClass as P, Transition as wt, withCtx as re, withDirectives as le, normalizeStyle as Le, createTextVNode as yo, toDisplayString as E, vShow as Ke, shallowReactive as mo, createBlock as X, createCommentVNode as Q, resolveDynamicComponent as ln, Fragment as Ne, withModifiers as ze, isVNode as $e, render as Ze, onUnmounted as un, renderList as wo, vModelSelect as rt } from "vue";
const mr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => vr)
  });
};
function _o(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function bo(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ue;
const B = "__TAURI_TO_IPC_KEY__";
function Co(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function u(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class xo {
  get rid() {
    return _o(this, Ue, "f");
  }
  constructor(t) {
    Ue.set(this, void 0), bo(this, Ue, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return u("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ue = /* @__PURE__ */ new WeakMap();
class Je {
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
    return new ue(this.width * t, this.height * t);
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
class ue {
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
    return new Je(this.width / t, this.height / t);
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
class ve {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Je ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof ue ? this.size : this.size.toPhysical(t);
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
    return new Z(this.x * t, this.y * t);
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
class Z {
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
class He {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof cn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Z ? this.position : this.position.toPhysical(t);
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
var W;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(W || (W = {}));
async function dn(e, t) {
  await u("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function _t(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return u("plugin:event|listen", {
    event: e,
    target: s,
    handler: Co(t)
  }).then((a) => async () => dn(e, a));
}
async function ko(e, t, n) {
  return _t(e, (o) => {
    dn(e, o.id), t(o);
  }, n);
}
async function So(e, t) {
  await u("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Oo(e, t, n) {
  await u("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Pe extends xo {
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
    return u("plugin:image|new", {
      rgba: Ye(t),
      width: n,
      height: o
    }).then((s) => new Pe(s));
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
    return u("plugin:image|from_bytes", {
      bytes: Ye(t)
    }).then((n) => new Pe(n));
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
    return u("plugin:image|from_path", { path: t }).then((n) => new Pe(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return u("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return u("plugin:image|size", { rid: this.rid });
  }
}
function Ye(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Pe ? e.rid : e;
}
var gt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(gt || (gt = {}));
class Io {
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
var Rt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Rt || (Rt = {}));
function pn() {
  return new hn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function lt() {
  return u("plugin:window|get_all_windows").then((e) => e.map((t) => new hn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ut = ["tauri://created", "tauri://error"];
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || u("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
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
    var n;
    return (n = (await lt()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
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
    return lt();
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
    for (const t of await lt())
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
    } : _t(t, n, {
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
    } : ko(t, n, {
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
    if (ut.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return So(t, n);
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
    if (ut.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return Oo(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ut.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return u("plugin:window|scale_factor", {
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
    return u("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Z(t));
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
    return u("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Z(t));
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
    return u("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new ue(t));
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
    return u("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new ue(t));
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
    return u("plugin:window|is_fullscreen", {
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
    return u("plugin:window|is_minimized", {
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
    return u("plugin:window|is_maximized", {
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
    return u("plugin:window|is_focused", {
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
    return u("plugin:window|is_decorated", {
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
    return u("plugin:window|is_resizable", {
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
    return u("plugin:window|is_maximizable", {
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
    return u("plugin:window|is_minimizable", {
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
    return u("plugin:window|is_closable", {
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
    return u("plugin:window|is_visible", {
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
    return u("plugin:window|title", {
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
    return u("plugin:window|theme", {
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
    return u("plugin:window|is_always_on_top", {
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
    return u("plugin:window|center", {
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
    return t && (t === gt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), u("plugin:window|request_user_attention", {
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
    return u("plugin:window|set_resizable", {
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
    return u("plugin:window|set_enabled", {
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
    return u("plugin:window|is_enabled", {
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
    return u("plugin:window|set_maximizable", {
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
    return u("plugin:window|set_minimizable", {
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
    return u("plugin:window|set_closable", {
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
    return u("plugin:window|set_title", {
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
    return u("plugin:window|maximize", {
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
    return u("plugin:window|unmaximize", {
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
    return u("plugin:window|toggle_maximize", {
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
    return u("plugin:window|minimize", {
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
    return u("plugin:window|unminimize", {
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
    return u("plugin:window|show", {
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
    return u("plugin:window|hide", {
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
    return u("plugin:window|close", {
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
    return u("plugin:window|destroy", {
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
    return u("plugin:window|set_decorations", {
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
    return u("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return u("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return u("plugin:window|set_effects", {
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
    return u("plugin:window|set_always_on_top", {
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
    return u("plugin:window|set_always_on_bottom", {
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
    return u("plugin:window|set_content_protected", {
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
    return u("plugin:window|set_size", {
      label: this.label,
      value: t instanceof ve ? t : new ve(t)
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
    return u("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof ve ? t : t ? new ve(t) : null
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
    return u("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof ve ? t : t ? new ve(t) : null
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
    return u("plugin:window|set_size_constraints", {
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
    return u("plugin:window|set_position", {
      label: this.label,
      value: t instanceof He ? t : new He(t)
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
    return u("plugin:window|set_fullscreen", {
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
    return u("plugin:window|set_focus", {
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
    return u("plugin:window|set_icon", {
      label: this.label,
      value: Ye(t)
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
    return u("plugin:window|set_skip_taskbar", {
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
    return u("plugin:window|set_cursor_grab", {
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
    return u("plugin:window|set_cursor_visible", {
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
    return u("plugin:window|set_cursor_icon", {
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
    return u("plugin:window|set_background_color", { color: t });
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
    return u("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof He ? t : new He(t)
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
    return u("plugin:window|set_ignore_cursor_events", {
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
    return u("plugin:window|start_dragging", {
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
    return u("plugin:window|start_resize_dragging", {
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
    return u("plugin:window|set_badge_count", {
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
    return u("plugin:window|set_badge_label", {
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
    return u("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Ye(t) : void 0
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
    return u("plugin:window|set_progress_bar", {
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
    return u("plugin:window|set_visible_on_all_workspaces", {
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
    return u("plugin:window|set_title_bar_style", {
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
    return u("plugin:window|set_theme", {
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
    return this.listen(W.WINDOW_RESIZED, (n) => {
      n.payload = new ue(n.payload), t(n);
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
    return this.listen(W.WINDOW_MOVED, (n) => {
      n.payload = new Z(n.payload), t(n);
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
    return this.listen(W.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Io(n);
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
    const n = await this.listen(W.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), o = await this.listen(W.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new Z(i.payload.position)
        }
      });
    }), s = await this.listen(W.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), a = await this.listen(W.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), a();
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
    const n = await this.listen(W.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(W.WINDOW_BLUR, (s) => {
      t({ ...s, payload: !1 });
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
    return this.listen(W.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(W.WINDOW_THEME_CHANGED, t);
  }
}
var Wt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Wt || (Wt = {}));
var Ft;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ft || (Ft = {}));
var At;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(At || (At = {}));
function Mo(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Z(e.position),
    size: new ue(e.size)
  };
}
async function To(e, t) {
  return u("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Mo);
}
var No = {
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
function zo() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Po(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], a = t.theme || n.theme;
  switch (a) {
    case "outline":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("none");
      break;
    case "filled":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push("#FFF"), s.push("#FFF");
      break;
    case "two-tone":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      s.push(typeof o[0] == "string" ? o[0] : "currentColor"), s.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), s.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), s.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: s,
    id: e
  };
}
var Lo = Symbol("icon-context");
function bt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var i = zo(), p = ae(Lo, No);
      return function() {
        var f = a.size, v = a.strokeWidth, h = a.strokeLinecap, y = a.strokeLinejoin, O = a.theme, C = a.fill, H = a.spin, g = Po(i, {
          size: f,
          strokeWidth: v,
          strokeLinecap: h,
          strokeLinejoin: y,
          theme: O,
          fill: C
        }, p), w = [p.prefix + "-icon"];
        return w.push(p.prefix + "-icon-" + e), H && w.push(p.prefix + "-icon-spin"), T("span", {
          class: w.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const $o = bt("close-small", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Eo = bt("minus", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Do = bt("radar", !1, function(e) {
  return T("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [T("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), T("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), T("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fn = Symbol(), Ve = "el", Ro = "is-", ie = (e, t, n, o, s) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), s && (a += `--${s}`), a;
}, gn = Symbol("namespaceContextKey"), Wo = (e) => {
  const t = e || (me() ? ae(gn, I(Ve)) : I(Ve));
  return m(() => l(t) || Ve);
}, Ct = (e, t) => {
  const n = Wo(t);
  return {
    namespace: n,
    b: (g = "") => ie(n.value, e, g, "", ""),
    e: (g) => g ? ie(n.value, e, "", g, "") : "",
    m: (g) => g ? ie(n.value, e, "", "", g) : "",
    be: (g, w) => g && w ? ie(n.value, e, g, w, "") : "",
    em: (g, w) => g && w ? ie(n.value, e, "", g, w) : "",
    bm: (g, w) => g && w ? ie(n.value, e, g, "", w) : "",
    bem: (g, w, M) => g && w && M ? ie(n.value, e, g, w, M) : "",
    is: (g, ...w) => {
      const M = w.length >= 1 ? w[0] : !0;
      return g && M ? `${Ro}${g}` : "";
    },
    cssVar: (g) => {
      const w = {};
      for (const M in g)
        g[M] && (w[`--${n.value}-${M}`] = g[M]);
      return w;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const w = {};
      for (const M in g)
        g[M] && (w[`--${n.value}-${e}-${M}`] = g[M]);
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
const Fo = Object.prototype.hasOwnProperty, jt = (e, t) => Fo.call(e, t), Ee = (e) => typeof e == "function", ce = (e) => typeof e == "string", vn = (e) => e !== null && typeof e == "object";
var Ao = typeof global == "object" && global && global.Object === Object && global, jo = typeof self == "object" && self && self.Object === Object && self, xt = Ao || jo || Function("return this")(), be = xt.Symbol, yn = Object.prototype, Bo = yn.hasOwnProperty, Ho = yn.toString, Ie = be ? be.toStringTag : void 0;
function Go(e) {
  var t = Bo.call(e, Ie), n = e[Ie];
  try {
    e[Ie] = void 0;
    var o = !0;
  } catch {
  }
  var s = Ho.call(e);
  return o && (t ? e[Ie] = n : delete e[Ie]), s;
}
var Uo = Object.prototype, Vo = Uo.toString;
function qo(e) {
  return Vo.call(e);
}
var Ko = "[object Null]", Zo = "[object Undefined]", Bt = be ? be.toStringTag : void 0;
function mn(e) {
  return e == null ? e === void 0 ? Zo : Ko : Bt && Bt in Object(e) ? Go(e) : qo(e);
}
function Jo(e) {
  return e != null && typeof e == "object";
}
var Yo = "[object Symbol]";
function kt(e) {
  return typeof e == "symbol" || Jo(e) && mn(e) == Yo;
}
function Xo(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var St = Array.isArray, Ht = be ? be.prototype : void 0, Gt = Ht ? Ht.toString : void 0;
function wn(e) {
  if (typeof e == "string")
    return e;
  if (St(e))
    return Xo(e, wn) + "";
  if (kt(e))
    return Gt ? Gt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function _n(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qo = "[object AsyncFunction]", es = "[object Function]", ts = "[object GeneratorFunction]", ns = "[object Proxy]";
function os(e) {
  if (!_n(e))
    return !1;
  var t = mn(e);
  return t == es || t == ts || t == Qo || t == ns;
}
var ct = xt["__core-js_shared__"], Ut = function() {
  var e = /[^.]+$/.exec(ct && ct.keys && ct.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ss(e) {
  return !!Ut && Ut in e;
}
var is = Function.prototype, as = is.toString;
function rs(e) {
  if (e != null) {
    try {
      return as.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ls = /[\\^$.*+?()[\]{}|]/g, us = /^\[object .+?Constructor\]$/, cs = Function.prototype, ds = Object.prototype, ps = cs.toString, hs = ds.hasOwnProperty, fs = RegExp(
  "^" + ps.call(hs).replace(ls, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gs(e) {
  if (!_n(e) || ss(e))
    return !1;
  var t = os(e) ? fs : us;
  return t.test(rs(e));
}
function vs(e, t) {
  return e?.[t];
}
function bn(e, t) {
  var n = vs(e, t);
  return gs(n) ? n : void 0;
}
function ys(e, t) {
  return e === t || e !== e && t !== t;
}
var ms = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ws = /^\w*$/;
function _s(e, t) {
  if (St(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || kt(e) ? !0 : ws.test(e) || !ms.test(e) || t != null && e in Object(t);
}
var De = bn(Object, "create");
function bs() {
  this.__data__ = De ? De(null) : {}, this.size = 0;
}
function Cs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var xs = "__lodash_hash_undefined__", ks = Object.prototype, Ss = ks.hasOwnProperty;
function Os(e) {
  var t = this.__data__;
  if (De) {
    var n = t[e];
    return n === xs ? void 0 : n;
  }
  return Ss.call(t, e) ? t[e] : void 0;
}
var Is = Object.prototype, Ms = Is.hasOwnProperty;
function Ts(e) {
  var t = this.__data__;
  return De ? t[e] !== void 0 : Ms.call(t, e);
}
var Ns = "__lodash_hash_undefined__";
function zs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = De && t === void 0 ? Ns : t, this;
}
function de(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = bs;
de.prototype.delete = Cs;
de.prototype.get = Os;
de.prototype.has = Ts;
de.prototype.set = zs;
function Ps() {
  this.__data__ = [], this.size = 0;
}
function ot(e, t) {
  for (var n = e.length; n--; )
    if (ys(e[n][0], t))
      return n;
  return -1;
}
var Ls = Array.prototype, $s = Ls.splice;
function Es(e) {
  var t = this.__data__, n = ot(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : $s.call(t, n, 1), --this.size, !0;
}
function Ds(e) {
  var t = this.__data__, n = ot(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Rs(e) {
  return ot(this.__data__, e) > -1;
}
function Ws(e, t) {
  var n = this.__data__, o = ot(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function ke(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ke.prototype.clear = Ps;
ke.prototype.delete = Es;
ke.prototype.get = Ds;
ke.prototype.has = Rs;
ke.prototype.set = Ws;
var Fs = bn(xt, "Map");
function As() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (Fs || ke)(),
    string: new de()
  };
}
function js(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function st(e, t) {
  var n = e.__data__;
  return js(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Bs(e) {
  var t = st(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Hs(e) {
  return st(this, e).get(e);
}
function Gs(e) {
  return st(this, e).has(e);
}
function Us(e, t) {
  var n = st(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function he(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
he.prototype.clear = As;
he.prototype.delete = Bs;
he.prototype.get = Hs;
he.prototype.has = Gs;
he.prototype.set = Us;
var Vs = "Expected a function";
function Ot(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Vs);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var i = e.apply(this, o);
    return n.cache = a.set(s, i) || a, i;
  };
  return n.cache = new (Ot.Cache || he)(), n;
}
Ot.Cache = he;
var qs = 500;
function Ks(e) {
  var t = Ot(e, function(o) {
    return n.size === qs && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Zs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Js = /\\(\\)?/g, Ys = Ks(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Zs, function(n, o, s, a) {
    t.push(s ? a.replace(Js, "$1") : o || n);
  }), t;
});
function Xs(e) {
  return e == null ? "" : wn(e);
}
function Qs(e, t) {
  return St(e) ? e : _s(e, t) ? [e] : Ys(Xs(e));
}
function ei(e) {
  if (typeof e == "string" || kt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ti(e, t) {
  t = Qs(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ei(t[n++])];
  return n && n == o ? e : void 0;
}
function ni(e, t, n) {
  var o = e == null ? void 0 : ti(e, t);
  return o === void 0 ? n : o;
}
function oi(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const Cn = (e) => e === void 0, Vt = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", vt = (e) => typeof Element > "u" ? !1 : e instanceof Element, si = (e) => ce(e) ? !Number.isNaN(Number(e)) : !1;
var qt;
const fe = typeof window < "u", ii = (e) => typeof e == "string", ai = () => {
};
fe && ((qt = window?.navigator) != null && qt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function It(e) {
  return typeof e == "function" ? e() : l(e);
}
function ri(e) {
  return e;
}
function Mt(e) {
  return co() ? (po(e), !0) : !1;
}
function li(e, t = !0) {
  me() ? nt(e) : t ? e() : Te(e);
}
function xn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = I(!1);
  let a = null;
  function i() {
    a && (clearTimeout(a), a = null);
  }
  function p() {
    s.value = !1, i();
  }
  function f(...v) {
    i(), s.value = !0, a = setTimeout(() => {
      s.value = !1, a = null, e(...v);
    }, It(t));
  }
  return o && (s.value = !0, fe && f()), Mt(p), {
    isPending: uo(s),
    start: f,
    stop: p
  };
}
function kn(e) {
  var t;
  const n = It(e);
  return (t = n?.$el) != null ? t : n;
}
const Sn = fe ? window : void 0;
function On(...e) {
  let t, n, o, s;
  if (ii(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = Sn) : [t, n, o, s] = e, !t)
    return ai;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], i = () => {
    a.forEach((h) => h()), a.length = 0;
  }, p = (h, y, O, C) => (h.addEventListener(y, O, C), () => h.removeEventListener(y, O, C)), f = we(() => [kn(t), It(s)], ([h, y]) => {
    i(), h && a.push(...n.flatMap((O) => o.map((C) => p(h, O, C, y))));
  }, { immediate: !0, flush: "post" }), v = () => {
    f(), i();
  };
  return Mt(v), v;
}
function ui(e, t = !1) {
  const n = I(), o = () => n.value = !!e();
  return o(), li(o, t), n;
}
const Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zt = "__vueuse_ssr_handlers__";
Kt[Zt] = Kt[Zt] || {};
var Jt = Object.getOwnPropertySymbols, ci = Object.prototype.hasOwnProperty, di = Object.prototype.propertyIsEnumerable, pi = (e, t) => {
  var n = {};
  for (var o in e)
    ci.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Jt)
    for (var o of Jt(e))
      t.indexOf(o) < 0 && di.call(e, o) && (n[o] = e[o]);
  return n;
};
function hi(e, t, n = {}) {
  const o = n, { window: s = Sn } = o, a = pi(o, ["window"]);
  let i;
  const p = ui(() => s && "ResizeObserver" in s), f = () => {
    i && (i.disconnect(), i = void 0);
  }, v = we(() => kn(e), (y) => {
    f(), p.value && s && y && (i = new ResizeObserver(t), i.observe(y, a));
  }, { immediate: !0, flush: "post" }), h = () => {
    f(), v();
  };
  return Mt(h), {
    isSupported: p,
    stop: h
  };
}
var Yt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Yt || (Yt = {}));
var fi = Object.defineProperty, Xt = Object.getOwnPropertySymbols, gi = Object.prototype.hasOwnProperty, vi = Object.prototype.propertyIsEnumerable, Qt = (e, t, n) => t in e ? fi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yi = (e, t) => {
  for (var n in t || (t = {}))
    gi.call(t, n) && Qt(e, n, t[n]);
  if (Xt)
    for (var n of Xt(t))
      vi.call(t, n) && Qt(e, n, t[n]);
  return e;
};
const mi = {
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
yi({
  linear: ri
}, mi);
const en = {
  current: 0
}, tn = I(0), In = 2e3, nn = Symbol("elZIndexContextKey"), Mn = Symbol("zIndexContextKey"), wi = (e) => {
  const t = me() ? ae(nn, en) : en, n = e || (me() ? ae(Mn, void 0) : void 0), o = m(() => {
    const i = l(n);
    return pe(i) ? i : In;
  }), s = m(() => o.value + tn.value), a = () => (t.current++, tn.value = t.current, s.value);
  return !fe && ae(nn), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: a
  };
};
var _i = {
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
const bi = (e) => (t, n) => Ci(t, n, l(e)), Ci = (e, t, n) => ni(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var a;
  return `${(a = t?.[s]) != null ? a : `{${s}}`}`;
}), xi = (e) => {
  const t = m(() => l(e).name), n = ho(e) ? e : I(e);
  return {
    lang: t,
    locale: n,
    t: bi(e)
  };
}, Tn = Symbol("localeContextKey"), ki = (e) => {
  const t = e || ae(Tn, I());
  return xi(m(() => t.value || _i));
}, Nn = "__epPropKey", F = (e) => e, Si = (e) => vn(e) && !!e[Nn], zn = (e, t) => {
  if (!vn(e) || Si(e))
    return e;
  const { values: n, required: o, default: s, type: a, validator: i } = e, f = {
    type: a,
    required: !!o,
    validator: n || i ? (v) => {
      let h = !1, y = [];
      if (n && (y = Array.from(n), jt(e, "default") && y.push(s), h || (h = y.includes(v))), i && (h || (h = i(v))), !h && y.length > 0) {
        const O = [...new Set(y)].map((C) => JSON.stringify(C)).join(", ");
        fo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${O}], got value ${JSON.stringify(v)}.`);
      }
      return h;
    } : void 0,
    [Nn]: !0
  };
  return jt(e, "default") && (f.default = s), f;
}, Se = (e) => oi(Object.entries(e).map(([t, n]) => [
  t,
  zn(n, t)
])), Oi = ["", "default", "small", "large"], Ii = zn({
  type: String,
  values: Oi,
  required: !1
}), Mi = Symbol("size"), Ti = Symbol("emptyValuesContextKey"), Ni = Se({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ee(e) ? !e() : !e
  }
}), on = (e) => Object.keys(e), Xe = I();
function Pn(e, t = void 0) {
  return me() ? ae(fn, Xe) : Xe;
}
function Ln(e, t) {
  const n = Pn(), o = Ct(e, m(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || Ve;
  })), s = ki(m(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), a = wi(m(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || In;
  })), i = m(() => {
    var p;
    return l(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return $n(m(() => l(n) || {})), {
    ns: o,
    locale: s,
    zIndex: a,
    size: i
  };
}
const $n = (e, t, n = !1) => {
  var o;
  const s = !!me(), a = s ? Pn() : void 0, i = (o = void 0) != null ? o : s ? go : void 0;
  if (!i)
    return;
  const p = m(() => {
    const f = l(e);
    return a?.value ? zi(a.value, f) : f;
  });
  return i(fn, p), i(Tn, m(() => p.value.locale)), i(gn, m(() => p.value.namespace)), i(Mn, m(() => p.value.zIndex)), i(Mi, {
    size: m(() => p.value.size || "")
  }), i(Ti, m(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Xe.value) && (Xe.value = p.value), p;
}, zi = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...on(e), ...on(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var it = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function yt(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || si(e))
    return `${e}${t}`;
  if (ce(e))
    return e;
}
const En = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Dn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Pi = Se({
  size: {
    type: F([Number, String])
  },
  color: {
    type: String
  }
}), Li = D({
  name: "ElIcon",
  inheritAttrs: !1
}), $i = /* @__PURE__ */ D({
  ...Li,
  props: Pi,
  setup(e) {
    const t = e, n = Ct("icon"), o = m(() => {
      const { size: s, color: a } = t;
      return !s && !a ? {} : {
        fontSize: Cn(s) ? void 0 : yt(s),
        "--color": a
      };
    });
    return (s, a) => (k(), N("i", vo({
      class: l(n).b(),
      style: l(o)
    }, s.$attrs), [
      _e(s.$slots, "default")
    ], 16));
  }
});
var Ei = /* @__PURE__ */ it($i, [["__file", "icon.vue"]]);
const Qe = En(Ei);
/*! Element Plus Icons Vue v2.3.1 */
var Di = /* @__PURE__ */ D({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ri = Di, Wi = /* @__PURE__ */ D({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Rn = Wi, Fi = /* @__PURE__ */ D({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ai = Fi, ji = /* @__PURE__ */ D({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Bi = ji, Hi = /* @__PURE__ */ D({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Gi = Hi;
const Wn = F([
  String,
  Object,
  Function
]), Ui = {
  Close: Rn
}, Vi = {
  Close: Rn
}, et = {
  success: Bi,
  warning: Gi,
  error: Ri,
  info: Ai
}, qi = (e) => e, qe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ki = Se({
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
}), Zi = D({
  name: "ElBadge"
}), Ji = /* @__PURE__ */ D({
  ...Zi,
  props: Ki,
  setup(e, { expose: t }) {
    const n = e, o = Ct("badge"), s = m(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = m(() => {
      var i, p, f, v, h;
      return [
        {
          backgroundColor: n.color,
          marginRight: yt(-((p = (i = n.offset) == null ? void 0 : i[0]) != null ? p : 0)),
          marginTop: yt((v = (f = n.offset) == null ? void 0 : f[1]) != null ? v : 0)
        },
        (h = n.badgeStyle) != null ? h : {}
      ];
    });
    return t({
      content: s
    }), (i, p) => (k(), N("div", {
      class: P(l(o).b())
    }, [
      _e(i.$slots, "default"),
      T(wt, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: re(() => [
          le(d("sup", {
            class: P([
              l(o).e("content"),
              l(o).em("content", i.type),
              l(o).is("fixed", !!i.$slots.default),
              l(o).is("dot", i.isDot),
              l(o).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: Le(l(a))
          }, [
            _e(i.$slots, "content", { value: l(s) }, () => [
              yo(E(l(s)), 1)
            ])
          ], 6), [
            [Ke, !i.hidden && (l(s) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Yi = /* @__PURE__ */ it(Ji, [["__file", "badge.vue"]]);
const Xi = En(Yi), Qi = Se({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: F(Object)
  },
  size: Ii,
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
  ...Ni
}), U = {};
D({
  name: "ElConfigProvider",
  props: Qi,
  setup(e, { slots: t }) {
    we(() => e.message, (o) => {
      Object.assign(U, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = $n(e);
    return () => _e(t, "default", { config: n?.value });
  }
});
const Fn = ["success", "info", "warning", "error"], L = qi({
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
  appendTo: fe ? document.body : void 0
}), ea = Se({
  customClass: {
    type: String,
    default: L.customClass
  },
  center: {
    type: Boolean,
    default: L.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: L.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: L.duration
  },
  icon: {
    type: Wn,
    default: L.icon
  },
  id: {
    type: String,
    default: L.id
  },
  message: {
    type: F([
      String,
      Object,
      Function
    ]),
    default: L.message
  },
  onClose: {
    type: F(Function),
    default: L.onClose
  },
  showClose: {
    type: Boolean,
    default: L.showClose
  },
  type: {
    type: String,
    values: Fn,
    default: L.type
  },
  plain: {
    type: Boolean,
    default: L.plain
  },
  offset: {
    type: Number,
    default: L.offset
  },
  zIndex: {
    type: Number,
    default: L.zIndex
  },
  grouping: {
    type: Boolean,
    default: L.grouping
  },
  repeatNum: {
    type: Number,
    default: L.repeatNum
  }
}), ta = {
  destroy: () => !0
}, V = mo([]), na = (e) => {
  const t = V.findIndex((s) => s.id === e), n = V[t];
  let o;
  return t > 0 && (o = V[t - 1]), { current: n, prev: o };
}, oa = (e) => {
  const { prev: t } = na(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, sa = (e, t) => V.findIndex((o) => o.id === e) > 0 ? 16 : t, ia = D({
  name: "ElMessage"
}), aa = /* @__PURE__ */ D({
  ...ia,
  props: ea,
  emits: ta,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Vi, { ns: s, zIndex: a } = Ln("message"), { currentZIndex: i, nextZIndex: p } = a, f = I(), v = I(!1), h = I(0);
    let y;
    const O = m(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), C = m(() => {
      const x = n.type;
      return { [s.bm("icon", x)]: x && et[x] };
    }), H = m(() => n.icon || et[n.type] || ""), g = m(() => oa(n.id)), w = m(() => sa(n.id, n.offset) + g.value), M = m(() => h.value + w.value), te = m(() => ({
      top: `${w.value}px`,
      zIndex: i.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: y } = xn(() => {
        K();
      }, n.duration));
    }
    function G() {
      y?.();
    }
    function K() {
      v.value = !1;
    }
    function at({ code: x }) {
      x === qe.esc && K();
    }
    return nt(() => {
      b(), p(), v.value = !0;
    }), we(() => n.repeatNum, () => {
      G(), b();
    }), On(document, "keydown", at), hi(f, () => {
      h.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: M,
      close: K
    }), (x, Re) => (k(), X(wt, {
      name: l(s).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (ge) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(d("div", {
          id: x.id,
          ref_key: "messageRef",
          ref: f,
          class: P([
            l(s).b(),
            { [l(s).m(x.type)]: x.type },
            l(s).is("center", x.center),
            l(s).is("closable", x.showClose),
            l(s).is("plain", x.plain),
            x.customClass
          ]),
          style: Le(l(te)),
          role: "alert",
          onMouseenter: G,
          onMouseleave: b
        }, [
          x.repeatNum > 1 ? (k(), X(l(Xi), {
            key: 0,
            value: x.repeatNum,
            type: l(O),
            class: P(l(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Q("v-if", !0),
          l(H) ? (k(), X(l(Qe), {
            key: 1,
            class: P([l(s).e("icon"), l(C)])
          }, {
            default: re(() => [
              (k(), X(ln(l(H))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          _e(x.$slots, "default", {}, () => [
            x.dangerouslyUseHTMLString ? (k(), N(Ne, { key: 1 }, [
              Q(" Caution here, message could've been compromised, never use user's input as message "),
              d("p", {
                class: P(l(s).e("content")),
                innerHTML: x.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), N("p", {
              key: 0,
              class: P(l(s).e("content"))
            }, E(x.message), 3))
          ]),
          x.showClose ? (k(), X(l(Qe), {
            key: 2,
            class: P(l(s).e("closeBtn")),
            onClick: ze(K, ["stop"])
          }, {
            default: re(() => [
              T(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Q("v-if", !0)
        ], 46, ["id"]), [
          [Ke, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ra = /* @__PURE__ */ it(aa, [["__file", "message.vue"]]);
let la = 1;
const An = (e) => {
  const t = !e || ce(e) || $e(e) || Ee(e) ? { message: e } : e, n = {
    ...L,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ce(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    vt(o) || (o = document.body), n.appendTo = o;
  }
  return Vt(U.grouping) && !n.grouping && (n.grouping = U.grouping), pe(U.duration) && n.duration === 3e3 && (n.duration = U.duration), pe(U.offset) && n.offset === 16 && (n.offset = U.offset), Vt(U.showClose) && !n.showClose && (n.showClose = U.showClose), n;
}, ua = (e) => {
  const t = V.indexOf(e);
  if (t === -1)
    return;
  V.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ca = ({ appendTo: e, ...t }, n) => {
  const o = `message_${la++}`, s = t.onClose, a = document.createElement("div"), i = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), ua(h);
    },
    onDestroy: () => {
      Ze(null, a);
    }
  }, p = T(ra, i, Ee(i.message) || $e(i.message) ? {
    default: Ee(i.message) ? i.message : () => i.message
  } : null);
  p.appContext = n || Ce._context, Ze(p, a), e.appendChild(a.firstElementChild);
  const f = p.component, h = {
    id: o,
    vnode: p,
    vm: f,
    handler: {
      close: () => {
        f.exposed.visible.value = !1;
      }
    },
    props: p.component.props
  };
  return h;
}, Ce = (e = {}, t) => {
  if (!fe)
    return { close: () => {
    } };
  const n = An(e);
  if (n.grouping && V.length) {
    const s = V.find(({ vnode: a }) => {
      var i;
      return ((i = a.props) == null ? void 0 : i.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (pe(U.max) && V.length >= U.max)
    return { close: () => {
    } };
  const o = ca(n, t);
  return V.push(o), o.handler;
};
Fn.forEach((e) => {
  Ce[e] = (t = {}, n) => {
    const o = An(t);
    return Ce({ ...o, type: e }, n);
  };
});
function da(e) {
  for (const t of V)
    (!e || e === t.props.type) && t.handler.close();
}
Ce.closeAll = da;
Ce._context = null;
const pa = Dn(Ce, "$message"), jn = [
  "success",
  "info",
  "warning",
  "error"
], ha = Se({
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
    type: Wn
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
    values: [...jn, ""],
    default: ""
  },
  zIndex: Number
}), fa = {
  destroy: () => !0
}, ga = D({
  name: "ElNotification"
}), va = /* @__PURE__ */ D({
  ...ga,
  props: ha,
  emits: fa,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = Ln("notification"), { nextZIndex: a, currentZIndex: i } = s, { Close: p } = Ui, f = I(!1);
    let v;
    const h = m(() => {
      const b = n.type;
      return b && et[n.type] ? o.m(b) : "";
    }), y = m(() => n.type && et[n.type] || n.icon), O = m(() => n.position.endsWith("right") ? "right" : "left"), C = m(() => n.position.startsWith("top") ? "top" : "bottom"), H = m(() => {
      var b;
      return {
        [C.value]: `${n.offset}px`,
        zIndex: (b = n.zIndex) != null ? b : i.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: v } = xn(() => {
        f.value && M();
      }, n.duration));
    }
    function w() {
      v?.();
    }
    function M() {
      f.value = !1;
    }
    function te({ code: b }) {
      b === qe.delete || b === qe.backspace ? w() : b === qe.esc ? f.value && M() : g();
    }
    return nt(() => {
      g(), a(), f.value = !0;
    }), On(document, "keydown", te), t({
      visible: f,
      close: M
    }), (b, G) => (k(), X(wt, {
      name: l(o).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (K) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: re(() => [
        le(d("div", {
          id: b.id,
          class: P([l(o).b(), b.customClass, l(O)]),
          style: Le(l(H)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: g,
          onClick: b.onClick
        }, [
          l(y) ? (k(), X(l(Qe), {
            key: 0,
            class: P([l(o).e("icon"), l(h)])
          }, {
            default: re(() => [
              (k(), X(ln(l(y))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          d("div", {
            class: P(l(o).e("group"))
          }, [
            d("h2", {
              class: P(l(o).e("title")),
              textContent: E(b.title)
            }, null, 10, ["textContent"]),
            le(d("div", {
              class: P(l(o).e("content")),
              style: Le(b.title ? void 0 : { margin: 0 })
            }, [
              _e(b.$slots, "default", {}, () => [
                b.dangerouslyUseHTMLString ? (k(), N(Ne, { key: 1 }, [
                  Q(" Caution here, message could've been compromised, never use user's input as message "),
                  d("p", { innerHTML: b.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), N("p", { key: 0 }, E(b.message), 1))
              ])
            ], 6), [
              [Ke, b.message]
            ]),
            b.showClose ? (k(), X(l(Qe), {
              key: 0,
              class: P(l(o).e("closeBtn")),
              onClick: ze(M, ["stop"])
            }, {
              default: re(() => [
                T(l(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Q("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ke, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ya = /* @__PURE__ */ it(va, [["__file", "notification.vue"]]);
const tt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, mt = 16;
let ma = 1;
const xe = function(e = {}, t) {
  if (!fe)
    return { close: () => {
    } };
  (ce(e) || $e(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  tt[n].forEach(({ vm: h }) => {
    var y;
    o += (((y = h.el) == null ? void 0 : y.offsetHeight) || 0) + mt;
  }), o += mt;
  const s = `notification_${ma++}`, a = e.onClose, i = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      wa(s, n, a);
    }
  };
  let p = document.body;
  vt(e.appendTo) ? p = e.appendTo : ce(e.appendTo) && (p = document.querySelector(e.appendTo)), vt(p) || (p = document.body);
  const f = document.createElement("div"), v = T(ya, i, Ee(i.message) ? i.message : $e(i.message) ? () => i.message : null);
  return v.appContext = Cn(t) ? xe._context : t, v.props.onDestroy = () => {
    Ze(null, f);
  }, Ze(v, f), tt[n].push({ vm: v }), p.appendChild(f.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
jn.forEach((e) => {
  xe[e] = (t = {}, n) => ((ce(t) || $e(t)) && (t = {
    message: t
  }), xe({ ...t, type: e }, n));
});
function wa(e, t, n) {
  const o = tt[t], s = o.findIndex(({ vm: v }) => {
    var h;
    return ((h = v.component) == null ? void 0 : h.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: a } = o[s];
  if (!a)
    return;
  n?.(a);
  const i = a.el.offsetHeight, p = t.split("-")[0];
  o.splice(s, 1);
  const f = o.length;
  if (!(f < 1))
    for (let v = s; v < f; v++) {
      const { el: h, component: y } = o[v].vm, O = Number.parseInt(h.style[p], 10) - i - mt;
      y.props.offset = O;
    }
}
function _a() {
  for (const e of Object.values(tt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
xe.closeAll = _a;
xe._context = null;
const ba = Dn(xe, "$notify"), dt = {
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
      duration: s = 3e3,
      showClose: a = !1
    } = e;
    o === "center" ? pa({
      message: t,
      type: n,
      duration: s,
      showClose: a,
      grouping: !0
    }) : ba({
      message: t,
      type: n,
      position: o,
      duration: s,
      showClose: !1,
      // 角落通知统一不显示关闭按钮，更简洁
      title: "",
      offset: 50,
      // 距离顶部/底部 50px，避免遮挡窗口控制按钮
      customClass: "custom-notification"
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
}, pt = "[screen-recorder]", Ca = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, q = async (e, t) => {
  const n = performance.now(), o = Ca(t);
  console.info(`${pt} invoke:start ${e}`, o ?? "");
  try {
    const s = await u(e, t);
    return console.info(`${pt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: s
    }), s;
  } catch (s) {
    throw console.error(`${pt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, xa = () => q("screen_recorder_get_ffmpeg_status"), ye = (e) => q("screen_recorder_set_capture_excluded", { excluded: e }), Me = (e) => q("screen_recorder_set_passthrough_region", { region: e }), ka = () => q("screen_recorder_pick_target_window"), Sa = () => q("screen_recorder_close_window"), Oa = (e, t) => q("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ia = () => q("screen_recorder_pause_recording"), Ma = (e, t) => q("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ta = () => q("screen_recorder_stop_recording"), Na = () => q("screen_recorder_cancel_recording"), za = (e) => q("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), sn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), $ = "[screen-recorder]";
function Pa() {
  const e = I("selecting"), t = I(sn()), n = I(null), o = I(null), s = I(""), a = I(null), i = I(0), p = I(0), f = I(null), v = () => {
    p.value = e.value === "recording" && a.value !== null ? i.value + Date.now() - a.value : i.value;
  }, h = () => {
    f.value !== null && (window.clearInterval(f.value), f.value = null);
  }, y = () => {
    h(), v(), f.value = window.setInterval(() => {
      v();
    }, 250);
  }, O = async () => (console.info(`${$} refresh ffmpeg status`), n.value = await xa(), console.info(`${$} ffmpeg status`, n.value), n.value), C = async (G) => {
    s.value = "", o.value = null, console.info(`${$} begin requested`, { region: G, settings: t.value });
    const K = n.value ?? await O();
    if (!K.available)
      throw new Error(K.message || "FFmpeg unavailable");
    await Oa(G, t.value), e.value = "recording", i.value = 0, p.value = 0, a.value = Date.now(), y(), console.info(`${$} recording started`, { status: e.value });
  }, H = async () => {
    e.value === "recording" && (console.info(`${$} pause requested`, { elapsedMs: p.value }), v(), i.value = p.value, a.value = null, h(), await Ia(), e.value = "paused", console.info(`${$} recording paused`, { accumulatedMs: i.value }));
  }, g = async (G) => {
    e.value === "paused" && (console.info(`${$} resume requested`, { region: G, settings: t.value }), await Ma(G, t.value), e.value = "recording", a.value = Date.now(), y(), console.info(`${$} recording resumed`));
  }, w = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${$} stop requested`, { status: e.value, elapsedMs: p.value }), v(), i.value = p.value, a.value = null, h(), await Ta(), e.value = "exporting", console.info(`${$} recording stopped`, { accumulatedMs: i.value }));
  }, M = async () => (console.info(`${$} export requested`, { settings: t.value }), e.value = "exporting", o.value = await za(t.value), e.value = "completed", console.info(`${$} export completed`, o.value), o.value), te = async () => {
    console.info(`${$} cancel requested`, { status: e.value, elapsedMs: p.value }), h(), await Na(), e.value = "selecting", a.value = null, i.value = 0, p.value = 0, o.value = null, console.info(`${$} canceled`);
  }, b = () => {
    console.info(`${$} reset session`), e.value = "selecting", a.value = null, i.value = 0, p.value = 0, o.value = null, s.value = "", t.value = sn();
  };
  return un(() => {
    h();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: s,
    elapsedMs: p,
    refreshFfmpegStatus: O,
    begin: C,
    pause: H,
    resume: g,
    stop: w,
    exportFile: M,
    cancel: te,
    reset: b
  };
}
const La = { class: "screen-recorder" }, $a = ["onMousedown"], Ea = { class: "window-title" }, Da = { class: "capture-viewport" }, Ra = { class: "capture-frame" }, Wa = { class: "control-strip" }, Fa = { class: "control-group control-group--tools" }, Aa = { class: "tool-pill" }, ja = ["title", "disabled"], Ba = { class: "select-field" }, Ha = ["disabled"], Ga = ["disabled"], Ua = ["disabled"], Va = { value: "high" }, qa = { value: "standard" }, Ka = { value: "small" }, Za = { class: "dimension-group optional-size" }, Ja = { class: "dimension" }, Ya = ["value"], Xa = { class: "dimension" }, Qa = ["value"], er = { class: "control-group control-group--actions" }, tr = { class: "time" }, nr = { class: "button-label" }, or = { class: "button-label" }, sr = {
  key: 1,
  class: "save-status"
}, ir = ["title"], ar = ["disabled"], rr = { class: "record-label" }, lr = {
  key: 0,
  class: "warning"
}, Y = "[screen-recorder]", Ge = 80, ur = 468, cr = 300, an = 420, rn = 260, dr = 38, pr = 60, ht = 8, ft = 1, hr = /* @__PURE__ */ D({
  __name: "index",
  setup(e) {
    const t = pn(), n = I(null), o = I({ width: 0, height: 0 }), s = I(0), a = I(!1);
    let i = null, p = null, f = null;
    const v = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: h,
      settings: y,
      ffmpegStatus: O,
      result: C,
      elapsedMs: H,
      refreshFfmpegStatus: g,
      begin: w,
      pause: M,
      resume: te,
      stop: b,
      exportFile: G,
      cancel: K,
      reset: at
    } = Pa(), x = m(() => h.value === "recording" || h.value === "paused" || h.value === "exporting"), Re = m(() => y.value.audio && y.value.format === "mp4"), ge = m(() => Re.value && h.value === "recording"), Bn = m(() => {
      const c = ge.value && !a.value ? s.value : 0, r = (_, j) => Math.max(0.18, Math.min(1, _ + c * j)).toFixed(3);
      return {
        "--bar-1": r(0.28, 0.64),
        "--bar-2": r(0.42, 0.78),
        "--bar-3": r(0.34, 0.94),
        "--bar-4": r(0.22, 0.72)
      };
    }), Hn = m(() => {
      if (y.value.format === "gif")
        return "GIF 不支持音频";
      if (a.value && y.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (C.value?.audioDevice)
        return `已录制音频：${C.value.audioDevice}`;
      if (C.value && !C.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (O.value?.available && !O.value.systemAudioAvailable) {
        const c = O.value.audioDevices?.join("、") || "无";
        return y.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${c}` : "录制音频已关闭";
      }
      return y.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Gn = m(() => {
      const c = Math.floor(H.value / 1e3), r = Math.floor(c / 60).toString().padStart(2, "0"), _ = (c % 60).toString().padStart(2, "0");
      return `${r}:${_}`;
    }), Oe = async (c) => {
      try {
        await c();
      } catch (r) {
        console.error(`${Y} action failed`, r), dt.msg(r?.message || String(r), "error");
      }
    }, Tt = (c) => Math.max(2, Math.floor(Math.round(c) / 2) * 2), We = async () => {
      const c = n.value;
      if (!c)
        throw new Error("录制视口尚未准备好");
      const r = c.getBoundingClientRect(), _ = await t.scaleFactor(), j = await t.innerPosition(), ne = Tt(r.width * _), ee = Tt(r.height * _);
      if (ne < Ge || ee < Ge)
        throw new Error("录制区域太小，请放大录制窗口");
      const je = {
        x: r.left,
        y: r.top,
        width: ne / _,
        height: ee / _,
        screenX: Math.round(j.x + r.left * _),
        screenY: Math.round(j.y + r.top * _),
        physicalWidth: ne,
        physicalHeight: ee,
        scale: _
      };
      return console.info(`${Y} capture region`, je), je;
    }, A = async () => {
      try {
        const c = await We();
        o.value = {
          width: c.physicalWidth,
          height: c.physicalHeight
        }, await Me({
          x: Math.round(c.x * c.scale),
          y: Math.round(c.y * c.scale),
          width: c.physicalWidth,
          height: c.physicalHeight
        }).catch(() => {
        });
      } catch {
        o.value = { width: 0, height: 0 }, await Me(null).catch(() => {
        });
      }
    }, Fe = async () => {
      await Me(null).catch(() => {
      });
    }, Nt = () => {
      window.setTimeout(() => {
        A();
      }, 120);
    }, Un = () => new Promise((c) => {
      requestAnimationFrame(() => requestAnimationFrame(() => c()));
    }), Vn = async () => {
      const [c, r] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: c.x,
        y: c.y,
        width: r.width,
        height: r.height
      };
    }, qn = (c, r) => {
      const _ = Math.min(c.width, r.width), j = Math.min(c.height, r.height), ne = r.x + r.width - _, ee = r.y + r.height - j;
      return {
        x: Math.min(Math.max(c.x, r.x), ne),
        y: Math.min(Math.max(c.y, r.y), ee),
        width: _,
        height: j
      };
    }, zt = async (c) => {
      await t.setSize(new ue(Math.round(c.width), Math.round(c.height))), await t.setPosition(new Z(Math.round(c.x), Math.round(c.y))), await Un();
    }, Pt = async () => {
      f?.(), f = null, s.value = 0;
    }, Ae = async () => {
      if (!(!Re.value || f))
        try {
          console.info(`${Y} backend audio meter listening`), f = await _t("screen_recorder_audio_level", (c) => {
            if (!ge.value) {
              s.value = 0;
              return;
            }
            const r = Math.max(0, Math.min(1, Number(c.payload?.level ?? 0)));
            s.value = s.value * 0.38 + r * 0.62;
          }), a.value = !1;
        } catch (c) {
          console.error(`${Y} audio meter failed`, c), a.value = !0;
        }
    }, Kn = async (c) => {
      c.button !== 0 || x.value || (await Fe(), await t.startDragging().catch((r) => {
        dt.msg(r?.message || String(r), "error");
      }), Nt());
    }, Zn = async (c) => {
      x.value || (await Fe(), await t.startResizeDragging(c).catch((r) => {
        dt.msg(r?.message || String(r), "error");
      }), Nt());
    }, Jn = () => Oe(async () => {
      console.info(`${Y} handle start`), await Ae(), await ye(!0).catch(() => {
      }), await A(), await w(await We());
    }), Yn = () => Oe(async () => {
      console.info(`${Y} handle pause`), await M();
    }), Xn = () => Oe(async () => {
      console.info(`${Y} handle resume`), await te(await We());
    }), Qn = () => Oe(async () => {
      console.info(`${Y} handle stop/export`), await b(), s.value = 0, await G(), await A(), await ye(!1).catch(() => {
      });
    }), eo = () => {
      Fe(), at(), h.value = "ready", C.value = null, ye(!0).catch(() => {
      }), t.setSize(new Je(ur, cr)), Te(A), Ae();
    }, to = async (c) => {
      const r = await To(c.screenX, c.screenY), _ = r?.scaleFactor || await t.scaleFactor(), j = Math.round((ht + ft) * _), ne = j, ee = Math.round((dr + ht + ft) * _), je = Math.round((pr + ht + ft) * _), Et = Math.round(an * _), Dt = Math.round(rn * _), z = {
        x: c.screenX - j,
        y: c.screenY - ee,
        width: Math.max(Et, c.physicalWidth + j + ne),
        height: Math.max(Dt, c.physicalHeight + ee + je)
      }, S = r ? {
        x: r.position.x,
        y: r.position.y,
        width: r.size.width,
        height: r.size.height
      } : null, ao = (() => {
        if (!S) return z;
        const R = S.x + S.width, J = S.y + S.height;
        if (z.x >= S.x && z.y >= S.y && z.x + z.width <= R && z.y + z.height <= J) return z;
        const se = Math.min(z.width, S.width), Be = Math.min(z.height, S.height);
        return {
          x: Math.min(Math.max(z.x, S.x), R - se),
          y: Math.min(Math.max(z.y, S.y), J - Be),
          width: se,
          height: Be
        };
      })(), ro = S ? z.x >= S.x && z.y >= S.y && z.x + z.width <= S.x + S.width && z.y + z.height <= S.y + S.height : !0;
      await zt(ao), await Te();
      const lo = (() => {
        if (!S) return !1;
        const R = Math.max(4, Math.round(4 * _)), J = S.x + S.width, oe = S.y + S.height, se = c.screenX + c.physicalWidth, Be = c.screenY + c.physicalHeight;
        return !ro || c.screenX <= S.x + R || c.screenY <= S.y + R || se >= J - R || Be >= oe - R;
      })();
      try {
        const [R, J] = await Promise.all([
          We(),
          Vn()
        ]), oe = {
          x: c.screenX - R.screenX,
          y: c.screenY - R.screenY,
          width: c.physicalWidth - R.physicalWidth,
          height: c.physicalHeight - R.physicalHeight
        }, se = {
          x: J.x + oe.x,
          y: J.y + oe.y,
          width: Math.max(Et, J.width + oe.width),
          height: Math.max(Dt, J.height + oe.height)
        };
        await zt(
          S && lo ? qn(se, S) : se
        );
      } catch (R) {
        console.warn(`${Y} snap correction skipped`, R);
      }
      await A();
    }, no = () => Oe(async () => {
      await Fe();
      const c = await ka();
      await to(c);
    }), oo = async () => {
      await t.minimize();
    }, Lt = async () => {
      try {
        await K(), await Me(null).catch(() => {
        }), await ye(!1).catch(() => {
        });
      } catch {
      }
      await Sa();
    }, so = async () => {
      C.value && (await A(), await u("open_file_with_default_app", { filePath: C.value.path }));
    }, io = async () => {
      C.value && (await A(), await u("show_file_in_folder", { filePath: C.value.path }));
    }, $t = (c) => {
      c.key === "Escape" && (c.preventDefault(), Lt());
    };
    return nt(async () => {
      h.value = "ready", await t.setMinSize(new Je(an, rn)).catch(() => {
      }), await ye(!0).catch(() => {
      }), await g().catch(() => {
      }), await Te(), await A(), await Ae(), await Te(), await t.emit("screen_recorder_ready"), n.value && (i = new ResizeObserver(() => {
        A();
      }), i.observe(n.value)), p = await t.onMoved(() => {
        A();
      }).catch(() => null), window.addEventListener("resize", A), window.addEventListener("keydown", $t);
    }), we(Re, (c) => {
      c ? Ae() : Pt();
    }), we(h, (c) => {
      c !== "recording" && (s.value = 0);
    }), un(() => {
      i?.disconnect(), p?.(), window.removeEventListener("resize", A), window.removeEventListener("keydown", $t), Me(null).catch(() => {
      }), ye(!1).catch(() => {
      }), Pt();
    }), (c, r) => (k(), N("div", La, [
      d(
        "div",
        {
          class: P(["recorder-shell", { recording: l(h) === "recording", paused: l(h) === "paused" }])
        },
        [
          (k(), N(
            Ne,
            null,
            wo(v, (_) => d("span", {
              key: _.className,
              class: P(["resize-zone", _.className]),
              onMousedown: ze((j) => Zn(_.direction), ["prevent"])
            }, null, 42, $a)),
            64
            /* STABLE_FRAGMENT */
          )),
          d(
            "header",
            {
              class: "title-bar",
              onMousedown: Kn
            },
            [
              d(
                "span",
                Ea,
                E(c.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              d(
                "div",
                {
                  class: "window-actions",
                  onMousedown: r[0] || (r[0] = ze(() => {
                  }, ["stop"]))
                },
                [
                  d("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: oo
                  }, [
                    T(l(Eo), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  d("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: Lt
                  }, [
                    T(l($o), {
                      class: "title-icon",
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ])
                ],
                32
                /* NEED_HYDRATION */
              )
            ],
            32
            /* NEED_HYDRATION */
          ),
          d("main", Da, [
            r[9] || (r[9] = d(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            r[10] || (r[10] = d(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            r[11] || (r[11] = d(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            r[12] || (r[12] = d(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            d("div", Ra, [
              d(
                "div",
                {
                  ref_key: "captureHoleRef",
                  ref: n,
                  class: "capture-hole"
                },
                null,
                512
                /* NEED_PATCH */
              ),
              r[5] || (r[5] = d(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              r[6] || (r[6] = d(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              r[7] || (r[7] = d(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              r[8] || (r[8] = d(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          d("footer", Wa, [
            d("div", Fa, [
              d("div", Aa, [
                l(h) === "ready" || l(h) === "completed" ? (k(), N(
                  "button",
                  {
                    key: 0,
                    class: "icon-control snap-control",
                    title: "拖到目标窗口并松开以对齐",
                    "aria-label": "对齐目标窗口",
                    onMousedown: ze(no, ["prevent"])
                  },
                  [
                    T(l(Do), {
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ],
                  32
                  /* NEED_HYDRATION */
                )) : Q("v-if", !0),
                d("button", {
                  class: P(["audio-meter", { active: ge.value && s.value > 0.03, metering: ge.value && !a.value, muted: !ge.value || a.value }]),
                  title: Hn.value,
                  "aria-label": "系统声音录制状态",
                  disabled: l(h) === "exporting" || l(y).format === "gif"
                }, [
                  d(
                    "span",
                    {
                      class: "audio-bars",
                      style: Le(Bn.value)
                    },
                    r[13] || (r[13] = [
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
                        "i",
                        null,
                        null,
                        -1
                        /* HOISTED */
                      ),
                      d(
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
                ], 10, ja)
              ]),
              d("label", Ba, [
                le(d("select", {
                  "onUpdate:modelValue": r[1] || (r[1] = (_) => l(y).fps = _),
                  disabled: x.value
                }, r[14] || (r[14] = [
                  d(
                    "option",
                    { value: 15 },
                    "15",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 24 },
                    "24",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 30 },
                    "30",
                    -1
                    /* HOISTED */
                  ),
                  d(
                    "option",
                    { value: 60 },
                    "60",
                    -1
                    /* HOISTED */
                  )
                ]), 8, Ha), [
                  [rt, l(y).fps]
                ]),
                r[15] || (r[15] = d(
                  "span",
                  { class: "unit" },
                  "fps",
                  -1
                  /* HOISTED */
                ))
              ]),
              le(d("select", {
                "onUpdate:modelValue": r[2] || (r[2] = (_) => l(y).format = _),
                class: "format-select optional-format",
                disabled: x.value
              }, r[16] || (r[16] = [
                d(
                  "option",
                  { value: "mp4" },
                  "MP4",
                  -1
                  /* HOISTED */
                ),
                d(
                  "option",
                  { value: "gif" },
                  "GIF",
                  -1
                  /* HOISTED */
                )
              ]), 8, Ga), [
                [rt, l(y).format]
              ]),
              le(d("select", {
                "onUpdate:modelValue": r[3] || (r[3] = (_) => l(y).quality = _),
                class: "quality-select optional-quality",
                disabled: x.value
              }, [
                d(
                  "option",
                  Va,
                  E(c.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                d(
                  "option",
                  qa,
                  E(c.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                d(
                  "option",
                  Ka,
                  E(c.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, Ua), [
                [rt, l(y).quality]
              ]),
              d("div", Za, [
                d("label", Ja, [
                  d("input", {
                    value: o.value.width,
                    readonly: ""
                  }, null, 8, Ya)
                ]),
                r[17] || (r[17] = d(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                d("label", Xa, [
                  d("input", {
                    value: o.value.height,
                    readonly: ""
                  }, null, 8, Qa)
                ]),
                r[18] || (r[18] = d(
                  "span",
                  { class: "unit" },
                  "px",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            d("div", er, [
              l(h) === "recording" || l(h) === "paused" ? (k(), N(
                Ne,
                { key: 0 },
                [
                  d(
                    "span",
                    tr,
                    E(Gn.value),
                    1
                    /* TEXT */
                  ),
                  d("button", {
                    class: "control-button",
                    onClick: r[4] || (r[4] = (_) => l(h) === "paused" ? Xn() : Yn())
                  }, [
                    d(
                      "span",
                      nr,
                      E(l(h) === "paused" ? c.$t("screenRecorder.resume") : c.$t("screenRecorder.pause")),
                      1
                      /* TEXT */
                    )
                  ]),
                  d("button", {
                    class: "control-button danger",
                    onClick: Qn
                  }, [
                    d(
                      "span",
                      or,
                      E(c.$t("screenRecorder.stop")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : l(h) === "exporting" ? (k(), N(
                "span",
                sr,
                E(c.$t("screenRecorder.exporting") || "正在导出..."),
                1
                /* TEXT */
              )) : l(h) === "completed" && l(C) ? (k(), N(
                Ne,
                { key: 2 },
                [
                  d("span", {
                    class: "save-status optional-save-status",
                    title: l(C).path
                  }, E(l(C).hasAudio ? "已保存·有声" : "已保存·无声"), 9, ir),
                  d("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: so
                  }, r[19] || (r[19] = [
                    d(
                      "span",
                      { class: "button-label" },
                      "打开",
                      -1
                      /* HOISTED */
                    )
                  ])),
                  d("button", {
                    class: "control-button",
                    title: "打开所在文件夹",
                    onClick: io
                  }, r[20] || (r[20] = [
                    d(
                      "span",
                      { class: "button-label" },
                      "文件夹",
                      -1
                      /* HOISTED */
                    )
                  ])),
                  d("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: eo
                  }, r[21] || (r[21] = [
                    d(
                      "span",
                      { class: "button-label" },
                      "重录",
                      -1
                      /* HOISTED */
                    )
                  ]))
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (k(), N("button", {
                key: 3,
                class: "record-button",
                disabled: l(O)?.available === !1 || o.value.width < Ge || o.value.height < Ge,
                onClick: Jn
              }, [
                r[22] || (r[22] = d(
                  "span",
                  { class: "record-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                d(
                  "span",
                  rr,
                  E(c.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, ar))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      l(O) && !l(O).available ? (k(), N(
        "p",
        lr,
        E(l(O).message || c.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : Q("v-if", !0)
    ]));
  }
}), fr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, gr = /* @__PURE__ */ fr(hr, [["__scopeId", "data-v-60600e5a"]]), vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gr
}, Symbol.toStringTag, { value: "Module" }));
export {
  mr as activate
};
