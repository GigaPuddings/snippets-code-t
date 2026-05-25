import { inject as J, createVNode as A, getCurrentInstance as ue, ref as x, computed as _, unref as l, readonly as Jn, getCurrentScope as Yn, onScopeDispose as Qn, onMounted as Ge, nextTick as Le, watch as Ne, isRef as Xn, warn as eo, provide as to, defineComponent as D, createElementBlock as I, openBlock as C, mergeProps as no, renderSlot as ce, createElementVNode as c, normalizeClass as z, Transition as ut, withCtx as Y, withDirectives as Q, normalizeStyle as ke, createTextVNode as Zt, toDisplayString as P, vShow as $e, shallowReactive as oo, createBlock as G, createCommentVNode as B, resolveDynamicComponent as Jt, Fragment as be, withModifiers as Ce, isVNode as xe, render as We, onUnmounted as Yt, renderList as so, vModelSelect as et } from "vue";
const tr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Xi)
  });
};
function ao(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function io(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ae;
const F = "__TAURI_TO_IPC_KEY__";
function ro(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function r(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function lo(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class uo {
  get rid() {
    return ao(this, Ae, "f");
  }
  constructor(t) {
    Ae.set(this, void 0), io(this, Ae, t);
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
Ae = /* @__PURE__ */ new WeakMap();
class Se {
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
    return new le(this.width * t, this.height * t);
  }
  [F]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[F]();
  }
}
class le {
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
    return new Se(this.width / t, this.height / t);
  }
  [F]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[F]();
  }
}
class ie {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Se ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof le ? this.size : this.size.toPhysical(t);
  }
  [F]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[F]();
  }
}
class Qt {
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
    return new j(this.x * t, this.y * t);
  }
  [F]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[F]();
  }
}
class j {
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
    return new Qt(this.x / t, this.y / t);
  }
  [F]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[F]();
  }
}
class Ee {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Qt ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof j ? this.position : this.position.toPhysical(t);
  }
  [F]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[F]();
  }
}
var M;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(M || (M = {}));
async function Xt(e, t) {
  await r("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function en(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return r("plugin:event|listen", {
    event: e,
    target: s,
    handler: ro(t)
  }).then((i) => async () => Xt(e, i));
}
async function co(e, t, n) {
  return en(e, (o) => {
    Xt(e, o.id), t(o);
  }, n);
}
async function po(e, t) {
  await r("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function ho(e, t, n) {
  await r("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Oe extends uo {
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
      rgba: je(t),
      width: n,
      height: o
    }).then((s) => new Oe(s));
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
      bytes: je(t)
    }).then((n) => new Oe(n));
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
    return r("plugin:image|from_path", { path: t }).then((n) => new Oe(n));
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
function je(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Oe ? e.rid : e;
}
var at;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(at || (at = {}));
class fo {
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
var Ot;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ot || (Ot = {}));
function tn() {
  return new nn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function tt() {
  return r("plugin:window|get_all_windows").then((e) => e.map((t) => new nn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const nt = ["tauri://created", "tauri://error"];
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
    return (n = (await tt()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
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
    return tt();
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
    for (const t of await tt())
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
    } : en(t, n, {
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
    } : co(t, n, {
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
    if (nt.includes(t)) {
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
    if (nt.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return ho(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return nt.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new j(t));
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
    }).then((t) => new j(t));
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
    }).then((t) => new le(t));
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
    }).then((t) => new le(t));
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
    return t && (t === at.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), r("plugin:window|request_user_attention", {
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
      value: t instanceof ie ? t : new ie(t)
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
      value: t instanceof ie ? t : t ? new ie(t) : null
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
      value: t instanceof ie ? t : t ? new ie(t) : null
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
      value: t instanceof Ee ? t : new Ee(t)
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
      value: je(t)
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
      value: t instanceof Ee ? t : new Ee(t)
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
      value: t ? je(t) : void 0
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
    return this.listen(M.WINDOW_RESIZED, (n) => {
      n.payload = new le(n.payload), t(n);
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
    return this.listen(M.WINDOW_MOVED, (n) => {
      n.payload = new j(n.payload), t(n);
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
    return this.listen(M.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new fo(n);
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
    const n = await this.listen(M.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new j(a.payload.position)
        }
      });
    }), o = await this.listen(M.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new j(a.payload.position)
        }
      });
    }), s = await this.listen(M.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new j(a.payload.position)
        }
      });
    }), i = await this.listen(M.DRAG_LEAVE, (a) => {
      t({ ...a, payload: { type: "leave" } });
    });
    return () => {
      n(), s(), o(), i();
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
    const n = await this.listen(M.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(M.WINDOW_BLUR, (s) => {
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
    return this.listen(M.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(M.WINDOW_THEME_CHANGED, t);
  }
}
var kt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(kt || (kt = {}));
var xt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(xt || (xt = {}));
var Tt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Tt || (Tt = {}));
function vo(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new j(e.position),
    size: new le(e.size)
  };
}
async function go(e, t) {
  return r("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(vo);
}
var mo = {
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
function yo() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function wo(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], s = [], i = t.theme || n.theme;
  switch (i) {
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
var _o = Symbol("icon-context");
function on(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(i) {
      var a = yo(), u = J(_o, mo);
      return function() {
        var g = i.size, v = i.strokeWidth, f = i.strokeLinecap, y = i.strokeLinejoin, k = i.theme, N = i.fill, O = i.spin, p = wo(a, {
          size: g,
          strokeWidth: v,
          strokeLinecap: f,
          strokeLinejoin: y,
          theme: k,
          fill: N
        }, u), m = [u.prefix + "-icon"];
        return m.push(u.prefix + "-icon-" + e), O && m.push(u.prefix + "-icon-spin"), A("span", {
          class: m.join(" ")
        }, [n(p)]);
      };
    }
  };
  return o;
}
const bo = on("close-small", !1, function(e) {
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
}), Co = on("minus", !1, function(e) {
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
}), sn = Symbol(), Fe = "el", So = "is-", Z = (e, t, n, o, s) => {
  let i = `${e}-${t}`;
  return n && (i += `-${n}`), o && (i += `__${o}`), s && (i += `--${s}`), i;
}, an = Symbol("namespaceContextKey"), Oo = (e) => {
  const t = e || (ue() ? J(an, x(Fe)) : x(Fe));
  return _(() => l(t) || Fe);
}, ct = (e, t) => {
  const n = Oo(t);
  return {
    namespace: n,
    b: (p = "") => Z(n.value, e, p, "", ""),
    e: (p) => p ? Z(n.value, e, "", p, "") : "",
    m: (p) => p ? Z(n.value, e, "", "", p) : "",
    be: (p, m) => p && m ? Z(n.value, e, p, m, "") : "",
    em: (p, m) => p && m ? Z(n.value, e, "", p, m) : "",
    bm: (p, m) => p && m ? Z(n.value, e, p, "", m) : "",
    bem: (p, m, w) => p && m && w ? Z(n.value, e, p, m, w) : "",
    is: (p, ...m) => {
      const w = m.length >= 1 ? m[0] : !0;
      return p && w ? `${So}${p}` : "";
    },
    cssVar: (p) => {
      const m = {};
      for (const w in p)
        p[w] && (m[`--${n.value}-${w}`] = p[w]);
      return m;
    },
    cssVarName: (p) => `--${n.value}-${p}`,
    cssVarBlock: (p) => {
      const m = {};
      for (const w in p)
        p[w] && (m[`--${n.value}-${e}-${w}`] = p[w]);
      return m;
    },
    cssVarBlockName: (p) => `--${n.value}-${e}-${p}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ko = Object.prototype.hasOwnProperty, It = (e, t) => ko.call(e, t), Te = (e) => typeof e == "function", X = (e) => typeof e == "string", rn = (e) => e !== null && typeof e == "object";
var xo = typeof global == "object" && global && global.Object === Object && global, To = typeof self == "object" && self && self.Object === Object && self, dt = xo || To || Function("return this")(), de = dt.Symbol, ln = Object.prototype, Io = ln.hasOwnProperty, No = ln.toString, we = de ? de.toStringTag : void 0;
function zo(e) {
  var t = Io.call(e, we), n = e[we];
  try {
    e[we] = void 0;
    var o = !0;
  } catch {
  }
  var s = No.call(e);
  return o && (t ? e[we] = n : delete e[we]), s;
}
var Eo = Object.prototype, Po = Eo.toString;
function Do(e) {
  return Po.call(e);
}
var Mo = "[object Null]", Lo = "[object Undefined]", Nt = de ? de.toStringTag : void 0;
function un(e) {
  return e == null ? e === void 0 ? Lo : Mo : Nt && Nt in Object(e) ? zo(e) : Do(e);
}
function Ao(e) {
  return e != null && typeof e == "object";
}
var Fo = "[object Symbol]";
function pt(e) {
  return typeof e == "symbol" || Ao(e) && un(e) == Fo;
}
function Ro(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var ht = Array.isArray, zt = de ? de.prototype : void 0, Et = zt ? zt.toString : void 0;
function cn(e) {
  if (typeof e == "string")
    return e;
  if (ht(e))
    return Ro(e, cn) + "";
  if (pt(e))
    return Et ? Et.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function dn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $o = "[object AsyncFunction]", Wo = "[object Function]", jo = "[object GeneratorFunction]", Bo = "[object Proxy]";
function Ho(e) {
  if (!dn(e))
    return !1;
  var t = un(e);
  return t == Wo || t == jo || t == $o || t == Bo;
}
var ot = dt["__core-js_shared__"], Pt = function() {
  var e = /[^.]+$/.exec(ot && ot.keys && ot.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Uo(e) {
  return !!Pt && Pt in e;
}
var Vo = Function.prototype, Go = Vo.toString;
function qo(e) {
  if (e != null) {
    try {
      return Go.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ko = /[\\^$.*+?()[\]{}|]/g, Zo = /^\[object .+?Constructor\]$/, Jo = Function.prototype, Yo = Object.prototype, Qo = Jo.toString, Xo = Yo.hasOwnProperty, es = RegExp(
  "^" + Qo.call(Xo).replace(Ko, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ts(e) {
  if (!dn(e) || Uo(e))
    return !1;
  var t = Ho(e) ? es : Zo;
  return t.test(qo(e));
}
function ns(e, t) {
  return e?.[t];
}
function pn(e, t) {
  var n = ns(e, t);
  return ts(n) ? n : void 0;
}
function os(e, t) {
  return e === t || e !== e && t !== t;
}
var ss = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, as = /^\w*$/;
function is(e, t) {
  if (ht(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || pt(e) ? !0 : as.test(e) || !ss.test(e) || t != null && e in Object(t);
}
var Ie = pn(Object, "create");
function rs() {
  this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
}
function ls(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var us = "__lodash_hash_undefined__", cs = Object.prototype, ds = cs.hasOwnProperty;
function ps(e) {
  var t = this.__data__;
  if (Ie) {
    var n = t[e];
    return n === us ? void 0 : n;
  }
  return ds.call(t, e) ? t[e] : void 0;
}
var hs = Object.prototype, fs = hs.hasOwnProperty;
function vs(e) {
  var t = this.__data__;
  return Ie ? t[e] !== void 0 : fs.call(t, e);
}
var gs = "__lodash_hash_undefined__";
function ms(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ie && t === void 0 ? gs : t, this;
}
function ee(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ee.prototype.clear = rs;
ee.prototype.delete = ls;
ee.prototype.get = ps;
ee.prototype.has = vs;
ee.prototype.set = ms;
function ys() {
  this.__data__ = [], this.size = 0;
}
function qe(e, t) {
  for (var n = e.length; n--; )
    if (os(e[n][0], t))
      return n;
  return -1;
}
var ws = Array.prototype, _s = ws.splice;
function bs(e) {
  var t = this.__data__, n = qe(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : _s.call(t, n, 1), --this.size, !0;
}
function Cs(e) {
  var t = this.__data__, n = qe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ss(e) {
  return qe(this.__data__, e) > -1;
}
function Os(e, t) {
  var n = this.__data__, o = qe(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function fe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
fe.prototype.clear = ys;
fe.prototype.delete = bs;
fe.prototype.get = Cs;
fe.prototype.has = Ss;
fe.prototype.set = Os;
var ks = pn(dt, "Map");
function xs() {
  this.size = 0, this.__data__ = {
    hash: new ee(),
    map: new (ks || fe)(),
    string: new ee()
  };
}
function Ts(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ke(e, t) {
  var n = e.__data__;
  return Ts(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Is(e) {
  var t = Ke(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ns(e) {
  return Ke(this, e).get(e);
}
function zs(e) {
  return Ke(this, e).has(e);
}
function Es(e, t) {
  var n = Ke(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ne.prototype.clear = xs;
ne.prototype.delete = Is;
ne.prototype.get = Ns;
ne.prototype.has = zs;
ne.prototype.set = Es;
var Ps = "Expected a function";
function ft(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ps);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], i = n.cache;
    if (i.has(s))
      return i.get(s);
    var a = e.apply(this, o);
    return n.cache = i.set(s, a) || i, a;
  };
  return n.cache = new (ft.Cache || ne)(), n;
}
ft.Cache = ne;
var Ds = 500;
function Ms(e) {
  var t = ft(e, function(o) {
    return n.size === Ds && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Ls = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, As = /\\(\\)?/g, Fs = Ms(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ls, function(n, o, s, i) {
    t.push(s ? i.replace(As, "$1") : o || n);
  }), t;
});
function Rs(e) {
  return e == null ? "" : cn(e);
}
function $s(e, t) {
  return ht(e) ? e : is(e, t) ? [e] : Fs(Rs(e));
}
function Ws(e) {
  if (typeof e == "string" || pt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function js(e, t) {
  t = $s(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Ws(t[n++])];
  return n && n == o ? e : void 0;
}
function Bs(e, t, n) {
  var o = e == null ? void 0 : js(e, t);
  return o === void 0 ? n : o;
}
function Hs(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const hn = (e) => e === void 0, Dt = (e) => typeof e == "boolean", te = (e) => typeof e == "number", it = (e) => typeof Element > "u" ? !1 : e instanceof Element, Us = (e) => X(e) ? !Number.isNaN(Number(e)) : !1;
var Mt;
const oe = typeof window < "u", Vs = (e) => typeof e == "string", Gs = () => {
};
oe && ((Mt = window?.navigator) != null && Mt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function vt(e) {
  return typeof e == "function" ? e() : l(e);
}
function qs(e) {
  return e;
}
function gt(e) {
  return Yn() ? (Qn(e), !0) : !1;
}
function Ks(e, t = !0) {
  ue() ? Ge(e) : t ? e() : Le(e);
}
function fn(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, s = x(!1);
  let i = null;
  function a() {
    i && (clearTimeout(i), i = null);
  }
  function u() {
    s.value = !1, a();
  }
  function g(...v) {
    a(), s.value = !0, i = setTimeout(() => {
      s.value = !1, i = null, e(...v);
    }, vt(t));
  }
  return o && (s.value = !0, oe && g()), gt(u), {
    isPending: Jn(s),
    start: g,
    stop: u
  };
}
function vn(e) {
  var t;
  const n = vt(e);
  return (t = n?.$el) != null ? t : n;
}
const gn = oe ? window : void 0;
function mn(...e) {
  let t, n, o, s;
  if (Vs(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = gn) : [t, n, o, s] = e, !t)
    return Gs;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const i = [], a = () => {
    i.forEach((f) => f()), i.length = 0;
  }, u = (f, y, k, N) => (f.addEventListener(y, k, N), () => f.removeEventListener(y, k, N)), g = Ne(() => [vn(t), vt(s)], ([f, y]) => {
    a(), f && i.push(...n.flatMap((k) => o.map((N) => u(f, k, N, y))));
  }, { immediate: !0, flush: "post" }), v = () => {
    g(), a();
  };
  return gt(v), v;
}
function Zs(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), Ks(o, t), n;
}
const Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, At = "__vueuse_ssr_handlers__";
Lt[At] = Lt[At] || {};
var Ft = Object.getOwnPropertySymbols, Js = Object.prototype.hasOwnProperty, Ys = Object.prototype.propertyIsEnumerable, Qs = (e, t) => {
  var n = {};
  for (var o in e)
    Js.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ft)
    for (var o of Ft(e))
      t.indexOf(o) < 0 && Ys.call(e, o) && (n[o] = e[o]);
  return n;
};
function Xs(e, t, n = {}) {
  const o = n, { window: s = gn } = o, i = Qs(o, ["window"]);
  let a;
  const u = Zs(() => s && "ResizeObserver" in s), g = () => {
    a && (a.disconnect(), a = void 0);
  }, v = Ne(() => vn(e), (y) => {
    g(), u.value && s && y && (a = new ResizeObserver(t), a.observe(y, i));
  }, { immediate: !0, flush: "post" }), f = () => {
    g(), v();
  };
  return gt(f), {
    isSupported: u,
    stop: f
  };
}
var Rt;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Rt || (Rt = {}));
var ea = Object.defineProperty, $t = Object.getOwnPropertySymbols, ta = Object.prototype.hasOwnProperty, na = Object.prototype.propertyIsEnumerable, Wt = (e, t, n) => t in e ? ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oa = (e, t) => {
  for (var n in t || (t = {}))
    ta.call(t, n) && Wt(e, n, t[n]);
  if ($t)
    for (var n of $t(t))
      na.call(t, n) && Wt(e, n, t[n]);
  return e;
};
const sa = {
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
oa({
  linear: qs
}, sa);
const jt = {
  current: 0
}, Bt = x(0), yn = 2e3, Ht = Symbol("elZIndexContextKey"), wn = Symbol("zIndexContextKey"), aa = (e) => {
  const t = ue() ? J(Ht, jt) : jt, n = e || (ue() ? J(wn, void 0) : void 0), o = _(() => {
    const a = l(n);
    return te(a) ? a : yn;
  }), s = _(() => o.value + Bt.value), i = () => (t.current++, Bt.value = t.current, s.value);
  return !oe && J(Ht), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: i
  };
};
var ia = {
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
const ra = (e) => (t, n) => la(t, n, l(e)), la = (e, t, n) => Bs(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var i;
  return `${(i = t?.[s]) != null ? i : `{${s}}`}`;
}), ua = (e) => {
  const t = _(() => l(e).name), n = Xn(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: ra(e)
  };
}, _n = Symbol("localeContextKey"), ca = (e) => {
  const t = e || J(_n, x());
  return ua(_(() => t.value || ia));
}, bn = "__epPropKey", L = (e) => e, da = (e) => rn(e) && !!e[bn], Cn = (e, t) => {
  if (!rn(e) || da(e))
    return e;
  const { values: n, required: o, default: s, type: i, validator: a } = e, g = {
    type: i,
    required: !!o,
    validator: n || a ? (v) => {
      let f = !1, y = [];
      if (n && (y = Array.from(n), It(e, "default") && y.push(s), f || (f = y.includes(v))), a && (f || (f = a(v))), !f && y.length > 0) {
        const k = [...new Set(y)].map((N) => JSON.stringify(N)).join(", ");
        eo(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${k}], got value ${JSON.stringify(v)}.`);
      }
      return f;
    } : void 0,
    [bn]: !0
  };
  return It(e, "default") && (g.default = s), g;
}, ve = (e) => Hs(Object.entries(e).map(([t, n]) => [
  t,
  Cn(n, t)
])), pa = ["", "default", "small", "large"], ha = Cn({
  type: String,
  values: pa,
  required: !1
}), fa = Symbol("size"), va = Symbol("emptyValuesContextKey"), ga = ve({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Te(e) ? !e() : !e
  }
}), Ut = (e) => Object.keys(e), Be = x();
function Sn(e, t = void 0) {
  return ue() ? J(sn, Be) : Be;
}
function On(e, t) {
  const n = Sn(), o = ct(e, _(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.namespace) || Fe;
  })), s = ca(_(() => {
    var u;
    return (u = n.value) == null ? void 0 : u.locale;
  })), i = aa(_(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.zIndex) || yn;
  })), a = _(() => {
    var u;
    return l(t) || ((u = n.value) == null ? void 0 : u.size) || "";
  });
  return kn(_(() => l(n) || {})), {
    ns: o,
    locale: s,
    zIndex: i,
    size: a
  };
}
const kn = (e, t, n = !1) => {
  var o;
  const s = !!ue(), i = s ? Sn() : void 0, a = (o = void 0) != null ? o : s ? to : void 0;
  if (!a)
    return;
  const u = _(() => {
    const g = l(e);
    return i?.value ? ma(i.value, g) : g;
  });
  return a(sn, u), a(_n, _(() => u.value.locale)), a(an, _(() => u.value.namespace)), a(wn, _(() => u.value.zIndex)), a(fa, {
    size: _(() => u.value.size || "")
  }), a(va, _(() => ({
    emptyValues: u.value.emptyValues,
    valueOnClear: u.value.valueOnClear
  }))), (n || !Be.value) && (Be.value = u.value), u;
}, ma = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ut(e), ...Ut(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function rt(e, t = "px") {
  if (!e)
    return "";
  if (te(e) || Us(e))
    return `${e}${t}`;
  if (X(e))
    return e;
}
const xn = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Tn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ya = ve({
  size: {
    type: L([Number, String])
  },
  color: {
    type: String
  }
}), wa = D({
  name: "ElIcon",
  inheritAttrs: !1
}), _a = /* @__PURE__ */ D({
  ...wa,
  props: ya,
  setup(e) {
    const t = e, n = ct("icon"), o = _(() => {
      const { size: s, color: i } = t;
      return !s && !i ? {} : {
        fontSize: hn(s) ? void 0 : rt(s),
        "--color": i
      };
    });
    return (s, i) => (C(), I("i", no({
      class: l(n).b(),
      style: l(o)
    }, s.$attrs), [
      ce(s.$slots, "default")
    ], 16));
  }
});
var ba = /* @__PURE__ */ Ze(_a, [["__file", "icon.vue"]]);
const He = xn(ba);
/*! Element Plus Icons Vue v2.3.1 */
var Ca = /* @__PURE__ */ D({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Sa = Ca, Oa = /* @__PURE__ */ D({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), In = Oa, ka = /* @__PURE__ */ D({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), xa = ka, Ta = /* @__PURE__ */ D({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ia = Ta, Na = /* @__PURE__ */ D({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      c("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), za = Na;
const Nn = L([
  String,
  Object,
  Function
]), Ea = {
  Close: In
}, Pa = {
  Close: In
}, Ue = {
  success: Ia,
  warning: za,
  error: Sa,
  info: xa
}, Da = (e) => e, Re = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Ma = ve({
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
    type: L([String, Object, Array])
  },
  offset: {
    type: L(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), La = D({
  name: "ElBadge"
}), Aa = /* @__PURE__ */ D({
  ...La,
  props: Ma,
  setup(e, { expose: t }) {
    const n = e, o = ct("badge"), s = _(() => n.isDot ? "" : te(n.value) && te(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), i = _(() => {
      var a, u, g, v, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: rt(-((u = (a = n.offset) == null ? void 0 : a[0]) != null ? u : 0)),
          marginTop: rt((v = (g = n.offset) == null ? void 0 : g[1]) != null ? v : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: s
    }), (a, u) => (C(), I("div", {
      class: z(l(o).b())
    }, [
      ce(a.$slots, "default"),
      A(ut, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Y(() => [
          Q(c("sup", {
            class: z([
              l(o).e("content"),
              l(o).em("content", a.type),
              l(o).is("fixed", !!a.$slots.default),
              l(o).is("dot", a.isDot),
              l(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: ke(l(i))
          }, [
            ce(a.$slots, "content", { value: l(s) }, () => [
              Zt(P(l(s)), 1)
            ])
          ], 6), [
            [$e, !a.hidden && (l(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Fa = /* @__PURE__ */ Ze(Aa, [["__file", "badge.vue"]]);
const Ra = xn(Fa), $a = ve({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: L(Object)
  },
  size: ha,
  button: {
    type: L(Object)
  },
  experimentalFeatures: {
    type: L(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: L(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...ga
}), R = {};
D({
  name: "ElConfigProvider",
  props: $a,
  setup(e, { slots: t }) {
    Ne(() => e.message, (o) => {
      Object.assign(R, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = kn(e);
    return () => ce(t, "default", { config: n?.value });
  }
});
const zn = ["success", "info", "warning", "error"], E = Da({
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
  appendTo: oe ? document.body : void 0
}), Wa = ve({
  customClass: {
    type: String,
    default: E.customClass
  },
  center: {
    type: Boolean,
    default: E.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: E.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: E.duration
  },
  icon: {
    type: Nn,
    default: E.icon
  },
  id: {
    type: String,
    default: E.id
  },
  message: {
    type: L([
      String,
      Object,
      Function
    ]),
    default: E.message
  },
  onClose: {
    type: L(Function),
    default: E.onClose
  },
  showClose: {
    type: Boolean,
    default: E.showClose
  },
  type: {
    type: String,
    values: zn,
    default: E.type
  },
  plain: {
    type: Boolean,
    default: E.plain
  },
  offset: {
    type: Number,
    default: E.offset
  },
  zIndex: {
    type: Number,
    default: E.zIndex
  },
  grouping: {
    type: Boolean,
    default: E.grouping
  },
  repeatNum: {
    type: Number,
    default: E.repeatNum
  }
}), ja = {
  destroy: () => !0
}, $ = oo([]), Ba = (e) => {
  const t = $.findIndex((s) => s.id === e), n = $[t];
  let o;
  return t > 0 && (o = $[t - 1]), { current: n, prev: o };
}, Ha = (e) => {
  const { prev: t } = Ba(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Ua = (e, t) => $.findIndex((o) => o.id === e) > 0 ? 16 : t, Va = D({
  name: "ElMessage"
}), Ga = /* @__PURE__ */ D({
  ...Va,
  props: Wa,
  emits: ja,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Pa, { ns: s, zIndex: i } = On("message"), { currentZIndex: a, nextZIndex: u } = i, g = x(), v = x(!1), f = x(0);
    let y;
    const k = _(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), N = _(() => {
      const T = n.type;
      return { [s.bm("icon", T)]: T && Ue[T] };
    }), O = _(() => n.icon || Ue[n.type] || ""), p = _(() => Ha(n.id)), m = _(() => Ua(n.id, n.offset) + p.value), w = _(() => f.value + m.value), K = _(() => ({
      top: `${m.value}px`,
      zIndex: a.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: y } = fn(() => {
        W();
      }, n.duration));
    }
    function H() {
      y?.();
    }
    function W() {
      v.value = !1;
    }
    function Je({ code: T }) {
      T === Re.esc && W();
    }
    return Ge(() => {
      b(), u(), v.value = !0;
    }), Ne(() => n.repeatNum, () => {
      H(), b();
    }), mn(document, "keydown", Je), Xs(g, () => {
      f.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: w,
      close: W
    }), (T, mt) => (C(), G(ut, {
      name: l(s).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (yt) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: Y(() => [
        Q(c("div", {
          id: T.id,
          ref_key: "messageRef",
          ref: g,
          class: z([
            l(s).b(),
            { [l(s).m(T.type)]: T.type },
            l(s).is("center", T.center),
            l(s).is("closable", T.showClose),
            l(s).is("plain", T.plain),
            T.customClass
          ]),
          style: ke(l(K)),
          role: "alert",
          onMouseenter: H,
          onMouseleave: b
        }, [
          T.repeatNum > 1 ? (C(), G(l(Ra), {
            key: 0,
            value: T.repeatNum,
            type: l(k),
            class: z(l(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : B("v-if", !0),
          l(O) ? (C(), G(l(He), {
            key: 1,
            class: z([l(s).e("icon"), l(N)])
          }, {
            default: Y(() => [
              (C(), G(Jt(l(O))))
            ]),
            _: 1
          }, 8, ["class"])) : B("v-if", !0),
          ce(T.$slots, "default", {}, () => [
            T.dangerouslyUseHTMLString ? (C(), I(be, { key: 1 }, [
              B(" Caution here, message could've been compromised, never use user's input as message "),
              c("p", {
                class: z(l(s).e("content")),
                innerHTML: T.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (C(), I("p", {
              key: 0,
              class: z(l(s).e("content"))
            }, P(T.message), 3))
          ]),
          T.showClose ? (C(), G(l(He), {
            key: 2,
            class: z(l(s).e("closeBtn")),
            onClick: Ce(W, ["stop"])
          }, {
            default: Y(() => [
              A(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : B("v-if", !0)
        ], 46, ["id"]), [
          [$e, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var qa = /* @__PURE__ */ Ze(Ga, [["__file", "message.vue"]]);
let Ka = 1;
const En = (e) => {
  const t = !e || X(e) || xe(e) || Te(e) ? { message: e } : e, n = {
    ...E,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (X(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    it(o) || (o = document.body), n.appendTo = o;
  }
  return Dt(R.grouping) && !n.grouping && (n.grouping = R.grouping), te(R.duration) && n.duration === 3e3 && (n.duration = R.duration), te(R.offset) && n.offset === 16 && (n.offset = R.offset), Dt(R.showClose) && !n.showClose && (n.showClose = R.showClose), n;
}, Za = (e) => {
  const t = $.indexOf(e);
  if (t === -1)
    return;
  $.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ja = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Ka++}`, s = t.onClose, i = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), Za(f);
    },
    onDestroy: () => {
      We(null, i);
    }
  }, u = A(qa, a, Te(a.message) || xe(a.message) ? {
    default: Te(a.message) ? a.message : () => a.message
  } : null);
  u.appContext = n || pe._context, We(u, i), e.appendChild(i.firstElementChild);
  const g = u.component, f = {
    id: o,
    vnode: u,
    vm: g,
    handler: {
      close: () => {
        g.exposed.visible.value = !1;
      }
    },
    props: u.component.props
  };
  return f;
}, pe = (e = {}, t) => {
  if (!oe)
    return { close: () => {
    } };
  const n = En(e);
  if (n.grouping && $.length) {
    const s = $.find(({ vnode: i }) => {
      var a;
      return ((a = i.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (te(R.max) && $.length >= R.max)
    return { close: () => {
    } };
  const o = Ja(n, t);
  return $.push(o), o.handler;
};
zn.forEach((e) => {
  pe[e] = (t = {}, n) => {
    const o = En(t);
    return pe({ ...o, type: e }, n);
  };
});
function Ya(e) {
  for (const t of $)
    (!e || e === t.props.type) && t.handler.close();
}
pe.closeAll = Ya;
pe._context = null;
const Qa = Tn(pe, "$message"), Pn = [
  "success",
  "info",
  "warning",
  "error"
], Xa = ve({
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
    type: Nn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: L([
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
    type: L(Function),
    default: () => {
    }
  },
  onClose: {
    type: L(Function),
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
    values: [...Pn, ""],
    default: ""
  },
  zIndex: Number
}), ei = {
  destroy: () => !0
}, ti = D({
  name: "ElNotification"
}), ni = /* @__PURE__ */ D({
  ...ti,
  props: Xa,
  emits: ei,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = On("notification"), { nextZIndex: i, currentZIndex: a } = s, { Close: u } = Ea, g = x(!1);
    let v;
    const f = _(() => {
      const b = n.type;
      return b && Ue[n.type] ? o.m(b) : "";
    }), y = _(() => n.type && Ue[n.type] || n.icon), k = _(() => n.position.endsWith("right") ? "right" : "left"), N = _(() => n.position.startsWith("top") ? "top" : "bottom"), O = _(() => {
      var b;
      return {
        [N.value]: `${n.offset}px`,
        zIndex: (b = n.zIndex) != null ? b : a.value
      };
    });
    function p() {
      n.duration > 0 && ({ stop: v } = fn(() => {
        g.value && w();
      }, n.duration));
    }
    function m() {
      v?.();
    }
    function w() {
      g.value = !1;
    }
    function K({ code: b }) {
      b === Re.delete || b === Re.backspace ? m() : b === Re.esc ? g.value && w() : p();
    }
    return Ge(() => {
      p(), i(), g.value = !0;
    }), mn(document, "keydown", K), t({
      visible: g,
      close: w
    }), (b, H) => (C(), G(ut, {
      name: l(o).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (W) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: Y(() => [
        Q(c("div", {
          id: b.id,
          class: z([l(o).b(), b.customClass, l(k)]),
          style: ke(l(O)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: p,
          onClick: b.onClick
        }, [
          l(y) ? (C(), G(l(He), {
            key: 0,
            class: z([l(o).e("icon"), l(f)])
          }, {
            default: Y(() => [
              (C(), G(Jt(l(y))))
            ]),
            _: 1
          }, 8, ["class"])) : B("v-if", !0),
          c("div", {
            class: z(l(o).e("group"))
          }, [
            c("h2", {
              class: z(l(o).e("title")),
              textContent: P(b.title)
            }, null, 10, ["textContent"]),
            Q(c("div", {
              class: z(l(o).e("content")),
              style: ke(b.title ? void 0 : { margin: 0 })
            }, [
              ce(b.$slots, "default", {}, () => [
                b.dangerouslyUseHTMLString ? (C(), I(be, { key: 1 }, [
                  B(" Caution here, message could've been compromised, never use user's input as message "),
                  c("p", { innerHTML: b.message }, null, 8, ["innerHTML"])
                ], 2112)) : (C(), I("p", { key: 0 }, P(b.message), 1))
              ])
            ], 6), [
              [$e, b.message]
            ]),
            b.showClose ? (C(), G(l(He), {
              key: 0,
              class: z(l(o).e("closeBtn")),
              onClick: Ce(w, ["stop"])
            }, {
              default: Y(() => [
                A(l(u))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : B("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [$e, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var oi = /* @__PURE__ */ Ze(ni, [["__file", "notification.vue"]]);
const Ve = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, lt = 16;
let si = 1;
const he = function(e = {}, t) {
  if (!oe)
    return { close: () => {
    } };
  (X(e) || xe(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Ve[n].forEach(({ vm: f }) => {
    var y;
    o += (((y = f.el) == null ? void 0 : y.offsetHeight) || 0) + lt;
  }), o += lt;
  const s = `notification_${si++}`, i = e.onClose, a = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      ai(s, n, i);
    }
  };
  let u = document.body;
  it(e.appendTo) ? u = e.appendTo : X(e.appendTo) && (u = document.querySelector(e.appendTo)), it(u) || (u = document.body);
  const g = document.createElement("div"), v = A(oi, a, Te(a.message) ? a.message : xe(a.message) ? () => a.message : null);
  return v.appContext = hn(t) ? he._context : t, v.props.onDestroy = () => {
    We(null, g);
  }, We(v, g), Ve[n].push({ vm: v }), u.appendChild(g.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Pn.forEach((e) => {
  he[e] = (t = {}, n) => ((X(t) || xe(t)) && (t = {
    message: t
  }), he({ ...t, type: e }, n));
});
function ai(e, t, n) {
  const o = Ve[t], s = o.findIndex(({ vm: v }) => {
    var f;
    return ((f = v.component) == null ? void 0 : f.props.id) === e;
  });
  if (s === -1)
    return;
  const { vm: i } = o[s];
  if (!i)
    return;
  n?.(i);
  const a = i.el.offsetHeight, u = t.split("-")[0];
  o.splice(s, 1);
  const g = o.length;
  if (!(g < 1))
    for (let v = s; v < g; v++) {
      const { el: f, component: y } = o[v].vm, k = Number.parseInt(f.style[u], 10) - a - lt;
      y.props.offset = k;
    }
}
function ii() {
  for (const e of Object.values(Ve))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
he.closeAll = ii;
he._context = null;
const ri = Tn(he, "$notify"), st = {
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
      showClose: i = !1
    } = e;
    o === "center" ? Qa({
      message: t,
      type: n,
      duration: s,
      showClose: i,
      grouping: !0
    }) : ri({
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
}, li = () => r("screen_recorder_get_ffmpeg_status"), re = (e) => r("screen_recorder_set_capture_excluded", { excluded: e }), _e = (e) => r("screen_recorder_set_passthrough_region", { region: e }), ui = () => r("screen_recorder_pick_target_window"), ci = () => r("screen_recorder_close_window"), di = (e, t) => r("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4" && t.audio
}), pi = () => r("screen_recorder_pause_recording"), hi = (e, t) => r("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4" && t.audio
}), fi = () => r("screen_recorder_stop_recording"), vi = () => r("screen_recorder_cancel_recording"), gi = (e) => r("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), Vt = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
});
function mi() {
  const e = x("selecting"), t = x(Vt()), n = x(null), o = x(null), s = x(""), i = x(null), a = x(0), u = x(0), g = x(null), v = () => {
    u.value = e.value === "recording" && i.value !== null ? a.value + Date.now() - i.value : a.value;
  }, f = () => {
    g.value !== null && (window.clearInterval(g.value), g.value = null);
  }, y = () => {
    f(), v(), g.value = window.setInterval(() => {
      v();
    }, 250);
  }, k = async () => (n.value = await li(), n.value), N = async (H) => {
    s.value = "", o.value = null;
    const W = n.value ?? await k();
    if (!W.available)
      throw new Error(W.message || "FFmpeg unavailable");
    await di(H, t.value), e.value = "recording", a.value = 0, u.value = 0, i.value = Date.now(), y();
  }, O = async () => {
    e.value === "recording" && (v(), a.value = u.value, i.value = null, f(), await pi(), e.value = "paused");
  }, p = async (H) => {
    e.value === "paused" && (await hi(H, t.value), e.value = "recording", i.value = Date.now(), y());
  }, m = async () => {
    e.value !== "recording" && e.value !== "paused" || (v(), a.value = u.value, i.value = null, f(), await fi(), e.value = "exporting");
  }, w = async () => (e.value = "exporting", o.value = await gi(t.value), e.value = "completed", o.value), K = async () => {
    f(), await vi(), e.value = "selecting", i.value = null, a.value = 0, u.value = 0, o.value = null;
  }, b = () => {
    e.value = "selecting", i.value = null, a.value = 0, u.value = 0, o.value = null, s.value = "", t.value = Vt();
  };
  return Yt(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: o,
    errorMessage: s,
    elapsedMs: u,
    refreshFfmpegStatus: k,
    begin: N,
    pause: O,
    resume: p,
    stop: m,
    exportFile: w,
    cancel: K,
    reset: b
  };
}
const yi = { class: "screen-recorder" }, wi = ["onMousedown"], _i = { class: "window-title" }, bi = { class: "capture-viewport" }, Ci = { class: "capture-frame" }, Si = {
  key: 0,
  class: "result-preview"
}, Oi = ["src"], ki = ["src"], xi = { class: "control-strip" }, Ti = { class: "control-group control-group--tools" }, Ii = ["title", "disabled"], Ni = { class: "select-field" }, zi = ["disabled"], Ei = ["disabled"], Pi = ["disabled"], Di = { value: "high" }, Mi = { value: "standard" }, Li = { value: "small" }, Ai = { class: "dimension-group optional-size" }, Fi = { class: "dimension" }, Ri = ["value"], $i = { class: "dimension" }, Wi = ["value"], ji = { class: "control-group control-group--actions" }, Bi = { class: "time" }, Hi = {
  key: 1,
  class: "save-status"
}, Ui = ["title"], Vi = ["disabled"], Gi = {
  key: 0,
  class: "warning"
}, Pe = 80, qi = 468, Ki = 300, Gt = 420, qt = 260, Kt = 40, Zi = 58, De = 8, Me = 1, Ji = /* @__PURE__ */ D({
  __name: "index",
  setup(e) {
    const t = tn(), n = x(null), o = x({ width: 0, height: 0 }), s = x(0), i = x(!1);
    let a = null, u = null, g = null, v = null, f = null, y = null, k = 0;
    const N = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: O,
      settings: p,
      ffmpegStatus: m,
      result: w,
      elapsedMs: K,
      refreshFfmpegStatus: b,
      begin: H,
      pause: W,
      resume: Je,
      stop: T,
      exportFile: mt,
      cancel: yt,
      reset: Dn
    } = mi(), se = _(() => O.value === "recording" || O.value === "paused" || O.value === "exporting"), ae = _(() => p.value.audio && p.value.format === "mp4"), Ye = _(() => O.value === "completed" && w.value?.path ? lo(w.value.path) : ""), Mn = _(() => {
      const h = ae.value && !i.value ? s.value : 0, d = (S, V) => Math.max(0.18, Math.min(1, S + h * V)).toFixed(3);
      return {
        "--bar-1": d(0.28, 0.64),
        "--bar-2": d(0.42, 0.78),
        "--bar-3": d(0.34, 0.94),
        "--bar-4": d(0.22, 0.72)
      };
    }), Ln = _(() => {
      if (p.value.format === "gif")
        return "GIF 不支持音频";
      if (i.value && p.value.audio)
        return "音频已开启，但无法读取实时音量；请检查系统录音权限或输入设备";
      if (w.value?.audioDevice)
        return `已录制音频：${w.value.audioDevice}`;
      if (w.value && !w.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (m.value?.available && !m.value.systemAudioAvailable) {
        const h = m.value.audioDevices?.join("、") || "无";
        return p.value.audio ? `未发现系统声音/立体声混音设备；当前可用音频设备：${h}` : "录制音频已关闭";
      }
      return p.value.audio ? "录制音频已开启。系统声音需要启用“立体声混音/Loopback”等设备" : "录制音频已关闭";
    }), An = _(() => {
      const h = Math.floor(K.value / 1e3), d = Math.floor(h / 60).toString().padStart(2, "0"), S = (h % 60).toString().padStart(2, "0");
      return `${d}:${S}`;
    }), ge = async (h) => {
      try {
        await h();
      } catch (d) {
        st.msg(d?.message || String(d), "error");
      }
    }, wt = (h) => Math.max(2, Math.floor(Math.round(h) / 2) * 2), Qe = async () => {
      const h = n.value;
      if (!h)
        throw new Error("录制视口尚未准备好");
      const d = h.getBoundingClientRect(), S = await t.scaleFactor(), V = await t.innerPosition(), q = wt(d.width * S), Xe = wt(d.height * S);
      if (q < Pe || Xe < Pe)
        throw new Error("录制区域太小，请放大录制窗口");
      return {
        x: d.left,
        y: d.top,
        width: q / S,
        height: Xe / S,
        screenX: Math.round(V.x + d.left * S),
        screenY: Math.round(V.y + d.top * S),
        physicalWidth: q,
        physicalHeight: Xe,
        scale: S
      };
    }, U = async () => {
      try {
        const h = await Qe();
        o.value = {
          width: h.physicalWidth,
          height: h.physicalHeight
        }, await _e({
          x: Math.round(h.x * h.scale),
          y: Math.round(h.y * h.scale),
          width: h.physicalWidth,
          height: h.physicalHeight
        }).catch(() => {
        });
      } catch {
        o.value = { width: 0, height: 0 }, await _e(null).catch(() => {
        });
      }
    }, me = async () => {
      await _e(null).catch(() => {
      });
    }, _t = () => {
      window.setTimeout(() => {
        U();
      }, 120);
    }, ze = async () => {
      k && (cancelAnimationFrame(k), k = 0), f = null, y = null, g?.getTracks().forEach((h) => h.stop()), g = null, v && (await v.close().catch(() => {
      }), v = null), s.value = 0;
    }, bt = () => {
      if (!f || !y) {
        k = 0;
        return;
      }
      f.getByteTimeDomainData(y);
      let h = 0;
      for (const V of y) {
        const q = (V - 128) / 128;
        h += q * q;
      }
      const d = Math.sqrt(h / y.length), S = Math.min(1, d * 8);
      s.value = s.value * 0.68 + S * 0.32, k = requestAnimationFrame(bt);
    }, ye = async () => {
      if (!(!ae.value || g || k)) {
        if (!navigator.mediaDevices?.getUserMedia) {
          i.value = !0;
          return;
        }
        try {
          const h = await navigator.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: !1,
              noiseSuppression: !1,
              autoGainControl: !1
            },
            video: !1
          });
          g = h, v = new AudioContext(), f = v.createAnalyser(), f.fftSize = 512, f.smoothingTimeConstant = 0.75, y = new Uint8Array(f.fftSize), v.createMediaStreamSource(h).connect(f), await v.resume().catch(() => {
          }), i.value = !1, bt();
        } catch {
          i.value = !0, await ze();
        }
      }
    }, Fn = async (h) => {
      h.button !== 0 || se.value || (await me(), await t.startDragging().catch((d) => {
        st.msg(d?.message || String(d), "error");
      }), _t());
    }, Rn = async (h) => {
      se.value || (await me(), await t.startResizeDragging(h).catch((d) => {
        st.msg(d?.message || String(d), "error");
      }), _t());
    }, $n = () => ge(async () => {
      await ye(), await re(!0).catch(() => {
      }), await U(), await H(await Qe());
    }), Wn = () => ge(W), jn = () => ge(async () => {
      await Je(await Qe());
    }), Bn = () => ge(async () => {
      await T(), await mt(), await me(), await re(!1).catch(() => {
      });
    }), Hn = () => {
      me(), Dn(), O.value = "ready", w.value = null, re(!0).catch(() => {
      }), t.setSize(new Se(qi, Ki)), Le(U), ye();
    }, Un = () => {
      se.value || p.value.format === "gif" || (p.value.audio = !p.value.audio, p.value.audio ? ye() : ze());
    }, Vn = async (h) => {
      const S = (await go(h.screenX, h.screenY))?.scaleFactor || await t.scaleFactor(), V = Math.max(
        Gt,
        h.physicalWidth / S + De * 2 + Me * 2
      ), q = Math.max(
        qt,
        h.physicalHeight / S + Kt + Zi + De * 2 + Me * 2
      );
      await t.setPosition(new j(
        Math.round(h.screenX - (De + Me) * S),
        Math.round(h.screenY - (Kt + De + Me) * S)
      )), await t.setSize(new Se(Math.round(V), Math.round(q))), await Le(), await U();
    }, Gn = () => ge(async () => {
      await me();
      const h = await ui();
      await Vn(h);
    }), qn = async () => {
      await t.minimize();
    }, Ct = async () => {
      try {
        await yt(), await _e(null).catch(() => {
        }), await re(!1).catch(() => {
        });
      } catch {
      }
      await ci();
    }, Kn = async () => {
      w.value && await r("open_file_with_default_app", { filePath: w.value.path });
    }, Zn = async () => {
      w.value && await r("show_file_in_folder", { filePath: w.value.path });
    }, St = (h) => {
      h.key === "Escape" && (h.preventDefault(), Ct());
    };
    return Ge(async () => {
      O.value = "ready", await t.setMinSize(new Se(Gt, qt)).catch(() => {
      }), await re(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await b().catch(() => {
      }), await Le(), await U(), await ye(), n.value && (a = new ResizeObserver(() => {
        U();
      }), a.observe(n.value)), u = await t.onMoved(() => {
        U();
      }).catch(() => null), window.addEventListener("resize", U), window.addEventListener("keydown", St);
    }), Ne(ae, (h) => {
      h ? ye() : ze();
    }), Yt(() => {
      a?.disconnect(), u?.(), window.removeEventListener("resize", U), window.removeEventListener("keydown", St), _e(null).catch(() => {
      }), re(!1).catch(() => {
      }), ze();
    }), (h, d) => (C(), I("div", yi, [
      c(
        "div",
        {
          class: z(["recorder-shell", { recording: l(O) === "recording", paused: l(O) === "paused" }])
        },
        [
          (C(), I(
            be,
            null,
            so(N, (S) => c("span", {
              key: S.className,
              class: z(["resize-zone", S.className]),
              onMousedown: Ce((V) => Rn(S.direction), ["prevent"])
            }, null, 42, wi)),
            64
            /* STABLE_FRAGMENT */
          )),
          c(
            "header",
            {
              class: "title-bar",
              onMousedown: Fn
            },
            [
              c(
                "span",
                _i,
                P(h.$t("screenRecorder.title") || "自定义录屏"),
                1
                /* TEXT */
              ),
              c(
                "div",
                {
                  class: "window-actions",
                  onMousedown: d[0] || (d[0] = Ce(() => {
                  }, ["stop"]))
                },
                [
                  c("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: qn
                  }, [
                    A(l(Co), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  c("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: Ct
                  }, [
                    A(l(bo), {
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
          c("main", bi, [
            d[9] || (d[9] = c(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            d[10] || (d[10] = c(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            d[11] || (d[11] = c(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            d[12] || (d[12] = c(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            c("div", Ci, [
              c(
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
              Ye.value ? (C(), I("div", Si, [
                l(w)?.format === "mp4" ? (C(), I("video", {
                  key: 0,
                  src: Ye.value,
                  controls: "",
                  playsinline: "",
                  preload: "metadata"
                }, null, 8, Oi)) : (C(), I("img", {
                  key: 1,
                  src: Ye.value,
                  alt: ""
                }, null, 8, ki))
              ])) : B("v-if", !0),
              d[5] || (d[5] = c(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              d[6] || (d[6] = c(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              d[7] || (d[7] = c(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              d[8] || (d[8] = c(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          c("footer", xi, [
            c("div", Ti, [
              l(O) === "ready" || l(O) === "completed" ? (C(), I(
                "button",
                {
                  key: 0,
                  class: "icon-control snap-control",
                  title: "拖到目标窗口并松开以对齐",
                  onMousedown: Ce(Gn, ["prevent"])
                },
                " ◎ ",
                32
                /* NEED_HYDRATION */
              )) : B("v-if", !0),
              c("button", {
                class: z(["audio-meter", { active: ae.value && s.value > 0.03, metering: ae.value && !i.value, muted: !ae.value || i.value }]),
                title: Ln.value,
                disabled: l(O) === "exporting" || l(p).format === "gif",
                onClick: Un
              }, [
                c(
                  "span",
                  {
                    class: "audio-bars",
                    style: ke(Mn.value)
                  },
                  d[13] || (d[13] = [
                    c(
                      "i",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    ),
                    c(
                      "i",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    ),
                    c(
                      "i",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    ),
                    c(
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
              ], 10, Ii),
              c("label", Ni, [
                Q(c("select", {
                  "onUpdate:modelValue": d[1] || (d[1] = (S) => l(p).fps = S),
                  disabled: se.value
                }, d[14] || (d[14] = [
                  c(
                    "option",
                    { value: 15 },
                    "15",
                    -1
                    /* HOISTED */
                  ),
                  c(
                    "option",
                    { value: 24 },
                    "24",
                    -1
                    /* HOISTED */
                  ),
                  c(
                    "option",
                    { value: 30 },
                    "30",
                    -1
                    /* HOISTED */
                  ),
                  c(
                    "option",
                    { value: 60 },
                    "60",
                    -1
                    /* HOISTED */
                  )
                ]), 8, zi), [
                  [et, l(p).fps]
                ]),
                d[15] || (d[15] = c(
                  "span",
                  { class: "unit" },
                  "fps",
                  -1
                  /* HOISTED */
                ))
              ]),
              Q(c("select", {
                "onUpdate:modelValue": d[2] || (d[2] = (S) => l(p).format = S),
                class: "format-select optional-format",
                disabled: se.value
              }, d[16] || (d[16] = [
                c(
                  "option",
                  { value: "mp4" },
                  "MP4",
                  -1
                  /* HOISTED */
                ),
                c(
                  "option",
                  { value: "gif" },
                  "GIF",
                  -1
                  /* HOISTED */
                )
              ]), 8, Ei), [
                [et, l(p).format]
              ]),
              Q(c("select", {
                "onUpdate:modelValue": d[3] || (d[3] = (S) => l(p).quality = S),
                class: "quality-select optional-quality",
                disabled: se.value
              }, [
                c(
                  "option",
                  Di,
                  P(h.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                c(
                  "option",
                  Mi,
                  P(h.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                c(
                  "option",
                  Li,
                  P(h.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, Pi), [
                [et, l(p).quality]
              ]),
              c("div", Ai, [
                c("label", Fi, [
                  c("input", {
                    value: o.value.width,
                    readonly: ""
                  }, null, 8, Ri)
                ]),
                d[17] || (d[17] = c(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                c("label", $i, [
                  c("input", {
                    value: o.value.height,
                    readonly: ""
                  }, null, 8, Wi)
                ]),
                d[18] || (d[18] = c(
                  "span",
                  { class: "unit" },
                  "px",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            c("div", ji, [
              l(O) === "recording" || l(O) === "paused" ? (C(), I(
                be,
                { key: 0 },
                [
                  c(
                    "span",
                    Bi,
                    P(An.value),
                    1
                    /* TEXT */
                  ),
                  c(
                    "button",
                    {
                      class: "control-button",
                      onClick: d[4] || (d[4] = (S) => l(O) === "paused" ? jn() : Wn())
                    },
                    P(l(O) === "paused" ? h.$t("screenRecorder.resume") : h.$t("screenRecorder.pause")),
                    1
                    /* TEXT */
                  ),
                  c(
                    "button",
                    {
                      class: "control-button danger",
                      onClick: Bn
                    },
                    P(h.$t("screenRecorder.stop")),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : l(O) === "exporting" ? (C(), I(
                "span",
                Hi,
                P(h.$t("screenRecorder.exporting") || "正在导出..."),
                1
                /* TEXT */
              )) : l(O) === "completed" && l(w) ? (C(), I(
                be,
                { key: 2 },
                [
                  c("span", {
                    class: "save-status optional-save-status",
                    title: l(w).path
                  }, P(l(w).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Ui),
                  c("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: Kn
                  }, "打开"),
                  c("button", {
                    class: "control-button",
                    title: "打开所在文件夹",
                    onClick: Zn
                  }, "文件夹"),
                  c("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: Hn
                  }, "重录")
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (C(), I("button", {
                key: 3,
                class: "record-button",
                disabled: l(m)?.available === !1 || o.value.width < Pe || o.value.height < Pe,
                onClick: $n
              }, [
                d[19] || (d[19] = c(
                  "span",
                  null,
                  null,
                  -1
                  /* HOISTED */
                )),
                Zt(
                  " " + P(h.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, Vi))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      l(m) && !l(m).available ? (C(), I(
        "p",
        Gi,
        P(l(m).message || h.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : B("v-if", !0)
    ]));
  }
}), Yi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Qi = /* @__PURE__ */ Yi(Ji, [["__scopeId", "data-v-85325af4"]]), Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qi
}, Symbol.toStringTag, { value: "Module" }));
export {
  tr as activate
};
