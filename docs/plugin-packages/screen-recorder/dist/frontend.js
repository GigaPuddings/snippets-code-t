import { inject as X, createVNode as F, getCurrentInstance as pe, ref as x, computed as _, unref as r, readonly as to, getCurrentScope as no, onScopeDispose as oo, onMounted as Ze, nextTick as Re, watch as Pe, isRef as so, warn as ao, provide as io, defineComponent as M, createElementBlock as I, openBlock as C, mergeProps as ro, renderSlot as fe, createElementVNode as d, normalizeClass as z, Transition as ft, withCtx as ee, withDirectives as te, normalizeStyle as Ie, createTextVNode as en, toDisplayString as E, vShow as Be, shallowReactive as lo, createBlock as Z, createCommentVNode as V, resolveDynamicComponent as tn, Fragment as Oe, withModifiers as ke, isVNode as Ne, render as He, onUnmounted as nn, renderList as uo, vModelSelect as ot } from "vue";
const rr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => ar)
  });
};
function co(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function po(e, t, n, o, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ae;
const R = "__TAURI_TO_IPC_KEY__";
function fo(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function l(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function ho(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class vo {
  get rid() {
    return co(this, Ae, "f");
  }
  constructor(t) {
    Ae.set(this, void 0), po(this, Ae, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return l("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ae = /* @__PURE__ */ new WeakMap();
class xe {
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
    return new de(this.width * t, this.height * t);
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
class de {
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
    return new xe(this.width / t, this.height / t);
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
class ue {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof xe ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof de ? this.size : this.size.toPhysical(t);
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
class on {
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
    return new G(this.x * t, this.y * t);
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
class G {
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
    return new on(this.x / t, this.y / t);
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
class Me {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof on ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof G ? this.position : this.position.toPhysical(t);
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
var L;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(L || (L = {}));
async function sn(e, t) {
  await l("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function an(e, t, n) {
  var o;
  const s = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return l("plugin:event|listen", {
    event: e,
    target: s,
    handler: fo(t)
  }).then((i) => async () => sn(e, i));
}
async function go(e, t, n) {
  return an(e, (o) => {
    sn(e, o.id), t(o);
  }, n);
}
async function mo(e, t) {
  await l("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function yo(e, t, n) {
  await l("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Te extends vo {
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
    return l("plugin:image|new", {
      rgba: Ue(t),
      width: n,
      height: o
    }).then((s) => new Te(s));
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
    return l("plugin:image|from_bytes", {
      bytes: Ue(t)
    }).then((n) => new Te(n));
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
    return l("plugin:image|from_path", { path: t }).then((n) => new Te(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return l("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return l("plugin:image|size", { rid: this.rid });
  }
}
function Ue(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Te ? e.rid : e;
}
var ut;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(ut || (ut = {}));
class wo {
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
var Nt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Nt || (Nt = {}));
function rn() {
  return new ln(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function st() {
  return l("plugin:window|get_all_windows").then((e) => e.map((t) => new ln(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const at = ["tauri://created", "tauri://error"];
class ln {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || l("plugin:window|create", {
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
    return (n = (await st()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return rn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return st();
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
    for (const t of await st())
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
    } : an(t, n, {
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
    } : go(t, n, {
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
    if (at.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return mo(t, n);
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
    if (at.includes(n)) {
      for (const s of this.listeners[n] || [])
        s({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return yo(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return at.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return l("plugin:window|scale_factor", {
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
    return l("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new G(t));
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
    return l("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new G(t));
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
    return l("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new de(t));
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
    return l("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new de(t));
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
    return l("plugin:window|is_fullscreen", {
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
    return l("plugin:window|is_minimized", {
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
    return l("plugin:window|is_maximized", {
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
    return l("plugin:window|is_focused", {
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
    return l("plugin:window|is_decorated", {
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
    return l("plugin:window|is_resizable", {
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
    return l("plugin:window|is_maximizable", {
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
    return l("plugin:window|is_minimizable", {
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
    return l("plugin:window|is_closable", {
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
    return l("plugin:window|is_visible", {
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
    return l("plugin:window|title", {
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
    return l("plugin:window|theme", {
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
    return l("plugin:window|is_always_on_top", {
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
    return l("plugin:window|center", {
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
    return t && (t === ut.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), l("plugin:window|request_user_attention", {
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
    return l("plugin:window|set_resizable", {
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
    return l("plugin:window|set_enabled", {
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
    return l("plugin:window|is_enabled", {
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
    return l("plugin:window|set_maximizable", {
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
    return l("plugin:window|set_minimizable", {
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
    return l("plugin:window|set_closable", {
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
    return l("plugin:window|set_title", {
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
    return l("plugin:window|maximize", {
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
    return l("plugin:window|unmaximize", {
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
    return l("plugin:window|toggle_maximize", {
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
    return l("plugin:window|minimize", {
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
    return l("plugin:window|unminimize", {
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
    return l("plugin:window|show", {
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
    return l("plugin:window|hide", {
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
    return l("plugin:window|close", {
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
    return l("plugin:window|destroy", {
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
    return l("plugin:window|set_decorations", {
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
    return l("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return l("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return l("plugin:window|set_effects", {
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
    return l("plugin:window|set_always_on_top", {
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
    return l("plugin:window|set_always_on_bottom", {
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
    return l("plugin:window|set_content_protected", {
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
    return l("plugin:window|set_size", {
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
    return l("plugin:window|set_min_size", {
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
    return l("plugin:window|set_max_size", {
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
    return l("plugin:window|set_size_constraints", {
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
    return l("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Me ? t : new Me(t)
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
    return l("plugin:window|set_fullscreen", {
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
    return l("plugin:window|set_focus", {
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
    return l("plugin:window|set_icon", {
      label: this.label,
      value: Ue(t)
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
    return l("plugin:window|set_skip_taskbar", {
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
    return l("plugin:window|set_cursor_grab", {
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
    return l("plugin:window|set_cursor_visible", {
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
    return l("plugin:window|set_cursor_icon", {
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
    return l("plugin:window|set_background_color", { color: t });
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
    return l("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Me ? t : new Me(t)
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
    return l("plugin:window|set_ignore_cursor_events", {
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
    return l("plugin:window|start_dragging", {
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
    return l("plugin:window|start_resize_dragging", {
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
    return l("plugin:window|set_badge_count", {
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
    return l("plugin:window|set_badge_label", {
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
    return l("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Ue(t) : void 0
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
    return l("plugin:window|set_progress_bar", {
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
    return l("plugin:window|set_visible_on_all_workspaces", {
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
    return l("plugin:window|set_title_bar_style", {
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
    return l("plugin:window|set_theme", {
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
    return this.listen(L.WINDOW_RESIZED, (n) => {
      n.payload = new de(n.payload), t(n);
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
    return this.listen(L.WINDOW_MOVED, (n) => {
      n.payload = new G(n.payload), t(n);
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
    return this.listen(L.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new wo(n);
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
    const n = await this.listen(L.DRAG_ENTER, (a) => {
      t({
        ...a,
        payload: {
          type: "enter",
          paths: a.payload.paths,
          position: new G(a.payload.position)
        }
      });
    }), o = await this.listen(L.DRAG_OVER, (a) => {
      t({
        ...a,
        payload: {
          type: "over",
          position: new G(a.payload.position)
        }
      });
    }), s = await this.listen(L.DRAG_DROP, (a) => {
      t({
        ...a,
        payload: {
          type: "drop",
          paths: a.payload.paths,
          position: new G(a.payload.position)
        }
      });
    }), i = await this.listen(L.DRAG_LEAVE, (a) => {
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
    const n = await this.listen(L.WINDOW_FOCUS, (s) => {
      t({ ...s, payload: !0 });
    }), o = await this.listen(L.WINDOW_BLUR, (s) => {
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
    return this.listen(L.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(L.WINDOW_THEME_CHANGED, t);
  }
}
var zt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(zt || (zt = {}));
var $t;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})($t || ($t = {}));
var Pt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Pt || (Pt = {}));
function _o(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new G(e.position),
    size: new de(e.size)
  };
}
async function bo(e, t) {
  return l("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(_o);
}
var Co = {
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
function So() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Oo(e, t, n) {
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
var ko = Symbol("icon-context");
function un(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(i) {
      var a = So(), u = X(ko, Co);
      return function() {
        var g = i.size, v = i.strokeWidth, h = i.strokeLinecap, y = i.strokeLinejoin, k = i.theme, N = i.fill, O = i.spin, p = Oo(a, {
          size: g,
          strokeWidth: v,
          strokeLinecap: h,
          strokeLinejoin: y,
          theme: k,
          fill: N
        }, u), m = [u.prefix + "-icon"];
        return m.push(u.prefix + "-icon-" + e), O && m.push(u.prefix + "-icon-spin"), F("span", {
          class: m.join(" ")
        }, [n(p)]);
      };
    }
  };
  return o;
}
const xo = un("close-small", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), To = un("minus", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), cn = Symbol(), We = "el", Io = "is-", Q = (e, t, n, o, s) => {
  let i = `${e}-${t}`;
  return n && (i += `-${n}`), o && (i += `__${o}`), s && (i += `--${s}`), i;
}, dn = Symbol("namespaceContextKey"), No = (e) => {
  const t = e || (pe() ? X(dn, x(We)) : x(We));
  return _(() => r(t) || We);
}, ht = (e, t) => {
  const n = No(t);
  return {
    namespace: n,
    b: (p = "") => Q(n.value, e, p, "", ""),
    e: (p) => p ? Q(n.value, e, "", p, "") : "",
    m: (p) => p ? Q(n.value, e, "", "", p) : "",
    be: (p, m) => p && m ? Q(n.value, e, p, m, "") : "",
    em: (p, m) => p && m ? Q(n.value, e, "", p, m) : "",
    bm: (p, m) => p && m ? Q(n.value, e, p, "", m) : "",
    bem: (p, m, w) => p && m && w ? Q(n.value, e, p, m, w) : "",
    is: (p, ...m) => {
      const w = m.length >= 1 ? m[0] : !0;
      return p && w ? `${Io}${p}` : "";
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
const zo = Object.prototype.hasOwnProperty, Et = (e, t) => zo.call(e, t), ze = (e) => typeof e == "function", ne = (e) => typeof e == "string", pn = (e) => e !== null && typeof e == "object";
var $o = typeof global == "object" && global && global.Object === Object && global, Po = typeof self == "object" && self && self.Object === Object && self, vt = $o || Po || Function("return this")(), he = vt.Symbol, fn = Object.prototype, Eo = fn.hasOwnProperty, Mo = fn.toString, Ce = he ? he.toStringTag : void 0;
function Lo(e) {
  var t = Eo.call(e, Ce), n = e[Ce];
  try {
    e[Ce] = void 0;
    var o = !0;
  } catch {
  }
  var s = Mo.call(e);
  return o && (t ? e[Ce] = n : delete e[Ce]), s;
}
var Do = Object.prototype, Fo = Do.toString;
function Ro(e) {
  return Fo.call(e);
}
var Ao = "[object Null]", Wo = "[object Undefined]", Mt = he ? he.toStringTag : void 0;
function hn(e) {
  return e == null ? e === void 0 ? Wo : Ao : Mt && Mt in Object(e) ? Lo(e) : Ro(e);
}
function jo(e) {
  return e != null && typeof e == "object";
}
var Bo = "[object Symbol]";
function gt(e) {
  return typeof e == "symbol" || jo(e) && hn(e) == Bo;
}
function Ho(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, s = Array(o); ++n < o; )
    s[n] = t(e[n], n, e);
  return s;
}
var mt = Array.isArray, Lt = he ? he.prototype : void 0, Dt = Lt ? Lt.toString : void 0;
function vn(e) {
  if (typeof e == "string")
    return e;
  if (mt(e))
    return Ho(e, vn) + "";
  if (gt(e))
    return Dt ? Dt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function gn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Uo = "[object AsyncFunction]", Go = "[object Function]", Vo = "[object GeneratorFunction]", qo = "[object Proxy]";
function Ko(e) {
  if (!gn(e))
    return !1;
  var t = hn(e);
  return t == Go || t == Vo || t == Uo || t == qo;
}
var it = vt["__core-js_shared__"], Ft = function() {
  var e = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zo(e) {
  return !!Ft && Ft in e;
}
var Jo = Function.prototype, Yo = Jo.toString;
function Qo(e) {
  if (e != null) {
    try {
      return Yo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xo = /[\\^$.*+?()[\]{}|]/g, es = /^\[object .+?Constructor\]$/, ts = Function.prototype, ns = Object.prototype, os = ts.toString, ss = ns.hasOwnProperty, as = RegExp(
  "^" + os.call(ss).replace(Xo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function is(e) {
  if (!gn(e) || Zo(e))
    return !1;
  var t = Ko(e) ? as : es;
  return t.test(Qo(e));
}
function rs(e, t) {
  return e?.[t];
}
function mn(e, t) {
  var n = rs(e, t);
  return is(n) ? n : void 0;
}
function ls(e, t) {
  return e === t || e !== e && t !== t;
}
var us = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cs = /^\w*$/;
function ds(e, t) {
  if (mt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || gt(e) ? !0 : cs.test(e) || !us.test(e) || t != null && e in Object(t);
}
var $e = mn(Object, "create");
function ps() {
  this.__data__ = $e ? $e(null) : {}, this.size = 0;
}
function fs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var hs = "__lodash_hash_undefined__", vs = Object.prototype, gs = vs.hasOwnProperty;
function ms(e) {
  var t = this.__data__;
  if ($e) {
    var n = t[e];
    return n === hs ? void 0 : n;
  }
  return gs.call(t, e) ? t[e] : void 0;
}
var ys = Object.prototype, ws = ys.hasOwnProperty;
function _s(e) {
  var t = this.__data__;
  return $e ? t[e] !== void 0 : ws.call(t, e);
}
var bs = "__lodash_hash_undefined__";
function Cs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $e && t === void 0 ? bs : t, this;
}
function oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
oe.prototype.clear = ps;
oe.prototype.delete = fs;
oe.prototype.get = ms;
oe.prototype.has = _s;
oe.prototype.set = Cs;
function Ss() {
  this.__data__ = [], this.size = 0;
}
function Je(e, t) {
  for (var n = e.length; n--; )
    if (ls(e[n][0], t))
      return n;
  return -1;
}
var Os = Array.prototype, ks = Os.splice;
function xs(e) {
  var t = this.__data__, n = Je(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : ks.call(t, n, 1), --this.size, !0;
}
function Ts(e) {
  var t = this.__data__, n = Je(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Is(e) {
  return Je(this.__data__, e) > -1;
}
function Ns(e, t) {
  var n = this.__data__, o = Je(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
me.prototype.clear = Ss;
me.prototype.delete = xs;
me.prototype.get = Ts;
me.prototype.has = Is;
me.prototype.set = Ns;
var zs = mn(vt, "Map");
function $s() {
  this.size = 0, this.__data__ = {
    hash: new oe(),
    map: new (zs || me)(),
    string: new oe()
  };
}
function Ps(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ye(e, t) {
  var n = e.__data__;
  return Ps(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Es(e) {
  var t = Ye(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ms(e) {
  return Ye(this, e).get(e);
}
function Ls(e) {
  return Ye(this, e).has(e);
}
function Ds(e, t) {
  var n = Ye(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ae.prototype.clear = $s;
ae.prototype.delete = Es;
ae.prototype.get = Ms;
ae.prototype.has = Ls;
ae.prototype.set = Ds;
var Fs = "Expected a function";
function yt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Fs);
  var n = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], i = n.cache;
    if (i.has(s))
      return i.get(s);
    var a = e.apply(this, o);
    return n.cache = i.set(s, a) || i, a;
  };
  return n.cache = new (yt.Cache || ae)(), n;
}
yt.Cache = ae;
var Rs = 500;
function As(e) {
  var t = yt(e, function(o) {
    return n.size === Rs && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Ws = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, js = /\\(\\)?/g, Bs = As(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ws, function(n, o, s, i) {
    t.push(s ? i.replace(js, "$1") : o || n);
  }), t;
});
function Hs(e) {
  return e == null ? "" : vn(e);
}
function Us(e, t) {
  return mt(e) ? e : ds(e, t) ? [e] : Bs(Hs(e));
}
function Gs(e) {
  if (typeof e == "string" || gt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Vs(e, t) {
  t = Us(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Gs(t[n++])];
  return n && n == o ? e : void 0;
}
function qs(e, t, n) {
  var o = e == null ? void 0 : Vs(e, t);
  return o === void 0 ? n : o;
}
function Ks(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var s = e[t];
    o[s[0]] = s[1];
  }
  return o;
}
const yn = (e) => e === void 0, Rt = (e) => typeof e == "boolean", se = (e) => typeof e == "number", ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, Zs = (e) => ne(e) ? !Number.isNaN(Number(e)) : !1;
var At;
const ie = typeof window < "u", Js = (e) => typeof e == "string", Ys = () => {
};
ie && ((At = window?.navigator) != null && At.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wt(e) {
  return typeof e == "function" ? e() : r(e);
}
function Qs(e) {
  return e;
}
function _t(e) {
  return no() ? (oo(e), !0) : !1;
}
function Xs(e, t = !0) {
  pe() ? Ze(e) : t ? e() : Re(e);
}
function wn(e, t, n = {}) {
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
    }, wt(t));
  }
  return o && (s.value = !0, ie && g()), _t(u), {
    isPending: to(s),
    start: g,
    stop: u
  };
}
function _n(e) {
  var t;
  const n = wt(e);
  return (t = n?.$el) != null ? t : n;
}
const bn = ie ? window : void 0;
function Cn(...e) {
  let t, n, o, s;
  if (Js(e[0]) || Array.isArray(e[0]) ? ([n, o, s] = e, t = bn) : [t, n, o, s] = e, !t)
    return Ys;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const i = [], a = () => {
    i.forEach((h) => h()), i.length = 0;
  }, u = (h, y, k, N) => (h.addEventListener(y, k, N), () => h.removeEventListener(y, k, N)), g = Pe(() => [_n(t), wt(s)], ([h, y]) => {
    a(), h && i.push(...n.flatMap((k) => o.map((N) => u(h, k, N, y))));
  }, { immediate: !0, flush: "post" }), v = () => {
    g(), a();
  };
  return _t(v), v;
}
function ea(e, t = !1) {
  const n = x(), o = () => n.value = !!e();
  return o(), Xs(o, t), n;
}
const Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, jt = "__vueuse_ssr_handlers__";
Wt[jt] = Wt[jt] || {};
var Bt = Object.getOwnPropertySymbols, ta = Object.prototype.hasOwnProperty, na = Object.prototype.propertyIsEnumerable, oa = (e, t) => {
  var n = {};
  for (var o in e)
    ta.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Bt)
    for (var o of Bt(e))
      t.indexOf(o) < 0 && na.call(e, o) && (n[o] = e[o]);
  return n;
};
function sa(e, t, n = {}) {
  const o = n, { window: s = bn } = o, i = oa(o, ["window"]);
  let a;
  const u = ea(() => s && "ResizeObserver" in s), g = () => {
    a && (a.disconnect(), a = void 0);
  }, v = Pe(() => _n(e), (y) => {
    g(), u.value && s && y && (a = new ResizeObserver(t), a.observe(y, i));
  }, { immediate: !0, flush: "post" }), h = () => {
    g(), v();
  };
  return _t(h), {
    isSupported: u,
    stop: h
  };
}
var Ht;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ht || (Ht = {}));
var aa = Object.defineProperty, Ut = Object.getOwnPropertySymbols, ia = Object.prototype.hasOwnProperty, ra = Object.prototype.propertyIsEnumerable, Gt = (e, t, n) => t in e ? aa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, la = (e, t) => {
  for (var n in t || (t = {}))
    ia.call(t, n) && Gt(e, n, t[n]);
  if (Ut)
    for (var n of Ut(t))
      ra.call(t, n) && Gt(e, n, t[n]);
  return e;
};
const ua = {
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
la({
  linear: Qs
}, ua);
const Vt = {
  current: 0
}, qt = x(0), Sn = 2e3, Kt = Symbol("elZIndexContextKey"), On = Symbol("zIndexContextKey"), ca = (e) => {
  const t = pe() ? X(Kt, Vt) : Vt, n = e || (pe() ? X(On, void 0) : void 0), o = _(() => {
    const a = r(n);
    return se(a) ? a : Sn;
  }), s = _(() => o.value + qt.value), i = () => (t.current++, qt.value = t.current, s.value);
  return !ie && X(Kt), {
    initialZIndex: o,
    currentZIndex: s,
    nextZIndex: i
  };
};
var da = {
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
const pa = (e) => (t, n) => fa(t, n, r(e)), fa = (e, t, n) => qs(n, e, e).replace(/\{(\w+)\}/g, (o, s) => {
  var i;
  return `${(i = t?.[s]) != null ? i : `{${s}}`}`;
}), ha = (e) => {
  const t = _(() => r(e).name), n = so(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: pa(e)
  };
}, kn = Symbol("localeContextKey"), va = (e) => {
  const t = e || X(kn, x());
  return ha(_(() => t.value || da));
}, xn = "__epPropKey", D = (e) => e, ga = (e) => pn(e) && !!e[xn], Tn = (e, t) => {
  if (!pn(e) || ga(e))
    return e;
  const { values: n, required: o, default: s, type: i, validator: a } = e, g = {
    type: i,
    required: !!o,
    validator: n || a ? (v) => {
      let h = !1, y = [];
      if (n && (y = Array.from(n), Et(e, "default") && y.push(s), h || (h = y.includes(v))), a && (h || (h = a(v))), !h && y.length > 0) {
        const k = [...new Set(y)].map((N) => JSON.stringify(N)).join(", ");
        ao(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${k}], got value ${JSON.stringify(v)}.`);
      }
      return h;
    } : void 0,
    [xn]: !0
  };
  return Et(e, "default") && (g.default = s), g;
}, ye = (e) => Ks(Object.entries(e).map(([t, n]) => [
  t,
  Tn(n, t)
])), ma = ["", "default", "small", "large"], ya = Tn({
  type: String,
  values: ma,
  required: !1
}), wa = Symbol("size"), _a = Symbol("emptyValuesContextKey"), ba = ye({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => ze(e) ? !e() : !e
  }
}), Zt = (e) => Object.keys(e), Ge = x();
function In(e, t = void 0) {
  return pe() ? X(cn, Ge) : Ge;
}
function Nn(e, t) {
  const n = In(), o = ht(e, _(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.namespace) || We;
  })), s = va(_(() => {
    var u;
    return (u = n.value) == null ? void 0 : u.locale;
  })), i = ca(_(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.zIndex) || Sn;
  })), a = _(() => {
    var u;
    return r(t) || ((u = n.value) == null ? void 0 : u.size) || "";
  });
  return zn(_(() => r(n) || {})), {
    ns: o,
    locale: s,
    zIndex: i,
    size: a
  };
}
const zn = (e, t, n = !1) => {
  var o;
  const s = !!pe(), i = s ? In() : void 0, a = (o = void 0) != null ? o : s ? io : void 0;
  if (!a)
    return;
  const u = _(() => {
    const g = r(e);
    return i?.value ? Ca(i.value, g) : g;
  });
  return a(cn, u), a(kn, _(() => u.value.locale)), a(dn, _(() => u.value.namespace)), a(On, _(() => u.value.zIndex)), a(wa, {
    size: _(() => u.value.size || "")
  }), a(_a, _(() => ({
    emptyValues: u.value.emptyValues,
    valueOnClear: u.value.valueOnClear
  }))), (n || !Ge.value) && (Ge.value = u.value), u;
}, Ca = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Zt(e), ...Zt(t)])], o = {};
  for (const s of n)
    o[s] = t[s] !== void 0 ? t[s] : e[s];
  return o;
};
var Qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
};
function dt(e, t = "px") {
  if (!e)
    return "";
  if (se(e) || Zs(e))
    return `${e}${t}`;
  if (ne(e))
    return e;
}
const $n = (e, t) => (e.install = (n) => {
  for (const o of [e, ...Object.values({})])
    n.component(o.name, o);
}, e), Pn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Sa = ye({
  size: {
    type: D([Number, String])
  },
  color: {
    type: String
  }
}), Oa = M({
  name: "ElIcon",
  inheritAttrs: !1
}), ka = /* @__PURE__ */ M({
  ...Oa,
  props: Sa,
  setup(e) {
    const t = e, n = ht("icon"), o = _(() => {
      const { size: s, color: i } = t;
      return !s && !i ? {} : {
        fontSize: yn(s) ? void 0 : dt(s),
        "--color": i
      };
    });
    return (s, i) => (C(), I("i", ro({
      class: r(n).b(),
      style: r(o)
    }, s.$attrs), [
      fe(s.$slots, "default")
    ], 16));
  }
});
var xa = /* @__PURE__ */ Qe(ka, [["__file", "icon.vue"]]);
const Ve = $n(xa);
/*! Element Plus Icons Vue v2.3.1 */
var Ta = /* @__PURE__ */ M({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ia = Ta, Na = /* @__PURE__ */ M({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), En = Na, za = /* @__PURE__ */ M({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), $a = za, Pa = /* @__PURE__ */ M({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ea = Pa, Ma = /* @__PURE__ */ M({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (C(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      d("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), La = Ma;
const Mn = D([
  String,
  Object,
  Function
]), Da = {
  Close: En
}, Fa = {
  Close: En
}, qe = {
  success: Ea,
  warning: La,
  error: Ia,
  info: $a
}, Ra = (e) => e, je = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Aa = ye({
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
    type: D([String, Object, Array])
  },
  offset: {
    type: D(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Wa = M({
  name: "ElBadge"
}), ja = /* @__PURE__ */ M({
  ...Wa,
  props: Aa,
  setup(e, { expose: t }) {
    const n = e, o = ht("badge"), s = _(() => n.isDot ? "" : se(n.value) && se(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), i = _(() => {
      var a, u, g, v, h;
      return [
        {
          backgroundColor: n.color,
          marginRight: dt(-((u = (a = n.offset) == null ? void 0 : a[0]) != null ? u : 0)),
          marginTop: dt((v = (g = n.offset) == null ? void 0 : g[1]) != null ? v : 0)
        },
        (h = n.badgeStyle) != null ? h : {}
      ];
    });
    return t({
      content: s
    }), (a, u) => (C(), I("div", {
      class: z(r(o).b())
    }, [
      fe(a.$slots, "default"),
      F(ft, {
        name: `${r(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ee(() => [
          te(d("sup", {
            class: z([
              r(o).e("content"),
              r(o).em("content", a.type),
              r(o).is("fixed", !!a.$slots.default),
              r(o).is("dot", a.isDot),
              r(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Ie(r(i))
          }, [
            fe(a.$slots, "content", { value: r(s) }, () => [
              en(E(r(s)), 1)
            ])
          ], 6), [
            [Be, !a.hidden && (r(s) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ba = /* @__PURE__ */ Qe(ja, [["__file", "badge.vue"]]);
const Ha = $n(Ba), Ua = ye({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: D(Object)
  },
  size: ya,
  button: {
    type: D(Object)
  },
  experimentalFeatures: {
    type: D(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: D(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...ba
}), j = {};
M({
  name: "ElConfigProvider",
  props: Ua,
  setup(e, { slots: t }) {
    Pe(() => e.message, (o) => {
      Object.assign(j, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = zn(e);
    return () => fe(t, "default", { config: n?.value });
  }
});
const Ln = ["success", "info", "warning", "error"], $ = Ra({
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
}), Ga = ye({
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
    type: Mn,
    default: $.icon
  },
  id: {
    type: String,
    default: $.id
  },
  message: {
    type: D([
      String,
      Object,
      Function
    ]),
    default: $.message
  },
  onClose: {
    type: D(Function),
    default: $.onClose
  },
  showClose: {
    type: Boolean,
    default: $.showClose
  },
  type: {
    type: String,
    values: Ln,
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
}), Va = {
  destroy: () => !0
}, B = lo([]), qa = (e) => {
  const t = B.findIndex((s) => s.id === e), n = B[t];
  let o;
  return t > 0 && (o = B[t - 1]), { current: n, prev: o };
}, Ka = (e) => {
  const { prev: t } = qa(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Za = (e, t) => B.findIndex((o) => o.id === e) > 0 ? 16 : t, Ja = M({
  name: "ElMessage"
}), Ya = /* @__PURE__ */ M({
  ...Ja,
  props: Ga,
  emits: Va,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Fa, { ns: s, zIndex: i } = Nn("message"), { currentZIndex: a, nextZIndex: u } = i, g = x(), v = x(!1), h = x(0);
    let y;
    const k = _(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), N = _(() => {
      const T = n.type;
      return { [s.bm("icon", T)]: T && qe[T] };
    }), O = _(() => n.icon || qe[n.type] || ""), p = _(() => Ka(n.id)), m = _(() => Za(n.id, n.offset) + p.value), w = _(() => h.value + m.value), Y = _(() => ({
      top: `${m.value}px`,
      zIndex: a.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: y } = wn(() => {
        U();
      }, n.duration));
    }
    function A() {
      y?.();
    }
    function U() {
      v.value = !1;
    }
    function Xe({ code: T }) {
      T === je.esc && U();
    }
    return Ze(() => {
      b(), u(), v.value = !0;
    }), Pe(() => n.repeatNum, () => {
      A(), b();
    }), Cn(document, "keydown", Xe), sa(g, () => {
      h.value = g.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: w,
      close: U
    }), (T, bt) => (C(), Z(ft, {
      name: r(s).b("fade"),
      onBeforeLeave: T.onClose,
      onAfterLeave: (Ct) => T.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        te(d("div", {
          id: T.id,
          ref_key: "messageRef",
          ref: g,
          class: z([
            r(s).b(),
            { [r(s).m(T.type)]: T.type },
            r(s).is("center", T.center),
            r(s).is("closable", T.showClose),
            r(s).is("plain", T.plain),
            T.customClass
          ]),
          style: Ie(r(Y)),
          role: "alert",
          onMouseenter: A,
          onMouseleave: b
        }, [
          T.repeatNum > 1 ? (C(), Z(r(Ha), {
            key: 0,
            value: T.repeatNum,
            type: r(k),
            class: z(r(s).e("badge"))
          }, null, 8, ["value", "type", "class"])) : V("v-if", !0),
          r(O) ? (C(), Z(r(Ve), {
            key: 1,
            class: z([r(s).e("icon"), r(N)])
          }, {
            default: ee(() => [
              (C(), Z(tn(r(O))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          fe(T.$slots, "default", {}, () => [
            T.dangerouslyUseHTMLString ? (C(), I(Oe, { key: 1 }, [
              V(" Caution here, message could've been compromised, never use user's input as message "),
              d("p", {
                class: z(r(s).e("content")),
                innerHTML: T.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (C(), I("p", {
              key: 0,
              class: z(r(s).e("content"))
            }, E(T.message), 3))
          ]),
          T.showClose ? (C(), Z(r(Ve), {
            key: 2,
            class: z(r(s).e("closeBtn")),
            onClick: ke(U, ["stop"])
          }, {
            default: ee(() => [
              F(r(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : V("v-if", !0)
        ], 46, ["id"]), [
          [Be, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Qa = /* @__PURE__ */ Qe(Ya, [["__file", "message.vue"]]);
let Xa = 1;
const Dn = (e) => {
  const t = !e || ne(e) || Ne(e) || ze(e) ? { message: e } : e, n = {
    ...$,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ne(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    ct(o) || (o = document.body), n.appendTo = o;
  }
  return Rt(j.grouping) && !n.grouping && (n.grouping = j.grouping), se(j.duration) && n.duration === 3e3 && (n.duration = j.duration), se(j.offset) && n.offset === 16 && (n.offset = j.offset), Rt(j.showClose) && !n.showClose && (n.showClose = j.showClose), n;
}, ei = (e) => {
  const t = B.indexOf(e);
  if (t === -1)
    return;
  B.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ti = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Xa++}`, s = t.onClose, i = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      s?.(), ei(h);
    },
    onDestroy: () => {
      He(null, i);
    }
  }, u = F(Qa, a, ze(a.message) || Ne(a.message) ? {
    default: ze(a.message) ? a.message : () => a.message
  } : null);
  u.appContext = n || ve._context, He(u, i), e.appendChild(i.firstElementChild);
  const g = u.component, h = {
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
  return h;
}, ve = (e = {}, t) => {
  if (!ie)
    return { close: () => {
    } };
  const n = Dn(e);
  if (n.grouping && B.length) {
    const s = B.find(({ vnode: i }) => {
      var a;
      return ((a = i.props) == null ? void 0 : a.message) === n.message;
    });
    if (s)
      return s.props.repeatNum += 1, s.props.type = n.type, s.handler;
  }
  if (se(j.max) && B.length >= j.max)
    return { close: () => {
    } };
  const o = ti(n, t);
  return B.push(o), o.handler;
};
Ln.forEach((e) => {
  ve[e] = (t = {}, n) => {
    const o = Dn(t);
    return ve({ ...o, type: e }, n);
  };
});
function ni(e) {
  for (const t of B)
    (!e || e === t.props.type) && t.handler.close();
}
ve.closeAll = ni;
ve._context = null;
const oi = Pn(ve, "$message"), Fn = [
  "success",
  "info",
  "warning",
  "error"
], si = ye({
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
    type: Mn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: D([
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
    type: D(Function),
    default: () => {
    }
  },
  onClose: {
    type: D(Function),
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
    values: [...Fn, ""],
    default: ""
  },
  zIndex: Number
}), ai = {
  destroy: () => !0
}, ii = M({
  name: "ElNotification"
}), ri = /* @__PURE__ */ M({
  ...ii,
  props: si,
  emits: ai,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: s } = Nn("notification"), { nextZIndex: i, currentZIndex: a } = s, { Close: u } = Da, g = x(!1);
    let v;
    const h = _(() => {
      const b = n.type;
      return b && qe[n.type] ? o.m(b) : "";
    }), y = _(() => n.type && qe[n.type] || n.icon), k = _(() => n.position.endsWith("right") ? "right" : "left"), N = _(() => n.position.startsWith("top") ? "top" : "bottom"), O = _(() => {
      var b;
      return {
        [N.value]: `${n.offset}px`,
        zIndex: (b = n.zIndex) != null ? b : a.value
      };
    });
    function p() {
      n.duration > 0 && ({ stop: v } = wn(() => {
        g.value && w();
      }, n.duration));
    }
    function m() {
      v?.();
    }
    function w() {
      g.value = !1;
    }
    function Y({ code: b }) {
      b === je.delete || b === je.backspace ? m() : b === je.esc ? g.value && w() : p();
    }
    return Ze(() => {
      p(), i(), g.value = !0;
    }), Cn(document, "keydown", Y), t({
      visible: g,
      close: w
    }), (b, A) => (C(), Z(ft, {
      name: r(o).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (U) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        te(d("div", {
          id: b.id,
          class: z([r(o).b(), b.customClass, r(k)]),
          style: Ie(r(O)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: p,
          onClick: b.onClick
        }, [
          r(y) ? (C(), Z(r(Ve), {
            key: 0,
            class: z([r(o).e("icon"), r(h)])
          }, {
            default: ee(() => [
              (C(), Z(tn(r(y))))
            ]),
            _: 1
          }, 8, ["class"])) : V("v-if", !0),
          d("div", {
            class: z(r(o).e("group"))
          }, [
            d("h2", {
              class: z(r(o).e("title")),
              textContent: E(b.title)
            }, null, 10, ["textContent"]),
            te(d("div", {
              class: z(r(o).e("content")),
              style: Ie(b.title ? void 0 : { margin: 0 })
            }, [
              fe(b.$slots, "default", {}, () => [
                b.dangerouslyUseHTMLString ? (C(), I(Oe, { key: 1 }, [
                  V(" Caution here, message could've been compromised, never use user's input as message "),
                  d("p", { innerHTML: b.message }, null, 8, ["innerHTML"])
                ], 2112)) : (C(), I("p", { key: 0 }, E(b.message), 1))
              ])
            ], 6), [
              [Be, b.message]
            ]),
            b.showClose ? (C(), Z(r(Ve), {
              key: 0,
              class: z(r(o).e("closeBtn")),
              onClick: ke(w, ["stop"])
            }, {
              default: ee(() => [
                F(r(u))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : V("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Be, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var li = /* @__PURE__ */ Qe(ri, [["__file", "notification.vue"]]);
const Ke = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, pt = 16;
let ui = 1;
const ge = function(e = {}, t) {
  if (!ie)
    return { close: () => {
    } };
  (ne(e) || Ne(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Ke[n].forEach(({ vm: h }) => {
    var y;
    o += (((y = h.el) == null ? void 0 : y.offsetHeight) || 0) + pt;
  }), o += pt;
  const s = `notification_${ui++}`, i = e.onClose, a = {
    ...e,
    offset: o,
    id: s,
    onClose: () => {
      ci(s, n, i);
    }
  };
  let u = document.body;
  ct(e.appendTo) ? u = e.appendTo : ne(e.appendTo) && (u = document.querySelector(e.appendTo)), ct(u) || (u = document.body);
  const g = document.createElement("div"), v = F(li, a, ze(a.message) ? a.message : Ne(a.message) ? () => a.message : null);
  return v.appContext = yn(t) ? ge._context : t, v.props.onDestroy = () => {
    He(null, g);
  }, He(v, g), Ke[n].push({ vm: v }), u.appendChild(g.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Fn.forEach((e) => {
  ge[e] = (t = {}, n) => ((ne(t) || Ne(t)) && (t = {
    message: t
  }), ge({ ...t, type: e }, n));
});
function ci(e, t, n) {
  const o = Ke[t], s = o.findIndex(({ vm: v }) => {
    var h;
    return ((h = v.component) == null ? void 0 : h.props.id) === e;
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
      const { el: h, component: y } = o[v].vm, k = Number.parseInt(h.style[u], 10) - a - pt;
      y.props.offset = k;
    }
}
function di() {
  for (const e of Object.values(Ke))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ge.closeAll = di;
ge._context = null;
const pi = Pn(ge, "$notify"), rt = {
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
    o === "center" ? oi({
      message: t,
      type: n,
      duration: s,
      showClose: i,
      grouping: !0
    }) : pi({
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
}, lt = "[screen-recorder]", fi = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, H = async (e, t) => {
  const n = performance.now(), o = fi(t);
  console.info(`${lt} invoke:start ${e}`, o ?? "");
  try {
    const s = await l(e, t);
    return console.info(`${lt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: s
    }), s;
  } catch (s) {
    throw console.error(`${lt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: s
    }), s;
  }
}, hi = () => H("screen_recorder_get_ffmpeg_status"), ce = (e) => H("screen_recorder_set_capture_excluded", { excluded: e }), Se = (e) => H("screen_recorder_set_passthrough_region", { region: e }), vi = () => H("screen_recorder_pick_target_window"), gi = () => H("screen_recorder_close_window"), mi = (e, t) => H("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4" && t.audio
}), yi = () => H("screen_recorder_pause_recording"), wi = (e, t) => H("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4" && t.audio
}), _i = () => H("screen_recorder_stop_recording"), bi = () => H("screen_recorder_cancel_recording"), Ci = (e) => H("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath
}), Jt = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), P = "[screen-recorder]";
function Si() {
  const e = x("selecting"), t = x(Jt()), n = x(null), o = x(null), s = x(""), i = x(null), a = x(0), u = x(0), g = x(null), v = () => {
    u.value = e.value === "recording" && i.value !== null ? a.value + Date.now() - i.value : a.value;
  }, h = () => {
    g.value !== null && (window.clearInterval(g.value), g.value = null);
  }, y = () => {
    h(), v(), g.value = window.setInterval(() => {
      v();
    }, 250);
  }, k = async () => (console.info(`${P} refresh ffmpeg status`), n.value = await hi(), console.info(`${P} ffmpeg status`, n.value), n.value), N = async (A) => {
    s.value = "", o.value = null, console.info(`${P} begin requested`, { region: A, settings: t.value });
    const U = n.value ?? await k();
    if (!U.available)
      throw new Error(U.message || "FFmpeg unavailable");
    await mi(A, t.value), e.value = "recording", a.value = 0, u.value = 0, i.value = Date.now(), y(), console.info(`${P} recording started`, { status: e.value });
  }, O = async () => {
    e.value === "recording" && (console.info(`${P} pause requested`, { elapsedMs: u.value }), v(), a.value = u.value, i.value = null, h(), await yi(), e.value = "paused", console.info(`${P} recording paused`, { accumulatedMs: a.value }));
  }, p = async (A) => {
    e.value === "paused" && (console.info(`${P} resume requested`, { region: A, settings: t.value }), await wi(A, t.value), e.value = "recording", i.value = Date.now(), y(), console.info(`${P} recording resumed`));
  }, m = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${P} stop requested`, { status: e.value, elapsedMs: u.value }), v(), a.value = u.value, i.value = null, h(), await _i(), e.value = "exporting", console.info(`${P} recording stopped`, { accumulatedMs: a.value }));
  }, w = async () => (console.info(`${P} export requested`, { settings: t.value }), e.value = "exporting", o.value = await Ci(t.value), e.value = "completed", console.info(`${P} export completed`, o.value), o.value), Y = async () => {
    console.info(`${P} cancel requested`, { status: e.value, elapsedMs: u.value }), h(), await bi(), e.value = "selecting", i.value = null, a.value = 0, u.value = 0, o.value = null, console.info(`${P} canceled`);
  }, b = () => {
    console.info(`${P} reset session`), e.value = "selecting", i.value = null, a.value = 0, u.value = 0, o.value = null, s.value = "", t.value = Jt();
  };
  return nn(() => {
    h();
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
    cancel: Y,
    reset: b
  };
}
const Oi = { class: "screen-recorder" }, ki = ["onMousedown"], xi = { class: "window-title" }, Ti = { class: "capture-viewport" }, Ii = { class: "capture-frame" }, Ni = {
  key: 0,
  class: "result-preview"
}, zi = ["src"], $i = ["src"], Pi = { class: "control-strip" }, Ei = { class: "control-group control-group--tools" }, Mi = ["title", "disabled"], Li = { class: "select-field" }, Di = ["disabled"], Fi = ["disabled"], Ri = ["disabled"], Ai = { value: "high" }, Wi = { value: "standard" }, ji = { value: "small" }, Bi = { class: "dimension-group optional-size" }, Hi = { class: "dimension" }, Ui = ["value"], Gi = { class: "dimension" }, Vi = ["value"], qi = { class: "control-group control-group--actions" }, Ki = { class: "time" }, Zi = {
  key: 1,
  class: "save-status"
}, Ji = ["title"], Yi = ["disabled"], Qi = {
  key: 0,
  class: "warning"
}, W = "[screen-recorder]", Le = 80, Xi = 468, er = 300, Yt = 420, Qt = 260, Xt = 40, tr = 58, De = 8, Fe = 1, nr = /* @__PURE__ */ M({
  __name: "index",
  setup(e) {
    const t = rn(), n = x(null), o = x({ width: 0, height: 0 }), s = x(0), i = x(!1);
    let a = null, u = null, g = null, v = null, h = null, y = null, k = 0;
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
      elapsedMs: Y,
      refreshFfmpegStatus: b,
      begin: A,
      pause: U,
      resume: Xe,
      stop: T,
      exportFile: bt,
      cancel: Ct,
      reset: Rn
    } = Si(), re = _(() => O.value === "recording" || O.value === "paused" || O.value === "exporting"), le = _(() => p.value.audio && p.value.format === "mp4"), et = _(() => O.value === "completed" && w.value?.path ? ho(w.value.path) : ""), An = _(() => {
      const f = le.value && !i.value ? s.value : 0, c = (S, K) => Math.max(0.18, Math.min(1, S + f * K)).toFixed(3);
      return {
        "--bar-1": c(0.28, 0.64),
        "--bar-2": c(0.42, 0.78),
        "--bar-3": c(0.34, 0.94),
        "--bar-4": c(0.22, 0.72)
      };
    }), Wn = _(() => {
      if (p.value.format === "gif")
        return "GIF 不支持音频";
      if (i.value && p.value.audio)
        return "音频已开启，但无法读取实时音量；请检查系统录音权限或输入设备";
      if (w.value?.audioDevice)
        return `已录制音频：${w.value.audioDevice}`;
      if (w.value && !w.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (m.value?.available && !m.value.systemAudioAvailable) {
        const f = m.value.audioDevices?.join("、") || "无";
        return p.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${f}` : "录制音频已关闭";
      }
      return p.value.audio ? "录制音频已开启。系统声音需要启用“立体声混音/Loopback”等设备" : "录制音频已关闭";
    }), jn = _(() => {
      const f = Math.floor(Y.value / 1e3), c = Math.floor(f / 60).toString().padStart(2, "0"), S = (f % 60).toString().padStart(2, "0");
      return `${c}:${S}`;
    }), we = async (f) => {
      try {
        await f();
      } catch (c) {
        console.error(`${W} action failed`, c), rt.msg(c?.message || String(c), "error");
      }
    }, St = (f) => Math.max(2, Math.floor(Math.round(f) / 2) * 2), tt = async () => {
      const f = n.value;
      if (!f)
        throw new Error("录制视口尚未准备好");
      const c = f.getBoundingClientRect(), S = await t.scaleFactor(), K = await t.innerPosition(), J = St(c.width * S), nt = St(c.height * S);
      if (J < Le || nt < Le)
        throw new Error("录制区域太小，请放大录制窗口");
      const It = {
        x: c.left,
        y: c.top,
        width: J / S,
        height: nt / S,
        screenX: Math.round(K.x + c.left * S),
        screenY: Math.round(K.y + c.top * S),
        physicalWidth: J,
        physicalHeight: nt,
        scale: S
      };
      return console.info(`${W} capture region`, It), It;
    }, q = async () => {
      try {
        const f = await tt();
        o.value = {
          width: f.physicalWidth,
          height: f.physicalHeight
        }, await Se({
          x: Math.round(f.x * f.scale),
          y: Math.round(f.y * f.scale),
          width: f.physicalWidth,
          height: f.physicalHeight
        }).catch(() => {
        });
      } catch {
        o.value = { width: 0, height: 0 }, await Se(null).catch(() => {
        });
      }
    }, _e = async () => {
      await Se(null).catch(() => {
      });
    }, Ot = () => {
      window.setTimeout(() => {
        q();
      }, 120);
    }, Ee = async () => {
      k && (cancelAnimationFrame(k), k = 0), h = null, y = null, g?.getTracks().forEach((f) => f.stop()), g = null, v && (await v.close().catch(() => {
      }), v = null), s.value = 0;
    }, kt = () => {
      if (!h || !y) {
        k = 0;
        return;
      }
      h.getByteTimeDomainData(y);
      let f = 0;
      for (const K of y) {
        const J = (K - 128) / 128;
        f += J * J;
      }
      const c = Math.sqrt(f / y.length), S = Math.min(1, c * 8);
      s.value = s.value * 0.68 + S * 0.32, k = requestAnimationFrame(kt);
    }, be = async () => {
      if (!(!le.value || g || k)) {
        if (!navigator.mediaDevices?.getUserMedia) {
          i.value = !0, console.warn(`${W} audio meter unavailable: getUserMedia missing`);
          return;
        }
        try {
          console.info(`${W} audio meter starting`);
          const f = await navigator.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: !1,
              noiseSuppression: !1,
              autoGainControl: !1
            },
            video: !1
          });
          g = f, console.info(`${W} audio meter stream`, {
            tracks: f.getAudioTracks().map((c) => ({
              label: c.label,
              enabled: c.enabled,
              muted: c.muted,
              readyState: c.readyState
            }))
          }), v = new AudioContext(), h = v.createAnalyser(), h.fftSize = 512, h.smoothingTimeConstant = 0.75, y = new Uint8Array(h.fftSize), v.createMediaStreamSource(f).connect(h), await v.resume().catch(() => {
          }), i.value = !1, kt();
        } catch (f) {
          console.error(`${W} audio meter failed`, f), i.value = !0, await Ee();
        }
      }
    }, Bn = async (f) => {
      f.button !== 0 || re.value || (await _e(), await t.startDragging().catch((c) => {
        rt.msg(c?.message || String(c), "error");
      }), Ot());
    }, Hn = async (f) => {
      re.value || (await _e(), await t.startResizeDragging(f).catch((c) => {
        rt.msg(c?.message || String(c), "error");
      }), Ot());
    }, Un = () => we(async () => {
      console.info(`${W} handle start`), await be(), await ce(!0).catch(() => {
      }), await q(), await A(await tt());
    }), Gn = () => we(async () => {
      console.info(`${W} handle pause`), await U();
    }), Vn = () => we(async () => {
      console.info(`${W} handle resume`), await Xe(await tt());
    }), qn = () => we(async () => {
      console.info(`${W} handle stop/export`), await T(), await bt(), await _e(), await ce(!1).catch(() => {
      });
    }), Kn = () => {
      _e(), Rn(), O.value = "ready", w.value = null, ce(!0).catch(() => {
      }), t.setSize(new xe(Xi, er)), Re(q), be();
    }, Zn = () => {
      re.value || p.value.format === "gif" || (p.value.audio = !p.value.audio, console.info(`${W} audio toggled`, { audio: p.value.audio }), p.value.audio ? be() : Ee());
    }, Jn = async (f) => {
      const S = (await bo(f.screenX, f.screenY))?.scaleFactor || await t.scaleFactor(), K = Math.max(
        Yt,
        f.physicalWidth / S + De * 2 + Fe * 2
      ), J = Math.max(
        Qt,
        f.physicalHeight / S + Xt + tr + De * 2 + Fe * 2
      );
      await t.setPosition(new G(
        Math.round(f.screenX - (De + Fe) * S),
        Math.round(f.screenY - (Xt + De + Fe) * S)
      )), await t.setSize(new xe(Math.round(K), Math.round(J))), await Re(), await q();
    }, Yn = () => we(async () => {
      await _e();
      const f = await vi();
      await Jn(f);
    }), Qn = async () => {
      await t.minimize();
    }, xt = async () => {
      try {
        await Ct(), await Se(null).catch(() => {
        }), await ce(!1).catch(() => {
        });
      } catch {
      }
      await gi();
    }, Xn = async () => {
      w.value && await l("open_file_with_default_app", { filePath: w.value.path });
    }, eo = async () => {
      w.value && await l("show_file_in_folder", { filePath: w.value.path });
    }, Tt = (f) => {
      f.key === "Escape" && (f.preventDefault(), xt());
    };
    return Ze(async () => {
      O.value = "ready", await t.setMinSize(new xe(Yt, Qt)).catch(() => {
      }), await ce(!0).catch(() => {
      }), await t.emit("screen_recorder_ready"), await b().catch(() => {
      }), await Re(), await q(), await be(), n.value && (a = new ResizeObserver(() => {
        q();
      }), a.observe(n.value)), u = await t.onMoved(() => {
        q();
      }).catch(() => null), window.addEventListener("resize", q), window.addEventListener("keydown", Tt);
    }), Pe(le, (f) => {
      f ? be() : Ee();
    }), nn(() => {
      a?.disconnect(), u?.(), window.removeEventListener("resize", q), window.removeEventListener("keydown", Tt), Se(null).catch(() => {
      }), ce(!1).catch(() => {
      }), Ee();
    }), (f, c) => (C(), I("div", Oi, [
      d(
        "div",
        {
          class: z(["recorder-shell", { recording: r(O) === "recording", paused: r(O) === "paused" }])
        },
        [
          (C(), I(
            Oe,
            null,
            uo(N, (S) => d("span", {
              key: S.className,
              class: z(["resize-zone", S.className]),
              onMousedown: ke((K) => Hn(S.direction), ["prevent"])
            }, null, 42, ki)),
            64
            /* STABLE_FRAGMENT */
          )),
          d(
            "header",
            {
              class: "title-bar",
              onMousedown: Bn
            },
            [
              d(
                "span",
                xi,
                E(f.$t("screenRecorder.title") || "自定义录屏"),
                1
                /* TEXT */
              ),
              d(
                "div",
                {
                  class: "window-actions",
                  onMousedown: c[0] || (c[0] = ke(() => {
                  }, ["stop"]))
                },
                [
                  d("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: Qn
                  }, [
                    F(r(To), {
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
                    onClick: xt
                  }, [
                    F(r(xo), {
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
          d("main", Ti, [
            c[9] || (c[9] = d(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            c[10] || (c[10] = d(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            c[11] || (c[11] = d(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            c[12] || (c[12] = d(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            d("div", Ii, [
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
              et.value ? (C(), I("div", Ni, [
                r(w)?.format === "mp4" ? (C(), I("video", {
                  key: 0,
                  src: et.value,
                  controls: "",
                  playsinline: "",
                  preload: "metadata"
                }, null, 8, zi)) : (C(), I("img", {
                  key: 1,
                  src: et.value,
                  alt: ""
                }, null, 8, $i))
              ])) : V("v-if", !0),
              c[5] || (c[5] = d(
                "span",
                { class: "viewport-border top" },
                null,
                -1
                /* HOISTED */
              )),
              c[6] || (c[6] = d(
                "span",
                { class: "viewport-border right" },
                null,
                -1
                /* HOISTED */
              )),
              c[7] || (c[7] = d(
                "span",
                { class: "viewport-border bottom" },
                null,
                -1
                /* HOISTED */
              )),
              c[8] || (c[8] = d(
                "span",
                { class: "viewport-border left" },
                null,
                -1
                /* HOISTED */
              ))
            ])
          ]),
          d("footer", Pi, [
            d("div", Ei, [
              r(O) === "ready" || r(O) === "completed" ? (C(), I(
                "button",
                {
                  key: 0,
                  class: "icon-control snap-control",
                  title: "拖到目标窗口并松开以对齐",
                  onMousedown: ke(Yn, ["prevent"])
                },
                " ◎ ",
                32
                /* NEED_HYDRATION */
              )) : V("v-if", !0),
              d("button", {
                class: z(["audio-meter", { active: le.value && s.value > 0.03, metering: le.value && !i.value, muted: !le.value || i.value }]),
                title: Wn.value,
                disabled: r(O) === "exporting" || r(p).format === "gif",
                onClick: Zn
              }, [
                d(
                  "span",
                  {
                    class: "audio-bars",
                    style: Ie(An.value)
                  },
                  c[13] || (c[13] = [
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
              ], 10, Mi),
              d("label", Li, [
                te(d("select", {
                  "onUpdate:modelValue": c[1] || (c[1] = (S) => r(p).fps = S),
                  disabled: re.value
                }, c[14] || (c[14] = [
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
                ]), 8, Di), [
                  [ot, r(p).fps]
                ]),
                c[15] || (c[15] = d(
                  "span",
                  { class: "unit" },
                  "fps",
                  -1
                  /* HOISTED */
                ))
              ]),
              te(d("select", {
                "onUpdate:modelValue": c[2] || (c[2] = (S) => r(p).format = S),
                class: "format-select optional-format",
                disabled: re.value
              }, c[16] || (c[16] = [
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
              ]), 8, Fi), [
                [ot, r(p).format]
              ]),
              te(d("select", {
                "onUpdate:modelValue": c[3] || (c[3] = (S) => r(p).quality = S),
                class: "quality-select optional-quality",
                disabled: re.value
              }, [
                d(
                  "option",
                  Ai,
                  E(f.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                d(
                  "option",
                  Wi,
                  E(f.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                d(
                  "option",
                  ji,
                  E(f.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, Ri), [
                [ot, r(p).quality]
              ]),
              d("div", Bi, [
                d("label", Hi, [
                  d("input", {
                    value: o.value.width,
                    readonly: ""
                  }, null, 8, Ui)
                ]),
                c[17] || (c[17] = d(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                d("label", Gi, [
                  d("input", {
                    value: o.value.height,
                    readonly: ""
                  }, null, 8, Vi)
                ]),
                c[18] || (c[18] = d(
                  "span",
                  { class: "unit" },
                  "px",
                  -1
                  /* HOISTED */
                ))
              ])
            ]),
            d("div", qi, [
              r(O) === "recording" || r(O) === "paused" ? (C(), I(
                Oe,
                { key: 0 },
                [
                  d(
                    "span",
                    Ki,
                    E(jn.value),
                    1
                    /* TEXT */
                  ),
                  d(
                    "button",
                    {
                      class: "control-button",
                      onClick: c[4] || (c[4] = (S) => r(O) === "paused" ? Vn() : Gn())
                    },
                    E(r(O) === "paused" ? f.$t("screenRecorder.resume") : f.$t("screenRecorder.pause")),
                    1
                    /* TEXT */
                  ),
                  d(
                    "button",
                    {
                      class: "control-button danger",
                      onClick: qn
                    },
                    E(f.$t("screenRecorder.stop")),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : r(O) === "exporting" ? (C(), I(
                "span",
                Zi,
                E(f.$t("screenRecorder.exporting") || "正在导出..."),
                1
                /* TEXT */
              )) : r(O) === "completed" && r(w) ? (C(), I(
                Oe,
                { key: 2 },
                [
                  d("span", {
                    class: "save-status optional-save-status",
                    title: r(w).path
                  }, E(r(w).hasAudio ? "已保存·有声" : "已保存·无声"), 9, Ji),
                  d("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: Xn
                  }, "打开"),
                  d("button", {
                    class: "control-button",
                    title: "打开所在文件夹",
                    onClick: eo
                  }, "文件夹"),
                  d("button", {
                    class: "control-button",
                    title: "重新录制",
                    onClick: Kn
                  }, "重录")
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (C(), I("button", {
                key: 3,
                class: "record-button",
                disabled: r(m)?.available === !1 || o.value.width < Le || o.value.height < Le,
                onClick: Un
              }, [
                c[19] || (c[19] = d(
                  "span",
                  null,
                  null,
                  -1
                  /* HOISTED */
                )),
                en(
                  " " + E(f.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, Yi))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      r(m) && !r(m).available ? (C(), I(
        "p",
        Qi,
        E(r(m).message || f.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : V("v-if", !0)
    ]));
  }
}), or = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, sr = /* @__PURE__ */ or(nr, [["__scopeId", "data-v-024e1ccb"]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr
}, Symbol.toStringTag, { value: "Module" }));
export {
  rr as activate
};
