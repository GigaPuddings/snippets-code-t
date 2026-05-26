import { inject as oe, createVNode as T, getCurrentInstance as _e, ref as S, computed as y, unref as c, readonly as ys, getCurrentScope as ms, onScopeDispose as ws, onMounted as nt, nextTick as me, watch as be, isRef as _s, warn as bs, provide as Cs, defineComponent as A, createElementBlock as z, openBlock as k, mergeProps as xs, renderSlot as Ce, createElementVNode as u, normalizeClass as L, Transition as bt, withCtx as ae, withDirectives as ie, normalizeStyle as re, createTextVNode as Ss, toDisplayString as F, vShow as Ke, shallowReactive as ks, createBlock as Q, createCommentVNode as ee, resolveDynamicComponent as fn, Fragment as we, withModifiers as Ne, isVNode as Le, render as Ye, onUnmounted as gn, renderList as Os, vModelSelect as dt } from "vue";
const kr = (e) => {
  e.registerRoute({
    target: "window",
    path: "/screen-recorder",
    name: "ScreenRecorder",
    component: () => Promise.resolve().then(() => xr)
  });
};
function Ms(e, t, n, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? s : n === "a" ? s.call(e) : s ? s.value : t.get(e);
}
function Is(e, t, n, s, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ue;
const V = "__TAURI_TO_IPC_KEY__";
function Ts(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function d(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
class Ps {
  get rid() {
    return Ms(this, Ue, "f");
  }
  constructor(t) {
    Ue.set(this, void 0), Is(this, Ue, t);
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
Ue = /* @__PURE__ */ new WeakMap();
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
  [V]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[V]();
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
  [V]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[V]();
  }
}
class ve {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ct ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof le ? this.size : this.size.toPhysical(t);
  }
  [V]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[V]();
  }
}
class vn {
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
  [V]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[V]();
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
    return new vn(this.x / t, this.y / t);
  }
  [V]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[V]();
  }
}
class Be {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof vn ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Z ? this.position : this.position.toPhysical(t);
  }
  [V]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[V]();
  }
}
var B;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(B || (B = {}));
async function yn(e, t) {
  await d("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ze(e, t, n) {
  var s;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (s = n?.target) !== null && s !== void 0 ? s : { kind: "Any" };
  return d("plugin:event|listen", {
    event: e,
    target: o,
    handler: Ts(t)
  }).then((l) => async () => yn(e, l));
}
async function zs(e, t, n) {
  return Ze(e, (s) => {
    yn(e, s.id), t(s);
  }, n);
}
async function Ns(e, t) {
  await d("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function $s(e, t, n) {
  await d("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class $e extends Ps {
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
    }).then((o) => new $e(o));
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
    }).then((n) => new $e(n));
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
    return d("plugin:image|from_path", { path: t }).then((n) => new $e(n));
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
  return e == null ? null : typeof e == "string" ? e : e instanceof $e ? e.rid : e;
}
var yt;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(yt || (yt = {}));
class Ls {
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
var Ht;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(Ht || (Ht = {}));
function mn() {
  return new wn(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function pt() {
  return d("plugin:window|get_all_windows").then((e) => e.map((t) => new wn(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ht = ["tauri://created", "tauri://error"];
class wn {
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
    return mn();
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
    } : Ze(t, n, {
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
    } : zs(t, n, {
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
    return Ns(t, n);
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
    return $s(t, n, s);
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
    return d("plugin:window|outer_position", {
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
    return d("plugin:window|set_min_size", {
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
    return d("plugin:window|set_max_size", {
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
      value: t instanceof Be ? t : new Be(t)
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
      value: t instanceof Be ? t : new Be(t)
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
    return this.listen(B.WINDOW_RESIZED, (n) => {
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
    return this.listen(B.WINDOW_MOVED, (n) => {
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
    return this.listen(B.WINDOW_CLOSE_REQUESTED, async (n) => {
      const s = new Ls(n);
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
    const n = await this.listen(B.DRAG_ENTER, (i) => {
      t({
        ...i,
        payload: {
          type: "enter",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), s = await this.listen(B.DRAG_OVER, (i) => {
      t({
        ...i,
        payload: {
          type: "over",
          position: new Z(i.payload.position)
        }
      });
    }), o = await this.listen(B.DRAG_DROP, (i) => {
      t({
        ...i,
        payload: {
          type: "drop",
          paths: i.payload.paths,
          position: new Z(i.payload.position)
        }
      });
    }), l = await this.listen(B.DRAG_LEAVE, (i) => {
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
    const n = await this.listen(B.WINDOW_FOCUS, (o) => {
      t({ ...o, payload: !0 });
    }), s = await this.listen(B.WINDOW_BLUR, (o) => {
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
    return this.listen(B.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(B.WINDOW_THEME_CHANGED, t);
  }
}
var Vt;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(Vt || (Vt = {}));
var Ut;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(Ut || (Ut = {}));
var Gt;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Gt || (Gt = {}));
function Es(e) {
  return e === null ? null : {
    name: e.name,
    scaleFactor: e.scaleFactor,
    position: new Z(e.position),
    size: new le(e.size)
  };
}
async function Ds(e, t) {
  return d("plugin:window|monitor_from_point", {
    x: e,
    y: t
  }).then(Es);
}
var Fs = {
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
function Rs() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Ws(e, t, n) {
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
var As = Symbol("icon-context");
function xt(e, t, n) {
  var s = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(l) {
      var i = Rs(), p = oe(As, Fs);
      return function() {
        var f = l.size, g = l.strokeWidth, v = l.strokeLinecap, w = l.strokeLinejoin, M = l.theme, $ = l.fill, x = l.spin, h = Ws(i, {
          size: f,
          strokeWidth: g,
          strokeLinecap: v,
          strokeLinejoin: w,
          theme: M,
          fill: $
        }, p), m = [p.prefix + "-icon"];
        return m.push(p.prefix + "-icon-" + e), x && m.push(p.prefix + "-icon-spin"), T("span", {
          class: m.join(" ")
        }, [n(h)]);
      };
    }
  };
  return s;
}
const js = xt("close-small", !1, function(e) {
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
}), Bs = xt("minus", !1, function(e) {
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
}), Hs = xt("radar", !1, function(e) {
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
}), _n = Symbol(), Ge = "el", Vs = "is-", se = (e, t, n, s, o) => {
  let l = `${e}-${t}`;
  return n && (l += `-${n}`), s && (l += `__${s}`), o && (l += `--${o}`), l;
}, bn = Symbol("namespaceContextKey"), Us = (e) => {
  const t = e || (_e() ? oe(bn, S(Ge)) : S(Ge));
  return y(() => c(t) || Ge);
}, St = (e, t) => {
  const n = Us(t);
  return {
    namespace: n,
    b: (h = "") => se(n.value, e, h, "", ""),
    e: (h) => h ? se(n.value, e, "", h, "") : "",
    m: (h) => h ? se(n.value, e, "", "", h) : "",
    be: (h, m) => h && m ? se(n.value, e, h, m, "") : "",
    em: (h, m) => h && m ? se(n.value, e, "", h, m) : "",
    bm: (h, m) => h && m ? se(n.value, e, h, "", m) : "",
    bem: (h, m, _) => h && m && _ ? se(n.value, e, h, m, _) : "",
    is: (h, ...m) => {
      const _ = m.length >= 1 ? m[0] : !0;
      return h && _ ? `${Vs}${h}` : "";
    },
    cssVar: (h) => {
      const m = {};
      for (const _ in h)
        h[_] && (m[`--${n.value}-${_}`] = h[_]);
      return m;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const m = {};
      for (const _ in h)
        h[_] && (m[`--${n.value}-${e}-${_}`] = h[_]);
      return m;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Gs = Object.prototype.hasOwnProperty, qt = (e, t) => Gs.call(e, t), Ee = (e) => typeof e == "function", ue = (e) => typeof e == "string", Cn = (e) => e !== null && typeof e == "object";
var qs = typeof global == "object" && global && global.Object === Object && global, Ks = typeof self == "object" && self && self.Object === Object && self, kt = qs || Ks || Function("return this")(), xe = kt.Symbol, xn = Object.prototype, Ys = xn.hasOwnProperty, Zs = xn.toString, Pe = xe ? xe.toStringTag : void 0;
function Xs(e) {
  var t = Ys.call(e, Pe), n = e[Pe];
  try {
    e[Pe] = void 0;
    var s = !0;
  } catch {
  }
  var o = Zs.call(e);
  return s && (t ? e[Pe] = n : delete e[Pe]), o;
}
var Js = Object.prototype, Qs = Js.toString;
function eo(e) {
  return Qs.call(e);
}
var to = "[object Null]", no = "[object Undefined]", Kt = xe ? xe.toStringTag : void 0;
function Sn(e) {
  return e == null ? e === void 0 ? no : to : Kt && Kt in Object(e) ? Xs(e) : eo(e);
}
function so(e) {
  return e != null && typeof e == "object";
}
var oo = "[object Symbol]";
function Ot(e) {
  return typeof e == "symbol" || so(e) && Sn(e) == oo;
}
function ao(e, t) {
  for (var n = -1, s = e == null ? 0 : e.length, o = Array(s); ++n < s; )
    o[n] = t(e[n], n, e);
  return o;
}
var Mt = Array.isArray, Yt = xe ? xe.prototype : void 0, Zt = Yt ? Yt.toString : void 0;
function kn(e) {
  if (typeof e == "string")
    return e;
  if (Mt(e))
    return ao(e, kn) + "";
  if (Ot(e))
    return Zt ? Zt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function On(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var io = "[object AsyncFunction]", ro = "[object Function]", lo = "[object GeneratorFunction]", uo = "[object Proxy]";
function co(e) {
  if (!On(e))
    return !1;
  var t = Sn(e);
  return t == ro || t == lo || t == io || t == uo;
}
var ft = kt["__core-js_shared__"], Xt = function() {
  var e = /[^.]+$/.exec(ft && ft.keys && ft.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function po(e) {
  return !!Xt && Xt in e;
}
var ho = Function.prototype, fo = ho.toString;
function go(e) {
  if (e != null) {
    try {
      return fo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vo = /[\\^$.*+?()[\]{}|]/g, yo = /^\[object .+?Constructor\]$/, mo = Function.prototype, wo = Object.prototype, _o = mo.toString, bo = wo.hasOwnProperty, Co = RegExp(
  "^" + _o.call(bo).replace(vo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xo(e) {
  if (!On(e) || po(e))
    return !1;
  var t = co(e) ? Co : yo;
  return t.test(go(e));
}
function So(e, t) {
  return e?.[t];
}
function Mn(e, t) {
  var n = So(e, t);
  return xo(n) ? n : void 0;
}
function ko(e, t) {
  return e === t || e !== e && t !== t;
}
var Oo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Mo = /^\w*$/;
function Io(e, t) {
  if (Mt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ot(e) ? !0 : Mo.test(e) || !Oo.test(e) || t != null && e in Object(t);
}
var De = Mn(Object, "create");
function To() {
  this.__data__ = De ? De(null) : {}, this.size = 0;
}
function Po(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zo = "__lodash_hash_undefined__", No = Object.prototype, $o = No.hasOwnProperty;
function Lo(e) {
  var t = this.__data__;
  if (De) {
    var n = t[e];
    return n === zo ? void 0 : n;
  }
  return $o.call(t, e) ? t[e] : void 0;
}
var Eo = Object.prototype, Do = Eo.hasOwnProperty;
function Fo(e) {
  var t = this.__data__;
  return De ? t[e] !== void 0 : Do.call(t, e);
}
var Ro = "__lodash_hash_undefined__";
function Wo(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = De && t === void 0 ? Ro : t, this;
}
function ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
ce.prototype.clear = To;
ce.prototype.delete = Po;
ce.prototype.get = Lo;
ce.prototype.has = Fo;
ce.prototype.set = Wo;
function Ao() {
  this.__data__ = [], this.size = 0;
}
function st(e, t) {
  for (var n = e.length; n--; )
    if (ko(e[n][0], t))
      return n;
  return -1;
}
var jo = Array.prototype, Bo = jo.splice;
function Ho(e) {
  var t = this.__data__, n = st(t, e);
  if (n < 0)
    return !1;
  var s = t.length - 1;
  return n == s ? t.pop() : Bo.call(t, n, 1), --this.size, !0;
}
function Vo(e) {
  var t = this.__data__, n = st(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Uo(e) {
  return st(this.__data__, e) > -1;
}
function Go(e, t) {
  var n = this.__data__, s = st(n, e);
  return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this;
}
function Oe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
Oe.prototype.clear = Ao;
Oe.prototype.delete = Ho;
Oe.prototype.get = Vo;
Oe.prototype.has = Uo;
Oe.prototype.set = Go;
var qo = Mn(kt, "Map");
function Ko() {
  this.size = 0, this.__data__ = {
    hash: new ce(),
    map: new (qo || Oe)(),
    string: new ce()
  };
}
function Yo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ot(e, t) {
  var n = e.__data__;
  return Yo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Zo(e) {
  var t = ot(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Xo(e) {
  return ot(this, e).get(e);
}
function Jo(e) {
  return ot(this, e).has(e);
}
function Qo(e, t) {
  var n = ot(this, e), s = n.size;
  return n.set(e, t), this.size += n.size == s ? 0 : 1, this;
}
function pe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var s = e[t];
    this.set(s[0], s[1]);
  }
}
pe.prototype.clear = Ko;
pe.prototype.delete = Zo;
pe.prototype.get = Xo;
pe.prototype.has = Jo;
pe.prototype.set = Qo;
var ea = "Expected a function";
function It(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ea);
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
var ta = 500;
function na(e) {
  var t = It(e, function(s) {
    return n.size === ta && n.clear(), s;
  }), n = t.cache;
  return t;
}
var sa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, oa = /\\(\\)?/g, aa = na(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sa, function(n, s, o, l) {
    t.push(o ? l.replace(oa, "$1") : s || n);
  }), t;
});
function ia(e) {
  return e == null ? "" : kn(e);
}
function ra(e, t) {
  return Mt(e) ? e : Io(e, t) ? [e] : aa(ia(e));
}
function la(e) {
  if (typeof e == "string" || Ot(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ua(e, t) {
  t = ra(t, e);
  for (var n = 0, s = t.length; e != null && n < s; )
    e = e[la(t[n++])];
  return n && n == s ? e : void 0;
}
function ca(e, t, n) {
  var s = e == null ? void 0 : ua(e, t);
  return s === void 0 ? n : s;
}
function da(e) {
  for (var t = -1, n = e == null ? 0 : e.length, s = {}; ++t < n; ) {
    var o = e[t];
    s[o[0]] = o[1];
  }
  return s;
}
const In = (e) => e === void 0, Jt = (e) => typeof e == "boolean", de = (e) => typeof e == "number", mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, pa = (e) => ue(e) ? !Number.isNaN(Number(e)) : !1;
var Qt;
const he = typeof window < "u", ha = (e) => typeof e == "string", fa = () => {
};
he && ((Qt = window?.navigator) != null && Qt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Tt(e) {
  return typeof e == "function" ? e() : c(e);
}
function ga(e) {
  return e;
}
function Pt(e) {
  return ms() ? (ws(e), !0) : !1;
}
function va(e, t = !0) {
  _e() ? nt(e) : t ? e() : me(e);
}
function Tn(e, t, n = {}) {
  const {
    immediate: s = !0
  } = n, o = S(!1);
  let l = null;
  function i() {
    l && (clearTimeout(l), l = null);
  }
  function p() {
    o.value = !1, i();
  }
  function f(...g) {
    i(), o.value = !0, l = setTimeout(() => {
      o.value = !1, l = null, e(...g);
    }, Tt(t));
  }
  return s && (o.value = !0, he && f()), Pt(p), {
    isPending: ys(o),
    start: f,
    stop: p
  };
}
function Pn(e) {
  var t;
  const n = Tt(e);
  return (t = n?.$el) != null ? t : n;
}
const zn = he ? window : void 0;
function Nn(...e) {
  let t, n, s, o;
  if (ha(e[0]) || Array.isArray(e[0]) ? ([n, s, o] = e, t = zn) : [t, n, s, o] = e, !t)
    return fa;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const l = [], i = () => {
    l.forEach((v) => v()), l.length = 0;
  }, p = (v, w, M, $) => (v.addEventListener(w, M, $), () => v.removeEventListener(w, M, $)), f = be(() => [Pn(t), Tt(o)], ([v, w]) => {
    i(), v && l.push(...n.flatMap((M) => s.map(($) => p(v, M, $, w))));
  }, { immediate: !0, flush: "post" }), g = () => {
    f(), i();
  };
  return Pt(g), g;
}
function ya(e, t = !1) {
  const n = S(), s = () => n.value = !!e();
  return s(), va(s, t), n;
}
const en = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tn = "__vueuse_ssr_handlers__";
en[tn] = en[tn] || {};
var nn = Object.getOwnPropertySymbols, ma = Object.prototype.hasOwnProperty, wa = Object.prototype.propertyIsEnumerable, _a = (e, t) => {
  var n = {};
  for (var s in e)
    ma.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && nn)
    for (var s of nn(e))
      t.indexOf(s) < 0 && wa.call(e, s) && (n[s] = e[s]);
  return n;
};
function ba(e, t, n = {}) {
  const s = n, { window: o = zn } = s, l = _a(s, ["window"]);
  let i;
  const p = ya(() => o && "ResizeObserver" in o), f = () => {
    i && (i.disconnect(), i = void 0);
  }, g = be(() => Pn(e), (w) => {
    f(), p.value && o && w && (i = new ResizeObserver(t), i.observe(w, l));
  }, { immediate: !0, flush: "post" }), v = () => {
    f(), g();
  };
  return Pt(v), {
    isSupported: p,
    stop: v
  };
}
var sn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(sn || (sn = {}));
var Ca = Object.defineProperty, on = Object.getOwnPropertySymbols, xa = Object.prototype.hasOwnProperty, Sa = Object.prototype.propertyIsEnumerable, an = (e, t, n) => t in e ? Ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ka = (e, t) => {
  for (var n in t || (t = {}))
    xa.call(t, n) && an(e, n, t[n]);
  if (on)
    for (var n of on(t))
      Sa.call(t, n) && an(e, n, t[n]);
  return e;
};
const Oa = {
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
ka({
  linear: ga
}, Oa);
const rn = {
  current: 0
}, ln = S(0), $n = 2e3, un = Symbol("elZIndexContextKey"), Ln = Symbol("zIndexContextKey"), Ma = (e) => {
  const t = _e() ? oe(un, rn) : rn, n = e || (_e() ? oe(Ln, void 0) : void 0), s = y(() => {
    const i = c(n);
    return de(i) ? i : $n;
  }), o = y(() => s.value + ln.value), l = () => (t.current++, ln.value = t.current, o.value);
  return !he && oe(un), {
    initialZIndex: s,
    currentZIndex: o,
    nextZIndex: l
  };
};
var Ia = {
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
const Ta = (e) => (t, n) => Pa(t, n, c(e)), Pa = (e, t, n) => ca(n, e, e).replace(/\{(\w+)\}/g, (s, o) => {
  var l;
  return `${(l = t?.[o]) != null ? l : `{${o}}`}`;
}), za = (e) => {
  const t = y(() => c(e).name), n = _s(e) ? e : S(e);
  return {
    lang: t,
    locale: n,
    t: Ta(e)
  };
}, En = Symbol("localeContextKey"), Na = (e) => {
  const t = e || oe(En, S());
  return za(y(() => t.value || Ia));
}, Dn = "__epPropKey", H = (e) => e, $a = (e) => Cn(e) && !!e[Dn], Fn = (e, t) => {
  if (!Cn(e) || $a(e))
    return e;
  const { values: n, required: s, default: o, type: l, validator: i } = e, f = {
    type: l,
    required: !!s,
    validator: n || i ? (g) => {
      let v = !1, w = [];
      if (n && (w = Array.from(n), qt(e, "default") && w.push(o), v || (v = w.includes(g))), i && (v || (v = i(g))), !v && w.length > 0) {
        const M = [...new Set(w)].map(($) => JSON.stringify($)).join(", ");
        bs(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${M}], got value ${JSON.stringify(g)}.`);
      }
      return v;
    } : void 0,
    [Dn]: !0
  };
  return qt(e, "default") && (f.default = o), f;
}, Me = (e) => da(Object.entries(e).map(([t, n]) => [
  t,
  Fn(n, t)
])), La = ["", "default", "small", "large"], Ea = Fn({
  type: String,
  values: La,
  required: !1
}), Da = Symbol("size"), Fa = Symbol("emptyValuesContextKey"), Ra = Me({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ee(e) ? !e() : !e
  }
}), cn = (e) => Object.keys(e), Je = S();
function Rn(e, t = void 0) {
  return _e() ? oe(_n, Je) : Je;
}
function Wn(e, t) {
  const n = Rn(), s = St(e, y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.namespace) || Ge;
  })), o = Na(y(() => {
    var p;
    return (p = n.value) == null ? void 0 : p.locale;
  })), l = Ma(y(() => {
    var p;
    return ((p = n.value) == null ? void 0 : p.zIndex) || $n;
  })), i = y(() => {
    var p;
    return c(t) || ((p = n.value) == null ? void 0 : p.size) || "";
  });
  return An(y(() => c(n) || {})), {
    ns: s,
    locale: o,
    zIndex: l,
    size: i
  };
}
const An = (e, t, n = !1) => {
  var s;
  const o = !!_e(), l = o ? Rn() : void 0, i = (s = void 0) != null ? s : o ? Cs : void 0;
  if (!i)
    return;
  const p = y(() => {
    const f = c(e);
    return l?.value ? Wa(l.value, f) : f;
  });
  return i(_n, p), i(En, y(() => p.value.locale)), i(bn, y(() => p.value.namespace)), i(Ln, y(() => p.value.zIndex)), i(Da, {
    size: y(() => p.value.size || "")
  }), i(Fa, y(() => ({
    emptyValues: p.value.emptyValues,
    valueOnClear: p.value.valueOnClear
  }))), (n || !Je.value) && (Je.value = p.value), p;
}, Wa = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...cn(e), ...cn(t)])], s = {};
  for (const o of n)
    s[o] = t[o] !== void 0 ? t[o] : e[o];
  return s;
};
var at = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
};
function wt(e, t = "px") {
  if (!e)
    return "";
  if (de(e) || pa(e))
    return `${e}${t}`;
  if (ue(e))
    return e;
}
const jn = (e, t) => (e.install = (n) => {
  for (const s of [e, ...Object.values({})])
    n.component(s.name, s);
}, e), Bn = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Aa = Me({
  size: {
    type: H([Number, String])
  },
  color: {
    type: String
  }
}), ja = A({
  name: "ElIcon",
  inheritAttrs: !1
}), Ba = /* @__PURE__ */ A({
  ...ja,
  props: Aa,
  setup(e) {
    const t = e, n = St("icon"), s = y(() => {
      const { size: o, color: l } = t;
      return !o && !l ? {} : {
        fontSize: In(o) ? void 0 : wt(o),
        "--color": l
      };
    });
    return (o, l) => (k(), z("i", xs({
      class: c(n).b(),
      style: c(s)
    }, o.$attrs), [
      Ce(o.$slots, "default")
    ], 16));
  }
});
var Ha = /* @__PURE__ */ at(Ba, [["__file", "icon.vue"]]);
const Qe = jn(Ha);
/*! Element Plus Icons Vue v2.3.1 */
var Va = /* @__PURE__ */ A({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ua = Va, Ga = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Hn = Ga, qa = /* @__PURE__ */ A({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ka = qa, Ya = /* @__PURE__ */ A({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Za = Ya, Xa = /* @__PURE__ */ A({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (k(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      u("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ja = Xa;
const Vn = H([
  String,
  Object,
  Function
]), Qa = {
  Close: Hn
}, ei = {
  Close: Hn
}, et = {
  success: Za,
  warning: Ja,
  error: Ua,
  info: Ka
}, ti = (e) => e, qe = {
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, ni = Me({
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
    type: H([String, Object, Array])
  },
  offset: {
    type: H(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), si = A({
  name: "ElBadge"
}), oi = /* @__PURE__ */ A({
  ...si,
  props: ni,
  setup(e, { expose: t }) {
    const n = e, s = St("badge"), o = y(() => n.isDot ? "" : de(n.value) && de(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), l = y(() => {
      var i, p, f, g, v;
      return [
        {
          backgroundColor: n.color,
          marginRight: wt(-((p = (i = n.offset) == null ? void 0 : i[0]) != null ? p : 0)),
          marginTop: wt((g = (f = n.offset) == null ? void 0 : f[1]) != null ? g : 0)
        },
        (v = n.badgeStyle) != null ? v : {}
      ];
    });
    return t({
      content: o
    }), (i, p) => (k(), z("div", {
      class: L(c(s).b())
    }, [
      Ce(i.$slots, "default"),
      T(bt, {
        name: `${c(s).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ae(() => [
          ie(u("sup", {
            class: L([
              c(s).e("content"),
              c(s).em("content", i.type),
              c(s).is("fixed", !!i.$slots.default),
              c(s).is("dot", i.isDot),
              c(s).is("hide-zero", !i.showZero && n.value === 0),
              i.badgeClass
            ]),
            style: re(c(l))
          }, [
            Ce(i.$slots, "content", { value: c(o) }, () => [
              Ss(F(c(o)), 1)
            ])
          ], 6), [
            [Ke, !i.hidden && (c(o) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var ai = /* @__PURE__ */ at(oi, [["__file", "badge.vue"]]);
const ii = jn(ai), ri = Me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: H(Object)
  },
  size: Ea,
  button: {
    type: H(Object)
  },
  experimentalFeatures: {
    type: H(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: H(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Ra
}), K = {};
A({
  name: "ElConfigProvider",
  props: ri,
  setup(e, { slots: t }) {
    be(() => e.message, (s) => {
      Object.assign(K, s ?? {});
    }, { immediate: !0, deep: !0 });
    const n = An(e);
    return () => Ce(t, "default", { config: n?.value });
  }
});
const Un = ["success", "info", "warning", "error"], D = ti({
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
}), li = Me({
  customClass: {
    type: String,
    default: D.customClass
  },
  center: {
    type: Boolean,
    default: D.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: D.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: D.duration
  },
  icon: {
    type: Vn,
    default: D.icon
  },
  id: {
    type: String,
    default: D.id
  },
  message: {
    type: H([
      String,
      Object,
      Function
    ]),
    default: D.message
  },
  onClose: {
    type: H(Function),
    default: D.onClose
  },
  showClose: {
    type: Boolean,
    default: D.showClose
  },
  type: {
    type: String,
    values: Un,
    default: D.type
  },
  plain: {
    type: Boolean,
    default: D.plain
  },
  offset: {
    type: Number,
    default: D.offset
  },
  zIndex: {
    type: Number,
    default: D.zIndex
  },
  grouping: {
    type: Boolean,
    default: D.grouping
  },
  repeatNum: {
    type: Number,
    default: D.repeatNum
  }
}), ui = {
  destroy: () => !0
}, Y = ks([]), ci = (e) => {
  const t = Y.findIndex((o) => o.id === e), n = Y[t];
  let s;
  return t > 0 && (s = Y[t - 1]), { current: n, prev: s };
}, di = (e) => {
  const { prev: t } = ci(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, pi = (e, t) => Y.findIndex((s) => s.id === e) > 0 ? 16 : t, hi = A({
  name: "ElMessage"
}), fi = /* @__PURE__ */ A({
  ...hi,
  props: li,
  emits: ui,
  setup(e, { expose: t }) {
    const n = e, { Close: s } = ei, { ns: o, zIndex: l } = Wn("message"), { currentZIndex: i, nextZIndex: p } = l, f = S(), g = S(!1), v = S(0);
    let w;
    const M = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), $ = y(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && et[O] };
    }), x = y(() => n.icon || et[n.type] || ""), h = y(() => di(n.id)), m = y(() => pi(n.id, n.offset) + h.value), _ = y(() => v.value + m.value), te = y(() => ({
      top: `${m.value}px`,
      zIndex: i.value
    }));
    function C() {
      n.duration !== 0 && ({ stop: w } = Tn(() => {
        R();
      }, n.duration));
    }
    function ne() {
      w?.();
    }
    function R() {
      g.value = !1;
    }
    function fe({ code: O }) {
      O === qe.esc && R();
    }
    return nt(() => {
      C(), p(), g.value = !0;
    }), be(() => n.repeatNum, () => {
      ne(), C();
    }), Nn(document, "keydown", fe), ba(f, () => {
      v.value = f.value.getBoundingClientRect().height;
    }), t({
      visible: g,
      bottom: _,
      close: R
    }), (O, zt) => (k(), Q(bt, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (it) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        ie(u("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: f,
          class: L([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: re(c(te)),
          role: "alert",
          onMouseenter: ne,
          onMouseleave: C
        }, [
          O.repeatNum > 1 ? (k(), Q(c(ii), {
            key: 0,
            value: O.repeatNum,
            type: c(M),
            class: L(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c(x) ? (k(), Q(c(Qe), {
            key: 1,
            class: L([c(o).e("icon"), c($)])
          }, {
            default: ae(() => [
              (k(), Q(fn(c(x))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          Ce(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (k(), z(we, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              u("p", {
                class: L(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (k(), z("p", {
              key: 0,
              class: L(c(o).e("content"))
            }, F(O.message), 3))
          ]),
          O.showClose ? (k(), Q(c(Qe), {
            key: 2,
            class: L(c(o).e("closeBtn")),
            onClick: Ne(R, ["stop"])
          }, {
            default: ae(() => [
              T(c(s))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [Ke, g.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var gi = /* @__PURE__ */ at(fi, [["__file", "message.vue"]]);
let vi = 1;
const Gn = (e) => {
  const t = !e || ue(e) || Le(e) || Ee(e) ? { message: e } : e, n = {
    ...D,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ue(n.appendTo)) {
    let s = document.querySelector(n.appendTo);
    mt(s) || (s = document.body), n.appendTo = s;
  }
  return Jt(K.grouping) && !n.grouping && (n.grouping = K.grouping), de(K.duration) && n.duration === 3e3 && (n.duration = K.duration), de(K.offset) && n.offset === 16 && (n.offset = K.offset), Jt(K.showClose) && !n.showClose && (n.showClose = K.showClose), n;
}, yi = (e) => {
  const t = Y.indexOf(e);
  if (t === -1)
    return;
  Y.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, mi = ({ appendTo: e, ...t }, n) => {
  const s = `message_${vi++}`, o = t.onClose, l = document.createElement("div"), i = {
    ...t,
    id: s,
    onClose: () => {
      o?.(), yi(v);
    },
    onDestroy: () => {
      Ye(null, l);
    }
  }, p = T(gi, i, Ee(i.message) || Le(i.message) ? {
    default: Ee(i.message) ? i.message : () => i.message
  } : null);
  p.appContext = n || Se._context, Ye(p, l), e.appendChild(l.firstElementChild);
  const f = p.component, v = {
    id: s,
    vnode: p,
    vm: f,
    handler: {
      close: () => {
        f.exposed.visible.value = !1;
      }
    },
    props: p.component.props
  };
  return v;
}, Se = (e = {}, t) => {
  if (!he)
    return { close: () => {
    } };
  const n = Gn(e);
  if (n.grouping && Y.length) {
    const o = Y.find(({ vnode: l }) => {
      var i;
      return ((i = l.props) == null ? void 0 : i.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (de(K.max) && Y.length >= K.max)
    return { close: () => {
    } };
  const s = mi(n, t);
  return Y.push(s), s.handler;
};
Un.forEach((e) => {
  Se[e] = (t = {}, n) => {
    const s = Gn(t);
    return Se({ ...s, type: e }, n);
  };
});
function wi(e) {
  for (const t of Y)
    (!e || e === t.props.type) && t.handler.close();
}
Se.closeAll = wi;
Se._context = null;
const _i = Bn(Se, "$message"), qn = [
  "success",
  "info",
  "warning",
  "error"
], bi = Me({
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
    type: Vn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: H([
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
    type: H(Function),
    default: () => {
    }
  },
  onClose: {
    type: H(Function),
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
    values: [...qn, ""],
    default: ""
  },
  zIndex: Number
}), Ci = {
  destroy: () => !0
}, xi = A({
  name: "ElNotification"
}), Si = /* @__PURE__ */ A({
  ...xi,
  props: bi,
  emits: Ci,
  setup(e, { expose: t }) {
    const n = e, { ns: s, zIndex: o } = Wn("notification"), { nextZIndex: l, currentZIndex: i } = o, { Close: p } = Qa, f = S(!1);
    let g;
    const v = y(() => {
      const C = n.type;
      return C && et[n.type] ? s.m(C) : "";
    }), w = y(() => n.type && et[n.type] || n.icon), M = y(() => n.position.endsWith("right") ? "right" : "left"), $ = y(() => n.position.startsWith("top") ? "top" : "bottom"), x = y(() => {
      var C;
      return {
        [$.value]: `${n.offset}px`,
        zIndex: (C = n.zIndex) != null ? C : i.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: g } = Tn(() => {
        f.value && _();
      }, n.duration));
    }
    function m() {
      g?.();
    }
    function _() {
      f.value = !1;
    }
    function te({ code: C }) {
      C === qe.delete || C === qe.backspace ? m() : C === qe.esc ? f.value && _() : h();
    }
    return nt(() => {
      h(), l(), f.value = !0;
    }), Nn(document, "keydown", te), t({
      visible: f,
      close: _
    }), (C, ne) => (k(), Q(bt, {
      name: c(s).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (R) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        ie(u("div", {
          id: C.id,
          class: L([c(s).b(), C.customClass, c(M)]),
          style: re(c(x)),
          role: "alert",
          onMouseenter: m,
          onMouseleave: h,
          onClick: C.onClick
        }, [
          c(w) ? (k(), Q(c(Qe), {
            key: 0,
            class: L([c(s).e("icon"), c(v)])
          }, {
            default: ae(() => [
              (k(), Q(fn(c(w))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          u("div", {
            class: L(c(s).e("group"))
          }, [
            u("h2", {
              class: L(c(s).e("title")),
              textContent: F(C.title)
            }, null, 10, ["textContent"]),
            ie(u("div", {
              class: L(c(s).e("content")),
              style: re(C.title ? void 0 : { margin: 0 })
            }, [
              Ce(C.$slots, "default", {}, () => [
                C.dangerouslyUseHTMLString ? (k(), z(we, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  u("p", { innerHTML: C.message }, null, 8, ["innerHTML"])
                ], 2112)) : (k(), z("p", { key: 0 }, F(C.message), 1))
              ])
            ], 6), [
              [Ke, C.message]
            ]),
            C.showClose ? (k(), Q(c(Qe), {
              key: 0,
              class: L(c(s).e("closeBtn")),
              onClick: Ne(_, ["stop"])
            }, {
              default: ae(() => [
                T(c(p))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ke, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ki = /* @__PURE__ */ at(Si, [["__file", "notification.vue"]]);
const tt = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, _t = 16;
let Oi = 1;
const ke = function(e = {}, t) {
  if (!he)
    return { close: () => {
    } };
  (ue(e) || Le(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let s = e.offset || 0;
  tt[n].forEach(({ vm: v }) => {
    var w;
    s += (((w = v.el) == null ? void 0 : w.offsetHeight) || 0) + _t;
  }), s += _t;
  const o = `notification_${Oi++}`, l = e.onClose, i = {
    ...e,
    offset: s,
    id: o,
    onClose: () => {
      Mi(o, n, l);
    }
  };
  let p = document.body;
  mt(e.appendTo) ? p = e.appendTo : ue(e.appendTo) && (p = document.querySelector(e.appendTo)), mt(p) || (p = document.body);
  const f = document.createElement("div"), g = T(ki, i, Ee(i.message) ? i.message : Le(i.message) ? () => i.message : null);
  return g.appContext = In(t) ? ke._context : t, g.props.onDestroy = () => {
    Ye(null, f);
  }, Ye(g, f), tt[n].push({ vm: g }), p.appendChild(f.firstElementChild), {
    close: () => {
      g.component.exposed.visible.value = !1;
    }
  };
};
qn.forEach((e) => {
  ke[e] = (t = {}, n) => ((ue(t) || Le(t)) && (t = {
    message: t
  }), ke({ ...t, type: e }, n));
});
function Mi(e, t, n) {
  const s = tt[t], o = s.findIndex(({ vm: g }) => {
    var v;
    return ((v = g.component) == null ? void 0 : v.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: l } = s[o];
  if (!l)
    return;
  n?.(l);
  const i = l.el.offsetHeight, p = t.split("-")[0];
  s.splice(o, 1);
  const f = s.length;
  if (!(f < 1))
    for (let g = o; g < f; g++) {
      const { el: v, component: w } = s[g].vm, M = Number.parseInt(v.style[p], 10) - i - _t;
      w.props.offset = M;
    }
}
function Ii() {
  for (const e of Object.values(tt))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ke.closeAll = Ii;
ke._context = null;
const Ti = Bn(ke, "$notify"), gt = {
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
    s === "center" ? _i({
      message: t,
      type: n,
      duration: o,
      showClose: l,
      grouping: !0
    }) : Ti({
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
}, vt = "[screen-recorder]", Pi = (e) => {
  if (e)
    return JSON.parse(JSON.stringify(e));
}, U = async (e, t) => {
  const n = performance.now(), s = Pi(t);
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
}, zi = () => U("screen_recorder_get_ffmpeg_status"), ye = (e) => U("screen_recorder_set_capture_excluded", { excluded: e }), ze = (e) => U("screen_recorder_set_passthrough_region", { region: e }), Ni = () => U("screen_recorder_pick_target_window"), $i = () => U("screen_recorder_close_window"), Li = (e, t) => U("screen_recorder_start_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Ei = () => U("screen_recorder_pause_recording"), Di = (e, t) => U("screen_recorder_resume_recording", {
  region: e,
  fps: t.fps,
  quality: t.quality,
  audio: t.format === "mp4"
}), Fi = () => U("screen_recorder_stop_recording"), Ri = () => U("screen_recorder_cancel_recording"), Wi = () => U("screen_recorder_cancel_export"), Ai = (e, t) => U("screen_recorder_export_recording", {
  format: e.format,
  fps: e.fps,
  quality: e.quality,
  savePath: e.savePath,
  durationMs: t
}), dn = () => ({
  format: "mp4",
  fps: 30,
  quality: "standard",
  savePath: "",
  audio: !0
}), E = "[screen-recorder]";
function ji() {
  const e = S("selecting"), t = S(dn()), n = S(null), s = S(null), o = S(""), l = S(null), i = S(0), p = S(0), f = S(null), g = () => {
    p.value = e.value === "recording" && l.value !== null ? i.value + Date.now() - l.value : i.value;
  }, v = () => {
    f.value !== null && (window.clearInterval(f.value), f.value = null);
  }, w = () => {
    v(), g(), f.value = window.setInterval(() => {
      g();
    }, 250);
  }, M = async () => (console.info(`${E} refresh ffmpeg status`), n.value = await zi(), console.info(`${E} ffmpeg status`, n.value), n.value), $ = async (R) => {
    o.value = "", s.value = null, console.info(`${E} begin requested`, { region: R, settings: t.value });
    const fe = n.value ?? await M();
    if (!fe.available)
      throw new Error(fe.message || "FFmpeg unavailable");
    await Li(R, t.value), e.value = "recording", i.value = 0, p.value = 0, l.value = Date.now(), w(), console.info(`${E} recording started`, { status: e.value });
  }, x = async () => {
    e.value === "recording" && (console.info(`${E} pause requested`, { elapsedMs: p.value }), g(), i.value = p.value, l.value = null, v(), await Ei(), e.value = "paused", console.info(`${E} recording paused`, { accumulatedMs: i.value }));
  }, h = async (R) => {
    e.value === "paused" && (console.info(`${E} resume requested`, { region: R, settings: t.value }), await Di(R, t.value), e.value = "recording", l.value = Date.now(), w(), console.info(`${E} recording resumed`));
  }, m = async () => {
    e.value !== "recording" && e.value !== "paused" || (console.info(`${E} stop requested`, { status: e.value, elapsedMs: p.value }), g(), i.value = p.value, l.value = null, v(), await Fi(), e.value = "exporting", console.info(`${E} recording stopped`, { accumulatedMs: i.value }));
  }, _ = async () => {
    console.info(`${E} export requested`, { settings: t.value }), e.value = "exporting";
    try {
      return s.value = await Ai(t.value, Math.round(p.value)), e.value = "completed", console.info(`${E} export completed`, s.value), s.value;
    } catch (R) {
      throw e.value = "ready", s.value = null, R;
    }
  }, te = async () => {
    console.info(`${E} cancel export requested`, { status: e.value }), await Wi(), e.value = "ready", s.value = null;
  }, C = async () => {
    console.info(`${E} cancel requested`, { status: e.value, elapsedMs: p.value }), v(), await Ri(), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, s.value = null, console.info(`${E} canceled`);
  }, ne = () => {
    console.info(`${E} reset session`), e.value = "selecting", l.value = null, i.value = 0, p.value = 0, s.value = null, o.value = "", t.value = dn();
  };
  return gn(() => {
    v();
  }), {
    status: e,
    settings: t,
    ffmpegStatus: n,
    result: s,
    errorMessage: o,
    elapsedMs: p,
    refreshFfmpegStatus: M,
    begin: $,
    pause: x,
    resume: h,
    stop: m,
    exportFile: _,
    cancelExport: te,
    cancel: C,
    reset: ne
  };
}
const Bi = { class: "screen-recorder" }, Hi = ["onMousedown"], Vi = { class: "window-title" }, Ui = { class: "capture-viewport" }, Gi = { class: "control-strip" }, qi = { class: "control-group control-group--tools" }, Ki = { class: "tool-pill" }, Yi = ["title", "disabled"], Zi = { class: "select-field" }, Xi = ["disabled"], Ji = ["disabled"], Qi = ["disabled"], er = { value: "high" }, tr = { value: "standard" }, nr = { value: "small" }, sr = { class: "dimension-group optional-size" }, or = { class: "dimension" }, ar = ["value"], ir = { class: "dimension" }, rr = ["value"], lr = { class: "control-group control-group--actions" }, ur = { class: "time" }, cr = { class: "button-label" }, dr = { class: "button-label" }, pr = ["title"], hr = { class: "export-progress__meta" }, fr = { class: "export-progress__track" }, gr = ["title"], vr = ["disabled"], yr = { class: "record-label" }, mr = {
  key: 0,
  class: "warning"
}, q = "[screen-recorder]", He = 80, pn = 420, hn = 260, wr = 8, Ve = 1, _r = /* @__PURE__ */ A({
  __name: "index",
  setup(e) {
    const t = mn(), n = S(null), s = S({ width: 0, height: 0 }), o = S(null), l = S(!1), i = S(0), p = S(!1), f = S(null);
    let g = null, v = null, w = null, M = null;
    const $ = [
      { className: "n", direction: "North" },
      { className: "ne", direction: "NorthEast" },
      { className: "e", direction: "East" },
      { className: "se", direction: "SouthEast" },
      { className: "s", direction: "South" },
      { className: "sw", direction: "SouthWest" },
      { className: "w", direction: "West" },
      { className: "nw", direction: "NorthWest" }
    ], {
      status: x,
      settings: h,
      ffmpegStatus: m,
      result: _,
      elapsedMs: te,
      refreshFfmpegStatus: C,
      begin: ne,
      pause: R,
      resume: fe,
      stop: O,
      exportFile: zt,
      cancelExport: it,
      cancel: Kn,
      reset: Yn
    } = ji(), Nt = S(!1), Ie = y(() => x.value === "recording" || x.value === "paused" || x.value === "exporting"), rt = y(() => h.value.audio && h.value.format === "mp4"), Te = y(() => rt.value && x.value === "recording"), Zn = y(() => {
      if (o.value)
        return {
          width: `${o.value.width / o.value.scale + 2}px`,
          height: `${o.value.height / o.value.scale + 2}px`
        };
    }), Xn = y(() => {
      const a = Te.value && !p.value ? i.value : 0, r = (b, N) => Math.max(0.18, Math.min(1, b + a * N)).toFixed(3);
      return {
        "--bar-1": r(0.28, 0.64),
        "--bar-2": r(0.42, 0.78),
        "--bar-3": r(0.34, 0.94),
        "--bar-4": r(0.22, 0.72)
      };
    }), Jn = y(() => {
      if (h.value.format === "gif")
        return "GIF 不支持音频";
      if (p.value && h.value.audio)
        return "音频已开启；实时音量动画不可用不影响导出系统声音";
      if (_.value?.audioDevice)
        return `已录制音频：${_.value.audioDevice}`;
      if (_.value && !_.value.hasAudio)
        return "未检测到可用音频设备，导出视频无声音";
      if (m.value?.available && !m.value.systemAudioAvailable) {
        const a = m.value.audioDevices?.join("、") || "无";
        return h.value.audio ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${a}` : "录制音频已关闭";
      }
      return h.value.audio ? "录制音频已开启。系统声音将通过 WASAPI Loopback 捕获" : "录制音频已关闭";
    }), $t = y(() => {
      const a = f.value?.progress ?? 0.03;
      return Math.max(1, Math.min(100, Math.round(a * 100)));
    }), lt = y(() => {
      const a = f.value;
      return a ? a.totalFrames && a.stage === "frames" ? `${a.message}` : a.message || "正在导出..." : "正在导出...";
    }), Qn = y(() => {
      const a = f.value;
      return a?.totalFrames ? `${lt.value} (${a.currentFrame}/${a.totalFrames})` : lt.value;
    }), es = y(() => {
      const a = Math.floor(te.value / 1e3), r = Math.floor(a / 60).toString().padStart(2, "0"), b = (a % 60).toString().padStart(2, "0");
      return `${r}:${b}`;
    }), ge = async (a) => {
      try {
        await a();
      } catch (r) {
        console.error(`${q} action failed`, r), Nt.value || gt.msg(r?.message || String(r), "error");
      }
    }, Lt = (a) => Math.max(2, Math.floor(Math.round(a) / 2) * 2), Fe = async () => {
      const a = n.value;
      if (!a)
        throw new Error("录制视口尚未准备好");
      const r = a.getBoundingClientRect(), b = await t.scaleFactor(), N = await t.innerPosition(), W = Lt(r.width * b), I = Lt(r.height * b);
      if (W < He || I < He)
        throw new Error("录制区域太小，请放大录制窗口");
      const X = {
        x: r.left,
        y: r.top,
        width: W / b,
        height: I / b,
        screenX: Math.round(N.x + r.left * b),
        screenY: Math.round(N.y + r.top * b),
        physicalWidth: W,
        physicalHeight: I,
        scale: b
      };
      return console.info(`${q} capture region`, X), X;
    }, j = async () => {
      try {
        const a = await Fe();
        s.value = {
          width: a.physicalWidth,
          height: a.physicalHeight
        }, await ze({
          x: Math.round(a.x * a.scale),
          y: Math.round(a.y * a.scale),
          width: a.physicalWidth,
          height: a.physicalHeight
        }).catch(() => {
        });
      } catch {
        s.value = { width: 0, height: 0 }, await ze(null).catch(() => {
        });
      }
    }, Re = async () => {
      await ze(null).catch(() => {
      });
    }, Et = () => {
      l.value = !1, o.value = null;
    }, Dt = () => {
      window.setTimeout(() => {
        j();
      }, 120);
    }, Ft = () => new Promise((a) => {
      requestAnimationFrame(() => requestAnimationFrame(() => a()));
    }), ts = async () => {
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
    }, Rt = (a, r) => {
      const b = Math.min(a.width, r.width), N = Math.min(a.height, r.height), W = r.x + r.width - b, I = r.y + r.height - N;
      return {
        x: Math.min(Math.max(a.x, r.x), W),
        y: Math.min(Math.max(a.y, r.y), I),
        width: b,
        height: N
      };
    }, Wt = async (a) => {
      await t.setSize(new le(Math.round(a.width), Math.round(a.height))), await t.setPosition(new Z(Math.round(a.x), Math.round(a.y))), await Ft();
    }, ut = async () => {
      const [a, r] = await Promise.all([
        Fe(),
        ts()
      ]);
      return { actualRegion: a, currentFrame: r };
    }, ns = async (a, r, b) => {
      const { actualRegion: N, currentFrame: W } = await ut(), I = N.screenX - W.x, X = N.screenY - W.y, Ae = W.x + W.width - (N.screenX + N.physicalWidth), ct = W.y + W.height - (N.screenY + N.physicalHeight);
      return {
        x: a.screenX - I,
        y: a.screenY - X,
        width: Math.max(r, a.physicalWidth + I + Ae),
        height: Math.max(b, a.physicalHeight + X + ct)
      };
    }, At = async () => {
      w?.(), w = null, i.value = 0;
    }, We = async () => {
      if (!(!rt.value || w))
        try {
          console.info(`${q} backend audio meter listening`), w = await Ze("screen_recorder_audio_level", (a) => {
            if (!Te.value) {
              i.value = 0;
              return;
            }
            const r = Math.max(0, Math.min(1, Number(a.payload?.level ?? 0)));
            i.value = i.value * 0.38 + r * 0.62;
          }), p.value = !1;
        } catch (a) {
          console.error(`${q} audio meter failed`, a), p.value = !0;
        }
    }, ss = async (a) => {
      a.button !== 0 || Ie.value || (Et(), await Re(), await t.startDragging().catch((r) => {
        gt.msg(r?.message || String(r), "error");
      }), Dt());
    }, os = async (a) => {
      Ie.value || (Et(), await Re(), await t.startResizeDragging(a).catch((r) => {
        gt.msg(r?.message || String(r), "error");
      }), Dt());
    }, as = () => ge(async () => {
      console.info(`${q} handle start`), f.value = null, await We(), await ye(!0).catch(() => {
      }), await j(), await ne(await Fe());
    }), is = () => ge(async () => {
      console.info(`${q} handle pause`), await R();
    }), rs = () => ge(async () => {
      console.info(`${q} handle resume`), await fe(await Fe());
    }), ls = () => ge(async () => {
      console.info(`${q} handle stop/export`), f.value = {
        stage: "encode",
        message: h.value.format === "gif" ? "准备生成 GIF 帧" : "准备导出 MP4",
        progress: 0.01,
        currentFrame: 0
      }, await O(), i.value = 0, await zt(), await j(), await ye(!1).catch(() => {
      });
    }), us = () => ge(async () => {
      console.info(`${q} handle cancel export`), await it(), f.value = null, await j();
    }), cs = () => {
      const a = { ...h.value };
      Re(), Yn(), h.value = a, x.value = "ready", _.value = null, f.value = null, ye(!0).catch(() => {
      }), me(j), We();
    }, ds = async (a) => {
      const r = await Ds(a.screenX, a.screenY), b = r?.scaleFactor || await t.scaleFactor();
      l.value = !0, o.value = {
        width: a.physicalWidth,
        height: a.physicalHeight,
        scale: b
      }, await me(), await Ft();
      const N = Math.round(pn * b), W = Math.round(hn * b), I = r ? {
        x: r.position.x,
        y: r.position.y,
        width: r.size.width,
        height: r.size.height
      } : null, X = (() => {
        if (!I) return !1;
        const P = Math.max(8, Math.round(8 * b)), J = I.x + I.width, G = I.y + I.height, je = a.screenX + a.physicalWidth, vs = a.screenY + a.physicalHeight;
        return a.screenX <= I.x + P && a.screenY <= I.y + P && je >= J - P && vs >= G - P;
      })(), Ae = await ns(
        a,
        N,
        W
      );
      await Wt(
        I && X ? Rt(Ae, I) : Ae
      ), await me();
      const ct = async () => {
        const { actualRegion: P, currentFrame: J } = await ut(), G = {
          x: a.screenX - P.screenX,
          y: a.screenY - P.screenY,
          width: a.physicalWidth - P.physicalWidth,
          height: a.physicalHeight - P.physicalHeight
        };
        if (Math.abs(G.x) <= Ve && Math.abs(G.y) <= Ve && Math.abs(G.width) <= Ve && Math.abs(G.height) <= Ve)
          return !0;
        const je = {
          x: J.x + G.x,
          y: J.y + G.y,
          width: Math.max(N, J.width + G.width),
          height: Math.max(W, J.height + G.height)
        };
        return await Wt(
          I && X ? Rt(je, I) : je
        ), !1;
      };
      try {
        for (let J = 0; J < wr && !await ct(); J += 1)
          ;
        const { actualRegion: P } = await ut();
        console.info(`${q} snap result`, {
          target: a,
          actualRegion: P,
          residual: {
            left: P.screenX - a.screenX,
            top: P.screenY - a.screenY,
            right: P.screenX + P.physicalWidth - (a.screenX + a.physicalWidth),
            bottom: P.screenY + P.physicalHeight - (a.screenY + a.physicalHeight)
          },
          monitorCovering: X
        });
      } catch (P) {
        console.warn(`${q} snap correction skipped`, P);
      }
      await j();
    }, ps = () => ge(async () => {
      await Re();
      const a = await Ni();
      await ds(a);
    }), hs = async () => {
      await t.minimize();
    }, jt = async () => {
      Nt.value = !0;
      try {
        x.value === "exporting" ? await it().catch(() => {
        }) : await Kn(), await ze(null).catch(() => {
        }), await ye(!1).catch(() => {
        });
      } catch {
      }
      await $i();
    }, fs = async () => {
      _.value && (await j(), await d("open_file_with_default_app", { filePath: _.value.path }));
    }, gs = async () => {
      _.value && (await j(), await d("show_file_in_folder", { filePath: _.value.path }));
    }, Bt = (a) => {
      a.key === "Escape" && (a.preventDefault(), jt());
    };
    return nt(async () => {
      x.value = "ready", await t.setMinSize(new Ct(pn, hn)).catch(() => {
      }), await ye(!0).catch(() => {
      }), await C().catch(() => {
      }), await me(), await j(), await We(), await me(), await t.emit("screen_recorder_ready"), M = await Ze("screen_recorder_export_progress", (a) => {
        f.value = a.payload;
      }).catch(() => null), n.value && (g = new ResizeObserver(() => {
        j();
      }), g.observe(n.value)), v = await t.onMoved(() => {
        j();
      }).catch(() => null), window.addEventListener("resize", j), window.addEventListener("keydown", Bt);
    }), be(rt, (a) => {
      a ? We() : At();
    }), be(x, (a) => {
      a !== "recording" && (i.value = 0), a !== "exporting" && (f.value = null);
    }), gn(() => {
      g?.disconnect(), v?.(), M?.(), window.removeEventListener("resize", j), window.removeEventListener("keydown", Bt), ze(null).catch(() => {
      }), ye(!1).catch(() => {
      }), At();
    }), (a, r) => (k(), z("div", Bi, [
      u(
        "div",
        {
          class: L(["recorder-shell", { recording: c(x) === "recording", paused: c(x) === "paused", "snap-aligned": l.value }])
        },
        [
          (k(), z(
            we,
            null,
            Os($, (b) => u("span", {
              key: b.className,
              class: L(["resize-zone", b.className]),
              onMousedown: Ne((N) => os(b.direction), ["prevent"])
            }, null, 42, Hi)),
            64
            /* STABLE_FRAGMENT */
          )),
          u(
            "header",
            {
              class: "title-bar",
              onMousedown: ss
            },
            [
              u(
                "span",
                Vi,
                F(a.$t("screenRecorder.title") || "区域录制"),
                1
                /* TEXT */
              ),
              u(
                "div",
                {
                  class: "window-actions",
                  onMousedown: r[0] || (r[0] = Ne(() => {
                  }, ["stop"]))
                },
                [
                  u("button", {
                    class: "title-button title-button--window",
                    title: "最小化",
                    onClick: hs
                  }, [
                    T(c(Bs), {
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
                    onClick: jt
                  }, [
                    T(c(js), {
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
          u("main", Ui, [
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
                style: re(Zn.value)
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
          u("footer", Gi, [
            u("div", qi, [
              u("div", Ki, [
                c(x) === "ready" || c(x) === "completed" ? (k(), z(
                  "button",
                  {
                    key: 0,
                    class: "icon-control snap-control",
                    title: "拖到目标窗口并松开以对齐",
                    "aria-label": "对齐目标窗口",
                    onMousedown: Ne(ps, ["prevent"])
                  },
                  [
                    T(c(Hs), {
                      theme: "outline",
                      size: "18",
                      strokeWidth: 3,
                      strokeLinecap: "butt"
                    })
                  ],
                  32
                  /* NEED_HYDRATION */
                )) : ee("v-if", !0),
                u("button", {
                  class: L(["audio-meter", { active: Te.value && i.value > 0.03, metering: Te.value && !p.value, muted: !Te.value || p.value }]),
                  title: Jn.value,
                  "aria-label": "系统声音录制状态",
                  disabled: c(x) === "exporting" || c(h).format === "gif"
                }, [
                  u(
                    "span",
                    {
                      class: "audio-bars",
                      style: re(Xn.value)
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
              u("label", Zi, [
                ie(u("select", {
                  "onUpdate:modelValue": r[1] || (r[1] = (b) => c(h).fps = b),
                  disabled: Ie.value
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
                  [dt, c(h).fps]
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
                "onUpdate:modelValue": r[2] || (r[2] = (b) => c(h).format = b),
                class: "format-select optional-format",
                disabled: Ie.value
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
              ]), 8, Ji), [
                [dt, c(h).format]
              ]),
              ie(u("select", {
                "onUpdate:modelValue": r[3] || (r[3] = (b) => c(h).quality = b),
                class: "quality-select optional-quality",
                disabled: Ie.value
              }, [
                u(
                  "option",
                  er,
                  F(a.$t("screenRecorder.qualityHigh")),
                  1
                  /* TEXT */
                ),
                u(
                  "option",
                  tr,
                  F(a.$t("screenRecorder.qualityStandard")),
                  1
                  /* TEXT */
                ),
                u(
                  "option",
                  nr,
                  F(a.$t("screenRecorder.qualitySmall")),
                  1
                  /* TEXT */
                )
              ], 8, Qi), [
                [dt, c(h).quality]
              ]),
              u("div", sr, [
                u("label", or, [
                  u("input", {
                    value: s.value.width,
                    readonly: ""
                  }, null, 8, ar)
                ]),
                r[17] || (r[17] = u(
                  "span",
                  { class: "multiply" },
                  "×",
                  -1
                  /* HOISTED */
                )),
                u("label", ir, [
                  u("input", {
                    value: s.value.height,
                    readonly: ""
                  }, null, 8, rr)
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
            u("div", lr, [
              c(x) === "recording" || c(x) === "paused" ? (k(), z(
                we,
                { key: 0 },
                [
                  u(
                    "span",
                    ur,
                    F(es.value),
                    1
                    /* TEXT */
                  ),
                  u("button", {
                    class: "control-button",
                    onClick: r[4] || (r[4] = (b) => c(x) === "paused" ? rs() : is())
                  }, [
                    u(
                      "span",
                      cr,
                      F(c(x) === "paused" ? a.$t("screenRecorder.resume") : a.$t("screenRecorder.pause")),
                      1
                      /* TEXT */
                    )
                  ]),
                  u("button", {
                    class: "control-button danger",
                    onClick: ls
                  }, [
                    u(
                      "span",
                      dr,
                      F(a.$t("screenRecorder.stop")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              )) : c(x) === "exporting" ? (k(), z(
                we,
                { key: 1 },
                [
                  u("div", {
                    class: "export-progress",
                    title: Qn.value
                  }, [
                    u("div", hr, [
                      u(
                        "span",
                        null,
                        F(lt.value),
                        1
                        /* TEXT */
                      ),
                      u(
                        "strong",
                        null,
                        F($t.value) + "%",
                        1
                        /* TEXT */
                      )
                    ]),
                    u("div", fr, [
                      u(
                        "span",
                        {
                          style: re({ width: `${$t.value}%` })
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ])
                  ], 8, pr),
                  u("button", {
                    class: "control-button danger",
                    title: "取消导出",
                    onClick: us
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
              )) : c(x) === "completed" && c(_) ? (k(), z(
                we,
                { key: 2 },
                [
                  u("span", {
                    class: "save-status optional-save-status",
                    title: c(_).path
                  }, F(c(_).hasAudio ? "已保存·有声" : "已保存·无声"), 9, gr),
                  u("button", {
                    class: "control-button",
                    title: "打开文件",
                    onClick: fs
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
                    onClick: gs
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
                    onClick: cs
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
              )) : (k(), z("button", {
                key: 3,
                class: "record-button",
                disabled: c(m)?.available === !1 || s.value.width < He || s.value.height < He,
                onClick: as
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
                  yr,
                  F(a.$t("screenRecorder.start")),
                  1
                  /* TEXT */
                )
              ], 8, vr))
            ])
          ])
        ],
        2
        /* CLASS */
      ),
      c(m) && !c(m).available ? (k(), z(
        "p",
        mr,
        F(c(m).message || a.$t("screenRecorder.ffmpegMissing")),
        1
        /* TEXT */
      )) : ee("v-if", !0)
    ]));
  }
}), br = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Cr = /* @__PURE__ */ br(_r, [["__scopeId", "data-v-c3219271"]]), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" }));
export {
  kr as activate
};
