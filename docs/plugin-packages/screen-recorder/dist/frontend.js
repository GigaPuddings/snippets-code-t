import { inject as oe, createVNode as P, getCurrentInstance as _e, ref as x, computed as w, unref as c, readonly as ws, getCurrentScope as bs, onScopeDispose as _s, onMounted as st, nextTick as we, watch as Ce, isRef as Cs, warn as xs, provide as Ss, defineComponent as F, createElementBlock as z, openBlock as S, mergeProps as ks, renderSlot as xe, createElementVNode as u, normalizeClass as N, Transition as _t, withCtx as ae, withDirectives as ie, normalizeStyle as re, createTextVNode as Os, toDisplayString as E, vShow as Ze, shallowReactive as Ms, createBlock as ee, createCommentVNode as te, resolveDynamicComponent as gn, Fragment as be, withModifiers as $e, isVNode as Ee, render as Ye, onUnmounted as vn, renderList as Is, vModelSelect as dt } from "vue";
const Or = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => Sr)
  });
};
function Ts(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Ps(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ge;
const G = "__TAURI_TO_IPC_KEY__";
function zs(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Ns {
  get rid() {
    return Ts(this, Ge, "f");
  }
  constructor(t) {
    Ge.set(this, void 0), Ps(this, Ge, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return d("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ge = /* @__PURE__ */ new WeakMap();
class Ct {
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
  [G]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[G]();
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
    return new Ct(this.width / t, this.height / t);
  }
  [G]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[G]();
  }
}
class ye {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ct ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof le ? this.size : this.size.toPhysical(t);
  }
  [G]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[G]();
  }
}
class yn {
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
    return new Q(this.x * t, this.y * t);
  }
  [G]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[G]();
  }
}
class Q {
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
    return new yn(this.x / t, this.y / t);
  }
  [G]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[G]();
  }
}
class He {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof yn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Q ? this.position : this.position.toPhysical(t);
  }
  [G]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[G]();
  }
}
var H;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(H || (H = {}));
async function mn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Je(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: o,
    handler: zs(t)
  }).then((l) => async () => mn(e, l));
}
async function $s(e, t, n) {
  return Je(e, (s) => {
    mn(e, s.id), t(s);
  }, n);
}
async function Ls(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function Es(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Le extends Ns {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, s) {
    return d("plugin:image|new", {
      rgba: Xe(t),
      width: n,
      height: s
    }).then((o) => new Le(o));
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
    return d("plugin:image|from_bytes", {
      bytes: Xe(t)
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
    return d("plugin:image|from_path", { path: t }).then((n) => new Le(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return d("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return d("plugin:image|size", { rid: this.rid });
  }
}
function Xe(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Le ? e.rid : e;
}
var yt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(yt || (yt = {}));
class Rs {
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
var Vt;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Vt || (Vt = {}));
function wn() {
  return new bn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function pt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new bn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ht = ["tauri://created", "tauri://error"];
class bn {
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
    var s;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || d("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (s = n.parent) === null || s === void 0 ? void 0 : s.label,
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
    return (n = (await pt()).find((s) => s.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return wn();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return pt();
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
    for (const t of await pt())
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : Je(t, n, {
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
      const s = this.listeners[t];
      s.splice(s.indexOf(n), 1);
    } : $s(t, n, {
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
    if (ht.includes(t)) {
      for (const s of this.listeners[t] || [])
        s({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Ls(t, n);
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
  async emitTo(t, n, s) {
    if (ht.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: s
        });
      return;
    }
    return Es(t, n, s);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ht.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return d("plugin:window|scale_factor", {
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
    return d("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Q(t));
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
    return d("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Q(t));
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
    return d("plugin:window|inner_size", {
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
    return d("plugin:window|outer_size", {
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
    return d("plugin:window|is_fullscreen", {
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
    return d("plugin:window|is_minimized", {
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
    return d("plugin:window|is_maximized", {
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
    return d("plugin:window|is_focused", {
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
    return d("plugin:window|is_decorated", {
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
    return d("plugin:window|is_resizable", {
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
    return d("plugin:window|is_maximizable", {
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
    return d("plugin:window|is_minimizable", {
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
    return d("plugin:window|is_closable", {
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
    return d("plugin:window|is_visible", {
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
    return d("plugin:window|title", {
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
    return d("plugin:window|theme", {
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
    return d("plugin:window|is_always_on_top", {
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
    return d("plugin:window|center", {
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
    return t && (t === yt.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), d("plugin:window|request_user_attention", {
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
    return d("plugin:window|set_resizable", {
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
    return d("plugin:window|set_enabled", {
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
    return d("plugin:window|is_enabled", {
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
    return d("plugin:window|set_maximizable", {
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
    return d("plugin:window|set_minimizable", {
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
    return d("plugin:window|set_closable", {
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
    return d("plugin:window|set_title", {
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
    return d("plugin:window|maximize", {
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
    return d("plugin:window|unmaximize", {
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
    return d("plugin:window|toggle_maximize", {
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
    return d("plugin:window|minimize", {
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
    return d("plugin:window|unminimize", {
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
    return d("plugin:window|show", {
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
    return d("plugin:window|hide", {
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
    return d("plugin:window|close", {
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
    return d("plugin:window|destroy", {
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
    return d("plugin:window|set_decorations", {
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
    return d("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return d("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return d("plugin:window|set_effects", {
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
    return d("plugin:window|set_always_on_top", {
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
    return d("plugin:window|set_always_on_bottom", {
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
    return d("plugin:window|set_content_protected", {
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
    return d("plugin:window|set_size", {
      label: this.label,
      value: t instanceof ye ? t : new ye(t)
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
    return d("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof ye ? t : t ? new ye(t) : null
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
    return d("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof ye ? t : t ? new ye(t) : null
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
    function n(s) {
      return s ? { Logical: s } : null;
    }
    return d("plugin:window|set_size_constraints", {
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
    return d("plugin:window|set_position", {
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
    return d("plugin:window|set_fullscreen", {
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
    return d("plugin:window|set_focus", {
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
    return d("plugin:window|set_icon", {
      label: this.label,
      value: Xe(t)
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
    return d("plugin:window|set_skip_taskbar", {
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
    return d("plugin:window|set_cursor_grab", {
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
    return d("plugin:window|set_cursor_visible", {
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
    return d("plugin:window|set_cursor_icon", {
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
    return d("plugin:window|set_background_color", { color: t });
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
    return d("plugin:window|set_cursor_position", {
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
    return d("plugin:window|set_ignore_cursor_events", {
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
    return d("plugin:window|start_dragging", {
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
    return d("plugin:window|start_resize_dragging", {
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
    return d("plugin:window|set_badge_count", {
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
    return d("plugin:window|set_badge_label", {
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
    return d("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Xe(t) : void 0
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
    return d("plugin:window|set_progress_bar", {
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
    return d("plugin:window|set_visible_on_all_workspaces", {
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
    return d("plugin:window|set_title_bar_style", {
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
    return d("plugin:window|set_theme", {
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
    return this.listen(H.WINDOW_RESIZED, (n) => {
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
    return this.listen(H.WINDOW_MOVED, (n) => {
      n.payload = new Q(n.payload), t(n);
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
    return this.listen(H.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new Rs(n);
      await t(s), s.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(H.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new Q(i.payload.position)
        }
      });
    }), s = await this.listen(H.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new Q(i.payload.position)
        }
      });
    }), o = await this.listen(H.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new Q(i.payload.position)
        }
      });
    }), l = await this.listen(H.DRAG_LEAVE, (i) => {
      t({ ...i, payload: { type: "leave" } });
    });
    return () => {
      n(), o(), s(), l();
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
    const n = await this.listen(H.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(H.WINDOW_BLUR, (o) => {
      t({ ...o, payload: !1 });
    });
    return () => {
      n(), s();
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
    return this.listen(H.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(H.WINDOW_THEME_CHANGED, t);
  }
}
var Ut;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Ut || (Ut = {}));
var Gt;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Gt || (Gt = {}));
var qt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(qt || (qt = {}));
function Ds(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Q(e.position),
    size: new le(e.size)
  };
}
async function Fs(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Ds);
}
var Ws = {
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
function As() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function js(e, t, n) {
  var s = typeof t.fill == "string" ? [t.fill] : t.fill || [], o = [], l = t.theme || n.theme;
  switch (l) {
    case "outline":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("none"), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("none");
      break;
    case "filled":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push("#FFF"), o.push("#FFF");
      break;
    case "two-tone":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone), o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      o.push(typeof s[0] == "string" ? s[0] : "currentColor"), o.push(typeof s[1] == "string" ? s[1] : n.colors.multiColor.outFillColor), o.push(typeof s[2] == "string" ? s[2] : n.colors.multiColor.innerStrokeColor), o.push(typeof s[3] == "string" ? s[3] : n.colors.multiColor.innerFillColor);
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
var Bs = Symbol("icon-context");
function xt(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var i = As(), p = oe(Bs, Ws);
      return function() {
        var h = l.size, v = l.strokeWidth, f = l.strokeLinecap, _ = l.strokeLinejoin, O = l.theme, I = l.fill, U = l.spin, y = js(i, {
          size: h,
          strokeWidth: v,
          strokeLinecap: f,
          strokeLinejoin: _,
          theme: O,
          fill: I
        }, p), g = [p.prefix + "-icon"];
        return g.push(p.prefix + "-icon-" + e), U && g.push(p.prefix + "-icon-spin"), P("span", {
          class: g.join(" ")
        }, [n(y)]);
      };
    }
  };
  return s;
}
const Hs = xt("close-small", !1, function(e) {
  return P("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [P("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Vs = xt("minus", !1, function(e) {
  return P("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [P("path", {
    d: "M10.5 24L38.5 24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Us = xt("radar", !1, function(e) {
  return P("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [P("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    d: "M24 4V44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), P("path", {
    d: "M4 24.0002L18 24.0086",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null), P("path", {
    d: "M4 24.0083L44 24.0083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _n = Symbol(), qe = "el", Gs = "is-", se = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, Cn = Symbol("namespaceContextKey"), qs = (e) => {
  const t = e || (_e() ? oe(Cn, x(qe)) : x(qe));
  return w(() => c(t) || qe);
}, St = (e, t) => {
  const n = qs(t);
  return {
    namespace: n,
    b: (y = "") => se(n.value, e, y, "", ""),
    e: (y) => y ? se(n.value, e, "", y, "") : "",
    m: (y) => y ? se(n.value, e, "", "", y) : "",
    be: (y, g) => y && g ? se(n.value, e, y, g, "") : "",
    em: (y, g) => y && g ? se(n.value, e, "", y, g) : "",
    bm: (y, g) => y && g ? se(n.value, e, y, "", g) : "",
    bem: (y, g, b) => y && g && b ? se(n.value, e, y, g, b) : "",
    is: (y, ...g) => {
      const b = g.length >= 1 ? g[0] : !0;
      return y && b ? `${Gs}${y}` : "";
    },
    cssVar: (y) => {
      const g = {};
      for (const b in y)
        y[b] && (g[`--${n.value}-${b}`] = y[b]);
      return g;
    },
    cssVarName: (y) => `--${n.value}-${y}`,
    cssVarBlock: (y) => {
      const g = {};
      for (const b in y)
        y[b] && (g[`--${n.value}-${e}-${b}`] = y[b]);
      return g;
    },
    cssVarBlockName: (y) => `--${n.value}-${e}-${y}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ks = Object.prototype.hasOwnProperty, Kt = (e, t) => Ks.call(e, t), Re = (e) => typeof e == "function", ue = (e) => typeof e == "string", xn = (e) => e !== null && typeof e == "object";
var Zs = typeof global == "object" && global && global.Object === Object && global, Ys = typeof self == "object" && self && self.Object === Object && self, kt = Zs || Ys || Function("return this")(), Se = kt.Symbol, Sn = Object.prototype, Js = Sn.hasOwnProperty, Xs = Sn.toString, ze = Se ? Se.toStringTag : void 0;
function Qs(e) {
  var t = Js.call(e, ze), n = e[ze];
  try {
    e[ze] = void 0;
    var s = !0;
  } catch {
  }
  var o = Xs.call(e);
  return s && (t ? e[ze] = n : delete e[ze]), o;
}
var eo = Object.prototype, to = eo.toString;
function no(e) {
  return to.call(e);
}
var so = "[object Null]", oo = "[object Undefined]", Zt = Se ? Se.toStringTag : void 0;
function kn(e) {
  return e == null ? e === void 0 ? oo : so : Zt && Zt in Object(e) ? Qs(e) : no(e);
}
function ao(e) {
  return e != null && typeof e == "object";
}
var io = "[object Symbol]";
function Ot(e) {
  return typeof e == "symbol" || ao(e) && kn(e) == io;
}
function ro(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Mt = Array.isArray, Yt = Se ? Se.prototype : void 0, Jt = Yt ? Yt.toString : void 0;
function On(e) {
  if (typeof e == "string")
    return e;
  if (Mt(e))
    return ro(e, On) + "";
  if (Ot(e))
    return Jt ? Jt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var lo = "[object AsyncFunction]", uo = "[object Function]", co = "[object GeneratorFunction]", po = "[object Proxy]";
function ho(e) {
  if (!Mn(e))
    return !1;
  var t = kn(e);
  return t == uo || t == co || t == lo || t == po;
}
var ft = kt["__core-js_shared__"], Xt = function() {
  var e = /[^.]+$/.exec(ft && ft.keys && ft.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fo(e) {
  return !!Xt && Xt in e;
}
var go = Function.prototype, vo = go.toString;
function yo(e) {
  if (e != null) {
    try {
      return vo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var mo = /[\\^$.*+?()[\]{}|]/g, wo = /^\[object .+?Constructor\]$/, bo = Function.prototype, _o = Object.prototype, Co = bo.toString, xo = _o.hasOwnProperty, So = RegExp(
  "^" + Co.call(xo).replace(mo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ko(e) {
  if (!Mn(e) || fo(e))
    return !1;
  var t = ho(e) ? So : wo;
  return t.test(yo(e));
}
function Oo(e, t) {
  return e?.[t];
}
function In(e, t) {
  var n = Oo(e, t);
  return ko(n) ? n : void 0;
}
function Mo(e, t) {
  return e === t || e !== e && t !== t;
}
var Io = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, To = /^\w*$/;
function Po(e, t) {
  if (Mt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ot(e) ? !0 : To.test(e) || !Io.test(e) || t != null && e in Object(t);
}
var De = In(Object, "create");
function zo() {
  this.__data__ = De ? De(null) : {}, this.size = 0;
}
function No(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var $o = "__lodash_hash_undefined__", Lo = Object.prototype, Eo = Lo.hasOwnProperty;
function Ro(e) {
  var t = this.__data__;
  if (De) {
    var n = t[e];
    return n === $o ? void 0 : n;
  }
  return Eo.call(t, e) ? t[e] : void 0;
}
var Do = Object.prototype, Fo = Do.hasOwnProperty;
function Wo(e) {
  var t = this.__data__;
  return De ? t[e] !== void 0 : Fo.call(t, e);
}
var Ao = "__lodash_hash_undefined__";
function jo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = De && t === void 0 ? Ao : t, this;
}
function ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ce.prototype.clear = zo;
ce.prototype.delete = No;
ce.prototype.get = Ro;
ce.prototype.has = Wo;
ce.prototype.set = jo;
function Bo() {
  this.__data__ = [], this.size = 0;
}
function ot(e, t) {
  for (var n = e.length; n--; )
    if (Mo(e[n][0], t))
      return n;
  return -1;
}
var Ho = Array.prototype, Vo = Ho.splice;
function Uo(e) {
  var t = this.__data__, n = ot(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Vo.call(t, n, 1), --this.size, !0;
}
function Go(e) {
  var t = this.__data__, n = ot(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function qo(e) {
  return ot(this.__data__, e) > -1;
}
function Ko(e, t) {
  var n = this.__data__, s = ot(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Me.prototype.clear = Bo;
Me.prototype.delete = Uo;
Me.prototype.get = Go;
Me.prototype.has = qo;
Me.prototype.set = Ko;
var Zo = In(kt, "Map");
function Yo() {
  this.size = 0, this.__data__ = {
    hash: new ce(),
    map: new (Zo || Me)(),
    string: new ce()
  };
}
function Jo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function at(e, t) {
  var n = e.__data__;
  return Jo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Xo(e) {
  var t = at(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qo(e) {
  return at(this, e).get(e);
}
function ea(e) {
  return at(this, e).has(e);
}
function ta(e, t) {
  var n = at(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function pe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
pe.prototype.clear = Yo;
pe.prototype.delete = Xo;
pe.prototype.get = Qo;
pe.prototype.has = ea;
pe.prototype.set = ta;
var na = "Expected a function";
function It(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(na);
  var n = function() {
    var s = arguments, o = t ? t.apply(this, s) : s[0], l = n.cache;
    if (l.has(o))
      return l.get(o);
    var i = e.apply(this, s);
    return n.cache = l.set(o, i) || l, i;
  };
  return n.cache = new (It.Cache || pe)(), n;
}
It.Cache = pe;
var sa = 500;
function oa(e) {
  var t = It(e, function(s) {
    return n.size === sa && n.clear(), s;
  }), n = t.cache;
  return t;
}
var aa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ia = /\\(\\)?/g, ra = oa(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(aa, function(n, s, o, l) {
    t.push(o ? l.replace(ia, "$1") : s || n);
  }), t;
});
function la(e) {
  return e == null ? "" : On(e);
}
function ua(e, t) {
  return Mt(e) ? e : Po(e, t) ? [e] : ra(la(e));
}
function ca(e) {
  if (typeof e == "string" || Ot(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function da(e, t) {
  t = ua(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[ca(t[n++])];
  return n && n == s ? e : void 0;
}
function pa(e, t, n) {
  var s = e == null ? void 0 : da(e, t);
  return s === void 0 ? n : s;
}
function ha(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const Tn = (e) => e === void 0, Qt = (e) => typeof e == "boolean", de = (e) => typeof e == "number", mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, fa = (e) => ue(e) ? !Number.isNaN(Number(e)) : !1;
var en;
const he = typeof window < "u", ga = (e) => typeof e == "string", va = () => {
};
he && ((en = window?.navigator) != null && en.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Tt(e) {
  return typeof e == "function" ? e() : c(e);
}
function ya(e) {
  return e;
}
function Pt(e) {
  return bs() ? (_s(e), !0) : !1;
}
function ma(e, t = !0) {
  _e() ? st(e) : t ? e() : we(e);
}
function Pn(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = x(!1);
  let l = null;
  function i() {
    l && (clearTimeout(l), l = null);
  }
  function p() {
    o.value = !1, i();
  }
  function h(...v) {
    i(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...v);
    }, Tt(t));
  }
  return s && (o.value = !0, he && h()), Pt(p), {
    isPending: ws(o),
    start: h,
    stop: p
  };
}
function zn(e) {
  var t;
  const n = Tt(e);
  return (t = n?.$el) != null ? t : n;
}
const Nn = he ? window : void 0;
function $n(...e) {
  let t, n, s, o;
  if (ga(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = Nn) : [t, n, s, o] = e, !t)
    return va;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], i = () => {
    l.forEach((f) => f()), l.length = 0;
  }, p = (f, _, O, I) => (f.addEventListener(_, O, I), () => f.removeEventListener(_, O, I)), h = Ce(() => [zn(t), Tt(o)], ([f, _]) => {
    i(), f && l.push(...n.flatMap((O) => s.map((I) => p(f, O, I, _))));
  }, { immediate: !0, flush: "post" }), v = () => {
    h(), i();
  };
  return Pt(v), v;
}
function wa(e, t = !1) {
  const n = x(), s = () => n.value = !!e();
  return s(), ma(s, t), n;
}
const tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nn = "__vueuse_ssr_handlers__";
tn[nn] = tn[nn] || {};
var sn = Object.getOwnPropertySymbols, ba = Object.prototype.hasOwnProperty, _a = Object.prototype.propertyIsEnumerable, Ca = (e, t) => {
  var n = {};
  for (var s in e)
    ba.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && sn)
    for (var s of sn(e))
      t.indexOf(s) < 0 && _a.call(e, s) && (n[s] = e[s]);
  return n;
};
function xa(e, t, n = {}) {
  const s = n, { window: o = Nn } = s, l = Ca(s, ["window"]);
  let i;
  const p = wa(() => o && "ResizeObserver" in o), h = () => {
    i && (i.disconnect(), i = void 0);
  }, v = Ce(() => zn(e), (_) => {
    h(), p.value && o && _ && (i = new ResizeObserver(t), i.observe(_, l));
  }, { immediate: !0, flush: "post" }), f = () => {
    h(), v();
  };
  return Pt(f), {
    isSupported: p,
    stop: f
  };
}
var on;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(on || (on = {}));
var Sa = Object.defineProperty, an = Object.getOwnPropertySymbols, ka = Object.prototype.hasOwnProperty, Oa = Object.prototype.propertyIsEnumerable, rn = (e, t, n) => t in e ? Sa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ma = (e, t) => {
  for (var n in t || (t = {}))
    ka.call(t, n) && rn(e, n, t[n]);
  if (an)
    for (var n of an(t))
      Oa.call(t, n) && rn(e, n, t[n]);
  return e;
};
const Ia = {
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
Ma({
  linear: ya
}, Ia);
const ln = {
  current: 0
}, un = x(0), Ln = 2e3, cn = Symbol("elZIndexContextKey"), En = Symbol("zIndexContextKey"), Ta = (e) => {
  const t = _e() ? oe(cn, ln) : ln, n = e || (_e() ? oe(En, void 0) : void 0), s = w(() => {
    const i = c(n);
    return de(i) ? i : Ln;
  }), o = w(() => s.value + un.value), l = () => (t.current++, un.value = t.current, o.value);
  return !he && oe(cn), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var Pa = {
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
const za = (e) => (t, n) => Na(t, n, c(e)), Na = (e, t, n) => pa(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), $a = (e) => {
  const t = w(() => c(e).name), n = Cs(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: za(e)
  };
}, Rn = Symbol("localeContextKey"), La = (e) => {
  const t = e || oe(Rn, x());
  return $a(w(() => t.value || Pa));
}, Dn = "__epPropKey", V = (e) => e, Ea = (e) => xn(e) && !!e[Dn], Fn = (e, t) => {
  if (!xn(e) || Ea(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: i } = e, h = {
    type: l,
    required: !!s,
    validator: n || i ? (v) => {
      let f = !1, _ = [];
      if (n && (_ = Array.from(n), Kt(e, "default") && _.push(o), f || (f = _.includes(v))), i && (f || (f = i(v))), !f && _.length > 0) {
        const O = [...new Set(_)].map((I) => JSON.stringify(I)).join(", ");
        xs(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${O}], got value ${JSON.stringify(v)}.`);
      }
      return f;
    } : void 0,
    [Dn]: !0
  };
  return Kt(e, "default") && (h.default = o), h;
}, Ie = (e) => ha(Object.entries(e).map(([t, n]) => [
  t,
  Fn(n, t)
])), Ra = ["", "default", "small", "large"], Da = Fn({
  type: String,
  values: Ra,
  required: !1
}), Fa = Symbol("size"), Wa = Symbol("emptyValuesContextKey"), Aa = Ie({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Re(e) ? !e() : !e
  }
}), dn = (e) => Object.keys(e), Qe = x();
function Wn(e, t = void 0) {
  return _e() ? oe(_n, Qe) : Qe;
}
function An(e, t) {
  const n = Wn(), s = St(e, w(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || qe;
  })), o = La(w(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = Ta(w(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || Ln;
  })), i = w(() => {
    var p;
    return c(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return jn(w(() => c(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: i
  };
}
const jn = (e, t, n = !1) => {
  var s;
  const o = !!_e(), l = o ? Wn() : void 0, i = (s = void 0) != null ? s : o ? Ss : void 0;
  if (!i)
    return;
  const p = w(() => {
    const h = c(e);
    return l?.value ? ja(l.value, h) : h;
  });
  return i(_n, p), i(Rn, w(() => p.value.locale)), i(Cn, w(() => p.value.namespace)), i(En, w(() => p.value.zIndex)), i(Fa, {
    size: w(() => p.value.size || "")
  }), i(Wa, w(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Qe.value) && (Qe.value = p.value), p;
}, ja = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...dn(e), ...dn(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var it = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function wt(e, t = "px") {
  if (!e)
    return "";
  if (de(e) || fa(e))
    return `${e}${t}`;
  if (ue(e))
    return e;
}
const Bn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Hn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Ba = Ie({
  size: {
    type: V([Number, String])
  },
  color: {
    type: String
  }
}), Ha = F({
  name: "ElIcon",
  inheritAttrs: !1
}), Va = /* @__PURE__ */ F({
  ...Ha,
  props: Ba,
  setup(e) {
    const t = e, n = St("icon"), s = w(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: Tn(o) ? void 0 : wt(o),
        "--color": l
      };
    });
    return (o, l) => (S(), z("i", ks({
      class: c(n).b(),
      style: c(s)
    }, o.$attrs), [
      xe(o.$slots, "default")
    ], 16));
  }
});
var Ua = /* @__PURE__ */ it(Va, [["__file", "icon.vue"]]);
const et = Bn(Ua);
/*! Element Plus Icons Vue v2.3.1 */
var Ga = /* @__PURE__ */ F({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (S(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), qa = Ga, Ka = /* @__PURE__ */ F({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (S(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Vn = Ka, Za = /* @__PURE__ */ F({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (S(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ya = Za, Ja = /* @__PURE__ */ F({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (S(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Xa = Ja, Qa = /* @__PURE__ */ F({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (S(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ei = Qa;
const Un = V([
  String,
  Object,
  Function
]), ti = {
  Close: Vn
}, ni = {
  Close: Vn
}, tt = {
  success: Xa,
  warning: ei,
  error: qa,
  info: Ya
}, si = (e) => e, Ke = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, oi = Ie({
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
    type: V([String, Object, Array])
  },
  offset: {
    type: V(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), ai = F({
  name: "ElBadge"
}), ii = /* @__PURE__ */ F({
  ...ai,
  props: oi,
  setup(e, { expose: t }) {
    const n = e, s = St("badge"), o = w(() => n.isDot ? "" : de(n.value) && de(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = w(() => {
      var i, p, h, v, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: wt(-((p = (i = n.offset) == null ? void 0 : i[0]) != null ? p : 0)),
          marginTop: wt((v = (h = n.offset) == null ? void 0 : h[1]) != null ? v : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (i, p) => (S(), z("div", {
      class: N(c(s).b())
    }, [
      xe(i.$slots, "default"),
      P(_t, {
        name: `${c(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ae(() => [
          ie(u("sup", {
            class: N([
              c(s).e("content"),
              c(s).em("content", i.type),
              c(s).is("fixed", !!i.$slots.default),
              c(s).is("dot", i.isDot),
              c(s).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: re(c(l))
          }, [
            xe(i.$slots, "content", { value: c(o) }, () => [
              Os(E(c(o)), 1)
            ])
          ], 6), [
            [Ze, !i.hidden && (c(o) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ri = /* @__PURE__ */ it(ii, [["__file", "badge.vue"]]);
const li = Bn(ri), ui = Ie({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: V(Object)
  },
  size: Da,
  button: {
    type: V(Object)
  },
  experimentalFeatures: {
    type: V(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: V(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Aa
}), Y = {};
F({
  name: "ElConfigProvider",
  props: ui,
  setup(e, { slots: t }) {
    Ce(() => e.message, (s) => {
      Object.assign(Y, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = jn(e);
    return () => xe(t, "default", { config: n?.value });
  }
});
const Gn = ["success", "info", "warning", "error"], L = si({
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
  appendTo: he ? document.body : void 0
}), ci = Ie({
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
    type: Un,
    default: L.icon
  },
  id: {
    type: String,
    default: L.id
  },
  message: {
    type: V([
      String,
      Object,
      Function
    ]),
    default: L.message
  },
  onClose: {
    type: V(Function),
    default: L.onClose
  },
  showClose: {
    type: Boolean,
    default: L.showClose
  },
  type: {
    type: String,
    values: Gn,
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
}), di = {
  destroy: () => !0
}, J = Ms([]), pi = (e) => {
  const t = J.findIndex((o) => o.id === e), n = J[t];
  let s;
  return t > 0 && (s = J[t - 1]), { current: n, prev: s };
}, hi = (e) => {
  const { prev: t } = pi(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, fi = (e, t) => J.findIndex((s) => s.id === e) > 0 ? 16 : t, gi = F({
  name: "ElMessage"
}), vi = /* @__PURE__ */ F({
  ...gi,
  props: ci,
  emits: di,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ni, { ns: o, zIndex: l } = An("message"), { currentZIndex: i, nextZIndex: p } = l, h = x(), v = x(!1), f = x(0);
    let _;
    const O = w(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), I = w(() => {
      const k = n.type;
      return { [o.bm("icon", k)]: k && tt[k] };
    }), U = w(() => n.icon || tt[n.type] || ""), y = w(() => hi(n.id)), g = w(() => fi(n.id, n.offset) + y.value), b = w(() => f.value + g.value), W = w(() => ({
      top: `${g.value}px`,
      zIndex: i.value
    }));
    function m() {
      n.duration !== 0 && ({ stop: _ } = Pn(() => {
        R();
      }, n.duration));
    }
    function ne() {
      _?.();
    }
    function R() {
      v.value = !1;
    }
    function fe({ code: k }) {
      k === Ke.esc && R();
    }
    return st(() => {
      m(), p(), v.value = !0;
    }), Ce(() => n.repeatNum, () => {
      ne(), m();
    }), $n(document, "keydown", fe), xa(h, () => {
      f.value = h.value.getBoundingClientRect().height;
    }), t({
      visible: v,
      bottom: b,
      close: R
    }), (k, zt) => (S(), ee(_t, {
      name: c(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (Nt) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        ie(u("div", {
          id: k.id,
          ref_key: "messageRef",
          ref: h,
          class: N([
            c(o).b(),
            { [c(o).m(k.type)]: k.type },
            c(o).is("center", k.center),
            c(o).is("closable", k.showClose),
            c(o).is("plain", k.plain),
            k.customClass
          ]),
          style: re(c(W)),
          role: "alert",
          onMouseenter: ne,
          onMouseleave: m
        }, [
          k.repeatNum > 1 ? (S(), ee(c(li), {
            key: 0,
            value: k.repeatNum,
            type: c(O),
            class: N(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : te("v-if", !0),
          c(U) ? (S(), ee(c(et), {
            key: 1,
            class: N([c(o).e("icon"), c(I)])
          }, {
            default: ae(() => [
              (S(), ee(gn(c(U))))
            ]),
            _: 1
          }, 8, ["class"])) : te("v-if", !0),
          xe(k.$slots, "default", {}, () => [
            k.dangerouslyUseHTMLString ? (S(), z(be, { key: 1 }, [
              te(" Caution here, message could've been compromised, never use user's input as message "),
              u("p", {
                class: N(c(o).e("content")),
                innerHTML: k.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), z("p", {
              key: 0,
              class: N(c(o).e("content"))
            }, E(k.message), 3))
          ]),
          k.showClose ? (S(), ee(c(et), {
            key: 2,
            class: N(c(o).e("closeBtn")),
            onClick: $e(R, ["stop"])
          }, {
            default: ae(() => [
              P(c(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : te("v-if", !0)
        ], 46, ["id"]), [
          [Ze, v.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var yi = /* @__PURE__ */ it(vi, [["__file", "message.vue"]]);
let mi = 1;
const qn = (e) => {
  const t = !e || ue(e) || Ee(e) || Re(e) ? { message: e } : e, n = {
    ...L,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ue(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    mt(s) || (s = document.body), n.appendTo = s;
  }
  return Qt(Y.grouping) && !n.grouping && (n.grouping = Y.grouping), de(Y.duration) && n.duration === 3e3 && (n.duration = Y.duration), de(Y.offset) && n.offset === 16 && (n.offset = Y.offset), Qt(Y.showClose) && !n.showClose && (n.showClose = Y.showClose), n;
}, wi = (e) => {
  const t = J.indexOf(e);
  if (t === -1)
    return;
  J.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, bi = ({ appendTo: e, ...t }, n) => {
  const s = `message_${mi++}`, o = t.onClose, l = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), wi(f);
    },
    onDestroy: () => {
      Ye(null, l);
    }
  }, p = P(yi, i, Re(i.message) || Ee(i.message) ? {
    default: Re(i.message) ? i.message : () => i.message
  } : null);
  p.appContext = n || ke._context, Ye(p, l), e.appendChild(l.firstElementChild);
  const h = p.component, f = {
    id: s,
    vnode: p,
    vm: h,
    handler: {
      close: () => {
        h.exposed.visible.value = !1;
      }
    },
    props: p.component.props
  };
  return f;
}, ke = (e = {}, t) => {
  if (!he)
    return { close: () => {
    } };
  const n = qn(e);
  if (n.grouping && J.length) {
    const o = J.find(({ vnode: l }) => {
      var i;
      return ((i = l.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (de(Y.max) && J.length >= Y.max)
    return { close: () => {
    } };
  const s = bi(n, t);
  return J.push(s), s.handler;
};
Gn.forEach((e) => {
  ke[e] = (t = {}, n) => {
    const s = qn(t);
    return ke({ ...s, type: e }, n);
  };
});
function _i(e) {
  for (const t of J)
    (!e || e === t.props.type) && t.handler.close();
}
ke.closeAll = _i;
ke._context = null;
const Ci = Hn(ke, "$message"), Kn = [
  "success",
  "info",
  "warning",
  "error"
], xi = Ie({
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
    type: Un
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: V([
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
    type: V(Function),
    default: () => {
    }
  },
  onClose: {
    type: V(Function),
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
    values: [...Kn, ""],
    default: ""
  },
  zIndex: Number
}), Si = {
  destroy: () => !0
}, ki = F({
  name: "ElNotification"
}), Oi = /* @__PURE__ */ F({
  ...ki,
  props: xi,
  emits: Si,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = An("notification"), { nextZIndex: l, currentZIndex: i } = o, { Close: p } = ti, h = x(!1);
    let v;
    const f = w(() => {
      const m = n.type;
      return m && tt[n.type] ? s.m(m) : "";
    }), _ = w(() => n.type && tt[n.type] || n.icon), O = w(() => n.position.endsWith("right") ? "right" : "left"), I = w(() => n.position.startsWith("top") ? "top" : "bottom"), U = w(() => {
      var m;
      return {
        [I.value]: `${n.offset}px`,
        zIndex: (m = n.zIndex) != null ? m : i.value
      };
    });
    function y() {
      n.duration > 0 && ({ stop: v } = Pn(() => {
        h.value && b();
      }, n.duration));
    }
    function g() {
      v?.();
    }
    function b() {
      h.value = !1;
    }
    function W({ code: m }) {
      m === Ke.delete || m === Ke.backspace ? g() : m === Ke.esc ? h.value && b() : y();
    }
    return st(() => {
      y(), l(), h.value = !0;
    }), $n(document, "keydown", W), t({
      visible: h,
      close: b
    }), (m, ne) => (S(), ee(_t, {
      name: c(s).b("fade"),
      onBeforeLeave: m.onClose,
      onAfterLeave: (R) => m.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        ie(u("div", {
          id: m.id,
          class: N([c(s).b(), m.customClass, c(O)]),
          style: re(c(U)),
          role: "alert",
          onMouseenter: g,
          onMouseleave: y,
          onClick: m.onClick
        }, [
          c(_) ? (S(), ee(c(et), {
            key: 0,
            class: N([c(s).e("icon"), c(f)])
          }, {
            default: ae(() => [
              (S(), ee(gn(c(_))))
            ]),
            _: 1
          }, 8, ["class"])) : te("v-if", !0),
          u("div", {
            class: N(c(s).e("group"))
          }, [
            u("h2", {
              class: N(c(s).e("title")),
              textContent: E(m.title)
            }, null, 10, ["textContent"]),
            ie(u("div", {
              class: N(c(s).e("content")),
              style: re(m.title ? void 0 : { margin: 0 })
            }, [
              xe(m.$slots, "default", {}, () => [
                m.dangerouslyUseHTMLString ? (S(), z(be, { key: 1 }, [
                  te(" Caution here, message could've been compromised, never use user's input as message "),
                  u("p", { innerHTML: m.message }, null, 8, ["innerHTML"])
                ], 2112)) : (S(), z("p", { key: 0 }, E(m.message), 1))
              ])
            ], 6), [
              [Ze, m.message]
            ]),
            m.showClose ? (S(), ee(c(et), {
              key: 0,
              class: N(c(s).e("closeBtn")),
              onClick: $e(b, ["stop"])
            }, {
              default: ae(() => [
                P(c(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : te("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ze, h.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Mi = /* @__PURE__ */ it(Oi, [["__file", "notification.vue"]]);
const nt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, bt = 16;
let Ii = 1;
const Oe = function(e = {}, t) {
  if (!he)
    return { close: () => {
    } };
  (ue(e) || Ee(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  nt[n].forEach(({ vm: f }) => {
    var _;
    s += (((_ = f.el) == null ? void 0 : _.offsetHeight) || 0) + bt;
  }), s += bt;
  const o = `notification_${Ii++}`, l = e.onClose, i = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Ti(o, n, l);
    }
  };
  let p = document.body;
  mt(e.appendTo) ? p = e.appendTo : ue(e.appendTo) && (p = document.querySelector(e.appendTo)), mt(p) || (p = document.body);
  const h = document.createElement("div"), v = P(Mi, i, Re(i.message) ? i.message : Ee(i.message) ? () => i.message : null);
  return v.appContext = Tn(t) ? Oe._context : t, v.props.onDestroy = () => {
    Ye(null, h);
  }, Ye(v, h), nt[n].push({ vm: v }), p.appendChild(h.firstElementChild), {
    close: () => {
      v.component.exposed.visible.value = !1;
    }
  };
};
Kn.forEach((e) => {
  Oe[e] = (t = {}, n) => ((ue(t) || Ee(t)) && (t = {
    message: t
  }), Oe({ ...t, type: e }, n));
});
function Ti(e, t, n) {
  const s = nt[t], o = s.findIndex(({ vm: v }) => {
    var f;
    return ((f = v.component) == null ? void 0 : f.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const i = l.el.offsetHeight, p = t.split("-")[0];
  s.splice(o, 1);
  const h = s.length;
  if (!(h < 1))
    for (let v = o; v < h; v++) {
      const { el: f, component: _ } = s[v].vm, O = Number.parseInt(f.style[p], 10) - i - bt;
      _.props.offset = O;
    }
}
function Pi() {
  for (const e of Object.values(nt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Oe.closeAll = Pi;
Oe._context = null;
const zi = Hn(Oe, "$notify"), gt = {
  /**
   * 显示消息提示（简化版）
   * @param message 消息内容
   * @param type 消息类型，默认 success
   * @param position 显示位置，默认 center
   * @param duration 显示时长（毫秒），默认 3000
   */
  msg(e, t = "success", n = "center", s) {
    this.message({
      message: e,
      type: t,
      position: n,
      duration: s
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
      position: s = "center",
      duration: o = 3e3,
      showClose: l = !1
    } = e;
    s === "center" ? Ci({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : zi({
      message: t,
      type: n,
      position: s,
      duration: o,
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
}, vt = "[screen-recorder]", Ni = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, q = async (e, t) => {
  const n = performance.now(), s = Ni(t);
  console.info(`${vt} invoke:start ${e}`, s ?? "");
  try {
    const o = await d(e, t);
    return console.info(`${vt} invoke:success ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      result: o
    }), o;
  } catch (o) {
    throw console.error(`${vt} invoke:error ${e}`, {
      elapsedMs: Math.round(performance.now() - n),
      error: o
    }), o;
  }
}, $i = () => q("screen_recorder_get_ffmpeg_status"), me = (e) => q("screen_recorder_set_capture_excluded", { excluded: e }), Ne = (e) => q("screen_recorder_set_passthrough_region", { region: e }), Li = () => q("screen_recorder_pick_target_window"), Ei = () => q("screen_recorder_close_window"), Ri = (e, t) => q("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Di = () => q("screen_recorder_pause_recording"), Fi = (e, t) => q("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Wi = () => q("screen_recorder_stop_recording"), Ai = () => q("screen_recorder_cancel_recording"), ji = () => q("screen_recorder_cancel_export"), Bi = (e, t) => q("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), pn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), $ = "[screen-recorder]";
function Hi() {
  const e = x("selecting"), t = x(pn()), n = x(null), s = x(null), o = x(""), l = x(null), i = x(0), p = x(0), h = x(null), v = () => {
    p.value = e.value === "recording" && l.value !== null ? i.value + Date.now() - l.value : i.value;
  }, f = () => {
    h.value !== null && (window.clearInterval(h.value), h.value = null);
  }, _ = () => {
    f(), v(), h.value = window.setInterval(() => {
      v();
    }, 250);
  }, O = async () => (console.info(`${$} refresh ffmpeg status`), n.value = await $i(), console.info(`${$} ffmpeg status`, n.value), n.value), I = async (R) => {
    o.value = "", s.value = null, console.info(`${$} begin requested`, { region: R, settings: t.value });
    const fe = n.value ?? await O();
    if (!fe.available)
      throw new Error(fe.message || "FFmpeg unavailable");
    await Ri(R, t.value), e.value = "recording", i.value = 0, p.value = 0, l.value = Date.now(), _(), console.info(`${$} recording started`, { status: e.value });
  }, U = async () => {
    e.value === "recording" && (console.info(`${$} pause requested`, { elapsedMs: p.value }), v(), i.value = p.value, l.value = null, f(), await Di(), e.value = "paused", console.info(`${$} recording paused`, { accumulatedMs: i.value }));
  }, y = async (R) => {
    e.value === "paused" && (console.info(`${$} resume requested`, { region: R, settings: t.value }), await Fi(R, t.value), e.value = "recording", l.value = Date.now(), _(), console.info(`${$} recording resumed`));
  }, g = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${$} stop requested`, { status: e.value, elapsedMs: p.value }), v(), i.value = p.value, l.value = null, f(), await Wi(), e.value = "exporting", console.info(`${$} recording stopped`, { accumulatedMs: i.value }));
  }, b = async () => {
    console.info(`${$} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await Bi(t.value, Math.round(p.value)), e.value = "completed", console.info(`${$} export completed`, s.value), s.value;
    } catch (R) {
      throw e.value = "ready", s.value = null, R;
    }
  }, W = async () => {
    console.info(`${$} cancel export requested`, { status: e.value }), await ji(), e.value = "ready", s.value = null;
  }, m = async () => {
    console.info(`${$} cancel requested`, { status: e.value, elapsedMs: p.value }), f(), await Ai(), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, s.value = null, console.info(`${$} canceled`);
  }, ne = () => {
    console.info(`${$} reset session`), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, s.value = null, o.value = "", t.value = pn();
  };
  return vn(() => {
    f();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: p,
    refreshFfmpegStatus: O,
    begin: I,
    pause: U,
    resume: y,
    stop: g,
    exportFile: b,
    cancelExport: W,
    cancel: m,
    reset: ne
  };
}
const Vi = { class: "screen-recorder" }, Ui = ["onMousedown"], Gi = { class: "window-title" }, qi = { class: "capture-viewport" }, Ki = { class: "control-group control-group--tools" }, Zi = { class: "tool-pill" }, Yi = ["title", "disabled"], Ji = { class: "select-field" }, Xi = ["disabled"], Qi = ["disabled"], er = ["disabled"], tr = { value: "high" }, nr = { value: "standard" }, sr = { value: "small" }, or = { class: "dimension-group optional-size" }, ar = { class: "dimension" }, ir = ["value"], rr = { class: "dimension" }, lr = ["value"], ur = { class: "control-group control-group--actions" }, cr = { class: "time" }, dr = { class: "button-label" }, pr = { class: "button-label" }, hr = ["title"], fr = { class: "export-progress__meta" }, gr = { class: "export-progress__track" }, vr = ["title"], yr = ["disabled"], mr = { class: "record-label" }, wr = {
  key: 0,
  class: "warning"
}, Z = "[screen-recorder]", Ve = 80, hn = 420, fn = 260, br = 8, Ue = 1, _r = /* @__PURE__ */ F({
  __name: "index",
  setup(e) {
    const t = wn(), n = x(null), s = x(null), o = x(null), l = x({ width: 0, height: 0 }), i = x(null), p = x(!1), h = x(0), v = x(!1), f = x(null);
    let _ = null, O = null, I = null, U = null;
    const y = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: g,
      settings: b,
      ffmpegStatus: W,
      result: m,
      elapsedMs: ne,
      refreshFfmpegStatus: R,
      begin: fe,
      pause: k,
      resume: zt,
      stop: Nt,
      exportFile: Zn,
      cancelExport: $t,
      cancel: Yn,
      reset: Jn
    } = Hi(), Lt = x(!1), Te = w(() => g.value === "recording" || g.value === "paused" || g.value === "exporting"), rt = w(() => b.value.audio && b.value.format === "mp4"), Pe = w(() => rt.value && g.value === "recording"), Xn = w(() => {
      if (i.value)
        return {
          width: `${i.value.width / i.value.scale + 2}px`,
          height: `${i.value.height / i.value.scale + 2}px`
        };
    }), Qn = w(() => {
      const a = Pe.value && !v.value ? h.value : 0, r = (C, D) => Math.max(0.18, Math.min(1, C + a * D)).toFixed(3);
      return {
        "--bar-1": r(0.28, 0.64),
        "--bar-2": r(0.42, 0.78),
        "--bar-3": r(0.34, 0.94),
        "--bar-4": r(0.22, 0.72)
      };
    }), es = w(() => {
      if (b.value.format === "gif")
        return "GIF 不支持音频";
      if (v.value && b.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (m.value?.audioDevice)
        return `已录制音频：${m.value.audioDevice}`;
      if (m.value && !m.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (W.value?.available && !W.value.systemAudioAvailable) {
        const a = W.value.audioDevices?.join("、") || "无";
        return b.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return b.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), Et = w(() => {
      const a = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), lt = w(() => {
      const a = f.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), ts = w(() => {
      const a = f.value;
      return a?.totalFrames ? `${lt.value} (${a.currentFrame}/${a.totalFrames})` : lt.value;
    }), ns = w(() => {
      const a = Math.floor(ne.value / 1e3), r = Math.floor(a / 60).toString().padStart(2, "0"), C = (a % 60).toString().padStart(2, "0");
      return `${r}:${C}`;
    }), ge = async (a) => {
      try {
        await a();
      } catch (r) {
        console.error(`${Z} action failed`, r), Lt.value || gt.msg(r?.message || String(r), "error");
      }
    }, Fe = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), We = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const r = a.getBoundingClientRect(), C = await t.scaleFactor(), D = await t.innerPosition(), j = Fe(r.width * C), T = Fe(r.height * C);
      if (j < Ve || T < Ve)
        throw new Error("录制区域太小，请放大录制窗口");
      const X = {
        x: r.left,
        y: r.top,
        width: j / C,
        height: T / C,
        screenX: Math.round(D.x + r.left * C),
        screenY: Math.round(D.y + r.top * C),
        physicalWidth: j,
        physicalHeight: T,
        scale: C
      };
      return console.info(`${Z} capture region`, X), X;
    }, A = async () => {
      try {
        const a = await We();
        l.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }, await Ne({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        l.value = { width: 0, height: 0 }, await Ne(null).catch(() => {
        });
      }
    }, Ae = async () => {
      await Ne(null).catch(() => {
      });
    }, Rt = () => {
      p.value = !1, i.value = null;
    }, Dt = () => {
      window.setTimeout(() => {
        A();
      }, 120);
    }, Ft = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), ss = async () => {
      const [a, r] = await Promise.all([
        t.outerPosition(),
        t.outerSize()
      ]);
      return {
        x: a.x,
        y: a.y,
        width: r.width,
        height: r.height
      };
    }, Wt = (a, r) => {
      const C = Math.min(a.width, r.width), D = Math.min(a.height, r.height), j = r.x + r.width - C, T = r.y + r.height - D;
      return {
        x: Math.min(Math.max(a.x, r.x), j),
        y: Math.min(Math.max(a.y, r.y), T),
        width: C,
        height: D
      };
    }, At = async (a) => {
      await t.setSize(new le(Math.round(a.width), Math.round(a.height))), await t.setPosition(new Q(Math.round(a.x), Math.round(a.y))), await Ft();
    }, ut = async () => {
      const [a, r] = await Promise.all([
        We(),
        ss()
      ]);
      return { actualRegion: a, currentFrame: r };
    }, os = async (a, r, C) => {
      const { actualRegion: D } = await ut(), j = D.scale, T = Math.round(D.x * j), X = Math.round(D.y * j), Be = s.value?.getBoundingClientRect().height ?? 38, ct = o.value?.getBoundingClientRect().height ?? 46, M = Math.max(0, Math.round(X - Be * j)), K = Math.round(ct * j) + M, B = Fe(a.physicalWidth), ve = Fe(a.physicalHeight);
      return {
        x: a.screenX - T,
        y: a.screenY - X,
        width: Math.max(r, B + T * 2),
        height: Math.max(C, ve + X + K)
      };
    }, jt = async () => {
      I?.(), I = null, h.value = 0;
    }, je = async () => {
      if (!(!rt.value || I))
        try {
          console.info(`${Z} backend audio meter listening`), I = await Je("screen_recorder_audio_level", (a) => {
            if (!Pe.value) {
              h.value = 0;
              return;
            }
            const r = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            h.value = h.value * 0.38 + r * 0.62;
          }), v.value = !1;
        } catch (a) {
          console.error(`${Z} audio meter failed`, a), v.value = !0;
        }
    }, as = async (a) => {
      a.button !== 0 || Te.value || (Rt(), await Ae(), await t.startDragging().catch((r) => {
        gt.msg(r?.message || String(r), "error");
      }), Dt());
    }, is = async (a) => {
      Te.value || (Rt(), await Ae(), await t.startResizeDragging(a).catch((r) => {
        gt.msg(r?.message || String(r), "error");
      }), Dt());
    }, rs = () => ge(async () => {
      console.info(`${Z} handle start`), f.value = null, await je(), await me(!0).catch(() => {
      }), await A(), await fe(await We());
    }), ls = () => ge(async () => {
      console.info(`${Z} handle pause`), await k();
    }), us = () => ge(async () => {
      console.info(`${Z} handle resume`), await zt(await We());
    }), cs = () => ge(async () => {
      console.info(`${Z} handle stop/export`), f.value = {
        stage: "encode",
        message: b.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await Nt(), h.value = 0, await Zn(), await A(), await me(!1).catch(() => {
      });
    }), ds = () => ge(async () => {
      console.info(`${Z} handle cancel export`), await $t(), f.value = null, await A();
    }), ps = () => {
      const a = { ...b.value };
      Ae(), Jn(), b.value = a, g.value = "ready", m.value = null, f.value = null, me(!0).catch(() => {
      }), we(A), je();
    }, hs = async (a) => {
      const r = await Fs(a.screenX, a.screenY), C = r?.scaleFactor || await t.scaleFactor();
      p.value = !0, i.value = {
        width: a.physicalWidth,
        height: a.physicalHeight,
        scale: C
      }, await we(), await Ft();
      const D = Math.round(hn * C), j = Math.round(fn * C), T = r ? {
        x: r.position.x,
        y: r.position.y,
        width: r.size.width,
        height: r.size.height
      } : null, X = (() => {
        if (!T) return !1;
        const M = Math.max(8, Math.round(8 * C)), K = T.x + T.width, B = T.y + T.height, ve = a.screenX + a.physicalWidth, ms = a.screenY + a.physicalHeight;
        return a.screenX <= T.x + M && a.screenY <= T.y + M && ve >= K - M && ms >= B - M;
      })(), Be = await os(
        a,
        D,
        j
      );
      await At(
        T && X ? Wt(Be, T) : Be
      ), await we();
      const ct = async () => {
        const { actualRegion: M, currentFrame: K } = await ut(), B = {
          x: a.screenX - M.screenX,
          y: a.screenY - M.screenY,
          width: a.physicalWidth - M.physicalWidth,
          height: a.physicalHeight - M.physicalHeight
        };
        if (Math.abs(B.x) <= Ue && Math.abs(B.y) <= Ue && Math.abs(B.width) <= Ue && Math.abs(B.height) <= Ue)
          return !0;
        const ve = {
          x: K.x + B.x,
          y: K.y + B.y,
          width: Math.max(D, K.width + B.width),
          height: Math.max(j, K.height + B.height)
        };
        return await At(
          T && X ? Wt(ve, T) : ve
        ), !1;
      };
      try {
        for (let K = 0; K < br && !await ct(); K += 1)
          ;
        const { actualRegion: M } = await ut();
        console.info(`${Z} snap result`, {
          target: a,
          actualRegion: M,
          residual: {
            left: M.screenX - a.screenX,
            top: M.screenY - a.screenY,
            right: M.screenX + M.physicalWidth - (a.screenX + a.physicalWidth),
            bottom: M.screenY + M.physicalHeight - (a.screenY + a.physicalHeight)
          },
          monitorCovering: X
        });
      } catch (M) {
        console.warn(`${Z} snap correction skipped`, M);
      }
      await A();
    }, fs = () => ge(async () => {
      await Ae();
      const a = await Li();
      await hs(a);
    }), gs = async () => {
      await t.minimize();
    }, Bt = async () => {
      Lt.value = !0;
      try {
        g.value === "exporting" ? await $t().catch(() => {
        }) : await Yn(), await Ne(null).catch(() => {
        }), await me(!1).catch(() => {
        });
      } catch {
      }
      await Ei();
    }, vs = async () => {
      m.value && (await A(), await d("open_file_with_default_app", { filePath: m.value.path }));
    }, ys = async () => {
      m.value && (await A(), await d("show_file_in_folder", { filePath: m.value.path }));
    }, Ht = (a) => {
      a.key === "Escape" && (a.preventDefault(), Bt());
    };
    return st(async () => {
      g.value = "ready", await t.setMinSize(new Ct(hn, fn)).catch(() => {
      }), await me(!0).catch(() => {
      }), await R().catch(() => {
      }), await we(), await A(), await je(), await we(), await t.emit("screen_recorder_ready"), U = await Je("screen_recorder_export_progress", (a) => {
        f.value = a.payload;
      }).catch(() => null), n.value && (_ = new ResizeObserver(() => {
        A();
      }), _.observe(n.value)), O = await t.onMoved(() => {
        A();
      }).catch(() => null), window.addEventListener("resize", A), window.addEventListener("keydown", Ht);
    }), Ce(rt, (a) => {
      a ? je() : jt();
    }), Ce(g, (a) => {
      a !== "recording" && (h.value = 0), a !== "exporting" && (f.value = null);
    }), vn(() => {
      _?.disconnect(), O?.(), U?.(), window.removeEventListener("resize", A), window.removeEventListener("keydown", Ht), Ne(null).catch(() => {
      }), me(!1).catch(() => {
      }), jt();
    }), (a, r) => (S(), z("div", Vi, [
      u(
        "div",
        {
          class: N(["recorder-shell", { recording: c(g) === "recording", paused: c(g) === "paused", "snap-aligned": p.value }])
        },
        [
          (S(), z(
            be,
            null,
            Is(y, (C) => u("span", {
              key: C.className,
              class: N(["resize-zone", C.className]),
              onMousedown: $e((D) => is(C.direction), ["prevent"])
            }, null, 42, Ui)),
            64
            /* STABLE_FRAGMENT */
          )),
          u(
            "header",
            {
              ref_key: "titleBarRef",
              ref: s,
              class: "title-bar",
              onMousedown: as
            },
            [
              u(
                "span",
                Gi,
                E(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              u(
                "div",
                {
                  class: "window-actions",
                  onMousedown: r[0] || (r[0] = $e(() => {
                  }, ["stop"]))
                },
                [
                  u("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: gs
                  }, [
                    P(c(Vs), {
                      class: "title-icon",
                      theme: "outline",
                      size: "20",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ]),
                  u("button", {
                    class: "title-button title-button--close",
                    title: "关闭",
                    onClick: Bt
                  }, [
                    P(c(Hs), {
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
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ),
          u("main", qi, [
            r[9] || (r[9] = u(
              "span",
              { class: "viewport-mask top" },
              null,
              -1
              /* HOISTED */
            )),
            r[10] || (r[10] = u(
              "span",
              { class: "viewport-mask right" },
              null,
              -1
              /* HOISTED */
            )),
            r[11] || (r[11] = u(
              "span",
              { class: "viewport-mask bottom" },
              null,
              -1
              /* HOISTED */
            )),
            r[12] || (r[12] = u(
              "span",
              { class: "viewport-mask left" },
              null,
              -1
              /* HOISTED */
            )),
            u(
              "div",
              {
                class: "capture-frame",
                style: re(Xn.value)
              },
              [
                u(
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
                r[5] || (r[5] = u(
                  "span",
                  { class: "viewport-border top" },
                  null,
                  -1
                  /* HOISTED */
                )),
                r[6] || (r[6] = u(
                  "span",
                  { class: "viewport-border right" },
                  null,
                  -1
                  /* HOISTED */
                )),
                r[7] || (r[7] = u(
                  "span",
                  { class: "viewport-border bottom" },
                  null,
                  -1
                  /* HOISTED */
                )),
                r[8] || (r[8] = u(
                  "span",
                  { class: "viewport-border left" },
                  null,
                  -1
                  /* HOISTED */
                ))
              ],
              4
              /* STYLE */
            )
          ]),
          u(
            "footer",
            {
              ref_key: "controlStripRef",
              ref: o,
              class: "control-strip"
            },
            [
              u("div", Ki, [
                u("div", Zi, [
                  c(g) === "ready" || c(g) === "completed" ? (S(), z(
                    "button",
                    {
                      key: 0,
                      class: "icon-control snap-control",
                      title: "拖到目标窗口并松开以对齐",
                      "aria-label": "对齐目标窗口",
                      onMousedown: $e(fs, ["prevent"])
                    },
                    [
                      P(c(Us), {
                        theme: "outline",
                        size: "18",
                        strokeWidth: 3,
                        strokeLinecap: "butt"
                      })
                    ],
                    32
                    /* NEED_HYDRATION */
                  )) : te("v-if", !0),
                  u("button", {
                    class: N(["audio-meter", { active: Pe.value && h.value > 0.03, metering: Pe.value && !v.value, muted: !Pe.value || v.value }]),
                    title: es.value,
                    "aria-label": "系统声音录制状态",
                    disabled: c(g) === "exporting" || c(b).format === "gif"
                  }, [
                    u(
                      "span",
                      {
                        class: "audio-bars",
                        style: re(Qn.value)
                      },
                      r[13] || (r[13] = [
                        u(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        u(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        u(
                          "i",
                          null,
                          null,
                          -1
                          /* HOISTED */
                        ),
                        u(
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
                  ], 10, Yi)
                ]),
                u("label", Ji, [
                  ie(u("select", {
                    "onUpdate:modelValue": r[1] || (r[1] = (C) => c(b).fps = C),
                    disabled: Te.value
                  }, r[14] || (r[14] = [
                    u(
                      "option",
                      { value: 15 },
                      "15",
                      -1
                      /* HOISTED */
                    ),
                    u(
                      "option",
                      { value: 24 },
                      "24",
                      -1
                      /* HOISTED */
                    ),
                    u(
                      "option",
                      { value: 30 },
                      "30",
                      -1
                      /* HOISTED */
                    ),
                    u(
                      "option",
                      { value: 60 },
                      "60",
                      -1
                      /* HOISTED */
                    )
                  ]), 8, Xi), [
                    [dt, c(b).fps]
                  ]),
                  r[15] || (r[15] = u(
                    "span",
                    { class: "unit" },
                    "fps",
                    -1
                    /* HOISTED */
                  ))
                ]),
                ie(u("select", {
                  "onUpdate:modelValue": r[2] || (r[2] = (C) => c(b).format = C),
                  class: "format-select optional-format",
                  disabled: Te.value
                }, r[16] || (r[16] = [
                  u(
                    "option",
                    { value: "mp4" },
                    "MP4",
                    -1
                    /* HOISTED */
                  ),
                  u(
                    "option",
                    { value: "gif" },
                    "GIF",
                    -1
                    /* HOISTED */
                  )
                ]), 8, Qi), [
                  [dt, c(b).format]
                ]),
                ie(u("select", {
                  "onUpdate:modelValue": r[3] || (r[3] = (C) => c(b).quality = C),
                  class: "quality-select optional-quality",
                  disabled: Te.value
                }, [
                  u(
                    "option",
                    tr,
                    E(a.$t("screenRecorder.qualityHigh")),
                    1
                    /* TEXT */
                  ),
                  u(
                    "option",
                    nr,
                    E(a.$t("screenRecorder.qualityStandard")),
                    1
                    /* TEXT */
                  ),
                  u(
                    "option",
                    sr,
                    E(a.$t("screenRecorder.qualitySmall")),
                    1
                    /* TEXT */
                  )
                ], 8, er), [
                  [dt, c(b).quality]
                ]),
                u("div", or, [
                  u("label", ar, [
                    u("input", {
                      value: l.value.width,
                      readonly: ""
                    }, null, 8, ir)
                  ]),
                  r[17] || (r[17] = u(
                    "span",
                    { class: "multiply" },
                    "×",
                    -1
                    /* HOISTED */
                  )),
                  u("label", rr, [
                    u("input", {
                      value: l.value.height,
                      readonly: ""
                    }, null, 8, lr)
                  ]),
                  r[18] || (r[18] = u(
                    "span",
                    { class: "unit" },
                    "px",
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              u("div", ur, [
                c(g) === "recording" || c(g) === "paused" ? (S(), z(
                  be,
                  { key: 0 },
                  [
                    u(
                      "span",
                      cr,
                      E(ns.value),
                      1
                      /* TEXT */
                    ),
                    u("button", {
                      class: "control-button",
                      onClick: r[4] || (r[4] = (C) => c(g) === "paused" ? us() : ls())
                    }, [
                      u(
                        "span",
                        dr,
                        E(c(g) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                        1
                        /* TEXT */
                      )
                    ]),
                    u("button", {
                      class: "control-button danger",
                      onClick: cs
                    }, [
                      u(
                        "span",
                        pr,
                        E(a.$t("screenRecorder.stop")),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : c(g) === "exporting" ? (S(), z(
                  be,
                  { key: 1 },
                  [
                    u("div", {
                      class: "export-progress",
                      title: ts.value
                    }, [
                      u("div", fr, [
                        u(
                          "span",
                          null,
                          E(lt.value),
                          1
                          /* TEXT */
                        ),
                        u(
                          "strong",
                          null,
                          E(Et.value) + "%",
                          1
                          /* TEXT */
                        )
                      ]),
                      u("div", gr, [
                        u(
                          "span",
                          {
                            style: re({ width: `${Et.value}%` })
                          },
                          null,
                          4
                          /* STYLE */
                        )
                      ])
                    ], 8, hr),
                    u("button", {
                      class: "control-button danger",
                      title: "取消导出",
                      onClick: ds
                    }, r[19] || (r[19] = [
                      u(
                        "span",
                        { class: "button-label" },
                        "取消",
                        -1
                        /* HOISTED */
                      )
                    ]))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : c(g) === "completed" && c(m) ? (S(), z(
                  be,
                  { key: 2 },
                  [
                    u("span", {
                      class: "save-status optional-save-status",
                      title: c(m).path
                    }, E(c(m).hasAudio ? "已保存·有声" : "已保存·无声"), 9, vr),
                    u("button", {
                      class: "control-button",
                      title: "打开文件",
                      onClick: vs
                    }, r[20] || (r[20] = [
                      u(
                        "span",
                        { class: "button-label" },
                        "打开",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    u("button", {
                      class: "control-button",
                      title: "打开所在文件夹",
                      onClick: ys
                    }, r[21] || (r[21] = [
                      u(
                        "span",
                        { class: "button-label" },
                        "文件夹",
                        -1
                        /* HOISTED */
                      )
                    ])),
                    u("button", {
                      class: "control-button",
                      title: "重新录制",
                      onClick: ps
                    }, r[22] || (r[22] = [
                      u(
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
                )) : (S(), z("button", {
                  key: 3,
                  class: "record-button",
                  disabled: c(W)?.available === !1 || l.value.width < Ve || l.value.height < Ve,
                  onClick: rs
                }, [
                  r[23] || (r[23] = u(
                    "span",
                    { class: "record-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  u(
                    "span",
                    mr,
                    E(a.$t("screenRecorder.start")),
                    1
                    /* TEXT */
                  )
                ], 8, yr))
              ])
            ],
            512
            /* NEED_PATCH */
          )
        ],
        2
        /* CLASS */
      ),
      c(W) && !c(W).available ? (S(), z(
        "p",
        wr,
        E(c(W).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : te("v-if", !0)
    ]));
  }
}), Cr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, xr = /* @__PURE__ */ Cr(_r, [["__scopeId", "data-v-aedf6e30"]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xr
}, Symbol.toStringTag, { value: "Module" }));
export {
  Or as activate
};
